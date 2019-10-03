# July 29, 2014 Meeting Notes
-----


Brian Terlson (BT), Dmitry Lomov (DL), Waldemar Horwat (WH), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jafar Husain (JH), Jeff Morrison (JM), Mark Honenberg (MH), Caridy Patiño (CP), Sebastian Markbåge (SM), István Sebestyén (IS), Erik Arvidsson (EA), Brendan Eich (BE), Mark S. Miller (MM), Sam Tobin-Hochstadt (STH), Domenic Denicola (DD), Peter Jensen (PJ), John McCutchan (JMC), Paul Leathers (PL), Eric Toth (ET), Abhijith Chatra (AC), Jaswanth Sreeram (JS), Yehuda Katz (YK), Dave Herman (DH), Brendan Eich (BE), John-David Dalton (JDD)

-----

## Introduction

JN: (Welcome and host details)

Introductions.

Agenda: https://github.com/tc39/agendas/blob/master/2014/07.md

JN: Agenda approval?

Approved.

JN: Minutes from June 2014 approval?

Approved.

## 4.1 Review Latest Draft

(Allen Wirfs-Brock)

https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-07/rev26-summary.pdf


AWB:

Slide 1

- "Task" => "Job"
- Generator oject return method/for-of/in loops use return method on generatorsGetMethod, now treats null and indefined equiv as meaning no method available
- Eliminated the ability of Proxy handlers to extend the set of property descriptor attributes thet expose vis [[GetOwnProperty]]
- Added invariant checks for Proxy [[OwnPropertyNames]] internal method
- Added an informative generator function based definiton for ordinary object [[Enumerate]]
- Another round of updates to 9.2.13 FunctionDeclarationInstantiation to fix various scoping bugs.
- Eliminated duplicate property name restrictions ob object literals and class definitions
- Revisited @@unscopabe support in Object Environment Records


RW: Clarification about #3

MM: Prevent the ability to lie about decriptor values; prevent leak
    "time of check to time of use" (ToCToU) vulnerability


(re: #5)
WH: Informative implementation may cause readers to incorrectly assume that anything that doesn't conform to to that informative implementation is wrong. In particular, worried about users assuming that implementation behaviors that the informative implementation doesn't do can't happen.

(discussion re: normative vs informative prose in spec)

WH: "Note" sections?

AWB: Sections marked "Note" are informative, making them normative would be redundant

WH: Too many "Note" sections appear to be normative rephrasings of other normative text, which we labelled as informative only because we're afraid of redundancy. Then when we have one which describes something that behaves quite differently from the normative text, it can be misleading.


Slide 2

- For-of now throws if iterable value is null or undefined (also reverted comprehension to throwing for that case)
- `Date.prototype.toString` now uses NaN as its time value when applied to an object without a [[DateValue]]
- Function poison pill caller and arguments properties are now configurable

General concern about whether you could take the sloppy-mode and add it to a strict-mode function via reflective APIs.

Turns out that the sloppy mode behavior is implemented in all current engines as a magic value property, so this will not be possible (phew!).

- `await` is a FutureReservedWord when parsing and the syntactic grammar goal symbol is Module
- Better integration of `Object.prototype.toLocaleString` and `String.prototype.toLocaleString` with ECMA-402
- Added `name` property for bound functions in `Function.prototype.bind`. Fixed bugs in generating length property in `Function.prototype.bind`
- Tweaked Script GlobalDeclarationInstantiations to deal with error situations that could arise from misusing proxies for the global object.
- Changed handling of NaN from a sort comparefn to match web reality (http://bugs.ecmascript.org/show_bug.cgi?id=2978)


MM: (re: #6) What is the bound name?

AWB: "bound ..."

(per previous resolution—find and link)

AWB: (re: #8, sort behavior when comparison function returns NaN) the change adds:
"If v is NaN, then return +0. "

WH: Note that that bug contains other examples where sort would still be inconsistent.
WH: The issue here is that +∞ - +∞ is NaN, which means that using a-b as a sort function allows you to compare +∞ with -∞, but +∞ is not equal to itself.
WH: I wrote this wording in ES3 and I'm fine with this change. It will fix the behavior of sorting arrays containing ±∞ but not NaN's. With NaN's you'll still get an inconsistent sort order (because the ordering relation is not transitive) and hence implementation-defined behavior.

MM: Worried that implementation-defined behavior could do bad things such as violate memory safety. Should state that it doesn't.

MM: (filing bug to make language more specific to avoid memory safety violations)

AWB: There was never a concern about violating memory safety because we don't define memory safety

WH: I tried to formalize it in ES3 but it was too much trouble. I wanted  to state that the sort always produces a permutation, but that doesn't  apply to sorting oddball input objects containing things such as holes with prototype properties showing through, read-only properties,  getters/setters, proxies, .... Can't write "sort doesn't violate memory  safety" without formalizing what memory safety is.

MM: Will write concrete suggestion for handling and submit as part of bug

https://bugs.ecmascript.org/show_bug.cgi?id=3089


Slide 3

- Updated Symbol conversions:
  - `aSym == "not a symbol"` produces false.
  - `var s = Symbol(); s == Object(s)` produces true.
  - `"foo" + aSymbol` or `aSymbol + "foo"` throws TypeError.
  - Symbol `@@toPrimitive` returns the wrapped symbol value.
  - `ToNumber(aSymbol)` throws.
- Spread now works on strings `var codeUnits = [..."this is a string"]`
- `yield *` now works with strings: `function * getchars(str) {yield * str}`
- Annex B support for function declarations in IfStatementClauses
- Annex B (and 13.12) support for legacy labelled FunctionDeclarations
- Updated Annex C (strict mode summary) WRT ES6 changes and extensions

EA: (re: #2) Removed the Object check?

BE: Andreas didn't want values on the right of a destructuring (number, etc)

EA: Definitely want to spread strings

BE: Agreed, we should revisit.

(Added: https://github.com/tc39/agendas/commit/370e3029d01659620e0ca03bf370eb5beefca45e )

Re: #4, the resolution: https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-06/jun-6.md#block-scoping-issues

BE:

```js
(function f() {
  console.log(g);
  L: function g() {};
})();
```

DH: The grammar: inside a LabelledStatement, can't start with "function"

BE/AWB: Clarification of Statement and Declaration

DH: Suggest: we can deal with this post-ES6. It's a useless thing that happens to parse and not worth our immediate attention.

AWB: We need to decide if this is a function declaration, does it hoist?

DH: But won't affect the web, existing can't be relied on. The existing work has been done, but no additional work

WH: Treat this the same as function declarations inside of statements: ie. `if (true) function f() {}`. Do we allow `while (true) function f() {}` ?

YK/BE: Let's take this offline.

WH: Let's keep it as it is in ES5

AWB: Whoever maintains web specs...?

BE: Not all browsers do the same:

(results of above code)

- SpiderMonkey: ReferenceError
- V8: function g() {}
- JSC: function g() {}
- Chakra: function g() {}


AWB: Spec is up to date, without the modules work.








## 4.6 Unscopables

(Erik Arvidsson)

https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-07/es6-unscopables.pdf

(https://bugs.ecmascript.org/show_bug.cgi?id=1908#c14)


**Object instead of Array**

```js
Array.prototype[Symbol.unscopables] = {
  ...
};
```
(with null prototype)


**Walk The [[Prototype]] Chain**

For
- HasBinding
- GetBindingValue

But nor for:
- SetMutableBinding

AWB: essentially replicating the prototype lookup algorithm in two additional places. Realized a third.

EA: ...

**Setter Issue**

SetMutableBinding ignores @@unscopables so we can get a mismatch:

```js
with (object) {
  x = 1;
  assert(x === 1); // can fail
}
```

YK: Needs to be written?

AWB: More that wasn't considered. Proxy issues in bug (above)

EA: The problems arise when your prototype has getter or setter or proxy. The result of HasBinding can return true for a property further down the prototype chain, but then Set got invoked using a setter that was black listed in HasBinding.

AWB: Proposal is, do what we've done and leave setting as is.

Only apply unscopable at the local level, don't walk the prototype chain

Any binding resolution operation, on a `with` env record:

1. looks up unscopables, doesn't matter where in the prototype
2. checks the `name` against unscopables (has, not hasOwn)
3. if found continue up to the next level

Only applies to "with environments"

STH: Should unscopables affect things in the prototype chain

WH: Does it apply to both reads and writes?

AWB: Yes

STH: Looks only at the object with unscopables as own property?

AWB: No, it's on the prototype, to not own

STH: Should this apply to all spec algorithms?

YK: Everyone agrees?

STH: AWB's proposal says no

AWB: Only object environment records for `with`

STH: it _should_ apply to SetMutableBinding?

AWB: Yes.

EA: The reason for not doing [[Get]] was because you might have instance properties on the object

YK: Can link the unscopables

EA: Agreed. And don't do hasOwn

STH: can break existing programs that use instance properties

BT/AWB: Discussion about compatibility.

EA: What about Globals & unscopables? The global object is an ObjectEnvironment too. Do we plan on adding unscopables?

Generally, no.

YK: Are we sure there is no case to use unscopables on the global object

RW: Could we specify no unscopables on global now and relax it later?

EA: for ES7

AWB: If this only applies to `with` environments, then that's not part of the global object

MM: Unless you do: `with(global object) {...}`

Confirm.

AWB: Is this a function of `with` or the environment?


#### Conclusion/Resolution

- @@unscopables only works inside of `with` object environment records, not global object environment records.
- Revert to the previous algorithm:
  1. looks up unscopables, doesn't matter where in the prototype
  2. checks the `name` against unscopables (HasProperty, not HasOwnProperty)
  3. if found continue up to the next scope level



## 4.8 Consider if Object.assign should silently ignore null/undefined sources

(Sebastian Markbåge)

(Request slides)

SM:

```js
Object.assign({}, undefined);
```

This throws, but propose that it shouldn't.

SM/AWB: `Object.keys` was relaxed

```js
Object.assign(undefined, {});
```

This should still throw


DH: undefined and null are probably treated the same by ==

Do we want to treat null and undefined the same? Probably not.

DD: The mental model should be for-of + default arguments, not for-in

MM: use case for tolerating the null is in JSON data. JSON has no way to represent undefined, except for null

JH: or omission

SM: Covered existing libraries to use `Object.assign`, feedback almost always included the undefined case.

JM: Did you distinguish null and undefined?

SM: No

YK: We should distinguish or we have two nulls

#### Conclusion/Resolution

- do not throw on undefined
- will throw on null



## Short discussion about making generator.return() throw a special exception.

DH: Want to bring up Andy Wingo's preference (discussed on es-discuss) for modeling return() as an exception rather than a return.

General opposition.

#### Conclusion/resolution

- keep as is: return() method produces a return control flow, not an exception





##

AWB: In the process of for-of, if a throw occurred, does that turn into a throw to the iterator?

NO.


## Yield *

AWB: Does an internal throw

When a `generator.throw()` is called and the generator has a yield* the spec currently calls `throw` in the yield* expression


DH: Call return() on the outer generator, delegates calling return() to the delegated `yield *`

BE:
```js

function* g() {
  yield* h();
  console.log(42);
}


function* h(bound) {
  try {
    for (let i of range(bound)) {
      yield i;
    }
  } finally {
    console.log("h returned");
  }
}

let it = g();

it.next();  // returns {value: 0, done: false}
it.throw(); //

```

AWB: If `it.return()` we would send a return to the `h` instance.

Confirm.

AWB: if `it.throw()` do we send a return to the `h` instance?

MM: we would do a `throw`?

AWB: we wouldn't. Think of the `yield*` as a for-of. h() doesn't know what its client is.

The problem:

the resumption from the yield is throw, back in the `yield*`, what to call on `h()`

DH: Propagate, that's the point of `yield*`, it should behave as if the inner generator is inline and anything it does propagates.

AWB: My mental model of `yield*` is that it expands to a for-of { ... yield ... }

MM: You should not think of it that way.

DH: You should not base your mental model off of an expansion; you should base it off of what `yield*` is meant to be used for.

The desugaring into for-of is not at all straightforward.

AWB: the desugaring in the algorithms in the spec is not actually that complex...

DH: the way to think about this is to directly inline the body of `h` into the body of `g`, not as a generator equivalent. This is the generator analogue of beta-equivalence.

AWB: why don't you do that for any function then?

DH: well, if we had TCP, we would have beta-equivalence.

YK: (Saw that one coming...)

DH: the important refactoring property to have is that you can extract out some generator logic into a helper function and then call it with `yield*`. Ben Newman was talking about a similar/related thing. It is very important that the throw to the outer generator get delegated as a throw through the inner generator.

MM: What is the model that the user has: who is the `throw` complaining to?

AWB: And who has control? Is the generator calling out and getting something back or into another generator.

DH: for-of and `yield*` diff roles: for-of is a consumer and generator stops there. `yield*` is consuming and producing by composition.

JH: Two models: consuming and emitting. `yield*` is a stream fusion,

STH: `yield*` compensates for the shallowness of yield

DH: It allows composition of generators

JS: You could expand these to for-of

YK: Those that work in C# find this to be a natural way to think of this, but others may not

JS: My concerns are speed

DD: Think about how you could desugar and see where it falls down

YK: disagreement

DH: Fall over in more cases

MM: Would it be plausible to have the `throw` propagate to the inner generator as well?

DH: check out [PEP-380](http://legacy.python.org/dev/peps/pep-0380/#formal-semantics). The desugaring is mind-bogglingly complex, but the refactoring principle is very straightforward. Refactoring should not introduce corner cases where it behaves differently.



MM: consensus that yield* delegates throw?

JS: no objection

#### Conclusion/Resolution

- `yield*` delegates `next()`, `return()` and `throw()`
- for-of propagates abrupt completion outward, calls the iterator's `return()`


AWB: Another question... when we do the `return`, that may return a value and currently throwing that value away. There is no way to override the normal loop termination.

DH: If we do a throw that causes us to call `return()` on a generator, and that returns a value, the value is dropped on the floor, which is consistent.

AWB: If the `return` call on the iterator is an abrupt return (normally means an exception)...

MM: The call to _return_ itself completes abruptly?

AWB: Yes

MM: it's "finally-like", that supersedes

AWB: In one sense, a dropped exception

BE: Let's have a smaller group with the champions look at the final specific details.


## 4.11 Consider adding "attribute event handlers" to ANNEX B

(Allen Wirfs-Brock)

AWB: Add to Annex B the semantics of defining an attribute handler so that the HTML spec can get out of the business of spec'ing a distinct form of ES function.

MM: An internal function for other specs?

AWB: If you're implementing a browser, you'd follow this specification.

YK: Isn't this just `with`?

DD: No, there is more there (see http://kangax.github.io/domlint/#5 for details)

EA: Why can't this be in the HTML living spec?

AWB: That's the problem, Hixie is using internal APIs, in some cases incorrectly.

MM: Is this for ES6?

BE: Not important enough for ES6

AWB: not a lot of work.

No support for ES6

DD: I don't think we should push for ES6

RW: Last meeting pushed back 6 months, this isn't that valuable.


#### Conclusion/Resolution

- Scheduled for ES7 Annex B


## 4.9 Arguments/caller poisoning on new syntactic forms - Arrows, Generators

(Brian Terlson)

BT: All function-like things agree on having arguments object

DH: What's wrong with having the poison properties?

BT: The motivation for having those properties may not apply to those new syntactic forms.

MM: Keep them and they are there and configurable, or mandate w/o caller and arguments properties

EA: Too much weight on edge cases

MM: Born without extra properties would be fine

AWB: Do we even need poison pills?

BT: Can we get rid of it?

AWB: Can't add properties called "caller" and "arguments" to strict mode functions

MM: New forms, the properties are absent.

AWB: Are these properties implemented as own properties or inherited?

MM: And we agreed that `Function.prototype` remains a function



#### Conclusion/Resolution

- Get rid of all poisoned caller and arguments, except for the poisoned caller and arguments on Function.prototype
- All functions born of non-legacy function syntactic forms do not have caller and arguments properties


## 4.10 Signaling stability of existing features

(Domenic Denicola and Yehuda Katz)

YK: Problem: ES6 signaling is too fuzzy. ES6 is a monolithic thing. Three stages:

1. Seeking the happy-path semantics
2. Find the happy-path semantics
3. Finalize edge cases, done.

Need to

AWB: What are we doing that sends the wrong message?

YK: eg. when we said were pushing for a 6 month extension, people assume this means all features are unstable

RW: (relaying additional experience re: above)

DD: Proposed stages:

1. Locked

2. Stable

3. Almost Stable

4. Stabilizing

5.



(need to fill in descriptions from proposal document)

AWB: The problem is that some things that are "locked" become "unstable"

JM: It's possible to be "unstable" until spec is published

STH: And publication isn't even the end either.

WH: Any time someone proposes something like this, I want to ask if this would've correctly predicted the results had we done it some time ago. For example, had we done this, say, in January then comprehensions would have been in the Locked stage, but then we took them out.

WH: Math functions are listed in the Locked stage in your proposal but at the same time we have important discussions at this meeting about their precision.

?: Math function precision could be a different feature.

WH: That's weasel wording — when you want to change some aspect of a feature, you just move the goalposts to make that aspect a separate feature.

DD: "we're" not good a the PR of specification churn

MM: Not sure what this proposal is really addressing. The community has a way exxagerated sense of instability, and over-reacts to any change. So what?

JM: Won't implement modules at FB because of churn.

AWB: Does this change the model for ES7?

DD/YK: No.

AWB: So this is for the next 5 months of ES6?

MM: Not enough community feedback because the feedback is limited to only those that are willing to accept churn?

YK: Yes

DH: Priorities: getting feedback for ES6 is low, because it's too late in the game. Focus feedback priority on ES7. Despite the inclusion of more practitioners in the TC, there are still broad misunderstandings about TC39 and ES6.

DD: The perception is that ES6 is the new ES4, except that we all know this isn't true.

AWB: Two things... concerns about how you're defining these stages. Who is going to do this work? I don't want to say 5 months from now that the spec is "unstable" in its entirety.

Mixed discussion about implementor opinion of feature.

AWB: We don't want uninformed feedback that we have to filter

DH: It's really bad to not talk to the community, because people think the worst.

YK: A vast majority of ES6 is stable

MM: How we should be messaging as individuals. TC39 should not be spending time

PL: This is all too hard to quantify and assess because change _will_ happen.

DH: Stability chart is

#### Conclusion/Resolution

- Individual evangelism, feedback and outreach



## Postpone Realm API to ES7

MM: Can we?

DH: I'm ok with this, but don't want to be in a situation where we're permanently postponed while waiting for a security review. Let's reach out to other security reviewers.

DD: I can implement a draft implementation in node for the purpose of review.

AWB: The modules spec depends on realms

DH: Only the ability specify the Realm in user code needs to be removed.

MM: let's pull Realm from ES6, if there are issues we can address them.

AWB: The Realm API cleaned up how you go about eval'ing things.

DH: This clean ups can stay as-is, now ready for the reflection to come in ES7

AWB: Not going to have anyway for user code to eval in Loader.

DH: w/o Realm no ability to virtualize eval. Doesn't effect utility of Loader. The specification is detailed and complete, should continue moving forward.

MM: And any issues that are encountered can be addressed.

DH/YK: Agreement that test implementation in node is ideal (vs. browser)

Discussion re: security issues created by implementations in browsers.

MM: The security implications and risks are greater for Realm because this _is_ the sandbox api.

DH: Agree.


#### Conclusion/Resolution

- Realm postponed to ES7



## Revisit Object.assign()


JDD: The issue currently: if we allow `undefined` then `null` is the only value not allowed. I don't see anything distinguishing.
It's strange that `null` is singled out like this. When `null` is used correctly, it makes sense here.

DD: Then the argument is that it should also throw

JDD: No, it shouldn't throw.

YK: Should throw on numbers, booleans, etc.

JDD: Should affect `Object.keys` as well

YK: Doesn't have to

JDD: There shouldn't be special casing for null and undefined

DD: `undefined` triggers the default parameter, `null` doesn't.

YK: The mental model is: `undefined` is missing, `null` is not

AWB: Mentions the relaxation of rules for `Object.keys`

YK: We should enforce the difference between `null` and `undefined`

SB: (details about a study in FB code re: how `null` and `undefined` are being used)

DH: We need to decide whether there is a useful programming model for these cases: `null` and `undefined`

JDD: I think the boolean, number, string values are a side effect because they are just treated as empty. Propose to treat _both_ `null` and `undefined` the same way.

JM: Sounds like a better argument against boolean, number, string.

AWB: (example of a number object to be extended)

SB: The differnce is target vs. source, `null` and `undefined` throw for target.

Mixed Discussion


DH: To avoid rehashing, guiding principle:

- `null` represents the no-object object, just like NaN represents the no-number number
- `undefined` represents the no-value value


#### Conclusion/Resolution

- Overriding previous resolution:
  - `Object.assign` does not throw on `null` or `undefined`
- Adhere to the guiding principle stated above


## Test262 Update

(Brian Terlson)

BT: CLA is now online, fully electronic. Lots of contributions, specifically awesome help from Sam Mikes.

- Improvements to the test harness
- Repeat contributors
- Converting ES5 to ES6
- Converting Promise test inbound
- Massive refactoring commit


Discussion about Promise testing

JN: Work with István to write a press release for this?

BT: Yes.

DD: Node runner?

BT: MS has been using a node runner internally, I've pulled out the useful pieces and pushed to github: https://github.com/bterlson/Test262-harness


#### Conclusion/Resolution

- announcement effort
