# November 29, 2016 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Jordan Harband (JHD), Brian Terlson (BT), Adam Klein (AK), Thomas Wood (TWD), Mark S. Miller (MM), Jeff Morrison (JM), Chip Morningstar (CM), Dave Herman (DH), Yehuda Katz (YK), Leo Balter (LEO), Sebastian Markbåge (SM), Kent C. Dodds (KCD), Kevin Gibbons (KG), Tim Disney (TD), Peter Jensen (PJ), Juan Dopazo (JDO), Domenic Denicola (DD), Daniel Ehrenberg (DE), Shu-yu Guo (SYG), JF Bastien (JFB), Keith Miller (KM), Michael Saboff (MLS), Chris Hyle (CHE), Alex Russell (AR), Brendan Eich (BE), Caridy Patiño (CP), Diego Ferreiro Val (DFV), James Kyle (JK), Eric Ferraiuolo (EF), Mathias Bynens (MB), István Sebestyén (IS)

-----

## Introduction


Discussion with István, dinner on Wednesday, etc.

WH: ECMA member site is down and email is bouncing. How do we vote on standards at next week's GA when we can't get them and don't even know where the GA is?

IS: Will send out packet tomorrow.

IS: Correct, for more than a week we are experiencing major problems with our internal IT system, we have no email and access to the internal servers. The major HP server that we are using internally collapsed within an hour last Monday and 3 Harddisk, the mainboard, another board had to be replaced. This took a week for our external IT caretaker and HP. Now starting from Thursday morning at least the Email is back, and the file servers should also be back this afternoon. Sorry for the problems, this was the biggest IT problem I had in the Ecma office.

AWB is acting chair, as John Neumann is missing.

## 3 Adoption of the agenda


- [Agenda](https://github.com/tc39/agendas/blob/master/2016/11.md)


#### Conclusion/Resolution

- Adopted.



## 4 Approval of the minutes from last meeting

- [Agenda](https://github.com/tc39/agendas/blob/master/2016/11.md)

AWB: Can't get the minutes due to ECMA web site being down, so this item is deferred until January.

IS: Correct, I will try to trace it and distribute it per Email. Maybe you can approve it at this meeting.
Basically I did prepare the minutes as usual and published it about 3-4 weeks after the September 2016 meeting.

#### Conclusion/Resolution

- Adopt at next meeting.


## 5 Report from ECMA Secretariat

Scheduled for tomorrow in conversation with István

##  6 Administrative matters

AWB: Proposed dates for next year's meeting on the agenda. Which organizations may want to host? We need the January meeting scheduled! Schedule for 40-50 as a safe upper bound.

- Checking on dates for next meeting:
- Adam @ Google SF
- Domenic @ Google NY
- Shu @ Mozilla MV
- Juan @ Yahoo (?)

__should we write this in the notes? maybe better not to publicly shame people here to host__

IS: In my opinion there is no problem for discussion this openly. Hosting of TC39 meetings are not easy. And it is always appreciated if someone can take such a burden. But also understood if someone can not take it. Whatever help from Ecma is required we try to fulfill. For Ecma it is a great help if one of the TC39 members can host the meetings. An alternative would be to go into a hotel, but that would be quite expensive since especially in Silicon Valley many Tc39 members would not stay in the hotel, but come from home. If we had the meeting e.g. in Switzerland, then everybody would need a hotel room, and we could go for a "conference package" solution, which of course for TC39 participants also not inexpensive as such meeting would include travel and hotel costs.

## 7 ECMA-262 Status Updates

### Spec Changes

- Async Functions merged
- Trailing Function Commas merged
- Better rules for NewTarget and Super in eval.
- _Please file a bug if you run into weird things like this!_
- Export specifier is refactored to use a grammar parameter with far fewer static semantics.
- Buckets of editorial fixes as usual.
- JSON is no longer characterized as a subset of ECMAScript (due to handling of U+2028/U+2029 LINE/PARAGRAPH SEP)
- Maybe we could fix this, by making those ES line breaks as well! It may break compatibility, though. Leave for a concrete proposal.

### Tooling Changes

- New layout (got rid of dark theme :()
- Responsiveness++
- Better search. Key to efficient usage: / toggle, make use of casing.
- Pinned clauses - replaces a thumb in the spec.
- Keep in mind that CSS and JS changed. If you are hotlinking ECMA-262's stylesheets your spec is broken. Don't do this.

### End Game

- NOW - last opportunity for stage 4 consensus on large features.
- global
- SharedArray buffers
- a couple 402 features, possibly

DD: Layering changes for the web?
BT: Need help prioritizing them

- Jan - last opportunity for stage 4 consensus on small features.
- Candidate Draft starts Feb 1, features frozen.
- RF Opt-out Period - Feb 1, 2017 to April 1, 2017. Or as early as possible

AWB: Ideally, members can review before sending to Ecma--some time before the next meeting. But it should be OK to discuss needs-consensus PRs in the January meeting in time for that opt-out period.

- June - ES2017 ratified!

AWB: Sounds like the big undetermined part is SharedArrayBuffer. If it goes to Stage 4 for ES2017, it would have to be decided at this meeting.
SG: We could get to Stage 3 at this meeting; I will present on the memory model at this meeting. Test262 tests are still needed, but we already have implementations.
BT: The integration work could be done before we get to Stage 4
DD: The Test262 tests will be technically difficult to write
AWB: If we have a committment from implementers for tests by June, maybe we could go forward with it.
SG: How about the HTML integration?
DD: This is in progress, but it is also out of scope for this committee


## 8 ECMA-402 Status Updates

DE: not much has changed since the last meeting; one small bug fix. There are a few editorial open issues, for which patches are welcome. We have two stage 3 features, plural rules and number format format-to-parts, where implementation work is ongoing.

AWB: the endgame schedule for 402 needs to be the same as for 262.

DE: yes. Note that those two stage 3 features already have Test262 tests. One feature that did make it in is DateTimeFormat formatToParts. There was this change I got consensus on a while ago about resolving the constructor semantics (which changed from v1 to v2), but we're still waiting on infrastructure work to put that into the spec. I hope it can get into v4.

DE: (clarifies that the infrastructure missing is the spec infrastructure for noting something as normative-optional but putting it inline instead of in an Annex)

BT: it's OK to just use some nice HTML that makes things look good. It's not as important that it be machine-readable. You can just do something for now and we'll work on the infrastructure later; I honestly believe the inlining of Annex B into the spec is the future of 262, so we'll definitely use that in the future.

DE: OK, so if I do this some time over the next two months will that be in time?

AWB: ye

DE: PRs to get into ES2018:

- https://github.com/tc39/ecma402/pull/84
- https://github.com/tc39/ecma402/pull/114

Possible proposals at Stage 3 which may reach Stage 4 by January and be integrated:

- https://github.com/tc39/ecma402/issues/30
- https://github.com/tc39/proposal-intl-plural-rules

## 9 ECMA-404 and ECMA414 Updates

_no update_

## 13.i Needs-consensus PRs

BT: Layering fixes, DE's item on the agenda later, (discussion of unifying Array and String lengths---let's leave it open until later)

## 11.i.a RegExp s/dotAll flag proposal

(Brian Terlson)

- [Proposal](https://github.com/mathiasbynens/es-regexp-dotall-flag)

BT: proposal is basically complete; really simple. It's just the additional s flag, plus the change to the flags portion of the regexp so you can query whether dotall is used. It's just a way to tell the regexp engine to tell dot to match everything instead of almost everything.

YK: even with m?

BT: yes. That just changes the behavior of $ and ^.

YK: I see. In Ruby m is basically s.

BT: Also this will make . match astral characters even for non-Unicode regexps

MB: correction: no, it won't

DE: and by "matches" you mean matches a single code unit, not the code point like the Unicode mode does

AWB: To clarify, we need to only match code units here, not code points.

WH: . has always matched all non-line-terminator characters. In non-Unicode mode it doesn't care if those happen to be surrogates or not. The mention of astral plane characters in the proposal seems to just be confusion.

(debate on whether the current spec actually does match astral code units or not)

MB: To clarify: the proposal states that with `u`, `.` already matches astral characters but not line terminators (i.e. `u` already solves one issue with `.`). By adding `s` it matches line terminators as well. `s` doesn't have any special effect related to astral symbols.

BT: regardless, not important for stage 1. The majority use case is making dot match line breaks.

DE: V8 is fine with it.

BT: other languages have it. It's easy for Chakra to implement. Spec changes are very minimal.

(debate over whether "s" is the right name. It is, simply because every other language does it that way.)

#### Conclusion/Resolution

- Stage 1 acceptance
- Once Brian figures out why he put the thing about surrogate pairs in there and removes or clarifies it, it will come back for stage 2

## 11.ii.b Promise.try

(Jordan Harband)

- [proposal](https://github.com/ljharb/proposal-promise-try)

JHD: This could start off a chain of calls to .then. To run the code on the same tick and return a Promise, so it's different from Promise.resolve().then().

_Discussion about what the semantics of the job loop are_

JHD: This avoids creating an immediately invoked async function, avoids the Promise constructor, etc.

DD: This is used all over the place in userspace. It always runs synchronously. It traps any exceptions and turns them into exceptions, critically.

MM: Is this ambiguous? Will it always run synchronously, or sometimes?

JHD: Always.

MM: This is important that it's done like this.

JHD: Virtually any Promise library has this feature.

DD: Example for motivation: If you have a function that returns a Promise, it's not supposed to throw. Wrapping the function body in a Promise.try() will achieve the right result of converting the throw into a rejected Promise.

```js
function foo(relativeURL) {
  const absoluteURL = new URL(relativeURL, someBaseURL).href;

  return fetch(absoluteURL);
}

foo("http:0"); // throws!! oops

function foo(relativeURL) {
  return Promise.try(() => {
    const absoluteURL = new URL(relativeURL, someBaseURL).href;

    return fetch(absoluteURL);
  });
}

function foo(relativeURL) {
  return (async () => {
    const absoluteURL = new URL(relativeURL, someBaseURL).href;

    return fetch(absoluteURL);
  })();
}

async function foo(relativeURL) {
  const absoluteURL = new URL(relativeURL, someBaseURL).href;

  return fetch(absoluteURL);
}

function foo(relativeURL) {
  return async do { // ?!?!?!
    var absoluteURL = new URL(relativeURL, someBaseURL).href;

    fetch(absoluteURL);
  };
}
```

YK: Given that we have async functions, isn't that more ergonomic than Promise.try, which is only a half-solution?

DD: I think in all real examples, you should just use a normal async function; you don't need an immediately invoked async function.

JHD: This is addressing the case where as a user of a function, the original author of the function made the unfortunate mistake
of not ensuring that the promise-returning function will never throw.

JHD: Some use cases may want to work with Promises and not return a Promise. Promise.try may be more ergonomic than an immediately invoked async function here.

KG: Or returning an array of Promises, etc.

JHD: Async function is not always what you want to do. This is why I'm working on methods like this one, and finally.

YK: Wouldn't this be hard to teach? Not present in RSVP

AWB: Idioms are things to learn. This seems learnable.

BT: Async functions existing aren't a reason to not extend Promises.

JHD: This provides something analogous to async functions, which is synchronous execution up to the first await.

WH: I'm skeptical about adding an additional way to do it, especially since it's not shorter in terms of number of characters.

JHD: Shorter in cognitive load. I've heard from users that Promise.try and Promise.finally are the only reason for continuing to use Bluebird.

BT: I've heard that too.

MM: Cognitive overhead goes both ways. Adding features and diversity of idoms increases the congitive overhead

WH: People read others' code in addition to writing it. We already have this feature in terms of async functions. It'd increase cognitive overhead to also add an equivalent Promise.try to do the same thing.

BT: Async functions happen to do some similar things, but the intent is different. Are the only concerns that this is worth paying the complexity cost?

(What about async do?)

JHD: Let's decouple these. Promise.try and Promise.finally give us most of what we need.

YK: Why not publish libraries for just these extensions?

JHD: I have published a polyfill, but developers seem to like to get one thing that gets all the things.

MM: I overall feel this doesn't pull its weight, but it still meets the criteria for stage 1.

BT: would any promise API rise to a level of usefulness that you would be happy with in the presence of async function?

YK: Promise.any

MM: Promise.post/send/get/etc. for promise pipelining

BT: but what about things that you could implement with async functions?

MM: I'm not making a blanket statement, but async functions raise the bar very high; the case would have to be strong and it would have to add a lot of value compared to async functions.

JHD: Regardless of transpilers, there is a barrier to adopting new features. Async functions may be harder to adopt than this library feature. We don't use async functions at AirBnB because we don't want the regenerator dependency.

AR: It's good to have various features that people can adopt incrementally based on a common intelligible base, such as Promises and async functions

JHD: new Promise is unintelligible

YK: When I have a project using async functions, it's hard to find a point where I don't want to just use them all the time. And the congitive overhead is far lower.

Timebox BEEP

JHD: Stage 1?

WH: I don't object to Stage 1, but I am uncertain about utility

Stage 1.

JHD: Doesn't sound like we're at Stage 2 because of concerns about utility. What would it take for convincing?

MM: Argument for: the proposal: Analogous to syntax, and would be expected for orthogonality, so does not increase cognitive burden but rather decreases it.

BT: Let's look at the codebases of people who use try, the people who say they're not ready for standard Promises as a result.

#### Conclusion/Resolution

- Stage 1 acceptance
- Not ready for Stage 2, pending more evidence of motivation.

## 12.i.a Promise.resolve constructor check

(Jordan Harband)

JHD: `Promise.resolve` checks the constructor property and returns it straight away if so. Should new things like `Promise.prototype.finally` do this as well? Or do we regret it?

DD: Whenever trying to coerce something to a Promise--we do this in several places: Promise.resolve and async functions. Upcoming, `Promise.prototype.finally` and async iteration. What should we do? Promise.resolve checks `IsPromise && .constructor === Promise`. Async functions always wrap in a new Promise. What should we do for new features?

AWB: This is all about subclassing. If you subclass Promise, then the constructor check should make things distinct.

MM: The brand check is critical. If you say `Promise.resolve(P)` where P is a genuine Promise, that you get P back. I could entertain eliminating the constructor, but we need the brand check.

AK: What about always wrapping?

MM: A coercion which always wraps has overhead, and we want to avoid that expense.

YK: Whether we remove the constructor check seems like whether we consider subclassing an important feature.

DD: Or, subclasses could do a little more work to make their own resolve method.

AWB: If you want a Promise, you say Promise.resolve, you don't say SubPromise.resolve. We currently, with the constructor check, guarantee that we get a direct instance of Promise.

JHD: I can buy that if you do Foo.resolve, you want a Foo.

DE: Shouldn't a subclass be OK, with substitutability of subclass instances?

AWB: `finally` should use `@@species`, similar to `then`

DD: V8 has a spec compliance issue where, in async functions, we brand check and avoid creating the extra Promise. This is a spec violation, and fixing the violation has potential performance cost. I think we should do a brand check and just use it when it passes.

MM: I was surprised that await always wraps. My memory was that we decided that await would do the equivalent of `Promise.resolve()`, implying that if it is a genuine Promise, it does not wrap. Having them not agree is just creating complexity and not equivalences, and it does confuse people.

JHD: The constructor check shouldn't be needed for async functions, just the brand check

DD: But the `.then` method is always called, when we wrap the Promise and then it gets resolved by calling the `.then` later in the resolution process. We want to have a primitive version of coercion which is common.

WH: Like MM, I want all of the places where we coerce things to promises (including Promise.resolve) to have consistent semantics. A constructor check doesn't make sense in some of those, so none of them should do a constructor check. They should only do a brand check.

AWB: If we brand check, allow subclasses, and then use the primitive `then`, the whole purpose of the subclass may be to override `then`, and we wouldn't be calling that new `then`.

DD: We shouldn't contort everything and make it slower to override then.

YK: I used to support Promise subclasses, and combinators don't work well with subclassing, so it's bad practice.

DD: Promise subclassing does not work; splits the ecosystem.

BT: We should either come to consensus that we don't want Promise subclassing, and not support it, or if we don't, then we have the responsibility to support it well.

#### Conclusion//Resolution

- Continue discussion later (timeboxed item)

## 12.i.b ArrayIterator tweak for detached TypedArrays

(Daniel Ehrenberg)

DE: _shows the PR_

- [Issue](https://github.com/tc39/ecma262/issues/713)
- [PR](https://github.com/tc39/ecma262/pull/724)

DE: For TypedArrays we want to be consistent, same for `length`  checks.

BT: We could refactor the iterators to be different if we can get away with changing the same-valueness between TA iterator and Array iterator.

DE: Could do.

WH: If you detach the typed array upon access of the last element, the next `length` access doesn't throw even though it should.

Would it break things to have typed arrays just use the length property?

Why do we not use length for typed arrays? <who is sitting next to @msaboff?

AWB: Not sure about historical reasons for doing it this way.

DE: These would be observable changes, although implementations don't currently implement the spec.

AK: Is anyone against adding an extra throw-if-detached line?

AWB: I am. Current spec has a problem. And, solution is to use variant A of the proposal.

BT: Can we just make [[TypedArrayLength]] 0?

DE: Possible...


#### Conclusion//Resolution

- Consensus on taking the PR (aka throwing on detached typed array during iteration via ValidateTypedArray)
- consensus example [found here](https://github.com/tc39/ecma262/issues/713#issuecomment-255878360) (the first option, "a")

```
8. If a has a [[TypedArrayName]] internal slot, then
  a. Perform ? ValidateTypedArray(a).
  b. Let len be a.[[ArrayLength]].
9. Else,
  a. Let len be ? ToLength(? Get(a, "length")).
```

## 12.ii.b Module Namespace Objects: Various Oddities

(Adam Klein)

- [Presentation](https://docs.google.com/presentation/d/1FgSbTHoLlDsigEHBd_qufJMPBNXCwbIw2kQsR-B0HPA/edit?usp=sharing)

AK: Module namespace exotic objects are very exotic. Mostly immutable from the outside, null prototype, special @@iterator

### Slide: module @@iterator

AK: The @@iterator is weird. Proposal possibilities:
    - Remove @@iterator; you can use Object.keys() for this
    - Make @@iterator more like other iterators and freeze the function

BT: You can for-of a Map...

DD: This is incongruous, since other object literals don't have an @@iterator like this

DH: @@iterator is for iterating over collections, and modules are not conceptualized as a collection

BT: I  see that argument

AWB: Map is a completely different thing; this is a namespace object.

BT: Point is, if it makes sense to iterate most of the time using keys, values, or entries, add an @@iterator to do that. Otherwise, don't. In this case keys doesn't make much sense.

DH: I can't remember the original motivation. Maybe we can find it in the bug database.

AWB: Say you've imported a namespace object. You've imported *. So you want to look at the names of the object, and you iterate over it.

AK: I would say this is not a very common operation

AWB: Arguably, this is a meta-level operation, a reflective operation, so explicit Object.keys makes sense

DH: This is in the power tools section, so we shouldn't be doing crazy extra work for the ergonomics

YK: but import * is not a power tool

DH: But looking at is as this fancy object is

JFB: We are talking about exposing WASM modules as ES module exotic objects. For dynamic linking, we may want to process all of it. You can do it with either feature, though.

AWB: The only other argument is that the @@iterator doesn't need to create this intermediate array, so it may be more directly implementable.

AK: Creating the JS functions for the @@iterator has its own overhead.

BT: I am worried that we don't have a good understanding of the motivation for creating this feature

AWB: For iterating over the objects without creating the intermediate array. But anyway, let's remove it

### Slide: @@toStringTag

AK: @@toStringTag: [[Configurable]] is true, but [[Set]] and [[DefineOwnProperty]] fail. This is inconsistent.

AWB: But this is a standardized, built-in method, and we generally allow monkey-patching of those.

JM: Isn't this for polyfilling? But in this case, there is a module

YK: And there's a null prototype, so we can't even do a real polyfill

AK: But the module doesn't get to choose.

AWB: So I think it should be configurable and mutable.

JHD: Could be useful for polyfilling if the thing that produced the module namespace object were wrapped and amended it

AWB: You don't want this to be a communications channel. If Mark were here, he'd agree. However, there's no essential invariant that configurable means it really is configurable. Anyway, it's OK to make it non-configurable--better internal consistency.

### Slide: SetPrototypeOf

AK: SetPrototypeOf to null should return true

BT: This is just following the precedent of defineProperty on non-writable, non-configurable, same-valued sets.

(agreement)

#### Conclusion/Resolution

- Consensus on removing @@iterator from module namespace exotic objects
- For local consistency, make @@toStringTag non-configurable
- SetPrototypeOf should return true for null

## 12.ii.d Proposal to reform the spec to include default export in export * from 'module'

(Caridy Patiño)

- (Presentation: )

CP: `export * from 'module'` does not export default export - seems confusing

CP: You may want to reexport, and that's broken. A common pattern is `module.exports = require('...');`
(The example in the presentation has some issues: `default` is a keyword and can't be imported without getting renamed)

DH: I strongly object to this proposal

CP:  The main proposal is remove the special restriction on default, and this creates a named binding when imported, rather than being filtered out?

DH: What happens when there are multiple export defaults?

AK: Just like currently, if there are conflicts, then they would lead to an error when importing through the conflict

YK: Seems bad that this is an error in linking rather than statically

AK: That's a different discussion

DH: I think the idea is to just treat it like everything else. But this isn't the programmer intuition. The programmer intuition for default export is that this is the default anonymous export. This happens to be implemented through a special exported name called default, but nevertheless, the idea is that this is the anonymous thing.

JM: I see that a lot of people get confused about default exports, but in my experience, I can clear it up by explaining that default is just another named export.

DH: Maybe understanding the mechanism helps advanced users, but the programmer intuition is more basic.

JM: The concept is that default is the main export, among a number of other subordinate named exports.

DH: That's understanding the mechanism, but when we design policies, they have to be designed around the programmer purpose. What are the intuitions about what it means. What I am reexporting from another module, this is something that I decide. When I'm composing utilities, I decide what the default is, and don't want to just inherit it.

YK: The intuition part is true, but the default of one will be different from the default of another.

JM: What about the scenario like lodash where you want to combine a bunch of libraries . If you're wrapping another module, and adding a couple things, where the default is forwarded, is more plausible. The language already exposes `import { default as alias }` -- the conceptual module is reasonable, but it's at a high level. There's a difference between suggesting (with nice syntax) and imposing constraints (the behavior that the proposal is reverting) it's different, making an inconsistency with the rest of the scenarios.

JHD: Why does import * bring in "default"?

YK: Because it has no cost

DH: Because it's not putting them in a scope, it's just putting them in an object

JHD: If you're arguing that the "default as named export" is supposed to be "hidden" from the conceptual model of a developer, then it seems like exposing it in `import *` is weird, when you can't `export *` and get the same behavior. I don't think that discrepancy is worth changing what `export *` does, but should we change `import *`?

YK, DH: Too late

DH: Two use cases for export *: Composing multiple modules, and decorating a module. Filtering default is necessary for the composition use case.

AK: That's not true, you can fix the ambiguity by explicitly exporting the default that you want.

JM: Anyway, you have that problem when combining modules that have the same name, resolvable in the same way

DH: There's an asymmetry--explicit name clashes are more explicit, but the concept of a default is more that it's per-module and not the category of things that would be overlapping.

JM: But, in the wrapping use case, forwarding with export * has the same thought process, but it's a scenario where you'd really prefer default to be included. Default should be handled the same way for exporting default twice as for exporting names multiple times.

AWB: Default has to always be explicit

JM: You combine named modules because you know they are bags of named exports. If you do that with wrapping, it's with the understanding that it has a default, and exporting that. I agree that default is special, and thinking of it as named is not important here.

KG: This would be a change to existing semantics, potentially breaking. Regardless of whether it's a good idea, could we get away wtih it?

DE: In the transpiler universe?

KG: Yes

DH: It would cause something which was an error to stop being an error.

AK: The only thing the proposal does is remove the special handling for export *

YK: What about the ambiguity?

CP: That's a property fo how modules work already. This is not a breaking change, and details are in the README: It's causing additional things to be exported, and you only encounter the errors if you actually use this new export which is ambiguous. From static semantics, you only take programs which were illegal and making them legal. Explicit defaults override anyway, so their semantics don't change.

DH: Only if you actually iterate over the module namespace objects would the behavior of existing programs change.

AK: Sounds like there's not consensus to move forward with this change. It was specifically designed to work like this

DH, YK: Right

CP: Do we want to be able to reexport more flexibly, with the second part of the proposal?

(Sounds like not)

AK: What's the really bad thing that happens if someone exports default, and then imports default

DH: The bad thing is when you don't want default at all.

YK: If you export it by accident, people may depend on it, and you can't remove it later.

#### Conclusion/Resolution

- No consensus on this change; the current state is as designed.

## 12.iv.a import()

(Domenic Denicola)

DD: AWB's issue: import as a unary operator rather than a pseudo-function as currently proposed. https://github.com/tc39/proposal-dynamic-import/issues/23

KG: Would it be an actual function?

DD: No, needs to be a function-like form.
Pros for function-like:

- Future extensibility (second argument)
- Ambiguity with 'import x' form in modules. You could use this from a script, and you might expect that you can write 'import x' in a script. But that would not be the same--it would create a Promise and then throw it away

AWB: You could require it to be parenthesized when it's in statement position, with the same logic that prohibits a function expression there

DD: But, at that point, if you need parens, you might as well have them after the import, rather than before

DH: If there's a lookahead restriction on expressions...

DD, WH: There's no lookahead involved here; this is just what grammars do, and by the time you get to the reduce part of the grammar you know which form you have

- Parens are usually required anyway, e.g., if you'll then the result
- If we were to do `await import x`, then it would be impossible because we've already used the unary operator
- Another possibility (though AWB expressed dislike) is local import being hoisted, which this would disallow

AWB: Pros for unary operator, with a low precedence like yield:
    - We are looking at something which is not a call, it's really based on conceptual state

BT: This is a little more like super(), which uses contextual information.

DH: But you could conceptually think of this as a function call. We have both forms, function-like and operator-ilke. Also, eval.

BT: If eval were a keyword, we'd maybe do it more as this pseudo-function thing

AWB: Actually I think we should do it as a unary operator in this case

DH: People might not actually think that hard about not needing parens for a prefix operator. So there might not be a strong conceptual distinction between unary operators and pseudo-functions

JHD: Douglas Crockford has in the past advocated using typeof with parens

BT: I claim that the mental model of import as a special function is simpler and more intelligible than operators.

WH: The only place the function mental model breaks down is if users try to assign without calling `x = import;` (but fails early like super)

AWB: I am concerned about things like the spread operator not working.

WH: But you can't spread into the parenthesized expression in an if statement either.

YK: Initially I was sympathetic to operator, but now I am thinking more like, the analogy to require is nice. So I support a function form. require is similarly magical about how it gets your context.

BT: Could we make import really a function at all?
(Seems hard, and no one is really advocating that)

BE: Back in the day, I considered making eval a special form. Regrets!

DH: The parens distinguish this form from the import statement, which is important. It disambiguates much better.

```js
import { toString };  // With AWB's proposal, would import "foo"!
function toString() {
    return "foo";
}

(import "foo").then(...);  // JHD: Looks like something very weird
import("foo").then(...);  // JHD: Looks like normal JS
  // BE: In AWB's proposal actually imports the result of evaluating the expression `("foo").then(...)`.
```

DD: We could allow spread and have it throw an error if it is dynamically not one argument

(Discussion about whether it should be OK to throw on the wrong number of arguments)

AK: The DOM often throws on the wrong number of arguments.

DD: We should either do either fully static or fully dynamic argument number checks

AWB: For extensibility, what if we define a second argument which is an options bag

DH: Seems like predicting the future in a possibly fallable way

DE: Concretely, a hash for SRI or a nonce for CORS may take this second argument position

DH: In the past, implementations which gave an interpretation for the second argument for eval, and this poisoned the well so we couldn't add our own meaning for a second argument.

WH: If we don't support spread now, we can always extend the syntax compatibly in the future.

AWB: My concern is teaching and learnability. Anyway, the precedence issue seems like the fatal thing that makes DD's proposal the winner

JHD: People would only run into this if an error occurs and it's hard to explain

DH: However, the browser error messages may not be great. I don't want to have the mixed static/dynamic enforcement.

KCD: I'm sure people will teach that import is a function, FWIW

KG: But that ship has sailed; it will not be possible to treat it as a value.

JHD: People will accept this limitation

AWB: It'll be unfortunate if people teaching have to talk about how things don't all work the same, and we really muddy the issues about what function values are.

JHD: There's already a list of things

DD: Membrane penetration issue https://github.com/tc39/proposal-dynamic-import/issues/26 : MM said he would not block Stage 3, as he is unable to find an attack

AWB: If you have a membrane, importing a module dynamically could introduce a side-channel because someone outside the membrane and inside importing the same module, any mutable state exposed (e.g., exported function that you can attach properties to) can be used to move information across the membrane

DD: Mark already has a pre-compiler. And this isn't any worse than manipulating the DOM with [script type=module]. Mark's system depends on restricting eval and parsing and transforming the code there. So it seems like there's no reason to hold things up.

DD: https://github.com/tc39/proposal-dynamic-import/issues/27 "revised proposal still violates run-to-completion execution semantics". The spec mechanics give host environments the ability to violate run-to-completion semantics by calling back into ES when it completes.

AWB: Abstract operations aren't there to say, hosts can call them at any time and destroy all the invariants.

DD: We don't have spec mechanics for any of that right now.

AWB: Hosts don't just use the spec as an API, they extend it

BE: We don't want to monkey-patch the spec

DD: The Web host embedding environment calls Object.prototype.toString() all over the place, and we don't have anything explicitly in ES prohibiting it from being called in the wrong place. This seems like the same problem.

AWB: "Either immediately or at some future time"

DD: This is required for Node's ability to integrate require() with ES modules well. That's what the "immediately or" part is for; we need it for Node integration.

DE: Could we separate advancing this proposal from getting the job queue mechanism in order? We seem to be in agreement on all the substantial issues here, and the job mechanism was already present.

DD: I'm not comfortable with advancing this with broken semantics>

AWB: Let's start by using the mechanisms that are there, and use them, or come up with new mechanisms and use those, rather than this vague prose?

DE: Let's not be so insistent on one form or the other. We have other forms which are unimplementable, like the lack of describing resource restrictions.

BE: If we ignore feedback like Domenic's and implementers ignore the spec text, we risk the actual spec being a dead letter.

YK: We just need to say that the jobs happen separately in order, with run-to-completion.

BT: I want to avoid spending a lot of time writing spec text for the job queue mechanics, when we could instead use general prose which preserves the run-to-completion semantics. This would be in accordance with Domenic's PR https://github.com/tc39/ecma262/pull/735

DH: It may be very important to Node to do this synchronously (as Domenic was attempting to do, but which AWB's semantics object to)

DE: Could we decouple this into another proposal?

YK: Interoperability concern: top-level evaluation in modules imported in Node may see the side effects synchronously.

DH: Maybe Node could delay things to a new turn, but we need to talk to them. Also, it violates expectations to have something that returns a Promise execute everything immediately.

YK: Node will still have require; people can still use it if they want synchronous.

AK: Is the major problem here that we don't have Node folks here?

DH: Yes

DD: Seems like it should be possible to move forward to remove the synchronous possibility, and then have the discussion with Node and work on patching the whole system, as part of Caridy's proposal which patches the module system all over.

JHD: I don't understand why this is a problem for Node. You could begin the require call later, when called from Node, so it should be possible to be always asynchronous. Stage 3 seems early to constrain these things; seems like this is about implementer feedback.

AWB: My understanding is that Stage 3 means we have really decided on semantics. Among ourselves, we can decide that it should be asynchronous.

JHD: You can be synchronous or asynchronous without violating run to completion. I would predict that Node implementation feedback won't require synchronous, and Stage 3 is where we get their feedback.

DH: I am not OK with synchronous semantics without them being in the room to explore the options.

AR: I don't understand the discomfort with getting implementation feedback. Can't we have the conversation with them?

JHD: Bradley Farias can call in tomorrow.

#### Conclusion/Resolution

- Stick with import()'s function-like form, with no spread, no commas, just an assignment expression; can't be extended with extra arguments (Chapter 16) https://github.com/tc39/proposal-dynamic-import/issues/23#issuecomment-263742551
- Open issues which block Stage 3:
    - Interoperability with Node if modules execute synchronously
    - Spec mechanics for ensuring that we are preserving run-to-completion if we allow synchronous execution in Node, asynchronous execution in the browser.
- To resume with a call from Bradley Farias.
