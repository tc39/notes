# March 26, 2019 Meeting Notes
-----
István Sebestyén (IS), Kevin Smith (KS), Adam Klein (AK), Leo Balter (LEO), Richard Gibson (RGN), Yehuda Katz (YK), Godfrey Chan (GCN), Philipp Dunkel (PDL), Brian Terlson (BT), Aki Rose (AKI), Michael Ficarra (MF), Chip Morningstar (CM), Waldemar Horwat (WH), Kat Marchán (KZM), Tierney Cyren (TCN), Shelley Vohr (SVR), Myles Borins (MBS), Jordan Harband (JHD), Mathias Bynens (MB), Pieter Ouwerkerk (POK), Randy Luecke (RLE), Daniel Ehrenberg (DE), Mike Samuel (MSL), Joyee Cheung (JCG), Till Schneidereit (TST), Shane Carr (SFC), Patrick Soquet (PST), Peter Hoddie (PHE), Kyle Verrier (KVR), Mattijs Hoitink (MHK), Keith Miller (KM), Michael Saboff (MLS), Jordan Gensler (JGR), Mark Miller (MM), Joshua Peek (JPK), Mu-an Chiou (MCU), Guilherme Hermeto (GHO), Sathya Gunasekaran (SGN), Felipe Balbontín (FBN), Jory Burson (JBN), Shu-yu Guo (SYG), Joe Sepi (JSI), Chris Hyle (CHE), Justin Ridgewell (JRL), Rob Palmer (RPR), Keith Cirkel (KCL), Robert Pamely (RPY), Henry Zhu (HZU), Daniel Rosenwasser (DRR), Caridy Patiño (CP), Diego Ferreiro Val (DFV), Domenic Denicola (DD)

Remote:
Ron Buckton (RBN), Kevin Gibbons (KG), Gus Caplan (GCL), Valerie Young (VYG), John-David Dalton (JDD), Gabriel McAdams (GMS)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/03.md)


## 1. Welcome

MBS: (welcome)

JHD: If your proposal is Stage 1 or higher, move it to the tc39 organization on GitHub. Follow the instructions to transfer the repo to the org on https://github.com/tc39/proposals

AKI: Ping me on IRC if you need help.


## 3. Agenda Scheduling

BT: Shall we adopt the agenda?

#### Conclusion/Resolution

- no objections


## 4. Approval of the minutes from last meeting

BT: Shall we approve the minutes from last meeting?

#### Conclusion/Resolution

- no objections


## 5. Next meeting host and logistics

PO: We are hosting the meeting in Berlin in June. Details in the reflector, issue [#216](https://github.com/tc39/Reflector/issues/216). I am seeking help with community events.


## 6. Report from the Ecma Secretariat

(István Sebestyén (IS))

- [slides](https://github.com/tc39/Reflector/files/2999399/tc39-2019-016.pdf)

IS: (presents slides)

IS: I propose to close the transition period to RFTC at the end of this meeting.

IS: I propose the following structure: TC39 plenary, TC39-TG1 (for General EcmaScript Language), TC39-TG2 (for Intl/ECMA-402). (reads the rest from slide 11-15)

SFC: On the subject of forming this TG, this document is to formalize what we've been doing for a number of years. DE, is there anything you'd like to add?

DE: I'm very happy with the work you've done here.

WH: Who are the participants in TG2?

IS: Anybody who signs up can choose to join which part of TC39 they join. By the way, we are also in discussions with potential new member from a very large Chinese company, who are - among others - very interested in TG2's work for obvious reasons.

WH: But who are actually the participants here?

SFC: At last month's meeting, we had 18 participants. Many of whom are in this room. Do you want me to read the attendee list? The notes are about to be published.

DE: We have generally similar membership practices to TC39. Some attendees were invited guests, just as on TC39. Notes are published to ECMA-402 repo. We're open to publish in alternative locations, if there's interest in that.

[Current Notes Location](https://github.com/tc39/ecma402/tree/master/meetings)

IS: Meeting minutes are required to be recorded as per Ecma regulations. Generally becoming a TG has also the advantage that there are clear rules for presenting a TG's work. Are there any objections to the TG formation? I see no objections, so we will consider this approved. SFC has been elected the chairman ("convener") of the TG. (round of applause and also SFC nods)

IS: (continues from slide 17)

IS: Just a reminder, there is a possibility for TC39 to nominate candidates for the Ecma Fellow (More "lifetime achievements") and Ecma Recognition Award (more for a concrete present time outstanding work) nominees for the June 2019 Ecma GA. Of course that is an ongoing activity also for the next GAs.

CM: Can you discuss the secretariat transition?

IS: We have de-facto not started yet. It is in progress. For the next few months I am still the secretariat.

AKI: Thanks for the update, IS.


## ECMA-262 Status Updates

(Jordan Harband (JHD))

JHD: We've cut the 2019 specification. BT is winding down his editor role and has been passing PRs to JHD and KS. We have not merged PRs because we want to reduce merge conflicts with ES2019. By the May meeting, we will resume accepting PRs. If you have a strong opinion we can merge the PRs sooner.

DE: Why is the practice of merging PRs changed from previous years?

JHD: In previous years, there was more willingness to pull in any non-normative changes into master. There were also fewer large editorial changes. This year, there's just a lot more changes coming in, so we're a lot more hesitant about it. Almost everything that landed during the 2018 opt-out period was back-ported into 2018.

DE: There are conversations we've been having on GitHub about best practices for PRs. It would be great if the editorial board could document that and help come up with best practices.

JHD: This is definitely something we plan to do.


## ECMA-402 Updates

(Shane Carr (SFC))

SFC: (Presents slides) (Presents all stage 1-3 proposals). ecma402-admin@chromium.org is the new alias.

AK: What is the process for stage 3 proposals that introduce major changes?

SFC: For example, in segmenter, which had a major API change, our process has been to iterate over what this process looks like.

DE: segmenter isn't the only time, there were also changes to relative time format at Stage 3. We've tried to discuss in a very open way in ECMA-402 and also in plenary here. I think after some experience, going up and down stages isn't always productive. We all want things to happen, and we want to work out the details with more stakeholders as time goes on. If the committee has more feedback about how we can work out process improvements, we'd love to hear them.

LEO: (Presents slides on Editorship) [Editorship slides](https://docs.google.com/presentation/d/1D2vP7GMknBFaXkuBteCLk5bhL-PN_j7z2yK4MmmfYnE/edit#slide=id.p)

LEO: Do we have consensus to adopt the proposed editorship group?

#### Conclusion/Resolution

- no objections


## Committee Updates

### Test262 Updates

(Leo Balter (LEO))

LEO: We're now using Test262 to show reports automatically on every PR. I cannot block PRs on this, (we only block on linting files or formatting metadata). But you can also see the results of the tests on every PR. If you click on "Details" you can see the results. We now use CircleCI instead of Travis CI (since Circle is faster).

### ECMA-404 Update

(Chip Morningstar (CM))

CM: ECMA-404 continues in its timeless perfection. Nothing new to report. Its mission in life is to not change.

### Updates from the CoC Committee

(Jory Burson (JBN))

- [slides](https://docs.google.com/presentation/d/1FAGAtZFXUO8CPNnYKKwLXIynjqO_6v7SMQh1KxDnHPY/)

JBN: (Presents slides)

MF: How does the GitHub block work?

JBN: We block on the whole tc39 org. They can see the content, but cannot comment.

AKI: And also on the tc39 freenode channel on IRC.

KM: Do we have a plan if the individual creates a new account?

JBN: Not in this case; the separation was somewhat mutual.

BT: I would also guess GitHub TOS restrict multi accounts.

TCN: I can confirm that from the Node perspective, GitHub is helpful to deal with multi accounts.

AKI: Do we need consensus on whether to name the individual? The CoC Committee focuses on privacy and confidentiality. We would like to privately share within TC39 the usernames, but not publicly. The current policy is to not disclose that information with TC39.

MLS: What is the motivation to disclose that information?

JBN: The concern would be to respect the committee's right to transparency.

JHD: It's important to be able to know if someone who does show up on IRC, etc., that you know whether to engage with that person. It can serve as a "warning" that someone might need more energy.

AKI: It's also a concern over safety.

YK: Another reason you may want this to be public is because sometimes you get caught off-guard in a public forum by someone who's been blocked. It seems to reduce our legitimacy if committee members don't know anything about it and cannot respond.

MLS: I feel it makes sense to discuss with CoC Committee, like an escalation process, if there is an issue, but I fear we are jumping the gun by exposing that information sooner.

YK: My concern is that these things happen fast—in real time.

JBN: Accountability is very important here—so you want to be able to tell someone that an individual has been blocked and then to show them.

AKI: Following up, do we have consensus? MLS, do you have concerns?

MLS: I guess I'm fine with it. I understand the real-time concerns of being able to verify.

AKI: It looks like we have consensus. This information will be published to the moderation forum.

KV: This is not a blanket policy?

AKI: Right; this leaves it up to the CoC Committee to decide when it is appropriate to disclose the information.

IS: We really need more mics. Maybe people should queue behind the mic.

(AK, AKI, MBS, BT discuss logistics)

## Ecma TC53 Report

(Peter Hoddie (PHE))

- [slides](https://www.icloud.com/keynote/0br90r7j82NFdnqezliqGAblQ#tc53_liason_report_-_3/19)

PHE: Introduction to what JavaScript for IoT is. Users for JavaScript for IoT are working on code that will be consumed through modules. Three face to face meetings a year. Just met in Austin. Next meeting is in the bay area in June. Started investigating a code of Conduct. Low barrier since Jory is part (vice president?) of the group. Sensors, communication (beyond just TCP/IP), and displays are our three areas that we would like to see realized.

PHE: Starting with I/O, which is a building block for everything else. Loosely borrowed an idea from Firmata that allows I/O in multiple places. We have several types of I/O we are looking at. Network socket is one of the more interesting types. It fits well with other architectures.

PHE: Rather than extending W3C sensors, looking at a lower level sensor driver in JavaScript. The general model of having drivers not specific to a certain sensor follows the model of previous specifications. Networking is a challenge. Can't select a specific port since there is no standardized or common shared port. Enabling users to bring their own.

PHE: Security: very important for user privacy and safe operation. Working on a few different approaches. (Mark?)  working on defining a secure subset of JavaScript. We want to defer to TC39 to think about the details of security. We can say that we restrict ourselves to "strict mode," since IoT devices don't have 20 years of backwards compatibility. We can focus on best practices.

MM: The basic framework in which we pursue security is the Object Capability Subset of JavaScript. We want you to be able to choose just a secure subset of JavaScript. "Don't add security; Remove insecurity."  (discusses realms proposal, Jessie.)  We want to make a standalone language specification that can be implemented; we can discuss further with TC39.

YK: I liked in MM's original goal for SES was that you can run any JavaScript code in it.

MM: Yes, SES is intended that code that follows existing best practices to continue to run.

YK: Yeah, so that it is a good enough goal as TC39 that I would like to spend time on. But I would not like to spend time on Jessie.

MM: SES and Jessie are separate. Jessie is a tiny subset of SES that runs essentially zero existing JavaScript. It is separate from SES. But Jessie code will run as SES code in an SES environment.

YK: Does TC53 want us to standardize anything about Jessie?

MM: We have not been planning in the short term to bring Jessie to TC39 committee.

PHE: Primarily in TC53, we are looking at the secure subset of JavaScript. Jessie is intended to extend support in TC53 down to the lowest-level devices. We however have not defined a lower bound of the devices we support. We could keep with just SES.

MM: Google Caja and Salesforce use SES in production and there have not been any major issues. Google EarthEngine, that has been using Caja/SES in production for years, document it by saying, just react to the occasional error message. Salesforce has a 5 million developer ecosystem running on SES, most of whose programmers just see it as JavaScript + a framework.

## Normative: CreateDynamicFunction early concatenates body
(Leo Balter (LEO))
- [slides](https://docs.google.com/presentation/d/1mGBFCw4M37q4cF8JHnXzaLI2wLdOxoVEfq9RL_xMRW0/edit#slide=id.p)
- [proposal](https://github.com/tc39/ecma262/pull/1479)

LEO: (Presents slides) What should we do with `function("-->").toString();`?

MM: Since you asked what should be the result, I'm going to say "throw an exception."

LEO: In ch, xs, it throws an error, in others there's an HTML comment. I propose we wrap the body function earlier, so that HTML comments will reflect the current behavior.

MM: Are you proposing that it doesn't throw an exception?

LEO: Yes. The proposed change is to change where this happens. It moves the Line Feed. (Presents slides).

MM: If the current system was what you are proposing—and if you were proposing to make it a syntax error, I would support that. I think a syntax error is a better thing for the engine to do, I think this proposal is actually a regression.

LEO: For clarification, yes, this thing affects an observable change. But I think any syntactical change to NXB should be discussed and it should have time for a full discussion later since it is important.

MM: I'm objecting to the idea that HTML comments come to be accepted where they are rejected today.

MF: I'd like to respond to MM's question. This is fixing an inconsistency in the spec that exists currently. The synthesised source text includes new lines in the rendering, but the function body is parsed without them. Parsing it unlike how it is displayed is an inconsistency. We should either remove the newlines in the synthesised source text or allow the HTML start comments. We shouldn't leave it as it currently is.

JHD : If you pass two slashes, it does work as expected. That supports the consistency argument that we should make this change.

YK: If there is a thing that could be rendered but not parsed, doesn't that violate the round-tripping of toString?

MM: The function.toString invariant has to do with output render and is in turn parsable and thus evaluable with "eval". Given the structure of the spec, and since I support adding the new lines, I'd have to agree that this adheres to the principle of least surprise. Any engine that doesn't support HTML comments—as a JS engine is free to ignore them—I think this is OK, so I remove my objection.

YK: I remember WH having an objection to some other changes related to the HTML comment syntax. I don't remember them. But if WH doesn't object here, I'm fine. There were other cases to allow HTML comments to be supported and I wanted you to have an opportunity to discuss it.

WH: The issue is whether `-->` is allowed at the beginning of a script. According to Annex B grammar, it's not.

LEO: It's not written in any grammar.

WH: The issue is more about if `-->` is allowed at the beginning of a script or not. Adding the newlines here is a red herring. So I would not support this change. If we want to fix it, we should look at what `-->` does at the beginning of various parsing contexts.

LEO: What is the actual behavior of the Function constructor in passing the body parameters? In this proposed change, I'd like to know that the source text has a guaranteed output.

WH: We don't normally dictate the spacing/parentheses placement/line breaks.

LEO: If we don't change this today, we end up with implementations not being consistent with the spec in a way.

WH: There's an inconsistency problem with `-->` in other places, not just here. And that might solve the problem in the way you want.

LEO: I would rather not have HTML close comment at all. I'm just looking at the web reality today and what's elegant for the code.

WH: In Annex B, `-->` is allowed only after a new line. However, implementations seem to accept that even in contexts where it's not preceded by a newline, such as in `eval("-->")`. We need to figure out whether the new line prefix is necessary or not. For example, if you do `eval("-->")` you don't get a syntax error even though Annex B states that you should? We should make the grammar consistent throughout the language, not just in the Function constructor.

MM: I'll try to clarify WH's issue. Although the current spec does imply that the acceptance of `-->` is whether there is a newline or not, not just in function body but also in eval, all of the places where it should be rejected because of an absence of a newline are actually getting accepted. So the problem is that the grammar in Annex B already does not match web reality. And if you fix it there, then the newline issue there no longer affects whether `-->` is accepted or not. The problem with `-->` is not unique to function bodies.

LEO: That sounds like it would be extending the HTML comments grammar. If we cannot find consensus now, I'd rather we bring it to the end of the meeting.

BT: Maybe we can discuss it at the end.

LEO: I'd like to discuss it with browser implementers, since I'd like to fix it for this case.

BT: Please discuss with Leo offline.

## Normative: Remove implementation-defined typeof behavior

(Dan Ehrenberg (DE))

- [slides](https://docs.google.com/presentation/d/11rVHJHCPpcwYxxLZETcjpX89WIA79IDlLhSbvUmQiO4/edit#slide=id.p)
[PR](https://github.com/tc39/ecma262/pull/1441)

DE: If you have a non-standard JS object, there's a lot of complexity on what typeof returns. In this proposal, if an object is callable, or not determines whether it returns function or object. This typeof table is simplified (points to slides).

MM: Clarification: how about document.all?

DE: That's already in the spec. That's defined.

MM: So document.all violates the table.

DE: There is spec text elsewhere that handles document.all.

MM: I'm not objecting to this proposal; we just need to remember that typeof has that special case.

JHD: There is a line in the spec that specifically covers that case.

#### Conclusion/Resolution
(consensus)

## Normative: Make Async-from-Sync iterator object inaccessible to ECMAScript code

JHD: Presenting on behalf of André Bargull. I think this PR is not very objectionable, but it needs consensus.

JRL: How is this currently accessible?

JHD: There's a code snippet here that can produce the bug.

MM: There's currently a security hazard that this object might be gotten ahold of and not frozen. The SES shim has been unable to get ahold of this object, and so cannot safely freeze it. But we are not confident that it is impossible to get. If we fail to freeze it and it is gotten anyway, then we have a shared primordial mutable object, which invalidates our security assumptions.

JHD: You can argue that this is matching web reality as well.

#### Conclusion/Resolution
(consensus)

## Normative: Suppress GetMethod errors in IteratorClose

(Kevin Smith (KS))

[PR](https://github.com/tc39/ecma262/pull/1408)

KS: (Goes through code example in PR) The first iteration, we'll throw 1. Then, in the catch, does this print "1" or "TypeError: 0 is not a function"? This proposal suggests that it will rethrow that error even if the return property is not callable. It seems to be with the original spirit with IteratorClose.

MB: Leszek Swirski on the V8 team actually filed the bug that led to this PR. Some more context is that this change would actually enable an optimization for us, so we're in favor of the change.

KS: Do we have consensus on this change?

#### Conclusion/Resolution
(consensus)

## Normative: Add export * as ns from "mod" to Export production and Module Semantic

(Leo Balter (LEO))

[PR](https://github.com/tc39/ecma262/pull/1174)

LEO: (Shows Test262 report for PR lacking multiple implementations)

JHD: According to the PR, we had consensus to move forward with the feature, but we wanted to treat it more like a Stage 3 proposal. Do we want to wait until we have more unflagged implementations?

TST: As an implementer, I think Mozilla would be fine without blocking on additional implementations.

DE: Processes that TC39 could use here—some committees use multi-user buy-in. That seems like something we could use. This makes me very comfortable with merging this PR. If we only have feedback from only one browser, and feedback from tooling, I think that would not be sufficient, but here we have Mozilla's buy-in and already one implementation.

TST: I agree with DE.

SGN: ChakraCore has it too, so I think it's fine to merge it.

KS: We have an implementation behind a flag right now.

#### Conclusion/Resolution
(consensus)

## Normative: Require at least four digits in string representations of negative years

(Richard Gibson (RGN))

[PR](https://github.com/tc39/ecma262/pull/1407)

RGN: (discusses the PR)

WH: How does this deal with year zero, and what happens when the year is +/- Infinity? You have a check in the algorithm to exclude NaNs but not infinities.

RGN: That is not affected by this PR. The year before year 1 is year 0, and the year before that is year -1. Year 0 is year 1 BCE; year -1 is year 2 BCE, etc.

RGN: Infinities are rejected earlier in the construction of dates.

#### Conclusion/Resolution

(consensus)

## String.prototype.matchAll for Stage 4

(Jordan Harband (JHD))

[Spec PR](https://github.com/tc39/ecma262/pull/1480)

JHD: There are multiple implementations. I would like to make this Stage 4.

#### Conclusion/Resolution
(consensus)

## dateStyle/timeStyle for Stage 3

(Daniel Ehrenberg (DE))

- [slides](https://docs.google.com/presentation/d/17Xsw43vHocojTXisuTfpIv37JHKqwWtvrXcL-7VrJQ8/edit#slide=id.p)
- [proposal](https://github.com/tc39/proposal-intl-datetime-style)

DE: (presents slides)

WH: What is the difference between short and medium format in the example?

DE: There is a difference, but this example may be wrong. You should consult CLDR if you're more interested. For stage 3, Leo has signed off as has Frank. Is this ready for Stage 3?

MLS: So these patterns are not standardized?

DE: They are specified in CLDR. This is like most of the rest of ECMA-402. We cannot nail it down completely.

MLS: So what you're really saying is that we are deferring to another standard.

DE: We really *want* to give implementations the ability to do these tailorings while remaining spec-compliant.

MLS: Seems like a developer wants standardized behavior across all implementations.

DE: It's just not possible for anything in ECMA-402 to work like that.

WH: If it is implementation-defined, how do you write tests for it?

DE: Would the Bocoup people want to answer this?

LEO: We cannot have observable tests for it, but it is pointing to a specific standard.

DE: We've compromised by allowing people to turn off these tests and comparing the strings, which is actually still pretty useful.

MM: What is the metadata?

DE: A list of locales, possibly among other things. It was a difficult discussion to get the right balance, but I'm happy with the work Rick and Leo have done to strike that balance.

#### Conclusion/Resolution

Proceeding to Stage 3

## Intl.DateTimeFormat.prototype.formatRange for Stage 3

(Felipe Balbontín (FBN))

- [slides](https://docs.google.com/presentation/d/e/2PACX-1vRiHjIBX74841Hf2vyeqMm9jbb-pzQoFwh4Ecdvz8JISAGXuV_jGv_3Id_jOXxP3SWjF9z9lcyL9NPX/pub)
- [proposal](https://github.com/tc39/proposal-intl-DateTimeFormat-formatRange)

FBN: (presents slides)

SFC: I'm very happy with the shape of this proposal, it's going to solve a major pain-point in date formatting. I support it moving to Stage 3.

MM: There are serious security concerns with using implicit calls Date.now(). Are there any remaining implicit calls to Date.now() left?

FBN: Currently the regular DateTimeFormat.prototype.format calls Date.now().

MM: It's a disaster to call into Date.now() directly in DateTimeFormat (the intrinsic now); it should call the prototype method.

DE: You're aware that this is how Date.format works now?

MM: I was not aware, no. If that's the case right now, then we have a real problem.

DE: How does this relate to web specifications that may do this?

MM: Web specs are considered to be host objects and treated as unsafe. Here we're talking about ECMAScript built-ins. We've been trying to keep hidden state/IO out of the ECMAScript language. The fact that i18n has proceeded with it, this has me rather terrified.

CPO: There are two places where we use the intrinsic now. They are both places where we transform them into a string before we return the string to the user.

MM: Can you infer the milliseconds or seconds?

CPO: Seconds yes, milliseconds no.

MM: The other place I've been concerned about in theory is obtaining the current timezone. But it's much harder to create a covert channel with time zones, which are expected to change much less frequently. I do not consider this a practical hazard.

CPO: That has been the behavior for a very long time, by the way.


AK: The difference with the host objects being more powerful is throughout the language.

MM: The Realms API is best understood as a way for JavaScript code to define a host for other JavaScript code. Anything that is to be provided to JavaScript by a host should be providable, or not, through the Realms API. But the initial contents of the realm should be everything JavaScript defines as a standard, host-independent part of the language.

AK: I think I understand... it sounds like you're saying the Intl group is not taking SES considerations. But that's not unique to Intl. But Intl probably won't be on embedded devices.

MM: True... maybe we could say that an implementation omitting Intl can still be a valid EcmaScript implementation.
(Clarification: In a side discussion afterwards, we verified that a platform, like XS, that omits all of ECMA-402 can still be a conformant implementation of ECMA-262, and therefore of standard EcmaScript.)

DE: This is a side issue that does not block the current proposal. We decided this was best to leave these kinds of decisions up to the library user. I think it's really best if we can find multiple solutions here.

SFC: Can anyone with these concerns engage me, Leo, and the editors to discuss them offline?

YK: I think I would appreciate a simple definition of primordials.

MM: Primordials are those objects, other than the global object, that are required by ECMA-262 to exist before code starts running.

#### Conclusion/Resolution

- Stage 3 acceptance


## Uniform parsing of quasi-standard Date.parse input for Stage 2

(Richard Gibson (RGN))

- [proposal](https://github.com/tc39/proposal-uniform-interchange-date-parsing)
- [slides](https://docs.google.com/presentation/d/1LuJzeR7Y-e-LcQObQesJfJsIVGkiZCMoZhVMO5OxIoc/edit)

RGN: (presents slides)

WH: In the spec's draft spec text, when there is a nonempty set of dates in the toString and toUTCString scenarios, you always choose the lowest-value member of the set. Whether that's a good idea depends on whether toString and toUTCString round or truncate.

RGN: That is a formalization of the behavior that's already specified. It leaves unspecified what happens with milliseconds—and in fact, it's truncated off; they will always serialize the same in any of these three methods (toString, toUTCString) because of the truncation.

WH: Ok, that's good. I was worried about the case where these methods would round the milliseconds, in which case the spec might inadvertently require you to parse something like "...T13:00:00" as ...T12:59:59.5 because that's the lowest value that would round to 1PM.

SFC: In the slides, you have tables including different specifications. I've seen code that works in Firefox but not in Chrome, so I'm glad that these things are being specified. It's not entirely clear to me, however, if this errors more on the side of leniency or strictness with parsing.

RGN: I'd like to carve out an area in our interchange format. Anything that doesn't parse clean has to be rejected. If you have something that looks like the RFC or the EcmaScript interchange format, it must pass all the checks to be parsed as not a number.

RGN: You have cases where input is obviously invalid, except with weird edge cases (like the February 30th example). All the cases that I'm changing are rejected by at least one engine already.

BT: This feature seems to be all about driving interoperability.

RGN: One thing that I can commit to is that if there's anything that's required to support interoperability, then we should include that. I do still want to move the ball forward.

AKI: What about February 30, 1712?

RGN: In the version of the Gregorian calendar ECMAScript is based on, there was not a February 30th in 1712.

SFC: If we did want to move in the direction of supporting other calendars for date parsing, that could be something for the Intl object.

RGN: Or Temporal.

AK: If I were to restate what BT said, we may have to change what's in the proposal as we go, but it would be nice to know as an implementer how much time we'll be playing whack-a-mole with those changes.

RGN: My intention is to make a full picture of what the landscape looks like.

BT: It's hard to say we want this in a standard without understanding that. It's what this feature is about.

AK: I would second that. To give an example, someone could say, "let's make JavaScript more interoperable," and we all agree on that, and finish that at Stage 2.

RGN: We can commit to a desire that may never materialize.

AK: We'd want the desire to be more concrete before committing to Stage 2.

DE: As someone who made a little change to Date.parse in V8, I really think that we should define this fully. We've talked about this before. I think it may take a lot of work to define it, but I think it would be worth it. I don't think it's that valuable to define a couple more cases and incrementally do this over time.

RGN: Do we want portability of something like "2019-03-26Q"? Do you want to accept something that's not part of any specification at all? But that was supported because of historical browser engine support only?

DE: We do want portability. This may be something of a union and something of an intersection.

RGN: I'm interested in a post-check on that. I'm interested in the formats that the rest of the internet has committed to in terms of portability. But if we do want more like, we want to accept something that all engines have accepted, ...

DE: I don't think it should be necessarily the union. But we need to do damage control because there is not currently interoperability on Date.parse. We need to focus on interoperability. On Temporal, I really want to define for Temporal how it can accept the ISO-8601 strings. That's unrelated to the goal for Date. So I'm wondering what the rest of the committee thinks about these goals.

LBN: I would like to request for Stage 2, even if this proposal doesn't advance. I would like more input from others, and I don't think this meeting is a fair enough time for this work.

KM: My main concern is that there's enough random pages with compatibility issues that break whenever you make changes to Date.parse(). I think it's a bottomless pit.

DE: I agree, this is the experience I have had in V8. I want to hold off on making any changes for what the standard will be.

KM: Even trying to increase the surface area of things we accept has broken stuff.

RGN: I want to be more restrictive.

KM: It's really hard to tell.

DE: Interoperability spec work is hard. That's why we're here as professional spec writers figuring this out. It would be unfair to implementers to expect them to piece out this work and expect them to determine independently how to proceed as opposed to proceeding together once the interoperability path has been decided.

LEO: The effects are clearly way more spread than the actual spec text. I feel like there's a lot of uncertainty that we will affect what we're restricting or allowing. As of this minute, I can't consume all of that information. I would like others to investigate what else is being changed here.

MB: To respond to DE's comments, I'm worried we may never get a full spec to solve all Date.parse()'s problems if we try to do it all in a single proposal. I think we should be open to accept smaller, incremental improvements.

DE: The author of the previous proposal (Morgan) stopped working on the project because they left Mozilla.

RGN: As far as I know, the previous proposals never even got this far.

TST: To clarify, the previous proposal that Morgan was working on has nothing to do with TC39. They just left and we just didn't have the resources to continue working on it.

SFC: My frame of mind is more similar to what Mathias said.

MB: A person stops working on a proposal and then nothing happened anymore. If we focus more on smaller improvements, we might reduce the bus factor, and get more people willing to help champion/author the smaller proposals.

RGN: If we want a full spec, then how much of the intersection (shows chart) do we pull in? I don't know what it looks like to make incremental changes here.

DE: I really think that solving this WebCompat issue is a really important goal. If we're talking about interchange outside ECMAScript, I'd focus on Temporal.

RGN: Temporal is indeed a different proposal, but Date.parse() is already on the internet.

BT: Do we have consensus on Stage 2?

DE: I think we should really see more interoperability research first.

BT: Personally, I wouldn't be the lone dissenter, but I would like to see more details on the effect of this change.

LBN: Does anyone volunteer time to support RGN on this?

DE: It's hard to figure out how to help unless we have a shared understanding of goals.

RGN: The goals of the proposal that I'm bringing forward are to get uniform parsing of every serialization.

#### Conclusion/Resolution

- We are at timebox. Proposal not currently approved. Maybe discussion can continue on Thursday.


## Promise.allSettled for Stage 3

(Mathias Bynens (MB))

- [proposal](https://github.com/tc39/proposal-promise-allSettled)
- [slides](https://docs.google.com/presentation/d/1A5kGO-YF0imcltyQYZIsCDGHG_k-9IZ6CPMfWlFl85s/edit)

MB: (presents slides)

MB: The main questions are why do we add Promise.allSettled instead of Promise.reflect? My answer is that it's different enough that it should be a separate proposal. I'd like to propose that we close this issue on `Promise.reflect` and move on with that consensus.

SGN: What is Promise.reflect?

MB: It's basically something like the userland function that you'd write today to get similar behavior. It keeps track of the promise state, and it takes it turned into an object with a status/value pair. Promise.allSettled does not block adding that feature in the future.

YK: What was Bluebird's rationale for *deprecating* allSettled?

MB: I don't know exactly why they went that way. The userland precedent for allSettled is there.

YK: I can imagine they deprecated the thing that maybe it was misused instead of this other thing.

MB: `Promise.reflect` is a lower-level primitive than allSettled. The details are in the repo. We believe these are separate questions and we can add reflect in the future.

MM: The `Promise.reflect(promise)` code you show is not safe of re-entry hazards, because it calls `promise.then(...)` directly on the alleged promise argument, rather than `Promise.resolve(promise).then(...)`. You're not proposing "reflect", which is fine. But `Promise.all()` is careful only to do `Promise.resolve(x).then(...)` on each incoming alleged promise, rather than doing .then directly. Does `Promise.allSettled()` do so as well?

MB: (shows the spec) I'm sure at the top of my head where in the spec this happens.

MM: Given that we're agreed that this is what it *should* do, I'm happy for today.

MB: (continues his presentation)

YK: I like allSettled even if reflect is more primitive. It seems common and non-obvious to implement correctly.

MF: What was the process for choosing those status strings? Have you received feedback on them?

MB: Explicitly discussed that they were string values. We managed to resolve that issue offline. Part of what I'd like to do here is reaffirm consensus.

MF: I'd like to respond to the comment about the status being a "safe way" to go forward. I'm not sure if I totally agree with that; going with either one could be safe. I don't recall the conversation on strings vs. booleans; I just don't think that should be the justification.

MB: What we're showing also matches every userland implementation out there today.

#### Conclusion/Resolution

- Stage 3 acceptance


## String.prototype.replaceAll for Stage 2

(Mathias Bynens (MB))

- [proposal](https://github.com/tc39/proposal-string-replace-all)

MB: November 2017 was the last time we visited this proposal. We decided that if you want to solve this, replaceAll should be the name, and we should match the semantics of replace, like get-substitution. I can see now that this is probably the right thing to do. We have spec text now. I believe we fulfilled all the requirements to go to stage 2.

JHD: Was there any further exploration of a RegExp escaping template tag?

MB: This is a super-common thing to do who want functionality like this. Where they just want to replace all instances in a string with another string.

JRL: When you pass in a non-global regex as the search string, what happens?

MB: That's an open issue (which you filed!). The current spec text gives us a way forward. We can address that detail before Stage 3.

YK: ...

MLS: What semantic do you prefer for a RegExp searchValue?

MB: If I had it my way, replaceAll wouldn't support RegExp at all, it would only support the new use case of global string replacement, and not do GetSubstitution etc. But I can see how this is more internally consistent within the language. We should probably match `matchAll` w.r.t. non-global RegExps.

JHD: At various times it threw or added a 'g' flag. But now it just returns a single match.

#### Conclusion/Resolution

- Stage 2 acceptance
- Stage 3 reviewers: MLS, RGN, and DE


## Private declarations for Stage 1

(Justin Ridgewell (JRL))

- [proposal](https://github.com/tc39/proposal-private-declarations)
- [slides](https://docs.google.com/presentation/d/1tA50t5sCiXVokMCfJAZiP9aYWaRjsj_SftsdHkzLmk8)

JRL: (presents slides)

MM: I like this direction. I want to make sure we are preserving the integrity constraint on private state that distinguishes initialization, which registers in the weak map. Whether it's outer or private, on the "#x = 0", I just want to make sure that's the registration of the instance of Ex, and if in the constructor you'd have "this.#x = 0;" but #x wasn't previously declared...

JRL: I haven't changed those semantics; that case should still throw. You have to declare a private field on the class so it can be initialized on instances, you can't just access an outer private on an instance that didn't declare the field.

MM: What about for non-classes? One of the things about this whole approach that makes it appealing is that it generalizes to object literals as well.

JRL: That was a nebulous topic when Bradley presented on this last time. We could add object-private state later on.

MM: I'm very happy with this, I'm glad that you're also opposed to abusing the computed property syntax.

CM: I like the general flavor of what you're trying to do. I might come very close to bikeshedding on syntax, but now we're overloading "private" to mean non-private, private on the file scope. I've gotten used to `#` meaning "private", and now we have `private #` to mean "not really private".

YK: I don't necessarily agree that this scoping is that difficult to understand. We should be careful with complicating the model.

KCL: Alternative 1 has a problem—if you were to bundle this with unminified code. There would be nothing stopping me from leaking scope.

JRL: It would require your concatenations tool to respect module scope. Alternative 2 would require us to change our class syntax, and would still require the concatenations to respect scope.

KCL: Could that not be a syntax error though, that would not be web-compat?

JRL: Unfortunately not.

DE: Can we make overflow time for this? I would like to have this discussion before promoting this to Stage 1.

YK: In general, we need to get more clear on whether to lean on module scoping. A lot of people come from other programming languages where scoping doesn't work like this. I used to really like the idea of making scoping intuitions without using the lexical keyword. (Describes slide example) would be improved if you don't reuse mutation syntax. I have come to look at that code and find it more confusing than when I used to.

WH: I share the syntax confusion worries mentioned already. The other thing I'm unclear about is, what is `x.#y` supposed to mean? Does it call get/set/init? If you have Object-dot-hash-y?

JRL: I am not introducing any changes with respect to the semantics of access.

WH: So it doesn't cause get/set/init to be called?

JRL: Correct. This PrivateName class is just userland code I can write today. I'm not proposing that we actually reify private state yet.

JHD: Referencing the alternate proposals: Classes have to effectively install every private field in scope on every new instance that's created?

JRL: Only if you declare it on that class. Undeclared private fields wouldn't be installed.

JHD: Similarly then, can you show me an example of using it in an object literal? Is your intention that it would work there?

JRL: Not my current plan. That could be a future proposal that reuses the private declarations to do object private state.

#### Conclusion/Resolution

- Will continue discussion in overflow time. Proposal not yet approved for Stage 1.
