# November 18, 2014 Meeting Notes
-----

Brian Terlson (BT), Taylor Woll (TW), Jordan Harband (JHD), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jeff Morrison (JM), Sebastian Markbåge (SM), Erik Arvidsson (EA), Peter Jensen (PJ), Eric Toth (ET), Yehuda Katz (YK), Dave Herman (DH), Brendan Eich (BE), Ben Newman (BN), Forrest Norvell (FN), Waldemar Horwat (WH), Alan Schmitt (AS), Michael Ficarra (MF), Jafar Husain (JH), Lee Byron (LB), Dmitry Lomov (DL), Arnaud Le Hors (ALH), Chip Morningstar (CM), Caridy Patiño (CP), Domenic Denicola (DD), Mark S. Miller (MM)

-----

## Welcome

JN: Introduction

- Approval of 42nd Meeting Notes?
  - Approved
- Adoption of Agenda?
  - Approved



# 4.1 ES6 Draft Status Update
(Allen Wirfs-Brock)

[es6-status-update.pdf](./es6-status-update.pdf)

AWB: One revision since last meeting, rev 28.
- http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#october_14_2014_draft_rev_28

- Modules
- Removed loader pipeline and Reflect.Loader API (moved to a new document)
- Stream lined module linking semantics for declarative modules
- Removed module declaration
- Updated import decl. to include module imports
- Updated defautl export syntax and semantics to support export of anonymous default functions
- Added Module Env Records
(See slides)

- There's a bug in rev r28 wrt module name normalization – should be relative to current module, was omitted (included in r29)

- Interim Subclass instantiation reform
(Copy from slides)
- Changed ordinary object creation to dispatch object allocation through [[CreateAction]] internal slot instead of @@create
- Converted all @@create methods into [[CreateAction]] abstract operations
- Eliminated Symbol.create and @@create
- super without an immediately following
(Copy from slides)


WH: What was the conclusion, not clear from the notes

AWB: (revisits problem statement and agreed upon solution)
- https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-24.md#object-instantiation-redo
- https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-24.md#conclusionresolution


EA: What about argument passing?

BT/RW: This was concretely included in conclusion

AWB: (Confirms)

- Rev28 Draft
- ES6 eval semantics
- Eliminated unused abstract operations PromiseAll PromiseCatch, PromiseThen
- Modified Promise.all to specification internally uses a List instead of an Array
- Added @@iterator property to %IteratorPrototype%
- Added requirement that the object returned by ordinary object [[Enumerate]] must inherit from %IteratorPrototype%
- Removed @@iterator from various standard iterators (inherited now)
- Updated ToPropertyKey to accept Symbol wrapper objects, similar to how other priitive coercion abstract operations handler wrapper objects
- ToNumber now recognizes binary and octal integers
- Significant fix to destructuring assignent where the rest aassingment target is itself a destructuring pattern.
- Updated Annex A Grammars to match ES6


AWB: (whiteboard)
Now allowed:
```js
[a[1], ...[f, ...rest]] = array;
```


## 4.2 End Game Planning
(Allen Wirfs-Brock)

- Needed:
- One paragraph summary of ES6 goals for introduction
- Clause 4 - Language Overview. Needs to reflect ES6 features
- Readers, reviewers
- Ecma-402 2nd Edition, review
- How will we resolve last minute issues?


DH: questions about March deadline, JN says deadling is important for patent issues, AWB says that last-minute changes could push publication date

DH: worst-case scenario: possibility of shipping a broken of ES6 to preserve the release momentum, getting the finished spec to the GA

WH: we can't ship a broken ES6

DH: respectfully disagree, need to get a quality ES6 out into the world, that momentum is very important to see

AWB: zero expectation that the ES6 spec is going to be perfect: "too much like software to have any expectations"

AWB: will open a bug tracker on bugs to deal with early errata, hit the next edition – turnaround in a year!

DH: if we do find issues, they won't be hanging out in the world as long

AWB: Revisiting confidence in current state of spec.
- Keep in mind next opt-out period: https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-07/jul-30.md#rftg-admin-es6-opt-out-period

DH: If time before we ship, could we do more? Realms? Probably not. Consider revisiting try/finally restriction on generators?

BE: We didn't end up on that path.

AWB: Need to review iterator algorithms for any places that have abnormal exits to call `return()`

RW: (explanation of why the language overview draft is incomplete)
- Can we get a concrete due date?

AWB: Before the holidays

RW: (agreement)

AWB: 402 2nd Edition

RW: Currently updated to reflect the necessary changes for ES6. Allen and I have decided to coordinate 402 edition publication with 262 editions (eg Ecma-262 6th -> Ecma-402 2nd, and so forth)

TODO: Review with Allen

AWB: What to do about last minute changes?

BE: es-discuss, but not everyone reads this all the time.

AWB: Can we use the reflector to start conversations?

DH: We need to be prepared to have conference calls


## 4.3 Assignment to a const: static error?
(Allen Wirfs-Brock)

https://esdiscuss.org/topic/throwing-errors-on-mutating-immutable-bindings
https://bugs.ecmascript.org/show_bug.cgi?id=3253

```javascript
const x = 42;
x = 32; // early error?
```

- es-discuss consensus: eliminate early error, because analysis during parsing is hard and no clear consensus that's work the parser should be taking on
- current spec. draft (legacy) ES5 semantics only throws on assignment to an immutable binding in strict mode:



```js
"don't use strict";  // ?

Object.defineProperty(this, "globalReadOnly", { value: "readonly" });

var func = function f() {
  // silently skips assignment
  f = undefined;
  // silently skips assignment
  undefined = 42;
  Infinity = 0;
};
func(); // no exception thrown
```

- Should assingment to const also be silent in non-strict mode? Exception will require some new spec mechanisms.

WH: Leery about introducing new kinds of state that then make their way into various reflection APIs. This extra bit of state to distinguish const bindings from merely immutable ones will not be reflected to user code in any way, right?

AWB: Right.


#### Conclusion/Resolution

- Runtime assignment to const bindings (ie. bindings introduced by the const keyword) throw in all modes (strict and non-strict).
- Legacy const bindings (function name binding in function expressions) in sloppy mode continue to be no ops

## 4.4 Array.prototype.contains breaks MooTools
(Allen Wirfs-Brock)

https://esdiscuss.org/topic/having-a-non-enumerable-array-prototype-contains-may-not-be-web-compatible
https://esdiscuss.org/topic/array-prototype-contains-solutions

AWB: The issue is not "contains", but specifically in how they create their mixins

(General discussion to clarify: String.prototype.contains, `Array.prototype.contains`. Both are problematic)

Tabling until Domenic arrives.

BT: Conflict in Outlook web version, `Array.prototype.values`. This has been patched and the issue should dissappear in the next few months.
- Where there is one problem, there are many...

BE: Mark may have a proposal for fixing the `Array.prototype.contains` issue. If we're waiting for Domenic, can we wait for Mark? Is he coming?

AWB: We agreed to not worry about `Array.prototype.values`, because it can be fixed and the fix is quickly distributed.

BT: IE team has pushed forward on `Array.prototype.values` in the technical preview (small applause).

EA: We can roll it out again as well.

Discussion of alternative paths for `String|Array.prototype.contains`. Come back to it.

#### Conclusion/Resolution

- Revisit with Domenic present



## 4.5 Global let shadowing of global object properties
(Allen Wirfs-Brock)

AWB: issues:

- When are/arent' global lets allowed to shadow an aleady existing property of the global object
- Are buit-in global equivalent to global vars or are they just properties of global object
- Make it illegal to shadow a global property would mean future global properties are breaking changes

Proposal:
Runtime error when instantiating a script if a lexical declaration shadows a non-configurable property of global object.

WH: Any new non-configurable global properties would be a breaking change

DH:

AWB: Takes care of known issues, eg `let Infinity = ...`

WH: What does it solve?

DH: w/o this fix: the hazard is that any code can change the meaning (in an irrevocable way) of a global

WH: If it shadows locally, then it's local to scope

DH: This is in top level, script

BE: This is an issue for JITs, when we made non-configurable, JITs took advantage of this

DL: Yes

WH: Can you retroactively introduce a let?

EA: Yes.

DH: Which footgun is least problwem?

AWB: BZ claims there are security implications.

DH: Jason couldn't provide any security issues

AWB/BE: In BZ's email

WH: contained in your scope?

DH: The lexical contour is global

BE: (from BZ's email): `window.location`
... we should just do it.

AWB: Short of redesigning the entire global lexical scope contour.

BE: `window.location`, etc. are "own"

DH: Any time you ask for it, it must always be that exact property. If it's on the prototype, the chain can be mutated.

AWB: Properties non-configurable, function declarations didn't override them. Issues in ES5.

DH/BE: Always global:

- window.location
- window.top

BE: The minimum solution is to address only own properties of the global.

DH: Based on the current state of the global object.
- Have to specify when the check is done.

AWB: At var instantiation

DH: Mutated later to _become_ non-configurable, unaffected. Does not retroactively become an error.

JHD: ? About built-ins configurability

DH: Non-issue, we won't specify which _names_.
- No retroactive error because (dave can you fill this in)

WH: Why should they be allowed to make something non-configurable later?

BE/AWB: Just an object

BE: Might try to do a two way check? Not worth it.

WH: This will bite us at some point.

DH: Locking down environment against untrusted code, you've always had to be the first to run.

Clarification of who is setting up the invariants. User code vs. Browser.

BE: Browser wants to know later that when it makes access to `location` or `top` that it will get the binding that it created.

DH: The browser just has to lock it down before any other code. Just like user code that wants to lock down the environment.

WH: Why do this if security is an issue and not make them let bindings?

BE: Not backwards compatible

WH: Can't create new non-configurable properties

AWB: Anytime there are local scripts with top level var and let bindings, you have possible conflicts with other bindings. It just _is_. A good a reason to use modules.


#### Conclusion/Resolution

- Error when instantiating a script if a lexical declaration shadows an own, non-configurable property of global object.




## 4.6 Zepto broken by new this.construct usage in some Array.prototype methods
(Allen Wirfs-Brock, Brian Terlson)

BT: The checks that Zepto does internally to know what to construct is broken by changes in Array methods.

```js
var obj = {};
var obj.__proto__

```

The problem is that ES6 Array methods do not explicitly create new Arrays anymore, but instead call `this.constructor`. Zepto uses a plain object with `__proto__` assigned...

fill in later

AWB: Spec text that breaks Zepto:

```
4. If O is an exotic Array object, then
   a. Let C be Get(O, "constructor").
   b. ReturnIfAbrupt(C).
   c. If IsConstructor(C) is true, then
i. Let thisRealm be the running execution context's Realm.
ii. If SameValue(thisRealm, GetFunctionRealm(C)) is true, then
iii. Let A be the result of calling the [[Construct]] internal method of C with argument (0).
5. If A is undefined, then
a. Let A be ArrayCreate(0).
```

AWB: Forced me to revisit "species".

Discussion clarifying the cause.

AWB: We can fix this by doing one more level of indirection...

Zepto Proposed Fix

```
4. Let C be Get(O, "constructor")
5. ReturnIfAbrupt(C)
6. If IsConstructor(C) is true, then
a. Let thisRealm be the running execution context's Realm.
b. If SameValue(thisRealm, GetFunctionRealm(C)) is true, then
i. Let species be Get(C, @@species);
ii. ReturnIfAbrupt(species)
iii. If IsConstructor(species) is true, then
1. Let A be the resu;t of calling the [[Construct]] internal method of species with argument O.
7. If A is undefined, then
a. Let A be ArrayCreate(0).
```


WH: If @@species is intended to create copies of the current object, then why wouldn't Object.constructor have a @@species? Wanting to create copies of Objects is perfectly natural, but then we'd be back to the same Zepto problem. What you'd want is a @@speciesButDoNotDefineMeOnObjectConstructorUnderPentaltyOfBreakingZepto.

What color is the bikeshed?

- species
- copyConstructor

BT: Is this 100% back compatible?

AWB: It should be

Who is going to implement and test?

BE: put in spec.

Remaining differences...

AWB: ES5 always gave an array for these methods. For subclassing, we needed to change that.

DD: This works well for creating Promise subclasses.
- Promise and Array are only built-ins that have methods that make instances of themselves.
- eg. `new this.constructor()`



#### Conclusion/Resolution

- Allen's proposed fix accepted.
- It's called "species"


## 5.1 & 4.4 Array.prototype.contains and String.prototype.contains
(Domenic Denicola, Mark Miller)

DD/RW/BT: Just change them both to `includes`. It solves it directly.

DH: Consistency constraint? Any other ducktyping that expects "contains"?

Probably

DD: There are also DOM APIs that "look like" arrays, but have no Array.prototype methods, but _do_ have a `contains` method.

RW: DOMTokenList (and one other?)

BE: This is a naming game

BT: Let's just do `includes`

BE: (agrees)

MM: (explanation of analogous operations on Array to String.prototype.contains)

There is precedent for papering over the difference between substring and array elements


#### Conclusion/Resolution

- `String.prototype.contains` => `String.prototype.includes`
- `Array.prototype.contains` => `Array.prototype.includes`


Continues...

DH: We should be allowed to extend built-in prototypes. New syntax can't be the first solution.

Discussion about how, when and where it's appropriate to publish polyfills that adhere to specification bound features.

SM: Not possible to publish polyfills and know that users will be responsible with upgrades

JHD: Each change with the spec has to be a major version bump.

BE: Need to know when to risk

JHD: An es7-shim will likely have finer granularity in feature detection.

DD: Tests will never be complete enough

MM: Experience in SES is proof that the things that need to be tested for will always grow.

DH: We should reprise this conversation when Yehuda is here, he has concrete recommendations to share with authors, with regard to train model.

AWB: Is there something that modules can help with? `import ...` and get ES7 features?

DD: No, that's effectively "use es7";

AWB: Modules loaded for side effects?

MM: shouldn't encourage the pattern





## 4.8 Template literal call site object caching.

(Erik Arvidsson, Mark Miller, Allen Wirfs-Brock)

- https://bugs.ecmascript.org/show_bug.cgi?id=3305
- https://mail.mozilla.org/pipermail/es-discuss/2014-July/038343.html

AWB:

```js
let world = "world";
let t = "tag`hello, ${world}`";
eval(t);
eval(t);

new Function(t)();
new Function(t)();

tag`hello, ${world}`
```

How many unique callsites? 5, 3, 2 or 1?

AWB: Note that the following

```js
tag`hello, ${world}`
tag`hello, ${world}`
```

has two unique callsites.

BE: Identity can be observed

MM: If you adopt the answer 1, there is no communication channel open. Although mutable state is reachable from the callsite (nee template) object, the only such mutable state is the primordials (Array.prototype, etc). Thus, the memo must be per-realm -- by contrast with the global Symbol registry. The identity sharing is surprising. If we want to avoid that surprise, then 5 is the answer. The performance argument says 1. Whatever the `tag` function pre-computes, it will typically memoize based on the identity of the callsite (nee template) argument. Note that ES6 provides identity-based maps, but provides no content-equality-based maps for use on array or object keys.

AWB: "Callsite" is probably the wrong term.

WH: What is `tag`? System or user code?

BE: Tag is not the thing that we're discussing being memoized. It's the constant array that's passed to tag.

MM: (restating issue) The object that captures the literal part of the expession that's captured for the call.

DH: If we go with 5, the argument becomes: regain performance that's been lost? Can the programmer do it for themselves?
- So if I want the function to execute multiple times, how can implement the single "cached".
- Impossible to get the performance of 1, because the 5 would _always_ allocate an array.

In favor of 1:
- No way to get that performance manually
- If you want 5, you can manually do it with 1.

WH: We've tried to do call site memoization in the past. In ES3 we allowed behaviorally equivalent closures that didn't capture any free variables to share identity. We also made regexp literals share identity. Since then we've backed out of both of those decisions.

BE: ES3 left closure memoization up to implementations. ES5 forbade closure memoization.

MM: (revisiting const functions)
- const functions http://wiki.ecmascript.org/doku.php?id=strawman:const_functions , by freezing the function, safely enable the joining optimization that ES3 unsafely tried to allow.


MM: 1: the memoization is the raw string contents and the holes, only -- the information that goes into the callsite (nee template) object.

Discussion of performance via caching on "call sites"

MM: The consequences of 1 are easy to enumerate

WH: If we do 1, how would we implement that without leaking memory? An implementation would likely have a memoization map from strings to arrays. At what point can that map forget bindings? There is never a guarantee that a particular key string won't be used again.

("template identity" is better to describe the thing that has been referred to as "call site")


MM: For a given set of template contents, there exists no more than 1 template identity. That invariant is not violated by having 0. Within the implementation, one could have a weak-value map, mapping from the template contents to a weakly held template object. Weak value maps expose non-deterministic GC http://wiki.ecmascript.org/doku.php?id=strawman:weak_references#a_weakvaluemap , but this internal use of a weak value map does not expose any effects of GC to JS code.

BE:

```js
`hi, ${name}`
`hi, ${n}`
`hi, ${_}`
````

All of those would evaluate to the same template.

WH:

```js
`hi, ${a}, ${b}`
`hi, ${x}, ${x}`
```

Would those two be the same template or two different templates?

BE: Same.

#### Conclusion/Resolution

- The result would be 1



## What is the `this` binding at the top of a module?

DH: Makes sense going forward to access the global via the Reflect library. `this` should be undefined at the top level of a module.

DD: I previously thought we had consensus on `Reflect.global`, but it's not in the spec

MM: The idea of something like `Reflect.global` is a good idea, but nervous about putting it ES6. Libraries like Caja need to be able to virtualize. Things we've made available through committee defined modules have been authority free, but global is authority bearing. Need more experience living with the ES6 module system before deciding how to make authority bearing things available for import.

DD: Won't indirect eval give you a script context global?

MM: Don't need to add something to ES6 for this issue.

DH: Agree


#### Conclusion/Resolution

- `this` is undefined


## 4.9 Array.isArray(new Proxy([], {}))
(TomVC, Brendan Eich, Rick Waldron, Allen Wirfs-Brock)

AWB: (Explains the expectation of `Array.isArray(...)`)

BE: Tom believes that `Array.isArray(new Proxy([], {})) === true`

RW: (agrees)

AWB: Breaks the exotic array check

BE: But not the same

AWB: All the checks have been replaced with spec language re: exotic array object

MM: What are the observable differences of a proxied array

DH: (asserts that there are concrete cases for virtualization)

BE/MM: Allowing Array.isArray to behave this way is desirable

AWB: Unless the Proxy is poorly implemented

BE: We already decided that malicious or poorly implemented Proxy's don't restrict our

DH: Agree that `Array.isArray(new Proxy([], {})) === true`

AWB: Even if they override all the mop operations, and no longer behaves like an Array

DH: Yes.

MM: Array is part of the primordials, don't have to specify how they come into existence, just how they behave once in existence.

BE:

```
  Array.isArray  | Result
----------------------------
    []       | true
new Proxy([], {})| true
Array Subclass   | true
new Nodelist()   | false
new Uint32Array()| false
```


WH: (adds row to BE's table, based on the proposed isArray pseudocode on the slide that turns exotic objects that share Array's constructor into being themselves arrays)
Any exotic object that inherits from Array | ?!@#

DH: `let d = new Date; d.__proto__ = Array.prototype; Array.isArray(d)`

DH: can allow typed objects where

BE: Any value object that inherits from Array, isArray => true

AWB: If an exotic object and inherits from Array, isArray => true

EA: @@isConcatSpreadable addresses the failure of Nodelist being unable to inherit from Array

AWB: Proxy with array as target may not behave anything liek an array

DH: But that's not what brands are about, simply about the bit that says "the brand"

AWB: Promise.isPromise wouldn't work if `new Proxy(new Promise(), {})`

DD: But `Array.isArray` is a special case.

- `Array.isArray` checks to see if its argument is a Proxy and then drills through to the target?

DH: Addressed the lack of `typeof ...`

DH: Could say that isArray is true IFF argument is an exotic array...

AWB: No, would break many things.

MM: Agreement with Dave, that these things should agree with eachother.

DH: A new term that means "is inductively like an exotic array object".

DH: The meaning of isArray, there is reflectively a bit that's set that differentiates the behaviour to use for all special cases. Any data structure in which Array.isArray is true, JSON.stringify should follow the array path.

eg.
```js
var a = [];
var p = new Proxy(a, {});

Array.isArray(p) === true;

var o = {
  a: p
};

JSON.stringify(o); === '"{"a":[]}"';
```

DH: Any Proxy whose target is an Array, is treated like an Array.

WH: What about objects that inherit from Array?

DH: Only objects that were created using Array's construction mechanism (from last meeting) would be arrays. Objects that merely monkey-patched the proto chain to inherit from Array would not be arrays.
AWB: post meeting note -- "created using Array's construction mechanism" is equivlant to says "is an exotic array object" because that mechanism is the only way to create exotic array objects..

DH: For proxies, remember whether the target object was an array when the proxy was created, and return the same answer. Revoked array proxies would still be arrays.

DH: No other objects would be arrays.

#### Conclusion/Resolution

- `Array.isArray` checks to see if its argument is a Proxy of an Array and returns true when it is
- b/c of revocable proxy: at creation time, discover it's an Array
- Any data structure in which Array.isArray is true, JSON.stringify should take the Array path.
- The following:
- Array.isArray
- Array.prototype.concat
- isConcatSpreadable
- JSON.stringify
should replace the occurrence of "is exotic array object with the isArray interal check.

AWB: In post meeting discussions MM and AWB concluded that Array.isArray should throw when applied to a revoked proxy. This is more consistent with overall revoked proxy behavior and eliminates the need for additiounal mechanism for remembering the array-ness of revoked proxies.



## 4.10 RegExp subclassing fixes

(Allen Wirfs-Brock)

AWB: When ES6 refactored functions that either take a string or a RegExp there was an issue where the state on the RegExp instance was not set correctly.

AWB: These functions created a clone of the RegExp. But how do we do that when there are subclasses involved.

```javascript
new RegExp(regExp);
new RegExp(regExp, flags);  // Throws!
```

AWB: Seems like we should allow passing in flags in this case.

MM: Isn't there a property that gives you the source?

AWB: There is `source`.

WH: Is this a compatible change?

AWB: The match function does not use lastIndex and other state.

MM: Is the cloning too big of a hammer?

AWB: We are making a clone because we do not want to mutate the internal state.

AWB: What are the obvious reasons to subclass RegExp? Maybe one wants to add new flags? But RegExp has no way of getting the flags as whole.

```javascript
let re = /abc/mi;
re.??? === 'mi'
```

AWB: Suggests adding a `flags` getter, and extending the RegExp constructor so that it can take a RegExp *and* a flags string, instead of throwing as it does now.

DH: Why do we need this?

AWB: The double dispatch is needed allow subclassing of RegExp.

DH: Why the @@isRegExp symbol

AWB: It is needed due to the double dispatch in functions that take either a RegExp or a string. If we didn't have the symbol then we would blindly just do `toString`.

WH: We just ran across the same problem earlier today with arrays. Why solve it in two different ways in the standard?

MM: Why don't we use symbols for these double dispatch functions and then we don't need the extra symbol, `@@isRegExp`

BE: Does anyone want RegExp.prototype.match? Together with String.prototype.match, it's too confusing as to what is matching what.

DH: Can we revert or defer it?

AWB: This has been in the spec for years.

DH: There is a subtle difference between match and exec. If we now add match to RegExp it is going to be even more confusing.

AWB: We can just

AWB/BE: There are only four of these: match, replace, search, split

BE: Lets add symbol names for them.

BE: `Symbol.match`, `Symbol.replace`, `Symbol.search`, `Symbol.split`

WH: Do we need @@species any more?

AWB: We might still need it for the `new this.constructor`.

DD: We use `@@species` for Promises.

MM: If Arrays use @@species, TypedArrays use @@species, Promises use @@species, then RegExp should use it too.

#### Conclusion/Resolution

- Add RegExp.prototype.flags getter
- Per discussion with JHD/AWB/BE: RegExp#flags should return a string of flags, but sorted alphabetically, to match #toString - eg /a/gim.flags === /a/igm.flags === 'gim'
- Erratum from JHD:
  - All implementations I tested (FF/Chr/Saf/IE/node) alphabetize the flags in RegExp#toString - the spec should make sure that's concrete for both #toString and #flags
  - When there are no flags, the spec should probably specify that RegExp#flags returns an empty string
  - question to be clarified: is `flags` an own property on a RegExp instance, like "source"? Or, is it a getter defined on RegExp.prototype?
- Make RegExp constructor not throw for (re: RegExp, flags: string).
   - Essentially, implicit conversion of re -> re.source when "flags" is provided?
- Rename the double dispatch methods to use use symbol names instead of string names.
- Get rid of @@isRegExp
- Add @@species for consistency.





## 4.13 Add async as FutureReservedWord

(Rick Waldron)

RW: We've reserved `await`, but not `async`. Should `async` be added as well?

DD: async is contextual. It is only valid as `async [nonewlinehere] function`.

EA: But async arrow function might need it.

```js
async (...) => {}
       ^ look ahead to here!

async(...)
```

EA: The existing cover grammar covers this almost completely already.

DH: The cover grammar is creeping me out
- Not likely to have async the module and async the contextual keyword in the same scope and if you do...

FN: Not insurmountable, if async (the module) is re-written for ES6 modules, nothing saying that it can't be renamed.

DH: Too much of an adoption tax

Conflict with existing Identifier use is not worth creating a _reserved_ _word_.

#### Conclusion/Resolution

- Will not reserve `async` as FutureReserveWord



## 4.11 Performance issue: `Object.defineProperties`, `Object.create`, `Object.assign`.
(Brian Terlson, John-David Dalton)


BT: The performance issue arises when no error occurs, despite being specified that the first error thrown is to be held onto until the end of the operation.

MM/AWB: Hard to accept that this is specification related.

MM: Implementation effort should be spent, not spec change and user pain.

BT: Don't care at all about the determinism of the shape of the object when an error occurs. No library code does this, so why does the spec?

MM: The original specification focused on atomicity of the operation, which had actual performance costs and we backed out of that. This was the next best semantics.

WH: If more than one error, which do you get? Is that deterministic?

BT/MM/AWB: Always the first.

WH: First property or first temporally?

MM: First temporally. And yes, this leads to the same kind of "nondeterminism" in the choice of errors to throw.



AWB: Hard to believe this is the perf bottleneck. It doesn't seem credible.

BT: It's not the bottleneck.

MM: The burden is not big

JHD: Burden in shims or transpilers?

MM: Need for polyfills?

JHD: Still know of runtimes that need es5-shim

DD: If Object.assign is slow, no one will use it

RW: It will be a complete failure.

BE: The complaint is?

BT: If no one cares about this behaviour, why are we requiring it?

MM: I care.

JHD: Have a ticket in es6-shim for this, haven't implemented it due to the cost of try/catch

BE: If authors aren't testing for this and no one is paying attention to this...

AWB: But we don't want to leave it implementation dependent.

DD: In ES5 it's completely deterministic: you just throw the first

DL: No.

MM: If you consider the object as a bag of properties and not a sequence of properties.

JHD: Not a determinism issue, completely deterministic in all cases. The first error is always thrown

AWB: All the properties that can be computed will be computed.

MM: No disagreement

Discussion about who owns the burden of these performance

RW: Why does Object.assign also behave this way?

BT: b/c we made O.pD and O.c do this, and for consistency

RW: But my original proposal said nothing of doing this. Developer expectation would be: this behaves like jQuery, YUI, Dojo, etc.

MM: Do not object to `Object.assign` being specified without the try/catch because the operation is just a put and when the target is a non-Proxy it may still have setters invoked on put.

BE: if we made a mistake in not specifying order for Object.defineProperties or Object.assign, that's on us -- not a reason to inflict held-first-exception workaround for our mistake on devs of engines and polyfills

#### Conclusion/Resolution

Continue tomorrow.
