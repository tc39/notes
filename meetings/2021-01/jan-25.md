# 25 January, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Ross Kirsling        | RKG            | Sony               |
| Ujjwal Sharma        | USA            | Igalia             |
| Waldemar Horwat      | WH             | Google             |
| Bradford C. Smith    | BSH            | Google             |
| Krzysztof Kotowicz   | KOT            | Google             |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Ron Buckton          | RBN            | Microsoft          |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Rob Palmer           | RPR            | Bloomberg          |
| Robin Ricard         | RRD            | Bloomberg          |
| Daniel Ehrenberg     | DE             | Igalia             |
| Jason Williams       | JWS            | Bloomberg          |
| Philip Chimento      | PFC            | Igalia             |
| Chip Morningstar     | CM             | Agoric             |
| Caio Lima            | CLA            | Igalia             |
| Devin Rousso         | DRO            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Michael Ficarra      | MF             | F5 Networks        |
| Jordan Harband       | JHD            | Coinbase           |
| Dan Clark            | DDC            | Microsoft          |
| Leo Balter           | LEO            | Salesforce         |
| Jack Works           | JWK            | Sujitech           |
| Mary Marchini        | MAR            | Netflix            |
| Guilherme Hermeto    | GH             | Netflix            |
| Kaylie Kwon          | KK             | Netflix            |
| Cam Tenny            | CJT            | Igalia             |
| Frank Yung-Fong Tang | FYT            | Google             |
| Shane Carr           | SFC            | Google             |
| Shu-yu Guo           | SYG            | Google             |
| Justin Ridgewell     | JRL            | Google             |
| Zibi Braniecki       | ZBI            | Mozilla            |
| Istvan Sebestyen     | IS             | Ecma               |
| Rick Button          | RBU            | Bloomberg LP       |
| Yulia Startsev       | YSV            | Mozilla            |
| Chengzhong Wu        | CZW            | Alibaba            |

-----

## Opening, welcome, housekeeping

AKI: All right, good morning, everyone and this time it's actually morning for me. I'm not just saying good morning, and it's like 2 a.m or something here by opening the 80th meeting of tc39. We should be in Los Angeles, but we're all at home. Hopefully. I hope everyone's at home. Hopefully someday, we'll actually get to go to the Netflix office in LA because it is gorgeous and the views are fantastic. Welcoming with me our fellow chairs of 2021 which includes myself in the middle left to right is Brian Terlson, Robert Palmer, (wow we all really look like ourselves as children) and we have our - chair Emeriti I think was the term of I settled on - Yulia and Myles. If you're here, you probably filled out the entry form. It is a part of the ECMA bylaws that we keep attendance at meetings. So if for some reason you manage to get into this meeting without filling out the entry form, please make sure to get the link from reflector and sign in. This is not optional.

I want to start today by addressing our code of conduct. It's available in the footer of our websites. And anyone participating tc39 activities is expected to be familiar with it and to abide by it. If you have any concerns, if you think perhaps there has been a violation of the code of conduct, there are a lot of different ways to get a hold of the code of conduct committee. Most of them are explained in that page on the footer of the tc39.es website. You can also also email the code of conduct committee at - No, I forget what email address is off the top of my head. It's also listed there. There is a clear process for how we handle a code of conduct violation. I think it's really important to indicate that so that people know that there's not any sort of - Sorry, I can't think of the word right now because it's early and I haven't had my coffee. Anyway, there is a clear process you can expect when going through the code of conduct process.

We're all Pros at remote meetings at this point already, but not everyone is used to Teams. So I'm going to let you know right now that you shouldn't use the hand up button in teams and and now meat and also of course we have the tcq a special place for for having your voice heard. I don't know if the agenda is fully in tcq yet. I did not put it there yet because I'm doing this instead once we we have the agenda added. You can look at the queue and in this queue you have an opportunity to see what's being discussed in Greater detail. Clicking new topic allows you to start a new conversation about what's going on discuss current topic allows you to respond to this specific Topic at hand. Do not use that unless you very specifically have a response. Otherwise use a new topic clarifying question will bump you to the top of the queue, but it should only be used for clarifying questions that cannot wait things that are really germane to the to the conversation or will help people to understand the contextualize what's going on. using the point of order most frequently is for reasons that absolutely must help conversations such as the note takers need and need assistance or there's something wrong with the call or something technically is gone wrong. When it's your turn to speak you'll have an "I'm done speaking button" added to your view. Click that when you're done. There's several IRC channels. They all have their purpose but two in particular tend to be super active during meetings the #tc39-delegates channel for generally speaking the topic at hand. Definitely. That's where all technical discussions go. It is moderated, which means only delegates can participate. However, it is public which means anybody can read those logs and any technical discussion of any kind should be kept to publicly lot of channels like to Spring a dog gets. We also have Temporal Dead Zone, is because me, which is where your shitposting goes. I encourage all the sass. That's cool. Just keep it there and avoid talking about anything that is actually relevant to the work that we do. This is what the hubs looks like. This is our hallway track since we can't be together in person anymore. This is a way of having sort of one-off conversations and wandering between conversations. It has proximity-aware audio so you can just sort of walk around to hear somebody talking about something interesting. This will be busy before after meetings and during the lunch hour because it's still an hour long, but that's a great opportunity to just sit and chitchat with your fellow delegates. We all miss each other. Let's remember to rehumanize each other on a regular basis.

Let's talk IPR or you know intellectual property rights. In order to serve in plenary. You must represent an ex-member as a delegate or be an invited expert there are exceptions exceptions to that. They to be pre-approved by both the chair group and the eccrine Secretariat. if you are an invited expert make sure you have signed to the RFTG. Royalty-free task Group Forum. You can find Details in the tc39 repo under contributing and this is really important important. Make sure your company's IP attorneys have reviewed this make sure they review it. Annually, I bring it to a few attorney attorneys to make sure that we're all still on the same page because this has a lot to do with how we publish and how we release the standard when it's done.

Let's talk notes. I would like to encourage people to step up and volunteer for note-taking right now. There will be four days of us gabbing in each other. Nobody is expected to take notes the entire time the people who do take notice the entire time are true heroes. Please consider taking notes for one or two sessions, especially if you haven't before. We do now have the transcription bot, which is so great and so note taking is reduced down to more of a editing capacity. Still high speed, but it's a lot lower stress, I think. if you have any questions about note-taking, please throw in the tcq and ask them and we will discuss. If you have been considering note-taking, but are unfamiliar, you should fire up the Google Docs that are in the reflector post and watch for a little while and see how it goes and then you can hop in and help.

Yes, there is a cat on the call. That's my cat.

Istvan: My best regards to your cat. So yeah, but he should also be on the participants list.

Okay. So basically this is the typical Secretariat report, so I will have here 15 minutes, but I will try to do it as fast as I can. So what has happened lately. I just will show you the schedule for 2021. It was already shown at the last meeting with one exception (December 2021 meeting) and then there is the tc39 management confirmation for 2021. I don't know whether it it will be done here or whether you will have a separate agenda point.

The new Ecma Website has been launched over the weekend. As usual when you are implementing a new website, you know, nothing works for nothing works. Last weekend it was suddenly switched on and then what we have found, immediately we have lost the access to the TC39 standard.

Then status of the liaison agreement with Calcom basically nothing happened, but I have also a slide on that and then there is a brief report from the December 2020 Ecma General Assembly.

So this is the on the agenda.
Regarding the recent tc39 meeting participation, 62 people participated remotely and 22 organizations. So as you see it is still quite quite high. So we have a very good participation so we will see how at this meeting it will looks like.

So then the next one so these are the standard download statistic for the entire year 2020. So what is interesting? The trend is absolutely the same as it has been in the past. So again, I will be very quick on that. So altogether the downloads of the Ecma standard 2020 67,000 and basically half of all the downloads they came from the tc39 standards and then here are the listed here. The quality of the PDF versions of TC39 standards are not good and something has to be done, especially on the Ecma 262. E.g. there are no page counters and then no working links within the document etc. Formatting is not nice Etc. I have complained about this for many many times. Then here are the access and the download statistics so you can see the access statistic. This is actually what is interesting for the tc39 development people and also like you it is much much higher. We still could not figure out why does it come that still the sixth edition has the highest level of access? But altogether in total, you can see 670,000 access and then these are the download figures for the different editions very much similar, what we have had in the past.

Okay, so regarding the approval schedule for ES 2021. So this is a repetition practically from my last presentation in order that we remember the important deadlines. The June 2021 GA is going to be in Switzerland - where the ES2021 will be formally approved. It would be a face-to-face meeting, but honestly speaking I question that as we can already see that the speed of the vaccination goes much much slower than expected in my opinion. This will be also a remote meeting - but this is just my personal opinion on that. We will see.

Okay. So what what are these two months that we in TC39 have to obey? The first one is the Ecma publication date of the final drafts to the Ecma membership. So in order to approve it on the 22nd of June we must publish it on the Ecma website on the 22nd April at the latest, but this is really the latest so we better should do it earlier. And second: the latest date for starting the so-called “opt out” is the same date and this is linked to the royalty-free Ecma IPR policy. During these 2 months Ecma members and non-members etc. can complain that there is some kind of IPRs included in the standard that you (as Patent Holder) don't want to have to give away royalty-free to the TC39 standards - because this is what is demanded by the royalty free pattern policy and your official representative should speak up if there is something wrong with that. In practice this has never happened so far. But we are working under this royalty-free acquire PR policy. So I also hope that it will not happen in the future too because to be honest if it happens that I don't know how we could fix it in time in practice. I mean what else we can do concretely to remedy that situation, but because of the IPR policy, you know, we always have to do this sort of “circus”.

Okay, regarding the approval of the year ES2021 specifications. So we have two possibilities. First is at the March meeting or at the latest also it would work with the April meeting. This would be the number three meeting. Letter ballot would also be possible, but I not recommend it. There we could decide how long that should go, usually two or three weeks and then we could do it. But so my real preference would be on the second or the third TC39 meeting.

OK the management confirmation. We have agreed that the last meeting that the proposed 2021 Chair Team would be confirmed at this meeting. What I have understood there is no modification on that. Nothing came in as a new candidature, so we could do the approval here and now or as a separate agenda point. It will be a separate agenda point.

New Ecma website: There is a “task” and “information sharing” between the Ecma Website and the TC39 maintained websites like tc39.es or tc39 Github. First, we should link the two. E.g. on tc39.es there are only links to the ES2021 drafts, but not to the approved ES2020 and earlier approved standards, which are on the official Ecma website.

We also need to check the text of the current Ecma website on TC39, The URL has not changed, but we need as usually a final adjustment also of the tc39 text. There are several mistakes for instance regarding the frequency of the meetings Etc. So honestly speaking also now I will take the effort to go over the facts and then make some corrections but I also invite you also to do the same. We definitely need a good separation and harmonization between the different websites, what we have on the Ecma website (like the approved Ecma standards, then announced major events such as when the next meeting is coming up and who is in the TC39 Chairman's group? Who are the members of TC task groups? etc, so this is everything on the Ecma website, but then the new drafts and other ongoing activities Etc. It is shared among tc39.es and tc39 GitHub Etc. So I would like to invite that especially the web masters of both sides talk.

So regarding CalConnect, it is a repetition of where are we now. Basically we are already working with CalConnect experts in individual capacity as invited experts Etc. There's obviously no problem with that, but if we would like to formalize our liaison with CalConnect as an organization, then they have to introduce also sort of royalty free patent policy. We suggested to install an “experimental RF patent policy” in order that we can work with each other at the moment. So far they still did not come back to the Ecma Secretariat. So it is the same situation what we had in November. Not really a problem in my opinion, but I just wanted to inform you where we are.

Okay regarding the TC39 2021 schedule. If you remember at the last TC39 meeting Waldemar pointed out that there was a conflict between the Ecma GA and the last entry for the December meeting. I think it was December 8 and 9 it would be a remote remote meeting for two days and it was a clash with the Ecma general assembly. So it has been decided by the TC39 chair group to the 14 and 15. So this should be now correct. I hope you know the other dates have not changed.

Okay, so some points for the Ecma GA. So these are the two new members whom we have have now in TC39. One is a Japanese company for SPC membership. And then Coinbase. So this is the new company of JHD. So fortunately they also joined as associate members. So many thanks to both organizations. And there has been a reorganization at Stripe. So they used to be ordinary members. Now they are called RunKit and it is an spc member and they are also most welcome to continue as an spc member under the name of a RunKit.

Okay the Ecma financing: I have taken all the figures from the GA documents, if somebody is interested in the figures you may study these figures. The good news regarding the membership approval for 2021: It is basically unchanged (for now for more than 20 years in row…). So here the GA unanimously approved the unchanged membership levels for 2021. So 70,000 for ordinary members and so on. So no changes.

Now regarding the officers for the ECMA Management. So the management has been reelected for one year. so Isabelle Valet-Harper for Microsoft is president. Joel Marcey from Facebook is vice president, Johem Friedrich is the treasurer. so I think in the management there is no change if I remember correctly.

We have changes in the execom. We have a new representative from Google..

So if anybody has sort of question, then please do ask me either now or per email or whatever.

DE: Istvan mentioned the issue about the PDFs that we generate being poor quality. One one factor in this is that we don't have professional typesetting. We discussed this last TC39 meeting and concluded that it would be very important for us to have professional typesetting support. The editor group wrote a letter expressing this desire, which I forwarded to Ecma management and ExeCom, in December. We haven't gotten a response. What next steps do you recommend?

Istvan: I have heard this from Patrick Luthi. I mean, he mentioned that in an email in just one single sentence, but I don't know anything about it in details. So it would very helpful if you could keep me informed, you know, what was exactly in the letter and and then I could discuss that with Patrick. So at the moment. I have only heard this from him not from you. But you know, what is the plan? I don't know. And then we can cut it short. In in my opinion, you know ECMA really should take money into its hand because the only guy who could do it or guys and ladies, you know, who could do it in the ecma office this is Patrick Charollais, but he's also not the best to do this type of high precision job. It was really lot of very heavy editing job. So in that case we need to hire somebody. If you have somebody in mind or if you can give us a good address, that would be helpful. Now, this is on the assumption they would accept this proposal.

YSV: Okay, so that will be followed up with an email from Dan. Next up is myself regarding the question about the website that Istvan raised. At the moment I don't have any tasks that specifically need to be done on behalf of ECMA. We don't have a task lined up to add the editors, the chairs, and the currently participating members. What we can do is send you an email about this to coordinate on what sections of the tc39.es website are missing. Currently, we're part of the way through a translation project on that website. So we'll also need to make sure that that work gets done for these new pages or sections as well.

Istvan: So what I have found in the TC39.es website that there wasn't that there is no link to the approved standards. At least. I didn't find it. So this is definitely something like that and maybe also there are some others. I mean, this is a good opportunity because you know, we are always so busy, that we do it maybe once and then four years we are not doing it. We should be doing it on a regular basis. But in practice we don't find the time do it.

YSV: Great. I'll send an email and we'll catch up on that.

DE: (read by YSV) It's important that Ecma website updates include URL redirects when they move assets as has been mentioned in the reflector.

Istvan: I hate these web-site re-design changes. I have to tell you. So that was the reason why I didn't do it for 13 years or whatever. It always ends up in this type of disaster. So that's the reason why I am calling for your patience and it will take them sometimes, until the new website is working. To a level which is satisfactory.

JHB: So I have a queue item for this. One solution that the tech industry tends to have to make production changes less risky is a staging environment. If it was Ecma policy to never change the website unless they had Previously deployed it on a different domain and had all of us review it first, every single one of these problems would have been caught before it hit production. Is that something we could turn into policy?

Istvan: So if you turn it into policy, you know, it will be accepted as a good suggestion from tc39. It will be picked up by the execom. MY policy was never change the website design.

AKI: "never change the website" does not seem like the lesson we should be taking from experience.

Istvan: So the website content, of course, you know, but “look and feel”, you always lose content. This is not only so in Ecma but as an example I'm looking now (for a different project) for some old documents on the ITU-T website in the archive which were there 10-20 years ago and I cannot find them anymore. And the ITU has huge IT and Web department. The same true for IMTC. There the entire website content has disappeared after a merger with MEF (another Forum…) with a valuable web content of 25 years.

YSV: All right. I'm going to move us along because we're just a little bit over time and I think we've covered all of the concerns here

## Editors Update

Presenter: Kevin Gibbons

- [slides](http://j.mp/262editor202101)

KG: Okay, I'm gonna be driving but Shu, JHD, and Michael are also editors and they should jump in if they have anything to say that I'm missing. It's going to be the same format a presentation will go over the major editorial changes, and then normative changes, upcoming changes, and so on.

KG: We added a yield macro along the lines of the Await macro that allows you to specify iterators in a style that is closer to how you would write a generator in JavaScript. This didn't imply any normative changes. There was a little bit of finagling necessary to make that happen. But yeah, so this is just a stylistic change to how iterators within the specification were written which makes them a lot easier to write.

KG: We added CSS to do normative optional styling for blocks that are normative optional. I will talk about that a little more in the next slide.

KG: #2254: We have had a few different issues with the lookahead assertions in the grammar, being imprecisely specified or being used in a way which was not allowed by the specification. So I rewrote that section. So it's now more precise and a little more general. If you are interested in that sort of thing, please take a look and let me know if you have comments.

KG: #2271, I will discuss again in a minute, is the change we have been talking about for most of the last year, which we finally got around to making. I'm very excited about that. Like I said, I'll talk about that more in a second.

MM: please say what an SDO is?

KG: oh, sorry "Syntax Directed Operations".

KG: Yeah, and then 2280 split up the definition of IterationStatement. IterationStatement was a single production that produced every single different kind of loop. There were fourteen different right-hand sides there and it was massive and a mess. So now IterationStatement instead produces DoWhileStatement, WhileStatement, ForStatement, and ForInOfSttatement, and those produce their respective kinds. It's just a refactoring to put things in their own sections.

KG: And then I changed ecmarkup to add borders and backgrounds to right hand sides of grammar productions when you hover over them. And again, I will demo that.

KG: so I promised to show you two things. So first thing was this normative optional rendering, this is what it looks like. This is just a direct screenshot of the specification when there is a section of the specification outside of annex B which is normative optional - for example WeakRef.deref - it look like this. The committee has expressed intent to move other parts of annex B into the main specification and perhaps make some of those will be normative optional for example, the `__proto__` accessor on Object.prototype. Those will be styled in this way.

KG: And then I also promised to show you the change to syntax directed operations. So this is what the specification looked like as of a few months ago. If you went to any production it would have the definition of the production and then it would have a number of these partial definitions of syntax directed operations. So for example IsFunctionDefinition is a syntax directed operation. It was defined over however many different Productions and the part of it that was defined over shift expression was here, and I hope you will agree with me that this is perhaps not extremely useful. Usually the thing that you are interested in is, what does IsFunctionDefinition do? You'd see it is used in this HasName operation. And so you would be reading HasName and you would want to know what IsFunctionDefinition did, and in order to answer that question you would just need to grep around for all of the different places it's defined and look at all of them. And now as of the latest version there is just an IsFunctionDefinition defined somewhere and you can see you can just click on this link, which is new, and it will take you to the single place that IsFunctionDefinition is defined, and that has its definition for all of the productions over which it is defined. Yeah, so that's the change. They are a few of them up in this new top level section for syntax directed operations for some of the more general operations, and then there are other operations that are defined throughout the specification. So if you go to, I don't know, HasCallInTailPosition, this is defined in the tail position calls section because that's where it makes the most sense but it still is defined only in this one place instead of being split up across 30 different places.

KG: And then the last part of this which we have merged yet, but which is in an open PR for - or perhaps we've merged it in last five minutes while I wasn't looking - in the case you wanted to go the other direction, the direction that was previously encouraged where you go to the definition for the syntax and then find the syntax directed operations that are defined over that syntax, as of this PR that's now something you will be able to do. If you go to any syntax definition section and you hover over a production, you get this little tool tip that gives you Syntax Directed Operations defined over that production. If you click on it you get these syntax directed operations. And then you can click this to go back to the definition that you were just looking at. Oh, yeah, and you can see this little background on the right hand sides that I mentioned earlier.

JHD: The other thing is if now that you can hover over and see references to SDOs.

KG: This is true. If you hover IsFunctionDefinition you can see all of the call sites. There Was previously "references" for each of these sections, but it didn't do anything. So now there is a "references" that actually works. Yeah, so that's the big editorial changes that we've made to the specification.

SYG: I could jump in real quick. Notably some SDOs will remain special cased, that cannot be consolidated, like Evaluation.

KG: Sorry. Yes, that's a good thing to mention the specifically Early Errors and Evaluation are arguably syntax directed operations, but they remain a place that they were..

YSV: I can quickly read out MM’s comment, which is: huge understandability gains. It looks awesome what you've done. Thanks so much.

KG: I am so excited to not have to grep, to just be able to click the function definition for body text or whatever so nice. All right, back the slides.

KG: We landed just a couple of normative changes since the last meeting all of these things. The first was this change to the memory model. It's too strict for the definition of compare exchange. This is pointed out by Conrad Watt and Shu helped develop and land it.

KG: 2210. This is one of the many "typed array specification does not match web reality" things we got consensus for at the last meeting.

KG: then #2252 is just a tiny tweak which I wanted to call out here because technically we didn't have consensus for this change, but it was the editors' understanding that this was always the intent of these specifications and it just failed to express that clearly. So this is if you have a JSON object that has two properties in the same object literal whose name is literally `__proto__`, if you had that object literal in ecmascript source text it would be an early but it is not supposed to be an error when doing JSON.parse. So now the specification is more explicit about that error not applying in this context.

SYG: Can I jump in real quick about #2250? This was also a normative change that technically we do not have consensus on but the decision was to merge the fix because the hardware operations for x86 lock compare exchange or the pairs of operations on arm64 to implement compare exchange. They work a certain way and the model meant that they could not be straightforward with used. So in my opinion there wasn't really another way to actually fix this so I did not bring it to committee for wider deliberation. For folks who have expertise here and are interested please take a look at #2250, it lays out the problem and the solution in detail and if you have concerns then please raise them to me and I'll be happy to revert the change and then we can discuss it plenary. Thanks.

YSV: Just one quick comment about time. We are going to be hitting the time box pretty soon.

KG: Only have a couple more things to say. So just very briefly. We have a very similar list of upcoming and planned work. I'm not going to go over all of this in detail. Some of the big ones are, I intend to make multi-page builds available now that we've finished the syntax directed operation refactor. This is, currently the specification is available as a single document, a single HTML file. I intend to make available a version of the specification where each of the top level sections is its own HTML document. Links will still work across them and so on. This is for people whose devices are not happy about downloading 7 megabytes of HTML, they can just load the section that they're interested in.

KG: Next, as a reminder, we have a project on GitHub at the top level of the tc39 / ecma262 repository that lists the things that the editors are working on.

KG: And then a reminder anything that is not in by the end of this meeting will not go into the 2021 specification. If you have something that really needs to be an exception to that we can talk about it, but this is the default.

JHD: The intention will be to produce the artifact for ES 2021 before the March meeting. so that we are able to begin that opt-out period with plenty of notice.

YSV: The queue is currently empty but there have been a lot of warm comments in IRC.

## ECMA-402 editor’s report

Presenter: Shane Carr

- [slides](https://docs.google.com/presentation/d/1xIH-aloYcirEPOu5RM2pvJPdwob_9wjVZ_9BpiEAzJQ/edit)

SFC: I'll be giving the update presentation today and hopefully Richard and Leo will also jump in a little bit. Let me share my screen.

SFC: (presents slides introducing ECMA-402)

YSV: Can I jump in for a second? We are having a hard time with keeping up with the notes. Can I have a couple more cursors on the document?

YSV: I see two people are currently taking part. I see I think 3 4 5 OK 6 fantastic. Thank you, please go ahead.

(Note-takers can also help edit the last section, which was a bit poor)

SFC: Okay, great. So the editors this year have been Richard Gibson (RGN) and Leo Balter (LEO) and thanks very much for their work. You'll hear a little about them in the next slide about ES 2021. I'm the “convener” or chair of the group. Ujjwal Sharma has also been doing a lot of great work to help lead to the group and below is a list of many of the delegates who attend our monthly calls. About ES 2021, Richard and Leo say they plan to cut the ES 2021 as soon as the stage for proposals and consensus PRs that we agreed to this meeting are merged. Do Leo and Richard have anything to add and discuss about this?

LEO: I believe yeah. No, I don't have anything to say I'm on top of these stage for proposals. I'm excited about it as the editor. I'm looking forward for ES 2021 cut. Shane Do you intend to show the Wiki page or yes, I have a slide later about twinkled. Perfect.

RGN: I Echo those sentiments.

SFC: Thank you. So, the first order of business today is our new pull requests. We have two new pull requests that were seeking consensus for that. We're hoping to merge into the 2021 spec.

[Shane Presents https://github.com/tc39/ecma402/pull/429]

SFC: The first one of these two PRs is from Jeff Walden (JSW) who's a SpiderMonkey contributor and he's contributing a normative PR to improve some of the spec around the handling of variants in locales. He discusses more about what this means later on in this thread. We discussed this several times with the 402 meeting and we achieved this on this normative PR at the last tc39 task group meeting. We feel this is a good addition to the specification. So this is the first PR for which we're seeking consensus.

[Shane Presents https://github.com/tc39/ecma402/pull/500]

SFC: The other one is #500 from Alexey who's done work on JSC. This changes some of Legacy Constructor behavior on older Intl objects in a way that Alexey has discussed here, by using OrdinaryHasInstance instead of the instanceof operator. We also discussed this at the 402 meeting last month. After a little bit of back and forth, we decided that the benefits of this pull request outweigh the risks. So we're also asking for a consensus on this pull request to ECMA-402. I can't see the queue, but does anyone have questions about these to pull requests? #429 and #500

YSV: the queue is currently empty, but it might take a moment for people to absorb everything.

SFC: Okay. I'll go ahead and leave these two links up and we'll come back at the end of this presentation if anyone.

SFC: Okay, so I'll give a quick update on where the proposals stand. We have DateTimeFormat.formatRange. This is one of our older proposals, but it's a candidate for stage 4 this meeting and therefore also ES 2021. Felipe has been doing a lot of great work on this proposal and has been polishing it and getting it ready for stage 4. I'm really excited about this one. It's already been shipped in V8 and in Firefox for quite some time. I believe it's also in JSC in the latest version of Safari. So really looking forward to this one advancing.

SFC: Intl.Segmenter is also at stage 3. It's shipping in Chrome 87 as well as on JSC trunk. There's a couple questions to answer before we get to stage 4, but this is very close to stage 4. I don't know if Richard has anything to add to the status.

RGN: No, nothing at this time. We'll see how it goes between now and the next meeting.

SFC: Sounds good. Thank you Richard. We have Intl.NumberFormat V3; I'm the champion on this proposal. I'm hoping to get this ready for stage 3 at the next meeting or the meeting soon after that one. This is adding a number of important features that users requested for Intl number format. This is already at stage 2.

SFC: We have another Stage 2 proposal, Intl.DurationFormat. My colleague YMD has been working on this proposal. This is also going along with the Temporal.Duration object over in the Temporal proposal.

SFC: Another stage 2 proposal is the Intl Enumeration API. Frank Tang (FYT) has been the champion for this proposal. I believe this proposal is still blocked on the questions involving privacy and fingerprinting concerns. So, you know Frank has been trying to reach out to privacy people to help review this proposal so far, I think our success on that front has been limited, it's for some reason it seems to be difficult for us to get privacy people to spend the time to review this proposal. So most of the discussion up to this point has been theoretical in nature. So if there's anyone on this call, who has some kind of expertise or authority in the privacy area or know someone who does, we'd really appreciate getting in contact with that person so that we can unblock this proposal.

SFC: The Smart Unit Preferences proposal is at stage 1. This is blocked on discussions involving scope. I think this is probably going to be at stage one for a few more meetings before we get those questions resolved and promote this. Intl.DisplayNames V2 is going up for stage 2 at this meeting. The scope has changed a little bit. Look for this presentation later in this meeting.

SFC: Stage 0 proposals: Extend TimeZoneName, which is a new proposal, championed also by Frank, up for stage 1 this meeting, be looking out for that.

SFC: Another proposal that I am the co-champion of is eraDisplay, there's also again a presentation later this meeting to promote this one to stage one. I've gotten a lot of help from Louis-Aimé de Fouquières, who's been joining our calls and has a lot of expertise in this field of non Gregorian calendar logic so really looking forward to this proposal

[Shane presents https://github.com/tc39/ecma402/wiki/Proposal-and-PR-Progress-Tracking]

SFC: Leo alluded to this earlier. We have a proposal and PR progress tracking wiki page on our GitHub where we track how pull requests and proposals are moving through the process in particular as you can see here. We like to track how these proposals in one place show how these proposals are progressing on consensus for the two groups as well as on test 262 and mdn documentation, and then the three main implementations that are that we look at for implementing 402. So most of these PRs up here are older but have now been caught up including on the JSC implementation and I really appreciate the work that all the JSC people have been putting into this over the last over the year of 2020. This is a really great to see this table being filled out with all these check marks since the last time I presented this. I think there were a lot of x's, but it's really exciting to see all these check marks now. These are the two open PRs that we have up for we have up for promotion for consensus and up for stage 3.

LEO: I also want to highlight that the check marks are also linking to what they need for so you don't see like there is only a test but you also have a link to the current test respective test issue for each thing and mdn page or whatever they go to.

SFC: Yep. So, for example, I can see almost all these check marks are clickable. The ones in this column are clickable; for example, these deep link to the notes for where we achieve that consensus and then like if I click like this button to goes to the tests for this PR you can go and see exactly what the tests were for that PR when those tests were checked in. So thank you for everyone for maintaining help helping maintain this this this page we couldn't do this without the work of Leo and Richard and Frank and everyone everyone else who's contributed. Making sure that this wiki page stays up-to-date. And that's my last slide. My very last slide is this one which I'll just keep up for the remainder of our time slot. But does anyone have any questions on the Queue?

[Shane presents Get Involved! slide]

YSV: There are no questions on the queue. I wanted to raise one thing about the data management that you're currently doing in the wiki. I don't know if you're familiar with the browser compatibility data work done by mdn that currently links the WHATWG. and other specs where you can get the information about something was implemented for all browsers.

SFC: Yeah, we're definitely familiar with the efforts. One of our delegates, Romulo Cintra, has been largely our champion on the MDN side. He hasn't had quite as much time to commit to it in 2020 as previously so I think that Michael Cohen and Daniel Ehrenberg have also been working on getting the lag up to the date on the browser compatible tables on MDN. The purpose of the status wiki is more to is more for the 402 side to track the stage advancement requirements. In terms of usefulness to developers, I see that more as on the MDN side. I think that hopefully our status wiki could be perhaps helpful when building out the compatibility tables on MDN, but I see those as serving very related but different uses.

YSV: There's a big project around doing the tc39 data set. It's under https://github.com/tc39/dataset in our GitHub or he's which is using the browser compatibility data from mdn and syncing all of our information about proposals along with that data and making sure that we've got a centralized location for all of our data if that's helpful for you folks. We can definitely take into account your needs as well in case you want to do automated syncing of anything.

SFC: Thank you very much for flagging. I'll definitely follow up on that. Thank you very much for watching.

YSV: Are there any other comments or questions or are there any comments or questions about the two issues the chain raised earlier that he wanted to get consensus on?

LEO: I have a comment as the editor one of the things that Shane has mentioned enumeration API: that we raised a request for privacy assessment, but we haven't been able to get anything since around like me 2020. This is like a proposal that we have interested to each interest to move this forward, but it's blocked by like the lack of people available to do this. So I urge if anyone is interested in taking a look ask you kindly please go there. We would appreciate your help.

YSV: Okay, we are running up against the clock now and there are still no comments in this speaker queue. I'll quickly address the two issues that you raised. The first one looks good to me from my side on Mozilla. For the second one, I want to double check with someone but like to my eyes, it looks fine, but I'm not an expert in this area. With that unless there are no objections. We can move on to the Ecma 404 status updates.

SFC: To be clear, do we have the green light from this committee to merge these PRs #429 and #500 in ES2021?

YSV: For my side #429 looks fine other people need to speak #500. I want to double check, but others

SFC: Are you blocking #500 from advancing this meeting?

YSF: I would like to say that I would be happy to see it conditionally advanced. I just need to double check with someone who has knowledge.

SFC: Okay, I'll follow up with you offline on the status of #500.

### Conclusion

Consensus on #429; will follow up with YSV on #500 - YSV followed up, and confirmed that it is fine offline

## 404 status update

Presenter: Chip Morningstar (CM)

YSV: do we have any updates for 404?

CM: No updates. The Earth continues in its orbit. Everything is fine.

## TC53 liaison report

Presenter: Peter Hoddie

YSV: We have, up next the Ecma TC53 Liaison report from Peter. Is there anything to report?

PHE : Sorry, actually, I hadn't prepared for that today. I will simply note that the committee's making great progress and work towards our first actual standard submitted to the general assembly in June and so we are pushing forward to have a final draft in February. We've gotten some really good feedback from folks who have reviewed it for the first time. So if anybody is bored or looking for an interesting challenge, please take a look. We really appreciate any feedback that people have on the spec that's there. It's on the public GitHub site. It's easy to find, but if you need a link to it, just let me know. That's it. Thank you.

YSV: Thank you very much for that quick update.

PHE: There's still plenty of work to do. We're going through all the excitement that tc39 goes through to dot all Is and cross all the Ts but it should be great, hopefully.

## Code of Conduct committee

YSV: all right, then we can move on to the COC committee updates if there are any.

AKI: We met last week. There were once again, no new reports.

YSV: That means that we're all very well-behaved right now, which is great.

AKI: You know what actually you know, what I actually will say one thing. We had a minor concern that people were choosing not to report or didn't know they could report which is why I mentioned that there are several avenues to report a concern on our website, so if anything does come up, don't forget that you can ask for the assistance of the committee

JHD: If you have any hesitation about that, you can definitely ask for anonymity or for us not to follow up, just to notify us - because we would even appreciate just being aware of things even if we're not able to act on them.

## Chair group

Presenter: Rob Palmer

YSV: Okay the next agenda item is the confirmation of the 2021 chair group from Rob.

RPR: All right. This is going to be very quick. So in the previous meeting we presented the proposal for the chair group this year and this is the announcement of that. So last year we had Aki, Brian, Myles, Rob, and this year Myles moves on. So we thank him very much for his service. And we're really grateful that they would stay on and are very appreciative. Okay, that is all and thank you.

DE: Yeah, I wanted mention that I've volunteered to help with certain administrative tasks for the for the chair group, especially starting with kind of formalizing the some of the smaller details about the invited expert procedure and the way that IPR policy is administered and think there was something else that Aki asked about and also following up on the use of these funds. I don't think I'll be involved in any of the chair meetings or anything like that just on a specific case by case basis to help. So please let me if any of this exceeds reasonable bounds- I don't have any intention to join the peer group, but I'm happy to help in these limited ways.

AKI: Yeah, actually both both Daniel and JHD have volunteered to help with some of our more like organizing things that are not specifically like they have no bearing on decisions that we make as a trigger whatever but will help us immensely and I appreciate both of you in advance for any of that. Especially one of the things that I've been trying and failing to do has been related to getting like a formal funding request together. So Daniel you are going to to save me from that stress and I appreciate it.

DE: Yeah, Aki actually did have one budget allocation that you actually did get approved--nonviolent communication training, but then we didn't get around to using that. We'll see an update later in this meeting about that particular topic.

YSV: Maybe we should have a chair back office group. Are there any other questions regarding the chairs or any of the work that's happening there? Otherwise, I have to talk like a normal person again so can someone jump in and take over chairing for me?

YSV: We have agreed that the chair group as it is looks good, and we're going ahead with that. So I have to switch because now the next thing is my topic so I will share my screen.

### Conclusion/Resolution

2021 Chair group is confirmed.

## Runtime Semantics for MemberExpression do not conform to web reality

Presenter: Yulia Startsev (YSV)

- [Pull Request](https://github.com/tc39/ecma262/pull/2267)

YSV: You folks may remember this issue from #2018, I believe it also came up in #2014. This is related to how the specification defines MemberExpression runtime semantics compared to how it actually works in implementations. Implementations have chosen to not directly implement the semantics here as written for a couple of reasons. I myself have worked through this and tried to fix it for Firefox. In our case RequireObjectCoercible was in the wrong order because it was not very efficient to implement in the way that it was specified. This issue arose again with private fields.

YSV: Private fields are specified in the same way as our existing member expression runtime semantics. Firefox has now implemented it as specified – in contrast to our non-private implementation. The other major engines, JSC and V8, both use the behavior of member Expressions consistently with themselves and are inconsistent with the spec. This is something that we should actually address fully before we add more complexity to this.

YSV: The PR that we have to fix this is would allow null and undefined in reference records. This is a form of reordering which allows two objects to catch the cases where known undefined would normally throw in RequireObjectCoercible before so the change is pretty small. We remove this "except null or undefined" from the reference record specification, and there's another change here, which is checking whether something is an environment record or not. So we've simplified the text here and otherwise, it's the behavior change, The reordering change handled by changing from a non fallible ToObject to a fallible one. So ToObject takes over the cases where this should have thrown earlier, but now it's going to throw a bit later and that's the change. Are there there any questions?

JDH: I've tried to read through all this stuff and I'm not sure I understand. Is there no option that would make like null.y = () there throw before calling f, and if not then why not? Like I understand like that comment saying that the spec says that it should throw before it evaluates F and calls it but with this PR my understanding is that then that will evaluate and call F before it throws. So if that's the correct understanding then my question is like why can't we make it do what the spec and intuition suggests that it should.

YSV: I thought that actually it would call it but would still throw here when we do the step of assigning. We get the y key and then we access the entire expression and it would throw when assigning at least.

KG: I believe it will call the f function if I'm remembering reading this which I might not be. but I believe it will call f.

SYG: I thought that was the point of this PR, right? I thought that was the point as well.

JDH: So I guess that's my question. Like that's not the intuitive thing to me. The intuitive thing is that it never even gets to the equal sign because it throws before, because the left hand side is nonsense. If there's a reason we can't fix that evaluation ordering than I'd love to know it and if not, then like it'd be great if there's a way to make the make the evaluation ordering match what I think the intuition of the average programmer.

BSH: I would think the expectation is obviously you have to calculate what you're assigning before you assign it. So I'm not sure if that's a universal intuition.

SYG: I just want to combine the two and respond to JHD as well my intuition and perhaps you know, my intuition is colored by being a language implementer, but I have the same intuition that Bradford shared, which is that I expect most evaluation for assignments to happen on the right hand first, then the left hand side not the left to to right order. And this I think is -- well, at least I'm fairly confident in that this intuition is shared by language implementers given by the variety of bugs that we have around references all over the place where we where's like by far and away the easiest thing to implement not just easy, but also like intuitive and efficient is to kind of visit the right-hand side of your assignment emit a bunch of stuff for that then visit the Target and then you met a bunch of stuff for that. Whereas with JS currently says, first visit the left-hand side, do some stuff like some error checking, maybe then visit the right hand side figure out what value we need to assign then visit the left- hand side again. So it's this left right left to like back and forth thing whereas you would really never implement it that way. You would always implement it as let me just visit each side wants and because of there's some state that's observable because you go left right left. That part is really unintuitive like if we were already consistent in that like like be visit always visit left hand side first and then the right hand side and that's it. That will will be fine, but that's also Possible right because it's like you can't perform the evaluation until you've done the right in side

JHD: I think part of my confusion here is that… I just tested: I made an object where the computed key is `console.log(1)` and the value of the object is `console.log(2)`, and it prints out `1, 2`, which means that it in the most common place where people might run into the ordering, it does go left hand side first and then right hand side. We have the language we have and we have the web we have, so it's fine if this is the change we need to make, I just want to understand because I want to ideally share a mental model that we can apply to future proposals to avoid further inconsistency.

JHD: Of course this comes into play with Class Fields as well, and I thought we had made a lot of effort to make class fields and object literals have the same order back in 2015, which seems like that's a that would make that to be the preferred order which then makes me confused about why we would prefer this PR’s approach for assignments, although your explanation is valid.

KG: Yeah, you're correct that you evaluate parts of the left hand side first, you evaluate the object and evaluate the key. The problem is that checking for null is a separate step then just evaluating it, and that check already happens as part of the assignment. Like when you try to put the thing there, that check already has to happen. The engines are currently forced to do this additional RequireObjectCoercible check that they would prefer not to be forced to do. It's not that it's technically impossible to implement the semantics implemented by the spec. I have an implementation that implements the semantics implemented by the spec. It's just that it has this extra call. That's like not hugely expensive, but it's annoying to implement right, and engines have never actually implemented and have expressed every time we have brought this up that they don't intend to change to match what the specification says because it's expensive and redundant.

YSV: Yeah, I just want to echo what Kevin just said that was my understanding of this as well. We have this double check for null and undefined, and we're removing the first of the checks and running the code as before. From a mental model perspective... I mean, if we're talking about programmers' mental models, I think that their mental model is more informed by what they experienced when writing JavaScript and necessarily by what the specification says and I think that that is not going to be breaking the programmers’ mental model. It's been like this on the Web for a very long time. It is also possible for us to implement what the spec says, but as Kevin just said, it's redundant and we just want to make sure that things are consistent right now. The reason we want to fix this is that we've specified the same behavior again. And again, the implementations are diverging from the spec. So perhaps it's time that we just become consistent about this and address the reality of the implementation concerns here.

SYG: I agree with both Yulia and what Kevin have said. That distinction that Kevin drew of the redundancy and the check is a nuance but is an important part of the mental model model. The thing that's bound up in a reference conceptually is you know, the location that you want to assign to and if assigning through that would not be possible because the thing is a null or defined. It does feel weird to do it twice, right even right even if the even if the evaluation that computed key itself is follows the left to right.

CLA: Yeah, I just would like to second like what Shu just said and so my intuition here is pretty much like the implementer side as well and this back and forth in the left hand side and had been right hand side makes a little bit unintuitive to me, but I really think that I would like to highlight here is so we are talking about `null.y = f` for example and expecting from spec that f is not going to be called but if instead, we have a variable that actually evaluates to null, then we would be calling f anyway. So for pretty much the same results, but we have an indirection of the variable, we would have different evaluation with the spec as it is and I think this is very non-intuitive when compared to what the PR is proposing to change.

YSV: Alright, so we've heard from a couple of people and a couple of concerns. What I'm wondering is do we have consensus on this. Is this something that we want to go forward with this change? I would like someone to say yes.

DE: I'm happy about this change.

JHD: I want to say "yes and". I just want to understand - this change is fine and I understand the implementer-motivated justification for it, and it seems fine. But I want to understand if this has any consequence on future proposals. And if so, what is it? We don't have to necessarily discuss that in plenary and that shouldn't necessarily block the PR, but I think it's important that that be clearly stated somewhere and if I'm the only one who doesn't get it then I'll figure that out on my own time.

YSV: How about we get in touch after and we'll figure that out together.

JDH: Thank you.

### Conclusion/Resolution

- Consensus on the PR
- YSV and JHD to follow up about implications

## RegExp match indices

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-regexp-match-indices)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkfgkZ2bXeIlMCiAK8w?e=640eSA)

RBN: Alright, so we've been having discussion over several meetings now about the regex match indices proposal. It's been sitting at stage 3 while we were waiting for implementer feedback. In the last meeting. We had some feedback from Michael Saboff JSC implementation. We've had previous feedback from Shu and the V8 implementation and some there were some concerns we wanted to address. So that's why I'm bringing this back before before committee today.

RBN: first just to reiterate the motivations for this proposal. So the main motivations for providing the regex match indices is to add some information that we currently don't have a means of extracting with regular Expressions today, namely the start end and indices for capture groups within a match. Currently we only provide the index of the entire match rather than any individual capture groups and the only way to get the length is by checking. You string length of the match itself. So this doesn't provide enough useful information for parsing tools to be able to report a crime report accurate position information into some invalid text. That's person using a regular expression. Also, it doesn't give you the ability to use the native regular expression object for syntax highlighting such as used in text make grammars, which are used by a number of editors today. projects like the VSCode textmate package depend on the Node native bindings for only guruma to accomplish this and the other ways of being able to actually get these capturing groups is to capture everything and then calculate it out yourself and that's expensive complex and easy to make mistakes.

RBN: So just a brief history of The Proposal it was adopted for stage 1 back in May of 2018, the original proposal unconditionally added an offsets property to the RegExp built-in exec method at the time. We were aware of possible performance concerns and there were some possible mitigations we were choosing to investigate. When we reached consensus for stage 2 in July of 2018, we had discussed mitigation strategies one was either passing a callback to RegExp built-in exec or passing an options object into exec, matchall, Etc, that would allow you to conditionally add the indices to the regular expression result. We advanced to stage 2 and this also gave us some time to investigate possible performance implications and whether or not not they would have any meaningful impact on regular runtime code. In July of 2019 we advanced to stage three. Several things we decided at that point were that both the callback and options object were subclassing hazards. They ran issues with the with at match and the built-in match symbol would be problematic if anyone tried to do subclassing and we've discussed the complexity of subclassing with expect was ripped built-ins a number of times in the past. Another thing that we had done is we had changed the name of the offsets property two indices to more accurately aligned with the naming that we were using for next index and match.index. So kept us within the same nomenclature The Proposal name itself changed at that time, and we also had some feedback that early perfect vestigation. The performance overhead might for V8 indicated that be negligible consensus at that point was on using a simpler API that unconditionally added indices again based on the original stage one proposal to the result from RegExp built-in exec and we advance to stage 3 with simpler API. So some additional updates in December of 2019. We had a stage three updates where V8 shared their implementation concerns from a full Moon tation based on the spec. We there was a question at the time it was posed as to whether or not we were willing to move forward with a proposal at stage three without changes even with these possible performance costs where we willing to pay them and at Time the conclusion was that we would make no changes and that leads us to the last meeting in November of twenty twenty JC shared their performance concerns and proposed mitigation steps as well given that we now had to implementers that had concerns about performance that we might want to investigate individually. We concluded in that meeting that the implementers would be the champion revisit mitigations and come back to plenary with the result of our discussion.

RBN: So we did that. We had several discussions via email and phone spoken with Shu for the V8 team. I've spoken with Michael Saboff for JSC and I've spoken with Yulia for SpiderMonkey and what we've discussed before plenary was the addition of a flag to the regular expression, the D flag and a corresponding hasindices accessor to control whether the the season property should be included in the result. We opted for this based on some discussions that indicated that it's the least complicated mitigation for the current spec text. It doesn't require completely rewriting the spec or rethinking the entire feature. It allows this to work with regex prototype exec, match, and matchall without worrying about subclassing hazards. We did investigate alternatives to d as the flag, and I do have some information here. There is a table that you can view that's on the proposal repo. I compared 46 different implementations of regular Expressions across multiple languages. It's based on the list of Wikipedia of possible regular expression engines that at least have been added to a queue pedia and covers languages such as C++ C Java Java Matlab, Ruby, object Pascal, D, go, Haskell, Julia, Lua, Mathematica, .NET, and many others. So if you haven't had the chance, you can see that list. I'm actually building up a much more comprehensive list of regex features that this came from for some future discussions.

RBN: One of the things we found is that most of these implementations do not use d as a flag with three exceptions:

RBN Perl uses the `d` flag for a perl backwards compatibility feature that indicates that it should end in their documentation. They indicate it should be avoided if possible it It has the in their public official documentation for it Specifically says don't use it unless you have to that's because Pearl change their default behavior for regular expression parsing to consistently support Unicode in certain ways and `d` was added as a back and Pat for A bad way that you should not do this anymore.

RBN: Java uses the `d` flag to limit the how the dot carot and dollar patterns match to only match new line and not other possible new lines, it wouldn't match carriage return, line feed for example. I don't see that as being something we do that we would be that concerned about

RBN: and the only other one that uses d is on (?), which uses lower case d for backwards compatibility with Ruby (?. Other than that, no other language uses it with the exception of only guruma which uses a capital d, which wouldn't be a conflict and d and all of these cases is not considered to be a standard flag. It's they're considered to be extension flags from what is a normal regular expression. One thing we did also consider but rejected was using an uppercase. I, there are a number of regular expression implementations that use uppercase Flags such as Java util RegExp Oniguruma etcetera. A couple of things when we could jump in.

SYG: Is Onigma a different implementations from Onigormuma?

RBN: Onigma is a form of Onigoruma that adds some additional features, but it's not I'm not sure how what it gets percentage use is in the ecosystem to be honest. It does have some additional features, but for the most part it's Onigoruma

RBN: One of the things that I do not have decide that I want to mention is we did consider offsets and do this but also brought up on the issue tracker. But again, we're trying to align with the maintaining the naming consistency between index, next index, and indices and just using o to mean indices. Would we be weird changing the name of from indices to offsets wouldn't match that nomenclature. So that's why we've chosen d. In a way it's kind of like the sticky flag is y because s was already being used for dotAll. We could have chosen other characters such as `x` but `x` has significant use in many engines which has a specific meaning for how it handles new lines, which could be very useful for very complex regular expressions and is something that I intend to bring to committee as a proposal in the future. So `x` was essentially out to avoid compatibility issues there.

MF: So you're saying that you worked with implementers to come up with this solution using the flag as the simplest solution. Did you consider solutions that required changes to regex APIs to indicate the indices were desired to the API rather than passing that through in the regex? It seems like we would be making a similar mistake that we've made multiple times with putting properties of the match on the regex instead of the execution so that that information is kind of bundled inextricably,

RBN: so there's two things to that. One is we did consider other approaches, again the approaches that we've considered in the past that we've ruled out passing an options object still has subclassing concerns if we extend the regex api to include a new method, then then we either that make it unusable for string prototype match, matchall, unless we add additional APIs to string prototype for matchall indices and match indices and it kind of pulls us further away from our intent to try to keep this keep the changes necessary simple. Since this is already at stage three we don't want to overcomplicate the API. the other thing that I want to mention is that this is the only flag in the ecosystem that would do the same thing. There is a flag n that I also intend to propose in the future that is used by many engines and says treat all non named capturing groups as non capturing groups. So only named capturing groups get captured. That would also only affect the result in wouldn't affect matching behavior. There's at least seven or eight popular engines that use n for that that purpose including let's see dotnet, I believe Perl supports it, TCL supports it, so it's not going to be the only flag that will have an impact on what the result is as opposed to matching Behavior.

MF: Yeah. I realize it's a pervasive problem and already exists with a lot of the flags that we already have. I think that it's probably reasonable for this as a stage three proposal to go forward in this direction to try to limit the changes to the proposal at this point. I do think as a committee we should probably try to find a solution for future regex proposals that allows us to change the matching behavior without passing that information via the regex because again, the regex is its own value, and I'd rather be able to have the regex only represent the actual match we want to do not the the characteristics of the resulting object.

RBN: There's a number of cases of flags that we might want to introduce in the future. That also violate that - something that it is a feature of the RegExp object, that you use makes the term determination on how it gets used and the inclusion of the indices property or a possible future exclusion of non-capture and groups affecting the results shape since you'll end up with less results in those cases. These are things that I think are still valid use cases and they do still make sense on the RegExp since it's a reusable case. If you think about the cases where you want to use this, If you're building a parser, let's say, and you want to be able to indicate where in the URI the failure occurred, you're going to use the same object multiple times and being able to use existing API and use the same object for multiple cases whether it's tests versus match match versus exact without having use a different API for all of these different cases. I think it makes the most sense and is the cleanest approach.

MF: I disagree with those statements, but for this particular proposal, I think that your justification was fine.

RBN: I wanted to just kind of just bring up the status of where things are right now because this also speaks to the flag. So the proposal is currently stage 3. As far as stage four criteria progress, we have the proposal spec text. There is a pull request that's already out for the version that does not have a d flag. The pull request has been merged for test 262, the version that does not have D. There is a PR for test262 with the addition of the D flag that has not been merged yet as far as I'm aware. There is a pull request for the pr which is out of date. It needs to be updated based on the D flag. There are two implementations. That one is prior to the `d` flag and the other one is not yet shipping. So we're still doing some investigation.

SYG: So we have an implementation of the D flag in V8 and it pretty much matches with what the feedback that Michael Saboff gave for the flag in JSC. There does need to be kind of two shapes that you need to cache at VM start time one for the result objects without the indices and result objects with the indices. But otherwise it fixes performance regressions the exception oof the flags getter then this. And this is a perfectly acceptable because I don't believe the flag getter needs to be particularly performance, but having a new flag has the effect of like - due to the terrible subclassing that we have ,speaking for my own opinion there, if you have a subclass regex you have to look look regular property look up of the the has indices boolean getter on the Prototype if you have some complex reg X so that's that's like another property lookup, it complicates the flags building a little bit, but I don't think that's that's a big deal at all. Just want to call that out as the flag is not like completely just for free does have some implications for the subclassing. Other than that, there were no issues with the implementation and should be good to go. If we get consensus here. It should be smooth sailing to land and try to ship this in V8.

RBN: Yeah, I'd also mention that I imagine any time we add a flag we would have had those issues such as when we added the dotall flag. I had originally intended or hoped to bring this for four stage for advancements but having spoken with some implementers, since there's no official shipping implementations with the flag yet, we're not yet asking for stage four. So if we get consensus here, we will probably move towards stage 4 in the next meeting.

MS: So JavaScriptCore we plan on landing the `d` flag any day now and we will land it without an engine flag. So it will be available in nightlies. And I did like Shu notice also the flags subclassing issue, but I don't know of any benchmark or code that depends upon that and so we don't care either just like Shu.

MM: SYG, could you just say very briefly what the status is of the attempt to remove the subclassing weirdness from language.

SYG: Yes, unfortunately the V8 team hasn't had many cycles to build a custom version of V8 and chrome to test to test the various different versions. I don't remember if you remember the kind of classification of the different types of subclassing but we plan to still build out a custom version of the engine to see what breaks. The risk is still high that type 2 removal is not possible to do what path but we're still feeling optimistic for type 3 and 4 and particularly this subclassing issue for regexes is type 4, I believe where, we delegate to to overwritten overridden methods and getters on the subclass instance. So yeah this year we'll get to it. If we get an intern headcount that would speed things up. But otherwise this year we'll get to okay. Thank you.

YSV: Mozilla is also working on this. We have a build where we're going to see what the removal will look like via Telemetry. We might have some data soon.

SYG, MM: Excellent

YSV: There are no more things in the queue. Ron, is there anything else you want to explicitly ask here?

RBN: What I'm looking to do is see if we as a committee have consensus on the addition of the `d` flag as the mitigation for performance for regex match indices. Do we have consensus on the addition of the `d` flag? Does anyone object to consensus?

DE: Are we asking people to explicitly support things? I support this for consensus.

YSV: It sounds like we have silence.

RBN: I appreciate it. Thank you.

### Conclusion/Resolution

Consensus on the `d` flag for match indices.

## JSON Modules for stage 3

Presenter: Dan Clark

- [slides](https://docs.google.com/presentation/d/1pHLXcoMX-DiJ3MFFu3ts8U7zDGdVrDnXeB9-Njh68q0/edit?usp=sharing)
- [proposal](https://github.com/tc39/proposal-json-modules)

DDC: Okay, folks should see slides, and if you don't see slides, please stop me. So we are coming back with JSON modules again for stage 3. Just quick recap what this was, it's this syntax that looks like this where I can use an import statement to import a JSON object from a JSON file. What this is about, the proposal is basically stating what host is required to do when the type=’JSON’ import assertion is present, with the goal of achieving consistent behavior for JSON modules across hosts. The big thing that has kind of been the sticking point for Stage 3 with this proposal is this question of whether that JSON object you get back is immutable or not. The arguments for why it should be mutable were that it's more natural to developers who are used to immutability and JS modules and like other future modules types are being discussed such as like CSS modules on the web which are also going to be also going to be mutable and and if JSON Jules are immutable it kind of blocks scenarios where developer might need to modify them. And the other side of the coin, the disadvantage of this mutability is concerns about bugs where one module imports a JSON module and changes it and another module doesn't expect that change and doesn't know that it should be doing something to get a fresh copy.

DDC: So there's been quite a bit of discussion back and forth on these. There's proponents of both sides of this argument and it's kind of looked like we're not really going to come together and all agree on what the best approach was. With this where things left off the last meeting in November was that we were reading the temperature of the room and thinking that there were multiple people for both sides of this debate. Our impression was that the temperature was more towards the immutable side with however it seemed that at the time that there were no blocking objections either side. This turned out not to be correct, and we do have a blocking objection if we were to do immutable JSON modules. Given that, we want to come back today and ask for stage 3 on the mutable version with the understanding that there are still folks who feel that either side of this is correct with the mutable and immutable. It seems unlikely that everybody is going to come to the same preferences here, but our understanding now is that there are no blocking objections for Mutable JSON modules. We want to come and ask for two stages 3 for this version of Proposal with keeping in mind the greater goal here of hopefully achieving interoperability between JSON modules on all hosts.

DDC: And so I posted this on GitHub on the reflector shortly after the November meeting just calling for objections on mutable modules. I didn't get any. I think we could probably go to the queue to see if anything was missed there. But that's that's basically it.

MM: So good that I just have a request which is the person who's blocking. Could they just take the microphone and summarize their position briefly. So we understand why they they object so strongly

JDH: Yeah, sure. That's me. So, I think that the idioms of the JavaScript language are that everything starts out as mutable and there is an easy way to lock things down. There's object.freeze, there's all sorts of other approaches. If in the case of a module you want to do this in the browser, you have import maps or you can simply be the first importer and then you can freeze the object and future importers will see the frozen version, but there isn't any way to unfreeze an object. So if you want the mutability then you have to essentially do a deep clone or a JSON round trip, neither of which is clean or performant or intuitive. So, I think it's pretty important that this follows the same idiom of the rest of the language, which is that those who want things locked down need to do the locking.

MM: Thank you.

CM: This was the follow-up to what JHD said. He said “just be the first importer”. What does that mean? I don't know how to interpret that.

JHD: Sure. So in the same way, if you want to be the first code run in your realm so that you can lock down `Array.prototype`, let's say, then depending on how your application is built you have to arrange that your lockdown code is the first to run. So you do that and then however you achieve that you can then lockdown or modify `Array.prototype` however you like, and then all future code will believe, or run under the impression that, this is how the realm was born.

CM: But first-run code entails fundamental environment configuration as opposed to “well this particular act of data importation, which I happen to be doing in my code right here”.

JHD: but data is mutable, by convention and idiom, and you know that when you create a new object it’s mutable, and when you do JSON.parse, it's the same.

CM: With JSON.parse you get back exclusive control over that object before you give it to anyone else. With an import you do not

JHD: that is true. That is sort of a difference that by default every call site is a fresh object but in the case of importing you can ensure that your code is first run. You can import the object and then `Object.freeze` it and no one will be able to access that object until after you've frozen it. So that's what I meant by “just be the first importer”, is do whatever magic you'd normally do to get your code to run first and then the rest of the application will see that module as frozen.

CM: So what I would have to implement is a JSON Importer module whose job was to import JSON things and wrap them and send them to everybody else, which everybody else would then use indirectly?

JHD: You don't have to send them to everybody else. You just have to access them first and then you freeze them for everyone else. But yeah, you would either have to enumerate all possible JSON's that you Import or you could potentially use some sort of build process or an import map to do that more generically.

MM:. Yeah, Chip, the thing that made me calm about JHD’s position is that instead of a bunch of different modules importing a bunch of different JSON modules. They can import a JavaScript module, which is the sole importer of the JSON module where they treat the JavaScript module as if it was a JSON module and when you've got import hooks for controlling the wiring of the import namespace you might even even be able to virtualize that so that's what made me that's what made me calm about it

CM: So yes, I see that immutability is not a fundamental problem. Dealing with it is perhaps some inconvenience for some people and in that case it's more acceptable.

MM: Yeah, and and with that in hand, I'm satisfied with JHD’s overall argument that this feels much more like the rest of JavaScript because the trick I just talked about is very much the kind of trick that we go about doing anyway when we virtualize JavaScript into a safe environment.

CM: All right, okay. I'm satisfied on this point.

DE: I agree with the points that were made about why JSON modules’ non-frozenness doesn't break any fundamental property. However, there was a sort of a broader point about how in JavaScript everything is expected to mutable. I think in this topic we shouldn't aim to reach consensus on that broader question because it's possible to support -- to be okay with mutable modules, but not agree with that with that kind of broader point. Personally, on balance, I was preferring the immutable version, but I think it makes sense for us to build consensus and move forward here. So I don't think we should be calling for consensus on the details of the motivation.

AKI: This feels like one of those Supreme Court cases where they're like, this is a narrow decision, don't consider it precedent.

JHD: Right, my motivation was simply to explain my position, not to ask or expect any sort of consensus on my personal motivation

AKI: The queue is empty. Does anybody else have anything to bring up? [silence] Okay, so Dan, do you want to ask for consensus?

DDC: Yes. Yes. I'd like to ask for consensus for stage 3 for the mutable version of JSON modules please.

AKI: any objections? [silence] I think we can go ahead and call that consensus. Whoo. Thank you.

### Conclusion/Resolution

Outcome: Consensus for stage 3, with mutable semantics

## Array.isTemplateObject

Presenter: Krzysztof Kotowicz

- [slides](https://docs.google.com/presentation/d/1a16AxSDVyvZgvt8n2PX4_dYgnMUTvPt0WZr3aNJ3gfI/edit#slide=id.p)
- [proposal](https://github.com/tc39/proposal-array-is-template-object)

[presenting]

KOT: The problem space I intend to solve for is the problem of generic web applications mostly but it's I think it also transfers to regular JavaScript programs as well. The programs are composed of, well the code written by the developers and this code operates on dynamic inputs. In the web platform, for example, the dynamic inputs are usually in a form of a string - extracted off the URL or transferred over postMessage() channel or whatnot. It's a very common problem in those applications that we can't easily distinguish between strings that were authored by the by the developers, and the strings which came from the user input and the natural consequence of this is the DOM based XSS in web applications, but I believe there's also this problem is present for another hosts. DOM xss is a very simple type of a problem. There's a couple of dangerous functions that should naturally only be called with trusted input and when the user input (so, potentially attacker-controlled input) is being mixed into their input then we have a problem. This proposal aims to introduce a function that can act as a distinguisher between something that definitely 100% is part of the application's code when it was built and something that can potentially have been attacker- or user controlled.

KOT: For example, we can have a sensitive operation (e.g. HTML templating) implemented in a template tag function that takes a template (which is part of the application code) and then interpolates some data into the template. It is obvious that the template itself is implicitly trusted, that it should never be user controlled because then we have a very direct problem. While the interpolated parameters can potentially be user controlled or even malicious, template function has a way of resolving that problem securely. For example, you can encode all of the params, reject javaScript URLs etc. - all of those issues are solvable.

KOT: However, the problem is that this template is trusted implicitly. So it is possible that your code base also contains functions that don't really consider the fact that the first argument of the sensitive operation function (the template) should never be user-controlled and should come from trusted sources? One can have a wrapper function that creates an array and calls the sensitive operation with something that comes from strings and ultimately might have been attacker controlled. And in practice these cases happen. The proposal is to make a check that is robust against such class of problems. Currently JS also allows for solving that partially. You can do some kind of a weak, so to speak, brand check for template objects. For example, template objects are frozen and they have a frozen 'raw' property, so you can brand-check for that. However, of course this is weak because it's forgeable. So what I want to propose is something that is not weak in that way.

The mechanisms to enable this are terribly simple. We just have a [[TemplateObject]] slot Arrays, on regular arrays it's simply set to false and in the getTemplateObject algorithm. we set the slot value to true. And then (this is the contentious part), we introduce a new function, Array.isTemplateObject to read this slot value and to serve as a brand-check. This allows for secure literalness check. You could captures early the isTemplateObject function and have a target template tag function that brand-checks input when called, and, for example, makes an instanceof check to make sure that the template object comes from the same realm. This explicit trust check asserts that the template is definitely part of the user application's code and could not have been user-controlled - it's safe now.That function now also wraps nicely because the whole template object is frozen.

KOT: One can build on top of that - for example a generic script URL validation function that doesn't need to encode your particular application rules (script origins, for example - or schemas for the URLs that you deem safe to load scripts from). Just make a brand check (URL template is a template object), parse the whole template as a URL and then optionally introduce some other other basic checks, like for example, maybe your application wants to allow only the scripts from a certain domain or maybe you want to disallow interpolations completely or maybe you want want to allow them only in the query part of the URL. And with that having such a library function you can create values which you know have come from the authored code and we'll only load scripts that were trustworthy enough for your code authors.

KOT: The template objects are created from syntax, and we are using that fact to create a distinguisher that lets us separate strings that are part of your application code from potentially user-controlled strings. Of course, there are some caveats to that. One of them is eval, another is a server-side injection, in which the attacker directly becomes the code author If either of those is possible, then this check would not be robust. But this limitation holds for any language based checks here.

KOT: This check works well with other XSS prevention mechanisms built into the web or other security checks that you can make in your web application. For example, it composes very nice with trusted types on the web platform side.

KOT: Mark Miller raised two issues. One of them is that the Array.IsTemplateObject object is based on an internal slot, which is cross-realm. If you have a template created in a separate realm that has access to your realm, it would have the brand. Internal slots are cross realm. Mark’s opinion is (Mark, please correct if this is not the correct representation) - is that we should stop adding cross realm internal slots in ecmascript because each of them creates this problem for membranes - and the membrane systems would have to work around it. The second is that eval breaks its robustness.

KOT: For the membrane transparency argument. I believe It's currently a practice to introduce algorithms which use internal slots for making either brand checks or other kinds of decisions and the cross realm-ness of internal slots is a feature. There are more examples which violate the membrane transparency in the same way. For example, the JSON stringify function arguments will look into internal slots, ArrayBuffer.isView behaves the same, some functions on the Promise objects. I think another clear example is that a web platform uses internal slots for brand checking objects everywhere - you can't really use a Proxy of an element as an element. It just doesn't work.

KOT: The tentative solution Mark proposed was to move the Array.isTemplateObject to Array.prototype which solves the transparency problem. The concern I would like to put under discussion is this: I'm not sure whether the membrane transparency is the axiom that we should be following. For me personally as the champion it really doesn't matter whether the function is on the prototype or no, both work. I think it needs some decision or some consensus around how brand checks should be working in ecmascript.

MM: Okay, so first of all, thank you. You conveyed my position pretty well. There's one major additional qualification that I'd like to add that I've said by the way, aspart of the threads. I know that you're already clear on these are those which that the reason why moving into the Prototype solves one of the two issues is because of the membrane transparency issue. There's tremendous number of methods that access internal slots on their `this` argument and that are inherited by instances from prototypes. So the argument about practical membrane transparency. is that for those internal methods that access internal slots only? There is this the typical way one obtains one invokes the The method is let's take the data option is a great example is by taking a date instance and saying .getFullYear. So you're fetching the method itself through the same membrane which wraps it and then everything just works. The case that doesn't work is when you do the equivalent of date.prototype.getFullYear.call, starting with the date in your own realm and you're applying it to a membrane proxy for a date in another one. So our criteria is what we've been what we've been calling practical transparency and that's that's admittedly and we kind of the Krzysztof is doing is the right methodology that might overcome this restrictions. I'm very interested in accumulating a list oof violations that he mentioned. I would say two of them are not practical objections to transparency for other reasons. One because it's using the Primitive wrapper objects. The number object that is being, you new capital number of the number a new capital string of the strength that never happens implicitly. Those are never created by strict code, we got rid of all the implicit creation and I have never come across a reason to create them explicitly. So I think that practical code just doesn't encounter the wrappers. So transparent Behavior across Realms with regard to the wrapper's is non-issue.

MM: the more interesting one, the more painful one is Promise.resolved, which when you apply it to a promise that it recognizes its promise and returns it without coercing if you apply it to a proxy for promises it does not recognize that as as a promise however it does recognize it as thenable. So the reason we introduced the whole thenable thing, which we've paid a tremendous price for, was because we introduced it into an ecosystem in which we were coexisting with many other promise libraries at the pond and we wanted that coexistence to be as transparent as possible. So the the Thenable assimilation trick was one that enabled us enabled each promise System, including the built-in one to some extent treating the other promises as if they were their own promises and that worked for tremendous amount of code. And that's the case here as well.

MM: Okay, so that's that clarifies the first issue. The more important issue which might echo what Waldemar is about to say, is this proposal in terms of what it's accomplished chain is completely meaningless unless all evals are suppressed. There is this assumption that if an attacker can run code of the attacker's authorship within that overall JavaScript system - where the system might be multiple interconnected Realms of the same origin if you're talking origins in the browser - but if within the connected reachable object (?) the assumption, is that the attacker cannot run any code of their design and that's just a bad assumption. There's a tremendous amount of code already using SES techniques or to using Compartments going back to the Google Caja project doing this continuously at Google starting around 2010. It's currently thus this mixture of code some of which is untrusted, it's still going on at most importantly at TC53 and it has and also as implemented by MetaMask. TC53 has adopted for embedded [devices] SES as the base JavaScript and moddable has already demonstrated making use of mutually suspicious code of objects talking to each other in a light bulb, making use of those security properties.

MM: So in the same thread also Those how if you want the functionality that Krzysztof wants here how you can do it in a way that still meaningful when there are multiple parties that are mutually suspicious and there are objects from multiple parties that can interact. And that is to take advantage of the table that already exists on a part of per realm basis. That's a weakset set like table within the spec that remembers the template objects so that the template objects are re-used on re-evaluation of the same code (for some meaning of "same"). If you take that table per-eval, which is compatible with everything that's happening now, and then you move the test function into a place that is eval-relative, where under the compartment proposal every compartment has a separate eval function. Then the eval functions are no more threatening than the creation of a meta interpreter. This proposal, you know, the any CSP restriction of the eval does not prevent somebody in another realm that's connected writing a meta interpreter for a language and within that meta interpreter it might seem to have template objects that it recognizes with the within the Interpreter as template objects using whatever test Krzysztof wants to propose. But it would clearly not have the power to label as template something that other evaluators would recognize as a template. What I'm suggesting is the exact same relationship where for example if you move the test onto the eval function itself, then a template created by one eval would not pass the eval.IsTemplateObject of that object from another another eval function.

KOT: What I put forward is a robust check that doesn't survive eval enablement for any of the connected realms. That is correct. But I still believe it's valuable enough to introduce it, and I don't think it's very useful to try to limit the development of the language in the more generic sense to only be useful if eval is disabled- or to make a carve-out for whether whether eval is enabled or not for any of the connected realms. I simply don't find that very helpful or aligned with what we are doing here. That said. It's not necessarily true that the sole availability of eval is enough to break the robustness of the check. What is actually truly let's say again "practical", although I dislike arguing about membrane transparency versus practical membrane transparency. It's just very subjective when we are talking about practical things, but then again raising that practically our Array.IsTemplateObject function would lie to you or would be preferable or foreseeable on the if the eval in any of the connected realms would actually have been called with the user input or malicious import or input that produces the template object. And that is something that we are trying to address with separate proposals like dynamic code brand checks is scheduled for later, right? So and there are many practical again installations or setups in which, while evil is enabled at least the intention of the application author and you know in the absence of bugs that's the case that you trust the inputs right? That's a difficult problem problem to to have and you know mistakes happen, but it's very common at least in our applications in the in Google's that you have eval enabled but we go to certain lengths, great lengths to make sure that user input is never actually passed to did those eval functions and those are just fully application controlled code reviews.

WH: I still don't understand your threat model. It looks like you're not trying to protect against hostile code, just simple mistakes. So why is this necessary at all? Why not just use the heuristic of looking for some symbol or whatnot if you don't assume that you have to deal with hostile code?

KOT: Well, I think the simplest answer to that is that the template objects themselves serve as a very natural place for introducing this check simply because they have a guarantee of having been created from syntax. To reason about security or Integrity of the code - the value that is created it as a template object is guaranteed to be there available for static checking for example, right? We don't have to put runtime guards on certain of the function like for for example, you know adding the symbol for example to an object.

WH: In the presentation you had a slide on alternatives, such as checking for a frozen object with a frozen `raw` property. Can you explain why those wouldn’t work?

KOT: That's a very good question. Actually, I believe because this check would be more robust simply simply. It is guaranteed to in the syntax the otherwise like the alternative is that it's so we could check it is spoofable right?

WH: Yes, but you're specifically not trying to protect against hostile code here. You’re trying to protect against mistakes, not hostile code, so I don't see what this gives you.

KOT: well this being for example easier to analyze right?

WH: It's a tradeoff because you're making things like proxies and membranes much harder — you're adding complexity and I just don't see that you're getting anything for it. There were alternatives listed earlier and I want to understand why those do not work, or if they do.

DE: Historically, the biggest alternative here was a way to check whether a string is literal. This was proposed in TC39 a while ago. I think that's very problematic because suddenly certain strings are literal and some strings are not literal that have the same value, and you have to sort of flow this literalness through everything. This template check is very localized and it gives you a very concrete check of a very easy to to understand property. Agree with KOT’s answer to the question about whether this is making proxies and membranes were difficult because I completely disagree with that characterization.

WH: We're short on time but that did not address my comment.

AKI: Okay, so we only have one minute left, that means we're not going to get through the queue. We could grab maybe five minutes from the next block of time.

KOT: I would be happy to move it to another day or results. I think the core of the issue is whether cross realm slots are to be advised or whether they should be discouraged.

JHD: Cross realm slots are all over the place. They're used to validate that an instance is actually an instance of the thing.

MM: We made it more precise. It's on arguments not on the `this` argument and that is not all over the place. There are more than I'd like and if and and it's important to accumulate the list, because if the list is much longer than I expect. That would be a strong argument. But right now I am very very few well and regardless if they're instance methods then your membrane approach seems like it would work anyway,

JHD: so the focus seems to be about doing slot checking on an argument in a non instance method primarily and we do do that in all four of of the Promise combinators, and we also do that in all the Atomics methods, and we check for things being Typed Arrays, and I think that's it. But the cat's already sort of out of the bag on this one.

MM: The thing about Promises is the Thenable absorption and gives us some degree of practical transparency. It sounds like from your list that the isView example that was shown and all the atomic functions. And the use of the atomic functions is so low level that having the atomic functions not be meaningful across a membrane. I am not upset about that.

JHD: so that's fair but based on the many times that trusted types have attempted to be explained and not been understood by many of us. It seems like this is also sufficiently low level.

MM: You're putting it on the `Array` constructor as a static. It's right in front of people's faces.

DE: We can skip might if the timebox is not being extended.

AKI: We have a few extra minutes today.

DE: I completely agree with JHD’s comment. I think we're just not going to be able to develop a reasonable helpful library for JavaScript if we have to stick to these requirements about the use of internal slots. They're just very normal thing in JavaScript. We made it so that I can read a private field from an argument, not just from the `this` value, and that corresponds to the same kind of lack of “practical membrane transparency”. I do think this is a pretty low level operation. You're checking, was the argument passed into this template tag a literal template tag. I don't think it's the kind of thing that you really want to work transparently through membranes. If you have if your template tag is membrane wrapped. I don't see why that membrane wrapping couldn't then unwrap - do the appropriate wrapping and unwrapping and membranes can't do very much over template templates anyway, because they're frozen objects. So I do think this proposal should go forward. I think there's a lot of different ways that websites are deployed and in some of these trusted types or CSP will be feasible and others they won't, but it's a reasonable general building block to be able to check was this a template literal that was passed in or was it not. That's just a general thing if you want to make any kind kind of template tag with integrity.

AKI: I know this agenda item is specifically asking for stage 3. Are you requesting stage 3? yes, but I believe me I would not be getting it.

MM: Correct (not getting consensus for stage 3).

WH: I am also unconvinced.

AKI: Okay, so does that mean that we do not have consensus for stage 3?

DE: I want to ask when we previously came to stage two consensus on this proposal that came after had earlier proposed it and the people were saying it's not appropriate to be able to distinguish template tag arguments like we did decide at some point that we that we disagreed with that previous argument and that we did find this proposal as a whole to be motivated. So what does that mean? What are the recommended steps from here?

MM: So there are forms of this proposal that as far as I can tell meet its motivating use case but do it without hitting the fatal objections that I'm raising. I'm raising two objections. Moving it into an instance method would satisfy one objection, but not the other. The other objection I think is really the showstopper. Which is, this is making an assumption that all evals that are reachable in the object graph are all suppressed and that there's no objects created by an attacker within the object graph, that there's no code written by an attacker that is within the object graph and I just don't find that - I mean if you can meet meet the motivating issue ones that Krzysztof and you find motivating while in a way that is still meaningful under that much more challenging threat model that more of the participants in TC39 and the entirety of TC53 are already engaged in. then do so to introduce something into the language that is visibly not even meaningful when there are multiple multiple sources of code that Initially mistrustful, I think it's just a bad move

AKI: This looks like there's a lot to be resolved. We need to move on. So if we can talk about this in the GitHub issues and come back to it. That will be great.

### Conclusion/Resolution

Conclusion: No advancement

Reason:

- Solution is incomplete: Argument that the proposal is meaningless unless all evals are suppressed. This is making an assumption that all evals that are reachable in the object graph are all suppressed and that there's no objects created by an attacker within the object graph, but this doesn’t take into account threat models that members are concerned about

## JS Module blocks

SUR: I am back with module blocks. Dan and I have been trying to get everything ready for stage 2 and that's what I'm here for today. So a quick refresher. Module blocks is a proposal to make these two things possible. It allows you to create a module in a JavaScript file that can be instantiated using Dynamic import and then in HTML, and we want to see that model blocks can be used as a source for a model water and even the structure (?) you can send them by a post that you never will open up a whole lot of use cases.

SUR: So first of all, I was personally quite excited when my very my first proposal reach stage one and so I made a tree eat and it actually got a surprising amount of attention for something that doesn't even exist yet in all of it was really positive and you know, some of these people work on node.js is core or babel or rollup and other big names and I know that these are individuals it's just their individual opinion, but I still felt like it confirmed my hunch that this is a real problem that some people are looking to have solved.

SUR: One of the popular (?) libraries that came up when working in this problem space is green by a colleague of mine and it basically relies on stringifying a function to run it in the worker and so as an example, I actually wrote a new green that (? worker pool and lets you run a task off the main thread in the form of a module block and it expects your motor block just to have an async function as a default export and it it will then will invoke the function. Next available working from school and being able to implement that actually proved to me that the aerodynamics that this will enable are really good and there's more room for improvement. But this is as far as I can tell a great starting points and even the implementation itself of this Library users modular blocks to avoid storing the worker code that does run in each worker of the pool in a separate file and that is again one of the biggest complaints that I get get when I asked about worker ergonomics today. This requirement to have a separate file and having module blocks to spin up workers removed a huge amount of headaches around workers as well.

SUR: All in all I thought it a really good experience. Just like trying this out as a dry run even though I obviously couldn't really test it anywhere. I did dive in and I wrote my first back draft and Dan held my hand throughout the entire thing. Thank you Dan, but you know, it's in there and I actually even got some reviewers who were taking the time to double check that I will leave making any horrible discipline mistakes. So if you want to take a look at the spec, here's the URL, but I'm going to give you a quick rundown because it is actually really really really small.

SUR: So the first question that we want to nail down is what is your block and we settled on a simple object which with a new Global to instantiate it and we did explore the option of a string but in the end it makes things just more complicated and hard. It's hard to know - iif it's just a string and you don't know it could be something can be imported or not and it brings up the question of lifetimes. A concrete object handily avoids most of these questions. It's analogous to functions. We have a constructor and tostring function. The toString function is useful for example as a brand check and the Constructor is most of them were for Symmetry and complete this right now. It is spec spec to do the necessary. speech X but if there are strong position we can remove it. I do not think that this Constructor is integral the proposal at all. And that's pretty much it The only other thing in the spec. Is that Dynamic import now except the form and the rest would probably be things that will just solve in HTML and that's exactly what I want.

SUR: Alright, so let's talk about the issues, again focusing on the things that we think are crucial to resolve before we can get to stage 3. So since we want to enable module blocks to be used for workers both as a work source, but also as a message payload, we are effectively sharing code between realms and path becomes something that we need to carefully consider when this is a thing. So one of the core parts of this proposal, is that the module block inherits the import.meta.URL from the embedding module. This way imports would kind of work as expected. But anything that is not an import can make use of the well-established new URL something import meta pattern, which is actually also already supported out of the box by most bundlers today. And so this will basically solve all these issues at once.

SUR: the next issue is that from a standards and going to a or invitations and point at this inheriting of import meta URL is possible, but there is a question about the fact that until now import dot meta dot URL was unique for module and module blocks would kind of break this uniqueness. We have thrown around the idea of adding something to the URL with a hash. So for example, we could add just like a uuid to the end, or a location descriptor and that way it's clear that it's a module block. It's clear where this module block came from or where was embedded in and it will continue to resolve for imports correctly. With the new URL pattern, because it's just an anchor but the whole import by the URL string as a whole would remain unique per module and so I'd actually be interested to hear what people think of that. We have gotten some pushback on making the workers from module blocks directly. The concern here is that it removes too much friction. Basically there's almost no barrier anymore to creating workers and the worry is that people just try one worker per module, which is obviously counterproductive. This is honestly the core problem. The biggest feedback I get about worker ergonomics Is that the source in a separate file is seen as such a big hurdle that people just don't bother and and removing this is just the real problem I want to tackle here. And I hear from some developers. So I'm hoping that we can work this issue out.

SUR: One side note here is that we originally proposed to allow more module blocks to be compared to blob URLs and that is actually still a plan. I think it's really important for backwards compatibility because not every proposal right of the gate is going to get adopted or change to now except more blocks as well. So being able to go the old way while you're L is kind of important, but there is a question about the lifetimes which could turn into a problem. I need to do more research here. And there's also a question that if we can keep if you can uphold this inheriting import a URL Behavior even when you convert into a blob URL, but all in all I'm fairly optimistic here. and that is all the update I have and I will be asking for consensus for stage 2 and for some reviewers when we do our work toward stage 3.

MM: First off I just want to say I really like this proposal. I hope it goes forward. It fits very well into the compartment proposal. On the compartments proposal for control of import namespace. We invented a concept of the static module record and with this proposal the object that your module expression evaluates to would be exactly the static modules. I think there was a complete coincidence of the properties that will bring them perfectly complementary to each other. The import meta under compartments would be virtualized. So there's an import.meta hook. It's important that when you evaluate code in a compartment that the import meta that the code gets is accorded to the import meta hook and it's not clear when and in what context the hook should be triggered in this proposal. Your module object is completely static, it's distinct from a module instance.

MM: and I also wanted to bring up that there is a potential confusion calling these modules. Because generally the way people talk about ecmascript from the point of view of the code their writing is, they call the module instance a module and we really don't have a good separate term for the static module record that all of those instances are instances up. So if a good short term can be invented that avoids that confusion, that would be great. But I do not have have a suggestion.

SUR: I think when I presented for stage 1 with the already had short discussions on the compartments repo on the proposal repository. I think address at least some of your questions, so I would ask you to take a look at those and if there's still more questions to be had opened them on the repository if that makes sense for you, that would be helpful.

MM: Yeah, that makes sense. I think we're very much aligned in this proposal and any rough spots I expect us to work through quickly.

JRL: Okay, so you in one of your slides you are describing the module object is going to be a class of module object or module block. Is this different than the namespace module that you get with import *? In my head they seem like the exact same thing.

SUR: Well, one of them is an instance of a module. The other one is an instantiated module, so They very much cannot be the same or when you have an act from the import you get something you can already call the functions while in a module block, you need to instantiate the dynamic import first.

JRL: Okay.

DE: A module block is basically a module specifier. A module specifier doesn't have the, you know - instead of a string you have your module block, and then that doesn't have any of the exports. You have to import it to get the exports. So I think Mark was kind of speaking to this. The name might be confusing and the keyword might be confusing. Maybe there's a different thing to call it, but they're categorically very different things.

JRL: What is on module block then? Does it have keys? Can you call it?

DE: The main thing you can do with the module block is import it. You can also call the toString method.

MM: We are going to propose in context of the compartment proposal that there are additional methods for asking for the imported and exported names. That's very much parallel to the static module motion from wasm where static the static module is distinct from the instances, and the static module itself describes itself in terms of its import and export. names.

DE: Yeah, and so I attended one of the SES calls to discuss the interaction between the compartments proposal in the module blocks proposal and our conclusion there was these are fitting together kind of perfectly. And also that this more advanced API to get the list of exported names could be added in that later proposal. There's more kind of thought put into it, but we expected that it would be sort of layered together. Does that match your understanding Mark?

MM: Yes, it does. There's no reason why the addition of those methods can't wait for compartments. There's also no reason it can't happen earlier, but I'm happy either way.

SYG: I think Dan covered it pretty well. I don't need to bikeshed names. It seems like Gus has a recommendation anyway.

GCL: Yeah, so this might have been sort of answered a minute ago by Dan and Mark, but I was just wondering like so in the in the thing that Domenic had an idea for whenever back whenever that was it was sort of more like these were represented to in the length like re as the reified JavaScript value. It was more like a function that didn't really like connect to any scope and here it seems to the reification goal seems more like a module like, you know instance thing like Mark said. I just wanted to ask - why is that the direction?

SUR: so I worked with Dominic on the proposal you're referring to, the blocks proposal, and this is kind of The Reincarnation of it. And so there is a lot of overlap. You're definitely right the whole problem with the blocks proposal was that it was had functions as its primitive type and it was a quite invasive change because one of the necessities was to introduce - so basically not allow these functions to close over any values because Otherwise, you cannot transfer them to another realm. And modules already are designed in a way that they close only over one value, and that's the the global scope, and so they just by nature are trying to fill this role and that's kind of where whether choice for modules came from. They're already well-explored by developers, by bundling tools and how they behave with paths, we have to do very little inventing, very little new things to allow this primitive to exist. And that's why we chose to go with modules in the end.

DE: Yeah, I want to add, modules can import other modules which tends to be important for non trivial examples. Unless you're gonna thread everything through, you know know, global variables. With blocks there is this problem where they could, like they had examples with Dynamic import and that would be kind of kind of strange. We also considered making a shorthand for multiple blocks that just had functions. I was advocating for that https://github.com/tc39/proposal-js-module-blocks/issues/6 , and someone pointed out like when would this be useful because usually you want to import something and so that's another reason why this proposal works out better in practice.

DE: Another thing we discussed in the issues is that this proposal makes the data cloning and data flow kind of more explicit https://github.com/tc39/proposal-js-module-blocks/issues/21 . In some way, this feature is lower level than “blöcks” because it doesn't automatically do a structured clone of arguments and return values. That's good because you don't want these very expensive operations to happen just automatically in a way that you can't control.

SYG: Yeah, the import point is a good one. I've gotten feedback from the polymer folks that the ability to have static imports in these modules is especially important. Even with dynamic import, that has the usual carve your async seems kind of problem. So the ability to use static Imports is a distinguishing feature of this proposal.

AKI: All right. The queue queue is empty. Do you want to ask for stage Advance? Yes, then I will just asking if there is any if there's consensus for stage 2

YSV: It's awesome.

MM: Enthusiastic support.

AKI: Oh, that's great to hear not just consensus but enthusiastic support.

SUR: I'll take that. Thank you very much. All right.

AKI: Congratulations.

### Conclusion/Resolution

Conclusion: stage 2

## class static initialization block

RBN: So today I will be talking about the class static initialization block proposal where we currently stand and what has come up. There are a couple interesting discussions we've had recently, but just to kind of set the stage here a little bit. The motivations behind the static blocks proposal again our to provide to capabilities one is to grant privileged access to private fields and methods. Currently there is no clean mechanism for execution that allows you to evaluate code as part of the class declaration that can save off functions that could give you access to the private to private state so you could create shared state such as friend-like access between two classes. The other mechanism is a multi-step initialization that it's very difficult to perform static initialization where you might need to have an entangled value such as two message ports and be be able to store them on the static side of the class for reuse.

RBN: So the basic Syntax for the proposal was the static keyword followed by a block which can contain a statement list. One of the reasons we can't make this look like a method is that existing syntax in that space is already meaningful. So static(){} is an instance method. So there's a lot of complications with using function-like syntax. But what we are proposing is essentially function-like Behavior, but I'll get to that here in a moment. The current proposed semantics are that there is only one static initialization block per class. is evaluated after all static field initializers whether it be public or private and currently may not be decorated. That's something we may revisit if there is reason but currently you would likely if using decorators and when it emerges there when these proposals come together, you would most likely be decorating the class itself rather than any specific static block. But again, that's something that we can discuss as these two proposals come together because by disallowing it now we could open it up in the future should we so choose.

RBN: The other set of proposed semantics are that the static blocks behave mostly like an immediately invoked function expression that happens at the end of class definition evaluation. It has a number of restrictions to avoid confusion and give us some room for future support for possibly other features. So we one of the things we disallow is return statement. There are two basic cases of prior art that we're leveraging here. One is Java static initializers, and the other is C# static type Constructors. in Java they don't allow you to have a return statement, all initializers must to completion. We do have a couple ways around that it in JavaScript using labeled statements and break if you do need to to exit out. Essentially in Java static initializers must run to completion. You can't early terminate with a return statement.

RBN: We also don't allow yield and await. We're in a different scope and context when we evaluate a static initializer. So the yield and the weight of the outer function or outer scope is not preserved for the same reason that yield and await don't work inside of a sync function or inside of an arrow function in a generator or an async. Because it doesn't preserve that capability. We have also reserved `await` as an identifier so that we can in the future determine whether or not we want to somehow carry over the await status of the containing code. However, because of the fact that could be confusing we've decided to disallow it but reserve it. It's used to give us a little more room.

RBN: in addition break and continue statements are forbidden would not necessarily in labeled statement iteration or switch statement same way that we would support them in any other context for a function scope.

RBN: Super call is forbidden. There is no nothing you can do to call super in a static initializer.

RBN: super property is permitted. this This allows you invoke methods on a base class using super because `this` is preserved, which is another item listed here. The `this` receiver in the Constructor function is the Constructor function of the class so that you can do this-dot assignments. Arguments is also forbidden. We don't capture the arguments of the outer scope because again, this is very much like a function and about function evaluation. and just like a function evaluation if you create a VAR declaration inside of the static block, it does not not pois'd outside of the static block. It stays locally scoped. There are a couple things on the cue that I think would be useful to address at this particular point before I move on to the next slide.

KG: So I guess i’m first on the cue. Sorry, I was busy taking notes. Sure. I can talk about this now. Basically this fit that you've been describing where it's it behaves like an iffy is really strange to me. It doesn't to me look like there is a natural like you are defining and then calling a function boundary. It looks more like you are just like it's just a nested block inside of the outer context and so all of these restrictions It Square behaves like you had done an iffy without it like syntactically looking like you are invoking the function is very strange to me. My preference is that you should be able to inherit the yield status and the awake status from outside of the class and that far declarations would host to the containing function and so on like any other block.

RBN: there are reasons that I disagree with. Primarily if you're coming from from another language that has this capability - and there are several that have this in addition to Java C# - those all have the same semantics. It's essentially a function that is evaluated with specific State specific scope. If you were to evaluate this as a block and divorce ourselves from any prior art in this space, just treat it as a block that runs inside the class. There are things that we would end up doing that are a violation of other constraints that we have in the language or maybe not necessarily constraints, but other pre-existing conventions, for example if I I wanted to do an assignment to a static property, how do I do that assignment? Normally, I would use a this especially if I was translating a static initializer that already used this assignments. So I said a Static-X equals one aesthetic y equals this.X Plus 1 for example that we if you move that into a static block for initialization, you need something to reference that could be the class name. We do have cases where classes don't have names. It's possible You could introduce the class name, but we have a general practice of allowing you to use this in static methods allowing you to this use this and static initializers using this in a static block seems like it should be the right way to go. Makes the most sense from from a developer's perspective coming from those cases if it were just like a block but inside the class then the this would have to be the outer this not the inner this and that can be confusing and things won't refactor properly and we already have had discussions about the class.access access in texts that were have caused that proposal to freeze in place for the the time being. So we're running out of options and the common most well recognized option is that we would use this this. That's just generally the that works in JavaScript. There is no other place in the language today where this means something just because you went into a different block unless you're going into a new function scope. This doesn't change inside of a catch Claus. This doesn't change inside of a regular block. This doesn't change inside of a try statement or a for Loop the this is always bound once And if we change that just for this block then that can be very confusing. Why would yield and await work when I can't win this doesn't work so you can't necessarily just take existing code that's outside the block and refactor it into a static into a static initialization block. There's always going to be caveats you have to work with there's value. However in this being its own block from debugging perspective stack traces finding out where my code broke. I mean you have line line information. That's also useful to know that It happened during static initialization being able to use super property so I can reference the Base Class implementation of a static method versus my my overridden version because I might need to do that is something that's necessary having super change inside of a block of wood again violate existing expectations about how Funk how blocks and functions work. So pretty much every case of something that we need to make this a usable feature. Almost mandates that it needs needs to be essentially a function environment.

KG: So I disagree with basically every single point there. Let me just go through them. So first off in Java, I don't think that Javas semantics are very clearly like it's an iffy. I think Java semantics semantics are actually much more to it's just some code that's running as if it's a block. as a concrete example you bring up this, but in Java the this in a static block just doesn't work like it syntax error to use this in a static block. It is not rebound to the class and I think that also points to it not being necessary that this be bound to the class since it's not in Java.

RBN: I'd like to respond to that real quick. The reason is it's the C# is the same way you You can't use this reference the static side of a class inside of a block but you don't have to reference anything. You just use the variable That's something that name. That is the we don't support in JavaScript and never have you can't just say X as a field and just say x inside of a method and that references X you have to say this. so the the this dot Carriage into JavaScript in many places is a de facto part of the language. So unfortunately, we have to have a way to reference these fields. So your statement doesn't hold with this because there's no other way to access those properties are all right.

KG: There is another way to access those properties, which is to reference the class name. The way that you currently access those properties. So anyway, I just the main point is that you said that the semantics from the president's from other languages is that it should be if he liked and I don't think that's true. I don't think it's if you like in Java, you also said that it's necessary to have this I disagree. I think that referring to the class name is more natural. So the third thing is you said that there's no other context in which we introduced a new this binding without like having a function like context. My contention is that this is not a function like context and so introducing a new this binding is know like if it is weird with the current semantics then it is equally weird if you can like await across the boundary people are not going to suddenly start seeing this as a function. It's not like a function if it Is this that is just a weirdness that it has now. There is a natural place to consider there to be a function like boundary, which is the body of the class as opposed to the body of the static block body of the class is a natural place to consider the function like boundary because the body of the class introduces a new strictness context and this is the only context where we introduce we go from sloppy mode to strict mode without transitioning to a new function context. So if you considered the body of of the class to be a new function context. Well, that doesn't agree with the semantics that you're proposing here because the computed property names in the body of the class have visibility of this and they have visibility of is the value outside of the class. It is not the class itself. So that's just not like a coherent way to say that the static block is a new function. And I don't think it's necessary to do. So, I think it is more natural to consider it to just be a block and to allow people to write the class name to refer to properties

RBN: again, my biggest concern with any of that is we are already in the class static features proposal allowing this in initializers if we don't allow it in a static block and have it reference reference to class then we It'll be a stumbling block for anyone that needs to transition over whether they need to change it from a class to the to use a class name or not. And I'd rather maintain consistency. So I think having this binding is very important. You said that for Java it acts like it's just a statement in the outer block. Can you create I can't recall this written out, but can you create a class in a statement context or are they allBasically top level ?

KG: Java is a class-based language. You can create a class with in another class and you can in some contexts create an anonymous class in expressing confidence, but right there's not a like really clean way to differentiate whether it's an iffy are not

RBN: because in those cases from what I understand. Java also does not carry over things like break or continue. They have explicit handling on how return that return cannot work. So again, doesn't you can't put me in a car?

KG: You can be in Context in which you could identify you could call them one of those like the places that you can write a class are not places that you could write a return. So it just doesn't come on.

DH: I think there's more people in the queue that have thoughts about these topics. All right.

?:Y'all ready to maybe Bradley has a drink first.

Bradley: I think there's a lot of passionate debate. That's good. But the restrictions here seem to match what I'm saying reading the static Field initializers restrictions. So regardless of if something is a function or not, it seems like most of the restrictions do actually match static static field initializers. If not all of them, so maybe we could reframe it that way and and have different discussion on why it shouldn't match static field initializers.

RBN: I also want to bring up this was brought up in the issue thread where you had discussed this on the issue tracker. There's already another proposal that is talking about whether not classes themselves could theoretically have async constructors and the carrying over of await from an outer context can seem very weird in those cases. So the main rationale for a lot of the design and reserving await is that we don't know what a lot of these cases are going to be yet. So I've reserved await so that if we decide that we will never allow await to carry over from the Block then we don't have to change anything if we decide that we do want to allow await to carry over into the block for some reason then we can remove the Restriction. But if we allowed a weight as an identifier, then we couldn't remove this restriction because it could theoretically be a breaking change. Yield isn't an issue because yield is a reserved word so it can't can't be used as a Identifier in strict mode code.

RBN: so we're trying to as much as we can maintain these invariants but there are still invariants I think are profoundly important like having the accurate `this` binding that it is essentially lexically bound rather than dynamically bound. Whether this is treated like a function block, I still don't necessarily believe that var should be hoisted out of it. And again you've mentioned there's already already the weirdness of a Mode context when you switch plus when this is evaluated were already in a new declarative environment due to just how private field scoping works in the and public fields scoping works in the proposed in the various proposals. Unless we anything else we can move forward I think all

AKI: all right great moving on is called Amar and she also has a reply to this specific topic and there's a lot but there's also some new topics to get to so, please keep that in mind.

WH: I find Ron’s semantics here to be quite reasonable. The treatment of `this` makes sense and produces the least amount of friction when refactoring code. So I support the semantics at least as far as `this` is concerned, along with the related features.

AKI: You know, and I know this isn't all JavaScript joke, and I'm not meaning to make an old JavaScript joke but in topics like this you saying the sentence "as far as this is concerned" Is not the best way to word something.

SYG: Okay, so there's weird inconsistencies that cut both ways the about treating it to be a block like thing or a function like thing. I like I strongly strongly agree with Ron that we really don't want gorgeous to foist out and if we treat it like a block then naturally we would expect words to hoist out but on the other hand. To the let's align with Field initializers Point from from Bradley. I want to clarify that a little bit that the restrictions were talking talking about like no, return no break break. Like that's that just out today because it's an expression position the initializer and not a statement position right like is the met them in the model is not that these things are are the restrictions are matched. Because we design them that way the expressions are matched. Sorry Sorry, the properties are match because they just don't work in in an expression, right?

BF: I don't really like trying to mental model because we're a diverse group of people, but I would say that they're in an expression position is a good point. However things like super call being forbidden makes sense in the same way, right we have is also forbidden

KG: Sorry, could forbidden makes sense the best. we get could we get another note taker? I'm trying to follow the conversation and I can't also take notes.

AKI: All right, another note taker please. Remember it's way easier now than it used to be. You just have to edit with the quit the computer says instead of writing down every word or attempting to write an agreement about Thank you.

BF: the only thing about expression position that I find interesting. Well poking around in different browsers right now is `await` is sometimes used as an identifier, not as the operator in classes. I don't know if that's a bug I would have to reread some possibly. So that basically leaves us with `return` and I don't understand what you would be returning from just like I don't understand what you would return when you're using a field initializer. So I think although they’re expressions they just don't have a clear slot that they’re returning.

SYG: Right and to try to wrap up this whole discussion to take a step back. It seems like for my RC, please correct me if I'm wrong Kevin that your main problem that that you want to solve is not like return and break off to work, but that you want stuff that has `await` in the static initializer block and if we were to take the position of aligning with field initializers, these were away is disallowed that naturally precludes that whole use case. So is it useful to create? Question to Ron or to the committee as do we care about allowing the `await` use case to be expressed in the static initializer block.

KG: The only time I have encountered any one of these pieces I have been surprised by it. the second thing is that as a practical matter like half of the code that I would write that would use this use as `await` and not being able to would be frustrating but those are like there is a theoretical concern in addition to be part of the concern.

RBN: I was one of the dress this and it's another thing that I mentioned the issue it is still possible to craft a static block that would allow allow you to perform sync sync initialization. So possible could just not have static blocks at all and it's like abuse computed property names. I don't yes, and that's why did not think that argument. Yeah.

RBN: Well, I'm not a huge fan of that and I've been investigating typescript admit to it because somebody said oh this doesn't work and they want this to work and I'm so that's why I brought up that specific case of using computed property names, but it is possible to for example, write an async function that exists inside the static block gets evaluated and then you just the promise for it out. I to the static block, but again, I haven't specifically said that a weight is forbidden for ever and if I if that were the case then we wouldn't be reserving `await` as an identifier. It's one of those things where if we want to allow await here, we'd have to figure out can we allow it inside of field initializer? And then how does that apply to the class? Do we need to have a syntactic marker on the class that indicates the class has a sync code that could be running. There are a lot of things that are there that I would rather not take on for a like minimum viable version of this feature that we can investigate in the future and that's why saying allowing `await` to carry over doesn't preclude this being for example, a evaluated like an IIFE. It just could be theoretically evaluated like an async IIFE and then we we await it is to me. in an async function, but then there's a lot of complexity that's and it's there that we would have to figure out both for this and for class fields and by just essentially reserving the syntax so that it can't be used in a static block for now gives us the ability to investigate that without delaying the value of the feature right now. Yes. I don't know if there's any more going to add to this one to move on. I think I think let's move on move on ons great.

DE: if we have two minutes left, and we should let Ron go through the rest of his presentation as much as I'd like to talk also.

RBN: There is one thing I did want to get to for this. There was was an open question that has since been resolved about the behavior of `new.target` in static blocks, as it seemed to be underspecified in the static syntax proposal when I wrote this slide. The behavior has now been clarified, that `new.target` should return `undefined`. Per issue #25, I plan to follow the same semantics.

RBN: The next question I have is whether or not we should allow multiple interleaved static initialization blocks. C# does not allow this as it acts more like a Constructor for the type. There's only one static block, and it emulates regular constructor evaluation: all fields are initialized and then the Constructor body evaluates just like in JavaScript. So that was the original basis for the design. However, Java’s Static Initializers (Java’s version of static blocks) can be interleaved and are evaluated in document order. This is one thing that I'd like to have some input from the committee as to the direction we should take. I could possibly temporarily straddle the fence and say that you can only have one and it runs in document order so that we open up the ability to do this in the future - if you want preserve C#-like semantics then you would need to place your static block after all static fields. Alternatively, we choose now to follow the Java approach and allow you to have multiple static blocks. There's no reason not to allow them, so it seems like it might be valuable. Does anyone have anything that they care to say if not, so real quick.

AKI: We're at the original time box. We also don't have any presentations that could fit in the remaining time. Do we wish to extend the time box on this topic?

RBN: I would like to if that's possible.

???: I'm good with that.

AKI: All right. Okay. So Daniel, did you want to go back to your topic?

DE: I do like the idea of permitting multiple static blocks and interleaving them with static field initializers. Overall, if we did that, then this proposal would be analogous to static field initializers. I understand if Kevin regrets how static field initializers were designed, but I'm happy with their design: they just act like little methods. `arguments` is banned and there's no return statement, but they're just little expression based methods. Now, modulo banning `await` for future-proofing, these static blocks act the same way. I think all the scoping rules follow in a very natural way. From the from this simple analogy including you knew that `new.target` being undefined (which has been defined in the class fields specification the whole time maybe it was was it was ambiguous to because the spec was not in a great shape that at all really). The way this all works editorially is, call the abstract operation MakeMethod on the field initializer. In methods, `new.target` is undefined.

DE: I think I think this behavior makes sense. `new.target` could be an error, but it will never have a non-trivial value in static blocks or methods -- they are the same. `new.target` being undefined is kind of nice because then, in a context free way, you can check what `new.target` is and see whether you're like a Constructor. I don't know. Maybe that's not very meaningful.

DE: Overall, I think this proposal is great. The only change I would make is this permitting multiple static blocks, interleaving them with static fields. I still respect the motivation that Ron had for limiting to one block and writing it. So in my opinion for stage 3 this would be ready for stage 3 if the committee prefers the single later static block semantics

DE: Editorially, I would prefer that a lot of duplication in the specification be removed. Maybe a third of the specification is duplicating the syntax for blocks. And another third is duplicating the semantics for methods. I think we should simply reference those and then the specification would be like a third as long.

RBN: I also intend to change the layering to be based on the static syntax proposal. At the time the rendered spec text wasn't up to date with the class fields proposals, so I wasn't able to leverage that. Otherwise, I would most likely be leveraging some of the different designs that are already in that proposal. This is something that I plan to change, and I agree.

DE: That's great and thanks for bearing with me and us. I left that in bad shape and ms2ger fixed everything up in https://arai-a.github.io/ecma262-compare/?pr=1668 .

WH: Daniel, when you say you support multiple blocks, what do you mean by that? If you have a `let` statement inside a static block, can you see the `let` variable from the next static block?

DE: Separate static blocks should not be able to see `let` variables declared in their sibling. They're separate curly brace units. They basically behave like if you had static underscore equals and then something on the right hand side. That's basically what I'm talking about. Each one of those gets their own scope. I don't think they should magically share a scope any more than anything else that has curly braces delimiting them.

WH: Okay.

SYG: When I wrote the item, I realized I was incorrect. So, let me check my thinking about multiple blocks. Like Dan, I like the idea of having multiple blocks that are interleaved with the static initializers. While each block would have IIFE- like semantics in terms of the restrictions and this and so on their method nastas, their function is like initializers are also not observable. So currently all the static initializers are just like collected into this function that gets called all the initialization to one function. I imagine the interleave static block that can also be just interleaved into that same function provided. There's you know, some magic to create a new bar scope as well.

RBN: They would most likely be evaluated at the same time in the same order and just collected just like fields with initializers are collected and their evaluation would happen in order at the same time. It would reuse a lot of that same machinery. So it's essentially like a static field that doesn't have a name so nothing gets bound, but it gets evaluated and has a statement context.

SYG: I think that answers my question, which is do we need to make new methods to work initial implementation. It sounds like no, so it sounds good.

RBN: To support this once this is rebased against the static syntax proposal is a relatively small change.

CLA: I would like to voice out here that I support the Java like stuff. The java-like syntax of evaluating the blocks just because of the way that we have static fields initializers and also instance initializers, they follow the same order, the document document order, and I think We probably could do that for the static as well. I also okay if you do the otehr way that we decided and I would be happy with any of this because I personally support a lot this proposal because it feels like static blocks are a missing part of class features in general. So, yeah, I prefer the multiple static initialization. And also having them to be evaluated in document order.

WH: I like this proposal. Just want to point out that it is mutually exclusive in my opinion with the proposal for grouped accessors, at least for the default syntax of grouped accessors. So if this one advances then I don't want the identifier followed by a curly brace syntax for group accessors.

RBN: and I understand that and we've actually been having discussions with the decorators champions group around the syntactic opt-in, which is something we've been discussing and I think the way that the grouped accessors proposal would move forward is a kind of an evolution of the syntactic opt-in where you could have a keyword followed by identifier that represents it's something that's just has an auto getter/setter. You could expand that into a - that keyword followed by the identifier followed by curly brace get set so you can specify decorators on the getter and and the setter independently or the entire block and that then would follow into you could have expand the get from being automatic to actually being fully specified. So it looks like if we do - the way that things look like they might proceed with decorators, that that would be the way that that For it and it would would not become conflicting with this Intex.

WH: Okay, sounds good.

AKI: Well, the queue is empty and there are two minutes left in the day.

RBN: So I will jump to the end - I wanted to give a status update. The proposal is currently at stage two. Stage three criteria: complete specification text is available barring the change to support multiple initializers. The full spec text is available, and it's been reviewed by its reviewers and signed off by the editors. I tentatively wanted to request advancements to stage 3. There is the caveat that if we want to move to multiple initializers, there will be need to be a change made to the proposal semantics and I want to I'm not sure if that's something that we allow anyone to voice their concerns if they want to consider blocking, but I would like to possibly request this for stage 3 with that change as as a prerequisite.

WH: Which variant? To have multiple static blocks evaluate in document order, interleaved with static initializers?

RBN: Evaluated in document order and if you have static initializers, then those are interleaved with the starting blocks.

DE: And presumably this also includes new.target evaluating to undefined.

WH: How much of a change in the specification?

RBN: #25 is not a significant change. For #26 I have to rebase this against the static field spec anyways. Based on the way the static field spec is written, I would be moving the point where the evaluation happens into the same operations that happen for static fields. As we need to get these specs to be fully aligned anyways, it isn't a major change. I will be adding the static field evaluation semantics to this proposal and just perform what is currently a single evaluation to instead occur in the middle of static field evaluation.

WH: Here's my dilemma. I fully support this proposal, but I think it would need to go through at least a bit of review because you're proposing significant changes to the spec.

DE: I think it's important that this have editorial review and I think what we can do is I support this conditionally advancing to stage 3 with another round of editorial review before it really reaches stage 3. A few of us can sign up as the editorial reviewers. I'd be happy to sign up too. Can we do this for you offline? Because I'm not sure there's more to discuss in committee. How would you feel about that?

SYG: Can we go to Kevin's topic? I think the semantics for the interleaving things are not that complicated. So let's at least explicitly enumerate them and agree to that right now and then do the traditional thing where we get on the editorial review.

KG: All right. If we're doing multiple initializers, multiple static blocks. There's a question of where the boundary of the bar scope is. Is it, each static block gets its own var scope and that scope is things in that scope are not visible to like initializers and computed property names and so on.

RBN: Yes, that is correct. Yes if you wanted to share state between multiple static field blocks. You would have to use an out of field or static initializer blocks, you have to use a static field for it.

KG: I'm happy with that.

SYG: Could you go back a couple of slides with all the restrictions? Yes, so to recap to do #26 is we have all these restrictions in addition to that there can be now multiple blocks each block always has its own var scope and its lexical scope and they are evaluated in text order interleaved with static initializers.

RBN: yes, we would essentially use the same mechanism the static field static field initializers are using where we would use make method and then we would just evaluate the method.

SYG: Okay, then I support conditional advancement with the request that after #26 is complete, please send alerts to the engine folks. Usually stage 3 means we're going to start looking at planting it but since the final bits are not nailed down.

RBN: Yeah, and I'll hold off on any updates to the readme on stage advancement until after these changes have been merged. All right. So do we have conditional stage 3?

[yes]

### Conclusion/Resolution

Conclusion: Conditional advancement to Stage 3 based on the following conditions:

- Issue #25: `new.target` should return `undefined` (aligns with methods/static fields)
- Issue #26: Support multiple interleaved `static {}` evaluated in document order alongside field initializers. Each block has its own `var` scope, as each block is essentially an immediately-invoked Method.
- Editorial review of above changes by DE and TC39 Editors
