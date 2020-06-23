# January 29, 2019 Meeting Notes
-----
Bradley Farias (BFS), Aki Rose (AKI), Yulia Startsev (YSV), Mariko Kosaka (MKA), Shane Carr (SFC), Richard Gibson (RGN), Brian Terlson (BT), Michael Ficarra (MF), Kevin Gibbons (KG), Kevin Smith (KS), Justin Ridgewell (JRL), Mathias Bynens (MB), Sathya Gunasekaran (SGN), Chip Morningstar (CM), Peter Hoddie (PHE), Waldemar Horwat (WH), Leo Balter (LEO), Shu-yu Guo (SYG), Michael Saboff (MLS), Mattijs Hoitink (MHK), Yehuda Katz (YK), Till Schneidereit (TST), Pieter Ouwerkerk (POK), Tom Dale (TDE), Myles Borins (MBS), Sean Larkin (SLN), Godfrey Chan (GCN), Rick Markins (RMS), Daniel Rosenwasser (DRR), Mark Miller (MM)


Remote:
István Sebestyén (IS), John-David Dalton (JDD), Adam Klein (AK), Daniel Ehrenberg (DE), Jordan Harband (JHD), Domenic Denicola (DD), Ben Newman (BN), Ross Kirsling (RKG), Frank Tang (FYT), Jory Burson (JBN)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/01.md)

### 1. Welcome

...

### 3. Agenda Scheduling

YSV: I propose we go through the agenda item-by-item, any objections to that?

(Various people in the room calling out minor scheduling constraints, mostly inaudible)

YSV: OK, so Unicode Sequence properties on Thursday and decorators tomorrow.

### 4. Approval of the minutes from last meeting

Approved.

### 5. Next meeting host and logistics

YSV: Next meeting is in New York; Google is hosting.

MBS: In the Chelsea Market area of New York.

AKI: Close to the Paypal-hosted TC39.

MBS: Reservation is for an Indian restaurant. Is everyone OK with Indian food? If anyone wants to help host/organize a community event, please let me know.

MLS: And please create the agenda in the repo.

YSV: Any questions about the logistics for the next meeting?


## TC39 to transition from RFTG to RFTC

(István Sebestyén)

- [proposal](https://github.com/tc39/Reflector/issues/203)

IS: TC39 proposed the extension of the royalty-free option from ECMA also for TCs: We had a royalty-free TG in TC39, but TC39 as a whole was still a technical committee and thus not eligible for being royalty-free as a whole, only TGs of it could be RF. We discussed this first in the Ecma IPR Committee and at the Ecma GA and they both approved the extension allowing also royalty-free technical committees (RFTCs). So this modified RF patent policy option is now operational. For TC39 there's one formal step remaining to make the RFTC happen, where TC39 needs to formally request the Ecma GA for the committee to become royalty-free. This proposal came originally from TC39, so I imagine if TC39 makes the formal request then we can formally change TC39 to a RFTC. The formal approval will be either via an Ecma GA letter ballot or latest face-to-face in the next GA meeting in June 2019. I will try to go for a letter ballot, to have this action item finished sooner. (Actually what I said in the meeting on this last point was not correct: The Ecma GA left the decision entirely to TC39, but added that if TC39 approves the change to RFTC then TC39 should give also a deadline for those TC39 member companies to leave TC39 who do not accept this change. So no such deadline was set in the meeting. I suggest until the end of the March 2019 TC39 meeting in New York)

YSV: Do we need to vote as members separately?

IS: Voting as a whole committee is fine.

YSV: Do you want any feedback or to present longer on this topic?

IS: There is no presentation; it is TC39 document number 3, and I also attached the changed policy early on both on the Github but also as TC39 documents. We just have to say that "yes" by TC39, if we want this policy to be adopted for TC39 by the Ecma GA. Approval of the request would be by TC39 consensus.

CM: What is the operational significance of this?

IS: From the operational point of view "Zero". It means that everything from now forward in TC39 will be royalty-free (versus only in the TC39 RFTG). Today practically all TC39 work is happening in the TC39 RFTG. It's a very minimal change for TC39, it just makes the situation much clearer. If in the future, if TC39 wants something not royalty free then they can either spin up a new "non-royalty free" (so "classical") TC or revert to the prior structure with the RFTG. On the other hand if in the future TC39 wants to install new TGs (e.g. for the Internationalization work) then automatically every new TG will be "Royalty Free" too.

YSV: Do we have consensus on this issue?

IS: We should do "block voting". Is there any member against this?

YSV: Are there any objections?

(no objections)

YSV: Are there any voters abstaining?

(no voters abstaining)

IS: Thank you very much. So the TC39 formal request for a RFTC is clear.

WH: Are you sending out a GA postal ballot as we did for TC53?

IS: For TC53, I have not received feedback yet.

WH: The TC53 postal ballot already went out. I voted on it a week ago.

IS: Sorry, you're right. I forgot about that. First I have to ask the Ecma Management if we can go with this to a postal ballot or we have to wait until the next face-to-face GA meeting in June. In the GA we made the mistake, not asking in the GA for a postal ballot assuming we get a "green light" for this from TC39. But I hope that the management will allow it. (This was said, but it is wrong. See my comments above)



#### Conclusion/Resolution

- Consensus on adoption of the document (TC39 to transition from RFTG to RFTC)


## Report from the Ecma Secretariat

(István Sebestyén)

- [slides](https://docs.google.com/presentation/d/1AcoF3yIr3QpzdD4O1pw8XtWlxFxiRo1coEnzQT9YM6Q/)

IS: On the first slide quite interesting US, China, India, and Russia are top four countries accessing the Ecma websites. Only US companies are Ecma members, companies from the 3 other countries are not. We should get more involvement from those countries in Ecma in general.

WH: Are these human visitors?

IS: Actually good question. This are just raw data from Google Analytics. So I do not know.

IS: Regarding download of Ecma standards the 24,877 downloads of ECMA-262 PDF in 2018 are significantly more than any Ecma standards. And the PDF version of ECMA-262 is not the main ECMA-262 document which is the html and access to that is counted separately. Anyway, but the PDF of ECMA-262 is also important because that version goes e.g. into the national archives, larger libraries etc.

IS: Quality of ECMA-262 PDF formatting is not up to par. These things are stored long-term in national archives and therefore we should make them good.

IS: The old problem is still not solved yet: Older versions of the specification get more clicks than later versions; we think these links are coming from MDN and other sites that have older links.

IS: Regarding TC39 Ecma webpages: We should make TC39 web presence more integrated across GitHub, Ecma, etc.

IS: (discusses trademark). We (TC39 and Ecma) have trademarked "ECMAScript" 10 years ago. Actually in the following countries / regions: Switzerland, EU, USA, Japan and Korea. Every 10 years we have to review and extend that (if we wish...). The US Trademark office has requested to prove how the trademark has been used. We have used it on the Ecma standards (i.e. in publications), but they also like to see the trademark on products or packages of products. This of course for "ECMAScript" is an old expectations, they are not really regarding that the Web is a global Network...Regarding "ECMAScript ®" on hardware Moddable has a nice example (thanks Peter....) that the IPR lawyer has presented to the trademark office. Generally, my request would be to use "ECMAScript ®" as much as possible, also in parallel to "JavaScript", that proves that we are using the mark, plus it is a good add for Ecma.

AKI: Should we use ® or ™ when referring to ECMAScript?

IS: What I've learned is that the ® means it's already granted by the trademark office, you get the ™ when you have merely applied. So ® should be used.

IS: Next topic: Not 100% clarified yet, but most likely Patrick Luthi will be transitioning into Ecma Secretary General position on April 1, 2019, and I will remain 50% in Ecma through June.

BT: Next topic: Just want to ask again if you could put the opt-out timeline that's on the Reflector? I'm targeting towards the end of February.

IS: That's great. We will do it. Moving on, Brendan Eich and Allen Wirfs-Brock have been granted Ecma Fellow Awards and Emeritus Memberships. Congratulations to them and we will be giving them a plaque award, which is not done yet.

IS: Next topic: Rex Jaeschke has departed from his role as the chair of TC39. At the December 2018 GA he has received like other departing Ecma TC Chairs an "Ecma Recognition Award".

IS: Last topic: Just to repeat if if there is long-term interest in a meeting in China (e.g. for 2020): Wuzhen (close to Shanghai) would be a good host if TC39 ever meets in China. I can help to set that up with the local authorities.

YS: Any questions?

(None)

## Status Updates
### ECMA-262 Status Update

(Brian Terlson (BT))

BT: Quick update on ECMA-262, which will be my last update as editor. The plan for 2019 is to have all the normative PRs pulled in by the end of this meeting. They should all be reviewed at this point, so if you have a proposal, but it hasn't been reviewed by me, and you think it's going to make it into the 2019 version, it's probably not, so talk to me.

BT: In February, we will begin the Royalty-Free opt-out period. If you'd like to be removed from royalty-free consideration, which no one has ever done, It is a process, and please talk to me if you have questions.

BT: Flat and FlatMap need to be signed off. Well-formed JSON.stringify UTF-8 needs to be merged. We can maybe take stable-sort change.

MB: The stable `Array#sort` PR was just merged!

BT: Object.fromEntries, Function.prototype.toString changes. And I think it's just those four.

BT: There's also a large backlog of editorial changes, if Jordan and Kevin review them and like them for 2019, they'll get pulled. If you have any concerns about editorial changes that you'd like _not_ to go into 2019, speak now or forever hold your peace. The PDF for 2019 will still be ugly, probably, I'm sorry.

IS: It's OK. I understand. Priority is HTML.

MB: We could just use Chrome headless to generate the PDF from the HTML version: `chrome --headless --disable-gpu --print-to-pdf 'https://tc39.es/ecma262/'`

BT: You need things like page numbers, though.

MB: It gives you page numbers! Not sure if they can be styled though.

BT:

## ECMA-402 Status Update

(Daniel Ehrenberg)

- [Slides](https://docs.google.com/presentation/d/1AcoF3yIr3QpzdD4O1pw8XtWlxFxiRo1coEnzQT9YM6Q/edit)

DE: (introduces ECMA-402)

DE: Please contact Dan to join our monthly call for ECMA-402. Also looking for potential involvement on editor/chair.

DE: Pull request: Switch to Unicode BCP47 Locale Identifiers. Will also fork soon for 2019 edition.

DE: Stage 3 proposals: Intl.RelativeTimeFormat is moving; Chrome and Firefox have implementations; still some issues blocking Stage 4. Intl.Locale is updated with BCP47; implementations in progress. Intl.ListFormat is shipped in Chrome 72. Intl.Segmenter is undergoing some changes; line breaking was removed; and we are considering switching from segment-based to break-based API. Intl.NumberFormat, documentation and spec changes.

DE: Stage 2 proposals: Date formatRange should be ready by March for Stage 3. dateStyle/timeStyle has a prototype in V8, and should also be ready soon for Stage 3.

DE: Stage 0 proposals: DisplayNames by Frank Tang; will see more later this meeting.

DE: Get involved!

YSV: Questions?

LEO: I am interested in being editor of ecma402 and I'd like to volunteer myself for the position. I have time for it already arranged internally at Bocoup.

DE: Yeah, thanks for your help landing Test262 tests, too. Very helpful.

## ECMA-404 Status Update

(Chip Morningstar (CM))

CM: ECMA-404 is the JSON standard. We have big priority on stability, so part of my job is to limit the number of changes to it. If anyone has some ideas on the future of JSON, I'm the person to talk to.

## Test262 Status Update

(Leo Balter (LEO))

LEO: We've been receiving lots of Ecma 402 updates, largely from Frank Tang from the V8 team. Thanks to the V8 team for the contract so I can continue this work. There has also been a lot of back-end work to make it easier for clients to use Test262.

## Updates from the CoC Committee

(Jory Burson (JBN))

- [slides](https://docs.google.com/presentation/d/1nXCC4HQOvEgvFHQ9unmKjqh9wCHFi7jST14EO7PUKfM/edit#slide=id.gc6fa3c898_0_65)

JBN: We've been meeting bi-weekly, discussing interactions with the community on Twitter and GitHub, etc. We continue to add to our playbook, as we go. The playbook is the repo with guidelines and strategies that any member of the community (delegate, etc.) can consult or implement.

JBN: Other changes: we started with 8 people, and now YSV has joined, and DE has left; we appreciate DE's work getting bootstrapped. We created a process for joining. We are going to continue working on the playbook, and we are thinking about facilitating workshops useful to the TC.

## Normative: Treat IterationStatements uniformly in Annex B.3.5

(Ross Kirsling (RKG))

[PR](https://github.com/tc39/ecma262/pull/1393)

RKG: This is a simple normative change to stop making for-of a special case. Annex B.3.5 allows var-redeclaration of a non-destructured catch parameter, but this exemption does not hold in the particular case where the var declaration is a for-of initializer. I wasn't present during the initial discussion about this, but the motivation seems to have been to prohibit anything not required for web compat.

RKG: This special subcase is difficult to remember and also nontrivial to implement. The special case applies to for-of but not for-in. SpiderMonkey and V8 implement it, but it requires a big special case in the code. Does this actually provide any concrete benefit? I've received a lot of feedback that this would be a nice simplification if we removed this special case.

RKG: There is a separate case for direct-eval, which checks the names bound by the direct-eval call instead of VarDeclaredNames. The current spec text there appears to differentiate FunctionDeclarations from async/generator declarations, but the reality is that none of the five engines in ESHost make such a distinction.

WH: It's a minor issue and a matter of philosophy. We wanted to disallow this kind of `var` altogether, but that would break web compatibility, so we allow it in only the places needed for web compatibility. My concern is waffling on this, though. We already made a decision and put it into the spec. Since browsers have implemented this, there would need to be a good reason to back out. We've made a conscious decision to try to minimize these warts, like allowing var in this situation for the purposes of webcompat.

RKG: My motivation is that I'm not sure who is benefitting from this. I was looking at putting this into JSC, but the special code path in implementation seems unnecessary to me.

WH: We have warts like this in nested functions. The reasons why they're complex is for webcompat. We don't expect or want users to learn the exact boundaries of the warts. So, it's tricky to implement, yes, but it's not something meant for users to follow as an example. If implementations hadn't implemented the spec, my feeling would be different, but several have which makes me reluctant to keep waffling on this subject.

TST: We're happy to take it on again.

CM: I'm curious about the history behind this. This is a weird special case and there must have been something motivating it. My question is what's the history of this being there in the first place? Do we know? It seems that WH said it was motivated by compatibility concerns.

AK: The webcompat concerns were to allow it in for-in.

SYG: I want to reply to WH about the wart issue. In this case, since var declarations had to be allowed. This seems like a weird special case, and it is an implementation wart. Going forward, as we'll need to have more complex stuff carved out, this space will be extremely difficult to implement in the future. In this case I'd like us to roll back the decision to further restrict for-of vars. I don't think they're going to get anything of the restriction in this case. If we want to keep the webcompat easy to understand, we should accept this proposal.

YK: I agree with WH. We shouldn't focus on whether someone can read the spec language. However, I basically agree with SYG that there's no intuition that you should be able to use var. The main consequence of this is you'll have to be very aware of the various contexts where var is allowed, and I'm suspicious that there are probably bugs where it's not allowed in this special case.

TST: What is the special case now, and what can we expect the special case to become? If we expect in the foreseeable future for similar constructs, it's probably better to simplify.

AK: The fact that it's already implemented in V8, shouldn't be a major factor in this decision. About minimizing warts: I think the function hoisting stuff is worth carving out in a certain way. Here we've added warts to try to allow for existing warts.

TST: Regarding wart reduction, I want to agree with AK here. It's no concern for us either to remove the implementation around this wart.

KG: I remember implementing this in V8. My initial implementation had a bug that led to a crash that was only found by fuzzing. So I want to say that having this code path adds complexity. I don't see there being an advantage having it there and making implementations more complex.

WH: What is the resolution?

TST: Is anyone opposed to accepting this?

WH: I am not opposed to accepting this proposal. I'm trying to discourage waffling on decisions already in the published spec, but it's not a big deal in this case.

KS: I don't have a problem with this PR, but I want to reiterate WH's point that we should keep a high bar to relitigating past decisions.

#### Conclusion/Resolution

Accepted proposal.

## Add "name" property for classes as part of ClassDefinitionEvaluation

(Daniel Ehrenberg)
Author: Andre Bargull

- [slides](https://docs.google.com/presentation/d/1OK6Up2Pkv8IaFtOuYUUc21_id7E1CqKWuKFT9b_7tBE/edit)

DE: (presents slides)

MM: Can you say again what the observable change is, in the absence of decorators?

DE: Where the name comes in the enumeration order. This puts the name before other properties in the class.

MM: Example?

DE: (shows example on slides)

DE: It's hard to implement function name inference efficiently. Implementations like to cache the name on the data structure which corresponds to the parse node for the function, rather than on the closure. That optimization, which is only possible sometimes, is responsible for observed differences in enumeration order in JS engines today.

YSV: Do we have consensus?

#### Conclusion/Resolution

- Accepted PR.


## %TypedArray%.prototype.sort stability

(Mathias Bynens)

[PR](https://github.com/tc39/ecma262/pull/1433)

MB: We would like to make %TypedArray%.prototype.sort stable, like Array.prototype.sort is already stable. Although V8 and SM don't implement stable sort in all cases right now, but both teams have publicly committed to making it stable.

WH: I'd be really surprised if one of the sorts were specified as stable and the other one wasn't, so this seems like a good thing.

TST: For our implementation, this is a bug. We intended for this to be stable.

YSV: Do we have consensus?

#### Conclusion/Resolution

Accepted PR.

## Edge/Chakra Q&A from Microsoft (Brian Terlson & Kevin Smith)

BT: We're here to answer questions about Edge's move to a new rendering engine.

JHD: There have been a lot of discussions about ??

BT: There's no plan on open sourcing the old rendering engine.

WH: How viable is the future of Chakra?

BT: It is viable in the sense that the project is available forever. You mean, how long will it receive updates?  The current plan is to continue work. I don't have long-term vision.

KS: We have internal/external clients that use ChakraCore, so we'll continue to support the engine for those purposes.

MB: Do you have an idea on the release schedule?  For example, array stable sort is merged into HEAD, but it is not yet in ChakraCore stable as of v11. Do you know when there will be new *major* releases?

KS: I don't see the release schedule becoming more frequent.

JHD: How does dropping from 4 to 3 web engines impact the vague stage 4 requirements?

BT: The requirement is vague; we can presumably work with that. Do you have a specific concern?

JHD: When we talk about web-reality stuff, when 2 engines do it, it's borderline, but satisfying 3 engine implementations makes it a much easier case for web-reality. Dropping to 3 engines changes those dynamics; now 2 engines basically mean web reality. And it seems that implementing in Chromium is enough to satisfy most users.

WH: You mean you think Chakra is going away?

BT: No, it's not going away. Current version on Edge and several other partners are using it. But it will be running less web content soon.

TST: I don't think it should impact Stage 4 requirements. Our requirements are still different engines, and clearly that will still be needed. Certainly this will not lead to tightening the web-reality requirements, at the very least.

YK: I have two things. First, We could say that Chromium is basically web reality, or we can keep looking at multiple engines. I hope we don't just look at Chromium. Second, it is the case that Chrome is more likely to implement breaking changes that other engines would be hesitant to implement out of fear for breaking web reality. If we get to the point where there's a lot of consolidation around the JavaScript engines but with JSDom we can revisit this conversation.

MLS: An observation is that Edge is not usually one of the two engines on a Stage 4 proposal. However, we really lose that ability now. I don't think we should just use one engine. I think we should look at Moddable or other engines that can satisfy that requirement.

SLN: There are some features that can be disabled in Chromium, so a browser that uses V8 can choose not to use a given feature has implications in the context of web-reality.

TST: There are reasons for wanting different implementations. One issue is that multiple implementations help figure out is this universally implementable in a high-performance way. And it seems to me that in the cases where multiple implementations are relevant, it doesn't matter if those are web engines.

YK: Something implicit in this conversation, we don't actually talk much about web-reality in the process of TC39. Moddable does. There is a reason why we talk about web-reality in this room, however. We're having this conversation because we have an implicit sense of the importance of web-reality, and we should formalize that in this committee.

BT: I agree; I think "the importance of web reality" is going into the How We Work docs.

YK: I think it is correct for us to care about it.

MM: When we say "web reality", it is shorthand for browser. In having a larger scope, we should be aware and sensitive to the implications. There are differences in how V8 is used in the browser versus the server. I think we should see Node as more of a first-class thing. Also Moddable, Babel, etc. Babel is an implementation of a language and it shouldn't be second-class.

BT: The process document is intentionally vague. There are many features that Babel wouldn't be able to evaluate like private fields where it would be concerning if Babel were the only implementation. There are other features where Babel could be OK. The status quo is that we have a human process, which I think is OK.

YK: I think there's something difference about the browser use case. A big difference is that browser users don't know how the code works, but with Node, I run the code and I wrote the code. So compatibility requirements are stronger when the web is involved. I think JSDOM content running on a different implementation in the real world tells us about real compatibility constraints. It is a great example of the "I don't control my implementation" constraint.

TST: I agree with MM that we shouldn't have "second-class" implementations. We have different implementation realities, including implementation complexity. (Gives an anecdote.)  For some features, we can't rely on just having one implementation and realizing that it's impossible for other engines to implement.

MLS: Let's suppose hypothetically that Safari and Firefox adopted Chromium. I think what TST is important. But I can see that the committee would change dramatically in how it does things. It would give one entity veto power. I think we should consider what the future would look like if such a thing were to happen. We need to consider the viability of an open standard for JavaScript going forward.

JHD: The intention of the PR I have open against the process document is to clarify the Stage 4 requirements. I'm planning on updating that PR later today,

BFS: Earlier, we were saying that running code in Node and browser are different. But often you don't actually control your Node version. So there is a similarity there.

YK: I agree, but I think there's a difference in extent.

YK: With regard to MLS's comment, what can we as a committee do to ensure that your situation doesn't happen?  I think it depends on how much V8 values this standards committee. If we're too heavy-handed, then V8 might flex its power more.

MM: Another hosting environment is blockchain running either JS or wasm. They need a standard deterministic profile specification. This has already appeared in the wasm committee. A deterministic profile is one that specifies disambiguations for every issue purposely left ambiguous or implementation-defined in the original spec. A system conforming to a deterministic profile is thereby also conformant to the original spec. As we evolve the spec itself, we should keep in mind the need to coordinate with the evolution of the corresponding deterministic profile. For JS, we only need a deterministic profile of the SES subset.

## Security Implications of Error.prototype.stack

(Michael Ficarra (MF))

- [Slides](https://docs.google.com/presentation/d/15IWa2HM4sYUWmN_orRGFZ4H1D0AsZO4IcNliY68FwBE/edit)

MF: There is a web reality problem with information leak due to Error.prototype.stack. (Presents the example shown in the slides.) Unfortunately, even though this function is very defensively written, you can still infer the secret if an exception is thrown.

JHD: I'm intending to present the [stack proposal](https://github.com/tc39/proposal-error-stacks) as Stage 2 soon.

MB: [`Error.stackTraceLimit`](https://v8.dev/docs/stack-trace-api) is something non-standard that can already be used. `Object.defineProperty(Error, 'stackTraceLimit', { value: 0 });` already avoids the leaks in V8, JSC, Chakra today. We could just standardize that. Any related proposals should explicitly clarify in their README why it is better than Error.stackTraceLimit.

MF: That would destroy the whole stack trace and disincentivise censorship because of its effects on debugging.

BFS: [`Error.captureStackTrace`](https://v8.dev/docs/stack-trace-api#stack-trace-collection-for-custom-exceptions) and [`Error.prepareStackTrace`](https://v8.dev/docs/stack-trace-api#customizing-stack-traces) can also be used in V8. The existence of these methods tells me that there's demand for more than just setting `stackTraceLimit` to `0`.

WH: I'm a bit unclear about what is being suggested here. Is it just a statement that an interesting problem exists that we should explore, or are you proposing something? Given that implementations already let you do things with stack traces, is there going to be a compatibility problem?

MF or TST: No (to the compatibility problem question)

WH: I'm eager to reduce side-channels, but note that you could do the same type of attack using timing analysis.

MF: I made a bit of a concrete suggestion, that we amend the stacks proposal. I wanted to see if the committee felt that this was something worthwhile investing time in.

WH: I would like to know which of the suggestions here are feasible to do while being web compatible.

JHD: My proposal is attempting to standardize the structure but not the contents. Browsers don't always do the same thing with the contents, but they do with the structure. A proposal to modify the contents would need to demonstrate that it is web-compatible. My proposal creates the concept of a stack (API methods, etc).

WH: How would standardizing the structure address the problem?

JHD: A follow-on proposal could more strictly define the implementation detail of the contents of the stack trace.

MM: I'm a co-champion with JHD on the stacks proposal. Part of the motivation is to specify Error.prototype.stack in Appendix B. One of the invariants of the current spec that we must maintain is that except for the small number of grandfathered mutable state (primordials), there is no mutable state left. Putting mutable on the error object is a non-starter. (?)  Anything that introduces special powers needs to be quarantined to a realm. We should prevent cross-realm leakage of stack traces. I don't have a concrete proposal, but membranes could be a way to impose a censorship boundary.

DD: The Function.prototype.toString is pretty similar to this proposal. I'd be curious to hear if MF thinks it's also attractive to do this at the source level with a pragma.

MF: I think pragma is an interesting way around this. It solves the issue of other parties censoring the error stack. That's interesting, I'd like to look at that more.

TST: Sounds like there's even more potential for interactions in the two proposals, and you are all aware that you should talk.

#### Conclusion/Resolution

The committee is receptive to proposals that attempt to address the outlined problem.
The proposal that MM and JHD are making will address some of it, but there might be more to do about addressing the contents of the stack, and this is an ongoing problem.
There is likely overlap between stack frame censorship and function source text censorship.

## Publishing the website

(Yulia Startsev (YSV))

- [slides](https://docs.google.com/presentation/d/1ZppfP3Y_LJ_7LiQn3g-btqjpD8gNVkTXI-sbF-EolGY/edit)

YSV: This should be quick, so in terms of the website not a lot has changed. Ecma requested their logo to be added, and it's now there. We added a "last presented" category but it hasn't been added to the website. I've also started writing a crawler for our proposals, however our proposals don't quite follow the same shape/format. There are two proposals to adopt a standard format: 1) independent files, but this is a lot of work for champions. 2) use a template.

YSV: Are we happy with our new website? Do we want to publish this as our main site? Is there anything that should block this?

MF: Are you planning on putting the last presented date on here?

YSV: Assuming this is something everyone wants, yes, I plan on adding it today.

MF: I think this, with a link to the ratified notes is a really good recent addition to the proposals README.

TST: If no one has any concerns, then we should put it out.

YSV: Does anyone have any issues with the crawler proposal.

JRL: GitHub supports a YAML format for issues. We could use that.

YSV: That's interesting, I am not familiar with that, could you send me more info?

WH: Is this meant to replace the list of proposals we have on Github?  I find a table much more useful.

YSV: The goal would be to replace the redirect that we have. But we would still have the Github page. Is this a blocking problem for launch?

WH: I find the current content at Github more useful.

YSV: We were thinking of giving staging layers on learning more about TC39. We don't want to give information overload.

WH: The layout is very confusing and has too much white space and extraneous information.

TST: How often are you using tc39.github.io URL?  This is not primarily used by committee members.

WH: My comment is relevant regardless of who uses the site.

JRL: I think this is better than the status quo for the intended audience.

WH: I disagree.

YSV: We were asked to have a website that was more accessible.

BT: We were essentially looking for an OK to launch the site this week. Is there anyone who does not want to launch?

WH: I would prefer not to launch it in its present form, but I won't object to it.

(BT, MF, YK, WH, and TST discuss for several minutes on process)

DE: I think it's really useful to show Stage 3 proposals to new users. We don't want to give too much information. It's okay to have different views for different audiences.

YSV: The idea is that this is a minimum viable product; there will be changes going forward.

YK: This committee serves as a place for consensus-seeking conversations that are for hard compatibility constraints. Acting like we need the same consensus on a website is the same level as a technical problem is mind-boggling.

WH: YK, nobody is advocating for the strawman that you're objecting to. Nobody here is advocating for needing consensus on the website or objecting to having a website.

AKI: Thanks so much for everyone who's worked on this.

(discussion on process continues)

####Conclusion/Resolution

Due to lack of time, the discussion of the website was concluded with the following: The website can be launched as is, but with a few tweaks requested from the committee members either before the launch of shortly after.

## The Community and Us

(Aki Rose)

AKI: This is to follow up on discussions from the breakout sessions about how we can interact better with the community. Lots of developers think we don't care about them or their needs. So how do we move forward in a constructive manner? It seems clear that GitHub repos aren't enough to get the word out to the community. We saw this with globalThis, which was a proposal for like 2.5 years, and it still came as a huge surprise for the community. I propose we push more to more places, perhaps blog posts explaining proposals in plain language. Maybe champions can explain how materially it will impact average JavaScript developers. I'm not sure who controls our Twitter account (YSV explained who does, but I couldn't hear). I also created a Hacker News account and a Lobste.rs accounts and published syndicated content on those platforms. We have a very engaged community, and they have a lot of ideas. Often, community members have ideas that have already been proposed and considered, which suggests that we're not doing a good enough job communicating these proposals and our rejections of failed ones.

AKI: Where do we direct chatter?  es-discuss is overwhelming and delegates don't like to engage with it. I propose we retire es-discuss. We could try replacing it with [Discourse](https://www.discourse.org/). We already have a Discourse instance at es-discourse.com. The long-term goal is better communication.

YSV: I had discussions with Rust team members from last year, and they said if you have a tool that you don't use, you need to shut it down. If you don't do this, it implies you don't care about the community. Their social media strategy is to not tweet their own content unless it's very simple status updates. So they end up promoting Rust users more frequently which has worked quite well for them.

JHB: Sunset pandora's box; if we just shutdown es-discuss, there's a chance that it will move to GitHub or Discourse. Secondly, we don't have to fully shutdown the old service to enable people to use the new thing. I don't think we should shutdown es-discuss in order to enable communication on Discourse. The state of es-discuss is the symptom, the disease is the lack of attention to the community itself.

AKI: I think we have the opposite opinion here on cause vs effect. I think people won't leave where they are because that's where they already are. I don't participate in es-discuss because I find communication on an unmoderated forum to too frequently toxic. It's also a firehose problem, where every topic and reply is given the same weight. One more major benefit of Discourse would be that if you don't have a lot of time, but you want to participate, you can interact on a topic that has a lot of activity.

TDE: I've joined communities in the past, and written things in a forum and it goes off into the ether never to be seen again. The reason to shutdown es-discuss, in my opinion, is to help avoid secret-handshakes for where actual collaboration happens.

AKI: Hard agree. We have to go to one place to centralize these discussions.

MBS: We did this in Node, but it slowly devolved into a toxic environment that wasn't well-moderated. And thus, to reiterate what others have been saying, I think it's valuable to be explicit about these spaces.

MM: I participated very intensely on es-discuss for 5-7 years, but as it evolved, it changed into something not worth my time. I'm grateful for JHB continuing to engage. With regard to Discourse, the key phrase that AKI used was "moderate." What do you mean by moderate?

AKI: There will certainly be CoC people involved for particularly egregious stuff. In terms of preventing spam, Discourse has novel ways that they encourage good conduct. You are allowed to post more based on reputation. You can get people to a trust level where they moderate themselves.

MM: So there seems to be a governance situation. In es-discuss, if you simply removed spam and abuse, it still falls below my threshold in terms of time commitment.

AKI: Did you miss the part where Discourse will automatically surface the more popular threads?
_p.s. Sorry for the snark, MM—AKI_

MM: No, I didn't miss that at all. I don't have experience with Discourse, but I have experience with upvoting threads, which seems to be a better feedback loop, but how much experience has there been on Discourse versus other choices WRT getting more substantive things to get to the top?

BFS: OCAPJS.org uses Discourse.

MM: I'm aware of that, and I discussed it with them. The badge system we had felt condescending—more appropriate for 3rd grade. My understanding is that these badge settings were the default setting. We'll see how it is with these removed. (MM note since then: OCAPJS.org seems to be working out well, so I am encouraged.)

AKI: npm moved to Discourse. They told me that it was like night and day in terms of engaging with the community.

(This discussion will continue later.)

## Object.fromEntries for Stage 4

(Jordan Harband & Kevin Gibbons)

[PR](https://github.com/tc39/ecma262/pull/1274)

KG: (Presents slides). This is in Chrome Canary, Firefox unflagged, Safari tech preview.

#### Conclusion/Resolution

- Stage 4 acceptance


## Well-formed JSON.stringify for Stage 4

(Mathias Bynens)

- [slides](https://docs.google.com/presentation/d/1yVe5SkhjaHRRCKLjcdd0D122ZKUe_KWQgm9BGtDjhFI/edit)
[PR](https://github.com/tc39/ecma262/pull/1396)

MB: We have reached Stage 4 requirements for this proposal: Test262 tests, implemented in V8, SpiderMonkey, JSC, etc.

RGN: That slide tells it all. (Shipped in Chrome 72, ... )

#### Conclusion/Resolution

- Stage 4 acceptance


## String.prototype.{trimStart,trimEnd} for Stage 4

(Mathias Bynens)

[PR](https://github.com/tc39/ecma262/pull/1275)

MB: Presenting on behalf of Sebastian Markbåge.

MB: There are tests for ECMA-262, there's a PR for Spec tests, as well. I think this is ready for Stage 4.

#### Conclusion/Resolution

- Stage 4 acceptance


## Array.prototype.{flat,flatMap} for Stage 4

(Michael Ficarra)

[PR](https://github.com/tc39/ecma262/pull/1309)

MF: Three implementations are shipping (V8, SpiderMonkey, JSC). We added entries to unscopables during implementation after Stage 3.

MM: Can you explain unscopables?

MF: This was a preventative mechanism to make sure there were no web incompatibilities with using flat. It was precautionary only.

MB: We looked into this, and there was [some discussion on GitHub](https://github.com/tc39/proposal-flatMap/issues/74#issuecomment-451152482). The text below the `Array.prototype[@@unscopables]` section in the spec makes it clear that the intention is to *prevent* issues, rather than fix only the cases that are known to break the web.

#### Conclusion/Resolution

- Approved for Stage 4


## Community (developers and educators) feedback over globalThis, advocating for Global

(Leo Balter)

- [slides](https://docs.google.com/presentation/d/1u3kbSc5Iga6lG7xoiilTEe2Z59Snz5xNumZaASwSHCI/edit#slide=id.p)

LEO: There has been massive pushback from the community about the name globalThis and the process we used to decide on the name. Our process was too defensive probably. My proposal is to rename globalThis to Global. (describes discussions with links in slides.)  (continues presenting slides summarizing history of globalThis.) globalThis is very difficult to explain from an education perspective. I'm proud of TC39 for our tendency to avoid difficult to understand additions to EcmaScript like this, so I think this would be a bad direction for the language. Global on the other hand is much easier to understand—it feels like the global namespace.

MM: In an earlier slide, you stated "in strict code, this is undefined". The instinction is not strict code. Strict scripts still have this bound to the global this.

LEO: You telling me this as a TC39 delegate, to someone who works on Test262, is so interesting. To someone who's not as familiar with the language, you can imagine how difficult this is to understand.

MM: I agree that top-level this binding and global namespace is confusing. We should not encourage use of the global object in general and we shouldn't spend time trying to find a name for it. With regard to the the naming you're proposing, I'm in favor.

AK: To the point about being willing to change, if we decide this is a big deal, V8 would be OK with giving it a try. But my position is that I'm not excited about changing this.

LEO: Why would you rather stick with globalThis as opposed to changing it?

AK: I feel like the main use of this is for code that needs to access the global object directly, and that is not code a lot of people should be writing.

KG: We closed the discussion last meeting saying that Axel had come around to globalThis, but that is not actually the case. So it is not the case, as I understand it, that educators came around to our side.

YK: I tried to do some research on this by asking educators. I don't think it's the case that this is only useful in advanced code. As long as the name isn't a UUID or something with a lot of underscores, I think people will want to replace window with Global or whatever we call it.

TST: I'm surprised, JHB, that you say you're willing to go along with the committee given that you spent a _ton_ of time working with various partners searching for a name that would be webcompat. I think you even said Global is not especially better for webcompat than global. I'm fairly skeptical.

LEO: I'm not an implementer, but I think it's totally worth trying it.

TST: Figuring out whether we can change the implementations is hard work, whether the change is web-compatible.

LEO: I'm not assuming it's very webcompat, but I don't have enough resources to conclusively say whether it is.

TST: To me, it seems like we cannot make a decision here without that data.

YSV: I believe JHB collected data on these names.

BT: Unfortunately, not Global.

JHB: I had 10-20 names from a bikeshed thread. One of them was Global. I was under the impression Firefox was going to collect the data, but then Edge also volunteered, and Firefox ultimately said they'd rather wait for Edge to collect the data. Edge told me 20 names was too many, so I trimmed the list down. I tested "global", "globalThis", "globalObject", and "globals". "global" was wildly unavailable. It would be most effective if we got multiple browsers to collect data for a larger list of names.

SLN: If we weren't sure that lowercase global broke things. There's lots of tooling for wrappers for say a Node and frontend-JS module, which we call the UMD wrapper, which check for global, since it's in Node, which would break. Representing WebPack, we would not be a fan for `global`, because it would break these UMDs.

AK: V8 is not interested in spending time on acquiring web compat data. We would be okay if we were presented that data. But we have been trusting the TC39 process to lead us in this direction.

TST: We also would not be interested acquiring web compat data. It sounds like it's up to JSC.

MLS: I'd love to do some of this stuff, but we can't due to the project policies.

BFS: Would people be okay shipping both identifiers?

TST: It still doesn't solve the web compat issue.

BFS: We want to make sure we don't make people feel empowered by using backlashes. I'm not opposed to changing the name, but I would be careful in how we present it if we do.

LEO: This is not about backlashes but acknowledging an issue raised in good faith.

KS: I actually like the idea of protests; what else are people going to do?  I think it's good for people to make themselves heard.

BFS: Backlash in dissent is good, but unmitigated backlash leads to people adversely affecting the ecosystem around them.

MB: [The `NAMING.md` doc](https://github.com/tc39/proposal-global/blob/master/NAMING.md) does a great job of listing the names that were considered (including `Global` with capital G) and explaining why each of them were rejected. I wish we'd have had it earlier, so we could've pointed people there instead of having them wonder "why this ugly name?!" without knowing the background. Next time, we should also try to not keep the name (or any other major decisions) secret for so long.

DE: To clarify, Axel really does prefer Global over globalThis. On process, I don't want to make a pattern of backtracking on browsers, but this process is already unusual since we investigated names in secret. Also, champion groups can take on the implementation.

JHD: If we decide to revisit, we need to do the web compat cycle. Without that data, it's a hard sell to try anything.

GCN: It seems in the last round Edge was able to add the counters. Does the Edge team no longer have that ability in adopting Chromium?

KS: At this time, I don't think we're interested in adding counters to Edge.

GCN: So in the future, is it just the other three browsers?

KS: I'm not ruling out that we could do something in the future.

YK: If you were motivated, you _could_ add a counter? Or do you mean it wouldn't be possible on top of Chromium?

KS: In theory, we could upstream something, but it's not something we're interested in doing at the moment.

LHB: I don't know how technically to capture this data.

DE: It seems clear we're not going to get browser work from this. What we should be deciding here is whether we're going to move forward with globalThis, or start researching new names. If we're not moving forward with globalThis, then we should tell Chrome/Firefox to stop shipping this.

MBS: We can go and talk on this for hours.

DE: There's a time-sensitive option; the longer we wait, the longer Chrome and Firefox will have this shipped. We can't defer this to next meeting and decide to remove the name.

MLS: Safari tech preview is shipping it as well.

LEO: This is a thread that has been going for a very long time, and I don't want to keep advocating for this renaming if we can't solve it during this meeting as the problem is time sensitive considering globalThis is already shipping in browsers. I am only proposing that we switch to Global. If we don't recommend anything else, the ship has sailed with globalThis.

MLS: I don't think people want this to be the resolution, but procedurally this is the default state.

#### Conclusion/Resolution

Continuing discussion on Thursday.
Consensus was not reached to rename globalThis to Global

## Update on Set methods

(Sathya Gunasekaran)

- [slides](https://docs.google.com/presentation/d/1BeqsmXGPm_GEAApnpIfVZd3KTOykS4tQVQ7FvYTDtHg/edit)

SGN: I'm proposing 7 new methods -- these methods were already presented last time we discussed this proposal. Today, I want talk about specifics of the semantics and the specification of this proposal. How do we deal with set subclasses? We could do minimal core, or per method override (presents slides).

DD: I'm really excited about how rekey helps subclassing. The rekey proposal is a single customization point.

KG: On rekey, it's important to note that rekey is not the same thing as subclassing. Rekey is inconsistent with iteration of the set.

BFS: It's a normalization step for the input parameters.

DD: If you want something that's like "unrekey" that's a much more robust API than what's proposed.

KG: It won't be consistent over iterations, so I dispute the characterization that rekey solves any of the use cases that were put out there.

DD: I can show you code examples that prove that it does.

KG: My point is that there are things that you'd like to do for a set subclass that rekey is not sufficient for.

(5 minute lapse)

YK: Requiring subclasses to overwrite all methods ever added does not work; experience from Ruby demonstrates this.

RGN: Agree with both Kevin and Yehuda, and rekey must be orthogonal to the discussion because there are already examples of conceivable Set subclasses that cannot be implemented with Set plus rekey.

MF: My hope is that with a Set subclass, I can get the new functionality for free.

KG: Another wrinkle is that there are 2 places where these methods need to deal with something that might be a set. One is as a receiver, and the other is as an argument.

JRL: Can someone say why entries/values/forEach/[Symbol.iterator] needs to be in the minimal core?  I think the minimal core is not as large as the proposal is saying it is.

(5 minute lapse)

GCN: It seems like for these cases, there are ways you can implement these in a coherent way. I want to understand what kind of risk we are looking at and how in user land we have things that are implemented incorrectly.

JRL: I don't think there are any new problems with potential incoherence.

JDD: This proposal seems to be bogged down by subclassing semantics. Can we put the new methods in a different proposal from subclassing?

SGN: That's not quite possible because the semantics of the methods need to be decided if we want to support subclassing at all.

#### Conclusion/Resolution

- SGN will look for prior art, and enumeration of use cases, and how follow-on proposals could address those use cases.
