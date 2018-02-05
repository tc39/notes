# July 25, 2013 Meeting Notes
-----


John Neumann (JN), Luke Hoban (LH), Rick Hudson (RH), Allen Wirfs-Brock (AWB), Yehuda Katz (YK), Anne van Kesteren (AVK), Jeff Morrison (JM), Sebastian Markbåge (SM), Alex Russell (AR), István Sebestyén (IS), Mark S. Miller (MM), Norbert Lindenberg (NL), Erik Arvidsson (EA), Waldemar Horwat (WH), Eric Ferraiuolo (EF), Matt Sweeney (MS), Doug Crockford (DC), Rick Waldron (RW), Rafeal Weinstein (RWN), Dmitry Lomov (DL), Brendan Eich (BE), Ian Halliday (IH), Paul Leathers (PL),

-----

## 5.6 Can let/const/class/function* in non-strict code bind "eval" and "arguments"

(Allen Wirfs-Brock)

AWB: Currently, only var and function have any rules: non-strict is not

YK: Reduce the refactoring hazards

MM: What happens in arrows?

EA: Formal params follow the strict rules (no duplicates, no param named arguments etc), but the bodies are not strict.

RW/BE: Confirm

AWB: If someone writes...

```js
class eval {}
```
And later moves this to a module...

```js
module "foo" {
  class eval {}
}
```

This will blow up

RW: But the same issue exists if:

```js
function eval() {}
```
And later moves this to a module...

```js
module "foo" {
  function eval() {}
}
```


MM, WH: We need to make sure that whatever rule we decide on, is the simplest and easiest to remember

BE: Recall the issue of micro-modes

BE: Based on the decision make Arrows non-strict, the same reasoning applies to params

EA: Strict formal parameters are an early error, strict function body have different runtime semantics so those are a refactorig hazard.

AWB: The spec draft uses StrictFormalParameter for ArrowFunction and MethodDefinition.

YK: Easy to get sanity, by opting into modules and classes

RW: The January notes include rationale regarding the boundary of module and class, but not arrow, there is no note about arrow params being implicitly strict mode

AWB: method names in sloppy mode (object literals) do not allow duplicat names.

YK: Seems OK.
... Code may exist that has methods called "eval" or duplicate params named "_"

MM:

- eval & arguments
- duplicate arrow & method params
- duplicate non-data names in object literals

LH: Agrees that these rules should be applied where code opts-in, not by layered addition of language features

MM: Agrees with LH, in terms of the memory burden (developer end). This wont be clear to anyone but us.

- If you're in non-strict, it should act non-strictly

BE/RW: Yes

Various: explored the consequences of allowing duplicate method parameters even in new-style parameter lists when in non-strict mode. That would be the simplest rule, but it would cause too many edge cases for duplicate parameter names in destructuring, rest parameters, etc., so we all agreed not to pursue that approach.

AWB: The rule that we agreed on, in that past is that when new syntax forms are involved.

- Depends on form of the parameter list

MM: We need to lower the memory burden

EA: This is going to make it greater

MM: Defending exception for new forms of parameter list.

AWB: More complex set of rules if you allow multiple names in simple parameter lists.

- Duplicate param names not allowed, except for function definitions (things declared with function) with simple parameter lists

MM: That's more complex


#### Consensus/Resolution

- General Rule: 
    - Non-strict code operates in consistently non-strict manner (This covers the let/const/function* cases)
    - Exception:
    - Only allow duplicate parameter names in simple parameter lists
    - Simple parameter lists are defined by those that do not include rest or defaults or destructuring.
- Consensus: The name of the ClassDeclaration/ClassExpression follows the strict rules for its name. So it cannot be named "eval" or "arguments". Just like for strict function names.


## 5.9 Semantics and bounds of Number.isInteger and Number.MAX_INTEGER

(Allen Wirfs-Brock, originally proposed by Doug Crockford?)

AWB: What is the value of MAX_INTEGER

WH; Whatever the largest finite double

DC: But there are two

WH: But I said "double"

DC: That's ambiguous

WH: No

MM: WH is not constraining to the contiguous range.

WH: If you want 2^53, call it something else

MM: Likewise with isInteger
...Propose:

    Number.MAX_SAFE_INTEGER = 2^53-1
    Number.isSafeInteger => n > -(2^53)

AWB:

    2^53-1, 2^53, 2^53+2

    2^53+1 === 2^53

After 2^53, you can add 2


WH: Alternate proposal:

    Number.MAX_CONTIGUOUS_INTEGER = 2^53
    Number.isContiguousInteger = n => n >= -(2^53) && n <= (2^53);


MM: Gives history of "isSafeInteger"

Caja had a Nat test that tested that a number was a primitive integer within the range of continguously representable non-negative integers. I used Nat in a small piece of security critical code, to ensure I was doing accurate integer addition and subtraction. Because I was using this definition, Nat admitted 2^53. This introduced a security hole, which escaped notice in a highly examined piece of code which has been published several times and has been the subject of several exercises to do machine checked proofs of some security properties. Despite all this attention and examination, no one caught the vulnerability caused by admitting 2^53. By excluding 2^53, we have the nice invariant that if

isSafeInteger(a)
isSafeInteger(b)
isSafeInteger(a+b)

are all true, then (a+b) is an accurate sum of a and b.

WH: OK

DC: Want to call this Integer

WH: Can't call this integer. 2^54 is an integer, just not inside of the contiguous range. Like the concept, but not ok to name it "isInteger", as 2^100 also happens to be an integer.

BE: Agrees with Mark's "Safe"

YK: Easy to explain that Integers outside of the range

AWB: Current spec checks for mathematical integer

...toInteger makes use of internal ToInteger

MM: Makes sure there is no fractional part?

WH: Yes

WH: If we have toInteger, then we need isInteger or isSafeInteger

AWB:

isInteger
isSafeInteger

MM:

MAX_SAFE_INTEGER = (2^53)-1

isInteger
- Infinity => false
- NaN => false
- value !== truncated value => false
- -0 => true


isSafeInteger
- -0 => true


toInteger
- Does not guarantee a safe integer


ToInteger
- Does not guarantee a safe integer



WH: The only place where ToInteger is divergent is +/-Infinity

WH: We already have Math.trunc, which does the same thing as ToInteger would. Don't need Number.toInteger.


## 5.8 Number.prototype.clz or Math.clz?

WH/AWB: Is an instance operation.

WH: If it's on Math.clz(), it will return the wrong answer if we have different value objects in the future

WH:  In particular, this specifies that the value is 32 bits wide, which  makes it inappropriate as something in Math. Consider what happens if we add a uint64 type. Then we'd want Uint64.clz to count starting from the  64th bit instead of from the 32nd bit. We can do that if it's  Uint64.clz. We can't (without creating weirdness) if we use Math.clz for  both.

AWB: Then it belongs on the instance side.

Any objections?

#### Consensus/Resolution

- Number.prototype.clz


AWB: What about the following:

    Number.isInteger
    Number.isSafeInteger
    Number.isFinite
    Number.isNaN
    Number.toInteger

#### Consensus/Resolution

Remove Number.toInteger (already exists as Math.trunc)

(Reference: https://github.com/rwldrn/tc39-notes/blob/42cf4dd15b0760d87b35714fa2e417b589d76bdc/es6/2013-01/jan-29.md#conclusionresolution-1)


## 5.13 Which existing built-in properties that are read-only/non-configurable do we want to make read-only/configurable?

(Allen Wirfs-Brock)

AWB: Previously, we've discussed setting data properties as {writable: false, configurable: true}

One of these built in properties that discussed is the length property of function

MM: Points about function properties, eg. the prototype property

EA: Classes are a constructor and the prototype, can't use function for the argument to how classes behave

MM: Don't think this is a question that should be addressed for ES6, it's too late.

AWB: Not too late, we've discussed this

AWB: The "prototype" property of the class constructor object is configurable, non-writable

AWB: {writable: false, configurable: true} allows enough control

EA: We also discussed this for methods

YK: This is part of the refactoring hazard I mentioned earlier.

MM: Don't want to consider a change of that magnitude this late in the game

AWB: All of the existing properties from ES5, should we address the whole list?

-

When define a class:

    (Foo.prototype) -C-> <-P- (Foo)


AWB: Foo.prototype.constructor property {writable: false, configurable: true}?

MM: This hazard:

```js
function Bar() {}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.constructor = Bar;
```

Code that exists like this, once Foo gets refactored to a class, if constructor is non-writable, the above breaks.


AWB: [@@create](https://github.com/rwldrn/tc39-notes/blob/42cf4dd15b0760d87b35714fa2e417b589d76bdc/es6/2013-01/jan-29.md#48-refactored-new-operator-and-the-create-method)


```js
Array[@@create]
```

Recap:

    @@create sets the prototype property of the new instance, but referencing the prototype property of the constructor itself.


MM: With regard to function.name and function.length and making them "tamper resistant", but mucking around with the built-in prototype chain has unknown implications and it could be addressed in ES7.

This change allows the actual Array.prototype to be changed.

WH: When does @@create get called?

AWB: when `new` is used.


#### Consensus/Resolution
{writable: false, configurable: true}?

- length property of functions: yes
- prototype property of functions: no
- new properties, ie. @@create: yes




## TC39 + W3C

Discussion joint meeting with W3C at TPAC, Nov 11-15, in Shenzhen, China.



## 5.1 Symbol primitive value or object? One more time.

(Allen Wirfs-Brock)

EA: There is discontent that there isn't private state. Symbols don't cover this. Unique Strings solve the uniqueness case

Proposal:
    Postpone Symbols to ES7


BE: The reason we seperated private and unique was exposure in Reflection modules

YK: You don't need unique symbols when you can just expose private symbols.

MM: The @@iterator symbol must be transitively immutable

In the relationships case, the WeakMap

BE: There are classes that outlive any instances

Why can't we just have (private) Symbols

MM: Two subsystems that aren't supposed to be able to communicate with each other should be able to share anything that is transitively immutable.

BE: Can we unwind the split between private and unique?

YK: (fill this in)

AWB: We deferred private symbols

Private state should not be mixed up with Private Symbols

Symbols are guaranteed uniqueness, wrong way to go for private state.

BE: We aren't going to resolve this now, need to take it to es-discuss

AWB: For the spec, how do I spec Symbols?

Strings won't guarantee

MM/BE: (quick discussion about uuid strings)

WH: What you're saying is that we need a gensym?

AWB: Essentially, what we need is a gensym

BE: Andreas implemented Symbol

AWB: Dug in against wrapper objects for Symbols

1. (did someone catch this one)?

2. Unique objects, unforgeable, can't set or access properties. Are actually objects.

BE: ARB says that v8 internal architecture makes it hard to add new


#### Consensus/Resolution

- Leave the spec as it is now
- Postpone until next f2f


## 5.12 Should we remove [[Construct]] from the MOP and Proxy handler API?

(Allen Wirfs-Brock)

AWB: recapping @@create changes...

```js
new C(...args);
```

Essentially breaks down to:

```js
[[Construct]] =>

let obj = C[@@create]();

return C.[[Call]](obj, ...args);
```

YK: This means that [[Construct]] will always call [[Call]].

AWB: The way the built-ins work, override @@create, eg. Date, creates a private data slot for the time

```js
function String(value) {
if (!(this has an unitialized instance)) {
return "" + value;
}

     this.value = "" + value
}

String[@@create] => { value: uninitialized instance }

```

WH: Disapproves having String when called as a function do different things based on this. This breaks the invariant that String(x) always returns a primitive string.

WH, MM: Also concerned about adding a new uninitialized String instance type as a specing helper but which becomes reified and user-visible. Someone could call String's @@create directly, obtain one of these values, and cause mayhem. Too much surface area of potential problems here, and this is unnecessary complexity.

YK: Objects to removal [[Construct]]

AWB: A Proxy trap?

BE/YK: Keep

#### Consensus/Resolution

- [[Construct]] remains.



## Anti-Pattern to call a constructor without new

(Allen Wirfs-Brock)

AWB: In ES6, with class, it will be an anti-pattern... Don't call without "new"

BE: This is style/convention

Promote the use of `new` with classes

MM: Might want a constructor to refuse to initialize an instance of that class if the call object is not the

EA: Three browsers have implemented Map, Set, WeakMap, WeakSet and all are allowed to be called without `new`, which breaks subclassing

General agreement that this is bad.

AWB/MM: Function.prototype.@@construct

MM: If it implies runtime overhead that is not easily optimized, that would be a perfectly valid argument against. Does it?

In general, wherever we can replace a [[Foo]] internal property with an @@foo unique symbol named property, without penalty, we should. Especially if proxies would otherwise need a special trap for [[Foo]].

YK: Need to be careful when we change the MOP since other specs refers to the mop methods.

#### Consensus/Resolution

- Giving up on the convenience of calling constructors without new, with any expectation
- Throw when Map, Set, WeakMap, WeakSet are called without `new`


## JSON

Any objections to sending the JSON draft 7 version to the general assembly

DC: Made changes. Specifiy code point. Removed summary of grammar. It was redundant. As well as the whitespace issue.

JN: Send proposal to ???. If you don't reply to this thread then it is an implicit approval.



## 6.2 Interfacing ECMAScript & HTML/DOM Event Loops
(Rafael Weinstein)

RWN: (A single slide) How does ES inegrate with the rest of the specified environment with regard to scheduling tasks.


- Enqueue A Task
- The environment _must_ run the task at some point in the future
- The task _must_ be run **after** **all** previous enqueued tasks
- The task _must_ be run on an empty stack.

- Enqueue A Microtask
- The environment _must_ run the microtask at some point in the future
- The microtask _must_ be run **before** **all** previously enqueued tasks
- The microtask _must_ be run **after** **all** previously enqueued microtasks
- The microtask _must_ be run on an empty stack


WH: Note that this defines a total order.

MM: We need to decide how tasks or microtasks that originate from EcmaScript behave

MM: No nested event loop?

General agreement that the ES spec not support nested event loops. If the browser specs require them, i.e., for running JS code while a modal dialog is blocked, then the browser specs would need to state that this is an intended violation of the ES event loop model.

YK: Timing is another issue

MM: Promise scheduling, fifo

Discussion re: the host vs.

w3c bug...


#### Consensus/Resolution

- Needs more offline discussion


## Value Objects Update
(Brendan Eich)
ValueObjects.pdf

BE:

Use Cases:

- Symbol
- int64, uint64 (53 bits not enough)
- Int32x4, Int32x8 (SIMD)
- float32
- Float32x4, Float32x8 (SIMD)
- gignum
- decimal
- rational
- complex


Overloadable Operators

- | ^ &
- ==
- < <=
- << >> >>>
- + -
- * / %
- ~ boolean-test unary- unary+


Preserving Boolean Algebra

- != and ! are not overloadable to preserve identities including
- X ? A : B <=> !X ? B : A

... Too fast, request slides.

http://www.slideshare.net/BrendanEich/value-objects

"complex and rational cannot be composed to make ratplex"

AVK: Multiple globals will cause issues.

BE: That is not an issue with this proposal. It is an issue with multiple globals.
... we need literal syntax for readability.
... no solution for user defined literal suffixes.

BE: Some have requested mutable value objects in order to represent small tuples and be able to do updates on them in a loop.

WH: This no more requires value objects to be mutable than incrementing a loop counter requires integers to be mutable. It's the variable that holds the integer 3 that's mutable and an be changed to refer to a different integer; you can't change the integer 3 itself to be 5. If the value is a small tuple and the source and destination are the same, it's easy enough for a compiler to transform a functional-style tuple update into imperative code if it likes.

WH, MM: Don't want mutable number literals/objects. No `new Float32x4(a, b, c, d)`. This would break === (which would then need to do identity matching instead of same-value matching).

```js

typeof x == typeof y && x == y
  <=>
x === y

0m === 0
0L == 0
0m == 0L
```

BE: typeof become advisory

AWB: You can register typeof result once during registration. That way we can enforce that it does not changes.


#### Consensus/Resolution

- NaN requires separately overloadable <= and < [Slide 5]
- Intersection means function identity matters, so multimethods can break cross-realm [Slide 9]
- Mark objects that I or i as bignum suffix conflicts with complex [Slide 11].
- Always throw on new -- value objects are never mutable and should not appear to be so, even if aggregate [Slide 12]
- Need to work through any side channel hazard of the typeof registry [Slide 13] and the multimethod dispatch "registry"



## 6.5 Parallel JavaScript (River Trail)
(Rick Hudson)
...need slides

RH: We have to go parallel to keep up with other langauages

YK: Don't want to fallback into sequential

Various: Debate about what happens when the parallel computations have side effects that introduce dependencies between them. Options are either devolving into sequential computation or throwing an exception.

RH: The code behaves the same way as sequential code but goes faster if there are no side effects.

WH: What happens if there are no side effects but some of the computations throw exceptions? Which exception do you get?

RH: Any of them. There are also other implementation options here.

WH: If it's any of them, then this is not like sequential code.

WH: What exactly is a side effect? How would a programmer know that some ECMAScript construct has an internal side effect?

WH: In particular, suppose that I want to use a parallel loop to fill a big matrix with random numbers. Is calling a random number generator considered to be a side effect or not? If the answer is yes (it is a side effect), then how would one fill a big matrix with random numbers in parallel, as that is something that one would reasonably want to be able to do?

#### Consensus/Resolution

- Throw instead of falling back to sequential.
- Focus on concurrency/scheduling in ES7. Make sure it fits with other concurrency constructs (promises/event queues)
- Discussion/Acceptance in ES7 process.


## RWS Proposal For Specification Process (for ES7 process)

#### Consensus/Resolution

- Go forth

## 7 Internationalization

NL: Implementations of ECMAScript Internationalization API:
    - Microsoft has shipped it in Internet Explorer 11 beta
    - Opera has shipped it in Opera 15 (based on Chromium)

## Future Meetings

Sept 17-19, Boston
Nov 19-21, San Jose
