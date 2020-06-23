# June 5, 2019 Meeting Notes
-----
István Sebestyén (IS), Valerie Young (VYG), Pieter Ouwerkerk (POK), Noah Tye (NTE), Till Schneidereit (TST), Logan Smyth (LSH), Yulia Startsev (YSV), Ben Coe (BCE), Guy Bedford (GB), Myles Borins (MBS), Domenic Denicola (DD), Jack Steinberg (JBS), Sven Sauleau (SSA), Clark Sampson (CSN), Pedram Emrouznejad (PED), Sergey Rubanov (SRV), Henry Zhu (HZU), Alan Schmitt (AS), Justin Ridgewell (JRL), Patrick Soquet (PST), Peter Hoddie (PHE), Caio Lima (CLA), Daniel Ehrenberg (DE), Anne van Kesteren (AVK), Shu-yu Guo (SYG), Ross Kirsling (RKG), Keith Miller (KM), Mattijs Hoitink (MHK), Michael Saboff (MLS), Guilherme Hermeto (GHO), Rob Palmer (RPR), Philipp Dunkel (PDL), Szabolcs Szabolcsi-Toth (SZT), Nicolò Ribaudo (NRO), Joyee Cheung (JCG), Kevin Gibbons (KG), Aki Rose (AKI), Tierney Cyren (TCN), Amal Hussein (AHN), Julien Gilli (JGI), Sean Larkin (SLN), Sathya Gunasekaran (SGN), Daniel Rosenwasser (DRR), Randy Luecke (RLE), Kat Marchán (KZM), Andrew Paprocki (API), Mark Miller (MM), Joe Sepi (JSI)

Remote:
Brian Terlson (BT), Ron Buckton (RBN), Jordan Harband (JHD), Leo Balter (LEO), Frank Yung-Fong Tang (FYT), Mike Samuel (MSL), Shane Carr (SFC), Jordan Gensler (JGR), Robert Pamely (RPY)
-----

# Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/06.md)

## ECMA-402: Add quarter option
Frank Yung-Fong Tang

[PR](https://github.com/tc39/ecma402/pull/345)
- [slides](https://docs.google.com/presentation/d/131l-GAqhs7SRsjsa2MmOLdou7gr2_Vl_0dTl1MhyTb0)

FYT: 3 PRs depend on each other and are fairly small, no separate proposal and addressing them one by them.

FYT. Int.DateTimeFormat, three different things: adding support for formatting period, dayPeriod and controlling millisecondsdigit..

FYT: Format Quarter, allow datetime format to support a quarter formatting [see slides]

FYT: New type for quarter returned by formatToParts.

MBS: Can we have a consensus with the PR process?

DE: when we're adding features like this that require implementation work, I encourage us to go through something analogous to our (missed) process. Something Frank and I talked about offline. At least one implementation and buy in from another one, ideal 2 implementations and tests before landing. If we came to consensus today there would still be things I'd like to see from a PR. Also want to mention that Jordan asked it to be a stage proposal. As long as we hold real requirements similar, I don't think requiring a formal stage process is not necessarily required.

SFC: Wanted to discuss where do we draw the line between what requires a proposal and what requires a PR. The current change proposed is completely consistent with the way Intl.DateTimeFormat currently works. No new design is being added, so there is no really serious design question. These PRs don't really set any precedent.

SGN: what's the binary size increase?

FYT: This is already included in the data for use with the datetimeformat

SGN: V8 doesn't strip it out?

FYT: No it doesn't

DE: Support it being a PR because it's pretty small and as he says it ties into existing things. Still want to require we have broad support for things in PR. I think we do have buy-in in this case, or at least we can ask for it. Don't want to say that because something is small we don't have the normal proposal staging process.

DE: Can we ask the implementers here what they think about implementing this feature?

MBS: Do we have any implementor have concerns?

FYT: In V8 it's already implemented behind a flag, and I do plan to submit tests to Test262. I do support Dan's position having those requirements.

#### Conclusion/Resolution

- needs to meet stage 4 similar requirements Test262 tests should be merged first

## ECMA-402: add dayPeriod option

Frank Yung-Fong Tang

[PR](https://github.com/tc39/ecma402/pull/346)
- [slides](https://docs.google.com/presentation/d/131l-GAqhs7SRsjsa2MmOLdou7gr2_Vl_0dTl1MhyTb0)

FYT: In the past we can format day in 12 hours system, cldr actually have a concept called [missed, dayPeriod?]. It makes it more readable. Some language you may have four different kinds of periods during the day. In other languages they have only 2 or 3 or 5. And mapping between hours and period can be different.

FYT: [Referring to slides for examples]

FYT: Two different types of issues: mapping from the hour to the set of day periods. And mapping to the set of day period to a set of localized strings.

FYT: Any question?

MBS: Doesn't appear we have any question and there is nothing in the queue.

FYT: We'll go through the same process as for the previous proposal

#### Conclusion/Resolution

- needs to meet stage 4 similar requirements Test262 tests should be merged first

## ECMA-402: add millisecondsDigits option

Frank Yung-Fong Tang

[PR](https://github.com/tc39/ecma402/pull/347)
- [slides](https://docs.google.com/presentation/d/131l-GAqhs7SRsjsa2MmOLdou7gr2_Vl_0dTl1MhyTb0)

FYT: Currently date object itself has precision up to milliseconds, but formatting can only format up to precision of a second. People require us to format to a precision up to a millisecond. Proposal to add a new option, where value can be 0 to 3. 0 not formatting anything about milliseconds part. 1 to 3 indicates number of digits to include in format of milliseconds.

(referring to slides for example)

FYT: That's it, that's the gist of the PR.

MBS: We have a topic on the queue from Philipp: rename to subsecondDigits (nano seconds)

PDL: Potential future increases in precision specifically with temporals we're thinking about going to nanoseconds precision. Not thinking of using datetimeformat but having another one. Wonder if we'd be better off how many digits of subseconds do I want rather than tying it to milliseconds.

FYT: Interesting point, any suggestion about what that would be called.

PDL: I'd call it `subsecondDigits`, but open to different name.

MBS: I think that's a great suggestion.

FYT: I can get this discussed on the PR

DE: great proposal excited to see it moving forward. Each of these 3 corresponding to use cases that engineers find useful. Also submitted as issues in ECMA-402 repository. They are real use cases that were submitted. We love seeing people reporting use cases.

MBS: I assume we want it to go through a similar process as the last two PRs, any concern with that?

MBS: We can move to the next item as long as anyone else has nothing to bring up.

#### Conclusion/Resolution

- needs to meet stage 4 similar requirements Test262 tests should be merged first

## ECMA-402: Intl.DisplayNames

(Frank Yung-Fong Tang)

- [proposal](https://github.com/tc39/proposal-intl-displaynames)
- [slides](https://goo.gl/ZAaVds)

FYT: Proposal not a PR. currently in stage 1 already. Would like to advance it to stage 2. New api we propose to adding tointl library. [referring to slide].

FYT: We do not want it to be a general purpose thing but rather something that browser (missed)

(referring to slides for benefits)

FYT: Current status is stage 1 in January tc39. Spec has been drafted. Propose to advance to Stage 2, and show what changed since then

FYT: Locale, region and (missed)

FYT: Hard to extend, lot of time when the caller try to construct this object to pass this one Try to simplify and try to have one method of . Recently having people suggest adding a (control?) fallback.

FYT: Yellow one in slides are the new ones after stage 1. (referring to slide "Proposal")

FYT: Other methods that support locales of, options of Intl API are still there.

FYT: (showing examples slide with title "Examples: Get Region Names in English")

FYT: We expect the key to pass in to be either ISO region or UN M.49 numeric code in the type of string. For example '419' for Latin America.

(showing slide for traditional chinese example)

FYT: We can call this API to get a string without sending the translation across the web. All browsers have it built-in, because their own UI need to display those.

FYT: Script referring to writing system. If it's not syntactically correct code it will throw an exception. All data is from CLDR unicode consortium Can also use type 'language'. Can be language code, language with region, language with (missed) and region.

FYT: Any question so far about what I presented?

FYT: New concept, new option I added after stage 1 which is currency. We already had currency through number format. We also need the name of the currency, not trying to format the currency. You want to allow e.g. the user to select that in a UI.

(showing examples slide)

FYT: Another new one we considered is datefield. Datefield is the name of a date field. Don't have a particular iso standard to define a key. We define a (missed) in the spec to define what can be accessed.

(Showing date field names examples slide)

FYT: If you have any web page that tries to have some kind of calendar related UI, you can access this to get a string back and display there. Instead of having the application itself handle it.

FYT: Another one is dateSymbol. Reason to provide is because in the past what happened is we see. We're forcing the caller to know a particular day is a monday, then try to format that particular date with. This way the caller can just say I want english, give me a sunday, give me a saturday. Calls the lower level API to return these.

You can change the style, change it to short, and you can show the string in different contexts of UI. Let's say you're using it on mobile, mobile screen size can be pretty small, caller can say hey I want short. Or it can be narrow, for example for a calendar widget. instead of three letters it'd have only one. Style allows caller to decide the style.

FYT: Another example for using that with a locale example.

FYT: Another option is fallback. Lots of discussion in the committee when we have. We have two kinds of level: language code, two letters, if it's not right we throw an exception.What should we do when we don't have the resources for a given code. Some argue we should throw exception, some argue we should return undefined, some that we should return the code.

FYT: We should have default: if don't have the resource for the code we should just return the code passed in. If none, in that case we return undefined. One case is for caller to use for the UI. Maybe library will (missed) from somewhere else.

FYT: Secondary functions which is already defined. Trying to support those. Following the same semantics. Prototype is in the CL by me. Depends on ICU to provide data. Depending on three different libraries to implement several types.

FYT: Any question or comment?

MBS: First topic is from Shane

SFC: Just wanted to say this has been one of the primary topics of the ecma 402 over the last 2 or 3 months there's been a lot of good questions raised from main stakeholders. How we handled fallbacks and substitutions. Where do we draw the line for what types of strings we add to this API and what strings we support. Good example of how we addressed a few questions and how we came to TC39 with a mature proposal. Proposing for stage 2 so still a lot of time to excited to continue iterating on this. Already one issue about the casing of the enum option. Excited to see where this goes next.

MBS: Next up we have Daniel Ehrenberg.

DE: Been really happy for this proposal to move forward. Wanted to mention that we had a lengthy discussion about motivation for this proposal and the scope of it. Concluded that it's well motivated. Webkit raised the issue: what things do we put in this. Where do we draw the line. Do we put all the strings? It's really for applications without increasing bundle size. More lengthy description of scope in the explainer. Been working on this as part of prep for stage 2, I hope we can all buy into that.

AKI: Notes doesn't need to be verbatim. Notetakers can stop the discussion if needed to ensure we can get notes as accurate as possible.

MBS: Seems like queue is empty. Frank particular ask or conclusion for this discussion?

FYT: Two asks from me: ask for advance to stage 2, other is stage 3 reviewers if that happens.

MBS: Do we have consensus to move this proposal to stage 2? No objections.

MBS: Any reviewers for stage 3?

LEO: Really excited with this one, I think I'm already in.

FYT: Good enough to have just 2, do we need from other companies?

MBS: 2 editors and reviewers sign off. Seems like need one more reviewer than what you have today.

LEO: We can someone from another company to sign up for this.

DE: Can try to get more reviewers async. We do lots of reviews for ECMA-402. Ask this committee if I'm reviewing and you're reviewing for ECMA-402. We've had a tradition of multiple reviewers, not sure if it's required, We can try to have more reviewers offline.

LEO: We can get it async.

#### Conclusion/Resolution

- Stage 2 acceptance
- Stage 3 reviewers:
  - Daniel Ehrenberg
  - More to be found async.

## Emitter for Stage 1

Shu-yu Guo & Pedram Emrouznejad

- [proposal](https://github.com/pemrouz/proposal-emitter)
- [slides](https://docs.google.com/presentation/d/1A6H33rnyP6O2I8z9SE1UZ-2VUrLMEe9v4jkwUh2ADeY/)

SYG: We are presenting a new primitive called emitters. Appreciate it if we hold questions until the end of the presentation.

SYG: Something Pedram started a while back. JS programmers solve 2 problems over on the web and server side.

SYG: The problems are 1) you have to move data from one place to another, and you often want to do this with some control over your data (stop it, in concurrent fashion, to limit some things). It's not the simple 1 in 1 out problem that we have in synchronous data.

SYG: 2) The other one is you're removing data but want to do some computation with the data. It's often together with moving data. Simplest map generics (map, reduce, filter), set generics.

SYG: Community thought a lot about this space. Will provide sample of libraries that deal with both issues. Some more recent libs that try to tackle both problems at once.
Prior Art: Lodash. Provides higher order of them. Not only map over concrete thing, you can also
Prior Art: Transducers. Generalize something like that into transducers. Is there a library that does transducers?

PED: Yes, there's basically different things but we'd like to go through different use cases. Lodash is a bit older, but it provides the transducer paradigm. You can write these all using standard function composition using reducers.

PED: There's no base class in this. It's one approach to do these things.

SYG: This is kind of the functional programming, more academic heritage, if you generalize all your data transforms, you can see how everything reduces to a fold, which you can then pass to a kernel. Those higher order functions are called transducers.

SYG: This is a generalization if we talk about data transformations if we want to make those first class things, that's an example of where the community has gone with data transformations.

Prior Art: Concurrency. Also stuff try to purely solve some data concurrency issues, If you want to limit number of operations happening at once. It's hard to do n things at a time. It's very hard to figure out how to do n things at a time. p-limit/p-map are single functions that are almost as popular as the whole of Lodash . These basic concurrency things are

Prior Art: RxJS. Tries to solve both conveyance and transformation at once. Set sink, source, and compose your pipeline. I'm told that the bidirectional nature has been a source of confusion. Single consumer. A push based primitive with single consumer is limiting.

PED: Wanted to meet each of these use-cases, and balance out the criticism. Iterators are pure push. Multi consumer does not work. Single consumer makes sense with pull operators. It's very confusing at different rates when you just have pull

Prior Art: Most.js: Similar to Rx.js, both push and pull. Much faster than Rx.js - order of magnitude. There's a diversity in the libraries, each of which focuses on different aspects of the problem. Focused on performance.

SYG: There is very broad agreement on the signature of this functionality. Generally, it's written with map. On the committee side we've also thought of this problem. We've tried to solve some of these problems in the past. We've tried to move events out of the Event Loop and into the platform.
This is paving the cowpaths.

Prior Art: EventEmitter (server-side) & EventTarget (client-side). Forces you to deal with callbacks.
There's fragmentation: code that's using addListener() or addEventListener() has to work around what's already in the platform.

Prior Art: Generics. Talked about as part of the standard library to operate on collections, e.g. len/map.

Prior Art: Iterator Helpers. Instead of standalone generics, we can put these on the iterator prototype. Strictly one in, one out. This is a Stage 1 proposal presented in January.

Prior Art: Observables. We've talked about these previously if we want to do this push-based thing. Don't want to delve in here. We aim to overcome the issues that held up Observables in the past. It has the bidirectional push/pull problems that RxJS had. There were ergonomics issues with observables that didn't integrate nicely with the rest of the language. Part of the proposal we're working on is to integrate nicely and make it feel javascript-y.

New Proposal: A unifying primitive for conveyance and transformation.
Ergonomic, performant, integrates with the language. Ambitious high level goals.
Push-based. Multi-consumer. Unidirectional - easy to reason about.
Combines conveyance and transform into a single first class value you can pass around.

SYG: What we hope the proposal enables is that it is expressive and easy to reason about. It's ergonomic and can be integrated into the language. Can be made highly performant.

SYG: What is an Emitter? (see slide 19)  next() sends in data, custom code runs in the emitter, decides what to emit using send().
Everything flows one way.

SYG: Promises are resolved in a unidirectional way too.

SYG: The way you'd do async processing with the emitter proposal. You always wait on the last thing in the pipeline.

SYG: With this unidirectional thing, as with Async, it becomes very natural to wait on the last emitter—when it has the result of the pipeline that precedes it. This highlights one of the properties (points to the slides about properties) where each point on the left becomes very easy to understand. We want these semantics to be composable. We want you to always be able to work out the data regardless of what direction data is going.

SYG: Actual API now. (see slide 21) `.each()` is what connects one emitter to another. Up for discussion on the API. this is the current state of API. Connect it with another emitter with each call. Ultimately not connecting functions, you're connecting emitters with other emitters.

SYG: The emitter is in full control of when it sends stuff out of the emitter.

SYG: When you create an emitter, you can pass some code that allows the emitter author to control. You can filter.

SYG: You can delay sending stuff out with a timeout.

PED: EventTarget/EvertEmitter is confused because anyone who grabs it can send stuff into it.

PED: (see slide 22) One Emitter connects to another Emitter. Creates/returns a new Emitter.

SYG: In contrast with some earlier libraries, You can create these declarative pipelines only with functions. Each thing is now just a function.

MM: The function being cast to each, and the function being passed to the emitter constructor. Is this the same function being passed to the constructor?

PED: Yes, exactly. It's the thing that processes values.

SYG: For data transformation use case we have something with emitters. Hopefully simplifies reasoning about pipeline.

DD: Use a generator function!

YSV: The presenters asked to not be interrupted until the end.
AKI: Clarifying questions are OK.

DD: I would like clarification into why it's presented this way. Very verbose example instead of using generator function. Unwind yours by unwinding all functions you wrote.

PED: For example, if you have a shared mutable state if you have to extract some of the mechanics away...

DD: If you wrote before using generator function it would be 3 lines. Spent long time in committee creating a spec for, I think it is unfair.

DD: I think that inlining the generator mechanics that we spent a very long time discussing on this committee is very unfair.

AKI: This is going beyond the scope of a clarifying question.

SYG: For the event use case, not only have it be a nice computation primitive, but also perhaps unify how we think about events. Currently you pass callbacks into events and an event gets generated. Can layer event emitter concept on top in backward compat way.

PED: Don't have to change existing eventemitter APIs.

SYG: (see slide 25) More complicated example, main idea: we have standardized many things that helped linearize and refactor logic to be more understandable. Still some use cases that currently necessitate use of shared mutable state with something that looks like callback.

PED: Example of emitter primitive would allow us to do. Example of cluster stabilisation

PED: You want to log when it becomes stable. Every time event emitted, check if entire stable, want to make sure it's been stable for 200 ms. One may be stable, another one may become unstable.

AVK: Wondering with events since you can cancel and do other things, how is it not bi-directional? If you get an event you can call event loop preventDefault, seems like it would go back and affects the person that invoked the event. Returns true or false.

DD: Are you proposing to change eventTarget, because it is bidirectional.

PED: The value is going through synchronously (unless you deliberately delay it), so that is possible to do.

PED: Some aspects of it will be up for discussion.

AVK: That means that it's not unidirectional, right?

PED: It is unidirectional.

PED: What is going backwards in this case?

DD: It's a cancelation signal from preventDefault.

DD: So you wouldn't get event objects you would get a new kind of object?

PED: You could get event objects—these are definitely the kinds of use-cases we want to work through  and illustrate. There are some examples in the repo and some discussions there/

SGO: Going back to cluster stabilization. Need to make sure the entire cluster maintains before you can say I've reached stability. With emitters, it becomes something you can read and understand, reducing the complexity.

PED: (slide 26) Same example but using emitters

PED: Main thing is piece in green was spread out in different places, now in one place. Can reason about it in a simpler way. It returns an emitter itself

SYG: The difference with debounce is shared mutable state. Way I think about it: because not monotonic, all events have to participate every time you receive an event. Becomes easier to read.

MM: The methods you're showing after the doc in the left-hand column inside of the code... After the "flatten", "filter", "tap", "filter", etc. what is there?

SYG: it's a comma for separating arguments to the compose function..

MM: I'm glad I asked.

PED: Next example: concurrency, setting up servers. Expressing this kind of logic is really hard and it's why we didn't write it by hand.

SYG: If interested in why it's hard to express currently. Happy to answer that offline if interested. We believe this primitive enables new expression that was difficult before.

SYG: Quick summary of API surface: (see slide titled "Summary") some methods on prototype. Connecting emitters, sending stuff into emitters. Resolving emitter, rejecting it. There are some static helpers that help you compose pipelines or adapt existing collections as sources to feed into emitter. Set of operators out of the box to compose pipelines. Free to write your own emitters to do arbitrary code.

SYG: Why do we want to do this as a language/standard library feature? Why not do it completely in userland?

SYG: There is use case of unifying the event apis on server side and client side. We are talking about in commiotte, of standardizing set of generic operators on collections. Has ergonomic to use for sync collection transformations as it is for async event kind of use cases. By having into language. Usual argument: more opt opportunities for runtime. Point of alignment for users in ecosystem for these problems that people try to solve over and over again.

SYG: Core concept of unidirectional multi-consumer thing is the higher bit of what we're trying to get across. Currently asking for stage 1. Sure there's plenty of questions and discussions.

AKI: There aren't any questions.

SYG: We're asking for advancement to stage 1 and call for participation from folks interested in this space, whether on API-side, etc. Identify advancement criteria if this moves to stage 1, what do people want to see for this to move further?

KG: Happy for this to go to stage 1. For stage 2, would like to make sure that we have talked to everyone who has worked on this problem (rx.js, dom, etc.). Talk to those people to make sure it has everything they need, so that if this is in the language, those folks use that.

SYG: That's an extremely good point. PED has already done a ton of legwork to have these conversations. PED can speak more toward that.

PDE: That's right, all of the committee's notes are in the repo. Trying to add more people as well. Balancing out. Previously observable, didn't fit with promises very well. Very early stage, want to receive feedback about use cases. If more use cases, would be very cool if people could surface them.

KG: Not only use cases, but also buy in on the design.

DD: Would like to see adoption of this library on the level of Rx. Kind of level adoption that would be appropriate before this can advance. That's the kind of ecosystem interest I'd like to see before the proposal advances.

DD: James Snell working on something similar, EventTarget in Node.

DD: We spoke with MBS and Matteo and they're interested. From their side they want something ???.

PDE: This improves the ergonomics as did observables before it, but that alone is not really a sufficient motivation for this proposal.

SYG: As opposed to observables, which is a higher level abstraction, we believe that this API is lower level primitive with clearer semantics, better chance of being used as minimal building block for computing and transporting data.

AVK: I am interested in this, especially for mutation observers, resize observers, etc. Maybe this can unify those in some way. I'm a little concerned about some things not being unidirectional.

PDE: Needs clarification around that. Ways to get things out, if you do await you get result back. Opportunities to define unresolved. Yes, I think we should try our best to address those use cases.

SYG: Event handling is very large use case. I do want to re-highlight point C (points to "Why do this as a language feature?" slide), by enabling kind of standard blessed way of doing zero copy transform of data, we do hope this might fit many use cases not currently well represented in ecosystem.

PED: This would add a particular degree of interoperability.

DE: I think this is a great proposal and I'm really glad you came to this committee to present it. It's near the use-case/design-space of observables. Heard that observables are confusing. Even people who got them and like them, took them time. My impression about this proposal is that it should be a bit easier to learn. Given a bunch of interesting reasons for why we should go in this direction. Asking for a level of use of very popular lib or framework is a bit of a high bar. We standardize lib components even though less popular than other libs. We should take into account input from diff stakeholders which you already did. I don't think it's very productive to say that "this point is not 100% true, so let's go in a different direction". That's a bit of a higher bar than what we should be using for standardization.
We standardized Web Components even though it was less popular than other web frameworks. We're standardizing Temporal without saying it has to first become more popular than Moment.js. Avoiding too early locking is a good strategy

DD: I'd be very concerned if Moment.js was not able or willing to be based on Temporal. That's the same standard I'm asking for with Emitter/RxJS.

PED: We don't want to overcommit. With observables specifically, one of main motivations because it was hard to use. Want to learn from existing libs but be conscious of where we can do better.

SYG: There is a polyfill, not published because of high churn, if you'd like to see it please come see us for a demo.

MM: Some of the issues that came up in context of other proposals not necessarily relevant to this one. One thing relevant to push based system is back pressure. Some way to accomodate for back pressure in flow control?

PED: It does have mechanism for back pressure, documented in repo. Previous work they'd use sizing mechanism to communicate back pressure, very coarse grained. If they return a promise, fine grained way to communicate back pressure. Await waits for promise before moving on. Caller is in control of how much and how often. Allows you to have more expressive concurrency control.

MM: Now I understand about waiting for promise at the end.

PED: Can externally send values, resolved or rejected.

MM: Promise that's part of this protocol is basically a promise for the stream being done? If promise is rejected means stream is terminated, not because

PED: Promise represents the final state of the emitter which can be resolved/rejected.

MM: I want to encourage proposals to look at the debugging burden. Errors can happen far away. Debugging async pipelines can be very hard. I think this is a real important topic. I love this topic. We can do the debugging topic offline.

DE: Would like to suggest 15 minutes extension.

PED: (re: debugging) If you await a pipeline and it throws, you can use a try-catch.

SYG: EventEmitters are first class values. Can give each Emitter an intermediate name and you can inspect that

MM: Thanks, I'm excited about this.

DD: On backpressure: in my experience backpressure for push primitives doesn't work very well.

PED: Absolutely, yes.

LEO: Second DE and DD's comments. I'd like more experimentation as a library. It's a swiss army knife - too many things. Repo is complicated. Would like to see more examples and more widespread usage. Not convinced of why it's important as a native feature rather than a library. The points here are not convincing me, still miss some pain points. Stated advantages seem to be about convincing the community to use the same thing. If this goes to stage 1 I'd like to have better illustration how everything works. I like better documentation of this. To clarify better the points of having this as native rather than as a library.

PED: The repo is not like a readme. It documents research that we've done. Not finalized. Shows ideas we could consider. All libs are converging on similar API. If you agree with motivation this is problem space that we should look into.

SYG: I would push back on the native vs lib argument.

LEO: I'm not yet convinced why we really need this for it to be native and why couldn't be done as library. I'd like to see better illustration of this. Why being a native feature. What does it enable that we cannot have as a library?

SYG: If this were to be standard library, does that count as native to you?

LEO: By native I mean that people have implemented in browsers. Maybe be loaded as std lib. Not shaped by community as lodash is.

LEO: Don't want to block anything, just saying I might be missing some point here. If goes to stage 1, means we're expecting further investigation on this. Seems people are interested in doing further investigation on this.

SGN: Why should this be a language feature? Point a./ b./ and f./ all seem like the same thing to me. Get motivation for core operators. Trying to understand if this is better for Collection methods.
You would have to create an Emitter to operate on something.

SGN: Not really convinced this is so much better. Not a fan of my proposal to be honest. Doesn't pipeline proposal subsume most of this? How does this work with the pipeline proposal?

SGN: Your point here about potential syntax, how does this work with Pipeline operator?

SYG: It was my understanding that pipeline was about functions, right?

SGN: Sure, but there's a lot of overlapping with this, right?

PED: If we add new collection, this would kind of work with that. Haven't seen the other proposal so I'm not sure. Basically two types of libraries, one that has subclasses, other with functions. Didn't decide to do the one with functions.Transducers are 3 arity functions [missed the end]

SGN: I'm not asking for an answer right now just saying something to think about for Stage 2—how this works with the pipeline operator. Not gonna block this for stage 1, I think this is fine.

SYG: Not sure there's a better way to express collection transformation. Sounds to me we need to work together.

SYG: And we should be more agnostic of the forms that feed into it.

SYG:It would be interesting to see the performance characteristics.

SYG:Boiler plate would be gross if you had to do that for a simple use case like that all the time.

SGN: OK, I just didn't find these motivations very convincing. I think we should flesh those out and talk about this more.

SGN: As far as runtime is concerned. Agree this would make it faster, but not sure this is really important.

PED: Not just performance, but also longer term performance. Node but also other implementers.

??: Fact that runtime may want this is not a good argument for "let's do it".

SGN: Not adding a new capability to the platform.

SYG: Kind of disagree. If this were a blessed way to do things, it does unlock things. That kind of argument can be said of many things.

SGN: That's fair. Why I want this to go to stage 1 and for us to find out if this is something we want. Have buy in from the platform to say we want to build APIs for promises. If you can get that sort of buy in from DOM or node for these new APIs that'd be awesome.

DE: Agree with sathya, for stage 2 this should be blocked on working with environments. Been great to hear Anne support for this. Don't think we should have high bar that something needs to have platform capabilities. Separately, I think we shouldn't try to make everything super generic to solve everything. A lot of people are comfortable writing in Python that does things. Would make sense to have separate proposals. Conclusion is stage 1.

PED: To know what goals and non goals would be helpful for us.

#### Conclusion/Resolution

- Stage 1 acceptance

## Array.isTemplateObject for Stage 1 or 2

(Mike Samuel)

- [proposal](https://github.com/mikesamuel/proposal-array-is-template-object)
- [slides](https://docs.google.com/presentation/d/e/2PACX-1vT3dGkd1KFrS-9iLOtI3kqyicOP6v-vMOh__KyI7k6Q-nO9o_qAcb9hmfakhCVftoyBXVhgN6sNBBrj/pub?start=false&loop=false&delayms=60000)

MSL: Talked yesterday about trusted types. Draft of very small proposals meant to enable trusted types. To follow along, useful URLs. Explainer, spec draft and tests. Asking for stage 1 or stage 2 if everybody likes the draft.

MSL: What is template object? When tag template string evaluated, string portions packed into object, passed to function identified by tag. Values are additional parameters. TemplateObject is abstraction that enables that.

MSL: Goals: see slide. In context of browser, relates to same origin policy. If put strings in template object, can use that as a signal that those strings need higher privilege. I work in security and these are things that come up a lot: where strings came from.

MSL: Proposal deals with this with small change. What it doesn't do, know whether thing was called as tag function.

MSL: Add new property to array constructor: isTemplateObject. Takes one value and calls out to spec abstraction. See runtime semantics slide. Spec text reminiscent of getTemplateObject abstraction. Return boolean instead of template object.

MSL: In Test262 tests, plenty more examples. (See examples slide.)

MSL: Working on internal list of template objects. Not a goal to determine a particular function was called as template object.

MSL: That's about all I have. Can I answer questions?

KG: Understand your use case for trusted types. Little concerned of adding to language if people use it for something other than that. The thing that tag functions are just functions is nice because don't need to reason about it as special things, and that continues to be the case. Is there a reason to want that for things other than trusted types? Is this a thing that we expected people use to implement overloads for arbitrary functions, or just for security properties?

MSL: Don't know of other use cases. Might be useful for say I have function, node mysql module, whether argument is a template object for mysql query if it's used as tag function then you do something to avoid SQL injection, otherwise use pre-tag api. For that don't need definite signal that this is from the realm internal signal. Short answer I don't know of other use cases.

KG: I'm a little concerned about people doing the things that MySQL is doing, because you can't treat tag functions like functions anymore.

MSL: Why not? I don't understand.

KG: If function requires that its arguments meet its check, can't pass array, can't do things dynamically you used to do. Understand why that's desirable for trusted types. Seems harmful for code that doesn't want that. Nice to be able to change representation of things. Doesn't need to block anything, but want to voice doubts about this as language API.

MSL: I suppose there's a couple ways we could address this: pick branding that makes it clear that this has that effect, and if there's no suspicion here, don't use this function. I can imagine in the MySQL example, there's an element of suspicion. Branding and clear communication would be an important goal here.

KG:  Yeah that'd make me happy. Doesn't necessarily need to change, just want to get on record that's a concern I have.

MM: want to verify some properties that I think a proposal should have. Making use of, introducing new piece of global state, but doing so in a way it does not constitute global comm channel. Want to verify that with you. Template object never observably changes state. No observable state transition from non-branded to being branded. Do you see possibility that proposal somehow introduces global comm channel?

MSL: Unless the template object itself is communicated, I don't think that any information is available.

MM: If object graph shares frozen primordials is the important case, sharing object graph that is not just all frozen but all immutable, that for not introducing primordials immutable state. Can both run pure code that get separately instantiated. Even if share template object, still no global comm channel.

MSL: Based on spec analysis of where template obj specified. Template object cannot leak user's code. Nothing that user code can do to affect whether preexisting object is template object, can't observe template object when becomes template object.

MM: ...

MSL: It is equivalent to that and it is ecmascript parser that brands the template object when you parsing a template tag call site.

MM: SES context when mutually suspicious things coexisting under same root realm. Naively one could think, proposal doesn't do anything useful in that context. One could create
Root realm is brand new set of primordials, compartment is within root realm, share primordials of the root realm.

Mostly not inheritance relationship. Mostly just hold all primordials of root realm, create separate global scope.

MM: Question is: with realms api, taking current concept of realms, splitting into 2 concepts, root realm and compartments, both are kinds of realms. Some things specific to root realms. With this api, because we allow evaluators that are compartments, but safe, if branding table was associated with compartments, where each compartment was mutually suspicious of others, fact that your api doesn't work between realms, if it didn't work between compartments, then it wouldn't be useful.

MSL: That sounds right.

MM: Okay. Thank you. I am enthusiastic about this proposal.

DE: Like this. Like trusted types use case. The XSS use case is important. Don't mind if used for overloading. Can add things to adopt a convention as platform for not doing that kind of overloading. One thing for stage 2: same realm brand check vs cross realm brand check. Can see argument for either. Other thing to iterate on: static method vs built-in module. Last time discussed: thoughts about integrity properties. If moving towards built-in modules, if several JS environments use import-maps to centralize polyfilling built-in modules, then using built-in modules would be good. And also would be controlled at application integration level. Not TC39 proposal but import-maps would give reliability and other nice properties. Excited for Stage 2, simple proposal, if we decided we want to do something in that area we have concrete proposals to do that, but doesn't need to be addressed for stage 2.

(Punted on MM's comment, not important for stage 2)

MBS: Fair to say you'd like to ask this room for consensus ?

MSL: I would like to yes.

#### Conclusion/Resolution

- Stage 2 acceptance
- Stage 3 reviewers:
  - Mark Miller
  - Justin Ridgewell

## evalable for Stage 1 or 2

(Mike Samuel)

- [proposal](https://github.com/mikesamuel/evalable)
- [slides](https://docs.google.com/presentation/d/e/2PACX-1vQheVqVnWk9wYSa34FWr3Npvysrr1jFN-BpcTHhSDihPLNA4IH8868CqtU0DFXxcst5XIAPa6A5QtJ_/pub?start=false&loop=false&delayms=60000&slide=id.p)

MSL: Welcome everybody, you might remember me... [laughs]

MSL: Similar to the last. Useful URls. Proposal also stage 0 going to 1 or 2. Do not have tests262 tests yet. May be simpler to test with web-platform-tests, depending on which way we go.

MSL: So, for background, (in this slide) I'm printing an object that stringifies to "1". Then I try to eval it. Turns out that result of x is going to be same as o. Eval is identity function, except for strings. For trusted types we'd want to treat eval as a sink. Trusted types define sinks. They are abusable APIs.

MSL: Got ways of controlling that with content security policies. Node can globally turn that off. When 1000s of modules, very likely one of them is going to use eval.

MSL: Trusted Types tries to make that more fine-grained. You're allowed to eval trusted script values, but not strings.

MSL: Need a way for values to proceed past step 2 here. There's backward compat constraints, don't want to break the web. Adopting this as constraint of proposal. Existing apps shouldn't be creating values of x that take different path when we change this step.

MSL: So the actual draft, [see slide].

MSL: Couple diff ways we can spec this. 1) internal slot for this option we'd specify IsCodeLike. (see slide)  Since existing apps are never using this internal slot, we satisfy the compat constraint.

MSL: Option 2) is well known symbol, just add entry to well known symbol table. For lack of better name: @@evalable. (See option 2 slide.)

MSL: Whether or not it's benefit for user code to be able to find evalable values is up in the air. Would ask committee's rec on that.

MSL: Useful links in next slide. Like to ask for stage 1 or 2 and your thoughts.

MM: symbol example: makes me confused about what goal of proposal is. If it's symbol then anyone can make anything evalable. Therefore when eval is only reached by the eval-able check, the check doesn't mean very much.

MSL: Goal is to allow the string to get through to the content security policy check. Doesn't add any guard, would be handled with the trusted types. Working with CSP 3 folks to change CSP 3 spec abstraction to decide whether eval should receive. This is necessary to get a value there so that we can test if trusted script.

MM: Purpose is workaround for code that is in environment on which eval is suppressed to overcome that?

MM: Let me propose a different mechanism that has different security properties what I assume you're intending with this proposal that the marker is a brand rather than either a symbol or internal slot, then control over what can carry brand is the control over whether one can feed something into evaluation suppressing context. As a brand, vs internal (well known?) symbol, it'd be realm specific.

MSL: The way involved in all of this there are multiple overlapping standards. Standards committees have tried to minimize overlap and toe-stepping. Right now, the decision about whether or not a piece of code is evaluated is up to the embedder of the EcmaScript engine. Moving the policy aspects of what code goes out to the host and then proceeds to get evaluated would be pulling the function that are part of the embedder into the engine itself.

MSL: If you think about a brand as a particular data structure but as semantics. A brand is not a set, a brand is a predicate right? So (interrupted)

MM: brand has 2 separate capabilities: capability to brand something, capability to check the brand.

MSL: I worry that—In the case of trusted types, the host environment, trusted type is browser proposal. Working on something for server side. Host environment that trusts the brand and allows limited access to those brands to user's code. Moving requirement that branding be entirely on one side of that line would seem to limit how standards can interact.

+MM: Did not understand the answer.

AVK: If I can ask a clarifying question? On subsequent slide you had if it's not a string you'd string it. And do we call out to the host?

MSL: Excellent point: with the changes. Spec as written, you guys which changes it that eval does the host call out, When wrote slide didn't know if you'd approve that. So assumed that host call out would happen separately. I have to incorporate that change into ths. Host callout would happen between step 2 and 3. Before stringification.

AVK: Would also need to change the host callout, currently pass realm to the host.

MSL: Thank you for giving me a segue into my next proposal.

Maybe mark and i can agree taking convo offline.

MM: Cannot agree on proposal if it has an articulate security issue.

MBS: You would not object to stage 1 but object to stage 2?

MM: Yes i think so.

MSL: In conjunction with other proposal, no ??? is going to proceed to stage 4, unless ???

KG: I am confused about why you are proposing to add this. I understand that there is legacy code we can't get away from. That's why CSP has strict dynamic and unsafe-eval. But this proposal doesn't do anything for existing code, because it needs backwards compatibility, right?

MM: I understand. Obvious backcompat goal. Valid inputs must remain valid. Goal is to make eval work with new kinds of inputs from trusted types.

KG: Makes sense. I don't want that. I don't want more ways to eval things. Eval is terrible, making it work on new code is bad, we should not do that.

MSL: Entitled to take that position and to block this proposal. But the idea is eval is bad, but it happens. When it happens, it is better that we can bound the amount of code that could cause eval to e.g. that code which defines a trusted type policy that has createscript handler and focus security attention on that. I'm a security engineer and care very much about security and what effect eval has. Blanket effect that CSP has, we need measures to guard eval. All or nothing doesn't scale as JS systems become larger.

KG: Not planning to object on Stage 1 because you cannot object to Stage 1 on almost any grounds, but I would need a lot more for me to be convinced for Stage 2. This doesn't help with any existing code that has eval. If you convert existing code, should convert so that it's not using eval.

MSL: It does provide teams a means to manage legacy code, I understand you are skeptical of stage 2.
Would love to talk offline to you and Mark and discuss how to address concerns.

MBS: any objection moving to stage 1? See thumbs up from MM, don't hear any objection.

#### Conclusion/Resolution

- Stage 1 acceptance
- discuss with Mark Miller and Kevin Gibbons about concerns.
- MM and KG both have objections, both need to be resolved before stage 2.

## Host compile value adjustment for Stage 1 or 2

(Mike Samuel)

- [proposal](https://mikesamuel.github.io/proposal-hostensurecancompilestrings-passthru/)
- [slides](https://docs.google.com/presentation/d/e/2PACX-1vQ8SFehGZpFE8n90KiNLNIxTPyp5PXHLDUAkYHS0-FxXVAdu4BrKpIukikRuas4UuilkqBeCJA0LjWN/pub?start=false&loop=false&delayms=60000)

MSL: stage 0 going stage 1 or 2. Other feature for trusted types. Links slide. Issue 174 has a lot of background on this whole thing.

MSL: Came up, eval is evil. Eval most misused feat of JS. Avoid it. I know KG is not convinced.

MSL: Some patterns (see slide) which do use eval which appears deep in Lodash. PRobably should be updated to use globalThis but version hell being what it is it's good to have a story.

MSL: Things like this prevent usage of content security policy and disable code generation from strings. Want way to lock down. Possible to get these things by reflection.

MSL: (slide implicit code loading). Take an object, look at very deep properties, an attacker can get Object and Function and ultimately execute arbitrary code.

MSL: Don't know whether hidden paths to execute code like this.

MSL: This is the kind of things that gives security engs loss of sleep. Very hard to prove this doesn't happen.

MSL: Trusted type does: working with csp 3 maintainers to adjust semantincs of host callout that csp is based off.

MSL: Throwing exception or return normally, takes 2 realms. For csp if either realms has csp policy that doesn't have unsafe eval, going to block that.

MSL: What we want to do is guard sinks. Allow function eval to be used but with a restricted set of values, then use organizational measures and security hints in headers to restrict policy creation, to restrict the set of values that CAN be created, so that function eval no longer be abusable implicitly.

MSL: Been using for server side for 6 years now. Let's us lock down. Can deploy organizational measures to get a handle on things. What's a critical input? (slide)

MSL: Last arg is critical input. First n-1 args to new Function.

MSL: If you have a default value, can be arbitrary expression, means you can execute code.

MSL: Pretty much all of the arguments to eval and new function are sensitive. We would like to require that those be trusted when trusted types is enabled. script values when trusted types is enabled — when a document has opted in.

MSL: A trusted script value is an uncompiled script body.

MSL: Goal for proposal is to provide host callout with enough context to distinguish between values that have been branded as safe vs not safe. Changed the name from hostensurecancompilestrings to hostbeforecompilevalue. See slide.

MSL: Allows adjusting the code that gets executed. New arguments passed in: goal and args list. For eval you'd pass list of 1 item. The `x` to be evaluated. The goal would be ScriptBody.

MSL: Little bit of web reality issue here. Existing hosts and engines already pass values out to host. Which is not strictly allowed.

MSL: CSP implementations all receive the value so that they can send violation reports that contain some of the text of the evaluator. They send a little bit of the string so that people can diagnose what was going on and how the app is being attacked.

MSL: Trusted type default policy called implicitly for strings when doc defines policy with name default if you do return this. The default policy's createscript method is going to be passed return this, can throw exception, return same value or return different value.

(slide with example code of creating a default policy)

MSL: Spec text adds some notes about what new args are. See slide of added args.

MSL: See next slide for meaning of goal.

MSL: Potential for observable side effects if we don't place constraints on what can happen. If CreateDynamicFunction stringifies args left to right. We want constraint if host call out does stringify args. When it produces results, uses that stringification to prevent multiple stringifications.

MSL: And the actual change to the spec is fairly small: "CreateDynamicFunction" changes so that the host callout moves from step 5 to after a big, kinda-switch statement based on the kind of function being created. (See slides)

MSL: Eval changes because you guys were nice enough to prove need consensus spec yesterday. So that only effects PerformEval. Put x in list, pass that list to host callout, then unpack the list we receive back.

MSL: That's about it. Ready to take questions.

MM: Flip back to the slide where you were showing how data can cause a reflexive lookup of a function and invoke it. I love this example, I especially love how you show how innocent looking JSON processing code can lead to doing things like this.

MM: This is a great example of why I'm confused by the purpose of prior proposal. Symbol.evalable can also be looked up by data, being manipulated by innocently written code reflectively looking up a symbol and evaling it like this.

MSL: that was not an arg against previous proposal, would be arg against the invariant. Reflective access to that symbol and creating objects within would be a risk. And would be hard to reason about for large program that doesn't happen somewhere else.

MM: I want you to go back to your final slide where you're showing the change to the spec for, including the change to HostBeforeCompileValue.

MSL: let me take CreateDynamicFunction., As said, it goes into PerformEval instead.

MM: You are allowing host to change arguments being evaluated.

MSL: Yes, required for policies to be able to adjust the compiled code.

MM: It is a requirement that the host can (missed)

MSL: Trusted types can't require anything of tc39. CSP can't require anything of tc39.

MM: Not asking process question. Is it desirable?

MSL: Desired that this is the case to allowing migration of legacy applications.

MM: Okal, noted. The sub comment is, take your ex. "Return this"; In context, program is "this". If evaled indirect, returns global. Policy that allowed that string would _also_ allow as a direct eval.

This is according to the lexical scope it's evaluated in. So either  give directEval a distinct name or give it a parameter here. You should certainly allow it to distinguish between direct or indirect.

MSL: "isDirect" came from PerformEval. Understood. Yeah I think that would be a fair adjustment.Might be useful. Not quite sure how to communicate that bit. Can draft some options.

MM: There's two obvious ways: add a boolean argument or a case to the goal string, which is exactly that.

MSL: Yeah. It seems that isDirect is not meaningful bit for CreateDynamicFunction case.

MM: Completely non-orthogonal, so might fold it into it.

MSL: Yeah. Does that address the rest of your concerns mark?

MM: That was it.

AVK: My comment is would like to see this merged with prior proposal. Not clear how they interact and need both to do anything useful. Doesn't seem you can have one or the other.

MSL: Should they go back or forward together?

AVK: I would actually like to see them as a single thing.

MSL: Understood.

MSL: So seems no on stage 2 for this. Combined into the other since the other one only made stage 1? Gives me all I need and next meeting I'll try to present them together for stage 2.

#### Conclusion/Resolution

- No consensus for Stage 2 yet.
- Combine with prior stage 1 proposal.
- Will be revisited at future meeting

## JavaScript Standard Library for Stage 2 ( part 2? )

(Michael Saboff)

- [proposal](https://github.com/tc39/proposal-javascript-standard-library)
- [slides](https://github.com/tc39/proposal-javascript-standard-library/blob/master/slides/JSL-TC39-June-2019.pdf)

MHK: Where I left off is polyfill. There was something in the queue. Maybe we can go over that?

YSV: We're going to refill questions from queue. Did we finish Keith's question?

KM: no. Talked to JHD offline. Try to talk about that. Wondering whether how JHD feels about semantics and spec language similar to current idempotent, if create another constraint top level content provided to host. Needs to be able to provide a way to polyfill effectively, Seems to be ok with JHD.

MHK: Fine to add such language to the spec.

DD: Ties into Keith's thing. There are already hosts that prevent polyfilling. SES being one, sort of. Little strange to have this requirement.

YSK: (Repeating Dan's question) Would high-level text explaining the hooks be sufficient.

DE: Comment to explain why import maps is a good layering. High level text sort of fits together with that.

MHK: We provided these alternatives as things we didn't want.

YSK: Skipping MM's question because not here.

KG: no idea what my question was about.

YSK: I believe it was related to security issue where script could ???

MLS: May want to be able to inject it, but have to be able to inject before first import.

YSK: (Repeating Kevin's queued question)

KG: ok gated on import-maps shipping? Don't care about requirement on spec text. As process matter, need to be able to patch and polyfill,. As process matter, would we be ok browsers not ship this until they have first shipped import maps? Don't have that authority as committee, but can ask that of the champions.

MLS: Don't know how we do that. WICG? Chicken and egg. Talking about mechanism without libraries. Should get to stage 4 but useless for now.

YSK: (Repeating Mark's queued question) secure way to do operational hooks?

MM: You showed model on how to do this. Pipeline that's in the host is operational. There's code in the host that's written in something. Operational hooks advantage and not disadvantage for security. The realm api is all about enabling some js code to act as code to other js code. Patrick from Moddable in TC53 presented operational loading proposal as part of compartments system for realms. Looks very good to me. Implemented in XS. Prototyping in realm shim. I'd recommend that loading and control of ??? between modules, that all concerns be folded into realm.

MLS: You and I talked about this after yesterday. May be a way

MM: We should fold these efforts together. Realms can't move forward without loading. Loading issues exactly same as issues you're facing here.

YSK: (Checking queue)

MLS: Added stage 2 criteria slide: what are they? Entrance criteria. See slide "stage 2 cirteria". We have 3 todos: 1) talk about namespaces. Single namespace? Multiple? Follow-up on what governance for namespace. 2) polyfilling. Understand that needs to be dealt with. 3) JHD would like us that Scripts can do imports of stdlib. Don't know if necessary, but we need to handle it. Separate proposal or part of same proposal is unclear. We think we need stage 2 criteria. Willing to discuss whether committee agrees.

DE: great proposal. Support this for stage 2. Makes sense to leave things are placeholders. We can't just decide on gov model right now. We had good discussion about prefixes we can build on. Stage 2 makes a lot of sense, Stage 2 is where committee decides we're doing this, we have basic semantics. We have the loader change, which will integrate well with import maps, as well as JSON modules.. Really in favor of that moving forward.

MLS: So what's your question?

DE: More of a comment than a question. For async scripts you presented earlier this general statement which sounds good. For sync scripts I'm skeptical we'll find an answer.

MLS: I'm not eager to take that on—

DE: I think we can draw a conclusion to that during Stage 2.

DD: The process document says that "all major semantics" should be figured out as an entrance criteria for stage 2. These TODOs are definitely major semantics. I'm uncomfortable moving this to stage 2 with it unclear whether or how we'll resolve them; it's not clear what we'd be agreeing to include in the language if we accepted the proposal for stage 2 with these TODOs.

DD: The namespace issue, TODO #1, is of course one that's very important to Chrome. And we've been taken totally by surprise by TODO #3; we don't want to agree to include something in the language that would enable synchronous module execution. With this many unknowns, it appears by moving this to stage 2 we'd be agreeing to adding "something to do with modules". It's really important to be able to say more than that before moving to stage 2.

MLS: Todo 1) and 2) prefix which is namespace, Draft text does not talk about that. We can bikeshed over that. Don't think it changes things too much. Don't think it's a big issue single vs multiple namespace. Same with being able to polyfill. Because we have a loading mechanism, clearly able to handle import maps with that process.

MLS: Your contention with #3, that was something that was raised. I'm willing to discuss that in Stage 2, but frankly I assumed it would be a different proposal altogether. There's bigger issues than simply something like an implementation. I don't think it should be a blocker for stage 2. I understand and disagree.

DD: Understand spec text is agnostic and could allow sync imports. But saying whether we're going to do sync imports or not is important for stage 2.

MLS: Right but that's in stage 2.

MLS: "Purpose" in slide: For Stage 2 precisely describe the syntax and semantics. That's what we want to do, including these three things.

DD: It's an _entry_ requirement for stage 2 to establish major semantics that we are agreeing to. The purpose of stage 2 is not to figure things out and reach agreement; it's to write detailed spec text for what we've already figured out and agreed on.

LEO:. These can be solved at stage 2. We have problem that we identified, we have to find a solution to this. This could be done in stage 2. If concerns not addressed in stage 2, will never advance to stage 3. We are aware of those problems.

DD: Reminder: Stage 1 identify problem, Stage 2 propose solution. You've identified the problem; to get to stage 2 you need to propose the solution.

LEO: yes exactly.

PDL: these points well raised, by simply declaring 3) as out of scope leaves you with 2). Just because a question has been raised, doesn't mean we need an answer.

PDL: If you strike through 1) and 3), you remove those blockers. Is that valid assessment?

DD: If proposal does not cover deciding on a namespace, and declares we will not make imports executable synchronously, then that would make sense and allow moving to stage 2.

MLS: We do need to determine namespace issues, so unwilling to strike out #1 from this [See stage 2 criteria slide]

PDL: Not disagreeing, but does it need to be part of this proposal, or part of a namespace proposal that is independent. Not saying that we should say  tc39 has no business in namespaces. Just this proposal is not where we define it.

MLS: I could _almost_ go along. Mark said TC39 needs to be involved if namespace is TC39-central, so may be a blocker for Mark on the the proposal.

MM: Yes. Not objecting to stage 2 on those grounds.

PDL: Making claim of single namespace, as in "we'll have a single namespace", and define what looks like with separate proposal would potentially address point 1) sufficiently.

DE: I think we're getting into weeds procedurally. Need to break down issues and have incremental process forward.

MBS: you have section on module resolution, loading chain. I don't think needs to block anything for stage 2. In node since loading is not specified. Is your design flexible if we find we need to make changes to work with our implementation?

MHK: Yeah i think we can be flexible

MBS: Want to make sure we work together on this. Need help and support on this. Would be a stage 3 blocker if we can't make that work.

MHK: Important to accommodate other loaders.

DD: Need to work out semantics before stage 2.

Explicit requirement for stage 2 is that namespace be worked out.

DE: can we try to come back to this tomorrow?

YSK: let's talk about this during break.

MHK: One more thing. Calling this std lib might be confusing, since tied to modules. Propose to rename it to builtin modules.

YSK: Do we have consensus?

#### Conclusion/Resolution

- Blocked, on todos #1 (namespace) and #3 (access in classic scripts). Tentative agreement on how to solve todo #2 (add normative language requiring hosts to allow polyfilling, but do not specify the mechanism.)
- Renaming to built-in modules.

## A JavaScript Commons

(DE, DD, PDL, AVK)

- [slides](https://docs.google.com/presentation/d/17M6bwZmgBH4iJbpV7Q126at24q58llSyhxN_oC2Nfa0/edit?usp=sharing)

AVK: Why a commons. Proposal for shared namespace. Building on work apple presented. See "why a commons" slide.

AVK: Slide "historical success". Things move around between specs. Still ongoing work. EventTarget in node.

AVK: Dangers of putting commons in global object. See slide "dangers of the global commons". Most clashes between user code and standards.

AVK: slide "who is interested in a commons?" Lots of people. We're presenting to see if there's interest from TC39.

AVK: Does not preclude domains could still have their independent ns. Commons is to collaborate across.

DE: how can we work together on governance?

DE: IANA has lots of these. A modern version would be a GH repo. Could make a PR that you're looking into using a name. That way people looking for same name could get in touch. Heads-up to ecosystem that there is discussion, Eventually consider names allocated (they have tests, etc.). Registry would help us collaborate on what names are used. Don't just mean web browsers, includes other envs, like server envs, IoT, etc.

DE: Example: "lib:" prefix. (see slide). Ben looking into uuid proposal. All sharing ns for different purposes. Often things migrate from one env to another. Important for folks to run things in server envs.

DE: Slide: neutral home. Important for collaborative governance. Not part of one particular committee. Some early discussions with OpenJS Foundation, W3C TAG, etc. From Apple, we've heard a lot about the importance of communicating to JS developers about those things. Discussing with MDN documenting similarities between envs. They started to include things like node for JS features.

DE: Repository organization slide. Starting point for this possibly. Open to go another way. Scope of this repo (https://github.com/littledan/js-shared-interfaces) was initially broader.

DE: Example of modules: just a markdown file. Can list ideas for modules. If some implemented and shipped. Kv-storage actually is implemented, but we need multiple impls before it'd be marked as allocated.

DE: let's work together on this.

DD: Really excited about working together in a commons.

MM: lot of use of word commons as positive notion. Encourage people to read Elinor Ostrom's work, Governing the Commons, to understand what she meant by that word. Polycentrism as overall framework. Commons need to be governed. Need governing mechanism. High overhead. Commons only scale up until overhead gets too strong. Primary means of gov: admission control? What we're talking about directly impact admission control. All reasons why you want to the unify namespace here, apply in another case for which problems are clearer.

MM: Take moment as an example: hypothetical history if project had started after we created ns. Started as group of implementers doing work outside of these committees. What namespace would they label themselves with? Presumably not one of the namespaces that was in the commons coordinated between these two committees. But the moment that moment wanted to propose themselves as part of the standard language, there's the same coordination-migration issue that you're trying to mitigate here.

DE: You're scaling about. These questions are important. Talking about scaling. How control as things get bigger. Don't have option to reduce complexity for JS programmers. These things are going to happen. We can coordinate between them better. Two options: exposing internal organizational complexity to our users (JavaScript developers), or not exposing it. Option we don't have is admission control.

MM: I didn't say "not add new libraries", I said "not add libraries by an approval process"

AVK: Just want to clarify: don't see moment.js as implementers. Implementers: node.js, FF, chrome, etc.

MM: The term "implementors" has me confused.

AVK: Momentjs not a full standard with multiple independent impls.

MM: It is just a JS library, we are considering it for advancement, it's already reached—

PDL: No, that is exactly wrong, we are not considering moment.js for anything. We're considering temporal. Based on experience we got from moment.js. Working towards getting multiple diff implementations.

MM: Good, thank you, good clarification. Then, one of the devs out there, implement something from which there are good lessons, brought the lessons & proposal to the committee which is then advancing, and the thing that would get standardized is distinct from the thing that originally grew up under another name. I propose that hosts—

DE: Don't think we should apply that pattern when something is in host and we want to expose in language. ArrayBuffer and typedarrays big benefit to have across envs. Making a bunch of changes to that spec wasn't a benefit. Spec in tc39 still not implemented. Browsers don't throw exception on detached typed arrays. For web compat if we changed names we'd have to maintain both. Instead we should work with other standard bodies.

MM: I'm all in favor of working _with_, having us all get along, is a great ideal. We should all cooperate and get along. The things that are de facto part of JavaScript, host independent, and should be codified as part of universal javascript is definitely something we should consider codifying as part of javascript. That is why this committee exists.

DE: That's the idea of this, but instead more gradual. Gradually document more and have these comm channels where we figure this out. People making new stds can get in touch with folks working on those envs.

MM: So do we agree that if there's a shared namespace, the fundamental governance rule of admission to this shared namespace is unanimity over all organizations sharing the namespace?

DE: We'll have to work out gov.

DD: But, no, we don't agree on unanimity. That is the opposite of what is presented in the slides.

PDL: control of admission is not an option. The moment import maps ship, no control over namespace. No more admission process. Better off to collaborate proactively.

DD: And to be clear, there is a lot of interest in this lack of admission control. And we're asking if TC39 wants to participate in that commons.

AVK: There is admission control right? It has tests and multiple implementations. Quite a high bar for it to be part of that thing.

DD: true, I was using "admission control" to mean Mark's "unanimity" requirement. There is indeed a high bar for joining the commons.

PDL: The difference is that, it's not a group of people saying "you can come in or not", it's admissions based on some criteria.

DE: We have all been more towards open standards world, instead of standards based on what orgs pay money too, e.g., we have invited experts in TC39.

KM: Just a discussion topic?

DD: Hoping it may help unblock other proposals.

KM: Seems should be part of builtin modules? Wonder why this is meant as a separate discussion.

DD: Not independent, came directly from builtin modules discussion. Instead of making points in queue. Put together some slides.

DE: Not meant to be competing proposal. Working together.

LEO: I think we would have a better discussion if this had been proposed right before the modules proposal.

DE: We proposed that.

LDBN: What I feel here is I don't know how this is all being discussed. Not seeing coordination between proposals and these feel like the same topic. Process here seems confusing.

YSK: did discuss before two proposals which order to do them in. Decided to change it around. Goal here is to support the builtin modules.

DE: Been discussing this with builtin modules champions [at lunch today]

MLS: Not discussed with builtin modules champions [discussed but did not see slides].

DD: These are not dueling slide decks. We saw builtin modules proposal, thought we need to talk about this.

LEO: like to see 2 diff proposals, so we can extract better max/min on both. More constructive discussion in last presentation if I knew about this. Coordination here has failed.

AVK: what was presented before was the infra, this is for namespaces alongside that for governance, not conflicting.

DD: Want to apologize if messed up on the ordering. We're sorry.

LEO: No need to apologize. If I knew about this would have a diff perspective discussing builtin modules.

DE: Next steps: would be great to having you all participating. Seems interesting for collaboration. Would be great to hear more from builtin modules champions.

DD: PDL is here and would all like to hear from folks.

SYG: asking if tc39 wants participation in these commons. Did other bodies move forward? Purely hypothetical: if we say no, do you think it's going to happen?

DD: yeah then shared between browsers and node, etc..

DE: don't think we have consensus within the group presenting. Hope this is way we can make builtin modules happen. I think we can do this in TC39.

SYG: This proposal would you come to tc39 for the name?

DE: Each group (TC39, Node, web, etc.) proposes names to the shared repository.

SYG: So may have multiple implementations and then could have multiple names?

PDL: No it's (not?) all about multiple venues and corporations. If you were to drop todo 1) as something you need to put into builtin module proposal and replace with something like this more open more collaborative, then can we move builtin modules proposal to stage 2? Outcome I want out of this is ask that question again.

DD: Yes, if we could move to a single namespace, I would love to move Builtin Modules to Stage 2.

PDL: Question comes back to champions/proponents of that proposal. Is than an option to do?

MLS: This is our todo 1), believe at stage 2 we need to deal with it. Think it's premature at stage 1. First time we hear about your proposal.

DE: happy to hear more with more time.

#### Conclusion/Resolution

- The committee does not have consensus on this particular model, and will continue to think about single vs multiple namespaces, and governance models for the namespace(s).

## Optional Chaining for Stage 2

(Justin Ridgewell)

- [proposal](https://github.com/tc39/proposal-optional-chaining/)
- [slides](https://docs.google.com/presentation/d/12Xtuffo57XSP6lJ4zQ30aHh5LKBYzZxg6cA84gbDLm8/)

DRR: I work on TypeScript team. Been helping the proposal. Just from TS perspective. One of the longest-requested features as Issue #16. Most upvoted feature of all times, 520 upvotes. People saying "when will you do this?". Think it will benefit JS community. Let's make this happen.

JRL: (In nutshell slide) Desugaring of optional chaining. Including _b hidden spec part. Not going to reevaluate a.b in second example.

JRL: Short circuiting: kind of a core feature. Nice feature too. (Short circuiting slide) If a is undefined, don't do a.b.c. etc. Just stop evaluating chain, return undefined. Not error suppression mechanism. (Points to examples on slides).

Same with the "d" example. E.f is going to throw. Didn't specify optionalness on e ref, so e.f is going to throw.

(Optional computed access slide)

JRL: Why current syntax? Everything else sucks. No other good alternative. Going to stick to ?., ?.() and ?.(). Best we can do now.

JRL: (Optional call slide). Diff than short circuiting and diff from computed access. (Optional call slide). If a is nullish don't invoke a, if not do it. Using a bit of pseudo code in slide because can't do it in actual JS. It's not using Funciton.prototype.call, going to call the `[[Call]]` method we have in spec.

JRL: Optional call: can't progress without. Examples include Iterators that don't need to have a return method. If it does we should invoke it so that we can do cleanup.

JRL: To explain the difference in the short-circuiting in the optional call, it behaves very similarly to the deeper member access.

If `b` ref is nullish, don't want to invoke it. Not continue the chain (dot c off the return val of b method).

The same way that if the `b` property were to be nullish, we would not get the `c` property off of its get value. In optional access, we're testing to see if the object is nullish, but in an optional call, we're checking where the method can be called.

JRL: This is a little different then optional access, though. Optional access checks the object for nullish, Optional call is testing the function.

JRL: Can we go for stage 2?

YSV: Don't hear any objection, no objection online.

LEO: Got confused on the optional call operation. Forgot how you named it. Optional call. Looks like you're chaining to an expression in (). Don't know how to do investigation. This specific desugaring might be more confusing. Ok to discuss this during stage 2.

JRL: I agree. One of the reasons I tried to remove it. But there were objects that it feels incomplete if we don't include this. Not a better syntax for this particular one.

LEO:  Won't have fully convincing arg today, but optional feels it should be separate discussion. Can be discussed async.

MM: saying on behalf of Waldemar Horwat. Received email before the meeting. Wants optional call to be part of this. Would object if not part of this. Don't think I need to go into rationale since no objection.

JRL: Would like to see rationale that Waldemar had provided later.

DE: discussed optional call before. Waldemar mentioned this rationale 3 times. Rather have this proposal continue rather than have argue about optional call. Proposal gives lots of benefits to JS programmers, if you're confused about optional call, you can look it up. People can learn about it if people are confused.

LEO:  If language is getting harder to learn, I think that's a bad point. We should have a separate proposal. Don't think I have energy to engage.

DE: that's what some of us to in that case, giving up.

LEO: That's sad.

DRR: Still incredibly enthusiastic about this proposal. Still think optional call is nice to have. Would still like to hear more to know if we can make it better. Still think it's a huge benefit, let's keep that in mind.

JRL: Waldemar actually reviewed grammar and spec's semantics.

#### Conclusions/Resolution

- Stage 2 acceptance
- Reviewers:
  - DE mentoring RKG, BCE.
  - Find another one before the day

## Nullish Coalescing for Stage 2

Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-nullish-coalescing/)
- [slides](https://docs.google.com/presentation/d/1Jyu-IZc2bVtdrHrK-pvvzwx0C7y2aUwoP57i1E_6QJY/edit#slide=id.gc6f73a04f_0_0)

JRL: Strict equality check for null and undefined on lhs if evaluates null or undefined, returns rhs, otherwise return lhs. (see first slide).

JRL: One thing we need to talk about: operator precedence. (See operator precedence slide) Most people are already familiar with operator precedence since people used to that with C language. Introducing `??` operator, now looks a bit strange.

JRL: Open question: leave it as same precedence as `||`. Means if you update from `||` to `??`, no diff, parses to same thing. Or we lower the precedence for `??`, means that both `||` and `&&` would bind tighter than `??`, which would flip the example in slides at line 11.

JRL: Or we can punt on issue entirely and require () when you mix ?? with conditional operators. Makes it explicit what intention is. Hoping we can resolve this right now in plenary or before end of tomorrow so that we can get to stage 2. Know there's going to be discussion, so please let's have that.

KG: requiring () helps, but wouldn't solve problem. You can have binary expression on lhs `a && b ?? c`. Going to be hard to forbid with rules, still not clear if you don't know precedence what that is.

JRL: Same than any other binary operator.

KG: Yeah, you have to know precedence rules.

JRL: Only resulting in ambiguity with other cond operators.

KG: You can't require parentheses around there

JRL: You can

JRL: suggestion here is if mix cond and ?? on either side of ?? you'd require () on side with conditional.

KG: No matter what we choose here, prettier will choose to rewrite that

JRL: Kind of OK with that. I work on amp. Requires () when you mix those.

MM: Also want to put in favor of requiring (). No motivation for middle option here. Mild form of requiring () I'd find acceptable if either side is an ||, then you require (), that way ?? still conceptually same precedence as ||. Can't mix operators without parentheses.

JRL: OK, don't have preference either way, seems same end result.

YSV: Any other questions or comments?

DE: This is good for Stage 2. Suggest leaving same prec as ||. Expect lots of people to update their code from one to other. Would rather not go with exponentiation decision. Should just make a call on precedence. Shouldn't hang ourselves up and speculate too far in the future. Can leave this as open question for stage 2. Stage 2 is where we decide. We can flip flop on this.

JRL: Ok

MM: reply to DE. When ambiguity on how code get read, going to surprise people. Worst kind of surprise is when code and runtime silently other than you'd expect. Next is when code at runtime throws an error. Most pleasant is when code during dev gives early error. Normal programmer response: didn't compile, don't know why, let's try something else. The something else is when what they understand of the code is what happens at runtime.

RBN: C# precedence in C#  '&&' and  '||' both bind to the null coalescence operator. Became confusing because ** doesn't work the way it looks.

Justin: Can I go for stage 2?

YSK: Got thumbs up in the room, anyone from remote?

Justin: Grammar was reviewed by Waldemar, and it's only 10 lines to begin with.

DE: Question on whether reviewers should be in common with previous proposal.

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers:
  - RKG
  - YSK

## Status update on non-JS module types (e.g., JSON, CSS, WebIDL)

(DE)

- [proposal](https://github.com/tc39/???)
- [slides](https://docs.google.com/presentation/d/1w8jWjD41htD7VxOejFqiHi6uGgHVWtZ_XmgFxgKkS7Q/)

DE: builtin modules who knows if we'll have them? (Goals slide) How you can get involved. If you are JSConf EU you heard how to get involved in tc39. Want to talk about how to get involved in other venues.

DE: types under dev. See slide.

DE: JSON modules: issue 770 w3c/webcomponents repo. Submitted by AVK

DE: Myles opened issue in whatwg/html. Been able to have nice discussion about how we proceed. Wrote PR against html. Number of people helped me to get to a point where this can be a proper spec.

DE: Although done in HTML spec, interest from other JS envs. MBS implemented it in new Node.js module implementation. Semantics: single default export of module, single mutable parsed json file. Instead of Test262, for html and other web spec, we use web-platform-tests. Now Microsoft is working on implementation. Intend to implement. Lots of stuff in V8 to make it happen

DE: Should we ship JSON modules in TC39? Core very small. Spec text is partly in web IDL and partly in HTML living standard. Could eventually put in TC39 if useful across envs. Also fine to copy since it's tiny.

MM: favor for fully in TC39.

DE: to clarify fully would be this small part? Only core in TC39 is parsing the JSON and making it a default module record. Gotten buy in from Mozilla, microsoft and chrome and already merged in living standard.

NBS: lot of plumbing for loaders not specified. E.g. node.js, things that could be specified here. Not sure how we can specify the whole thing here since no concept of fetching files from disk, etc.

DE: The fetching is still in closed environment

DE: css modules: discussed in webcomponents repo #759. Idea: single default export, not attached to a document. In some modules systems (e.g. webpack), importing css actually applies to main doc. Here would be detached. This PR makes that be a default export thing.

DE: Module type that would always be defined by headers. Would not make sense to move to TC39. Right now blocked on ??? discussions.

DE: WASM modules: they have imports and exports, idea to stitch it up to JS modules graphs. During evaluating phase, when WASM modules instantiated. During link phase not present yet. Some spec text, and PR to integrate it into html. Need that PR to cover: how do you fetch it, how do you define mime type, things like that.

DE: It's implemented in npde, following semantics that match these JS specs. And in WebPack as a PR. Stage 2 WASM CG. Goal to land it in WASM CG JS API. At state waiting implementations. Need one impl to move to stage 3. Thing about wasm modules, people have already been supporting in tools with dff semantics. Benefit of aligning ecosystem.

DE: HTML modules: don't know much about it and people familiar with it left the room so I'll skip over it. Microsoft leading here. Lots of discussions in issues.

DE: WebIDL modules, a language to help to define objects, coercions and methods. Like to talk about this in more detail.

DE: Draft of how this would apply to kv-storage. Furthest along draft for builtin modules. Collab between moz and igalia. Currently in PR. To land need multiple impl buyin on the downstream spec. WebIDL all about establishing notation, and notation expresses conventions for structure of objects.

DE: I'm wondering, can we use this as a basis for a new common set of conventions in builtin modules? Bonus, this wasn't in the outline! Right now we're in this kinda uncomfortable state: some conventions used by us in TC39, some used by certain web specs, some others might be used in the external ecosystem.

DE: Wondering if we could unify shared conventions.

DE: So I want to suggest that going forward this be a place we start with having an idea. Maybe we use non-enumerable methods? Special time, opening new space and can establish this convention. Same realm vs x realm brand checks. Right now internal slots, kind of universal across all diff realms. If implement library via classes with private fields/methods. Those going to be for individual evaluations of that class. Maybe should transition to same realm brand checks.

MS2GR wrote PRs against WebIDL for use here. [see slide for example]

DE: Maybe should be working on establishing new conventions in tc39 in coop with webidl fro builtin modules. Maybe use WebIDL for builtin mods in the future?

DE: There are a couple of places HTML leaks into web video. We could get basically the same thing with some unification.

DE: If want to get involved, can contribute on GH. All in the open. [See slide "Getting involved".]

DE: I think we can engage here and work together, and we can make a great future for modules.

JGR: asking about is anybody on global for adding JSON modules in the language.

DE: elements we need: synthetic module record from apple's builtin mods proposal. Next step: figure out how to standardize that proposal and build on top of that.

JGR: No reason they couldn't go in parallel

DE: Could go in parallel. Not going to work on that right now. Small editorial change in my perspective. If someone wants to work on this, happy to help out.

MM: Your synthetic module records comment earlier might have answered my question. People new defs of new mods types: do they have what they need in terms of hooks from tc39 so that they can do it in way that conforms to tc39 spec?

DE: The way DD wrote the synth mod spec is that they are just other things that have some exports, they don't have imports.

MM: If they don't have imports, I don't understand how webassembly fit in for example.

DE: Wasm is not synth mods they are cyclic mods. That's why we defined them. May be useful for html modules as well, if we decide.

?? Anybody thought enable JS code to define new mod types?

DE: Not heard prop for that.

KM: Sounds a bit scary.

DE: WASM modules needed to run some stuff async. On some WASM impls some compilation work happens when modules instantiated with its imports. Important enable compilation happens in parallel, off main thread for multiple mods loading, Got involved in top level proposal, so that JS has something that matches WASM. Could be done with normal JS code. If we encounter edge case with specific module type, we can consider adding into language.

MM: Thank you.

DE: The instantiate value hooks are pretty broad. I'd be scared about (exposing?) those.

JRL: How do you decide if parse module with JSON or JS?

DE: Goes by the mime type. In http there is text/javascript or application/json. Different from classic script types. In modules the mime type is strictly checked giving us an extension point.

JRL: And if you have no mime-type, does it default to JS?

DE: No, it's just an error. The mime-type is sent by the server, the server often determines MIME type by file extension.

DE: Mime type is set by server. Based on the file it's serving. Why Bradley worked on registering mjs in IANA.

JRL: Is this covered by this proposal? Or is this an out-of-band thing we should talk about afterwards.

DE: This whole deck was stuff going on outside of TC39 is covered by html PR. Strictly defines what mime type is. Discussion on what should be in mime spec or html spec.

JRL: So, i definitely misconfigured a server and not sent the mime-type down. What happens if I don't have a mime-type? I really hope it will assume it's javascript

DE: it's going to call window.onError. Can't do anything. Haven't tested that, just what I think it does.

YSK: Anything you're looking for from the committee.

DE: No, thanks for the discussion.

#### Conclusion/Resolution

- Nothing we're looking for.

## Promise.any

(Kevin Gibbons)

- [proposal](https://github.com/tc39/proposal-promise-any/)
- [slides](???)

KG: Ready for stage 2. Like Promise.all except short-circuits when any input value is fulfilled. If none of them fulfilled, you get new type of error, AggregateError, also added as part of this prop. Property with array with all errors.

KG: An implication of this is that if you invoke Promise.any with an empty iterable, you get a Promise that rejects with an aggregate error whose error property is the empty array. There was some discussion, but it kind of falls out of the rest of the spec.

KG: Spec text, although not req for this. Pretty much complete. Errors as 1st param instead of second. Was discussion on that.

KG: I'm not asking for Stage 2, but I would like to ask for reviewers for stage 3 so this can move quicker in the future. Also, if you have any feedback, now's a great time

SGN: only one change since last meeting. Update on result properties looked up in constructor. Apart from that, spec same from last meeting. Can we get stage 2?

KG: Might ask for stage 3 next time anyway.

AKI: Was added to agenda 3 hours ago, so won't allow it.

KG: Presenting on behalf of MB, by the way.

NTE: Huge thanks to JGI for hero-ing the notes today! (Applause)

#### Conclusion/Resolution

- Reviewers: POK, LEO
