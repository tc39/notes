# 113th TC39 Meeting

Day One—10 March 2026

**Attendees:**

| Name               | Abbreviation | Organization       |
|--------------------|--------------|--------------------|
| Aki Rose Braun     | AKI          | Ecma International |
| Ashley Claymore    | ACE          | Bloomberg          |
| Ben Allen          | BAN          | Igalia             |
| Chengzhong Wu      | CZW          | Bloomberg          |
| Chip Morningstar   | CM           | Consensys          |
| Chris de Almeida   | CDA          | IBM                |
| Dan Lapid          | DLP          | Cloudflare         |
| Daniel Minor       | DLM          | Mozilla            |
| Dmitry Makhnev     | DJM          | JetBrains          |
| Eemeli Aro         | EAO          | Mozilla            |
| Guy Bedford        | GB           | Cloudflare         |
| Istvan Sebestyen   | IS           | Ecma               |
| James Snell        | JSL          | Cloudflare         |
| Jason Williams     | JWS          | Bloomberg          |
| Jeffrey Posnick    | JPO          | Bloomberg          |
| Joe Sepi           | JSI          | Cloudflare         |
| Jonathan Kuperman  | JKP          | Bloomberg          |
| Jordan Harband     | JHD          | Socket             |
| Justin Ridgewell   | JRL          | Google             |
| J. S. Choi         | JSC          | Invited Expert     |
| Keith Miller       | KM           | Apple              |
| Lea Verou          | LVU          | OpenJS             |
| Linus Groh         | LGH          | Bloomberg          |
| Mikhail Barash     | MBH          | Univ. of Bergen    |
| Nicolò Ribaudo     | NRO          | Igalia             |
| Olivier Flückiger  | OFR          | Google             |
| Peter Klecha       | PKA          | Bloomberg          |
| Philip Chimento    | PFC          | Igalia             |
| Richard Gibson     | RGN          | Agoric             |
| Ron Buckton        | RBN          | F5                 |
| Ruben Bridgewater  | RBR          | Invited Expert     |
| Samina Husain      | SHN          | Ecma International |
| Stephen Hicks      | SHS          | Google             |
| Waldemar Horwat    | WH           | Invited Expert     |
| Yagiz Nizipli      | YNP          | Cloudflare         |
| Daniel Rosenwasser | DRR          | Microsoft          |
| Jesse Alama        | JMN          | Igalia             |
| Kevin Gibbons      | KG           | F5                 |
| Michael Ficarra    | MF           | F5                 |
| Mark S. Miller     | MM           | Agoric             |
| Rob Palmer         | RPR          | Bloomberg          |
| Shane Carr         | SFC          | Google             |
| Zibi Braniecki     | ZB           |                    |

## Opening & Welcome

Presenter: Rob Palmer (RPR)

Now your video is just a video of the brick wall.

RPR: That is the podium. I think. So CDA will appear. Can you view 2CQ whilst I'm doing this? Because I won't really have the best. Okay. So we're very nearly ready to go. We're one minute to go time. We think everything is set up except for the microphones, the I think the lapel microphones work, and you need to talk into the pointy end, the end of the stick. However, the regular microphones we've not yet confirmed work. Could someone have a go using one? Maybe Peter? Or Jeff?

RPR: Testing, testing, testing.

RPR: Testing. Okay. All right. Seems like the microphones do work. All right. And it is 10:00 AM in New York. So we'll officially say the 113th meeting of TC39 is beginning. Do we have our host, Justin, in the room? I guess he's probably downstairs helping people in. But nevertheless, we will begin. So welcome, everyone, to New York. It's been a while since we've been here last. I definitely remember coming here for the Masonic Lodge. That was a memorable one with Kanye. And it was at Kanye or yeah, it was? Okay. Good. So we're here back again. Today, I will reintroduce you to your chair group. It's remained the same for a while now. And also, we'll be reelecting. We have elections coming up for the chair group, the editors, and the conveners that Samina will handle. So in the room today, we have Rob, myself. We also have coming in from Chicago is Chris. And then on the call, we will have at times Ujjwal. I know Dan Minor is here. And we have as a facilitators, we also have Justin and Daniel Rosenwasser, who is here in the room as well. So this is an amazing turnout. All right. Everyone that's here, even if you're in the room, even if you've been allowed access to the building, please use the entry sign-up form on the reflector. You can find that in the matrix room. It's the headline post, the subject of the room to get to that. But just go to the reflector, and you'll see the main details. On there, scrolling down, I think we should probably make it a bit more prominent as Nicolo says, is the link to the video form. And it's always useful to be in that, particularly if you're presenting. You will need to be signed in in order to get your slides up. And AKI appreciates it too. We use this for attendance tracking, which is an important rule of ECMA meetings. We also have a code of conduct on our website, TC39.es. Please aim please read it. And please aim to behave in a way that respects the spirit of the document. We're not trying to litigate how close to the line you can go. And the summary is, as Bill and Ted put it well, be excellent to each other. Our daily schedule is a bit different to normal. There is a change. So please I heard an echo in the room. So please just recognize that lunch is an hour later than our normal schedule. And we've done previously. So lunch will be between 1:00 and 2:00 PM. We'll also be doing short breaks in the middle of the morning session and the middle of the afternoon session. Is Justin in the room? Does anyone from Google want to talk about the room logistics? What happens if there's a fire? I see a red exit. Please follow the signs. Okay. So Chris corrects me. The break is at 3:00 PM. Does anyone know where the bathrooms are here? Okay. They're left. And all the way around to the left, as you leave the room. Okay. We are using our regular comms tools with a small twist. So we as always, to manage our agenda, we have TCQ. Please use this. If you wish to speak, and also to see what's coming up next, the chairs do our best to reorder the queue dynamically as and when we see things. When you're using TCQ and you're participating, in the tab that shows the participants rather than the entire schedule, you will see these four buttons. When you're speaking, there is a button that says, "I'm done speaking. Please don't use that." The chairs will move things on. And in terms of the buttons, generally, please prefer the buttons on the left because they are lightweight interventions, like a new topic or discussing the current. Please only use the ones on the right, or in particular, the point of order, if you need to stop the meeting. Such as if, for example, the notes have stopped or there's something that's highly pressing and needs to stop the show. We also have our matrix chat for real-time communications. So this is a little bit like Slack, a little bit like Discord. With encryption. Please make use of this. The primary channel for work is TC39 delegates. The primary channel for not work, so for off-topic, for jokes, for things the bot said, is temporal dead zone. TDZ. The mascot of which is an opossum. We have an IPR policy that hopefully everyone has read. The key thing is that the regular form of membership, where you will have already signed this, is being an ECMA member and being an employee or a delegate of an ECMA member company or entity. We also have invited experts. Which are those people who have gone through the process, who have signed the form, been approved by the ECMA secretariat, and then sometimes we also have observers I know that some of those have been listed on the ECMA invite. If in all cases, please make sure that you have signed the royalty-free task group form. And observers are expected to not speak. And to not make a legal contribution to the meeting. All right. I'm going to read out some special words about our notes. The twist with today's meeting is that we do not have our normal transcriptionist, as provided by the third-party company. So instead, we'll be using the built-in note-taking that is built into Google Meet Chris, can you confirm that that's been enabled?

RPR: No.

RPR: Okay. We will be asking our hosts who are also the authors of Google Meet or the company that has created it to turn on the transcription there as a backup. But for live notes, we'll be using Kevin Gibbons' Whisper transcription to make up for the lack of our human transcriptionist. I hope that is okay. So a detailed transcript of this meeting is being prepared and will be eventually posted on GitHub. You may edit this at any time during the meeting in Google Docs for accuracy, including any comments, which you do not wish to appear. You may also request corrections or deletions after the fact by editing the Google Doc in the first two weeks after the TC39 meeting or subsequently making the PR in the notes repository or contacting the TC39 chairs. One of the things that we rely on even with the official or the automated transcription is humans to provide attribution, to say who is speaking, to add the notes there. Plus, to make any corrections and so on. It's a fun activity. We always ask for volunteers. Can I ask for volunteers now to begin the morning session? We have a hand up from Jon Kuperman. We have one note-taker. Could we get one more, please?

RPR: Uh-oh.

RPR: And ACE as well. Thank you, JKP and ACE. The next meeting we have coming up is hosted by JetBrains. That is in May. It is in Amsterdam. So please fill out the interest survey for that. We have already the chairs have already established there is enough interest for this to go ahead. But it's always good to communicate your intents to other people because there may be people out there who will only go if they see your name on there. So be the attractive party maker that you can be. So very much looking forward to that. And I think AKI may have also done a reminder that it's worth booking up your accommodation travel soon. Because Amsterdam is just naturally a little bit expensive at that time of year. So yeah, strike soon. And we will be posting the invite on the reflector. All right. So let's get to the usual bits. We've done our ask the note-taker. We'll now seek approval for the previous meeting, which was held in January. Are there any objections to approving the notes from the previous meeting? I think I'm hearing no objections. So we can say that the previous meeting notes are approved. Next up, adoption of the current agenda. Are there any objections to adopting the current agenda?

SHN: RPR?

RPR: SHN?

SHN: Can you hear me?

RPR: I can hear you in the room. I don't know if you're coming through via the lapel. You may need to.

SHN: I just want to point out that on the agenda, after Secretary's report, everybody should be aware we're going to be voting. It just was not highlighted.

RPR: Thank you for that clarification. Yes. So after the Secretary's report, we'll be doing the elections for editors, chairs, and conveners. All right. So we've adopted the current agenda. And we will now move to the next item is SHN. With the Secretary's report.

## Secretary's Report

Presenter: Samina Husain (SHN)

* [slides](https://github.com/tc39/agendas/blob/main/2026/tc39-2026-009.pdf)

SHN: OK, thank you. I'm just going to share my screen. Give me a moment. OK. Very good. First, thank you very much to Google for hosting the meeting. As always, it's wonderful from all our hosts. Thank you for the room and the food and all the entertainment that we'll have as the days go on. Also want to comment on the next plenary coming up in Amsterdam. So thank you to JetBrains for hosting that. You made a comment about booking rooms early. Yes, that's really good. But I must say, I don't know what's more expensive in New York or Amsterdam. I'm still struggling with that one. But maybe it could be New York.

SHN: All right. I have a very light agenda for the Secretary's report. We met six weeks ago and the start of the year. So it's a bit of a light report. I just want to give an update to remind everybody on the 30th of June, GA, and the approvals of your new or the next editions of the standards. Some new items, the usual annex, and then we will follow that with elections. For the chairs and editors. For the GA approval, as you all know, on June 29, June 30, will be the next General Assembly. It actually will be the 30th or 29th will be a different set of meetings. To make sure that your next editions the 17th and the 13th edition of both your standards are good to go. I had made an error in my previous slides, which I presented in January. It is the end of March that you do need to freeze your specification as you all know. The 60-day opt-out and 60-day review period is what you need prior to the GA, the executive committee meeting will be held on the 31st and 1st of April. 31st of March, 1st of April coming up in about three weeks. So it's always good that your specs are frozen by then so then we also bring it up to the executive committee that they're aware that it's going to be proposed to the General Assembly for approval. And it should be part of your chair's report. Just highlights what's happened over the last weeks. FOSDEM 2026, I think some of you may have been there. Some of you may have been presenting topics related to TC39. There was quite a lot done for TC54, a technical committee that some of you are aware of. Some of you are active. We had a one-day workshop hosted by AboutCode. Talking about PURL, VARS, and Cyclone DX, which is the first and the second edition that was published in December. So it was very good. We had over 100 people in that workshop thanks to AboutCode. And then ECMA sponsored a social event that evening. Right after the workshop which generated a lot of interest not only for ECMA but also standards. The new standards SBOM is very relevant. It may touch some of your other organizations, not necessarily TC39 specifically. But it is a very important topic very relevant for the European regulations. So keep that in your mind as you think of things for SBOM, Cyclone DX, and if you want your organization to participate. It's a very strong committee. We will have a new co-chair in that committee CDA will be the co-chair for TC54 along with Alyssa Wright from Bloomberg. TC57, HLSL, which is the high-level shading language. That will officially start on the 17th of March. With participation from Igalia, Google, and Microsoft. We are looking forward to a few new members to join. But it's also looking to be a very attractive and active technical committee. So please keep your eye on that if that is of interest for your organization. And last on that list is ArkTS, which is a proposal that came in from Huawei, one of our ordinary members while I was in China. I have brought this up in our last TC plenary meeting. I just wanted to bring it up again that this topic hasn't gone away. I am waiting for more details on this topic. And I would like Huawei to provide a more detailed scope of work program of work. So it can be discussed broadly across ECMA. I just wanted to also bring it to everybody's attention here. Because there are many members here and some of you may find this topic of interest. It has not yet moved forward. But I do think it's going to come back to our discussions. Our annexes have all the documents from the General Assembly executive committee and TC meetings. Have a look at that if there are documents that you are interested in and cannot access ask your chairs. Or ask me or Aki. And we'll be able to bring that to your attention.

RPR: I'm sorry, Samina.

RPR: Oh, MM has asked where are the instructions for joining the right link. SHS has replied. It's all found on the reflector towards the bottom. Please continue.

SHN: Yes. And just to comment on that, maybe next time we can make it in bold, it's just all the way on the bottom and sometimes we miss it. Thank you. So just going to the dates I just want to again emphasize the General Assembly dates. Those are very important. The 29th, 30th for your next edition of standards. Then at the December GA you may have perhaps Source Maps that may be considered already at that time. For the ExeCom meeting the date is 31st of March, 1st of April. It was changed. I know that some people didn't have it on the agenda. Just to highlight it has been changed. And has been noted from the very beginning on the ECMA information. All right. That's just the meetings that are coming up. I do want to point out for our General Assembly coming up in June this year is ECMA 65 years anniversary. June 17 is when ECMA was formed. We will do an event on the 29th of June. It is going to be a very specific to invite members of the European Commission, ITU, ISO/IEC, and certain other partners that we've had and liaisons to have a discussion and have a bit of a celebration on that aspects. All the executive committee and ECMA General Assembly executive committee management will be there. We are looking to see what more we'll do. But just to keep your eyes on the fact that we are at 65 years which is quite a special milestone for ECMA.

SHN: Our next meetings for the TCs you are all aware of. And I think you know where our next meetings are going to be. We're in New York for the 113. I will just move on with the list of documents. I'll leave you to review that. There are many. And then that is the end of my report. Aki, would you like to add any further comments?

AKI: I don't think I have any further comments for this. If anybody has any interest in any of the TCs that Samina mentioned please don't hesitate to let us know. Also just for the room's knowledge there's an echo when I can hear myself speaking. And it's messing with me.

SHN: Hey. Thanks, AKI. Just two other comments from my side.

> Technical interruption while audio issues are resolved

SHN: Online. Yes. Good. Thank you. Because the next part of the discussion is the voting and I do want it to be very clear. For everybody online so there's no echo. So I don't think online you heard the last words that I shared at the end of my presentation. But again AKI thanks for your comments. I also wanted to just mention that please not to forget to do the sign-in forms, for online AKI you can take the list of the members. That are online and also please remember to do your summaries and conclusions. So next step is the voting. I do have it on my slides if I may share if I may continue to share please. I would appreciate that. I have added it to the back of my slides. So these are the elections that you do every year for TC39. These elections are for your chairs, your editors and your conveners. Can you see that clearly? So this is your slate today. For your chairs, facilitators, conveners, editors, administrator, and your secretaries. Typically you don't vote for your secretaries. For you all. This is your roster today. It has been published already some time back where you saw the new roster. Which are these are the only changes to the new roster. Which were the names are grey highlighted.

MF: We don't need to officially acknowledge SYG as 50%. We prefer all editors to be elected as equals, and we will manage how we split our time as an internal affair.

??: RBN nomination came in a little late, looking for consensus that this is okay

NRO: Yeah. It's a question for the current editor's group. KG, SYG, and MF, do you think it's possible to have too many 262 editors? Or would 6 be fine?

MF: That has crossed my mind. Because we got such a large set of volunteers. I think we can define internal processes that will work. I know that with three, it was a very easy—if we've gotten two reviews on a thing and it's minor—we have processes for this. With six, we're not going to—we're obviously not going to want to wait for everyone to have reviewed everything. Even for major things, it would probably be restrictive to our pace. But I think that we can define a process that does work for us.

NRO: Okay. Thank you.

SHN: Is that answer comfortable for you, NRO, to have a roster of six?

NRO: Yes. I was mostly curious about what MF’s in this case opinion, given his experience. But I don't see any problem. But also, I don't have much experience with this.

SHN: Okay. So I come back to my question. And I would appreciate if you tell me from online, are there any concerns regarding having RBN’s name come up at a later stage? No comments. Thank you. There are none. So we move on with the roster as it is. We would like to do this vote on the full slate. So everything that you see in front of you, less the secretaries. Are there any oppositions to voting on the complete slate? Anything online, please? Anything online? Any concerns? Any hands raised?

RPR: Nothing online.

### Speaker's Summary of Key Points

The Secretary’s report noted the preparations for the June GA, including spec‑freeze deadlines and upcoming ExeCom dates. SHN highlighted recent TC activities (notably TC54 and TC57), ongoing work on proposals like ArkTS, and noted ECMA’s upcoming 65th‑anniversary. All meeting dates and documents remain available via the usual channels.

## Election of the 2026 Chair Group, Convenors, and Editors

Presenter: Samina Husain (SHN)

SHN: Okay. Thank you. So then I would move forward with the voting. This is a TC vote. This is for you. And so therefore, I would ask also if there are no further conversations, discussions, questions on this slate that I would move to the vote. And we will vote on the full slate as you see in front of you with the addition of Ron. Are there any persons that have any opposition, any concern regarding the names there?

RPR: Yeah. Normally, we ask the group being voted on to leave the room so that we can have a discussion so people can more easily bring things up.

SHN: So we don't in the ExeCom, we don't but if you would like that, then I apologize.

We've done it previously, so I think we should do that.

Sorry for the group that's changing.

Okay. Thank you. So then may I ask the members who are listed here to leave the room, please? If you want, I mean, that's great. How do you do this?

CDA: Sorry. The group that's changing so for example, last time we did the chairs and facilitators change where we had Daniel and Daniel Minor joining, we all left the room, myself, Rob, Ujjwal, and Daniel and Daniel and Justin all left the room. So in keeping with that precedent and tradition, I guess, we would ask Michael, Kevin, Shu, and Nicolo, Ron, Linus, who's the last one? RGN, to exit.

KG: I probably don't have thoughts, but I will be turning the transcription bot off.

> \[notes stop\]

SHN: Thank you. Congratulations to everybody this slate is unanimously approved. Thank you very much for your support, and you continued work.

SHN: Sorry. I have to repeat myself. I need NRO on the call.

NRO: Yes

SHN: Excellent. Congratulations, NRO. You have 100% unanimous approval for the full slate, and of course, for all of the new work. So congratulations, and thank you for your work. So we've concluded the voting. You may go to the next agenda item.

### Conclusion

* Unanimous approval for the full slate, Election of the 2026 Chair Group, Convenors, and Editors.

## ECMA262 Status Update

Presenter: Michael Ficarra (MF)

* [spec](https://github.com/tc39/ecma262)
* [slides](https://docs.google.com/presentation/d/19AryLFu9Crgiq0e-YeKu9Oms9j94mOFWQlXAtawzrWU)

MF: Okay. All right. I haven't done one of these in forever. KG usually takes the lead. All right. So we have just a couple of normative changes. Since the last meeting, we have DLM's upsert proposal, which adds `getOrInsert` and `getOrInsertComputed` to Maps and WeakMaps. And we have NRO, I think this was a needs-consensus PR, right? Which for diamond import shapes, when one path goes through an import that gets exported and one path goes through an export from, it was considered an ambiguous import. And we wanted to make those have the same behavior. And so it was a fairly minor change. That's received implementations, and now has been merged.

MF: As for our editorial changes, just one thing to call out. This was a contribution from NRO, I guess, pre-editor. Now when we have these lists of abstract methods on various records in the spec, we have a column next to it that lists all of the concrete definitions within this spec for that abstract method. This makes it easier to discover those things and also the references from those locations, they reference back to this position. So it's integrated with the regular references system. So hopefully, that makes things a little easier for everyone.

MF: This list (of upcoming changes) is mostly not changed. We have made progress in some of these. We did remove one of them because it was done, but I don't remember what it is because it's not here now. But yeah, it was obviously a more minor editorial thing that was not necessary to communicate. And that's it.

## ECMA404 Status Update

Presenter: Chip Morningstar (CM)

* no slides

CM: Yeah. So not a lot to report. JSON is sleeping off the excitement from last meeting.

RPR: Thank you, Chip. Next up.

## ECMA402 Status Update

Presenter: Ben Allen (BAN)

* no slides

BAN: Yes. Hopefully, I'm not too echoey. So as last time, both RGN and I have had our time to put into other projects, so there are no full updates for 402.

BAN: Okay. So no meaningful updates for 402. I'd also say, Ben, your audio was weak. I think we could understand you, but it was just a little bit quiet.

## Test262 Status Update

Presenter: Richard Gibson (RGN)

* no slides

RGN: Okay. We have Furious Progress on the test for Immutable Array Buffer and also for Explicit Resource Management. Both of those, I'm expecting to have some commits land this week. Lots of new coverage for temporal and Intl era and month codes. And a bunch of contributions from someone new to cover gaps in coverage.

RGN: The final point I wanted to mention is that the initial tests for import bytes have landed. And if anyone is interested in being a test contributor or reviewer, you are always welcome.

RPR: Thank you, RGN. So more reviewers being solicited there. Always welcome.

### Speaker's Summary of Key Points

* Merges are expected this week for Immutable ArrayBuffer and Explicit Resource Management
* Lots of new coverage landed for Temporal and Intl Era/Month Codes
* A new contributor is helping fill in coverage gaps
* Tests for Import Bytes have landed

### Conclusion

* Test contributors and reviewers are welcome!

## TG4 Source Maps

Presenter: Nicolò Ribaudo (NRO)

* no slides

NRO: So this is again going to be a short update for TG4. Since last plenary, we finally got consensus and merged one pull request, number 211, that avoids the ambiguity between different extraction methods for regular expressions. Other than that, most of our work is still focused on the range of things and scopes proposals. They are both still very active. But with spec changes in the proposals and implementations ongoing, maybe one year ago, I mentioned that we were hoping to have a new edition of the spec in this summer 2026. Unfortunately, we're not ready for that. So we are moving the target to December 2026. And that's it.

## TG5 Status Update

Presenter: Mikhail Barash (MBH)

* [slides](https://docs.google.com/presentation/d/1PlpJhx2uqRWpCGbytmN38F2QPeoGz8w4uNuylOg92lw/edit?usp=sharing)

MBH: Right. So a short update of TG5. We continue to have monthly meetings. At the end of March, the meeting will be about a mechanization of the JavaScript modules algorithms in the Lean Theorem Prover. And just a reminder, we meet last Wednesday of every month at 4:00 PM Central European Time. The next TG5 workshop will be co-located with the plenary in Amsterdam, and will be held at TU Delft. We were unfortunately not able to secure a host for this plenary now in New York. I would also like to bring your attention to the Workshop on Programming Language Standardization and Specification, which will be arranged later this year by MF, YSV, and myself, and will be co-located with SPLASH 2026. The keynote will be given by Gilad Bracha on specifying languages and VMs. And I just briefly show you the list of topics that we are interested in discussing at that workshop. I have highlighted a couple of topics that could be particularly relevant for the TC39 folks in case you want to submit a talk proposal and present at the event. The submission deadline is in the middle of June. And that's it from my side.

## CoC Committee Status Update

Presenter: Chris de Almeida (CDA)

* no slides

CDA: Nothing. So that's good. Do you want to just talk? Oh, am I audible? Yes, I should be. Oh, code of conduct committee. Yes, no news is good news. No new reports, which we love. As always, if anybody's interested in joining us on the code of conduct committee, please reach out.

## import defer interaction with tc39/ecma262#3715, and normative PR Shield dynamic import defer against `Promise.prototype` monkey patch

Presenter: Nicolò Ribaudo (NRO)

* [PR 1](https://github.com/tc39/proposal-defer-import-eval/pull/77)
* [PR 2](https://github.com/tc39/proposal-defer-import-eval/pull/79)
* [proposal](https://github.com/tc39/proposal-defer-import-eval/)
* [slides](https://docs.google.com/presentation/d/1T1M7X-cS_ODKOl6Nsq-_YmHusVoD6bPtAS_MHzxzgTw)

NRO: Okay. So yeah, we have two normative changes to present for import defer. The first one is about avoid leaking some internal promises. That are meant to be spec internal, similar accidentally leaking them to user code. The context here is that within the spec, all modules have a thing called the top level capability, which is a promise that represents the module evaluation this was introduced at the time with the top level await, but all modules have it. Not only a sync modules, because this is also represents the evaluation of all the dependencies of a module, which might always be asynchronous. And this is just an internal spec artifact. It's not actually exposed in any way to user code. There is a spec bug in the dynamic form of import defer. Where import defer needs to look through and traverse the module graph to find all of the async dependencies and pre-evaluate them. And so it gets a bunch of it could have multiple of these transitive dependencies that are asynchronous. And it's a wait for all of them to be done. And in the dynamic form of import defer, the way we're waiting for all of those modules to be done is by using the ‘PerformPromiseAll’ AO on the top level capabilities of all of these modules. Now, ‘PerformPromiseAll’ does not just perform the promise then spec operation on the promises. It invokes the .then method on them. And if you monkey patch promise prototype then, it will call your monkey patch function. So you can look at the `this` value and see what the promise is. Which means that by monkey patching promise prototype then, you can get a reference to this otherwise spec internal promise. So that's bad. We should not leak internal spec details. Especially if they're not leaked before. We should not introduce ways of serving otherwise unobservable things. So the solution we're going with is that instead of just using perform promise all, we basically have a copy of that AO that calls perform promise then instead of calling them method on the various objects. So this always uses the actual built-in then steps instead of whatever was installed on there. We might eventually want to fix this problem of promise patching and observing otherwise unobservable things more in general. There will be discussion on this also on the last day of this plenary. But for now, we just want to avoid introducing this problem in import defer in a place where we didn't have the problem before. Oh, and by the way, we found this bug while doing the V8 implementation while doing the V8 implementation of the proposal. So do we have consensus for this change?

KG: Strong support. And I support doing this wherever we can, ideally in general but if we can't I'm still supportive of doing it piecemeal even if that's not totally consistent.

NRO: Okay. Thank you. I see also the manner Olivier and Mark Miller with support end of message on the queue. Okay. Thank you. So then we have the second CDA, could you mute again the room? Thank you. So we have done the second normative promise. That is to properly propagate the phase. So the defer in re-export deferred imports. So the context here is that this normative PR that was approved in last meeting for ECMA 362, the change this code at the top here in this slide to behave like the code in the at the bottom of this slide. So making the import and export into states into steps behave like just an export namespace from somewhere. It accidentally changed the behavior of re-exporting deferred namespaces in the import defer proposal. If we just take the updated 362 spec text and apply the current version of the import defer proposal on top of that, we get that this first code that does an import defer of namespace and then exports it actually behaves like doing import defer of the namespace and then doing a plain non-deferred namespace export. This is just how the update combines with the proposal. And so it makes the re-export namespace eager rather than deferred. And so the editorial way of fixing this is to properly propagate the phase there. I'm actually inclined to I was inclined to not consider this to be a normative change. It was just like an accidental bug introduced due to some rebasing, basically. It didn't change. It does not change what we had consensus for in the past. But regardless, given that it is technically normative, I'm here asking for consensus for this. Is there any objection here?

NRO: Okay. I see the DLM, RGN, MM, and JSL as positive on the as supporting end of message in the queue. So thank you all. And this is it from me.

RPR: All right. Thank you, NRO.

### Speaker's Summary of Key Points

* We presented two normative pull requests for import defer. Fixing two separate spec bugs

### Conclusion

* Both changes had consensus.

## Withdraw Dynamic Import Host Adjustment

Presenter: Stephen Hicks (SHS)

* [proposal](https://github.com/tc39/proposal-dynamic-import-host-adjustment)
* no slides

SHS: This is a really hello. All right. This is a really quick one. This was brought up last meeting was when we were going through the stage two proposals, I think it was. And there wasn't we weren’t sure that anyone cared about it. But we didn't want to throw it out without having actual confirmation. So I spoke with the people at Google who put it in the first place. Everyone's happy letting it go. We're not following up with this anymore. So I guess, yeah, any movement to withdraw it or whatever needs to happen here.

RPR: So I think you're asking for consensus.

SHS: Yes. Consensus to withdraw the proposal.

RPR: Are there any objections to withdrawing dynamic import host adjustment? You have two messages of support. DLM says, "Support withdrawing the proposal." MM says, "Plus one." End of message.

SHS: Excellent.

RBR: So I think, yes, got that concludes. We have consensus for withdrawing this proposal.

SHS: All right. Thank you.

### Speaker's Summary of Key Points

* Last meeting uncovered this proposal as stale, but we weren't sure it was okay to withdraw.
* I spoke with our security team who brought the proposal in the first place, and they have no plans to further pursue it.
* Seeking consensus to withdraw.

### Conclusion

* Proposal withdrawn

## Abort Protocol Discussion

Presenter: James M Snell (JSL)

* [repo](https://github.com/jasnell/discussion-abort-protocol)
* [Slides](https://github.com/jasnell/discussion-abort-protocol/blob/main/slides-export.pdf)

JSL: Yeah. Can you all hear me okay? Okay. Let me share my screen here. All right. So in Tokyo, this came up briefly. We were talking about revisiting abort/cancellation. I did not want to bring a proposal yet. I know the committee's talked about this for a number of years. And I kind of want to make sure that there is general agreement on the problem statements. And some of the design principles. Before I actually bring an actual proposal, which if there's agreement here, then I would plan on bringing a start of a proposal in May. So I just want to kind of touch on kind of where we were, where the previous discussion left off, present a problem statement, see if there's some agreement on that. And then go through some of the design principles that would frame the proposal moving forward and see if we can make sure there's agreement on that. Okay. So objectives, like I said, present the problem statement, go through principles, talk about some of the scope. This is a discussion, not a proposal. I'm not asking for any stages today, just to be absolutely crystal clear. The gap: the ecosystem is converged on AbortController abort signal for as the cancellation signal. But these are WHATWG APIs. They're not language level. This is a problem on its own. We can't formatively reference web APIs. That's I think a different discussion that we could probably have eventually. And I think we're trying to find a sock to cover up the mic. That's fine. And of course, not all JavaScript environments actually support the web APIs. It'd be nice if we had something that was supported there. We have no built-in concept of cancellation. And yet the entire ecosystem depends on one. So the proposed problem statement here, abort signaling pattern should be part of the language design so that the existing solutions can be retroactively satisfied with minimal or no changes. I don't anticipate we'll get to having no changes. But let's try to minimize what those changes are. Prior art, we had a conversation back in 2017. RBN, Dominic, and Yehuda brought this up. It's stalled out. I don't have the full context there. I could go back and search for it. But this did come up before. And then again, 2019, RBN brought this up again. Like, "Hey, let's have a protocol-based approach." But that seems to have trailed off as well. So the question is, do we at least have consensus with the group now that we should even pursue this? Before we get into the design principles, I'd like to open it up. If anybody has any thoughts on this, any objections to this, like I think this is actually the more important part. Does anyone think we should not be doing this at the language level? Is the Web API enough? Mark's on the queue.

MM: Can people hear me?

MM: So I'm on the fence on this. I understand the pressure from the ecosystem. And certainly, I believe that it's preferable to have something that everyone's going to implement independent of host. The NTC 39 rather than what way. So for all of those reasons, I'm inclined to support the only thing that really holds me back is the synchronous callback. And I saw that it was non-negotiable. So within the proposal, I'm not hoping that that could be negotiated. And I understand since the motivation is compatibility, on those grounds, it's non-negotiable anyway. The unpredictability with regard to having something that occurs at a time that's not in control of the code that's called back into, very much reminds me of Unix signal handlers. Where because of the unpredictability of when the code within the thread gets called, what people have learned over time is the only thing that's safe to do in the signal handler to obviously do a very high first approximation is to set a bit that the program then checks at safe points in the program. And this proposal already has the bit and I think that legacy aside, the synchronous callback is a terrible idea. The asynchronous callback is something that to my mind would be fine. And for the use cases of the synchronous callback, the way those use cases should be coded is to synchronously check the bit at safe points in the program. Do anything during an unpredictable synchronous callback is inherently dangerous and might leave corrupted statement. That's it. That's what I'd say.

RPR: Thank you, MM. KG has a reply.

KG: Yeah. It's a good concern. It has not been a problem in practice. It's been almost a decade of experience on the web.

MM: So if anybody has any insight, offline is fine. insight into why it has not been a problem in practice, whereas it's a fatal problem, for Unix signal handlers, and I understand we're not doing fine-grain multi-threading. But still, I would expect it to be a similar problem. So I'd love anybody's insights. As to why it has not turned out to be a problem in practice.

KG: The reason this hasn’t been an issue is that a lot of code doesn’t need to use a callback. If you're writing an async function it just does “throwIfAborted” after each await point, or at whatever points it wants. The callback needs to exist for other patterns.

MM: So the callback hasn't been a problem because people haven't been using the callback.

JSL: Okay. I do want to say some of this is getting into kind of the design principles. And I'd like to focus on a problem statement and design principles next. So.

MM: Sure. So KG, let's take this offline. Or into the issue plan.

JSL: We do have RBN on offering on the queue can provide historical background if necessary.

RBN: Yeah. So when I started looking into the cancellation protocol or proposal a number of years ago, there had been some discussion about cancellation when TC39 adopted Promise. At the time, DOM was pursuing futures, which was their version of the Promise implementation. And it took a bit of time before we had a solid proposal for cancellation. There had been a lot of discussion back and forth. There were different needs and different interests in cancellation. When I proposed cancellation it was held up for a bit at the time by the fact that there were some members of the committee that were interested in cancellation being ephemeral. That it just carried along somehow with your asynchronous operation and you could just cancel any promise and it would cancel the operations beneath it. That ephemerality had issues. There was the potential for operations that could be in the middle of an execution that shouldn't be canceled, but then suddenly could be because it's just automatic. That would be problematic. So the discussion went back and forth. Because of the delays in discussion, WHATWG went ahead and moved forward with AbortController because they wanted to ship `fetch`. They needed something out there to be able to cancel it, so there was a sentiment at the time that that was the way that it was going to happen. They didn't want to wait on TC39 coming around to that decision. Once AbortController shipped, there were a number of initiatives to try to find ways to interoperate with it. Again, one of the issues you've pointed out with AbortController is that it's very DOM-heavy as far as its implementation. This requires any other platform implementation, such as Node.js, to bring over a lot of DOM context from the specification into something that traditionally didn't use much in the way of DOM primitives to actually support it. So we did look at an approach that used a symbol-based protocol at first, had made a lot of progress in that, and then that petered out. It was difficult to get WHATWG to accept and then at some point WHATWG said it was then only interested in a host hook that would allow you to enlist in DOM cancellation. The reason the proposal kind of petered out is that every avenue that we tried to investigate to interoperate that actually gave some capability to the language that we could actually specify things around was being cut off. And that's where things ended up.

JSL: Cool. Thank you, RBN. Yeah. Very, very helpful there. So I come back to this. It's been on the agenda before. The cancellation got to stage one. Didn't progress. Do we have or is there any objection to having this having this as a stage one, stage two, or moving forward? Does anyone think we should not have abort signaling protocol in the language?.

JHD: So I'm based on the previous round of history, around this stuff, I'm not convinced abort signal is the best cancellation mechanism. And if there's a better one, it would be really nice to have that be what's in the language and figure out how to make that interoperate with abort signal. But I don't also have enough context to argue for anything specific. So if there is anyone who believes there's a better pattern, I think that exploring that should be part of this proposal. I think we should in other words, I think we should have Promise cancellation be the thing we are still looking into. And then the solution either be something better than interoperates with abort signal or we should accept that abort signal is what we should be interoperating with. I think either path is a good thing as long as we've we're sure about which path is the better choice.

JSL: Okay. On the queue, we have Mark then Ron then Kevin, but then Lea just came in with a reply.

LVU: +1 Stage 1, agree around potential redesign, but that's for later EOM.

MM: As stated, I'm on the fence, EOM.

JSL: Let's see. We got Ron. “We can really use cancellation mechanism.” Did you want to say anything more to that?

MM: Yeah. So I'm sorry. I also put myself on the queue as replying to JHD. Just want to say, legacy aside, I think there are absolutely better cancellation mechanisms. The simply removing the synchronous callback in this one would make it better. The reason why I'm still on the fence is just because of the legacy compatibility.

RBN: There are a number of proposals that we've adopted over the years where it would be beneficial if we could actually integrate cancellation. The `import`-call mechanism is a prime example of a place where you should be able to cancel that operation just as you can with `fetch`. The same could be said for any `then` continuation, as you might want to be able to remove the callback you enlisted via `then`. Currently, the only way to do this is to have some indicator at the top of your callback that asks, "Should I actually run?” so that it just skips the callback if you want to prevent that operation from happening. We have APIs that we're considering for shared structs which add synchronization primitives that can be used in worker threads to coordinate via blocking, but we might also want to be able to use them on the main thread via asynchronous operations and callbacks. If you're going to wait for an asynchronous event from a background thread that might not happen, you might want to be able to specify a timeout for it. You might want to be able to manually cancel when the user clicks a button. These are all operations that are very difficult to do if these are built-in mechanisms within the specification that we have no mechanism to cancel these operations. So I do think that it's very important that we actually do bring some mechanism for cancellation to TC39. I know I have been on the record as not a huge fan of the AbortController API. In the past, WHATWG was very opposed to there being more than one way to deal with cancellation, which left us with only AbortController. This makes it very difficult for us to adopt a mechanism that is clean and consistent with the ECMAScript specification and our existing APIs aside from finding ways to shoehorn the AbortController mechanism into our approach. So I do think that we should find some solution, whether that is to find a way to adopt a subset of AbortController or adopt a mechanism to adapt AbortController via a protocol. I do think this does need to move forward. I will say that in addition, rather than seeking stage one for this, we should just potentially add you as a co-champion for the Cancellation proposal and find a way to bring that back up to snuff.

JSL: Yeah. That was actually one of my next questions was whether it needed a new proposal or whether we can continue the original one. All right. Kevin, you're on.

KG: Yeah. I support this, I'm fine keeping it general although I do also kind of agree we should not have a 2nd cancellation protocol, but wrt JHD's specific suggestion about keeping this general, we should definitely not phrase this as "promise cancellation".

JHD: Task cancellation or something like that would make perfect sense to me.

KG: Yeah. Yeah.

JSL: Okay. So yeah. So Ron's point there about we did have the cancellation proposal before. As far as I know, that was never formally withdrawn. So the question there is, do we just continue that or does this require a new one? I mean, just if anybody thinks that it requires a new effort. Okay. So I'm happy to be added as one of the champions for that to help push it forward. Okay. So that's great. I'm not hearing any objections. Not seeing anything in the queue. No one's throwing anything at me. To say that this should be done…

MM: RBN is on the queue.

RBN: I'd like to be part of that discussion offline as well that you're talking about with Kevin regarding sync callbacks. I will say that while working with async code, async functions, and await, you tend to be able to use something like the `throwIfAborted()` operation to throw an exception while you're doing async operations when you're at a convenient place to do that after an `await`. The primary purpose of a synchronous callback is for working with APIs that are not `async..await` that you tend to see in the web when you're working with `setTimeout` because you need to be able to clear that timeout before that operation runs. That's not something you can necessarily `await` on. You need some type of trigger from the system to tell you that you need to do some type of work. Now, that's not saying that those callbacks could not be executed asynchronously. It's just that most approaches to cancellation, especially the API design that I was initially pushing for cancellation proposal, were very heavily influenced by the .NET `CancellationToken` API, which does evaluate those callbacks synchronously. The main reason that those are synchronous is to have cancellation be triggered as early as possible for those events rather than waiting for async ticks or having to wait add something to the queue which in turn must wait for whatever current async code is running, but we can get into more details about those approaches offline.

JSL: Nice. Okay. Just looking at the time, we've got about nine minutes left here. So I kind of want to talk about some of the design principles only if there's disagreement on them. I don't think we have time to talk through all of them.

MM: Just a question to RBN. I agree that there are synchronous use cases. My claim is that the only robust way to write those synchronous use cases is to synchronously test a bit at safe points in your program.

RBN: That isn’t something that works well with `setTimeout` or `requestAnimationFrame`. Those operations are triggered by the host environment, so I might not have any other user code that's running other than these events and thus no “safe point” at which to test this bit. It's generally frowned upon in web development to have an infinite loop that's constantly just checking a bit, so we generally want to avoid that. Even if it's async, you'll still be starving your microtask queue because you're constantly adding new awaits to the callbacks and it's just wasting time. So in those cases, it's better to be notified in some way

MM: Okay. Let's take this offline or to the issue tracker. And I'll yield.

JSL: Okay. I mean, I think it's basically what in terms of what we're talking about, principle one, receiving a signal, how we receive the signal. I mean, obviously, just as a general rule, you've got to be able to subscribe to it whether it's when you get sync, async, whatever, right? I don't think this one's controversial. I think this one might be. This kind of gets into the root of what we were just talking about. Again, I'm just going through this briefly. If you have an objection, please jump in. Or if one of these just doesn't fit with your mental model, jump in. That's why I'm going through this. This one's here. Notifications. This, in terms of most of these, are based on the current model with AbortSignal. Because this is just how it works.

JSL: Okay. All right. Principle 3 is for state checks. Again, this kind of gets into what the conversation is just happening. Based on the way AbortSignal currently works, right, you can check, is this thing aborted? Some operations can't be interrupted, right? We have to do it either before or after. Did an abort occur while I was busy? And that kind of thing.

JSL: Principle 5. Reason travels with the signal. It's not just stop, stop, and here's why. One way, one time, and irreversible. There's no unabort. We're receiving, not sending. The idea here with the protocol is that this is just kind of a one-way signal, right? We can unsubscribe anytime we want. We know we are no longer interested.

JSL: The multi-consumer one, again, this is just kind of an artifact of how AbortSignal currently works. Fits within that model. And you have one signal anybody can subscribe to it. This is one, I think, that if we are going to revisit the design, how might this actually look? And is this actually a concern? The multiple sources, this is the `AbortSignal.any` case. Where you might have a timeout or you might have a user triggered signal.

JSL: Never aborts one is one we can discuss. This one isn't quite covered by AbortSignal right now other than the fact that you could just choose never to actually trigger it. Right? Is this a principle that we actually need to have? Need to capture, need to design around? Let's see. We have clarifying question

JHD: combinators. Yeah. So that's, I think, principle 10? You have a phrase at the bottom, only the any combinator has demonstrated practical need. So given that we have practical need for the four for the six promise I don't know. However many promise combinators we have, I'd have to look it up real quick. But they all have practical need in although some of them are more edge casey than others. So I'm confused why there wouldn’t be a corresponding practical need for abort combinators.

JSL: There might be. The ecosystem hasn't actually come up with any, right? And outside of `AbortSignal.any`, I've seen zero discussion anywhere about any other combinators.

JSL: So but again, bringing this up specifically for having this kind of conversation. Point of order, four minutes remain. Thank you, Chris. New topic, Ron. Never abort.

RBN: You asked whether that's a useful capability. It's useful for memory management scenarios. The biggest value comes when you write an application that makes use of a large cancellation graph if linked signals, such as with `AbortSignal.any()`. The problem, though, is when you have a large single-page application that has a lot of moving parts in memory and they're all depending on a complex cancellation graph. This can result in a lot of callbacks that are registered and holding onto a lot of memory. Once you've passed a point of no return and no longer care about cancellation we don't need to hold onto them anymore. We don't don't need to hold onto large portions memory due to closures if we're never going to call them, so why are we holding onto this data? These types of closures have been historically an issue in the web and it's one of the reasons that it's so hard to actually use `AbortSignal`/`AbortController` in pure JavaScript code for anything other than `fetch`. It's also hard to use own its own because you have to call `addEventListener` with a registration that says this only happens once. If you don't, then the callback is going to remain registered and stay around even if the signal is just dropped on the floor. It's better to be able to explicitly say, "I'm never going to cancel this so you can drop all the registrations". Also, if you know the signal will never be canceled you don't even need to register in the first place and can optimize for that case.

JSL: We are out of time. I do want to just finish the two items on the queue. Clarifying question from KM. Does that close the door for other combinators? No. We just need documented use cases for them. And then I don't think we have time, though, Steven had a new topic “Any combinator was required because efficient non-leaky implementation was impossible in user land EOM”. So I think that closes out. The principles are in a repo. It's in the link in the agenda. If anyone has any further discussion around those, we can do so there. But then eventually after this, probably merge those principles into the existing discussion. Thank you.

### Speaker's Summary of Key Points

* Conversation is essentially rebooting cancellation/abort protocol discussion… is there still consensus this should be in the language
* Review of design principles
* Do we need a new proposal or continuation of prior work?

### Conclusion

* Yes, there's general agreement it should be part of the language
* There are still discussion points about the design (synchronous callbacks, combinators, AbortSignal alignment, etc) that need to be worked through
* JSL will join the champions of the original effort to help reboot and get it moving

## Explicit Resource Management Conditional Stage 4 Status Update

Presenter: Ron Buckton (RBN)

* [proposal](https://github.com/tc39/proposal-explicit-resource-management)
* [slides](https://1drv.ms/p/c/934f1675ed4c1638/IQCRVZZRvm3sSp9rK19F2SMJAQpZaM-CTuIElCRvQXim9Fg?e=lUcddY)

RBN: Hello, everyone. I'm Ron Buckton, currently with F5 now, and I'll be talking about the Explicit Resource Management proposal. If you recall, I believe it was end of last year, we discussed a conditional Stage 4 advancement for Resource Management. The only two things that were outstanding at the time were final editorial review on the specification text and the review and adoption of the few outstanding PRs related to Test262 tests.

RBN: This proposal includes the `using` and `await using` declarations, which are lexical declarations similar to `const`. They support RAII, which is "Resource Acquisition Is Initialization", the idea is that when you initialize the resource, we acquire their state and control their memory management. We do this through the use of a built-in symbol-named method on the object. This is either `Symbol.dispose` for a resource with synchronous cleanup, or `Symbol.asyncDispose` for a resource which requires asynchronous cleanup.

RBN: We also introduce two container classes to the standard library: `DisposableStack`, which holds resources that are synchronously disposable, and `AsyncDisposableStack`, which holds resources that are asynchronously disposable. The primary purpose of this is to support aggregation of resources, such as when creating a class instance that may allocate multiple resources that should all be cleaned up when that class itself is cleaned up. These containers also provide interop mechanisms for operations that have not adopted the `using`/`await using` resource management capability.

RBN: In addition, we also introduced `SuppressedError`, which is a way for JavaScript to wrap both an exception that came from disposal as well as any exception that would otherwise be suppressed that may have come from the original body of the code, preserving access to both exceptions.

RBN: As far as our progress towards Stage 4, we are just about finished with the review of the Test262 tests. All the tests are written. We have nearly, I think, 300 different tests, probably more if you look at some of the individual operations within the test files. These cover `using`, `await using`, `SuppressedError`, `DisposableStack`, and `AsyncDisposableStack`. The only outstanding tests that are still pending review are for the `AsyncDisposableStack.prototype.use` method. There's only about 20 tests to review for that method, many of which are very similar to the ones that are in `DisposableStack.prototype.use`, so I'm hoping that as KG was saying, we may be able to wrap that up this week. Finally, the ECMA-262 PR was approved by KG. Although he's now stepped down as editor, I'm waiting for final review from MF and SYG to finally be able to advance this. I was hoping we'd be able to get there by this meeting, but if not, we're fairly close.

RBN: I do want to mention a couple editorial changes. These should not affect any of the runtime behavior as we just did some cleanup. We added a `ContainsUsing` SDO to replace the hand-wavy Statics Semantics checks we were doing for `using` and `await using`. We had a Static Semantics check on `using` or `await using` declarations that would check that they were contained within a `case` or `default clause` without having it be in a block, as well as a check that they weren't used at the top level of a Script. Instead, we've moved those two checks to their respective containing elements, so there now checked in tje Script, `case`, and `default` clauses using the `ContainsUsing` SDO so that we have a more reliable and less hand-wavy way of checking these semantics. We also updated the `AsyncDisposableStack.prototype.disposeAsync` method to be a proper built-in async method following the adoption of async built-in methods and we've replaced where we were passing a `hint` into the `InitializedBinding` AO that would eventually evaluate the `AddDisposableResource` AO to do resource tracking. There were a lot of places we had to thread `hint` through to make that work and most of the call sites don't actually pass in the `sync-dispose` or `async-dispose` indicators, so we instead removed that and moved that to the few places where we actually do need to track the resource being disposed. Thank you, KG, for putting that PR together. Again, none of these things should affect the runtime semantics.

RBN: I have links here to the explainer, the rendered ECMA script PR, the ECMA 262 PR, which again is just pending some final review. It's been updated and should hopefully be ready to go fairly soon. For the Test262 PRs, there was one very large one that was split up into about 12 smaller chunked PRs and we're waiting on just the last few tests for one method to be reviewed. Currently, this is conditional Stage 4, so we're hoping that we can get this wrapped pretty soon.

MM: Suppressed error does not take an options bag. Now, this being already a conditional stage four, I'm certainly not suggesting that it be added in this proposal. But I'd like to see a very quickly following on proposal that hopefully can advance rapidly that adds an options bag to suppressed error. Would that break anything? Is there any reason why there was no options bag on suppressed error?

JHD: Every error takes one for cause. At the very least.

RBN: I don't believe `SuppressedError` does. This was actually a discussion that we had several years ago that we didn't include `cause` for `SuppressedError` because `SuppressedError` has a already has something that indicates the thing that it's nested. We felt that the intuition around `cause` was at odds with how the `suppressed` property indicates what the error suppression is. Since we're already tracking this in a more specific property, we didn't want that conflict in intuition, which is why we didn't include `cause`. Now, if we do include an options bag for things like stack traces as was discussed in the last plenary, then we would probably add it.

MM: Okay. Thank you. And I support.

DLM: I think we should be more cautious about conditional advancement in the future. In this case, I think it's been 10 months. I believe immutable array buffer are also advanced conditionally to stage three. Last May, and it still has not actually made it to stage three. This isn't meant to be a critique of anyone involved. I just think as a committee, we should be more cautious about these conditional advancements. If we don't think the conditions can be met, what is in a short period of time, like a week or so, and I'm personally going to be more cautious about supporting advancement like this in the future, particularly for stage three and four because as an implementer, this makes my life slightly more difficult in that when something reaches stage three, I can ship our implementation if we have it. And when something reaches stage four, then that means I can remove any kind of flags or conditional shipping stuff. So yes, I hope we can be more cautious of this in the future.

RBN: I would like to call out that we need more help in Test262. One of the main blockers for advancement and getting out of the conditional status for this has been the limited time and availability of reviewers on test262. I think test262 definitely needs more more people involved in review to help some of these things advance.

CDA: Thanks, Ron. There's a plus one to that comment from Dan from OFM. I also think it'd be hard to disagree with if conditional advancement can't be resolved before the following plenary, there's not really a lot of value in conditionally advancing things at that point. So JSL says, "The error code proposal would add an options bag to suppressed error." And that is it for the queue.

RBN: Hopefully, we'll hear back from the folks on test262 on getting that last PR merged and that the editors will be able to finish up their reviews in the near future. If there's a chance that any of this happens while we're at plenary, I'll let folks know. In the meantime, I have nothing further on this.

### Speaker's Summary of Key Points

* A few editorial changes, no semantics changes
* Almost done, still waiting remaining on test262 and editorial review

### Conclusion

* Test262 is in need of more reviewers

## Introducing: Intl Era/Month Code for Stage 4

Presenter: Ben Allen (BAN)

* [proposal](https://github.com/tc39/proposal-intl-era-monthcode)
* [slides](https://notes.igalia.com/p/era-monthcode-stage-4#/)

BAN: Oh, fantastic. Okay. So I am presenting for Intl Era Month Code for stage four. It has been a long but ultimately fruitful process. Okay. So to recap, the premise of this is that temporal supports a number of non-ISO 8601 calendars. The behavior of these has historically been defined outside of ECMAScript. In practice, CLDR and ICU for C3X. Temporal adds calendar arithmetic capability and although we don't want the local ECMAScript to specify the arithmetic for every calendar, we do want some guardrails among implementations to prevent divergence. Okay. So our addition of support to our descriptions of the supported calendars that remove potential ambiguities. And this is actually a closed set of calendars now. It's not possible without normative changes to add additional calendars. We have a list of the valid error codes in aliases as standardized by CLDR. We include the valid ranges to the errors error years in the calendar. We have an expanded range of selection for reference years. This comes into play most obviously with the instations in a solar calendars. Chinese and Dengue. And we have the list of epoch years per calendar. Okay. And we have specifics for what calendars support era. So this is stuff that's now been defined at the level of ECMAScript. The additionally added constraint behavior when adding years in a solar calendars, which can be complicated because these calendars often have days and often leave months. We've defined an algorithm for determining the difference between two dates. And we have special handling for the solar calendars. With an implementation-defined algorithm.

BAN: So what's new since January? We've done a fair amount of cleanup and fixing spec bugs, but no normative changes. Essentially, I'm not going to walk through these in too much detail. But 118 involved situations where the reference year wasn't correctly determined in cases where we were dealing with a plain month-day. But also constructing it using object that has a year. Previously, those spec bugs we know put on a search to fix that. We clarified that probably days in the month. These calendar ISO date slots. We've clarified the proper authority for the Persian calendar. We've given additional information once for calendars that are not maintained by a single organization. So if it is maintained by a single organization, we close that. We give informational notes below for there is no single authority for that calendar. And 122, as it says, it fixes spec bug resulting in a solution violations when used to provide a date of a month later than the number of months for that year in that calendar. And with all of these, the implementation is already doing the right thing.

BAN: All of our blocking issues have been closed. All of the remaining issues on the repo are ones that are nice to have for the future. But we have no blocking issues. And we've been stable since the last plenary. So just to step through the stage entrance criteria, we do have two compatible implementations which pass the test262 acceptance tests, both the ECMASpiderMonkey we've had significant in-the-field experience with sticking implementations. Actually, I should. So instead of doing the bullet points, I'll actually do the slides with the text on them. So yeah, both SpiderMonkey and V8 have 100% or about 100% test conformance as of March 10th. Both of them have been shipping temporal and the associated Intl Era Month Code features for several months now. We have a PR up for it. The PR is incorporated into the stage four PR for Temporal so they will be hopefully merged together. Editor sign-off. I've been keeping it. I'm one of the editors. I sign off on it. I don't know what that means. Ujjwal has also signed off on it. And RGN has said there’s no blocking issues. It was very some small concerns that we intend to address. So that has been very, very quick. I'd love to enter any questions, but barring questions, we are going to be asking from stage four.

DLM: Yeah. We support stage four and express our happiness to see this advance.

BAN: I suppose I should formally ask for consensus for stage four instead of saying, "If condition X has been met, we ask for consensus for stage four."

RGN: Yeah. As mentioned, the issues in the spec are minor. They'll be resolved very quickly. I support stage four.

SFC: I was wondering if how we're doing with browser conformance at this point. I think that I know that in Chrome, we've been working on a lot of issues in getting it into conformance on that. I know that, for example, with the Islamic calendars, it would be harmful to not be in conformance and there's other cases where the conformance issues are edge cases. I was just wondering where we're at in terms of engines and doing what the spec tells them to do here. I'm asking only because it has been a little bit we've found a lot of issues with the Chrome implementation that we've now mostly fixed. And I'm wondering, where we're at with the other engines, where they're at in that process.

As a reply from Philip?

PFC: I need to re-measure this today because these results are as of a couple of weeks ago, and there have been additional tests merged since then. But as of a couple of weeks ago, SpiderMonkey's conformance with the test suite was at 99.9% and V8's conformance was at 99.7%.

BAN: And it's my understanding that most of the recent tests have been related to the East Asian calendars. They haven't had any additional tests added for the Islamic calendars in terms of the tests for those.

CDA: Oh, Ben, can you repeat the last thing that you said?

BAN: Oh, yeah. I believe correct me if I'm wrong. In terms of new tests that have been added since the last plenary, they've been for east asian calendars, rather than for the Islamic calendars. And Philip might be able to know better than me about the implementations of passing the Islamic calendar tests.

CDA: It's still really difficult to hear you.

BAN: Yes. PFC might have better details on this than me, but most of the recent tests have been related to the East Asian lunisolar calendars and we haven't had to add the implementations have been conformant for the Islamic calendars for a while. But all the peripheral calendars are mistaken then.

CDA: Okay. SFC:. “No need to speak”. Shane says, "Cool. Plus one on stage four. Nice work, Ben et al."

BAN: Oh, my goodness. Thank you all so much.

CDA: All right. We had explicit support for stage four. Congratulations.

BAN: This is the culmination of many months of my life and many, many years of the lives of everyone working on Temporal. So I'm very excited.

CDA: Excellent. Thank you so much.

### Speaker's Summary of Key Points

* Test coverage complete
* Two implementations exist
* Final editorial changes complete

### Conclusion

* Stage 4 achieved!

## Meta: Proposals repo now lists all times a proposal was presented

Presenter: Jordan Harband (JHD)

JHD: Within the last couple of months, I pushed an update to the proposals repo that attempts to add an exhaustive list of meeting notes references to every proposal. This was done in a severely automated fashion. And it's almost certain it has already had some items patched in to fill the gaps. Please, for any proposals you have ever championed or are championing, it would be super awesome if you took a look and double-checked that all of the meeting notes references for a proposal are included you don't even necessarily need to do the work to find them. Just file an issue or DM me or something and say, "Hey, this proposal's missing some, I think." And I'll figure it out. But that would be great. And unfortunately, `<details>` elements don't render in GitHub for Markdown tables. So it has to be a big long list. I'm also open to suggestions for how to make that UI look a little nicer. But for now, this is sufficient. Just for archival purposes.

## Error Stack Accessor for Stage 2.7

Presenter: Jordan Harband (JHD)

* [proposal](https://github.com/tc39/proposal-error-stack-accessor/)
* [issue](https://github.com/tc39/proposal-error-stack-accessor/issues/9)
* Issue presented instead of slides

JHD: Okay. So this issue is my path to stage four thing where I talk about all the different requirements as a proposal advances. So the error stack accessor proposal, if you may as you may recall, thank you for thank you, JRL. Is basically trying to standardize the pre-existing browser behavior for `Error.prototype.stack`. Just the accessor itself. There is a separate proposal for error stacks themselves, which is to talk about the structure of the stacks. And there is a potential future proposal that somebody could write to specify the contents if they wanted. But none currently exists because that's a bit of ocean boiling. But iterative progress is still good.

JHD: So JRL, if you'd scroll down a little bit so stage 2.7 is shown. Editors and reviewers have signed off on the spec. Various issues brought up have been addressed. And in theory, all browsers are already compatible with this. Except perhaps V8, who's expressed interest in moving to the accessor in the past. But we can confirm that. The only thing that's not checked there is the HTML integration PRs. I made three. I just pushed them up this morning. So if somebody wants to block advancement because those haven't been approved, that's perfectly fine. Alternatively, conditional advancement would be great. Either way, the diffs on all three of those are I mean, the test one is just adding tests. So if they're incorrect, they just need to be fixed. And then the other two, it's pretty straightforward. It's just trying to patch into the structured clone places and things like that. The reliance on error data. And the stack information. So the in other words, the intended semantics within HTML are already set. It's just the exact way of wording them has not been reviewed and approved by the various editors in WhatWG. So my hope is that today we can get fuller conditional advancement to stage 2.7. So that this one more corner of the language becomes slightly more specified. And I don't see anyone on my.

CZW: Mentioning the V8 stack behavior in Node.js, I think it's linked in the original stack proposal about the compatibility. That there was a history about V8 changes and Node.js is also affected. That right now, the latest version of Node.js also, which is because of a V8 change, the stack is an own property accessor on the error instance. It's definitely not the behavior that this proposal is describing, but yeah, I think it's currently not an own-property accessor.

JHD: Yeah. So thank you for confirming and calling that out. So my understanding of the history here is that it was made an own property not for any philosophical reason, but as part of an additional change perhaps for performance. OFR, as is next on the queue, but hopefully V8 is still willing to move to this accessor model. All common usage of .stack on errors should work identically within V8 with this change. And this proposal is compatible with the capture stack trace proposal and yeah, and I think prepare stack trace in theory could work with it as well. I haven't looked into that too hard because there's no proposal for it. But it's certainly if there's any foreseen breakage, we can work on that before advancing this to 2.7. But my hope is that that's already been exhaustively looked at. So I'll defer to OFR.

OFR: Yeah. Just to clarify, so since you said that this is basically speccing what V8 is doing already, that's not true. So it's not speccing what V8 is doing. We do have an accessor, but the accessor works differently than the one that is described in the spec. And specifically, the way it differs is that our accessor allows you to write to the internal slot, whereas the one that is specced here does not write to the internal slot. But instead, it adds an additional own property that shadows the internal slot. We are okay. We're trying this. There is a non-zero risk in that because it could theoretically lead to more memory leaks because we're not able to free the internal slot when you invoke the accessor to overwrite the slot. So we're okay with going forward.

JHD: Awesome.

OFR: But there is a risk in not speccing what we're currently doing.

JHD: Cool. But thank you. That's noted. I think my instinct there is that when I mean, you can free it when the error object is collected and anyway, right? And the error paths usually aren't too performance sensitive. But obviously, it will have to be played out to see.

OFR: So the risk is not about the performance. The risk is about basically the internal slot keeping alive a basically a reference to the stack. And through that, keeping basically keeping contexts reachable, which are otherwise not reachable anymore. Since we internally do not store the stringified version, but I mean, it's implemented.

JHD: Got it.

OFR: I'm just saying there's a non it's a visible change from or it's.

JHD: Cool. Thank you. Yeah.

OFR: It's going right now.

JHD: If the setter as specced ends up being incompatible with V8, then obviously some changes will need to be made there. And hopefully, we can figure that out within 2.7.

MM: Yeah. So just Olivier, thank you for all that. And I want to just make sure I understand one of the implications. Is that independent of the setter behavior issue that you just raised, are you saying that V8 has no problem or is willing to move the accessor up to `Error.prototype` and not have the own properties? Own property accessor.

OFR: Right. Yeah. Actually, good call. I think there's even a second change. Yeah. We would have to move it to the prototype. I'm is it an own I'm not 100% sure, actually, now. But yeah, anyway, we're the point is that we're going to try to implement it as specced here. But it's a visible change from what we're doing right now. Yes.

MM: Okay. So just one thing about the current implementation. It isn’t an own property. But all of the own properties have the same getter function and the same setter function. So that's a reason to believe that the first step, which is just moving them up to the prototype, is probably not something that's going to break anything. There was a counter there was a potential problem that was raised by somebody on V8, I think, which is that the capture stack trace in V8, not as proposed, does also add the internal slot and accessors to non-error objects. Does that remain a worry?

OFR: I think that's orthogonal to this proposal.

JHD: Yeah. The capture stack trace could choose to set the internal slot or not. And it would simply not have that option on non-error objects.

MM: Okay. Great. Thank you. I'm done.

KM: Just to clarify one thing. I think maybe I misheard you, but I think you said that all engines are using an accessor today. And that is not the case. I think on JSC, it is still a known data property on here.

MM: No. I was making the case specifically about V8.

KM: Sorry. I'm in the earlier part of the presentation, not your question, Mark.

MM: Okay.

KM: The not that that necessarily impacts the proposal. I don't necessarily think that's an issue. I just want to make sure that we're clear for.

JHD: Yeah. So thank you for clarifying that. JSC has an own data property. And no accessor at all on the prototype?

Yes. I'm sorry. I'm sorry.

JHD: Okay. But JSC is willing to make this change?

KM: Yeah. We're willing to try it. I mean, again.

JHD: Awesome.

KM: Obviously, compatibility risks.

JHD: Of course.

DLM: Oh, sorry. I think you were just about to ask for stage 2.7. And I am support stage 2.7. I just asked that you get the HTML integration work done before stage 3.

JHD: Absolutely. Thank you.

CDA: And now, that's it for the queue.

JHD: Okay. And Dan, was that support for full stage 2.7? No need for conditional?

DLM: Yes. Following on to my comments earlier, I prefer to avoid conditional advancement. I don't think it's necessary. That doesn't fit this proposal.

JHD: All right. Thank you.

CDA: MM, supports RGN plus one for stage 2.7. I presume that the one spec editor sign-off is sufficient.

JHD: Typically, it has been. I put them all on there just in case. But yeah. Obviously, if an editorial issue is discovered, it will be tweaked.

CDA: Yep. All right. Seeing nothing else on the queue. No objections. You have 2.7.

JHD: Thank you, everybody.

### Speaker's Summary of Key Points

* HTML integration PRs up; will be approved before asking for stage 3
* Browsers are willing to make changes to align with the proposal, modulo web compatibility issues that arise

### Conclusion

* Advances to stage 2.7

## TypedArray concat for Stage 2

Presenter: James M Snell (JSL)

* [proposal](https://github.com/tc39/proposal-typedarray-concat)
* [slides](https://github.com/tc39/proposal-typedarray-concat/blob/tc39-plenary-march-2026/slides-export.pdf)

JSL: Okay. So just the recap. Concat was we put it got to stage one. In Tokyo, I'm asked a little later. Okay. There we go. I'm asking for stage two. Today. Just quick update on where we are at. Just a recap. Problem. We have set now. But it does require you to basically reallocate everything. Every time you call it or just kind of walk through. It works okay. Performance benchmarks. On the various implementations are okay. Ideally, though, we would have a kind of a concat operation that allows that can be optimized a little bit more. Than just having this iterative set. But so we have something now. Ideally, we would have something a little more optimizable. Solution. Right now, again, this is current state. I'm asking for stage two. There is a draft spec text in the repo right now with a pull request that kind of refines it a little bit. Asking for a typed array. This should actually say type no, this typed array concat. It's a static. I pass in an array of items. Give it a length. The length is optional. If the length is less than the total of all the items, then you're truncating, if it's greater than you're going to concat and then zero fill the rest. You have an array buffer concat. Same thing. Shared array buffer. So this is the current surface. One of the open items is whether concat is the right name. We'll get to that in a bit. This is all in the draft spec language already.

JSL: For typed array concat, the items are either the same kind of typed array or an iterable that fits the shape. So here, this example is showing to you a data arrays. But with the current proposal, you could pass in any iterable of those things. And you'd get back a UNC data array. Okay. Array buffer. I mean, it's straightforward. You concat these. You get back an array buffer. There is an options bag. You can specify the result that's being resizable or immutable. Obviously, the immutable depends on that proposal continuing to make progress. And then a shared array. This one I'm less convinced is strictly necessary. It's just for completeness. But I haven't actually found a use case for it. So I could go either way on whether we keep this one or not. Again, the options bag here options are slightly different. Growable is there. Obviously, there's no immutable.

JSL: Spec status. You could take a look at it. There is a note like I said, there is an [open PR](https://github.com/tc39/proposal-typedarray-concat/pull/9) that I just I think I just opened it yesterday. That kind of refines based on some of the discussion that has happened. Has a few new abstract operations that are there. Worth taking a look at. It's not trivial. There's a fair amount of spec text there. It is defined in kind of generic terms. Basically, in terms of set. Or the same type of operations as set. But the intention is for implementers to use any technique to optimize it as much as possible. So the spec text is basically just there for completeness.

JSL: Design decisions in stage one. Static method rather than a prototype method. So we're using UNC data `array.concat`, not `prototype.concat`. Iterable argument rather than rest params. So we're going to pass in an array rather than individual arguments. This goes to what is probably going to be the most common use case. Which is collecting these things and then concating. You don't want to have to spread them out after you have already collected them. Same type enforcement. So if a typed array concat has to be the same type of typed array. And the item if you do pass in an iterable, those things will be converted to that type. Separate array buffer shared array buffer concat. Options bag. Yes. We're going to talk about that. Immutable option. Yes. Iterable fully yeah, this is actually one of the things we need to talk about. The iterable being fully consumed before validation. Like it accepts an iterable. Do we fully consume that? Or do we consume it while we're copying it? It has an impact on observability, error handling, that kind of thing. So that's one of the things we need to discuss.

JSL: Open issues. Name bike shed. Concat has the unfortunate quality that it conflicts with some of the the shape of the method is different than concat that we have in, I think, in string. It conflicts with Node’s use of concat. Buffer has a concat operation that has a different argument shape. So we probably don't want to go with concat even though that is the most obvious name for this. So basically, open for suggestions on other names. fromChunks was one. I do want to note DLM on the queue for objecting to problem current problem statement. I'll get to that in just a moment. Let me just get there. So we have fromChunks join. There's things here that we can discuss here.

JSL: I just want to briefly go through the issues. And then we'll go back. The iterable consumption ordering. I think this is probably the biggest technical one that we need to get through and understand has to do with the what's observable when. As we're going through this. Accept iterables as items. I think I don't think that this one is controversial. But I want to make sure we discuss it. Immutable array buffer integration. I don't think again, I don't think this one is controversial either. But since immutable array buffer is still pending, and not finalized, we just want to make sure we consider it. And then other there's a few other minor discussions about what the backing buffer looks like for partial view, typed arrays. There's some of these things that again, I don't think these particular ones are controversial. But we can discuss. Okay. So let's go to the queue. Just to clear this out. DLM, you're up first.

DLM: Thank you. So yes. So we have some deep concerns about the current problem statements. So I'll just read it quickly. Ecmascript should provide native methods for concat needing typed arrays and array buffers to enable implementations to optimize your strategies that can avoid the current requirement. I've eagerly allocating and copying data to new buffers. From our point of view, the only realistic way to implement this would be to convert typed arrays and array buffers into real-life data structures. And we have a fundamental opposition to doing this. We think that they should remain linear. We think that strings are a bit of a can of worms in terms of optimization. And we don't want to open that can of worms for typed arrays or array buffers. So yeah. So we object to the current problem statement because we don't see any other way of optimizing this other than ropes, which we are opposed to. And this is a blocking concern. To be clear, I have no problems with adding concat as a developer ergonomics kind of thing. But that's not what the problem statement currently states.

JSL: When the initial presentation in Tokyo, this was raised, then at that time, I'm no longer thinking of it that way. And I'm not thinking that the ropes or anything or anything like that is on a table. At this point. So I think it's maybe just a the only to-do here is maybe a refinement of the problem statement. But I don't think we're heading that way.

DLM: So I won't support stage two. Actually, I'll block stage two with the current problem statement. So I'm quite open to you refining that problem statement. But it should be done before this goes to stage two.

JSL: Got it.

KM: I guess I yeah. Reiterating the same point there. I don't think ropes would ever really happen for typed arrays. It would be really difficult to do because they're immutable. Like strings aren't even immutable, which makes that a lot easier. And then yeah, that has all the same kind of weird performance pitfalls that you kind of don't expect when you're dealing with something as low level as like a typed array. I would very much expect all of my operations to be O(1) rather than O(log N). To access a random bit in my typed array. That would be quite surprising from a development standpoint. Things like that.

NRO: Yeah. I mean, about the naming. It is called `Iterator.concat`. We have a precedent for static method, which is the iterator .concat. It has a different signature because it takes multiple arguments one per iterator concatenating rather than an array of iterators. So it also conflicts there. I still think it would be fine to call this concat. It's a different enough domain. But yeah, take that into account.

JSL: Okay. All right. So I want to get back to the point on the problem statement. And just as a is a question. If there I can take another stab at a refined problem statement. So instead of asking for stage two right now, if I have that revised, if there's time, can I bring it back tomorrow or the next day? To kind of revisit.

CDA: Yeah. If there's time.

MF: Yeah. I mean, just on the naming bike shed. To NRO’s point, I think that because of that precedent with `iterator.concat`, and other methods that have the word "from" in them, "from" is implying that we're pulling things from a container of some sort. So I think concatFrom would be a good name choice here. But I don't want to spend time on bike-shedding names.

JSL: Yeah. We can bike shed names. Either in the repo or in the discussion. Just if you have some ideas. Let's get some options. And I'll put together a poll or something in see what folks prefer.

JSL: The iterable consumption ordering. This is the one that I think is the larger issue that I think we need to kind of settle. I think JHD was this one that you commented on in the issue? Yeah.

JHD: So if I'm remembering correctly, it was essentially that I think the way you've specified it is that it iterates each thing and if there's an error, it stops in the middle. And the way we typically do built-in methods is we consume all of the arguments first and store them in spec internal data structures. And then we process them separately. So that the validation's all done. In other words, the that also includes the user code. Like the hooks into observable. Observable hooks into user code. Would all be completed by the time validation is done, including closing iterators and everything. And then in theory, there might not be any user code or observability for the processing step. Which allows for determinism optimizations, etc.

JSL: I'm looking at this here. KG, you also had some ideas on the iterable consuming the iterable. Do you have any thoughts on this right now? Don't mean to put you on the spot, but.

CDA: KG, if you're there, you're on mute. I do know that KG is on childcare duty. So.

JSL: Okay. Yeah. KG’s comment I'm going to read it here. Iteration protocol calls user code, which could detach or resize a typed array or from earlier in the iterable. Reading the whole iterable and only then doing validated typed array on the value it produces ensures there's no user code running between the point at which you start computing the total length and the point at which you do the copies. Which might be faster or less bug-prone for implementations. So here, I really don't have many very strong options or very strong opinions on it. Whatever, I'm happy to go with whatever the committee thinks is the best approach on this or kind of the most idiomatic approach. What I am concerned about, though, is observability of the process, right? I want to have a point at which copy is not observable. So and by that point, all the validation should be done. So what state does the iterable need to be in by that point? All right. That's kind of where I'm at.

JSL: So let me see. Anything else on the queue? Nothing else on the queue. So what it sounds like right now, we're blocked for stage two until refining the problem statement. Give me a day or two. To try to refine that based on the feedback. And what I would ask is if there's time on the final day, I'll bring it back with an ask if we have a good problem statement by then.

CDA: Thank you. Okay. We're doing good on time.

### Speaker's Summary of Key Points

* We have draft spec text, addressed a number of discussion points already
* We need to figure out the naming
* We need to figure out the iterable consumption timing issues
* Asking for stage 2

### Conclusion

* Objections on the current wording of the problem statement
* Will attempt to refine the problem statement and come back on Day 3 for the Stage 2 ask

## RegExp Buffer Boundaries for Stage 2.7

Presenter: Ron Buckton (RBN)

* [proposal](https://github.com/tc39/proposal-regexp-buffer-boundaries)
* [slides](https://1drv.ms/p/c/934f1675ed4c1638/IQCTgpGYlj_dTblwh8sK7M9HAQRbd5eUz4b_XF4t1rxe_38?e=TDhJ9C)

RBN: This is Regex Buffer Boundaries, potentially for stage 2.7, although I've heard there's some potential that might not happen this plenary session. The purpose of the proposal is to provide a concise syntax to match the start or end of the input string to a regular expression regardless as to whether you're in multiline mode. This provides the ability to match the match the start of input, the start of line, the end of input, and the end of the line in one regular expression and mix and match between them. The other purpose is to improve portability and reuse of common regular expressions across languages, such as in TextMate grammars, editors, and build tools which commonly include them in JSON and YAML files.

RBN: This proposal is similar to the caret and dollar anchors, which match the beginning or end of the input outside of multiline mode, or the begin or end of a line when inside multiline-mode. The idea is you have a slash A (`\A`) zero width assertion that only ever matches the start of the input and a slash lowercase Z (`\z`) zero width assertion that always matches the end of the input. It's important to note that this assertion requires some type of Unicode mode, so either the `u` or `v` flag are necessary. This is because JavaScript's default mode for regular expressions treats these as literal escapes in Annex B. However, in any Unicode mode these escapes are currently treated as errors because Unicode mode explicitly restricts escapes to only a set of allowed escapes. Slash A/slash Z would not be supported in character classes.

RBN: There is prior art for this. It is in, if not all engines, at least every regular expression engines that I have checked (at least 8, at this count), except for JavaScript. I have a GitHub repo and a website that has a list of comparisons of various regular expression features across numerous languages and runtimes. Now that we have advanced the RegExp Modifiers proposal the semantics of this proposal is already built in to the language. So now the main purpose of this proposal is to introduce syntactic sugar over modifiers to match the same syntax used by other JavaScript engines for the same capability. The best reason for this is to ensure that these regular expressions are portable across languages when they're used in these offline storage formats like JSON and YAML files. This also improves the ability to leverage regular expressions in documentation from other languages and examples online, as well as code produced by LLMs. So there's a greater likelihood that you'll be able to reuse a regular expression you might see in something like Perl, or PCRE or any of the other engines.

RBN: The spec text for these is dead simple and literally fits on a single slide aside from the syntax to support `\A` and `\z` in the regular expression grammar and in Annex B. Here are some examples of these with and without support for buffer boundaries, using just dollar and caret. You can see here in first example where it matches the entire string, yet it fails to match in the second case because it's not the entire string does not fall within those boundaries. For the second example, you can see that it does match in the second case because it's looking at the beginning and end of a line. Rather than the entire input. Again, this is achievable with modifiers, as you can see here, but it's a somewhat esoteric set of symbols to make this work. With buffer boundaries, it's simply just using the slash capital A (`\A`) and slash lowercase Z (`\z`) in those cases, regardless of whether you are in or out of multiline mode to guarantee to match the same.

RBN: And showing that this is possible, you can also mix buffer boundaries with carat and dollar, so you can look for something that is at the beginning of the input, somewhere in the middle of the input on a line and at the end of the input and match these by mixing them.

RBN: One note is that, at the time we advanced this proposal to Stage 2, we decided to drop the slash uppercase Z (`\Z`) syntax. The uppercase Z syntax was designed to match the end of an input, including a trailing new line, which is often the case in text documents and source code. This is still potentially useful as a lot of linters (for JS and otherwise, and often written in JS) will yell at you if you don't end your file with a new line. This is also supported by most major regular expression engines in addition to slash capital A and slash lowercase Z. I'm not proposing that we add this yet, but we may want to consider adding it as additional syntactic sugar since it has been used frequently in things like TextMate grammars that are looking for the end of the document, and which are frequently consumed by tools written in JS.

RBN: The current status of this proposal. We have links to the explainer and specification text here. Our designated reviewers are RGN and WH. I haven't seen a review from WH yet. I did get a review from RGN, thank you. In addition, CDA was kind enough to also review and right now it's currently at stage two. I am seeking stage 2.7, potentially 3, although I know that's also a stretch. I do have a pull request up for test 262, which has tests for the these cases. I also have a PR with an implementation for engine 262. I need to make one change to add feature flag support, but otherwise, it's fully implemented. So that's where things currently stand.

DLM: Yeah, sorry. Unfortunately, I have to block this based upon the late addition to the schedule. This likely is fine, but I would prefer to have the time to ask someone on my team that has more expertise in regular expressions to have a look as well. And there just was no time for that. So I'd encourage you to bring this back in.

RBN: My hope here was that since this is essentially syntactic sugar, that there's should be little concern. I do look forward to that feedback. If there is a chance that we might hear back on that before the end of plenary, please let me know. If so, I'll bring this back at that time for that discussion. If not, I will be bringing this back in the next plenary session. These characters are already reserved in any Unicode mode that they would be supported in and ar otherwise not currently allowed, so this doesn't step on any other syntactic space. I will also state that there is no situation that I think that we would advance anything that uses slash capital A and slash lowercase Z as having any other meaning in JavaScript regular expressions as it would kind of buck the status quo in every other regular expression engine for no reasonable meaning that I could see. Especially when regular expressions are so commonly shared between tools. I also will note that I have had some feedback from the implementer of Oniguruma-es who has stated that they currently support this. This is a feature that's often used by a number of editors which use native bindings for Oniguruma for their grammar support, including VS Code, but the original Oniguruma is now end of life and is no longer being maintained. I'd like to bring more power to JavaScript so that these regular expressions can be not only portable, but actually consumable by JavaScript without having to go through heavy transformation or rewriting via something like Oniguruma-es. I hope that we'll be able to get this in the near future.

OFR: Yeah, I would just like to double down on what DLM said. I think the deadline is already for adding things to the agenda is already a bit tight for us sometimes. And so I think we should not stretch it even more. And if somebody. That it was too late for them, then we should not put more pressure on them to hurry something.

RBN: I appreciate that feedback. I added this to the agenda late per the recommendation of several others hoping that, given the size and simplicity of the proposal that there might be a chance that we could get this through. I'm perfectly fine bringing this back at the end of the plenary if those blocking have time to review it; otherwise, I will bring this back in May.

WH: Looks good to me as a reviewer.

CDA: Great. Thank you. That's it for the queue.

RBN: Yeah, thank you. Since it doesn't seem like we'll be able to advance at this time, I appreciate the feedback. I will write up a quick summary after this.

### Speaker's Summary of Key Points

* Now proposes `\A` and `\z` as syntactic sugar over modifiers
* Spec approved by Richard Gibson, Waldemar Horwat, Chris de Almeida, Michael Ficarra
* Test262 tests written
* Engine262 implementation PR submitted
* Proposed for Stage 2.7

### Conclusion

* Blocked from advancement due to insufficient time to review

## Amount for Stage 2

Presenter: Ben Allen (BAN)

* [slides](https://docs.google.com/presentation/d/1SAD0bgB_SOWrtz1YZuySC4YHdMxBs0vTnS7buQa311c/edit?slide=id.g3cb9b164150_1_50#slide=id.g3cb9b164150_1_50)
* [proposal](https://github.com/tc39/proposal-amount)

BAN: Okay, let me share my business. All right. Looks like slides are visible. Okay. So we are going to be asking with an asterisk for stage two for Amount. I just want to thank EAO for all of his work on this, and also my colleague JMN, who has been doing most of the recent spec implementation. I've had to largely step out of this one for a month because I'm returning to it now. Okay. Next slide, please. All right. So this is different from how it was the last time. We presented Amount at plenary. Previously, Amount stored mathematical values. In the new version, they can actually store either numbers or bigints or numerical strings, ultimately tagged with the unit, which is what Amounts are about. Amounts indicate that a given numerical value is an amount of some certain thing. So some recent changes first of all, we received feedback that this proposal would be stronger if we put back in the unit conversion options that we took out two or three plenaries ago. So unit conversion has been re-included in the proposal. So we can convert the meters for centimeters, inches, and so forth. The units that we're supporting and the conversion data is coming from CLDR's unit.xml, which is treated as a new normative reference. When we do those conversions, we're going to be doing them with number operations, with the final result getting rounded with the same options and default as used by `Intl.number` format. I believe the default is minimum fraction digits zero and maximum three. We'll additionally extend support for conversions targeting a locale and usage, as in the old smart units proposal. Beyond what we're proposing for ECMA-262, which is conversion to an explicit unit. The API has been dramatically simplified. So the type of the input value is going to be retained as the thing I started to talk about. So if it's made using a bigint, it's going to be a bigint. Made using a number. If the input is a number, it's going to be stored as a number. If it's a decimal string, it's going to be stored as a decimal string. And we're going to have a new value accessor, which returns a number, bigint, or string depending on what was put by this input. And the next thing on here is going to be we're going to talk about it in the open questions. But the proposing if the value if the input is a string, what will be expressed through the value is going to be that value in exponential notation. The reason for that is to avoid ambiguities with significant digits. Just sort of like standard got your question about significant digits. Like, okay, how many significant digits are there in 100? So we're dropping the fraction digits and significant digits accessors. Since they duplicate information that we're able to get out by a value. Additionally, the `.with()` method is being dropped. And the options for toString are dropped. So the output always includes empty brackets if there is no unit if there's no thing that this is representing a number of. Or in brackets, what that thing is. So if it were kilograms in brackets, kg, so the output cannot be parsed as a number. And I want to, again, really thank JMN for all this work on this. He's done very, very extensive work to update the spec text to match the reading that we prepared. So now the value internal slot, which in previous versions were the mathematical value, is now storing a disjunction of number, bigint, or decimal string.

BAN: And something key is that if precision options are set, so fraction digits or significant digits, the value slot is going to store a decimal digit string. Otherwise, retaining the original type. Additionally, because we're re-including unit conversion in this, there's a new convert to method. And which will be in ECMA-262. And in ECMA-402, locale and usage-based convert to. So for example, as in the old smart unit proposal, in a lot of locales, the unit the measuring system that you use changes depending on what thing you're measuring. So a person's height might be even in locales that use meters and centimeters. A person's height could be represented in feet and inches. Canada is a specific example for this sort of thing. So in 402, the option to provide a locale and a usage to use convert to to convert to something that makes sense for that usage in that locale. In spec terms, we previously had a lot of custom arithmetic operations. All of those have been removed. Instead, we're relying on 402's FormatNumericToString instead. Which means that if this proposal advances to stage 4, a lot of the algorithms of 402 would then get moved into 262. And presumably, possibly renamed. Something else about this it's going to be stacked on top of the keep-trailing-zeros proposal. The idea is essentially to simplify Amount as much as possible.

BAN: And so here's the API. Something that will be returned to is, what is the best way for toString to work when what's stored in the amount is a decimal string. Again, we'll come back to this later on with any of this.

JHD: Do you want a question now or at the end?

BAN: Let's hold off for a second. But a lot of this comes down to one of the big open questions. This is right at the end of the question session. Let's see. So here's some example usages. This would convert to pounds. That would be part of 262. So this usage where the option unit is convert to pound. It's provided. We'll even in 262, convert from kilograms to pounds. What conversions are possible? Well, the data that we're using is in CLDRs. If that makes enough. And then here is the before of the usage. So that's stuff that 402 knows about. So if we have a weight in kilograms using if we have an Amount using kilogram as its unit, and we say, okay, we want this as in the en-US locale, as used to measure a person, well, then we'll get pounds out.

BAN: Okay. So there's a number of open questions. The CLDR for the updates that we've made are well, one, we've put conversion back in. And two, we've put conversion back in. And also simplified the proposal a fair amount by not having our own definition in our spec defining certain arithmetic operations.

BAN: So we have some big open questions with this. All right. So one of the smaller open questions is, okay, when we do unit conversion, we are going to apply rounding to the output using NumberFormat digit options. So those are our defaults ({ minimumFractionDigits: 0, maximumFractionDigits: 3 }). Would these be appropriate defaults? Something that I skipped that was pretty important. I'm going to flip back some slides. So when we do these conversions, when we do convert to, what when we do convert to the amount that comes back is going to have so the operations in convert are going to.

BAN: So when we call convertTo, the amount that comes back well, first of all, the arithmetic operations are going to happen in number space. And what we get back is going to be a decimal string. Likewise, if we provided the precision options, so fraction digits and significant digits, then regardless of the input type, the new amount is going to be storing a decimal string in order to preserve that information. So first of all, okay, what are our default rounding options going to be?

BAN: Unit conversion is only going to use the default locale when it uses the option to set and its locale is not set or if it's undefined. Is this going to be the appropriate behavior or should some other behavior be better? And okay.

BAN: This is the sort of maybe the biggest open question. So it's going to be beneficial for purposes of interchange largely. If the string representation of the value of an amount is well-defined, and if it unambiguously retains its precision. Further, though, we can use other types and strings to represent values, which would be useful for non-finite values. So the idea is, okay, when we have an amount with a storing its value as a decimal string, let's use the same string representation that we're already producing from `Number.prototype.toExponential` for finite values and number for the non-finite values. So string if the value is stored as a string, we are going to toString or whatever is going to get out an exponential representation of it. This avoids ambiguity. This avoids losing information. About the number of significant digits. Again, it's the sort of the standard gotcha with significant digits of how many significant digits are there in 100? Well, that problem goes away if we use exponential notation.

BAN: So I want to open for questions at this point. And for some of the questions, I will shamelessly defer to JMN because he's been the one who's been deepest in the spec and to EAO as well.

JHD: Yeah. I was surprised when you said that when you specify a precision, the original value is stored as a string. It makes it very obvious why toString would give you a string with the precision applied. But if you go back to the slide that has all the types on it, the whole interface or whatever, here we go. So presumably, you'd want a way to extract so first of all, presumably, you'd want a way to extract what the precision was, right? I can't there's no way I don't see any way here for me to see what the options were. But regardless, I would expect the value to give me the original value and not apply the precision rules. That's what toString would do. Regardless of whether that expectation is shared by others or not, it seems important to me to have two different ways to have a way to get at the original value even if you provide precision. So what's the thinking around that?

BAN: And this is where I shamelessly defer to JMN and EAO because several of the conversations involved in this were ones that I was not in.

EAO: We discussed this actually in committee in TG1 previously: what to do about rounding. And we ended up getting instruction from this committee that rounding should happen on the way in so that rounding is applied to the value that is given to us, for what we retain internally. We have not identified any use case for an amount that does require rounding during construction that would then also require some access to the unrounded original value.

JHD: So that's fair. I don't care about seeing the pre-rounded value, but I would expect type of value like dot value or whatever to be number or big in is what I'm getting at. So why couldn't it be a post-rounded number or big in? I still don't understand why it would need to be a string.

EAO: We need to retain information about, for example, trailing zeros. So if we get an input of 0.1 and we are asked to create an amount with fraction digits 3, we need to be able to represent that as 0.100. And number and bigint don't support that sort of a representation.

JHD: Of course. It does. The external interface isn't how that would be stored or fetched. That would all be an internal slot. So you can store whatever you want. I'm talking about the external interface.

EAO: Which is the dot value accessor.

JHD: Right. And I don't understand why that should be a string. When toString gives me the string with everything applied, I would still expect dot value to give me the original type with rounding applied, perhaps.

EAO: But then the toString value is not supposed to be the thing you consume. But this is meant to also match the to be discussed later in this meeting intl unit protocol for how does something like `Intl.NumberFormat` read the input value that it is given here. And that does require access to something like a dot value that knows if there are any trailing zeros there.

JHD: Okay. So that's fine. I'm not attached to the spelling value for what I'm describing, but I would like to be able to get the original value without precision applied somehow. And similarly, to be able to get to introspect as to what the options were.

EAO: If you could file an issue in the proposal presenting a use case for this, it would be really great to be able to take that into consideration.

SFC: Yeah. Just a little bit to add on here. When we do the when you specify significant number of significant digits or if you specify the precision, we need to convert it to we need to convert the number to a decimal-like representation in order to perform that operation because we do rounding in decimal space, not in binary space. So since the expensive thing is converting from binary to decimal, and when I say binary and decimal, I mean the space of numbers that are binary and the space of numbers that are decimal. So the current incarnation of the proposal says that we only do that conversion when we need to. And once we do, then we stay in the space that we needed to go to. So since applying a number of significant digits is an operation that happens in decimal space, then we convert to the decimal space and then perform the operation and then stay in the decimal space.

JMN: I just wanted to add that the value accessor can return a string, but that's not necessarily the full thing. So toString is supposed to be the full thing. Like 1.5 kilograms. Whereas value will be 1.5. And I'm not sure if that's quite what you're saying.

WH: I reviewed this proposal before the meeting. I spent several hours reviewing it, only to find out three hours before the meeting started that the spec that was posted was not what was being proposed. The posted spec was dated February 2026, but it's not this proposal. The actual spec was posted three hours before the meeting, which is not enough time to review it. So I don't think it's appropriate to ask for a stage advancement with a late spec.

BAN: Yeah. Apologies for that. That's our bad. There was a CI problem basically. The spec rendered in the PR didn't render when we merged to master. Which is very, very unfortunate. And I absolutely understand that that's in and of itself a reason to not take this as a skip.

WH: Okay. So over the last couple of hours I've been glancing at the new spec, and I have some observations which concern me. My main concern is standardizing something which produces incorrect results. Now, it's often okay if we standardize something which doesn’t do everything, but whatever it does, it should do correctly. And there are a couple of areas where this will give incorrect results. What I don't want to end up with is a case like we had way back at the beginning with \[Date\] `getYear` and `getFullYear` where the first thing added to the language was `getYear`, but that was producing incorrect results. So then we had to instill in everybody to use `getFullYear` instead of `getYear`, which we couldn’t change after it was already in the language. And the two places where this proposal gives incorrect answers that I can see are:

WH: 1. When you give it 2 meters and ask for a person-height in the US, what do you get? You get 79 inches, which is not what you want. This is numerically fine, but I'd say that from a localization point of view, that's an incorrect result, with the expected result being something like 6’7”. And once we standardize it, it will be very hard to fix later. The only way to fix it will be to have users set up a flag saying, give me the actual correct thing rather than what we standardized earlier.

WH: 2. The other area is the combination of unit conversion and rounding. I just did some quick math, and, the way it's currently implemented, if you give it 7 feet and ask it to convert to inches with a rounding mode that truncates towards zero, the answer you will get is 83, even though converting 7 feet to inches should be an exact conversion. But it will give you 83 instead of 84. I would be hesitant to standardize something which gets exact conversions wrong.

BAN: Okay. And with the first issue you raised, that's I'm hearing that is basically having the locale-related conversion is dependent on having compound maps so that we have feet and inches in the case of US types. Is that correct?

WH: Well, I am agnostic on how we do it, but the situation I don't want to get into is for us to standardize something and then tell users that to get the actual result that they want, they need to set another flag to say that they want the good answer, not the one that we standardized first.

BAN: That's very useful feedback. Are you going to raise these as issues?

WH: Okay.

SFC: WH, you said something about 83 versus 84 where one is the correct answer and one is the answer you get. Can you elaborate a little bit on the case that causes that issue?

WH: Yes. It's actually already explained in a note in the spec that was posted. It's triggered by multiple sets of rounding while doing the conversions. And this is not a problem limited to double arithmetic—the same thing would happen if we were using decimal arithmetic. The inherent problem is multiple rounding. So if you take 7, multiply it, convert it to meters by multiplying it by 0.3048, and then divide it by (0.3048 divided by 12), you get 83.99999999999999. And if a user sets the rounding mode to truncate, that will display as 83.

SFC: So I think this is a I'm glad you raised this, WH. This is a good question that I but I think it would be good to get feedback from the committee because the version of this proposal from last summer had this type of arithmetic be done in mathematical value space, which means you wouldn't have these types of issues. We got feedback from committee that we don't want to start implicitly adding decimal arithmetic via unit conversion. So the current version of this proposal is we do the math in number space, and we have all the same problems as numbers have, like this one. So if this is the direction that committee wants us to go, then that is then we end up getting results kind of like this. So yeah, I agree with you in the sense that I think it would make more sense for users if they don't have number problems when they use amounts. But also, that's the thing that is already in the language and once we if we have a decimal type, the amount type will be able to contain a decimal type, and then in that world, these problems won't happen. So amount will automatically adapt itself to a decimal type if when a decimal type gets added to the language. But then in the current state, since we just have a number type in the language, that's the way that the math gets performed.

WH: A bunch of what you just stated is incorrect. The same problems would occur if we were using decimal. The problem is not double versus decimal; the problem is multiple rounding. The solution is to do the arithmetic—it doesn't matter whether you use double or decimal—but with only one rounding step.

EAO: So noting that in the design of the API as it currently is, we ended up not being able to discover any use cases for unit conversion that would not be satisfied by the precision given by doing the operations using numbers. If you are aware of specific use cases for unit conversion that do require precision beyond number, that are not currently supported by what we're presenting here, please do file an issue so that we can make sure that that is accounted for. But we honestly were not able to come up with anything realistic that needed precision that was not accounted for by what we're providing here.

WH: I don't understand your comment. Nobody needs 17 digits of precision. That's not the issue. The issue is getting incorrect results, which are incorrect in the first or second significant digits if a user sets a rounding mode of, for example, truncate. Why is choosing a rounding mode even an option here?

EAO: That is an entirely different discussion that we can consider to, for example, limit the rounding modes or to remove the rounding modes that we make available here, which is a very valid way of solving this.

WH: Yeah.

EAO: But I think what we need to what we would really appreciate is getting the specific issue filed in the repository so that we can be sure that that thing becomes accounted for in our considerations.

SFC: Yeah. Responding to another thing WH said a little earlier about person height giving 79 inches, the CLDR usage for that should return the unit foot and inch. I think that we had considered for a little while splitting out the we call these mixed units in CLDR, splitting that out into a separate proposal. We decided just to keep it in the same proposal. But we have a path for this to solve this particular problem. Where person height is actually measured in two different units. And it's not just person height in the US. It's also in sometimes in some countries, it's meter centimeter. And then there's lots of cases where you have mixed units, degree, arc meter, arc second. There's many, many. So CLDR does account for this problem. And I would expect that solution to be also implemented here.

JMN: I'm just following up a bit on what SFC and EAO have said. In the biweekly call that we have, which is often focused on amount, it's in the reflector. You're welcome to join. We've also discussed things like having some kind of rational arithmetic, which I think is ultimately what we're talking about here. To deal with cases where we know we have an exact answer, which is very simply representable. But if we do this all in number space in a naive way, then we get the wrong answer. We can even imagine something like a kind of I mean, I hate to mention it, but a kind of computer algebra system or a very baby computer algebra system here, which would actually address some of these concerns. Which are arising from things like multiplying by number, dividing by another, and then multiplying by that original factor. Which is going to get lost usually in number arithmetic. I think we're open to discussing these things, but settling on number is we think a reasonable compromise. Certainly, it keeps the implementation relatively simple. But if you'd like to file an issue and continue the discussion, we're happy to follow through on that.

JRL: Okay. So I have two. First, can you go to the next slide? Which I believe is the minimum and maximum rounding thing that you default values? Okay. This one, yes. I think having a maximum fraction digits here is a mistake. This is a concern for formatting or the final output, not for the conversion while you are doing multiple conversions. This might be obviated if we follow Waldemar's suggestion where we don't have rounding modes during the conversion itself. This is like a final step, maybe. Then you would specify how many maximum or minimum digits that you want. The second concern I have is with the increasing of precision. So can you go back to the type definition slide? Yes. This one. During this conversion, I'm assuming all of our conversions themselves are effectively infinite precision, like conversion from hopefully from feet to inches or from meters to centimeters. We should be able to do that precisely without any form of rounding. But when you convert from one meter to centimeters, that does not mean you have a precision of 1,000 or a million or anything like that. Just because you multiplied it by an infinite precision factor. Having the ability to increase the precision of your input amount is a mistake, I believe. In either we should throw in that case if you're trying to increase you set a minimum conversion sorry, a minimum fraction or a minimum significant digits that is not supported by your input. I think that is an error case. Either it should throw or it should not increase the precision and just truncate to whatever your lowest precision amount is.

SFC: So I was talking with JRL a little bit about this over lunch. One possible approach we could consider taking, which is very much compatible with the current shape of the proposal, would be to say that if you start with a number valued amount and you do convert to, you get back a number valued amount. And then if you start with a string valued amount, you get back a string valued amount. And then we just drop the minimum maximum fraction significant digits from the convert options. I don't know if it's champions we had considered that direction yet, but that would resolve that issue. And it would also maybe resolve Waldemar's thing about double rounding because then there wouldn’t be any rounding in the conversion phase.

WH: This is a little more complicated than it seems. 0 °C has what precision? How many significant digits? When you convert it to Kelvin, you get 273.15. What should that look like?

JRL: Sorry. WH, is that to me or to SFC?

WH: That was to JRL.

JRL: Okay. So for the Kelvin example, because it is a fraction, if you start from zero degrees Celsius and you don't specify the additional 0.00 or two sig figs of precision, three sig figs of precision, when you specify zero Celsius, and then convert it to Kelvin, I think the correct answer is 273 and not 273.15. Because you don't have that input precision to keep the output precision correct. You don't know if your exactly zero degrees or 0.1 degrees Celsius.

WH: Okay. I think you'd find a wide range of opinions if you ask different folks about this case. No matter what you do, some users will be surprised here.

EAO: In the API that we are proposing here, when you do conversion, the precision of the amount from which you are converting is effectively lost as information. The way we are proposing to do the conversion is that we take the value of the amount that we start with and we make sure that that becomes a number. And then we do number operations on that and we end up with a number. And then we apply because we've done these multiplications and divisions and it's because we're doing these with the number precision, it is highly likely that in cases, for example, converting feet to inches or inches to feet, for instance, or other changes that might end up applying operations that give you a very nearly exact value for what the mathematical operations would give you. We need to redefine the precision as a part of the convert options. And this is why the convert options have those minimum maximum fraction and significant digits to match the constructor's fraction digits and significant digits that we need to have this range here because unlike with the constructor, we don't know exactly what is the value that we started with. Because we are applying that conversion to it and we do not want to presume here an understanding of how do we map, for example, a precision in Celsius to a precision in Kelvin or a precision in inches to a precision in meters. But we require the user to define what the precision is that they want out of the converted value, effectively.

JRL: And WH, you agree?

WH: Yes, I agree with EAO. To give another example, if you convert 1.25 miles to meters you should not get the answer as 2011.68 meters with two fraction digits just because the original had two fraction digits.

JRL: So even if you were to do that conversion from miles into meters or centimeters, the precision that you had it into the input, would it be the same as the precision on the output? Sorry.

WH: I support EAO's position that the conversion should be as exact as possible and then the precision should be defined by the minimum and maximum fraction digits or whatever we do for the final presentation.

JRL: Okay. I definitely support the conversion step here being effectively infinite precision. Whatever that number conversion stuff is, that should be done as precisely as we can possibly do it. But the input amount has a set precision. And what EAO had said is that they lose that set precision because of the conversion. And I disagree with that. You still have the amount that amount had a set precision at construction time. I think the output amount should carry forward that same precision or lower if you want that. But I don't think just because you did a conversion on an infinite precision factor, that does not mean you can increase the output precisions.

WH: This gets tricky really fast. In the US it's common to have to measure fractional inches using binary fractions like 1/8 inch or 1 1/16 inch which is four decimal digits: 1.0625 inches. And if you convert it into metric, the micrometer-level precision implied by the one-sixteenth is inappropriate.

DRR: I definitely agree that I find it surprising to say, "Oh, well, if you construct this thing, you'll only get the it won't run at the three digits," right? That seems surprising. I think the throwing on minimums would seem surprising to me. Just because a lot of the time, you don't know what your input is. And in order to know whether or not constructing the right minimum it in order to know whether or not this thing would throw upon construction, you would have to diagnose or check the value prior. So I think being more lenient makes sense to me in that respect. But I may be misunderstanding something there.

CDA: Just noting we have 15 minutes left in the time box.

SFC: Yeah. Just noting that the significant figures approach to doing the unit conversion works on a lot of cases. But it's also not the only way to do precision. And if you look on the repository, we have some examples of directions that we could go in order to support wait. My topic disappeared. I don't know what happened to it. I'll continue. In order to support the your use case is like the one we have here where zero degrees Celsius is not like three significant digits, but it has a certain error bar that are linear and not like and not multiplicative, right? It's always accurate within 0.1 degrees Celsius or maybe within a whole degree Celsius, right? And I had another topic, but it disappeared. So I'll just let OFR go first and put it back on.

CDA: Yeah. Sorry. The cue got bugged. So if you were on the queue, please re-add yourself.

OFR: Yeah. Just looking not in detail, but I think the new value representation makes also simpler. And avoids many of the complications that we talked about in the past. So I just wanted to mention that I think this is better than the previous iteration. It makes it composable in a sense. That we can talk about the value as a normal JavaScript object. And it also avoids some of the problematic use cases where suddenly some of for example, using the value as a numerical value and doing arithmetic on it would be super slow. And so I think this is a better iteration. Yeah.

SFC: All right. I'm next on the queue. So first thing for the thanks for the comments, OFR. I wanted to talk a little bit about what I see as the as what is a stage one concern versus a stage two concern. So I think a lot of the discussions we've been having so far about that we've had in previous plenaries, for example, is this backed by a string decimal or is it backed by a number or is it backed by what exactly was the representation? I think that that's a great question. And we should be answering during stage one. I think what we've arrived at here the shape of Amount is a type with two fields that where the value field is one of the existing JavaScript types. The value is a unit, which is defined by CLDR. It has a convertTo function, which does conversions and it supports formatting to it supports formatting. It has a toString function. Those are that's the shape of Amount. I feel in my opinion and others are welcome to disagree with this opinion. My opinion is that these questions about how do we track the significant versus fraction digits across the convert to function? How do we resolve conflicts between them? How do we resolve the single versus double rounding? Those are great questions. I feel like those are questions that we could answer during stage two. I like to point out temporal where my temporal went from one to two. It was the general the shape of the proposal in terms of having objects for everything. And then there were still a lot of questions about how does decimal arithmetic work? Sorry. How does duration arithmetic work? Right? And there are some detailed questions that ended up kind of being big questions where you spend a lot of time researching them. We spent several years at stage two for that proposal. But in my opinion, these types of questions we're discussing about how do we resolve the significant digits during conversion? That's a good example of a discussion we can have during stage two. And others are welcome to disagree with me on that. But I just wanted to say that.

EAO: This is mostly a question for implementers. As presented here, unit conversion requires us to do multiplication, division, addition, subtraction. We are now using numbers for those operations. Is there any concern for us to introduce operations here that would require doing—at least at the spec level—multiplication and division on mathematical values, effectively infinite precision operations? Possibly with the final rounding to number. But still, is this a concern? Or would this be fine to include in the specification and require implementations to do?

OFR: So yeah. I think I much prefer doing the basically using an existing JavaScript type for doing conversions and all the numerical things. So I think it's a better design to do it in number space and not to do it in some non-262 space.

SFC: There's no other topics. I assume BAN was about to ask this question anyway. But I just wanted to ask the committee thinks this proposal is ready for stage two. I know that there's the issue with the spec text was not being rendered correctly on GitHub through pull requests. And because GitHub pages was buggy and such. Right? So procedurally, process-wise, maybe we should come back again in May once WH’s had time to review the spec once others not just WH’s had time to review the spec in more detail. But is there anything else or does this committee feel that process questions aside that this proposal is ready in its current shape for stage two?

SHS: Are you asking for a pulse check, SFC? Is that I mean, would that be useful here?

SFC: We've asked for temperature checks in previous meetings. I'm asking for I mean, we could do a temperature check if we wanted to. But I was asking for if we come back in May, having worked with WH on getting spec issues resolved, then are we will we be ready for basically stamping this as ready for stage two? Is there anything else between where we are now and where we want to be other than resolving the making sure that WH and everyone else has time to review the spec in more detail?

WH: Well, I mentioned some of the other issues, which is the combination of rounding and tracking rounding modes that's one sticking part. The other sticking part is feet-and-inches or meters-and-centimeters for international use cases.

SFC: Okay. Great. So those two things you just mentioned, I think I addressed those a little bit earlier. But are those things that you feel must be resolved before we consider this a stage two proposal? Are those fundamental to the shape of the proposal? Or are those examples of items that can be continue to be discussed while the proposal's at stage two before it goes to 2.7?

WH: I'd like to see the shape of the proposal. As I said earlier, my main concern is I don't want something to get into the language which produces answers that we’ll have to fix later via some flags. So I'd like to get this right the first time.

EAO: So just checking that I understand correctly that WH you want to ensure that the value that you get after conversion is always correct. But that we have the problem that we need to do the conversions in some space. And we've just heard some implementer feedback that it would be best if that those operations were defined on numbers. Do you understand that we have a little bit of a do this thing or do this thing, but we can't necessarily do both of these things sort of a situation here?

WH: I don't believe that's the case.

EAO: Would you be willing to actively participate in our sketching of this proposal for its presentation in May so that we can be sure that we can get this figured out in a way where we can do the operations in number space for conversion while still fulfilling your criteria about this?

WH: I could give you feedback on the proposals. The main thing to do is avoid double rounding. There are numeric techniques to do that.

EAO: Okay. Let's continue this on GitHub issues. And we do have a recurring numerics call on which it would be great to have you on board. So that we can iterate on this. So that in May, when we present this with these very small changes, we can get this to go forward.

WH: Okay. Do the changes include support for feet and inches for person height? Or what's your feeling on that?

EAO: My sense is that we want to seek out exactly what we're doing here and what we're doing in 402 versus 262 during stage two to some extent. And that right now, for instance, the concern that you raised about the person height does currently given the specifications in the units XML give you person height in foot and inch, which is a unit that currently Intl NumberFormat does not support. Whether to add support for foot and inch into Intl NumberFormat is something we can consider as a separate part of this, for instance.

WH: It's kind of a large change to do after reaching stage two. So I'd like to see what the direction is when going for stage two.

SFC: I just wanted to call if anyone else had opinions on the mathematical number versus the mathematical value versus number space arithmetic. I know that OFR has voiced support for numbers. I see Dan on the queue.

DLM: Yeah. So I think we'd support we prefer number as well. I mean, I could double-check current implementation. But I suspect that, yes, we would prefer number rather than having to implement mathematical operations on them into a mathematical values if they don't already exist.

WH: I think it's a false dichotomy. I'm not sure if you're assuming that I'm trying to push infinite precision or unlimited precision arithmetic here. That's not the case.

CDA: All right. Nothing else on the queue. We are almost at time.

BAN: All right. Well, since I've got one minute. So to make sure I understand correctly, WH, some but not all of this can be solved by restricting the rounding modes, correct?

WH: Yeah. If you get rid of the truncate and expand rounding modes, then you at least solve part of the 7 feet equals 83 inches problem.

BAN: But that is not by itself a way to resolve all of the problems.

WH: That's for the conversions, we're kind of digressing here. But there are mathematical techniques you can use while still doing IEEE double arithmetic that give you exact results rounded to nearest IEEE doubles.

BAN: I just want to say this was a really, useful session. I'm glad that we went with the hour-long time box on this one.

CDA: All right. Well, that brings us to our break. We will see everyone back here at 15:15.

### Speaker's Summary of Key Points

* Unit conversion functionality re-inserted into proposal. CLDR data used
* Amounts now store Numbers, BigInts, or numerical strings, depending on input. Numerical string used iif precision options set

### Conclusion

* Continue to work with WH on rounding issues
* Return in May, seek stage 2 at that meeting

## Intl: Keep Trailing Zeros for Stage 3

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/tc39/proposal-intl-keep-trailing-zeros)
* [slides](https://docs.google.com/presentation/d/13zyaDAuriW2A4pwzklf0EZhOSUUmWqZxyIjzCcjWkXU/edit?usp=sharing)

EAO: So hi. I'm EAO and presenting on Keep Trailing Zeros, which is a bit of a prequel to what we were just discussing in part in Amount. To start, a refresher for what has been presented earlier. The whole idea here is that when the NumberFormat and the PluralRules format and select endpoints currently already support a decimal string representation of numeric values. And specifically, these support, at least in theory, trailing zeros. But in the current behavior, we are ignoring these trailing zeros. And this proposal is about fixing that. So it's about changing the behavior of `Intl.NumberFormat` and PluralRules when they are asked to format a digit string representation of a number.

EAO: So with talking about a change to the internals of `Intl.NumberFormat` and `Intl.PluralRules`, and not any really external APIs. There's a small option value that I'll detail later, at least very shortly, that does become a part of this change. And it's important to note that the treatment of formatting number of BigInt values would not change and the existing formatting options like maximum fraction digits, significant digits, those would work still exactly like before.

EAO: So that the behavior we're looking to affect here is as presented here in particular for the second and third lines here of the example. Where if we're formatting with a minimum fraction digit of one and the default maximum of three, we would end up at least with one trailing zero. This we already get. But that when the number of trailing zeros would be included in the range between the minimum and the maximum fractional significant digits, those would be included in the output. And they would be, of course, capped at the maximum limits as they are currently. And the small externally visible sort of API change that this proposal does carry with it is that there is an existing option trailing zero display that would get for which you would be able to use a new option value `”stripToMinimum”` which would make `Intl.NumberFormat` behave the same way it currently does with string digit input values.

EAO: This has all been presented a bunch of times before. And this is a proposal that's currently at stage 2.7. And there are two issues here that I'd like to raise and for us to discuss. And depending on how we resolve these, it might be applicable for this to advance to stage three. The first of these issues is the behavior when we are rendering very, very small values that become zero. So for example, here specifically, we are formatting a number 1.2e-10, which with the given number format options here, of maximum fraction digits five, becomes formatted currently as `”0.0”`. And this 0.0, two digits of precision here is coming from the fact that the input value here 1.2 has two digits of precision here. And the question that needs to get resolved is, should we instead for something like this where the precision, the input is given as 1.0, as a very small number, end up matching the maximum fraction digits precision instead of the current behavior?

EAO: And the second question is related to, what happens with the treatment of trailing integer zeros? How do we understand them when we are passing the input effectively? This only is an issue when we're using exponential notation. So scientific or engineering in the output. So right now, when we get an input like 700 as a string, we understand this to have three digits of precision where we end up with an output that includes 7.00E2 in the output. The question here is, should we discard the integer-only trailing zeros and format in this case 700 as a string as 7E2? Note that there is no proposal to change anything about the formatting of 700.0 as still containing four digits of precision. Or something like 701 as containing three digits of precision.

EAO: And effectively, discussing these two issues is the only blocker that currently exists before asking for stage three for this given that the tests are pretty well covered. And there's a PR for the tests for test 262. And there is a polyfill I've written that implements the logic as presented here on top of FormatJS.

EAO: And so in particular, it's this first issue where if we want to change the behavior from the current of what it's doing when we're formatting very small values as zero, if we do need to go to the maximum fraction digits representation in this particular case, a bit of spec work, sufficiently enough spec work might be required that it might be best to ask for stage three only at the next meeting. So if any of you have questions or topics on this, I would be very happy to go to the queue. Before that, thank you very much in particular, RGN, for a lot of the work in making sure that we have the spec at this level and he's the one that identified, for example, this issue as one that we do need to consider. I think WH, your first one up.

WH: First, a question. What happens if instead of 1.2E-10, you have zero in there? What do you get?

EAO: You mean 1.0?

WH: No; just have zero inside the single quotes here?

EAO: A zero that has one digit of precision. So it would format just a zero.

WH: OK, it would format as just 0. Would it change to 0.00000 if maximum fraction digits of 5 were given?

EAO: No, the behavior of formatting numbers or bigints would not change at all in this proposal.

WH: So I don't understand this then. You're proposing to change this to 0.00000. But in what situations?

EAO: Only when we are formatting a decimal string representation of a number that is sufficiently small that with the current number format digit options, it rounds to being a representation of zero.

WH: Okay.

EAO: I mean, to be honest, my personal preference would be for us not to do this because it would be so much simpler. It's that if this is a concern that we ought to have this behavior that somebody does want—and RGN, I think, does. At least then I would be happy to make the change. But I would be also quite happy to keep the current behavior.

WH: Okay. I still don't understand when this change would apply. You're saying it's when a value is sufficiently small that it would display as zero. But zero is sufficiently small that it would display as zero, which you said wouldn't apply.

EAO: There is no change of exponent for zero that would be applying. It's another question of really how do you—maybe it's best if I let RGN reply here.

RGN: Yeah, thanks. So this has to do with string inputs. And you're looking here at the string `”1.2e-10”`. So 1.2 times 10 to the negative 10. And if instead that string was simply zero, no decimal point, then there would be no fraction digits to truncate. But if that string were 0.00000000012, that's mathematically equivalent to what you have here. And the bottom behavior would preserve that equivalence. The top behavior does not.

WH: Okay. So this is just truncating the fraction digits. So if a string were 0.0 with 17 zeros, then then the result would be what?

RGN: As it is on the bottom.

WH: As it is on the bottom. Okay. In that case, I would be in favor of the bottom result.

SFC: I'm a little confused because if you did spell out the number all the way with 0.0000012, that has two significant digits. And that's basically what we're tracking now. The spec, as I read it, drops all leading zeros including those after the decimal point up until you read the first non-zero number. It only retains them if the number is zero. Unless my reading of the spec was not correct.

EAO: Yeah, that’s right.

SFC: So in that case, the first example here is consistent.

RGN: What we're looking at here isn't limiting significant digits. It's limiting fraction digits.

SFC: Yeah, but I mean, if you had maximum digits for maximum fraction digits five and you were using this as, for example, a number input, then I think you would just get zero. And now we return 0.0, which is two significant digits because that's what we had in the input string. But I don't see any world in which the bottom output is ever expected.

RGN: Would that apply equally if the spelling, instead of including an exponent, did not include an exponent? Because they have the same count of significant digits and also the same mathematical value.

SFC: If you spelled it out 0.0000012, I would expect the output to be either the top or just the number zero. I would not expect it to be the bottom. And I don't think it is in this current spec.

EAO: The top behavior is what we currently have.

RGN: For clarification, when you say current spec, you're referring to this proposal or `Intl.NumberFormat` as it exists?

SFC: I'm referring to this proposal.

EAO: Same.

RGN: Right. The top value there accurately describes the current behavior of this proposal. Which is called out by issue number 15.

DLM: NRO is on the queue.

NRO: Yeah. I think the current behavior proposal, so 0.0, is probably the worst of the possible alternatives. Because I look at that and it is two significant digits. And the explanation is that its two significant digits come from the input. But they're just two different significant digits. Like there is nothing about the input that tells us that the rightmost significant digit is the first one after the comma. Which is what we're getting from this output. So I think that logic is just wrong. I can understand the logic under the third result, where it's not actually telling us we have five significant digits. It's just getting that five from the maximum fraction digits. So just cropping at that five. Without trying to say how many significant digits there are in that result or which one is the rightmost significant digit. So I prefer the bottom output to the top one. I would also probably find just zero acceptable if others prefer it.

SFC: Yeah. I'm next on the queue. I think that if the rounding settings given to `Intl.NumberFormat` cause all significant digits to be dropped from the input string, then maybe we just treat it the same way as we would treat a number that got all its digits dropped. And then just it is zero and you just format it as if it's zero. And we don't try to do anything else smart there. If we were still retaining any of the digits, then of course, I would expect the bottom one to be the case. But if everything just goes to zero, it doesn't make sense to me that the bottom would be the case.

EAO: WH, RGN. Very quickly, would that actually work for you two as a solution?

WH: No.

RGN: No.

EAO: Okay. Thank you for the input on this one. I'm running out of time box. Would like to get any input, if anyone has, on the second question as well. My preference here would be to not change the current behavior. And to format to retain an understanding of the integer trailing zeros when they are included. And not to lose it. Kind of want to get an understanding if anyone has thoughts on this before we run out of time.

WH: Are we going to the queue?

RPR: I think we're going to NRO to skip over.

NRO: Yeah. I prefer the current behavior here. Intuitively, if I see 700, I think of it as being precise, like 700 meters is exactly 700 meters. So I would prefer to keep the first behavior. And if somebody really wants to say only the seven is significant, they can probably use 72 as the input there.

RPR: WH?

WH: And I'm from the opposite camp where if I spell out a billion as one with nine zeros after it, I would prefer to get 1e9 instead of 1.000000000e9.

EAO: But would you have that as a string input that you would expect to use like this?

WH: Sure.

EAO: Would you be opposed to the current 7.00E2 behavior?

WH: I think it's suboptimal. I would not object to the proposal if you did that. But I think it's worse than 7e2.

EAO: Okay. SFC?

SFC: I just wanted to voice support for 7.00E2 because if you I don't think it makes a lot of sense if you have 699 and then you have 700 and then you have 700 to 1. When you have numbers in the hundreds, I definitely see them as being integers. And I think that that's the more intuitive result. I think if we don't know what's the more intuitive result, we have methods like TG5 to help us tell that. But at least in my opinion, I tend to see 7e2 as being the more niche case. And 700 meaning three significant digits would be in the more common case. And I think we should probably lean toward what is the more common case here. And if you really want 7e2, then you can write 7e2. When we get up to a million, then maybe I can sort of see WH's perspective a little bit more. But at least for values in the hundreds, it doesn't make sense to me at all.

EAO: Cool. What I am getting out of the replies here, given that I'm pretty much over my time box, if I understand right, is that issue 15 should probably be resolved in some manner respecting the changing the current behavior towards the proposed one. With details to be determined. And the overall sentiment that I'm getting for 17 would be that probably we should continue to treat trailing integer zeros as significant. Given that 15 is going to require some spec text change and we're going to need to change some of the internals of what information we are storing throughout the process, and given that this proposal is specifically about spec text internals, I'm not going to be asking for stage three here. But we'll come back hopefully at the next meeting with a proposal to solve 15. And then ask for stage 3 at that point. Thank you.

RPR: Thank you, EAO. That was a good summary.

### Speaker's Summary of Key Points

The proposal’s current state was presented, including two open issues (#15 and #17). Stage advancement was not requested.

### Conclusion

* Issue #15 should be resolved with a change as requested.
* Issue #17 should be resolved by retaining the current behaviour.
* The proposal will be brought up for advancement at a future meeting.

## `JSON.parseImmutable` update

Presenter: Peter Klecha (PKA)

* [proposal](https://github.com/tc39/proposal-json-parseimmutable)
* [slides](https://docs.google.com/presentation/d/1NXb3HWjt0BiVJl2SZlAVeSvZIBlzO1z9X28hJL28w7s)

PKA: Hello. I'm PKA. I'm from Bloomberg. And I'm here to present about `JSON.parseImmutable`. This came up in the last meeting, during the proposal review.

PKA: Some background in case you somehow forgot all about `JSON.parseImmutable`. This was a proposed addition to the standard library, which takes in a standard JSON string and parses it and returns an immutable version of what `JSON.parse` would return. This proposal was previously tied to records and tuples. The idea was that it would return a record or a tuple as appropriate. However, records and tuples has been withdrawn. So the question here is how to move forward, or whether to move forward with this proposal.

PKA: There are some options. One is that we could withdraw this proposal. That would be perfectly fine. But it seems like parsing directly to an immutable object is still useful. And at Bloomberg, we have some uses for this. So some other options include that we could tie it to the composites proposal and return a composite. Composites is intended to replace certain aspects of records and tuples, especially the use of immutable objects as Map/Set keys by value. However, composites do not include a tuple counterpart. So it's not clear how we would handle JSON arrays in that case. And composites are also only shallowly immutable. So it's not obvious that there's a lot of value here compared to just doing it yourself. A third option, and this is our preference, is to return a deeply `Object.freeze`d plain object or array.

PKA: So yeah, I guess I'd like to just pause here and ask whether the committee has any feedback on that. Does anyone else feel that there are use cases for this or not? Does anyone feel strongly about returning a vanilla object that has been `Object.freeze`d deeply versus a composite or something else?

MM: So yeah. So first, just a clarifying question. About when you say composites are only shallow, composites are, but parseImmutable when you suggested that it could return a composite. I assumed you meant that it could return a deep composite.

PKA: Yeah. I guess that's also another option. That's not what I had considered. But sure. Yeah. That's a possibility.

MM: Okay. That would require obviously addressing the tuple. But I think this is but for JSON, even top level, we still require addressing the tuple.

PKA: Yes. Yeah. That didn't occur to me immediately. Again, given kind of like the use case of composites as keys, I don't know actually if ACE has a similar thought here. The idea of having a deep composite yeah. It wasn't what I first thought of. But sure. Yeah. That's totally an option.

MM: Okay. In any case, whether it's a deep composite or just a deep freeze, I am in favor of this. And in particular, deeply frozen or deeply composite plain data, the thing you get from `JSON.parse` without any intervention, without any procedural intervention, is something that can be safely shared as the completion value of the import between multiple importers. So that's why I think that there's still—So if you do this, I would also like to revisit import type: “json” and see if we can directly import an immutable JSON.

PKA: Yeah. It's interesting you bring that up. I mean, that's related to our use case for this. So yeah, I'll just say it's yeah. We're interested in those ideas too.

MM: Great. Thanks.

RPR: NRO?

NRO: I just want to mention that ideally, this would have an `{immutable: true}` or `{frozen: true}` or something like that import attribute right now. Import attributes only support string keys and nothing else. But the reason is just that we didn't have a use case for a boolean. If there is a use case for a boolean, it would be entirely appropriate probably to have a normative PR adding support for booleans in there.

MM: I'm sorry. Support for booleans where? I didn't understand that.

NRO: In import attributes. So you can say `{type: “json”, frozen: true}` or something like that. In the syntactic space for if we use type JSON imports.

PKA: Oh, wait. Yeah. Import. Do a JSON import that's deeply frozen.

MM: Okay. Okay. Thanks.

MF: Okay. Okay. I'm not seeing why composites are at all appropriate here. Other than you were previously tied to records and tuples, and they kind of transitioned at the same time away. That's just not what this is for. And I'm pretty opposed to using composites just because this is a handy immutable thing that we have lying around. They're meant for a very specific purpose. And that is not this. This is a very generic thing. So we shouldn't do composites. Is anybody in favor of that? And can explain why they're in favor of that? Otherwise, I think we should just rule that out right away.

MM: I can explain a reason for it. Whether I'm in favor of it or not, I haven't decided yet. But a reason for it is that composites are not tied to the realm of origin. So they can be passed between realms in with no more without any further danger than passing primitive data. So they're like records and tuples in that way, which is you don't have to do a deep copy in order to safely pass them between realms.

KG: That’s also true of frozen objects, right?

MM: No. Frozen objects inherit from `Object.prototype` and `Array.prototype`. Which are the `Object.prototype` and `Array.prototype` of origin. And whether you're in a position where those are safe to leak or not is certainly on a case-by-case basis. But largely, it's going to be accident-prone by people who don't think about that deeply.

KG: Composites do inherit from `Object.prototype` in the current proposal.

MM: I don't believe so.

ACE: So I'm going to I can't remember off the top of my head. But either way, I think composites are only stage 1. So if they currently don't inherit from `Object.prototype`, there's no guarantee that would be the same in the future. I think there's been voices for either way to me. I think the two bigger things here are as PKA mentioned, the lack of Tuples. Saying it's JSON parse but no arrays feels wrong.

ACE: Yeah. And also, MF's point of the use case of composites is primarily around keys. And `JSON.parse` is more about data. So really, it's you might see the two near each other like a map where the keys are composites and then the values in the map are frozen JSON. So they might be near each other, but I think the use case is slightly different.

JHD: Yeah. I agree with what MF’s saying. I just wanted to add that there was a time when records and tuples and possibly even composites were very generic. And very broadly usable across many use cases. Far beyond the motivations for the proposal. But many, many constraints that have arrived over the course that history have changed that. And I don't think they're currently broadly applicable enough to make sense here at all.

JSL (on TCQ): A +1 to either option 2 or 3. But prefer deeply frozen.

DLM: And then next up, we have NRO.

NRO: Yeah. So if we end up returning frozen objects, I would prefer to rename this thing to parseFrozen or something like that. There are multiple concepts in JavaScript for what immutable means. And if we're just relying on the “this thing is frozen” definition of immutable, we might as well put in a name so that it's clear to developers what we actually mean.

PKA: Yep. I agree with that. And the next slide is going to be some further issues, assuming we go with two or three.

DRR: Yeah. I think I agree that composites probably don't make sense as much. I would prefer objects. I guess given that this proposal is moving towards just using frozen objects, I wonder if you have examples, or I would encourage looking to examples of internal code where you use `Object.freeze` as maybe the reviver and see how prevalent of a pattern this is. I think this is more of maybe a nicety plus possibly more efficient for engines to implement. So that may be one of the motivations here. And instead of just using standard JSON to parse. So that may be worth looking into as further motivation for this proposal. So I'm pro, but I would encourage that.

PKA: Yeah. So I agree if we can find that kind of evidence, that would be great. Although I think it's also worth thinking about the extent to which this is a thing people don't do because it's a pain, but they might do if there's an option for it. And it's potentially a lot of benefits to doing it.

JSC: Oh, yeah. I missed that, NRO. I added the same thing. I also would suggest renaming it, but it sounds like you have a question about that. That's all.

SFC: Yeah. It seems to me like what you're proposing here is you care very much about deep immutability. And that's what `Object.freeze` is for. Composites is all about shallow. Now, you could build up nested composites or something like this. I feel like you might want to have a composite in the composite proposal. You might want to have composite build deep or something, which takes a non-composited object and makes it into a composited object or something like that. And that seems like in scope for the composite proposal. But it seems like regardless of whether or not we have that, being able to parse a non-composite object with that's frozen seems like a useful feature to have in the language.

PKA: Okay. Great. Thanks for that feedback. It seems like there's broad—I don't want to say consensus, maybe, for proceeding with the proposal and going with the `Object.freeze`. I am intrigued by MM's thought about the realm thing. But I'm guessing we will bring this back in the guise of option number three.

PKA: Some other remaining issues that I'm not going to resolve here today, but just to put them in people's minds. And if anybody does happen to have feedback about them now, that's great. Is parseImmutable still the best name? We've just heard feedback that no, it isn't. And I think I agree with that. That immutable is too generic for this case. If we go with, for example, the `Object.freeze` option, it should probably be parseToFrozen or parseFrozen or something like that. And how should custom revivers be handled? Should it be that you can't give back an object, or you can, but it must be deeply frozen itself? Or you can and they get frozen or it's a bunch of other options. So just something to think about if anybody has ideas about that or thoughts to share. Throw yourself on the queue. Oh, I do see that we do have MM. Go ahead.

MM: Yeah. So I just want to add to the options on custom revivers. My favorite option, which is that parseImmutable, unlike parse, just does not accept a custom reviver. That it doesn't support custom revivers. And custom revivers have been a pain for engines anyway because otherwise `JSON.parse` can be quite fast. And anything that causes it to fall out to user code kind of destroys that fast path, from what I understand. Although I am not an implementer.

PKA: Yep. That's a worthy option as well.

KG: Just wanted to point out that we just added the parse-with-source-text thing, and it only works with revivers. It was presumably motivated, and if it was motivated for `JSON.parse` then it's motivated for JSON.parseImmutable.

MM: Oh. Oh, that's a very good point. Okay. I withdraw my suggestion.

DLM: Okay. KG, you're up again.

KG: I wanted to suggest just having an options bag option instead of a separate name. When we were going to return a Record it made sense to have a different name, because we try to avoid the return type depending on arguments, but if it's just frozen that's arguably the same type so an option might be cleanest.

JSC: Just wanted to point out that `JSON.parse` appears in hot paths a lot: every time an event-handling loop receives a message in JSON, etc., etc. I'm fine with an options bag as long as it wouldn’t have a performance cost. But I just want to point out that this is something that shows up in hot paths a lot. So if that impacts the choice of an options bag versus a separate function, there it is.

PKA: Yeah. Thanks for that feedback. And that's an interesting idea, KG, about the options bag, totally worthwhile option to look into.

RPR: Okay. Anyone else up? I would just say we have about two minutes left.

SFC: Yeah. Sure. Just thinking a little bit about the accessibility of the programming language we use. The word freeze already has these semantics—I could have checked before I posted this if we used the word frozen already in the spec. If we do, then maybe that's okay. But most of the time when we have singular and plural words, they're the same root word. It's just like you add an “-s” to the end or you add an “-ed” to the end. But if you're completely changing the word, it's not necessarily clear that these are the same concept. That freeze and frozen are actually the same thing. Just inflected differently.

JHD: `Object.isfrozen`. `Object.freeze`.

SFC: So if you want to follow that precedent, it seems okay.

PKA: It is an interesting and.

JHD: Also `Object.preventExtensions` and `Object.isExtensible`. Which would be even weirder.

PKA: So one final question I want to bring before the committee is should this proposal stay at stage two? Or is this enough of an evolutionary change in the proposal that we should return to stage one? I think the default would be to stay. The inertia will keep us at stage two unless someone feels that it should go back to stage one and we're totally comfortable with that. Sorry, what was that?

MM: I would support it staying at stage two.

DLM: Any objections to it staying at stage two?

PKA: Okay. That concludes the discussion. We'll bring it back at some point to—Oh, no. Sorry. Somebody’s on the queue.

EAO: I think given the scope of the changes being applied here, would moving back to stage one would be appropriate? But I don't feel like that is a requirement. But I would let's put it this way. If someone were to propose moving this back to stage one, I would support that.

DLM: Okay. Well, unfortunately, we're at time. So I don't know how to resolve this particular. I mean, I guess we'll have to resolve it offline.

PKA: We'll talk it over offline. Thanks, everyone.

### Speaker's Summary of Key Points

* `JSON.parseImmutable` might still be useful even though its original companion proposal, Records & Tuples, has been withdrawn
* Questions about name and reviver behavior are still open

### Conclusion

* There was consensus in the committee for keeping this proposal going forward return a vanilla deeply frozen object; although concerns about sharability across realms were raised
* There was some agreement that the function should either be renamed, or collapsed into an overload of JSON.parse
* `JSON.parseImmutable` will return

## TypedArray find within for Stage 2

Presenter: James M Snell (JSL)

* [proposal](https://github.com/tc39/proposal-typedarray-findwithin)
* [slides](https://github.com/tc39/proposal-typedarray-findwithin/blob/tc39-plenary-march-2026/slides-export.pdf)

JSL: TypedArray find within. All right. Basically, asking for stage two advancement. Just kind of recap where we started. Just basically what this is, is finding a subsequence of elements within a TypedArray rather than just an individual element. It is a common use case in the ecosystem. We got this to stage one in Tokyo. There's spec language there. There's “did hear from editors” a bit before 2.7. There's definitely some changes there. And I have an open PR to kind of flesh some of that language out now, but I don't think that PR is necessary to go to two. I definitely think it blocks 2.7 now.

JSL: Solution right now, we have three methods: search, searchLast, contains. I'm not happy with the naming here. So if we can bikeshed the naming, fantastic. The search basically, it's forward the position is you're finding the first instance of this thing, search last. You're finding the last one, contains. It's basically just a predicate return true/false. Needle types. Right now, it is type arrays and iterables. Other than string, string would just be an error right off the bat. The idea here is that it is—I can't remember the name of it. But what is it? SameTypeZero? I think it is.

JSL: Okay. Spec text status. Like I said, there is drop spec text. They're in the repo. Introduces a couple new abstract operations. Basically, I mean, the idea that there is a basic algorithm like if you look at the new PR, there is a basic search algorithm there.

JSL: But the idea is design decisions since talking about it originally. searchLast was added. position parameter on all three methods. Needle accepts any iterable, not just the same type. String needles throw. Needle is snapshotted. This is specifically to deal with SharedArrayBuffer, which we can talk about more in just a minute. And then wrong type needle elements return -1 rather than throwing. Wrong type there, I mean, if you try to pass a FloatArray, to search a UintArray or something like that, where semantics don't match up.

JSL: All right. Some of the open issues. Is `contains` justified? This one came up. If we have `search` returning -1, do we actually need a true/false? Return? Definitely a legitimate question, I think, for some ergonomic cases. Having just a `contains`, just have it where it returns true/false, does make sense. But I think this is something we can debate.

JSL: Whether it should throw. Or is returning -1 for the wrong types okay? I think this one is relatively uncontroversial. But if folks have opinions on this.

JSL: SharedArrayBuffer-backed needles. Actually this causes a bit of a challenge. Right now, in the spec text, I have it where the haystack is never snapshotted, right? It's just a live of whatever the thing is there. So if it's a shared array buffer, it can change out from underneath you while you're searching it. I do have it, though, where the needles are snapshotted. So at least one part doesn't change. But we need to discuss this and figure out if this is something we actually want. In chatting with it, just to hear a little bit earlier, one of the other options here is we just say SharedArrayBuffers aren't supported here at all. And we just don't accept them in this operation. But it does add some complexity here.

JSL: I think there are some ergonomic questions to ask. And answer about whether we need SharedArrayBuffer here. None of the use cases that I've encountered need shared array buffer in this at all. It's included here. Primarily for completeness. Not because there is a strong motivating use case for SharedArrayBuffer here.

JSL: And then as I said, smaller ones we've already addressed in the repo. So the main thing, the main one, is `contains` justified, throwing versus the return, and SharedArrayBuffer. We can go to the queue if anyone has any. WH.

WH: The type of the needle introduces a bunch of footguns here. This wasn't an issue back when the needle had to have the same type as the haystack. But now that needles can be arbitrary iterables, that introduces a bunch of problems. Users may be surprised to not find things which they'd expect to be there. An example would be to search a 64-bit int array for a needle with some integers in it. Or if you search a Float32Array for, let's say, 1.1. This wasn't an issue back when the needles were required to be the same type as the haystack. I think a better interpretation of this is, if we want to allow needles which are just arbitrary iterables, then this should behave as though you had created a needle of the same type as the haystack using the iterable to initialize the needle and then did the search. This would fix both of those cases.

JSL: Yeah. Right now, the spec text—I'm trying to remember, it's been a few days. I'm pretty sure we do normalize it out. The check is, I think, at the SameTypeZero. So we do adjust that. But to be honest, I'm not all that thrilled with supporting arbitrary iterables here. This came up in the discussion of some of the feedback in the repo, and was added based on that feedback. Because I couldn't come up with a strong enough argument not to. There is an ergonomics argument in favor of supporting iterables. Personally, none of my use cases that motivate me bringing this use iterables at all. And I'd be perfectly happy ripping those out.

WH: The issue is it introduces silent bugs unless you coerce the needle to a TypedArray of the same type. If you search for a needle containing the same integers in a haystack that's containing 64-bit integers, you'll silently never find them.

JSL: Yeah. Okay. We have one reply from KG. Then we have four items on the queue, so. KG?

KG: We could say if the iterable contains items of the wrong type, then we throw. That solves the problem of searching for a Number in a BigInt array at least. It doesn't solve the problem of not finding 1.1 in a Float32Array, but that's OK, it doesn't contain 1.1.

WH: Yeah. I'd prefer to just avoid these problems by logically coercing the needle to haystack’s type and then searching for that.

KG: Coercing means if you search for the number 500 in a Uint8Array, you might find it, and that’s at least as weird in my opinion.

WH: That's what you get when you create a Uint8Array with the number 500, right?

KG: Yeah, but I didn’t create a Uint8Array.

WH: So let's avoid having iterable needles at all. Just go back to searching only for ones of the same type.

KG: I think that searching for iterables is important. Allocating TAs can be expensive. Having to allocate a two-byte Uint8Array just to search for a delimiter in some serialized message is potentially more expensive than just doing the search manually.

JSL: NRO?

NRO: One of the use cases you mentioned was when dealing with streams. I actually recently had a use case for this exact proposal. Or I thought so. When I was trying to search for something in a file. And I was getting a readable stream of Uint8Arrays out of it. There is a big footgun there which is when trying to search for something in a stream, you need to be careful about what happens when your needle is split across multiple chunks. This is still a good primitive, probably. But you need to do some chunk combination, or if your search fails, then you need to manually keep track of partial matches from the end of your Uint8Array. I wonder whether we might want to have an API that gives you this partial match indexes from the end. Or whether you have an experience with Buffer in Node—I don't know if Node streams use buffers. But if that's an issue there.

JSL: I'm trying to think back of the issue tracker. I don't recall anyone specifically bringing it up. Buffer does have this kind of API. I had it for a long time. It's never come up in any kind of issue tracker or bug or feature request that I've seen. Whether or not that actually means anyone hits the problem, I obviously think that it's hard to say. But it is a valid point.

NRO: Yeah. It's important to say difficult problem to notice when you have it. Because frequently, you have large chunks of small needles. And so you don't really notice that, oh, I have the wrong implementation. So yeah, it's just something to be careful about.

JSL: Yeah. I mean, the problem is not unlike just encoding issues. With multi-byte encoding. So it's a similar type of problem, so. Okay. We have a reply from KM.

NRO: It's a reply to the previous topic?

KM: Yeah. This is actually a reply to the previous topic. I didn't get it in before we switched to the next one. But I guess I don't—Your iterable has to allocate an object for each item in the thing that you want to iterate over. So if you want to search for a two-byte thing, you're probably actually allocating more, by using an iterable, rather than actually allocating a new array. Just simply because each of those objects is going to be bigger than—at least I mean, I can speak for JavaScriptCore. But the TypedArray object is the same size, I think, as a regular object. And so you're probably allocating more total bytes just iterating a two-element array in general.

KG: I thought JavaScriptCore put TypedArrays on the heap.

KM: The TypedArrays are in the heap. Yeah. But there's a two-byte backing store in the heap. Well, it'd be 16 bytes because allocations around it are 16 bytes. Allocation in the heap. And then a 16-byte object—it might be 32-byte object—pointing to it. But your object you're done value up iterator value most of the time will be two properties in the object plus your object that you references that backing store. So you're actually and that's for one item. In your list.

KG: I am assuming that engines do something smarter for arrays than using the actual iterator machinery.

KM: So yeah. I mean, people try. I mean, we do that for the most part. But you still have to the iterator object, you still have to allocate the wrapping iterator driver will still be allocated. And so then that is also probably about the same thing. So it's not clear.

KG: You don’t have to allocate the iterator driver.

KM: You don't have to. But I mean, it's pretty painful to not do that. Because then you have to have code that handles both that object existing and not existing. So I don't know if it matters much. I think the iterable I guess in the end, it seems like a lot of premature optimization there.

KG: OK, with that feedback I'm OK dropping iterable arguments for now. We can always add them back later.

JSL: Okay. MF, you have two items on the agenda? Thank you.

MF: Yes. So naming is hard. And with this thing, I feel like without a name that strongly indicates that we're taking a subsequence, it's going to sound like consumers are going to get confused whether we're passing an element or a subsequence. And I just want to see, even if we don't arrive at something that we can all be happy with, I just want to see that there's been work to try to find a name that has that implication. I know that right now it's `search`. That doesn't really indicate to me that it's a subsequence. And before, it was findWithin. And that strongly indicated to me that it was not a subsequence. But I don't know. All names are bad. I want to see that we've explored the space.

JSL: I went through maybe about a dozen possible names. And all of them sucked. So I'm open to.

MF: Okay. Yeah. Well, if you've done that work, it'd be nice to present that to the committee. So we know that the diligence has been-

JSL: `search` was the best one I could come up with.

MF: That's really unfortunate. Okay. Then moving on to my next topic.

MF: So it seems like we have not figured out whether `contains` is included in this proposal. That seems significant. That seems like something that we should do before stage two. That would double the size of the proposal from two to four methods. I don't particularly have an opinion on whether it should be included or not. I think in that issue, we discussed it would be about how common we think the uses would be of these methods relative to each other, if we had them both. I just think it's something we should figure out before stage two as part of the process.

JSL: I actually agree. If we do advance to stage two and we decide that `contains` does not belong, then I would ask for conditional stage two. And I just would remove that from the spec. Yeah. So. RBN.

RBN: I just wanted to point out that when we look at things like indexing into an array that doesn't contain an element, or in a TypedArray, finding the index of something that's not a number or isn't even coercible to a number, we generally don't throw for those and just return -1. So I think it's fine to return `-1` for things that aren't valid. The only time I think we might want to throw is if there is any reason why you pass in a TypedArray and we think comparisons won't work because of alignment issues. But beyond that, I don't think there's really a reason that throwing makes sense. Only because it just stays consistent with how we do `indexOf` and other types of find operations when we're dealing with invalid types as the needle in those cases. I think the closest example of this would be something like string.

JSL: Yeah. Okay. OFR.

OFR: Okay. So still being debated on the chat as well. But I'm wondering if we support ArrayBuffers here. I'm actually not sure. But with the concat thing, I'm pretty sure. That if we support ArrayBuffers, then it will be hard to write a spec in a way that doesn't make basically the algorithm observable by probing ArrayBuffers. And then that would basically limit us to the implementation that would be written in the spec, which could be kind of undesirable.

JSL: Yes. I think the observability of searching a SharedArrayBuffer, having it be the haystack, is less of a risk. But as I said, none of my use cases require it. I'd be very happy just to say `SharedArrayBuffer` is off the table for this. And neither the needle or the haystack would be `SharedArrayBuffer`.

WH: Yes, it's potentially observable. I don't think it's a problem in practice. But I can design pathological cases where for example, if you move a snapshot of a needle forward through the array or through the haystack, then depending on which direction the search algorithm goes through a haystack, it might miss it or it might never miss it. But these are pathological cases. And I don't expect those to arise in practice, so I'm not worried about it.

JSL: So the question there, then, with that, is `contains` justified still an open discussion? I think we haven't settled on that. I think there's—I'm not hearing any objections to just returning the minus one to as opposed to throwing. Unless somebody believes strongly otherwise. And then whether we should support shared array buffers is still an open question. So KM.

KM: Yeah. I mean, there's already a bunch of existing TypedArray algorithms that work with SharedArrayBuffers. But they do weird things if you modify them from another thread while they're executing. And in theory, the implementation would be observable. In practice, TypedArrays are—there's not really any real win you can gain from trying to do something clever in a lot of them. So you it's not super clear to me that it would be a particular problem, it's not clear why it would be more of a problem here than it would be for those other algorithms.

JSL: It shouldn't be more of a problem… the question is more, should we continue that problem continue to practice or should we try to make it better? And that's, I think, that's where it comes down to. I don't think anything here this one or concat, I don't think makes the SharedArrayBuffer problem any worse.

KM: Sure. I agree with that statement. I don't have super strong opinions on it. I think it would be a bit weird to not be able to do it if you because the footguns are kind of the same. That's the other ones. And we already have accepted those foot guns and haven't heard horrible complaints about them. And most people using SharedArrayBuffer are probably aware of these kinds of foot guns, hopefully.

JSL: Hopefully.

KM: That may not be true in practice. I mean, you never know.

JSL: RGN?

RGN: All right. Running down the list. I would prefer not to include `contains`. Both because it can be built up from the other aspects, and because the name is misleading. My opinion would flip if we found a name that clarified that it was spanning across elements rather than being limited to single ones. Fourth, throwing versus returning -1 on wrong types. If we're not accepting iterables, then the types themselves are sufficiently locked down that I would like to throw. For SharedArrayBuffers, I agree we've already accepted the foot guns. Multi-thread consumers already have to do synchronization on their own. So if they have such synchronization, then the utility of applying these to SharedArrayBuffers seems like it would be applicable in those cases. And not mentioned here, but for the streaming use case, when the needle spans multiple chunks, I do think it's important to have an answer for that. Even if the answer is “you must build your own solution in user space”.

JSL: Okay. That's fair. Let me ask this, does anyone think that `contains` is absolutely necessary for this? Okay. Seeing that there are folks thinking that it's not needed and nobody is sending up and down arguing that it is, we can remove that and simplify the spec a little bit. So fantastic.

JSL: The other question then the two openings then are accepting iterables and the SharedArrayBuffer. From the SharedArrayBuffer, it sounds like for accepting the foot guns, okay. I'm not hearing anybody, I think it'd be nicer to not have them. But I'm not hearing anybody saying that we absolutely shouldn't. So I think we move forward with having those in. I do think that there is the question there of, is it necessary then for us to snapshot a SharedArrayBuffer needle? We're already not snapshotting the haystack. That's just from a performance perspective, it's not going to be feasible. There's going to be too big. Needles are typically a lot smaller. They're a lot easier to snapshot. But do we need to? KG. On the queue.

KG: I think we should not snapshot. If you're using a SAB you're opting in to doing your own synchronizing.

JSL: Are there any arguments against that?

JHD: Yeah. I don't care about the `SharedArrayBuffer` case, right? It's fine. Do stupid things, win stupid prizes. But the snapshotting the needle is more than just about `SharedArrayBuffers`, right? It's also about the—or I guess, is the concern that there'd be no user code running that could possibly change it between the snapshot point and the end? If that's the case, there's no need to snapshot it.

JSL: Yeah. And it also goes back to the iterables question. So if the needle is an iterable, then user code can run while you're collecting it. In which case, snapshotting is necessary. If we say iterables aren't there and it just has to be the same type TA, there's no opportunity for the user code to run and we're good.

JHD: I mean, even if it didn't have to be the same type, right? It's just okay. Then yeah. Not snapshotting seems fine in that case.

JSL: We have SHS.

SHS: I guess I missed, not quite sure what you're talking about. So if you don't snapshot the needle and the needle changes, is it expected that implementation would use the new needle as if it changed in the middle? Or because I mean, I would imagine implementations would be building index tables, whatever, off the needle to potentially make it more efficient search.

JSL: Yeah. The idea is that the search is not observable and won't be impacted by things like that. So I think we need to—I think that's one of the open questions we need to figure out.

KG: The algorithm would probably be specified as doing a read of the whole needle at every point in the haystack, but these are not synchronizing reads so implementations would be allowed to return any answer consistent with the memory model.

DLM: I just wanted to jump in and say we only have two minutes left.

JSL: Okay. So the question I think based on this conversation, there are changes that need to happen. So stage two is probably not there. The question is, is there enough here for if I'm able to make these changes in the next couple of days, do we have enough for conditional stage two? And the changes specifically would be remove `contains`. Keep the SharedArrayBuffers, but no snapshot. And based on the conversation I'm hearing, remove the iterable needle. And just keep it TypedArrays.

MF: I don't think it's quite straightforward enough to just do a conditional stage two at this point. I'd prefer you just—we have a couple of days. We just do an overflow slot at the end if we have time where if it's then prepared for stage two, we can do an advancement.

JSL: Sounds good to me. SHS.

SHS: So did we resolve the question about even if we get rid of general iterables, if it would be throwing or negative one to have a searching for Uint8Array versus an Int16 array haystack?

JSL: No. We have not resolved that. And if we remove iterables, what do we do with throw or -1?

I guess that's still an open question.

DLM: Yeah. And we're at time. So we should save that for a potential overflow.

(see day 3 for continuation of this topic)

## Iterator Includes for Stage 1, 2, or 2.7

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/michaelficarra/proposal-iterator-includes)
* [slides](https://docs.google.com/presentation/d/1a-1RQayP-tcJd2VAhFGoiL_dRT8gD8_qrp__qSgC1A4)

MF: All right. Iterator includes. So this is a new proposal. Going for many possible stage advancements. So I feel that the motivation for this proposal is pretty straightforward. It is the same motivation that we had when we added `Array.prototype.includes`. You can already do this kind of thing with a `some` with a constant comparator. But it more clearly expresses the author's intent and is a very common operation. There's also the added motivation that choosing a comparison operation is a surprisingly difficult thing to do in JavaScript. Because we have four choices that are very similar that have very subtle differences and will matter sometimes, but not matter other times. And you don't know when you really have to commit to thinking about that. And when it does matter, the committee has chosen a default already in `Array.prototype.includes` which is SameValueZero. So you'd want to use that when it does matter. But it's actually not easy to write that. The easiest way today is just to use `Array.prototype.includes` to write it. You can also do two other operations that don't technically use SameValueZero, but are equivalent, which are written below there. On the second and third lines there. But it would be super weird to see code that does that. You wouldn't be like, "Oh, this is doing SameValueZero." You'd be like, "What is it trying to say?" So we should just make the thing that we think people should do the easy thing to do. So I would like stage one on that problem statement.

ACE: +1

KG: +1

RGN: +1

PFC: +1

DLM: Okay. Any objections to stage one? Oh, there is a question from EAO.

EAO: So yeah. You asserted earlier that asking whether an iterator includes a value is a relatively common concern. Do you have any evidence for this? Or is this just the sense of, given that this is very common for arrays that it therefore can be considered common for iterators as well?

MF: No. I don't have data on this. And actually, in one of the open issues DLM had asked for that as well. But I've not had the time to go look since then. And it was only a day or two ago. I would be fine with a request to find such data. I mean, the reason why I was motivated was I had to do this a couple of times. And I was like, "Oh, yeah. We're just missing this core functionality that people kind of expect to have". But also, I think finding it would be looking for this pattern that we see here with using `.some` today. And I think that iterator helpers are only starting to ramp up in their usage. So it might be a while before we could actually get that data. So it might push this proposal down the road a year or something like that. I feel pretty confident from my own personal convictions. But I don't think I have a great way to convince others about that now.

KG: It's not that you want it on iterators, it's that you want it on iterables—you want to check if a Map contains a particular value, or a FormData contains a field of a particular name, or whatever. It's just that `Iterator.prototype` is our way of working with generic iterables.

MF: Exactly. In my personal experience, it was working with NodeLists. Which are iterables but not arrays.

EAO: Thank you, KG. That was a really good way of rephrasing this for me, at least, probably others, too, as to how to think of this proposal.

DLM: SFC on the queue

SFC: Yeah. I was just quickly looking at other programming languages. The Rust iterator type has a `find` which returns an index. And `any` and those things. But not `includes` or `contains`. Python, on the other hand, has the keyword `in`. Which is like it's so important that it's a keyword in the language that does the boolean check. So I was wondering if you did more research in where we stand relative to other programming languages. And whether they sort of consider these types of questions as well.

MF: Yeah. I haven't. I typically do look for prior art in other languages with all of these iterator proposals I have. I was not expecting that there was going to be a question of the motivation here. So that's on me. I would say, though, that JavaScript has this unique motivation that I explained earlier on the slide that the comparison is not exactly straightforward. So it's not everybody just writing what's here on this top line with just use of the triple equal. So it's more strongly motivated in JavaScript because that comparison is more complicated. So even if it wasn't super common in other languages—which I do expect it to be—but even if it wasn’t, I think it might still be motivated in JavaScript. But that can certainly affect your decision at the moment without seeing prior art to go to stage one.

DLM: And EAO on the queue with +1 for stage one and a message. So far, we've only heard support. Are there any objections to stage one? Okay. Congratulations. Stage one.

MF: Thank you. I have more.

MF: So I want to discuss the design space, of which I don't think there's very much. I don't like the name `includes`. But `Array.prototype.includes` exists already. We didn't even like the name `Array.prototype.includes`. We didn't want that. That was not our first choice either. But I think that matching precedent is important here. This actually goes directly against what I said in the previous presentation about, it does not strongly imply whether we're matching a subsequence or an element. It could be either depending on what your background is. Still, I think that is the name that should be chosen because it matches Array and people might already be familiar with that.

MF: For comparison operation, there's not a really strong argument for a different comparison operation than what `Array.prototype.includes` uses either. So SameValueZero for that. The only real question is whether it is worth it to include this second parameter, the secret parameter to `includes` that nobody knows about. And it doesn't really make sense. This is the index to start the search from in `Array.prototype.includes`. In iterator, it would be how many values to skip before actually doing the comparison. We know that by name in iterators as `drop`. You can just do a drop and then do an `includes`. And that would be the same thing. But because of familiarity with the `Array.prototype.includes`, we say, "Okay. Well, let's include it". And then we use our modern normative convention of throwing on non-numbers and NaNs and negative numbers. And then that's the whole design space that I was able to identify.

MF: This is what it would look like if that was the design. So here's a generator. It yields two things. The number 5 and the number 3. And if we create an iterator, and then ask `includes`, it includes three and five but not four. And then if we do the little drop parameter, it will include three and not five if we drop one. And it will include neither if we drop two. This is what the full spec text would look like if it was exactly as I've presented. There's not much. It's really straightforward. And I would like stage two for that design.

JHD: So I had a clarifying question. I think your spec text may have answered it. But it sounds like what it does is, it consumes the iterator until the iterator is complete or it finds the value being looked for. There's an implicit drop if the second argument is passed. And then it closes the iterator. So what is the use case? Let's say you have an iterator from a generator. From anything that's not a built-in iterator producer. Checking includes means that you can't it checks it. But it also poisons the iterator. So there's use cases where you want to check if it's in there. But then you don't care about ever getting the value out?

MF: Yeah. Of course. I have an iterator that I mean, again, going back to my own experiences, I had an iterator of HTML elements in a NodeList. And I just wanted to see if the HTML element that I had from some other search that I did is in this new NodeList that I just created via a query selector. I got this node out of a query selector before. I made a new query with a different query selector. And I want to see if it's in that iterator.

JHD: Okay. So this particular use case is one where you don't have a query selector all type thing to pick it out. You just have a node identity instance.

MF: I have some element.

JHD: Like an actual node. Yeah.

MF: Sorry. Terminology in HTML. I don't do much web programming actually. But—

JHD: Okay. So yeah. Thank you. That clarifies given that you can dot drop, skip elements, dot includes. I'm not sure how much value there is in the second parameter. But it's also fine to have it, I guess.

RGN: I had a similar concern there. And I'm reluctantly in favor of the second parameter. Precisely because of the analogy with `Array.prototype`. Thank you for anticipating it. And I ultimately came to the same conclusion that you did. However, on that same note, this proposed spec text diverges in behavior because it requires an integral number rather than doing ToIntegerOrInfinity. I think that since it's there just for alignment, we should probably align exactly.

MF: That one's really hard for me to come around to. Can you—is it just because you want to be as close to Array.prototype.includes?

RGN: Yeah. If we're not going to match it exactly, then we shouldn't have the parameter at all. Because drop is so much more clear.

MF: With those new constraints, I would probably be on the side of not having it.

RGN: Also fine.

MF: I know. Okay. Okay.

RGN: That's all.

PFC: I'll say something along the same lines but coming to the opposite conclusion. I think we can't use a negative index in the skipped elements parameter, whereas in `Array.prototype.includes`, you can because you know where the end of the array is. So I figure if we're already not going to match that, then what's the point in having the second parameter? But I also don't care that much.

KG: We can't simply not have the parameter. We could in principle throw if you pass any argument, but we can't have a situation where someone does `.includes(x, 5)` and that searches from the beginning of the iterator.

RGN: All right. I'm reversing my position. I found PFC's explanation compelling. You can't do negative anyway. You're already diverging. We can actually incrementally push the language forward even though it would be better to not have it at all.

MF: Awesome.

EAO: I would like an exploration of using Python syntax for this. The `in` operator specifically. So you have `needle in iterator`. I am perfectly and completely willing to believe that there are good reasons why this would not work. But I think it would be appropriate to do that exploration during stage one of this proposal before advancing to stage two. If this concern can be dismissed completely out of hand immediately, then that's entirely plausible. But I kind of hope that there might be a way of implementing that syntax for us as well.

MF: To be clear, are you asking to use the existing `in` operator with an iterator on the right-hand side?

EAO: So I'm asking for a good reason why we would not be able to use the Python syntax. Well, we have `needle in iterator` as the syntax for testing this.

KG: It already means something.

MF: Yeah. It already means something. We can't change what it means.

KG: It checks if a key exists in an object.

EAO: And we could not even consider what to do if the thing on the right side is an iterator specifically.

KG: I would be strongly opposed to changing the behavior of the `in` operator.

EAO: That is sad. And unfortunate.

MF: I mean, we can't even say if the thing on the right-hand side is an iterator. That would just mean having these string-named keys. You could maybe tie it to some new protocol that is based on symbols that `in` defers to. But yeah. I don't see how that could possibly work.

KG: At the cost of slowing down every existing use of the `in` operator.

MF: Yeah.

SFC: All right. Yeah. I'm glad we briefly explored that space. I think we've—Okay. Next topic I have on the agenda is—This might be out of scope. Because this probably impacts other parts of other operations as well. But if we have a composite, is the expectation that if you call contain or what's this? Includes then the composites would match? Is that part of the intent? And would that be in scope of the composites proposal? And would we basically, I'm asking because I want to make sure we're not designing ourselves out of the ability to do an includes that would allow composites to work the way that you want them to work.

MF: I think this is more of a question for the composites proposal. Because they're working on their notion of equality. And this is just using the same notion of equality that `Array.prototype.includes` is using. So however they decide that they're going to be defining composite equality for the operation that `Array.prototype.includes` uses, which is SameValueZero, then this will do the same.

SFC: I guess to rephrase what my concern might be is that if we add `Iterator.prototype.includes` that does object equality, and then but composites needs composites equality, then I don't want the community to be like, "But I don't want to make all calls to `Iterator.prototype.includes` to be a little bit slower because we need to check if it's a composite or not."

MF: Is it the case that right now composite equality is using a method to do their equality comparison? Or are they—in a strict equality comparison operation, are they using—

SFC: I mean, I think we're last meeting we were discussing about if it's interned objects or something like that. But I mean, ACE would know a little bit more about that. I just want to make sure we're not designing ourselves out of the ability to use contain composites. For this, I'm just it's a stage yeah. Is this a question that I thought would be appropriate to ask at this stage? And if your answer is it's in scope for the composite proposal, not this one, then that's a fine answer.

MF: I do think that. I also do think that it is a possible stage 2.7 thing, not a stage two thing. But oh, ACE has a reply.

ACE: So I mean, the latest presentation they did on composites is that I'm currently leaning towards them being interned. So they'd be triple equal. So then this would just work with zero spec changes at all. It just falls out of the thing. Obviously, there are other ideas, is that they're not interned, but `Array.prototype.includes` sniffs and branch checks on these things. And then does a different equality operation, which, yes, has technically non-zero overhead. But in my experiments, effectively zero overhead in practice. So yeah. As what MF said, the intention is it will work in `Array.prototype.includes` however that happens, and I would expect it would also work here.

CZW: I would like to ask for a clarification on the motivation of the proposal about how could it be practically useful? For example, I feel like this is encouraging people to iterate multiple times if they find that something in the iterator after using the includes, because `includes` does not return a useful item inside the iterator. And if people found that something is contained in the iterator, they need to iterate the iterator again to actually extract the item which is not the same as an array because you can index access an array.

MF: So to be clear, they are passing the item into `includes`. So they already have the item. They don't need to iterate again to get it. This isn't taking a predicate. It's not like `find`. But you could make that argument if you were talking about `find`. But we already have `find`.

KG: Or findIndex, which we don't have.

MF: Yes. But we're not proposing that. We're proposing `includes` today. Does that resolve your concern? I feel like—I don't want to have sounded dismissive about it.

CZW: I don't feel like I'm against it. I'm just a little bit unclear about it.

MF: I'm trying to figure out if I can quickly unconfuse you. Yes. So if I was just checking that an iterator would yield this value, I don't need to then iterate the iterator to get this value. Because I already have it. And it's useful to have known that that iterator yielded that value, on its own, just for certain questions, like what I was giving an example before of “I have this query selector that I ran, would it yield this value that I already know?”. I don't need to know where it is, what the relative elements are around it, how many were yielded before it or would have been yielded after it? All I need is to know that it was present.

RGN: Yeah. I've got another example for that, which is file system contents. If I'm looking through a directory or a directory tree, maybe I care about the presence of node modules, .git, readme, etc. Any number of entries all I care about is, was it found. Because then I can classify the input into one bucket versus another. And it doesn't matter to me how many elements I had to visit before finding the match.

MF: Okay. So we're at the end of the queue. I would like to ask for stage two for the design as presented, even though we went back and forth on it a couple of times through that. We did arrive at what was originally presented. So do we have consensus for stage two for this proposal design as presented?

DLM: ACE has a clarifying question.

ACE: Ironically, I’m helping with the notes but I actually don't know what you said. What is the behavior of the second argument?

MF: It's all up there on the screen.

ACE: What about the second?

MF: So the second one is passing it to drop before doing it.

ACE: And we throw if–

MF: And yeah. We throw for NaN. And we throw for negative numbers. And we throw for non-integral numbers. The only reason those are split out a little bit is because we throw TypeError or RangeError as appropriate.

ACE: Thanks.

ACE: Yeah. We have two minutes left. And Shane has a clarifying question. I thought we had agreed to drop it. And now we have to add it back again, the second argument. I'm a little confused.

MF: No. You must have zoned out for like 30 seconds there where we went kind of around in a circle and arrived back at where we started. RGN was convinced quickly.

DLM: We have a plus one from RGN in the message. But it'd be great to hear a second voice of support for stage two.

JHD: I'm assuming that the main thing that motivated the turnaround was KG's comment about the bug proneness of just omitting the second argument.

MF: No. It was not entirely that. It was also PFC's comment about how we have to be different about handling negative integers.

JHD: Okay. Yeah. Then I'm in support of the design as is.

ZB (on queue): support as well.

DLM: So it sounds I should ask for running out of time. But any objections to stage two?

RGN: I'm also happy to be a reviewer.

Okay. Perfect. Thank you. All right. So as a reviewer, do we need more than one? I can't remember.

MF: Yes. I would like two stage two reviewers. Preferably, those who have already reviewed the spec text.

RGN: Which is everyone in the room.

MF: Because it was up on the slides.

RGN: I volunteer as a reviewer as well.

MF: Great. Have you reviewed the spec text? Okay. Could we do stage 2.7?

RPR: Yeah. We're at time. How do you want to handle this, Chris?

MF: We have 15 more seconds.

DLM: Do we have support for stage 2.7? We have RGN with support. Another voice of support, please.

JHD: Editor review?

MF: Oh, you're asking for 262 editor.

JHD: Yes. As far as stage two reviewer review, it seems good.

MF: I can pull a BAN and say, "I'm a 262 editor."

CDA: Yeah. So I think what we're talking about here just to be clear for everyone, part of the entrance criteria for 2.7 is that the assigned reviewers have signed off on the spec text and the relevant editor group has also signed off on the spec text. The question is, are we meeting that bar? RGN is nodding. JHD? You have signed off on the spec text?

JHD: I have.

CDA: Okay. You got a plus one from KG. There's a question from PFC. But I mean, we're past time. You're okay with?

PFC: Can I do like 10 seconds? I support this as part of having a full-featured iterators library in the language. I was wondering if in a future meeting you could give a presentation about your iterators roadmap.

MF: I'd be happy to. I didn't do that because I figured people would be bored by it.

CM (on queue): What could possibly go wrong?

RBN: As a newly minted TC39 ECMA 262 editor, that's editor-approved as well.

CDA: The editor's group has officially signed off on the spec text. Plus one from Shane. Did you want to speak, Shane?

SFC: Stage one motivation and stage two design shape are the hard ones. Stage 2.7 is pretty easy if we agreed on one and two.

CDA: All right. Do we have any objections to advancing to 2.7? Seeing nothing on the queue. Sounds like you have stages 1, 2, and 2.7.

MF: All right. Thank you, everybody.

### Speaker's Summary of Key Points

* valuable to to have an includes function on iterators
* not easy to do yourself today without an includes method
* best to match Array where possible: name, SameValueZero comparator, skipped elements parameter
* going to follow new normative conventions for parameters/conversions

### Conclusion

* Advances to stage 2.7
