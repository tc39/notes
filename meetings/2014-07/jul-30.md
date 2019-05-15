# July 30, 2014 Meeting Notes    
-----


Brian Terlson (BT), Dmitry Lomov (DL), Waldemar Horwat (WH), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jafar Husain (JH), Jeff Morrison (JM), Mark Honenberg (MH), Caridy Patiño (CP), Sebastian Markbåge (SM), István Sebestyén (IS), Erik Arvidsson (EA), Brendan Eich (BE), Mark S. Miller (MM), Sam Tobin-Hochstadt (STH), Domenic Denicola (DD), Peter Jensen (PJ), John McCutchan (JMC), Paul Leathers (PL), Eric Toth (ET), Abhijith Chatra (AC), Jaswanth Sreeram (JS), Yehuda Katz (YK), Dave Herman (DH), Brendan Eich (BE), 



-----

## RFTG Admin: ES6 Opt-out period. 

(Allen Wirfs-Brock)

https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-07/ecma-262-6-optout1.pdf

AWB: This is the opt-out period: Aug. 11, 2014 - Oct. 11, 2014

Final opt-out window: March 16, 2015 - May 18, 2015

Read the policy, speak with István Sebestyén for further information. 

The opt-out version of the spec is: ECMA-262 6th Edition, revision 26, document: tc39/2014/031



## 4.4 Instantiation Reform (Review @@create design rationale and possible alternatives)

(Mark Miller, Allen Wirfs-Brock, Dmitry Lomov, Tom Van Cutsem. Based on Claude Pache proposal )

https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-07/instantiation-reform.pdf

AWB: Currently: 
    
```js
new Foo(arg)
```

1. `Foo[[Construct]](arg)` ::=
  1. `let obj = Foo[@@create]()`
  2. `foo.call(obj, arg)`
  
The actual constructor method typically does all of the initialization and setup on the instance object.

Issues: 

(DOM centric)
1. If instances aren't sufficiently initialized by @@create, then instance objects could leak (e.g. via a nefarious decoupling between the @@create allocation process and the constructor-function initialization process)
2. @@create could be called directly


DH: Do we have concrete examples of this problem?

JM: Dealing with legacy code where you want to subclass from legacy constructors, need to set up state, `this` uninitialized

AWB: Gives `Date` example, where `[[DateValue]]` isn't setup until `super()`

DH: The initialization of the internal field cannot happen until the super constructor is called to create _that_ field.

YK: This is caused by the @@create not accepting the constructor arguments.

AWB: Yes. Propose: Remove @@create, replace it with @@new, which will make the arguments available to 

YK: When you subclass, it's normal to call super and pass the arguments. 

AWB: @@create is a property of the constructor, not the instance.
Creating a subclass, you may want to do something with the arguments before passing to `super`

JM: or adjust some state on the subclass instance before calling `super`

AWB: There is a complication that built-ins have: different behaviour when `new`'ed or `call`'ed
No internal distinguishing mechanism. No way to indicate that a constructor was called or newed.

YK: Don't think we need to be concerned with handling 

AWB: A subclass will create a "call" up to the `super`

Explanation of current spec handling.

JM: Issues: were we called, or newed. One deals with intermediary state initialization.

AWB: The issue is coupling between state and the instance. 
Do we agree that there's a problem?

(no one says no)

JM: There are scenarios where a subclass wants to initialize state before calling super()

YK: It seems like a feature, not a bug

WH: What are you calling the intermediary state

YK: The fact that you can observe the creation
There has to be brand check

DH: The simplest way of saying is that all need brand checks.

YK: Can do: `foo.call(any)` and there is obviously a check there.

AWB: Internal slots are initialized in an atomic unit, 

YK: 

DL: TypedArrays missing creation information

AWB: You can move all the logic [to @@create or @@new or something akin], but you've just created another constructor

WH: Why not do everything from @@create in the constructor

DL/AWB: Jason Orendorff's proposal.

DH: (not-quite-right summary of Jason's proposal)

AWB: One way: reify [[Construct]] to the user

DH: When `new Foo(args)`, calls `Foo[@@new](args)` ... ?

DL: Just pass the args to `@@create` and change `@@create` to `@@new`

NM: But then the subtype must have same signature

AWB: 2 viable options for ES6

- Live with what we have, @@create is grungy, but not unsafe
- Alternative, originating with Claude Pache

Bring back to constructor with atomic invocation. I'm for this approach and it's reasonable for ES6

(Mark presenting...)

MM: 

Goals

Subclass exotics
Avoid un (or partially) initialized exotics

ES5 compat (aside from "rcvr")
ES6 class compat (aside from @@create)
Reliable test for "am i called as a constructor?"
Support base-creates-proxy scenario


```js
class Derived extends Base {
  constructor() {
    // TDZ this, on "new Derived..." etc.
    super(...otherArgs); // this = what super returns
    // this is initialized.
  }    
}

// 

function Base(...otherArgs) {
  // implicit this = Object.create(mostDerived.prototype, {});
}
```


AWB: The `super()` call is calling the super class constructor as a _constructor_ when `new Derived()`—that's important.

WH: When constructor() is called as a function, super is called as a function too?

MM: Yes

WH: What causes the TDZ to appear? The statically visible presence of a super call in the body of the constructor?

AWB: Yes

WH: What if the super call is inside an arrow function?

BE: If `Derived` called without `new`? 

AWB: `super()` is called a non-constructor.


WH: super cannot appear in a nested function?



AWB: they can appear, but... (trails off)

JM: A related use case is being able to set up stuff on the instance before calling super()

AWB: Show me code that does that, to make sure we don't break that. 

BE: code that doesn't actually use super() won't break, and there is no such code yet

MM: Base is an example of a function that doesn't have a super call (because it can't). On entry, before user code, implicit init this of fresh newly created object. This is a difference from ES5. The "mostDerived" prototype ...?

AWB: this actually isn't a difference from ES5, because there is no super() in ES5

MM: you are correct

MM: how do people feel?

JM: It's not an issue with ES5 -> ES6 legacy, it's an issue with ES6 class designs that evolve over time

YK: my concern is the pedagogy of this approach.

MM: the pedagogy is as shown in this slide.

DH: No! It cannot be taught this way.

BE: let's just let Mark present.


MM: 
    
**From Claude Pache**

```js
F.[[Construct]](args, rcvr)
```

- Distinguish functions-which-call-super
- Vanilla function at end of super-call-chain is base (instantiation postponed to base entry)

**Modifications to Claude's proposal **
    
```js
F.[[Construct]](args, rcvr)
```
- mod: Only MOP signature change
- Distinguish functions-which-call-super
- mod: call-super-as-a-function
- `super()`, but not `super.foo()`
- Vanilla function at end of super-call-chain is base (instantiation postponed to base entry)
- mod: instantiation postponed to base entry


YK: What about subclass constructors that don't include a call to `super()`. 

AWB: Throw when `new`'ed

Agreement.

JM: I still have issues with state initialization

YK: Issues

BE: Concern about setting properties on the instance before `super()`

JM: Code patterns exist, they won't just go away. 

AWB: Can get around it with `super.constructor()`

BE: Lose the static analysis of `super(` (right paren intentionall omitted)

MM: 
    
**[[Call]] Traps**

```
F(...args) -> F.[[Call]](undefined, args)

Derive.[[Call]](const this, args)
  super(...other) -> super.special_name(...other)
```

WH: What is the special name?

MM/AWB/DD: (to Waldemar) This is the ES6 spec

WH: Explain?

AWB: methods that ref super are bound to an object where the super ref takes place. that binding is the current inst. two bound values object where look up starts and the method name.

MM: 
    
**[[Construct]] Traps**

```
new F(...args) -> F.[[Construct]](args, F)

Base.[[Construct]](rcvr, args)
  entry -> const this = [[Create]](rcvr.prototype)

Derive.[[Construct]](args, rcvr)
  entry -> TDZ this
  super(...other) -> const this = super.[[Construct]](other, rcvr)
```


**Remaining Requirements**

Am I called as a constructor?

What is the original's constructor's prototype?

How do I provide alternate instance to the subclasses?




**Am I called as a constructor?**


```js
function F(...other) {         
  let constructing = false;
  try { this; } catch(_) { constructing = true; }         
  super(..);
}
```

**Base instantiates proxy scenario**


```js
function Base(...other) {
  return new Proxy(... this.prototype ...);
}  
```


**Kill two birds with "new"**

```js
function Date() {
  let now = $$GetSystemTime();
  if (new*) {
    let obj = Object.create(new*.prototype);
    // obj@now = now; // private "now" state
    return obj;
  } else {
    return ToTimeString(now);
  }
}
```


MM: Proposing a new special form (shown as `new*` above) whose value is the most derived otherwise undefined. 

The test being: reliably check if I am called as a constructor.

WH: Unless the most derived receiver is falsy. Is there a way to create such a thing?

AWB: Yes, you can invoke the reflection trap and specify a falsy value for the receiver.

MM: Modified the above example to:
    
    if (new* !== void 0) ...

AWB: We could fix this by throwing if reflection is used to invoke a constructor with undefined as the receiver.


**Reflection and Proxies**


- `Reflect.construct(F, args, rcvr)` (throw on undefined)
- construct trap: `construct: function(target, args, rcvr)`

YK: How does this work in ES5 classes?

AWB: 
    
YK: Is conditional super a hazard?

MM: Yeah

AWB: New power, new complexity

YK: Exposing something that was implicit into the main path. Calling super in a constructor conditionally?

EA: Bug, can be fixed

AWB: (re: Date example) Where it shows Object.create...

DL/AWB: If you conditionally forgot to call `super()`,  [[Construct]] will have to check at exit and throw.

YK: With @@create you had to know what you were doing. With this you could tread on weird cases without knowing it.

BE: Lets park that discussion for now.

DL: The sign that TypedArray is giving us is a sign of what user code might do as well so they will have the same issue.

AWB: Better direction. Don't go another decade where implementations can have private slots, but user code cannot.

MM: The direction I've presented is what I prefer. What I'm _actually_ proposing is that we allow Allen to be the champion and work out the details remaining. Objection?

None. 

BE: No objection, but I want to make sure Allen works with YK, JM and Boris Zbarsky

#### Conclusion/Resolution

- Agreement to MM proposal: Allen to be the champion and work out the details remaining

(This did not gain _final_ consensus, as follow up was necessary)


... On to JM objections


JM: Start with a class never meant to be subclassed. Later you want to re-use aspects of this class, but need a way to hook in to the subclass `this` before `super()` class. 

DH: eg. an `initialize` method that just sets up properties and state

AWB: If it's just state that it doesn't need to know about, it doesn't matter?
If it's state that does need to know about, what the channel? Seems very tenuous at best

JM: An example, we want to re-write some of the dom before calling the parent constructor.

DL: How is dom related?

WH: Are you unable to munge parameters to constructor?

AWB: Consider a scenario where the DOM mutation is contained in a method of the super class that must be invoked, for side effect, with no dep on object instance state, but is an instance-side method. The way around is to access your prototype or original prototype and invoke the method on the instance

Discussion of legacy scenarios and validity. 

AWB: More of a refactoring issue

YK/JM: Agreement that we need more real world cases. 

MM: Need a very concrete example, showing: the code written that wasn't intended for subclassing and the newer code that's attempting to subclass. 

YK: There are issues created by memoization 

Discussion re: subclassing in general. 

MM: Need to do the concrete example exercise, and before the end of this meeting. 

AWB: The fallback is that we just keep what we have. 

DD: Worried about @@create, that it won't be possible to subclass because there is negative feedback

MM: Break on this discussion until JM has adequate examples.


## 5.2 SIMD.JS 

(Peter Jensen and John McCutchan)

https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-07/simd-128-tc39.pdf

Other slides: https://peterjensen.github.io/html5-simd/html5-simd.html#/

JMC: (introducing SIMD, Single Instruction Multiple Data)

Slide presentation


Proposing a Fixed 128-bit vector type as close to the metal while remaining portable
- SSE
- Neon
- Efficient scalar fallback possible

Scales with other forms of parallelism

WH: Why fixed 128, given that x86 SIMD is now up to 512-bit vectors?

DH: Plenty of real world use cases for this, video codecs, crypto, etc. 

STH: Wider widths?

JMC: Yes.

AWB: Works with IBM PowerPC?

JMC: Yes, overlapping instruction sets. 

Proposing, specifically: 
    
- SIMD module
  - New "value" types
  - Composable operations
    - Arithmetic
    - Logical
    - Comparisons
    - Reordering
    - Conversions
- Extension to Typed Data
  - A new array type for each

float32x4, 4 IEE-754 32-bit floating point numbers
int32x4, 4 32-bit signed integers
float64x2, 2 IEE-754 64-bit floating point numbers

Float32x4Array, array of float32x4
Int32x4Array, array of int32x4
Float64x2Array, array of float64x2

    
    
Object Hierarchy

SIMD
  -> int32x4
    -> add, sub, ...
  -> float32x4
    -> add, sub, ...
  -> float64x2
    -> add, sub, ...
  
   

DH: Introduce new value types, but does not depend on user created value types

JMC: Examples...

```js
var a = SIMD.float32x4(1.0, 2.0, 3.0, 4.0);

var b = SIMD.float32x4.zero();
```

MM: Why is zero() a function instead of a constant?

JMC: It could be a constant.

... additional examples. See Slides.


STH: How much of the difference is SIMD and single precision?

JMC: I don't have numbers, but would say SIMD

MM: Do SIMD instructions preserve denormals or flush?

JMC: ARM flush to zero. SSE you can select

**Inner Loop** 

JMC: All high level JS can be stripped down in the JIT


**Shuffling** 

(copy from slide)

JMC: Compiles down to a single instruction 

WH: There are 256 of those constants defined?

JMC: Yes.


**Branching**

(copy from slide)

WH: What data type used to represent that?

JMC: int32x4

WH: Any kind of 4-bit data type for the mask?

Q about displayed data on slide 

WH: Is `select` bitwise?

JMC: Yes

WH: Cool. It's data type agnostic and lets you slice into smaller bit slices.

WH: Also, those of us who do NaN-coding will need to beware, because this can both view and manufacture arbitrary NaN's.


**How does VM optimize for SIMD**

(copy from slide)


**Firefox implementation Status

(see slide)


**Chrome/v8 implementation status**

(see slide)


YK: is Chrome interested in these patches?

JMC/PJ: They want confirmation from TC39

DL: This is v8, not chrome. v8 team is fairly conservative.


**Emscripten Implementation Status**

(see slide)

JMC: Much of these operations are used in real world platforms written in C++


**V8 SSE Benchmarks (Early 2014)**

(see slide)


MM: How can you get faster than 4x faster with 4-way SIMD?

DH: Float 32


**SpiderMonkey SSE Benchmarks (Early 2014)**

(see slide)


**Dart VM NEON Benchmarks (Early 2014)**

(see slide)

MM: Why are the relative speed ups across the vms are so different?

JMC: Different output from different code


**Why Fixed Width and not Variable Width Vectors**

(see slides, 1 & 2)


STH: A problem bigger than variable width vectors. If we wanted 256 bit widths, on 128 bit vector platforms, observable differences. 

JMC: 
    
    
WH: Why is intel building hardware with 128 bit vectors


-- Dmitry Lomov (DL) will fill in details of discussion here. 

JMC: this will expose differences hardware 

JMC: no implicit conversions, 1 + <float32x4> will do string concatenation
MM: why?
JMC: too much magic
DH & JMC: overloading operators is ok, no lifitng or implict conversions


WH: It's bad that you can do -<float32x4> but not 2*<float32x4> and instead have to splat the 2 into its own vector first.


JMC: like asm.js, have to be clear about what types you're operating on.

YK: Don't have to make the ergonomics good

JMC: Don't have to, they never will be.

**Planned Features 1**

- SIMD and value objects/types
  - float32x4 and friend will be value objects
  - overloaded operators (+, -, ..._ will be mapped to SIMD.<type>.<op> equivalents

- Additional data types (int8x16 and int16x8)
  - Looking at VP9 encode/decde for justification
  

AWB: The top bullet has a lot deps, but the bottom not, are these near term?

JMC: Yes

WH: Why not int64x2?

JMC: Support is not universal
    
MM: 
- Universal across processors
- something that has compelling algorithm

Unsigned integers don't fall in the second?

WH: Why not unsigned integers?

JMC: Not widely used

WH: uint32 perhaps, but uint16 and uint8 are heavily used in graphics to represent pixel values.

JMC: tried, issues encountered
- Extracting kernels and analysing the algorithms they're using and finding the instruction set overlap
- start with smaller scope, can expand later on. can add x8, x16 later. Surveyed internal teams
- 128 SIMD and expand from there.

MM: What's being saved, given the already exposed information?

JMC: time, complexity, etc.

AWB: How would you specify "slow", "fast", etc.

DH: Leave it undefined. "High recommended if supported, etc"

AWB: worried about gaming. 

DH: same


**Planned Features 2**

(see slide)

DH: Risk:
    
- Some content is written such: if optimized, do this, if not, throw an error
- Browser doesn't want to be left out, will fake the optimized flag.

YK:  The only reason to do the check is if you know you have a faster scalar implementation for systems without the SIMD feature; path of least resistance is to use polyfill and do no check at all. So maybe risk is not so great.

WH: Flip side also could be an issue: Web site has code for the optimized case which is not present on common platforms, somebody changes it and doesn't test it properly, it later breaks on optimized implementations, so browsers don't want to set the optimized flag.

JMC: (confirmed awareness of gaming)

BE: Some won't fake for fear of the performance cliff. See WebGL precedents.

Discussion re: risk, generally: some risks worth taking.


WH: instead of boolean, maybe a value that indicates speed level?

AWB: Application could do a mini benchmark as a test?




**Stage 1 Ready?**

(see slide)

AWB: Sounds like it is ready for stage 1. Can it be its own independent standard?

WH: It creates new primitive data types. Don't want specs outside creating new types 

AWB: Do you expect every runtime to implement this?

JMC: Yes. They will run to implement this!

BE: Some embedded systems have trouble ith regex and unicode, it's expect that there will be "code commerce" among distinct device classes' embedded runtimes. 

MM: We need a general framework for new value types

AWB: Without the value types, it's fairly clear cut. 

MM: Preserving reference identity makes it prohibitively expensive

DD: Per the ES7 model, the feature can progress without being in another spec. 

Discussion of the spec process.

STH: Back to MM statement, what does typeof have to do with reference identity?
- Could be implemented by memoizing the identity, not that you'd implement that way

MM: (example of using a weakmap)
- Logically, if they're a reference type, we have to admit them to WeakMaps, if they are a value type we can reject them. I hadn't considered the memozation

AWB/DH: (clarification of coupling and timing issue) 

DH: Needs to be the same semantics as value types, if we ship this sooner and learn that we made a wrong call, then we have to deal with deciding whether or not we apply the mistake or break with SIMD. 


#### Conclusion/Resolution

- Moves to stage 1



## 4.3 Function parameter/let declaration name conflict rules 

(Allen Wirfs-Brock)

https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-07/parameter-scoping-7-14.pdf


Current spec, Controversial: 

```js
function(x) {
  var x;
  let x; // early error    
}

function(x) {
  let x; // early error    <--------
}    

try {
} catch(x) {
  let x; // early error    <--------
}
```

AWB: Andreas wants consistent handling

DH: The mental model is that let is block-bound, 

DH: `var` is "I assert there is a binding in this scope, but that can be re-asserted as much as I want". `let` is "I have one unique declaration, I don't allow redeclaration".

YK: If you say `var x = 42` half way down the function, you can use the original parameter `x` until that point. With TDZ, if you had `let x = 42` half way down, you couldn't mean anything with `x`

DD: (points about let and const protecting from mistakes)

BE: (channeling Andreas) Worried that there will errors when you want to shadow. 

DH/YK: The shadowing is meaningless. 

MM: I was indifferent, but side with Dave's points about refactoring

STH: Generating code via macros, introduces non-local restrictions that could break 

DH: Just have a notion of parameter bindings and block bindings, distinct from the surface syntax, and latter can't shadow former; easy workaround for code generators is to add an extra pair of `{ }`.

MM: (example of user blindly changing `var` to `let`)

STH: This isn't a language issue, it's a non-semantics preserving change.

DL: (on behalf of Andreas)

For Do-Expressions:

```js    
() => {} = () => do {}
```

DH: Doesn't hold b/c left is statement body, right is expression body, not equivalent.

AWB: (revisting decisions about duplicate declarations in same contour)

AWB: Need to ensure that lexical declarations are disjoint sets, there spec mechanics there.

STH: Proposing 

RW: The refactoring hazard only exists for the one time the code is run after the change from `var` to `let` and the refactorer is shown the early error and immediately knows to fix the bug. Removing these errors is unfortunate

YK: It's not clear what the program does when there is no early error. 

RW: What is Sam's position?

STH: Why do we have these errors? What do we gain from them? 

RW: Arguably, JavaScript could use some degree of "nannying" if it has positive results.

MM: No way to explain that function declaration initializes the parameter?

BE: It doesn't. Andreas just wants `let` to behave like `var` re: redeclaration

MM: Strict programming should be understandable in terms of lexical scope. 
1. Parameters and body are two scopes
  - If explain as two scopes, can't unify. 
2. One scope
  - Has to be an early error.
  
  
BE: Good argument, but not sure it depends on strict.

MM: In sloppy mode, functions are crap as well.

STH: He's just trying explain the semantics of `let`, w/r to block scope alone.

MM: A `var-less` strict program should be understandable in terms of lexical scope. 

BE: `var` is huge turd that should be recalled into some lesser demon's bowels.
- We want the error. 



#### Conclusion/Resolution

- Status Quo
- DDWIDM: "Don't Do What I Didn't Mean"




## 4.7 Revisit Comprehension decision from last meeting.

(Allen Wirfs-Brock)

AWB: There are a lot of TC members and non-members concerned that this was not a wise decision and that we should revisit. Included link to Andy Wingo

RW: if I had been here at the last meeting I would've objected to the removal, but as I told Dave offline, I trust him and his plans for syntax unification. I just wanted to see progress in that regard. 

BE: I want to say: I was the champion for years, but letting go. I want to see the comprehensions laziness addressed.

DH: I did this exercise, the sudoku solver in:
    
- pythonic
- linq style
- no comprehensions

https://github.com/dherman/sudoku


JH: I'd like to know if there are objections still, to deferral

AWB: Objecting to the late removal of a complete feature. 

RW: Same objection, reached independantly, but again I trust Dave to see through the syntax unification.

DH: First, laziness is not a problem; you just need a way to construct a lazy sequence either from an eager value (`array.lazy()`) or from whole cloth (`lazyRange(0, 1000)`).

DH: Second, the fact that comprehensions only do a subset of operations you want means you end up mixing code styles (comprehensions + methods), and it gets syntactically awkward.

DH: When I did the exercise with three styles, I found the generalized comprehensions nicer but no comprehensions at all nicest.

BE: The affordance of generator expressions and comprehensions is that you don't have to write a call

DH: (Gives walk through of solver.linq.js, solver.pythonic.js)

- The exercise shows a need for new methods of iterators, flatMap, filter, etc. 

DH: I said last time that we need an Iterator.prototype object and we agreed to defer since it probably wouldn't break code, but we forgot that hurts polyfills that want to patch the prototype with upcoming standard methods. So we should add the empty prototype object in ES6.

WH: In expressions such as foo.lazy().map(...function1...).every(...function2...), what shuts down (i.e. calls the return method of) the foo.lazy() generator?

DH: The call to every will shut down the generator if it reaches its decision early.

DD: The minimal Iterator.prototype is empty, but available. The long term is a constructor Iterator with blessed apis. 

DH: Confirm

BE: An actual Iterator is means Duck typing isn't the preferred way, just create a real Iterator

MM: Using an actual functional style, the function names you're using are 

BE: The oop style prevails, desired chaining API, adapter full of goodies.

Discussion of generators and observables

WH: How would you represent a 2-d comprehension like (for (x of xs) for (y of ys) if (x % y) x+y)?

xs.flatMap(x => ys.filter(y => x % y).map(y => x+y))

WH: OK. A bit less pretty than the comprehension in this case, but acceptable.

MM: after seeing this code I will never use comprehensions

YK: *raises arms in triumphant vindication*

BE: who will own explaining to Andy Wingo and es-discuss?

DH: I will

BE: "You keep what you kill" - Richard P. Riddick

#### Conclusion/Resolution

- Add a prototype for iterators, but do not expose a global Iterator constructor for ES6 (leave that for ES7)
  - Between Object prototype and Generator prototype
  - Initially empty, but accessible
- Comprehensions in general deferred to ES7



## 4.12 Revisit spread and destructuring of string 

(Erik Arvidsson , Brendan Eich)

EA: We're using ToObject in spread and all other iterable forms. Should we do the same for destructuring?
- This would allow destructuring strings and other non-objects.

```js
// Should allow: 
let [first, ...rest] = "foo";
first; // "f"
rest;  // ["o", "o"]
```

STH: ToObject breaks pattern matching because you couldn't match on a number.

YK: But we agreed to a future irrefutible matching, which would be the basis of pattern matching. 

DH: Array vs. Object cannot have the same semantics here in what we want from pattern matching
- if I used an array

EA: Uses iterator

DH: Not even self-evident that pattern matching syntax will work in JS

YK: (to Sam) Do you think it will it should fail for strings to destructure?

More discussion of pattern matching. 

DH, BE: match must mean a different pattern language, ships have sailed for destructuring and implicit ToObject

#### Conclusion/Resolution

- Destructuring does ToObject


## 4.5 Import-into-namespace syntax (Dave)

(Dave Herman)

request slides

DH: (recapping the last meeting and the findings of the breakout group; and the fall out)

DH:
    
**Resolution**

- Changed syntax for clarity

(need slides)



**Module Context 1**

- Existing systems provide contextual metadata: 
  - module.id
  - __filename
  - __dirname

- What is the dynamic analog of relative import?

```js
import helper from "./helper";
```


**Module Context 2**

- no implicit namespace pollution, plz
- JS has a dedicated contextual variable: `this`
- Solution: inital `this` binding is a context object


DD: How is this different from adding global variables, eg. `Reflect`

STH: The difference is that the value depends on where it is; unlike `Reflect`, which is the same thing. 

DH: We should use `this` in top level of a module

AWB: what does that mean? `this` at the top level of a module?

DH: 
    
**Module Context 2**

- Relative import: 
```js
this.import("./helper").then(...);
```

- Space for host-specific contextual metadata: 
```js
this.filename
```
(This is where platforms can put its host properties and objects)


- Cross-talk about `eval` 
- `Reflect.global`

BT: indirect eval?

DH: Will give you the global object

DD: object to relying on `this` outside of a method

RW: Workers already to the above

MM: We can't even poison `this` for ES6

YK: if you says it's module context, you have to say how it got that value

DH: No new scoping rules. This construct just implicitly binds something. 


AWB: 
```js
import filename from this;
// which basically: import filename from here;
```

DD: Like this for relative

DH: Completely amenable to this

YK: 
```js
import * as me from here;
me.import; // `me` is the context object
```





#### Conclusion/Resolution

- the api is right direction
- each module gets its own version of that object
- need some sort of access to the module contextual object
- some sort of declarative form to get at 
- static contextual information about the module




"Then, during the Third Reconciliation of the Last of the Meketrex Supplicants, they chose a new form for him, that of a giant Sloar! Many Shubs and Zulls knew what it was to be roasted in the depths of a Sloar that day, I can tell you!" 
―Vinz Clortho[src]
