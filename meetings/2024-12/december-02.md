# 105th TC39 Meeting | 2nd December 2024

-----

**Attendees:**

| Name             | Abbreviation | Organization       |
|------------------|--------------|--------------------|
| Waldemar Horwat  | WH           | Invited Expert     |
| Daniel Ehrenberg | DE           | Bloomberg          |
| Istvan Sebestyen | IS           | Ecma               |
| Jordan Harband   | JHD          | HeroDevs           |
| Dmitry Makhnev   | DJM          | JetBrains          |
| Chris de Almeida | CDA          | IBM                |
| Sergey Rubanov   | SRV          | Invited Expert     |
| Michael Saboff   | MLS          | Apple              |
| Jesse Alama      | JMN          | Igalia             |
| Andreu Botella   | ABO          | Igalia             |
| Jirka Marsik     | JMK          | Oracle             |
| Rob Palmer       | RPR          | Bloomberg          |
| Eemeli Aro       | EAO          | Mozilla            |
| Josh Goldberg    | JKG          | Invited Expert     |
| Aki Rose Braun   | AKI          | Ecma International |
| Ron Buckton      | RBN          | Microsoft          |
| Luca Forstner    | LFR          | Sentry             |
| Mikhail Barash   | MBH          | Univ. Bergen       |
| Ujjwal Sharma    | USA          | Igalia             |
| J. S. Choi       | JSC          | Invited Expert     |
| Linus Groh       | LGH          | Bloomberg          |
| Keith Miller     | KM           | Apple              |
| Richard Gibson   | RGN          | Agoric             |
| James M Snell    | JSL          | Cloudflare         |
| Samina Husain    | SHN          | Ecma International |
| Devin Rousso     | DRO          | Invited Expert     |
| Nicolo Ribaudo   | NRO          | Igalia             |
| Jan Olaf Martin  | JOM          | Google             |
| Daniel Minor     | DLM          | Mozilla            |
| Philip Chimento  | PFC          | Igalia             |

## Opening & Welcome

Presenter: Rob Palmer (RPR)

RPR: Welcome everyone to the 105th TC39 meeting. It’s labelled 106th in the meeting notes. That’s my fault changing the name. I can see the transcription is beginning which is excellent. Before we start, could I get a couple of volunteers to assist with the note taking to polish up the notes as we go. I’ll get started with the slides, then. Here we go. So welcome everyone. We are here with our remote meeting today. And so let’s begin. Are these slides working? There we go. So you know who we all are, I’m rob one of the three chairs that we have here today. We also have Ujjwal and Chris in the meeting and assisted by the three facilitators. I’m not sure if any are here at the moment. But we have Brian, Justin, and Yulia who help us out with running the meetings. So if you have any requests or any curiosity, please do reach out to us at any time. We try to keep the meeting on time and give everyone a chance to speak using our TCQ tool which I’ll get to. Before we begin, hopefully the way that you all got here today was through the meeting entry form. So the reflector links to this. If you found your way here through any other means, for example, someone sharing the URL direct, please do return back to the reflect and make sure you sign in the form. This is an Ecma requirement that we take attendance.

We have a code of conduct. This can be found on the main TC39.es site. Please do give it a read and do your best to stick to the spirit of the document and with the best faith interpretation and if you have any concerns or any issues that come up, you can always reach out to us chairs direct, we’re available direct on matrix or if you need to, you can reach out to the code of conduct committee and these can be kept confidential. We are having a remote meeting this week which means we have four days and that’s broken up into a morning session or a.m. session and p.m. session. Of course, that depends on your TimeZone.

We’re on mountain time this week. So that is UTC -7. For communicating during the meeting we are using our regular tools. So primarily that is TCQ. TCQ I think we were just getting that linked from the reflector. Do you know, Chris, is this now available on the reflector?

CDA: Yes, it’s available on reflector and I also posted it in the meeting chat. Still being populated, but it’s up.

RPR: Awesome. And so we use this tool to manage both our agenda and discussions. You can see what’s coming up. Let’s go through some of the controls. So you’ll see if you switch to the view where you see the current item, we have the name of the current item, then within that, there will be a topic when someone has proposed a topic to discuss. And within that will be a current person speaking. When you’re using this tool and if you’re actually speaking, you will see an extra button called I’m done speaking. So when you have finished saying your piece and wish to move on with the conversation, please do click this button or otherwise the chairs will click it when they see appropriate. And then on the actual buttons you see there, please prefer to use the buttons on the left, so the blue ones, so the new topic, and discuss current topic. Those are preferred. The ones on the right will generally interrupt the conversation or will be increasingly urgent. So you’re allowed to ask clarifying questions at any point. If you really need to stop the discussion urgently, choose point of order such as I can’t hear anything. You’re muted, that kind of thing. We use for synchronous realtime chat, we have matrix. Our better version of IRC. It’s a little bit like slack and discord. So hopefully you’re all signed up there. Primarily we use the TC39 delegates room for talking about work and everything that is on topic. If you have things that are off topic, then please keep them in the temporal dead zone. That is the place for any conversations about Pokmon or joking or puns or that kind of thing. We have an IPR policy. So to make sure that everything is clean and so on, everyone here is expected to be into a particular category. Most people, the standard original classification is an ECMA member. That way you have delegates people from the ECMA member organization and everyone here who is in that status has, you know, they’re company has already signed the agreements when they joined. Otherwise, we have the concept of invited experts which is a formal process by which people can be invited to join. And as part of that equally you will have signed the forms. If you are not in either of those categories, then we expect that you are perhaps an observer. Normally notified on the TC39 reflector and in advance, you are welcome to observe. Please do not talk. Because that’s the principle of being a signed up—if you haven’t yet signed the agreements. We also have transcription running. So I will just read out this so that everyone is fully aware that a detailed transcript of the meeting is being prepared and will eventually be posted on GitHub. You may edit this at any time during the meeting in Google Docs for accuracy including deleting comments which you do not wish to appear. And you may also request corrections or deletions after the fact by editing the Google Doc in the first two weeks after the TC39 meeting or subsequently making GitHub or contacting the chairs. The next meeting after this, the 106th will be in February next year. Some of us will be going to Seattle as kindly hosted by F5. We were there roughly two years ago or so. So some of you may remember. I don’t know. Michael, is it in the same place as last time?

MF: Yes, it is.

RPR: Okay. So having attended it previously, it was an awesome place to visit. So please do join us for that. The survey for that, the interest survey, is currently open. We have already seen lots of interest. So you can see who else is planning to go. Let’s return to the opportunity to volunteer as a note taker. We will make this request at the start of each session hoping for volunteers.

RPR: First of all, hopefully everyone has reviewed the previous minutes. Are there any objections to approving the previous minutes? Silence means no objections. They are approved. Next we have our current agenda. Are there any objections against proceeding with the current agenda? None? Okay. We have adopted the agenda. So first up, we have SHN with the secretary’s report.

## Secretary’s Report

Presenter: Samina Husain (SHN)

- (no proposal)
- (no link to slides)

SHN: Also want to thank everybody for all the efforts. It’s been a very busy year. You had in June, your new edition. There’s been lots of work going on. So all those efforts are very much appreciated. I also want to recognize and thank AKI who supports me and you on the secretariat for all her work she has done in the months past. Just want to make those small recognitions.

SHN: Just some of the topics I would like to cover today, I would like to go through some of the new projects we are working on, some conversations I’m having at W3C for the source map that I think closes very soon. A lot of work done there. Confirmation of the chairs and editors. And a comment on IETF and a short comment on the invited experts. And then as per usual, there’s always the general overview of the invited experts. I always like to repeat the code of conduct. I think mentioned by RPR and then some documents and some dates.

SHN: So first for recognitions, I want to first bring this up. So CDA has been recognized as a pathfinder for security. I want to congratulate you on this nomination and winning this prestigious recognition. That’s wonderful and it’s great because you’re also so involved with Ecma. Very much pleased to announce that to everybody who didn’t know. And secondly, I want to thank all of you for giving me the opportunity to be recognized and thank you for all of that because I understand that much of my recognition is a result of a lot of work that you all do in TC39. So you play a big role in this nomination. So the energy and professionalism that comes, actually comes from all of you. So thank you for giving me this honour.

SHN: So moving on to a little bit of the new activities. So TC55 has been a conversation that has been going on for some months as many of you are aware. We had lots of to and fro regarding the scope and the work that will continue whether it’s in W3C or move into Ecma. It is moving forward slowly but surely to move the entire WinterCG work into Ecma. The committee that will be formed will be TC55. The scope had a lot of conversation. Over the last weeks we had a number of meetings to really fine tune the scope and address a lot of the comments that came from the ExeCom and other members of TCs and thank you for all the work. LCA and OMT and AKI and others on the call. So forgive me if I’ve forgotten your name or didn’t mention your name. We did a lot of work. The scope looks quite fine. It will be proposed and discussed at the GA coming up in ten days.

SHN: TC56 is another new proposal. It is the first one covering artificial intelligence. It has been proposed by IBM and other members involved Purdue university and Microsoft to just name the first three and others that will be interested. I wanted to bring it to your attention that perhaps organizations that are involved in may find interest and seek to participate. This will be discussed in the GA coming up. We had the initial proposal already at the last ExeCom. It’s good to see new work coming into Ecma.

SHN: I have also mentioned this particular—I don’t have a TC number to it. It hasn’t yet been officially formalized the high-level shading language HLSL is proposed by Microsoft and there is interest from other members. Microsoft just needs a little bit more time to work this through to the management. So they will be proposing this probably in the new year in the Execom and if we haven’t had any others it will be T C57 and those within TC39 find that of interest within your organization. Just to keep you aware.

SHN: I spoke about TC55, and the work we’re doing to move WinterCG into Ecma and to bring it here has generated also a lot of conversation with W3C at the broader scope. At the last TPAC meeting AKI had an opportunity to attend and meet a lot of people. I believe he had given an update in the last plenary in Tokyo. I wasn’t on the call. I wanted to bring this topic up again. It come up in the conversation recently with the W3C folks and would like to know if Ecma TC39 would like to participate in the horizontal review that takes place in W3C and I’m going to pause there and ask AKI to add a bit more detail to the conversation.

AKI: I mentioned the horizontal review kind of briefly last plenary. We were on a tight schedule so I tried to breeze through as quickly as possible. The way it works is W3C has impressive tooling around GitHub where they track cross-cutting concerns within W3C. The tooling will open issues on both repos for follow-up. So say the i18n working group has something come up that will be relevant to the privacy interest group, the tooling will open an issue within the appropriate repo for the privacy interest group as well as that for the i18n working group requesting a review that can then be followed up on, tagged, discussed, and upon satisfactory conclusion of conversation closed.

AKI: There is nothing involving formal obligation in terms of horizontal reviews. They are not “we reviewed the thing and therefore you must change it”. It’s an informative move making sure groups know what each other are up to and making sure that nothing is in conflict. I think it sounds like a great idea on its face. It is certainly something I would like to ease our way into if we wanted to pursue it—I don’t think we need to immediately be hooked into hundred percent of the automation into tooling. I do think being able to both request reviews and have reviews requested of us, by us would be a good way to solidify a relationship with W3C and make sure anything that we’re doing is beneficial for the web and making sure that nobody is building something that conflicts with what we are up to.

SHN: Okay, thank you AKI. I can certainly field some questions with that. I just have a couple of slides and then we can go through that. Okay, a few other items. We have our GA coming up on December 11th and 12th. The opt out period for TC39 TG4 source map first edition will end the day before. First congratulations to the team, to the subcommittee working on source maps. Great work. I have received the final standard, the first edition. It is uploaded to the GA folder so the GA members can read it. It is also uploaded to the TC39 folder. I believe you have seen the final PDF that was created. There are two minor editorials. Two letters that need to be small letters and very minor before published for review. My expectation is at the GA review and approve it. I hope the members at the GA had enough time. They had the first draft already uploaded sometime ago. The final edition to be approved has been uploaded for them.

SHN: I had some questions regarding TC39 and IETF liaison. My question to the committee is, are you aware of your status with IETF? And if so, is there a TC39 representative that is a liaison to IETF? Because it would be good for us to have a short exchange of information, maybe give them a short report of what is going on just to keep this relationship at IETF and TC39 active? And I will pause for some comments on that after I just finished my couple slides if that’s okay.

SHN: For invited experts at the end of every year around now, I review the invited experts list we have, this is just to confirm that everyone is still active and interested and relative to be working forward. I do like to touch a little bit to each of the invited experts that are part of the organization to see if they’re still interested or if there’s a potential membership opportunity. So some of you may see an email from me regarding that. Otherwise, with the TC39 chairs, I just would like to have a short confirmation that our current list of invited experts are still invited experts that are relevant and valid for the work going on in TC39?

SHN: I also want to thank everybody for their nomination. So there have been a number of nominations that have come. Many of you are in TC39, that’s excellent. It’s great to see the activity. The ExeCom nomination seats are only four. We had a lot of nominations and seven total. We will have a vote. I do understand that we may want to consider that to be different in the future. For the upcoming GA coming up, we will have a vote. So your activity and your interest are very, very much appreciated as we move on to building our ExeCom.

SHN: Something that we also do at the end of the year typically or start of the year, I think I have at the start of this year, but I just want to confirm that the chairs that I listed here, the editors that I listed here, are the individuals that will continue on in 2025. I will list them also on the Ecma documents and Ecma website. If I have made an error or I need a correction, please advise me. This is the list that I have based on what we did from 2024.

SHN: In the annex, I will run through it quickly and then stop for questions. It is the usual invited experts rules and conditions. Our code of conduct rules and regulations. I want to thank everybody to continue to give the summary and conclusions. That makes a huge help through the minutes and I appreciate that you take the time to do that. The document list that we have are there for your reference. You may access it through your chairs. And I listed there the title of the TC39 documents that have been recently published after your last plenary meeting and also GA documents that have been listed since the last meeting. So have a look through that. Anything specific you would like through your chairs, you can access that. I see that the dates are set for the meetings for next year for TC39. I hope I got that right. So that’s great. Thank you so much to the hosts that are going to be hosting it for the three times next year. F5, I look forward to being able to attend all of them.

CDA: Sorry to interrupt. If you go back to the slide. To the dates, I think if I’m not mistaken the Igalia dates are incorrect by a month. I think you had June on there. It’s in May.

SHN: Yes. I will correct that. Apologies. It should be May. I knew that. I just didn’t know how to count this morning.

SHN: Then of course the dates that are currently set for our general assembly and ExeCom and keeping in mind with the election and potential new members on the management, these dates could adjust a little bit based on everybody’s availability. This is what is tentatively set for now. Those are the venues. I think that is my very last slide. Thank you very much. I’m going to stop sharing and open for any questions.

DE: Minor clarification. For the ExeCom, there are three parts the officers and vice president and president and treasurer as well as eight ordinary member slots and only three candidates. So all three of those from IBM and Apple and Google will be there. I’m very happy about Apple and Google joining this. I think this will be really great for Ecma management. For non-ordinary members there are four slots. We recently expanded this from two and there are seven candidates. Wanted to apologize because I—you know, I pitched this to a number of people. I’m really happy that people have signed up as candidates. Historically this wasn’t competitive for a long time and now this is, I think. I would like to consider in the middle of next year, at the following GA, allowing for additional slots for non-ordinary members when all of the ordinary member slots are taken in the ExeCom and something we can discuss in the future. Apologies for this being unexpectedly a vote. And Bloomberg are hosting the Ecma GA in just one week. So if you’re planning on attending, please fill out the Doodle for that. This is a hybrid meeting. It’s open to all Ecma members, not only ordinary members. I encourage you to attend remotely if you would like to. If you’re the designated representative from your member organization. So please get in touch with Samina or me if you’re interested in attending. Thank you.

SHN: Thanks Dan. All of you who have nominated, I sent you the link. All of you should have received the invitation. And thank you for the update. We will discuss how to better have the ability and engagement from others in the event that the seats are not filled by the ordinary members. Are there any other questions?

CDA: There’s nothing in the queue at the moment.

SHN: Great. Thank you very much. I will update the slide with the correct dates and give it back to you, Rob. Thank you.

## ECMA262 Status Updates

Presenter: Michael Ficarra (MF)

- [slides](https://docs.google.com/presentation/d/1IS6hsFker8TM_mPtK1VQbFCH2TK3LljOxFu6-zMCjkM/edit)

MF: Pretty quick update on 262 editorial stuff. So normative changes, the first one here is a needs-consensus PR that we agreed to at the last meeting. We merged this change to `toSorted` to make it stable, as is already required by `Array.prototype.sort`. This was an oversight in the integration of `toSorted` as things changed with the Array sort stability specification at the same time. And the rest are Stage 4 proposal integrations: `Promise.try`, iterator helpers, and duplicate named capture groups. There were plenty of editorial changes, but none that need to be called out to plenary. And the list of upcoming and planned editorial work is the same. We should probably review it sometime soon just to make sure this is what our plan is going forward. But for now nothing has changed there. And that’s it.

## Test262 Status Updates

Presenter: Philip Chimento (PFC)

- (no slides presented)

PFC: Test262 has landed support for a bunch of new proposals thanks to many of the champions such as deferred imports, `Promise.try`, the iterator one whose name escapes me at the moment. So this is what we like to see, champions participating in the writing of tests and in reviewing tests that other people have written, this is really helpful. We are continuing to look for sustainable funding for the maintenance of Test262. We’ll let you know when we have any updates on that, but if you have tips, please let us know. We’re very interested in avenues for keeping the current level of involvement where it is.

RPR: Just checking, are you meant to be showing any slides?

PFC: No, no slides. I believe that’s it.

RPR: All right. Any questions for PFC? No, okay. Thank you PFC. We are making excellent progress through the agenda. Things are moving quicker than normal which is a hint to the fellow chairs to bring things forward.

## TG3 (Security) Updates

Presenter: Jordan Harband (JHD)

- (no slides)

JHD: So we continue to discuss the security aspects of multiple proposals at various stages. We don’t have anything concrete to talk about this plenary. But we will continue to review and hopefully surface useful feedback.

## TG4 (Source Maps) Updates

Presenter: Nicolò Ribaudo (NRO)

- (no proposal)
- [slides](https://docs.google.com/presentation/d/1uzimn85ojU0TOdiFB1s5VZG_aT7xw8uf646hgnDNQ3w/edit#slide=id.g31b69470253_0_0)

NRO: The very good update is we now have a spec number. Source maps will be ECMA-424 if I get it right, and as mentioned –

AKI: 426.

NRO: It’s 426. Sorry about this. As SHN mentioned before, you can find the latest PDF draft in the Ecma drive at this path here. We’ve already got a lot of feedback and suggested changes. So thanks to everybody who tried to make the spec better. Special thanks to AKI who put in a lot of work to properly generate the PDF and include all of the feedback.

NRO: The next few steps are as SHN mentioned before, next week during the Ecma GA, there will be a vote and hopefully we will finally get approval for our new standard. There are a few steps on our side that we still need to do. One is that we actually now need to rename the URL to the new spec number, that is also wrong in this slide, and we still need to finish a few changes from the PDF to the web snapshot. But the PDF is the reference yearly snapshot.

NRO: There have been a few spec changes. The only relevant one is that we have this warning that we discussed in the last plenary about the different ways to find the source map comment potentially giving different results. This is included also in the final version that we will publish. We are working towards a solution. We don’t have the exact solution yet.

NRO: There have been some progress with proposals. Scopes, which is our most active proposal, it’s Stage 3. We have multiple ongoing experimental implementations and we’re now thanks to the implementation testing how to best encode this data to minimize the source map size. And there has been also some progress on another four proposals which was promoted to Stage 2. Debug IDs allows to give the identifier the file because in many cases URL is not enough. Redeploy the application and file might change, so this proposal gives all file some. It’s at Stage 2 right now. Before advancing we likely need to discuss it with somebody that can specify normative APIs. It could be WHATWG, it might be ourselves with the build on top of the respective proposal. But we will have this discussion when time comes.

## TG5 (Experiments in Programming Language Standardization) Updates

Presenter: Mikhail Barash (MBH)

- (no proposal)
- [slides](https://docs.google.com/presentation/d/1DJUuR4Bnoe3VgV-rc2jWIXqvyMv3krwqi9J9yZbxwDw/edit?usp=sharing)

MBH: Short update on TG5. So we continue to have regular monthly meetings. Some of the recent topics that we had was a tool for previewing how syntactic or API proposals manifest in existing code bases. Essentially it was a project to implement a structural search and replace, and then this enables previewing some of the syntactic proposals and most of the API proposals in existing code. And there is also a study being conducted in the University of California-San Diego on MessageFormat. With in person TC39 meetings we are arranging TG5 workshops where we have sort of a small update workshop with the local university with the group that works on programming languages. So currently we are planning the TG5 workshop in Seattle on Friday the 21st of February. This is not yet confirmed. And this is in discussion with the research group on programming languages and software engineering at the University of Washington. And I will come back with more updates in Reflector when we have a confirmation.

MBH: And I would also like to mention that we have a list of open issues for TG5 and you are welcome to say what you would like TG5 to conduct. That’s it. I’m ready for the queue.

RPR: I will say the most recent TG5 workshop in Tokyo was a lot of fun. And very high quality. So looking forward to the next one in Seattle.

## Updates from the CoC Committee

Presenter: Chris de Almeida (CDA)

- (no proposal)
- (no slides presented)

RPR: CDA, do we have things to say about—from the code of conduct committee?

CDA: A little bit. I mean, pretty quiet for the most part. I think the only thing we got was we got sort of a report, not really a report, more of an email. Not from anybody within the committee itself. It was just a couple of outside folks, outside from the committee, got into a little bit of a tiff and discussion in one of the GitHub repos. Really wasn’t a severely—we have seen much worse in the GitHub repos but apparently struck a cord with this individual. But it fizzled out. We reminded folks to be mindful of the code of conduct. Haven’t heard anything since. That’s really the only thing. Other than that, as always, standing invitation to the code of conduct committee and if interested, reach out to us.

## Call for reviewers - ESM Phase Imports

Presenter: Guy Bedford (GB)

- [proposal](https://github.com/tc39/proposal-esm-phase-imports)
- [slides](https://docs.google.com/presentation/d/1qfnmqPkpuAqTv-1pll1Y6EkEHElf_58BtNBQSw9dpq8/edit#slide=id.g305421a9f36_0_11)

GB: So this is just a quick update on the ESM phase import proposal. So one of the things when we got Stage 2 earlier this year was, we did not identify our Stage 2.7 reviewers at that time. So this is just a call out for the fact that we are seeking to just confirm those reviewers. I’ve reached out to everyone who I think should have been interested in being a reviewer and have put those who have confirmed interest down. But this is a formal shout out in case we have missed anyone. So if we have missed anyone, we are seeking Stage 2.7 in two days’ time. So ideally if you’re able to review by then, but of course if someone would like to review, they can. And, yeah, so now is the time to speak if anyone else would be interested.

RPR: Or if there’s any concerns that this is insufficient review, please do say.

KKL: I volunteer as tribute.

GB: And would you be able to complete your review in time for Stage 2.7 request on Wednesday, or are you requesting that we delay our 2.7 request for the next meeting in February?

KKL: I will do what I can.

GB: Okay. Thank you. I will add you to the list of reviewers. Much appreciated.

RPR: I think we can conclude we have agreed the reviewers for ESM phase imports.

## Process document fixes and corrections

Presenter: Chris de Almeida (CDA)

- (no proposal)
- presenting [tc39/process-document#46](https://github.com/tc39/process-document/pull/46)

CDA: My intention wasn’t to actually pain painstakingly go through all of the changes but just to talk briefly about them and to ask consensus on making them with the caveat of providing, I don’t know, an additional week or something for folks to review offline. Basically there are two PRs. One is a correction. So first of all to be really clear, there is no process change here being proposed. These are just fixes and clarifications in two PRs. The first one is there were things we forgot to update when we introduced the new Stage 2.7. So this doesn’t change reality. This just makes the process document actually reflect the reality that we already have. So that substantive change is isolated here in this PR, which I think already has a couple of approvals. So this is just clarifying the text about reviewing for Stage 2 and Stage 2.7.

- presenting [tc39/process-document#48](https://github.com/tc39/process-document/pull/48)

CDA: The second PR– as I was making this change here, I was going through the rest of the document and felt like it could use a little bit of clean up as well. So there’s a second PR with a little bit more of content change here. Again, no substance has been changed. There are grammatical corrections, fixing of awkward phrasing in places, consistency with capitalization, things of that nature. So removing of scare quotes, fixing of the Ecma spelling, and still a reference to the Ecma CC in here which is no longer a thing, at least not by that name. So, again, no real significant substantive changes here. Certainly nothing that changes process. But just really cleaning things up. I think we have a couple of reviews on this as well or some feedback that we received.

CDA: So this is I suppose a call for consensus to make these changes, as well as a call for anybody to get more eyes on it and maybe we could say if by the end of this week or perhaps the end of next week, it might be better since this week is plenary with no objections and approvals by then to merge these changes.

NRO: Your changes look good. Just as a follow-up, the current process documents says that when we find the Stage 2 reviewers, we should already know roughly when we’re planning to go for 2.7. In practice what happens is that, well, we don’t know yet, and at some point the champions with the reviewers say I plan to go 2.7 next meeting, please review. So maybe we should just reword this to better reflect what we actually do.

CDA: To be clear, you’re referring to this line here at 185 when reviews are designated, a target meeting for 2.7 should be identified?

NRO: Yeah.

CDA: Yeah, I think that would be a good idea for a follow-up PR. It does say “should be identified”, not “must have identified”. I agree. If this differs from what we typically do, then I agree that we should update it to match reality as well.

NRO: I can make a pull request and ask you to merge these changes.

CDA: Sure. That’s great feedback, thank you.

RPR: MF is agreeing with you that it’s best done as a follow-up.

CDA: Okay. Concretely requesting consensus to merge these two PRs at the end of next week at the earliest provided we have approvals and no blocking concerns via the PR review.

DLM: We support that.

RPR: No objections. So I think we have consensus on this review for merge at the end of next week subject to no review comments..

## More Currency Display Choices

Presenter: Eemeli Aro (EAO)

- [proposal](https://github.com/eemeli/proposal-intl-currency-display-choices)

EAO: This is a very small proposal. We had a short discussion in TG2 in fact about whether this should be a normative PR instead. But we thought, because there’s a little bit of discussion here that it would be good to have a little bit of space for that and the staging process is a very fine place for that. So the short entirety of this is that we do currency formatting under `Intl.NumberFormat` by using the `style: 'currency'` option and furthermore when formatting currency we have a `currencyDisplay` option that is effectively an enum value that we accept how to format the currency symbol. If you use the default `symbol` you get “$” or “US$” for formatting USD and `narrowSymbol` formats to "$" and `code` that gives you an ISO currency code like USD, or then as a spelled out `name`. All of these are of course localized name such as “U.S. dollars”.

EAO: And specifically here one thing to note is that for the `'symbol'` choice, not the `'narrowSymbol'` but just the `'symbol'`, whether or not you end up with something like a “$” sign just by itself or “US$” depends on both the currency and the locale. In US English, you get “$” for USD and “CA$” for CAD. And similarly, in Canadian English, you get “$” for CAD and “US$” for USD.

EAO: And now, the proposal itself is about extending the scope of things. That’s to solve two different use cases. First of all, there are times, such as when you are formatting values in different currencies and you would like to use a relatively narrow symbol view of the currency, it would be really useful to be able, even in an en-US context to say, “I would like to have ‘US$’ for USD,” similarly to what you would get for effectively all the other currencies in the world. With the options right now, there’s no way to getting “US$” in the en-US locale. This is not just an en-US problem. Similarly with many locales and currencies across the world, where there is a local way of expressing and implicitly understanding that it’s our dollars and so we don’t need to specify like a US or other units like this.

EAO: Then a separate case is that when we are doing currency formatting, there are aspects of this that need to take into account the currency, and based on the currency, change some parts of the formatting, specifically, most importantly, the number of fractional digits that is displayed. And there, it becomes in some cases interesting to do currency formatting even if you are not actually displaying any currency symbol there at all. And to effect that, it’s really useful to be able to format currency, but not show anything, any currency indicator at all while doing so. And this is currently not possible, effectively. So these are the two issues that we are looking to try and fix here.

EAO: The proposed solution here is to add the following two currency display option values: `'formalSymbol'`, it always chooses a sort of longer form like “US$”, for instance. In the discussions in TG2 on this one, the specific aspect of the whole proposal that I think there’s a little bit further discussion is whether this thing ought to be called `'formalSymbol'` or possibly `'wideSymbol'`. And introduce a second additional possible `'never'` value to the option and that would not display any currency symbol or name. So the code here effectively shows how these would work, where the first one is showing the `'formalSymbol'` currency display option, and the second one is showing the use of the `'never'` currency display option. The word “never”, by the way, in this context, I picked it because we have kind of near this in the same space, we have the option `signDisplay` for whether to display the positive or negative sign before, and it has a “never” possible value for that.

EAO: Some of the relevant background here is that ICU has already support for something like “formal” and something like “never”, which that’s where the “formal” name as opposed to “wide” name comes from.

EAO: That’s pretty much the entirety of the thing. I’ve also put together the very, very small spec change that would be required for all of this into 402, and that’s adding the `'formalSymbol'` and `'never'` as appropriate to the few places where the currency display values are iterated and the very brief description thereof that can include in the spec. And based on this, I am asking for—well, if it were acceptable, Stage 2, but I would also be happy with a Stage 1 in order to discuss this and advance the formatting of this to effectively bikeshed to be called a `'wideSymbol'` for the options values. And that’s effectively all I have got on this. If there’s any queue, I am happy to address any issues or questions.

RPR: At the moment, there is no one on the queue. It’s hard to tell, isn’t it? For something coming in Stage 1 or Stage 2.

EAO: If nothing is going to show up to the queue, I would like to ask for Stage 2 for this proposal.

DLM: We discussed internally and this is definitely a proposal that we support. I am not sure as a fellow Mozillian I should be the only person supported for Stage 2, but it definitely has team support for Stage 1.

RPR: Okay. So are you stating personal support for Stage 2?

DLM: I am stating—yeah. I guess I really… I am not sure what I meant by that. But, yes, definitely support for Stage 1 and I will second someone else who says they support it for Stage 2

JHD: So I apologize if you said this, and I missed it, does this mean you believe there is no further design space here? And that’s why it’s ready for Stage 2 because this is basically done?

EAO: Basically, yes. In that we already have this currency display option. It is already controlling how symbol formatting happens. And I am asking to extend -- well, not extend it because we are already doing formal symbol style formatting, we just don’t allow it explicitly in some cases and never is kind an option of not symbol at all. I don’t see any other possible solution for these use cases, other than adding two different view currency display option values. Specifically, I think the discussion about whether `'formalSymbol'` or `'wideSymbol'` might be the best name or whether there is something better than `'never'` as a name for the other one are possibly something that could be discussed within Stage 2, if the options I am proposing here initially are not to everyone’s satisfaction.

JHD: All right. Yeah. To be clear, I wasn’t suggesting that there is further design work that could be done in Stage 2. More, my sense of the proposal is that there’s nothing further to be designed and I wanted to confirm that we shared that sense.

EAO: Okay.

JHD: Yeah. I support Stage 2, so I have not fully reviewed the spec.

DE: I support this proposal as well. I also haven’t reviewed the spec. But a small feature like this, that adds on to an existing capability is exactly the kind of thing that I would hope to come from TG2, that I look forward to, especially given the concrete motivation. I would be okay with proposals like this going by either the stage process or a PR. And I want to emphasize what JHD just said, Stage 2 still permits a lot of further design work. We often go to Stage 2, with significant open questions, so I guess in this case we don’t have any open questions either.

RPR: The queue is now empty. So I think we’ve heard qualified, caveated support for Stage 2 in the sense of JHD, but without reading the spec; and DLM from a personal point of view. So EAO, I think it’s your choice, what you want to ask.

EAO: I think I would like to ask for Stage 2 because I think there is sufficient support for that. If there are concerns that arise, I believe that those concerns would fit in well to the work that this proposal will undergo, under Stage 2.

RPR: Okay. DLM has upgraded to unqualified support for Stage 2. DLM, did you want to say anything more?

DLM: No. I think the open questions here are resolvable in Stage 2. I didn’t want to be the only invoice in support for Stage 2, given that Eemeli and I work for the same organization.

RPR: We also now have DE with +1 for stage 2. So there is definitive support from multiple orgs. All right. Any objections to Stage 2?

RPR: No objections. We have heard support. Congratulations, Eemeli, you have Stage 2!

EAO: Excellent. Thank you. Am I supposed to ask for reviewers for Stage 2.7 at this time?

RPR: Now is the time

EAO: I would like to ask for reviewers for Stage 2.7 for this very, very small change.

JHD: I am happy to review.

RPR: Thank you, JHD. Any chance we could get one more reviewer for this proposal? Okay. We only got one at the moment.

NRO: I can review. I have now—very new experience with Intl, but this seems small enough that I can do it. Nicolo, for the notes

RPR: Thank you, NRO. Should we also be setting a target meeting for the 2.7? You brought it up. I am not trying to coerce. Coercion is bad. Okay. All right. EAO, would you like to, perhaps, read out a summary for the notes? Or would you like to write a summary

EAO: I am happy to state that the proposal received support for advancement to Stage 2. I don’t think that there’s more. Was there? I mean, other than—the proposal was presented and it was accepted.

AKI: And there are two committed reviewers for Stage 2.7.

### Speaker's Summary of Key Points

The proposal was presented and it was accepted.

### Conclusion

“More Currency Display Choices” was accepted for Stage 2, with JHD and NRO as committed spec reviews.

## Upsert (formerly Map.emplace) Update and request for Stage 2 reviewers

Presenter: Dan Minor (DLM)

- [proposal](https://github.com/tc39/proposal-upsert)
- [slides](https://docs.google.com/presentation/d/15sWTvdWIo9Jt12LFRNBPJo1N_8xsMSCB3jy73HBFX-M/)

RPR: So we have DLM with upsert, normally map.emplace. An up date and also a request to Stage 2 reviewsers

DLM: This was the original name five years ago. And we have gone back to that. MF pointed out, we should not name proposals after solutions, but rather problems. We finally agreed on “upsert”. I should start with the motivation.

DLM: So this is the thing that we were trying to make easier for JavaScript developers. You have a map. And you want to do something different, depending whether or not the key is present in that map. Proposed solution. This changed slightly when I presented this in October. Two methods. One is a `getOrInsert`. This one, search for the key and the map. If found, returns the value associated with that key. Otherwise, it inserts a value in the map, the default value in this case and return that.

DLM: I also have a `getOrInsertComputed`. This is very similar to the above. September in this case, you are going to call a callback function that returns a default value which then is inserted. When I presented this in October, it was `getOrInsert`, but there was feedback from the community at that time. If it takes a lot of work to calculate a default value, it would be nice to defer that to a callback function and so to do that up front. Works since the last time I presented this. Yeah, as discussed, the name changes back to upsert. Two methods, one using the value directly and other with a callback. Upgrade specification tasks 6789 Michael has done a great job for fixes and suggestions. Students also have prototype versions of the design. SpiderMonkey and V8. This work at the moment exists in their local repository.

DLM: Two open issues that I was hoping to get feedback on. The first one, this is an issue that dates back to when this proposal first came into committee. This was about locking the map with concurrent access. That’s no longer what we are discussing. But there remains a problem with the callback version. Where the person who modifies the map, in the callback, rather than using a callback to return a default value, MF has helpfully put together two pull requests with two proposal solutions to the problem. One checks to see if the map has been changed by the callback function. So checking for the existence of the key that previously was not there. And now it does exist. And throw an error in this case. The other proposed solution would be to check for the existence of that key after the callback and return that value. So the problem that we are trying to prevent is people mistakenly using the API to insert values during the callback function, rather than returning the value to be inserted. As I state that, there is a third thing to have at API, to use that to callback to insert values into the map. But basically, the API design is that you should return a default value, so it’s a user mistake or developer mistake if they use that callback to insert the value and we should probably—at least in my opinion, I lean slightly towards throwing because this is a mistake using the API. The other option would be to accept the developer’s intention and insert during the callback.

KG: Just a clarification on the second option here. The non-throwing option here. There’s two possible values that you could end up with in the map and returned. There is whatever happened during the callback. And then there’s whatever the callback returned.

DLM: Yes

KG: I thought that the proposed solution, and certainly my preference for the behavior, is to use the value from the callback. Like, that the callback returns. Not that it happened during the callback. Because the return value is sort of the second thing. There’s a mutation and then there’s the value that is returned. And I would not be excited about using whatever mutation happened during the callback. But I am fine with the approach of using the returned value from the callback. That said, I am also personally leaning towards throw. So maybe this isn’t even relevant.

DLM: Yeah. I possibly misread the PR that MF put together. But I am sure the second offence was to return the value from the mutation during a callback and not the return value from the callback. And I probably quickly bring it up. Did you have your hand up?

KM: Doesn’t this situation basically kind of—I thought the main reason for `getOrInsert`—maybe I am misremembering—was like it was more performant than looking up twice. Doesn’t it default the whole optimization. You have to look up where the key goes anywhere?

DLM: Yes. Mm-hmm. So in this case, this is the computed version. So calling the callbacks. We assume people only use this when there’s a lot of work to be done on that callback function anyway. The usual optimization from not having to re-lookup the value wouldn’t apply in this case. There’s the API where it takes the default. In that case, we wouldn’t have to relook up anything.

KM: I see. I guess I am just worried that there will be confusion between the two in that sense. People will expect not to have to look up and would be surprised there’s a huge difference, even if you inline the computed thing. But maybe there wouldn’t be. I don’t know. Okay. All right. That’s fine.

KG: Sorry. When—KG, when talking about the performance costs, do you mean the performance cost of having the spec check whether someone inserted the value again or the performance cost of someone doing the insert in the callback?

KM: The—I mean, just semantically, like the fact that your hash table could change underneath during the callback would require you to do another hash table callback, the element. Whether that’s in like—I think it’s more like no matter what you do. It assumes you allow any mutation to the thing, that you have to do a hash. You can't assume your status is the same. On the other hand, if we throw, on the other side, now every map operation has to check “am I under a callback?” hook, which is also not great because all of the other normal existing operations gets slower, they have to do a check.

KG: Yes, especially if you try to polyfill it.

Right. Yeah. Either way, it’s roughly the same. Because the code we are going to generate is not, I think. But there’s—it’s definitely going to hurt the perf.

KM; I guess in terms of Perf, these are long, expensive things, just a final comment, the second one is probably better because the cost is localized as to get or insert computed rather than every operation. If you have to throw, it means every operation needs to have some, like, check for. Under a get insert computed, whereas if you just have to rehash when you return, then the cost is only borne by `getOrInsertComputed` and not every other operation.

DLM: I am not quite following. Because I thought we only throw inside `getOrInsertComputed`. We weren’t talking about throwing from the actual set –

KM: How do you know the map is mutated?

DLM: We would reach out—the existence of the key. That’s the only case we are going to throw is where the key—and both of these options, the idea was to check for the existence of the key after the callback completes. And taking that existence of the key as evidence that someone has mutated the map and we need to do something.

KM: I think in that case, I am indifferent to the choice. Yeah. Sorry. I thought were you throwing on the underlying sets inside the callback [snoo*ek] no.

DLM: No. That is it was proposing or doing a double locking. But that’s not the solution that we have come up with since that issue was originally filed.

SYG: I think this has been clarified by what MF said in the queue item and what DLM said. So in the non-throwing case, the semantics of the non-throwing alternative: initially you check for the existence of the key, if it’s not existent, you run the callback. And after you run the callback and get the value, you then check again for the existence of the key, and even if it still exists, you then set the key with the new computed value returned by the callback. Is that correct? And then return that computed value.

DLM: Yes. That’s my understanding, and MF commented that that is correct.

SYG: Okay. Cool. Then I think it is also my preference that along similar lines as what Keith was saying, I want basically most features to be pay as you go and that would be the—no throwing thing is clear that is pay as you go for use of this particular method. And because the way you decided to check whether the map is mutated by the existence of the key, you could certainly, you know, delete stuff and then re-add the key. And that would result in a pretty different hash map at the end, even though from that method's point of view is not “mutated” and I find this misleading. Instead of like—unless we build an actual mutation check which would have the non-pay as you go problem, as Keith pointed out, I would not build a particular notion of mutation that is different from a normal understanding of what it means for a map to be mutated.

DLM: Okay. So that’s support for rechecking in that case. Right?

SYG: Yes.

MF: ACE is unable to be here, but asked me to relay Bloomberg’s opinion, that they prefer the non-throwing PR because the throwing version catches only one specific case of mutation.

DLM: I am convinced, I think we should go with the non-throwing version. Can I move on to the other issue that I wanted feedback on?

RBN: We don’t throw during iteration, so I don’t think it makes sense to throw here. I also am not certain we need to have such complicated locking behavior as was initially proposed, which has been kind of put aside. But I don’t think that blocking behavior is necessary for something like map because we don’t employ that elsewhere in the array types for any mutationion of that sort. I also wonder, so this is—the second option was returning the existing key’s values, regardless of what happens in the callback. Is that the case?

DLM: I think it’s actually—we return—yeah. I wish I had the PR open. Sorry about that.

KG: The behavior in the PR you use is the value from the callback, the returned value from the callback. And it clobbers any mutations that happened to have happened during execution of the callback.

RBN: Then, yeah. That is the behavior I think I would personally prefer

DLM: Okay.

RBN: I agree with that behavior.

DLM: Thank you, Kevin.

DLM: In that case, great. It sounds like we have that there.

DLM: The other issue, I wanted to open and we talked about this last meeting as well, is the name, there’s a few comments in issue number 60. I am still open to other suggestions for names. I don’t think we have come to anything much better than this. But… and also, very welcome to—some of the suggestions from last time around got lost in the notes and weren’t captured

RPR: SYG is asking a question

SYG: I am confused. You started this presentation with this has been renamed to upsert. Is that the proposal name?

DLM: The proposal has renamed from “map in place” to “upsert”. So it didn’t refer to a name we weren’t planning to use anyone

SYG: I see. Okay.

DLM: Okay. I will not waste time on the bikeshedding thing. I suspect—I will move to my next slide. Two open questions. Thanks for the comments in #40 and #60. We can resolve. The other thing was any volunteers for Stage 2 reviewers?

JMN: I am happy to do so this. It’s JMN from Igalia

DLM: Thank you,JMN.

RPR: I feel like your photo is calling out for MF to be a reviewer?

DLM: That was completely unintentional on my part.

DLM: I am going to use that photo in every presentation. We recently did you believe

RPR: MF has volunteered.

DLM: Okay. Great. Thank you.

DLM: I think I need two people. So that’s perfect. Thank you. If anyone else is interested… please let me know.

### Speaker's Summary of Key Points

- Presented update on work that has occurred since October 2024 plenary, including renamed to proposal-upsert, support for both `getOrInsert` and `getOrInsertComputed`.
- Asked for feedback on handling of modification to the map during `getOrInsertComputed` callback, and on method names.
- Asked for Stage 2 reviewers.

### Conclusion

- Committee was in favour of the non-throwing solution to issue #40 (https://github.com/tc39/proposal-upsert/pull/71)
- No further feedback on naming of methods, we’ll resolve this in the issue itself. (https://github.com/tc39/proposal-upsert/issues/60)
- JMN and MF volunteered as Stage 2 reviewers

## `Intl.DurationFormat` for Stage 4

Presenter: Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/ecma402/pull/943)
- [slides](https://docs.google.com/presentation/d/1bAuZ0ZSSYUdJxiDYXz2tUWHZwaOmYkNoLpQBBy_qz1w/edit?usp=sharing)

USA: Hi, everyone. Before I start with the actual presentation, thanks to BAN for doing basically everything. He couldn’t be around, so I am going to be presenting this instead. But as one of the champions of the proposal, I can say that it’s been amazing the recent amount of work that has gone in, and yeah, it looks like we are finally at the finish line. So let’s see.

USA: A quick overview of DurationFormat for, initialized. It is a formatter, sort of in the same class of low-level built- in formatters, like other existing Intl formatters and you use them and they are specialized. They take one certain kind of input, and they format it according to the locale provided to them and other cultural hints like calendars and so on. A duration in this case is certainly defined as any time duration. So you know, it could be expressed in multiple units, it could be composite duration in that sense, or it could be expressed in a single unit. You can see, different locales format them differently. This might not be the best example, since it seems very similar. But from prior experience, you might know that different locales handle certain details of durations differently. So this is one of the driving use cases of this proposal.

USA: One thing to note is, one of the most important ways to customize the result of this formatting or generally to change how it looks is through width. And width essentially implies the amount of space, and in this case, screen space you want to dedicate to a duration. So as you can see, in en-US, in long style, you would have something very fleshed out. So you will say something like “one year, three days, and 30 minutes”. In narrow, that becomes much shorter. So it becomes a thing like “1y, 3d”. It is replaced with these alphabets to signify which unit it is. And then there’s the digital style. So digital style is interesting. It’s not well-defined for every single unit. However, it has a very special case for things such as hours, minutes and seconds and imitates a digital clock. One important thing here is that, while it’s possible to use a single consistent width for the entire duration, there are viable use cases that require you to mix and match the different widths for different units in order to get the point across.

USA: So to summarize, this proposal allows for duration formatting based on locales and flexibility for using different formatting sometimes for different units. So you can basically have one different sort of width per unit. Use case for this is skyscanner. So as you can see and probably relate, all websites that deal with air travel are full of durations. There’s a handful of them all over this place. And, yeah. Anything from a simple timer on an application, maybe a to-do list application, or something like the duration of some trip can be a duration. Right? So, yeah. Here is how it looks on skyscanner.

USA: One thing to note, this is already using different width or style, as you will, however you like to call it, for different units. In this case, seconds, for instance—well, I don’t know if there is seconds data for this stuff. But it is, it’s never displayed because you don’t want to display that. Minutes, on the other hand, are displayed numerically, so this means without any unit. This is mostly because it’s implied that the lowest unit would be minutes in this duration. And for hours, it's narrow. So it’s using “2h” because that’s the shortest way to signify an hour.

USA: These are a few usage examples. I wouldn’t go into detail. As you can see, there are many different ways to use the API. We have been over this many times. But, yeah. Feel free to ask any questions about the API. And here we go. So, you know, different styles. And mixing different locales and stuff. And as you can see, you can provide an alternative numbering system and that would just work.

USA: So, yeah. Going over the history of stage advancement, the proposal advanced to Stage 1 in February 2020, 2 on June 22. Relatively quickly. October ‘21, we got to Stage 3. That was before there was a Stage 2.7. This has, as you might have noticed, significantly longer as a stage because of a lot of implementer feedback. And the fact that we were slightly doing things in a different order, this time around, with developing our API and then going back to, you know, making sure that it works in different tools.

USA: Plans for V2. There are a few, but to name the popular ones, maybe a format range. So you could have a range of duration. This could be useful for things where you don’t need an exact duration. For example, recipes might have—maybe not baking, but I know for sure, cooking, you can have a range of a duration. Fractional component abouts of hours and minutes so that you could do things such as 1.5 hours or 0.1 minutes. But yeah. These should be done in a way that, you know, we can control well and ergonomically.

USA: The most significant part is the Stage 4 requirements. As you just saw, the proposal has been at Stage 3 for a while. In this time, we have not only polished the proposal significantly, but we have shipped Test262 tests, and we have two compatible implementations that have passed this test. We have a lot of experience from the implementers, as well as all the feedback that has been addressed. I would like to really thank all the implementers, everyone involved, in the implementation of DurationFormat, namely YSZ, ABL and FYT, all the feedback has been really important for the development of that proposal. We have also had NPM documentation and a pull request made against ECMA-402, which was approved by TG2. So as you can see, the last step that we have to go through is committee approval. So I would like to formally request stage advancement for DurationFormat.

RPR: You have support from DLM. And incoming support from PFC.

PFC: Yeah. I mean, I am also from the same organization, but yeah. With my Temporal hat on, I am very excited about this becoming a way to format the Temporal object. Which we will incorporate after the proposal reaches Stage 4.

USA: That was indeed an important use case when this started. And, yeah. I am glad that both proposals have matured well. Yeah, looking forward to that. Thank you, PFC.

USA: Thanks, everyone, for Stage 4.

### Speaker's Summary of Key Points

- USA went over some details about the purpose and history of the proposal.
- Stage 4 was requested and there were no objections to stage advancement.

### Conclusion

- DurationFormat reached Stage 4 with supporting comments from DLM and PFC.

## `Error.isError` to stage 3

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-is-error/)
- [slides](https://github.com/tc39/proposal-is-error/issues/7)

JHD: Error.isError. It was not too long ago that we advanced it to Stage 2.7. We have Test262 tests written and merged. And it would be wonderful to see this proposal advance to Stage 3, at which point the HTML integration PR, which has already been directionally approved, would then be able to merge as well, unblocking the further advancement of this proposal. So I would like to request Stage 3.

DLM: We support and we actually have a implementation ready to go once it reaches Stage 3

JHD: Love it. Thank you.

NRO: So this is just like I didn’t see any update. I wonder if Mozilla has anything. I opened an issue about `InternalError`, which is an error that Firefox throws in some cases. Given that DLM—I wonder if the internal error has been properly handled.

JHD: That would be good to get Mozilla confirmation

DLM: I am not sure. It was done as an open source contributor.

JHD: For what it's worth, the internal error is already currently indistinguishable from a true subclass of error. So depending on how that was implemented, it might work by default, but I assume the change for DOMExceptions could be made for internal errors. I will keep an eye on that and NRO, I will make sure as it gets published in any channel of Firefox, and keep an eye open until it’s implemented.

RPR: So, yeah. We had one note of support. No objections. Last call, any objections to Stage 3? No objections. So congratulations! You have Stage 3.

JHD: Thank you.

### Speaker's Summary of Key Points

- test262 tests merged
- Firefox’s `InternalError` should pass this predicate, and champion will monitor implementation status

### Conclusion

- Consensus for stage 3

## Iterator helpers close receiver on argument validation failure

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/ecma262/pull/3467)

KG: Hello, all. This is a follow up to iterator helpers, which just landed in the spec. It is a normative change to something that is already shipping, but I strongly suspect it’s web compatible, especially given how new iterator helpers are, and I would like to make the change if we can. It's an oversight from specifying it.

KG: So the background here is that iterators are closeable. They have a `.return` method. All generators have this, and user defined iterators may or may not have this. For generators, it would trigger the `finally` block if you are yielding within a try-finally.

KG: And because this can do important cleanup work, the general rule is that once you get an iterator, it’s your responsibility to close it, unless it throws an error or violates the iterator protocol, or any of these other things. But if it yields a value you weren’t expecting or you got some other value that you didn’t know how to handle from somewhere else, then you need to close that iterator. Generally, we are disciplined about that. But we failed to do that specifically for the case of argument validation for the iterator helper methods. They do not close their receiver, the `this` value. They do in other cases. I have here the specification for `Iterator.prototype.filter`, and you can see down here, if calling the predicate throws, then we close the underlying iterator. But we don’t close the underlying iterator if the predicate is not callable. And I am pretty sure this is just a mistake. So there’s a few different places where we do this kind of argument validation. `filter` requires a callable predicate. `map` requires that also. `take` and `drop` require a number argument, not NaN.

KG: And so what this pull request is doing is going through and each of the places that one of the iterator helpers takes an argument which gets validated, and if the argument fails validation, then we close the underlying iterator. So we maintain the contract that once you have been handed an iterator, you are responsible for closing it, where "you" is the prototype methods on the iterator helpers.

KG: So this is just a "needs consensus" PR, because it’s a small tweak to the existing spec. I haven’t written tests because this was a last minute thing but I will do so, as soon as this is approved, if we approve it conditional on tests. Yeah.

MF: I strongly support this. This was totally just an oversight. We didn’t think of the `this` value as a parameter here. Like a regular parameter, we should handle closing it because it is passed in.

RPR: DLM supports this.

KG: Okay. Well, hearing no objection, and having two notes of explicit support, I will take that for consensus. I won’t merge this until I get tests up. But take it as having consensus.

### Speaker's Summary of Key Points

- An oversight in iterator helpers meant that we did not close the receiver when an argument failed validation. This PR will correct that. It's almost certainly web-compat given how new iterator helpers are.

### Conclusion

Approved.

## AsyncContext request for Stage 2.7 reviewers

Presenter: Andreu Botella (ABO)

- [proposal](https://github.com/tc39/proposal-async-context)
- [slides](https://docs.google.com/presentation/d/14DxgoHhTL7tzJpcu94y70USeXT9jlkF2k6lJDI720Kc/)

ABO: Yeah. So we have just two points of updates from the web integration that we shared in Tokyo. So after hearing feedback from multiple parties, about how the proposal that we had didn’t really fit many use cases, we changed the context of events. Like, in which context event listeners are run. So the callbacks have run in the context that triggered the event, the dispatch context. If there is no dispatch context, such as a user click, or in Node.js something like process signals, then it falls back to the root context. This is usually the empty context, where every `AsyncContext.Variable` is mapped back to the default. We want to configure this fallback, and that also covers the other use case that in the initial proposal was being covered by having the registration context.

ABO: So we propose having this web API, `EventTarget.captureFallbackContext`. The name, and being part of `EventTarget`, are still up for bikeshedding. So this creates a scope, and anything inside that scope — if there is an event with no dispatch context, such as a user click, it will use the context that was active when captureFallbackContext was called. This is useful for things like code regions that you want to keep isolated and where an event that has no dispatch context would lose the context for anything that spawns from that callback.

ABO: We have a PR and, the next steps are just, we will continue and finish the discussion with HTML editors about the implicit context propagation. We will finish getting the PR for the web specs. And the next time we present, we’re expecting to ask for Stage 2.7. So at this time, we’re asking for reviewers.

RPR: Any volunteers to review `AsyncContext`?

JSL: I can.

RPR: Thank you, JSL.

RPR: Can we get one more reviewer, please.

???: MM is not here right now, but he requests to volunteer as a reviewer.

RPR: Request granted. Yes. Thank you.

### Conclusion

- JSL & MM will review `AsyncContext`

## The importance of supporting materials

Presenter: Dan Minor (DLM)

- [slides](https://docs.google.com/presentation/d/1teo8pAE4lbFTIlPZxum2MBcNZfGdUM2Y8huEiVdvQiQ/)

DLM: I just wanted to talk briefly about the importance of supporting materials. So gentle reminder, supporting materials are already part of our process. We want to see proposals advance to Stage 2, 2.7, 3 or 4 to be available ahead of the deadline along with the supporting materials or delegates can withhold the consensus solely on the basis of missing the deadline. I want to talk about why this is important. Not trying to be pedantic and bureaucratic. SpiderMonkey team do the best to review every proposal as fairly as we can and provide action feedback. As implementers we can’t look at what is interested for us, we have to look at everything. It requires a lot of work on our part. It is not just us. I’m aware that other groups do this. Why supporting materials? Without them, ultimately we’re left guessing what is actually going to be presented. That means we can’t get the right feedback in advance of plenary. I’m not an expert in every JavaScript and have to reach out to other people on the SpiderMonkey team to get feedback depending on the proposal and often we have to reach out to the DOM team or others as well. And people are busy. We need time ahead of time to get the feedback that we’re looking for. I mentioned this in the past every once in a while and got feedback. Why don’t we just attend individual meetings for proposals to keep on top of them or reach out to the champions ahead of the plenary to ask clarifying questions? These are things we do. Not enough time to do this for every proposal out there. It is helpful to us doing proposals. Definitely a clearly written motivation, clear and concise solution for stages where applicable. Supporting use cases and for example code and prior art. These are often helpful to the system implementers and sometimes things that are obviously improvements to people writing JavaScript every day aren’t as obvious to us as implementers and any links to issues and PRs and discussions help inform the opinion. And the other thing is posting the slides as early as possible. That leads back to us having the time to reach out and get the appropriate people involved.

DLM: So briefly in the future, I’m not asking for any process changes now. I wanted to raise the possibilities. But one thing that I think would be quite helpful for us and other groups are doing these types of proposal reviews is require supporting materials to be available prior to adding the item to agenda. I don’t think they need to be finalized or anything like that. Anything available to give us an idea what the topic will be would be much appreciated. I would like to point out this isn’t actually asking people to do any extra work. It’s the same amount of work. We’re moving around when it has to be done. I don’t want to say people procrastinate. I do have that tendency. I think this might help people to cut down on that. But it would actually help us with more time for review and I think that would lead to better discussions and feedback during plenary. The other item and I think this is something that Yulia may have brought up at the last plenary, if we move the deadline a little bit further back, that would also be helpful. The existing ten-day deadline basically means that there’s only five working days in-between the deadline and the beginning of plenary. Again, this would just mean doing work a little bit earlier. Not asking anyone to do any extra work. And that is actually it for my presentation. Not sure if anyone has any comments they would like to say. JHD is on the queue. Go ahead.

JHD: Just the spirit of what you’re hoping we eventually get is great, but the—I’m not sure how—like, when we originally were talking about this many years ago, one of the things that I think was brought up or maybe I’m hallucinating it but it still applies is if we require them to be in advance, than any additional supporting materials within—they come up that manifest within that 10 days or 14 days is something that you can’t add to your presentation. because then that part of the supporting materials is not there. That is an often with late-breaking realizations before plenary. Additionally many proposals like Mansara one earlier today don’t require supporting materials and nothing to provide. If I feel inspired I should be able to make slides a day or two in advance. I’m not requiring them. And such a requirement would ensure that if I do procrastinate, that I just wing it on no materials. And so I’m not sure it would actually—I think there would be some potential proverse in-sensitives and wouldn’t necessarily achieve what you’re hoping for. I agree with the spirit more feedback earlier so everyone has time to provide feedback.

DLM: I appreciate your comments. I think in terms of like not allowing changes to supporting materials, that wasn’t the intention of what I was saying. I was just hoping to see even some initial slides early on I think would be quite helpful. And the intention is not to be bureaucratic or pedantic about this. We have some topics that are urgent. Wouldn’t expect those that aren’t necessarily urgent requiring people to have some form of supporting materials in advance would definitely be helpful.

CDA: I took myself off the queue. I think you answered it. I was just saying I thought that you had mentioned it’s okay if the thing isn’t complete. I think you just clarified that as well. And also like JHD, I don’t really view this shift as being any different from the status quo today. Today especially for the advanced stages that supporting materials are required, but there’s also nothing that says oh, if you change the slide at the last minute or added a slide at the last minute that somehow that’s unacceptable for any reason. That’s not my understanding of the current process.

JHD: I mean, I think if it’s not a meaningful change, then it wouldn’t achieve what Daniel is hoping for. I think if it’s achieving anything, it is definitely making a shift in some way. And so I’m just suggesting that we need to be careful about the unintentional consequences of various sets of requirements.

CDA: I think there’s only a few minutes left in the topic. Like to hear from Nicolo and SYG if possible.

NRO: What if I publish slides and then I have new things to add to them. Something I started a a few meetings ago is to mark my slides, if I had something saying this is a couple days ago. I would appreciate everybody doing something like that. It helps understanding did I forget about this slide when I reviewed them or is this actually something new? It’s fine to have late changes. It would be great to mark them somehow.

DLM: I agree with that.

NRO: Last meeting in Tokyo particularly bad is with we tried starting establishing an internal deadline for I think one extra week before official deadline where at least internally we must share the slides with other Igalians and we still didn’t do perfectly but recommend other companies to do something similar.

DLM: Thank you.

SYG: I agree with the general spirit of this for sure. I support adding as many support materials as you can as early as possible for the same reasons that Dan Minor said. We need to review everything. At the very least, I don’t want people to over index I have to make a full slide deck and don’t want to do that and give us an idea of what changed since last time and why you’re bringing this back. If I don’t know why you’re bringing something back and if I don’t know why something is proposed, and put on the agenda item, that is not—I am not predisposed to that. Just as a matter of fact thing, the more material there is as early as possible, the better your chances are. Even if it turns out that there really isn’t much you can add a quick note. There isn’t much. Add a quick list of bullet points. There is only one material question I really want to go or blah blah blah. Some sort of hint, please.

DLM: I agree. That would be quite helpful for us as well. And I guess to quickly summarize with held consensus before because I hadn’t had time to reach out to the appropriate experts at man zilla to say if something is okay or not. There is a down side of potentially wasting committee time because something has to be brought back again because there wasn’t enough advance notice to get the right feedback on it.

CDA: Thanks Daniel. We are at time. Now, I know you only scheduled ten minutes for this. I don’t know if it’s worthwhile to do a continuation like later on if we thought it would be useful to talk about the 14 days specifically or anything like that.

DLM: I think I would have that for another plenary. I wanted to give a brief presentation and I can make a brief summary in the notes. Thank you for your time.

### Conclusion

- Not asking for any process changes at the time, just trying to highlight the importance of supporting materials for people who are evaluating proposals, in particular implementers who spend a lot of time on this.

## re-using IteratorResult objects in iterator helpers

Presenter: Michael Ficarra (MF)

- [PR](https://github.com/tc39/ecma262/pull/3489)
- [slides](https://docs.google.com/presentation/d/1HQzC15dFnQClnUWYHSFx95aMuiJjHAjE186flPW7iZE)

MF: This is needs-consensus PR #3489 on the ecma262 repo. The goal of which is to reduce the number of temporary objects we create. I just want to give some examples of where this would apply in the iterator helpers we have today. If you look at the present behavior of Iterator.prototype.take. We have an iterator called nums here that yields 0, 1, 2, 3, 4, and each of the squares is an IteratorResult object. The object with the done and the value property. And if we do `nums.take(3)` you can see we yield new IteratorResult objects where we copy the value over and create new objects to do that. And after this pull request, if this pull request was merged, instead of creating new IteratorResult objects through the iterator helper and copying the value over, we reuse the whole IteratorResult object itself. So nums and `nums.take(3)` would each yield the same IteratorResult objects. You can see another example here in `.drop(...)`. So today what it looks like is if we call `nums.drop(2)` yield these four IteratorResult objects, three of which are copying the value over. Instead, we could yield these four IteratorResult objects and three of them can be completely reused. So we don’t create extra objects that provide no value. And lastly, `Iterator.prototype.filter`. This is doing something similar. You can see today it is copying values over into new IteratorResult objects and even though not sequential we could still reuse the IteratorResult objects as we iterate the result of filtering.

MF: So filter, I do want to talk a little bit more. Filter is a bit different than take and drop. Filter does have to observe the value. This value here is observed by the predicate passed to filter which means that if you have getters on your IteratorResult objects, which is a weird thing to do, but if you have those, you may have some kind of weird behavior. You know, you could yield values for which the predicate returned false by having the value getter return different values for the predicate versus when you are actually consuming the resulting iterator. And similarly you can have it yield values that were not passed through the predicate. So because of getters, both on value and done, filter can be a bit strange here because it observes the value. But take and drop do not share that problem. They don’t observe the value and if you have a getter on done, it just kind of changes the behavior but it doesn’t lead to something unreasonable like with filter where you wouldn’t expect any of the values coming out of the filtered iterator to have not passed the predicate. So I can understand not wanting to do this optimization for filter for that reason if we care about that use case.

MF: I guess as a little bit of context, I kind of maybe should have led with the context. Anyway, `yield*` already does reuse IteratorResult objects in this way. It actually is inconsistently implemented in engines. The spec says that `yield*` should reuse IteratorResult objects, and reconstruct IteratorResults with the value given. JavaScriptCore and LibJS don’t comply with spec, they create new objects. So this would be matching `yield *` in that way.

MF: Other context. How I originally discovered this issue is that ABL opened a pull request for test262 for `iterator.concat` that asserts this behavior. And `iterator.concat` is another place where we could possibly reuse IteratorResult objects if we chose the optimization across the iterator helpers. Whatever we choose to do with these, whether we choose to reuse IteratorResult objects or not reuse them, we should follow that precedent with Iterator.concat. This is a necessary decision to be made whichever way it goes before we could move `Iterator.concat` forward. This is an area not tested in previous iterator helpers but the `iterator.concat` tests are thorough and asserting on the identity -- or rather lack of identity -- of the IteratorResult objects. So I will be asking for Stage 3 for that proposal later in this meeting and I will need to resolve this open issue before then. I have an open PR on that proposal to align it in either direction if needed. That’s all I have for slides. So happy to answer questions and have a discussion on this.

MF: As far as my own personal preference on which way we go, I don’t really have a very strong preference. I would generally prefer to reuse objects if implementations find that it would be helpful, and I think generally we can assume that it would be. But if we get negative signals from implementations, I’m fine also going the other way. I just want the question to have been addressed within plenary so that we have set a precedent going forward. That’s it.

RGN: This is not the strongest position, but Agoric are opposed to reusing the IteratorResult object because of the weird behavior that you alluded to. If I could just run down briefly the list of things that we considered, Number 1 would be that even the `take` and `drop` helpers have to look at `done`, so despite not inspecting `value`, all the weirdness is still possible. Number 2, it results in the inability to accurately shim this behavior using generators because generators aren’t going to reuse the IteratorResult objects. And Number 3, back on the weirdness, any extra properties of the result object beyond just `done` and `value` would sometimes be visible and sometimes not depending on which helper was used. So all things considered, it would be most convenient for our use cases if the reuse were limited to `yield*`. But because it already exists in `yield*`, this is not a blocking objection. That’s it.

MF: Thank you.

KM: Doesn’t do think but I’m happy to allocate-less objects when possible especially in things that run inside of loops since those tend to run a lot.

CDA: That’s it for the queue.

MF: So I guess I can share—let me share—I have some feedback from ABL on the pull request itself. You can also open this yourself. I’m going to open it in one second. Pretty much just from what I understand inconclusive at this point about whether or not SpiderMonkey would benefit from this change. It’s not written exactly as identical to `yield*`. There would be one final access of the value at the end. So if we were trying to look for it to be a way for implementations to implement in JavaScript as using `yield*`, we would have to slightly change that. But I would still be open to it. Because one extra value access is probably minor compared to, as KM said, something happening in a loop. All of the IteratorResults yielded by the iterator are able to be reused. It’s 1 to N. But so far, you know, I think without more prototype work, fully changing up the implementation, we won't have actual numbers on this. I think either way, it’s probably not a huge performance difference. It’s just that we need to make a call in either direction. I was hoping to hear more from implementers if they had opinions there.

DLM: First off, I have to admit I haven’t read ABL’s comment and not fully up to date on this. When we discussed this last week more or less into the idea that currently using generators and that’s not ever going to be really opt optimal for us so chances are we eventually write this code and it doesn’t make sense to object to the optimization based on the implementation when we consider changing it in the future anyways. I don’t think we should be specifying that closely to the particularities of implementation. But I would be interested in hearing—I expect this doesn’t affect V8 and it sounds like KM is in favor of this. So I think we’re more or less neutral.

MAH: So thanks for that information on implementation status of `yield*`. But if not all engines agree on what yield star does, maybe they also provides an opportunity to change the yield star implementation and align it to whatever we decide or not change it if we don’t need to. If we decide to reuse.

MF: We could. That seems like a regression to me. If anything, I think we should be leaning towards reusing the objects unless we have good reason not to. We heard from Agoric that they think it’s a bit weird with how getters can make things behave which is, you know, a reason not to, but it’s a balancing act.

SYG: All things considered, I like allocating less. I don’t know if this is straightforward when—it is straightforward when allocating less. But are we going to have inconsistency? Like, are some things going to reuse and some things are going to recreate? And we’re going to have to know?

MF: Yeah, the only opportunities for doing this are where the iterator helper works on some underlying iterator and passes the exact same value that was yielded through to the result. And the only ones I’m aware of right now are take, drop, filter, and `Iterator.concat` in the iterator sequencing proposal. Other ones like `map` are not going to be able to reuse an IteratorResult object because they don’t yield the same value, it yields a potentially different value. So it’s inconsistent in that way, but it would be consistent in that all helpers that pass a value directly through will pass –

SYG: Is that true of map? You could mutate the IteratorResult object to update the value.

MF: It could mutate. That’s right.

SYG: It’s not clear to me if the principle is to—if the goal is to have fewer allocations, why not also do that?

MF: I would be happy to explore that possibility. I wouldn’t have thought that that was feasible within this group. But if it is, I can come back with another proposal that tries to actually reduce allocations in that way.

SYG: I’m very happy with the goal to reduce allocation. I think my only worry is if we have somewhat open ad hoc thing for good reasons or bad reasons on an individual iterator helper by helper basis, that seems to be like maybe interrupt issue in the future. This might be easy to miss or something.

MAH: You cannot reliably mutate an object because you don’t know where the object is coming from. The property might not be configurable or writable, you don’t know what is going on there.

SYG: That’s fair.

NRO: Just going to say it’s a random user provided object. It’s a bit weird to mutate it.

CDA: That’s it for the queue.

MF: Okay. Well, it looks like that more expanded one is not very possible. Thank you for that feedback. So it looks like we’re still considering just the scope that I had originally presented of take, drop, filter, and `Iterator.concat`. I think I hear fairly weak arguments on either side and given that, I think my preference is to ask for this change. If there’s opposition to that I’d like to hear it. Otherwise, I would like to ask for this change. And then for it to set precedent for `Iterator.concat`.

NRO: I am very slightly against doing this for the consistency reason that SYG mentioned as in some methods do it and some others do not. And maybe it’s obvious to us that the rule is does this method need to move the object or not? But in general it’s like it might be less obvious to other people why summary is object. I think it’s fine if `iterator.concat` emerges from this mostly because it’s a static method and it’s not one of the methods on the prototype.

MF: I can see that it’s not absolutely necessary for us to be consistent here. I just thought it was nice. But I would be fine with inconsistency if that’s what is requested.

KG: I’m also slightly against doing this. Mostly just for the like—it makes the general shape is less consistent, which I’m worried about not just for users but for engines as well. I have slight hopes there’s some room for optimization here in engines to skip allocations in a lot of cases. I think that gets harder the more complex we make this. So my inclination is to keep the machinery as simple as we reasonably can which means making it implementable with the generator and making all the methods implementable for the generator. In case we go the other direction, I want to mention that you have been saying during the filter/take/drop you can do it for flatMap too: if you get the iterator out of the mapper function for flat map you can forward those iterator results.

RGN: We had only limited on-the-record participation. I’m wondering if a temperature check is appropriate.

USA: That was it for the queue.

MF: Do the chairs think we should do a temperature check? I’m also okay with asking for the inconsistent proposal from NRO: that we do not do this but we do the optimization for Iterator.concat. That’s also fine for me. I can see that argument.

USA: As it is, it is checks are not binding. I don’t see why not.

MF: As long as we have time remaining in the time box, I would be okay spending five minutes to do a temperature check.

USA: Okay. Then let’s do a five-minute temperature check. Would you like to define precisely what the question is and then I can start the temperature check.

CDA: Quick point of order on this besides what is important to define those. Everybody needs to have TCQ open at the time when we start the temperature check because if you come afterwards, the interface will not pop up. One of the many quirks of TCQ. So if you have any opinion on this, please make sure that you have the TCQ pulled up. You can see the queue or logged in, et cetera. And then that would enable you to see the interface and make a choice on that. Maybe we’ll give, I don’t know, 30 seconds just in case for that and then –

MF: I can explain the options while we do that. I see three options. The first would be doing the reuse of IteratorResult objects for both existing iterator helpers and for `Iterator.concat`, reusing IteratorResult objects for neither, or reusing IteratorResult objects only for `Iterator.concat`.

CDA: I pulled up the interface. If you can take a look, Michael, to see what people will be presented with. And then you can define what each of those things mean. Or if you like you just said –

MF: The scale is not the greatest thing.

NRO: A suggestion. Can you do two separate checks? One comparing here to the status quo for the prototype method and then a separate one for iterator concat. And people can vote the same in both if they prefer both to be consistent with each other or vote if they prefer my approach and prefer not to vote if they want to never use the objects. I think it’s okay to have two polls rather than one in this case.

KM: I will copy whatever the question is that is stated into the topic so people can see it also.

MF: I’m fine with NRO's suggestion that we ask about this optimization for existing iterator prototype methods. I don’t mean to call it an optimization. Reuse of IteratorResult objects for existing iterator prototype methods. Express your positivity or negativity on the topic using the emoji scale that we have.

CDA: Do you want to use the meanings that are currently ascribed there or did you want to provide your own –

MF: That’s the best that we have.

CDA: Okay. We’ll give this maybe, I don’t know, another minute. I don’t see any more responses trickling in.

MF: Then it looks like we are very slightly leaning negative on that, the reuse of IteratorResult objects. So we can run the second poll about iterator.concat. We can do that now or later during the iterator concat section. Either way. Are we directly following this with iterator.concat?

CDA: Yes. Iterator sequencing for Stage 3 is next.

MF: Then we may as well do it now since we can kind of combine the topics.

CDA: Okay.

MF: So the question here is, yes, do we want to reuse the IteratorResult objects for iterator.concat? Given the prior knowledge that we don’t want to use those IteratorResult objects on the `Iterator.prototype` helpers.

CDA: I’m just going to pull up the last result to see. I don’t recall how many responses we had total. It looks like we had at least 14. And we have about the same number here. So, of course, the numbers can be skewed a little bit because you can vote for multiple things, vote is the wrong word. It’s a multiple choice selection, shall we say? All right. I think things have stopped trickling in.

MF: This one looks fairly convincingly positive. So I will—when we come to that discussion, I will assume that we are making that change for iterator sequencing. So I think that’s all unless anyone is in the queue, I think we’re decided on this.

CDA: I did not note who is unconvinced on this one. Folks who were unconvinced, did you want to make any remarks that you haven’t already made?

JHD: I put indifferent on the last one. Do we care that there then won’t be consistency with the other iterator helpers?

MF: That’s what the vote was for, right, is that –

JHD: Right.

MF: Knowing that, the existing iterator helpers are not going to reuse IteratorResult objects, do we then want to reuse them for iterator.concat. And the result there was—it was fairly positive.

JHD: Okay. So nobody including myself, then, is hung up on the inconsistency or the inability to use yield star to polyfill it or shim it or any of that stuff? We’re just kind of like, sure, let’s take the opportunity while we have it just verifying?

NRO: I’m on the queue and this has been discussed in the matrix. If you want to polyfill generator concat we should not use this—take and drop, we should not reuse. For concat should reuse because it will be polyfill with yield star and it will be used. Inconsistency of concat and take filter is what makes it possible with polyfill generators.

MF: I’m happy with that conclusion.

CDA: Before you go to the next topic, would you like to dictate a summary and conclusion for the notes?

### Speaker's Summary of Key Points

MF: We have rejected the proposal to reuse IteratorResult objects for existing iterator helpers on `Iterator.prototype`, not setting precedent for `Iterator.concat` but setting precedent for other `Iterator.prototype` methods in the future.

## iterator sequencing for Stage 3

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-sequencing)
- [slides](https://docs.google.com/presentation/d/1EHMDcnV9zJ1E7BRhKmYtzHchZvOzjWynR3W-VdNxglw)

MF: Okay. Stage 3 is mostly formality now. So we have tests as a pull request to test262, and they're not merged yet. ABL opened this pull request, I don’t know, about a month ago. I reviewed it. I added a couple of tests that I could think of that were missing and it’s now all good for me. I know JHD has run it against his polyfill at various points. I’m not sure if his polyfills are fully passing those tests yet or not. But I am happy with the state of available tests for this proposal.

MF: I have this pull request open for `Iterator.concat` to reuse IteratorResult objects which is that topic that we just talked about. Based on the result of the last topic, I will merge this and update the one test in the test262 pull request to match. And that is all. So I would like to ask for Stage 3.

SYG: Can we have them merged before the end of the meeting? I’m uncomfortable agreeing to Stage 3 if they’re going to sit in an open PR for some amount of time.

MF: I’ve asked test262 reviewers and they weren’t going to have time to review them between then and the meeting. I’m happy to make it conditional on the tests being merged if that’s what we want to do.

SYG: I feel somewhat strongly like that. The point of me of extra tests for Stage 3, multiple points. One is get the proposal author to think at a deeper level at the per step level and also if Stage 3 is throw over the fence for implementers the point of having the tests is that we don’t have to reinvent the tests. If they’re not yet merged we have to do that. I want them to be in the repo to be runnable. Doesn’t have to be in the main trunk. That’s why staging exists. I want them to be runnable tests in the repo at the point of Stage 3.

MF: Yeah, I’m mostly focused on the former. I think it has caused us to think more deeply about all the minor semantics of it and we have now done that. But I understand that you would want to actually have them available for you to run in test262 and they’re not currently in the repo.

SYG: As for conditional, I’m happy to give conditional if we get like—if basically they’re merged by the end of day 4. If there’s no time for—if there’s no cycles for that, I would rather wait.

MF: Okay.

JHD: So the tests were great. They helped me catch some bugs with my polyfill and there may be one or two—I think there’s one test that is still failing but I’m convinced now that that is solely due to the fact that I’m trying—that I’m manually reimplementing generator state machine stuff without using generators so that sort of my—I have dug my own grave for that one. But I’m convinced that the tests are correct. So I think that they’re ready to be merged once they’re re-based and the change is discussed. I’m happy with Stage 3.

MF: Sounds like we have to hear from any test262 maintainers to see if they would –

JHD: I’m in that group. So I will—if no one else wants to look at it, I will merge it once it’s passing or once it’s –

SYG: To avoid putting other maintainers on the spot, can I make a concrete suggestion of having a two-minute extension at a later date and people would have some time to decide whether they want to defer on the review or press the button and then like you come back and say okay now it’s merged and then we get Stage 3 instead of putting people on the spot right now.

MF: It’s fine by me. I don’t know. JHD, is that okay?

JHD: Wouldn’t be up to me. We have done conditional approvals in the past and approved once merged. If you’re not comfortable doing that, there’s nothing wrong with waiting until the end of the meeting or something to bring it back up.

MF: SYG, am I taking this to be general feedback that if I submit tests for a proposal and it’s thoroughly tested and it’s had a review from somebody else and not been merged yet that I should hold off asking for Stage 3 advancement in the future until it’s been merged?

SYG: My preference is land it in staging and wait for the other review to—like, if you’re convinced that they’re correct, I’m happy to take the champions assumption that they are correctly written. And as long as they’re in the easy to access and executable part like staging, then when they kind of graduate out of staging, you can work on that at your own time and then you don’t have to wait for the full maintainer sign off.

MF: Okay.

SYG: Either that they are merged and you have the maintainer sign off or just in staging. That’s my preference.

MF: I will take that path in the future, then. I’m going to ask for an extension item sometime later in the meeting where we can revisit this assuming that the tests have been merged –

CDA: Okay. And the assumption is that that should be later in the meeting as much as possible?

MF: Yeah, I guess as late as we can make it.

### Conclusion

- MF will wait until the test262 tests have been merged before asking for Stage 3 again.
- This topic was not revisited later in the meeting.

## ShadowRealm for Stage 3

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-shadowrealm)
- [slides](https://ptomato.name/talks/tc39-2024-12)

PFC: My name is Philip Chimento. I work at Igalia and I’m doing this presentation in partnership with Salesforce. This is a short recap and ask for Stage 3 for the ShadowRealm proposal. So a quick overview of what is ShadowRealm. It’s a mechanism to execute JavaScript code within the context of a new global object and a new set of built-ins. So you create this object and inside it, it has an entirely fresh JavaScript execution environment. You can evaluate code in it, you can import other modules into it and they will be unaffected by anything else that you have done to the global object outside of the ShadowRealm. There’s a little code snippet here showing that it’s not affected by a global variable of the same name on the outer global object.

PFC: People get antsy when you mention the word security in the context of ShadowRealm. It is not security but integrity. You want to have complete control over the execution environment. It’s not a security boundary. I also asked chat GPT to draw an illustration of ShadowRealm and came back with an "eerie otherworldly domain filled with dark energy and mysterious elements. Let me know if you’d like any adjustments or additions!" I think I have nothing to add to this. This is an exact depiction of what it looks like.

PFC: The history of the proposal. At this point, everything seems to revolve around the question of which web APIs should be present inside ShadowRealm? Over the history of the proposal, we had several different answers to this question that we don’t like. One possible answer was none. We don’t like that because if you create a ShadowRealm in a browser, there’s no obvious reason why you shouldn’t have something like, I don’t know, atob() and btoa() or TextEncoder or TextDecoder in ShadowRealm. They’re not intrinsically tied to the browser. That confuses developers because the answer comes down to can I use this facility inside of ShadowRealm? You have to know which standards body standardized it. That’s not a great answer. We don’t like the answer of having no web APIs present in ShadowRealm.

PFC: The other answer is a vetted list. We don’t like this answer either. For several reasons, but the main one; still, how are developers going to know whether we can use something or not? Telling them to go consult a list is not that much better than, you know, telling them to look up by which standards body standardized the API. Another possible answer was a criterion based on confidentiality, which got us closer to an answer, but in the end, people found that criterion hard to evaluate without getting into the weeds. That’s something we want to avoid. So in a couple of slides, I will present the answers we have now for this. But this is kind of the history of how the various answers we have had to that question.

PFC: The proposal has been at Stage 3 before. In September of 2023, it was moved back to Stage 2 due to this question basically, which web APIs should be exposed—and also for concerns that the test coverage for these Web APIs wasn’t sufficient. So in that meeting, we made readvancement pending two explicitly supporting implementations that the testing and list of APIs exposed to ShadowRealm are sufficient. In February of this year, we advanced the proposal to Stage 2.7 with the understanding that that the Stage 3 requires sign off from the HTML folks on the HTML integration as well as resolution of Mozilla’s concerns about the test coverage. At the time that the proposal was moved back to Stage 2, it was noted that this is not an opportunity to relitigate design decisions. This is a narrow scope for answering these questions or concerns.

PFC: So what is the state today? Which Web APIs should be exposed inside ShadowRealm? We have written a design principle for the W3C TAG that governs whether spec authors should choose for something to be exposed everywhere or not. So a little bit of background on this. The web spec had an "Exposed" annotation that was like you could say, if something was exposed in windows and workers. As part of the preparation for the HTML integration of ShadowRealm, it gained an "Exposed everywhere" attribute, and so this design principle tells spec authors when to use that exposed everywhere attribute. The principle is that only purely computational features are exposed everywhere. So that means, features that perform I/O are not purely computational, features that affect the state of the user agent are not purely computational. As an additional exception, anything relying on an event loop is not exposed because one place where things can be exposed is in worklets, which don’t necessarily have an event loop. And then the final part of the principle is to expose conservatively. So features that are primarily useful for other unexposed features are not exposed. An example of that is Blob, which is a purely computational Web API, but mainly used in the context of I/O, so we should default to not exposing that, unless there’s a really good reason for using it by itself.

PFC: So we developed this design principle based on a number of conversations with implementers and web platform experts. Tried a few different iterations. I think that people are mostly happy with this one. There is a clear criterion for spec authors to decide whether something is in or out. And the distinction that mentioned before, that distinction doesn’t exist. That’s irrelevant with this. If you want the full list of the 1300+ global properties that are available in web environments, you know, with which are in and out and why, there’s a spreadsheet to click through there.

PFC: The current state of the HTML integration, there’s the pull request to click through here. The design is settled and there have been reviews. There are some details still being worked on, in particular, some mechanical work needed in specs downstream of HTML to use the new terminology of principal settings objects and principal global objects.

PFC: We talked earlier about test coverage. So I will show you an overview of things that are now covered with this. APIs that have test coverage in web platform tests run in ShadowRealm. So one thing we did was, to not just test in a ShadowRealm created in a regular browser window, but also to test everything in ShadowRealms created in multiple different scopes. So you can create a ShadowRealm and run code inside it from any of these scopes listed here: window, worker, shared worker, service worker, audio worklet, and another ShadowRealm. Sometimes testing an API might succeed in one of those and fail in another, if there are, for example, assumptions that the global is either a window or a worker, which sometimes exist in code. So now, tests run in ShadowRealm scopes in web platform tests will be run in all of these scopes by default.

PFC: I have got a list here of all of the web APIs that are exposed according to the new criterion. Links to PRs adding web platform tests for testing those in ShadowRealm. Some of these PRs are still pending review.

PFC: Here they are. Abort, Base64, console, et cetera. There’s several slides for this. You can click through to the PRs, if you want to see the details. A couple of these like crypto, and URLPattern are separate specs, and those—we have additional integration PR to add the exposed attribute of those specs, which is up to the authors of those specs.

PFC: There are a couple of things that are exposed that don’t have any WPT coverage. TransformStreamDefaultController, WebTransportWriter do not have tests in any realm. But when they do get these, we will enable them in ShadowRealm as well.

PFC: So the requirements for stage 3. Like the TC39 requirement, the feature has sufficient testing and appropriate pre-implementation experience. We can safely say that this requirement is fulfilled. Then we had the spec conditions that were imposed when we moved to Stage 2. Explicit support from the two implementations that the testing list and APIs to be exposed to ShadowRealm are sufficient. Signoff from the HTML folks on the HTML, integration and resolution of Mozilla's concerns about the test coverage. So I think that we can discuss these requirements in the queue. The—yeah. So I’ve asked various implementations about what they think about the current state of the testing and list of APIs and I am wondering if we could do explicit support on the record for that, you know, requirement during this meeting.

PFC: The HTML integration, I think we have moved that as far as we can until we hit a chicken and egg situation. There is an agreement on the API is exposed and it needs two statements of explicit support from implementations, as per the WHATWG process. That is moved as far as forward as it can go until we get this positive signal from implementations, which I am hoping we can also discuss in this meeting; and resolution of Mozilla’s concern about test coverage. I have talked to MAG a couple of days ago, and it looks good, but he’s going to take a closer look. I am hoping we can also discuss that on the queue.

PFC: So let’s move to the queue now. This is a fairly short slide deck, but I am expecting a certain amount of discussion. I think the majority of the time will be spent on that.

RGN: Yeah. I had a question about the TAG guidelines that came out, where you mentioned I/O as being excluded from exposure in ShadowRealm, and I wanted to know, is it actually I/O, is it input *and* output, or just input. Because APIs such as `console.log` do produce output and have proven useful for anyone with access to the debug console.

PFC: This is a very good question, and I have actually mentioned console as a particular example in the design principle guideline. Technically, the console is I/O. It definitely prints a message in the developer tools in the user agent. It affects the state of the user agent. And it might also write a message to a log file. But given that you can’t—like, this output is unobservable from JavaScript. You can’t use another API to read in the messages that were output to the developer console. And the practicality of having console in all environments weighs strongly in favour of including console. Console is kind of a debatable case, but I think everybody I have talked to feels it needs to be included. And I certainly strongly agree with that. Like, not having a console in an environment would be very weird.

RGN: Okay. Yeah, I agree as well. I would not want to see a guideline that was worded too broadly used as justification for excluding `console`. Thanks for the clarification.

WH: I have a question about “purely computational”. Does it mean that, no matter which environment you run in, the result will always be the same? Or can the result depend on aspects of the environment, such as locale, what hardware you have installed, or such?

PFC: So it should not depend on what hardware you have installed. But it is also not the case that it will be exactly the same no matter what environment you run it in. For example, we have exposed the isSecureContext boolean global property, which will be true, if you have created the ShadowRealm inside a realm that is a secure context, and false if you created it inside a realm that is not a secure context. So I would have to look at the W3C PR for the particular definition that we want to use in the design principles. We are leaning on the definition of not performing I/O and not affecting the states of the user agent or the user’s device.

WH: My question is regarding manipulation of external state. Can you read external state, such as the locale, or various state similar to that?

PFC: Reading the current locale is a capability that is exposed by ECMAScript itself. It would be difficult to say that a JavaScript environment couldn’t do that. The same as Date.now.

WH: Okay. Can this form a one-way communications channel? And do we care?

PFC: Do we care? Good question. Like I said early in the presentation, the goal of the ShadowRealm proposal is not security, but integrity. So a ShadowRealm is not useful unless you do have some sort of communication with it. The point is that you—right. I am not an expert on what kinds of things can be used as a communications channel. But I think that is pretty much covered by the callable boundary.

WH: Okay. I just wanted to understand how deep into the prohibition of “I” out of “I/O” this is going. Thank you.

KG: Waldemar, I recommend looking at the spreadsheet as well. There are a lot of examples there and that might be a list of—if you are familiar with the web APIs anyway.

SYG: Are the WPT tests merged?

PFC: Some are and some are not. You can see which ones are still pending in the slides. I’ve updated it as of Friday, I think.

SYG: Yeah. In a similar vein as having Test262 tests merged, what is your read on getting these merged ASAP. Stage 3, is implementer stage—this is I think more important to get this merged than Test262 because it’s not as easy to discover because there’s a bunch of different PRs

PFC: Yeah. That makes sense. If it were all in one PR, that would be probably not realistic for one person to review the whole thing. But I don’t see any currently any obstacles to getting these merged, except for just review capacity.

SYG: Okay. Thanks. To be clear, I would be more comfortable with Stage 3 once they are merged. I have no other concerns than that.

PFC: Okay.

NRO: Yeah. Relative to what SYG said. I don’t know how it works, but I guess we can merge them as tentative. They use this tentative marker for test that are not fully confirmed for some reason.

PFC: Some of the tests are tentative ones like the Wasm integration ones. It’s not feasible to do it tentatively, because it takes already existing coverage and adds a flag to it that says, run this in ShadowRealm as well. So these tests are not already not tentative. We might be able to do that somehow in the test harness, where it marks only the ShadowRealm as tentative. A number of the PRs have been merged already, and if we can get reviews on these, that would certainly be preferable to using the tentative flag.

DLM: I just wanted to answer the specific question of whether or not Mozilla is happy with the test coverage? I haven't remembered that we are the gatekeeper there, but we would like to recognize that a lot of work has been under tests and we no longer have concerns about the test coverage.

PFC: Okay. Thanks.

KG: Yeah. I really like the principle of pure computation. I did want to raise some wrinkles, and all of these have come up on the various threads of which there are several. I don’t necessarily think this needs to hold up the advancement of the proposal except maybe in one case, which we can talk about. But I do want to try to get more clarity about what exactly pure computation means. In particular, you have the webcrypto stuff not being included. I don’t understand how that can fail to be computation. And it's not like a trust store and that doesn’t even use hardware. Most of the time, you can shim subtle crypto.

PFC: Can you? My understanding was that it required access to a trust store. If it doesn’t, then we should take another look at that, I guess

KG: Most of it doesn’t. Maybe there’s some I am not thinking of. But the basic shot 256 array buffer doesn’t. And like encryption and decryption, maybe there’s some other things I am forgetting. If that’s an oversight, that’s fine. And then there’s some things where it could in principle be implemented in WebAssembly, but probably has hardware, like video encoding and decoding is the example here. You have that excluded on the basis of being mainly useful for IO. Which –

PFC: Yeah

KG: I think it is basically fine. But it doesn’t answer the question of, , like, , you know, assume there is some hardware module, it was useful for some operation that we think is reasonable to perform in the ShadowRealm. Does the fact that it is done by dedicated hardware mean that it’s not usable in a ShadowRealm? And WebGPU is maybe the example here. And I forget if that shares state with other WebGPU stuff throwing on the same page. If it doesn’t, it seems like that is basically pure computation.

PFC: Yeah. We did discuss this on the thread about the design principle. I don’t really have a strong opinion on that. I feel like, if it could be emulated in WebAssembly, there’s no reason to keep it out. But basically, I don’t know enough about what use cases people would want for WebGPU in ShadowRealm to say, that should be out because it’s non-CPU computation or whatever. Or it should be in because you can do this and that with it. I would say, in the absence of anything else, it’s out for reasons of primarily being useful for other things that are not exposed in ShadowRealm, but I, –

KG: Yeah. These days, there’s a lot of use that is LLMs. And that’s not unreasonable to use in a ShadowRealm

PFC: You mentioned in your queue item about audio worklets.

KG: Yes. Maybe this was the result. But the audio—some of the people that work on audio, at Mozilla, had this concern about not wanting to allocate memory in an audio worklet. And I think that’s a major concern for audio worklets, that shouldn’t carry over to ShadowRealm. It just complicates this expose = star thing. If this implies, you know, exposing TextEncoder and code into audio worklet, if they don’t want that—is there a resolution to that? Was the plan to do it anyway?

PFC: So I think these are two conflicting viewpoints and both are reasonable. One is that audio worklets must not expose anything that allocates memory and the other is, well just don’t do that then in audio worklets.

KG: Right

PFC: Neither of these are unreasonable. I think the latter is the more commonly held position. And so like that’s what I have proposed in the TAG design principles issue. I don’t have a strong opinion on this position, but I don’t like the idea of keeping things out of audio worklet that are otherwise exposed everywhere. And you know, if that happens, if the TAG decides that the former viewpoint of, you must not expose anything in audio worklets that allocates memory, then it’s I think it’s better to just make like the HostInitializeShadowRealm operation throw if the incubating global is an audio worklet.

KG: That would work for me. I don’t have a strong opinion about the audio one or the WebGPU one. But it… I guess the—there is still some edge case that is unsolved. I am fine with going forward with the principles written and the list that you have with the change to expose crypto. I just wanted to talk through these

NRO: Yeah. Just a clarifying question. What is—what APIs allocate memory? Is new array buffer,

KG: Array buffer, yes. Probably not an object. The concern was specifically stuff where it’s like unbounded or based on user input. And yeah.

PFC: I guess TextDecoder is an example of I think why that fight is kind of already lost. Because for example TextEncoder already has the exposed everywhere attribute. But in an audio worklet, you are only supposed to use encodeInto() on an already existing buffer. Because that doesn’t allocate the new buffer. So that ship has already sailed. TextEncoder is already exposed everywhere. So, you know, shrug.

KKL: I know you haven’t—lots of folks were expecting to hear from us from the hard and JavaScript community about this proposal and I want to make this explicit, that we were unworried about any particular decision, though elated that come up with a criterion that was enough to make thousands of small decisions and make progress on this change. I wanted to remind folks that the reason they are unworried is because the capabilities are deniable in a ShadowRealm by the code that run first there, because we got in early. The requirement that properties of the global object kind of ShadowRealm are all delete-able and oner that, thank you for manufacturing through this. This is despite we find that the—while we are elated that the—that the implementers and other specification authors find that the criterion is sufficiently inambiguous, they are able to use it to make a lot of small decisions, we recognize there are ambiguities to it and unworried for the prior reasons. For example, one ambiguity, the criterion of nothing that schedules to the event loop. That obviously does not limit the use of the microtask queue, I assume that event by event loop, we mean the IO scheduler. And that’s all I have to say about this and thank you and good work.

PFC: Yeah. To answer the question about microtasks, queueMicrotask is reasonable in the ShadowRealm because it does not rely any more on an event loop than `Promise.resolve` does.

CDA: Nothing in the queue.

PFC: All right. In that case, how do folks feel about moving the proposal to Stage 3?

SYG: As I said before, I would be more comfortable with Stage 3, once the tests are merged. and let be reflected in the record, there are no concerns other than the mechanical than having the tests merged. Before the WPT coverage is there, I am not comfortable signalling that it’s basically ready for implementation because it’s too easy to slip through the cracks.

PFC: That’s fair enough. Other than that, are there any concerns that I should be aware of when bringing this back when the tests are merged?

CDA: I am not sure who that question was directed to.

PFC: Everybody.

KG: As long as we are okay with tongue bikeshed smaller things like `crypto.subtle`, and you know with the potential open question of the interaction with audio worklets specifically, which I will fine with leaving those open.

PFC: Okay. I will look in more detail into which parts of `crypto.subtle` are able to be exposed.

NRO: Yeah. So PFC said we’re in the chicken and egg situation, with what—you need supports from browsers to merging the HTML Q we are going to assume that once this proposal is here, which is Stage 3, then browsers having implicitly supporting it in the WHATWG integration or looking for something more explicit?

PFC: That’s a good question. And I would actually like to hear what other folks think about that.

SYG: That’s my understanding. Sorry, I am not in the queue. Let me check the queue. Is it okay if I jump the queue without typing?

CDA: I think there’s nobody else on it.

SYG: That’s my understanding, that because the browser vendors are in the room, in TC39, we should not get something to Stage 3 if we do not have browser consensus. So if there are concerns within an individual browser vendor, such as the HTML DOM side of I don't know if your team do not agree to ShadowRealm, you should not give consensus. My understanding is, once we give Stage 3 consensus here, that implies at least two. Like, it implies all three. Actually.

KM: I may have to tentatively give spec things but I need to double-check. I think it’s fine, but I need to double-check with our folks. I wasn’t aware of this meeting

DLM: We have some concerns around this area. So I have not been attending—I am not really involved in the HTML side of things. But from what you have heard from people at Mozilla that are involved in that side of things is that there’s no real objections. But neither are the real statements of interest, on the HTML side, and we would need browser vendors to express interest in the implementing this and for this to go ahead in the HTML side and what I heard last week, that’s not the case right now and I don’t really feel that my statement of support or objection here is any any way speaking for the DOM team at Mozilla.

DLM: Just to be clear, I don’t feel the same way as Shu. I don’t feel like that I can—you know, a lack of objection for me, here it doesn’t mean that our DOM team is going to express an interest in influencing this on the HTML side.

PFC: It’s good we discussed this.

SYG: You said a lack of objection from you here does not—sorry. I missed the second part.

DLM: Sorry. That was not clearly stated on my part. I am not speaking for the DOM team. I feel like that is a separate group that needs to be convinced that this should be implemented. I realize, you know, you and I both work in browser vendors as well, but in my case, I am only speaking here as a TC39 representative, and there’s no kind of internal consensus between us and the DOM team about implementing ShadowRealm. So this is something that I have brought up in our internal meetings with them. And I have spoken to the people that are representing us at WHATWG, and my understanding is this was discussed either last week and it sounds like none of the people in that meeting expressed an interest in implementation at this time.

SYG: I see. I… I would encourage—maybe we all need to sync up as browser vendor, but I would encourage the other browser vendors to not give consensus here, if it meant—like in this case, in particular, since so much of the proposed API requires so much of the semantics is around web API integration, like if there is not a willingness to implement on the HTML DOM side of the team, our given consensus in giving stage 3 in TC39 will send the wrong signal and we shouldn’t do that. Stage 3 means it’s coming for sure, a matter of time and if you don’t have that internal consensus on the HTML side, I don’t think we as the representative of Chrome or Firefox or Safari should give the consensus until we—we should block or give consensus depending on the internal agreement.

SYG: So that’s not to put you on the spot, but I think it is it mean that—since I am blocking on properly ground this any way, until the test is emerged, I think I would request the other browser vendors to get internal consensus or lack thereof, later on the internal agreement before Philip comes back for Stage 3 ask.

DLM: Yes. I am definitely willing to bring this up internally again. And yes, I agree with you, and this is something they also said about the risk of sending the wrong signal here. I am also sensitive to, it feels like we’re moving the goalpost a little bit in terms of, you know, the work that the ShadowRealm champions have done. But yes, I mean, I—yeah, I can’t really disagree with you, Shu. I do—it’s sending the wrong signal if we say this is good for Stage 3, and there’s no kind of expression—and to be clear, there was no—my understanding of what was communicated to me was that there was no objections to this. It’s just there was no particular statement of interest in implementing this any time soon. I will work to clarify that before this comes back

KM: I guess, my—again, I—in addition to what DLM said, I have basically the same feedback, except from—you know, I don’t have—I probably have less conversations probably. So it’s kind of, like,—but I did not hear any objectionion, but also I did not hear any strong desire from the HTML folks to do this work. But I will also ask them and come back.

PFC: Okay. Before bringing this back, I will be in touch with all of you asking about how these conversations went. So I think I will withdraw the request for consensus. And come back at a future meeting, probably February, after the tests are merged.

MLS: Yeah. You are talking about—I am the same as KM, I haven’t talked to them—the HTML folks. But—sin the right venue for all browsers? Because they have not just the people that are with our companies, but others are the right ones to indicate their interest in moving ShadowRealms forward, on the HTML side.

SYG: it’s a little bit tricky because it’s kind of like—yeah. I guess it’s kind of chicken and egg, but I mean… it just feels existential. If we agree to Stage 3 and no browser ships it, that's bad. If we agree to stage 3 and a subset of browsers subset it, that’s also bad. If the HTML sides whether we ought to ship at TC39 proposal, I would like the consensus to completely agree between the two. Where the conversations happen is a great—I don’t know where to best facilitate that. But are you suggesting that we all go to the WHATWG meeting to hash it out there?

MLS: It sounds like we need to have a homework assignment. On a TC39 from browser companies to have this conversation internally. But it seems to me that there’s also been these discussions—so we are having a discussion right now and we have had discussions on ShadowRealm in the past. And we’re inclined from the TC39 point to move forward. But is there the same kind of inclination with WHATWG? Because in TC39 obviously browsers, you say SYG, agree. We want browsers' support. But it’s the whole TC39 that’s why they want the proposal. And I know the WHATWG is a little different than what we as far as their makeup. But TC39 if they want it as a whole, that helps the conversation between the browsers.

SYG: I agree. I am not clear if there’s a concrete suggested course of action that was different than my suggestion.

MLS: I don’t know because it—it doesn’t seem to—there is a concrete action that we need to view as TC39 delegates and that is to talk to the TC39 folks. Earlier in the slides, we seen all the PR on the HTML side that haven’t—haven’t moved forward to completion. Is the desire in each of those subvenues that they do move to completion?

SYG: My understanding is that yes. Because the goal is that we are all agree to something we will all ship. And if we allow things to move to Stage 3, but then due to whatever external reasons. TC39, we don’t ship, I think that is a breakdown in the norm of, like, working in TC39 at all. Then why do we agree to Stage 3 if we agree not to ship without good reason, just to like external things that come after we agree to Stage 3.

CDA: There is nothing on the queue.

MLS: So I was muted. Let me respond to you, Shu. The general idea, when we proposed something for Stage 3, when it gets to Stage 3, that everybody TC39 including browsers, then there’s a ten to implement and ship it. I know that is—in practicality, that doesn’t always play out

SYG: It sounds like we are agreed that we should have that—like, with, as implementers, should not grant—agree to grant to Stage 3 unless we have our ducks internally in a row. We don’t know we’re going to implement and ship ShadowRealm because the DOM side folks might not agree, we should figure that out before we advance to Stage 3 is all I am saying

MLS: And I agree. And about so, you know, KM and I will do our home and you will do yours and DLM will do his and so on and so forth.

PFC: Yeah. That’s my assumption as well. It’s good that we confirmed that.

DLM: Sorry. I wanted to add a little bit more to this topic. Yeah. I agree. We should let things move to Stage 3, if we don’t things will be implemented in a reasonable amount of time. I will follow up with. I don’t feel like it’s my job to advocate for a proposal without DOM. We can ask for feedback, but in this case, I have raised it since this is very timely. But yeah, I would encourage proposal champions to also work and make sure that things don’t get lost on the HTML side as well. I mean, I can ask for people’s feedback, but I can’t require it. And I would also like to say, I am very happy that this topic came up now because I can see—like I think when HTML context comes up, there will be a substantial amount of work done on the HTML side as well and I am glad we established that as the rule, that we won’t let things advance to Stage 3 without our DOM’s as well.

SYG: My intention is definitely to get clarity on, not asking the individual delegates to champion these proposals that you are not championing.

PFC: So that’s an action for me, which I will definitely take to heart.

DLM: Yeah. Just to follow up on what SYG said. Yes. I am certainly quite happy to ask for opinions, but I am not going to press for opinions. So if this is fine for Stage 3, yes, the thing is that the proposal champions will have to take up with people involved in the HTML spec.

CDA: Anything further in the queue? All right.

PFC: Then I think that brings us to the end.

### Speaker's Summary of Key Points

- Since advancing to stage 2.7, the Web APIs available in ShadowRealm have been determined using a new W3C TAG design principle.
- Each of these available Web APIs is covered in web-platform-tests with tests run in ShadowRealm, including ShadowRealm started from multiple scopes such as Workers and other ShadowRealms. Some web-platform-tests PRs are still awaiting review.
- The HTML integration is now agreed upon in principle, and needs some mechanical work done in downstream specs. However, it needs two explicitly positive signals from implementors to move forward.
- The concerns about test coverage have been resolved, assuming all of the open pull requests are merged.
- We will get the web-platform-tests merged, look into what can be included from crypto.subtle, and talk to the DOM teams of each of the browser implementations and get a commitment to move this forward. When that is finished, we'll bring this back for Stage 3 as soon as possible.
