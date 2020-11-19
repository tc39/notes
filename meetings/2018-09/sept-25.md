# September 25, 2018 Meeting Notes
-----
Waldemar Horwat (WH), Mark Miller (MM), Till Schneidereit (TST), Michael Ficarra (MF), Michael Saboff (MLS), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Chip Morningstar (CM), Mariko Kosaka (MKA), Jordan Harband (JHD), Dave Herman (DH), Pieter Ouwerkerk (POK), Leo Balter (LEO), Aki Rose (AKI), Kevin Smith (KS), Peter Hoddie (PHE), Godfrey Chan (GCN), István Sebestyén (IS), Bradley Farias (BFS), Adam Klein (AK), Richard Gibson (RGN), Maggie Pint (MPT), Mike Murry (MMY), Mathias Bynens (MB), Jory Burson (JKB), Keith Miller (KM), Mattijs Hoitink (MHK), Kyle Verrier (KVR), Justin Ridgewell (JRL), Katie Broida (KBA), Randy Luecke (RLE), Daniel Ehrenberg (DE), Sathya Gunasekaran (SGN), Rob Palmer (RPR), Kevin Gibbons (KG)

Remote:
Brian Terlson (BT), Rick Waldron (RW), Caridy Patiño (CP), Brian Warner (BWR), Yulia Startsev (YSV), Jason Williams (JWS), Ron Buckton (RBN), Ross Kirsling (RKG), Thomas Wood (TWD), Isaac Durazo (IDO)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/09.md)

## 1. Welcome

RJE: (housekeeping)


## 3. Agenda Scheduling

RJE:


#### Conclusion/Resolution

- ?


## 4. Approval of the minutes from last meeting

RJE: Any issues with the minutes from last meeting? (Silence.)

#### Conclusion/Resolution

- Notes from July meeting approved


## 5. Dates for next meetings

RJE: November meeting at Apple. From 2018-11-27 to 2018-11-29 in Cupertino, CA.


## 7.i ECMA-262 Status Updates

JHD: We created [PR 1218](https://github.com/tc39/ecma262/pull/1218) to update to Unicode v11, the latest Unicode spec. There's been other PRs as well, most notably [1298](https://github.com/tc39/ecma262/pull/1298) and [1286](https://github.com/tc39/ecma262/pull/1296). We've been meeting every other week to go through the queue, we can continue to not make decisions there but just go over review questions. For ES2019, we're about to lock down. You should start stating if you are aiming in your proposal to be part of ES2019, but if it is going to be Stage 4 by November, it will automatically be considered for ES2019. If it doesn't hit Stage 4 by November, please make a special point if you want it to be considered for ES2019.

JHD: BT will be stepping down from the Editor Group after ES2019.


## 7.iii ECMA-404 Status Updates

RJE: Anything to state about Ecma 404?

CM: Nothing to say.


## 8. Updates from the CoC Committee (15m)

(Jory Burson)

- [slides](https://docs.google.com/presentation/d/16cO1w3PZqCew0LLtYmAw344C3TmKlWr0sDkbe9txBmI/edit?usp=sharing)

JKB: It's good to take time each meeting to introduce new people and review our CoC guidelines. The goal is to ensure that our culture is aligned with the values that the CoC encourages. The TC39 can be seen at [https://tc39.es/code-of-conduct/](https://tc39.es/code-of-conduct/).

JKB: We meet every other Thursday at 1:30pm EST. If interested in joining, please contact us.

JKB: We're building out our "playbook", so there are guidelines to respond quickly if there are CoC issues. We currently have two plays, and we're always taking recommendations. We have a lot of discussions to make sure that our processes are aligned with the CoC. We've only had 4 moderation requests so far (2 blank emails (spam), and two unrelated to TC39).


## 9. Report from the Ecma Secretariat

(István Sebestyén)

IS: (Presents slides from TC39/2018/044)

TST: Do we have any analytics about the spec accesses? Since many people appear to access the old versions of the spec, we should investigate where these people are coming from, and ideally direct them to the latest version.

IS: We do have that information, and we can look into that. If you could help me with that, send me an email.

KM: Can we put something at the top of the specification to make it quite clear you're looking at an old version of the spec?

IS: It should be quite clear, if you're not completely stupid that it's an old version. Actually if you come in via the Ecma Website it is very clear what is the current version of the ECMAScript standard and what is "historic". But it is true also if someone has just an URL to an old edition of the standard then just that edition of the standard will be shown or downloaded but there is no information that e.g. "you have reached an older edition of the standard, for the current one look it here". I will ask our webmaster how to solve this simply.

KM: Yeah, like something like "This is an historical archive, click here to see the latest version."

IS: Yes, I understand now, I think that's a good idea.

## 7.ii ECMA-402 Status Updates

- [slides](https://docs.google.com/presentation/d/1xmwZPjAAmT2D7PQSH_G9Y62PhPXSNDzsX38qVuv2upo/)


DE: We have a monthly phone call about Intl, please contact me if you want to be involved. We have a couple of proposals we want to talk about today. First, Intl.RelativeTimeFormat, mostly implemented in Firefox and V8. There's Test262 tests, but no real updates since last meeting. Some big news on Intl.Locale, ChakraCore has an implementation out right now; there's one semantic change since last time: it now lets you parse and modify Locale text; we've cleaned up the function to let you use a boolean. Intl.ListFormat supports conjunctions, and now we have Test262 support upstream, and V8 implementation.

DE: At the previous TC39 meeting, we discussed some proposals that progressed to Stage 2. Intl.NumberFormat, for example.

DE: Does anyone on the committee want to do a Stage 3 review? Sathya

AK: Wait, don't we need more than 1 reviewer? We could post something on the reflector to ask for review.

BFS: We can't have all the editors review things.

AK: I would volunteer, but Sathya and I are basically the same person. I would encourage people who are interested in Intl being a part of Ecma to be somewhat more involved in that group. If this is something that you're interested in getting.

KS: I'll also review.

DE: Next we have DateTimeFormat.p.formatRange. We're not ready for stage 3 at the next meeting, still working on it.

SGN: I can review again.

KS: Sure...

DE: There's always opportunities to be a reviewer or to contribute to Intl, so please contact me if you're interested in getting involved.

#### Conclusion/Resolution

- SGN and KS will be reviewers for the specs for Intl.NumberFormat and Intl.DateTimeFormat.prototype.formatRange().


## 7.iv Test262 Status Updates

(Leo Balter)

- [slides](https://docs.google.com/presentation/d/1LgxaVZcj4IAIKDtVObwA4HN-w9TlCSFWDGOi8m2xw80/edit#slide=id.p)

LEO: Just a quick recap from the previous meeting and summary of new things since last meeting. We've added 1400 new test files—4041 files changed.

WH: [Referring to the slide showing ~800,000 insertions] What's an insertion?

LEO: New lines of code. Thanks for all the contributions. We've made a bunch of small fixes and additional test coverage. (Presents slides). We've finally set up a bot to import tests from JSC and V8. The curation process of reviewing new tests from JSC is long, but very exciting work. We have 400,000 new lines of code to review. Moving forward, we'll be finishing class fields and methods with reviewed coverage, and continue this test curation work. Specifically, we have to finish coverage for Dynamic Imports, and we'll coordinate with implementers. As always, look at the github repo here: https://github.com/tc39/test262

## Announcing a Tests Reports Project

(Isaac Durazo, Katie Broida, Leo Balter)

- [slides](https://docs.google.com/presentation/d/1PReJMVRRlh6sL5R0P2cVITGPAGMSwAol0DIkMQxzQhU/edit#slide=id.g42aeb5f1bf_1_45)

LEO: Next, I'd like to present the Test262 Results. Out of ~60,000 executed tests, how do we measure how compatible the web is?

LEO: There's Test262-harness and eshost project started by BT, which can quickly run Test262 tests in multiple JS engines. Also, JSVU has been created by MB against pre-compiled engines, which has been an enormous help.

IDO: Here's Web Platform Reports that we've been working on at Bocoup. There are other tables like caniuse.com, but they have their own rules. We decided to build WPR to use the Test262 suites as the source of truth. Designed for devs, implementers, automation tools, TC39.

KNB: Let me demonstrate how the website works. This is a React site on AWS, we use server-side rendering and lazy-loading. Since there are so many test results to show, we want to chunk it up and lazy-load it. We have a preliminary version of this site before it launches next week at http://webplatform.report/.

DE: How do you execute the tests? There's Test262-runner, but for V8 there's a runner that uses Python to turn on flags for some features... How do you do that?

LEO: Just doing a quick run from what is provided by the engine. Planning to expand beyond the regular engine.

DE: This is really great work. I'm very happy with the progress you made and the visualizations.

BFS: This is a very similar name to the Web Platform results? We also have Node which is not really part of the Web Platform either.

LEO: Naming is hard, this is the best name we have so far.

JRL: Babel has presets which find all the things that aren't supported in Chrome 60, for example, to allow users to compile JavaScript bundles knowing which lowest-level features are available in the majority of the web. Is there a way we can use these tests to determine what is the lowest browser version that added support for a feature?

LEO: We don't have it yet, but this is a good idea.


## Introducing: Ad-hoc TC39 History Group - Archival data and you!

JKB: One of the concerns of the secretariat is collecting all the documents that we are generating and archiving them. AWB is working on a very thorough paper on the history of JS over the last 20 years. We need this because we're required by the WTO standards requirement (which is a Swiss law). It mitigates patent claims. Records the rationale behind decisions.

JKB: Why are we doing this? The current state of affairs is not great. We have archives on members.ecma-international.org, but it's kind of decentralized, and not super accessible. There are individuals still on the committee that have information in their brains that we should record while they're still active on TC39. We have a lot of varying kinds of documents, from PDF to git repositories to slide decks. We need archival documents of our work output. We'd love any of the proposals you're working on. Working on document indexing, right now they're just sequentially numbered filenames, which isn't great. We want to self-host them outside of just ECMA International's website.

JKB: Please share your presentations with us. Export it, send it to the archival group. Gather any missing documentation if you know about it. We'd love for you to join our next ad hoc chat, if you're interested in this work. We'd also like to ask the committee about adding an archivist.

KG: How do we go about joining the chat?

JKB: On the reflector!

IS: Thank you for doing this work. It would be nice also to have early photos to contribute. I also have only an empty cognac bottle, which I took now at home as I have "inherited" from Jan van den Belt the empty bottle from the dinner at the TC39 meeting in 1997 where they came up with the "ECMAScript" name, which they thought would be provisional. Unfortunately early photos of TC39 are analog images, that someone took from the group but now it is only in paper version which needs to be scanned and shared. I have only pictures starting from 2009 when I myself started to visit TC39 meetings.

DE: This is really great and very important work. I am not against an archival role at all, but it's important to mention that our bylaws require us to have a secretary. The notes related tasks are related to this kind of archival work, so I was suggesting that maybe these are linked via a committee or something.

JKB: There's also precedence of a historian role too, so I think it's also needed.

DE: As you're formalizing roles, you may also want to make sure that we have someone explicitly signed-up to be the secretary.

WH: What should the conclusions of this presentation be? Are you asking us to have an archivist? Or are you saying you're going to ask that?

JKB: We are going to, but not today. The three of us continue to look around and explore how that role would be defined. I would like you to be a part of that group, given your history with this committee.

WH: I am interested.

JHD: What do we do to ensure that some of this data which is not meant to be public does not enter the public domain?

JKB: A lot of work is being done to make sure that the confidentiality of the documents is being respected, especially in the context of AWB's work.

IS: For all of the documents that we are collecting are at present only on the Ecma internal website—only for members open. So we really have to decide what are we putting out for the public and not. At the moment, we have received from AWB several documents in the last week or so several requests to duplicate documents in other TCs. Over the 20 or so years, some specs bounce around between the TCs, which has its own unique issues for making public. On the other hand, the small book between AWB and Brendan E. is really like a history book, so it doesn't contain, as far as I can tell, any controversial content. It's absolutely a great draft and offers a mostly historical account. It is fun to read it.

DE: I wanted to reply to JHD's comment: the only thing I would mention to keep confidential/internal only is just the CoC. Everything else, is actually just usually private to ensure discussions go quickly—not to be private indefinitely.

JHD: If we make it public later, that's a separate discussion. But there are plenty of things in the Reflector that I don't think should ever be public.

DE: Sure, I don't really disagree, but it's good to make things as public as possible when we can. If we keep things on Ecma internal, that would lead to a suboptimal outcome.

AKI: Code of conduct archive shouldn't be public.

YSV: Archiving the role of management, we'll talk about this in our presentation too. Someone dedicated to archiving so the responsibilities are clear would be good.

YK: We shouldn't make CoC public. Maybe in 50 years.Consider the CIA, if they can release information about the JFK shooting, for example, I think they'd want to make that public, so you can imagine wanting to make anything public eventually. (laughter)


## ECMA Fellows Nominations

RJE: Short discussion now, and hopefully by Thurs we can wrap it up. Right now it's BE and AWB for nominations from TC39.

WH: Let's do it.

#### Conclusion/Resolution

- We'll come back on Thurs.


## Normative: allow ArraySpeciesCreate to create non-arrays

(Kevin Gibbons)

- [slides](https://docs.google.com/presentation/d/1c8r7PjtioCbO_mHLH_osgiFigZCmlDRpjpouOQauIw0/edit)

KG: `Symbol.species` is used to create derived objects for functions that create derived objects. Eg, `[].slice`. For instance (:drum:), copying `slice` to a new class should create a new instance of that class. But it doesn't. ArraySpeciesCreate is different than normal `SpeciesConstructor` because arrays need to be magic and have this cross-realm behavior. The cross-realm stuff is not useful for the ArraySpeciesCreate stuff. It must pass an isArray check if the array will use `Symbol.species`. AWB says this is a bug in his spec text. This change adds support for directly using `Symbol.species` if it's there, else do the normal Array exotic instance creation. This is how Symbol.species is supposed to work. But it affects perf of everything that tries to call Array methods on a non-array (because it now has to look up the symbol on the passed instance).

DE: We all put a lot of work into implementing Species implementations, like Bocoup, and V8... It was hard to make out the motivation then, so I'm wondering how we should go about documenting rationale and harness all the energy people put into writing edge cases in tests early on, (rather than someone happening upon it years later) then we may be able to develop things better in the future.

KG: I think the stage process helps with this. Array.species was originally quite the feature in ES6 and snuck in as a bug fix.

YK: Probably good to distinguish between consensus positions and whether some decision was intentional to begin with.

JHD: If we do change this to only work for species check?

KG: Only `RegExp.prototype[Symbol.split]` doesn't do a brand check, so it would only be necessary there.

JHD: Should those brand checks exist?

KG: They exist for other reasons; their behavior won't need to change. Only `RegExp.prototype[Symbol.split]`, but maybe we don't want to add that.

YK: This isn't the first time we've discussed species. We really need to decide what the point of it is.

KG: This will be relevant in the Set methods proposal. If species is Something we care about, it'd be strange if Set doesn't use it.

BFS: What about don't break the web?

KG: This would only affect things that have Symbol.species and you use an array method on that. Typed array would break? Maybe it'll just give you a TypedArray?

TST: Don't see the value of the change compared to the downside. There's a real perf cost, web compat risks.

YK: But this might mean we'll stop caring about species. We should figure out why we're doing this.

TST: I think it's a good idea, and I'm curious what the outcome would be.

SGN: I agree with TST, from V8's point of view, this isn't worth the perf cost, I think this is a such a niche case. But I also agree with YK's point, that we should decide on why we're doing this.

DE: Agree with them, we should consider not further expanding subclassable builtins. This is very connected to subclassable built-ins—it was never really clear to me what the motivation was, so I recommend that for the next steps.

TST: I don't think that's true. We spend more time on optimizing species then subclassable builtins.

KG: Perhaps we can have an issue on GitHub to get implementers involved? How do we feel about this is only OK for subclasses?

YK: I don't think we should try to come to consensus at this particular time for set methods. As much as no one wants to own this species discussion, we should really have it now.

LEO: If we work together to get the tests...

YK: I don't think we want to make this change—the next steps are to identify a rationalization for what species are for in JavaScript.

AK: In abstract, this seems like something the editors should take on, since this appears to fall in the domain of the editors.

BFS: I would say the role of the editorial board is not to make decisions on behalf of the committee, but to help organize and prioritize the proposals brought forth to the committee.

BFS: Knowing what the spec should say is not something we can do.

#### Conclusion/Resolution

- Rejecting this PR
- Needs further improvement and clarification on the rationale for the change and what @@species means
- KG to open an issue on github to discuss this https://github.com/tc39/ecma262/issues/1313


## Normative: Reduce the number of ticks in async/await

(Kevin Smith)

- [proposal](https://github.com/tc39/ecma262/pull/1250)
- [slides](https://github.com/zenparsing/tc39-talks/blob/master/await-ticks-update.md)

KS: Awaiting a promise actually requires 3 ticks of the microtask queue. We want it to be 1 tick. Makes things faster. This avoids an unseen promise wrapper object, and just directly uses the awaited promise. Chakra and Babel basically do this already.

KS: The only change is if you monkey patch a `p.then` and await it, it will skip the monkeypatch. MM wants to be able to override the `then` method to create frozen promise obj  ects.

MM: There is a bug in V8, that if fixed makes this go away. It's actually a spec text bug. Await is supposed to be equivalent to `Promise.resolve(value).then`. The promise returned by `then` figures out what promise to create by consulting `Promise.prototype.constructor`. The promise returned by the async function does not go through the constructor function. If we fix that, then replacing the builting promise constructor with one that wraps and freezes, it will handle everything I need. The proposal is just chaing to use builtins.

DE: It consults the constructor property, but will wrap if needed.

MM: The return of the async function...

DE: I'm confused, I think you're talking about two different things. Does this proposal actually make your issue worse?

MM: The change in behavior does not make my bug worse.

DE: ARe you saying that although there already is this issue, we should use this opportunity to fix the bug?

MM: It would remove the pressure to consult the `then` method. Replacing the `then` method doesn't fix the return value.

JHD: When you invoke an async function, it creates a promise immediately.

MM: The dynamic constructor property of the builtin `Promise.prototype`.

AK: It sounds like you want to fix all the things wrong with async functions. I don't think this PR should do that. Multiple changes, please.

MM: If we make both changes, is it likely they'd have a merge conflict?

AK: I don't think so. They'd both touch AsyncFunction, but different parts.

KS: Maya also brought up making this change sooner than later, so there aren't people relying on the native spec behavior. I also wouldn't want to block this perf improvement on changing the return type of an async function. That seems more controversial.

WH: I think this proposal is a good idea. We shouldn't couple it to bug fixing in a different but related part of the spec unless the bug fix is trivial and noncontroversial, which we don't seem to have consensus about here.

YK: I don't understand all the discussion. Angular tries to hook on `Promise.p.then`. The old behavior makes this easier, the new behavior makes it harder.

KS: Yup. The change won't affect it too much, because the monkey patch will receive a resolve and reject. There won't be any user code that'll be waiting for it.

YK: Zone tracking is already possible?

DE: No, they're zone tracking isn't possible. V8 did an async hooks api to support this use case because it's not possible on top of native promises.

DE: I am a little surprised because I thought this was a goal of Mark's. (Zalgo) The fact that we did so much work previously, why we would go back to a middle point.

YK: You're saying you're surprised that this proposal takes a middle ground.

DE: I agree with WH and AK here.

JRL: What do you think about just checking if the `value.then` is the `Promise.prototype.then`?

KS: We could do it. We don't really know what we're doing. You already can't hook into awaiting a non-promise.

WH: I wouldn't support that. The behavior of how turns would work would radically change depending on whether `then` is the built-in one or something that just calls the built-in `then`? That seems like a recipe for trouble.

DE: There are all kinds of issues with going down that path.

MM: I'm in the middle of writing tests that I want to confirm. I don't want to withdraw my objection until I test that.

AK: MM is the only person objecting last meeting, let's let him try to look into this by the end of today so we can progress it at this meeting.

MM: Withdrew his objection after looking at it in more detail

#### Conclusion/Resolution

- Approved


## Normative: Use array indices instead of integer indices in OrdinaryOwnPropertyKeys

(Mathias Bynens)

- [proposal](https://github.com/tc39/ecma262/pull/1242)
- [slides](https://docs.google.com/presentation/d/16wVIY5QQcIBrcr91rUbW9EPDJBwisStblFcdEsPiOok/edit#slide=id.g41da6c5107_0_0)

MB: (Presents slides)

JHD: In this specific example, obviously the spec should match implementation reality. OrdinaryOwnPropertyKeys is used throughout the spec, so what are the other impacts of this change?

MB: We should rule whether we should merge or reject this PR...

JHD: For this exact use case, we should merge, but my concern is that there may be other use cases that would not work with this. As I mentioned in the PR, it's good to have the spec match as closely to real-world usage as possible for an ideological consistency.

MB: There's a related change for Strings, because it's the same underlying code that is used.

KG: A lot of uses, which say OwnPropertyKeys and then return the ordering used by for-in which is implementation defined. There aren't many spots that the spec decides the ordering. It's like OwnKeys and something else.

JHD: That sounds reasonable.

TST: This change is probably related to TypedArrays having 2gb+ data.

MB: There's one case where TypedArrays might want to reach past the regular array length. I filed https://github.com/tc39/ecma262/issues/1244 for completeness sake, but I do think integer indices are okay for TypedArrays, since JS engines are actively working on supporting TypedArrays beyond the maximum length for regular arrays (we definitely are in V8). But we should change it for strings and arrays. The browsers already do this.

WH: This came about because we were trying to extend arrays beyond 2³² elements. I'd like to see a consistent proposal for strings, arrays, and TypedArrays.

MB: The proposal at the moment is to diverge them, based on implementation reality.

WH: I would not like to limit strings to 4Gb if we don't have to.

MB: I don't think this would be about limiting strings.

KG: This would only be observable if you iterated over a string of this length.

AK: The spec currently says something none of the browsers do.

WH: It's split three-and-one, with one browser implementing the spec for the string case.

TST: Let's keep this more constructive. Can this occur in reality? Or does it break only on a machine with 128gb of ram? Can we ever have strings of that length in reality?

AK: We would run out of memory in creating the array that we would return for Reflect.ownKeys.

WH: We wouldn't _today_.

MB: We're trying to decide if spec is correct, or implementation reality is correct.

WH: If it doesn't occur in reality, then let's pick the solution that allows for future large strings without surprising gotchas.

MB: This only affects enumeration order. This PR doesn't disallow large strings.

LEO: I'm not rejecting it, but I wish we could keep the spec text. Is this just because we don't have Test262 coverage for this before it was written?

MB: Why is it better to use integer index instead of array index for the cut-off point? It's not any less confusing to developers. There's still a seemingly-arbitary cut-off point.

TST: This was an aspirational spec change that never materialized.

KM: I don't see why one is better than the other.

YK: I basically agree with that, in some sense we should have a very strong desire to force implementations to do something different than what they are doing. Canonizing implementations to do something very specific seems like not something we should be doing as a committee.

MB: So do we want to merge this PR? #1242 is the least controversial since it matches all implementations. It would apply to arrays and regular objects.

JHD: We need to highlight what user visible things will change because of this.

KM: I wouldn't be opposed to allowing just sorting all the numbers.

MB: That'd either [be slow](https://github.com/tc39/ecma262/pull/1242#issuecomment-399851160), or require additional memory. It doesn't seem worth it.

WH: I'm fine with one of the PRs, but not the other.

#### Conclusion/Resolution

- Consensus on approving #1242
- 1243 has an objection by WH, that was withdrawn the next day after offline discussion
- 1244 also has an objection from WH
- TL;DR consensus on merging #1242 + #1243


## Normative: Use GetMethod instead of GetV to get iterator next

(Jordan Harband)

- [proposal](https://github.com/tc39/ecma262/pull/1288)

JHD: From a community proposal, if you have a non-undefined function, it would start throwing. So this is a question for the committee, is this something we want to do? This is a needs consensus PR.

DE: Observable semantic changes should get an implementation experience before merging.

JHD: To reiterate, you want at least one implementation before we consider the change.

BFS: Is there anyone that wants the earlier throw?

JHD: I suspect there's not an actual use case, but that the author of the PR feels like the it completes the spec.

AK: It seems weird to merge things because they were proposed and not rejected.

JHD: I do feel like it was a spec bug, but since it's been there for a long time and that it would be a normative change.

AK: I would second what DE said that if it's a normative change that we should expect some implementation first.

YK: If something is a needs-consensus PR there's the implication that there's a strongly-desired feature that just needs a quick approval. That doesn't seem to apply here.

DE: I'll suggest that we document the kinds of things we require for a needs-consensus PR, then. We can create a template just like we have for other types of specs.

WH: Are we OK with your PR? We seem to have digressed into a meta discussion about PRs. If that's the case, I'd note that the timeboxes have consistently been too small for the more controversial PRs earlier this afternoon. 15 minutes is fine for something noncontroversial but not appropriate for something that will generate much discussion.

BT: As an editor group, we try not to take judgements on whether a PR is good or bad. We would need to get concrete guidance on what is important to fix and what isn't important. This is so simple that I think it is sufficiently motivated.

YK: If the editor group want to give their opinion, ...something... We just need a preference.

JHD: This doesn't have a strong motivating use case.

#### Conclusion/Resolution

- Wait for implementation before merging the change


## Array.prototype.sort stability

(Mathias Bynens)

- [slides](https://docs.google.com/presentation/d/1mHvxDciqsAchhjepMZlU5fn1DBvglCXSjDWUEtsPGvI/edit)

MB: Previously, V8 used an unstable QuickSort for arrays with more than 10 elements. One of the most popular issues on the V8 tracker ever is issue #90 — a 10-year-old request for stability. It was somewhat surprising to developers that depending on the size of the array the stability of the sort would be different. As of V8 v7.0 / Chrome 70, V8 uses the stable TimSort algorithm. Chakra is the only one still using QuickSort for large arrays. There's [an open issue](https://github.com/Microsoft/ChakraCore/issues/5661).

KS: There's talk about not using it anymore for large arrays.

MB: That's awesome. So this is just a quick update and to show that the developer community is very happy when we make stability improvements like this.

YK: Are there any other properties of sorting that we've not addressed? I think if we don't see other things in the bug tracker, then we can assume that stability is the main concern.

WH: How much perf does this cost?

MB: One change that we noticed peak perf decreased a little, but performance became more predictable/consistent overall. There will be more detailed numbers in a blog post to follow. Addendum: the blog post is now live: https://v8.dev/blog/array-sort

KM: Is anyone concerned with mandating a stable sort? Perhaps providing an `Array.prototype.unstableSort` method?

PHE: As an embedded engine (XS), it might be difficult for us to implement a TimSort since it takes more memory.

?: Anyone opposed to this?

WH: I have questions about this. I'm not comfortable with asking questions about something being considered synonymous with opposition to that thing.

MB: It's not very common to call sort in hot code, so in that sense, maybe performance isn't as important.

BT: Once this is in Chrome, this is almost web reality. Devs will eventually find issues if they can't depend on it in very hard to debug areas. Once we're there, we should change the spec to just mandate it.

LEO: I'm not sure what we need for performance if we're not consistent.

YK: The Sizzle engine actually detects [if it has a duplicate](https://github.com/jquery/sizzle/blob/3116795bba9a0c3d624e0718006b25aa5568d4cb/src/sizzle.js#L918-L922) in the comparator function:

```js
// Exit early if the nodes are identical
if ( a === b ) {
  hasDuplicate = true;
  return 0;
}
```

YK: ...and if we make this change, it will probably have a webcompat issue with this change. But I don't have an objection to make this stable.

WH: I don't understand YK's point about requiring the comparison function to be called for each element. The only practical case where it applies is when sorting a one-element array. Are you proposing to require implementations to compare that element to itself?

#### Conclusion/Resolution

- Not a proposal, just an update
- V8 is shipping stable sort
- Chakra might try shipping stable sort


## Update on String.prototype.matchAll

(Jordan Harband)
- [slides](https://github.com/tc39/proposal-string-matchall/issues/39)

JHD: RegExps are a mess, and we have different fallback behaviors for String methods. For `Symbol.match`, it doubles as both an implementation and as a marker for regex. So, we don't have a choice to do anything but throw in the case of `Symbol.match` in the absence of a matching symbol. The question is some people would prefer not to have the fallback behavior—do just watch match and search do. This would delete two lines of spec text, but it wouldn't make it considerably easier to implement. I have a preference for making things not throw when they can work, but this boils down to this question. Do we mirror what search and match do, to split and unconditionally invoke `Symbol.matchAll`.

JHD: So there are two choices: Either throw when there's not `Symbol.matchAll`, or be robust.

TST: Nobody saw this particular change, but as the champion of the proposal you should have pointed this out much earlier as explicitly deviating from @@match. That didn't happen.

JHD: I am pretty sure I did mention it, but it's possible I didn't and I apologize for the fact that we didn't have this discussion earlier.

TST: That's totally fair. I don't feel that strongly, one way or the other.

DE: A lot of us just missed this detail. I like this second alternative, matching search. Regex sublassing is really complicated, I'm concerned about making more distinct paths. My personal preference is to do what replace does. But if we match search, that's good too.

JHD: We could also change search to have a robust fallback behavior.

DE: I think the fallback path is justified because it's using string matching, not regex matching. I'm not convinced the `Symbol.match` is just a marker to define "is a regex".

DT: The second way to extend regexes is to subclass. AWB has gone over a few times why we have this.

JHD: Three ways—subclassing, well-known symbols, custom method

YK: We shouldn't laugh at AWB's proposal, even if it wasn't clear that it was a serious defense for this behavior.

DE: I'm proposing that we do something consistent with Allen's proposal.

JHD: There are several folks on GitHub that mildly prefer the throwing behavior.

MB: I'm just happy we're addressing it in committee.

JRL: Everyone seems to prefer the other behavior, so we should probably change it.

TLS: You just voiced that as a strong opinion. If the champion has a strong opinion, and no one else does, we should probably go with the champion's opinion. If you disagree with that opinion, then you should phrase it as a strongly held opinion.

YK: I think I agree with JHD. No one's really tried to persuade anyone.

DE: But I did just that. My concern is that if we fall into a pattern of different communication styles—where some people have strong convictions versus some people come off as more polite, and we interpret those to be more strongly-held opinions.

TST: I think fair to ask that, if you have strong concerns, then they should be stated as such.

DE: It's a strong concern of mine that we don't make regex subclassing more inconsistent.

#### Conclusion/Resolution

- JHD and DE will discuss and come to a decision


## September 2019 Meeting

JRL: We have a confirmed host, but we were debating the location. Bloomberg has confirmed they can host in NY Sept 24-26, 2019. I propose that without another confirmed host, we should confirm our location to be New York.

#### Conclusion/Resolution

- Will check in again later in the meeting


## for-in mechanics

(Kevin Gibbons)

- [proposal](https://github.com/bakkot/for-in-exploration)
- [slides](https://docs.google.com/presentation/d/1ppVLFjnd2iGksBXeu97lml2cs9dTRJnJLfufcshvPcs/edit#slide=id.g106f4536d9_0_109)

KG: (Reading slides)

WH: I can see both sides. I worry about having the reference implementation be the spec.

KG: I wouldn't write the spec text as some implementation. This would be proper algorithmic steps like everything else.

WH: How much of the spec would change?

KG: Just `EnumerateObjectProperties`. And there would be a bail-out if you're not in the happy path.

BFS: I strongly support the change. There's some goofy behavior with proxies, and having reliable behavior that would be worth it.

DE: Seconded. Normative changes to the spec that nail down edge cases is good for compat. New implementations also benefit because it will be documented.

KG: Are we all onboard with both of these proposals? For proxies and these common cases?

CM: Is the reference implementation expressible in terms of proxy traps?

KG: Yes.

WH: I don't understand what you mean by "doing anything weird". There is a causality paradox here: You don't know whether the code has been in one of the weird situations you have listed in your presentation until the code has done it; by then it's too late.

KG: the spec text would be hard, but I think it's still not too late to fix it if we detect a weird thing.

WH: Professor Chaos could write code that would do something weird if it detects that the implementation is following non-weird semantics, and not do anything weird if it detects that the implementation is following weird semantics.

KG: You would follow this algorithm until something weird happens. If something does happen, you're free to fall back onto your own process.

LEO: Should we follow the stage process? I think it follows the normative process.

DE: I'd be ok with a normative PR with an implementation with changes.

LEO: Metrics as well.

KG: I'm fine with the stage process. Up until 2 years ago, all the implementations differed. Now we have the potential to change it.

#### Conclusion/Resolution

- Decision: Going through stage proposal
- Stage 1 acceptance


## Consistent Behavior Delegation for Configurable Properties & Extensible Values

(Bradley Meck)

- [slides](https://docs.google.com/presentation/d/17dji3YM5_LeMvdAD3Y3PQoXU1Mgm5e2yN_BraBSTkjo/edit?usp=sharing)

BFS: First, I'd like to point out that this title is very provisional. Please help by suggesting a better title if you have one! (Presenting slides).

YK: A clarifying question: in strict mode this throws? (Yes). And you would like to make a change where you would define a toString property? (Yes)

BFS: (Presenting slides). To be clear this is a very big, breaking change and will take a long time, but I don't really see how we cannot do this.

RPR: Even though Bradley doesn't call it a mistake, I think this fixes a mistake in JS. Thank you for doing this, I am in support of it. Most developers do not run into issue because they do not freeze things. Those that do are surprised by the current behaviour - it is not what they expected or wanted. The demand for fixing this comes from at least two use-cases:

1. Frozen realms, to prevent mutating builtins.
2. Regular classes in JS with frozen prototypes. Our userland class system in Bloomberg already achieves this - it would be great for native ES classes to be able to have frozen prototypes too.

YK: How much time did we spend thinking about this before we designed it this way? Is this a really mistake? In order to be comfortable making this change, I think we need to be in unanimous agreement that the original behavior was a mistake.

WH: I was around when we were initially deciding this. This was not a mistake; we were making writes consistent with how accessors behave.

WH: This will probably break the web, unless if we do it only in strict. And the latter option makes it worse, because now strict means something different than sloppy for assignments; adding a "use strict" will silently change the meaning of scripts that assign to properties that inherit from read-only properties.

DE: We could insert counters into browsers how many times we try to set a non-writable property. This was useful in regex subclassing.

BFS: A lot of our new work is with changing throw semantics into something else.

TST: I agree with WH. If you change from sloppy to strict, it currently changes from silent to throwing. But this would change it from silent to a _different_ silent behavior. And telemetry won't always help, but it'd take we'd have to count at the read out, not the write.

DE: What was the case?

TST: Someone assigns a toString, but depends on it not being written. They later call the toString, it should still be the original. This is in sloppy mode.

DE: But we could get an upper bound on the metrics by counting the number of writes on non-writable props.

BFS: Igalia said they'd look into implementing the counter.

MM: When we talk about not breaking the web. We actually broke Facebook when we introduced a global JSON value. Object.p.toValue.call on null, we made it throw. That break on old jQuery. We knew that we couldn't break jQuery because everyone copies their own version. But we could return `undefined` instead of the global object (the old behavior). So we have encountered breakage, and we decided what to do based on the breakage.

YK: I don't think people think of strict mode like we do. I don't agree that this is the first time we'll make strict mode make a strong difference from sloppy mode.

SYG: I don't want more divergence between sloppy/strict.

TST: Getting telemetry from V8 makes the question of getting it from Spidermonkey moot.

DE: If the sticking point is just web compat, then I think we can collect metrics. If people have a dislike of the actual proposal, then we can drop the proposal.

WH: Depends on what you mean by the proposal. If the proposal is to make changes in both modes, then let's investigate the web compatibility; if we get a miracle and it's actually web-compatible, then it would be wonderful. On the other hand, I wouldn't want to make this change only in strict mode for the reasons many have stated in the discussions here.

#### Conclusion/Resolution

- Need metrics
- If web compat, we'll investigate making the change
