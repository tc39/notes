# 27 Nov 2023 99th TC39 Meeting

-----

Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

You can find Abbreviations in delegates.txt

**Attendees:**
| Name                   | Abbreviation | Organization      |
| ---------------------- | ------------ | ----------------- |
| Ashley Claymore        | ACE          | Bloomberg         |
| Ben Allen              | BAN          | Igalia            |
| Waldemar Horwat        | WH           | Google            |
| Chris de Almeida       | CDA          | IBM               |
| Daniel Minor           | DLM          | Mozilla           |
| Samina Husain          | SHN          | Ecma International|
| Cam Tenny              | CJT          | Igalia            |
| Jesse Alama            | JMN          | Igalia            |
| Jirka Marsik           | JMK          | Oracle            |
| Rezvan Mahdavi Hezaveh | RMH          | Google            |
| Sean Burke             |              |                   |
| Philip Chimento        | PFC          | Igalia            |
| Nicolò Ribaudo         | NRO          | Igalia            |
| Romulo Cintra          | RCA          | Igalia            |
| Agata Belkius          | -            | Bloomberg         |
| Istvan Sebestyen       | IS           | Ecma International|
| Chip Morningstar       | CM           | Agoric            |
| Peter Klecha           | PKA          | Bloomberg         |
| Luca Casonato          | LCA          | Deno              |
| Eemeli Aro             | EAO          | Mozilla           |
| Shane F Carr           | SFC          | Google            |
| Jordan Harband         | JHD          | Invited Expert    |
| Ujjwal Sharma          | USA          | Igalia            |
| Mark Cohen             | MPC          | Invited Expert    |
| Michael Saboff         | MLS          | Apple             |
| Ron Buckton            | RBN          | Microsoft         |
| Jack Works             | JWK          | Sujitech          |
| Daniel Ehrenberg       | DE           | Bloomberg         |
| Mikhail Barash         | MBH          | Univ. of Bergen   |
| Ethan Arrowood         | EAD          | Vercel            |

RPR: So We have a code of conduct. It’s on our main website. So please make sure you have read that, and that you interpret it in the best possible spirit. If anything happens that you think perhaps goes against this or you’re concerned about, you can always tell us the chairs many private. And we will keep everything anonymous, likewise, we have the code of conduct that you can go to as well. Our schedule this week is the four-day meeting. We have two hours in the morning and two hours in the afternoon. So very simple. We have our usual comms tools. So for anyone that’s new here, from the reflect post, you’ll be able to get to TCQ. TCQ is our primary tool for controlling the conversation and for making sure that we have -- we stick to our agenda. We do have a very packed agenda. We always do. But let’s respect the queue in times of orderly conversation. You can switch to the active topic by clicking that queue button up top, and that will then take us to the active agenda item, like testing out TCQ. Whenever we have an agenda item, we always have a current topic, and so if you wish to talk about something new, you want to normally click the new topic button. So always prefer those buttons towards the left, the blue, and only use the ones to the right when needed, because they will increasingly interrupt the flow of the conversation. If you want to add something extra, a reply to the current topic, then we are discussing current topic, let’s see, at the moment, there’s no one on the queue. I’m just checking it myself. Likewise, if we’re not sure about something that’s been said, we can ask a clarifying question. Just to check our understanding. And then finally, if something outrage serious happening, if something is disrupting the meeting, such as we don’t have note takers or we can’t hear something, then please use a point of order as. That’s the most urgent way to get through. All right, when you’re speaking, you will have an extra button all I’m done speaking. Please to your best to make use of this as it’s a good way of yielding control and making sure everyone know it’s time to move on. We also have our equivalent of Internet relay chat. We have our chat room, the Matrix. And within that, the main rooms that you’ll be interested in, for this meeting at least, is the TC39 delegates. That’s the privileged room where only delegates can speak. If you’re in the in there, then please see the TC39 business repo and you can make sure your details are registered there or contact one of the chairs. And then there’s also Temporal dead zone. Please use that for anything off topic, so rather than the conversation descending in the main delegates chat, it descends into the Temporal dead zone. All right. We have an IPR policy. So everyone that’s here is generally expected to either be an ECMA member delegate, in which case your organization has already signed up the relevant IP policy, or an invited expert that has gone through our process, and likewise, there, signed the invited expert form. For everyone else, please make sure you have signed the contributing agreement, and anyone who is not in those categories and has not signed the form, you’re expected to purely be an observer, so please do not speak, and you can also obviously contact the chairs or the ECMA secretary here to find out more about ways to get involved. And, yes, we do welcome observers.

Moving on, so notes, so note taking is a critical part of the meeting. We have, I think, a transcriptionist, is the transcriptionist here? Yes. Excellent. So -- and we’re very grateful to them for taking all our notes, but they do need help, so there is the job of the notes chaperon, the notes editor to fix up the notes. We will be asking for volunteers. I think perhaps now is a good time to do so. We’ve got a thumbs up immediately from Ashley, long-time contributor to the notes, and also Ben Allen. Thank you very much. Instantly we get two people. That’s a very good start. Chris is happy. And obviously there is, you know -- just there’s the IP notice that is above there. You’ll see just so that you know that note taking is happening and all your words are being down, and you have the opportunity to correct them afterwards. As we encourage. The next meeting coming up will be in San Diego, hosted by service now. So looking forward to that. The invites with all the details for that should be going up very shortly. Just finalizing that now. And I will say thank you to everyone who has contributed to the interest survey. It looks like we’re going to have a very healthy attendance there. So I’m looking forward to it. There is also going to be something extra. I don’t want the give away the surprise, but Samina is working on something that could be exciting for people. So that’s coming up in a little over two months. So finally, let’s get on to the regular stuff. Oh, clarifying question. Here we go. Ashley asks on TCQ, Ashley, would you like to speak. Is pointing of that in the Google names, they don’t have -- don’t always have the company. Right, yes. If you’re not -- if you’re using a Google account, then it will just show your natural or your -- where the name you’ve used with that.

If you use incognito mode, then you get to specify whatever name you would like. I think at this point, Chris, I don’t think we will ask people to rejoin.

CDA: Yeah, no, there’s no -- Google meet doesn’t have a display name. You can’t just change like you can in Zoom, so we will have to just proceed thusly. But it’s a good reminder to encourage people, please add yourself in the attendee list in the notes doc if you have not already done so. I will paste the link in the Google meet chat so it’s handy.

And I guess if anyone appears in the participants where we don’t know the affiliation, we may just have to ask.

RPR: Okay. So on our housekeeping items, so the first thing is do we have approval of the previous meeting’s minutes? I will take silence to mean that, yes, we do have approval. Okay, approved. And on to this meeting, so the current agenda, we have there the packed agenda. Is everyone happy with that? No complaints? Hopefully we will get through it swiftly and be able to fit in the overflow items.

## Github Delegate Teams

Presenter: Jordan Harband (JHD)

JHD: Theoretically, there’s at least one person or each ECMA member who considers themselves responsible for their company or members’ interaction with ECMA. Please review the GitHub team for your company or member. And make sure that everyone on that team is still employed at your company, and that anyone that you want to be on that team that isn’t there, please file the appropriate issue to add them. Thank you.

RPR: Perfect. Thank you. All right. And the other thing I will just say about today’s agenda, or this week’s agenda, is that the chairs generally try to reach out to people via Matrix, via direct messages or in the chat in order to bring items forward and back and so on, so please be on the lookout. That helps us -- that helps us get everything in. All right. And all right, it looks like, actually, we’re on track to fit everything in, because some people have updated their time boxes, so thank you so whoever gave up a little bit of their time. So, yeah, we should be in for a good meeting. So then thank you for sitting through this opening. Next up is secretary’s report.

## Secretary Report

Presenter: Samina Husain (SHN)

- [slides](https://github.com/tc39/agendas/blob/main/2023/tc39-2023-048.pdf)

SHN: Very good. Welcome everybody to the meeting. San Francisco time, so for some people, earlier and later for others. You said international orange for the bridge, hmm, maybe ECMA is also international orange, I’m going to have to investigate.

A summary from the secretariat. As always, a reminder that the summary and conclusions are great, and please not forget them. It is a huge support when we work on the minutes. And then the final technical notes, and just wanting to recognize here, ACE who supported me hugely in ensuring that the final minutes and the technical reports were appropriately finished almost timely, delays due to me. And I thank him for his support and will probably need it again. But slowly but surely I am learning through that. I want to just point out, just a small comment on invited experts. If some of the TG4 members are on the call, I have been sending out a few emails just to confirm you are technical experts, the expectations for next year, and a friendly reminder I will review all of the invited experts just so that we are better aligned with the ECMA secretariat. We may have missed some on our list, so I will be reaching out just to make sure that we are aligned on the overall invited experts, and I’ll do that probably in the new year. I also want to point out that regularly on an annual basis, for ECMA, we confirm the chairs of the TCs, the TG conveners and editors. You may do that just verbally in the meeting. We are flexible in that. I know some TC chairs or one TC chair was just added this year. I think some of the conveners were also new to this year, it’s absolutely fine that you are all doing the same next year. But perhaps by the end of this meeting, either today, tomorrow, or on Thursday, if you may just verbally confirm to me that your TC chairs will remain as they are, the TG conveners will remain as they are and the editors that you have that I have noted are the same, then I will make sure that that’s also noted in the general assembly as we do a full review of all TCs.

SHN: a few slides that I will go through, which cover the -- some of the items I listed there in my table of contents. I want to remind everybody that we will have elections at the general assembly coming up in December. December 5th to be exact. These are the candidates for the role as shown on slide. I believe you know all the names. These are the current candidates that we have for this year, 2023. They have all chosen to participate for one more year, 2024. All of them have the opportunity to do so. You can, of course, also nominate, even now, until the very last day, another candidate if you wish. If you would like to self-nominate, that’s also fine. Just to let you know that this is the current slate for our management and executive committee. Also want to remind -- from a timeline perspective, as every year, mid-year, we have an approval of a new addition of 262. Our April ExeCom is coming up on the 24th and 25th April. And typically, it’s during the ExeCom -- that the TC chairs bring in the recommendation of the next addition. I want to point out that the dates are very tight. We have a 60-day opt-out period and a 60-day open for comments publication. We do it almost in parallel. The dates are time shifted by ten days. A suggestion you may consider to freeze the specification in the early part of April to ensure that we meet these Ecma 60-day rules. Typically you’ve always done that. This year, the dates are quite tight for the 60 days. And as I would imagine, if the work that you’re doing so far has been moving so well that you would be on the 15th edition and 11th edition for approval in the upcoming June 2024 meeting.

SHN: An update for the TC39 standards, so we had in ISO a vote that ended on 3rd of September. We didn’t know the results at our last meeting, which was in Tokyo, but the results are favorable, so we have been approved as an ECMA suite for the next five years, which is very good for us. That means we don’t have another periodic review until 2028 and the same happened for JSON, so that’s a very good position for us with all of our standards.

SHN: I want to point out some workshops that we’re planning. So we have wanted to meet and bring information to all our members to give them information about new things that are happening, where there potentially are gaps and where they may be able to participate. There are two workshops coming up, they’re hybrid. If you would like to join, you absolutely can. You will note there’s an email that you can use to register. It would be the easiest if you did that. The first workshop will be on December 6th. It will be a TC53 workshop. The details are highlighted there. I will ensure that my slides are uploaded, that you may see them. But you may also find this information on a website. If you find it interesting, please register, it will be very good and informative and we would appreciate your participation. The second workshop will be on date and cloud standardization. We tried to do this earlier this year, but due to reasons we had to cancel. We are attempting to do it again. We also have some invited speakers from JTC1, from different study groups that will be participating and providing updates on what has been going on in ISO in the space of cloud standardization. We would also then, of course, look for where the gaps are and see how ECMA could potentially play a role there. So this is a general outline of that particular workshop. It will be on December 7th on the following day. Again, very easy to register. It is an email registration. So you see the email there is the help desk at ECMA international. I would highly recommend that if you’re interested in either of these workshops to please register today or latest tomorrow. If we don’t have enough participants unfortunately I will have to cancel one of the workshops. If the time zone works, please attend. I was asked if it was going to be recorded, it will be a WebEx session. In the event that we move forward with this, I will of course confirm with the speakers that they’re okay for the recording. And we hopefully will be able to have a recording. It will be a three-hour session. So if you wish to participate live, that would be great.

SHN: A short update on some new projects, I had mentioned in the Tokyo meeting we were already having these discussions. We have a new non-for profit member that is OWASP. I think you’re familiar with them. They have already put in their application and royalty free requirements. We have already provisionally approved them. We will just have procedural approval during the GA. So we are very happy to have a new member. Our other new exciting news which you also may be aware of, we’ve talked about, is a new TC, cyclone DX. It will be -- if you would like to know more details about it, the scope of TC54 is one of the documents that’s uploaded from the GA available to all members. It’s on my annex list. I will leave it to you to read that and keep an I forget time for the presentation right now. So those are all very good. I’ll already highlight that we have a new member as a result of the cyclone DX project, and that is Lockheed Martin, which is excellent. They’ve already joined. We still have to approve them procedurally, but I think we will move forward without any hiccups. It’s very good to have the new member, and I want to recognize DE here for his huge support. He has been instrumental in making this positive for us. So thank you for that.

SHN: We have also started a new ad hoc, which is called Ecma Growth. The ad hoc has members who are supporting me and the Secretariat to look at future activities and new strategies that ECMA needs to think about or adjust itself toward. We are looking at areas of voting, membership governance, and our objective of course is to encourage new projects, to be attractive to new projects and new members. So this ad hoc has just started. We’ve just done some initial meetings, and we anticipate that it will continue in the next year. And we will be able to bring some solid input that we can also share in this meeting. SHN: I think that may be one of my last slides. Just want to remind you that my usual annex has the statistics that you may look at your leisure. And documents that you may want to review as I mentioned Cyclone DX is there. If I go to my next slide, my next slide touches on our PDF version, and we had a discussion in the last meeting, and Kevin Gibbons was going to have a look to see if the recommendations received from Allen were of use, if we could move forward with that. KG, if you’re on the call and would like to make a comment and can make a comment, I can make a pause right now.

KG: Yes, I think it’s enough to work with. The next step is I need to actually go through the process and confirm I can build a PDF, which will take me a little while, but I think I can. So I will have a trial PDF at some point and we can see how it looks and confirm it’s good enough.

SHN: Okay, great, thank you very much, KG. If there’s anything you need to need to converse with Allen and I need to moderate anything and get you together, just let me know. I’m happy to support you.

KG: Will do.

SHN: Thank you very much for that. I’ll go to the next slide, we are on meeting 99 and meeting 100 is coming up, so I have a bit of a challenge for the entire committee. If you so choose to take the challenge, When I was at the last meeting in Tokyo, I saw this wonderful baseball cap that SHU was wearing, and I understand that you were the designer of this. I think it’s great. So I have a challenge to the whole committee. It’s up to you to decide how you’d like to do it. I would be more than happy to have a new set of baseball caps or beanies or tell me what you’d prefer, for the 100th meeting, to commemorate that milestone. Just request that there is a logo of TC39 and logo of ECMA on that baseball cap or beanie, or socks. I would like to have TC39 socked and.

If those are two items that you would be happy with and would like, if you are interested, I leave you the challenge to come back to me with an idea of what could be the design on the cap. If you can give me your ideas by the end, the 18th of December, I will take the initiative and have them prepared and made so they can be ready to share at our 100th meeting coming up in San Diego. Along with a few other things, but that I can manage on my own, but I would love your support and ideas on the baseball cap or beanie or whatever you like. I’ll wait for your feedback on that. And I think that is my last slide. So are there any questions?

RPR: Nothing on the queue. I think everyone’s just very impressed with the hat and the socks. SHN: I really would love some feedback on what you would like. So that would be great. Thank you very much. RPR: All right. Great. And in the Matrix delegates, Ron has, like a display cabinet of past hats of TC39.

## Ecma262 Updates

Presenter: Kevin Gibbons (KG)

- [spec](https://github.com/tc39/ecma262)
- [slides](https://docs.google.com/presentation/d/14oO9ACSx66ChJK-5-dxhuKYmmh5XFaE1uC_4MS6tcEw/)

KG: Editors update, we have landed a couple of normative changes. The first one is the resizable array buffers proposal. The second one is this long-standing web reality issue where the GetSubstitution, which is what is used for doing the replacement strings in string.prototype.replace, was specified to have slightly different semantics than it in fact had, and we have corrected that so that the behavior matches the behavior in real life. Also, a couple of editorial changes. The first one that is something we’ve been working on for a long time, or rather working towards for a long time, it completes a bit of work, where the RegExp semantics now work exactly the same way as the rest of the specification. Previously there was some unbound state and some named tuples and now the RegExp semantics use records the same way literally everything else in the spec uses records. So that’s just a small cleanup, but I believe that was the last place we have any such cleanup, so thank you to jmdyck for the pull request.

KG: And the second thing is something that we’ve talked about for a long time and finally got around to. The -- as you know, the specification defines a number of kinds of exotic object. And usually the names of the exotic objects are basically what you would expect, you know, a proxy exotic object is a proxy. But there was one exception, which was "integer indexed exotic object" was the name for TypedArrays. These things were synonymous. A TypedArray was an integer indexed exotic object and an indexed indexed object was a TypedArray. But they had a different name, and that was silly. And now there’s just TypedArrays. If you go looking for that phrase and it’s gone, it’s because they're TypedArrays now.

KG: Okay, very similar list of upcoming work except you will see I have struck through this one here because we have now finally finished the work of making all internal values consistent. We now use records everywhere. We also have a couple new ones. I particularly want to call out this first one. Getting rid of the terms and definitions section. This is a section in the spec that contains, like, 2% of the terms and definitions in the spec. That’s kind of silly. We are going to try to relocate definitions to where they make sense. Just like every other definition. If you feel strongly about that, though, let us know. Otherwise, the other notable thing here is the last item, Annex F, the documentation of breaking changes, someone pointed out we haven’t been keeping it up to date, although, it is kind of unclear what it means to keep Annex F up to date, because in practice, we have found that, for example, adding a new method to `Array.prototype` is much more likely to break code in the real world than most of the things in Annex F, so not totally clear what the criteria for something counting as a breaking change is. Of course, we don’t list new methods in Annex F, or at least have historically. We are going to think about the role Annex F should serve and what should go into it and YSV volunteered to help with it.

KG: Another thing, this a reminder that ‘ecmarkup’ has a bunch of useful features. It got a couple of new ones recently. So the first thing is sort of a meta reminder. If you’re on the spec and press question mark, that is, you know, shift plus slash, question mark on the keyboard you will get a little popup that will tell you the keyboard shortcuts available in the specification. And particularly relevant is the pins, pinning things is incredibly useful. You can see on the left-hand side what pins look like, and thanks to Michael, there’s a new feature which is you can add clear out pins from the little menu by clicking the little X where the clear button will clear all of them. If you are using a particular section of the spec a lot, even just during a single limitation or something, highly recommend using. And in general a lot of the keyboard shortcuts are extremely useful. Last thing, this isn’t from me, if Jack Works’ on the call and able to demo.

JWK: Hello. Here is the VSCode plugin that’s called EC markup. You can search that there are two extensions the other one is from RBN and it has not been updated since 2017. You can install the version I wrote, and it looks like this. For a .emu file, it will have syntax highlights for the grammar, and also for the algorithm. There are also some useful features like variable completion from the current algorithm and you can have some completion of the productions defined in the main spec. You can also have AO completion and also with function signatures and the links. If you hover the cursor on it, you can see there are signatures. This plug-in also provides many useful snippets. If you type "early error", you can complete the whole section of an HTML. That’s it. This extension is made of a language server, so it can extend to other editors. Now there is only a VSCode version, and it’s still in the very early stage. We have bugs, maybe. But it’s already constructive when editing the spec.

KG: Very cool. And that was the end of the editor’s update as well.

RPR: Thank you, well, yeah, that looks really good, JWK. That’s some good complements in the delegate’s chat about it, and you’ve posted the link there as well, so thank you.

## Ecma402 Updates

Presenter: Ben Allen (BAN)

- [spec](https://github.com/tc39/ecma402)

BAN: Yes. And so this time, we have a fairly quiet update. We do have one normative PR that the scope of it is such that we want to get feedback from the plenary on whether it’s the right size for PR or if it’s something that should be broken out into its own proposal, so I’ve opened a timebox on that, which I believe will be on the fourth day. Just to give a quick preview of what’s going on, let me share the correct screen.

BAN: So currently iso 4217 is normative for the number of digits after the decimal separator to be used for currencies. But in practice, the definition that they use for those numbers of definitions diverges from actual Kay day-to-day practice, so in some case it’s the largest number of digits used in a financial separator in financial or accounting case. CLDR has its own datama separates out these financial or accounts uses where you’ll sometimes use more digits than you will in your day-to-day life, separates those out from what we they call a cash rounding, the number of digits used that matches the smallest denomination actually in circulation, so we have a. R in for this, but it’s sufficiently large that like said, we wanted to break it out into its own timebox. Beyond that, I yield the remainder of our time.

RPR: All right, any questions for BAN? I don’t see anything on the queue. No? All right. Thanks, BAN.

## Ecma404 Update

Presenter: Chip Morningstar (CM)

- [spec](https://www.ecma-international.org/publications/standards/Ecma-404.htm)

CM: Everything is awesome. Well, not everything, everything, but everything to do with ECMA 404.

RPR: Thank you. So ECMA 404 doing well.

## Test262 Update

Presenter: Philip Chimento (PFC)

PFC: I can keep this very short as well. From the last meeting of the test262 maintainers, the message that we want to deliver is that we are working on the clearing the backlog of PRs that need maintainer review. So thanks, everybody, for your patience, and if you’re a proposal champion and you see something in the test262 review queue that is about your proposal, we’d also appreciate your help on reviewing it. That’s all. All right. And nothing on the queue. So we shall move on. Chris, are you ready with TG3?

Presenter's Summary: We are working on clearing the backlog of PRs that need maintainer review.

## TG3: Security Updates

Presenter: Chris de Almeida (CDA)

CDA: I do not have slides, but not a ton to report from TG3. The only things that we really have are we incorporated feedback that we got from plenary last time on the vulnerability disclosure policy regarding just some slight language change, which we made, and we felt that the -- we understood clearly what the ask was and felt like what we did met the ask and didn’t need to come back to plenary about it. So that has been published in the .github repo for the organization in the security,md, which is a community health file. Which will now propagates to all of the repos across the org, and the other item is we enabled GitHub private vulnerability reporting across the TC39 org in GitHub as well, so that is also now applying to all the TC39 repos that exist, and any future ones that are created will also apply to those as well. That’s it.

RPR: Thank you, CDA. So we are getting more secure. All right. There’s nothing on the queue. So I shall move on. And you’re up again with code of conduct committee updates.

## CoC Committee Updates

Presenter: Chris de Almeida (CDA)

CDA: Yep, all quiet on the code of conduct front. No new reports to report. So there’s really nothing else, but just as a reminder, as always, we’re always welcoming folks that would like to join the CoC committee. If that is something anyone is interested in, please reach out the somebody on the committee. Thank you.

RPR: Thank you, CDA. So next up is MF to talk about publishing an FAQs document. MF, are you there?

## Publishing an FAQs document

Presenter: Michael Ficarra (MF)

- [repo](https://github.com/tc39/faq)

MF: So a couple weeks back, I proposed that that we create an FAQs document, somewhat informal. As a solution to the repeated explaining we have to do from, like, some very common questions we get in our various communication channels on the Matrix, on the discourse, et cetera. I wanted to create something kind of informal, because I don’t want this to have to go through consensus every time and have it be like an official statement from the committee. But rather just be something that we can use to say, like hey, this is how people normally explain this to people who ask this question. So I created these suggestions, and they got put into this repo. So now there’s a TC39 FAQ repo. Right now it’s private. The ask is going to be to make it public and to start using this for, like, you know, its intended purpose. So I wanted to point you to the disclaimer here at the top. I’ve hopefully metered our wording enough that people should be okay with it. So it says, this document contains typical responses to questions that are commonly raised about JavaScript language development, both within the community and to the committee on the various discussion platforms. The information in this document is curated by individual TC39 delegates with minimal review and may reflect biases and is not authoritative and not endorsed by TC39. Regardless, it may be helpful for those with questions or at least a handy reference for delegates or anyone else fielding these questions. And so the process that I’m proposing here is that any member of the public can suggest a new topic that they see frequently asked or that maybe they have a question about by opening an issue, and any delegate can add new topics or make changes they want with a pull request and a single approving review. Yeah, so that’s what I’m asking for. Hopefully we can be pretty chill about it and not have to fight over it. I want to keep things, like, just completely uncontroversial. I have a question in here that mentions PTCs, and hopefully it says only, like, factual statements about them and is completely uncontroversial and nobody should have a problem with it. I wanted to see if anybody has feedback there or if we can make this public and start using it.

NRO: I think it’s great that there’s a consensus, but we still need to establish some process on how to handle disagreement between different delegates. I have a specific example here. There is a question about apparenttations that says java never has them and you parse them and it takes valuable time, and I found that misleading given that we’re working on the proposal. And I opened the request to regard this and proposal. Then two other delegates disagree with each other on how to word my reworded answer. So, like, do you have any idea on how to handle these cases?

MF: I would say if there’s disagreements like that, we should just omit it. We can have a useful document that is some subset of all topics, right? The uncontroversial subset, and if controversy happens, the easy way out of it is not to include it in the meantime until we can have delegates work it out. I didn’t see your PR, but I’ll be happy to address it. These were all written just by me or I guess by me and KG. So happy to take any feedback about what is on there so far. I don’t expect these to be the totality of questions. There are plenty more that we’ll add. Does that cover your --

NRO: Yes, just maybe you could document somewhere that when [INAUDIBLE] given a way to handle this question and then add it -- get tied to delegates, like, find some compromise to the people that discussing it and hand it back once, like, you know that --

MF: Yes. Your audio is a little bit choppy, but I think I understood, you’re saying that in the event of conflict, don’t put it on the document, work it out first before it gets put on the document?

NRO:Yes.

MF: Yes. That’s what -- that’s the process I’m hoping for. Of course, if this all goes to hell, you know, we can take it down. But I think it’s worth at least trying for now and trying to be civil with each other.

DE: +1. I agree with what NRO said of working things out, and excluding things from the FAQ when there’s disagreement. At the same time, documenting these different points of view and different disagreements that exist is also a very useful project. It has a different audience, though. It’s more like for us or for advanced JavaScript users than, you know, people who are trying to look for a quick answer. And this would fit in really nicely to what YSV has proposed previously about documenting invariants. I would very much encourage people to work on that in parallel with having the FAQ being for non-controversial stuff.

RPR: That’s all the questions. O?, and SYG?

SYG: I have a quick question. So is the expectation that delegates monitor this for possible disagreement that may come up when someone proposes a new FAQ item?

MF: That’s a good question. I don’t have a solution for that.

SYG: Likes, on the one hand, if there’s no hurry, you could do a quick update during plenary of things that may have disagreement. But it seems also kind of weird to tie this document to, like, a consensus seeking activity or something.

MF: I could do a quick summary, like the editors' summaries, of things that have been added, if people want. Or you think --

SYG: I would appreciate that. Yeah, I’m just worried -- like, given that this says TC39 FAQ, external folks will read this in an authoritative voice, and if you add something, because we’re not used to monitoring this regularly and then people who might disagree just missed it and then we rescind it later, that would be kind of strange as well.

RPR: Yeah, that will get quoted.

MF: Yeah, I don’t know how much more clear I can make the disclaimer about it being not authoritative. I could make it bigger and in colors. I don’t know. They can just not read it.

SYG: I think you have to remove TC39 from the repo for people to not read it authoritatively.

MF: Which is an option. The plan was that if we failed to get approval for this to be within the TC39 org, I would put it somewhere where I can point to it and where other people can point to it, and then it’s definitely not seen authoritative, or at least mostly not seen as authoritative, but also other delegates have no control over it, and it's solely my discretion, which isn’t the greatest process.

RPR: Okay, about two minutes. CDA?

CDA: Yeah, so maybe this is something that was in the original issue that -- before this repo was created that maybe needs to be added in here. But one of the tenets that was listed in there was that this document should not contain anything that’s perceived to be controversial or something that’s not generally agreed upon. So the repo has, right now, I think the setting is only to require one review per pull request. We can consider increasing that number, but I think it’s important that everyone proposing a change to it, or creating a PR for it, as well as any reviewers keep that in mind, that if there’s any kind of debate as to whether this belongs in there, then the answer is probably no, it doesn’t. So I think that’s a shared responsibility. I would favor also the suggestion that anything new be reported up to plenary, perhaps, but this is also a good repo, I think, for everyone to follow if you’re not already following the entire organization, which most people probably aren’t.

DE: Yeah, I think I agree with others that there’s no way to get everybody to read the disclaimer or even, you know, the majority of people, even if we repeated it on every answer. We can have a disclaimer, but just keep that in mind, no matter how we word it. I’m happy with this default of remove things when there’s controversy. I think I like the idea of requiring multiple reviewers and extremely briefly, extremely briefly noting before TC39 meetings, without this suddenly being a consensus seeking thing.

RPR: And perhaps go to SYG. I know you’ve got a reply to NRO.

SYG: Yeah, just a quick suggestion for reviewers, I feel like the chair group as a group ought to have a good overview on things that might have disagreements. Perhaps it would be enough to loop into one of the chairs to review for things to have a check whether this is or is not controversial.

NRO: Okay. So I was -- while first going through this document, I first was reading through the answers, through the questions and I noticed way later the disclaimer. And, like, other people mentioned that it’s very likely that whether or not this document was, I was wondering how you feel about having a way shorter disclaimer in every single answer saying this might not represent a shared opinion, please read the disclaimer. Even if I link to somebody the specific questions to be paged, if they scroll to their -- there is a way for them to actually note there’s a disclaimer.

MF: So DE had already discussed that saying he thinks may be insufficient, that people still won’t comprehend the disclaimer. I kind of agree with that, but I don’t oppose -- I could even put like a just link that says disclaimer next to every header and people can --

KG: If you put in italics a sentence that says this answer does not represent the views of a committee as a whole, just after every single question, I think that would be read, at least.

MF: Maybe. But, yeah, I think -- I don’t want to take up any more time. I think we’re out of time. So do we -- do I have approval to make this public with the condition that I improve the disclaimer somewhat to mention, you know, directions for delegates who do not have anything controversial added and then also to somehow improve linking to disclaim from each and every question?

CDA: I support making it public. with the caveat of allowing, -- a lot of people might just be finding out today about this. So I would favor making it public with the exception of allowing, I don’t know, a week or so for any feedback on the content that exists right now, in case anybody does take issue with anything that’s there, and then if everything is fine after a week, then I think it's good to go.

MF: I’m happy to wait a week.

RPR: All right. There’s not been any objections to that. All right, I think that’s -- that approach is good to go. Thank you, MF.

## Requesting collaborators for writing and publishing a paper on the TC39 Process at IEEE

Presenter: Mikhail Barash (MBH)

- TODO - get link to slides

RPR: All right. Onwards to MBH, who is requesting collaborators for writing and publishing a paper on the TC39 process at the IEEE.

MBH: We plan to submit and to hopefully get published a paper about how TC39 works and what TC39 is. The venue is IEEE Software, a major journal for practitioners who are interested in a more deep understanding of the software processes. I can get this from the journal Web page. The . . . manage the production of systems. So it’s a magazine, not a journal. Still scientific but important differences are that the articles are shorter, they have sort of broader appeal. They are more tutorial in nature. And should be written with both experts and nonexperts in mind. And also, look different as you can see from these images here. So more visually appealing. And here is an example of an article where there are 25 coauthors. It is a good thing because we could have a complete overview of how TC39 works, if we have many, many coauthors on this paper. The goal of this, the main goal is that there will be a scientifically rigorous explanation of what TC39 is and how to works the motivation for this comes from our experience with YSV at SPLASH 2023, a conference on programming languages, there’s a poster how the committee gets feedback from users. We understood that the community is unaware of how the process works and even what TC39 is. We also have in mind several papers, a series of papers, about standardization and this paper would be the foundational and all the other papers – all other papers will refer to it. It’s important to know that this is a purely descriptive effort, so we are not introducing anything new about TC39.

MBH: So here is a preliminary outline of the paper, which and YSV thought about. This is preliminary. Nothing is set in stone. There is something about what ECMA is, TC39 from the ECMA international perspective. Some sections about the TC39 process, we explain what a proposal is, in the understanding of TC39, how the plenary meetings are going, what kind of voting schemes, consensus, it’s interesting to explain to the scientific community. What kind of roles we have. So cochairs, members, delegates, users and on. How we can navigate the standard document itself. Say what grammar format it uses, how the semantics are specified. And some sections about the engines that implement the specification. So experimental engines are important, what other major browsers engines, the similarities and differences in how they implement the specification. Something about the Test262. And then sort of comparison from standardization of ECMAScript and other Web languages. So we would like to invite TC39 delegates, co-chairs and the ECMA secretariat to collaborate. You can send your ideas, say, in the form of both lists. No need to polish anything. The major writing effort will be done by myself, so I can sort of try to formulate a coherent text from that. And everything will be done openly with the committee, with all the participating collaborators. I will have a shared document where everyone will be welcome to proofread and your ideas can be about any parts of the paper, and suggestions about the outline of the paper are welcome. And everyone who will collaborate will become a coauthor on the paper. So we are looking into something from 12 to 15 pages. And schedule-wise, we are now here at the 99th meeting. So, say, in a couple of months, we would get input from the TC39 delegates. And then, I would like to present something already at the next meeting, have a similar presentation, which would summarize the input we got and the writing effort for – and some presentation at the meeting, the 100th meeting, and then we see where we go from that one. So that’s my presentation.

RPR: All right. Thanks, lots of celebration images flying by right now. People are happy.

MBH: Thank you.

RPR: Are there any questions for him on this effort? Sounds like this will be very good at popularizing and educating more people, the committee and the process. So thank you for this. Thank you.

## Array Grouping for Stage 4

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-array-grouping/)
- https://github.com/tc39/proposal-array-grouping/issues/60
- no slides

JHD: All right. Let me pull up my page and I will share a link. I don’t have a slide or anything. I will put in matrix the URL that I am looking at - it’s this issue on the array grouping proposal repo. The tests are merged. It's shipped in Chrome and FireFox and serenity, and there’s polyfills that exist. It’s certainly in the Safari Technology Preview, not in the current version of Safari, but presumably, it’s in an upcoming one. And the spec PR is up and editor approved. So my hope is to ask for Stage 4.

RPR: DLM says he supports Stage 4 with no need to speak.

JHD: Thank you.

SYG: Sounds good.

RPR: +1from CDA. MLS: it should be in the next Safari release. And + 1 from DE. Okay. So I think this is all positive. Just final check: any objections? No, there are not. Congratulations, you have Stage 4!

JHD: Thank you, everybody. And thanks to Justin, who championed the majority of the way. I don’t believe he’s here today.

RPR: So yeah, we thank Justin as well. Okay, good.

### Speaker's Summary of Key Points

### Conclusion

- Achieved Stage 4

## Promise.withResolvers for Stage 4

Presenter: Peter Klecha (PKA)

- [proposal](https://github.com/tc39/proposal-promise-with-resolvers)
- [slides](https://docs.google.com/presentation/d/1UvJSnt5B6tsXs-5A0zgg01cdFCtk6X2rAok6Z4Wp4Mo)

PKA: So this is the Promise.withResolvers. Shipping in Chrome. Implemented in FireFox. And also in the Safari technology preview, as far as I can tell. There are tests merged and the spec is approved by the editors. So I, too, am asking for Stage 4.

USA: There’s support on the queue. First up we have Daniel Minor

DLM: Looks good. Thanks.

USA: Thanks, Dan. Next we have CDA on the queue with support as well. And that’s pretty much it. Let’s wait for a second. Nothing else on the queue. Congratulations, Peter. You have Stage 4

PKA: Thank you.

### Speaker's Summary of Key Points

- Shipping in Chrome, FireFox and Safari Tech Preview

### Conclusion

- Achieved Stage 4

## ShadowRealm Stage 2 update

Presenter: Leo Balter (LEO)

- [proposal](https://github.com/tc39/proposal-shadowrealm)
- TODO get link to slides

LEO: Thanks, everyone. Just for the very recent news, I am finally now the product owner for the team working with ShadowRealm, internally at Salesforce. This is two workdays news. So this is very recent for me. But it means I will be more active here with TC39 within this proposal. As we want to move it ahead. Updates as we work on Stage 2. This is not a request for Stage 2 advancement. Please don’t expect this to happen. Thank you. We continue the work, we are sponsoring the work to meet the requirements needed to return to Stage 3. And this is like the very high-level summary of this, overview of the implementation done – that was done, we have some small improvements to the ECMAScript proposal spec. Most of the work resides within the HTML and WebKit implementation. Right now for this V8 implementation of the overview, this is a few weeks out. ShadowRealm is complete as far as the V8 goes. Of course, there are small changes here and there being discussed. We are waiting right now on the blink integration and how the APIs should be included in the global for the ShadowRealm global. The exposed is being used right now. And blink has made some progress in completing the snapshot for ShadowRealm. This is a big chunk of our work. HTML integration. There was a huge PR rebase. Thanks to Igalia, we got that done. And we are keeping it renewed, as the changes keep coming to HTML. There is also work to align with the new modules integration. There is an approach discussed with Nicolo, Dan Ehernberger and being applied to what we have with the HTML integration of ShadowRealm. We have some preliminary editorial changes to the HTML specification. We have been going to SES discussions, for the host integration changes for the CSP unsafe-eval protection. And a separate discussion, disciplinary for the host ensure can compile strings change. As far as I understand, there’s been a pre-discussion with the editors, and there’s a separate discussion at plenary. It’s a longer one and I am not going into details right now. Yes, please join in, if interested in ShadowRealms.

LEO: For the WebKit implementation, we have updates on the – yeah. We still have updates done with web platform tests, which we went into – want to continue with quality work, testing the current implementations, current branch against WPT in Test262. Continuing to look at coverage review. There has been like a few requests that needed updates. It’s keeping everything renewed and good to learn when ready. And moving forward, we have this work being done for the global object. We have other work, going to be discussed here at this plenary. And we have work that we intend to do for WebKit implementation. And, of course, like, everything else keeping everything green for when it’s ready. So maintenance for the proposal part are also like implicit. If we have any questions or comments, this is all the updates that I planned for today. It was intentionally short and sweet. Hopefully for everyone. Any comments or questions for anyone, I am here to try to answer them.

USA: There’s a comment by Ashley, who says, please update agenda with links to slides. And that’s not just for this item; it’s previous items were missing that. That’s just general.

LEO: Of course I will. As I mentioned, it’s a couple of days that I came back to the team. So this has been like a little bit of a last minute and I was only able to do this thankfully for the continuous updates from Igalia. This is a compiled list of updates that we had from Igalia. And I will do it today.

SYG: Hi I want to point out the areas of focus, this update shows seems to not be aligned with the original concerns, which were around which APIs to include and out and all of all the APIs on the web, how do we get confidence that this do not need special normative changes to be handled in ShadowRealms, given that’s what Mozilla found. Do you updates on that area

LEO: Shu, the answer we have for that is part of the HTML integration. Getting the HTML integration resolved, I understand the API will be like clearer out there. So this is like the very next work, what is coming after, global object is like the next step. But APIs also like part of – the resolution that we want for HTML integration, when I say that, it’s fulfilling this. I am aware to Stage 3, without the resolve. Thanks for the reminder, sorry about the brevity of my updates, not including that, making that clear to you. But yes, you are totally right.

DE: +1 to SYG’s comment. I did want to note that one of the concerns raised by Daniel Minor was the lack of tests for the integration beyond the generated WebIDL tests, and I am happy to see that Rick Waldron began on the tests. I am looking forward to more progress there. I am awaiting to hear the results of which APIs will be included. For example, should any API that involves IO, but not access to the DOM, should that be included? That’s a key question.

LEO: This is part of the – right now we are using the WebKit implementation to asserts and making use of the tests provide good coverage. We work together, so APIs will – when APIs are defined, we need more updates on the WPT part. And once again, the resolution of HTML integration, we need to get these inserts concluded as well

### Speaker's Summary of Key Points

Active work is again taking place on the Stage 2 ShadowRealms proposal, supported by Salesforce’s sponsorship of Igalia. This includes:

- Development of the WebKit implementation
- HTML spec editing, including a PR rebase
- Discussions around CSP and unsafe-eval, in SES meetings

### Conclusion

ShadowRealms remain at Stage 2. Multiple concerns were raised in discussion, and these will also be addressed as part of ongoing work towards Stage 3:

- Revisiting and listing the APIs supported in ShadowRealms
- Web platform test coverage

## RegExp Modifiers Stage 3 update

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-regexp-modifiers)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkpR3y23lo5uqnkyQVA?e=UIpIZP)

RBN: All right. So RegExp modifiers was discussed several sessions ago, when there was a review of Stage 3 proposals and Stage 2 proposals that were not updated. I wanted to circle back. There have been a few updates to the proposal since that time.

RBN: Before I get into that, just a brief summary of what this proposal is for those who haven’t looked at it in a while: the idea is to be able to within a regular expression introduce new modifiers, which are a subset of the RegExp flags available and remove existing modifiers so you may for a specific portion of a regular expression pattern set specific flags for that pattern. The flags that are supported are currently limited to only the IgnoreCase, multiple line and DotAll modifiers. So updates with the proposal repros and the specification text: it’s been updated to match the latest version of ECMA262, including the changes that Kevin mentioned, and the recent changes related to the addition of the RegExp “v” flag. A new Record now captures what was previously ambiguously closed-over input and what flags were currently set, so now we are now using the new RegularExpressionRecord in place of the Modifiers record, which served the same purpose. In addition, because this RegularExpressionRecord has been threaded through the AOs for regular expression semantics, I can now use those to dramatically reduce the size of the spec text necessary for this feature. There is a pull request to the ECMA262 proposal and a pull request for Test262. I would like to note that, prior to 5 minutes ago this link was incorrect and was pointing to the wrong test PR. The slides have been updated. There is currently an implementation pull request to engine262, but I am seeking additional implementations. If there are any engines that are currently looking at the possibility of adding this, please reach out to me after the session, either via GitHub or Matrix, to discuss which issues have been filed to track this proposal so I can follow any progress updates. And that’s all I really have to share. Thank you.

RPR: Okay. Thanks, Ron. There’s no queue at the moment. I know we didn’t have any debate. But a couple sentences conclusion or . . . on the key points for the notes.

### Speaker's Summary of Key Points

The proposal spec text was modified to account for the new RegExp “v” flag feature. As a result, the proposal spec text itself is now much simpler without requiring any semantic changes. Champion is seeking implementers to provide feedback on potential implementations.

### Conclusion

RegExp Modifiers remains at Stage 3 as no advancement was sought at this time.

## Provide source text to HostEnsureCanCompileStrings PR #3222

Presenter: Nicolò Ribaudo (NRO), Philip Chimento (PCF)

- [PR](https://github.com/tc39/ecma262/pull/3222)
- [slides](https://docs.google.com/presentation/d/1MRItYS_b1hwKstlqlfoD8mgbecS2OkTSiPFVWHs3Y_8/edit?usp=sharing)

NRO: We are here today to propose some changes to how ECMA262 exposes information to embedding specs so they can enforce security policies. Diving into the changes we propose, how the CSP works. It’s the mechanism used in browsers to decide which resources can be used, and which code awaited and load images or styles or other types of like web resources from. And when it comes to JavaScript there are multiple ways of front code and multiple ways to configure your content policy to block different I think. And like in browsers we have external scripts and uploads a file and executed. And workers, the same but execute – well, in a different work up. Line code, script text and in event handler and some like eval or eval-like functions. Eval function and all the various constructor and set amount and parens providing at the web platform. And for each one of those we can restrict scripts in different ways. When it comes to external script tags, there is a policy, a directive called script-src SC to disable all scripting or it can be used – on a load from the same domain or from other places to domain or protocols. And the same applies for workers, just with a different directive called worker-elem. You might want to have different restrictions for different context given the work is more isolated For inline script, there is no URL because the code is there. And we have three main ways of controlling what can be executed, understanding the safe-inline value or a specific way to load the code to be executed just once and then like nobody else can reuse to try to evaluate other code. And finally, and this is the most important one for this presentation, we have these – we have a way to pass through the browser some hash. And when we try to execute 7-line script, the browser will hash the code. Check if it matches the hash provided in the content policy and only allow executing if like it’s the expected code.

NRO: It works similarly for inline event handler, except by default hash, unless we explicitly enable with the unsafe hashes policy. So if there unsafe hashes policy, then the host or the browser will also check the hashes for inline event handlers Then we have the various evaluators, like eval. There is like a Boolean switch, it’s enabled and in this case, set amounts are allowed. Then disallowed. There is no way to control this. We are hoping to be able to change this in the future. And Philip, do you want to continue from here?

PFC: I want to talk about what things we want to enable by making this change that’s in the normative PR. The first one is that sometimes eval is okay. This slide shows a reason why you might want to allow a use of eval with a particular string known at compile time, and not block indiscriminately: feature detection. Knowing whether a certain syntax feature throws a SyntaxError, when you evaluate it in your environment. And then use that feature detection to import code that uses the syntax feature or a code that is transpiled or otherwise written to not use it.

PFC: The other one, which is in particular my motivation for introducing this, is that the only way to synchronously execute code inside a ShadowRealm from the outside of it, uses the mechanism of eval. So you can asynchronously import a file [which would be subject to different CSP policies, but using the `ShadowRealm.prototype.evaluate` method, it goes through the HostEnsureCanCompileStrings hook, and it’s subject to the `unsafe-eval` CSP directive. So you can’t indiscriminately block this without forgetting code inside ShadowRealms.

PFC: One idea that exists on the CSP side is to introduce a new value for the `script-src` directive called `unsafe-hashes-eval` where you can specify precomputed hash for code that you want to allow executing eval on. So this would give you the ability to evaluate strings known at compile time while still disallowing anything else that was unexpected or computed at runtime or whatever.

PFC: The way this works on the ECMA262 side is, we have a host hook called HostEnsureCanCompileStrings, which allows the host to block evaluation of strings containing JavaScript code. Currently, this host hook, it takes a reference to the realm in which the compilation is requested. It doesn’t receive the actual string. Another thing to note, if you pass something that is not a string to eval, that returns immediately, before the host hook is called. The host hook is never called in that case. The change being proposed is that we would pass the string argument to HostEnsureCanCompileStrings, which would allow the host to block or not block based on the contents of the string. Should we let the host distinguish between direct and indirect eval? There's a valid use case for direct eval when you want to do the syntax feature testing example from a couple of slides ago, but also – there’s a case for indirect because of the scoping rules.

PFC: The other time when code is executed and consults this host hook is the Function constructor and its friends AsyncFunction, etc. So these might be blocked by HostEnsureCanCompileStrings. However, these constructors take parameters as well as the body of the function. We stringify the parameters and join them into a function declaration and then evaluate that. So this is a different situation than the simple case of having eval and passing the string argument to the host hook. What could we pass to the host hook here? Should we pass the dynamically synthesized function code, or should we pass the stringified arguments, or should we only pass the body if there are no parameters? There are cases to be made for all. The question; should we let hosts distinguish between a function constructor and the evaluation?

JHD: I realize this doesn’t help ShadowRealms. I have done a feature test and never used this, but I have used `Function`. But it seems to me like the safety concerns around eval are mostly around direct eval, if I am using the term correctly. and indirect eval is only a problem in that it’s – it looks like direct eval, but functions isn’t a problem and lumped in eval. Like, in general, I think it would be great, if sites that blocked eval didn’t block new function. And regardless, I like the idea of a browser being able to – a site being able to say, these strings are safely `eval`-able, so things can be allowed. I don’t know if that – unless you allow it – allow with `eval` or treat the ShadowRealm differently from direct eval, I don’t know how to fixes it, but all sound good to me and I accept for ShadowRealms, I don’t need direct eval at all or indirect eval. You use Function for everything. But yeah.

PFC: That’s good input.

RPR: Go ahead.

NRO: We will finish going through the slides and discuss this then. There are a couple more slides.

PFC: Shall we move on to the next slide, Trusted Types. Trusted Types is a W3C proposal that is pretty closely related to this. It wouldn’t be part of ECMAScript, but it’s a proposal for objects that allow you to mark a string as trusted. You can create a policy object, with a method, and the policy acts like an object capability that you can pass to code, that allows it to pass in some HTML string or some JavaScript string, and the policy does whatever it needs to do so ensure that the string is safe and then you have an object that encapsulates the sanitized HTML or JavaScript or whatever. So there’s the code sample here on this slide showing what you would do for JavaScript code. And then the idea is that you pass this TrustedScript object, which contains the sanitized JavaScript code, to `eval`. I initially thought that this normative request would also enable this, you know, in fact, the pull request it was based on, that Mike Samuel worked on a few years ago, it was with the goal of enabling Trusted Types, but it’s actually not the case. Because currently with `eval`, we just return the value directly, if it’s not a string. So it will require another normative change to enable Trusted Types in this host hook. And that would actually be a more breaking change, if I can characterize it like that. We’re not proposing that right now. But I want it to be on the radar, that further changes may be required if we want to support Trusted Types in this host hook. Should we move to the discussion?

NRO: I have an answer to what JHD started earlier. JHD mentioned that in general, `new Function` is better because it doesn’t have the special behavior that eval has. While working – thinking about this, we are trying to like work on this spec change with PFC, something we realized as mentioned here, `new Function()` has this problem of being dynamically constructed. The code that is executed is not statically available . . . and the way it’s done with hashing is that you have some tool at build time hash the code for you, that you might have marked in some way. And if we just have `eval()`, the code is there. You can see the code being passed to `eval()` in many cases. At least in the examples we gave you before, it’s easy to get the code and hash it. While for `new Function()`, it is more complex because the final code that gets executed is not there yet. We are missing a slide for this. But what we are trying to get consensus on with this discussion, is specifically changes to HostEnsureCanCompileStrings. The decision is, how much more information to explicitly provide to the host? Right now, it’s nothing. The questions are, can we expose the source code to the host hook? And if yes, should we let the host distinguish between `eval()` and `new Function()`, or eval and indirect eval. And expose the source code of new function at all to the host given its dynamic?

NRO: I see a clarifying question from SYG: “is the unsafe-eval-hashes thing already in CSP, or being proposed in parallel?” That’s being proposed and worked on in parallel to the changes here, these would unlock unsafe hashes. It’s currently just impossible to specify these. Because this doesn’t expose enough.

SYG: All things being equal, I guess my preference would be that you would have a host hook that is expressive enough because – another slide for Trusted Types. You could do a – orthogonal change to the same host hook. Because as I understand it now by this presentation, the current proposal is to pass the string contents, which would not solve the host hook – not the Trusted Types expressivity of needing to check like the bit on an object. Is that correct?

NRO: Yes. That is correct.

SYG: Could you go into a bit about why your preference is the current shape of the proposal instead of just passing whatever? Which indicates a string would be a string.

NRO: Yes. Because right now, for – if you pass an object without that, immediately before calling the host hook. And Trusted Types, you call the host hook and then – first check if it is allowed to execute some code. And then return. And so it changes the order. So we are starting with this minimum version that doesn’t have any changes to current semantics.

PFC: Unless we wanted to somehow specify Trusted Types in ECMA262 as well, the host hook would need to tell you whether this is – if only the host hook knows about the TrustedScript object, then the host hook needs to give you the string code back that `eval()` would need to evaluate. Otherwise, on the ECMA-262 side, we couldn’t tell the difference between some object with a `toString()` that returns a fragment of code and the TrustedScript object, unless we know the internal slots of the object.

SYG: Okay. Thanks.

NRO: So let me phrase exactly what we are asking for. There are two points: one is the `new Function()` case, we don’t know if we want to make the change. We don’t know if the change makes sense. And for the `eval()` case, it’s how much info is exposed to the host. If there are other questions, I can try to phrase a specific question for consensus to see if we agree on that.

DE: +1 to SYG’s point. If we pass the original argument of eval before to a string that could be more powerful in the context of trusted types. If we added `Array.isTemplateObject` then you could make an object that’s branded that wraps a string passing to `eval` [NB: DE meant to say, the Function constructor], indicating it’s a literal string. It’s an example of what Shu was talking about with Trusted Types integration. I think it’s very good to bring up this topic and to add more information with the hosts. But honestly, I don’t think that this committee should be caring too much about limiting the information of what is passed to hosts. As long as the information makes sense on JavaScript’s side and as long as there’s interest from the hosts and potentially using it, that should be enough to justify this.

NRO: One problem with, as you mentioned, the Trusted Types, passing the object, as they are, is that that doesn’t work for extending hash basis eval. It’s the current string. The host would need to stringify the object. And that needs a new function

DE: What if you pass both the object and the string?

NRO: That would work. For now, we can start with passing the string, and if someone picks up trusted types, then the object can also be passed.

DE: Well, I hope we can have this communication about Trusted Types so it can move forward because this isn’t asking for very much. The design space is small. Let’s try to go through it.

RPR: That’s the end of the queue. And Nicolo?

NRO: Let’s separate the `eval()` and `new Function()` parts. For `eval()`, I want to ask if we do have consensus on passing the string to the host. And alongside with that, a way like also passing some enum, to distinguish between direct and indirect eval given the concerns with direct eval. This is just passing the string to avoid changing the order in which operations currently happen in eval. In the future, if you want to potentially change the order, we can also pass the object. And this is just for `eval()`, and not `new Function()`, for now. So is there any concern with passing this info to the host?

SYG: Responding to the enum, is there a use case from the CSP side or the trusted type side to use that eval. Does anything??

NRO: There have been some ideas about potentially having something in direct eval because it’s much easier to validate security properties of indirect eval than of direct eval. But it’s not a concrete proposal yet. It’s mostly discussions going on and RegExp and having to avoid coming back here again, asking for this change, given that it’s very minimal and doesn’t affect how things currently work.

SYG: I will voice my concern which may be on the CSP side. The concern of surfacing the enum is that CSP is something of a failure in terms of crafting understandable policies, like crafting the policies is the perennial challenge. And the more bits you expose, the more knobs, it’s the harder to craft. Exposing function versus indirect versus direct eval is a knob that makes sense in most of the cases. And it doesn’t harm for us, to expose that to the host, but I think that is more an editorial concern. I want a default, if the host does not do something, like we do the default conservative thing, instead of by adding this extra knob we open the design space, and not necessarily way, that invites misconfigured CSP even more than now. As long as it’s surfaced in some way, I am happy. I think the actual semantic difference is scoping difference. What is the difference between `new Function()` and `eval()`.

NRO: It has access to the local scope.

SYG: Are you asking for a two- or three way—

NRO: Just for `eval()`. Not for `new Function()`.

SYG: I see.

NRO: Then I'll move to the next and ask for something there. The main concern is because we didn’t have an answer for what to do with `new Function()`. And consensus for `eval()`. So this would be a two-way enum for now. Yes, we will make sure to – if exposed, make sure to relay your comment to the CSP folks.

RPR: All right. We are coming up on time. A minute or two. If you wish to summarize.

PFC: Shall we ask for consensus on the `new Function()` stuff? We could propose passing only the body, and in the case where there are params, at this time, revert to the previous behaviour because the params may contain executable code as well, so we avoid making the host dynamically construct its own function. Maybe that’s a good consensus for now? I don’t know. What do you think, Nicolò?

NRO: Okay. Let me prefer this and to be clear: neither I or Philip feel strongly. The best way to pass the string of the body and only in the case where `new Function()` receives just one argument. So just about it. And if we have consensus for that, so that’s an idea, the question is whether we should add a third value to the enum, distinguishing `new Function()` and direct eval, or whether it should be the same type for indirect eval.

RPR: I would say there’s a lot of questions here. We have about 30 seconds left.

NRO: Okay. Do we have consensus on passing the stringified body to the host, if there are no parameters?

KG: Sounds good to me.

NRO: Okay.

NRO: And I guess there’s specifically for Shu. Consensus on like distinguishing `new Function()` and direct eval with that enum?

SYG: I don’t understand why we would distinguish `new Function()` from indirect eval, yeah. Semantically, don’t they have the same properties?

NRO: One difference is the parse is slightly different, one is returned, other one not. Let’s just not distinguish them.

PFC: Yeah. The host could distinguish anyway way because we have to pass the parsing goal in the case of `new Function()` –

NRO: No, we don’t – wait. We don’t need to parse. Like, passing the parsing goal is equivalent to distinguishing them with an enum. That's an editorial question, how to do that specifically. So the question, I guess, is whether like we want to let the host distinguish between `new Function()` and indirect eval or not.

SYG: I am going to say no. I am going to say we should distinguish direct or indirect eval, like the actual scope differences, until such a use case presents itself.

### Speaker's Summary of Key Points

In HostEnsureCanCompileStrings, we are going to pass the string to be evaluated to the host when using `eval()`. When using `new Function()`, we will pass the function body, if and only if there are no parameters. We will also pass some information to the host, specifically a two-valued enum, distinguishing between direct eval and indirect eval.

## Base64 Uint8Arrays discussion

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-arraybuffer-base64/)
- [slides](https://docs.google.com/presentation/d/1kq4AyZquZAObuG4Z4099FZo7emYUi7JnR07SZ4sue6k/edit?usp=sharing)

KG: So I put this on the agenda originally as potentially going for Stage 3. Please ignore that. I am definitely not going for Stage 3. This is just an update which ia a request for feedback on some things. So recap, proposal is on GitHub. There's a playground, there’s spec text, but some of that is in flux, so don’t expect too much from it. So fundamentally, the thesis is I think it’s worth having a built-in mechanism converting to and from Base64. And that's the purpose of this proposal. There's a basic API, which hasn't changed very much, although none of this has changed recently. Some of it has changed since the first iteration of the proposal. Basically, a prototype method for turning a Uint8 array into a Base64 string or a hex string, and conversely methods, static methods, on Uint8 array for taking a Base64 or hex string and giving you a Uint8 array instance. There's a lot more details which we'll get into. I do want to explicitly call attention to the fact that this is only in the current iteration of this proposal, this is only on Uint8Array, so this is the first time you would have something that is specific to one typed array and not present on all of them. So we could instead put it on ArrayBuffer, for example, although that's annoying because UintDataArrays are views and so putting it on UintDataArray means that you are able to encode only a portion of the buffer. In the first version of this proposal it was on ArrayBuffer but I moved it to Uint8Array by request. An alternative is to have a new global, like a Base64 global, that would have toBase64 and fromBase64 and so on. If someone feels strongly that this would be a better path, please get on the queue. Right now I personally prefer the placement on Uint8Array. And we can discuss things either, you know, interrupting or at the end whenever people want to talk about stuff.

KG: Also, there’s an options bag argument. The second argument to/from Base64, the first argument to toBase64, allows you to specify an alphabet. Currently the only two alphabets are “Base64” and “Base64URL”. Default is “Base64”. There has been a request for the ability to write to an existing buffer. We may or may not want to leave that for a separate proposal or a separate API. But it’s within scope for this proposal, something to think about. I’ll come back to that topic later.

KG: Among ways that Base64 and coders and decoders across languages differ is in their handling of characters that are outside the space of a legal characters in the alphabet and outside of whitespace as well; whitespace is handled differently. Some APIs unconditionally reject evening outside of the alphabet. Some allow you to accept the whitespace, usually by default. Some allow you to accept any character outside of the alphabet and just ignore it, the same way they ignore white space. My current plan is to make it an error to get anything that is not whitespace and for default to be -- to accept whitespace, but to have an option to allow you to reject whitespace as well. That’s consistent with some, but not all other languages. I personally don’t have a use case for -- and I’ve never encountered a use case for accepting non-alphabet characters and just ignoring them. That seems like behavior that I would only do with a very good reason, and I don’t have a very good reason. I don’t consider matching PHP and Python and node good enough reason for this without a particular reason to do it. But, again, if you disagree, please get on the queue.

KG: A somewhat larger topic: How to we handle inputs whose length is not a multiple of four? So as you may or may not be aware, standard Base64 includes padding bytes to ensure that the output length of the output is always in total 4. I should say padding characters, `=`s. Some implementations allow you to omit those equal signs. For example, `atob` on the web allows you to omit those equal signs. So atob in particular says you can omit the equal signs, but you still have to have - the input has to be valid if you had appended equal signs. So because when there is padding it is precisely one or two equal signs, this means that if the length is equal to one mod four, then atob will throw. It will still consider that invalid, not just not padded, because there is no padding that would make that legal.

KG: So these are two possible behaviors, to just throw if it’s not padded or to throw if it could possibly be padded. But another possible behavior is to stop and give you the extra characters somehow. This is common in some parsing paradigms, to have recoverable parsing, to allow the user -- to parse as much as you can and then allow the user the decide how to handle the exceptional case. This is only relevant to decoding Base64 strings because when you are generating the strings, you can just ensure that it’s correctly padded. So it’s only relevant to specifically the Base64 decoding API. And, okay, so if we are going to allow the third thing, we need some way of getting the trailing input to the user. There’s a few possibilities, and I’ll run through some of them and give my preference. One possibility is to say if you request this kind of handling for extra care using the input, then those extra characters get attached as an additional data property on the returned Uint8Array instance. So this is an allocation, an allocation in the common case that you are not trying to do anything special with the handling. You’re just throwing or assuming it’s well padded, you don’t have no know about these options, you always get an Uint8Array and maybe there’s an empty string and that doesn’t affect your life at all. Another possibility is to always return a pair. Probably we wouldn't want this to be based on the presence of a flag. So it might make more sense to have a separate API that gives you this pair. The standard design question of having a Boolean flag versus a separate API. But this allows the base API, you might call it, to not have to worry about this option. And you also avoid sticking data properties onto a Uint8Array, which some people find distasteful. Another property is to just always give you this pair, but only populate the property in the pair if the flag is specified, so the API shape would be consistent, it would just be slightly more annoying in the case that you don't care about the extra characters.

KG: And then finally, if you recall, I talked about the possibility of having a bring your own buffer method and method that allows you to write into an existing buffer. The web platform has such an API with the TextEncoder.encodeInto API. The way the web platform handles that is that it returns a pair ‘read’ and ‘written’, an an object with two numeric properties that tells you how many bytes it was able to consume from the input and how many bytes you were able to write into the output. The input might be too large or small to completely fill the target buffer. And if we were going to have such an API anyway, then the `read` property gives the user the ability to figure out what the extra characters were themselves, because it tells you exactly where in the string it stopped reading. If we have this option that says “stop reading before the final chunk if the final chunk is not a multiple of four characters", then by specifying this option, your `read`
would potentially be slightly smaller when specifying this option and you would be able to recover by looking at that property.

KG: A nice consequence of this is that it would allow you to build a performant streaming decode in the userland. The error recovery information that I’m suggesting in previous slides is sufficient to give you decoding in user land, and by performant, what I mean is specifically it doesn’t require an iteration over the entire string in user land. You can just slice at the relevant point or decode the relevant characters. And get that information out of the API.

KG: That was a few topics. We should go to the queue.

WH: I support the decision not to allow and ignore other characters since this could go badly wrong if somebody has, for example, a Base64 string interspersed with comments. If you ignore the character which starts a comment and start parsing the comment as Base64, you can cause all kinds of mayhem.

KG: Also, it’s awkward if you specify the wrong alphabet if you say it’s a Base64 string, but the string is in fact Base64 URL there’s a similar problem there. Okay, so noted. I will continue on with my plan to reject them unless someone speaks up to the contrary.

LCA: I like the direction. I like the idea that we would have sort of one encoding API, one decoding API, and then additionally the decode-into API. I think this solves the streaming case, this solves, as you mentioned, the return extra bytes or the APX (?) use case, and people that already know how to do sort of streaming without a streaming primitive, like web streams, would already know how to use this because it’s a more text encoder stream. It’s good.

KG: You’re supporting specifically variation 4, or any of these variations?

LCA: specifically variation 4.

KG: Okay.

LCA: From Base64 into and then additionally with that flag.

SYG: I requested BYOB as a thing to work on here. I want to preface this with saying I have no quarrel with having this as a follow-on API if that’s what people would like. I think the standalone API, the one-shot API does standalone and does not need to be held up on BYOB use case. KG, when you and I were chatting about this, there’s a half (?) idea that we have an in-and-out param. Why am I requesting BYOB, because there are use cases on the web platform where you really want to maximize the performance you get with a question decoding API, month so much for Base64, but we’re also thinking about an even more performance UTF8 decode API that is separate from text encoder, text decoder, and for that kind of API, you really want want to be able to bring your own buffer and it will be nice since we’re doing Base64, that the Base64 BYOB API that we design now is consistent and nicely symmetric with a future one that I would like the proposed for UTF8. That said, to maximize efficiency
, the most efficient API is one that you can decode into a buffer, add an offset, that incurs no object allocation beyond the -- maybe an options bag, because you can just cache that to be a singleton object. No about (?) allocation here goes to the extent of not even allocating the result object that holds read and written. One of the ideas that KG floated, which I really kind of liked, was we could instead have an in-out param where you -- where it is the responsibility of the caller to cast in an object that encodes parameters like the offset into which to start decoding, and that object is also an out param in that the written bytes would be updated on that object. So the -- it’s up to the caller to decide whether they would like to allocate a fresh object each turn or -- yes, okay, great, you already have a slide made, or maybe you just it right now. But basically something like that. So it kind of -- like, it is a decidedly a less ergonomic API, but I hope it is uncontroversial that BYOB chunking -- either the BYOB use case or the chunking use case and the streaming use case are advanced more in these use cases that can literally live with a tradeoff of having a less ergonomic API for maximal efficiency. And something like this is more efficient than having an intermediate-style API that is somewhat ergonomic, like returning a result object with read and written. While I can live with variant 4, though with the caveat of having -- of requiring an output offset in the input as well, I would actually be much happy were something like variation 4B. So for people supportive to have BYOB use case, I would appreciate your thoughts on this, if you could take a minute to read the slide and read this API.

KG: To be really clear, what’s going on, the call in the second line would mutate the object, the `opts` object from the first line. It would be updating a parameter rather than merely reading from it. I don’t think we do this in the web very much, but to give my own opinion, I’m fine with it. I kind of prefer matching the text encoder, this is also a request from Anne, but this is decidedly more efficient, so I’m fine with it.

PHE: Yeah, sorry. SYG, you show and you mentioned the offsets into those buffers, but not the available length for the input and output. Would that -- it seems to me that that would be necessary in some of these cases.

SYG: They will be updated on return from Base64 into such that if you know the offset is -- so, like, by comparing the two updated offsets, if you still have input left but the output offset is at the end of the buffer, you would know that you could not finish fully decoding. But, like, the information should be there. So I agree with you that you need to be able to derive that information from the output even if it’s not straightforwardly available.

PHE: I see, so the intent here, then -- I mean, it’s a little -- you’re not providing a general purpose way to encode into a buffer, into an arbitrary slice of a buffer, but you’re kind of using this as a by way to decode into a full buffer?

SYG: I’m sorry, I don’t quite follow. I think this is a full way to generally decode into a null buffer.

PHE: Imagine you didn’t want to write into the last byte of the buffer, the output buffer, okay? You have no way to -- I don’t see a way, sorry. I’ll state that differently. I don’t see a way to express that when using this API.

SYG: Sorry, okay, I’m still trying to understand the use case. You have an input that you do not -- you do not want to fully decode it, is that the use case?

PHE: No, you’re decoding it into a buffer that has other things in it, right? So you might not want to write past a particular offset.

SYG: I see, regardless of how long the input is, you want to stop decoding at some length?

PHE: Right. Basically what you’re doing with the input offset is a providing a sub-array that runs from the -- the input offset -- or output offset in the case, sorry, to the end of the array. And I am saying, like, why is -- why would we limit it to that?

SYG: I see. I don’t want to put words into KG’s mouth here. I am -- I have no issue with -- like this, this is pretty unergonomic already. I see no issue adding more offsets to make it fully generalized.

PHE: your goal is to have it do the whole buffer in case?

SYG: Yes.

PHE: The assumption is you would write to the end of the buffer?

SYG: Yeah.

PHE: Okay. Thank you.

MLS: I think MF and I are kind of in agreement here. I can’t think of any existing API that we modify the argument that we pass to an API. Can we think of any? I mean, it just seems kind of weird to do this, to modify ops, then. And especially since it’s like the last parameter, not the first. And the buffer, we’re going to put something in, but we’re not modifying a property in API that I can think of.

KG: I am not aware of any precedent, and I agree with you it’s weird. It’s just a tradeoff between, how much do we care about avoiding this allocation versus that weirdness.

MLS: I think it’s -- it’s not a JavaScript path, and I’m wondering if it ends up being a foot gun somehow. I can’t think of one, but it just seems kind of weird.

MF: Yeah, I just want to also say I don't have a horse in this race, so take it for what it is. But you did ask for feedback, and I'd say I think that without some extreme justification, it is just too weird to have the options object being written to. Also as a separate point, when we make these designs in the language, at least historically, we've done so with an acknowledgment of implementers' abilities to do things efficiently, but not with that as one of the top goals. And I have hopes that possibly in the future, you could avoid that allocation even with the original design in Variation 4. Obviously not when the object itself is used, but when it's destructured and used, you know how it is.

SYG: So what was I going to say? Oh, yes, I agree with MLS. It is unprecedented and weird. I’m just plotting on the other side of the tradeoff polarity. With MF, I do think that efficiency -- so I think there’s a difference in efficiency for APIs that we intend to be wide, like, generally useful utilities, and efficiency for admittedly more niche use cases that may enable a lot of performance, basically, like, the one-shot API I see as the former and this API I see as the latter, which makes it more acceptable for the weird tradeoff space. But that said, I won’t necessarily die on this hill either. I think variation 4 we can live with. I am somewhat skeptical of the des destructuring optimization, like, that is doable. It’s just -- like, that has to be a general thing. Like, we can’t build that optimization just for this API. And it’s unclear to me now how much -- how viable it is, I guess. I just don’t know. And I want to -- yeah, okay, I’ll just leave it at that.

KG: It’s maybe worth giving some additional color here in that apparently there’s requests specifically to avoid this allocation with the TextEncoder API, that the allocating result object for the TextEncoder API is not just theoretically expensive, it’s expensive in practice, to the extent that it’s possible that the web platform will have an update to the text encoder API in some form to allow skipping the allocations. So while this variation 4B is currently unprecedented, it’s at least conceivable that the web platform might want to do something like this at some point. On the other hand, TextEncoder already exists, and is precedent for this form, so maybe we could do the zero allocation version at some point if indeed TextEncoder adds a zero-allocation version.

EAO: Sorry if I’m repeating something that was mentioned earlier, I think I just managed to catch up with the notes and so on. I didn’t see in any of these variations the possibility of a user giving a callback function, like `onExtraChars` that would be called with the extra characters if it’s defined. Is there a reason we couldn’t do this? Because that would feel, to me, like the most JavaScripty way to solve this.

KG: I’m not aware of anything that would not make that work. The idea hadn’t occurred to me. My own opinion is that something like this would be more JavaScript-y. A callback to return half of the values is kind of weird. But it’s certainly an option.

EAO: The benefit of the callback would be that you could basically do anything there and you could also know that if you’re not ignoring -- not interested in that. And to counter the JavaScript-iness of this, is that here effectively either we’re always returning this extra wrapper object or we are changing the shape of what is being returned based on the option. But I presume you’d be saying that it would -- this API would always have this extra wrapper object around it?

KG: In this variation 2, yes. There’s also the variation 1 version where you just stick a data property on the Uint8Array. And then you could do that unconditionally regardless of the presence of that link. But, yes, these are all feasible. It sounds like, though, people are broadly in support of variation 4 specifically, with the -- SYG wanted 4B, but could live with 4. This is missing the offset parameters so it would be a little more more complicated than it appears here, but only a little. So can we all live with this? I would like to go this route, if so.

LCA: I replied to EAO’s question or comment. Is it possible -- like, like, do implementers think that a callback API would be slower or faster than make the difference between variation 4 and 4B? Like, I can imagine that there could be a footgun here where somebody creates a closure for every call, which I’m sure would be slower, but I guess if you sort of have a closure that are used the same over and over, maybe it’s the same speed as 4B? This is not a question toKG , but to SYG and MLS.

SYG: Can I answer someone in the queue or go on.

SYG: I would like to respond and then I have a MLS’’s response and then my original other item I’ll take after MLS’s response. I do think the callback will be slower because, yes, there’s definitely the closure footgun, but also like you’re calling something. Like, the best case, even if you ignore it, even if the function is no-op, you’re still calling a function. And in a built-in, you would immediate to depend on some deep inlining to actually get rid of the call to figure out the thing is a no-op, and that doesn’t happen until later tiers in The JITs , but also, like, if the common case that you want to do in the callback is literally to, like, exfiltrate the extra characters so that you can loop around again in the streaming case to process them, like, that is for sure a slower way of doing that than to directly return the leftovers. MLS, would you like to --

MLS: If you’re going to make a call, it’s going to take a lot more time. Putting property on an object -- or updating an property on an object is a lot cheaper than making a call. And the question is, okay, if you don’t call, if there’s not any extra, you know, data versus doing a call, you know, yeah, maybe -- maybe it would be faster, but the whole reason that you want to have the extra characters, you know, with the callback or with a property is because you expect it.

LCA: Okay, thank you.

SYG: So I can live with variant 4. So,KG, I want to end to the rest of committee, I want to be explicit about something, which is I’ve alluded to this maximized -- like, maximal efficiency API that we would like to design in the future for UTF8. This does not preclude that. Presumably we would want -- so one concrete scenario here is that we ask for consensus for variant 4 exactly as it says here. Namely a return -- a result object with read and written properties and it does not take offsets as inputs, like you are expected to make a Uint8Array TypedArray to go into, and you are expected to create a sliced (?) string if you were to -- if you want to limit the input in some way. Is that what you’re asking for KG?

KG: No, I’m proposing to include offsets. Sorry, I should have written this more. Also, it will probably look slightly different. I don’t think I’m going to have a Boolean. I’ll have a three state “how should I handle the final chunk?”. But the intent would be to support offsets. I don’t see any reason not to.

SYG: Okay

KG: I’ll bring that up real quick.

SYG: Then I will refine my comment. I think I can still live with it. But it makes it much harder, I think, to introduce a really zero-allocation API in the future because there will be too much overlap with the current variant 4. If the current variant 4 does not include any offset, then you can say, okay, maybe we really want a zero allocation one, that’s a static method that takes all the offsets as well as this in-out param or some other trick, or we have really zero allocations. I think -- since you’re not asking for Stage 3, I would like to think more over this between this meeting and the next, but I think I can still live with variant 4 with offsets with the result object. But if the performance constraints are too great to really have zero allocations, what is the committee’s thoughts on “does this variant preclude future ones that are slight variations on this one that would have zero -- actually zero allocation?”

KG: Yeah, I’m fine with that, for what it’s worth. I think that, like, slight variants for higher performance is, like, a pretty normal thing. It’s unfortunate that, like, text encoder encodeInto already exists. But having a slight variation of text encoder encode into and also a slight variation of Uint8Array to Base64 encoder is not actually a problem for me.

PHE: Yeah, sorry, I wanted to come back to a passing mention that SYG made just for clarification. It’s related to KG’s earlier question about putting functionality (?) on UTF -- excuse me, on Uint8Array or somewhere else. I’m personally not super excited about starting to have TypedArrays that -- where some have certain methods and some don’t. It’s been consistent for a very long time. The question of having a separate global, I mean, I believe prefer to see a separate global. One of the questions or one of the points that was raised against that is if there was a Base64 global, it might only have two methods or four methods, which doesn’t seem like much. But we should also keep in mind here that this proposal includes hex. We never talk about it in committee, but it does have hex methods here. And further, so I was curious, so that would be some more methods, potentially, depending on the name of the global. RGN in an offline email had-pointed out an example of a language where there’s basically encoding, so it could be encoding could contain Base64 and hex and other things. Which might make it a little more general.

PHE: The question to SYG, coming back around, SYG, you mentioned in passing a future proposal about more efficient UTF8 encoding and it wasn’t year to me when you said that whether that was a proposal intended for this committee or another body, and I just wanted to understand that, because it might have some bearing on the separate global topic.

SYG: It’s not entirely clear to me either. I think probably this body, but I think there are also good arguments to be made that the more efficient thing ought to extend encoder/decoder, and this case we want for the proponents use case we want will probably look significantly different, so we consider it also possible to propose it here in TC39. That said, I don’t have strong feelings.

SYG: Wait, hold on. I just lost my network connection, but I also just heard Peter’s response to me. So you can still hear me?

PHE: Yes.

SYG: I won’t close this window and when I finish my thought, I’ll try to restart. I don’t have a strong feeling whether we go with the base will be I also originally suggested the Uint8Array because of the window thing we get for free because it’s already a window view. But I don’t have a strong -- so long as the API accepts TAs to TypedArrays, I think that’s the high order bit. What the namespace is, I don’t feel strongly.

PHE: Okay, so, you know, a maybe. But sure, appreciate it.

KG: Yeah. I’d like to request other people’s feedback on the global versus the Uint8Array. I, like, have a mild preference for placement on Uint8Array, but it’s generally pretty mild. Peter, as he says, prefers a separate global. I am okay with anything that the committee is okay with here. But I would like more opinions than just, like, well, PHE kind of wants a global and I kind of don’t. Can anyone else give us something to go on here?

LCA: Yeah, so for the decode -- sorry, for the encoding, so from bytes to text, I would prefer it as a prototype object, prototype method, just because that’s morering (?) knowledge and we can call buffer dot 64 hex, which is especially in the use cases where this is pretty useful, like you just hashed some data, you’ve gone back into Uint8Array, and you can go to a single line, just by trading methods. Which is nice. For the decoding use case, I don’t really have as strong of a preference. But I feel like if we’re going to put something on the prototype for encoding, we may as well put the decoding one on -- like, on the object. So, yeah.

KG: Okay. Thanks. Anyone else have opinions about whether we are -- it makes more sense for whether you would aesthetically prefer or whatever to have a new global versus methods on the prototype and the constructor?

MLS: So I think a new global Base64 object makes sense if we have, you know -- there’s encoding, decoding and what your source and destinations for each of those operations. I can envision that you can do string-to-string in either direction, not just Uint8Arrays. But it’s -- I think that that’s -- if it’s more generic than just, you know, between an array and a string and back, yeah, I don’t know.

KG: Yeah, I should say also, I put in the slides -- no, I didn’t. Okay. Yes, as PHE mentions, this isn’t just Base64. It’s also hex. So presumably if we were doing a new global, either we would have, like, an encoding global that could contain Base64 and the hex versions or we would have Base64 and hex. It’s not just as simple as just a Base64 global.

KG: Okay, well, surprisingly few opinions from this body. I’m going to assume that that means that no matter what I come back with, everyone is fine with it, within the space discussed. So I will figure it out offline. Tentatively planning to stick with what I’ve presented. Because I heard a voice in support of it from LCA. And PHE objected and I don’t know how strongly, anyway, we’ll talk about it offline. Tentatively, I’m going to plan to leave it on the Prototype, but that may change. And no one else has opinions currently, so I’m hoping that is fine with everyone.

KG: The other thing I most wanted to discuss, it sounds like we’re all good with approximately variation 4. I should mention this partial chunk handling that says, you know, stop before the final chunk. Probably it makes sense for this option to be on the non-`into` version as well. Just for completeness. It’s not something you can easily recover from in the non-into version unless you know that your string doesn’t contain white space, in which case you can recover from it. But I don’t see any reason to restrict this option to just the into version, so the idea would be that there would be some option potentially like this that says the handling of the final partial chunk should be stopped before, and that option would be present on both the into and the non-into APIs. On the into API specifically, you could recover from it using the `read` property and thereby implement in userland if you want or do any sort of error recovery behavior that you care to. Okay. That was everything I had to discuss.

WH: I just wanted to add my support to the choices you indicated. I have a slight preference for putting these things on the `Uint8Array` prototype.

KG: Okay. Thanks very much.

CDA: KG, SYG has entered the queue.

SYG: I just want to reiterate for other delegates that are not KG, if you think a future weird zero allocation/high performant variant, which is a follow-up proposal, if you come the think before now and next meeting, please let me know. I would like to be perfectly open that that is part of my future goal here, that I’m still thinking about some weird -- something weirder maximally efficient API. If you don’t want that to happen because we have this at the next meeting, please let me know.

KG: Okay. Well, I will hopefully come back next meeting with something that looks approximately like what’s on the screen here. I’m not going to commit to the precise names of any of the input options, but probably something like this. And, again, this partial chunk handling option or whatever it ends up being will probably be on both the -- from Base64 and Base64 into.

KG: Last thing that I realized that I forgot to put in the slides is there will probably be a -- the same thing for hex. There will be a from-hex-into. So that if you have a hex string, you can write it into an existing Uint8Array. I assume everyone is fine with that. But if you’re not, let me know. And I look forward to coming back next meeting with something everyone can live with.

### Speaker's Summary of Key Points

KG: We heard mild support from Waldemar and Luca for putting these on the prototype rather than a new global. Peter still prefers to have a new global. We also heard that something like my variation 4 that I presented where you have a fromBase64Into method, it returns an object with a read and write property, would be acceptable to everyone, as long as, per SYG, it doesn’t pre-include the possibility of having some future weirder API that accomplishes the same thing with no allocations. And no one expressed objection to the idea of having this sort of handling for the length where you stop before -- you allow the use or the stop before a partial final chunk or potentially other behaviors. So intention is to work out the details and come back. Okay, that’s all, thanks.

## Decimal Stage 1 Update & Request for feedback

Presenter: Jesse Alama (JMN)

- [proposal](https://github.com/tc39/proposal-decimal/)
- [slides](https://docs.google.com/presentation/d/1ecK7CzrgSO5t8-gYQnNWUSHcnWltJKWqTolgJsAIwqI/)

JMN: Yeah, my name is Jesse Alama. I’m presenting Stage 1 update for decimal. I’m at Igalia and working on this with Bloomberg. I just wanted to give you a bit of a survey about how other languages tackle the problem of decimal numbers and the way that they approach this issue. I know that we’ve been discussing this several times in the last several plenaries. I thought that one of the things that might help the discussion is to see how other languages deal with these issues or not. And then given that information, we can see what the current suggestion is for how JavaScript might approach this problem. And in particular, there’s one topic that has been decided or essentially kind of quasi decided many years ago, and has always been sort of taken as settled, but increasingly, I wonder if that is something that we want to reopen, and that is the topic of normalization. I’ll explain a little bit more later about what that is. Those are the three parts about what I want us to talk about.

JMN: There’s a bit of a bonus here. We have a new co-champion in the decimal proposal, JMK from Oracle, I think he’s with us now, is working on decimal. He’s a great guy to have around, and any questions or comments, he’s also there with me as well. Just to recap what the issue with decimals are, the idea or the problem, you might say, really, is that in all sort of use cases on the web and whether we’re talking front end, back end, JavaScript’s numbers that is floating point numbers are really not a great fit for handling human consumable numeric quantities. In particular thing like money, things like measurements or if you think about graphical representations, then things like axis fit or gentleman have script built in numbers because typically we use base 10, and the best we can do with JavaScript is base 2, right, binary floats. Clearly they work in many use cases. JavaScript has come this far without having decimals builtin but the issue is it can lead to user visible rounding errors. You can really get things simply wrong because of the just mathematical mismatch between base 2 and base 10. All sort of numbers are just simply not exactly representable in base 2, but which are obviously representable in base 10, because we write down just the string of digits. And even with careful programming, these kinds of rounding errors can pop up. Especially when the calculations, it start to get a little bit more complex. Decimals arise in both front end and back end scenarios, so if you think about something like handling financial quantity, that could be front end or back end. All sorts of qualities are coming into JavaScript, whether that’s through, say, attributes on the web say a database connection on the backend. JavaScript is often surrounded by systems that do handle decimals natively, so JavaScript is sometimes in an awkward state there, where some information might get lost. and the user may see this

JMN: I was doing a bit of research here, there are all sort of graphics libraries out there. I was taking a look at Chart JS, and I got in touch with one of the maintainers there. And they pointed out a couple of interesting bugs that show up when generating charts with ChartJS. This [on screen] is just one example of many where the ticks on the graph get labeled in a pretty weird way. You can kind of guess what’s going on there. There’s another discussion that came up where someone was working with a calculation, and it seems that precision was wrong, the maintainer realizes this is a kind of long-standing, almost meme in the JavaScript world, look at this response down below there. If you take, you know, 0.1 and multiply it by 3, you just don’t get what you think you’re going to get, and this can be visible to the user. And sometimes this kind of lack of precision is not acceptable. It’s not okay to be close enough. It has to be exactly right.

JMN: Google sheets, how many people use Google sheets? Well, I came across this one. This is thanks to another co-champion, Andreu, taking a look at the user forms for Google sheets. Here is a topic in the help forms by someone who apparently did some kind of calculation on their own. To calculate their monthly mortgage balance, and noticed that something was slightly off. And the -- this is probably not a JS programmer, but this is someone who is using a complex application for the web, and this is just getting something wrong, and the user is puzzled about this. So it’s not just the programmers who are going to encounter these kind of things, but also, you know, even users can see these kinds of things too. I mean, the guys running Google sheets I’m sure are very careful with these things, and nonetheless, a lot of this stuff can just leak through if one starts to poke and prod.

JMN: So this is the issue of errors. So there’s a couple of motivations. One is just the abstract mathematical motivation of trying to just simply just represent things correctly, and then you might say, well, what difference does that make? And the answer is, well, because this can lead to user visible errors that really can be quite embarrassing for us. Okay. So how do other languages support this? Actually, I took a look at a kind of popular languages here. I just went to stack overflow and looked at top 12 or top 10, plus a couple extensions. This is an arbitrary list and not intended to be the best list ever. But I just picked some, rolled with it, and I think this is a pretty good sample of what’s out there. The interesting thing is that a lot of languages do support decimals, either out of the box, in say all programs, or they’re part of a standard library. And there are a couple where standardization is under way, so the problem is recognized. In the case of C++ comes to mind. This is very close to being done as a standard. There was supposed to be a meeting to C++ committee last year where a guy was supposed to present a final proposal, but didn’t attend, so it’s still kind of circling the airport there. And what I want to do for the languages that do support decimals, what I wanted do is a take a brief look at take a look at to give a sense of the ergonomics, whether the programs are lean and elegant or bulky and ugly. And the question would be given these languages and how they tackle the problem, what does our solution or our proposed solution look like.

JMN: this part of the presentation is not so nice because I don’t really want to read these slides, but just to give you a sense, I have as a running example, the task of calculating final bill, where I have two items, tax rate of 7%. One item is, let’s say, 1.25. Or 25 cents, whatever, times 5. Then another thing, costs let’s say 5 bucks. And I want to add them together. Use the tax. And get the total there. Nothing very complicated here, but the example is nice because they can keep repeating that and rolling it in different languages. Here is C. You can see that here in C, they have – just out of the box, without importing anything, you have got some kind of literal thing, `1.25M` on line 5. And then again, a couple lines down. And then you can just use `+` and `*` as you normally would. These are overloaded. It looks elegant there. Java also comes with support in the standard library. They call it BigDecimal. You have to Du this with new and string arguments and everything is quoted. But it’s not too bad. We have literal 5 and 1 there and then the quoted – the string representations, with the numbers here. And you have to do a little bit of bulky dot multiply and whatnot here and dot add, for instance. But you can see that it’s still, I would say, not too bad. I guess, maybe it could be a bit worse. Kotlin, for all you Android programmers out there, you might have seen Kotlin. Basically, Kotlin is going to have support for decimals because of its connection with java. So this is actually basically the same as the previous slide. Python has had decimal for a long time in the standard library, from the early 2000s. You can see, it’s a little bit leaner because I don’t have to use new or something like that. I have a decimal type there. Again, with strings. Where you have to quote the values using. There’s no literals there like in C. Ruby also has this support for decimal in the standard library. There’s a kind of `to_d` method that gets applied to strings. If you have used SQL databases, you will find decimal support there as well. This is a contrived example, but a flavour of the syntax there and what is going on. Notice that there’s a bit of overloading there. So that’s kind of lean and elegant. What is interesting is that there’s already support for decimals in the browsers, as part of the UI code. It’s part of the JS. So you can follow these links, FireFox, Chrome, WebKit, they have decimals sitting in the codebases. They are just not plugged into the JS said of things. All of them are ad hoc decimal floating points. They have various, minimum and maximum exponents and precision. They all seem to work.

JMN: I am trying to make an argument with these examples, which is that decimal support already exists in many languages. I guess you have to trust me and the languages that don’t have it built in, third party libraries are available because people have to come in contact with money and they need to handle it properly. browsers already have decimal in the UI code. This is something I kind of like because I consider my task here to look at browsers and look at the language and see how this might work in a browser and stumble across decimals already there The various data models are a bit ad hoc. Very few languages except, perhaps, Python and java claim to follow any kind of documented standard. That’s interesting. Because it suggests to me there’s a sort of understood notion of decimal a range of values that we think we need to handle. And we just kind of roll our own and it’s fine. And it seems to work. The focus is usually on basic arithmetic, not things like trigs or . . . and the conclusion of this I would say is that somehow all these things work. You don’t have Python not having the right decimals. They have happy with what they have. C, that has its own ad hoc approach. It’s fine for pretty much all use cases for which decimals are intended.

JMN: So now, we have seen a few examples of what decimals look like in other languages. What would I propose? Well, the idea is to follow IEEE754, but not that – the part that – the binary part, but the decimal part which has been there around 2008 or 2009. And the idea would be to support the full decimal 128 with not a number, - 0, the infinities. The proposal here is not to have a new primitive datatype. So if you try to do things like decimal 3.14, a quoted string, that’s going to throw. There’s no intermingling with built in operators. Addition, multiplications so son, comparisons which all throw. A new standard library object. The name would be subject to bikeshedding, but call it decimal for now. The values are created with `new`. And only bas division, multiplication, square root, et cetera. And rounding. Inspired by Temporal and the Intl.NumberFormat folks. So the running example using the current design would look something like this. And this is actually unchanged from the previous template. You can get a sense this is basically in the right neighbourhood of all the things we have seen so far. Yes, there’s a new decimal there with a string which is a bit bulky, I admit. But other languages often have this too. Or only a little bit better.

JMN: So now it comes to the part of the presentation where I would like to get some feedback from you folks. And that is the topic of normalization. To set the stage: we have talked about decimals since 2018 or maybe ‘17. And very early on, in our discussions, we settled on the idea of exposing what are called normalized values. So normalized means that trailing zeros would always be removed. You can give a number with trailing zeros as input, but those would never be stored. So a number with trailing zeros would have a loss of information. No way to recover that. So those are called normal numbers. Nonnormal numbers are ones that have at least one trailing zero. Like 1.20 versus 1.2. What is interesting is that IEEE754, decimal 128 works on all values. On those with and without trailing zeros. The zeros represent significant digits. These are not an LOL joke. Someone hitting zero on the keyboard for fun. These are supposed to represent measurements, or some kind of numeric quantity, where the extra zero is intended to be stored somehow. So in other words, here is another way to think about or rephrase what I said, decimals are not just mathematical values. Yes, 1.20 is just another notation for 1.2. These are simple the same thing. Digits strings with a mathematical interpretation, right, but it’s not simply a mathematical value. And there are understandable use case for such numbers . . . so if you think about those kinds of use cases, then killing the trailing zeros, it might be an irrecoverable loss of information. Or there has to be – go to some other source to find out what that information was. And that might not always be reliable or even available. Interestingly, many of the languages we presented, do support – do respect trailing zeros. So the question that I would like to propose is, whether we really want to ban trailing zeros? I realize that that is probably a controversial subject, but it seems to me that we haven’t really fully nailed down the arguments for that.

JMN: Now, anticipating there might be a discussion about this, I proposed the middle ground, where in a way, you can have both. Not really, but it looks like it. So there are some assumptions: so given that we won’t have decimaLliterals in the near future, this is something we have been discussing for the last few plenaries. And it’s not something that we proposes in this stage of the proposal. So there are no literals. `==`, `<`, `+`, all those things throw and given the decimal argument, they don’t work. And if `===` has object semantics, the question is, whether we might be able to find some kind of middle path, where something like let’s say less than or equals works with mathematical values, but we would allow that how toString method would return all those digits that it initially had. Possibly with trailing zeros. A normalized method, for those cases when you would want to kill those trailing zeros. But the point is, they would be there. And then some other methods would work with mathematical values. It’s a bit of having our cake and eating it too, sort of. And that’s it for me. So I wanted to give you a sense of how our current proposal matches or doesn’t match how other languages tackle this problem. And then I would just like to open the floor for discussion. Either about what I said earlier about the language comparison or about this issue of normalization.

WH: You listed a bunch of language libraries. Which are IEEE decimal and which are BigDecimal?

JMN: Okay. Decimal 128 is available in Java you have 128. And in Python, you also sort of have decimal 128, in a generalized sense. Because it allows for things like specifying the number of digits, number of significant digits you want, overall it follows the decimal 128 approach. The approach that Python takes is by the same guy who made or designed decimal 128. You might say that decimal 128 is an instanceof this general decimal arithmetic in Python.

WH: The java BigDecimal library in the example on the slides has arbitrary precision.

JMN: This is the arbitrary precision one. Well, yeah. The name of the class is misleading, BigDecimal in java can mean either – the decimal 128 or indeed some kind of BigDecimal arbitrary unlimited precision. So actually, Java has both.

WH: Okay. Which leads me into my second topic: you made the claim that transcendental functions are typically omitted. But all of the libraries which support decimal128 I looked at support transcendental functions. I can’t reconcile how they are omitted when the ones I looked at include those transcendental functions.

JMN: The Python one

WH: It has transcendental functions

JMN: It does?

WH: Yeah

JMN: Okay. That’s news to me. Maybe I missed that.

WH: I also looked at Julia, which includes transcendental functions. The Intel library, which is decimal128 for things like C, C+, has transcendental functions.

JMN: That’s good to know. That’s fine. Good. Thank you. I mean, any – if I missed something with the Python one, that’s really an error on my part. And then the other libraries –

WH: The ones which are based on arbitrary precision do not support transcendental functions. But the ones based on decimal128 do.

DE: Python is based on arbitrary precision decimals. The default precision for a new decimal is a context variable, similar to AsyncContext. [Note: DE incorrectly said the precision of decimals was a global during the meeting; the previous sentence corrects that while making the same point.] So 2 can be 60 bits or whatever. Right?

JMN: The Python one?

WH: I thought it’s decimal128.

JMN: For the Python one, you can – it’s more like a family of – of standards, where decimal 128 is an instance of setting certain parameters. You say you want 34 significant digits. This should be the Min and max. Then you can work with 128.

WH: Okay.

JMN: Yeah. That’s good to know. If indeed these functions are present, in more places than I think, then that’s an argument for including them.

WH: Yeah.

WH: Regarding normalization, before resurrecting a topic, it’s good to know why it was settled. Lately at every meeting somebody wants to resurrect denormalization without understanding why we settled on normalizing numbers. If you’re proposing to resurrect it, why why it settled?

DE: Sorry, WH, you know why the history and why it was settled. Maybe you could share that.

WH: I am going to, but this comes up at every meeting and I don’t like repeating the rationale at every meeting. So I am asking if anybody else remembers.

JMN: Well, I think one of the – it my mind, one of the reasons why one would work with normalized values only, made sense in a world in which there were decimaLliterals. Because then indeed you could write some unusual things that might have weird results, if 1.2 and 1.20 are somehow handled different as literals. But in a world without decimaLliterals, the question; does that argument still apply? Does that thinking still apply?

WH: That’s – that’s not actually one of the reasons. Literals are not the reason to not distinguish cohort members. The two main points that settled this last time were, one, the IEEE implementation of cohort members does not correspond to the mathematical notion of precision. That’s one. And two, what should `toString` do? Should `toString` produce normalized values or should it show significant digits?

JMN: Well, just to continue this line of thinking, you say it would produce the extra digits, if available.

WH: Okay. Let’s explore that case and see that it will cause a lot of subtle bugs and system failures. Let me go through a specific example to illustrate why. Let’s say you have a number, 300 with 4 significant zeroes. What should that print as?

JMN: 300.0.

WH: I said 4 significant zeros?

JMN: Well, I guess you might say undefined. Because – what are we talking about? There’s a confusion because there’s two mental models. Are we talking about a mathematical subset of the rationale numbers. Or talking about digit strings?

WH: I am talking about how it’s done in IEEE decimal128. Number 300 with 4 significant zeros. What should that toString as?

JMN: `300.00`. Is that what you’re asking?

WH: Yes. What about 300 with three trailing zeros?

JMN: Well, 300.0

WH: Yes. Two trailing zeros would be what?

JMN: 300.

WH: Okay. 300 with one trailing zero is what?

JMN: 300.

WH: Nope. That’s 300 with two trailing zeroes.

JMN: Okay. What is it?

WH: 30e1.

JMN: Okay. Okay. Well, okay. So then, it sounds like there’s a kind of – that decimal128 as a standard is somehow odd for most programmers.

CDA: SFC did you want to reply here?

SFC: I do have a general reply. My general reply is, like, you know, IEEE754 defines the behaviour and we can follow that behaviour. Because it defines what the behaviour is. We don’t need to figure out what it is because it’s defined and we have to follow the behaviour.

WH: Okay. Well, we can do that. The problem is, now in the middle of your financial calculations you might get 30e1. And that will cause a lot of mayhem.

PFC: [on queue] This seems like it should have been a GitHub discussion before the plenary. A further comment suggests that working this out in an off-line text discussion, rather than live here.

WH: I will second that. I don’t want this resurrected unless it’s worked out. I don’t want this coming up at every meeting. This is not a good use of our time.

SFC: Yeah. I agree, off-line. But I cannot speak or I can speak in response to the trailing zeros question.

SFC: I guess since we have 60 minutes in the queue, I would go ahead and say some of the points.

SFC: First, regarding the question about odd string formatting. This is a question also that we have had in Temporal and elsewhere. It’s totally reasonable for a stringification function to have different modes, depending on different needs of different users. And that’s totally fine to do. We have one stringification function or mode that follows the spec and another that gives consistent, reliable output, and so forth. I don’t see that as being an existential problem with supporting trailing 0s.

SFC: Second, as I have said, trailing zeros are important for internationalization. There’s a difference between having 1 star versus 1.0 stars. Just in English and that’s more so in other languages.

SFC: Third, as I posted on GitHub before the meeting, other implementations of decimal 128 and BigDecimal mostly support trailing zeros: Java, C#, Python, and postgres support the trailing zero and the concept of significant digits.

SFC: Fourth, as Jesse already said, is that dropping the trailing zeros, you know, loses information which doesn’t seem like information we want to lose. Especially since it wouldn't cover all use cases. There are use cases for having trailing zeros. If we want decimal to help to represent those use cases, we can’t lose that information. You can still do the use cases where you don’t care about trailing zeros by having functions as Jesse proposed in the slides, by having certain functions for a middle ground where some respect them and ignore them and that's totally fine. As long as the data model is able to represent them and the users who do need them have access. That’s the preview of the 4 points. But I agree, it seems reasonable to continue the discussion.

SFC: I guess, one other point, number 5, is that the decimal proposal, I think, predates my time on TC39. And I think the time of many others, including JMN, the current champion and many others. And any discussion about the normalization of digits, in terms of elapsed time, is about five years ago, which predates my time on TC39. The points that I raise, especially about the internationalization effects, were not well articulated at that time. So there is new information. It’s not just resurrecting an old topic without new information. So that’s my soapbox. Thank you for listening.

DE: The reason it’s important to raise this in TC39 is because it has been raised at different TC39 meetings by SFC, who gave various reasons for this change, and despite trying, we haven’t been able to arrange an offline technical conversation on this topic. The next recourse when having trouble getting engagement is to raise it at plenary and talk it through in plenary. So I would appreciate Waldemar focussing on making the point, rather than this being sort of a Socratic method of conversation.

DE: Also, I think it’s reasonable for us to decide to subset IEEE754 through normalization, through not supporting all the different signaling modes, that very few implementations support. I had trouble finding the documentation for the Python trigonometric functions. I think this is the right place to have this discussion.

DE: I want to focus on the overall motivation, because in previous plenaries, the motivation has been questioned. JMN gave detail about that. Do delegates see the motivation here as being well-supported?

WH: We do a lot of things which lose information. For example, the IEEE standard has status flags like "inexact". We don’t support it so we lose information about which operations are exact and which ones are not. We choose not to expose that to users. We choose not to expose signaling NaN’s to users. Many other implementations of IEEE arithmetic do expose these. In my mind denormalization falls into that category as well. It’s a really obscure use case and causes issues and surprises, where it’s better omitted from the language. And one other thing I would like to understand is, for the internationalization claim, I don’t understand why that couldn’t be done by supplying something like the number of significant digits.

JMN: Right. It seems like that could also be a parameter. But my knowledge of the internationalization stuff is not very strong, so I can see that maybe finding that number of digits is awkward or impossible or something. I would also like to hear that.

SFC: My response to that question is, it’s part of the data model. It’s the same – it’s the same sort of issue as saying, like, there’s a difference between, for example, if you have a date in Temporal. Let’s say today is November 27th, 2023. And let’s say that you want to take that data and format it as a month and day. You might format it as November 27. That’s a different operation than saying, I am going to only have a month day, November 27, and then format that. One has the configuration set in the formatter and the other in the data model. And it’s been a long pain point with internationalization that options for… the difference between what is the data model versus the options? One direction that we have been moving very much in the – in this space is that, well, the idea of trailing zeros should be part of the data model. It’s – currently, we have the ability – the capacity to do it as part of formatting options, which is fine. That exists. But it should be part of the data model. This is an example: if you have, the thing I have been talking about, you know, the example I always pull out is, one star versus 1.0 stars. In order to – in order to perform logic on this, you need to make sure you pass the same set of options to both the plural rules to generate the plural and the decimal format, and it’s a common bug, that sometimes these options aren’t in sync with each other. You might end up getting the wrong plural because the formatting options were different than the plural options for generating the plural form. By representing this in the data model, we eliminate those problems. If both those, when they consume ECMAScript decimal, say, okay, we will respect the number of significant digits in the decimal passed to use, they can do the right thing every time, without having to worry about making sure that options bags are in sync with each because, again, the concept of trailing zeros in formatting is a data model concern.

WH: I don’t understand the answer. If you are printing a decimal128, it will print as “1” so you will get “1 star”. If what you are printing is “1.00”, you did something else which altered the output string and, whatever it is you’re doing, you should communicate it to the internationalization library.

SFC: If you have a decimal 1 versus a decimal 1.00, we can handle both of those correctly through the internationalization APIs, if we are able to represent that as part of the data model. If both 1 and 1.00 are represented as the same aspect of the data model, but it’s desired to instead output with significant digits, then in addition to being able to pass through the data as part of the formattable object, you also need to be able to pass through options, which options are intended to be things that are, you know, fully configurable based on the desired display. I use grouping separators as an example of this. Whether to turn on or off grouping separators is an example of a configuration which definitely belongs in the formatting bag. Another example of a style is the width of strings, for example, the name of the currency or measurement units or percentage sign. Those widths are also display concerns. But the actual value, being formatted, is not a formatting options concern. It’s a data concern. Like you might have a date that has additional information, the formatting concern changes. There’s a difference between a formatting and a data model concern. My position has been that trailing zeros are a data model concern, not a formatting options concern.

WH: We should take this off-line because I don’t know what to make of that.

CDA Okay. Let’s move on to JHD.

JHD: Yeah. My understanding is that the various browser representatives have indicated constraints that this can’t be a primitive until they change their position. I am trying to phrase this as forward-looking as possible: beyond that “it’s built in and you don't have to install anything”, what are the advantages of shipping this at all? Of adding a non-primitive, without-syntax-support, Decimal to the language? Is it going to be faster? Is it easy to screw up and this would be hard to screw up? What are the motivations to add it? I am having trouble seeing any.

JMN: Yeah. I think one is, you said it yourself. Harder to screw up. I think if this were in the language, then I think programmers would be able to reach for this. Knowledge would spread in the community that this is something you can do. It might take some time, but then as time goes on, I would expect that more and more sophisticated JavaScript programmers will be aware and use this and have an effect throughout the community, rather than status quo, which is "LOL, JS numbers suck" . . . and then coming up with strange workarounds, which themselves are incomplete and buggy. There was one Google sheets forum post, one sophisticated user ends up reimplementing a BigDecimal entirely within some user-defined function. Whether it’s correct, I don’t know.

JHD: I guess my follow-up question based on that answer is: I would expect if – assuming what you are saying is true – there is a user hand library has achieved dominance, that that would be a very good evidence of how easy it is to screw it up or hard to screw up, eg what sorts of bugs are common in there? What API designs we should avoid or seek out? Are there any clear winners, even if it’s a couple? I am sure there’s 50 or 100 decimal libraries. But I would expect to be able to count on one hand the number of dominant players and then I would want both that information from them, but also I would want something that is better than they can do as the reason to add it to the language.

JMN: Yeah. I like that. You’re right. There’s two or three NPM packages when the battle of the decimal wars, for sure. I could give links to these after. It’s decimal JS. Big JS. And the implement arbitrary precisions in one case, and limited/configurable in another case. And I guess you’re right. The question might be something like, would we expect that these libraries – what is missing from the libraries? Why don’t they get the job done? Why are there still these issues? One might expect that being out of the language actually is an issue. There might be cases when – because it’s not in the language, we can’t really roll, we can’t import whatever in our project. That could be a blocker in many use cases. There may well – the speed issue is valid to raise, but it’s not that big of an issue. Because I think generally, the use cases I have seen speed is not so much the issue; it’s more simply the existence of this datatype in the language, which accurately represents decimal numbers, and indeed it won’t be as fast as binary floats. But that’s okay. It’s not – you know, a million times slower. It’s, say, 2 or 3 times slower. Things of that order.

WH: I have the same question. The alternative we have is just using userland libraries, and why is that so bad? If there has or hasn’t become a dominant decimal user library, then why or why not?

JMN: That’s a good question. I am not sure I have an answer for that. I will have to look at perhaps the statistics and see which one is dominant and why it’s dominant. Maybe there’s features one has versus the other. Another question might be, what is the reason for the apparent ignorance about the packages or unable to to deploy them? Why can’t we slip in the JS. Why not?

ACE: An advantage is the way of encouraging people to choose the library. Otherwise, I think we see in Bloomberg, not with decimal, with other types; if one library says, okay. When you pause, we will turn dates into this one type. But then some other things that are going to consume that and sterilize it to something else. The system says, you want dates in this other type. It’s going to find, if it’s a value on its own. You can do the conversion. What you see is these really large nested objects describing the details about particular function transaction and then just deeply nested in there are these types that are slightly wrong. What the teams end up doing is writing things that traverse the whole object, looking for things incompatible and converting, grading, traverse or lots of object creation, switching from one type to the same type, but in a different library, to make this compatible. And that happens when there isn’t just a detective type, all the libraries with use, rather than each one ships their own, like mySQL, comes with its version of decimal, and yaml comes with its decimal library. Ideally everyone agrees on the user land library and have their own. But that doesn’t happen in practice on a large scale.

DE: Continuing on what ACE was saying, I think an example here is RPC libraries. If you have a generic RPC library for sending and receiving methods, and its schema includes decimals, it has to choose a decimal datatype for JavaScript, analogously the database case or the kind of UI presentation-oriented one. It makes sense to include this in a standard library, even if it doesn't depend on primitives or operator overloading because this proposal is analogous with `Temporal` and with `Object.groupBy`. Those are bigger or smaller proposals, decimals are medium-sized. In all cases, JS developers use user land libraries, which have some medium-level of adoption. And then there’s some developers who kind of try to avoid adopting any library and roll their own. In decimal, it’s through strings or numbers that represent big calculations with logic to support them, sprinkled throughout the program. Bloomberg uses a mix of these strategies. And this split causes overhead and it causes lower quality implementations and less consistency. In decimal in the ecosystem we do see decimal libraries there, and everyone has to choose between two or three which are not updated frequently and written by the same person. There is a quality issue which, in principle, could be just addressed by the ecosystem.

DE: But in the case of object group and in the case of Temporal, we decided, well, even though we have lots of precedent for the ecosystem, we take that as positive. It’s useful. So we won’t just say, you know, everyone should use lodash or use moment.js. But we will add something to the language because we have seen it’s useful. And decimal is particularly useful because it comes up in so many UIs and things that interact with people. That's a common thing with JavaScript, it is commonly used to represent such interfaces, such quantities. So that’s why we have this ecosystem library.

DE: It’s normal that an ecosystem library is lower quality than what we can achieve with something built in. And that is the current state of the world. None of this had to do whether it’s a primitive.

CDA: We have just under 10 minutes remaining.

MLS: So I will ask and speak a little bit to why it should be in a language . . . I appreciate that the slides you presented, Jesse show other languages have decimal support and they have them support as libraries, not as built in, primitives. So I think it makes sense for interoperability to have one version. Yes, there’s a lot of things that we have added to the language or are adding to the language that came out of libraries. But I think that there’s a case here of making this – added to the language as part of the library. Earlier, in the discussion, about 20 minutes ago, there was a conversation that says we should discuss this on GitHub. I am looking at your slide 17, and I think there’s – I hope there are things to agree upon. You know, you have data models, IEEE decimal 128. No primitive datatype. No built in operators. And new standard library object. I think all of these things on the slide, I am hoping to agree upon. Normalization seems to be something that needs to be discussed.

JMN: We are getting stuck in the mud with a couple of the issues here. What is interesting is that I wanted to make the argument, and let me rephrase it, that decimals do exist in the case of forms and they seem to work somehow. I didn’t really try to prove that claim, but the idea is we pick some reasonable, responsible, decimal, and put it in and that makes a big difference. That mission accomplished, basically. Maybe there are some fine details to be discussed. But overall, exactly, to repeat what you are saying, this decimal 128, is probably going to be just fine. The existence of other alternatives, doesn’t have to slow us down or block the discussion.

DE: Although I support the conclusion that MLS is proposing, saying we are going with objects and not primitives, I was hoping that my two withdrawal topics would help us reach conclusions, custom literal suffixes. So could we call for consensus on that question once we go over those topics? Because I want to review more why we are not doing upper literals in general.

SYG: I can say that Chrome will not support a primitive. We can live with an object, but we are not in explicit support of the object-based solution. In terms of, I think it’s – I will block on it being on a primitive, you have the negative side of that.

JMN: Some of the design discussions taken over the course of the year, over the meetings that we have been through here are kind of designed to make it both implementer-friendly and cover enough use cases to be attractive and usable for developers as well. Yeah. Initially, when I started to think about the stuff, the proposal was in a much grander state and we retreated from things like suffixes. I appreciate the withdrawal from these as well

DE: To be clear, I was just advocating for this in order to make sure that the committee had a thorough understanding of the motivation for this [concluding on objects and methods], rather than only hearing the fact that it [primitives and operator overloading] would be blocked.

DE: I want to ask the committee: what are people looking for, for Stage 2? What are the questions that people want answers on, or like things maybe more concrete? The proposal is already quite concrete. The details might change during Stage 2. Any major discussions that are blocking or Stage 2, or is it really a question of agreeing on the motivation?

WH: I am still unconvinced this cannot be done by a userland library.

DE: Oh, hmm. Could you elaborate? Of course it can be done by a user land library, like Temporal or Object.groupBy. What is it that you’re looking for?

WH: It’s qualitatively different from Temporal. It's a fairly self-contained library. And my nightmare scenario is that we ship this and get pushback from users who say they want this to be a primitive and a few years later we wind up with two versions of decimal in the language — that’s what I am afraid of.

JMN: The intention with this proposal is to make it – is to be future proof, to allow for that future. Even though that’s not at all what we are looking at for what we are doing right now.

WH: You can’t make this futureproof.

DE: As JMN says, this proposal is future-proof in the sense that decimals could be retroactively understood as primitive wrappers. The only “overhang” or superfluous part is the existence of the static methods on the decimal object. Would that even be a bad thing, to have static methods for arithmetic operations while operators are available? This is the theoretical situation, where engines change their analysis of the cost/benefit tradeoff of operator overloading, which we see no signs of changing

CDA: 2 minutes left. I want to get to JHD.

JHD: My understanding is that Chrome and others won’t allow a primitive or to have operator overloading. (eg `A + B` and have them produce a Decimal). And so my current position, and I am open to be convinced otherwise, but it remains it’s not valuable enough otherwise to have it in the language at all. And I certainly hear the argument about coordination - I argued that point for Temporal’s inclusion. I think Dan’s question, one of the things helps convince me, there’s unknowns, but one of the things to convince me, if we had a reliable userland implementation and broad usage for a reasonable period of time, that would help convince me. We had moment and other date libraries for well over a decade - enough time to exercise all of the important use cases, work out the bugs, figure out the problems with its API design. If we had just shipped moment in 2015 or something, we would have been stuck with a bad API. But nobody knew it was bad until it was in use for a long period of time. That’s what I am hoping to see in the future

DE: JHD, we do have that list of libraries as Jesse said. A few years ago, I got in touch with MikeMcl, who wrote them and gave us initial feedback. We can ask them a particular question. It’s great to follow up off-line about particular points to discuss with the well known dominant packages in the area

JHD: Yeah. I don’t have any concrete points at the moment. I will let you know off-line if I think of some. It’s a general sense of… with dates, basically the entire ecosystem was like, “we use moment, but don’t want to have to. Can the language make something better?” and that’s what Temporal is. That’s not the same with Decimals. “We use this and want something better.” What they use is Numbers, and what they want to use is something to like Numbers. And I am not convinced that that is not the case yet, and that non-syntactic Decimal wouldn’t give them what they actually want. We can talk off-line for sure.

DE: It would be good to know what is insufficient about the previously presented survey response which showed a bunch of unanimity.

CDA: We’re out of time. I don’t know if you want to have a continuation on this or not. I have captured the queue either way. Did you want to quickly dictate key points, summary for the notes, JMN?

### Speaker's Summary of Key Points

JMN presented the state of affairs about decimal numbers in a variety of languages. He compared the current proposal to those languages and how they solve the problem with decimals. And then he opened up discussion to the authority issue of normalization. And discussed pros and cons about that. And other conditions for perhaps reaching Stage 2 in the future.

The decimal proposal is based on objects and methods, rather than primitives and operator overloading. It uses IEEE 128-bit decimal semantics. WH and JHD raised doubts about whether Decimal would be better done in a library, rather than being built-in. DE argued that this was a natural evolution, analogous to other proposals and supported by both the current ecosystem state and would be an improvement on the ecosystem.

### Conclusion

The decimal proposal remains at Stage 1
