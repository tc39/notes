# July 25, 2017 Meeting Notes
-----

Adam Klein (AK), Allen Wirfs-Brock (AWB), Andrew Burgese (ABE),Andrew Paprocki (API), Ben Newman (BN), Benoit Girard (BGD), Bradley Farias (BFS), Brendan Eich (BE), Brian Terlson (BT), Caridy Patiño (CP), Chip Morningstar (CM), Chris Hyle (CHE), Claude Pache (CPE), Dave Herman (DH), David Teller (DTL), David Turissini (DTI), Dean Tribble (DT), Diego Ferreiro Val (DFV), Domenic Denicola (DD), Gabriel Isenberg (GI), István Sebestyén (IS), Jeff Morrison (JM), John-David Dalton (JDD), Jonathan Keslin (JKN), Jordan Harband (JHD), Jorge Lopez (JEL), Kent C. Dodds (KCD), Kevin Gibbons (KG), Kevin Venkiteswaran (KVN), Leo Balter (LEO), Maggie Pint (MPT), Mariko Kosaka (MKA), Mark S. Miller (MM), Michael Ficarra (MF), Michael Saboff (MLS), Nathan Hammond (NHD), Patrick Soquet (PST), Peter Hoddie (PHE), Pierre-Marie Dartus (PMD), Rex Jaeschke (RJE), Rob Palmer (RPR), Ron Buckton (RBN), Sam Goto (SGO), Sebastian Markbåge (SM), Shu-yu Guo (SYG), Vladan Djeric (VDC), Waldemar Horwat (WH), Yehuda Katz (YK),

-----

## Welcome

IS: Introduced Rex Jaeschke.

IS: ECMA Executive Committee agreed to trying the Code of Conduct in TC39 on an experimental basis (that's typical of new ECMA policies and has happened with things like the TC39 RF patent policy; if the experiment works, they become permanent after a while).

IS: Presented ECMA award to Caridy Patiño. Congratulations!

RJE: Presented his background, has worked on C# spec, PHP spec, involved with language specs for 20 years, here to observe at first and see what involvement may be useful in the future.


## Adoption of the agenda

## Approval of the minutes from last meeting

LEO: Any objections to adopting the agenda?

MLS: Question about three related 60-minute slots for class fields-related proposals. Why don't the proposers coordinate a consistent story in advance?

YK: We did.

(Debate about length of time slot)

MLS: High-order concern was divergence among the proposals

YK: Tomorrow will present a 15-minute overview

MLS: My concern has been addressed.

KG/LEO: Can we adopt the agenda anyway?

IS: 15 minutes for ECMA GA administration and status report tomorrow.

LEO: Adopting the minutes from the last meeting?

#### Conclusion/Resolution

- Adopted agenda
- Approved minutes


## 6. ECMA-262 Status Updates

(Brian Terlson)

BT: (Describes his recent work on the spec)

BT: Planning to merge https://github.com/tc39/ecma262/pull/916 soon.

BT: Plenty of stuff to give feedback on


## 7. ECMA-402 Status Updates

(Caridy Patiño)

CP: Small editorial changes, and hourCycle option for DateTimeFormat to replace hour12.

DE, CP: Implementations close to shipping in two engines, which could be included in ECMA-402-2018: NumberFormat.formatToParts (Stage 3), PluralRules (stage 3), both waiting for two implementations and almost there

DE: There are two other features which may reach 2018, which have presentations today, Intl.RelativeTimeFormat and Intl.Segmenter, which are less far along


## 8. Test262 Status Updates

### 8.i Follow up: Use the default license file for tests files

LEO: Now using a default license so test files don't have to contain copyright notice. Ecma is fine with using a root license file.

AWB: Does the contributor agreement change the ownership of the original copyright?

LEO: You can still specify the author of each test.

YK: Copyright belongs to both the author and contributors?

MP: Microsoft's CLA transfers ownership of copyright.

AWB: Ours doesn't do that, though.

DT: Add something to the pull request template prompting the contributor to address licensing?

IS: I think I understand the problem, and Ecma will look into solutions that are acceptable. I will report in the next meeting.

LEO: Would appreciate legal feedback, e.g. from Brian Terlson.

IS: Please write down your proposal and Ecma will review it.

LEO: Please reach out to me by this weekend if you're interested in being involved.

### 8.ii Using Frontmatter tags that matter

LEO: https://github.com/tc39/test262/blob/master/features.txt defines features that can be used to filter or group tests.

MM: Is this for semantic purposes, or just organization?

LEO: Organization, and also to avoid running tests you expect to fail, and to skip unrelated tests.

LEO: Bocoup is looking for more contributors to Test262!

KG: I'm working with projects like Babel (and other projects that parse/process ECMAScript) to integrate Test262.

LEO: Would love to have a compatibility table that ensures features are fully implemented, not just that the API seems to exist (e.g. typeof Map === "function").

AWB: When Test262 was started, the original understanding was there wouldn't be any comparison of engines/browsers.

LEO: The compatibility table is being done by Bocoup. We don't intend to only compare, but provide a good compatibility perspective as WPT does.

MM: Feelings may have changed, since more browsers pass many more of the tests now.


## Note taking

BT: Make sure to include the proper consensus/resolution in the notes; we had an error there last time

RW: You have a full week to review the notes before they are published

DH: There's a technical problem with Etherpad where it won't let too many people be on at once (which is the best time to review the notes)

BT: Suggestions for a better tool?

DH: Google Docs?

?: Google Docs have a similar problem with lots of folks accessing them simultaneously

DE: IRC?

RW: (object to IRC, on grounds: I don't want to have to do the work of making IRC logs markdown friendly. Impossible to record code examples that change over a discussion)

LEO: Perhaps every champion should review the discussion about their own presentation.

JHD: Seems like a good contract!

#### Conclusion/Resolution

- No IRC
- Champions review your discussions


## Agenda item deadline

LEO: It would be good to add items to the agenda 10 days prior to the meeting. This is not always happening; we do not have strict process on this. I'd kindly ask people to add the agenda items ahead of time. I plan to notify people 10 days ahead of time to ask them to add their items.

YK: Could have an agenda section for last-minute additions, in case there's time to get to them (lower priority).

AWB: The important thing is for proposals which want to advance to be given ahead of time, so that people have time to give input.

BT: I generally agree; must be true for Stage 2 and above. But Stage 0->1? That just means, we should investigate the problem.

AWB: OK with not requiring 10 days for 0->1, probably.

MM: People who are present in the room should be able to hear 0->1 proposals.

BT: Anecdotally, all of the stage-0 proposals I've made have been in the 2-week ramp up to a TC39 meeting, so I agree 0->1 should have lighter documentation requirements.

DE: Even for a 0->1 transition, if you're in a larger organization, you'll be able to give more useful feedback if you have the agenda item further in advance.


## 10.ii Vision Thing

(Chip Morningstar)

TODO: link to slides

CM: We (TC39) have a love / hate relationship with JS.. Our Prime Directive is "Don't break the web". Fixes can break crappy software, which breaks the web. Opinion is that this crappy software is an obstacle to innovation. Our current tool is Compartmentalization. Limit the scope of changes to avoid interference. Examples from past / current work. Lexical scoping, modules, realms and frozen realms. These are "Islands of Sanity". Many are asking for JavaScript to morph into language XXX. "JavaScript should be more like JavaScript"   Quote from Tony Hoare - "Inside every large program is a small program struggling to get out."

WH: It's easier to compartmentalize syntax features, like "use strict" or modules do. What about semantic quirks, e.g. if you want to forbid `__proto__`?

CM: Frozen realms allow bringing in two separate pieces of SW and limiting there linking to a small surface area

BFS: Are you proposing more compartments like "use strict"?

CM: We learned from strict mode that if we continued that model it would be a recipe for chaos.
CM: Experimenting with new compartments needs to be independent from the language specification process, ideally.

DH: Is the cure (compartmentalization or dialects) not worse than the disease? Ecosystem fragmentation? I'm fine with user-land experimentation, transpilers. Not so much with new modes for the JS engine to support.

CM: My target is it ought to be possible to take any random crappy software, load it, run it and nothing bad happens.

DH: Maybe people would like to treat certain features as if they didn't exist.

CM: Individual companies do self-censor themselves with linters and compan, etc.

CM: Programmers think about taking out certain features and that makes things better. While taking out other things make things worse.

DH: (BN: Not sure I caught this accurately) Want to avoid mandating fragmentation at the engine level.

CM: It may be the case that users can try out things that are actually "dangerous", but with realms and the like, they can try this in a safe way.

AWB: I take it by compartmentalization you mean true isolation, a la browser tabs/workers. Totally isolated except for some communications channel? Isn't that essentially what an operating system gives you? Do we still have to think of the isolated things as using the same language, then?

CM: I think there is something there to what your are saying. There are some things that JS does that is different to the way other software works,  e.g. loaded immediately before use, or different set of services.

BN: Need to get the communications channel right between the compartments. WASM already has an import mechanism of its own, not exactly the same as ES modules. Should we standardize this?

BFS: That may not be within our scope as TC39.

MLS: Browsers are already basically OSes in that there is JS, WASM, Workers, memory protection, scheduling, thread, ...

MLS: Multiple standards bodies and engine implementors are all standardizing JS and the browser environment. Experiments become de facto standards. But everyone's hoping for eventual convergence/standardization.

MM: It goes back to the notion of the good parts vs the bad parts and being conscious about each. They takes judgement.

CM: There are lots of little sharp edges and corners inadvertently added that would be good to take out.

DH: This question of other languages compiling to the platform...

CM: I'm not talking about that.

AWB: Is your min point that there is JavaScript and JavaScript prime and we can try things out and expand that way?

CM: If we're successful in creating an island that is sounder and more successful, that compartment should win, and others should fade away.

AWB: Sounds kind of like the world I stepped into with ES4.

SYG: It seems that to avoid ecosystem problems is that there needs to be tighter integration with other standard efforts.

CM: We do have members that are involved in other efforts, e.g. WASM.

SYG: TC39 is good to get diverse stack holders to come to the table.




## 11.i.a. Intl.Segmenter for Stage 3

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-intl-segmenter)
- [slides](https://docs.google.com/presentation/d/1KC-qBVqsUdTiePWmSextuMGVIsUa3Tb9EOcVNIj8eOA/edit#slide=id.p)

DE: Main change from last meeting (May 2017): word type boundaries were previously specified to have 5-6 types, now cut down to two.

DH: How often have we shipped something under-specified, and implementations actually changed over time?

DE: Time zone changes are very common.

BT: Not much has changed since last meeting except that I found out Windows is shipping with ICU, and Chakra core will use it.

BT: Chakra includes bidi markers in en-us dates resulting in compatibility surprises for those expecting ICU behavior, which includes those only in RTL contexts.

BT: I still think we're walking into a situation where ICU is the only reasonable choice for implementations, in reality. Hard to make changes to the specification that disagree with ICU.

YK: Is the problem that the spec is well-specified but too coupled to ICU, or that the spec leaves gaps that are de facto standardized by whatever ICU does?

BT: A little bit of both.

DE: James Taylor looked into more officially standardizing on ICU, and we agreed: it's good for the spec to reflect all the properties we expect from the database, and we should document more of the things that are necessary for compatibility, without just saying "refer to the current version of ICU."

BT: The only reason we have compatibility data is because we have a non-ICU implementation, and we're losing that. We won't really know what the web depends on, unless someone (e.g. Microsoft?) tries to use something other than ICU.

CP: segmenter is very different from formatting a date. it is rare to compare a formatted date, usually in tests, while segment will probably be about algos in your code.

AWB: Just had an epiphany: we should keep a rule of thumb that things that go in ECMA-262 cannot have dependencies on ICU or other equivalent datasets.

DD: The ICU folks aren't exactly writing a spec, but they are trying to create a reference implementation through their code, so it has some of the value of a spec, so we could consider treating it that way?

BT: That's what the discussion of a "normative reference" to ICU was about in the last meeting.

DE: That's unfriendly to alternate implementations.

DD: If the ICU folks wrote an ECMA-262-style specification, would we be more willing to reference it normatively?

BT: How much leeway do we want to give these implementations? Alternate implementations are good, but the web reality will probably select one implementation.

DE: So should we keep this at stage 2?

BT: I don't want to hold this proposal back, since the Intl API is important to me.

DE: Need to think about how to strengthen the specification we write, so that it specifies more aspects of implementations.

BT: We may just not learn about what things need to be specified if we have only one implementation.

#### Conclusion/Resolution

- No resolution; or, in other words, leave the proposal at stage 2.


## 9.iv.a. Cancellation

(Ron Buckton)

- [slides](https://tc39.es/proposal-cancellation/CancellationPrimitives-tc39.pptx)
- [proposal](https://github.com/tc39/proposal-cancellation#readme)

RBN: Cancellation is for all environments, web, Node, IOT. We also have to work out the interaction with the WHATWG cancellation controller proposal

DD: To be clear, the WHATWG thing is a standard, not a proposal.

RBN: Cancellation separates source and observation. Asynchronous observation can be used for some things, other things want synchronous notification

WH: By "synchronous" you mean, asking if I am cancelled?

RBN: Yes.

RBN: There also needs to be notification when an action completes, so that the cancellation response datastructures can be brought up

MM: You have a function that emits a token that's cancelled if any of the input tokens is cancelled. Why not also have one that does a logical-AND instead of a logical-OR?

DT: We haven't had a need for it yet.

WH: Imagine a library combining requests from multiple customers that wants to cancel itself only if all customers cancel.

DT: Ah, right. We had a need for that as well and implemented it.

MM: Concerned whether cancelation status is a property of the activity, or a property of the cancellation token. Has implications for terminology like token.cancellationRequested and token.canBeCancelled.

JHD: I'm wondering if the word canceling is the right word since it seems that we have conflicting naming semantics.

DD: Lets postpone the discussion until we reach Stage 1

DD: Chrome is concerned about this proposal's API not being compatible with [AbortSignal and AbortController](https://dom.spec.whatwg.org/#aborting-ongoing-activities).

MP: Could we reduce the surface area of this API to make it more palatable?

DD: Whatever cancellation/abort API TC39 produces, it must be compatible with https://dom.spec.whatwg.org/#interface-abortcontroller, since Chrome and Firefox are shipping that soon. The requirements are:

- Any code written against the existing `AbortSignal`/`AbortController` API must not break or change semantics. Anything produced by TC39 must be compatibly layered on top.
- We are not interested in shipping two separate aborting mechanisms (e.g., `AbortController` for the web platform plus a TC39-specific `CancellationToken`).
- We must reuse the same eventing mechanism as the rest of the platform: `EventTarget`
- We must be extensible with other events, for other signals we plan to add to fetch (e.g. progress)
- We must be extensible with other controls, for other controls we plan to add to fetch (e.g. changing priority)
- We should reuse the exception type used by other aborts on the web platform, i.e. `DOMException` "`AbortError`". This could potentially be changed if it proves to be web-compatible (e.g., perhaps another exception with `.name === "AbortError"`) by the time TC39 gets to stage 3.

YK: Ember has a cancelation framework, and the conclusion we drew is that we can't use async as is, we need to use generators. Its concerning that we couldn figure out how to make people understand async.

AWB: The criteria for stage 1 are just that people think JavaScript needs some sort of cancellation mechanism, not that it be strictly compatible with a certain set of requirements.

DD: We are not interested in exploring the general space of cancellation mechanisms. We are interested in exploring the space of cancellation mechanisms compatible with AbortSignal/AbortController.

AWB: Is AbortController applicable to platforms other than the web/DOM?

DD: Yes, we have a Node implementation.

RBN: I don't feel that the `DOMException` requirement is a blocker. If you are able to observe the signal, you can observe whatever you want.

RBN: Might be a way forward that does not require convergence between AbortController and CancellationToken based on symbol to act as an interop layer.

DD: We are not interested in having two different classes, one pushed by DOM and one by TC39, that do the same thing, even if they are convertible between each other.

DT: Is there a write up of the gap between between the two approaches, are they compatible enough (architecturally speaking)? If is reasonable to explore both directions?

RBN: The only gross incompatibility between the two APIs is the AbortController requirement of EventTarget as the base class.

DD: In general, we do not stand in the way of this proposal proceeding if it can meet the above requirements. For example, in earlier discussion with Ron, he mentioned that we could have a host-specific inheritance chain and exception type, and that he'd be amenable to changing the names and surface APIs.

YK: I would object to a host-specific inheritance chain.

BFS: I would object to a web compatible EventTarget-based API, since Node's abstraction is EventEmitter.

BT: Cancelation is something that is very important, and while this proposal is just API, I imagine that ECMA will grow to support other async operations that needs cancelation tokens. How do we make it interoperable, I don't know, but we should  pursue looking for a solution and solve, regardless of the host.
In some fashion, TC39 must support a cancellation primitive, since our async APIs are only going to grow (e.g. dynamic import). If we don't want to change the AbortController API, then TC39 needs to bring the AbortController API into this standards process. I worry that we're leading with the browser and not making sure this is a primitive that works with different host environments.

DD: I'm not convince that we will be (Ecma) specifying asynchronous operations. For example, import() is not asynchronous in all hosts, and cannot be canceled in all hosts, so it would be a mistake to tie it to a host-independent cancelation mechanism. I also disagree that we (TC39) have to specify every API that our specification depends on.

AWB: TC39 has the charter to look at uses of ECMAScript across other communities and standards bodies, so this should be our concern.

MM: Its a refactoring issue.

YK: Ember does not want to use async function, and this proposal would not improve those ergonomics.

DD: An "investigate cancelation" proposal would be more acceptable than than this specific solution, as a Stage1 proposal.

YK: This particular proposal seems to be going to a death end.

CM: Clearly we have cross-platform concerns that plausibly affect what WHATWG decides to standardize. But saying that just because you've done some work (e.g. AbortController) already, then other proposals should be blocked from stage 1, sounds like "my way or the highway."

DD: That's not at all what I was saying. We're happy to collaborate on designing abort primitives, as long as there are no breaking changes to the existing standard.

BE: How many browsers implement this?

BT: Zero (but two are implementing)

YK: (to BFS) Would you object to add EventTarget API?

BFS: Node OK with the EventTarget API but not the exact .prototype inheritance chain.

BT: It seems like a red flag that AbortController (extending EventTarget) may not necessarily be compatible with Node.

DD: This proposal (CancellationToken) is not compatible with the one in the web platform.

AWB: It feels that we need a champions group to explore the cancellation proposal with different perspectives. Arguably the same thing for Events.

MM: When we introduced promises, we had the same problems with interoperability and existing libraries, but we were able to standardize the "Promises A+" subset, and allowed any object with a .then method to act as a Promise, and it worked beautifully (I think we called this "assimilation"). I think it's worth investigating whether we could achieve interop by taking a lesson from Promise assimilation, rather than requiring things like `instanceof EventTarget`. I'm being deliberately vague because I'm not sure this will work out.

RBN: What I can summarize with:

- Proposal to investigate cancellations API that is compatible across platforms.
- Investigate syntactic additions to the language that can help achieve this (such as Promises and async).


#### Conclusion/Resolution

- Stage 1 effort to investigate cancellation among the champions may proceed.
- Champions:
- Yehuda Katz (YK)
- Brian Terlson (BT)
- Ron Buckton (RBN)
- Domenic Denicola (DD)
- Bradley Farias (BFS)
- Dean Tribble (DT)


## 10.iii Expanding Vision for TC39

(Leo Balter)

LEO: (Presents vision talk)

LEO: (closes the vision talk with suggestions)

- Establish a public meta repo on GitHub for open and general discussions.
- Recognize ECMAScript as a living standard, refer to the [latest draft](https://tc39.es/ECMA-262) and skip the year or edition numbers.

(the suggestions are not necessarily being applied to TC39, this is an async work that still requires further discussion)

## 11.ii.a. Function.prototype.toString looking for stage 4

(Michael Ficarra)

- http://kangax.github.io/compat-table/esnext/#test-Function.prototype.toString_revision

MF: (displays compatibility table showing that Firefox and Chrome are passing some/most F.p.toString tests)

AK: Browsers that partially pass the tests didn't necessarily decide to implement the proposal. The proposal captured what browsers were doing, and so some browsers are passing most tests. Not sure that counts as "in-the-field experience." I'm working on a deliberate implementation of the proposal this quarter.

MF: I showed this to demonstrate that there are no implementation difficulties.

AWB: The purpose of stage 3 is to get feedback from implementation and usage.

BT: I would like to see two full-green columns before stage 4, though I'm curious why Edge is not passing more of the tests. We haven't gotten any bugs as a result of implementing this spec, though.

PHE: Source code typically doesn't make it onto embedded devices (although neither does the parser).

MF: I think the benefits of having F.p.toString standardized still remain.

PST: Why would it be a problem to make returning the source code optional? Couldn't you return a string that gives a syntax error? Like `function () { [native code ] }`?

MF: Forward compatibility: can't produce something now that is guaranteed to be a syntax error in the future.

MF: I will bring this proposal back later, when we have alleviated concerns about web compatibility.

AWB: The XS embedded JavaScript implementors are providing legitimate feedback by saying they won't/can't implement this feature.

AK: This proposal has an issue tracker where we can continue detailed discussion.

PHE: Content Security Policies can forbid compiling/eval'ing strings, and this is kind of the inverse: the environment might declare that it can't decompile functions.

JHD: If you're not going to implement the feature at all, what does it matter what the spec for it says?

PST: I would rather it was configurable than for XS to refuse to implement something required.

PHE: I would have no problem moving the sentence that requires F.p.toString to implement this proposal to Annex B (web compatibility).


#### Conclusion/Resolution

- Wait for intentional implementation feedback, not just compatibility data.
- Make sure to talk with XS implementors, on the issue tracker for this proposal.



## 11.ii.b. Symbol.prototype.description

(Michael Ficarra)

- [proposal](https://tc39.es/proposal-Symbol-description/)

MF: Proposal to put a "description" getter on Symbol.prototype that returns `desc` given a symbol created with `Symbol(desc)`

YK: The most common reason is to writing another debugging output. They don't necessary want to write Symbol(...).

??: Its documentation, why woulnd't you want it?

WH: There are at least two ways in the existing spec to get at the description:

- `Symbol.prototype.toString`
- *SetFunctionName*

...They differ in their treatment of undefined descriptions. `Symbol.prototype.toString` treats it as though it were an empty description, while *SetFunctionName* distinguishes it. Do we want to distinguish between undefined and empty string?

?: String slicing Object.prototype.toString.call(symbol) gets undefined/"" names wrong.

BN: It feels legitimate to support cases like this.

AWB: Feels like a footgun.

MLS: Isn't this only a stage 0->1 proposal? Sounds like the committee is interested in discussing it!


#### Conclusion/Resolution

- Stage 1, committee will continue entertaining Symbol.prototype.description, or some means of getting the Symbol description more easily.


## 11.ii.c. Promise.prototype.finally seeking stage 3

(Jordan Harband)

- [proposal](https://github.com/tc39/proposal-promise-finally/)

JHD: I'm hoping to advance it to Stage 3

#### Conclusion/Resolution

- Stage 3 acceptance


## 11.ii.d. Intl.RelativeTimeFormat for Stage 2

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-intl-relative-time)
- [slides](https://docs.google.com/presentation/d/1QCum8K8XRGhjh94a2Gp2bhRmhbSnJUbhASsQm54tp8I/edit#slide=id.g248f03fd42_0_6)

MPT: (a maintainer of moment.js): Moment reviewed the proposal and we are generally happy with this.

DE: As with most polyfills, this proposal will be most useful once all clients have it, and no polyfill is necessary.

MPT: I have a slight concern around the durations. I think `rtf.format(-1, "day")` should be plural: `rtf.format(-1, "days")`. In the temporal proposal we are using plural, so both APIs will be consistent.

DE: Great idea, I'll make that change.

??: How you come up with the three styles "long, short, narrow"

DE: Coming from CLDR and exposed to ICU. We are looking to exposing more of those forms.

??:  From an Apple's internal perspective: "short",  "medium", "long", "full".

CP: We are open to change them.

AWB: Seem that those are things that we can flush out  in Stage 2


#### Conclusion/Resolution

- Stage 2 acceptance
- Short/medium/long/narrow terminology can be discussed in an issue thread during Stage 2
