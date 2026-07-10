# 114th TC39 Meeting

Day One—2026-05-19

**Attendees:**

| Name                   | Abbreviation | Organization       |
|------------------------|--------------|--------------------|
| Daniel Minor           | DLM          | Mozilla            |
| Ujjwal Sharma          | USA          | Igalia             |
| Samina Husain          | SHN          | Ecma               |
| Chris de Almeida       | CDA          | IBM                |
| Waldemar Horwat        | WH           | Invited Expert     |
| Gustavo Tonietto       | GTO          | Mozilla            |
| Zbyszek Tenerowicz     | ZTZ          | Consensys          |
| Yusuke Suzuki          | YSZ          | Apple              |
| Dmitry Makhnev         | DJM          | JetBrains          |
| Linus Groh             | LGH          | Bloomberg          |
| Justin Ridgewell       | JRL          | Google             |
| Olivier Flückiger      | OFR          | Google             |
| Aurèle Barrière        | AUR          | CNRS               |
| Luna Pfeiffer          | LPR          | Yavashark          |
| Caio Lima              | CLA          | Igalia             |
| Richard Gibson         | RGN          | Agoric             |
| Jordan Harband         | JHD          | Socket             |
| Keith Miller           | KM           | Apple              |
| Bradford C. Smith      | BSH          | Google             |
| Mathieu Hofman         | MAH          | Agoric             |
| Chip Morningstar       | CM           | Consensys          |
| Mikhail Barash         | MBH          | Univ. of Bergen    |
| Ron Buckton            | RBN          | F5                 |
| Ruben Bridgewater      | RBR          | Datadog            |
| Gus Caplan             | GCL          | Deno               |
| Oliver Medhurst        | OMT          | IE (Porffor)       |
| Andreu Botella         | ABO          | Igalia             |
| Christian Ulbrich      | CHU          | Zalari             |
| Tom Kopp               | TKP          | Zalari             |
| Sergey Rubanov         | SRV          | Invited Expert     |
| Eemeli Aro             | EAO          | Mozilla            |
| Lea Verou              | LVU          | OpenJS             |
| Justin Grant           | JGT          | Invited Expert     |
| Nicolò Ribaudo         | NRO          | Igalia             |
| Istvan Sebestyen       | IS           | Ecma               |
| Philip Chimento        | PFC          | Igalia             |
| Aki Braun              | AKI          | Ecma International |
| Kristen Hewell Garrett | KHG          | Invited Expert     |
| Clément Pit-Claudel    | CPC          | EPFL               |
| Luca Casonato          | LCA          | Invited Expert     |
| Michael Ficarra        | MF           | F5                 |
| Patrick Soquet         | PST          | Moddable           |
| Shane Carr             | SFC          | Google             |

## Opening & Welcome

Presenter: Ujjwal Sharma (USA)

USA: Okay. Looks like the bot is running. That's it. I guess we start and we explain the note-taking setup. Great. Hello. And welcome, everyone, to the 114th meeting of TC39 in Amsterdam. Good morning. If you're there, and greetings, otherwise. Hope you're enjoying it. I've heard it's a Gura place to be. Please join me in meeting your chair group, me, Pujo, who's starting out, Justin, and Daniel are there with you in person. And Rob and Chris are here with us online. And Dan Rosmosser, so I hope you won't need us too much, but sure, make sure to sign in in the form. If you're there, either you're you've already filled in this form, or you're there in person, which means you'll get an in-person form. Please fill that. And please if you're in the call without filling this form, go back and fill that up, please. Next, we have the code of conduct. Okay. I think I'll just briefly summarize. Please check out our code of conduct and on the TC39 website. That's tc39.es/coc. As well as check out Chair Brain's code of conduct. A quick rundown through our daily schedule. The breakfast, that started around 40 minutes earlier. I think goes until the next 15 minutes or so. The meeting has started, though. So don't try to skip the first 15 minutes of meeting. The lunch starts at noon and goes until 13:00. And then we have a 15-minute break at half past 3:00. So until the end of the meeting all the way at 5:00. Regarding our communications tools, you might remember this is the boring old section, but pay attention. We have changed a few things here. So first of all, Google Meet. Since we're using Google Meet, if you're there in person, please use companion mode. This is a feature in Google Meet that is designed for this. Exact situation. And would help us with not having issues with the audio. If you're remote and not one of the chairs and facilitators, I would implore you to join it in incognito mode or private browsing. Something where you can set your username and set your username to include your affiliation. And next, we have TCQ. However, we don't have TCQ, or we have a new TCQ. Michael will make TCQ. So we'll go over that in more detail later. But I added a few photos to show you how the new TCQ looks. Here's the agenda view. And well, we're back. So in the participant view, there's all of these different buttons. There's still the same. In the new TCQ. And they go in increasing order of importance or interruption. So you can add a new topic. At the bottom of the queue, you can discuss the current topic. That is ongoing at the top of the queue. You can add a clarifying question. That jumps to the top of the queue as well as a point of order, which is something that should be used in a case of emergency or something that's gone wrong. Please let us know through a point of order. But don't misuse that, please. Then there's the speaker view. It says, "Please do not use this." But apparently, this applies to this old TCQ. So please feel free to use the new TCQ. And I guess Michael will tell you in more detail. All right. So we have matrix chat. You might already be in some or more of the in some of these chat rooms. But if you aren't, join them on matrix and join the TC39 space. That's like a group of these chat rooms that you can use them to explore more of these chat rooms. Next, we have the TC39 and ECMA IPR policy. The too long, didn't read version of this is that this is something that you should be aware of. If you are here, and participating, and looking forward to participate, if not, then you're welcome to observe. But please be aware of this. IPR policy, because this is how we govern intellectual property regarding the work that comes out of this meeting. Regarding notes, we do not have a human transcriptionist anymore. Instead, we have a bot that transcribes the notes. We would be running a similar workflow than earlier, though. To see how it goes. So we would ask for your assistance. Please summarize, key points. If you're presenting at the end of your presentation, and if you're helping out, thank you, I guess. Please note this, that a detailed transcript of the meeting is being prepared and it will be in the notes and you may edit them. Or contact the TC39 chairs. Please help out with the notes. So as I mentioned, you might be curious about helping out with the notes if this is one of your first meetings, then I would highly request you to consider joining us volunteer this is something that helps the committee run smoothly and I think we'll come to that real quick. Next up, though, the meeting after the next one, the next in-person meeting is the 100 the 116th meeting. This is oh, or wait, is this no, yes, this is the next in-person meeting. On the 29th of September to 30 sorry, Thursday, 21st October. By our friends at Sony Interactive Entertainment in Tokyo. The next meeting is I shall look it up real quick. In two months. But in August, 20th, in the Aronipe time zone. So that's UTC minus 5. Fun. Let's move on then with the committee housekeeping. And as I mentioned, it all starts with asking for note takers. So who would like to have the honor of helping us in this very first session of this meeting? To help out the notes I believe the bot is better and might be faster for there any volunteers in the room that I'm not seeing. Maybe the room's first thing with enthusiasm and I don't know.

I think OMT. Yes.

Thank you.

Do we have a second? We cannot move on until we have note takers. Perfect. So we have two.

Thank you, Justin. And thank you, Canada Honk. And I will yeah.

Who's the other?

Who's the second?

ZTZ?

Wait. Thank you, ZTZ then. So moving on with the committee housekeeping. Do let us know, though, if you need any assistance. And yeah. Okay. The approval of the previous minutes of the meeting. So the notes of the previous TC39 meeting are in the repo. Do we have confirmation of those previous minutes? And what about the current agenda? Do we have agreement on adopting the current agenda? I don't hear any opposition. Do you adopting the current agenda? Next, let's move on to the secretary's report. Samina. You have the.

Thanks, Ujjwal. Can I share my screen if?

Absolutely.

Thank you.

So quick point of order. According to the schedule, oh, you've it has been reordered. Okay.

Sorry. I don't know what order we want to go this one. We can go directly to Michael or we can go to.

Yeah. I think we should do Michael because this kind of going to cover kind of TCQ things. And people may want to avail themselves of that during Samina's presentation.

Okay. Sorry about that. Samina, we'll get back to you in just 10 minutes. First up is Michael. Please tell us about the new TCQ tool.

## Overview of communication tools

Presenter: Michael Ficarra (MF)

* [slides](https://docs.google.com/presentation/d/1s2BKv7oY6uAT_TUNy_OPmneaDBPzRy6cV_AfKuPefkM/edit?slide=id.p#slide=id.p)

MF: All right. Hey, everyone. Yeah. So this just kind of started out as me screwing around and now we're using it. So I'm terrified. So this is what it looks like. If you go there, just click the button to log in. It'll take you to a page like this. You might already have the meeting listed in your list of meetings if you've been added to the agenda or something like that. But if not, just use the direct link to the meeting or put in the meeting code in the box. There is a help tab both here and within the meeting. If you want to learn more about how to use it, this is like a kind of narrow directed way to do that. So yeah, in your vast amounts of free time, go ahead and read that.

MF: This is what the queue looks like. You'll see it has a lot more features than TCQ that we're used to. You'll see there's a marker for your own topics there. There's timers for time boxes. You can now edit your topic. Or delete it over there on the right. You can also rearrange your topic. You have permission to move it to later if you want. Because you might see something else on the queue that you want to defer to. So yeah, that's the queue tab. You'll also be able to look at the agenda tab and see what's upcoming. Your own topics, again, have the similar marker on the left. And the current topic is highlighted there. In yellow.

MF: There's also the log page. If you kind of were not paying attention for a little bit. All of the major topics being discussed are all put in the log. So you can catch up really quickly on what happened, what the conclusion was on the last topic, that kind of stuff. There are keyboard shortcuts. So press question mark to find out about those if you want to be efficient in your usage of TCQ. Also, if you click the hamburger in the top right, you can change some preferences. You can disable the keyboard shortcuts if you don't like them. Oh, yeah. Before I get there, I want to just mention one thing. When you press the buttons to enter the queue, or use the keyboard shortcuts, whatever, you are immediately entered into the queue with just like a placeholder topic. And when you type in your topic, it just edits the item to be your actual topic. So that you can jump in really quick. In case we're about to move on, that kind of thing.

MF: Other preferences, I do recommend that you turn on the notifications. These are pretty useful it seems. So you can be notified when you're about to be called on. Or other events. I mean, you don't have to, do what you want. But those are available to you. And you can also choose dark mode if you're into that. More can be learned on the README. Or you can open issues. There's also a link to the repo in the hamburger menu. So you can use that. Also, this is running on my account. So please try not to abuse it super hard. It will cost me money. And it would be helpful if at the end of the day, you just close it because it's keeping a persistent socket open and that is the part that costs me money. So yeah, you can just open it again in the morning to continue your TCQ usage at the meeting. That's it. Any questions?

?: Awesome. There are a lot of questions—open TCQ

MF: Just adding one more connection. Okay. All right. Okay. Chris says, how are people replying? They're pressing the reply button.

CDA: There's no reply button.

MF: Have you started the meeting?

MF: I'm figuring it out now.

CDA: I asked how are people replying. And how do I reply? There's no reply button because we haven't. Okay. Cool. Yes. It's a bug. We're reporting bugs.

MF: Awesome. This is exactly what I wanted to happen at the meeting today. I'm sure it will work as we continue to the next item. So are there any further yeah. Because it's supposed to be there. Okay. Are there any other questions? Well, yes, it wasn't there for some reason, even though I've tested a million times.

USA: I think EAO has a question on that here. Or is that so?

?: Wait, there's JHD. This is the current topic. Are we not seeing Jordan as the current speaker?

USA: Oh, yeah. That's true. Jordan, you're next.

JHD: End of message.

?: Oh.

MF: Oh, yeah. Yeah. You have to press the button to ask for notification permissions. Okay.

?: Is there a button other than inside preferences?

MF: That's the—it's like a checkbox.

?: Could you speak into the mic?

MF: Oh, JHD asked if it was a button. And I said it was a checkbox. I think. I don't know what's going on.

JHD: And you can move past my topic.

?: Okay.

?: Great.

MF: If it doesn't work, we'll just go back to the old one.

USA: RBN Is on with the point of order.

?: No, I think we are minor notifications.

RBN: Yeah. This is minor. But the notification checkbox is not working for me. I can't enable it.

MF: What? Okay.

RBN: I won't be that concerned. I'll just keep an eye on it. But I wanted to point that out.

MF: All right. If you notice anything, please open an issue, I guess.

USA: Yeah. I think it prompts you for notification permissions. Right after. And greatly, it shows me the point of order as a notification. I think there's that was the last.

Yeah. If we're done harassing Michael now, do you have anything else? Any other slides?

No. I'm done. Perfect.

Can I come back on those quick as related to this? I did solve this. I didn't get a notification for some reason. But I did. But there was a little bell icon in Edge in the address bar to click. And allow it. So it is working now.

All right. Great.

Was decided or concluded. We learned about TCQ. All right. Next up, I believe we have SHN.

## Secretary's Report

Presenter: Samina Husain (SHN)

* [slides](https://github.com/tc39/agendas/blob/main/2026/tc39-2026-020.pdf)

SHN: Thank you, let me share my screen again. Give me a moment. Okay. I hope you can see the slides.

SHN: Thank you. So good morning, everybody. First, Michael, thank you. That's a lot of work that you've done on TCQ. And despite the few bugs that you've been notified of, I have no doubt that together with all members of TC39 that are there, it'll be resolved in no time. And it'll be a great tool. I'm sure it was a lot of work. So thanks for that. Good morning to everybody. I am sorry that I'm not with you in Amsterdam. But you have AKI there. And she can of course take care of the TC with all of your questions from the secretariat. I'm going to provide a brief report on some of the things that have taken place over the last couple of months. And then AKI can also add some points where she would like. An overview with our GA coming up on the 30th of June. Some new standards. Some new additions that will be approved. I was recently attending ISO IEC JDC1 plenary. So I'll give a short update on that. And there is a workshop coming up here in Geneva on ITAP, which is related to TC51 on near-field communication. And I'm just going to bring some information on that for you all.

SHN: So first, for the TC39 GA approval, you already have the opt-out period open. For both ECMA-262 and 402, these drafts will be up for approval at the GA which is on Tuesday, 30th of June. So thank you very much for that continued work. At this point, we have not received any opt-out concerns or questions. So I assume it will move smoothly as it always has. And we will be looking to approve the 17th edition and the 13th edition of the two respective standards.

SHN: There are, of course, other drafts that are going to the GA for approval. And I also want to bring that to everybody's attention. Not only are the two from TC39, but TC38 will have a new edition. We have from TC53, their fourth edition on the ECMAScript embedded system API. And a new document, a new TR on runtimes put together for TC55. One of our newest TCs, really good work. And I think AKI will speak on this at the end of my slides.

SHN: So as I mentioned that I was attending the ISO IEC JTC1 plenary, we are a category A liaison in this JTC1. It is where we fast-track C#, ECMAScript, and SC22. And there, of course, multiple other Ecma standards which we also approve in the fast-track. I wanted to bring to your attention that each JTC1 that I attend over the last couple of years, I am doing a presentation on Ecma. What Ecma is doing on standards, Ecma's agile process, the work that Ecma does in the broader community, in addition to the industry members and academia and also very much touching on the community, working on programming languages, open-source community. And the topic of software that's becoming very relevant, especially with the new directives in Europe.

SHN: So in the plenary, I shared some case studies. The case studies were specifically on TC39 as being one of our longest I think it's now over 20 years as I said we are going to be on our 17th edition of approval. TC54, a newer committee, but already on their second edition of the standard. And also going through the fast-track. And TC56, also a new one on AI. And also going through the fast-track. They already did five standards and one technical report in a span of a year. So that's TC56, which is AI. TC54 is SBOM, CycloneDX, and of course, you all are TC39. So it was three different types of references on how Ecma works in the industry and the broader community. And the relevance these topics have in industry. And how quickly we can work. The lightweight we have the tools that we are improving all the time within Ecma. And how we can also bring that to ISO IEC JTC1 fast-track, which is a critical item. So the process tool we spoke about was one of them was, of course, the ecmarkup, which is very relevant. ISO JTC1 requires that standards come in Word format or PDF. And clearly, those are not the formats that are the tools or the environment that the particular TCs, especially the ones that I've done the reference on, work on. Or other projects that are on, for example, GitHub. So we spoke about how we support those environments. How we support different spaces where experts are working in industry and those topics are very relevant. And will become even more relevant for standards preparation. So this was very intriguing for the JTC1 each time they listened to it. They asked some more questions this time I received a lot of questions. And I have already had a follow-up meeting together with AKI with the JTC1 suggested by the JTC1 chair. And subcommittee chairs to talk about where can Ecma support JTC1 in this particular topic of documents and tools. So we will work through and see how we can best bring that support to JTC1. Ecma does not want to be only just a fast-track member. We want to be much more interactive. We also want to bring in a space where there can be other topics that come into Ecma. There are a number of members of industry that are part of the national bodies. But they can also be a part of Ecma. And work perhaps in a more rapid way to bring in a standard. So I think that was a very positive experience for us. And a lot of strong visibility. We will do another presentation at the next plenary, which will be in November. The plenaries are held twice a year.

SHN: There is a workshop that's coming up on July 1st here in Geneva following our GA. This workshop is driven very much by the organization called ITMA, which is an association from China that has members globally that are all involved in NFC, near-field communication. This is related to the iTAP standard, which is being developed in TC51. It has not yet been approved. It is in the process of reviewing comments that have been received at the last ExeCom. And will be potentially prepared for the GA. But it may need a bit more time. So at least we're looking for the end of the year for approval of this standard. The objective of this workshop is to bring a very open space to have the discussion on near-field communication from a very broad set of communities. So we have invitations sent out to different chipset vendors. Other ecosystem vendors from the near-field communication. So this is in the works. If this topic is of interest to any organization present, also in TC39, just please reach out to me. And I will ensure that you have the details for this workshop. Ecma is supporting this workshop together with the ITMA. We have a memorandum of understanding with them.

SHN: The next slides are my standard annex slides, which will talk about the next meetings, which are important. The GA already mentioned is the 30th of June. Then the next GA follows in December. And we have our ExeCom in October. And those dates do not collide with any of the TC39 dates. USA mentioned some dates earlier as he started the presentation. I just want to either make a correction or I need to be corrected. But the next one coming up, which is remote, 115, is on July 23rd. Not August. So please remind me if I am wrong on that. July 23rd. And following that, it is in Tokyo, September 29th to October 1st, which will, if you can just check your dates on your slide deck, we should just make sure that we are aligned. And then there's one last one. Your dates are correct. Okay. Very good. Thank you. So those are the dates that we should all be aware of.

SHN: And then there is, of course, a list of documents that are published on the repository on our reflector. There. I've listed here ones that you would could find of interest. Please let your chairs know if you would like to look further into them. What I want to also point out is we have the TC57, which is a high-level shader language, which we already formed earlier this year. They've already had official meetings. And it's great that we have two new members as a result of that. I don't think I had mentioned that in our last meeting. One of them is AMD. And the other is NVIDIA, which is great. I think they will be very active and hopefully with their joining Ecma. We may also attract a few other members from the industry and the chipset environment.

SHN: We've already talked about the code of conduct. I just do a friendly reminder of that. Invited experts. There are a number in the room. Please note that you're very valued. And your contributions are, of course, recognized just highlighted that if there is a voting that the vote are done only by member organizations. And that is the end of my presentation. And last but not least, it is our 65 years at Ecma. And that happens on the 17th of June, as a date to remember. That's the end of my presentation. Aki, do you have any comments that you would like to add to that before we open up for any questions?

AKI: Yeah. So quick, I didn't bother with a slide. I just wanted to let everyone know—because I think it's relevant to the people in this room and on the call—that TC55, aka WinterTC (Web Interoperability), is ready to publish their first document with Ecma. It is a technical report, the runtime keys registry. If you're wondering how we are publishing a registry via technical report, that's a reasonable question. Ethan Arrowwood and I will be talking about it at Web Engines Hackfest. I also will babble at you forever if you ask me when I'm not talking to the whole room. So if anybody who's an Ecma delegate, you are welcome to participate in TC55. You just have to make sure that your company signs the RFTC form. And if you're not interested in joining but you want to keep an eye on it, they work on GitHub just like y'all.

SHN: Okay. Thank you. And one very last comment. And I should have made this before I began. I want to thank the host, JetBrains, for hosting this TC39. I have been watching the organization through the Matrix channel. And a few other channels. Thank you very much. It looks like it's going to be an excellent event. You have a full house. thank you for all the logistics. And I hope you all have a great social. It looks like a great venue. So thank you to the host and specifically Dimitri on the work that's done. And that is the end of my presentation. Any questions, please?

USA: Great. Thank you, Samina. There is nothing on the queue yet. Maybe let's give it a minute.

### Speaker's Summary of Key Points

* Ecma reported steady progress toward the 30 June GA, with TC39’s ECMA‑262 and ECMA‑402 advancing smoothly through the opt‑out period, alongside additional approvals from TC38, TC53, and TC55, which is submitting a new technical report on runtimes.
* Aki shared that TC55 is ready to publish its first Ecma document: a technical report establishing the Runtime Keys Registry. The choice to publish a registry as a technical report is intentional, and Aki and Ethan Arrowood will explain the approach at the Web Engines Hackfest.
* Ecma’s recent presentation at the ISO/IEC JTC 1 plenary, featuring case studies from TC39, TC54, and TC56 that highlighted their productivity and fast‑track success, was well received and led to follow‑up discussions on supporting modern document formats and tooling such as ecmarkup and GitHub workflows.
* Ecma also announced the 1 July NFC/iTAP workshop in Geneva, inviting organizations interested in near‑field communication to participate.
* Upcoming TC39, ExeCom, and GA meeting dates were confirmed.
* TC57’s progress was noted, including the addition of AMD and NVIDIA as new members.

Final note: Thank you for hosting TC39 and the excellent efforts from JetBrains.

## Project Editors’ Reports: ECMA-262 Status Updates

Presenter: Michael Ficarra (MF)

* [slides](https://docs.google.com/presentation/d/1-ZA2HbVkY8XmpMiDromEhQOQlge-tXWVD6hIJWtDQwE/edit)

MF: Okay. Back in editor mode. This is the editor's update for 262. We landed this one, right? Okay. We landed one major normative change. This is the `JSON.parse` with source text. That was at stage four, I think two meetings ago. So that landed. Editorial changes you should know about. OFR asked for us to publish in the Biblio information about what the public API surface of JavaScript is. That now exists in the ECMA-262 Biblio. That's on NPM. That is due to us labeling the built-in functions as such. And then ecmarkup building the Biblio from it. We also now just say "throw" in a bunch of cases rather than returning throw completion using the ThrowCompletion AO. So you might see just "throw" being said. And not just the special form of throw a new X error. And then we've also made a big alias renaming for single-letter aliases or aliases that started with capital letters. These are mostly in older stuff. Not anything that we wrote recently. It hasn't followed our editorial conventions for a long time. But it's just been on the backlog. So we did that. We have a related upcoming editorial change of trying to be consistent with how we abbreviate terms so now that all of the names are longer and descriptive, we sometimes abbreviate some words, some places, and not other places. We're trying to make that more consistent and make it consistent with what we abbreviate those similar concepts to. So look for that in an upcoming change as well. Those are kind of high priority because they're going to be conflicting with a lot of stuff. So we're working on getting that done.

MF: If you go to the spec, spec also has keyboard shortcuts like TCQ. And you can press question mark to see those. We have a new one for enabling early exit annotations. If you look on the right, that's a screenshot of what it looks like enabled. There's these little return indicators next to every step that can exit the AO. So if that is a piece of information that you would find valuable, enable early exit annotations. And also, there's now a visual indicator for bodies of abstract closures. You can see in steps four and six here that all the substeps of that step have this little line to the left. And that gives you an intuition that these steps are not immediately evaluated. These are not evaluated during the single linear run-through of this algorithm. So that might make it a little bit easier for you to consume this spec as well.

MF: And I think this is the last one. We also now run minifiers as part of Ecmarkup's build process. So we have saved you a tiny bit of bandwidth every time you load the spec, which for you is probably not too many times. But for the editors, it's like every day.

MF: We have a similar list of upcoming work. You'll see the first item is that thing I talked about about making alias abbreviations consistent. The rest of it is some stuff that you've probably seen before. But if you really do care about what we're going to be working on next or maybe the next 10 or 15 things, you can look at the GitHub project that we use to coordinate the priorities for the editor group. We've had this project for a while. But we only used it really during times of lots of stuff, too much stuff to track going on. Now we're just using it more consistently for just what needs to be worked on next. So yeah, you can check that out.

MF: And that's it. Any questions about 262 editorial stuff? Or ecmarkup, I guess. Let me check the queue. I hope it's still working.

USA: Nothing's on the queue.

MF: Okay. Thank you.

USA: Thank you, MF. All right. I am up next, I believe. This advance. All right. I do not believe I have to even properly switch hats for this because of how quick this ought to be. But wait. Oh. I lost my tab. I'm sorry.

### Speaker's Summary of Key Points

* MF gave an update on the 1 normative change that landed as well as a few notable editorial changes and tooling improvements.

## Project Editors’ Reports: ECMA-402 Status Updates

Presenter: Ujjwal Sharma (USA)

* [slides](https://notes.igalia.com/p/IjjrR8PUKn#/)

USA: Hi, everyone, again. Here's the ECMA-402 status update. We have mostly been up to editorial business. So there was no new normative changes to the spec in since the last meeting. There were editorial changes, though. And meta changes that also relate to incorporating some of the changes upstream. In the tools and strengthening our CI. And we did the branch cut for ES2026. So that ought to come up on time in June.

USA: Just quickly mentioning the PRs that we merged in this time. We had three. All editorial. You can go into each of these if you'd like. And new PRs. That is similarly editorial. There is one open normative question. But it has not been brought to TG2. So it is not yet due for consensus. And that's it for ECMA-402. Thank you. Do we have something on the queue? I think there's nothing on the queue.

## Project Editors’ Reports: ECMA-404 Status Updates

Presenter: Chip Morningstar (CM)

CM: So yeah. So thinking about editorial process, the ECMA- 404 editorial process is a mixture of steely discipline and utter laziness. There's steely discipline to resist the urge or the pressure to change things. And utter laziness is not exerting the effort to change things. And both of these things have been successful.

USA: Thank you, Chip. I'm quick. Moving on from ECMA-404.

## Project Editors’ Reports: Test262 Status Updates

Presenter: Jordan Harband (JHD)

USA: Next, we have Test262. I do not, however, have somebody down for this. So I might need your help. If there's any test 262 maintainers on the call, I'm in that group.

JHD: I don't think we have anything concrete to discuss. Just that we continue to do our best to review things and merge things. If there's anything especially as it relates to upcoming plenary advancements, if there's anything that we need to prioritize, please do let us know. Obviously, no guarantees. But we will do our best.

USA: Great. Thank you, JHD. Moving on. Just two minutes.

## Task Group Reports: TG3: Security

Presenter: Chris de Almeida (CDA)

USA: Sorry. We have TG3. And CDA shall be presenting.

CDA: Yeah.

USA: Chris, what are the updates?

CDA: The usual. TG3 continues to meet weekly to discuss security impact of various proposals and various stages. And the occasional adjacent topic, such as cyber resiliency act. Please join us if you are interested in these things. Wednesdays at noon central US time. Thank you.

Thank you, Chris. We'll quick. There's nothing on the queue. Moving on to source maps then. Do we have somebody from TG4? I believe we have folks from TG4 there, right? But who would like to?

NRO.

Yeah.

## Task Group Reports: TG4: Source Maps

Presenter: Nicolò Ribaudo (NRO)

NRO: Yes. There have been updates to the spec in the past two months. Work on the range mappings and scope proposal continues. For those of you that were not there yesterday in the TG4 meeting, we if you check on the reflector, there is a reflector post for this meeting. There is a comment linking to the agenda of yesterday's meeting. And you can find linked there slides on how this virus proposals are doing. And you might want to take a look at it because they're meant to be an introduction for people not familiar with our work. And that's it.

Thank you, NRO. Next, we have MBHl presenting about TG5.

## Task Group Reports: TG5: Experiments in Programming Language Standardization

Presenter: Mikhail Barash (MBH)

* [slides](https://docs.google.com/presentation/d/1l25x0aO_V59YeZ9z0Cg0U2aDFL9A6VKg5gICGfZ6WKw/edit?usp=sharing)

MBH: Yes. Hello. We continue to have monthly meetings. And we have two main directions of work now. One is mechanization of proposals, and the other one is various kinds of tooling for supporting the work of the committee. At this plenary, we have two TG5 topics, which will be presented to the TG1. One on agreeing to consider the impact of Regex proposals to linear implementations and another one about a tool for navigating the specification document. We also have a TG5 workshop this Friday, which will be arranged at Technical University of Delft. We will have talks from folks from the university as well as TC39 delegates. And then a panel discussion. There will be transportation provided by JetBrains so if you want to join, I think there is still a chance to join.

MBH: And as part of our outreach, MF, YSV and I are arranging a workshop on programming language standardization and specification, at SPLASH 2026 in October. We have two great keynote speakers. One is Gilad Bracha and the other one is Bertrand Meyer. We would like to bring your attention to the fact that this is going to be about topics which are very relevant to TC39. For example, industrial implementation of programming language standards and leveraging programming language standards to ensure compatibility of multiple implementations. So, if you would like to present, we encourage you to submit a talk proposal. That's it for me. Thank you.

USA: Thank you, Mikhail. That was quite substantial and yet brief and quick. Thank you. Great. Next, agenda item.

## Updates from the CoC Committee

Presenter: Chris de Almeida (CDA)

USA: We have updates from the COC committee. Chris, take it away.

CDA: Yes. The update is that we have no updates. Which is good. We would like things to be quiet. So yeah, nothing new on the code of conduct front. Thank you.

USA: Great. Good to hear. Moving on. Blazing past this part of the agenda, we have Jordan's reminder to review GitHub delegate teams.

## Reminder to review Github Delegate teams

Presenter: Jordan Harband (JHD)

USA: JHD, would you like to add to that?

JHD: Sure. So yeah, in theory, every Ecma member has at least one person who is tasked with managing the bureaucratic nonsense. And one of those things is the GitHub team underneath the delegates team for your member company. Please check this periodically and make sure that everyone who you want to be on it is on it. And everyone who is on it is actually still an employee of your representative of your company/member. Thank you. Let me know if there's any changes that need to be made or you can file an “admin and business” issue.

## Needs-consensus PR: use Numbers instead of reals as counters in Iterator builtins (#3776)

Presenter: Michael Ficarra (MF)

* [PR](https://github.com/tc39/ecma262/pull/3776)
* [slides](https://docs.google.com/presentation/d/1WVjZyIAjTPl3TDV6X2cxNp1n-bzulIy_XWyKOsSq7i4)

USA: MF, I see you have your slides up already. You're ready whenever you are.

MF: All right. Yeah. So this needs-consensus PR came up when JSC tried to implement `Iterator.prototype.includes`. `Iterator.prototype.includes` has a second parameter, which is where you're starting from. And it needs to be able to count. Sometimes it needs to count high. So I pointed out that their use of a float 64 as that counter was not going to be sufficient once you reach very high numbers. They didn't want to use my suggestion of using a BigInt for that because it would be less performant than using a float 64. So KM—who's here, I don't want to put words in his mouth, but I'm just going to try to summarize—suggested that we instead just don't support numbers that are that large, that are larger than Number.MAX_SAF_INTEGER. But this isn't an issue that only affects `Iterator.prototype.includes`. This isn't something we can just fix with that proposal. The other iterator helpers that already exist also use counters that can get very large. So I have this needs-consensus PR to change all of them in a similar way. Which I would assume would also satisfy JSC.

MF: So just to run you through the implications of what this PR does. Assume that we have some generator called `nats` that yields bigints starting from 0n and going up by 1n with each yielded value. So you can see here forEach is one of the iterator helpers that keeps a counter. It uses this counter to pass as the second parameter to the callback. So this middle column is tracking that the mathematical value is counting by 1 internally inside the algorithm, but it's being converted to a float. And here on the right, you can see that the float that it's converted to is the nearest float to that value. So as you successively iterate through this iterator, you'll get counters that will sometimes be the same as the last time, but they will track as closely as float 64 has the capability to track the real. After this PR, it will just stop counting at 2^53. Which as far as I'm aware, matches implementations.

MF: It's hard to test this, but from the implementations I've seen, they all do this currently. So this would be the same for all of these iterator helpers that currently pass a counter to their callback, which is these seven iterator helpers. It would also change `Iterator.prototype.take` and `Iterator.prototype.drop`. So the way drop works today, as specified, you should be able to drop a very large number of values. I skipped those values in the iterator. Implementation reality is that once you hit 2^53, you'll actually infinite loop. You'll never actually get to 2^53 + 2. After this change, drop would just reject this input immediately and throw a range error.

MF: Similarly with `Iterator.prototype.take`, the example is a little bit more complicated to actually exercise it because we can't then do drops to get there. But the take counter can't reach 2^52 + 2^52 + 2, which is 2^53 + 2. So implementation reality on this one—is that true? Yes. Yes. Implementation reality is that you would actually—the take wouldn't limit the iterator there. It would allow you to keep yielding values beyond 2^53 + 2. And even though it's specified that the iterator would stop at 2^53 + 2, after this change, it would reject that input immediately with a range error.

MF: So yeah, quoting myself from iterator includes, I don't like this change. But if implementations in practice are all not actually implementing the spec, I don't—what are we even doing here, right? So I'm okay with it if that's what implementations demand and it seems like there's not only intentional desire for that, but also unintentionally implementations that seem to not have thought about it have also—I'm not talking about just web implementations, but like I looked at Boa's implementation and everybody used floats for this counter instead of arbitrary integers.

MF: Technically, we could do something weird. Switch the counter to a bigint or maybe only switch the counter to a bigint once it gets large or something. I don't think that's any better, but there are other options here if people are up for something like that. And that's it. We can go to the queue. First is KM.

KM: Okay. I think you kind of covered this bit, but just make sure explicit here. Are there any implementations that you use big int for these counters? Which I think in int 64 wouldn't work technically. Because there are double numbers that are bigger than the max in 64. So you'd have to use some sort of large int like an int 128 at least.

MF: Yeah. You'd have to use a very large int or an arbitrarily large int to keep track of it. And as far as I'm aware, none of the implementations that—I looked through all of the ones I was aware of. And none of them keep track of it that way.

USA: DLM is on next

DLM: Excuse numbers and we'd be opposed to switching to BigInt.

USA: Next is OFR. Oh, just says no.

OFR: Yeah, yeah. We're also not using them for that. And I don't think we would want to use them for that.

USA: Okay. Great. Then we have a new topic by Yusuke. Oh, sorry, YSZ. Before that, we have a reply by PST.

PST: Yeah. Just to add “no” from access point of view, obviously. Yes.

USA: Great. Now, YSZ. Would you like to introduce your topic?

YSZ: Right. I'd like to just comment that I think my understanding is Array forEach or existing functions are already using float for index, which is passed to the callback. So in terms of consistency, I think using float makes sense to me. But yeah, that's just my comment.

MF: So I would argue that it's not quite—it's not that clear that that's the case because arrays are limited in their size to maximum array length. So you don't actually need counters to go past 2^53. Wait, 2^32. Strings are 2^53. Maximum array length is 2^32. So you don't run into this issue. Whereas iterators are meant to be possibly infinite. You can count to very large numbers. It might take you a while to count to those large numbers, but it makes more semantic sense for that number to not be limited. Whereas the array would be naturally limited.

USA: KM is on the queue with a reply.

KM: I don't bother typing in the screen features. Great. The I think having it also error or otherwise fail is fixable in the future if we ever get machines that are powerful enough that we might want to actually it won't require running for many months before you see your iterable that makes it to past 2 to the 53. So I think leaving the door open for something like that probably makes more sense than having specification that differs from what engines do and then having to reconcile those later. So I think this PR makes sense and yeah.

USA: NRO?

NRO: I was typing in my item move then the text box to type finished. Only some things would throw here. Only the numbers that you give as input to this methods. But then the numbers that this methods give back to you, they don't throw in you observe that they skip some numbers. So I agree that throwing is fine. I don't think we'll ever need to have that large numbers. But if we ever will, we cannot. Change that because those are exposed in non-throwing places.

USA: All right. That was the queue. KM?

KM: I guess, yeah. I guess a question whether we want to throw here or whether we want to keep options open. It seems unlikely that if we get users here that there will be sufficient in number that we would break them. And certainly, in a way, I don't think any browser's web compatibility constraints go four plus months into the future. I think by that point, they'd already be several versions behind. So you'd find out compatibility problems really, really late. So I'm not sure that's a huge concern for compatibility, but I certainly could be a bug that I guess people hit. If it suddenly started working.

MF: If we have nobody else on the queue, we do have some comments on the PR that might be worth reading. KG is of the opinion that it's okay for implementations to diverge from the spec. There's also requirements that they have arbitrarily large call stacks and that kind of stuff. And they intentionally diverge from that. So it's not really so much of a problem to intentionally diverge from this. That's not my opinion, but I felt it was worth reading out. And that's it. I guess NRO has an opinion on there, but he's here to speak for himself.

USA: Yeah. You remove the new topic. So not sure.

MF: Well, I just wanted to—so I mean, this is an actual ask for consensus for this needs consensus PR. Do we have consensus on making this change?

USA: Yeah. DLM is on the queue? Support normative change? Dan, would you like to say more to that?

DLM: No. That's fine. Thank you.

USA: Okay. If anybody else would like to do the same, now's a good time. Or, of course, let us know if you object to this PR.

MF: I guess last thing I didn't mention was not only is this the normative change to the existing iterator helpers, but this will imply that I will make that same corresponding change to `Iterator.prototype.includes` where this was originally discovered. But it was probably understood. Okay. Assuming that this is consensus, then chairs, when you advance this, please, in the conclusion, write that we have consensus for accepting this needs-consensus PR.

USA: Okay. With nothing else on the queue? I believe we have consensus. It's a bit clunky to have to type that, but anyhow.

### Speaker's Summary of Key Points

* Counters in iterator helpers, including active proposals, required implementations to use an arbitrary int counter.
* No implementations actually did this.
* Proposal: change the counters to count as if they're float64s, take/drop throw RangeError early for large finite numbers.

### Conclusion

* Consensus to merge the PR.

## Needs-consensus PR: Support BigInt coercion of integers expressed as exponential-notation strings (#3857)

Presenter: Richard Gibson (RGN)

* [link](https://github.com/tc39/ecma262/pull/3857)

RGN: So I apologize for the lack of slides; we got to this a little faster than I was expecting. But the summary here is that Amount uncovered a friction point where attempting to specify a canonical form for numeric values resulted in the intuitive choice being incompatible with BigInts. The proposal wants to use exponential notation, where counting significant figures is trivial because there are no non-significant figures. Where you have a single digit to the left of the decimal point, followed by the decimal point, followed by all the remaining significant figures, and then an exponent. This works fine with the Number constructor called as a function, and it works fine with numeric literals in source text. It does not work fine with BigInt. So as shown here, you can have 4.2000e+4 representing 42,000. Take that as a string, pass it to the Number constructor, and you get the expected 42,000 number. Pass it to the BigInt constructor, and you get a syntax error. The reason for this is that the BigInt constructor supports a smaller grammar than the Number constructor. It's actually kind of specified in parallel. And it supports non-decimal inputs like hexadecimal, binary, and octal, and it supports decimal inputs, but only simple ones. So I’ve opened an issue and this needs-consensus PR to expand valid inputs for the BigInt constructor such that exponentials are supported when they represent integers.

RGN: Doing this gives us more cohesion between the Number and BigInt functions and between the rest of the language, and will support this use case that came up in Amount.

USA: Should we get to the queue?

RGN: I'm happy to advance to the queue now.

USA: Great. Have a nice queue. First, we have Nicolo.

NRO: Yeah. Clarifying question. You mentioned that with the support exponential notation in numeric literals, is that also for BigInt or just for number?

RGN: I'm sorry. Please repeat the question?

NRO: You mentioned that with the support exponential notation in literals, is that only for number or also for BigInt?

RGN: It's only for number literals. Grammatically, it wouldn't really be possible to do it for BigInt literals. It would be extremely awkward with the decimal point punctuator. And I'm not proposing that we change that. This is not a grammatical syntax change. This is simply the behavior of a built-in function.

USA: Next, on the queue, we have GCL.

GCL: Yeah. Hi. Just the example in the issue says that the input parses to the BigInt value 42. I'm wondering that that should be 42,000, right?

RGN?: Yeah. Absolutely.

USA: All right. Next, we have a new topic by Olivier.

OFR: Yeah. I just wanted to highlight that the way this is the spec text is written, this actually adds a new number parsing that we don't have yet. At least I don't think so. So basically, we first parse it as a mathematical value, and then turn it into a BigInt. So you can basically parse a float that is not a number, that is bigger. That would go to infinity if you would parse it as a float. And then it could still be an integer that fits into a BigInt. So I just wanted to highlight that. It adds a bit of implementation complexity. And yeah, I guess my question is this intentional? Do we want it to work like this? And can we live with it making parsing bigints potentially slower in general?

RGN: I believe this does, in fact, already exist for Intl number format.

OFR: Okay. That could be but not for bigints, right?

RGN: Yeah. Not yet for bigints. And I know that all implementations do, in fact, have bounds on how big a BigInt can be. You're welcome to exercise those upfront. It is not required to expand into runtime arbitrary-sized real number calculations. You can look at the length of the leading part and the exponent part in order to determine whether or not you're actually willing to produce a valid BigInt result.

OFR: Oh, yeah. Yeah, of course. But currently, it's just like a linear pass. And once you hit the first dot, you can bail out or something. So it's quite like it's a different it will be different to parse this way.

RGN: Correct. Yes. And I would definitely not recommend introducing any kind of floating point calculation for it. You've got decimals to bigints, which shouldn't take a bypass through floating point.

USA: Okay. Okay. EAO, I don't know if you still want to respond to that, but you're welcome to.

EAO: Sure. I thought I'd mention that technically in the spec, we already have this for parsing numbers. Because that one as specified, at least, you parse a mathematical value out of a decimal string representation, and then you pass this to round MV result, and you get back a number value.

USA: Oh, and you can now get to your new topic.

EAO: My other topic was specifically about the PR for this. This proposed change is that, as I was finally managed to look through it just before, I noticed that we should probably also end up updating the runtime semantics of string numeric value which does the same rules as MVO that I introduced here but just explicitly always casts those to number instead. So probably there's an optimization there where that can use the mathematical value expressions introduced here and then just cast a result to a number or round it to a number.

RGN: Yeah. That's true. One thing that was intentional with the pull request is to kind of be surgical about it. It represents what is close to the smallest change to the current spec that produces the desired behavior. I think that there is further cleanup possible. But I didn't want to muddy the waters by dealing with it right off the bat.

EAO: +1

USA: Next, we have JHD with a similar sentiment.

JHD: Yeah. Same sentiment. I think anything that's represents an integer is something that should be able to go into BigInt. And this just feels to me like an oversight from the original proposal. So I'd love to see it advance. And if it slows down, the passing of strings into the BigInt constructor, I'm not particularly worried about that because that doesn't feel like something that is going to be in too many hot paths.

USA: Olivier has a reply.

OFR: Yeah. One reply to that is that especially in amount, we're now using this notation to specify to basically encode the precision of a number. And so this so on the one hand, yes, I agree. Okay. If it's like 1.00, then it's still an integer. But on the other hand, we explicitly use that notation now to tell the amount that it's actually not 1, but it's instead 1 with a precision of which basically is a stand-in for a range of like for a precision range. So I'm not sure if that's actually a good argument.

JHD: I guess what I would say is anything that represents an integer with no attached precision. I feel like it's something that should go into BigInt.

USA: Next, we have MF, who says, "Prefer to be use case-driven, not mass import. Use stage process." End of message. RGN, that was the entirety of the queue. Oh, we have CLA on the queue.

CLA: Yeah. Can you hear me?

USA?: Great. So is this in response to Michael or is it a new topic?

CLA: It's a new topic.

RGN: On the previous topic then, going through the stage process for this is certainly possible. But I'm not trying to bundle it in to Amount. I'm saying that Amount surfaced this as an issue. Which I'm proposing to address on independent merits. So very specifically, if this goes through the proposal process, then the proposal is going to be “support BigInt coercion of integers expressed as exponential notation strings”. With that in mind, do we consider it worth pursuing as a proposal? And discouraging as a simple needs-consensus PR?

USA: EAO, is on the queue with a reply?

EAO: End of message.

USA: Yeah. EAO says ”needs consess should be fine /EOM”. OFR on the queue.

OFR: I forgot that now you see before I type. Slight preference for going to stages. Yeah.

USA: Okay. Ready to advance the topic then.

USA: Great. Next, we have CGM again.

CLA: So yeah. So just for recollection, so the design principle behind not supporting this notation in the beginning of bigint was because of exactly the precision one. So anything that looks like not an integer specifically. So since you have the precision embedded into the exponential notation, should be considered like a syntax or a runtime error. And so the principle was based on those. So we cannot give this confusion. You can parse from a decimal number to a BigInt. So that was the design principle before. I remember we discussed that at some point. It's been a while. So but that's just for consideration here. My position specifically, I'm okay with the this become either a proposal or a needs consensus PR.

RGN: Okay. I see that the queue is empty. And in light of the discussion, I think that the most conservative stance wins. Therefore, I will formally request stage one for this proposal. As a proposal rather than a needs-consensus PR. We're opening the queue for support and opposition.

JHD: Yeah. Sorry. I just threw myself on the queue. So we can certainly go through that. Unfortunately, MF, who's the one who had this opinion, has stepped out. So I feel like the stage process is incredibly overkill for this. And I feel like we can certainly gather consensus for stages now. But I feel like either way, without MF's involvement, we might need to wait. So I don't know if it's worth maybe doing a continuation to see if it even needs a stage process and make sure that MF's okay giving it the various consensuses. Because if we all agree it has stage one, the spec text is already written. So we could also agree it has stage two. And the spec text is short enough that we could also summarily agree that it has two seven because we can say, "I'm a reviewer and now I've reviewed it." So that's perhaps optimistic. But that discussion wouldn't be able to complete either without MF's presence.

USA: For the record, there was already support for stage one. By OFR on the queue. Now we have plus one for JHD's plan on the queue as well from EAO.

EAO: Also, thought I'd note that in the comment that Michael left, he supported the staging process. So I think that's an implicit “not denial of support” for stage one at least.

USA: Fair point. And that was it unless JHD are you writing? Yeah.

JHD: Since MF's just stepped back in, so the question was asked about plus consensus for plus one. And modulo, your opinion that seems to have occurred. But the thing I had expressed is that until you're in the room, it might be worth waiting because it feels like the stage process is really overkill for this. And it would get stage 2.7 potentially in a few minutes if because it's small enough spec text.

MF: Yeah. Thank you for waiting. I'm sorry. I had to step out. It's not a very strong preference. But I do think that this kind of thing does merit the stage process just because it seems like we're just saying like, "Oh, all ways of expressing numbers are useful to everyone." And I feel like we—that can probably be evaluated more on a case-by-case basis of like, "Well, people want to write numbers like this. And people want to write numbers like this." And we could just say like, "Oh, it's intuitively obvious to all of us here that all of these ways of expressing numbers are totally valid and justified." To me personally, I don't see that. But if everyone else does feel like that, I'm not super—I don't feel strongly that we need to use the stage process.

RGN: Okay. That's a little bit weaker than I inferred from reading your message. My preference is that this is, in fact, a simple needs-consensus PR. I agree with JHD that going through staging is a little bit too heavyweight. But I'm happy to do so, if there's resistance to treating it as needs-consensus.

CDA: Yeah. There were some plus ones earlier. And so partially, it's because I'm up in the middle of the night. So brain is not working that great. But also, I think it's probably not totally clear from the notes. So whatever we're doing for call for consensus, we should redo it. And be very clear about what we're doing there.

? Should we go to Olivier?

? Yeah. Let's go to Olivier right now.

OFR: Okay. Just clarification since people are proposing to race through the stages. So when I said slight preference for staging it, I meant that there is an open question about whether this scientific notation is specifically there to preserve to basically communicate precision and whether we're drawing that away by just allowing it as a big int input. So that would mean that would be the open question to address. And so that would mean we cannot race through the stages. But rather, we would have to put it as a topic and give people time to actually prepare positions on that question. Because otherwise, indeed, it doesn't make sense to stage it. So as I said, I have a slight preference for it. If I'm the only person with that preference, I'm fine with not doing it. But I think we should these are the two options. Either we go with this needs consensus PR or we stage it. \[If we stage it]We go I don't know to one maximally two and then put it on the agenda properly. It was already added late to the agenda. And so it's or I feel like we're already pushing the process here. So let's maybe back down a notch.

JHD: I have a reply on there. So that's fine if we want to slow down, right? No big deal. But I think the answer is that if you are intending to encapsulate precision in your number, you already can't do that properly without amount. And that's a discussion for the amount proposal. And I and many others I've interacted with use exponential notation as a way to not have to write so many zeros and not have to count zeros when I'm reviewing code. So I think empirically, it is not universally representation of precision. It certainly is sometimes, I'm sure. But so I just think that that's the answer to that is no. It is not guaranteed to contain precision. And so we don't have to worry about discarding it. That's what amount would be for. But it's again, it's totally fine if people want to slow down on things.

EAO: Yeah. What Olivier said there, I think, is entirely valid. And if we do want to explicitly discuss the precision of how no, sorry. Discuss how an integer should be represented as a string and whether the converse of passing a string to an integer should be careful about any potential loss for precision and not, for example, consider 1.0 as an integer value for big int. That is a thing that would be indeed be valid for us to consider. For example, in the stage two discussions of whatever this might turn into, if we do end up having this go through the staging process. So stage one plus one for me definitely for whatever this is. Or plus one for merging it as a needs consensus PR.

OFR: I just wanted to ask should we let people sign into view the docs? Do we have to do that? I don't know who owns the doc, so.

USA: I guess that was the process clarifying question. I'm not sure if we can decide that now. So to move on, Michael, says “+1 OFR, especially because it was late, let's at least give it the time between now and the next meeting to consider it (EOM)”

USA: And then next, we have DLM who says “+1 agree we should give this more time, since it was a late addition to the agenda (eom)”. So it seems like they're both the same and sort of on process ground. So what do you say, RGN?

RGN: Right. That absolutely makes sense. It was definitely late. And I intended to highlight it in the conversation anyway. So thinking about process, my preference, as I've stated, is that this is a needs-consensus PR. I'm interested in collecting any objections to that, not just a preference for staging, but an actual objection to needs-consensus. And if there are not any objections, then I will reserve a spot for this as it exists in the next meeting, which is enough time for everyone to review and to come to their positions on. So this is an explicit request to raise objections for treating the change as a needs-consensus PR.

USA: Let's give it a minute on the queue. We heard support earlier, so.

RGN: Okay. Then I will plan to do that. We will discuss it at the next meeting. Please look over it between now and then.

### Speaker's Summary of Key Points

* A plurality of delegates support treating this as a needs-consensus PR rather than a staged proposal.
* There is an open question about whether exponential notation communicates precision that would be inappropriately discarded.
* But a conclusion was not reached in this meeting, due in part to it being a late agenda addition.

### Conclusion

This will be discussed in the next meeting as a needs-consensus PR.

## Needs-consensus PR: Require internal consistency w.r.t. prefixing {get,set} in SetFunctionName (#3855)

Presenter: Richard Gibson (RGN)

* [link](https://github.com/tc39/ecma262/pull/3855)

RGN: Okay. So this one also was a late addition and can go through the same kind of considerations that we just encountered. But to summarize, there's an internal spec operation called SetFunctionName which is used to populate both the name property and an internal slot for built-in function objects. And for those built-in function objects which are accessor functions, getters or setters, it currently includes what amounts to a free choice across all functions regarding whether or not to prepend the literal text “get” or “set” to the value of that internal slot which is exposed in the output of `Function.prototype.toString`. It's, as I note here, a strange degree of freedom to allow implementations to make different choices across functions. And in fact, when I surveyed the behavior of implementations, I found that the overwhelming majority do not leverage that freedom. Instead, we see that SpiderMonkey uniformly omits the prefix, for example `Iterator.prototype.constructor` has a getter for which toString() reveals that the value in the internal slot is just “constructor”. Likewise for `ArrayBuffer.prototype` byteLength, detached, maxByteLength, etc. They don't have the “get” prefix inside of the value of that slot.

RGN: That's also true of Engine262. Other implementations such as GraalJS and LibJS and Moddable XS and V8 do have the prefix in that internal slot. So looking at ArrayBuffer again, byteLength, detached and maxByteLength do have the literal `get` showing up. But what's important here is that it's consistent. V8 and many others for all of the built-ins are providing the prefix. SpiderMonkey and engine262 for all of the built-ins are not providing the prefix. The odd one out is JavaScriptCore, which is, I'll just say, unpredictable. So looking, for instance, at DataView, we have two adjacent very similar properties, byteLength and byteOffset, both of them are defined as getters. One of them has the prefix. The other one does not.

RGN: So as I noted, I don't think this is a useful degree of freedom and in response to this issue, I have a pull request to revoke it. Here, the current spec is on the left and the proposed spec is on the right. We see here in the current spec, there's a choice made independently for each use of SetFunctionName whether or not to update this function initial name slot, which is initially set to match the name property. The proposal is to instead make that a normative optional step. So any implementation can choose whether or not to include the prefix, but that choice is implementation-defined and universal across all built-in functions. If we were to adopt this, then it would mean that the current behavior seen in JavaScriptCore and as far as I can tell, only in JavaScriptCore would be non-conformant. And the last time this was discussed, that was raised as an issue. I'm of the opinion that the spec should communicate what we want to see of implementations, including of new implementations now that we're in a world where the set is less stable than previously. And I think that it would be an improvement even if JavaScriptCore behavior does not change that they would just be non-conformant in this way as is the case for a few other aspects of the specification as revealed by Test262. As far as I know, no implementation is fully conformant with the spec. But we don't generally consider that a reason for the spec itself to have a worse state.

RGN: So. As noted, this was a late addition. But I am still asking for consensus as a PR in this meeting. And we'll see where the discussion goes. I think I'm ready for the queue now.

USA: Great. First on the queue, we have JHD.

JHD: Yeah, I like this. I have plus one to it. I think that pretty much any time in the spec that we allow broad implementer latitude, it either we get lucky or it ends up varying in ways we didn't anticipate. And so I think we should be it's totally fine if any individual engine needs a carve-out, then that's also totally fine. But we should make that carve-out as strict and tiny and granular as possible. So improving the granularity here is a good thing.

USA: Next, we have YSZ on the Q.

YSZ: So I needed to raise one concern in terms of web compatibility. The reason is the JavaScriptCore is super weird behavior. It's basically exposing the internal implementation whether getter, setter is implemented in a normal function or custom getter mechanism in JSC. And the particular reason why this is happening is some of the major websites are relying on whether get and set prefix is attached or not to detect Safari unfortunately. We get a severe breakage when we attempted to make it a spec compliant. So then if we make this thing we need some kind of survey or research around the web compatibility. Thank you.

RGN: Okay. Is that the entirety of the information that you have or do you know how narrow we could make it be? If the websites are just checking that some particular getter function has the prefix, then it seems like you could universally present the prefix. Or that you could very narrowly identify some specific built-in, which needs it while all the others consistently omit it.

YSZ: Okay. Yeah, great. So I needed to research our bug tracking system to identify which major websites are actually relying on this thing as I remember correctly. But my memory right now, it is happening two or three years ago, was basically they are looking into location objects that getter and setter `location.search` or `location.href` or something to see whether this getter is having a get prefix or not. And basically changing the behavior based on that thing. And I can probably see a bit more narrow set of the getter or setter something which needs to preserve this behavior in terms of web compatibility. Or I hope that these websites are already fixed, I hope. But yeah, definitely, I can dig into this website no, bug tracking system to offer some additional information to help you. Yeah.

RGN: That would be excellent. It also strikes me as very likely that the browser detection that this was in support of might not even be relevant anymore. That the behavior now in 2026 and onwards might in fact not need to be different for Safari versus other implementations. I would very much appreciate that research. And if you post it on either this issue or the pull request, it would be extremely helpful.

USA: Next, we have KM on the queue.

KM: To be clear, on the same thing, there's definitely where there's smoke, there's a fire with a lot of these. And if there's one website doing it, there may be many websites doing it. So even if we may have found a process of trying to unify it that one website had an issue, but there may be many, many more hiding behind there. And I'm not sure how much appetite there will be internally for risking web compatibility breakage. For the sake of this I'm not fighting over that we should probably be consistent. I think that would be better. But I don't know that there'll be a lot of appetite for the risk for that gain. But I can't say for sure one way or the other. I'm just flagging that as a possibility.

USA: Next, we have a new topic by OFR.

OFR: Yeah. Nothing deep, but if we're already adding this as an additional note, then why not give a preference to what we actually want?

RGN: I considered that. And I don't think we're in a position to have a preference right now. I'm much more comfortable with allowing one degree of freedom where an implementation can choose upfront for all of their built-ins, whether to have it or not. It doesn't seem particularly useful to go further than that right now, given that we actually do have an ecosystem with a divide in it. I wouldn't be opposed to having a preference, but that's not worth the focus here. And I don't think it's a particularly bad state to end up if there is a little bit of difference in this way.

USA: Next, we have KM.

KM: For things that are optional, do we have preferences? I worry that that may be used interpreted in unfavorable lights for specific implementations that may or may not be able to actually change to meet whatever the desired preferred behavior is. Are there other places in the spec that we do that?

JHD: The optional is not meant to convey a preference. Legacy is. So anything that's marked legacy is either something that just you have to do because you're a web browser, or that we don't want you to do. But still is specified.

KM: Do we have legacy features that are specific to particular implementations that are optional and legacy?

JHD: The legacy and normative optional are new enough differentiations that I don't think we have that marked as such. But I think that was part of the initial thought when we created the legacy marker was we wanted a way to say, "This is bad and you should feel bad. But if you have to do it, this is how you do it."

KM: Yeah. I just worry that it creates a precedent for particular implementations that they're going to get shamed for something they can't actually even fix because of web compatibility not necessarily by the obviously, I'm not expecting it from this committee, but there are many ways to interpret data and someone might read this and say a particular implementation does something that's like. And "legacy" and they should feel bad because they're holding back the web or some other type of thing.

RGN: Well, I mean, I would say you're all allowed to feel bad if you choose to. The specification is definitely not taking that kind of judgmental stance.

USA: Next, we have OFR yeah, sorry.

OFR: Yeah. In the case of error stack accessors, we even specified the current Chrome behavior as legacy. And everybody was fine with that implying that we won't change it, but we just don't want new implementations to do it this way. So yeah.

RGN: I'm glad you brought that up. That's exactly the perspective I'm taking on this. That if, in fact, we identify some aspect that prevents Safari from being able to change, then it fits into the same category from my perspective. And anticipating DLM’s topic, I would still want the spec to look this way or similar, such that new implementations are strongly discouraged from engaging in behavior that, quite honestly, they would have no reason to pursue anyway. Right now, the current spec, I think, doesn't do a good job of communicating that.

USA: NRO?

NRO: I just also applied to KM. We do have already some normative optional legacy features like the proto getters and setter and the even worse legacy getter, legacy setter functions. Their legacy enough that even web interpol runtimes are trying to stop using them, even though everybody accepted the browsers or at least some browsers, not sure, are never going to be able to not have those. And the legacy marker there is more addressed to developers, saying, "Do not use this thing. It's bad." Then the implementations.

USA: Okay. Next, we have a new topic by DLM.

DLM: I think the point I wanted to make has been partially addressed, but I just wanted to say I'm not very comfortable with the idea of specifying something if we know JavaScriptCore are unable to be in compliance with it. So I think it sounds like we have options around legacy. That would be fine. And obviously, I'll leave it up to that team to say what they're comfortable with or what they're not. But I didn't really like the idea of saying, "Okay. We'll specify something and JSC just won't be in compliance with it."

USA: JHD, what's the first?

JHD: Yeah. I think it doesn't I don't think it matters if someone changes because new engines continue to appear. And it's still good to indicate that new engines shouldn't do this behavior. Even if there is an engine that will always do it. I think it's the same for the Annex B. The purpose of Annex B/legacy is to say, "If you don't have a reason to implement this, like you're a web browser, do not do it, please." And that's still valuable even if all the existing implementations still have it.

USA: Next, we have NRO.

NRO: Yeah. If just he's not probably not going to be able to align all of their function names anyway, can we but we still want to mark it as optional or legacy in some way. Can we do it without also making the change that RGN is suggesting of making it more uniformly strict?

RGN: I think quite likely, yes. For the record, I do think that change is possible, even for JavaScriptCore. I know that this ran into some hiccups previously. I feel like it is probable those were not as big an obstacle as superficial assessment might have made them seem. But that notwithstanding, I think even the smaller change to introduce legacy and discourage use of the function variable version would still be an improvement. We have about 10 minutes left in this slot. And the conversation has taken a turn where I think it's unlikely to land this as it is. I would like to request a continuation, though, because I have enough time to present the smaller one. And we'll intend to bring this full one back after JavaScriptCore have had time to do a little bit of research.

USA: Right. For the record, were you asking for a continuation later in this meeting?

RGN: I am, yes. I'll have spec text ready for it.

USA: Okay. Yeah. We can work on accommodating that in the meantime. Let's see. Is there any further discussion to be had on this? In this session, I mean.

RGN: Seems like things are mostly wrapped up for here.

USA: Okay.

RGN: Yeah. So as a conclusion, I will put up a less aggressive replacement, hopefully for discussion in this meeting. And we'll look forward to feedback from JavaScriptCore on this PR so that it also can be discussed at the next meeting.

USA: Great. Thank you. And with that, I think you have given folks their in-person three minutes. Back for having their precious lunch. I suppose JRL would you like to kick off the lunch, or?

JRL: What am I doing? Are we just ending? Yes, queue is done. Actually, I think Artem or Dimitri. Do you want to tell us? It's just on the sixth floor, right? Do we have no one from JetBrains here? Okay. Well, it's lunchtime. Lunch is on the sixth floor, if I remember correct, or it's the seventh floor. We'll figure this out. The doors are unlocked, so you don't need anyone. It'll be yeah. We can just start walking there. I will show you the way. Be back in one hour. One hour and two minutes. So at 1:00 PM local time. All right. Bye, everyone.

Bye. See you, folks, on at the end of lunch.

### Speaker's Summary of Key Points

* There is a web compatibility concern: when JavaScriptCore previously attempted to universally add prefixes, some major websites broke and the change was reverted in https://github.com/WebKit/WebKit/commit/e4a6a6964d558f0b1e57d779a325b46a9c3bc2d1 .
* But that would not necessarily prevent them from universally omitting prefixes, as SpiderMonky does.
* JavaScriptCore will do further research.

### Conclusion

* The PR did not reach consensus, but will be discussed again next meeting.
* Continuation was requested to discuss a scaled-back replacement in this meeting.

## discussion/feedback around Iterator-related proposal roadmap

Presenter: Michael Ficarra (MF)

* [visual aid](https://gist.github.com/michaelficarra/34c47e1161b9ba2526ee197e1f5cb624)

MF: Okay, I was asked at the last meeting—I don't have slides for this or anything. I'm just showing the gist that is linked from the agenda. I was asked at the last meeting by PFC, who I'm not even sure is actually here, to give a quick roadmap. Yeah, I don't think he's here. A quick roadmap of the what's going on in the iterator space. So I'll just hopefully give a 10-minute rundown of things that are in progress, and potentially upcoming to give people an idea of what's happening. So as you're all probably aware, we have the iterator helpers proposal that reached stage four a long time ago at this point, and that included a lot of things that matched what is available on array prototype. And then also drop and take to be kind of the slice equivalent. And we also have `iterator.concat`, which reached stage four, which sequences zero or more iterators and yields all the things that those sub-iterators yield. A couple of these we have going for advancement, but I'll just talk about them as if they are at their current stage.

MF: So `Iterator.zip` and `Iterator.zipKeyed` are sitting at stage three. They may be stage four at this meeting. Those are for taking two or more iterators and aligning each of the things that they yield and yielding that set of things. Chunking is for consuming multiple values at a time from an iterator. So we have chunks, which consumes the values with no overlaps and windows that consumes values with overlaps. Includes is very much like `Array.prototype.includes`, just testing whether an iterator does yield a particular given value. Iterator.prototype.join—I'm not the champion of this one, KG is, but this one is just very much like `Array.prototype.join`. It just toStrings the things that are yielded by the iterator and joins on the given joiner for making a string representation of the things that an iterator yielded. Same reasons why you would want to use `Array.prototype.join`. Next one is also KG's proposal, stage two async iterator helpers. This is all of the same MVP methods that we had in the iterator helpers MVP. Plus a method on `Iterator.prototype` to make that iterator an async iterator. But these are all async versions of those. And in particular, the thing that has been taking so long with that is that we want all of those methods to support pulling multiple values concurrently. And they do. It's just KG is in the middle of doing the spec text for that. And that's quite a bit of work.

MF: As to the next proposal—the next two proposals, I guess, concurrency control and unordered async iterator helpers are both dependent on that work. So that's why they have not advanced in a little while. They're sitting at stage one. Among other things, waiting for async iterator helpers to advance to 2.7. Concurrency control is about giving a way to limit how much you can concurrently pull from those async iterators. So we said before that the built-in async iterator helpers will support pulling many values concurrently and concurrency control will give away to—even if a consumer wants to pull more than that, have somebody have control of how many concurrent operations actually happen. So that will give you integration into all of those `AsyncIterator.prototype` methods. And we are also waiting on having some kind of integration with cancellation like AbortController on the web. There's pull requests that I can link you to if you're interested. It's also all available in the issue tracker, I believe.

MF: Unordered async iterator helpers are very similar to async iterator helpers. You can take an async iterator and make it unordered with the unordered method. And then you have all of the same async iterator helper methods available on unordered async iterator helpers, except they have better performance because they don't have any guarantees about the order in which they yield the things that they yield. Which I think is going to be a significant use case for async iterator helpers. Most times, people actually don't care about the order things are yielded, and they just care that all of the things are done.

MF: We do have a stage one proposal for `Iterator.prototype.unique`. This one, I would probably consider stalled at the moment. We got feedback from GCL early on here that there is kind of a hidden cost to developers. That you need to keep track of all the things that the iterator has yielded in order to determine that it's yielding only unique values. And that might be surprising. Unless you think about it for two seconds, in my opinion. But that might be surprising because it's not in your face.

MF: Upcoming things, the highest priority for me is I want some interface or protocol for collection types to implement that can consume an iterator so that you can just pass `Iterator.prototype.to` or .collect or whatever you want to call it. You can pass it this constructor, and it will know how to build one of those things. And then, of course, built-in versions of those. So you can just say like `.to(Set)`, `.to(Map)`, that kind of stuff. There's also been demand on the iterator helpers issue tracker for a reduce that is short circuiting. So instead of just returning the new memo, you return an IteratorResult object, which are the objects that have a value and a done. And then you can short circuit the reduce operation. So then you have kind of a more for-loop-like way of specifying your reductions, instead of always having to exhaust the iterator for a reduce.

MF: Many requests for `Iterator.prototype.takeWhile` and `Iterator.prototype.dropWhile`, which are just take and drop, but evaluating a predicate to determine how many instead of giving a number upfront.

MF: KG's really supportive of a proposal for a way to register a callback that gets called whenever the iterator completes. So when it's exhausted or when it's explicitly closed with the .return. A possible name for that is like withCleanup or something, but it's so that you can do cleanup when you're done with that iterator.

MF: It's also been requested multiple times on the issue tracker for a scan operation. Scan is just like reduce, except where reduce just returns the final memo at the end, scan produces an iterator of all of the intermediate memos. So that has use cases.

MF: Another one that KG will probably champion is `Iterator.prototype.into`, which is just kind of a way to inline in a chain of method calls a transform on that iterator.

MF: And then I think it was JHD who was mainly supportive of an `Iterator.prototype.tap` kind of method, but this was also one that came up a number of times on the issue tracker. So having some sort of `Iterator.prototype.tap`, which is like a map that always returns the the input. So it's like a forEach that preserves the value. It's Iterator.prototype.tap.

MF: So yeah, that's the things that at least I'm aware of that are either going on or likely to go on in the near future. I don't have any other plans than this. If we make it through all of these, that'd be great. I think we would have a really good standard library for iterators at that point. And yeah, hopefully that satisfies PFC's curiosity.

DLM: Let's go to the queue. First up is NRO.

NRO: Yeah, it sounds like PFC is not here, but there's a question that he had. Whether there is anything that you considered, maybe because you saw in other iterator libraries or you maybe wished we had, but for any reason you decided to not include it in a roadmap because maybe you don't think it's a good idea for JavaScript.

MF: I mean, if you go back to the days of trying to figure out what we were going to do in the iterator helpers MVP, where we were kind of much more open to what would be included, there was a lot, a lot of methods being considered. Turns out people have written libraries with a huge number of iterator helpers. There's a very long tail, I would say. It falls off in value significantly. And I guess you could say I've considered other things from those libraries, but these are the only things that have made the cut for me to say it's worth spending my time to try to make sure these are in the built-in standard library.

NRO: OK, thank you.

DLM: Next, we have JHD.

JHD: Yeah, I mean, the only real reaction I have there is with `Iterator.prototype.into`, it kind of just seems like a call this or a pipeline that only works for iterators, which seems strange to me. Like `Iterator.prototype.tap`, for example, is not about chaining methods. It's a form of map where you can't accidentally change the result, right? But yeah, this is basically just like if we think this is a valuable feature, then that, I think, should be motivation added to one of those two proposals.

MF: Possibly. Let's discuss that if this comes up as a proposal. Yeah.

DLM: And NRO on the queue with +1 to whatever JHD is going to say. Add a message. And that is the queue at the moment. Is there anyone else who wanted to comment?

DLM: Anything else, or should we move on to the next topic? All right, great. And next up, we have Michael again with joint iteration for stage four.

### Speaker's Summary of Key Points

* Lots of concurrent work going on in the iterator built-ins space

### Conclusion

* None

## Joint Iteration for Stage 4

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-joint-iteration)
* [slides](https://docs.google.com/presentation/d/1KW2u1CeciwdoZjOnL5jb1pJxJUcgNjPeXsj5oVoaMxo)

MF: All right, so I accidentally spoiled it earlier. But yes, I am looking for stage four for joint iteration. I do have the pull request open. I believe NRO's review is finished, right? You approved? OK, yeah. So it has an editor's approval. I believe it did not change at all between stage 2.7 and this ask for stage four. So the PR to 262 is open meeting that requirement. We do have implementations. SpiderMonkey has had an implementation for quite a while now. Since July of '25. It shipped not too long ago, though, in February. And V8 also recently finished their implementation. They had only partially implemented it in March, and then finished it in April. JSC has a pull request that has been open since November, but has not gone through review. So I've not considered JSC as having an implementation. There's also three other non-browser implementations. There is also a pull request to Boa that they have not merged. So I would say that's pretty significant implementation experience if we were most concerned with implementation experience. And we have at least one browser shipping to get an idea of web compat for this, which I don't think anybody thought was much of a risk. And that is my presentation for stage four. So I would like stage four for joint iteration.

DLM: First up, we have OFR with not yet shipped in V8 and a message. And then there's a +1 for stage four from LCA. And a +1 from EAO. Did you want to speak? OK. +1 from CHU and RBN, So it looks like we have lots of support for stage four. Are there any concerns or objections? OK, with that, I guess you have stage four. Congratulations.

MF: Thank you.

EAO: Just thought I'd check, is given that V8 is not shipping this actually as I understood from what OFR said, does this mean that this is the first time we've advanced something to stage four with only one browser implementation?

MF: We have two browser implementations. We have one shipping so we get the webcompat experience from the one shipping, and we get the implementation experience from the two implementations. Two, and then three more that are non-browser.

JHD: We've also had extensive discussions in the history of TC39 about the specific wording of the stage four requirement. Which is not two browsers. It's it says, like it's been so long since I've recited it from memory that I don't remember it anymore. But it's something along the lines of like two implementations such as two browsers, right? And so generally, we kind of make a judgment call as like if it has web compatibility risk, then it's probably better if we have two stable browsers things like that. But given that this has so many different implementations in its very polyfillable it seems like there's a lot of precedent that it doesn't need two browsers for this.

EAO: Just to clarify this, I was just pointing out that a thing not questioning whether this was an OK thing to do.

JHD: Cool.

DLM: AKI, did you want to speak now or shall we go through the rest of the queue?

AKI: Two things real quickly. That is, first of all, do not forget to add your summaries and conclusions to the notes. It's easiest if you do them today. It gets harder and harder. The longer you wait, and then I get more and more annoying the longer you wait. So the sooner the better. The other thing is. Here in person, and you have not filled out the attendance form, please make sure that you do that immediately. So message me on Matrix or come over here or find Demetrix. I think he has the sheet. Please fill out the attendance form immediately if you haven't done so already. Thank you.

### Speaker's Summary of Key Points

* SpiderMonkey shipped and V8 implemented the feature
* Committee expressed strong support with no objections

### Conclusion

* Joint iteration advanced to Stage 4

## Dynamic Code Brand Checks for stage 4, or normative change (PR #23)

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/tc39/proposal-dynamic-code-brand-checks)
* [slides](https://docs.google.com/presentation/d/1v8vJ3JpjRwof_P1MSp9264zQJUsO4NfBwzZQFTyczII/edit?slide=id.p#slide=id.p)

NRO: OK, so Dynamic Code Brand Checks for stage four or normative change to it. If you don't remember what Dynamic Code Brand Checks is, it's because it's been probably presented almost every single time with a different name. You might know it as allow code like object evaluation, which was the title of the original normative request. There was a second normative request that then got turned into a proposal called provide host ensure can compile strings implementers more context. When I presented it last time in April 2024, I called it eval a new function changes for trusted types. So this proposal is the changes we need to do to ECMA-262 for the web feature of trusted types.

NRO: A summary of what trusted types is. Given it's been, again, two years since when last presented this, it's a W3C spec that allows you to somehow mark some strings of code as trusted so that you can only allow in dangerous places those trusted strings rather than arbitrary strings. And this is to limit access as attacks. Examples of usage of this in the web are like inner HTML or setting the source of a script. And this marked strings are publicly special objects that wrap a string. And they're created like this with this web trusted types policy objects. I'm going to go skip through this. It's not super useful. And it integrates with CSP as in you probably get reports if you try to validate something that's not a trusted type object.

NRO: So what does actually what does this actually mean for us? Trusted types also instruments eval a new function. Because sorry, I copied this slide. I should have updated it better. Because ECMA-262 currently doesn't provide hooks for it. So that's why this proposal exists. So that we can expose to the host not only the string that we're going to evaluate, but also the object that it came from. So HTML and CSP need to know whether the string was coming from an object or not. And then secondly, a way for eval to allow evaluation of an object. Because right now eval would just have like an early return path if the argument is not a string.

NRO: You can find here the normative request for that magistrate proposal in ECMA-262 and the corresponding changes in web specs. So the eval part was easy. The old text at the top, the new text at the bottom. The difference is that if the source previously if the source to evaluate was not a string, we just return it. Now we check if it's an object. If it's an object, we call into this host hook that gives us the trusted code string corresponding to the object. And if the host gives us a string, then we actually evaluate it. This host hook can return either a string or a special like no-code marker to mean this object is not a trusted type object. The reason we use a host hook here and not an internal slot is to because we want to avoid reading internal slots on random objects. In ECMA-262.

NRO: The changes to CreateDynamicFunction, which is the one used by the new function constructor, are to pass to the host ensure can compile hook sorry, host ensure can compile strings hook not only the stringified version of the code that will create the function, like parameter string and body string, where also passing parameter arg and body arg, which is the original object. So that HTML and CSP can check, oh, does this string actually come from that object?

NRO: Implementation status it's now available and shipped in all browsers since earlier this year. In some browsers, it's been shipping ready for a couple of years now. There is actually a problem. And I apologize for this. I should have caught this earlier. I unfortunately only noticed this a couple of weeks ago when I put this on the agenda for stage four, which is what we had agreed here two years ago is not what actually ended up being put in the proposal.

NRO: The status before the April 2024 presentation was that for eval, we would check if the argument to eval was an object, if it was, we would ask the host, hey, it's an object. We need to stringify. And if so, we would call to string on this object. And then we would pass both the string and the original object to the host so that CSP could check that the string was actually the one marked as trusted to the object so that if somebody were to override two string method on this object, it wouldn't fail because CSP would be able to check that the string is not what actually was meant to be returned by that trusted type object.

NRO: That matched what new Function did. New function like since forever already called to string on its arguments to then concatenate them. And so the given that there was already some precedence on how to convert objects to strings, eval just did the same.

NRO: Now in April 2024, we actually agreed to not do that. It is useless to call to string on this thing to just then check that the string returns the some specific string we're expecting. And so we decided that for this specific objects, we'll just grab the trusted string from inside the object instead of going through the method.

NRO: The proposal changed eval to do that. So reverting it to string addition and tweaking the host hook to not return a boolean instead just like return the trusted string however, it kept the two string call in the new Function constructor. Because it was already there. Before. And all browser implementations are aligned with the proposal, which means all browser's implementations do not call to string for eval on this trusted objects while they do call to string in new function.

NRO: The spec text that's missing from new Function is that you can see here the div on the left. Instead of just calling toString, we should if it is an object, so steps 8.c and step 11, if it is an object, we should call the host hook. And then only call toString either if it's not a trusted object because that's the existing behavior of new Function. It just stringifies the object. It's passed in. Or if it's not an object at all.

NRO: And this mirrors what we already do for PerformEval, which you can see on the right of the slide. It's slightly different because PerformEval has the early return for objects in general. So this is what technically matches the consensus we had two years ago but it is not what ended up being in the proposal and what ended up being implemented.

NRO: So we have two options forward here. One is that we keep the proposal. Basically, we change our consensus to map what the current proposal spec text says and what implementations do. Or the other option we have is to change the proposal and implementations to actually match the old consensus we had.

NRO: My personal preference here is to do the second, so to change the proposal to match the consensus we had just because it is cleaner and more consistent. And the reason really any reason to call to string on these objects but I understand that this is requiring some extra work for everybody here I already have the pull request for the spec but a similar change will need to be done in implementations. And yeah, opinions on what we should do here.

DLM: I'm on the queue. So I support the normative change. I asked our expert and they were surprised that we didn't actually already do this. So we don't have any concerns changing our implementation. And I was the only one on the queue. I'm not sure if anyone else wants to express an opinion.

NRO: Maybe if the other browsers I informally talk with Google so I know their opinion maybe Apple has any stance here.

DLM: Keith?

KM: Yeah, I don't have a particularly strong opinion here. I think either one is fine. I don't think there's any real risk of changing it. So it seems fine to me either way.

NRO: OK. So I'm just going to ask again then if we have consensus to do what is on the right of the slides here that is change the proposal to match actually the consensus we already had. It seems like if all implementations are on board with that, and nobody's blocking, we have consensus for this. I will probably then come back for stage four next time.

JRL: Sorry, can you go back to your code slide?

JRL: Yes. So on the left-hand side here, we have 8B, set parameter string to no code. And then we do something. And then we check if parameter string is no code. How is that how is it not always no code?

NRO: Because when we go in step C, if arg is a trusted type object, host get code for eval, we have return a string. Setting parameter string to that string.

JRL: Oh, sorry. I did not see the set there. Never mind. So it can return no code itself?

NRO: Yes. It returns either a string or no code.

JRL: Got it.

DLM: OK. Well, we've heard or at least my support for the normative change. And no objections? Does anyone else want to voice support for the normative change? OK. Well, normally we would want two people to support it. But I think in this case, we're fine. So yeah, I guess that's it for this topic. If you want to remember to update the notes with your key points in conclusion, we can move on.

### Speaker's Summary of Key Points

* Proposal supports Trusted Types integration with `eval` and `new Function`
* All browsers have shipped implementations
* The proposal accidentally diverged from prior committee consensus around `toString` behavior
* Committee discussed a normative change to realign the proposal and implementations with the original consensus

### Conclusion

* Committee reached consensus on the normative change
* Stage 4 will be revisited after the proposal and implementations are updated

## `Atomics.pause` for Stage 4

Presenter: Keith Miller (KM)

* [proposal](https://github.com/tc39/proposal-atomics-microwait)

KM: OK. Next up, we have Keith with `Atomics.pause` for stage four. So I am presenting this on behalf of SYG. Who has moved on to other tasks in some sense. Higher calling, one could say. The depending on if you love management, and so I'm coming to present `Atomics.pause` for stage four.

KM: A little background on it because I think it's been a little while since it's been presented at a committee. So it's very common for efficient locks, highly, highly performant locks to spin for a little bit before suspending. When trying to acquire the lock, if someone else is holding the lock, typically that's not done by just spinning in a busy loop. Most hardware architectures support some sort of instruction to use in the loop that will defer and synchronize with other threads so, for example, on x86, there is a pause instruction. On ARM, it's common to use the instruction synchronization barrier, which does many things, but it's also used as a part of the pause loop. This proposal adds the same capability, basically, as an engine hook to the engine to users of JavaScript for implementing their locks on shared ray buffers.

KM: The original proposal had a feature for passing in a number to the pause, which would basically like your loop count and telling it whether you want to increase the duration of your pause or if it goes negative to decrease the duration of your pause. I have a normative change here that I'm going to ask while going to stage four to just remove that parameter as far as I know. No implementation supports anything with this parameter. None of the web browsers do for sure. Check them. And I don't believe any of the other implementations do anything with it that I could find. So I guess I will start by asking for the optional pause parameter removal. Part of the proposal. Anything on the queue?

DLM: Ron is on the queue.

RBN: Yeah. So I meant to file this earlier, but I filed an issue on it just a few minutes ago. So my biggest concern is even if the by not implementing it, implementers are essentially saying that it's whatever n is we just say that it's always 1. So we're only going to pause once. My biggest concern is that since this is the goal is to have or the purpose of the n or the iteration count is generally to indicate how many busy loops to be evaluating such that a runtime can optimize the busy loop process for a specific architecture or for to set specific boundaries and limitations on how many busy loops might be evaluated. And even if the current approach is n is min n of n or 1, so you're maxing it out as one element, at the very least, it will be documented as such that this argument is the number of busy loops and if you don't have that and it's not documented, then the if people need to busy loop for more than one thing, or have that expectation that this only ever does a pause, then they want to busy loop. They're going to manually busy loop by writing a for loop. And then engines implementations can't optimize that. So my only real concern is that by not having the argument that it's going to lead developers down a path that's harder to recover from long term, if implementations do say, hey, we're finding that it'd be more performant to limit the resolution of the iteration count or to sometimes just busy loop and sometimes pause because that's better on this specific architecture and they lose that capability if they leave it up to users.

KM: To be clear, I think the expected use cases you still have a loop in your code between pauses. So the count is more of like whether you want like a nonlinear pause right. So if you want like an exponential backoff or some other type of pausing, you can pass this number to the engine. I think the concern with the parameter is that since no engine supports it, there will be like it won't be a web compatibility issue, but it will be like a performance compatibility where pages all of a sudden you want to we want to add this behavior for somebody but someone just passed a value in not thinking about it and then tuned it assuming the engine was doing something with that value. And you're doing something different with that value and you get a significant performance regression because they weren't intending for the parameter to be used.

RBN: So well, just to that point, you say, yes, if you're spin awaiting, you're looping. The idea of the specific pause operation or specifying an iteration count is to break contention so that if you have two things that are spin awaiting at the exact same time and two parallel threads that they're not constantly hitting the same delay in the same loop and continuing to contend with each other so that you can introduce a little bit of nondeterminism often usually by saying using some mod on the spin counts or something like that. Yes, I agree that people are going to probably still wrap not use this, but I'm just concerned that you lose you might lose a little bit of control in the implementation perspective.

KM: I think my thinking is more that we specify this now. We have locked ourselves into a parameter like of a particular shape. And nobody's using that shape today. Whereas if in the future we decide actually it's better to not have a number and have some other mechanism, I don't know what that would be. It's probably going to be a number. But hypothetically, it could be anything. We're passing in we're having users pass in a value that everyone is intentionally ignoring. So I think in the future if we decide there is some room for such a parameter, it's better to go back through the process again for that parameter once we actually have a use case for it. Rather than preemptively adding performance optimizations for things that we are we're not even using and then we'll might run into compatibility problems within the future.

RBN: I only find that slightly humorous because the whole point of pause is that it is specifically a performance optimization. But the other thing too, I would add is I maybe it doesn't matter, but I'd be wary about using anything other than number if you were to specify say you could take in an options bag to pause. I would completely block that because the whole point of pause is that it should be as fast and efficient as possible. And if you specify something like an options bag, then your pushing users down towards an approach where they'll allocate a new object every time they call it and that's expensive. And then what's the point of the pause in the first place? You can't actually be efficient that way. So all right. Again, my concern was just around if we don't have this, people might do things that we then can't recover from. But if we don't think that's an issue, then I won't block that change.

KM: I mean, I can still do the thing that we can't recover from. There's nothing stopping them today from doing that, right? They just don't pass the parameter. And then engines.

RBN: Yeah, but at the very least we're telling them this is what you should be doing.

KM: I mean, it's listed as an optional parameter already today, right? It's not like an expected parameter that gets set to zero if you don't pass it because it's undefined.

RBN: And even if it was non-optional, someone could still pass zero or one and expect to and expect that to work that way. But then you're pushing yourself down that path rather than us leading you down a better path long term.

KM: Yeah, I don't know. I mean, I don't know like there is things the engine would do with that parameter anyway. And it's not clear that people are passing in to be like the parameter was intended to be either like increasing or decreasing, right? So it could be like you want to backoff less and less depending on your particular locking algorithm that you're doing. So like they might just be passing in random numbers effectively. And then we're kind of still in the same boat since like they don't know what they're tuning for. They're just picking random things. And engines are actually secretly ignoring it.

RBN: Yeah. Again, the whole point of the parameter was so that rather than users tuning for a specific architecture that we did that behind the scenes at implementations would handle that work. That tends to be the case in other cross-platform languages that have a similar capability is that they'll tune it for that specific process or architecture.

KM: I mean, it certainly will. Like but whether that parameter is used in that process, it appears that no engine is doing today.

RBN: Yeah. All right. Thank you.

DLM: Next up, we have Nicolo.

NRO: Yeah. About the concern that if we don't have this parameter, people will write bad code like with the, I don't know, wrong type of loop. If no engine actually respects this argument, even if this argument exists, people will still feel the need to write that potentially bad code. So I don't see how having it in the spec has any effect on that.

RBN: Yeah. The only thing I can say to that is that the hope is that at some point some engine might because it might be valuable to do so.

DLM: Next on the queue is GTO with We Support Stage 4 and are OK with removing the hint.

JHD: This is a reply to the previous one. So like to RBN’s thing, if we think it's valuable, like we think it might be valuable later, then like why didn't we mandate that if you pass two, it does two pauses?

RBN: Because the whole point of the parameter the point of passing the parameter is to allow runtimes to optimize it. If you say that it must be two pauses, that does not allow a runtime to pick a specific implementation that works better on a specific architecture. On some architectures, like the it's not necessarily that you pause. In some implementations, you will if you say 10 iterations, it might busy loop for nine iterations and then execute a specific pause because that's more efficient for that architecture or it might determine how often it's going to pause based on other pressures that are available. But oftentimes it's just this architecture says that if I pause this frequently, then I might run into some other type of contention. So I'm going to busy loop here or pause here. And by mandating the specific behavior, we break the ability to optimize it for specific architectures. So the best that you can do is say this is the intent. And that it is up to implementations to determine how they wish to handle that intent.

KM: Another thing on a similar point that this is basically only observable through performance. So like what it would mean to do those pauses is hard to say. Especially because each architecture is a different thing. So you can't even say like, oh, well, it should take at least as long as this other one. Because one pause might be very slow and take 15 nanoseconds. And the next pause that you execute, which is the same instruction in the same loop, might take one nanosecond because it's already synchronized with the other cores. So there's no like the engine can't guarantee I'm just going to sleep.

RBN: Yeah. But the purpose here is not to guarantee a specific amount of time has elapsed. This isn't something like a sleep. The purpose here is to break contention when you're competing with resources in a spin lock.

JHD: Okay. So when you say capture intent, you're saying that this number is not representing the number of pauses. It's representing like the relative priority to other pause calls in my program or something?

RBN: No, it's saying it's a hint to say this is how many times I would normally have busy looped. Like if I were going to just write a for loop that is from 0 to 10, I could say I'm going to busy loop 10 times. And then the runtime can say, well, it's actually more efficient to do it this way on this architecture rather than actually doing a for loop. And can do those optimizations because busy looping is not very efficient. Because busy looping actually fully utilizes the CPU because it's continuously doing something versus allowing you to say I'm going to I want to wait what the period of time that a busy loop might have occurred for this rough amount of time, but it leaves the CPU open for other things, other tasks to preempt it, other threads to possibly preempt it if it's necessary to do so. Without pegging the CPU or wasting power and energy. So really the goal is to say do what you would normally have done for a busy loop in the most efficient way possible without actually busy looping.

JHD: Okay. Thank you.

DLM: Next up, we have Waldemar.

WH: If we provide this parameter, the best case scenario is if nobody uses it. The worst case scenario is if people use it—then we will not be able to implement any kind of backoff scheme because it will break existing uses. Since the parameter doesn't do anything now, invariably people will just pass random values to it and then we'll have compatibility issues if we try to make the parameter mean anything. So in order to preserve the ability for us to define such a parameter in the future, we should not include it now.

DLM:: And that is it for the queue.

KM?: I guess I will what's the best way to go about doing this? Should I ask for the normative PR separately and then stage four? Or should we just do them all at once? Or?

DLM: Let's do the normative PR separately. So I think you've mostly heard support for that. But I guess we should hear if Ron's concern is blocking or not.

RBN: I've said before I don't believe that it's blocking. I just I know that the user base of consumers of this is very small. It's very niche capability that's necessary for certain types of symmetric multi-process and sorry, for certain types of shared memory multi-threading. And spin waiting. And it's unfortunate that no implementation actually took advantage of the field or of the parameter because it's useful to do so. But I won't block the normative change. So yeah, I'm not blocking.

DLM: Okay. Thank you, Ron. Does anyone else have any concerns? Or can we say that we have consensus for the normative change? Okay. I think we have consensus for normative change. So with that, we should move on and ask for stage four. So.

KM: Yeah. The other PR was related to assuming this one didn't go through. So we can safely skip that one now that the first PR has happened. So I guess, yeah, a call for consensus on stage four. Or I guess anyone supporting stage four? Did someone?

DLM: We already had support from Gustavo. So that's one. I'm not sure if anyone else expressed support yet.

KM: Would anybody else like to express support?

WH: I support it.

DLM: All right. Thank you. Okay. Well, that's two voices of support. Does anyone have any concerns about stage four? Okay. Congratulations. Have stage four.

KM: Thanks, everybody.

DLM: Oh, there's a plus one from RBN. End of message.

KM: Great. As long as there's a plus, that's the important one. Yeah. Do we need a summary or anything? Or?

DLM: You can add those to the notes or you can dictate it now. It's up to you, I guess. But I think normally we would clap and then move on. I'm presenting the next item. So I'm going to hand over chairing duties to Justin and get ready to share.

### Speaker's Summary of Key Points

* Committee discussed and approved removing the unused optional pause parameter
* Discussion focused on future optimization flexibility and compatibility concerns

### Conclusion

* `Atomics.pause` advanced to Stage 4 with the normative change accepted

## Decorators for Stage 2.7

Presenter: Daniel Minor (DLM)

* [proposal](https://github.com/tc39/proposal-decorators)
* [slides](https://docs.google.com/presentation/d/1AxKY6Rd3eimihoGJ30Bl-D7fodzqzXpFsH-ihcOTQP4)

DLM: Okay. We're good then. I can no longer see in the queue. So I'm just going to present. So today I'm going to present decorators for stage 2.7.

DLM: So quick reminder of what decorators are in an attempt to summarize a very complicated proposal in about 15 seconds. So decorators are functions that can be called in JavaScript classes, methods, and fields at declaration time, as a way of supporting metaprogramming. Non-exhaustive list of things they can do. Replace a value being decorated with a value of the same semantic. So a method has to be replaced with a method. They also provide an accessor keyword. And allow for accessors for private fields. And they can do things like allowing extra initialization.

DLM: So where are we with the proposal? What is number of open issues? So I have three here with a specification. That were all current, at least as of two weeks ago. And I believe are still open. I won't go into the details here. Test262 status. So there is a large PR with a lot of tests for it. But that is not yet merged. And it apparently needs further work. So that would cover semantics. Most of the tests that have already landed in test 262 are simply for syntax. Implementation status in engines.

DLM: So this proposal has been at stage three since March 2022. So it's been at stage three, I think, for longer than I've been coming to committee. And at this point, no one has a shipping implementation of decorators. So I'll speak to the SpiderMonkey status. And then I'll leave some space incase on V8 and JavaScriptCore would like to use their own words here. So we have a partial implementation. It needs a lot more work. So I unfortunately introduced a bug with computed names. And so we need to redo a large chunk of ours. And we have no plans to start that workup unless another engine ships first. And I guess here, OFR, would you like to speak to the V8 status?

OFR: Yeah. So I worked a bit with there were two people from Microsoft. The name escapes me right now. So I worked with them on their CL that they contributed to V8 implementing decorators. It was in a state where well, at first, we discovered that the Test262 were missing. So we started together with them basically fixing their CL to support also Test262. Or to work with the existing pull requests to at least pass these tests. And then we discovered some more spec issues that are documented that were on the previous slide.

OFR: And so that's basically where we together decided to stop at this point because we felt like the proposal was not in a shape where it was easy for us or where it was possible for us to continue the implementation. Because there was spec work to be done like bugs to be fixed. Tests to be written. And so we didn't like this was basically a mutual decision that we didn't feel that the proposal was in a shape where we could continue the work. And then on top of that, the CL is also in a basically in a state where it would need additional performance optimizations so that it would at least, yeah, match the performance that you would get from a Babel translation of the same source code. Yeah. So that's the status. And yeah. So basically, the implementation is halted until issues are resolved.

DLM: KM or Yuzuki, would you like to comment on JavaScript correspondence?

KM: Up in the queue. But our perspective is pretty much it's very similar to Mozilla's. Although we don't have work in progress implementation of any significant degree. Yeah. We don't plan on resuming it until some other implementation ships. Yeah.

DLM: Thank you. So I also have implementation status in tools, which NRO helped me out with. So there are tool implementations. Moving through that required a complex migration process because of earlier versions of proposals or older existing implementations of decorators in TypeScript. And there has been some reluctance in the implementation because the proposal is seen as being unstable. I don't know. NRO, do you want to add anything? Nope. Okay. Thank you.

OFR: Yeah. Actually, I have a question. Because I was not able to find this out myself. But as far as I understand, TypeScript currently so it has those two modes like the experimental and the spec compliant version of decorators. But as far as I understand, there is no implementation of actually lowering it to the spec decorators. It only lowers it to vanilla JavaScript. Is that correct? Does anybody know more?

RBN: Sorry if I can add. TypeScript does support native decorators I believe with ESNext set. And it will downlevel it to normal JavaScript otherwise.

OFR: Right. But it will not downlevel it to decorated JavaScript. There is no.

RBN: That's what I'm saying. If you target ESNext, then it should leave the decorators in, I thought.

OFR: Okay. I couldn't get it to do it. But maybe. Yeah. Okay.

DLM: Okay. If there's no other comments on tools, I'll move on. So I think all of this kind of points to is there's lack of an active champion for the proposal. So I was able to get in touch with KHG by email. And they had some reasons for why they reduced their activity. I'm not sure if they're on the call and want to comment more. But yes. I mean, ultimately, over the last couple of years, there hasn't been an active champion for the proposal, which is why we have bugs in the specification. And tests that are incomplete. So I guess my argument is that keeping it at stage three is sending the wrong message to the community. So we have had the LibJS recently did an implementation as well. But if it's not moving ahead with the browser engines here, then that's not necessarily the best use of their time. And it's also somewhat unclear exactly what their implementation is. If we do know that there are some bugs in the specification and incomplete tests.

DLM: So with that, I wanted to ask for a consensus for stage 2.7. I guess I should point out that when we introduced the staging process, the extra stage for 2.7, we did explicitly carve out existing proposals that at that time we weren't going to go back and move them to stage 2.7 necessarily. But I do think in the case of decorators where we don't have an active oh, we have point of order.

JRL: Chris, point of order?

CDA: Yeah. Sorry. There's still maybe some topics do we want to talk about XS from PST?

JRL: Yeah. Well, I was going to get to that as soon as we stopped discussing. Are you done?

DLM: Well, I guess mostly now. I'm going point I was trying to make is that I think this is a good exception to our rule about not moving proposals back to stage 2.7 just because of the current state and the lack of implementation progress over the past four years.

JRL: Okay. First up, we have Patrick from Modable.

PST: Just to add a small voice to that XS does not plan to implement decorator.

JRL: Okay. Next up, we have Kristen.

KHG: Hello. Yes. So I am the current champion, although I did try to find someone else to take over when I no longer had time or a mandate to work on the proposal. I think just to provide some context from my end, part of the reason I stopped working on it last year was after the last plenary where we discussed it, we were basically asking engines, "Hey, if we have if we fix the last couple of issues here”, because we've done this multiple times back and forth, we fix issues then somebody comes around to implement it. And then they say, "Oh, there's more issues." And if we fix the last few issues here, will we be able to actually move forward?" And all the engines at the time were basically very stonewall-y. I actually was quite perturbed at the time because literally multiple people were asking a representative of an engine, like, "Hey, what's your stance here? What would happen?" And they were just like, stonewall. “We're not going to talk about it." So that was I would like to discuss that in the context of process failure.

KHG: As for 2.7, I'm okay with moving back to 2.7 at this point. I agree that it is no longer accurate to say that it's really at the stage three as defined today. And I would also say if we can work toward figuring out a version of this proposal that everybody would like to land, I can absolutely invest some time to finish it up, get the test passing, get the spec issues figured out, I'm happy to do that. I just don't want to continue investing time here if it is the case that engines really aren't interested in shipping this. So that's kind of where I've been at for some time now. So yeah. That's my piece.

JRL: SFC would you like to reply?

SFC: Yeah. Hello. Just to respond to that comment there, I think that it is a fairly large proposal. It's a fairly complex and it's not the first time we've had I a lot of the Temporal champions can also share these same sorts of sentiments. It took us, I think, nine years to get Temporal shipped. We finally had that little celebration back in March. It just takes a lot of persistence and things are not fast in this committee. So I do certainly hope that we continue to have the champions engaged with this proposal. It's not really the type of it's not the type of process where you graduate to stage three and then hope that it happens. It does take a lot of continued engagement. And I appreciate the time that you've put that you have in the past put into engagement. And I think that it needs continued engagement if it's going to be successful.

KHG: Yeah. To be clear, I'm very much in it for the long haul. I understand that this is a time-consuming process. It was really the lack of engagement of it would be like six months to a year before we'd hear back from engines about anything. And then it would always be like, "Well, we barely looked at it." And then we decided we can't move forward. And again, this time we had everything going for us. I think Ron had written and was trying to propose moving forward. With the PR to V8, or the whatever the terminology is. But he had that all prepared. And everything and it was really just like, "Yeah, we don't see a reason to merge this right now." The reasoning was very I'd have to look back at the notes, but it was very like, "We just don't yeah. It was very not helpful.

JHD: So I think I'm next on the queue. I've been waiting a while. Okay. So when this hit stage three, we didn't have 2.7. Arguably, it should have been 2.7 at that time. And it should not have graduated to 3 until if 2.7 had existed, should not have graduated to 3 until we thought the tests were sufficient. Based on that alone, I agree that it probably should be moved down to 2.7 until the tests are sufficient. That said, this decorators has a lack of progress has had nothing to do with KHG’s involvement or activity. It has had to do with the fact that stage three even then was supposed to mean browsers are going to merge this. Not browsers are going to merge it when someone else takes the first step. Not they're going to wait years until someone tries the first implementation of it and then discovers the tests are a problem. It was willingness. And every time we've discussed decorators in the intervening time, browsers have effectively both explicitly and implicitly telegraphed an unwillingness to merge it, meaning a sort of disinterest a distasteful disinterest in the proposal. And that to me feels like a process failure. If you weren't enthusiastic about implementing it should not have achieved it should not have graduated beyond stage two. And that should continue to be the case for every proposal. And I'm really pleased to see that V8 has provided concrete feedback about the state of the tests. But I'm very disheartened to hear verbiage that I haven't heard in almost a decade in this committee of we don't want to be the first one to ship or we're just not going to work on it right now. Without the in the absence of concrete feedback. And I am I'll phrase it as I am struggling to here to assume good faith, which is which I'd like to do.

JRL: NRO, would you like to reply?

NRO: Yeah. I'm directing this question to browsers, but I understand it's maybe something you cannot just answer in this post. But do you, your teams, think that there is a version of decorators that would be appealing? Does it make sense for other people in the community to try spending time on decorators and adjust it and try to investigate implementations, figure out what actual what the feedback actually means and what that means for the proposal? And do you think the proposal can be tweaked in some way? Or is it just that decorators that try to change class elements at runtime are just never going something that can be fast enough?

JRL: So give it a second. If a browser wants to reply directly.

JHD: Yeah. I mean, I think if browsers do have concrete feedback, as Nicolo is mentioning, then of course they should provide that. But I think I'm sort of saying the different thing is if it's advanced beyond stage two, that is strong implementer support from all three browsers because you're all in this room. If you do not offer if you do not feel that support, you should not consent to advancing beyond stage two.

JRL: Okay. Then we have a response from RBR.

RBR: I believe in Tokyo, we did discuss this. And I mean, I cannot speak for our browser developer. But I believe there were reasons mentioned before. So it's more about maybe not today, but the question is it shouldn't be about today, I believe. About you're speaking about a process failure. But I mean, we have our meetings and different schedules. And when there were reasons for not progressing in former meetings, we should look at those instead of.

JHD: Sure. If Daniel, if you'd go back a slide or two to where you list all the implementations. V8 is the only one today that has concrete feedback on that slide or in any of the verbal comments that were made. SpiderMonkey and JSC's feedback is we're not going to do it. That is not concrete. And nothing more concrete was given other than perhaps assent with the V8's position.

RBR: Yeah. But that is a summary of.

JHD: Yes. But I'm also describing everyone's expansion on that when the three engine representatives spoke about it.

RBR: I'm asking for abstracting that a little bit. And not only looking at what is written on the current slides, but taking a perspective on the bigger picture.

JHD: So right. And I'm not just basing it on the wording on the slides. I'm also basing it on everything that was said about the slide. And if all three engines are willing to ship it as soon as the tests are thorough enough, then my topic is merely a historical analysis and not relevant today. But everything related to this slide, not just the explicit wording, says that two of the three engines just aren't going to do it until after V8 has done it. And V8 won't do it until the tests are done. And the point of being in any stage beyond stage two is they're all going to do it. And I thought as a committee we had evolved beyond the gamesmanship of I'll do it, but I won't be the first mover. That used to be a problem a decade ago. And I am disheartened to see that it seems like it might be a problem again on this proposal.

JRL: Okay. I think next we'll have two responses from browsers. So first is Dan.

DLM: So I guess the first point is that I wasn't part of the committee when this went to stage three. So I'm not quite sure of what the history is there. And oddly enough, although we keep internal notes about all of our proposal reviews, the only document that is missing is the one that was leading up to the meeting where this went to stage three. So I don't even have the history. So that being said, we did do a partial implementation. I did not get to the point where I was comfortable with evaluating the performance of it.

DLM: I will say that it did add a lot of complexity to our parser. And the front-end code in general. And I do think this is a very complicated proposal. There's definitely some simplifications that could be made that would make this more palatable for us. And basically what and I guess I didn't share this feedback at an earlier time in front of the committee. But for us, it's a trade-off. This is adding definitely adding complexity to our implementation. And we do see developer interest in this.

DLM: But it's just not clear to us if that interest is sufficient to justify the amount of complexity that this was added to the front-end when decorators can be transpiled and have been transpiled for a long time. So that's more or less where we are. I don't have because we didn't get far enough with our implementation, I can't really give anything more concrete than we did have concerns about complexity. And then moving on to I think the rest of your point is, yes, I agree we should have strong support from implementer before this goes back to stage three. So I'll try and turn this around to a more positive thing. I would really like to hear that someone really wants this. And that would be enough to sway us. It's just that we're not personally or personally, I shouldn't say personally. I'm speaking for a team. As a team, we are not convinced that this is good for the web. We're not unconvinced either. We're sort of in the middle.

JHD: So that's fair. But and again, regardless of the history there, I'm not saying it's stage three that requires that support. Stage two, seven requires that support. If it's not good for the web, it should never go beyond stage two.

JRL: We have more browser responses. And a large growing queue. We have less than nine minutes remaining in this time box. Up next is Olivier.

OFR: Yeah. Just short note. I think I wanted to say something similar than Dan, similarly, I was not fully involved in the history. So I cannot comment on that. And also, it does add a lot of complexity. So in a sense, browsers coming back saying, "We're struggling to implement it," is feedback. So that's the first thing I think to acknowledge. And the second thing to say there, I think it's not a fair characterization to say it's about merging the pull request or the CL. It's about actually architecturing a solution that would work. It's, yes, we have a CL. And it's there. And but it's not about just merging it. It would have to be reworked. It's not in a stage where it can just be merged. So that's not so we're not at that point. Similarly to Mozilla, it's not at that point. So it's not just about saying, "Okay. We're not going to merge it." And then the other thing about feedback, there is also for example, the issues that are listed there. On the previous slide, one of them I opened almost a year ago now, where I first looked at the CL. And this was one of the first things that I discovered that there was some verbiage in the spec, which was not matching what the tests were doing and probably also not matching what the intent of the proposal was. And it has been unaddressed since then. And I understand that Champions move on. And do other things. And that's totally fine. But I would also like to say it's basically it's not we're coming back with problems to delay the process. It's we're coming back with problems because there are problems. And we also need to acknowledge that. Yeah.

JRL: Okay. And next, we have another response from Keith.

KM: So I guess in some ways, I was also not resident for stage three in the sense that I was on season nine prior to stage three. And then when I returned, from leaving Apple for a while, it was already at stage three. So I also awkwardly do not know the full context of the thinking going into stage three. I think our current thinking on it is that something like this makes sense for JavaScript. But would be better off as the JSSugar layer that Shu has talked about in the past. Where it's something that gets there's a standardization of how if you want to compile to something like JS, then how you lower it and what its semantics should be. But it's not necessarily something that the browsers directly or engines necessarily directly implement. Yeah.

KHG: So yeah. So I'm just going to provide some more context as I've been with this proposal for quite some time. So on that note, the reason why this maybe is still useful to have syntactically is the weight of the emit. It is any version of this proposal emits a fairly large helper system. In order to apply decorators to a class. Because applying decorators to a class is harder than decorating a function. You can very easily metaprogram with a function definition. You can just create a function that returns a closure. And then you can do `React.memo`. Cool. You have a decorated function.

KHG: Doing that to a class method involves manipulating the prototype. It is difficult. It takes a while to figure out the exact same. It takes even the simplest version of this is a little bit weighty. In terms of overall cost. If you want to see how people work around this in popular frameworks, I suggest taking a look at MobX. MobX without decorators has a way to do this. And it essentially looks like manually manipulating the shape of the class on instantiation for every instance. This is not an uncommon practice for people who are trying to metaprogram on classes. So I do think that it might not appear to be as commonly used as people believe. But it actually really can add a lot of hidden weight there.

KHG: In terms of why there hasn't been any movement in the last year, I really suggest reviewing the February 18th meeting notes from last year 2025. There was no feedback given at that meeting in terms of like, "Oh, it's these issues." It literally was given that, "Oh, it just hasn't been prioritized." And that was really what was kind of disrupted continuing to work on issues like that and whatnot. Yes, KM. I'm aware that it doesn't necessarily go away. I do think there this is where I would love to really dig in with an engine, actually. The whole time. Since I started working on the proposal, I really would have always wanted to just sit down and be like, "Okay. What are the performance constraints that we actually are working with?" And the reason I say that, I came onto this proposal after the original stage two proposal was shot down.

KHG: Now, the original stage two proposal went much further beyond what. Proposal did. The stage one proposal was very you basically get a property descriptor and the class. And you can just mutate the class as much as you want. And you can use you can return a new property descriptor. Or you can apply create new fields. You can create new methods, whatever. Stage two went even further. You could change almost anything. You could change whether something was static or on the prototype. It was so powerful. And looking back, engines shot down the original stage two proposal because yeah, it was massive. And we were like, "Okay. Well, we do need to scale this back." I understood that after I really sat there and kind of tried to work on it for a few years. Going back and forth, going to the engines and being like, "Hey, does this version work? Does this version work? Does this version work?" And we kept going back and forth. And months and months between feedback sessions. But that was a part of the process there.

KHG: We finally got to this version that we have now. And the main aspects of what we have now that I think were important and needed the accessor keyword, the ability to intercept accessors, and to have the ability to decorate fields, accessors, methods, all of these fundamental properties. That was basically explicitly to support better performance here. And it's really disappointing that we went through all of that. And it turned out that that was not performant enough in the end. Or it was still too complex. All of that said, I'm happy to go back to the drawing board here. If it takes if it requires us to really simplify here if there's something that we need to do to make this possible, it's just it feels like even if I offer that, that's not actually going to be taken up. So I'm happy to do that. And I would like to work more closely with an engine to get the proposal over the line. If somebody is willing to set up a regular meeting and kind of work through it with me.

JRL: Okay. Keith has in the message response that weight doesn't necessarily go away by putting it on engines. I believe that's discussing the transpilation cost. And now it's going to be burdened on the engines themselves implementing it. We're going to get into a lot of talk about the sugarings up next is NRO.

NRO: Yeah. I wrote some of the Babel implementations of the creators. And unfortunately, it's not just the cost of transpiling the creators. It's not just the cost due to the creators. Kristen said before that, "Well, then you do need to manually mutate things on a prototype." But that's the happy path. Because we have things like class fields or all of the private class features that are not exposed in any way through metaprogramming, which means that to transpile a class that uses the creators, you actually need to transpile all of those things basically back to ES6. Now, in some cases, we're able to preserve private stuff. If a private field in a class and then there is some other method in a class that's decorated but not a private field, we will leave it as is. But in general, it requires transpiling much more than just decorators. And that's a cost that I would expect is less of a burden on engines because engines can actually have access to this class state that's not exposed to JavaScript. OFR, has a clarifying question?

OFR: Yeah. Just to that transpilation, is it like the prompt inherent? Or is it because of design decisions in the proposal?

NRO: It is because if, for example, you want to okay. So if you want to transpile the created class method, you just grab the method from the prototype. But if you want to, for example, decorate class private method, there is no way from JavaScript code to grab that private method at the time where the decorators are meant to run, which is at class declaration time. So I would say it is because of the proposal. But if a proposal wants to be able to touch any private state, it's always going to have this problem.

JRL: JHD?

JHD: Yeah. Just adding that. In other words, it's inherent not because of designs in the decorators proposal, but because of the fact that class features use syntax and have various semantics. Which are motivated on their own. But mean that you can't metaprogram your way around it.

JRL: Okay. So up next is RBN.

RBN: So while I was on the TypeScript team, I was the primary individual that developed the decorators, capabilities, both the original stage one and early stage two-based what we called legacy decorators in TypeScript now. And the more recent what was stage three decorators. We did have actual customer feedback at that time. There's an issue on the [Microsoft TypeScript repo issue number 55688](https://github.com/microsoft/typescript/issues/55688), which was actual feedback from the Lit team about the overhead resulting from standard decorator emit. It is results in almost 110 in some of their examples, 110% more emit than more JavaScript is generated than using even the older experimental decorators version, which is still more than it would have been just native. So there is a significant overhead when it comes to bytes on the wire when downloading these things that is not just the performance cost of evaluating the expressions. It's actually bytes on the wire. It's a cost in money for how much data you have to traffic to actually use these features down level. That I believe makes it not a very good choice as a target for JS sugar like desugarings. It requires specific things access to specific things within the runtime that are just hard to desugar without that overhead. And one of the reasons that there has been this strong push for it to be in the engine even if there was a JS sugar level is that level of complexity in the emit.

JRL: And the response from YSZ?

YSZ: Yeah. Sorry. So yeah, one thing I'd like to comment is probably someone already commented, but even if you can basically offload this thing, but still the same semantics needs to be done in the engine side which basically means that it's possible that engine is desugaring. And this is basically even if you can make the source code itself shorter, still for example, broadening a bytecode, broadening a machine code, and other kind of stuff, then basically it's a similar kind of cost exists in the runtime.

RBN: I feel like that goes back to my point about it being a difference between the performance of evaluation which is a separate topic than what I'm discussing which is the monetary cost of bytes on the wire while transiting this information from servers to customers. It's not a cost that is paid at the point where you write the function that is the decorator. It is the cost that you paid at every single decoration site. So it's a cost that grows exponentially the more that you use decorators within your application. So even if the performance is slower on in a runtime to have it natively, it is possibly preferred. I can't speak to numbers, but I can say that at least from my perspective, it is preferred to have the even slower implementation in the runtime to avoid the financial cost of having to pay for the transit fees for that much data on a repeated basis. It's just much better to have it locally.

JRL: RBN is currently on the queue, but we have clarifying questions. First up is KHG.

KHG: Yeah. I understand the yeah cost of there is going to be a cost of applying the decorator no matter what. But there is additional cost. A, in bytes of the wire, like Ron said, so I think that that is something to consider. Another thing is we have this additional cost of mutating part of these optimizations were about making sure the shape of a class does not dynamically change. The way that people work around this is by dynamically changing the shape of a class in a constructor to add the decoration. It kind of makes the whole problem worse if you say that decorators are run only through metaprogramming. Because you are now explicitly saying that we are definitely changing the shape of the class in some way that is completely unpredictable to engines. So that is the state of the world currently. And again, I think the MobX examples are instructive here.

KHG: Yeah. I'm just confused over why that is I get that there's this complexity in the implementation. I get that there's this complexity that somebody is going to have to absorb. Engines are certainly going to have to absorb that if they implement this. That's totally valid. It's just one layer up. There's exponentially more complexity that has to be absorbed by exponentially more people in terms of shipping things over the wire and I don't think that that is a very good reason to say that we shouldn't ship this. I think there are plenty of other reasons. Don't get me wrong. Plenty of other reasons. And yeah, cost of browser exploits, like Keith is bringing up, totally valid. All of these are valid. But it's not I'd like us to save more focus on yeah, better reasons, I guess.

JRL: OFR also has a question.

OFR: Yeah. I mean, it's undoubtedly a trade-off. Now we're discussing how many bytes you send over the wire versus how much time does the engine need to spend to basically figure out what you intended to do with your program. And in some cases, I guess it's going to be good to do it on the engine side although I'm not entirely sure. And then there is also other cases where it will clearly be better to do it on the bundler on the server side. Especially with decorators. So I'm kind of surprised to hear or I don't know. I'm wondering was the size of the expanded decorators if you downlevel them to normal JavaScript wasn't that part of the design or shouldn't it be part of the design? So because I think there's certainly going to be a lot of entities that want to expand their decorator server side even if they could ship them to browsers.

KHG: So yes, this was considered for sure. The original V2 polyfill was significantly larger than the current implementation. An order of magnitude larger. That's how much we brought down the size of complexity when we were working with Google and others to make this smaller. First off. Second off, I don't necessarily see your point of why people would want to expand these out. Think about function decoration, right? If you're just doing a function that is decorating another function, which you can totally do in JavaScript today, where would it be more performant to I think in line that decoration in every single instance of a function that it is applied to versus running the function once, capturing the decorated function, and then using that and applying that.

OFR: Can I explain maybe?

KHG: Yeah, yeah, absolutely. I would love to know.

OFR: I mean, it's a very simple example. Let's say you have a decorator that is used for debugging. You want to strip it out at before shipping code to users. I mean, that's very obvious, for example.

KHG: That's fair. Okay. Yeah. I'm imagining more like the opposite case where you are shipping the decorated method. Consider private fields. Oh, that was the other thing I wanted to say. So private methods and private fields are probably like half to more than half of the complexity of the polyfill because NRO and et al. were saying you need to downlevel everything and capture everything and basically re-implement class fields yourself. In order to polyfill it. So that if we could not without this mechanism, there's no way for us to polyfill it without that complexity. So yeah.

JRL: Okay. And we're going to get a couple of responses about polyfills. Up first is RBN.

RBN: Yeah. And this kind of ties into what JHD posted as next. But in general, we haven't really focused on the polyfill expansion size. However, that has come up in a number of discussions about the various versions of the proposals over the years. The stage two change to a purely syntactic transformation-based system resulted in significant complexity not only in polyfills but in the even the potential for downleveling because of how it dealt with the access to internals that as part of its transformations that made it severely complicated and extremely expensive to be able to ship anything downlevel. So while we haven't specifically used it as a design constraint, considering the discussion around things like JS sugar and what that means, it becomes more of a thing that we do need to be discussing if we were going ever planning to go down a JS sugar route is it doesn't make sense to say, yes, we support this feature, but only within the specification, but only if it's downleveled, but then the dependency on that downleveling requires far too much implementation work. So whether it's a thing we do not consider as a design constraint now is one thing that we should probably be considering in the future if that's something a position that we continually want to be considering is this idea of a JS sugar type layering. But yeah, polyfill size has been a problem since the starting with the stage two syntactic transformation model.

JRL: And JHD, for some history?

JHD: Yeah, I was just going to add the proposal champions almost always seem to think about polyfillability or transpilability and the impacts they're in. But it has always been the precedent in this committee to not let that constrain any design. In other words, if there's two designs that are equally ideal, and one of them results in better outcomes for something that's not a constraint, whether that's polyfillability, transpilability, I don't know, aesthetics, whatever, then of course, we'll choose the one that's better. But if something is a better actual design in the language than it's okay that it's not polyfillable or easily or that the transpilation is large, right? The period of time where people are polyfilling and transpiling is shorter than the infinity that the feature will live in the language. And so thus, we prioritize the future state more than the transitional state.

JRL: Okay. And KM, sorry, we I'm actively managing the queue to try and group topics. Back to KM now.

KM: Yeah, I mean, I think this came up a little bit when we were talking about it earlier. But I mean, I do think that there's while the costs over the wire are a real cost, that cost is only borne by the people that use the feature to costs of browser engine exploits are potentially an extremely high cost, potentially someone's life could be on the line. Nation states are known to take over browsers and for political dissidents. That's a real cost that is borne by everybody, not just the particular websites that want to use the feature. So and I'm not saying that that's not a real cost. Obviously, the wire cost is a real cost. But there are certainly other costs too on the engine side that would make you not want to implement this. And I'm not saying that people were saying that those costs don't exist, but just that we should be wary of that.

JRL: And a reply from KHG?

KHG: Oh, yes. Basically, we just wanted to say ultimately here, if we could avoid the downleveling, if we could make it so that decorating a private method or a private field or a private accessor was possible in a relatively simple way that I think would really help with the JS sugar path. Currently, the only way to implement this to decorate a private method is not really decorating a private method. You change the private method into a private field. So we changed the mandates there. Perhaps change performance characteristics. So yeah, definitely I'm very open to figuring how different paths forward here. It's a lot of complexity no matter what. And private fields really are a big part of the reason that we have to deal with that, just in general.

JRL: And the response from DLM?

DLM: Just like to quickly agree with Keith. I do agree that the wire cost is real. I'm adding complexity to our identity engine potentially as a cost that would be paid by all users if it results in security problems.

JRL: Okay. Sorry. This is back to RBN. I mismanaged the queue a little bit here. You had a topic about complexity that we accidentally went through. Are you ready to speak?

RBN: Yeah. So this is not necessarily an admonition or any concern, but just a bit of history. So the complexity that we see in the decorator's proposal is it exists today is very much based on the years of implementer feedback that we had through the stage two process and beyond.

RBN: The original stage one proposal was a model that was that kept decorators looking roughly like they were a Proxy for defined property. They had the exact same arguments as defined property. And it would pass through a descriptor and pop out a descriptor. And that's how and that's how it worked. The problem with that approach as simple as it was and as very lightweight as that transform often tended to be was it had a number of limitations both in its capabilities and with what engines wanted to maintain as things that they could know about classes. So for example, it didn't do a very good job of working with fields because it had no information about a field declaration to tie to because everything was based on the constructor or the prototype and a descriptor. And there were no descriptors for fields. So that was a limitation of the proposal.

RBN: The other concerns that implementers had, which KHG mentioned just a few moments ago, was that the way that the current or that the stage one decorator's proposal worked was that it worked by giving you access to the prototype and to the constructor after the runtime or after the engine had done its work of parsing and creating the various internal state representations it needs to represent that object in memory. V8 maps, etc. And the decorator having access to the prototype and a constructor in the decorator allowed for mutation modification that would break those intuitions about classes.

RBN: So there was a change to the design throughout stage two in an attempt to address those implementation concerns. And that resulted in a far more complicated syntactic transformation mechanism that just was very hard to realize. So then the approach circled back to a purely functional runtime approach that avoided giving the developers access to the constructor and the prototype while defining new fields but gave you the ability to hook into those things after the class was finished and decorations had run so you could do things like registration and the like. So a lot of that complexity has been the result of implementer feedback over the years. And it is unfortunate if we've reached a point where implementers are concerned about the complexity that was necessary to meet those guidelines.

RBN: So if we can find ways of managing those two expectations about the features that decorator authors are hoping for and expecting and the capabilities that engines or the requirements that engines have around what those changes or what decorators should be allowed to change and the complexity involved in it that make that work, we need to come together to have that discussion to figure out if it's too complex, what do we need to cut and why are those complex capabilities the way that they are? Are there simplifications that can be made or do we need to find a way forward?

JRL: Okay. So we are finally getting back to the stage two versus 2.7 or the stage 2.7 discussion. Up next is RBR.

RBR: So was everything said and that was actually already initially was like Dan and Keith and also Ollie speaking about it. I did not really feel it would have the bar of 2.7 because that means there are no real spec issues left to deal with. But when Ollie spoke about it and there were still like you were facing issues when you looked at implementing it. And that the spec would have to change. And with that in mind, I believe it would be more stage two from my understanding of the stages. Then 2.7 is that correct?

JRL: In reply is NRO.

NRO: Yeah. In general, it is totally fine to change a proposal in stage 2.7 or 3 due to implementation feedback. There would have been no way to get some of this feedback during stage two because it's feedback that happened because somebody actually tried implementing it. I guess it depends here on how big the changes that we need to do would be because if it's tweaks, then stage 2.7 is totally fine. If we're talking about redesigning half of the proposal, then I agree with you that doesn't feel like ready for stage 2.7.

RBR: Like are we at a stage where the implementers would say it is small enough and to ship that relatively soon? Is it? Coming back to your question pretty much also about how big are these changes from your perspective? We have a response from JHD.

JHD: Yeah. I mean, so to add on to what Nicolo already said, it's not that 2.7 means there are no spec issues. And spec issues do not automatically merit demotion to stage two. It's mainly that the only changes that we expect are changes that come from implementation effort and discovery. So since the current feedback is the tests aren't sufficient, which to me makes it summarily qualify for 2.7 and not 3, then it seems the next step, like the first step is to move it to stage 3 and complete the test suite to the point where then V8 and hopefully the other engines can then resume their implementation work and locate whatever the remaining issues may be. If at some point the issues turn out to be unsolvable or require meaningful subjectively meaningful changes to the shape or semantics, then it's worth bringing it back to the committee to either see if everyone's cool with the change and keeping it at 2.7 or if it should be moved back to stage 2 and more time is spent discussing it. But I think that it would be premature to go to stage 2 because we haven't finished the test suite and tried that yet.

JRL: CDA?

CDA: Yeah. Agree with JHD’s comments on that. And expanding a little bit is definitely premature to propose regressing this to stage 2. Because yes, I know that potential changes have been discussed, but we don't really know what that would look like and what would be being proposed. So yeah. That's it.

JRL: NRO?

NRO: Sorry, I was typing and then the thing got lost. For the record, that would strongly support stage 2 if once we know that we need to make big changes. Right now, it's maybe like more of a feeling that we might have to do big changes. But we don't really know.

JRL: Okay. And a new topic from KM. Okay. KM says plus one to stage 2.7. RBN.

RBN: I believe there was a queue entry and I forgot who it was probably from DLM earlier about if it rolls to 2.7, then advancement back to stage 3 should require buy-in from browsers. However, as I understand it, the 2.7 to 3 advancement criteria is merely that tests are complete. And that it is primarily a pro forma advancement. So I don't believe requiring explicit support from implementers is a 2.7 there is a stage 3 requirement. That was the 2.7 requirement.

JRL: I believe that is correct. From DLM.

DLM: Yeah. So that was yes, I suppose a mistake on my part. The reason why I made this for stage 2.7 rather than stage 2 is that we're very hesitant to imply that we wanted to reopen the design space for decorators. Although as it turns out, there may actually be more appetite for that from the committee than I had originally thought. I guess the reason why I said that is that I don't want this to go back to stage 3 and then we have another situation where no one implements it for four years. So yeah, I guess I'll leave it with that. I think it would be a mistake for this to advance without commitment from at least one of the engines that they're interested in implementing it in the near future.

RBN: Yeah. My biggest fear is that the staging process is potentially being abused to kick the can down the road and avoid forcing an implementation. I'm perfectly fine with if we find that there are things that are not implementable that need to be addressed. There were similar changes that happened throughout the Temporal proposal but my biggest fear is that we are going to backslide quite a bit on the progress of this proposal and something that we've been working on for nearly a decade. So I don't want to go too far backwards in progress when if the major concern is getting the spec finished and then getting enough buy-in because there has been a fair amount of community feedback over the years that people are interested in this feature, the community wants this feature, very much like to see it advance. And I don't really want to see it end up abandoned. And I think a lot of the problems that we're having with getting the proposal advanced has just been how long it's taken to get things moving. To get things moving.

JRL: Okay. I want to give a time advancement. Sorry. A time box. We have eight minutes remaining until the break. Up next is CDA.

CDA: Yeah. Just agreeing with RBN's comments. Certainly, we'd like to see implementer support for all proposals advancing. But this is not strictly something that's in the acceptance criteria for stage advancement. And ideally, we would not have that even as an unwritten acceptance criterion.

JRL: And NRO?

NRO: Yeah. I agree with not having things implicit, but we use our rules just to facilitate our process. If we want to do something special for a specific advancement, we can just agree on doing that and get consensus on doing that. For example, we do conditional advancements all the time. This is a bit of a weird situation because the process is going backwards, not ahead. So but we can have some sort of conditional 2.7 that we keep the condition until stage 3 until when we know how much changes we're talking about. We can have this written down in the notes. We can, I don't know, add a note for this in the proposal rhythm itself. And even if it's a little bit weird, this proposal is clearly very special. So we can do something that's a little bit outside of our standard process. And it's like, again, not that much because we do conditional advancements all the time.

JRL: Okay. So I think NRO is arguing that we should have an unwritten rule here. The reply to that oh, sorry. CDA is going to reply directly.

CDA: Well, actually, I was, but now after what you've said, can you say a little bit more about proposing unwritten rule? Because that's not how I read what he was saying.

JRL: So you're saying maybe I misheard then. Are you suggesting that we advance back to stage 2.7 and then require explicit implementer support before moving to stage 3 again? That's what I understood.

NRO: Yes. That's what I'm suggesting.

JRL: Okay. Is that not an unwritten rule that we are now adding to this proposal?

NRO: I mean, we can depends where. It's unwritten in the process, but conditional consensus is unwritten in the process document. We can document this consensus we could get now somewhere else.

CDA: So the flip side of that would be if I invert that, right? You're saying that you would block advancement without explicit support from an implementer, which seems not good. Not a good precedent.

NRO: I don't need to block it myself. We already heard that implementers are not excited. That implementers want explicit support for this to go to stage 3. And if they don't block stage 3, we're just going to end up in the same situations where we were in the past few years.

CDA: I don't disagree with the reality of what you're stating. I just disagree with setting the precedent that that's now where we're setting the bar.

JRL: Okay. I think we're going to hopefully be able to finish this in five minutes. We have a response from RBN directly on this and then a response from JHD directly on this. Let's go to RBN first.

RBN: Yeah. I just want to state that in opposition to what NRO was stating while in general, yes, I think that we can have we generally will tie certain things to advancement. However, having an unwritten rule of requires implementer buy-in to advance is essentially just stating we're going back to 2.7 and re-requesting 2.7. And I think that is much more complicated than just stating an unwritten rule. I think that requires committee consensus to do that. I don't think it's just as simple as stating that we have to get that get specifically implementer buy-in for that case. If we do, then again, roll back to 2 if that's what we're going to do, but then get consensus on that.

JRL: Okay. JHD has an end-of-message response. Plus one for 2.7.

JHD: I changed the end-of-message. So okay. Just to clarify, stage 2 means the feature is going to land. We just don't know exactly what's going to look like yet. So long ago, this committee said there will be decorators in the language. That's not going to change.

JHD: Okay. So the point of 2.7 is to signify two things. One thing is that the design is complete. The other thing is that there is engine implementer buy-in. The design remains complete here until we have concrete things that need to change. And that can't happen until implementers try to implement it with a complete test262 suite. So it very well may be the case that this should go back to stage 2 and the design reopened. But that would should not happen and I will block that happening until we know what those changes might be or what is unsatisfactory about the current proposal. So I think we should move this to 2.7 because the tests aren't complete and that's the whole point of that stage. And then work should be done to fill out the tests and then engines should hopefully implement the complete test suite or with the complete test suite. And if there are changes needed, they are welcome encouraged, please, to bring those changes back and we can see if we need to revisit the design or not. If we do, stage 2 would be appropriate.

DLM: Yeah. Thank you, JHD. I think that's a very good point. I know I don't have very much time, so I'll talk quickly. But yes, I think, yeah, stage 2.7 is appropriate for today. I dropped my thing about wanting to hear implementer support prior to stage 3. That was I should have asked for stage 2 in that case. And so yes, that's I think your plan makes complete sense. Stage 2.7 today. And then at some time in the future, if it looks like it's necessary, I can come back or another implementer can come back and ask for stage 2.

JRL: Okay. We have one minute left. And we still have items that are in the queue. We could copy this queue and propose a continuation for later tomorrow. If that's okay with everyone else, unless we can get through this very, very quickly.

CDA: Well, mine's directly related to the what I would say during the call for consensus. So if.

JRL: Okay. So support for stage 2.7 as long as we're not moving the goalposts, RBR is yours going to be short enough?

RBR: I believe in my question is more generic. So I could imagine this will.

JRL: Let's not open a more discussion afterwards. I do not want to do that. We're asking right now for stage 2.7 or demoting this back to stage 2.7. Do we have a consensus on doing that?

CDA: Okay. If I could speak on my topic there, which is sorry, just saw OFR’s comment, which is a +1 to regressing to 2.7. I will support 2.7 as long as we're not moving the goalposts. And what I mean is I'd really like to take a strict interpretation of the process here and the measuring stick is: if this were coming for stage 3 today, would it meet the criteria? And if not, then 2.7 is fine.

JRL: Okay. We are not going to get through this, oh everyone is trying to do plus ones. That's good. Plus one, end of message for 2.7. Plus one for 2.7 from I'm sorry, Olivier says plus one. PST says plus one. CDA says plus one indirectly. DMM says plus one. NRO says plus one. ZTZ says plus one. Is there any objection to moving this back to stage 2.7? Okay. I think we are in agreement then. And this is being demoted back to 2.7. We could discuss this further in a continuation later on or we can do this during the break, hallway track is great for that. But right now, we are on break. Coming back in 19 minutes at 3:20 local time.

### Speaker's Summary of Key Points

* Engines raised concerns about incomplete tests, spec issues, and implementation complexity
* Committee discussed whether larger design changes may be needed later, with potential to move back to Stage 2 if necessary.

### Conclusion

Committee achieved consensus to move to take the normative PR removing the optional parameter and progressing to stage 4. There was some concern around engines not being able to utilize the parameter if they want to start doing so in the future. This wasn’t a blocking concern and enough of the committee felt re-adding the parameter in the future would still be possible.

* Decorators moved back to Stage 2.7

## Explicit Resource Management Stage 4 progress update

Presenter: Ron Buckton (RBN)

* [proposal](https://github.com/tc39/proposal-explicit-resource-management)
* [slides](https://1drv.ms/p/c/934f1675ed4c1638/IQDjZLjyE9fkTZ44676etOFmAUCjgDEmfIZfck6hitrBRVE?e=AykGHf)

RBN: All right. So I wanted to provide a update on the current status of the explicit resource management proposal. Which has been in a kind of conditional stage four state for a bit. I believe that we've met all the conditions and we'll be advancing. We'll get to that in just a moment.

RBN: So just a brief overview of what's in the proposal. Includes the using and the weight using declarations. Which is RAII style initialization of resources. This is “resource acquisition is initialization”. The idea being that when the resources are allocated at the point where they are declared. They are tracked until that declaration falls out of scope. And then they are released. To perform that logic for the release of the resource. You have either the `Symbol.dispose` and `Symbol.asyncDispose` methods. Which is a protocol for defining methods on an object that can be tracked using these declarations. In addition, we have the `DisposableStack` and `AsyncDisposableStack` container classes. These provide for resource aggregation and interop with existing APIs that don't currently support the disposed syntax. Aggregation is particularly helpful for classes. And we also have `SuppressedError`, which handles error suppressions as a result for exceptions thrown in dispose.

RBN: So as I mentioned very briefly at the beginning. Our conditional stage four progress is we've finally finished all of the reviews. All tests for Test262 have been approved and merged. And we have approvals from all the editors. MF's approval was given to me offline. So there's nothing left on the ECMA-262 PR approval. There's, I think, a minor comment that we're still discussing that is not critical. That said, there have been a couple of editorial changes. No changes specifically to semantics here. These are mostly just editorial cleanup. In the last March meeting, we introduced a ContainsUsing AO to avoid the handwaviness of how we were disallowing `using` declarations in `case` and `default` clauses as well as at the top level of script. We switched that to an actual AO that does the same thing. And enforced those at those locations rather than at the declaration itself. It was discovered that the ContainsUsing AO is essentially the exact same. It's written differently but has the exact same semantics as HasUnterminatedUsingDeclaration, which is used as part of tail call analysis to determine whether a tail call is feasible. So we were able to merge those. We went with the ContainsUsing since it was a much cleaner name given that it's not just specific to the tail call support.

RBN: One of the other things that was changed was we had logic that would overwrite the `[[DisposableResourceStack]]` with a new empty list when it was freed. It was determined that this isn't particularly necessary. We have a note that indicates that these resources can be freed the main reason that I'd had it in was that DisposableStacks and AsyncDisposable Stacks can could hold onto that stack indefinitely even if those resources are disposed. But they're really unreachable since the disposable stacks clear out their space and mark themselves as disposed anyways. So it's still not observable within the runtime to determine whether or not those are held onto. So it's purely based on when the engine could choose to free them. So that's been left as a note.

RBN: We also removed the DisposeCapability record in favor of just directly storing or directly passing around the `[[DisposableResourceStack]]` in question. This was only necessary to pass the disposed capability around when we were wanting to overwrite the disposable resource stack when doing dispose so it wasn't necessary and removing it doesn't the change to rewrite this just to use `[[DisposableResourceStack]]` doesn't affect semantics. And apparently, we had an unused AO named Dispose that was we were no longer using after we had inline that functionality into DisposeResources when we were addressing the mandatory await when dealing with resources in an await using declaration. So all that cleanup has occurred. And again, with these, there's no semantic changes.

RBN: We did find one oddity in the semantics of the proposal. In that in AsyncIterator prototypes, the %Symbol.asyncDispose%. This method is intended to take the to accept a call for AsyncDispose and forward that onto the return method of the AsyncIterator. We found that we had unintentionally added an undefined argument to the return method. All other places where we do any type of forwarding to return or within any of our syntax, we generally allied the argument to return in those cases. So we had a request to consider switch changing to be consistent with the with other uses within the specification. However, all implementations currently pass undefined. We found there was no test for this. So we've added a test to cover this case. And because this would be a change to semantics, we are asking for a needs consensus change within the committee as well. One thing to note with this is that it's very unlikely that anyone is depending on this behavior specifically because this is the built-in asyncDispose method on the built-in AsyncIterator prototype. While it's not impossible to for users to write code that injects themself in between these two steps to observe this, it is highly unlikely anyone is depending on this. So it is possibly safe to do. But I'd prefer to get implementer feedback on whether we want to take consensus on this change. There is a test that's been written for this and approved. And the PR against the spec PR has also been reviewed by editors as well. So the only thing that require to get consensus on for this is this. So I'd like to go to the committee to ask for consensus.

CDA: Nothing on the queue at the moment. JHD?

JHD: Yeah. I think we should merge this change. I think that it is that's I think why I think we've changed this elsewhere in the past so that callers can determine if something was passed or not with `arguments.length`. So we should do that here too.

RBN: Yeah. If possible, I'd like to hear feedback from one of the implementers, as this is a change to implementation. If they would have any concerns.

CDA: Do we have any other support for the change? It would be a lot cooler if we did. DLM, did you want to speak?

DLM: That we support the normative change.

CDA: MF, did you want to speak? End of message. MF, supports the change. LCA, also supports the change. All right. Sounds like you have consensus.

RBN: Wonderful. Thank you. So as a result, the status is that we are no longer in the conditional stage. We are essentially stage four. I don't know if it would be worthwhile to re-request stage four considering the time since it was last requested. Other than the normative consent normative change that was just asked for, there's been no other normative changes to the specifications since we asked for the conditional advancement. So from a process perspective, I know conditional was kind of not exactly in the process. So I'm not sure if we have a particular preference here.

CDA: Yeah. No. I don't think we should do it. It would just be a formality. And the precedent is that conditional advancement occurs once the conditions are met.

RBN: All right. In that case, we've achieved all of the other conditions for advancement. I will merge this PR to the ECMA-262 #3000 pull request for resource management. Immediately after this, it is finished. And this will be stage four. I'd like to thank everybody that had a chance to look into this. I know that it took some time to get resources and people looking at the Test262 tests. We were very close in the March meeting. And we're glad that we finally were able to get that through. And I appreciate all the feedback and support from the ECMA-262 editors. To get the rest get this the rest of the way through. So thank you all very much.

### Speaker's Summary of Key Points

* Test262 Tests Approved and Merged
* ECMA262 PR Approved by Editors
* Needs-consensus PR to elide *undefined* argument to return method from %AsyncIteratorPrototype%\[%Symbol.asyncDispose%]

### Conclusion

* All conditions met for Stage 4
* Needs-consensus PR approved

## RegExp Buffer Boundaries for Stage 2.7 or 3

Presenter: Ron Buckton (RBN)

* [proposal](https://github.com/tc39/proposal-regexp-buffer-boundaries)
* [slides](https://1drv.ms/p/c/934f1675ed4c1638/IQBpJAD8CJutTpZ3x70Mr8C6AQ6Z26p2_nowaDED0_XQfRY?e=FLSMPe)

RBN: All right. So I will be bringing back to discussion the regex buffer boundaries proposal. I last discussed this in the March meeting. But at the time, it was a little late addition. So there was not enough time for review. So bringing it back now. The motivations for the buffer boundaries proposal are to allow the ability to match the start and end of input regardless of whether multiline mode is set. So it means that you can mix within the same regular expression. The start of input and the start of the line end of input and end of line. Without complex modifiers grammar. But it is important to note that this is now essentially just a syntactic sugar over the modifiers grammar. So all implementations that implement modifiers are theoretically capable of implementing this fairly easily.

RBN: So the idea is that the simple sequence to match the end of the input which allows an optional line terminator—I think I forgot to remove this in the last one. This is a feature that was considered and actually pushed back against early on. I do want to discuss potentially bringing that back in. As I discussed back in March, but it is not a requirement.

RBN: One of the main reasons that we want to have this proposal is that it helps to improve portability and reuse of regular expression syntax across different languages. And that is not only because it's advantageous to be able to reuse these capabilities and be able to share documentation but it's also very heavily used in offline formats.

RBN: TextMate grammars and editor configurations build tools often use JSON and YAML files to define regular expressions that are then parsed by different implementations on in different platforms that all share the same standard syntax. So being able to leverage more shared functionality between regular expressions without having to find least common denominator approach, or what tends to be in use today in tools like Visual Studio where they have to leverage or have been leveraging node bindings for native oniguruma which is a now archived project there are oniguruma translators that transpile oniguruma regular expressions into JavaScript regular expressions that are that are unfortunately expensive to run due to the overhead of the parse step. So the more that we can actually bring to the native support for regular expressions the easier it is for these tools to interoperate.

RBN: The basic syntax of the proposal is that when not affected by the multiline flag, the M flag, that these two specific patterns match the begin and end of input. So inside the outside of the multiline flag, the ^ and $ anchors are intended to match the begin and end of input. However, when the multiline flag is enabled, these match the begin and end of an individual line. So this proposal adds the \\A zero width assertion which matches the start of the input. And the \\z zero width assertion that matches the end of the entire input. To use these would require the /u or /v flags. And the reason that that's a requirement is that Annex B regular expressions allow non-Unicode patterns to match slash character as an escape of any character. Outside of Annex B, it would be reserved and we could theoretically use it. But due to the presence of Annex B, these patterns already have a meaning that would be we would not want to make ambiguous.

RBN: However, within any Unicode flag, the /u or /v flags these are currently a syntax error as they as those flags require a very specific list of character classes and escape syntax. This is not supported within used to find character classes. So you cannot use the \\A \\z inside of the bracket notation since these are zero width assertions. It is nonsensical in those cases. To use them there is prior art for this capability across almost every single JavaScript engine at least every one that I've looked at. So Perl, PCRE, Boost regex, .NET, oniguruma, hyperscan, ICU. etc. And as I mentioned earlier, the semantics are now achievable with modifiers. And this is essentially now just syntactic trigger that ensures better portability. The spec text is currently dead simple. This is basically it. You return a matcher that just matches the begin and end. So it takes the same semantics as the $ and ^ but removes the condition that checks whether or not you're in the multiline flag.

RBN: Some brief examples. So without buffer boundaries, you can match the begin and end of the entire input. But it doesn't match “foo” a multiline location where there's a line terminator for `re2`. You can see where with multiline enabled, then it matches both of these strings so you're in the second case, you can't just match the begin and end of input. You can do this again with modifiers using modifiers are extremely valuable but can be opaque and this is an example of where that opaqueness makes it very difficult to rationalize over them. So the advantage of these is as you can see on the right-hand side that you can use the exact same syntax both in and out of multiline mode without any concerns.

RBN: There's just some more examples here of being able to mix buffer boundaries if you have a reason to do so. That might often be the case in a TextMate grammar, for example, where you're trying to differentiate between syntax that is at the that self-terminates at the end of the line. Your language like say Python or Go that generally does not use semicolon terminators for expressions. And uses white space in Python's case uses white space as a for bracketing and nesting. So being able to actually match in an input when you're looking for specific strings can be very helpful if you're having to mix and match.

RBN: One of the things that we removed support for was the \\Z modifier syntax. We dropped support for it back in 2021. You can implement this as a modifier today. If we did decide to reintroduce it would be again reserved in /u and /v modes it is and if we don't decide to introduce it is still reserved in /u and /v modes based on how those work. We would like to consider reintroducing \\Z as it is a as is essentially just syntactic sugar the main rationale to do so is again to avoid the complexity of the modifier syntax while being able to benefit portability especially when it comes to things like TextMate grammars and the like that parse text documents where it's often the case that you'll have a trailing line terminator and you'd like to be able to match those cases as well. So we will seek advancements, but before we do so, we'll speak to whether or not we want to consider this \\Z as an additional option again.

RBN: I will go over the current status before we talk about advancements. On the slide here, you can see links to explainer, the specification text, the Test262 tests which have already been written and approved, an implementation for engine262. This has been reviewed by designated reviewers, as well as CDA was happy to review as well. It's currently at stage two. So before we seek advancement, I would like to go back to the \\Z and seek potential for introducing this as a feature or whether or not we should seek advancement as a separate or as a follow-on proposal.

CDA: I just have a clarifying question. I don't recall this from last time. Is this new?

RBN: No, this was in the original stage one proposal.

CDA: Right. Last time.

RBN: It was in stage two. But this was before modifiers were introduced. So I'm seeking consensus to reintroduce it. The main reason for this is that the motivation for this proposal changed slightly since the capabilities already exist within the language. The motivation for this proposal has shifted to portability so that we can leverage existing regular expressions and regular expression syntax that comes from outside forms that are used across tools in the ecosystem. TextMate grammars, build tools, et cetera. That many in many cases are already using this and then JavaScript is at a disadvantage when it cannot leverage the syntax that's already been introduced.

RBN: There is also a bit of an inflection point now that oniguruma has been archived and is no longer actively being developed. In that tools that currently use it are seeking alternatives. Especially those in the JavaScript space that have been using the Node native bindings for oniguruma and are now having to look at tooling, like there is an oniguruma JavaScript transform. and polyfill that exists today that allows that syntax to work with some heavy overhead. So the goal has shifted a bit to be ensuring portability so that we can actually leverage these tools and use native regular expressions within JavaScript without having to use the significant overhead of third-party libraries to do something that is relatively simple.

CDA: Okay. Thank you. I added myself on the queue again just to support backslash.

RBN: So I'll go back to the question. I'm seeking support for reintroducing the \\Z syntax for the purpose of portability.

CPC: Just wanted to support the proposal both for advancement and for \\Z. I think it would be really nice to have that. And I don't see any downside given that it's really emulating modifiers with better syntax.

CDA: Great. We also have MF on the queue with plus one support for \\Z.

RBN: Yeah. I will note that the specification text does not currently include this as I've written. So I will have to make modifications to advance that. So advancement for from two and beyond would be conditional on these changes making it in. But otherwise, the /A and /z should already meet the bar. So as I'm now going to this, I'll be seeking advancement to stage two seven. With the spec text as is at the very least, conditionally with the but conditional advancement to two seven with the changes for \\Z which are fairly minimal. So it shouldn't take too long to put them back in.

CDA: All right. I'm on the queue with I think it was from the previous meeting where you brought this. And it was a late agenda addition. And sort of not considered basically on that basis. And I think it was from Mozilla that was hesitant about it. So I'm curious if they don't mind. Chiming in on support or not for this proposal advance. DLM.

DLM: We don't have any concerns about this.

CDA: Sounds like support to me. Let's see. Next on the queue. It's me again. Support stage 2.7 and 3. MF is on the queue with +1, support stage three or 2.7 if we add \\Z. And then OFR is a simple plus one on the queue.

RBN: All right. So what I believe I will do here is that so we know that two seven is acceptable as it appears from the people chimed in. I was going to seek advancement for stage three as well once we'd reach two seven. Given that tests are written. However, as MF mentioned in his comment there, we do not have a test for the \\Z that needs to be introduced. So I'm happy to bring this back in the next meeting for the stage 3 advancement. Since it doesn't really make sense to add a conditional advancement for something that's the whole purpose of that stage is the tests are complete. So I will be happy to make those changes. So it sounds like stage 2.7 is accepted?

CDA: Do we have any objections to stage 2.7? Seeing nothing. And you had plenty of support earlier. So I believe you have 2.7.

RBN: I'm not sure how much capacity or unused capacity we might have in the agenda. But if there is time to put the rest of the spec text up for that and put it on the and the tests if there's someone able to look at it, then hopefully I might be able to put it back on before the end of the committee if there's any open time.

### Speaker's Summary of Key Points

* Proposed `\\A` and `\\z` for advancement to 2.7
* Proposed re-introduction of `\\Z`
* Spec for `\\A` and `\\z` written and approved by reviewers/editors
* Test262 tests for `\\A` and `\\z` approved by reviewers

### Conclusion

* Consensus to re-introduce `\\Z`
* Consensus on conditional advancement to Stage 2.7 pending inclusion of `\\Z`
* Will follow up with potential Stage 3 advancement by Thursday

## isTemplateObject status update and possible withdrawal

Presenter: Jordan Harband (JHD)

* [proposal](https://github.com/tc39/proposal-array-is-template-object)

ZTZ: I joined to look at the `isTemplateObject`. And it seems like there is no good way for it to work across realms. So the way the proposal defines it would be a way to check whether the engine observes a string that is being passed into it as a string that could not have been dynamically created by a potential attacker who has found an XSS vulnerability. The problem is there are multiple ways available in the browser to create a new same origin realm that is synchronously available where one can create a string with the code that goes into the realm as the original source of the page being displayed in an iframe in this case. So for an iframe you can set a srcdoc which will create a string that would be considered non-dynamic and then you can pass that string back into the original realm in which you have the XSS attack running. So this would only make sense if it applied to same-realm strings specifically. And it would introduce an identity discontinuity between string primitives within the same origin coming from different realms. That's as precise as I can put it, I think.

ZTZ: So the question is, would we want to put such contraption into the language? And is there still interest in basing the trusted types on that?

JHD: If so, and to add some context as well. So there's two issues I wanted to talk about. So one was filed by MM earlier this year which is this proposal advances than they are going to have some difficulty with some of the secure ECMAScript transpilation they do. MAH, if you think you're here, if you can speak more to that, that would be great.

JHD: Then the other issue is RGN’s issue here that the proposal seems undermotivated. So in other words, this section right here that trusted types policy functions or capabilities. And so simply don't pass untrusted input into them. In other words, the implication then would be that you don't need this functionality at all. And then in general, as to what ZTZ was talking about, same-realm versus cross-realm, it is very rare and weird when things like this are same-realm and so there's some aesthetic design considerations as well.

JHD: So I guess the question is if nobody has any thoughts or feedback, and given the lack of implementer interest on the web for pursuing this, meaning they haven't—if this is something that's needed for trusted types, I would have expected a lot more requests for what's going on. Why can't we have this? In the number of years. So it's kind of seems like they don't need it. Is there any reason we shouldn't withdraw it? Or put another way, is there consensus to withdraw it? Pending future interest.

ZTZ: Could we have a comment from someone from V8 maybe?

CDA: There's still nothing on the queue. All quiet on the queue. Well, hang on. There are some topics entering which I will wait for KM.

KM: Yeah. I don't have any concerns with removing it. I don't have strong opinions on it either way, basically. Yeah. We can implement it if it goes to stage three. If it goes away, it's also fine.

CDA: All right. RGN?

RGN: To no one's surprise, I'm in favor of withdrawal. And I’m voicing that explicitly.

CDA: Thank you, RGN. That's it from the queue at this point.

JHD: Okay. So it sounds like we have consensus to mark it inactive. And the reason I'll put in the proposals repo is insufficient implementer need and interest, combined with realm-related concerns. Okay. Thank you.

CDA: Great. There is a clarifying question from EAO.

EAO: just wanted to check. Is inactive the same as withdrawn?

JHD: Inactive covers multiple categories. One of which is withdrawn. It could also be rejected. It could be it's whatever words I happen to have typed in there. But yeah, basically any proposal that is dead for reasons and then there's a column to be more specific about the reason.

AKI: Taxonomically stressed out.

CDA: But this one is withdrawn.

JHD: Yes. This one I'm going to mark as withdrawn. Yeah. If someone comes back and there's implementer need and/or interest, then of course it could come right back and that will be implied hopefully by the text.

CDA: Yep. Cool. Thank you. All right. I feel like the third time is the charm here.

ZTZ: I wanted to state for the record that if this proposal was to be revised, I believe it would rely on introducing some realm initialization controls that were rejected in W3C over a year ago. So that would complete a jump through all of the web standards committees, potentially. To get this feature in.

CDA: All right. Thank you. Second.

### Speaker's Summary of Key Points

* same origin realm concerns push towards unfavorable design constraints
* little activity around the proposal
* possible dependence on realm initialization controls in web standards

### Conclusion

* We have consensus to mark the proposal inactive. Reason: insufficient implementer need and interest, combined with realm-related concerns.

## Intl: Keep Trailing Zeros for Stage 3

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/tc39/proposal-intl-keep-trailing-zeros)
* [slides](https://docs.google.com/presentation/d/1KOZTgBj7vTCK8eZucAPfeqvvlnKdU4_Sc35bp3zVoKI/edit?usp=sharing)

EAO: Intl: Keep Trailing Zeros is a relatively small proposal I'm hoping to get to stage three here. As you may recall, this is changing some of the internals of `Intl.NumberFormat` and `Intl.PluralRules`. That is affecting only the behavior of these APIs. When you are formatting or selecting on a value that you give it as a string, and specifically the formatting of number and BigInt values would not change at all and the behavior of the existing options would work as before.

EAO: So what we are here changing is that when in this case, we have an `Intl.NumberFormat` instance that we are creating with a minimumFractionDigits count of one. There is an implicit default maximum fraction digits of three. And so specifically the second `nf.format` call there, when we are formatting a value that we give as 1.00, we would end up with 1.00 in the output as well. Or in the third format call there, 1.0000 with more precision than what we have in the formatter, we would end up at the maximum precision there.

EAO: This has been discussed a bunch of times and the last time it got stuck on proceeding from Stage 2.7 to 3 was a couple of detailed concerns coming from the editors that have now been addressed. One of these ended up prompting this editorial change which would introduce into the ECMA-402 spec a named “Intl MV Record” rather than the implicit definition we currently have in the ToIntlMathematicalValue AO description. Not expecting any comments or so on on this. And this has been approved by RGN and SFC who are the two reviewers for this proposal.

EAO: Then the bigger change that was identified as necessary is the behavior of what happens when we end up formatting some value—whether it starts from zero as a representation of zero or some other very small value—as a representation of zero. And the conclusion we ended up previously coming to is that the precision ought to be retained, so when you look so here if you look at the `nf.format` call, the change that PR #19 does to address issue #15 that SFC raised in his review was that we ought to be ending up with the precision of 0. the maximum fraction digits representation effectively in most cases. And to affect this, PR #19 adds a `[[StringFractionDigitCount]]` internal field to the Intl MV Record which accounts for the exponent that we are applying. This PR also has approval from both of the reviewers.

EAO: The tests for this are in a test262 PR, which has been updated with the changes of the PRs presented here. And there's a polyfill that is available for this. And so I'm asking here, can I have stage three for this, please? And that's as much as I have. Happy to take questions or comments or discussion on the queue. Happy also to get support for stage three if we get no questions or commentary otherwise.

CDA: +1 to advance to stage three from SFC. Do we have any other support for stage three? We have DLM on the queue.

DLM: We also support stage three.

CDA: You're the same people.

DLM: We're technically in different parts of the organization.

EAO: And technically, I'm EAO. He's DLM.

CDA: Okay. Okay. Noted. I'll try to write this down in my brain diary. Support stage three from RGN on the queue.

CDA: All right. Do we have any objections to stage three? No objections? I believe you have stage three.

EAO: Cool. Thank you.

CDA: I assume there is clapping in the room. Hopefully.

### Speaker's Summary of Key Points

* The proposal and its open PRs #19 and #20 was presented. Both PRs have approval from the proposal reviewers.

### Conclusion

* The proposal got support for advancing to Stage 3, with PRs #19 and #20 merged.

## Temporal progress update

Presenter: Philip Chimento (PFC)

* [proposal](https://github.com/tc39/proposal-temporal)
* [slides](https://ptomato.name/talks/tc39-2026-05/)

PFC: Good afternoon, everybody. Hope you're having a great time in Amsterdam. I'm PFC. I work at Igalia. I'm going to present a progress update on Temporal, and we're doing this work in partnership with Bloomberg.

PFC: So you may remember that at the previous meeting there was a wonderful stage 4 advancement for Temporal. It's a huge proposal, so it's not a pull request that we can just merge into the spec from one day to the next. It's going to need a lot of review by the editors. So that's what we are busy with right now. There's a queue of things being reviewed by the editors. And Temporal is in it. In the meantime, there was a big fuzzing push by Firefox, and as part of this they found and alerted us to several assertion failures in the spec. So I'll be talking about those and some changes we'll need to make to address them.

PFC: But yeah, first, the plan about merging the proposal into the specifications. There's a pull request open for ECMA-262 and a pull request open for ECMA-402. These have been open for a while since before the previous meeting. While they have been open, we've received a lot of helpful feedback that's been able to be addressed as small editorial changes we've received both from the editors and also other helpful readers and people working on implementations. Especially like to shout out JWK implementing it for engine262 and also JHD who's been working on a polyfill. Every time you implement the proposal, it's helpful when people looking at it with relatively fresh eyes come back and say, "Oh, this was phrased confusingly," or whatever, and we can address that.

PFC: So I've been adding all that feedback onto the PR branches as fix-up commits. So that it's very clear what has changed in case your implementation is sort of following the spec exactly. I should clarify that: implementations do have to follow the spec exactly, but you don't always have to phrase things exactly like the spec does. However, some implementations such as engine262 do prefer to phrase things exactly like the spec because the purpose is validating the spec. That's what I mean by following the spec exactly.

PFC: Anyway, I've added these changes as fix-up commits so that it's easy to see what's changed. So currently, these pull requests are the source of truth for the proposal, and not the proposal repo. But when we merge these, I will sync them back to the proposal repo so that everything says the same thing. And then we'll archive the repo.

PFC: Let's talk about the issues that the Firefox fuzzing found. So these were discovered, I assume, by automated fuzzing. And they failed debug assertions in the Firefox code base which happened to correspond to assertions in the spec text. So yeah, let's put it this way, they were an implementation problem that also corresponded to a spec text problem. All three of these bugs, that you can click through if you're following this on the slides, they concern weird and rare edge cases in the time zone database. So there's a couple of things having to do with 24-hour time zone shifts, when a location decides to be on the other side of the international date line from what it was before. And there are historical examples of those shifts in both directions. And then there's another one with a research base in Antarctica deciding to shift its time zone backwards by three hours starting at 2 AM and ending up at 11 PM the previous day. So there's two discontinuous pieces of the same calendar day. That's interesting. There'll be more on that in a subsequent slide. These are the kinds of issues that the fuzzing discovered, which was very helpful.

PFC: Also, while investigating those, I found a further edge case for duration rounding, which there's another issue open for. So all in all, we have four issues to solve. Now, I think the chapter on notation in ECMA-262 says that assertion failures are editorial errors. But in order to address these, we have to add steps to the spec. So I don't think these are editorial errors, I think these are needs consensus PRs. And that's what we are treating them as.

PFC: These are still under investigation. We didn't yet have solutions for any of them at the time of the agenda deadline. Subsequently, we found fixes for two of them that I'm confident resolved the problem. So I put those in the slides after the agenda deadline. So of course, our process says that delegates may withhold consensus on those PRs solely on the grounds of being added after the agenda deadline, which is fine. We'll just bring them back in the next plenary. But since we have the fixes, we may as well present them now and see what happens.

PFC: All right. So there's one proposed fix for the issue with the three-hour backwards shift over midnight. So I made a cool little diagram here. What you're looking at is a timeline. Time goes forward as you move to the right. It's March 4th on a research base in Antarctica. Then the time zone is UTC+11. It's midnight, turns into March 5th. And then at 2:00 AM, they set their clocks three hours back. So then it's March 4th again at 11:00 PM. For an hour. And then it's midnight again and it turns into March 5th again. So these two red sections of the timeline, those are the same calendar day, but the pieces are not contiguous. And the problematic times are in this second red slice between the second 11:00 PM to midnight of March 4th.

PFC: So this caused problems in rounding ZonedDateTime to the nearest day boundary. We looked at this in the champions meeting and sort of thought, "Okay. What invariants do we actually want rounding a ZonedDateTime to the nearest day boundary to have even in complicated days like this?" And based on that, we think it's best to replace the failing assertion with capping the quantity to be rounded of epoch nanoseconds at the end of the first day. So this is a one-line fix in the spec. There's a diff up here on the slide. I wrote some extensive test262 tests for this and also added the case to our snapshot tests. So I'm pretty confident that this will do it.

PFC: Moving on to the other fix, this is actually a very simple fix. I think this was actually the subject of a normative change like a year ago. In duration rounding, we added a special case to avoid daylight savings shifts when at the beginning of a rounding window where we're computing the two possible durations to round to. We had a special case for where the beginning of the window was zero so that we didn't get a daylight savings shift there. Only that condition was faulty. We were just checking one component of the duration when we should have been checking the whole duration. So this is, again, a one-line fix that's now extensively covered by test262 tests.

PFC: That's what I've got. The progress update, the fuzzing issues—So there are four open, and two of them have solutions that we can potentially give consensus to these needs consensus PRs. And two of them we're still investigating. So I'd like to ask for a consensus on either of these two one-line fixes. And also take questions if there are any, of course.

CDA: Nothing on the queue so far, but I support the fixes. DLM also supports the fixes.

PFC: Oh, thanks for the support, both of you.

CDA: Nothing else on the queue so far? SFC is entering the queue.

SFC: Have you had a chance to implement this in temporal_rs, for example? In order to check the behavior? I assume you've implemented it in the polyfill.

PFC: Yeah. The polyfill that we're using for reference, that's how I test most of my spec changes. I have not implemented it in one of the other implementations.

SFC: Right. What's currently happening right when the engines hit this case? Because presumably, this is a reachable case. So you said you found it via a Firefox fuzzer. What is happening exactly in that case?

PFC: The answer is different for both of these PRs. So for this one, you can click through to the issue #3312 and then from there to the Firefox bug report. And I don't remember off the top of my head, but it's a debug assertion. So it's not present in release builds. So on the web, it produced a result that was just incorrect. I don't remember exactly what the result was in Firefox. And then I tested this in V8 as well, and it looks like temporal_rs implemented this assertion as a runtime error. So yeah, threw an exception in V8.

SFC: All right. Cool. And so the expectation now is that the garbage out behavior on one side and the exception on the other side will be resolved in these changes.

PFC: Right. So both of them should now change, and yeah, the method should produce a non-garbage result now with this change. So yeah, both implementations will have to change there. And then this issue, this was not an assertion failure. This was just something that was written down incorrectly in the spec. And so the implementations followed the spec and both produced the same wrong result. So that'll change to be a correct result when we make this change.

SFC: Okay. Thank you for the extra clarity.

PFC: I saw JHD had a reply.

JHD: The reply was in general that a number of the spec changes you've referenced today I have tested in my in-progress polyfill, which was written effectively in spec text. But this specific one I haven't yet. So that's why I took my comment off.

PFC: Oh, okay. Got it.

CDA: There is nothing else on the queue.

PFC: Okay. Do we need to formally call for objections or is this the consensus on the PRs?

CDA: To answer your question, you got plenty of support earlier. I would imagine if people had objections, they could speak up before or now. But failing that, I believe you have consensus for these fixes.

PFC: All right. Thanks, everybody. I've got a summary, which I'll copy into the notes here. And that's it. I think I'm within a minute of the predicted time box. So yeah. Thanks for listening.

### Speaker's Summary of Key Points

* Temporal is at Stage 4. Spec integration PRs are open in [ECMA-262](https://github.com/tc39/ecma262/pull/3759) and [ECMA-402](https://github.com/tc39/ecma402/pull/1044), awaiting editor review. These PRs are currently the source of truth for Temporal, but will be synced back to the proposal repo after being merged.
* Three assertion failures found via Firefox fuzzing ([#3310](https://github.com/tc39/proposal-temporal/issues/3310), [#3311](https://github.com/tc39/proposal-temporal/issues/3311), [#3312](https://github.com/tc39/proposal-temporal/issues/3312)) concern rare time zone edge cases. A fix is proposed for one. Fixes for the other two are under investigation and may require future needs-consensus PRs.
* A further edge case ([#3316](https://github.com/tc39/proposal-temporal/issues/3316)) was found in duration rounding with non-default rounding modes; a fix is proposed.

### Conclusion

* The two proposed fixes achieved consensus and will be integrated into the spec PRs.

## Decorators continuation: decorator metadata to Stage 2.7

Presenter: Jordan Harband (JHD)

* [proposal](https://github.com/tc39/proposal-decorator-metadata)

JHD: I just threw a point of order on the queue. So when we talked about decorators, we forgot that decorator metadata is a paired independent proposal. So I wanted to ask for consensus to move it to 2.7 as well so that the two of them continue in lockstep. Any objections to that, I guess?

CDA: Yeah. I know the stakes are low here. Oh, sorry. There's a bunch of stuff going on the queue. But all right. I started talking already. Stakes are low here. I think KHG is no longer here. Unfortunately. So it'd be great to have heard from her on this. I’m also looking at DLM on his thoughts since this was his topic to raise at this meeting. So this seems pretty low stakes. I would typically object to something that was not on the agenda at all. But I think that most people would interpret the regressing for the main proposal to 2.7 that this would naturally be covered as part of that. So yeah, I'm going to put DLM on the spot first.

JHD: Cool. And I just confirmed with KHG, by the way, on matrix. So.

CDA: Oh, great.

JHD; They should go together.

DLM: Okay. Well, that's good news. Yeah. I think that makes sense. I assume the testing situation will be similar. And not really testable without main decorators anyway. So I think 2.7 makes sense in this case as well.

CDA: Okay. There are some plus ones on the queue from DMM, EAO, and ZTZ. In addition to the other support you already had for regressing the sibling proposal. Are there any objections? All right. Hearing nothing, seeing nothing. Then I believe that means decorator metadata also goes back to 2.7.

CDA: I now see DLM entering the queue. Go ahead.

DLM: All right. I was just going to point out, I believe the reason these proposals were separated was because of implementer feedback. So this may also be an opportunity just to merge them back together. Something for the champions to consider, I think.

CDA: Fair.

JHD: My personal thoughts on that are that I think they were separated originally because they weren't necessarily going to advance together. And then they ended up advancing together. And it's probably not worth the overhead of merging them unless they do end up in the future moving back to stage two.

### Speaker's Summary of Key Points

* Proposals advanced together and should stay together
* Champion concurs

### Conclusion

* Decorator Metadata also moved back to stage 2.7, to align with Decorators itself.

## Error stack accessor for stage 3

Presenter: Jordan Harband (JHD)

* [proposal](https://github.com/tc39/proposal-error-stack-accessor)
* [slides](https://github.com/tc39/proposal-error-stack-accessor/issues/9)

JHD: So essentially, I had put on the agenda stage three. But didn't quite make it in time. Specifically, one of the three HTML integration PRs is not quite approved yet. I think it will be. I just have to work with Ana to fix some Git problems. My hope is that perhaps before the end of the week even, that PR can be approved and then the Test262 tests could either be merged or stage three could be conditional on merging them. So if but yeah, essentially, this proposal is otherwise ready to go. So my request now is if anyone has any reason why they wouldn't approve stage three once these two checkboxes are checked, the merged test262 tests and the final HTML integration PR, please do let me know. And otherwise, I intend to come back if we can squeeze in a couple of minutes later in the week and still ask for stage three.

CDA: DLM.

DLM: Quick question about the tests. Have they been reviewed? I'm just waiting for someone to merge them. Or is there still some review work required?

JHD: I don't believe they've been reviewed yet. But it's not really it's more the approval than the merge that I think is important. But either way, both would be required, I would think, for stage three to be satisfied. But that feels comfortable to me to do a conditional approval on personally and others.

DLM: Yeah. And I think I'd prefer not a conditional approval. But if they can be reviewed this week, we don't have any other concerns, so.

JHD: Great. So yeah, then that's the end of my topic for today unless anybody else is on the queue.

CDA: RGN is entering the queue.

JHD: Oh, okay.

RGN: Yeah. I'll be reviewing the tests this week. So that should be done before this meeting ends.

JHD: Wonderful. Thank you, RGN. I think that's it with my topic then.

CDA: All right. There is nothing currently on the queue. So you were asking for stage three?

JHD: I was planning to squeeze in a few minutes later in this week in which I will ask for stage three. But I'm going to answer it right now.

CDA: Gotcha. All right. Thank you.

### Speaker's Summary of Key Points

* Tests being reviewed
* HTML PRs approved

### Conclusion

* Will revisit later in the week; see continuation on day 3.

## `export defer` Stage 2 status update

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/tc39/proposal-deferred-reexports/)
* [slides](https://docs.google.com/presentation/d/1uYgMUqz5bZT3wwPARnyq7GrJlWFesIrmoCJA1iDH3W8)

NRO: Okay. So this is a stage 2 update for `export defer`. I'm going to co-present with CLA, my colleague, who since a couple of months ago is a new champion of the proposal. So since last time we talked about export defer, which was probably in January, we found some major bugs in the proposal that have been fixed.

NRO: One of them very similar to how a couple of months ago we fixed a bug in `import defer` where, due to internal usage of %Promise.all%, we were accidentally exposing the `[[TopLevelCapability]]` Promise of some modules. `export defer` had in a different code path the exact same bug, and we fixed it by reusing the new safe PerformPromiseAll AO that was introduced in the `import defer` proposal to do this spec internal way to multiple Promises without accidentally exposing them to user code. I'm not going to ask for consensus for these various changes because we're in stage two, and they're all just clear bug fixes.

NRO: Second bug fix, since then, was that we fixed the interaction with `export * from` and `export defer`. So when you have an export defer from a module that has a bunch of different experts, before we would before this fix, we would get in a spec state where some internal assertions were violated, where we were in some places expect some bindings to be reachable and other places the same bindings to be unreachable. The behavior we picked here was that is that `export * from` just eagerly loads everything because it's kind of referencing everything. That's something that personally I'm still on the fence about. So I will probably come back next meeting with something related to this. If you have opinion about this specific interactions, please feel free to get on the queue.

NRO: This solution is equivalent to saying `export * from` is just `export` and then you list all of the bindings exported from the module. Just a note that `export defer * from` does not exist because the behavior of export defer so in this example, at the bottom of the slide, will be that lib.js is only loaded if needed, but we cannot know if lib.js is needed until when we know what it exports and so we need to load to load lib.js to even know what it exports in the first place.

NRO: Another bug fix is that when re-exporting through `export defer` and then importing those bindings through a namespace import, we were not properly validating that the bindings were actually resolving to that the re-exports were actually resolving to proper binding. So normally, when you have something like `export` a list of bindings from somewhere, when we see that export, we check that in this example on the slide here, `x` actually maps to an export of b.js. For `export defer`, we cannot just do that because when we are in this example here, analyzing lib.js, we do not know yet if we'll even load b.js. So we cannot validate yet at the time that b.js has the `x` export. And instead, we need to move this check to the import statement where we actually then know that `x` is going to be used. Import statements actually already do this checking. They check that if I import `x` from lib.js, lib.js actually exports `x`. There was just some missing step to connect the two sides.

NRO: Oh, and there is some edge case here where we can have multiple levels of deferred re-exports. Some of them might be namespaces. And so in cases like these, where we see the deferred export defer * as `ns3` from lib.js re-export, again, we do not know if we can validate in namespace yet that whole namespace will need to be validated later when somebody actually does an import `ns3` in this case. There is a little bit of spec complexity around this where technically in the spec, the easiest way I found to specify this is by doing some validation the first time, the binding is accessed, but I check the various browsers and at least for all the three browser implementations, it is possible to implement it in some simpler way without this sort of on-first binding access because the timing in which bindings are created in the spec and the browser stands actually much.

NRO: We also updated README for the proposal. You might be interested in rereading it. There has been some clarification. GB opened up a request for this, about how `export defer` namespace imports interact. Before it was just in the spec text and not actually explained the README. We also expanded, well, we added a section about how the use cases for export defer and packages and exports somewhat overlap, but they have a lot of separate use cases. So they actually complement each other. There are some examples of popular libraries that already use package.json exports in Node. And they use patterns today that would at the same time benefit from export defer while using the two features at the same time. So that was minor updates. There is now larger update that CLA is going to present where. He would like to again, it's just stage two, but we'll kind of like to ask for consensus into updating the proposal this way.

CLA: So just a bit of history here. So in January 2026, the proposal was somewhat blocked by the issue of mixing `export defer` and `import defer *`. And the reason is because of the namespace. Specifically, so the thing is that the expectation is that import defer introduces some improvements on loading because things are going to be lazily loaded. On the namespace access. And for export defer, you also get some improvements on either loading and also tree shaking. But when you mix the import defer * in S and export defer, actually, you lose the tree shake. So thinking in a program where the user already placed the export defer and then import defer on the other side, we would have this cliff on the at least on the loading part. And this was somewhat a trouble. This is a problem with anything that actually requires namespace access. And this happens with import defer because import defer just happens on namespace as well. But it's also a problem on dynamic import. So we presented a possible solution. I think we discussed three solutions back in the time. And right now, I'm going to present probably what's the idea of the champion group here. And ask you for consensus on that.

CLA: So we got a couple of feedback given from delegates. So the first one was actually from plenary in general. Is that there was no concern on defining the solution of namespace import, import calls, everything to be loaded. And there was some concerns on any solution that can cause racy conditions. And global. And one of the solutions that we were discussing is where not loading as default export defer statements. And I think we got also feedback from TG3 meeting where if we have different importers, they should not give side effects and affect each other in the loading evaluation order. Such kind of things. And also, we got some general positive feedback on allowing more explicit way of expressing what's going to be loaded from a given module as well. And there is a stronger requirement from TG3 is that it's going to be clear for you afterwards. But if we have a syntax that looks like it's going to create a new object, those objects should be created as new objects every time. And this is related with not caching some namespaces in this new case we are going to present to you as well.

CLA: Okay. So now I think it's going to make more sense. But the proposal is to actually going forward with this new syntax and also the semantics for that, where we are able to select from the namespace what's going to be included in the namespace whenever you are importing it from a model. So in this case here that we have `import { foo, bar } as obj`. And what we are actually creating here is a new namespace object that is just going to include the export, or what's being exported, named `foo` and `bar` only. And we are calling this filtered namespaces. And the difference is that we are not caching this per model. So whenever a model imports in this syntax here, we are creating a new namespace object. For that. So we have draft spec text for that in this pull request #9 in the proposal repo. And I think this is just explaining what I just said, right? Yeah.

CLA: So the idea of creating this new object is satisfying the TG3 requirement that we're not caching some things. It actually avoids some implementation burden of creating a cached key sorted list names where we would need to sort the list names to figure out if this namespace object was already created or not. And we are also deciding to not support aliasing the names of the keys here. Because there is not really a situation where you can actually have collisions whenever creating a namespace. Because the namespace itself is going to prefix every access to the export anyway. So there is no need to have an aliasing support here.

CLA: So here's what actually this means. The idea is to support the exports. So `export as` is going to be supported as a filter namespace. Import defer also will be able to support. And this is specifically the case where we would like to solve when mixing export defer and import defer. And export defer full bar as object also would be supported on that. So there is oh, yeah. The thing here is that export as namespace actually creates a local binding into the module. So it feels it actually kind of reflects what we do for the full right now, the full values right now. Where we create this special value called `*default*`. So this here is also to satisfy the thing that whenever we export that, we are creating a local object into the module. And placing into this special binding. So whenever other models import those reexports, they are going to see the same identity.

CLA: And there is also something that we discussed here is just is actually to keep star as all importing everything. And the reasoning is because star already means all today. And it wouldn't we want to we wouldn't like to break expectations from developers in general. And also, it makes the adoption of the feature way better. Because right now, if you place export defer, in some of the modules, import * is still work. It will still see the deferred re-exports happening there. And if we didn't include those basically applying export defer would be a breaking change anyway. So yeah. Here is the thing that we would like to get feedback from you. I think it's time to go to the queue to answer questions.

NRO: Actually, there are a couple more slides. Just go through them. We're also been doing a couple of other things. With the goal of making sure that by when we ask again for stage 2.7, the proposal is in the best possible state. So we've been working on test262 tests. It is technically a little bit early, but they helped already uncover some bugs. And extremely useful that we have now an engine262 implementation of this. So if you want, you can actually already play around with the proposal. And again, this is useful this also uncovered other bugs in the proposal we actually just found one today that we'll need to fix. And it's very helpful to be able to put this together with test262 to make sure that what we've wrote in the spec actually matches what we want to happen. And yeah, we can go through the queue now.

CDA: JHD?

JHD: I was just curious. So if I do `import {}`, meaning I specify nothing, `as object` from a module, do I get a namespace object that the only property on it is the toString tag? Yep. So currently, I can side effecting import a module, any module. But if I want to import it with a binding, it must export that binding. It must export that thing. And I'm even though you mentioned that the deferred stuff can't validate at syntax time, presumably at runtime, it would fail if the import didn't exist, even if it was deferred. Maybe that's a separate clarifying question. But if I do import defer nonexistent from module, will that eventually throw?

NRO: I'm not sure I understand the question. Are we talking about–

JHD: So I have two questions.

NRO: Lengthy thing or a thing with a nonexistent binding?

JHD: Sorry. So the first question is, if I. A nonexistent thing.

NRO: Yes.

JHD: Will it end up in a error eventually?

NRO: Yes.

JHD: Okay. So this what this means is if I specify a thing to import, every part of the language it will error if that's not imported, which means that if I mean to do a side effecting import, I have to omit the bindings to guarantee no error. Now I can put the empty curly braces, even if it exports nothing, and that will be the same as a side effecting import. Is that correct?

NRO: It will behave the same as `import {} from`. All the same validation happens there, but you also get this object with no properties on it.

JHD: Ah, okay. Right. So I had forgotten that. So currently, if I do `import {} from`, then that also works even if it exports nothing. So it's the same semantics. Okay. Thank you. That's clarified.

NRO: Okay. So next is me, because I got some feedback recently. And I didn't realize I was going to present today, so it's not in the slides yet. But I talked with a couple of bundlers people about this change to the proposal, the one about filter namespaces. They are interested in it with the reason that not for the rest of export defer. They're interested in this change just on its own merits because it makes it easier for them to do tree shaking also at bundle time. Right now, when you have namespace imports, it gets difficult for them to tree shake because well, you might be accessing anything from them. So they would actually be happy to have a way for the users to be explicit about what they need.

CDA: LCA.

LCA: Okay. Yeah. So I am very supportive of this. I think this is the right direction. I think this completes the export defer / import defer ecosystem, the module system well. It I think there's basically no edge cases left where there's things that you may want to do that the module system does not let you do because there's no syntax for it. I mean, there's obviously always exceptions. But we get much closer, there's much fewer things that you will commonly want to do. And I think what I particularly like is that it makes it very easy for libraries to just slap export defer on their barrel files, and for anybody who cares that will be an improvement. Just by the importer also switching to import they can still switch to import defer with the filtered what are they called? Filtered namespace imports.

Jacob: end of message plus one.

ZTZ: This might be totally speculative. But is there a way to apply this to dynamic imports? And do you plan to explore anything like that?

Yeah. So actually, it's a plan. We don't have the spec for this yet. But I don't think the spec is going to be more complex than the thing we are doing right now anyway. We just need to decide how the property bags probably should be looking like. But it is to support that on anything that you can get, like a namespace out of, which includes either import or import defer. So it would go on the second argument of the import next to the attributes.

NRO: Yeah. The second argument is going to have a new property other than width that property will probably be an array of strings. The we on purpose never showed an example of those in the slides because we were worried it would just get derailed by discussing the name of the property. But given that the queue is empty, if anybody has opinions about what the property could be named we have time for that. Otherwise, I personally would go with filter. But names could also be an option.

JHD (on queue): There should be

CDA: All right. Nothing else in the queue.

NRO: Then yeah, we will merge it per request. We'll need to do more work for dynamic import part. We will probably present again at the next meeting just with the whole thing, including dynamic import.

CDA: And update the implementation and tests, right?

NRO: Yeah. Thank you all.

CDA: Thank you. All right. I think that brings us to the end of day one.

### Speaker's Summary of Key Points

The speaker did not provide a summary.

### Conclusion

The speaker did not provide a conclusion.
