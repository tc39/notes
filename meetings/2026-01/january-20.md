# 112th TC39 Meeting

Day One—20 January 2026

**Attendees:**

| Name              | Abbreviation | Organization       |
|-------------------|--------------|--------------------|
| Chris de Almeida  | CDA          | IBM                |
| Waldemar Horwat   | WH           | Invited Expert     |
| Duncan MacGregor  | DMM          | ServiceNow Inc     |
| Dmitry Makhnev    | DJM          | JetBrains          |
| Ruben Bridgewater | RBR          | Datadog            |
| Keith Miller      | KM           | Apple              |
| Ujjwal Sharma     | USA          | Igalia             |
| Ben Allen         | BAN          | Igalia             |
| Nicolò Ribaudo    | NRO          | Igalia             |
| Caio Lima         | CLA          | Igalia             |
| Josh Goldberg     | JKG          | Invited Expert     |
| Shane F Carr      | SFC          | Google             |
| Samina Husain     | SHN          | Ecma International |
| Steve Hicks       | SHS          | Google             |
| Olivier Flückiger | OFR          | Google             |
| Linus Groh        | LGH          | Bloomberg          |
| Mikhail Barash    | MBH          | Univ. of Bergen    |
| Philip Chimento   | PFC          | Igalia             |
| Ioanna Dimitriou  | IOA          | Igalia             |
| Chip Morningstar  | CM           | Consensys          |
| Daniel Minor      | DLM          | Mozilla            |
| Aki Braun         | AKI          | Ecma International |
| Lea Verou         | LVU          | OpenJS             |
| Richard Gibson    | RGN          | Agoric             |
| Jonas Haukenes    | JHS          | Univ. of Bergen    |
| Istvan Sebestyen  | IS           | Ecma               |
| Guy Bedford       | GB           | Cloudflare         |
| Jack Works        | JWK          | Sujitech           |
| Chengzhong Wu     | CZW          | Bloomberg          |,
| Jordan Harband    | JHD          | Socket             |,
| Kevin Gibbons     | KG           | F5                 |,
| Michael Ficarra   | MF           | F5                 |,
| Mark S. Miller    | MM           | Agoric             |,
| Rob Palmer        | RPR          | Bloomberg          |

## Opening & Welcome

Presenter: Rob Palmer (RPR)

RPR: All right, welcome, everyone. There is—it is 10 a.m. in Port-au-Prince, if I’m saying that correctly. Remote heating today on our time zone. I will present these slides. Sorry, I’m just getting the presenter view ready. And there we go. Can you see the slides?

RPR: Yeah. We are all good. All right. So as has been if the case for the last year, we have the full chair group here, so that’s RPR, USA, Rob, me, Rob and CDA, who are also online, as well as our facilitators, Justin, DLM and Daniel, and let’s continue. Hopefully everyone that’s here has come via the regular entry form and is not just been handed a URL to Google Meet. On a note, please do not share that URL preliminary outside, and that includes the delegates chat, which is very public to read. The delegates chat is also logged as well, so please no private URLs in there. And, sorry, here we go. And a reminder to everyone that we have a code of conduct. That is available on the [TC39.es](http://TC39.es) website. Please read it, and please do your best to abide by or to live by the spirit of the document, not just the very specific rules in there, and as I think CDA has summed up, we can describe it as being excellent to each other, if you’ve ever seen the Bill and Ted fill from 1900, highly recommend it. Our schedule for remote meetings is we have a two hour block, polled by a one hour break and followed by another two hour block. As it stands, our schedule is relatively light. It is only a three-day meeting this week, and at the moment, it’s looking like we have 1.5 days worth of content, though that may expand. So, yeah, up to two days. We have already declared we shall not be going into a third day, so please be considerate if you wish to schedule overflow topics. All right, on to our regular comes tools. Hopefully in your on boarding guide from TC39 chairs, will you have seen that we use TCQ. The link to this is in the reflector post, the maybe meeting invite. This is where you’ll see the agenda of upcoming topics. And if you switch to the tab that says queue, from the agenda to queue, you’ll see what we have currently discussing, which is the opening and welcome by me, and on here, you’ll see some buttons, if you wish to interact. This is how we control the conversation and make sure that we speak in an orderly queue, one at a time. So if you want to speak and you are speaking, such as entering a new topic, you’ll see this button, I’m done speaking. Maybe that’s actually been erased now that we are using the new version of TCQ, TCQ reload, but if you see it, please don’t press this button that the Chairs normally advance. This is jumping ahead a bit. This is not—I’m not showing the buttons, but anyway, those buttons at the bottom allow you to enter the queue. Normally you prefer the buttons on the left, that’s the new topic, that’s the normal way of putting something on the queue. If you want to talk about the current one, then the lighter blue. If you want to intervene with higher priority, and as we go right, we get into clarifying questions that can come almost any time, and then point of orders are for the most intrusive, most interruptive interventions such as emergencies or our comm system is failing or perhaps let’s say that we’ve fallen behind with the transcription or something has gone wrong with that. That would be appropriate to stop the meeting and allow us to get that back in place. So the red button is there if you need to use it. We also have our async written comes in the Matrix. IRC-like messaging service or I guess I should probably say Slack-like messaging service. All open source. And the channels that you really want to be on are TC39 delegates for work and Temporal dead zone for the non-work, such as jokes and anything off topic, really. All right. Moving on, we have an IPR policy. Everyone here, in general, should have gone through or been subjected to this policy, either you are part of an ECMA member, so a company or institution that has signed up as a member of ECMA, or perhaps you are here as an invited expert, in which case will you have signed this form as part of process to be on boarded. Anyone else is deemed to be owner. If you’re here as an observer, normally that gets noted on the main invite, but we expect you not to speak or contribute into the meeting itself. Likewise, we collect notes. In fact, very detailed notes. And so just be aware that these will be going public. I shall read out the disclaim that are a detailed transcript of this meeting is being prepared and eventually be posted on GitHub. You may Ed out in at any time for accuracy including deleting comments that you do not wish to appear. And you may Ed out in the first two weeks after 2 meeting and making notes in the repository or contacting TC39 chairs. And we would love you to help with the notes. This is the fun exercise of fixing up the notes, because the majority of the content is there but we need help with attribution and small corrections that can be very humorous. If you wish to have fun with that, we shall take a show of hands now. Who would like to be our first volunteer for helping with the notes? Okay, BAN, straight in there. Thank you, Ben. Could we get one more person to help with the notes? We would love one more person. We’re inviting anyone who could help us just for, you know, if you can only do an hour, that’s fine. We can tag in, tag out. Anyone to help Ben?

BAN: Just to say, I will need to tag out for the era month code presentation, so we’ll get someone in there then.

RPR: Understandable. I wonder who could help us out? Let’s see, is there anyone here who has never taken notes before? That would be appropriate. Save the day right now. Okay, so I think we’re getting—

SFC: I can help for the first hour.

RPR: Okay, thank you so much, Shane. All right. A reminder that the next meeting, the 113th, is coming up in a couple of months, so that is in March. It’s hosted by Google. Thanks to Justin for arranging this. That’s in the Chelsea market office in New York. And so hopefully see you there. We are also trying to arrange a TG5 workshop on either the Monday or the Friday. That has not been specified yet. And please sign up on the sign-up form for that. It’s on reflector. We have done the ask for notetakers. We have BAN and SFC. I’d like to ask for approval of the previous meeting, so that’s the November meeting. Are there any objections to approving the notes from that meeting? Nothing on the queue. That is approved. And for the agenda, we have forthcoming, so for this upcoming—the meeting we’re in now, are there any objections to the agenda? No comments on the agenda, so we consider that adopted. And so next up is, is it SHN? Are you presenting the secretary’s report?

SHN: Yes, Rob. Could I please share my screen?

RPR: I will tell you when we see your screen.

SHN: Okay. Just give me a moment.

RPR: Something’s coming up. Yeah. We can see your entire desk top.

SHN: Can you see the slide show?

RPR: Yes. It would be better if you were—yeah. Now it’s full screen. Looks great.

## Secretary's Report

Presenter: Samina Husain (SHN)

* [slides](https://github.com/tc39/agendas/blob/main/2026/tc39-2026-003.pdf)

SHN: Thank you so much. Okay, happy new year to everybody, and hope you’ve had a good start to the year. It’s already well into January.

SHN: Thank you. All right. Just a few things I’ll go over today. We approved a number of standards at the last GA. I just want to run through that. We also have some ideas of a new work item I wanted to bring to everybody’s attention. It’s more informative to give you an idea of what’s coming if you or your organization would like to participate. The new ECMA management. I’ve listed the TC39 chairs and editors. You can tell me if I was correct in my information, and of course the approval for the next June GA. First off, you see right there on the bottom on the page, if you’re attending FOSDEM in Brussels next week, we will be having an event to toast TC54 and the second edition of CycloneDX. You see the details there. Please register if you can. If you are already there, that would be great. It will be after the AboutCode workshop who are working on PURL. December GA, which just passed a month ago, we approved 13 standards, and some technical reports. It’s been a busy time for a number of TCs. I just want to highlight those for your awareness. Quite a few on the AI side, which is very good for ECMA. It’s the first ones we’ve done, and we will continue with more. you can access all these standards as per usual on our website. I also want to highlight that at the last GA, we approved the HLSL new TC. We talked about for many months, perhaps almost a year, and finally happened. We’re just setting up the final participation and delegates. Some of you may have been reached out by Chris from Microsoft to make you aware of where we’re starting and the meeting schedule. We hope by February, this will start, and Aki will be supporting together with myself the new technical committee as they form. This is also very good for ECMA that we have a new Project.

SHN: As you are aware from the last meeting in November, we had an error that was found and it has been corrected and I want to highlight you it has been correct on both Editions, 2024 and 25 of both ECMA262 and ECMA 402 with the correct alternative copyright notice. ECMA management for 2026, also in the December GA we voted for new management. I’ve listed our new management and our president is Tess from Apple and Jochen will continue as vice-president and congratulations Google will be our treasurer and then you see the executive committee. What is new on the executive committee is our two ordinary members Ayla from Huawei and Andrew from Bloomberg. The non-ordinary members remain as the year before. It is an active and I think a very good group of members participating.

For the TC chairs and editors, typically at the start 2026 year, TC39 confirms their chairs and editors. I have listed who I had from the past. If I made an error, I’d appreciate a correction. And it would be great if as a committee TC39 approves the chairs and editors and just confirms and as usual, one year process.

KG: I think we were going to talk more about that later, Rob. Did you—am I correct about that?

RPR: Yes, I have on the queue for that topic, yeah.

SHN: In 2026 approval will be coming up in June. And the GA schedule for June 29, June 30, we did have to make a change for the ExeCom meeting date. It’s moved up by three weeks to the 31st of March and 1st of April, so please take note of that. I had made an error in the slide deck that is loaded on GitHub. It’s probably by the end of this month you need to freeze your two standards. And assuming that you are moving forward with the 17th and 13th edition for approval at the June 29th GA. So just to make note of those dates.

SHN: And also to point out, June 29th, we will do something to celebrate Ecma, this is 65 years the organization has been active. We were not able to do anything for if 60th anniversary due to COVID, so there is something in planning for June. Probably in Geneva and we will bring it to everyone's attention once we have a bit of information. The Slides Annex has the usual information regarding the next meeting dates, relevant documents, the code of conduct already mentioned and rules on invited experts. If I just go down to the meeting dates, as I noted again, the ExeCom date changed, which is important for the approvals. The GA dates remain as they are. The dates of these meetings are set as everybody knows, and there’s a list of all the documents that have been worked on since the last GA, so if you would like to read anything, please reach out to chairs and we’ll be able to access all of the information. And I think that brings me almost to the end of my discussion. and I will stop sharing.There’s a slide reference, which is added to the agenda tool. It’s called ArkTS. ArkTS is a topic brought to my attention in my last trip to China in November. And they’re very interested in this new work item. It is of course important that any new work item that comes into ECMA has more than one participant. I wanted to talk about it with TC39, but the information I requested from Huawei did not arrive, and I have simply put their slide set, about five or six slides, as reference for every member and every person attending the TC39 to review. If the topic is of interest, I would appreciate your feedback. If there are any concerns on the topic, I’d also appreciate the feedback. Just reach out to myself and AKI via email, and perhaps at the March plenary, we may have more clear information on a scope and program of work, which may be something to talk about from an ECMA perspective.

SHN: Okay, thank you. That is the end of my presentation. I’m open for any questions.

RPR: Thank you, Samina. I’m on the queue to—in response to your slide on the chairs and the editors. You’re absolutely correct that we approved these each year and we elect new people as and when. We had intended to do that before this meeting, but that—as the chairs, I did not publish that request on the reflector, so that will be coming out very soon. And we will intend to do that election at the next meeting. That is the March meeting in New York. On that topic, it looks like the existing chairs plan to continue, so there is not a strict need for volunteers there, but people are always welcome to put themselves forward. On the editor side, there is an active need for volunteers. We are looking for 1.5 more editors. So one person as a—like, a full-time expectation, and not full-time, full-time, but a full editor role, whereas one person could be reduced hours. And that will all be made clear in a reflector posting.

SHN: Okay, great, thank you, Rob. I will then—we can update that slide and hear about it in March. Thank you.

RPR: Thank you. All right, any other questions or comments for Samina?

SHN: Okay, thank you very much, Rob. I just want to say, Aki, if you have any comments, please take the time right now while we still have our agenda item. Thank you.

AKI: I would really appreciate if many of you could take a look at that ArkTS slide deck and just get back to me in, you know, the next two months before the next plenary. I would love to hear feedback on whether or not this is something ECMA should be involved with or—and if so, in what way. Is this something we should try to make a standard or is this a technical report we should be trying to put together. Something like that. Please do take a look, everyone, and let me know your thoughts.

RPR: And where can people find the link to that slide deck in.

AKI: On the agenda.

RPR: On the agenda. I’m looking at it now. Yes, says reference material arc TS. Yeah. Okay, I just put that in the delegates Matrix.

AKI: Thank you. Also, if you’re going to FOSDEM, we’d like to see you.

### Speaker's Summary of Key Points

The Ecma General Assembly in December 2025 approved several updated standards, including ECMA‑74, ECMA‑119, ECMA‑424, and ECMA‑425, and a suite of new specifications, Package‑URL (PURL), Common Lifecycle Enumeration (CLE), Minimum Common Web API, and the multiple Natural Language Interaction Protocol (NLIP) standards and one technical report.

A new Technical Committee was approved on High‑Level Shading Language (HLSL), chartered under the Royalty‑Free Patent Policy and supported by contributors such as Microsoft, Meta, and Google.

The corrigendum was issued for ECMA‑262 and ECMA‑402 to update copyright notices.

The Ecma GA appointed its 2026 leadership, with Theresa O’Connor (Apple) as President and Jochen Friedrich (IBM) as both Vice‑President and ExeCom Chair, and Chris Wilson (Google) as Treasurer.

TC39’s 2026 chair group and editors to be confirmed, and the approval timeline for the ECMAScript 2026 editions (ECMA‑262 and ECMA‑402) was outlined, targeting GA approval in June 2026 following ExeCom review and mandatory opt‑out and publication periods.

Additional annex material highlights upcoming GA and ExeCom dates, recent TC39 and GA document releases, and reminders regarding Ecma’s Code of Conduct and the limited, exceptional use of Invited Experts.

## ECMA-262 Status Updates

Presenter: Kevin Gibbons (KG)

* [slides](https://docs.google.com/presentation/d/13yOJtg2RwMN5Ki2GfL6dfIjIqNL1nNn3lRW_yHr9LO0/edit)

RPR: Thank you so much, Samina and Aki. Next up, we have the ECMA262 status update. And that is with Kevin Gibbons.

KG: Yes. Give me one moment. Okay. Here we go. Oh, hello. And it is your usual editor’s update. First of 2026. And we’ve landed actually more normative changes than I was expecting in window over the holidays. We landed `iterator.concat`. We landed a bug fix, which was not something we discussed in plenary. This was just a case where we were miscalculating an index when you’re in the context arrays, you have to update the index by the element size and we were accidentally doing that twice, multiplying by the element size twice in one place, which is obviously wrong, so we just signed that as a bug fix. And then we had a normative PR that was approved a couple of meetings ago and now landed multiple engines, which was not calling single methods for regular ex values, and if you call a string literal.split, this no longer looks up `string.prototype.split` or whatever. Just to make it more robust. And then minor tweak to the module machinery so that projections happen in the same order that successful modular evaluations complete, these are observable with aureate of means. And finally a variable PR, which is adding `Array.fromAsync`. This was blocked on editorial work to that is to say built in async functions. Which I guess I’ll talk about in the editorial changes. So as of this pull request, we are now able to specify built-in async functions, which are just async function that are able to use the await spec macro in their steps. This is done with the same machinery that user-land async functions are. Of course, most engines do not choose to implement async functions in terms of await. Although, they can and some do. But the specification just gets radically more complicated if you’re not using the await macro. It’s possible to do the translation to steps that are purely synchronous and like counting for \[INAUDIBLE\] explicitly, and we felt this wasn’t of service to readers because the way that that is—that contracts machinery is going to be translated into engines is going to differ from the spec steps anyway, so we might as well choose to write it in the clearest way we can, even though that’s not necessarily being to translate directly into implementations, as nothing we do is going to translate directly into implementations and our first budget in function is array from async, which you’re welcome the to look at the implementation in that PR and think in your head about when it would look like to do without the use of the await macro and this I expect—will you understand immediately why it was worth supporting in async functions.

KG: Okay, and then finally, an editorial change to use abstract closures for Promise machinery. This is instead of having a separate algorithm for, for example, `Promise.all` resolve element functions. We now just do that as a basically an inline closure in the `Promise.call` algorithm at the `perform.call` algorithm. This is mostly for clarity, simplifies a couple of things because we are able to close over in spec steps some of the values that we need instead of needing to have internal slots on the function to keep check of that state. Yeah. One last meta point is that we added a GitHub action that uses get meta that pull from test that does type checking or one of the tools, but a tool from the—that does type checking on the ECMA source text. This tool is capable of recognizing a wide variety of patterns of the—the way we write the prose in the spec, and it now is capable of recognizing a sufficient variety that we felt that it was worth warding when you use praising, which is not recognized by ES meta, which is sort of definitionally phrasing, which is novel to the spec. There’s nothing wrong with doing this. So you shouldn’t treat this wording as something that you need to address, but if the thing that you are doing is something that is, like, relatively routines, just assigning the result of a call to an alias or something like checking the type of value, that sort of thing, it’s probably something that is done elsewhere in the spec, and, therefore, probably something that ES meta could recognize if it was written in a different form. And the general preference is to try to do things to—do similar things with similar phrasing. So if the thing that you are doing is something that you expect is done elsewhere and you get this warning, then this is just a recommendation that you go try to figure out what the typical phrasing for such a step is and do that instead. But, again, if you’re doing something like this example on the screen, for example, where it is not going to be precisely what’s done elsewhere, I don’t know if the one on the screen is a good example, anyway, if you’re doing something that is genuinely novel, writing a new data structure or something, you should feel free to ignore this one. It’s merely informative. Similar list of planned upcoming work. Although I did want to call out, I guess I didn’t highlight it, but we’ve had a long-term item to make internal methods within the spec more linkable, and Nicolo just submitted a wonderful PR to markup to meet internal methods. Egress abstract methods, so this is stuff like the has binding method on environment records, that sort of thing, to make those more linkable. This will require using a different form of the markup or a certain method, so if you are maintaining a proposal that uses internal methods, which I think is just the module machineries proposal, then you may need to make a change to the spec text when next you do a major version bump of ECMA markup. And that’s all that I had on my slides, and I do have a personal late breaking update, which is I will be leaving my job next month. So I will no longer be able to serve as editor, which is why we now need 1.5 additional editors or at least hopefully like to get more people participating in the editor group, because I will no longer be able to participate as editor. I expect you’ll still see me around on GitHub and it’s possible I will see about if someone is willing to sponsor me as invited expert so I can finish up some of the proposals I’ve been work on, but I will no longer be working for F5. You will be ably served by Michael and Rob. That’s all I got. Thanks very much.

RPR: Thank you, Kevin. There’s nothing on the queue. I will say thank you for sharing the news about you stepping the town down as an editor. And I think everybody here has, you know, significantly appreciated your work over many years in that position. So hopefully you find other ways of continuing to participate in the committee.

### Speaker's Summary of Key Points

* A small number of normative and editorial PRs have been landed. KG will be leaving his job and thus the committee in February.

## ECMA402 Status Updates

Presenter: Ben Allen (BAN)

RPR: Next up we have the ECMA402 status update from Ben Allen. Ben?

BAN: Am I audible? Yeah. So this is a very, very, very short status but update because both RGN and I have been busy with other projects since the last meeting. So we have no editorial changes. We do have a smaller normative change on the agenda that SFC will be presenting later on today. Unicode 17 added the Tolong Siki script, and the normative change that SFC will be discussing lets us add the numerals from that script to 402. And that is it.

RPR: Okay. Very brief, short and sweet update. Any questions for BAN?

Moving on then. Thank you, Ben. We have ECMA 404 status updates. Is CM there?

RPR: Okay. Does anyone else have an update for ECMA 404? Okay, we can only imagine what CM might have said, but until next time.

TG3, security. CDA?

## TG3: Security

Presenter: Chris de Almieda (CDA)

CDA: You know what I always say, so actually we haven’t had that many meetings since last plenary. It was the busy holiday period and then just some sparse agenda and lack of quorum on some occasion. But you know what we like to do, and that’s discuss security implications of new and ongoing proposals. So if this is something you are interested in, please join us weekly on Wednesdays at noon central time. Thank you.

RPR: Thank you for the warm invite. Thank you, CDA.

## TG4: Source Maps

Presenter: Nicolò Ribaudo (NRO)

RPR: On to source maps, TG4 with NRO.

NRO: Also no updates. And working on the range mapping and proposal case happening. We have one spec that’s probably going merged by the next meeting, and it’s the one solving the security ship was flagged by digi 1 when question first published the first iteration of the spec. If anybody was interested in that, please take a look. It’s pull request 211. And that’s it.

RPR: All right. Any questions for NRO? No. I think we’re good. Thank you, NRO.

## TG5: Experiments in Programming Language Standardization

Presenter: Mikhail Barash (MBH)

* [slides](https://docs.google.com/presentation/d/16D4iZyLdbGxolADupUnLPNGblENiIidWztpu29ccoDI/edit?usp=sharing)

RPR: And onwards to Mikhail, TG5, experiments and programming language standardization.

MBH: Can you hear me?

RPR: Yeah, we can hear you.

MBH: Yeah. Perfect. So I just had to reconnect because my browser didn’t allow me to share my screen. So, my screen is visible now, right?

RPR: Yeah, it says click to exit full screen, but I think we’re seeing a blurred pane in a very crisp browser.

MBH: Do you see the slides now?

MBH: Oh, I think there is some kind of delay. Yeah, short update from TG5. We continue with the monthly meetings. This month we with will be talking about mechanizing a fragment of the Temporal proposal. And the—

RPR: Sorry, Mikhail, I don’t know if you moved windows back, but the slides have now stopped displaying. I wonder if it’s a focus. Now it’s displayed.

MBH: This is very strange. Let me just…

RPR: So you could switch from showing desk top to showing tab. Maybe that’s the difference. That is clear. That’s better.

MBH: Yeah, perfect. So, this month, the meeting will be about our experience in using a theorem prover to mechanize the fragment of a Temporal proposal. And we will be continuing with monthly meetings every month, last Wednesday, 4 p.m., Central European time, so please join if you’re interested in that kind of research direction. And we are also planning TG5 workshops for the hybrid meetings this year. So far we only have the one in the Netherlands confirmed in May. We’re trying now to get a confirmation for the 113th plenary TG5 workshop in New York, but there’s no confirmation as of now. And that’s it.

RPR: Any questions for Mikhail? No? We should move on. Thank you, Mikhail.

MBH: Thanks.

## Updates from the CoC Committee

Presenter: Chris de Almeida (CDA)

RPR: Then the code of conduct committee. Chris?

CDA: Yeah. Nothing new. We have no new reports. I think it’s been quiet, which we like. So no real updates from us. As usual, if you’re interested in joining the code of conduct committee, please reach out to one of us. Thank you.

## Normative: Add 1 new numbering system "tols" for Unicode 17 #1035

Presenter: Shane Carr (SFC)

* [PR](https://github.com/tc39/ecma402/pull/1035)

RPR: Thank you. So our first normative PR, this is Shane with add one—excuse me, add one new numbering system tols for Unicode 17, PR number 1035.

SFC: All right. I’ll just share my tab here. There’s not a whole lot to show. So I can give a little bit of background, is that every year over the last five or six years, we’ve had a pull request to update this table. I’ll just open up the contents of the pull request. So we have this table, and this table has a list of all the numbering systems that we require that engines support. And we typically update this table every time Unicode or CLDR adds another numbering system. And in this release, there’s one new numbering system, which you can see here. So it’s—this list is a minimal list, engines are always allowed to support more than what’s in this list, but we like to keep this list up to date. We usually wait about three to four months after the corresponding ICU or CLDR release before updating the table just to give engines a little time to get their updates in. So that’s what happened here. You can see the notes from the TG2 meeting. We had feedback from—we had—this is probably just…

SFC: Yeah, so we got feedback from some of the implementers, including YSZ from Apple, who confirmed that it’s fine to start requiring this numbering system, because it’s an ICU78 and engine systems are now largely upgraded to ICU78. And that’s basically all I have to show. So we’re just seeking to have the TG1 approval to have the new table for—for updating the table to require the new numbering system.

RPR: You have DLM with support. DLM, do you want to speak?

DLM: Yeah, just say we don’t have any concerns about this. It seems fine.

RPR: All right. I guess are there any objections to this PR? No? Then I think we can say that this PR has consensus. Is there anything more, SFC?

SFC: That’s all the conclusion. I’ll write my summary in the notes.

RPR: Thank you so much for remembering the essential documentation that we ask every presenter to write, the summary and the conclusion. All right, thanks, congratulations.

### Conclusion

ECMA-402 Pull Request #1035 is approved by TC39-TG1.

### Speaker's Summary of Key Points

We have been updating the numbering system table on an annual basis. Support for the change has been vocalized by multiple engine implementers.

## Upsert for Stage 4

Presenter: Dan Minor (DLM)

* [proposal](https://github.com/tc39/proposal-upsert)
* [slides](https://docs.google.com/presentation/d/1PpQsFGM1V8miLf5Fp5AQO_VASP2WFlu2lM4CkKozrBo/edit?slide=id.g2fb628be09c_0_0#slide=id.g2fb628be09c_0_0)

RPR: So next up is our first proposal advancement. This is DLM with upsert for Stage 4.

DLM: Sorry, one moment. I’ll get the right window up for myself.

RPR: It looks a good slide. It looks like a map.

DLM: Yes, that’s perfect. Thank you. No, it’s my—it’s my first presentation on a new laptop. I’m happy that I got everything set up beforehand. Okay, so this morning I would like to talk about upsert for Stage 4. Quick reminder of the motivation. A common problem when we’re using a map is how to handle doing an update, if you’re not sure if the key is already in the map or the WeakMap. So obviously you can write code like this. That’s a little bit wordy. And perhaps not as efficient. So upserts proposed solution is to add two methods no that, the WeakMap prototype. One insert that will search for key in the map and return the associated value at present, otherwise insert the value argument and return back, and another version that is called commuted and that takes the callback function and the the exact same thing, except the value comes as a result of calling the callback function. So I believe this is now ready for Stage 4. So two compatible implementations which pass 262 test, so note Safari and Firefox. Safari has been shipping for a long time. Us more recently. And there’s also implementations in Porffor, Kiesel and Boa and V8. And we have sufficient field experience with shipping this in the field, and I also have a pull request that has sign off from the editors. With that, I ask for consensus for Stage 4.

RPR: All right. So do we have support or objections for Stage 4? I’m seeing two messages of support or three from Nicolo, Michael Ficarra, Olivia, Dmitry, Duncan, so we have lots of support.

DLM: Thank you.

RPR: Are there any objections? There’s no objections, so congratulations, Dan, you have Stage 4.

DLM: Thank you, everyone. Let me stop sharing.

RPR: You have to imagine the round of applause that everyone is making, but they’re all muted, so that’s the only reason you can’t hear it.

DLM: I’ll add conclusion and summary to the notes.

RPR: Thank you so much. All right. Great. That was very quick.

### Speaker's Summary of Key Points

* Safari and Firefox, as well as others have shipped implementations that pass test262.
* The specification pull request has been approved.

### Conclusion

Proposal Upsert has been approved for Stage 4.

## Temporal update and needs-consensus PRs

Presenter: Philip Chimento (PFC)

* [proposal](https://github.com/tc39/proposal-temporal)
* [slides](https://ptomato.name/talks/tc39-2026-01/)

PFC: (slide 1) Welcome, everybody, to this lovely remote meeting of TC39 where I’m going to present a status update and a couple of proposed changes to Temporal. My name is Philip Chimento, I’m a delegate for Igalia and we’re doing this work in partnership with Bloomberg.

PFC: (slide 2) So since the last time I can report that the test262 coverage has been expanded by quite a lot. We’ve noted where existing implementations failed these new tests and filed bugs. We’ve filed specific bugs for things that we uncovered using snapshot testing, for example, but of course, every implementation should also look at their own test262 failures. We have two implementations at pretty much 100% test conformance. This is an important milestone because it’s one of the prerequisites for Stage 4. I'll show a little bit later in a graph, how everybody’s doing. And then today in this presentation, I’ll be proposing two normative changes from the Temporal champions group, both of which are intended to eliminate surprise in edge cases. So we’ll see more later on.

PFC: (slide 3) So here is the graph that I promised. You can see the red solid bars. These are the percentage of the test262 test that are passed with the Temporal feature. And then the blue hatched bar is the percentage of test262 tests with the Intl Era/Month Code feature that each implementation passes. So you can see at the top here, we have V8 and SpiderMonkey within half a percentage point of 100%. And several others falling closely behind. For the first time in this graph I’ve added the Intl Era/Month Code bars as well. Note that the Temporal bars are excluding the Intl Era/Month Code tests. The Intl Era/Month Code bars are important because we want to move Intl Era/Month Code to stage 4 at the same time as Temporal. So that’s why I’m now tracking how close we are to having implementations that pass all of those tests as well.

PFC: (slide 4) So this is pretty exciting. It’s really cool to see implementations getting closer and closer. And of course, here we have some news. SpiderMonkey’s implementation was already unflagged on the web last year, and new for this time is V8’s implementation is also available unflagged on the web. So that’s another milestone in terms of prerequisites for Stage 4. So now we have two implementations shipping to users, and we also like to note that the GraalJS implementation is scheduled for unflagging in the next release, although, I couldn't find a specific date for that release. Other things relevant to a future Stage 4 request is that we are requesting Stage 3 for Intl Era/Month Code in this meeting. You’ll see that on the agenda. And then what remains for us to do is investigate the last conformance bugs in implementations. There’s still a small number of tests remaining in test262 staging, and we need to update and expand those as needed in order to move them to the main test corpus. There are still a couple of identified gaps in test coverage that need coverage, and then we should be ready to move Temporal to Stage 4 together with Intl Era/Month Code. So that’s approximately the shape of these plans.

PFC: (slide 5) I will move on to the changes that we’d like to propose. One of these was actually a really surprising bug. You can see this little code snippet here: if you have a PlainYearMonth instance and you subtract a month with overflow reject, under some conditions, you can just flat out get an error instead of the previous month, as you would expect. And this bug has actually been sitting in the spec text for over five years, so apparently this feature isn’t used much. We found it using the snapshot testing technique I talked about in the last meeting. This is actually caused by a bug in the addition and subtraction code for PlainYearMonth that existed to accommodate durations with days. Now, you might ask why would you subtract days from a PlainYearMonth and that is what my next slide is about, because we are actually going to recommend removing the feature of subtracting days from PlainYearMonths because apparently nobody is using it. It fixes the bug on the previous slide and reduces complexity.

PFC: (slide 6) This is kind of the philosophy we’re taking at this point in the champions group. If we have functionality that has a bug and the functionality doesn’t seem to be essential, then we consider removing it. That’s the change that we’re proposing, just, you know, make it so you can only add and subtract years and months from PlainYearMonth, and not any other unit. We did make the decision to recommend removing that functionality fairly late, so that PR was not available at the agenda deadline. If you did not have time to review it and for that reason, don’t want to lend your consensus, that’s totally understandable. In which case, we do have a fallback bug fix that keeps the functionality but specifically fixes the bug, that was present on the agenda at the agenda deadline. So if PR 3253 doesn’t gain consensus, we would like to propose PR 3208 to fix the bug.

PFC: (slide 7) The other change I wanted to talk about: there is a surprise in the toLocaleString method of the various Plain types. The surprise is that they are subject to the system's time zone, which is kind of surprising, because Plain types, their whole thing is not being subject to time zones. So this subsequently went unnoticed, because in most cases you won’t see a difference. You only notice it when there’s a daylight savings shift in the timezone. So this year in my locale, on March 8th, there will be a shift that skips 2 a.m., and so you get this unexpected bump to 3 a.m. when you format the object. And then, over here is the famous timezone that skipped a whole day when they crossed to the other side of the International Date Line and they skipped December 30th, 2011, so if you format this date and your computer is in that timezone, you’ll get a different day entirely. This was discovered by fabon and Adam, two community members who are each developing tools downstream of Temporal, and they’ve been really quite involved in testing and giving feedback on the proposal, which I’d like to shout out. We looked at this in the champions group. We all agreed Plain types are wall-clock times, they should not be subject to the formatter’s time zone. And there’s a fix for this in this pull request right here, PR 3246.

PFC: (slide 8) I wanted to make a quick summary of the changes that we’ll see in the next agenda item. They belong to a different proposal, but they may affect Temporal implementations. I’ll just note them here. There’s a change to which calendars Intl Era/Month Code must and may support. There’s a clarification of the behavior in date differences with calendars that have leap months. And there’s a PR that fixes the reference year for PlainMonthDay which so far is implementation defined. This PR defines it for lunisolar calendars, particularly the Chinese and Korean ones that have leap months that occur very rarely. So that’s what you’ll be able to look forward to in the next presentation. Have I got any questions on the queue?

DLM: So far no questions. Just some support for the normative changes. If you’d like to go to those?

PFC: Yes, please.

DLM: Sure. I’m first., yeah, I support normative changes, and yes, for first issue, I prefer removing some tracking days as opposed to matching behavior. And also on the queue, Linus, and has plus one for normative changes and \[INAUDIBLE\]

PFC: Thanks for. If there’s nothing else on the queue, I will move to request consensus for the pull request to make it so that you can only subtract years and months from PlainYearMonths and the pull request to make Plain types not consider the timezone when formatting.

DLM: Yeah, we’ve already heard some support. I guess we should make sure there’s no opposition. Okay, I think you have consensus.

PFC: All right, great. Thank you very much. I’ve put a summary for the notes, which I will copy into the notes, and that’s it for me. I guess we’re done a lot quicker than the time box.

DLM: Great. Thank you, Phil. And, yeah, so, Rob, if you’re there, I’ll hand it back to you. For Intl Era/Month Codes next.

### Speaker's Summary of Key Points

We outlined a path to stage 4 for the proposal and listed the blockers.

Two normative changes reached consensus, to eliminate surprising behaviour in:

* `Temporal.PlainYearMonth` subtraction
* toLocaleString methods of Temporal.Plain___ types.

We summarized the related changes happening in the Intl Era/Month Code proposal as it goes to stage 3.

### Conclusion

* PR [tc39/proposal-temporal#3253](https://github.com/tc39/proposal-temporal/pull/3253) reached consensus.
* The fallback PR [tc39/proposal-temporal#3208](https://github.com/tc39/proposal-temporal/pull/3208) was not needed and is withdrawn.
* PR [tc39/proposal-temporal#3246](https://github.com/tc39/proposal-temporal/pull/3246) reached consensus.

## Intl Era/Month Code for Stage 3

Presenter: Ben Allen (BAN)

* [slides](https://notes.igalia.com/p/era-monthcode-stage-3-111th-plenary#/)
* links:
  * [PR #99](https://github.com/tc39/proposal-intl-era-monthcode/pull/99)
  * [PR #101](https://github.com/tc39/proposal-intl-era-monthcode/pull/101)
  * [PR #102](https://github.com/tc39/proposal-intl-era-monthcode/pull/102)
  * [PR #108](https://github.com/tc39/proposal-intl-era-monthcode/pull/108))

BAN: About to share. I want to say thanks to Philip for all his work on EraMonthCode and for getting through the small normative changes. All right.

BAN: Okay. So this is Intl Era/Month Code for Stage 3 that we have some small normative changes before we ask for Stage 3. Okay. Just as an overview, it adds Temporal support for a number of non-8601 calendars. \[inaudible] has been a ECMAScript in practice. CLDR and \[inaudible]. Temporal adds calendar \[inaudible]. We would like to have that for non-ISO calendars. We don’t want to have to specify the arithmetic for every calendar, but have guardrails to behavior in order to avoid the urgencies. This is not overspecifying the behavior which ECMA, but within the script, minimizes the need for limitation divergence. Okay.

BAN: I have gone over this at the last meeting. Yes. We are adding descriptions of the supported calendars. We will see in one of the one remote PR, we have a specified list of the calendars instead of an open list. Error codes and aliases as standard CLDR. And the valid ranges of each calendar and years for every calendar. Okay.

BAN: And specifics on which support error and numbers. We are adding constraining behavior for when adding years in lunar solar calendars, which present difficulties. They don’t behave like solar calendars. Things like leap months, likewise algorithms for the difference between takes. And CLDR calendars. Okay.

BAN: So editorial changes. We have had a number of editorial changes related to the Stage 2.7 feedback. All of which we have adjusted. We have also clarified the behavior of the calendar. Essentially behavior is we don’t necessarily endorse this behavior, but like to match the behavior to avoid potential problems related to that. The story is that there was a calendar reform for this type of calendar in 1941. Before that date, the new year was in April. This switched to January to match the Gregorian calendar. All the relevant other systems, the JDK, and .NET treat the dates from that new year change. We are matching that behavior. Again, this is just a will to resist change and essentially going to do the thing we have been doing in the reason why is to match the behavior of other systems.

BAN: Okay. So then we have our small normative changes. This one is instituted to avoid bugs that already exist at other levels, the CLDR level. So the Japanese imperial regular calendar was reformed in the year 6 Meiji, which was 1873 in the Gregorian calendar. Before that date, Japan used a lunisolar calendar. The calendar reform changed it to a solar calendar that behaves as Gregorian, but with eras marked at the start of every new imperial reign. But the calendar wasn’t actually in use for the first five years of the calendar. Its reforms happened in 6 Meiji. So this PR changed the behavior of this calendar to indicate that dates before the calendar actually came into use are resolved as dates in the Gregorian calendar. This is to prevent problems with implementations treating dates in the old lunar solar. Previously we used a hybrid system, where after 1 Meiji we used the Japanese calendar from one system and after the Meiji we used the Gregorian calendar. Now we are doing the same thing. But starting at 6 Meiji to avoid the problems related to extending the Japanese empirical calendar from 6 Meiji back to 1 Meiji. Okay. So that is one of the normative changes that will be asking for consensus on.

BAN: The next is relatively more straightforward. There is a calendar, islamic-rgsa. This is for the Islamic calendar as implemented in Saudi Arabia. It was requested by Oracle, but not used for any purpose. This calendar and another similar calendar, Islamic calendar, are essentially all they do, they are invitations to make mistakes because they are not the right calendar to use. They have no usage in the web platform. And no country actually recognizes it. It is essentially a calendar that no one uses—no country uses it and also, nothing on the web uses it. So we are going to ignore it.

BAN: So this PR specifically causes the value of “ca” (calendar) to be removed from the options of the format when the value is islamic-rgsa. Which again results in requests to use this calendar being ignored. The calendar's only effect on the world is a potential footgun for developers because it should never be used. And since it should never be used, we want to ignore it. So another—that normative change.

BAN: This also while we were discussing this change in TG2, we decided to restrict the list of available calendars. So the previous wording is the list must include all calendars from the calendar type, the new wording is "the list must consist of all calendars from the calendar types table". There’s a precedent for making this a closed list. The list of units we use is closed to avoid interoperability problems. And calendars are more complex than units. And so previously, by having the open list, we were treating calendars as equivalent to new numbering systems, which are small and not complex, so allowing implementations to add ones beyond the ones that we list is fine. Calendars on the other hand are complex, there could be implementation differences, and so like with units, we want to make it a closed list.

BAN: Okay. This one (108) is one the more complex ones. We have gone back and forth in TG2 many times, until we could set up a solution. This is the date notice ISO 8601 calendar. They have to be a date that actually exists. Consisting of the month, the day, and a year in which that month and day occurred. So in the Gregorian calendar and ISO 8602, for example, 1972 is used as the reference year for PlainMonthDays, rather than 1970, because 1972 all the days in those calendars existed. The February 29 leap day exists in 1972, so if you want to choose a reference year, that gives real dates, for all dates you want to use, while in that case we have to give the 1972 because the leap day exists. But for some lunisolar calendars, the Chinese calendar, the Dangi calendar and the Islamic calendars, there is no year that contains all months and all month lengths. In the case of the calendars, there are leap months. Months that are inserted in some years. There’s also leap days, within leap months. And some of those leap months are very, very rare. For example, in the Chinese calendar, leap months in the winter almost never happen. It almost never happens, it almost never happens. The last time some of these occurred was well before the calendars in question were all standardized and some leap month and leap day combinations haven’t occurred before recorded history. And will not occur at any point in the foreseeable future. So we have these days that could hypothetically exist, but haven’t existed since before writing.

BAN: So this PR provides a table of reference years for all of the leap days and leap months said to have meaningly exist. This is the editorial month. These are the values for following the algorithm that is present within the spec text. The hard coded table reference here is for let’s say the non-problematic leap months and leap days. Instead of taking arbitrary picking reference years for those very rare leap months and leap days, we constrain as in, for adding or subtracting—if we are going to be landing in one of those days, we don’t—if we a plan month day that specifies one of those days, we want to reject it, when overflow is set to reject saying those months and days haven’t existed in a meaningful way either and clamp to the corresponding non-leap month or non-leap day when it’s constrained. Constraining to the non-leap version of that month. And that’s it for that one. And for leap days, within leap months, constraining to the last day of the month to match the behavior for constraining February 29th to February 28th.

BAN: Then we have a bugfix. So normative, normative, normative. Then we have a bugfix. In one of the things that we have been taking steps to do in int era month code is to whenever possible specify things in algorithm steps. A PR from mid-2025 replaced the prose algorithm for NonISODateSurpasses with steps and there were subtle changes within the Hebrew calendar. Just to be doing it. So yeah. The problems come up when—with the current spec text, the problems come up when attempting to determine the apt of time between certain combinations of days, some of which is—so, for example, the Chinese calendar, the amount of time from that day until this later day, in the non-leap month, is currently calculated as one year. That’s currently calculated according to the algorithm steps as introduced in 2025. This returns to the behavior that we had previously. So yeah. First, I would like to open up for discussion before I ask for consensus for these normative changes

RPR: There is one clarification on the islamic-rgsa topic from SFC

SFC: Yeah. I noted that the more precise language I used for the situation with RGSA, the specification for the calendar that was requested in the early 2010 was never implemented and because it was never implemented, it’s only a footgun for engines to ship it, because no one implements it as it was specified to have been implemented.

RPR: All right. The queue is empty.

BAN: All right. And then I would like to ask for consensus on the normative changes.

RPR: DLM supports all of the normative changes.

RPR: SFC?

SFC: Yeah. This pull request 111 is—has had an interesting discussion and has been almost exclusive between myself and PFC on which approach to take here, and both approaches have merits of their own that are different from each other. So there’s been a little bit of lack of engagement of which approach to take here, but the straw poll among the Temporal champions suggested that PFC’s approach has a more consistent behavior, or or what some would consider as a consistent behavior with what arithmetic work with out of range days of months should be applied to leap months as well. So that is the current state of this and why we would—why the champions sort of have a very, very weak preference for moving forward with the pull request. If anyone else did have a chance or was interested in looking at this and considering the different tradeoffs, that would be very much appreciated. But with the lack of that additional information, I think we are currently planning to move forward with this PR 111.

MF: Yeah. I was looking at the table in issue 96 that was showing a second ago, and like I was—I noticed that the current result column when you flip the operands, the result is not the negation of the result. And it seems like—in the second and fourth rows, I don’t know how to number them, but you can see the change happen now, where, like, if you flip the operands, the result is now the negation of the previous result, with the operands the other way around. Is it always the case that the result is just a negation, if you flip the operands? If so, that seems like an improvement.

SFC: Yeah. We absolutely can’t ever completely guarantee what is called… associativity? commutativity? I usually call it round-trippability. This makes one case more round-trippable, but it’s not a general property that we guarantee. The only property we guarantee is that if dateA—dateB is a certain duration, then A + the duration = B. Right? We have that relationship, but we don’t have the other relationship, which is, like, the negation of the formula. We can’t ever guarantee that. There’s two possible—if you have dates A and B, right? And you can do A—B or B—A, those might give you different results besides just the negation. And that’s something we have never been able to guarantee. And this property has been largely one of the topics—been discussed at great lengths among the Temporal champions and the presentations before about, like, how we can’t completely guarantee the property, but take steps to make it so the property applies in more scenarios than others, and that’s kind of the nature of this change.

MF: So this property holds in some cases where it did not previously hold. Are there any cases where the property does not hold in cases where it did?

SFC: No. This takes—it only takes cases where it didn’t hold and make it hold

MF: That sounds like an improvement to me.

PFC: I think SFC said what I was going to say. Maybe I could add an illustrative example. If you are computing the difference between January 31st and February 28th, then you can choose to return a result of one month because your January 31st + one month would land on February 31st, which doesn’t exist, so it clamps to February 28th. Or you could choose to return a result of 28 days. With the 28 days the result is more round-trippable because you didn’t clamp a non-existent date. That's analogous to what happens here. But by definition, you can’t get that in all cases.

RPR: Thank you, Philip. Ben? Do you want to go?

BAN: Yeah. So I would like to ask for consensus for these normative PRs

RPR: All right. I think we heard support already earlier from one person, at least. All right. And do we have any objections? Any objections to Intl Era/Month Code for Stage 3? No. We have no objections. So congratulations, Ben, you have Stage 3 for this proposal.

### Speaker's Summary of Key Points

* Several normative PRs submitted
  * Meiji start date
  * Islamic-rgsa removal
  * Behaviour for very rare leap months/days in certain calendars
* Ask for Stage 3

### Conclusion

* All PRs approved
* Stage 3 achieved

## Deferred re-exports update

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/tc39/proposal-deferred-reexports/)
* [slides](https://docs.google.com/presentation/d/1lrYTFTYrlhWTZ1tXdaMdJxcOWA7LU6AFkor339wNEkE/edit?slide=id.p#slide=id.p)

NRO: So this is an update about the deferred re-exports proposal. I am NRO, I work with Igalia and doing this together with Bloomberg.

NRO: So if you remember last plenary, we asked for consensus for Stage 2.7, but we couldn’t solve some issues that came up with the proposal. The two concerns were, one about the interaction with the namespace imports proposal, and the second one about spec complexity of having multiple spec methods to evaluate modules. We have been working with these problems. For the second one we have a pull request that starts to solve this problem, but this presentation focuses on the first one. Especially because after talking with delegates, since last time it was not super clear what the concern for the block was, we do not have a solution yet. So I must explain the problem today, and we have some ideas of solutions. And the main goal is to get some feedback from you all.

NRO: So there’s a performance cliff when using the two proposals together. So let’s see what that means.

NRO: Assume you have these examples. You have some app that imports some library. This library has a bunch of exports as the library entrypoint. And then when clicking the button it will use the `mainThing` imported from the library. So this graph, this chart on the right, it shows as the cost of doing—using the library. At startup, the initial phase of our app, we have to load the three different files. The library to dependencies and execute all of them. When we use the import defer proposal, if we change in our app, the import from importing the namespace of the library, rather than the whole thing, we get the deferred execution of the library. So we still load these three pieces, but then the execution of the whole library of Q	 the three files is happening later on, when we actually need it.

NRO: Another way we can improve the situation here if the library author starts using the export defer proposal. So our application is still using the simple import syntax, but now their library is using library export from their internal files. So what is—what happens now with the export deferral proposal, our app is causing the main library file to be loaded and executed. Now the utility files are just gone because they are defer exports and are not importing them so it’s if they are not there.

NRO: However, when we try to use both things together, you have one thing that improves performance, the second thing that improves performance, the intuitive thing is to put them together to get better performance. However, what happens here is that we are loading all of the library now. Even if they are just deferred execution of the part of it that we care about. And the reason we’re loading everything is because import defer forces you to use a namespace object, so that if evaluation happens, object property access and the two deferred exports of the library actually do need to be loaded, because they might be synchronously used later. So the only benefit we are getting here compared—benefit of export defer, and just using for defer, is that we are now skipping only the execution of the two internal files of the library. They have been executed, later we access those bindings.

NRO: So we have some benefits given to us by import defer, some by export defer, but put them together and we don’t get the union of the two benefits. It’s going up. It’s more performance than from performance cliff.

NRO: So we have some ideas for a solution. We are all just still talking through them. I guess there’s also the option of saying, well, actually, just don’t use them together, unless you actually measure the performance import of the things. Maybe it’s a good recommendation to just not apply performance without measuring them. But still, it would be great to solve this problem. So here are some of the ideas we have been talking about.

NRO: So one option, maybe—this is the first one we considered, to say, well, given the problem we cannot really make export defer the loading tree shaking. We go back to the origin of the proposal, , so it would not affect it anymore, but execution, which means that when using export defer, instead of getting the tiny bar, we get the loading of the three libraries, we execute the part we need. When we combine proposals we get the union of the benefits.

NRO: This is making the blue part smaller. And the last column has both its—making the blue part smaller and deferring its execution.

NRO: Second option here is to allow listing the names that we care about in namespace imports. The reason the import defer proposal uses namespaces, you have to use `import defer * as namespace` because it doesn’t need to import everything, but we need an object to install execution triggers on. So what we need is the object, not an object, but maybe we could extend the, like, object-based import syntax to allow specifying bindings you care about. The advantage of this is it also works with dynamic imports. Dynamic imports is another feature like export defer that forces you to use namespaces today because it can return only one thing—since it is a value, the one thing that can return is a namespace object. And this point was also brought up last time there was a question, I believe, from Mozilla, about an observation about how export defer doesn’t work super well with dynamic imports.

NRO: And here, there’s an example that also combines with import defer, but the first example is like the first line here. And by doing this, we have the second column is the benefits of import defer, the benefits of import a specific binding and using export defer, then we have the regression, where moving from the named `import {mainThing} export defer`, but then we can use the import defer specifically binding as some object together with export defer and we actually get the union of the benefits here. And the bottom right is the, like, best-case scenario we ever have. This is actually, given the shape of the library, it’s actually loading what it needs and executing what it needs when it needs it.

NRO: A third option we are talking about is, namespace imports, listing them, but listing the only non-deferred re-exports. So given that this is not explicitly naming anything, it doesn’t load the modules corresponding to the binding the. And import defer behaves the same. This means that if we have—the example here, we are getting the library and library has the deferred and non-deferred export, something will be in the temporal dead zone, at least until somebody else loaded this module. So it calls for something to be present.

NRO: And maybe we could have some other way, like some attribute to explicitly list what imports we care about. By default we only load the non-defer ones, but pretend there’s an import that is explicitly deferred in the binding, so you don’t need to load it.

NRO: And again, this would give us the optimal performance profile here, again with the caveat that some access will be adverse, because the corresponding module is not loaded, even though it’s technically reachable from JavaScript code.

NRO: So yeah. We don’t have a solution yet. I am hoping that we have some sort of consensus in the modules group by the next plenary. What would be useful now to get feedback from you all about, like, what is your first reaction about this possible direction for solution, if anything feels like very good or absolutely terrible? So we know better what to focus on.

DLM: The queue is currently empty.

NRO: Like, we do have preferences within the group. I think my personal preference is, if we have to change something in the proposal, it’s to allow you to list some bindings. I know that GB, who is also very active in modules, has a preference, which is Option 3, where we just skip loading some things because the name is not explicitly there. Okay.

DLM: Now we have a queue. DMM?

DMM: In general, I like Option 2. But I am curious what the interaction is between explicitly naming things and having, say, an import defer, and then those bindings not being present in the module? Do we get the errors when the module is loaded or as those individual names are accessed, or… ? what do we think the semantics would be there?

NRO: Details to be defined. But yes, there is going to be some validation here. I guess just like on the spot, I could say either way, I like to check the implementations. If you try to access namespace that are not listed, I expect to to just return undefined. I will expect this thing to be like an object, with the getters that are listed there. Do you have a preference here on how that should behave?

DMM: I am not sure I have got a preference at the moment. I am thinking about how we can replace some proprietary module stuff we had with something more standard, but we don’t have anything that is explicit. I could live with things being undefined, or with an attempt to access—or with an error being thrown when there they are resolved to not even be found. I think either would be fine. We might prefer some validation steps on the build side to make sure people are importing names that do exist, at least on internal modules.

NRO: Okay. Thank you. I will reach out to you to learn more about this, just to see if we can find some alignment here. GB?

GB: Yeah. I just wanted to briefly just confirm that I’ve been really happy with the way that this conversation has been going. It’s been a number of discussions over the past couple of months. And I really like where the discussion has ended up, as sort of a reframing almost towards optionality, that the key here is that this is an optionality scheme, and by making that a little bit more explicit and the intent a little bit more explicit, we can directly avoid the footgun. And I just—one of the things I will say briefly as an analogy, you know, for those familiar with the Rust and Cargo ecosystem, if you think of features in Cargo, by default, features aren’t necessarily enabled, there’s a default set of features. The idea you can pick the features I think is key to avoid the footgun which is all features being enabled by default. And moving towards solutions to that is great. That’s all I want to say.

NRO: Thank you. I see that the queue is empty now. Please, if you have any feedback, be free to join the matrix modules room or one of our meetings. They are every second Thursday that work for both Europe and Americas. So please come by, if you feel you might need to learn a bit more and have a little bit more opinion about the topic. And with these, I think I am done. Thank you all, again.

RPR: Thank you, Nicolo. Could you write down the summary.

NRO: Yeah.

RPR: For this, in the notes. Thank you.

### Speaker's Summary of Key Points

* Last time the proposal was blocked on two concerns: spec complexity and interaction with import defer. The champion, together with folks working on module harmony, are working on it. The presentation focuses on the problem, but drafted three solutions:

* **Option 1**: Make export defer only defer execution and not skip loading
* **Option 2**: Allow a `import defer { something, other } as ns from …` syntax to allow getting an object representing the module that doesn't force loading everything
* **Option 3**: Make namespace imports by default not load optional re-exports, making accessing them an error unless some other code causes it to be loaded.

### Conclusion

No conclusion

## ECMA404 Status Updates

Presenter: Chip Morningstar (CM)

RPR: All right. Great. So a surprise topic CM is back with ECMA404, and I think there might be a meaningful update.

CM: First of all, I need to apologize. I had this meeting entered in my calendar as being in Central Time. I was one time zone off, and so I was late. Surprise! Most meetings, my challenge is coming up with yet another way to say nothing has changed. And indeed, nothing has changed. The spec is essentially frozen. However, one thing with respect to the spec document itself: since it predates a lot of our more modern work flow, the spec itself has been in the form of a Microsoft Word document. And since the spec is unchanging there was no need to update it to ecmarkup. However, last month, in a fit of OCD that left me absolutely breathless with admiration, JHD produced an ecmarkup version of the spec document. So we now have that. I am not entirely sure what the right thing to do with that is, but it seems like it would be appropriate to publish it.

AKI: Give it to me

CM: JHD can give it to you, he knows where it is. I have gone through it, I have verified that not a single word or diagram of it is altered, and so I guess this would fall under the heading of an editorial change. But it’s there. So I just figured I should inject this into the process somehow. And also, extend my thanks to JHD and I would love it if everybody else would also.

RPR: Thank you, JHD.

RPR: Lots of emojis in the Google…

CM: That’s it.

RPR: ECMA404 continues to go from strength to strength.

### Speaker's Summary of Key Points

* There’s a ecmarkup version of the ECMA-404 spec. It is the same content.

## Withdraw function.sent

Presenter: Jordan Harband (JHD)

* [proposal](https://github.com/tc39/proposal-function.sent)

JHD: So the `function.sent` proposal. Was originally championed by AWB, many, many years ago. Hasn’t come back to committee since—I don’t know—2016 or ‘17 at the latest. I brought up withdrawing it in 2017, or ‘18, I think, and JHX decided he wanted to champion it. In the intervening time he has not brought it back and doesn’t anticipate to do that anymore. I think it should be marked withdrawn and I think that if anyone wants to champion it in the future, that could be pulled back. But I think it’s the correct signal that something that has no movement in a decade is withdrawn. Please let me know if there’s any objection to that.

RPR: So this has the—sorry. MM is on the queue.

RPR: MM? Would you like to speak?

MM: Yes. Can you hear me?

RPR: Yes

MM: I wanted to—since this thing has been idle for so long, has been turning over to the committee, I would remind people what problem it solves and get—it would be nice to get a quick reaction, if anybody feels any urgency with respect to that problem. I do not.

MM: The problem that it solves, or the problem that motivated it is that generators on the push side have a—sorry, generators used as push-pull have a fencepost problem. You have to see the generators with a first-call to next before you can pull anything from it, and that first call to next is—push-pull cases, often it doesn’t have anything to push, that the things to push earn reaction to the things pulled. For that case, what `function.sent` was supposed to do is somehow address that, and I don’t remember how. So if there is anybody that feels urgency with respect to that, I would like to hear about that. I would like to find that out.

MM: And in any case, I certainly do not object to withdrawing it.

RPR: Thank you.

JHD: Yeah, the hourglass is because I added it late, but, like, you know, if nobody is objecting for any reason, I doubt they will object for that reason.

RPR: CDA?

CDA: Yeah. This is kind of on the subject of the fact that it was put there late. And I—I think it’s probably fine, and anyway, it could come back for advancement, if it wanted to be resurrected by anybody. I was curious if JHX was contacted—also separately curious the last time JHX attended a meeting. But I was just wondering if there’s been any communication with JHX

JHD: He’s commented on Github for various issues, but now, since he—I believe he’s still an invited expert, I don’t know how often that’s recertificated. But yeah, he hasn’t brought any of his proposals in. He’s got active proposals, and I’m not trying to withdraw anyone’s proposals for being inactive. This particular one has been a priority for anyone for some time, it seems. Either ways, withdrawals are reversible. At the next meeting, if he wants to come back rechampion it. I want it to be an active proposal to the rest of the world.

CDA: Sure.

RPR: I guess we are betting that he probably doesn’t intend to bring it back. So this is the—a correct public signal to send it in. AKI has a comment on attendance.

AKI: Yes. I believe JHX has been at almost every recent meeting. Not today, but the most recent meeting. It’s not like he’s sort of vanished. You know

JHD: I don’t recall him participating, but—That’s fine.

AKI: I wanted to mention that. That’s all.

CDA: Yeah. And that’s why—that is what gave me pause with the late addition. Has JHX seen this? It’s better for people that are active in committee, to be at least in the loop with somebody withdrawing their proposals. I agree the stakes are low and all that.

MM: Yes. I really rather that JHX be consulted before the thing gets withdrawn. I think it sets a bad precedent to do otherwise. If I had something that was inactive for a while, and I missed—didn’t attend for a meeting or two, and it got withdrawn while I was absent, I am not sure I would notice, and it might be something I cared about, and yes, I can add it back in. But the signal that it sends might be a signal I didn’t want to send. It doesn’t cost much to contact him

JHD: Conditional withdrawal on his approval is something I am satisfied with. But given that—But, like, he became the champion, like, 7 or 8 years ago.

MM: I understand.

JHD: And didn’t bring it back at all. I think the signal is—the scenario you are talking about of an inadvertent absence is fine. But I will wait for his approval

MM: Yeah. I think we need to wait

JHD: That’s fine.

MM: Okay. Thank you.

JHD: Thanks.

RPR: NRO?

NRO: Yeah. This proposal came up somewhat recently when one of the AsyncContext calls, where—when using generators to possible context you might want, one to come when a generator first called and the other is the one coming from `next`. One will get the default, the one from the generator was called, and the other one will need the developer to manually pass it in. Like with the snapshot. And so one of the ideas just around there was that you could call `.next`, passing an `AsyncContext.Snapshot` and with `function.sent`. You need that, which yields you cannot the argument of the first next call. It was very marginal. There are ways around this. But just mentioning that it was at least talked about by some of the delegates not so long ago.

NRO: I do not object to withdrawing. I think it’s a nice proposal. But I would not champion it personally. And yes, if nobody is willing to champion it, that is a signal we should send to the community.

RPR: The queue is empty.

JHD: I will record the summary as conditional withdrawal, pending JHX’s approval. And yeah.

RPR: But yeah. I think—I think we have heard support for conditional withdrawal. So based on—

JHD: Obviously if anyone wants to champion and will work on it, consider my withdrawal request withdrawn. If it’s going to have no activity, then we should be accurate about that as well. I will put that in the summary, in the notes.

RPR: Okay. Are there any objections to this conditional withdrawal? No objection. So that’s what we go with.

Okay. Thank you.

### Speaker's Summary of Key Points

* No activity in over a decade
* A few delegates like the proposal but nobody wants to champion it
* Champion should approve before withdrawal

### Conclusion

* Conditionally withdrawn, pending JHX’s approval, and no other delegates stepping up to champion
* Later update: not withdrawn yet; JHX still interested.

## Withdrawing Intl.UnitFormat

Presenter: Chris de Almeida (CDA)

* [proposal](https://github.com/tc39/proposal-intl-unit-format)

RPR: And then, I think there is one—another withdrawal from Chris. We have got 5 minutes to cover.

CDA: I think this should be a little more straightforward just because we have a very clear signal here on the proposal repo that the proposal has been deprecated in favour of another one and this change was made by the champion. So I am asking the committee to formally approve the withdrawal of Intl.UnitFormat.

RPR: we have support from RBR and also support from DLM.

CDA: Just a quick question on that: where did the support from RBR come from? Is my TCQ bugged or–

RPR: That was in Google meet.

RPR: Any objections to withdrawing this proposal?

RPR: There are no objections.

RPR: Congratulations, CDA.

RPR: You have successfully withdrawn the proposal.

CDA: I should maybe just state for the record that this was originally, EAO was going to be coming to the committee with this. But he was not able to make this meeting. And so I had volunteered to propose it on his behalf. Thank you.

RPR: Okay. Then unless anyone has anything tiny, we are at the end of our agenda for the first session. We are three minutes early. It’s time for lunch. No matter where you are in the world and no matter what time zone. Obviously, we should resume at 1 p.m. eastern time. All right. Thanks, all.

### Speaker's Summary of Key Points

* Proposal deprecated by another active proposal, [`Intl.NumberFormat` Unified API](https://github.com/tc39/proposal-unified-intl-numberformat#i-units)
* Proposal champion already declared it deprecated on the GH readme

### Conclusion

* Proposal is withdrawn

## Import Sync for Stage 2

Presenter: Guy Bedford (GB)

* [proposal](https://tc39.es/proposal-import-sync/)
* [slides](https://docs.google.com/presentation/d/1TGOmmWkAWx9NkmXCgh_IaoW-4aDhhRQyRSow980EOgU/edit?slide=id.g3b508911f70_0_0#slide=id.g3b508911f70_0_0)

DLM: Welcome back, everyone. I’ll be facilitating this afternoon’s session. And I guess we’ll start with the ever popular call for notetakers. So great if we could have two people to help out with notes. PFC, you are volunteering? Thank you very much, both of you. That was quick and easy. So up next we have import sync for Stage 2. GB, you Ready?

GB: Yes, I’m just going to load up my slides quickly.

GB: Okay, can everyone see that?

DLM: Yeah, looks good.

GB: Great. Yeah, so this is a follow on to the import sync proposal, which was presented previously, I believe it was November 2024. And just to give the background again on this one, we have in run times like bun, it requires features like import mete require, and I believe require inside of ES modules, and no JS has a PR to support `import.meta.require` inside of no JS modules, and that was rejected on the grounds that we could potentially bring this discussion to TC39 and come up with a solution that doesn’t just work for common JS, but can work in a way that can work for all module systems, because in no JS, require can now require ES modules, require becomes a kind of generic importer, synchronous importer that can import both common JS and ES modules. So this is kind of the reality that 2 proposal is being created against.

GB: So we proposed import sync, and we got Stage 1 back in November. And since then there, hasn’t been any further progress. There was also some interest in another import API like `import.meta.sync`. Again, the perspective was that we should rather take this through TC39 than Winter TC, and if possible, come up with a solution. So all that to say there is demand for sync import functions. It’s still not clear how big the demand is. It’s vocal demand from a few as opposed to wide demand from many, but it’s the reality that non-specific and platform alternative are proliferating and, you know, there’s an effort to see these, and there is potentially an ecosystem risk here where non-standard approaches, which `import.meta.require` is becoming reigned in the ecosystem through, for instance, the buttons usage of that in a way that is not—it’s not part of the standard module system, and we now have key module system functionalities being stopgapped by the ecosystem because we didn’t support them. So the question—so that’s the background of the proposal, and the sort of motivation for these discussions, and the question for the committee do we want to see more interest from implementers and folks. It kind of sits in a little bit of a gray area today where I think creating those bridges is tricky, and so I think it’s important to be having these discussions.

GB: And, yeah, to go through the use cases, one use case is obtaining built-in modules, so your host modules are all modules you import, and if you want to get access to them synchronously, you can’t unless they’re static imports. So you could kind of have these pods that can also enable conditional loading where you can sort of do environment-specific built-in loading.

GB: Now, you know, Node.js has APIs to do that of course as well. Another use case is getting dependencies from the registry that have already been loaded, so in the browser, that would be the main kind of use case where you’re able to load something if it’s already been loaded. And so you can sort of have checking work flows for optional dependencies, is react loaded? Okay, we can do this special behavior for react or something like that. And there is also a new use case which comes up with some of the new modules harmony proposals, and that’s module expressions and module declaration do not have an asynchronous constraint on them like all other modules have, especially now that we carefully separated top-level awaits in technology wall system through the work in JS there, and the idea we have these synchronous execution pods with import defer that kind of build on that, and so the idea a these could be imported synchronously seems quite a straightforward one at this point, that this would also then potentially align with. So it’s not just stopgapping an existing ecosystem concern. There’s potentially also some new use cases that emerge.

GB: And so in terms of the actual specification approach and the technical details, all the environments already using sync resolution, so that’s not a problem. That would have been a problem. The import defer proposal has already specified synchronous evaluation in ECMA262, and so, you know, ten years ago, it wasn’t possible. It wouldn’t have been something, you know—wasn’t something that could really be a consideration, but based on the background of the static imports that we have that are, you know, fully integrated into the ecosystem at this point, it’s possible as an addition. And there are a couple of outstanding technical questions, which I’ll get through. But there’s no major known technical blockers. It’s all relatively straightforward. So the first thing we do is we have the not sync error where just the same—

DLM: Sorry, GB. Just point of order. Your Google view is hiding a bit of the slides There.

GB: I didn’t realize that was coming up. Is that better?

DLM: Yeah, that’s better. Thank you.

GB: Thanks. Yeah, so basically, a new host error is thrown if you try to sync import something that’s not available synchronously, when it’s not available synchronously, if it’s using top-level await. If it is currently still being fetched, and so hosts would decide when to throw this error, and could potentially give extra context. And obviously, there is a kind of divergence here between Node.js and browsers where Node.js can have things work where it uses sync FX, whereas browsers can’t. But with cases like module declarations and module expressions, both potentially can. And so this kind of thing gets to the risks. Do we risk, you know, hitting a known divergence at this stage of the game where, you know, there’s this kind of proliferation of import sync in ways that are harmful to code that runs in both browsers and Node.js or patterns that work in both patterns and Node.js. The nice thing about `import.sync` is it is ugly. Just on the sheer basis that it’s ugly and, you know, less ergonomic than a static import, we should be fine. But it’s worth thinking about. I’ve spoken a bit about browser server divergence and module expressions and declarations. If you’ve got a module expression that returns a function, you can, today, well, not today, but under the module expressions proposal, have an async function that imports that module and then use the function. So it’s just can we do the analogous thing in the synchronous case, and it sort of seems on the surface there shouldn’t be any reason why we should inhibit a synchronous work throw there. And this relates directly to the import now specification, which was—well, the import now functionality, which was recommended from the compartments proposal, I believe, which was also looking to have this feature available.

GB: And the same can apply for module declarations and multiple module declarations if all the dependencies are synchronously available. And even for dependency that are imported, as long as it’s in the registry, it can work in the browsers. In if case, you’ve got a module declaration that is importing from the network, but because we’ve already imported that or it could have been an import defer, it’s already available in the current module execution context synchronously, so it could work there as well.

GB: So there’s potentially some nice interactions there. When we discussed this back in November ‘24, one framing was import sync would only work for modules which are already linked and loaded, which is to say Node.js shouldn’t support loading new modules in modules with import sync, and we could explicitly deny that so be ensure browsers behave exactly the same way from an execution perspective. But this is highly restrictive to hosts. And I think should be seepage non-starter. So I think we should just avoid this approach entirely and just accept that Node.js and browsers will behave entirely differently here.

GB: Finally, the alternatives to this proposal, so you could have registry getter functions. You need a resolved ID with import attributes and also need the import attributes these days, so they get a little bit tricky. But you could have registry getters. The question is then what does it give you for thing that are in progress. You need kind of module progress records. The other thing is as I mentioned earlier, built-in specific loading APIs like Node.js does for the built-in use case, and Node.js did add support for get built-in module in the process label exactly because of this problem. So every run time ends up needing to have its own get built in module function on every single host, which, you know, seems like something we should be able to have a solution for in TC39. But, yeah, if we don’t do import sync, we can continue to develop these alternatives and defer an optional imports functionality to solve these lazy execution case, and the only gap we’re really left request, you know, if we do the registry getter and the built-in module getter and all the lazy gettersers is the full lazy loading in server side applications and then potentiality module declarations and module expression synchronous cases, so we can kind of try to wiggle down the use cases is the other approach if we don’t want to move forward with this, is just keep tackling it from the edges and see where we end up.

GB: Outstanding semantics, if you have two import syncs, you can get a deadlock. We actually do have multiple deadlock systems at 2 moment, so import defer is also deadlocking. And top-level await is also deadlocking. So it’s not a problem that’s unique to import sync. But it is something we need to think about.

GB: Another outstanding question is the source and defer phases. So just because you can import sync, you know, why could you not import sync into other phases when it’s supported or other use cases for that? Well, we haven’t assessed that too deeply from a use case perspective yet. I think a lot of the use cases for source and defer are based on network loading, so we need to think about that and if that’s something we want to decide on. I’m hopeful we can treat that as a Stage 2.7 question. But if we want to decide that for Stage 2, that can also determine how we think about progression.

GB: So the current status, the spec is written. There’s one major to-do, but it’s mostly just on the loading side, so it’s just kind of a spec refactoring wiring, but not kind of a technical issue. The main technical parts are written. The semantics are all defined down to the two points I mentioned. And as I said, from an implementer perspective, it’s clear that server run time is wanted and it’s something we could support at cloud flare, and it’s still unclear if what the browser implementer interest is at this point, though, as well. So it would be good to hear from browser implementers as well, on this proposal. I guess I should have put discussion first, but, yeah, discussion and then we can do a Stage 2.

DLM: Okay. First up we have JHD.

JHD: Does this work in scripts?

GB: That is a good question.

JHD: So that I’m being direct, dynamic import also works in scripts, and I think this should too—and if there’s a reason it can’t, then I’m concerned about advancing it.

GB: That’s a—that’s a great point, and, yeah, I think that sounds sensible.

DLM: Next LVU.

LVU: I just wanted to express support. If I’m—if I understand this correctly, this seems great for handling optional dependencies, which is something I personally need and I believe is a common need, and the current work we have is not great. Basically, if module X is loaded, that’s the sophisticated thing use it, but you don’t always want to include it as a dependency, and if it’s not loaded, just do a simpler thing. So, yeah, thumbs up.

GB: Yeah, on the optional, it would be a try catch around the import sync, which is maybe not syntactically the nicest thing. If you were in the browser, so, yeah, I wonder if that would still meet your requirements for the use case.

LVU: Oh, it’s still better than what we have right now. I was under the impression it would just return undefined if it happens to not be loaded.

GB: Sorry, I can’t see the queue. But—

DLM: I’m next. I’ll go. Just you mentioned implementer interest in the server side. I wonder if you’ve had any commitments from node or bun that they would switch to this.

GB: Node would definitely adopt this. I have not reached out to bun. That would be worthwhile.

DLM: Thank you.

DLM: LVU.

LVU: I was wondering if there’s a better way we could handle deadlocks, like, just do some sort of cycle detection, throw, return undefined, whatever, anything other than deadlock seems better.

GB: That is—that was actually one of the concerns that James Snell raised, and that is one of the things that we will be looking at for Stage 2.7. So to be clear about, like, the staging, Stage 2 is not a commitment to progress the proposal to Stage 2.7. Obviously, but it kind of makes it clear that we’re seriously considering this at TC39. But,, yeah, deadlocks would be something we would work through and potentially determine if something could be done there or whether we want to even just have stronger host implementation advice around that.

DLM: Next Kevin.

KG: Yeah, in feels a lot like synchronously unwrapping the promise returned by dynamic import, which is a thing that people, like—the ability to synchronously unwrap promises is something people ask for and indeed very useful in many scenarios. I guess I am personally more comfortable with this proposal than a general promise and unwrapping mechanism. However, I would be more comfortable still if we could articulate what general rule allows unwrapping this particular kind of promise or distinguishes this from unwrapping promises and doesn’t allow unwrapping promises in general.

GB: Yes. So this is—you know, the motivation is a function coloring problem, and what makes this function coloring problem distinct from all the others, and that’s a good question. But I think one answer is that we already do the unwrapping, because import defer does synchronous evaluation. So that ship has already sailed. Well, it doesn’t do network unwrapping, but it does the evaluation unwrapping.

KG: That’s fair. I am a little hesitant to accept arguments of the form, like, we are doing this one thing, if you look at it the right way in a certain obscure light using that feature that is not going to be as widely used as the new thing we are proposing. I would feel better if there was a different answer.

GB: Yeah, I think, you know, in terms of the semantics, you know, this is—synchronous module evaluation, I think, is something that this—the question is, you know, when you think about the use cases of obtaining a built-in, getting a module from the registry, and executing a module that’s already compiled and available, you know, all of those things are naturally synchronous operations, which we do not expose as asynchronous operations today.

KG: Okay. That’s fair. So perhaps the answer is you shouldn’t think of this as unwrapping a promise, you should think of this as some others—like, just exposing a part of the module machinery which was already synchronous?

GB: Exactly. And the host loading algorithm in ECMA262 that NRO refactored is designed to allow a synchronous operation in a callback mechanism so that that’s actually the to-do, that refactoring to properly align request that. So this is not just taking a promise path and simplifying it, the spec is actually written in a way that it is not creating the promises in the first place.

KG: Okay, so does that imply that you cannot do a synchronous import of a module which has a top-level await, even if that top-level await has already settled?

GB: The—so the import defer had to deal with this problem, and the way that import defer does it is it does just take the promise and unwrap it. I would like to refactor that code path in import sync well. I have not. For now, I’m just building on that same code path. I would like to refactor that, or if NRO wants to refactor it separately to avoid the promise creation entirely when we don’t have to do, what we would probably do is keep the wrapping in the case where you have an async module and do the unwrap in one that specific case. Actually, with don’t need to do an unwrap there, because the namespace is already available, I think. It’s a short exit path on the evaluation function. And the error is also cached on the module record object, if my memory is serving me correctly. But I would need to verify. That’s good follow-up. Would your feedback there be you would prefer to avoid promise unwrapping in general in the spec?

KG: No, this isn’t about, like, how it is editorially specified. It’s just about what things show up for users.

GB: Okay.

KG: It was a genuine question about, like—I had thought that perhaps an implication of your previous statement was that this wouldn’t work for async modules because they genuinely require the promise machinery. But if that’s not the case, that answered my question. It was just a question.

GB: Okay, yeah. So that is what’s done today for import defer. It does—Nicolo could potentially clarify. I haven’t checked it recently, but I believe it does just say if the promise is already resolved.

NRO: Yeah. Yeah, I’m here on the queue for that. So if the module—if the async module is already awaited, the import defer allows synchronous reading its value. It is already possible, you know, without import every to synchronously run some code right before and after getting the value of an already available sync module, because an already synced module already behaves 100% like synchronous module, so if you have, like, a kind of like a sandwich of train parts where the middle one is already evaluated async module, the—like, third import will run without—like, will run after the value of the second one is available and can, like, reach into its value. I can share an example on Matrix to clarify.

DLM: Okay, we have about five minutes left. PFC is next in the queue.

PFC: I can share another use case that I’ve run into that people have requested from the JavaScript interpreter that’s embedded in the GNOME desktop. People really want synchronous imports at interactive evaluation prompts. I looked into whether we could implement this, and it’s been a while, so I may not be remembering this entirely correctly, but from memory, I looked at how the Node.js interactive prompt does it and I looked at how Firefox dev tools does it. I believe both of them embed a copy of Babel, parse the user input, look for import statements, and then automatically rewrite those to a dynamic import and await the promise, et cetera. And so it’s actually really quite heavyweight for something that’s just an operation that users apparently want to do pretty often at interactive prompts. I wouldn’t say this is the killer application for import sync, but it would be quite handy for interactive prompts.

DLM: Next up is DMM.

DMM: Yeah, I think I’ve got a similar sort of thing to a lot of people, where predominantly work on the service side, the import operations are inherently synchronous. We are trying to move things in modules, but existing users are often synchronous scripts and don’t want to parse all of that machinery to change, and at the moment, we’re using a hack around things that looks like require esm in node. So having something that is well specified and standardized would be extremely helpful in this.

DLM: Okay, and I’m next on the queue. So you asked for implementer feedback from browsers. So our general sentiment is, like I said in my mess, it’s just adding complexity to an already complex system, so I don’t think, and I asked some people who are working directly on our module system, and the general idea is, yeah, this feels like it’s adding complexity. We’re not going to block it by any means, but I guess we’re not terribly excited about having to implement it, and I notice these concerns were brought up by SYG the first time this was brought up, and I think he’s on the queue after me as well. So he has a plus one in the message. And I will stop so Olivier can speak.

OFR: Yeah, I think definitely plus one that. I’m actually on the queue for a question. I’m not sure if I fully understand it. It was brought up should it work in script, and also if I looked at the spec text, there was even a note where it would say something, like, okay, you can use import sync in the on click handler, I think, or something. And I really didn’t understand how this would work in the browser because it’s pretty much racy when that module will be available and when that import sync in the on script handler would then, yeah, resolve or throw an error. So that seems quite strange ergonomics to me, and I couldn’t think of a way you could synchronize this and make sure the script is executed after the module is loaded. I think it would not be possible, but maybe there is a way, so, yeah.

GB: Yeah, so in the browser, basically what you’re referring to is the dynamic import in a script. That hint is specifically for normal dynamic imports. I will check the spec. I’m trying to see if it’s—if I changed that script hint in the spec text to be an import sync hint. No, it’s the same. So the button example is an example of host load imported module in the existing spec today for dynamic import, and that’s not changing. So that doesn’t say import sync in the spec. The HTML onClick example. That’s dynamic import. But import sync would behave the same, but basically with defer, you have the ability to import a module that is not executed. So it would go into the registry, get the module record, if there’s no module record in the registry or if it has to go to the network, it would throw this error that it’s month available synchronously. But if it is in the registry and it is available, not executed in the registry and it’s dependencies on ISG and none of them can wait, it can do a lazy execution so it can work with import defer. And then we have this use case for module expressions and module declarations for executing module sources, which seems to lead quite nicely into your next question. But let’s first clarify if that answers your question, OFR.

OFR: Yeah, I’m not sure. So would we then block and wait for it to be evaluated?

\[crosstalk]

GB: There’s no blocking semantics.

OFR: What if the request is in flight?

GB: It will throw and say it’s not available. And this is the same thing require does in Node.js. If you require a module and it has top-level await, this will say it’s top level away. And I think if it’s in flight, I think the same thing applies for Node work.

OFR: There would not be a way of, like, expressing I want this piece of code executed once? Well, I guess that would be normal require, I want this piece code executed once, the module is available.

GB: Right. That—so the way to queue on the module being available for synchronous execution is import defer. You would do a dynamic import defer, and once it’s available, then you can do an import sync. In a sense, import sync is just a way to execute a defer module that has no exports, in a sense, or to just touch that defer module basically. And then these other use cases of module expressions and module diversions, and if we ever had built-in modules in browsers, it would support that as well, obviously.

DLM: Okay. NRO is on the queue. First I’m just going to say that we’re actually over the time box, and since there’s an under flow this afternoon, I think it’s worth continuing this discussion, so you can ask for advancement.

GB: That would be great. I think we could maybe fit this in an extra ten minutes, if that’s possible.

DLM: That sounds good to me.

GB: Thank you.

DLM: NRO.

NRO: Just one question, in browsers, there is link for module preload, and marker like start preloading something. So I’m not totally about this, how it works in the browser label, but I would expect, like, rather than kind of abusing defer for this in browsers, you would allow the browsers to put out a model with model row pre load and then it’s in the cache and you it’s in the cache and you can run import sync on it.

GB: I would need to check if there’s a load event—I don’t think there’s a preload load event that you could do that on. So it wouldn’t be something reliable without some kind of notification, I think.

DLM: KM.

KM: I guess maybe I missed this, but I think it wasn’t covered, and it just feels, I guess, in some ways like a simpler to understand design, to me anyway, that, like, you would—this API would take a source module, source-based module you get from whatever mechanism and synchronously, since that sort of side steps the issue of is this thing loaded. Obviously that pushes the problem downstream, and in the browser, you still need to know your thing is loaded, but at least you have a direct dependency rather than this implicit dependency on some external resolution system having finished something opaquely to you. It just feels to me like the Legos would fit better in that sense. And then I think it feels also probably easier at the—to provide—maybe it would be—it would seem easier to me to have node specific or other APIs that are like fetch they ministry this node face module synchronously from disc in mode that is not part of the web browser specification, but is part of modes, and node that has a way to do this synchronously and everyone is happy, and on the web, you have to figure out how to await your promise to get the source module. Obviously that creates a dependency on source modules, which you may not want, and that’s fair. I’m just curious if it’s been thought. Maybe I missed this.

GB: Unfortunately, source modules don’t solve this, because when you obtain a source module for JavaScript, as phase imports proposal, it does not also obtain its dependencies from the network, so that’s one of the key features of the source phase, is that it is not dependency fetching. And so if you have a source phase representation of an object, you cannot synchronously import it because they’re still network work to do because its dependencies resolutions nor not yet determined. What you’re saying about a handle, rare flying this, is exactly what he did with import defer, right? So import defer is that handle for a synchronous evaluation of an instance that will do all the work to make sure it’s synchronously available, and that’s that feature today. I think the thing is even with that, we haven’t solved these outstanding use cases that the ecosystem needs to solve. And if we don’t solve those use cases, they will just—they will be solved, but just not by us, right?

DLM: Yeah, CZW in the queue.

CZW: Another point was mentioning about synchronously importing module source object, is that there’s no way in the current spec that allowing to evaluate an ESM module source object. So importing a source phase object does not enable the use cases that import sync enables at the current spec features.

GB: So import sync would also work for the source phase, as a synchronous evaluator in the same way that import can work for the source phase. I guess is the point that there isn’t currently asynchronous evaluation of the source phase? Sorry, I’m just trying to summarize.

CZW: My point is that we don’t have a way to synchronously evaluate an ESM module source object in the current language.

GB: Yeah. So the—that framing would also apply to the module expressions and module declarations example, where we’re currently proposing that the representation of module declarations and module expressions is the source phase, and under that representation, import sync would be able to synchronously execute source phase, yeah.

DLM: Next we have NRO.

NRO: Yes. It was mentioned multiple times that it would be like the behavior for Node and the behavior for browsers. In browsers, in web workers, we already have import script, which is a synchronous function that loads and executes a script, because workers can afford to block because of a thread. So maybe the distinction that the web integration of this browser makes should not be browser versus Node, but should be main thread versus everything elsewhere everything else can probably defer to block.

DLM: Okay. And that’s the queue. We’re almost at the extended time box. Guy, would you like to ask for consensus for Stage 2?

GB: Yeah, sure, if I can just, you know, briefly caveat the request for Stage 2 and just say that there are no guarantees that this proposal moves forward at ECMA262 and we are not looking to come back for Stage 2.7 in a hurry here. We’re looking to gather feedback from the ecosystem and demonstrate to the ecosystem that there’s a commitment from TC39 to continue to see progression of this discussion. So any Stage 2.7 follow-up would be based on strong implementer feedback. It would be based on working through the semantic concerns raised, and with clear implementation intent so that approval for Stage 2 is by no means getting us on the final straight for 2.7, but merely demonstrating a commitment to the proposal discussion at TC39. Okay, so with that, I would like to ask for stage 2.

DLM: I believe we heard some support earlier, but if anyone would like to reiterate that support now, that would be helpful for notes. LVU is one. And DMM as well supports Stage 2. Does anyone have any concerns or, like, concerns for Stage 2? CZW is also plus 2. And I guess we should ask for reviewers. I don’t know if we do that now or do it offline?

GB: Yes, please. Reviewers would be great if you could let me know now or separately.

DLM: There’s also plus one from ZB, and he doesn’t have access to TCQ at the Moment.

GB: Otherwise I’ll nominate a reviewer.

DLM: Any volunteers? NRO is volunteering. We need more than one? I can’t remember.

GB: It would be nice to have more than one, but we can follow up on it as well.

DLM: Yeah, I guess, yeah, we probably shouldn’t take more time with this. Congratulations, thank you.

### Speaker's Summary of Key Points

* `Import.sync` is feasible and solves and ecosystem gap.
* Any Stage 2.7 will not be rushed but be based on clear implementer support, resolving semantic questions around deadlocks and other phases, and with strong motivating use cases.
* While other solutions may yet be found, ensuring we continue to develop on this proposal demonstrates a commitment to ensuring standard solutions to the problem of synchronous module evaluation and registry lookups.

### Conclusion

* Stage 2 obtained, with Stage 2.7 criteria as outlined

## Error option limit for stage 1

Presenter: Ruben Bridgewater (RBR)

* [proposal](https://github.com/BridgeAR/error-limit-option)
* [slides]()

RBR: All right. So like since we recently had the proposal for the stack proposal, I sought to also look more into improving errors and there is also the ongoing effort, for example, error stack trace, captureStackTrace, about if that should be an API across, and the platforms or not, and since I don’t believe so, I looked at which APIs do exist in V8 that are specific to V8 at the moment, and where we could instead standardize on something that provides more of how users are effectively using these APIs and to have a better experience overall, because, like, otherwise removal is also not really an option.

RBR: And one of these is an about alternative for `Error.stackTraceLimit`, which limits stack frames to an upper bound. Now, I learned in Japan that we actually don’t always have a concrete number in all of the engines, so what stack frame effectively stands for is something that we would still have to define nearer, but I hope that’s not for Stage 1, but more for a later stage where we can explore more of the problem space in detail.

RBR: So my proposal is effectively about adding to the new options bag, which we have anyways with the error cause property, and to add a limit to an individual error, because most of the times whenever stack trace limit is used, which would look like, for example, here, it’s—well, it is a global level where any following error would now have that upper bound. And, like, this can be error prone in case there’s an error thrown in between, for example, and you just want to change for an individual error, the limit, and now it’s just globally set forever. Because it’s not reset anymore, so, like, the reset is gone from a problem, and In most cases where I have seen this API being used, it is always about a specific error. Sometimes it’s used for removing all stack frames, which is a relatively coming use case, so that the performance is not ever needed to calculate all the stack frames. And also, like, sometimes only the 1, 2, 3 first frames, because you need, like, where—in what pile was the error originally created, but nothing else. So—and these are common cases, and that’s like for limiting it, but sometimes you also want to have a long stack trace, where it’s better for debuggability, and you can also increase that. And it’s something that handling from an implementer’s perspective, it’s often much better forking the it on a specific error where you really care about I need to have all the information when this particular one happens, versus having it on a global scale. Does that require `Error.stackTraceLimit` completely? No, because of that partial use case for sometimes still having the wish for changing the global limit completely, especially for longer stack traces. But for the performance case, it’s actually pretty much solved completely, and that is as far as I can tell, from code that I’ve seen, more than 90% of all use cases of this API.

RBR: So like I believe, this very simple and very narrow suggestion solves most of what the users actually care for when using it, and it has a nice usability thing by just adding that simple option, because that is something everyone would understand. Not everyone knows `Error.stackTraceLimit` when they are working in a browser or node or a different environment where V8 is being used. And that’s pretty much it. I mean, in this case, I believe the proposal is so simple that I don’t know how many questions there are or if there’s nothing else for me to go into in more detail. Please feel free to ask.

DLM: Okay, first up in the queue we have NRO.

NRO: Yeah. So I support this proposal. I think it is useful. I especially when working—I guess when working in Node, because it’s the only place where I can do it, but it’s very common for me to set the temporary limit for some error and then reset the limit. There are two main ways in which I use this V8 API. And one is just global to infinity when I’m trying to debug something, and I—and it’s great that I can globally override that as I’m debugging, too. Libraries that make this trace too short are annoying. They don’t need this proposal to make it short. They already do it today. They just do string manipulation or get the error message and just log to STDERR and logging the trace, so this proposal is probably not going to make things worse, and I just want to point out that we should not encourage user style patterns. And like I said this proposal is useful on its own.

RBR: One thing I also didn’t mention is, like, the precedence order, which also discussed with OFR in Japan, and in this case, the local limit would always win over the global Limit.

NRO: \[inaudible] would be like the higher one. I don’t know yet, but this is not something to decide for Stage 1.

RBR: Yes, correct.

NRO: And I also have another topic here, the scope of this proposal. You mentioned, like, defining exactly what it means to have N stack frames. I would actually recommend against doing that, unfortunately. Defining what is actually there has been historically incredibly difficult opinion for us. There is a proposal that tries to focus on that. And as much as I dislike this, what I would recommend is we define that there is this property and this object, and there are constructors in this property, and maybe cast it to a number, and then do nothing with it. And if actually something from define happens with it, because the contents of the stack traces are to the implementation defined. We already do something similar for the micro wai proposal, where there’s some semantic that gets a number and there’s nothing with that number, because it’s meant to disappear or something. I would recommend doing the same thing here.

RBR: Yeah, in this case, I already put in here that defining the stack frame, I didn’t phrase it right. I see that now. A stack frame is implementation defined. That’s how it should say. Because it is so difficult, so for me, that’s totally fine that it’s up to the implementers to say what is the frame or what not. I think that’s okay. Of course, it would be good to get some feedback from implementers about it in this case. Maybe DLM, OFR, I don’t know.

DLM: Next is SHS.

SHS: Yeah, I just wanted to ask, the kind of old style version of you set the error stack trace limit temporarily, do some things and then set it back would cover when the VM is actually constructing the errors and throwing them, whereas if you’re doing this, you only get user constructed errors covered?

RBR: Yes.

SHS: So I just—you know, is there discussion about that, or is that something that would be a loss if we are to switch to this kind of pattern?

RBR: In this case, it’s just a different thing, right? Because, like, when you implement something, you sometimes know you definitely only care about a specific frame, and that is maybe, like, one or two methods away. Or, and maybe you don’t care at all about some or you, you know, users should always see the whole stack frame. And that’s why this is used for programmatic errors in a library, instead of for programmer errors that we could runs into which would fall back to the global limit.

SHS: All right.

DLM: I’m next on the queue, so my question is about the global error stack trace limit that’s currently in V8. I believe it’s also in JavaScriptCore, and I guess sort-question question, does it realistic to believe that V8 could ever stop shipping this? And then a related concern is if it’s already in V8 and JSC, it might be a matter of time before we have to add it because of some web compatibility reasons. Yeah, I guess I’d like to hear, you know, is it possible that this could be a replacement for that, and if not, should we maybe standardize the global version and say please don’t use this so at least it’s part of the language?

RBR: I’m not V8, but to answer your question from my perspective, I don’t believe we can remove it. I do believe it will replace roughly 90% of all the usage of this API at the moment. So it will significantly drop, and the people who do use it will have a way better user experience. Do I believe we need to standardize the global one as well? Maybe, but on the other hand, what I thought about is, and let’s start with this one as—and like, addressing the big bunch of the actual use case of how this API is currently used in the wild, and then sitting down to—and maybe the solution, yes, we do add that global API as well in addition, but maybe we find another one for the global one as well.

DLM: Sure. Okay, thank you. Next up is MM.

MM: Hi. I realize that everything I’m about to say about this proposal actually applies to both this proposal and your next one, and I just wanted to mention that and then I’ll postpone all of my questions to the QA on the next one, but they’ll apply to both proposals. That’s it.

DLM: Okay. KM’s on the queue.

KM: Yeah, I guess this was actually to your comment, DLM. I guess I don’t—maybe there is something you were thinking of, but it doesn’t seem obvious to me how this proposal would change compatibility or, like, for `Error.stackTraceLimit`. Because the—it doesn’t seem like it would increase the usage of that API, if people wanted to use that API, they’re probably already using that API. And, like, adopting this would either be in addition to that or, like, replacing that. And in either case, I think it wouldn’t—it doesn’t seem obvious that it would change it. Maybe there’s some other case you’re thinking of that I’m not thinking of.

DLM: No, it just occurred to me that I’m in a situation of trying to capture error stack trace, and this one could end up being in a similar situation where we end up with people—we prefer people not to use and it we have compatibility problems. That being said, I’m happy to wait and hope this won’t happen and we don’t have to, like, implement both. And I guess, you know, if we implement one, the implementation of the other one is trivial anyways, so it’s not that big of a deal. I just wanted to raise it.

KM: I just wanted to make sure I wasn’t missing something.

DLM: No, thanks. Yeah, OFR.

OFR: Yeah, just relaying something I picked up, one reaction to this proposal was, shouldn’t the global limit take precedence? I don’t want my libraries to hide errors from me. So, yeah, just something to think about. Maybe it’s not as clear cut which way around is preferable.

RBR: How would we handle it? Because, like, at the moment, there is an implicit default, which is 10 in V8. And, like, it wouldn’t be like if the first time—if first time it would be changed that it would overrule the local one.

OFR: I have no clue. I’m just relaying, like, a reaction to this proposal that some people would probably prefer libraries not being able to hide error stack frames from them by default. That’s all.

RBR: And for what errors, you know? Because I believe when this is used, it’s a very particular use case where an implementer would have a conscious decision for it, and they are doing that effectively today already, just with an API that is not very well suited for that job.

OFR: Yeah, I mean, it can obviously encourage libraries to set that limit on their errors, and then you would not see the rest of the stack traces, and that might be something that to some users of these libraries might not be desirable. That’s all of my comments.

DLM: Next is KM.

KM: Yeah, I guess, like, you could imagine, I guess, to second that point of, you could imagine some error that a library author never intended to escape out their code, but then accidentally does escape and they set the limit to zero and now you have some debug infrastructure in your, you know—I don’t know, pick your favorite error reporting tool for your website and it just says, oh, you got some error but it hasn’t a stack trace because, and you’re trying to figure out what error this is. And so I could imagine that being inconvenient for some people. But doesn’t necessarily mean we shouldn’t do this API.

RBR: And, like, again, in this case, the question is for me, what does it change towards today when the users use the global version, and in this case, they—the outcome is identical. It’s more of, like, they cannot do a mistake anymore about not resetting the limit, which would be a problem, because as soon as it is zero, and now it wouldn’t be reset to the former state, then all errors afterwards would be zero. That’s a big problem. And, like, I believe that’s more of one of the big problems there about—I would mostly reflect how this API is currently used, and that means we do set it over the global limit no matter what.

DLM: Okay, next on the queue, I’m just curious, since you mentioned several times and also came up in our internal review that’s really annoying when people have parts of the stack trace. What are the legitimate use for having this and why are people using this, if you have any insight?

RBR: Definitely for performance reasons, that’s a very common reason in Node. And also like in my company, we use it for, for example, debugger aspects we don’t need full stack frames. And calculating the stack frames is expensive. It always. I don’t know about all the different, like, error implementations in different engines. But I know in V8 it’s expensive. By setting, for example, the stack frame limit to 0, round about halves the overall CPU cost for generating the error or even lower. It’s definitely a cost perspective. Sometimes, you also just know for certain that frames on top are not relevant for the user. Because it would only be for a limited frames that the user might be interested in in that case. Because errors are not only used for actual error cases, but sometimes for different information transportation. And so we really have multiple cases where there are currently limited as such

DLM: Yeah. Okay. Next in the queue is NRO

NRO: My use case here is actually the opposite, to make the stack traces longer. Sometimes I know I am deep in the library that the default just shows the library-internal frames and not the user frames. So if we need to throw an error that the user needs to, like, act on, not just an internal bug I want to look at, this is where you first call into my library.

RBR: Yes. And in this case, why the longer one? Because doing that for all errors is actually very, very expensive. So the user might explain if their application becomes slower, if it’s just—especially when you change something from a library perspective to change user’s code, that’s a no no, and therefore you are able to do it for your own library errors at least.

DLM: Next on the queue is LVU with “The performance use case seems to argue more for a global knob than a per-error setting? EOM”

RBR: I don’t see that as such because changing the limit to lower value is something that I will only do very cautiously about individual cases. And that’s also how it’s used, like definitely, and when I look up, it’s 90% used to set it, create the error, reset the limit. And formally, you save the limit in the variable. And so it’s about limiting or increasing the limit for a specific error and not globally, because the change the application’s error to strongly otherwise.

DLM: Okay. Next up is MM

MM: I see that this and the next one both are going for Stage 1. Which I don’t see any problem with. But I don’t want to separately discuss advancement. I would like to have a discussion after the next proposal that covers advancement of this one as well as advancement of the other, and I still—I appreciate the fact they are two separate proposals and one might advance and the other one might not. But I think we should postpone the advancement discussion until then.

RBR: That does make it slightly more complicated. Does anyone else feel the same way? I don’t see why necessarily they need to be considered together.

MM: Because a lot of—a lot of the issues that will come up in the discussion apply to both proposals, and I think that we can’t really have an informed discussion. Whether this one advances is not orthogonal to whether the other one advances. One could and one did not. The question about whether each should advance should take into account whether we—whether the other one advances. Also what the content of the other one is.

DLM: Yeah. That’s fine by me. I will just remember to call for consensus separately at that point. I mean, my only other question is, if there—there are no blocking concerns for this one, then perhaps we could, but yeah. That’s fine. We will do them both at the end.

MM: I have concerns, but still prefer postponing.

DLM: Okay. DMM?

DMM: So I just wanted to say that we have optimized our engine to captureStacktraces quickly because they are used in so many tools in terms of profiling and things like that. And we are being lazy about formatting. We have effectively capturing the global stack limits on every case because we need to use that later. Having an explicit way for the user to provide it would be great. So I support this proposal in general.

RBR: I mean, about coming back to the former question, we can go together. I don’t really see the connection between the two proposals yet. Because yes, they are—like, one thing has an impact potentially on another, a little bit. But the APIs exist and they can be completely—they provide benefits completely distinctly. And can also—I don’t know. I don’t see the real connection. But that’s okay for me

MM: The connection is mostly that the discussion—most of the issues to be discussed in examining advancement will probably apply to both, and in any case, the advancement of one should be informed by the discussion of both, of each one

RBR: Okay.

RBR: Depending on what others say, I would be fine with it.

DLM: I’m sorry. We have KM on the queue.

KM: I sort of—I think most web and babel, web engines also don’t eagerly generate the formatted string. I will just—they will record the bare minimum needed to create the string later. And then yeah. Various optimizations on top of that, but they try to be efficient because lots and lots exceptions they get their. It’s a reason to make sure they don’t use the optimization, it’s the best kind of optimization.

DLM: Okay. So yeah. I guess with MM’s request, if it’s okay with you RBR, what we will do is move on to your next presentation and then we will open the queue—the queue open again for that, and at the end, I will call for consensus for each proposal.

RBR: Okay. So about this proposal, first of all, the name, it’s—

DLM: Sorry, RBR. There’s a point of order, Philip needs a break from the note-taking. If we can have another note-taker.

CLA: I can take it.

DLM: Thank you.

DLM: Sorry about that, RBR. Go ahead.

### Speaker's Summary of Key Points

* List
* of
* things

### Conclusion

* List
* of
* things

## Error option framesAbove for Stage 1

Presenter: Ruben Bridgewater (RBR)

* [proposal](https://github.com/BridgeAR/error-frames-above)
* [slides]()

RBR: Okay. So like with this proposal, first of all, the name is not set in stone. It’s something completely open for debate from our perspective because it’s—the right name for this one is from my perspective a little bit more challenging than for limit, which is quite intuitive for me personally. Now, what I want to tackle here is, I would like to see this as a complete alternative to standardizing Error.captureStacktrace—no. What is it called? Error capture—yeah. `Error.captureStacktrace` by V8, which we have a proposal for. But the question is, where is this API actually used for? For what use cases? Do people use error stack trace—`Error.captureStacktrace` at the moment? That’s what I tried to think about and provide an API that is A, more intuitive than what people are having as an API right now. And B, more powerful. Reflecting more of the user's intent of what they are trying to achieve. Because what does error capture track trace do? You receive an object. In this case, it doesn’t have to be an error. For that object, we are going to recalculate the stack trace. And I say, recalculate. So if it is an error, we effectively calculate the frames twice. If it is like an object, then it’s only calculated once. And why do people use that with an object? Because they only care about the stack frames, but change the stack frames. They don’t want the stack frames, for example, like they have a helper function, which is just a validation. And they don’t want to show that because it makes the stack frames a little bit more verbose and less helpful for the user. So instead, they just, you know, remove the upper stack frames, and keep all the lower ones.

RBR: And that’s pretty much 90% of the usage of this API and the other ones are like using this, sometimes they use this API for no good reason effectively because they don’t gain anything from using it. But what does this do as an alternative? First of all, we want to reflect on the error, similar to the options bags, to say, okay. We don’t want to have any of the stack frames that are coming from either this specific method that is referenced, or any of the above. And so they are hidden as such. Which this API is normally used for. It does that always in an efficient way because we never calculate the stack frames twice. It’s always just once. And in this case, we don’t have to calculate the upper ones at all. I don’t know if that’s possible from an engine perspective or not. Maybe there’s optimization possible. In addition, it—like the current API, it’s just cutting them off.

RBR: So let’s imagine we have a stack trace limit of ten. Now we are coming to overlap with the other API. Where we have—I have an example for this. I am not sure. So where we—like set a limit to a low number, so let’s say 2, and now we use that API and actually the top two frames are cut away. Now, the stack frames will be gone, 0 stack frames because the hidden ones are effectively taken into count for the count. From the user perspective, that’s not great because now, in their frames that they really care about are gone. So in this proposal, I am actually suggesting starting the count from the method and not—the hidden ones are not counted. If the method would not match, nothing would be hidden and that is the same error stackstrace would handle. This addresses all the effective use cases for `Error.captureStacktrace`. I do not know any proper use cases that this would not match. As such, I am welcoming questions.

DLM: Okay. The queue is currently empty. Here is MM.

MM: Hi. So first of all, having constrained a discussion where I did, I just wanted to say, at the moment, I have no objection to either proposal going to Stage 1. I have no objection to both proposals going to Stage 1. Having said that, I will ask some questions—I have some questions and some points. The most important one is that the whole issue of errors and error stacks from—are very, very tricky from a security point of view and we have spent countless TG3 sessions where discussion of error stacks and error stack visibility and such has dominated the session. So that doesn’t—so bring me to TG3, it does not need to happen before Stage 1, but I would encourage you whether we go to Stage 1 today or not, to very soon bring this to TG3 and I expect that it will have extensive discussions about how it interacts with other stack security issues.

MM: The particular one that I do want to ask about, which I think has straightforward answers for both, is the interaction with the error stacks proposal specifically, the proposal that the stack property being an accessor inherited from `Error.prototype`. Some engines already implement and others don’t. Assuming that the proposal happens, then I would expect the semantics of this to be that—those accessors, the two accessors can be independently applied to an error object, and that the stack trace that it reports will be according to these proposals. So just the independence that the accessors themselves are the embodiment of the behavior of producing rendered stacks and that that would obey this proposal and whether done through the just saying dot stack or not. And furthermore, if the—if early code replaces the accessors with something else, then again the behaviors only manifested by the original accessors and that the replacement would be the new visible behavior of some `error.stack`. That all seems natural and compatible with your proposals. I want to confirm that.

RBR: Sorry, the last part, can you repeat that.

MM: Yeah. This all seems compatible with your proposals, and in fact consistent with the spirit as well as the letter review of the proposals. So I just wanted to confirm with you that you—that this would be the natural way for these proposals to coexist.

RBR: Yes.

MM: Okay. Great.

MM: The—so you mentioned that our friends above covers the use case for captureStacktrace. I agree. And what stage is captureStacktrace in?

RBR: I believe Stage 2. DLM?

DLM: Yes. That’s Stage 2.

MM: Okay. I would like—I would like to bring up the question separately about whether we should kill captureStacktrace proposal in favour of this. I understand the web compatibility issues for captureStacktrace, but I want to have the discussion, again, the discussion does not bear on whether these two proposals should go to Stage 1.

RBR: And that is my point. I would like to see this as an alternative to the `Error.captureStacktrace`. I did speak with DLM briefly on it. What do you say about it? Maybe you can say it.

DLM: I am on the queue later to discuss that. We might as well keep going.

MM: The ones that captureStacktrace—I am not sure if it’s part of the proposal or not. The V8 implementation of captureStacktrace allows it to be used on non-error objects. What does the proposal say

RBR: This one explicitly is not for onErrors. Sorry?

MM: I got that. This proposal was—only applied to errors because it’s applies on construct

RBR: Yes.

MM: You also mentioned error constructors that take on options bag. Do we have an error constructor that does not take an options bag?

RBR: No.

MM: Okay. Good.

RBR: Okay. So in any case—

KG: We don’t. Engines do.

MM: Oh. Please expand.

KG: I believe at least Firefox lets us put a line number there. A column number. Yeah. So the—that’s the reason we made cause and error objects is so that it was—sorry. An options bag. Or one of the reasons, so it’s distinguishable from passing numerics which engines do use. It’s not specified. But…

MM: The line and column that Firefox implements are passed as positioned arguments

KG: I am not sure it’s Firefox or line and column. I am 99% sure there are positional arguments and I think it’s line and column yes (speaker).

MM: it’s tricky to specify the options bag in a way to allow prior—allow but not insist on prior numeric arguments.

KG: We already did—the options bag already existed.

MM: Okay.

MM: And it’s specified in such a way to be compatible with Firefox implementing in the future as something that goes after those numeric arguments?

KG: No. You just don’t get to use those arguments.

MM: Okay. In any case, I don’t think this affects this proposal going forward.

RBR: I think that’s—I think that’s everything I need to cover here. Everything else I can cover in the TG3 meeting.

MM: So I approve. I support both of these going to Stage 1.

DLM: Okay. Reply from CZW

CZW: Just a quick reply to the error constructor option bag. I think Firefox was the only one that takes position argument, file line file and line number from the compatible table. So yeah. That’s it.

RBR: Thank you for checking

DLM: KM?

KM: Yeah. I guess something else to say. This DOMException need to be covered here? Does DOMException include the stack? I don’t recall. It’s not a Stage 1 blocker.

JHD: I believe DOMException inherits from error as a stack supports a cause and thus supports this stuff as well. And that would probably be the integration PR would be a Stage 2.7 requirement or 3 requirement.

KM: Okay. Worth noting. My question or topic of do we have a—this came up in other—the previous proposal, do we know when and where engines differ in their traces? And the—here’s a reply on the previous part. But we can maybe cover that first. I don’t know if we want to do that first.

CZW: Yeah. The DOMException right now does not take a cause option bag. There’s an open pull request to that but that was never merged into the web spec. So no DOMException does not take it and does not take an option bag.

KM: Sounds like we were able to ship option—the cause without that, so maybe that’s fine for this one, for now at least.

KM: Okay. Back to the first point, do we have a list where engines differ? I know, for example, we—JSC changed its behavior around AsyncFunctions where AsyncFunctions used to appear twice in your stack trace and now appear only once. A bugfix we had. But it might be worth noting those because those things might be places where there might be “compat” risks of people changing the stack traces. In this technology case, I don’t know of any "”compat” issues there and we don’t have—I haven’t heard too many complaints. It has the same theoretical problem, but it might be worth our time to figure out where engines differ in those traces just for posterity, but not anything else

RBR: I don't believe it’s related to the proposal directly because I still think the engines should decide on the—what is the frame by themselves for now. However, I am absolutely supporting we do put a list together. It’s very, very valuable. Maybe we can just open an issue for figuring that out collaboratively. Is that okay? Does that answer the question? Is that sufficient?

KM: Yeah. That’s totally fine. I was bringing up something to consider. Certainly not a blocker in any way. I would be happy to collate the ones for JSC.

RBR: Yeah. Thank you for that DOMException. I was not aware of that in this case. I am not sure i—if it should be about the proposals because in this case it only applies in case we do the option bag already present. And that’s something I could make explicit. If wished for, I believe DOMException should be adjusted accordingly, but that’s outside of the scope of the proposal.

DLM: Yeah.

PFC: I can foresee some well-meaning developer publishing an article on Medium saying, 'if you publish an library on NPM, it’s good practice to hide your internal stack frames' and that getting accepted as a best practice. But if I compare that with my own debugging experience—I use a library and get an exception from it and I don’t understand why, I use the stack trace to go into the source code of that library in my node_modules directory and figure out where in the library the exception is thrown and what caused it. I think that if this facility exists people are going to use it even when it’s not necessary, but use it because it’s there. That will have a negative impact on people’s debugging experience. And even in an open source library, if an exception occurs, maybe it’s a bug in the library and people can go in and fix that and contribute back. But if we get this general view it’s a good practice to hide your internal library frames, I might even say this could be harmful to the open source ecosystem. I don’t think this is a blocker for Stage 1 because a lot of things still have to be worked out. But I would really ask you to consider in the following stages, how do we avoid this problem of people using this feature just because it’s there, and disrupting these debugging and open source use cases where it’s actually better to have a full stack trace.

RBR: Actually, these proposals don’t add new functionality. All that we have is a fact of reality in which we are already operating. As such, like what they do, they provide less error prone that is aligned with the intent of the users who use these. For example, with the frames above now, well, in this case hopefully actually like the part, the less debuggability that you are speaking about is improved with this API, compared to the existing `Error.captureStacktrace` edge because that will throw away and it will like remove frames but in this case, it will actually not remove frames. It will move the frames, the overall frames to hopefully better ones that you care more about. And so that’s the difference. And `Error.captureStacktrace` is error prone is such that people are not aware of the overhead it comes with in case you use it on errors because of the duplicates stack traces. That’s why they use it on objects. They don’t have the default one and you create one which is weirdly looking. It exists today. I don’t really see any problem in that regard. Of course, we can say, you should be aware about how to use these APIs, but that is probably with most APIs. People should know how and when to use them and why.

DLM: KM is on the queue.

KM: I guess—yeah. This is the functionality part. For actual debugging sessions, I will not 100% sure on this, but in WebKits and spectroscope, when you debug a thrown exception or any thrown value at all, I think the engine—it will capture a stack and stack trace of where it was thrown from independently of the one that is in the error object itself on the stack. So you can still see where it was actually thrown independent of from the “.stack” property, I think. I am not 100% sure though.

JHD: Runtime or in the devtools?

KM: In the devtools

JHD: What you can see of the devtools is irrelevant. It’s what the other JavaScript can see that we are talking about. Right?

KM: I think this was more focused on the idea that, like, in your debugging session, you would not see the option. It would be gone. That mitigates it. Yes, in your reporting tools, you would not have that information, which you may want.

DLM: Okay. PFC

PFC: Even in the absence of `Error.captureStacktrace`, the possibility to do this exists. You can take the stack property and delete whatever you want from that string and throw a new error with it. But I mean, I think you know and I know that that is very different. Right? If there’s a convenient feature that allows you to do this, versus a big unwieldy piece of code with lots of string manipulation that is the only way you can do it. I think if this convenient feature exists, people are going to claim it’s a best practice to use it. And that’s what I am concerned about.

DLM: Okay. I am next on the queue. I would like to find out that error captureStacktrace, or non-errors. When we censor the case, we’re censoring that is not an error. We don’t want that to show up in the stack trace because it’s not irrelevant. I don’t think it’s directly applicable as tap attaching to a property itself

RBR: As I tried to outline the reason why it’s currently mostly used on non-errors is the cost involved on errors. Because this API, yes, I agree, the API is esoteric, not a lot of people know about it. When it is used, they mostly play around with it and figure out, the overhead of using it on errors is actually quite significant. And that’s why it is used on non-errors even though I care about getting the stack trace as a string. They want to do something afterwards with it. Or start it plainly. In this case, and like the `Error.captureStacktrace`, it’s currently used for non-errors, but it would be replaced by this API, by working on the Error constructor.

DLM: Next in the queue?

MM: Yeah. I think this is a—I am trying to—I am going to offer a tentative historical correction to the note of captureStacktrace. It originated in V8. Someone has better information, please correct me. But I believe the original note vacation for captureStacktrace was that before classes, there was no way to faithfully create the equivalent of a new error class that inherited the stack property. So captureStacktrace was added so that in the previous class JavaScript word, ES5, that you could more faithfully create a new constructor that acted like a subclass of error and had a stack. I don’t think it has any implications of what we are doing here, but on whether or not how captureStacktrace proceeds. But in any case, it sounds like nobody has any corrections for that, so that was probably the original motivation.

DLM: Okay. I am next on the queue and this is about the proposal. Unlike the previous proposal, this is something SpiderMonkey, JavaScript, and V8 has shipped. It seems unlikely to unship this. It makes sense to continue with that proposal, even if we say, please don’t ever use this. There’s something better, you know, use these—the proposal we are talking about now. I don’t think we can remove it. I think it makes sense to standardize the behavior because there are some behavior differences. This is something to do because it exists on the web and we run into compatibility problems on the web. I am happy to hear any feedback on that. I did discuss this with OFR and KM before, and came to the conclusion we should standardize on the behavior even if we don’t want people to use it in the future

RBR: I very well understand that the compatibility risk is such. And like my hope and I believe that is not too unlikely, where this API is currently being used is often by people who are very active in open source, like having knowledge of the engines. And those people are often also very active in reworking code to the new standard.

RBR: So my hope is that when we ship this, that effectively, very soon the usage of `Error.captureStacktrace` drops significantly and because of the better API set, not the usability, but the API, but better behavior for people currently using it that we can effectively remove it. Therefore my wish would be we postpone `Error.captureStacktrace` proposal progression, ship this, see how it goes, in two years, and then decide again.

DLM: Okay. Mark is the queue. You can go first

MM: Yeah. So just a quick question: the existing things we put in an options bag for error constructors also end up as properties on the error instance, like `cause`. I just want to confirm that there’s no expectation that limit or framesAbove would be reflected as properties on the error object.

RBR: They should not.

MM: Okay. Thanks.

RBR: I will make a note to make it explicit.

DLM: Okay. Just to wrap up, that seems okay with me. We can see how the proposal goes. There’s no rush to standardize `Error.captureStacktrace`, at least on my side.

DLM: The queue is empty? We should give it a minute or two in case someone else wants to jump in. And if not, I guess it makes sense we should probably do consensus for this item first, since it’s what we mostly recently discussed and then go back to the previous item, if that’s okay with you

DLM: The queue is still empty. We should ask for consensus for Stage 1.

MM: I already stated that I support.

DLM: Thank you. And support for DMM on the queue. Any other voices of support or any concerns about this advancing to Stage 1?

MM: Oh, is there a problem statement, a problem statement for Stage 1? It’s a question that applied to both proposals.

MM: In this case, I am not—I would not insist on that. It is our known practice.

RBR: Like in my overview, I give that pretty much. Wait.

MM: Is it easy for you to show that?

RBR: Yeah. So like we have this. The capability of longstanding host specific facilities. While providing a standardized cross-platform option available on all ECMAScript error subclass—Next to the easier to use API and better stack limit handling.

MM: That satisfies me.

DLM: JHD on the queue of support. I haven’t heard any objections. I think it’s safe to call this Stage 1. Congratulations, RBR.

MM: Thank you.

DLM: Okay. And then with that, we can go to the discussion option limits. Take a look at MM’s concern here as well.

DLM: Sounds like a motivating statement to me.

RBR: Yeah. I can read it out again. This proposal introduces the newError options property. Limit maximum number of implication stack frames. But about the problem statement, conceptually… this one. It provides the standardized cross-engine way to control stack depths per error instance and avoid manipulating a global knob that affects unrelated errors It’s a very short one. I can expand on that.

DLM: Short is good, I think. Yeah. For this proposal, then… Let's call for consensus and ask for any people that would like to voice support or concerns.

MM: Support

DLM: Support from DMM. CZW. And MM I believe

DLM: And JHD as well.

DLM: Are there any concerns about this proposal?

MM: Just to be explicit, no concerns going to Stage 1. I have many concerns after it’s in Stage 1

DLM: Any Stage 1 concerns? Thanks for correcting. Okay. Looks like we are + 1 from SFC. Congratulations on Stage 1.

### Speaker's Summary of Key Points

* List
* of
* things

### Conclusion

* List
* of
* things

DLM: I guess, just don’t forget to enter conclusions and summary in the notes, please. And with that, I believe that is our agenda for the first day. The other topics tomorrow do not move up and we don’t have time for it, even if we could. So I guess that is that. We have never actually ended a day before. So thanks, everyone. And I guess—

JHD: I guess… real quick. I didn’t mention it earlier. If—review the Github Teams for your employer or ECMA member and file any issues in any corrections to be made. Thank you

DLM: Thanks, JHD.

DLM: If there’s nothing else, then yeah, let’s call it a day. Thanks, everyone.

