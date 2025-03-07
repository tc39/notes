# 106th TC39 Meeting | 18 February 2025

**Attendees:**

| Name             | Abbreviation | Organization       |
|------------------|--------------|--------------------|
| Kevin Gibbons    | KG           | F5                 |
| Keith Miller     | KM           | Apple Inc          |
| Oliver Medhurst  | OMT          | Invited Expert     |
| Dmitry Makhnev   | DJM          | JetBrains          |
| Gus Caplan       | GCL          | Deno Land Inc      |
| Daniel Ehrenberg | DE           | Bloomberg          |
| Jesse Alama      | JMN          | Igalia             |
| Michael Saboff   | MLS          | Apple Inc          |
| Ujjwal Sharma    | USA          | Igalia             |
| Ashley Claymore  | ACE          | Bloomberg          |
| Nicolò Ribaudo   | NRO          | Igalia             |
| Philip Chimento  | PFC          | Igalia             |
| Michael Ficarra  | MF           | F5                 |
| Linus Groh       | LGH          | Bloomberg          |
| Samina Husain    | SHN          | Ecma               |
| Ron Buckton      | RBN          | Microsoft          |
| Kris Kowal       | KKL          | Agoric             |
| Mikhail Barash   | MBH          | Univ. of Bergen    |
| Daniel Minor     | DLM          | Mozilla            |
| Aki Rose Braun   | AKI          | Ecma International |
| Luis Pardo       | LFP          | Microsoft          |
| Chip Morningstar | CM           | Consensys          |
| Eemeli Aro       | EAO          | Mozilla            |
| Ben Lickly       | BLY          | Google             |
| Mathieu Hofman   | MAH          | Agoric             |
| Sergey Rubanov   | SRV          | Invited Expert     |
| Chris de Almeida | CDA          | IBM                |
| Luca Casonato    | LCA          | Deno               |
| Istvan Sebestyen | IS           | Ecma International |
| Waldemar Horwat  | WH           | Invited Expert     |
| Richard Gibson   | RGN          | Agoric             |
| Shane F Carr     | SFC          | Google             |
| Erik Marks       | REK          | Consensys          |
| Justin Grant     | JGT          | Invited Expert     |

## Opening & Welcome

Presenter: Rob Palmer (RPR)

RPR: Thanks everyone for coming to Seattle, we’re ready to begin the 106th meeting at TC39.

## Secretariat comments

Presenter: Samina Husain (SHN)

* [slides](https://github.com/tc39/agendas/blob/main/2025/tc39-2025-005.pdf)

SHN: I was not able to attend your in-person meeting in Tokyo. It’s nice to see everybody again. A lot has happened within Ecma in the last couple of months. So let me just give you a short report. This is the overview of what we have done within the secretariat and different activities and just going to highlight some things on source map and new TCs we have and just a reminder on the executive committee meeting date and deadlines that you should all be aware of and then some general collaborations that we continue to have.

SHN: So first congratulations for the first addition of source maps. Yes, there you are NRO. Congratulations. Good work. Really hard work. I mean, it was brilliant that you did this in the year. So we’re looking forward to the next edition. It is published and was approved at the December GA and want to bring that to everybody’s attention if you were not already aware.

RPR: Round of applause.

SHN: Also want to highlight TC55, a lot of work has gone into that. I want to thank everybody for that work. The chairs are Luca and Andreu, and Aki is supporting you and I think you will have the official meetings. I know there’s some things that need to be taken care of administratively from Ecma perspective. This is brilliant. Last year 2024 was the year that we had two new TCs and this is one of them. We’re very happy for that. That was approved at the December GA. If there are individuals that want to be involved and organizations that would be great.

SHN: The other TC that is TC56 is the first that touches on artificial intelligence, I think this is very good for ECMA to come into a new space. The members are involved here not only IBM but ServiceNow has shown interest and Microsoft shown interest and Hitachi shown interest that are current members and university that are active not for profit members and we have a couple of invited experts and looking to have them transition to be membered and mainly Cisco being one of them. I think that is excellent. This also enables us to be more visible in the AI space. The AI Alliance has a number of individuals involved in the meeting. Hopefully this grows not as this particular TC but other TCs in the area of AI which of course as everyone knows is a dynamic and constantly changing topic. So thank you for the committee that worked on this also. It was approved in December.

SHN: Also from the Ecma new management for 2025, we had the final votes in December and first I want to thank all of the people who did nominate and were nominated for this. We had seven members who are nominated for non-ordinary member positions. We had only four positions. It’s excellent to see the interest. I hope your interest still remains and that you are still active and want to consider to submit your name as we do these elections every year. This is the final slate that was selected. So DE who is sitting right here in the room is our new President of Ecma. And Jochen Friedrich was previous president and vice president and treasurer is Luoming Zhang and important to note that management roles are for ordinary members. We only have six ordinary members. We are looking forward to their support and driving Ecma.

SHN: From the Executive Committee (ExeCom), this is really exciting and we have new members and many are sitting here. Jochen will chair and we have Theresa O’Connor from Apple and Chris Wilson from Google and Mikhail Barash (University of Bergen) and Patrick Dwyer (ServiceNow) and I don’t know if some are online. It’s great that we have new thoughts and new discussions. Peter Hoddie (Moddable) has been on it before and also important to remember all of the relevance and the past information and leverage on that. So it’s great that Peter is on. And Ross Kirsling (Sony) is also on it. Maybe Ross is also online. This is very new and dynamic executive committee. We will have our first meeting coming up in March. So again thank you everybody for your interest. And congratulations to everyone that was appointed. You may applaud since Daniel was here.

SHN: Just a few general items and the important one, this year ExeCom is earlier usually it is middle or end of April. It is in March. If you are, as I assume, going to have addition 16 and 12, the different standards, I need to have an indication of that. We need to bring that to the attention of the ExeCom that is actually in two weeks. I can make that update immediately. But I just want to get information from the committee that both those two additions are your intentions for the GA in June. You have plenty of time for the opt-out, but I do need indication that you want it. And then maybe the editors can let me know that. The committee can let me know that before this meeting is over. Perhaps if you can by the end of the day, I would appreciate that.

SHN: We have talked about liaisons before. Ecma has a number of liaisons that we keep active like the JTC 1 and W3C and we have had historical with IETF and in the past there were people of IETF coming to Ecma and TC39 meetings. Over time, there hasn’t been a lot of cross-contribution. I would not want to see the liaison disappear. To build a new liaison is always more complicated. I would like to keep it going. I’m asking if there’s somebody on the committee that could be the point of contact between TC39 and IETF, I would appreciate that. If there is no topic or nobody of interest, I also need to know. I need to figure out how to maintain that from the secretariat. I don’t want to drop this. I suspect as we move forward with new topic and areas of IETF is doing we should have visibility of what is going on to make sure it’s not impacted any of the work that the committee is doing. Please give it thought and approach me with who the individual can be.

SHN: We have a strong invited experts list together with AKI and the chairs we’re always reviewing them. We had an extremely busy end of last year. I have had an extremely busy last few months of the end of the year were a bit of a blur if I look back with the activities. I have been very flexible. So the invited experts that typically would have ended their term at the end of 2024, I have not stopped and they will continue on and because we appreciate everybody’s contribution and would like to review them at the end of the year. Sometime in the next little while I will be approaching organizations and members that are related to the organization that are invited experts if they are considered to join. Please be aware to get an email from me. It is a touch base just to inquire and see how your organization is looking at Ecma and if they would like to join because ideally that is the way we want to move forward. So continue on with your work and together with AKI we will work with the chairs to make sure that the list remains accurate.

SHN: With W3C we have done the transition of Winter CG to the generally used term WinterTC and new TC55 that is formed at Ecma. In doing so, I had a number of conversation with W3C leadership and also have met with their CEO Seth Dobbs and they’re keen to see how Ecma can be more engaged with W3C and I know there are already members representative here that are active in different spaces of W3C. Those are the four bullets I brought up in a previous meeting. I would like indication on the **horizontal review** is the one that is the lowest hanging fruit. Does it in any way impact us? I would like guidance. It is important. I want feedback on that. I’m looking at Shane right cross from me. If there are other topics that are important, reach out to me and AKI and the relationship with W3C after the moving of TC55 opens up more opportunities for more collaboration. There may be other projects going on in W3C to come to Ecma. There are common members and eventual invited experts. W3C has a broad scope and a certain focus. Ecma has a value it can bring. If there are topics, we have the opportunity to continue the strong relationship here. We have the liaison contact Michael Smith. I and AKI are active with W3C and have a strong relationship and make sure we are active with W3C and TC55.

DE: Great presentation. A couple comments that I wanted to add. Just to emphasize Winter TC or TC55 the significance of this it’s about standardizing an initially a subset of the web platform that’s supported on web interoperable server environments such as hopefully Node.js and Deno and complementary of TC39 work and scope of things and certain things we thought about in committee that ended up getting web specs for. Hopefully this can help regularize in the ecosystem some of the core concepts. I hope more TC39 members will be interested in joining this group. Development has switched completely to Ecma unlike previous plans where the CG and the TC would live side by side. And thanks LCA and ABO and OMT for the leadership. For the IETF leadership, role, although the IETF have a broad scope and it can be intimidating to be liaison for the whole organization, there’s starter tasks that people could work on. For example, we have certain line types with Ecma that are through registered through IETF such as CycloneDX and small tasks and coordinate to register to the cycle NDX types to point to the new version of the standard. There’s been successful interaction of IETF and TC39 such as making the new version of the datetime format standardized and I hope people consider taking on this extra role.

SHN: Thank you DE. And give applause for the TC55 team. Thank you. I’ll go quickly through the annex slides and then open for any other questions. The annex slides as you see are up loaded. Also reminding everybody of the invited expert and the role on the TC and reminding everybody on the code of conduct which is very important as already noted by RPR on how we work and how we exchange our interaction and work together and collaborate. As always the summary and conclusion are extremely important. It has been an improvement and I thank you very much for all of that and hope to continue to build on that. AKI does the minutes and then I finalize them. So it’s really helpful for us to have these and for everybody else.

SHN: There are a number of documents. I listed them. There’s a lot of documents. If you’re interested and you see by the title of the document that you would like to know more about it, you may ask the TC39 chairs to access them for you or ask AKI. These are the things that taken place since the December meeting. There’s quite a number of things. I noted in the earlier slides and let you run through those. If there’s anything you want more information, I’m happy to share them. There’s a huge list. The meeting dates as reminder we have the next one coming up that will be virtual. I did statistics last year. You all had average of over 75 participations in meeting whether hybrid or online which is excellent. You’re the largest committee and work actively. And of course every year you have the new additions. So it’s quite dynamic.

SHN: Our dates just as said, what we have coming up I have noted in red that are ExeCom date is 5th and 6th of March. 5th is the main date. There will be secretariate and your chairs that report at the meeting. I know about your new additions before that time and you have plenty of time for the opt-out. The GA is later days of June and if you work backwards you have time for the opt-out. That’s slides and information from the secretariate. I want to thank everybody for supporting AKI and what she’s doing for TC39 and other technical committees that we have. So please keep supporting AKI and her questions and support to you.

RPR: Thank you for an excellent report.

### Speaker's Summary of Key Points

Update on recent ECMA activities, including the approval of new Technical Committees (TCs), organizational changes, and upcoming deadlines was provided.

#### Key Points

* The first edition of Source Maps was successfully published and approved at the December 2024
  * Two new TCs approved in 2024, marking a significant milestone for ECMA.
  * TC55: Focuses on standardizing a subset of web platform APIs for use in server environments
  * TC56: The first ECMA TC focused on AI.
* ECMA’s Management and New Executive Committee for 2025 was announced. Elections were finalized in December 2024 and the first Executive Committee (EXECOM) meeting is scheduled for March 2025.
* Important updates regarding Edition 16 and Edition 12 of existing standards need to be submitted before the EXECOM meeting.
* Maintaining and expanding ECMA liaisons, the liaison role between TC39 and IETF needs to be maintained. Volunteers are needed to act as a contact person between the two organizations.
* Invited Experts, the list of invited experts has been extended beyond December 2024. Organizations that have invited experts should consider transitioning them into formal ECMA members.
* Reminders of meeting minutes and summaries have significantly improved, thanks to Aki, the chairs and all the participants.

## TC39 Chair Election

RPR: So CDA may have an intro to say and AKI can be helping in the room and conduct things when the rest of us step out.

CDA: As many folks are aware, we really only do an election when we have a change in the roster. And so that’s what we’re going to be talking about today. Next slide, please. So this is the full roster of folks beyond all of our esteemed delegates and invited experts, you can see we have the chairs and facilitators and convenors of task groups and editors and administrator and secretaries. The only thing that is changing is the chair group. The chairs themselves are unchanged. But we are having a couple of facilitators formally stepping down. So that would be BT and YSV whom we very much appreciate their help as facilitators and as chairs previously. And they will be—we will be looking to add to the facilitators. DLM and DRR have volunteered to help us out. The delta is the individuals and the same Ecma members are still represented. That’s nice to have continuity there. At this point we are going to step out to let the committee do its thing. So that’s myself, RPR, USA, DLM, and DRR.

_Notes paused during discussion on new chair group_

AKI: We’re on the record as having consensus.

SHN: You have consensus. I do, of course, have to ask—do you accept the role? Do you accept to continue?

RPR: Yes, accept gladly.

SHN: It is relevant to ask the question even though you are voted in, you all accept your role? Is that the same for you Chris?

CDA: Yes.

SHN: Thank you. If anybody who has been appointed doesn’t wish to accept the role, they should speak out. Congratulations.

RPR: Very thankful to BT and YSV for serving for many years as facilitators.

SHN: Ecma Secretariat will take the action to recognize the work of both BT and YSV.

### Conclusion

* The proposed chairs and facilitators group has been elected by acclamation:
* Chairs: Rob Palmer, Ujjwal Sharma, Chris de Almeida
* Facilitators: Daniel Minor, Daniel Rosenwasser, Justin Ridgewell

## ECMA-262 Update

Presenter: Kevin Gibbons (KG)

* [spec](https://github.com/tc39/ecma262)
* [slides](https://docs.google.com/presentation/d/1jgEaNaq6W7hZSKQILZ1F2sC1jTjRKwwnuqCGgi6iyQc/)

KG: Now that we have done the election, we move on to KG with the 262 status update. So the update, there’s a few normative changes. The last two haven’t. RegExp modifiers landed and import attributes and JSON modules did land. And apologize for the delay and should be landed today or tomorrow. No significant editorial changes because not had as much time as we like. But there have been a number of manual ones. None of which we put here. Approximately the same list of upcoming work, what we started to chip away at bits and pieces here. And then of course the most important thing as mentioned it’s a new year and time to prep a new addition of the specification. We intend to freeze the specification meaning no further normative changes except possibly any bug fixes and we’ll go in after the end of the meeting after we land the things that are going for Stage 4 or I believe there’s a normative PR although the normative PR we won’t land because it requires implementation. Never mind. The Stage 4 proposals, any or all of the Stage 4 proposals that are proposals which are attempting to achieve Stage 4 will be landed before we freeze the specification. But then that will hopefully happen by the end of the meeting and we will get everything in and all tied up. We will post the link to the reflector of the candidate specification. At that point the IPR will begin. Watch for that link. But expect it to happen approximately Thursday. That’s all I have.

RPR: Just checking for anything on the queue. No questions on the queue. Give it a moment in case anyone wants to say anything. Thank you KG.

NRO: I have a question. Didn’t get on the queue in time. The definition that you are going to remove from the spec, what is the reason? Because I was just going to add to that the source map spec.

KG: So the problem is that that defines something like 3% of the terms and definitions in the specification. Most terms are defined closer to where they’re used or in some relevant section. And just the sort of mish-mash of random stuff in there. And to the extent possible, we thought it would make more sense to consistently put terms closer to where they’re used.

NRO: Okay.

MF: I will note that Ecma specifications are expected to have a Terms and Definitions section but that is one of the places where we have chosen to diverge.

RPR: Thank you. And so Kevin, you’ll write up a summary in the notes?

KG: Yes.

### Speaker's Summary of Key Points

Normative changes since last time: regexp modifiers, import attributes, JSON modules candidate ES2025 spec will be cut at the end of this meeting, to include any proposals which get stage 4 at this meeting.

## ECMA-402 Update

Presenter: Ujjwal Sharma (USA)

* [spec](https://github.com/tc39/ecma402)
* [slides](https://notes.igalia.com/p/q98gbOaS6)

USA: Good morning everyone over there in Seattle. I hope you’re having fun. I’m going to similarly talk about what’s happening on 402 briefly. We have a few normative changes that are in the works. The first one is a relatively old one. This is basically everything that we have ongoing at the moment for the first one this is a normative note that was requested by a previous TG1 and they’re still soliciting feedback on this. For the next one we have new numbering systems by FYT and this has been improved by TG2 and should come to TG1 soon that will up grade for the 16. Next we have another normative pull request by RGN which has been sort of being discussed in TG1 at this moment. But there’s no agreement yet. And then we have three new ones, so expect to see them soon to TG1. But that’s all the normative changes we have. The last one especially being uncovered by Test262. That’s nice.

USA: For the editorial changes, the first one is sort of rearranging the spec more consistently that’s already been merged and then we have two more editorial pull requests at this moment. Apart from that, we also have to merge a meta change by AKI that helps us generate better PDFs, but it’s currently blocked by a change to ecmarkup.

USA: Similarly to ECMA-262, we plan to freeze the spec soon including the Stage 4 proposal DurationFormat. We plan to do it at end of week and start the IPR opt-out before the next meeting same as 262. And that’s all.

RPR: Thank you. Currently there is no one on the queue. Would anyone like to ask questions? All right, then, thank you Ujjwal.

### Speaker's Summary of Key Points

Ongoing changes to the ECMA-402 spec were discussed and USA announced plans to freeze the spec at the end of the week.

## ECMA-404 Update

Presenter: Chip Morningstar (CM)

* [spec](https://ecma-international.org/publications-and-standards/standards/ecma-404/)
* no slides presented

CM: JSON is kind of like conditioner—it helps keep your data soft and manageable. And ECMA-404 is like the label on the package—the sort of classic timeless unchanging verbiage that everybody has come to expect and appreciate.

RPR: Thank you for that product analogy. I think that’s short and sweet. It doesn’t even need a summary.

## Test262 Update

Presenter: Philip Chimento (PFC)

* [repo](https://github.com/tc39/test262)
* no slides presented

PFC: I just have a list of points to deliver verbally. I don’t have slides if that’s all right. Since the last plenary meeting we have a few updates from Test262. We have merged tests for iterator helpers and we deferred imports now. We have a number of maintenance updates based on feedback from limitations. We also merged a test suite into the staging folder from SpiderMonkey. This is the first time that we have done something like this but these are tests that previously lived only in the SpiderMonkey code base that they ran in their Firefox testing in addition to Test262 but they weren’t specifically to SpiderMonkey and could be used for under implementations. So we merged this whole batch of tests which are now available for everybody to run. Kind of similar to what V8 is doing with their two-way sync. So look for more work of that kind in the future. Then I have some less good news. Igalia work is less than previously because we were funded by a grant that is finished. Any help from proposal champions in reviewing tests for proposals is very much appreciated because as a whole, the maintainers group has a bit less time for Test262 than we had before. Then I have some exciting news: SFC who is in the room with us is working with students at the University of Bergen, Norway in the upcoming semester and some are working with Test262. If you have projects for Test262 get in touch with SFC or me or JHD. And we would love to hear your ideas. But that’s it for me. I will paste the summary into the notes.

SFC: Also MBH is the main contact with the university of Norway. He’s a great person to speak to if you have ideas for those contributions.

NRO: As champions, not just champions but the problem I have seen is the champions write the tests but they need someone to review them. If you’re familiar for any reason with the proposal 262 somewhere or some browser even if you’re not the champion, having more people reviewing would be a great help.

OMT: Just going to say that some of the SpiderMonkey tests are very heavy and can crash engines so we disabled them on test262.fyi.

PFC: I remember hearing that. That is something that we should look into whether it’s changing those tests so they’re not quite so resource-heavy or having a slow flag that test runners can skip.

### Summary

* We have tests for Iterator helpers and/or iterator sequencing
* We have tests for deferred imports
* Various maintenance and updates based on implementations
* We have merged a test suite into staging from SpiderMonkey. These are tests that previously lived in the SpiderMonkey codebase that were in addition to test262, but were not SpiderMonkey-specific and so could be useful for other implementations.
* Igalia's involvement is less than previously, because our grant finished
* SFC is working with students from U of Bergen in the upcoming semester and some will be working with test262. If you have ideas for student projects, get in touch with us or SFC or MBH.

## TG3 Report

Presenter: Chris de Almeida (CDA)

* [site](https://ecma-international.org/task-groups/tc39-tg3/)
* no slides presented

CDA: TG3 continues to meet weekly focused—we’ve only been talking about security impact of proposals and various stages. So, yeah, that’s it. Please join us if you are interested in security.

## TG4 Report

Presenter: Nicolo Ribaudo (NRO)

* [site](https://ecma-international.org/task-groups/tc39-tg4/)
* [slides](https://docs.google.com/presentation/d/1-suKLKywflKUDzTqVBxl-dEI2bJSfG5dl205BRtVCK4/)

NRO: I have slides. TG4 part as SHN said before we have the first edition of the spec published, thanks to everybody who helped us get this done. We have some plan submitted changes to the scope and most implemented from the bikeshed ecmarkup and push is one of the mange proposals we were working on needs to define how to parse some strings in the syntax within source map strings and it’s just easier and matches with the bikeshed. And then also the same with some of the existing parsing that we have. For example, parsing mapping is collaborating with the actual grammar. And because we link with concepts and makes it easier. But it makes it harder toiling to web concepts. Also even though this is not good motivation but means it’s not anymore to figure out how to get bikeshed to convert nicely to the Ecma PDF format.

NRO: And the proposal scopes. It’s going well. We keep having monthly meeting about it, the champions started writing spec text. If you’re interested in it, Simon (SZD?) and JRL from Google did analysis of trade-offs of scope information about size and accessibility. So you can go check it in the repository. And this is it. Everybody is always welcome to join our meetings. Let me know if you need help getting involved.

### Summary

* ECMA-426, 1st edition approved by the Ecma GA
* The TG is in the process of converting the specification from bikeshed to markup
* Work on the scopes proposal is proceeding well

## TG5 Report

Presenter: Mikhail Barash (MBH)

* [site](https://ecma-international.org/task-groups/tc39-tg5/)
* [slides](https://docs.google.com/presentation/d/1jLeg1TuaD1l535LF_gf4dJaF7sz-Z10Gm5cXbmonHnk/)

MBH: TG5 was chartered about a year ago. We have since then had nine meetings almost monthly. 10 to 15 attendees. And we also have TG5 workshops that are in person or hybrid meetings. And one of workshops will be this Friday. So examples of topics that we discussed are here on the slide. Friday workshop will be a presentation by a research group at the University of California San Diego about the messageformat study and identify more proposals that could benefit. But we try to look into other directions where academic results can be brought in for the work of the committee. And plans for 2025 in particular with establishing new collaboration, so IETF there is research and analysis of standard-setting processes research group and W3C is a process community group. We want to establish some collaboration with them and arrange a break-out room at TPAC 2025 to try to engage more universities in the web standard work. Related to this there will be a workshop on programming language standardization at the European Conference on Object-Oriented Programming this July. That’s it.

RPR: Excellent. Ashley.

ACE: Can you please link to the slides.

RPR: Nothing more on the queue. Please summarize that for the notes. Next up it’s back to Chris with updates from the code of conduct committee.

### Summary

TG5 has had regular monthly meetings since it was chartered one year ago. In addition, TG5 has arranged three Workshops co-located with hybrid meetings, and currently plans another Workshop in Spain this May. TG5 intends to establish contact with IETF [Research and Analysis of Standard-Setting Processes Research Group](https://datatracker.ietf.org/rg/rasprg/about/) and [W3C Process Community Group](https://www.w3.org/community/w3process/).

## Updates from the CoC Committee

Presenter: Chris de Almeida (CDA)

* [site](https://tc39.es/code-of-conduct/#code-of-conduct-committee)
* no slides

CDA: Pretty quiet on the code of conduct front. We don’t have any new reports or anything we’ve had to deal with. I think we got like a weird AI like generated report that didn’t really make any sense and so we just ignored it. But other than that, that’s it. As always, anyone interested in joining the code of conduct committee can reach out to one of us. Thank you.

RPR: Thank you for protecting us from the bots. Next up, we have GCL with don’t call well known symbol methods for RegExp on primitive values.

## Don't call well-known Symbol methods for RegExp on primitive values

Presenter: Gus Caplan (GCL)

* [spec pr](https://github.com/tc39/ecma262/pull/3009)
* no slides

GCL: This is a pretty small change. Basically for some background here, Node.js and Deno write a significant amount of their implementation in JavaScript. So one of the things they do is attempt to harden the JavaScript that they use so that user code cannot break their implementation as it runs. So this specific needs consensus change has to do with—basically there are five or six methods on `String.prototype` (match, matchAll, replace, some of these) that accepts a parameter which when—well, we can look at the text for this. Basically it accepts this RegExp parameter and then if it is not undefined or null, it will attempt to look up `Symbol.match` on it and call that. Otherwise, it will create a regular expression and invoke the normal matching function on that. And so there are match, replace, replaceAll, search, split. All of these functions do that with their respective symbols.

GCL: Basically what this change is proposing is that when you call these methods with the argument with any primitive but in practice with a string, we should not read the symbol off of that, because it can interfere with the internals.

GCL: So that’s the background there. We have a little bit—this is from a little bit ago. But we did here that core-js never implemented. They implemented it the way it was in the pull request and nobody ever complained. That seems positive. We can go here.

JHD: I think this is great. There’s no reason any of us could ever want a primitive to be regular-expression-ish. And vast majority of current and past TC39 members seem to hate this entire protocol anyway. So less usage of it sounds good. If I have any polyfills that need to be updated for this, I’m enthusiastic to do so.

GCL: All right. Seems like nobody else has much to say. I guess I will ask—oh, plus 1 with no comments from OMT says it makes the implementation easier. Did you want to say anymore more?

OMT: No.

RPR: And Dan Minor, did you want to speak?

DLM: Sure. We talked about this. It seems fine. I guess there’s a small, small chance of some compat problem but doesn’t seem likely.

SYG: Also seems good. Any thoughts on in the small but nonzero chance it is not compatible to do next?

GCL: If it’s not compatible, we would just not do it, I guess.?

JHD: Alternatively if not compatible because some website is defending on one specific kind of primitive that it’s making RegExp for some crazy reason. If that’s the case, we could also adapt this to allow that to one kind of primitive to still be checked. But not the others.

GCL: Maybe. I think that would sort of defeat the purpose of the change in the first place.

JHD: Fair enough.

GCL: But, yeah, I don’t expect this to be web incompatible just due to how niche it is.

KG: I didn’t want to mess that up there. I’m in favor of this. I’m pretty sure when we did the disposable protocol, we did the same thing. We said that the disposed symbol is not looked up on primitives, only on opt-outs. And I just want to call out that in the rare occasion that we are going to be introducing new protocols, I think we should follow this sort of precedent and just sort of always omit primitives from protocols in the future from symbol-based protocols.

RPR: Shall we call by consensus?

GCL: Yes, do we have consensus?

RPR: There are no objections. Then congratulations, you have consensus.

GCL: Thank you everybody.

SYG: Sorry to interject, I didn’t have time to type this into the queue. So I want to double check since Test262 sometimes fall through the cracks for normative PRs, I want to make double sure that GCL or whoever else is signed up to write these tests.

GCL: Yeah, we will take care of that.

SYG: Great, thanks.

### Speaker's Summary of Key Points

* Node.js/Deno write a large portion of their implementation in JavaScript, and so aim to ensure this implementation is hardened against user code.
* `String#{match,matchAll,replace,replaceAll,search,split}` will no longer look up the protocol symbol when called with primitives, rather than just undefined/null.
* Expected to be web compatible due to core-js never shipping the spec’d behavior

### Conclusion

* Consensus
* Deno will write tests

## Float16Array for stage 4

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-float16array)
* [spec PR](https://github.com/tc39/ecma262/pull/3532)
* no slides

KG: `Float16Array` and `Math.f16round` and the data methods for reading and setting `Float16` values. This proposal has been at Stage 3 for a while. Implementations were, of course, several orders of magnitude more difficult than the specification. Specification is very simple and basically just copies the existing float 32 array spec and says binary 16 instead of binary 32 float everywhere. The implementations have to do what a lot of the work for each platform at least when they are trying to optimize this. But they all done that to the extent that they are comfortable shipping at this point. So JavaScriptCore that is Safari and SpiderMonkey that is to say Firefox are both shipping already. Chrome I believe made the decision to start shipping in March, I believe, is when the version—this will be on by default. There is an open pull request for specification. There are of course tests which were prerequisite for Stage 3.

KG: This is also starting to be adopted by other web specs which was the intention. The canvas people are starting to work on having higher colour-depth canvasses that will be backed by or at least make use of Float16Arrays and I know also the WebNN spec is interested and possibly making use of Float16Array and neural nets make more sense than float16 than float32. I believe it should meet all of the criteria for Stage 4.

KG: Especially because this is a proposal that requires more from implementations than most proposals. This isn’t just syntax, you are getting in there and writing assembly. I want to make sure there is no concern of implementation before going forward. But I believe it’s ready for Stage 4.

DLM: Thank you. SpiderMonkey team supports this for Stage 4.

SYG: Sounds good to me. I do confirm that the plan is to turn it on by default in Chrome 135 that should—let me bring up the calendar here that should hit stable first of April.

RPR: There’s a comment. LGH Implemented this in one of the smaller engines and plus one for Stage 4.

KG: I would like to formally call for consensus. We will had plus ones and give everyone an opportunity to object.

RPR: Congratulations. You have Stage 4.

### Speaker's Summary of Key Points

* Spec is simple, implementations hard
* Implemented and shipping or almost shipping in all three major browsers
* Ongoing web API usages in progress in Canvas and WebNN

### Conclusion

Stage 4

## Redeclarable global eval vars for stage 4

Presenter: Shu-yu Guo (SYG)

* [proposal](https://github.com/tc39/proposal-redeclarable-global-eval-vars)
* [spec PR](https://github.com/tc39/ecma262/pull/3226)
* no slides

SYG: Great. Thanks. Before I go into it, do people care to hear a recap of what this is about?

RPR: Won’t hurt. Just quick, brief.

SYG: Very well. So this was originally needs consensus PR to fix the corner case in dealing with vars at the global scope. The global scope is to say the least very strange because among other things it is an open scope meaning that if you have a script tag and you introduce something and then you have another script tag and you mutate the global scope, multiple script tags don’t get their own global scopes. They get the same global scopes. It’s always open. It’s never closed unlike the function scope where, you know, the scope doesn’t extend beyond these two braces. So without getting too much into the weeds here, the upshot is basically there is a—in the current spec, there is a special mechanism on the global scope with the slot called `[[VarNames]]` to specifically track global bindings via the `var` keyword. This is a slight pain in the ass for implementations and basically boiled down to the extra bit on the property descriptor for everything on the global object, only on the global object.

SYG: I proposed we get rid of the special case and basically treat `var`s as we treat other non-configurable global properties. If you don’t know the weird corner of JS, `var`s on the global area are not just a binding that you must refer to with the bare identifier. They can show up on the global as a property. We have a special case for those properties on the global object that were introduced via `[[VarNames]]`. If we get rid of the specific case, it eases the implementation burden, it gets rid of a weird corner in my opinion but it is normative in that it changes behavior.

SYG: And I think the main consequence is basically this: This change allows you to write this snippet basically if you have a `var` X and introduce via eval direct eval on the global text this is a global property. Currently in the spec because var names are specially tracked on the global object, if you try to have the same name lexical binding also on the global scope this will currently be an error. That is what this `[[VarNames]]` slot was for. I tried to argue this is really not a use case anybody cares about to error in that way and to get some simplicity we should just allow the shadowing basically. And so this is currently disallowed. But it will become allowed. Nevertheless, don’t do this. I don’t know why you would do this. So just don’t do it.

SYG: So that is the actual change. And the status is that we have all shipped it basically. This was the existing behavior in Chrome. Nobody really complained. Safari has implemented this. This was brought to my attention first from a Test262 test I think by Safari engineers, thank you very much for that. Firefox has shipped as well or maybe not yet shipped but—I guessed shipped by this point February 4th. And this is not checked off, but they do have editorial reviews for the actual PR. So with that, I’ll go to the queue before asking for Stage 4.

DLM: We support this as well.

RPR: Anyone else on the queue? All messages of support? Or objections? I think that’s about it. SYG You can ask for consensus.

SYG: Yes. Could I please get Stage 4?

RPR: KM is plus one. There are no objections, so congratulations you have Stage 4.

SYG: All right, thank you.

### Speaker's Summary of Key Points

* Recapped the existing spec behavior (global vars conflict with global lexical bindings) and the proposed change (global lexical bindings allowed to shadow)
* All 3 browser engines have shipped the proposed behavior

### Conclusion

* Stage 4

## RegExp Escaping for stage 4

Presenter: Jordan Harband (JHD)

* [proposal](https://github.com/tc39/proposal-regex-escaping)
* [spec PR](https://github.com/tc39/ecma262/pull/3382)
* no slides

JHD: `RegExp.escape`. Here is the spec. Somewhere in here is approved spec PR and we have a bunch of implementations. Firefox has shipped it and Safari shipped it and two polyfills. I believe implemented in Chrome but not released it. SYG can probably confirm that.

SYG: Do you want me to confirm right now?

JHD: Whenever. And then, yeah, it’s met all the various requirements for Stage 4. So I guess SYG wanted to add your context.

SYG: I think this one, my bad, kind of fell through the cracks. This is implemented and staged now. And should be ready to go in 135 or 136. Either April 1st or April 1st plus four weeks.

JHD: So although certainly preferred it to have landed in Chrome first, I’m not worried about web compatibility risks here. Given there’s two of the three browsers shipped it, I would like to ask for Stage 4.

RPR: You have support from DLM. No objections. Plus one from DE and no objections. Congratulations, you have Stage 4.

JHD: Thank you.

### Speaker's Summary of Key Points

2 browsers, 2 polyfills, 3rd browser implemented and will ship in April All criteria met

### Conclusion

* stage 4

## import defer for Stage 3

Presenter: Nicolo Ribaudo (NRO)

* [proposal](https://github.com/tc39/proposal-defer-import-eval/)
* [slides](https://docs.google.com/presentation/d/1LjsJhdTIP3wgo1odtVa-qbfyGU5M1W9YMm0AtKnJJKk/)

NRO: There have been no changes since last meeting and normative changes. A few tweaks following the editorial reviews. We have test coverage and all Test262 tests have been merged. We have thanks to a colleague of mine WebKit implementation passing the tests, so at least we know that the tests are not wrong. There are failures if you look at—that’s due to WebKit problems and not to the test. They’re known bugs and they’re in the process of being fixed.

NRO: We have implementations in tools: Babel and prettier already supported and work in progress TypeScript implementation. If anyone wants to help, an Acorn plugin would be welcome. It unlocks syntax support for webpack and rollup and a bunch of others. That’s it. Just before consensus, I want to ask the editors if we have their blessing. We talked about how to go and got official approval of GitHub from part of the group but not from all of it.

KG: Yeah.

NRO: Thank you. Then do we have consensus for Stage 3?

DLM: We support this. We’re quite interested in being able to use this in our internal code, so thank you.

NRO: Any objections?

DE: CDA is plus one on the queue.

CDA: I don’t need to speak but support Stage 3.

NRO: Thank you Chris. I think we have consensus. The plan now—the next steps is to—I will open the request in the 262 repository and just waiting for the import data request first and that’s it. Thank you everybody.

CDA: Just noting for the record that DE also supports stage 3.

### Speaker's Summary of Key Points

* No normative changes since last meeting, only some editorial tweaks
* All tests262 tests have been merged, see https://github.com/tc39/test262/issues/4215
* Wip WebKit implementation to validate the tests
* Tools implementation in progress, would appreciate help with an acorn plugin for the proposal

### Conclusion

* Consensus for Stage 3

## Explicit Resource Needs Consensus PR

Presenter: Ron Buckton (RBN)

* [PR](https://github.com/rbuckton/ecma262/pull/13)
* [proposal](https://github.com/tc39/proposal-explicit-resource-management)
* no slides

RBN: So the only thing that I wanted to discuss today here is that there was an issue that was posted for explicit resource management that the spec text was currently missing the definitions for the constructor prop on A sync disposable stack and there is PR for the Ecma script specification that defines those as intended to be defined. I expect this is proforma of something not intentionally excluded. So I’d just like to ask for consensus for this change.

RPR: Just pulling up the queue. So SYG.

SYG: I support this. I think it’s clearly a spec bug.

RPR: Thank you. Kevin is also plus one with end of message. Michael is also plus one.

RBN: I’ll wait and see if there’s any objections.

RBN: Thank you very much.

### Speaker's Summary of Key Points

* PR addresses missing definitions for the `constructor` property on `DisposableStack.prototype` and `AsyncDisposableStack.prototype`

### Conclusion

* Consensus reached

## Temporal normative PR and status update

Presenter: Philip Chimento (PFC)

* [proposal](https://github.com/tc39/proposal-temporal)
* [slides](http://ptomato.name/talks/tc39-2025-02/#8)
* [PR](https://github.com/tc39/proposal-temporal/pull/3054)

PFC: My name is Philip. I work for Igalia and presenting this work in partnership with Bloomberg. I’m sure that those of you who are returning have seen many Temporal presentations. This one should be quick. Progress update is that we are continuing to get closer and closer to the required two full implementations, close to done, and we've been cleaning up the issue tracker. In the meantime several requests for editorial changes have come in from implementations which we have incorporated. In time we’ll continue to analyze code coverage metrics to make sure that we have complete Test262 coverage for gaps that we might have missed and to answer any questions raised. There’s a lot of questions coming in now because the Mozilla Hacks blog did an article with Temporal being switched on by default in Firefox Nightly. There’s a surge in interest in Temporal and we are getting a lot of questions from people who would like to use the proposal. This is good. It’s fun to see all the questions coming in. Please do go ahead with your implementations and ship them unflagged when they’re ready. If something is preventing you from doing that, please let us know as soon as possible.

PFC: The proposal champions meeting is biweekly on Thursdays at 8:00 pacific time and it is open if you want to join, please join. If you want to talk to us but can’t make it at that time, we can find another time to meet.

PFC: So I mentioned it’s shipped in Firefox Nightly. This is quite exciting for us. It means that people are using it in the wild. There is now full documentation for the proposal on MDN, this is a long time coming. I think we started it [the documentation] three or four years ago. But it is now there. There’s a compatibility table that I hope will get updated as implementations near completeness.

PFC: I do one of these graphs every time. Apparently people like them. So I do want to be clear that the percentage of test conformance does not mean percent done, just to say that upfront. But SpiderMonkey is close to 100% conformance. A handful of tests are not passing yet. But less than half a percent. Ladybird, previously known as the SerenityOS engine (LibJS) is quite an improvement since last time and at 97%. And GraalJS is up there as well. And V8 and Boa and JavaScriptCore are lagging a bit. I got word from one of the maintainers of Boa that they actually increased a couple of percentage points since I made this graph. But I didn’t have time to go through and retest everything. So this is as of a couple of weeks ago. And JavaScriptCore I’m happy to say that one of my coworkers from Igalia, Tim Chevalier, is looking to land additional patches for JavaScriptCore to get the percentage up. Keep an eye on this space. And hopefully next time, “number go up”.

PFC: We have one bug fix to present this time that requires consensus. So this change was requested by André (ABL) who is working on the Firefox implementation. The ISO 8601 calendar is a standardized machine calendar and remains unchanged arbitrarily far into the future. We don’t support dates that are outside the range of what JavaScript Date supports. However, you can create a `Temporal.PlainMonthDay` from a string that is outside of that range: the year can just be ignored. PlainMonthDay objects are—in the first line of this code example here, you can see, you get a PlainMonthDay of January 1st even though the year is out of range. However, for human calendars that are not ISO 8601, this places a burden on the implementation that is unreasonable because you have to be able to find out what the date is in the human calendar for the date in the ISO calendar. For example, for the Chinese calendar which has lunar years, a function call like this would require the implementation to calculate a million lunar years into the future. That is well outside the date range and the answer would be nonsensical anyway because lunar calculations are not that exact that far in the future.

PFC: We propose to continue allowing this for the machine-defined ISO 8601 calendar, but throw the RangeError in the case of any other human calendar. So I would like to ask for consensus for that normative change to the proposal. And I’ll also handle any questions at this time.

SYG: I wanted to confirm on the percentage of test passing slide Boa is the same as temporal-rs?

PFC: I think I would say that temporal-rs is the library that Boa uses.

SYG: What I mean if you add another Y axis for temporal-rs is that the same number as boa?

PFC: I would say that doesn’t apply. Temporal-rs is not JavaScript so can’t run Test262 tests.

SYG: I think you know what I’m getting at. Sounds like temporal-rs is the same as Boa.

PFC: Yes. I don’t know enough about the connection between the two to say if V8 were to incorporate temporal-rs I don’t know if the percentages would go in lock step. I don’t know enough about the connection between the two.

LCA: I think there’s a significant amount of code that sits in-between temporal-rs and the engine that does JavaScript values into web objects. I think all of the tests related to that would not be captured by this comparison.

SYG: It makes sense.

LCA: It underlying—like, operations may be correct but there’s still a lot of variance in those transforms.

SYG: Got it, thanks.

DLM: Sorry, just wanted to express support for the normative PR and not surprising since we requested it. Thank you.

MLS: So I like to throw a RangeError, what is the algorithm for completing that? Do you take the human readable and see that you have something in the data that can resolve to or how is it computed?

PFC: I will just put it up on the screen. So the change is that we treat the ISO 8601 calendar separately and if you get to this point, it’s a human calendar. And then we check the date that you gave in the string that is in the ISO calendar. And if that’s within the limits that we accept for any other Temporal object like plain date, it’s fine. If it’s outside of those limits, we throw a RangeError. It’s 10^8 days before or after the 1970 epoch.

SFC: I was just wondering if you could reiterate why the normative PR special cases the ISO 8601 calendar is doing the behavior across the board including in-line one.

PFC: Because the ISO calendar is fully specified. It will change maybe the case that, for example, the Gregorian calendar adds an extra day to account for planetary rotation speed a thousand years in the future, I don’t know.

SFC: I agree that the first can be implemented. Wondering why it seems that it is consistent but it’s not wrong. I think it is the right call to do it consistently for all the non-ISO 8601 calendars but this is just a case where it’s not clear to me why there’s a difference in behavior. I mean, I agree there can be a difference in behavior. But I’m not sure why that was so. Was this a proposal to like make the changes as minimal as possible?

PFC: I don’t remember off the top of my head why we decided to make that exception. I assume it was making the changes as minimal as possible.

DE: I’m very happy to see multiple implementations and this proposal being complete in its definition, modulo a bunch of very minor bugs that are being discovered. I’m wondering is Firefox planning on shipping this beyond nightly soon? This is a question for Daniel.

DLM: Yeah, sure. So just to clarify, so the current stage is that it’s built in nightly but disabled behind a pref. A couple days ago I landed the change to flip that and now it’s enabled on nightly. If that goes well, we hope to ship it. Hopefully sooner than that, but it might be a few months.

DE: That’s great, thanks.

CDA: That’s it for the queue.

PFC: Sounds like there are no objections to consensus on the change and no more questions. Thank you.

RPR: Thank you Phillip. Do you want to do a summary of what was discussed?

PFC: I have a proposed summary up here that I will paste into the notes and add any points that were discussed.

RPR: Thank you. You’re very well prepared to make sure we have excellent notes. All right. Let’s move to your next topic. Status update on ShadowRealm.

### Speaker's summary of key points

With Firefox Nightly shipping the proposal and MDN adding documentation for it, there is a surge of interest in Temporal.

Implementations should complete work on the proposal and ship it, and let the champions know ASAP if anything is blocking or complicating that. You are welcome to join the champions meetings.

A normative change was adopted, to avoid requiring questionable calculations when creating PlainMonthDays in non-ISO calendars outside the supported PlainDate range (PR [#3054](https://github.com/tc39/proposal-temporal/pull/3054)).

## ShadowRealm Status Update

Presenter: Philip Chimento (PFC)

* [proposal](https://github.com/tc39/proposal-shadowrealm)
* [slides](http://ptomato.name/talks/tc39-2025-02/#1)

PFC: This work was in partnership with Salesforce. Expecting that the meeting would be full, I kept the recap of what is ShadowRealm very short. So if you want to know more or know more about the use cases, please come talk to me later or maybe if there’s time on Thursday and folks would like it, I could prepare a short presentation on that. If you’re interested, ask me. So the short recap.

PFC: ShadowRealm is a mechanism by which you can execute JavaScript code within the context of a new global object or new set of built-ins. The goal is integrity. That means complete control over the execution environment and making sure that nothing else can overwrite your global properties or define things that you don’t expect. There’s a whole taxonomy of security, and so that’s why I don’t like to say the goal is security, because it can mean a number of different things. So that’s why the goal is integrity. This is what ChatGPT thinks the inside of the ShadowRealm looks like. Mysterious and intimidating figures embodying the realm's eerie essence.

PFC: I talked about ShadowRealm previously in the December meeting. The big question at the time was which Web APIs are present inside ShadowRealm? I’m happy to say the W3C TAG adopted [a new design principle](https://www.w3.org/TR/design-principles/#expose-everywhere) that new API should be exposed everywhere. This includes other environments, not just ShadowRealm but environments like AudioWorklets and ServiceWorkers and such things. Those were previously all enumerated manually with an annotation in WebIDL, and now you can say this API is so fundamental and should be exposed everywhere there’s JavaScript. These are APIs like TextEncoder that maybe could have been part of the JavaScript standard library but aren’t. If you are very curious, I have a spreadsheet with the full list of over 1300 global properties on various global scopes which ones are exposed everywhere and which ones are not exposed everywhere and why. You can follow the link in the slides.

PFC: Some of the things I said I would follow up from last meeting, KG asked about `crypto.subtle`. Initially I had a pull request to have `crypto.subtle` exposed everywhere and looked like it would succeed. And I found out from the crypto maintainers the way it is specified depends on an event loop. And one of the design principles is things that depend on the event loop can’t be exposed everywhere because not all environments have an event loop. I think we’ll leave it out for now. Hopefully they will be able to redefine it, in case you’re hoping, to not depend on the event loop and at that point could be exposed everywhere. I had a whole list of web platform tests for the web APIs present inside of ShadowRealm. Some of those still need reviews. If you are in implementation and interested in looking at those, I would much appreciate that.

PFC: What we’re working on now, so last time in December we had a discussion about getting buy-in from browser’s DOM teams, and how we might be ready to go to Stage 3 in the proposal in TC39, but it shouldn’t happen without the buy-in. So we had some questions about use cases from that area. So we would like to shore up how convincing the use cases are. You know, we want to show that as TC39, we are excited about this and glad that it has HTML integration and that would be useful for end users of the web. So if you have a use case for ShadowRealm that you don’t mind sharing, please come talk to me in the hallway sometime during this meeting, I would be really interested to hear it. And if you’re okay with it, I will try to write something up that kind of expresses how this benefits your end users. So please come talk to me. That’s it for now. Any questions?

RPR: There’s nothing on the queue.

KG: Sorry. For `crypto.subtle`, does the fact it is not included on the basis of using the event loop mean no async APIs inside of ShadowRealms?

PFC: It doesn’t mean that. Most async APIs are defined in a way that they don’t require the event loop. We don’t have the event loop in ECMA262 but `Promise.resolve` still works.

KG: `Promise.resolve` is only sort of an async API. Most of the stuff is punted to the host and most host and queue or whatever and tells the host to get back to it.

PFC: I would say this is a problem that most async APIs don’t have, but they defined it in this way in the web crypto spec and apparently it is observable, and they could change that before they say it doesn’t depend on the event loop.

KG: I would be surprised to learn it is observable. But async tasks just get completed in various points in the future. And theoretically they can take any length of time. It would be nice to see that it observable depends on the event loop in a way that is succinct from any other API and I would be concerned we can never have any async APIs. Maybe that would be okay but it’s a little worrying. If it is just the details of how the crypto spec is written, yeah, okay we can make try to fix up the crypto spec although it is largely unmaintained. I don’t know if that is going to happen. It had been getting more. Maybe we’ll get there.

PFC: I don’t think other async APIs have the problem. I think it’s the detail the way that the crypto spec is written.

KG: Okay.

DE: I’m trying to understand is there any particular choice of that including or excluding APIs that you disagree with? Is it just about crypto or –

KG: I think crypto is the main one that I would like to see included in the sense of it is generically useful. If there was—I appreciate the reasoning for not doing so. We talked about a couple of others at the last meeting and most of the things—like, I can imagine wanting to use the Web Codecs, for example, that in some case are purely computational and makes sense that you want to say no. This will probably involve hardware that we don’t necessarily want to invoke, and in the ShadowRealm that makes sense. I would generally personally be very permissive what purely computational means and could in principle be implemented in JavaScript or WebAssembly for example, I would put it here. And that would include all of the crypto APIs and all of the media codecs and everything. I understand why we’re not doing those. I don’t want to continue pushing on this. My hope is that we can get crypto specifically included in the future, because it is extremely generally useful.

KM: Some feedback from people and talking to people about this and I don’t have time to write anything up formally but give the feedback here. Yeah, I think the use cases did seem like it was a thing that we were push back from talking to people on. It seemed like from just talking with—I think I mostly just talked with the bun folks but didn’t seem they weren’t super big on it. They weren’t super in need of it or use it. And seemed like the question I always got is sort of like why can’t you do this with the iframe and have some part of like a tool that just automatically collects all the IDLs and scripts out all the names that you don’t want from the Iframe. And then also seemed like it was another feedback I got from people is it was kind of like—it was a lot of ongoing work throughout the web platform like in terms of everybody who is writing any web specs needs to consider this and so that seemed like it was kind of pretty cross-cutting and ongoing spec/maintenance work that really want to see the use cases for that before we want to commit to that basically.

PFC: Okay. The use cases I can hope to have a larger presentation on that soon, like I said. The first question about why can’t you use an iframe? So if you use a sandboxed iframe only asynchronous communication is possible. So you cannot emulate the convenient synchronous communication between main realm and ShadowRealm in that way. If you use the non-sandboxed iframe, you can’t go in and delete any property you don’t want because `window.top` is unforgeable and you will always have free communication with the main realm.

?: Thanks for the feedback on the last one there.

JSL: Just pointing out on some of the async operations and web crypto right now, there’s streaming support being added of async iterators are operators like `digest.node` that might make it difficult to eliminate event loop. We’ll see how that evolves. Something to be aware of.

PFC: Thanks.

LCA: I have a response to that. I don’t see it all how this is different from like ReadableStream, for example, like the fact that `ReadableStream` is exposed but `crypto.subtle` is not.

JSL: It should be fine. But something to be aware of.

RPR: We’re at the end of the queue.

PFC: That’s it.

DE: I just want to underscore what PFC and KM already said, use cases are very important. Implementations have already been made. The only reason they’re not shipping is for lack of use cases. For a long time, the lack of web implementation was the blocker. And now it’s purely lack of use cases. So anyone in committee who wants to use ShadowRealms, please please communicate the use cases.

SYG: I wouldn’t say implementations are already done for the HTML integration part. It is true that I think implementations are already done for the pure JS part. But for Chrome, it’s not the case that all the APIs that we want in this—suppose the list that PFC has is the final list. I don’t think it’s true that that work is done.

DE: Apologies, thanks for the correction. The thing that’s blocking the implementation work there is the use cases, right? Previously there was –

SYG: Exactly right.

DE: Previously was the HTML design work that Phillip has done a good job completing.

SYG: I think as part of asking for that work, the feedback has been—I want to echo what KM was saying. Use cases are important. It has shown to be much more cross-cutting than I thought in terms of the maintenance cost, so, yeah, the use cases kind of weighed against the maintenance cost is the deciding factor here.

DE: In particular, it’s the maintenance cost on supporting the web APIs on the ShadowRealm global.

SYG: It’s the cognitive burden that every API current and future has to consider ShadowRealm as a new kind of global. Is that what you meant?

DE: Sure, maybe.

MAH: I’m confused a little bit by the request for use cases, because my understanding is the champions and others have expressed use cases building libraries for executing coding in virtual environment that in other—those use cases have been expressed. How is that not sufficient?

PFC: I mentioned before particularly WHATWG environment likes to see use cases developed how does it benefit the end user of the web? I think you’re absolutely right that use cases such as running code in the virtualized environment have been expressed. I think we need to kind of step up how we communicate that to these other groups and express it more in terms of what benefit is there for the end user?

MAH: The benefit for the end user, which end user? The users using the libraries and users using actually those libraries or developers using directly the APIs? Do we ask now that an API being added needs to be targeted towards the mass audience of developers, or is it okay to have some APIs that are only useful for few developers that will build the libraries that will be ultimately used by other developers?

PFC: I mean, I’m interpreting it to mean, what can you build for end users of apps that would use ShadowRealm internally that you couldn’t build without ShadowRealm? I think that’s a reasonable question to ask and I'll try to answer it as well as possible.

RPR: I want to point out we’re one to two minutes for lunch. We should have a hard stop. Other people in the queue to get to?

KM: I think the key thing here in some ways for us is if it was a one off thing that we just did this once, it would be probably an easier pill to swallow. The concerns that I got it’s like everyone designing any spec going forward needs to consider this. So it’s like just an extra little bit for everything going forward for developers that don’t like—maybe somewhat new to the web platform writing specs for whatever. They’re an expert in some other area and need to understand another bit of intricacies of the web platform when exposing their APIs. That was kind of the feedback that I got, not quite as much about the current ones as it is about future work ongoing forever.

RPR: Thanks. I think we should—there is spare capacity for a following item that you wish to continue this on Thursday. Have a think about that. For the note takers on that. Can we capture the queue. Phillip do you want to say a summary of where we got to?

|                                                             Speaker Queue                                                              |
|:--------------------------------------------------------------------------------------------------------------------------------------:|
|                           Users = web browser users; why ShadowRealms is a bit special Shu-yu Guo (@google)                            |
| Consider topic (on Thursday?) going into details on why the Salesforce/Agoric use cases aren't persuasive Daniel Ehrenberg (Bloomberg) |

PFC: Sure. I guess presented this status update on ShadowRealm proposal where we are primarily focused on describing use cases in terms of end users of the web and we would be happy to hear your use cases if you have them and we’ll come back in a future meeting with another update.

RPR: Thank you Phillip. All right. That brings us to the break, to lunch. I will note because we pulled certain things forward, that means the afternoon schedule has become rearranged. So please do check that out. There are items there. We will resume at 1:00 p.m. and lunch is happening. We have sandwiches over there. Check if anything more? I think we’re good. And then also likewise if anyone has any feedback or physical temperature feedback, please let me or Michael know. Please enjoy your lunch.

### Speaker's summary of key points

We presented a status update on the ShadowRealm proposal. We are primarily focused on describing use cases in terms of end users of the web. We'd be happy to hear your use cases if you have them and we’ll come back in a future meeting with another update.

We discussed the designation of `crypto.subtle` as not exposed everywhere, and whether it could be exposed everywhere in the future, and what it means for use cases to be described in terms of end users.

## Decorators implementation updates

Presenter: Kristen Maevyn Hewell Garrett (KHG)

* [proposal](https://github.com/tc39/proposal-decorators)
* [slides](https://slides.com/pzuraq/decorators-for-stage-3-2022-03-977778)

KHG: So, yeah, quick update on decorators implementation. Everybody’s favorite proposal back again. Okay, before we get started, well, basically just wanted to give a quick overview of, like, a refresh of what decorators are about and talk about the status of the implementation and some of the things that have come up.

KHG: So refresher, decorators are functions that have forming capabilities when applied to classes or class laments, and that is replacement, so being able to replace the value that is being decorated with one that is similar, so the same general shape, replace a method with a method, a class with a class, an accessor with an accessor.

KHG: So the second capability is initialization. That’s being able to initialize the value with per instance with a different potential value, so with methods, you can do things like bind methods with, you know, accessors and class fields or auto accessors in class fields. You can assign the to fault value or intercept the default value and so on. And then next is metadata, so being able to associate some extra information, for instance, type information or serialization information, with the value. And lastly, access. Access is being able to do things like get and set the value out of bounds, so you can do that with private values, with public values, and that can be a way to, for instance, add, like, a serialization layer that can do things like access private values or, you know, test helper methods and what not or, like friend methods that can do that in some way.

KHG: And some common use cases for these are things like validation libraries and dynamic type systems, being able to, you know, annotate things and say this is a string or this is a number, and having that actually work at run time, not just at compile time. ORMs declarative data structures Ike serializers, moods and what not, reactivity libraries like mob ex, like I mentioned before, method binding, that’s a very common one. Debugging tools, like things like being able to add a deprecated decorate that are will log when a value is used and it’s meant to be deprecated or, you know, being able to log whatever function is called or send an event or what not. And dependency injection, so if you need to annotate a class to say here is the things I need.

KHG: And then real quick, because this comes up a lot, it’s why are we starting with classes? Because function decorators are also something. They’re not part of this proposal, but they’re something people have wanted a lot and arguably would be simpler to implement. It would be a smaller spec and all that. And why do we need these at all?

KHG: So first often, when it comes to function decorators, today it is possible to use a decorator pattern without using syntax for functions. You can create a function that receives a function and returns a decorated function, and it’s very declarative, it’s easy to understand, it’s performance overall. There’s really not much downside with the exception of the name here, memoizedFunc, would not get applied to this function. If you’re trying to debug it, it gets a little annoying. But that’s the only real issue with function decorators at the moment.

KHG: When it comes to classes, we don’t really have that same capability. So, for instance, if you wanted to create a memoized method, this would create a new method, an enclosure per instance of the class, and that might not be what you want. You might want to decorate the prototype. To decorate the prototype, you would have to do that either using a static block or imperatively after the class definition, and this is where it can get really complicated. I think one of the main benefit of classes over prototypes was the fact they’re a lot more predictable. I used to see code before class syntax that would do things like conditionally add a method to a prototype or something. And sometimes maybe that makes some sense, like, if you want to debug only method or a debug version of a method, but in general, it was very confusing and hard to read. So decorators really simplify this whole thing and make it a lot easier overall and more idiomatic and what not.

KHG: So, yeah, community interest also remains really high. It is the second most anticipated feature in the 2024 State of JS survey. Anecdotally we received tons of feedback that it’s looking really good and people are really enjoying and it using it well. It’s one of the most widely used syntax additions overall. And, yeah, I think it’s very much anticipated.

KHG: And then implementation status. So we have shipped transforms in TypeScript and Babel, and those have been widely adopted by the community, with some exceptions for people who are waiting on metadata or on parameter decorators, because that was something that the older legacy TypeScript decorators had as well. Tests have been written for test262. I have not been able to merge them, get them merged, because I have been very, very busy with job things. So -- but the tests themselves are comprehensive. They cover every edge cases and corner cases, and that we have found so far at least. And I do think all that they really need is a rebase and they’re good to go. And then Edge is currently nearing completion with the implementation in V8, SpiderMonkey is around 75% complete, and we have another -- a number of proposals that are awaiting completion to move forward. They’re kind of in a holding pattern, parameter decorators, function decorate and grouped accessors being some of them.

KHG: And, yeah, what we have heard so far as we’re kind of approaching completion is several implementers have been expressing some hesitation to being the first to ship decorators, and so it’s kind of a -- a little bit of a standstill at the moment, and we wanted to take some time to discuss those concerns at plenary and see, yeah, just dig in a little bit. So that’s pretty much where things are at. Yeah.

NRO: So there are multiple implementations of decorators, like, as KHG mentioned, there’s one in Babel and one, like, Edge team (?). The problem is we don’t really have tests, at least we’re not running tests because they’re not merged yet. So if, like, I’m going to see whether or not we’re going to try to do it for Babel, and please also native implementations do it. Do run the tests in the request. I know for maintainers it’s huge to review PRs for the maintainers, so, please, we can catch potential problems in the tests by running them and see what’s failing in our implementations.

USA: Next on the queue we have DE. Oh, sorry, there’s a reply by PFC.

PFC: As far as the test262 PR goes, I think the only thing blocking it right now from being reviewed is some of the generated files are missing their corresponding source files. If you have time to add those, then we can -- like, what we’ve been doing with large PRs is splitting them up, so we can try to do that with this, and hopefully merge them into the main tree a bit faster.

DE: It was mentioned in the presentation that there’s, I guess, a complete implementation in V8 out for review, and partial implementation in SpiderMonkey behind a flag. Can we discuss those more? Like, could we hear from the Edge team what the -- what your implementation status is, where that is.

LFP: There is implementation that we submitted to Chromium, and it’s currently waiting for review.

SKI: Yes. We have been implementing it as Luis said, and while we generally are in sync with upstream v8 team about features we’re implementing, we are currently waiting for review of this work. We want to resolve issues that Kristen raised in this plenary, like, in an open discussion in TC39 to understand the concerns of all the other engines and other stakeholders for the decorators proposal.

DE: Okay, great do, we have anybody here from these engines who could speak to those concerns? Shu, are you on the call, DLM?

SYG: I’m here. What would you like to -- sorry, what was the question?

DE: So are you considering reviewing the patches that the Edge folks made for decorators? If not, is there a reason why not?

SYG: It’s currently not prioritized. We also have reluctance to be the first movers to ship decorators here.

DE: Why is it not prioritized?

SYG: Because we would like to not be the first to ship it.

DE: Okay. DLM, do you have any thoughts on this?

DLM: Sure, I can provide a bit of an update. So I was working on decorators up until about a year and a half ago or so. At that time I stopped my work because I had higher priority things to work on and, yeah, it just hasn’t become a priority for us again since then. So our implementation is paused for now.

DE: Is there anything that either of you could say about how you determine the priority of these things?

USA: There is a reply by ML on the queue.

MLS: Yeah, so we’re -- I think we’re in a similar boat. We don’t -- A, we sort of don’t want to be the first to ship this, and B, we don’t view it as a high priority given other priorities we have, having to deal with performance security and other features we’re implementing. It’s a large feature to implement, and it will take a good amount of time, I would think, to do it.

DE: So maybe we can discuss how browsers prioritize features so we can understand why other things were prioritized and this one wasn’t. I mean, overall, it would be really useful to get input from browsers on how we in TC39 should prioritize our work so that we’re aligned with, you know, what will make sense for browsers’ priorities.

SKI: So, yeah, as KHG shared, decorators is a popular feature among developers. The bug for the implementation of decorators has about 78 votes, and we were wondering if any data on the ground, like, any surveys or implementation and usage experience would help. Is there any data that could be collected that would help, you know, align decisions, like, increasing the priority for implementation -- I mean, how do we get out of this deadlock?

DE: Can I request–even if implementers, even if the three browsers don’t have anything to say now, maybe you could come back at a future meeting and give us more clarity on how you determined the prioritization, what data you might find interesting, whether you’d like the proposal to be withdrawn. It’s just very hard to interpret the signals. It would be really helpful and productive for this committee if we could get more clarity from the three browsers.

KHG: Yeah, it also, just to climb in, I haven’t had a lot of time the dedicate to this since I left LinkedIn several years ago, and I’ve been, like, putting in spare hours where I can find them to keep everything updated as much as I can. But, you know, I think that lack of clarity has been really hard to deal with, because it’s -- it feels kind of arbitrary and also it feels like a really high bar to say that, you know, we have to not be the first one to ship a feature. That can just turn into, like, you know, a never ending stalemate. And it’s not like we’re saying, you know, you are have to also implement the feature, because that’s -- the implementation is already there. It’s just shipping it. So it really -- yeah, I guess just I put five years of my life into this now, and on and off, obviously, but I’d really like to see it get over the line. Yeah.

MLS: So response to DE, I’m not at liberty to talk about how we set our priorities. There’s all kinds of things to figure into that. Certainly what’s being standardized, we have performance, we have security mitigations, we have thing that are coming down our hardware pipeline that we need to do development for, so, yeah, I can’t -- you know, I can’t tell you what our priority is for certain things, and, you know, you have end things and you have to draw a cut line some place based on the priority of the current development cycle.

SFC: Yeah, I mean, you know, when this body advances, the ones we advance are largely the one my team determined are important to our uses, our clients at Google, and we also put in the work. And my team has been putting a lot of time into Temporal proposal because that’s important to our users, which are, you know, users of internationalization libraries, users, you know -- developers trying to build internationalized apps. And, like, that’s how that happens, at least for proposals. I can’t speak for other proposals that I’m not familiar with the users and the clients. But, like, that’s probably a good place to -- I just want to sort of draw that problem and be like, Intl proposals tend to get implemented pretty quickly, and that’s the reason at least on my side, because my team is implementing them. And I’m not the V8 team.

KHG: So, yeah, the -- I think the -- if the -- if it really was just like, oh, we haven’t had a chance to review it or it just hasn’t been prioritized or question don’t have bandwidth to implement, that’s understandable, totally. And we all have our priorities and we’re all trying to get things done. I think it’s more about, like, we have an implementation ready to go, and it’s just not moving forward because it families like it’s being gate kept a bit, I guess.

DE: Will we hear further feedback from SpiderMonkey or V8 about your prioritization? Because it would be really great and useful to understand, I mean, as the Edge team was saying, whether any data would be relevant for you that we could collect, or whether the browsers don’t want this proposal to proceed or anything more.

[a long period of silence]

DE: Well, I hope that in the future, we can be in touch about this. Historically, when we bring something to Stage 3, the assumption has been that’s because as a group, we are prioritizing it, to some extent. I hope that in the future, people can block Stage 3 if they really see proposals as very low priority to implement. I was expecting that Stage 3 would be a sufficiently positive signal. Increasing clarity here in the future would be really good, with respect to this proposal and with respect to future proposals as they’re proposed for Stage 3.

USA: Kristen, would you like to say any concluding remarks?

KHG: No I think that’s it.

### Speaker's Summary of Key Points

* Decorators is a well received and highly anticipated JavaScript feature.
* Lots of use cases, lots of good feedback overall
* Implementations (V8 and SpiderMonkey) are nearing completion
* No web engine wants to ship first.

### Conclusion

* Status quo remains the same, no one plans to ship currently.
* No browser was willing to explain the reason for their deprioritization.

## Curtailing the power of "Thenables" for Stage 1

Presenter: Matthew Gaudet (MG)

* [proposal](https://github.com/mgaudet/proposal-thennable-curtailment)
* [slides](https://docs.google.com/presentation/d/1Sny2xC5ZvZPuaDw3TwqOM4mj7W6NZmR-6AMdpskBE-M/edit#slide=id.p)

MG: I want to talk about thenables, and I want to make thenables less powerful. So what are thenables? So this would be an object that has a then property, and so objects that have then properties are treated specially in promise code. And the why of this comes from before my time on TC39, but basically my understanding is that pre-standard promise libraries used to support this sort behavior, and there was a desire to make he’s these things compatible and harmonious, a very noble goal.

MG: Okay, so what’s the problem? So this is something that I have seen multiple times now. And on multiple teams, and so I want to talk about this. And the problem is that it’s very easy for implementers, particularly in web engines, but I suspect this sort of thing can pop up elsewhere, to totally forget that this exists. It’s the kind of behavior that is subtle if you don’t run into it very often and if you’re not, like, having it rubbed in your face, you can forget about it pretty easily. And so you can accidentally create cases where user code can get executed with where you kind of never expected that to be possible.

MG: And so an example that I write up here is, you know, we have this web IDL, which is an interface description language for the web. And you can define a dictionary, which is just like a bag of data. And, you know, these things get code generated into nice, like, C++ structures so we can work on them in the C++ side, and they’re great. And then there is a nice, beautiful translation system that translates them into JavaScript objects and back. And cool, everything’s nice and lovely, and so you have one of these C++ structures, and you go, you know, the spec says to resolve a promise with this, so you just go, you know, your C++ version of a `Promise.resolve` on this object, and you never think about whether or not, like, code will actually get executed in script at all, because why would you, because you’re just resolving this C++ thing. And the problem here being that dictionaries, they convert to abouts with `Object.prototype` as their prototype. So when you do that translation from C++ object to JavaScript object, you go C++ to JavaScript, now it’s going to prototype.

MG: Oh, look, what the somebody put a then property on `Object.prototype`. Accidental user code execution. Something happened that you didn’t expect. Okay, so this is actually -- has actually been something that happened again and again. I didn’t even look that hard to generate this list, and to be honest, I didn’t even both to look at WebKit. There could be WebKit bugs similar to this that I didn’t even try looking for. And this includes, we’ve even had one of these on the spec, or the spec CVE from last year was basically this kind of problem.

MG: So what do we -- step 1 -- or my Stage 1 ask here is ultimately can we do something about this? And I come hoping that the answer is yes. And I want to present a little bit of some of the design space I see for options here. But the actual ask here is the Stage 1 ask, which is: Do we agree that there’s a problem here, and do we think that there exists a potential solution. Okay?

MG: So when we were dealing with the spec, CVE, one of the problems -- or one of the proposed things that would happen is we would fix the problem directly, but also pursue a couple of mitigations. Some of the mitigations that came up with were okay, what if we made if object prototype an exotic object and we make it exotically reject object properties, so you clang (?) the defineOwnProperty on object prototype so it silently know ops. Another option was to make some promise resolution functions not respect thenables. It was not super clear which ones we could do, and I think that this would be little bit challenging for an audit. But it does suggest that there is at least some ability for us to address this and there might be some appetite in committee to do this.

MG: I did want to come with a third proposal. There we go. Pause I’ve been thinking about this for a while. And I’ve been trying to figure out what is a nice answer to this look like. So the third proposal that I would suggest looks something like there. Specification defined prototypes, so this would be like Math and Error and Array and `Object.prototype`, get a new internal slot, and you call them internal proto. So objects that have internal proto, they’re exactly the same as any other object, but we will add then a new abstraction that pass attention (?) to this internal slot. You add that abstract operation, get non-internal, and this get non-internal does the prototype chain walk that you would expect for get, but as soon as it sees that the object that it is going to look at as the internal protoflag will stop and, you know, will just return undefined at that point. We then replace the promise resolution machinery that looks for then in the prototype and say, use this new abstract operation called get non-internal.

MG: This is nice. It addresses some of these bugs. It fixes some of them. Like, it mitigates the challenges. There’s some advantages. I think it’s a little bit of a more harmonious design than turning `Object.prototype` into some exotic project. As an engine implementers like this because I don’t want it to be in the exotic object. It can also be integrated into WebIDL. So we could change the web IDL spec to say that IDL defined prototypes and classes get this non-internal flag. And, yeah, sorry, it also avoids making `Object.prototype` exotic.

MG: Is it perfect? Of course not. No, this is a mitigation and doesn’t really fix the whole class of problems of thenables. And in fact, on the write support of the proposal, you’ll see it definitely will address some of them and definitely does not address others.

MG: Now, I didn’t want to come with zero data. Because I did want to know, like, how likely is it that this could be compatible? And unfortunately, I goofed a little bit when I did this telemetry. So it doesn’t quite answer the question that I was hoping to answer entirely. But what I have is I added telemetry to the thenable paths in Firefox. And the telemetry really collects three bits of data, and it says, okay, did you ever on a page use a then prototype, like, did you resolve an object by going down the path of calling then. Did you resolve the path -- the second bit of data that’s gathered is did you resolve the then from objects prototype, any objects prototype at all. Essentially, is it not an owned property, is the only check. And then the last bit is is it something that is on -- was the then property resolved on a standard prototype. Because this was cursory data and I was just whipping it together for the purposes of roughly this presentation, I used as a surrogate for what is a standard proto, is inside of SpiderMonkey, we have a big enum full of the standard prototypes. And essentially if the prototype that you found the then property on resolves to one of these prototypes, it is, I call that a standard proto.

MG: This is flawed metric for two reasons. One, I mentioned the idea of trying to fix this for web IDL stuff, and this doesn’t count any web IDL prototypes. So that would be flaw one, it doesn’t co-anything for web IDL, and ultimately would be kind of an under-count. The other thing is that it doesn’t actually address the question which I was hoping to also answer and didn’t realize until I was making this table I couldn’t really tell you, which is if the only thing we the was mark `Object.prototype` an internal proto, give it the internal slot, how often would we run into that on the web? I can’t give an answer to that. I do say that I would probably do that if we got to -- if we got to Stage 1, I would probably add that kind of telemetry.

MG: The numbers are, well, what I have been learning from telemetry lately is that the numbers never match my expectations, so this is across four days in February. You can see that 2.2% of pages are getting, like, an actual then property. Of that, 2%, so the vast majority of them, are getting it off of a prototype. This probably makes sense. 0.13% are gettings it off of a standard prototype, which if I’m being very honest is quite a bit higher than I was hoping for. Like, on the order of an order of magnitude higher than I was hoping for. I don’t have answers to what kind of pages actually do this, are there real use cases that this is actually impacting. I don’t have any idea. I thought I would bring the data I do have to committee.

MG: So this is a problem statement more than anything else. I’m not married to any of my solutions. I just wanted to highlight that this is a problem. We’ve seen it multiple times. Across multiple engines, it seems like something that we could do something about in committee. I would love to hear people’s suggestions for other answers, solutions, problems. Heck, even some suggestions for telemetry, like to know to drive this. I’m open to that. But, yes, Stage 1? And I guess questions.

USA: So before we start with the queue, I would like to remind everyone that it’s a long queue. But, yeah, without further ado, first we have WH.

WH: I just want to make sure I understand the previous slide correctly. Are you saying that one out of 20 `then` lookups find `then` on a standard proto?

MG: No, no, this is a percentage. So this is one out of 1,000 pages --

WH: Yeah, but the total thenable percentage is 2%, and I’m dividing the two percentages.

MG: The denominator on these a all the same, and it’s roughly the number of page loads encountered. So on a given day, Firefox loads, you know, whatever billion pages, and of that billion pages that get load, 2% encounter a thenable and 0.13% then count you are then only on a standard proto.

WH: So 1 in 20 pages that resolve any thenable resolve one on a standard proto?

MG: WH, that’s not necessarily correct, because you could have more than one thenable on a page load.

WH: Okay.

MG: And, like, the -- it is literally just a single bit of information from a page load. It does not have any indication of how often does that happen. If you had a page that, like, put a then on every single standard proto and resolved every single thing, it would still only show up as a count of one.

WH: Okay, thank you.

JHD: Yeah, so for -- you talked about three options. I’m just clarifying, if for if first one, I assume we use the AO we added for `iterator.prototype`, that if you try to set on it, it sets, like, where the target is inheriting from object prototype, it would just create a non-property? Because the AO called setter ignores prototype properties.

MG: Maybe. I pulled out –

JHD: You just don’t have those details. It just occurred to me during the slides.

MG: It was really just sort of highlighting -- these were proposals from when we were doing the spec resolution, like the spec remediation, and I thought I would bring them as an example of things that could be done. And I don’t remember the exact a details of how that was supposed to work.

KG: It does have to be exotic because you don’t want `then` in object proto to start passing. It would have to be an exotic. Anyway, my topic was: I do support Stage 1 for this or exploring this problem area. There’s definitely a lot of space for solutions or partial solutions in this area. I also wanted to hear your thoughts on the object prototype solution. Like, if you proposed this alternative, which suggests that you thought that was a reason to do something else, and I was wondering –

MG: Generally from an engine perspective, making objects exotic is a pain, because what it does is it means that now you have to special case an object that is, like -- you have to give -- and especially on an object property definition and reading paths, like, making an object exotic has a cost. And, like, `Object.prototype` is a very important object. And so making that exotic feels wrong. It could very well be that we absolutely could do it and make it even work fast. But it just feels like the wrong approach. And also, it does feel a little confusing to people in a way that I feel like the promise resolution, just sort of ignoring it, is slightly less. I don’t know, it feels inharmonious to me, but I -- that is really a gut feeling there.

KG: That’s very valid. On the, like -- how it will feel to people, my hope is that no one will ever know that we do any of this kind of thing unless they’re already digging around in the guts of stuff, so I’m not super worried about whether something will feel weird as long as you’ll just never run into it. I’m okay with that, like, doing arbitrarily weird things as long as they are, you know, doable efficiently in engines and no one has to know about it unless they’re trying to do something strange like put `.then` in `Object.prototype` in the first place.

MG: This is where I really wish I had that split out telemetry, where I had split out `Object.prototype` specifically from all of the other standard protos. I did not and I regret it. But you found these numbers to be surprising, and so this is my only other feeling here, is, like, I too hope that nobody runs into this, but into says numbers already surprise me, so I mean, people are doing weird stuff out there.

KG: Yeah, agreed.

MAH: Yeah. So we are generally interested in the issue of reentrancy with the promises, and it wasn’t entirely clear to me with the presentation if all the issues that you have found, the CVEs you have experienced and so on, are due to synchronous reentrancy when sending thenables or if they’re just merely the fact that thenables exist and should possibly be adopted. If from what I understand the issues are synchronous re-entrancery handling thenables or have a custom logic during the promise resolve algorithm, I believe we should explore that problem and see if there is a way of having a basically safe promise resolve that is capable of not triggering any user code during that step. This is actually something brought all couple years ago that we were interested in trying to solve. I think this is a problem that is not specific to the spec or web IDL or so on, but is also something that user code may want to protect themselves against, and so I would like to explore the more general problem of synchronous promise reentrancy during -- that is triggered by thenable. That is not actually the only trigger. There is also the constructor property lookup happening during problem resolve. And it’s wider than the then property.

MG: The constructor lookup thing is actually kind of interesting and I hadn’t really considered that, and I’d appreciate it if you’d open an issue on the repo that mentions that because I will 100% forget by the end of this call. The one thing I would say, and I hope at the bottom of the repo it says this already, but I do recognize that this does also potentially fit into the, like, general bucket of, like, invariant maintenance and opting in and out of things that the stabilize proposal had been talking about.

MAH: This is independent of stabilize. This would be explicit promise resolve, so anybody that is interested in handling promises without -- while knowing they won’t trigger re-entrancery can adopt that operation.

MG: Yeah, I would open an issue. I think that’s a good point. The one thing I did say is, like, it kind of feels like this internal proto thing is the kind of magic that you could imagine wanting to give users access to via the stabilize proposal. You know, terminating the lookup for this sort of thing. But I’m, as I said, I’m very not committed to any particular solution. I’m more just irked by how many CVEs this has caused and would love us to come to a solution that, like -- as I said, it doesn’t have to fix every problem. But if it makes this twice as safe, that would be great. Like, it just makes everybody’s lives a little bit easier if we can try to do that.

MG: And the other thing I should mention here that I didn’t put in my slides, there’s also a possibility here that we just decide that maybe TC39 isn’t the right venue for this and ultimately this is a problem that could be solved or should be solved by the web IDL spec and we could talk about that as well. And that is getting this out of TC39 is also an option, but for myself, this is a problem that seems relevant at least to the people in this room, so I thought I would bring it.

MAH: And I want to reiterate, very much interested in the general problem, that I would like to generalize the problem to just -- not just web IDL and gen implementations, and general how you handle promise objects safely without having re-entrancery.

KG: So I want to -- this isn’t -- most of CVEs that I’ve seen aren’t about re-entrancy of problem objects. They’re about things being unexpectedly being treated as thenables when they weren’t intended to be thenable as at all. It’s not like you made something which you were expecting to await into a non-native promise, and that’s done something weird. It’s like the example that came up recently was the iterator result objects that are returned from async generators that have value and done and inherit property prototype and those were unexpectedly, you could make those into thenables by putting `Object.prototype`, but they weren’t intended to be promises at all, so it wasn’t exactly promises being reimplemented that was the problem. It was things unexpectedly being thenable that was the problem. Which is a slightly different issue. Also I want to point out, I put this in the Matrix, but in case you don’t see it there, there is thenables proposal by Justin, who hasn’t been participating much, called faster promise adoption that touches on some of this stuff, and I think for the specific problem that the constructor check, there’s a possible solution in that repository. It doesn’t have any actual overlap be this proposal, but is in a similar area.

MG: Okay, thanks. I can’t see anything except my slides right now, but I will look when I’m done.

JHD: So I have a couple things. Real quick, I just wanted to ask about the telemetry. It sounds like you said this is just a single bit of information, but is it possible to have more information, like, which standard proto object was it or, you know, things like That?

MG: All things are possible, it depends on how much work you want to put in. In this case, I was taking the easy path, which is the -- what we call the use counter path, which is basically you name some property, and then when that property happens, you say, hey, it happened! But unfortunately it takes a bunch of overhead in order -- it’s a lot of writing of code in order to get this to work. And so adding the “hey, this happened and it was this thing” is a little more challenging. But what I would do is I would just take this particular bit and split it into two and say, okay, it was on a standard proto and then on object.then to give me one more, like, piece of insight. Longer term, if we do actually, like, want to pursue an idea where we’re actually really, really concerned about webcompat. I could start plumbing into into the more complicated bits of where do we see 24 and what are the paths that are being monkey-patched. It could do it, but it takes time and effort and this was supposed to be quick, I did it in an hour and a half. It was not intended to be bulletproof, you know, inarguable stuff.

JHD: Okay, thank you. That clarifies, so my queue item was that it’s -- it sounds like you said part of your interest in option 3 was that it avoided making `Object.prototype` exotic, but if it has that slot, it’s exotic. So it doesn’t seem like it avoids that. And then, separately, if objects that have slot, there does need to be some sort of way to check that they have that slot, some form of brand check no matter direct or not. I’m not sure –

MG: From the specification, it becomes maybe and… From an implementation standard, it becomes a very easy check of, like, I am walking the protochain. Is my object `Object.prototype`? Stop. The implementation does not have a real reified internal slot. It’s a fiction to actually talk about this. That’s it

JHD: So obviously the -- this is -- the details of this are Stage 2 stuff. I wanted to raise the thinking that if you’re just trying to refer to, like, the current realm’s `Object.prototype`, that’s fine but if it’s a cross-realm slot thing, then it definitely makes it commotic (?) and needs some sort of brand check. But either way, I agree with everything that’s been said about Stage 1, whether it’s for the problem of promises or even the more general problem of re-entrancery and evaluating user code. But I think regardless of pursuing this, it seems prudent for web IDL to consider producing null objects instead of standard object because –

MG: I think that ship has sailed too far in, like, that particular ship is gone. I would be shaken if that was web compatible.

JHD: I mean, perhaps only for new objects it produces. But it seems worth not -- since web IDL itself is just a spec document, it seems worth trying to stop the bleeding if there’s something that is subpar in it. And I still think we should be pursuing this problem here, but just in parallel, that’s my suggestion to consider that.

MG: Yes.

JHD: I’m done.

LCA: Yeah. On the use counter think, I think Firefox does not track what pages it actually saw the use counter increment on. But Chrome, for example, does, so if you have a use counter to Chrome, it would give back the list of pages that use counter actually hit. And then you can do more investigation to see, like, what actually is happening while looking at the source code. So maybe it’s –

MG: I would love it if -- I will probably not hack in use counters into V8 for the purposes of this. But I would love it if somebody else did, especially given that that happens. That seems nuts to me, but, yes, that is a challenge that I have right now, I can tell you that there are these 0.13% of pages that load and do this thing. And I cannot tell you what they are. And, like, I have attempted to find some by, like, rummages around on the Internet with an instrumented browser myself to try to find them, and I have yet to do so.

MG: I was surprised to discover that YouTube apparently used like an actual thenable in the middle of loading. I don’t know what for, but it does. But that, hmm, that’s all I can say right now.

USA: Next we have a reply by DE.

DE: So I’m a little bit skeptical of this assertion that there must be brand checks for anything involving an internal slot. I agree with you for a lot of the brands that we add, we should make -- check predicates for them, but we as a committee have not adopted on overall stance on this.

JHD: That’s incorrect. In beginning of 2015, when I proposed trying to remove toStringTag from ES6, the committee had con sen they would not remove it but all built ins would, as they currently did, and we an oversight about error and argument objects, but -- and moving forward as well, all built ins would have brand checks moving forward. And so we have maintained that for all new things that we’ve added and that’s also part of the motivation for `Error.isError()`, and as far as I’m aware, there hasn’t been consensus to change that consensus.

DE: And different people have different interpretations of what happened then.

JHD: Certainly.

DE: And I think before asserting that the committee has a policy, it would be good to do, as YSV proposed a while ago, proposing for a consensus like I have an the agenda for a different design principle, a particular design goal for the committee. And until then, I think any assertion that something must be some way would be better to stay -- I would like it to be like this, because –

JHD: I did not say that the committee has such a policy.

DE: You said it must be this way.

JHD: Yes. Implied is because I feel it would be this way, and I would object if it were not, as everyone else in this room has today and will continue to have whenever they have an objection. I appreciate your note on my wording, and I do agree that having such a design goal document would be helpful.

USA: So we’re at time. With that, MG, would you have time to stick around if we make an extension, would but interested, or do you want to come back to this later.

MG: How much is left on the queue?.

USA: There’s seven topics on the queue.

MG: I have some time. Like, another 15 minutes. But that’s about it.

USA: All right. That gives us roun –

MG: One second. I shouldn’t speak before I know a certain—yes, I have some time.

LCA: I support Stage 1. I think it’s great that you’re doing this investigation. And this would be outside of JavaScript and any polyfilled built ins would not be able to set this which wouldbe kind of unfortunate. And then additionally a lot of—at least in Node.JS and Deno and specifications with web IDL happened in JavaScript itself so it becomes not impossible but very annoying to have to set this flag on objects that aren’t actually created in JavaScript. So I’m just somewhat concerned about this option 3 unless there’s also a way to set this flag from JavaScript that then probably is closer to having a `symbol.thenable` method or something.

MG: I haven’t thought about polyfilling it all. That’s an excellent point. I encourage you to open an issue on the repo so I don’t forget about it. As I said, not married to any solution. So I sort of don’t love the idea of getting another symbol, but I see your point about polyfilling.

USA: In the queue we have SYG.

SYG: What was my—yes, given that for the import defer thing we are already specific casing then, that says to me that we have some precedent for considering then a special evil that might be worth special casing. So while I agree with—I also hate the reentrancy problem and love to solve that and against the solving reentrancy and the bugs that I have seen that is surprising and not so much free entrant but because it lets things that aren’t promise shape that flow to things that aren’t promise shaped and that is the source of the bugs. User code in general in my problem the problem is not reentrancy but once you go to user code it invalidates your assumptions and loading things from certain slots and the shape of the thing that you’re expecting. I would like the goal for this proposal to be about preventing that class of bugs more than preventing the general class of reentrancy bugs. I support Stage 1.

SYG: I guess the point is that I don’t really have qualms if it comes down to it if we think the most bang for the buck is special case then and something super weird and special case then and that case of bugs I’m happy with that. We’re already doing it with import deferred with the name space object act very weird in that one case as well.

MG: Okay. I agree.

MM: So you’re right, defer does special case then but it’s a very, very contained special casing in that the purpose of defer is to postpone when the module is getting evaluated and then to evaluate it on need, and the special case for then is just the special case about how early the buy need happens. It’s not a special casing that’s going to surprise many people but you’re certainly correct. I See NRO will want to clarify. Please do.

NRO: So the special case with then in the proposal it’s not actually special casing how promises work, it’s that deferred main space objects don’t have the then property. That’s the only special casing. The eventual model and the object doesn’t have a then property. It avoids this problem but making sure it can never happen.

MM: Thank you. I had missed those details. I think that makes the case stronger. So I am very interested in the reentrancy. I take seriously the point that KG made that a lot of the CVEs here are not about the reentrancy. Nevertheless as a Stage 1 proposal, I would very much appreciate the goals stated broadly enough that if the reentrancy problem that can be addressed pleasantly. I believe it can and if these other approaches all turn out to be infeasible as I suspect they are, we saw what we can and compatible with the Stage 1 problem statement and include the possibility of checking with the reentrance.

MG: My preference is to keep it narrow. But I don’t really have the whole like what is if reentrancy problem look like and what the scope of solutions look like in my head? This is me say I don’t know yet. If someone can open a clear issue on the repo, I can think about it. I’m willing to keep pushing on this. If there is a nice harmonious solution that kills two birds with one stone, cool, I’m totally down for that. My preference being I would like to address the concrete CVE problem-solving problem and if the reentrancy thing can’t be done ina nice way with this, we should figure it into a separate proposal and figure it out that way. But in the short-term, I’m totally fine with piggybacking for now.

GCN: I’m curious what the scope of this proposal is defined to be. I’m generally in favor of curtailing the power of thenables. The first proposal I made for TC39 was in that vein. I don’t understand is this proposal specifically about the promise resolve operation or more general? What is being targeted here?

MG: My goal is basically I would like to and has the ideology of `Object.prototype` it doesn’t invoke that thing because web authors like—engine implementers forget about that behavior too often and this leads to bugs where an attacker is able to do something like force a GC to happen inside of the then and then it returns to executing code inside of the C++code and objects disappeared and then you get problems. That’s really my high priority scope. That’s what I would like to address. I proposed a slightly more general solution because I think there is a nice harmonious design in it. I’m worried from the telemetry numbers it may not be as web compatible as I hoped. There is some talk about the reentrancy problems with promises that I can’t really speak to without having more time to think about them. But the most concrete thing that I want is like `Object.prototype`.then should not cause some random object to become a thenable and invoke user code.

GCN: Okay. I will—just as an example of something that I assume is out of scope of this, when you dynamically import a module and write `export function then` inside of the module, that function is called, I assume that is an example of something we won’t attempt to fix in this proposal.

MG: No.

GCN: Under any proposed solution that could direction that that could go, so basically what I just want to understand is there are a lot more weird examples like that which things are in and which things are out.

MG: Mostly I would say like all of that module resolution machinery I would say is out. But this comes down to like is there a harmonious design that will be efficient to implement that will address the problem and ideally, you know, address like user’s expectations a little bit? I have no idea what people would expect if you exported then from the module. Is that expected? Is that something that people are running into it and it’s biting them? I have given it zero thought. But if it is like an instance of this more general class of problem, sure. I think we can shave this down a little bit over time as we potentially try to get to Stage 2.

USA: We have a point of order that five minutes—actually four now remain in the time box. Next we have DE.

DE: I want to request a couple more minutes to the time box just to get through the rest of the queue or otherwise we can raise—so I have a couple other ideas for how this could be resolved. If in the option 3, we care mostly about promises created by web IDL, web IDL could create a non-writable and non-configurable that is the original then method and make that from the internal slot or reading it from the later point. That’s one thing to consider. Another one if we want to solve the more general problem of things being unexpectedly thenable would be to make it so that the look up of the then property is a special look up that doesn’t bother to do a read if it’s the original object prototype of the current realm. I guess this would benefit from having your further web—this telemetry data that you have here. If that were expanded to, for example, anything with a null prototype gets skipped, that would solve the module things. I think that’s late for that web compatibility-wise. People are excited about that pattern for modules in particular. Maybe using it. Anyway, I’m very happy that you’re investigating this, you know, subclassing built in was kind of a mistake. I’m glad that we’re undoing it where it causes especially big problems.

USA: We have a topic by RGN.

RGN: A follow up to SYG’s last topic, he said he didn’t want to focus on reentrancy as the problem and went on to describe a scenario that to me seems more general than reentrancy. We often use that term as a shorthand but the reality is it’s really about an interleaving where code runs that other code wasn’t expecting and can have effects. So in that case, the boundary was from implementation code to user code. But the same kind of interleavings affect user code to user code. I’m a little hesitant to carve out the narrow space of “reentrancy” when we really are talking about a class of problems not just analogous but in fact more broad because non-reentrant code can still have effects at a distance. That’s exactly the kind of thing that we hope to avoid.

SYG: Sorry. What was the question?

RGN: I guess I’m looking for a clarification of how you think that the scenario you described is different from this generalization of reentrancy.

SYG: So I think MM’s response I agreed with, which was that—so my concern is that I think solving the general reentrancy problem I considered to be harder and I have a much clearer idea on what that means and what the timeline there is. On the other hand, we know that the thenables corner is a sharp corner for security bugs, so the value here for this proposal I would like to be, you know, if you have to choose between solving the general reentrancy problem and solving it for this thenables corner that we keep getting bit by, I would like to prioritize solving that even if we couldn’t solve the entrance as part of this proposal.

RGN: What if this doesn’t have to make the choice?

SYG: If it doesn’t have to make the choice, that’s great. Mark said if you could find a harmonious way that solves two birds with one stone and I would like that. And I would like the user code interleaving problem. My hunch is that it might be more tractable, the thenable problem in itself is probably more tractable than the general problem. If it isn’t, that would be great and that is win-win.

RGN: That response is helpful, thanks.

USA: Next we have Chris on the queue that supports Stage 1, spending time exploring the problem space. And that’s it. So MG, would you like to ask the committee for consensus on something?

MG: Do we have consensus on Stage 1? Sounds like the answer is yes.

USA: I think so as well. Let’s give folks a few minutes to respond. If they have any other comments.

MM: I just want to confirm that we are generalizing problems and considering the problem statement to be general enough to cover the reentrancy? I support Stage 1 with that understanding.

MG: Yeah. I’m willing to look into it more and then we’ll look at the problems—we’ll look at the set of solutions we can come up with and see if there’s a middle ground and we’ll go from there.

MM: Okay. And as you suggested, we’re perfectly happy to do this and continue a discussion.

SYG: Sorry to interject. I was typing something. MM, I want to double check and back and forth a few times now. I want to double check if as part of the exploration there does not exist a good solution for the reentrancy problem and this problem, that doesn’t tank this proposal I think is worth solving this proposal even if we after spending some time don’t find a good general solution to reentrancy.

MM: If this proposal could be solved in a way that is worth the cost, the existing approaches that were mentioned, none of them seem feasible in terms of regularity in the language but this is a Stage 1 exploration, so even if the reentrancy is not there, I don’t think I would block Stage 1 based on the infeasibility of the concrete approaches. Because if the problem can’t find a pleasant solution, that would be fine.

MG: I want to look at the more concrete—sorry, the broader case mostly because I don’t have a good definition of all of these pieces in my head right now. People are using “reentrancy” in ways that I don’t think match how I think of reentrancy and I need to read some background here. I’m willing to approach it, but I did say my priority is let’s make thenables a little less power. If it helps with reentrancy. Cool we can put it in this proposal and take a look at it. If it goes badly and we can’t find a harmonious solution, I would like to split it out.

MM: In response to SYG’s question to me, I think there might be misunderstanding. I’m not saying there’s a general solution for the general problem of reentrancy for the whole language. That would be very—I would be flabbergasted. Different reentrancy problems call for different solutions. What we’re suggesting is there’s a more feasible, more constrained approach to promise reentrancy than the ones that were concretely suggested in the proposal. And that’s specifically having to do with the safe form of `Promise.resolve` and fixing await to use the safe form. Obviously I will be clarifying that on the issue list. But that’s the only sense in which it’s a more general solution to reentrancy. It’s not solving reentrancy problems in general.

SYG: Got it. Okay. I think that satisfies me. Yeah, I think all I was saying is don’t let perfect be the enemy of good. This is a real problem.

DE: I just want to agree with what SYG was saying, in particular reducing the likelihood of CVEs is worth a lot and if that means that we end up having more complexity, I think it’s worth that cost. So MM was saying he found it unlikely that something would be worth this complexity cost if—actually I wasn’t sure under which conditions. But I would be okay with taking something that’s a bit messy if it reduces the likelihood of CVEs.

KG: Strongly agree with Dan. The cost of CVEs is paid by users of the web. The cost of the language being a little more complicated especially in the weird dark corner that no one looks like is paid by only the people in this room.

USA: That was all of the queue. Mathieu, do you want to respond to that or make any final remarks before we move on with the –

MG: No. I’ve already overshot my time box extremely badly. I would prefer to stop.

### Speaker's Summary of Key Points

* Broad support for making some kind of change here, even if it’s a bit messy and unprincipled, if this fixes the risk of vulnerabilities.
* Some interest in more broadly attempting to solve promise re-entrancy. Matthew is OK with taking look at this as part of this conclusion, but some on committee also would prefer to not stop “good” for “perfect”.

### Conclusion

* Stage 1 achieved

## `Math.clamp` for Stage 1 or 2

Presenter: Oliver Medhurst (OMT)

* [proposal](https://github.com/CanadaHonk/proposal-math-clamp)
* [slides](https://docs.google.com/presentation/d/14QGuyCHlsSr4ZSCkbFuaFZk8793EAMS1nAkdW_csLhA/edit)

OMT: I would like to propose adding `Math.clamp` to two numbers. Mostly because it’s in many codebases and not needing the boilerplate would be a better experience. It should also improve performance. Instead of having like the example shows `Math.min` and `Math.max` it should have one call. And hopefully that’s a single one and help with optimization. Other languages all call it clamp. There’s some arguing on the arguments where it should be min,val,max. And there’s an NPM package called clamp that is referring to a delete and lodash implementation mostly gets over a hundred thousand. These are used by min, max. And learning from these, the name is essentially standard. The name is the arguments.

OMT: So propose doing val, min, max for now. No coercion as the point of modern proposals go for. If the limits are not a number for integer just return it. It doesn’t comply with the suggestions but it makes sense with the functions.

OMT: So I propose moving to Stage 2 which might be a hot take. But I think it matches the process because there’s a preferred solution. I think the language should have this as `Math.clamp`. The design may change significantly. That’s all out of Stage 2. There’s already a spec text and proposal document and everything. I can share the spec text.

USA: The spec text is visible.

JHD: I definitely support this. I actually already reviewed the spec as well. I volunteer to be a reviewer if it were to achieve Stage 2. I think this is great. I think if the only concern from the room is the argument order, that’s definitely something to be resolved within Stage 2. My personal preference on it is what it is right now, because I don’t have any familiarity with using it in CSS any way and everywhere else I have seen it on a computer in my life it has been in this order. That’s also the way I describe it in English, clamp X between Y and Z. And that’s it.

NRO: So I support this for Stage 1 or even 2, I guess. But for the order of the arguments, I think we should try to match CSS more than what others are doing. Nobody would be using the levers anymore while people will be writing clamp for JavaScript versus CSS for the application. It’s better to have two function the same than being on the single platform be aligned than not.

??? (unknown): I see the confusion. Would you still support this for Stage 2?

NRO: Yes.

??? (unknown): Thanks.

LCA: I think we should—we have a bunch of comments on the same topic. We should do them all in this topic. All other program language use val, min, max, we should not diverge from that because CSS does something weird.

MF: I support CSS order. I also don’t think we’re going to come to an agreement on that. Back to my point, I think we should explore the prototype method that was suggested in some of the issues. Like `Number.prototype.clamp` where the this value is the target and then you pass a min and max that hopefully we can at least agree on will be min first and max second. Though I’m not sure at this point with how the conversations have gone. I still think Stage 2 is appropriate even with that level of design change still up in the air. So I would not oppose Stage 2 advancement. I would like to at least during that stage see that prototype method explored a little bit more.

SFC: Yeah, mostly just to echo what MF just said, like, I think the slides—OMT finished the slides in two minutes and asking for Stage 2. There’s still a lot of design space here. Prototype function is one of them and NaN handler is another and ordering is another. I mean, I think it’s a fine thing to do. The motivation is basically like, well, look, there’s all these other libraries that do it so therefore we should do it which is usually fine. It seems rushed to skip to Stage 2. I won’t block Stage 2. It seems like there’s still quite a bit of design space.

OMT: I agree with the design space. My main argument is that according to the process document, that’s fine for Stage 2. So as far as I know, Stage 1 is like deciding on the problem. I think always everyone in this room agrees that having it make sense this is not doing anything.

WH: This mostly looks good. There are two controversies here. One is if the value is NaN — I think that returning NaN is the right answer, but we should discuss that. The other thing that bothers me more is that `Math.clamp(x, 0, -0)` throws, which seems strange since +0 equals -0.

OMT: I originally read the spec text during Tokyo and I think I spoke with Troy (?) and someone else.

WH: Line 6 of the algorithm on the currently displayed slide.

OMT: I think that was decided to avoid confusion. I’m open to changing it if people think it’s better.

WH: None of the existing implementations would throw in that case. The result should just be, I guess, +0.

OMT: I’m looking to do that.

SFC: I just less than operator semantics seems probably what we should follow in terms of minus and plus zero. If we want to be stricter, we could.

EAO [on queue]: + 1 for Stage 2

SYG: I don’t really have any complaints about Stage 2 here. But I do want to express—urge caution I suppose about the faster point. I’m skeptical in production engines that this will be meaningfully faster. Probably not until you hit the optimizing tier. Even if the optimizing tier there may be—you could do a bunch of stuff today if you see maxorf min at that point. So I still think it seems a good thing to have given that it is a stand-alone operation that’s easier to read intent into than max and min. So that’s fine. I don’t want to oversell on the faster bit.

OMT: Yeah, I agree. I just view it as a potential bonus. I don’t think—it’s not a potential downside.

KM: I agree. I think other engines probably will see through this and remove it or convert it into the same, the optimal code.

KG: I want to call people’s attention to the NaN issue. What do you with NaN for these inputs. It’s contentious that across other languages that NaN for the value argument just means the result is NaN. There’s not nearly as like consensus for a NaN for the min and max arguments. I kind of prefer throwing because I like rejecting invalid values but I see the case for putting just returning NaN in those cases as well because that better matches what you would be doing otherwise. I just want to call people’s attention to this question that we can absolutely resolve later.

KM: You do any validational stuff, I think once you have NaN and stuff, like, I agree probably wasn’t you start drawing, you might lose a lot of your performance because you do a bunch of checks that you just allow for weird behavior, then probably what people would write most of the time, then they care about the performance, they would—this is going to be slower than that.

MLS: A way to do reply, KM did the reply and got both my points almost completely. There’s seven checks for exceptions and that’s a lot of coding you need to do to make that happen.

DE: This proposal seems very useful for everyday coding. The details we’re talking about are important to iterate on and Stage 2 I think makes sense as the time to iterate on them. I have other opinions but they don’t matter that much.

MM: Just bringing up that the notion of clamp makes as much sense for BigInt. That’s not an objection as well. I support this going even to Stage 2. I thought I would raise that to get your thoughts.

OMT: I was talking to JHD. There’s an issue in the proposal repo about BigInt. It’s more of a question of functions do it so would that—I’m definitely open to doing it with consensus.

JHD: I mean, in general there’s the contention around that is that some of the math methods should work for BigInts. Some of them obviously can’t. Everyone is not equally convinced that we should be—that some should support BigInts and some shouldn’t. Some think it should be all or nothing.

MM: I have the same misgivings. I support Stage 2.

SFC: I agree it makes sense for BigInts and also make sense for decimal and all of the type. Does it make sense for dates and Temporal objects? Does it make sense for anything else that can be compared in the language? It’s an interesting question to ponder. But I think a question that is important to think about is let’s just say we limit it to numbers and BigInts. Fine. Now we have to do a brand check in the `Math.clamp` function. If we have prototypes we don’t have to do that type of thing. That seems like a design question that should be answered quite early on in the design process.

MLS: Another type we should probably put on the prototype for those types instead of putting it as dot because math is good for numbers.

DE: As MLS said, `Math` is for Numbers. We explicitly decided during the design of `BigInt` not to extend `Math.min` or `max` to BigInts. The idea is you’re not doing generic programming over different numeric types. Anyway, I don’t mind the idea of doing it as a method on `Nummber.prototype` but including it in `Math` would also be quite consistent with the design of the rest of the math names base. I think it does make sense to start with only numbers for this. It’s the most useful basic case.

JHD: I want to add the benefit of putting it on the prototype, it does resolve all of the ordering questions. It makes the order the same as this actually because the receiver is the first implicit argument. So that might be an expedient path for the proposal.

SFC: This is a slightly bigger one. The slides were very thin on motivation, there is one slide basically said look there’s like these languages that implemented and there’s these NPM module with the downloads. What is the actual use case? When should I be using clamp? A lot of times when I’m using clamp, I actually don’t want to clamp. I actually want to maybe take a number and put it on the distribution or something. Like maybe I want it to—if I’m trying to clamp between minus one and positive one, maybe I want to get a value that is 0.99 something depending how close to one it is. I don’t know. Clamp is a very easy tool to reach for. I can see the argument that it’s useful in a general purpose programming language, right? If it’s like a mathematical operation, if you’re doing it on floating point numbers, like, is that always the right tool for the job? When you put something into the standard library, like, we should put things in the standard library that are like the correct tool for the job. I think that’s the principle that we held with Temporal that we’re looking at with decimal and other things. Like, we’re trying to nudge developers to do the right thing, right? Just because the clamp module in NPM is popular does not mean it’s the right thing to do. That’s something that I would really like to see in these slides. Like, technically speaking by the TC39 process, that’s a Stage 2 concern. Like, you know, answers to that question we should answer before we say we’re committing to adding the feature, right? I understand there’s…

SFC: These are showing me code examples. But what is the—again, it’s showing me look at all of these examples of modules that do the thing. Here are some code examples. But it’s not really showing me, you know, what problem I am trying to solve. That’s a different question. This is good evidence

OMT: I agree that it could encourage bad usage but at least personally add to the quotation just for the general purpose clamp, probably double digits in the past five years. That is motivation. I agree it is nice to get some concrete uses of like here is why a clamp is useful.

WH: SFC, if you’re proposing `Math.clamp` turn out-of-range values into 0.99 when clamping to the interval [-1, 1] depending how far out of range they were, this will violate one of two math principles. One principle is value monotonicity and the other is that values between min and max should not change. You can’t have these two true at the same time and do this kind of smoothing. So I would not support extending this to something more general.

SFC: I didn’t mean to propose that. What I’m saying is there’s certain cases where I want to see the use cases. Might be some cases where these semantics are the correct ones to apply. I’m saying there’s maybe use cases where these are not the correct semantics to apply. And some other semantics are the ones that are actually correct. But this is an easier function to use, it’s just like right in front of you, you might choose to use one even if these are not the right semantics. Are these the correct semantics 90% of the time? 70% of the time? Or is it 20% of the time? That percentage should also factor in whether we should add it to the standard library.

DE: This is a very simple proposal. I think that is a good thing about it. And I think the analysis to determine how to work out all the cases, that’s important analysis. But it’s also relatively simple. Overthinking it, or prematurely generalizing it, won’t necessarily lead us to better results.

SFC: I totally hear what DE said. I also think it is our responsibility to do that leg work. The most simple proposals are good. Simple proposals are not always the correct proposals. So a simple proposal for Temporal would have been to just have a `Temporal.Instant` type. But we ended up spending a lot more time to figure out what is the actual thing that solves the real problem that developers have? And looking forward to, like, there’s a lot of simple proposals that I would love to just add but the simple proposal is not always the right solution. Sometimes it is. Sometimes the simple proposal is the right solution. I think later in the agenda we have the stable formatting update and we’re proposing the simple solution despite some flaws it has because we think the right solution. This is a question we should answer. It’s our responsibility to answer it. If we’re just publishing a library on NPM, the bar is lower. As a committee, the bar should be quite a bit higher.

JSL [via queue]: + stage 2… think we can/should have a separate discussion about Math support for Bigint. Definitely needed

EAO: It’s come up a couple of times here to consider adding clamp on the `Number.prototype`. I just want to note that we have nothing like clamp on `Number.prototype` and the functions we do have as methods are almost always something to something producing the string and starting to add methods on `Number.prototype` would I think be a much different bigger change than this little proposal is. I like this thing. I think it should go to Stage 2 as it is.

SFC: Just sort of summarize what I had said before in terms of—I have concerns about Stage 2. It sounded like a lot of support for Stage 2 in the room. I didn’t discuss this with the other Google delegates. Given that I don’t think I have authority to have Stage 2. The concerns I voiced. Stage 2 is okay but I have concerns of that. Thank you.

[Consensus?]

NRO: If we are not sure about Stage 2 given that we have some somewhat significant design space when it comes to prototype versus static method, we’ve been with clamp for many years and one more meeting to get to 2 won’t in any way –

OMT: I’m happy to go to Stage 1. I think strong enough concerns were raised.

CDA [via queue]: +1 for Stage 1. Indifferent on Stage 2.

KG: Just the same thing. Feels like there’s a fair bit of design space left over to be going to Stage 2. I’m happy with Stage 1.

OMT: I originally proposed Stage 2 because I didn’t consider—why we have the committee. Is there consensus for Stage 1?

DLM [via queue]: support Stage 1. And share concerns about Stage 2.

LCA: I’m not sure why we don’t consider that Stage 2 is still reasonable to figure out the exact solution. Reading the process document, Stage 1 the committee expects to devote time to examine the identified space and full breadth of solutions and cross cutting concerns and the outcome should be particular space for solution and solution space and I think that is done and Stage 2 is they chosen the solution space and the design is draft and may still change significantly that is exactly what this is. I think by the process, this is—we are in agreement for Stage 2. I don’t understand why for the people who are not in favor of Stage 2, could you clarify what makes you think that this should be in Stage 1 and not in Stage 2.

USA: We have a couple on the queue. Be quick.

JHD: Setting aside the spec text tweaks like the NaN stuff that would often happen in Stage 2, the only two possible shapes are whether the heading where it says `Math.clamp` on Step 1 or section 1 whether that says `Math.clamp` with three arguments or `Number.prototype`.clamp with two arguments and something would be the this in the method, I don’t think we ever considered the location of the function as a major semantic before. I would agree with LCA this is ready for Stage 2 even if we have to have this location discussion.

KG: I mean, I guess it just depends on what you consider the location of the function to be major semantics. I think for the larger proposal we probably wouldn’t. But since this proposal is so small, this feels like basically the whole content of the proposal is still to be decided. I don’t feel very strongly about this. I think that when we say we worked out all of the major semantics, I usually take that to include stuff like are we adding a new `Number.prototype` method or not? That feels like a big question to me. Again, that’s just vibes. I don’t feel super strongly. If people want to go to Stage 2, I’m fine with that. It feels like a large thing to leave open to go to Stage 2.

LCA: I want to reply. Sure. The process document specifically says in Stage 2, work out minor API details such as API names and I think this could very well be considered like the name of the API. Is it on math or prototype?

KG: It doesn’t feel like the name to me. The placement of an API is a bigger question than its name.

SFC: The prototype versus static function I think I can see an argument either way about whether that’s Stage 1 or Stage 2 concern. The thing I consider more Stage 2 concern is when we say Stage 2, we say quote the committee expects the feature to be developed and eventually included in the standard end quote. That means we agree we want this in the language. But I heard two threads that make me question whether we agreed on that. The one is this more performative and MLS said is this more performative than `Math.min` and is this for the job? Those are concerns that should be resolved before we go to Stage 2 as far as I’m concerned and the thing about where does the function live is like could be considered either way. I hope that answers the question.

DE: I’m wondering does anybody else have further requests or anyone who spoke already have further questions for OMT’s next stage of research? I think we are doing a lot of good ideas, but some of the requests were kind of open-ended. If you have any specific research action items that you think should be taken would be good.

OMT: I was going to say I guess the original reason I pushed this to Stage 2, I didn’t consider this. More than happy with Stage 1 today. Also please file issues on the proposal.

USA: Sounds like the committee is overwhelmingly in support of Stage 1. Nothing else on the queue. So you have Stage 1.

### Speaker's Summary of Key Points

* Generally agreed having a clamp function is good
* Concern for stage 2 raised over `Math.clamp` or `Number.prototype.clamp`
* Order of arguments was mostly agreed to be (val, min, max)
* Further research into specific usage was suggested

### Conclusion

* Consensus on stage 1
* Decide upon Math or prototype before advancing further

## Immutable ArrayBuffer

Presenter: Mark Miller (MM)

* [proposal](https://github.com/tc39/proposal-immutable-arraybuffer)
* [slides](https://github.com/tc39/proposal-immutable-arraybuffer/blob/main/immu-arraybuffer-talks/immu-arrayBuffers-stage2-7-as-presented.key)

MM: As you’ve heard me ask before, I would like permission to record during my presentation that includes audio QA that happens during the presentation itself, and then at the end of the presentation, when I break for questions, then we will stop the recording. Is that okay with everyone? Does anybody object? Okay, great. Go for it.

MM: Okay. So last time, we got Immutable ArrayBuffers to Stage 2. Thank you, all. We’ve been working hard on it since then, and I want to, this meeting, try for Stage 2.7. We’ll give you a status update and tell you about what’s happened since we got Stage 2.

MM: So recap, last time, this is the proposed API change as of the Stage 2 request, which has two new members. A transferToImmutable method, and an immutable accessor. transferToImmutable method produces an ArrayBuffer of the immutable ArrayBuffer flavor. The immutable accessor of course is true for an immutable array and false otherwise. Still recap, this is, in some sense, the punch line of the proposal, which is: the immutable ArrayBuffer enables freezable TypedArrays, part of the proposal was a change to spec text for TypedArrays such that during the construction of a TypedArray on an ArrayBuffer, if the ArrayBuffer is immutable, then the indexed properties created on the TypedArray are created as non-configurable, non-writable data parameters. Whereas otherwise they’re created as configurable data properties, I think configurable writable, that cannot be made non-configurable. So with this change, the TypedArray as a whole is still born not frozen because it’s extensible and you can add the properties to it, but it means that you can freeze it. It was the previous reusable of the properties to become non-configurable that prevented the freezing of TypedArrays.

MM: Last time, this is the road to Stage 2. We got all of these. To get to Stage 2.7, the most important thing is resolving all the normative issues. So there were three normative issues that we resolved and closed, which is: should transferToImmutable take an optional newByteLength argument to parallel the transfer method and the transferToFixedSize method? We decide that it should. That’s a change. Should the new accessor be named immutable or mutable? There were interesting arguments each way. We resolved immutable, which is what the Stage 2 proposal already was, and we did that for easy upgrade, basically for feature testing. That way if you write code, you check if thing is immutable and you’re on an older version of JavaScript that does not implement the proposal, then the answer will be falsy. Then should we add a method sliceToImmutable by a analogy with slice, and the reason that -- the strong motivation for this is without heroic implementation tricks, if you have an immutable ArrayBuffer and you do a sliceToImmutable on it, it can give you back a new immutable ArrayBuffer with zero copy, given that the original was also immutable. And that can be a window into it or -- and then that enables you to then, as we’re going to get to structured clone, transmit that between agents, both zero copy, but without giving the other agent access to more than the window in your slice.

MM: Okay, there is a fourth normative issue that we put on the table last time, which is order of operations, which includes when to throw and when to silently do nothing. We purposely did not close this, although we wrote the spec text for concreteness using our preferred solution, but that is not a strong stance that we’re taking. We’re leaving this purposely open because we want to guide it primarily to implementer feedback. If an order of operations allows implementers to do some simple and high speed thing, and another order of operations interferes with either existing implementations or optimization opportunities, we want to take all of that into account before resolving this issue.

MM: So with those three issues closed, transfer to immutable has a new optional length argument, parallel to transferToFixedLength, sliceToImmutable looks like slice, except it produces an ArrayBuffer of the immutable flavor, and we did not change the name of the immutable accessor. The corresponding immutable ArrayBuffer flavor is much like what you saw last time, but of course extended with the new sliceToImmutable method, so the two slice methods are still enabled and in the immutable buffer flavor because they are query only. All of the mutation methods, all the transfer methods and the resize methods all throw. And of course, the immutable accessor for this flavor says true and byteLength and maxByteLength are the same.

MM: Now, we’ve also listed a bunch of non-normative issues, or non-normative for Stage 2.7. These are issues we want to put on the table and start pursuing now. One of them is applicability to WebGPU buffer mapping. We got feedback from WebGPU folks, and the answer is no, because of the nature of immutable ArrayBuffers, they do not apply to what the WebGPU folk need, but the limited ArrayBuffers, by Jack Works’ proposal, related that proposal, that I believe is scheduled after this proposal–

USA: Yep.

MM: —is a good time to get into more discussion of that. Mentioned proposed integration with structured cloning, we did a lot better than that. RGN wrote a proposed mod to the HTML spec, specifically the structured cloning part of the spec, and asked specifically how to explain how structured clone would deal with immutable ArrayBuffers. And of course, there were some details there, but the overall result is exactly what you would expect.

MM: Zero copy operations on the web, this was a mixed bag. There’s a lot of issues that this breaks down to, a lot of subissues, which we will then get into in the next two slides.

MM: And then “update shim according to issue resolutions”. So I wrote the previous shim, and I updated the shim to track what the proposal is, and we not only have an implementation of the shim, but we have a bunch of codes that makes use of the shim for useful purposes, and it gave us some lesson on what this is like to use, which, you know, the punch line being it’s pleasant to use.

MM: All right, zero copy operations on the web. So I am not going to go through these one at a time. I’m putting the slide up right now mostly to give you guys a chance to scan your eyes over them and to notice things you want to ask about when we break for QA. However, I’ll mention a few particular things.

MM: On issue 300, we got a response just -- that says one hour ago, just in time—“overall I’m supportive on this, however, I’ve got a bunch of open questions about whether it can be made compatible” with what they’re already doing, which is somewhat entrenched. I don’t think that this points out any obvious incompatibilities, just uncertainty about whether it could be compatible. So I’ll take this as overall guardedly positive.

MM: And on Wasm issue 1162, it says “we discussed immutable ArrayBuffer at the CG meeting last week. No blocking concerns, and the proposal is orthogonal to Wasm linear memory for now”. So no particular connection or help to Wasm, but no interference either. So no blocking concerns. And the proposal as it stands doesn’t preclude read-only memory to Wasm.

MM: The second page of the prior proposals that list the zero copy concerns on the web and related issues. So the web transport issue 131, I initially got a strongly negative from Domenic that was supported by, I forget who else, but two people came out with a strong "unlikely that it would apply” because the web transport issue is between address spaces. And strategy right now is to copy buffers when communicating buffers between address spaces. And for small and medium size buffers, that makes perfect sense. However, when transmitting huge immutable ArrayBuffers, we should keep in mind the possibility—implementer’s choice since it makes no observable difference—the possibility of transmitting them by memory mapping rather than copy language. For a huge enough ArrayBuffer, that takes a long time rather than linear time, so let’s say something in multiple gigs.

MM: And it just so happens that over lunch, I was discussing with SFC the CLDR table, which is a great example of a big data table, and there will be many big data tables that are of interest to many programs, many written in JavaScript. And these CLDR tables can be multiple gigabytes. So once a data table gets into the gigabytes, transmitting that by mapping, despite all of the weird operating system shenanigans, mapping is clearly more efficient than copies. Whether it’s worth the complexity inside the implementation is another matter that I will let implementers worry about.

MM: And in light of the possibility of taking big, big data tables and sharing it zero copy, a follow-on proposal, which I purposely did not include in this proposal, a follow-on proposal that I want to trail behind this proposal, is to add a new import type, which let’s call it binary, that if you import a file binary, the result of the import is an immutable ArrayBuffer. So that would be the one case where you can end up with an immutable ArrayBuffer other than by populating a mutable ArrayBuffer and then doing a transfer to immutable. This would directly be born as an immutable ArrayBuffer. So it’s basically a binary asset to be loaded by a program. And I think this is in the world of multiple import types, I think this is very natural.

MM: I awkwardly, because I don’t totally understand the tool support for looking at web standards, I did some screenshots of the diffs of RGN’s modifications to the structured clone algorithm, and are showing the excerpts that are have to do with immutable ArrayBuffer, so this is obviously just adding a case for the immutable ArrayBuffer to this branch of cases here. This over here is also -- yeah, the same, that you can share ArrayBuffers or immutable, there’s already a carved out sharing ArrayBuffers without detaching, so immutable ArrayBuffers can also be shared without detaching. Obviously sharing ArrayBuffers are already detachable and immutable buffers are already non-detachable. And then finally including immutable ArrayBuffer in the your explicitly enumerated taxonomy is kind of array, so if you have questions about the HTML language here; hopefully RGN is on the line and can answer those.

MM: Okay. Implementer feedback, we would like more of this, but my understanding is that we don’t need more of it to cross the 2.7 threshold. We have a full excess native implementation of the entire spec. It looks good, and it does not suggest any changes. We have our own shim implementation at Agoric together with practical uses of it, and Agoric uses both Node and V8 for running some of our code, and uses XS for other code. So on XS, our plan of course is to use their native implementation, and we wrote our usage code so that it would work with both.

MM: The shim, you know, got updated to follow the changes we made to the spec, but the shim has this crucial line that it falls short of the proposal in the following ways. Basically the key thing is that there’s no practical way for a shim to emulate efficiently freezable TypedArrays, because much of our motivation going into this is there’s no way to create a freezable TypedArray in the language as it is now, so, therefore, there’s no way to shim it.

MM: Okay. Approval steps. Thank you to JHD and KG and SYG for the approvals, for MF, I just talked to him verbally in the hallway. He says he defers to KG and SYG. And we got an email from WH that says “looks good to me, with just one comment: why does sliceToImmutable diverge from slice when _end_ < _start_?” So I think I agree with WH’s opinion here. But this is in the domain of the purposely left open issue of order of operations and which things throw what. So if WH wants this change made before approval, I’m perfectly happy to do that before this meeting is over. But in any case, that’s where we stand now.

MM: Just as a reminder, this is the checklist of what’s still left for Stage 3 and for Stage 4.

MM: So that is the presentation, and now I will take questions, and let us all stop recording.

JSL: Just kind of to get my head around the mental model, is the expectation that the
`immutable` property would extend out to the host, and ArrayBuffer is passed down the native code, like V8, would that be -- could it be immutable as well?

MM: So the immutability represents a two-way guarantee. It’s a guarantee that the JavaScript code cannot modify it and it’s a guarantee that the data contents are stable, so because of that guarantee there’s need to worry about changes from under it. So how an implementation implements that guarantees so that holds across all the participants in the same zero copy ArrayBuffer is up to the implementer, but if the implementer fails to implement that guarantee, then that implementation would not conform to the spec as we’ve written it. And that’s on purpose. And the reason I’m going into this in some depth is there a lot of discussion on the issues, which I recommend looking at, about use of mprotect (?), use of memory manager protection making the pages actually read-only with nobody having a read-write copy of it. And that’s optional as long as the guarantee is adequately upheld by the implementation, but it’s certainly a belt and suspenders approach, and probably only to be taken on huge ArrayBuffers, where we can afford an immutable intervention. We wouldn’t do it on a 4K ArrayBuffer.

KG: I think this is probably worth calling out in the spec, though, just as an editorial note. You can technically read it off, the fact that hosts aren’t allowed the change immutable buffers, and you can technically read this off of the essential invariants for internal object methods when something is defined as non-configurable, non-writable, then one of the variants that is required from everything is that it can’t actually change value, but this is a kind of hard thing to infer, and very few people are aware of the invariants.

MM: We would be overjoyed to make this more explicit.

KG: To just a note, somewhat.

MM: So, yes, let me just ask, since we are asking for 2.7.

KG: That can happen later.

MM: Okay, great. But we would be overjoyed to be more explicit about that. Since it can be inferred, I have a procedural question for you. Does being more explicit about something that’s already implied from the spec language, do we have to tag that as a non-normative note or can we make it normative?

KG: I don’t think that it makes sense to talk about notes being normative.

MM: Okay, we -- can we state it normatively?

KG: You can state it normatively if you want, but I would probably just put a note that calls attention to the fact that it is already normatively required because of other things.

MM: Okay. Assertions in the spec are normative.

KG: No. Assertions are strictly editorial. They describe properties which already hold. That, in fact, if you click on assert, it takes you to the definition, and the definition of assert says this is describing a property which already holds. If this property does not hold, it’s an editorial error in the specification. It is something that is necessarily true because of other properties or other guarantees that are normatively spelled out.

MM: Okay, I believe you that that’s what the current language says. I’ll just say that I’m shocked because I was in discussion, and that’s not what I thought the conclusion was.

KG: What discussion?

MM: We thought that both things that had to be in agreement were both stated normatively, such that if they disagreed, then the spec was in an inconsistent state and one could not make a normative derivation from the spec until it was fixed.

KG: Yes, when an assert does not hold, that means that the spec is incoherent, but it’s not because the assert is a normative requirement. It’s because the assert is said to be describing a property which holds, and if in fact that property does not hold, then, like, by definition the spec is incoherent. And usually you need to fix that by making a normative adjustment. Sometimes you can fix that by changing the property which is asserted, but if the assert doesn’t hold, the spec is incoherent.

MM: I would love to keep talking about this, because it’s not quite what I understood, but let’s not take up our time in this.

CDA: Yeah, just noting we have technically only a couple minutes left. We can go to the top of the hour, but there are three other items on the queue. SFC?

SFC: Yeah, just to be brief, I love that your slides, MM, went over all the resolved issues and previous proposals, how you gave a mention to the CLDR case, that you’ll hopefully work towards as you move forward. And I really appreciate how you moved thoroughly over all the issues in the milestones, and I feel confident in the quality of the proposal.

MM: Great. Thank you.

WH: So I just wanted to talk about my comment about `slice`. If we were designing `slice` from scratch, I would agree that throwing on _end_ < _start_ would be sensible, but we already have lots of instances of `slice` in the language, and I think it would be better to stay consistent with them. This should be resolved by Stage 2.7, because this has nothing to do with implementation experience.

MM: Okay. So let me first of all just ask all champions in earshot, which I think is all of them. Are all of us agreed to make the change that WH suggests? He has talked me into it. It is better to be consistent with the mistake than to fix the mistake in one place and not the other.

RGN: I’m convinced.

MM: Okay. Great. RGN, since you’re the steward of the actual spec language, could you do that before this TC39 meeting adjourns?

RGN: Certainly.

MM: Great. Thank you.

WH: If you commit to fixing this, you can mark me as approved. I’m not going to be here on the last day of the meeting.

MM: Okay, thank you. I will mark you as approved and be sure to make that change. (Note: both done)

CDA: We have less than 3 minutes left and still we have four items on the queue. OMT?

OMT: Yeah, I just wanted to say I haven’t read the whole spec text, but I like that the would be useful to my implementation.

MM: Great, thank you.

CDA: I sorry, I didn’t notice that was an end of message, but thank you for the message.

SYG: I said this in my review and I would like to review this for the stream, I consider this a Stage 3 blocker in that I do not want to advance to Stage 3 until that PR is reviewed and merged. It is fine to merge things that take dependencies on not yet standardized JS features, that has happened in the past in HTML, so that is not an issue. I don’t think there’s much reason for concern there, but I would just like to point that out, that I would like to add that extra constraint for moving from 2.7 to 3 in addition to the test262 tests.

MM: Yes, understand. The HTML spec being approved on the HTML side is a blocker for Stage 3. I don’t know if you want to call it normative, but it’s a blocker in any case. I do have a question for you. Have you looked at the structured clone spec text that RGN wrote, and do you have any concerns with them specifically?

SYG: Only at a glance, and they seem fine to me. But, you know, getting it reviewed and merged into the HTML spec also involves I think in the issue, in the template that RGN made there, a bunch of checked boxes so, yeah, it’s good to get them checked.

MM: Great, thank you.

CDA: Ashley just has a reminder that the slide link is missing on the agenda. So if you have a chance --

MM: I’ll fix that before the TC39 meeting is over. (Note: Was fixed a few days after)

CDA: Great, thank you. And then last one is KG.

KG: Yeah, sorry, this -- I want to walk back the claim I made previously about it already being fully implied that hosts couldn’t modify immutable ArrayBuffers. Technically that only applies when someone actually observes one of the values. So in principle, a sufficiently strict reading could allow mutability.

MM: Wow.

KG: Like, between the time that you create it and the time that you observe it. So I think it sounds like we can just have consensus that the intention is that it be immutable, and we can state normatively it is immutable. And that doesn’t need to withhold 2.7, because it’s fairly straightforward to state. But, yeah,… (Note: fixed in spec)

MM: Great. Thank you.

CDA: And we are. JLS has a message, just noting the web crypto might need to be updated to account for immutable ArrayBuffers as well. Eg, `crypto.randomArrayValues` prens (?) TypedArray. Not Stage 3 blocking, I would think.

MM: Thank you. Do I have Stage 2.7, first asking for—we have plenty of affirmation on the QA there. Does anybody object to Stage 2.7? I think I have Stage 2.7. Thank you.

CDA: Okay. I guess that’s a +1 from DE on the queue.

### Speaker's Summary of Key Points

* All prior normative issues dealt with, except order-of-ops, to be driven by implementor feedback.
* Lots of feedback from html side, mostly positive, no blockers

### Conclusion

* Got all approvals needed
* Got stage 2.7
* Much still needed on html side to get stage 3

## Limited ArrayBuffer

Presenter: Jack Works (JWK)

* [proposal](https://github.com/tc39/proposal-limited-arraybuffer)
* [slides](​​https://docs.google.com/presentation/d/1u6JsSeInvm6F4OrmCSLubtDvFVdjw1ESeE5-c_YflHE/)

JWK: I am going to talk about the limited ArrayBuffer proposal. Here is the timeline of some other proposals. The oldest one is the read-only collection by MM, and it’s still Stage 1. Two years later, I proposed the limited ArrayBuffer proposal, that is the original version, which will be talked about later. I referred to this proposal (when designing the API), and at the same time, the resizable ArrayBuffer came in, and it went very quickly. Another proposal, `ArrayBuffer.transfer()`, was split out from the resizable ArrayBuffer. Then in December, MM proposed the immutable ArrayBuffer again. Therefore part of the motivations are replaced by the immutable ArrayBuffer proposal. And the original design of the limited ArrayBuffer proposal is, like, trying to freeze things in place. But immutable ArrayBuffer and transfer brought us a new API design style, transferToImmutable.

JWK: Here is the original motivation of the limited ArrayBuffer proposal. The first one is, that we cannot make an ArrayBuffer read-only, which means the underlying bits can always be changed. The second one is, that you cannot give others a read-only view to the ArrayBuffer, whether the underlying ArrayBuffer is writable or not, and keep the read-write view internally. And the third one is, you cannot give others a slice of your ArrayBuffer that the holder of that view cannot expand to the whole ArrayBuffer. Let’s say, for example, there is part of memory in WebAssembly, and you want to give a slice of the program memory to the other parties, so they can change it. But you only want them to change the memory in the given slice, which is not possible today.

JWK: Since we have an immutable ArrayBuffer today, part of the motivation is replaced. The first one is replaced by transferToImmutable. And for the other two usages, there are some potential use cases, and let me introduce them. The first one, “give others a read-only view while keeping the read-write view internally”, is the WebGPU case. In this case, they need to expose some device memory and they do not want JS programmers to change it. Meanwhile, the memory itself might be changed by some host code. Therefore we cannot expose them as immutable because the contents will change.

JWK: In this case, I think this is very suitable for the limited ArrayBuffer proposal because we can assume there is a read-write ArrayBuffer but never exposed as a read-write view. There is no way in the JS world that a JS programmer can modify the ArrayBuffer, but the ArrayBuffer itself is not immutable. The mutable handle is kept by the host, in this case WebGPU and they can only receive a read-only view of it. The benefit of this is, that WebGPU does not need to introduce a new kind of exotic view of ArrayBuffer that cannot be created in the user-land.

JWK: Another use case is a limited range. I just mentioned before that in some cases, you might want to share a slice of memory, but not all of them, to another party. I wonder if these two use cases still sound compelling, and if it is, I will update the motivation to remove the first one, since it’s already taken place by the immutable ArrayBuffer proposal, and continue investigating the other two. And if both of these use cases are not compelling, I may want to withdraw this proposal.

KG: I think this is still very valuable, especially the read-only view. So like read-only buffers, there’s several web specs that have expressed interest in this. I think it’s still worth doing.

JWK: Thank you.

PFC: So just to check my understanding of what a limited ArrayBuffer is for, is it correct to say it’s a read-only buffer that is mutable by other code –

JWK: This is the third one, the limited range. Wait sorry this is the second one. Yes. The limited write.

PFC: We get the same thing in the third case, though. Right?

JWK: In the third case, you can give others a read-only or read-write slice. Those two features are unrelated to each other. There are two things that are limited—we try to limit in this proposal the first one is the read or writability, and the second one is the range. And you can limit write or you can limit range, or you can limit both.

JSL [via queue]: definite + 1 to keeping in proposal. Very valuable.

MM [via queue]: still looks quite useful + 1 to keeping it at Stage 1.

JRL: So in dealing with TextDecoder and WebStreams and other APIs that receive typed arrays. Any time you hand off a TypedArray to another piece of code, if that code doesn’t track the byte offset and length, it’s going to read the full TypedArray. It is very common in user code to just call `decode`(buffer)`, and now it decoded everything.

JWK: Yes

JRL: I have had that happen many times where I pass something to a library that takes a TypedArray, but it does not respect the bounds I placed on it. Having a limited view window where it cannot access anything outside of the window I gave it would be so as much cleaner for a lot of APIs.

JWK: Yes. I have also hit by this problem.

SYG: So just a word of warning. The implementation cost could be high. I am not sure how you would like to expose the capability to have a limited ArrayBuffer that aliases another ArrayBuffer. There are several layers of implementation for ArrayBuffer / ArrayBufferView. It sounds like you have to do that to other ArrayBuffers. And I think it’s too early for me to really give any criticism of that. That might be the best design here. But that kind of buffer management in engines is kind of scary. And the cost here could be high. We should be mindful as we are designing for the use case.

JWK: Yes. I will try to make it simpler for the implementation as possible. Like, in the old version, it says freeze in place, which might be very complicated, but now it’s changed to something like transfer. So it will be much more—at least they’d share the same as transfer.

SYG: But transfer detaches the source. How do you provide a smaller view that is aliased to the same buffer without detaching the source?

JWK: I have an API in mind, that might look like this

```javascript
view = new Uint8Array(buffer, { readonly: true})
view.buffer // undefined
```

SYG: I see

JWK: So you cannot retrieve the whole ArrayBuffer from it to re-construct a read-write view.

SYG: I see. It doesn’t sound so bad.

MM: Thank you.

CDA: Michael?

MLS: I want to reiterate a little bit of what SYG is saying. If you are going to use always like it’s likely easier for an implementation to share on OS page boundaries, beginning and ending would likely require doing some range checking for any access. So it could be more costly. This actually hold as little bit to what just Mark presented in his proposal.

JWK: Does that mean, if we tried to align things (e.g. align by 4k), they can be easier to share?

MLS: (???) on page boundaries, 4K or 16K, something like that. And the underlying OS calls also do things on the same kind of boundaries.

JWK: Thank you. I am not quite sure about the machinery of this.

JWK: It looks like many delegates expressed that we should stay in Stage 1 and continue to express the solution. I guess my topic is done. Thank you.

CDA: Thank you. The proposal remains at Stage 1.

### Speaker's Summary of Key Points

* Original use cases: freeze arraybuffer, limit write (of view), limit range (of view)
* Now: Remove the first one. Limit write: use case by WebGPU, limit range: use case by WebAsm

### Conclusion

* Many of delegates expressed support, so not withdrawing.
* Shu expressed concerns about impl complexity.
* MLS expressed concerns about impl complexity of limiting range.

Stay in stage 1. Continue exploring.

## `Number.isSafeNumeric`

Presenter: ZiJian Liu (LIU)

* [proposal](https://github.com/Lxxyx/proposal-number-is-safe-numeric)
* [slides](https://docs.google.com/presentation/d/1Noxi5L0jnikYce1h7X67FnjMUbkBQAcMDNafkM7bF4A/edit?usp=sharing)

LIU: Okay. Hello, everyone. I am LIU from AliBaba, and this is my first proposal at TC39. The proposal is going to add a new method `Number.isSafeNumeric`. The method is going to test JavaScript strings converted to JavaScript numbers. At first, not validation part. In web development, validating strings that can be safely converted to JavaScript numbers is a common requirement. Here I am going to list a use case.

LIU: The first use case is API data. For our use case, we need to handle it with normal string and need to process with some values just like null, undefined, empty string. And our backend system is used JavaScript. We need to process with Java.Long for the overflow problem. And the second use case is form input validation. We need to handle with falsy values, white pace and unexpected characters. And the third is financial calculations. When we try to convert a string to number we face a new problem, the mathematical changes in a string to number conversion. And the last is data processing. We always need to write some complex validation logic for validating strings. So I think validating strings directly impacts the stability, data accuracy and user experience of web apps. But current solutions have significant limitations. Let’s look into the problem.

LIU: The first problem is inconsistent built-in methods. I choose method number, parseInt and parseFloat. Just look into the table. When we input an empty string or string just containing whitespace, the number method will output zero. the parseInt and parseFloat will get another number. It’s inconsistent behavior. And about leading decimal point handling or scientific notation, both have some differences. So I think of the first problem. Inconsistent behavior of built-in methods. This will increase implementer overhead because the variable always needs to remember which method should be used and need to handle with each case manually.

LIU: The second problem is hidden value change of built-in method. Here I am giving two examples. The first is big numbers, which can be bigger than integer. You can see when we transform string to number, the mathematical value changes due to double format. The second example is floating point numbers with 19 significant digits. The mathematical value change and never can be converted back. So we think, this is another problem. The hidden mathematical value changes and the user doesn’t get any running notification. So the web developer will try to use this value. They will get the wrong result. This will increase the web developer (frustration?)

LIU: And the problem exists when you want to write down custom validation function. Here I am going to find the question from StackOverflow. How can I check if a string is a valid number? I use the top-rated answer and try to check with the numeric string. You can see the smallest number, still have the same problem. Math [KA*L] variable string, convert string to number. So I am trying to look at NPM libraries. I choose validator and is-number. Both have a large number of downloads of the mathematical number values converting string to number. This is because I think they only check that the numeric string satisfies the decimal format. But they are not looking at the value safety problem. This is a bad experience because we may have wrong value or some data consistency issues. Like backend, numeric string. When you convert to number or convert it back, the value changes. So this is a mismatch.

LIU: So in here, I like to provide a new solution called `Number.isSafeNumeric`. It has benefits. Ensure input is a valid numeric string, reducing unexpected behaviors during parsing and subsequent operations. The second is avoiding the string’s mathematical value changing during string-number conversions. Developers may not be aware of this. But I think we can avoid this problem. The third is reducing developer mental overhead. Developers may not handle the case manually. We just want to provide a simple and reliable way.

LIU: The key of the method is safety definition. In here we the definition to pass, one for we want to—this the (???) the string by default, which means, it should only contain ASCII digits with optional single leading minus sign. It must have digits for both sides. And with no leading zeros, except for the decimal numbers smaller than 1. No whitespace or other characters allowed. You can see the examples.

LIU: The second part is, value safety. I think the most important of this is, the mathematical value of the string must be within the range of MAX_SAFE_INTEGER. And the mathematical value represented by the string must remain unchanged through the string ToNumber and toString conversation process. Just like the code shown below. Mathematical value of the string. This means the mathematical value is preserved, and we avoid some problems of mathematical value change.

LIU: And after we create a list proposal, we receive many questions. So I created FAQ part. The first question is, why use strict number format rules by default and not support other formats? First, we think about validating decimal strings we focus on fundamental, in JavaScript programming is widely you would. And we can ensure consistent parsing across different systems. Like 1e5 is 10,000 in JavaScript but may be treated as a string in other systems. So this may produce some unexpected behaviors. And reduce complexity in data processing and validation.

LIU: And first, we also consider adding a second parameter to support more formats and the parsing options. Firstly, we can support scientific notation with the format option. We can yield more decimal. The default option. So it only accepts decimal formality. Second, we can use format number, aligns with decimal and scientific notations supported. And it also can support more flexible parsing with a loose option which supports with leading sign—leading parse sign, leading decimal point, with whitespace. Less behavior is aligned with JavaScript numbers. Because when we talk about many people, we found there are already many systems or many older code, already accept some non-standard decimals. But they accept by JavaScript number, it’s supported with more options, solve less problems in the future

LIU: And another question; how to handle subsequent numeric calculations? I think this proposal is focussed on ensuring numeric string representation is safe to be converted to a JavaScript number. So for high-precision, decimal calculations, you can refer to decimal libraries like decimal.js or the upcoming proposal decimal. How that does that relate to decimal? The decimal proposal creates a new type of process calculations. But this proposal just checks the string can be safely converted to a JavaScript number. Question?

WH: Having read through this proposal, I have strong concerns with this breaking interoperability. This creates the problem of converting a Number to a string that’s parseable by isSafeNumeric. And the way this thing is defined now, that’s impossible. It’s impossible to take a number and convert it to a string for which isSafeNumeric will return true. Without that, you have no interoperability and I am not sure what you have accomplished. Also, there are other issues in here, such as the mathematical value restrictions that make it so 0.1 will fail, since the mathematical value of 0.1 is different from converting the 0.1 to a Number. Other things fail which shouldn’t. I don’t understand the MAX_SAFE_INTEGER condition. It has nothing to do with whether the conversion is exact or not.

WH: So I would like to define some principles for this. One principle is that there must be some simple way for a developer who has a Number to be able to print it in such a way that isSafeNumeric is true on that string and parsing it will return the same Number.

LIU: Let me look into the question. Yes. I think the safe numeric is determined to—I have to consider this problem. I think numeric string considered to be safe is—let me check the proposal. Is satisfied with string remain unchanged through the string number string conversion process. When a JavaScript strings convert to a JavaScript number, there may be something stored in the JavaScript number system, may change it.

WH: An example, 0.1 will fail this.

LIU: 0.1 may be stored in JavaScript, but I think it can be converted back when converting to the string.

WH: Okay. Sorry, I see. You are doing ToString of a ToNumber. But ToString is not unique so there are plenty of numbers for which this will fail.

MF: Yeah. I support everything WH said. As well, I think this proposal is pretty confused, and not very well motivated. It was claimed the mathematical value changes, and, you know, what that means is, I think, a string representation of a number would be given that is not the exemplar of the range of reals that is represented by that particular float. But, like, that doesn’t mean it’s a worse number in any way. That’s how floats work. You are referring to a range of numbers. I don’t think this actually is practically a useful thing we are talking about. I don’t like the allusion about `Number.MAX_SAFE_INTEGER`. We are not talking about all of the integral floats below it as safe, we are saying that is the upper bound of where you can do a +1. And that’s a single point, rather than talking about all of them. I don’t think it’s really well motivated, and I am not convinced by what I am seeing.

LIU: I mean, if maximum—with one—not one doing the mathematical value of a numeric string representation, when converted ToNumber and the change and the number can be converted back, so I think this is a real use case.

SFC: Yeah. Thank you for the presentation. I will be honest, when I saw this on the agenda, and when I saw the initial repository, I was, like, … I am not sure this is well motivated. But actually, your slides and the evidence you presented showing how, like, users frequently do this operation wrong, and how, like, highly voted answers on StackOverflow are also wrong, makes the motivation to me seem more compelling. So thank you for the presentation. I appreciate that.

SFC: I agree with what is on the slide right here. Like, does the number of the round trip through the string, is this the correct invariant? This is an invariant that I think 90% of the people in this room understand. But, like, the average JavaScript developer doesn’t.

SFC: The thing about max safe integer is not necessary. That seems like a discussion that can be had, you know, in Stage 2 or something like that.

SFC: I had one possible suggestion, which is, like, having the function return a boolean seems awkward—I was wondering if, like, we can have a function like parseSafe. There’s already parseFloat. There can be parseSafe which does this and returns a number and throwing an exception if it’s not safe.

SFC: Generally, the motivation about, well, you have user inputted numbers and things and number that comes from a bunch of weird sources and I want to make sure that you are not losing data, you are not losing people’s financial data. It seems like there is something there. Thanks for the presentation.

LIU: Thank you. I think for the API names, we have considered many options. And I think because user already receive some just like some weird string, they want to identify if the string can be safely passed. So I use isSafeNumeric. Thanks for your response.

OMT: Yeah. I was going to say, I agree with Shane. But I think it would be nicer to use it as it returns the value if it’s valid. But I would say, instead of returning a bool, you just do not-as-NaN (?) parseSafe. Like the parseFloat functions.

JDH: So this is I guess a different question that probably touches on the same thing that SFC and OMT just talked about. I was asking, what are the use cases where you need to know if it’s safe? But you aren’t trying to transform it to a number. If there are some, I would love to know about them. If there are not, it’s a parse method that would be more appropriate. But I just—also, I think I’ve put the queue item on, I think this slide, the way I normally do this when starting with a string, I convert to a number and back to a string and see if it’s the same string. If it is, I am good. If it’s not, then I do my error handling, whatever that means. And that doesn’t strike me as something that is difficult to get right if you are starting out with a string. And any number that is so large that is using exponential will be revealed by this process and so on. So I guess, the first question was what are the use cases? The second question is, why is, like, take out the mathematical value part and why is that === expression not sufficient?

LIU: Most use cases, do you mean we just want to determine the string can be represented in, say, because we when we use string, we may use it in subsequent operations, just like some calculation or any other things. If a string variable means unsafe, we think we should not handle it. Or just use some high precision library for whatever your use case.

JDH: Okay. So I guess that makes sense. Are you trying to avoid the costs of the ToNumber? Because that check would still give you that—if the value wasn’t the same, then you know you need to do something different. I don’t know if that ToNumber is costly. It doesn’t seem like it would be, but… I don’t know.

SYG: So I want to +1 what WH and MF are saying. I’m also confused by the motivation around mathematical value. Maybe that could be cleared up if the actual property you want is around string. I have concerns about—I don’t know how to build intuition about this set of rules—is this the right set of rules. You have pointed to, there’s some user validation use case. But then you made some opinionated choices like, you can’t skip the initial zero. It has to be `0.1` and not just `.1`. Why is that the right choice to make in the thing for user validation? If I want to accept `.1`, because I want my users to type `.1`, I am out of luck. Why does this meet the bar for standardization?

LIU: Yes. You know, when we try to use three rules, because we think it’s used by users, so it’s easier to understand and it’s the standard for decimals. With some trailing zeros or other format, I think it can be converted to use a second format, this is one choice, by default or just what JavaScript number does. Maybe loose by default. Here we chose strict by default, because we think that is what the developers want.

SYG: I think I need more than an assertion that this is what developers want.

LIU: I think we need more time to investigate our list. Because by default, when you look at the string, you can think this is right. And trailing zeros is not forbidden. So I think trailing zeros is rarely accepted by the rules.

PFC: Thanks for the presentation. I thought it was very clear. And I would support this proposal going to Stage 1 for exploring the problem space. I do want to say that I am skeptical about this particular definition of numeric safety, especially if you go to slide 10, the one you were on a moment ago, I am skeptical about why 1234.5678 is safe, the bottom one on the left is safe, and 0.123456… on the bottom right is not safe. Because when I think about parsing a string, building a mathematical value different from the number and the string, that’s—that’s the case for both of those. And so I would think both need to be on the same side of either valid or invalid, or we need to define it in some way that doesn’t reference mathematical values. So yeah. I think it would be crucial before Stage 2 to sort out which semantics we want exactly. And would like to see insight into what use cases people want for this. So, like, if you want to dine like here on the slide, 1234.5678 is safe, what are people using that number for? If they determine that that is safe? Even though the mathematical value of the 64-bit floating point is not equal to that string. So yeah. Before Stage 2, I would be interested in seeing more of what this is used for.

LIU: Yeah. Thank you. I think we need more feedback about the list values safety definition. Before we submitted the list for this proposal, we just accepted some questions. 1234.5678 should be a safe value. Because when we consider the ways of rare number value, the number start in JavaScript changes. So it may be unsafe, but in developer mind, I just input a normal floating numbers and we convert it back, the list should be used. So I think although maybe we have some precision lost, but when you convert it back, I think it should be safe. But the list values safety definition is still the current solution. So I think we need to find a more appropriate solution for this.

SFC: Yeah. Just to add on to the bottom two rows there, I think the invariant that is intended here, especially given that it’s about the string, you know, a particular instanceof a float64 represents, you know, an infinite amount of number. But there’s exactly one of them—well, WH said, there’s not exactly one. But there’s one number that, like, is the representative of that equivalence class. And, like, on the left, 1234.5678 is the representative of the equivalence class. That represents the equivalence class. The number on the right, it’s not safe. But I agree, it’s worth writing down very, very, very specifically what we’re actually testing for.

???: It’s the shortest value.

???: I think that’s an interesting recommendation.

LIU: Yes. I think JavaScript has maybe the shortest decimal formatting of numbers. So I think the list is same problem of—because we just want to convert a string to number and convert it back from point, this should be safe. But any better algorithm or any better solution, I think we need more time to investigate.

WH: In regards to SFC’s point, it would reject `0.10` because it’s not the shortest representation of `0.1`.

WH: I do want to emphasize the ability to round trip between numbers and safe strings is essential. So I would like to see what techniques you would have for converting a number to a safe numeric string. As this is now, it’s impossible. You can make it possible, but I do wonder about numbers with very small or large exponents.

LIU: Actually, here is the problem we’re facing. When we try to compare with strings, the format will change just like the shortest decimal representation. 1.10 will become 1.1. 0.10 will become 0.1. It’s not equal. So we are defining it as mathematical value. But currently, there’s no way to get the mathematical value of the spec. So this means, slides added code. So I think we need to find a better way to compare with real mathematical value, but another search string representation. Yes. This maybe needs more time just to getting more feedback from how to get a real mathematical value.

WH: I was addressing SFC’s point, which was to require shortest representation.

SFC: Just a small note on my—one issue, if you go with the definition of being the shortest, there are cases where there’s two values with equivalent length, those are the same equivalence class, so we need to think about how we handle those. Do we take the one that is lowest, highest, or the one in the middle? If that’s what we decide to do. I have an example that I can post in an issue somewhere.

KG: Yeah. To add on to that, not to respond. Strictly speaking the spec allows implementation a choice of what toString does, probably the same cases. Where the last digit is not necessarily defined by the spec and it has implementations can do whatever they want. Which is not something to reify here. The spec could be made not to give implementations freedom here. I don’t think that there is an actual difference in implementations. I could be wrong. But there is a suggested definition in the spec, which is I guess, whichever one rounds to even, I think. But it’s something to address before using the ToString definition.

LIU: This is the last question. Can we promote this proposal to Stage 1?

CDA: Just noting there was some voices of support for Stage 1 earlier. We have +1 from DE. Some folks are asking for the problem statement.

KG: In Stage 1, we are agreeing on a problem statement that we are interested in exploring solutions for. It is not clear what the problem statement here is. Can you try to say in a sentence what is the problem we’re trying to solve?

LIU: We’re trying to solve a problem. This is, what you use is not what you get. Because we know whether the testing string—whether testing the string is writing a JavaScript number or just converting string to a number is a requirement and big number or small number with more than 17 significant digits, the mathematical value changes. So you are trying to display something but in reality the number changes so you cannot get the clear result. I think less most important part of the spec. What you see is what you get.

MF: I don’t agree with that statement. What you say you want is what you get. You may have, like, additional digits there that you don’t feel are represented, but trust me, the float you get is representing that number that you are writing down. That’s why I feel this proposal is still confused if that’s the problem statement.

RBN: I wanted to point out to Michael’s comment, your comment is accurate if I am specifically converting a string literal to a number. What I see I expect to get because I wrote that. If I am doing input validation, I want to validate that the input that the user writes is what they are actually expecting to get when doing that calculation. I don’t think that’s accurate when talking about input validation which is what this primarily is a main reason to have this feature.

KG?: Ron, could you make a problem statement then? It seems like you have a good sense what it’s for.

RBN: I think I mentioned this, it seems to me that the goal for this is to validate that the input that you provide to the function would produce a number without any loss of precision, and if it cannot produce a number that is exactly represents what is written without loss of precision, it would return false.

KG?: I don’t know what loss of precision means, if we are allowing `0.1` as an input.

RBN: I can’t speak more to that unfortunately.

SYG: I am also similarly confused. The use case I heard in passing was that, if you cannot represent a thing as a double float64, and we don’t know what exactly that means, but suppose we did—then you would, like, dynamically use the representation, a user-land library or something? I don’t understand the end to end use case. If you decide the input is exactly representable, let’s take the most charitable reading we know, which is like it round trips to an exemplar string or something. Ignoring very small exponents(?). And you store it and represent it in your runtime as a number, as a float64, you are still opting into the world of floating point arithmetic later. Right? You’re storing the number to do stuff with it. Like, we can’t really—it seems weird that you would just try to verify at the input. There’s no way for us to guarantee that, like, you never lose precision, depending on what you do it. I am also confused on the use cases.

LIU: I think due to floating numbers being stored in double precise, the precision loose would happen when significant digits can not be stored. But also, with short, the decimal format, the JavaScript member will round to the correct value. So if the input value and the toString value is equal, I think they can be stored as safe. So maybe still precise loss happens. But this is maybe what developers want.

CDA: We have a couple of minutes left. For this topic and tore the day. MLS, did you want to chime in here?

MLS: Not only about the problem areas, I would also like to know the use cases.

WH: My position is similar to MF’s. I don’t understand the problem statement here.

CDA: So very little time left. So you do have support for Stage 1 from folks who feel like they understand, or have some idea of what that problem statement is. Noting that we don’t have a formal problem statement, like, stated succinctly. So given that, for the folks who would like to better understand the problem statement, are those concerns blocking at this point?

WH: The entrance criteria for Stage 1 include having a problem statement we agree on, and we don’t seem to agree on one.

SYG?: Sometimes we reject a proposal for Stage 1 because we have, like, understood what is being discussed and said that actually we don’t want to add that into the language. And that’s not what is happening here. We are not, like, rejecting the proposal. But I am not comfortable going to Stage 1 with a proposal that I don’t understand what it’s trying to do. Since that is the point of Stage 1. If it was just me, I would be happy to do it off-line. But it sounds like there are other people who don’t understand what we are trying to do. No, I don’t think it should go to Stage 1 at this time.

CDA: Okay. So the ask here, LIU, if you could, please, not right now in real time, but today, tomorrow, try and develop that succinct problem statement that the committee could consider, and then we can come back and ask for Stage 1 based on what that problem statement is.

>> That can happen at this meeting if we have extra time.

JHD: I have a queue item to request for that. Once you come up with the problem statement, could you file an issue on the proposal repo and drop in matrix and we can review it before we leave this week?

LIU: Yes. I can create an issue and post link to Matrix.

CDA: Let’s follow-up off-line and revisit later in the meeting. Ideally, tomorrow afternoon, if possible.

### Speaker's Summary of Key Points

* Still need consider about safety definition
* Provide more examples for this use case

### Conclusion

* Required to provide a 'problem statement' which succinctly describes the problem your proposal is intended to solve
