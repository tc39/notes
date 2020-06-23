# June 4, 2019 Meeting Notes
-----
István Sebestyén (IS), Valerie Young (VYG), Pieter Ouwerkerk (POK), Noah Tye (NTE), Philipp Dunkel (PDL), Aki Rose (AKI), Myles Borins (MBS), Mathias Bynens (MB), Randy Luecke (RLE), Daniel Ehrenberg (DE), Till Schneidereit (TST), Patrick Soquet (PST), Peter Hoddie (PHE), Mattijs Hoitink (MHK), Keith Miller (KM), Michael Saboff (MLS), Mark Miller (MM), Guilherme Hermeto (GHO), Sathya Gunasekaran (SGN), Jory Burson (JBN), Shu-yu Guo (SYG), Joe Sepi (JSI), Justin Ridgewell (JRL), Rob Palmer (RPR), Henry Zhu (HZU), Daniel Rosenwasser (DRR), Nicolò Ribaudo (NRO), Caio Lima (CLA), Valerie Young (VYG), Logan Smyth (LSH), Alan Schmitt (AS), Pedram Emrouznejad (PED), Sergey Rubanov (SRV), Nicolò Ribaudo (NRO), Guy Bedford (GB), Ben Coe (BCE), Amal Hussein (AHN), Julien Gilli (JGI), Sven Sauleau (SSA), Jack Steinberg (JBS), Ross Kirsling (RKG)

Remote:
Brian Terlson (BT), Ron Buckton (RBN), Jordan Harband (JHD), Leo Balter (LEO), Frank Yung-Fong Tang (FYT), Mike Samuel (MSL), Shane Carr (SFC)
-----

# Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/06.md)

## 7. Report from the ECMA Secretariat

- [Presentation](https://github.com/tc39/Reflector/files/3232735/tc39-2019-026.pdf)

IS: Page 3, total downloads, everything highlighted in red related to TC39.

IS: Opt out period as a last chance for companies to opt out from the ES-2019 Specs including their own IPs, that they do not want to see as part of the specification. This is required by the IPR policy, but in practice it has no practical relevance for TC39, as the JS language is not patent sensitive.

IS: For ES-2020 we will freeze specification again next year to give similar opt out period.

IS: This opt-out procedure has to be done before releasing any final version.

IS: On ES-2019 we can still make small editorial changes until the last minute but at some point TC39 Chairs need to notify the Ecma Secretariat which is the final version that we should officiall publish as ES-2019 standard.

IS: Thank you for very hard work from editors to have made this possible. Great job.

IS: Still some issues with PDF version. Not solved. By the way, US department of defense has asked us to send final copies of 2019 version, what we did. Would be nice to fix PDF version at some point in time that we do not send out printed versions that look not the best.

IS: These copies end up in the National Library and Ministries, etc.

IS: Would like to ask for help  to summarize what is new in this new version. PR is important.

IS: Need material for the Ecma News Press Release on what happened in Berlin, links, youtube videos

IS: if you see some problems with new website please let us know. This is coming up sometimes around this summer(?).

IS: Need to find a way to present the ES-Discuss archive from 2006-2019, not really readable in current state. But at least we have received the zipped archived files from Allen Wirfs-Brock.

IS: historical archive has shown to be useful in the past, important to have it in a readable way. Not only for history reasons but also because similar idaes tend to come up periodically, so it is useful to see, what reaction there was in earlier cycles.

IS: Patrick Luthi is going to be my successor as SG starting August 1. Will find a place and time for them to talk to folks. The Secretariat of TC39 has to be settled too, but no worry.

IS: Currently we're in an overlapping state, transitioning the role of SG until July 31 .

IS: ExeCom gave green light to 2019 version during its latest meeting.

IS: We have a conference calll as part of the Ecma GA on the future direction of Ecma. Zoom conferencing system in place for the June 27 2019 meeting so anyone can attend - who is interested in the topic.

IS: Our style in Ecma is from the 60s, it can be out of date now in 2019. We agreed that from now on we'll use first and last name, instead of gendered honorifics. Will leave it to each TC to decide specific usage of honorifics in minutes.

IS: Everyone interested in participating in GA is welcome to participate.

IS: Still have the possibility to contribute to fellow award for December 2019. Probably out of time for the June one.

IS: We have recommended Dan Ehrenberg for the June award, plus one more person from TC39.

## 8. Reports from Project Editors

---- Put the notes in the order that we end up discussing things ---

### 8.ii ECMA-402 (Internationalization) Status Updates

(Valerie Young)
-  [Presentation](https://docs.google.com/presentation/d/1rZrpQlgux4IoNvMXBHRb3l9uTvM4ff8wIxWD1H3SPwU/edit)

VYG: For those who don't know, intl, e.g date object impl, etc.

VYG: Monthly 2 hour phone calls, can be joined, everybody welcome.

VYG: If you want to contribute look at todo column of project board.

VYG: Three editors, which is unusual. Me, Leo Balter and Isaac Durazo

VYG: Lots of action last month. Three of them being discussed at this meeting. First one waiting for impl but otherwise good to go (stage 3?).

VYG: New PRs from last couple weeks.

VYG: Stage 3 proposals

- Intl.relativeTimeFormat
- Intl.locale
- Intl.ListFormat
- Unified Intl.NumberFormat
- Intl.DateTimeFormat.prototype.formatRange
dateStyle/timeStyle more user friendly formatting of date/time string
- Intl.Segmenter

VYG: Stage 1 Proposals

DisplayNames

VYG: Real quick overview but you can look at slides and notes to learn more about those proposals.

VYG:  TC39 Task Group now we're formalized

VYG: Get involved, there's a git repo. Feel free to give feedback. If you speak any other language than English your feedback is super valuable!

### 8.i ECMA-262 Status Update

(Jordan Harband)

JHD: 50 to 60 commits since 2019 finalized. Few normative ones especially around atomics. Strengthening the atomic model to provide better consistency.

JHD: Changes to string representation. Unicode updated for Unicode 12. We

JHD: Repository level things, Issue templates to try to have more helpful being filed.

JHD: Discourse link in README, things like that. ES2019 hasn't had any editorial changes pulled in; it's there in a branch. We're working on ES2020.

### ECMA-404 Status Updates

DE: No update for 404.

### Test262 Status Updates

(Caio Lima)

- [slides](https://docs.google.com/presentation/d/1fvJ0M4y-M8FD8Vep1sKBftumx_LkENSlwEU3yC3bOIc/edit)

CLA: Newly added tests: strange edge cases related to using proxies etc.

CLA: Build infra improvements

CLA: Looking for people to help us because it's a ton of work to do. Check before contributing to know how the contribution process works. Thank you Leo for mentoring new contributors. I was one of them two years ago.

CLA: Check for stage 3 proposals because usually there are tests missing there. Very useful for implementers, because they use those tests to determine compliance.

## Housekeeping from Aki

AKI: Wanted to remind everybody of a new member get-together at 17:30 today

AKI: How it's going so far, what questions you have.

AKI: Have been working on draft schedule. Lots of us with lots to say. Disclaimer: it's a draft and it's going to change. Don't want to rely on specific time slot but useful to know what's coming up.

AKI: A note not from the chair group but from me. I convinced ecma to buy tc39.es. Unless objections, will be the new domain name for the site currently at tc39.github.io. Plan to be adding a subdomain for the discourse but not sure what it should be, feel free to send opinions my way if you have ideas or feelings.

IS: On the request of Aki Rose tc39.es and other names have been reserved as URL. These days they cost practically nothing (12 CHF per year). Generally, we want to have it owned by service provider in Switzerland, because that is more practical for Ecma. At the moment only "tc39.es" is reserved, but no real service and data is beyond that.... Stay tuned...we have to wok on that closely with the TC39 web portal folks.

YS: Let's discuss on the reflector and we can discuss which name we want to go with.

YS: Have statistics for website and wanted to show them to you. Unfiltered statistics. (Would be good to have link to website statistics presentation)

YS: Top 4 countries visitors coming from: China, US, Korea, Hungary, Germany

## Dynamic import() for stage 4

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-dynamic-import)
- [slides](https://docs.google.com/presentation/d/1-z1ZqitVb5z8IZYJZfQXuaSZnpeeQ80Ki2-YWYv30o4/edit#slide=id.p)

DE: Champion is domenic denicola, thank you Domenic!

DE: Widely used by JS ecosystem.

DE: we have a PR against main specification. Needs to be updated.

DE: At the last meeting, we talked about the Realms proposal and Mark looked into this.

MM: Discussed it at the SES (Secure EcmaScript) meeting, discussed whether there would be any problem and concluded we should move forward.

DE: are we ready for stage 4? (no objection, round of applause)

DE: What about import.meta? Does anyone want to champion it for stage 4?

MM: With this not having been on the agenda, didn't spend time looking at it. Let's not consider stage advancement.

DE: total agreement. Would be at a future meeting. If you and your group have time to examine this that would be helpful.

MBS: happy to take a look and see if we can have the time to take it there.

DE: Does anybody else have concerns or would be interested in contributing?

#### Conclusion/Resolution

- Stage 4 acceptance

## Let all early errors be Syntax Errors

(Ross Kirsling)

[PR](https://github.com/tc39/ecma262/pull/1527)

RKG: I have a normative PR today that lets all early errors be SyntaxErrors.

RKG: Basically the spec currently says that if you have `0++` or `0 = 0`, that is an early ReferenceError and not a SyntaxError. V8 and Chakra have fully implemented this spec. SpiderMonkey has avoiding implementing part of this spec to ensure we have this conversation.

RKG: That was two years ago but I've decided to be the one to formally bring it up now.

RKG: Do we want to revisit prior decisions? Who really cares what the type of a parse error is? Becomes a concern if we're considering eval. If we execute `a++` or `0++`, both would return ReferenceError, but no way to know if code was actually executed.

RKG: Early ReferenceError is really limited to those two situations even if you consider that destructuring assignment could lead to similar issues. Haven't chosen to do that. Between these two things can't say spec is consistent.

RKG: We could introduce a new error type to replace early ReferenceError, but I'm proposing the simple solution which is to go back to having all early errors be SyntaxError.

RKG: Mostly reserving this time slot for any controversy that could arise.

RKG: That's all I have to say short of any concerns from the committee.

YS: Does anyone have any comments/questions? (none expressed)

KG: Since no one is saying anything, I want to say I do support this. Would be very happy to see this change.

YS: Do we have consensus on this?

MM: Any V8 folks?

DD: I remember that they said yes.

YS: Do we want to wait for anybody else to give feedback before we can say we have consensus?

MM: XS guys, any comment on this?

RKG: It's wonderful how actually non-controversial this has been.

YS: Any comment from the Apple team?

MLS: We're good with this change!

#### Conclusion/Resolution

- Consensus reached

## For-in enumeration order for Stage 2

(Kevin Gibbons)

- [proposal](https://github.com/tc39-transfer/for-in-exploration/)
- [slides](https://docs.google.com/presentation/d/1Erd-E-73MPjr2kBBSYwK998SQ6roheiOqF2zprKgROo/edit)

KG: Recap: not specified. That annoys me deeply. Several reasons: 1) thing that folks would like to rely on. 2) Actually you can rely on it. Have to put it into your engine if you want to be able to run code in the wild. Not a good situation.

KG: I have a proposal on GH. It has tests cases in there if you're interested.

KG: If you don't do anything weird, every engine agree. Hope to get consensus on some prose that describes the common case. Hoping to say "in this case, you have to follow this order". Shouldn't require any engine to change anything. Maybe JavaScriptCore, not sure.

KG: I would like to get Stage 3 reviewers if we do get Stage 2.

KG: Have specified an iterator, whole purpose is to be referenced in normative prose which says: if neither `O` nor any object in its prototype chain is an exotic object, then the iterator must behave identically to it, until either O or an object in the prototype chain  has its `SetPrototypeOf`, `DefineOwnProperty` or `Delete` internal method invoked.

KG: Basically you can't have anything weird happen unless one of these is called during iteration.

KG: All I have to say, how does anyone feel about this?

MM: from the title of this I was really hoping that you'd propose a fully deterministic spec.

LG: been done, every iteration of that has been shut down, so I'm not trying. Got to start small. (laughs from group)

MM: This is a step forward.

DE: Can you summarize technical argument against fully specifying it?

KG: implementers are not all willing to make changes to make implementation align with each other and the spec.

KG: Without asking specifically every engine implementers I don't know but from past initiatives I'm not hopeful.

DE: (missed question)

KG: Do you look up complete prototype chain before iterating, do you check getOwnPropertyDescriptor before iteration or during. Is there a bit stored on the object that tells what kind of object it is that defines different ways to iterate, etc.?

DE: Concretely, about the inherited property case, my understanding is that was an interop issue but I don't understand how that is covered by your proposed changes

KG: the case where there's disagreement is that JSC will print out a property present on object with enumerable flag set to false and also set on its prototype chain with enumerable set to true.

DE: So, how does this get that?

KG: This does not get that. My hope is to make one small change that [can be agreed on].

DE: Wondering for implementations when there's this "exotic object" case

MM: The exotics are confusing.

MM: For/in causes a particular trap. Proceeding to use the result of that trap should not be a cause for non-determinism.

KG: It's more than just that trap: you have to check getOwnPropertyDesscriptor to see if the enumerable bit is set, have to call getPrototypeOf at some point, etc

KG: had originally hoped to just completely specify behavior for proxies. Still don't think it's a terrible idea. Seemed to be harder to convince people that it's worth specifying.

KG: One implementation expressed concerned having different path for proxies and non-proxies.

MM: altogether step forward and does not preclude further steps towards determinism later.

KG: Anyone has any thoughts about specifying behaviour for Proxies?

DE: proposal as is seems like a very good incremental step.

DD: Agreement for all impls except for JSC?

KM: Have to look at the bug again. Assuming change in semantics if you have a non-enumerable property shadowing an enumerable one then it isn't output.

KG: That's correct.

KM: doesn't seem like it's going to be a huge implementation problem for us but I guess we'll find out.

KG: Bug number is [38970](http://bugs.webkit.org/show_bug.cgi?id=38970).

YS: Got consensus for Stage 2

KG: Would like to ask reviewers for stage 3.

KG: I will ask WH

YS: I'd like to shadow a review.

#### Conclusion/Resolution

- Consensus for Stage 2
- POK & NLT are reviewing together as Stripe
- looking to ask WH and potentially other for the required additional reviewers

## BigInt to Stage 4

(Caio Lima)

- [proposal](https://github.com/tc39/ecma262/pull/1515)
- [slides](https://docs.google.com/presentation/d/1khTyfcbahlzYghSLcnlhsnK3EH16oLWpP11PE64SKtU/edit)

CLA: idea is to provide a new literal and new kind of (missed) where they can create bigint values. Changes semantics arithmetic operators to allow them to use BigInt value types.

CLA: Introducing two new TypedArrays and new constructors for BigInt() and Number()

CLA: important to have that because no implicit conversion between bigint and numbers.

CLA: Very useful for scientific applications and geometric computations. Main interface to manipulate 64 bits integers to avoid precision loss. Today can implement those computations using strings if you don't mind precision loss and [missed other].
CLA: Also enables high-resolution timestamps.

CLA: cryptography is not an application. No guarantee that operation is going to take the same amount of time for different operands so vulnerable to side-channel attacks.

CLA: Not supporting bigint for unary + to not break asm.js, which uses unary + for a typecast. Decided to throw typeerror in this specific case.

CLA: Follow same approach of number/string addition for bigint/number addition, so we don't throw for that.

CLA: We can compare BigInts and Numbers using <, >, ==

CLA: We can access 64bit TypedArrays with BigInt. Set the value of a position using a bigint, and can retrieve the value also as a bigint.

CLA: Consider last 64 bits of bigint that is > max 64 bits value.

CLA: bigint interacting with all parts of JS, so need to talk about JSON. Decided to not change semantics. Approach right now is to throw an error.

CLA: Implementations: chrome shipped bigint a year ago. Firefox 68 shipping next July I hope. No plan yet to ship in Safari (WIP). Node.js already supports BigInt (since V8 already supports BigInt).

CLA: PRs to introduce tests for BigInt. We're already covering pretty much the entire spec.
Thank you everyone being involved in that.

CLA: PR against main specification is ready. Pretty much ready to merge in the spec.

CLA: Any problems to move to Stage 4?

MM: you listed a bunch of implementations but you didn't list XS. I assume it is supporting it? ("yes" from XS) I suggest that in the future you include XS in the survey.

#### Conclusion/Resolution

- Stage 4 acceptance (pending editor signoff on PR)

## eval(nonString) should not side effect

(Mike Samuel)

- [PR](https://github.com/tc39/ecma262/pull/1504)
- [slides (missing link)](???)

MLS: PR that modifies the spec to bring it to consistency with what most browsers should do.

MLS: the issue is 1495 notes that there is inconsistency. PR 1504 brings it in.

MLS: Web platform tests currently behind experimental flag which would pass once this gets cleared up.

MLS: Problem in a nutshell: relates to how the hosts call out to (missed)

MLS: At the top you can see that there's content-security header.

MLS: The way the spec is written an eval of a non-string value does not actually trigger the host callout. Evan of string takes different path than eval of non-string. Probably a specification bug.

MLS: Browsers differs on how this happens. Chrome and Safari allow it, FF is actually currently spec compliant and rejects it.

MLS: Went over a couple of possible ways to fix this. The one on the PR: simplify things. Two places in the spec text where eval called. (missed) and then there's indirect eval which only has access to global scope.

MLS: Changes the performeval callout to take (missed) so that it can call the post-environment. Today we fix both uses of PerformEval. We figured out a way to make it slightly cleaner. The PR is the authoritative one, but this is the gist of it.

MLS: If everybody agrees we can go and fix this, but I would love feedback.

MM: very suspicious about both realms as being listed as parameters of both functions. Seems to come from a misguided attempt by spec to reuse same internal mechanism (PerformEval) for both direct and indirect eval.

MM: Direct eval is special form that executes in the lexical scope of the code containing the direct eval. Just like other special forms, like "if".

MM: Indirect eval is just a function call, and the realm from which it's called should have no effect whatsoever.

MM: Wanted thoughts on splitting those cases and each case having only the relevant realm as parameter.

MLS: Compatibility concern here. Spec that says: we reject if there's any CSP policy. Would be backward compatibility break.

MLS: (missed details)

MM: I have a very concrete suggestion, that will not create operational difference. Simply include the direct flag as another argument to HostEnsureCanCompileStrings.

MLS: my mistake that I put the slides this way. My apologies for confusion. I believe the GitHub diff, let me go ahead and see if GH diff could resolve any confusion I created.

MLS: (showing GH diff).

MLS: you can see the change to PerformEval. Does PerformEval with the appropriate realm. I see a comment. And yes that (missed) should be there.

MLS: changing the name from evalRealm to consistently be called callerRealm.

MM: HostEnsureCanCompileStrings still has only two parameters. Suggesting that the host cannot do a (missed) job (missed). Suggesting we add a third parameter to pass through the direct flag.

DD: realm is a completely different issue. (missed). That should be pursued as a separate proposal.

MM: Not suggesting that CSP should be changed, suggesting that a flag be added. Then at least the host has enough information that it could make a sensible decision, even though the browser is already committed to not doing so.

MLS: later in this session I will be floating a proposal that provides more context to the host callout. Domenic is right that this is a need-consensus so the scope is very narrow for this specific topic.

MLS: do we have consensus?

YS: do we have consensus from the room? (thumbs up) Anything from anyone remote? )

(silence)

YS: Sounds good as in silence.

#### Conclusion/Resolution

- We have consensus on this.

## Atomics.waitAsync asking for stage 3 reviewers

(Shu-yu Guo)

- [proposal](https://tc39.es/proposal-atomics-wait-async/)
- [slides](https://docs.google.com/presentation/d/1L6cBV_r6RBA_n3NPeab9hSx86QVy3-DPeXg4Dy3yDx0/edit)

SG: async version of Atomics.wait. Was presented maybe a year ago but dropped the ball on updating it.

SG: Atomics.wait loosely modeled on futexes in linux kernel. Semantics roughly that it checks at time of calling if value at index of typedarray if value is what you're telling it.

SG: This is the blocking version

SG: Currently no async equivalent. Proposal is to add async equivalent with instead of blocking thread is to return a Promise.

SG: This was all presented before. Does this all make sense? (silence of assent)

SG: Resolution of cross agent promises done by HostResolveAgent

SG: There is a cross-agent promises list.

MM: I'm not understanding why is this a host hook? There's nothing about the mechanism that should differ between platforms?

SG: Isn't there a difference between hosts when you choose to queue the tasks to resolve the other promise(s)?

DE: There's a bit of complexity here, one of the other agents maybe IDL. The ideas that there's a certain run/event loop that each agent has, which are host-defined. The way it works in HTML if you need to wake an agent you need to queue a task.

SG: The take home is this is an embedder issue and shouldn't affect the semantics.

DE: Note, there will be a discussion about HostResolveAgent later, its role, how implementors will work with it.

SG: Main miss for stage 2 that (missed) identified last time. Semantics for waitAsync that promises are resolved in FIFO order, except if agent is already blocked. Motivation is if agent is blocked then resolving does nothing because agent is blocked.

SG: Semantics now proposed is that there's a queue of queues. All of the waits are on the same value and same typed array.

SG: Idea is that we have an agent-cluster-wide queue and a per agent queue of promises.

SG: Final argument of notify is how many waiting agents to wake up. It goes in FIFO order.

SG: This way everything is in FIFO order, there is no way for an agent to jump the cluster queue and starve another agent.

KM: Is this a strict requirement to have this (this ordering)?

SG: it is planned to be the required ordering at this point.

KM: my general experience and understanding having talked to people who are experts in blocks is that requiring super strict ordering tends to result in much slower in the micro contention case. In the end you'd have a situation where you require (missed). Maybe it doesn't matter because performance difference between this and C code might be sufficiently large that queuing time doesn't matter. Usually you want to spin-lock, adaptive lock. You may want to implement this lock as an adaptive spin.

SG: Still contained fairness, but a different kind of fairness?

KM: I guess, you can have other type of fairness. Instead of FIFO order, within n people who get queued, if someone is spinning, someone may bypass the queue. There is some arbitrary metric monotonically increasing that you will acquire.

SG: I'm definitely sympathetic to that, so far by ordering and no starvation is fair for me.

KM: This is the usual definition that I would use for fairness. The one here is the standard one that you can see in CS class on systems.

KM: We can talk about it offline.

SG: I'm not asking for stage 3 I'm asking for reviewers.

KM: I can offer commentary on the fairness thing.

KM: Actually I can review it.

#### Conclusion/Resolution

- Reviewers:
  - Daniel Ehrenberg
  - Keith Miller
  - Rick Waldron

## Annex B reform

(Mark S. Miller)

- [slides (missing link)](?)

MM: got this section in the spec that has sort of been functioning as a dumping ground for things we need to codify for things are not part of the main spec.

MM: With the exception of XS, all of JS engines are primarily targeted to browsers. Outside the browser is everything is normative but optional

MM: What I always took "normative but optional" to mean is that you don't have to implement each element, but if you do implement it you must do so as specified. Somebody else took it to refer to Annex B as a whole, that is, you must implement Annex B as a whole or not at all.

MM: This was one of these cases we arrive at consensus on words because we didn't realize that we had not arrived at consensus on meaning.

MM: In the last paragraph (of the Annex B intro) uses "normative" in the natural language sense of normative: "a recommendation". "Programmers should not assume the existence of these features when writing new code. Implementers are discouraged from implementing these features unless the implementation is a part of a web browser or is required within a web browser." (quoted from Annex B intro)

MM: I think that is a very nice set of distinctions to have in the last paragraph that we actually discourage those features to be used or implemented when they're actually not part of the language.

MM: I want to use this Venn diagram to highlight the different categories. Including both strict and sloppy.

MM: Let's divide Annex B into two portions: safe and unsafe. Safe = `string.prototype.bold`, a little utility that makes HTML text out of data. Unsafe = `regex.$1` which is a global communications channel that simply reflects data from whatever the most recent match is of a regex instance in that realm against some string.

MM: There's stuff that's just perfectly safe from a non-locality, causality perspective. From this Venn diagram I'm going to make some recommendations on which things are going to stay in Annex B, and which things we're going to recommend bringing in the main spec.

MM: discouraging code is basically impossible; we can't prevent implementers from implementing optional parts of the spec, and we can't discourage programmers from using implemented APIs.

MM: This is an inventory of the elements of Annex B. Let's start with things that apply to both strict and sloppy code.

MM: Escape and unescape I believe are universally implemented, correct me if I'm wrong. (Nods from XS)  `__proto__` I was surprised to find both the __proto__ access property and the {__proto__: ...} syntax in Annex B. Having variable syntax where some systems parse according to Annex B, and other systems parse not according to Annex B, where the same program text can have different meaning is a disaster. In a system not recognizing {__proto__: ...} as special syntax, it would instead evaluate to an object with a plain own property named "__proto__" with no effect on the inheritance chain.

MM: The `__proto__` access property and the {__proto__: ...} are in fact universal, and should be made mandatory.

MM: `__defineGetter__`, `__defineSetter__`, `__lookupGetter__`, and `__lookupSetter__` are all universal. Their specified semantics is simple, and they are easily implemented in terms of defineProperty. However, some current platforms provide buggy implementations of these, that leak the global "this" value.

MM: This is an example of why codifying it in a more mandatory fashion would make it less likely for these bugs to go unnoticed for so long. They would have been more rigorously tested.

MM: String.prototype additional methods there are substr, which is essentially another way to say slice. There's a whole bunch of HTML things including blink. And there's trimLeft and trimRight. If someone wants to argue that blink specifically remain optional, I would not resist. But the rest should be made mandatory.

MM: On date there is getYear and setYear, both of which are 2 digits year if I recall, causing Y2K fear. They're universal. Likewise toGMTString.

MM: Regex.prototype.compile is an odd beast. Last time I looked at it it seemed it violated the semantics of Object.freeze, but I haven't looked at that in a long time. Anyway, perfectly happy to let that stay in Annex B. It should not be mandatory.

MM: As with all optional properties, by leaving RegExp.prototype.compile optional, you enable a conforming implementation to omit it. By making it deletable, you enable a startup shim, in an environment where it is present, to delete it, producing a state that is still a conforming initial state.

MM: The upcoming Error stack proposal codifies Error.prototype,stack as optional, in Annex B, while introducing getStack and getStackString as virtualizable globals that are mandatory.

MM: Document.all is a horror that exists for one particular purpose, and shouldn't be implemented anywhere else. For people who don't know what these oddball cases are, in a way that's the point for things who remain in Annex B and be as optional as possible.

MM: The `for (var x = y in ...)` is completely meaningless and useless but it is accepted, I am not sure if it is sloppy-only.

KG: It is!

MM:  In that case I'm much happier. I read the text about var declaration inside catch blocks but I couldn't understand.

KG: Catch parameters are lexical declarations, and normally you can't have a lexical declaration that conflicts with an existing var declaration, but `var e` inside of a `catch (e) {` predates let syntax. So `try {} catch (e) { var e; }` was legal in ES5 and it has to remain legal in ES6.

MM: The var thing I'm very happy that's sloppy only, I'll move it in the (missed) section. My bias on syntax is to mandate syntax because however horrible the syntax is, having the syntax parse programs differently is a worse horror.

MM: Annex B also has mandated several pieces of syntax that are already specific to sloppy mode. To my mind quarantining them to sloppy mode is adequate. They don't need to be doubly quarantined by also being in Annex B. Any code that's avoiding sloppy mode and any environment that enforces the absence of sloppy mode already avoid these cases.

MM: There's these things that we never codified that are part of JS: .caller, .callee, .arguments Anyone who implements sloppy mode should implement those.

MM: Now I want to bring attention to the greatest horror of them all, which is html-like comments. Everybody that has taken part in building an accurate JS parser, raise your hands. For all those people I'd like you to keep your hands down for next question. For rest of you, who believe that they understand correctly how html-like comments are parsed? OK 1 person (Aki, because Leo Balter had explained) !

MM: HTML-like comments, they are not specific to sloppy. Distinction between program code and module code. Module code does not recognize them. Fact that this parses as html comment somewhere and does not parse as html like comment elsewhere means that you can write the same code that means different things depending on context.

MM: Somebody found a complete attack against Caja, because the Acorn parser that Caja used to look at the code first, before passing it on to the platform, misunderstood the rules to parse things that looked like HTML-like comments.

MM: Having these things in Annex B makes it that much worse. Even if you know things are being parsed by an accurate Script parser (not module parser), since it's in Annex B, you don't know whether it's been parsed recognizing html-like comments or not. Parser-based tools --- transpilers, linters, syntax highlighters, IDEs, don't know how to parse accurately if they don't know whether the target platform implements this optional parsing rule.

MM: My recommendation is that HTML-like comments be promoted to the main spec. Even though they're horrible and I'd like to kill them, having them be recognized somewhere and not elsewhere is worse than having them recognized consistently everywhere.

KM: Can you clarify what you mean by mandate?

MM: What I mean by mandate is by moving it into the spec and removing the text that mentions it's optional to implement it.

KG: You said recognized everywhere, even for modules?

MM: The current spec mandates that modules not recognize html-like comments. I made not recommending that modules do recognize them. But I have a very distasteful recommendation for modules which can stand separately. What I would recommend for modules is that if those string occurs in code for modules, that it's a static error.

KG: Even in a comment?

MM: Everywhere they would have been recognized as html-like comment in code it's better to have them as static error because people move code between script and modules. In order to avoid a program silently meaning different things either for accidental or malicious purposes, I think it's better to have modules reject that code. Our tools, including transpilers, do not switch their recognition of html-like comments depending on whether the code is supposed to be script or module code. Thus, the only safe things for modules to do is to reject these.

(MM realizes post meeting: Even better is to continue to leave a normative choice in the spec, but a different one: html-like comments should always be detected, but they can either be accepted according to the html-like comment rule, or they can be statically rejected. This would allow any parser-based to statically reject, while still conforming to both the script and module grammars.)

MM: No concrete proposal today, just wanted to raise this and have that discussion so that we can reduce the size of Annex B so that introductory paragraph can maintain its force.

KM: Do we know if standard minifiers are aware if they're emitting code in module or not?

MM: What I know is minifiers all have a mechanism that prevents them from emitting an apparent html-like comment string as a result of rendering an operator tree.

KM:  I can totally imagine that `-->` can be emitted from (missed) places.

MM: Any further comment?

AVK: Main thing I want to say is that it is overdue, at least from browser and html embedding side, having it separate is bad.

TST: Would you say that there is there more it might be okay for the main spec to (missed) mark as optional?

MM: We need to distinguish two motivations for making things optional. Making things optional in general,  one mandatory for all browsers. I understand why people implementing browsers need spec of what is mandatory for browsers. Those two things can be decoupled, where those two things end up when they're decoupled doesn't necessarily matters.

TST: I agree, but obviously one of these is different from the other (missed)

MM: WeakRef.prototype.constructor doesn't yet exist. Error.prototype.stack, and sloppy .caller, .callee, and .arguments exist de facto but not yet de jure.

MM: Moving things from Annex B to the main spec explicitly marked normatively optional, I don't have any problem with that.

DE: Moving more things into the main spec sems really good. Editorially having them out of line has been confusing a lot of people as you pointed out. Is there still a thing that we want to call normatively optional? If so we keep it inline. In HTML spec (missed) these are very useful because when you read the spec you don't need to skip as many things. I know an engineer who's trying to implement JS compatible regexps (missed). We should as much as possible put all the text inline, and if we want to add some metadata about it, then this would be very good editorially. Does anyone have any concern about this?

DD: In the absence of concrete proposal we should not add to Annex B - moratorium on Annex B.

MBS: Does anyone object on moratorium on Annex B?

MM: We don't yet have consensus for what it means for something to remain in Annex B. I think I'm ok with what Domenic is suggesting but as long as we're willing to reconsider if a particular case comes up. If there's one thing for which we really want to put it in Annex B. With that provision we're willing to consider the odd case, then yes I'm for that.

LB: This presentation feels like a description of the problem. How do we follow up/what happens next? See this as a proposal, would co-champion this.

MM: I'm not volunteering to lead an effort to turn these things into PR or proposal. But if somebody is volunteering to lead that, I'm certainly ready to help with that.

DE: I think the next steps from here it makes sense to follow -up with issues on the main ecma repository about these two plans we can pursue incrementally with PRs. Moving some things from Annex B into main spec, and making sure that the rest of Annex B is inline normative optional. Lots of people who can contribute to these editorial patches if we can provide a direction. I can volunteer to document this potential plan.

TST: Fully agree, thank you

AVK: Are these needs-consensus PRs?

DE: If we get a bunch of PRs, we should get consensus on the package, since it's a big editorial change.

MM: Anything that is a significant restructuring of the spec, we'd still need consensus. I would want consensus on that.

SG: What you're proposing is to rethink where we draw the (missed) lines.

MM: I'm proposing everything on the left side of my diagram, they'd be made mandatory. They are universally implemented, and many programs already rely on those things without problems. Let's make those programs correct.

TST: Leo asked what the next steps are. Two things we can do today. One of those is do we have consensus on accepting changes to the spec that fold certain parts of Annex B into the main text? Don't want to be in the situation where someone does a lot of work to refactor this and at a meeting someone blocks those changes.

MM: Everything in the mandate boxes are normative changes not editorial.

DE: I would be in favor of these things to be mandatory, some of those may be problematic.

MBS: Are we good to move on to the next item? Thank you everyone.

DE: Can we agree that on this editorial plan of moving parts of Annex B to the main spec? And moving some things from normative optional to normative and I think we have consensus. I'm very happy about this result.

DE: We're really talking about a series of editorial changes.

LEO: Should we do this as a staged proposal in a separate repository?

DE: I think it'd be best to coordinate via a GitHub issue in ecma262. We can work with online contributors that way. I'll write this up, help coordinate, and do reviews.

#### Conclusion/Resolution

- We have consensus to move several parts of Annex B into the main spec, not normative optional, including the items marked "mandatory" in Mark's presentation and everything about grammar (both HTML comments and RegExp syntax)
- We have consensus to move remaining Annex B things inline, marked as normative optional there (similarly to what we have in Intl legacy constructor paths), modulo fixing up a11y issues that BT raised.
- DE will file an issue to describe the concrete next steps, so that others can fan out and write up the changes.

## How should we specify Jobs precisely?

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/???)
- [slides](https://docs.google.com/presentation/d/1LLIIwZyQgm6rbAyWbRjFFSNKlA2DPqslpN8sVKjchjE/edit#slide=id.p)

DE: Domenic made this PR a few years ago called layering which fixed the jS infrastructure. That's what I'd like to follow-up on today.

We were discussing this with the atomics, also going to come up with weak references. It's important that we have good spec (missed).

The JS spec uses these terms of jobs, runjobs, etc. A job is used in the spec when a promise is resolved and rejected there's a callback that is executed. In the browser this is called a microtask and we use this term in this committee as well.

In general JS has this run to completion concept.

DE: this is what makes promises run after synchronous code in a function. In HTML & Node, Promise jobs run before the rest of the "event loop".

DE: You can think as all these promise jobs as running in this synchronous (asynchronous?) section.

DE: In HTML and Node, the algorithm (simplified) is: run the JS code, run the Promise jobs, return to the event loop (which may call back into javascript, eg when network connection comes maybe call some event in js).

DE: This is a huge simplification, there are a lot of details.

MM: What was the simplification?

DE: It is an abstraction.

DE: The goal of this *proposal* is to let the job ordering be precisely specified, to ensure interoperability between implementations. We want to specify JS precisely, and thereby also precisely specify implementations which are supposed to be interoperable.

DE: In html there is the html event loop. There's proposal to change this such as the scheduling proposal from the chrome team. In node.js there's also (missed).

DE: Editorially in the spec we see these core algorithms enqueueJob and runJobs. Ordering and (missed) are implementation defined.

DE: This ends up so messy and strange and hard to hook into. HTML uses a willful violation of JS. Here's what it means when the JS specification calls enqueueJob. In some web/JS implementations the code does correspond to this. Other times they reusing some of the logic, but in general when trying to figure out how these things fit together, the (missed).

DE: Why does this matter? Several proposals touch the job queue: promises, WeakRefs, atomics.waitAsync, maybe more. I'm optimistic that in this committee we'll be expanding the JS library and adding more capabilities to the language.

DE: We'll run into more cases where we'll need to specify those things. Current mismatch is just confusing, the multiple job queues has been a source of confusion for people reading the spec and trying to figure out what's going on.

DE: DD's proposal was basically that we'd have this HostEnqueueJob operation that'd take queueName. Would always use the promises queue or something like that and it'd use this job structure, it would be [defined by the host? Missed details].

MM: You're saying the Javascript spec should specify what the hosts must follow?

DE: the PR includes set of self-contained example use cases.

DE: Really seems like it provides the exact same invariants as current specification.

DE: Alternative which was sort of based on help and discussion from Anne and Domenic was to have one-off (missed).

DE: In WeakRefs the current draft spec text uses this HostleanupFinalizationGroup. It's expected to queue up calls to CleanupFinalizationGroup. It doesn't use jobs. We could use similar organization for promises.

MM: just a clarification question: The CleanupFinalizationGroup doesn't use jobs (totally missed that)

DE: Sort of philosophical question on how we should editorially write that down. I believe run to completion is really important invariant for JS and it'd be important to work on wording for that.

DD: Really like the simplicity of the WeakRefs/Atomics approach

DE: I think it's personally what I would choose between the two.

DE: Point of this proposal is to allow us to precisely (missed).

DD: thank you Dan your work on this. Lots of opportunities if we go that direction which is simpler. I like that a lot.

TST: This would be cross spec refactoring that keeps the same behaviour across systems?

DE: yes exactly there would a bit, number of algorithms in spec that are dead spec text. Top-level module evaluation job that are abstract, tied in. The idea would be to clean this up and really stick to clear. Once we would remove those the only thing that would use the job queue right now would be promises.

TST: Is follow-up to tighten requirement on when jobqueue is (drained?). You can't use the full flexibility in what we have right now in all implementations because you can't serve multiple job queues in arbitrary order.

DE: Reading Allen's comments, has a clear explanations on (missing)

DD: I looked into the implementation they were doing, and it was to drain the jobs queue, then do the function call, which was a really roundabout to do it. So, just, don't do that.

MM: I think I don't understand the point that is being made wrt weakreafs and atomics. They schedule this callback to the finalizer that happens later. What does it mean to call it or not call it a job. And what does it mean. I'm just confused.

DE: Short answer: it doesn't mean anything. There's basically 3 points in time: jobs correspond to what HTML calls "microtasks", which are drains at particular points. Then weakref finalization happens after microtasks are drained— (interrupted)

MM: The JS microtasks are there's multiple microtasks queues spec doesn't say how many there are. Not advocating we stay with current, don't understand the point made for weakrefs and atomics.

MM: Is the weakrefs finalization and anything else and therefore must it happen before (missed)

Would happen after all of promises, rationale is that

DE: There may be other I/O that would be queued on the event loop.

MM: Certainly possible for there to not be a queue, but it's possible that nothing could happen if there's a queue.

DE: I think you're taking the inverse and conflating it with the initial thing. One situation is that we need to call the (missed) when the engine is idle. This sort of structure is how browser, you can't wake up the engine by adding a promise job. It runs at a lower priority.

MM: Trying to understand wrt what's being said about weakrefs as an example. From what was presented early, would have assumed that all promises run to completion first, then all I/O tasks happen when there are no queued promise things.

AVK: What engines intend to implement is promise queue is drained, then weakrefs happen, then (missed).

MM: Asking about weakrefs vs I/O events.

DD: Weakrefs also need to enqueue something. I don't think we need to nail-down something like layering in order to make that work.

DE: There's nothing inherent about the ordering there.

MM: Not trying to argue about weakrefs here, just using weakrefs as example of something and trying to understand what that something is an example of.

DE: It's an example of when we need the host to be involved in scheduling something. There are times (like waking from sleep) that require the host's input for scheduling. Happy to go into details.

MM: OK I think I'm not asking about HTML, asking about the meaning of what you're proposing as (missed). Let's take it offline. I'm confused, not objecting to anything.

DE: Can we try to come back to this on Thursday? I would like to come to a conclusion, it's been on for years.

DD: Anyone else have any issues?

KM: do we have anything for Test262 in terms of having specific ordering somewhere?

DE: Just editorial change so nothing we can test about it.

KM: For the sake of testing what the freedom of what the JavaScript language specifies... for like webplatform tests.

DE: I don't know what exactly we should put in Test262 and what we should put in web-platform-tests. We could put weakrefs and how they interact.

AVK: To some extent it's an ongoing problem with workers and other things and how they should be tested.

#### Conclusion/Resolution

- DE to follow up with MM, who's in favor of the overall direction, just wants to clear up confusion.
- No other concerns raised

## Set "name" property for anonymous functions

(Sathya Gunasekaran)

- [proposal](https://github.com/tc39/ecma262/pull/1490)
- [slides](https://docs.google.com/presentation/d/1G-i0HpZaH6xkJPuJTJ2yUoI6Qk28Fe837aeOjT_-HsM/)

SGN: Small update on setting own name property on anonymous functions.

SGN: Little background: ES2015 says There should be no name property on anonymous functions.

SGN: This wasn't well-motivated. Not a performance thing or anything. No overhead for engines to do it. The name getter is lazily created.

KM: Probably.

SGN: Current status (cf slide) v8 & spidermonkey agree on almost everything (wrt anon functions/classes/generators/etc), whereas Chakra implements it per spec, and there is a bug and they don't have async generators.

MM: What does "cycle" mean?

SGN: JHD wrote a test for the various browsers, and it just ran infinitely in a cycle.

There's a bit of back and forth on GH issue already, conclusion of that discussion is that you would add own name property of anonymous functions. It is possible given that Safari does it. PR by Andre bargull with all of this specified and needs reviews, assuming there's consensus here. Any questions?

MBS: Doesn't look like we have any question, is there something on the queue?

KM: What's the actual change left?

SGN: We added one `name` property to anonymous functions.

TST: We're all failing a bunch of tests because we are not spec compliant (and this proposal would make the spec match the implementations). We moved this because we'd need a flag that (missed).

SGN: Would be great if we could come to a conclusion here.

DE: very in favor of this change. I apologize for not reviewing this PR. This is probably good editorially.

What we could try to accomplish here, is if we could get consensus on the semantics, then we can get Test262 to get these tests passing again.

SGN: That's exactly what I'd like to do. Once the reviews are done can we merge it?

LEO: I'm +1 with this change and I'm interested in writing the tests for this. The skip list we have in V8 will be helpful to flag the tests necessary to update on Test262.

#### Conclusions/Resolutions

- We have consensus on the semantics of the change to add an own "name" property to anon functions and classes (if web compatible)
- We need more folks to review it.
- We're waiting on reviews and tests to merge it.

## Trusted types

Mike Samuel (MSL)

- [proposal](https://wicg.github.io/trusted-types/dist/spec)
- [slides](https://docs.google.com/presentation/d/e/2PACX-1vQCbxmHKjPWUq7MC91x6tJKanFYU2i9Z13wwfkngcseHt96EfU_xyA0awkxb4SoNW3hQ3S2z-ByX0T9/pub?start=false&loop=false&delayms=60000)

MSL: An explanation to provide context for this stage 0 proposal that I hope to put before everybody tomorrow or the day after.

MSL: Trusted types is a WICG proposal that affects JS APIs

MSL: I work in google security engineering group, For the past six years we've been trying different things. Trusted types is an attempt to bake Google's internal strategies for combating XSS into the browser.

MSL: When security researcher find an XSS security issue they report it to us. That's what those stats show. [see slides]

MSL: Very happy with these techniques. Proposing to bake these into the browser.

MSL: Reason it is timely because biggest trending security bug is DOM XSS. Happens when a developer lets an attacker control stream reach an (missed) API.

MSL: Problem is twofold: easy to introduce, easy to give an attacker string access to DOM APIs, and really hard to detect.

MSL: As client-side web frameworks become more popular dom xss is increasing. Neither static analysis or human reasoning are doing a good job of mitigating that.

MSL They they work you can opt in by a header, CSP

MSL: Does require changes to the way you do things. Promise of trusted type is it's going to guard DOM sinks.
Guards DOM sinks (like .innerHTML).

MSL: You can't assign any string with html, but you can with Trusted Types [see slides]

MSL: Decision to trust can be very far away from the side-effect. Once the trust decision is made, that trusted value can be used later in a DOM sink.

MSL: What this means is that we as a security team can focus our attention on verifying small amount of code that can affect the results of those policy objects.

MSL: No effect on semantics, Big organizational effect. Think about why teams of good developers produce bad code.

(MSL reading comics in slides deck)

MSL: "Not clear to me how my individual contribution will have clear impact on security, so I'll focus on adding new features".

MSL: Goal is to overcome the inability for a rational actor to balance security with new features.

MSL: Makes a third party more effective. When a dev can reasonably assume that security can't be broken by any other dev, they can prioritize well.

[MSL showing code sample from slides of how to create policies]

MSL: Once trusted types have been turned on in dev, you get errors in the dev console about using unsafe strings for DOM.

MSL: Because system fails closed, it's one more bug to fix but it's a visible one.

MSL: When they go and talk to their peers they have something to show. No single developer has to be responsible for those security issues now that those policies make those problems visible.

MSL: Implemented in Chrome. Believe Firefox people are playing around with it. Got some spec text still being worked on. Love feedback on issues tracker and discussion group.

MSL: As I said before, I'll be presenting couple stage 0 proposals that enable some of the work we're doing. Questions?

MM: Trusted type function should verify, not coerce, argument. Rather than `String(arg)` more like `if (!(typeof arg === 'string')) throw ...`. The hazard with coercing is that the caller may inadvertently be holding something something that coerces to different strings at different times. This wouldn't violate the trusted types guarantees themselves, but it might mislead callers into assuming safety properties they don't have.

MM: First of all would like to endorse your citation of jim morris' paper, Protection in Programming Languages. I like the overall direction. Question on a detail in your presentation. Can you go back to slide with significant amount of code? You're using "String" to coerce x to a string. For this type of security code it'd be better to verify rather than coerce. The caller might reason that if the result of passing x to this is good, then x has some kind of good attribute. If x simply coerce to a String that was good this time, doesn't mean it'll coerce to a String that is good next time.

MSL: That string is unnecessary. Risk of polymorphic objects.

MSL: Even if dev on a deadline decides to replace globalThis.String I think it'd still fail closed. But agree this is a risk.

YS: Other questions or comments?

DRR: You have TS support as well? Are you statically verifying that or are you doing runtime checks?

MSL: TS and Google's closure compiler both have unsound type systems. We're not actually relying on the type system for this. Reason why we believe DOM XSS is biggest security threat because reliance on unsound type linters for client-side JS we're not checking trustedness everywhere we should be.

[missed additional question]

Linters and static type analysis will be helpful to support devs to migrate applications' code. It's an explicit goal to not rely on static analysis for security. Instead we bake dynamic enforcement into the browser.

#### Conclusion/Resolution

- No conclusion, this presentation is just for TC39's information. MSL will be submitting Stage 0 soon.

## JavaScript Standard Library for Stage 2

(Michael Saboff)

- [proposal](https://github.com/tc39/proposal-javascript-standard-library)
- [slides](https://github.com/tc39/proposal-javascript-standard-library/blob/master/slides/JSL-TC39-June-2019.pdf)

MLS: We have a lot of topics to discuss. Including some contentious ones. [Agenda from slides].

MLS: Proposing built-in modules shipped with the engine. This proposal is about the mechanism to do that, not about the content of the built-in modules themselves. Some confusion about this in previous rev of this proposal.

T Namespaces: talking about how to identify what we import as it pertains to domains of the technology that is in a particular library.

T: Contentious topic: Do we have one unified namespace that everything pulls from, or separate namespaces?

T: (Referring to slides) Follow same exact syntax that exists for importing modules. Proposing that module specifier has a prefix.

(see slides for example)

T: "js:" prefix specifies that it's a JS core module that you're importing.

(continues presenting slides about "Why module domains?")

DD: Wanted to point out a lot of interest from non-browser environments, like CloudFlare and Node.js for kv-storage.

MM: Other environments like Node.js, which have a kv-storage, what should be the main prefix there we should work out. There's also the option of a Node-specific prefix.

(MM points out to next slide about domain specific prefixes)

MM: Don't think we're the ones who should define what those prefixes are. All three of these worlds would be able to access the language specific items. I know there's different viewpoints on this after talking to different implementers, we're looking for questions and comments on this..

NTE: I don't understand the motivation for a standard library.

MM: we assumed that everyone understood the motivation for standard library. Global object has issues. The first problem is memory and startup time to start an engine.

MM: The second problem is the pollution issue, a lot of stuff in there, for example Proxy, probably you're not using that in your current application.

MM: The third problem is that programmers can clearly define what they want with standard library import.

MM: Standard way that people add functionality is they change that global object and there can be danger in that when two modules want to do that and there's collision. And often that's discovered late in the process.

MM: Is that sufficient to answer your question?

NTE: Yes.

AHN: How does this retroactively affect what's in the global namespace?

MLS: Short answer, It wont,

AHN: Shouldn't?

(missed answer)

AHN: How is namespacing preserved as well, things like import * as, etc. Curious what the namespacing story and collision semantics are.

MLS: Same as for modules. Want to give a clean environment for developers.

MLS: We're trying to avoid this big global object while not breaking the web.

AKI: now that we're done with clarifications let's move on to strong opinions.

TCN: Lots of IoT stuff for node. Fetch example of something in the web but not in/for node. These things are not necessarily mutually exclusive. What is the path forward to making sure these things are shared instead of separated. E.g. node could potentially implement IoT.

MLS: We're creating a world that requires more or different coordination than we have now. If creating array like object I own anything that is on that prototype. Here we have to have coordination. Makes sense you bring up IoT and node. Makes sense you wouldn't have IoT or other domains specific to just one type of host. You can think that some of the browser's tech will be shared with node. But calling it javascript is not the right thing. Still need some coordination that exists. Those groups interested in IoT would need to coordinate. We're not offering mechanism for that coordination. High order in my mind for having separate domains if for the programmer. Programmer understands I want to use x, it's part of JS, I should be able to find it in the js: namespace.

??: There is something distinct about tc53 is doing, it is a very different runtime model. The APIs we're designing you may not want to use them in node. I don't think the goal of the work of tc53 is to be universally useful.

MM: would you agree that it'd be useful for you to have a specific domain?

??: Absolutely.

MLS: I can see that tc39 js:, but also intl: as a separate domain because it's distinct functionality that is clear.

MBS: looking at is and i'm conflicted, as I would not take node `fs` to put in js: or web:, on the other hand today the web: is URL, urlencode/decode, would be weird to attach these to js: namespace. Question becomes how do we define that? It just seems confusing to me.

MLS: Biggest JS module providers need to come up with what coordination is needed. Point I'm trying to make is I believe programmer has better mental model if we do have separate domains than if we have a single on. Example of using "map" as a name that can mean different things in different namespaces. E.g. js' map and css' map. I don't know what coordination looks like.

MBS: absolutely make sense for the namespace mechanism. Would be good to clarify from the get go is that the intention is not for TC39 to be owner of the js: namespace.

MLS: we have to allow for that, it can't be this is my playground you can't come in. [missed details on MDN example].

MLS: agree that MDN good place to start documenting this.

GB: not sure about ambiguity on web apis and Node.js. In case of examples we mentioned like fetch, Node.js implementation is not compatible with web one. Could fallback from one to the other.

MLS: Yes and if you have web:worker and js:worker importer needs to know the difference.

BCE: Forcing sharing can be good. Some exciting stuff in node is that we've been integrating Inspector from chrome, as an example. Other thing is worst case scenario is you have a nodejs URL and a web URL.

MLS: or tools namespace

DE: I think I actually wanted to say the opposite. True some APIs are analogous like web workers, other APIs are trying to be compatible, including with tests.

MLS:: we don't want to bifurcate or a flea market of different implementations of the same thing, it's going to require coordination.

DD: Reasonable, but concerned about moving into common modules, for example storage?

MLS: only thing is underlying tech of indexdb. Workers and indexdb are not part of JavaScript. Think of tc53 like watch does it make sense to convey to a developer that they can use a js:kv-storage in an environment where they can't.

DD: Don't think web developers have a mental model of what is JS. Some people think setTimeout is in the JS spec. Some JS impls don't implement portions of the spec like Intl.

MLS: this goes back to the thing we handwave right now: how do you coordinate those domains.

DD: Google's perspective is that js and the web share one namespace.

MLS: why is it fine to have node have separate namespace and not other?

DD: It's up to the hosts to express that. Node.js should express that if that's what they want.

MLS: As part of an implementer of a web team I disagree with that.

DD: It can be more convenient for us to make developers choose whether the web team or the JS team wrote the functionality. But they should not need to; they just use the available APIs.

MLS: It's not who put it in there, it's what it does.

MLS: namespace should convey to the user what technology is in a module and where they can use it. I'm talking from a core language perspective, not TC39 perspective.

DD: Expressing that need of coordination is required

DE: really like the idea of coordinating. One thing we could start with is a GH repository where we can cross reference to different proposals about shared namespace. We could put the different things we're thinking about for the shared namespace. It's easy to point out some of the issues but things are improving over time. Other standards are becoming more open and more collaborative.

MLS: we have to have an online repo of what's in what namespace.

DE: started a list like that a while a go but (missed). Believe it's going to be more subtle than "other environments" or "it's not core JS". Non-tc39 things that are in other envs. Sometimes JS environment that it's really hard to deny it's a JS env. E.g cloud flare workers, yes it's not compliant but it can run a lot of programs. We can use this shared namespace extensively.

MLS: trying to understand the point you're trying to make.

DE: just an example how complicated (missed). Overall it seems that we're sort of in agreement that we'd have a namespace like not everything is specified only by TC39 and we need coordination.

MLS: Need to figure out what goes in what namespace. We have no idea how JS will be used, so no clues what those domains or namespaces will be. Need to be able to evolve, add more prefix.

MLS: we have no idea of JS is going to be used in the future. Don't want to preclude that we have a list of what those domains are going to be. We have to be able to evolve and add more prefixes and domains.

DE: would be pretty skeptical of intl as a separate namespace. Not that big, it seems a bit weird. If we put intl in separate namespace then we get to 6 different namespaces.

DD: when trying to evaluate this proposal it seems we need to figure this out before this can move to stage 2.

MLS: I do believe its required to have discussions with other stakeholders.

AHN: It seems like it's going to be a (missed) model. Who's really responsible ? Is this the browser, the engine, etc.? Also curious why these specific namespaces? That mental model is not immediately obvious to everyone why there are certain things that can only be e.g. in node runtime.

MLS: totally agree with the first thing you talked about. Is our current spec structure the right place to document where things belong. Yes we need new governance model for that and disseminate information. As far as examples, those are just examples. Only thing is that I think we should have a "js" namespace. It's the only one that from my point of view I can feel confident about. Does that answer your question?

AHN: Yes.

MM: Concerned about what you meant, for example "the js: shared across web standards bodies". We must be guardians of what is the language. If we create new namespaces that other people have governance over, then we abdicate governance over our language.

MLS: I generally agree with you, I think we can delegate some of that process but ultimately for core language we need to be involved and say yes. I think that other standard bodies could propose some new library that would be part of the core language and follow our process.

MLS: It could be another technical subcommittee.

MM: That's fine.

MLS: That's explicitly why I want multiple namespaces, so we don't just have Global Object all over again. Do agree with governance model, it could be very different from what it is right now. Is the process the same? It could be a sub-committee or a (missed).

AKI: Do we agree that this needs a governance approach?

DD: Want to point out that we coordinated really well on the shared namespace with other standard bodies. I think we should continue to coordinate. Mark's concern about us being the 'guardians of JS' is why I think "js:" is a bad namespace for us to coordinate in together; the basic namespace should not be something we feel a need to guard, but instead something we collaborate in.

AKI: let's talk polyfills.

(moving to next slide: Module Loading)

Currently one operation that host provides to load modules. Proposing a chain loader where (missed, maybe built-in loader?) would register its module loader. Slightly more generic option than what is strictly necessary. Partly based on what other languages do things like Java and Python. Would like to look at other proposals like import maps to see if they'd be compatible.

We add a polyfill where we think incompatibilities are problematic—missing modules, incomplete implementations, or changing behavior. Import maps could be a good polyfill solution to be provided by a host.

MHK: Some alternatives that were suggested that we should be aware of. [moving to "alternatives" slide].

MLS: Import maps answers all those different scenarios

MHK: Pipe symbol alternative proposal. [referring to ModuleSpecifier fallbacks slide].

MHK: Special do block (referring to import statement callback slide)

MHK: Final option is doing this at runtime [referring to Runtime Hooks slide]. Very flexible but security considerations. We can expand this API such that it becomes more and more complex. Can also do things like intercept crypto module and load something that does insecure things.

JHD: what language-mandated mechanism will exist for altering specifier meaning? Node currently doesn't have import maps. JS engine could exist with the current proposal that doesn't implement those hooks. Allowing host to *optionally* provide the requirements for me does not meet the requirements. What if a host doesn't provide one of those mechanisms? Is import maps required to be implemented in some form by this proposal?

MHK: Polyfilling means something different for every host.

JHD: When I think of polyfilling I think of adding/removing/changing functionality, but [missed rest of question]

MLS: (referring to loading chain slide) Two steps process here. Blue is resolve, red is load. Process continues until you run out of loaders. Implementations can decide how and if they want to resolve a module.

KM: What about host environments? If the desire to replace things as a host-delegated action, I believe that should be at the host level, not at every lower-level of the web page.

AKI: it's 5pm, we're going to have to continue this at a later time.
