# 26 September, 2023 Meeting Notes

-----

**Remote and in person attendees:**

| Name                 | Abbreviation | Organization      |
| -------------------- | ------------ | ----------------- |
| Ujjwal Sharma        | USA          | Igalia            |
| Michael Saboff       | MLS          | Apple             |
| Christian Ulbrich    | CHU          | Zalari            |
| Andrew Paprocki      | API          | Bloomberg         |
| Rob Palmer           | RPR          | Bloomberg         |
| Daniel Ehrenberg     | DE           | Bloomberg         |
| Pablo Gorostiaga     | PGO          | Bloomberg         |
| Bradford C. Smith    | BSH          | Google            |
| Jack Works           | JWK          | Sujitech          |
| Jordan Harband       | JHD          | Invited Expert    |
| Daniel Minor         | DLM          | Mozilla           |
| Eemeli Aro           | EAO          | Mozilla           |
| Frank Yung-Fong Tang | FYT          | Google            |
| Chip Morningstar     | CM           | Agoric            |
| Waldemar Horwat      | WH           | Google            |
| Ross Kirsling        | RKG          | Sony              |
| Chris de Almeida     | CDA          | IBM               |
| Devin Rousso         | DRO          | Invited Expert    |
| Willian Martins      | WMS          | Netflix           |
| Ben Allen            | BAN          | Igalia            |
| Istvan Sebestyen     | IS           | Ecma              |
| Chengzhong Wu        | CZW          | Alibaba           |
| Samina Husain        | SHN          | Ecma              |
| Richard Gibson       | RGN          | Agoric            |
| Luca Casonato        | LCA          | Deno              |
| Guy Bedford          | GB           | OpenJS Foundation |
| Jesse Alama          | JMN          | Igalia            |
| Shane F. Carr        | SFC          | Google            |
| Ron Buckton          | RBN          | Microsoft         |
| Kevin Gibbson        | KB           | F5                |

RPR: Just another starter thing, we are masking here today. Dan has spare masks with him, if you need one. Thank you. All right. Let’s get started. So we are in Tokyo, as Paproki said. We’ve been trying to come here for the last four years, and fourth time lucky, here we are. So can we have a round of applause for being in Asia? I know we’ve got some newcomers here as well today, so we really appreciate you coming and visiting us. So, yeah, Tokyo is a wonderful city, most Michelin starred restaurants in the world, vending machines are never far away, and there’s something called the Disney sea, which is something you don’t get anywhere else in the world, some kind of park. We have the chair group with us today. I’m Rob from Bloomberg, and I’m one of the three co-chairs, along with Ujjwal and Chris here. Ujjwal and Chris will be dialing-in remotely. I think they’re both with us at the moment. Ujjwal, I can see on the call, hello! Chris, are you here? We have our facilitators, Brian, Justin and Yulia. I don’t think they’re with us at the moment, but they are part of the crew. Please could everyone sign in. Obviously if you’re dialing in using Zoom with your laptop, please shut off the microphone and shut off the speakers so that you don’t interrupt the AV. We want to make sure we have a good experience for our dial-in folk. Paper sign-in form will be passed around, please sign.

RPR: We will need to arrange something to document participation in the social dinner, because we are right at the limit for the social dinner of 24 people, so we’ll do that later. We have a code of conduct. You can find it on the website, TC39.ES, and please, you know, we will be enforcing that. Please read it and do your -- you know, your best efforts to follow it. If you have any concerns, if you think there has been a violation or you want to report anything, you can come to either one of the chairs or any of the code of conduct committee people. This is our daily schedule. So hopefully you’ve all had some breakfast here today. This -- we’ll also be in the room for lunch as well. That will be served promptly at 12. So we’ll try not to overrun because the food will be very close and appetizing. We’ll have a break in the afternoon, and then our meeting stops at 5:00 each day. It’s 4:00 on the final day, on Thursday, and we need to vacate this room by 6 p.m.

RPR: In terms of special events this week, hopefully anyone who arrived yesterday and you visited the community event with JSConf Japan. That went really well. Thanks to all the people that presented, Dan and the panelists, Nicolo, Luca, Jack Works and Kevin Gibbons. I think that went really well. And the sushi was good. We’ll also run in newcomers event, so if you’re new to TC39, I think we have about maybe three, maybe four people today, at the end of today, a few of us will gather here and we’ll do some Q&A and just some easy intros. And then we have our social dinner on Wednesday at 6:30 at what is known as the kill Bill restaurant, the restaurant made famous for appearing into a film, and it also has good food as well. So you can watch the film before that point.

RPR: For our communications, we have a range of tools, and the most important thing is just to remember for everyone that has the privilege of being in the room today, many people are remote, and it is our duty to make sure that the remote folk have a good experience. What that means is that we want to keep conversations linear, so we have eight microphones in the room, so we’re going to need to be passing them around. Please turn them off when they’re not in use, and please help out by passing them along and doing your best to get them to the speaker. If anything is going wrong with the AV, please call us. We’re supported by a team of people here today. I think we have -- well, we have Taka, who our events host today and has helped arrange this meeting, and then we also have, I apologize, I don’t remember their names, but I have been introduced yesterday. We have AV support team as well. So hopefully it should be a great experience.

RPR: We use TCQ as our agenda, main agenda driver, as well as also our way of list ordering the discussions. You can find this on the reflector posting. This is the main view when we have a topic running, and you got those buttons there if you wish to contribute to the linear discussion. So start off with normally your default, if you want to talk about the current presentation, it should be a new topic. That’s your go-to. If you have a reply to the current, to someone else’s topic, you can use discuss current topic. If something is unclear and you need an urgent clarification, please use clarifying question, and then finally, if you need to interrupt everything because I don’t know, something has gone very, very badly wrong or maybe the comms tools have gone down, the notes, then you use point of order. That’s the highest priority interruption.

RPR: Then I think, here we go, we also have the Matrix. So we have a variety of rooms there. The delegates is your privileged one, which is normal three default during these meetings. There is also a Temporal dead zone for anything that is off topic such as Pokmon. I know that Michael has at least visited the main Pokmon shop here in Japan and recommended it. Yes, excellent. We also have an IPR policy. So normally everyone here is an ECMA member. If you are not, then you are expected to be invited expert that has signed the form or if you are none of these, please let us know, but if you are here purely to observe, then please do not talk during the conversations.

RPR: The notes, so we have this, we obviously have detailed transcriptions thanks to our transcriptionist. We have Julie. Excellent. Welcome, Julie. And so, yeah, please be aware that these notes are being recorded. You’ll have the chance to fix them up in the Google doc or a PR afterwards, if that’s not there. I do realize we were a little bit delayed on the previous meetings notes and we’re trying some things with the previous meetings and we’ll work on sorting that soon.

RPR: Also remember as of little Dan’s presentation from the previous meeting, we’re going to try and stop at the end of each topic to summarize the key points so that we’ve got high quality summaries. The next meeting is back to remote. So this is at the end of November. That is on Pacific time. That’s been on agenda, on the schedule for quite a while. We are in the process of sorting out next year’s meeting. Thanks to everyone who has got back to me on the schedule for that with the schedule constraints, but also with the volunteers for hosts. We nearly have that all sorted out. Still trying to sort out an Asia meeting at the end of next year. So if you are able to help out with that, please do let me know. I think we have one potential candidate. We’ll find out soon. But there is a special announcement, or at least a special meeting is coming up. Anyone that pays attention to numbers knows that this current meeting is 98. The 98th meeting of TC39, so meaning that the next remote one will be 99. And what follows 99? We have the 100th meeting. So we’re trying to make this a bit more special. So the 100th meeting will be in San Diego. ServiceNow have been kind enough to host that meeting. And this one, ECMA will be helping to support this to be a strong meeting with special celebrations.

SHN: Nothing more than what you’ve got right now. We’re going to have a press release to recognize the work that this community has been doing, and recognize the milestone. We are going to do a few special events, but maybe I can make a few more comments on the last day of the meeting because I don’t have them all ready now. I hope to see you all there. It will be excellent. Thank you.

RPR: thanks especially to Roderigo for helping out to arrange that meeting. We can see you in the room, Roderigo. Thank you. All right. So on to the usual items. So let’s start, let’s see if we have approval for last -- actually, I don’t think we fully committed them yet, so we should probably -- let’s return to that perhaps later in the meeting once we’ve got that. All right, what about the current agenda? Are there any objections to the current agenda? And I will say because I’m working on a laptop, I cannot see the element room right now. If any of the other chairs do see anything, please just interrupt. I’m going to take silence as approval. I will say with today’s current agenda, or this week’s current agenda, it is packed. It is oversubscribed. You’ll see that we have many really good items in the overflow slot at the moment. We’re going to work you know, we’re going to do our best to claw some back. Maybe some people will consider deprioritizing items. I know I’ve already heard some some candidates there that we may do. But the main thing is we need to really work hard to keep -- to do food time keeping and stick to our time boxes. And with that, I think I can hand over to Samina.

RPR: Rob, a point of order.

RPR: Yes, go ahead, Michael.

MF: The notes don’t have a place to put our name, abbreviation and organization.

RPR: All right, thank you. I will ask, I think Chris or Ujjwal, if you’re on the line, please could you fix that up so people can put their name.

USA: Yeah, on it.

RPR: Thank you. Yes, Samina, please do share your screen. Everyone here, it’s best to use your own laptops when you are presenting to share from there. You are also welcome to use to podium if you want, your slides are Internet accessible.

## Secretary general report

Speaker: Samina Husain

- [slides](https://github.com/tc39/agendas/blob/main/2023/tc39-2023-040.pdf)

SHN: Welcome everybody to Tokyo. Excellent meeting. Beautifully set up. Thank you very much Bloomberg for hosting. For those who don’t know me, I am Samina from ECMA, as noted on the slide. Istvan is online in Munich. Istvan, welcome. I know it’s very early in the morning for you. If you’d like to make a comment, just raise your hand. I’ll start with the slides. As usual, we give an update from the secretariat from the office. I want to give you a summary on the experiences from the summary and conclusions and the technical notes which Rob just mentioned has not been, if I can use the word finalize. I think it’s important we talk about that whether it’s some point in the meeting or just after this, will you direct me on that. I’ll just give some comments on the invited experts and where we are. I want to also note that we have our nominations for 2024 that are open and everybody in ECMA can nominate, so I just want to bring that to your attention. Just a status on the nice PDF that you know we need to do this for our ECMA standard. We have a proposal on the table. I’d like to show that to everybody and see you’re interested in that or think if it’s a good way forward and just some other updates generally from the activities. The Annex of the slides will give you, as always, a list of the documents. If you would like to read them from the general assembly, just our statistics and how we are participating, the key message from that is the numbers of participants and the number of organizations continue to grow or if not just stay stable post pandemic, which is really good. The standards download, you can have a look at that. Since the June general assembly, the 14th edition was approved. You can see that there are already a number of downloads on that, and there are the next meetings highlighted. But the most relevant one Rob mentioned, which is the 100th. Since we had our last meeting in July in Bergen, I did attempt to take the work and do the summary and conclusions on spaces that didn’t have it. It was a bit challenging, and did not happen very timely. So I’m looking for some advice on how we can do that better. It’s relevant for ECMA because we need it in our meeting and we have to have that documented for all the work that’s being done, so I still think we need to find a slightly better way forward. In addition, we also published the presentations that everybody does, in a zip file, so we have a record of what’s been happening at each meeting. My first recommendation on the summary and conclusion we should do it at the meeting. While we are here, if we can take a few minutes after and put it down together and come the agreement, that would be good for the members who are participating to see what’s been discussed and agree on it and the next steps. If we could do that, that would be great. We do manage to do it quite well, 80%, maybe if we can get that to be a little bit more, I’d appreciate that. And then it may help us be more timely in the finalization of the technical notes.

SHN: I’ll be open for your feedback on that. If you’d like to make after I finish just a few slides. Regarding the invited experts, we have a number of new invited experts. Thank you for coming in. I think it’s really relevant. Some of the invited experts of course represent an organization, they’ll be working on TG4. And some of them will consider joining. I hope all of them will consider joining as new members. I have put in an expiry date, so to say on the invited expert, it’s to the end of the year, my intention is that we manage it administratively, and I’m doing that for now. I do hope in 2024 some of the 2023 members will become members of ECMA, and for those who haven’t, we can renew based on the needs of the technical committee.

SHN: The nominations as I mentioned, so the nominations are open. Any ECMA member and all of you who represent a member can nominate a candidate. We are looking for nomination for the president, vice-president, treasurer and looking for members from the ordinary members to be part of the ExeCom. In order to do this, if you have ideas, for example, currently Daniel is our vice-president, Daniel can run for another term. If you would like to nominate a different candidate, do so. If you want to nominate Daniel, please do so. There are some deadlines that need to be managed. So if you can give me any input by the 13th of October, that would be great. Then we put the slate available to everybody and then it’s finally voted on as the general assembly. And this is done every year. So now coming to the PDF. And the relevance of the PDF, so we have discussed on many meetings that the -- that the PDF version of the standard is relevant because it is the document that we have stored. It is historic. We keep it. It also has the highest downloads still. We talked about doing -- what we could do. This slide is a repeat. I think you know that -- what’s already going on with ECMA 262 and the markup and where we’re at. It’s the PDF format that we need to find a solution to, and as I mentioned, it is quite downloaded. It’s 30 to 40K per year on its download.

SHN: The proposal that we want to make, and I had a conversation with Allen and with Istvan, and Allen has been supporting us of course in the previous version, and he will not be available in 2024. And what we’d like to do is propose it to Bergen university. And many of you were at Bergen and you know they were very interested and they have a very active group within their faculty that is involved in language standards, and I’d like to proposal to the professor there and Mikhail, who is now an associate professor in that same group, to see if there is a master’s student or senior student who may take this on as a student project. We may support them in it, but it would be interesting to see if this was an interest to them. I would like your feedback from this team if you think that could be a good idea. Just from my initial experiences, they may have the right skills. I know that Phillip, who is not here today, but is involved in your test requirement, I don’t know if Philip is online, he may be reaching out to Bergen university also to do some work in that space. So it could be an option.

SHN: In order to do it, definitely it has to be a student that is interested. There would be some support needed from Bergen university to just manage that student. But also from maybe -- maybe somebody from this committee who is an expert on it to give them some guidance as they begin their work. It can also be something that -- which they do -- you know, they can get some recognition for it. It’s something that we can take on afterwards, and of course, I would also be willing to see how we could sponsor a student to support them in doing this work and how we could continue to use this solution if one comes to do the PDF document. So that’s on the document side.

SHN: So, again, any comments on that, please bring it up. I just wanted to give an update on the JTC1. Every five years we vote on the fast track. The voting ended September 3rd. The results are still pending. They should be out soon, maybe by the next meeting I’ll be able to give an update. We assume it’s positive, but we still haven’t got to final results. Some other projects and new items taking place in the secretariat. We have a new membership interest in OWASP. They’re an interesting organization. There’s also a conversation ongoing right now with the project Cyclone DX, which some of you again are already familiar with. There are a number of ECMA members already active. That one of the discussion we’re having right now it is potentially that project comes into ECMA as a technical committee. And we’ll have a discussion on it next week with the executive committee back in Geneva. I also just wanted to give a short update on W3C. Two weeks ago in Saville, WC3 had its TPAC meeting, and Dan and I the a presentation there in one of the breakout sessions which was about collaboration between WC3 and ECMA. I think that was also quite positive. There were a couple of you from this meeting that were present on that call and at the meeting. I think it was a good opening conversation to remind W3C about ECMA if they didn’t know about ECMA, the work we are doing, the value we can bring and really show a strong reference with TC39, so I want to thank Dan for that presentation. We had lots of questions and we’re going to move forward with seeing what we can discuss with them. So that’s an ongoing conversation.

SHN: There will be more. We have an executive meeting and do some brainstorming and some strategy discussions on ECMA and how we can bring in some new projects.

SHN: I want to comment on Evernotes. Which was acquired by bending spoons, which is an Italian-based organization. I have lost all contact, so this is a call for help. If anybody here or in this organization can help me in finding a name at bending spoons that I can get in touch with, I would appreciate that greatly. They are still members. Just want to get to know them and as lots has changed in their staff, in the US is no more or the ones that we knew are no longer involved in the organization.

SHN: I think that may be the end of my main slides. It is, and I’m going to stop there for any questions.

DE: I want to emphasize the summary and the slide archives are very useful for the committee. We’ve repeatedly gotten feedback from the committee members or following TC39’s they would like to see summaries if this was only useful for ECMA, I don’t think you could expect that this committee would do much work on it. I think it’s useful for ourselves, our audience, and I really encourage people to write summaries and work that goes into writing summaries and doing archives I hope is made visible by putting that in our GitHub. For the PDF, I agree that this is useful. And I want repeat the suggestion that the committee has made to ECMA leadership that we pay someone to do this work rather than asking for a student volunteer. Allen’s suggestions have been received in the past. I think Kevin would have more understanding of the details of that.

KG: I’m definitely open to having external contributors help with this. Especially if we can hire someone to do things. This is the first time I’ve seen Allen’s slides and his detailed write-up of the actual process that he went there, so I’m going to need some time to go through that and see to what extent we can easily automate, and I think we will need to do before we can meaningfully talk about what additional work is to be done. Because he has written up this nice, you know, 20 pages or whatever of what the process is. And previously, I hadn’t known exactly what process he was following, so give us some time, basically.

SHN: Thanks, Kevin. Just to point out, the two reference documents are added to the agenda. Ones Kevin is referring, I appreciate that, Allen and I had a conversation last week and he reminded me of the documents, and I think they may have been sent -- they may have been on the agenda previously. Have a look at that and give me some feedback, then we can figure out how best to approach Bergen university based on some of the feedback that you bring. Thanks, Dan, for your clarification on your added comments on the summary and the conclusions.

As I mentioned in the annex, I will leave you to read it. There are documents that are listed on the GA if you want to know further about what’s been going on with the TC39 meetings. That’s all the documents we have in our repository. This is the number of participants. As I say, it’s just nice to look at. We haven’t decreased our participation. In some ways, I think we remain quite strong. So that’s good. Just the downloads that we’ve been having on the top documents, I just wanted to bring that highlight. I think what’s interesting here is the last version that was just approved, 14. Same here, the last version that were just approved and you already see the downloads on that.

I will stop my presentation here. I will leave you to read the rest of the documents. Are there any other questions?

### Summary

Ecma/TC39/2023/040 Report from the TC39 Secretariat, September 2023 was presented and provided the following highlights and information from Ecma: The slides were reviewed, and suggested to read the documents of interest as noted in the Annex. Status and the working process with TC39 technical notes, its “summary and conclusions” and the ES2023 «Nice PDF» versions were discussed, and the relevance of each of these documents for Ecma and TC39 was emphasized. The Invited Experts (IE) status was shortly reviewed, at this time the IE list is beginning to be managed by both Ecma secretariat and TC39 on GitHub. 2024 Nominations deadline for Ecma GA and Management was reminded to all, if they wish to make nomination. Also TC Chairs and TG Chairs need to be nominated and final candidates agreed by the TC39 committee for 2024. Potential new projects such as Cyclone DX were mentioned, the OWASP membership application, and in addition ongoing discussions with W3C and LF were noted. A list of the latest Ecma TC39 and GA documents was shared. Status of the TC39 meeting participation was reviewed, it is positive to note that meeting participation remains high in numbers and participants and representing organizations remain active.

- ECMA-262 ECMAScript Language Specification
- ECMA-404 The JSON Data Interchange Format
- ECMA-419 ECMAScript® embedded systems API

As noted above, the download and access statistics remain high, the newly approved versions already show continued interest with the standards documents. The next TC39, GA and ExeCom meeting date were noted. It was highlighted that the 100th EcmaScript TC39 meeting is upcoming in February 2024, the first in-person meeting in 2024, to be hosted by ServiceNow in the US. There will be celebratory activities to recognize this important milestone for the committee. There was a call for help: for any contacts regarding Evernote, acquired by Bending Spoons. We want the participation from Bending Spoons to continue.

### Conclusion

Regarding the process suggestions for achieving a PDF version, it was agreed that Kevin Gibbson will review the documents from Allen Wirfs-Brock, as provided in the agenda. Kevin will provide feedback on the suggested process and possibly a way forward. Samina will follow up with Kevin. An alternate option discussed for the PDF version process could be a university project, but was not considered an ideal solution. With respect to the TC39 technical/meeting notes, Samina will discuss with Rob Palmer and Daniel Ehrenberg on the process which can be managed better. Samina will work with Ashley Claymore to better understand.

RPR: Nothing on the queue. I think we’re good. Thank you, Samina.

## ECMA262 Project Editors’ Reports

Presenters: Kevin Gibbons and Michael Ficcara
-[slides](https://docs.google.com/presentation/d/14EMR7dyp5Fe7bZITKNP9upeV4OGo-wwtzWbPsC4cvk0/edit#slide=id.gc6f73a04f_0_0)

KG: Editor’s update, this will be pretty brief because not too much has happened. We have made a couple of editorial changes. The first is a general cleanup and refactoring of the date/time related abstract operations, which were always kind of idiosyncratic and are now significantly more consistent with respect. Someone, I’m now forgetting who, pointed out after the fact that given that Temporal is currently in flight and massive, we should probably avoid further churn, so we’re not going to do any more cleanup in that area for the moment. But this is landed.

KG: Also we renamed the RegExp parameter N to NamedCaptureGroups. This makes the grammar slightly more verbose, but if you are new to it, it is hopefully more informative. If you’re familiar with the previous notation and wondering where the parameter went, that’s where it went. And then we’ve made a number of improvements to ecmarkup. Some of these are breaking changes you can view on GitHub if you are interested. This probably doesn’t affect you unless you are maintaining a proposal and need to change your build script, except for the most dramatic change is that we have a new font. Michael, do you want to talk about this?

MF: We just made a number of editorial changes to improve accessibility generally. The font is more readable, all the contrast is, like, triple A. You can see the references pane down there is resizable for you to see as many or few as you want. When you click internal links in the document, it highlights the targeted term that it’s being linked to. And possibly a few more. But anyway, we’ve been spending a decent amount of time focusing on user experience improvements to the spec since the last meeting.

KG: And please direct all complaints about the font to Michael. Give it a chance to adapt to the new font. I know it’s always jarring when things change out from under you, but it should hopefully be pretty easy to get used to and is visibly better in some ways, especially around the digit zero is clearly distinguished from the letter capital O now and that sort of thing. Other than that, I haven't landed any normative changes. We’ve all been slacking, I guess. Fortunately there’s some coming up at that meeting, and we still have basically the same backlog that we’ve always had. But getting closer to churning through some of this. That’s all.

## ECMA-402 update

Presenter: Richard Gibson

RGN: So for the most part, since the last meeting, things have been editorial. The few normative changes that have gone in are for aligning better with ECMA-262 in terms of the minimum and maximum fractional digits in formatting, now allow up to 100 rather than capping it arbitrarily at 20. We also put in display names v2 and reordered the order of some observable property reading and outputting. And that’s going to be a common theme over the next year as well. The editorial changes are, again, about consistency. We’ve done a whole lot of alignment with ECMA262 as well as with the various Unicode documents and to some extent with IANA. So things like structured headers are about to come in and refactoring some algorithms to better match Unicode technical reports. We’ve also got just general spec consistency, and we’ve updated ecmarkup to match 262 as well. So as I mentioned, the things that are coming in soon are adoption of structured headers. We’ve also got some new named record types, also like 262. And some good changes around how to describe locale matching, where there are two different algorithms and both of them are actually defined in external documents, but we’re adopting the algorithms from that and just putting it in by reference as well as a copy for anyone who is newly implementing any of the ECMA402 functionality. So the common theme really is just around a holding pattern at this point. There hasn’t been a lot between the previous meeting and this one. But we are continuing to bring everything in line so that it looks and feels more like 262, more like a single specification that just happens to be split over two separate documents. Open for questions.

KG: No questions, but thanks so much for getting Ecmarkup updated. I know we’ve had a number of breaking changes, but the integration is very nice now, so thank you.

RGN: Thank you as well.

### Summary

### Conclusion

## ECMA-404 update

Presenter: Chip Morningstar

CM: Well, I was trying to think of something surprising to say, but all I can say is none of you are surprised. So the usual status. Everything is stable. Everything is copacetic.

## Test262 update

Presenter: Jordan Harband

JHD: There’s not much to report. We’ve been merging PRs. There’s still a long list of PRs to review, so sorry you’re waiting on them, apologies. Feel free to ping for those. And as always, anyone who is interested in helping review those PRs and help maintain test262, you’re more than welcome. Thank you.

## TC39-TG3 status report

Presenter: Michael Ficcara
-[slides](https://docs.google.com/presentation/d/1FSukmXtkL0rXqkmgScidr7tZzP9jagxxIyHQllxGWSY/edit#slide=id.p)

MF: TG3 has been meeting now. That is a significant update for sure. We had a hiatus after our chair had left for, I’m not sure, the better part of a year, probably. But we now have two new chairs, and we have two meetings per month. One is supposed to be friendly for US and APAC and the other is supposed to be friendly for EMEA. Initially we’ve been doing a lot of focus on creating our backlog of items we want to work on. We had already previously had a long backlog. We’re going through it to make sure everything still is what we want to do. And we started prioritizing work on our vulnerability reporting policy. So I’ll talk about that a bit today. As a reminder, in the TG3 charter, we explicitly mention a need for this group to handle vulnerability disclosures. Currently, we don’t have a vulnerability reporting policy. We can accept vulnerability reports, but we should have a plan for how to handle them. So after discussion, we have some outcomes from that, and we’d like to run it by TG1.

MF: The first recommendation is that we have a TG3 repo under TC39. We would like to make that public and use the GitHub vulnerability disclosure feature to allow people to report vulnerabilities. The way that would work is that the individuals who initially receive vulnerability reports will be just the TG3 chairs and the admin. The reason why we made this decision is because we wanted to limit the exposure of the vulnerability reports to as few people as necessary. Of course, when that report is received, that small group will expand that group to include anyone who is needed to help respond to that.

MF: The other thing we wanted to get approval from TG1 on is maintaining a list of contacts for reporting engine vulnerabilities when, you know, vulnerabilities are reported in the wrong place. So if something that is specific to an engine is reported to this group. Instead, we would like a way to quickly direct them to the right contact, or the right location. So we have a draft policy here. This draft policy basically just tells the reporter to either report directly to this email address or use the GitHub vulnerability reporting process that we discussed earlier, and, if it is engine-specific, then we give some links to the vulnerability reporting processes for specific engines, because it is likely that they are making that mistake, so we tried to give them some helpful guidance there. We do note, though, however, it’s not going to be an exhaustive list of every single possible implementation. Just the most likely ones that they’ll actually need when they’re going through this process. And this is just a duplicate of that. And that’s it. That’s the whole update. So do we have consensus on those things that I asked? I can go over them again if needed.

SYG: I want to better understand what the definition of vulnerability is in this sense. Because you said the status quo is that we accept vulnerability reports as TC39. I don’t know what that means.

MF: So it is not necessary to define what we consider to be a vulnerability. That is an interesting process that we should go through in TG3 at a later date. But we do not get to control. The point of this process is not to determine whether a thing reported to us is or is not a vulnerability. That would depend on us defining security properties that we would be able to determine have been violated. We’ve not gone through that process yet. This is just a way to accept those reports.

SYG: Okay, so concrete question, suppose somebody is reporting, let me try the phrase this better. Other than redirecting the reporter to a particular project where it may be or may not be a vulnerability, what other, is that the universe of all report, it gets bucketed into some projects vulnerability and then you redirect them to report to that project, or are there other reports that somehow we take as committee and say this is, like, in 262? Because I don’t know what that latter part means, if that exists?

MF: The latter thing. When reports are mistakenly given through this process and they are engine specific, we want them to be redirected either through themselves being redirected when reading this process or if they still send it to us, getting back to them, or going through the security focals making sure it goes to the right place. When it is a language vulnerability, when we have suspicion that it is language vulnerability, which we have not defined what it is, it will be addressed in the group and expanded as necessary to include everybody who needs to be involved.

SYG: In terms of consensus, in asking for consensus, I have no concerns with kind of redirecting to the right project where necessary. I’m not clear on what the actionable thing is when we, for reports in the second bucket that does not fall into any particular projects purview. I guess if the consensus you’re asking for is, you should take that input and then discuss it, I have no concern, but I’m a little bit uncomfortable labeling such things as vulnerabilities if it doesn’t rise to the level of a particular software shipping a fix to do something. Like, if it’s just, we accepted a report, I’m not sure that gives the same messaging as a CVE would.

MF: In the interim, between setting up this initial policy and actually defining our desired security properties, it is going to be more of an I-know-it-when-I-see-it kind of thing. Later hopefully we will have more well defined security properties and we will be able to clearly determine whether or not it is a violation of any of these security properties we try to hold.

RPR: we have a reply from JHD and about a minute or two left on the topic.

JHD: I just wanted to add that if in fact there does not appear to be a vulnerability in any existing implementations, there still could be the situation where the specification would cause a new implementation to have, as a result, another vulnerability, so that would be more the case where I’m expecting we have no one to report to and we have to discuss it, if that helps clarify.

DE: I want to think about SPECTRE as an example of vulnerabilities not coming to the group of JavaScript, both engine authors and the committee as soon as it could have. There are real vulnerabilities that could happen. We’re kind of dancing around the issue that there’s a standing disagreement among members of committee about what things are considered the security model relevant for this committee: the web security model, object capability security model, kind of other pragmatic things that are kind of a combination of those, and, yeah, I’m all in favor of this group getting set up and figuring those out. I think the group will have to do some work to prove itself to be a responsible recipient of disclosures because, you know, otherwise we just won’t get disclosures, just like TC39 didn’t get to hear about some of these things, which is legitimate. Everybody has to be careful about this stuff saying we’ll figure out who to tell next will probably not be, like, a good starting point. But anyway, I’m in favor of getting this started, and I hope the engagement goes well.

SYG: For the example of Spectre, in hindsight, I’m not sure how much that would have helped to discuss in committee, I was not actually involved in embargo, but given what I know how early the chip vendors engaged chrome and maybe also Firefox, I don’t actually remember, in terms of embargoed information beforehand, if the committee were dealing with specter on like a speculation level without being privy to the embargoed information from chip vendors at the same time, I’m not sure how much that would have helped anyway.

DE: my point was more general than that.

MLS: As far as Spectre, that’s really a hardware vulnerability. I’m not sure that TC39 or TG3 would be the right place for that. How do you see this being compared to the existing CVE process that certainly all the browser implementations of JavaScript already are very involved in?

MF: So again, we would redirect engine implementation errors to the respective security tracker for those engines. The things that we would not redirect there are things that violates security properties of the language. As an example, since we’re not talking any concretes, here but as an example, you know, we all hold dear this isolation that, like, functions give our scopes, right? If a function was able to access something closed over in a different function, that would be bad. I think that is something we can generally agree on. I’m not aware of any construct in the language that would allow that to happen. If it happened, I think that would be necessary for us to discuss as TG1, to address that.

MLS: So do we know of any examples where the spec had what we consider a security error? Not an implementation that had a bug, but the spec had a security error?

MF: Yes, there was at least one that we discussed in TG3. JHD, do you remember? I’m not recalling off the top of my head.

JHD: Yeah, I don’t know off the top of my head either. I think one, a theme we’re having in these TG3 discussions is trying to make sure we design around potential things as well, even if there hasn’t been a concrete occurrence yet. Although I suspect something does exist, and even though MF and I can’t recall it, it’s something that could exist in the future.

MF: There was something that MM and Nicolo had worked on.

RPR: Waldemar has a reply here.

WH: I raised the issue of high-performance timers letting scripts look for cache effects. Actually I raised this and we were discussing this before Spectre and Meltdown came up. So this was one area of a spec that was touching on security. Also, I don’t understand what we’re proposing here when we say that, if there is a vulnerability in the spec itself, then we’ll discuss it. Who will discuss it?

MF: As I discussed, as I listed on the slides, the group that receives it is just the TG3 chairs and the administrator, who then opens up the discussion to any relevant parties within TC39. I think

WH: So just the chairs will discuss it?

MF: No, that’s not what I said. The chairs will decide who needs to be involved, and then invite those people.

RPR: So I think we’re going to have to wrap that one up there. We went a bit over. But thank you for that, Michael.

MF: Can we have consensus on making TG3 public and enabling that vulnerability report and getting the process and GitHub?

RPR: Michael Saboff is neutral. Shu has a condition.

SYG: My hangup here is I think people who are in the and looking out in the security space to the practitioners are using the CVE process or used to word vulnerability meaning a actionable thing around a software artifact. I prefer a different word be used with the second bucket of vulnerability that with you were talking about that knows vulnerability but if you were to stick with as a result empty-netterrability, it’s loud and clear that it’s a different class of thing than an actionable thing that could be exploited or patched in a particular software.

MF: That’s fair. We can brainstorm wording.

RPR: Okay, and Waldemar is neutral. All right, with that slight change of wording from Shu, I think we have consensus. Last call for any objections? Okay, there are no objections, so you have consensus. Michael, could you just read out for the purpose of the notes the key points.

### Conclusion

MF: The things that were being asked were the TG3 repo is made public, the GitHub vulnerability reporting process is enabled for our org, and the vulnerability reporting document that I shared is the document that’s going to be linked to from various appropriate places, official TC39 places, with of course a change to wording that Shu was asking.

## TC39-TG4 Source maps – Report

Presenter: Jon Kuperman
-[slides](https://docs.google.com/presentation/d/1E4Mi_q-PKtBJ_hoCX4xQ1IJPNi9dFHMSF22akVX_q2Q/edit#slide=id.p)

JKP: So just a quick update about TG4 source maps. Since the last plenary in July, we convened and formed the task group, and since then we had matrix rooms, I have linked to later in the slides and moved all the repositive over to GitHub and began meeting twice a month. The second Wednesday, talking about new features that we would like to add to source maps and meet the last Thursday of each month at 1600 and that is specification correctness. We go through the current spec and call out any issues there. The primary focus is the correctness that is our top priority. But spending a good amount of time investing in new features, such as adding debug to make tracing back, scope and information into the source map. And things like that. We also had a bit of exciting news, having the first in person meetup last week. We met in Munich and were hosted by Google in Munich. Productive session. We went through a bunch of the issues on the GitHub repo and got through a lot of those with good updates. We did some cool demos. People from Chrome demoed this idea of adding the scopes and variables. Nicolo had built some cool source map snapshot testing to add a bee Babel. And did a cool around, from century, around adding debug IDs. Not looking for consensus on anything. Just wanted to give the committee an update and also say that we are still looking for anyone who is interested in contributing. The matrix rooms linked here. All the stuff on GitHub is where we are doing our discussions as well. The meeting and interested in people helping out with source map testing and validating, contributing, things like that.

RPR: All right. Great. Yeah. Lots of energy from this new task group!

### Summary/Conclusion

TC39-TG4, the new source maps task group, has continued to make good progress towards its goals of improving correctness/precision of the specification, implementing a test suite, and designing new features to improve debugging.

## Code of conduct updates

Presenter: Jordan Harband

JHD:. We have no incidents to report. There’s certainly things we keep an eye on. Please let us know if you have anything to report. And although we have closed the issue for a call for new members, we always would welcome new members. And more people to help. So please reach out, if you are interested. Thank you.

## Normative updates to ECMA-402

Presenter: Ben Allen

## Normative: Change the hourCycle default logic

- [PR](https://github.com/tc39/ecma402/pull/758)

BAN: We had associated the 12 hour clock, which is the default clock that is used in the United States, associated with the h24 clock, when the `{ hour12: false }` option is passed. This is not, as you might think, the 24-hour clock as used across the world, but it is a clock that is not used anywhere. It goes from 1 to 24. It’s – I believe we have CLDR and it’s not used anywhere. What this PR does, is break that sort of erroneous association between the two of them. Previously, if the – the time stored was – if they had been using h12, and hour12 was set to false, so requesting the 24-hour version of the clock, that would set it to h24, which is just plain wrong. That’s not correct anywhere. So we have changed it to instead associate that with h23. Which is the thing that makes sense, in this context, which is the international clock.

DLM [on queue]: support

### Summary

This patch fixes a bug in options processing where Intl.DateTimeFormat would sometimes use hours from 1-24, when the right answer would be 0-23.

### Conclusion

Consensus on #758 with explicit support from Dan Minor

## Normative: Added note about sets of locales for web browser implementations needing to not change as a result of user behaviour

- [PR](https://github.com/tc39/ecma402/pull/780)

BAN: Yeah. So this one, I probably shouldn’t say this, but I am anticipating a fair amount of controversy with it. We are in a weird space, where we kind of have to care more about fingerprinting than the rest of the spec. This one is about making it such that it’s not possible to individually identify users on the web platform from the set of locales installed. If someone has installed non-system locales, after downloading the browser or the localized version of the browser, that should not be revealed to servers because that can be used to identify individual users. If you have a sort of idiosyncratic set of locales, that fact alone can be used to immediately identify exactly who you are. The question here though is obviously this is incorporating this specifically for security concerns in the web environment. We have got sort of two parts to it. One, which is going to be – considered normative. Which is that essentially the short version is, the locales for everyone with the same engine and platform version should seem like they have the exact same set of locales, even if hypothetically, someone has downloaded and installed new locales. I believe no current browsers support that.

DLM [on queue]: Explicit support

DE: So I support this as a change, as – well, or clarification about what the browser should do. As an editorial matter, I don’t think we should be referring to non-normative notes this way. If we’re – you can’t use the most must in a note. That’s just kind of a RFC, whatever it was, that set these things up. If you want to use the word MUST, it has to be – it’s normative text. MUST is a normative statement about what the specification requires. A note is for just sort of describing implications of things or context. Even SHOULD can be part of normative text. I know we avoid using SHOULD in the JavaScript specification. There’s no reason we have to. We – we can – yes. So I think neither of these two things should be a note.

RPR: And JHD has thoughts on adding

JHD: I think I agreed with what Dan said. Just an addition, like mentioning a user agent string and so on, I think we should be careful to word this in a vague way. And then if necessary, like parenthetically link to something in the HTML spec that would be an example of it. In the same way for `document.all`, we don’t define `document` in the spec, but make it clear this is what we are talking about. This is an editorial concern. I support the desire behind it.

BAN: To briefly respond to that, I think it’s fine for us to include, we already include references that are specific to browsers. If we want to make a requirement that’s browser-specific, if we are thinking about user agent strings, in a note, I think it’s fine to use say, this refers to user agent strings, and it’s not vague for the sake of layering. As long as we are clear about the generalities of the layering. It’s good to be concrete and give notes that explain what you are talking about.

RPR: All right. And then Mark?

MM: So I agree with everything that Dan and JHD just said. But it sounds like we are discussing as well, could this PR instead be normative? Given everything just said, I think it sounds like we agree it’s better off being a note.

RPR: Okay. I see Ben nodding. Is that the direction we shall take, then?

BAN: Yeah.. It seems like there’s broad consensus on this conceptually, but change the note that makes the normative claims to normative optional rather than a note.

DE: So I think we can iterate on the wording off-line. I also really don’t like normative optional, and I don’t think we add new versions of it, if we can’t get consensus on moving it. I think we can have consensus on this and just iterate on the wording and land it asynchronously. So I would support that at least.

KG: Yeah. Agree with Dan. We can just say some things are normative for browsers specifically. That’s fine. Say those words.

RPR: Okay. Ben, so do you have your direction from here?

BAN: I have my direction from here. I will sync asynchronously with folks

KG: Concretely, are we going to ask for consensus for making it a normative requirement also for browsers.

BAN: Yes

KG: Do this thing?

BAN: Yes. I would like to move for consensus for this being normative for browsers.

[Later discussion on this topic reordered to up here]

SYG: Apologies for the late question. I support it, normatively. The spirit of things, I wanted to make sure that it is outside of my wheelhouse, so I don’t know if there’s implications here with respect to UA reductions. Is there an effort of chrome to reduce the granularity of user agent strings to get people to depend on them less, among other things like minor and patch level versions, all become zeros. Does this have any interaction?

BAN: I don’t believe so. The key thing is that basically whatever the UA string is, you shouldn’t be able to figure out the – any more information than it is in the UA string from looking at the set of installed locales. So I believe now, I might be missing some cases there.

SFC: Just to reply to this topic, the actual reality, is that the data currently is dependent on the ICU and CLDR version that is shipped in a current browser version, and there may be certain variants, like, for example, if different operating systems have different sets of locales available, like Chrome on Android versus desktop Chrome; that’s the web reality. All browsers as far as I am aware are compliant with this normative specific text. But if there’s anything else that you think we should be aware of, then in terms of a patched version going to zero, that doesn’t sound like something that would impact anything.

SYG: There is an effort for user agent reduction. On identification, one normative upshot for browsers that use ICU, you cannot do a CLDR upgrade within the same major version of your browser.

SFC: That would be correct. If the zero thing goes through, that is an implication of the PR.

### Summary

### Conclusion

Consensus on this normative change (pending improved wording where it’s not in a note) with explicit support from DE, MM, KG, DLM, MS, JHD

## Normative: Fix order of rounding* option reads and resolvedOptions()

- [PR](https://github.com/tc39/ecma402/pull/811)

BAN: This PR adheres with how we have been doing things. It places all of the reads and what is reported resolved opposites in alphabetical order. Previously, the rounding priority in number format had been read before rounding increment, even though rounding increment is ahead of rounding priority alphabetically. So that has been moved down. Rounding priority is read in its appropriate alphabetical order place. And also, the table that is used to generate the output for resolved options that has been rearranged as well to put them in alphabetical order.

[Explicit support from DLM]

SFC: Yeah. Just pointing out that this type of change, we are working on the style guide and there’s a request open for the style guide change, I believe. Number 831. So if people are interested in this type of issue, please weigh in on question number 831, which modifies the style guide to reflect this type of ordering of these options.

BAN: So on the rounding error one, do we have consensus – or the implement read order one, do we have consensus for that one?

RPR: Any support for 811? Any objections to 811? Dan Minor has support. And no objections. So I think we can say this has consensus.

BAN: Fantastic. Thank you, everyone. Most especially, to the people in Europe who are up at some ungodly hour in the morning

RPR: yes. Europeans have the worst TimeZone for this meeting. So thank you to everyone in Europe who is dialing in. All right. We are getting through things well. To bring some things forward. The next one is RGN.

### Summary

### Conclusion

Consensus on this normative change with explicit support from Dan Minor

## Update GetSubstitution to match reality

Presenter: RGN https://github.com/tc39/ecma262/pull/3157

RGN: Thank you. So, a quick recap. Someone discovered back in January 2019 that the spec text for GetSubstitution was not followed by implementations when the replacement pattern is a dollar sign and two digits identifying an index that is not present in the regular expression where the first of the two digits identify an index that is present. So this PR updates the spec text to match implementation reality. There’s some late-breaking news, which we will get to in a minute. The idea is, when the index identifies a two digit group that does not correspond with a capture from the regular expression that we trim the tail, look at it as a single digit index followed by a literal digit character.

[Aside about calling for note-takers and summary-writers]

RGN: So as mentioned, the change is straightforward. The reason this has been open so long is insufficient coverage in Test262. So we now have a PR in Test262 to validate that. If we look at it, it will be shown as the things we’re talking about. Given regular expressions with 0, 1, 10 captures paired with patterns like dollar 0, dollar 1, 2, et cetera… What we see is that 0 is never a capture group because the references are indexed by 1. 1 is not a capture group, when there are no captures, but otherwise it is acceptable. And likewise, we get down at the bottom into the double digit ones, so $10 does not match and $1 does not match in the first here. We see that the $10 doesn’t match, but the $1 does, so the 0 is carried forward and then likewise for the $20. So basically, again, to recap the idea is, land the tests or extensions thereof, which capture the browser behavior and update the spec to match. I will go to the queue. What we are seeking is agreement to that general pattern, if the PR against Test262 or ECMA 262 requires some tweaks.

JHD: I certainly support the general idea. It’s possible I have the only previously spec compliant implementation which is not useful for anybody: I have the spec PR that RGN put up implemented. And with one major exception so far, it seems to do the right thing. That is, just $01 should like in browsers do the same thing as $1. Once we have accounted for that, assuming I find nothing else with the test cases, I think we are okay. But yeah. I wanted to call out the difference. I just noticed two minutes ago and I am in full support of the direction.

WH: What happens when you have `$01` and there are a few capture groups?

JHD: The thing I just said is that browsers will treat that as the same like a leading 0 is effectively ignored. And it otherwise works for single digit ones. If you have 01, 2. I am sure that’s $1. Not $12. But that will certainly be verified before this forward. To anticipate Shu’s question, I tested this in Safari. I don’t know what all browsers do, but it’s worth verifying this before updating the tests and the PR.

DLM: Sorry. Yeah. So we support this change in general. And we are not super right about figuring out the details. I am sure it will get done. Thanks.

WH: Yeah. I am generally uncomfortable with changing how text parses based on how many captures are in the regular expression. I am wary of this change.

RGN: To be clear, in treating a 2 digit index as a single digit index followed by a literal digit character, there is agreement in all major implementations and at least the supermajority of minor ones as well. I don’t think we can change the behavior. We just need to document it.

KG: Yeah. Waldemar, are you objecting to the behaviour that this request would specify or how it goes about specifying it? I couldn’t tell.

WH: I am not objecting. I am just very wary of this kind of behavior. This is not something that we would have done if implementations hadn’t made a mistake.

KG: Yes. Sorry to use the word objecting. I fully agree with you. This is hateful, but also, you know, it’s what engines do. So

DE: Somebody saying that there was another case that hadn’t been fully tested?

RGN: Yeah. So $01 through $09, we just found out this morning are treated as if the leading 0 were not present.

JHD: Actually, sorry to add to that. If you have $012, that is different from $12. Because $12 could be 1 or 12. Depending on how many capture groups you have in the regular expression. $012 will always be $1 followed by a literal 2. And that is the current behavior in all browsers we can verify and the current spec PR needs some tweaks to that.

My implementation of the current spec PR doesn’t include the leading zero. That can be an issue on either side

WH: You said `$012` will always be treated as `$1` followed by literal `2`?

JHD: `$1` followed by a literal `2`. `$12`.

WH: I am not asking about `$12`. `$012`.

JHD: `$012` will always be the first capture followed by a `2`.

WH: Even if there are no captures?

JHD: If there are no captures, then it would just be a literal `$`, `1`, and `2`.

WH: Without the `0`?

JHD: I’m sorry. Yeah. Like, so in other words, my guess as to the purpose of this, it’s to make sure that capture row placements are consumed no matter how many capturing groups in the regular expression. You don’t have to have your replacement string vary based on whether there’s less than 10 or 10 or more capturing groups in the regular expression. Like, by the leading 0, it allows us to use 2 digit replacement numerics and never have to worry about the quantity of capturing groups in the regular expression.

WH: Okay.

DE: So JHD, it’s great you have done this investigation. I think we should come back to this topic once everyone has had a little bit of time to review it off-line. And then maybe that will lead to this patch. I am happy that everyone is following through and making sure that the specification reflects implementation reality.

RGN: Right. So ideally, we would not need to revisit this in plenary. If we get consensus, then all follow-ups can take place asynchronously in the PRs, which is my goal today.

DE: I would support consensus on that. On consensus, on this to the extent that it matches implementation reality with the understanding that there will be some more tweaks done to meet these fine details based on more testing.

Any concerns? I would also understand if someone wants to revisit the plenary later.

[Explicit support from Dan Minor, RKG for conditional consensus]

WH: It depends on the reality. We don’t know if the engines agree on all cases. Given the new cases from this morning, are you sure that the engines agree on all cases?

RGN: I am not certain. I have high confidence, and I would seek consensus conditional on that agreement. If a case is found where implementations disagree, I don’t see a way to avoid bringing back discussion in plenary

DE: I support that. We should allow them to refine and land this patch offline, if there is agreement among engines. If there is disagreement, then we will discuss it in committee.

RPR: Okay zero. This seems like a clear proposition. I don’t think there’s any objection to it. Is there conditional consensus assuming the agreement?

I think there are no objections. Okay.

RGN: I will capture that in the notes. Thank you.

RPR: Thank you, RGN. Yes. Please do record the key points, as well. All right. RGN, I hope we can return to you, immediately. If that’s okay. You have JSON.parse sourceText access update.

### Summary

RegExp replace with a string replacement, including a $ followed by two digits, has long had a specification which didn’t match what JS engines, including browsers, shipped. A specification PR has been available for a while, and now test262 tests have recently been drafted to check this behavior. JHD noted that there may be more edge cases with common behavior across browsers which could be better-specified.

### Conclusion

The proponents of this change will work together on testing the additional cases that JHD pointed out. If all browsers agree, then the committee has consensus that a patch can be landed which fixes these issues (probably this patch + a couple additions). Otherwise, if there is a mismatch between engines, the presenter should bring the change back to TC39 to discuss next steps.

## ecma402#788 Normative: Allow UTC offset time zones

Presenter: Ujjwal Sharma (USA)

USA: Hello.

CDA: We can hear you.

USA: Oh. Okay. Did you already assign somebody else or should I?

CDA: If you’re ready to go, I think we would be happy to have you.

USA: Perfect. Yeah. Sorry. I have serious issues with Zoom. This also, I think RGN could you chip in, In this one. But this is fairly straightforward. It’s a normative PR. As you all might know, just to confirm you have my screen, right?

CDA: Yes.

USA: Okay. So Temporal, introduces a number of TimeZone operations into the interesting sort of space that we have here. Including UDV offset TimeZones. Like fixed Time Zones with a fixed offset. They never change. And these are not allowed within the 402 side of things. Could you have already asked for and the human readable TimeZone. Asia, Tokyo, or any of the other TimeZones that are sort of textual, but not these fixed UTC TimeZones. So this would add support for that, sort of aligning things on both ends. And there’s been a lot of comments from Temporal folks and so on. But overall, this is the end result of this PR. This would align the current 402 with the future 262 by also allowing offset Time Zones. That’s that. Also, it would help us to format the Temporal objects with an offset TimeZone. So yeah. That’s pretty much it for this request. Is there anything on the queue? I could quickly check. Nothing so far.

RPR: Queue is empty.

USA: In that case, I would like to ask for consensus for this change.

RPR: Of course, this was one added after the deadline, so anyone would object for not enough time.

USA: Yes. Thank you, RPR. That was indeed added after the deadline. So please let me know if you need more time to review this.

RPR: You have explicit support from Dan Minor and Frank.

USA: That is perfect. Thank you, both of you. Implementor feedback means a lot. And that’s it. Thanks, all.

### Conclusion

Consensus on the PR, with explicit support from DLM, FYT

## Import Attributes Implementer Feedback

Presenter: Daniel Minor (DLM)
-[slides](https://docs.google.com/presentation/d/1AvdsT0k_etbelbE_HEdEY8YHLbsDv0ObWBaAhDm3TAE/edit)

DLM: Okay. Thank you. So I would like to quickly present some implementer feedback on import attributes. So we have one issue that has been raised as a result of the implementation. And what we would like to do is, restrict attribute keys syntax to be identifiers and strings. So right now, there are also allowed to be numbers and big integers. This is a bit of a problem for us, not exactly a problem we can’t do it, but we find it to be not the nicest way of handling things and that’s because we need to convert keys to strings when we want to parse in order to check for duplicates. And so to be able to do this, big integers, we have to support allocating big integers inside the parser. So that’s not something we currently do. Big integers are garbage collected things and that is something we try to avoid doing inside the parser and we don’t currently do. By avoiding this, it will simplify memory management to allow us to parse more quickly. Push here, complicates the implementation. What is the benefit? I am honestly not sure. There is a bit of discussion in the issue that it would be symmetrical, but there’s already some things that won’t currently work. And I don’t think there’s really much benefit in allowing this here. I would also point out it has been implemented with big support inside the JavaScriptCore and possible. But the other implementations are happy about having to do this. And I think it will make life easier for everyone if we allow these restrictions which would be to only allow identifiers and strings. I don’t see the benefit to actual JavaScript developers. With that, I would like to open up to the queue.

RPR: Kevin has support.

KG: Yeah. I support this change. There will never be a key that is numeric here. So it’s not something that users will ever notice, that they can’t write a number here. Because you would get an error anyway, because there is not a key that is a number. So it’s just not worth asking engines to do literally any amount of work given it will never come up.

RPR: Nicolo?

NRO: Yeah. I want to talk about what Kevin said, these throws are changing when it happens. Like given that the only reason we have was more similar, it’s not worth increasing complexity.

RPR: Thank you. Michael has support. Michael

MF: I had initially asked for adding support for BigInts in this position. But given that it adds this implementation complexity, I think that’s – that definitely not the right tradeoff. We should – yeah, we should drop this again.

RPR: Okay. Thank you. There is a clarifying question from Nicolo.

NRO: Yeah. So like just with absolutely clear, it also asking to remove support for like [inaudible]

DLM: Yeah. That’s correct. So big integers are things to avoid. We already have support in the parser for checking numbers. But I think it’s just more or less a consistent thing. We don’t see a reason to allow numbers at all.

Okay. Thank you.

RPR: And Luca has a + 1. All right. I am only hearing support. Shall we just confirm that we have consensus on this change? We have had a lot of explicit support. Mark Miller is skeptical. Could you speak?

MM: I am uncomfortable with this. I am not going to object, but I want to state why I am uncomfortable. So there is the hierarchy of constituencies, and implementer complexity comes after people trying to understand the language. And every time one thing in the language cannot simply be explained as it’s like this other thing in the language because of an exception, then it’s one more little exception to have, that either you remember or you, or it’s in your face. So just on language symmetry grounds, on the spec that needs to be absorbed be simpler because it has fewer things that are not exactly like something else, and if the implementation complexity is significant, you know, really significant, then I certainly yield. But we are talking about it within square brackets, the thing that it turns into, if it were, you know, you know, if it were to be recognized within square brackets it the stringification of the BigInt anyway. So if implementations were burdened with treating the symmetrically, it won’t be hard to avoid the BigInt and avoid burdening the garbage collector. And even if they were, we are burdening the garbage collector for a very rare case. What is the benefit of having the parser be able to avoid the garbage collector for a rare case?

KG: Mark, this will literally never come up. You have to learn about these things that are different in this case. You just don’t have to learn it. It will literally never come up. There will never be a key that is numeric. So there is never a reason that a user would write this in a valid program.

MM: Does the spec of the syntax here not simply reuse productions of syntax elsewhere in the language?

KG: If reuses some of them, it doesn’t reuse the property production because it does not have computed property keys anyway. It’s already different.

MM: I see. Okay. And in that case, I withdraw my skepticism. Thank you.

RPR: All right. There are some replies. All right. I have only heard positive explicit support. Withdrawn the skepticism. Let’s just final check. Any objections? No objections. So congratulations. We have consensus for this change

DLM: Thank you

### Conclusion

Consensus on the change to only allow Identifiers and Strings as keys in Import Attributes. It’s agreed that this will never happen in user code anyway, and removing support for BigInt and number simplifies implementation.

RPR: 10 minutes between us and lunch. I think lunch will enter the room very soon. Before that, we have a couple of 5-minute items. JHD first with array grouping update.

## Array grouping update

Presenter: Jordan Harband (JHD)

JHD: Just a status update. The array grouping proposal will be in chrome version 117, out this month. It may have already come out. I don’t know. It is implemented in serenity and es-shims. Firefox will ship in v119 in October. My expectation is at the next meeting, assuming no issues with the implementations, that we will be able to come back and ask for Stage 4.

### Summary

Array grouping is at Stage 3 and gradually shipping in browsers

## Array Buffer transfer update

Presenter: Jordan Harband (JHD)

JHD: It’s going to be a similar style of update.

`ArrayBuffer.prototype.transfer`, the V8 implementation has merged. I am not sure which version of chrome it has shipped or will ship in. But since it merged back in February, I am assuming it’s already shipped. And I don’t have any tracking progress for SpiderMonkey or webkit / JSC or, but the es-shims and implementation and JSC as well. My hope is that SpiderMonkey and JSC will work on the implementations and in a future meeting, I will come back and ask for Stage 4 for it.

DLM: Yeah. So this is already implemented in SpiderMonkey, but we will be changing that in the future. Thanks.

JHD: Dan, I am looking to see what the status is with JSC?

JHD: Thanks. If you folks could drop me links to the tracking issue, that would be helpful.

SYG: Just so clarify, chrome shipping v114, it’s been stable for a while. It’s behind a flag?

DE: That’s what chrome status is. But I haven’t checked the code.

SYG: I don’t know. That site keeps changing. They are annoying. I will try to fix that.

RPR: All right. Is that all for this update? Yeah, thank you.

JHD: Thank you.

### Summary

`ArrayBuffer.prototype.transfer` ad friends are at stage 3 and gradually shipping in browsers.

## Symbol predicates update

Presenter: Jordan Harband (JHD)

JHD: Sure. So there’s nothing really to present there. There remains one issue open, which is Shu’s question about the utility of the Symbol.isWellKnownSymbol() predicate. There is no clear answer to that question yet. The – rather, not yet compelling enough answer to convince SYG or whichever cohorts he represents, so that’s explored. If we still do not continue to find something convincing enough, then I may come back and split out the two predicates into two proposals to advance the ones that clear utility. But that is where we are at, with that proposal. That’s it.

RBR: All right. Any questions for JHD on symbol predicates? No questions? Okay.

### Summary

Symbol predicates remain at stage 1; still looking for more arguments for the isWellKnownSymbol predicate that would convince those with concerns.

## Pattern matching updates

Presenter: Jordan Harband (JHD)

JHD: No details to discuss in this meeting, which is why I picked a short timebox. The champion group for pattern matching is nearing completion of a new design, not drastically, but something better matching the feedback from SpiderMonkey about designing iteratively, even if it is shipped holistically. I hope to come back at a future meeting, perhaps at the 100th, and have plenty of time to discuss those changes, and either incorporate more feedback or seek Stage 2. But so we will probably merge that PR before the next plenary. Even though we won’t be presenting. Most likely at the next one. If you are interested, feel free to follow that and feel free to ask if you have any questions. Thank you.

RPR: Are there any questions on pattern matching?

DE: I was looking forward to a potential presentation of, like, the actual proposal. Or discussion on it or anything like that.

JHD: Yes. We had hoped to be able to do that. But the champion group has gotten hung up on a few items we don’t have quite consensus among ourselves yet. We thought it best to delay, rather than, you know, so we can come to the group with a cohesive presentation, instead of risking distracting the group with smaller possibilities. Obviously, if we, I think even if we cannot come to complete consensus, we will bring proposals, some possibilities to the committee. But we just as a group didn’t feel we were ready to present on it, unfortunately. I share your enthusiasm for being able to have that discussion in plenary.

RPR: All right. Any other questions on pattern matching? No. None for now? Dan, is it worth putting up notes? Are there any topics we would benefit from going through the key points and just documenting what we have already done?

### Summary

Pattern matching has gained momentum again, but there are still some things to be solved in the group of champions and once those are settled, there will be a presentation about the changed proposal relying on implementer feedback.

## JSON.parse source text access update

Presenter: Richard Gibson RGN

- [proposal](https://github.com/tc39/proposal-json-parse-with-source)
-[slides](https://docs.google.com/presentation/d/1pg1gnNeMIcAbwq-CdQE7vlSldlNZ5q2hC5OA-U8ScI8/edit?usp=sharing)

RGN: So it’s been a little while since we presented this, but it’s coming to a close now, and I thought it would be a good time to give an update on where things stand. So the background of course is that we’re dealing with the problem that JSON.parse is lossy. Even if you have a reviver function, for instance, when you are parsing numbers, which in JSON are an arbitrarily long sequence of digits, you receive them inside the reviver as an EMCAScript number, which is limited to IEEE 754 binary64. Here is a trivial case that has discarded information available in the source.

A secondary concern, which is not actually addressed right now, at least not fully, is that there’s also insufficient context for reviver functions, so if you’re parsing a object that you wish to represent thing more detailed than just one of the JSON types, you don’t actually know where in the data structure you are, and so it’s really easy to accidentally transform a value that happens to overlap with whatever special syntax you use for indicating rich data. You have to do strange tricks like look at the corresponding key or keep your internal cache or other things like that. And on the flip side, the output from a replacer function when you are serializing into JSON is itself subject to re-serialization, so you cannot output an arbitrarily long sequence of digits like you might have read in, anything that you output is going to itself go through JSON.stringify and even if you emit a string, I’m sorry, a BigInt that doesn’t work. If you emit a number, that’s going to get lossily reencoded, so you can’t actually output the range of JSON that might come in.

And the proposal in order to address that is to, well, on the input side, expose the source text so you might be able to, in the reviver function, look at the raw sequence of digits and preserve the information from it that it wasn’t available in the case of a number or also to look at a string and see which characters were represented as escape sequences versus literally. On the output side, allow image of raw JSON so you can have your arbitrarily long arbitrarily precise sequence of digits, or any other primitive value that makes sense.

And in the recent past, being the past couple days, we’ve resolved a couple issues. Number 1, a surprising result that was overlooked in the original text to deal with forward modification. JSON.parse reviver function has access to the non-primitive value that is being dealt with and can peek ahead and make modifications, which are going to invalidate any source text access if they do so. And also one where it had to do with the discrepancy between EMCAScript and JSON parsing data models, their grammar. In JSON, a negative sign before a number is still part of the number token. That’s not true in EMCAScript, where this breaks down into a unaryexpression. It’s a negation operation on a literal number. So we need the negative sign to remain in the source. It wasn’t previously. It is now. There’s still a couple open issues, but they’re open only because the proposal is not yet advanced. We have tentatively made negative decisions on both of these, which deal with exposing more information in the context object that communicates the source. We might do ancestor keys that show where in the data structure a value is, but have decided not to for now. We might also expose position in the input string where the source text falls and have decided not to do so for now.

So in terms of implementation readiness, I’m working on the tests. They will be in a test262 PR this week. We are ready to implement. And I’m expecting to ask for Stage 4 possibly at the next meeting, possibly at the one after that, depending on the progress of implementations, but don’t foresee any issues past there. With that, I’m ready for the queue.

CDA: We have Daniel Minor first in the queue.

DLM: Sure. I want to say that we continue to really like this proposal and that with any luck, we’ll be starting our implementation later this year.

CDA: Shu is next.

SYG: I feel like I missed something. What are these open questions, JSON has been in Stage 3 for a while? We shipped it already after you fixed the assertion.

RGN: In that case, I’m happy to close them and they will no longer be open.

SYG: Okay, that’s good, I guess. But, yeah, I would if I don’t know, we shouldn’t have advanced to Stage 3 if there were open design questions.

RGN: The only thing that would change the resolution of these is feedback from implementers. So if you’re saying that you don’t have any, then their progress is pretty clear.

SYG: The main feedback was the assertion a failure that caused, not just spec assertion failure but actual runtime assertion failures, but it has been fixed and shipped. So, I don’t know, any changes we want to make would need a higher bar.

RGN: Awesome. I’m happy to hear that.

CDA: Nothing else in the queue?

RGN: No. Thank you.

CDA: All right.

### Summary

The proposal is ready for implementation, and a test262 PR will be up this week.

### Conclusion

Having not received implementer feedback to the contrary, open issues regarding design questions will be closed.

## Iterator helper web incompat

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-iterator-helpers/)
- [issue](https://github.com/tc39/proposal-iterator-helpers/issues/286)

SYG: All right, so we, Chrome recently tried to ship iterator helpers, the synchronous iterator helpers, and we found a web incompatibility that we did not see until it basically hit stable. This is par for the course because beta and canary populations are non-representative, and often we don’t find glaring web incompatibility issues until we hit stable. You can read the full details for what actually broke but it comes to the override mistake. With interaction in two parts. So one, a lot of code on a lot of websites on the web ship an old version of the regenerator run time, which they use to polyfill things like async await and generators, anything with kind of resume points, there’s a polyfill that has a run time support and that is, the run time support is called the regenerator run time. The regenerator runtime tries to set up its own generator function, and it assigns to its constructor, you see this snippet here, it tries to assign to the constructor property of its polyfill generator function with dot access and it just does dot constructor equals blah. This interacted poorly with a separate product called airgap.js, which truth be told, I can’t really tell you what this thing does, but it does something with, I don’t know, some kind of data isolation or something with cookies and some kind of privacy thing. But in an attempt to, I guess, be extra safe around exfiltration of data that it promises to safeguard, it freezes the iterator prototype if there’s a global called Iterator. We added this global when we shipped iterator helpers.

That’s part of the proposal. We’ve always had this prototype, but we gave it a global name called Iterator. And this airgap.js, which is a closed source library, a paid product, froze the Iterator prototype. Now the prototype has a constructor property on it. And the override mistake now means that after you freeze the built-in prototype, the iterator prototype is on the prototype chain of the generator prototype, so when you do a dot constructor, the constructor is read only on the prototype, which means this fails and it breaks the existing code. So we have another instance of the override mistake causing us to not be able to ship this proposal. So this is originally, we thought this interaction seemed somewhat rare, like, freezing intrinsics is very rare. We thought that if we can get the upstream site so this was discovered on theathletic.com, which is a big enough site that we don’t want to risk breaking, but we reached out to the athletic and to the parent company that makes airgap.js and they were receptive to updating their site to turn off this freezing mode.

Unfortunately, after they did that, other breakages also popped up of the same kind because other sites used airgap.js and the mode where they freeze the intrinsics is the default mode. So currently, we’re in a pattern that we, the Chrome, has unshipped iterator helpers because many sites break due to their use of this airgap.js. Our intuition, that it is not possible to get people to update regenerator. There are too many copies of old regenerator runtimes around. But the bad interaction comes from airgap.js. It’s not known to us if there are other popular libraries that freeze intrinsics, and specifically iterator.prototypes. So yeah, so that’s our intuition, but we are not going to ship it, again, until we can build confidence that things that are broken currently are not going to be broken anymore. So there are a couple avenues open to us, and if Michael is comfortable to talk about that, I would like to turn it over to him.

MF: Yeah, so of course the first, the most preferred thing is that we work with this company to update their product and update the use of their product on all of the customers that are affected. We provided them with a snippet of JavaScript that they could run on their customers. They were not willing to share their customer list, but we provided some JavaScript that they could run on their customers to determine if they were affected by this issue and reach out to them to fix that. This is the preferred approach, because as SYG was kind of mentioning, we think that this is likely the only instance of the freezing intrinsics. Also, due to some errors when unflagging the feature or flagging, again, the feature, we had a few days of extra data, which didn’t, to my knowledge yet, turn up any other identified incompatibilities. So we will take some time to see if they can successfully upgrade their customers. We have a backup strategy. It is linked from the agenda. It is PR number 287 on iterator helpers. That implements the accessor approach that we previously discussed when we were discussing symbol.toStringTag. If you recall, I don’t know, a couple meetings ago, we had already had this issue with symbol.toStringTag and regenerator runtime, and we decided to solve that by making the property writable. The alternative was to make a weird accessor where the setter checks whether the `this` value is the prototype. Anyway, this pull request applies that accessor strategy to both `Symbol.toStringTag` and now the `constructor` property that is affected. So if we are unsuccessful in a reasonable amount of time, or I guess if the company that makes this product is unsuccessful in a reasonable amount of time, we’ll ask for this change to be made to the proposal. But for now, this agenda item serves as a warning to implementers that there is a web incompatibility, so we’ll hold off until the landscape has possibly changed. SYG, do we have specifics on what we think the time frame would be for when we would try to go with the backup approach?

SYG: I think that, one, that depends on transcend, which is the company that does airgap.js. Once they give the thumbs up that they have transitioned their customers, we can try to reship in Chrome if anything new crops up, I think that is probably the limit of our risk appetite to keep trying to work with the upstream properties to fix their things.

MF: How long do we give transcend to

SYG: I don’t have a, so I can only say that as an implementer, even as implementer that is not very well connected to the web dev community, this is one of the proposals that the developers are very excited about being able to use, that’s something I think the committee can try to come up with a soft timeline on. Chrome is willing to be flexible here.

MF: I would recommend not more than two months. Between now and the next meeting.

SYG Okay. Do we have a queue?

CDA: Yes. Nicolo is on the queue.

NRO: Airgap is an example of something doing this, like, freeze that causes problems in this case. We have people on the committee working with collaborating products to freeze, like, the global environment, so I wonder if these delegates have maybe a list of other libraries, other product doing the same things that we could proactively reach out to them, maybe now or in the future to avoid similar cases?

MM: Yes, so I don’t have a precise list. We can certainly pull that together. But at this point, I’m just going to guesstimate, around a dozen. Please make sure that shows up in the notes, that that’s approximate. It might be under or over.

What happens is metamask is using it both in lava mode and in snap. Snaps is their browser framework for an ostensible crypto wallet, and there’s something like a dozen companies that very quickly released snaps that plug into a metamask wall. I was very impressed. So all of them are continuing on the snaps framework, the snaps framework is in hardened JavaScript. It’s not that the dozen companies are themselves directly using SES, but their continuing on SES because snaps uses SES for isolation between the plug-ins, between the snaps. Let me also just respond. The accessor issue, SES has a very well worked out accessor mechanism that we’ve been using now for years. We’ve actually been using it since the first hardened JavaScript -- or the first SES that was shipping from Google back in 2010 or so. And the crucial thing about that accessor that’s different than the accessor that’s in the pull request is that if you do it on the object itself, if the `this` is the prototype, then it throws so that it correctly emulates the behavior of a failed strict assignment. It’s impossible for an accessor to emulate -- to accurately emulate both a sloppy assignment and a strict assignment, so you have to choose one or the other. I think we should only care to preserve the behavior of the strict assignment and in fact, I would object vehemently to anything that fell back to a silent assignment failure in strict code.

CDA: Michael on the queue?

MF: Mark, one of the problems with this library was that, the developers were following along with the standards process and were predicting iterator helper’s proposal, meaning they were looking for an iterator global and conditionally freezing it. Would SES do the same thing or does that?

MM: SES has done the same thing. SES already anticipates iterator helpers, and in fact, we use the code that you wrote inside SES in order to obtain the hidden primordials that come in with iterator helpers. So SES has a list of what we call enablements in a file called enablements.js which is a list of all the properties for which we install this accessor so that assignments that override the property act as if they -- you know, they would act in a JavaScript without the override mistake. I think that, you know, if airgap.js or athletic airgap.js, I’m sorry, if they can just adopt exactly the, you know, the very well road tested access code that SES has been using, as I said, since 2019, and apply it to this case, they would preserve the tamper proofness that they sought originally, there would be no loss of safety, and they would correctly work around this issue in exactly the same way hardened JavaScript anticipates the issue and works around it.

CDA: JHD?

JHD: Yeah, I mean, essentially what this PR that’s up on the screen does is fixes the override mistake for these two specific properties, is that an accurate interpretation?

MM: I would say no, because of what happens if you assign to that property on the prototype itself. This PR, as I understand it, fails silently rather than throwing if you assign to the property on the prototype itself. The prototype.

JHD: Okay, modulo that behavior change.

MM: It emulates the override mistake in precisely the way that accessor code in SES does. But airgap.js could just adapt the accessor code from SES if we can get them to deploy that and upgrade their customers.

JHD: My question is if we decide this is something worth fixing, I know we talked about can we fix the override mistake, is it worth trying to fix it holistically for all future properties, to 34th, this feels like a really, really gross hack to do it in one or two place, whereas if we did it everywhere, then it’s consistency and, you know, JavaScript is full of a lot of these things, but it’s done everywhere. So, like, is it worth trying to just do that instead of, like, if we do this as a plan to move the proposal forward, but I meant should we as a group try to pursue a longer term fix that does this everywhere?

MM: Yes, and what that amounts to is if we can’t simply fix the override mistake, we need a way to freeze objects that freezes them as if you know, freezes them in a way that does not cause an override mistake. And if we had such a freezing primitive, then we certainly hardened JavaScript would then use that freezing primitive rather than what we’re doing now freeze all of the intrinsics and our library routine that does a transit of lock freezing objects to tamperproof them would instead use a primitive to would make them exempt from the override mistake. The reason why that should be strongly preferred rather than just manually installing these accessors everywhere, the reason why we have an enablements list rather than just installing the accessors everywhere, is that the accessors are significantly expensive. And the place where it’s most painful is the accessor, is the accessor that is the one that we, that has the highest priority to turn on, which is object.prototype.toString. The expense is not the setter, obviously, we don’t care, there’s no code we’re aware of that cares how much time it takes to assign to it. The problem is that once you make it into an accessor, then every read from the property becomes a call to the getter.

JHD: I wanted to clarify, Mark, I’m not necessarily suggesting that we put accessors all over the place. I'm suggesting if we perhaps pursue changing it so that when you try to write to a property and it goes up the prototype chain, looking that as soon as it finds one that’s not writable, it just goes back to the previous one in the chain. In other words, I’m saying change the semantics there, because accessors are not required.

MM: That would be the best solution from our perspective. That is exactly what we call fixing the override mistake. Just changing the language so there is no override mistake. And I think it was, I think it’s Daniel Ehrenberg who brought up that, even though there was an instrumented experiment to try to do this in the past that failed. Daniel, please correct me, jump in and correct me if I’m wrong, but I think you were suggesting that it might be the case that if we simply tried the instrumented experiment today that we would find that we actually could just fix the override mistake across the language.

DE: I’m not sure exactly what I said, then, but at this point, I wouldn’t be quite so confident in that, but I mean, it’s I think it’s worth looking into the various possible fixes of the different kinds that we’re discussing. But at the same time, this particular one, I wouldn’t be opposed to doing this one-off change. You know, even short of a more general fix.

MM: Yeah, hopefully we can get airgap.js to just change the code on our side, which gets rid of the single property emergency, and if that can happen, then we’ve got the breathing room to try for some holistic solution.

DE: I like the idea of capping this to two months, given that we already know that there’s very strong developer demand for this, or if we want to delay it further, we could just not ship the iterator global object, just you wouldn’t have iterator.from, that would be quite. In. But that’s another option. I want to not delay due to iterator helper due to an issue we’ve been stalled on for ten years.

MM: There’s one further option I want to raise, which is if the iterator prototype were an exotic object, it is allowed by the object invariants for the property to act like an accessor property, but report itself as a data property. And the reason why I’m bringing this up is that if you do it as an accessor, then it becomes part of the language, and if we do a holistic solution later, then there might be code by then that depends on this one being an accessor.

DE: I suspect that that would risk additional implementation costs and even performance costs to an implementation for the prototype or a proxy instead of a full object.

MM: I wouldn’t make it into a proxy.

DE: Sorry, I was being sloppy with the words, but it would be valid with what you’re saying as a proxy just to valid to implement anything as a proxy and expecting engines to make a specialized code path for that is just a lot of potential implementation burden.

MM: Okay, I understand, and if I implement, I certainly find it plausible for implementers to see this as an undue burden, in which case, I certainly would not push this one. It’s a really very localized wart.

DE: The other thing is we might ship it as accessors and it might be web compatible later to do something else. I wouldn’t really want to plan on that. I don’t understand why you suspect giving a proxy gives you, sorry, not a proxy, but an exotic object gives us more flexibility than this?

MM: Because a plain object has no way to have a property that acts as an accessor but reports itself as a data property.

DE: I understand the fix you’re proposing.

CDA: I think we have next steps for this concrete proposal here, which is to continue trying for maximum of this meeting to the next meeting on this social fix. And then if that doesn’t work, then next meeting, try to hammer out a solid conclusion for what semantic changes we’ll make, whether that will be this patch or something else. Is that an agreeable conclusion?

MM: I’m fine with that. And I also will take away from this discussion to raise the urgency of trying to put a more holistic solution, as Jordan puts it, in front of the committee, whether that’s just fixing the override mistake or whether that’s a different kind of freezing.

CDA: Shu has a reply on the queue.

SYG: The concrete suggestion sounds good to Chrome, but I want to add some more nuance about the timeline here. If between this meeting and the next we get a thumbs up from transcend that they have updated their customers, that is probably not enough time for Chrome to reship to stable to get a new signal, whether it broke other stuff. This is something I’m trying to get a new policy for international internally, but there is currently no policy ship and reship it in the middle of another stable release that’s already happening. What would happen now is that it’s been unshipped and once we get the thumbs up, we can flip the flag again and have it ride the release trains from canary to beta to stable, and it’s likely just like this time that we’re not going to get any representative data until it hits stable again, so once we get the thumbs up, it might still be a few months until we get the true signal whether it’s okay or not.

DE: So to summarize, we might have a negative signal, but we won’t have a definitive positive signal before the next meeting, so, yeah, it’s okay for us to potentially wait longer, that’s the question for the committee, do we want to call it quits now or try again, and we won’t know that for sure it works for a little bit longer.

SYG: To make it clear, to recap, I think the best case scenario is that before the next meeting, airgap.js says we have updated our customers. At some point before or right after the next meeting, Chrome reships and it’s probably not until 2024 some time, the next next meeting or the next next next meeting that we have a true signal that we have fixed the issue or we have not. That is the best case for not doing any redesign on the proposal. The alternative is at any point, we decide to change the proposal, and if we go through the same thing again, we ship or Safari ships or FireFox ships and then we see what happens.

CDA: JHD had a reply.

JHD: I think if by the next meeting we’ve gotten the positive signal from airgap that we’ve found out that it cannot work. This is a weird hacky thing, so I think as much as everybody really wants to see this proposal land, I think the wrong thing lasts forever here, so it’s better to make people wait another couple months than to forever do the wrong thing.

CDA: Okay, we have agreement from Michael Saboff MS, RGN, and there is a reply.

LCA: Is it possible in this case for chrome record, the release, the entire ship train to reship? Is this something you can investigate internally?

SYG: I’m investigating getting a policy in place for such quick reships. This is not something we have a policy for and this is not something that the release people want to do. I think it’s too risky, and I don’t think this one TC39 proposal, they’re going to approve it as an exception.

CDA: We have a minute and a half left. Nicolo is on the queue.

NRO: If you don’t want to wait too long to ship this, could we ship it without the constructor property until when we know it’s safe to do so? Because, like, I know that that’s burden of polyfill containers and people that care about compat matters, but, like, in practice, would this be an okay way to, like, avoid this hack, if we cannot solve the problem quick enough?

JWK: I think it’s not possible because the iterator prototype is already reachable via Array#values. The iterator prototype is already existed and this proposal just exposes it on the global. You cannot really move a thing from it.

CDA: Okay, last on the queue is Jordan. Plus one to drop constructor and toStringTag temporarily in the meantime. End of message.

JHD: I did just want to add to Jack’s comment, the hidden iterator intrinsic does not have a iterator property. It tries to add it. It will fall back to object.prototype.

JWK: Oh, I don’t know that, if that’s the case, maybe we can do it.

CDA: Okay, we are at time. So I’m going to ask to move on, Shu. Or, Shu, you’re up next again with resizable buffers.

SYG: I guess conclusion for this one, I think, but I just want to double-check, I want to ask consensus for waiting on transcend until the next meeting and be ready with your opinions on how we should fix this if transcend does come back with a negative answer next meeting. Do we have consensus on that? I’ll take that as a yes.

MM: I agree with that.

CDA: We have Mark with one. Do we have any other explicit consensus?

MLS: That sounds reasonable.

CDA: Hearing no objections, okay.

### Summary of Key Points

### Conclusion

We'll wait until the next meeting to see if Transcend can upgrade their customers. If so, Chrome will attempt to re-ship the proposal as-is. If not, we'll discuss options at that meeting.

## Resizable buffers for Stage 4

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-resizablearraybuffer)

SYG: I see. Okay. Good news is, the bad news is it’s not updating even though I moved the slides. You know, no, there it is. So the PR has been, the PR against spec of, to add resizable buffers has been up and undergone many, many rounds of review and there have been no normative changes since the last time this was presented in committee, last meeting. It’s shipping in Chrome and Safari. The test 262 PR is up there. That converts, that moves the, that migrates the test262 tests, which are currently in staging. That migrate them to the main trunks of the test suite, organizes them according to how 262 organizes them, addings some front matter, that kind of thing, so that PR, that adds a lot of tests. It’s very large. There’s been some review delay from the maintainers, but it’s there. And then the PR below is the spec draft PR that adds it to 262. The other two 262 editors have reviewed it. jmdyck reviewed it pretty thoroughly and Anba reviewed it and it that has quieted it down. There’s some nits that have been fixed in the last round, but nothing substantive anymore. All in all, things look pretty stable to me. And the response I got last time was let’s wait a meeting for things to settle down before asking for stage 4, so here I am again. I would like to ask for Stage 4 for resizable buffers.

CDA: We have Daniel Minor on the queue.

DLM: yeah, we definitely support Stage 4 and I just wanted to note our implementation in SpiderMonkey is in progress.

SYG: Thank you.

CDA: Nothing else on the queue. Do we have any other explicit support for stage 4 for resizable buffers? It’s always nice to have a pool greater than one.

DE: It looks and seems good to me.

CDA: Okay. Thank you, Daniel Ehrenberg.

SYG: This will be good. I think this will unblock the wasm integration side to get it integrated into the JS WASM side because they don’t normally reference non-Stage 4 things. So let’s get it merged into the PR and then, yeah, then WASEM can use it. All right. Thanks.

### Conclusion

Consensus for Stage 4 Once merged into ecma262, Wasm/JS integration will be unblocked

## Stage 3 update of Intl Locale Info API

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-locale-info)
-[slides](https://docs.google.com/presentation/d/1pr3lp_gPcaitmmiQZq2xQGEoG-1cfpOU1agLKAYmPqQ/edit)

FYT: Okay. Hi, everybody. My name is Frank tong. Thank you for giving me a chance to talk about update of the Intl locale info API, which is for ECMA 402 and currently in Stage 3, so I wanted to give you an update. There’s no changes here. So the agenda we will give a very brief introduction and seek for a consensus for specific change, and then I will brief you about some issue that have bring up TG2 and during TG2, thing not worth it to bring to here because I think the issue just, we don’t think we want to change the spec at Stage 3. And there’s another pending issue we wanted to update, which is blocked by CLDR, and then there are a couple issue, we don’t have the chance to talk about it, so just let you know, so in case you’re interested in that, you can come to TG2 for discussion, and after we have some understanding, we’ll bring it up to here.

So first of all, the motivation for the Intl locale API is to expose locale information, such as a week data, like the first day of the week, weekend starting day, and weekend end day, or sometimes which day is that, and the minimum day in the first week, which is dependent on locale. And even our cycle used in the locale. So here are some of the history. And I think I’ll focus on a couple things. First is the advancing Stage 3 in April 2021, but then there are a couple changes. We figured out there’s an issue about the getters. We changed the function. And the last time there was some issue, to address because we realized that the locale may have an FW extension, which have first day of week impact, and I think Andrea from Mozilla raised that issue, so we tried to address that. Unfortunately, there were some issues that we cannot reach consensus, so we went back to discuss with TG2 and have an update proposal today, and this is the first thing we want to talk about.

So I’ll give you some background. The Intl locale itself, that have the return, one of the methods called getWeekInfo, and it has a field called firstDay. And currently it’s a defined to return from 1, 2, 3, 4, 5, 7 to indicate whether that’s Monday to Sunday have the synchronized value with what Temporal defines. One of the issues, so is key issue that raised causing this change is that the locale itself could help this extension SW, which is defined by the UTS35 as the first day identified, which overrides whatever the locale’s default validator. And that location is the clearly defined that the value are three letter code, Sun, Mon, or Sat and this is mandated by UTS35. But in JavaScript when we try to pass anything into option value or return value, we have our own definition, and this is what we proposed last time. These four items, and the first two items are not a problem. I think we reached consensus last time that that’s not an issue. Actually, it’s the first three. The issue is the fourth one, the Firth (Fifth or Forth?) one, which I circled with the red dot. Whether when we read the option, should we read at Monte or reopt the thing. I think people feeling that when we read option, we should also take the value, not just whether the UTF35 defined, but also the 0 and 1, 2, 3, 4, 5, 7 that JavaScript defined. Because zero actually is used by the date object, and to represent Sunday, and 7 is actually by Temporal to represent Sunday. The second issue is that whenever the value return, should that return change to that? And that part is not, we don’t reach a consensus.

So we went back to TG2 and discussed that, so now that two part got replaced with the following concept, and put it into the PR70. And the first one, the get option we decide were code would read these 15 different values. Right? Seven string of three-letter string, and eight single digit string. It’s a string read, but the string read will also, if you send the thing that pass this is a numeric 0 to 7, it will also call toString to convert it to a string 0 to 7. So this 15 different value will be accepted by the read option. And whatever we’re calling the first day of week, the value get in, or the get with info, it will always return either undefined, which mean that if nobody solidified that in the locale itself or by the option, or one to seven, which means they have specified, but either way, and one is defined to be represent Monday and seven will represent Sunday, which is synchronized to the Temporal definition. So this is the, but unfortunately, we kind of discussed this in the offline discussion when we run out of time. So we kind of not in official time there, so we have a lot of online discussion, but whenever TG2 is kind of, okay, five minutes after the time we discussed, so we kind of have a tentative agreement there, but we decide we’re going to bring it up to here and make sure nobody object to that, because TG2 really holding accommodation and here, we’re making the consensus. So it’s still bringing here. So this is coded in PR70, so this is the issue. Any questions about this so far? Because the other thing is easy, just update. But this part needs some discussion.

Okay. If not, then I’ll continue. So there are two other issue, and I will come back after consensus and update the other part. Two other things we have resolved is one of them is that I think Andrea suggest, the get time zone, if there are nothing passing in, if there are no definition of the string regional subtext, then we can just do something similar to get with info and get our cycles to automatically maximize the locale. So let’s say you EN, you maximize the EN US, and then to get the info based on the US and get our cycle, but in TG2, I think we have discussed that part. People feel uncomfortable with that. So currently, the specs just return undefined, you know, if we don’t have region, we just say, well, we don’t know. We cannot tell what the time zone is for English, right? If you say time zone for US English, we know what kind of time zone could be using, US, but we don’t want to guess what would be the time zone for English, which is too much a guess.

So the TG2 recommendation is that we don't change it. The other thing, the issue about the forward compatibility issue with the get time zone, because in the locale, there are another shorthand name, five character name for time zone, and TG2 discuss it and spent a lot of time and we decided if that thing comes out, we may use a different name to represent that. Right now there are no use cases to strongly suggest that we should support same thing, and we do not believe that will cause forward compatibility issues if we somehow keep a name space for that. So we’re not going to reuse the name for get time zone. We’re using something else. So then because somewhere else we also have calendar, so we believe we shouldn’t need to change the, whatever currently we already have, the function called get time zones to get time zone ID. So we just keep it in, get time zones. So those two things got resolved without any change or spec. The other thing is we currently still have the issue that if somehow the locale have a "ca", which mean calendar information, then what is their interaction between that to decide to first day of week. For example, you may have those, the calendar to be iso 8601 and also have the FW to define FW as Wednesday, right? Then whether you should listen to the iso 8601 to use Monday or listen to the FW. And that part is actually, we believe it shouldn’t be defined inside the spec first. We should delegate to CLDR. And we filed a ticket for CLDR and they agreed to take action on that. So currently they are scheduled to put that into CLDR44 specification. The specification change is on progress and once it gets released of that, so we will defer our reason to that, or we’ll have some odd reason defined synchronized to whatever date defined. So we don’t need to discuss here, but I will bring that back later on whenever they make that change. Because that won’t be a normative change. We need consensus. So far it’s too early.

Then there’s another suggestion, and they say, whether locale info should return me what incurs to be used in this locale. As a champion, I think it’s a good idea, but since it’s already way past Stage 3 time, this kind of scope change, we’re going to defer that for a later version once this version, we’ll do Stage 4 and then maybe add a second version adding a PR for that. But so far we are not planning to do that here. So now is what I ask, the big question, can we get consensus for PR70, which I talked about earlier? Any questions or any support?

CDA: Daniel Minor is in the queue.

DLM: Yeah. That looks good to us.

CDA: Thank you. Any other words of support? Shane?

SFC: Just noting that this new proposal or how to solve this is a direct response to feedback from delegates in July, so if those delegates who encouraged us to go this direction could also fully support, that would be great. If not, I assume we’re okay with that.

DE: I think I was one of those delegates. I think this looks good, but I want to spend a little more time looking at this. Apologies for not doing that before the meeting.

CDA: Nicolo.

NRO: We talk about this internally, this approach feels weird. Like, we don’t come up with any better solution, so it’s supported by us.

FYT: Could you clarify when you say not particularly happy, what kind of thing bothers you?

NRO: Like, solving the problem first time is just adding more, like, values that have the same meaning.

FYT: I see. Yeah, that’s a lot of historical background, so I think as mentioned last time, there are really three different ways. One comes from date object, the another comes from Temporal and the other comes from UTC 35. I mean, the fact that Temporal and the date have a different value is whatever, within our control, but that’s not what I can handle this time. Because everything changed when Temporal goes Stage 3.

DE: When you say get option would return these things, when you look into resolved options, will you see the output matches the form of the input?

FYT: No, it will not. So first of all, actually, I take it back. There are no resolver options for this particular object. So your question is asking non-existence. There are no such thing called, get result option. Intl locale have no such option. Intl locale do have the get or of the first day of week, and we’re just showing this slide.

DE: So what did you mean by numbers 0-7 whether turn into quotes, 0 to 7? Will it turn into the number 1 to 7?

FYT: So let’s say you pass it in object, right? And the object you may have a, will have the first day of week, and the value is number 0 to 7, but because in our get option, we are specifying the type, see the third parameter here? We’re trying to get option the type to solidify the string, so internally inside the get option abstraction, abstract operation, it will call the two strings. So 0 to 7 will be called to two string, and that two string will turn that thing into 0 to 7 as a string form to be read.

DE: Yeah, that seems fine. This is a good response to my feedback, which was fundamentally about making sure that the first day of the week equals Temporal’s understanding of days of the week, and I think this does a good job of that.

FYT: Right, so both 0 as a string and number as a string will be, eventually be handled internally. The option is calling the, asking for a type of string.

DE: That’s fine. We have all sorts of artifacts due to casting. This is just another.

FYT: And the return value would be either undefined or numeric 1 to 7.

DE: Wait, when is it undefined?

FYT: Undefined means that no one specifies that. Let’s say you have a locale called EN. You have no value for the first day of week.

DE: It won’t look it up like locale info the first day of the week for EN.

FYT: No, it won’t. Because the locale is what you specify, it is whatever you specify. So if you don’t define it, you have to tell it you we don’t define it. This is a different -- this is not a formatting object. This is a representing the locale.

DE: Wait, does locale info have a way of getting the first day of the week? What does it return it as?

SFC: There is a function which will get the computed result from CLDR. This is intl. locale.prototype. This is info in addition to adding the locale info is also adding this new locale keyword, which wasn’t there before. So we’re adding support for the new locale key, which is sort of a separate piece that the locale info is now requiring that we support. This day of week directly returns the value of the subtag and the locale without computing anything.

EAO: this approach of being effectively [...], is right choice. It kind of being strict on the output, it is only offering the output in the same shape as Temporal is the right way. I like this.

DLM [on queue]: Is implementation blocked on the upstream CLDR issue being resolved?

FYT: So the CLDR issue has nothing to do, was not dealing with this particular PR. There is a CLDC [blk]ing the implementation to be fully Stage 4. That will interact with that, but that is actually a separate, a kind of different issue than this. So this will take the FW in, whatever the CLDR issue, the implementation has to handle how to deal with the order between this value and the calendar.

DLM: Okay. Thank you. That’s why I removed myself from the queue because I realized you were talking about this at this moment. I was wondering because you had been asking in the past about SpiderMonkey’s progress on implementing this particular proposal, and my understanding is that we had been blocked on that issue which is now blocked on a CLDR issue, which was why I was asking the question

FYT: Yes. That is tracking, let me see. There’s a tracking on this particular one. Issue number 30. It is related, but it’s a separate one.

DLM: Okay. Thank you.

FYT: And that brings up next time, before we move to Stage 4. It both needs to be there. Yeah.

DLM: Okay. Thank you. That clarifies things for me.

CDA: Daniel?

DE: The intl locale thing I was trying to remember was the prototype get week info and that uses numbers days of the week. I am not sure that was a change you made recently or part of this

FYT: This is the part. You see this part? Number 3. That will not be changed. So you’re right. There’s still there. They are two different things. One is when we have the locale, what the locale itself is. Okay? And the other is, with using this locale, what is the information about the week? Because you may have, let’s say you may have US. Right? And the US in the localee, firstDayOfWeek, is undefined because you only define US. But if you ask the US what is the first day in the get week info, it will say Sunday.

DE: Sorry. I was talking about locale info. Is this locale info or locale

FYT: because locale info has to depend on FW, we are adding the first day of the week into locale. In the same proposal.

SFC: I think – I am next in the queue. I think Dan was asking about the locale info global, but I don’t think that’s a thing. Like, the getWeekInfo is on Intl.Locale.prototype

DE: Right. Okay. Have you updated the README. Intl.Locale week info?

SFC: it’s called locale info, that’s the name of the proposal.

DE: Sorry. The Intl.Locale prototype get week info method in the, uses numbers in the README or the incident’ll locale info. And are you saying it uses numbers or strings?

FYT: Thes README part? I am not 100%. I am not sure I changed the README part. I may have some. I don’t think we added that information to the README yet actually.

SFC: I think it’s the old `getWeekInfo().firstDay` is not changed by this.

FYT: Yeah.

SFC: That’s used Temporal style numbers since this proposal reached stage 3. The only thing new is respecting the unicode extension called FW. So we are adding these two new things, the first is read for day of week option and the other is return firstDayOfWeek getter. Which are different than the rest of Intl locale info which is completely unchanged. It’s changed only in the sense it will reflect the firstDayOfWeek, if it was given as an option in the locale constructor.

FYT: Right. The interface didn’t change for that part. It preexists.

DE: Sorry. What is the motivation for this part of the design, it does not use numbers? In the firstDayOfWeek getter?

SFC: BPC47 defines these strings.

DE: Hmm.

FYT: The wrap, this is something we did last time, so this is a real one.

DE: Okay. I am happy with that. With that part. The API that you had circled in the red outlined is now part of the proposal?

FYT: This is the last time I bring it here. I wanted to make sure people understand what the wrap part is, we cannot reach consensus last time. So we come back to change and change to this one. The wrap part got replace with this one

DE: Great. I am happy with this proposal.

FYT: Okay? Can I get a consensus or support for this change? Anyone support?

CDA: A couple messages of support. Nicolo. Eemeli. Also Dan Ehernberg.

FYT: Anyone object?

FYT: Okay. Can I assume we got consensus, since we have one support and one object? Thank you. And so my request for the committee is to help us to have Firefox commitment. This is blocked by CLDR and improve text 262 coverage and polyfill. Thank you.

### Conclusion

- Consensus reach for merging PR 70

## AsyncIterator helper status update (Stage 2)

Presenter: Kevin Gibbons

- [proposal](https://github.com/tc39/proposal-async-iterator-helpers)
- [slides](https://docs.google.com/presentation/d/1nQvAwvOQ0gDJ-eLIVIy3rYrlZj3qGvPHCeH_Veba2cc/edit)

KG: This is going to be a brief update on the AsyncIterator helpers proposal, which, a reminder, briefly, was at Stage 3 and withdrawn back to Stage 2 when we realized we could use this as a sort of concurrency primitive. The proposal repo hasn’t been updated heavily because the design is in flux, but please visit the Github and contribute thoughts.

KG: I will start with reminding you of the key points. If you have code like this, you might expect to be able to do two fetches concurrently. And indeed you can if we spec this correctly. So you get concurrency between things within a mapping function or a filter, and it gives you concurrency between a mapping function and the underlying producer of values, the underlying AsyncIterator. And crucially, as with all iterators, the operation is driven by the consumer pulling from the producer, so there’s no new issues with backpressure. You just don’t consume values until you’re ready to consume them.

KG: There’s a new helper. I previously referred to this as `bufferAhead`. I have renamed it to `buffered` for reasons we'll get to. It pulls a few values at once which starts off the process of concurrency. Okay. So that’s the basic shape of the proposal.

KG: There are a bunch of questions. I am going to run through these quickly. This is more an update on the sort of things that I am thinking about than an opportunity for everyone to fight about all of this stuff. I would love to hear all of your thoughts, but there’s too much to talk about for us to get into the weeds on all of this stuff. So this is mostly serving as an overview of what I am thinking about, what we are thinking about with the hopes of encouraging people to participate in GitHub.

KG: That said, if you have anything you want to bring up or questions or whatever, please get on the queue.

KG: So I am going to run through a few things briefly.

KG: The first thing that is potentially concerning is that with this design, it is possible to lose values and to lose errors. For example, if you have the `some` helper, and you are looking for a particular value, it might or you might have pulled past the place where that value is because again you’re pulling multiple times concurrently and find the value looking for and then like you stop consuming the promises for value 3 and the promise for the error, those get lost. They go into the void. It doesn’t seem like a huge deal. There are ways to work around it, if you care about that. But that is a down side of this design.

KG: Another thing is, flatMap is incredibly tricky. Especially when there are errors involved or poorly behaved iterators involved. In fact the difficulty of flatMap is the only reason I don’t have a polyfill, because flatMap has as much complexity as the rest of the proposal put together. We could simplify it, if we are okay with having racy behaviour for poorly behaved iterators. I am trying to maintain the property that you get consistency, as long as the underlying iterators are not racy themselves, but if we drop that property for badly behaved iterators, things get simpler. I would love to hear thoughts on how people think about that tradeoff.

KG: Also, an interesting observation about flatMap, it’s helpful to know the lengths of AsyncIterators as early as possible so you can start getting the next thing from the underlying producer. And I have a way of doing this, which is to allow promises to settle out of order specifically for the done:true promises. So once you see `done: true`, you know you will get `done: true` thereafter. So it doesn’t matter if there was previously an error or anything, it doesn’t affect the done:true. You might get an earlier done:true, but nothing after it. So this is going to involve a tweak to the existing async from sync helper. That tweak is not observable because that helper is only used in for await loops, which don't pull concurrently. This does have the property that things might settle out of order. But it’s helpful and I don’t see a particular downside.

KG: Also, I learned recently that Rust has almost exactly this helper as a way to get concurrency. It’s not literally exactly the same. Rust is more like a sync iterator of promises, but the promises are futures, where they don’t do work until you pull them.

KG: That’s not quite the same as AsyncIterator, but it's close. It gives you concurrency the same way. I was excited to learn that. That’s also why I have renamed the bufferAhead helper to be buffered because that’s what Rust calls it. It gives me more confidence in the design, because I hadn’t found anyone doing this. Finding that at least one other person thought this was a good idea makes me feel better about it.

KG: Next thing is that, a lot of times you don’t care about the order. You just want to do things concurrently and deal with them as fast as possible. And there are a few different ways to support that. For example, you might have unordered variants of the relevant functions. Or you might have a method that switches to an unordered helpers prototype and have all of the helpers unordered thereafter. Or you might have a buffer_unordered helper. That’s what Rust does. I cannot figure out if or how that would work with filter. It makes sense how you can do an ordered buffer for map. Filter, the order of the promises depends on previous promises. I don’t know how to make that work. I haven’t had time to experiment. If you have experience with this, I would love to hear from you.

KG: My current plan is not to do any of these for the V1. The proposal is complicated enough. If you feel strongly, like Michael, that these need to be included, help me work on the design. Especially if you can help me figure out if you can get filter to work with the unordered thing. That is my preferred solution, if it works.

KG: I mentioned this last time, but I don’t have a solution for it, it’s still a problem. Consuming helpers, like `some` and `forEach`, don’t have a way to specify concurrency because the whole point of this design is that it’s consumer-driven concurrency and these helpers are the consumer. So how do you get concurrency if you are calling one of these consuming helpers? I genuinely don’t know. You can work around it by doing a map of the function and then buffering and then doing the identity function at the end. That doesn’t work for find, it’s even more complicated for find. But it's doable.

So we could have a separate concurrency parameter. That’s another way. It's convenient. It would mean that the signature would get more complicated for these consuming helpers. But maybe it’s worth it. I don’t know.

Again, I am basically just not planning to solve this problem in V1. It’s useful without it. The fact that you can’t get concurrency when using `some` is unfortunate, but it’s not a fundamental problem with the proposal. It’s still useful for the nonconcurrent versions.

Maybe we want to reserve the second argument to throw if you pass something in the second argument. It would allow us space to add a concurrency parameter later. I want to do that so we have the option available to us, but it would be a thing we don’t usually do. We don’t normally reserve additional parameters.

KG: The last one, the plan is for the buffered helper to not start doing work right away. It only starts doing work once you pull from it. I do think that’s the right default. But it’s actually nice to be able to start work early. And it’s impractical to do that yourself, you need the helper to help you out with that. Maybe we should have an option to opt in. I am leaning towards having an option to opt in. But mostly because it seems like it’s hard to do, and it might occasionally be useful and not something all the time. If you feel strongly we should stick to the simpler design, I am okay with that as well.

KG: Yeah. The call to action here is, please come help think about these problems. There’s a decent bit of design space. I think that this will be one of the first concurrency primitives in the language. I am trying to do it right, and review what other people are doing and thinking about RX and other languages and - like I found a library in Java that does things this way as well. I would just love more participation for thinking through all of these problems I have raised and others that I haven’t talked about. Yeah. That’s the update. I am working on all this stuff. Hopefully I will have these settled and bring a pollyfill at the next meeting. It remains to be seen if I have time to finish that. Do we have anything in the queue?

CDA: Yes. RGN is first. Just be mindful we have less than 5 minutes.

RGN: Okay. So first off, I wanted to thank the deep analysis that you’ve done on this. It’s really inspiring and appreciated. We are in favour of determinism rather than raciness. Unordered ones, I don’t think we have got an opinion just yet. And this call to action is probably something that someone from Agoric will answer. Thank you.

KG: Great to hear.

CDA: Luca?

LCA: (I am very happy with this direction. I have used `futures::stream` in Rust a lot, and it works very well as a concurrency primitive.) Yeah. Someone who used this, future streams in Rust, recently, i’m quite happy with that direction. It’s a great primitive for concurrency. I think personally, I have used buffered unordered more than buffered in Rust. And yeah. There’s use cases for ordered concurrency too, but I think especially, I guess I can combine this with the next appointment. For example, concurrency and some, buffer and ordered, this is a way for some to effectively run things con specify not the predicate in some is async.

KG: There’s no way to get concurrency between calls to the predicate.

LCA: What if you have a buffer unordered after the sum?

KG: It doesn’t, it returns a value. That’s the problem. It consumes the iterator.

LCA: I see. Right. Right. Okay.

KG: If that’s not something that you have run into in Rust, that’s good feedback.

LCA: I will check to see if we have anything like this.

KG: I would also love to hear if you run into the thing where you do a filter and then a buffer unordered. I cannot figure out how that would work.

LCA: I will check.

KG: Great.

CDA: Shu?

SYG: So the topic is more, like the general direction. I want to raise some vague performance concerns that I ran into recent with promises, in current promise combinations where this encouraged you to make promises that get settled when a smaller subset of other promises get settled, with very seen memory issues where because resolution of subclass promises is observable, if you have a bunch of in flight reactions, like the microtask stuff, they have a reference to some global, like a bunch of uncollectible stuff until you return to the event loop to run the reactions to realize they do nothing, because the promise are resolved or already resolved. Does that make sense?

KG: No.

SYG: I will follow up off line. If we encourage the concurrency, a inflight promises that need to, because of like subclass promises, that need to actually return to the event loop to give up holding resource we have seen in the wild where people write, reasonable looking libraries that run out of memory. If it’s not a built in promise, resolving is observable because you might have had an arbitrary function. So keep that in mind in the background if we are trying to spin up stuff to wait for them to finish.

KG: That’s good to know. Yeah.

CDA: There’s nothing else in the queue.

KG: Okay. Well, I didn’t have anything to come to consensus on so I am done. Thanks very much.

### Summary of Key Points

There are a bunch of open questions we're working through. Please come participate on Github.

### Conclusion

Work continues.

## Throw Expressions for Stage 3

Presenter: Ron Buckton (RBN)

CDA: Great. Thank you. Ron, are you ready?

RBN: Yes, I am.

CDA: Expressions for Stage 3.

RBN: All right. So it’s been a while since I talked about this. We talked about it at the last meeting. So I would bring it back. For a brief overview, throw expressions allow the use of the throw key word in an expression context such as in parameter initializers conditions, logical null, colace, and a number of different places and the value here is that it adds some additional convenience. There’s no need to introduce a full statement context to throw, expressions can throw. There aren't complexities in the text related to the runtime semantics since this is baked into the language. One of the other motivations is improved debugging experience. You can pause at the point of throw. You could, for example, have just an assert-fail as an example. An expression that can throw. Except that effects stack traces and pauses when debugging and you end up paused inside the function that throws than the code and you step out, and adds complexity to the process of doing debugging.

So I will give a brief history of where this proposal is. Back in July of 2017, it was first proposed for Stage 1. Adopted. At the time, there was concern expressed about potential overlap with do expressions and the committee requested exploration, what would it mean to have other statements as expressions? That was an ongoing discussion. In 2017, proposed was Stage 2, and was adopted. And in January of 2018, this was proposed for advancement to Stage 3. At the time, it was blocked again by do expressions and a separate syntax issue, and because of the contention with do expressions, it seemed like this proposal was essentially forever blocked until something moved on do expressions. I will also point out that we also presented findings on our position and findings on what we found looking at statements as expressions. We weren’t both myself doing the research and the committee seemed not to motivate to continue down the path of statements as expressions. We looked into potential interest, where debugger as an expression, there hasn’t been a lot of motivation or interest in following up on that just yet. The other was in variables and expressions which is something to come back to later.

But again we are trying to advance to Stage 3, but blocked by do. And a separate syntax issue. And that has been potentially resolved as the last plenary in July. We had a brief review of proposals that hadn’t been discussed in a while. Throw expressions came up and the block related to do expressions was removed. It was considered no longer blocking and also able to potentially resolve the syntax concern which I will go into here. That syntax concern was the difference in precedence between throw statement and expression.

This requires this to be in the, which one is it? I think it’s in LeftHandSideExpresion. Roughly. And this requirement meant it was UnaryExpression. And it had this requirement to be able to put in the places so on the right-hand side of logical operators, on the right-hand of null coalesce. But to have the same type of statements is something closer to yield, which isn’t the right precedence, because yield is still – would not consume this. We looked into just a restriction on what tokens would follow a throw expression. The next token would not be any infixed punctuator. Not comma or the question token at the beginning of a conditional expression to avoid this ambiguity. Some examples where things are legal versus illegal. So the case of question. Question, throw C. This would be legal. This is also the place you most likely want to use this compatibility. Trying to throw a B or C would be considered illegal, you would have to parenthesize the B question question C to make sure you have the exact precedence.

And in the same case with conditional expression, you most lie want to throw in either the true branch or false branch. These are both legal. Trying to throw in the head of a conditional expression would be illegal unless you used parenthesis to disambiguate. The use of comma, however, comma is also used in arrays and in parameters. So an argument lists and you would not want to have ambiguity between a throw and default, which is useful to require that a parameter is passed. But you also want to make sure it’s not ambiguous with the following parameters in the parameter list. In those cases, you have to use parenthesis for any leading parameters, you could not require presence on the last parameter. There’s nothing in the grammar that would restrict that. But the cases you would have parenthesis and I wanted to point that out as well. It will affect initializers. In the first slide is the example. Add parenthesis here, even though it’s not necessary. Mostly to kind of emphasize the fact that this is the comma expression will be a place where comma is a place to make sure we have no ambiguity.

So that was the direction that we were looking at when discussing it at the July plenary. That was put together in PR17. Which was reviewed.

But that leads to another issue. The two reviewers signed on back more than five years ago when this reached Stage 2 are not currently regularly involved with TC39. Keith circle, if I am pronouncing this correctly, is no longer regularly involved. He is still a delegate but doesn’t have the time commitment. Till has stated a no longer delicate and will not continue as reviewer. Nicolo has stepped up and hopefully I can find one more to help take up the review either if this advances or deed additional before Stage 3. And that would essentially get to the end of the slides. Before I can ask for reviewers or talk about potential advancement, I would like to go to the queue.

CDA: RGN.

RGN: All right. So thanks for this slide.

It looks analogous in a lot of ways to exponentiation, potential confusion in human readers when it comes to this, where you define a behaviour, but it would be intuitive to some and counterintuitive to others. And the resolution by requiring parentheses in those cases, where a human could be confused, is a very good fix that we support wholeheartedly.

CDA: Nicolo?

NRO: Yes. So I would prefer we wouldn’t have comma in that list of these allowed. In practice, developers use commas in function parameters and nobody writes comma expressions. And having this restriction to require parentheses in function arguments may be except for the last one, because of people for like used to comma expression as the throw argument, it feels like, every developer for some, very few people do it and if they do, they are knowledgeable about how the language works and how the syntax works.

RBN: I was going to say that while I generally don’t see people write a throw statement that has a comma in it. I have seen more than my fair share of return statements return to something and comma the actual return value. I do see comma quite a bit in those cases. Comma is used in reduce bundle size by inlining various statements of expressions. And people, it’s harder to read the mini filed code, and it white not have course maps and it can be there and debugging and it’s for the most part necessary. It’s a relative care case you will see it, but I think at least for consistency sake, it’s better to ban it.

CDA: I think Kevin has a reply.

KG: I was basically going to say the same thing Ron did. I am not super worried about people who know this rule, because they are in the habit of writing `throw a, b`. It’s mostly you learn that rule when you’re debugging, because it’s the output of minified code. When you debug frequently, you have to know this rule because it comes up all the time. It is those people that I am concerned about, not people who are trying to write it by hand.

RBN: I will say that banning comma is uncomfort in the function parameter case because it requires presence in almost all the cases that would matter. Trailing arguments. The last argument wouldn’t necessarily require it. But I imagine people would put parentheses around them anyways and that is unfortunate from a, just a consistent inconvenient where all the other places you would have it. I wouldn’t want to mandate you would have to do this because it’s mostly unnecessary in the 95% case of the places you would see it. I expect the major cases where you’re going to see throw expressions used, are going to be unconditionals in the true and false branches or nullish coalesce and logical or. They are the right-hand side and not having the parenthesis there and not requiring them is fairly convenient. It’s just the function parameter default initialize case is unfortunate because it would require parenthesis.

LCA: I would like to respond to this and I am sorry I am not on TQQ. It’s not loading. Can you check whether it’s working for you? I have a strong preference, nor for the disallowing this with the trailing comma. Because specifically, the function argument case, but also like you have an ObjectLiteral that you’re building. And you want to use like double question mark. And have a throw expression on the right-hand side of the double question mark and a comma because of the next property. Having to wrap all of that in parenthesis is frustrating. Especially because I think these will be cases where it will be frequently used. I think a lot of the arguments make sense, but the trailing comma, it’s very unfortunate.

CDA: Okay. We, I think TCQ is broken. Waldemar?

NRO: The same topic apply?

CDA: Sure. Go ahead

NRO: With here, it’s possible to have a restriction. But accepting that throw expressions we have differently, when there’s a comma after the first expression of the throw. Just clarifying this because I see people on matrix confused whether it’s possible to remove the restriction.

RBN: Yeah. From

CDA: Eemeli?

RBN: I am not seeing anything from TCQ.

CDA: Reload.

CDA: All right.

EAO: So did the other side of the comma question then is, is there any actual real code that currently uses throw 1, 2? And does anything like this? Do we need to care about this

NRO: Minified code. As Kevin said, if you are use that code, you would expect this thing to throw too

RBN: You would see it in minifiers. It’s rare in handwritten code, but in minifiers. The throw at the end of the a statement list, it will be returned in into comma separated, prefixed with a throw, because that’s the last thing that throws.

NRO: This means minifiers will fill be able to, this doesn’t change anything for me, just for people reading the minifying code.

RBN: To be fair, once this is in the code, minifers could switch to comma separate expressions and the last one is the throw. It’s likely that once this actually has reached option, that case minutefiers is not something you will see, once it supports put throw at the end.

RBN: I am not sure if I have a specific direction on comma. There’s interest in not banning comma specifically. I know that the opinion on banning comma. I don’t know Kevin, if you have preference. Would you be willing to allow comma, continuing to ban all the other, all these other punctuators?

KG: I really think it’s a bad idea to have the same key word have different precedence, depending on what position it’s in. If it is the only way for proposal to advance, I don’t know if I am willing to say I am okay with dropping that restriction. It just makes code completely unreadable to have something mean two different things in two different places. It seems like a bad idea. If I am only person in the room?

GCL: Are you asking for room consensus whether we should do this, Ron?

RBN: I think there are two parts to this. One, I need to make sure we have consensus on the banning of punctuators in general. That was the direction in the last plenary session. I want to make sure that the committee agrees and the individual case of should we ban or allow comma to follow a throw expression.

RBN: I guess it’s a good idea to ask the room, we will start with the comma expression. So the easiest thing to ask.

WH: Point of order: I’ve been at the top of the queue for a while. People keep inserting topics in front of me.

KG: We have been on the same topic the whole time.

DE: We didn’t move to the next topic. Let’s not go to the temperature check until we cover the queue. That would be fine.

DE: So. Waldemar, do you want to talk about what your concern is here?

WH: Yes. My concern is that this proposal makes line breaks significant for arithmetic operators, which will behave differently depending on if they are surrounded by line breaks or not. This is significant violence to do to the core ECMAScript functionality. Consider the example I gave on the TCQ: `if (e) a = throw b/c; a = throw d - f/g;`

WH: If you stick a line break in front of the first division symbol, then the whole thing will parse very differently. The first division will become a regular expression consuming everything until the next division.

RBN: I don’t believe there is a no LineTerminator requirement there. The next symbol cannot follow –

WH: Yes!

RBN: Are you talking about ASI inserting semicolon?

WH: Yes. In `a = throw b - c`, ASI will insert a semicolon in front of the minus sign if there’s a line break there.

RBN: We have other restrictions for ASI.

WH: Not like this.

KG: Ron, this is the issue I raised in the thread. Although the example I noticed was + and - instead of /. There is a solution to this problem. But instead of using look forward for the arithmetic operators, you can have an error early that says, if the throw is the left-hand side of, for example, a X or the division expression that uses the token, then it parse as the same thing either way and then you get an error. They don’t affect ASI in the same way. That solves this particular problem, I think. Maybe I am wrong?

WH: It would need to have a lot of those things. And I would just find all this too confusing. We should pick a consistent precedence for `throw` and not do any kind of look ahead restriction.

RBN: I am not sure we need a lot of them. We do have other cases of early errors based on where a syntax – where a specific production occurs. Where we say, these things can only appear within this certain place and it’s an early error, if it doesn’t appear within a function boundary or we have used that in other places westbound the specifications. If throws on the left-hand side of the binary expression contained, expression using one of the tokens, then it would be an error.

WH: That would throw the baby out with the bath water. Let’s say we restrict throw expressions to not occur inside logical expressions. But then we might as well just set the precedence of throw to be lower, and do it without early error restrictions.

RBN: Yeah. The downside would be pretty much any precedence we choose other than UnaryExpression is going to mandate wrapping it in parenthesis everywhere. And unless it’s also at the same level as comma, we can’t take comma and thus every place you would have to use throw other than a – the head of an if, or an expression statement, it’s a throw statement anyways, it would essentially need to require presence and that’s unfortunate for the 95% case is the positions where it appears will not run into these.

WH: The examples on the slide here don’t require parenthesization if the precedence is that of below a logical operator.

RBN: Yes.

WH: Are saying, you want to use `throw` in arithmetic operations such as `a + throw b` without parenthesizing the throw?

RBN: I want to be able to use them in quite a few places. But even if it, even if we change the precedence such that it was immediately after the logical operators, we still would run into the same issue that Kevin had blocked on before, if the precedence differs between throw expressions and statement, and have throw A or B but it has a different expression or space then he’s not going to pass it.

So the banning of the look ahead restriction here or however to implement it trying to find a happy medium between the precedence that makes them – the most sense from a convenience perspective and resolving the issue that is the blocker that has held this proposal back for five years. I am trying to find a compromise.

WH: We have the same situation with other things in the language which can be either statements or expressions. The two forms have different precedence. For example, `function` behaves this way. I don’t know if Kevin objects to `function` being both a statement and an expression.

RBN: Function statement, you can’t write a comma after it.

WH: Yes. But you can write

```javascript
…function f(…) {…}
(…)
```

and then whether the trailing `(…)` is a set of arguments or another expression statement depends on whether the `function` was a statement or an expression.

?? You run into –

KG: The thing I am concerned about is people being able to skim text and understand what it means.

WH: Yeah.

KG: And like, you don’t see commas after function statements. So it’s not something that you have to care about. But you do see `throw a, b`. It comes up so you have to care about it.

WH: Do people actually write that?

KG: it’s the output of minifiers

WH: I don’t understand. Throw-expressions aren’t in the language yet, so how can they be the output of minifiers?

KG: They output throw statements. The thing I am trying to ensure is that the rules that you currently have to learn in order to read throw statements, which are output by minifiers, do not mislead you when reading throw expressions.

WH: Okay. I think that’s the lesser of the evils here.

KG: I could be convinced for comma potentially. The case on the slide here, the last line where you have `throw b ? c : d` I feel strongly that it should be illegal or should throw `b ? c : d`. It should not throw `b`.

WH: Yeah.

RBN: A lot of the cases that the look ahead restrictions ban, you want that a TypeScript would tell you there’s code not be evaluated. Right-hand side, the second expression with A = B. C you will throw beforehand. TypeScript gives you an error. Saying you can’t do this. I imagine a linter would want to give you an error saying you can’t do this.

With throw as UnaryExpressions. Because it will throw before it evaluates the code. All of these things are, except for the case, of the function parameter ObjectLiteral property lists are going to be cases that it’s going to be an error in your code because we had the restriction or something else was going to tell you it’s an error because what you were expecting to happen wouldn’t. The only case that doesn’t occur is comma.

WH: That is not true.

RBN: I’m sorry.

WH: That is not true. A counterexample is `a = b && throw(c) || d` or similar such expressions. Here you have `throw(c)` followed by `||` which is neither an error nor useless.

RBN: Actually I find that to be – well. Actually, that is still valid because you might expect A to end up false in that case or empty string. I mean, there are potentially reasonable assumptions being made there. For cases throwing in the head of a conditional, I don’t think it does. Yeah that doesn’t resolve unevaluated code. That results in just – you can only have it being false.

RBN: Okay.

WH: Anyway my position is, we need to pick up specific precedence for this, and not make line breaks significant in front of operators such as + - /.

RBN: I would be happy to look at, look to see with early errors in ways that doesn’t affect.

WH: I do not want early errors. This should be purely grammatical. It’s much easier to understand purely grammatical syntax than rules expressed as early errors.

RBN: I don’t see a way forward for this proposal then. Because either we pick a precedence that means it’s always parenthesized, which is terrible unfortunate because it’s as, parenthesis all the time when we use these expressions or continue with unary which will not advance, with concerns to the grammar difference. And the only compromise I could find is banning look ahead. If we won’t ban look ahead and not going to allow those tokens to exist and have different precedence, then the only other option is to make it expression and require parenthesis every time. I don’t see another way.

CDA: Okay. We have less than 2 minutes. Do you want to take a look at the queue? What do you want to do with the remaining time here?

RBN: We can go back to the queue. That’s fine. There’s some other questions about precedence as well.

CDA: 1 minute

DE: I think we were talking about in 2017 about the potential two things, comma precedence tradeoff proposed is the right one, given, yes, there will be cases where people have to understand the grammar. We can’t avoid that people have to throw an expression case. We are choosing between three different kinds of confusion. I want to hear Nick’s comment?

KG: Which one were you in favour of?

DE: The thing that Nick was advocating on the slide that was saying, illegal with all those. All the various cases and people say, this has to be illegal. That was the proposal. That’s the one I am agreeing with. In particular, the parameter case seems pretty likely legitimate.

NRO: I agree with this. I strongly support making sure that like for, for example, the throw? C. It’s illegal or behaves like throw statements which in practice means making it legal. That code is a breakdown. They are throwing the first or second one. For all operators, I strongly agree with this restriction.

CDA: We are at time. And cutting into the 15-minute break. I will capture the queue and this will appear as overflow. It does not seem we have concluded this item. So break begins. Please return at 15 minutes after the hour.

## Intl.MessageFormat: Stage 1 update and discussion

Presenter: Eemeli Aro (EAO)

EAO: So hi. Yeah. This is Stage 1 update for the Intl message for proposal. Mostly on account of the proposals having gone through a bunch of API changes and wanting to present what those are and some of the reasonings behind them.

EAO: So that’s roughly where this is at. I am happy to take questions in the middle, but also happy to leave everything up until the end. I will leave it up the chairs to shout out things. If I pause for a moment, I don’t see the queue myself at the moment.

EAO: But yeah. So first to present what the changes are and go through some of the specifics design questions addressed in those changes that I think are possibly relevant to be highlighted for the greater committee here

EAO: So this is roughly what the Intl.MessageFormat API currently looks like. Which means that it’s very much in line but different from the existing, current Intt format API. It has a constructor and a formatter and result option zeros [?]. The right, specifics and specifically, the functions there, which are typed – have a specific sort of shape down at the bottom there.

EAO: Now, when we compare to how this was originally presented, one of the largest changes is that the message resource, meaning a selection of messages in a single source representation, for example, has been left out into its own proposal. So this proposal is about dealing with a single human localizeible message and having that come in as a source and then being able to handle it. At one of the key parts in which this proposal is currently differing from the other formatters is that it does have this user-required provided data in order to function. It ends up currently, at least, as the first argument of the constructor, where all of the other Intl constructors takes locales as the first option and options as a second option.

EAO: The second big change is the proposal is previously, it had a single method resolve message that provided an output from which you could get either a string output or a formatted parts-like output. That has been replaced now by having these explicit format methods to parts where the types, in particular for the message parts, have developed quite a bit from the result message details. I will go through this in particular, a little bit later in the presentation.

EAO: And then also further, related to the output shape is the input shape of things. Meaning: when you have to format a message and you want to give it some values with which the formatting is being done, or when the values within a message are being resolved and work through, internally, what is their representation? Those shapes have changed quite a bit in the proposal. I will go through this too a little bit later.

EAO: And then there are a couple of changes here that are coming from effectively the changes that have been applied to the underlying unicode of ethics [?} message format to spec proposal. Looking to become public and finalized by spring next year. So one part here is that the MessageData structure does have a representation that is relatively well defined within the message format 2, specification that we refer to and use here. A MessageData is effectively a POJO JSON data structure. And then another part is that the message from 2 spec has specified [uch] more clearly how to handle bidi (bidirectional) parts. In particular, when dealing with left-to-right and right to left in a single message. How is this to be handled?

EAO: And then furthermore, one change is that, the default error handling is currently set to warn rather than throw errors. This is coming effectively also in part the message format 2specification which is requiring implementations to always return a formatted value even if stuff broke in between. In order to make sure that we do have the best possible thing to present to a user. And this specifically is a difference that I wanted to highlight in the current shape of the API proposal. That’s different from most of the things we are doing overall in JavaScript

EAO: This is roughly what a vast majority of usage cases of message format, with the current API woul, look like. You have a source string representation of a message. The curly braces around the hello curly braces there, this is a topic of conversation right now, the message format group to Unicode, the exact details of what the source syntax looks like we have a decent solution, now hoping to make a better one all of the other parts are JavaScript parts. You would construct a MessageFormat instance from this source and locale and any options you give it and then you could call format or format to parts, calls on that and you would get either a string or this type of sequence of parts. Much like currently is done with format to parts, but format to parts in particular later

EAO: Going on to a slightly more complex and more powerful localized message, sort of case, is when we have a message that has variance depending on input characteristics. So in this case, for example, we have a message that we want to format and show to a user, where if we have zero as the count, we show a message count saying, you have no new notifications. But when we have the number 1, as the count value, for example, we would end up selecting, in English, the OME named CLDR [gat] [?] letter like Intl rules riting in functionality and select that. So “you have one new notification” and then for other cases in English, “you have 55 new notifications”. These rules are different in different locales But this is a key part of feature of message format 2 supports

EAO: Now, to go on to the some of the API questions and answers provided by the current shape of the proposal that I figure about is good to present, one is that quite often, when formatting a thing like a number together with a currencyunit or a number together with a measurement unit, or, for example, a date time in a specific TimeZone, the thing we are formatting is effectively a compound unit. Compound value. So like the 42 Euros that are two separate parts. And this is currently handled by our Intl formatters by passing the currency or the unit or the time zone as one of the options values. But we for localize linearization [?} – the options end up being possibly specifiable by translatorrers. We need to find a way of user of message format with specify that the input they are giving is 42 Euros, rather than having a translator presume that, okay. Euros, but we are in Japan. Of course it should be 42 Yen that is printed and that would be obviously wrong.

EAO: So the solution that we currently have is that, the custom formatters in message format 2 allow for input as objects that we look at whether they have a valueOf method that returns something with a specific shape. And if an object does match this pattern, then we also look at whether it has an options property and that is then merged with structured options that we feed to the formatter. And the way this works in actual code is shown on the screen as well

EAO: And the utility here is that of splitting a basket of options like this is, for example, it can be useful to see at that the price is a number the style of currency. Rather than just seeing your total is price. And not knowing that that will get formatted also with a currency indicator that is appropriate for the locale.

EAO: And then because we are using the valueOf, this is oddly enough given a use case for things like new number that can be, therefore, used. And that object that is, therefore, created can be given an options bag which then carries the currency.

EAO: Now, another significant API question; how do we format the parts? There are two parts, these parts question that are somewhat complex. One is that, a formatted message can itself end up including values like numbers, that themselves formats to parts.

EAO: So we have a relatively common case of wanting to formatting to parts, but ending with parts with parts. Separately from this, we want to include values that aren’t strings. For example, if we can use this, we should be able to use the API we end up to have a thing like a DOM element, for instance, or another object where object identity is significant. By giving and passed in as a value or entered by a customer formatter within a message processing and come out of the other side in a way we can use this

EAO: And the solution that we have currently are going with is that each of the formatted parts you get out of the format to parts can either have a value which is a string or actually unknown. But it may also have rather than unitary value. It can have a parts array of themselves parts. So for numbers you can solve it by having a part with parts, or then if we have, such as here, we have a custom formatter image that is being used to generate a DOM element within the resolution of the message for formatting. And then what we can use in the formater parts output is that we can the image function can generate, define its output as having a specific sort of shape. And the value there does not need to be a string; it can be effectively anything.

EAO: We don’t have anything like this in the sort of default set of functions that we expect to include with method format.

EAO: This is something that a user could implement and use and such a case that needs to be handled. And now then having considered the effectively the input stuff and the output stuff then does the somewhat more complex stuff of what happens in the middle, because messageFormat supports custom formatters. It comes with, for example, number that I showed earlier that we can well define include it directly in what we’re doing and that ends up calling the input dot NumberFormater. You can imagine we need to support users defining formatting functions that would call something like image that do whatever they want and need it to do.

EAO: This needs to behave in a predictable way and a user, a developer-friendly way, especially as we have variables that are internal to the message that can get assigned the values of these expressions that these functions.Those are the really the contents that I had for this. I would be looking for the specification text for all of this unless we develop this critically bad for the API than keep on changing it for hopefully sometime soon really soon for Stage 2 advancement for all of this.

EAO: So a value like this can be used in the whole plethora of different ways within a message. And that means it gets a little bit tricky or complicated at least. the way that the options is a function option of mapping of string identifiers to functions and these functions are then called with source locales (this will probably still change a little bit) and need to return a value, object value that has the MessageValue sort of shape.

EAO: And then the presence or absence or whatever the value is undefined or not effectively of the various fields within MessageValue define how they are used within message resolution. If it has select keys method it may be use as a selector as I showed number earlier being used for the notifications example. If it has two parts and toString methods, it may be used to format the parts with toString.

EAO: And this is where it ends up linking up with the input part of the presentation. Because it may also, and the value, the result valueOf A function call may itself be used as another input to another function within messageformat too. So the MessageValue interface shape needs to match what we are expecting to happen with input values as well. The compound values that I mentioned.

EAO: And therefore we have the options property and the valueOf method here. And a valid question here would be, like, how do we make these two ends feel appropriate for developers? Should the options be resolved, should the options value be replaced by a resolved options function call and would it be better to have value property rather than valueOf method here?

USA: Would you like me to start with the queue?

EAO: That would be grand.

JHD: Yeah, I was just curious about the onError. My intuition from that one slide is that that will be called synchronously each time one of the properties in the record has some sort of error. Is that correct? Or like can you help me understand that?

EAO: So the on error would be called when, during the resolution and the formatting of a Message. Possibly multiple times.

JHD: Because it returns void on this slide here, I’m assuming it doesn’t have the ability to alter the result, it’s just a way to notify, to get notified as things are encountered.

EAO: That’s the current shape of the proposal, yes. It is not a route back in.

JHD: Is there a strong reason why that approach was included in this API versus like instead of returning a string, returning like an object containing a string and an array of errors or something like that? Is there a reason you need to have in C 2 notification is my question.

EAO: I would say in most cases, most users will probably not end up handling errors even though they should. So the default case here, it’s optimized so when you’re just using it and you just want it to work, what you end up with is not needing to bother with unpacking a resulting object shape like this, and you do still end up seeing at least in your logging the warnings for the errors that are encountered. What you’re proposing is a possible alternative API, that could be considered yes. But this felt more ergonomic is the short of the answer.

JHD: Thank you.

USA: Next guest, Shane.

SFC: Yeah, I was just going to say there’s a lot of good stuff in here. I think the best place to discuss some of these lower level details would be in an incubator call. And I think it would be great to collect interest from the delegates on who would like to be on the list for that incubator call, so we can put out, so we can create the issue and start scheduling the incubator call to dive into more of the details here.

USA: Next we have Gus.

GCL?: Yeah, just want to say I’m super excited with how this is looking especially since the last time I looked at it, yeah, great work. I think we’ll definitely try to be engaging with this more maybe with the incubator calls, yeah.

USA: Next we have Dan.

DE: I agree with everybody. I’m really happy with the direction. You and I talked a bit about simplifying this proposal. I’m really happy that you’ve incorporated those. I’m still a little bit worried about the overall size of the custom formatter’s API and I think there are good reasons for all of that. But let’s keep talking it over to figure out what a normal way to put things is and for on error, I don’t know, I kind of would have expected it would just throw if there was an error. But maybe there’s a good reason for the errors to be nonfatal by default.

EAO: The good reason for non-fatal errors is that unlike the other Intl formatters, this is depending on user data. It’s depending on user data gone through possibly multiple workflows, through translators and other things and when it comes out of that other end, the likelihood of this calls to Intl messageformat ultimately failing, unfortunately likely to fail than other cases and they may fail partially. You may end up in a situation where you have for example user interface that is built of say 15 different messages that all need to be formatted for the whole thing to work.

And then a developer adds a 16th new message and this ultimately in a different locale for a different locale has not gone through translation and what you end up during run time is that the use inner the different locale than what the developer themselves are using ends up with 15 rather than 16 of the messages being available and in such a case, a user who doesn’t explicitly handle the fallbacking manually around these calls may end up with a really bad case that they end up showing to a user. And the whole of the UI and the UX failing because of this. Partly this is something we’ve learned the hard way at Mozilla through the experiences with similar API development for Firefox and others.

DE: Okay. I’m interested in following up to dig into more details around air handling that we can understand like whether returning void is best. I’m not sure what string will be returned in that case and understanding the semantics more will help. But also the custom formatters with the API being so detailed and having more case studies kind of written up maybe or at least sketched out at a really high level will help us, will help me understand why we need all these various aspects of it. I think you explained well at a conceptual level, just examples will help.

EAO: Details of this will need more explanation, yes.

USA: Next up we have Daniel Minor.

DLM: I just wanted to say this is looking really good to me as well. I would like to highlight how important having a standard way of doing localization is going to improve the lives of everyone that uses the web and also just recognize the hard work that’s gone into this and on the messageformat 2.0.

USA: Next we have Shane.

SFC: Yeah, my previous comment is I would like to get a list of the delegates we should try to organize with and the people who have commented today, GLC, DE, EDIN, and JHD may want to sign them or ping them to be interested. I see BSH and Luke (code? join the queue and it will be on the reflector that people see it and want to to be clear who wants to be on the loop on the incubator. I see a reply from Bradford.

USA: Bradford has a reply. Do you want to speak that out loud?

BSH: Yeah. Definitely interested in, I think at least one person I know who works with translations at Google who I should make sure is aware of this, so yeah.

USA: Next up we have WMS also interested in the incubator call. That’s that. Before we move on to the new topic, I’m (USA) also interested. But I’ll just sign up on reflector and we have Bradford again.

BSH: I was very interested in seeing that in the examples, it seems to be using a newer form of the ICU messageformat than I have ever seen before. And I’m wondering and I think you mentioned that it’s not fully settled yet. Would this be blocked on that actually being fully settled and decided on, and would you have a backwards combatable way to use the older format with it? I’m sure we have older messages in the format that we might want to use with the API.

EAO: Two thoughts on that. Yes, this is currently at least intended to be blocked on ICU message from the to be released. I’m on the working group as well quite actively and we are currently aiming and intending fully to get this released as part of next spring’s ICU release. So we’re like this close to finalizes the details. We’re mulling over decisions we have made earlier and revisiting them. But I have really high confidence on this landing. This is partly why this proposal is currently at Stage 1. A lot of the work that’s been going on in the committee was actually spun off from work initially started under Ecma402 and then went that way.

EAO: So starting ICU messageFormat, the existing older implementation, that there is no current intent to have that syntax be directly parsable here. It is in the messageformat to work. We made a high priority to make sure it is convertible to Messageformat v1.

BSH: So there would be a specification for a tool or a tool provided that would allow you to do that, to take your old ones and transfer them to, translate them to the new format?

EAO: Yes, I’ve already written that code.

BSH: That’s lovely, I’m done.

EAO: And the source from which you can build a message is intended to also support a data structure that, and therefore you can build a parser for ICU messageformat v1 that outputs the message representation in the data structure that you can then use to go forward.

BSH: Perfect.

USA: Next we have Luca.

LCA: Yeah, this looks very good to me over all. I haven’t been following this closely, but I’m very excited to see this. It’s looking great. I do agree that on the comments on errors, it seems weird to have the arrow call back. I see why, but maybe we can find a better alternative for that that doesn’t involve a call back, synchronous call back.

EAO: Very interested to have you participate in that discussion and for us to iterate on this design.

DE: To Bradford’s comment on is there a messageformat effort and how will it relate to the other one? The effort is actually led by many of your coworkers at Google.

DE: I recommend that you, not just you, but everybody can get in touch with the effort because the UNIcode is another open standards body. This effort is relatively far along. But it’s not completely done in particular, it’s at a stage of concreteness and the working group is really looking for sort of end to end test cases where someone who works in an organization with translators could try integrating the prototypes that exist to applications working with translators and getting feedback on all of that. I’m trying to organize this at Bloomberg like we’re very excited about this proposal and that’s why we’ve been sponsoring Igalia’s work. I encourage you to get involved.

DE: If you’re interested in the format, I don’t think it makes sense to aim to include all the very different formats used for this purpose today. There’s just a lot. They all have big problems that this is solving.

EAO: To expand on that a little bit, messageformat 2, the syntax but the data model are also. as far as we know, capable of representing all currently in use message formats that anyone has that we’re aware of. So one of the side benefits that (maybe not really a side benefit here) is that through the messageformat 2 data model that this API also supports we can build a sort of intermediate representation for messages that the ASTs that have been well defined for JavaScript for a while have enabled a lot of community to grow and abilities to grow around transforming messages, much in the way that JavaScript is very much a transforming language itself.

USA: And that was it for the queue.

DE: Quick comment. I want to suggest that the incubator calls or the development of this proposal be focused on just the JavaScript bindings of this syntax to JavaScript and maybe giving background on what the messageformat working group is doing. And if someone wants to impact what is going on in the core format, then they join the working group. That’s all.

USA: I believe there’s something you would like to say to conclude.

EAO: Getting an incubator call forward is the next step here. And hopefully partly out of getting interest in there, I might get some help in writing the spec text for this that would be really great so we can get this to advance further. This has been at Stage 1 and at level comparable to Stage 1 for a number of years now. And we’ve been working quite a bit.

Particularly on the Unicode so far that I’m hoping to get advanced and in parallel with the work here, I’m also starting to talk what we in W3C about DOM localization and another layer of localization on top of messageFormat 2 but in a browser context where hopefully eventually we’re able to have localization happening in browsers without needing to have JavaScript running anywhere in the middle of it but still providing JavaScript APIs in the shape of this API, but thank you for listening. That’s it for me, I think.

USA: Perfect. So that was all for this topic.

### Conclusion

- General approval for the proposal’s progress.
- Some of the API details will need further discussion in an incubator call.

## RegExp.escape for stage 2

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-regex-escaping)

JHD: So this is for `RegExp.escape` and I’ll try to summarize. The ecosystem prefers a static function that takes a string and spits something out that you can put into new regex and implementations and dangers of doing that because user land implementations do not thoroughly escape sufficient characters so that you could safely insert the escaped output in any position in a composed regular expression.

JHD: As a result, there were objections or concerns expressed that it might be better to have a template tag function that creates an entire regular expression in one go, doing the needed escaping and in fact an implementation was built and published on npm from that but seems like it has not gotten a lot of adoption and people just aren’t asking for it. And in a previous meeting, it was discussed that if we could come up with a way for `Regexp.escape` to be safe such that the output can be safely used in regular expression position that it would be viable for us to advance that and in particular then node and/or the web I guess node is the one that I know for sure wouldn’t try to implement the static version themselves any way which is. There’s a node TSC member who has basically said as soon as progress stops on this proposal, that node will just ship it anyway.

JHD: So KG graciously offered to do the research to figure out what would be required to make it safe and I have this gist here which basically lists that if we escape every ASCII function way Tory except underscore and here is explicit list whitespace and any digit zero to nine at the start of the string and additionally we make any of these escape functions that are currently illegal in U and V node be legal and no ops meaning backslash whatever would just be whatever. That’s what I mean by no-op and then here is the additional caveat if you don’t put the output immediately after the beginning of an escape or after a backslash or, you know, in the beginning of a regexp would be safe and cannot lead to complex escapes. Here is more detail that Kevin included. I will add this. I have not yet added this into the readme of the proposal. I will do it if it’s the approach that we go forward with.

JHD: And so the output ends up being gross. It has backslashes all over the place. But who cares? No one is reading this output. The intention is to make a regular expression that can be used, not to read the pattern. That’s my personal opinion anyway. So even though it sucks that we have to escape this many things, I don’t really care because it achieves the same semantic goal that the ecosystem already achieves with a number of NPM packages and wants to achieve. The spec text for this is here merged into the proposal which does all of the escapings that KG has described there. And, you know, modulo editorial feedback from the editors and I’m sure cleaner ways to do this and modulo updating the README of the proposal, this seems complete to me.

JHD: So my hope is that we can go forward ideally to Stage 2 with this spec text and the intention to escape all the things so if something comes up that we missed the spec text will adapt to include that thing because the goal is make it safe and move forward with the proposal. And if the temporal tag is desired this does not obstruct it and perfectly fine to move forward with that.

JHD: That can be independently motivated and I invite anyone interested to pursue a proposal for That. I don’t know if there are thoughts, or if we should go to the queue.

DLM: We discussed this internally. SpiderMonkey team is quite favorable about this proposal and seems like a good idea and I think having it in language will prevent people from using library functions that are out of date. We really support this, thank you.

MF: I don’t oppose this proposal. But I just wanted to make clear the trade off we’re making when we accept this proposal. The current set of escaped things will be defining our room for future additions or modifications to RegExp grammar, and it might be okay that this identified set is all we will need.I just wanted to make sure we were aware that we are kind of painting ourselves into a corner that way and maybe this corner is nice and big and we’re happy to be in it.

JHD: That’s a good call out, thank you MF. This sentence at the end of Kevin’s just here notes this. So I failed to mention it before you called it out, this would indeed to be a commitment only entering or exiting new contexts using whitespace or ASCII punctuators. They’re up here. There’s a lot of options available to us to do that and narrows the scope by which we can do that.

JHD: You know, this may be a stretch. But to me, that means there will be more options to future readers of new regular expression features we can’t imagine yet. To me I think it’s actually nicer to have a smaller set of syntactic markers for what enters a new context. That may not be universally agreed upon. You’re right that is indeed a consequence of moving forward with this proposal.

MF: And the term new context that we’re using here is quite broad. We’re not just talking about entering a character class as like a new context. Also just like multi-character tokens are a new context. And, you know, you might not realize that on the surface.

KG: I’m only concerned about multi-character tokens of variable length. `\x00` is always exactly the same length. It’s never ambiguous whether an interpolation is part of that or not. The concern is multi-character tokens where the length of the token is determined by the characters which follow it, like \1 and so forth. I think we should avoid new ones for those.

MM: First up, I want to say bravo. You took all of the concerns, the safety concerns very seriously and solved them very elegantly with a nice small explicit list of the unsafe context. I also want to say that the template tag that Mike Samuel did that I pointed to as the example of something that does it safely that doesn’t have to – you don’t have to remember these special contexts, it also had a tremendous case analysis because it wasn’t doing all of the escaping independent of context with this in hand, if somebody sets out to write a safe template tag that just checks for these contexts and just uses this full escaper once it’s determined to be safe. I think that template literal type becomes tremendously easier to write. Just in all ways I just want to say I am very impressed. I really am grateful for KG for doing that analysis and I support this.

KG: Thank you MM.

JHD: I’d like to ask for consensus for Stage 2 for `RegExp.escape`

+1 on the queue from DE, NRO, LCA, JWK, DLM

USA: Nobody opposes. You have consensus. Congratulations.

### Summary

- Based on KG’s analysis of what escapes are necessary for RegExps, in the most conservative, context-insensitive way, JHD proposes adding a simple `RegExp.escape` function.
- A key concern is whether it is sufficiently future-proof to do only this fixed kind of escaping. KG and JHD argued that it was sufficient, as we should avoid adding new tokens that would not fit within this scheme anyway.

### Conclusion

- `RegExp.escape` reaches Stage 2

## Reviving export default from; for stage 2? (JHD)

Presenter: Jordan Harband (JHD)

JHD: There’s this old proposal here called “export default from” back from, looks like, seven years ago. So it’s 2016 or so. At the time, there were two proposals, one of which ended up becoming a needs consensus PR that landed in 2018, maybe, 2019, a while ago. Essentially, you know, this is another one of these proposals that has a table of things with a suspicious gap. And the specific gap is currently if you want to re-export a default, you have to pretend it’s a named export and use as to rename it or you have to do it in two lines, import and then re-export it.

JHD: This is if you want to re-export the default as a default. So essentially this is right here.

JHD: This is in the README of the proposal for many years now. Just export whatever from the module. And because there’s no curly braces means default on both ends.

JHD: That’s it. And I’d like to, I’ve not been involved in the proposal previously, but I would like to revive this and, I haven’t, so I would like to become a champion of it and potentially, I don’t know if I’m sure the spec text is out of date and not based on the specification and my hope is, I haven’t looked into it, but my hope it will be a pretty straight forward rebase.

JHD: I put Stage 2 with a question mark because I haven’t done the work yet to be able to confidently say it’s ready. But it feels like it’s probably ready and I would like to ideally, if I don’t have Stage 2 for this today, I would like to get clearer feedback for whatever it would take to get Stage 2 at a future meeting so I can take this over and get it to that point. That’s it.

USA: I see a clarifying question from Luca.

LCA: I think I know the answer already, but I didn’t quite understand when you said it. This is importing default, exporting name. Not importing default, exporting default. Correct? Or is this importing default, exporting default?

JHD: This is the latter. Importing default, exporting default. If you want to import default and export as named, you export curly default as whatever. And if you want to import named and export as default, you export curly whatever as default but if you want to import as default and re-export as default, it would be really nice to have symmetry between the typical import default and export default forms where no curly braces are used. And that’s what this provides.

JHD: It’s not adding a new capability to the language. It’s just filling in a syntactic, like a surface syntax gap that currently exists.

LCA: In that case, I think if that is the case, then if it is import default, export default, then I don’t think the example that you showed was correct.

JHD: No?

LCA: Because the – let’s see here. Scroll further down to the proposed edition. Import v and the identifier v has no meaning. I would expect export default from mod than export v from mod. Looking at the desugar that I assume second code is import default export named. Maybe I’m confused?

JHD: As I said, this was seven years old, I have not touched this repo. So the specific thing is this is what you currently can do if you’re importing the default. We’re all familiar with the form (let me increase the text size a little bit). This is if you want to import and reexport. If you do this, this is importing as default and exporting as named. Let me find it.

Support for here is a better example to keep some of the named ones and reexport the default. This is part of the proposal. This is exporting as default or V? Default. Why does it say V? Identifier that you can use on the next line in the module. That's both.

NRO: There is expert identified from. That's export default as named and export default from. That example right there. That's export default as default.

JHD: Thank you for clarifying. That makes sense to me. Thank you.

USA: Next we have Jack Works.

JWK: Support for

MLS: Any kind, you know, and prove the point by going through this and not understanding what the proposal was trying to explain or features it was trying to move forward in the reviving of the proposal, what is the use case trying to solve and be able to have examples to, how the exporting would work?

I don’t think there’s any rush here. I agree with some of the other comments. Specifically I would like to have a well thought out presentation to explain what we’re adding and why we’re adding it, and what’s the use case.

JHD: That’s totally fair. I’m very content if the answer is like that’s what I need to do to come back to Stage 2. The reason it sat here is because nobody picked it up. I don’t recall there ever being any real push back against it, just like maybe it’s not that important is what I recall. But I didn’t recall anything that was like this can’t happen for these reasons. So certainly this is not a well-crafted presentation I have right now. This is jetlag and winging it. It’s completely reasonable to ask me to come back with that. Before I did any work on the proposal, I wanted to get a clear signal from the committee, and never go anywhere. I have lots of other things on my plate.

USA: There’s a reply by Luca.

LCA: Yeah, I agree with this. I think we should be able to have actual motivation for this. That’s it. I do actually have motivation for this in code and Deno and elsewhere that I’m willing to contribute. But I don’t think we should rush this to Stage 2 right now. We should actually have this motivation written down somewhere.

JHD: Thank you.

USA: Next we have Shu.

SYG: Yeah, I think I agree with what Michael said about not rushing it. I’m a little more skeptical of the use cases here. I would like to hear it in the future to be remotivated. I’ve independently seen things go by about re-exports being in general unfriendly to beginners and understanding things and re-exporting like not being a great style to encourage and like to better understand why we like to make especially re-exporting defaults here. I don’t understand what that helps.

USA: Next is EAO.

EAO: I have two things. I don’t understand why this is proposing something like export V from mod where V is the default export of mod and it ends up as the default export of the current one and it is not actually made locally available anywhere. I don’t understand why it doesn’t require export default from mod only.

LCA: Yeah, I’m happy to clarify that real quick. Turns out this proposal is actually two separate things. One is export default or sorry import the default from the module you’re importing and export as default and the syntax for this is export default for mod. And the other one is you import the default but you export it as a name and that syntax is `export v from mod`. So this solves both the import default export default and import default export named case. These are two separate things. The export v mod the module written in is default export of mod.

EAO: What you’re saying is that the export V from mod would import V?

LCA: No. It imports default. But it exports V.

EAO: No. But it imports the default and makes that locally available as V.

LCA: No.

EAO: Where can I use the V.

LCA: The export module that you have the V written in.

EAO: That import makes V locally available.

LCA: Yeah, exactly. It’s the desugaring minus having it locally available just like other exports export curly brace default as V end curly brace.

EAO: I don’t think I still understand with the symmetric export from on the screen export V from mod, what does it matter what’s in that string that’s currently V?.

LCA: On the consumer of this program, of this module will be a named import called V.

JHD: Maybe right that on a JIS real quick.

EAO: That’s basically export default as V from mod?

LCA: Correct, yes. That is the better syntactic desugaring.

EAO: That’s weird.

JHD: Good feedback.

USA: Then you have another item.

EAO: Just noting that the one liner of export curly brace default closed curly brace from mod already works right now. So everything this is proposing you can do on one line, you can already do on one line with syntax that I would at least understand way more. I don’t really feel this is ready for Stage 2.

USA: Next we have a comment from Hax (CODE?) that says, yeah, it’s a little bit confusing when you first read it. That’s all.

USA: And that’s the queue.

JHD: So it sounds clear that this is not ready for Stage 2 from multiple fronts. So I want to paraphrase what I’m hearing as the signal for what it needs when I come back in order to be ready for Stage 2. It needs to be very clear what the use cases are in 2023, what the motivation is for it, the perhaps the prose here might be reworded to be clearer about the two different pieces of functionality that this proposal adds and that will include justification for the existing one-liner way to do things and why this would be a preferred alternative and so on and then of course the spec text will need to be rebased, conceptually, on top of the latest 262 spec.

JHD: Is there anything I’m missing for what would be required bring it back and have a reasonable expectation of getting Stage 2? Okay. Then it sounds like I will become the champion of this proposal and perhaps work with LCA as well. Welcome to have more champions if anyone is interested. In a future meeting I will bring this back with those updates. Thank you.

USA: There was one last item by Nicolo. Go for it.

NRO: In case with the committee decide we don’t want these export V from mod form, like how do you all feel about export source V from mod which is like exactly that form specifically for sourcing parts?

JHD: To me, it seems important that they be the same. If we shipped one of them, we’re kind of forcing the other one to be shipped. So it seems worth holding off the export source X from X piece until that question has been answered with this proposal because I would imagine if that piece of this proposal was rejected, that to me they feel like they go hand in hand. If we reject one, we reject the other. If we accept one, we accept the other and important they are consistent.

LCA: We didn’t include export source from mod in import source because specifically we wanted to do this with this proposal. It is note while it is possible to do everything proposed in this proposal in the one-liner already, it is not possible to do that with export or with import source because there’s no export form. Also the current solutions would not work for export source because the solution, the one-liner solutions we have right now rely on the fact there is a name space object which can be sort of destructured. It’s not really destructuring but sort of destructured. This is not the case of module source imports because they don’t have a namespace object. So, yeah, I guess we can talk about that next time we come back.

USA: There is a reply.

EAO: Just don’t think on my part if that is the case, then source exports not being otherwise available makes for a decent use case to implement this in order for the shapes to be in parallel with each other.

JHD: I agree. That will be more compelling motivation, I will make sure to include that. Thank you.

USA: Jack Works mentioned their position which is to support this proposal to fill the gap. And LCA’s use case is also important for them.

### Summary

Prior to requesting stage 2, JHD will make it very clear what the use cases are in 2023, including motivations. The repo prose here needs to be reworded to be clearer about the two different pieces of functionality that this proposal adds, and to include the existing one-liner way to do things and why this would be a preferred alternative. Additionally, the spec text will be updated to use modern 262 idioms.

## DataView get/set Uint8Clamped methods for stage 2  (JHD)

Presenter: Jordan Harband (JHD)
-[slides](https://github.com/tc39/proposal-dataview-get-set-uint8clamped)

JHD: So as a refresher, here is another one of my little consistency tables. I want to change those red Xs into green check marks. Looks like the deployed spec needs to have the URL updated. But the specification text exists. I’ll find it later. But it exists and is deployed. And it’s pretty straightforward. It just adds these two methods. It has been pointed out that getUint8Clamped would be getUint8, but consistency is valuable even if it’s not doing anything different.

JHD: It would be fine to reuse the function object for getUint8, the same thing as we have for `values` and `Symbol.iterator` on `Array` and so on and so forth that are the same function object under multiple properties. We can stick DataView.prototype.getUInt8 under getUint8Clamped and it will be an alias; it would have the same semantics either way. Basically I would like to move forward with Stage 2 for this proposal because either one of those two solutions a new function object or sharing the existing one is a very minor concern and can be done in Stage 2, it’s three lines of spec text versus one either way. So that’s it. Can we go to the queue?

USA: There is no queue. You could ask for consensus right away.

JHD: I would like to ask for consensus for Stage 2 of this proposal.

USA: I would like to support this proposal. It looks odd that there’s just these two missing pieces, I think for the sake of completeness, we should move ahead with this.

USA: Also we have Jack Works with support in the queue.

JHD: Just to make sure all the viewpoints are being represented, I definitely heard from at least one if not two delegates that they see no benefit in filling this gap. I have heard nobody say there would be harm in doing so. I haven’t heard any defensible opinion there. More that, like, it doesn’t seem worth even doing it. But my particular personal use case is dynamically dispatching based on TypedArray type and it’s super annoying to have to put a special case in there just for UN 8 clamped arrays for completeness and this makes my code cleaner. That’s why I would like to do it.

So I guess hearing nothing, I have message on the queue NICOLA on the category not harmful and not useful. I’m completely content with people having the opinion and I find it useful for me. I want to be certain I’ve given people a chance to air an objection because I would prefer not to hear the same opinion when I seek Stage 3 since it feels like a stage, like a concern for today and not a concern for next time.

USA: We have GLS in the queue.

GCL: Want to refresh my memory here. These are the methods that behave exactly the same as the other UN’81s.

JHD: Get is the same, the set does not. The set does the clamping and is also able to do the clamping in little endian big N. That is not something you can do otherwise. It is beneficial in that regard.

GCL: Okay. This sounds reasonable. Cool.

USA: Next we have CHU with support. MLS agrees with NRO and HAX agrees and then we have KG.

KG: I do think these are not particularly harmful. I think they’re slightly harmful because they suggest that there’s two things with different behavior and there’s not two things with different behavior. Like you just shouldn’t use the getUInt8Clamped because it’s getUInt8 and the fact it exists suggests that there’s some difference and there’s not. This is not a major harm. But it’s a very slight harm which makes me very slightly not want this proposal. Only very slightly, though.

JHD: Is that concern mitigated if it’s the same as get UN8?

KG: Not even a little bit.

JHD: Okay. I think KG’s comment, well, Shu agrees with KG. SYG, would you like to speak to that?

SYG: No.

USA: I don’t think any of those comments block consensus.

JHD: Just repeat, any objections to Stage 2?

KG: I would like to hear more support given how many people are neutral to slightly negative. JHD has explained his use case. Someone and now I forget who said they supported it.

USA: Three or four people said they supported it.

KG: I would like to hear more about why people want this. Like they can’t all be writing literally the code that you are writing.

JHD: I would hope not.

USA: We have JWK on the queue with support. Would you like to speak to that, Jack?

JWK: I support this for filling the gap. It makes things easier to learn and as Jordan said, he also have some use cases: he don’t want to special case those two methods when he’s handling mixed of TypedArrays.

JHD: I guess I should add as well that the set method in particular, it includes the clamping behavior that is with both endianness and something that I have to do otherwise. If it turned into the objection would be the get method and we would still provide the set method.

USA: Next we have Michael Saboff.

MLS: The only motivation is to make a dynamic dispatch in some JavaScript function, doesn’t sound like a lot of people necessarily want that to be easy, you’re basically putting on the implementations the effort to write in test and support these APIs, that are probably not used that much. So you’re moving, you know, the burden from one place to another. Not eliminating.

JHD: True. I mean, the implementation already has the code because that, you’re able to work with UInt8Clamped arrays and it’s just how it’s exposed. I will definitely agree that a small number of developers will write code that uses this. But the package in which I use it has a vast amount of downloads. So the number, you know and admittedly this specific code path is not used by most of those people. But there are potentially larger numbers of users who will transitively benefit from having this functionality.

USA: Next we have Shu.

SYG: Before I lose this train I thought I want to ask JHD to clarify, I don’t quite understand that claim, like, what I understood you would like to dynamically display with TypedArray view with data name view, why can’t you build the table that aligns the clamped (?) today.

JHD: That’s effectively what I’ve done for the get. It’s the same functionality. That one is easy and annoying ternary that I don’t feel like I need. In the set method I have to reimplement the clamping logic. That, you know, it’s how would I say? It’s not super hard to get it wrong. But it’s still a bunch of math that could be gotten wrong. And I think I, I’m sure I didn’t get it right the first time I typed it out. It would be nice to have that logic covered in there.

And in particular, it’s because the data view methods allow to provide an argument whether it’s little or big endianness and all the other type array methods use the default endianness. If I’m trying to inoperability reasons or whatever force specific N-ness this is the one case where it gets super wonky and different. I don’t personally when I’m writing this code I don’t want to have to think about the underlying bit patterns. If we add two more TypedArray types next year, I don’t want to have to think about that. I want it to work because the data view methods abstract that away from me.

SYG: Okay. Thanks for explaining. My current thinking is so I’m more and more convinced the more I think about it, that the name aligning thing for the getter is harmful. Like I see, I agree with KG’s reasoning here completely basically that everything is kind of divided on machine typed lines and UintClamped is not machine integer. I think the disagreement with JWK support makes it easier, I think it makes it harder and KG said it doesn’t exist. For the clamp thing at least I understand where you’re coming from. It’s missing exclusivity in data view.

SYG: I don’t want to block it, it doesn’t seem like that big of a deal. I find the motivation particularly weak because you want to write your particular library and the other support arguments we have heard is it fills out the symmetry thing that I think is a little bit tricky and not like the symmetry thing is not some strong motivation in my opinion.

SYG: So, I guess overall I think that puts me into the camp of against the getter. But weakly against the setter. But not willing to block on the setter. That said, Stage 3: like the endianness thing I’m also jet lagged and I don’t think there’s more code to write for this and if there is and no use case, that’s not something that I want to write.

JHD: My assumption is since Chrome or V8 or whatever runs on machines with either endianness that the code lives somewhere in the implementation any way. I have no idea how the code base is written.

SYG: That’s the endianness is not, I don’t think people like writing codes with different endianness. I understand you’re looking for certain assurances if we don’t block Stage 2 now that we’re not going to just block Stage 3 and want to do it.

SYG: I don’t know if there’s actually more, I don’t know how to take MLS’s comment of you’re pushing the work on to implementation, how true that actually is versus your claim that the code is already there and you’re just exposing it.

JHD: I don’t expect any assurances. It’s more that we can’t account for the unknowns in general. But I just want to make sure that if we give the Stage 2, and there’s not undue implementation work required for it, that every argument has been voiced already. Sounds like they’ve been pretty voiced.

SYG: to be clear, let me ask you directly, are you okay with not having the getter? Because I think that that would bring more harm than good?

JHD: Yeah, I think I’m content with separating them out and advancing the setter. I am very skeptical about the harm claim because I think that assumes a mental model about machine number types that JavaScript users, even those using TypedArrays may or may not hold.

But this isn’t all or nothing, right if I just get the setter and not the getter, that’s still an improvement. I’m very open to having that happen. I don’t want to drop the getter entirely from the whole plate. So it’s totally fine to split them up or say Stage 2 is fine but the getter may or may not be included. That’s fine with me. The setter is the one I find most valuable.

JHD: Are we okay with Stage 2 but with explicit understanding that the getter may or may not survive to Stage 3?

MLS: So I want to go back to the comment you made that you think that the path and the code you’re writing was going to be seldom used, any method that we add to the language, it has implemented and tested and so and so forth and possibly bugs, I don’t think there would be bugs for something like this. If something is seldomly used and we have a way of doing this in JavaScript itself, it seems to me that’s the better choice to take.

SYG: I can see other solutions in the space where the thing we have, we have made arguments in the past of something is worth standardizing if it’s done often. Also made arguments, something is worth standardizing if it’s difficult to get correct. You have put forth the claim, it’s difficult to get the clamping thing correct. We have put some forth some counterarguments that we think is confusing to suggest that UintClamp is different and alternative and the thing to standardize is clamping operation that is used exactly for Uint8 clamp and that is composed with whatever the library is doing together with the existing data view.

JHD: I suppose that is another alternative. That doesn’t address the endianness thing and use set UN 8 with UN 8 with the clamping exposed and that is a viable alternative. I still don’t think it’s ideal because I think it’s, I do think there is value in having this table be nice and pretty and green. Symmetry for symmetry sake, in other words. I understand that’s not compelling to everyone. But I agree that exposing the clamping logic would take care of the part that’s easy to mess up.

USA: You have a comment by Shane.

SFC: Yeah, I was just wondering if one of the concerns here is I would like to hear more, I think I would like to hear more explicit support and wondering if the check would be appropriate for that? I haven’t been keeping track of time. I feel like we’ve been talking about this for a long time and maybe it would be nice to resolve it and a temperature check would help us do that.

JHD: I’m happy if nobody objects.

USA: Well, to be more specific, what exactly do you want to ask for, a temperature check?

JHD: The goal is, the optimistic goal is the temperature check is many folks who don’t wish to speak, but support the symmetry argument and expose if there are folks who have not spoken who think it would be harmful to include these. Maybe something that offers those as choices in varying degrees.

USA: So suppose to be more precise, you’re asking for a temperature check on specifically the inclusion of both the get and set methods?

JHD: Sure.

USA: Okay. Well

MLS: I think there’s also a group that thinks symmetry is not a use case.

USA: Right, in which case you would be unconvinced by,so that’s the thing. We need to formulate exactly what we need to make the temperature check on, right?

SFC: I feel like it’s sufficient to just say do you support this proposal moving Stage 2 with both mod, with both methods included for whatever reason is compelling from your point of view?

USA: But that doesn’t completely satisfy what Jordan was asking for because it’s

JHD: Let’s have one of the emojis by support adding both methods. One of the emojis being I support adding only the setter. I see RPR shaking his head.

RPR: This always becomes very awkward trying to redefine things and much easier if it’s a statement how much agreement is there with that direction.

JHD: Jordan, if you could, symmetry is valuable enough to move forward with this proposal. And then let’s see the sentiment, how about that?

USA: Temperature check is open. Anyone else?

JHD: This is just about symmetry being a convincing enough argument for following through with this?

Unknown: I don’t see the temperature check.

RPR: I think TCQ is breaking and going up and down about a number of times today.

SFC: I think the temperature check appears if you have the page open when the moderator pushes the button.

// much discussion about failures/delays with TCQ and the temperature check, such as:

USA: If you reload it goes away.

// continuing commenting after temperature check is complete

JHD: Just roughly seeing two digits of positive or better and approaching two digits of unconvinced and couple indifference. Does that seem about right to everybody with the varying views on the counts?

MF: Can we give it another minute or two.

// more back and forth about the process

JHD: If we look at it that way, I do see a slight tip towards lead with still a decently strong, you know, that’s a bad analogy. I’m seeing 11 that are positive and 7 that are negative and 3 that are in the middle. I don’t know what conclusion we want to draw for this. But it’s, I would still prefer to go to Stage 2 with the getter being up in the air.

USA: There’s a point of order that says at least two people couldn’t vote. But I think, you know, all things considered it’s your conclusion to make. Would you like to ask for consensus?

JHD: I suppose. That’s what I will ask is consensus for Stage 2. And I guess there’s three possible paths forward based on SYG’s proposal:

- both the getter and the setter,
- just the setter, or - coming up with some alternative shape that expresses the clamping logic and leaving the getter and setter as a gap.

And with one of those three options, we could move forward. They’re all probably the same tiny number of spec steps. But they may have different implementation maintenance costs as Michael indicated.

Are there any objections to that?

USA: There is a queue. I would request to be quick. JWK you were on the queue previously.

JWK: the getU8Clamp is the same as getU8 because the data is already clamped when it was set, maybe it can be set with the same function. We have prior art in the language that Array#value and Array@@iterator are the same function.

JHD: That’s definitely a, you know, whether it’s a new function object or the ailious function object as you described, those are two possible ways of implementing the getter.

USA: Nicola.

NRO: Moving forward, mean towards consistency side and just have both rather than just one so that people who know about the set will see the get and not be surprised when it’s not there.

USA: JHD, real quick, can you refine this a bit and be more specific about what you think would be the ideal because I don’t think we can get consensus.

JHD: Okay. So I was asking for earlier, is Stage 2 with the understanding that there are three paths forward for this proposal: One is both the getter and the setter, one is just the setter, and the third would be a single function that takes a number and returns the clamped version of that number.

And so that’s a pretty simple straight forward API that wouldn’t change. It’s not trivial whether the getter is ailious or new function object that can be resolved within Stage 2 and it’s trivial where the clamping function lives, that can be resolved within Stage 2. So that’s what I’m asking for.

SYG: So I think I’ll do the hard thing. I’ll withhold consensus for Stage 2 for this reason which I would like this to be settled between my suggestion and the setter specifically. I think there’s possible confusion in the setter if, UN8 clamped array does not have an endianness argument and to have it in the data view. I think could introduce confusion about what the clamping does, it’s not like the endianness is coding on the numeric value and clamping is done on the numeric value and doing a endianness argument you can control are you clamping one byte or another byte and taking the value and it’s not clear.

JHD: The clamping is when you assign to UN 8 clamped array.

SYG: You cannot choose it. Does what the machine does.

JHD: The way it already works is the clamping produces a number value and the number value in store in whichever order the endianness is. That would be the case.

SYG: Now you made it user-provided argument I think it introduces confusion on what actually is happening.

MLS: It has to do with how bytes are ordered in word not how bits are ordered in a byte?

JHD: Yeah, I think that same argument.

MLS: There is no N-ness for 8 bit value.

JHD: I think the same confusion would exist for all of the values for which truncation occurs and you coerce it. I don’t think that’s a new thing with the methods. No one has been confused by this.

USA: We need to really end this. We ran over timebox, we need to take this offline.

### Summary

While there is strong support for this proposal with both a getter and a setter, there continues to be concern around providing a getUint8Clamped that’s identical to getUint8, and an additional suggestion was put forth to expose the clamping logic rather than either a getter or a setter. Further discussion will be needed at a future meeting.

### Conclusion

No conclusion or advancement; ran out of time.

## Withdrawing Symbol.thenable

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-symbol-thenable)

JHD: There was a proposal a while back – Symbol.thenable. We did this in 2018, I think, and the idea was this was back when native ESM just shipped in browsers and the hope was to prevent modules from being thenable meaning when you dynamically import a module, the current status is that if that module exports a then function, that the thing you get from dynamic import won’t be a module end space it would be whatever the exported then function resolves to.

JHD: One of the hopes with this proposal was to allow – provide a generic mechanism in the promise protocol so that things could opt out of being thenable even if they have a then function. The primary purpose was so that module end space objects would define this and then not be thenable even if you exported the then function.

JHD: A tiny benefit is that any folks annoyed that their then functions in the libraries have to be promised then functions, this would give them a way to have a then function without – I mean, without participating in promises.

JHD: But this was rejected at the time or stalled at the time because the web had shipped modules and so had – people were already depending on this functionality. In the intervening years, it doesn’t appear that that situation has changed nor does it appear that anyone has run into massive problems from thenable modules. It’s just another annoyance that we now have forever.

JHD: So my proposal is essentially I’m saying I think we should just mark this proposal as withdrawn and, you know, explain that it’s not likely to ever progress for web compatibility reasons.

DE: Do we need consensus for withdrawals? I’m in favor of withdrawing it. Thanks for presenting it Jordan. What is our process for withdrawals? I assumed for any stage advancement or demotion, whatever we decided to call that, you need consensus. Withdrawal would also kind of need consensus.

JHD: Stage zero.

DE: Okay, sorry.

JHD: The way we operated in the past is you can summarily drop any proposal you’re suggesting and someone could bring to the stage it was at when you withdraw it. Since it was at stage zero and failed to have Stage 1, in the case of stage zero proposal, there’s like withdrawing it is just sort of formally moving it in the proposal’s table and not something that –

DE: So for the proposals that I’m planning on withdrawing, I’m going to ask for consensus on withdrawal. I want the committee to have a shared decision on where they think the proposal is, rather than encouraging the reintroduction. Anyway, we can have the process discussion later.

JHD: For anything where someone want to reintroduce it, that seems like a wise approach regardless of the process.

DE: I think we have different readings of what the current process is. We don’t need to conclude today.

GB: I have one item on this.I thought it was quite eliminating when you explained the history on the proposal. Whenever it’s been brought up from what I heard, the summary was always that it was rejected for various reasons. It’s been brought to plenary a number of times. And I think my only concern with this is that this leaves a history that this proposal can never proceed at TC39 if we say okay it’s withdrawn, sort of like the nail in the coffin that is fine. There’s a valid concern that future implementations will brush up against and from the summary that you gave, it sounded like it was something that was specific to module namespaces and the module use cases and there’s a whole host of potential library interaction cases that it might apply to. And if now the default will be all of those when people consider them or not possible because it was rejected and brought multiple times to plenary and withdrawn with full consensus and never going to happen? Is that the summary we’re leaving this with? How do we look at that with future consideration?

JHD: The primary benefit of the proposal was installing the protocol by default on module name space objects. Since that is not possible ever for compatibility reasons, the only remaining value would be if somebody just really, really wants to name a function then and not have it be a compatible promise then function and I’m pretty sure that motivation has been consistently shut down as not valuable.

EAO: Our process document does mention that on withdrawing proposals, a proposal champion may propose the action, but consensus of the committee is necessary for these transitions.

DE: On the question that GB was raising about the future of this proposal, I think it would be great if we could have a discussion reaching a conclusion by consensus about whether we might ever have an additional property access done on every promise resolve? And I think we should – I would argue in that discussion that we should conclude no. We should never add extra property accesses to promised operations. That’s a key thing going on in this proposal and the reason why it makes sense to withdraw.

GB: I can always think of cases where problems could arise and the future is long and it’s nice if we could at the very, very least have some kind of nice summary, you know, for those, you know, coming over the history of this in future.

DE: Yeah, I think it would be nice to have a summary of why we don’t want to add a property access and why like people who are considering proposing that in the future should understand the costs.

GB: The main thing I think about is just interop with other languages where you have interfaces with it then as the main kind of use case that I’m thinking of immediately here.

DE: But, yeah. So we can imagine problems. We already have problems. But does that – could that justify from this broad of a thing where you add the extra property access to this common code path?

GB: Yeah, I appreciate that. Any way, sorry, do you have—

NRO: Given that consensus we can do anything, we could say some more data and change our mind and now we have consensus and actually adding, doing whatever we said we would never do. I don’t think consensus is never doing something is like really is useful for how our process works.

MLS [on queue]: Agree with NRO

### Summary

- Some aspects of the TC39 process need to be clarified.

### Conclusion

- Symbol.thenable is withdrawn.

## Approval of minutes

SHN: We may not have approved the minutes of the last TC39 meeting.

RPR: Any objections to approving the July 2023 minutes? OK, we will consider that approved.
