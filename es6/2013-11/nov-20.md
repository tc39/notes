# November 20, 2013 Meeting Notes
-----


John Neumann (JN), Allen Wirfs-Brock (AWB), Yehuda Katz (YK), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Rick Hudson (RH), Matt Sweeney (MS), Rick Waldron (RW), Dmitry Soshnikov (DS), Sebastian Markbåge (SM), Ben Newman (BN), Reid Burke (RB), Waldemar Horwat (WH), Doug Crockford (DC), Tom Van-Cutsem (TVC), Mark S. Miller (MM), Brian Terlson (BT), Andreas Rossberg (ARB), Alex Russell (AR)

-----

## Report from the Ecma Secretariat (CC Report)
(István Sebestyén)

### Status of the TC39 RFTG

January 2014 Meeting deadline


## 4.2 Clarification of the interaction of unicode escapes and identification syntax
(Waldemar Horwat)


WH: In ES3 we added the ability to use unicode escape sequences in Identifiers, ie.

```js
var f\u1234o = 17;
```

The restriction was that the unicode escape sequence still had to be a valid identifier. ES3 and ES5 never allowed unicode escapes to substitute non-user-data characters of other tokens such as reserved words or punctuation.

the contention is that ES6 has an incompatible lexical grammar change that lets you write things like:

```js
\u0069f(x===15)

// if(x===15)


There also was a bit confusion about whether escape sequences can occur in regexp flags, even though the grammar never allowed them there either:

/abc/\u...

// unicode for the flags

```


AWB: Things that came up in ES5:

- can you declare a variable that has the same unicode escape sequence as a keyword?

```js
var f\u0

```

- introduced in ES5:

```js
// allow
foo.for()
```

ie. Identifier vs IdentifierName

WH: Cannot use escapes to create identifiers that would be invalid. Also opposed to allowing escapes inside keywords; there should be just one spelling of the keyword ```if```, and it should not include ```\u0069f```.

So what should we do about \u0069f(x===15) ? It depends on how we interpret the ES3/ES5 rule that states that escapes cannot be used to create identifiernames that don't conform to the identifiername grammar.

Option A: Treat the if there as an identifier because there are some contexts in which "if" can be used as an identifier (notably after a dot), making this into a function call.

Option B: The if there cannot be an identifier in this context, so it's a syntax error because we're trying to spell a reserved word with an escape.

AWB: Agree there is ambiguity


MM: https://code.google.com/p/google-caja/wiki/SecurityAdvisory20131121
"Handling of unicode escapes in identifiers can lead to security issues"
Records the vulnerability that has now been fixed in Caja at the price of additional pre-processing. This vulnerability which was caused by ambiguity in interpretations of the ES5 spec by different browser makers.

STH: If there are systems that need to search code for specific forms

MM: It would be harmful to code that looked at keywords, then this could circumvent those assumptions.

AWB/WH: (recapping acceptable use of reserved words as identifiernames)

BE: We can fix it, but it's just not how ES6 spec works

WH: If it is a ReservedWord, it may not be spelled with an escape.

MM: This solves Sam's static code case

BE: No escape processing upstream?

WH: (agreeing)

AWB: We can specify in the grammar that where we write "if" it means that exact character sequence

...Anywhere we express literal keywords, we mean those character sequences.

#### Consensus/Resolution

- ReservedWords, including contextual, can only be spelled with ascii characters, ie. the literal character sequence.
- No escapes allowed in such ReservedWords


## Performance impact of Tail Calls
(Brian Terlson)

BT: Wondering if any implementors have begun work on these? Are there considerations for existing code that will become tail call?

YK/AWB: Any examples?

BT: Stack frame manipulation

BE: It's not a zero work to new work, it's an old work to different work.

STH: There's a lot of work on this subject, presumably tail calls should be able to run as fast as it does currently. No advice that's implementation independent.

ARB: Standard techniques should be applicable. Foresee a lot of work.

YK: The only real value for practioners is for compile-to-js cases.

DC: This is actually the most exciting feature for me, because it allows

BE: Will have someone work on this for SpiderMonkey

RW: Agree that implementors will feel the pressure once practioners experience the benefits that Doug describes.

DH: Allows for real cps transformations that won't blow the stack and don't require awful setTimeout hacks. FP idioms being available to JS.


#### Consensus/Resolution

- Share implementation experience


## super and object literals
(Allen Wirfs-Brock)

(needs slides)

AWB: Issue: how do you mixin some methods that reference super?

```js
Object.mixin(obj, ???);
```

In the process of mixing, Object.mixin will rebind super references to the target. The big problem: `super` is currently explicitly illegal within an object literal:

```js
Object.mixin(obj, {
  toString() {
    return `mixed(super.toString())`;
  }
});
```

BE: are we asking to allow super anywhere?

MM: We're not adding a restriction?

AWB: No, removing.

MM: Strictly a simplification.

Discussion re: Object.mixin

WH: Curious about the design of exposing super to user code, but only via the Object.mixin API. If we're going to be storing and retrieving super from a hidden slot, this seems a very roundabout API that's going to bite us.

AWB: Allow super in concise methods

EA: All object literals?

RW: No, because the property value could be defined elsewhere. Ensure invalid in function and it's ok

EA/AWB/RW: Allow super in concise methods within object literals.

Clarification of Object.mixin capabilities.

MM: (has issue with the naming)

AWB: Let's defer discussion of naming.

YK: We should allow super in function expressions within object literals

MM: Refactoring hazard

DH: There is always a refactoring hazard when scope is involved (super)

RW: On board with Erik and Yehuda, super should be allowed in both concise methods and function expression literals that are the value of properties defined in an object literal.

DH: `Object.mixin` creates a new function when rebound?

AWB: Yes.

MM: (whiteboard)

```js

{ foo() {}, ... }

// vs

{ foo: function() {}, ... }

// vs

{ foo: (function() { return function () {}; })(), ... }

```

DS: Concern about having a reference to a function object that doesn't equal the rebound method

```js
function f() { super.foo(); }

Object.mixin(o, {
  f: f
});

o.f !== f;
```


BE: No way to define a property on a concise method declaratively.

WH: RebindSuper doesn't copy expandos (referring to Allen's claim that it does) http://people.mozilla.org/~jorendorff/es6-draft.html#sec-rebindsuper
(The actual copying of expandos takes place in MixinProperties http://people.mozilla.org/~jorendorff/es6-draft.html#sec-mixinproperties

DH: Issue: bind does a similar operation, but doesn't copy expandos.
... Any other deep traversals? If you have a non-callable object, it only does a shallow copy?
... The existance of super creates an inconsistency.

AWB: Alternatives are always clone or never.

DS: All methods should be copied to avoid the distinction

YK: Don't copy exandos?

EA: Happy to go back to Object.defineMethod

YK: Still need to decide if it copies expandos

DH: That's the smallest operation that you can build on

WH: Object.mixin breaks membranes, no way to intercept the super rebinding when the method is a proxy.

AWB: There are many operations like this

EA: No different from Function.prototype.bind

MM: What happens when the method is a Proxy?

AWB: A proxy for a method is not a function.

MM: A Proxy whose target is a function?

AWB: It's not an ordinary ECMAScript function

MM: Anything we do, we should ask "What does it do across membranes?" There are two criteria that often come into conflict:
- Security
- Transparency

Discussion about Security vs. Transparency

EA: What happens when do bind on a function proxy?

MM: fail?

DH: This is shocking.

MM: bind is a perfect example, there is no conflict between security and transparency. You'd like bind to work on proxy functions

EA: (whiteboard)

```js
Function.prototype.bindSuper
```

MM: They're saying, do the [[get]] on the proxy, you don't get bindSuper back, you get a proxy for bindSuper
... membrane safe.

YK: Change bind?

DH: Can't change bind, varargs

Mixed discussion re: home binding.

AWB: Expose the home binding via trap?

DH: trap makes sense to me

MM: From the method you have access to the home binding?

AWB: yes

MM: Don't like that

AWB: Another way

WH: The method calls "super" and expects to reach it's super

AWB: There could be a super call trap

YK: Any objects to bindSuper?

DH: No idea what this means.

BN: What is the material difference between defineMethod and bindSuper?

bindSuper: like bind, but only changes super. Could be defined in terms of Object.defineMethod:

```js
// illustrative only
Function.prototype.bindSuper = function(homeObj) {
  return Object.defineMethod(homeObj, this);
};
```

changing this and super is a two step change:

```js
function f() { super.foo(this); }

var o = {
  foo(target) {

  }
}
(fill in later
```

DH: bindSuper is the max/min of define

- takes one target argument
- copies code and changes super references to target

on a bound function?

BE: On a function with this and super, changing both will create two new functions

AWB: This is a "clone function"

DH: Meaning, only clone the this-binding, not the expandos

...

AWB: you'll need to bindSuper, then bind

AWB: If you want it to work in either direction

WH: binding super after binding this will cause problems. That would be an anti-feature that breaks abstraction. A lot of times, code will return a bound function specifically to prevent you from changing this. Changing super in such a function would break the abstraction.

?: Want bind and bindSuper to commute

WH: Don't want them to commute. They're fundamentally different. bind can only be done once and freezes the this binding. bindSuper can be done repeatedly and doesn't freeze the super binding.

?: You can already rebind this in a bound function

MM: No. If you bind it again, it doesn't mutate the bound this value; the second one is ignored.

DH: (whiteboard)

- mixin -> defer, focus on primitive
- defineMethod -> not proxyable
- bindSuper -> good
- proxying -> good
- composition with bind
bind().bindSuper() -> ERROR.
bindSuper().bind() -> OK.

bindSuper can be called on the result of bindSuper (which is why YK/MM dislike the use of "bind")

Alternative names:
resuper, bindSuper, supersede, withSuper, super?

withSuper, bindSuper?


bindSuper(obj[, ...])


BN: what does super.valueOf() return?

DH: should be this, similar to what super evaluates to in Smalltalk (according to AWB)

- static error vs dynamic error? DYNAMIC.
- where is super given a binding (other then class)?
  - class methods
  - method shorthand
  - in obj literal wherever name inferrable


Discussion re: naming. The shed is pink? It's more of a mauve, I think. You would.

#### Consensus/Resolution

- Remove Object.mixin
- "toMethod()" wins -- debate about argument order
- debate about what [[MName]] is and what it's derived from
  - super delegation uses [[Name]]
  - there's a prototype property for name as well
  - and functions with names have an own property that's .name, while function.prototype has a .name that's a null string
  - .name is configurable, non-writeable, but not necessarialy an own property -- depends on how the function was defined
  - clarification that ".name" has no effect on [[Name]]
  - clarification that ".name" has no semantic effect on other methods that might consume a name
  - copied: length
  - result name: whatever we decided [[mname]] was
  - bound functions cannot be converted to methods
  - bind().toMethod() -> throws


Function.prototype.toMethod(home[, mname])

Dave, please review the details above.


## Reconsidering the Map custom comparator API
(Dave Herman)

DH: Something incredibly gross about having an API that allows exactly one string, but I know we need to solve the bigger problem which is being able to provide performant custom comparators.

Can we just get rid of this argument?

WH: [Recaps consensus decision from prior meeting and the reasoning route by which we arrived at it.]

MM: (gives memoization example)

DH: This can be addressed in ES7

Discussion re: -0/+0 difference.

It was pointed out the only difference between the default comparator and the is comparation is the handling of -0/+0 and that a subclass of Map that ditingishes between +0 and -1 using Object.is can easily be written in ES code.


#### Consensus/Resolution
- Remove second param to Map and Set constructor
- Defer to ES7



## Math.hypot() and precision
(Dave Herman)

http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot

DH: Oliver Hunt brought this up, do we want to maximize precision (by sorting) and take the performance hit? Or do them in the provided order.
Prefer the latter. Oliver prefererred sorting for precision but taking the performance hit.

BE/DH: He's not here.

Referring to IEEE 754

Luke provided the original spec text, but it's changed since then.

BE: need to look at SpiderMonkey implementation and possibly provide new spec text.

WH: Sorting doesn't matter much in this case; it's a second-order effect. Cancellation is impossible because all squares being added are  nonnegative.

WH: What does greatly matter is not overflowing for values > sqrt(largest finite double). What does hypot(1e200, 1e210) do?
BE (runs it on bleeding edge Firefox): About 1e210
WH: Good. We do want to avoid the intermediate overflow that would turn this into +?.

[ more discussion ]

?: This isn't just about hypot. How should we specify precision in general for things such as transcendental function.

WH: It's a moving target. Do not want to encode precision requirements in the standard on anything other than basic arithmetic or number?string conversion in the spec because those are complicated and how to specify them varies depending on the function. Best thing to do is link to some existing writeup describing best practices.

BE: I'll beat the drum to get a spec. Dave's right that it's bad language.


#### Consensus/Resolution

- Brendan to propose replacement for last two steps.


## 4.10 Generator arrow function syntax
(Brendan Eich)

BE: This isn't a big deal and should be easy to bring into ES6. Experience so far has been that people love arrow functions and generators and want a generator arrow

(whiteboard)

```js
// current
x => x * x;
(...) => { statements }
(...) => ( expr )

// proposed generator arrows...

// Irregular
() =*>

// Hostile to ! (async function)
() => * { ...yield... }

// Not good
() => * (yield a, yield b)

// Ok if 1 token
x *=> x * x;

// Bad (ASI)
*() => ...

// Hostile to !
(x) =* {...}

```

WH: Don't like *=> because it swaps the order from function*.

WH: The ! problem in =>* can be solved by using % or ? instead of !. Would prefer those characters anyway.

BN: Another (strawman) possibility is the presense of yield.

BE/WH: No

DH: Recalls implied generator (yield presense) footgun

DH: There is not a 1-to-1 correspondance to where you'd use function or function *. Arrow is not a replacement for all functions that want lexical this.

#### Consensus/Resolution

- No addition, revisit for ES7


## for-let
(Brian Terlson)

BT: We've shipped for-let without fresh bindings per iteration (according to the current spec) but we're ok with updating.

MM: Consensus?

RW: recalling the consensus from yahoo 2012

DH: Need consensus on the semantics of capturing in the expression positions

DH: if there's something that "closes over" that variable, what's that referring to? I remember that thead, but I don't reacall the otucome

AWB: no definitive outcome... no satisfactory solutions

DH: we have this job on this committee... ;-)

BT: that we shipped in IE has no weighting on this?

AWB: nope. Should have looked at the spec which has notes to this effect

(discussion about binding per iteration)

AWB: C# addresses this by saying "this is insane, so for C-style of or, we have per-iteration bindings, not per-loop bindings"

MM: so let in the head of the loop creates only one location?

(yes)

EA: if we don't resolve this today, we sould fallback to what IE 11 does.

DH: sure, but we have to go through this thread

AWB: The first time you initialize, create an extra scope contour, the zeroth iteration. This is where the capture occurs and the subsequent iterations propagate to that scope.

AWB: if you order these things right, the 3rd part happens at the end, but before your propagate

MM: you mutate and then the value gets copied... seems fine

```js
var a = [];
for(let i = 0, f = () => i * i, a.push(f); i < N; i++) {
  a.push(f);
}
for (let f of a) {
    console.log(f());
}
```

```js
for(let i = 0, f = () => i++; i < 1; f()) {
}
```

This is an infinite loop. Reasoning:
    1) The outer scope receives its initial value for i and f. Critically, f's i now binds to this outer binding.
    2) The outer scope forwards these values into the first iteration of the loop
    3) In the beginning of the 1st loop iteration, the test is executed. At this point, i is still zero.
    4) After, still on the first iteration, the test for i < 1 fails because i is zero.
    5) Since we never modify the loop variable, this must be an infinite loop.


BE: FWIW, Dart has the same semantics.
```dart
void main() {
  foo(fun) {
    print('pre');
    print(fun());
  }
  for (var i = 0, inc = () => i++, j = foo(inc); i < 5; inc = () => i++) {
    print(i);
    inc();
  }
}
```

outputs

```
pre
0
1
2
3
4
```

#### Consensus/Resolution

- Brand new outer scope created around the entire loop that has variables that are declared in the loop head, and it gets the initial values
- There is a new scope for each iteration that receives values from the previous iteration



## 5 Post ES6 Spec Process.
(Rafael Weinstein)

Train model.

#### Consensus/Resolution

- Sounds reasonable, we're going to try it.


## Ordering of scheduling of microtasks

BE: FIFO

AWB: In the ES6 we need to say something.

?: Examples of why browsers want to use priority queues to schedule tasks

[ Debate about whether in ES6 we need to mention the priority queues ]

?: DOM and other tasks are beyond the scope of the standard. Just say that ES6 tasks are in FIFO.

WH: Would prefer to mention a richer priority structure in the spec; otherwise other groups (W3C) will want to fit their tasks into our FIFO, which is not desirable. At the very least we must say that other tasks with visible effects may get arbitrarily interleaved between the ES6 tasks we talk about in the spec, so don't assume that nothing can come between adjacent ES6 tasks in the FIFO.

MM: Rafael and I went throught the existing DOM behavior...

YK: Disagrees with Rafael. Bucketing. Series of buckets. The first bucket is the cheapest operations and the last bucket is the most expensive bucket. If a bucket adds something to an earlier bucket then you go back to to earliest bucket that has items in it. Each bucket is a FIFO queue.

WH: Can you reorder the operations so that the DOM operation happens next to each other.

YK: I think a priority queue is isomorphic to buckets.

AWB: In ES6 we only have one class of priority which is the priority of Promises. We do not need to spec that there might be different priorities.

#### Consensus/Resolution

- ES6 spec needs to spec that Promises are serviced in a FIFO queue
- Other non ES6 tasks might be interleaved arbitrarily
- Interleaving of the Promise queue by other non ES6 operations
