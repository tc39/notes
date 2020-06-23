# July 23, 2019 Meeting Notes
-----

Daniel Rosenwasser (DRR), Andrew Paprocki (API), Adam Klein (AK), Shu-yu Guo (SYG), Michael Ficarra (MF), Jordan Harband (JHD), Alex Rattray (ARY), Pieter Ouwerkerk (POK), Michael Saboff (MLS), Keith Miller (KM), Aki Braun (AKI), Brian Terlson (BT), Ron Buckton (RBN), Till Schneidereit (TST), Yehuda Katz (YK), Aaron Davis (ADS), Sebastian Markbåge (SM), Andrew Burgess (ABS), Jonathan Keslin (JKN), Ashley Hauck (AEH), Peter Hoddie (PHE), Patrick Soquet (PST), Ben Coe (BCE), Waldemar Horwat (WH), Mark Miller (MM), Chip Morningstar (CM), Erica Pramer (EPR), Kevin Smith (KS), Adrian Hall (AHL), Caio Lima (CLA), Ben Lichtman (BLN), Tierney Cyren (TCN), Shelley Vohr (SVR), Michal Hollman (MHN), Bill Ticehurst (BTT), Dean Tribble (DT), Godfrey Chan (GCN), Guilherme Hermeto (GHO), Jordan Gensler (JGR), Leo Balter (LEO), Dale Bustad (DBD), Joffrey Richten (JRN), Shane Carr (SFC)

Remote:
Bradley Farias (BFS), Gus Caplan (GCL), Kevin Gibbons (KG), Pedram Emrouznejad (PED), Yulia Startsev (YSV), Mattijs Hoitink (MHK), Ross Kirsling (RKG), Justin Ridgewell (JRL), Caridy Patiño (CP), John-David Dalton (JDD), Paolo Severini (PSI), Benjamin Georges (BGS), Paul Leather (PLR), Mathias Bynens (MB), Aliaksander Palpko (APO), Shi-jun He (JHX), Ravi Jayaramappan (RJN), Sanket Joshi (SJI), Jose David Rodrigues Veloso (JVO), Mike Samuel (MSL), Frank Yung-Fong Tang (FYT), Rob Palmer (RPR), Diego Ferreiro Val (DFV), István Sebestyén (IS), Jason Williams (JWS), Richard Gibson (RGN), Seth Brenith (SBH), Suraj Sharma (SUS), Steve Faulkner (SFR), Chris Anderson (CAN), Michael Fig (MFG), Valerie Young (VYG)
-----

# Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/07.md)

## Adoption of the agenda

BT: Are there any objections to the agenda?

BT: It appears there are no objections to the agenda.

## Approval of the minutes from the last meeting

BT: Meeting notes from last meeting are approved.

MLS: We didn’t actually vote on ES2019, but I spoke with AKR that it was an implicit ratification.

IS: True. In 2019 and also in 2018 we took the “silence” on the “IPR break-out” as TC39 as agreement. But from the “optics” point of you it would be better for next year, if we had a more explicit TC39 vote to ratify the annual ES release. Next year we will do it in the old way. The only question remains if we should do it in the March meeting (“conditional approval” depending on the outcome of the “opt-out”) or in the May/June meeting (after the “opt-out” is over).

## Next meeting host and logistics

(Skipping?)

## Report from the Ecma Secretariat

- István Sebestyén, IS
- [Slides](https://github.com/tc39/Reflector/files/3373473/tc39-2019-034.pdf)

IS: (Presents slides)

IS: Looking for someone to produce a better-quality PDF of the ECMAScript standard. Issues are poor formatting, page numbers, etc. This is more important for Ecma as a whole, than for TC39, who uses the html version anyway.

IS: Would like PR activity about the “cool new stuff” in ES-2019 (also links to new TC39 PR activities would be useful).

IS: JBN has received Ecma Recognition Award for her activities in Ecma, including TC39. DE have been given recognition awards for his work in the 2018 Management of this committee.

MM: Within TC39, what’s the process to nominate someone for these recognition awards?

IS: Nominations to the Ecma Recognition Awards can come from the TCs, but also from the ExeCom and finally from the Ecma GA. From any of these 3 places can a nomination come for a TC39 expert. Ecma Recognition awards (also Ecma Fellows) can be granted at any GA meetings. The next one is on December 11, 2019. So for a TC39 nomination we have two more meetings to decide for December, in the October NYC meeting and in November in CA. Any TC39 participant can just nominate someone. For Ecma Recognition Award for something “definitive”, like Editor of ECMA-xxx, or Chair / Convener of yyyy, or an outstanding piece of work on something. The point is that TC39 has to come to a consensus who should be nominated for such an award. That namelist should then be communicated to the GA (e.g. via the Ecma Secretariat).

IS: (Continues presenting slides). Regarding Technical Secretary of TC39 IS is going to continue even after his retirement from the SG position of Ecma.

From the topics he outlines in his slides most relevant for TC39 is to think about how the 2020 TC39 Management should look like. According to the rules that should be reelected every year. So best to it in the November meeting. In practice, however, much is left to the freedom of the individual TCs. There are TCs, who defacto are working with the same TC Management for many-many years. TC39 is a very big TC demanding lot of work from the Management, so TC39 should discuss what is the best way for providing an excellent Management for the next years, or more precisely for 2020.

For the rest of the slides, no summary is provided here, but please read and consult the slides themselves.

#### Conclusion/Resolution
- No further questions asked, no special conclusion after the presentation.

## ?

JHB: There’s been 7 normative PRs merged. (Lists changes, asked for the list for the notes). There were 24 editorial changes. A big change was merged to explicitly list mathematical values, which supports BigInt. Next there will be a new notation for intrinsics merged soon.

AK: How did you come up with the list of the changes?

JHB: I actually looked at the Git log and recorded the changes in a Notepad document.

AK: That’s great, maybe we could put those in the notes?

JHB: Absolutely.
<details>
  <summary>Summary of changes</summary>
  [link to commits discussed](https://github.com/tc39/ecma262/compare/a25df663ddaa8f0b976f0411681635f587be63e0~1...81eb1f42fae4f34037a1070eb8a914d6e057d7d5)

Normative: 7
 - [import()](https://github.com/tc39/ecma262/pull/1482)
 - [spec bug on function toString](https://github.com/tc39/ecma262/pull/1569)
 - [all early errors are syntax errors](https://github.com/tc39/ecma262/pull/1527)
 - [async-from-sync-iterator is now inaccessible](https://github.com/tc39/ecma262/pull/1474) (based on previous consensus)
 - [extend "function code" definition](https://github.com/tc39/ecma262/pull/1158) (march consensus)
 - [promise constructor lookup optimization](https://github.com/tc39/ecma262/pull/1506)
 - eval: no more [observable side effects](https://github.com/tc39/ecma262/pull/1504)

Editorial: 24
 - formatting fixes
 - make things more consistent
 - extract repeated steps into abstract operations
 - [explicitly noting math values](https://github.com/tc39/ecma262/pull/1135) (prereq for bigint)
 - plus: [intrinsic notation](https://github.com/tc39/ecma262/pull/1376) coming soon, please review ASAP if you have thoughts
</details>

## Ecma 402 (Intl) status update

Leo Balter (LEO)

- [slides](https://docs.google.com/presentation/d/1xzf-s3Rm4sJKVQBqcxQCBxVCFIIc2mOF93Pk2wOaJDQ/edit#slide=id.p)

LEO: (Presents slides)

LEO: Any questions?

*silence*

LEO: No questions, let’s move on to Test262!

## Test262 Updates

- [slides](https://docs.google.com/presentation/d/1xzf-s3Rm4sJKVQBqcxQCBxVCFIIc2mOF93Pk2wOaJDQ/)
- [video]
(https://www.youtube.com/watch?v=mzCyJK9NYGI&feature=youtu.be)

LEO: Test262 is probably the most challenging project I’ve ever worked on in my life. (Presents slides) Here’s a [visualization](https://www.youtube.com/watch?v=mzCyJK9NYGI) emphasizing the number of people actively working on various tests at the same time.

MM: Even with the engines providing a special hook, Test262 should not expect even with a special hook that the engine is providing deterministic garbage collection. To the degree that the engine actually collects something when the hook is called, it gives test262 the opportunity to detect and report bugs. If the engine doesn’t collect anything there’s no bug there and we cannot report any violation. I think that’s a modest statement of what the hook does.

KM: Your request is part of the solution that someone else proposed and would work. We can go into this separately.

MM: At the end of the WeakRefs section, there was an issue: How do you detect quiescence. Are they all in place?

LEO: There are two things here, one of these involves synchronous execution. There can only be call to `$done`. If multiple calls happen, that’s an error. It’s been working pretty consistently with the current engines.

MM: If something has a finalizer and WeakRef has gone null, if it’s not finalized before quiescence, should test262 report a normative violation?

LEO: With synchronous WeakRefs tests, there is a timeout. If we don’t have any error, it will be treated by Test262 with no error code. We do our best to create assertions with no false positives. A test with no error at the end is considered as passing, but that’s not sufficient here, especially with synchronous execution.

TST: You said earlier, without such a hook, you’d have to remove all the tests. MM said that a hook should not be required to do GC. I mostly disagree with that. There’s nothing to be made normative about this.

DT: I think you can do better than that. Two ways. There’s expected behavior, if my hook says I am participating, it should fail or succeed reliably. It’s very plausible to write the simple test in that case.

TST: That would only work if we were talking specifically about a Test262 hook. I think for the most part Test262 use methods that shells expose that aren’t part of the language specification. If we expose a specific hook such as do the specific GC that the test asks for, would that work?=
MM: in order to do that and for it to remain correct, we’d have to be very clear about the boundary for what collections are mandatory once the test is called. That would preclude a conservative sweep of memory. You could do a conservative sweep and still be performant.

DT: But if 9/10 say that

KM: That would be very misleading then. If the tests say it works, but then it only works 9/10 times. This doesn’t mean it reliably works.

MM: Do any engines treat pointers conservatively?

KM: Yes, absolutely. I also think the proposed thing we’re discussing—you call GC it returns a promise which goes back to the run loop, performs the full GC, and then uses basically WeakRefs to test WeakRefs.

DT: Are you conservative only on the stack, or also on the heap?

KM: Both, but within objects we’re not conservative.

DT: You’re actually in the bucket of implementations that could be reliable?

KM: Not necessarily. We’re deep into the C stack, so it could be unreliable. 99.99999% going to work but it’s not deterministic.

TST: Regardless of the way were going to treat these tests, I don’t know that we should ever use an implementation where we say an engine should or should not collect WeakRefs. We probably shouldn’t ever have tests that fail here.

MM: Test262 can very well still observe collections that violate the spec.

TST: We should have the observability guarantee.

MM: If a WeakRef to it goes to null, than the finalizer should run.

TST: That’s less clear to me.

LEO: My goal for Test262 is not to create competition, but to create cross-compatibility with JavaScript. Test262 would be not rich enough to not have tests for WeakRefs, so I appreciate this discussion. I want to make sure that all the engines can use this test suite.

YK: What I find confusing in following this, there seems to be some conflict to use the existing test suite for compliance testing. It seems very important to make sure references don’t disappear. On the other hand, I’m not sure that in practice, there’s a lot of ways to satisfy the GC requirements.

MM: What’s the point?

YK: The test would not work as well as we wanted, but that doesn’t mean they fail the tests.

MM: But it’s consistent with the spec, which says that GC is not a requirement but encouraged. If the platform provides a GC hook, we hope that the platform cleans up much of the garbage by the time the hook is called.

YK: OK, I will just talk about this more afterwards.

SYG: I have feelings about this compliance thing. I was confused by your comment that if you add tests than this reference must be collected. In practice, that may carve out a new sense of compliance.

DT: That may be. In specification, specifying an exact thing that are only aspirational is very hard. In the case of WeakRefs, I was proposing if in an implementation, if there’s a mode that says I have done everything that could be collected. It’s useful for the test suite to know that, so it must be the case that if we do this, we make it simple to be testable.

SYG: That seems like valuable tests for each engine to keep and maintain for themselves.

DT: Sure, but in Test262, this does document and keep as aspirational what GC _should_ do.

SYG: That statement seems controversial.

DT: Sure, it may be. But it does provide guidelines with what that GC behavior might be. I think there is a way to do this, but it may not be something we want to do.

WH: I’m curious what security implications there are if you can use conservative GC to figure out what’s contained in a closure. If a function captures some state which due to conservative GC prevents some collection, can you use WeakRefs to figure out what’s in there?

MM: We’ve generally been taking the perspective that anyone who can create a WeakRef has the ability to read a side-channel, so they should be used with caution. However, even with the Side-channel through the GC that we knew about, we still didn’t know about actual memory addresses and we know various forms of attack even in memory-safe languages, if you know where things are located. So, there is an additional side-channel, that we didn’t know about before.

MHN: I don’t think this is an additional side-channel, because you can already get these memory locations by observing different timings of GC.

MM: Ah, the timing side-channel already gives you the conservative collection side-channel.

CLA: I'm wondering if this change in BigInt literals blocks current PR somehow

LEO: I think it’s a timely question and important to be addressed.

## Ecma404 Update

Chip Morningstar (CM)

CM: No updates to the “JSON” standard. The spec is timeless and eternal. (Laughs)

## Code of Conduct Committee Updates

Aki Braun (AKI)

AKI: Some quick updates. We had a minor incident at the last meeting. The discussion is ongoing there’s nothing more to report. There has been a user [not to be listed in the notes] who has been antagonizing and derailing conversations, and upon receiving multiple reports we have chosen to ban them for 6 months. We have also updated all of the reporters to note that this user has been banned.

AKI: At the Ecma GA, we’ve requested to keep track of honorifics for the Ecma memento because individuals have been mislabeled as “Mr.” or “Mrs.” when those are not necessarily the honorifics they wish to have. Please let us know if you have a preferred honorific by emailing. [tc39chairs@ecma-international.org](mailto:tc39chairs@ecma-international.org).

## Making function.sent inactive

Jordan Harband (JHD)

MM: I am one of the people that asked for it. There are some patterns using generators using either a source or a sink or both. Using a sink suffers from this asymmetry. I do not care about this enough to champion. But, we should beware of arguments from the absence of patterns that would use it. Because of its absence, we’ve not seen the patterns that would have used it.

YK: Because it’s an active proposal, it serves as a good honeypot for people to request it.

JHD: This is a Markdown file in a larger file that Allen maintains called `es-ideas`. The only comments I’ve seen are bike-shed-y comments like “it should be `yield.send`” rather than what it currently is.

From IRC: Haxjs is willing to champion this proposal, given mentorship.

JHD: I am willing to help mentor Haxjs on this.

JHD: My interpretation is that Allen does not want this withdrawn. He wants to see it eventually land in the language.

YK: I think it is acceptable for us to withdraw it in that case, but it seems we’re not.

#### Conclusion/Resolution

- haxjs will now be the champion of `function.sent`
- JHD and haxjs will create a repo and update the proposals list

## TC53 Liaison Report

Peter Hoddie (PHE)

- [slides](https://www.icloud.com/keynote/0KVOIMUziDvEHgXdwjcyGg03g#tc53_liaison_tc39_-_july_2019)

PHE: (Presents slides)

PHE: New name for TC53: EcmaScript Modules for Embedded Systems

WH: Is everything you do using EcmaScript modules?

PHE: Yes. We had originally called it something else, but it does now use EcmaScript modules. Is there a concern with that?

WH: No, I just wanted to clarify.

PHE: (Continues presenting slides)

MM: (Correcting the attribution in PHE’s slide to give credit to Salesforce) Agoric and Salesforce in collaboration have created SES (Secure EcmaScript) and the SES shim.

PHE: (Finishes presenting slides). Any questions?

YK: Let’s talk about this offline, but I think your presentation assumed more of a conclusion in terms of the built-in module conversation, than I thought we had already reached.

JRL: I was more surprised you could freeze an array buffer, but I guess this is because it doesn’t have any data properties? I guess I was confused between a typed-array and a data buffer.

PHE: Yeah, it’s not a deep freeze.

#### Conclusion/Resolution

- List

## Fix spec bug in `RegExp.prototype[Symbol.matchAll]`

Jordan Harband (JHD)

- [PR](https://github.com/tc39/ecma262/pull/1517)

JHD: (presents argument for resolving the issue)

JHD: Absent all web compat concerns, what would we like to do? Taking into consideration web compat concerns, what *can* we do?

JHD: Of those options, are there any implementibility concerns for any of them? To me, `undefined` is absent, we treat it that way everywhere, so it seems to be the ideologically correct way to use it. It seems to me to be good to change the RegEx behavior to start throwing. There have been a couple comments on the thread with pushback, whenever  some discussion comes up about consistency, there are those who react by saying “this is weird, and I don’t want to add complexity,” so to me, the response should be “let’s make it consistent” and not “let’s leave things as they are.” Considering that it will currently throw an error, it seems that it is unlikely to pose web-compat problems.

JHD: (Reads out [comment](https://github.com/tc39/ecma262/pull/1517#issuecomment-514162733) from V8 team)

CM: Do current implementations match the spec?

JHD: For `matchAll`, they currently match the spec text. I haven’t done the test for split.

RB: `null` does the same thing?

JHD: Yes, `null` does do the same thing.

WH: I have a couple points. 1: This change by itself is fine; I don’t have any objections to it. 2: On the other hand, I do sense uneasiness from various colleagues about making a series of such changes to the spec. Some of the state used by RegExp is encoded in multiple places, such as both fields and internal properties, and the RegExp algorithms expect those to be consistent. When you subclass RegExp, you should do it correctly and keep them consistent. So, I don’t really care if it causes consistency problems when you subclass it incorrectly.

JHD: I’m not here with a real use case defending why it needs to exist, but I’m advocating for it on the consistency. Any inconsistencies increase the mental model burden, which I think should be a concern on this committee. We generally try to account for these edge cases when we look at proposals, and I’d be very surprised to hear if these inconsistencies were intentional.

WH: As I said, I’m fine with this change. But in general for such cases, the consistency argument goes the other way. If you write a subclass and you don’t set the flags to an appropriate string, that inconsistency is introduced by the subclasser.

JHD: Sure, but the stack will be quite confusing. Again, from a code review perspective I agree with you – we should say that it should always return a string. That said, I don’t think we should be inconsistent even with the bad parts.


TST: I have some sympathy in that it seems pretty obvious that this was not what was meant to happen in the spec text. The string `”undefined”` was probably not intended to do this. Absent strong use-cases that this is actually a problem, my concern is that it may not be worth bringing this to the committee.

JHD: That’s fair; I think the spec effort is basically done, I can just click “merge”.

TST: This is more a commentary on the future. In the future, if you have a similar situation that you identify that there’s a spec bug… maybe just report it?

JHD: Maybe that is a viable option for the future. But for RegExes, I do think it’s worth spending the energy making this land. We’re stuck with this for forever, just as it would be useful to make changes to `Date` even with `Temporal` on the horizon.

TST: Your eagerness to fix these comes at an opportunity cost to the committee.

JHD: Noted.

AK: That’s where the V8 concern comes with—doing more fixes where there don’t seem to be a use-case/user problem, doesn’t seem to be the best use of the engine implementers' time. Hopefully this is useful feedback to the committee.

MM: Remember that attackers see inconsistencies and edge cases as opportunities. In response to TST and AK about what precedent this sets: First of all, I’m very sympathetic to JHD, but I’m also not one of the engine implementers who would be burdened by fixing it. The inconsistent behavior is a consistent error; it’s not an early error, but it’s an error that is early enough to be caught during development. This surprise is unlikely to cause post-development execution to deviate at runtime from the programmer’s expectations. Thus, this inconsistency is harmless enough that I am calm about not fixing it.

JHD: Perhaps we can land this change but also suggest not using this as a precedent given that it doesn’t generally impact users?

TST: I think I’d be more comfortable talking offline about this.

YK: Is the objection to this feature or the precedent?

AK: What TST said exactly represents my thoughts on it, so I don’t want to waste more time on it, given that his point was about wasting committee time.

#### Conclusion/Resolution

- For future note, this kind of discussion is perhaps not the best use of committee time.

## Guard `TypedArray` methods from non-exotic receivers

Jordan Harband (JHD)

- [PR](https://github.com/tc39/ecma262/pull/1556)

JHD: This is about typed arrays in the receiver. Andre pointed out that we made a change in 2016 which introduced a web-compat issue. Based on the feedback about previous topic, I don’t want to take up too much time on the committee. I do invite people to participate on the PR.

#### Process discussion about Normative PRs

YK: It seems like meets consensus is meant to be quick, but when implementers are first seeing these proposals and having to make a quick decision about whether or not to agree to it.


MM: I think a “champion” is strong.

YK: Sure, I’m generally very much in favor of these kinds of proposal, but I also think that it will go a lot faster if we get some buy-in from implementers. If there are no implementers that are enthusiastic about it, we should discuss that. That’s all.

LEO: As we usually do for Intl, it’s good to have expressed intention to implement, so I’d encourage something similar.

YK: I am trying to suggest as weak-as-possible of a requirement, so yeah, an expressed intention to implement is a good idea.

#### Conclusion/Resolution

- Glossing over this PR due to unresolved feedback on a web-compat issue
- Encouraging folks to participate in PR discussion

## Disallow internal methods returning `continue`|`break`|`return`

Jordan Harband (JHD)

- [PR](https://github.com/tc39/ecma262/pull/1539)

JHD: It was noticed of the type of completions, normal and `throw`, there’s also the possibility of completing with `continue`, `break`. We should clarify that this is prohibited.

KM: Do we know of any other standards that use internal things or do weird things?

JHD: It’s certainly possible that HTML would do something like this, but not that I know of.

MM: I strongly agree with JHD that we should do this. ECMAScript is a language that I’m aware of at least four groups trying to formalize. When built-in functions can, in theory, do things that ordinary functions cannot, the language becomes hard to formalize, and admits far fewer theorems about programs.

Another thing is that we’ve seen problems where implementers, (in particular browser makers) do bizarre things we might never have thought we needed to outlaw. So now we go out of our way to make things explicitly clear, such as mandating that all objects, including host/exotic objects, must uphold the object invariants. We require that host objects cannot do anything that proxies cannot do, so that membranes remain as transparent as they are. We cannot achieve full membrane transparency, but we should not allow the introduction of new cases that break transparency.

#### Conclusion/Resolution

- consensus on this PR

## Disallow BigInt literals for Annex-B non-octal digits

Caio Lima (CLA)

- [Issue](https://github.com/tc39/proposal-bigint/issues/208)

CLA: Last week, there was a proposal about Annex-B non-octal digits on BigInt, so we’re seeking consensus here. I’d like to ask if anyone has a problem with this kind of change?

LEO: This is not a PR, this is an issue. The current PR is merging this BigInt into Test262. It’s very important to address this now, because it’s blocking merging BigInt into Test262.

JHD: To clarify, BigInt has an open PR in this spec, and if we get this change approved, we’d be able to make that change prior to merging BigInt into the spec.

AK: This is already the V8 behavior, correct?

LEO: Correct.

MFS: Could you give me some source text that would be parsed differently?

WH: `08n`

MFS: Oh, ok.

WH: This is another example of the mess that is in Annex B, but at least confined to that Annex. I support this fix. I would hate for the Annex B grammar mess to propagate into the rest of the spec.

CLA: Do we have consensus?

MM, WH: (Thumbs up)

#### Conclusion/Resolution

- Consensus reached

## Explicit Resource Management

Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-using-statement)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkdZAmxoB7HKzm78gCw)

> Seeking stage 2

RBN: (Presents slides)

JHD: Why do disposal before `catch`/`finally`? Would you perhaps want to examine those variables?

RBN: You can do that by defining the variable prior to the `try` and then referencing it in the `try`:

```js
const x = <something>;
try (x) {
  // do stuff with x
} catch(e) {
  // examine x
}
```

RBN: (Continues presenting slides)

DT: Concerns about errors when doing multiple exprs in the resources list:

```js
try (const { x, y } = z, x = x, y = y) { … }
// Are we going to break here? The slides suggest that this would trigger
// @@dispose call on y, then on x, then on z
```

RBN: (Continues presenting slides)

RBN: Ready for questions and then requesting stage 2

YK: I’m generally in favor of this proposal. In Ruby, this brought up the issue of TCP closures.

MM: You said that the expression form is useful, could you explain why. Seems to me to be something I’d recommend against. Altogether, I’m wondering if it pays for itself or if we should just focus on variable binding form.

RBN: let me see if I can give you an example of this:

- C# has a using statement.
- Database transactions have this.
- Logging has a use case where certain contexts are entered and exited.

YK: I’m observing that the use-case you talked about -- a lot of them require async. Not clear on how to handle async here. Async matters a lot here. We should make sure to discuss.

RBN: WIth some of the recent changes and proposals in C#, they’re looking at adding something that’s similar to the async iterables that we have.

YK: In practice, does that mean that people are forced to use blocking IO? Or is there an alternative?

RBN: In C#, you can write asynchronous code as long as the dispose is synchronous.

YK: we wouldn't want to say that closing a file is synchronous in JS

RBN: even if we did it might be valid to say it is for one file, but not between three files being closed at the same time.

YK: We don’t do sync I/O in JavaScript so we can’t really do this kind of disposal.

YK: This is a little different than what MM said. Having a prototype that allows disposal without initialization seems worthwhile. Even without syntax

RBN: I have a package that does exactly this

WH: To set the context of my question: async dispose and regular dispose are different: You await async dispose or you immediately execute dispose in regular dispose. If you attempt to dispose something without a @dispose method, it throws an error?

RBN: Currently yes

WH: In the async situation, you first look for @asyncDispose. If it’s there, you run and await it, else you run `@@dispose`, otherwise error. This creates a refactoring hazard: If you add an @asyncDispose method as a default to something like the Object prototype, you may change the meaning of a lot of things in your program since the async disposes which would have defaulted to the sync disposes now refer to the new async dispose.

RBN: This would also be a problem for async iterator for things that were also previously normal iterators. We don’t do anything special to handle that.

WH: Ok.

AK: You mentioned this `const` restriction, but given that we have the `expr` form, why do you have this restriction?

Ideally, it avoids a foot gun. If I say in the head of `try (let x = something)`, then I say `x = somethingElse`, what do I dispose of?

AK: I agree that destructuring is problematic, and I don’t have a good answer for you. But not clear that `const` is necessary

> Much of the discussion below centers on the `try (const { x, y } = z)` example shown in the slides

DT: I like the feature in general, but I am concerned about the “black magic” of the disposal. How do debug tools show this? The potential footgun in that case of declaring x and y and having it dispose z seems problematic in that it’s potentially making it more problematic. I would advocate that the declared names are the things that you dispose.

RBN: I’ve evaluating running dispose on the individual bindings. Not opposed to it. Question to room: which is the bigger footgun? Disposing individual bindings or the RHS of the expression? If I want to dispose the individual bindings, perhaps it is more reasonable to put the “using” on those bindings individually

DT: Can I stick a name on the dispose method so the developer knows what’s going on?

RBN: I don’t have a strong preference. Just want to avoid the footgun in the refactoring case. I am finding that it might be better for user intuition to dispose the individual bindings.

YK: To me, a principle that you’d like is that you’d like to make the visibility of the binding somehow connected to the timeframe of the disposal. Forcing people to hoist the binding outside requires visibility outside of the block. Similar to peoples’ feelings about the unnecessary binding in `using const x`. The `using const x` alternative seems more intuitive for this reason.

RBN: If you want to dispose the individual x and y, you cannot hoist it to make it work

YK: Now that you have access of properties outside of disposal is not ideal.

RBN: In the long term, I think that the best approach is to call dispose on the individual bindings and that automatic refactoring tools should take this into account.

WH: The dispose of the result of the expression has fun consequences: `try (a = ..., b = ..., c = ...)` will only dispose `c`, because that’s the value of the comma expression.

RBN: Yes, we might want to disallow comma here

MM: There are many places in the grammar that say AssignmentExpression, in order to omit commas, which you would want here.

MM: “try await” doesn’t solve the problem here. I also would object to `using` syntax, because even in the synchronous case, side-effects are happening where no code appears. Intuitively, that allows important cases to escape code review. If some syntactic marker were used at the end of the try block, that could work as the a syntactic marker for the interleaving point. Although I don’t have a concrete syntax suggestion, I’m ok with this proposal given agreement that there will be a clear syntactic marker at the interleaving point.

RBN: One of my goals is to see about possibilities of events in stage two. Since you’re saying this is a blocker, if I dropped async dispose would you still object?

MM: Yes, I would have no objection to that. Likewise, I would have no objection if it moves forward with a note that a syntactic marker be added for the async case.

RBN: Either we would need to find a syntactic marker or we’d have to drop async/dispose.

YK: The reason I asked those questions earlier is because I think dropping async/dispose would be problematic.

JRL: What is the expression after the using statement evaluates? Are x and y still usable if I move them out still?

RBN: It’s however you choose to dispose. In something like C# or dotnet it’s up to the user to handle any kind of errors. There’s nothing that happens to the expression that would make the expression unusable.

KM: One common use case for things like this, is similar to an RAII -- having it do initialization work when you create it. Is this something you considered?

RBN: I haven’t considered that and I have no opinion on it. It’s something we could add in the future, as well.

LEO: I still am strongly opposed to extending the try syntax to anything like this. Far from being convinced. I don’t think I’ll get convinced to extend try given the complexity that it adds to the language. I can see how it would be used, but I’m not convinced it’s useful enough. I am going to express my strong objection to extending the try syntax.

RBN: There are a lot of other languages that have similar syntax. Java has the exact same syntax. C# has the using syntax that is easy to adapt. It reduces the boilerplate that developers need to use to accomplish a goal.

LEO: I still have questions for motivations on other parts of the feature. Specifically on the try/catch syntax I’m entirely unconvinced.

ARY: I wouldn’t intuitively expect to call a method on that nested try, destructuring aside. The nested try seems very strange. One suggestion I would have for that is potentially using the `with` statement’s syntax in strict mode, if that would work.

WH: No, `with (` would not work.

RBN: This suggestion has come up in the GitHub repo. I don’t think the committee would suggest reusing the `with` statement in any context, nor would I.

KM: Do you mean the statement or the keyword?

RBN: I mean with the statement. There could be a try/with or try/using. Cover grammars would be required for `with` in this new context.

SM: I think one expectation here is that we’d add a dispose symbol to the web api/additional APIs. Probably not everything’s going to be added all at once. You try to mitigate throwing when there is no dispose. For this particular case, the mechanism where you throw is after all the side effects already happen, so you get what you wanted out of the function already. The mechanism you have now will be too easy to ignore.

RBN: So you’re suggesting to move the `dispose` to the end of the block?

SM: Yes, maybe even having it outside.

RBN: Could you create an issue on GitHub? That could be an interesting thing to discuss. One of the reasons we have aggregate errors is to not hide errors. If you have a case where you have multiple errors and you’re checking outside before you check inside those errors inside get swallowed.

SM: Moving the check earlier would be good

DT: Did you consider additional keywords on try (e.g. try/dispose)? That is, having an explicit section for dispose actions.

RBN: I did not. That would be disposable. In a try block, the only things that can follow are catch or finally. I’d like to see if I can advise this to stage two.

MM: Only with one of the two solutions to the await problem, either a syntactic marker, or dropping the feature.

RBN: I think YK is against dropping async

LEO: I have a strong objection on the way the extension of try works.

AK: What sort of evidence would convince you that this is useful? RBN has presented a lot of evidence about why this is useful.

LEO: No answer right now

MM: I want to raise a question that your proposal may already address. What’s the best we can do in this direction in the language today using arrow functions?

RBN: Yes, `return`, `break`, `yield`, `continue`. This is the TCP issue.

#### Conclusion/Resolution

- Tabled until Thursday. Inconclusive

## Nullish coalescing

Daniel Rosenwasser (DRR)

- [proposal](https://github.com/tc39/proposal-nullish-coalescing/)
- [slides](https://1drv.ms/p/s!AltPy8G9ZDJdqSUtMZeOKLg1RcRD)

DRR: Seeking stage 3

DRR: (Presenting slides)

WH: (In reference to new grammar production `Coalescing`) This doesn’t work

DRR: If you have a simpler way, I’d love to hear it.

WH: Not just simpler, this way doesn’t work.

DRR: We’ve gotten spec sign-off from 3 members.

DRR: (continue presenting slides)

DRR: Do we feel comfortable dropping the grammatical restriction as it exists?

BTT: You quickly dismissed high precedence, but that’s used in particularly new languages (Swift & Kotlin). Why do you think they bucked the trend?

DRR: Kotlin and Swift do something different for Optional Chaining too, and I think it’s a tossup in some sense.

WH: I very much prefer a lower precedence. You can mix `||` and `|` in the same expression— it’s not particularly useful, but OK, so what. I’d find it very disconcerting to get conflicts from all the other binary operators. Secondly, the grammar is broken.

DRR: Depending on the outcome of this conversation, I’d like to work with you to address the grammar concerns.

WH: The `Coalesced` grammar parameter is unnecessary and just complicates the grammar. You still allow `a || b ?? c`, it just doesn’t work. There’s a much simpler way to express this grammar.

DRR: Thank you for that feedback

MM: The mandatory parens when mixed with `||` are required, those with `&&` are nice to have. People already need to know that `&&` binds tighter than `||`. Having mandatory parentheses would be OK with me. Without mandatory parens, a lot of existing code that uses `||` that would be changed to `??` would silently execute in ways that violated the programmer’s expectations. The only way to avoid such runtime surprises is to treat the potentially surprising refactorings as syntax errors, which mandatory parens do.

DRR: To clarify we’d either go with both or neither in the grammar. Would you be strongly opposed to removing the restriction?

MM: Yes. If you remove the restriction there is no way to avoid surprising behaviour. This will be a common thing people do when transitioning old code.

YK: I agree with MM. I'd rather not drop the disambiguation. MM’s worries about refactoring hazards are real.

RBN: I generally don’t think that parentheses should be necessary. Requiring parentheses seem like something that should be enforced by a linter or something else, as opposed to baking it into the language.

DRR: I generally prefer to try to approach language decisions leaving options open for the future.

YK: This is not fixing a bug, this is a new feature. Years of code using `||` and `&&` that will have refactoring hazards if parens are not required.

AKI: Yeah, there will definitely be chaos.

YK: The surprising runtime behavior is not going to result in annoying debugging, it will result in people not using the feature.

KM: I do think it would be useful to figure out why certain languages other modern languages (Swift and Kotlin?)  chose the reverse precedence of what classical languages have gone with.

DRR: Yes, agreed.

JGR: The logical operators in a statically-typed language like Kotlin aren’t super relevant because they can only be used on booleans.

YK: I can’t figure out quickly if this is true or not. There are statically typed variants of JavaScript that have already set a precedent. Perhaps looking at what they do is a good step to take.

BT: Thank you for using the queue, DRR.

DRR: C# is a language that also uses this feature, it’s also statically-typed. I think the looser precedence is fine as well, so I’m not sure if this is really relevant anymore.

RKG: I just wanted to reply to two points. With regard to using exponentiation as a precedent, I can’t help but feel this is a bit different—there, we were mixing a unary operator with a non-commutative binary one, and readability was greatly influenced by the presence or lack of spaces around **. Mark’s assertion about refactoring hazards in chains of || where only some of them can be upgraded to ?? is the strongest argument for requiring parens that I’ve heard so far. Still, I’m concerned about designing a long-lived feature around ease of migration alone.

DRR: We’re very receptive to developer pain, absolutely.

YK: I agree. I think if we came back later and it turned out to be confusing and unnecessary then we would reconsider it.

MM: Sounds like we’re agreed that the thing you’re asking for stage 3 is with the required parens and we still need to write a grammar to achieve it, but it’s clear what the grammar is supposed to accomplish.

#### Conclusion/Resolution

- Consensus reached, proceeding to Stage 3

## Symbol.reverse

Leo Balter (LEO), Jordan Harband (JHD)

- [sample code](https://gist.github.com/leobalter/092fc36adccfcc86e8e7b074817078e1)
- [slides](https://docs.google.com/presentation/d/1nPJORyKqZ2AHloPg8ZzdFLz79tAyccpY2CIsmARjUXc/edit#slide=id.p)

LEO: (presents gist)

KM: From an API perspective it’s weird to have Symbol do this. It also seems like an easy feature to implement, however it turns out that it’s enormously important for performance.

JHD: We wouldn’t add reverse versions of all array methods, the call would be exposed.

MM: LIFO in Set seems bizarre as a way to handle elements added during iteration.

LEO: It would be great if they could use Map/Set using LIFO.

MM: If you don’t mutate the body of the loop, the issue I’m describing doesn’t occur. I thought you were saying that you have this issue in the reverse direction with added elements, but that would be LIFO, rather than FIFO.

JDH: Maps/Sets only have the ability to insert at the end, so I don’t believe this issue happens.

MM: Hopefully from what we decide we want to do for Maps/Sets we can make this clear in later versions of this proposal. Having them be dynamic in the opposite direction (LIFO) makes more sense to me. These aren’t issues blocking Stage 1.

JHD: so this is an issue that blocks stage 2?

MM: Yes. It’s not a blocker at this stage.

AK: This proposal's approach seems too incremental. Symbol.iterator is just an alias, so I don’t really see what purpose this solves. This isn’t a name bikeshed issue, this is an ontology bikeshed. I’m not blocking anything, I just think you should avoid the symbol.

LEO: I’m OK with not using the symbol. I need to check some things in the other existing proposal.

DT: I’ve been programming for a lot of years on a bunch of collections that have reverse and never wanted to use it. All the times I’ve wanted to use things _like_ this, I’ve ended up writing something myself anyway.

LEO: The use case of grabbing the last 5 items of a list is one i’ve had

DT: I assume the complexity of this will dramatically overshadow the utility of it.

JHD: For me personally, I think it’s definitely worth exploring the necessity of adding this to the language.

MM: If you’re trying to do dynamic for Arrays, it’s not difficult.

JHD: Sorry, I’m talking about not for dynamic for Arrays.

YK: A very common use case is tails in shells. I think this is a useful use case. There’s a longtail for use cases. Two things: 1) it’s well motivated 2) a big collection of the use cases aren’t dynamic.

MLS: I agree with AK. What about adding `reversed` instead? All the use cases I’m hearing are static, not dynamic.

MM: That can in some sense be construed with forward iteration.

JHD: Our initial thinking around the symbol was to be able to enable other proposals.

AK: Are people doing reverse iteration on maps and sets? The current order was chosen because it was deterministic. It seems pretty strange to add a bunch of items and then be like what the last item added? Has anyone ever done this?

JHD: We will have to present this as part of the proposal.

MM: AK’s speculation about the proposal is correct.

YK: In the context of Class List, we added replace which would retain the original order. It may be useful to add the replace method in specific contexts.

JHD: Please bring up any use cases as GitHub issues, if you have them!

#### Conclusion/Resolution

- Consensus reached, proceeding to Stage 1

## Inconsistency between Array.from and %TypedArray%.from

Jordan Harband (JHB)

-[sample code](https://gist.github.com/ljharb/896ad592accdbd783d5ec1d44e978b76)

JHD: Array.from will yield a value, and map it, and so on; interleaving them as you’d expect. However, typed Arrays exhaust the mapper first and then iterate over them. It’s clearly doing the mapping after the iteration. I brought this up because I wanted to consolidate them but I couldn’t because I noticed the operations were doing something different. If it is web-compatible to change one of these two, we should pick the bad one and do what the good one is doing.

AK: I don’t see any problem here, if you’re depending on call order that seems bad. If we spend time continually updating specs to avoid observable side effects we will spend an unbound amount of time. I’m not excited about making the spec self-consistent for the sake of it.

JHD: typedArrays in general might get faster, if the group agrees, spending time to check for perf improvement should be done

YK: if someone wants to do this, we should fix it.approaching this for ma spec compatibility  perspective is wrong, but from a use case perspective is valid.

JHD:the array, not the typed approach is the one we want

AK: In the TypedArray case, you must know at construction time, so the iteration happens much earlier.

YK: Is there a plausible way of knowing if there’s an efficient way of doing this?

AK: i dont think this is the forum for that type of question

YK: is this an efficient thing to do in the first place? We dont have an exact size iterator

JHD: Sounds like i will need performance numbers before making the change, I wanted to gauge the philosophical temp of the room, I can walk away and keep thinking about it.

MM: This is a good example of why RegExp is a bad precedent. This is a non-erroneous example either way. I’d still agree  that in this case, it’s not severe or worth changing, but it’s observably different so it’s a higher priority to fix than RegExp. The second point, is I believe JHB, what you’re doing is absolutely what you should be doing on this committee. Showing examples of these kinds of things to the group of experts on this committee is the best way to discover that a supposedly minor inconsistency would actually create a major problem. Like the override mistake, which the committee wouldn’t pay attention to until it became a crisis that was too late to fix.

JHD: The feedback I’m getting is that I could achieve both your goals by doing more legwork before bringing to committee

??: To clarify a little bit, I do like this approach over the PR approach. I may disagree with MM on the details about where the boundary is, but I generally agree.

DT: I happen to like the array approach. I have reasons to believe why it would offer performance improvements. I would bring the philosophy to what would address the `from` method.

JHD: I agree, if it were merely about future proposals, I would punt it to those proposal authors, but unfortunately that’s not the case.

BT: that was basically my suggestion, 2 goals: 1. Can we fix it now, and 2 what about future semantics, I have no opinion of the first

JHD: I’m getting the feedback that bringing forward these proposals is useful to the committee, and it sounds like before I put up a PR about changing TypedArray semantics, I should get implementers on board to make sure they are willing to make the change.

MM: Please keep bringing observed inconsistencies to the committee's attention.
