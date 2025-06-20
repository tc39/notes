# 108th TC39 Meeting

Day One—28 May 2025

**Attendees:**

| Name                | Abbreviation | Organization        |
|---------------------|--------------|---------------------|
| Ujjwal Sharma       | USA          | Igalia              |
| Ross Kirsling       | RKG          | Sony                |
| Waldemar Horwat     | WH           | Invited Expert      |
| Rob Palmer          | RPR          | Bloomberg           |
| Daniel Minor        | DLM          | Mozilla             |
| Daniel Rosenwasser  | DRR          | Microsoft           |
| Gus Caplan          | GCL          | Deno Land Inc       |
| Duncan MacGregor    | DMM          | ServiceNow Inc      |
| Christian Ulbrich   | CHU          | Zalari              |
| Zbigniew Tenerowicz | ?            | MetaMask            |
| Tom Kopp            | TKP          | Zalari              |
| Tooru Fujisawa      | TFA          | Mozilla             |
| Jack Works          | JWK          | Sujitech            |
| Jesse Alama         | JMN          | Igalia              |
| Dmitry Makhnev      | DJM          | JetBrains           |
| Oliver Medhurst     | OMT          | IE (Porffor)        |
| Tab Atkins-Bittner  | TAB          | Google              |
| Jonathan Kuperman   | JKP          | Bloomberg           |
| Eemeli Aro          | EAO          | Mozilla             |
| Richard Gibson      | RGN          | Agoric              |
| Chengzhong Wu       | CZW          | Bloomberg           |
| Steve Hicks         | SHS          | Google              |
| Mikhail Barash      | MBH          | Univ. of Bergen     |
| Yusuke Suzuki       | YSZ          | Apple               |
| Chip Morningstar    | CM           | MetaMask            |
| Yulia Startsev      | YSV          | Mozilla             |
| Istvan Sebestyen    | IS           | Ecma                |
| Philip Chimento     | PFC          | Igalia              |
| J. S. Choi          | JSC          | IE (Univ. of Utah ) |
| Ron Buckton         | RBN          | IE                  |
| Luca Casonato       | LCA          | Deno Land Inc       |
| Samina Husain       | SHN          | Ecma                |
| Andreu Botella      | ABO          | Igalia              |
| Jonas Haukenes      | JHS          | Univ. of Bergen     |
| Romulo Cintra       | RCA          | Igalia              |
| Jacob Smith         | JSH          | OpenJS              |

## Opening & Welcome

Presenter: Ujjwal Sharma (USA)

USA: All right. Looks like my slides are up. I hope I am audible. I am audible in the room. Could I get a quick check from friends online.

WH: Yes, I can hear you.

USA: Thank you, Waldemar. All right. Let’s start.

USA: Welcome. Everyone, in person and online to 108 meeting of TC39. Let’s go over a few details and start the meeting.

USA: First of all, to all of you here in person, welcome to Coruna. I hope you like our city. There’s three fun facts in know order about Coruna. First is the Torre that you might have seen from everywhere; it's the symbol of the city. TDZ was originally built by the Romans. It’s one of the oldest lighthouses in the world. And the oldest one in—still in operation. Deportivo, the following football team, it’s not impossible now, used to be a spanish football team once. I thought it was a fun fact. And Coruna has been the ancient capital of Galicia and something not locals know is that it was only formally replaced in 2002.

USA: This is a hybrid meeting which means that we have folks in person and online. And, you know, random details. I can actually fill in with some local logistics still. So if you are still on our network, there’s the access ID and passwords. There’s an accessible bathroom on the other side and kitchen where you can grab a snack. There’s also snacks along the way. And if you haven’t grabbed a tag or need a mask or a test, they’re on the desk outside and that’s it for the local logics. Feel free to tell us if you need help. My personal contact information is also on the reflector. So feel free.

USA: Yes. So regarding the masking policy. There’s a slide update. We continue with the COVID measures as expected from the previous meeting, we will follow them if you have any concerns regarding them, contact us we would like to do better. Regarding the mask policy specifically, this is the first meeting where we move to not mandatory masking. However, it is still encouraged.

USA: Let me get used to the chairs group. Here is me and Rob in person. Chris is going to join us online. And Daniel Minor is here—sorry, in person. As the facilitator as well as Justin and Daniel, joining us online as well.

USA: Make sure to sign in specifically for folks joining online. You should have seen a form like this and filled it in to get to this point. If you haven’t, please fill this out. This helps us keep track of delegates and while you’re at it, feel free to do the delegate survey. Okay.

USA: So about the code of conduct. This is, you know, a change to our usual policy and quite important. This event, like the previous one that we did, has a dual CoC policy. Both TC39 code of conduct which I believe you are all familiar with and Igalia code of conduct which you are not familiar with, are enforced here. In practice, this means that you have to abide by both of them and may report incidents to either or probably both. Igalia CoC is up in multiple places if you want to scan the code or read about it. And the TC39 CoC is up at the regular place. I do suggest reading these whenever you can, if you haven’t.

USA: Talking a little bit about the major events, we have one from yesterday, which had already happened. So on Tuesday, yesterday morning, at 10, we had the TG5 workshop, which was well, thank you, for organizing. Today we will have two things: so first at 6, we have the guided city to your. At the plaza in the centre of the city. If you don’t know where that is, ask. I would be happy to take you there. And later, at 9, we start with the social dinner. The location for all of these is shared on the reflector, but feel free to ask.

USA: Tomorrow, we have a really fun community event planned for you. If you signed up for it already, thank you so much. If you haven’t, and you are free around the time, please join us. I think it will be really interesting and insightful for the local community to meet us.

USA: Moving on, here is the daily schedule that we are going to abide by for the three days. The meeting is at 10, two above that, the doors open at 9. The breakfast starts around 9:30. We are going to break at 12, for lunch. For an hour. Until 13. And go for another two hours. Until the mid-afternoon break, and the meeting ends at 17. So 5 p.m. if you follow the 12 hour calendar and the building—well, the office closes at 6. So you may want to hang around, but if any of it falls outside of the schedule, please let us know.

USA: A quick overview of the comms tools for our meets for newcomers and reminder to the older delegates. We have TCQ this the entire meeting. We will have the entire schedule here soon. Then you have the participant view, which looks like this. You have the topic, who is speaking and a bunch of the buttons. They all do different things. And then the speaker view, which has one extra button. Going over the button, increasing from order of urgency, so basically saying, that you want to add a new topic. You want to discuss a new thing without any sense of urgency. It adds you to the bottom of the list. Discussing the current topic puts you at the top of the list. You want to discuss the current topic that’s being discussed at the moment. Clarifying question, at the top of the queue. This is a way to interrupt softly the ongoing discussion and ask a clarifying question that might help with the rest of the queue. Point the order, in red at the top of the queue and this is used only for, you know, stopping essentially and if you think that something is a miss, you have no notes, if you can’t—off-line, use this, but reframe from overusing. I am done speaking button. This is, you know, a terrible button. Please don’t use it. It’s tempting to press it. Please don’t press it.

USA: Then the matrix chat. You are not on matrix, join us. That’s where we discuss everything async and during the meeting, TC39 and TC39 delegates or official chat or technical chat and template dead zone for banter and everything offtopic and there’s more, more specific chats. Please join the TC39 space to check out all of them. A reminder to folks in person, if you are not part of matrix group for the in person considered nation, ask me for invite or join it. It’s on TC39 space. It’s a useful room for the next couple of days. Talking about the IPR policy. I am not a lawyer. But yours should have gone through it. But to reiterate a time by part of the meeting, in this room, we are all assumed to have signed this IPR policy. Either your employer signed this for you or you have signed it as an individual. If you haven’t or don’t believe they are—something applicable to you, please talk to us most immediately. And it doesn’t apply to observers. So observers are welcome to observe. But as a result of this, it should not be able to contribute anything to the meeting.

USA: Then we have notes. So I believe the notes are already online and being transcribed. We would ask you to help us out with them. But most importantly, after you finish with any of your topics, please summarize key points or give conclusions that help us make the notes more useful to the general public. And there is a blurb that I am speaking to say out loud at this point. A detailed transcript of the meeting is being prepared and on Github. You may edit this at any time during this meeting in Google Docs for accuracy, including deleting comments which you do not wish to appear. You may also get corrections or deletions after the fact by editing the Google Doc in the first weeks or making a PR in the notes for contacting the TC39 chairs correctly. Thank you.

USA: Talking briefly about the next meeting. It’s the 109th meeting remote. It’s going to be in exactly a month-endize from—two months from now. Pretty standard. 28 to 31 July. 4 days. Online and in the Pacific daylight time.

USA: Okay. Now, the—no. At the committee housekeeping part. First of all, we like to approve the previous minutes of, I believe, you might have gone through them, they have been merged. The notes from the last meeting. It’s been like a month since we had it. So yeah. Do any of you have comments? Either in person or online about the previous minutes? No. I assume we approve the previous minutes.

USA: Now, let’s give another minute to adopt the current agenda. Any concerns or late editions? No? All right. Then—all right. So we have time if there are any topics that you’ve been holding off on or, you know, think would be worth raising to the committee, a productive use of our time, especially, you know, during the afternoon we could do breakout sessions or something. Although, we could have that time for continuations. All right. Now, it’s time for us to do the uncomfortable thing. Ask for note-takers. Please. Thank you. So Christian, John, and Oliver. Right? Okay. Thank you. Three volunteers right away. We are doing great. Thank you, everyone.

USA: All right. Now, I hand it over to Samina.

## Secretary’s Report

Presenter: Samina Husain (SHN)

- [slides](https://github.com/tc39/agendas/blob/main/2025/tc39-2025-020.pdf)

USA: Two more things. One the microphone has to be relatively close to you while speaking. So you know, if somebody mentions that you are not audible or feel that, you know, from the feedback in the room that you’re not audible enough, please try to be closer to the microphone. The exact heuristic that we measured was, like, if you can touch the microphone in your hand, your mouth, and the last thing is, the camera, the camera is a bit smart. It tries to guess who is speaking and tries to put them in the frame. If you would like to be in the frame, and you aren’t, you can try to speak up. But if you are presenting, we would also recommend just using your front camera for that, if you would like. That’s it. Thank you.

SHN: Thank you Igalia for hosting this meeting. Beautiful location. And a great setup here. And I am really looking to the social events. I’m sorry I missed yesterday’s TG5 workshop. It’s good to have participation and the community event coming up will be quite active. So that’s great for this community and for ECMA.I have a very short update today. I do have a longer slot on the agenda tomorrow to present about the ECMA framework and I will focus on those topics tomorrow. Today I will do the usual update. AKI and I are supporting this committee together. She will be back by the next meeting.

SHN: Just a quick overview. It seems we just had our last meeting a few weeks ago, but it’s almost been eight weeks. But a lot has happened. Focus on ECMA262 and ECMA402 the editions are just about ready. The opt-out period will end very soon and I will also give a short update with a new TC and my annex has the usual information to look at. The opt-out review for 262 and 402 has already started some time back, it ends on Saturday, that’s May 31. So far there’s no issue, traditionally there hasn’t been anything. I assume the next few days will go smoothly and both editions will be ready for June 25th GA. Perfect. Thank you for all of that work. I think Aki will prepare the PDF and perhaps already got most of it done. I think that’s excellent.

SHN: TC57. A number of discussions on this TC. The original topic was brought up by Daniel. Other members were also involved. We had an ExeCom meeting a couple of weeks ago to discuss this. And I appreciate the support that we had from TAB, from Google and JMN from Igalia to make sure we had everything well understood and that the questions that the ExeCom may have on this topic were addressed. So it’s good news we would like to move forward with TC57. The schema languages, you see the scope written and the program of work on the slide. There are a couple of things I still need to do. I will work with TAB and JMN to get more guidance. We want to make sure JSON and the KDL committee are aware of how to move forward and also well aware of what we need to do regarding the RF royalty free, and any IPR topics that we want to ensure aligns with the ECMA rules and regulations. I do understand that is moving forward and that’s not a show-stopper. But the action lies with me, which I will have to do before the June 25 meeting at the GA in which we anticipate to approve this. So again, it’s great that we have this new TC. It’s been a number of discussions to make sure we are not overlapping any other work from any other group. And that it is something that both the committees want to do. That is a good step forward and I will keep engaged on this.

SHN: As per usual, I will continue to look at the invited experts. I always do it as a reminder at the end of the third quarter, I will review the complete list. We don’t remove anybody. It’s rare. I like to go back to individuals who do represent organizations to see how they are and if they are ready to join with their interest and work with TC39.

SHN: W3C, I always remind people of their horizontal review if anyone has interest in doing that. I should point out that the W3C has started a new community group on AI. I will reach out to talk about that because Ecma also started—a technical committee, TC56. Ecma introduced this officially this spring on AI agents. I will reach out to W3C on that. We have a bit more collaboration ahead of us.

SHN: I think we have gone through the code of conduct and invited experts, summary and conclusions are relevant. So I appreciate everybody’s effort on that. We did well at the last meeting and AKI was very good at getting it all organized. The document list is on my annex. I will jump to it. There’s a bunch of documents we've worked on since our last meeting. If you have any interest to understand more about the latest documents both from a GA perspective and a technical committee just let your chairs know and they will provide the information. The next meetings are set, already mentioned by USA. What is important is the next meeting coming up for the general assembly. June 25-26 meeting. The approval of the next editions. Please keep in mind the ExeCom, reviews new topics, also about standards that need to be approved. If there are other standards, members here in this group that are involved in other technical committees to remind you of the dates of the ExeCom that are important and of course the chair’s report is always reviewed there. Dates are published for the next year. So as you book—plan your next meeting for TC39, keep these dates in your planning.

SHN: And that is the end of my short update. I am open for any questions.

### Speaker's Summary of Key Points

A brief update was given, where highlights included progress on ECMA-262 and ECMA-402, which are on track for General Assembly approval in June, pending the close of the opt-out period with no issues expected.

The formation of a new Technical Committee, TC57, focused on schema languages, was also addressed. The support from TAB (Google) and JMN (Igalia) was acknowledged for clarifying concerns and outlining the remaining steps, including coordination with stakeholders to ensure compliance with Ecma’s Royalty-Free (RF) IPR policy.

Additional comments included ongoing review of invited experts, upcoming collaboration with W3C, particularly on AI, and a reminder of the code of conduct and document access.

Finally, dates of the upcoming General Assembly and ExeCom were noted to plan accordingly for technical committee activities.

RPR: Sorry. No questions. I realize I only just opened up TCQ on the correct item. You are welcome to go on to the Q&A. If there are any questions, SHN.

SHN: Great. If you can always approach me outside or anywhere and also tomorrow I will do a presentation at the ECMA framework. I hope that will be a very positive discussion to bring you up to speed on where we are and the things we are doing together. Thanks.

USA: All right. Thank you, Samina. Next up we move on to the ECMA262 editors updates.

## ECMA262 Status Updates

Presenter: Michael Ficarra (MF)

- [slides](https://docs.google.com/presentation/d/1SrO2NdgSdWdZ9dCYRFvxnpOhTz94aXmn5ccGeecF2gs/edit)

SHN: Just to comment, earlier we talked about the IPR. Don’t assume anything, if unsure you don’t have a royalty free signed off by yourselves or organization, just double-check. And let me know or let the chairs know. It is important. So don’t make any assumptions. Thanks.

MF: Okay. Everybody's favorite part of the meeting. Editor’s update. A lot has been done. But not much you are going to care about. So we have the one normative change which is the pull requested introduced by NRO at the last meeting. You should remember it. But it should have no actual impact. This was questionably marked as normative. And nothing editorial that any of you need to concern yourselves with. We did update our editorial work section to better reflect what our actual plans are. I think the only one that anyone here might care about is the optional parameters mostly going away where it makes sense for them to. We are trying to reduce that. We would like to remind everyone that there are keyboard shortcuts, ECMA262 and anything generated by Ecmarkup, proposals as well. Question mark, it gives you the help dialogue. So you can use those. And that’s it.

USA: Topic by Nicolo in the queue.

NRO: Yes. I started pulling structuredClone on the list of things. Nothing actually is exposed in any way.

MF: Yeah. We want the infrastructure for it to be in 262.

USA: That was it for the queue. Thank you, MF.

USA: All right. Then, let’s move on. I am next.

## ECMA402 Status Updates

Presenter: Ujjwal Sharma (USA)

- [slides](https://notes.igalia.com/p/GhteY-6ME)

USA: All right. Share my screen real quick. It looks like it works. Can you see this? Yes. All right. Hello, everyone. I don’t know why I make slides for this. But I guess it’s good to convey this information. Hello. This is the 402 status update. We have two editorial improvements. First we marked the default locale as an exact operation as a fingerprinting. 997. And we eliminated the use of this tag. It says, EMU normative optional. This was done by RKG. Thank you, Ross. And that’s it. That were the two main editorial changes that we made. There’s a few normative changes that you are going to hear from us about in a bit and that’s been all for, for 402. Thanks.

USA: Nobody is on the queue. All right. Next we have CM.

## ECMA404 Status Updates

Presenter: Chip Morningstar (CM)

CM: So I had every intention of being with you in person in A Coruña. And, in fact, spent the past two days in airports and on airplanes to that end, but American Airlines had other ideas about how the air transport business works and now I am back in California. And anybody who cares to find out more about that can talk to me off-line.

CM: And what I discovered is that regardless of whether I am in California or A Coruña, JSON has not changed.

USA: That’s a relief, Chip. But not about your flight. Sorry about that. And yeah. See you later.

## TG4: Source Maps

Presenter: Jonathan Kuperman (JKP)

JKP: Yeah. I can do this update. I don’t have slides. But we just have a very brief update. Which is we are still working on our three main features, which are scopes, embedding the scope information, source maps for debuggers to use, reign mappings allowing a new ability to mark a range inside source map mappings and the debug ID, allowing tools source maps with the generated code at the time. The debug ID proposal includes another magic comment. Which brought us back to the parsing of comments issue that we concluded last year. We are working with removing that ambiguity. We continue to work on those features.

## TG5: Experiments in Programming Language Standardization

Presenter: Mikhail Barash (MBH)

- [slides](https://docs.google.com/presentation/d/1QhITTbFDCmPNFV2U2K-YDsPNyOXTNCPCsTyjwwOZwAc/edit?usp=sharing)

MBH: Yes. Good morning.

MBH: So a short update. We had a successful TG5 at the university of Coruña. We continue to have regular monthly meetings, last Wednesday of each month. And, for example, this April we had a meeting about categorizing proposals and observations from proposal statistics and I will have later today a separate topic about this. The next TG5 workshop is planned for the 17th of November in Tokyo at Bloomberg. And I would also like to briefly mention the outreach activities of TG5. The European Conference on Object-Oriented Programming will be held this July in Bergen in Norway. YSV and I are arranging this, and I have here highlighted the topics that might be interesting for the delegates if you would like to attend. Thank you.

MBH: Thank you.

## Normative: Add "Late Errors for Function Call Assignment Targets" to Annex B ([\#3568](https://github.com/tc39/ecma262/pull/3568))

Presenter: Ross Kirsling (RKG)

- [PR](https://github.com/tc39/ecma262/pull/3568)
- [slides](https://docs.google.com/presentation/d/1V8QKaDqqAXfuwR3Ymi3blgT_auPalM3ZYXgAjyaLN4U/edit?usp=sharing)

RKG: Sure. Yeah. This is amazing. Half an hour ahead of schedule. Cool, so good morning to everyone local in Spain. I am here to talk about adding a section to Annex B 3. Everybody’s favorite area of this specification. So this section is, I am proposing to call late errors. It’s time for us to finally address this elephant in the spec. The web reality is that in sloppy mode, using a function call as an assignment target is not an early error like the spec claims it to be. It is a runtime ReferenceError. This affects simple and compound assignments, update expressions, and `for..in` and `for..of`. The one exception is that logical assignment being a relatively new addition to the language doesn’t have this web reality issue. It is always an early error. So that’s cool.

RKG: The one subtle point is, when precisely the ReferenceError is thrown, you could imagine a world where we—the spec does the least effort thing possible and just let a ReferenceError being thrown when you do a put value. That’s not the case. You can also imagine the option where we know that we are going to try to assign to the result of a function call so we don’t do the function call at all. That’s also not the case. The case is that we throw the ReferenceError immediately after calling the function. And in particular, we don’t resolve the return value to a primitive. Nor do we evaluate the RHS if there is one. My—one of my main reasons for calling this out is that SpiderMonkey has a bug which is that valueOf gets called for `f()++` in spite of the fact that it doesn't for `f()+= 1`. I think this is basically just a discrepancy within SpiderMonkey itself and should be perfectly safe to fix. With that, I have [PR \#3568](https://github.com/tc39/ecma262/pull/3568) that needs your consensus. It follows the new Annex B editorial convention—we are now inserting normative optional blocks into the main body of the spec and then just having a blurb and links to those normative optional blocks in Annex B itself. And the change itself basically amounts to augmenting assignment target type with a new value “web-compat” and using this value in each case to throw a ReferenceError immediately after the function call.

RKG: So thank you for your attention. And ask you for your consensus.

USA: Yes. We have Daniel Minor on the queue.

DLM: Thank you for doing the work to put this together. This makes a lot of sense to me and we support it

RKG: Wonderful. Thanks, Dan.

USA: Next on the queue we have MF who says, + 1. This is great. PR is great.

RKG: Thanks.

USA: Let’s give it like half a minute more. See if somebody else has a point to make about this. It doesn’t look like it. No. Duncan says, looks good to me.

RKG: Wonderful. Thank you so much.

USA: All right. Last call. For any comments. All right. Looks like you have support—oh, no. There’s WH on the queue.

WH: I can probably guess the answer to this: I assume there are things on the web that are relying on this behavior somewhere?

RKG: Yes. So the foregoing discussion on Github issues where I finally picked this up to actually do the work, basically everyone was quite pessimistic about fixing this in sloppy mode, or to rephrase it differently, confident that it would break the web to do anything about sloppy mode. But we’re not worried about strict mode. Assuming nothing has changed in Google’s perspective on that matter, yeah. The changes needed for strict mode should be something that we want to do and aren’t worried about negative effect from.

USA: That was the queue. Let’s give another minute, just in case. All right. That was it.

RKG: Cool. Thanks, everyone. Have a great meeting.

USA: Yeah. And thank you, Ross. Would you like to summarize? I think… this one’s fairly quick. But still.

RKG: Sorry, do you mean in the notes or… ?

USA: Yeah. You could either dictate a summary here.

RKG: Yeah. Then, we reached consensus, I believe. Is that… ?

USA: Yeah, I guess that’s pretty much it.

RKG: Yeah.

USA: All right.

RKG: Thanks so much.

### Summary

This discussion was around a PR specifying the web reality that certain errors would not be early errors in sloppy mode on browser-hosted engines. It aligns with the new Annex B editorial convention documented at ([ecma262\#2952](https://github.com/tc39/ecma262/pull/2952)).

### Conclusion

- Consensus on merging the presented PR

## Normative: Added note about sets of locales for web browser implementations needing to not change as a result of user behaviour ([ecma402\#780](https://github.com/tc39/ecma402/pull/780))

Presenter: Ujjwal Sharma (USA)

USA; All right. All right. So about [ECMA402 \#780](https://github.com/tc39/ecma402/pull/780). What is this pull request. And why am I talking about this now? So I would like to give you some information. I believe this is a fairly non-controversial pull request, but let’s see. 780. And the title of the pull request is quite a handful. A mouthful, should I say. But going over it, it says, added a note and it’s a norm active note that’s added here about the sets of locales for web browser implications needing not to change as a result of user behavior. I believe that should do it. But perhaps a little context would be even helpful.

USA: So this came up back in May 2021, sounds funny to have the dates on, but yeah. This—sorry. This change has something to do with me. I thought it was interesting. Back in May 2021, we were relying on the Intl enumeration apse proposal. There was a request from Mozilla to add a normative node to make sure that while there’s a agreed upon API, which was being useful was being added, there was no accidental change that would be introduced. So the idea was that the entire payload would be shipped essentially. That’s the original issue. It says ships the entire payload and as long as the set of locale shapes was static, we wouldn’t be able to use something like the API for evil. Add beyond that, since this was never in scope for Intl, we agreed and started working on this by May 2023. Since then the PR has been in the works and reviewed. And got a lot of reviews and comments. After everything, we agreed upon wording. The noted self is really small and minor. But the exact words matter quite a bit. We waited for final approvals. Thank you, DLM for helping with coordinating with the folks the SpiderMonkey and we got the final go ahead in May 2025. So a short while ago. And we got TG2 approval timely. Two years jumps for this proposal. Here we are asking for consensus from TG1.

RPR: Comment from Daniel Minor.

DLM: Yeah. Thank you for sticking with us. We are happy with the current text. We ran it past our privacy people and YSV has had a look at it. And we support this.

RPR: Thanks, Dan. All right. So give it a last check. Any objections? We have got neutral from Shane, perhaps.

SFC: Yeah, I wanted to note this is definitely the exact phrasing and words have been going around for a bit. So I think that we have struck the right balance between documenting the status quo, preserving the user's privacy, as well as giving us room to explore digitally the languages as we move forward. So I support this.

RPR: All right. So there’s been no objections. And three voices of support. So that is confirmed. We have consensus.

USA: Great. Thanks, Rob. Moving on, then. I think I have kind of a speed run. Next I have 8 new numbering systems to Unicode 16.

### Summary

- The purpose of this pull request is to add language into ECMA-402 that explains expected behavior by browsers to prevent user fingerprinting by tracking available locales

### Conclusion

- The original reporters of the issue are satisfied with the language and the PR received consensus to be merged

## Normative: Add 8 new numbering systems for Unicode 16 ([ecma402\#929](https://github.com/tc39/ecma402/pull/929))

Presenter: Ujjwal Sharma (USA)

USA: So I originally wanted to make slides for this as well. I realized actually in the end, not only were they not super useful, but they were actually less useful than going through the PR.

USA: So this is a PR that was made by Fran. This is pretty routine for anybody sort of unfamiliar with this. Basically, we need to keep updating the spec for new releases. This one refers to Unicode 16, adding 8 new numbering systems. We do this because we have a table in the spec where we literally list out all of them.

USA: Actually, no. Let me… here. No. Let me jump to it real quick, then. I am really sorry about that. Sorry. Okay. So here is the list of the currently supported numbering systems. Basically, we keep it in the spec to make sure that there’s no difference between what is shipped across different implementations, but this is, the PR for adding the new 8 systems is a reality in terms of, you know, everyone implementation having moved on to support Unicode 16. This is actually what the PR was waiting on in the first place, as you can see, from 2024, so for a while it was blogged on getting Unicode 16 in. And when it was, it was approved in TG2. So by mistake, it got merged. And we realized that it wasn’t brought to TG1. This is for consensus of updating the list of numbering systems. We will continue to do this. This is obviously a routine thing, as more locale information is introduced, we will update the tables.

USA: All right. So let’s see. Yeah. Shane?

SFC: Yeah. This is the reminder, with the committee about the status of this table. It would be nice, if it is synced automatically. But it’s a best-effort basis and we wait until the numbering systems are widely available before we add them to the table. So that’s why you kind of see these pull requests coming in sporadically, once in year in the winter or spring. This is a little bit late landing. So that’s why you see these come in, when they do. So I—but yeah. I support the PR.

USA: Nicolo?

NRO: Just a question. They should look at the Unicode spec and follow normative requirement: is our table normative for implementations?

USA: Sorry. I thought you \[SFC?\] might answer that. But yeah. So this is a normative table. We mention in—well, my screen is still on. Right? In available canonical number systems, you can see while it’s mentioned that the actual algorithm and implementation-defined this is a normative reference to the table. The idea is to have a static set of things like the numbering systems, in this case, that are the minimum sort of support, but obviously as new versions come in, there—this is—this can end be a subset of all of the number systems supported. However, it’s our priority to keep the table updated, but yeah, that reality means that sometimes the Unicode update comes in before we merge the spec.

SFC: Yeah. The status of this table is that engines can support more than what is in the table, but it’s the minimum for interoperability?

USA: Shane is that new on the queue or?

SFC: That was the response to the clarifying question.

USA: All right. Then I believe that was the queue. I would like to ask for consensus to remind folks of this merged earlier \[unintelligible\], but it was a routine thing. So I hope it wasn’t super interruptive and change anything for any implementor.

USA: All right. I think without any comments we can call it and move on with the agenda.

### Summary of key points

- ECMA-402 needs to regularly update its table of numbering systems to align with the table published by the Unicode Consortium
- It would be nice if this could be automated, but for now it's one pull request per year so no one will be prioritizing that automation

### Conclusion

- The PR will be merged

## Test262 Status Updates

Presenter: Philip Chimento (PFC)

PFC: As usual, I will just cover a couple of points with no slides and I will write down the points later in the notes.

PFC: So the updates that I wanted to cover in this case are that we have been working on landing coverage for several proposals in Test262. Particularly, thanks to RBN splitting up the pull request, we have made progress on coverage of explicit resource management. We have made some progress on landing the test coverage for upsert, or getOrInsert as it’s known now. I mentioned in the last meeting, which we have also formalized in the meantime: It really helps the Test262 maintainers if proposal authors can make a testing plan and share it before writing the tests. That helps us keep track of which parts of a proposal have test coverage already. And it allows us to do review work in smaller chunks so we can check each chunk off the list as we review and merge it instead of reviewing a large 40,000 line pull request or whatever. It’s easier for us to review and merge something that way. And even the tests don't all have to be written before that, just with a testing plan, we know approximately what needs to be covered and look at it in that global way.

PFC: We’ve landed that in a new guide in the documentation, in the repo, for how to write a test plan and what is helpful for it to include. So if you are writing tests and haven’t seen that, please take a look at it. It should be helpful if you haven’t written a test plan before.

PFC: The third thing I wanted to cover is that it became clear after discussions that when the committee introduced Stage 2.7, we did not update the requirements around staging tests in stage 2.7 versus 3. The documentation is currently wrong. It says that a proposal must be Stage 3 to have staging tests. And that is not the intention of staging. It should be Stage 2.7. We had some discussions that are still ongoing about at what point should tests be moved from staging into the main corpus, whether that’s during 2.7 or 3. We’ll continue to take a look at that and resolve that question. But please do bear in mind that although the documentation says a proposal must be at least Stage 3 to have staging tests, that’s incorrect.

PFC: And our other requirement for that discussion is that with the rules around stages, we don’t want to disincentive adding more staging tests during stage 3, if the need arises. That’s what we are keeping in mind. And those were the points that I wanted to communicate.

PFC: Thank you. Any questions?

RPR: There’s just one notice. Thanks from OMT on the queue, saying, thank you to Ms2ger for merging the SpiderMonkey tests, even if in staging, it’s helped me find a few bugs, smiley face.

PFC: That’s very kind of you to say. I will pass that on. I am glad it was helpful.

### Speaker's Summary of Key Points

- Coverage has increased of explicit resource management and upsert, among other things.
- Please check the new documentation about writing testing plans, and help us by writing a testing plan for your proposal before submitting tests.
- We are examining the procedures around staging tests and stages 2.7 and 3 in order to update the outdated process documentation.

## Temporal status update and normative change

Presenter: Philip Chimento (PFC)

- [slides](https://ptomato.name/talks/tc39-2025-05/)

PFC: Okay. So this will be another update on the Temporal proposal. I guess I forgot to introduce myself in the previous item. So I will do it now. I am Philip Chimento (PFC). And I work at Igalia. This work we are doing in partnership with Bloomberg.

PFC: I am sure anybody who has attended any committee meeting has seen one of these progress updates before. Temporal is the proposal for introducing modern date and time handling into JavaScript. The proposal is Stage 3. It’s been shipped in Firefox, as of yesterday. So it is now out there. This is very exciting news for us.

PFC: I will have another slide on the progress of other implementations, but in V8 they have started their integration of the Rust library from Boa, [temporal_rs](https://github.com/boa-dev/temporal), and have a partial implementation of Temporal.Instant. And the JavaScriptCore implementation of Temporal is continuing to go forward. temporal_rs is a very interesting library. It’s used as the basis for the implementation of Boa. It’s a collaboration between developers from Boa, V8, and students of the University of Bergen, Norway. We are watching this work with much excitement.

PFC: So in this update we have one normative change, based on user feedback but I will get to that in a moment.

PFC: All right. It’s become customary to show one of the graphs every time of the percentage of compliance with the Test262 tests. Now we keep adding tests for edge cases as we find them. The baseline is going to be that the implementation test conformance goes down very slightly as we add new tests for edge cases, and those might reveal bugs in the implementation. So the baseline is conformance going down or staying the same at best. And if there’s work on increasing the conformance, it goes up.

PFC: We have SpiderMonkey at the top. 99%, which is—as expected. They are the ones that are shipping this without a flag right now. The absolute number to keep in mind when looking at these percentages, there are about 5,000 tests in the repo. Anyway, Boa has jumped up quite a lot as there have been some recent improvements in temporal_rs, the library I just mentioned. JavaScriptCore has jumped up almost a percentage point. My co-worker Tim is working on this, and has a bunch more things in the pipeline to increase the test conformance quite a lot. So If you are a JavaScriptCore reviewer and would like to see this happen, would we use some help getting Tim's work reviewed. Now, V8 has jumped down a lot because they have taken out the old implementation and replaced it with temporal_rs. This is obviously a temporary drop and hopefully they will be up the same as Boa.

PFC: I want to move to propose a normative change to the proposal. The change will be to UTC offset matching in strings. So the UTC offset part of the string is in bold here. You have a date and a time and an offset from UTC, such as -04:00, and the time zone and calendar annotations. The RFC we used to describe the strings there has no support for having seconds and below in this portion of the strings. You can’t say, -04:00:00.0 or something like that.

PFC: What does occur, in the wild, other programs emit strings that have that. We do accept it, when parsing. But we never emit it since it’s non-standard. So this is something we discussed in a previous committee meeting the October 2021. It’s been this way for a while.

PFC: Back then, we discussed that some historical UTC offsets are not whole minutes. Even in the post-1970 era sometimes. So, for example, there’s a time zone that has a -00:44:30 offset that they got rid of in 1972, which is after the start of the computing era. So if we parse a string, where that is the appropriate offset, we accept both the offset with seconds, -00:44:30, and rounded, -00:45. We do not accept the offset with seconds, if about the seconds were incorrect. Such as -00:44:40. And -00:45:01. However, we did previously match it if the seconds were present and 0. And we have gotten feedback from people using Temporal that we should not accept that. If the optional parts are present, they must match. This actually turns out to be a very interesting case. There’s a time zone that changed their offset by 20 seconds in 1952 from -11:19:40 to -11:20:00, even. And both of the offsets are valid at a certain date and time: October 15th, 1952, 1 second before midnight. Previously, it would have been impossible to deserialize this time because if you put in—you wouldn’t be able to deserialize the offset to the change, -11:20:00. If you put in—11:20, it would have matched as the first candidate, -11:19:40. And the same if you included the :00 seconds. They match the first candidate.

PFC: With this change, we propose changing it so that the seconds were as expected, :00, you mean exactly that offset. We don’t change anything about that matching algorithm used when we—when the seconds are not specified. So -11:20 without the optional parts still behaves as it did before.

PFC: So this is a lot of fiddly time zone rules to understand, but here’s a code sample showing what changes and what doesn’t change. The behavior doesn’t change if you don’t include the optional seconds. The behavior doesn’t change if you did include the optional seconds and they are correct. It doesn’t change if you include the optional seconds and they’re nonzero and incorrect. And if you do include them and they’re zero and incorrect, then the change is that that will now throw a RangeError because the offset is incorrect for the time zone at that point. And then there’s this special case with Pacific/Niue, where if you include the seconds and they are zero and they are correct, they match the correct candidate offset. So from this very specific string, you will get a slightly different time stamp that matches.

PFC: All right. That was a lot. Are there questions on this?

DLM: As of right now, there’s no questions on the queue. But there’s a message from Jason. Thank you to Kevin Ness for leading the development of temporal_rs.

PFC: That’s very thank worthy.

PFC: If there aren’t any questions, I would like to call for a consensus on changing the UTC offset matching as I’ve described.

DLM: Enter the queue, SpiderMonkey team supports this change.

PFC: Thank you.

DLM: So you can give it a minute, but it looks like there’s nothing else on the queue.

PFC: Yeah. We can just give it a short time.

DLM: Okay. I think you have consensus for this normative change.

PFC: All right. Thank you very much. I have a summary, a proposed summary for the notes, which I will copy into the notes afterwards. And I think that’s it. And I have even shortened my timebox. So to make it easier to pull something forward from after lunch.

### Speaker's Summary of Key Points

- Work on implementation of Temporal in the larger and smaller JS engines continues.

### Conclusion

- A change to tighten the requirements on an optional string notation for unusual UTC offsets reached consensus. This change was based on user feedback.

## Intl Locale Info Stage 3 Update: Normative: Return undefined if direction is unknown

Presenter: Shane Carr (SFC)

SFC: This is the item on the agenda. `Intl.Locale` stage 3 update. It’s about the one pull request about text directionality. So I made this little slide. Which you all cannot really see on the—in the room relevant but hopefully on the calm. There’s a link on the agenda.

SFC: Incident \[unintelligible\] local info gives an API for to get the text directionality, the default directionality of a a locale and it derives from the script of the locale. I have 4 example scripts here. The first is the Latin script. Which is used in European languages. This is used with the Latin script. Left to right. And then top to bottom. I was doing this Nicolo. The status quo. The APIs return LTR for this. Actually, I am jumping ahead of myself.

SFC: I am going to go ahead and actually pull the `Intl.Locale` info to you can see the spec text involved. I am jumping a little bit ahead of myself. Yeah. This is what happens when you don’t—a little bit late getting this. Here we go. We have this API right here. Which I am showing on the screen. I want to make that super big so you can see it in the room.

SFC: So this has the gettext info it will return an object with a directionality string. The directionality string is going to be either the string LTR or the string RTL. The problem and the motivation for the problem is not all scripts are LTR or RTL. I am going to go back to the slide now. And then show you what this is. Latin is easy. LTR. Currently LTR on the spec. And we want to keep did that. Arabic is the classic RTL. Keep that way. The thing with this is interesting, is for the Ougr script is written top to bottom and left to right. But in modern analysis, it’s right to left and top to bottom. And Mongolian script is in a similar boat and other scripts vertically, but in modern usage, right to left or right to left. And Unicode gives data for this in the file called script metadata.txt. Which is how the implementations are deriving their data.

SFC: So the proposal here was to return TRL. Currently, it’s returning RTL. In the pull request, it using TTB, however. TTB is not derivable from the Unicode character database, and from the script Metadata.text file rather. And it also does not clarify whether or not the directionality after the top to bottom is left or right or left to right. Therefore, the—my update would I would like to instead suggest that we approve is to keep this script as RTL, it’s modern and what the text contains. The thing, the actual change, the reason we opened this originally and the thing I think is most important is there is—let’s say there’s an unknown script. Where the implementation does not have data. For example, ZYYY will permanently be in that state. This is the unknown script. And it does not define text directionality. Currently, the specification says, you must return the string RTL or the string RTL. The PR says, you can also return the value undefined. And we should continue to return the value undefined.

SFC: So what I am proposing in this slide is not exactly what is in the pull request that TG2 has approved, but upon further research and also consulting with Liang \[unintelligible\], we didn’t do our homework, but Liang [?], this is what he said in the issue. The person I can consider to be the closest we have to like a script directionality expert we have consulted with. I can show you his comment on the issue. And this is what he says on the issue. This is on issue 90. I’m sorry, you can’t really see anything in the room. But this is on issue 90. Where he basically says, keeping in left to right, left to right or null or undefined seems to be a design that makes sense. Because other scripts have it more complicated. And because of the complexity of properly modelling discriminate directions it’s reasonable to limit it to be LTR or RTL or unknown, RTL [?] is how he concludes his comments here.

SFC: Yeah. That’s my latest proposal to TG1. So yeah. Open for comments.

RPR: So far there’s nothing on the queue. Eemeli?

EAO: Yeah. Just wondering whether TG1 is the right place to talk about this, which seems like a TG2 topic, to be honest.

SFC: Okay. So I have a good—I am glad you asked that question. I have an answer for this question. I think that what we shoulding doing here is we should be asking TG1 for approval on making this API which currently only returns a string to be return a string of a shape of a certain shape or undefined because that’s definitely a normative change that we allowed this API to now return undefined instead of a string.

SFC: Yeah. So I would like to ask TG1 for approval, because this is currently all Intl implementation locale definitely anyway. So asking TG1 to do an appraisal at the API that returns a string can return undefined, I think, is a reasonable conditional approval that the script can do. So we can move forward with the proposal. I should write out what we are actually trying to seek approval on. Alternatively, if we would rather fix up the pull request and come back in July if it’s cleaner to do it that way, that is also fine.

RPR: Are you going to be writing out something now or will you come back?

EAO: Yeah. So just to clarify, the bit about the string possibly have the value top to bottom is not at all something to be considered here. So like the text on the screen right now, is not relevant for what is being asked. Yeah. Right?

SFC: This is the information about what leads to our choices.

RPR: Nicolo?

NRO: Yeah. Like, if you original item for discussion on the agenda was like let’s add undefined and let’s also return… Now we discuss the consensus only part of the PR and the other parts of the PR doesn’t get consensus at this meeting and something like approving the undefined change.

RPR: All right. Shane?

SFC: Yeah. So I guess the consensus—the thing I am seeking consensus on is one that the—API can return an object with a—with a field containing the string value LTR, RTL or undefined. And then if TG2 feels that the enum should also contain other string variants, TG1 gives this preapproval. Something like this is what I am seeking approval for.

RPR: Shane has now clarified on the board.

?: And this is also in the slides which are linked from the agenda.

?: Okay. Yeah. That is the slides directly.

?: Okay. So one by one or… ?

DLM: Yeah. We can go one by one. The first one the API returns a string TLR or the string RTL return the value undefined. And then that’s the first item consensus. The second item for consensus if TG2 wants to add additional string values to the enumeration before reaching stage…

DLM: I am not comfortable with approval. I would like to come back to TG1.

SFC: Sorry. You like item 1?

DLM: Yes.

RPR: So we had some support for part 1. And I am seeing nods in the room from NRO. Any objections to consensus on part 1? Okay. So I think we have consensus –

SFC: I will take part 1 and go back to TG2 to see if we need to come back with part 2 later. Part 1 is the most important thing. So thank you for redoing this.

RPR: Great. And thank you, Shane. Do you want to dictate a conclusion or summary or do you prefer to edit it in the notes?

### Speaker's Summary of Key Points

Shane presented an update on the `Intl.Locale` proposal with the focus on the pull request adding number 101, which is adding `undefined` as a return value if the direction is unknown to the gettext info API.

### Conclusion

TG1 approves adding the return value of undefined to the return value of gettext info, but the committee would like more time to consider adding other string values to the enumerations. So TG2 will go back and update the pull request with that feedback.

## Maintaining Proposal Topics

Presenter: Mikhail Barash (MBH)

- [slides](https://docs.google.com/presentation/d/1jWTwZ91AbZvS8OYwDzmNdG4CmN20oyBn9qPHd3FmOQI/edit?usp=sharing)

MBH: Yes. So this is a project that we were doing in TG5.

MBH: So the question that we asked ourselves is, first of all, what are the trends in the language evolution. And the second question is, what are, if any, the patterns in the stage bumps and stage duration for proposals?

MBH: So the slides I will show now from the—the TG5 meeting which was held at the end of April. It’s worked on together with a student, Kai Waløen, from the University of Bergen. And the data I will be presenting is based on TC39/proposals repositories and the link here mentions the web app which you could play with to see what we have. But I want to just present the brief summary.

MBH: So here on the left, we have the stage 4 proposals. And we tried to visualize when they were reaching particular stages. On the right, we have the visualization of the duration in months. How much it takes for a proposal to get from Stage 1 to Stage 4. Again, I am not going into the details of any particular proposal. Here, it’s just the kind of research I am looking into.

MBH: Here is another visualization. On the left, we see the stages of proposals. On the right, we see a classification of proposals. One possible classification that distinguishes API changes syntactically changes and semantic changes. I will talk in details soon about these three. But again, just to give you an idea of what kind of analysis we are doing in that project.

MBH: Here we have an average duration per change for Stage 4. So again, we have proposals categorized as API changes, semantic changes, and syntactic changes. And we have some idea of how much time does it take for a proposal which is in that corresponding to take to get from Stage 1 to Stage 4.

MBH: As you can see, the standard deviation here is quite large. So the—there is not much we can actually get use from this analysis. Another idea that we had after that is to try to look into the classification of proposals based on the topics, on the themes that they are representing. And here, we have some topics listed which were randomly chosen for this presentation from more than 100. We identified and just visualized when—at what points in time were certain proposals, at what points of time certain proposals did get to Stage 4.

MBH: Again, for now, this still is a project in early stages. Still requires some statistical analysis and essentially for us to be able to draw any statistical conclusions from the data. But again, what I care about is about the type of research. Not about this particular analysis that I am presenting.

MBH: What we want to propose is to have proposal categories and proposal topics. A category is a change that a proposal introduces. It could be a standard library change, a syntactic change, or a capabilities change. I have here more definitions here:

- Standard library changes: modifications to the standard library and built-ins and their observable behavior.
- Syntactic change: modifications to the concrete syntax of the language.
- Capabilities change: modifications to the interpretation, evaluation, or observable behavior of existing or new language constructs which for no polyfill can be defined.

MBH: However in the presentation today, I am rather focussing on the topics. A topic is a conceptual domain that a proposal is related to. Here on the slide you can see examples of topics. Asynchrony, concurrency, performance, regex, realms.

MBH: What we think is that proposal metadata which is grounded in the structure and concepts of the JavaScript language will help support categorization, discoverability and alignment with related proposals.

MBH: What we would like to have is a change to the process document that will require specifying a proposal’s topics to get to Stage 1. The committee would maintain a non-exhaustive list of top I objects. And I would like to point out here the word “maintain”. It doesn’t mean that the committee will define the list of allowed topics, so to say. The word “maintain” is of technical nature, it means there will be a file in the TC39 repository and there’s a list of proposal topics extracted from the proposal repositories and the topics will be assigned by the champions. Or the authors of the proposals.

MBH: I understand that assigning topics can be subjective and controversial. Especially when proposals are at Stage 0 and it’s not clear whether it will even get to Stage 1 or what the solution will be or if the problem space is enough? But even if it is subjective, it seems that assigning topics will still provide an organizational value. It will help to identify related proposals, ongoing discussions, the least will be non exhaustive. So we avoid any rigidity, allow for adaptation of new topics. They can be revised. We hope that topics will improve discoverability and cross-proposal awareness.

MBH: The second part of this slide, which says that we are requiring specifying a proposal category, which can be either a syntactic change, a capability change or an API change, to get to Stage 2 or 2.7—this is not today. I am not asking about it at this meeting. We still have to work out the categories and the definitions for those.

MBH: So what I am asking for today is only the first item on this slide. To require specifying a proposal topic to get to Stage 1.

MBH: And this is a more concrete change in the process document. To get to Stage 1, entrance criteria, one new one, identification of topics that characterize the proposal to support discoverability, alignment with related proposals and areas of the language, as well as statistical analysis of the proposal space.

MBH: This is how we imagine a proposal topics file will look like. An explanation of what a topic is. Then a table or list of list topics which will be updated based on the data which will be added by the champions of proposals. Extracted from the TC39 proposal repository.

MBH: To summarize, the list of topics is non-exhaustive—it’s dynamic. And it’s going to be the responsibility of a proposal champion to assign proposal topics. No extra burden for the committee. And again, no ask related to the proposal categories. As of today, we have to get the proposals and definitions. Yeah. I am ready for the queue.

MBH: Luca?

LCA: Yeah. This is very helpful. I think it would be useful to sort this both into the topics and the categories. I understand you are not asking me for categories right now. I do have a clarifying question on the categories. You mentioned this capability change category. And the definition here was modifications to the interpretation of evaluation or observable behavior of existing or new language structs for which no polyfill can be defined. What is a polyfill? By runtime by existing overriding globals? Or is this, like, syntactic polyfilling, syntactic transforms?

MBH: I guess what we meant here is that the change would represent a semantic change, which would require substantial modifications to the engines. But I do—I do see your question, in some cases, there could be a polyfill that still would implement that. But if I could very vaguely formulate here that these are modifications for which no polyfill could be defined.

LCA: A concrete, two different proposals here the structs proposal, which is probably impossible to polyfill because the point of it is to improve performance. And like you cannot polyfill in that way. Whereas in theory there’s probably \[unintelligible\] `Symbol.enter`. A new feature that is pretty easily polyfill-able through, like, a transpiler of some sort. And with very little performance cost. Maybe it’s good to clarify these two in further duration of this in the future. Thank you.

MBH: Thank you.

RPR: JSC has a clarifying question on this same topic

JSC: I talked with MBH about this earlier. Yeah. Program capabilities weren’t a category and I raised it. Getting the idea from DE. JavaScript should be layered. And he talked about program capabilities being an important feature of some proposals, but not others. I think that—I think LCA’s distinction sounds good to me. Yeah. It’s basically, is there something that is basically impossible to do? Behavior-wise? In the engines today from user space, I like, for instance, a lot of—a lot of stuff from like, having to do with secure JavaScript a lot of that is impossible to polyfill today, I think. Let me—so like, I think, new syntax would not like just in of itself would not be considered a new program capability. It would just have to be—is it something that programs today are able to do or not? So like a new hook into engines roughly not polyfillable in and of itself. Structs? Yeah. So like—yeah. So like that’s all I have.

USA: Michael?

MF: So I definitely support this process change proposal. I think that the very low amount of additional work, more than pays for itself for what we get from this. And I am excited for the additional future work on categorization and would love to participate in that.

USA: JS Choi?

JSC: I also support this initiative. Whatever it looks like. There are very interesting statistical methods that we could apply further to this to try to characterize, like, what—which proposals are likely in general to progress or not based on, like, their characteristics. Things like multistate modelling, that kind of thing. You could even make them—you can view the TC39 processes and mark up changes. For instance, go through different stages. You could calculate the probability in the next few years what a proposal will advance or not just coarsely, based on various… I just polished a study that did that kind of thing. I am interested in this. We can go to of the [WICG.IO](http://WICG.IO) has has Github Metadata. I think that kind of thing might be, like, a sort of far reaching further goal that could take into account categories and whatever as, like, a guiding item. And yeah. I think this is very exciting. And there’s a lot of possibilities. It’s just an ask from champions, not the over the committee. That’s all.

RPR: Jacob?

JSH: Just a quick clarifying question on the definitions of these. There’s a capability change that says, for which no polyfill can be defined. Where can one be defined?

JSC: I am a little—sorry, if I am not super coherent right here. The way I view it is, yeah. I didn’t write the polyfill definition per se. The way I see it is, whether, like, it does something that programs aren’t capable of doing in user space right now at all. Like behavior-wise, semantic-wise. Like I mentioned earlier, trivially, we could exclusive new syntax in and of itself from the definition. It’s whether, like, you could write user space code that does the same thing. I think that’s—that’s what we could mean by polyfill. Obviously, this is all very stretchy right on and off. But if you have, like, if we want to make this really robust definition, it’s would be great to have you involved in the process.

JSH: My question is not the definition of a polyfill. But the definition of capabilities changes. Where no polyfill can be defined. I am asking about the case where it otherwise matches the definition of a capabilities change, but a polyfill is possible.

JSC: Hmm. You have an example in mind where, like, you could write user space with that emulates the same behavior?

RPR: I think this conflicts with what when no user-land could cope with this, therefore there is no such thing as a polyfill for it.

JSC: Do you have in mind a user space where it could have the same capability, but wouldn’t count as a polyfill. To me that’s what a polyfill is. Like –

JSH: One that comes to mind is possible is, the existing pattern matching proposal that could probably be polyfilled in addition to the language. I think it would otherwise fit this definition.

JSC: Okay. So here we have, like, an extension—standardized extensibility thing. And whether we count that it’s a new program capability. Yeah. So, like, I think that we could bikeshed over this. It’s a grey zone, in my opinion. We probably shouldn’t count it as a “new program compatibility.” Or throw it into a new category like new standardized hook or something. I don’t know. I think this is something to bikeshed. Like, broadly, though, the distinguishing between proposals that bring some kind of new behavior capability—semantic capability to user space, that can already be done versus one that doesn’t is a useful thing. Like, Dan Ehernberg has raised. I think for proposals that one of the big points is that creating a standardized point of coordination of standardized points of coordination could theoretically be done in userland, but now it’s being done in the language itself. Plus their syntax. That could be a useful third category—like, separate binary of variable or it could be—we could stuff it into this. I don’t know. We could bikeshed it.

RPR: In the interest of time \[inaudible\] go ahead. Waldemar?

JSH: Yeah. For sure. Just was curious. Thanks.

WH: Yes. Having seen what happens in various instances of keywording and similar activities—if you leave keywording to a diverse group of people, you’ll get a lot of interpretations of what the keywords mean. Looking at the list of topics earlier in the slides, I would have no idea if a proposal qualifies for \#performance, \#ergonomics, or \#others. This produces a bunch of bad data.

WH: I would prefer to see a more consistent interpretation of what the topics are and a proposed list of topics. I know you have the one on the slide, but is that what you are proposing or is the list something to be developed later? If it is something to be decided later, then I think we should have a discussion about whether to use it at a time when we can actually see the list of topics.

MBH: So the list of topics I have shown on the slide is an example of work done by a student. And it would be much better if a proposal champion would actually assign topics to their proposals. As I mentioned here, the list is not to be maintained by the committee. So it would be a task for a champion. Here, it’s just one example of an explanation of what topics could be and I think what we could do is, try to give a list of some topics that are examples. But again, this is not a rigid list that a champion of a proposal will have to follow.

RPR: Just to check, Waldemar, would it satisfy your concern here if there was a definition associated with each keyword?

WH: Yes. I would like to see a concrete list of what we are talking about. Right now it’s too vague—too abstract.

RPR: Okay.

WH: And I am uncomfortable with simply saying that the proposal champions can put any keywords in there, because that will just create a bit of chaos due to folks naming similar concepts differently.

RRR: Thank you.

DJM (on queue): Support requires specifying a proposal’s topics for Stage 1.

MM (on queue): Please start a repo to start issue threads presumably to discuss this.

RPR: So interested in discussing further. That’s the end of the queue. Were there any discussions there, that you would like to ask more questions about?

MBH: A question to WH. What would be the concrete steps that you would like to see? So that this becomes possible.

WH: I would like to see a list of topics together with definitions. Your current list has \#ergonomics and \#performance, but I don’t know what those mean. You have gone through all the existing proposals and somehow assigned topics to them. So I would like to see a candidate list.

MBH: Yeah.

WH: This would make the discussion more concrete. I have nothing against doing this kind of keywording; I think it’s a great idea. But I want us to all be on the same page about what the keywords mean.

MBH: But then what would happen if a proposal champion defines their own key word for their proposals so they will also have to provide a definition for that

WH: Yes, you can define new keywords. What I don’t want is to have some proposals tagged with \#performance and others with \#speed. That’s not helpful.

RPR: Okay. Mark (MM) has a recursive question of what topic and category would you give this, your particular proposal here, Mikhail?

MBH: \#N/A—Not applicable.

WH: \#meta

RPR: All right. That’s probably a sufficient answer.

JSC: I think we can—there could be a “meta” or “process” or “TC39” topic or category or whatever.

RPR: That makes sense. MF?

MF: It seems like we might be able to resolve WH’s concern in the moment, if we can just take a look at the existing work from your student as some examples and that might just clarify the kinds of topics that would get associated with these proposals or we might expect champions would associate with these proposals. Failing that, maybe it would—I would like to ask and it would be sufficient to have, like, a—to use that as starting point with, you know, associated definitions. So can you walk us through—show us some of that

MBH: All right. So… just to show some examples of proposals with some categories on the right.

MF: Can you make it bigger?

MBH: Yeah.

WH: You guys are talking, but I cannot hear you.

RPR: Sorry. Waldemar. That’s my fault.

?: It’s sounding like we have general support, this overall approach with Waldemar asking for this extra piece of information which is a central definition which we can append to as we go.

WH: Yes. For example, I see a lot of `\#others` in here. And I don’t know what that means.

MBH: Yeah. The topics that are shown here examples, they are not necessarily supposed to be used. These are just examples. This is a student’s work, where he tried to classify the proposals according to the topics. This is just to demonstrate the idea of it and as I mentioned the exact topics will be defined by the champion because they know the proposal. The definitions of proposal topics are any way to be given by the champion, not by the committee

RPR: That isn't disputed. The champion will make the selection from the topics. They are asking for the central terminology definition.

RPR: All right.

RPR: We are approaching the end of the time box.

RPR: Mikhail, do you want to—are you asking for some formal approval at this point? Or do you think you have enough to go forward with this?

MBH: Well, I would like to ask for this modification that is shown on the slide. Perhaps with some conditional approval on having a file with the definitions and an explainer document

RPR: Okay. So the request here is to add this one new bullet point to the process document, under the condition that we haven’t specified yet, this we will also maintain a central record document with the meaning of each topic that is used.

MF: I would just like a clarification whether—or when this goes into force. Would it go into force starting now? At the end of the meeting? When?

RPR: Mikhail?

MBH: Well, this could come into force starting the next proposal.

MF: So now?

MBH: Well, if it’s a conditional approval, it cannot be now because we have to main—to create a document with the explanations and the definitions. So essentially, as long as it’s approved and it’s merged to the process document

RPR: Effectively this is approval in principle and need to get the mechanics in place before enforcement could start

MF: Okay. We could approve the process change and when it lands in the process document, that’s when it goes into effect?

RPR: And we could gate landing on it, having all the mechanics

MF: That sounds good to me

RPR: All right. We have got a few questions here. Let’s see if we can get through them quickly. Eemeli

EAO: The list of initial tags or whatever we call these, be a part of the discussion that was just referenced, be an upcoming discussion?

MBH: The topics for the champion to choose from—this could be there. Essentially, some examples of topics will be there. We cannot require every champion to go back to their proposal, especially if they are not with the committee anymore, so—yeah.

RPR: Waldemar?

WH: I feel like we are trying to go from Stage 0 to Stage 4 in one step here. Somebody will need to come up with a candidate list of topics and present those topics to the committee, so we all know what they are. That would be a good time to try to change the definition of Stage 1 process to require those. And I do think that we should discuss whether proposals currently in flight will need to be keyworded or not.

RPR: Thank you. SHS +1

SHS: Go ahead.

RPR: SHS says, a lot of mechanics to discuss. CM?

CM: Yeah. My concern is very, very parallel with Waldemar’s, which is, I think in principle, I think this is something like this is a really good idea. But I think as far as an actual process change, I think that’s a much more invasive kind of impact on the entire work flow of anybody’s counterproposal. It doesn’t feel like this is sufficiently baked in terms—I am hearing confusion, when is this going to take effect, what is the rules, and I think to actually adapt—to say we have consensus of making a process change, I don’t think we have enough of a description of what is a process change actually is. And I think the language is too vague. And when Waldemar said going from Stage 0 to Stage 4 is right. This is a Stage 1 or 2 for the process. And it needs some sort of maturing before I think we adopt it.

RPR: Thank you. I am asking in the queue \[inaudible\]

MBH: Thank you, everyone, for the comments. We will keep working on this and hope to come back at one of the next meetings.

### Summary of Key Points

This was a conversation about how we as a committee manage tracking, labeling, auditing, and supporting all current staged proposals. TG5 is interested in providing a technology solution for this.

### Conclusion

- Interest in principle but further refinement needed.

## AsyncContext web integration brainstorming

Presenter: Andreu Botella (ABO)

- [proposal](https://github.com/tc39/proposal-async-context)
- [slides](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?usp=sharing)

ABO: So we’ve been trying to figure out what the web integration should be for AsyncContext. We have gone through a number of proposals. This is kind of a brainstorming to see what the next steps should be and so on.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g35b2dca8356_0_0](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g35b2dca8356_0_0)]

ABO: So here’s the recap. First of all, AsyncContext allows propagating storage that is local to async—so to speak, it is like an async version of thread-local storage. And it would propagate through await. And in the web integration, we were proposing it would propagate through various things. And the main categories are schedulers, such as `setTimeout` and various other APIs that take a callback and run it at other points. The callback would be called in the same context—like with the same local source, or in the same thread in this analogy—that the API is called in. And this is easy to implement through WebIDL.

ABO: And then we have event listeners and similar APIs, where if an event is fired as a result of JS code in the same origin, it would be called in the context of that JS code. So you do `addEventListener` and pass in a callback. And that callback is run in the context of whatever triggers the event. For APIs that fire an event asynchronously—like, a typical example is `XHR.send()`, that sends a request asynchronously, and eventually triggers the `load` event, `loadstart` and so on. But it is not always straightforward to find every API that can cause an event to be fired asynchronously. That is part of the issue that we were having here.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g3484e1b5507_0_13](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g3484e1b5507_0_13)]

ABO: So the proposal is currently at stage two. And it is blocked on the web integration and building consensus in WHATWG around it. And Chrome has been engaging a lot due to task propagation, which is something that Chromium has been working on internally. That would be very similar to AsyncContext and could be built on top of it. And they’re supportive. Mozilla has been engaging a bit, and they have a negative position. WebKit has not really been engaging really so far. And they haven’t had a position. So the thing we need to change is Mozilla’s negative position if we want to propose to advance.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g3484e1b5507_0_7](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g3484e1b5507_0_7)]

ABO: The position Mozilla has is, this is a niche use case, only useful as implementation detail for project libraries. We hopefully addressed this last time—there’s a widespread need for AsyncContext in major front-end frameworks. And that is not only inside those frameworks, but it would help have a simpler API for authors. There’s also developer complexity, and developers don’t always know what context some callback or some code will run in. And yeah, with the update of the web integration proposal and the presentation we did last time, this should be addressed. So now, there’s a consistent context in which the callbacks and events are called. And then the other feedback was implementation cost. Our proposal would affect the implementation of a large number of async APIs that will start an operation that will eventually trigger an event. That will be costly to implement, and we have not been able to address that so far.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g358fa25f941_1_12](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g358fa25f941_1_12)]

ABO: So we have some kind of tension between addressing developer needs and avoiding complexity in browsers. At least some developers would want the AsyncContext to always be propagated with the code flow—like anything that causes an event or some other code to run would carry the context. And browsers in general would prefer to propagate as little as possible, or, at least to avoid as much work as possible. And we have actually found some cases where the needs for some developers were higher than our previous proposal. This is some feedback from developers at Canva who were asking for propagating the context in which an observation happens. Like if you change a style in the DOM, like a class for example, and that causes relayout for an element, and that causes a ResizeObserver callback. They would want that to have the context in which that DOM element was changed. And our web integration proposal is not specific about this, but this is not something we thought was needed. And some developers do have those use cases.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g358fa25f941_1_39](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g358fa25f941_1_39)]

ABO: So we’re trying to find the right balance. Yeah. And that is the main topic of this discussion and the main issue. So which factors do we consider? There are multiple things that we can consider for each API and use cases. "How widespread?” It is fine if, if APIs are more niche, they would need more developer caution. “How difficult it is to implement propagation in browsers”. For some APIs, it is trivial. For others it is not. Like, it is different for different APIs, and it can be a factor. And then “how difficult it is to implement in JavaScript without native support”, because libraries could monkeypatch some built-ins and propagate the context, or provide their own wrappers, and only those libraries would be affected if it is not propagated adequately. So libraries can monkeypatch so the users would not notice this is propagated. So we will look at various examples one-by-one.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_0](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_0)]

ABO: The first one is `await`. This is kind of the core of the effective proposal, the reason this is there. It is basically everywhere. The context that would be propagated is: once that you have an await, you are in a context before the await, and that propagates to the code that runs after it. So when you reach the await—or you do `Promise.then` which would be equivalent—the context gets saved. And as I said, it gets restored on the `then` callback, or after the `await`.

ABO: This is reasonably simple to implement in engines, we have this already with `ContinuationPreservedEmbedderData` in V8. My understanding is that Bun added this to JSC and it was relatively simple. It is not possible to polyfill this in JS, because `await` doesn’t use the monkeypatched `Promise`, it uses the built-in one. But of course, it could be transpiled. This is what frameworks currently do.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_6](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_6)]

ABO: There is `setTimeout()` and similar schedulers. These are probably common, and the callback is intuitively a continuation of the code that calls `setTimeout()`. So the context in which the callback is run would be the same context in which `setTimeout()` is called. This is easy to implement in engines because it can be done through a WebIDL attribute—and we will be hearing more about that later on in the meeting. And so, there would be an attribute that associates every callback passed to that API with an `AsyncContext.Snapshot`. You would have one single implementation in the WebIDL codegen that would work with all such schedulers. How easy or hard to polyfill in JS? This is easy to monkeypatch, but we don’t want to end up in a framework with all the monkeypatch timeouts. This happened with React and fetch—if you have different frameworks, the monkeypatches will override each other.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_12](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_12)]

ABO: And then, `addEventListener`. It is quite common in the web, and covers different events. And obviously different events might have different needs. And what matters here is async events that are dispatched by JavaScript. For synchronous events, like if you called `dispatchEvent` or if you called `.click()` on an HTML element; that fires the event synchronously, immediately in the call. And that would not need any special handling. Just the implementation of AsyncContext would handle that. What we’re dealing with here is async events.

ABO: In our proposal, our latest one, if an event is fired by JS code that calls into an API, the event will use the context that the API is called in. This is hard to implement in engines because for async events, propagation would need to be implemented separately for event dispatch that was called by JS.

ABO: And polyfilling this in JS is difficult. And it depends on the events. Apparently, most frameworks have their own event implementation. But for tracing, some events are easier to monkeypatch, such as `XMLHttpRequest`; and others are very difficult or impossible, such as bubbling. And, well, it is true that depending on the type of the event, some people might not think of the actual event listener as a continuation of the code that triggers it. It depends on the event. For `onClick` maybe not, but for `load`, like load on XHR, it tends to be one. So the actual behavior that we end up going with might depend on the event. But in principle here we’re proposing to maybe drop this and, well, this is what we’ll be brainstorming about.

RPR: Before moving on. Can you go back a slide? I wasn’t going to go to the full queue, but there is a clarifying question.

CZW: Yeah. I just want to clarify that the “drop” here means that it does nothing extra handling on the `addEventListener`. So it does not mean that `addEventListener` will not observe the changes in the AsyncContext, but it means that it will naturally observe what is in the AsyncContext, like if we dispatch an abort event synchronously, it will just observe the synchronous context, what is available at the synchronous stack. But for asynchronous events like click events, it will just observe the empty context. So it is like the default behavior. So, the “drop” here means that we are not adding extra handling to the events. Thank you.

ABO: Yeah. It means that the behavior that you would get is just the behavior that there will be if you implemented AsyncContext in the JS engine and did nothing on the web browser. That clarification was definitely needed.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g3361f02a261_0_0](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g3361f02a261_0_0)]

ABO: {Readable,Writable,Transform}Streams. They have this underlying source/sink/transformer, which is the object that you can pass to the constructor. That has methods which are called when something happens to the stream. So you use this to define your custom streams. And in our current proposal, the `pull` method on the `ReadableStream` underlying source would have the context that causes the current read or write to the stream. How difficult is this to implement in engines? It is not clear, it depends if the browser follows closely the specification, because the specification reads very much in terms of operations on promises and so on. And if that happens, then it would be easy to implement. But like at least in most cases, it wouldn’t.

ABO: Polyfilling this in JS would be very difficult if not impossible. I must say that in some cases it seems like this might not be the behavior that developers would expect here for the context to propagate. We have heard this from JSL. So I think at least some developers would expect the context to be the same as when you create the `ReadableStream`. So maybe it’s fine to drop this. And developers that need this could just do `AsyncContext.Snapshot` to get the context that they want.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_18](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_18)]

ABO: Then there’s observers. In the proposal as we had it—well, as we still have it, before the changes that we’re proposing today—observers would have the empty context, but as I mentioned earlier, they have been explicitly mentioned by developers interested in using the proposal to improve their app’s performance. But doing things that might be very hard to trace in engines like V8. `MutationObserver` would be straightforward to implement, I think. `{Resize,Intersection}Observer` would not be, because the context would need to flow through the rendering pipeline and CSS and so on. Like this is what the folks from Canva were asking for. Polyfilling this in JS would be impossible, but the fact that it’s impossible to polyfill in JS is not enough of a justification considering that it would also be very difficult to implement in engines. So here “drop” means it would have the same behavior that we were proposing in the web integration, but we were including this slide because we have heard feedback about it. And it might also need to be part of the discussion.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_24](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_24)]

ABO: And then we had the idea of the fallback registration-time context. Which was a way to provide a default context, or a default value for variables that are defined in a specific zone of code. This is something that Bloomberg asked for. It is also something that would be useful in the server side when you’re defining a request and you want to track a request ID. Because you don’t want that variable, that state to be lost in an event or something like that.

ABO: And yeah. This is useful for dependency injection and ownership tracing. So this is not difficult to implement in engines per se, it is just more work. And implementing this in JS is not simple, but it’s possible, and it would be easy to monkeypatch the API in other ways. And if we’re dropping the async propagation for events, this probably doesn’t need to be a part of the web integration.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_49](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_49)]

ABO: So, yeah. And we’re going to dig a bit more into what “drop support” here actually means.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_55](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_55)]

ABO: Without any explicit AsyncContext in the web platform, you have the “current async context” as a property of an agent. This is reset every time a scheduled job starts running and it changes when you call an async variable. So for callbacks that are called synchronously, the async context would not change unless the callback is run through `AsyncContext.{Variable,Snapshot}.p.run`. But for anything that happens asynchronously, the context would be lost, and it would run in the root empty context which would have the default value for all `AsyncContext.Variable`s.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_62](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_62)]

ABO: We were considering having ad-hoc integration for some specific use cases. So, for example, promise rejection—for the `unhandledrejection` event we might want to expose the context that caused the rejection. This would be useful for some use cases that would want to maybe do something like `AbortController` to abort some pending operations on a region of code. So if you have multiple pending promises that you’re racing, or some promise that started at some place and will be awaited at a later point, if something rejects you want to kill all of them. And this would be useful for that.

ABO: The `onmessage` event, that is part of the `postMessage` API with `MessagePort` and `BroadcastChannel` and so on, is used as a polyfill for other scheduling APIs. It might be interesting to propagate the context here. This is not needed, but it could be good performance-wise.

ABO: And for other web specs that build on top of AsyncContext that our colleagues that are working on, they could special-case variables to be propagated in special cases where the current AsyncContext doesn’t.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_68](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_68)]

ABO: So the goal of the discussion is: what can we sacrifice to simplify the web integration? We will bring the result of this brainstorming back to web folks.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g3591e5d9ae5_2_1](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g3591e5d9ae5_2_1)]

ABO: We also have a discussion next week in the Web Engines Hackfest. This is a breakout session for Wednesday, I believe. This is the issue for that ([https://github.com/igalia/webengineshackfest/issues/64](https://github.com/igalia/webengineshackfest/issues/64)).

MM: So, when you talk about propagating over `postMessage`, you are talking about propagating between agents. You’re not—so, what would you be propagating? I don’t understand.

ABO: Yeah. `postMessage` can be used same-engine but cross-realm. Well, some—so the use cases where `postMessage` is used as a polyfill for scheduling APIs, it happens even in the same realm. You just do `window.postMessage`, as in the current window –

MM: Okay. So, if you’re in the same realm I understand. You don’t have to go on with that. But you know, typically, the reason you’re reaching for `postMessage` is to communicate between agents.

ABO: Yeah, we should have made this clear. We’re not looking to propagate anything across agents.

MM: Okay. What about between shadow realms? Do you anticipate propagation across the boundary?

ABO: So, the async context would be a property of the agent. And you wouldn’t be able to observe the state of an AsyncContext.Variable inside of the shadow realm, but by calling external functions, you would be able to influence, and you could pass data along through there. But it is in context, so ShadowRealm would not have a `postMessage` method. Well, it currently doesn’t.

MM: Yeah. So suppose the argument is that, between shadow realms, since you can’t have variable shadow realms that exist on both sides of the boundary. You can’t have a binding to the variable object that needs to be observable on both sides of it. So all you need is to propagate the abstract context. And it doesn’t cause any cross-realm connectivity. Is that, am I getting this right?

ABO: So, if you had, like let’s say that we support `postMessage` inside shadow realms—like, it doesn’t fulfill the criteria for shadow realm, but let’s say that we do. And you expose it to the outside. Then, that context would be available inside of the realm. You wouldn’t observe that it is, you couldn’t observe that it has any of the variables from outside of the realm, because you can’t cross them into the realm. But you could call external functions from outside of the shadow realm with that context and maybe those functions would be able to do something with those AsyncContext.Variables.

MM: Okay. So the cross-realm call, which, of course, we have, called via a boundary, those cross-realm calls can propagate the abstract context, but each variable is only observable on one side. You can actually use that technique as well over `postMessage` between agents, I think.

ABO: No, because—the way that you would observe this is, you would call something on the shadow realm and that function would call back outside of the shadow realm with the same context. And you would be able to observe that because the context does round trip, but cross-agent the context does not round trip.

MM: Okay. I would like to come back to this sometime, but that’s fine. Thanks.

NRO: Yeah, just, if we have long discussions, let’s maybe then convert questions to topics, or people can add themselves and push discussions to not clarifying questions.

NRO: Well, MM already understood the answer to whether he was right was yes.

RPR: And CZW points out that MNY also said `postMessage` is a commonly-used polyfill with the set media API.

SHS: So, just bouncing off of that, yeah. It is used very commonly for same-realm scheduling, and as someone that tried to polyfill, I don’t think it is possible to polyfill. It is not propagated, it is quite a bit of a problem.

ABO: It’s very hard to polyfill, especially if you can have other event listeners listening for the message. The way to write a polyfill is storing the context in some map and passing the ID as part of the message and then stripping that out somehow. So that would be the way to polyfill this. But if you have any other listeners, they would not see the right message. And you would need to store the context in the map, which could introduce memory leaks. This could be a recurring thing.

SHS: You got to know that you’re not passing it outside, which you can’t always tell, I think.

ABO: Yep.

NRO: Yes. So I’ve talked a little bit with frameworks, sharing with them the slides before the meeting. And I got feedback from SolidJS, Svelte, and Vue. I didn’t ask React, which is the one using the scheduler trick. But anyway, for the other frameworks, the answer from all of them, from their use cases of figuring out as part of rendering which things are used, all they really care about is the basic stuff. Like the most important is await. One of the framework makers, I think from Solid, even said actually for their specific case, even if we did the proposal without `setTimeout` they would still be very happy. The only negative comment I’ve got about this approach was from Vue. It was not about how people would use this in context for the framework. It was more about like—worried in general that developers might be surprised when the context is lost in some cases. And however, even though frameworks said it is fine to propagate, just remember that there’s not only the framework use case, the use case opposes addresses (?); there is also the tracing use case, where it tries to figure out why something happens in your code across complex or basic (?) scenarios. For those use cases, like the more information you have, the easier it will be to reconstruct what was going on.

MM: So the whole design space here is very interesting. And from the same sort of abstract design principles you can arrive at the opposite conclusions. So I think the most important one here is principle of least surprise. The first intuition that people come to for this is that the propagation is from some cause into the computation that is the effect triggered by that cause, but what actually happens, of course, and what all of this has done, there are often multiple causes, and for a given cause, there are often multiple effects caused by that. And the second, it doesn’t itself create a problem. But the premise we chose registration context for `postMessage` was suggested here is also registration context. For other things, what’s suggested here is not, it is explicitly the non-registration cause. I think the thing that we need to be most cautious about is to just judge it on an ad hoc basis and say, “well, for this particular effect that has multiple causes, registration seems most intuitive; but for this other one, the non-registration cause seems most intuitive”. And just pick it based on some intuition per case. I think that will just create too much of a memory burden on the programmer and too much surprise. So we need to make these things more predictable.

[Slide: [https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_62](https://docs.google.com/presentation/d/1yBtSvF5z3P4PliB2NziYzm90d27keiX2P9-MfoDvpJs/edit?slide=id.g359118292c5_0_62)]

MM: One of the things that’s an interesting concept shown on the slide that is currently up, so I’m glad we’re on this slide, is the `.rejectioncontext` property. That’s actually a very interesting and general way to deal with this ambiguity. When there are multiple causes, just capturing a context with an explanatory name for the property in which you capture it for each of the kinds of causes, and then if there’s an implicit context that is automatically propagated, to just do that which is most uniform with the rest of the language.

MM: Now, the other way to apply the principle of least surprise, it comes from opposite conclusions, is for each one of these event propagating abstraction mechanisms, what if somebody just wrote that event propagating abstraction mechanism in JavaScript, not paying too much attention to what context gets propagated? Especially for such frameworks that already exist and are going to continue to have their old code distributed on the web before AsyncContext came about: what context do they naturally propagate implicitly? Because users of frameworks are not going to carefully think, “oh, well, since it is a framework I should expect this behavior—or, since it is the browser’s own built-ins, I should expect this other behavior”. This principle of least surprise would always cut towards do what would naturally happen for user code that is unaware of AsyncContext. I don’t have a conclusion from all of that. I just wanted to open up the whole realm of design choices raised by those principles.

ABO: The web integration proposal that we presented in Tokyo had registration time. Like the registration context for events, you call `addEventListener` or set `onClick`, whatever—the context when you call `addEventListener` is the one that would be active inside of the listener. That is a solution. But Mozilla complained it would introduce memory leaks, because no one ever calls `removeEventListener`. Our newer web integration proposal that we discussed last time, last month, had the dispatch context, which is “for every event that has a JavaScript cause in the same agent, that cause is the one that provides the context”. But this is very hard to implement. And Mozilla also was negative about this because of the complexity and implementation. So both of those options for, for the general case are no-gos. So the only option that we’re left is to not do anything with events, and if there is an async event, not propagate anything except for some very specific needs, because doing the general case in both options with the registration time and the dispatch context is a no-go. So here we’re trying to salvage what we can.

MM: Does that also argue for or against explicit context captured in properties? On the –

ABO: Yeah. So properties, it depends. So for sync events, that would be nothing special, like, you wouldn’t need a property. For async events, it would be as hard to expose this as a property as to have that as the context that is exposed on the callback. The only thing, if you have a property on the event, this would be less useful to tracing if they are expecting some context to be propagated through a continuation in user code, and the user would not know that they need to do something with the property of the event. But there is the upshot that properties can be added without breaking web compatibility. Whereas changing the context of an event dispatch isn’t.

RPR: We spent quite a while on this. I think I would like to move to the clarifying question from SHS.

SHS: Yeah. So—I think I had a couple about the registration context. I kind of lost the context here, but—I think we haven’t defined dispatch versus registration very well is sort of it. But I think I don’t have anything else to say here.

RPR: And your follow-up? About exposing snapshots.

SHS: Yeah, what ABO was saying, for tracing needs you really need to recognize (?) context or the most natural one for tracing to flow implicitly. The fear we have, if application developers are having to manage the context explicitly it will lead to a lot of cargo-culting and just sort of always wrapping some context, rather, and the data will be a lot worse as a result of that.

LCA: It is actually the same amount of work just setting the context when calling the event here. Particularly if you do not do anything special for event dispatch, like just setting the context prior to actually dispatching the event, because events are dispatched synchronously will just work. For implementation there is no reason to do this through properties, rather than through anything else to deal with this. And like, we will have polyfills that need to overwrite `EventTarget` and it’s—yeah.

NRO: Yeah, so properties are much simpler to implement from browsers than the implicit one, the reason being that for the implicit one, they must just do it for all of them. While a property can be weighted especially to have the name—like the ones on the screen can be evaluated on a case-by-case basis and propagate the context when it is actually useful or it matters. For us, every specific event is the same complexity, but a much smaller number of events that have the property and also can be done incrementally if needed.

ABO: And there is also like, use counters cannot really be written for implicit propagation. But if we’re changing the propagation on a property, we could see how many pages are using this particular property. And determine whether we can break context there, where with implicit propagation there would be no way to do that effectively.

CZW: Yeah. I also want the mention that even though I personally prefer that context can be implicitly propagated for events rather than properties, but when we propagating through properties, the advantage is that we don’t have to spec out every event’s context when we first release AsyncContext. Otherwise, there will be breaking changes for these events. So through properties, we can incrementally add more support for more events without blocking the AsyncContext proposal as a whole. Properties can be added as a nonbreaking change and complementary addition for more events. So, yeah. That’s the advantage of properties versus the implicit context for events.

LCA: We’re focusing the entire discussion on that one browser vendor said this is too complicated to implement. That is obviously something we have to discuss. But on the other hand, one of the other browser vendors is very much pushing for this and doesn’t think it is too complicated to implement. For users, the property thing is way, way worse than the implicit propagation thing. In the order we should be designing the language, I think users come first, designers come second, and implementers come third. And the spec comes after those. We’re focusing a lot on the latter half on the four things right now and not on the first half, which I think we should be doing. So I think, I also have not heard at all from any of the implementers other than Google here—which, thank you—about the actual concerns and things being discussed. So I would really like the implementers that are actually objecting to these changes to further elaborate what is so complicated about this. I understand some of the parts that are complicated here, but we’re making very large trade-offs here for implementations. And I feel like you should justify yourself for that.

YSV (on queue): It should be users over developers over implementers, over spec authors. Complexity leads to security and performance issues. Those impact users.

LCA: One of the other things you mentioned here in the last paragraph some other web specs that build on top of AsyncContext allows them to be propagated. I don’t understand this at all. I feel that is more complexity than all of the variables being propagated. Can you explain this?

ABO: Yeah. So what we’re discussing in particular is the equivalent of doing `.run` in an implementation of an API for a specific browser-internal variable that would not be more difficult than propagating things for all variables. The thing with, if we do propagate those things—if for those particular events the context would propagate for all variables, that would be an inconsistency, like we have also heard like complaints about having consistent API surfaces, or behavior, and in those cases, which would be easy to propagate, maybe having those event propagate the context and others don’t, like—we might not want to expose that to users because of the inconsistency with other events.

NRO: Yes. Also, this would be just an implementation detail like browser internals. Like there are other proposals outside of TC39 in web land, such as task attribution, that work in ways that are similar to AsyncContext. So it would be nice if they could be implemented reusing the same mechanism as AsyncContext, such as using the AsyncContext internally. And cases they behave differently, just have special handling for those specific cases. This is not user-exposed. The variables are all internal. From a user point of view, it is completely a regular event, so users would be able to say please propagate the specific variable in this other way.

CZW: Yeah. There’s another comparison when we spec out the event context on ad hoc basis on a general basis. So, for a general solution, we have to add a spec notation to the web API so we can statically look at the context and test general for each browsers. But for ad hoc events the complexity is much more limited for a specific event and we don’t have to spec out a general notation to say which event should propagate the context from which API. So it is much more simpler implementation-wise and spec-wise, so that’s why I think the complexity here would be more on the general solution basis.

LCA: So I think one of the things you said, ABO, the inconsistency between different events—some events propagate, some events don’t. Is that something we want? I think that is a fair question to ask. And I think—because of what we have seen so far, especially in the tracing use case, the more the better. It makes sense for things that are easy to propagate—for example, like the `load` events on XHR is really easy to propagate. Implementation-wise, this is simple, it would not add vulnerable securities, or harm users because the slows down performance in any meaningful way. Not doing that because it is inconsistent because events do not propagate through `ResizeObserver` or, I don’t know, CSS animations or something—I don’t think that’s useful. I think we should like consider this on the basis of like if there are a lot of things that are relatively easily to implement, and I think most of the JS API that dispatch events that do not involve the DOM fall into that category. We should just do that. Even if it is inconsistent with asynchronous DOM APIs, where it would be really very difficult to propagate and have high implementation complexity, which I understand.

ABO: Yeah, so the cases where it would be hard to propagate events asynchronously, the cases we had in mind was not CSS animation, but tricky things like—well, most, most of the ones that I know are related to the DOM. Like, document events where calling `document.close` can fire the window `load` event, which you might expect would not be triggered by JS code. But it can, if you do `document.close`. And it is those kinds of things where there’s a lot of interaction which can eventually trigger an event dispatch. But like, maybe—I mean, I guess not having events related to the DOM propagate the context as you’re saying, it might be fine implementation-wise, but it’s, well, there is the inconsistency and this principle of least surprise that we were talking about. And yeah, is this a design decision that we want to make? That’s also part of the discussion.

MNY: I think this topic was queued up quite a while ago and I did want to bring up resources like `<style>` tags and images—it is commonly used in frameworks is a form of continuation: an interaction might queue up some work, but until the stylesheet loads, don’t apply the work—that’s an important use case. That is very similar to the XHR load, where it is very, very obvious there is a single cause and a single direct effect. And I think that’s what, I think, is a guiding principle, which is different than some of the observer use cases where it might feel obvious there was a single cause and a single effect, but really it is going through some multiplexing mechanism, like style and layout.

MNY: And this has recently been prototyped in Chromium by Scott Haseley. And the way that this was solved was not actually at the `addEventListener` at the load event, it was actually like if a `<link>` tag is being created by something with a context, the link sort of becomes owned by that context, and so any event that triggers because of that effect. That is a prototype that might not work for all use cases—that is one mechanism that was prototyped in Chromium. For images it might be different if you change the `src` attribute, maybe the context that changed the source is the new image. That is one alternative to solving it at the event listener.

NRO: MNY, do you think it would make sense to frame this as, asking if the API was designed today, would you use a promise for it and if so would we propagate it?

MNY: Yeah, actually, I was thinking about that. If a developer was to wrap events with just the `resolve`, the promise would already propagate and it would already work. The reason we want to support it is for the slew—at least for my use cases there is a slew of code out there not doing this, it is not sort of opting into the promise continuation. It is just clicking with callbacks onto events that we would like to continue propagating around those use cases. Yes. If, if events just resolved promises, especially for one-off events, you would just get this out-of-the-box, I think.

SHS: Yeah. This is a bit of a repeat, but I wanted to bring up a little bit more of it. There’s a lot of events in DOM. Many are propagated for tracing purposes. Some examples of simple and more complicated select events, for instance, just one of many that are spec’d as queuing up a task to dispatch this event. You know, but a lot of these are problematically caused saying (?) the select method, for instance. More complicated and less clear of direct causes would be `animationEnd`, or as talked about earlier, the resize events. Looking through all the events, I don’t have a good number and the estimation is at least half or more are async. If we drop those, tracing becomes a whole lot less useful. We should have a very good reason to drop this. Just having a look as well.

ABO: I also wanted to bring up something that JRL had mentioned earlier and hasn’t been brought up in this meeting, which is that if tracing folks need to propagate some context through events, the most likely thing they will have to do is basically wrap all listeners with the `AsyncContext.Snapshot`, or basically patch `addEventListener` or event handlers or `onClick` and so on to take the AsyncContext snapshot when `addEventLlistener` is called and never release it. This will reintroduce the memory leak issue. This would not be for every single Web page. It would be only for sites that have some tracing library that needs AsyncContext. But it should be part of the discussion because it really introduces the memory leak issue just in –

SHS: That’s absolutely the case. If it’s not provided by the browser, then we end up with people doing it themselves and they’re going to do it a lot worse. I also want to point out that properties are not suitable at all for tracing because the whole point of tracing is the developers need to not be micromanaging it.

NRO: Yes, good time to remind here that the people working on the proposal are mediating between two different standards bodies. Thank you for the feedback. This is not the discussion we have just within us, especially because we can discuss here mostly is how AsyncContext works and then for the semantics of JavaScript. We will bring all this feedback to the web people, and how the web integration is done is happening outside of our body and what we’re able to decide is maybe say, “okay, that’s so bad that we can decide not to do AsyncContext at all”. If we feel that AsyncContext is useful, we cannot decide what other bodies will design for doing APIs.

ABO: Just a reminder that we will be having another discussion, or maybe resuming this discussion, in the Web Engines Hackfest next week.

LCA: I’m not going to expect anyone to answer synchronously now, but I want to point out I find it unfortunate that the only strong objection is Mozilla and I heard YSV speak and I wish that implementers were more active in discussions about implementation complexity if that’s the primary reason we’re changing the proposal.

DLM: I guess I say to that is, I think the sort of feedback you’re really looking for is on the DOM side, and the concern is web integration and not proposal as a whole. On the strictly behavior TC39 side we’re not concerned about the proposal, it’s actually the web integration and the amount of complexity we see that. I encourage everyone interested to reach out to DOM folks and talk to web people as well, and heard from us and haven’t heard from WebKit and that would be good outreach as well.

ABO: My understanding is the main person involved in the Mozilla team will be in the Web Engines Hackfest, and we can have the discussion within there and dig more into this.

### Speaker's Summary of Key Points

- We discussed trimming down the web integration of the proposal, perhaps by not propagating the context through async events.
- This propagation through async events is needed in some tracing use cases, and it might be very hard, or in some cases impossible, to polyfill in user land.
- Frameworks don't really rely on the web integration, other than perhaps `setTimeout`. It's tracing libraries that do.
- SHS fears that if the context isn't propagated implicitly, this might lead to developer cargo-culting and always wrapping some context. The tracing data will be worse as a result. Also, this might reintroduce the memory leak concerns from previous proposals, except in userland.
- MNY points out that the `load` and `error` events on `<style>` and `<img>` are commonly used as a continuation, and Chromium has prototyped this in task attribution. But there are questions raised if the `src` is changed.
- LCA said whether the context propagates through an API should depend on how simple it is to implement, regardless of consistency. (In particular, talking about `load` on XHR versus `ResizeObserver`.)
- TC39 by itself cannot come to a decision on this, because the web integration mediates between TC39 and WHATWG. This discussion will resume next week in the [Web Engines Hackfest](https://webengineshackfest.org), where the main person from Mozilla's DOM team who has been raising objections will be there to discuss it.
- Still not clear what the next steps should be, but hopefully we will have a better idea after the Web Engines Hackfest.

### Conclusion

This was a discussion, not a consensus-seeking change; further discussion is necessary.

## Normative: Add `Intl.Locale.prototype.variants` ([ecma402\#960](https://github.com/tc39/ecma402/pull/960))

Presenter: Richard Gibson (RGN)

- [proposal](https://github.com/tc39/ecma402/pull/960)
- (no slides URL)

RGN: It is May 2025 and we’re talking about the variants API for `Intl.Locale`. Starting off: what is a Unicode language identifier? It is a sequence of subtags with a specific structure, separated by hyphen-minus characters—by dashes. This is straight from UTS-35. The relevant part is that the language ID aside from the special case of “root” consists of a mandatory language followed optionally by script and/or region and/or variants, always in that order and identifiable by length and position. Of the subtags, variants is the only one that isn’t necessarily unitary. It can appear more than once, as long as there are no duplicates (a well-formedness constraint that’s documented but not part of the ABNF). And Intl.Locale exists to represent such locale identifiers and their various parts. This “ca-Latn-ES-fonipa-valencia-u-nu-roman” example contains instances of all language ID subtags, which is unusual in the wild but nonetheless valid. What we’re looking at is the Catalan language with the Latin script as spoken in Spain with the Valencian variant captured with phonetic IPA and using the Roman numerals numbering system. Intl.Locale instance properties correspond with the various subtags, ideally completely capturing them. `baseName` is the language ID; everything before the -u-... unicode extensions subtags. `language`, `script`, and `region` correspond to the respective subtags, that is, “ca”, “Latn”, and “ES”. `variants` is missing from Intl locale, that’s what this proposal is about. We’ll get to that in a minute. And for completeness, the unicode extensions subtags appear as their own individual properties, hence here `numberingSystem` is “roman”.

RGN: How do we want to expose variants? We need a way to set them in the `Intl.Locale` constructor options bag and a way to get them from an instance.

RGN: Two different representations present themselves as possibilities, which I believe is the reason for this gap. We can choose to represent variants as a string or as an array. As a string, in the case of multiple variants, you’re going to see subtags and their separating dashes. As an array, you can actually break out the individual components. The string approach is nice in that it aligns with the other subtag-based properties like script and region and language, which are also all strings. The array approach is nice because it more explicitly represents sub-structure, modulo the uniqueness constraint—but I think it’s clear that this won’t be a Set. Considering conversion across these approaches: if you wanted to get the individual variant subtags from a string, the structure is simple and guaranteed, so you could just split on the dash character and get all the pieces. Or from the array, if you ever wanted to produce the right string, likewise you could just join on a dash.

RGN: The string has a couple other benefits, simplicity and efficiency. It’s primitive so we don’t have to worry about producing a fresh instance or worrying about secret communications channels or anything. Just being a primitive, we know it’s pretty much as basic and compatible as can be. And then in terms of efficiency, we’re saving excess allocations for anyone who is using this, and in fact an implementation can just reference the relevant slice of whatever string provided these variants. So all things considered, we discussed this in TG-2 and decided that string was the way to go.

RGN: Moving up to a meta level, there are two ways to approach this change: as a normative pull request or as a proposal. It’s adding surface area, which generally speaking has us inclined towards a proposal. But it’s also super straightforward and super narrow, which in a lot of cases we handle as a normative pull request. So the current state of it is the latter. And that’s what I’m presenting today. But if we do decide that a proposal is warranted, here is a relevant excerpt from the process document.

RGN: It really in my opinion would belong in Stage 3, recommended for implementation, as it is already agreed to by TG-2 and in terms of entrance criteria, we have complete spec text and we have got sign off by the editor group and to the extent that TG-2 counts as reviewers, we have that as well. It’s basically ready for implementation whether we decide to encourage it today or wrap it in a proposal.

RGN: So with that, I think I’m ready for discussion and then we can decide if I accurately predicted the summary to use.

EAO: Sorry for not raising this earlier in the TG-2 discussions, but just thought I would ask with the string value, why would we want to call this variants plural rather than just variant in the singular?

RGN: Basically because it tracks our general alignment with Unicode and it captures the possibility that that a single string represents a sequence of variants. The plural name is definitely the right choice here whether we use a string or an array.

EAO: With respect to the alignment with Unicode, the slide you showed earlier, wasn’t that showing variant in the singular being used by Unicode?

RGN: That’s largely from a typo in the table. So basically, “fonipa” is a variant subtag and “valencia” is a variant subtag and both are included in the repeatable part of the formal grammar.

SFC: There are multiple variant subtags. So calling it variant singular is definitely not correct although this does raise the question about whether we should be calling it `variantSubtags` or something like that. But it should definitely be plural and not singular.

RGN: We don’t have `languageSubtag` or `scriptSubtag`. Subtag is implied in the properties of the locale Instance.

SFC: The thing that becomes plural is the subtag, not the variant. So he is correct that variant singular is the word in tag and variant is an appropriate abbreviation if you will.

WH: Is the order of the variant subtags significant?

RGN: Not as such. There’s a canonicalization step in the `Intl.Locale` constructor that orders variant subtags lexicographically. And UTS-35 clarifies that subtag order has no relevance to semantics. There’s a little bit of internal processing in that document for actually dealing with interrelationships between variants that in some cases puts things in its own meaningful order, but all of that gets washed away by canonicalization. What I have presented here is the canonical order, and input such as “-valencia-fonipa” would get converted to it.

WH: So it’s alphabetic so “fonipa” applied to “valencia” would be “fonipa-valencia”, but “fonipa” applied to “alicante” would be “alicante-fonipa”?

RGN: Yes.

SFC: If we return the array it should be named `getVariants` like we did with `Intl.LocaleInfo`. For all the reasons that RGN said and more, string is the right thing to do here in my opinion.

RGN: Okay. So the big discussion point I guess is the meta one about a pull request versus a proposal. I’m going to ask for consensus on merging the pull request.

RPR: So DLM supports merging the pull request as a normative change. A plus one. Do you want to speak?

USA: Mentioned this is important from a lot of points of view, but most importantly this is just missing so it seems like an oversight we should have always had this. And, yeah, I support.

SFC: I support it, although in general this is very much on the line in terms of what I would rather see a proposal be. This isn’t an API we’re adding and a better process to do it as a proposal. But because a proposal gives us—largely because the proposal gives us the venue to do things like bike shedding the name of the thing and string and array and all the other questions but we have also spent a fair bit of time in the TG-2 in the meeting discussing these questions. By the time RGN came to TG-1 with the proposal, this is discussed a fair bit in TG-2 as a proposal. I support this as a pull request. But I don’t want to introduce the precedence necessarily of normally of us normally saying that API changes or pull requests rather than be proposals.

RGN: Thanks for that. I actually really appreciate the reasoning on both fronts that this is on the line, but further that the discussion in TG-2 has already satisfied the needs of a proposal. I think that’s very well framed.

RPR: EAO expresses satisfaction with the amount of bike shedding done on this.

RGN: I think that’s a wrap on it. Thank you.

RPR: I think we’ve definitely heard support of the merging the PR as normative. Any objections? No objections. Yes, I agree, RGN, you have consensus.

### Conclusion

The committee agreed to add `variants` strings to the ECMA-402 `Intl.Locale` constructor options and prototype by merging [ecma402\#960](https://github.com/tc39/ecma402/pull/960).

## Explicit Resource Management for Stage 4

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-explicit-resource-management)
- [slides](https://1drv.ms/p/c/934f1675ed4c1638/EYcWEHLrSh5Ah2k4eStVfb0B6skl-3qNmTKqqfLZVs9eiw?e=cXHFAt)

RBN: Thank you. So I am RBN, formerly from Microsoft and currently an invited expert, and see to get explicit resource management to Stage 4 this meeting. Just a quick overview, so what’s included in the explicit resource management proposal is the addition of the using and await using declarations that are RAAI style initialization of disposable resources. These are resources that are at the end of the block scope a disposed or simple async dispose method is invoked on the objects to perform clean up so that any resources be they say file IO-based resources or network resources or memory, et cetera, westbound cleaned up efficiently than waiting for any type of garbage collection or doing any type of explicit close method or dispose method that can vary from package to package. This also introduces the aforementioned `Symbol.dispose` and `asyncDispose` that are tied to the declarations and introduces the `DisposableStack` and `AsyncDisposableStack` for resource aggregation or interop with APIs not designed for resource management and assists with building composite classes that deal with multiple resources at once. Finally, this introduces `SuppressedError` as a way to wrap error suppressions when both the body of the current block scope might have an exception and a disposal might also trigger an exception.

RBN: As far as test status, there are a large number of tests that were added to Test262. The initial PR was large and over time myself and others are breaking up the tests to smaller chunks under review and trying to get them wrapped fairly soon.

RBN: And as far as implementation status, this proposal is currently Stage 3. Stage 4 prerequisites had two compatible implementations and multiple and shipping in Chrome 134 and shipping in Firefox behind a flag. There’s still a couple small semantic changes based on the work that was done or the minor change that was proposed and adopted in the last plenary session that need to be addressed and implemented in Moddable XS for some time as well.

RBN: Another prerequisite with the shipping implementations and those provided by independent VM and we have been addressing VM feedback as I mentioned disallowing using in bare case and default causes at switch and this is progressing as well so feel like we’ve been getting fairly adequate feedback there. A pull request was sent to Ecma 262 and the relevant group signed off on the pull request. That’s in progress and hoping to have that soon wrapped up fairly soon.

RBN: So what I am looking for today is consensus or conditional consensus on advancement to Stage 4. Again, final test review, a lot of these implementations are fairly heavily tested. I have found one bug in V8 that I made mention to SYG to consider investigating. It’s also potentially conditional on editor sign-off that will hopefully wrap soon and consensus of advancement to Stage 4 once open and last of the tasks are completed.

USA: Regarding the queue, first we have MM who says “support with a lot of enthusiasm”. Next we have DLM.

DLM: Just wondering if anyone has implemented a change from the April plenary? We know we have work in progress or V8 or Moddable as implemented for the version of the spec?

RBN: I don’t have any information on that. I have to defer to those teams.

USA: Next on the queue we have LCA.

LCA: I would like to hear from PFC real quick how far he thinks the Test262 things are away from actually landing. If this is going to take another year, I don’t think we should do consensus right now. If it’s another month, then probably.

PFC: I would say it’s definitely closer to one month than one year.

YSV (on queue): No objections to this getting to stage 4, but would like to see the changes landed in at least 2 impl.

USA: RBN, would you like to respond to that?

RBN: I’m perfectly happy making that a condition as well. As this was feedback requested by the implementers, my hopes is that change from April plenary will meet those needs once V8 provided feedback saying, yes, everything is working well, that is fine. Making that conditional on the Stage 4 advancement would be acceptable.

USA: YSV might have more to add. She’s typing. In the mean time, we go to UCA and come back to this.

LCA: I have a response to this. So we I think were the first to ship this in Deno with V8’s implementation and the V8 implementation didn’t run the Test262 tests that meant we uncovered a bunch of bugs. Turned out that the Test262 coverage was actually pretty extensive and we have not run into any major issues any more now, and we have been running this in production for, I want to say, a month and a half now. So, yeah, we’re pretty happy with the implementation and I think it’s good enough to be considered done—modulo some minor bugs but always those exist.

YSV (on matrix): if we have confirmation from moddable and v8 that they have no issues with the new changes i think it is fine to go ahead.

DMM: So JSL raised some concerns on the matrix about methods allocating explicit resource management—disposable objects and then returning one of them. But allocating two and then making a choice and returning one. But that causes them to be disposed at the end of the method. So you’re returning an object that is potentially useless. This seems to be mostly a mismatch of people coming from RAII-xstyle handling and expecting this to work in the same way. I’m not sure it’s necessarily a problem, but it does seem like something that some follow up work might be needed on, because it’s not behaving quite the way people expect.

RBN: There are certain limitations as JavaScript is a managed language and a number of RAII-sometime systems that make use of things like move constructors and whatnot actually depend on static type information to be able to know how to do that type of operation. In the explicit resource management proposal, this is handled by the `DisposableStack` object and you can add resources to the `DisposableStack` container which would—so declare using over disposable stack container and attach resources to it and if everything succeeds in your method and they don’t need cleanup, then you can call `.move()` on the `DisposableStack` container and take the resources out of the container and put them into the new one that you can then return, or that one can fall on the floor if necessary. But it does give you the mechanism for maintaining locality of lifetime but then being able to extract objects out of the objects if it’s disposable object or class of object within the given method. There is a mechanism for that even if not a syntactic or statically typed mechanism.

USA: Okay. That sounds great.

RBN: I’m seeing YSV is making comments in the chat about the proposal. I want to make sure there’s no issues that need to be addressed there. So I’d like to clarify whether YSV’s concern discussing in matrix is a blocking concern or if it is not a blocking concern.

USA: I can read out what YSV typed. She says: “I think there’s more to discuss. It’s a similar issue as Test262. Closer to a month versus a year of getting these changes, I guess close to a month if someone can fine up for that, in that case conditional advancement is appropriate. In our end can’t guarantee a month but the work isn’t that far off. I would rather more experience than less with the spec change. I don’t want to block this because outstanding issues are addressed and may want to advance this to the later date to make sure that the Ts are crossed and Is are dotted. That may fall outside of what we defined as conditional advancement.” Basically might or might not be a blocking concern.

USA: There’s a request for someone from v8 or moddable to explicitly express their opinion on this? Do we have somebody from either implementation on the call or in the room that can speak to this?

NRO: Let’s come back to this later in the meeting after we get an answer.

USA: CDA has a reply to the same effect. RBN, we have excess of free time in this meeting. Would you mind to not ask for consensus right away but rather give this a bit to, you know, clear itself out?

RBN: That’s fine. My only concern will be my availability. I’m only available in the last two hours of each day. I know there was not much on the agenda for the final day. So I’m not sure how that ends up working out. We’ll have to see.

USA: Exactly.

RBN: If it needs to wait to another meeting, that’s fine. I put this on the agenda, because I wanted to try to make sure that I wrap this as things were kind of ending with my previous role. I wanted to try to –

USA: Absolutely. That’s much appreciated. So we can bring this back later, I suppose the continuation doesn’t have to be super long either. But as you mentioned, we have time and we know your constraints.

NRO: If we get V8 and Moddable to comment they’re close to having this done, would you be okay with us talking about this here and getting conditional consensus even if you’re not –

RBN: That’s fine with me as well. Yes, thank you.

USA: That probably qualifies for conditional consensus? We’ll bring this back. I appreciate it. Thank you.

USA: All right. We’ll continue chatting about it offline and bring it back to the agenda.

### Conclusion

- Topic discussed later in the meeting.

## `Array.fromAsync` for Stage 4

Presenter: J.S. Choi (JSC)

- [proposal](https://github.com/tc39/proposal-array-from-async)
- [slides](https://docs.google.com/presentation/d/1i100S94niIcnBj9yhm4l0R9-6hCUbjGMi8tzqkGI2RM/edit?usp=sharing)

JSC: This is `Array.fromAsync` for Stage 4. This would be my first Stage 4 proposal. Be gentle if I make any mistakes.

JSC: Very fast recap. `Array.fromAsync` is to `for await` as `Array.from` is to `for`. It lets you drain async iterables into flat array data structures—synchronous randomly accessible arrays, just like `Array.from` lets you drain iterables that may be lazy sync iterables to flat arrays. It has been deployed by all major runtimes for at least one year. Some of them have deployed them for more than two years. So it may be time to advance to Stage 4.

JSC: Very fast recap, it has two optional arguments. It very much matches the semantics and interface of `Array.from`. Unlike `Array.from`, it returns a promise that always resolves into an array or rejects if there’s any error. But otherwise, it’s very similar. And the behavior is also very similar to both `Array.from` and also `for await`. The analogy is, it’s like we tried to match behavior of `for await` and as many ways as possible just like having it be a superset of pushing everything from the input and `for await` into an array.

JSC: There are three kinds of inputs. Some of them are drawn from analogy from `Array.from`, and some of them are because of `for await`. So it accepts non-iterable array-like objects. These are objects with the `length` property and integer properties. Those apparently are still used. `Array.from` accepts them, so it would be weird if `Array.fromAsync` didn’t accept them. It also accepts sync iterables and async iterables; just like `for await`, it can drain them both.

JSC: It always returns a promise. TypeErrors still result in a promise that rejects in a TypeError. Ditto for everything else here.

JSC: It’s a generic factory method. It uses the `this` value as a constructor when its `this` value is not the `Array` constructor. This is just like `Array.from`.

JSC: As an aside, there was a spec bug, MF filed it a few years ago. It was discovered during implementation. Plenary consensus approved such that `this` wasn’t constricted twice when it was array constructor. This is already in all major runtimes, the fix.

JSC: `Array.fromAsync` can accept a map function just like `Array.from`, and when the map function is given, every value that comes from the input is given to the map function and the result of the map function is awaited before it’s pushed into the result array. Note that the input value that is given to the map function is not awaited. Not when it comes from the async iterable. It is awaited if it comes from the sync iterable, just like `for await` does. If you give a sync iterable to `for await`, it will await each item in the sync iterable, each added value. `Array.fromAsync` matches this behavior. `Array.fromAsync` also does that if it’s a non-iterable array-like object too. We think that just makes sense; that’s also a synchronous data structure.

JSC: A consequence of this is that, in `Array.fromAsync`, omitting the map function is not equivalent to including the identity function because that changes whether or not if it’s async iterable input whether or not each value gets awaited or not. I just got the Mozilla MDN documentation to update a mistake about this. This should be a really rare case. There was discussion about this a while back. Now everyone agrees it’s okay for the identity function to not be equivalent to omitting it or it being nullish. It’s more important for it to match `for await`. That was a discussion that was in [issue \#19](https://github.com/tc39/proposal-array-from-async/issues/19).

JSC: One more thing, this is a relatively recent change, it closes input sync iterables even when a problem occurs inside and the `Array.fromAsync` promise has to reject. This is a consequence of a bigger change to Ecma-262 [pull request \#2600](https://github.com/tc39/ecma262/pull/2600) and that was approved by plenary three years ago, and it was merged into Ecma-262 just last March. It was already presented to plenary last month by KG that it affected `Array.fromAsync`. I made a 262 case and we’ll talk about which engines pass that.

JSC: Stage 4 criteria. At least two implementations. We got them. We got lots of implementations. They’ve been around for a long time. They all pass the Test262 with the exception of the one new test case for [pull request \#2600](https://github.com/tc39/ecma262/pull/2600). V8, Chrome, Edge pass that and has since 2024 thanks to a commit by SYG. Safari JavaScriptCore will pass the test; it already does in Safari Technology Preview; I checked that. So that change should be deployed in the next major version or minor in the next stable version of Safari pretty soon, whenever Apple does it. Firefox, SpiderMonkey there is a bug that KG recently filed. But technically all this already passes the criterion for Stage 4. We got at least two implementations that pass all the Test262 cases including that new test case. Also thanks to Igalia and RMH for their work writing all the other Test262 cases for `Array.fromAsync`.

JSC: We got lots of in-the-field experience. Like I said, at least one year from everything if not at least two years in stable versions deployed to already en masse to just about everyone. And we got Ecma-262 [pull request \#3581](https://github.com/tc39/ecma262/pull/3581). It is based on another pull request, [\#2942](https://github.com/tc39/ecma262/pull/2942). This is a pull request for adding infrastructure for “built-in async functions”. That pull request adds a lot of automation, for instance, any function in the specification that describes itself and its behavior as the async function, any built automatically, it gets to like return directly values and have them automatically wrapped in appropriate completion records that will be in the promise. So that kind of machinery. It’s very convenient. This would be the first proposal that is based on #2942, and it would be the first proposal that uses the built-in async function infrastructure. After this would come async iterator helper function. I believe that this should still be okay, though, like once we get editor sign-off for being declared Stage 4.

JSC: Now, technically, this proposal isn’t even Stage 3. It’s Stage 3 conditional on editor sign off from about three years ago, and then the editors said it would be easier to review if it’s a pull request to Ecma-262. And I never got around to that until recently. Now we’re just shoving that conditional Stage 3 criterion into this Stage 4 criterion. But if we get editor sign-off now, if the editors already have had time to review, we can get Stage 4 now; and if the editors have not, then we can wait. But I would also like to know if there’s any approvals or blocks from anyone for Stage 4. That’s it.

USA: Moving on with the queue, I see there’s four statements yet all of them support, none of them asking to speak. I will go in order. LCA, MM, DLM, and OMT all support Stage 4.

JSC: Okay, great. Thank you, everyone.

USA: Wait a minute if somebody still needs to be on the queue.

LCA: The only editor stepped out of the room. Maybe they’re ashamed not reviewing it for three years.

JSC: We seem to be unable to get editor sign-off, but process-wise, is it okay for us to say as soon as editor sign off we could get Stage 4? Stage 4 conditional? If the there’s only one editor at plenary right now –

LCA: The editor just came back.

JSC: There are three editors. So would it be okay to say declare that we have Stage 4 conditional on editor sign-off as soon as the three editors sign off?

LCA: Just for recap for you MF, apparently this is Stage 3 conditional on editor sign off. It never got editor sign-off. We did that three years ago. Is the editor sign-off for `Array.fromAsync` ready.

MF: Give me a minute.

JSC: For Stage 3 and Stage 4 simultaneously, yeah.

USA: Looks like we have consensus for Stage 4 conditional on editor sign off that we can get relatively soon. I mean, no pressure. Are you satisfied with that?

JSC: Sure. Yeah, that would be great. Looks like plenary consensus Stage 4 conditional on editor sign off. And also Stage 3 technically. That’s all. Thank you very much.

### Speaker's Summary of Key Points

- `Array.fromAsync` has been shipped in all major engines for ≥ 1 years, ≥ 2 years for some.
- There is a small change in Ecma262 [pull request \#2600](https://github.com/tc39/ecma262/pull/2600), whose new Test262 case Chrome/Edge and Safari Technical Preview already pass.
- All criteria for Stage 4 except for editor sign-off are fulfilled.

### Conclusion

- Achieved conditional Stage 4 from plenary: Stage 4 as soon as all three editors sign off on Ecma262 [pull request \#3581](https://github.com/tc39/ecma262/pull/3581).

## `Error.isError` for Stage 4

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-is-error)
- [discussion](https://github.com/tc39/proposal-is-error/issues/7)

JHD: Hi everyone. Here for `Error.isError`. This feature now shipped in Chrome, Node, Firefox, Safari, Porffor and Kiesel, Boa and multiple polyfills. The spec PR is approved. The HTML is merged and Firefox internal error is properly handled and returns true for the predicate. I would call that significant in the field experience. So basically I’m asking for Stage 4. I see DLM and CDA as well. Thank you both. We got some—and MM as well. Couple more coming in.. Thank you everyone. That’s eight or nine supports.

USA: Looks like consensus.

JHD: Awesome. Thank you.

### Speaker's Summary of Key Points

- `Error.isError` has shipped in several browsers, runtimes, and polyfills
- With such significant in-the-field experience, the proposal should be ready for merge into the spec

### Conclusion

- Proposal has reached Stage 4

## Keep trailing zeros in `Intl.NumberFormat` and `Intl.PluralRules` for Stage 1

Presenter: Eemeli Aro (EAO)

- [proposal](https://github.com/eemeli/proposal-intl-keep-trailing-zeros)
- [slides]([https://docs.google.com/presentation/d/1gunNRRXJNdDwqTHh-XjV3ueI8PFasRI9WcF4KfWvxE0/edit?usp=sharing](https://docs.google.com/presentation/d/1gunNRRXJNdDwqTHh-XjV3ueI8PFasRI9WcF4KfWvxE0/edit?usp=sharing))

EAO: This is a proposal that is distinct from `Decimal` but coming out of the discussions we have had between the Decimal and Amount/Measure folks in the TC39-numerics group. It’s effectively a small bugfix of `Intl.NumberFormat` and `Intl.PluralRules`.

EAO: What we want to do is support better the trailing zeros that may be present in string values that we are formatting. So effectively on the left is what happens currently when we have a NumberFormat and a PluralFormat instance. Both of these supporting the `.format()` for NumberFormat and PluralRules `.select()` input that can be not just a number but it can also be a numeric string. And these values can have trailing zeros. And on the left, we have the current behavior which is that effectively we discard the information about those trailing zeros and we treat the string `”1.0”` as the numerical value 1. And therefore, when we’re formatting that, by default formatted as just `”1”` and we are selecting its plural category, we consider that to be the category one in English these examples.

EAO: And the proposal here is that we should not discard this information, but to retain it so that when the value that we are considering to be working with would be the value 1.0. So we would format it as `”1.0”` and we would select in English its plural category of 1.0 as `”other”`. This is because in English, you can have “one apple”, “two apples”, but in particular it’s “1.0 apples”. So even though the value is one, because we care about the fractional digits in English for when we’re selecting the plural variant, it’s important. Of course it’s important when formatting when you see the “.0” or not.

EAO: So the proposal is change the internals of `Intl.NumberFormat` and `Intl.PluralRules` so the trailing zeros would be retained in the processing. No external APIs would actually change in their appearance, they would just change how internally we care about strings with trailing zeros. So also options like `minimumFractionDigits` and others that work on defining how to display a number would work as exactly as before. If we construct the NumberFormat with the option of `minimumFractionDigits` 1 and then were to feed it what to format the string `”1”`, we would include a minimum fraction digit of one. On the other hand, if we were formatting a string 1.00, we would include the point zero zero in the output because two fraction digits is more than one. And then because maximum fraction digits has a default value of three, if we give the same format of the string input 1.0000, the output would not have all of those four, but would have the three fraction digits coming from the maximum fraction digits value.

EAO: And previously, we’ve been fiddling with the treatment of string values, numeric string values in `Intl.NumberFormat` and `Intl.PluralRules` and when we’re working with the `Intl.NumberFormat` be three proposal in 2023, we changed the precision that is supported here. So currently—sorry, also relevant here is that the decimal proposal is working to represent numbers with up to 34 decimal places of precision and then there’s the whole decimal amount that’s a separate conversation from this. But currently for Intl.NumberFormat and Intl.PluralRules, we support 308 integer digits of precision and up to 100 digits of fraction precision. There are 308 integer digits is coming from us using the max value—sorry, number dot max value for the max value for which formatting is supported. This also got changed the maximum element of the fraction precision in 2023. It was 20 previously, now it’s 100. So effectively, we have recent history of messing around with this with no ill effect for users. So we have relatively high confidence that applying this change would not break the web, or cause users to experience things that they were not expecting to get.

EAO: Also relevant is this is kind of allowing for better use for an existing number method `.toPrecision()` that exists that allows you to get format a number as a string with a given number of precision digits, significant digits effectively and that `(42).toPrecision(2)` gives you 42 dot trailing zeros and other way around `(4200).toPrecision(2)` gives you exponentially notation. The string values we are producing would be formattable with the given precision effectively.

EAO: As a small detail of what is kind of open for discussion here is [issue \#1](https://github.com/eemeli/proposal-intl-keep-trailing-zeros/issues/1) on the repo: given that we have already in JavaScript for `Intl.NumberFormat` in particular, trailing zero display as an option, I’m actually not sure if we support this one of the plural rules. If we don’t, we ought to fix that. Separately from that, if there’s a use case that somebody could come up with for why the current behavior, that is actually kind of buggy, is something that somebody would want, we could add the third option for something and strip for string to come up with and do the thing we’re currently doing and hopefully able to change the “auto” to be default behavior to be what we want.

EAO: So as with the discussion on locale info variants, this is kind of close whether we ought to be filing this as a normative PR or as a tracked proposal like this. But at least for this, I think the conclusion we came to in TG2, where I previously presented this and got support for, was that it would be appropriate to ask for Stage 1 advancement for this.

EAO: And that’s all I have got. Happy to take questions from the queue.

SFC: Thanks for bringing this proposal forward. I think it’s a bug fix. It’s something that we should have had a long time ago. So I definitely support this proposal moving forward. I think the spec needs to be written carefully, because exactly how these options interact with each other, I think it’s something that we need to be careful about. I was discussing with NRO yesterday, and he has a pretty good rule of thumb that we should apply. The rule of thumb is basically that trailing zeros that come in on inputs should be treated the same as any other type of digit. The original version that I had in mind when I was thinking about your proposal is that, okay, well, if we have a strange with trailing zeros and input, that goes through the different type of code path that is overridden when we specify minimum maximum packages and this framing is better and cleaner. We need to make sure when we implement it in the spec we do it correctly and be careful how we write it. Assuming that we do that, which I think is totally doable, this should go to Stage 2.7 next meeting. So that was just my comment.

SFC: I’m also next on the queue. You’re asked a question about `trailingZeroDisplay`. I think it has its use cases, I don’t think that we need to change it. Use case is basically when displaying numbers when rounding, for example, two fraction digits were—the individual wanted to display numbers, for example, “1.88” and “1.89” and “1.90” and “1.91”, et cetera, and then “1.99” and “2”, “2.01” and “2.02”. That’s the use case of trailing zero display integer. I don’t think that behavior needs to change at all. We will still like check after we have done all of the rounding are there—like, all the digits after the decimal separator is zero. If yes, strip the integer. I don’t think it needs to necessarily be changed here.

EAO: I agree it probably doesn’t need to change. This is noting that if we identify a use case for getting the current behavior—for which I do not know of any actual use case—this is a place where we can add an option value for enabling that behavior.

NRO (on queue): +1 for stage 1

USA: Looks like nobody else is on the queue.

SFC: Should we get Stage 3 reviewers even though it’s a little early? I think we should probably get Stage 3 reviewers.

EAO: I think it’s a little early. If somebody wants to prematurely volunteer, I would be happy to accept.

SFC: I’m volunteering.

USA: We have at least one volunteer. Let’s see if somebody else in here or online would like to volunteer to review the spec.

DLM (on queue): support stage 1

USA: All right, then. We get Stage 1 and one reviewer for now. Thank you EAO and everybody else for participating.

### Speaker's Summary of Key Points

- Trailing zeros are important when formatting numbers or selecting their plural categories, and should be retained when included in a numeric string input value.
- If accepted, this proposal would change the internals of `Intl.NumberFormat` and `Intl.PluralRules` such that trailing zeros would be retained, and included in the formatted or selected value.

### Conclusion

- The proposal was accepted for Stage 1.
- SFC volunteered to review the spec text.

## `Decimal` Stage 1 update

Presenter: Jesse Alama (JMN)

- [proposal](https://github.com/tc39/proposal-decimal/)
- [slides](https://notes.igalia.com/p/tc39-2025-05-decimal-update)

JMN: My presentation is on decimal. This is a natural follow-up to what EAO was just talking about. It’s maybe you might say a bit of an overlap. We’ll see how and why or why not. I’m working on this with Bloomberg and Google. I’m happy to tell you for the—I don’t know. I think I need some kind of BigInt notation to tell you how many times we talked about decimal.

JMN: Just to remind you, decimal is all about exact base-10 representation of numbers and arithmetic on them. The issue we found and perhaps many of you have also experienced yourselves is that decimal numbers we would like them to be handled as they are in “math”, the thinking being that we use decimal notation and know what addition and subtraction and so on mean. But sometimes we can get into difficulties there where the things that we get back don’t match our expectations.

JMN: It’s really kind of a sad situation because some programmers really consider binary floats and the rounding issues that come up with them, especially on arithmetic with them, as just a fact of life, with no. So they’re sort of stuck in this kind of number jail—that’s unfortunately the way some programmers view the situation. Many are aware of the issue and use a library for these kinds of things. But the main fact is, I think a lot of programmers, we just write decimal notation. We expect at least basic math to work, the kind of digit by digit. But that’s just not how it is. And decimal is a way of trying to solve this problem.

JMN: We have a nice little community that talks about these things. We have a little call that discusses these things every couple of weeks. And I’m here to report today about some progress we have made in the last—well, I guess it hasn’t been too long since the last plenary and we’ve made progress in the group. We’re not asking for stage advancement today but just an update. We think we’re getting close. We think we basically nailed down essentially all of the main issues that we have in mind with the decimal proposal.

JMN: The `Decimal.Amount` thing, what is that? That’s a little class that wraps a decimal value with some extra information about how precise that decimal, that mathematical value, should be understood. Recall that the decimal proposal is working with the notion of a canonicalized subset of IEEE-754, and when I say decimal 128, I always mean this subset of official or full decimal 128. That’s what the decimal proposal is working with. Here simple example: Take, for instance, “2.3 with two fractional digits”. So you can see that’s a pair of data. It’s the number and this extra information about how precise that should be understood. “-1.759 with three significant digits”. You can see there, there might be actually more data present than we would like to have, that has four significant digits as it’s written. How about things like “42 with four trailing zeros”? That could be another way of talking about numbers here with the precision.

JMN: The thinking is that this amount concept—so the number plus some notion of precision, is going to round out the internationalization and data exchange stories for decimal. There’s use cases where all digits are needed, especially thinking about data exchange when we have digits coming over the wire, we may need to keep all the digits around. So we may laugh about throwing away those trailing zeros, but in fact in some cases we need to know how many digits do we have originally We don’t want to track that in some kind of out-of-band way. `Decimal.Amount` is the way to keep track of the information.

JMN: Just to clarify, there was some discussion about this beforehand. I wonder if some of you in the room have this in your mind, the precision of `Decimal.Amount` objects or values is tracked separately. This is a pair of information, right? It’s a number, a canonicalized decimal128 value plus a precision. That can be just updated as you wish.

JMN: Again, we’re talking about a very small class here. But here is the API. At the moment, we are thinking about creating these things with just some kind of static method that takes a string. This is a bit under discussion. But at the moment, this is the way to create these values. We have basically just a way of exposing the underlying decimal as a string. And `.toLocaleString()` might do a bit more. I will tell you more about that in a second. There will be significant digits and fractional digits and trailing zero properties. The names here are up for discussion. I realized a bit late that this fractional digits conflicts with how things are done with Intl. Maybe it’s called fraction digits, TBD. And by the way, I know that somehow my spelling of zeros is with an E, but maybe if we drop the E, TBD.

JMN: There’s a way of dropping the zero in various ways and in the previous slide and talking about digit measured with significant digits or fraction digits or some kind of trailing zeros. We have some methods that allow us to functionally update precision in various ways. When I say functionally update, that’s the hint that the data we’re talking about is immutable just like decimal values. Rounding does come up here in some cases that we may need to do something other than the default that is going to be rounding ties to even just like in IEEE-754 specifies.

JMN: Let’s take a look at some examples of this just to get your intuition warmed up here. So let’s take something like `"6.200"` given to us as a string. Well, that’s easy. `.toString` of that will give us the same thing, nothing surprising there. But you can see that the properties of significant digits, fraction digits and trailing zeros are being set here. They have different values.

JMN: We can functionally update precision. So if we start again from the `"6.200"` example, we can say “give me this thing with three significant digits”, “with one trailing zero” or “with zero fractional digits”. You can see especially with that final example of setting the fraction digits, you might think there is rounding going on there. Indeed there is rounding going on there. The `Decimal.Amount` thing is pretty simple. It’s not that simple. There is the notion of rounding going on here. There’s a little bit of error going on with the mathematical values here.

JMN: Here is a little Intl example. What if I want to take something like -48.136 and format that using `Intl.NumberFormat`? I can just pass in my amount with some fraction digits and get what I want. We can also pass in some significant digits or trailing zeros. That’s fine. But the point is that these values should be seamlessly handled in Intl.

JMN: There is a bit of overlap here with the Measure proposal, which is something that is also being worked on here. You might even say this presentation is part of the Measure proposal, sort of. We decided a couple plenaries about the relationship between `Decimal` and `Measure` to keep them separate and they are being handled as such. The thinking is that Amount notion is something that overlaps somewhat with the measure proposal. And our thinking is that the Measure proposal can be slotted in later. We can add some kind of unit or currency attached to these kinds of values.

JMN: Method names are being changed. I am happy to bikeshed of these things with all here. But here is an example. Imagine there’s an amount. 5.613. Well, let’s think that in terms of kilograms. We can attach a kilogram unit there with kilograms. We can also think of this thing with a certain number of significant digits, or fraction digits, or trailing zeros, if you wish. Again, .withUnit specified. That’s the third example, the third line there.

JMN: The relationship with what we just heard, with this keep-trailing-zeros, as it was discussed, this is essentially kind of a bugfix in Intl. The thinking there is that keeping these trailing zeros is something that we probably should have done from the beginning. But `Decimal.Amount` is still needed because we would like to handle some use cases where precision and round-tripping of decimal data is going on outside of internationalization contexts. So, for instance, think of this stepper. This was hinted out just in the previous Q&A. So just imagine that we have some kind of stepper in a UI. We want to go up or down by a certain fractional amount. There’s a little function in for stepping up an amount by some kind of increment based on the fractional digits that an amount has. This quantum notion is coming from Decimal128. But here, you can see that it’s being computed. It’s not represented in the number.

JMN: We wanted to say, let’s start with 42.99. Step it up. And we get 43.00. Notice the trailing zeros, of course. That’s the whole point of examples like these. We can step it up with certain amount of fractionalDigits. And put—that’s a typo. The point is, we can step this up in multiple ways here.

JMN: More examples from outside of the internationalization context. Data exchange. Imagine that I hinted at this before. We would like to data some data coming over the wire, but we want to preserve all the digits because of thinking is, the digits present in the input need to be respected in what we passed back over the wire. So let’s take the 40-second custom’s income. We convert to a decimal value and do arithmetic on that. With the amount directly, but rather the underlying decimal value. And then I render that thing using the fractionDigits that came in over the wire. That’s the thinking.

JMN: That’s it. So we think this is a little class that rounds out the story for decimal. In the internationalization and data exchange stories. We think this is also addressing the main motivating problems in use cases for decimal. So we view this as part of the package for decimals, part of the offer that decimal makes. And that’s it. I am happy to take a look at the queue.

MM: Hi. I have a clarifying question: go back to the JSON slide. When you have a JSON—you’re imagining the `JSON.parse` on the customer data could result in a decimal number?

JMN: What I am thinking is that there’s probably a string there.

MM: The customer data itself is string in JSON syntax?

JMN: Yes. That’s right.

MM: Okay. How does the customer data indicate in that syntax which is fixed, which is not going to change, how does it indicate in that syntax that the data it has is decimal data?

JMN: I am not sure I understand. I mean, so the thinking here is that –

MM: The syntax of JSON is fixed. It is not something that can or ever will evolve.

JMN: That’s right. We are not proposing any changes there.

NRO: It’s part of the schema for begin. It’s like start, not in the data. You know the schema the JSON object you are receiving. Like, you do for begin.

MM: I’m sorry. We are in—how does something in this come to be—I see. I see. What is the value of `data.customers[42].income`?

NRO: That’s a string.

MM: That’s a string. Okay. Okay. Good. I understand. I am done with my clarifying question.

SFC: My question, I don’t think you specifically addressed in the slides was, do we agree that, like, a `Decimal.Amount` that was created with significant digits and a different `Decimal.Amount` created from `fractionalDigits` if they resolve to the same value these things are considered equal? It’s a yes or no question. I think the answer is yes, but I want to make sure.

JMN: Just to make sure I understand, do you mean things like –

SFC: I give a code example. I have 2.3 with two fractional digits and 2.3 with 2 significant digits and make them into `Decimal.Amount` and these are equal

JMN: Yes. Correct.

SFC: Excellent.

MM: Go back to the slide where `Decimal.Amount` appears—where introducing that and you said something about decimal that I want to clarify. So you said something about—I thought when you were talking about decimal, not yet `Decimal.Amount`, I will come do that in my next question, you said something about preserving trailing zeros or, you know, making sure they are preserved interchange or something. I thought that the whole agreement to allow decimal to go forward, that the fundamental principle is that the various cohorts for the same decimal magnitude are not observable

NRO: I can help.

DLM: Thank you.

MM: And I see that WH’s clarifying question is about the previous topic. We yield to Waldemar’s clarifying question. And then we can get back to my question.

WH: The answer to the previous topic posited an operation that determined whether two `Decimal.Amount` values are equal. What is this equal operation on `Decimal.Amount`?

JMN: It’s a bit of a—I am a bit flat-footed on this question. We did have I think in previous slides, like the previous plenary, a notion of equals and I didn’t put that in here for the API. But the thinking is, actually that equality, if we do have it, is just something like two amounts are equal if and only if their underlying decimals are equal. And all the precisions notions are the same. So it’s just a pointwise equality. Very simple.

WH: Why do we want such an operation? As I understood it, we don’t do any arithmetic on `Decimal.Amount`, right?

JMN: Correct. Yeah. That’s right. I did leave it out of the API. So in the previous plenary, this slide was present, but there was an equals method. But I don’t have it here at the moment. It’s been removed largely because we haven’t seen the immediate for it. That’s what you are kind of hinting at here.

WH: Yeah. Equality seems to fall together with addition and other decimal operations, so —

JMN: Yeah. That’s right. At the moment, we don’t have equality in the –

WH: Yeah

JMN: Right? Yeah.

WH: I am saying —

SFC: I guess We are still on my topic which has been flow off the queue. We should—I was not aware that we removed the dot equals from the prototype. We should discuss that at another point. Since it’s off the queue, let’s go off the queue

MM: So go back to the slide where you’re introducing decimal. While you were talking mere here I heard something that puzzled me. You were talking about preserving the number of trailing zeros. A decimal, as opposed to an amount, does not have a meaningful number of trailing zeros. It just preserves the magnitude that can be preserved in IEEE Decimal128. Internally, it’s going to just do Decimal128 arithmetic. But we agreed to remove everything that makes the difference between cohorts observable, just like we avoid making the difference between different NaN values observable. So is that still the case? Do we still have that agreement in force?

JMN: Yeah. That’s still in force. We still commit to decimal that doesn’t expose that, that stuff. So that’s—maybe what I was trying to get at with this final bullet point about precision being tracked separately. So it’s not contained in the value itself.

MM: Okay. Okay. Okay. It’s talking about preservation of all digits, it’s not preserving the difference in trailing zeros between two decimal cohorts for the same magnitude.

JMN: That’s correct. That’s right. Any trailing zeros just gets stripped

MM: Good. Good. I am glad I clarified that. That’s great.

MM: So now, the big question is simply: why is the amount tied to decimal? It’s clearly the case that the concept of an amount applies equally well to numbers. I just don’t see any reason at all to tie it to decimal, especially if as, you know, I understood from WH’s objection last time, we agree that the representation of precision is not to hide—to try to hide it in the machine representation of Decimal128 because there’s this weird loss of significant precision as the magnitude gets large, the remaining number of cohorts to representing number precision vary with the magnitude, which is what you would have to do if you were squeezing it into the Decimal128, is just silly. And I think we agreed last time not to do that. If we don’t do that, why does amount have any special relationship with decimal?

JMN: Well, one of the things that we would like to do is to be able to extract an underlying numeric value from an amount. So if I may try to riff off your idea, you could imagine that we work with just strings, for instance, just digit strings as a data model. But then we would have no guarantees about any bounds, if we’re to convert it –

MM: Okay. So I’m sorry to interrupt. I am not proposing strings. That was just an illustrative example. To be clear, I am proposing that the magnitude within the amount be any applicable notion of numeric magnitude, which clearly includes both decimal and number.

JMN: Okay. So you’re asking, why wouldn’t we have something like `Number.Amount`? Is that a way of rephrasing your –

MM: I am saying, why don’t we have an amount and have it be able to hold in its value field either a decimal or a number? And then the precision, which is the thing that amounts add to the underlying magnitude, is independent of whether the magnitude is represented with a decimal or a number.

JMN: Yeah. That’s right. I think I see what you mean. With the `Decimal.Amount`, the thinking is that there’s a single data model that we know and can rely on with known semantics. If we were to have –

MM: Is this an issue of, you know, what static type tracks what—whether the value field is decimal or number? Because, you know, the static type systems for JavaScript, you know, TypeScript and such, have parameterized types. So that’s not an issue.

JMN: Yeah. I see what you are saying. I think we could imagine something like a `Number.Amount` or some kind of generic notion. I think that would –

MM: Generic notion is what I am suggesting.

JMN: Right. I think that would be consistent with what we are talking about here. I think one thing that might concern me a bit would be some kind of mixing up of numbers and decimals, if someone starts combining amounts that were created from numbers and amounts that were created from decimals. There might be some puzzles there.

MM: They can do that without amounts. Right? There’s going to be lots and lots of existing code that assumes that numbers are falling freely (?). Numbers or BigInts. When you introduce decimal you might violate some assumptions of that code amount as an orthogonal abstraction, if we keep track of what the precision is, what I want to show on that is no different than any other code that might be trying to be polymorphic across several types.

JMN: Yeah. That’s a fair point. I think that we could entertain that notion. I think that would be consistent with pretty much everything else that we’re talking about here. I don’t yet have a quick response to that. But –

MM: Okay. So—okay. This was my major objection the last time you brought this. And it remains my major discomfort with what I am seeing today. I don’t see this as a minor issue.

DLM: There’s a large queue and there’s a number of replies on it. We should go back to the queue.

EAO: I agree with MM. In particular, with respect to the point that is on the slide currently, there are use cases where preservation of all digits are needed. We have in JavaScript three different valid representations of numeric values. We have Number, we have BigInt and we have numeric string representations that are supported by `Intl.NumberFormat` and `Intl.PluralRules`. `Decimal` is a superset of Number but `Decimal` is not able to support all of the values that are supported by BigInt and not able to support all of the values supported by Intl.NumberFormat. And I don’t see why Amount should be linked specifically to the limitations of Decimal.

MM: Good.

SFC: I think EAO just noted `Decimal.Amount` is a superset of potential `Number.Amount`. I have a different queue item later about polymorphic amount. But I will talk about this here. The idea of decimal.amount is that for all use cases of an amount, you only need a decimal. You don’t need a BigInt in any amount for any of the use cases we are aware. All the use cases we know about are decimal—is it appropriate? Is an appropriate datatype to represent to—able to handle those use cases.

SFC: And in particular, since it’s a super set of `Number.Amount` the only case we are thinking about are well, there are use cases for BigInt amount that are not covered by a `Decimal.Amount` and are there use cases for a string amount not covered by a `Decimal.Amount`? If the answer to those are no, we should make the amount be handled, covered by decimal. Instead of anyways it is polymorphic.

MM: There’s a technical claim being made here that I had not heard before. And it might resolve my discomfort. Are you saying that every magnitude representable in IEEE float64, what JavaScript calls Number, that every real number that is representable in float64—is representable in Decimal128 exactly?

SFC: So I addressed this question on the Github issue. The thing I have noted on the Github issue is there are two different ways that you can represent a number as a decimal. One way is what I call `Number.toFixed`, which represents a very large number of significant digits of precision, according to the exact power of 2 that is used. The other is `Number.toString`, which always returns a string value with no more that approximately 18 significant digits.

MM: I’m not talking about the first, I am talking about the interpretation of the float64 as denoting a mathematical real number. And the magnitude in Decimal128 also denotes a mathematical real number. Is the set of real numbers that are exactly representable, are those a subset of the real numbers exactly representable in Decimal128?

SFC: So the next part of my sentence was going to be that the decimal proposal itself, as it’s currently written, always uses the string form, not the mathematical value form or what I like to call the `toPrecision` form when converting back and forth. At no point do we ever use the `toPrecision` form to convert from one to the other. And in fact, in round trip, you can go from a decimal and back to a number and you get back the—even though you are representing the decimal value as the sort of shorter abbreviating forms the two string form when you round trip, you get back and recover the Number form. And that’s the premise on which my comments that decimal is a superset of Number are based

MM: So I think we can take this offline at this point. Let me register your answer did not answer my question.

DLM: Okay. We have about 5 min left and a number of replies.

NRO:. About generic just—argument, whenever you have a string that encodes both the number and its precision, like the example coming from decimal. Given the string, you need the numeric value and the precision coming from it. And which means, you cannot \[inaudible\] this constructor and then pass to this constructor to amount constructor because then you lose information about the precision. So the amount itself needs to be able to parse the string into, like, into a given numeric type. And these cannot split into separate operations.

MM: Okay. Okay. Okay. That’s—good. Good. The conversion from a string into an amount, I can see why that is more naturally tied to `Decimal.A`mount, that sort of breaks the symmetry, what I was arguing. So thank you for that clarification.

DLM: Next up we have JHD.

JHD: Yeah. This may have been addressed, if we made the generic thing, I assume it would handle BigInt so it would be generic for all types?

JMN: Yeah. That’s right. I think we’re—I think SFC, if I can anticipate the next question, there’s already a response about polymorphic amount. Is that, SFC? Does it touch on what JHD said

SFC: It’s a different comment. But I can talk—I can take my queue item now. Regarding a polymorphic amount, it’s something we could explore and do. But I just wanted to note at least when I asked engine implementers, as in people who work on V8—the idea of, like, having a polymorphic amount means that you are making a type that is like an enumeration of multiple variants, and any operation you do on the type has to go through a match statement that has multiple branches. And when you store it, you have to store it on the heap somewhere and allocate it and so forth. And that’s what I mean when I say polymorphic amount, and there’s I am at thissings amounts. If we pick one representation, it makes it easier to implement. If there’s motivation for having polymorphic amount, `Decimal.Am`ount doesn’t satisfy it. Absolutely. Let’s explore it. I haven’t heard a motivation for a use case. So… that’s my comment.

EAO: SFC earlier said that there are no use cases for values for Amount beyond the values supported by `Decimal`. Given that one of the reasons for `Amount` is to use it in particular for `Intl.NumberFormat` and PluralRules, which support up to 400 digits, could you clarify, SFC, if you think it was a mistake for the support there to be extended so far beyond what you would claim to have valid use cases?

SFC: I think that the limit that was there before was definitely too low because we were parsing a string. It was 16 significantDigits. It’s likely we would have handled all the use cases by increasing that to 34. The number of use cases we cover by going from 34 to 400 is much, much less than the number of use cases we cover by going from 15 to 34. I don’t know if that answers your question.

DLM: So we have one minute left. Do you have time to revisit `Decimal.amount.prototype.equals`, or capture the queue and do a continuation?

SFC: We should probably—it’s longer than a one minute topic.

DLM: Fair enough.

JMN: Perhaps WH could say something? I know what SFC has in mind. We can continue that off-line.

SFC: I have a bunch of questions regarding, you know, how faithful this round-tripping actually is, examples being what if you supply with a string, containing pi to 70 decimal digits, what do you get? `Decimal.from` with a string containing pi to 70 decimal digits.

JMN: Right. I guess in this case, at the moment, you would—there would be rounding after 34 significant digits.

DLM: We are at time. We will take it off-line

JMN: Yeah. Sounds good.

SFC: I will just briefly, I think, maybe directly answer MM’s question because I didn’t directly answer it. It’s easy to come up with examples of binary]. Take 1.3. I get more than. Does that answer your question directly?

MM: I’m sorry. Let me make sure that we were going in the right direction. If you represent in float64 the binary –

DLM: We are at time and have another topic. We have to save this conversation

MM: SFC, you and I can take this off-line

SFC: Sounds good.

RPR: Okay. Given—we are coming to—more queue than we can get through, I was going to say, have we captured the queue, CDA?

CDA: Yes.

RPR: All right. Great. So JMN, please have in mind what I would like for the summary because obviously we are in the middle of it.

JMN: My guess as a summary, we have talked about `Decimal.Amount` again and its latest status. There’s some fundamental questions to be addressed there. We expect to hear more from that next time.

### Speaker's Summary of Key Points

- We discussed the motivation for and against a notion of an amount backed by a Decimal. The committee does not have consensus on whether a Decimal-backed or String-backed Amount would be better.
- The committee is also unsure about whether an Amount notion should be polymorphic (accepts any kind of “numeric”) or backed by a concrete numeric type, such as Decimal or Number or BigInt.

### Conclusion

- We will continue discussion in a continuation topic on the matter.

## Iterator Sequencing for Stage 3

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-sequencing)
- [slides](https://docs.google.com/presentation/d/1XXAqt72dHIBQBvTRmR4UqOWbEcj_zqoS61NRMwriJ7s)

MF: So as a reminder, the iterator sequencing proposal is Stage 2.7. It adds one function iterator.concat which takes 0 or more iterables and then yields them in sequence. Well, yields the values that they yield in sequence.

MF: Let’s go over things that have happened since it reached 2.7. First we merged all the tests. Thank you ABL, for writing most of that. We also fixed a small bug in the spec text by needing to define this underlying iterators slot so that iterator helper prototype return would work. Because it was expecting it to be there.

MF: Also, in December, I presented this presentation about reusing IteratorResult objects in the iterator helpers. The conclusion from that was that we would not reuse IteratorResult objects for the iterator helpers that had already been added to language. It was proposed for like filter and drop. I don’t remember which ones they were proposed for. But we would reuse IteratorResult objects for `Iterator.concat`, for this proposal. So I updated the spec text and the tests for that to match what we have consensus for there.

MF: Also, ABL raised the issue that he would like the final `.value` to be accessed on the final IteratorResult. This is apparently a thing that `yield*` does. I don’t know why it does this. He'd like it to match `yield*`. So we have sent some PRs to do that. And also, have sent a PR with a test for that. That PR has not been merged but that was sent pretty recently. It’s very straightforward.

MF: So that’s what is being done. But there are still some issues we are talking about. So another thing ABL raised is that `yield*` can leave the iterator open, which `Iterator.concat` does not do. So for a bit of explanation, remember the reason why we did this, reusing IteratorResults, was we wanted to better align with `yield*`. We thought maybe it might have a little bit of performance impact as well. But when you do a `.return` on the iterator produced by the `yield*`—sorry, on the iterator that is produced by the generator, that `yield*` is in, then sometimes it does not close the iterator. In particular, that’s when the return method on the underlying iterator returns `done: false`. So basically, it rejects being closed. `Iterator.concat`, always closes the iterator. So you still can’t use a `yield*` to implement `Iterator.concat`. Every time we try to get closer to `yield*`, it makes things kind of worse. And I think that we probably shouldn’t just keep going down this route. So I think it’s okay that we differ from `yield*` here. I think thinking of it as `yield*` is more about the mental model for the developer than about "can we literally implement it this way as self-hosted JavaScript with `yield*`". It would be okay to do this not-closing thing, I guess. But we would also have to forward the arguments to .next and return, which we don't do with any of the iterator helpers. I don’t think we should start now. Given the things we have done to match and continue to do to match it, we should not make it our goal to closely match `yield*` and make it actually implementable that way.

MF: Given that, if we don’t fully match `yield*`, should we try backing out the things we did to get us halfway there? So in particular, that was accessing the last `.value`, this should not be useful to anyone. Should we create fresh iterators objects again, which had, like, a neutral effect it seemed. I am going to need answers to those questions before we can proceed. But assuming we just leave things as they are, or have a very, very straightforward result, I would like to go for Stage 3.

MF: So does anybody have any feedback about the path forward for this proposal?

DLM: Yeah. We’re fine with diverging from `yield*` behavior. I think ABL was mistaken and didn’t realize it until the last minute, but I would that it’s fine with `yield*` and we discussed this internally as well.

MM: So I make mistake on the final did it value. We have to review, get the committee to agree on, and I will abstain on that one. I do object to reusing the IteratorResult object—or rather I should clarify. I am not prepared to explain our objection. This came out of an internal discussion at Agoric. Because of a time zone, everyone is not awake right now and I was the one that followed the discussion the least. But clearly, using the IteratorResult object gives opportunity for unexpected communications channels that don’t happen if you always –

MF: So I want to clarify the state of things is we had consensus as of December to reuse the IteratorResult object. And the thing I am discussing is, revisiting that consensus. But you’re saying, you object to keeping things the way they are? Is that… ?

MM: Yeah. As a matter of fact, I am going to take myself off now, because I see that RGN has put himself on the queue, and will cover that much better than I am.

MF: Okay.

DLM: LCA?

LCA: Yeah. I am fine with divergences. I think it’s weird to reuse objects. But honestly, I will go—I am fine with going either way and the same with `.value`. I prefer we didn’t, but if somebody is going to object to this, if we don’t, then let’s do it.

RGN: I think MM was more generous about my current mental state than is warranted. But I am curious about the sequences of `yield*` versus iterator concatenation on interrupted iterators. If the concatenation is broken off, can the other iterators be revisited? Can you restart iteration of the inner that was fed into the concatenation? And does that differ between `yield*` and `concat`?

MF: Yes. Just like the other iterator helpers, if you have a reference to the underlying iterator as the iterator helper is doing its work, you can advance the underlying iterator. And that behavior is well-defined. It might be surprising, but it is well-defined. So you can do that with iterator sequencing. Like, between each next of the sequenced iterators, you could access the underlying iterator and next them and end up getting like every other one in the sequenced iterator. The `yield*` expression itself tries to consume the entire iterator. So you would have to –

RGN: To be clear. I am not talking about poking in during ongoing iteration, but rather interrupting it—like you’re in a for-of loop and you break. The kind of thing that will send a return into the concatenated iterator.

MF: That difference I was explaining on this slide here is that with `yield*`, if do a break in a for-of loop and it calls return or you manually call return, whether or not it closes the underlying iterator, the thing was passed to `yield*`, it depends on whether the current method returns `done: false` or `done: true`. Whereas a difference today is that regardless of what `.return` returns, it will always close the underlying iterator. And this is a thing that was pointed out by ABL. It’s not a good thing to try to match `yield*`, every time we get close to `yield*`, there’s less desirable behavior. Like the things we would not have designed today.

RGN: I think—well, I guess one more question on this line then. You say always close the underlying iterator. But isn’t sending return precisely the mechanism by which you would do that or not?

MF: We are talking about sending return to the produced iterator. So the value returned by `Iterator.concat`. Right?

RGN: Yes.

MF: That is an iterator. If you called `.return` on that—sorry. I just confused myself. There’s too many iterators involved.

RGN: Let’s say we are concatenating `a` and `b` to produce `c`. So if I am iterating over `c` and I break, that’s going to call the return method of `c`.

MF: Yes. And then—I am blanking on it right now. Just give me one second.

RGN: Okay. Really my fundamental question was, are we looking at a difference between `yield*` and `Iterator.concat`. If I understand correctly, yes

MF: In that scenario, I believe so, yes.

RGN: Okay. So given the fact that we have got these differences, I am very enthusiastic about revisiting the past decisions that were based on matching `yield*`. One of those being the reuse of the IteratorResults, which—the justification for reusing them was alignment with `yield*`, and basically we are saying alignment with `yield*` is unachievable. So that does differently motivate the decision.

MF: It’s not technically unachievable. It’s just, it has made us make poor decisions that we wouldn’t have otherwise wanted to. And, you know, with the benefit being that we think implementations might be simpler and more straightforward by using it—as opposed to JavaScript that uses `yield*` that it’s worth it. We are doing language design. We’re not doing implementation design.

RGN: Yeah. Makes sense. I am going to try to refresh my memory on what it was that we found. But it basically hinged on this point. And some further undesirable behavior of `yield*`, that, as you’re talking about, we can do better.

MF: I would love for somebody to revisit `yield*` and not access the final `.value`. That would be great. Nobody can be relying on that. Right? Just don’t do it. Save some cycles.

RGN: Yeah. Okay. So yes. In favour of revisiting that, in favour of not reusing IteratorResults and then other stuff along these lines to follow. We’re going to have to work on our vocabulary about how to speak about these scenarios. Thanks for working with me. I am just as tired as you are.

MF: Yeah. I am just getting over it

LCA: I want to retract my explicit dislike for using the object. I looked and it seemed fine. Yeah. I don’t care. We can go either way

MF: It sounds like—okay. So assuming we’re through the queue, it sounds like the general feeling I am getting here is, we would like to revisit the things that we’ve done recently to match `yield*`, the changes to the proposal since 2.7 that we would like to back those out and design this the way that we would like to without considering `yield*` and match the other iterator helpers as well. And if that’s the case, then I think it’s probably best that I make all the changes, get the proposal into a nice steady state, give everyone time to review it again in that state, and then come back for Stage 3—rather than saying, Stage 3 with these modifications. Although I expect it will be done very soon. It’s not much work to do.

MF: Given that, if nobody else has any other feedback, I think I could call it there.

### Speaker's Summary of Key Points

- For iterator sequencing, we will back out [pull request \#18](https://github.com/tc39/proposal-iterator-sequencing/pull/18), reuse iteratorResult objects, and pull requests [\#19](https://github.com/tc39/proposal-iterator-sequencing/pull/19)/[\#23](https://github.com/tc39/proposal-iterator-sequencing/pull/23), access `.value` on the final IteratorResult object
- We will not try to further match `yield*`
- I will update the tests accordingly and bring this back for Stage 3 at a later meeting.

## Explicit resource management continuation

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-explicit-resource-management)
- [slides](https://1drv.ms/p/c/934f1675ed4c1638/EYcWEHLrSh5Ah2k4eStVfb0B6skl-3qNmTKqqfLZVs9eiw?e=cXHFAt)

RPR: So returning to this topic because we are still within 8 minutes, all right. We are back on explicit resource management. And RBN—first of all, is YSV or DLM, are you happy representing modus operandi right now? Okay. In which case, RBN, if you want to just restate your conditional request for consensus.

RBN: Yes. I am seeking conditional advancement to Stage 4 for explicit resource management pending the final approval of the remaining tests in Test262 and the final approval of the changes to the specification in the pull request for ECMA262.

RPR: All right. Sorry. Let me—thank you for whoever updated TCQ. So on the queue, we have explicit support from CDA, from DLM (therefore, Mozilla). MF has a question.

MF: I’m sorry, I missed the earlier part of this presentation. But if we don’t have the tests finished, how do we know we have two implementations?

RBN: The tests have been finished for several years now. They just haven’t been fully reviewed and merged because of the size. I know a number of tests have been run against the implementations. The tests have been run against the V8 implementation, I believe.

MF: It’s not that they have recently been completed. They have not been reviewed?

RBN: Yeah. There was a review backlog just due to the sheer number of tests. They have been merged, it was a subset that hadn’t quite been made in yet. As far as I know, a lot have been run against these tests.

MF: Can we get a confirmation from these two implementers, or have you spoken to them? Do we know that that is the case?

UNKNOWN: There was some feedback provided in the topic earlier

LCA: I don’t know if SYG is here, but I have spoken to SYG after we landed or after we unflagged this and SYG said back then that they—SYG said they will run the tests. Because they had not run the tests, but I am pretty confident they have run the tests. Actually, let me just check my message with SYG. One moment. Okay.

RPR: MF is asking for confirmation that two implementations have run the Test262

MF: Given they have not landed. I am okay, but we don’t know the implementations are just running –

LCA: SYG confirmed they did run the tests

MF: Great.

LCA: And MF, you weren’t there last time. Phillip said that landing the tests would be closer to a month than a year.

RPR: So MF, to your concern, it sounds like we have confirmation they have been run by Mozilla and by V8.

MF: That is sufficient for me.

RPR: Alright. In which case, then we have heard support. Are there any objections to Stage 4 conditionally advancing depending on the Test262 landing? There are no objections. So congratulations, RBN. You have conditional stage 4 for explicit resource management.

RBN: Thank you very much.

RPR: Did you want to say any parting words on this explicit resource management?

RBN: It was quite a few years. It’s one of the earlier proposals that I have put together and went through a lot of evolution to get where it is. I appreciate the time, attention and feedback this has had over the past few years on this

RPR: Thank you so much.

### Speaker's Summary of Key Points

- Implemented in Chrome, Firefox, and XS
- Seeking advancement to stage 4 conditional on final approval of remaining Test262 PRs and ECMA262 PR
- V8 and Mozilla indicated comfort with advancement following consensus PR related to `using` in a `switch` block in the April 2025 plenary.

### Conclusion

- Conditionally advanced to Stage 4 pending final Test262 and editor sign-off.
