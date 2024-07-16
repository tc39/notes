# 11th June 2024 | 102nd TC39 Meeting

**Attendees:**

| Name              | Abbreviation | Organization       |
|-------------------|--------------|--------------------|
| Keith Miller      | KM           | Apple Inc          |
| Ashley Claymore   | ACE          | Bloomberg          |
| Jesse Alama       | JMN          | Igalia             |
| Waldemar Horwat   | WH           | Invited Expert     |
| Jason Williams    | JWS          | Bloomberg          |
| Daniel Ehrenberg  | DE           | Bloomberg          |
| Duncan MacGregor  | DMM          | ServiceNow         |
| Bradford C Smith  | BSH          | Google             |
| Agata Belkius     | BEL          | Bloomberg          |
| Sergey Rubanov    | SRV          | Invited Expert     |
| Matthew Gaudet    | MAG          | Mozilla            |
| Richard Gibson    | RGN          | Agoric             |
| Chris de Almeida  | CDA          | IBM                |
| Daniel Minor      | DLM          | Mozilla            |
| Chip Morningstar  | CM           | Consensys          |
| Philip Chimento   | PFC          | Igalia             |
| Michael Saboff    | MLS          | Apple Inc          |
| Mikhail Barash    | MBH          | Uni. Bergen        |
| Justin Grant      | JGT          | Invited Expert     |
| Christian Ulbrich | CHU          | Zalari GmbH        |
| Tom Kopp          | TKP          | Zalari GmbH        |
| David Enke        | DEN          | Zalari GmbH        |
| Shane F Carr      | SFC          | Google             |
| Chengzhong Wu     | CZW          | Bloomberg          |
| Samina Husain     | SHN          | Ecma International |
| Jordan Harband    | JHD          | HeroDevs           |
| Jonathan Kuperman | JKP          | Bloomberg          |
| Istvan Sebestyen  | IS           | Ecma International |
| Aki Rose Braun    | AKI          | Ecma International |
| Romulo Cintra     | RCA          | Igalia             |
| Luca Casonato     | LUC          | Deno               |

## Welcome

Presenter: Rob Palmer (RPR)

RPR: Do we have any volunteers for note editors to assist the transcriptionist? Any volunteers at the moment? Okay. Dan has his hand up in the room. As does Jesse and Shane. We are off to an excellent start. I am glad to see eagerness. At the end of the top effect, I would ask speakers to wind up in time so you have enough time as the presenter to state what has been said in a summary form. So we can capture that.

DE: I want to emphasize this point about both the summary, keep point to the presentation and discussion and the conclusion being very critical of all items that are discussed. I want to discuss with the chairs. We do not cut off that topic, in fact we could – if we need to, cut off discussion so we have enough time allocated for documenting the summary and conclusion. We consistently have an issue where moth topics don’t have a summary and conclusion by the time the meeting is over. It makes sure it’s accurate, makes sure we agree on it together as a group.

RPR: In general, that’s going to mean we will end topics 3 or 4 minutes before the ending because we have got a very packed agenda with no real – no visible wiggle room. So everyone please be prepared to finish up even if you haven’t achieved your objectives, 3 or 4 minutes early. Okay. The next meeting is at the end of July. It’s a remote meeting. I think in – on the West Coast time zone.

RPR: All right. Let’s start up with some housekeeping. First of all, can we mark the previous meetings’ minutes now as approved? Silence means yes. Yes. We can.

RPR: Any objections to adopting the current agenda? I am hearing no objections. So that is done.

## Secretary's Report

Presenter: Samina Husain (SHN)

- [slides](https://github.com/tc39/agendas/blob/main/2024/tc39-2024-026.pdf)

SHN: Thank you to the host for setting up this meeting. I can just see from the camera you have got a great turnout. It looks good. It’s been a while since I’ve been to Helsinki and it’s a beautiful city. I hope you have good weather and enjoy the city in addition to this meeting. I also want to thank Eemeli for organizing the social event. You will be doing that this evening. Enjoy that and I am sorry that I am not there. I would have very much enjoyed being in the meeting and the social event. I am recouping. My hand doesn’t allow me to travel right now.

SHN: I want to thank DE for making the comments he did regarding the summaries and conclusions. Yes, the summary and conclusions are relevant. It certainly should be something short and relevant. It should be something that enables anyone who reads the technical notes at a later time to quickly understand what the discussion was, the main points and the resulting actions. I know we have had a lot of conversations about summary and conclusions. We may discuss at a later time, or you all may give me a better idea of how you prefer to do it. Whether it is just one paragraph or 5 bullets that covers the summary and the conclusions or whether you want it separated. I leave that to your discretion. But the summary should capture the objective and the main topic that was discussed and the conclusion even more relevant is the agreements you have made, the resolutions, the next steps to take, if you have made (a proposal) go to the next stage or (if not) what the problem may be. I think that – I hope you do. It has been happening, but make sure it happens constantly. I would like to share my screen with my slides. Just give me a second.

SHN: So I hope you can see in front of you the secretary’s report. I also want to recognize AKI, she has joined the ECMA secretariat to support TC39. So please welcome Aki and support her as she does all the work that she has been doing to make sure we are efficient. Thank you Aki and you’re on the call and on the West Coast. It’s some hour in the night or in my case, early morning. Thank you for being awake.

SHN: Just a short overview of what we will discuss today. I will talk about the usual approval process that we do every year with the success of the two standards. A bit about projects, members, and the work that Aki has done together with AWB on a solution and some options for a PDF version. The next on the slides have general information for you. There’s been some information there on invited experts and that – that category and voting/not voting , our code of conduct, of course always important. Let us all work together in a friendly and open manner. I think RP already mentioned that. And some documents that you can access if you wish and, of course, in the next meeting.

SHN: All right. Let’s just start. In light of time and a busy agenda.

SHN: Please at any time, interrupt me. I can’t see the chat. Here are the timelines. The 60-day opt-out and 60-day review. ECMA262, that was closed early. So that’s done. We have not received any issues on IPRs as I imagine you haven’t or the chairs. That seems to be moving smoothly. We look forward to approval of that in the June meeting. That’s the 15th edition.

SHN: And for ECMA402, that came just a little bit later. So it is still open. The opt-out period and the review publication period ends on the 24 of June. I am confident that that will go smoothly. We haven’t had any issues or contentions regarding that. Thank you for all the efforts. It’s again excellent that we have got another edition for this coming discussions at the June GA meeting.

SHN: All right. Some new projects. I want to highlight, TC54 was formed. The new standard is going to be the software bill of material specification. It may have a number associated with it. The TC54 team has been working to have this complete document reviewed and agreed with the technical committee. It does come from a working group. It’s gone very well. If you want to hear the recordings they are on YouTube. If you want to see the agendas or the minutes of the last meetings they are published on GitHub. Some have joined the call. We have a strong group involved at TC54. We have a couple more meetings to see we have the document finalized, and hopefully they will be ready for approval at the GA. We’re moving forward with that.

SHN: A new proposal for TC55. That’s a collaboration with W3C and WinterCG group. This is an open conversation with the Ecma ExeCom and will be discussed during the GA. We have had a reviewed and revised scope and mode of operation. It will be similar to what we did with CycloneDX. It also will have some discussions during the GA and we will aim to move that forward with TC55 and starting a new technical committee. Thank you for your efforts. Some of you on this call are also on that.

SHN: New members, JetBrains is currently an invited expert. There’s one or two people here from JetBrains. They are welcome as invited experts. They will get the paperwork to me so we hope to have them as a new member in June. The other members, welcome. They are already members and will be officially approved and we will have a short press release on the website to welcome the new members.

SHN: The PDF. We have discussed quite a bit over the last while about having a PDF version of 262. We knew that was a very difficult document to put together. It took a lot of time. Allen supported us for two years. This year, together with Allen and Aki – and she will comment a few statements after I talk about the slide – they have gone through the document and prepared a PDF version. I think they are finalizing. It’s almost ready to go. What is listed are options that could have been potentials for a tool. We have done a review and spoken to the editors also about it. What I have put there in the square box is the recommended tool. I am just beginning discussions with them to negotiate licensing. But I also wanted to bring to your attention, a number of tools have been used and all the feedback by the editors, specifically MF’s from the last TC and last plenary and comments were taken into account and so far it’s looking quite good. I don’t have an answer on the – on the – the licensing agreement yet. But I have just made email contact and they’re in Australia or the individual calling me is from Australia. We will have some phone conversations very soon. Aki, would you like to give an update on your efforts and your recommendations on prints? Aki?

AKI: I know most of you don’t care about the PDF and wish you don’t have to hear about it. There are no good options for creating a document – a PDF document out of HTML website, even though the CSS page media has existed. Prince is compliant. That’s why. So we’re hoping to use that connection to both get our license clarity and maybe even get them to update their JavaScript implementation and join us. We will see. But yeah. The way I have it set up or will, by the time the GA, in the future, the editors should be able to just run one script and have a PDF. And not have to worry about tables being cut off or notes cut off or missing information. It will just work.

SHN: Thank you. And I hope that we will get to that solution. I know you’re working hard on it and currently with both 262 and 402, you will be doing the run through that. So we will know where that stands.

SHN: All right. That is the end of my presentation. Since our last plenary, these are some of the efforts that have been going on. In the next, there’s some general information. I bring your attention to the documents. They are numbered. If you have any comments. Don’t hesitate to contact me with any input. If they’re not useful, also give me input and we will find better solutions that are relevant for the committee to look at. You have our dates there and just keep in mind the dates as you build your meeting dates for TC39 we don’t have any conflict. We typically don’t and spoke about the summary and conclusions. I look forward to seeing some of that continue to go with the next technical note that is being finalized. And that is the end. I will stop there. Are there any questions?

DE: So thank you so much for looking into the PDF issue, we previously heard from Michael that the tools they evaluate prior, that they needed manual work. TC39 recommended we find a provider for this. How have we validated that Prince wouldn’t require that work, or otherwise, should we make sort of a backup plan to make sure that this one to two weeks of work is staffed and we don’t rely on Allen again?

AKI: I am doing that work.

DE: You’re doing that work? Perfect.

AKI: I am doing that work because I am using something that is spec compliant. In the future, you should run the script and the PDF. What is different this time, hopefully we don’t have to do the same thing over and over, taking a week or more over and over again

SHN: That is the intent, it should not be taking that much effort from others. Aki is ensuring there is a script. For the next one coming up in two weeks, certainly that will be done. We have some time to ensure that this new solution, assuming it works well with the licencing, with Prince, we can have the script and it’s straightforward to use without weeks or extra hours of effort. Certainly if we have a situation that cannot be handled, we will know quickly and make sure it’s not imposing weeks of effort, as in the past.

DE: Well, thank you Ecma so much for hiring Aki to do this important work, and Aki for doing the work.

### Summary / Conclusion

A reminder on the “Summary and Conclusion” for the technical notes was provided. We should have a format which ensures that anyone reading the summary and conclusion can quickly understand the discussion, main points, and resulting actions. Summary captures the objective or main topic of the discussion. Conclusion includes the agreements, resolutions and next steps.

### Summary

Overview from the secretariat was provided, Ecma approval pending at GA 26-27 June 2024 for: ECMA-262 15th edition – ECMAScript® 2024 Language Specification: Status Closed: Opt-out review period 20 February 2024 to 20 April 2024. And ECMA-402 11th edition – ECMAScript® 2024 Internationalization API specification: Status Open: Opt-out review period 24 April 2024 to 24 June 2024

TC54 was recognized as a new activity, and the anticipation of a new standard on CycloneDX Bill of materials specification. Proposal for new TC55 in collaboration with W3C WinterCG is under discussion.

New members were recognized: Replay.io (SPC), HeroDevs (SME) and Sentry (Functional Software) (AM).

Recommended solution for ES2023 PDF version is Prince. The recommendation has taken into account comments and investigations from the committee.

### Conclusion

Further information on Prince will be provided at the next TC39 plenary.

Dates set for future Ecma meetings: GA 129: 25-26 June 2025 GA 130: 10-11 December 2025 ExeCom: 9-10 April 2025 ExeCom: 8-9 October 2025

## ECMA262 Status Updates

Presenter: Kevin Gibbons (KG)

- [spec](https://tc39.es/ecma262/multipage/)
- [slides](https://docs.google.com/presentation/d/1tnLYexHxk1ygOkn_qevZHS1-MYggF258LNKvCdI0y6M/edit)

KG: Good morning, all. This will be an extremely brief update, in part because it is currently midnight-thirty.

KG: So we have only two normative changes that we find from the previous meeting. From Ross (RKG?), to fix the final piece of a longstanding web incompatibility in the spec, where what was specified didn't actually match what engines were implementing, and engines did not want to implement behavior in the spec because it would slow down a bunch of stuff for no particular benefit. So, concretely, the coercion of B to a property key in this line of code now happens after the evaluation of the right-hand side instead of before. Again, this is a web reality fix. And the second is landing the Stage 4 proposal for set methods for union and difference and so on.

KG: There aren’t really any notable editorial changes. Lots of minor improvements, of course. I want to call out that some of the work Aki has been doing is reflected back into the specification, including, for example, taking a couple of extremely wide tables and converting them to tall tables, which is of benefit to the readers on the web. If you are watching, expect to see a couple of those things landing. That is part of the work previously mentioned to ensure that the document is in a print-ready state in future years

KG: For upcoming work, similar list. But I want to call out that we have finally started documenting editorial conventions, or at least MF has. This is a longstanding goal of the current editor group to ensure it’s possible for authors to produce spec text which is consistent with the style of the overall document without having to infer the conventions by reading an 800-page document. If you have interest or feedback in that topic, reach out to the editors about it. That’s all I got. Like I said, a short update today.

### Summary / Conclusion

Two normative changes: "Delay ToPropertyKey call in `a[b] = c`" and "set methods" Editors have started documenting editorial conventions https://github.com/tc39/ecma262/wiki/Editorial-Conventions

## ECMA402 Status Updates

Presenter: Ujjwal Sharma (USA)

- [slides](https://notes.igalia.com/p/5Tlry4MkK#/)

USA: Hello, everyone. I hope I am audible. As you might have noticed, I am also not Ben. So thanks, all credit goes to Ben for all of this work as well as the slides. These have been few active months in ECMA402. We have done a lot of large and small editorial updates. I want to thank everyone for helping out, especially the 262 editors for vetting us in various ways. Let’s get into what we did.

USA: First off, we used named regards for DateTimeFormat records [PR](https://github.com/tc39/ecma402/pull/826). The background, in various parts of the spec, these were arbitrary unnamed records which can be quite hard to read sometimes. So replace those with named records which are like, have a specific shape which make sense, since we reuse them anyway. It’s also helpful for Temporal integration because after, when we have to put the Temporal ECMA402 stuff into it, that will just work.

USA: Also, Andre Bargul, one of our coworkers from Mozilla, has, over the years, done great editorial work. Unfortunately, that was a lot to read through and review in large. But finally, we have managed to get through all of that, and merge it [PR](https://github.com/tc39/ecma402/pull/827). So there’s like a lot of editorial backticks, as well as general editorial improvements. If you go through the ECMA402 spec, you will see that it’s much improved since not so long ago. And you have to thank them for that.

USA: Then we have replaced AvailableCanonicalCalendars [PR](https://github.com/tc39/ecma402/pull/889). Thank you to the Temporal champions for that. It’s generalizing more how we deal with calendars. Now you can get the `AvailableCanonicalCalendars` from the AO that ECMA402 uses. We have a new one for canonicalizing them so you can do that without losing non-canonicalize calendars.

USA: We clarified the structure of the record used for int `DateTimeFormat`. Basically using name records to fix unintended spec bugs and improve the readability overall. This was done by Ben. Then this is the language. So basically, in various parts of the spec, especially when returning say a list of certain values, like calendars or TimeZones, it was quite sort of all over the place, how we phrased that in the spec. Now, we have normalized that by using this terminology that is preferred in the ECMA262 spec already. And we were kind of behind on that. So yay for that. Then we replaced this.

USA: Apparently, “is equal to” was something that we had no agreement on at various parts of the spec we used all sorts of things, and now everywhere we try to use exactly the same terminology, “is equal to”. And this improves the readability and takes out ambiguity from the spec. Then we capitalized some uncapitalized things. This is clearly unintentional. But yeah. Capitalizing L “list” and capital R “record” has a special meaning in the spec. If you weren’t familiar with that. And then the words without the capitalizing can mean anything really or just lists and records without, you know, the – what they mean in the spec. We fixed that.

USA: Then we had some issues with the identifier text in ECMA-262 – well, in the integration. So real quick. Justin helped out with that. But yeah. This is hopefully helpful both in the context of Temporal, and the future Temporal integration as well as some of the ongoing proposals we are working on in ECMA at the moment. We had some issues with string index last-index-off which made us not aligned with ECMA262. I believe it was KG who helped us with that. Thank you for informing us, but actually helping us carry out this change to the editors and that was it. Thank you so much.

### Summary / Conclusion

There were editorial updates over the last two months, and we are constantly improving the editorial health of the spec.

## ECMA-404

Presenter: Chip Morningstar (CM)

- (no slides)

CM: You all already know about ECMA 404, right?.

### Summary / Conclusion

Nothing new to report. The standard remains stable and unchanging

## Test262 Status Updates

- (no slides)

Presenter: Philip Chimento (PFC)

PFC: Test262 is, as you know, the compliance test suite for ECMAScript. We have some exciting developments. We are finally landing in pieces, the giant pull request, with resizable ArrayBuffer tests. It’s been waiting for a review for a long time for many of the 250 or so files in it. And we’ve started dividing that up into manageable chunks and landing them one by one.

PFC: After that is done we will use the same approach to land some of the other large PRs such as explicit resource management and decorators. So you can expect test coverage for some of these new proposals. I would like to remind everybody that we do appreciate reviews from champions of proposals as well because we have a small maintainers group and although we do enjoy diving into the edge cases of every new proposal that people write tests for, it’s also a lot of work. And we can do it with more confidence, if the proposal champions help out.

PFC: And then finally, some exciting news: we’re working on landing a large supplemental test suite from Firefox thanks to work from DLM and Ms2ger. This is something that previously existed in the Firefox codebase and we would like to have it available in Test262 so other implementations can use it to find incompatibilities between engines and just generally get more coverage. That’s it for me.

KM: Are the new Firefox tests going to be in a separate directory or interspersed with the old tests?

PFC: We are figuring out where exactly to put them. But yeah, probably they will be in a separate directory.

### Conclusion

- Finally landing the giant PR with resizable ArrayBuffer tests, in chunks.
- Will use this approach to land other large PRs such as explicit resource management and decorators.
- As always, reviews from proposal champions are helpful and welcomed.
- We are working on landing a large supplemental test suite from Firefox in test262 so it's available to other implementations.

## TC39 TG3 status update

Presenter: Chris de Almeida (CDA)

- (no slides)

CDA: TG3 continues to meet regularly. As of I think we mentioned the last plenary, every Wednesday now. Please join us, if you are able and interested. Our activities of late have been pretty much exclusively discussing security impacts of proposals that are in progress.

### Conclusion

TG3 meetings focusing on security

## TC39 TG5 status update

Presenter: Mikhail Barash (MBH)

- [slides](https://docs.google.com/presentation/d/1gG1gE0Ggwv9krUpWOhLyvohXGJzCzWiFTOOQ-R83zGs/)

MBH: A short update on the TG5. We have changed the cadence to last Wednesday of every month. Yesterday we had a successful TG5 workshop which was co-located with this plenary meeting and the plan is to have the next TG5 workshop to have a TG5 workshop co-located with the meeting in Japan. The TG5 meeting notes are also now available at the TG5 repository . Update on the activities: I gave a presentation about TG5 at a meeting of Standards Group of OpenJS Foundation. At the most recent TG5 meeting we discussed a user study for MessageFormat 2. We are planning to do this together with Michael Coblenz from the University of California in San Diego.

MBH: Also, TG5 solicits suggestions for user studies and topic to discuss, so you are welcome to open an issue at TG5 repository, to share your suggestions. Thank you.

RPR: Thank you MBH. Would you like to write or speak?

### Conclusion

Meeting cadence of TG5: last Wednesday of every month at 4PM-5PM Central European time. Planned a user study on MessageFormat 2. TG5 solicits suggestions for user studies and topics to discuss.

## Updates from the CoC Committee

Presenter: Chris de Almeida (CDA)

- (no slides)

CDA: The Code of Conduct committee continues to do code of conduct things. It’s been quiet. Not a lot of trolling or the like on TC39 repos in GitHub. We have had one issue we have resolved since last plenary. I would like to remind folks, we are always looking for folks to help us on the code of conduct committee. If you are interested, reach out to someone on the code of conduct committee. Thank you.

RPR: So that is CDA’s recruitment pitch. If you wish to join the code of conduct committee, please do so.

## Needs Consensus PR: ECMA-402: Specify time zone IDs to reduce divergence between engines

Presenter: Justin Grant (JGT)

- PR [#877](https://github.com/tc39/ecma402/pull/877):
- [slides](https://docs.google.com/presentation/d/1U_kNIpJb89LTSFh7BBiFIJSpW_epDSnzn4XKtER4IyQ/)

JGT: Today, this is the ongoing saga of TimeZone identifiers that we have been doing this for, I guess, around two years now, maybe a little longer. This is the next iteration. So I think I last spoke with the committee, maybe 2 or 3 meetings ago when we presented the Time Zone Canonicalization proposal that went to Stage 3 and got merged into Temporal.

JGT: This is the next piece of it. A reminder for everybody, these are esoteric concepts. We have the IANA Time Zone Database, which is the source of truth about time zone information in computing, both in terms of the data about what UTC offsets are associated with which time zones and the identifiers that are used for those time zones. And so CLDR takes each release of the IANA, incorporating any changes to data and identifiers that have happened since the last release. And there is some variation between CLDR and IANA. We will talk about this variation today. And what we are doing about it. There’s about 600 of the identifiers. The normal ones we know like Europe/Paris or Pacific//Auckland, or UTC which is important for computing. There are two kinds of identifiers. ECMAScript "primary time zone identifiers", and in IANA this is called a Zone. An example is Asia/Kolkata. The other type is a deprecated name in IANA that will resolve back to a Zone. In IANA these are called links. Like Asia/Calcutta. The IANA database is case-insensitive but case-normalized. And what we will talk about today, is the process, where you get the Zone and follow any Links.

JGT: Good examples of the kinds of links that happens, you can have the weird legacy ID. PST8PDT which is a Link to America/Los_Angeles. Cities get renamed, a rare case. Europe/Kiev was renamed to Europe/Kyiv. Finally, there are Links that are merges: when a Time Zone has been the same since January 1, 1970, IANA tried to reduce the size of the time zone database by saying, for example, America/Montreal is now going to be considered equivalent to America/Toronto.

JGT: With that context out of the way, today there is an outstanding PR which is linked at the beginning of the first slide, and this is what we’re trying to solve is that ECMAScript engines don’t agree about which TimeZone ID should be primary or non-primary. CLDR (which is the source of IDs that is used by V8 and JSC) does not follow the ECMAScript spec. SpiderMonkey does follow the spec, which requires SM to have some complex build steps that require them to go out and get IANA files and use IANA’s rules and that creates some user-facing variation. When you have a time picker, you have different results, depending on which browser you’re using. With the system time zone, you get different results.

JGT: Beyond that, the spec has wiggle room which makes this alignment harder. We are trying in this PR to tighten the spec to stop the engines from diverging with each other as well as acknowledging web reality now, which is that many engines use CLDR, and furthermore the CLDR implementation.

JGT: The CLDR implementation, we think, is pretty good. And so we would like to change the spec to align to the current implementation of CLDR. By the way the reason we think it’s good is not an accident because we have been working with CLDR for the last two years to improve various things so it’s in a state to be used by ECMAScript. This PR also defines how to handle edge cases that have happened in the past and might happen again in the future. These don't actually affect any engines right now, but we want to prepare for that. Finally, this was approved by TG2.

JGT: So this is really revolving around one line in the spec here that says, according to the rules for resolving link names in the IANA TimeZone database. We will tighten that up. The main difference between CLDR and how IANA works, CLDR, which we think is the right thing, requires that each non-primary TimeZone identifier should share the same country code as the primary identifier that it resolves to. In IANA, you can have merges between countries. So the current iteration, if you use the default build options of the IANA database, will take Atlantic/Reykjavík and turn this into Africa/Abidjan. They have had the same time zone rules since 1970. Same with Europe/Copenhagen and Europe/Berlin. And many others.

JGT: We think that these inter-country merges make software more brittle, so we like the change that CLDR makes to ensure that changes made in one country don’t affect another country’s TimeZone data and we think that is important on the ECMAScript side. We believe that IANA’s decision is incorrect and we'd like to follow CLDR.

JGT: So there are other merges inside countries. For example, Asia/Chungking was renamed to Chongqing (a rename Link), and then later merged with Asia/Shanghai (a merge Link). CLDR goes along with that merge because it's still in China, and we think that this is OK.

JGT: Here is the proposed algorithm for ECMAScript in this PR: First, any ID that is zone in IANA should be a primary identifier in ECMAScript, other than the historical exceptions for UTC that will continue.

JGT: Next is that it indicates `zone.tab` which has one line for every zone in IANA, plus one line for every ISO 3166-1 Alpha-2 country code even if IANA doesn't have a Zone (only a Link) for that country.

JGT: And so any ID that is there, which matches this idea of one ID per country should be primary in ECMAScript. If an ID is a link, we look in `zone.tab`. If there’s more than one zone in `zone.tab`, then we look in IANA's backzone file which gives us a historical mapping for that Link inside the same country code. This spec algorithm matches how CLDR does things, or at least it will match after the next CLDR release to include a CLDR PR that was just approved.

JGT: And what that means is, ECMAScript can call ICU or use CLDR data directly and they will comply with the ECMAScript spec. This is matching the web reality of how things work, but defining in a more precise way. I am not going to go through this long, complicated spec text, but this text matches what CLDR is doing.

JGT: The impact for existing engines for V8 and JSC: they use APIs that are provided by ICU. A separate agreement that when Temporal reaches Stage 4, these engines will move to a different API that will solve the problem that currently exists today that we have talked about previously in the committee, where outdated ID like Asia/Calcutta are used. We want to wait until Temporal is out there because of some web compatibility concerns. In the SpiderMonkey case, they would be able to switch today to using this new API from ICU. And it should reduce the complexity of their build process because today they get the custom IANA files, they don’t need to get to anymore.

JGT: Two other changes sitting in the PR. One is to deal with the problem that happens every few years when they rename a city. The proposal is to have a two-year waiting period. So we could introduce the new ID as a non-primary ID. Because browsers are updated frequently, what's happened in the past is that browser users get new IDs before everything else in their environment. So they might send the new IDs to a network device or some other software that hasn’t seen this before. The idea here is we wait two years, after a rename happens in order to swap the primary and non-primary. And really what that means is, this is a recommendation, it’s not a requirement in the spec. We will ask CLDR to implement the waiting period, as opposed to asking engines to special case if this happens. And remember that this is rare; every few years is typical.

JGT: And the final change in the PR is that there’s currently a recommendation in the spec that is saying, while an agent is currently running, don’t change the TimeZone database underneath in an observable way. Nobody does this today. But we just want to make sure they don’t do it because it’s disruptive for developers.

JGT: This is the spec text along with the recommendation. This is the spec text for the recommendation to require. And that’s it. Any questions or concerns?

DLM: Thank you for this change, SpiderMonkey supports it.

MF: Okay. So I am not qualified to really question CLDR, but I am going to anyway. Regarding the merging of time zones, it seemed that not merging across country borders was an arbitrary decision here, as in some places there are finer-grained localities that have authority over time zones and they are just as likely to change from each other. So what is the motivation for -- what is the reasoning behind choosing country?

JGT: It’s CLDR’s decision to do this a long time ago. I can’t necessarily speak for them, but it tends to cause less disruption when things happen within a country. A lot of software tends to be country-specific. And people inside the country are more accepting of things happening, you know, because it’s their own countrymen doing it rather than one country over which they have been warring with for hundreds of years. That’s my best guess of why CLDR originally did this.

JGT: Because much of web has been working this way for to long, I am not particularly – and because of the IANA TimeZone base has done this, if we were to make a decision on the ECMAScript decide to deviate from CLDR and from IANA, I think it’s more disruptive than it'd help.

MF: I agree with that. I am supportive. But it does seem like we are only getting slightly better. And it’s not really a great solution. But it is better.

JGT: Yeah. I agree.

RGN: Clarification: it wasn’t just country boundaries we were looking at. But specifically, the ISO 3166-1 codes and there are many significant regions that have their own code, even though they are part of the same country. So it’s less arbitrary than it might seem.

JGT: That’s actually a really good point. A good example is Norway, which owns some islands up in the North Sea that I cannot pronounce very well. But that is because it’s its own country code, it gets us a separate TimeZone and much of the – I would guess – intra-country ownership arguments are going to be covered by that exception. So it does tend to reduce the scope of the kinds of concerns you were thinking of.

RPR: Okay. I’ve got a couple minutes for SFC.

SFC: Yeah. Thanks for bringing this forward, JGT and continue to champion this change. We made the conclusion that the way the pull request as JGT describes in the slides, alignment with CLDR and Unicode, is really useful and important for us. This is how ICU and ICU4X implement this. And I think JGT made a good case, this makes sense for users. Establishing that alignment is very beneficial.

SFC: And I know that RGN has been working with this and other editors, have been working closely with JGT on tweaking the spec text here. It looks like that has happened. I am in support of the change and thank you all for working on this.

RPR: You also have a + 1 from Philip Chimento.

PFC: This is a topic we have been discussing on and off the Temporal champions meetings for a couple of years and I would like to thank Justin for getting everybody in the group to understand how important this is. And I would like to give explicit support for this change.

SFC: One other thing I forget to mention also is that there is – I think Justin mentioned this a little bit, but there’s CLDR-17111 which is about the legacy identifiers and that has also been resolved. At least the committee has discussed and agreed with that change as well. So I expect that that will also be reflected in CLDR, which means more alignment.

JGT: Yes. there’s IANA and CLDR, and this PR we're discussing today is one of the very last pieces required to bring all three into alignment.

RPR: So we have heard multiple votes – or statements of support. Are there any objections? There are no objections. So I think we can consider this approved.

JGT: Thank you very much, everybody.

### Speaker's Summary of Key Points

- Time zone identifiers in ECMAScript come from the IANA Time Zone Database (https://www.iana.org/time-zones) or "TZDB". Unicode CLDR (https://cldr.unicode.org/) provides TZDB identifiers, exposed either as data or via the Unicode ICU API.
- There are ~600 TZDB identifiers: most are "Zones" (called primary identifiers in ES) while some are "Links" (non-primary IDs) that resolve to a Zone. Today's discussion is about which IDs should be non-primary and what primary IDs they should resolve to.
- CLDR deviates from TZDB's ID resolution in one important way: Links are ignored if they would resolve to a Zone in a different ISO-3166 Alpha-2 country code. We believe that CLDR's behaviour is better for ECMAScript, because it prevents future political changes in one country from breaking another country's apps. Also, it's what V8 and JSC have been using for years, so changing it would be less web-compatible than reifying it.
- This PR also adds a recommendation to wait 2 years after a city is renamed (like 2022's Kiev=>Kyiv) before making it primary, so that evergreen browsers won't send unrecognized new IDs to other systems.
- This PR also changes a recommendation to a requirement to avoid observable updates to time zone data during the lifetime of an agent.
- In parallel with ECMAScript spec changes, we're also driving other changes into IANA's data and into CLDR, which further reduces divergence.
- MF was concerned about CLDR's decision (which is web reality for many engines) to allow IANA's merges inside a country but disallow changes between countries. These concerns are mitigated by a few factors. First, the most problematic cases (like offshore colony-like territories) tend to have their own ISO-3166 Alpha-2 country codes. Also, merges only apply to timestamps before 1970, which are rarely needed in computing at <= 60-minute precision. Finally, intra-country merges often happen because pre-1970 sources turned out to be incorrect, so the merge is correct.

### Conclusion

ECMA-402 PR #787 is approved to align ECMA-402 with the "web reality" of CLDR data and ICU behaviour used by many large ECMAScript engines. This will reduce current and future divergence between engines.

## Status of TCQ reloaded

Presenter: Christian Ulbrich (CHU)

- [slides](https://cloud.zalari.de/s/ML74dxx9PRKmmao)

CHU: I am going to give a brief update. That was the title, last time. TCQ reloaded. This one is TCQ reloaded reloaded. So just to get back to what we did last time. This is a nice warm place where people gather. Some call it TCQ. We know TCQ. It’s – I am comparing it to a bonfire because it is a good comparison, warm and cozy and we love it but somehow we are still desperate, if it ever burns out. So what’s the structure of TCQ, well it is a great big ball of mud.

CHU: And so what are problems with TCQ, the main one right now - is reproducibility. Observability. It is running on who-knows-what infrastructure. Some Azure thing. But we cannot easily restart it or deploy anywhere else. It’s hard to maintain. A lot of PRs have been piling up and we are not the ones, deciding when and what to merge, it is Brian and he does not. Of course, that’s not great for extensibility either.

CHU: So we set out to do TCQ reloaded. And yeah. So this is what TCQ reloaded now looks like. It’s not a big ball of mud anymore. But half of a big ball of mud. So we took some part out of it, and then we painted some docker around it.

CHU: Having a look back at the problems that we had, with the old TCQ, did we solve them? Well, I am afraid we did not really solve them right now. Of course, we can work with that. We showed last time, we can run it locally. But it’s still heavily bound to Azure. Reproducibility, observability and maintainability haven’t been really solved. And extensibility, either. Yeah!

CHU: So the thing is; if software development weren’t so hard. So we kind of got lost a little bit. We started to do this and that and we took the wrong road of improving the architecture and stuff like that. Right now, we know we don’t have to innovate, but it’s clear to take a step back a little bit. And focus on iterating TCQ. This means, now it’s clear that the most important goal is to make it reproducible. We need to dockerize the stack. That allows us to do at least semi automated deployment. And then we should also decouple it from Azure-specific technology: right now, it’s clear that this is the road ahead. If we do that, we can implement typical software processes as well.

CHU: The question is, when and who? Well, one, hopefully soonish. MF was telling me at dinner, I had 13 hours left.

CHU: So yeah. So we already have some pieces here. So we already dockerized parts of it. And we want to do this, achieve it quite soon. Who? We will be doing it. But it’s [open](https://github.com/zalari/tcq). So you – anyone – I think once we have – we have reached the point where we can deploy it locally, we can start improving it iteratively. The goal is, that we have it ready for the next plenary and prove that it runs reliably reproducibly and then we can start innovating again.

USA: Yeah. Thank you for all the work you’re putting in. I just wanted to point out, yet again, that, not that it hasn’t been already, retention is something that TCQ is really, really bad at. If any topic is skipped by accident, it’s gone forever.

USA: And like as much redundancy as you can put into that would, you know, never hurts. So even if, like, you know, we could, say, download a history of all the items on the list, all the features will go a long way. And it would probably be some of the most useful additions or changes.

CHU: Yeah. Sure. As I have said, the most important thing right now is to achieve the point where we have something that is stable. That we can finally implement new features in the future. Of course, implementing retention mechanisms, this shouldn’t be so difficult.

CHU: Okay, you are welcome to add any potential feature wishes to the [repo](https://github.com/zalari/tcq).

### Summary / Conclusion

If only software development weren’t so hard. TCQ reloaded got off the track a little bit by focussing on architecture instead of getting it to run. We have figured out now that reproducibility is now the main goal, we need to achieve, before we are iterating / improving TCQ altogether. The actual goal is, that we have abstracted TCQ reloaded as much, that we can easily deploy it in arbitrary environments - both locally as well as online. We use this to deploy it ourselves for the next plenary and can thus validate that it successfully works. Building on top of that, we can then iterate on it.

## eval() changes for trusted types update

Presenter: Nicolo Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-dynamic-code-brand-checks/pull/17#issuecomment-2142865060)
- no slides presented

NRO: If you remember last plenary, we had changes to the `eval` and `new Function` host hook to support the Trusted Types spec and one of the changes that was presented last time was to pass the constructor to pass the fully constructed string to the host so the host can use it for like for the full behavior so use – developers can track where the different things are coming from and what’s been evaluating. We reached consensus on not passing the full functions string to the host. And instead, we will just pass the various pieces, so the parameters in the body, and expect the host to just re-concatenate the pieces together by themselves, duplicating the work that 262 does.

NRO: And the reason for that we thought that that string was currently spec internal. It was not exposed in any way. However, it turns out that it is exposed through the toString method on the function return, but new function constructor.

NRO: So given that removing that, we would like to add it back again. Specifically, the change is that now we build the host string and then we pass the parameter to the host that previously was not passed. There is an observable difference. That’s why I am here. The string includes the full function string. For example, for an async function, the string is `async function (`, parameters, and body. While before we were passing just the parameters and the body. So it was – it was not possible for the host to actually build the representation of the function.

Yeah. So the repository I am presenting is updated. Are there any concerns with this?

RPR: There are no concerns in the queue. Are there any voices of support?

MF: I support this change.

RPR: We have a positive from MF, DLM, and from ACE.

NRO: Okay. Thank you.

### Summary

In the 2024-04 TC39 meeting we decided to _not_ expose the built string to the host, under the assumption that that string was spec-internal only. Our recommendation was that instead the host should re-concatenate the string pieces to build its own representation of the string.

It turns out however that the concatenated string was already exposed to users, through `new Function(...).toString()` which (differently from most `Function.prototype.toString` behaviors, is _not_ implementation-defined). This PR thus re-exposed the concatenated string to the host to be used as-is.

### Conclusion

The PR https://github.com/tc39/proposal-dynamic-code-brand-checks/pull/17 has reached consensus.

## Avoid second pass/buffer in base64 setFromBase64/setFromHex methods

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-arraybuffer-base64)
- [PR](https://github.com/tc39/proposal-arraybuffer-base64/pull/58)
- no slides presented

KG: So this is the Base64 proposal at Stage 3. And that means, it’s currently undergoing implementations and we expect feedback from changes to the proposal to come from users and implementations.

KG: [first issue](https://github.com/tc39/proposal-arraybuffer-base64/issues/57). This is one of the two items for this meeting to address pieces of feedback that the proposal has gotten since getting to Stage 3. This one comes from PHE at Moddable. He points out that the method to write into an existing Uint8Array has currently specified work the way almost all the functions in JavaScript work, where they will do all the validation up front before making any observable changes to the thing that they are supposed to write to.

KG: This is usually a reasonable thing to do. But in the specific case of these methods, this means that it’s impossible to implement these methods without either requiring a full pass over the entire input to validate it, or keeping a second buffer and then doing the decode and copying in. Specifically, this is in the case where the input is invalid, but is only invalid after a thousand characters in or whatever. As currently specified, that wouldn’t write any of the decode from the first 1000 characters to the buffer.

KG: So I think that Peter’s point is good. It makes sense to not require the second pass or the second buffer for this case, even though it’s inconsistent with the usual stuff in the spec. You would only ever notice this is the case that your input is invalid, because of course if the input is completely valid to begin with, then it is going to end up written to the buffers. The difference doesn’t show up in this case. So it seems silly to slow down the common case of correct data just for the benefit of not having some garbage data written in the case of invalid data.

KG: So I would like to propose to make this suggested change [PR](https://github.com/tc39/proposal-arraybuffer-base64/pull/58). I have spec text. It’s relatively straightforward. It’s just you keep track of where the error is, and also write the data that you have gotten prior to the error. It does have the slight consequence that in the case of an error, you don’t actually know where the error occurred. So you just have some un-knowable amount of garbage data in the buffer. That’s basically fine. The assumption is that if you have – if you hit this error, is that you are going to discard the buffer. That is not any other reasonable behavior. If people are really worried about that, we could work something out by putting a property on the SyntaxError that gives the offset of the error or something. But I don’t really think we should bother. Throwing an error and saying that the expected use in the case of an error is that you discard the buffer is completely reasonable.

KG: So that’s my proposed change. Just in these two methods, setFromBase64 and hex, in the case you hit an error, you still write all the data that you have decoded prior to that error, thereby avoiding a second buffer or second pass over the input.

RPR: We have a note that SYG passed ahead of time "V8 supports the proposed change of the performance benefits of streaming and bringing your own buffer have diminished if there needs to be a validation pass first". That is a voice of support.

KG: Okay. Having heard support and not having any opposition, I would like to ask for consensus for this change.

RPR: There is thumbs up from LCA in the room. So I think you have – yeah. You have consensus.

KG: Thanks very much. And thanks to Peter for pointing this out.

### Summary / Conclusion

The committee has reached consensus on the proposed change which would make it so that you still write decoded data up to the occurrence of the first error, in the set fromBase64 and set of hex methods that are included in this proposal.

## Option to omit padding in toBase64

Presenter: Kevin Gibbons (KG)

- [Issue](https://github.com/tc39/proposal-arraybuffer-base64/issues/59)
- [PR](https://github.com/tc39/proposal-arraybuffer-base64/pull/60)

KG: This is the second feedback for this proposal. Previous one came from implementers, this one comes from users. Although, I guess also implementers of other specifications.

KG: As a reminder, Base64 as it exists in the wild has a couple of relevant variations. The biggest of which are whether to use the standard Base64 alphabet or the so-called Base64URL alphabet, which replaces a `+` sign with a `-` and the forward slash with an underscore. A number of systems require one or the other. We support both in this proposal. And there’s an alphabet option that allows you to pick between the two.

KG: The other major variation among Base64 implementations is whether to include padding, the final one or two equals characters; it makes the total length of the output as a multiple of 4. There are cases where you need the padding. Although it’s usually redundant. But many decoders expect that padding to be there, most notably Python. Some expect the padding not to be there. In particular, a number of web specifications use the Base64URL alphabet and require absence of padding in those cases.

KG: It is not terribly difficult to strip off the padding. You can of course simply check to see if the last one or two characters are the = sign and if so trim the string. But, these are other web specs; it’s nice to be easily interoperable with those cases. There was formerly an option to specify whether padding was included, but that option was removed at some point for the sake of simplifying the API. But given the feedback from users in real life, I think it makes sense to re-introduce it.

KG: So this proposed change is to add an "omitPadding" dictionary argument to the existing options bag argument to the Base64 encoding API that just says whether or not to include =. The default is false. Which means the padding is included. I realize the naming is kind of awkward, but W3C guidelines for web APIs are clear that the default for any boolean option must be false and we want the default behavior to include padding, to match most Base64 encoders in existence. Including notably, A-to-B, the web standard Base64 encoder.

KG: So there was some discussion of making the option depend on the alphabet. I am not really in favor of that. As a user, it’s weird that changing the alphabet would also change the padding. And if the option is present, it’s easy to specify if needed.

KG: There’s really no consensus on whether or not the `=` is required to be present or absent when using Base64 for URL. As previously mentioned in a number of web specs to be absent. Python Base64 decoder requires the `=` to be present.

KG: So given that, I think the simplest thing is to have the default be to present regardless of the alphabet and let the user disable it if necessary. Like I said, this option isn’t something that is necessary at all. You can do it with slicing but you don’t know how many `=` to use. Anything in the queue?

RGN: The PR itself looks good. I agree with the decision to make the omitPadding default unconditional. I’m in favor of including this. Thank you.

KG: Great.

RPR: Any other comments?

KG: Okay. Hearing nothing else, I would like to ask for consensus for the proposed change.

RPR: No one is volunteering anything. From what I can see, you have at least got one message of support from RGN.

KG: Good enough for me. I will take that as consensus.

### Summary

The PR adds an options bag argument, "omitPadding," which defaults to false, which is to say defaults to including padding, which allows specifying omit padding true to not generate the = padding, when doing the Base64 encoding. This is orthogonal to the alphabet argument. So its value doesn’t depend on the alphabet. The user can choose each one explicitly.

### Conclusion

This PR https://github.com/tc39/proposal-arraybuffer-base64/pull/58 reached consensus.

## Iterator sequencing

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-sequencing)
- [slides](https://docs.google.com/presentation/d/1gOs4UDAcaIF6Dc9z1qXus-ljizrRTSty5O-GbcM9NTs/)

MF: So reminder from the previous times this was discussed: I had outlined these five goals for the proposal. We want to be able to compose 2 iterators, the most important goal. We also want to conveniently compose 0 or more iterators. We want to compose an infinite sequence of iterators. Or interleave non-iterators among the iterators. They can be composed as if they are an iterator of those things. And we want it to be discoverable or familiar to people.

MF: We had considered a bunch of different possible solutions here. Variadic iterator from, remember that we currently have iterator from iterator helpers, but it only takes a single argument. Iterator prototype flat. Iterator prototype append, that's given zero or more iterators to append onto this value. an `iterator.concat` that takes an iterable, or iterator, and an `iterator.concat` that takes zero or more iterators. So the solution that I had presented at the last meeting, I don't know if I was attempting to go for stage two, but I think I was just presenting an update of my current thinking, was a variadic `iterator.from` and the `iterator.prototype.flat`. And the idea was that the goals that I had listed were actually separable. We're solving two problems, and that requires two solutions. So the `iterator.from` solution is when you have some small number of iterators or iterables, and `iterator.prototype.flat` is when you have an iterator, possibly infinite, of iterator or iterables. So feedback I had gotten was that, I don't know if I really want to read each of these off. Yeah, for time reasons, I'm just going to skip that.

MF: You may remember the feedback from last time, but what that resulted in is I've changed the goals now. I have removed the goal for composing an infinite sequence of iterators, mostly because it was harder to justify that. It's not as easily justified as the other goals.

MF: And I have added a new goal at the request due to KG's feedback last time, not having an observable difference between the 1-iterator case and 0-or-more iterators case. You shouldn’t be able to tell how you composed it to get to that point.

MF: Given the new goals, I have a new solution. `Iterator.concat` passed 0 or no iterators to sequence them.

MF: So we meet all five of those goals, the new goals, but it has one known downside, which is JHD has previously expressed concern about the name concat for this, something about it being related to `Array.prototype.concat`, and then developers making assumptions about the oddness of `Array.prototype.concat`, carrying over to `Iterator.concat`, which it wouldn't. So we obviously do not want the oddness of array prototype concat, which means that we may have to consider alternative names for such an operation.

MF: I still think the solution is good. So I've listed out some alternative names. I've listed them in my preference order. I do not want to bike shed the name today. I'm showing these here only as evidence that I think there are a sufficient number of names that we could possibly choose from, and that eventually I do think we'd be able to choose an acceptable name that would make everyone happy.

MF: So given that, I have written out the full spec text. This is extracted from my previous solution, which was from the variadic `iterator.from`. This is like the non-one case.

MF: So I have full spec text available. And I have polyfill in the repo and tests for the happy path.

MF: So I am only looking for Stage 2 here. I think I have met the requirements.

DM: We support this and have no opinion on the name.

RPR: We have thumbs up from LCA in the room. Thumbs up from DE in the room.

KG: Is JHD here?

RPR: JHD will not be here until the final session of the day.

KG: Given that he’s the only person who expressed a problem with this name, we might – like, I am happy to go to Stage 2. We might want to revisit when he’s here, since he has expressed that he’s not in favor of this choice of name and probably need to give him a chance to object and override that objection, if we decide to override it.

MF: That's actually the reason why I was being very clear that I'm not going for stage 2.7 here, I'm going for stage 2, which shouldn't require us to have settled on a name, just to have evidence that it is very likely we will be able to choose a name.

KG: okay. I am happy with that.

RPR: He didn’t put this in his agenda constraint. So he probably doesn’t have any concerns.

RPR: Okay. We have a + 1 from RGN. And then we have a question from Justin.

JGT: Yeah. I am wondering because there is a – there is already a concat and already a join, in ECMAScript, just out of curiosity, is this, from your perspective, is this operation more similar to concat or is it more similar to join?

MF: You’re asking about an array prototype?

JGT: Yeah. That’s correct.

MF: given the option between the two, it is more similar to concat. As I noted before, concat has some strange behavior from a very long time ago that we are not intended to copy or try to emulate.

MF: So JHD’s objection from previous presentations is that developers may expect that odd behavior, if we chose the name concat. Otherwise, I think concat is a very appropriate name.

DE: For the particular issue of `Array.prototype.concat` having a different behavior from `Iterator.concat`, I’d like us to consider `Symbol.isConcatSpreadable` to be regrettable. With `Symbol.species`, we decided that we don’t like the feature, but we did an ES6. We won’t be held to follow the `Symbol.species` that in the future. We could do that with concat as well. The time between 2 and 2.7 will give us time to feel that way as a committee.

RPR: Okay. So I think it’s been – sorry. KM may have further discussion on the concat.

KM: Sure. I mean, I am happy to clarify that, yeah. Catting symbol is concat spreadable was 6 months work. Nobody use it is. I have never seen a single site use it. Yeah. Definitely. Please do not duplicate that.

RPR: Please carry on, MF with – you want to ask for consensus?

MF: Yes, I would like to ask for Stage 2. And assuming we do get it, I would also like to ask if there are any opinions on pursuing the infinite case that was dropped from this proposal now to advance, if anybody is interested in either taking that or wants to discuss that anymore.

MF: Let’s first see if we can get Stage 2 and then I will be interested in that.

RPR: Okay. I think we have heard support for Stage 2. Are there any objections to Stage 2? Okay. All right. Congratulations, you have Stage 2. And you want to continue?

MF: Yes. We need to assign reviewers and I would like to see if anybody has interest in pursuing the infinite sequencing portion of this or thinks it should be pursued or maybe has the opposite opinion and thinks it should not be pursued. Without any feedback, I would probably not pursue it at this point.

RPR: So NRO has volunteered to review and LCA has a question.

LCA: What are the use cases for concat of an infinite sequence of iterators?

MF: Yeah, so I have written generators that generate infinite sequences of iterators, or of iterable things. I wanted to then iterate all the contents of those things. But those haven't been in very realistic situations. They've been mostly like, oh, this is a handy helper for a test or something. I imagine that if it's a handy helper for a test, it's probably a handy helper for something else that somebody is doing. But it's certainly not as common as just saying, I have two iterators that I'm holding right now that I just want to iterate one after the other. It certainly dwarfs the other in commonality. So that's why I didn't want to have to hold up that part by trying to fully justify the infinite one. I think there's certainly some value in it, but it's going to be more difficult to prove that.

KG: Then, yes, if you have a few extra minutes, I did want to raise the question of how to handle closing iterators to the committee’s attention.

KG: Concretely, the protocol is something for closing iterators. The practice is any iterator that you open you should close. And any iterator that you in some sense get to ownership of, you’re expected to close when you finish it much – with it. Of course, if you don’t exhaust it. If you exhaust it, it has closed itself. The last bullet point here. For concat, for this static method, the – behavior is probably going to be that if you give it an iterable, it opens the iterable. And then closes it. If it gets there. But if you close the iterator, before that argument is reached, sorry, if you close the result of `iterator.concat` before the third argument is reached, there’s the question of what should you do about closing that argument? I think the best behavior is to try to figure out if it’s an iterator by looking up the next property. And if there is a callable next, then assume it’s an iterator and therefore you’re responsible for closing it, even though you didn’t open it. That’s a little bit weird. I think it’s important to close iterators that like you take ownership of the iterator. So this is of course something that will need to be worked out before Stage 2.7. I mostly want to raise the committee’s question, and to remind you it comes up when working with iterators.

MF: Yeah. So that was part of the difficulty of doing the infinite case that I didn’t really want to have to deal with as part of this proposal. I think I will continue without trying to address that infinite case, even in a follow-up proposal. Thank you.

### Summary

- The previous proposal was attempting to solve multiple cases, including a small finite case, and an unbounded/infinite case. Trying to solve the infinite case was both difficult and harder to justify. The infinite case is now dropped from the proposal, to focus on the small finite case. We are solving it with a static `Iterator.concat` that takes 0 or more iterators.

### Conclusion

- Iterator Sequencing has Stage 2
- NRO, JMN, and RGN to be Stage 2.7 reviewers
- The proposal no longer attempts to address the infinite case, and there is no desire at the moment to pursue that in a separate proposal
- Some consider `Symbol.isConcatSpreadable` to be a regrettable error that we aren’t carrying forward, like `Symbol.species`
- During Stage 2, we will choose a final name, which may still be `Iterator.concat`

## Async Iterators Update

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-async-iterator-helpers)
- [slides](https://docs.google.com/presentation/d/1cjCkBRWwNFu01HUEcWQ6AsSgVGOxTj4cVvz_9XCyAkw/)

KG: Okay. So hello. I have a 45-minute timebox for this item. And while I do have a fairly long presentation, touching on a number of different topics to go through, it’s not a 45-minute presentation. The purpose is to invite discussion. To that end, if – while I am presenting on something you have a thought or even just a – like, you want to think more about it, or talk more about it, for anything that I have brought up, please jump in and bring that up right away. There’s no need to wait until the end of the presentation. Because there’s a bunch of stuff in here. Like I said, I will be touching on quite a few different topics regarding the design of async iterators. With that said, let’s go through it. There’s been some discussion happening in the issues of the repository, if you are interested in following along through there.

KG: A reminder, the fundamental thing happening here, and I have had this same slide up in 5 presentations now, is that AsyncIterators, which have existed in the language for a long time, but haven’t had any particular utilities associated with them, turn out to be designed in such a way that it is possible that we can use them as a concurrency mechanism. The only AsyncIterators in the language right now are from async generators. AsyncGenerators are not a way of writing concurrency because they are inherently queuing. This falls out of the fact that they are defined using syntax. In this language, at least, syntax is a single flow, you are not in two places at once with syntax. AsyncIterators don’t have to have that restriction. And in particular, AsyncIterator helpers which are the counterpart to Iterator helpers could easily lift that restriction.

KG: For example, if your mapping function which you pass to `%AsyncIterator%.prototype.map` returns Promises, you could easily have something that pulls to – that allows you to pull two Promises from the result of this map operation. And wait for both at the same time.

KG: Whether or not this would actually do something concurrently, depends on the design of AsyncIterators. The reason that AsyncIterators have not advanced is because we have been working on designing to allow this kind of concurrency.

KG: This is really nice in a lot of ways. It gives you concurrency between different calls of the call back function, as well as between the call back and the underlying iterator. It preserves the important property that the concurrency is driven by the consumer. You don’t have issues with back pressure. It is able to consume values.

KG: And to make this easier to use, the intention is to include an extra method to buffer values. So this is not something that will do arbitrary buffering. It won’t continue pulling from the underlying thing. But have a specified number of slots, and when you start iterating this, it will pull that many times concurrently from the underlying `this` and store from the buffer when you pull from the result of this helper.

KG: And I learned after I suggested this, that in fact Rust has basically this same thing. This [on screen] is an example of some Rust code. It is doing something similar.

KG: It is doing this buffered operation on the first map, allowing the skip page operation concurrency. Now, Rust streams in futures are different from JavaScript promises, in particular they have this executor module where you have to be driving the futures, rather than the promises doing things on their own.

KG: But while that will have some relevant differences for later in the presentation, for the basic buffer helper, it’s pretty much identical. So that makes me feel better about it

KG: Okay, so other than that, what are we leaving out? Well, lots of stuff. This is the current plan; the proposal is only at stage two, this is all up to be changed if you think it should change, but this is my current plan. We've been going back and forth on a bunch of this, and I've sort of settled on this particular set of things to exclude and include for this version of the proposal since the last meeting, or since I last presented this anyway. So what are we leaving out? The most important thing by far is that we are leaving out unordered helpers. So these helpers are inherently order-preserving, which gives up a lot of concurrency. There are a lot of problems where you don't care about the order that the tasks, the final values come in. You have a bunch of work to do and you just care that the work gets done. Being order-preserving gives up a lot of the concurrency, and in fact I have this lovely animation from a Visualizing Rust Streams project that is showing the Buffered helper. The idea here is that these five boxes represent the buffer where the map operation is happening concurrency five times. And the items are hanging out in the buffer. I want to point out, the middle box is filled up, but it can’t be consumed until the ones ahead of it in the queue also complete so you can get – you can have the order preserving property. We are giving up a lot of concurrency.

KG: Rust has another helper, called buffer_unordered. I was originally intending to include in the proposal but am no longer intending to. It looks like this. The values from the buffer are able to feed into the sink or be pulled into the sink as soon as they are ready instead of waiting for earlier values. This recovers much of the possible concurrency. But not all. There’s a number of problems. And that’s why I have decided it doesn’t make sense to include in this version of the proposal. I think there’s a lot more room to explore sort of primitives or helpers for doing unordered concurrency. Since buffer unordered is not sufficient to get you full concurrency for all problems, I don’t want to include it until and unless we decide that it makes sense to include despite that limitation.

KG: Right now my plan is to include only the simple-ordered buffer that gives you a good bit of concurrency with the constraint of result being produced in order. And there’s some interesting designs for unordered helpers, which we will touch on briefly later. MF especially is interested in exploring this space. So for anyone in the room, if this touches your fancy, go talk to Michael about it. My intention is to not include any unordered helpers in this version of the proposal.

KG: On a related note, it’s not going to include any way of doing concurrency with the _consuming_ helpers. For example, `find`. If the search function is asynchronous, this proposal won’t have a way of doing that search concurrency. And it is always possible to do this by an awkward sequence of map, buffer, filter, take(1). But it’s often quite awkward. There’s not one obvious best of doing it. The simplest thing would be to have a concurrency parameter that specifies a degree of concurrency for these helpers. And I am not opposed to that, but I think in the course of addressing the previous thing that might affect the design, so I don’t want to include that right now. I do think we have usually found that adding a second parameter like this is web compatible. But it’s not a guarantee. It’s possible we might find we like that design, but we can't do it for web compatibility reasons. It’s likely we will be able to but I wanted to mention that possibility.

KG: So I see LCA asking about why buffer unordered is not fully concurrent. Let’s see if I can get there. I will skip ahead. Okay.

KG: The last couple of minutes I was talking about leaving out concurrency for the helpers. Why isn’t this good enough? This [on screen] is sort of a representative example. So just to talk through this code a little bit, imagine you have an AsyncIterator that produces two values. The first one it produces slowly. The second one immediately. You are filtering over this. So the basic filter predicate – or helper necessarily has to resolve its promises in order, at least prior to the end of the underlying iterator. It doesn’t know if the result of the second call to the predicate is going to end up going into the first or second promise. You can’t know this without knowing the result of the first call. So even if you do a buffer unordered on the result, it doesn’t help you because the result of the filter is constrained to settle its promises in order, to ensure it doesn’t have the problem of the second thing resolving with a value and then discovering that the first thing that was rendered is, in fact, not present. Like, if the predicate returned false for the first value, if the helper has already settled the second promise, it’s stuck. There's no reasonable thing to resolve the first promise with at that point. As far as I can tell, in Rust this is just the case. Like, buffer unordered, if you do a buffered unordered over a filter, you don’t get concurrency or the concurrency that you would like. And there’s nothing you can do about this. You really need the filter helper itself to be aware that it is free to reorder the result of the stream in order to get concurrency in this case. I’m sorry. It’s 3 a.m. I don’t know how coherent I am.

LCA: I think that makes sense. But isn't this solved by moving the buffer unordered before the filter?

KG: Not if the predicate is itself asynchronous.

LCA: I see. Okay, thanks.

KG: Okay. So like I said, not planning on including any unordered helpers right now or any way of doing concurrency for foreach and find and sum and reduce and so on. It would be really nice to have these be concurrent, but there’s not really an obvious way of doing it. I am planning on leaving that out, at least pending resolution to how we are dealing with unordered map and so on.

KG: Another thing I will leave out but intend to follow up with is some way of racing multiple promises to get an AsyncIterator that yields the promises as they resolve. So we have all used `promise.race` for this. It is – if you have a bunch of work that you want to do, it is a pretty common pattern to start all of that work and promise race the results of that work. And then whenever you are done, `await Promise.race` of the remaining values. And a helper that takes such a collection of promises and gives you an AsyncIterator of the promises in the order in which they resolve would allow you to do that in a really concise manner, as in `for-await (item of AsyncIterator.race(items))` or whatever.

KG: It’s just another way of turning an iterable of promises into an AsyncIterator. It’s more like a promise helper. If we had a buffer unordered, it’s somewhat redundant. If you do a buffered unordered and pass it, as its bufferSize parameter, the size of the underlying collection, then that’s what I have just described. So I am not planning on including this right now. I just wanted to raise it as a probable follow-up.

KG: A similar thing is if you have multiple async iterators, then you might reasonably want to merge them by raising promises. This is really useful. It's potentially even more useful in combination with possible other things. This pattern that was raised in one of the issues on the GitHub repository actually ends up being really nice. Let's see, I think I have a slide about this coming. Basically, you can imagine something that takes an async iterator and divides it into multiple async iterators, which all pull from the same source. And if we had something that would combine them at the end, this lets you get concurrency in a completely different way than the async iterator helper concurrency. This allows you to create a work queue and then define the work for each queue separately, and then collect the values at the end by merging the resulting async iterators. Something that's really nice about this example is that diff actually doesn't rely on map or filter being concurrent, because the concurrency is between multiple async iterators rather than within one async iterator. This is a really cute pattern. I don't know that it's necessarily the direction we want to go, I just want to raise it as a possible design for getting unordered concurrency in a follow-up.

JWS: Just a question. If the example on the repo is correct?

KG: Which example?

JWS: On the AsyncIterator repo. The README. I was just checking if `X =`

KG: Yes. This should have an `X =`

JWS: That was all.

KG: Yes. Good catch. Okay. Fixed.

KG: Yeah, so I think splitting, this sort of split helper won't be in the end the minimum viable proposal. It may or may not make sense to include in a follow-up, but I'm mostly raising it as an example of where we might want to go for getting concurrency, a different form of concurrency in the future. Crucially, I don't think it conflicts with anything that's in this proposal.

KG: Another thing that is left out is any mechanism for limiting concurrency. There’s two senses of what you might want to limit concurrency here. The concurrency of an AsyncIterator because this is allowing you to pull multiple times. I don’t think it makes sense for buffer to be this mechanism. It could, in principle, be, but I think it’s weird that adding a buffer would also restrict your concurrency. The buffer should be a buffer. But it is something that you might want to at least in some cases, if you are creating an AsyncIterator to be consumed by others, or if you are consuming an AsyncIterator that someone else has given you as part of the contract, it could be only pulled from a certain number of times. A belated things that I am needing many times is limiting concurrency – if you are talking to some API, you probably want to limit how many times you are talking to the API at once. Limit it for you. And I do think we ought to do that. It would be useful for proposals, but useful for many other things and I am interested in pursuing that work separately.

KG: So basically, we have the absolute minimum possible set of things. We have map, filter, flatMap and to async. Each will have their affordance for concurrency. They allow you to pull from them multiple times and for this to kick off additional work in at least some cases. This will allow you to kick off additional work. If you pull from any of them concurrently. And there will be a buffered helper for doing calls to those things concurrency. It’s not the only way of doing those calls. It’s a convenient mechanism. You can of course call .next yourself, if you like. Otherwise, it will include all the helpers from the synced iterator helpers with no additional affordances for concurrency in any of the others because none of them make sense for. With one caveat, which is drop and we will get to that in a minute.

KG: So that’s not to say we have settled everything. But we have settled a lot of things. I want to talk about some of the discussions that we have had and directions we have settled or not.

KG: First, a fundamental design question. Backing up a step, concurrency is tricky. I think it’s very important to have as strong of guarantees about your results as you reasonably can. The original guarantee that I wanted to have is that you get the same result in the same order as if you called – made the calls sequentially, assuming your mappers are pure and that sort of thing. If you have side effects, you are not guaranteed they will get that in the same order, but the results are. I now think that’s too strong. In particular, I think that we should not have the guarantee in the case of an error. Without this caveat on the second paragraph, then map would be constrained to settle its promise the same filter is. And this is sort of my example for it.

KG: If you’re mapping with the natural numbers, 0, 1, 2, 3, et cetera, suppose that your mapper eventually throws for 0. And otherwise, it resolves immediately. If we had the original consistency property saying, you are guaranteed to get the same results in the same order, if you await the first result, then you would get an exception. And that would close the iterator. And then when you await the second result, you would get `{done: true}`. So if we want to have the same behavior for concurrent as for non-concurrent, that means we have to have that behavior for concurrent pulls. And there isn't a way to do that except for the second promise to wait for the first one to settle so that the second promise could know if there was an exception. And I think that is giving up too much. I think that in the case there’s no errors, It’s possible to settle earlier. It just means that you have this caveat that if one of the earlier results, if the call back throws or the underlying thing yields a rejected promise, then the stream of values that you see is different. In particular you see an exception and then something that is not `{done: true}`. And that is otherwise impossible to observe. I think that’s okay. The error case, I think, is not the one we should be concerned about. And I don’t want to give up this possible concurrency for the non-exception case just to get a more consistent view of the word in the case of errors. So my intention is to weaken the story of what guarantees you get. Like I mentioned, even with this property, it doesn’t get you filter settling out of order.

KG: I will skim through some of the next items. We mentioned closing iterators in an early presentation. If you call dot return, that closes the iterator and it will immediately call return on the underlying iterator. Being closed means if you call .next on the result, then you get done true immediately. But it doesn’t mean that any previous things are resolved. `.next`, `.return`, the first values, the ones that you got before calling dot return might still be outstanding and settled later. Any future calls will resolve with done true and forward the results. The last thing, later calls, could go either direction. But being closed in the sense is not just the behavior. If the callback throws, that’s the same as return call.

Yeah. And then this caveat, this question: what does dot drop do? Does this wait for the promises that it’s dropping or does it just like literally ignore them? My inclination is it should wait for each promise so any exceptions are raised. I think if you call dot drop you probably don’t want to go past exceptions. The most predictable thing is for drop to still behave sequentially in the sense of awaiting before pulling the next one, as the default behavior. I don't know whether to include the Boolean parameter.

KG: Another one is that when you can `buffered`, it starts filling up the buffer only when you pull from it. This is consistent with iterators being lazy in general. But it’s actually hard to do the behavior of starting to fill the buffering before pulling from it in user-land. So I think having an option to eagerly pull would make sense. Probably a second Boolean parameter. Either an options bag or just a Boolean that says, start immediately.

KG: And yeah. One last thing. For dot buffered, there’s discussion of if you pull from the buffer, more times than the buffer has slots, do the promises that the buffered helper has rendered count towards the buffer? If you say you have 5 items in the buffer, and then you take one out, but the thing you have taken out hasn’t settled yet, does that count against the yes? That promise count against the buffer? Specifically, this example on the slides here, if you’re doing a buffer over some map function, you really expect this to only have 5 outstanding calls to the call back at once. Not 6. But the very first time you enter this loop, the call to dot buffer, calls 5 item. The loop takes the first out of. The buffer will only have 4 things in it. This would be – lead to calling the call back 6 times concurrency. I think the answer has to be that the vendored promises count towards the buffer. For the common case, that’s the only reasonable behavior.

KG: So those are my questions. Just to summarize the direction of the proposal. The plan is to do the minimum viable set of helpers. Which is just map, filter, flatMap, with concurrency. And the buffer helper. May or may not add a boolean parameter for buffer or drop. There's a bunch of interesting directions to go in a follow-up. I think this design leads to room for any possible future design for helpers. For unordered helpers in concurrency for each and so for. I would like to work for advancing the proposal with this minimum set of things.

KG: Great. Thanks for your time.

ACE: (I'm curious if there have been discussions about 'global', as opposed to 'method local', concurrency.) I love this proposal. Concurrency is like what concurrency of promises comes up a lot in Bloomberg internal chat. People asking how I can do this?

KG: You dropped. Or I dropped? Ashley, if you are speaking, I can’t hear you.

ACE: This is great and it definitely works really nicely for small sections. The thing I have seen over the years though is sometimes concurrency doesn’t work well when only applied locally. Like, lots of little functions read an array of file paths and read the files concurrency. When that is happening with other parts of the application, it blows the operating system's limit for how many files should be open at a time. The concurrency on this, needs to be managed on a global scale. Are there methods here that would help doing that? Or the answer no. That’s not part of this. That will be something else. Just curious.

KG: Yeah. That’s a good point. The answer is no. There is not anything in the proposal that will help with that. The only thing that is that direction is the second part here, some way of limiting concurrency of call back, either a new concurrency primitive or something easier to use that is just wrapping up a call back or a collection of callbacks. And at most, calls to these functions will be outstanding at once. And future calls will get queued. But an alternative design is perhaps to have a task queue or something like that. For which, talk to Michael. But the short answer is no, nothing in this proposal.

ACE: That is my understanding. Just confirming. Thanks, KG.

USA: Next on the queue we have JWS.

JWS: (Is the plan to resolve unordered buffers before stage 3 or add it as a follow-up proposal?) Hi. Yeah. It was just to clarify, is your plan or goal to see this all the way through and then pick up unordered separately or are you hoping to try to resolve the unordered buffer as part of Stage 3? Before Stage 3?

KG: My plan is not to include the unordered, to include only the simple things and leave unordered to a follow-up. I am not going to promise to do that follow-up. There’s a lot of interesting space there. And if I have the time and resources, I would definitely like that. But I don’t want to give a false impression that it will be like an immediate subsequent thing. My plan is to include the only minimum viable things in the proposal and then hope that either I or someone else has time to explore the space of unordered helpers now later. But not in this proposal.

USA: Next we have MF

MF: (support for splitting off unordered async in the same way we split off async) I wanted to go on record that I am very supportive of splitting off the unordered problem space from this proposal. As Kevin said, I am a big proponent of exploring that space. And I think in contrast to how when we typically split off proposals, where we split off less justified or less important parts so we can make sure we get the important parts through and not hold it up, in this case, we split these out because it was so important to make sure we got them right. And I think we can do similarly here with unordered helpers and not try to push it through with everything else and split it off to make sure we spend the appropriate time and resources on this problem space.

KG: Agreed. And I do want to emphasize, there's a lot of possible design space here.

USA: You’re also in the queue on this.

MF: (buffered eager start parameter is important) You mentioned the buffered helper could take an eager parameter. I don’t think we should wait to follow up with something like that. That’s so fundamental and necessary that we should include it in this MVP. I would really like to see that parameter there.

KG: Sounds good to me.

USA: Next we have RGN

RGN: (this is looking great; thanks for the focus on concurrency) Yeah. This is a great update. I really appreciate the attention to detail and the focus on concurrency. And I love the direction that it’s headed in. So thank you.

KG: Thanks very much.

USA: Next LCA.

LCA: (I'm very happy to see this is moving forward, even without unordered concurrency) I want to say the same thing. I am excited this is moving forward. I think this will be a great addition.

USA: Thank you for everyone's comments everyone. That’s it for the queue, KG.

KG: Okay. Great. It sounds like the committee is happy with this direction and this minimum set of things for this proposal. So I will – I hope to put something together and bring it back to committee as soon as I can. And I am expecting to be busy for the next couple of months so I am committing to get that ready by the next meeting, but hopefully as soon as possible. I’m sorry this has taken so long. But I think we’re now at a place where we have at least a reasonably coherent set of things to bring forward.

KG: Before I finish, I did want to touch on the other two open questions that are raised. My intention for dot drop is to have it be sequential, rather than concurrent. If you drop that, pull one thing, await the result. No concurrency in drop. I guess I will add a parameter that says, that – you want to drop eagerly. I think that’s sufficiently useful. Not eagerly in the same sense, but eagerly. You know what I mean. Dropped concurrently. Opt-in Boolean parameter for dropped in concurrency. I will have the parameter that Michael expressed in support. And they will count towards the – that makes it more complicated, but not that bad. No one objected to any of those, so… Yeah. To summarize briefly – no. I see we have something else in the queue.

USA: DE in the queue next.

DE: (Retrospective: How bad a job did we do on async generators await in yield?) So looking back for async generators, we made the decision a while ago when you yield a value it will await it. Kind of reducing the amount of parallelism, where you could yield a promise and only be awaited when you like await the next result. I am kind of curious how bad of a decision that was. I guess, you can still recover that parallelism of having a sync generator that yields promise and do async on it and use one of these methods. Isn’t actionable. I am curious what your thoughts are now that you have thought about AsyncIterators.

KG: Yeah. That’s an excellent question. And I think the answer is somewhat surprisingly – it’s not actually the wrong design for async generators. For the specific case of map, and to a lesser extent flatMap, not awaiting the result before proceeding would get you some efficiency. But that isn’t the case for filter. Because for filter, the decision about whether or not to yield the value depends on the value. So for filter, it’s not actually possible to write something that looks like an async generator in any way. And has concurrent filtering behavior, because the thing that is actually concurrent is the decision about whether to yield. Which has to be syntax outside of the yield. So I think that this actually just comes down to syntax not really being suitable to give you full concurrency – or at least the syntax we have in the language. Other languages have something that is different that would with structured concurrency and so on. But the decision – even if we had decided that you don’t await yielded values, that doesn’t get you even as much concurrency as this proposal gives you with filter being able to be concurrent. The syntax is more limited or inherently limited. It’s not the decision about await that causes that limitation.

DE: Interesting. Thank you.

USA: Thank you for all the discussion. Thanks, Kevin. Would you like to summarize the key points?

KG: I will do that off-line.

USA: Okay. And would you like to dictate a conclusion? I don’t know if it’s –

KG: Yeah. I wasn’t asking for advancement for anything. So I will do that off-line as well.

USA: All right. Thank you.

### Speaker's Summary of Key Points

The current plan for the proposal is that only `.map`, `.filter`, `.flatMap`, and `.toAsync` will have any affordances for concurrency, with `.buffered(N)` as a helper for making use of that affordance. These helpers will all be order-preserving, despite that giving up much possible concurrency; the space of unordered helpers is vast and should be explored by the committee as a follow-on. No other things will be included in the initial proposal except for those which are also in the sync helpers.

On the specific questions raised:

- the committee was in favor of `buffered`, taking an opt-in parameter to start filling the buffer eagerly rather than waiting for the consumer to start pulling from the buffer promises which have been vended by `buffered` but not yet settled will count towards the buffer no expressed opinions on `.drop`; the champion's preference is for it to be sequential, with maybe an option to opt in to the concurrent+exception-discarding behavior

### Conclusion

- Proposal was not seeking advancement, but the committee is in favor of this direction.

## `Intl.MessageFormat` Stage 1 open question involving error handling design patterns

Presenter: Shane F.Carr (SFC)

- [proposal](https://github.com/tc39/proposal-intl-messageformat/)
- [slides](https://docs.google.com/presentation/d/1kyQqhoc4utHer6o0Gomf7a9rgLwEFHobMLOL6FBlBs0/)

SFC: Excellent. Cool. Thank you all for taking this topic. So I am Shane. Many of you know me here. I am not really a champion for this proposal, but I am kind of, I guess, by default sort of a champion now, because I am giving this presentation about `Intl.MesageFormatt`. This is an issue regarding this proposal. So let’s go ahead and dive in.

SFC: So in the – in the unicode MessageFormat specification, there is a big focus and emphasis on how we handle – error handling. There’s multiple types of errors. And this is for unicode MessageFormat. Not the `Intl.MesageFormat`. This is the specification we are focussing on building an Intl API around. The unicode specification has many errors. Message errors, a SyntaxError. You know, that’s basically handled when taking and processing the message or the data module for the message. The other type of error is resolution errors and they can occur – cannot be detected until you are formatting the message. So after you are giving the placeholders into the format function of the MessageFormat object. That’s when the second class of errors can be detected.

SFC: So the specification, the unicode message for that specification tells us that in all cases when encountering a runtime error a message must provide some representation of the message and informative error or errors must also be separately provided. So figuring out how to encode into the intl message is very important for us.

SFC: Message errors, handle in the constructor, it’s already the case that many intl objects throw exceptions in the constructor. If there’s a RangeError, if the argument doesn't make sense, that’s already a case.

SFC: The challenge here is what do we do with the second class of errors during the format function. This is case we haven’t seen too much. In ECMA402. There are some cases where we see it. There’s intl objects that tend to throw the function. They can do three. We don’t do this anymore, but we have done this in the past. If throwing in the format range function. And also three if, for example, in intl display names, if you pass in an invalid language code into the format function of the did, – so there are some cases where we do error handling in the format function. But they’re not very many. And definitely MessageFormat is the biggest case where we think about this problem.

SFC: So there’s three directions I want to layout here. And this is the topic we discussed at the TG2 call last month and the conclusion of the TG2 call as we went over the options but we wanted to bring to plenary because it’s not an Intl decision. This is like a JS standard library design. That’s why we wanted to bring it to plenary for discussion. This is more like an API design discussion. These are three options that I have laid out here on the slides.

SFC: So Option 1 is what is currently in the proposal, which is an error handler call back. So the way this works is, the format function in addition to taking the values on parameter also takes on error call back. The on error callback is passed in, when it occurs. And does whatever it wants with the error. If the on error function is not specified, the error with be I go Ford and best-effort replacement value is used. It case in the specification that the errors may be – may be a warning shown to the user. I guess that could show up in `console.log` maybe. But that’s the behaviors here. On the current behavior again is that these will return the string.

SFC: Option 2. An expressive error object. This would mean that the format function throws an exception and catches the exception and doSomethingWith. In a MessageFormat error. Contain a field for accessing the best effort replacement thing. Option 3 we could have a more expressive return value. A lot of the work that we have done in other platforms like we don’t – we always want to return more information than we can express in a string. So in those other areas, we return a formatted value which has a toString function. And also additional annotations. Similarly in intl. We don’t do this, but this is a good opportunity to start in this direction, if this is a direction we think is beneficial for us. Return an upgraded type format message. Converted to a string and have other fields for inspecting errors. Yeah.

SFC: So here are some code samples. I am suggesting early that I add them on to the presentation. The issued handler callback is the first one. Option 1. In this case, the `console.warn` is a function. You can pass whatever function you want. A close sure or whatever and invoked every time there’s an error and you can do whatever you want with the error. Option 2 is the expressive error object. I showed what you have to do if you wanted to write a little snippet of code to always capture like the fallback message. I realize in the previous slide, I said this is called message. Here is a fallback message. Bike-shedding aside this is what the call site looks like. Option 3 is the expressive return value. In this case, this resultObject gets returned might have fields like an errors field, array. Then a valueOf converted to a string. Those are sort of three directions we came up with. It’s possible we are missing things. If there’s any other directions that other [del]… these are the three brought up in the discussions previously. These are pros and cons. The fallback string is always returned and available by default. The main drawback that delegates have raised handling error requires indirection. Which is a bit strange. Option 2. Clear common design pattern. If there’s error, you can catch the error always. So it’s not like implicitly ignored.

SFC: A downside is that it has a risk for data-driven exceptions. You think that errors could happen and then when it’s deployed, there is exceptions. When the specification defines well-defined fallback behavior. This depends on what you do in these cases. So there is reasonable fallback behavior. So the downside is that if you didn’t have the try attach, you can do something wrong. You will be using the fallback message.

SFC: And probably returns only a single error at a time. The other two sort of can support returning lists of errors. Option 3 is the expressive return value. An advantage is that it is similar to Option 1. The fallback string is always available. And relative to option one is that there’s less indirection. Your errors are collected for you and available for you. I sort of think like RegExp match. The MatchResults returns to you an array and you do you want. Instead of capturing in a fallback method. The downside is that it’s a new thing. Return value is not actually a string. And option and 3 errors are easily ignored. It’s not really a form or con. It’s a note that it’s errors are easily ignored. I am not sure if that’s a pro or con. Some people feel either way about that. So I just listed as a note

SFC: That’s my last slide. Back to the code samples. If we can go to the queues, I hope people can weigh in there. We have quite a few which is nice.

DLM: Sure. I guess my strongest preference is against the throwing. It’s easy for someone to forget a throw. And it’s very common for localized strings to be missing. So in that case, what you want the fallback behavior anyway. Beyond that, I think I have a fairly weak preference for Option 1. It just feels like the most straightforward. In most cases you want to fallback string and that’s going to do it for you. If you want to do something more sophisticated, then you can pass in the on callbacks. It feels like that design handles the common case quite well.

JWS: So from what I have seen in the user space and intl libraries, Option 1 seems to be the most common. They tend to show the fallback message with the related values. If they can’t look up the local data or like you said maybe there’s a type value. I know we try to gracefully degrade and the often they handle – preferred to show the failed throwback. If people – need to do a try catch. And that starts to become cumbersome. I also like number 1 because the format method is consistent with the other format methods with DurationFormat and date time, which returns a string. It’s unfortunate to change that by returning an object on – or upgraded string, like Option 3.

SFC: Yeah. I will jump back in a little bit here. Another sort of variant of Option 3 A, would be like the format function, but then rename it. If we do feel that there’s like people expect format return string, but this one doesn’t return string, format message or something, if the only concern with that is just the name confusion, like we can figure out different names. But yeah.

RGN: Looks like I am in the minority here, but I don’t like Option 1, establishing an onError callback from the perspective of the language itself is just unnecessarily confusing with respect to control flow in cases where for example the callback itself throws an error or spawns an async call stack. I would rather not direct authors into that kind of thinking.

RGN: New topic: A missing option here is one that is being considered in MessageFormat— sidestepping the issue by having separate functions, one of which throws errors and the other returns fallback strings, for authors to use as appropriate for themselves.

USA: Yeah. Thank you. I would like to slightly disagree with what you just said, RGN, because I think that’s not really going to help all that much. If you think about it, if you always have to call the error checking variant before knowing for sure if you would have something nice from the format string variant, then it kind of comes back to Option 2. Because then instead of a try catch, you have if statement. It’s sort of – yeah. Like, or possibly a worse version of Option 3, where you have to, like, take destructure the result and sort of check for the error. My personal preference is one or three. Greatly more than two. I think the code sample that you showed SFC explains exactly what’s wrong with Option 2. I think it’s unergonomic for most cases to wrap all the usage of a function in try catches. On the option 1, versus Option 3, I personally find the first, the more JavaScript solutions. JavaScript is more comfortable using handler callbacks basically. And Option 3 seems to be the more Rusty in a way, because it’s kind of like a result-type. I don’t think it’s a bad thing. I just think it's less often the case in JavaScript codebase CIS.

TKP: Yeah. I prefer the Option 3. Because it’s kind of like in the functional style. You have one side that is true and the other side that is kind of falsy or narrow. But besides from those libraries that are functionally inspired, I have not seen this in the wild. And speaking of that, I kind of like the second option. And because this is asynchronous operation, but you always have to do this on a user input that is kind of async-ly handled. And if

TKP: Then this whole thing just finishes. Of. So, yeah. I would prefer option EAO? So, you throw that in promise, you will have to catch it. And then this whole try catch thing just finishes. So yeah. I would prefer Option 3 than 2 for that matter.
(switch writers)

EAO: As the author of the current language, Option 1. It’s the least solution. One part is that it’s – providing a default behavior of issuing a warning. For example, threw the console or what might be appropriate to the environment which is how it’s being run. One aspect I'd like to highlight is that we need to keep in mind that `Intl.MesageFormat` like the other intl formatters doesn’t have a format method that needs to of the behavior. We have to format to parts method. Which is – returning an array of parts. So with that approach, the Option 1 has the same pattern, as with the example here. Where it’s my `message.format` to pass and the error after that. Option 2 for that one we need to have probably a different error that we are throwing for format and format to parts. Because the message that is formatted has a different shape or value, just in that error the fallback message needs to be a string or array of parts, depending on how you got called and how it came about. Option 3, we would presumably end up with something like the RegExp result of a match. So we have an array of parts as the value and that array has an errors property on it. And then with option 4, we would – well, we need to have actually 4 functions instead of the current 2. Format, format, for the March… that makes it very cumbersome to use in practice. My preference here is with Option 1

PST: Okay. Did you consider instead of like, all this, to a constructor option? You created – – Patrick. Okay, so that is a naive question, and did you come there through like we have a constructor option so when you create a format you say that the error is handled. Is that making sense?

SFC: So the errors and things like that can beheld from the construction, and it could be an option in the constructor that could be like you know like you want to throw for an exception or have a throwback value. I don’t see how that would be for the over opens and that could be a way and that would be like an option two, can you turn off the swelling with the constructor option.

PST: The code that is creating the formater is not the code that is not using the formater so that can make sense with that possibly?

SFC: I don’t think that I have brought that up before and that is an interesting one and I will think about that one. And so there is two options in this meeting and that is good. And I am glad that we are having those. How are we doing on time?

RPR: You have got about 7 minutes. Remaining before being summarised.

EAO: So what you mentioned does make potential sense, but it has the cost of distancing the error handling code from where it actually happens. So for example if the same message is formatted multiply Tylenol times with different multiple holders input from different places and one of those throws an error, it will become difficult to figure out where did this error come from. And in either some code that is handling it or otherwise. This is, I did consider this when writing originally the ending up having that on error being definable in the format method column itself and that made more sense assumption it more appropriate scope and location for the error to be handled correctly.

ACE: (I like that with option 1 the runtime can see when no callback was provided and can console warn on error. Unlike option 3.) Runtime does not know if you can check errors and gets into something like unhandled promises where it is like if no errors has been read before it's garbage collected and that is way more complex than it just doing that based on a simple check. That said, parts of me does not love the callback because of potential performance reasons but all things considered I like option 1. JGT: I want to put in a vote for option 5, and for a few reasons. And one is for me someone who is much more familiar with other parts of the API and message formatting and it is safe to say most of us work in highly internationalized often larger companies where globalization is very popular. Most developers in the world don’t do that with smaller companies and smaller budgets and hour goal should be that the bar as low as possible for those developers to enter the word of internationalization of languages and messages and so actually think by making it more consistent with the way that other parts of the Intl API works and to achieve that goal and when I think about the mechanics of other API works and everything happens on the constructor and the format method is providing the data that you want to format and nothing else and so whether or not is the correct one long-term is one established into the Intl API and if we want to make this accessible as many developers as possible and we need to make this as constructor opens because that would be more familiar, and the other thing to respond to what was said before is that – sorry, that it may actually be an advantage to put it into a different place because sometimes or oftentimes when developers are localizing things, the developer building the library that is used inside of a company for doing localization is a different developer than the person that is actually calling to do the formatting and it is likely that library author is a lot more conscience and so this might be a positive to put it into the constructor where you might have a more experienced developer thinking that through.

So that is it.

USA: Yeah to respond to that, there is a few differences between message format, and other formatters in some ways and this can be one of them. For most of the existing formatters when it comes to utilization and you are giving some options to help the implementation pattern and in the format you apply that for the value and only thing that would go wrong with that point that the value that you provided had some varies. However, for message format, initialization is the parser where it takes the message that also parses that message, and you know that is not from a small set of values, so it could fail with that step. And in the formatting step, it sort of interpolates and does all of these values. So the problem is that, well with that on the queue, and there is different values happening at these stage and basically, while I appreciate centralizing the error handling, it would actually be less ergonomic because that would confuse developers at what step is the error happening to begin with.

SFC: How are we doing on time?

EAO: Quick note on that because message format allows the message structure a placeholder that are formatting numbers date times and other things and these end up calling other formatters and furthermore message formats will allow values that is variables that is only set in the format call, it means that when we are calling `messageformat.format` or dot format part question need to construct another informal formater that can be used because the options for that other informal formater is not known until that time and the construction errors don’t occur with message format during the construction but sometimes during the dot format call.

SFC: I am in the queue and I have this entry, and I know we are out of time but I want to raise to the delegates that I have heard a lot, we have spent a lot of time or reentrancy and code that can user code and spec code has a lot of challenges and I know we have focused own temporal and we have had like the conversion to primitive and discussions about how to avoid reentrancy and there is a lot of delegate that is in favor of the reentry option which surprises me but if that is okay, I think you know, it is about time to wrap this up, and I will say that if this was – if it was not evident that we can continue that discussion and my conclusion and I will write a conclusion for the notes. The conclusion since I believe is that I think we are mostly in agreement that option 2 is not the direction we want to go and there is additional options that is 4 and 5 that was raised and I have heard support of 1 and 3, and it sounds to me that there is like a lot of intra contact see here that we have not fully considered. And it does not sound to me that like anyone in the plenary is strongly objection to any of these options besides option 2 and I do hear RGN about option 1 and reentrancy because he is on the queue but that is something we can bring back but the direction will go to me and proposal for stage advancement. You know we will in fact call and participate in GitHub if you want to be engaged and I appreciate all the engagement, and I appreciate everyone and we are out of time. So thank you so much. So thank you, Shane, and we are on time there. The next item was going to be import, and we are waiting for chris to wake up to share that one so instead we will share with the proposal review/scrub for 30 minutes. And so Dan, who was going to be – are we going to run that one? This proposal scrub? Excellent. So, we will move toe that as the next item. It says 60 minutes but we will do 30. We have got until – for a 20 minutes break so we got until 5 to the hour. So we can get 35 minutes, it is the same thing.

### Summary

The Unicode MessageFormat specification emphasizes error handling with two types of errors: message errors (handled during message processing) and resolution errors (detected during message formatting). The challenge lies in determining how to handle resolution errors in the `Intl.MessageFormat` API. Three options are proposed: 1) an error handler callback function passed into the format function, 2) an expressive error object thrown by the format function and caught by the developer, and 3) an expressive return value with additional fields for inspecting errors. Each option has pros and cons regarding error handling, fallback message availability, and data-driven exceptions. We seek feedback from the committee on which path to take.

### Conclusion

- Potential concern about reentrancy in option 1
- Agreement that option 2 is undesirable to most delegates
- No strong objection to option 3, but majority of delegates prefer something else
- New options 4, 5, and 6 were added which will be considered by the champion group

## Proposal Scrub

Presenter: Daniel Ehrenberg (DE)

- (no slides)

### Legacy Regex Features

- [proposal](https://github.com/tc39/proposal-regexp-legacy-features)

DE: Legacy Regex features in JS.

DLM: SpiderMonkey had a plan to work on this.

MLS: Different implementors had different plans from one another.

MLS: I don’t think we will add and I don’t think we are unify is probably the best way to say it and so it is not editing.

DE: When possible but not unifying seems quite unfortunate and there is many things in the web platform there is a lot of legacy going on.

MLS: And so if the implementation say last match, and another mutation does not and that will need to add.

DE: Not necessarily because in the past a lot of things were resolve by some sort of problematic combination filling in things and taking away some things. And so I mean, overall, this can only progress if someone wants to take on the work, otherwise we will withdraw the proposal and more clearly document that this is just not being worked on I think.

PFC: In test262 the implementation status is that and JavaScriptCore, GraalJS, and LibJS are 100% compliant, and Hermes passes 19% of the tests.

DE: Okay what about V8 and SpiderMonkey?

PFC: It is not showing them here.

DE: They fail all the tests?

PFC: I will look at the results.

NRO: It is just that the website is not showing that. They are rebuilding their data. So I don’t know

DE: If somebody brought to you on the action item to follow up on this proposal and learn more about this implementation status.

RGN: MM is not in the call right now, but I can get him.

DE: I think in the past mark was hopeful for this because it made some object regularity properties getting met but he did not get to personally work on this and I want to suggest a deadline for abandoned proposal like this and after two years of soliciting Champions and move it to abandoned proposal and I would prefer a so list Ted Champion and this not completely abandoned over multiple years. What do you think on handling cases like this?

MLS: So again I think MM was the one that brought this up, and I just wanted to unify what exists in the wild. But I think what as Dan said, it is going to be hard to get everybody to like all of these things.

DE: Sound like maybe you (JSC) already do. So, right. So like there is a lot of unifying on to itself even if it is for an imperfect thing. It interests compatibility among engines.

CM: I think a little bit of historical background on this was that MM just in general likes making things be consistent everywhere, but the real driver of this was Claude Pache who is not a TC39 delegate, and MM was sponsoring it so Claude could work with the committee on it. We have not heard from Claude in ages and I think the thing to do in this case is have MM get back to him and find out what is going on.

DE: For next steps I want to proposal if this proposal continues to have no volunteers in a year, then we move it to the kind of withdraw or inactive proposal category like a year ago we discussed it last and can we vaguely agree to that on the next step and the further withdraw would be a step that would require their consensus?

DLM: Seems like a reasonable plan to me.

MF: Yeah. Okay I would like to know what the role of the Champion is at this stage in the proposal process?

DE: I would suggest that the Champion is the primary person responsible to respond within the next year and hopefully this would bring this to the committee than scrub process and the reason for scrub process we don’t –

MF: So by bring to committee, you mean like pester engines during plenary?

DE: If they cannot convince engines that is a good idea, they should withdraw it and they can contribute patches to engines propose them and they can decide to withdraw it and make changes and make it more attractive to engines. There many different things that Champions can do.

MF: I really don't think that's the onus of the champion here. I think if we as a community are going to withdraw it, it's going to be because an engine says, not only is it not prioritized, but they are no longer interested in implementing it indefinitely. And then we can think about withdrawing it. Until then, there are going to be things that are higher priority, things that are lower priority, it doesn't mean they're not Stage 3.

DE: This is distinguished from all the other recent stage 3 proposal because all the other attract implementation interest and we should not put things at stage 2.7 or 3 if it is not a great idea and this has been a stage 3 for a long time and let’s make I reflect the current entry. Anyway, I think I get the sense if someone then you can confirm. If somebody make a PR so spiderMonkey that implements that, will you be welcome to accepting that?

DLM: Yes, definitely.

DE: So here we will start the clock counting down for a year. And people are very encouraged to make PR’s against engines to implement this to rescoping the proposal that will attract more interest or even to just make the case why this is valuable and maybe beyond the reasons that mark has made in the past. So that is the conclusion I want to report for this.

SFC: I mean I think it is not about the signals that we are selecting and the signal we are sending to implement and this thing is like on a ticking down time bomb, and I think the best ways to get engines implement and reaffirm this is a proposal and we are a committee and so we will report it back to stage 3, and like you know, I mean allow these proposals are just a matter of prioritization and can we get head count and implement this and so forth but it is a stage proposal, and I tend to agree with Michael on this one and I have this particular proposal and it was erroneously to stage 3.

DE: You know we tried to do that a year ago and we said this is stage 3 and we would like to see follow up on this. One thing that people can do here is explain to everyone why they think this proposal is a good idea and maybe that is persuasive and do you want to make that s sense? Or Michael do you want to make this case? I explained why I think this is a case and why people coming to semantics will increase the program. Maybe we can go on to the next topic. I would like to record a conclusion what the next steps are and Michael or Shane do you have alternatives to next step to propose. I think the committee as a whole owns it to some extent.

MF: I wanted to not put a time limit on finding a Champion. I think that it is valid, everyone still wants it, nobody's made an argument against it, it's just that it is not as high priority and we keep doing additional work that jumps in front of it, that's okay. I don't want a conclusion that is we're going to withdraw it based on lack of implementation, especially since we do have an implementation. We're obviously as a whole working toward it. And we've just heard today from SpiderMonkey that they would be open to also accepting an implementation.

SFC: It seems to me that if you know implementers think this proposal is not worth implementing, and then they will come to us like they came up to with temporal and the proposal is too big and we are having challenges, like figuring out we can implement this successful and it seems like if that is the problem from – we think there is essential issue with implement and sending feedback.

DE: We just heard from SpiderMonkey and I don’t want to find this – I am fine with many people on the committee find that valuable and implement this proposal and multiple engines do not find it motivating to implement it to themselves. And is that an accurate conclusion that we can agree?

SFC: I misunderstood DLM's comments I thought this is something that is still – this is not a priority but it is not like something that like you know especially deprioritizing and it is still on the queue to implement it, right? I feel this is probably the case for V8.

DE: DLM, I think it is accurate that you are not prioritizing and that is what I want to record in the conclusion? You are deprioritizing because you see the lack in it and this is a small task.

DLM: And I have not looked at it since we last discussed and when I reviewed it, then, it did not seem like a high priority for implementation. And it is not like we were ever implement it but it is not something – yeah I guess like you said we very much welcome if someone else wanted to contribute implementation but I cannot see it with current resourcing why we would spend time on it and I guess in this case, JSC have implemented it and if V8 implement it, we would do it but we are not motivated to implement it ourselves.

SFC: The Intl proposal is all in SpiderMonkey and does not work with FireFox or mozilla and if these we wanted to motivate it. And it is great that we have making these contributions and maybe we don’t have someone doing that for WebEx, maybe that is a good next support. So as a committee are willing to come back to this and if it does not continue to not get multi-implementor interest we can revisit but we don’t need to make that decision today. Is that a conclusion we can agree on?

??: Yes.

DE: I do not want to spend time on but not leave proposals abandoned on stage 3 because that is a commitment that we are going to do something about this proposal and try to see it through.

#### Summary

- DE argued that this work is important to have cross-engine alignment on all edge cases
- Agoric is in favor of this proposal to support SES, but they can get by with the world in its current state
- No browser is prioritizing this work highly
- SpiderMonkey would accept outside patches to bring it up to compliance. V8 might as well.
- JSC raised concerns that they might not be interested in implementing the features that they don’t already have (though they seem to pass the tests already)
- No timeline for considering demotion/withdrawal; the proposal remains at Stage 3.

### JSON Modules

- [proposal](https://github.com/tc39/proposal-json-modules)

DE: For JSON modules and are these already implemented in multiple engines? Maybe these are just ready to go to stage 4?

NRO: This is implemented in V8 and JSC – plan to propose this for stage 4 together wit import attributes, in the next few meetings. As soon as we have an answer on whether we keep the `assert` or not.

NRO: Chrome has shipped removing `assert`.

DE: That seems quite optimistic already and the proposals are lumped together.

LCA: We have contributors on both of these, and so this is not dead and pay attention to.

DE: Okay awesome, and thank you for your help, and these are gradually shaping as well. And explicit resource management and we are hearing from leader this meeting and

#### Summary

- JSON modules is smoothly moving along towards Stage 4, and will be proposed for advancement soon, once `assert` is unshipped.

### Float16Array

DE: float 16 array? Is that being implemented and shaping in browser?

DLM: We are attempting to ship in the next release of SpiderMonkey, and are aware of that V8 has started their implementation as well.

DE: Great that sounds quite healthy.

#### Summary

- Under development/shipping in multiple browsers

### Decorators and Decorator Metadata

DE: The status with decorators overall, including decorator metadata, is that we have tests just out for review in test262. https://github.com/tc39/test262/pull/4103 I encourage people to help contribute to this testing. I am not aware of any decorator implementations in engines or others. PFC do you want to clarify on decorator testing?

MLS: Decorators is stage 2 right?

DE: Decorators are Stage 3. So now that they are tested, I hope that they are becoming sufficiently interesting engines to implement them.

MLS: Do decorators need to be changed to stage 2.7?

DE: If we did not have tests for this meeting, we could consider retracing it to 2.7. That’s not necessary since we have tests out for review that look pretty comprehensive and more than 700 files.

NRO: To clarify, there are already some tests for decorators. When we created Stage 2.7, we did not notice the decorators should have been considered 2.7. I was planning on proposing decorators for 2.7 but I talked to one of the champions (Kaitlin Hewell Garrett) and she had a test262 pull request ready. As far as I know implementations were waiting on that. The tests should land soon, so we don’t have to reconsider the proposal’s stage.

DE: Do people have concerns about the state of decorators? It is a bigger proposal.

#### Summary

- Decorators are at Stage 3 and now have test262 tests (under review)
- No concerns expressed about the decorators proposal

### `JSON.parse` source text access

DE: JSON parse source text access is gradually shipping in browsers, right?

DLM: we do have an implementation with SpiderMonkey and it is still Nightly only and I will check on that. I’m aware that V8 has an implementation as well.

RGN: That is my understanding and there are tests right now but I would like to flesh them out before proposing advancement to stage 4, probably at the next meeting... but regardless, it is still very much active and in implementation.

#### Summary

- Multiple implementations in development, shipping now or soon
- More test262 tests to be written

### Regex Expression Pattern Modifiers

DE: Regex modifiers. I think this is going along well. I don’t know if anybody has more to add for status. This proposal allows inline changes to certain regex flags.

MLS: That went to stage 3 two years ago.

DE: Right, so that is another one where we might have considered retracting it but at this point there is no reason because the tests landed.

MLS: Yeah and we have not started this one.

DE: Right, is there any implementor who is looking at this?

DLM: V8 has an implementation that in our regex library that we use. I have been looking at patches this week and I will turn it on.

DE: Okay great.

#### Summary

- Test262 tests landed
- Implemented in V8, which should flow into SpiderMonkey soon. No JSC plans yet.

### Sync Iterator Helpers

DE: Okay so, sync iterator helpers and this has been implemented in the script engine right?

DLM: So I am manning – these have been implemented as well in SpiderMonkey so this is not on my list to ship over in the next month or two but I don’t know about the other implementation status.

DE: One thing in V8, is anybody from V8 here?
>> Was there a web problem with this that was resolved?

ACE: I think they have started to ship in V8 because we have different platforms at different levels and one started to ship `globalThis.Iterator` with the others and so where we deleted the Iterator and so to me it shipped to V8 so we would delete it.

DE: This seems rather optimistic to get to stage 4 in the next few meetings.

KM: I don’t see an option for it. So I am guessing it is implemented but I am not sure.

MLS: Yeah I don’t understand this either.

#### Summary

- Beginning to ship due to previously accepted web compatibility fix

### Explicit Resource Management

DE: Resource management is coming out in some engines, right? Is it under development?

DLM: In SpiderMonkey’s case we have a volunteer who has started on this and being mentored by a team member and it has been started and I believe V8 has stage in testing in this so I assume the implementation is underway.

DE: Do we have test262 for this proposal?

MLS: I believe we do.

PFC: There is a pull request under review from the champion, and under review for V8.

#### Summary

- Implementations in V8 and SpiderMonkey in progress
- test262 tests out for review

### Source phase imports

DE: Source phase imports, for WebAssembly modules, how are these doing in terms of implementation?

CZW: The work on V8 is under review.

NRO: That is great, and even though we decided that the test262 were not necessary for this proposal, CZW is adding syntax tests which is a good idea.

### `Function.sent` metaproperty

- [proposal](https://github.com/tc39/proposal-function.sent)

DE: This is a Stage 2 proposal, adding a “metaproperty” allowing you to see the first thing that the generator was “primed” with. Maybe that is more composable than using a return value of yield, which ignores the “primed” value.

DE: Stage 2 means that we expect this to become a part of language. We hope to eventually get active development towards the proposal otherwise we can consider it moving it to stage 1 or withdrawing and Hax, did you expect to work on the future?

HAX: (from matrix) Regarding `function.sent`, we have discussed use cases and possible solutions in several past meetings. However, there is no consensus on whether the use cases are strong enough to support introducing a syntactic solution. Although I generally still believe this is a problem worth addressing, perhaps solving it through a more general feature like function decorators in the form of an API is more promising than introducing entirely new syntax. Therefore, I hope to revisit this proposal after the function decorator proposal advances to the next stage.

#### Summary

- HAX plans to bring this proposal back with a different syntax if function decorators advance

### Throw expressions

NRO: RBN was working on this just a couple of months ago. There were some discussions about syntax issues like right now a couple of weeks ago a request in the syntax changes was reopened. That was one of those closed and then we have this recently, so maybe there is something going on.

### Function implementation hiding

- [proposal](https://github.com/tc39/proposal-function-implementation-hiding)

DE: Functioning implementation hiding: this is about making toString not show the function source.

MF: Yeah, this is still one that I do want to have advance. But the last time it was presented, it had opposition by Mozilla. I don't know if their position has changed. The other dependency that this proposal moving forward was error stacks, which is also, I believe, JHD talks about frequently. And I believe he also has interest in that. So I guess I would like to hear if Mozilla still has a position on that, or if you can recall the position.

DLM: I am not sure offhand, I have to review the proposal.

DE: Switching from facilitator to participant: I had expressed concern about this because there was some initial hope that it could help save, for example, memory usage by allowing implementations with byte code to discard the original source. But in practice, bytecode may be larger, so it’s the thing to discard.

MF: So there were some people that were hoping for that, but that was never a claimed motivation? Well, I mean, it was claimed, but then it was not part of what was presented most recently.

DE: I see you already removed that. There was sort of a question about what the claimed purpose of the proposal was.

MF: I still consider this a security problem.

DE: Do you tend to follow up on this?

MF: Yes, I can follow up on this. I hadn't been hopeful that Mozilla's opposition would change, but maybe we'll talk about it again and see if there's a chance of that. And if there's not, yeah, I think withdrawing it would be the right public signal for this proposal.

MLS: It has been some time that we talked about and there is some concern about adding directives (“use …”)?

MF: Those are definitely another dimension of concern but that is a more superficial one and there is some fundamental ones about this not being a good idea generally.

DLM: I was not able to fully describe Mozilla opposition but if something along the lines did not align because of the security module. So not important to do it for the language.

#### Summary

- DLM to follow up on Mozilla concerns
- MF to bring proposal back to committee, explaining motivation and pursuing advancement

## `Promise.try` for Stage 3

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-promise-try/issues/15)
- no slides presented

JHD: Wonderful. So hello, everybody. You may recall from the last couple meetings, `promise.try`, the test262 are merged and it’s implemented in a number of engines already, although behind flags, and I’m not actually seeking Stage 4 today, obviously, because I need achieve Stage 3 first and give a little more time for browsers in particular to implement. So I’m hoping that that will be an easy Stage 3 given that it’s all ready to go. Yeah. Are there any questions on the queue before I actually ask for advancement?

CDA: Nothing on the queue.

JHD: All right, well, then, I’d like to request Stage 3.

CDA: Dan Minor supports Stage 3. I support Stage 3 as well. Plus 1 from RGN. Plus 1 from Duncan McGregor.

MLS: I support Stage 3.

CDA: Awesome. Plus one from Michael Saboff, Tom Kopp, also plus one, so sounds like pretty clear you have consensus.

JHD: Awesome. Thank you.

CDA: Do you want to dictate a summary and conclusion for the notes.

Statement from SYG who was not present:

> V8 has no concerns for Stage 3.

### Summary and conclusion

`Promise.try` has merged test262 tests and has received consensus for stage 3.

## RegExp Escaping

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-regex-escaping)
- no slides

JHD: Yeah. Awesome. Okay, this one won’t be quite as brief. So I’m here today to look for stage 2.7, spec reviewers have signed. One of the editors has helped. I don’t remember if kevin has been made officially a co-champion or not, but he should be if he isn’t already because he has written a lot of the spec text. And I don’t remember if -- I don’t think SYG has signed off yet, but I’m happy to make the advancement conditional on that. The -- everything is great. The spec text is in there. And there’s just one open question that would need to be resolved before we go first -- before we advance this proposal to Stage 2.7. So currently we’re using character escape sequences, so, for example, if you have an at sign, it becomes a backslash at. RGN raised the point that if there was ever a time in the future when we wanted to make backslash at mean something other than just a literal at sign, then it would be better for `regex.escape` to use hex escapes instead of character escapes, means, like, backslash X something or other, I believe. And the -- so that’s sort of the -- my understanding of the impetus of RGN’s question is let’s be forward compatible -- like, let’s not close off the design space. Kevin and I would prefer to keep the character escapes because human readability, even though this -- the output of `regex.escape` is not super human readable, readability is still a spectrum and more readable is still better than less readable and character escapes are more readable. And on top that, the -- it’s unclear that the design space is even still open to change the meaning of these things, because if somebody is already using, for example, a backslash at in a regex, I think it wouldn’t be web compatible to make it mean something different anyway. But either way, the text to do that -- the spec text to do that is relatively trivial. So my hope is that today we can make a decision about that question. And then regardless of the outcome of that decision, advance this proposal to Stage 2.7 with the decided semantics. And I see that rGN has some extra context he wants to provide as well. I’ll jump to the queue, if that’s all right.

RGN: Clarifying example that actually kind of proves the point, which is that the -- the at sign is valid after a backslash only in legacy mode regular expressions. It’s actually invalid in unicode, you know, U and V flags. I think that is the kind of thing that very well could change over time, and especially if we introduce yet another Unicode mode, which is plausible. None of that baggage exists if we do the generic hexadecimal escapes, which is a big motivating factor for why I think it’s the better solution. We can live with either, but I do have a pretty strong preference for reasons like this to just do all escapes the same way.

CM: (Clarifying question) are we talking specifically about \@ or is that just an example?

JHD: Yeah, that’s just an example. The backslash at is just a convenient placeholder.

CM: Yes, that’s what I thought. But I wanted to make sure people were clear on that.

JHD: Thank you for the clarifying question.

MF: Yeah, I guess, so I'm very doubtful that we could get away with changing behavior of `\@`. I'm not convinced at all by Unicode mode regexes not allowing them because it's not like regexes got auto upgraded somehow to use the u flag, they still exist without the u flag. I'm not talking about regexes that are written today, I'm talking about ones that exist in code written a while ago. My opinion still is that for this proposal we should have just hex-escaped or Unicode-escaped everything, but given that we're not, that we're doing other escape sequences, then I think we should just keep this, we shouldn't change anything.

CDA: MLS agrees with RGN. And that is it for the queue.

JHD: So I assume, Michael, that that agreement is fine with either strong preference for hex escapes?

MLS: And the reason is that both the U and the V, they disallow escapes for the possibility they be used in the future, so I don’t want this proposal, and the regex escape to create something that is legal now and illegal later.

JHD: Okay. Yeah, I mean, it’s certainly clear that making the decision in `regex.escape` will close off that design space. Okay, so now I’m at sort of the same place, which is we’ve heard two people now that have indicated a strong non-blocking preference for hex escapes, and Michael and Kevin and myself have a preference for character escapes. And not that it’s a numbers game, but I don’t know if it’s worth maybe doing a temperature check with the question being, like, positive would be keep it as, you know -- all the positives would be keep it as is, and the negatives or the confused, something like that, would be change it to hex escapes, and indifferent is if you’re good with either one. Is that a reasonable request?

MF: Yeah, and I could probably do this if I read the spec text right now for myself, but could you clarify if we switched the escape sequence for these punctuators to hex escapes, what escape sequence, like what classes of escape sequences we would be using as a whole?

JHD: Sure, NRO, could you switch to the spec text. Okay, so this is the main -- there’s basically two chunks of text. This is the main method. We go through all the code points. We -- where is it? If it’s -- if it’s a decimal, digit or ASI letter, then we use the hex escape. Otherwise we jump into the abstract operation below, which is where punctuators are considered. I’m probably going to summarize this inaccurately as I talk, but you can look for yourself and see exactly what it’s doing. Yeah, so punctuators were considered and it’s using -- where is it? There are a few hex escapes and then there are a bunch of character escapes, is how I’m reading this. I’m little tired, so…

MF: Are you talking about the later ones, the Unicode escapes?

JHD: Yeah. It’s -- sorry, it’s hard for me to have this all paged in with the spec text, but the -- let me reread it and try and pull in my understanding. So if it’s -- it says if it’s a white space or line terminator or is a leading or trailer surrogate that uses a hex escape, and then everything else is just the UTF16 encoding. That’s how I’m reading it. It’s -- I can’t -- my Zoom is sort of covering --

MF: I’m just confirming this. The other escapes would be those -- the single character control escapes, like T, N, V, F, R.

JHD: Right.

MF: Okay, then I’m neutral on whether we use hex sequences for this or single character escape sequences.

JHD: Okay. Yeah, so I guess if everybody who has not spoken is neutral, then a temperature check would be a waste of time. So I just kind of -- like, I see kind of two people, then, myself and Kevin, on the side of keeping it as is, and two people on the side of using the hex escapes, but nobody has expressed a blocking constraint in either direction. So my -- yeah, so, like, my inclination is to do the status quo if that’s the result, but since we don’t know for sure who is neutral, I think I agree with RGN’s comment, I’d like to do one and just get a confirmation of that.

CDA: All right, we’re going to do a temperature check, we need to make sure that folks have TCQ pulled up. I know that’s -- we’d hope everyone already has it pulled up, but if you don’t, it’s important that you do, because it only -- it only -- it will not show up if you join after the temperature check is placed on the --

JHD: Yeah, so I was going to say, as soon as I see the emojis, so I can be precise, I will dictate for the notes and for the room who each emoji represents.

CDA: Okay, great. Clarifying question from Bradford.

BSH: Yes, I’d just -- I think I might have misunderstood something. Are we saying that if we leave it as it is right now, where you escape at with backslash at, that means you can’t use the result of `regex.escape` in a regular expression if that regular expression is going to be used the U or V flag? That seems bad, right.

RGN: Can I answer this question?

CDA: Yeah.

RGN: So the current state of the proposal is that there are two classes of punctuators. In one class, you have things like dollar sign, which are valid in all current regular expression modes as character escapes and regex escape outputs it as backslash dollar sign. In the other category, you have what’s on the screen now. A character such as at sign is actually subject to hexadecimal escaping. If in the future backslash at becomes valid for Unicode mode regular expressions, the output of regex escape presumably would not change, so it would logically be in the same category as dollar sign, but in output would maintain its distinct category.

BSH: Okay. Thank you.

RGN: But, you know, to answer precisely the question that was asked, it is semantically acceptable to use the output of regex escape in either mode regardless of how this issue gets resolved.

CDA: That’s it for the queue for now. Temperature check. I hope everyone heard my call for making sure you have TCQ open. I trust that that has allowed people enough time to go ahead and do that. And I’m going to pull up the temp check interface now. Well, not now, but in a moment. Please refrain from casting any votes until JHD has thoroughly explained the meaning of each option.

JHD: So I’ve just typed in some explanations. Oh, yeah. So I put with there’s no semantic meaning really between the emojis and the actual explanation, but if you put the strong positive heart, then that -- or the unconvinced, then that means you have a preference where you’re blocking on where -- or you insist on your preference. If you put the thumbs up, then you’re saying -- oh, now switch -- that you want to keep character escapes but it’s not a blocking concern. If you put the question mark, the confused one, that means you want to switch to hex escapes but you’re non-blocking as well. And if you put indifferent, it means you’re neutral, and then nobody click the eyeballs. We don’t need that.

CDA: SFC clicked the eyeballs.

JHD: And I appreciate all the indifference from being different enough to click the emoji. That’s always helpful to have some signal.

JHD: Yeah, nobody had expressed a blocking preference in either direction, which -- so I’m glad this is confirming that.

CDA: You’re in a dead heat otherwise.

JHD: And, remember, Kevin has a thumbs up as well, but he’s not awake right now. But, still, it’s close enough that we could kind of make either call, so I’m just kind of waiting to hear if there’s more pressure in one direction.

CDA: We’re going to call it. I can capture a screen shot for the notes. Yeah, you’re neck and neck.

> Temperature check results:
>
> - keep character escapes, block on hex escapes: 0
> - keep character escapes, non blocking: 3 (omits a +1 from SYG who was absent)
> - n/a: 3
> - switch to hex escapes, non blocking: 3
> - neutral: 19
> - switch to hex escapes, block on character escapes: 0

JHD: Okay, well, then in that case, I’m going to ask for Stage 2.7 with the status quo, which is character escapes.

CDA: Yeah, plus one from Daniel Minor. Any other explicit support for Stage 2.7? Support from RGN. Also from Daniel Ehrenberg. Also from Michael Ficarra. All right. Hearing nothing else, you have Stage 2.7. And on that note, would you like to dictate a summary/conclusion or and conclusion for the notes.

JHD: Sure. So `regex.escape` has achieved consensus for Stage 2.7, keeping its current semantics of using character escapes instead of hexadecimal escapes.

CDA: All right. And we’re going to move on to your last topic is --

RPR: Shall we have some applause? There’s been some stunted efforts.

Prepared Statement from SYG who was not in attendance:

> V8 has no concerns for Stage 2.7.
>
> As for character vs hex code escapes, V8 can live with either outcome but weakly prefers character escapes. The future stability argument AFAIU is that choosing character escapes makes changing the behavior of character escapes in the future even harder. But it is already very hard to change non-throwing behavior to new non-throwing behavior. We don't understand why this would make it meaningfully harder.

### Conclusion

Keep character escapes (no change). Advances to stage 2.7

## `Error.isError`

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-is-error)
- no slides

JHD: So I am now going to discuss `Error.isError`. So as a refresher, error instances are the only language built in instance that does not have a way to brand check it. All the others have, you know, array has `Array.isArray`, but all the others have some sort of prototype method or accessor that, you know, by way of doing something else does a brand check and throws or returns some special sentinel value, and it is very useful when debugging to do brand checks and kind of know for sure what you’re dealing with so it can help the human doing the debugging try to figure out what they’re actually dealing with. Similarly, when you’re doing serialization run kit, for example, which is this, like, trainee link on every single MPM package link, they need to be able to serialize values safely and reconstitute them describe them for the user, and the -- with -- they do not -- because there’s no brand checking mechanism, all they can do is a best guess, and you know, they have in the past expressed when they were -- when run kit was part of stripe and when stripe was an eqi member expressed this desire for checking errors. This need is still there. And also structured clone, which is in browsers and node had a special behavior for native errors. It does this brand checking. So there’s no way to know in advance if it’s going to do this. You kind of have to try it and see and that’s unfortunate. So for all these reasons, I’m proposing a way to brand check errors, which at that point now has a shape, which is just a predicate, `Error.isError`. And if you want to jump to the spec text, Nicolo. It’s very, very simple. The method just calls an abstract operation, and the abstract operation then describes, you know, it has to be an object with an error data internal slot, and I do have this proxy stuff in here. But I am in no way attached to it. It’s -- I sort of just copied and pasted the spec text forever go from `Array.isArray`. So if that horrifies anyone, let’s just rip it out. I might rip it out even if it only horrifies me. But also please let me know if you want it to be there for some reason. But these are all things that can be decided within Stage 2. And I’m here today to ask for Stage 2.

CDA: I got a number of things --

JHD: Oh, yes, then, sorry, I’ll elaborate as well since this was brought up in a previous plenary. There’s a question about what happens with DOM exemptions, and regardless of the specification mechanism for it, it seems pretty parent that DOM exceptions would immediate to return true from this predicate as well. If it would be really confusing for users if something from the platform versus the language -- like if an error from the platform versus an error from the language behaved differently, so I’m fully in support of ensuring that HTML is able to integrate this and -- which is why it’s an abstract operation as well. That’s part of why it left it that way. Is able to integrate this and use its check -- and cause DOM exceptions to return true for the predicate. Whether that’s done with a host hook or internal slot is sort of, again, something we can figure out within Stage 2 or maybe in 2.7. Yeah. So now let’s go to the queue.

CDA: All right. MF, although it might have been answered.

MF: Yeah, I feel like you kind of jumped the gun on that one. This is relaying a comment from KG. KG left me with two comments. He is, I believe, sleeping now. The first one is just on DOM exceptions. Sounds like we're on the same page. Have you spoken to anybody in the HTML world?

JHD: I spoke to SYG about it, and my recollection is we were all on that same page. If not, I mean, that’s something that we would need to address, and if someone filed an issue pointing out that I think web IDL doesn’t have the error data internal slot right now, but, like, whether we need to add that slot to web IDL or HTML or do something else in this proposal so that it, you know -- that HTML and 262 can talk to each every, either way the, outcome should be that, you know, host exceptions and language exceptions both are -- host errors and language errors both are considered, like, is error.

MF: Yeah, and I guess technically, it’s a Stage 3 concern in our process.

JHD: Right.

MF: But, you know, it would be nice to not have to get there to find that out.

JHD: Yeah, and I’m happy to put up a -- like, a draft PR as early possible, even before 2/7, to make sure the HTML folks are on that page as well. But, yeah, I wouldn’t want the proposal to advance without that being -- like, to advance too far without that being worked out. So I’m very vested in making sure that that happens, invested in making sure that happens.

MF: Another comment I’m relaying from KG says that he’s still not convinced by the justification for this proposal. But it’s not worth being a sole objector for Stage 2. But if there are other people who are similarly unconvinced, he would like to stand with you in objecting to stage 2 for this proposal. And I guess since he’s not here to do that, we work for the same member company, so I would do it on his behalf.

USA: I don’t know if Michael, you were before me in the queue. But, okay, well, I would say that I really like this proposal. Thank you, JHD. I hope that this could also work for sub classes irrespective of most things, but that’s, you know, just a detail. One question that I had for you was that why -- or sort of why doesn’t this proposal talk also about checking the error type? Like, you know, once I know if something’s an error, I would like to go further and see what kind of error it is, or I might, so what about that?

JHD: Yeah, I mean, I think once you know it’s a built-in or, you know, like a built-in error, like, host and or language, then at that point, you should have the ability to check the constructor, check the name property, and so on. Those things are all forgeable. But if you -- there’s not another mechanism in the spec, like, so part of my argument for `Error.isError` is there are ways that native errors are treated differently currently. But I don’t believe there are ways that the type of the error is treated in the same way. And so I would, you know -- an alternative is that we could have something like `Error.isError` and then have type `Error.isError` and so on, but that’s adding, like, a bunch of extra methods for something that doesn’t currently have a use case, and it’s also something that in, I guess, I’m not sure if that could actually -- that probably couldn’t be added later because I think type error extends error. But so if that’s a consideration I think within Stage 2, that we can make adjustments to account for that if desired, it would require, I believe, adding an internal slot somewhere on -- in all the, like, native errors and aggregate error and what not to track the kind of error it is. But I’d have to do a lot more research, because, you know, what dOM exceptions do in that regard.

USA: Right.

JHD: And it’s also unclear how sub classes would work. So for sub classes, like, they will just work if they call super, just like a sub class of any other built-in. You have to call super to be a proper sub class and get all the slots, so, you know, there’s not, like -- it’s not clear how, like a typeError, for example, that calls soup or the error would be indicating to error that its type is type error.

USA: Sure.

JHD: So I’m happy to keep exploring that, but I’m not proposing it yet because I haven’t done the research, nor has there been expressed story before this.

USA: Okay. That’s understandable.

JHD: Thank you.

CDA: MF

MF: Brand checking is icky and we shouldn’t do it.

JHD: Yeah, I mean, my response to that is, it’s fine to have that on the record. It’s fine to have that opinion. But we already do it everywhere.

MF: Okay. My next topic is an error stacks proposal. We talked about this a little bit online, but I just want to bring it up here in plenary. Last meeting, I had asked whether this proposal is obviated by the error stacks proposal, and I think you confirmed that it would be able to do what you’re trying to get out of this proposal. And I asked that we then try to pursue the error stacks proposal and see if we can make progress on that. And, failing that, I would be okay with this proposal moving forward. And I didn’t hear anything from you about trying to pursue that further, so what can we do about that?

JHD: Yeah, I mean, I had some more discussions with SYG about that, and the -- so there’s a few things. First of all, the error stacks proposal would provide the capability, but with none of the ergonomics. That would be, you know, acceptable because brand checking most things is not ergonomic, so, like, fine, whatever. I just need the capability. But it’s still nicer to have it be ergonomic in this sense, like a predicate. But I spoke to SYG about the stacks proposal, and it seems like the V8’s position is roughly the same, that they don’t yet see the value of partial interoperability, that they still want all or nothing, and all is a sort of "boil the ocean" level of difficulty that I have not had the time to do research on, nor has anyone else stepped in to do it, to help. So while I still would be interested in seeing the stacks proposal advance, and I still believe that it should land as-is and a follow-up should specify the contents, it’s been six years or something, and nobody has been interested enough or had enough time to the research required to navigate that obstacle. So I think it’s -- this feels like a mistake that we should have rectify before symbol string tag shipped in browsers, and it’s now been like eight years or something and we still haven’t done it. I don’t see the point of waiting on stacks anymore.

MF: On the other hand, how pressing is this? Are you seeing developer demand for this? I think it’s –

JHD: It’s not newly pressing. Yeah, yeah, it’s certainly not newly pressing, but the -- I mean, how many more years do we want to wait?

MF: Some? I don’t know.

JHD: I mean, it’s been six to eight years. Like, I think -- like, I think wait and let’s see how error stacks goes, that was the original response to me given eight years ago. Is it eight? Yeah, a while ago. And that’s why I pursued the stacks proposal. I mean, regardless, I wanted stacks to be in the language, with you be you I had chose the champion it specifically because I wanted this capability, and I almost was there, and then a new constraint was added that prevented me from making any progress for many years. So I think I’m, like -- I don’t think it’s reasonable to ask to wait any longer for error stacks or to, you know -- to boil the ocean or to navigate that constraint.

MF: Understandable.

CDA: RGN.

RGN: I think it’s well-known that Agoric are sensitive to issues of membrane transparency and the interaction of proxies with other aspects of the language. For this case in particular, because the nature of errors is to generally communicate diagnostics, this exception to the general rule is actually justified, and in practical terms, doesn’t violate membrane transparency. The behavior actually makes a lot of sense, and so if you do keep it as-is, that totally works for us. The proposal in general, just on a personal note, does feel well founded, being able to detect an error instance is valuable, if not the most important thing in the world. So no objections from us.

CDA: Rob.

RPR: So there’s a -- there a prepared statement from SYG on this. It’s -- so these are non-blocking concerns that V8 would like to be resolved during Stage 2. The first of which says `Error.isError` should return true for DOM exception and its sub classes. Today DOM exceptions aren’t true sub classes of 262 error, but they have `Error.prototype` on their prototype chain, and they have special stack tracing magic that 262 errors have. It would be confusing for the web developer if `Error.isError` didn’t consider them actual errors. The easiest way to accomplish this is to make DOM exceptions real sub classes. But this is technically observable in case one deletes `DOMexception.prototype.symbol.toString` tag and then does `Object.prototype.toString.call` new exception. V8 is optimistic this is a backwards breaking change that browsers can make because who’s out there deleting `.string.symbol` delete tag. I’ll pause there in case you want to note something in response to SYG.

JHD: Yeah, just I mean, we talked about DOM exceptions. I agree with SYG’s statement, that `Error.Error` should return true for DOM exception and sub class. SYG is also correct that the only way one can determine that they aren’t subclasses is doing the symbol string tag mutation and a very small number of JavaScript developers on the planet have probably thought about that. So I agree with him as well, and I’m glad to hear V8 is optimistic that that is a change that could be made, because organize arguably that’s how DOM exceptions should have worked in the first place. And as far as -- yeah, I’ll let you continue.

RPR: And then the second concern is this method will return false --

NRO: Yeah, when we did some changes for abstract module source and imports this proposal and also the changes for trusted types, V8 brought up that it’s much better to do this type of, like, cross like host 262 checks, not structural C++ sub classes with internal fields, but a hook you would pass, again, non-object to the host and then the host will tell you whether it’s an error or not. And so, like, we tried to follow that, and maybe set precedence with this two proposals. And maybe we don’t need to change the prototype of the exception if we go through that path.

JHD: Well, DOM exception already had `error.prototype`, and the only change needed is there’s some checking in object prototype to string that checks for the internal slot. So if we -- there’s a few paths that this could be achieved, which can be worked out in Stage 2 and 2.7 and in the hTML PR. Either DOM exceptions can be given that slot and then the change SYG is describing would happen implicitly, or if a host hook is preferred, then this abstract operation on the screen would check the internal slot and also would check the host hook, and then we could, if we wanted, also in this proposal change object prototype two string to check the host hook alongside the error at the internal slot. Either -- and that’s an optional -- the object prototype two string change would be optional in that regard. Either way is fine. The slot feels to me, but I don’t feel that attached to it, and if we want to go with a hook approach, that’s fine. The end result would be the same, more or less.

??: Unless you’re deleting the symbol string tag and doing object to string call, that it would be DOM exceptions will be indistinguishable from sub classes of error with or without this method. That’s, like the goal.

RPR: And then the -- the second concern from SYG is that this method will return false for user subclasses that are shipping today that forget to call super. Interested in the committee’s thoughts on this.

JHD: And it was pointed out in Matrix, I think Dan said that the -- you the forget to call super, it will throw unless you go out of your way to return an object from the constructor. And hopefully we can all agree that that is an obscure and niche and rarely used facility in constructors. So I think that that’s correct, because if they forget to call super, they aren’t sub classes. They’re just things trying to sort of pretend to be. I mean, that’s how the brand checks work with everything else in the language that already exists. So I don’t see that as a -- personally, as a conflict. But I can go to the queue if others have a different opinion.

CDA: There’s no reply to that, but I’m just noting we have less than ten minutes. Mathieu.

MAG: So when I have talked to people, I get mixed opinions on whether or not `Array.isArray` seeing through realms is a good thing or a bad thing. You know, it -- what do we feel about this? Like, this is another instance of a cross realm brand check, and I think this would bring the count from one to two, right?

JHD: Well, all brand checks are cross realm. This a proxy piercing one, which should bring the count from one to two. Like, it’s -- like, `Array.isArray` will also return true for a proxy to an array, and it pierces the proxy to do that. That is unrelated to whether it’s same or different realm. And so the spec step 3 here in that abstract operation is the equivalent step in is error, and -- so that’s part where I think people are typically -- either this is good, this is bad, or this is weird, or I have no idea what it is. It’s one of those four reactions. And --

MAG: I mean, no, there is also an aspect of this that is, like, realm specific, though. Where it does matter if you add, you know -- you could conceivably write this in such a way that says, you know, make sure that it was constructed in the same realm. And --

JHD: Yeah, you could. But that’s not how every other brand check in language works. They are cross realm, and that’s an important feature of this proposal. There’s not only one cross realm brand check. There’s zero same realm brand checks right now.

MAG: Because you’re counting things like `toStringTag` as other ways?

JHD: I mean, there’s the internal slots there, but `Number.prototype.valueof` or `string.prototype.toString`(), if you call those on a box string object from another realm, they will work. And not throw, because they’re doing a cross realm brand check. Internal slots are also cross realm, and that’s the mechanism being used here.

MAG: Okay, I’m done.

JHD: Thank you.

CDA: Yeah, we just have a couple minutes left. I want to allow some time for summary and conclusion at the end. DMM

DMM Just sorting out my mic.

CDA: Okay.

DMM: I support taking this to Stage 2. I think the cross realm case is actually extremely useful. At the moment. We have perfectly good ways to do this down at the engine level, but not idiomatic ways to do it at the script level, and we’d like to depend more on running things in separate realms and being able to check properties like this easily from a script that has been given a value. So, yes, I strongly support it.

CDA: All right. I am a +1 on the queue. Current state of duck typing is finicky, so like anything that moves the needle on this to make it a little easier. DE is on the queue.

DE: So I wanted to comment on what was raised a while ago about the error -- relationship between the error stack proposal and brand checks. So I think -- I think having predicates for brand checks is generally a good idea, and I’m glad that we have it proposed here. What I’ve been a little bit more uncomfortable with is when making a new proposal, that introduces new kind of object that does have a brand, some people in committee who want brand checks to happen have been asking champions, please make sure you have an operation that happens to check the brand as a requirement for the proposal. It’s a very weird middle point, because we both can’t have an operation that explicitly checks the brand, like `Error.isError` style, because some people object to brand checking and can’t not have an operation that checks the brand because of this actually directly critically requirement, so we should definitely a make a proposal -- make a decision as a committee about which way we want to go and not make these directly contradictory requests of proposal authors. This is one of the kinds of things that makes it complicated to champion a proposal. So hopefully we’re making that larger decision here about, well, about are we, you know, requiring or prohibiting brand checking for things. So the relationship between this check on is error and error stacks is because error stacks would be a way of kind of sneaking in a brand checking operation for errors, which is a weird thing for committee to ask for people to do, because it only makes sense if you’re trying to solve for that particular contradiction, where both requiring and prohibiting brand check operations at the same time. So, yeah, I also think the primary benefit of error stacks would be not enabling that brand check, but instead having more interoperability about the way errors work and the way you program around them, which is I guess what had been asked previously from browsers. Thanks.

>> Thank you.

CDA: All right. I think those are some really important comments from DE, which I agree with. We are right at time. But I do want to just briefly give the folks on the queue, if you could be very brief, please go ahead, MAG.

MAG: Yeah, I just wanted to echo this, that, like, when we make decisions, we should be better about writing them down and then sticking to how we decide this, and having less ambient, you know, the committee -- parts of committee X, participants of committee find Y, we find compromise in the middle and re-evaluate it every time we come back it to.

MF: I’m not comfortable committing to what DE suggested and saying this is precedent setting. I think for each of these brand checks that we have admitted, that we have asked the champion to individually justify them, and I think we should continue asking that other objects be introduced that could be brand checked and need to have a justification for adding a brand check. Now, some of us feel differently about whether this justification was sufficient, as I said earlier, my colleague KG feels that it was insufficient. But I think the committee as whole has come around to allowing it, but it shouldn’t set precedent for other types of objects.

CDA: Dan.

DE: It’s fine if we say that this -- we’re not today deciding that everything gets a brand check always. But I would like to leave the parties that strongly disagree with each other with the action item to get together, talk it over, and develop a proposal for common path for future tC39 proposals rather than the current thing, where we’re both required to have brand checks and prohibited from having unjustified brand checks, because that is a weird and contradictory state that actually nobody’s asking for, it’s just sort of going through the maze between people with differing opinions. So can JHD and Michael and other people who also have strong opinions about this, can you commit to working together on this?

JHD: Yeah. I’d love to talk more about it.

CDA: Yeah, I think that’s a great suggestion. Thank you, DE. All right, we are past time. JHD, could you -- well, I think actually we need to -- I think you want co-to call for consensus.

JHD: My question is can we have Stage 2 for this with the understanding that DOM exceptions will be considered errors and HTML integrations will be worked out as soon as possible and slot hook can be resolved during Stage 2.

CDA: I support Stage 2.

CDA: You have plus one from Daniel Ehrenberg. Plus one from DMM. Plus one from Chip.

JHD: Thanks, everybody.

CDA: All right. So you have Stage 2.

NRO: Don’t forget to ask for reviewers

JHD: Anyone like to volunteer to be a spec reviewer? Don’t all step forward at once.

CDA: ACE has volunteered, SRV has also volunteered. I think that’s all you need for now.

### Conclusion

- advances to Stage 2
- There are still concerns in the committee about brand checking
- DOM exceptions and all host errors will be considered errors by this predicate
- integration with HTML will be pursued as fast as possible
- this does not set a precedent for brand checks one way or the other
- action item: interested parties will have further discussion and try to agree on a consistent design principle around brand checking moving forward.

## `Promise.try` and `Regex.escape` addenda

RPR: Just before we switch back to Nicolo. I need add things to the notes for the previous two things before this, before is error. On `Promise.try`, SYG had a prepared statement saying that V8 has no concerns for Stage 3. And then on `Regex.escape`, likewise, V8 has no concerns for Stage 2.7. As for character versus ex-code escapes, V8 can live with either outcome, but weakly prefer character escapes, and the future stability argument as far as I understand is that choosing character escapes makes changing the behavior of character escapes in the future even harder, but it is already very hard to change non-throwing behavior to new non-throwing behavior. We don’t understand why this would make it meaningfully harder.

## Deferred import evaluation for stage 2.7

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-defer-import-eval/)
- [slides](https://docs.google.com/presentation/d/1EjV6QbT4bvcOdWj-gCLwP5fcEWRfewzbrI3vOI11LA8/)

NRO: So what is this proposal, it allows you to import modules while skipping evaluation, and only evaluating them when you actually need to read their exports. The syntax look like this, which is
`defer` keyword, and this import actually doesn’t execute that until later when we will actually reuse it. And reminder that the proposal only supports deferred imports with namespaces so that evaluation happens on property access and not on binding access. What is the motivation? As apps get larger, the cost of the evaluation becomes significant. And so being able to skip this can give some noticeable advantages.

NRO: Last time this proposal was presented it was blocked on the top level await semantics. We went through the alternative options again with the interested parties is and we concluded that the proposal should remain as is. What does as is mean? Well, when you do an `import defer`, we need to eagerly pre-evaluate with sync parts of the module graph so that the later execution can happen synchronously. So `import defer` doesn’t completely skip everything, it’s just the best for optimization. What does this mean for best practice, it would have this at the top and dashed arrows representing deferred import -- and the entry point, we need to look for its dependencies and in the case, the dependencies need to be evaluated would be the eager dependencies, so the one on the right, and the sync dependencies of the one on the left. So we start evaluating them. And then later when we actually trigger evaluation of deferred module, some of its dependencies will have been already evaluated and we only evaluated the missing parts. In practice, this means an import deferred statement is equivalent to splitting it into multiple imports. One when we first link everything and individual imports if it’s a synchronous dependencies. The other potential approaches that were considered were (a) to disallow
`import defer` from a module that has async dependencies, and the problem with this is it makes the two features completely incompatible. And the other potential approach was to disallow `import defer`
from module a has async dependencies not yet evaluated, so if you import the async dependency first, you can defer the rest. And the problem is that maybe somebody else is importing your async dependency and you don’t really notice. So maybe it works and then you remove some other dependency and it stops working. Actually, Ashley, if you want to set up the board, you know that you experimented with this approach in the past.

ACE: Thanks, NRO. Yeah, so Bloomberg, we kind of have a vision of the hypothetical future of this, because we were in a position for many years where we had both asynchronous modules and also a way of synchronously importing modules. And what we found was a variety of things. So one, both these features were used. And problems arose. Either something would be synchronously importing something, and that would work fine because either the thing they were synchronously importing was not synchronous and it was fine. Or the thing they were importing was asynchronous, but something else had already load it, so it wasn’t an issue that they were synchronously importing it. With both of those situations, in, the future, those things can change, so either the thing that was previously importing the asynchronous module allowing the synchronous import to work would stop, they would stop having dependency or maybe it would happen later, it would happen in a few ticks later, and suddenly now that synchronous import would explode, and from their point of view, they did no, they didn’t can change their dependencies, change their timing, but it would work or month work, or an asynchronous module was introduced and then it would suddenly stop working. So this didn’t put people off trying to use synchronous require. They wanted to the try and implement -- you know, in common a case, laziness, they’re trying to import those things when they’re really sure they need them because they hit the control flow that needed it. So people started being very defensive. They started adding lots of imports to their module, not because they need those dependencies, but because they suspected they needed to import these things to make their later synchronous imports work. So you had this kind of odd coupling and then with saw, and this on its own isn’t very pleasant. You have this weird import of modules that aren’t to do with this module but we also saw other bad things arising on this, and people were importing too many thing at the top. They were importing more modules than just the asynchronous ones or they were importing the synchronous ones and then the asynchronous ones stopped being asynchronous and it’s -- and it’s very marred to know who your subdependencies are. That the subdependency tree is changing and the state of that module tree is constantly changing, as other people have imported, have they not. So for us, when we were building the kind of engine mechanism more this solution, we went for this module where the module graph knows which things asynchronous and it will do that. So when it -- when the code is synchronous importing, we think the module kind of system is the best actor in this whole game to know exactly which thing should be imported. Not the person asking for the dependency. Thanks, NRO.

NRO: Thank you. So, yeah, so why are we doing this proposal and not just dynamic import. I should have had this slide earlier. Dynamic import is great. It’s actually better in many cases because it can avoid skip much more, such as loading, and the problem is it forces you to make the code asynchronous and it’s much more difficult to adopt. And dynamic import has been there for, maybe six years now, and still, we’ve seen that there have been problems with adoptions due to these changes for the whole codebase. So we’re looking for something that’s easier to adopt. And this is where import defer comes from.

NRO: The top level await semantics can cause complexities, and it’s not clear which import statement gets evaluated. And the module graph is already very complex. It’s not easy to figure out why some application is being included in your bundle. If you can skip it in some way, whether a module is asynchronous or not, and there are many tools to answer these questions, like webpack, for example, tells you what is being imported and why and how much it waits on your bundle size or, for example, it prints a whole tree of all the modules imported and which of those are imported multiple times and how much they weigh on your application. But there are -- with this proposal, there are other questions that you might want to answer. Such as how much time does evaluating a module take. So is it worth the try to defer it, or maybe using import defer somewhere and it is not being deferred as expected. So we believe browsers devtools can provide some help with answering this question. We have a prototype for how this can be done. This is a small app with import defer from some modules that affect the allotted start of time. And let’s see. And, like, we could have this type of dev tools maybe somewhere in the performance panel where we request see, for example, main has these dependencies and some of them are being deferred and it’s triggering evaluation of this module and this module, then we see, oh, actually, there is something that’s here, so we check what this module and we see, okay, this module has to evaluate and it's imported through this deferred chain coming from main.js, and then it took some time to evaluate, and maybe later there was the evaluation of something else and this deferred execution was caused by this point in the app. We believe browsers can -- well, we believe dev tools can help even though import defer adds more complex space.

NRO: Okay, so there are some changes since this proposal was last presented. We found some bugs within the proposal. One of them was rated to reentrancy. So the current module evaluation assumes that it’s the synchronous part of the evaluation is not reentrant. So when you start it, there is no module in your dependency that are currently being evaluated. And the previous version of the proposal was breaking this assumption, so specifically if we have a module graph like this where we have a cycle containing a deferred edge, so in this case, when you want to eval this graph starting from 8, A moves to its evaluating state and then B, and then we assume that before finishing relation it triggers evaluation of C, and C becomes evaluating and C becomes evaluating and when T goes to check its dependency, it finds B in an evaluating module and this signals that there’s a cycle. When there’s a cycle, we transition all the modules in the cycle, and we evaluate all the modules in the cycle and transition them to an evaluated state. So in this case, C would transition to evaluated, and then we cannot transition B evaluated yet because the evaluation of C completes in the mean tool of evaluation of B. And so, like, for example, what if B throws after that, the evaluation of C has been triggered. Then D would have a dependency and be there a successful state. So due to this reentrancy problem, we decided to prevent you from evaluating a deferred module if that has cycles with modules that are currently in their evaluating state. In this case, trying to evaluate C would be an error before performing an evaluation. And this is the same approach for the `require(esm)` of implementation in Node.js. Actually, we found that, for example, evaluating this implementation, these -- this Node.js was cousin V8 to crash.

NRO: And the second change is that now this disallows reads from modules that are evaluating are in the stage. And this might have thrown, might not throw, depending on whether the access was triggering the evaluation of the module, and in that case you would find the error and you see the property from the module, in that case, you would maybe for the value, if the value was defined before if error in the module or maybe get a Temporal that was a variable twinned after the error. So now to prevent this raciness, this difference that’s difficult to predict, whenever the axis properties from the defer of a space of a module that cannot be successfully evaluated, so it throws or that already in the past, it’s always going to throw an error, so this is guaranteed to throw. There’s a consequence of this that, well, existing in spaces do not behave like that. If you have today a space of a module that threw and you can get that through cycles, then you would access -- accessing properties would not necessarily throw. So each module -- in order to do this, we had to create two main space objects per module. Name space objects can be created lazily only when needed. So that one can have this throwing behavior. This means that the identity of this deferred space and eagerness space is not the same. We have complex specs and they reviewed the changes. Editorial reviews are ongoing. Thanks, Michael, for already providing your feedback. And to the queue.

KM: I guess my question, and I understand in the last slide why should we allow a module to be loaded but deferred and not deferred? Or is it just like you’re trying to get around -- you’re trying to show it in a localized case but it’s different modules.

NRO: You have two different modules, maybe two different levers with the same shared dependency, you cannot control what the other lever is doing. If you have, like, your module A tool libraries B and C and B and C have a shared dependency C, maybe C would want to import C and then import D and then in your specific case, you have C and D is not the actually deferred but for other consumes or B, it might be deferred.

KM: Okay, thanks.

RPR: This a prepared statement from SYG, V8 has no blocking concerns. And then a separate question for the room, how do other implementers feel about PR43? Is this a correctness foot gun? To people use name space objects as map keys?

NRO: The thing that SYG is concerned about you put X1 in the map and you try to get it out with x2 and it doesn’t work.

RGN: Can you repeat that. I don’t think I understand the association of this pull request to module name space.

NRO: Per this pull request, X1, X2 would be the same object. Maybe with one in the map, you could get it out with the other variable. And now there are two different objects so you cannot.

RGN: One of those objects exist already and one of them would only exist via this proposal.

NRO: Yeah, it’s not a backwards compatibility concern. It’s not about, I guess, maybe two people tried to put them in a map and use them as keys.

DE: These are relevant for non-implementers too. So I -- I can’t really think of why you would care about the identity of these things matching. The important thing is that the underlying module has the same identity, and it -- I would imagine that it might simplify implementations if they -- you know, the spec has a common path, a common sort of class for import and import defer modules, but unifying those, I don’t know whether that makes sense in actual implementations or not. It might be easier if these are separate, even.

CDA: I accidentally advanced the queue. I guess somebody else clicked as well. So I think we’re still on the previous topic. There’s a reply from JHD.

JHD: Yeah, just can you help me understand why this solution necessitates two distinct namespace objects?

NRO: Yes, in this first example, let’s assume we also have NS2, which is a name space for this object, but that’s obtained through, like, ES6 methods. So you have this NS2 that’s a name space for module that throws that you obtain not through the proposal. Accessing NS2 will not throw an error. This in practice is not confusing because it’s very difficult to get a handle to if name space object of a -- and you need to do a data cycle and then in the cycle, leak name space, for example, like, [INAUDIBLE] global object. However, with import defer, it’s much more common to get access to name spaces for modules. That might not have been successfully evaluated because you don’t need cycles for that anymore. You have the direct import defer statement. Given it’s more common, it would be good if they consistently throw rather than throwing in some non-deterministic way whether the module has been deferred. So they -- it would be good for them to have two different behaviors. Or well it would be good for the new one to not follow the behavior of the old one. And so they need to have two object identities.

JHD: Is there no possibility of getting the desire throwing behavior without creating two distinct objects?

NRO: So the problem with that is that when you have the name space of a module that is being evaluated, in fact, like classic module, you don’t know yet whether it will throw or not. So it will be unfortunate to first let you -- get properties are it while it’s being evaluated and market it as, okay, now it’s failing and you cannot get properties from it anymore. We considered that approach. And, like, this current evaluation.

CDA: Luca.

LCA: I also find this unfortunate because I don’t know, it’s a nice property. This looks kind of weird. I understand why it’s done. I think it makes sense. I sort of agree with it. But I don’t know, I just want to say it’s weird. I find it weird to have two name space objects for the same module.

DMM: I -- oh, because I’m in person. I’m trying of get my head around the precise details of this. Are we requiring that imported name spaces and deferred imported name spaces are always distinct or only they’re distinct during that stage where things are unresolved? If I have already imported -- if I have resolved the deferred import, will I need to keep two copies of that name space in some way so that they can be checked or can I, once the import is over, discard one of them and just return a single one?

NRO: I think it’s an important property that once you observe the identity of two objects, that doesn’t change, so if they start being different, they don’t become equal later.

CDA: All right, was -- I couldn’t tell, was somebody still speaking? No? Keith.

KM: Yeah, I also don’t necessarily think it’s blocking. I think it’s kind of weird and unfortunate as other people said. I guess I’ll go on my next topic, which is I guess why couldn’t implementation sort of treat the deferred name space, like, if anywhere in graph -- I guess you wouldn’t know up front, but if anywhere in the graph has a deferred module, like, under the hood, treat it like a TDZ access and then you just at the time you access the name, like, in the same way that, like, array length works right now, where it’s actually a hidden getter, and it will, like -- if it sees the empty value for that slot, it just goes and calls the thing. Does that make sense? I don’t know if that makes sense.

NRO: Do you mean that the error, is, like, access NS or property access NS.

KM: When you do property access on -- yeah, on NS. Right?

NRO: Can you ask that again.

KM: Can I -- what, sorry? Do you want me to say it again? If I understand the problem space correctly, and maybe I just don’t understand what’s happening also, so -- but so the issue is that, like, some NS throws when you go to evaluate it, right? And you have -- it’s not so much, like, when you access `NS.foo`, instead of being a separate name space object that has, like, different properties, if the module hasn’t been evaluated yet at the time the temperature happens, like, the engine under the hood, for all the namespace properties that it wants, it makes them, like, hidden getters, right, in the same way array length is a hidden get more all implementation and if value was never filled, it goes and evaluates the module, right? And everybody still sees the hidden every loader version -- and if anybody wants to strictly load the module in the future, they fill in all the hidden values on the same name space object. You only ever have one name space object. Is does that make sense?

NRO: Yeah, that was exactly the version for this pull request. But, like, again, the problem there that if the module -- if you do `NS.foo` and the module -- hopefully it’s FU and then throws, you would either get the error or not, depending on whether somebody else evaluated the module or not. If the module is not validated yet, the getter will throw. Like, it will be FU and as part of its completion, it will throw an error, while the FU is already present, then it would have just threatened as this. And this means whether the error is observable or not is depending on code that you didn’t have control of, and then maybe you changed some other dependency and your module stops or starts throwing.

KM: I see. I guess one solution, and I don’t know that this is possible, would be to have every module be in that mode. Like, in the deferred, like, state I’m describing with these hidden getters and you remember the error and you would just rethrow the error the second time. Or is that –

NRO: That’s what this does.

KM: But you wouldn’t have to have two different name spaces?

NRO: No, you would have to change the behavior of name space objects, because name space objects currently do in the remember that error, like, classic name space objects.

KM: Okay, maybe I just don’t understand the problem and I’ll have to come back later.

SFC: Regarding the question of the object identity, it seems like this is the kind of tool that it seems like is useful for, like, taking an existing module graph and trying to make it a little bit more efficient, by, like, adding in these import defer statements. If that -- like, I feel like a property that should be upheld is, like, if I’m -- if I have a synchronous module that I’m importing, and then that -- that module that I’m importing changes between having import and import defer for its own dependencies, I shouldn’t see any observable change from my side in terms of, like, object identity or anything like that. I’m not sure if that is being upheld or not. Maybe you can clarify that. If that made any sense, what I just said.

NRO: Yeah, so the -- if you have, like -- yeah, the dependency, the identity of the module you’re importing, then that itself is using import to import defer, I would not change. Like, what observe is if the module is reexporting the name space of its own dependency, then that has a different identity than before because now it’s that deferred name space.

CDA: Ashley.

ACE: Is this working?

CDA: Yeah.

ACE: In case this is useful for anyone that’s disgusted by the two separate identities, at for bloomberg and I suspect other non-native ones, if you’re emulating modules in user land, people with bundler or something similar to that, it’s beneficial to us slight optimization point view for these not to be the same object. The import defer is likely to be an import object and make a getter and setter and maybe a proxy and it’s going to have slightly slower property access, and this is very well optimized, whereas the direct import star in cases where it’s like a trivial name space, no cycles and things, that can be really, really simple object. So the fact that that tooling doesn’t -- is allowed for these two objects to be different is a kind of nice little performance win. I also like the consistent error semantics I like it from a semantic point of view and implementation point of view.

CDA: Daniel.

DE: So given all the skepticism about adopting the semantics in 43, maybe we can accept the slight inconsistency that is documented here in favor of on your avoiding the other inconsistency. Is there a big problem with that?

NRO: I believe that’s up, like -- like, it’s observed very rarely, as in two property axis and nothing else. I would consider trying to race conditions to be more important. Unless somebody have some strong problem with this. And as ashy mentioned, as advantages, these are two polyfilled.

DE: Right. I have to say, I’m a little bit surprised by the response, by the concerns about it, because I think the principles that Ashley is talking about would also apply to native implementations being easier. But if people view this identity as very important, maybe the -- it’s hard for me to understand how bad the race condition that you’re saying is. If we’re choosing between one or the other, given that we can’t go back and make it an error to read a property on the module object.

NRO: Check box. We’re at time, by the way, so there’s still of a bunch of topics in the queue.

JWK: Webpack generates different module namespace object for each import site, so if you depend on this, that’s already broken for webpack users. I don’t think it’s really a serious problem. (Note: only for ES namespaces generated for CommonJS modules)

NRO: I’m surprised to hear this. I thought the web pack would crash the namespace object if you use it. But still, do you know if this caused any problem to web pack users?

RPR: Yeah, Jack, the question was do we know if that -- if those multiple identities have ever caused problems for web pack users?

JWK: Hmm. I don’t think there is one, but I need to verify.

NRO: And, again, I’m surprised by this, but thank you.

RGN: All right. Thanks CDA for doing to your best to create a cycle in TCQ.

CDA: I was talking with somebody about this, a lot of people don’t click they’re done, and if a chair advances at just the right time, there’s a race condition and we both click the button and we end up advancing the queue past where it’s supposed to be. So another TCQ reloaded feature we are looking forward to not having that be a problem anymore. Please go ahead, rGN.

RGN: Yeah, yes, it’s actually convenient for this. I want to offer some kudos for catching the reentrancy bug. And pointing out that this actually highlights the need for us to have general reviewer guidance specifically to look for them. Because it’s a subtle area, and it’s one that really matters for a lot of proposals. I do support the resolution in this case. I think it makes a lot of sense, and it looks good. That’s all.

CDA: LCA.

LCA: Yeah, while we were talking about the namespace thing, I do want to bring all third idea that I was talking to with some champions offline, that I don’t think we should do, but I wanted to bring it up for completeness, which is we could also say that none of the module namespace accesses throw ever, including the first one, if the module does not evaluate correctly with defer. So we would essentially just capture this error and it would never get exposed to user code and we just consult the error or something. And this is very weird, and probably fails in more cases, but, yeah, this is also an option.

CDA: Hax. Oh, that could have deleted.

NRO: I think the question was answered in Matrix already.

CDA: Okay, great. Well, that’s it for the queue.

NRO: Okay. So if there's nothing else, I’ve heard specifically in the pull request I’ve heard the opinions in both directions. Well, preferences in both directions. I would -- given that none of them is blocking, I would prefer to go ahead with this as proposed here. Because I believe it can -- it would cause less confusion, and not more. So, yeah, I’m asking if we have consensus for 2.7. It would be conditional on the spec editors finishing the editorial reviews.

CDA: LCA.

LCA: Yeah, I’m in favor of this going ahead for 2.7 as is. I think the proposed PR43 behavior is better than the pre-PR43 behavior, even though I think it’s weird, and nobody proposed anything better, so I think we should go ahead as is.

CDA: All right. Just quickly scanning the queue, if there’s anything besides plus ones, and there is not. You have a plus one from me for 2.7, plus one also from Richard. Also from duncan with a comment, weirdness, this is better than race conditions. That is it for the queue. You have 2.7.

CDA: NRO, can you can dictate a summary and conclusion for the notes, please.

### Speaker's Summary of Key Points

The proposal went ahead with its original top-level await semantics: `import defer` will eagerly pre-evaluate the asynchronous dependencies. In addition to that, there have been two changes since last time:

- throw in case of reentrant evaluation (this was a spec bug because it was violating multiple spec assumptions)
- `import defer` now gives a different namespace object than classic import namespace object you get from `import *`, so that property access can offer module evaluation throws can always throw rather than only throw if you happen to be the first one evaluating that module.

### Conclusion

We had consensus for Stage 2.7, including the two additional proposed changes.

## GitHub Teams Notice

JHD: I wasn’t here this morning, but the reviewing the GitHub teams, I can…

CDA: Yes, please review GitHub teams, and actually, who was it? I’m wondering, there was somebody from last time that -- where we had discovered that their GitHub team was woefully out of date. Was it -- maybe I shouldn’t name then on the record.

JHD: There’s a number of GitHub teams that seem out of date, so it would be ideal if you reviewed your own employer or member company’s GitHub team. And if you are not the point of contact for ECMA, then please poke that person to file the appropriate onboarding and offboarding issues. That’s all.

CDA: Yes. I will say that it’s not necessary that you are the GA rep to do that. If you know that,folks have left your company and are no longer delegates, please don’t let that stop you from filing an off boarding issue. Great, we will see everyone tomorrow at 2 a.m. Chicago time. Thanks, everyone.
