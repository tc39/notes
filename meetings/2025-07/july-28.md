# 109th TC39 Meeting

Day One—28 July 2025

**Attendees:**

| Name                   | Abbreviation | Organization       |
|------------------------|--------------|--------------------|
| Jesse Alama            | JMN          | Igalia             |
| Dmitry Makhnev         | DJM          | JetBrains          |
| Waldemar Horwat        | WH           | Invited Expert     |
| Guy Bedford            | GB           | Cloudflare         |
| Daniel Minor           | DLM          | Mozilla            |
| Zbyszek Tenerowicz     | ZTZ          | Consensys          |
| Jordan Harband         | JHD          | HeroDevs           |
| Sergey Rubanov         | SRV          | Invited Expert     |
| Chip Morningstar       | CM           | Consensys          |
| Nicolò Ribaudo         | NRO          | Igalia             |
| Mikhail Barash         | MBH          | Univ. of Bergen    |
| Keith Miller           | KM           | Apple Inc.         |
| Aki Rose Braun         | AKI          | Ecma International |
| Samina Husain          | SHN          | Ecma International |
| Olivier Flückiger      | OFR          | Google             |
| Richard Gibson         | RGN          | Agoric             |
| Rezvan Mahdavi Hezaveh | RMH          | Google             |
| J. S. Choi             | JSC          | Invited Expert     |
| Eemeli Aro             | EAO          | Mozilla            |
| Tab Atkins-Bittner     | TAB          | Google             |
| Istvan Sebestyen       | IS           | Ecma               |
| Daniel Rosenwasser     | DRR          | Microsoft          |
| Andreu Botella         | ABO          | Igalia             |
| Chris de Almeida       | CDA          | IBM                |
| Chengzhong Wu          | CZW          | Bloomberg          |
| Justin Ridgewell       | JRL          | Google             |
| Kevin Gibbons          | KG           | F5                 |
| Mathieu Hofman         | MAH          | Agoric             |
| Michael Ficarra        | MF           | F5                 |
| Mark S. Miller         | MM           | Agoric             |
| Rob Palmer             | RPR          | Bloomberg          |
| Stephen Hicks          | SHS          | Google             |
| Ujjwal Sharma          | USA          | Igalia             |

## Opening & Welcome

Presenter: Rob Palmer (RPR)

RPR: Okay. According to the international clock, I think it is time to begin the meeting. We have a good. We have 20 people in here. I think we’ll have a few more. So welcome, everyone. To the 109th meeting of TC39. All very excited to be here. This is obviously, a remote meeting. Oh, dear, sorry, I’m—I’m, my windows wrong. Here we go. So, let’s get stuck into it. We have our chairs here today. I think, all three. Myself, Rob, Ujjwal, Chris joined by our facilitators I know Dan minor will be here for quite a bit, as well as Justin will be with us as well. I’m not sure Daniel, we shall find out. And let’s just, let’s just check on the notetaking upfront. I think we have Carrie as transcriptionist. Is the doc all working? Yes! It is. That’s good. Please could we have a couple of volunteers to help out with editing the notes?

RPR: All right. On we go. So please can everyone remember to sign-in using the regular meeting entry form. I know sometimes people get the URL to log into this video by other means, but that’s the official route. And make sure that we get all of the correct legal tracking information. IP connection. We have a code of conduct. Please do read it. It is available on the website. TC39 dot ES. Do your best to reflect the spirit of it, not just the, not just going very finally litigating through it. As we all are here to have a good time and to be respectful to each other. We are on U.S. Pacific Time this week. So we got our usual remote two hours, plus two hours schedule. Our comms tools in some ways have not changed. In some ways everything has changed in terms of TCQ as our primary tool. Today if you look at the URL you may have noticed the reloaded part in it. Please do have a go opening this now. The link is on the reflector post. The reason is worth logging in early to this is that this is the new version implemented by CHU. Is CHU with us today? I do not think so. So, we’re using his new special deployment and upgrade of BT's orange TCQ tool. This is all enhanced. This is all very bespoke. I’m sure it will be high quality. But if any issues do arise, any technical issues, please do call them out. If they are of a blocking nature, if you cannot communicate using TCQ, please escalate to the chairs, that would be kind of point of order worthy.

RPR: So for anyone who hasn’t used TCQ. You can see a screenshot all of the queue of our agenda topics. In the middle, if you choose the queue section of the app you will see four different buttons of increasing invasiveness. So, we start on the left, on the blue. Well, sorry, this is the screen we should not have anymore, if you see his, you’re using an old version of TCQ. But normally, we prefer new topics, that’s the gentle way of suggesting what to talk about next. You can also discuss the current topic or intervene with a clarifying question or just stop the show entirely if there is something significantly, like something is completely broken and you can enter with a point of order.

RPR: We also use matrix for the realtime chat. Hopefully, everyone should have been on board toed this. It is part of our standard onboarding procedures. But most of the conversation relevant to today’s topic will be in TC39 delegates and on topic in the zone.

RPR: We have an intellectual property policy. So a lot of people here, perhaps most people will be delegates from their member companies or institutions in which case, your institution will have signed the appropriate forms. Otherwise, we also have invited experts that are confirmed by the ECMA secretariat, subject to completing the form. Everyone should be signing the royalty-free form. If you have not signed any of this, then we interpret that as you are an observer. You're welcome to observe in a read-only way. But please do not speak. All right.

RPR: Also, another important notice is that we are transcribing this meeting. And so be aware that a detailed transcription of the meeting is being prepared and will eventually be posted on GitHub. You can edit this at any time during the meeting for accuracy, including deleting comments you do not wish to appear, and you can request corrections up to two weeks after the meeting completion, and afterwards making a public PR in the notes repository or contacting the chairs.

RPR: Our next meeting is another remote meeting. This is in roughly two months time. And then following that, I’m very excited the next, next meeting, which is in Tokyo, that’s the, that will be hosted by my company, Bloomberg, in the same building where we were approximately, I don’t know—not that long ago. 18 months ago. So, yeah. Please come along to that. I think MF can speak highly of the capybara cafe, you need to book very early for that. You need the book now if you wish to do it. All right. We have notetakers. Can I get approval for the last meeting’s minutes? That would have been the meeting in A Coruña, at the Igalia office. If I—will ask for any objections to approving those minutes. I see nothing on the queue. No one speaking up. So we can consider the previous minutes are approved. All right. And we have our current agenda along with the associated schedule that CDA has posted. Draft schedule. Are there any objections to that? Nothing on the queue. So the agenda is, for this meeting, is approved. And so, the next up will be SHN with the secretary's report.

## Secretary’s Report

Presenter: Samina Husain (SHN)

* [slides](https://github.com/tc39/agendas/blob/main/2025/tc39-2025-029.pdf)

SHN: Thank you. Great. I have a short update, since our last meeting to share with everybody. Thank you AKI, for helping me put this report together. And add any comments you may like to make, just do so as you see needed. I want to talk about some recognitions that we have had, the Ecma recognition award, the GA approvals and some new projects and members. The slides, as always, talk about the code of conduct, which we have already talked about. Invited experts and the list of documents that are available for the community read, TC39 and GA documents. And, of course, the next schedule, which RPR has already mentioned.

SHN: Recognition awards. Ecma gives recognition awards which honors individuals that have been involved with Ecma and been doing a considerable amount of work and involved in multiple technical committees or the executive committee. We honored four individuals in this last General Assembly. You all may not know everybody here, but I wanted to share the names. Touradj Ebrahimi has received an Ecma recognition award, he has been active with Ecma for over 20 years and quite a contributor in TC31, TC51 and a number of other committees, he represents EPFL, a not-for-profit member, which is the university here in Lausanne. We extend congratulations to Touradj. Then we have Hyun Kahng. I apologize I mispronounced his name, for contributions in TC51. And also the liaison officer with the relationship that we have with ISO in SC6. He has been active also for 30 years in both in ISO and in Ecma, and has made a lot of contributions in that technical committee 51 and with the preparation in multiple different standards. We also extend congratulations to him.

SHN: As many of you know, MLS has taken retirement from Apple. MLS has been, is the process of becoming an invited expert with TC39, which I think is excellent. MLS has been active within Ecma for a number of years and served as the chair for our ExeCom for three years, that was excellent. He has also been, as you know, a very active member of TC39 involved in multiple different areas of discussions. I think MLS has been a great individual to work with. He has brought a lot of benefit to both the ExeCom and TC39 with his style of working. His approaches, and his contributions. So I’m not sure if MLS is on the call already today, but I would like the committee to please recognize MLS and congratulate MLS for his efforts. He is not on the call right now, we look forward to seeing Michael at the next call as an invited expert.

SHN: And last, but not least, Rob, congratulations, RPR, you have been nominated by your committee and members for this award. RPR, you have been working very hard with TC39. Your work has not gone unrecognized. We thank you for all of the efforts you take to ensure TC39 runs as smoothly as it does. Together with your co-chairs and with your leadership we have discussed many topics, sensitive, active, and exciting conversations. You always kept everything organized and found solutions to move forward. RPR, thank you very much for your contribution. I will stop for a moment and let the committee congratulate you on receiving this award. Congratulations, RPR. There should be fireworks and clapping and so forth.

SHN: The next line of congratulations is for the approval of the ECMA standards. ECMA-262 16th edition was approved by the GA in June. And ECMA-402 12th edition. Congratulations to the committee for your efforts and work. To complete the two. I know you’re beginning your efforts already for the 17th and 13th edition. So that is fantastic. I also want to recognize all of the editors and all of the chairs of the subcommittees with their work that goes in, and recognize AKI for her work to ensure that both of the standards and other work that’s coming out of the TC39 are all being—very, very nicely made into PDFs so we have an excellent—archive of all of these standards. So, congratulations.

SHN: Some new work that is going on. I have already mentioned TC56, which was launched in December, it is our first AI technical committee. That technical committee is looking for participation. They put a call for participation for some of the work they are looking to do. I specified it here on the slide. There are comments they are looking for and there are definitely details available on GitHub. You see the slides or get access to the slides; those are all active links. You should be able to reach it and get any information or provide comments that you want. If you have further questions or clarification needed on this particular technical committee, don’t hesitate to reach out to me or Patrick. There’s an email provided there. Where he may be able to also guide you with some of the input. I think there are many members on TC39 that may have interest or may be able to bring™ value to the AI technical committee. So if you see this of interest for you or other members of your organization, please take the time to look at it. The deadline for comments is coming up on 15th of August.

SHN: We have some new members that we welcomed at the general assembly. We have six new members. I have highlighted Consensys Software which is an associate member and have been very active with TC39. This is represented by CM and a number of his colleagues. So thank you for joining. It is excellent. The other members that are listed there, Socket is for TC54. Which is on SBOM. And Fordham is for TC56 on the AI. Apache Software is for TC54. And Kindai University is for TC51. And the University of Buffalo is for TC56. Which is also an AI. So we have a variety of new members working on various different TCs needs which is excellent. Always appreciate that.

SHN: So, as I mentioned, it is a short report based on our last meeting. I will do a review third quarter of all of the invited experts as I always mention. I am continuing my relationship and engagement of W3C for any more work we can do either with technical committees or to create new technical committees, please also, there is interest for review, as a committee, if you are interested you can reach out to AKI or myself to see what we can do.

SHN: The annex has the usual information. I’m going to jump through to the schedule so as Rob mentioned we have another remote meeting coming up. And of course, we’re always looking forward to the in-person meeting hosted by Bloomberg in November, at the venue almost two years ago, I’m sure it will be equally excellent. Dates that are important for us to know, also because of standards you would like to publish, to keep in mind as you book our dates two years in advance, the general assembly dates are noted for you as we plan the TC39 dates for the 2026 year.

SHN: And I think that is the end of my slides. I’m just going to pause for a moment and ask AKI, did you have anything further to add to the slides as presented?

AKI: No, I think that covers it.

SHN: Thank you very much. Now, that I can see everything, RPR and I can see you face, Congratulations on your recognition, thank you very much for all of your efforts.

RPR: Well, yeah, thank you so much SHN, that was lovely to receive.

SHN: You will be receiving something a little bit heavier, but you will have to wait.

RPR: Yes, this is why I like in-person physical meeting.

SHN: And may mail it to you, I don’t think you want to travel back with it. Send me a mailing address, we can decide later. It is okay. We have time. Thank you.

RPR: I tend to avoid taking bricks or anything heavy.

AKI: Anything that can be described as a weapon.

RPR: Yes, I did receive my tenure from Bloomberg, a massive heavyweight. Yes.

SHN: This would be alongside that. We will find the best way to get it to you.

RPR: Thank you for thinking of me.

SHN: Thank your committee and your nominators. Are there any questions?

RPR: On the queue, there are no questions. Any other questions for SHN? No? All right then. Thank you, Samina, for your report.

### Summary

SHN provided a brief update since the last TC39 Plenary meeting, supported by AKI, covering recognitions, standards approvals, new projects and members. Four individuals were honored with Ecma Recognition Awards at the recent General Assembly; they were recognized for exceptional work for Ecma.

The 16th edition of ECMA-262 and 12th edition of ECMA-402 were approved. SHN applauded the subcommittee chairs, editors, and Aki for quality outputs and documentation.

New work was mentioned with TC56 (AI), where there is an open call for participation; accepting public comments on its draft standard until 15 August. Details and links are available on GitHub or via email. Ecma welcomed six new members including Consensys Software, active in TC39.

## ECMA-262 Editor's Report

Presenter: Kevin Gibbons

* [slides](https://docs.google.com/presentation/d/1SR58Fn8tnOt1Y_OOF-ZrqVCaWbHubbsbXadb45Ndpq8)

KG: So, a small batch of normative changes. Before I get into this, I want to mention there are a handful of other outstanding normative changes that the editors are aware of, including most significantly explicit resource management, that we haven’t had time to get to. The editors have each individually had a bunch of stuff going on in the last couple of months that has prevented us from spending as much time as we like. For example, SYG has been changing employers, that sort of thing. So we are hoping to get back to our usual pace in the coming months.

KG: We did land a few normative changes. `Error.isError`. And the change from RKG to finally specify the function assignment on the left-hand side of assignments web-reality issue. This has been a very long time coming. One of the divergences between web reality and spec that no one had fixed until very recently. So thanks there. This last one, someone noticed that `WeakRef.prototype.constructor` was specified to be non-writable. Making it like every other dot constructor property. We’re sure this was a bug. It was writable on the web, In test262 it was writable. And the default, it was writable. We think this was just a bug, because `WeakRef.prototype.constructor` is weird in that it is not required and so it was specified in a different way, we think the fact it was specified in a different way led to the divergence. So we landed that without asking for consensus from committee, since we understood the intention to be that it should have always been writable. Certainly that’s what everyone implemented.

KG: Not too much to call out in the way of editorial changes. We did want to call out this change to the module loading machinery from NRO which slightly simplifies some of the machinery. There was a field on an internal record that could have just been a local variable. This only affects you if you are looking at the module machinery, but it does affect you if you’re looking at machinery, and the machinery is very complicated. We want to make sure people are aware of that change. And probably forthcoming similar changes along those lines. Hopefully, that will be a simplification, but it is a small amount of change.

KG: Okay. I’m not going to go through the upcoming work again, except to call out the first item, reducing optional parameters in operations. There are a handful of optional parameters we think are causing more trouble than they are worth. We just completed an audit of all of them and made a list of which optional parameters would better be served by having something explicit. We have slowly been going through and making those changes where appropriate. Yeah. That is all that I have. Thanks very much.

## Ecma 402 Status Updates

Presenter: Ujjwal Sharma (USA)

* [slides](https://notes.igalia.com/p/2MUpJraYd)

USA: We have 4 changes since the last time we all met. These are the four editorial things that were merged into the specs. Two of them by ABL and two of them by RGN, our editor. So first we have Oxford comma markup, sort of editorial fix that is more like just fixing editorial bugs, that even, you know, anything beyond that. That is how to describe the first one. I can go into either, well any of these, but, yeah, I will just quickly summarize the rest of them

USA: The next two by RGN are related to the variants strings that we did. So we uncover a few things in the last sort of normative change, if you remember, regarding prototype variants for local Instruments (?), this is not property for the validation of the variants. Getter and then—the checks. And then finally, 1,016 is actually putting us in alignment with the ECMA-262 specs so, you can see, there is a bunch of comments here. One for each of the constructs that we have. You can see it is just taking the information that we already have and converting it into the, an ordered list format that is in 262. Yeah, this is editorial alignment, nothing spectacular or new in any way. Yeah, these were the four things that we got through. So thank you.

## ECMA-404 Status Updates

Presenter: Chip Morningstar (CM)

* no slides

CM: Not much to report, as usual. It has been a slow week in JSON land. Although, as I was contemplating this report, I was struck by the distinction between ECMA-404 and HTTP 404.

## Test262 Status Updates

Presenter: Richard Gibson (RGN)

* [slides](https://docs.google.com/presentation/d/13A4dp4kHj5aAJLwjehYt2O0rCHiTnh5XTD3_riNngeI/edit?usp=sharing)

RGN: Okay. Not much has changed in test262 since the last plenary. We have simplified verifyCallableProperty for authors which is part of an ongoing effort to reduce the burden required for boilerplate-type testing. That landed about a month ago. And we also have a little bit more implementation coverage. A couple tests for IteratorClose. A couple for promoting tests from staging, and a couple more Uint8Array fromBase64. Moving forward, we are going to continue increasing affordances for test authors to reduce their overall burden. We’ve got a lot of new tests that still need review. The maintainers have divvied them up, but haven’t yet closed them out. And of course, help is always wanted. We’re on the TC39 calendar every third Wednesday.

RPR: Okay. There is nothing on the queue. So yeah. RGN has a cry for help on test 262. Please do join him. Thank you, RGN. We shall move on.

## TG3 (Security) Status Updates

Presenter: Chris de Almeida (CDA)

* no slides

CDA: Hello. Yes. TG3 continues to meet with security impacts of proposals weekly. Please join us if you are interested in this topic. Thank you.

## TG4 (Source Maps) Status Updates

Presenter: Nicolò Ribaudo (NRO)

* [slides](https://docs.google.com/presentation/d/1UH4MRfP8K6cuAHDhayH_PzIPCGgfxtePG5NOPGSfK6A)

NRO: So there hasn’t been much going on in ECMA-426. There have been like a couple of minor fixes, the fixes to spec, but nothing significant. However there is work in progress from our spec editor to actually define how to use the mappings that our spec define to like, basically you get a list of mappings, a position in a code file and we actually say how those mappings translate position to the corresponding file. That is work in progress. You can check this work in PR #195.

NRO: There is an update on the scopes proposal. We have spec text under review. Most of the spec text is ready. There is some things that people are handled by the recovery and cases. But it is like really negotiating. And we have implementations in Chrome DevTools and Firefox. We find that for our process it is very useful to have very early implementations, we are talking about things that are very difficult for humans to read the file and understand what is going on without actually trying it in a browser.

NRO: And we have updates with the range mappings proposal. We have consensus on range mappings allows skipping mappings in some cases we recently changed the proposal to something more efficient when there are a lot of mappings when efficiency matters the most. And in progress for implementation for testing purposes. You can check the link here if you want to see what the new coding is like.

NRO: And we have also new proposal: Source hash. It is at stage one of the TG4 process. It assigns a unique identifier to a unique hash to original source files that can be used, for example, for caching purposes so dev tools don’t have to reload all of the files every time. Normally, things on the web are cached by URL and HTTP headers, controlled by HTTP headers, but that is not enough for source maps, because development files change quickly while keeping the URL. This is it. Are there any questions?

## TG5: Experiments in Programming Language Standardization

Presenter: Mikhail Barash (MBH)

* [slides](https://docs.google.com/presentation/d/1FUzQY6Wpp6BqJKv2XJFWHcZDqkLftkwHCyW1TnXSOmI/edit?usp=sharing)

MBH: A short report from TG5. In terms of outreach, YSV and I gave a talk about TC39 and TG5 at the Programming Language Mentoring Workshop, which was held at the PLDI 2025 conference. That’s the premier conference on programming language design and implementation. And also, at the European Conference on Object-Oriented Programming (ECOOP 2025), YSV and I arranged a Workshop on Programming Language Standardization and Specification. We had 10 talks, and two talks that are mentioned here on the slide, given by MF and by Jihyeok Park, a researcher from Korea University in Seoul, were about the tooling used by TC39 and about the ESMeta tool, respectively.

MBH: TG5 continues to have monthly meetings and I would like to bring everyone’s attention specifically to the next month’s meeting. So, at the end of August, we’ll have researchers from EPFL in Switzerland, talking about their formalization and mechanization of regular expressions semantics. We would like to invite everyone who is interested in that and works on the implementation of regular expressions in engines to attend that meeting.

MBH: We also continue arranging in-person TC39 workshops, the next workshop will be collocated with the hybrid plenary in Tokyo. So it will be one day before the plenary, on Monday, the 17th of November. We’ll be hosted by Bloomberg.

MBH: And one more remark. YSV is on leave until July 2026. So the current co-convenors are myself and MF from F5. That’s it.

RPR: Okay. Thank you, MBH. Are there any questions on TG5? Well—

CDA: Wait. Sorry, I missed the part about the convenor. MF is now co-convenor of the group?

MBH: Yes.

CDA: Okay. I think we formally have to do that through plenary. Right? We’re changing the composition of task group convenors, that has to be—shall we do that now?

RPR: Given this was a surprise, I guess—does—maybe—ask, does anyone want more time to think about whether MF is okay as convenor for this task group? Okay. And, in which case, I think we could probably just go ahead right now and ask for—oh, go ahead. SMH.

SHN: Yes, I just want to say, if you have no opposition and if the TG is proposing a convener is accepted by the technical committee as a whole and through the chairs, and you can do in this short notice, you should be fine.

CDA: I support plus one for MF for joining the conveners group of TG5.

RPR: Thank you. CDA. Is there anymore messages of support or objection for MF becoming a convener for TG5? Nothing on the queue. So no objections. We have heard only support. So congratulations, MF. Thank you for ensuring we are doing things properly, CDA. All right. I think—anything more you would like to say, MBH?

MBH: That’s it. Thank you.

## Updates from the CoC Committee

Presenter: Chris de Almeida (CDA)

* no slides

CDA: Oh, it has been quiet, code of conduct committee front. We have no new reports or anything. The only thing we’ve been discussing a little bit that we haven’t made a lot of time to discuss it within the group is the ongoing issue in the repo dealing with AI and large language model-contributed generative content and stuff like that. So please head to that issue in the repo if you have thoughts or would like to see kind of the current state of what we’ve been discussing. Although, I will note that, I believe, KG has a topic coming up later, too, specifically about this. We will be talking about that shortly. Thank you. As always, if you’re interested in joining the code of conduct committee, please reach out to one of us. Thank you.

RPR: Always looking for new members. MF, you’re on the queue.

MF: I just, I would like CDA to state the issue number for the notes so we can be clear which one he is talking about?

CDA: It is issue 62. I will be pasting it into the delegates chat as well as the notes. [tc39/code-of-conduct#62](https://github.com/tc39/code-of-conduct/issues/62)

## Preparing Summary and Conclusions

Presenter: Samina Husain (SHN)

* [slides](https://github.com/tc39/agendas/blob/main/2025/tc39-2025-030.pdf)

SHN: thank you. This is a very open discussion. AKI and I put slides together just to help clarify. Over the last little while, there was some discussion on Matrix about the purpose of summary inclusions—what they are, their value. So, we put a few slides together to help that we can all be aligned and agree this would be a way forward that would help both the committee and also the requirements that we have at Ecma and in general make it something that is not cumbersome to work on. AKI is on the call. I’m going to start the conversation.

SHN: The difference between summaries and conclusion, and this is a very simple slide just to set the stage. So the summary is stated very clearly here. The substance of the presentation and conversation. Just something simple in—sentences which may be bullets, not just sentences that say it has been approved, but define what it is. But simple statements that identify the key factors that have been discussed in your slot of presentation in whatever purpose it may be, whether it is to come to stage one, stage two, or to bring in some other options. So there’s some examples given in the slide bullets. You know, you have a conversation, you bring up the options, you may have in your summary option A and B were discussed. Here is the result of that. Are there other areas in which the delegates raised specific concerns that should be highlighted and should be remembered before the next steps take place or before the next conversations happen? So it is just a short summary of what you’re doing.

SHN: And the conclusion, of course, is the decision or the commitments that are made as a result of this discussion. So if you do move on to the next stage it can be clarified, if it does go to the next stage or next step it needs some actions, that would be noted. If it goes to the next steps and needs actions and has an individual associated that should also be identified. It should be brief, and clear, so if somebody looks back at the notes they can understand what the conversation may have been, which could have been a 30-minute conversation or whatever time. Two very simple and easy ways to do a summary and a conclusion.

SHN: Why do we do this and where are they used I should say? So it is important that we have summaries and conclusions. We often talk about this. It is to understand what the decisions were and why they were made. They are used in the Ecma meeting minutes and our formal archive of information, and of course, the technical notes, the notes that are currently generated through the stenographer are quite long and a lot of reading so it really helps, I think, to have this summary and conclusion to let anybody who looks back at the note find what they are looking for quickly in a time-efficient manner. AKI, do you have any other words you want to add on the first two slides definition of summary and conclusions and where we use it?

AKI: No. I think that covers it pretty well.

SHN: So, in preparing for it, and to keep it simple for everybody, and also efficient for everybody, as you all prepare your slides for your sections with the areas that you speak, you may also be able to already prepare what your summaries are. You know what you’re going to present. You may embellish a bullet or two or comments or two, but 80% of your summary may be done before you do your presentation because you have the slides. You also know what you want to achieve. So that may help you to also prepare some words for the conclusion because hopefully, that’s the direction the results are going to be. So this can be done in advance, and hopefully, it can be a bit more time, time effective for the meeting that we’re having when we have the plenaries and also for yourselves as you prepare in advance so you don’t have to sort of think about it while we’re doing the meeting and get distracted. So I think it could be a little bit more productive that way.

AKI: You know, for example, if you go back to slide two. You can see an example of the summary, the first two bullet points were clearly written ahead of time. And then afterwards the third bullet point was added because that happened within the conversation. But it wasn’t necessarily something that involved a commitment was where the discussion went to at the end. So summary being the presentation, the conversation, means you can summarize ahead of time. You may wish to add more to the summary as the conversation goes on.

SHN: Okay. Thank you, AKI. You know, the idea to do this short presentation was to lay the groundwork so we can agree and the committee would feel comfortable this makes sense for summary and the definition of conclusion works. Since there was a lot of conversation, back and forth for the previous plenary, I would like to just stop now, there are only a few slides I want to present. You all have these slides. Are there questions or concerns, what can we do better or clarify better to enable everybody to be able to do summary and conclusions?

WH: How are these things going to be reviewed? The nice thing about notes as we have them now is that we can review them and update them in real time. If somebody will be writing summaries based on their interpretation of what the discussions were about during a meeting at some indefinite time after the meeting, then how would those things get reviewed? Reviewing them at the time of minutes approval at the next meeting is kind of too late.

SHN: Thank you, WH, that is a very good question. I did not want to assume it is not reviewed. The idea is that the individual is prepared. So when you have, as you do at the end of your sessions, and somebody says do you have statements to make for a summary and conclusion. That individuals are prepared. They have the written or stated. And the stenographer will write it and can be seen by everybody, it is done at the time, it is not intended they would not do it without the visibility of all of the members, just the preparation may be done in advance.

WH: I’m a bit confused about the preparation. Presenters can prepare summaries based on what they are presenting, but it is hard to prepare ahead-of-time summaries based on what direction a discussion might take during a meeting.

SHN: Yes. Agreed. And I think that can often happen. The idea is to be able to give you, to give the individuals, just a framework to work with so it may help, it may help ease into the conversation and write the words. If you feel it can be done differently and could be more efficient, I’m very happy for some input and feedback. This is just some thinking that, together AKI and I thought it may help. But I’m very open for other thoughts. It should be simple for everybody. That’s all.

WH: Given what a lot of our employers are working on, it ought to be fairly simple for anybody who wants to see summaries to just run one of the AI summarizers over the detailed notes. Why is that not a solution?

SHN: So, we have an open conversation about which AI tools and what to do with the tools. Again, if you’re going to write and—as we recommend you write your summaries when you finish your presentation or come to an agreement together and then you put it into the notes—if you want to use an AI tool, I think that also depends if it brings the correct message.

AKI: Yeah. So hopefully, this is all contemporaneous, hopefully, this is all happening as we go. You write your summary ahead of time of your presentation. When you’re done with your presentation, you go into the notes and add your summary. If there are more bullet points that are appropriate, because the conversation went somewhere you were not prepared for, you add those and your conclusion like you always do. The suggestion is just to have something readily, because you know where you’re starting.

AKI: As far as AI tools, AI tools get standards meetings wrong consistently in my experience. I’m not super excited about trying to rely on that. Not to mention, ISO says they don’t belong in minutes or that kind of thing. So but more importantly, this is something you should have already that you can add to. So it is contemporaneous, the idea is not somebody coming in later and then deciding.

WH: Okay. That realtime aspect of it resolves my primary concern. Thank you.

RPR: Okay. Yeah, I was going to say, I think we confirmed it with WH, but we’re talking here about the in-line summaries and conclusions that already go into the notes. So there’s no question of any review process being bypassed. And the point I was going to add, is that if we did not do this, if we did not own the message, and have the most, the most expert people who were in the conversation define the summary, then we are missing the opportunity for them to, to instill that level of accuracy and review, because if our notes our missing the summaries I fully believe that other people will rely on all sorts of different nondeterministic tools to make guesses that will often be wrong.

SHN: I think the use of AI tools to be able to do summaries is still a very big discussion. I think it is up later on. And we’ll have to look at it very carefully. AKI mentioned the ISO rules. And a few other rules are coming out. Perhaps for the next plenary I will bring a clear indication of what is ideal there.

WH: I did not mean using an AI to publish official summaries. What I meant, as an alternative, was that anyone on their own could feed our detailed notes into an AI and ask the AI questions and see where the AI points them to. So this would not be an official TC39 activity, but people could do this on their own just to help themselves read the notes.

AKI: So, as SHN mentioned, not only are the summaries and conclusions there for people reviewing the technical notes, they are also used in the official minutes that get published.

SHN: So, WH it is not just going back and helping you find the summary or define it, but we already have to have it prepared and archived just through our rules and bylaws.

WH: Yeah, sounds good. I have no objections to that.

SHN: So, thank you, WH, thank you for raising those points and helping us converse this through. What is important, we’re having the particular discussion at the start of our meeting. If we can take the example or the direction of the summary and conclusions as defined in these slides and use it as this meeting continues over the next days, I would be grateful to have more feedback or just see that it works like that or if doesn’t what else we can do to help make it more doable or explain it again.

RPR: I just wanted to highlight MF suggested that he will be making a practice of writing a summary ahead of time as perhaps the final slide in a presentation. And at least this seems like a very good way, you know, of, it is an obvious place where people can remember to do this ahead of time.

SHN: Yes. Thank you, MF. I think that is a great idea. That is a great way to do it. And then you massage it as-needed. Thanks. Of course, it is important that you, that you repeat that message so the stenographer can make sure to capture it and it in the notes, so that’s where we do need it. So thanks. Any other comments?

RPR: The queue is empty.

SHN: Great. Thank you. Thank you, RPR. And as the days go on, if there are questions or somebody just wants to touch on this topic while they’re doing their summaries and conclusions, just ping AKI and any for any clarification.

RPR: Thank you. Yes. So yeah, we’ll, we will try to be diligent in this meeting making sure these get recorded. I would also say to everyone here, when we get to the point of the meeting of, of verbalizing a summary or conclusion, that is the best time to jump in. Either by updating the notes or by, if you need to, you know, normally that’s a period of silence or, to the end, you can verbally join in, because resolving these on-the-fly whilst we have all of this context in our head and it is just happening. That’s the easiest time to do this. As time goes on, chasing people to do this becomes harder and harder. Thank you. All right. I think this has been an excellent conservation.

### Speaker's Summary of Key Points

SHN and AKI, addressed the need for clear and consistent use of summary and conclusion in TC39 meeting documentation. The objective was to establish a practical approach for capturing key discussion points (summaries) and resulting decisions or actions (conclusions) in real-time. It was clarified that summaries should succinctly reflect the substance of a discussion or presentation, while conclusions should document outcomes, actions, and responsible parties. Presenters are encouraged to prepare drafts of these statements in advance based on their presentation slides, with the understanding that they can be updated live as the discussion evolves.

Questions were raised about review processes and the reliability of AI-generated summaries. It was clarified that summaries and conclusions ideally should be written and reviewed during meetings and included in the live meeting notes, thus ensuring accuracy and transparency. Preparing a draft summary ahead of time (e.g., as the final slide in a presentation) was suggested as a best practice. The discussion emphasized that this practice supports Ecma’s documentation standards and helps future readers quickly understand past discussions without parsing lengthy transcripts.

### Conclusion

There was agreement to try this framework during the ongoing TC39 meeting, with feedback invited to refine the process. Attendees were reminded to clearly state their summaries and conclusions during sessions so stenographers can capture them for the official record. The practice of drafting summary/conclusion slides in advance was endorsed, with the flexibility to revise live as needed. This initiative is expected to improve clarity, accountability, and efficiency in TC39 documentation.

A Summary: Distills the substance of the presentation and the conversation into easy-to follow bullet points.

A Conclusion: Records any decisions or commitments made in the course of, or at the end of, the conversation.

## `F.p.toString` incompat for builtin accessors

Presenter: Keith Miller (KM)

* [proposal](https://github.com/tc39/ecma262/issues/3652)
* no slides

KM: (presenting issue #3652) So I was going to withdraw this because the, I guess, should I give the context? I guess we should start with the context. Some sense that PR1948 the, we had originally believed that the expectation was that all two strings of getters should have a get prefix on them. We did not implement this in WebKit JSC. We made a PR to do that, it broke some sites. Since then we found that actually the get/set in the toStrings was optional. However, to add another fun wrinkle to that, it depending how in our internal implementation the getter is built for things we may or may not add the get prefix. My understanding of optional things in the spec you must pick one side of the optional and always take that. If you scroll down you can see the comment from MF on this.

KM: And so I guess the question is: Should—we’re also unclear if we can switch the one that have a get to not use a get for the tunnel—internal, keep going down a bit further. The last comment from MF. Up a little bit, up a little bit. Yeah.

KM: So my understanding of optional is that you have to pick one way or the other, it is not implementation-defined where you can pick any side any time you want. And so if there is a question of should we loosen this or like we’re unclear that we will be able to remove the get from the cases that do use it and we certainly, it appears we cannot add get to the missing cases.

KM: And then then there’s also another question that was bought in the thread we should discuss for polyfilling, sense this makes their life harder. We don’t necessarily have to discuss this now.

MM: I have a question. I’m already on the queue. So I didn’t understand what is optional. What are the two choices?

KM: On the name property, I guess I will just clarify again. The name property on a getter function object has to have to get prefix. That is not optional. That’s what everybody implements as far as I’m aware. The—when you two string a function, a built-in function that’s like part of provided by us or somewhere in, like W3C or some other spec, when the—they, when you two string them, they can be function and then have a get in there before the name that was originally there for the spec name. Or they cannot. And that get is optional in the spec to the intrinsic spot that adds the name properly. But we wishy-washy to it depends on implementation details. Our concern, we strongly, we know it is not possible to at the get to the ones that are missing it. But we haven’t done an experiment to remove them from the ones that do. And we’re worried that’s also going to be web incompatible.

MM: So, if something is web incompatible then the other browsers should run into it as well. What do the other browsers do? And are they experiencing the same incompatibility?

KM: I’m fairly sure, maybe someone else can correct me if I'm wrong, I’m pretty sure other browsers always put the get. The problems the sites in question don’t do behavioral testing, they do if safari expect this behavior.

MM: Oh. Oh. That's terrible

KM: It is the worst form of, of checking which is check the browser and then except the correct Behavior.

MM: Oh. Do you know, do you know why they are doing that?

KM: We don’t. We haven’t done a huge amount of investigation into why. The sites—we ran into one site that ran into which is like a New York State tax form and we were able to reach out to them and get them to fix their behavior to be behavioral rather than browser. And but the, we then later after we ended it, we ran into issues with the Russian consulate websites, we don’t know how many more we will run into that do that. We’re taking a fool me once shame on you, full me twice shame on me, and decided maybe it will not be compatible.

MM: Okay. So if there—so it might very well be if they are switching on do I seem to be on safari, then any change we make to the specs will be incompatible with the other side of that conditional?

KM: Correct. So that’s—the question is whether we should change the option, sorry, the question I’m proposing, I suppose, should we change that optional to an implementation defined at the get to the toString? Rather than an optional, which I believe, if I understand correctly, is an implementation must pick one way they are going with that optional any time that that abstract operation is executed and they cannot vary it. But perhaps I’m wrong on that.

MM: What specific built in accessor did you, what, first of all, what, was there—did you encounter this on more than one built-in accessor?

KM: I don’t know. I think they just bisected the change.

MM: Okay. Do you know which built in accessor you were running into?

KM: We don’t. Because no one did the work to implement it specifically. It’s unclear offhand. There’s many, many, many. So—

MM: Okay. So I will just state—my—

KM: Probably like a 50/50 split on the number of built-ins that have the get today and ones that don’t have the get today.

MM: I think we need more information before we as a committee can come to a conclusion on this.

KM: Okay. That’s a fair point. I guess the—well, I guess what information? Do you want to know specifically what accessor is the one in question? Because it could be multiple. It could be that like they take a handful of them and do some kind of attempt at security by checking then per browser, I guess I don’t know what information to come back to the committee with at this point. That would meaningfully effect our decision?

MM: Yeah, I mean, with, for example, non-extensible applies to private, you know, SYG, Google came to the committee with all sorts of impairment investigation to give us a very concrete sense of what the nature of the incompatibility is. And the way the committee dealt with web incompatibilities definitely depended on the concrete nature of the incompatibility they ran into. The fact these were conditional on the website was doing something conditional on Safari is really fascinating. I’m glad you led with that. If it’s—let me see if I understand your proposal. Your proposal is basically to leave the choice optional, but to have the optionality be finer grain. It doesn’t have to go, the same way for all built in accessors. You allow each implementation to choose which ones have the get, the get or set prefix and which ones do not. On their own basis. Or, or conceivably, I would guess, even on the basis of, doing—well, I’m, I shouldn’t read, I shouldn’t read more than you said. So, so yeah, I would just—

KM: It is possible, I would have to reread the spec to be 100% sure, it is possibly we still wouldn’t be meeting the spec if all built in getters did not have get, but JS created ones did have get, because that would be splitting on that optional. But even, yes, but beyond that, I’m still even asking for like, win, if we decided even if that split, is it okay, to have the split within ones provided to have the get or not.

MM: Yeah, that’s what I was trying to, I was trying to restate what I take you to be proposing. And that was what I took you to be proposing. That each implementation gets to choose which particular accessor has it, rather than to have a single optional choice that is blanket across all built in accessors. Am I getting your proposal correct?

KM: That’s right. Yeah. Yeah. But I think even if we just did the first version, where built-ins versus not built-ins, that would still be a spec change then what it is today.

RPR: We do have plenty other people on the queue to talk about this.

JHD: Yeah. I was just adding some color to what MM was suggesting. If there is a less consistent form of optionality that would address the Safari incompatibility. We could put that in but mark it as legacy to discourage people from doing that. So that the indication would be this would allow Safari to avoid a willful violation or any other web engine in the same boat, but encourage people to implement things in a consistent manner as well.

KM: Another option, a proposal would be to enumerate ones all in the state today. And have an annex B exception for those getters that like collectively all the parties that are interested in adding their legacy ones, too. To say that those are exempt from this requirement.

MF: So my reading of this, this step that says to do it optionally is that you can make this choice every time that you evaluate this AO. I do see how you can read it that the implementation has to make the same decision every time. We can clarify that editorially. The intent here is that you can make the choice independently every time. The way we do it with like legacy features that are optional, you do not get the choice every time—the choice is made once. Though those are presented in a different way than this step is. So, I’m happy to do something editorially here to clarify that.

KM: I see. The reason why I assumed it is not that way. Perhaps I’m wrong. But the valid implementation would flip the coin every time you execute this statement in the spec and then pick. That would still be valid? Which seems like it would be undesirable, which is why I assumed it was not that way. But perhaps I misread it.

MF: I think that is permitted.

KM: Okay. That is good to know.

DLM: Yeah, just to talk a little bit about the status in SpiderMonkey. We have a file, but we never did implementation work here. I believe since it is optional and I don’t think we’re setting it in with the prefix name anyway, it might already be compatible with this, but to understand a little bit further, but to say—maybe thanks to safari for investigating this. It is never great to break the web for your users. I understand the desire for empirical evidence, but our users do have to take priority over gathering evidence.

KM: To be clear it is not easy to generate (?) when possible. We didn’t find out for six months after the code change landed. We didn’t just haven’t shipped yet, unfortunately, but to clarify, the, the—what do you know, what—you guys do today? Do you do get on the JS, like user provided betters? Or is it just built in ones?

DLM: I’m not sure. I have to investigate that.

KM: Okay. I was just curious for my own edification. Thank you.

MM: Yeah. So I agree with MF's interpretation of what the language meant. When we were deciding on this, the point, the dynamic coin toss scenario, have very much agree with KM, that would be an unpleasant thing for anybody to do. So as we clarify this, I would not like language that suggested that a dynamic nondeterministic choice were a reasonable interpretation of this. And maybe even, I would, you know, if that becomes a practical issue, which I doubt it will, but if it were to become a practical issue, I would like to come back to the committee asking that there’s some way to state that it is a static choice, not a dynamic choice. So it doesn’t introduce runtime nondeterminism. Like for any given platform these choices are fixed for, you know, once a program starts running. Something like that.

KM: Yeah, you can certainly say it is fixed for a given set of inputs also. That would may be an easy way to say it. To allow it—is that accurate, MM?

MM: Except that I don’t know what inputs mean in that case.

KM: Like in this set function name here, right? For a given function name and prefix, the optionality is not, should be the same every time.

MM: Should be the same every time for a given implementation.

KM: Right. Correct.

MM: Right. Yes. I would, I—since we’re talking about revising the spec at least to clarify, I would like to revise the spec to be specific on that. Introducing runtime nondeterminism is something I want to stay very clearly away from. But with, with, with that caveat, and with MF's interpretation, if we make that, if we make that, you know, piecemeal, or add, I’m not sure what the right terminology is, fine-grained optionality, not a blanket choice. If we make that clear, does that address, KM, all of your concerns.

KM: I believe yeah. If the definition of optionality is like for a given set of enough inputs to a set operation, the optionality is defined. It is not by you have to pick for 10.2.9 5.a.i that you always have to go one way or the other.

MM: Right. Right.

KM: That would work.

MM: Good. Good. The reason why I agree about how to interpret even the current spec language is that we’ve introduced this term normative option and we have gathered together the things that are normative optional, which are the ones where you either do it or you don’t.

KM: Right. Right. That makes sense to me.

RPR: So if you want to summarize the—you’re, we, we have a little bit flexibility if you want to, open up any discussion. But—

### Speaker's Summary of Key Points

There was some confusion as to whether optional was picked once for a given line in the spec. There was some discussion around what normative optional meant and there seemed to be agreement around the idea that optional should be idempotent on the abstract operation’s inputs.

### Conclusion

The resolution reached was that was not the intended meaning of normative optional. Given this, there’s no change to the spec needed to accommodate jsc’s behavior here. Additionally, we may want to revisit this in the future and enumerate all existing legacy getters and exempt them in an Annex B addition.

RPR: And MM says good, I withdraw my ask for more information.

KM: Great. All right. Thanks, everybody.

## Spec/implementations divergence on module evaluation promises settlement order

Presenter: Nicolò Ribaudo (NRO)

* [slides](https://docs.google.com/presentation/d/1g3JGIazNuA1Tuk35t_M4qxJD8ajNsYiTcWpTrXQnEns)

NRO: Okay. So yeah. I was—specs to for some uncovered module stuff. And I found the case where most implementations don’t actually match what the spec requires. And actually, the true browsers have this behavior. And two cases here. So here I’m talking about the promises you get when you dynamically import a module. The module has some wait, at some point, the module imported is not executing and the promise settles. The three major browsers have different behaviors and different orders for the fulfilment and rejection case.

NRO: I have this case here. You can check in the repo. There are two more test cases. However, they rely, two additional cases rely on—they are not defined by 262. They are host. So for the purposes of this presentation I’m only going to go through one of them that is under our control.

NRO: This is it. So I have two modules. A and B. A imports B and B has to await some external module. First dynamic import of B. It goes to the host. At some point the host will, will return 6-2 with the module. There will be some back and forth between the host and the 62 to log off the dependencies, if any. And then the module will start evaluating. We can, there are ways within 62 to like tell when exactly a module starts evaluating through looking at dependencies. After B starts evaluating, we do a second dynamic import of A. Again there will be some back and forth between the host and 62. We can tell when A starts evaluating.

NRO: What’s important here is that Q1 was not resolved, was not settled yet. When we started dependent A. So at this point B is waiting on P1 to settle. And A is also waiting on the same. Because A was going through the dependencies and sees that one of the dependencies is currently pending. And then we settle B1. So either we fulfill it or reject it. When that happens, well if we fulfill P1, then B will finish evaluating, and move to A. In this case A there is actually no code. So A will actually fulfill. And if we reject P1, immediately both A and B will be rejected, because you cannot try/catch an import, so there is no further evaluation happening in A. But in which order—the—the test case here is checking which order the two promises are settled.

NRO: So this was spec. In case of a fulfillment. So when everything goes well, first the promise fulfills, B finishes executing, we call this a single model execution fulfilled A and B. The first thing this does with implementation B is to fulfill the promise relative to B. Then step 12, we recurse, through the module depending on B, so in this case it is A. And execute them. And these execution will cause a model fulfilled and resolve the premises corresponding to these models. In the rejection case, we do the opposite. So first in step 9, we go through the parents and records and then after recurse in step 10, in B, we reject the promise corresponding to the module. It is happening the other way around.

NRO: I tested different platforms, both browsers, server runtimes, and the CLI of various engines. And these are the results we have. So in the test case, as explained with the difference between the fulfilment and rejection case, and P1 is fulfill, ECMA requires first we fulfill the promise correspondence to B and then A. And P1 is rejected. It is first P1 and then PB. So the and the SpiderMonkey match the spec behavior. Chrome, Deno, and XS—in fulfillment rejection case, first settle the promise relative to B and then A. And Safari, Bun, and JSC, do the opposite. They always settle the promise relative to A and then the promise relative to B. So we have the case in which, well, everybody is doing something different. So my opinion here is that will be, well it makes sense the current fulfillment behavior, because evaluation, like continues bottom up. So when the bottom module is done evaluating the parent starts evaluating. So it just makes sense that fulfillment follows the same direction.

NRO: For errors, the errors propagating at the same time across the whole graph there is no observable user code between the module errors and the parent receiving the error. So either order is fine, however it would be great if fulfillment rejection behaved the same way. So I have a slight preference for changing the rejection behavior, to first always do the child and then the parent. And the proposed change updates the spec to this. And this is updating the spec to do what Chrome, Deno, and XS already do. And like the—technically, the way this would happen is just swap the two steps in the sync model rejection rejected field.

NRO: There is alternative approach. I added this slide, just a couple of days ago after talking with RPR. He pointed out that actually what we do here doesn’t really matter, because it is like, it is very difficult to actually write a test case where the order is guaranteed by 262. And it is very much tied to IO and modules and host dependent behavior. So it is very difficult for anybody to actually rely on this order. So we could also update the spec to allow this promises to settle in any order. But in success, in the case, which basically mean accepting that all browsers are behaving differently and just say so in the spec. With some of the option awarding it was—described in the presentation award (?), or maybe in this case it would actually toss a coin every time. So yeah so after the distraction. Whatever behavior, we decide to do, I will make sure that we have do a test for this and maybe a test, because it was on the table before, there is like a lot of divergence between what engines do and what browsers that embed the engines. Again, because this behavior, it is entirely to 262, it is very much at the edge between the host and the host spec and 262. And so the exact distinction in actually implementations might be like exactly the PI layer and in a slightly different place.

NRO: If we decide that we want to align our browsers on behavior, then please make sure to like actually update your browser to do it. And I will open a request for the spec. I am ready to do that if we decide to, well, to either keep the current behavior or to move to deterministic behavior proposed. If we want nondeterministic behavior I need to do more research how we would write the spec for that. So yeah. This is it. Is there anything in the queue?

DLM: For obvious reasons I would say that we have a preference for keeping the spec as is, since we’re already compliant with it. It doesn’t sound like it would hit web compatibility problems, every browser is doing something different here. But my weak preference would be to keep things as is.

MM: Yeah, I just—I would really, I would object to anything nondeterministic or introduce optionality here. My preference the same as NRO’s, which is the bottom up order. But I can see from the table, why it might be harder to get implementer consensus on that. I’m okay with the status quo which is far as the consensus is concerned which creates other implementer burden. That’s it.

OFR: I just wanted to add a data point. I looked into this in Chrome. And actually it is not that we got the spec wrong, but there is a specific bug that causes this behavior. So I want, so the intention was to follow the spec and given the nature of the bug I wouldn’t be surprised if you can write another test case, where actually the resolution follows the spec. So I would not bet that we’re always doing this thing. We could fix it on our side actually and follow what the spec says.

NRO: Yeah. Actually I had two other test cases not included in the presentation, because they rely on HTML defined behavior. And I find cases that chrome does actually does not follow the spec but in a different way. It is possible depending on the exact order of things going on, Chrome has different behaviors. But yeah, skip this slide here, because it relies on HTML behavior. So okay. So it sounds like the nondeterministic approach is not going to go anywhere. I heard from Firefox, so from Chrome point of view, it sounds like you would also prefer the current behavior because it is what you actually implement except for the bug, is that correct?

OFR: I don’t think we have a preference in that sense. I just wanted to say like—the behavior you observed don’t take this as we’re always doing it this way and thus deduce it would be easy to switch to the other way of evaluation. That’s all I wanted. We don’t have a strong position either way.

NRO: Okay. So—given that there are no strong positions either way. I actually had a slide for a temp check here about doing the change where we align the rejection and the fulfillment order. I would like to recheck. If the results are overwhelmingly positive, like say 80% in favor of changes I would ask consensus to change. Otherwise I would be happy with this, it is less effort, or one browser landed to please keep this.

CDA: Okay. So, we do temp checks we have kind of like the hardcoded values of what each reaction is supposed to mean. Do you want to take a look at those real quick and see if those are suitable. If not you can redefine.

NRO: Yeah, I think they are fine. Given here I’m not trying to do some sort of vote. Just let’s look at the results and then we will see what the consensus with the description that is already on the polls.

CDA: Just a reminder. Unless, unless they fixed this in the new fork of TCQ. Which I don’t think they have, if you don’t have it open already, and then open it you will not see the temp check. So does anyone need to load TCQ to chime in on this that doesn’t already have it loaded? I’m not hearing anything. All right. I guess we will give it a minute for people to—

EAO: Sorry. Could you quickly clarify what “positive” means in this case?

NRO: If I see many positive things I will ask consensus for changing the spec to basically do what I

EAO: Got it. So positive is for changing the spec.

![Temperature Check | Strong Positive ❤️: 7, Positive 👍: 6, Following 👀: 2, Confused ❓: 0, Indifferent 🤷: 2, Unconvinced 😕: 1][image2]

NRO: Okay. Okay. So it seems like the result is somewhat strongly positive or positive—I will now ask for a consensus on the change. But I’m very happy, if you don’t have anything and not finding anything that is more complex than other things we can then come back to this in the future. So yeah. Do we have—consensus on, let me find the slide with the spec change. On swapping the two steps nine and 10 here, the model rejected to align the rejection order with the fulfillment order? I’ll, I see that the—the poll is gone. Did anyone take the screen shot for the notes.

CDA: Yes, yes, that’s been pasted in the notes as well. MM has a +1. Nothing else on the Queue.

NRO: Okay. Thank you.

CDA: There’s also, we have +1 from DJM. And +1 from WH.

NRO: Okay. Thank you. I will 262 and come up with a request. So the clarify the request is not open yet, but I will not come back for consensus after opening the request.

RPR: Do you want to summarize?

### Speaker's Summary of Key Points

The three browsers have three different behaviors when it comes to the order of a sync model relation promise settlement. This pack has two different orders for fulfilment and rejection. And I presented two options, one is to just keep the spec as is. One is to update the spec to change the rejection odor to match the existing fulfillment order. And the third one is to just update the spec to allow both behaviors.

### Conclusion

We’ve heard strong pushback to the third option. And given that SpiderMonkey has the current spec behavior, they would prefer not to change. But they would be okay with it, if it committee as a whole decides to. We had a temperature check with large support for the second approach. So for live rejection odor to match the existing fulfillment order. And for the conclusion that we have consensus on aligning the rejection order with the fulfillment order.

## TypedArray copyWithin inconsistently responds to midstream shrinking

Presenter: Richard Gibson (RGN)

* [proposal](https://github.com/tc39/ecma262/pull/3619)
* no slides

RGN: (presenting copyWithin spec text) I’m going to walk through first the spec, and then describe the problem, and then the proposed solution. It pertains to TypedArray copyWithin which to refresh everyone’s memory is designed for copying a range of elements from a TypedArray to another index in the same TypedArray by means of manipulating its backing `ArrayBuffer`. We’ve got an algorithm that starts on step three by capturing the current length. And then processing arguments, which as you can see might run user code, including a resize of the array buffer backing this TypedArray. And then using the initially-read length to clamp the count of values to be copied based on the requested range and the earlier-captured length. On step 17, when that clamped count is greater than zero, then we enter the block that actually does work. It is independent of any further user code. But because the preceding steps might have modified length, step 17.e updates length based on the current state of the backing buffer. And then the copying itself follows. We get the bufferByteLimit (index in the buffer corresponding with the end of the TypedArray) based on the current length. Then fromByteIndex is derived from startIndex, countBytes is derived from count, and steps 17.l and 17.m here set the value of direction, where 17.m defaults it to 1 for forward iteration for copying. Except in the case where fromIndex is less than toIndex and toIndex is less than fromIndex plus count—the scenario where we’re copying a range forward such that it overlaps itself. And in that case, we have to be very careful to avoid having the byte-by-byte copying of step 17.n pick up values previously written by the loop itself, rather than from the original contents. We want to copy in such a way that we’re not going to get any feedback from prior copying. And because it is specified byte-by-byte, the best way to do that, and the way the spec chooses to do that, is this direction value. So ordinary direction will be 1 and copying forward. But in this overlap case, direction is -1 and copying backward after updating both fromByteIndex and toByteIndex to reference the end of the respective “from” and “to” ranges. And then in step 17.n as long as countBytes is nonzero, we attempt a single-byte copy. But when either fromByteIndex or toByteIndex are not less than bufferByteLimit, the loop is broken by setting countBytes to 0—and remember that step 17.h defined bufferByteLimit from the current length. So when we are iterating forward, such a break happens only after copying the longest possible prefix. But when the direction is negative, we actually encounter the condition in the very first iteration and copy nothing at all. That means for any implementation conforming with this spec, there will be an observable difference between copying forward vs copying backward in those scenarios where user code shrinks the array buffer into either the source or destination range.

RGN: And now, moving forward to the reported issue #3618, we see precisely that, but only in one implementation. So what we’ve got here is precisely that midstream resize, where we call copyWithin with an end value whose valueOf method shrinks the backing buffer. Forward iteration always agrees with the spec, taking the largest prefix that remains in both ranges.

RGN: Copying by reverse iteration, web implementations still take the largest prefix that remains in both ranges, but the spec calls for aborting entirely when that prefix is incomplete, and LibJS stands alone in conforming to that behavior.

RGN: I believe that the dominant implementation reality is the better behavior, that the detail of whether iteration is forward or reverse shouldn't result in observable effects. So the pull request that I have up, #3619, specifies precisely that. After getting the new length of the array buffer when we’re committed to doing some copying, we reclamp the count value based on that updated length. And then rather than breaking out of iteration when we’re at or beyond bufferByteLimit, we instead trust that count value and always continue until it reaches zero. The reclamping ensures that the ranges fully exist in the array buffer, and no code can execute in this block so it can’t change out from underneath us again. Essentially, we use that knowledge to determine that longest prefix, initialize everything from that, and then enter the loop with identical behavior regardless of whether we are moving forward or backward. With that, I’m ready to hit the queue and then request consensus on the change itself.

MM: I wish I noticed this earlier. For normal `ArrayBuffer`s, I like your analysis and agree with everything. My question is: does this issue arise when you have a typed array on a shared array buffer?

RGN: A shared array buffer can only grow. It can never shrink.

MM: It can never shrink. Okay. Can there be, the issue about what is observable. Right? I mean, algorithms that an implementation might choose to implement, that they are observably equivalent on an array buffer and they accomplish our intention here, might be observably nonequivalent on shared array buffers exactly because of this issue that you mentioned about no user code can run between this step and that step. But with the shared array buffer, the arbitrary user code in the other agent can between anything.

RGN: Yeah. Absolutely. And I believe that the spec relating to shared array buffers is clear about their nondeterminism.

MM: Okay. So you don’t think there is an issue that this normative change needs to worry about?

RGN: Oh, right. Yeah, with respect to this algorithm, the details of shared array buffer nondeterminism are encompassed within GetValueFromBuffer and SetValueInBuffer. Which I don’t think needs to change because this is still specified byte-by-byte. But, the sequentiality of operations is not guaranteed for shared array buffers.

MM: That’s right. Yes. Okay. That, I’m glad you pointed that out. That is the part I was missing. Okay. Great. I’m in favor.

WH: Just to reply to MM’s point, there is no change in operations in the successful case here—there is no change to the order in which it does things.

MM: Okay. So the effects on the buffer is the same. That only difference is the , you know, the bookkeeping variables in the algorithm are private to each agent?

WH: The normative change is that the current spec gives up in some cases, and we don’t want to have it give up. If it doesn’t give up, there’s no change in the order in which it mutates the array buffer.

RGN: Right.

MM: Okay. Great.

RPR: On the queue. We have support from DLM. And KM. Keith, did you want to, and OFR.

KM: I’m sorry, I should have put EOM in mine.

RPR: Yeah. And then from KM. All right. Lots of support. Are there any objections to making, for this normative PI? No? There are no objections. So congratulations, RGN. You have consensus.

RGN: Thank you. Just a final piece of commentary, I did not get a chance to verify test262 coverage before the meeting, but I will do so as a follow-up to this and make sure that we are protected against regressions.

RPR: Okay. Thank you. Would you like to briefly summarize then what we have gone through?

### Speaker's Summary of Key Points

RGN: We reviewed issue #3618 in which the implementation detail of TypedArray copyWithin iteration direction was required to be observable by the spec, but the supermajority of implementations use different and preferable behavior.

### Conclusion

RGN: We agreed to the normative change of #3619 that establishes copying the maximal prefix requested for an `ArrayBuffer` copyWithin regardless of iteration direction.

## Missing name property for `%IntlSegmentsPrototype%[%Symbol.iterator%]`

Presenter: Ujjwal Sharma (USA)

* [PR](https://github.com/tc39/ecma402/pull/1015)
* [slides](https://notes.igalia.com/p/Nouz41CnU)

USA: Hello. I’m here again to talk to you about ecma402 PR #1015. This is the new normative PR we wanted to bring to you. It's the most straightforward one I presented to the committee. Here it goes. The PR’s name is—while quite a mouthful, explains pretty much everything it does. It is adding missing name property for `Intl.Segmenter.prototype[Symbol.iterator]` object. This is the prototype object for the segment you get from dual dot segmenter and symbol iterator. Like it is an iterator.

USA: Basically, this is a single line change. However normative. It says the value of the name property of this is `Symbol.Iterator` name traitor. This is the sort of name that the changes. One thing to note it doesn’t change the web reality, but the web reality is the spec reality as SFC says. So like yeah. The name is Symbol iterator. And that is it for this PR. So let’s see if there’s any comments whatsoever. And if not, then I’d like to ask for consensus on this change.

CDA: DLM is on the queue with support.

USA: Thank you, DLM.

CDA: Do we have any other feedback for, or support for this change? We generally like to see at least two voices of explicit support for normative changes, plus one from DJM.

USA: Thank you, DJM.

CDA: Are there any objections or dissenting opinions? Not seeing anything. All right! We do have consensus.

### Summary

Due to oversight, we are missing, we were missing a name property for `Intl.Segments.prototype[Symbol.iterator]`. It doesn’t break, because of the code block, but you know, what’s it supposed to be.

### Conclusion

We achieved consensus to add this property to match web reality if this is a good enough conclusion for us, the summary, this, maybe adds to that fact that we got two explicit votes of approval. And with that, we have consensus. Thank you. Everyone.

## Freezing the Array Iterator

Presenter: Kevin Gibbons (KG)

* [slides](https://docs.google.com/presentation/d/1SHqRJDEujG3OVOxs9c3CEnXpHdkzyVrz9qUFyaXrQWA/)

KG Okay. Let me find the tab. Yes. All right. So, something slightly different. This is not quite the same sort of proposal as we usually get. It is a proposal for a normative change to the language, but it is not exactly what I would call a new feature. And I’m hoping, so I’m going to propose a specific change, but I’m hoping it is also sort of opening up slight reconsideration about how be handle same kinds of features in the future.

KG: So my thesis statement, which I suspect everyone here can agree on, is that it is currently hard to reason about JavaScript, in large part because users can mess with built-ins. In fact, for my code and the code of many people I’m familiar with, we just punt. You don’t get to punt for an engine, but writing any other static analysis tool it is fairly common to say I’m going to assume that no one has replaced `Array.prototype.map` or no one has put a numeric getter on `Array.prototype` or whatever. Once you try to account for that kind of thing, insanity results. Of course, if you’re an engine, you don’t get to do that. So insanity results. Engines have a lot of code that is only for dealing with edge cases and sort of ludicrous situations that no well-behaved code or reasonable code would ever run into. My favorite example of this is Safari’s HaveABadTime. When things are sufficiently messed up with users messing with built-ins, the engine is having a bad time and various optimizations are disabled. We can’t in general do anything about this. The fact that users can replace built-ins is a core part of the language and necessary for polyfills and it is nice to rely on in some cases. However, I don’t think it is always the right trade-off for things to be mutable. It is a reasonable default for things to be mutable. But I think we should reconsider some specific cases where that trade-off comes out the other way.

KG: And I think the place that I would like to start to propose for the committee’s consideration is, what if we made it so that `Array.prototype[Symbol.iterator]` was not replaceable. And similarly, we made `ArrayIterator.next` not replaceable. I think that this would have the result of not breaking much of anything. There might be some web combat issues I will get to in a moment. But I don’t think that any reasonable code would be broken by this change. And in particular, I think basically every user of the language assumes it is frozen already, if you’re not one of the JS engine developers or someone I mentioned earlier. If you are trying to reason about some code, you are going to assume the array iterator is frozen, and spreading an array or destructuring an array does anything other than the default behavior. So I think this change would be pretty much totally transparent to users, or in fact bring the language in better alignment with how users think about it. And it would make a lot of code a lot easier to optimize. The example that I have at the bottom of the slide, one of my favorites that at parse time, if you assume that sorry, `Array.prototype[Symbol.iterator]` is not replaceable and `ArrayIterator.next` is not replaceable, this snippet here (`…(foo ?? [])`) can at parse time be replaced with an operation like "spread if not null". You never need to actually manifest the array, even at the baseline tier, because you know that the only thing this could possibly be getting is the actual `Array.prototype[Symbol.iterator]` and the actual array iterator next. You know exactly what those things are for an empty array. If you were able to make this assumption, that these things were not replaceable, you could at parse time optimize out this additional array. As it is you can’t. And baseline tiers have to manifest this, even at the higher tiers you usually manifest the array. You can have checks that say, oh, I know everything is intact, and I can do something a little bit more efficient, but you are almost certainly going to be hitting garbage collection for an array for this snippet if it is null.

KG: So, I'm proposing to make this inconsistent with the rest of the language. Is that okay? In my opinion, yes. Yes. It is inconsistent, but what’s that quote, a foolish consistency and little minds and so on. In this particular case, the trade-off does not come out in favor of consistency, in this case, the inconsistency is worth it.

KG: I do want to talk about the probability of web compatibility risk. The most serious risk are not people actually trying to do replacement of `Array.prototype[Symbol.iterator].` It is more likely someone is likely to replace `Symbol.iterator` on a specific array. And in that case we run into the override mistake where the frozen property prevents you from assigning to that property on something derived from the prototype. I have heard inklings that this might be fixable. Which I would be delighted by. Anyway I kind of doubt this is coming up very much but I wanted to mention the possibility. And of course, anyone that is actually going to mess with the array iterator can be broken by this. This might be the case for polyfills. I haven’t actually confirmed this is web compatible. Partly because I wanted to bring up the idea that even if we can’t do this specific change, because I think that on a case-by-case basis we should reconsider existing parts of the language and more importantly parts of the language going forward, the trade-off of having the language always be mutable just isn’t worth it.

KG: So, this first point on this slide, it's important to keep in mind, especially for new features, anything that is frozen in this way cannot be polyfilled and further changes to it cannot be polyfilled. If we added an additional parameter to `Array.prototype[Symbol.iterator]` or more likely to `%ArrayIterator%.next` the only way a polyfill could implement this on a browser that has not shipped is to replace those functions, so this does limit which things can be polyfilled. In this case, it is unlikely we'll make further changes. And so, again, in my opinion the trade-off comes out in favor of making this change, but it is something to consider doing this going forward. I haven’t made this a proposal repository yet. Because I think it is just kind of a—a new idea that I wanted to cast out into the world. If people are interested in pursuing this change, I will make a more serious investigation of web compatibility and a proposal and spec text and so on. But I wanted to see if this would get me thrown out of the room before I went to all of that work.

KG: For this specific thing, it is possible that there’s other changes we could make which would be similarly valuable. But take a different form. So that they are more likely to be web compatible. So we could have the syntax or the built-ins check IsArray and then skip Array iteration entirely, which would be equivalent to having the iterator frozen, except with manual iteration. This proposal, if it is a proposal, will not necessarily take the form exactly of freezing `Array.prototype[Symbol.iterator]`, we might be doing other stuff in that direction. But at this phase, this is not a proposal, just a way we might go in which we design in the future. That’s all I got. Let’s get to the queue I guess.

MM: First of all, let me express my appreciation of bringing to the committee just an exploratory topic where you don’t have a particular thing you’re trying to advance right now. I think this particular exploratory topic the issue it raises is exactly the kind of issues that are central to JavaScript need to be discussing and figuring out a way forward. All that said, I think that the inconsistency costs are high here. And I think that the mutability costs on the implementations on the static analysis are both, as you say, very high, but they are high across the existing language everywhere. And high-speed engines already do an optimization where they, they check if—you know, if various things are the original bindings, and if so, do something higher speed, that involves cache invalidation check. What they could do, I don’t know if any engines actually do it, is to do a further check if a property is a nonwritable, nonconfigurable data property, in which case they know the value and that the value of the nonconfigurable nonwritable data property is the original value at which point you can enable the optimizations without a cache invalidation check. And in fact, this is not… the XS engine in the standard configuration where they’re targeting embedded systems, where ROM is much, much cheaper than RAM, in fact, shift in the hardened JavaScript configuration in which all of the primordials are already frozen and therefore, both the code and the implementation can take advantage of what they know cannot be changed. Likewise, at Agoric, we built in userland and primitives hardening which is a transitive freezing by property walk; and lockdown, which hardens all of the primordials to create the, the mode in which we’re operating. That mode switch is moved into the language could also bundle in fixing the override mistake if we can’t get the override mistake simply fixed across the whole language. And then, all of these optimizations would follow. Furthermore, at Agoric we make a lot of use of the fact that polyfills and customizations can happen before a lockdown. So there’s this sort of two-phase execution. Which also is mirrored in a somewhat different way in XS. Where you can run polyfills and customizations and then lock the environment down. And that gets much of the best of both worlds. So I’m really unhappy with the idea of doing ad-hoc fixes on a case-by-case basis because you’re creating a least-surprise nightmare for the programmer. They just cannot remember which ones are this way and which ones are not.

KG: So you brought up a bunch of points. I have a bunch of things to say about them. One of the first things you said, the cost of mutability are high, or Immutability?

MM: No, the cost of mutability are high.

KG: Oh, okay.

MM: As you state. I think we’re agreed on that. My point is that we’re paying them everywhere else in the existing language.

KG: Yes. So you brought up the fact that engines already optimize similar things around this. That’s true. It is also, you mentioned the possibility that they could optimize the case where these properties were frozen, and I happen to have read the optimizations in a couple of these engines and they don’t. Presumably because no one is doing that. This is—I—perhaps should have been clearer about who this is for. The benefits of this proposal do not accrue particularly to developers, they accrue to users of the web. Because engines, while they do go to some heroic lengths to do some optimizations there, the optimizations are themselves not free. And often are not practical to do at baseline tiers of the engine. So right now, the people who are paying the cost of the mutability is every user of every web page. And the people who are benefiting are the very few, very few web developers who are actually relying on mutability here. So while I agree that the inconsistency is surprising to the small number of developers who are even aware that these things are mutable at all and who wants to be able to rely on that, my thesis is that the benefit to users of the web outweighs that by several orders of magnitude.

MM: So I disagree with a lot of it. Let me just zero in on one point. What we repeatedly found with regard to—those who would like to freeze the primordials the thing that prevents them is the override mistake. Something that globally froze the primordials in a way that evaded the override mistake perhaps because it is, it brings a new mode for objects frozen in that way, would also remove the deterrent that has prevented people from freezing. So this is one of the chicken and egg things. The override mistakes prevents people from freezing so people don’t freeze, because people don’t freeze, people who probe the web don’t see the pain of not freezing and they don’t see the pain of the override mistake because people don’t freeze in order to evade it. So if we fix both, I think, that would give many people a much more pleasant JavaScript to program in, as well as a much more pleasant JavaScript for implementers to optimize.

KG: I definitely agree that would be much more pleasant. I think even in a world where we have that functionality available people wouldn’t use it. Not no one, you would use it. I wouldn’t use it, my code has to integrate with other code on web pages so therefore I will never be able to do that kind of thing. That is the case for almost all websites. Most websites of any size. There is code on that page that is owned by, you know, perhaps a dozen, perhaps several dozen different teams. For that code to interop, none of that code can really be taking responsibility for global stuff.

MM: Yeah, I’m not sure how much, I know, see there is a queue. I’ll just—

CDA: There’s a lot on the queue. We have—

MM: Okay. Okay. So, I will just say, I’ve got a response for that, but for the sake of the queue I will yield.

JHD: My response, the override mistake pretty much has nothing to do why people don’t freeze. Most people either don’t know or don’t care. I make a lot of engineering decisions in my packages for the purpose of staying robust against built in modification. And a very vocal group of people thinks I’m a terrible person for caring about that. It is fine that applications can break when that happens. These are the types of people that whenever I freeze anything they say “if any part of your program is doing that, I don’t care anymore; It is fine that it is broken”. I don’t agree with that stance, but that is a stance a lot of people seem to hold when they learn about this topic.

MM: Okay. I think I need to respond briefly. Node.js introduced a, a flag, global flag for freezing primordials that specifically I saw people try to use it and back off because of the override mistake. What we found in our own system where we are, new you know, mitigate the override mistake for particular cases is that it is still the case that when we try to use other libraries, the most common incompatibility has been the override mistake. The way you use the—the way you would use the—you know, the—a operation to freeze primordials is the program as a whole, the main effectively, would be making the decision about what kind of environment the rest of the program is in. And then the libraries that it loads would be ideally written so they could work whether the primordials were frozen or not. And except for the override mistake, almost all libraries that we’ve encounters, except for polyfills themselves, in fact do work whether or not the primordials are frozen. It has been a long recognized best practice not to monkeypatch the primordials, except for ships and polyfills.

KG: Okay. Thanks Mark. I will put together a another presentation on this topic. We have a lot to say to each other that is relevant to the design of the language here.

CDA: We have about 10 minutes left. MH is next on the queue.

MAH: Yeah, so really quick. I, my concern here is that we’re, we can’t really know what the future language evolution will bring and whether something will require a polyfill in these places or not. Particular example in this case is maybe in the future we will introduce iterators that can go in both directions and maybe a polyfill might need to replace the array prototype single iterator for that end. Maybe there are other ways, but maybe that is an approach the polyfill might need to take. That is just one example on the top of my head. This is one example I can imagine the polyfill might need to replace what you are suggesting here and freezing. So I’m concerned we are basically preventing future language evolution or making it harder for polyfills to exist for these Cases.

KG: Yep. My response is yes. That’s correct. I agree. This would limit the future direction of the language. I think it’s still overwhelmingly worth it because, you know, making every page load two microseconds faster, by limiting the design of the language is just like overwhelmingly worth it. Even though, yeah. It would limit the design of the language in the future.

JHD: I will just sort of combine mine. So to MAH and KG’s point. I’m actually on KG's side in this sense. I’m a very prolific polyfill author, and we don’t limit language design based on polyfillability. And if we can decide that we are forever not going to make changes to a thing, awesome—we ensured there will not be a need to polyfill (until somebody implements it wrong, and polyfills need to fix it, and can’t). An alternative that just occurred to me, it is not really arrays generically causing this, it’s the spread syntax used with arrays.

KG: It is both. So, yeah. Definitely a lot of it is, I think the most common use of arrays with the iteration protocol is the spread syntax. Well, actually it is probably destructuring, followed by the spread syntax. But there are a lot of other uses of array iteration. `new Set`, all sorts of things.

JHD: Yes, but we’d go for a different kind of inconsistency and address the performance desires without creating mutability questions, and finding places like that. In the same way `Promise.resolve` has a fast path if it is actually a Promise—in the same way, if it’s an Array, don’t bother looking up these methods, you just do the hard coded thing, and sure it will still go through the slower path if people are passing a Set into a Set, or spreading a Set, or whatever. But using Arrays like most people always do, it would have the fast path. Is that an approach that has been considered?

KG: Yes, if for whatever reason we don’t get with the freezing array iterator stuff, that would be a good direction to explore.

DLM: When we discussed this, we were definitely favorable about this. We think it is worth investigating. As long it is web compatible. I don’t think we would be the first ones to investigate web compatibility here.

JRL: In general, total agreement, we should do this. I want to confirm before we start pursuing this, are we sure that freezing the prototype will actually lead to performance improvements? There are often multi situations we can do that you highlighted here with the spread syntax and defaulting, but other cases where this will vastly improve iteration, in particular for-of or `Array.from` or other cases?

KG: That’s a good question. And I can’t know without being able to speak for an engine. But I have poked around the fast paths in engines for iteration. And most of them do have a fast path for when you’re touching an array and everything is intact. I’m confident that this change would make those fast paths both simpler and, you know, more reliable. Something that could be used at earlier optimization tiers, too, because they are not always using those optimizations, they aren’t always enabled at the baseline optimization tiers. Yeah, I’m confident it would make a difference in the cases the engines are not currently optimizing. Also, I didn’t emphasize this, but it is worth calling out. Most static analysis tools make a point of respecting the fact that built-ins are mutable and if the language said that these built-ins weren’t mutable, there would be more, so more opportunities for—tools like bundlers to optimize this, at built in. Now, that’s kind of a thorny topic, in principle they could just have a switch that is "assume everything is immutable", it doesn’t need to be a change in the language. But I do want to callout that I think designing the language for being easier to reason about is beneficial not just to engines, but tools as well.

MAH: There’s something in, so here about, I think it was on you, one of your slide about which kind of optimizations this enables. My—like, the parse optimization, to me it seems to be the only case if those properties are not born frozen, then you wouldn’t be able to do the parse-time optimizations, but you can only do parse optimizations if you know for a fact that the value is an array and that can only happen if, if you have an array literal. So is there—

KG: You have a lot of arrays.

MAH: Yeah, you have a lot of array literals. But like it really feels like, yes. We’re going to spread or we’re going to spread an array literal and that’s the only case where parse-time optimization would work roughly. Why is that explicitly frozen after, sorry, if these optimizations are part of higher tier optimal situations, why do we have to rely on the—on the realm inception time of frozen property here?

KG: Yeah. So you’re right, in principle an engine could have an optimization that improves codegen if these things are frozen. As a descriptive quality of the world, no one implements such an optimization. Partly because freezing things is basically never done. From my point of view, that loses almost all of the value of this change. Because for our variety of reasons, which I’ll get into a subsequent presentation, I don’t think almost any website would be doing that. They certainly aren't doing so now. Even if we fix the override mistake, I don’t think basically any website would actually make that change. So even if the engines did feel motivated to implement the optimizations it would not benefit the users of the web, because it is not happening. I will get into that in a subsequent presentation.

MAH: Could we socialize, if there is no current drawback in performance to freezing these, could we socialize with major frameworks that, and major platforms, that please go ahead and eagerly freeze these things there is a potential that the future engines might want to implement optimization.

KG: There is a drawback: freezing things is a significant slowdown. I think in fact, freezing things might turn off the optimizations that we talked about. Usually the form of the optimizations is, like, there’s a bit that is "has anyone ever touched ArrayIterator? If someone has touched ArrayIterator, turn this optimization off". And of course, freezing ArrayIterator is touching it. It is pretty likely right now a significant performance hit from doing this. And also, separately, web pages are a thing that already exists. Frameworks try to be good citizens by not making global changes. I don’t think we could reasonably ask them to make a change such that when this framework is included on the page all of the other code on the page behaves differently. Even if it doesn’t matter much in practice.

MAH: Just quickly to your point that it is a reference, I think it used to be. I don’t, I, I thought engines had fixed that—that preference penalty recently.

KG: Two separate things. Freezing things was a performance penalty, it might still be. But also, the optimizations rely on no one touching stuff—I’m not actually sure, but I believe that freezing array iterator would count as touching it, such that it would invalidate the optimizations that are currently present.

CDA: Okay. We are past time.

### Comments in queue

New Topic: (no need for comment) +1 from me, and Chrome was good with it in pre-meeting Tab Atkins Jr. (Google)

New Topic: From IDE/Editor point of view it doesn't provide optimizations for static analysis. For code completion too, because if user overrides anything, it's possible add types definition (.d.ts) for a project or a node module. (EOM) Dmitry Makhnev (JetBrains)

KG: Okay. That’s all I had. Thanks for your thoughts, all. I will have, I suspect at least an hour-longer talk about this at the next—meeting. Because I think, Mark, thank you, there is a lot of good meat to dive into here.

CDA: All right. There were a couple of comments in the queue. I just want and copy/pasted them very unceremoniously into the notes doc. So folks working on that can maybe clean those up very quickly, I would appreciate it.

KG: Okay. And then, I don’t have a conclusion because I wasn’t asking for anything. I will go back and add a summary for what I talked about. I think—Mark, if you could add a brief summary of your points, that would be helpful. I don’t want to mischaracterize you.

MM: Sure, thanks, I’m looking forward to continuing the discussion. Feel free besides the next plenary, feel free to bring this to TG3. I’m sure everyone in TG3 is very interested in discussing it.

KG: Yeah, that’s a good call. I will.

### Summary

KG: Making certain parts of the language frozen might be worth it to make code easier to reason about and optimize. This would make the language consistent, but it is in my view worth doing. One place to start would be with ArrayIterator, which is very common and rarely replaced and as such speeding it up would be very valuable. There's also the possibility of making other changes to make array iteration faster without necessarily specifically freezing ArrayIterator.

MM:

* Same performance problem exists all over the language. High speed engines already optimize many “if this value is the original value, then optimize”. The existing engine optimization strategies would do as well here.
* Object to “solving” it on an ad-hoc piecemeal basis, as the inconsistencies create an unsolvable least surprise problem.
* the only further perf benefit would follow from engines additionally testing “isFrozen” or “is a non-config, non-writable data property with original value”, which a) doesn’t require any language change or inconsistency, and b) could be applied everywhere it would help, not just here.
* Chicken and Egg Trap: People don’t freeze prototypes because of override mistake. Fixing the override mistake wouldn’t help because nobody freezes prototypes. (Note disagreement on this point).
* Fixing override mistake for language itself might be web-incompat. A new operation that implies freeze, like harden or lockdown, could also bundle in fixing override mistake, breaking the logjam for those who’d like either better defensiveness and/or a promise of higher performance. (Would still be better to fix for full language if possible.)
* Aside from the override mistake and polyfills, most code is already compat with freezing all primordials. (Long recognized best practice is “don’t monkey-patch primordials”.)
* For embedded, where ROM is much cheaper than RAM, XS already freezes all primordials. Likewise for defensiveness and isolation, Hardened JS already freezes all primordials.
* Empirical question: what perf benefit of this proposal vs testing if the property in question is “frozen”? Either would require new impl work.

### Conclusion

No conclusion

## Proposed code of conduct addition: "write your own comments"

Presenter: Kevin Gibbons (KG)

* [slides](https://docs.google.com/presentation/d/1bGwg5fEYa_q65-o-qr8nbSZs5FuDHEeawTf_xGVwk4w/edit)

KG: So this is not a proposed change to the language, but a proposed change to the code of conduct or potentially some other document. I prevented this as a change to the code of conduct, where I personally believe it goes, but there might be other opinions, this might be a change somewhere else.

KG: All right. So what’s this about? I think we can generally agree that submitting comment or a post or contribution to any forum that is under your name which you didn’t write would be considered bad conduct. I think this is broadly agreeable. I hold this is the case even if the comment was written by an LLM. Which is to say by a tool you’re using and not by you.

KG: So as someone who participants in a lot of our forums, including notably the discourse, people have been writing a lot of LLM authored comments. This is understandable: as the tools get more coherent people who are enthusiastic about them and are maybe a little bit less confident in their own writing are increasingly inclined to just let the LLM write a comment and have it make the case for something that they would like to argue for. And this isn’t currently something that we forbid in the code of conduct. So, while I have been telling people on an individual basis like "hey, I think this is kind of rude, please write your own comments", nothing we have currently covers this. I personally, don’t actually want to read comments written by an LLM basically in any context. But I should say, I’m talking about only by prose here. I think code is its own thing. I’m only talking about—I don’t want to read comments that an LLM wrote. I think that people who are doing this are pretty much wasting your time. I think that all outputs of an LLM, to a first approximation, are generated by a human typing their actual idea into a tool and then the human copy/pastes the tool’s output into some other forum, and I would prefer that the human just put the thing they were putting into the L LM into that forum. If the things they were writing is not sufficiently developed to put into the forum, then I don’t think it is sufficiently developed even after running through an LLM. I think that people who are submitting these comments, even if they have a disclaimer saying an LLM wrote it, which they almost never do, are pretty much wasting people’s time.

KG: And I think that in general, bad conduct should be forbidden by the code of conduct. I think that is what it is for. More generally, I think this is about how we interact with each other, for the broad value of "we" including all members of the JavaScript community. It is not really about what tools you’re using. I think using an LLM that you’re talking to or to prototype something is pretty reasonable. They are wonderful rubber ducks. Sometimes they can even come up with ideas you would not have thought of. I’m not an LLM hater, I quite like LLMs. So this is not supposed to be governing what your tools you’re using, this is about how we are interacting with each other.

K:G And so I have a concrete proposal for an addition to the code of conduct. Which are the two paragraphs you see here. I don’t like reading off of slides, but because I think this is important, I'm going to read them out loud right now.

KG: "Any contributions or comments must be your own writing, not the product of LLMs or other tools. Do not prompt an LLM to expand on or explain your idea and then post the output; just provide the idea itself. Machine translation is permissible, including translation by an LLM, but your use of translation should not introduce any new content." End of quote.

KG: There are a lot of people who don’t speak English and only interact through translation tools. While there is something to be said having people post in their native language and asking readers to do the translation, in fact there are several things that one can say in favor of that, I think in practice having the forums only being in the language that most readers are participating in is really valuable. In part just for things like, being able to search for topics and that sort of thing.

KG: Yeah, so this is my proposal. I have tried to write it in a way that doesn’t denigrate the use of LLMs. As I say, I actually quite like them myself. This governs, you know, what you are actually posting for other people to read.

KG: Before I get to the request for consensus. It is worth mentioning some other policies and other standards bodies have taken. I think the ISO policy is probably the most relevant since it possibly already governs us. It has a bunch of text, but a lot of the text in the ISO policy is ways to productively use LLMs, which I don’t think we necessarily need to cover. The most relevant bit for us is this snippet here, "don’t use images or text created by generative AI in any ISO content, either internally or externally". I don’t know if ISO content covers things like discourse. But because we are participating in, I forgot what it is called, our standards go through the ISO fast track, it is possible this basically governs us already. That said, I think even if it is does, it is worth writing down ourselves. And then the ACM also has a policy that says it is permitted, but must be disclosed. And then also says a bunch of other stuff. Personally I don’t think this goes far enough, like I said, I don’t want to read LLM outputs even if they are labeled as such. So yeah, this is my suggestion for an addition to the code of conduct.

JHD Yeah. So I am super on board with establishing norms that people shouldn’t use generative AI for their contributions and comments. And I say generative in the sense, if you’re just using it for understanding or explanation go nuts. They are great tools for that stuff. But I’m solidly in your camp, I also don’t want to read LLM output pretty much ever, unless I’m talking to the LLM myself. I think that, I have said this before a few times, I think the code of conduct is the wrong place for it. The word conduct has a broad meaning. That’s not really the purpose of the documents. I think that the—the part where someone is sort of knowingly or callously or intentionally wasting our time is already covered by the code of conduct. Regardless of whether they are using an LLM or not. And the point to which they are unaware of the collateral damage caused by their tooling choices is not really to me a code of conduct violation, but it is something we still want to discourage. And separately, I suspect, 100% of the people the policy is for will not actually read this until we link to it by way of explaining why we hid their comment or something. I think like and even translations can change the meanings of things. There’s a point on the queue later about that. So I certainly agree that we shouldn’t be discriminating against people because they don’t speak English or any other language. But I think it would also be fine to say just post in your native language and we will translate ourselves with all of the tools we have available. I have in fact communicated on the JS Chinese interest group and post English comments and I’m translating on my end I do not understand mandarin. There are a lot of approaches, I think the logistics can be discussed separately.

KG: I would be interested to hear more about what you think makes something appropriate for the code of conduct or not. It feels to me like this really falls in what I think as the code of conduct?

JHD: I know this is going in the notes, so you know, please don’t hold me to this; I have not thought it through in detail. To me the CoC is more about behavior and the social contract. LLM usage is a new enough thing that it is not like a wide, like, There’s a lot of things that are widely accepted to be rude or unseemly or unfriendly, and generally codes of conduct try to cover those things (and with perhaps expanded definitions from historical ones to to be more inclusive). In this case, if we didn’t want somebody to use Google translate back in the early days when it didn’t do that great of job for the same reasons, that wouldn’t be a CoC thing that they are trying to translate their idea—it’s just “this tool causes problems—please don’t use this tool.” You’re not behaving badly by using the tool, but we want you to use a better one so our time is not wasted. That applies here withLLMs. Maybe in a few years, LLM-generated content will not be distinguishable from human-generated content. At that point, it would not be bad conduct to use the tool if the readers’ time is not being wasted. Right? In other words, the CoC is about “are you being a jerk?”, not “are you doing something I don’t like”.

KG: I guess, yeah. I agree that it should broadly be like, are you being a jerk. But I think that’s a super subjective thing, which is why we have a CoC at all. There is a lot of behavior which many people consider reasonable ways of interacting with each other which is forbidden in the code of conduct. Precisely because—the whole reason we have to write it down is not everyone agrees with it. That is okay. It is okay that people have different conceptions of what is rude or not. But personally I think posting LLM output, especially LLM output that isn’t labeled, but even it is, should be considered rude.

JHD: I agree with you, but there is no where near a societal consensus at most regional scales that that is the case yet.

KG: Okay. Okay. So, the issue is less that well, yeah, for you it is more about—if this is something that wouldn’t be writing down an existing norm.

JHD: Yeah. Like the dust hasn’t settled on the social contact around LLM usage yet. I’m in the same bucket as you when I read LLM content from other people, but I think it is premature to put it in the CoC. But let’s put it somewhere, and link to that place, and tell people not to do this.

KG: Okay. Sounds good. Let’s skip to the queue.

TAB: Yeah. I think this is really good in the code of conduct, actually, specifically using the argument that Jordan was just talking about. Where like the, behavior we’re trying to legislate against in code of conduct is don’t be a jerk in various ways there. Is not a single person who is posting LLM content who believes they are being a jerk. They are thinking they are doing something meaningful and useful to contribute to here. They are extremely wrong. There is nothing you can get out of the comments that we spend worth to time reading. That is part of the point where we need to make sure this is captured well. This is considered antisocial behavior by the committee. We don’t have to call it being a jerk. But it is antisocial. It is doing things that do not help the committee’s work, and in fact hamper it by causing us to waste time looking at it in exactly the same way that spam does. More stuff that just nobody needs to be reading or should be looking at, we want to dur courage people from looking at, even if they don’t believe or understand at the moment why that would be the case. Someone just touching on social norms for a bit. Like things like this are part of what establishes the broad social norms for everybody else. I think it is perfectly fine to, you know, take a bold step in sometimes. We can always change our mind in the future if things change. We don’t have to be neutral right. Right now in this moment, we know LLM output is garbage for technical discussion. We should take that stance because it is a, a valuable guard to put in place against anyone trying to usefully contribute. If they want to contribute and have ideas I would like to hear their ill-posed ideas, many of us got better at it over time. That’s perfectly acceptable. To read some beginner’s idea and iterate on it to make it good if necessary. I do have a little bit of a bias against LLM translation just because LLM-based translations more likely to mutate meaning than other forms of machine translation do. But it is a small enough issue that I don’t care very much about it. I’m happy to leave that out. But the LLM generation text sounds very good. How you phrased things in your proposal sounds pretty great to me. I would be happy with that.

NRO: Yes. I don’t know. Where think this would be in the code of conduct or not. But we need to have this. I’m happy to hear people say we need the have this. But just not put this anywhere. We need the have it in a place that lets us point to new motivation. So, in a place where any delegate can like, that moderates their own proposal repositories need to be able to point to the document where it is at, and say, hey, I’m hiding your comments because this document gives me the power to do so. And like it doesn’t matter whether it is in the code of conduct or in a "ai-policy.md" that is filed. But the needs to be some where it is explicit and that we can rely on.

CDA: I’m next on the queue. And I agree with those comments. Our topic is, it is decouple the guidance from where it lives. I don’t want to get hung up it belongs in the COC or not in the COC. It is a question we need to answer, don’t get me wrong. We’re looking at a slide of a proposal addition. So it can be in its own document, maybe it goes in the COC. I don’t know, but if we focus on what we want the content to be, the permissible use of generative AI to be. We can come up with that, and then go on once we have that language exactly how we like it, we can decide what is the best place for that to live. Keith?

KM: Yeah. So I guess my question is like, I think, I would assume, I haven’t really tried LLM for translation, but I assume it does change the meaning, potentially of what you’re saying. Maybe this is wrong, so I just want to make sure that we’re okay with that, like, and—I guess, I guess, I didn’t put this, as my topic, but also I suppose, are we considered something, like "don’t prompt an LLM to explain your idea and post the output, it requires you to go back through the generated output and refine it and distill it". So it shouldn’t just be the raw output. I can imagine using it to edit your thing, that is worth the distinction. And leaves an artifact that is an LLM, is this person going to get banned because they had it check their grammar. Because based on what is stated here would not necessarily, seems like that would not be permitted under the code of conduct to have it using like—I don’t know exact way to phrase it, but the general idea.

KG: Yeah, let me talk about both of those. So for translation, they’re pretty good. They are on par with a not very good human translator. They’re not approaching the level of a skilled human translator, but they’re pretty good. The thing I mainly mean to capture here is like, if you just ask it to translate your thing, that’s fine. If you ask it to translate and expand your thing, that’s not fine. I’m not super worried about trying to nit-pick like, did this come out of an LLM or not. I think that’s generally not possible. Humans and LLMs have a sufficiently large overlap in their style that you can’t just look for em dashes or whatever. I’m more concerned about, and this is part of why I wanted to go in the code of conduct, I’m more concerned with governing what people do, and I want people to feel comfortable asking for a translation and not feel comfortable asking for a translation and also refinement.

KG: As to the question of using it refine your grammar, or like whether we say that you’re allowed to post the output if you go through it yourself and clean it up. I don’t like those things. I really don’t like the idea of allowing people to sign-off on the LLM’s output and say “I participated, therefore it is good”, because my experience is that, especially people who aren’t super experienced with an area—not all people, but many people—have an absurdly high degree of trust in the LLM’s output. They sort of ramble into it, and the LLM will generate an output, and then they as an non-expert will look at the output, “yes, yes, that’s what I was getting at, that is great!”. And it is incoherent in a deeper sense. I really don’t want people to do that. And I don't want the guidelines to suggest that kind of thing is okay. I do want to capture it is okay to talk to an LLM. I just don’t want people to put the LLM's output, even if they gone through and cleaned it up themselves.

KM: Quick thing, sorry. So, do we have thoughts potentially on maybe extending the second section to say like machine translation is permissible and also machine proofreading is permissible? It sounds like that was a consensus thing, calling it out might be useful. I can imagine reading the other part, and say, I cannot put it through an LLM except to translate it.

KG: Yeah. So I’m okay with something in that direction. But I’m worried about is people taking the thing and putting it in an LLM and saying, you know, “hey, please clean this up for presentation to TC39”. Which if you do it, it will like rewrite it pretty substantially and introduce a bunch of supporting arguments and stuff that you didn’t make. So I really, really want to make sure that we don’t encourage people to do that. Maybe copy-editing that—yeah. It is possible that we can find some way of making it clear that like specifically having it check your grammar and punctuation is okay, but not having it reword sentences or something.

CDA: Waldemar?

WH: I have a few items here. One is, how would we enforce this? Here’s a potential scenario: I’m one of those people who have been using em dashes in writing for decades. I’m afraid that somebody might report me to the code-of-conduct committee because I used lots of em dashes in a submission and therefore they think I used an AI. How are we enforcing this?

KG: That’s an excellent point. There is not any objective way to do this. The cases that I have encountered have largely been pretty obvious, and also people aren’t usually going out of their way to hide it. I don’t think many people are being malicious about this, they are generally not aware this is something some people consider rude. So what I have been doing is asking people not to post LLM outputs in cases where I’m pretty confident it is what they’re doing. And the responses I tend to get are: Either like, “oh, sorry”. Or like “why are you a hater, LLMs are great”. Or whatever. Not “I’m not using an LLM”. Perhaps that is an argument it should not be in the code of conduct just so that it is not something that we have to worry about how to enforce. But, as much. Yeah. I agree this is an issue. I think it is more serious issue for something like academia where there are more serious consequences. Where here, I I think we would just be hiding people’s comments, pretty much.

WH: Yes. My other item is that views differ on what kinds of LLM usage is okay. Cases that frustrate me include when LLMs expand a small amount of text (the prompt) to lots of bland text. I don’t want people to use LLMs as a text multiplier.

WH: Note that, in order to discourage such text multiplication, we should avoid requiring folks to write boilerplate. Lawyers are dealing with that—there is a lot of boilerplate going on in legal briefings, which encourages everybody to use LLMs. Nowadays almost every day lawyers get into trouble for it. In fact, I have seen last week that even U.S. judges are getting into trouble for writing their decisions using LLMs and hallucinating things.

WH: I don’t have as much of an issue with using LLM for things like grammar cleanup or for things which do not expand the size of the text. So if you want to use an LLM to take a large rambling letter and compress it into a small one—be my guest, that’s fine with me. I don’t know if we all agree on that. But I want to point out that I think one of the main issues is just having to wade through a lot of bland text rather than text which expresses ideas succinctly.

KG: Yeah, definitely agree that is the core thing. And maybe something in that direction can be useful for thing thing we were talking about on previous point about, how do we clarify that it is okay to check your grammar. Maybe I can come up with something that is, like, it is okay to have it check your grammar, but the output should be basically the same size or smaller than the input. If the output is notably larger than your input, you’re not just having it check your grammar. Or something like that. And as for the specific example having it compress larger text, I think I want to still rule that out, just because I’m really worried in that case that the LLM will still introduce its own ideas that the human didn’t. But probably that is a lot less likely in that specific case. So maybe that would be okay.

CDA: I just wanted to reply to the comment made about, don’t want to be reported for a COC violation because you’re using em dashes and the like. We’re not going to enforce like, you know, prohibitions on usage of certain unicode characters, and certainly that alone is not enough to suggest somebody has Used, generative AI for their contributions. And if somebody is submitting dubious violation reports about somebody just because they’re doing that, I mean that action in and of itself is a code of conduct violation. So I wouldn’t worry too much about what, what—you know, em dashes word is inserting when you type double dashes manually or anything of that nature. Mark.

KG: Can we get a time check?

CDA: Yes. We have less than, we have like a minute and 10 seconds.

KG: Okay. So, we’ve got a couple of things in the queue. Mark says he appreciates the acceptance for translations. I think that it sounded like people are broadly supportive of this text existing somewhere. I heard Jordan doesn’t think it is a good idea to be in the code of conduct. And several people didn’t have strong opinions. Personally I lean towards having it in the code of conduct. But it is not super important it be there precisely. We heard ideas for additional things or clarifications we might have. That could come back at a later meeting or we could discuss on GitHub. But I wanted to see if we can get consensus on something we can land on now and iterate on further. So a proposal for the committee is to take the text that is currently on your screen, put it in a new file that is called AI_policy.md in the TC39 how-we-work. And in the code of conduct we have a section that is like "see also our policy on use of AI tools". And then link to that separate document. And that also gives us a good place to expand, like, put in clarifications for proofreading and so forth. So like to call for consensus for that specific change, unless someone wants to bikeshed it.

JHD: That sounds good to me, I wanted to add also, for example, GitHub Copilot, will look for a document in the .github folder (that will probably cover the whole org) and include instructions to embody the spirit of this. And other AIs may have similar mechanisms that can guide them towards the output we want, or to warn the user that this policy applies and linking them to it or something. So I love the idea of putting in a separate file for now. If one of the future iterations puts it in the CoC so be it, but we can talk about that separately.

WH: Before it goes final I would like to iterate on the text of it, to make sure using AIs for copy editing and such are permissible.

KG: Okay. Well, I’ll open a PR to how-we-work. And I’ll put the link in the delegates channel when I get it. And maybe we can work on something there. And are people okay with landing it once everyone active in that thread is happy with it, assuming that the only meaningful change between now and then is clarification on explicitly permitting use of LLMs for checking grammar and so forth?

KM (on queue): ok on this and circling back with future feedback (eom)

CDA: My suggestion would be to create a PR with the text and then the folks from that thread and everybody here who is interested now or in the future we can iterate on what the text should be with review comments and all of that. Does that seem reasonable?

KG: Yep. Mostly I don’t want to have to come back to committee with a second thing.

WH: It would be nice to let all of us know what we decided on.

KG: Okay. Okay. That’s a good point. Okay. I will do that. So, some bike shedding, but we are in favor of the idea. Sorry.

### Summary

KG argues that posting LLM outputs for other people to read is something which should be forbidden by the code of conduct, on the grounds that this is mostly a waste of the reader's time. ISO policy may or may not govern and generally forbids use of LLM outputs in ISO materials. JHD agrees with the sentiment but does not want this in the code of conduct specifically. TAB thinks it should be in the code of conduct. WH wants to ensure that use of LLMs for checking grammar is acceptable, and raises the point that the main concern is when LLMs expand a small amount of text into a large amount of text.

### Conclusion

Consensus for having this included, but not in the code of conduct at least for now; tentatively in AI_policy.md somewhere which is linked from the code of conduct. There’s some bikeshedding around the precise wording—in particular, people want to make sure that use of LLMs for clean up grammar and so forth is permitted.

## `Math.sumPrecise` for Stage 4

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-math-sum/)
* [spec PR](https://github.com/tc39/ecma262/pull/3654)

KG: So, `sumPrecise`. Stage four. This proposal I don’t have slides for because stage four is, everything is done. This is not a request for further feedback. But just a reminder, it is a proposal to include a method called `Math.sumPrecise`. That gives you numbers and gives you the sum. It gives you the most precise sum possible, given that both inputs and outputs are floating point numbers. It is specified as if you were doing arithmetic on real numbers, but obviously implementations don’t work that way.

KG: Speaking of implementations, there are two in stable Safari and stable Firefox. At least I think it is stable. V8 has not shipped, I don’t think they have implemented. But the requirement is two implementations.

KG: There is a PR to the specification, which the editors haven’t all signed off on. I’m one of them, I’m happy with it. It is pretty straightforward. It is the same text that was there previously at the earlier stages.

KG: So, I believe, requirements for stage 4 have been met, or requirements as we typically interpret them. So I would like to ask for stage 4 for this proposal.

WH: I support stage 4.

CDA: We have a plus one from WH. Also from DLM. Also from Dimitri. Keith is on the queue.

KM: I think technically, we have not shipped this in a stable release. But I’m fairly sure, it could be the notes were wrong? It might have been a mistake on, the notes. I think that was just the implementation of it rather than actually shipping it, which—probably should have been clarified. So our bad. So the patch to enable it by default landed on July 24th. So—

KG: Yeah. Okay.

KM: But, we have not shipped it yet. But yeah. It is implemented. So I think it is fine.

KG: I don’t think we expect any compatibility issues.

CDA: On the queue with an enthusiastic support of plus four.

KG: Stage four, I take it.

CDA: That’s an "EOM". So we may never know what the true interpretation is supposed to be.

KG: Okay. Is anyone from Chrome capable of speaking on this? Since they are the ones not yet implemented?

OFR: Yeah. I can. Certainly no objections. It is on our backlog basically.

KG: Yeah. Okay. Sounds like we have consensus then. Thanks very much.

CDA: Thank you.

### Speaker's Summary of Key Points

* The `Math.sumPrecise` proposal is shipping (or almost shipping) in Safari and Firefox and has an open PR to the specification, and as such meets the requirements for stage 4. Chrome does not object to it going to stage 4 prior to their implementation.

### Conclusion

Proposal has stage 4.

## [Temporal](https://github.com/tc39/proposal-temporal) normative PR

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/tc39/proposal-temporal)
* [slides](https://docs.google.com/presentation/d/1xaHux5EvR9zXQWnnr0r76ffCdDejmy383XrkrmSPStk/edit?slide=id.p#slide=id.p)

NRO: Hi. Yeah, I’m presenting for PFC, because he couldn’t be here at this meeting.

NRO: So temporal normative change. There is one open request that we’re asking consensus for. It was opened based on some feedback from V8 which was implementing the proposal. You may know that V8 is separating the actual Temporal logic from the JavaScript interface by using a Rust implementation for the logic. So this causes difficulties with the way the proposal is currently specified. Specifically, in some Temporal methods, like, for example, all of the `until` methods or, I believe `durationToString`, but you can check the pull request, there is currently reading from options with options back. And the thing, first alphabetical order we get the property from the object. We cast it to, like, proper type. So and, by cast, I mean, cast to a javascript primitive, like, for example, casting to string. But for some of these options, they have some sort of enum values, like, for example, there are a bunch of options to accept a unit string like seconds or days. And by casting we also check what is the enum value corresponding to string in there and do some validation of the string.

NRO: The pull request changes the get-cast-validate, first get all of the casts and then do the API addition at the end. Notice there is already some validations happening at the end, it is called validation, which is validation that requires putting together multiple option values to check if they are correct or not. And the observable effect of this change is that in some cases an error might be delayed. So maybe you would see an error that, before this request, it was after the driver. So you may get a different error or you see a getter that is triggered by the error rather than not being triggered because of the error.

NRO: Like, well, this is a concrete example of the change that is before the request. We have this PlainDate API. We pass like a large option, and what it was doing is getting the largest unit, casting it to the unit enum and then checking the unit, in this case, plain date second is not unit. PlainDate starts on the dates in this case, it is, at this point, while with the change, we would get largest unit and cast it to a unit. So the second for a valid unit, and then the same for the next unit. And check that the units are valid for this specific method. This is an example, in the pull request there are a couple of methods with this change. Any questions? I see the queue is empty.

CDA: Keith?

KM: Yeah. So I guess if we’re going to change the order it, why not change—I haven’t looked at Temporal too much, but so maybe I’m just not understanding something, why not do the casts after all of the gets, do all of your gets, load the properties, and cast them to the units? do the casts of the unit invoke other JavaScript or the string.

NRO: No. Casting it, for example, invokes ToString.

KM: And then when it is casting to, checking it is a valid unit, it is checking presumably some list.

NRO: Yes. That is correct.

KM: But the list in theory. Yeah, I don’t really care too much, I guess I’m trying to find a way to check if there is a valid unit part in the validation half, rather than the other thing. Is it because it is broken down that way and a smaller PR.

NRO: If SFC is on the call, feel free to jump in, because you are in the pull request. But I understood there are two reasons here. One it is just the much noter or change and requires fewer changes to the proposal rather then moving all of the validation to a different place. When this issue was first proposed, the champion group understood that the proposal was to move all of validation, there was skepticism because of the change would be. And the second, more practical question, this request came specifically from the V8 implementation, what is happening there, there is the Rust library that has a unit type. And the JavaScript interplayer has to get the options and get the cast unit type and then pass in it elaborate and then elaborate is checking it is a valid unit rather than passing a generic string so it doesn’t have to pass the JavaScript string to the string indeed, whatever rust uses. But just the string.

KM: Got you. Okay. Yeah, that’s fine. It makes sense. I guess.

CDA: Okay. No one else on the queue?

NRO: Hey. So if there is nothing else, yeah, I would like to call for consensus for this request.

CDA: Support from DLM.

NRO: Okay.

CDA: Any other voices of support for the normative change? plus one from OFR from V8. All right. You have consensus.

KG: Sorry. Sorry. I—should have gotten on the queue just before this.

NRO: Yeah.

KG: I think this is potentially relevant to other proposals that use option bags. I’m about to present one of them. I don’t want to present the whole thing right now. I just—yeah. Keep this topic in mind for the next topic, I guess.

### Speaker's Summary of Key Points

NRO: Okay. Thank you. I have a summary here. We discussed the normative changes in broad proposal which slightly changes the order in which some options happens to better align with V8’s implementation needs.

### Conclusion

we have consensus for the change.

## [Uint8Array base64+hex](https://github.com/tc39/proposal-arraybuffer-base64) for Stage 4

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-arraybuffer-base64)
* [spec PR](https://github.com/tc39/ecma262/pull/3655)

KG: So, similar to the last item, I have another stage 3 proposal that is implemented in JavaScriptCore and in SpiderMonkey. I believe it is shipping and has been for a minute in Firefox, although not 100% certain. I guess probably not in Safari. And again, not shipping, but in this case, it has been implemented in V8. And I know they are planning on shipping to stable in a month or so, a little bit over a month. In addition, the specification PR is open and all of the tests and everything.

KG: But before I ask for stage four, I wanted to talk about the previous topic—or the relationship of this proposal to the previous topic. So this proposal is one of the first things that we would have in Ecma-262 that has an options bag. Depends if you count error cause, but that one wasn’t relevant to this topic of how do we handle order of reading properties versus validation. In particular, this proposal has now a `lastChunkHandling` option and an `alphabet` option. `lastChunkHandling` is for decoding and alphabet for both. The way that I have this specified right now is that we read properties, and then, in this case, we are not casting, we are just confirming they are a specified type. We don’t cast to string in this proposal. We read the `alphabet` option from the bag. And then check if it is valid and then throw if not. And then read the lastChunkHandling. This is how it has been specified in the lifetime of the proposal. Keeping with general philosophy of reading and validating options interleaved. Also not in this proposal, but in some other proposals like the `Iterator.zip` proposal, there are some cases where we wouldn’t even read an option unless some other option was present—for `zip` that is the padding: you don’t read the padding unless you’re in the mode that uses the padding.

KG: So, I’m asking for consensus for the proposal as it is. Which has some amount of validation. You could consider it casting if you would like. But some amount of validation/casting for options interleaved with reading those options. And in light of the topic that we just discussed, I want to make sure that is still what we’re planning to do for this kind of thing going forward. Yeah. So I would like to talk about the options case and then do the stage four thing.

NRO: Yeah. So when I first learned about the Temporal change, my first reaction was like, well, we should just have this presentation for setting precedent about how we handle option bags. But then I realized that Temporal change is much more narrow then change from option bags were. And even Temporal is still doing get, if is not on the list, the difference is that in Temporal there are multiple versions of the same function. Like for the `.until` example I had, there is `PlainDate` and `ZoneDateTime.until`. So all of these `until` functions are in the same get checking this list checking this list validation. And then the difference is that throwing that error by way of, in the case of the unit was not correct. And then, after doing all of this validation, it was doing a per-function specific logic that was, for this specific version of the until function, actually those three units are not valid and a range error giving us one of the two involved units. But the base logic is still the same as what you’re showing here on-screen.

KG: Okay. Great. I’m glad to hear that. I’m comfortable going forward with this as is in that case. But I guess, yeah, I’ll see.

JHD: Yeah. So if I understood NRO’s comment correctly, then maybe the thing I want is already the case. I’d like all options bags to be the same, in the sense that like, not that this is the way that we would care about it, but I want there to be a single abstract operation that everything with options bags uses, except for a finite never-to-grow list of exceptions. It is fine if error cause is different—it needs to differentiate absent and undefined; it is fine if there is legacy stuff we cannot change, and similarly speaking, but whatever logic goes in for base64, I want everything using options bags after this to use that logic if possible—and I say that not knowing what the use cases are. Maybe I will change my opinion on an ad hoc basis, but based on all of the proposals I know coming with options bags. Is that the precedent that you’re intending to set?

KG: To the extent possible, yes. So in particular, there is the GetOptionObject AO, which was previously in Temporal and 402, which we use, and then we do the lookups using get. And that’s all the same. The difference, I think, is different proposals will mean a different thing by validation, and Temporal means a particularly complex thing, where there are values that are coherent and values which are incoherent, and separately values that despite being coherent are out of range for this particular method, which isn’t something that is relevant here. So I think the broad strokes pattern of, you get options object and then do a get and then check that the value is coherent and then do another get get and check the value is coherent and so on.

JHD: Right. And validate them as much as possible in that moment, basically. And if you need to do further validation later that’s fine.

KG: Yeah, basically.

JHD: Okay. Cool, that sounds great to me. Yeah, I would love to see this continue to stage 4, and am still fine with the Temporal change. Awesome.

CDA: Steven.

SHS: Yeah, I’m a little bit less clear about the details of all of this. But no one's brought up the discussion from two months ago about WebIDL may be relevant, so I wanted to see if it was relevant.

KG: Yeah. I think if we are doing any sort of WebIDL that specifies types we are going to have to be careful to ensure that the way that types are handled in the IDL match up with how we are using them in the language. But I think that we want to design the language first and then design the IDL to suit our needs rather than the other way around.

KM: I think this would fit onto, in the same model of like you can think of these base64 URLs, like the valid inhabitants of the types for like, types loosely here, of like the enumerations of possible values, your IDL would say, like these are, in the Temporal case it would have had all of the units. Once you narrowed down to all of the units in the generic way, and did it for your operations in the IDL spits out and doing the checks afterwards and all of the the inhabitants(?) are base64. You’re doing kind of the same thing—enumeration.

KG: Yeah. That sounds right.

DLM: Yeah, if we’re done talking about options bags. I throw my support for stage four.

CDA: Great. We also have support for stage four from KM on the queue. As well as MM with a +1,000, that is above our previous magnitude of +4.

KG: Okay. Well, hearing explicit support from several groups and no objections—Oh, sorry. I meant to ask, again, I want to confirm that Chrome is okay with this. I assume they are since they are almost shipping. If someone from Chrome is able to say that they are happy with it.

RMH: Yes. Yes. Yes. We are okay with that. Thank you.

KG: Okay. Thanks very much. All right. Going to take that as stage 4 then. Thanks very much.

### Speaker's Summary of Key Points

* The base64 proposal is in Firefox and Safari and implemented in Chrome, and has an open PR to the spec. The proposal as currently specified does get-validate-get-validate (as opposed to get-get-validate-validate) for options read from options bags; Temporal does something similar but also does more complex validation (that the options are in range, not just coherent) after reading all the options. The committee is happy with the proposal as specified and intends that we follow the pattern in this proposal for future additions which use options bags.

### Conclusion

* Proposal reaches stage 4.

## Iterator Sequencing for Stage 3

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-iterator-sequencing)
* [slides](https://docs.google.com/presentation/d/12zBgwq7qSpf-GXySU0q6t46vTdYAyFxaKW26J8D5IiE)

MF: So, this is iterator sequencing. Remember that iterator sequencing is a stage 2.7 proposal. It defines one new method on the Iterator constructor called `concat` that takes 0 or more iterables and yields all of the things they yield in order.

MF: The big change since last time, remember we discussed last time that Mozilla made a couple of requests for trying to make behavior match `yield*`. We had made a couple of changes in that direction and identified more, and we identified that even if we made more changes it still wouldn’t allow an implementer to implement in self-hosted JavaScript using `yield*`. So we decided at the last meeting to back out those changes that were going to in the direction of `yield*`, because overall they were negative for the proposal other than the perceived benefit that we might be able to self-host them using `yield*` in JavaScript.

MF: So that’s what we did. Made this pull request, number 26, that was backing out previous pull requests. It simplified some things. Also, the tests kind of landed and unlanded, they shouldn’t have landed, but they were backed out. Now, they are the way they should be. So the tests are up-to-date. I think we are finally ready for stage 3. That’s my whole presentation.

CDA: DLM.

DLM: We support stage three.

CDA: Do we have any other voices of support for iterator sequencing stage three?

MF: It would be great to hear at least a second voice of support.

KG: I support.

CDA: Support from KG.

NRO: I also support.

CDA: Okay.

MM: Support.

CDA: From NRO and MM as well I heard. Not seeing anything on the queue in form of objection or dissenting opinions. I believe we have stage three.

MF: All right. Thank you.

### Speaker's Summary of Key Points

* Proposal is no longer trying to match `yield*` for ease of implementation, as it had undesirable effects on the proposal and also did not succeed in easing implementation.

### Conclusion

* Proposal advanced to Stage 3.

## Upsert for Stage 3

Presenter: Daniel Minor (DLM)

* [proposal](https://github.com/tc39/proposal-upsert)
* [slides](https://docs.google.com/presentation/d/15J_tgYqrh-aPat0klS78BcDVGYJ88HOCC_SBsYkR4QY/)

DLM: Okay. All right. I guess I’m ready to go, so presenting on upsert, hopefully for stage three. Brief reminder of the motivation or problem we’re trying to solve. Basically it is when you have a map and not sure if the key is already present and you’re doing an if statement to see which behavior to use depending on whether the key is present or not. Proposal solutions, add two methods to map and weak not. One is get or insert, which will search for the key in the map, and if found, return the value. Otherwise it will insert the value in the map and return that. And we have a get or insert and computed, which does more or less the same thing, but it will call a callback function and use the result of calling that callback function.

DLM: So last time it presented this was in April. Work since then has largely been around testing. So we actually started with a nice number of tests that were written by students of the University of Bergen. They were exported and cleaned up in a test 262. And then loaded the test plan, and new tests were written. These were moved from staging where we landed the original SpiderMonkey version into built-ins. So now all of the tests are in place. And with that, I would like to ask for consensus for stage three.

CDA: Okay. I would just like to state for the record, I’m very much enjoying the… capybara riding the alligator?.

WH: It is probably a caiman.

CDA: May the record reflect that it is a Caiman.

CDA: We have plus one from MF. Support from KM. Support from Dimitri. Now, we have a question from Mark.

MM: Yeah, so in looking at the—can you put the API back on the screen?

DLM: Yeah.

MM: So `getOrInsert` clearly would not be a meaningful thing to add to sets. But `getOrInsertComputed` does seem like it would be meaningful. I’m not actually asking, I’m not requesting you to put it, to add it to set, I’m just wondering if that was considered and rejected for any particular reason?

(overlapping)

MM: Yeah, could not hear you. There is audio collision.

DLM: Go ahead, Keith.

KM: How would you get the key without building? So like per set—

MM: You would have to—right. The callback function would simply be a conditional execution, and that answers my question. That is clearly very far from the intent of this. I withdraw the question.

DLM: Okay. Thank you. So back to capybara picture, it sounds like we have support. Are there any objections to stage three?

CDA: Nothing on the queue. I believe you have—sorry, go ahead.

DLM: I was just going to say unfortunately, I didn’t prepare my summary or conclusions in advance but I will put those in the notes right now.

### Summary

Presented the work accomplished since the last presentation in April 2025, which involved merging existing tests in Test262 as well writing some new tests according to the test plan. Asked for Stage 3.

### Conclusion

Proposal advanced to Stage 3.

## AsyncContext web integration update

Presenter: Andreu Botella (ABO)

* [proposal](https://github.com/tc39/proposal-async-context/)
* [slides](https://docs.google.com/presentation/d/1d64udRyuYplXajTCMQkGrVh2jff464_7D75dZ6pSxiE/edit?usp=sharing)

ABO: So this is a web integration update on AsyncContext. The last time that we covered AsyncContext was in May. So as we’ve seen over the course of this whole saga, the web integration of AsyncContext touches a number of web APIs, and they are not trivial. And Mozilla’s DOM team opposed the proposal because of the complexity of the web integration, and the possibility it would introduce memory leaks.

ABO: In the last plenary in May in A Coruña, we brainstormed the web integration, and we came to the conclusion that it should propagate the context as long as it is feasible to integrate in the browser. (I should clarify what I mean by feasible. Something we know is not feasible is ResizeObserver, since being able to propagate the context would require a huge refactor of the browser engine.) And Mozilla did not participate in the discussion, because the relevant folks in the DOM team are not delegates.

ABO: However, the week after the plenary, Igalia organized, also in A Coruña, the Web Engines Hackfest, which some of you attended. This is an event that brings together people working on browser and JS engines, and also server-side runtimes. And this means that the relevant folks from the Mozilla DOM team were at that event. So we had an AsyncContext session with them in the room.

ABO: By the end of the session, they were still concerned about the complexity and the memory leaks of the web integration, but they understood that having such an extensive web integration enables a lot of the use cases identified for the proposals. In particular, reducing a lot of the web integration to something minimal would not make sense. Like, it would reduce significantly the use cases of the proposal, such that it would not make sense, it would not add a lot of value.

ABO: So now, it is time to analyze the implementation complexity. Some of it comes from APIs that can send messages both to destinations that are in the same agent and cross-agent. In particular, sometimes the sender doesn’t know whether the receiver is in the same agent, and in order for this to be safe to send and not leak, it’s not always trivial. So they asked us to investigate the following APIs and how we would implement that. Those APIs would be `MessageChannel`, `BroadcastChannel`, `IndexedDB` and `LocalStorage`.

ABO: And we are currently working on a prototype of the implementation of AsyncContext and those APIs in Gecko—it is a simplified version of AsyncContext because, like, the whole proposal, and like, `await`, is explicitly not part of this investigation. We will be publishing a design doc for this to show that this can be implemented safely and without leaks.

ABO: In terms of the memory leak concerns, we have also refined our memory management document that we have in the proposal repo, with better recommendations for the trade-off between the memory usage and the GC performance—like, should the context be a weak map?

ABO: And so, the next steps that we have from now on were: to work together with Mozilla to resolve concerns they may have from the prototype and design doc once we have that ready. We were hoping that we could have it before the plenary, but it was not the case. Then discuss the shape of the changes to the web specifications with HTML editors and other stakeholders. Then open the relevant PRs to web specifications, and after that asking for stage 2.7.

ABO: I don’t have a slide with summary because I was hoping to do that tomorrow. I can probably dictate that. So, well—is there anything on the queue? Or—

MM: Sure, just, yeah, I just want to clarify. The thing that you, obviously, in doing all of this, you might find surprises. But right now, the stated expectation, I just want to confirm, is that the thing you will be asking TC39 for stage 2.7 is the current JavaScript spec and that all of these web integration issues are purely on the web standards side, it does not affect the JavaScript standards side at all.

ABO: Yeah, so I guess, there is, like I mentioned the, the memory management document and what to do about whether the AsyncContext map should be a WeakMap. We will be adding a note to the spec to that effect.

MM: Okay.

ABO: There is one open issue, I believe, on, on the JavaScript spec which is whether generators should preserve the context across `next` runs. Yeah. But for, the rest, it would be the same as the current spec text.

MM: Great. Thank you.

CDA: Next?

CZW: Yeah. I think this is worth mentioning that the HTML integration is not going to be ended up in the proposal specification text. But I think it is worth to have it together to be reviewed with the proposal spec text together to be advancing to 2.7. Because, I mean, that would helpful to access use cases with the proposal and on the web integration.

ABO: I guess I should point out, it is possible that the spec has to be updated to add things that the web specs can use from the proposal. It would not be changing any of the behavior in the, on the Ecma-262 side of things. It is just adding algorithms for the web specs.

CZW: Yeah. Sure.

CDA: All right. Nothing else on the queue.

### Speaker's Summary of Key Points

* Since the last plenary, Mozilla DOM team asked us to investigate the behavior of certain APIs that send messages to both same-agent and cross-agent destinations.
* We are currently implementing it in Gecko, and documenting it to show that it can be implemented safely and without leaks.
* The result of this investigation will not affect the JS behavior of AsyncContext, only the behavior of web APIs when used with it, but it is a prerequisite for Mozilla to not block the stage 2.7 advancement.
* We hope this investigation will resolve Mozilla’s objections, leading them to stop blocking the proposal.

### Conclusion

This was a short update on what changed on the web integration side since the May plenary. No decisions were made.

[image2]: <data:image/png;base64,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>
