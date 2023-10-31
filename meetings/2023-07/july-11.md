# 11 July, 2023 Meeting Notes

-----

**Remote and in person attendees:**

| Name                | Abbreviation | Organization      |
| ------------------- | ------------ | ----------------- |
| Waldemar Horwat     | WH           | Google            |
| Bradford C Smith    | BSH          | Google            |
| Jack Works          | JWK          | Sujitech          |
| Daniel Minor        | DLM          | Mozilla           |
| Eemeli Aro          | EAO          | Mozilla           |
| Michael Saboff      | MLS          | Apple             |
| Ashley Claymore     | ACE          | Bloomberg         |
| Peter Klecha        | PKA          | Bloomberg         |
| Jesse Alama         | JMN          | Igalia            |
| Jonathan Kuperman   | JKP          | Bloomberg         |
| Daniel Ehrenberg    | DE           | Bloomberg         |
| Rob Palmer          | RPR          | Bloomberg         |
| Philip Chimento     | PFC          | Igalia            |
| Samina Husain       | SHN          | ECMA              |
| Istvan Sebestyen    | IS           | ECMA              |
| Linus Groh          | LGH          | Invited Expert    |
| Ben Allen           | BEN          | Igalia            |
| Nicolò Ribaudo      | NRO          | Igalia            |
| Ujjwal Sharma       | USA          | Igalia            |
| Chip Morningstar    | CM           | Agoric            |
| Lenz Weber-Tronic   | LWT          | Apollo GraphQL    |
| Martin Alvarez      | MAE          | Huawei            |
| Willian Martins     | WMS          | Netflix           |
| Sergey Rubanov      | SRV          | Invited Expert    |
| Chris de Almeida    | CDA          | IBM               |
| Michael Ficarra     | MF           | F5                |
| Luca Casonato       | LCA          | Deno              |
| Kevin Gibbons       | KG           | F5                |
| Ron Buckton         | RBN          | Microsoft         |
| Christian Ulbrich   | CHU          | Zalari            |
| Tom Kopp            | TKP          | Zalari            |
| Mikhail Barash      | MBH          | Univ. of Bergen   |
| Jordan Harband      | JHD          | Invited Expert    |

## Introduction

Presenter: Ujjwal Sharma (USA)

USA: Thank you for having us in your city. A quick introduction. We are here in person, CDA will be [inaudible]. Justin who is one of the facilitators and Brian, will be also make the rest of our facilitator group, they are on the – but yeah.

USA: Make sure that if you are here in person, or if you are part of this meeting, if you have signed in, we have the entry form is important us to track our registration. Before we go ahead, you would like to remind you about the TC39 CoC and there is a – which you should reach out if you have anything to report. You will be hearing more about this within the course of this meeting, but yeah. Please keep this in mind. Regarding the schedule for the upcoming days. 9:20 is when this area is accessible, [inaudible] breakfast, the meeting will start every day is the 10. There’s is lunch mid-day at 12. The meeting would resume at the usual. The end times are flexible. But they’re not the only [inaudible]. There are a few special events that might be interesting for you.

USA: The first one is today. It’s newcomers event. It’s sort of Q and A session here. Please meet us for this – the next [inaudible] The next is the workshop the language design [inaudible] we hope to repeat . . .[inaudible] and amazing job organizing everything, also the upcoming workshop.

MBH: The workshop will have three presentations: one about introducing genetics in Fortran, one about co-evolution of languages and their Integrated Development Environments, and the third one is about formalization of the programming language standardization process, followed by a discussion with the delegates about that.

USA: Thank you so much for organizing this. Tomorrow we will have [inaudible] social dinner. It’s a 5-minute walk from here.
[inaudible] We will go over the tools we use again. Remember, though, we are hybrid, there are a number of our co-workers who are signing in and [inaudible] and keep the conversations and use the queue. Microphones are in the room and always on. So we might go off what you say and try to reduce side conversations. And feel freely to inform us in there’s something wrong with the communications

RPR: Yes. We have five mics around the room. [inaudible] we ask you to pull it nearer.

USA: And a quick overview TCQ. You go to the queue for the current item that showses the item, the topics who is speaking right now and add yourself to the queue using any of these buttons. They are [inaudible] a point of order, for example, when something . . . like an emergency or note-taking, clarifying question would be clarifying the existing topic than you can discuss the current topic, add yourself to the queue and add new topic. Here are the speakers here. It’s slightly different in that there’s a button that says I am done speaking. Please use this button whenever you’re done speaking. So we don’t have to manually do that. And last, we have a matrix chat for discussing [inaudible] you have been using the TC39 delegates chat for discussions and for all topic items you can feel free to chat about that. And there’s TC39 space that contains all of these, including a check [inaudible] but we have also a social chat for the people in person in Bergen, so that’s also in the space. Regarding the IPR policy, we are all either member delegates or invited experts. If you are an invited expert, and you have not signed the DG form, please do. There’s further details for everyone in the contributing in 262. But please make sure that aware of the IPR implications for participation. Then we have the notes right now we have the transcriptionist helping out with the notes. We require your assistance to fix up the notes while they are being typed up. So I guess let’s do a call for note-taker later. Quickly talking about the next meeting, which is also hybrid, and being hosted by Bloomberg in Tokyo. That’s exciting. Remote attendees that in Japan standard time. So exciting And okay. So now let’s move on with the housekeeping. I think we can move on with the secretary’s report, if ready all right.

RPR: Just to confirm... any objections to the past meeting’s notes being published? No. And any objections to current agenda? No again.

## Secretary’s Report

Presenter: Samina Husain (SHN)

- [slides](https://github.com/tc39/agendas/blob/main/2023/tc39-2023-032_Final.pdf)

SHN: Thank you very much for the excellent organization to our host at the university. We already started off well. It’s a pleasure to meet everybody. I see the names online, this is my second meeting. So I am Samina Husain from the Secretariat. Together we will do a presentation today, and I think there are changes in how we do the presentation and information. And feedback. Let me go through this a bit to give you an overview and happy to have questions. All right. IS next to me and myself, we have a few changes to the agenda. There’s a bunch of information in the annex. Read it for the areas that you’re interested in. What I will do is go over the first few bullets, what I have not mentioned is some of the work that’s going on in the background with other mem bers that we are trying to develop more projects with, and look for new work items and this is where your feedback and input is important. And also, how we can support the TC39 team.

SHN: So first an update on this slide. Next slide. So you see that the approval has taken place. We have the GA, the general assembly on the 27th – 26, 27th of June, two weeks ago in which the two standards listed below, ECMA-402 10th edition and ECMA-262, 14th edition were approved. Congratulations and thank you for your efforts. I believe that for ECMA-262, if there any changes, let us know as soon as possible to be adopted. We understand that is minor, but thank you For a new Ecma member, and I believe that Oramasearch is online, so welcome. We have a new member active in the group. They have signed the membership and release forms. They’re all available in the documents. There are a new company founded in 2023. They are also a part of this group.

SHN: This is a little bit of an update. I have talked to IS about putting the minutes together. One thing that is important are the short summarize. Each of you about present your topics in specific areas that are relevant. These topics many of on to stage 1, 2, 3 and 4. The minutes well-addressed. If you can, please do the summary and the conclusions at the end of your presentation, your topic discussion, it helps us to make sure we have accurate minutes. It’s been working well in the past, and I will do start to do this more myself. We were missing a few contributions and I can also produce accurate reports which is beneficial for you also

SHN: A topic that comes up a lot and will continue to come up and we will find a solution and I think there are steps forward to finding that solution is that for the ECMAScript standard, we do need to have a clean PDF version, a nice one. We have had some discussions in how to best do it. We have been supportive in helping us get to that stage. There are rules and guidelines that we need to do for Ecma International. So it would be helpful to provide a solution. AWB has provided some information. AWB will not be able to do it in the future. Which is next year. I believe there will be conversations with one of the members of TC39 who have already tried to do something. But it would be good if we could find a solution. And if it’s not the one AWB has suggested, perhaps you have a better one to bring and we will review that. Something to think about and to look for a solution in the future. So I will sort of touch on this as we move on.

SHN: This is a reminder. The next slides are about reminder of where we are with the five-year review on the fast track and I can ask to help with this. This is new to me. I’ve been here three months. The five-year review process is relevant to the end of September. Maybe IS you can give more information on that.

IS: We have two standards. One is for JSON and that is encouraging. And this has been confirmed at the ISO level. That’s already through. That’s what went through on the 6th of March this year. But the other one, and this is quite important for us, is the two or three pages long ECMA-414. This is the ECMAScript Suite. This contains normative references of our latest ECMAScript standards for ECMA-262 and the ECMA-402. They can stay royalty free in the Ecma territory. The problem is they have only a RAND pattent policy and so if we fast track a RF standard to ISO the standard looses there its RF status. This is one of the problems that we have to deal with the and other one was the speed of fast track approval at the iSO sode. If you are fast-tracking in ISO, they cannot follow the 1 years’ cycle we have, they need more time. So this “trick” has been found, with the RF normative reference in Ecma. I think, this was in 2016 or ‘17 and now the five years review is on. It is very important for us that we can continue with this, also for the next five years.

IS: Now, whole thing is on this agenda for ISO/IEC JTC1 SC22 and on the second of September this year the vote on the ECMAScript Suite reconfirmation ends. And the question; if you have connections to the ISO national bodies who are working in SC22 please try to tell them this is a good thing, et cetera, et cetera. So in Switzerland, we have done this and now one of the national bodies is made aware of this. So you will get one positive vote from them, but it would be nice to get it also from UK, from North America, Canada, et cetera, et cetera. If you have any sort of connections, please use it. So that was it.

SHN: Thank you. So I am going to jump back to the first slide that I have because that’s is what I want to just go through. We talked about the I am approval of your standards, which is excellent and that’s moved on. We talked about the new member. The short summary on the contributions for the minute, as a reminder, we talked about the PDF and the voting. I would assume that the larger organizations typically do have a relationship with your national body. And if that can be something to access through the head of regulatory or legal affairs to vote positively for the five-year that is great. September 2 is the deadline.

SHN: In the annex are the list of relevant documents for TC39 and the GA. You can access that through the chair or all TC39 documents. I will speak to one of documents to give you an update. There is status of the TC39 meeting participation so you can see how it’s been going. Also, the download and statistics. I would like to repeat back with better information you would want to see regarding the download and statistics. I am also listed on the annex and the next meeting not only for TC39, but the GA because it is important that you know those milestones if you meet certain approvals. The next one is in October and December. We know that’s an approval process. The discussion point, the chairs on there. But for your information, those are on the annex and you can see those slides are available. I will pause right here. Are there any comments or questions to what we discussed so far?

DE: I want to repeat IS’s and SHN’s call for walks to encourage the ISO level of the ECMA 414. At the same time, previously, it’s been noted in this committees that most don’t have such connections to national bodies. How much do we see the renewal at risk, the level of investment to develop those connections? Is this an urgent risk?

IS: I can only answer about what my feeling is. So with the JSON standard, is it very, very popular also in ISO. It was much, much easier than I thought. But I am also positive that this one too, it will go through. So I am absolutely not negative. I think it will go through. That’s my personal feeling.

DE: Great, thank you.

SHN: If I could add to that. Yes, IS, assessment of that is positive. But we know that ISO can make changes over time. We should find out how relevant it is, so be prepared in the next cycle, that could be five years, we should be aware where our risks are. But still, we are positive this will go through. And to answer your question, maybe you need to investigate that.

MF: I was a bit confused on the topic about summaries. You mentioned that we do now record conclusions at the end of each topic. Can you clarify what additionally you expect from us?

SHN: That were two areas of summaries that were missing. So I would say 80% of the summaries and conclusions that are there that are incorporated into the minutes and some missing. I think they aren’t as expert as all of you to make up summary. We are missing some.

MF: We should be more diligent about that.

IS: Yes. Another thing, for one presentation we were not available to collect the slides. We are always looking for the official TC39 website, collect all of the slides of the presentation and also any other relevant information that is related to the contribution, we are putting into it also on the official TC39 Fileserver in Ecma. For one presentation, I was unable to get the slides. So it would be nice if we had all complete. The other issue, I have to made myself the summaries for some of the presentations (bacause of lack of them), I hope it did not turn into a disaster…

MF: Were you sourcing the slides from the notes or agenda?

IS: The slides from the Agenda. The summaries and conclusions from the Notes. And generally it worked well. But sometimes we didn’t get the one paragraph summary for the presentation for a topic. So generally, we were happy.

DE: In the last meeting, some of the summaries were sufficient. Maybe should consider merging them or making key points and conclusions, you know, kind of apart of the summary. As I initially proposed. And show anyway, if the secretariat had statements to the summary, please report this or trouble finding slides, please report this on GitHub. Most people, the vast majority of people who read the TC, the GitHub repository. If you have notes reflected there. There’s potential for widely distributed. I encourage you for slides. [inaudible] not only to members of ECMA, as well as – that you do work to archive slides. It would be good. In GitHub instead of a file. And also, the summaries they can be posted on GitHub, that would be very useful. If you need to write summaries in the future. You can also ask us to do summaries

IS: The message, “on purpose”, the summary, it’s important information for us. Yes. It would be very good, you know, somehow to include this somehow.

DE: I think if we switch the format to say summary and key sections in that. Key points and conclusion. That would be much more clear and the – but we can talk about this later. We don’t have a specific format right now.

SHN: Thank you for that. It’s making that more concise would be helpful and about if missing we will more mechanisms to reach out to get that

DE: GitHub comments to reach out on the notes PR because we always put the notes PR, that communicate the summary to you, the notes

USA: All right. So that’s all for the queue.

SHN: What I don’t have on the slides here, and I just wanted to give a short update because I think it’s important . . . TC39 is our most active and biggest technical committee, I think you all know. This is very important to us. I also need to look at Ecma in a broader scope and one the activities I have been trying to do – there are many that I have been trying to do for the last three months, but to reach out to see if we can find other organizations to bring if projects that need to go towards a standards channel, where Ecma can bring the platform and have a – I think flexible way to bring out the standard. Looking at the work from the technical committee here. An example is the TG4 that will be discussed later in these meetings and looking forward to being formed.

SHN: Also, about new members. I mean, we are a members-based organization, that’s how we get funding, more members is also relevant. I am doing a bit of outreach and understanding the landscape. I have initialing meeting set up and you way have been aware that Ecma has contacts with the – there are no decisions, nothing different planned. Just a conversation. It’s not starting up. It’s got to be different. Potentially, another meeting at the end of July to see if we can open the conversation, by just bringing in one project into ECMA from the foundation that may be interesting for the members here does some new members. In addition to that, I had some conversations with DE about work with other opportunities. I am asking you to give me feedback where it’s beneficial to bring this thoughts. That’s one space of ECMA further.

SHN: Another space of ECMA that I am supposed to be involved in, the technical committees we do have, you have the tools and able to move forward. I also want feedback there. I think there are things we are doing, it may not be enough. Maybe it’s not the right things we are doing. But I need the feedback to work better within my boundary conditions and what we have to give you that support. And the third space I will be very involved in is running the secretariat. I see all of you are members. You are involved in the technical level, but there is a secretariat in the background showing the documents are available, printed that we have the relationships with the different bodies like ISO, ITU and others. We have a small team. Patrick Luthi, Patrick Charollais, and Isabell Watch, there’s Istvan, supports us and others. That’s also I need to look at. Just bear with me as the next months ago as I go take this up. Importantly, I need your feedback, what you want from the secretariat's report what is important for your ear. Take the time to speak with me here, on the queue, or on the email or on the – I have all the channels. Just let me know. If I know, I can better address your needs. Okay.

EAO: Is the conversation that’s now happening and upcoming with the LF with the whole of the Linux foundation or some part of its activities?

SHN: The conversations with the overall management of the Linux Foundation, but my proposal to them was what did they discuss in the past may not be the way to move forward or isn’t the way to move forward. So one project, we can just test and see how to break each other together. I don’t have the project yet and that’s my hope in the next meeting, is there one.

DE: I wanted to note that one area we have been looking into at the ECMA level is cloud computing. And in particular, standards that can help guide regulations around cloud computing. Another area I have been looking into is software supply chain security and deepening collaboration with W3C and the Unicode consortium. If you are interested in any of these, let us know. And if you have other ideas for projects or ideas for how ECMA could support TC39, yeah. Put it on the queue or let her or anybody else know afterwards. Thanks.

SHN: Thank you for that feedback, DE. DE brought up a meeting for cloud computing. We had to cancel that for others and we will reschedule that. If there is a subject that TC39 sees, we can do workshops or conversations to develop that further and get the idea. So very open for that. We could do so much virtually and the face to face meeting for TC39, but maybe we can think about a conversation for the meeting in Japan. That gives us time to develop it to take to the next step

Summary: Ecma Secretariat presentation:

The slides were reviewed, and suggested to read the documents of interest as noted in the Annex. Congratulations: Standards approved by GA 27 June and posted on website: ECMA-262 14th edition – ECMAScript® 2023 Language Specification ECMA-402 10th edition – ECMAScript® 2023 Internationalization API specification

-For any editorial changes to the two approved standards, please advise ASAP to the Ecma Secretariat (Samina Husain, Patrick Charolais, Allen Wirfs-Brock, Istvan Sebestyen).
-New TC39 Member Oramasearch approved, announced and welcomed.
-For the TC39 meeting contributions, the summary notes from each contributor are very relevant and are requested to be added to the meeting notes. These summary notes ensure accurate meeting minutes.
-For the ES2023 «Nice PDF» Versions next steps will be taken to find a solution for 2024.
-Status & Reminder: JTC1 Periodic Review of fast-tracked TC39 Standard ECMA-414 (ECMAScript Suite). Please Vote, if your organization is engaged through your national body.

In addition to the slides a short update was provided on the broader scope of actives which the SG has been involved in over the last three months, such as reaching out and exploring other organizations, i.e. with W3C and the Unicode consortium, in order to bring in projects that need to go towards standards, where the Ecma platform can bring value.

Initial meetings and contacts with the Linux Foundation (LF) have taken place exploring how to work together, at this time no decisions have been made. Potentially another meeting at the end of July.

TC39 committee feedback is requested, what items are relevant for the secretariat's report? Where can Ecma collaborate and build partnerships?

USA: All right. Thank you to our secretaries. That’s all for this item.

### Summary

The slides were reviewed, and suggested to read the documents of interest as noted in the Annex. Congratulations: Standards approved by GA 27 June and posted on website:

- ECMA-262 14th edition – ECMAScript® 2023 Language Specification
- ECMA-402 10th edition – ECMAScript® 2023 Internationalization API specification

- For any editorial changes to the two approved standards, please advise ASAP to the Ecma Secretariat (Samina Husain, Patrick Charolais, Allen Wirfs-Brock, Istvan Sebestyen).
- New TC39 Member Oramasearch approved, announced and welcomed.
- For the TC39 meeting contributions, the summary notes from each contributor are very relevant and are requested to be added to the meeting notes.  These summary notes ensure accurate meeting minutes.
- For the ES2023 «Nice PDF» Versions next steps will be taken to find a solution for 2024.
- Status & Reminder: JTC1 Periodic Review of fast-tracked TC39 Standard ECMA-414 (ECMAScript Suite).  Please Vote, if your organization is engaged through your national body.

In addition to the slides a short update was provided on the broader scope of actives which the SG has been involved in over the last three months, such as reaching out and exploring other organizations, i.e. with W3C and the Unicode consortium, in order to bring in projects that need to go towards standards, where the Ecma platform can bring value.

Initial meetings and contacts with the Linux Foundation (LF) have taken place exploring how to work together, at this time no decisions have been made. Potentially another meeting at the end of July.

TC39 committee feedback is requested, what items are relevant for the secretariat's report? Where can Ecma collaborate and build partnerships?

## ECMA-262 status updates

Presenter: Kevin Gibbons (KG)

- [slides](https://docs.google.com/presentation/d/1v5pcXHdJDtTj1_q9fncoUnY2GezpvLOKAYEhxkyjMc8)

KG: We have had a small number of editorial changes that we considered worth calling to the committee's attention. The first is this refactor from Justin Grant (JGT) of the handling of TimeZone identifiers spec. This shouldn’t affect anyone directly. But in preparation for both Temporal and Justin’s TimeZone canonicalization, there are some of the internal machinery and the TimeZone identifiers.

KG: The second thing, #3058, is basically making it so that realms are associated with precisely one agent. Previously that wasn’t explicitly specified, but sort of implied because nothing actually works otherwise - if realms are capable of moving between agents it’s incoherent.

KG: Discussion of changing the body font. Michael, do you want to talk about this?

MF: I don’t think this is a big deal. But we are going to change the font to something that is a little bit more legible. We also have noticed that not everybody experiences the spec in the same way because all of the fonts that were specified were, like, system-specific. Windows users would see it differently from Mac users and so on. So we see the specs and improve the legibility a bit. Trust me, we reviewed some fonts and this is the best we could come to an agreement on. But you mostly probably will not notice or care.

KG: Yeah. So concretely, the current body font is on the left. We will be switching sometime soon to the font on the right. As Michael (MF) says, you probably won’t notice much difference, but do note there is a slash through the `0` on the right-hand side. Hopefully that will be a little nicer. If anyone objects to this, please let us know, but otherwise it will switch sometime soon

KG: Okay. Then we have landed a surprisingly large number of normative changes since the previous meeting, including the `v`-mode regexes, well-formed Unicode strings, atomics.waitAsync, and a limit on the size of ArrayBuffers. Then this last thing was technically normative, but a bug fix, hasCallInTailPosition wasn’t defined for import calls, such that if you were returning an import that was considered a tail call, which obviously it wasn’t. So we didn’t come to the committee for consensus on that because it didn’t reflect committee intent, what was there previously And then I don’t think we have had notable changes to the upcoming work for a while. So I am not going to talk about it. I also have not captured here, but we are in addition to sort of generally increasing consistently in terminology, we are hoping sometime soon to start documenting those better. So some of the terminology is automatically enforced, but a lot of things are sort of just processed knowledge or institutional knowledge of how it’s done and it’s not written down yet, but hoping to soon and the last is to note that ES2023 was approved by the ECMA GA as mentioned previously. So that’s all we have for the editor update. Anything from the queue? It doesn’t look like it. So . . . okay. Thanks for your time

DE: Okay. Let’s do a call for comments. Do any of you have any comments?

USA: I can briefly mention that I really like the IBM flex family. Thank you for choosing that. All right. Then.

### Summary

ECMA-262 update was provided. It was confirmed again that ES2023 was approved by the June 2023 ECMA GA.

TC39 expressed its satisfaction with the work of the ECMA-262 editors.

Work on ES2024 continued, there were a small number of editorial changes that were considered worth calling to the committee's attention.

### Conclusion

TC39 took note of the report.

## ECMA402 Updates

Presenter: Ben Allen (BAN)

BAN: Cool. All right. I have got a very, very short slide show. We have just a handful of smaller editorial updates, including one not on the slideset. Are you visible on the share screen? Sharing problems. It’s probably best to get straight through them instead of sharing. We have a couple of different editorials . . . The one that is manier meaningful is the explanatory note on usage of search collation. With that is – so there is a type of colonelation used for string only. It has different roles for strings with diacritical marks and we added a note to say it should not be used for sorting since it’s not guaranteed to be in any particular order. There is a really small one. As part of cleaning up, we are regularizing all of the references to UT35 and added references or detailed blanks. And one that’s not on here, we also merged one. It’s PR779 on ECMA402. We just added a note saying that we update to reflect UTS35 and CLDR on ad hoc basis, stating what we – the practice we had been already following.

### Summary

The Editors had just a handful of smaller editorial updates on ES2024 ECMA-402.

The committee was pleased with the work of the ECMA-402 editors.

### Conclusion

TC39 took note of the report.

## ECMA-404 update

Presenter: Chip Morningstar (CM)

- no slides presented

CM: ECMA404 is stable and boring as usual. Yay!

### Summary

ECMA404 is stable as usual. No news to report.

### Conclusion

TC39 took note of the report.

## test262 update

Presenter: Philip Chimento (PFC)

- no slides presented

PFC: As in the update I gave in the March plenary, we don’t have a lot of maintainer time available. But we have gotten some good contributions since the last time from all you delegates and community members and I think the bottleneck right now is having good review on the tests. In the maintainers group we are getting to large reviews slowly, but smaller pull requests tend to get reviewed more quickly. In general, I think things are moving along with tests for Stage 3 proposals, but I would love if the experts can help out too with reviewing tests for them, that would be greatly appreciated. We have some good contributions open right now. Since the last meeting, we merged tests for iterator helpers, thanks to MF and KG as well.

PFC: We have a pull request open for explicit resource management, which we'd appreciate some help with review on. There’s a pull request open for TimeZone canonicalization and we'd also appreciate help reviewing those.

### Summary

Since the update at the March plenary, TC39 still lacking maintainer resources. But we have gotten some good contributions since the last time from the delegates and community members and the bottleneck right now is having good review on the tests.

Tests for Stage 3 proposals are moving along. Help with review from delegates and experts would be appreciated.

### Conclusion

TC39 took note of the report

## ECMA-402 needs-consensus PRs

Presenters: Ben Allen (BEN), Ujjwal Sharma (USA)

- No slides presented

### needs consensus: [ecma402#786](https://github.com/tc39/ecma402/pull/786) Raised minimum/maximum fractional digits from 20 to 100

BEN: One smaller one that we did was we have raised the number of fractional digits from 20 to 100. And that was to harmonize with 262 in our discussion, people said that there are use cases. I believe cryptocurrency was used. And the only change we are making is increasing the number of fractional digits from 20 to 100.

USA: Thank you. Still – yeah. It PR is sort of aligning ECMA262 restrictions with 42 restrictions raising the maximum fractional digits up to 100, as well as minimum. But the maximum valueOf minimum and maximum. Thanks Ben for the PR. This has approval from TG2, been discussed within that group. We have a couple of normative PRs. Not all of them require attention right now.

### needs consensus: [ecma402#783](https://github.com/tc39/ecma402/pull/783) Added support for sentence break suppressions to `Intl.Segmenter`

USA: Another normative PR that requires consensus is adding support for sentence break suppressings in segmenter. Yes. So this has been discussed by TG2 and have been sort of working through this. Yeah. It adds on support for sentence breaks suppressions which is a new extension for segmenter.

### needs consensus: [ecma204#768](https://github.com/tc39/ecma402/pull/768) Normative: Reorder NF resolved option "roundingPriority"

USA: Also, for review is this reorder of resolved options. So just a quick reminder, the constructors are the formatter and the one selector we have all taken a bunch of options. And then they have the resolved options method that would give you all the options of the existing object. It could pass around or use in another way. The result options are ordered. It’s an object with a number of properties. And rounding priority was added recently, as part of the number format 3 proposal. However, that – since I added towards the end, the rounding priority option is sort of a way from the other rounding options that make it a little bit harder to read or, you know, we bikeshedded on this a while and decided to move things around to make it easier for programmers. So this is by RGN. And yeah. This has been discussed by TG2 and we believe this is a good idea It still needs tests. So volunteers would be really helpful. But apart from that, this is a good change from our side.

### needs consensus: [ecma402#709](https://github.com/tc39/ecma402/pull/709) Read date-time options only once when creating DateTimeFormat objects

USA: This is a fairly old change, from Andre Bargull, who are the delegate from Mozilla and very involved in ECMA402. Basically, when we take in the options object for daytime format objects, a couple of these properties are read in the constructor. However, some properties are read multiple times, which is observable. So this request actually cleans up all that logic, make sure that all the options are read exactly once. And yeah, this would be a user observable change. Therefore, normative. But it would make things better. But again this has been discussed by TG2 and put up for final plenary review. These are the four PRs that we wanted to talk about, sorry if putting them together made them slightly confusing. But I would love to hear your thoughts on these and yeah.

### Q/A

DLM: Thank you. So we support all the changes here with the exception of the segmenter change. Sorry I didn’t notice this earlier, but because we’re using ICU4X rather than ICU4C for Segmenter this is not immediately supportable by the implementation. I have reached out to the people working on the implementation but I haven’t got sufficient feedback to support this change. I agree with Michael, it seems it’s basically adding a new API and seems strange that it is a normative change rather than going through as a staged proposal. In summary, we can’t support the segmenter change as it stands. I would be happy to discuss this further after this meeting and perhaps it can go as a normative change in the future.

USA: Perfect. Thank you. We can discuss in more detail in the upcoming TG2 meeting.

SFC: Yeah. First, the response to the DLM’s comment. The intent with any of these extension keywords is that it’s up to the implementation to choose what to do with them. And this is a tailoring that is in the specifications for sentence break. So like if implementations can do something useful with such – with such a flag, then they should be allowed to do something special when that flag is present. So that’s the intent here. Like, it’s not – as with all parts of things involving locale data, implementations can do whatever they want with these flags. They can use them, ignore them, this – there are other discussions we have had with, we want to constrictor rules, and this is just one of those things. This is just a bubbling of the flag into the implementation so that they can use it or not. Involving the implementation side of this, there’s a number of parts of the – of like . . . you know, very well that I talk with the others implementing this on the other side, but there’s still several changes that are required in order for the implementation to be fully 402-compliant even, and one is adopting the tailors and this is future comes for free. I don’t see it as an implementation challenge. One, it is optional. And two, it doesn’t be that hard and it should already be on there. I am also fine holding on – if it’s not like a super urgent thing, if it helps to, you know, to discuss it further.

DE: I want to agree with KG in the chat, that it’s better if we make fewer things optional. With Intl, this is fuzzy because we permit tailorings on purpose. But still, if we are thinking about this is okay because “it’s okay if you don’t implement it,” that makes me think it’s better to wait for now.

DLM: I want to respond quickly to SFC’s point. So even if it’s standards compliant and optional not to implement this, we could have web compatibility problems if two of the implementations support this feature and the Firefox does not. I would be concerned about that. I guess I would rather wait on this than introduce a potential web compatibility problem for us in the future.

### asking consensus for https://github.com/tc39/proposal-intl-numberformat-v3/pull/130

SFC: So I was informed by FYT that this is a change that went into NumberFormat v3 proposal. And was included in the stage 4. Unfortunately, it slipped through the cracks and didn’t get presented in this group. It’s very, very similar to PR #768. PR #786, involving changing the order of the options reading. So like I guess you can say that NumberFormat, the stage 3 version had the options being read in one order. This change made them read in a slightly different order and #768 is the final order. One other change in this PR is that it also reads the options in PluralRules. This is a spec bug. We did discuss the problem space in the ECMA-402 meeting. We didn’t review the final pull request, except of course, the editors reviewed it before it get merged. But we discussed the problem space in the 402 TG2 call. But I wanted to bring it up here and I’m sorry for not getting on the agenda sooner. Since we have #768 on the agenda that, yeah, I wanted to make this aware. And it’s already shifted in ECMA-402 2023. But FYT wanted me to bring this up to be clear about the change.

USA: Thank you, SFC. Given feedback, I would withdraw the normative request about sentence break suppressings from the call for consensus today. But and SFC added one. Can we have consensus on the rest?

RPR: So you’re asking for consensus for everything except –

RPR: Anyone that supports normative can speak. Any other objections to approving the other normative PRs? Or the needs consensus PRs? +1 from DE. I think we have heard support. And no objections. We have consensus.

USA: Perfect. Thank you.

### Summary

Four PRs needing consensus were presented based on TG2 work and findings.

### Conclusion

Consensus on #709, #768, #786 and intl-numberformat-v3#130.

TC39 Plenary decided the following: Consensus on #709, #768, #786 and intl-numberformat-v3#130.

'#709': when we pass an options object to the DateTimeFormat constructor, the property reads are user-visible yet irregular. This PR makes it so every property is read only once.

TC39 Plenary decided against landing "[ecma402#783](https://github.com/tc39/ecma402/pull/783) Added support for sentence break suppressions to `Intl.Segmenter`" for now, as the optionality causes interoperability risk, and the feature isn’t supported by ICU4X which is used by SpiderMonkey to implement Segmentation under the scenes.

TG2 are trying in a new sort of way of proposing 402 need consensus PRs. Based on plenary feedback, reach out to TG Chair or editors to improve processes within 402.

## Import Attributes

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-import-attributes)
- [slides](https://docs.google.com/presentation/d/1XKSeyxhCiSrzqJRqZ6ioYeqHh72oBHkd9izufPiRktY)

NRO: So import attributes updates. We got the consensus in March, on the condition of changing the wording for what “deprecated” is. And we still needed reviews for the proposal. Both have been done and there are some changes that, similar changes that came up during the reviews, but they are normative so they are bringing up today. The first one was that when using dynamic import, there are two different validations to happen to attributes because ECMA262 requires they are strings and only like – like, there are only known attributes. But they do [inaudible] like maybe the host could type in case so there are two different validation passes. The old behavior was that ECMA-262 was validating each attribute individually while reading those values. And it was pointed out that it’s better to first read all attributes – add all the values and validate. We change the behaviour from Option 1 to Option 2. And then validate.

NRO: The second change, this was a syntax change. When it comes to static, non-computed keys, we already had syntax production for this which allowed the identifiers, strings, and numbers. And the input, like while writing the spec, we created a new syntactic production. And pointed out we should reuse the existing grammar to make the language more coherent. So the normative change is that in the static import case, you can also use number literals as keys and they get converted to string as it happens for nobjects.

NRO: And then the third change, was both syntax when `using` has a newline for assert. Because you can see in the slide, bottom left, this was valid. So you have import segment, new line, assert, expression statement. And then new line. And block containing label string which looks a lot like these. We need the restriction. When changing the keyword from to `assert` to `with`, it is already a reserved word. So we can remove the no-LineTerminator restriction only in the with case. The proposal contains the – syntax and for a this, we need to keep the restriction. And that’s it. There are other changes that came up since the proposal was presented. And is there any objection to any of those?

JWK: (from queue) “I hope we can have true-false literal on the RHS of the attribute.”

NRO: The proposal involves string literals on the – as attribute values and nothing else. And that has been like this since the beginning.

DLM: I just wanted to raise some feedback from one of the SpiderMonkey team members, mentioned this change to remove the [no LineTerminator here] for `with` and keep it with `assert` and looking at the issue, it seems like the support for this change was sort of lukewarm. I was wondering if this is something that you would be willing to reconsider just to make the implementations a bit more straightforward?

NRO: The reason we made this change is because right now, the language only has this restriction where it’s absolutely necessary to stop semantic ambiguity. There was like most of the support were just based on this fact.

DLM: Sure. That’s fair enough. I wanted to raise that one issue and we support the other changes.

DE: I support these changes. As a person who had been working on the proposal, but sort of leaving it up to NRO for now, this all seems good.

PFC: I support the changes, especially the change to make the reading and then validation of options consistent. But I would also like to ask that we document this convention somewhere so that proposal authors writing new proposal text can have a reference to this convention and so that we can make sure that’s done right in the first place, in new proposals.

USA: All right. That’s all for the queue. Do you want to conclude?

NRO: Okay. Well, so there is still, I guess, open the topic about the LineTerminator here. Like does anyone have like a preference for, this whether we should keep the restrictions, or are the same, or like . . . do you – does anyone feel strongly to not have the restrictions? And also, like, keep in mind, it’s possible to remove the restriction in the future, if needed and not possible to add the restriction. So if . . . anything like, I would give Mozilla’s concerns. It’s to add the restriction for `with`. And then if one day we move this, we can remove the restrictions and not be necessary anymore.

DE: I was skeptical of removing the no LineTerminator restriction. But I was convinced that it made sense once we fully uncovered that this doesn’t add any syntax ambiguity or risks. It seems more consistent with how the rest of import statements work to not have this restriction. And apparently it doesn’t makes parsing more complicated.

EAO: We have, I think, to revisit this topic later when we going to hopefully be able to drop `assert` completely. We could at that time, then, drop the restriction and have it be symmetric for now and update it when we update?

DE: I think it would be complicated to do this as a multistage thing where the syntax is one way and another way. It would have tools and browsers – we should decide on a syntax one way or the other and stick with the conclusion, even if we could loosen it, we shouldn’t have a plan to go through multiple stages.

USA: All right. That’s all for the queue. NRO?

NRO: I guess we have views of both opposite directions.

DE: Do we have consensus on the change or is a significant change for you

EAO: We don’t support, but we don’t oppose this either.

NRO: Okay. I will ask for consensus for everything as it’s presented in the slides, including the removal of the restriction for `with`.

NRO: The three changes are: first attributes and value. The second one is to allow numeric literals as keys in attributes in static import form. And the third one is remove ‘noLineTerminator’ in restriction wait.

DE: We have been asking for explicit support for consensus. We need support on the committee for at least 3 changes

USA: Nothing on the queue yet, but I would like to second that. Please add explicit support for this if you are in favor. Okay. We have explicit support from MF and ACE. And no (blocking) concerns. So you have consensus.

### Summary

Import attributes had the following changes in response to feedback given during stage 3 reviews and implementation:

- Clearly separate the "read attributes" and "validate attributes" steps in dynamic import, rather than interleaving them.
- Allow numbers as keys in import attributes in import declarations, for symmetry with other non-computed keys in the language.
- Remove the `[no LineTerminator here]` restriction before `with` in static imports.

There have been some discussion about implementation complexity due to the different `[no LineTerminator here]` restriction for `assert` and `with`, but the committee ended up still having consensus on removing the restriction (only for `with`) given that it's only used to prevent ambiguities in the rest of the language.

### Conclusion

The import attributes proposal is at Stage 3, having reached the conditions expressed at the previous meeting for “conditional stage 3”. Consensus was reached on three normative changes for import attributes [listed above].

## Explicit Resource Management Stage 3 Update and Normative PR

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-explicit-resource-management/)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tko8bDqLrnYiAJRBw-Q?e=qImaQa)

RBN: Hello, everyone. I am Ron Buckton from Microsoft, giving an update on the explicit resource management update proposal.

RBN: So just a quick status update on where things currently stand. In the March 2023 plenary we had consensus on the `await using` keyword or set of keywords for the async declaration form. We had consensus on removing the look ahead restriction for `using` that disallowed an identifier named `await`. It was there for `using await` keyword ordering that was no longer necessary. So that was removed. We had consensus on merging the async and sync proposals. And conditional advancement to Stage 3, pending a final cover grammar review by Waldemar. That was completed shortly thereafter, within several weeks. Meeting those conditions for Stage 3. In addition, we have now merged the async and sync proposals into one repository. There is a proposal, it contains the sync version of the proposal. I have not yet updated that to include the merged specification text. I will do that here in the next couple weeks.

RBN: In addition, a draft PR for test262 has been put together which should have fairly comprehensive coverage for both `using` and `await using` syntax, the new symbols, the `DisposalStack` and `AsyncDisposalStack`. There are some implementations in progress. XS is shipping partial support for only the sync portion of the proposal at this point. I have a PR that I am currently working on that is currently in draft state that adds this full support as well to engine262. And I am seeking feedback from other implementers as to what their plans are or when they are planning to look at an implementation.

RBN: In addition to engine implementations, TypeScript is now shipping support for the downlevel emit and `using` and `await using`. It went out last week. It uses the downlevel and emit for `using`. It requires a shim for `Symbol.dispose` and `Symbol.asyncDispose`. Babel 7.22 supports explicit resource management In downlevel emit, they do provide a shim for `Symbol.dispose` and `Symbol.asyncDispose`. In the runtime side, this is a new version of Node that supports or provides a shim for the `Symbol.dispose` and `Symbol.asyncDispose` symbols and added support for (?) in advance of support coming from V8. There are a number of other shim that is are available via npm that provide shimming and adding support for `DisposalStack` and `AsyncDisposalStack`.

### [PR180](https://github.com/tc39/proposal-explicit-resource-management/pull/180) - Ignore return value of `[Symbol.dispose]()` method when hint is 'async-dispose'

RBN: As part of the process of working on the test262 tests and putting together a full implementation in engine262, I found a couple issues that we need to be worked out in the specification that I believe require normative changes and need consensus, although I think for the most part these are fairly straightforward. One question is whether we ignore the return value of `Symbol.dispose` methods when in an async dispose hint is passed to the abstract operations. This occurs for `await using` and AsyncDisposalStack use. When they acquire that resource, so when dispose happens currently, it treats `Symbol.dispose` like it was `Symbol.asyncDispose`. It uses the same behavior that we use for getting AsyncIterator versus iterator getting the method to call. But the result is currently that when you – when disposal happens it will look at the return value from `Symbol.dispose` and if that happens to be a promise, it waits for that to revolve. However, the sync behaviour of `Symbol.dispose` will ignore the return value. Should we potentially change the current semantics which are represented conceptually here to what is currently being proposed, which is to ignore the return value of dispose. This is consistent in the linked issue. It has been discussed whether this is consistent with what for-of does with the AsyncFromSyncIterator. I believe that it is and it isn’t because that acts – that case acts as both a argument for and against because there are parts of the AsyncFromSyncIterator that do not await. For example, the result of `next` is not awaited from AsyncFromSync, even though the value is awaited. But that is a little bit after discrepancy that means that this could go either direction.

RBN: So I am currently looking for whether we would have consensus on this change. There is a topic I am not sure I am clear on.

CM: So as we were reviewing this, at Agoric we’re all fine with the substantive content of this PR. But a couple of people were uncomfortable using the term ‘hint’ in spec language, when it’s driving something which is normative behaviour.

RBN: The time that I put this together, I believe I was basing the same behaviour off of what the get iterator does and I believe it was using the same term.

CM: Yeah. We are just putting a gentle request, if possible, different language could be used in the place of the word “hint”

RBN: ‘toPrimitive’, if you in one of the states, otherwise, ignore it. So I think there is some similarity in spec language how hint is used in those two cases, but I could understand the concern and I think that’s more an editorial change

CM: It is largely just clarity in the editorial text. It’s not a concern about the proposal.

DE: Yeah. I agree that this is something that probably the editors should look at, given the usage across the spec –

CM: We noticed there are other uses that are misleading in the same way.

MF: I think that this should be left to editorial discretion and we shouldn’t prescribe how this is specified.

USA: That’s all of the queue, RBN..

RBN: Yeah. So for this PR, specifically, I am interested in consensus. I will state that these have – the PRs have been up for over a week. They have not yet been reviewed. So there is some review that needs to occur as well. But given the general direction, I am interested if there is any opposition or if I can get consensus on this change for #180? Or would it be better to ask for consensus at the end of the rest of the discussion of these PRs?

DE: Can you go through and summarize all the PRs for consensus?

RBN: I will go through the rest of them and come back and discuss them individually then. There are other ones to discuss here.

USA: In this specific PR, NRO has strong support for this behavior.

NRO: `Symbol.dispose` is not meant to return a meaningful value. So like, if it returns a promise, that promise – meaningful use should not be – ignored as it happens when it’s called synchronously.

KG: I support this PR inasmuch as its semantics are like `await undefined`, that is, that it consistently takes a microtask queue turn.

RBN: That’s the semantics I am requesting. To that makes sense. Anyone that is opposed to this?

DE: This seems to reduce the expressiveness. Because the current semantics you could use `using await` to take it kind of conditionally awaiting maybe. Probably that’s not a problem – given that what KG said about how it will take a turn anyway, acting like `await undefined`. I don’t think we need whatever flexibility that was given previously. I just wanted to note this.

RBN: This is the same as supporting sync iterator in `for await of`, to give kind of broad coverage of what you can actually iterate over. This is primarily supported because you can – like any declaration list, have multiple `using`s in order in the same statements. And if we said that 08 is only used with async disposals, then you could directly have to jump back and forth between `await using` and `using`s in one block. Whereas, this you can just use the same next to each other, but the reality is, the underlying behaviour is that it should act like it’s a synchronous `using` with the exception, you said await, there is an await at the end of the block which is prior consensus. Yeah. I don’t think having the – having return value from dispose do anything from either case, it’s essentially a bug. If you return a promise from dispose, in synchronous code, you are never going to get anything with the value. If it throws as a rejection. Having do something different, in await using statement makes it a bit – I think, more confusing and I think having it be ignored as being proposal here is the clearer approach.

USA: There’s nothing else in the queue

RBN: So I will – take that as consensus on 180.

### [PR178](https://github.com/tc39/proposal-explicit-resource-management/pull/178) Move DisposeResources to Evaluation of FunctionStatementList

RBN: So the next PR is currently, so there is an abstract operation called DisposeResources used in a number of places. Bakely, any time you exit a block scope, to is used in block, this is used in for loop evaluation, this is used for in body evaluation. Basically, any time that you exit one of the block scopes it needs to do resource cleanup and evaluate those dispose calls. When this happens at the end of a function body, this currently happens in 4 different places. The it happens at the end of evaluate function body. But then it also happens in the abstract closure inside of GeneratorStart, AsyncGeneratorStart and AsyncBlockStart when you resume execution at the end of those evaluations.

RBN: There are unfortunately a couple of bugs that are in there that were discovered in the engine262 implementation. One the dispose calls after the execution context is removed from the stack. Depending on how implementations handle how an execution context and agent and everything are associated that is problematic. You might not have the correct realm to respond with exceptions. Therefore, it’s better that happens earlier. And there is a bug in the specification text currently in that, if you call GeneratorStart and AsyncGeneratorStart, you can pass in abstract closure instead of a parse node. Which occurs when you are doing CreateListFromIterator and a couple of other AOs. In those cases, when those generators and async generators are constructed with an abstract closure, they don’t set up the surrounding state that you need for the lexical environment because they are not expecting to use the lexical environment. As a result, having a disposed resource at the end will fail because the lexical environment has not been established for that. Therefore, what I am proposing is a change to remove DisposResource in the evaluation of the function state list, parse node. Currently there is no specific callout for that. It will fall through evaluation when it eventually gets to ‘StatementList’. But function statement list is shared for both function body, async function body, and generator body. Therefore, at thats sing the place that all 4 of them used, only worked with parse nodes, used when those lexical environments have been established. So it seems like a better place to do this. It would not with the exception of the bug around execution context and how it affects association with realm, it would not otherwise be an observable change, but due to the possibility of considered an observable change, I have listed this as a normative PR. So I would like to seek consensus on this change as well

USA: We have a clarifying question.

NRO: If I wrote some code using the proposal as it was yesterday, does this request change somehow the behaviour of the code, or is it a spec bug?

RBN: It should not change any code. The question is whether an implementation might have an issue due to trying to run code when the execution context that was associated with those resources is not longer on top of the stack and what that means. In engine262, it caused a bug in the engine, which is why I needed to make a change in the implementation. Otherwise, it should not be observable to the end-user.

NRO: Okay. Thank you. Then I support the change.

USA: We have DE. Would you like to add to that?

DE: Yeah. This change looks good to me. Good to fix bugs. We don’t have to conclude whether it’s normative or not. There are all kinds of disagreements about that.

USA: All right. I hear consensus, Ron.

### [PR175](https://github.com/tc39/proposal-explicit-resource-management/pull/175) Add missing calls to NewDisposeCapability AOs

RBN: This one is again not really user observable, so this might not be considered a normative change but, but worth adding. This is essentially a spec bug. The context is that there is an AO called NewDisposeCapability. This sets up the disposal resource stack that gets added to when `using` declarations are evaluated. And gets exhausted when the current block scope ends. It is currently set to the DisposalCapability slot of a declared environment record in the new declared environment AO. However, function and module environment records inherent from declared environment records in the hierarchy. However, they have their own functions, their own AOs for establishing those environments that are missing calls to NewDisposeCapability. The result is that sometimes things don’t work in functions. We only create a new declarative environment in certain cases. I think it’s when it has to do with when parameters are bound and if there’s an `arguments` variable in the body, we create a new lexical block for the parameters, but we don’t always do that so it’s a bit of a spec bug. So I don’t know that this is going to be an effective code but to cover bases, it was worth bringing up in plenary. So is there support for this? Would anyone object to consensus?

USA: There’s nothing on the queue yet. There’s no opposition either.

DE: +1 The first one seems like an important bug fix and you found and fixed this.

USA: Yeah. I think given that it’s a bug fix of this nature, I think it’s safe to say that without any opposition, I think you’re good.

### [PR171](https://github.com/tc39/proposal-explicit-resource-management/pull/171) Correctly use hint in ForIn/OfBodyEvaluation

RBN: So this normative PR is actually a bit of a spec bug as a result of the merge between async and sync versions of the proposal. But the async version of the proposal didn’t have this implemented the sync one did. So I want to make sure this is called out to be clarified. In the ForIn/OfBodyEvaluation, when we assign the binding for the loop variable, we make a call to initialize reference binding and that call currently fails to account for `await using`. It only covers the normal letter const. It’s used to use a hint variable that is assigned at the top of the algorithm steps, but after the merge failed to account for that, this is observable in `await using` in a for-of wouldn’t work currently and this essentially is designed to fix that oversight.

NRO: +1 This request clearly does what we intend the feature to be. It fixes a spec bug. I think we are agreed on semantics using this

RBN: This should match on the agreed upon semantics. It was an oversight in the specification.

### [PR167](https://github.com/tc39/proposal-explicit-resource-management/pull/167) Add missing `.prototype` property entries for DisposableStack/AsyncDisposableStack

RBN: All right. And the last normative PR that I have, I believe, is this . . . which is PR167. Currently the specification text is missing the introduction of a prototype property in the DisposableStack and AsyncDisposableStack classes. These are designed or described as in the same way all other built in classes are currently. The expectation is that a `prototype` property would exist. Just like they do for other constructors and this is again a spec oversight to be addressed to work the way they intended to work.

RBN: So yeah. Is in any opposition to this change or should I expect consensus?

DE: Yeah. Again, it seems like a good bug fix.

### Open questions

RBN: All right. So this leads to the last part of these slides. This is something that I was discussing with some committee members late last week. And based on a discussion going on in the issue tracker, so I wanted to time to discuss this. I will note that the outcome of this currently is not looking for consensus. I am trying to get feedback from the committees to determine what direction to go here. So this open question is, how can we ensure developers use `using` over `const` for disposables? It’s easy to write `const` when you meant to use `using`. The position we achieved consensus is, this is something to leave for linters or typed systems. And in a build step to guide you towards the use of the `using` declaration over `const` when working with disposables. It’s brought up by committee members that this isn’t enough. There is a partial remediation for this. For native file handles, any type of native resource that can’t itself be garbage collected or observed within JavaScript as being garbage collected, no node JSFS promises. The native for file handle has its own capabilities to make sure that if a file handle goes out of scope and is not interacted with and not reachable, when it’s garbage collected it will close the handle for you. It is possible to do in userland with FinalizationRegistry as a way to do cleanup. And it is a good practice for anything that talks to a native resource that if someone forgets to dispose it, the native resource should have some fallback to be released when it’s garbage collected. In other languages that have this capability, that’s the best practice. In the ecosystem, it’s already implemented this way in many cases. But that’s essentially a partial remediation for native resources. But the thing is, this may not necessarily be enough to catch the cases in user land for non-native resources that don’t already have the semantics.

USA: First up we have a clarifying question by NRO

NRO: By “the host should ensure they are released”, should release them or not or just like thrown or report a warning if the user for got . . .

RBN: I suppose that the slide is a little bit overstating the expectation here. It is – in most of the documentation, from other languages that have this capability and I have a separate PR, I did not bring up here, at the moment, but in – we are looking to discuss this, whether or not should be recommended that any type of cleanup should be done behind the scenes, if possible. Normally, this is just a best practice because you don’t want to leak file handles, for example. So right now we don’t currently make any recommendations for this. But this, again, has – is a remediation that has been discussed before, if these native handles exist, and are opened in some way, that there is some mechanism for those to be closed and not leaking.

USA: We have a couple more topics on the queue. And a little under 20 minutes. So let’s go.

RBN: I don’t want to spend time on the partial remediation. You can do so on the issue tracker. But to go back into this, the question is whether or not this is enough? Generally, many languages that have this capability don’t make a specific demand that you use – that you have to use a `using` declaration. In C# you don’t have to use a `using` declaration with something disposable. You may destroy that variable. You are doing that because you are either going to imperatively do cleanup or you are going to create a larger disposable through composition that holds onto more resources until its lifetime is exhausted. Mandating `using` isn’t necessarily the best option in some cases. But it’s also perfectly feasible to forget to use the right declaration, and without the familiarity. We discussed alternatives and one we looked into and was being discussed last week was a way to roughly emulate what Python does with its enter/exit magic methods in context managers. Python approach is one of the languages and features we reference in prior art within the proposal repository. The basic idea would be that you could optionally, so this is – you can write an object that has a disposal method and that is a perfectly reasonable to use as a resource. But you could optionally opt into a more explicit form of resource management. When the declaration is evaluated or initialized, that is the – if it has a `Symbol.enter` method, that will give you the actual resource. This means, the actual resource that you want to interact with is behind a symbol named method, making it harder to get to. So if you were to say, `const x = y`, `y` is not the thing you want to interact with. It is something that gives you the thing you want to interact with in that case. So if you really wanted to use this resource in a about manner that is consistent with a compositional approach or you want to more directly or imperatively manage the resource, you would have to explicitly call into `Symbol.enter` to get the result. Mandating this be part of the proposal means that existing host APIs like node’s file handle and readable streams, any DOM-based approach that already exists, if we mandated that were part of this, then they have to add a `Symbol.enter` method that returns this. So that the existing API works or a separate API. Python’s API that is a default that returns `this`. Their abstract context manager has a default that returns `this`. So the approach that we are considering is that since the default behaviour would be to have something return `this`, this we could have that be implicit behaviour if you don’t have `Symbol.enter`. The method itself is entirely optional. If that’s the case, this wouldn’t be a blocker to the proposal as it exists today, but a follow on proposal and advance – as we continue advancing through the stages process and look towards Stage 4, this wouldn’t be a blocker for Stage 4 because we could still advance lightweight dispose, and come back to a follow on to enter this mechanic I. However, there is a concern about whether that would be potentially confusing in a declaration form like `using x = y`. `x` is not holding the value of `y`. It holds the value of `y[Symbol.enter]()`. This is something we are discussing below. This is about python context manager and how they fit into JavaScript and issue #159, we were discussing this with additional background information. It’s a long thread with a lot of implementation details about alternate proposals where this came up is more towards the end of that discussion. I would like to say that right now, I am mostly seeking interest in the committee’s appetite for exploring this but not seeking advancement or consensus on this specific feature at this time. I would like to take a couple of minutes and we would probably finish before the timebox is elapsed possibly and collect feedback from the committees on this possible approach

USA: All right. So the queue has remained from the last point, we can resume that first.

DE: Yeah. Thanks for going through the queue. I don’t see how these two things are related, but they are both important things to discuss. First back to the GC thing. I disagree with your recommendation, that everything just be disposed of by GC automatically. Probably this makes sense as far as fault tolerance is concerned: to recover from an error where they failed to dispose of the resource, it’s good for the GC to dispose it. It’s important to be discouraged from a developer perspective to rely on this because it’s unreliable. So I hope that if we make the recommendation, I would agree to logging a message indicating the programmer’s error. I think NRO was getting at this in their comment.

RBN: I brought this issue up and I put together a poll request on the issue tracker. And the discussion there, other folks that are from the committee that are also not certain this is something we should make a recommendation. So I am most likely not going to merge that PR. As I mentioned before, in the C# implementation and in the C# documentation for the disposable interface, this is a good practice on their side. And there are native – built-in libraries like a safe native handle that are designed specifically for this case, that it basically is just a wrapper for a handle that you indicate how dispose works, so you can pass this handle around and they with dose explicitly or implicitly disposed and avoid leaking handles

DE: It’s common, where programming language add these things based on GC and then realize it’s a bad thing to do. So the fact that some programming language has it in their practices doesn’t seem like sufficient evidence to me. I am fine with not having a recommendation. If we have a recommendation, I would like the opposite polarity.

DE: Let’s go to the enter and exit slide. This is an interesting design. I am not opposed to this for the design of resource management. But I think that this should be part of the core proposal. If we’re considering this, if we want to seriously consider adding this, we should demote to Stage 2 and make this part of the initial proposal. We shouldn’t consider such fundamental ideas as an add-on later. It might be compatible to add later. Strictly speaking, it’s bad to add async operations later. Maybe it would be compatible enough. But yeah. This is a design that in discussing resource management with YK he suggested that we have such an explicit enter part. I really do think that is pretty unrelated to whether we have GC clean up resources, regardless, you could allocate a resource and drop it on the floor.

DE: Also, I want to note any comparison with Python we should be cautious about, because of the use of reference counting, making, you know, the lazy pattern of forgetting to use `with`, the equivalent of `using` more tenable because the reference count more deterministically goes to zero. So just be cautious about the comparisons. But that doesn’t cast did you know on the protocol which is `using`, but a core part of the using protocol and so we should decide whether or not we want to go with it up front.

RBN: Well, part of the reason why I consider this as a follow on and it’s also listed in the issue #49 is that there are two sides to this. dispose is more of a lightweight approach. A `Symbol.dispose` method, it doesn’t get any inputs or care about output, but something that happens when the block exists. The more comprehensive context manager approach, Python’s exit, is not the same as dispose. It is more powerful because it gives you the ability to intercept the exception that has been thrown and possibly throw a separate exception or swallow the exception. That’s not something that I am particularly comfortable with, working on a static type system, because it makes control flow much harder to reason over. You can’t know whether or an exception actually will exit a statement because now, exiting any block could potentially result in exceptions not bubbling out, and instead being swallowed and control flow continuing. I haven’t been comfortable with that and was not necessarily supportive of that as a core part of the proposal. I looked at full context manager support. I felt that was something much more powerful that should come separate from a more lightweight dispose mechanism. And enter and exit were paired together and that’s why I considered them part of that. I felt that we could augment `using` with these capabilities but it wasn’t something that I wanted seek for the proposal, especially when we were cutting other features for this proposal to reach more of a minimum viable proposal that we could get to advance.

DE: Yeah. Those sound like great reasons to not do the proposal. I am happy with the current state of the proposal.

RBN: I am also happy with the current state of the proposal. But there – I bring this up only because there – there was feedback from other committee members, they were interested in discussing this.

USA: All right. There is a reply to this and also a number of new topics, but I have to say, we are at time – we have 5 more minutes for this item. If you wish to continue, the queue is quite big. I proposes we record consensus for all the PRs you presented today. And continue with the topic later in the meeting. What do you think, Ron?

RBN: I think that would be fine.

USA: Okay. In – what about we continue with this topic and then save all the remaining topics for the follow-up?

PFC: I wanted to add to what DE said, this could pose a problem for embeddings because there may be one final garbage collection when the embedding is being shut down. So if the disposer throws an exception, the machinery in the embedding that handles or logs the exception may be destroyed or the disposer callback may refer to resources that the embedding provides that have already been shut down. So that’s quite problematic. I'd prefer we don’t do that.

USA: All right. So . . . that was that topic. RBN, do you want to conclude for today and resume later this this meet?

RBN: Yeah. That’s fine. I had nothing else besides this on the – in the slides.

USA: All right. Great. Thank you. Would you like to say some final conclusions?

RBN: Sorry. I stopped sharing. So yeah. From my understanding, the consensus was on the PRs that were provided in the slides. Those five specific ones. We will continue the question discussion when we have some time in overflow.

RBN: The first was PR #180. Ignoring the return value of `Symbol.dispose`. Async dispose would have been requested. RP #178 Moving resource resources to remove complexity and fix a spec bug. PR #175 was adding the missing calls to the new dispose capability AOs. PR #171 is the correct use of the prealready determined hint to ensure that the reference binding is correct and accounts for `await using`. And PR #167 was adding the missing `prototype` property for sync and async stacks.

RPR: Any objections to those? We have consensus.

RBN: All right. Thank you.

### Summary

This is work in progress. An Update has been given since what has happened since the March 2023 TC39 meeting, what has been completed, what not, what the open issues are.

### Conclusion

The committee reached consensus on several normative changes (or bug fixes) on explicit resource management:

Consensus on PRs: 180,178,175,171 and 167.

Debates about the appropriate use of GC and Symbol.enter are ongoing and will take place in overflow time

## TG3 update and chair appointment

Presenter: Chris de Almeida (CDA)

- https://www.ecma-international.org/task-groups/tc39-tg3/
- [slides](https://drive.google.com/file/d/1MPHGzy4aH_vRnduuuuUucP7xq_clcrK2/)

CDA: So TG3. Update and convenor confirmation hopefully. Next slide, please So as we discussed at the last meeting, TG3 has not been meeting due to lack of chair. So we got together recently to discuss resuming meetings, what topics we were interested in covering to begin with, meeting schedule, and the proposed convenor group. So we are still ironing out details for the meeting schedule. The Secure ECMAScript meeting folks graciously offered to sacrifice one of their monthly meetings for this – they meet every week. We will use one of those meeting times every month for TG3. But we also wanted to have a more APAC-friendly time, so we will alternate between the current meeting time at 12 central and then alternate between that at a monthly or bi-weekly frequency. We are still working that out.

CDA: One small detail. We had to tombstone the matrix room. Because we were unable to get hold of the sole admin. The new TG3 room is already created and can be found in the TC39 space.

CDA: The proposed convenor group is myself and JHD I think at this point, I will need to drop, and I don’t know if JHD is in the Zoom . . . but I don’t think so.

[Private discussion about convenors for TG3]

RPR: The discussion has concluded and we have welcomed JHD and CDA back in. So, CDA, the answer is that, yes, you and JHD are happily the convenors of TG3. Congratulations!

CDA: All right. Fabulous.
(applause)

### Summary

An update on TG3 has been given:

- https://www.ecma-international.org/task-groups/tc39-tg3/
- [slides](https://drive.google.com/file/d/1MPHGzy4aH_vRnduuuuUucP7xq_clcrK2/)

### Conclusion

TC39 noted and approved the update and had Consensus on JHD and CDA as new convenors of TG3. TC39 wished them successful work.

## TG4 charter and chair appointment

Presenter: Jon Kuperman (JKP)

- [repo](https://github.com/source-map)
- [slides](https://docs.google.com/presentation/d/11Cv2XnTZfd9yBCq1WctKzSwc9Q2ZJkhklOVTbNyUyxU/)

JKP: Hello. I am John Kuperman. I work at Bloomberg. I am proposing a charter for TG4 source maps task group. This is my first meeting. Last time DE had brought up this and we were asked to come back with an official charter and program of work so that’s what we have done. Just a little bit of current state on source maps. The specification lives in a Google doc and it’s pretty sparse. There’s quite a lot of ambiguity which has caused implementation differences at the browser level, at the generator and post-hoc(?) levels. In addition to that we have had the GitHub repo, we have aing it tore correctness issues, people are unsure what the specification means and those issues have been piling up a lot. And also, there’s quite a few features that source maps lack for performance and expressiveness that companies have developed third party solutions for. I have got linked in the slides. Bloomberg has pasta-source maps and Sentry has another solution to pass the function extent information through.

JKP: This is the scope of the charter. I am not going it read it out loud, but the slides are linked in the agenda. I will pause for a second so people can read it. And then I did share out the slides for this. And then we also have our program for work, which I probably shouldn’t read the entire thing. But the main points. To focus on correctness, go through the specification, August the correctness issues and make sure that we have a very tight and well-defined specification for what is a conformant source map. After we have source map expressiveness that the community is adding and also want to make sure we work closely with other standards bodies such as W3C on the all work we are doing.

JKP: Right now there’s a great list of participants. But we're looking for more support from people. Another slide I will covered the meeting we are doing but these are the folks participating so far We have some exciting proposals that we have started talking about. I wanted to cover 3 quick to poem Sundays the scope. So one is the definition of a column. So we have like source maps referring to line and column number. One is about the scope and variable names and debug IDs. So these are 3 things we have been doing a lot of discussion about and up – trying to work on coming up with better updates for the specification.

JKP: One is column IDs. So we figured out that browsers all agree on line number, but disagree sometimes on the column number, whether the column is like a code unit or a code point, and what this would mean for formats like Wasm. A lot of discussion around here, Armin from Sentry brought information about unicode characters and what they return as far as column numbers and where they differ with browsers.

JKP: Function name mapping: I took this from Bloomberg’s pasta source maps showing right now with the source maps they have the names for functions like the code on the right. Whereas with something like this addition you will see the full function names in the decoded stack.

JKP: And the last one was debug IDs. Source files get built together by bundlers and the source map has a hard time linking back. The idea to add a debug ID to each source map and linking back to the comment at the bottom of the file perhaps which would have make it easier for post-hoc debuggers.

JKP: How we are working. Everything is done in [a GitHub org](https://github.com/source-map). Repos for the spec. Repos for RFCs and testing. A monthly Zoom call discussing the correctness in the spec is the number 1. We have temporarily and additional monthly call for naming. This is like variable and scope names getting passed through. And both of these are on the TC39 calendar and I linked to some PRs we have this. Clarify text around JSON over HTTP or like the precedence between HTTP headers versus inline annotation for source maps, things like that. That’s all I had. Thanks very much. This is requesting consensus on chartering a test group with a scope and program. And for this, do I physically leave the room?

DE: Yes. So we would like the committee to review the scope and program of this. As well as, John and I want to be co-covnenors of TG4. I guess for both of those propositions . . .

EAO: (from queue) “any reason not to mention CSS source maps explicitly?”

DE: I would be happy to add that to the scope. It’s definitely a necessary property of source maps that they remain multilanguage, and continue to support CSS in particular as well as WebAssembly. If you could suggest a wording how to capture this for being multilanguage, then I would be happy to make that kind of change

EAO: Absolutely. Sorry, what was the request for now or sometime later?

DE: Maybe during this week. Because I would like to conclude on the charter to get this approved by the committee and put on the website and make an actual TG. Yeah. Last meeting, I was trying to charter this, but later heard that Ecma found it wasn’t chartered specifically enough because the Ecma bylaws need to say you need the scope and program of work approved by the technical committee, which I had written down more vaguely.

EAO: To follow on, how or where should the scope change be proposed? Is there a repo for this?

DE: Yeah. It’s not any one repo. You can see the charter on the slides. So maybe you can edit that and then just send me the final text. We could have an overflow item to approve that as well as conveners. We don’t need to step out of the room right now, but we could do that once we have the final charter. Yeah.

MF: Are we going to bring the repos under TC39 and manage under the same – all the same processes we used for all the other repos?

DE: Yeah. I thought we would move the repos to the TC39 org. If not, we should indicate the source map organization is under TC39. Source maps is currently divided into 3 repos. This division makes sense. And as far as adopting all the same processes, I think the processes for how the source maps TG will work, and how it will, you know, end be proposing a standard to the committee is a little TBD. But I think just for archiving, it makes sense to bring it into that org. Do you have any other thoughts?

JKP: No.

CDA: Is the – does the previous slide have the scope? Okay. Thank you.

DE: Of course.

CDA: Yeah. Just as a reminder for everybody, what appears on the website for the task group is the scope and the program of work.

CDA: Okay. I don’t know if there are any hands raised or anything in the room, but there’s nothing on the queue. So I think we can proceed with –

DE: On the chat, Eemeli proposed that we could just change the scope to saying “including CSS and ECMAScript code”. And if we could agree on that change, then we can go to approving this now instead in an overflow topic.

DE: How do people feel about that change?

CDA: We could also consider omitting the parenthesised part entirely

DE: I don’t like that. I would like to refer to ECMAScript specifically. On the other hand, arguably the current text already implies it could include more things and plug in the changes to specifically mention CSS. Yeah.

EAO: I am asking for CSS included in particular because CSS is not really a programming language. So it’s easy to look at this and not realize that CSS is included also.

DE: Yeah. I think it’s clear to participants in the group, that CSS needs to be under consideration and makes sense to document it in the scope

JKP: I totally agree. It’s been coming up and the reminders are healthy and I like the idea of having it in the scope.

DE: Okay. Great. So Jon and I will leave the room while you all consider to both charter the group and approve us as co-conveners.

(private meeting)

Explicit support from EAO, NRO, PCO, LCA, CM, CDA, JWK

CDA: Well, welcome the new convenors of the freshly chartered task group 4 for source maps.

(applause)

CDA: All right. I don’t see anything in the queue.

### Summary

JKP presented the draft TG4 charter including proposal for the TG4 Convener.

- [repo](https://github.com/source-map)
- [slides](https://docs.google.com/presentation/d/11Cv2XnTZfd9yBCq1WctKzSwc9Q2ZJkhklOVTbNyUyxU/)

### Conclusion

TC39 unanimously decided to accept the proposals: Task group 4 for source maps has been chartered chartered with DE and JKP as co-conveners. One change to the presented text: Also CSS will be explicitly called out as in-scope, alongside the existing EcmaScript mention.

## Updates from the CoC committee

Presenter: Chris de Almeida (CDA)

- No slides presented

CDA: Updates from the code of conduct committee. I don’t have slides for this. The only update we have is we received a report back in March, it was addressed, we consider the matter now resolved. One snag with that, however, is that per the code of conduct itself, we are meant to resolve any reports of violations in a speedy manner. Ideally, within a week. And it took outside months. And the reason it took us months is because we could not – we did not have a quorum in meetings. This surfaced a problem that we have, and hopefully it’s in the fast. The members of the CoC Committee looked numerous but a large number were not active and did not come to the meeting. We need a functional code of conduct to deal with any reports that come in and the other activities that the code of conduct committee is responsible for.

CDA: To that end, we pruned inactive folks and then put out a call for additional participants. And to that end, we are thankful that both TAB and RCA have agreed to join us on the CoC Committee. The way that we handle new folks for the committee is a little different than we have done for the convenors, of the task groups, for example, we are not going to be doing that in real-time here. We ask if any objections to the new folks joining, again, that’s TAB and RCA, please let us know before the end of plenary. You can do that by either contacting, you know, the existing code of conduct email or just reaching out to one of the committee members directly. Those are currently myself, JHD, and MPC. That’s it for the CoC update. I see an item on the TCQ.

MF: Do we need to get reports from the CoC group on attendance?

CDA: Yeah. I wanted to know if there’s some way we could not get – get ourselves into this situation again, in that we can – because you said there are like many months between the report being received and action being taken. There were also plenaries between then, it seems. So if we were receiving reports on whether the CoC group was being effective, we could maybe monitor for that.

CDA: That’s fair. Yeah. Probably we missed an opportunity in May to mention this. I guess the caveat there is that we hadn’t yet addressed the report, so it might have been premature to update the committee. But I guess what is the . . . specifically the ask?

DE: I think you have mentioned this to the committee before, that there weren’t enough people in the code of conduct committee. I appreciate you mentioning that and did this call for volunteers and you have pruned to the list so that it’s not inaccurate anymore, as it once had been.

CDA: Okay. Michael, did I answer your question?

MF: I think so. I guess maybe it would be nice if the CoC group had an action item to see how they could prevent the same situation in the future. It may already be resolved, but it would be nice to spend time thinking about that.

CDA: Sure. I appreciate that. I think part of the reason why it maybe wasn’t as streamlined. I don’t know, it could be because we get very few reports. This the first one we have ever gotten since I joined the CoC Committee. So I guess we were sort of taken by surprise that we weren’t able to have have quorum, but yeah, we will try to keep this in mind for the future, absolutely. And we have impressed upon the new folks joining that it’s – you know, it’s really important they are able to attend the biweekly meeting. Thank you. I am not seeing anything else in the queue.

### Summary and conclusion

An update on the CoC committee was given. TC39 Plenary noted the update.

## TC39 Public Calendar update

Presenter: Chris de Almeida (CDA)

- No slides presented

CDA: Next topic will be the TC39 public calendar.

CDA: All right. So we talked about this – we have been talking about it for quite a while, but at the last plenary we agreed on a path forward. So there are now issues for every meeting that appeared on the TC39 private calendar, there are now issues in the reflector for each of them, for whether or not they should go on the public calendar. I’ve been asked what is the guidance around what goes on the public calendar? So as we discussed at the last meeting, there is no hard and fast rule about what belongs there. And there are some different – I don’t know – physical [fof] [kal] views on what goes up there. Some people take the tack that if it’s not something generally open to the public, then don’t put it on the public calendar. Ultimately, it’s up to the meeting participants. I think some of the low-hanging fruit for the public calendar like some of the outreach meetings. Other things like plenary is a good example of what we have on the public calendar, even though it’s not a public meeting, per se.

CDA: So I think the easiest thing for everybody to do would be, at the next meeting, that you have, maybe spend a couple of minutes at the beginning or the end deciding on, first of all, whether you want it to appear on the public calendar, and then if you do want it to appear on the public calendar did a, you need to remove anything in the description, notes, documents or anything that you wouldn’t want just out there on the public calendar and the other consideration is just the invite list. If the meeting can be set to either show or not show the invitees, and if you’re going to show the invitee list, you should make sure that everybody who is on the list is okay with having their name and email displayed on the public calendar.

NRO: where can we find links to the calendars?

CDA: I can – I will add that to the matrix chat. The short answer; the private calendar links on the reflector. The other is the ‘how we work’ repro. I will post the links to these – to the issues containing the details.

NRO: Okay. So maybe rather than post the links, is it possible to add to the reflector right now for the old calendar, I like to go search through to find it. It would be good to have an easy way to find not only public, but private one for us.

CDA: Sure. I agree. We should absolutely do that. I will take that as action. We also need to add it to, you know, the emails we send out for newly on boarded delegates and invited experts. Next we have Shane.

SFC: (from queue) “who has edit access?”

CDA: Right now just the chairs: myself, RPR and USA. If have strong feelings about if some other folks would like to have edit access. If that’s helpful, I think that’s perfectly okay.

SFC: The reason I put this question here is because like, I scheduled the meeting for the Temporal Champion as well as TG2 and occasionally some other ones. And like, I have the Mozilla calendar, the private calendar, just in my Google calendar and it’s easy to add events and. They are not on the calendar because of private, because that’s the place we add them easily. But like . . . like, if there’s – going to be a higher bar for adding things if – TG2 should be the public. A full task group and like an official meeting. Right? It might belong on the public calendar. But like I don’t – it seems more tricky to like get that events added there. So I am raising that as a potential like challenge

CDA: Yeah. Thank you for the question and this brings up a good point. I can clarify. And that is, an important point: we actually don’t manage the public calendar in the public calendar itself at all. We actually – the private calendar is actually the system of record. That is the calendar, the one calendar to rule them all. And anything that appears on the public calendar only appears in the public calendar by way of being invited via the private calendar. The idea is that we don’t want to maintain two calendars and deal with any concurrency issues. We have been updating the meeting time and forgot to do that in the public calendar. We only manage everything still on the private calendar.

SFC: I see. The model is that the public calendar has like an email address to invite to the event. It sounds good. I think I have done that before with other things too

CDA: Yeah. Even though like I said, the chair is the only people who have edit access to the calendar, but all the edit happens by way of the private calendar anyway. So . . . yeah. Again, all that you do to make the item appears on the public calendar is invite the calendar ID to the meeting on the private calendar. Okay. Any other questions or comments? Nothing in the queue.

RPR: I think we are good.

### Summary and conclusion

An Update on the praxis regarding TC39 Public Calendar was given and discussed. Tc39 noted the discussion.

## Resizable buffers bug fixes (#120, #126), grow refactor, then maybe for Stage 4

Presenter: Shu-Yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-resizablearraybuffer)
- [slides](https://docs.google.com/presentation/d/1Q-mm99CchYh2ZqJjz3Jb4BLTJRAqK7El3LQJ1tP5vDE)

SYG: So yeah. This is getting resizable buffers ready for Stage 4. And in doing the PR against the main spec, some last-minute bug that is have come up that need normative fixes that’s the important thing. And then I think it probably makes sense to wait a meet to go ask for Stage 4, but we can come to that at the end of the presentation

### [PR120](https://github.com/tc39/proposal-resizablearraybuffer/pull/120) Move detach check after argument coercion in resize

SYG: So first fix: this is an outstanding one that just dropped off the radar. It was reported by the Moddable folks a while back, but I missed it. Apologies for that. This is #120. The bug is that the resize method takes a single parameter named `newLength`. And there is a detached buffer check before the toIntegerOrInfinity we can all arbitrary user code. Which means that there also need to be a buffer detach check after it’s done. As annoying to do a check and then do a coercion and do an immediate check again. So my proposal fix here and my preferred fix here is to have a single detached buffer check that is after the coercion. This does – the general design principle to hold to of do receiver checks than coercion and check arguments in left to right order And the – this is an exception to that rule, but it’s an exception that behave made in the past specifically for detached checks, specifically to avoid this kind of double-checdlly still, do receiver checks and then argument coercions and checks left to right, except for detached checks, we can do it once in order to avoid necessary rechecking. There are alternatives. As shown in the discussion in number 120. Such as we could just completely switch the argument checking order. We could say we are going to check all arguments first and then validate the receiver.

SYG: The current proposed fix is more targeted than that. We still keep the relatively the same order, except if they are detached checks, we make the exception for the detached checks. And given that the precedent we have so far for another method, `transfer`. We did this kind of single detached check as late as possible already for `transfer`. So we propose to do the same for `resize`. Before moving on to the other topics, I would like to get consensus for this one or take any questions, if there are any.

RPR: So far, no questions in the queue. So let’s – are there any objection to this change?

DE: Do we have tests for this change?

SYG: There will be tests for this. I am in the middle of converting all the staging tests for resizable buffers, making a PR moving them in the right directories, which is also the reason I said it might not be quite ready for Stage 4 at this meeting.

DE: Okay. Yeah. This change makes sense to me. It seems good.

PST: Just to mention that the issue was found by a fuzz tester

SYG: Good to know. I think it’s – currently, it’s – I saw it just now this morning when I opened the PR, a JSC commit refer to the issue. I think this was manifesting as throwing an error. This change the spec behavior – where it was unclear before. The current spec behavior after the fix would be always throw a TypeError.

MF: I support this change. And I would like it to set precedent for similar changes or design in future. methods.

SYG: Thanks. I hope for KG’s spicy presentation later, about stopping coercing things, to set an even stronger precedent, but we will see.

DLM: Explicit +1 for #120.

RPR: Just to confirm, for the notes, that we record that as consensus for #120.

### [PR126](https://github.com/tc39/proposal-resizablearraybuffer/pull/126) Normative: Correct buffer limit checks in `TypedArray.p.copyWithin`

SYG: Next one is 126. Another diligent and detailed reviewer ABL, found some arithmetic bugs in the fix loop bounds. Before I show the fix, to build context, the gist of the bug is that now that with resizing buffers, some TypedArrays be length-tracking. If you make a TypedArray that is backed by a resizable buffer and don’t explicitly give it a length at construction time, the length becomes automatic and is recomputed every time you ask for it, depending on the size of the underlying buffer. Given that dTypedArrays can be length tracking, and given that user code can shrink the underlying resizable buffer, in addition to detaching it in the same places where user code can be called, like through argument coercion, given that we have to worry about shrinkage and detached, plus given the TypedArrays can be byte offsets, after we reload the length, after user code is run to recompute the bounds, there were bugs and copy within method on TypedArray, that prototype that for got the add the offset after reloading the length. That’s the gist of the bug

SYG: The fix is, as follows here. Let me try to page this back in. On the top of the line, you see – on the top screenshot, on line number 40132 that is the length reload. After using code is called, argument coercion is all done. We reload the length and recompute the bounds to do the copy. The copy forgot to add the byte offset and the fixed green line here in the difficult V, the byte offset is added. It’s now the limit. And the second below for the DIV shows the NaN from the previous alias . . . this is not coherent because it forgets to add the byte offset. And I believe some of the AOs used here, the things need to be in bounds, so without adding, things could have been out of bounds and the spec wasc coherent. If you implemented this literally, things would crash, I think. But I think for these TypedArrays method, these are not implemented literally from the spec text.

SYG: Okay. So before moving on, any concerns to this one?

DLM: Explicit support for #126

RPR: Great. Are there any objections? No. Okay. I think we have consensus on 126 as well

SYG: Thank you

### [PR127](https://github.com/tc39/proposal-resizablearraybuffer/pull/127) Normative: Correct buffer limit checks in `TypedArray.p.slice`

SYG: 127, which is kind of similar. This is TypedArray that protocol.slice, where the context for the bug is very similar, where we need to reload the length. And recompute the limit so that we don’t slice out of bounds. There was a mistake where I took the min of the wrong thing, the target byte index should have been factored out. And this is data fixed. I think it’s also the case that if you implement this literally, this would also crash, but I don’t really remember. Any concern about this one?

RPR: Any positives or – any support? Or objections for #127?

DLM: Explicit support for 127.

SYG: That was a straightforward bug fix. I will take the silence as no objections. These are already reflected in the upstream PR against 262.

RPR: Agreed. We have consensus on 127 with a + 1 from Dan Minor (DLM).

### Fix loop bounds in `ArrayBuffer.p.slice`

SYG: Thank you, DLM. There’s a no issue number, but also in the same vein. This particularly is in `ArrayBuffer.prototype.slice`. Where I recompute the length, but then I – so currently, in the spec draft, you – like, you compute the limits, and then you call out the copy data block bytes. I found the issue that copy data block bytes, all inputs in bound and currently the relength computation doesn’t necessarily mean that the input to copy data block bytes will be in bounds. It needs to be under consideration as the suggested fix shows. This is just to take that fix.

SYG: The current spec text is technically incoherent. This can only happen when the underlying ArrayBuffer is shrunk. When this is equal to current length, no call to copy data block bytes will be in bound and it should not be called. So this is that fix. It does not have an issue number, but it is reflected in the upstream PR.

SYG: Consensus here before moving?

RPR: Any objections to this part? No.

SYG: Okay. Sounds good.

### Refactored `SharedArrayBuffer.p.grow`

SYG: Final one is really a normative change. They’re are, I think it’s not a normative change, I don’t want to think too hard about it. But basically, this is more of a FYI to folks reading the spec, that in the upstream PR for 262, the spec text for share was significantly refactored. The current proposal – the spec text kind of directly manipulates shared memory events in a way that – I don’t think it does not read. And the refactor is the spec text version of the pseudocode which is more or less obvious way of how you would implement grow anyway. You would load the length atomically and go into a loop that checks if you still need to grow, or if you raced with another grow and no longer grow and tried to grow with a compared exchange when you succeeded, thank you, return. So if youd are reading the spec and find that the growth looks significantly different, keep in mind this pseudocode block, this is what the new spec text is intended to reflect and how you would implement it in any way. I don’t think there’s too many ways to implement this. And I don’t think this is normative. But don’t press me on that, in that there are different shared memory events then with the spec draft says, but I think the allowed outcomes are still the same.

SYG: So with that, any questions on that before I move on okay.

RPR: About nothing in the queue

SYG: Here are the status of shipping and Chrome and Safari. The remaining – there are a lot of tests already in Test262. I think there’s some surface API level test and about 80 to 90 tests for a bunch of these methods. These Array prototype and TypedArray prototype methods, and ArrayBuffer type method, they they interact with resizable buffers in Test262. But they are in staging. I was hoping to migrate them out before this meeting, but I ran out of time. The upstream PR is 3116. So I think I will delay asking for Stage 4 until next meeting. Because otherwise, it would be kind of contingent on these things being migrated out of staging, and that probably doesn’t make any sense. But yeah. We can discuss that quickly right now.

SYG: I am happy to wait until next meeting, but it’s unlikely to be anything new to say. Are folks – I will ask the more controversial one: do folks have concerns about getting conditional Stage 4 now given that Test262 is not migrated out of staging?

DLM: (from queue) “I think it would be better to wait for next meeting for stage 4”

MF: (from queue) better to wait for Stage 4

SYG: Okay. I see things on the queue saying better to wait for Stage 4. I agree. That’s fine. That also gives more time for reviews about 3016 for this kind of corner-case arithmetic bugs. It’s large, PR #3116. All right. Thanks for the consensus on the normative fixes. They should already be incorporated in #3116. I will come back next meeting to propose Stage 4.

### Summary and conclusion

Consensus was achieved for all normative fixes.

- #120 - Do a single detach check after coercing argument of ArrayBuffer.prototype.resize
- #126 - Fix loop bounds arithmetic on %TypedArray%.prototype.copyWithin due to shrinkage in argument coercion
- #127 - Fix loop bounds arithmetic on %TypedArray%.prototype.slice due to shrinkage in argument coercion
- Do not do out-of-bounds copy in ArrayBuffer.prototype.slice due to shrinkage in argument coercion

This proposal is shipping in Chrome and Safari. There are some test262 tests, but some are in `staging/`, and coverage is not 100% for these latest fixes.

The committee discussed being “conditional Stage 4” (on reviews and tests), but multiple people voiced preference for a more cautious approach of sticking with Stage 3 for now.

Stage 4 is deferred until a future meeting pending the normative PR on ECMA262 being reviewed and tests being moved out of staging as well as test coverage for all of the normative issues fixed.

## Array Grouping for Stage 3

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-array-grouping)
- [spec presented](https://tc39.es/proposal-array-grouping/)

JHD: Alrighty. So . . . as was presented in the previous meeting, the proposal is now `Object.groupBy` and `Map.groupBy`. The first argument is iterable. And they take a callback function to determine now to group the results that returns a key for the object or the Map.

JHD: The only open question is about the naming of these methods. But and that’s only – that was brought up after the last plenary, by filing an issue, by a delegate, and other than that bikeshed discussion, everyone who said that they would review it has reviewed it, except I am not sure if – if MLS is online or anything from the webkit team was able to take a look.

MLS: I am here.

JHD: Cool. Were you able to take a look or someone else able to take a look at the proposal?

MLS: I don’t think we have looked at this. I can check with colleagues and get back to you later in the meeting

JHD: Okay.

MLS: Okay. That’s fine. Thank you.

JHD: But assuming that that review does go well, then the only remaining issue would be the naming. And I don’t know if you want to pull [issue #57](https://github.com/tc39/proposal-array-grouping/issues/57) up for me

JHD: I’ll do my best to summarize the issue, but, ACE, if you’re around, feel free to jump in if I miss anything. Essentially, that the concern addressed is that Object.group sounds a little like a map as opposed to building one: It operates on an argument and then, you know, it notes that Object.create and Object.fromEntries work -- they do not operate on an Object argument. They produce an object. But because of the word create and from, that these are, you know -- these are the exceptions and they, like, strongly convey what they’re doing. And so it sounds like some Bloomberg folks came up with some alternatives from grouping, by Grouping.from, and there’s been some back and forth. I pointed out that promise.all and the other dominators produce a promise and awry.from produces an array and so on. So my personal preference as well as JRL, so the champion’s preference is to stick with the name `groupBy`, but it’s, you know -- this isn’t -- for me at least, this isn’t something I’m strongly attached to. But the functionality is more important than the exact name. So if the committee has things that’s important enough -- thinks it’s important enough to change the name at this point, then we can do that. So I just wanted to open it to the room if anyone had alternative thoughts or a strong argument in either direction.

RPR: Okay at the moment, there’s nothing on the queue. Which is surprising for a naming issue. Hopefully good. EAO has +1 to the current groupBy. And ACE?

ACE: Yeah, I do stand by my original thing, but with all things considered, JRL, and your argument that the precedent for the name of this function being groupBy, convinces me that it’s the right thing overall, all things considered, yeah, so please consider it closed from my perspective. We did discuss this within Bloomberg and came to that conclusion.

RPR: So +1 for groupBy from KG and CDA and CM and everyone at Agoric, and SYS says, sounds good to him.

JHD: Okay. Well, that’s convenient for me certainly. All right, well, that’s great. So then I guess the next thing is Michael, I was going to ask for conditional Stage 3 on your -- you or someone on your team’ review before the end of the meeting, but if you prefer, I can wait to ask for that until after you’ve reviewed.

RPR: Yeah, let’s go conditional advancement request.

JHD: Okay. Then I’ll ask the room. Can we go for conditional Stage 3 for this proposal? The condition being that Michael or someone on his team has been able to -- has successfully reviewed this and any issues brought up have been addressed?

RPR: All right, so this is a conditional question for advancement.

DE: I support conditional advancement, if the only thing is missing reviews, given that we don’t have any issues that we know about.

SYG: A question from Michael: I have reviewed this, and I would actually like to ship it fairly soon. There is some demand for this method. So given that it’s conditional and you haven’t yet reviewed it, would you like for some synchronization on our end before I ship it or are you also comfortable with just shipping it?

MLS: Well, remember, we shipped the prior thing and then unshipped it. I think we’re just at motivated as you. If it hasn’t been reviewed, I will review it tonight.

JHD: Perfect, thank you.

RPR: Excellent. So plus one to the conditional Stage 3 from MS, EAO and also Stage 3 conditional support from CDA.

JHD: Thanks, everyone.

RPR We have consensus on the conditional Stage 3. Is there more to talk about on this topic, JHD?

JHD: No, that’s it. Thank you.

RPR: Okay, that was very quick. All right. Let’s just see -- oh, yes, so could we have a summary for the note takers, please.

### Summary and conclusion

1. We have consensus to keep the name ‘groupBy’
2. Stage 3 is conditionally approved pending the remaining review from MLS (tonight). No particular issues are anticipated.

## Public calendar continuation

CDA: I just wanted to say with regard to determining if your meeting is going on the public calendar or not: just a reminder, nothing the permanent, so you don’t have to agonize on the decisions. If you wanted to include on the public calendar, you can take it off later. If you don’t want to include it now, you can always add it later. That’s all.

## Deferred import evaluation

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-defer-import-eval/)
- [slides](https://docs.google.com/presentation/d/1rSsVsFsnXQZ8pEGFwAGiVbVqndr4DHEUqTGEM9Au0_4/edit#slide=id.p)
- [spec](https://tc39.es/proposal-defer-import-eval/)

NRO: The deferred import evaluation for Stage 2. This was a proposal originally done by GB and the past few months I’ve been working with Guy on this. So just recaps is to provide some -- like, a low optimizing to be as fast as possible given some very strong constraints as we need to respect because of how modules work. So what are the circumstances? We’re mostly looking how to optimize some large compiler bases where, like, there are a lot of -- code bases, where there are a lot of modules. The module loading is an initial part of the start-up cost. And we want to make this work without forcing everything to become async. We want this to be as easy as possible to maintain. And, like, there is no one size fit all answer, like in some cases, you might be okay with just deferring everything, using a dynamic import. In other cases you are okay with getting maybe some less benefits. Like, trading between, like, getting better ergonomics in exchange.

NRO: As I mentioned, like, we can have some sort of lazy imports dynamic import. So say you have this code where you import some module who has the initial evaluation cost, because you know the value from this model that maybe you are rarely using, it might not be actually called at all depending on how the program is being run, so you might want to defer this start-up cost, so what you do is that instead of using the import, imagine the first line is latent, you just use a dynamic import by using in the function where you actually need this value. And you need to mark your function as `async` and everything becomes asynchronous and, like, it’s very viral, and, like, you need the add this sync everywhere, even if you’re not actually meaningful everywhere, but it just -- just because you want it to, like, lazily log some very deep interdependency.

NRO: And this proposal, deferred import evaluation, tries to solve this, so improve start-up performance without forcing you to change your API.

NRO: So, what can be deferred? Well, when we talk about modules, we’ve seen five phases, five phases of a single module. So we load the module, and these might be asynchronous because there might be a network request or it might happen sequentially, because if there are some systems, some platforms actually use synchronous operation modules. And then we have module parsing, which is needed to find all dependencies and log all of them. And finally, we have what this proposal does: try to defer module evaluation, so the last part, so we can do all the synchronous stuff ahead of time and do all the parsing needed to recur all interdependencies, because this can be a lot of the modules to do all of this and just the evaluation part. And this is like if you’re more familiar with how we presented the various phases of loading modules in other presentations related to the modules, this is basically the same, just that phases -- with those phases. So we’re not deferring everything. Like, that’s this -- does this still bring some significant improvements?

NRO: I just went through the slides from the presentation proposal some months ago by GB. YSV originally did some analysis on Firefox internal code between JavaScript, and she found that almost half of the time is spent on loading and parsing the module, and the rest of the time is spent on the initial evaluation of this module. So this will basically save, like, in this specific case, half of the time. And there are other examples, like, for example, in Babel, we -- Babel is based on many things and for everything you need to compile you need a different package and you need to initialize the plugins and we need to set up some helpers and some things we do while logging the module, and this was very expensive, especially considering now people don’t compile every feature using Babel for (indiscernible). So many of the plugins were not used all time, and we found by lazily initializing all the start-up logic we could -- we could improve certain times in many Babel set-ups, and there are also other examples, for example, Ingest years ago moved to lazily loading some dependencies, and so that they were only loading when actually needed for the that’s that was running and they actually found some initial improvements.

NRO: And, okay, so how are we proposing to achieve this? What is the API we are thinking of? Import statements would have the `import defer` and next space as the name syntax. This follows the syntax follows what has already been established by the `import` space proposal where we have to modify the import key one. And this `import` statement would load the module, log the dependencies and would not actually evaluate them until the property on the name space object is read. So in this case, the value would trigger the evaluation of the model of the same value property access.

NRO: Okay. Okay, so I’m going to -- so it’s assessing parts, like, not named imports, because we don’t really want to have, like, just accessing a bundle to trigger effects. We want to constrain these to property accesses, so we’re constraining the API to only work with model bases, so we are always triggering properties from an object. And so, for example, if we have a module that imports A and B and B is deferred and we evaluate this module graph, A is not deferred so we see the console log and B is not evaluated because deferred, and we start evaluating the module, so we see right now our console and then we see A1 in our console. Then when we access the property from the main spaces of deferred module, these will trigger evaluation of B and we see B evaluated and finally we keep evaluating the top-level module. And so our initial example that we saw how today we can render to a factor to use dynamic import avoid the initial -- paying the initial start-up cost when it’s maybe not necessary, we can now use the defer space syntax.

NRO: There is a problem. And the problem is that modules are not always synchronous because we have top level `await`. And property access needs to be synchronous. So there are different solutions to this. One solution would be to just not support top level `await` and throw if there is a top level `await` anywhere. But we don’t really want to split the modules in model synchronous and modules that can be deferred, so what we’re proposing to do is to evaluate asynchronous modules even if they’re part of the deferred subgraph.

NRO: Let’s say we have this module graph with our entry point at the top and you can see the dashed arrows marking deferred imports and a module using top level `await`. When we start evaluating the module … We first look at all -- like, we first detect which are all the modules need to be evalwhited, so there is, well, you’re dependency, but there is also an asynchronous model in the deferred graph, so we need to evaluate that model together with the dependencies, so we evaluate model 1 and then 2 and 3 and finally we can evaluate the top level model. Then let’s say that at some point, something triggers the evaluation deferred graph, so then at this point, we find its dependencies. The dependencies, like, the entry point of this deferred subgraph and we start evaluating them. One of them has already been executed and that’s okay. It can already happen today that when evaluating a module one fend sea (?) has been evaluated for those reasons, and then we go ahead and evaluate the top level model.

NRO: So this is the solution. Where `import defer` is used for a module with top level await, something must happen ahead of time. It’s deterministic, like, you know that only the asynchronous part happens ahead of time. But it still allows you to defer the evaluation of all the synchronous parts.

NRO: In the first slides I mentioned how we have dynamic `import` to defer loading and parsing, and this proposal is just about deferring evaluation. And that’s the only guarantee we can make. There are some environments and platforms in which this proposal would unlock deferred -- well, deferred loading and parsing. And this is -- this can happen when in cases when loading modules are asynchronous such as environments, and where we can generate some metadata so that we know, like, ahead of time generate some metadata so we know which are synchronous, which modules have some errors, and which modules can actually be deferred, so, like, for example, there might be a built to generate the metadata and then at run time can just query the metadata and if a module can be fully deferred with the dependencies and can fully skip this module. And some examples are internal code browsers or loading the browsers and cached, there are several times where have a deployed comment or push commit where they already perform some ahead-of-time analysis of the deployed code. There is compiled CJS, which is what it does. There is CJS and the way we do our defers is actually defer the required codes and these would still match semantics of proposal or other examples of CJS used together.

NRO: So what are some current language properties and how is the proposal change them? Right now models are guaranteed to execute after the dependencies if there are not cycles. And this proposal, well - Okay, like, these properties will hold except obviously if the module is explicitly marked as deferred. It’s already known that some dependencies of a model might have been evaluated before evaluating the module that imports them because they will be, like, imported from somewhere else. And this proposal, the way it handles the evaluation, it’s possible because already there is no guarantee about the order in which, like, a module and its dependencies are evaluated. However, like, I introduce, it makes it slightly more common to see this happening where dependencies have been evaluated in case you’re being deferred and your dependencies uses `await`.

NRO: And there is a property that we lose that is that right now, module code is always evaluated at the top level of an execution stack. In this example when CJS query, let’s say we have this query function that cannot be called during a code to the update function. And like update we receive a callback, so this not concurrent. Query must not be called to the callback. And this model is now safe because queries always call with a fresh stack, so it doesn’t need to check that it’s not being evaluated doing update. While if B -- if the evaluation of B can be triggered synchronously from somewhere else, we lose the property. So B will need the introduce checks to check code doing update, then do not call `query`. And thanks to the SES group for discovering this issue. Like, this can already happen in other cases, like, for example, in using CJS and our speculation is just because developers are not relying on this existing language property.

NRO: So this proposal is now what I presented so far, but there are some possible extensions we’re thinking of -- about. And the most important one is about deferred reexports. And like the idea is that you could somehow have modules that have deferred export for the modules and those other models are only evaluated when actually needed. So in this example in the slides, the `ns.foo` access would only trigger access of A and B and not actually evaluate CC, or maybe even just with static imports, like, with named imports, so maybe this could evaluate ahead of time A and B, and completely skip evaluation of C. And like this is something that still is very much up in the air. There are no clear semantics yet, but something we’re thinking about.

NRO: Okay, so can you already try this somewhere? Well, we have an experimental implementation. Like, if you can find a link to the slides and this link, there are some tests and you can see how this proposal works. And we are working already on experimental webpack implementation. The goal is not to ship something to web Browsers but to understand how complex it is to implement this proposal. And the proposal does not currently -- the implementation doesn’t currently exactly match the semantics, we’re work on it. And lastly, with we have a tool that follows step-by-step the module evaluation in the stack to see how the state of different models change when evaluating. And, like, it’s this -- this very much helped me when I started to go through this because it’s a particular complex part of it. And -- well, and as I mentioned, we have a spec. So you can check it out if you’re interested. And, yeah, that’s all. Do you want to go to the queue?

CDA: Yeah, we have quite a large queue, so let’s get right into it. First up is Shu.

SYG: Yeah, can I see the profile again? Okay, so the intention here is that the highlighted stuff there is about evaluating the top level?

NRO: So could you repeat it. The audio was not --

SYG: It’s the intention of the slide to show how much time is spent evaluating a module top level?

NRO: Yes, like, this was, like, some specific models internal to firefox that she used during her analysis, and these blue parts are parts that could potentially be deferred.

SYG: Okay. Okay, I see. Okay, all right, I think that clears it up. Thanks.

KG: Yeah, the top level `await` thing does seem like a problem. I agree with your decision to not make it throw. Mostly just because, like, you don’t expect to add in top-level `await` to a module to be a breaking change. But it seems quite costly that top-level `await`, though not necessarily a breaking change, does cause the graph to suddenly become eagerly evaluated when previously it would not have been. I don’t know -- I think that it limits the utility of this feature, like, pretty substantially. I don’t see an alternative. But it makes me less excited about the feature. A lot less excited about the feature.

NRO: So note that top-level `await` doesn’t pollute the whole deferred graph, but it only forces the evaluation of the synchronous model itself together with its dependencies. In this example, the module to red or brown can still be deferred even if it has a synchronous dependency. So, like, it’s not -- it’s not --

KG: Sorry, I didn’t mean to imply otherwise. I agree with that, but, like, it does cause the module with top-level `await` to be eagerly evaluated, and its top level dependencies, and that makes the feature a lot less useful, because you get a lot less deferring, and it, I guess, is probably still worth it, but it makes it a lot closer to not being worth it for me.

EAO: Just very briefly this doesn’t mention anything around top-level await include the module more eager than that they currently are. They wouldn’t be able to be deferred as known top-level `await` content would be.

KG: I agree. But the whole point of adding this feature is that we want to defer things, and we actually don’t get to defer things. We get to defer, like, some limited subset of things, and that’s just less good and makes the feature less valuable, because in fact we aren’t deferring the whole graph. We are deferring only potentially a small portion of the graph, so the feature is less useful

RPR: So I think Kevin’s point is fair that this does reduce the amount of the graph that can be made lazy. In practice, in the system that we have in Bloomberg, we have supported the equivalent of top-level `await` for nearly 10 years, and the number of places it actually gets used is very, very small. It’s a power tool that you only reach for when you need to, because it does have these implications on loading. I think we can see this in the log. We can see what happens in the wild, but so far, I’ve not seen evidence that TLA (top-level await) is everywhere, so on that balance of how much this reduces the feature’s value, I believe it’s likely to be a small loss, not a large loss.

DE: Going to that a little bit more, we’ve seen that top-level await in the few cases we see it is closer to the leaves of the model graph, which is the case that this algorithm graph does. All you have to make eager is all those leaves. I think it’s important that we evaluate this thing about how can benefit empirically based on how it works in larger programs and we have seen that it’s very useful in larger programs, in many different environments. So I don’t think that’s going to be invalidated by those programs making tons of additional use of top-level `await` in a way that would block this. But maybe I’m missing something.

SYG: Is there an -- well, incompatibilities, I said incompatibility in the queue, but maybe that’s not quite the right word. But given that the existing technique is dynamic import, which is async, which is viral, if you are currently trying to defer some stuff by making it async, by biting the bullet of “I’m going to color my functions” and actually have it virally propagate out and when this comes along, because of the top-level `await` restriction, if you have already made some stuff async, is this -- does this not compose as well as you might hope and then people can’t actually take advantage of the deferrals because they already made some stuff async in the current world? Does that question make sense?

RPR: I think that’s not what we’ve seen in Bloomberg, which is that when with you use dynamic import, that fully cuts off --yea separates out the chunks and the portions to be loaded. So it’s never a loss to compose this with the traditional dynamic import.

SYG: What I’m saying is if you’re dynamically importing something that is currently synchronous all these dependencies are synchronous and you’re like I want to make some of the dependencies asynchronously so I could asynchronously use them in some contexts that asynchronous and deferral becomes the thing and you have to defer it to though you have convert those back to async to convert it back to a deferral?

DE: You never have to make the thing synchronous, obviously. I think LCA’s answer gets at the question you’re asking also. Oh, Luca had to go, sorry.

RPR: Next we have SFC.

SFC: Yeah, I just wanted to note that my understanding of the -- what was previously called the import reflection proposal with Wasm is one case that I believe we use async modules, and I’m a little concerned about the narrative that all async modules are a power user feature, because I don’t think -- that seems like a case that my understanding is that async modules are the state of the art for loading Wasm, and that’s definitely a case where being deferred where that would be desirable. So I had another topic later on in the queue as well about this, but I just wanted to flag that.

NRO: So with the current imperfection proposal model, like, source imports of the modules are still synchronous, however, like, once when they will have the full integration between ESM and Wasm, they will be asynchronous. I don’t know if it’s possible for Wasm to provide some synchronous evaluation capabilities, but in that case, the integration could be built on top of that allowing to defer eventually Wasm modules too. With the way Wasm is executed right now, yes, it’s asynchronous and the Wasm part would not be deferred.

DE: So concretely, it really is possible to make synchronous Wasm evaluation. It’s already part of the Wasm API. We’ve made them asynchronous by default where it might take recompilation to reinstate a Wasm module. However, I think it is important to enable deferred loading for Wasm modules, so I think we can consider this -- work out how to make this work during Stage 2, this interaction. Yeah, the decision to make Wasm modules -- async was based on part of the implementation in JSC, which always used the baseline compiler and they added an interpreter. The baseline compiler coded in some knowledge about what baselines were used and where the interpreter doesn’t, so it may be possible to remove this restriction.

KG: In practice, WASM is not able to be loaded synchronously. Chrome limits it to 4kb. They are not lifted it indefinitely. I think the proposal is 8 megs. Yeah, Wasm in practice can’t do the asynchronous thing.

DE: KG, you’re confusing module compilation with module instantiation. Chrome’s limit is all about the compilation. You can’t synchronously compile larger than a certain amount. But it’s only a JSC thing.

KG: I’ll take your word for it.

DE: It’s part of the fetching and parsing stage, which this proposal does not aim to defer. I mean, not on the web at least.

CDA: Okay. We have less than 15 minutes for this item, so please be --

SYG: Can I interject. I was going to do a response, but I -- before we move on to the current topic.

CDA: Please go ahead.

SYG: On the -- so, DE, on the -- so the profile output that is in the slides show a line called script emit, which I assume is lazy compilation, and that was folded into top-level module evaluation time in the analysis, I presume. So, like, I’m not exactly sure how the champions are thinking about the performance characteristics here. Obviously more time is saved if you are doing lazy evaluation -- sorry, lazy compilation here, like, you’re just parsing, you’re saving the offsets and compiling it for the first time when you run it. The discussion around WASM makes that less clear to me. Like, what is the minimum amount of things that are deferred to make it worth it, if you’re expecting a module where you’re always going to pre-compile, then you’re just evaluating, that is smaller than what is currently touted as the potential speedups shown in profile.

NRO: Okay. Like, my answer in Wasm was based on the existing expect load graph for how Wasm is evaluated. But ideally engines would be deferred as much as can be synchronously deferred. An example of something that could happen is when you have a deferred import model, you still -- For an adjusted model, you can still start compiling the module, generating by code in some Chrome Trend (?), and then once you actually trigger evaluation of the module, like, lock, wait until the file is compiled and can be executed. Or, like, it will also be possible to just defer the full compilation till later and, like, synchronous block a little bit more. Like, it’s a matter of how much, like, engines are comfortable with blocking to execute later.

SYG: Yeah, but that plays into, like -- the Wasm -- the reason the Wasm module compilation has this async requirement is because some -- I don’t personally necessarily agree with this, but that don’t block the main threshold (?). So, like, I don’t think it’s purely a choice of per engine. We probably want some coordination around this. Probably just don’t want really long pause times if you want to defer some Wasm modules.

DE: So, SYG, I think this is the same confusion that I was trying to address with Kevin’s point. Nobody’s proposing that compilation be changed in terms of how it’s done. The idea is that fetching and parsing remains an asynchronous operation that’s done blockingly before anything runs. This allows everything to run in parallel. As you know, it’s important for parsing to be able to run off the main thread as well, requiring the synchronicity to be suboptimal. But for JavaScript, overall, we’ve seen, I think -- we don’t have, like, super strong numbers on this, so maybe that’s why it wasn’t in the presentation, but roughly there’s a split, maybe 50/50, due to in the time saved due to fetching and lazy parsing in environments as NRO mentioned, which are able to avoid it, unlike the web. And for evaluating, which takes a significant amount of time. So in environments where you are parsing and compiling otherwise and eagerly, I would -- I don’t know whether this holds up, but it’s, you know, lazy parsing makes sense in the Wasm context, and it’s just the (inaudible) in the compiling operation. Yeah.

DLM: Yeah, I’ll be brief. I suppose it’s not very surprising given that Yulia was involved in the original proposal and there is Firefox in the slides, but this is something we would definitely be happy to see advance to Stage 2. In particular, we already support our own version of lazy module loading that’s used heavily in the front end of Firefox. I asked that team for feedback on this proposal and they were quite favorable. And there’s obviously other people that are using something similar, and I think that it would be great to see this advance and be able to coordinate on tooling and things like that in the future. Thank you.

CDA: Thanks. We have a little under 10 minutes left. Next is ACE.

ACE: Yeah, so something else about our use at Bloomberg. So we have an implementation of this not, using the syntax but it is available in ESM, and the real amazing thing for us is this feature already exists in other module systems and for team’s already depending on it, e.g. if using Common JS. And one of the things that prevents them from using moving to ESM is a lack of this feature, because dynamic import won’t work with the current code. As we’ve discussed, it can be too big to go full async and color the graph that way. So it’s been, yeah, just great that we’re having this thing in ESM allowing code to move to ESM in a way, we’ve implemented this, but we’re trying to align the implementation and only gradually roll out this feature so we can keep aligning with this proposal hoping that it becomes standard. And I don’t think that’s specific to Bloomberg. Like, in the ecosystem, existing bundlers and runtimes already have features like this which allow you to synchronously import and they all have slightly different semantics, having this standardized in one way, I think, will be a really big win.

CDA: All right. RBN is next.

RBN: Yeah, could you go back to the slide discussing top-level `await`, the two options. So the concern that I have here with the first option, this -- the option of throwing, is that if you limit import defer to only modules that do not have top-level await, there is no guarantee that any code that you write will continue to work when you do any type of package upgrade. Because any third-party package you might use could decide to start using top-level `await` in ESmodule and then all of your import defers start throwing. And while you hopefully would discover this during development, you could be in a writing package that is using a peer dependency with another package that gets installed, and anything in that dependency change could cause an issue. I think throwing is not really viable. If the idea is just to do a best-effort optimization or the idea is to try to optimize performance to not load things until you absolutely need them, then I think eager evaluation of async modules and that best effort for import defer is probably the only option that’s viable.

JHD: I have a couple thoughts here. So one is that the -- like, I understand why you have to use `import *`, because it’s super weird and magic to have accessing a variable have effects. But one of the reasons -- like, `import *` is something that I’ve generally considered and found to be considered “gross”, for lack of a more precise word, sloppily and implicit and prevents a lot of static analysis. And, you know, it makes tree shaking more difficult things like that. And the original -- some of the original design goals of ESM were -- like, or a lot of them, seems to be “let’s make everything as static as possible”, so a lot of decisions were made that we might not have made if we had expected that eventually we were going to have dynamic import and deferred imports and so on and so forth. So it’s sort of -- it just kind of feels like it leaves us in an awkward position, and I’m not sure if anyone still shares those original design goals and wants things to be maximally static or if we’ve just decided that’s not important anymore. And then related is there was an attempt to make a proposal for conditional static imports, and it kind of seems like this import deferral would be a way to do that, where you do an import defer and then you just conditionally access to property or not. So, yeah, I don’t know, I’m just -- I just kind of wanted to bring this all up. This is not a straightforward, obvious win for me. It’s -- like, the benefit that is being sought is valuable, but I’m just not -- I’m not super convinced on the limitations, fitting in the syntax and, you know, combining it with the mental model of ESM. I just wanted to bring that up.

NRO: So when it casts a static analysis, like, if you use, like, your name space object as name space.property, like, bundlers are already able to statically analyze that and tree shake that. The problem is when code starts passing the namespace object around or when you, like, do some, like, computed properties and it more dynamic things. Like, this proposal doesn’t encourage doing this more dynamic things. If what you need is just the imports, then all your usages of the namespace object would be just simple property accesses. And it’s similar to how dynamic import, yes, it’s dynamic. In many cases to scan static analysis, because in many cases we just pass a string to dynamic import.

KG: Just briefly. JHD, I agree this does make things a little more dynamic, but to me the most important property is that exports are not dynamic and that property continues to hold. As long as you don’t use computed properties to access things of on the name space object, it’s not like, less static in an important way as far as I’m concerned.

JHD: Yeah, I mean, I agree if you’re only using, like, dotted properties and you’re not passing around the namespace object, then the dynamism is not really an issue.

CDA: All right, finally JWK.

JWK: In the webpack implementation, we only generate the namespace object if the namespace object is used in an unanalyzable way, for example, the computed property access. So, yes, this doesn’t make the static analysis harder.

JWK: Also, I want to share, we are already using this by the webpack implementation in our project and found the result is very good. We can easily defer the module that has heavy initialization costs. We also find the namespace restriction is a little bit not easy to use, but I’m okay if we have this restriction for now.

NRO: Okay. Thank you. So if there is nothing else, I would like to ask if you have any objections to Stage 2.

CDA: Do we have support for Stage 2? We have a +1 for Stage 2 from Mozilla. JWK supports Stage 2, and so does ACE and DE from Bloomberg.

KG: Support with a caveat. So a lot of times we take things going to Stage 2 as essentially promising to do them. I want to be explicit that that is not what’s happening here. That there are, like, still genuine very real questions about viability around top-level await and the Wasm story and so on, which will need to come to a satisfying conclusion to advance to Stage 3, and it is not in my mind certain that we will be able to come to a satisfying conclusion, so it is not like necessarily the case that this will ever be able to advance further. I’m hopeful that it will, but, like, there are remaining significant questions.

CDA: Okay. We have a -- hang on. I’m behind in the queue slightly. We have a +1 for Stage 2 from Chip, and then we have BSH also have concerns. We are past time, But JWK , you have a clarifying question?

JWK: Yeah. I found a lot of discussion is about top-level await and the WebAssembly, and I want to clarify that we don’t have experience in how this proposal interacts with top-level `await` or WebAssembly. Actually, we banned top-level `await` in the current implementation because the semantics in this slide has not been there while I was implementing that.

CDA: All right. Bradford, did you want to speak? You have plus one from Bradford, but with concerns.

BSH: We’re over time, so I suppose -- I think some of my concerns at least are the same as Kevin’s.

CDA: Okay, thank you. Shu, finally.

SYG: Yeah, I’m not going to block Stage 2. I want to articulate I’ve been trying in the matrix Chat rings, I want to articulate what I want to explore during Stage 2. Which is, like, I don’t want to -- I think top-level thing is I would like to better understand are there performance footguns here because of the top-level `await` and Wasm story. Like, the performance story around deferring stuff today is to make it async, if a new performance story to defer things is to in fact not make it async, like, just as a first-order thing to say to developers that seems bad, and I want to better understand are there concerns there.

CDA: All right. Thank you, everyone. We -- Nicolo, you have Stage 2.

NRO: Thank you, everyone.

### Summary

The proposal now uses the `import defer * as ns from "mod"` syntax to import modules without evaluating them, and the evaluation will happen synchronously when accessing properties on the namespace object. To ensure synchronous evaluation while still maintaining compatibility with top-level await, modules containing top-level await are still eagerly evaluated (together with their dependencies).

The main points of the discussion were:

- How does this interact with WASM modules? The current WASM-ESM integration marks them as async. However, it may be possible to make their evaluation/instantiation synchronous and thus allow them to be deferred.
- So far the performance recommendation has been to "make things async" using dynamic import(). With this proposal, using `await` at the top-level of a module would prevent it from being deferred, going against that recommendation. How can we reconcile this?
- Forcing the namespace imports syntax may make it less statically analyzable for tools. However, it's likely that current heuristics (e.g., “it works as long as all accesses are . and not []”) are already good enough for this type of static analysis. Forcing the namespace syntax is also a compromise for ergonomics/orthogonality.

### Conclusion

Deferred imports reached Stage 2. Before Stage 3, the champions need to investigate how this interacts with WebAssembly modules and how the "use dynamic import (possibly with top-level await) to optimize performance" and "use `import defer` (and avoid top-level await) to optimize performance" stories fit together.

## Iterator Helpers: small optimisation to avoid String wrapper objects

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-helpers)
- [PR](https://github.com/tc39/proposal-iterator-helpers/pull/281)
- [slides](https://docs.google.com/presentation/d/1TzXjuzYhp-mNx_tHfl3-_3t9UFWRpkx26aYUtdLrb7A)

MF: Iterator helpers is at Stage 3. We had some implementation feedback from ABL and we’d like to make a change in response to it. As background for this change, know that iterator helpers adds two methods that accept not just iterators, like most of the helpers, but also iterables. These are iterator.from and Iterator.prototype.flatMap. And Iterator.from and Iterator.prototype.flatMap differ slightly in what they do with one iterable in particular: strings.

MF: Because of that similarity, though, we chose just to specify it using a single AO that they share, and the way we did that is for iterator.from to take any strings that it receives and make them objects, because that’s the difference between Iterator.from and flatMap. We didn’t realize at the time that, because of the way we wanted to specify it, that this causes an observable string object to be created, which you can observe if you do something very strange. So ABL would like us to -- well, has given implementation feedback that we should instead specify it differently in a way that still has the same effects but does not make the string object. So that is what I have done in this pull request. If you want to see it you can go to #281 on the iterator helpers proposal repo. And that’s my full presentation. It’s a very small change that changes observability for very obscure code that’s basically looking for the string object, and just changes a string object to a string primitive.

CDA: All right. We have a plus one from KG. No need to speak. We also have a plus one from DM, also no need to speak. Another plus one from DE. No need to speak. Any other comments or support for this change? Okay. Thank you very much. We have consensus on the optimization.

### Summary and Conclusion

An Update and small improvement has been proposed by MF

- [proposal](https://github.com/tc39/proposal-iterator-helpers)
- [PR](https://github.com/tc39/proposal-iterator-helpers/pull/281)
- [slides](https://docs.google.com/presentation/d/1TzXjuzYhp-mNx_tHfl3-_3t9UFWRpkx26aYUtdLrb7A)

MF: Iterator helpers is at Stage 3. We had some implementation feedback from ABL and we’d like to make a change in response to it. As background for this change, know that iterator helpers adds two methods that accept not just iterators, like most of the helpers, but also iterables. These are iterator.from and Iterator.prototype.flatMap. And Iterator.from and Iterator.prototype.flatMap differ slightly in what they do with one iterable in particular: strings.

This was supported by the meeting.

Consensus to not ToObject strings in Iterator.from.

## Integer and Modulus Math

Presenter: Patrick Soquet (PST)

- [proposal](https://github.com/tc39/proposal-integer-and-modulus-math)
- [slides](https://drive.google.com/file/d/1_Fnqq8q47uHm7Um9dQD0Ti8zB5R0d0Hp/)

PST: Thank you for your patience. So this proposal is adding a few static methods to the `Math` object. There are, like, two sides to it. The first one is toModulus operations, and few new integer math operations in the spirit of the existing i-modulo operation. I think Peter presented that to the committee three years ago, two years ago. And so this is just to update the proposal based on the feedback we received and the experience we have using the feature in excess on the microcontroller. And if it makes sense to the committee, we would like to prepare for Stage 2 later this year and making spec and doing that kind of thing.

PST: So why do we want to propose that? The first thing is completeness. There are no true modulus operations provided by JavaScript. The modulo operator is in fact a remainder operation. And the other integer operations are common enough. I mean, everybody’s doing something like that. And are not directly expressible currently. The second reason is for the sake of performance: Integer math can be faster, and of course, that’s especially the case for us on embedded hardware without a floating point unit. Third reason, ergonomics: Using floating point operation is sometimes clumsy when integer operations are intended. Non-integer value can lead to unexpected results. I mean, the classical case is accessing an item in an array using multiplying the array length with Math.random. That -- I think it’s --

PST: So let’s go to details. `Math.mod(x,y)`, would return the true IEEE754 module. And here are a few more integer operations. `Math.idiv`, which would do an integer 32-bit division. `Math.imuldiv` which will do `x` times `y` with `z` with an intermediate. `imod` would do the same thing with `mod` but the same thing with integer 32, and `irem`, that will do the same thing as the modular operator but with Int32. All those operations follows the model of the existing math.imul, meaning that the input arguments are converted to integer values using ToInt32 and the results fit into Int32. The -- one of the -- I mean, maybe not using the logic that we use for that is that, like, math Imul div with x, y and is should return the same thing as Math.imul and math.imul with y and x should do the same as idiv so it remains consistent.

PST: There’s a special case. I will not try to pronounce that number, be you know which one it is. Divided by minus 1 cannot be represented by Int32 because it requires 33 bits, and that impacts several of the math operations that we propose. Of course, especially idiv but also imuldiv and imod. So these are the results we propose. They seem to withstand the usage of the feature for y, but of course, it’s open to discussion.

PST: The last one is irandom, which is returning integer 32 value. There are three variations depending on the number of arguments. We’ve heard arguments it’s from 0 to that number. And we have -- one argument is between 0 and the past value minus 1 inclusive. And with x and y, it’s between x and y -1 inclusive. The implementation matches the behavior of the example on MDN get random Int and of course like Math.random, it’s not intended to be mathematically secure.

PST: There are alternate -- one of them have been suggested by Tab Atkins (TAB). The -- the most -- mostly the idea is that the X and Y could be between -- instead of between -- instead of between Int32, it could be between min safe integer and max safe integer. It’s more general, but it differs from Int32 precedent that was set by Math.imul and of course it increases the implementation complexity a bit. There has been discussion about this proposal being, like, putting all kind of things together that were unrelated. So we can, of course, divide it into many parts: modulus could be one part, integer math could be another part, irandom could be another path and we could put the different functions in the different paths. It’s -- that’s where the -- I mean, we don’t have, like, a strong opinion about that. I suppose that it’s a view for the committee that we are not talking about months of work to implement this. It’s not like a big proposal. So that’s why we tend to pack all of them into one proposal. And that’s it.

PST: So, what we look is that the question for you is is the committee still interested by that? And should we proceed with preparing the proposal for Stage 2? And in which modality? Split into several ones, something removed and so on. Yeah, up to you.

WH: Yeah, okay, it does seem like three separate proposals in one. I’m curious, for fixed precision, the unsigned versions tend to be more common and useful than the same precision signed ones. So why did you omit the unsigned division and remainder?

PST: The question is, like, there would be, like, also unsigned operation?

WH: Yes. For the 32-bit ones, the unsigned ones tend to be more useful.

PST: You think -- you’re saying it would be more useful if they were using unsigned instead of signed?

WH: Well, both have use cases. For `imul` it does not matter, signed and unsigned are exactly the same modulo 2^32. For division, it does matter.

PST: I take notes and then I send them to PH and he will reply to you, because, I mean, it’s really not my proposal. But thank you for the feedback.

DLM: So, yeah, we discussed this a little bit internally. and we’re more interested in the items that seem to be capabilities, so the true modulus and random seem interesting to us. We’re not as sure about the motivation for the other ones, so maybe some more -- some evidence and some of, like, performance gains or something like that would help convince us, but it might also be beneficial to split into three proposals like you’re talking about.

PST: Okay. Thank you.

SYG: So I would prefer it to be divided into three proposals, along the lines of modulus, which intuitively seems useful. Irandom, which to me intuitively seems usefeful, and I agree with DLM that I’m less convinced on the arithmetic methods and that should be explored in some proposal.

PST: Okay. And when people are saying keeping the models, it’s both or just math mad? I mean in, the three, it’s the first one or the second one?

SYG: What is `irem`? That’s integer remainder?

PST: Yeah, that’s like the module operator, but for integer.

SYG: Is there utility for that? I’m convinced by mod and imod.

SFC: Just a comment that Euclidean division and remainder is another operation that’s found in certain standard libraries, including Rust (https://doc.rust-lang.org/std/primitive.i64.html#method.div_euclid). I’ve been using it for calendar operations. That would be useful to include if you’re adding other convenience operations.

SYG: Yeah, I’ll skip the utility thing we already talked about. It was not clear to me when reading this what of the proposed integer arithmetic methods cannot already be exactly expressed semantics with the `|0` trick, like from ‘asm.js’ where you do floating point or you or zero everything. And if some of them are already…

PST: I think for the other -- the other operation is mostly because of performance based on microcontroller, we felt floating point unit, so in fact, that allows the code path completely avoid to use some floating point library for all those operations.

SYG: But you can -- but that should be possible with `|0` trick as well. Like, that was the point of asm.js, it could just compile it down to integer arithmetic if you wrote --

PST: I will put that to PHE. I agree with you myself, so I will follow up.

SYG: And the follow-up to that is that of course `|0` gives a signed Int32, and to echo WH's point, that points to perhaps unsigned things are in fact more useful because you cannot express them today.

PST: Okay. Thank you.

WH: In response to your question about how to split the three proposals, the first variant on the slide is what I was suggesting, `Math.mod` is independently useful, so that would be one proposal. The second proposal would be all the things which are specifically limited to Int32 or Uint32. The third proposal would be the random number generators. And I wouldn’t limit the random number generators to Int32/Uint32.

PST: Okay.

SFC: Yeah, I was just wondering why I32 is being proposed for all these functions and would it be useful to have the 64 bit versions of these? Why 32?

PST: Yeah. It would be.

SFC: Okay.

EAO: Mostly this is an observation that up until a week ago, the only issue in the proposal repo was a request to “Elaborate on the use cases for integer math operations” from 2020. And the thread of that issue doesn’t actually answer the question. So given that the slides came in late, we didn’t even really know whether this would be an announcement withdrawing the proposal or what’s happening here. I would ask that if this is proceeding as one or three proposals that these provide a much stronger justification of why do we need to do this thing, what are the questions it’s answering and the issues that are being solved here. Right now the motivation isn’t really there.

PST: Understood. The idea was to get feedback, and we got it. So thank you.

WH: I don’t understand the previous question about the Int64, since you cannot represent 64-bit integers exactly as Numbers.

SFC: Yeah, -- other people sort of alluded to this, but it would be great to be more clear about which of these operations are being added here because they are actually more efficient to perform, is it actually more efficient than if you did the same operation in userland using the existing functionality that you can get from IEEE arithmetic, which we already support? And maybe some of these operations are actually faster if the engine can, for example, take a Number and make it into an I32, make some operation and get a back and give back to the user, maybe that’s faster than if you kept it in floating point and did everything in floating point. But it’s not clear, like, whether that’s the case, and I think that would be, you know, better motivation, especially for certain operations, if you can show that this operation is two or three times faster than if you tried to do the same operation the current way. I think that would be very helpful context to have.

PFC: I’d like, if you proceed with the integer math part of the proposal, to explore during one of the early stages whether it’s possible to do the special case for `-(2**31)/-1` in a different way. Because I’m not a big fan of having a function silently return a result that’s not the arithmetically correct one. I think that makes sense for integer division in the CPU architectures, like you read in the readme, but I think my experience is JavaScript programmers generally don’t think at that level about integers. So I’d like us to explore if it could throw or do something else or return +2**31 as a regular number.

WH: The answer to PFC’s question is that it does return the correct answer in that case, but it returns the answer `-(2**31)/-1 modulo 2**32`. Keep the in mind that all of these things already do modulo `2**32` on their arguments.

PFC: Okay.

CDA: There is nothing else in the queue.

### Summary

This was an update about `Math.imod` and other integer operations. The idea was to get feedback. and TC39 has received useful input how to proceed.

### Conclusion

TC39 will follow the advice received.

## Promise.withResolvers

Presenter: Peter Klecha (PKA)

- [proposal](https://github.com/tc39/proposal-promise-with-resolvers)
- [slides](https://docs.google.com/presentation/d/1KFShqHVFhVBaqZ3anheUGOwtVDrPWCVeFvmaUpwk3AQ/)

PKA: Okay, so hello. I’m Peter from Bloomberg and I’m presenting `Promise.withResolvers` for Stage 3. Yeah, so the motivation for this proposal is that, you know, we have this promise constructor which works well for many use cases. We pass it a callback, which takes resolve and reject methods as arguments, and then in the body of in callback, we’re specifying when and if these methods should be called, then the constructor obviously returns the promise in question.

PKA: But sometimes developers want to create a promise and get a handle on it before deciding how or when to call its resolvers. So doing this requires doing this bit of boilerplate that we have in the first line where we create some outer variables `resolve` and `reject` and then inside the promise constructor just sweep those out so that we can get our handle and then proceed to call these in whatever context we want.

PKA: This is a wheel that gets reinvented a lot. We found a bunch of examples where this is either a utility function or where it’s repeated again and again inline. The proposal is a simple one. It just says let’s add a static method to the Promise class, which does this for us, which returns plain objects with the promise as well as the resolve and reject functions as properties.

PKA: The one sort of remaining open issue that was discussed last time was how subclassing and binding behavior should work. So what’s been resolved is that if we have a subclass, like, for example, Vow, and then we call `Vow.withResolvers`, that the promise property on that object that is returned by that method is in fact an instance of `Vow` and not `Promise`. And that is a related point -- a related point is that with other promise statics, if there isn’t a receiver when withResolvers is called, then we throw a type error. So that was sort of the behavior that was suggested at the last meeting. I think that received general support. It’s the way that other promise setters work, so nothing has suggested that we should move off of that, so affirming that behavior.

PKA: We have -- I should also mention that, you know, I settled on the name “withResolvers”. I haven’t heard -- there was some discussion, and as I acknowledged in the issue on the GitHub and previously in previous meetings, it’s maybe not the best possible name or rather I should say maybe our -- some issues with it, it is a bit verbose, but I never heard a better alternative, so proceeding with `withResolvers`. We have a spec. There it is. We have a polyfill. There it is. We have tests. Here they are, or rather here’s the PR for them. So, yeah, I’d like to open the floor for questions and comments at this point.

CDA: There’s nothing in the queue so far. Now, Shu?

SYG: We discussed this internally. A question that came up was, you know, this -- some of this has been covered in previous meetings as well. So in the original design of promises, it was litigated that we would not have this form, and one of the reasons was uncaught rejections -- sorry, uncaught exceptions you want to automatically reject the thing, which this would not -- which this would not do. So I agree with the fact that you will need this kind of capability to be able to exfiltrate the resolvers somehow, and that use case is not going away and that it is not an illegitimate use case by any means. But I’m wondering, what is the downside in not having this as a standardized method? Given that it is fairly easily expressible in userland, are we saying as a committee we no longer buy the original motivation and we are litigating this? Are we no longer worried about the footgun, or are we just saying that, like, just because it’s used everywhere, we should add things that are used everywhere?

PKA: Well, I guess in part, yes, that there’s proven out to be demand for this, and not adding the method just means we’re asking developers to continue to write this template and to do so in a way which, you know, also experiences the uncaught exception issue. So in part, yes, this is response to just a demand that appears to be there. Which we didn’t know about at the time of the original discussion. But also just I think that in general people are a little more comfortable with promises these days, that it wasn’t clear maybe how promises would be adopted or used in the ecosystem and what things would look like at this point, so, yeah, I suppose this is a --

DE: Yeah, I think there are two pieces to this. This one is yes, generally yes we should add things to the standard library that people have to implement over and over again. I think that should be a shared role of the committee, when it’s things at the JavaScript level. The other part is, how does this make sense given the previous design, which specifically avoided this, and I think it’s very legitimate to bring this up. I think we should consider this a decision based on experience that we are, you know, not making that particular design tradeoff that was previously made. When promises were first created, there was the expectation and I hope that people would feel comfortable using the promise constructor. This has proven to not be true -- well, somewhat. So use of this idiom -- well, at the very least, in the course of this proposal, when I’ve explained to people the original motivation and the fact that the exceptions are caught and turned into a rejection when it’s within the promise constructor and that’s why it’s excluded, most people have been surprised. And kind of baffled by the logic for exclusion in the first place. I think this has not received a large amount of kind of community buy-in, and that’s why it’s so common to bypass the whole mechanism in first place and use this particular idiom, so the path of excluding it hasn’t quite led to the thing that we want. The biggest risk that this whole thing was trying to avoid was that people would try to use functions that return promises, make them sometimes throw an exception eagerly and sometimes do a rejection. Where the hope was that everyone would use a rejection. I think the use of `async await` now, which wasn’t present when we made this original decision, not to include defer, has helped many people switch into this standard pattern of it’s just promise rejections. And, yeah, I’m kind of optimistic that the ecosystem will do the right thing with this, given that they generally already have been doing so.

CDA: All right, Kevin is next.

KG: On the promise rejection thing, basically what DE said, the thing where you catch a wrapped exception makes sense if you are returning a promise. But it only makes sense if you are only returning a promise. If you are doing anything else, you don’t want to catch exceptions in the constructor. Failing to schedule a task should be a synchronous error rather than an error for the person trying to consume the result of the task. So the promise constructor is fine for what it is, but this new function you use in cases that you’re not just returning the promise right away, and so it makes sense that in these cases, you actively don’t want to wrap up the exception.

CDA: Nicolo is next.

SYG: Sorry, I have to run, but can I respond to KG real quick. It’s not -- so it’s not impossible to express the use case, right? It’s about a standardizing the convenience. You are certainly able to get the resolvers out today I agree the use cases are going to continue to exist. You are not -- there’s some times you don’t want to catch the exception and turn it into a rejection. But we’re not talking about a new express. We’re talking about enshrining the convenience. And I’m somewhat convinced by what DE said, which is if -- I’d read a little bit into what DE said, he said `async`/`await` is the actual thing that helped people with the rejection footgun issue with `async`/`await` now in the language, promise constructor is probably an escape hatch anyway and it’s fine to no longer really try to build the right cowpaths into the API. Is that a fair characterization, DE?

DE: I think so. I didn’t fully catch that.

SYG: Okay. All right, I think that’s fine with me. Unfortunately, I have to run.

NRO: Yes. So, like, when we first introduce promises, when I started using promises, I often needed the promise constructor because I was working with a lot of callback-based APIs and I needed to convert them to promises. And having this constructor that was, like, handy, because my callback code was pretty much set containing anyway and these adjust and move it inside the promise constructor function. Well, now, like, almost all the APIs are already promise-based, and the reason I now have to manually create promises not because I want to convert something that’s subcontained, but because my promise logic needs to be divided into different parts of my code. and so, like, while that was a minority case in the past, now the ecosystem evolved. For me personally, it’s the only use case for creating promises that I have now.

EAO: I’d like to note appreciation for the long research into the history of the possible names for this, though it does look like at least “unsmoosh” was never considered. The resolution of the discussions on GitHub ending up “withResolvers” sounds like the right resolution, and we like this thing.

CDA: Thanks. I would still prefer defer, which would be not compatible because some ES6 polyfills will aggressively delete `defer`, but deferred I think would be still possible. But I think it’s fine as is and still would support “embiggen” as well.

JHD: (from queue) “+1 for Stage 3 with the current name (or “deferred”) and current subclassing semantics”

CM: One thing I like about this proposal is that it feels to me like a better fit to the user’s mental model of promises. When I first started using promises it was in the 1990s way before JavaScript had them, and I’ve been using them ever since then for various things, and when I first encountered the JavaScript Promise API, my first reaction was like, are you people all on drugs or something? And I very much appreciate this proposal: it presents a better framework for explaining the API to people.

CDA: That is everyone in the queue.

PKA: Okay, then I’d like to ask for consensus for Stage 3.

CDA: Consensus for Stage 3 presumably with the `Promise.withResolvers` name.

DE: SYG previously expressed some concerns, but I think he concluded I think this is okay. Maybe we should confirm with him when he comes back that he’s okay with Stage 3.

CDA: We have plus one on the queue from Mozilla, plus 1 from IBM as well. I believe we had a
+1 from JHD. Any other explicit support? Christian, plus 1 from Zolari. And I think we can note -- sorry, Dan, were you saying something?

DE: I think we could say that this is conditional consensus, that we would confirm that SYG is okay with consensus before the end of the meeting.

CDA: Sure. I think we can proceed -- yeah, I think we can proceed with Stage 3 on the condition that SYG would not block. We have also a plus 1 from MAH from Agoric. Any other comments? I’m hearing some mumblings from the room. +1 from CHU. Okay.

RPR: No, I don’t think there’s more from the room.

CDA: Okay. Then I believe with the caveat of SYG notwithstanding, you have Stage 3 for
`Promise.withResolvers`.

PKA: Thank you.

### Summary

The Promise.withResolvers is a new proposed static method on the Promise class which produces a plain object with a `promise` key, which maps to a Promise, and `resolve` and `reject` keys which map to the corresponding resolving functions for the promise. Since this proposal advanced to stage 2, there were two developments: 1) the name `withResolvers` was confirmed (the champion acknowledged it may be an imperfect name but no superior alternative arose) and 2) the subclassing/binding behavior was affirmed as matching other Promise statics: when the receiver is a subclass of Promise, the method will produce instances of the subclass, and if there is no receiver `withResolvers` will throw.

There was general agreement that the ecosystem has shown the motivation for this API and that ‘withResolvers’ is the best name to move forwards with. One question that was posed was what has changed since the last time this proposal was discussed (during ES6). The answer given is that 1) subsequent developments in JS usage since ES6 has shown the original design to be mistaken in its exception handling behavior, and 2) that developer desire for this API has remained strong despite emergence of more Promise-first APIs.

### Conclusion

The committee approved this proposal for Stage 3.

## 2024 meeting planning

??: All right. I don’t think we have enough time left to sneak in another item. Unless we have a nice little 10 minute something or other, which I’m not convinced we do.

??: I could do a quick admin point. Which is that it’s almost time to start planning for next year, and the -- and the venues or we might go for in-person TC39 meetings over 2024. So if you would like to volunteer to host a meeting, we will be looking for venues in the US, continental US, European time zone and APAC. That’s how we’ve divided things so far, so one in each. So if you would like to -- if you have facilities or ability to host, please come and speak to me at any time. I will also be posting this on the reflector as a formal call for hosts.

??: Do you have a draft of what meetings you want to be in different geographies?

??: Not really. I don’t think there are any constraints at the moment other than we plan -- we continue to plan the same schedule as like there year, which is a total of six meetings, ideally once every other month.

??: Odd months.

??: And I think it’s wise to keep the in-person meetings four months apart, if possible. But this is all down to the constraints and the basically whether we get people offering, because when people offer to host, sometimes they can’t offer any top month of the year. It’s down to availability of particular rooms and so on. But, yeah, any more questions like that, you can speak to me or we can also discuss in the reflector.

??: So one of the things we were mumbling about here is that not everybody’s name appears to be on the notes for today. So if you haven’t put your name in the notes at the header, please put your name, your abbreviation and your organization.

??: Just one more item on the upcoming meetings. The one that is, I guess, probably landing in February would be the centennial, number 100. So it would be nice to get maybe that one to be in-person, if possible.

??: Yes, we should do something special for the 100th, so if you have the best venue in the world, please volunteer it.

??: It would naturally follow in January, but there’s a little bit of leeway.

??: As I said, the main thing that limits us in hosting is who volunteers to host. That is something that, you know, not everyone has that ability. It’s -- it’s relatively rare. So that’s the reason for asking everyone here today.

??: All right. I think we’re -- we have five minutes left. I don’t think we can sneak in data view methods within five minutes. Put JHD on the spot. Probably too short even for that one.

??: Yeah, probably too short.

??: Okay. All right, well we will give you a few minutes back extra, and we will see you all tomorrow.

### Summary

TC39 chairs have started the usual Meeting planning exercise for the the following year, 2024. It was noted that for in-person meetings a good plan is to hold them each four months apart. It was noted that the 100th TC39 meeting is upcoming in early 2024 (January, February). Therefore holding an in-person meeting and doing something special would be nice.In general: Venue volunteers and hosts are welcome. Please express possible interests to the TC39 Chairs.
