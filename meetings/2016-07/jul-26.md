# July 26, 2016 Meeting Notes
-----

Brian Terlson (BT), Michael Ficarra (MF), Jordan Harband (JHD), Waldemar Horwat (WH), Tim Disney (TD), Michael Saboff (MLS), Chip Morningstar (CM), Daniel Ehrenberg (DE), Leo Balter (LEO), Yehuda Katz (YK), Jafar Husain (JH), István Sebestyén (IS), John Neumann (JN), Domenic Denicola (DD), Rick Waldron (RW), Stefan Penner (SP), Jonathan Sampson (JSN), Caridy Patiño (CP), Sam Tobin-Hochstadt (STH), John Buchanan (JB), Kevin Gibbons (KG), Lars Hansen (LHN), Peter Jensen (PJ), Tom Care (TC), Dave Herman (DH), Bradley Farias (BFS), Kris Gray (KGY), Adam Klein (AK), Dean Tribble (DT), Eric Faust (EFT), Jeff Morrison (JM), Sebastian Markbåge (SM), Saam Barati (SBI), Kris Gray (KGY), John-David Dalton (JDD), Ben Newman (BN)

-----

## Welcome


JN: (agenda)

- https://github.com/tc39/agendas/blob/master/2016/07.md

IS: (wishes to determine a log.... I am not sure I understand what this means... :-))

DE: We could go through the agenda and appoint reviewers for each topic

DD: I think we should appoint note-takers at the beginning of this meeting

YK: I think we should appoint note-takers as we start each topic

RW: If we have different note-takers, they might not follow the right format, making my job of cleaning up the notes harder

DE: Let's defer to Brian when he gets back

IS: Different Ecma groups do different things; there is no single solution. Some e.g. only record the subject and outcome of the discussion, but not the actual discussion itself. This has to be decided by the TC. Anyway, with the current practice, which is very similar what the W3C does, we need the support of the group. e.g. Ecma can not hire any pay for a professional technical notetaker, that has to be organized / fulfilled by TC39 members.

JN: Looks like some things are timeboxed

BT: Does anyone want to volunteer to take notes the whole day?

RW: Me

AWB: (punt on addressing this now?)

BT: Let's go with Rick taking notes for now, since he volunteered, but long-term we'll go item by item



#### Conclusion/Resolution

- Moving on, further discussion to be on github as before this meeting. Interested members are encouraged to participate there directly.

## 3 Agenda Adoption

- Approved

## 4 May Minutes Approval

- Approved

JN: Agenda?

(Discussion re: backing documents not present for a handful of agenda items, should we start requiring these?)

WH: I'm fine with occasional items not having backing materials — there are situations where that's appropriate — as long as they're relatively rare and not looking to advance.

WH: ECMA has a global policy (we all agreed to) that documents up for significant decisions shall be provided 2-3 weeks in advance. I'd interpret this as applying to proposals looking to advance in TC39.

IS: It's 3 weeks. This is e.g. to formally move forward or approve a TC39 draft specification. But for things for information, to start a discussion on new items, not to strive for a formal decision anything until the meeting is allowed. But of course it is encouraged to submit and post on Github as soon as possible.

JN: Approval of minutes?


#### Conclusion/Resolution

- Agenda Adopted
- May Minutes approved
- Add item to discuss the agenda item locking.



## 5. Report from the Ecma Secretariat

IS: Submitted the ECMAScript Suite Standard (approved by the GA as Ecma 414) to ISO/IEC JTC1 for fast-track. This should enable not to submit anymore ECMA-262 and ECMA-402, etc. to JTC1 separately anymore. This would allow to solve the speed difference problem and the RF patent policy problem. However, JTC1 editors wanted to have more text in the standard and not only the list of normative and informative references. IS said that he will work with Allen Wirfs-Brock on that. If possible we try to beed up ECMA-414 until the September 2016 meeting that isót can be approved as new Edition in the Decemmber 2016 GA. If the plan is delayed we finish it by June 2017.

- Link IETF spec to Ecma 404 (that was already fast tracked to ISO actually before the May 2016 TC39 meeting). On that one JTC1 has not given any feedback yet. So we guess that is on track.
- On the issue we are in close contacts with the IETF. When we get the IETF spec number (when available) we will make a 2nd Edition of ECMA-404 and fast track that edition to JTC1. With that we want to link the Ecma Standrad with the IETF specification that they should be in full harmony.
- Awards: BT and RW received ECMA awards for ECMA-262 7 th Edition and ECMA-402 (plus the many notetaking). Congratulations!
- New Executive Committee, made from a combination of ECMA management and the former Coordinating Committee.
  - A change from the past is that up to two ECMA members from categories other than ordinary members may now be elected into the the Executive Committee. Nominations for that can come from anybody, but in the end the December GA will vote on the nominations. The membership in the Executive Committee is always one year, but with the possibility of reelection.
  - All members can now participate in the General Assembly and take actively part in the discussions, not just ordinary members. However, only ordinary members can vote (that is unchanged).
  - IS also noted that TC39 is now by far the largest Ecma Group and it has grown to a size where he feels that we have to organize our structure and work better, otherwise at the face-to-face meetings there might be disappointment by some who prepare for a topic for discussion and presentation but in the shortness of time the subject is not discussed properly. Discussion on that to be continued by those who are interested on GitHub.
  - What IS forgot to tell, that actually with the publication of ECMAScript 2016 and ECMA-402 new Edition etc. it would be a good idea to make more PR, e.g. Press Release.


## 8. Test262 Status Update

IS: Technical Report 104 needs to be updated. He added that all specs related to TC39 work are being downloaded very heavily (actually at  least 2/3 of all Ecma downloads are TC39 related). The HTML version of ECMA-262 and ECMA-402 is in addition to it, and compared to full downloads that is even significantly higher.This is actually more than e.g. what is being downloaded from the ISO Shop (of course that is not free of charge...). So automatically also TR-104 gets downloaded rather heavily. But e.g. in TR/104 the URL to the tests does not work. Also the text needs to be updated. It reflects a situation when only ES5 was covered, but  e.g. not ECMA-402.

AWB: Propose updating TR 104 to be descriptive only?

BT: Is this just a readme? Possible get rid of it?

AWB: Just reduce to an abstract description of the content and motivation of Test262


DE: Should ecma site link to draft spec?

AWB: The draft isn't the published standard

(Suggestions to link both, with clear identifiers)

Note IS: I did not say that in the meeting, but In case of TC39 actually we give links to the latest ECMAScript drafts.


#### Conclusion/Resolution

- Bring to reflector for further discussion
- TR104 update (or withdrawal)
- Linking standard and draft?
- It's there, but some want it to be more prominent

Note IS: The TC39 website pages at Ecma have always room for improvement. If anything you want to include just contact Patrick from the Secretariat who maintains the webpages.


## 6. Ecma 262 Status Update

Brian Terlson


BT: 6 months left for ES2017

- Object.values
- Object.entries
- String.prototype.padStart
- String.prototype.padEnd
- RegExp changes to case insensitive flags (https://github.com/tc39/ecma262/pull/525)


AWB: (questions about consolidated changelog that provides complete document of changes from previous edition to present edition)

YK: Make a single place for all published changlogs?

BT: There has never been such a document, isn't Annex B's change listing sufficient?
- Want changelogs in annex?

AWB: Yes

DD: Use links instead of copy/paste?

BT: Links to releases tab?

AWB: Cannot stand alone without github

BT: (has a plan)

...

AWB: Do we have a "focus on 2017 items list"?

BT: No, not yet.

JHD: Benefit of knowing what year a thing will be ready?

BT: Addressing the cross cutting issues, knowing the big picture

AWB: Resolving issues discovered in an implementation

BT: Champions responsible



#### Conclusion/Resolution

- Bring to reflector for further discussion
- Need changelog for each edition
- Discuss form/forum/format




## 7. Ecma 402 Status Update

(Caridy Patiño)


No updates


## 8. Test262 Update Revisit

(Leo Balter)

LEO: Bocoup has just wrapped project delivering coverage for ES2015

- Iterating on feedback from other members
- Moving forward on ES2016 tests
- More work to be done, but need volunteers
- Deprecated Python runner
- Working on Test262 harness that runs from node.js

DE: Work to be done on Test262 presence

- Spoke with Kangax about including Test262 in the compat table sites

LEO: More visibility for Test262

TC: Need help with reviewing contributions

- Promises
- Yield

TC: Barrier to entry quite lower based on the work that's been done in the last year.

SP: (asking about test submission with new features)

BT: Staged features require tests. Known issue: normative changes haven't been blocked by any requirement for tests

RW: Previously, not a lot of contribution, so this wasn't an issue. Now we're seeing more contribution, so it needs to be addressed (this is a concern that we have at Bocoup)

BT: Possibly a requirement to create an issue on Test262?

SP: Block merge?

#### Conclusion/Resolution

- Labels to mark normative changes that need tests
- Work with change author to make tests
- Block on normative changes until they have tests
- Due diligence on both the tests and normative spec changes
- Authors, champions, leads must be satisfied with changes on both repositories
- Include mention of available mentorship for test writing.


## 9.i.a Reintroduce for-in-initializer

(Kevin Gibbons)

Slides: https://docs.google.com/presentation/d/19LVVdCHfokJWQnNvkyu8M2vdpMAz8yIE1wB8yK7hLBR4/edit#slide=id.gc6f980f91_0_0Slides:

KG: V8, SM, JSC implemented and later reverted. Chakra did not implement

- Web breakage happens!

Proposing changes to Annex B

AWB: Annex B are generally items not allowed in strict mode

KG: Not consistent

YK: Can we make illegal in strict mode?

KG: Chrome does

?: JSC does too

AWB, WH: So we should add for-var-in initializers with the old semantics to Annex B, for non-strict mode only.

RW: (brief discussion about strict mode additions: resolved, non-issue)

YK: Does this mean sloppy mode changes are always in annex b?

Generally, no.

#### Conclusion/Resolution

- Add for-var-in initializers with the old semantics to Annex B, for non-strict mode only.
- [ECMA-262/pull/614](https://github.com/tc39/ecma262/pull/614)
- Kevin will write tests for the change, based on the new policy


## 9.i.b Update on Async Iteration

(Domenic Denicola)

(No slides)

DD: Kevin Smith has left the committee; I am taking over as champion. I did not have time to address spec issues, so it is not ready to advance, but they are minor and I will work on it. Who should be Stage 3 reviewers?

#### Conclusion/Resolution

- Reviewers: Bradley Farias, Daniel Ehrenberg

AWB: Going back to the previous topic, Kevin, could you please share a PDF on the notes page, since links rot?


## 9.i.e Trailing commas in functions

(Jeff Morrison)

JM: It's implemented in two browsers (JSC, Edge)

AK: Actually V8 also

BT: Actually we ship it already. Are there Test262 tests?

JM: I thought so. Stage 4?

WH: I don't object to advancing this to stage 4, but I'm sad to see this in the language.

?: Ditto.

(We can't find tests)

#### Conclusion/Resolution

- Stage 4 acceptance
  - pending on writing and merging Test262 tests


## 9.i.f Unify String and Array maximum lengths

(Michael Saboff)

MLS: Unify the length of strings and arrays. Strings are 2^53-1, Arrays are 2^32-1 indexed elements. A few APIs cross over. Really, browsers are all 2^31 or less. I don't care which way we go, but I'd like Strings and Arrays to be unified. Maybe we should delay this a little until we figure out how to make Arrays bigger; I originally proposed reducing everything to 2^32-1

MF: What's the motivation?

MLS: Consistency, so they all use the same type of index.

AWB: There was a lot of thought that went into it. We increased the size of everything that we could — strings, typed arrays — and held off on Arrays for compatibility reasons.

DD: As Michael was saying, in current VMs this isn't a good idea, but maybe in a few years, it could be reasonable.

AWB: And Arrays can be sparse anyway

YK: Seems like a bad idea. Use Maps here instead for spare Arrays, or TypedArrays for big Strings or Arrays. We have TextDecoder in the DOM to deal with TypedArrays that have encoded Strings.

DD: Why not even lower?

AWB: We use 2^53 for basically everything, except for Array length calculation, which maxes out at 2^32-1

DD: It seems like bigger would be better

DE: What was the web compatibility evidence presented in the past?

BE: The motivation [of increasing it] was weak, and no one wanted to jump on the hand grenade.

AWB: Well, we have a motivated implementer here. Maybe Michael should try it out.

MLS: I don't think any browser believes we need more than 2^32 for browsers. However, for servers, it could be an important limit to hit. I don't think this is important for JSC as we are just a browser implementation.

AWB: There's a chicken and egg problem. Someone has to prove the feasibility of it, and you're the only major implementation who has brought it up as a possibility.

MLS: My proposal was to make string lengths smaller.

AWB: We don't want to make string lengths smaller

DD: It would be nice if everything were as big as it could possibly be, but I don't have a problem with making it smaller

AWB: The max size is implementation-dependent

YK: It seems OK to just choose the lowest common denominator size

BFS: It seems like large Arrays or Strings are important for some applications

YK: We can just make those things use TypedArrays. Wouldn't you want to use binary data for such big things?

WH: We'd need to shrink TypedArrays too if we're shrinking strings; otherwise we wouldn't get the consistency that's the whole motivation of this.

EF: If we don't shrink TypedArrays, we wouldn't get a level paying field.

AK: What is the motivation for this change, given that JSC already limits strings to 2^31?

MLS: It's consistency. In regular expressions, for split, we have to do these 53-bit calculations, but really strings are smaller

AWB: For split, we made a change to use ToUint32 rather than ToLength, but we should've made it throw

AK: that's a separate proposal

AWB: It's gotten worse with recent changes

DE: We've hit the timebox limit; Add this to the end of the agenda?

MLS: This isn't a hill for me to die on; i think it's something we should address, but not my #1 priority

#### Conclusion/Resolution

- Not finished; will revisit


## 9.i.h Standardize Date.UTC when called with < 2 arguments

(Brian Terlson)

BT: All implementations except Edge return NaN for Date.UTC for < 2 arguments, but Edge treats those missing arguments as 0.

AWB: What discussion have we had before?

BT: I couldn't find it. As Chakra is the only holdout, and we have no compelling reason, we're willing to return NaN. So I believe we should update the spec text and return NaN, and Chakra will do that.

DT: Is this part of a more general principle?

DD: Actually the spec had a specific cop-out there

BT: OK, consensus on the change?

AK: Are there Test262 tests?

BT: I'll write them! But I'll merge the Chakra PR first

AWB: Why not actually make them optional like Chakra does? Maybe those are good semantics.

YK: We're just standardizing what's there in browsers

DD: Does anyone want to experiment?

BT: We're shipping this already. I'm concerned about interoperability.

YK: NaN is horrible and we should avoid letting it leak out into programs.

DE: We can't generally be in the business of making bad arguments to things return useful values. Date uses NaN all over the place as a way to stand in for something having gone wrong. The Date library is horrible and legacy; our job should be to standardize what's there. The Date.parse presentation will show a significantly worse case than this, but we should standardize it anyway. Given that we have three browsers agreeing, we should just standardize that. I would be OK with standardizing the other behavior.

WH: We shouldn't create a second Date library just to fix this, we should make this one good.

WH: UTC(year) should return the first day of that year, just like UTC(year, month) returns the first day of that month. We know that works because Chakra does it.

AWB: Oh, I see what's going on. This fills in a missing case from the Date overload. Date does something completely different when passed one argument than when it gets two.

BT: Let's pick one of the two existing semantics, not something in between. Oh, wait, it's actually December 31, 1899

DD: that's two-digit year 0, timezone-shifted

DE: Sounds like Chakra's semantics are significantly bad

BT: Let's standardize returning NaN now, and we could revisit it later.

DE: Returning NaN is sorta like throwing an exception, so we could make it return a useful value later.
DE: We are running into the timebox. Do we have consensus on the PR?

WH: No. I think that, barring additional evidence, it would be good for the one-argument case to return the beginning of the year. I'm fine with NaN for the zero-argument case.

AK: What would be the use case for this? is it worth it to ask implementations to make this change? We're making a normative change; there should be some reasonable motivation.

BT: It's a grand compromise

AWB: 1) Interoperability among implementations 2) Usability going forward--what would users expect? This is forward-looking, not backwards-looking.

BT: That seems like a reasonable rational. Are other implementers reluctant to return a useful value for that case?

AK: My point is a little higher-level, that if we are making normative changes, we should have a motivation for it.

AWB: Good design aesthetics would be to revisit what things are, rather than just polling implementations

AK: This is adding to the incompatibility for the future and churn.

BE: It is what it was. I support the status quo, copying Java, returning NaN

MLS: I support returning NaN for less than two arguments, just because of the confusion that Date has 0 arguments, 1 arguments, and then 2 or more is just like Date.UTC

AWB: The Date constructor has an overload for one argument, so it can't treat that as the year and be analogous to Date.UTC for the one-argument case.

#### Conclusion/Resolution

- No consensus on the full change. The zero-argument change is agreed to return NaN, but disagreement about what the one-argument case



## 9.i.d Revisiting NaN

(Daniel Ehrenberg)

https://github.com/tc39/ecma262/issues/635

Slides: https://docs.google.com/presentation/d/1eqimbmVpMZET_5H9NacVkXGP2WNATg8bXWi3Ky2bsGo/edit

DE: (presenting slides)

- Some implementations fit pointers in NaN payloads, so canonicalize
- V8 does not do NaN tagging, so pointers are 32-bits on 32-bit archs
- Extra canonicalization writing into a TypedArray is a perf regression (see slide for link)


Slide: "What does ES2015 day about NaN?"

- The Number Type
"to ECMAScript code, all NaN values are indistinguishable from each other"

- SetValueInBuffer( arrayBuffer, byteIndex, type, value [ , isLittleEndian ] )
"An implementation must always choose the same encoding for each implementation distinguishable NaN value."



DE: ok with: "anytime you use SetValueInBuffer, use whatever you have"

"Why would property writes make a new NaN?"

SetValueInBuffer ( arrayBuffer, byteIndex, type, value [ , isLittleEndian ] )

- V8's FAST_HOLEY_DOUBLE_ARRAY ElementsKind
- Sample code:
```js
let x = new Array(6)
for (let i = 0; i < x.length; i++) x[i] = 0.5
```
- Initially "filled with holes" (missing properties), then entries are added
V8 canonicalizes NaNs when setting elements into such an array so it can have a distinct "hole" NaN value

WH: This is an instance of the general problem that implementations will sometimes do NaN-boxing and sometimes not within the same program, depending on code and data structure optimizations.

DH: Easiest solution: maximally non-deterministic: allowed to non-deterministically change bit pattern
Problem: many places possible to predict the bit pattern. Can convey information, want to preserve that preciseness.

MM: Uncontrolled non-determinism of NaN bit pattern, depends on unspecified nullable

(discussion re: intentionally evil implementations)

WH: My view is that what NaN bit pattern you get should be unspecified. I understand MM's concern and wouldn't want them to be evilly unspecified, although I'm not sure if there is a reasonable way of expressing that.

* timebox ran out, discussion continued *

DH: expectations:

- want implementation flexibility, use cases for changing bit patterns
- frozen properties, should not be able to reliably observe changes


DH:

- NaNs carry around bit pattern,
- specific places can scramble
- specific places preserve


EFT: Over the time box, no new points made

MM: Don't understand the optimization in V8

AK: I think this needs to be discuss offline?

DH: (taking issue with time box)

DH: Some predictable behavior that has changed over the years and some implementations are doing different things, new use cases.

#### Conclusion/Resolution

- Allen, Mark, Dave, Waldemar, Dan to have discussion and come back for another time box discussion.


(More discussion re: time box)


## 9.ii.a Object.getOwnPropertyDescriptors: when a Proxy returns an undefined descriptor?

(Jordan Harband)

JHD: Any non-proxy, call built-in op claims foo in object, call Object.getOwnPropertyDescriptor(foo, "prop"), you get that property descriptor. Proxy can lie, which is problematic when passing the returned value from `Object.getOwnPropertyDescriptors(...)`

BT: Side-effecting proxies. If a proxy says "no descriptor for this property", then there is none. Object.getOwnPropertyDescriptors(...) shouldn't be seen as the authority.

- Property should be skipped on the grounds that "it doesn't exist"


MM: once an obj is not observable, ownkeys cannot give an answer that was not previously true

DE: Cait Potter implemented both semantics and there are no noticeable differences.

AWB: No guarantee once you get a descriptor that it remains valid to do something with it in the future - operations are unknown

JHD: The change is: only properties with valid property descriptors are returned.

#### Conclusion/Resolution

- Recommended change approved for merging the PR


AWB: obligated to notify implementors?

JHD: Implementors are aware and following progress



## 9.ii.b Object.enumerable{Keys,Values,Entries}

(Leo Balter & John-David Dalton)

LEO: Discussing https://github.com/leobalter/object-enumerables

JDD: No built-in API that allows getting own and inherited properties

EFT/DD: for loop?

JDD: Want built-in functionality, not syntax

DH: Something more?

JDD: Allows a shim path.

DH: An example?

JDD: (showing an example in lodash)

STH: Can't the shim write the for in loop?

DD: Spec seems to treat objects as maps, but specifically objects and their prototype properties as values in the map

JDD: (further examples, showing: https://github.com/leobalter/object-enumerables#use-cases )

DH: Not impossible to write in library code?

JDD: no, but not the point

STH: Offers shim authors something to coordinate on to fix bugs in older browsers, but not sure we should be in the business of doing so.

YK: It's rare to encounter an enumerable property on the prototype, it happens

- If there _are_ properties on a class prototype that are enumerable

AWB: Effectively creating for-in

YK: Yes

DD: Do we want to further encourage the programming model that these encourage?

MM: (concurring, discussing value of such a feature)

DH: A number of libraries want to use this functionality and it would be nice expose as built-in, but why not define in one library and that's that.

AWB: Back to "inherited, enumerable things". The only definition we have is via for-in

DH: can also crawl the prototype chain

AWB: then have to impose your own rules re: side effects

BE: for-in is bad legacy

"Never invest in the trailing edge"

DD: Adding new features, in new browsers, to fix features in old browsers, is not what we should be doing.

MM: I don't think this is going to get consensus


#### Conclusion/Resolution

- No advance


## 9.ii.c RegExp Unicode Property Escapes

(Brian Terlson, Daniel Ehrenberg, Mathias Bynens)

https://github.com/mathiasbynens/es-regex-unicode-property-escapes

Slides: https://docs.google.com/presentation/d/1o31S9RqDdkoWW2zfPMNIZdPDIp25Rr0-XW0gro_cskk/edit


DE: Expose more unicode data to RegExps

- Properties with values:
`/\p{UnicodePropertyName=UnicodePropertyValue}/`
- Binary properties:
`/\p{LoneUnicodePropertyNameOrValue}/`
- Inverse:
`\P`

Example:

https://i.gyazo.com/0dcfc195d891a36c4b0c04d460cb5d72.png
In text form: https://github.com/mathiasbynens/es-regexp-unicode-property-escapes#illustrative-examples


DE: Have full spec text, implementation in V8, tests for V8 (need to be updated for Test262)

BT: If ok with deviating from what's allowed inside `\u`, then we can overload `\u` instead of `\p`

DD: Are there conflicts with other languages and use of `\u`?

WH: `\u` could be trouble if anyone comes up with classname consisting entirely of characters A-F

DE: I can find out if this is an invariant that will be maintained. If it is, then we should use `\u`, otherwise `\p`. If Unicode advises us _not_ to depend on existing `\u` invariants, then we won't

DE: Stage 2?

MF: Is there a syntax error when type any random character where in `/\p{UnicodePropertyName=UnicodePropertyValue}/`, `/\p{LoneUnicodePropertyNameOrValue}/` ?

DE: No UnicodePropertyName syntactic restrictions in present spec

Addendum by Mathias: a SyntaxError is thrown at runtime in such cases. But yeah, maybe these should trigger early errors instead? No strong opinion here.

AWB: Need to specify the syntax

WH: If we choose to use `\u{}`, then we must make unknown classes (or typos) into early errors because we need typos in hex numbers to be early errors. With `\p{}` we'd have a choice of standardizing on early or runtime errors.


Revisiting String.prototype.normalize specification.

This may need to be "normative optional"? Inclusion of new data tables may be problematic?

Discussion re: ICU data, Unicode data on constrained devices.

RW: When Tessel 2 moves to Node 6, we'll be shipping Node.js compiled with the disable flags, which means normalize is useless, but the additional data isn't included.

AWB: Can define it such that, if the data is not available, the character set is empty

DE: Stage 1?

#### Conclusion/Resolution

- Stage 1 acceptance
- YK wants confirmation about `\u`


## 9.ii.d Async Functions for Stage 4

(Brian Terlson)


BT: no updates, no changes

- Shipping in Edge
- Implementations in V8 and SpiderMonkey

YK: Worried about cancellation?

DD: Cancel token integrate well with async functions

YK: Not at stage 2 with cancellation, hard to be sure that it's compatible

KG: not sure it could change, given widepsread use in transpilation

YK: (concerns with cancellation intuition)

DE: the correct time for this was prior to stage 3

YK: I made these objections then

DE: I'm pretty optimistic about Domenic's cancellation specification

DD: If I had held off on Cancel tokens, this would've made it to stage 4

BT: Off topic.

YK: Certain assumption that one can reasonably assume that an expression that exist can become abrupt

- Have to know that X cannot throw
- Cancellation exists, now X might throw

WH: I'm trying to understand the concerns here. Should this proposal be blocked on the cancellation proposal advancing a few levels?

WH: I hear vague uneasiness about interactions between async functions and cancellations, but need something more concrete to be able to judge the merits.

BT: willing to postpone this until we know more about interaction with cancellation

SP: Can we revisit this after cancellation?

(Discussion, re: some people that object, that are apparently in the room, but aren't speaking)

MM: concerns: === should never throw, typeof should never throw. I don't recall where cancellation would make await throw, where it previously would not throw.

Was

DD:

```js
async function foo() {
    try {
        await f();
        g();
    } catch (e) {
        h();
    }
}
```

might call neither g nor h. But then there are other situations where neither g nor h is called. Use `finally` if you want cleanup code.

DD: Objecting to the third

JHD: If `f` is changed to return `new Promise(() => {})`, then both `g` and `h` will never run now, without cancellation existing - therefore if you expect `g` or `h` to always run, you are simply wrong, and your expectation is invalid.

```js
async function foo() {
    try {
        await f();
        g();
    } catch (e) {
        h();
    }
    i();
}
```

DD: however, currently you can guarantee that either `g` or `h` will always run before `i`, and it's possible with cancellation that this might not hold.

MM: the example here has nothing to do with something that was not abrupt, becoming abrupt
- A new way to be abrupt, in addition to the old way to be abrupt

DH: If from scratch, no issue. The issue is that catch expectations no longer valid.

DD: There is past precedent for moving ahead. We introduced proxies, which created objects that behaved outside the past invariants that code might have relied on. We introduced new typeof types with similar effect.


JHD/EFT: No call site can be defensive against code it didn't write

JHD: In the case of Promises, if you're returning a promise that you didn't create, in a `then`, you can't defend against it, because you can't know if the other promise will ever settle.


(Questions about "Third State")



#### Conclusion/Resolution

Will revisit after discussing cancels more; hopefully reshuffle non-timeboxed agenda items to enable that to happen in this meeting.

## 9.ii.e Math extensions

(Rick Waldron)

RW: There are some nasty npm modules for these sorts of math functions. This comes up in IoT, cool animations, etc. We could add some more functions to the standard library. This stuff happens over and over and over again; typing things into consoles.

YK: leftPad went well

RW: This falls into the leftPad box. This is putting down pavement where a cowpath once was.

RW: Math.constrain: Could be called Math.clamp. Like Uint8ClampedArray. Very straightforward.

RW: Math.map is just scaling x from one range to another

YK: scale is better than map

RW: Scale is my favorite actually; I didn't want to seem biased. fmap is the version where the result is converted to a float32.

DD: Looks like it'll move x to the corresponding point in the 'out' linear range as it was in the 'in' range.

RW: Yes

DD: Why not just use fround composed with it? Is there a hardware operation for this?

RW: No; we can take this or leave it

AWB: Since we're doing multiplies, the fround won't end up commuting with the operations, so this won't get those efficiency advantages. This is specified to do double precision scaling. This is just a nice-to-have.

DH: is every one on the list something that you found in other languages?

RW: Yes, the readme has links to standard library features analogous to these in tons of other languages.

MM: Shouldn't these be in a new built-in module?

RW: I'd love to do that. If between now and 2017 lockout day, I will change the writing for that.

DH: Part of your motivation is that it's trivially accessible from the console, and you can't import from the console.

RW: If it's a built-in standard lib module

DH: From the console, that extra line is a pain, and further, I can't see why we should be inconsistent with the other Math functions that exist. Seems silly to be out of sync with each other.

DT: Built-in modules just in the console?

MM: Seems like adding functions for radians and degrees when they are so trivial is just a waste of time.

DD: I don't feel so strongly about this, but taking conversions for different unit systems takes Math in a totally different direction.

RW: If you look at other languages, they include these conversions for radians/degrees and not other things

STH: And degrees are unitless

DD: They are not natural

CM: But degrees are widespread as a notation

DH: There's a high bar for adding something to the JavaScript standard library, given that our library is rather more limited. We do want to add things that are common enough.

RW: And it's painful to install someone's bad npm library

DH: We make these generic arguments about the benefits of standardizing functions, but we can't standardize all functions in npm. The argument should be, we know what the costs are, we know that we can't do it for everything, so we have to make the argument that these are extraordinarily common for important use cases.

STH: Two other reasons why these functions have a strong claim: Unlike other domains, JavaScript has as reasonably strong Math standard library, for historical reasons, and so programmers expect Math.whatever to be the math standard library in a way that they don't expect for Strings or TCP connections. Second, these are things that are commonly in the standard library of other languages. Yet again, programmers expect, when they look for functions like the ones Rick is proposing, where their counterparts are in other languages.

DD: I agree with these points, but maybe we should group these under "Units" and include time constants, also RAD PER_DEG not "TO"

YK: I agree that time conversions are very common.

RW: I'm asking for stage 1.

JHD: Do we expect to devote time to the problem space?

RW: Single-precision values are important because some datasheets ask for things to a certain precision. You want the rounding to happen in your own code, not implicitly when writing it into the actual register. But really, Math.fmap is not all that important.

WH: I was wondering why we have fmap but not fmax, etc. What does this actually do?

RW: It maps a range

YK: We are interested in this subject; in stage 1 we can look into unit conversions generally

DD: I feel really strongly that it shouldn't be in Math

JHD: We don't have to come to all of these answers in order to get to Stage 1.

RW: As part of Stage 1, I will document why these should go within Math

MF: I want to define a selection criteria for math functions. This seems like a random bag.

RW: I used subjective criteria, for what is the most painful in my everyday programming

DH: Some possible selection criteria: 1) Incredibly high applicability 2) known hardware fastpaths

DE: Or known VM fastpaths, like Object.values

DH: Neither of those has anything to do with whether it's in Math. Domenic makes a good point that some of these don't belong in Math.

WH: I would have expected math library extensions to include common math functions like the gamma function. Why aren't those in here?

RW: That was my long list, but I pared it down. Maybe we should be including a lot of functions from other standard libraries.

AWB: We went through a similar process in ES2015 where we made a big spreadsheet of various languages and functions, and chose what to add to Math based on that

RW: How about looking at Racket and Python

MF: We should look at rather broad datasources, like utility libraries for JS today, a number of different programming languages, etc

DH: We should avoid the slippery slope that, if we do one thing, we do all the things. We should have a high bar

DD: We shouldn't tell the champion that they need to add more than they want; they should be able to put in what they value

AWB: Seems like this request is a valid input.

RW: This is really robotics-driven

WH: Last time, we got bogged down in specifying precision of math functions. How should we avoid that here?

CM: If there are subtleties in the implementation, that's a good reason for standards.

#### Conclusion/Resolution

- Stage 1 acceptance
