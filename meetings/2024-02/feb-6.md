# 6th Feb 2024 100th TC39 Meeting

-----

Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

You can find Abbreviations in delegates.txt

**Attendees:**
| Name                   | Abbreviation | Organization      |
| ---------------------- | ------------ | ----------------- |
| Chris de Almeida       | CDA          | IBM               |
| Linus Groh             | LGH          | Bloomberg         |
| Ron Buckton            | RBN          | Microsoft         |
| Gus Caplan             | GCL          | OpenJS Foundation |
| Ben Allen              | BAN          | Igalia            |
| Ethan Arrowood         | EAD          | Vercel            |
| Leo Balter             | LEO          | Salesforce        |
| Daniel Minor           | DLM          | Mozilla           |
| Eemeli Aro             | EAO          | Mozilla           |
| Bradford Carl Smith    | BSH          | Google            |
| Jan Olaf Martin        | JOM          | Google            |
| Caridy Patiño          | CP           | Salesforce        |
| Nicolò Ribaudo         | NRO          | Igalia            |
| Romulo Cintra          | RCA          | Igalia            |
| Philip Chimento        | PFC          | Igalia            |
| Kevin Gibbons          | KG           | F5                |
| Ross Kirsling          | RKG          | Sony              |
| Richard Gibson         | RGN          | Agoric            |
| Rezvan Mahdavi Hezaveh | RMH          | Google            |
| Duncan MacGregor       | DMM          | ServiceNow        |
| Shu-yu Guo             | SYG          | Google            |
| Daniel Ehrenberg       | DE           | Bloomberg         |
| Mikhail Barash         | MBH          | Uni. Bergen       |
| Jordan Harband         | JHD          | HeroDevs          |
| Chip Morningstar       | CM           | tbd               |
| Frank Yung-Fong Tang   | FYT          | Google            |
| Istvan Sebestyen       | IS           | Ecma              |
| Kyle Barron-Kraus      | KBK          | ServiceNow        |
| Rob Palmer             | RPR          | Bloomberg         |
| Luca Casonato          | LCA          | Deno              |
| Kris Kowal             | KKL          | Agoric            |
| Mark Miller            | MM           | Agoric            |
| J. S. Choi             | JSC          | Invited expert    |
| Michael Saboff         | MLS          | Apple             |
| Justin Ridgewell       | JRL          | Google            |
| Rodrigo Fernandez      | ROF          | ServiceNow        |
| Samina Husain          | SHN          | Ecma              |

RPR: San Diego is America's finest city.

RPR: we will start with approval of the last meeting’s minutes. The 99th meeting. Are there any observations to considering those approved? Not hearing anything in the room. And nothing on line we will consider that approved.

RPR: We also have this week’s agenda. So I believe that ready to adopt. Any objections? We shall adopt the agenda.

## Secretary's Report

Presenter: Samina Husain (SHN)

- Slides: See Agenda

SHN: So welcome to the 100th meeting. Thank you very much ServiceNow for hosting it. Thank you very much Rodrigo and also Reny who has been supportive to me.

Fantastic venue, the weather hopefully is getting better each day. My report, I will keep it short. We have a busy agenda. So let me do the usual update of the things we want to do.

SHN: I want to recognize the appointments that we have for ECMA management, the last time we had a meeting we had voted on the 2024 management. So we will talk about that. I also want to recognize the different members of TC39 the chairs and editors. If I have made a mistake on the slide, correct me. We have new projects that we have, exciting, our statistics, and then the usual annex of our latest documents. At any time you can ask me a question or meet me anywhere, I will be here for the next 3 days and clarify.

SHN: For our management, our management line has not changed as you are familiar with for 2023. Jochen Friedrich from IBM will remain the president. The Vice-president will be DE from Bloomberg. And treasurer Luoming Zhang from Huawei. The executive team, Michael Saboff, will be the chair as he was previously. We do have a vacant position in the current executive committee. If you are interested, you may nominate yourself or you think somebody else would be interested, and you want to nominate, please do let me know. From the ordinary members. Thank you for the clarification. And the non-ordinary members, we will have from EPFL. And PHE from Moddable. It’s also on the website it’s clearly noted. Let me know if you want to volunteer and be nominated. I want to recognize the chairs and editors. Thank you for the chair’s, CDA, for your work. I understand you will continue to be chair for the next year. Thank you very much for everything you have done and all of the reports you published. It’s done timely. For the editors, also thank you for your efforts. I have listed the editors as I understood them through going through GitHub. Please correct me if I have any errors. Thank you, all of your efforts are appreciated and I assume you will continue on for 2024. If I have missed somebody, do let me know. I don’t know who the editors are for 414 and the TRs or if there are editors right now or any activity going on. But you may let me know that off-line.

SHN: Very important coming up, the approval process, as you are all working extremely hard and have an addition in the June time frame. Our deadlines are the executive meeting on the 24th and 25th of April. By that point we want to of course propose to the committee the new edition you will be edition 15 of 262 and the 11th edition of 402. You do remember we have a 60-days opt-out period for the RF policy and 60-day review period. We start this in advance of the 60-days review period. So they are not completely overlapping, in case there’s any issues we have a bit extra buffer to handle it. So again, the suggestion is that late March, early April you are ready to propose the edition 15 and 11. If you chose to – short notice and you need more time, do approvals on postal ballot and that can happen. We do the in person review twice a year.

SHN: Some new projects going on which is really very nice for ECMA and I want to thank everybody. There are a number of people in this committee that have supported to make some of the projects happen and continue to support in making future projects happen so I want to highlight some things. TC54 "software and systems transparency", which is CycloneDX, has had its third meeting. We meet every 2 weeks. We’re getting organized. It’s a good committee. 5 different members there. So if you or your organizations are interested, learn more about the details on the website. Come talk to me for more information.

SHN: There is a new proposal for TC55 that would be the new one, WinterCG. This is brand new. I still need to look through this. But we will be discussing it at the next ExeCom. Thank you, DE. We can talk off-line for questions for any candidate that would like to participate. A new activity which I think is excellent for us.

SHN: Then also the TG5, within TC39 and Mozilla and university of Bergen are working on this. This is for experiments in programming and language standardization. The two activity groups are Mozilla and the University of Bergen. It would be great if we have another not-for-profit member participate there. If you are interested, please join. If you haven’t done so. This is an interesting topic. It will be a technical – a report, I believe, to start with and brings great recognition to the work going on this committee, but also other languages.

SHN: Some new members. Very good and thank you for the support of this committee. Replay.io is joining. And HeroDevs and Sentry. And OSBA, a not-for-profit and the university of Amsterdam. All bringing new interest in our existing projects, existing technical committees and new ones.

SHN: There is an ad hoc that I spoke about the last time we were in the meeting. It will continue through 2024, which is the governance and now we work, better engage new projects, better engage new communities. So this is ongoing. I don’t have any specific updates to bring at this time. Of course, any input you would like to share or think we should bring to our governance, I am always open for that information.

SHN: I want to highlight a couple of things. We did some workshops at the end of the year. It was very good. We had a number of participants. We had very good presentations. And I think it generates good conversations for how TC53 will continue with the technical work and new inputs. We tried to do another one, a workshop on data and cloud standardization. We postponed it. It’s hard to get people to participate. But it may have been timing. My point to bring these two slides up is if you have thoughts on other topics that you think would be interesting, let us know. We will put something together. These are all hybrid or mostly virtual. It enables us to bring in new ideas, some new members, and new projects.

SHN: Some statistics. This is the year-end statistics of the access of 262. So still, there was a peak in 2015. It’s difficult to judge why. This was some time ago. If I look at last year, we’re consistent. A bit of a decline, but consistent and strong interest. It’s a good indication of what to expect with the next editions that will be coming. This is the statistics on the download. And also, a little bit of a decline but not terribly bad in. In the yellow, that’s the percentage based on all downloads at ECMA. ECMAScript remains a very strong – very strong committee at ECMA international.

SHN: I have just come to my very last slide and I am going to look over to KG,I don’t know if you have any feedback that you would like to share regarding the PDF, if you do, I would be happy to share some now. Thank you.

KG: MF, you were going to make the PDF.

MF: No?

KG: You were talking about - we are going to follow Allen’s process.

MF: Yeah. We – we are going to go through AWB’s documents and incorporate as much as we can into ecmarkup and into the spec document itself wherever possible. And then we will get feedback on any remaining differences between what we can automatically produce and what we can manually produce at the following meeting. But that hasn’t been done yet.

SHN: Thank you. Can I ask, would you be ready to do this for the next edition, coming up in June?

MF: Yes.

SHN: Thank you. So we will keep following that. It is relevant. You can see from the statistics, it’s still quite relevant. So thank you for your efforts. And that’s the end of my core slides. My next slides provide you with information on where the documents lie. There’s a list of documents. I will upload the slides after tomorrow. There are a bunch of documents you may wish to look at, minutes of the last meetings and what is going on in ECMA TC39 and GA. I won’t read them to you. There’s a list of them. Our stats, So these are our stats for the last 4 years. And clearly, this is the highest in person meeting in the last while. This is an indication of how we move forward with other meetings. Also, participation. The last one we had, it was good. But this meeting may take the cake.

SHN: The next meetings are highlighted there. Already RPR has mentioned them. And that is the last slide that I have. Reminder when the general assembly and our ExeCom. Tomorrow will continue with the slide as we finish the agenda, do some activities on the 100th meeting.

SHN: We have some celebrations and we have swag. There is a swag item for everyone. But if you choose to do your summaries and conclusions, you may get a second swag. If you choose to support note-taking and somebody tells me who they are, you may get a third swag. Bribery, but that’s the mode I work in today. So let me know. I will be watching. Thanks to SYG for helping me with the swag and design. If there are any questions, please ask.

RPR: Thank you Samina. That was excellent.

### Speaker's Summary of Key Points

Summary:

- Timelines 2024:
A reminder of the timeline for the approval of a new addition of 262 were noted.  At the April ExeCom on the 24-25 April, where TC chairs bring in the recommendation of the next addition.  The 60-day opt-out period and a 60-day open for comments were noted.  The anticipated editions are ECMA-262 15th edition and ECMA-402 11th edition for approval for the upcoming June 2024 GA meeting.

- Approval vote accepted by acclamation of ES2024 and opt-out period, for both ECMA-262 and ECMA-402 was agreed by the committee.

- New work items:
New work items were reviewed, i.e. TC54 Software and system transparency (Cyclone/DX), and a the potential TC55 WinterCG to be discussed at the next Execom. The 2023 workshops were also highlighted to encourage the committee to consider future topics which may be of interest and may generate new work items.

- Statistics:
The yearly statistics were reviewed, and noted that both the html access and downloads of the ECMA-262 continue to have strong demand.

- New members relevant to TC39:
The pending new members were noted, Replay.io (SPC), HeroDevs (SME), and Sentry (AM), for final approval at the June 2024 GA. Applications for Source Software Business Association (OSBA) (NFP) and Vrije Universiteit Amsterdam (NFP) are pending.

- PDF Solution:
Feedback on ES2024 PDF version solution was provided, based on Allen W-B process, from Kevin Gibbons and Michael Ficarra.  The process is being reviewed and incorporated into the ecmarkup where possible. Feedback will be provided on what can be automatically and manually produced, this has not been done, but the aim is to be ready for the next edition coming up in June.

## ECMA262 Status Updates

Presenter: Kevin Gibbons (KG)

- [slides](https://docs.google.com/presentation/d/1CxVe7IC5Nie1kvm688bX6We0xH7YEmpFAJHC44cac9k/edit)

KG: Editors update. This will be brief. Only a couple of normative changes. We landed Object.groupBy and Map.groupBy, and Promise.withResolvers which got stage 4 at the last meeting. And only one editorial change worth calling out. We have introduced an AO to simplify using the iterator protocol in the common case. I am mainly calling this out because if you have a proposal that is using the iterator protocol, you may wish to use this abstract operation. I have already PR’d several proposals. If you want I can send a PR for any others. It really is much nicer, I think. And no other editorial changes to call out.

KG: I don’t think I am going to go through the list of upcoming and planned work again. It’s pretty much the same, but I want to call out that last time, I claimed that we were done replacing complex spec values with records and just making the spec internally consistent in that way. And it turns out, there’s a couple left. So this fourth one on the list is still here. And not removed. So yeah. Same things we have always been working on.

KG: I want to especially call out the first one on the list: the spec has a terms and definitions section, containing 10 or 15% of the terms and definitions of the spec. And that’s silly. wW will get rid of that and spread the definitions in the appropriate places. If you don’t think we should do that, let us know. But that’s the plan.

KG: The last thing, SHN mentioned we need to cut the next edition of the spec. Because of the timelines, that should probably happen before the next meeting. The intention is to freeze the spec at the end of this meeting. We will send out a link. There’s only two things on the agenda that are likely to land in the spec before that happens, which is ArrayBuffer.transfer goes to stage 4 and the `-->` HTML comment bugfix for web reality. If there is consensus, we will land them, and then either way, we will cut the spec after the meeting, possibly including these changes. No other normative changes anticipated. We will send the link and the 60-day IPR opt out can start at that point, which should give us plenty of time. If you have something that you want to get in the spec, for some reason, let us know and know why. But otherwise, the plan is that it’s basically as it is today, plus those two changes.

MLS: KG, do you have a rough date when you think you will do that, and can you send that out to everybody?

KG: Yeah. We will send the link when it’s out. The rough date is the end of the meeting. So Friday. Whatever Friday is. Maybe next week. But within ten days of now. The plan is to post the link on the reflector as an issue.

MLS: Sounds good.

PFC: Is there any guidance for proposal authors regarding the complex spec values versus records thing that we should be following?

KG: You are almost certainly doing the right thing already. If you have a named records with lists of fields or whatever, that’s the right thing. If you have, like, a tuple of values whose fields are referred to as, like, "the matcher component of this tuple", rather than using the `.[[Name]]` field access - don’t do that. Do the “you have fields in a record” thing. But you are extremely unlikely to be doing the complex spec values thing. That was just an artifact of history.

RPR: Okay. So I think we are on time. Thank you KG.

## ECMA402 Status Updates

Presenter: Ben Allen (BAN)

- Slides: See Agenda

BAN: So this is a very short update. We only have a couple of minor editorial changes. Let’s see, is that sharing correctly? It looks like it is.

BAN: Fantastic. So one is related to the new iterator step value AO. Thank you, KG for bringing that over into 402. So yeah. Previously we had used the more elaborate process. This one clarifies things greatly.

BAN: And the other very minor change is some of the ordering used for cable iteration was inconsistent. Most notably, like DatetimeFormat, set row where the rest of 402 and 262 would say current row. And that’s it.

SFC: We also have a few topics for proposals at various stages in the agenda as well. So we can look forward to those coming up throughout the course of the week.

RPR: Excellent. All right. Thank you, BAN.

## ECMA404 Status Updates

Presenter: Chip M (CM)

- Slides: See Agenda

RPR: We move on. The next one is ECMA402 status update from Chip. Chip, are you there?

CM: I am. So JSON continues its decades long tradition of stability and relentless backward compatibility.

RPR: Thank you. Always good to hear.

RPR: All right. I think that’s the most reliable topic on the agenda.

## Test262 Status Updates

Presenter: Philip Chimento (PFC)

- Slides: See Agenda

PFC: In Test262, we’ve merged some tests for proposals recently, including set methods, iterator helpers, accessors, and a test for a normative change that has been waiting for a couple of years to merge into ECMA262, the sync-to-async-iterator changes.

PFC: I will basically repeat what I have said at the past few of these updates: we have more review work than we can comfortably assign to all the maintainers. We do thank you for reviewing tests. As a proposal author, if you could look at tests that people write for your proposal and give a signal about whether you think they’re correct or not. That helps us have more confidence as maintainers to merge them. And I think that’s it on our part.

## TG3 (Security) Report

Presenter: Jordan Harband (JHD)

- Slides: See Agenda

JHD: We have had two meetings of TG3 since the last plenary. We spoke about PR that Nicolò, I believe that will be talking about this week. We also decided to publish an agenda at least 24 hours before each of our meetings, and then if there’s nothing on the agenda, to cancel it. However, we have a long enough backlog to not likely cancel for a while. If you have security-related input, please join. That’s all.

## TG4 (Source Maps) Report

Presenter: Jon Kuperman (JKP)

- Slides: See Agenda

JKP: Cool. Sorry, if this is a bit of a different format, but I recently had to do a quick year-end view of the source maps we have been doing and it’s the first year for us in TC39, I thought that summary would make a good update. Last year in the beginning part of the year we formed the group, talked about ideas for new features, recruited members from open source tools, browsers, different companies and tools. In June, I was at the TC39 plenary, presented and became the official TG4 task group. So since then, we have gotten bigger. This is not all of the members, but a lot of them are the most active members. Anyone in the space that wants to collaborate on any work we are doing, it would be fantastic to have, but I am pretty happy with the group that we manage to get so far. We have been getting quite a bit done.

JKP: The first big thing we do is that we worked through and approved our official process document. The basic ideas that we sort of mimic TC39 officials stage process, where things go from Stage 1 to Stage 4, that being said, we still will be planning on presenting everything through the TC39 plenary, once we have an internal Stage 4 reached.

JKP: We got a lot done with regards to the existing specification. I have links to the best examples of this here, like directionsing around how to handle invalid versions. Instead of using our own language, source maps, using things like that. Removing X prefixes. So there’s quite a few links here. And then the new features, we have got 3 main proposals that are in flux right now. One of them is adding function scopes and variable names to source maps. So this is big for a lot of different tools. And inspired by a lot of work done previously at Bloomberg and Google. We have a range mappings proposal, so instead of linking to a specific mapping, tools can have a range of mappings, for tools combining through build processes. And then a proposal for debug ID’s, using a unique identifier to source maps. So a lot of ecosystem tooling can easily find the source file it’s referring to.

JKP: The last thing we have done is made our contributing guide. So I have a link here to our CONTRIBUTING.md. It has like everything that I could think of that people need to know to join and contribute. So where we are meeting, on the TC39 calendar, all of the chats, open source repositories, a list of the customers and the big effort right now, which is getting tests in place for all the existing source map functionality. Actively looking for anything who wants to contribute. I keep these short, but we would love to have more folks involved. Thank you very much.

MF: It looks like you said the proposals, once they reach your internal Stage 4, come to TG1 for review. Is your internal stage 4 post-implementation? Does it match up with our TG1 stage 4?

JKP: For a lot – I can share the process doc in particular, but the way that we had been thinking about it and presented it earlier, the answers are yes. Internally, we would have implementations complete before bringing it to TG1. But the implementations would not exist in the browsers for the language they exist. UI for the debuggers and other tools like that.

MF: The reason I ask is because of a web compatibility concern. The source maps are distributed over the web. And tools would then become reliant on the format. I don’t see what the purpose of the review by TG1 is after that point.

DE: I think Jon accidentally left out a part of the process. He was describing how things advance through stages in TG4. Additionally, each TC39 meeting will keep having an update for TG4’s work, including a summary of all the things that we are doing in TG4. There, we will be inviting people to come to TG4 and do a more detailed technical review. The point we are going to make an annual version cut, then we present the whole annual version to TC39 and ask for consensus about it. We didn’t want to make too much of a back and forth, get consensus in two different places. Because if you want to engage in the more detailed technical discussions, towards design, you should join the group that is doing that. But still, to make sure people have a table of contents, so they can engage in the discussions that they want to, that are relevant to them, that’s why we have these updates every meeting. Hopefully that’s less scary than you were imagining.

DE: Also, I want to point out that implementation by this process that JKP was mentioning is defined as not just browsers. But also, tools. We require both. Because they have complementary forms of implementation.

JKP:The big thing to speak on, we are trying to find the right balance here.

NRO: I want to try to answer that. Tools are happy to ship experiments, knowing we have to change them. For example, chrome did have tools already shipping the scopes proposal even if it’s a stage 2 in our process. Shipping and breaking changes there are much less bad than normative features. In that, breaking the debugging experience, so we have less web compatibility constraints compared to TG1.

## Updates from CoC committee

Presenter: Chris de Almeida (CDA)

CDA: Nothing new to report from the code of conduct committee, other than we are always happy to welcome new participants who would be interested in joining us on the code of conduct committee.

## Needs consensus PR: refactoring the process document

Presenter: Michael Ficarra (MF)

- [PR](https://github.com/tc39/process-document/pull/38)

MF: Okay. So yeah, this is – just intended to be a quick topic. I’ve submitted a change to the process document, which is almost entirely just a refactoring of phrasing and combining some of the columns into this reduced form. The purpose of this is to more directly address the various audiences of this document. Each column is targeted at a different kind of reader. But otherwise, it contains all of the same information.

MF: The first column, the left one, is targeting more of the outsider just wanting to learn what it means for a particular proposal to be in a particular stage. The second column is more for people reviewing a proposal, to understand what kinds of things they need to be considering during a review. And the third column is for people working on a proposal, to know what kinds of things they should be working on when their proposal is at that stage.

MF: There’s minor, what I call, normative changes. They are listed right here. The proposal document describes all high-level API and syntax and illustrative examples of usage have moved from stage one entrance criteria to stage two entrance criteria. I think that actually just more correctly reflects how we actually do those things. I've replaced references of ECMAScript editors and ECMA 262 with the relevant editor group and ECMA-262 or ECMA-402 so that it applies to both of the documents we work on. And I removed the test262 entrance criteria from stage 4 since it's required for stage 3 now as per the last meeting's changes. So we've gotten feedback and reviews and a couple of approvals. It's been open since basically the last meeting.

MF: There has only recently been one additional piece of feedback from DE, but it seems mostly positive. I will let him speak to that, if he wants to. Yeah. I kept the timebox really short because I am not interested in litigating this in committee. That's not a valuable use of our time. If anybody has significant concerns, we will withhold consensus and we will address it and bring it back in the next meeting. So I am looking to make this consolidation and clarification to the process document.

RPR: +1s from CDE and DE on the queue. CDE says "Thanks to MF for doing this. Let’s capture the follow along comments from DE". DE says that his comments are already in the thread. Likewise, DLM says +1. So lots of support.

### Conclusion

Consensus on merging the PR.

## Down with [[VarNames]]

Presenter: Shu-yu Guo (SYG)

- [PR](https://github.com/tc39/ecma262/pull/3226)
- [Slides](https://docs.google.com/presentation/d/1p--DB6SNlDv5XOn9g4bmwoymYQ93VWK_RDrCHLJJd60/edit)

SYG: So this is a PR to remove this thing called [[VarNames]] Which I think is useless and complicates everything.

SYG: So what is [[VarNames]]? In general, this is taking a step back, high-level explanation of why we have this in the first place. In general, we disallow lexical, these are using bindings and var bindings to have the same name in the scope scope. The global scope is kind of special. One, it’s an open scope. Meaning that for a function scope, or a block scope, there’s no way to put bindings in the scope because you have seen the closing brace. For the global scope this is not true. You can have multiple script tags that end up adding for and lexical tags. Number two, var bindings, owing to history here, var bindings on the global scope are properties on the global object. So after you declare a var binding, you can – if you declare `var x` on the top, you can do `globalThis.x` and get the same thing. You have one `var x` and `let x`. It’s good to disallow. This is also disallowed. What this does, is that this defines a non-configurable property on the global object named `x`. If you try to declare a lexical binding with the same name as a non-configurable property on the global object, you get a declaration error. You can’t accidentally redeclare basically – not read only, but not deletable properties. This seems like a good thing to avoid as well. This is current semantics, we currently disallow this.

SYG: This is disallowed:

```html
<script>
  eval('var x');
</script>
<script>
  let x;
</script>
```

SYG: So, direct sloppy eval, can introduce new vars in the outer scope. Direct sloppy eval has its own lexical scope. So if you have this inside sloppy eval, those bindings cannot escape out of the eval. But vars can. So if in a function, in a sloppy function, you do a direct eval, you introduce a var binding named x to the function scope. In the global scope, you will introduce a global var binding named x.

SYG: We thought that we should also disallow this because after all we already disallow var and let bindings have the same name on the global scope. If you introduce a var, why not disallow it? It seems fine. Except, this is a giant pain in the ass to implement it.

SYG: So why is it a giant pain in the ass to implement? We should remember the direct eval var semantics here. When you introduce a new var, that binding is deletable. This is true of direct eval introduced var in both functions and global scope.

SYG: So at the global scope, this means it add as property to globalThis, because remember all global var are properties in globalThis. This basically means that it adds a property to globalThis that is configurable. But, wait a second: if you actually manually do this, if you manually add a configurable binding to globalThis, you can redeclare a lexical binding with the same name. We need a way to distinguish configurable global properties on globalThis, whether they are introduced by normal property assignment like this or via direct eval var statements like this. And that is [[VarNames]].

SYG: It’s basically a list that is on the global environment whose purpose is to distinguish what are the `var`s that are introduced via direct eval. Strictly speaking that is not true, it also attracts var that come by way of var statements of the global scope that don’t come from direct eval. But you don't actually need [[VarNames]] for those, because var declarations at the top level that are not from direct eval introduce non-configurable global properties. [[VarNames]] exists because you need to distinguish which of the configurable properties are actually var. Because not all vars are non-configurable. Hopefully that is clear.

SYG: This extra name list is kind of annoying. It’s annoying to understand at the spec level. It’s also annoying to implement because like you have to reserve a bit on all global properties basically to remember whether it is in fact a var or not. And I argue, or my claim, is that this complexity that serves no one what are the actual use cases here? You shouldn’t be using sloppy direct eval to introduce global vars anyway, and you can redeclare sloppy vars, you just have to delete them first. If you want to redeclare them, type delete x and could a let x after. That doesn’t seem that great.

SYG: So the current semantics is that we have three cases at the global scope to catch redeclaration errors. 1, is a SyntaxError to redeclare a let or const with a like-named let or const. 2, is it a SyntaxError to redeclare a non-configurable property with a like named let or const. 3 it covers the normal var case, because they are not configurable properties. Number 3, we have the extra case, that says, it is a SyntaxError to declare let or const with a name present in [[VarNames]].

SYG: My proposal is to get rid of the third one. So basically, the upshot of this is that at the global scope, this is now allowed. `let x will shadow. Shadow in the sense that if you do a direct eval of`var x`, and then do a`let x`,`globalThis.x` will refer to the “binding”, refer to the property introduced by the direct eval while normal `x` will refer to `let x`. And I hope this will simplify the spec a little bit. And simplify implementations.

SYG: As a FYI to the other implementers, SM and JSC are conformant to the current spec and will need to change. V8 was unfortunately never conformant here, and then we wouldn’t do anything for V8 because the case -- this is currently incorrectly allowed in V8, but my claim is that we should just allow it because I don’t really see why we have this extra thing that doesn’t really serve anybody.

SYG: Okay, that is what I am proposing. I will be open to questions.

RGN: First of all thanks for the presentation and the explanation. Every time I look at it, it gets more clear what you’re talking about. As for commentary, we’re really optimistic about it, but need time to evaluate and would like to see this go through the staging process, probably as far as Stage 2 in this meeting would be totally good, but we would like to have a chance to look at it before landing it directly.

SYG: Let me respond quickly to that. Would there be a difference in your mind procedurally when you have looked at out versus staging stage 2 this meeting and asking for Stage 3 next meeting or whenever you’re ready?

RGN: Sorry, what were the A and B there?

SYG: The alternative is that, one, we pull this out into an actual proposal, go through the staging process, treat it as a proposal, and ask for Stage 2 this meeting. That’s a bunch of work. The alternative is to keep it as a PR, we simply do not have consensus for it now because you want to wait to evaluate. We keep it as a PR and we can communicate offline or whenever you are ready, you have looked at it and I will bring it back for consensus and we ask for consensus then. Is there a difference between those two alternatives in your mind?

RGN: There is some benefit in tracking tests and implementation progress, but in practical terms if you feel strongly about introducing a delay without giving it stages, I think that would be fine.

SYG: I can pull it out if that makes tracking easier. It’s just pretty small. That’s all.

MM: It’s pretty small -- I’m sorry, I’m having trouble getting on TCQ and RG and I are on the same side. It’s pretty small in terms of changes to spec and implementation. It’s potentially large in terms of the implications of the change. That doesn’t definitively say it should be a – go through the staging process rather than a PR, but just the degree of seriousness with regard to discussing the implications of the change is really what we’re sensitive to here.

SYG: Okay, I’m happy to pull it out into a proposal.

MM: Thank you.

DLM: Yeah, so we had a lot at this internally, and in general, we are in support of this. Removing it from our implementation will not be difficult. We do sort of share the concerns about maybe there’s some unforeseen implications, but the fact that V8 never implemented this makes me think that we’re not likely to run into problems if we were to do it, that being said, we’re fine with this going through as a staged proposal. Thank you.

MLS: I support a staged proposal as well.

SYG: Okay, that is the queue. I would like to change this, ask for consensus for Stage 2, given that the PR contains the spec text changes. I guess the slight difference here is that the – the request from other delegates to consider the indications, there’s nothing actionable on my side as champion, so can I request for folks who want to think through the implications that they do so before the next plenary.

RPR: I’m seeing a thumbs up from RGN in the room and thumbs up from Michael. DE? Thumbs up from you as well. Okay, that seems clear. And a thumbs up from DE as well.

RPR: NRO is asking do we need Stage 3?

SYG: Sure. Yeah. Who wants to review a small PR?

RPR: So RGN has agreed to review it. Anyone else? We have DRR. And we’ve got two reviewers.

SYG: Thank you very much. And really as MF-- MF, you can point out the technicality.

MF: I don’t know if this is a technicality really, are we asking for 2 or 2.7? Because you do have spec text, right?

SYG: 2, not 2.7, because there are tests in test262 testing the opposite of what I’m proposing, and I actually don’t know. How do you think it should work for 2.7 in this case, given it’s proposing a technically backwards change, does 2.7 mean I have removed the tests?

DE: Stage 3 is the one where tests are required. So Stage 2.7 means this previous Stage 3 review happened. So if signing up for Stage 2 review designs now, sorry to jump in.

SYG: Say I ask for Stage 2.7 at a future meeting, entrance into 2.7 requires tests, no? It does not require tests.

DE: After you’re at 2.7, then you may land a test.

SYG: Then for 3, at the point where test 2.62 tests are required, given there are tests testing the opposite of this behavior currently, what do we do for tests for proposals that are proposing backwards breaking changes?

MLS: So change the test so that they test the exact opposite. Which no longer is a syntax error and you can create a variable with the same name as this.

SYG: right, because the consensus for the normative change is decoupled. That makes sense.

DE: Those tests are landed after Stage 2.7 and after Stage 3.

SYG: Great.

MLS: In 2.7. 2.7 is when you write those tests.

RPR: So, Michael, just to clarify what by -- I should not have called a technicality, but it’s whenever we are asking for Stage 3 reviewers, as we always have done, really we’re asking for Stage 2.7 reviewers. Yeah. I think hopefully that answers NRO questions on the queue as well, I think. And then Kevin Gibbons. It says send a PR. It’s still on TCQ.

KG: Yeah, the test requirement doesn’t require that the tests be landed. They can just be in PR. You can have a change to the tests that removes the old tests and adds the new ones and we can review that and then say it’s good.

SYG: So to recap, the action on me is to move the PR into a proposal repo. I think I got Stage 2. I didn’t hear --

RPR: Let’s just do a formal --

SYG: I’m again asking for Stage 2 for this proposal.

RPR: Do we have any positive support for that?

RPR: I saw a thumbs up from KG. RGN gives a +1. In the room there is a +1 from MLS and DLM.

SYG: And the final thing to record in the conclusion is I have asked the folks that said they would like time to consider the implications to please do so before the next plenary. And on the queue, that was MM and MLS and perhaps others.

KG: So I guess we didn’t formally discuss, but we have previously allowed proposals to advance multiple stages, and I think that achieving stages 2.7 and 3 at the same meeting should be reasonable if the requirements for both are met. Of course, that risks that you are writing tests for a proposal that will not in fact get consensus to go forward, but in this case, where the tests are reasonably small, I think that would be a reasonable thing to did if you’re willing to take that risk and want to move a little faster and present fewer times. So I guess I want to hear if anyone in the room objects to the possibility of moving a proposal like this or any other proposal to stages 2.7 and 3 at the same meeting, assuming the requirements are met prior to the meeting.

RPR: No objections on the queue. This all seems very reasonable. Okay, I think that’s -- that answers that.

RPR: And a plus 1, positive, from SFC. Thank you. We are done within the time frame.

### Speaker's Summary of Key Points

### Conclusion

Stage 2 Reviewers: RGN, DRR Delegates to consider implications before next plenary: MM, MLS

## Allow Annex B scripts to start with -->

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/ecma262/pull/3244)
- Slides: See Agenda

NRO: So normative PR, we have these B specific HTML comments, there is the `-->` or the opposite version, and there are some rules that are strict where they can happen, specifically for these, like, HTML comment, we require it to be at the beginning of the line or potentially precede only by the comments. So we require a newline, followed by these HTML closed comment production, which is basically white spaces. This is, line, block comments without lines in the middle and, like, the comment marker. The problem with the way this is specified is we always require a line terminator in front, so it cannot be on the first line. It has to be at least on the second line. However, all engines I tested that do support HTML comments also support these closing comments in the first line, both in eval, in script tags, and in external files. so this PR is to update the spec to match what these implementations do, to basically add a new case that says -- we already have some special cases for comments at the beginning with the hashbang comment, and so these would also add these HTML-like comment in Annex B together with the PR at the beginning of a file.

NRO: I would like to ask for consensus for this change, which again is not changing the three browsers.

RPR: DLM has support for the change. RGN is also +1. Did you want to say more?

RGN: Yeah, it strikes me as an oversight that we don’t include this in the grammar already and we are in favor of updating the spec to match the implementations.

RPR: Plus one from SYG. Okay, it seems like this has consensus. Thank you, NRO.

### Speaker's Summary of Key Points

### Conclusion

- Consensus on merging the PR

## Allow locale based ignorePunctuation default for Collator

Presenter: Frank Yung-Fong Tang (FYT)

- [PR](https://github.com/tc39/ecma402/pull/833)
- Slides: See Agenda

FYT: So first of all, this -- thank you. So this is for a PR that -- an interesting one. So in ECMA 402 Intl.Collator has an option that’s called ignorePunctuation. And the -- currently in the ECMA 402 spec the default is false, but what really happens that we find out during our testing V8 increment for very -- I mean, I think from the very beginning, in -- when the locale is in the Thai locale, the default behavior is true. For all other locale, it’s currently that all the browser implement it actually is false. What happens is if we really look at what happens what happend in the last several years, that when chromium implemented that, the [[IgnorePunctuation]] depended on the location. But for the Thai language in the CLDR the default is true. So, therefore, it actually is not -- is not exactly as the specs specify in the implementation, so we have a compatibility issue only for the Thai locale. So whenever it does not piece if I the option for the Thai locale which is true in chromium. And I think we have [INAUDIBLE] -- we have talked with this too about this. We have this PR that we’re changing, and the change here basically saying that instead of treating the default as false, the default is actually locale dependent from the locale data, and I think Mozilla already look at that, and I think TG2 already have support for this, so I want to bring this to TG1 for approval. So the default value for this ignore punctuation instead of always hardcode it to false, is actually reading from the locale data. Any questions?

RPR: Plus one for this change from DLM.

SFC: Yeah, I just -- thanks, Frank, for putting this together, and I think that this style and structure for making locale data available is a good structure and makes it very explicit which parts of the algorithm are data-dependent, and that is a good -- a good precedent to set, both here and elsewhere. So this style of change is a change that I think we should be embracing here and also anywhere elsewhere it is needed in 402.

RPR: Thanks, SFC. USA is also plus 1 on this change, so I think you have good support.

### Speaker's Summary of Key Points

### Conclusion

FYT: Okay, so I think the conclusion for these notes is that we conclude that we got consensus for merge ECMA 402 PR 833.

## ApplyUnicodeExtensionToTag and ResolveLocale set the result record's internal slots to non-canonical values

Presenter: Frank Yung-Fong Tang (FYT)

- [PR](https://github.com/tc39/ecma402/pull/846)
- Slides: See Agenda

FYT: The next one, I think, this is accidentally merged by Ben last night. He got confused and clicked the button, literally just within 12 hours. But I think we still need to bring it here. And I put it on the agenda and he got confused. There’s 846. So what happened is that inECMA 402, there are two places that we deal with uniKo extension processing. One is for most of the Intl object. The other one is for the Intl locale itself, the operations are slightly different for agood reason. But the problem is that within one of that particular part, we actually are inconsistent across that too. Which one -- the one that have the problem with that is whenever we have that value currently, we didn’t really -- we didn’t lower case and we didn’t -- we didn’t -- sorry, we didn’t do the canonicalizations for that. Therefore, let me see, where is that? So this is called only by Intl locale object, and this operation that somehow in here, we did not do canonicalization, and what will happen is that some of the calendar value, I think, for example, Islamic civil, which have a different value that didn’t get canonicalized, so this particular PR is a normative PR. We have to put in explicit language we basically copy from the other place in ECMA 402 already where we do the canonicalization. These two operations have to be operated because the process is different, and we do exactly the right thing. So we’re replacing just strictly reading from that one to a canonicalization process that deferred to UTS35 plus the other place in ECMA 402.

FYT: The impact shouldn’t be too much, except whenever the -- the U extension have a calendar with a couple of them. In particular, I think Islamic civil and maybe two or three other calendars.

FYT: Any questions or any support?

RPR: Nothing on the queue at the moment. Does FYT have support, objections? DLM has +1. Anyone else? Okay, if there’s nobody else, then it looks like this has conclusion.

### Conclusion

FYT: The conclusion is that we reach consensus to merge ECMA 402 PR 846, which was accidentally mentioned last night, so we’re not going to revert it. Thank you.

RPR: Excellent. That was a good prediction to merge it already. Super fast. Thank you, Frank.

## Iterator sequencing for Stage 2

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-sequencing)
- [slides](https://docs.google.com/presentation/d/1KhdGLNXOxWFEg3EhDDv9P-dkLxPKBTuI0EkEUc_fdNA/edit#slide=id.p)

MF: All right, iterator sequencing for Stage 2, at the last meeting, my plans here for this solution, and as a reminder, it was twofold. I guess as a reminder before that, I had a lot of difficulty in trying to find a solution in this problem space because it took me a while to realize there was actually kind of two separate problems that were being solved. So for solving the first problem of sequencing a statically known finite collection of iterators or iterables, we have variadic Iterator.from, where you just list each of the iterator iterables as parameters to iterator.from in the order that you want them sequenced. And for sequencing a dynamic or possibly infinite collection of iterators or iterables, you create an iterator of those and call Iterator.prototype.flat.

MF: So I have written the full spec text for both of those methods. The one open issue is whether -- for that first solution, whether we continue with variadic `Iterator.from` as I said I would at the last meeting, or go with KG’s suggestion here of instead -- if you look at the spec text, I guess, you can see `Iterator.from` is kind of split into two sections. It’s the one case and the zero or more case. And this is what Kevin is getting at with the issue here. I can let him explain it more, but the quick summary is just that if you pass one thing to Iterator.from, there’s kind of a fast path, and you’re not getting that with Iterator.from passed many things because the work is delayed because it’s treating that as sequencing those things. So there’s that slight noticeable difference. I’m very neutral on this. I could go either way, whether we introduce a new method called `concat` that is always doing sequencing and doesn’t treat one as a special case or whether we just ignore that -- it’s not really meaningful that one is a special case here.

MF: The other point there is that there is a difference from Array.from which, if you recall, has a second parameter, which is a mapper. I don’t think that’s really related, other than I guess people can see the name of the method and kind of assume its behavior. But if you’re reading code that calls it, I think it’s going to be pretty obvious that people are doing sequencing using Iterator.from. It makes no sense to introduce a mapper to Iterator.from because unlike arrays, we don’t have to worry about doing a second pass over the iterator. So that’s the open design question. And I think that’s actually the only thing that I wanted to discuss here. Assuming we resolve that discussion of either going for this first path over the solution going with variadic form or introducing a new method, probably called Iterator.concat, assuming we can resolve that, I would like to ask for Stage 2 today and Stage 2 reviewers. So do we have any feedback on that one open issue or any other issues about the proposal?

DLM: Thank you. So in general, when we discussed this, we thought it makes a lot of sense. We weren’t certain about flat. I was wondering if there’s examples from other languages that are using something like this or if you have, like, you know, some example use cases that you could mention.

MF: Use cases of trying to sequence infinite sequences?

DLM: Yeah, the infinite sequence. It wasn’t clear to us why that was useful enough to be added to the language.

MF: Yeah, any generator that produces iterators, you know, these iterators themselves wouldn’t be infinite, but the sequence would be. I don’t have specific concrete use cases in mind off the top of my head, but I can provide you with them if you want.

DLM: No, honestly, we’re fairly happy with this proposal, so I don’t think you really need to do extra work. I was just curious if you had something kind of off the top of your head. In general, we’ll be supportive of this. It looks good.

MF: Yeah, in my development of this, for that particular one, I had only been doing artificial things. I had been mapping over the Nats and repeating that many times, but then the natural numbers, and then you’d have an infinite sequence of iterators of lengths based on the number. But, I hadn’t done anything real with that yet.

DLM: no, I think that’s fine. I don’t think it’s really worth arguing about. So, yeah, in general, we support this proposal for Stage 2. Thank you.

MF: Okay.

SYG: I would also like to hear some concrete use cases for the infinite stuff. I think in general, if you’re going down the road of making iterators really featured and more ergonomic, all kinds of combinators, I would like to hear more concrete use cases across the board. It would be -- so the broader context here, and there’s nothing I have against this particular proposal or your other ones, it’s just that if we introduce all this stuff, and come time when people actually want to ship this to production and it turns out that there are performance issues for the ready ergonomic forms that can’t be easily optimized away, that is generally a concern where we want people -- we want the code that looks nice to also have the potential to be fast, so you can address that concern a number of ways. One is concrete use cases where we can look at something and say, while this -- given this concrete use case, ergonomic gains here are actually worth the possibility of it being not as highly optimized. Another way is you could decide that you could show that it is in fact very optimizable and that performance will not be a concern. You could demonstrate that with micro benchmarks or something like that.

SYG: So per usual, the overall general concern here is performance for the kind of code that we want people to write and eventually to write and ship in production untranspiled. So, hopefully that concern makes sense.

LCA: I just wanted to follow up on the request of, is there other language precedent for this? And if there is, RUST has an iterator.flatten method, which does pretty much this. I was looking for some results on GitHub where this is used, and it doesn’t seem like it’s very widely used. There’s in all of GitHub 520 files that use this method, just wanted to give some context. Links: RUST Iterator.flatten: https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.flatten results in GH code search: https://github.com/search?q=.flat%28+language%3ARust+&type=code

KG: Just to say more about Iterator.from versus concat, the `from` method just seems pretty unintuitive, that if you pass it two things, it’s going to change the behavior and then also stick them together. Like, that’s not really how any of the existing `from` methods work and not how we’re expecting any future from methods to work, as far as I’m aware. Like, if we have a Set.from that’s going to take a list from its first parameter; or I’m hoping to introduce a version of Math.max that takes an iterable as its first argument and it's definitely not going to take more than one iterable. That would just be weird. So I like the consistency of the `from` methods generally taking the one thing you are coercing and then the second parameter customizes the behavior in the way that Array.from does. But using it as a variadic thing with sequencing seems like it’s going to be really inconsistent with the rest of the language. I would be much happier if there was a static or prototype concat method.

JHD: So I put my topic that I’m neutral on variadic vs separate, but I think I’m slightly leaning towards separate because of the things KG said. The reason I’m on the queue is because if it’s called `concat`, then I will expect based on the precedent of array concat, I can give it a thing or a container of things and it will give me a container of all the things, and so if it can either do that, or have a different name and it would be fine, I just think that that -- like, I don’t think anybody has any assumptions about `@@isConcatSpreadable` or intuition about it, but -- so setting that aside, just that’s -- that is how concat works. I would like a different name if we can’t have those semantics.

DE [on the queue]: +1 Iterator.from.

MF: thank you. That was helpful feedback. For SYG, I’ll definitely get more use case information and just do as much performance work as I can. I hear really mixed feedback, it seems, on concat versus from. To directly address JHD’s feedback, I’m not interested in bringing a version of the method that has that behavior, so I will look to avoid the name concat so that we can bring a version of the method that has the behavior that I desire. There’s some -- there’s a lot of precedent, and I remember somebody was asking for precedent in another language, I think maybe DLM, there’s a lot of precedent here. You can look in the README or in the slides that I had presented for Stage 1 both in other languages and in libraries. Maybe we can look there for some naming inspiration as well. Maybe append or something. We’ll see. Yeah, and I think that’s all I plan to address for the next one. I will not be asking for Stage 2 based on this feedback. Thank you.

### Speaker's Summary of Key Points

For SYG, MF to get more use case information on the use cases for flat, and do performance work. Feedback was mixed on concat vs from. JHD argued, anything named concat should use the same array flattening semantics, which MF isn’t interested in adopting, so he will investigate other names. DLM and others asked about precedent in other languages; this was presented in Stage 1 previously.

### Conclusion

Did not seek consensus for Stage 2, due to critical feedback. The proposal remains at Stage 1.

## Iterator unique for stage 1

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/michaelficarra/proposal-iterator-unique)
- [slides](https://docs.google.com/presentation/d/1381O5-rNH72MheHOIiTDfzentOn4APPps3R2MYeLzWY/edit#slide=id.p)

MF: So this is a new follow on for iterator helpers, iterator unique. The problem it’s trying to address is getting distinct values out of an iterator, getting the first value in some identified equivalence class. So if you see the example there, we’re calling `Iterator.from` on the string Mississippi, which puts it into code points using the string iterator, and then calling whatever this method is called. For the purposes of this example, it’s called distinct, it yields four values, which are the four unique code points. It happens to be the first instances of those, but that’s not really observable here. You can see in the second part of the example, I have an array of strings, each of them containing a name of one of the US states in alphabetical order. And we’re calling a distinctBy variant, which is passing a mapping function, which maps to some exemplar of the equivalence class, this being the first letter of the state, so then if you iterate that resulting iterator, you get the first alphabetically ordered state starting with that letter.

MF: So, yeah, this is a thing that I commonly need to do. There’s not too much design space here, I don’t think. Something we definitely want to address at some point is composite keys because you can’t always map to some exemplar that easily. Sometimes you want to compose two aspects of the thing and use that as the exemplar. But there’s no good way to do that right now. I did have a good conversation with ACE, who I don’t think is here at this meeting, might be online, recently about his plans for composite keys going forward after records and tuples have been stalled, and that seems to be compatible with how we’re doing it via mapper in those examples. So I think a mapper is a good solution, assuming we go with those value-based composite keys in the future. I don’t want to go too far down that rabbit hole but if you have questions, I’m happy to answer.

MF: I did research in other languages, and some of them were using the mapper style approach that I showed. Some of them were using a comparator where you pass in a function of two parameters and it tells you whether those things are considered to be the same or not. I think the comparator approach is actually pretty bad. It requires a much less efficient implementation. It also permits comparators that are nonsensical, whereas the mapper doesn’t, just by construction. So I strongly prefer a mapper-based approach, but I would be interested in hearing motivations for including a comparator version. You’ll see later that some languages and libraries do have that, so there must be motivation somewhere, right? And another question is for the mapper, would we pass in an index? We typically have been doing that since the original iterator helpers MVP, but I don’t really see a reason. So if anybody has a reason to do that, let me know. And there’s a lot of names for this kind of thing, some common ones, so we’d have to choose naming preferences as well. But overall, not too big of a design space here. So here you can see examples of other languages that have a uniquing method on their various sequence-like data structures. The summary here is that most of them have the mapping variant, a couple have a comparator. And you can see some of the common names distinct and unique are common, but also “nub” in Haskell for some reason. I don’t think anybody knows. There’s just some funny names there.

MF: And in JavaScript libraries, you can see that it’s pretty much the same story. Unique and distinct are both very common. Unique both with the comparator and without. They’re both very common names, and also the mapping variant is more common than the comparator variant. And, yeah, all but one have a mapping version, so I think people find value in that. So I kind of gave clues as to my preferences earlier, but I’ll go over them again, I guess. I think a comparator style API would be really inefficient, and as I said before, problematic because you can define nonsensical notions of equality using it. So I’d be interested in hearing if anybody has a reason to have that. So I think a single method with an optional mapper is probably best, and I don’t see a reason for an index yet, so also please let me know. And I really don’t have a preference on names among the ones we saw there or whether we use two methods or one, like distinct or distinctBy. So anyway, that’s iterator uniquing, and I’m just going for a Stage 1, and I'd love to hear any feedback.

RPR: We have some queue. So starting with GCL.

GCL: So I am concerned about the, like -- I guess first I should clarify, this is a thing that deduplicates all entries in any order, right? So, yeah, I guess I’m concerned about the, like, sort of unbounded memory usage that that would exhibit. And I’m not sure whether we should be providing that, if that’s the behavior. So, like, you notice that, for example, in Rust, this doesn’t exist, and that’s because they make you build a vector, to make it very explicit what you’re doing. So, yeah, I guess I’m just sort of concerned that we should not have this because of the way it -- the way it is.

MF: Yeah, actually KG had raised that point to me personally earlier, and I forgot to bring that up. So thank you for bringing that up. I agree that it is kind of -- what is it, not a foot gun, but it’s tricky to notice that you’re running into that unbounded memory usage just by calling unique here. My only rebuttal here is just that it is common to want a really easy to use way to do that as we see in these other languages and in these JavaScript libraries, so that might offset that trickiness. But I agree with you, yes.

RBN: I kind of wanted to ask for a little bit more clarity on when you say that a comparator is not efficient, that’s not a very detailed statement as to why it’s not efficient. I do want to say that I have for a number of years been interested in pursuing proposals that would look and address this within this language in general. And while a comparator that’s just a function, if you pass two values, are they equal, that’s definitely not efficient, but most languages that do have comparators or at least languages like, for example, any language that uses .NET that has comparators, they are generally a combination of an equality function that tests whether A and B are equal, but also a hash generation function that produces a hash code you can use for hashtable lookup, which is much more efficient in most cases.

MF: Yeah, if there’s a more principled way to define a comparator, which, you know, both is efficient using hashes and does not permit nonsensical notions of equality, I’m totally open to that. When I was making those statements, I was only referring to when passed a function of 2 of the values. And that would be inefficient.

RBN: Yeah, I do also want to say to the idea of nonsensical notions of equality, I think it’s valuable to say that that’s not something you would want, but also you can already have nonsensical notions of relational equality when you pass things to array.sort. So I don’t think it’s necessarily that critical to completely block something based on the idea of nonsensical equality when a principled developer that’s actually using this properly would not create a nonsensical notion of equality for it to actually matter.

MF: I just want to clarify that with `Array.prototype.sort`, the implementation is allowed to sort them in any order when you define a comparator that does not work properly. So I don’t think that really compares here.

KG: Just on the specific topic of the comparator versus a mapper, I mean, we already have groupBy. groupBy is already a mapper. It is a little different in that the mapper is used for the key of the result, although there’s some possible designs where you have a second thing that’s used for the key of the result. But I think the consistency with groupBy really suggests using a mapper. Especially if we get composite keys.

DLM: We discussed this internally. We also had a few concerns about this. We definitely share the concern about the potentially unbound memory use behind the scenes. That’s already been raised. I had a few other questions. One is I assume there’s no array.unique and I was wondering if you considered that as opposed to an iterator.unique. A few other things, like if we had an infinite iterator that only ever produces one decision digit value, that would be an infinite loop. So there’s plenty of ways to write infinite loops, but this might be an unexpected one. And I guess another thing would be side effects when producing values. I assume you would still get that side effect even if a value ends up being discarded and that also ends up being unexpected?

SYG: My question was why is the mapper more efficient. it is because of basically there’s the -- it’s better complexity because a mapper lets you have a more set oriented implementation instead of a quadratic one where you have to compare for everything. Is that what it boils down to? I see the thumbs up. I’ll take that as a yes.

SYG: Then I definitely share the implicit unbounded memory use. It’s not the unbounded part that worries me. It’s the hidden part that really worries me, this goes back to the general concern from your previous item of if this is the road we’re going down and this is corner to make really ergonomic next for iterators, we would like to have a -- V8 would definitely like to have some story about the pit of success here from a performance and memory use point of view. If it’s really easy to fall into a hidden unbounded memory situation, that seems real bad. But stepping back, you’ve provided comparison to other languages here. You’ve said it’s a common operation. What is the -- what -- maybe I’m just anticipating MS's question here on libraries and I’ll move on here because that’s basically the same question.

MLS: Yeah, SYG, I think you got it. You know, so we talk about complexity, and in your next slide, I think it is, talks about -- or slide 6 talks about, you know, it wouldn’t be efficient. But where do you want -- where do we maximize efficiency? Is it the implementation or the user code, and it seems to me that we kind of wave our hands when we think about the implementations. Not only memory, I’m also worried about the computational complexity that may mist and for the standard, you know, distinct and the distinct by. To me, it seems like this should be best wrapped or, you know, there are existing libraries that do this, and I think the amount that this would be used would probably be better served by such wrapping or a library.

MF: Can I ask for clarification on that? Are you concerned about the complexity of an implementation of this method, like, in your engine?

MLS: Well, yes. You know, if you have a large object that you’re iterating, then, you know, you have to determine the best way to do -- especially for the distinct, you know, how are you going to do that internally. And with -- then with a callback, which I actually am more comfortable with a callback because then you’re leaving it on whatever you’re calling back to do the actual determining of whether or not something should be in the resulting list. So, yeah, I’m concerned of both memory and complexity. It just seems to be something that probably is better served by user code than by implementation code.

MF: I think I’m still confused by your feedback a little bit. I saw two points. One was about implementation complexity, and I -- I assume that the implementation in your engine will be very similar to the way that I’ve polyfilled it, and I may be wrong there, but just backing by a set with a couple of Booleans for special cases, and you already have those in your implementation. For the second thing, I didn’t understand why a mapper would be better than a no mapper variant, and again, this is an assumption of mine, the only difference is that your tree is -- which value you’re treating as the, like, set key, whether that’s the -- the value itself or the result of the mapper. But either way, it should be the same for your implementation, so I’d like -- if you could explain that to me more.

MLS: Well, just that we’re adding that into an API, and optimizing that would probably require more work than it’s worthwhile to do. Yes, we just back it with a set, simple. But there’s memory implications to that and other implications as far as complexity in terms of the other tiers of the higher engine.

RPR: Okay, on to JHD.

JHD: Yeah, to echo what DLM said, I would really like to see this solved for arrays as well. I think in general, any problem we want to solve on either arrays or iterators, we kind of want to solve on both. If, you know -- based on the experience with groupBy, maybe a prototype method isn’t even worth trying ever again, although, that’s not -- we got a lot of feedback from implementations that that would be a tough sell, but not that it’s impossible. But if we don’t want to go down that road, a static method is perfectly fine. But it would be nice to have a solution that doesn’t require an iterator.

LCA: To clarify, don’t we already have a solution for array, which is just to pass it to new set and array from the set?

JHD: That does not allow you to give the mapping functionality that would be -- and either way, it does still use an iterator. So, yeah, you can write code kind of similar to the polyfill that’s suggested that would use sets or maps and work. But it would be nice to have a straightforward method.

LCA: Okay.

SFC: Yeah, so the groupBy proposal, and this one seemed quite similar in the types of use cases they serve. The groupBy would allow you to perform the mapping and perform uniqueness on the mapping. It’s just that, you know, it may be less efficient because you collect, you know, all the items and then if you just want one of them, then you have to throw away the rest. So it feels like if we think that this is well motivated enough to have an additional method for it, an additional iterator method for it, it seems groupBy is the place to look for inspiration and precedent for how we designed and thing, and I would sort of focus on why is this motivated independently of groupBy and then follow along that line of reasoning.

RPR: Thank you, Shane. So we’ve got one minute left.

LCA: I didn’t have time to write this on the queue, but there’s an alternative we could consider, where rather than the engine implicitly creating some sort of set structure internally, the user has to pass a set or something that does the deduplication themselves. And this way the user would be explicitly aware that they’re creating a sort of unboundly large object, right? And if we do this in such a way that that the protocol -- that you use to interact with this set is similar or identical to the set objects, you could just create a new set and pass this to distinct, and this would also solve the group use case, it would also solve the comparator use case, if you want a comparator, you have to have some implementation of that in user land because JavaScript provides no such implementation out of the box. I’m not saying this is the path we should go, but I’m saying this is another idea to consider.

MF: Thank you. That was a lot of valuable feedback. I think that given that, I still would like to ask for Stage 1 to further explore this problem space that I’ve described here.

RPR: Okay. So we have a call for consensus for Stage 1 for this proposal. Any support or objections? We’ve got a plus one from LCA. JHD, is that a typo or is plus exclamation mark special?

JHD: That’s a plus one, yes.

RPR: And the plus one from RBN as well.

SYG: MLS raised a question of why not library? Is that in scope for your exploration of this problem statement of a more conclusive answer to why not library? Why not user land library?

MF: Yes, that will always be a possible outcome of this, is that we can’t provide anything that’s more efficient or more ergonomic than what we would do anyway with a library. And in this README, I’ve already written -- I think it might be a full fidelity polyfill, only about a dozen lines or so. It’s a bit inconvenient because it uses some temporaries that have to be introduced every time it’s called. But, yeah, that’s definitely a possible outcome.

RPR: With that clarification, we also have JHX and JSC with plus one and JSC saying they also agree with adding to array. Okay, I’ve heard no objections to Stage 1. Congratulations, you have Stage 1.

### Speaker's Summary of Key Points

### Conclusion

- Consensus on stage 1

## Intl.MessageFormat: I have some questions

Presenter: Eemeli Aro (EAO)

- [proposal](https://github.com/tc39/proposal-intl-messageformat)
- [slides](https://docs.google.com/presentation/d/1c_6VoCMJdSP59LNYEUTjCNZi8nKEw_GvMQMlvEmD91s/edit#slide=id.p)

EAO: Hi, I presented an update on Intl.MessageFormat in September and now I’m back to ask a couple of well, one, maybe two different questions about what are we really doing? So just as a refreshers thai proposal is about adding a new formatter Intl.MessageFormat. Unlike the other existing formatters, takes in a source parameter and its constructor, from which the source of the message that it’s then allowing to be formatted. And very roughly, it has normal source cases. It’s used roughly like this. Where you have a message that is defined as a string in the MessageFormat 2 syntax that you then use to build a message format instance. And then you can call .format() or .formatToParts() on that, feeding some specific values that you want to be taken into account in the formatting. There are further details on this as well, but I have talked about this previously a bunch.

EAO: Since my last presentation, the underlying Unicode MessageFormat 2 specification is in a feature freeze and due to be released as a tech preview in hopefully about 2 months, as a part of this spring’s ICU/CLDR releases. Further than that, the Intl.MessageFormat specific itself now is almost completely described by spec language. A couple of missing pieces, but almost all there. The polyfill for all of this is updated to match the spec and again no changes to the API from what I have presented before.

EAO: But so given this situation, I actually earlier was planning on asking for Stage 2 at this meeting. But when that process started, it turns out that there is this fundamental underlying question that I think we need to answer here before we can really move forward. When can we consider MessageFormat 2, a new domain-specific language, to be supported in JavaScript with an actual parser for that format? So roughly speaking, as far as I am aware, there are two different viewpoints on this, and one is presented here as option A is that when the underlying specification is finalized and it has a sufficient stability guarantee that we can be sufficiently certain that it will not be changing or breaking in the future. Or then we have option B, where we consider this to not be a sufficient criteria by itself, and that we need effectively years of experience with it in order to be certain that this is really the thing and that it’s got a large amount of signals of external support and usage and it hasn’t changed for quite a long while.

EAO: So before I really open the question on this, I have, hopefully, an informative view of what the history of this proposal is. It started effectively presenting something very similar to the current API, back in 2013 already. And from then, there was some discussion which culminated in action being taken finally under the TG2 in 2019. To start organizing, to put together a working group for coming up with a message format for JavaScript that works for the Web. And relatively soon after that, this subgroup was effectively reorganized and moved to go under the unicode CLDR TC because it was identified that what we are coming up isn’t good for just JavaScript, but the whole industry, and for something like localization and internationalization the right place for the home is the Unicode Consortium. And going on from there, the specific proposal that I am here championing was accepted for Stage 1 about two years ago now and then it’s had a couple of updates to it – while in Stage 1, where also back in ‘22, the message resources part was spun off. It’s now a separate Stage 1 proposal. And then I gave the update in September, and there was a follow-up incubator call from there. So the kind of idea that we really had and still have back from 2019 onwards is that we need a more capable format than existed then or exists now, and that the whole web is really suffering from the lack of any such good solution here. So the work on MessageFormat 2 has been building a syntax for Intl.MessageFormat to use. It’s a side benefit where the work started, but it is of course really important for the future of the syntax and all of its parts. And now, one important part of why we think that what we have come up is a good solution is that the message format syntax and the data model as well, of how it represents messages, is capable, as far as we know, of representing any message in any other format in addition to itself. And really, as one of the viewpoints that I have highlighted from the discussion back in 2019 is from Jan, the maintainer for i18next, one of the largest internationalization and localization libraries in the ecosystem at the moment. I am just going to read this out loud. “For some time I know thought about the next version of i18next [...] but with the current uncertainty what the decision here is - I better do nothing before picking the one that gets not adopted by browsers. [...] If there is a chance that one format gets the defacto standard for web [...] my bet is the tooling will improve. Currently, as a vendor, you just have too many formats for web you need to support (and the web is only one piece of what you need to support)” And this, I wanted to highlight because it really – I felt like it describes the sort of situation in which we have been easily for the past 4 or 5 or 8 years in terms of localization for the web, we are all stuck and waiting for something better to come along in order for anything at all to happen. So the pitch for MessageFormat 2 is that it is angling to be that better thing. And in that context, then, two years ago, we accepted this proposal for Stage 1, and the motivation here, I would like to call your attention to the second item here, which is to “Introduce a native parser and message formatter for MessageFormat 2, a spec currently being developed under the Unicode Consortium.” So another way of putting this question is, is that I think we need to reaffirm whether this is a valid motivation for this proposal for us to continue working on. And so – what this is leading up to is that for the underlying MessageFormat 2 syntax, we’re currently at a stage where it’s entering into a tech preview phase which I estimate and expect that it comes out and becomes an official finalized part within half a year or maybe a year. But, of course, this is a forward-looking statement. So do with it as you may. And the basis always has been that whatever – that the underlying format does need to stabilize in order for us to really consider ever advancing something like Intl.MessageFormat to Stage 4. But the question here is, effectively, this same slide from earlier: I would like us to discuss and to come to some sort of an idea for when we can consider a MessageFormat 2 parser in JavaScript? And these, as far as I know, are the two options. And I’d like to open the queue on this.

DE: Thanks for the presentation. I am very excited about the MessageFormat 2 proposal, and really happy that it’s progressing like this. I think option A makes more sense. Not as a general principle for how we should approach new formats or new efforts, but as a tradeoff given how mature and well-supported this effort is, given that we have people from many different companies working together, working on at least three different implementations of formatting, precise definitions that are being put into things adopted by unicode, I think this makes sense for us to standardize relatively soon. Not today. But not several years after it ships in ICU. I think that would be too conservative. You have to remember that other ECMA402 features have actually resulted in the need to add features to ICU–things that weren’t there. And this is one where it will probably be shipping in ICU4C before it goes into ECMA402. So you know, it’s important we get all these formats right. But we also don’t have to unduly delay the development of JavaScript with excessive caution, if this thing is being developed well and it’s on a path to being broadly supported.

CP: As DE mentioned, I am also supporting option A. As one of the champions of these ten years ago, we are never going to get to do option B, in my opinion. And we already have good experience with unicode CLDR. Over the years, we haven’t had many issues, so if they are finalizing the specification, that means it’s good. And MessageFormat 2 has been developed by many people who have been champions of these proposals in this committee, people from Mozilla and so on. And I think it’s a culmination of a lot of work, it’s not something that just pops up and we decide to just upgrade to MessageFormat 2. So I am very supportive of going with option A.

MF: Yeah. I guess I’m the dissenting opinion here. The parsers that we add to JavaScript should be extremely time-tested, things that are effectively permanently relevant. In earlier discussions about this, I gave the example of JSON being there. JSON is, you know, ubiquitous. It’s used as a format for exchanging messages between entirely different ecosystems, it will forever be important whether we like that or not. I don’t think that we can make that claim about MessageFormat 2 yet. It will look very foolish, you know, if 8 years from now, we want to add MessageFormat 3. I am not trying to diminish this effort; I understand that it’s a significant effort defining MessageFormat 2 from a lot of interested and appropriate parties, but I think that to enshrine it in JavaScript, we have to have that confidence of permanent relevance that I don’t see we have until at least some number of years of experience with it.

SYG: I have not had good experience with CLDR. This is responding earlier to CP. CLDR, you had good experience with stability stuff. In 2023, this may have been a one-off event. But in 2023 Chrome experienced a pretty big issue with CLDR changing, and all the other browsers, with CLDR changing the space in English formatting the DATE-TIME. This is something that should have never flown at all. If someone with a passing experience with stability guarantees of the web were in the room, that does not give me a lot of confidence in CLDR as a body, that has the right – the people with the right experience in the room. You can argue – I say this as someone who has experienced and outage due to this thing, but do not participate regularly in CLDR. So obviously, it’s a very limited view. I am happy to be corrected, but I don’t get the sense that CLDR cares about stability in the same sense that we care about it.

SFC: I could respond to SYG, but I will stick with my queue item, which is to emphasize again what EAO said earlier, in large part the effort to design the message came out of this body, out of TC39 because it’s been a goal of developing the internationalization specification since early on that we were going to work toward a message formatting library. You know, as like the crowning achievement in the ECMA402 space, and we don’t want to just standardize any random message formatting syntax. But make sure it’s the right one. That’s why we spent so much time and effort in the working group developing the syntax that EAO is presenting here. So I want to emphasize that the syntax is largely built for ECMA. And you know, this is not really taking a position on, you know, like does it need also be used in the wild for a certain number of years? But a lot of the other things that we built here, APIs that we introduce into – into the Intl specification are also based on feedback that we have gotten from the CLDR and the ICU including the different features that we add all the different APIs and those are all based on – those are all new APIs added. No one has a relative formatter that looks exactly like the Intl one. A list formatter that looks exactly like the Intl one. So these are all things introduced. And the message format is much in the same sense. No one has a message formatter like this one yet, but we are introducing it. We are designing it in order to serve the needs of the web platform users. So yeah. That’s my angle on this.

KG: To second what MF said and put a slightly different spin on it, getting domain-specific languages right without usage experience is between inhumanly difficult and impossible. I accept that it’s possible in principle, but I think that experience has shown that most domain-specific languages that are not minuscule - people end up wanting them to be a little bit different after a couple of years of using them. Like, JSON doesn’t have comments. That was on purpose. But now everyone is using JSONC. It doesn’t have trailing commas, etc. And that is the oldest and most stable DSLs. And everyone is familiar with YAML, of course, and there are newer versions which are better. It's not that the first version was not carefully designed, but it’s just that it’s really hard to get these things right without using them in the wild for a long time. And we can do our best sitting around thinking about what this ought to be, but the set of designers is several orders of magnitude smaller than the set of users and they will run into use cases and ways of using things that could not have occurred to the designers of a DSL. So the idea of standardizing a DSL without it having been used in practice, in the field, is – I don’t like that idea. I would be much happier if there years of widespread usage experience before it was codified. At least in JavaScript, because we can’t ever change anything.

SYG: This is partly a clarifying question. So help me game out the two options here. So for option A, it seems to imply that MessageFormat 2 as a syntax is currently independently standardized. Like, ignoring JS for a second. MF2 is going to be a thing that the Unicode Consortium recommends as part of its standard body; is that correct?

EAO: Yes.

SYG: Okay. And then this option is that – sorry, and this slide is about that given that MF2 is an independent standard, when should JS implement a parser that is part of its standard library?

EAO: Yes.

SYG: Okay. So then help me game out what the alternative – these two options don’t seem to comprise the universe of alternatives. If it is an independent new standard where other tools and stuff will be writing to consume and produce it, you don’t include any user library that would provide an MF2 parser as an option here. I would like to hear more about why that is not even considered.

DE: Definitely user libraries are important. This is what EAO did through the whole process, maintaining a JavaScript implementation of this. Definitely the idea here is not to put it in the language today. I imagine that even if we go full steam ahead, it’s at least a year out. Or if we go a little bit slowly, it’s two years out. The thing that doesn’t make sense to me is this “several years out” idea.

DE: My question is, what do we actually want to be occurring during that time? What kinds of validation steps? A lot of companies have already adopted a format for this sort of templating. And the work can be invested to upgrade to a different format and retrain the translators once there is an ecosystem consensus around it. We don’t have to be on the leading edge of that. But years is more conservative than “let’s see where this is going and figure out how strongly we support this”. In Bloomberg we are working on end to end testing with translators, using this format, integrating into applications. I would encourage others to do that kind of testing. I think we can do a more active strategy that falls slightly in between these options. It’s not standardizing today, but also not waiting ten years

SYG: Hold on. Help me game out option A. What is the alternative – game out the user library thing… what are the concrete downsides, if MF2 is an independent standard and JS library instead of via built in.

DE: It depends which version we go with. With the version that is later in the slide deck, if we include AST but not the surface syntax, that – I see the difference between these two things as superficial. The more significant thing is the data model here. The data model differs a bit from any other data model for templating and for doing the formatting. So to me, it would seem silly to go with the AST but keep the surface syntax out. If we are gaming out the different options, another option would be to just have the things that we have in ECMA402 and go with, you know, people can use that library that already exists. And, you know, the fact is that it does exist. And because it’s not this second that we’re standardizing it, we can over the course of this proposal over the next couple of years, evaluate how its usage is

SYG: What is the downside to using that library? I don’t understand.

DE: So this is part – part of what incompetent hope is a broader effort, which EAO presented at a previous TPAC of bringing in localization as a first-class resource on the web, so this is building the stack, this has been what the ECMA 402 group has been doing, but the whole time, we have the primitive formatters, higher level APIs, message format, then eventually we have – maybe, it’s not settled – but higher-level understandings of dictionaries of strings and formatting instructions as a web platform ability. We are standardizing the individual elements we can help application developers, you know, have a very solid option in front of them that’s well-supported. This is kind of similar to why we have iterator helpers or why we have anything added to the standard library. Because it helps developers solve a need that they have. This is a common occurring need.

SYG: Is it fair to characterize (without reading judgment on what I am going to say) the side to use the library it goes against like some broader mission?

DE: It doesn’t go against anything. It’s about opportunity cost. We have the opportunity to improve the ecosystem, to improve the way that applications are developed through this and any other standard library that we make. We can also decide to not extend the standard library or the web.

EAO: As a quick additional reply to SYG, one particular feature that the proposal currently includes is the parser for the syntax for MessageFormat 2. As a language feature that parser doesn’t need to be implemented in JavaScript, which is effectively a requirement for any other solution.

DE: I also want to mention on the queue, there was a comparison made between CLDR and this, I think that was a – maybe slight-wise comparison. In ECMA402, we are making heavy use of things defined by the unicode consortium. That’s been working well. CLDR is different from, you know, the algorithms and ICU APIs. It is different – there’s just a lot more individual pieces of data. I think the way MF2 is developed is more rigorous than any little individual data item turning out to be something that causes web compatibility issues. It’s just a lot more deliberate. There’s a lot more smaller surface area.

SBE: So I wanted to comment largely on the idea that something needs to be permanently relevant in order to be a useful part of the standard. I don’t think that’s the case. I think the best that we can do in creating a standard is to address the needs of developers now. I think it’s impossible to predict what the needs of developers will be forever. I think it’s pretty common that parts of the standard fall out of relevancy and new things are added to address gaps in previous APIs. You know, it’s not a TC39 thing, but XMLHTTPRequest fulfilled a need that developers had at one point, but it became insufficient and the fetch API was designed to replace it. As mentioned, JSON is widespread and that it was not added to ECMAScript until it was, but the supposed benefits of waiting for that aren’t actually realized. We still as mentioned that JSONC is there for comments, but that’s not actually part of the standard, that first – like, it’s – and so I think ultimately, over the long-term, we need to focus on what’s actually going to fulfill developer needs now, rather than trying to predict what they are going to need in ten years or 20 years.

RCA: Well, one of the motivations I had years ago, when I joined this group was message format. And I was looking at slides I presented to TG 2 about the needs and about the users and the developer experience of internationalization and localization on the web. And back then, one of the libraries that EAO mentioned, i18next, had around half a million downloads weekly. I was checking those numbers. And it’s approximately 5 million weekly, if npm doesn’t lie to me. Well, numbers probably are not a motivation. But since 3 or 4 years ago when we first presented these message format working group, things evolved. But the need to internationalize and to localize the web is still the same. And as people and developers are building, they need the right tools for duties work. So I do believe that to provide those tools, it’s extremely important, and on the other hand, those numbers also show us there is some way to go at level of battle proven APIs or syntax for the libraries for the interoperation for use cases for message format. Here, I do believe we need to understand what this committee wants regarding the stability because I do believe that everything on the web right now with a large user base demonstrates the need, the motivation and the certain way to go.

SFC: So to respond to some of the concerns that have been brought up, it sounds like there’s, you know, there’s two questions that I think we should treat separately and one question is, motivation of do we want to have this syntax parser in the ECMAScript standard? And I think that that is worthwhile discussions to have, to make sure we are aligned on that. The second one is, assuming we have a message format syntax like this in the language, then what is the stability policy? And I think that’s the question that EAO is trying to ask of the committee here. This is I think the third, maybe fourth time, that we have presented a message format to the committee. So, you know, I have not heard any big concerns about like is this well-motivated. If there are concerns about it being well motivated we should hear us and discuss them. Have incubator calls to make sure we understand better about if there’s any motivational concerns for the proposal. But that’s all.

ZB: So I just wanted to bring up a response to SYG’s comment about CLDR stability. MessageFormat in itself does not really depend on CLDR. It kind of binds together a lot of formatters that we already have and those that already exist in ECMA402 do depend on CLDR and are prone to the web capability issues that we experienced a couple times with CLDR updating and - This function is a black box, but of course that’s unrealistic to expect that everyone will respect and we know that it causes web compat issues. But MessageFormat, you can think of this more of a system that binds together a number of formatters that already exist and we control which ones are automatically included and excluded. The conversation as pointed here, is a question of are we comfortable bringing in a new DSL? And the downside of not bringing a DSL is that we will continue the JavaScript ecosystem as multiple DSLs for localization world and prevent ourselves from going up the stack and standardizing any system. Our position, as internationalization experts, we don’t think there is a sufficient justification to continue exploring DSL space. But it’s unprecedented and for that reason EAO’s question is rational. But are we comfortable with the DSL being brought up rather than, if the dependency in CLDR is going to be somehow mitigated by the – lack of DSL here?

PFC: I have two topics back to back. The first one I wanted to point out, there is a precedent set by the IETF for TimeZone and calendar annotations that we used in Temporal. But you could see reasons in it to choose either option A or option B. What this precedent says about option A is – in Temporal’s case, we decided that as soon as this annotation is standardized, we are willing to use it in string parsing for Temporal. What is relevant to option B in this precedent is that most of the annotation proposal was already used informally for decades in Java date-time strings. So there are really things that are relevant to both of these options. What we did add to the proposal that wasn’t part of the Java behavior is the calendar annotations. And that’s simply because we had a need that no other library addressed and so we needed a way to express that in a string. It looks like there’s a reply to that. I will pause for that before moving on to the next topic.

SFC: Yeah, I think that’s me. So like PFC said with the IETF proposal, like, we are like – we are here to work on programming language syntax and the other DSL involved with it. That’s kind of our job. And we did this in Temporal. And those couple of corners that PFC pointed out, we do this in RegExp where we invented mini DSLs. The difference is the syntax is bigger than those. But it’s still a new DSL like the other DSLs that we invent and modify and tweak. And it’s totally not out of the realm of responsibility of a body like ours, to move forward on those types of decisions.

PFC: Okay. I will move on to the other topic. So just to try and understand like where people’s deal breakers are for this, I was wondering, would anybody’s opinion change if the DSL being proposed were the DSL used by gettext, which is another message format tool? I don’t really know the background of what this proposal’s champions consider that the relevance to gettext is, but I am assuming we did not choose to use the gettext DSL because the web platform needed other things. But that DSL has been around for 30 years. As a thought experiment, I am wondering whether that changes anybody’s opinion, if what was being proposed here was the gettext DSL. Like would it be better to have a DSL with 30 years of field experience but is less relevant to the use cases of the web platform?

EAO: The reason why gettext is not being considered by us at the moment is that it’s insufficient for the needs of the web. I could go into details, but they are technical details that are not relevant for the question you are actually asking.

USA: I am not sure PFC, if you meant that rhetorically or seriously. But I think based on what I have known about gettext, it is actually a great example why being too conservative isn’t exactly helpful. Gettext was designed in different interfaces and as EAO pointed out, it doesn’t quite support any of the use cases of the modern web. This API, on the other hand, was designed with the current practices across the industry and sort of the dynamic nature of the web. Holding it for a very long time would just mean that we end up again considering something that is outdated for its time. It wouldn’t be as outdated as gettext, from the late ‘80s, I think. But similar to, perhaps, message format 1, which is in 20 years, it aged, not just because of the time, but because of how the nature of the interface – interface in general has changed

PFC: It wasn’t a rhetorical question, but I am not proposing that we use the gettext DSL here. I would like to know, of the people who are saying we need to have years of field experience before having a DSL, would it change your mind if the DSL being discussed here was gettext, that has the field experience but is less appropriate to our use case? What changes or what doesn’t change?

KG: I think that gettext is like a pretty good example of having a DSL and then it turned out after using it for a while it wasn’t a great fit. And therefore, it’s not a good choice to standardize. And if instead, it had turned out to be a great fit, then after that had turned out to be the case, as demonstrated by years of experience, then I would be quite happy going ahead and standardizing it. That’s what I expect to happen here. I think if we have a library and people like it, and the syntax ends up being suitable for the use cases that people out in the world actually have, and comfortable and ergonomic and doesn’t cause weird unexpected problems when stored in database and so on - then at that point, okay, this turns out to be good and we'll go with that. And if it ends up like gettext, it turns out we shouldn’t go with that. And that’s what I expect to happen with new DSLs. You use them for a while and maybe you make some changes and maybe you discard the whole thing and maybe you say actually by some miracle we got it 100% right the first time we tried. And then once it's been out in the world and people have been using it, at that point it's appropriate to decide whether to standardize. But not before that point.

USA: One thing that I wanted to mention to respond to your point, KG, is that this has – to some extent – this incubation has already happened within various projects and maybe like open source tools or within organizations’ internal tooling. This effort is essentially bringing all of that learned experience from the various stakeholders into a single DSL. So the exact DSL is not already tested because it’s still being fleshed out. But all the motivations, the use cases that it actually addresses have been well-documented.

ZB: Thank you for the thought experiment. I understand it and I think it’s actually a very good example because it’s such a bad example. In other words, I feel like it exposes us to the core of the question here. Gettext and MessageFormat 2 have a completely different history of industry backing in the development cycle. So while gettext, yes, became a dominant localization format for a decade, while being a bad format, and a lesson learned from it is why we shouldn’t create a data model that gettext enforced, it was developed outside of mainstream industry internationalization bodies. It was not designed by Microsoft’s internationalization group in collaboration with Apple’s. MessageFormat 2 is in a different place. From the beginning, it has representation of all major industry players of the core internationalization industry. It benefits from the experience of unicode, but not just unicode, also Google, Mozilla, Apple and other industry players, including my current employer, Amazon, and quite frankly, my position here that I would like to offer is that there’s no one else in the world who cares and understands how localization formats are evolving than the people who are designing MessageFormat 2. And getting a DSL in JavaScript is one of the vehicles for us to flip the script on how we can build a single localization system for the most popular programming language in the world, and then force and popularize the tooling for it. I agree with the concern, which is that if we get it wrong, we don’t want to have message format 3. But I would also advocate that by not getting a DSL in JavaScript, we are not really creating an opportunity for some other group of experts to create a MessageFormat 3 or some other syntax; we are just tragically slowing down by a decade development of a web localization system. And I think that would be unfortunate and I think that the opportunity here is very illusionary. I don’t think there’s anything else that can be done or anyone else that can produce an alternative for this group to consider two years or three or five years down the road. It’s MessageFormat 2 or, honestly, status quo.

KG: Can you say more about why actually having it in JavaScript matters so much, if – as you say – everyone who could potentially be involved is already involved in the MF2 standardization effort? Like, if there were just a library, but all of the people used and then in a couple of years you came back and said, yeah. It turns out the syntax we are quite happy with. And then we standardize it at that point. What’s – what is the cost you are seeing with that? And also to be clear, it’s not I am saying, I think there will be necessarily some other syntax that people will come up with; it’s that I would give reasonably high odds that it turns out that there will be some changes that you would want to make with the syntax, the same way there have been charges that people want to to make to YAML and SQL and JSON. And we only figured out that once we started to use them.

ZB: That’s a fair question. I think it may be a conversation for off-line. I am not sure we need to spend more time on justification. I think everyone who works on MessageFormat 2 sees Intl.MessageFormat as a vehicle to align the industry. Backtracking, one of the concerns that have been flagged with MessageFormat 2 overall development, the localization industry is moving so slowly, that there is never going to be a new format. Everyone will use gettext or message format 1 developed in 2000. We see ECMA 402 and JavaScript as a forcing function to align the industry around the single format, that we see as a superset of – as superior to the two decades-old format with no alternatives. In terms of improvements, I am not sure if YAML or JSON are good examples here because we cannot move forward because of the wide inter – between localization data that is durable and very costly to convert, I think that once we standardize the DSL, the value proposition of changing it is going to be incredibly low, if it’s in ECMA 402, it will different. It will be only iteratively extended in the forward-compatible way. I don’t expect any changes ever to MessageFormat 2. We have one shot to get it right and we would like to collaborate with TC39 to get it right simultaneously in Unicode and in JavaScript. And I understand that it’s a big ask and I think that’s why EAO is bringing it up to the group because it’s unprecedented to ask for that.

EAO: Throughout this discussion, I have most clearly heard concerns from MF and KG, so more of a direct question to you guys: what would you want to see before being okay with this advancing to Stage 2?

KG: I would want to see widespread experience with the syntax and people being happy with it. It doesn’t have to be like a decade of it being the only thing anyone ever uses, but like at least a few years with more than 3 companies using it. Because certainly more than 3 companies do internationalization and many are using other libraries. If a bunch of people end up using it and liking it and it does in fact end up being the thing to do, then we standardize it. But a few years of experience, like it says on the slides. I don’t know if MF disagrees.

MF: That’s exactly how I feel. Yeah.

CDA: We just have a few minutes left. SFC is next.

SFC: What I am hearing here is that I feel like the two options that are on the screen here are like maybe one is very far way and one is very far the other way. And it sounds like KG and others are saying here that we don’t necessarily need to have a decade of this, this is the only syntax, like KG just said here. And I think DE raised something earlier in the meeting, which is that what is The Bar to demonstrate this type of experience in the fields that ??? is looking at and DE made a proposal for that and he’s next in the queue and about I hope we can land on something like that.

DE: What if we came up with an idea for what kind of experience we’re looking for, which is more about what people do with it than about the number of years? Because then that would be more actionable for the group to accelerate. For example, the request could be for some large, medium and small organizations to try it. Use it in actual production. Make sure the translators and developers and everyone is using it through their full stack. And they do this for, you know, a number of applications. That’s the kind of thing that would be more – and maybe we’re talking about two years or three years. It starts to sound like ten years ago, it’s discouraging an investment in the topic. If it’s something that is actionable, then we can work on solving it.

CDA: Okay. The queue is clear.

DE: Maybe we could have an overflow topic to go into more the ideas that people have for what kinds of investigation would be useful? I feel like we don’t have a solid conclusion yet.

EAO: I was just about to also be asking for overflow time.

CDA: Okay. There is no queue to capture, but …

EAO: I would be also happy at this time to continue with my presentation, because I never got to my second question.

CDA: Okay. Is there anything you want to dictate for the notes at this point, or does that not make sense?

EAO: It’s -- later when we actually conclude this discussion might be better.

### Speaker's Summary of Key Points

### Conclusion

- We will have an overflow topic to cover the second half of the slides, and

## status of the IEEE Software paper about TC39

Presenter: Mikhail Barash (MBH) Slides: https://docs.google.com/presentation/d/1m_Yq3BFaZzSMk-eXzZ8EeLCVwU8RPvW2BYvkS-OAmoc/edit?usp=sharing

MBH: I want to present an update for the IEEE magazine paper. So just a quick reminder, this is where the delegates would explain with a scientific rigor how TC39 works. This is purely a descriptive effort, not introducing anything new about the work, so there’s this reflector issue and the detailed outline of the paper. What I would like to summarize here is that we essentially think of having a view on the work on the committee from several perspectives, the ECMA perspective from TC39, what the standard, how the meetings are going, how the decisions are made, the interplay between ECMA and TC39, and there’s an engine perspective, web perspective, formal perspective and the “people” perspective. And I’ll come back to this slide in a moment, but for now, I want to say that we are now seeking more input from the delegates on these three particular topics, so: ECMAScript and the web and its relation to the standard and test- 262. A summary of the three major browser engines would be much appreciated. In the “web perspective”, we would like to have more input from the delegates on the relation between ECMA262 and HTML and WebAssembly, also things like CG, web constraints, and we would also like to have some input on the test-262, for example, how the tests are grouped. And you can find more detailed outline as I mentioned in -- using this link. So what what we are looking for is just a very rough draft quality itemized list. This would be perfect. No need the polish anything. If you have any input on that, it would be greatly appreciated and I would like to thank very much those delegates who have already expressed their interest in participating in this effort and especially IS and MF, who have given a lot of input on this. So, yeah, just if you have any input on this, please either do post on the reflector post or send me an email directly. That’s it for this part.

USA: Thank you, MBH, there’s nothing on the queue yet. We can give it a minute or so. Are you expecting any comments?

MBH: Not actually. Maybe just saying here that we would very much appreciate delegates’ opinion and input on these topics.

USA: All right. Thank you, then. I suppose -- oh, yeah, there is a clarifying question.

EAD: Hello. What is the best way to get involved with this effort?

MBH: Right, so there is this -- the link here, the detailed outline. So this is the outline of the papers, there’s a bit of subsections level. If you have some comments about any of these items, it would be nice if you can leave some comment in this document. If you want to have more input, maybe posting it on the reflector issue would be good, or just sending me an email.

USA: Thank you. I encourage everyone to reach out in private to -- if you have any comments. Moving on, I think, MBH, you’re also next on the queue?

## chartering TG5 on “Experiments in Programming Language Standardization”

Presenter: Mikhail Barash (MBH) Slides: https://docs.google.com/presentation/d/1UUCJTCztvP8kYt4pycrxQKF65sT_3eS8w7hZ8nKPFdg/edit?usp=sharing

MBH: Yes. So just to make it clear, this presentation now is unrelated to the previous one. So though there is only my name here on the slide, this presentation is a result of discussions with YSV and she participated in formulating the scope and the program of work of this new TG that we had proposed on experiments in programming language standardization. So the scope would be to provide a forum for the discussion, development and dissemination of research work on the standardization of ECMAScript and related technologies. Essentially, this is an evolution of the research group that YSV started some time ago. This would be a space for asking questions on how formal approaches could be applied to ECMAScript standardization, so this would bring in academia and provide them with an official venue where they can discuss research related to JavaScript specifically and on standardization of programming languages more broadly. This would also be a place where academia could get early feedback from delegates without bringing it to the entire committee first. We have discussed this with several of ECMA member organizations, and on the slide, you can see the ones who have expressed interest. There is also some interest from organizations who are not part of ECMA. We also had adjacent interest from the Rust community, though to make it clear, we have not spoken to them about this in the form of a task group, as I present now. Also, YSV and I had a number of discussions with other institutions during our presentation last year at the SPLASH 2023 conference, and we expect this list to grow. So the work includes four items. To summarize and present ongoing research work from the academic community on JavaScript and JSON technologies, to investigate and discuss state-of-the-art approaches to aid the development of TC39 proposals, to produce documentation on best practices from research work to ECMA262, and to produce and present tools and technologies to aid in the understanding of -- and the design of ECMA262 and adjacent technologies. I could also say that in terms of kind of focus, this TG would be most probably closely related to TG3 in the sense that it’s not about new proposals, but rather assisting documentation, approaches, technologies, and so on. I would also like to mention that there was a previous discussion on this during the ECMA General Assembly in December 2023. So there was a potential discussion on whether it could be a part of TC49 “Programming Languages”, but now we see most work is probably related to TC39 and it would be too broad otherwise, and also TC39 has an active research community, and we think that it would benefit from sort of an official discussion forum.
. MBH: And the work about experiments in programming language standardization still is largely applicable to TC39, as it was actually inspired here. So this is just some example work that in particular the University of Bergen is interested - looking at different aspects of standardization documents themselves, such as navigation, customizability, and modularization of the standard, extracting sublanguage standards, slicing a standard document, specification verification, consistency checking and executability, implementability, so this is where we can see more relevance to the work done by KAIST. Things like refactoring the standard and so on. The work is planned to be done in GitHub. We would have monthly Zoom calls. We would have external input, from users, other technical committees and standardization organizations, industries, academia, we would use TC39’s Alternative Copyright Notice, and just as a first item on what we already have been working on is that we are summarizing the state-of-the-art in programming language standardization. So I would like to request consensus on chartering the new Task Group with this scope and program of work. Thank you.

JHD: When I originally reviewed the slides, they had a much broader scope. It seemed like it was general for programming languages. I appreciate that the scope seems to have been largely narrowed down to EMCAScript. I think that’s appropriate for this ask. But like you mentioned the Rust language community – I think it’s great if learnings can be applied across programming languages, obviously. But, like, Rust has nothing to do with TC39, so, like, I don’t see that -- other than communicating results back and forth or coordinating research or something, like, I don’t see any reason for the TG you’re asking for to interact with rust or any other programming language that’s not this one.

MBH: Right, so in the current program of work, this is -- yeah, as I mentioned, this is narrowed down to TC39. And I think it’s a good place to start with this, and then -- yeah.

JHD: So I mean, I’m glad to see is the scope narrowed, because from the slides, my suggestion was going to be that it should be its own TC, it’s not specific to this committee. But it sounds like the approach has been refined so that doesn’t really apply. So I guess that was sort of the question was, then, why not go for a TC to generally cover that topic? Why have a TG specifically under TC39 and only do this research in that narrow scope?

MBH: Well, I think here it’s -- it’s good to start with something sort of more manageable and we think that there is significant experience and significant expertise, I would say, in PL standardization in TC39, so maybe it’s a good idea to start within TC39, and then expand if we see that this is not broad enough for the kind of work we are trying to do.

JHD: Okay. My other point, which I put separate, but it basically overlaps, I think if you could go a slide or two farther down, yeah, here. So it sounds like some of this stuff overlaps with what the editors generally do. I mean, I’m not going to speak for editor group, but I would assume that editors would generally welcome research on how to do things differently. Do you see this TG as making recommendations, or would the results of some things perhaps dictate the way that the spec is organized and so on.

MBH: I guess it would be more on the level of a recommendation and -- and as maybe sort of trying to report on best practices, and then it’s of course, up to the editors on whether they would follow this recommendation or not.

JHD: Thank you.

DE: It’s great that you’re bringing this to TC39. I would really like to encourage this kind of research work. We had a previous iteration of this research group within TC39, and this approach that you’re describing sounds very good with very helpful deliverables. I’m okay with it if it does extend out tangentially from JavaScript, somewhat, but I’m also happy with an initial focus on JavaScript. I think our scope allows to us examine these things that are kind of related and attached areas, and we’re doing this with source maps being a task group.

DE: More broadly, I would really like to encourage us to do more things in TC39 and establish more task groups like this. These activities are useful for the committee, they’re useful for the broader community. We have a broad membership, and this is a way to encourage participation. This is a way that we can encourage reporting back and communication in both ways.

DE: A major factor in the previous time that research stopped was the, frankly, unprofessional attitude, dismissive, very negative attitude that the committee had towards the expert who came and tried to help us apply best research practices. We have to avoid that in the future. It violates our code of conduct. We should be grateful that people are coming in and trying to help. So I’m very glad that this is going on. And thank you.

MBH: Thank you for the comment.

MF [on the queue]: +1, love the new program of work

CDA: Yeah, just wanted to say plus one to chartering this task group. Similar to some of the comments JHD was making I was somewhat skeptical when I saw the original slides. It sounded like a whole new technical committee, but the new scope and program of work, it’s a lot easier to see how it falls within the scope of TC39 itself, so definitely would be great to see this. Thanks.

USA: And in the end, I -- there’s me on the queue, and I wanted to sort of plus one the point that DE made. This is very necessary work. If we aim to serve the needs of all the committee, as well as the greater community, so thank you. We also have SFC, who says plus one. And he’s endorsed the formation of this new task group. So for all the positive comments and nothing --

JHD: I just wanted to add, instead of just typing this out on the queue, so I definitely support this as a TG with the narrowed scope. My original reaction to the previous version of the slides was because I thought that it would be valuable for the scope to be broader and more impact would be able to be had if it was actually a full TC. If this, however, is just kind of a start and eventually it could move to a full TC and have broader impact beyond just this one language, that would be great as well. Thanks.

USA: Thank you, JHD. So I think we have consensus on chartering this new TG. One thing, the first order of business would be to pick chairs for this TG. So there is something for that. I think it was part of the presentation, or was it not?

MBH: Right, so the original idea was that it would be YSV and myself, but YSV’s focus is currently on other projects at Mozilla, so for the time being, it would primarily be myself who would coordinate the work of this new TG, if the committee is fine with that.

You would -- my understanding is that this is okay with respect to ECMA process. The code convener or vice convener is recommended but optional role. I think SHN could clarify. One thing, however, if you’re looking for somebody to be co-convener, this would be the right place to ask.

SHN: Just to comment, that would be fine. If you get a co-convener, it would be even better so you have the support you need, Mikhail, and maybe next week when you put a little news together regarding this TG5. Thank you.

USA: RGN also expresses plus one from all of Agoric for charting this TG. So, yeah, I think we’re all in agreement. Thank you, MBH.

MBH: Thank you very much.

MBH: Right. The decision has been made to charter a new task group on experiments in programming language standardization. The convener of the group is MBH.

SYG: Can I ask a meta question about charting these TGs? Are there -- so I know that charters in other groups like W3C are -- they have an expiry and then you come back and recharter to see if the scope is still relevant. Do we do that here, or once we charter something, is it in perpetuity until something else happens?

DE: Unless otherwise stated, it would be in perpetuity by default. I think this is one reason that I’ve encouraged things like sort of Snaps or WinterTC to work within ECMA, because I don’t want to work through the bureaucracy of rechartering and arguing all the time. I think that the mitigation that we adopted for source maps was we would have status updates in the -- in each plenary. It could be very short. And so if we find that the activity ceases, we can, you know, discuss it easily at the status update. It should be very easy to raise at that point.

SHN: I confirm that would be correct, DE. All the TCs or TGs that we have, we do not have expiry dates. We always work and they stay open.

SYG: Thank you. That sounds good. I think for most of ECMA’s activities where there’s, like -- where the participants have some incentive to also participate in perpetuity, by which I mean, like, browsers, like products are going to continue to exist, there’s no expiry on those, as long as they exist, people will continue to participate. That makes sense to me. For TGs where they have a more academic slant, I know that from personal experience, things tend to fizzle out once some cohort of folks graduate, and I’m wondering if that’s a concern here.

SHN: So this TG, it would most likely result in a technical report. MBH, if you’re on the call, can you confirm that.

MBH: Yes, yes, this is correct.

SHN: And often times we always maintain these technical reports. They may have different additions. So you may have changes in your committee, but it could continue. So, SYG, your concern is fair, you but I think that other TGs we have do continue with the work. They do sometimes have a pause, they do get revived. We watch them. We never let them sit completely idle.

USA: All right. We are over time. Thank you so much, MBH everyone and else for participating in an organization. Thank you.

### Speaker's Summary of Key Points

- A new Task Group TG5 will be chartered.
- The scope of the task group is to provide a forum for discussion, development and dissemination of research work on standardization of ECMAScript and related technologies.

### Conclusion

- TG5 is convened with the stated scope/program.

## ArrayBuffer transfer for stage 4

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-arraybuffer-transfer)
- Slides: See Agenda
- [PR](https://github.com/tc39/ecma262/pull/3175)

USA: Before you start, we are going to the break a little bit during this, so, yeah, we can just add -- but, yeah, please go ahead.

JHD: Okay. Hi, everyone. I’m Jordan. I’m presenting the ArrayBuffer transfer proposal. Basically, I’m asking today for Stage 4, tests have all been merged. It has been shipped in chrome for quite a while. Since version 114. It is unflagged in Firefox version 122. I believe it is merged into webkit, but not yet released. That may have changed in the last couple weeks, but I haven’t heard anything yet. Serenity OS has it, and there’s polyfills that are published, and there’s a specification PR that is partially editor approved. So essentially, what I would ask for is the conditional Stage 4 on the rest of the editors approving that PR.

JHD: SYG is a co-champion on this as well, and has reviewed this as well. So this is adding an accessor to a ArrayBuffer prototype for detached that tells you true or false, whether that buffer is detached or not. Transfer method, which transfers the buffer to a new one, and that preserves resizable or growability, and a transfer to fix length, method, which does not preserve it. It produces a method -- an ArrayBuffer that is not resizable or growable. That’s all. Hopefully I can ask for conditional Stage 4 for the remaining editor on the PR.

USA: There’s DLM who says it’s for Stage 4. That’s it. Anybody else would like to add a vote of support? Okay, RGN mentions they support Stage 4. All right.

JHD: Cool. Thank you.

USA: Well, congratulations, Stage 4.

### Conclusion

Reaches stage 4

## Set Methods bugfix and update

Presenter: Kevin Gibbons (KG)

- [PR](https://github.com/tc39/proposal-set-methods/pull/105)

KG: So I have an extremely brief update for the set methods proposal. The first and most important thing is that it’s implemented in Chrome, and will be shipping to stable in I believe a couple of weeks. It’s also shipping in Safari since 17, I want to say, and I know Firefox has an implementation underway. I’m not sure what the status there is. But so my hope is to go for Stage 4 at the next meeting.

KG: But unfortunately, one small order of business that we need to take care of first is that I noticed a normative issue with a specification. You may recall that the way sets are implemented internally is as a list of items that never shrinks and only ever grows. This is editorially convenient, but obviously not what actually is done in practice. So there were a couple of places where the spec was failing to account for the markers that are left behind when you delete an element, when computing the size of a set. Those need to be skipped over, and were not being skipped over. This is technically an observable change to the behavior, and since this is Stage 3, I need to ask for consensus for it. But it’s definitely a bugfix and no one would ever have done the other thing. So I am hoping for a rubber stamp on landing this fix to the proposal and then hopefully next meeting I will ask for Stage 4. Can I have consensus on this pull request?

CDA: Plus one from JHD. You also have a plus one from RGN.

KG: Okay, that’s all I got. Thanks very much.

### Speaker's Summary of Key Points

- Set methods is shipping in Safari and will soon be shipping in Chrome, hoping to ask for stage 4 next meeting
- There is a normative bugfix to the spec

### Conclusion

- Consensus on the bugfix https://github.com/tc39/proposal-set-methods/pull/105

## Temporal update & proposed normative changes

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://ptomato.name/talks/tc39-2024-02/)

PFC: (Slide 1) Okay, welcome to the Temporal presentation. My name is PFC. I’m doing this work for Igalia in partnership with Bloomberg. This presentation is going to be a short progress update on Temporal, and then we’ll have a couple of normative changes to present. (Slide 2) To give you an update on the progress up until now, we had normative changes approved in previous plenaries that hadn’t been merged yet because we were still writing tests and things. That backlog is all caught up, so the Temporal specification, as it is online on the web now, it also represents the current consensus. We want to propose four small changes today for bugs that were found during implementation or polyfilling or use in the community. All of these changes are narrowly scoped. They have minimal impact. And we are planning to merge them fairly quickly after this meeting.

PFC: I just want to reiterate this isn’t an indication that the changes will continue to come. At this point in the bug tracker for proposal, we have no more known outstanding bugs. And certainly there are no more sweeping changes on the horizon. The last one that we presented was in November, and it was a one-line bug fix. Before that, the last time that we had any large changes to address implementer feedback was in July. The Firefox implementation is actually nearing completion at this point, and so if ABL doesn’t find any more bugs in this implementation, then we are fairly confident that the number of bugs is few and hopefully zero. Well, we all know that zero bugs is a fiction, but few.

PFC: (Slide 3) So assuming that we get consensus on these normative changes today, the next steps will be to finalize any editorial changes. We’ve had a signal from FYT working on the V8 implementation that editorial changes that touch a lot of things can be disruptive, so we want to get those out of the way as soon as possible. And, you know, once that’s done, we will give a loud signal and we think you can expect that pretty soon. There is a checklist on the proposal’s issue tracker that you can follow if you want the most current updates on that. You can click through this link in the slides.

PFC: (Slide 4) All right. That’s the progress update. I will run through these four normative changes really quickly. The first one is a change to what return values are permissible for calendar’s week number methods. This was reported by early adopters using one of the polyfills out there who were using the Islamic calendar and noticed that some calendars have well-defined week numbers, such as the ISO 8601 calendar famously. And also the Gregorian calendar, although not every jurisdiction that uses the Gregorian calendar customarily uses week numbers. It does have a scheme defined for numbering the weeks. Some calendars don’t number weeks. Now, we have something very similar already in that some calendars use eras, such as CE and BCE in the Gregorian calendar, and some don’t use eras. And for that reason, we allow dates' `era` and `eraYear` properties to be undefined if the calendar doesn’t use eras. We’d like to do the same thing for the `weekOfYear` and `yearOfWeek` properties. Currently they are specified to have the value of a number. We would like to change that to a number or undefined, and those properties are — what underlies those properties are the similarly named calendar methods, and we’d like to allow those methods to return undefined as well. Currently if you return undefined from such a method, it won’t pass validation, and that will cause your method to throw.

PFC: (Slide 5) A couple of notes on the kind of unique situation that we have for specifying calendars: we believe that exactly which calendars have week numbers and which don’t, doesn't have to be specified in ECMAScript because the data comes from CLDR and ICU. We don’t have to answer, which calendars have weeks and how are they numbered. There is a proposal in the process called the 'Intl Era and Month Code proposal' and we think that question may be in scope for that proposal. So we have opened an issue on that proposal’s issue tracker and you can click through and follow that if you’re interested.

PFC: (Slide 6) The next thing to present is something that was reported by a polyfill author from the community, Adam Shaw, who has been doing a lot of testing of the rounding and differences math in his polyfill. So there’s a bunch of dates and times on this code sample here, that illustrates the bug. What is basically happening is that in an edge case where the day on which you are rounding the duration has a daylight saving time change, you get the wrong answer because a day in the fall when you turn the clocks back an hour, that is 25 hours in that particular TimeZone. If you have 24 hours on a day that's 25 hours long, you don’t want to round up to one day because that’s not accurate. This was the question of the algorithm in the spec using the wrong reference date. So that’s what we want to fix.

PFC: (Slide 7) But more generally, these two lines of code here should always be equivalent. If you’re rounding a duration relative to a date in the past, you want that to be equivalent to if you add the duration to that date in the past and then take the difference and round the duration as well. Those used different code paths before, because it allowed us to minimize the number of user calls to custom calendar methods, but it seems better if we are going to have bugs like this for them it use the same code paths so the results don’t disagree. So that’s part of the pull request that I linked in the previous slide.

PFC: (Slide 8) Here’s the bug that Adam Shaw found, an edge case with daylight saving time. We used, in the spec algorithm, the wrong intermediate date for the calculation. So if the intermediate date lands on a time that is skipped when you turn the clocks forward an hour, then it jumps to the end of that daylight saving time hour. This here is a narrowly scoped fix to use the correct intermediate date.

PFC: You can see the example of the bug here in this little code snippet. You start out with a duration of one month, 15 days and 12 hours. And then you add it to a date and then you subtract it again and get a different duration with 11 hours and that’s because of the skipping over the turn-the-clock-forward hour in the intermediate date. That shouldn’t happen.

PFC: (Slide 9) Finally, this question was raised by ABL as part of the Firefox implementation, you would have surprising results if you were using since and until to compute date arithmetic. We take here, January 28, 29, 30 and 31st, and compute the difference until February 28th. And surprisingly, the result is one month every time. That’s a bit weird. We compared the date calculations in Java at that time, which give you for these calculations, one month, 30 days, 29 days and 28 days respectively. This is kind of – you know, saying that January 31st until February 28th is one month, it’s not wrong per se, because there is no February 31st, but it doesn’t tell you the whole story. We decided to make a tweak to the date difference algorithm that would give you a bit more understandable results in this case. It’s worth noting you don’t run into the problem if you are using the default `largestUnit: ”days”`. This weirdness only pops up if you’re asking for `largestUnit` `”months”` or `”years”`, which is inherently weird because months and years last different number of days.

PFC: We tested this on the difference between every date in a 4-year Gregiorian calendar leap year cycle with every other date and it affects 0.2% of those results. And the ones it does affect, they all make sense in our opinion. So we think this is a good change to make.

PFC: Are there any questions so far?

CDA: Nothing on the queue. No. DLM?

DLM: Sorry. It was end of message. + 1 for normative changes.

CDA: Okay. Thanks.

PFC: I would like to move on to requesting consensus formally then on the PRs.

CDA: You have a + 1 DE and the previous one from DLM.

PFC: Sounds good. I have a proposed conclusion for the note here, which I will copy into the notes in a moment. And I would like to say thanks. And looking forward to hopefully not presenting something like this again.

### Speaker's summary of key points / Conclusion

Consensus was reached on a normative change making week numbering optional for calendars (PR #2756), a normative change to fix a bug in duration rounding (PR #2758), a normative change to return more useful results from date differences in end-of-month edge cases (#2759), and a normative change to fix a bug in ZonedDateTime differences (PR #2760) reached consensus. The proposal champions are not aware of any further outstanding bugs, and expect implementations to be able to use the proposal as a stable base in the coming weeks with only editorial changes expected. Follow the checklist in #2628 for updates.

## Micro and mini waits in JS for stage 1

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/syg/proposal-atomics-microwait)
- [slides](https://docs.google.com/presentation/d/1XYn7rgPw-WYAnH3X10GboMwn8xLH3oUx2TlDe6f6lSY/edit)

SYG: All right. So this is a proposal for Stage 1, a new proposal for Stage 1. It’s about two kinds of waits in JavaScript. So before I get into what I am actually proposing, it requires some background. The background here is, how do locks work? How do you try to acquire a lock for, say, a pthread mutex. This has nothing to do with my other proposal about shared structures. This is something that we already can express today, via SharedArrayBuffers. The pseudocode you see up there is the general shape of what is a loop – of what the body of a loop in the lock method does.

SYG: There’s two paths to acquiring a lock: there’s a fast path and a slow path. The idea is you want to lock that fast when it is uncontended. And also a lock that is efficient when it is contended. The fast is for the case when the lock is uncontended. Uncontended in this case, you believe it’s currently unlocked, or unlocking is imminent. The other thread will relinquish the lock. In this case, what folks have found out by knowing about CPUs work and whatnot, it is faster to occupy the core by doing a spin lock for a bounded number of times. If you spin infinitely, that is really bad. If you spin for just a little bit, for some number of counts with some exponential backoff usually, that is to be much higher – that is much higher in throughput on CPUs when the lock is relatively uncontended. CPUs, when doing the spinnings, I don’t know very much about arm, X86 likes to be hinted that you’re actually spinning while waiting for something else, in this case, acquiring the lock by like a – the try lock method there is under the hood comparison – a memory address that is serving as the lock word.

SYG: The CPU likes to be hinted that you are basically hammering that memory cell or bit trying to see that it’s changed and trying to change it. It likes to be hinted that even though you keep doing this in a loop, the CPU ought to release some shared hardware units. Like I am going to be very generic here. I am not a CPU engineer, I don’t know the details here, but basically, the guidance that we get from like the Intel optimization manual, there are things in a CPU like reservation stations which is something to do with like buffer forwards and the uploading and the loading from memory, that itself is like a little piece of hardware in your CPU and that is shared among multiple cores. It has exclusive access to that thing. The CPU needs to give another core control of that unit. That is a separate unit than the actual thing that is executing your instructions. So CPUs like to be hinted, say, occupied the core, the executing bit, but also release some of these other unit that are shared so that the try lock bit, the swap, have a higher chance of success. Not hinting that, the upshot is not correctness problems, it’s purely a performance hit. If you don’t hint the CPU, it takes longer to release those reservations station slots and longer to observe that the other thread has already relinquished control by changing the content of the control word.

SYG: In C or C++, in lower system level languages, there is an intrinsic like `_mm_pause()` that serves as the CPU hint, there’s an x86 instruction called `pause`, there’s an instruction on arm called `yield`, serving the same purpose. So the problem is that currently, in JS, we have atomic style wait, but cannot hint the CPU to do that. We can write this loop without hinting at the CPU. And without the ability to hint the CPU, the loop is basically inefficient and can – can it make efficient by making the microwait API. My current proposal is to add a microwait API like on the screen there that enables the hinting, it takes an integer argument that doesn’t serve any other purpose except that if you are doing the await itself in a loop like shown on the screen, usually this is done for exponential backoff. You don’t want to spin forever. You want to kind of spin for shorter and shorter times, as time goes on.

SYG: The integer argument serves a hint to what iteration you’re on and how long it should wait. But the idea is that this API – this new method does nothing except waits for a very short amount of time. And if you pass it an integer argument, it waits as long as N + 1. So that is the first bit, the fast path for why you might want to be fast when uncontended.

SYG: You also want to be efficient when the lock is contended. Meaning, if you don’t think unlocking is imminent, where if you think that it’s going to be awhile, who knows how long, until whoever else is holding the lock, to relinquish it, you won’t want to keep spinning, that takes – that has a power draw, heats up your battery, et cetera. Instead, you want to tell the OS, I am going to be waiting for a while. Put me to sleep, wake me up when I get a signal that the lock is in fact, relinquished. This is basically what `Atomics.wait` does. That’s the point, that it puts the executing thread to sleep and then it gets woken up by an atomic any of or time out. The problem is, we cannot block on the main thread. I am not proposing we relax that. That is a hard policy choice on the web platform that the main thread must never be blocked for responsiveness reasons.

SYG: Instead, I am proposing that we do some harm reduction. It’s not that people see the policy choice that we can’t block and decide, okay, I will just completely rearchitect my program and not block and asyncify everything. What we have seen happen is instead: I know how to emulate a block. I will write a busy loop myself. That is bad for efficiency. So as a harm reduction thing, I am proposing that we add an overload to `Atomics.wait` with an options bag that says, clamp the time out, if you’re in an environment that cannot block.

SYG: I have some ideas on how to clamp the timeout. I think this space needs more exploration. But the idea is that, if you are on the main thread, in an agen who cannot block field is true, for the agent specifier, agent record, whatever it’s called, the time out value will be clamped to an implementation-defined positive finite number. Currently, if you cannot block and you pass it – any timeout, I guess, it will just throw. But this is saying, even if you pass it a number, `Infinity`, if you pass that option, it will clamp it to some implementation-defined value under the hood. Possibly zero, which means it will return time value immediately. But the idea there is that, it lets us await – it lets you sleep the thread, for short amounts of time, hopefully not long enough to harm the responsiveness goal of why we made this policy choice to begin with.

SYG: You might be wondering, who is this for? Basically one user for this and that’s Emscripten. This is not hypothetical. This is the tool that people use to compile to WebAssembly. WebAssembly, like JS, doesn’t do anything by itself. You need to embed it somewhere and then pass it in API, so it can do things like paint on the screen, whatever. JS acts as the embedder for WASM. And then the web embeds JS. That’s the layering there. Emscripten has basically an emulation layer written in JS that emulates LibC and kernel syscalls. So that when you run your C++ program, if you need to do thing, like block the thread to wait, it call us out to the JS library that emscripten, if you compile something with pthreads, it’s not something you can do to do, we have SharedArrayBuffers, shared memories, web workers… if you’re compiling a C++ program, pthread mutexes, they are – implemented with futexes. Futexes basically look like atomic style wait, except we can’t use atomic style wait on the main thread. And this emulates this with a busy loop. This is really bad. Because it is inefficient for power. It’s just not desirable. And because we can’t relax blocking on the main thread, the hope is, maybe we do some harm reduction instead.

SYG: I also independently heard this is useful for game engines with frame budgets. If you are writing a game engine or a rendering library, and you want the 60 budget, you can’t afford to wait on a lock for very long anyway, so they would also use something like this.

SYG: The open question is how do you actually clamp the value? For HTML, tying to the remainder of the deadline for `requestIdleCallback`. It tries to determine, are we in an idle period and how much time is remaining the the idle period. That’s often zero. Often not, which means time out all the time. Tie to `requestAnimationFrame`? There’s some problems there as well. `requestAnimationFrame` doesn’t take next input into account. So you may be blocking for longer than you would like. If about you knew there was input queued up, there's the question of clamping to zero useful? Meaning, if you allow the clamping to immediately time out, are we – have we achieved the harm reduction goal is the status quo, you’re in the busy loop anyway? These are open questions. I don’t have answers for them. But I am just asking for Stage 1.

SYG: So asking for Stage 1. The problem statement is a two-fold problem statement. To be clear, depending on the queue, it is possible to split these two up. These are pretty different. But I think there’s enough connection to try to look at them together. The problem statement is to explore solutions to one, the performance locking code fast paths, and two, to improve the status quo of busy loop workarounds in code that decide to block the main thread away. This is for the contention slow path for trying to put something to sleep.

SYG: And that’s the presentation. I will go to the queue.

MLS: It seems like the pseudocode that you presented, the last slide, that you think it’s okay, but I am going to say you think it’s okay. You think that people will block no matter what and we need to do something to reduce the harm. Even if we clamp it, we’re still going to block the main thread while it’s waiting to try to get the lock. Correct?

SYG: That is correct.

MLS: Okay. So I have problems that we’re putting in a foot gun effectively for a JavaScript developer who could maliciously block the VM from doing some other useful work. And I don’t have a good answer for that. It sounds like you don’t necessarily don’t have a good answer about that except for clamping it. Again, you probably need to allow some waiting, if we will allow people to write their own mutexes. That’s my first question.

SYG: sorry. The question is… ?

MLS: I think you answered yes. It does allow people to block on the main thread for at least a short period of time.

SYG: Yeah. As for – so I agree that it definitely could block – if you call this, it could block the VM from doing unuseful things. To clarify, this is – you’re responding to the clamping thing only. Is there any – that’s not to the microwaits?

MLS: The microwaits, I am not sure – you have a number of spins. It seems like the microwait you also are blocking given the name, I am assuming, that you intended that to be much shorter time.

SYG: Yes.

MLS: If I give a huge spin value, and I put in a loop in my case spin count is pretty large, I am effectively blocking for a percentage of time, even though I go back to block and microwait it again.

SYG: You have written a infinite loop –

MLS: Sure. Agreed. Agreed. If the loop doesn’t do anything and just – which can be done today. Certainly.

SYG: Right.

MLS: So I have a bit of a problem with that. My higher-level question, which is the second thing in the queue, is doesn’t it make sense to provide some optimized lock primitives active instead of giving people building blocks? And the reason I say that, we have found at least on our team, that the people trying to implement locks don't fully understand what is going on in the CPU, you know, you were describing something going on. When you have multiple cues, you have cache line thrashing. Cache lines need to move between cores. Or if you have snoopy caches, activities between CPUs and not making any progress.

MLS: And you’re right. Different CPU respond in different ways, depending on the architecture. Does it make sense to have a higher level goal, some lock primitives and those can be implemented efficiently on different devices so we are not – somewhat at the whim – we provide the appropriate higher-level tools so we are not at the whim of the JavaScript programmer that is detrimental.

SYG: My answer so that is definitely. That is part of the structs proposal. We want high-level mutexs or a condition instead of a futex-like API. But I don’t see that it’s mutually exclusive if the higher-level things are for JS authors. Whereas, this is basically for JS as a compiled target for C in the case of Emscripten. This is a very scoped use case. I completely agree that your average JS programmer is just not served by this. And they really should not use it because you really shouldn’t be writing your own mutex. In the case of Emscripten, there is no choice. Even if we give them a JS mutex, they can’t use that – they are compiling e.g. pthreads mutex's implementation that bottoms out at a syscall like futex or os_unfair_lock or whatever it is on macOS.
. MLS: So I have some problems with what you said. So the use case is at this point Emscripten, a single use case. However, we put in the standard and people –

SYG: We already put futexes in the standard.

MLS: I understand that. I am just thinking if we should have – if we come up with something that has less detrimental issues for where it’s used. I think you understand where I am coming from

SYG: I agree with you.

MLS: I know you do.

RBN: This is to MLS’s question about or talking about lock primitives instead of building blocks. If you want to write efficient lock-free algorithms you can’t depend only on synchronization and locking primitives. These algorithms often need spin waiting to be efficient even if you are using these other lock primitives or other synchronization primitives. It’s a building block that is essential to the algorithms. It needs to exist on its own unless it could be wrapped up into another thing, such as a SpinWait primitive, which is basically what this is doing.

MLS: I have already talked about it. I agree that, yeah, there are lock free primitives that do require spin waiting. It’s more difficult to make those as primitives. We can deliver. There are some possibilities, but it depends on the API that we’d want to surface.

DLM: We discussed this internally, I think we have casual support for atomic stop microwait. We want that explored more. What I am less concerned about is the clamp time out. If you could expand a little bit on what you’re trying to accomplish with that. Is it easier to make code from a worker thread to a main thread. Trying to make it so that you could put the main thread to sleep. Because that doesn’t seem like a good idea.

SYG: It’s a non-goal to enable you to write the same code that can both work on the main thread and the worker. I think that is architecturally not possible and we should never encourage that anyway. Because as Firefox has raised when we added SharedArrayBuffers, it’s not a matter of responsiveness, not not blocking the main thread, architecturally, Gecko at the time, but the main thread was responsible for doing some like IO stuff, in support – like in the service of worker threads. So if you blocked the main thread, you could also deadlock your worker threads unknowingly because of how certain Web APIs were implemented under the hood. And for that reason, code on the web, it is not possible for them to ignore the fact that they are on the main thread versus a worker thread. This is not a goal of this. The goal of this is pretty narrow. The goal of `clampTimeout` is basically just to not spin the CPU and heat up your battery in the – in the locking emulation layer in Emscripten. It’s a very narrow goal. At least that’s the starting point. There is like I said, on this slide, it’s possible. It's useful for game engines with a frame budget, where they need exclusive access to some piece of SharedArrayBuffer stuff. A worker has calculated and put the results in. And they are okay with just dropping a frame, if they can’t get the lock in time.

SYG: But it’s not meant to block the thread, the main thread in any real sense of block. And the max here is probably like 16 milliseconds. We are thinking 60FPS. The max that might be acceptable to block with a `clampTimeout` clamped to 16 ms. Possibly shorter.

DLM: Just make sure I understand then, clamp time out is basically a longer wait than what you get with microwait.

SYG: Right. So yes. It’s mini – I am calling it mini. Micro versus mini wait. It’s a – like, architectural – on the CPU versus OP level, there’s two yields. One is a CPU hint that says, I will yield not the core, but I yield these other shared units like – it has to do from reading from memory that MLS was referring to. That is about a CPU yield. OS field, that says put my thread to sleep and wake me up later. That could be very long or relatively short. It’s longer than a few nanoseconds. Longer than 100 CPU cycles. And it requires the OS to actually put the thread to sleep. clampedTimeout out is `Atomics.wait` is OS level yield. And it’s totally fair that you might look at this later and say, this is – we think it’s too much. It’s not useful. I think it’s too narrow or whatever. Architecturally undesirable. That’s possible. These are things I want to explore during Stage 1. And it’s possible we come back and promote only the microwait part to Stage 2 and drop the clamping, or split out the proposal.

DLM: Sure. Thank you. That answers my question. We support investigating this for Stage 1.

SYG: Okay. I think the queue is empty. In which ways, I will ask again for Stage 1 for both right now. But I did telegraph that we might split or progress independently after the investigation.

CDA: I support Stage 1.

KG: For the record, is exploring alternative locking primitive in scope?

SYG: Not in this. That is explicitly in the structs proposal. So like I guess, yes, for TC39. No for this.

CDA: All right. Any more voices of support for Stage 1? Hearing nothing. But also hear no objections. I believe you have Stage 1. Do you want to dictate any key points, conclusions, or summary for the notes?

SYG:I don’t think so. I think that’s fine.

CDA: Ok, thank you. We have another + 1 from RBN.

### Speaker's summary of key points / Conclusion

- Proposal reached Stage 1

## Promise.try for stage 2

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-promise-try)

JHD: So back way, way, way back in the year 2016, I proposed `Promise.try`. Essentially, I have a function, it might be synchronous or asynchronous; it might return a promise or not; throw an exception or not. I don’t want to care, but I want to wrap it in a promise. So if it is a throw, it does the right thing.

JHD: The easy to remember way to do this is here. `Promise.resolve` and in the `.then`, you run your function. This works fine. But it runs asynchronously when you don’t want that the more modern way is immediately invoked async function where you await the function, and then that has the actually desired semantics.

JHD: At the time that I made this presentation, the general response was that in order for it to qualify for Stage 2, more sort of convincing would need to be done about the utility. Given that you could just use the await syntax and solve the problem. At the time, the userland versions of this proposal were sort of mildly used and I think the general expectation was that or the general hope at least was that nobody would need this functionality and the syntax would be sufficient. However, since that time, two years later, this was published and 46 million downloads a week, this graph over time continues to go up and modulo a few NPM data hiccups are steady at 45 million a week. Pretty clearly there is some use here. It is one package, and it’s from one author. And that author certainly has a lot of other packages, and perhaps the usages are just because they stuck it in one of other packages that also has a lot of usage. I still find myself having a need for this functionality. The workaround I do is this `new Promise` snippet here. Where in the `new Promise` executor, I pass the function to `resolve`. It works. It’s ugly. It’s easy to mess up. And it is confusing when people first encounter it. Given I had looked up this package, and saw that it was now actually used very, very heavily, I thought I would bring it back and either ask for Stage 2 or get a fresh response from the committee about what the committee would see it to have to qualify for Stage 2. That’s all.

NCL: Yeah. I put – the topic, maybe it needs to be a clarifying question. And so I assume that this would show why this is needed. But from – is it needed in this case? Couldn’t it just do `value = await synchronousfunction`? Will it just work the same?

JHD: In this specific snippet, yes, it would work the same, given that top-level await exists. If the goal is to have a promise, on which you want to use the promise combinators. It’s not as trivial as doing that. There will always be use cases where you want the promise and not the awaited value and that’s where `Promise.try` comes into play.

CDA: The queue is empty.

JHD: If the queue is empty, I would like to ask for Stage 2. The spec is very straightforward. That is the entirety of it, recently rebased on the latest version of the spec.

CDA: KG?

KG: Yeah. It’s just – I still don’t understand why this comes up. Can you say more about why this comes up?

JHD: Yeah. In particular, when I am authoring an API where the consumer passes me a callback function, and then as I indicated when I was responding to NCL, that I want to essentially produce a promise, from that, and then do further work on it. Maybe I want to race it against something else, or `Promise.all` and further work with it, at some point I am going to get to a place where await syntax handles the rest of it. But the initial set up requires in many of my use cases, working with Promises. I do have a work around, so this isn’t a new capability. This is just kind of a more straightforward and elegant way to represent that thing that I find myself having to do now and then.

KG: Specifically, when having an API, it takes an async function that you want users pass sync functions

JHD: It’s a function that I don’t know its color.So yes, the user is passing a function, and I don’t know for sure if it’s sync or async or throws or not throws, and I don’t want to have to care. I want to just be given a Promise, and do my best to handle it.

KG: Okay.

JRL: Another case https://github.com/ampproject/amphtml/pull/15107 we had for this, in AMP we had asynchronous error handling. If the error were wrapped in a promise, we handled everything properly. Because of the code change we had a promise.resolve and invoked a function. That function itself threw an error synchronously. Because we didn’t have synchronous catch handling, only async catch on the promise chain, we failed to properly handle this case. My developers didn’t understand the difference. They thought it would be caught by the promise and handled in the asynchronous promise handing. We forced everyone, if you had a Promise.resolve(fn()), it had to use our version of promise.try and that fixed the bugs for us. We were able to rely on asynchronous error handling from then on.

CDA: Shu?

SYG: I guess I will do the queue item first. Any name concerns? Given try seems like a common word, given there’s other – these packages?

JHD: I mean, given it’s a static method, I don’t anticipate any issue. But I am also not – this seems like the most reasonable name to me, but I am not really attached to it. If it turns out there’s an issue, I am happy to dive back into the web compat mines and figure out something that makes sense and be less risky. I feel this is very low risk personally.

SYG: The queue is empty, if I can ask a follow-up question from before. I am still trying to understand it. Use case is you have an API, that takes a callback, that might throw synchronously, but is otherwise async?

JHD: Yeah. I mean, it could be. It sort of depends – basically, I can’t trust the user will pass the thing that I think they should (in general, ever). So I would hope – this is a case where sometimes the user needs to do it synchronously, or asynchronous. And obviously, if they are using an async function, it will never throw. That’s ideal when async; I always return a promise. But I can’t rely on the user to exactly match that, and there’s not like an `AsyncFunction.is` predicate - there isn’t a reasonable or meaningful way to check that. Generally what I do is just invoke the function and catch whatever they throw or return and go from there.

SYG: So the two responses, I still would like to read a concrete thing where this happens. Second, if that is the use case, this – if I understand correctly, if that is the use case, you would – the recommendation would be that you always use promise.try, never promise.resolve, when the value producing thing is a call back function. But then this API seems rigid if you can only have it do nonlinear functions. What if you need to pass to generate the value?

JHD: I mean, that’s the same as anything else that takes a callback. Right? You bind it or you wrap in an arrow function. And I can show you something concrete. So this is a test framework I maintain called `tape`. And I have to find where in the file it is. But essentially, a tape callback and – I don’t know if this is the right code. I pulled it off the top of my head. A test call back can be synchronous and asynchronous. If it returns a promise, I want that promise to control the result of the test. But if it throws, I still need to catch it. If it returns something synchronously that is not a promise, I ignore it. I just searched for promise, I may be at the wrong spot in the file. I think that’s right.

SYG: in this case, callback returns a thenable

JHD: Yes. The – again, I pulled this off the top of my head so it may not be the concrete thing you’re looking for. I will get back to you regardless of whether or not that delays Stage 2. But essentially when I call the user callback and throw an exception, I do want to be able to catch it. Again, this may not be a good example. I probably should not have tried to pull one up off the cuff. But I can certainly dig up more of them.

SYG: Like the cost is so low here, I am not really – I don’t have anything against it. I just don’t quite understand – like the kind of thing you might use it for sounds reasonable, but then there’s things in matrix saying, that’s bad and you shouldn’t do that and I just don’t know.

JHD: Sure. I mean, there’s lots of editorializing about the goodness and badness of patterns, either way. The other sort of nice effect of this proposal is there remain only two more ways or two more reasons I know of that you would use – sorry, three more ways, reasons I know of that you use `new Promise` in modern code. One is, of course, the one that always is: to wrap a callback taking API. Another this proposal replaces. And then the third is inverting a promise, you know, turning failure into success and success into failure. And I like the idea of, in general, of getting rid of all – you know, all but the one reason for using `new Promise` because it’s confusing when users run across a new promise construction in code. That’s not the primary motivation for the proposal. It’s just a nice benefit, I think, of landing this pattern that people do use.

CDA: There’s a clarifying question from GCL.

GCL: Sorry, it’s not a question. Shu for an example, that’s more concrete, if you imagine AsyncIterator.prototype.map, that makes a map function. If the map function throws an error, you don’t want to like bubble that up. You want to put that into the async machinery happening. Imagine writing that function in JavaScript instead of spec text, you take the if abrupt reject or whatever logic and that is the same thing that promise.try is.

SYG: Mechanically, I understand. For the iterator case, like that – that is a case where you already produced a promise, then you must always produce a promise. I am looking for a concrete example where you have a single value – like an API that takes the single value that returns, always returns a promise. And that single value is wrapped, like produced by that factory function, that might throw synchronously, like – you use promise.try inside the in sync loop things

GCL: The map function you pass to that can be synchronous. And you could accidentally throw in that – you might not intend to. Or maybe you do. If you throw inside that function, that shouldn’t break AsyncIterator.

SYG: But okay. But in the loop case, you already have a promise. You would be on the lookout for – these exceptions and then reject that promise. Or like you couldn’t be like chaining these individual rejected promises. Right?

JHD: So I mean my general usage here would just be to kick myself into the world of promises and then I would do stuff that I would hope people find normal after that. However, I mean when I have an array of things, `Promise.all`, I am obviously doing some unique things to respond to individual rejections differently than the aggregate and so on. So there certainly may be some use cases, even though I don’t have any off the top of my head

SYG: [inaudible] on paper, on paper it seems like yes, it could come up. I would like to just read some things so I can better see. Even one of your, perhaps, polyfills where you have written to reach for this and it wasn’t there and you had to get the work around. I wanted to see some instances of that and then I can better understand

JHD: I am happy to provide those regardless. It would be – it would be nice if I could advance this to Stage 2 and then providing those could be a Stage 3 requirement. But I am also comfortable if you would rather not advance until you have those things. As I said, in the beginning, right, I would love to have Stage 2, but I am also fine with getting an updated response for what I need to get to Stage 2.

SYG: I think you could, given that there doesn't seem to be a lot of design room here, I think you could, for folks who have expressed reservation, work with us off-line and go straight to 2.7 or 3. If you want to get to Stage 2 today, and not 2.7, like are you planning on more design work for promise.try?

JHD: No. That’s a fair point. I really just haven’t learned to think in the new stage yet. Realistically jumping to 2.7 makes sense to me. But it has already been 7 years, 8 years since I last presented so I was trying to get a little bit of advancement at a time. Yeah. Certainly, if Stage 2 is fine, I am also content to go to 2.7 and write the test for this before tomorrow. So we have a –

LCA: The tests are for stage 3

JHD: Yeah. I mean, I can have those prepared.

CDA: We have a couple of people in the queue. JRL?

JRL: Shu’s comment this could only be a unary function, we’re addressing that bypassing the argument that is are called to AsyncVariable.run. And async? Shot.run to the call back. So you can handle any function with any number of parameters?

CDA: KG?

KG: I am just curious if this comes up for other people in the room very much? Just because I have never run into this pattern. And I know that JHD and I write code in a pretty different style. So I am not surprised that it does come up for JHD. The fact that it doesn’t come up for me isn’t very informative. So I would just like to hear if this is a thing that other people run into very much. It’s a pretty simple bit of sugar. Our bar for adding sugar should be low, but it should be this comes up pretty often, not like this comes up for 2 or 3 cases.

CDA: Did you want to answer the question?

JHD: I agree with what Kevin is saying. I think it comes up pretty often in my experience. I don’t expect that too much from everybody else’s and I am happy when more people have experienced a problem than fewer. So if anyone else – I mean, I think Justin has shared an example, so it’s at least not just me. But certainly the more the merrier.

CDA: EAD?

EAD: One point to that is the NPM downloads, it would be interesting to know where 46M weekly downloads are going, even if it's wrapped in the main container other libraries, what are the libraries used in and what – 46 million is a lot! . There’s something using it. So what is that thing?

JHD: I have long wanted a way to sort a package’s dependence by install count to answer that exact question for that committee. I am not aware of a way to do that. If anybody knows, please show me.

DE: So given that this isn’t hugely shorter, I think the question we should maybe be asking about, whether we want to put this in the standard library, is how much does it help people’s mental model when they’re writing, personally when they’re reading code, so the kind of baseline that I’m -- would kind of consider comparing with is using promise with resolvers plus tricatch, where maybe this construct helps people follow best practices because it does do sort of the right idiom when you have something that may throw and you want to get, you know, the value of it, or maybe it ends up being kind of a fancy come by Nater that’s trickier to decode. So how should we do that kind of comparison?

JHD: I think that’s right way to think about it, that it’s about learnability and readability. There’s not a significant difference in how many characters are involved. I think using `withResolvers` would be many times worse using `new Promise`, just to address this, or an immediately invoked async function. So I just don’t think that has any bearing on the discussion. But I agree that readability matters, and certainly if folks think that a new promise with the executor argument wrapping the invocation of the function is more readable than promise.try, then that would be an argument, a very strong argument against adding to the language, but I’m skeptical that that’s a claim anyone would make.

CDA: NRO says that half of the downloads come from jest.

JHD: Yeah, jest being a test framework, that’s sort of -- that sort of goes along with my intuition that it would apply to tape.

CDA: Queue is empty.

JHD: So then I would still like to ask for Stage 2. Yes?

CDA: Do we have any explicit support for Stage 2 for promise.try?.

SYG: What I was proposing was show me, and we can go to 2 or 2.7 directly, although maybe 2 -- I’m not comfortable with 2 right now until I see some concrete line. Basically any line so I can just read what the -- where you would use it. And then which could be, like, you know, now or tomorrow or something, and then it seems like we wouldn’t -- I want to think more about passing the arguments in addition to nothing.

JHD: Okay, so then to reiterate for the notes, I’m -- `Promise.try` is not advancing right now, however, I will provide Shu and, you know, the wider committee with some more concrete -- with some concrete examples to evaluate, and if Shu, since he’s the only one who has expressed this concretely, but if anyone else as well lets me know that they’re comfortable, then I may come back later in the meeting assuming there’s time, and request Stage 2 or possibly 2.7, even though I didn’t put that on the agenda in advance. Thank you.

## Joint iteration for stage 2

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-joint-iteration)
- [slides](https://docs.google.com/presentation/d/150lLig7sNDr173RVzRgNRKrrUBKzKPImrHjGnfrETzQ/edit)

MF: This is joint iteration. Number 4 for today from me. So if you remember, I think it was the last meeting, this is the solution that we had discussed to solve the problem of joint iteration. It looks like this. It’s a single method, a static method on Iterator called zip. It takes two parameters. The first is either shaped as this positional shape, which is an iterable of iterators or iterables, and the second possible shape is named, which is just an object whose values are iterators or iterables. The second parameter is an options bag with three options. Two of the options change the joint iteration behavior, so default behavior is to stop iterating on the shortest of the iterators. The other two options allow you to either switch that to the longest, which then uses fillers, or to be strict, which means if they don’t all end at the same time, it’s throws. The fillers option is specifying what fillers it uses. When they’re not given, undefined is used.

MF: So I wrote up a bunch of spec text. It was a lot. And then made a couple changes. So we changed the name of the fillers option to padding. I thought that that was better. The one downside that I saw is that fillers really emphasizes the plurality of it, that you have to give more than one filler. So if you’re zipping two iterators, you give two fillers, one for the left, one for the right. Whereas padding doesn’t emphasize the plurality, but KG thought it was good, so I went with it.

MF: This was just a fix -- don’t worry about what the fix was, but that the implication of this fix was that in the named variant of the first parameter, when one of the properties has the value undefined, the previous behavior that I had for it was that it would throw and now it just skips properties with a value of undefined. I’m okay either way, but this is the semantics that fell out of doing the thing that we wanted, so I went with this. But let me know if you have an opinion on what that behavior should be.

MF: This was just disallowing the fillers to be an iterator. It's just an iterable. That makes sense, the values yielded by the first parameter, those can be iterators, but the options that are given directly should be iterables.

MF: This is probably the biggest open question we have, is whether we should split this API into two methods. Remember that the Iterator.zip that I’ve shown was the combination of the positional and the named variant, and that works. I don’t actually think that there’s any risk of somebody accidentally using the wrong one by, like, adding a Symbol.iterator to a thing and then not wanting it to be iterated or something. The only functional difference -- as in like you can’t do the thing that you intend to do -- is if you want to use the named variant on something with a Symbol.iterator. You’re not able to do that with the combined method, whereas if they were separate methods, you could do that. So you can read through this thread for some discussion on pros and cons of splitting the method into two. I am pretty neutral on it. I guess I lean a little bit toward combining them without some stronger arguments for splitting them. But I could go either way. I could be convinced easily, I guess I could say.

MF: JHD had opened this issue about why don’t we do joint iteration for arrays. In this thread, KG makes a good point, I think, that we don’t really do joint iteration so that we get a thing at the end, we do joint iteration to shape our data so we can do further transforms on it. It’s always really an intermediate step. It’s not really the first and end step of your operation. Because of that, I don’t really see a downside of having to do toArray on the result if you really want to have an array at the end. So I’m not planning on adding an array variant of joint iteration to this proposal. But let me know if you have strong feelings about that.

MF: Oh, and that’s the whole thing. I thought I had more. What I’m looking for is Stage 2. I think the -- I guess default is that we go forward with the proposal as presented and as it is in the repo today. But I’m happy to make changes on any of those points. I think it would be fair. I’m ready for questions.

NRO: Can I review for stage 3, if you need reviewers.

JHD: I would still like, as -- you know, you probably anticipate from that open issue, I’d like an array here. I don’t particularly care if it’s a prototype or static method. A static method is fine. But I’d really like to see that. With that, I’m enthusiastic support of Stage 2, without that, I’m sort of hesitant, but still would support it. And either way, I’m happy to review.

???: We also find that it’s nicely composable, fits in well with the other array iterators, with the other iterator helpers and support it for Stage 2.

CDA: You also have support from DLM. All right. Any other voices of support for Stage 2 for joint iteration? Hearing nothing, seeing nothing, no objections, all right, we have Stage 2.

MF: All right. Would anybody like to provide any guidance on those two biggest questions here, which is the combined versus separate API and whether an array variant should be added to this proposal? I think at least for the second part, I think we need to have a conclusion on that before I can actually say whether this is Stage 2, because Stage 2, we should have that general shape, and without knowing whether arrays are trying to be solved for. And let me clarify what I mean by that. Iterator zip does work for arrays. You can pass arrays that are iterable. What we’re talking about is going from arrays to arrays directly without using the iterator protocol in between, so if that is part of the problem we’re trying to solve or not, I need to be really clear on that. Because my preference today is to not do that. I heard from JHD he does want to do that, and I want to hear any opinions supporting or saying, no, we can keep that separate. That can always be done as a follow-up in my opinion, but I want to hear others.

CDA: Nothing on the queue.

GCL: Yeah, I just wanted to say that I agree that we should not try to do that in this proposal. We should stick to what you’ve suggested

MF: yeah, just iteration.

JHD: Yeah, and just to respond to that, I could certainly try and make a follow-up proposal, but like every single semantic of how things are jointly combined would be the same and would have to follow it. And the array proposal could never, like -- either could never advance beyond the iteration one or the two would have to stay in, you know -- whichever was behind would have to follow the one ahead of it and so on. If that’s a procedural thing I’m required to do, I can do that, but it seems strange to separate it since they’re going to be so tightly coupled regardless.

MF: I wouldn't go assuming right away that it's going to be trivial to figure out the semantics of this array variant. Yes, it'll probably be heavily influenced, but you never know if there are, like, special cases that need to be handled or whatever. I wouldn't just jump to that conclusion.

JHD: That’s fair. That speaks to the cross-cutting concerns between them and why I think it makes more sense to figure them out together.

JSC: Just asking for clarification on the two questions you referred to earlier, the two open issues you’re showing, like number 1 and number 9.

MF: Yes, number 1 and number 9 are the two that I wanted clarity on for moving to Stage 2.

BSH: I would really prefer separate methods because the shape of the output is different in the two cases. My concern is mostly readability. What’s the reason to prefer a single method?

MF: Reason to prefer a single method is a good question. They’re conceptually the same kind of thing. The reason why they’re being proposed together is because this is just two different ways to get into joint iteration. So it is the same thing underneath, as we saw in the spec text, or as you probably couldn’t see in the spec text, but they share a lot of the implementation underneath. The core functionality is the same, it’s a different way of getting in and out of that shared section. But, yeah, in my opinion, there’s no strong argument in either direction, so I can’t give you a strong argument for combining them.

RBN: I just wanted to point out that I’m in favor of having a separate method for the non-iterable object as the first case is somewhat beneficial for catching mistakes. You could write code that might miss that it -- that -- how it gets combined in the callback isn’t what you expect, and it’s just easier to catch that early on as an error at the call site rather than deep within some callback and not really have a reference as to why am I getting the wrong thing because I passed an object to the wrong -- I passed the wrong object to the method or I passed the right object to the wrong method. It’s just I think easier to have separate methods so that you could be more careful about the types of inputs you’re expecting.

JSC: I agree with both prior speakers in that I mildly prefer separate methods due to the different shape of the data. The biggest -- the toughest thing here is what you name them, but I think that the analogy of the to promise.all is helpful with regards to, like, you know, whether you positional versus named inputs.

MF: Can you clarify what you meant with the Promise.all thing?

JSC: Just when it comes to if you did separate methods, one for, you know, positional, that’s one named inputs, if you did separate inputs, what do you name the two, right? We have a right precedent here with all being positional only and promise.all. One thing I can envision is calling the positional version of zip just zip, and then having -- attaching something like zip map or zip named. I don’t know what you would call it for the named input version. That’s what I meant. Just the name -- for naming the two functions, if you elect for separate functions.

MF: So there is relevant context here. The original design for this combined one was actually inspired by the Promise.all proposal to allow it to accept named arguments as well as positional ones. So if we do choose separate methods here, we’re kind of setting a precedent that we wouldn’t want to do the same thing with Promise.all as has been proposed in that proposal.

JSC: I agree with this. They’re entangled. I think that -- I think that whatever -- if you elect for, say, two functions here, whatever name you would choose for the, say, the named input version would be something that you could also apply to promise.all. I agree that they are entangled.

MF: Thank you for that feedback.

CDA: Nothing else on the queue.

MF: Okay, if that’s all the feedback we have, I think that I would like to ask to move forward to Stage 2 with the method being separated, then. It sounds like we have a majority of people asking for them to be separated, and I’ve only heard JHD in support of adding an array solution to this, so I would like to ask to go to Stage 2 without an array solution.

CDA: Seeing a thumbs up from, is that LCA? Yeah, +1 from LCA. And DE, and GCL. All right. That’s three.

CDA: Anyone else? Okay. We have JSC, doesn’t need to speak?

JSC: I don’t need to speak.

CDA: You also have a +1 from DLM. Sounded like you got the reviewers.

MF: I got one reviewer in NRO, who --

CDA: I think JHD also offered.

MF: Thank you. Then I have at least two. Any others are welcome, but I have the necessary number.

MF: All right, thank you, everyone.

## revisit Promise.try

Presenter: Jordan Harband (JHD)

JHD: So Shu was given a diff of -- like a concrete example of code in Matrix and indicated he’d be willing to reconsider Stage 2, and the chairs were kind enough to slot me in right now. So I’m again going to ask for Stage 2, but not any higher because of the open issue about passing arguments. So there’s no one -- since there’s no one on the queue, I guess I’ll take that to mean there’s consensus for Stage 2.

CDA: Do we have some explicit support for Stage 2 for promise.try? I am not seeing or hearing anything.

JHD: Sitting next to Kit Kats, if that helps.

CDA It sounds like this is not going to progress to Stage 2.

CDA: I mean, I guess if everybody here --

JHD: Is JRL still on the call? You expressed support earlier.

CDA: So DLM is on the queue. Do you want to speak or want me to just read that? DLM wants to hear at least two people to support it explicitly.

JHD: Yeah, I mean, so JRL expressed support earlier, so I’m happy to come back again when he’s available if he’s willing to express explicit support.

??: JRL said he supports.

CDA: So you have a +1 from JRL and LGH and another +1 from DMM, therefore, you have Stage 2.

JHD: Thank you.

### Conclusion

Stage 2.

## Math.sum

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-math-sum)
- [slides](https://docs.google.com/presentation/d/13S_WcLPhJ43El9dXCfC0uO4d1PakHmJbNVr-S4g3K3Q/edit)

KG: We should have a built-in mechanism for summing a list of values. This is my thesis. And if we are going to do this, then we can do something that’s a little better than naive summation, because naive summation accumulates floating point summation in a really bad way. And in the last meeting, WH pointed out there are a number of algorithms for doing full precision addition for floating point, and since then I have gone and implemented one of them, and, yeah, it’s pretty straightforward. So since at the last meeting WH expressed the preference that this be fully precise and a couple of other people expressed the opinion that while it may or may not need to be fully precise, it does need to be fully specified, which means either being fully precise or picking one algorithm for the specification to bless, the simplest thing and I think best for user seems to me to be to choosing fully precise summation. That’s what I’m proposing, an API for summing a number of arguments and giving you the full precision result. I have an implementation in JavaScript. Python also has fsum, which uses the same algorithm except that for some reason theirs doesn’t handle intermediate overflow. Like, if you sum, you know, 2 to the 52nd plus 2 to the 52nd plus 2 to the 52nd plus, minus 2 to the 52nd and so on, it will overflow to infinity. But you can just keep track of that in an easy way and not overflow to infinity in that case and as long as the resulting sum ends up finite, you can just give the right answer.

KG: Unfortunately, it’s hard for me to quantify exactly how expensive this would be. There’s obviously a fair amount of overhead relative to the simple method of just adding things up in a C style for loop. There’s like at least five to ten times more arithmetic operations per value, but, like, in practical, that’s probably not a problem until you have a huge number of values and the case that you have a huge number of values is precisely the case that you care most about accumulation of floating point errors, so I’m inclined to say just do full precision summation. That’s the proposal.

KG: So, questions. First, why not take an iterable? And the answer is that we already have math.max and math.max is variadic. I think we should have an iterable taking version of math.max, say math.maxFrom and math.sumFrom, and if this advances, I will probably follow up with that right away. Or maybe we should only have the iterable-taking version of sum because the varargs version encourages to you spread an array and that doesn’t work if you have more than 36,000 or so items in your array. Of course, it depend on the implementation, but at least in some implementations, once your array gets too big, you’ll blow the stack and get a range error, and that’s like a really annoying case to run into. So maybe we should just not have the varargs version and only have the iterable taking version. I’m open to either, having both or having only the iterable taking version. I’d like to hear from anyone if they have opinions on that.

KG: Another open question is whether to coerce arguments to numbers. Math.max coerces to numbers. You may remember at the presentation last time, we talked about not doing coercion to numbers or primitives in general anymore, at least to types other than Boolean. The argument for consistency with math.max is pretty strong, but this kind of coercion is pretty nasty in a number of other cases that we’ve discussed. Again, I could go either way. I genuinely don’t know how I am leaning on this, so I’d like to hear opinions on the merits of consistency versus avoiding the weird coercion cases.

KG: This one isn’t an open question, but just to mention this can’t work with bigints. You can’t -- it has to work with an empty list or it’s really hard to use, and you can’t get a value that works for both numbers and BigInts when you have an empty list. So if you need to sum a list of BigInts, it has to be in its own method, and of course BigInts don’t have to deal with the floating point precision anyway, so it’s kind of a different beast.

KG: Yeah, and then the final thing that I would like feedback on is whether to call it math.sum or, like, math.sumExact or something that suggests that this isn’t just naive summation. I like math.sumExact, but math.sum is also fine since it is actually the mathematical sum of the floating point numbers to within the limits of the computer.

KG: And I don’t think we should try to write down an algorithm for this. I don’t want to write down the algorithm that I used for this, especially because there’s probably better ones, and implementations are, of course, free to choose whatever algorithm they want as long as it gets the right answer. So I think writing down an algorithm in EMCAScript spec text would be detrimental and not really provide any benefit. But I do have spec text. It’s quite straightforward. 90% of it is dealing with the, like, what happens if you get minus infinity or NaN edge cases. But, yeah, it all fits on screen and I have a reference to a place that you can find an algorithm for a full precision summation down there at the bottom. We should discuss the open issues first. But my hope is to ask for Stage 2 at the end of this discussion.

MF: My topic was skipped. I just wanted to support `sumFrom`, like, doing only `sumFrom`. I think, you know, you made good points about not trying to exceed the maximum number of arguments, and that sum would just encourage during that. I also like that it has a new meaning so you don’t try to carry over any kind of legacy assumptions about how it should work from the other Math methods. So, yeah, I would just like just that one.

DMM: I think it’s very good to try and avoid spreading arguments for this. As you say, the cases where it’s most important are where you’ve got an extremely large number of arguments, and we should try and encourage people to use it in the way intended. And it’s difficult for various implementations to handle extremely large numbers of arguments. Some have stack overflows, others have other built-in limits, and I would strongly encourage that we should do an API that encourages people to do the right thing in that respect.

SYG: To recap for those less versed in floating point math, negative zero is the identity for addition over to floats, and the argument that Waldemar brought was if we take sum of an empty list, it should return identity as a mathematical operation, therefore it should be negative zero, but negative zero is also just confusing and bad. So it’s impossible to say if it’s good or not. I’m veering towards it is not good, so that said, I would like to -- so, it’s not clear to me that we should err on the side of principle, given I’m not sure there is correct code for negative zero use cases anyway. If we return zero and it is just a wrong identity, what actually happens? I think we must return something. We can’t throw. I am completely convinced by that. So that’s not an option. Like, I don’t think this needs to be a Stage 2 blocker either, but I would like to keep exploring maybe we just don’t do the math identity for floats.

NRO: Can you repeat what is the drawback of returning negative zero. It already happens for it called to just appear, and it doesn’t really cause problems.

SYG: It kind of does, but, like not directly in this API. Like, as a general thing, negative zero causes problems in that it has been a bug farm on the jet layer, specifically in the typer layer of JITs where you have to type negative zero differently from positive zero. If you press me on why it’s typed differently, I actually don’t know right now. But it has been successfully used as a gadget in typer confusions to exploit stuff. So the fewer places where we have to worry about negative zero the better, especially from places where it’s inlined.

NRO: It sounds like if there is some path engines where negative zero causes security problems, attackers can still get a negative zero to exercise those paths anyway.

SYG: That’s the principle to apply to the entire enterprise of JITs. That’s true. We would like to minimize inline built-ins, where they would need manual typer -- would need some manual implementation when they write the in license on what the type of those in lines instructions are, and it’s very easy to forget that this in line sum can actually return negative zero because it’s easy to forget that negative zero is the identity for summation.

NRO: Thank you.

SFC: Whenever a negative zero topic comes up, I always make the point that negative zero is well defined and is part of IEEE754 and we support it in Intl formatting and it has a meaning. For example, negative 0.1 rounded to the nearest integer is one place where it comes up a lot. So I don’t think there’s anything -- I disagree in that there’s, like, you know, anything like, you know, fundamentally wrong on principles that we should try to avoid negative zero. But I also, I guess, I’m coming into this a little bit new and I’m not sure why we had negative zero as the identity value and what problem that causes. But, yeah, mainly my position is, yeah, negative zero is fine.

NRO: Yeah, the reason negative zero is the identity of positive zero, so in almost every case, positive zero is the identity, so X plus -zero is X, except when X is zero, because in that case the result is positive zero and not negative zero. Where if you use negative zero’s identity, that always works.

JSC: This is another thing, but I just wanted to reiterate my -- as champion of the BigInt math proposing to as per the previous meeting make -- put the BigInt math functions in their own separate functions on the BigInt object. I don’t know whether I should put a BigInt.sum in the proposal itself or punt it to a future proposal, but I just wanted to reiterate my commitment that this should be a problem for this proposal.

SYG: In the naming open question, we would prefer to discuss -- we discussed with other position, we would prefer a different name. I don’t know what it is, I think it was slow sum, but not that. Sum exact seems fine to me. And I also wonder as a -- as a vibes thing for consistency with something like max, if it were a longer name, that feels different to me vibe-wise than sum, and makes me much more amenable to breaking consistency there and stop coercing. But if we go the iterable route, that’s moot anyway.

KG: Yeah, I think I share your feeling about the vibes, that if we call it sumExact or something else that was less similar to math.max, then having it work differently would be more reasonable. And in particular, I think `sumExact` taking an iterable would probably be fine, which I think is the more important thing than coercion for me. So maybe that’s a good reason to do the renaming anyway.

DMM: Ruby and other languages managed to get the empty sum value wrong in the past because it was felt to be intuitive that an empty thing adds to zero rather than negative zero and it’s been a pain point for quite a bit of code over years. But equally, negative zero is a pain point because it’s not what people expect. So even though it’s the identity, I don’t know if it’s the right choice to make. Yeah.

KG: For what it’s worth, in Python, fsum of the empty list is positive zero.

LCA: I wanted to bring up another possible version for this, which is not to hang it off math, but to hang it off iterator, which is what some other languages do. And I know it’s not something we generally do, like, to collect an iterate and to use array.from and so forth, whereas in other languages that may hang off the iterator, but if we did hang it off the iterator, it would -- like, we wouldn’t have any weird consistency issues because, yeah, it’s totally a separate thing. So any thoughts on that?

KG: Yeah, I’d kind of prefer not to. I think the biggest reason is just that there’s different notions of sum, like, you can totally reasonably sum a list of bigints, but iterator.sum would not sum a list of BigInts, and that would be confusing. Whereas Math is pretty well established as working with numbers specifically. If this were an operation that only made sense for one type, I would be more inclined to put it on Iterator, but I worry about iterator.sum on a list of BigInts.

LCA: Sort of a little follow-up to this, if we -- if to create an array from an iterator we use array.from, why don’t you use number.sum to create a number from an iterator?

KG: Yeah, I would prefer not to.

MF: I support your reasoning for not writing down the algorithm.

EAD: As my question says, what about other mathematical operations, subtraction, multiplication, division, why only sum?

KG: Subtraction and division don’t really make sense because they’re not, like, associative in the same way. You can sum a list, but you can’t subtract a list. The addition operation makes sense over arbitrarily many things, but not subtraction or division. Multiplication does make sense, and some languages do have products. I have two reasons for excluding it. The first is just that it doesn’t really come up very often in my experience. Adding a list of numbers is a very, very common operation. Multiplying a list of numbers is an extremely rare operation. The other reason is that I don’t know offhand of a full precision floating point multiplication algorithm. I can do full precision floating point summation, and I’m sure it is possible to do full precision floating point multiplication, or at least I suspect it is possible, but that sounds like a much harder problem. So I’m sticking to the case that I am confident in.

JGT: In SQL, which is what I’m most familiar with iterations are, there’s lots of different kinds of aggregations, so if we add this one, I think it would make sense to think forward of, like, what would be -- let’s assume we wanted to add average, we wanted to had standard deviation, we wanted to add other kinds of things where very long list of numbers would be useful and think about whatever API pattern we want to use as something that scales to that kind of aggregation. The other thing that occurred to me is in sequel, this empty issue is handled very differently, where instead of summing up to zero, it sums up to null, and so it -- let’s say -- and you can also have a sparse list. So let’s say a particular column is null valued, if there’s ten values and five of them are null, it adds up the five that are not null and gives you that result back. If they’re all null, then it gives you null back. So I’m not saying that needs to be what we do, but it is another pattern that we might want to consider and understand use cases for and see which one makes more sense.

KG: Definitely agreed on the hoping to add more aggregations or allow room for more aggregations. I think that’s another reason to only do the iterable taking version because it has the advantage of allowing us to use the second argument. So a lot of the other aggregations you might want to specify another argument, you know, give me the average or the geometric average as a config option or whatever. I don’t like nulls, to address the second part. I think getting null back would be really confusing and summing a list that includes nulls would be really confusing. And just, like, filtering those out is really easy in JavaScript, so sticking it out with numbers makes it easier to reason in JavaScript.

JHD: This is about the algorithm thing, I thought we discussed this in the previous meeting where this came up. EMCAScript spent a lot of time over the many years trying to not tightly specify forms in the hopes that they can be improved in the future. And I believe web compat has largely prevented that from ever being the case. Whatever algorithm engines use is the one that will be the de facto standard.

KG: I think you misunderstood the proposal. I’m proposing you get the right answer. There is no wiggle room for implementations, there is one right answer and that’s the one you get.

JHD: That’s fine. I still think the specs should contain an algorithm for that.

KG: Why?

JHD: So that it’s obvious how to implement it correctly.

KG: But there’s a bunch of different ways you could do it.

JHD: Sure, but there should be at least one reference implementation.

KG: Why?

JHD: So that implementers like myself don’t mess it up. Like, how do I know that I’m going to get the exact answer for everything.

KG: You can copy my polyfill if you want.

JHD: What I mean is in general, an implementer showing up to the spec, I would assume that we want to minimize the amount of knowledge that they need in advance to create a correct implementation. So how much knowledge do I need in advance to be able to know which algorithms I can use and how do I validate that without testing every number, right? Like, an algorithm tells me, well, if I’m matching the algorithm steps, then I’m doing it right. And I can test a few inputs of course.

KG: I guess I just don’t have that intuition. That you should be able to show up with no background knowledge and get it right.

JHD: No, but minimizing it, right? It’s not an all or nothing.

KG: I’m not setting out to minimize it. We include things by reference all the time. And I have a reference to a text which gives an algorithm that you can use.

JHD: If you’ve already linked to a place that has an algorithm.

KG: It’s not totally straightforward to translate that algorithm, but it does link to an algorithm.

JHD: I guess that’s fine. I just -- I’m, like -- and I know that I’m an implementer in a much lesser way than a lot of implementers in the room, but as some form of implementer, it would really help me to have a spec algorithm to rely on, even if there are many other ways I can implement it.

KG: What if there’s a polyfill instead?

JHD: A polyfill is an implementation. That’s the implementations I write. That’s what I’m telling you I need. I would like an algorithm in the spec so I can write it. You can take or leave it. I very strongly would like an algorithm in there.

KG: My recommendation is for people to copy and paste the polyfill. That will serve better. The one I wrote down - to do a spec text would be like 70 lines, maybe 100, and I just don’t want to write that and I don’t think it would be very useful.

KG: So we’re through the queue. I guess to summarize, it sounds like people are generally in favor of the idea of only having the iterable taking version, and heard from SYG that a different name would be good since it is different and slower than naive summation. Maybe `sumExact`, but that can be worked out during Stage 2. And we will have to consider whether minus zero, while the theoretically pure answer, is the most useful answer to return, but, again, I think that can be worked out during Stage 2. That’s a pretty minor quibble. And I guess I didn’t hear any feedback on breaking with precedent for coercion, but it sounds like maybe if we’re doing something that’s a little more different than math.max, then we have a little bit more room to break with precedent on that sort of thing. My intention is to go forward with sumExact as iterable taking, and not performing coercion, so throwing if any of the things are not already numbers. And come back and ask for Stage 2.7 and/or 3 at some point in the future. But for now, I’d like to ask for Stage 2 with something roughly like this.

CDA: You do have a couple people that entered the queue. MF.

MF: I wanted to clarify with SYG on the constraints on the name. Was it that it can’t contain the word sum at all? Was `sumFrom` sufficiently different?

SYG: I think `sumFrom` is not sufficiently different; it can certainly contain the word sum, but I think we would prefer a qualifier on sum that gave a hint that it’s a different algorithm than naive summation. Or at the performance characteristics, but I don’t think anyone else is going to be okay with that. So I think sum exact is some version of sum exact is what we’re going to get.

MF: So Kevin’s plan for `sumExact` is fine?

SYG: Yeah, that `sumExact` is acceptable.

MF: Okay.

MAH: Yeah, I’d like to clarify, so KG mentioned to JHD’s question earlier that there can only be one correct answer for a set of inputs. And that -- so if that’s the case, why can’t -- like, any different implementation that an implementer would have is effectively on observable, that’s what we do, we specify on algorithm in the spec, even if that algorithm might not be efficient by any means, but we specify one that’s the reference algorithm and then the implementation is welcome to have any optimization on top of that because those optimizations are on observable. So I’d like to clarify if there is indeed only one valid answer for the output of this function, and if that’s the case, what’s the problem with having a recognized implementation in the spec?

KG: To answer the first part, you’re correct. There is only one valid answer. To answer the second part, I guess I have sort of two responses. My first is that as a consumer of the spec, I just think that it is less useful to encounter that algorithm than to encounter "give me the full precision sum", which is what this says. And my second answer to this is that that is a strictly editorial concern, and with my editor hat on, I think this is a question that is for the editors. The choice of how to write down things like this is strictly editorial, and with my editor hat on, the algorithm is not useful to write down in the spec. You write down the answer in this case.

MAH: Okay, at the very least, I think we should capture that all implementations cannot -- can only have one valid answer. I don’t know how you want to capture that, but that seems like an important -- like, and that the output should match whatever reference algorithm is referenced.

KG: The answer -- the way that it’s written in the spec is to do arithmetic on reals and coerce back to a float, and that has one answer because both of those things are fully defined operations. I can put a note that says "note, there is only one value you can return here" or something, but, yeah, it’s just like every one of these steps is fully defined. There’s no wiggle room.

CDA: We are out of time.

KG: Consensus on Stage 2 for this proposal? For the iterable-only version. Under some name and with quibbles about minus zero to be resolved in the future.

CDA: You have a +1 from Justin. Any other support? You have a +1 from DLM. Any other support? We got support from DE.

KG: Okay, great. And can I also ask if anyone would be willing to sign up to be a reviewer?

CDA: We got JHD.

KG: Okay. You can review it right now if you can read fast.

CDA: All right, you’ll have to settle for just JHD at the moment, I think.

KG: Okay, thanks, all.
