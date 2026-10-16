# 116th TC39 Meeting

Day One—29 September 2026

**Attendees:**

| Name                | Abbreviation | Organization       |
|---------------------|--------------|--------------------|
| Chris de Almeida    | CDA          | IBM                |
| Richard Gibson      | RGN          | Agoric             |
| Yusuke Suzuki       | YSZ          | Apple              |
| Waldemar Horwat     | WH           | Invited Expert     |
| Christian Ulbrich   | CHU          | Zalari GmbH        |
| Ross Kirsling       | RKG          | Sony               |
| Keith Miller        | KM           | Apple              |
| Nikolaos Papaspyrou | NPU          | Google             |
| Ashley Claymore     | ACE          | Bloomberg          |
| Lea Verou           | LVU          | OpenJS             |
| Jordan Harband      | JHD          | Socket             |
| Ruben Bridgewater   | RBR          | Invited Expert     |
| Samina Husain       | SHN          | Ecma               |
| Chip Morningstar    | CM           | Consensys          |
| Mikhail Barash      | MBH          | Univ. of Bergen    |
| Peter Klecha        | PKA          | Bloomberg          |
| Sergey Rubanov      | SRV          | Invited Expert     |
| Jesse Alama         | JMN          | Igalia             |
| Luna Pfeiffer       | LPR          | Yavashark          |
| Istvan Sebestyen    | IS           | Ecma               |
| Jack Works          | JWK          | Sujitech           |
| Guy Bedford         | GB           | Cloudflare         |
| Ron Buckton         | RBN          | F5                 |
| Philip Chimento     | PFC          | Igalia             |
| Andrew Paprocki     | API          | Bloomberg LP       |
| Daniel Minor        | DLM          | Mozilla Foundation |
| Daniel Rosenwasser  | DRR          | Microsoft          |
| Justin Ridgewell    | JRL          | Google             |
| Kevin Gibbons       | KG           | Invited Expert     |
| Mathieu Hofman      | MAH          | Agoric             |
| Michael Ficarra     | MF           | F5                 |
| Mark S. Miller      | MM           | Agoric             |
| Nicolò Ribaudo      | NRO          | Igalia, S.L.       |
| Olivier Flückiger   | OFR          | Google             |
| Rob Palmer          | RPR          | Bloomberg LP       |
| Shane F Carr        | SFC          | Google             |

## Opening & Welcome

Presenter: Rob Palmer (RPR)

RPR: Yeah, yes. We don't want to lose time, so. So Riku will be introducing this meeting in 4 minutes' time. Okay. The campaign begins. I think, like, maybe 20 seconds until we start. Are you presenting these slides so you have the control? All right. So I think we're about to start, and we've got our host is going to introduce things can we have some quiet for our host, please? Thank you. All right. We're all good. I think everyone has just about settled, and the on the teams, we have now have plenty of people. Just to check, can István or Kevin, can you hear us remotely?

RPR: All right. Good morning, everyone. On behalf of Sony Interactive Entertainment, or SIE, I'd like to welcome you all to Tokyo, and to the 116th meeting of TC39. Please do not tap on the microphones. So when you start speaking, don't be like just start speaking, and if there's anything wrong, we'll take care of it, so don't worry. Emergency procedures. So we are in Japan, so we'll have to go through what happens and what you should be doing when and in case of an earthquake. So and in case of an earthquake, please do not try to run while the shaking persists. That's the one thing you can't do. Just stay where you are. Try to take cover and wait for the shaking to stop. So what people do is they usually go under their tables. So please do that. And please also try to stay quiet. There may be building-wide announcements that may be in Japanese. I'll try to translate as soon as possible. So I know it's going to be panicky mode, but please try to stay quiet. Right. And also another relevant natural disaster coming our way. So we actually have a typhoon approaching us right now. So I'm thinking it'd be all right, but just a rule of thumb is once severe wind or rain starts, just try staying indoors. All right? And also, this office is located near a river. So beware. Flooding can occur. There are people who die every year because of typhoons. So please take it seriously. If anything, ask us for advice. All right? Cool. Now, the most important thing that I need to announce: security badges. So we gave you your security badges down on the first floor. They must be returned at the end of day three. Please don't take them home. All right? If you're leaving the meeting early and not coming back, please let us know so we can take your security badges from you. These ones you can take home, but not your security badges. All right. Now onto the fun part: social events. So we have a social dinner planned on Wednesday, 7:00 p.m. It's at Fujiya Honten Sakura Stage. In Shibuya Station. You're free to make your own way there, but if you're unsure, we will be leading a group from the office so please stay behind on Wednesday if you want to come with us. Also, a very special attraction we have this time around. We have a visit to Sony Square planned. Sony Square is an invite-only Sony state-of-the-art exhibition. We usually only invite special guests, which is you all. So we will invite you to a visit to the Sony Square on Thursday, 4:00 p.m. So that's right after meeting starts. They are very strict about time. So I'll be rushing you guys. Into the elevator, down the fifth floor. So please try to stay alert. Now, one caveat is that we have a maximum capacity of 20 people. So we're unfortunately going to have to prioritize delegates. And only if some delegates decide to opt out, we'll start inviting observers. So sorry, but this is going to be fun. Please look forward to it. Okay. And finally, so once again, my name is Ricky. I am the coordinator for this event. I have two other fellow coordinators, Nicholas and Kenro, who you met downstairs. If anything, please ask us. We are here our undivided attention is here for you guys for the next three days. Also, shout out to Sachiko and Yuka. They are in charge of logistics. They are the people behind the scenes who are powering the whole event. So if you have a chance to see them, just say thank you because they deserve a thank you. All right. So we hope you have a successful conference. And please enjoy your time in Japan. Thank you so much. I'll pass it back to Rob.

RPR: Thank you, Ricky. So I'm going to have a go sharing from Teams. See how that goes. So it says that I'm sharing. And we are. Wonderful. So yeah, thank you for hosting and as a really useful intro. I will also say welcome everyone to Tokyo. I think we've been able this is the fourth year in a row that we have returned around this time of year. And it's always been an excellent meeting. Running the meeting today, we have the chair group. So in the room is myself. I'm Rob. With Chris here. So we have two chairs. We also have the announcement that Usual is leaving the chair group as he's moving on. And we thank him for his contributions over the, I think, at least two years, maybe three years. 2023, yes. So three years serving as a chair. And really doing essential work, helping myself and Chris. He continues on as an editor of 402. So he's not leaving the committee there. And then we also have dialing in Justin Ridgewell. And Daniel Minor and Daniel Rosenwasser. As the facilitators. Please could everyone use the sign-in form? So even if you're in the building, please use the video sign-in form so that we track your registration there as well.

It's funny because we never update the month. Yes. We got lucky.

RPR: And then please keep in mind that we have a code of conduct on the TC39 website. This is something that we expect everyone to read. And for everyone to respect, not just to the letter of the document, but also the spirit to which we can sum up as the excellent to each other. That's Bill and Ted for anyone that has not seen the film. We've got a fairly regular schedule here of the morning session till 12:00. So lunch is 12:00 till 1:00. We'll break in the middle of the afternoon. And then the meeting will finish at 5:00 p.m. sharp. Ricky already talked about the social dinner on the Wednesday. And also about the Sony tour, Sony Square tour, on the Thursday. So we will be definitely finishing on time for this meeting. No overruns. On our comms tools, there has been a refresh you may have seen TCQ getting reloaded, revamped, re-energized. With wonderful new features. For anyone that's not been here before, TCQ is how we manage the agenda and also how we manage people talking and contributing to the live meeting. If you are participant and you choose the Q view, so not the agenda, the agenda is the full list of items, but the Q represents the currently running item. You'll see some buttons there. In general, you want to prefer buttons on the left. So that big blue new topic is the normal default way of entering the conversation. And then moving to the right, if you just want to quickly clarify something, the green clarifying question. And then finally, if you need to stop the meeting, for example, if the AV tools are down, if note-taking is down, these are all reasonable reasons to use a point of order to escalate as quickly as possible to the chairs. We also use matrix for chat during the meeting. I think everyone is probably already on this. But if you are not, please sign up using the links from the original invite. And then a reminder that we have an IPR policy so everyone in the meeting in general either you are a delegate of an ECMA member company. You can ask Samina if you're not sure at the moment. Then likewise, we have invited experts which is a category that a formal definition in which you have applied and received the confirmation of that after filling in the form. And then finally, if you are neither a delegate or an invited expert, that means that you are an observer. You are welcome to listen to read only. But please do not talk during the meeting because we need to have everything covered. So yeah, please read the contributing MD. Then we have note-taking going on. So this is transcribed live, using the tool we have here from Chris. Sorry, originally by Kevin, operated by Chris today. And as part of that, a detailed transcript of the meeting is being prepared and will eventually be posted on GitHub. You may edit this at any time during the meeting in Google Docs for accuracy, including deleting comments which you do not wish to appear. You may also request corrections or deletions after the fact by editing the Google Doc in the first two weeks after the TC39 meeting or subsequently making a PR in the notes repository or contacting the TC39 chairs. And we're going to keep reminding, but at the end of each topic, the primary speaker will be asked to summarize the key points so that we can make good notes. So for the notes, we always need people to help. To help edit and improve the notes in real time whilst context is in our heads. Please could I get two volunteers to do so for this first part of the meeting? So I see CHUs hand straight up. And ACE. Sorry, if there was yeah. We love volunteers. Yes. Volunteers all get recognized in a special addendum by the chairs at the end. The next meeting is another remote meeting. It's on the boundary of November and December. The chairs are almost ready to share the next year's schedule. Just locking down a few final points that it's pretty much there. So be announcing that very shortly. On the housekeeping, can I request formal approval for the previous meeting's minutes? Any objections to approving those minutes? No objections? That is approved. Are there any objections to adopting the current agenda? No objections. So current agenda is adopted. So we move on to the secretary's or just before?

CDA: One more thing. So for folks that are attending in person, you should have received an invite to the local matrix chat room for Tokyo attendees. If you have not, please let us know and we will get you invited.

Thank you, Chris. All right. So I'll ask Samina.

## Secretary's Report

Presenter: Samina Husein (SHN)

* [slides](https://github.com/tc39/agendas/blob/main/2026/tc39-2026-037.pdf)

SHN: Good morning. Despite the weather of rain, potential typhoon, earthquake, which may have already taken place and future earthquake to take place, it's great to be here. And, we'll all stay safe. Thank you very much, Sony, for Sony Entertainment for organizing this. It is beautifully done. As always, I do have a short report. And I'm here for all day tomorrow and day after, this afternoon, I will step away and AKI will be online to answer questions if you have but I'm happy to have any discussions as the todays go on.

SHN: So I just want to do first a little bit of a correction. I made an error in doing some statistics. I do think it's important that I do correct that. Then I'll do a general update on all the activities that are taking place currently within ECMA. I did some statistics last time. This is 65 years of ECMA, and I'd been looking back at statistics and I realized I made an error. It was pointed out to me I haven't necessarily found a way to down correct everything but what I want to highlight is that we have been talking about ECMA 376 which comes from a different TC, TC38, as being the second most downloaded. It's not about being first, second, or third but those numbers aren't exactly correct. That's actually a series of standards and I should not be doing it in that way. So actually when I look at it, ECMA 404 is right behind ECMA 262 and then one of the parts of ECMA 376 is also still very much used, just a slight update but those numbers are also reflected. So it is just a correction that I want to make and I've just highlighted it here. It's not a huge issue but it should be noted.

SHN: For some new additions, I understand that potentially we have a new ECMA 404 coming to the GA for a December approval. If I am incorrect, you will let me know. But you do have, of course, a 60-day opt-out review period. Our ExeCom is scheduled for the 8th of October. And the GA is the 8th of December. But we would need ECMA 404 in its correct format for approval by the 8th of October, which would be the 60-day start of the opt-out. ECMA-404, you've had no updates for a while. So it would be almost 10 years. I think it was all discussed in the last meeting. So if I've got that right. I mentioned this already, it is going to be 35 years of ECMA script next year. And I would like to do a recognition of that throughout the year.

SHN: But I cannot do it without your input. So it would be great if within TC39, if there are a couple of people that want to come together and design a logo build on the one you have or something a little bit new, I'd appreciate it. Send it to AKI and I will figure it out. It makes some stickers and also use it to recognize it and also do some visibility on ECMA with that. As soon as the dates are confirmed for the meetings next year, the hybrid meetings, the ones that we do where we have a good crowd in person, I would like to try to do a little bit of an extra celebration. So I'll wait for that. And I want to do some blogs. So I will reach out to people within TC39 to maybe help me write some content because you know your work the most.

SHN: I'll also go back to some individuals that have worked on it for some time ago and ask them for some information. So we'll do some visibility on this. I'm also looking to take some budget and do some swag. Like I already mentioned, the stickers. And many people have mentioned sock. So I've been watching some of the text going on in matrix and somebody some few people recently mentioned hoodies. But even consider that maybe we just subsidize the hoodies. So I'm looking at a few things and I would appreciate any comments or feedback directly to me here while I'm here or to AKI and I through whatever channel you want. But I would like to have that before the next plenary so I can start to plan. I also do need to build my budget this year for next year and I really want to recognize that I have everything well in place.

SHN: Some things that we're doing at ECMA and you all would have seen that I sent a survey many of you replied. So thank you for that. We received some very interesting feedback. It did only end last week and I'm here this week. So I haven't had much time to do some deep research but I do appreciate the feedback that I received. Some things that we'd already begun to do. It is very important for ECMA to have a critical mass. We do need members and I'm talking to every TC about how we can approach new opportunities to target members in the segment of the work that that TC is doing. Also help to develop some new work areas and also to look at some collaborations externally that are relevant for those TCs.

SHN: TC39 is extremely active. You have a very strong group working. You are very productive. Other TCs are smaller but also are producing a lot but they're smaller and it's important that every TC has good critical mass. But I want to also recognize the work of all of the work that you're doing here. So we will do some of the visibility that I already mentioned. We already started to make some changes. Whether it's going to be on our website or some other channels on social media including LinkedIn that we would like to try to do some blogging quite regularly. Here's something new. Here's a new standard or did you know and join. That would be something that I would like to be able to do. And I would appreciate it from your side if you would tell me here's an organization that could be interesting. Why don't you try to reach out to them or here's a channel that would be better for TC309. Both AKI and I would appreciate that so we could have a bit more focus on whichever TC that we're trying to support. Interestingly from the survey the feedback that we did get was that ECMA needs to be more visible. So we will make clear the visibility of the work ECMA does. We're also looking to do some tool improvement here. I want to be very specific. We are engaging with ISO JTC1 where we do the fast track where their tool and their document methods are different'. They have the platform that they want to use but it doesn't necessarily match with the work that much of TC309 does or any committee that's working on GitHub and working on doing their standards and developing on GitHub not only for ECMA but other SDOs so that's one of the areas that we are looking to do some tool improvement. Of course, we will ripple it into also what would improve within ECMA. And then the external collaboration that is something that I'm always trying to do with our work in the European Commission and internationally. So just some outreach that is very important. And I can do this outreach and I want to support every TC but of course I always need some specific feedback. So I appreciate it from this committee and I may reach out to you directly to ask for some input.

SHN: The annexes have our usual documents from the GA and ExeCom and all of the documents for TC39. I will leave you to go through it. They're on the annex side. The dates of our next meetings which are of course very important especially the GA the next June GA is set for the 30th. That's when you typically do your next editions. But the December GA I've double highlighted here and also the date change of October it was meant to be a day earlier it is a day later. So please note that as you think about 404 for the approval at the next GA. I'm looking forward to hearing about the next meetings. So as soon as you have the dates that would be great. And again, it's great to be here in Tokyo this year. Thank you again Sony for doing this work. The documents are listed there and the code of conduct which you all know information for the invited experts. We have many here. Very active ones in TC39 work is extremely appreciated. And that is the end of my presentation. I'm open for any questions. Thank you.

RPR: Any questions for Samina? No, I think that is all good. So thank you, Samina.

### Speaker's Summary of Key Points

The Ecma Secretariat provided a brief update covering statistics, upcoming approvals, anniversary planning, outreach, and administrative matters. A correction was made to previously reported download statistics: ECMA‑376 is a series of standards and should not be counted as a single item. Updated figures show ECMA‑404 directly behind ECMA‑262 in downloads. A new edition of ECMA‑404 is expected for approval at the December 2026 GA, with the 60‑day opt‑out period beginning at the October ExeCom meeting. This will be the first update in nearly ten years. The Secretariat noted that 2027 marks the 35th anniversary of ECMAScript and requested TC39’s support for a commemorative logo, visibility activities, and related materials. Survey feedback highlighted three areas: increasing ECMA’s visibility, improving tools, and strengthening external collaborations. Work continues with ISO/JTC 1 on tooling alignment, particularly for GitHub‑based workflows. Upcoming GA and ExeCom dates were reviewed, and members were reminded of the Code of Conduct and the rules for Invited Experts.

## Addition of Eemeli Aro as an ECMA-402 Editor

Presenter: Richard Gibson (RGN)

* No slides presented

RGN: EAO cannot be here today but he has reached out to me and I think also shared publicly his interest in being an ECMA 402 editor. And for that, he has my full support. He's already making a number of editor-like contributions to the project, and would be a fantastic addition to the team. So I would like to formally recognize him as such. And that's pretty much the entirety of the topic. I could sing his praises for a long time but those of you who know him also know that it's not necessary.

RPR: You have +1 support from CDA.

RGN: I do have a process question on what is necessary to actually accomplish this.

RPR: So sorry, we haven't conferred before on this but I'm so long as this was put on the agenda with sufficient notice so this has been widely available. And so long as we don't have any objections I think that we are free to appoint editors on an as-needed basis.

RGN: Fantastic.

RPR: So we also have plus ones. YSZ,, did you want to speak?

YSZ: I think yes. Sorry.

RPR: Okay. Yes. Yeah, please put the EOM (text) if you don't wish to speak. All right. And then SFC.

SFC: Yeah, we discussed this in the 402 call. EAO joined us for a few minutes and yeah, basically everyone is in support of this.

RPR: All right. So we've only heard support. I'll just do a final check. Any objections to EAO becoming an ECMA 402? No? Okay. I think that is confirmed then.

RGN: All right. Can't wait to share the good news with him. Thank you.

### Speaker's Summary of Key Points

EAO has been invited to join the editors of ECMA-402 Internationalization API with the approval of the committee.

## ECMA262 Status Updates

Presenter: Michael Ficarra (MF)

* [spec](https://github.com/tc39/ecma262)
* [slides](https://docs.google.com/presentation/d/1x2UCdQjVo-5GEwE77Ww8SD5HYCpfsAp5QuYf4n1yC-0)

MF: Okay, this is the 262 editors update. Two notable normative changes since last time. We approved a needs-consensus PR to switch all of the counters used in iterator built-ins to Numbers instead of requiring arbitrary mathematical arithmetic. This shows up as counters stopping to advance once they hit Number.MAX_SAFE_INT. So we merged that. And also we merged the other needs-consensus PR for `Promise.try` to skip two micro task ticks when used with an actual Promise—or an actual instance of the constructor of the thing you're using `Promise.prototype.try` on. So those are both merged.

MF: We've been doing a lot of work getting Temporal in. So we've landed a lot of PRs that are still prep work for that. And the review continues. We merged a PR to clarify how we expect implementations to make the choice on whether to use 'get' or 'set' in the function name, asking them to be consistent with that choice. And we now have—I guess I have a figure for this next one. Yes, we have better linking for the internal methods. So now you see the right column here lists all of the call sites for these internal methods at their definition. And all of the call sites link to the definition for these essential internal methods. Upcoming planned editorial work looks mostly the same. As I said last time, we are now more consistently using our board on GitHub to track our work. So if you really want to know the minutiae of what we are working on, that link at the bottom is the place to go. And that should be it. Any questions?

RPR: Nothing on the queue. So all good. Thank you, MF.

### Speaker's Summary of Key Points

* Iterator built-in counters now use Number arithmetic rather than mathematical arithmetic, so they will now stop advancing at Number precision limits.
* `Promise.try` now skips two microtask ticks for promises that are instances of the constructor being used.
* Temporal integration and review continues, with many preparatory PRs merged.
* Editorial improvements have clarified consistent getter/setter naming and linked essential internal method definitions with their call sites.
* Upcoming work is tracked on the GitHub board.

## ECMA-402 Status Update

Presenter: Richard Gibson (RGN)

* [spec](https://github.com/tc39/ecma402)
* [slides](https://notes.igalia.com/p/2026-09-ecma402-editors-update/)

RPR: And then it's back to RGN with the 402 status updates.

RGN: First off, thanks very much to JMN for putting these together. We had a little bit of a game of chicken in deciding who would give the update. And this work is very much appreciated. So since last time, we have a couple of normative changes that have made it into the spec. First off, we are now taking the language subtag into account and computing the correct hour cycle and calendar lookup.

RGN: So French as spoken in Canada versus English as spoken in Canada actually implies information about how timekeeping is properly rendered. That previously was not possible to take into account. We applied a normative change to take care of that, and now it is possible. Everyone gets better localization as a result. Likewise, in locale objects, the `getCollations()` method is going to behave better because it no longer has an implicit fallback to the default locale but rather to the root locale when there are no known collations for its locale. So this reduces fingerprinting and it gives more deterministic behaviour. It's kind of an oversight that we weren't previously doing this, but that has now been corrected.

RGN: Another normative change that made it in rather recently is that `getWeekInfo()` now pays attention to the Unicode extension keys for region overrides. So that you can get weekday/weekend/start-of-week etc. information tailored to a specific region regardless of other language-level localization. ICU4C implementations already had the desired behaviour, but now the spec defines it.

RGN: In an editorial context, we've also got a large handful of things that are coming in. For dealing with rounding modes, there was just a minor cleanup. Which is also propagating into Temporal as well. We’re also keeping up with ECMA-262 conventions for rendering the well-known intrinsic objects table and replacing the overly general term “finite” with the narrower term “finite number”. And finally, there’s a handful of new normative PRs that haven't yet made it through the TG2 process, but likely will do so between now and the next meeting. They're similar to the ones we already discussed for refining locales based on browser configuration and Unicode extension keys. And one that I think we’ll be discussing in this meeting, actually defining the behaviour of toLocaleString for TypedArray objects. Up to this point, that’s been a hand-wavy reference to the analogous algorithm for Array toLocaleString, and ECMA-262 kind of assumes that ECMA-402 already provides a superseding definition. So we're just going to make it actually do that.

RGN: Upcoming on the editorial front, again, preparing ECMA-402 for incoming Temporal and Amount changes proposals, we’ll be generalizing the low-level ResolveLocale operation and planning to replace GetOption with references into ECMA-262. And then another issue that I think we'll probably discuss in this meeting: just recently, IANA un-deprecated what were previously these legacy time zones with permanently-locked daylight saving time transitions. We really don't want them to show up in time pickers, but unless we do something, they're likely to be in the output from `Intl.supportedValuesOf("timeZone")`. So some kind of fix is probably going to be necessary. It would be ideal if we can convince IANA to re-deprecate them. I don't know if that will happen. And then questions around just general behaviour.[tc39/ecma402#1098](https://github.com/tc39/ecma402/issues/1098), I think we're also going to be discussing specifically. It has to do with whether the default locale observed from an environment can already have Unicode extension keys. That's currently not allowed, but there are some circumstances where it is web reality nonetheless. And that brings us to the end. If there are any questions, I'm happy to field them. If not, we can move on.

RPR: Queue is empty and I think we've completed the time box.

RGN: All right. Thank you.

RPR: All good. Thank you, RGN. And then on to CM with ECMA 404.

### Speaker's Summary of Key Points

* Recent changes have improved localization of time rendering by language-in-region and week information by region override.
* ECMA-402 is keeping up with ECMA-262 editorial conventions.
* ECMA-402 will soon be providing a definition for %TypedArray%.prototype.toLocaleString.
* Some issues will be discussed specifically in this meeting.

## ECMA-404 Status Update

Presenter: Chip Morningstar (CM)

* [spec](https://github.com/tc39/ecma404), [issue](https://github.com/tc39/Reflector/issues/587)
* No slides presented

CM: So as we're all used to the tradition with ECMA 404 is that nothing ever happens. As SHN alluded to, something has happened. And so we're going to be having a new edition of ECMA 404. This is purely an editorial change; the definition of JSON has not changed. A couple of months ago, there was an effort to clean up the 262 spec for how `JSON.parse()` worked and to move JSON evaluation into an AO. As part of this, there was a desire to incorporate ECMA 404 by reference rather than having a duplicate grammar in the 262 standard, at which point somebody noticed that last December, when JHD gave us this wonderful gift of an Ecmarkup version of the ECMA 404 spec document, one of the things that kind of slipped by without at least without me noticing (JHD is probably aware because he did it), is that whereas the original ECMA 404 document shows the grammar in terms of railroad diagrams, when it got converted to Ecmarkup, JHD added an actual BNF for the grammar. A couple of months ago, somebody observed that, well, actually, that makes it a new version of the spec document. And so we probably ought to follow our procedures and actually bless it as a new edition. At that point, somebody said, well, if we're going to be incorporating that grammar by reference, the grammar also needs to deal with the specification of insignificant white space, which the grammar that was there did not do. The railroad diagram version of the grammar dealt with insignificant white space informally using prose in the body text of the standard. RGN volunteered to produce a PR to update it to incorporate the notations for insignificant white space, which he did. And I merged that in. At that point, AKI also added another minor PR that tweaked the formatting ever so slightly so that her thankless task of getting the PDFs to come out in legible form would be more easily accomplished. And so those have also been folded in. These PRs have been landed. It is in the repo where the standard lives. It is ready to roll into the formal process of blessing it as a new version of the standard, which I think is what SHN was talking about earlier. It is all ready to go. It's been almost 10 years since the standard was revised, but note that the thing the standard specifies has not changed. I don't know if there are any questions, but if so, I'm happy to answer them.

RPR: No questions so far. But still shocking news that we have.

CM: We have an update. Well, it never changes. And it hasn't changed. It's just that this is a new edition.

RPR: Okay. Then thank you, CM. Did you want to dictate a summary for that? Okay. You'll write it. Thank you for that.

### Speaker's Summary of Key Points

* We have a new version of the ECMA-404 standard document using the standard Ecmarkup formatting.
* It adds a BNF grammar for JSON in addition to the existing railroad diagrams.
* This includes BNF for insignificant whitespace, which had not hitherto been part of the formal grammar spec per se.
* JSON itself has not changed.

### Conclusion

* The first new edition of ECMA 404 in ~10 years!

## Test262 Status Update

Presenter: Kevin Gibbons (KG)

* [repo](https://github.com/tc39/test262)
* No slides presented

KG: So hello all. This is my first time coming to you with the test 262 update. I joined the maintainers group around the time of the previous meeting. Mostly because the current maintainers haven't had as much time to work on it. So I'm trying to contribute as well. And to that end, we actually have a couple of things relevant to the committee as a whole, or at least the people who write and consume tests, which ought to be all of you, although it isn't necessarily. So the first thing is, you may have seen the info block in the test metadata. This is where there's a section of the 262 or 402 spec text that's copied more or less verbatim into test files. We no longer recommend this practice for new tests mostly because it's a lot of work. And we don't want this to be an impediment to writing tests. We think the value that it provides is not worth the time that it takes in preparing and reviewing tests. But also these get out of date almost immediately and are never kept up to date. So just keep that in mind if you're writing tests. Please don't add the info block. We're not going to go through and delete them from existing tests. But going forward, we're not recommending their use.

KG: Thanks to PFC, we have this new table of results for new and modified tests on engines in pull requests. The precise presentation here is likely to change, but this is technically something that's always been available but was kind of hard to find. And now it will be posted as comments on pull requests. One thing I want to highlight here is that the tooltips on these entries will show you the reason that the test failed, basically. So if you're wondering what's up with that, that's what's up with that. Okay. Other than that, I want to call out that we're trying to get through the backlog. I believe that we have gotten through all of the tests for stage 2.7 and conditionally stage 3 proposals. I may have missed some.

KG: There was quite a backlog. But we're really trying not to be in this awkward state where there's proposals blocked from advancement because of not having tests or the, in my opinion, even worst state where things are in stage 3 but haven't had their tests merged. So please ping us if you are aware of pull requests that need merging otherwise, I'm we're going to try to prioritize the sort of large backlog of things. But things that are blocking proposals, I'm going to try to make those the highest priority, at least for me. Okay. That is my update. Thanks for your time.

JHD: If anybody notices a mismatch in the proposal data from what they believe it should be, regarding advancements, conditional or otherwise, please surface it and let me know. That's all.

KM: Is there a timeline for conditional stage 3 where if the tests don't appear, it just kind of falls back out of phase stage 3? Or do we update the table before while it's still in that conditional state? Or is it only the table get updated.

JHD: The source of truth is whatever plenary has decided. The closest written form of that is the proposals data in the table.

KM: Is that table updated while it's in conditional still?

JHD: No. So I'm usually the only one that updates it. And I don't update it until the conditions are met.

KM: Perfect.

JHD: At which point I try to update it. But I'm human. And make mistakes.

KM: Yeah. Yeah. Not worried about that. I just want to make sure. I think people would find it confusing. They're looking at that base effectively as the source of truth.

JHD: Yeah. We could alternatively alter the table to display some sort of conditional status. But I don't know if that's necessary because we, I think strive to have the that window be very small anyway.

KM: Yeah. We don't discuss it too much. Thanks.

RPR: Thank you. Kevin, would you be kind enough to write up the summary?

### Speaker's Summary of Key Points

* We no longer recommend the use of the "info" block containing spec text in test metadata
* Pull requests now have an automated comment giving results of new or modified tests on some engines, hover over the emoji for failed tests to see the cause of failure
* I believe we are done with the backlog of open PRs for stage 2.7 and stage 3 proposals, let us know if not

## TG3 (Security) Update

Presenter: Chris de Almeida (CDA)

* No slides presented

CDA: TG3 security task group. As is our custom, we continue to meet weekly to discuss security impact of various proposals in various stages. But we've since last plenary, we've also done something else, which is ECMA received a liaison statement from the GSM Association, which is the telecoms providers. Who are doing some shall we say potentially interesting things or talking about doing some interesting things about pushing untrusted JavaScript™ between network devices and repositories. So they've been meeting with us. We've had a couple of meetings. With Walter from them. It's been a little bit slow going just because we have lots of questions and they sometimes don't have the answers. So we're continuing to do that. I think the next time the next meeting when was it, JHD? The 14th or something like that? It's mid-October meeting. So if that's of interest to anybody, please join us. I'm told they have answers to some of the questions that we had before. So we will continue to engage with them. And that's about it.

RPR: No questions on the queue? Please, Chris, would you write the summary? Oh, sorry. We've got a question coming in from MM. Mark, you're free to speak.

MM: Okay. CDA, did I understand you to say that there are answers to our questions? They just haven't brought them to us?

CDA: Yes. My understanding is that Walter went back to speak with their side on the questions that we had. And they have some answers for us. So at that mid-October TG3 meeting, Walter should be able to join. And we can see what they say.

MM: Okay. And we can see if they are actually answers.

CDA: Yes. So MM is alluding to is it's been kind of hard to get answers to questions because they're they seem to take like a formal approach to speaking on behalf of the association. So hopefully, we have some answers to questions. And it's not so ambiguous. Because the challenge that we're in is we want to help them. But it's hard to do that with the limited information that they have. And so it's we kind of have to speculate and it's a little bit nebulous. So yeah. Hopefully, we have more information, particularly around like their host environments. And things of that nature. But we'll see.

SHN: I just comment on that question, please? Thank you, CDA, for that. MM, just to say that I'll go back to Walter. Walter represents Huawei. To ask him to give us some of those answers in writing. They are very formally structured. So we have a liaison document that came to ECMA where they asked questions. We're going to respond to that liaison. And I will ask Walter to send us some of that response in advance so the committee can have a look at it. And then we'll see how the committee will proceed. But there's certainly a strong interest to not duplicate work and try to work together. So we'll also try to set up a more formal structure between the two organizations. But Walter does represent a member organization. So he may be able to share some information with us. Thanks.

MM: Okay. Thank you.

### Speaker's Summary of Key Points

The speaker did not provide a summary.

## TG5 (Experiments in Programming Language Standardization) Update

Presenter: Mikhail Barash (MBH)

* [slides](https://docs.google.com/presentation/d/1H-6Ot6FZM4RG9FCU3qs1GOZCm89aG8a0fZGfJ8HO3Bk/edit?usp=sharing)

MBH: Okay. So TG5 continues to have monthly meetings. And we had yesterday a TG5 workshop at Shibaura Institute of Technology, which was a successful event. And I would like to also again bring your attention to the workshop on programming language standardization and specification, which will happen next week. On Thursday, in California, co-located with SPLASH. We have two fantastic keynotes by Gilad Bracha and by Bertrand Meyer. And we also have a panel with several very accomplished panelists who have contributed to many programming language standards. I would like to particularly mention Guy Steele here, who was one of the editors of the very first edition of ECMA-262 in 1997. So if you are based in California, MF, YSV, and myself encourage you to attend next week. It's still possible to register. It's going to be on Thursday next week. Yeah. That's it.

RPR: Thank you, MBH.

### Speaker's Summary of Key Points

* TG5 hosted a successful event at Shibaura Institute of Technology
* There will be a Workshop on Programming Language Standardization and Specification co-located with ACM SPLASH in Oakland, on October 8, 2026

## CoC Update

Presenter: Chris de Almeida (CDA)

* No slides

RPR: CDA, what do we have from the code of conduct meeting?

CDA: Nothing, which is good. No new reports. No significant issues. As far as I'm aware, in our repos or other spaces, and as always, folks who are interested in joining the code of conduct committee can reach out to us and we are always happy to have more folks.

## Needs-consensus PR: make DataView.prototype.{byteLength,byteOffset} not throw when backed by detached buffer

Presenter: Kevin Gibbons (KG)

* [PR](https://github.com/tc39/ecma262/pull/3972)
* [slides](https://docs.google.com/presentation/d/1SgGitTmE7BtyJ2Vnqkv5CUOhhACuHFlIOe85qNXLBYI/edit?usp=sharing)

KG: So I am here to ask the committee about making the byteLength and byteOffset accessors on DataView prototype less throw-y. What do I mean by that? First, some background. Both DataView and TypedArray are views of an underlying ArrayBuffer. ArrayBuffers can become detached or can shrink. Well, some ArrayBuffers can shrink. Some can become detached. Also, DataViews and TypedArrays have these accessors for reading the length of the view and the offset of the view, which respect the underlying buffer. When the underlying buffer becomes detached, the original values for these accessors no longer have meaning. Your offset in a detached buffer is not a meaningful value. The length, you could say that the length is zero.

KG: The thing I am here to talk to you about is that these have different behaviour, which is, to me, weird. So when the view becomes invalid, either because the backing ArrayBuffer became detached or because the backing ArrayBuffer shrank such that the end of the view is now past the end of the ArrayBuffer, the TypedArray is now invalid or the DataView is now invalid. And when that happens, these setters on TypedArrays return zero. And on DataViews they throw. Here I have the algorithms for you. You can see these algorithms for byteLength, for TypedArrays versus DataView are extremely similar, except that TypedArrays return zero, DataViews throw a type error. Similarly for byteOffset. My proposal is to make the DataView ones not throw.

KG: So why would you do that? Well, consistency is the reason. These things are very similar. It's just weird to have them be different. And the reason this is coming up is that WebIDL is in the process of rationalizing their treatment of DataViews, TypedArrays, and ArrayBuffers. Which has been necessary for a long time and is part of what's been blocking movement on, for example, getting immutable ArrayBuffers shipped. But in the process of trying to rationalize WebIDL's handling of these types, they were trying to work with DataViews and TypedArrays and they ran into this inconsistency where they were trying to match the underlying spec, but the underlying spec is inconsistent. So I should also mention that ArrayBuffers similarly have a byteLength which behaves like TypedArrays. It used to be specified to throw when the ArrayBuffer was detached, but that was never actually web reality. Also, as you may be aware, we inherited these things from the Khronos specification. The WebGL specification. Which is part of why they're a little bit weird in a number of ways. And in the Khronos specification, none of them threw. And I dug up [the old spec](https://web.archive.org/web/20160204045935/https://www.khronos.org/registry/typedarray/specs/latest/) for us to look at here in case you're curious.

KG: And, an interesting fact here is that the way that these were originally defined, both DataView and TypedArray were specializations of a base ArrayBufferView interface where the byteOffset and byteLength properties were defined, and so it was impossible for TypedArrays to have different behaviour than DataViews because they were literally the same interface originally. So I think this just highlights how weird it is that they have different behaviour.

KG: Now, technically, we are changing the behaviour of shipping code if we do this. So there is a web compact question. We would be making an error into a non-error, which is usually fine. Also, I think it is pretty unusual to be working with detached or out-of-bounds buffers. Out-of-bounds buffers only became possible relatively recently. Detached buffers until relatively recently could only arise if you were post-messaging the buffer to a separate thread. This is an unusual thing to do. Also, DataViews are somewhat unusual to use. Most use cases for ArrayBuffers call for a TypedArray, not a DataView. Not all, so DataViews are used. And buffers do become detached. But I think the combination of these factors leads me to suspect that it is unlikely to cause problems in practice. Both because the code that would run into an issue here is relatively unusual, and because we are only making an error into a non-error.

KG: So this is the spec text. The change in spec text that I am proposing just in those two cases that I showed before where we have a throw a type error, now we return zero, matching TypedArrays. Yeah. So I would like to ask for consensus for this change.

RPR: You have some messages of support on the queue. So RKG says, "Web compatible consistency updates make me happy." Thumbs up. Dan Minor says, "Agree that these should be consistent." Support the normative change. RGN is +1. MM has a question. MM, would you like to ask?

MM: Yes. Can you hear me better now?

RPR: Just about. Are you fine?

MM: Okay. So there was the phrase on a slide, "Out-of-bounds buffer." Which confused me.

KG: Yes. That was my mistake. This should say, "Views of buffers where the view is now out of bounds because the buffer has been shrunk."

MM: Okay. That's the clarification I was looking for. Thank you.

KG: Yes. That was incorrect phrasing here.

MM: Oh, and I support.

KG: Thank you.

RPR: Thank you for your support, Mark. Mark. And Keith, sorry, before we move on, I think WH may have a reply to the current. WH, you're asking about a race?

WH: Yes. At what point can this turn from some nonzero values to zero? Are there any possible race conditions here?

KG: Fortunately not, because SharedArrayBuffers cannot shrink and cannot become detached. So this is only relevant for ArrayBuffers which cannot be cross-thread.

WH: Okay. So it's not possible to asynchronously shrink something and then observe via this functionality?

KG: That's right.

WH: Okay. Thank you.

RPR: Back to KM.

KM: Yeah. Plus one on this. I will take, I guess, a moment to get on my soapbox and say that we think that transferring ArrayBuffers should be considered a deprecated technology. But that is not necessarily the problem here. I think it's still a good idea to do this anyway.

KG: I will also mention that we have these new methods like transferToImmutable or transferToFixedLength which also cause an ArrayBuffer to become detached. Also, sometimes you just want to detach an ArrayBuffer so that you can free the memory without having to ensure every instance of it is garbage collected. So you still end up with detached buffers even if you're not literally transferring them to other threads.

KG: But also I would be interested to hear more about why you think transferring is deprecated. Because I'm totally still doing that in new code. But offline.

KG: Okay. Sounds like we have support for this. We'll get test262 tests landed. And then we'll get this PR shipped. So thanks for your time.

RPR: Thank you, KG. And I will trust you to write up your summary.

### Speaker's Summary of Key Points

* DataView.prototype.byteLength/byteOffset are inconsistent with the TypedArray getters of the same name, in that they throw rather than returning 0 when the backing buffer is detached or the view becomes out of bounds. The proposed change would be to return 0 in those cases.
* This could technically not be web compatible, but making an error into a non-error is rarely breaking, plus both DataViews and detached buffers / OOB views are separately unusual, so it will probably be fine.

### Conclusion

* "make DataView.prototype.{byteLength,byteOffset} not throw when backed by detached buffer" reached consensus to merge

## Normative: Update `RevalidateAtomicAccess` to account for all bytes of a TypedArray element

Presenter: Richard Gibson (RGN)

* [PR](https://github.com/tc39/ecma262/pull/3926)
* No slides presented

RGN: *Presenting the PR*

RGN: All right. The short description of what's going on here is that we currently have a spec bug: when a length tracking TypedArray has multi-byte elements (so it's an Int32Array, a BigInt64Array, etc.—something other than Uint8Array or Int8Array) and its backing array buffer is shrunk during the processing of the arguments for an atomics function such that the target element, which was initially inbounds, now still *starts* inbounds but extends past the new end of the backing ArrayBuffer that has been shrunk, then `RevalidateAtomicAccess` currently does not throw an exception and proceeds as normal, resulting in control reaching an assertion that fails for insufficient bytes in ArrayBuffer. The kind of scenarios where this comes up are code we're looking at on screen, where the `Atomics.and` function for index 1 takes the value argument, an object with a valueOf function, that shrinks the array buffer to only seven bytes rather than the eight that would be necessary for the complete representation of the element at index 1. So that sets the stage.

RGN: The reason that is coming before the committee is that the test262 PR, which I'll show briefly in a moment, isn’t passed by all implementations, which is relevant because this is being presented as a web reality pull request. However, the nature of their failures is consistent with their current non-conforming behaviour for shrinking the ArrayBuffer by a whole number of elements. So you do get an error everywhere except in Moddable XS, just like when you shrink the ArrayBuffer by enough bytes such that it falls on an element boundary. But in JavaScriptCore and V8, the error that you get is a TypeError rather than a RangeError. And that explains the test failures.

RGN: Actually, I'll jump over to that now. As we previewed earlier, test262 pull requests now surface what's going on for the tests. Regarding these tests, the complaint for JavaScriptCore and V8 failures is “expected a RangeError but got a TypeError” and for XS is “expected an error but no exception was thrown”. And as mentioned, that's already consistent with their existing behaviour for whole-element reductions. The ECMA-262 pull request itself is fairly straightforward. I'm going to show the rendered diff because that's a little more readable.

RGN: Previously, we were throwing the RangeError exception only when byteIndexInBuffer, the starting index of the element, was greater than or equal to the length of the ArrayBuffer. Now we're getting the element size, and we're checking the last byte index, which is byteIndexInBuffer plus the element size minus 1.

RGN: As an aside, `Atomics.notify` is unique in its non-use of `RevalidateAtomicAccess`. So shrinking the buffer of a length-tracking TypedArray during `Atomics.notify` argument coercion to mirror what we looked at above is not specified to throw; instead, you actually just immediately get a `0` result. This pull request is not changing that. I might come back to it at some point, although it's worth noting that this is really not an intended use case for `Atomics.notify` because that function really wants to deal with SharedArrayBuffers (which cannot shrink).

RGN: What is changing is strictly `RevalidateAtomicAccess`. As a representative example of how it is used, I’ll refer to `Atomics.load`. First we validate atomic access, then we `RevalidateAtomicAccess` because the first validation can invoke user code inside of the index processing. `Atomics.store` is similar. We do a few things up front and then `RevalidateAtomicAccess`. `Atomics.and`, `Atomics.compareExchange`, `Atomics.xor`, etc. all call into AtomicReadModifyWrite, which itself again has that same pattern—process the inputs (potentially invoking user code) and then `RevalidateAtomicAccess`. So the number of API functions that are affected by this one deep operation is fairly substantial, but not overwhelming. Coming back to the high-level overview then, what we're looking for here is just consensus to land the PR as it is and the corresponding tests for it, avoiding the spec bug that can cause a failed assertion and understanding that implementations will be expected to come into conformance with respect to thrown error specifics over time. So with that, I think I'm ready for the queue, if any.

RPR: You have support. DLM. Who supports the normative change. MM.

MM: I support also. I just in listening to all this again, I just have a question that just if you have an answer off the top of your head, otherwise we can just drop it. Why in practice do people actually shrink ArrayBuffers? What's the motivation? Not in theory.

RGN: I actually don't remember that. It might have been before my time on the committee.

MM: Okay. Okay. Thanks. I support this.

RPR: And MF, also supports this is clearly the right thing. So I think we've only heard support.

RGN: Okay. Great. Let's do it.

### Speaker's Summary of Key Points

* Implementations other than Moddable XS already throw exceptions in the relevant circumstances, but JavaScriptCore and V8 throw TypeError rather than RangeError (consistent with their behaviour when such shrinking fully undercuts an element rather than splitting it)
* `Atomics.notify` is unique in not using `RevalidateAtomicAccess`, but V8 implements `Atomics.notify` with such revalidation

### Conclusion

* "Update `RevalidateAtomicAccess` to account for all bytes of a TypedArray element" reached consensus to merge

## Needs-consensus PR: Allow `Locale.p.getNumberingSystems` to return > 1 items

Presenter: Jesse Alama (JMN)

* [PR](https://github.com/tc39/ecma402/pull/1074)
* No slides

JMN. Which is the get numbering systems. If there's no objection, I have these three items in one slide. Let me try to share them. Just a moment. I use Teams only at Sony. So the last time I used it was two years ago. It takes me a second here.

JMN: Yes. Okay. Yeah. I'm just reporting on what has happened in the 402 side of things. We have three items in a row. I expect these to be relatively uncontroversial. Just a couple of minutes. Per item here. Although, of course, we can go to the queue and take a look. After each one. The first one. Oh, just a moment. This is about the notion of numbering systems. Where we introduced a sectionally regression. And had to fix it.

JMN: This was something that was discussed back in July. But we got some feedback from Anba saying that we needed to refine our initial attempt to revert this. We found out that there's the concept of supported numbering systems in our locale. And numbering systems in common use. Which is essentially what's going on here with this comment from ABR. And the fix is implementing that. So we essentially take an intersection of the two concepts here. If we take a look here. So now this algorithm here or these steps is essentially taking the intersection of what's supported in the locale and what's in common use. Any questions or comments? So this received support at the most recent TG2 meeting just last week. All three items that I have now received support in TG2. No one is on the queue. So we could just.

SFC: I can't find the tab in time. But we actually discussed this a couple of times. And then I'm glad that Amba brought up this observation. And yeah, we discussed this in TG2. I'm hoping that also we can separately go through and make sure that this condition that ABR found is also enforced. And elsewhere that it may need to be enforced. And I prefer to.

RPR: Okay. Well, we have universal support. RGN says +1. DLM says thumbs up. I support this. And YSZ also is +1. So I think we can say we have consensus.

JMN: Okay. That's great. Thank you.

RPR: The next agenda item or next two are also yours, JMN.

### Speaker's Summary of Key Points

* Three items reached consensus at the most recent 402 monthly call and were presented to TG1 to ensure there are no objections.

### Conclusion

* "Allow `Locale.p.getNumberingSystems` to return > 1 items" reached consensus to merge

## Needs-consensus PR: Determine `getWeekInfo().firstDay` using First Day Overrides

Presenter: Jesse Alama (JMN)

* [PR](https://github.com/tc39/ecma402/pull/1097)
* No slides presented

JMN: Yeah, that's right. Again, just reporting on what we've discussed in 402. Most recently. And got consensus on there. Here, we have the notion of weak info. Weak information. And the concept of the first day of the week of a calendar. There's an algorithm that Unicode. Encodes or defines which they call the first day overrides. And essentially what we're doing is just mimicking that in 402. We can take a look here. Just a moment. This is the abstract operation. And here if we go down to the use of it. You can see that what we do here is we essentially just defer to that. So the notion of weekend is ought to be unchanged. But then the notion of first day is supported here. Calling this new first day overrides. So think about calendars in which say the first calendar day of the week might be Sunday. It might be Monday. Maybe even Tuesday. The intention here is to respect that in 402. We can go back to the oh, yeah. Any questions or comments?

RPR: DLM says support and SFC says?

SFC: Yeah, this change originated in CLDR when we realized that there's four or five different extension keywords that can influence the first day of the week. So about a couple of years ago, we spent some time in CLDR figuring out what is the correct fallback order. And this PR takes that and adds it into 402, which is exactly the right thing to do. So this is the process working as intended.

RPR: Okay. Are there any objections? No. I think we have consensus. The first day. Okay.

JMN: Great.

### Conclusion

* "Determine `getWeekInfo().firstDay` using First Day Overrides" reached consensus to merge

## Needs-consensus PR: Define %TypedArray%.prototype.toLocaleString

Presenter: Jesse Alama (JMN)

* [PR](https://github.com/tc39/ecma402/pull/1095)
* No slides presented

JMN: Last item and this is something that RGN hinted at briefly. Just a few minutes ago. Which is essentially defining two locales doing on TypedArrays. On the 402 side. This was essentially defined in kind of a hand-wavy way. But here we simply do the work. So if you take a look here. We have this is the definition here of whoops. Scroll up here. So here is the 402 side array prototype two locales string. Being simplified here. And then going further. Here you can see this is new. And we're just mimicking that here. So it's just filling out something that was perhaps implicitly contained there. But not actually specified. So TypedArray two locales string.

RPR: SFC?

SFC: Yeah. This encodes web reality with you currently, go and try to do this. This is the behaviour you get. And it was missing in the spec. And now it's in the spec. Thank you, RGN, for noticing this. And getting the pull request prepared.

RPR: MF supports this? Sorry.

RPR: Any other questions or comments? Objections?

RPR: No. If there are no objections, then you have consensus.

JMN: Great. Thank you. That's all.

RPR: Thank you, Jesse.

### Conclusion

* "Define %TypedArray%.prototype.toLocaleString" reached consensus to merge

## Normative: Make tail-call optimization normative-optional

Presenter: Richard Gibson (RGN)

* [PR](https://github.com/tc39/ecma262/pull/3957)
* No slides presented

RGN: All right.

Room: *Laughter*

RGN: For those who don't know, the background on this is that tail call optimization was introduced in 2015 in ECMAScript 6. And predates our current staging process. In fact, it also predates Ecmarkup. It's been 11 years and as far as I can tell, in those 11 years, it was added to just one browser and one major non-browser implementation. JavaScript core and ModdableXS implement it. All of the other well-known implementations that are downloaded by esvu do not. If someone were proposing tail call optimization today, this lack of implementation would definitely be deemed insufficient for advancement to stage four. So I'm proposing a relatively simple change here. It can be viewed on one screen. Which is that the step to discard all resources associated with the current execution context inside of the PrepareForTailCall abstract operation is prefixed as normative optional, such that the supermajority of implementations which do not include support for tail call optimization will be conformant with this operation. And I am seeking committee approval to merge this pull request and make tail call optimization normative optional. Shall we go to the queue?

RPR: WH has a question.

WH: Yes. Scroll to the thing that you showed initially.

RGN: To the code sample?

WH: Yes. The two print statements are the same, so I'm unsure which is which here.

RGN: Yeah. There's a GitHub bug. I was using emoji thumbs up and thumbs down to indicate support or lack thereof. And at some point, either I or someone else edited this description the emoji got lost upon submission. So the distinction is preserved. JavaScriptCore and Moddable XS here at the bottom are the ones with the thumbs up. And the remainder are the ones with the thumbs down.

WH: Thank you.

RPR: KM.

KM: Sure. This answer will come as a surprise to probably very few people in this room. But I mean, this was not a new proposal. This is the committee agreed to do this including members delegates from the organizations that have decided not to implement it. And in fact, many of those delegates were supportive of the idea at the time. It was standardized. The so we don't this is definitely implementable. I think the concerns about not wanting to implement it, are I think they're solvable. We've shown they're solvable.

KM: The so we don't feel that we should be going back on things like this. I also worry that if we do make it normative optional, as people are stating, below, it will be probably then presumed banned. Which then means we have to possibly remove the set optimization, presumably for other types of proposals like having consistent stack traces or having etc. And I think it's not even clear that we can't do that anyway. And I don't want to be in a position where we are going we have to solve this problem in some other way.

RGN: I would call your attention to this web reality label on the issue. I think it's extremely important that consumers of our specification get an accurate picture of what that specification means in terms of what they can do and what they can expect. 11 years is among the clearest signals that the participants of this committee have ever provided with respect to how they feel about integration of this feature. Again, if it were proposed today, it would be at stage three tops.

KM: I mean, I think there are many things in JavaScript that if they were proposed today would not happen right? I don't think we would do many parts of the entire language core parts of the language probably would not would be redesigned that doesn't mean we should go back and revisit all of those even if they are web compatible.

RGN: Well, those have implementation agreement. I can read the spec and know what a conforming implementation will do. And I have a reasonable expectation that the current implementations are conforming. That's not the case here. I can read the spec, write a function that assumes that tail call behaviour will be optimized. And then be extremely disappointed in two out of the three major browsers.

KM: I mean, I think there's also a question of is the entire and only purpose of this spec to represent what actually engines implement? Or is it to represent what this committee feels like are the expected behaviours of the language?

RGN: If an expectation goes unsatisfied for over a decade, I think the problem is with the person holding it, not with the people who are failing to satisfy that. And there have been other examples. So think about array sort stability. This is a thing that was never guaranteed. And because the implementations agreed, we were able to tighten it down. Even if we accept this change and make it normative optional to support tail call optimization, there is a potential future where implementations start supporting it. It does become a reasonable expectation. And then we remove the optionality. But as things stand right now, we have a spec that is inaccurate and that's just not acceptable.

KM: I think we'll probably just have to agree to disagree on that. I mean, I disagree that that is the only purpose of the spec.

RPR: Maybe we could try getting through the queue and uncover.

RGN: I was just going to suggest that.

MM: Yes. So Keith, you mentioned well, first of all, with regard to the overall issue, I want to agree with you on procedural grounds while emotionally supporting RGN's perspective. RGN says unacceptable. I agree with you that you have the right. So I want to agree with KM on the procedural issue. But emotionally agree with RGN. I think the current status quo is really terrible. And Keith, I wish that you change your mind. But as you know, I'm a stickler for the strict interpretation of the consensus rule. And to withdraw something that has already been part of the spec when there is no security emergency, I think requires consensus. The only time I would question the consensus is if somehow there is a security emergency. This is not that. But the reason I put myself on the queue was neither of those. I put myself on the queue because something you mentioned I think is at least more nuanced, if not quite a straw man. Which is if I understood correctly, you were saying that if we make it normative optional today, then tomorrow we might make it prohibited. And normative optional leaves JSC in conformance. If we prohibit tail calls, then JSC becomes out of conformance. So first of all, if JSC continues to be on the committee, then a normative change like prohibiting it you're in a position to block that. Also, there has been tremendous resistance on the committee to saying anything about what the content of stack traces is. I don't expect that to change. And if it doesn't change, then the spec is silent on the content of stack traces. The spec also never demands that an implementation reach an out-of-memory condition.

MM: So doing more garbage collection of unobservable things is always allowed because the spec never requires reaching out of memory. And I don't expect that to change. So I think that what's being proposed here does not lead to your nightmare of JSC going out of conformance. And I don't think that so I think the proposal stands of normative optional. And I think you should respond to that in kind.

MM: And with regard to the question you asked, what is the purpose of the spec? I would like to hear your opinion of what the purpose of the spec is. To my mind, the spec is the rendezvous point between users, tool creators, and implementers. And as a rendezvous point, if it's out of conformance with what engines actually implement in a permanent manner, that is a failure of the spec to serve its purpose.

RPR: Okay. I think we will go to JHD because there's quite a queue. So please be mindful of the time.

JHD: Yeah. So I agree with all the things that have been said in support of this of making it normative optional. As you said, KM, that's way back in 2015. That's essentially what we all agreed to. Anyway, we just didn't do anything about it. And this is now finally doing something about it. So I think we should certainly do this period. My follow-up question which might spawn too much debate and if so, I apologize. But I'm going to ask it anyway. Is there a reason we then it would be nice if we could then remove tail call PTC proper tail calls from the spec so that we could pursue which wouldn't make JSC in violation, right? Because the spec doesn't forbid that optimization. And then we could pursue syntactic tail calls or something similar in other words, using an explicit affordance that you want the tail call behaviour. Which to my understanding, addresses all of the issues anyone has with tail call optimization. And I assume would require a very small change in JSC's implementation. I could be wrong about that, of course. The only reason that we didn't do that 11 years ago was more of a philosophical / ideological one, not a technical one to my understanding.

RPR: And anyone that I see on the top.

RPR: Does anyone want to open this if this is a kind of an extra conversation?

JHD: Yeah. And as such, it can of course be deferred to a future plenary. Or future day.

RPR: Okay. And Chris points out we've got 15 minutes remaining. So let's proceed to the queue. So MAH.

MAH: Yeah. I wasn't there 10 years ago. I actually do not fully understand why this is in the spec in the first place. Because my understanding is that this is dealing in an observable behaviour if the machine had unlimited resources and had basically an infinite stack. So I understand that there is an implementation reality that the stack is limited. However, I am not aware of anywhere else in the spec where we admit the fact that we actually have resource limits and try and behaviour to optimize for that limit.

RGN: I do think it's appropriate in the spec. I would draw a loose analogy to the requirements of amortized constant time access for maps and sets. Where with the current state of the specification, it is required that even given finite resources, particular function calls are going to complete and won't exhaust those resources. That is a guarantee that can only be made because of the specific behaviour as it appears in the PrepareForTailCall.

MAH: And so if we make this normative optional effectively, the program cannot rely on that.

RGN: Right.

MAH: Which is also the reality today anyway. But right. So I'm just wondering why at all as well in that case if it cannot be relied upon.

RGN: Well, I mean, if you had interoperability on this point, then it could be relied upon. And the current specification requires that. It's just that engines don't implement this detail. And reading further down the queue, it looks like there are no plans to do so.

MAH: Right.

RGN: But I do think that it belongs in the spec. It is appropriate to communicate to developers that in a conforming implementation, they can rely upon not encountering resource exhaustion when they write their code in a particular way.

MAH: Yeah. This feels as if this could take the form of an editor's note in that case. But okay.

RPR: I think we should move on to your next RGN.

RGN: Okay. I think this is probably a restatement of MM’s question. If the spec is at least in part aspirational rather than descriptive, over arbitrary timeframes, then I'd like some clarification on what the position is that supports retaining normative required status for tail call optimization but not in requiring uniformity as was proposed for prefixing the accessor function toString output. Because it seems like this is a participant taking opposite positions on similar questions. And I'm not sure how to resolve potential disagreements without an understanding of what it actually is that the spec should be. I really like MM’s phrasing as a rendezvous point.

RPR: So the reply is that it's not web compatible from GIF?

RGN: But it is web compatible to introduce normative optionality to tail calls. Clearly, it's web compatible because on the web, no one can rely on them.

KM: Well, I'm talking about I mean, I'm completely open to the aspiration that we to have uniformity and get separate prefixing for the build and strings. It's just not a web compatible change. We tried it and then we had to revert it because it broke a bunch of websites. Because they were like, if Safari do this check for this version, if other browser check for this version, not saying that's the right practice to do, but it's what they do. It's the same problem with a lot of date things where because web pages check on the user agent precisely and then decide what they're going to do rather than falling through between possible implementations it's not compatible to switch.

RGN: But it is compatible. Again, it is compatible to recognize reality and make tail call optimization optional.

KM: But my objection is not about that it's compatible.

RGN: Okay. Can you clarify your objection, please?

KM: My objection is that this committee decided it wanted tail call optimizations in the language and we're not comfortable with removing it from the language. It's not about a compatibility.

RGN: I think this is a good time to move down the queue.

RPR: Yes.

RPR: JHD.

JHD: Yeah. I guess I should have put in a message. The spec can only be aspirational until we know we can't reach the aspiration. So for example, you tried the get/set thing. You couldn't do it. So we updated the spec to match that reality. Even though we would prefer that everyone be able to do it. It's not achievable that everyone implements tail calls. It's not going to happen. So aspiring to that is no longer valuable and hasn't been for over a decade.

RPR: Okay. And RBR has a compromise to suggest.

RBR: Yeah. I believe actually both are understandable. On one hand, we want to have the reality, which is it's not implemented. On the other hand, I believe it's also good to be aspirational. Right now, it's a very neutral wording. And sometimes it is about wording when it comes to this. So in this case, we could potentially say instead of it is optional, just taking it from a different angle and saying it's strongly recommended to be there because that's the aspirational character. Then there is also nothing about removing something out of existence which is already implemented. As it is recommended to do so. But effectively, it means it is optional that way.

RPR: JHD says that's already normative optional, when legacy is absent. And I think Keith has a reply too. Go ahead, Keith.

KM: We, I mean, we think that the spec is correct today and that web pages should be able to rely on tail optimization. Web pages or any scripts. It doesn't have to be web pages. So it's not that we don't think that this is a good part of the spec. We actually do think that it should be part of the spec.

RPR: Okay. And then you have a question about other implementations?

KM: Yeah. I guess I'm curious from other implementations if they want to speak or not. Why not implement tail optimization? I'm curious if it's the same reasons that were presented many years ago or if reasons have changed. I also don't want to take the whole thing the whole time to go over that. But.

OFR: Actually,I don't have a good answer. I think this was decided before my time. And not revisited recently. I know that debuggability is a concern. Basically, not being able to set a breakpoint and then basically your stack is gone and you don't know how you ended up there. I know that that was one of the biggest blockers I think. And I'm pretty sure that that would still count as a yeah, as a how should I put it? As something that we would think would be a regression if we added it. And also I want to okay, maybe this is a different topic, but I mean, no, let me put this as a different topic.

DLM: (from the queue): From the Mozilla side: doesn't know the history. Sorry.

RPR: And I see that KM says worth noting that the backtrace issue is solvable because JSC does it. So onto SFC.

SFC: Yeah. I mean, the way that we deal with any other features that are not consistently implemented is you just let engines fail the test262 tests for the things they don't implement. And why should we do something different here?

RPR: OFR has a reply.

OFT: As I understand it would not be possible to write a test262 for this. Correct me if I'm wrong, but range error is not part of the spec. So I wouldn't know how to even write a test for this.

RGN: Yeah. I agree with that. This is not the kind of thing that test262 is set up to cover.

RPR: So KM believes that there are tests. And YSZ says if I recall correctly, test262 has several TCO tests.

KM: Right. To clarify, you cannot write a test which is free of both false positives and false negatives in the abstract. Right. Because if you in fact have unlimited resources, then whether you implement tail call optimization or not, you will fail to exhaust those resources.

RPR: Reply incoming.

RGN: Correct. Yeah. GC tests have the same characteristic.

KM: Yeah. There's no GC there's no WeakRef tests that have no false positives. As well. So we have tests for things that I don't think this is going to be something to remove. That yeah.

RPR: Just waiting for the replies so I'll just say whilst we're waiting for this plus one support from CDA. For the whole proposal.

RPR: JHD says: so let them have failing tests. Is not intended to be a coercion tool. Just an indicator of reality. What most of the web does is web reality. Thank you.

RPR: WH says: Fine with normative optional. Don't delete tail calls altogether.

RPR: DLM says: support normative optional no plans to implement TCO. And Matthew says whilst I don't think normative optional is even necessary, I support it as a resignation to reflect reality.

RPR: Then CDA says please consider updating your browser. Not sure what that means. Oh, sorry. That's a comment about the UI colour scheme. And it means nothing more than that.

RPR: But CDA, would you like in the last minute, would you like to talk about history?

CDA: Yeah. Just real briefly. I just did a quick search in the notes repo. I think it was back in 2016. The Google position was that they could implement it, but silently deleting stack frames from ordinary existing return F code is bad for debugging profiling telemetry and developer intent. And Mozilla had security concerns across realm security membranes fundamentally interfere with the bounded space guarantee and programmers cannot know when those membranes are involved. Plus, we share many of the debugging and predictability concerns.

RGN: Is it a final comment in this time slot? I've been encouraged to request an eight-hour extension. Does anyone feel up for it?

RPR: I'm actually really pleased that everyone has been respectful of time here. We've got to the end of the queue.

RGN: I will again supply the summary offline and I think this will be put back on the shelf for now.

RPR: Okay. Thank you, RGN.

RGN: 10 more years.

### Speaker's Summary of Key Points

* Despite being required by the spec for 11 years, a supermajority of implementations do not optimize tail calls.
* There was much support for the PR to make tail call optimization normative optional, but it was not unanimous.
* There is no current intention to optimize tail calls in SpiderMonkey, V8, or any other implementation that does not already conform.
* A question was raised about whether introducing syntactic tail calls would resolve the objection to this PR, but it was not answered.

### Conclusion

* The PR does not have consensus.

## Establish normative conventions for invalid input strings: RangeError vs. TypeError

Presenter: Richard Gibson (RGN)

* [PR](https://github.com/tc39/ecma262/pull/3982), [PR-comment](https://github.com/tc39/ecma262/pull/3982#issuecomment-5774277939)
* [slides](https://docs.google.com/presentation/d/1beXrmkClhi-J0NvgoppM4yj4uWIcgQppytVG7IBNC8s/edit?usp=sharing)

RGN: So this is an attempt to establish normative conventions for invalid input. RangeError versus TypeError, versus… we will see. First, an excerpt from the spec. We've got a section describing native error types. There's a fairly large handful, a lot of them don't see much use. Some of them are legacy, but these three at least are still in active use. In alphabetical order, RangeError indicates a value that is not in the set or range of allowable values. SyntaxError indicates that a parsing error has occurred. And TypeError is used to indicate an unsuccessful operation when none of the other native error objects are an appropriate indication of cause. Going over a little bit of incomplete history of their use, some of which are in external documents that don’t get versions… I didn't have a chance to do full digging. But the earliest example I found is one of ours. It's ECMA-402 in 2012. Among other options, `Intl.Collator` validates `usage`. When usage is not one of the known valid strings, it throws a RangeError. Also, when in `Intl.NumberFormat`, `currency` is not well-formed, we have a RangeError. And coming over to ECMA-262 in 2015, the introduction of `String.prototype.normalize`, its `form` parameter accepts only four values and otherwise throws a RangeError. Skipping forward by almost a decade, Temporal has APIs that act like the ECMA-402 ones. When a value is not well-formed or when it is well-formed but not valid, we get a RangeError. And then hot on the heels of that, some recent proposals that haven't even made it into an annual edition yet. `Iterator.zip`, `Iterator.zipKeyed`, and the UInt8Array base64 APIs have respectively `mode` and `alphabet`, and when those strings are not valid, we get a TypeError. Briefly looking further afield, in HTML, there are a handful of legacy APIs like insertAdjacentHTML that expect a string from an enumeration and invalid strings result in a SyntaxError. Modern WebIDL has guidance to say when a string does not come from a particular set of valid values, that the result should be a TypeError. That last guidance was used in the context of our recent ECMA-262 proposals to justify TypeError in response to an issue that was suggesting RangeError. So as you can see, we've got a mix of behaviours. The older ones tended to prefer RangeError, but arguably even in inappropriate cases, like well-formedness violations. The newer ones, especially in the two recent proposals, have been specifying TypeError, citing alignment with the web. And then as a bonus, not specifically requiring consensus here, but maybe we can also get it, here are some examples of runtime SyntaxErrors… JSON.parse, BigInt, eval, Function. And there are a number of cases in Temporal that currently are specifying RangeError for similarly ill-formed inputs. So we're in this kind of weird state right now where, as the previous slide shows, there's guidance for when the specific kinds are appropriate. And then there's the actual specified APIs that don't quite align with that guidance. What I'm seeking today at a high level is normative conventions either to strive for using these errors under particular circumstances. I don't think RangeError is going to be abandoned for things like numeric bounds where something must be from A to B. But at least with strings, we have a variety of behaviours and I would like to be able to write down some clear guidance. Are we committing to following the guidance implied by native error type descriptions in ECMA-262, possibly with a few updates? Or are we going to kind of adopt the base64 and `Iterator.zip` approach of treating string enumeration violations with a TypeError. I don't have strong feelings about it. I think there are decent arguments in both directions. If others have strong feelings, I think that can guide the discussion. But if I'm forced to share an opinion, I will do so in the pursuit of actually getting some resolution here and writing down what we want this to look like going forward. And in particular, it might affect Temporal either in the existing proposal or as a fast follow. Probably the latter.

RGN: So with that, I'm ready for queue items.

JHD: Hi. Okay. So I think type error is wildly overused. And I think WebIDL's definition is just bad. Literally, the description of the thing that you read says in the range of allowed values. And we have something called range error. So it doesn't make any sense to me to use anything but RangeError for that case. And I just think we should use whatever error type actually makes the most sense for a given thing. If we can describe that and make a rule out of it, awesome. But I don't care if there's a rule or not, as I care that we use the error that makes the most intuitive sense. If we're not going to do that, then why don't we just use bare error for everything? There's no point in having all the subtypes if we're not going to actually make it make sense. And TypeError for something that is the correct type but not a valid value is completely nonsense.

MM: Yeah. JHD, in my experience with JavaScript is that I've seen code that switches on SyntaxError or not. But I've not seen code that switches on TypeError versus RangeError. So the thing about if it was green field, should everything just be an Error? It might still be worth distinguishing SyntaxError. But yeah, I would say that the differentiation to error classes is only historical baggage that we're carrying forward without being able to make sense of it. And that's why I'm enthusiastic about the code proposal. Because it gives us a fresh chance to enable programs to switch on a meaningful taxonomy but the error taxonomy we have is just beyond repair.

JHD: So I definitely have seen code that switches on all the various types. But it's always when typically, that's just trying to detect quirks or specific agents or whatever. Meaning it's not about what the type is. It's just about what that the type can tell you about the environment. So I'm not really I don't really care about those use cases. I'm talking about just debuggability. I want error types to be useful to humans. I don't want code to be checking it. I want humans to look at it and have it make sense. And I think that and I agree with you completely about the code proposal. That will also help. But having everything be an error with just a different code is also not very helpful when you're looking at stack traces and logs.

JHD: If something is a RangeError, an error in a range, it should be a range error. And then the code should give you the specific information.

MM: I pass.

SFC: Yeah. There's been a number of examples that have come up over the last couple of years where the question is, WebIDL says we should do this thing, but TC39, we've done this other thing. Case and conventions come to mind. I know there's others I didn't look up all the other examples. But I think that there's two there's two outcomes here that I think are reasonable outcomes. One is that we are self-consistent within to ECMA 262 and ECMA 402, in which cases, we should use RangeError because that's the oldest and biggest set right? And consider the two that aren't using RangeError to be anomalies. And then that's one reasonable outcome. The other reasonable outcome is we do a global we take a step back and be like, should we be aligning more with WebIDL? Or should WebIDL be aligning more with ECMA script, right? This is actually a good example. Maybe we actually want to go to WebIDL and be like, maybe there's some things that WebIDL does we want to integrate. Maybe there's some things that we do better than they do than WebIDL does. And then we want to maybe push those out there and do an actual concerted effort to resolve these types of misalignment issues. But I don't think that we should be taking these little things and saying, oh, because WebIDL does it, we should do it. I don't think that's the right approach necessarily.

WH: My question here is, why don't we just use the existing guidance as it is? It's something which is very tricky to legislate in the abstract. If we have specific controversial cases for which it's unclear how to apply the existing guidance, that would be interesting to bring to the committee. But just trying to say, should we continue to do this or not in the abstract?—I'm not sure how to answer that question in a productive way.

MF: Do we have the exact text of proposed guidance?

RGN: No. My plan is to ideally get an agreement in principle here. And then come back with some text that documents that agreement. The short description of it is going to be an enumeration of cases where we feel like RangeError is appropriate. Ideally, also an enumeration of cases where we feel like SyntaxError is appropriate. And as you can see on the screen, TypeError is kind of the catch-all for just about everything else. And the question on the table here, more narrowly, is for when there is a collection of valid strings and the input is a string outside of that, whether we want to use range error or TypeError.

RBR: I believe TypeError is currently in the ecosystem itself. Used a lot for input validation. And it's more like why is it used? Because there are no other more specific error types. Which is good for debuggability that Jordan was speaking about. So it was more of which is seemingly the one that fits best from the existing ones. So maybe we don't have enough types for representing that. That's something I would like to bring up as a question here. And second part is, when it comes to the range error and differentiating it to type errors, I do feel that RangeError is often used as a subgroup of the TypeError when it comes to input validation. And because it is more specific, it is really about numbers in this case, or some kind of range that you can represent as such. So that's easy for a human to understand what it represents. And I believe that that should be the focus of the classes that we have.

RGN: Well, our own guidance does not limit RangeError to numbers. Nor does our long-standing behaviour. So I think there's support for the case of using RangeError. I don't think either decision is particularly bad. ECMAScript has a long history of very impoverished error classes. That's the justification in part for adding `code`. But impoverished is not the same as singular. We do have these types. We do already use them. And it behooves us, I think, to decide whether or not to continue using them. We have no intention of ever introducing a new source of URIError exceptions. But I don't think that's true for the three in question here.

CDA: Shane looks like you have the next three topics. Do you want to go in order?

SFC: Yeah. Just the first one is just my someone asked earlier like, well, about can you explain more clearly the definition here? My fuzzy mental model is that a TypeError is a thing that I should not get if I use TypeScript. But this is not completely exactly correct because there are things that are type errors that are not type script errors. But that's at least for me, that's like when I'm writing 402 spec and I'm like, is this supposed to be a type error or a RangeError? I look a little bit at the ECMA script guidance that was on the slide earlier. But I also just think like, is this a thing that TypeScript would catch for me? And then a RangeError is like, okay, it's the right type. It's a string. TypeScript is happy. But the string is the wrong type of string. And with TypeScript, you can do like string enums. I think TypeScript support has supported those for a long time now. But that's, I guess, my fuzzy that's why I emphasize fuzzy mental model, for the difference between a TypeError and a RangeError. But I think that there is something to go and I think. This topic two, looking at the guidance again, it raises questions about there's some examples where there's a syntax error and I'm wondering whether when we have a grammar and if something doesn't obey the grammar, should that be a SyntaxError? If it doesn't obey the grammar, question mark. Topic three, I've definitely written code and I know a lot of other people write code that when I want to tell when I actually want to branch my code, depending on what error was hit, I never look at type error versus RangeError in general, unless I can. If I can, it's great. But usually, I look at the error string, which is a terrible thing to do. But that's what I've written code that does that. And I know a lot of people write code that does that. So that's kind of the status quo for what people have to do. And it would be great if we could actually give them something better. Like actual error types I think that this example that just got brought up about URIError called, maybe we should be doing more of that. If there is an error type that's not clearly the same in the same class as a pre-existing one, just make a new error type for it. It's fine.

RBR: I second and have more dedicated error types for some parts, especially when it comes to error classes and different both directly to the formal part. Then you were speaking about exceptions, that are also already existing not only about a specific error type, but I believe also about sometimes something being a TypeError or a RangeError where it doesn't really make a lot of sense. And I believe that's kind of natural. I believe we will always have cases like that. The ecosystem is never fully consistent. And I believe even here, it's sometimes a little bit fuzzy in what is right or wrong or do we always perfectly get it right in the first pass. As long as it works pretty much in most cases for this because these errors will be read by a human ideally. Well, maybe not in the future anymore. But at least for now, still. So therefore, making them easy to understand is what I would target, in average.

JHD: So I'm going to take a minor risk here and say that this is actually, I think, analogous to the term transpiler. There's a group of people that get angry when they hear that term because they say, no, it's just a compiler. When in fact, it's actually describing a subset of compilers. That distinction may not matter to many people. And that's fine. But it does matter to some people. And that is why the term exists and is useful. Similarly, there may be plenty of people that think that all errors are just errors and there's no point in having subtypes and we should just only have error. And that's fine. In their applications. But the distinction of RangeError may actually matter to some people. And it from debugging, from literally just looking at stack traces, it does matter to me and has mattered to me and many of my colleagues over my career. If you don't want to use the extra information, don't. But that's not an argument to deprive the rest of us of something we find valuable.

CDA: The queue is exhausted.

RGN: So one thing I would like to do now, I think, is a temperature check. Just to summarize opinions on the preferred error type when I provide a string that is not in the set of allowable strings. So looking at, for instance, near the bottom here, `Uint8Array.fromBase64("", { alphabet: "WTF" })`. Should that be a RangeError or a TypeError? Let's say thumbs up for RangeError, thumbs down for TypeError.

\* preparing temperature check *

CDA: Unbelievable. RPR is not here to tell us a joke while we figure this out.

\* RPR walks in, tells a Joke, and walks out *

CDA: All right. The TCQ poll is up. Temperature check. Please indicate your preference.

**Poll:** Uint8Array.fromBase64("", { alphabet: "WTF" }) (1 min, 24 voters)

* 👍 RangeError: 18
* 👎 TypeError: 4
* 🤷 Indifferent: 2
* ❓ Confused: 0

CDA: You have 18 for RangeError, 4 for TypeError, and 2 indifferent 0 confused.

RGN: Okay. And the last moments of this topic, now I'm interested in understanding how strong people's opinions are. If anyone is willing to go on the record as objecting to not getting their preferred option, and in the absence of that, then we can do it anonymously via temperature check.

JHD: I will. So WTF as an alphabet value, is the set of alphabets isn't a type. There's not alphabet types. So I don't think in any way that it should be a TypeError, and I would object to that.

MF: Okay. I think that this is a longer discussion than we have time for. And I would like to actually have this discussion at one point. The brief form of it is I am of the opinion there is only one type in JavaScript. You can pass any value to any function that expects anything. They're all just values. There are functions and operators that distinguish between some of those values and treat some of them differently than others. That does not make a type. That being said, we can use our intuition about what we feel are things that are different enough and what our expectations are and we can say that is the thing that should be associated with a TypeError. And in that case, I come down on the side of these things producing a TypeError. How strongly do I feel about that? I think it really doesn't matter. But I don't want this to lead to any kind of precedent that we consider these things like separate types or same types or anything like that because I think that is a longer conversation that we should have but we don't necessarily need to have right now.

CDA: I apologize, but I just noticed that we are past time. So I have captured the queue in case you want to continuation. It might be a good idea. And we must move on.

RGN: Okay. I think that works for me. I have enough input here that I or someone else can present something concrete for the next iteration of this discussion. And I will probably do so. Thank you.

### Speaker's Summary of Key Points

* ECMA-262 describes intended semantics of native error types which are inconsistently followed.
* Older ECMA-262 and ECMA-402 tended to prefer RangeError, even for well-formedness violations.
* Temporal has even broader use of RangeError.
* Other recent ECMA-262 APIs, particularly joint iteration (Iterator.{zip,zipKeyed}) and Uint8Array to/from Base64, use TypeError for strings not included in a finite enumeration of valid values, aligning with WebIDL.

### Conclusion

* Regarding the appropriate error for “a string that is not in the set of allowable strings”, a temperature check revealed 18 in favour of RangeError and 4 in favour of TypeError (and 2 indifferent).
* It might be reasonable to seek changes in WebIDL.

## Iterator Join for Stage 4

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-iterator-join), [PR](https://github.com/tc39/ecma262/pull/3948)
* No slides presented

KG: Okay. This will hopefully be quick. Iterator prototype join is at stage three. It is shipping in all major and many minor engines. I believe it's in stable Chrome and Firefox. I don't know if it's in stable Safari, but it's unflagged, so it'll get there eventually. There's tests, of course. There is a pull request approved by four editors. The pull request is fairly small. I would like to request stage four.

CDA: You have support from DLM and MM. Also from LVU. And JHD. Presumably CM. Yes. Support from CH. As well as YSZ. Do we have any objections to stage four? Also support from MF. All right. Sounds like you have stage four. Congratulations.

KG: Thanks very much.

CDA: Oh, also support from CHU.

KG: The microphones do an astonishing job of filtering out the sound of applause. I appreciate the applause and could not hear it. That was very strange.

CDA: Well, it was loud in the room, so.

### Speaker's Summary of Key Points

* Proposal is shipping in all major and many minor engines, and has an open pull request approved by four editors.

### Conclusion

* Iterator Join advances to stage 4.

## Structured TC39 data status update

Presenters: Michael Ficarra (MF), Jordan Harband (JHD)

* [repo](https://github.com/tc39/data)
* [slides](https://docs.google.com/presentation/d/1Qr0soLiTxn6od612KAnkDttMDhyS1BBRmFjmd9ken8Q)

MF: I wanted to give an update on the topic that we discussed last meeting on representing all of our data that we maintain in a structured machine-readable format. So as a reminder, this is what our goal is. This is what we kind of decided directionally to do last time. We want to have a repository of machine-readable data sets for all things related to TC39 for use in things like tooling, analysis, verification, configuration, integrations, whatever you can think of. Examples of those data sets. We have all of our proposals and their current stages, their associated stage 2.7 reviewers and their tests, their presentation dates. We have our process, how our stages are related to each other and what their entrance criteria are, what their names are. We have all of our delegates, 600 of them, and their affiliations if they are current. We have our specifications and other documents that we publish. We have our normative conventions. We just talked about it in the last session. We have all sorts of roles that delegates hold and then those associations to the delegates. We have our agendas. Meeting dates. There's so many of these pieces of data that can be more useful to us if they were integrated into tooling that we build. So the status is we now have a repo. We've put everything in this monorepo at the moment. I think that's the plan going forward. So this repo is at tc39/data. Here's a quick look at the plan and where we are with things. So I have for now the delegate data in the repo. That's been published to NPM. The first step is we want to just take your existing workflow and have it backed by this canonical source. We have a pull request that auto-generates the `delegates.txt` kind of like you use it right now from that published data. So we're no longer in need of manually maintaining delegates.txt. In the future, we would like to have something more usable than `delegates.txt`. So you can sort and search and that kind of stuff. Like a web UI, but that will be future work. We also have the TC39 process encoded in the repo. And we've published that as a package to NPM. And we have in-progress pull requests for all of the TC39 proposal data. A pull request to add all that data and then also a similar pull request to generate all of the markdown tables that you're used to using on the tc39/proposals repo. So again, the plan that we're trying to follow is to kind of silently swap out all of the things that exist today, very transparently, and have them actually all generated from the structured data sets. And then as a follow-up step from there, make better, more usable ways of interacting with that data. Actually reap the benefits of this plan.

MF: So I want to talk about a lot of cleanup that I've had to do of this data as I'm processing it. Our data practices have not been good over the years. We have missed lots and lots of things. We obviously have great record keeping with the notes, but actually associating those notes with proposals—it's just ad hoc and lots of it has been missed, as well as a lot of other data maintenance stuff. So as part of this process, I have gone through and with great help from AI assistance, added 600 associated references for proposal presentations to all the various proposals. So now you have what we feel is an exhaustive list of all the times each proposal has been presented, rather than just one or two maybe. There are also lots of broken links that we've fixed. Now all of the proposals have all the relevant test262 links as well. We had lots of missing data on stage 2.7 reviewer assignments. During this process we've also actually defined the inactive stages that we have. I'll talk more about that in a little bit, but we have an inactive proposals table and they are at the moment assigned to these different stages that I want to formalize. There's also, in the `delegates.txt` file, there are delegates whose names are no longer the preferred names of those delegates. So based on the GitHub data that we now have associated with them, I've gone through and cleaned that up. I'll talk more about that one as well. Oh, yeah. The affiliation with the Ecma member was previously only available through the GitHub Teams that people are assigned to. That's now also available in there. And I was able to associate 442 out of the 581 GitHub handles with delegates, which is actually, I think, a really, really good result. We can't get to 100%. Some people probably don't even have GitHub handles. Remember this committee predates GitHub. So as you know, not all 581 delegates are active or even recent at all. So I think we may be at the point where there are no more to discover. So that's all really handy information to have.

MF: So on that first topic, I wanted to cover in more detail acknowledging de facto inactive stages. This is what the inactive proposal table looks like today. As you can see there's a rationale column. And there's a tag at the beginning of it. See: withdrawn, rejected, postponed. So we, as a matter of fact, have these additional states that proposals enter when they are no longer being worked on. So as part of this presentation, I would like to reach consensus to officially acknowledge these states. So it doesn't have to be exactly this. I'm open to changes. In fact, I don't think it should be this. But these are the closest to what we have already assigned these in our current records. So again, just when you're doing this data cleanup and you're trying to make everything regularized, you have to make things fit into your system. And this is the best fit that I see for the data that we have today. I personally don't think there should be a difference between abandoned and withdrawn. That's a conversation to have in the future. This closely matches our data today. So I'll come back to this later and we can read the exact descriptions together if you want. But that is something I would like to ask for consensus for.

MF: And yeah, we can reference this if you want. These are how the proposals that are currently inactive fit into those buckets. Again, we can reference this slide later. On the delegate name thing,

JHD: I just wanted to point out this stuff, it was very ad hoc. I was just trying to organize the proposals in the inactive proposals table. And so I came up with these terms. So if they're not ideal, we can totally change them. It is literally just I decided to do it and I did it because I wanted to put more context in there. So if you have any thoughts about how to improve this stuff, that's more thought than was put into naming it in the first place. So please let us know.

MF: Yeah, yeah. Personally, I feel like we should take this kind of staged process with this. Kind of like what we're doing with how we consume delegates.txt and stuff, where we just try to transparently swap out what we have and then work on improvement later. So I think we should just try to match what we have as closely as possible and work on how we can always reclassify these things later if we have a better formulation.

MF: So for delegate name updates, we have generally two sources of data for delegate names. We have the data that was entered into `delegates.txt`, usually by that delegate themselves at the time when they first participated in the committee, and basically never gets updated. Then we also have information on almost all of those people from their GitHub profile. That would be how they would like to present themselves on GitHub, which they are allowed to update at any point. This could be a very difficult process, but I think luckily it actually fell into—it was rather straightforward because everything fell into these simple buckets. So where those names differed, they were one of these cases. So many of them were just abbreviations like somebody only providing a first name on GitHub. That kind of thing. So those were easy. You just take the person's unabbreviated full name that was provided. There were cases where the delegate's GitHub name matches or contains the GitHub handle in which case that was assumed to be a pseudonym. So again, taking their delegates.txt name. There are cases where there were just styling or capitalization differences which were probably inconsequential, but also easy choices. And then there were cases where there was a completely different name. And in those cases, you prefer the GitHub name. Because again, it's the way that delegate likes to present themselves to the world today. The only case that I thought was questionable was this one. I don't know who Subo Zheng is. This was the only thing I felt was a judgment call. If anybody knows who this is or how to contact them, I would love to use their preferred name. But because their GitHub name was an English word, I figured it may have been a playful name and kept their delegates.txt as the more reliable fallback. So anyway, I know that names are a very sensitive topic. I am trying to do my best and be as respectful as possible in this process. The end goal is to just have more delegates referred to by the names that they prefer to be referred to. There's like 600 people on this list. I can't reach out to everyone who would be affected by this. The second source that we have is GitHub just because we have the handle available for most delegates. Happy to use other sources if we have those other sources for these people. Yeah, during this process, I tried to not make any assumptions. I think luckily I didn't really have to other than that one case. Oh and I think that this is an important problem to solve because the status quo includes names that people would specifically not like to be referred to such as the names they were born with or their deadnames. But if you have any concern about any of these choices or you have any more information about them, reach out. We can try to improve it. Yeah, and examples of sources you can provide for these things: if they have publications or a personal website, a portfolio, LinkedIn, these kinds of things. We can use those as additional source evidence or we could, if you have contact information, we can just reach out to them. Oh, so yeah, this is not a perfect process. I think it's possible that we have actually succeeded at being 100% aligned with what people's preferred names are. But I think that it brings us to a much better place. I think it's an improvement and that was why it was worthwhile to clean up this data. I wanted to show this trolley problem picture as well because I think this is kind of where we are. We know that there are more cases—well, sorry. I am highly confident that there are more cases where somebody prefers their GitHub name and would not like to be called by the delegates.txt name than there are people that prefer the delegates.txt name and would not like to be called by their GitHub name. And there's no virtue in not doing anything here. It's actually—by not doing anything, we are making the choice that more people will be referred to incorrectly in these documents and within committee. So I think we should act here. And then JHD wanted to jump in.

JHD: So I also want to point out that the delegates.txt listing in the majority of cases actually didn't involve the delegate in question. Anyone that predated that file we just summarily added and unless they thought to check it might not match what they want. Additionally, the typical process is that the person who is inviting somebody to be a delegate like the main point of contact for the company is the one who makes the pull request to the notes doc and the delegate themselves is rarely even involved in that PR. So certainly we want everyone to be described by their preferred name. But it has often been a sort of ad hoc decision by not that person. Additionally, in notes, I always try to change references that say "Jordan" to be "JHD". Because that way I'm consistently referenced. But I don't do that for everyone else because it's too much work. So there are a lot of cases where names will appear in notes if you're the presenter, certainly, but also if you're just mentioned in conversation. That as is mentioned on the queue, that if your name changes, that's a lot of places you might need to go update. Whereas if we only use the abbreviation, you wouldn't need to. So there's a lot of just as MF said, this is not getting us to a perfect place. This is getting us to a better place and we can iterate here. As needed.

MF: All right, so continuing the presentation, how do these changes affect you? If you're just like a person who's consuming this, as I said, we're trying to be super transparent with this and there should be no change to your process. You just open up delegates.txt and it uses the data source from the data set. You open up the tc39/proposals repo and you look through the tables. They'll just be much more complete and accurate now. So yeah, the vast majority of you, I think, it's not going to affect at the moment. Hopefully in the future, you will actually have a much improved process once we start actually generating better things than the simple text files and Markdown files that we have today. For people who are authoring proposals and stuff and for JHD, the structured data is where we should maintain stuff. Don't directly update it. Update the sources of those now-generated files. They're not technically generated now. They're still landing in PRs. But very, very soon they will be. For chairs, we need to work through updating our processes because right now our onboarding process is—part of it is adding to delegates.txt. We need to say add to the structured data instead. So we'll get those worked out. We'll make sure all the processes that the chairs use are accounting for the new structured data sets. And yeah, similar thing with affiliations. We have to track it on GitHub. Unfortunately, that is a place where things are going to be duplicated. There's no way to avoid that because a lot of GitHub permissions stuff is managed through the GitHub teams. Going forward, I still do think that this is something that the committee shouldn't really try to micromanage. If this is the way that JHD wants to present our records to the world, I think that we should allow the administrator to do that. But of course, if we ever take issue with it, we have the right to get involved. So these are the things I would like to talk about. Very strong preference of doing things in this order. So I think I'm going to strictly manage the queue. And yeah, so first thing, I would like to have any necessary discussion about the inactive states and then get to a point where we can make a call for consensus on that. Because I really expect it to be uncontroversial.

CDA: Shane has a question. The answer is that it's public. It's already public.

MF: Yes. We have Chris with stage or status?

CDA: Yeah. So I don't want to recognize these as stages. Like in the formal way that we have stage one, stage two, stage three. Because it can't be a state machine. Because if you have a stage two proposal that's just been abandoned, it's still stage two, right? So I would like to not think of the mental model of these should be a state or a property but not a stage.

JHD: So when I was thinking when I made this column in that table was trying to convey information about why a proposal is inactive to people who have ideas, whether it's delegates or not, so that they know if it's worth trying to pursue them or not. So for example, when I put withdrawn, I was implying that anyone who wants to could bring it back. And when I put rejected, I was implying you really should understand and research and talk to people before you waste any time trying to bring this back. I was not trying to imply that something that's marked rejected can't be brought back. I was just trying to save time for the person who wanted to. So I kind of agree there that I don't think we need to adopt this as a state machine thing. Maybe just lightly agree that we're okay with some sort of labels here to convey why something is inactive. But it doesn't but be very clear that that doesn't lock anything in.

CDA: Yeah. No, all of that sounds great to me. I just don't want these to be actual a stage with a capital S. There's a reply from Ashley.

ACE: Maybe they already but can these be derived things so we can actually based off the data rather than a separate field? I think if one of them was it wasn't stale. It was similar. That sounds like the type of thing that can be derived from the fact it hasn't been presented in so much time as opposed to something that we actively mark and yeah, I kind of also share I think some of Chris's concerns.

MF: So all of the ones that are listed there, have happened that transition, you can point to a topic in committee where the committee discussed that and that happened.

ACE: You can't point to something being stale. It's derived from the fact it hasn't been talked about. But we don't officially abandon things.

MF: Yes, we do.

ACE: Especially when I'm not taking notes right now. We can just maybe have officially withdrawn things, but we also have a lot of things. And Peter does a really good job of once a year let's do a cleanup and go through things. There are proposals that we haven't officially withdrawn. But clearly no one is working on them, at least not publicly.

MF: Yes. There is a difference between when the champion group has come to committee and asked to officially withdraw a proposal and when somebody else from committee has come to committee and asked is there anybody still participating in committee who is part of this champion group? Or who would like to take over this proposal? And if nobody steps up to that, we consider that abandoned. So these are two separate kinds of—I think that that's an important distinction that should be communicated. So that's why I have those two stages.

ACE: Yeah. I think you are saying what I'm if every status is tied to a concrete thing, as opposed to it just being its own field, then yeah, I think that satisfies my desire.

JHD: So yeah, anything that is in the inactive table was a result of either a committee decision or an explicit statement by a champion somewhere, even outside of meetings. So I didn't just arbitrarily put things in that table. I only did it when I was told to, basically.

MF: I can also show the text. It might be a little bit small on here, but it kind of clarifies that. You can read there if you want.

CDA: So we are technically at time, but I just extended the time box by 15 minutes. And cannibalized my topic. So let's continue. Peter.

PKA: Yeah. So I'm trying to figure out how we decide something is rejected versus withdrawn. I feel like there are a lot of cases where things are, let's face it, rejected. But what happens is that somebody I mean, we just saw earlier today RGN put something forward for a consensus. Keith spoke strongly against it. And RGN said okay. And there was sort of an implicit rejection. And maybe also implicit withdrawal in the face of implicit rejection. So I'm just wondering how do we deal with that? I would prefer to err on the side of being really explicit and saying what really happened and people not getting the wrong idea that like, oh, we just decided we didn't want to do records in tuples anymore or whatever. So yeah, just curious.

JHD: So the difference that I used when I just applied the label is I put rejected when the committee wasn't interested in solving that problem any further or wasn't interested in the only form of the solution that seemed viable. By my reading of the notes or my participation, yeah, whenever it was simply so in this case, for RGN's case, I would not put that as rejected if it were a proposal. I would put that as I don't know. I don't know what I would put that as actually because it's not necessarily withdrawn. It's also not rejected though because it was it didn't achieve consensus, but that's not the same thing. So just to be clear, that's I wasn't envisioning rejected as somebody said no. I was rejecting it as enough people said no that please don't bring it back. It's a waste of time.

MF: Right. So I don't want to get too into the nitty-gritty details of this. The thing I totally get is that these are not ideal. And this isn't me asking to—we could totally have this conversation. But this would need hours, right? And all I was asking for here was if, as the data is described today, we could just acknowledge that as a committee we had consensus. If it's too difficult for that, I can skip that. But I don't want to go into actually what the ideal is because I agree it needs further refinement.

CDA: Yeah. Excuse me. I had a reply on the queue. Yeah. I agree. Some things are maybe some grey area. You pick the best effort one and hope that you're describing it in the most accurate way without getting into too much nuance. And I think that's fine. RG is making me read this. In all caps, saying we are not done with tail call optimization. Peter is next from the queue.

PKA: Yeah. So this is more just pure bike shedding. Subsumed doesn't quite seem like the right word to me. I feel like that means one proposal got fully absorbed into another one. I feel like maybe preempted is the right word there. Because there are we go back to the list. There are some that were really different proposals, but they just don't make sense anymore. They're just rendered moot. Mooted maybe.

API: Mooted.

MF: Okay. So again, I don't want to get into this conversation. I don't want to get into that.

PKA: I can open an issue.

MF: Please. Yeah. Yeah. If we cannot adopt these exactly as-is, I'll come back a different time. We just don't have the time to cover that in this conversation. So I guess it might be ambitious, but I should try to get to the second bullet point. So the first bullet point would be—you know what, let's skip the—I'm not even going to ask for consensus then for the first bullet point. It seems like we have difficulty with that one. So I would like to hear-.

CDA: Can I ask that you do? Because I don't think that I think we should try.

MF: Okay. Even with you as well.

CDA: As long as we don't call it a stage.

MF: See, okay.

CDA: Because if we are we often reconciled that?

JHD: So more like consensus to continue with the current labels until better ones present themselves. Which are not stages. They're not changes to the process. They're just changes to the way we describe proposals.

CDA: Isn't that the status quo?

JHD: Yes.

MF: They're listed in the table.

JHD: Affirming that we can keep the status quo as we migrate from one markdown storage to JSON storage.

CDA: Okay. Do we have consensus to continue down that path? I support it.

RKG: Sounds good to me, modulo bikeshedding.

JHD: Bike shedding is welcomed outside of plenary time. And we can iterate on that as long as it's not a blocker.

??: And I will bring this back for our topic to actually see what you want to do further down the road.

CDA: The bike shedding will continue until morale improves. Do we have any objections to that? Seeing nothing, hearing nothing. Okay. I think we're good. Should we move on with the queue or?

MF: Can we have any topics on the data cleaning process for proposals? \[silence] Okay. Do we have any feedback on the data cleaning enrichment process for delegates?

CDA: Yep. I think that's the next topics. The first one is mine. So I think broadly, I think many of those changes are fine. But I understand and agree you're not going to reach out to hundreds of delegates from the past. But for delegates that are currently active and are subject to some of those changes, it would be great to get informed consent. I don't know why it would be controversial that we would display their GitHub favour that. But SFC is one of the individuals affected by that. DLM is another one. I don't see why they would find it controversial. But I still think I would feel better if they gave their thumbs up about that. So SFCs name going from I think he's just adding the initial. Right? Sorry to put you on the spot. Sorry about that. I'm also on the topic after you for kind of a similar reason, which is that yeah. The name that I have on GitHub is the one I use in different contexts, right? Some are more formal than others. I consider my position here to be a more formal position. So I'll use my middle initial. And that also goes along with my GitHub handle, right? But then in an informal a less formal situation, I don't do that. And then I have a different name for that context, right? So I think my comment here was especially for newer delegates, the process has been that the delegate themselves opens the pull request against delegates.txt. And then they get to choose what goes in there. And I think that that's good. I hear that a lot of the older delegates that have been in there for a long time, maybe delegates.txt is not the best source of truth for those delegates. But if this is all being tracked in a new repo called TC39 data, then it still gives delegates the chance to update that source of truth. So yeah. I think I guess it makes it a little bit harder to do. But I would say that at least in my opinion, for any delegates added to delegates.txt in the last five years, use that name. And then maybe before that, use the GitHub name. But that's the end of my comment.

MF: That is, I mean, that's good feedback. That may be fine. I think we still might run into people who have entirely different names that they prefer nowadays. Even within that range. But also, that was a smaller group of people. It's more feasible to reach out.

CDA: Yeah. I have a clarifying question. Is the change to the existing names in delegate.txt a one-time thing? Or are you going to come back a year later to see if their GitHub name has changed? And what I'm getting at.

MF: We are free to do that at any point. This is kind of just a parallel to getting it structured. I was going through delegates.txt to make the structured delegate data. There are some names in there that are obviously not people's preferred names. I do not want to include that in the TC39 data repo. I think it's disrespectful. I think that those names are very important for us to change them. I think it's not great that they are still currently in delegates.txt. So maybe I took this process a little bit too broadly. But I wanted to be as generally respectful of people as possible and apply those names. We should probably regularly update this data. But that'll be on us, right? It'd be nice to have continuous communication. But sometimes we fall out of communication with people. I don't have a good solution for that.

CDA: Okay. Shane?

SFC: Can we just open PRs? I know it's a little bit more work. But it should be easy to automate. Can we just open PRs to update delegates.text line by line when there's a change? And then have the person approve the PR if they're okay with it?

MF: So do you mean sending 300 PRs to and then tagging everyone?

SFC: I don't know how many exactly. But something like that. And I mean, that seems like it's something that would be easy to do. I could just ask my jet ski or anti-gravity to just do that, right?

MF: I don't have a full number for it. A lot of them were just Dan versus Daniel or something.

CDA: I have a reply on the queue. I think we can make I would suggest I like the idea. And I think that we should do something like that. That or a variation. And really just focus on active delegates. As long as the change is or not for any reason appears to be controversial for delegates that are long gone. And we're just putting an initial from their GitHub name. I think that's probably fine. But it would be great to get approval from current active delegates like yourself and Daniel Minor who are impacted by the change.

MF: How about this suggestion? Since the delegate data now also has affiliations that are only present for current delegates: for any of those who have a name in the delegates data which differs from delegates.txt, I will add a line comment in GitHub mentioning them, asking them to confirm that this is preferred over what they had originally had in delegates.txt. That will probably be a reasonable hand-doable number of interactions. Does that sound good? And then for the people who are long past, we just go with the heuristic I had presented.

CDA: Okay.

MF: Okay. That was great feedback. Thank you. Oh, where are we with—I know we've gone over.

CDA: We have a few minutes left. Sorry.

MF: We're still within the extension. Okay.

CDA: Maybe we can get to my last QR.

MF: Yeah. The fourth one. Yeah. So I think we kind of have a plan for this. Once that delegate data—once we are happy with it, we've given enough time to get feedback from current delegates, the plan is to start generating the delegates.txt file from that structured data. We have a commit to do that already. Can we start doing this? Does anybody have a problem with that kind of, again, transparent swapping out of the delegates.txt with the structured data source generated via script? Chairs? Nothing?

CDA: Are we decoupling that from the changes to the names?

MF: Yeah. Assuming that we are all done. We get the data merged. Having now the process of generating delegates.txt?

CDA: So you're referring to the process change to change the source of truth, basically.

MF: Yes. Yes. So having the official place be the new JSON file rather than delegates.txt? Which will then imply that we will work to update our processes for onboarding and stuff to ask people to make PRs to that instead of making PRs to delegates.txt. Whatever else is in your process.

CDA: I mean, that seems fine to me. As long as my second topic here is as long as we have all our ducks in a row and before we make that shift.

MF: Yeah. Yeah. Yeah. Timing-wise, yeah. Do you want to speak to that?

CDA: Yeah. Okay. So switching the source of truth necessarily means that delegates onboarding new delegates or new invited experts now are doing something different. And so the instructions on onboarding and issue templates need to be updated to be accurate. And so that people know what to do. And don't do the old thing, which is create PR targeting delegates.txt. So as long as all that stuff is in line, I would support it. Yeah.

MF: Yeah. Great. And I will work with you on timing for when we can actually do that. And of course, JHD will help with that, I'm sure. Okay. So final topic. When we last discussed this, there was some concern expressed about when we go to actually improve the experience here, that there may be some delegates who don't want their affiliation with the Ecma member to be more discoverable than it is today.

MF: So I would like to open the floor to a discussion on that. Does anybody know of anybody who has an issue with that? Or themselves have an issue with their affiliation being very visible, if we make a new web UI where you can sort by company or when we link that to the proposals, having your company name next to your name.

CDA: Nothing on the queue. So I see Shane is on the queue.

SFC: I can. I mean, we have a lot of delegates who change companies. I can definitely imagine that for a proposal that I wrote, when I was at Google, I wanted Google represented there. But if I were to just change affiliations at some point, I would want my contemporary affiliation to be the one associated with the proposal.

MF: Yes. Yes. We've discussed this. LGH suggested the last time that we have historical affiliations as well and time ranges so that you can properly—if a proposal was worked on while you were at one company, and then you have a different proposal, somebody clicks through to you, they wouldn't want to assume that you were representing that same company while you were working on the previous proposal. That is a potential problem. It's just that we don't have that data at the moment. As I said, we're doing the best with what we have. Our data practices haven't been very good. I don't have historical affiliation data. So going forward, we can probably record that. But it's still problematic about going backward, right? And if we have that information going forward, then that may give even more of an implication that that affiliation is for all of those previous proposals where we don't have your previous affiliation. That's a difficult problem to solve. I'm not sure if we have a concrete solution.

CDA: So we are past time.

MF: Yeah.

CDA: We already extended the time box by 15 minutes. If the presenters are okay with it, I would like to schedule a continuation if we have time to get through the rest of the queue and any remaining things that.

MF: Yeah. I'm fine with doing a continuation at the end of the meeting if we have time.

CDA: Great. Thank you.

JHD: But just a heads up, if you make PRs to the spec and you have made your TC39 GitHub org membership public, which is not the default, then you automatically get previews on your PR. So if you don't object to people knowing you're in TC39, it's probably cool if you make that public. Thanks.

### Speaker's Summary of Key Points

* `tc39/data` provides canonical, machine-readable committee data for tooling, analysis, and integrations.
* Delegate and process packages are published on npm; pending PRs add proposal data and generate `delegates.txt` and `tc39/proposals` proposal tables. Alternative interfaces are planned for later.
* Cleaned up and enriched proposal histories, test262 links, broken references, identified missing reviewers, and linked delegate records to GitHub accounts and affiliations.
* Inactive proposals carry over the status, roughly as listed in the inactive proposals table. Proposed that we officially acknowledge these proposal statuses, which we can refine at a future meeting.
* Delegate name cleanup uses GitHub profiles and heuristics to replace outdated names, with feedback welcomed.

### Conclusion

* Consensus to retain existing inactive labels during migration. Terminology can be refined outside plenary; PKA offered to open an issue.
* MF will ask affected current delegates to confirm name changes via GitHub line comments; the presented heuristics will apply to former delegates.
* MF will coordinate with CDA and JHD to switch `delegates.txt` to generated data after updates to onboarding instructions and issue templates.
* Affiliation visibility and historical attribution remain unresolved; a continuation was requested.

## Iterator Includes for Stage 4

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-iterator-includes)
* [slides](https://docs.google.com/presentation/d/1uLfWHUpPjWWjPQTaiuhIAT9WdFO7pAroKlY049rkGJA)

MF: Okay. Iterator includes. As a reminder, this is what `Iterator.prototype.includes` looks like. It is modelled after `Array.prototype.includes`. Which is the only reason why it also contains a second parameter for how many elements to skip. Again, matching `Array.prototype.includes`. If you don't remember, it gives you a Boolean that tells you whether a value that you pass to it is yielded by the iterator. I have a pull request to the spec. We have implementations. All three major browser engines as well as QuickJS-NG, Kiesel, and Boa. And they are all shipped. So I would like stage four for Iterator.prototype.includes.

CDA: Support from KG. Also from YSZ. LVU. Mark. DLM. CHU. And somebody else in the queue. JHD supports. LEK supports. Do we have any objections? All right. You have stage four.

MF: Thank you.

CDA: I like the quick and easy ones.

### Speaker's Summary of Key Points

* `Iterator.prototype.includes` returns a Boolean indicating whether an iterator yields a given value.
* It is modelled on `Array.prototype.includes`, including an optional count of elements to skip.
* A specification PR is ready, and implementations have shipped in all three major browser engines, QuickJS-NG, Kiesel, and Boa.

### Conclusion

* Iterator includes advanced to Stage 4.

## Iterator Chunking for Stage 4

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-iterator-chunking)
* [slides](https://docs.google.com/presentation/d/1K9Hf1w5tYEbU2o5CUZPj1m0JtBmKcugVf-_OfGW1jms)

MF: Okay. Iterator chunking. As a reminder, this proposal adds two methods to `Iterator.prototype`. The first is `Iterator.prototype.chunks`, which takes a chunk size and yields arrays of that size and these are non-overlapping windows into the sequence of values yielded by this iterator. There's also `Iterator.prototype.windows` which similarly takes a window size, as chunks took a chunk size, and yields overlapping chunks. God, I described chunks as windows and windows as chunks. You get the idea. Non-overlapping versus overlapping. I have a PR to the spec. We have two browser engines that have implemented and shipped it. V8 has a tracking issue with no information. There's no public information about their plans. And we do have two other implementations, one from Quick JS NG and from Kiesel. So I would like stage four for iterator chunking.

CDA: Nikolaos.

NPU: Let me first say that I definitely support going for stage four. I would like to update on V8’s implementation. Iterator chunking is very straightforward. What is not very straightforward is iterator windows. And probably that's not straightforward because of the way that this thing was designed. It was actually designed in such a way that an implementation always needs to allocate a quadratic number of bytes if the iterator is exhausted. So it is a challenge to have an efficient implementation that works for both small window sizes and big window sizes, and also that works for, let's say, primitive types that are returned by the iterator or object types that are returned by the iterator. I was wondering if other implementers had similar issues and how they resolve them, but maybe that's not the topic for a discussion here and now. In conclusion, we are definitely implementing this and it will be shipped shortly.

CDA: All right. Sorry. We have a lot of support on the queue as well. DLM. LEK. YSZ. CHU. And JHD. Do we have any objections? All right. You have stage four.

MF: Thank you.

### Speaker's Summary of Key Points

* `Iterator.prototype.chunks` yields non-overlapping arrays of a specified size, and `Iterator.prototype.windows` yields overlapping arrays.
* A specification PR is ready, and implementations have shipped in two browser engines, QuickJS-NG, and Kiesel. V8 has a tracking issue but no public implementation plans.

### Conclusion

* Iterator chunking advanced to Stage 4.

## proposal-nonextensible-applies-to-private: check extensibility only once for private methods

Presenter: Olivier Flückiger (OFR)

* [proposal](https://github.com/tc39/proposal-nonextensible-applies-to-private)
* [slides](https://docs.google.com/presentation/d/1AZYPsiU0LEwI-Hh4zRrW23DvwCMUF5wHjPS4pFh4j6E/edit?usp=sharing)

OFR: Okay. Non-extensible applies to private. So I initially put a pull request on the agenda. Then I thought some more about the pull request and then I probably overthought it and now we have a slide deck. So here we go. So basically this was just a recap. So what is this proposal about? It's about preventing this. So if you have a non-extensible object and then you inherit from that object and then you stamp a private property on it, then currently this is allowed by the spec. And this proposal was to disallow this. So that non-expensible really means non-extensible. There were two motivations, I think. Please correct me if I'm wrong. I'm actually not a champion per se of this proposal or maybe was, I should say. So one reason is security. Language in language security. So frozen really means frozen. The other point was also evolution. Language evolution. So maybe in the future if non-extensible really means non-extensible, we can have something like a type with meaning. I'm trying to go through the slides maybe and then have a discussion. So unless there is something super unclear, interrupt me, but otherwise I will just continue and ignore the queue if that's okay. So our first try was to just say like, okay, private field add we're just going to put like a check there. And we put this check there. And it turns out that proxies don't have this slot here. So that's not possible. Then the first try to salvage it was this we just do what we do everywhere else. We have this abstract method is extensible. And that is defined for proxies. So all is good. So again, I feel like we need some background here. So it's actually you can observe partially installed private properties. So for example, in this snippet here, the constructor will fail to install the field two. And so it will have an object with only one field installed. So that's already something that exists. Nowadays, right? But what actually I think Yasuke discovered when trying to implement it is what now can happen is you can inherit Proxy and then the Proxy can tell you that it's not extensible starting from property two. And now this also applies for method. So what can happen is we can install one method and then fail to install the second method, which is not great. It's actually extremely terrible. There is even a note in the spec that says that it is designed such that any given object has either all or none of the private methods and accessors defined by a given class so that implementations not require tracking each method or accessor individually. So we definitely do not want to break this. Okay. So and this is pull request 12. My idea was like, okay, this is easy to fix, which is pull out this check out of the methods, which is already an atomic step. So I showed you before installing properties. It's not atomic, but installing methods is atomic nowadays. So we just pull it out. Check first and then install all the methods in one go. So problem solved. It's still kind of opening a new loophole that didn't sit easy with me. Which is like nowadays if your initialization statements are pure, then at least in this case we nowadays know that you will not have partially constructed objects. But it's not true anymore with this proposal. Now I could do the same trick as before, have a Proxy that says after installing one property, this is now not extensible anymore. And now even if I have all pure right-hand side right-hand sides, I have a partially constructed object. So it's also I don't know, uneasy with it. So here's a way to big table. Going step by step. Sorry, I couldn't make it appear line by line. So don't read ahead. So first line was the original proposal. Basically the second column shows you how many traps we would execute. The second column, how many target object checks of the Proxy we would execute. And so the first line initial proposal that's not possible because it's not even defined on proxies. Then the second proposals, the second try breaks implementations. Pull request 12 does one trap for all the methods and then one trap for each property. And I think this is the simplest solution that is kind of workable, but as I've shown, it allows you to inspect partially constructed objects through proxies. Then TG3 had a suggestion, which was to just call the trap once and then cache the result and just use that as the extensibility throughout constructor. I think that's not a good solution either because it basically allows you to add like if we did that, then we would also change the case where we don't have proxies involved and suddenly you would be able to install properties on a non-extensible object. So I don't think that that is a good idea either. But what I think what we could do is we could do the combo. We could say like first we call a trap, let the Proxy decide, and then after that we only look at the target object for the properties. So we could do one trap upfront and then one check for each property. But only check the target object in that case. It I don't know. Yeah, I'm not sure if it's a great idea. It's possible.

OFR: But at this point, I was also like, okay, maybe we should pause this is more complicated than we thought this whole thing is. And so there are also other options that we could do. We could just special case proxies. We could just say like, okay, proxies. I mean, that's basically going back to the original design. We just say like proxies only look at their target objects and that's it. We don't ask the Proxy. And I think there are some good reasons to do that because in a way, there is like no trap at all involved with private properties at the moment. So there is no get trap, there is no set trap, there's no has trap, nothing is trapped when it comes to private Symbols. So it's kind of weird that now this extensibility we actually do a trap. This was initially rejected because of shadow proxies. The argument was what if the target object is somehow not initialized? But yeah, I don't know if that's really is a good argument against it because in a sense, we're also not doing anything to the target object. We're not going to install a property on the target object. So why would that be a concern? The other alternative that I thought about was that is in a sense the opposite. So basically a Proxy has its own private elements. So we install private properties on the Proxy itself. The easy extensible trap, on the other hand, talks about the extensibility of the target object because we check it when we want to install properties on the target object. So maybe it's just a nonsensical question in the first place and we should say like proxies are always extensible or never extensible, modules are, but that's probably not web compatible. So yeah, so those are kind of that's kind of the range of possible solutions. I already see it on the queue. Yes, pull request 12 is also favoured by TG3. And I think it's workable. Still, I would like before we go into the discussion, I would suppose I would suggest that we do this temperature check and just get an unbiased account of where people feel where we should go. Can you add these four options? Okay.

MM: I think it's premature to do a temperature check. I suspect most people are not very are not really that oriented until we have more of a discussion.

OFR: Yeah, the idea is to have an unbiased one and then we'll do one again. This is just for starting the discussion.

MM: Okay.

**Poll** (1 min, 11 voters) — @ctcpip

* ❓ underlying: 6
* 👍 combo: 5
* ❤️ PR12: 3
* 👀 never: 3

OFR: PR 12 is one trap for all the methods and then one trap for each property. The combo is one trap upfront and then only look at the target extensibility for properties.

OFR: I think we got all the information that I wanted from this, the information is like it's completely unclear which direction. So let's go to the discussion.

CDA: All right. Mark.

MM: Okay. So I want to take one thing off the table. I'll just announce that if it goes if the direction goes there, I would object and it has nothing to do with the purpose of this proposal. Which is having an is extensible check punch through the trap, ignore the trap and go directly to the target or have a Proxy always be considered extensible or have a Proxy never be considered extensible. I would object to any of those. Those are nonstarters for me. And the reason is membrane transparency. And it's exactly the issue that you mentioned that you said you didn't. Why? So if you could return to that slide okay. Initially rejected because of shadow proxies. There's no such thing as a shadow Proxy. You probably meant shadow targets, correct?

OFR: Yes.

MM: Okay. So the way membranes work is that there's the; I'll just do it with colours. There's the blue world. Let's say inside the membrane and there's the yellow world outside the membrane. And there are yellow proxies for blue objects and there are blue proxies for yellow objects. Now, if someone is holding a yellow Proxy for a blue object and then due to activity inside the blue subgraph, an object becomes right. A right. The real target meaning that the terminology on targets is so screwed up. I apologize. But the object that the Proxy is trying to virtualize is I'm going to call it the real target, which is traditional, the terrible. And the thing that's part of the Proxy mechanism, which is held by the Proxy, is the shadow target. And the difference is that the real target is all blue and the shadow target is yellow. So if the real target due to autonomous blue subgraph activity becomes non-extensible, and then somebody in the yellow subgraph asks the yellow Proxy for that object, is the object extensible? Well, if you punch through to the target, what the target you're punching through to is not the real target, not the one that autonomously became non-extensible, it's the shadow target which is the thing that does the bookkeeping to ensure that the Proxy honours its stability demands. That's the main purpose of the shadow Proxy. And the shadow Proxy was last updated when the blue real target was extensible. So it's extensible. If you just punch through to it, you'll find out I mean, it'll report that it's extensible, which is breaking transparency, which is breaking virtualization because the object of the Proxy is trying to imitate is now non-extensible. That's why you have to have a trap so that the handler has a chance to look at the real target update the shadow target to reflect the real target before the real targets attributes are checked. So we cannot break that. Okay. Now, the I'm sorry. I saw somebody say lost blue yellow and then it disappeared. Could we take that offline? Or did everybody miss it? Did anybody get it?

OFR: I mean, I think I can try to rephrase it and then you can tell me if I got it. So basically the objection is that the underlying target object of the Proxy might be out of sync with the thing that you actually want to Proxy. And so if we just look at the target object, then you cannot use the Proxy anymore to basically ensure this state synchronization between the actual thing that you use as the target object of the Proxy and the thing you want to synchronize it to.

MM: Yes. Yes. That's the whole point. So you got it. Thank you. So now a little bit about TG3. Yeah, we did our first TG3 session on that. We talked for an hour and I think I got us going on the wrong track. I heard somebody explain the PR. I had not gone and read it in detail. Then we discussed it and somehow I had I was framing it as Olivier's trying to have one extensibility check and amortize it across all the privates. And then we tried to analyze that and it just became a deeper and deeper mess. So we ended up being pessimistic about what we thought the proposal was. Then we found out that the actual proposal PR 12 does what you explained. I personally love it and I think I'm speaking for TG3 to say that everybody who had an opinion of it also thought that PR 12 was the right solution. And then finally, on the motivation for the overall proposal, the main motivation, the thing that got Shu and I together to put the initial proposal together and then for me to fight for it, was a virtualization failure. At Agora we're doing and now at MetaMask we're doing an object-oriented virtual memory much like in the old small talk tradition where we're basically have map-like collections and set-like collections that spill objects to disc so you can have collections that are bigger than RAM and likewise we have class-like abstractions where you can have more instances than fit in RAM. And it's amazing how straightforward it was to do this in JavaScript. The one we do is we deny the virtualized world access to weak refs or finalization registries. So they're living in a world where they're already supposedly designed to deny the ability to detect garbage collection. We replace their weak maps and weak sets with virtualization-aware weak maps and weak sets so that if the representative object that's in RAM disappears but is still represented by a copy of that object on disc waiting to be paged back in, without replacing weak maps and weak refs, that virtualization does not work because the same object at the virtual level of abstraction doesn't index to the same entry in the weak map. So the one place we were able to do that because weak maps and weak sets are replaceable and that was the one thing we needed to virtualize. Until I think it was Matthew who noticed that the return override means that classes are a weak map reachable by syntax or sorry, return override combined with stamping private properties. Is a weak map reachable from syntax our virtual objects for lots of other reasons have to be frozen so they're necessarily non-extensible if non-extensible objects cannot be keys in implicit weak maps reachable from syntax then the virtualization problem is repaired. This is a life and death thing. And with this repaired, we can just do the virtualization and it's impossible to detect.

CDA: Mark, was that your second topic?

MM: Yeah. Yes. I'm done.

CDA: Yep. Thank you. Ashley.

ACE: And I was curious. I'll leave the your feelings on PR 12 when you thought about it some more. You were saying how you didn't like that if all the right-hand sides were just pure values then it's still observable to observe the torn state. Is that just an aesthetic like feels wrong?

MM: You're asking about why we disliked?

ACE: He didn't like it. I think it doesn't I don't like it either aesthetically, but I'm like okay with it because you can't if these things weren't pure and they do reference this, then you can easily do it. I was wondering if is there actually like an engine reason why it's also bad like the fact that you can see that they're just static literal values you perform like an optimization and you can't.

OFR: Right. So I think the reaction to it I had was there is nothing currently that would break with this. It's kind of blocking a future avenue for optimizations maybe. I'm not even sure about that, but it seems like theoretically possible that you could say like, "Okay, there's nothing that can happen currently between installing these fields so we can do it atomically and use that somewhat to our advantage." Whereas if there is a Proxy trap there, it will be significantly harder because it's like almost impossible to prove that there is no way that you can get back a Proxy from a supercall, right?

CDA: Matthew.

MAH: Yeah. I mean, partial initialization is only surprising if you ignore that to get into this situation in the first place, you need to have a return override in the superclass. So as soon as basically you enter in a return override, the world you could just disable any of these optimizations you are already doing something weird. I think all bets are off.

CDA: Justin.

JRL: Hello. Can you hear me?

CDA: Yes.

JRL: Perfect. I haven't spoken yet. So going back to MM, question specifically back to MM. When you're describing the yellow blue membrane stuff, I get that. What I don't understand is why making a Proxy always extensible but like—only for private properties and installing onto the private property would break membrane transparency. Because the Proxy itself can't be transferred across the membrane. And it's like as you were describing Proxy sorry, a.

JRL: Properties essentially a weak map essentially. And it's like giving proxies the ability to deny being added to a weak map now.

MM: So the I think I'm let me ask some questions to clarify what question you're asking. The are you suggesting a change to how extensive how proxies handle extensibility testing in general?

JRL: No. Only specifically for private properties.

MM: Okay. So I so first of all, let me admit that the case I'm about to raise is obscure, but it's the kind of failure of blind composition that bites programmers when two pieces of correct code are composed creating a bug that nobody knew to expect even if they were paying attention to everything that they should be paying attention to. So one piece of code uses return override to take some object provided by another piece of code and add private properties to it. That's a perfectly imaginable thing that that's that somebody writes such a piece of code where the object being extended using return override is an object they're receiving from elsewhere. The elsewhere let's say was originally designed to be the objects themselves but for some reason as the code evolved, that subgraph of objects including the object that is given to the first piece of code all of those objects get put into a membrane and now the Proxy so now all those objects are blue the class code with the return override is yellow and now the code that was giving one of the objects from that subgraph to the class override code the return override code is now giving it a yellow Proxy for a blue object. Now, if the blue object becomes non-extensible in the middle of the instance field initialization, then the Proxy must report that it is non-extensible. Otherwise, you get a failure of the virtualization safety property which is now you're adding private fields to objects that told you I'm sorry, to objects that were supposed to report that they were non-extensible but failed to report that because you punched through to the shadow target rather than letting the Proxy reflect the real target's truth onto the shadow target first.

JRL: Okay. I agree with that. And I think the case that you've outlined here is essentially there's a yellow Proxy and a blue Proxy and the target is now a Proxy wrap for another thing that exists on the other side of the graph. So it kind of mixes it up a little bit whether it's a Proxy of a Proxy now.

MM: But I wasn't going that far. We can go that far if you want. That's not the case I was raising.

JRL: Okay. I agree that we cannot directly go to the target. Because the target is not going to be the shadow target that represents the actual state of truth in this membrane example. So I don't think that the number four here is the way to go here.

MM: Good.

JRL: But it's always extensible explicitly only for private properties. I can't think of a scenario where this fails. Because it is essentially a weak map.

MM: Okay. So always extensible does pass the virtualization safety because it just prevents I'm sorry. I'm sorry. Hold on. Are you suggesting that proxies in general when asked if they're extensible always report that they are extensible?

JRL: No.

MM: Okay. How do you get.

JRL: Is extensible check always does behave like it does now. It taps the Proxy trap whatever it is and that can check the default to the real target or if you've overwritten the trap it can do whatever. What I'm suggesting is that private properties are not observable by proxies. They can't be transparently done you can't do anything with them besides install the private property directly onto the Proxy. It never goes to the target and it can't go to the shadow target because we do not provide traps for you to get that information.

MM: Yeah. I mean, it's the weak map model of private fields. It works perfectly when the key is a Proxy.

JRL: So I think for this PR 12, if we change the semantics explicitly say if it has the Proxy internal slot, meaning it is a Proxy, then you're allowed to install private properties onto it because it could never not be extensible.

MM: Right.

JRL: So we are.

MM: No, but no, but hold on. If you're saying you can install private properties?

JRL: Onto the Proxy itself, not to the target it represents.

MM: Okay. Then you're losing the so a conclusion I left to earlier is wrong. Let me backtrack. Then you do break virtualization. You do expose you do enable code to detect garbage collection even when it has been denied weak ref finalization registry and the original weak map and weak set.

CDA: All right. I'm going to have to jump in here because we are pretty much at time. Sounds like we will need a continuation if we want to get to the remaining items on the queue. So

MM: Can I just ask Molly, are you okay with PR 12 being the answer?

CDA: Are you asking.

OFR: Yeah. I mean, I'm pretty sure we're going to get to a continuation, right? And or yeah. So yeah, yeah. I mean, like if you go one like this is my next question. So anyway, I'm okay with PR 12. Okay.

MM: Okay. PR 12.

CDA: All right. Thanks everyone. Will this brings us to our break.

### Conclusion

*For summary and conclusion, see continuation on 30 September*

## The chairs get cheeky

**Poll:** are the chairs doing an EXCELLENT job so far? (16 min, 8 voters) — @ctcpip / @robpalme

### Conclusion

* 💚 10/10, no notes: 5
* ❤️ yes, absolutely: 3
* 🧡 of course!: 2

## Task Group Reports: TG4: Source Maps

Presenter: Nicolò Ribaudo (NRO)

* [repo](https://github.com/tc39/tg4)
* [slides](https://docs.google.com/presentation/d/1M0kBO3jeYm-aBO0WxoJkoEF6sPyEnD5yInbTbgi2bzM/)

NRO: So this will be quick as usual. This update for what we are doing in DG4. As I know, previous updates are working mainly on two proposals, range mappings and scopes. Range mappings currently at stage three. It's been implemented across various debuggers and build tools. We have already released implementations in WebKit and in MagicString. MagicString is like a code transformer library used by different tools such as Rollup. There is a complete pattern released implementation in Babel, and an in-progress implementation in Chrome DevTools. Reminder that for TG4, we have a slightly different process than TC39. So for us, the requirements to go to stage four is not to have just two implementations in general, but we want to have two implementations in tools that consume source maps. Such as browser interactive debuggers and two implementations in tools that produce source maps.

NRO: So we're getting close here to reaching those requirements. But there is a note here that is, when it comes to build pipelines, tools need not only to be able to generate source maps with some new feature, but also to consume it when you have multiple tools running after each other. And the proposal is not there yet.

NRO: The other proposal we're working on, scopes, it's also stage three. It is still in a much more active design phase. Because after we reach stage three, other implementations that were waiting on us to stabilize a bit start experimenting with it. They found significant possible areas of improvement. When it comes to the performance of consuming those source maps that use scopes, and so there is still major changes now that have been done to it. For the reasons implementations are in progress, but not as advanced as for range mappings, we have I guess here Terser should have been orange, but we have I believe a complete but experimental implementation in Chrome DevTools. And then we have implementations in Firefox DevTools and Terser. Which are much more experimental and as far as I know, not complete or not up to date.

NRO: And that's it. Other than that, we keep meeting monthly or twice a month. We have a meeting specific for scopes, and you're all very welcome to join our meetings. Thank you.

### Speaker's Summary of Key Points

* TG4 continues meeting monthly, and all delegates are welcome to participate
* Work on scopes and range mappings continues, both have experimental implementations

## Dynamic Code Brand Checks for Stage 4

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/tc39/proposal-dynamic-code-brand-checks), [PR](https://github.com/tc39/ecma262/pull/3294)
* [slides](https://docs.google.com/presentation/d/1oYsZ-6CLpTv971nXYgWIgFGIz5VAyz11pUxsCpO0mXY/)

NRO: Well, hello again. So this dynamic code branch X for stage four. In the past, this proposal has had multiple names. So if you don't remember what dynamic code branch X is, you might remember it as code-like objects or providing more context to hosts in `HostEnsureCanCompileStrings`. Or the way that web developers know it, which is “trusted types”. Specifically, the trusted types integration with eval and `new Function`. Trusted types itself is a larger web platform future feature that also integrates with HTML stuff. And the so the way trusted types needed ECMAScript to be extended for their goals is to provide some more information about the objects that JavaScript code is trying to pass to eval and `new Function`. This is because trusted types allows wrapping some strings in some special objects to mark them as coming from a trusted source to allow dynamic code compilation of those where normally weight varies CSP policies. It will be disabled for security reasons. So the host HTML, well, CSP in our case, needs to know where these strings created by Stringify in the parameters to new function originally came from.

NRO: So if it was coming from one of these trusted objects, and something similar for eval, except that eval does not Stringify its arguments normally, just returns them as they are. So the proposal implements these requirements on the web. It is now implemented everywhere. It is baseline since February. Chrome has had an implementation for a very long time already.

NRO: So it's already used in production on many major websites. I was already planning to bring this for stage four in May. We had a presentation that was like stage four or normative change. And the reason of the time was that there was some consensus we agreed on a few years ago, but then it was not fully reflected in the proposal. We noticed this in May. So in May, we updated the proposal to match the original consensus. It was specifically about whether toString is called on this trusted types object when passed to `new Function`, or whether we just ask the host to give us the trusted contents stored in the object. That last change that we confirmed in May is already shipped in Firefox. It has been implemented in V8. It's not released yet. And there is an open patch in WebKit. Sorry, this comment at the bottom of the slide was something I was meaning to delete and then forgot. But thank you. V8 for landing the patch since this is when I first put the slides on the agenda. And also I want to thank Cornelius, who is an intern at Igalia who worked on the implementation across these three agents. And so yeah, we have two implementations. One is already shipped and enabled by default. So I want to check if I have consensus for stage four now.

MM: I just I just want to confirm with you that this has a property that I think we both consider important. One of the goals of compartments is to emulate one host by JavaScript code running on another host. And it'll never be perfect, but right now we have a shim of compartments that shims eval. It can only shim indirect eval. It can't shim direct eval. I from what I see, there should be no difficulty extending the compartments shim to shim this enhanced eval and enhanced function constructor. And the equivalent of blessing a type is just in the creating code, the code that sets up the compartment. There's just a weak set or weak map of the blessed objects. Does that all make sense to you? And do you see any problem with it?

NRO: Yes, that's all correct. You didn't have weak map going from this blessed objects to the actually blessed string. And then in your replacement for new function and eval, you would consult that weak map before doing the normal thing that it otherwise does.

MM: Perfect. I support.

RPR: Thank you, MM. We also have support from DLM. Do we have any objections? Stage four. No. So congratulations, Nicolo. You have stage four.

\[Applause in room]

NRO: Thank you. I'm going to assume there are applauses, but I cannot hear them. And if there aren't, please don't tell me.

### Speaker's Summary of Key Points

* The proposal and implementations have been updated following consensus from May meeting
* Latest semantics shipped in Firefox and shipped in Chrome; overall the proposal is shipped everywhere

### Conclusion

* Stage 4

## Stage 2 proposals missing Stage 2.7 reviewers: collection-normalization, pipeline-operator, module-declarations, jobcallback-module

Presenter: Michael Ficarra (MF)

* No slides presented

MF: This one's fairly self-explanatory, I think. So, in our process, for a proposal to move from stage 2 to stage 2.7, it has to have reviews from its assigned reviewers. We almost always assign these reviewers at the time that the proposal moves from stage one to stage two. We have four proposals in our data that are missing assigned 2.7 reviewers. These are presumably active because they're not inactive proposals. And they have no way to advance to their next stage without these reviewers being assigned. So I would like to have a resolution for each of these four proposals. It is fine to assign reviewers; it is also fine for those champions to ask for the proposals to be withdrawn. It is also fine for those champions not to be active anymore and for us to consider the proposal abandoned. I think that these proposals are kind of in an invalid state at the moment. Do we want to just go through them one by one, or does anybody have any hands they want to throw up right away?

CDA: It's kind of off topic in the time box. It's not long, but we usually call them stage two reviewers. Can we just decide.

MF: It's a fence post problem. It's one or the other we're talking about the same thing.

CDA: Yeah, yeah, yeah. I just feel like we should decide which one to call it.

MF: I don't. Names are usually unimportant to me for these kinds of things. Okay. Is anybody present a champion of any of these four proposals? I think we do have at least pipeline operator, right?

RPR: No hands are going up at the moment. Would anyone like to reveal themselves as a champion of one of these?

MF: RBN should be online.

RPR: RBN is here. RBN is somewhat affiliated with pipeline proposal. And NRO has module declarations. RBN, did you want to talk about the pipeline reviewers?

RBN: I'm not sure I can be authoritative related to the pipeline operators proposal. I haven't been directly involved since it switched over to Hack-style Pipes. I know there's been recent discussions within the past few months mostly still on the same topic related to the topic variable or symbol that needs to be used. So I know that the proposal is still somewhat active. But I haven't seen much involvement from Tab, who's one of the champions. Although I believe there's been some discussion from, I think it was, JS Choi. So we could probably ask for reviewers. I'm not sure whether the proposal is in a state where it is ready for review.

MF: It sounds like it's not clearly abandoned, though. So I would like to ask if anybody would like to sign up as a stage two or a stage 2.7 reviewer for pipeline operator.

RKG: This is for pipeline?

MF: Pipeline. We're talking about that one right now.

RKG: Yeah. I need a microphone. If it is actually intending to go to 2.7, I am fine to review. But very unclear on that.

RPR: I think Michael, you're just trying to get people assigned there's no indication that they begin work on this now.

MF: That is right. Yes. So presumably, if you are the assigned reviewer, when the champion group feels that the proposal is ready to advance to 2.7, they will ask for your review first before they bring it to the whole committee. It should have been done when it was advanced to stage two. Our records do not have anybody assigned in the proposal table. Also having gone through all the previous notes, I was not able to find any information about this. So it was probably never asked for any of these.

RKG: Sure.

MF: So if we want this proposal to be able to advance at some point in the future, we will need to assign these.

RKG: Understandable. Though I am a bit doubtful about the state of pipeline at present, I would be willing to review as long as it gets there.

MF: That's great. Typically, we look for two. If we get a second, that'd be great. Having one. Okay.

RKG: I would also prefer not to be alone on that.

MF: So it looks like we have Ross (RKG) and Christian (CHU). Thank you both.

NRO: Yeah. For module declarations, there has been some the proposal has not had updates in a couple of years. There has been some interest in multiple parties lately, even if not super high. So at this point, it is not fully clear guys saying that well, at this point, it's not fully clear who would champion the proposal. Because I mean, there is a small number of people that are very expert about modules. And so usually, we try to find a champion and a reviewer within the group. So we can't assign reviewers now. But when a proposal actually gets a reboot strap, it's possible we'll need to maybe change champions there. And so the reviewers might not be viable reviewers anymore. I see Guy is on the queue. Do you want to speak, Guy?

RPR: Guy, did you want to speak? You've said you're happy to be a reviewer.

GB: But assuming I'm not going to be the champion.

MF: Yes. That's clear. This is just a request for assigning the reviewer. In answer to SFC's question, the answer is yes, that the pipeline, the previous one, we assigned Ross and Christian there.

RPR: And RGN is also on the queue volunteering for model declarations.

MF: Great. Moving on because we are running out of time. We have collection normalization. Actually, I don't know. I should have prepared. Who is the champion for that? Is that still BFS? No champion listed? Oh, no. No, we're here.

RPR: Would you like to show the explainer for this? For the collection normalization? Would you like to just bring the explainer up just to remind people what it is?

MF: Give me a second to do it. Looks like BFS was the champion.

RPR: Should we be fishing for champions before we fish for reviewers?

MF: I believe BFS is the champion for that. I think the data is just bad on the proposals. I can look in my structured data. I'm almost sure that BFS is the champion. But also, BFS is not active in committee anymore. So that is not a thing that we've resolved yet. There are plenty of proposals that are active whose champions are not active, that we're not going to resolve today. But if we are resolving the lack of stage 2.7 reviewers, would anybody like to volunteer to be the assigned reviewer for this proposal, collection normalization?

ACE: I think I actually would. I would not mind being.

JHD: I would also.

MF: And I actually would as well. That is great. Thank you, JHD.

MF: So we have Michael (MF), Ashley (ACE), and Jordan (JHD) for collection normalization.

RPR: And in answer to SFC, module declarations is GB and RGN.

MF: And finally, we have proposal job callback module. I don't even know this proposal. Propagate active script or module with job callback record. CZW is the champion. CZW is at Bloomberg, right? Okay. Yeah. Well, yes. But what I'm saying is I'm turning to a Bloomberg person and saying are you aware of the proposal and—

NRO: I think I can speak for that.

MF: Okay.

NRO: That proposal is because right now, there is some dynamic scope being on when you pass eval to Promise 10 due to how HTML does some things. I think I can volunteer to be a reviewer there, and it would be great to get a volunteer from TG3 also.

MF: Great. Thank you, NRO. Anybody who is a participant, a regular participant at TG3 want to be assigned reviewer on this one?

CDA: Sorry, which one?

RPR: We're talking about job callback module. I'm looking for one more reviewer.

MF: The full name of it is propagate active script or module with job callback record. Anybody who does not regularly participate in TG3 want to be the second assigned reviewer for this? This is the final volunteer that we're looking for. CDA? Okay. Sounds like we have Nicolo (NRO) and Chris (CDA). Thank you. We have assigned all of the missing stage 2.7 reviewers to stage 2 PRs.

RPR: And Shane is correct in listing the collection normalization reviewers. Michael, Ashley, and Jordan.

CDA: Are you going to create an issue on these repos or something to indicate or is this going in the TC39 data repo?

MF: No. I'll update the TC39 data. We'll regenerate the proposals table. It'll have all this information now. And then that's our official record.

CDA: Awesome.

MF: And I'll make sure I do it from the recorded notes.

RPR: And in answer to Shane's question, yes, Nicolo and Chris are job callback module reviewers. So we're all done, Michael? Excellent. Thank you.

### Speaker's Summary of Key Points

* Four active Stage 2 proposals lack assigned reviewers required for advancement to Stage 2.7: collection normalisation, pipeline operator, module declarations, and job callback module.
* A resolution was sought for each proposal through reviewer assignments, withdrawal, or abandonment.

### Conclusion

* Pipeline operator reviewers: RKG and CHU.
* Module declarations reviewers: GB (conditional on not championing the proposal) and RGN.
* Collection normalisation reviewers: MF, ACE, and JHD.
* Job callback module reviewers: NRO and CDA.
* MF will update TC39 data from the recorded notes and regenerate the proposals table as the official record.

## `JSON.parse` Options for Stage 2.7

Presenters: Peter Klecha (PKA), Ashley Claymore (ACE)

* [proposal](https://github.com/tc39/proposal-json-parseimmutable)
* [slides](https://docs.google.com/presentation/d/1xNMjd3p8wo4NqtuBCOu-We_lFWX0SWI36721xmjlSHQ)

PKA: This is `JSON.parse` options for stage 2.7. So first, some background. The original state of this proposal was it was originally part of Records & Tuples and it was spun out of records and tuples into its own proposal called `JSON.parseImmutable`. The idea being that it would be a version of `JSON.parse` that would return a record or tuple. But records and tuples was withdrawn. We then recently determined that there's still interest in this proposal. Particularly in Bloomberg, there's still interest. To maybe have this as a more generic function that returns some kind of immutable thing, we determined that that thing should be a deeply frozen object. And so there was support, general support from the committee for that to happen.

PKA: In the most recent discussion, of this proposal, it was determined there's sort of emerged a consensus in the committee that we should—excuse me, I shouldn't say consensus. Most of the people at the committee seemed to be generally in support of the idea that we should instead just overload `JSON.parse` and instead of having a separate function that would return an immutable thing, that we should overload the second argument, allow passing an options bag to basically say instead of passing in my own custom reviver, I'm sort of asking the runtime to give me a reviver or some set of revivers itself. So this is the now the new state of the proposal.

PKA: We have an overload of the second argument of `JSON.parse` you can pass in an options bag. This options bag currently has two properties. Freeze and prefer null prototype. If you put freeze = true, then you get a deeply frozen object. If you get pass prefer null prototype true, you get an object whose non-array objects have no prototype, have a null prototype. And also freeze = true implies prefer null = true. So this is the state of the new proposal. Benefits of this creates a native, presumably optimized path to deserializing JSON into frozen objects, improving on the current technique of using a reviver that just calls `Object.freeze` on everything. Likewise, for creating unfrozen but null prototyped objects, which I think we heard at the previous meeting that there was there were use cases for.

PKA: This also opens up this new direction opens up for some possible extensions, which I should stress are not part of this proposal. We could add other keys to this options bag for handling bigints or dates, lowercase d dates, other extremely common reviver patterns. And this also allows the use of these reviver patterns with JSON imports which obviously can't support a reviver function but can support string values. Excuse me. For import attributes can support string values, not our function. But that's potentially a follow-on.

PKA: There are some small decisions that we have tentatively made since the last meeting. First of all, names for these properties freeze and prefer null prototype. We don't really think there's a good one for that second one. That's the best we can do. And another issue that came up during the spec review is the coercion behaviour. So if you pass something other than a boolean for either of the flags, either of the options, the current state of the spec is that we do not coerce non-undefined non-boolean values to boolean. We instead throw. There's an earlier state where we did coerce. We made the in response to feedback, we switched to throwing. We've made these choices, but we are open to feedback from the committee. We're not tied to any of these things deeply.

PKA: So modulo, those questions. We would like to request stage 2.7 oh, I should add. Also, we got our stage 2.7 or stage two reviewers have reviewed and signed off on these. Those are RKG, JHD, and EAO. So unless anybody wants to discuss the issues that I just raised, is anyone interested in stage 2.7?

DRR: All right. I think we can make it to the queue. One moment. So first up, we have Olivier. The clarifying question.

OFR: Right. Since this came up when talking about this proposal, so what if a function has these properties?

PKA: Yeah. The state of the spec is that if the thing is callable, it will treat it as a reviver. And not the options bag. This does make it—sorry, maybe this is tangential to your question—but this is technically a breaking change; there could be web compat issues. We don't think there will be. Precisely because if you pass, for example, `Object`, which does have a `freeze` member—but because `Object` is a function, it will be just treated as a reviver.

RBR: Yeah. I was wondering if the null prototype option is against prototype pollution. And because if it is, then I wonder if we not only want to look at underscore underscore proto underscore underscore, which is probably the main issue in this case, no?

PKA: No.

RBR: Okay. So that was the first part. And then second, I would just use the shorter name for it. Probably instead of `preferNullPrototype`, if we go for an options bag, it would probably just go for `nullPrototype`.

PKA: So the reason we didn't choose `nullPrototype` is because arrays will have their prototypes. So we wanted to somehow signal that it's not just null prototypes across the board.

ACE: And there's no change in behaviour for `__proto__`. If you parse a JSON string that has that key, you will still get an object back that has that key and then if you assign that into something which is then going to trigger a setter, then yes, it will happen. It doesn't prevent that being a parsable property.

DRR: If we are done with the current topic. We have one from MM.

MM: So the immutability issue that's motivating this doesn't mean anything for `JSON.stringify`. But the general notion of adding an options bag by replacing the function parameter, by overloading on the function parameter, makes sense to overload the replacer as well. It doesn't need to be in this proposal but if this proposal proceeds, then it acts as precedent does all of that make sense to you and do you see any problem treating stringify likewise with the replacer being optionally an options bag?

PKA: It does make sense to me what you say. It seems natural to me that someone might be interested in adding options to stringify. That is not part of this proposal, as you say. I haven't thought deeply enough about it to know whether there might be some problem with doing the same on stringify. I don't see it as necessary. We could have one on parse and not stringify, so if there turns out to be some fatal flaw with stringify, then I don't think that affects this proposal.

MM: Okay. You've satisfied my question. I support.

PKA: Thank you.

DRR: Okay. Olivier, take it away.

OFR: If we're already adding an options bag, we could think about adding a `reviver` option there that kind of make it, I don't know, uniform, I guess. Yep.

PKA: I think it was KG who said this at the last plenary that it's sort of instead of the reviver because you're sort of saying, "Here's the reviver I want." It's not just a general options bag. It's saying, "Hey, runtime. Here's how I want this revived." So it makes sense that it's *instead of* but you're also right that we could totally add a reviver. You could also have a custom reviver in addition to these things. Maybe raises some of the thorny questions that we were originally wrestling with that led us to go in this direction, which is that it is unclear how to handle a reviver in conjunction with a freeze everything semantics. Because it's like, do you freeze it first? Do you require that the custom reviver return a frozen thing? So that's a question. But you're right that it's compatible with this.

DRR: From JHD, we have a plus one.

ACE: To adding a reviver option, is the idea that it could make sense as a follow on or you would want to see this in the proposal before it goes forwards?

OFR: I don't know. It was more like if I would propose this, then I would propose it this way because it kind of makes sense to me. But and also just to make it clear, I was thinking of a reviver or the other things, not that you can combine the reviver with the other things because that, I think, would be quite hairy. So it's more thinking that you can just write the reviver instead of inside the struct instead of putting it naked there so that it looks the same in both cases.

JHD: And yeah, for my plus one, I think because of that interaction and I don't think it's actually clear whether they should be mutually exclusive or whether they should alter the arguments the reviver argument the reviver function gets or test the return value or I think that makes sense as a follow on proposal.

DRR: OFR, you have exclusive or is your top reply?

PKA: I think he said his yeah.

DRR: Gotcha. MM says, I prefer not adding a reviver option in this pull request, end of message.

MM: Yeah, it's sort of on a YAGNI basis. It might just not come up as needed, in which case we just happen to skip it because nobody was interested. But if anybody is interested, it's very natural how it goes in. So I prefer just leave it out of this one. Keep this one minimal.

DRR: All right. KM.

KM: Yes. One note on there's in the overview describes this as a performance improvement. I would expect for—I don't want to say the foreseeable future, but probably a significant lag until it becomes popular enough to even use this, it will still probably just go down basically the same path as the reviver. And you will not probably get most of the other optimizations that JSON parse has of whatever intense things that we don't bother doing with on the reviver path. But just not as a mean that it won't mean that we preclude optimization so there's still some theoretical value in the future, but I just want to make it clear to the committee that I would expect for us and many other engines, it will not be tuned in the near future.

DRR: CDA?

CDA: Have the editors signed off on the spec text?

PKA: That's a great question.

CDA: Because that's one of the entrance criteria for 2.7.

PKA: You raise a great point. Yeah. Have any editors?

MF: So I was out the last couple of weeks while the editor group was doing approvals. So I didn't do any of these last reviews this last week, and I won't be able to speak to whether the editors did. So if you don't have confirmation from anyone from the editor group that they've done their reviews and we don't have anybody else on the call, then we won't be able to have that confirmation.

CDA: Well, I hate to be the bearer of bad news. Doesn't sound like we can advance today. But hopefully, maybe we can get an answer before the end of the meeting—a positive one because I would like to see this advance.

DRR: Shall we proceed with the remaining queue items in the meantime?

CDA: Yeah. NRO.

NRO: Yes, please.

NRO?: Just I don’t know if he signed off on it, but Linus did review this proposal. So we just need to confirm with him.

DRR: All right. RGN. You might have a preference on this one.

RGN: I have a preference that it not be called `preferNullPrototype`. We can definitely bikeshed on what it is, but the current name fails to communicate that it's actually always null prototype, but only for non-array objects. It's not blocking 2.7, but I think we can probably do better. I do support Stage 2.7.

DRR: CM.

CM: Yeah. Just a clarifying question. Which RGN's question prompted. Does `preferNullPrototype` come into play for anything besides object literals?

PKA: No.

CM: Call it `nullPrototypeObjects` or something?

PKA: Well, the thing is that arrays are objects.

CM: Oh yeah, you're right. Fair point.

ACE: If we change arrays to not inherit from objects first. Quickly whizz that change through.

PKA: Oh, yeah. Whizz that proposal through. And then do that.

CM: Yeah.

PKA: We can get right on that.

PKA: Trivial add-on.

CM: Okay. Thank you.

DRR: Jordan, with plus one, should do this. Prefer is a should, not a must, and a message. And Jordan, with another topic.

JHD: I think given the import type JSON is meant to be it basically does a `JSON.parse`. I kind of feel like we should add import attributes in this proposal for these options. They're already going to be part of the cache key, so that I think that part is already handled, right? If you import it once frozen and once not, those are two different objects and once frozen and once not and so on. But yeah, it seems like a good idea.

ACE: It's an annoyingly slightly bigger change than it sounds because right now we say import attributes should only be string literals. So this would be the first time we would say it's okay to have a literal true and I feel like that is a little tiny keyhole that blows out into a bigger discussion. But I definitely want to do it, but I would want to do it as a separate proposal.

JHD: Yeah. I mean, it's fair that there might be some discussion about, do we only want literally those four or five characters present without quotes and stuff. And but that to me does also seem like they're straightforward answers, but that instinct doesn't often bear out in this room, so.

(laughter in room)

DRR: We have a plus one from OFR. And then RGN.

OFR: Maybe add a bit. I think it's actually I think it would be even a bit more than nice to have it. So thanks for raising it. I actually had it as feedback, but forgot to mention it. So yeah, I think that would be nice to have it. And I can see why procedurally you would want to split it into two. So maybe if you want to make it such that we absolutely believe you that you will do it, you can already start it now.

RGN: Yeah, that makes sense to me also. Pursuing import attributes is an obvious next step, but let's not blow up the scope of this on resolving the open questions that we know about already and that we're plausibly going to discover as it proceeds.

ACE: But say we could always choose the let's not eagerly ship the `JSON.parse` one, hold it in stage three while we just…

RGN: I think it's got enough value that yes, let's go ahead and eagerly ship it. It's fine to have imports lag runtime evaluation of a built-in API. We went so long without having import type customization at all. It's totally fine for this to lead. And it provides value without affecting the imports as well.

DRR: NRO?

NRO: And just a historical note here. Boolean attributes were discussed in the context of the import attributes proposal. And the only reason it's not there is not because of any disagreement. It's just that the use case we had at the time was passing a string, and so there was no need for the proposal to support booleans. But the idea at the time was already that we would add booleans as soon as there is a use case for it.

OFR: I was too slow to hit the reply button on the optimization topic. We discussed it, and we were actually thinking that this might turn out I mean, not making promises, but I can see this landing somewhere in the middle between the optimized path and a random user-defined function that does something so even from the performance point of view, I think this proposal makes sense.

DRR: KM?

KM: To clarify, I'm not saying that it wouldn't be faster than the slowest thing because you don't have to make a call from basically whatever your native thing is in most implementations back to JavaScript just that it would not necessarily benefit from all the optimizations that would exist in the normal fast path.

DRR: RBR?

RBR: Sorry. Since this is a performance API in general, using an out prototype will prevent for example, in v8, it's a dictionary mode in most situations. So you have a slow access afterwards. And this can have a huge penalty. So it's kind of a weird API for me where you want to make something faster and at the same time, it's almost guaranteed at least as of today. I mean, maybe there are future optimizations, but as of today, to make things almost certainly slower overall.

DRR: OFR?

OFR: It's funny that you mentioned this because it's actually coming it just came up. I was just in a discussion about this. So just to make this clear, it's only slow if you create a so basically, if you create an object literal and the prototype is null on the object literal, then it directly goes into dictionary mode. And it has a historical reason because this is how basically, this is to detect when objects are used sort of as dictionaries. And so yeah, it might change, but basically, it's not going to affect this API because we can decide it's not that all objects which have a null prototype are in dictionary mode. It's more like using the null prototype in an object literal, we use as a heuristic currently that this object will be used in a dictionary mode. And it's actually hard to deprecate, or it might turn out to be a hard to deprecate heuristic, because we even advertised it in the past as do this if you want this behaviour. So we'll see where we land on that one.

DRR: I'll give a quick time check. We're under five minutes now, but it seems like the queue has shrunken. So that's good. RBR?

RBR: Since I maintain something like I maintain a JSON stringify implementation where there are multiple options and I'm curious if you looked at the ecosystem for requests for similar functionalities because freezing a null prototype is something that at least I personally have not really heard of as a feature from users as I said, it's JSON stringify, not JSON parse. So it's a different part of the API, but for there, what is common is definitely BigInt, for example, number one kind of that's like everyone wants to handle it one way or the other. It doesn't matter if it's like a string or bigint. Some have one perspective, one have the other. And there are a couple more of these or how to throw on particular things and to have a safe stringification. That's something common there. So how's that in this proposal coming by? Is this really a frequently asked for thing?

ACE: It's frequently asked for by Bloomberg delegates. We like immutable data. We operate one of the largest JavaScript code bases in the world.

RBR: Maybe it would be nice to get some data besides Bloomberg.

ACE: So I think what's important here is we do two things. We can either look at what the ecosystem is doing and then mirror it, or we can innovate in a way that we think people should be doing. Maybe something isn't common…yet. Most code does `JSON.parse` and they don't then go through the hassle of freezing it. Because it's extra stuff. I think sometimes just because something isn't happening isn't because people don't want it. It's just because it's not convenient. You have to write a function or pull in a library. So I think sometimes things will only become popular once they're in the language. But I completely see what you're saying. And I think the BigInt one, 100%, we want to see that as a follow-on as well because we do see that in the ecosystem. One of the most common use cases for the reviver is BigInt. I think the date one is more complex, but the BigInt one I think is straightforward enough that we should really do it.

DRR: All right.

RGN: Also in a separate proposal, right?

DRR: The queue is empty. And with a minute and a half to spare. Shall we figure a conclusion here?

PKA: What did we hear about—Did Linus say that he or did NRO say that Linus had reviewed it?

NRO: I think Linus did review this, but he did not approve it. So we need to wait for Linus to confirm whether he's ready, was done.

PKA: Got it. Okay. So yeah, can we do a follow-on at the end of the meeting to see if we've got a review? Thank you. Okay. Thank you, everybody.

### Speaker's Summary of Key Points

* The proposal has incorporated the feedback from the previous plenary
* It now overloads the existing `JSON.parse` to take an options bag
* There is desire to improve on the naming of the 'preferNullPrototype' option

### Conclusion

* Stage 2.7 was not requested due to waiting for an editor's sign off

## [Intl Sequence Units](https://github.com/tc39/proposal-intl-sequence-units) Stage 2 Update

Presenter: Shane Carr (SFC)

* [proposal](https://github.com/tc39/proposal-intl-sequence-units)
* [slides](https://tc39.es/proposal-intl-sequence-units/slides/stage_2_update_2026-09.html)

SFC: So sequence units are for measurement systems that employ multiple units in a sequence to express a single magnitude. So for example, these are some common ones you'll see. If you're trying to measure the length of something, you might measure it in foot and inch. It's very common in countries that use those measurements. And then meter and centimeter. Meter and centimeter is common and also in some countries for measuring person height, for example. Mass, pound, and ounce, kilogram and gram. So a common misconception is that this is just an American thing, but actually this is used in other places as well, even in the metric system. So that is what our sequence units.

SFC: So this is just a stage two update. There's been a few things you've been working through in the TG2. The first and probably the biggest change is this one here, array as input. So we discussed along with the numerics champions about whether to use object versus array and for various ergonomics reasons, we switched over to using an array. And this is what it looks like. So the stage two proposal that was approved used the syntax on the left, but now the spec is using the syntax on the right. Or at least the spec in an open pull request is using the syntax on the right. So that's the first update.

SFC: I'll go through all the updates and then go to the queue afterwards. The second one is significant digits. Good. We can digits, but we weren't able to come up with a cohesive definition of how to define how significant digits should work, because one argument is that you could say, well, you like, you have a running total of significant digits and you deduct from that total as you render numbers. So, for example, like, if you're trying to render 5 foot 11 inch, you might render as 5 foot 10 inch, because that gives you 2 significant digits if that's if 2 significant digits is your target. But that is kind of doesn't make I don't think anyone thinks that that's a good idea. So another approach is, well, what if you just apply it to the smallest unit? That's how we do it with fraction digits. Why not do that also with significant digits? But that produces cases like this, which 3 feet and 0.18 inches is much more precise than you, I think, were intending, when you said just give me 2 significant digits.

SFC: So given that we're not able to come up with a well-defined definition for this, the recommendation is we throw an error and it could be a TypeError or a RangeError. I think I actually opened an issue after that discussion earlier. But it'll throw an error of some type. Of something. There. It'll throw and just as a reminder, fraction digits remain supported. They modify the smallest unit in the sequence unit. Cool. So that's this one.

SFC: Issue 8. So in the July plenary, I had an agenda item where we discussed time and duration units, and during that slot we got a little bit of input from the others in the plenary. So one realization I had looking back through the notes was that, there are sort of two perspectives here. One comes from the INTL side of things, the INTL point of view, which is that—we spent a lot of time designing INTL duration format. We should use the INTL duration format. And then the other point of view is, but we have this Amount thing, which is going to be super ergonomic and should support units even if they're supported elsewhere. Just because they're supported in CLDR. Like, a time unit is a time unit. It shouldn't be a special case.

SFC: So given this, my suggested path forward here is that we stick with the sequence unit proposal as written, which does not have time units for formatting. But then Amount can go and do its own thing. Amount, if it wants to support time units, it's fine. And one suggestion that Eemeli had made which I'll put on the slide here, but it needs to be discussed in much more detail. And amount is out of scope of this presentation. So I'm sort of giving this 3-line snippet and it's out of scope of my presentation today is that perhaps amount could delegate to INTL duration format so that you can still get 2 locale string that just works. So that's my suggested path forward. So the impact on this proposal, which is INTL sequence units, is that we just continue with the status quo, which is no time units in INTL number format for sequence.

SFC: So those are the 3 issues. 16, 14, and 8. This is this gets us to the bottom of the open issues on the repository. So this proposal is going to be getting pretty close to stage 2.7. I'm not asking for stage 2.7 today because the spec text wasn't quite ready and I wanted to make sure that we are happy with all of these changes and then according to the notes, EAO and DLM are the stage 2.7 reviewers. For this proposal. Cool. Are there any comments?

WH: Where would degrees, minutes, and seconds fall into? Would they fall into any of the domains of the upcoming proposals?

SFC: The question of arc, minutes, and arc seconds was brought up a couple of times a couple of presentations ago. We have an open issue for it. We decided it's out of scope of the current proposal. It could be added in a follow-up proposal. We currently have the unit degree, but we don't have the unit arc, minute, and arc second currently in INTL. So at a point at which arc, minute, and arc second are added to INTL formatting, then they would be added also to the sequence units list. Once that gets added. But since we only have degree. There's no need to add degree to the sequence units table because we only need to add them if there's at least 2 in the class.

RGN: Yeah. Just a clarifying question; what kind of feedback are you looking for right now, given that this was an update? Do you want plenary discussion of the issues that were on the slides?

SFC: Yeah. I'm so in TG2, we discussed all 3 of these issues also in the numerics champions call. I'm looking to see if plenary is happy with these changes to the proposal. And then so that when we come back for stage 2.7, it's more like okay, this is the state of the proposal. It hasn't changed in the last stage 2 update. So if there's anyone who has comments on these or wants to dive in and dig into any of these 3 issues and the current proposed solutions, then this is the time to do so.

RGN: All right. In that case, I don't remember the full details of all of these. So just speaking to what is on the slides, accepting array inputs, I am definitely in favour of. Disallowing significant digits by throwing an exception, I’m also in favour of. And excluding time sequence units from number format still seems reasonable, especially because that decision can be reversed if and when the use case presents itself.

DRR: The queue is empty. Do you have anything else that we want to conclude with, Shane?

### Speaker's Summary of Key Points

The speaker did not provide a summary.

### Conclusion

No conclusion recorded for the minutes, please refer to transcript for more details.

## Intl Unit Protocol Stage 2 Update

Presenter: Shane Carr (SFC)

* [proposal](https://github.com/tc39/proposal-intl-unit-protocol)
* [slides](https://tc39.es/proposal-intl-unit-protocol/slides/stage_2_update_2026-09.html)

SFC: All right. INTL unit protocol stage 2 update. So similar kind of thing. As a reminder, INTL unit protocol. A number ought to be annotated with the quantity it is measuring. Which is important for MessageFormat. This is also part of the motivation for Amount. But the idea with INTL unit protocol is we need to have some way to express a number annotated with the quantity that is measuring. And we can think about the shape of that input in terms of the ergonomics when passing it into INTL number format. So currently, you can do what's currently shown on the left of this slide. Your you pass a unit into the constructor.

SFC: The this proposal allows you to pass the unit into the format function. Instead of only into the constructor, because this allows the unit to be selected at format time instead of at construction time. So here are some issues that came up with INTL unit protocol. So ACE made a good observation that in order to retain additional backwards compatibility, we should be we should think about exactly the conditions on which we sniff for the protocol. So if what I mean when I say sniff for the protocol is when you pass an object into INTL number format prototype format, currently, we call `Symbol toPrimitive`. And we should continue to do that because that is how INTL number format has worked for a decade and a half. But what we want to do is that if you pass in an object that conforms to our protocol, the INTL unit protocol, we want to be able to detect that as INTL unit protocol. So we went through this in with some level of detail in multiple TG2 meetings.

SFC: And this is the current proposal for how to do this. So if input is an object, so we said if input is object, then we call the then we get the 2 fields value and unit. And then if both of them are not undefined, then we assume that it's a unit protocol object. So that is the current behaviour. I just want to emphasize that this also has the implication that the dimensionless or non-unit formatting is with the null unit. Not undefined. If you explicitly opt into undefined, as the unit that is considered as the field non-existing, we had a discussion where we went back and forth on should the thing on the right for print 333 instead of 111. Like should the existence of the property somewhere in the prototype chain trigger the protocol? And we decided no. It's just if you want to do that, you use unit null, not unit undefined. So unit undefined will be the same as if that field did not exist. So that's what this slide is all about. Oh, no. This slightly spilled off the edge of the slide. Open question coercing the value field. So I opened a question on the GitHub about coercion because this has been a topic of a lot of interest in this committee. So the question is in the INTL unit protocol, should we call `Symbol.toPrimitive` on the value that's passed into the INTL unit protocol? Currently, we call `Symbol.toPrimitive` on the arguments to the format function. But do we want to also do that on the value? So currently, in the spec, we do that because we use the same abstract operation for both. So we use the abstract operation, which calls toPrimitive. And this proposal only deals with taking the argument in the format function and moving it into the value field. I'm sorry this pulled off the bottom of the slide here.

SFC: Oh, there actually is darn. Can I there's 2 yes/no with pros and cons. And they spilled off the bottom of the slide. I'm going to like present the markdown version of this so you can see it without it spilling off the bottom. And I'm going to figure out how to do that right now. Preview. Open preview.

CDA: If you want it, I don't know how quickly you can fix your slides. But if you want to take a couple minutes, we can afford you that luxury. Up to you.

SFC: Okay. How many times do I have to click OK in order for it to share? I have to click like 3 times. Okay. So here's the is it sharing? There it goes. I'm going to zoom in. I'm going to zoom in over here so you all can see it better. Okay. So this is the slide without the slide view. I'm trying this new thing where I'm using markdown to make my slides. But then it means that it's not WYSIWYG. And I don't catch these types of issues. Until I'm actually trying to present them. So should two into mathematical coercions. So here's the arguments in favour of that. So the argument for yes is that it uses the standard abstract operation, the same one that we use in the format function without the arguments. It means that the unit that this proposal, the INTL unit protocol, deals only with the unpacking of the value and unit fields without changing the semantics of how they behave. And it seamlessly supports custom numeric types. We can agree to disagree on whether or not that's intended behaviour. But it does currently work. You can have a custom decimal class that when you pass it into an INTL number format, it just works if it implements a Symbol to primitive that returns a string. That will just work. And it seems nice if it just works in INTL number format currently, that it should continue to work if you're using INTL unit protocol. The reasons to disallow it are that it aligns with the stop coercing things. But it does make the format function self-inconsistent, which is kind of, again, repeating what it says above. So the only reason to disallow it is because it aligns with that principle. But an exception to that principle was if there's a strong reason to keep consistent with how things are currently behaving, then maybe that's the reason to do that.

SFC: So there's also one more open question over here that I have. Maybe I could switch back to the actual slides for this one. I want to switch back to the actual slides for this one. Okay. Switching back to the actual slides. Open question. Non-unit formatter. What should happen when passing a protocol to a non-unit formatter? So if you have this call site. What should be the behaviour of this block of code? Should it throw a TypeError? Should it format the 333, the value? Or should it format 111? Currently, the spec is doing the 333. Because it always reads the protocol. All the time. And then we'll just ignore the unit because it's null. But no, actually, this slide says oh, sorry. It actually does the first one because there is a unit. The unit exists and then it sees that it doesn't match because the formatter is the wrong type. It wasn't configured with a unit field. So this is another open question for which direction we should take this. Whether we should be where we should see that the protocol is there. We didn't expect the protocol. So throw or whether we should only read the protocol if the formatter supports the protocol. In other words, if it was configured with style unit or style currency.

SFC: Thank you for the little bit of a detour. I'll fix the slides and republish the slides later so that people looking at this later can see the slides the way they're supposed to be seen. But I am quite interested in a discussion on these issues. So let's go ahead and dig into the queue.

SFC: Okay. Plenty of time for people to go and voice opinions on this. And especially on the coercion thing. Because I know a lot of people in the room have strong opinions on coercion.

DRR: Do we have strong opinions on coercion?

SFC: I don't does anyone have any opinions on the other parts, the easier parts, which is the protocol sniffing behaviour and exactly how we handle null versus undefined? Those are the easier ones. I would assume. But maybe they're not. This group often surprises me. And then coercion, I expect to be the hard thing that people have opinions on. But I could also be surprised.

JHD: I put two on there. I'll do the easier one first. I think null is better than undefined. Because the language has already embedded that as a precedent with default parameters. And we already have added affordances to make it easy to treat them the same. Nullish coalescing and optional chaining. So that was my easy one. And then the other topic was I just think we shouldn't coerce. People shouldn't be still relying on coercion. Anyone using TypeScript isn't. And anyone using linters or following best practices isn't. And so I just don't think the inconsistency is going to matter. And I think people should just if somebody is intentionally relying on coercion, I feel like my response would be “too bad, write your code cleaner”. And that's obviously an opinion. And not an objective thing. But I'm not really worried about a consistency issue there. Because the majority of people, I think, are already going to be passing the right type of thing.

DRR: From Christian, we have plus one preferred null over undefined. End of message.

RGN: Protocol sniffing feels right to me. We were willing to pursue a strategy that involves prototype chain interrogation, but landing on one that doesn't require it is more satisfying.

DRR: We have exhausted the queue. I believe a little more time for other people to provide some thoughts. Suggestions, opinions. And they're coming in.

SFC: Maybe it's better instead of asking for opinions if I say what if I don't hear any opinions, the thing that I will bring back for advancement next meeting, maybe that will get more people to speak up. So I intend to bring this thing with unit null. It sounds like we mostly agree on that. I would like to bring for coercion, I would like to use Intl Mathematical Value because that's the current abstract operation we have. I think that the advantages are stronger here because the making the function be self-consistent. I think is important. And making unit protocol be scoped to just the unit protocol and nothing else. I think is a cleaner proposal than trying to also modernize other parts. Because the two Intl Mathematical Value does a lot of stuff. And coercion is one of the things it does, but it does a lot of other things. And I don't really want to open that can of worms I just want to keep Intl Mathematical Value working the way it does. So that's my opinion here. And then my opinion on this one, I think that changing the scope so that we only read the protocol when the formatter is of a shape that needs the protocol. I think is it also a direction that I would like to pursue. That is option three. So if that helps, that's my preferred path forward. Does that make anyone else join the queue?

ACE: What coercion is it expected that these values could legitimately be strings in cases? Is that if someone's trying to represent a string with a certain number of decimals in that it's not.

RGN: Strings are explicitly supported. And we spent a lot of time to make them work well.

ACE: So to me, there's coercion where it's like, they're giving us the wrong thing, but we're going to make do. And then there's they're passing in a value that's yes, it's a string, but it's a string that we explicitly expect and are supportive of. But it sounds like this would also bring in the other type of coercion as well where people. Actually passing in values that we would frown upon but still it would work.

SFC: It's really the only question is, do you call `Symbol.toPrimitive` or not? It's kind of that's because the converting the number to a string is a thing that we need to do anyway. And there's not really a good way to avoid that. But again, it's maybe there should be. Maybe we should make a sanitized to Intl Mathematical Value. I don't really want to have to explore that. I just want to use the thing that's there that we've worked a lot of time to get it to do what it does.

ACE: Yeah. This sounds okay. This to me sounds like not the bad type of coercion. This sounds more like correct conversion.

RGN: Yeah. We're already on the right slide. I prefer the first option here. I'm very much against ignoring the unit protocol fields because that creates a forward compatibility hazard. If we ever wanted to introduce support for them, then now we deal with yet another scenario where existing code has to change in backwards incompatible ways. As opposed to using the thrown exception case allows us to address that much more conveniently.

SFC: How do you feel about the fact that right now we're changing a we're already changing a non-exception case to have new behaviour?

RGN: I don't want to stack those changes one on top of the other. Right now, we're biting the bullet because it gives us significant new functionality. And we should be prepared for future evolution rather than repeating the mistake that bound us into backwards incompatibility in the first place.

SFC: Cool. If there's no one else on the queue, I'm happy to yield the floor. I think I got what I needed to get out of today's discussion.

DRR: Okay. Can you restate the specific conclusions of what you're intending for the next meeting and decisions you're leaning towards?

SFC: Yeah. So the conclusion here is for the protocol, we'll use the spec, which is currently in the repo and presented on the slide, which requires the presence of both the fields and that they must be not undefined. And which means that the lack of a unit is represented as null. I'm currently leaning toward the current spec text on coercion, which uses the existing two Intl Mathematical Value abstract operation. The way that it currently works and then I am based on RGN's feedback, I'm going to go and likely keep the current spec behaviour on how non-unit formatters interact with the Intl unit protocol. So that is all to say that the spec that's currently in the repo is a spec I'm going to be pretty happy with. And I intend to come back in a meeting in the near future to ask for two seven. So thank you for your time.

### Speaker's Summary of Key Points

The speaker did not provide a summary.

### Conclusion

No conclusion recorded for the minutes, please refer to transcript for more details.

## Active proposals missing champions: `function-sent` (Stage 2), `collection-normalization` (Stage 2), `destructuring-private` (Stage 2)

Presenter: Michael Ficarra (MF)

* No slides presented

MF: Similar to the last topic I brought, we do have three proposals that we do not have current champions listed for. They are each stage two. And I wanted to resolve this again either by marking these as abandoned or by oh, share the proposals explainer? Oh, each individual proposal's explainer. One second. I have so many tabs open. Okay. Here's the first one.

MF: Here's one of them. This is the destructuring private fields proposal. This was originally championed by Justin. Actually, Peter had brought this up at a previous meeting where we could not find anybody who was willing to champion it. And we discussed possibly bringing it to a future meeting to mark it as officially abandoned or request withdrawal, whatever. Since then, KG has actually reached out to me. KG, are you here? He messaged in the chat. But he wanted to volunteer as champion for this proposal. I believe his words were "if nobody else does".

DRR: May not be here. We do have a clarifying question from CDA.

CDA: I'm just curious. Why these three specific proposals? I'm thinking about how when we were on the topic of looking for reviewers, one of the proposals champion was clearly not really in committee anymore. That could have been on this list. I'm just sort of…

MF: It is on this list. Yes. And this was just according to the data that we had recorded on the proposals table.

CDA: Thank you.

MF: Again, we're working with—we're getting to a really good state, hopefully. So yeah, this is just the first tab I could find. So this was the one I did first. So would anybody like to rush in front of KG to champion this proposal?

ACE: I want KG to champion this because of how close it related is to KG's other proposal. I think it makes sense to have a coherent vision of the two.

MF: Sorry. Yeah, great. I'm sorry I did not sync up with you before this then. I just—that was also my same conclusion. Okay. So for this, it sounds like we have—and I'll go back to the matrix to confirm—but it sounds like we have KG volunteering to take this over as champion. I'll link to evidence for that following this presentation. The next one, let me go back. Collection normalization.

DRR: Just really quick. I mean, Chip, do you want to still ask about this?

CM: Yeah. I'm just kind of puzzled. You said there's no champion because Justin was the champion. But Justin is actually on the call.

MF: Yes. We established at the last presentation that Justin was not interested in continuing as champion.

CM: So he said he don't want to do this no more?

MF: Yes. At the time, we did not say that we are going to ask for the proposal to be withdrawn.

CM: That clarifies it. Thank you.

MF: Yes. Okay. We have collection normalization. This one, we talked about earlier. It did not have stage 2.7 reviewers assigned. And it also formerly had a champion who is no longer active and our data has BFS removed as champion. So would anybody like to volunteer to champion the collection normalization proposal? Again, if nobody does, I am planning to move to mark this proposal as abandoned. So we did have three people sign up as stage 2.7 reviewers for this. I'm one of those people. Ashley or Jordan, are you interested? You'd have to step down as 2.7 reviewer, unfortunately.

JHD: If no one else is willing to step up, I can certainly look into it for a future plenary.

MF: That was a very weaselly answer.

JHD: Yeah. I mean, I have to page it. I have to page it back into context and look at the notes and get a sense for myself of how of what the obstacles are in front of me for the proposal and all that stuff before I want to commit to it. So that's why I gave a very vague answer. But assuming it seems viable, I would definitely like to continue pursuing it.

MF: Okay. It sounds like you're not volunteering immediately as champion, but you would prefer that I not move to mark it as abandoned at this meeting.

JHD: Correct.

MF: Okay. That seems like a fine resolution for that one for now. It's still in limbo. And finally, we have `function.sent`. This is a very old one. This should be from, I think, 2015. This is AWB's, right? There it is.

JHD: The last time I brought `function.sent` up, the only person who was interested in there was non-zero people who I think were interested in seeing it land. But the only person who was interested in putting in work was JHX. And I don't believe there's been any work put into it since that time.

MF: Yeah.

JHD: Just to provide some context.

MF: Yes. I mean, yeah. I think that this is a good proposal. I think it's valuable. I'm not willing to champion it. Is there anybody on this call that is willing to champion it? I will unfortunately ask to mark it as abandoned if there's not. And again, I am a supporter of this proposal. I'll give it an extra long pause.

SFC: I assume abandoned. I assume abandoned means that it can be picked up later at the same stage if someone wants to pick it up later. It's just being explicit about the status.

MF: We are never beholden to our own rules. We can change our rules at any time. So yeah. So yes, we can transition from any stage to any stage if we want.

JHD: But yes, the intention of abandoned is that the only reason it's not advancing is that nobody's putting the work in. And therefore, that anyone who shows up can just pick up where it left off. If that's if there's pushback, then that might warrant a different note.

MF: Yeah. The difference from something like rejected or withdrawn is that those are positively indicating that the committee does not wish for this to proceed. Whereas abandoned just means that nobody has indicated a strong enough desire for it to proceed. Okay. It sounds like nobody is willing. So I would like to ask for consensus that after many, many years, function sent is marked as abandoned.

DRR: Quick thing. Chris's topic, I think, just go ahead, Chris.

CDA: I would still like to voluntell Michael to do it, but can't have everything.

**Poll:** should MF champion this proposal? (1 min, 14 voters) — @ctcpip

* ❤️ Strong Positive: 13
* 😕 Unconvinced: 1

DRR: And then from Peter, plus one, I support this in a message. So yeah. And then.

CDA: Sorry. Is that support for voluntelling Michael to champion it or for marking it as abandoned? He's nodding his head for abandoned rather than.

DRR: Yes. I'm not sure. I assume either way. Leaning towards abandoning. RGN's also saying he's a big fan of MF just picking up the work. End of message. I think that actually warrants its own proposal at this point. But I don't know.

MF: So I guess for the record, for any future delegates who are looking back at the history of this proposal, it sounds like there's currently a decent amount of very weak support for this proposal. And it has a high likelihood of moving forward if you want to put in the work. But it sounds like we do have consensus then to mark it as abandoned.

CDA: I just want to try one more time. If I volunteer to be a reviewer, will you champion it? Meet me in the middle.

MF: It really sounds like people do really want this. Why is nobody—the only reason I'm not championing it is I have other things I have to champion.

CDA: What if we did so some people have left the meeting because time zones. We could do a continuation and see.

MF: Fine. Yes. I support that. Let's add a continuation topic for changing function sent from abandoned back to stage two if we can find a champion.

CDA: NRO on the queue with, I think, CDA needs to kneel in front of MF and ask again the night is young. Daniel is entering the queue. Sorry. I've you're supposed to be chairing, and I'm stepping on your toes.

DRR: This is a joke. Don't or is it? Maybe. Okay. We're please direct your attention to TCQ and vote for your choice here.

MF: The thing is, if I was to champion this, I know I'd be coming back and everybody would be waffling and unsure about the nitty-gritty details of the syntax. You're all so happy and supportive today. It all changes next time when I actually bring it back. So it's just not happening.

CDA: The committee has spoken very clearly that we all want you to do this, but all right. Thanks, everyone. That is our last topic of the day. That brings an end to day one. Please remember to write your summaries and conclusions if you have not already done so.

### Speaker's Summary of Key Points

* Three Stage 2 proposals lack current champions: `function.sent`, collection normalisation, and destructuring private fields.
* New champions or abandonment were proposed to resolve their status.
* The former destructuring private fields champion had stepped down, and KG had offered to take over if nobody else volunteered.

### Conclusion

* KG will take over as champion of destructuring private fields.
* Collection normalisation remains without a champion while JHD assesses whether to take it on; abandonment was deferred.
* `function.sent` was declared abandoned by consensus because nobody volunteered to champion it. It remains available for future work.
* A continuation topic will seek a champion to restore `function.sent` to Stage 2.
