# 25 May, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Bradford C Smith     | BSH            | Google             |
| Christian Ubrich     | CHU            | Zalari             |
| Jordan Harband       | JHD            | Coinbase           |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Mark Cohen           | MPC            | Invited Expert     |
| Ujjwal Sharma        | USA            | Igalia             |
| Frank Yung-Fong Tang | FYT            | Google             |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Jason Williams       | JWS            | Bloomberg          |
| Chip Morningstar     | CM             | Agoric             |
| Ben Newman           | BN             | Apollo/Meteor      |
| Justin Grant         | JGT            | Invited Expert     |
| Chris de Almeida     | CDA            | IBM                |
| Felienne Hermans     | FHS            | Leiden University  |
| Devin Rousso         | DRO            | Apple              |
| Joshua Blaney        | JPB            | Apple              |
| Philip Chimento      | PFC            | Igalia             |
| Istvan Sebestyen     | IS             | Ecma International |
| Rob Palmer           | RPR            | Bloomberg          |

## Opening

- Previous minutes approved

- We are using a Google Sheets fallback because TCQ discussion management tool is down.

AKI: Next comes tools, many of you know that the freenode IRC network is Under New Management. The instability has led to an exodus of all sorts of projects from Freenode. The inclusion working group, which is an informal group within TC39 who have been strategizing ways to make the committee more accessible to delegates, both new & old have already been researching real-time chat for over six months.

## Inclusion WG Update (Chat Platform)

JWS: So yeah, hello everybody, I'm Jason Williams. I’m a TC39 delegate, working at Bloomberg, and I've been involved in the inclusion working group. MPC usually chairs these meetings but he cannot make plenary this time around. So it's myself and USA is also around and he'll be helping. Systems also. So yeah, we are.

JWS: Yeah. So even though the title of this is conclusion, working group of day, maybe just going to be focusing on the chat. Platforms. As Aki said, you know, due to recent questions and around the entry freenode and Libera, Etc. Yeah, for any future updates on training, I'm sure Mark will be back for those.

JWS: So to give you a recap. Yeah, we were looking at this for quite a few months mainly starting in August. And what I'm going to do now is just give a really quick recap because there's quite a few things that we've gone into detail on and I'm going to, we don't have time to go into detail on every single thing we've gone through. So, this is just a sort of bring you up to speed on what we've been doing.

JWS: Mainly started in August, 2020. We had an issue on the reflector around IRC and inclusion and I think there's been talks around this for quite a while. And I think the main catalyst of this was what I noticed anyway was structural racism discussion was happening. One of the channels that I think some delegates were unaware of and the conversation Love the about. So I think we felt maybe in 2021, we can do it better than this. Talk when underway in this red, there was quite a bit of people giving ideas and what sort of requirements they would like. And then eventually this fell under the responsibility of the inclusion working group. So then the question was asked, do we want to move away from IRC? Do you want to look at and explore other options? This is quite an important question because if we're happy with what we've got, it doesn't make sense to spend time investigating different chat platforms if we're just going to stick with what we have. So the first question of course needs to be, are we happy with what we have now before we start doing any sort of further investigation? I was actually looking for some minutes on this earlier before, but sadly, I can't find them. There was myself, MBS, All's(?), I think we had MPC, DE, and USA. I think there's a few of us and it was pretty much a yes. We want to look at some other options. We want to start exploring what other platforms have to offer. We also had feedback as well, not just through that thread that I showed you, but also, I think miles did a bit of outreach on Twitter and various other places and I mean, some of the main things were assistants so needing to sort of about. so is something that a lot of a lot of delegates on willing to do, there is IRC Cloud which I think most of us use. But then I often had feedback people not wanting to pay the subscription for that or maybe their member company doesn't offer them money to pay for the subscription for that. So that's something that needs to be looked at there was quick sign on. Boarding we've had delegates, who haven't bothered to sign up to IRC because the not knowing how to set up nick serve and their servers. And there's also public logging as well, which is something that we've not set up and it's something we've not put the time into looking at, there's various others, I'm just sort of brushing over here but you kind of get the idea in the same month we looked at what do we want to use.

JWS: I can tell you now that we spent a long time on this, there is no single platform that pleases everyone. We had several delegates in this group. I think those around, maybe, seven, eight, or nine of us, we didn't come to an agreement on a platform. And I don't think, I don't think we ever will. Instead, we needed to flip the question around to what sort of requirements, do we want for a platform? What sort of things are important to us? Only then. Then we can sort of take some of those things and see what ticks the boxes. So, you know, we had assistance, which is quite important. moderation tools. Yeah. It can I use it in a web browser? Can I use it on my phone? Can I onboard other delegates in an easy way without having to spend a day with them without going through chanserv, nickserv, et cetera, and can we do breakout groups because that's people that's what some of us like to do. And the list goes on and so this something that we've discussing throughout August and September and week, some of you may have seen the spreadsheet could put together as well. This was at leave, this was shed on the inclusion for it. Also, but basically people came along and started adding some features that platforms did. And yeah we basically started to build a bit of a sort of catalog, which platforms can do what and where this is still available. Now Actually on threaded steel. I think someone was editing it not not too long ago but basically we had some delegates come in and offer sort of advice on things that were important to them and what they wanted to see. We had to bring this down to a few platforms. So it was mainly these for Discord, Slack, Matrix, and Zulip. Discord was a non-starter, one is because it's blocked in China, the other is that it goes against their terms of service to export logs, and they weren't really being responsive with regarding that slack was quite similar. They also remove their looks after a few months, if you're not on the page here. So it gets quite limited. Their this kind of brought us down to Matrix and Zulip. We went with Matrix as a trial first because we had more delegates using that and more delegates knew how to get up and running. I kind of look at these like proposals: Matrix had a couple of champions and although Zulip technically offered quite a few things we still weren't weren't sure about we had lot more delegates, championing Matrix and you're willing to sort of help us get to the up with that. So that's what we went with in October and we start the trial. Initially, anyone who joined the inclusion working group had These are the blocks that of Miriam said after we started running out invitations, we started soliciting feedback. That's pretty much been the case of until now. there's not been anybody coming to me personally, saying, this is not a I don't want to go down or bad idea. I'm not sure that Mark and the others, but what I did have was people saying things like, you know yeah there's a couple of connection issues or I don't know how to join that room or where are the logs, but there's they've mainly been trivial things that we can fix or things that we've been our control because we had things like this coming up. We decided to let the trail wall and let it keep going. We've had delegates trickle in and out. And that's why we've basically extended the trial and you can still use Matrix right now, we haven't made a decision on this but we decided to keep it going. For those who haven't seen it yet this is what Matrix looks like. This is me using Element in the browser. We are trialling Spaces at the moment. So if you've come from Discord, probably seeing something similar, you get a server with a group of channels. Each channel has some public looks, and we have room to the very, they should be a one-to-one match with what we have on IRC actually, so all of you can see that we have an IRC also public locks can be accessed by anyone. and yeah, we've been trying this for quite some time, pretty much since October. And as a working group, we're happy to put forward Matrix as a recommendation from what we've been seeing. I'm going to show you a quick demo If I have time take few seconds but just before I do that, basically what you were saying about Libera. It's yeah, it's been a situation with freenode. I'm going to go into that because we don't have time and I'm sure most of you sort of know what's happening there anyway, but I can't talk for TC39 regarding this but as far as the inclusion working group is concerned the situation which we know doesn't really change anything for us. We were talking about IRC back in August and most of the issues that came up were about IRC the protocol, not freenode. freenode. The network or not, any of them. It's on it. So this even if there was a move to Libera, it wouldn't change anything in regards to what people have bought up and because of this situation as far as this working group is concerned, it doesn't really change anything. So, I just want to sort of touch on that.

[switch to demo]

JWS: Okay, so basically this is this is how Matrix is working at the moment, probably very similar to IRC, you have your users on the right, which you can see. This is the TC39 delegates room yeah, we have they're they're all the different rooms now which are available so we have General people, you know, people have been chatting in the using this for quite a few months. So it shouldn't be. Any should be the new for most people on here Temporal? Zone of topic. We also have this and this has been used and yeah we are using spaces. We're trying this. That you can see all of the rooms, you can see the logs. Also hese go to the beginning and this is something that's just sorted for us. So we do have public logs set up and you have all the rooms and have a lot of people and you can do direct messaging. and yeah, and any questions you can come to the conclusion group. And raise anything here. This we're looking at this. So feel free to ask any questions in this channel. Yeah, I believe that's it.

WH: How do I view the logs on one page? It shows me just one screen at a time. I'd like to be able to find things in the logs and I can't do that.

JWS: USA might know the answer to that, I don't know if you can set it to load everything in a single page.

JWS: MPC says, the easiest thing is to just search in the room itself. And to try and use that if you're searching for something specific. Would something like that help?

WH: I'd like to get the entire log, download it and research it.

JWS: There should be an export option so that you can download the whole thing. But aofffter the top of my head, I don't know. I don't know how it's possible.

USA: Yeah, this logging interface is paginated. We could explore setting up a different interface for the logs. It's paginated for reasons, they they prefer doing it that way. But I understand why you'd want to see all the logs. But as MPC pointed out, if you want to search, if there is a specific thing in a room, then it's best to search in that room because that's more powerful.

WH: Yes, well, for certain legal purposes, we need to be able to grab the entire log. If we're going to be using Matrix for conversation in TC39, we must have a way to do this.

USA: Sure, I'll let you know later if you can just switch this interface, I think we can.

AKI: there's also a pretty robust bot support. So, if we find that the Matrix logging itself is insufficient, Having a logging bot is not out of the question.

AKI: Okay, so this gives me a great opportunity to intro our next coms tool which we may want to come back to this plenary. But I just want to mention. We have some minor downtime for TCQ, which is our typical discussion queuing tool. There was an unexpected outage and a very expected baby. Welcome to the world, baby Terlson. And now we're going to be using Alterna-Q for this meeting. So I'm just going to need you to use your imaginations for the next slide.

AKI: It is the opinion of the chair group that the inclusion group have done their homework. We can return for a conclusion later.

## Secretary's Report

IS: I have sent out over the TC39 file server, the Secretariat report for this meeting rather than presenting it here. So if anybody has any sort of questions you can ask me now or during the two days, or whatever. Very, very briefly what I can say is that everything is on track. There is nothing unusual. We had one deadline in the meantime, which was on May 10. And this was the so called “Opt-Out”. That was the deadline for any TC39 member company to speak against the RF status of the standards that are going to be approve on June 22nd by the ECMA GA. So these are the ECMA-262 and the ECMA-402 standards, if from the RF IPR point of view is there anything, what they don't want to see in the draft. That is according to the RF Ecma patent policy. So if anybody had any problems with that you should have told so by May 10, 2021. We have not received anything - like also in the past years - we have never received anything so far. Nevertheless, we have to "play" this sort of procedure, every year, in order to comply with the choreography, but, that is the policy. So from that point of view, we can go ahead and then to have the approval on June 22 by the Ecma General Assembly. During this time if somebody finds editorial mistakes or spelling errors, or something like that, we can correct those and actually some of them already came in, and we expect that maybe some others will also come in and even after the approval especially in ECMA-262 which is a very long standard. And also, with the new parts, so it always has something for editorial change. But from a substantive point of view, it has to be already very, very stable. So on June 22nd, this will hopefully be approved standards. And what will be approved is the HTML version of the standard. We also have a PDF version of the standard. You may remember the PDF version is not the master one, the master one is the HTML so you should look primarily at the HTML and then at some point in time, we are trying to synchronize from the quality point of view as soon as possible, if we can manage it for. that the PDF versions also look nice. And this is rather important because these two standards and also the other TC39 standards represent more than half of the downloads of all standards that are currently getting downloaded. So this is basically the only news that I have to share with you. Otherwise, I mean you can read the rest of the report and I tried to be as complete as possible about that in order that you have not too many questions regarding this. And with that, I would like to close now my reporting. And as I said, please read it and if you have questions ask me. So thank you.

## ECMA262 status updates

KG: That's me. This will be quite short. So this is the May 2021 status update. There have been no major editorial changes since the previous meeting. This is in part because we were focused on landing class fields and in part because the last meeting was very recent. The major normative change was of course that we landed class features. That is to say, public and private instance and static class fields as well as private methods and accessors. The editors and the champions of the proposal did a few last rounds of editorial changes on the structure of that PR and landed it a couple of weeks ago.

KG: One other topic that we wanted to bring up is that as part of our ongoing quest to move parts of annex B into the main specification, where it makes sense to do, we are going to be pulling in the legacy octal integer literal syntax. There are a couple of these weird octal literals and we have consensus for pulling those into main specification, but we wanted to say that specifically, we are going to be tagging these as “legacy” meaning we will have a note which says, basically, this is in the spec because we did it a long time ago, we regret that decision, but we're stuck with it now. We assume that everyone is okay with the addition of this note given the these productions have always been considered to be “legacy”, but we just wanted to give a heads up because when we asked previously about moving these into the main specification, we did not specifically mention that we were going to be tagging them with this legacy note. So if you have objections, of course, please bring it to our attention. But otherwise, we will assume that everyone is on board with marking those as Legacy.

KG: Right, upcoming work. Basically the same as it has been forever. I did again want to call out #545 here, which is still one of my higher priorities, which is to make abstract operations have slightly more structured headers. This is only going to affect authors of spec text. The rendered spec text will look exactly the same. But when you are authoring abstract operations, they will look somewhat different. Don't worry about fixing up your PRs, I will be happy to do that for you, but just do note that if you're reading the spec text you can expect abstract operations to look a little bit different. The purpose of this is of course to make it easier to statically check the correctness of the specification, because it is an extremely long document that amounts to like a thousand pages of code. Basically, the correctness procedure currently consists of, a community member runs his tool on it, and I try to read it very carefully, and having more structured information that a computer can check will make both of our lives much easier. And then other than that, basically the same editorial work that we have been planning to do forever. That's it. Thanks.

## ECMA402 status update

USA: I'm Ujjwal and welcome to the ECMA402 status update. The at a bunch of not. So interesting. Editorial work also, but it all comes down to three normative PRs that I would love to hear your thoughts on. So first up, we have #571 [TODO: link]. This comes from Long Ho who is going to maintain a format JS (???) and this is more motivated by something that they needed me from that chest (???). So that the tldr on this one is that when we are selecting the best Locale for a sudden set of options, we need to take the our cycle into account, right? So if the user prefers 24 hours, or 12 hours, or, you know, something else. And this information was just not available before. now it is. So that's what this moment PR does is it adds more information and implementation Define behavior can access that information? Next up, have 572, this is by Shane Carr. it fixes spec bugs in number format. So In number four, in sorry, in unifying numbers format to spec bugs Bugs, were introduced. 2020. These bugs were uncovered by Shane while working on number four and this PR resource pack Behavior to that reality. So that's that's also conducts especially when if you're grounding all these numbers and also displaying times a next up, we have 573 which fixes the behavior on time zone names in comedy, bearing. So this was done by Frank. This was also uncovered while working on a new proposal. This one being the PX and time zone name. It also fixes an older bomb that was filed by my colleague and squeegee. So this fixes the way time zone names or handled and allows the new proposal that were working on to actually utilize that and allow more expressiveness time zones. Sorry, I don't have your names. So that's pretty much it. Those are the query tool Quest we reviewed them in tgp but I'd love to hear okay? I guess that points to consensus.

### Conclusion/resolution

- Consensus on these PRs.

## ECMA404 status updates

CM: Uh, it's still there. I looked.

## TC53 liaison status updates

PHE: we should have just finished our opt-out period for our first real meeting this week. And so we might actually have real standard after the next general assembly meeting in June. So, we shall see why who? And those of you who want to, you know, influence the future of embedded JavaScript we're starting conversations about what's in the next ones, though. I join us at our monthly meetings.

AKI: That's thrilling. Congratulations! Or pre-emptive congratulations.

PHE: Yeah. We're not, we're not celebrating yet, hopefully thank you.

AKI: well, That’s the end of the housekeeping, agenda items. And I don't have a window with the agenda open right now. I'm sorry. I know I wrote it. so, if there's no COC, the next would be Shu. Not updates from COC. I believe we do not have any updates from the code of conduct committee. Not a lot has happened in the last month.

JHD: I just want to add the test262.report website was offline for a long time, and then some somebody pinged Bocoup and it went back up for like a day, and now it's offline. It seems like a really useful resource that this committee should be invested in maintaining, or ensuring is maintained. I just wanted to get that on the record - it would be great if we could figure out how to help ensure that. That's all.

YSV: Yes, I can see. Yeah, sorry, yeah, I can say something to that. JHD, I spoke with Bocoup and they got it online. The problem appears to be with JSC with a JSC. download its infinitely, looping, and then crashing. So they somehow have been able to get it online like in the mornings and then it crashes in the evening, they are still investigating it. and the issues open. I'll post it in the Matrix so that people can follow along.

AKI: Does everybody have a link to the Alterna-Q? Does everyone have access to that. Okay. nobody said no. So I'm going to go with yes. If you need access to it, message me in the 8x8 chat or in Matrix or on freenode or on Libera, I'm everywhere. So if you need a link, let me know. Leo, Leo, what's up?

LEO: Yeah, I just been talking to Rick and we are considering the options and all the implications for doing something that actually that also provides test results in general. But I think there is even a bit large plans for the new web platform, but also, including Test262. We can talk about this with more details and we definitely are welcoming to discuss this. With more people, it's should be something public eventually. We don't have anything like ice cold or anything. We're just in the talks. Rick is not here present. He's actually creating some plans for this and all the implications right now, what it means for us doing this as well.

AKI: Excellent.

## SharedArrayBuffer `.length`

Presenter: Shu-yu Guo (SYG)

- [PR](https://github.com/tc39/ecma262/pull/2393)

SYG: So PR pretty simple. SharedArrayBuffer has one parameter: the length. Only has one parameter for the length, for some reason, in the spec it is marked as optional to contrast ArrayBuffers, whose parameter is not optional. This affects basically the length property on the Constructor itself and all the web engines that I checked including Xs, Already report a length of 1 for the SAB Constructor, meaning that the parameter does not look optional. This just changes the parameter to not be optional and I think Gus pointed out there's another editorial fix up to remove the word optional here but that's about it. Any concerns here? I would be extremely surprised. Alright, I'll take that as consensus. Thank you very much.

AKI: MM just popped onto the queue to ask why it was optional.

SYG: I have no idea Mark. I imagine it's when we added it - when we originally merged the feature for whatever reason in the spec draft it was marked as optional and people didn't catch it.

LEO: I'm sorry to jump in, but I believe if I recall this correctly, we should go all the way to That meeting in Munich, when I tried to address consistency for the array buffer Constructor, I don't remember what year, 2016? Yeah, yeah. So I believe there is a PR that dates to 2016 then talking about consistency of these constructors for optional values. and I remember we got some like implementation. I think we try to follow like to just match consistency. And that was it. We should not have like many notes, but a PR to ECMA262 about this.

### Conclusion/resolution

- Consensus

## RegExp Match Indices

AKI: Thank you. Next up, we have Ron Buckton to talk about RegExp indices

RBN: I’m today about the regex match indices proposal. We've discussed this number of times in the past, it's currently sitting at stage three. Same slide of presented for a while about the motivations for rigid for the regex matching these proposal to provide information about captured groups other than The entire capture as far as position information, which can be useful for things like, like, improving, error message and parsing tools accurate positions for syntax highlighting tools quote technique, for example, or vs code, it's one step towards supporting enough more interesting, and useful features of various regular expression grammars that are used by tools like Vs code, textmate et cetera. They currently depend on regex posures, like only guruma. and it's a opposed to the opposite. The alternative is to manually capture leading groups, which is extremely expensive and quite difficult to get correct with regular expressions.

RBN: so, some historical information, we adopted stage 1 for this proposal in 2018 on May 24th. Originally adding offsets property. We had some discussions about performance concerns at the time. Stage two adoption was on July 25th, 2018. We discussed some different approaches addressing performance issues and alternative Solutions. We're each stage 3 on July 24th 2019, originally determining that both the Callback and options objects. We considered it on during stage two. Adoption were subclassing hazards. We'd renamed offsets two, two, indices to align with the rest the terminology on regular Expressions. Namely the use of next index-match dot index et cetera. We had some early perfect stations in V8 that said that the performance overhead might be negligible. In the eighth, JSC, we had at the time consensus on a simpler API and event in advance to stage 3 with that. Since that time we had several updates as the implementers built this into their various engines to determine what the outcome of these possible performance issues would become so on December 30, 2019 they shared updates from their implementation, but the time we included not to have any changes in November of 2020, we had updates from JSC that shared their updates for performance concerns and mitigation steps, we decided to meet the implementers and Champion to meet offline to discuss a remediation strategy and the consensus on January 25th 2021 for stage 3 was the adoption Of a `d` flag to opt into the indices result on the mat result. As a result, the proposal currently is at stage 3. We currently are meeting all stage four criteria. We tests for both the early and the current version of the test of the feature for test two. Six two, which have been merged. There is a PR for Equity 262, which has been approved. There are implementations in V8 shipping as of I V8 9025 9, which is in node.js V16, from 90. It's It's shipping in JavaScript core, at least as far Tech preview. don't have a Mac to test things out, so, I'm not sure if that's now in a public, non pretty Branch, but it's also shipping in spider-monkey as a Firefox. 88 at this time, I am seeking stage 4 consensus and ask for any objections.

AKI: Shu has something to say.

SYG: Just expressing support for stage 4.

WH: I concur.

AKI: Great, that's consensus.

RBN: And I would like to say, I've been a member of this committee for far, number of years, far-flung number of years. Now have participated in a number of various proposals and discussions. Have a number of proposed my own proposals of my own that are still on track. This is the first one I've had that as Champion. I have officially reached stage 4 I'm extremely excited about that. Thank you.

AKI: Oh That's great.

RBN: And that is the conclusion of my presentation. Thank you so much for everyone's time that they put into helping put the move this forward and expect more on regular expressions from me in the future. I've been working on something a comprehensive list of things that I have been working to bring up in a future meeting. Cool. I love, I love All right.

AKI: Next up with Top Level Await for Stage Four, Yulia.

### Conclusion/Resolution

Stage 4

## Top Level Await

Presenter: Yulia Startsev (YSV)

- [proposal](https://github.com/tc39/ecma262/pull/2408) -[slides](https://docs.google.com/presentation/d/1EMtuhxtr2kG9yjjS9cCguvG5u7ksvQdvkICBfEfaQFo/edit#slide=id.p)

YSV: Thank you. Okay, so, hi everybody. My name is Yulia Startsev. If I am the new miles. No, I'm kidding. I'm, I'm bringing a top-level. Oh, wait for stage for taking it across line. Just sort of finishing things up for four miles, who is the original Champion, we are now co-champions on this proposal. proposal. The second line is his Nature, the wait, is over, but we'll see about where we are with this proposal in a second. So, really quick refresher for everyone, what top-level away does, is it enables modules to act as big asynchronous functions with top-level await the modules can await a given resource. For example, if you want to do a fetch or an import at the top level, you'll be able to weight it as though it's a synchronous called but it will In fact be asynchronous, requiring a tick And Etc. the proposal went to stage three in think June 2019, I didn't prepare the whole historical list to that. We just saw from Ron but we can go through that if that's helpful But you did see an update to this to this proposal last meeting where we know the meeting before. Last, where we discussed a change to post order. semantics around synchronous modules that are loading in a asynchronous child, in which case, the original specification allowed it so the sync modules would be reordered. We changed that in the previous meeting so that they're always imposed order. So that's that's just a reminder of happened last meeting.

YSV: Prior to this meeting that GB and I have been working on editorial changes primarily. So for example

YSV: So what I'm showing you now is one of the editorial changes that happened. Specifically I added a significant section of prose. describing what happens when there is an error in an asynchronous module graph and how it fails. This is non-normative text. this is just illustrative prose to help people understand what's expected to happen when a given module fails, how that impacts the rest of the asynchronous graph. The second topic is a spec, readability PR. so this was in response to an issue open by Keith Miller(KM) in which the specification text around the state change from links to evaluating to evaluate. It wasn't entirely clear especially in association with the async event Boolean which technically acts more like a counter. So what GB did was, he wrote this PR, which re-introduces the concept of a state, a private state to the specification into implementations if they choose to you to implement in this way, a stage called evaluating async to make it clear that a given module is being evaluated async And also Aim. So it went back and forth on the this issue is still being called queued evaluation. We went back to async evaluation in the end. So the summary is we're replacing all evaluated State checks to check for evaluated or evaluating async. We're replacing evaluating to evaluated for the transition of async executions with evaluating to evaluating async renaming racing to async evaluation. Again we went back and forth on this a couple of times. and we are appending the transition of status from evaluating async to evaluating to all the sites, where we previously set async evaluating to false. We never transitioned what used to be the async evaluating field, which is now the async evaluation field back to false. It's always the left as true once the evaluation has completed.
So this is also an extensive editorial PR, which we hope makes the Spec more readable and the intention of the specification, more clear. Please check it out. If you've got any concerns.

YSV: Okay. And, of course, since we're asking for stage four, I went through our open issues and there are still a couple, but want to specifically highlight the issue that was opened two days ago by hax.

Shows https://github.com/tc39/proposal-top-level-await/issues/182

YSV: Now, this issue is bringing up the fact that the top level top-level await can be hidden in Child node and it will have impacts on the graph specifically he's showing this from the perspective of HTML in that if you have two modules being loaded in And one of them used to be sync and was doing Global State setting, but then it became async that this is that this will potentially cause bugs. Now, this is actually covered in the readme and specifically. There's a line in the readme that talks about Pollyfilling and that any polyfills that use top-level. any polyfills that want to work with top-level await will have to imported by the modules that depend on them. So this was something that's been discussed in committee, but this is being brought up again as a stage four. One thing to also highlight here is that the solution given here is to restrict the use of top-level await to scripts that include the async attribute. Now, the async attribute has its semantics that are completely distinct from top level await, but the more important point here is that the specific solution to solve this isn't something that will be within the scope of this community to specify. So if we want to look more deeply into this, we should definitely keep that in mind. So that's one open issue.

YSV: And another open issue that hasn't quite come to resolution is also a host integration, PR. specifically the service workers integration PR has not yet been merged all issues have been resolved on it and we are just waiting on the editors to to merge this in if they think it's ready or give us further feedback, if it's not and additionally, there are a couple of things specifically around documentation and also tests that's the current work. That's still on the back burner. I haven't quite gotten the test yet because they're rather complex. So continuing on with the presentation.

YSV: The current status is we do have a large number of tests 262 acceptance tests merged. There are compatible implementations in V8. spider, monkey core, chakracore and I believe in a few other engines and an integrated spec text PR has made. We're waiting on the ecmascript editors to sign off on that pull request. So, that's all I have to show and I'm happy to take questions from the key.

JHD:. Entirely covered by Yulia by bringing up JHX’s issue that they had asked be brought up on the record, because they couldn't be presen. I explicitly support stage 4 for this. I think JHX’s suggestions, are actually a great idea for HTML, but I also think it's completely out of scope of this committee, and it's unrelated to whether this feature is ready for stage 4.

YSV: Great and do we have anybody present who would like to speak more to JHX’s point?

SYG: I just want to make sure I understand the point that JHX is making. Is the problem is that you have two modules, both of which are sync and both of which are doing some kind of global State mutation. And if one of them Becomes async by virtue of depending on an async module with TLA. Then, even with, without the module script itself changing the behavior changes, is that his point?

YSV: Yes, that sums it up quite innocent, okay?

JHD: Usually adding TLA is a breaking change.

SYG: Right.. and his suggested fix here is to distinguish these somehow. Okay, Okay, I yeah. I don't know how that would work, but okay, I think I agree that this is yes, this is out of scope for TC39 and should not hold up, stage 4.

AKI: Great. Thank you. Queue is empty.

MM: I support.

AKI: Is the await truly over?

YSV: The await might be truly over. If it is, I have one last slide I want to show which is a big thank you. So I came in super late to this and I just want to say thank you to people who did incredible work on this. Guy Bedford did amazing work getting this across the finish line. So dude, and a stooge ER Den Ehrenberg of course to be as copper coppers JSON Orndorff and everybody else who helped rather long-running piece of spec text. Make it a Slime. So if this is stage 4, then Bravo, everybody unless there are any objections, I do believe this is stage 4, congratulations to all of you. Thank you for your hard work.

### Conclusion/Resolution

Stage 4

## Temporal Normative PRs

Presenter: Justin Grant (JGT)

-[slides](https://justingrant.github.io/temporal-slides-in-progress/)

JGT: [Slide 1] Hi I'm Justin, I'm a champion of the Temporal proposal.

JGT: [Slide 2] Today we're going to ask for consensus on two minor normative PRs to address issues that came up since the last plenary. First, a process note: we got conflicting advice about whether all agenda items should be posted 10 days in advance, or just stage advancement items. This item was added 7 days in advance. We apologize for the confusion. Before digging in, here's a quick update on what else is going on with Temporal:

JGT: We're starting to get implementer feedback. We got really good, really detailed (and really voluminous!) feedback from Andre Bargull on the SpiderMonkey team, and we're working through that feedback. So far, no normative changes have resulted, but if there are any normative changes required then we'll come back to a future plenary to ask for consensus on those.
JGT: We're also porting the Temporal docs over to MDN. Eric Meyer has been working on this. There were some licensing issues that held us up for a while, but those are now resolved and the content migration is well underway. And we're writing more tests! So, let's look at the two PRs...

JGT: [Slide 3] The first one is a fairly straightforward spec bug, where the spec text doesn't match the intended behavior of the `getISOFields` method. This method is used by userland custom calendar implementations to read the values of internal slots of Temporal objects. The output of this method on Temporal types is supposed to be an object whose unit properties like "month" or "day" should have an "iso" prefix. Also, properties should be added in alphabetical order.

JGT: We discovered that the spec text of two Temporal types doesn't match this expected behavior. The ZonedDateTime type doesn't use the correct prefix. The PlainDateTime type doesn't emit properties in the right order. As you can imagine, this is a straightforward fix. It's a breaking change but will only break custom userland calendar authors, of which there are very few at this point… and we know most of them.

JGT: [Slide 4] The second PR is a little more involved. It was brought to our attention by FYT from Google. The problem is that the current Temporal spec isn't fully compatible with how Intl handles the names of date & time units like "day" or "month" or "week". In Intl, the canonical name of a unit is always singular. This matches other industry standards for unit names, like SI units such as "meter" or "second". When Intl outputs unit names, the output is a singular string. In the code sample on the slide, the output of `Intl.DateTimeFormat.formatToParts` is an object with a `type` property that has a string value of "day"... not a string value of "days". The Intl docs also favor the singular form. Now, when Intl accepts unit names as inputs, it's more flexible: either singular or plural is OK.

JGT: Temporal is already very close to this behavior, with a few exceptions. Temporal doesn't generally output unit names, but there is one case (when normalizing options objects passed to a custom userland calendar) where it could be possible for Temporal to send a plural unit name back into userland code. For inputs, Temporal (like Intl) currently accepts both plural and singular unit names like "day" or "days" or "month" or "months", with one exception: the singular unit "week" is not currently supported by Temporal. The current Temporal docs include a mix of both plural and singular unit names. Anyway, FYT made a compelling case that we should align Temporal behavior to Intl's existing behavior, and we agreed with his argument. So we want to make some changes.

JGT: [Slide 5] To summarize these changes: we want to make the singular form of unit names the canonical form throughout Temporal, just like Intl does. This means the following changes. A non-breaking change to accept "week" just like all the other singular forms: "month", "day", "hour", etc. that are already currently supported. Normalize options values as singular strings when options objects are passed from Temporal into userland code. This only affects one method, and only in custom calendar implementations, and like the previous PR it's a breaking change but only for a handful of custom calendar authors. Finally, a non-breaking change to the Temporal docs to emphasize that the singular form of unit names is canonical. This is exactly what the Intl docs do on MDN.

JGT: One clarification: these changes only apply to property *values* in options objects. Property *names* on Temporal's Duration type will stay plural like `days` or `weeks` to align with the naming of every other date & time API we could find, including both ECMAScript APIs like moment.js and non-ECMAScript APIs like .NET.

JGT: [Slide 6] OK, these are our two PRs. Does anyone have concerns with these PRs? If not, we'd like to ask for consensus. Thank you!

WH: Are the unit names always in English or are they internationalized?

JGT: They are always in English. This is not for localization. These are programmer-facing enumerations.

AKI: Cool. Other than that, the queue is empty.

SFC: Yeah, just to clarify, USA is the progress of working on the proposal to allow for proper internationalisation of these names, which is exactly how this request came to be, so that they are localized when you call `toLocaleString` on the duration. But the identifier is, as usual in ECMAScript, still in English.

WH: The reason for my question was that there is only one plural form in English, but other languages have many plural forms depending on the number.

JGT: Yeah, these are enumerated string values. They're not localized.

AKI: Are we clarified? Are we good?

WH: Yes.

AKI: Great great. Okay. So do we have consensus? Sounds like a yes to me.

JGT: That's great. Thanks everybody.

AKI: Thank you. We are a little bit ahead of schedule, which is fantastic because it means we can move TCN to now. And that way, we don't have to worry about timing later in case FYT is fast. Thanks for being flexible.

### Conclusion/Resolution

All normative changes achieved consensus

## Accessible Object.prototype.hasOwnProperty() for Stage 3

Presenter: Tierney Cyren (TCN)

- [proposal](https://tc39.es/proposal-accessible-object-hasownproperty/)
- [slides](https://docs.google.com/presentation/d/1r5_Jw-gR8cRNo7SJyWtd6h_fEyVFJr9t3a2FvCBPiLE/edit?usp=sharing)

TCN: So quickly going over the proposal again reef covering. This is what you had do before this proposal if it you know succeeds to get has some property as kind of a safer way to call hasn't property. we commonly find this in a lot of places, and it's very boilerplate-ish code. After you'll note that this is changed to `Object.hasOwn`, but roughly similar code without the boilerplate for the same result. So quick refresher on the motivation, there are a number of existing modules in the ecosystem that emulate this functionality, this if statement works the same, no matter which of these you import I actually did end up, thanks MPC for finding larger numbers that actually double the count of what we expected for this to be for those two months, the two larger modules. So previously `has` and `lodash.has` were marked as I believe just under a billion downloads, like million and I think 97 million on `lodash.has`. Those numbers are significantly larger, according to npm-stat.com, this is from January 1st 2015, to yesterday. They're actually exceeding 2 billion downloads. So there is significant usage of this functionality. One of the reasons that `hasOwnProperty` is potentially a foot gun is when you call `.create` on a new object or to create a new object with `null`, there is no `hasOwnProperty`. So library authors can't can't rely on calling it directly on an object, thus leading to the boilerplate that we saw earlier. You could also, you know, prototype pollution, redefine `hasOwnProperty`, and it'll be whatever you re-defined it as, which is potentially dangerous. So, again, another reason that, you know, framework authors and ecosystem authors can't rely on `hasOwnProperty` directly. There is also relative usage of no prototype built-ins. It's recommended by eslint itself and also enforced through the Airbnb JavaScript style guide. And so it will be often used by a lot of people when they're writing JavaScript. So, again, another reason that we can't really ecosystem developers can really rely on this. MDN also suggests something similar to what eslint suggests and asserts that you should use an external `hasOwnProperty` which leads to that same for the replica (???).

TCN: So this proposal as object.hasOwn notable here, is that we have changed it from `has` to `hasOwn` based on committee feedback from last session and it is the same behavior as calling an external `hasOwnProperty`. Again, here is some more developer feedback from the initial thread that started the discussion. People seem to want this. There were no negative responses in there saying, this is an awful idea. There is developer interest in it.

TCN: So updates for stage 3. Committee feedback again we've updated it from `has` to `hasOwn`. This is specifically again, just for a refresher to address concerns with a potential conflict of `reflect.has` despite this, this despite an object (???) that has potentially filling in a gap with map and and others. This conflict, we have agreed to kind of take .hasOwn as a way to address this conflict and kind of get around any potential issues. With reflect that has And alternative could be used if we want to continue exploring that if people have an issue with hasOwn, I have not heard or seen any issue with has owned other than just like, know, has is what the ecosystem is settled with downloads, but that was largely Jamie and I who brought that up and neither of us are particularly concerned with .hasOwn. So yeah, if people have additional concerns with .hasOwn, more than happy to hear those, but I've seen none of them so far.

TCN: so in addition to the four billion after mentioned, two billion downloads there has been and the the overwhelming positive feedback. three Frameworks and Ember, Vue, and React all use some version of that boilerplate. Those are all examples of, know, specific lines in files and GitHub where they're actively developed, where they are using some version of this of this boilerplate. So in addition to, you know, a lot of ecosystem usage, a lot of positive feedback. There are also signals from major Frameworks that are powering a you know, a decent chunk of the web that this is something that you know, they can just delete this code I

TCN: In Specification, we did update the spec text a bit. You can find the specs proposal. There, we updated the spec text to reflect reviewer feedback, I believe, Leo had some good feedback that we updated, nothing, immensely major. I think it was specifically, like, the the letter, O and obj, and key and P, Those things there was also an update to remove a legacy order. So I believe the order of this was flipped for hasOwn property. Yeah. So this this is the updated version. These two properties were flipped. This was reviewed by, JHD was one of the reviewers that Legacy has been removed. It's unnecessary at this proposal from what I understand. So Yep, this is the entire spec text. Yep. Yeah, so quick, quick note on those updates, we did update parameters, the specs step values were updated to consistent with the rest of the specs of that was Leo's feedback. The Legacy ordering was removed just as a result of that both, or as a result of that unnecessary link rest. Removed and we updated the specs to stage two. That's those are the only changes that were made. Again..here's the polyfill. There's there's a link to the polyfill and it's just in the in the repo if you'd like to take a look and we are seeking stage 3.
So anything in the queue?

AKI: There is explicit support for stage 3. PFC and MM, if either of you want to say anything, speak up.

PFC: I just want say that I think this is great because it eliminates a pitfall that's really not obvious to programmers who aren't deep into what's going on behind the scenes in JavaScript.

AKI: Awesome. wonderful, There's a +1 from JHD and YSV.

YSV: Yeah, we already have a PR ready to be merged later today and we'll see how it goes.

TCN: Excellent. So I think I think this is a pretty supported proposal. I think great love to hear that. Cool with that. I guess I'm going to ask for stage 3 directly.

AKI: You have consensus for stage 3…? I think we do. awesome. Great. Congratulations.

TCN: Thank you. Appreciate y'all.

MPC: Congrats TCN!

### Conclusion/Resolution

Stage 3

## Symbols as Weak Keys for Stage 3

Presenter: Leo Balter (LEO)

- [proposal](https://github.com/tc39/proposal-symbols-as-weakmap-keys)
- [slides](https://github.com/tc39/agendas/blob/master/2021/05.md)

LEO: Yeah. All right. This is This presentation is asking symbols as weak keys. This means the weakmap mostly as you might have known, but also some other collections I'm going to be chasing them here. Sentence is a presentation to request advancement for stage 3 and the current implications of it. The main goal of this proposal is to use unique primitive values and keys for weak reference. As we reference values. Sorry, there is a typo here and by those unique values producer. Are not objects. We can look at this with symbols. There's nothing really new here you already know this part but, this is actually new for this proposal. Here, you have a single set of objects being used as a key for weakmap. Yes. In those have support for the weak, other weak APIs, including weak sets, weak tracks and finalization registry. This is with just the purpose of matching consistency, consistency, with, with Napa case. so, the examples are basically like this. "I don't have an object as a symbol being used here. So I see there's a question from SYG. There is nothing new Since the meeting. What is new here for from this proposal, to what we have today in ecmascript, It's just using the same way as the keys sir, if I can interject that that was a question for in the DMT. You about your PR not to current. okay, I'm sorry I but that's actually okay because I'm gonna talk about that anyway. So the current status is that we have the Spec draft with no motive changes in this proposal repo we the current draft or request to ECMA262. We've had a lot of previous discussions offline. And yes, it's in stage 2. I've got reveals from Bradford as myth, JHD, Daniel Ehrenberg. Thank you. I've got interesting feedback from Kevin Gibbons that I consider as editorial feedback, like editorship feedback and I am gonna link this here. So, we have a chapter ecmascript about the liveness of objects that defines it. So that's why I was also pinging Shu, My PR came in, as a late notice so this might be one of the reasons to not advance it right now but I think we can work from here. in the repo. We have the pull requests #20 and they say is just a change to the liveness section in ecmascript, Kevin Gibbons pointed out that as this proposal was having weakRef to a symbol, we need to also take the definition of lightness andI just did some minimal changes but for the changes that I'm proposing, I believe they should be addressed with a back and forth from the editors including Shu as one of the main authors of that section, these are more like referring to text that goes as like, saying it's not only two objects but also two symbols as well. And most of the time I just use reference here and there. This needs back and forth from the editors. This change can be seen from the Spec to the PR2 ECMA402. Also 402. Also, to update this VR and make this right, I also going to coordinate with Daniel Ehrenberg, but, yes, we have some key work to start this. I think, like, for the main reasons, this could be like the blocker for stage 3, but hope we can still advance and work through it as like a part of the pr crosses as We need, I believe it's implicit that the liveness would also imply like the definitions of liveness, this would also apply to single values. So yeah, I'm requesting for stage 3, of course. And as I guess, a nice to have some more characters here. Saying, thank you for all the people doing this review, work, etc. If we have any questions we can go through Questions. I want to make this short, it doesn't need to be any longer.

AKI: The queue is un-empty. Waldemar you're first in line.

WH: I support the inclusion of symbols which are identity-based as keys in WeakMaps. However, symbols which are created by `Symbol.for` are not identity-based. That's a crucial difference. Those will keep WeakMap entries live even if all references to that symbol disappear. I don't want to have such things usable as keys. Or at least, if we do, we should make that a conscious decision and allow all of them including things like numbers, strings, and so on.

LEO: well, I think this is something that we discussed in the last meeting and we also in all of these discussions from the content, yes, we just recognize we symbols might not be like, not all the symbols are unique, as you can still fetch simple values from the global single registry, and these Global symbol registry is a list that is shared. All the Realms that's

WH: I think that's not the way to characterize that. `Symbol.for` symbols don’t allow weak map entries to be collected even if there are no references to them. The Symbol Registries are spec fiction — you can create and destroy an unlimited number of `Symbol.for` symbols and they will not take up memory as you would if you had to hold references to them. So it's not like you have references.

LEO: we have a just in case I was finishing a part. we have a hard constraint and I don't intend to Champion anything that includes other primitive values. This is also like being formed by all the people about this proposal. Like we don't think there is no intention here of for this proposal to work to include other primitive values right now, there might be some consideration in the future about records and tuples. It's not the time or the space of this proposal right now. I'm just considering adding symbols and what are the implications for me? consider the symbols to be primitive values that are able to make unique values in ecmascript. Some of the values are registered in the global single registry list share across shared among all the realms being used by that host. And that means you can fetch those symbols. Yes. And one of the decisions that we just decided to not make add any restriction to those symbols is actually to not use. These APIs, like, with map, we graph and it right thing as something to check. If a symbol is part of the global is and in that list, and just for like responsibility of these APIs? Yes.
And I'm also adding the line, too. I might add a line. For this request to this section. I can fetch it render here. Just donor, don't have any front of me but it's something that I want to work the section saying "the presence of a symbol in the global registry list might keep the reference alive". It should probably change to "must keep the reference alive". This is something really recognized. If the symbol is in that list, it's definitely totally won't be really useful to add a symbol that is created with symbol.for to use as a weak map key. It's like, it's not useful but we, you know, we know that we have, I'm trying to add a note about that in the liveness section and I think this is a constraint that we have to consider. We had some discussions. I not sure if I, I don't see how we connect that to a need of consistency to add or the Primitive values and I don't intend to change them apart.

WH: You're missing the point. My point is that the global symbol registries are a fiction that can hold infinitely many symbols, but nobody is expected to implement them that way. `Symbol.for` symbols behave like strings and numbers in that way. I don't want to support those as WeakMap keys.

LEO: Did you have this same objection when we advanced to stage two?

WH: Yes. And I stated that. We let it through to stage two because that was the stage to work out the details and explore the space of this. So yes, I stated this before.

LEO: So yeah, we have our use cases. Here are use cases are not very strong as I have use cases for many other proposals. I think this is this brings like some very nice convenience to the code, and allow exploration. Our intention here with this proposal is too Those to explore usage of symbols to check out, mem memory, footprint of using like, membranes Frameworks for Realms. I definitely don't have data for that to transform that in a very solid use case to say like hey we can really benefit of that. But without it, we'd also don't have the proper exploration. I think it's useful. I think it's consistent. And to be honest, I don't, I'm going to be honest, I don't see this objection being like a technical restriction, that really like, we should really deal with all this, but I don't have, this is the objection, Yeah, like I think should like, I'm not going to be try more than this because this proposal like is good as it is. This is my opinion, but we can't talk about the proposal all day long.

WH: I think you're missing the point. I'm not objecting to … [interrupted]

LEO: Yeah, I'm defeated. You, I am not going to say this with you. I think I have better things to do than that, we need to address this median and better topics. We had a very extensive list of discussions about this proposal. Yeah I don't think this is like we I'm saying like my opinion it's my opinion. It's not a technical, my opinions that I don't see a technical issue to have this. And I think so in my opinion, again, this brings some useful convenience that allows exploration of this feature. I don't ses a technical issue to not to not have this. but yes.

WH: Okay, you just said that you don't want to hear what I have to say. So I'm not going to say things.

LEO: is there a way that we can work through in this proposal

WH: Until you want to hear what I have to say, I don't see how we're going to make progress here.

AKI: okay, so first of all we went over the original time box. Now it's only five minutes until lunch, so we're going to keep going. There's quite a bit more in the queue and perhaps people who could address either of your concerns further. Maybe maybe some different perspectives could help, everyone understand each other a little better. Yeah. Shu?

SYG: I think WH certainly has a point. I think there is a technical issue. I know that you said that there is no technical issue, that you don't see a technical issue for implementations. Because currently identity of symbols are and symbol that four symbols, the fact that they don't have identity is not really observable. It is the case today that for non-`Symbol.for` symbols, if all references to them disappear, they could be collected because you can observe that when you reconstruct them that you, in fact got a different allocation with this change. If a `Symbol.for` symbol goes into a weak map or any weak collection, the implementations now have to do something different. They now have to have a bit or something, they now have to track all the `Symbol.for` symbols that in any weak collection across basically all weak collections in the runtime and make sure that they are not collected per the normal way, that symbols are collected. This is not a good change for implementations to do this extra bookkeeping for what I understand to be a pretty weak use case anyway. I think when we discuss this in the last meeting, Kevin Gibbons and other folks gave the inclination that `Symbol.for` symbols are by and large pretty rarely used in the wild. And if that is the case, I think you know, agree with Waldemar’s point and I would like to disallow `Symbol.for` symbols. I was more neutral last meeting and as I thought more about it between last meeting and this, and the implementation implications, I think that pushed me to the side that allowing `Symbol.for` symbols would be more harmful than not.

LEO: This is a direction I Look in adress, I can work through.

AKI: Okay, Robin.

RRD: Yeah, thereís. Been some talk about recording Tuple and originally we brought up symbols of his for stage 1 because we needed a mechanism in record and to culture reference objects through primitive. So, in that use case, didn't have any use. Receive all the for. So we didn't need to reference them in my purse, please either. It does can help. but also to give more context right now, we're trying to replace as the mechanism offered by symbol AS weak map keys using box, which is another mechanism that do something similar. in a more are going to be either way, we need to have this link in In this representation between Primitives and object identities and that is a nice mechanism together.

JHN(may also have been SYG): Sorry, I didn't get to ask my actual queue question before because I was responding, I'm sorry. Maybe Robin was trying to respond to him to come to me. I was wondering. What are the room? Remind me again. What are the use cases for this today? Not for how a my synergize with future proposals.
So that is why we brought it for stage 1. So this is what I was explaining here. And that said, I think that Leo can probably give my information and Yesterday.

LEO: Yeah, we don't have. So today, I don't have like a strong use case other than common user experience convenience for users, the pain point is just the the Annoyance of needing to create an object to use it as a weak map key. And that doesn't really make like a very solid strong pain point that we are going a use case. We want to explore this. We want to explore days in membrane systems, but I don't have a concrete data to provide it to you.

AKI: Okay, so it's time and we do have a lot of spare open time on the, on the schedule, the rest of the today. And tomorrow, if you want to come back to this,

LEO: I have a non-actionable question, that should be quickly. Addressed Waldemar. If adopt choose a suggestion to restrict this proposal to only allow symbols there are not registered in the symbol global registry lists, are you okay going forward with this

WH: This is exactly what I have been asking for all along.

LEO: I understood your first request as adding other primitive values.

WH: No. All I have been asking for is to restrict this to symbols which are not generated by `Symbol.for`.

LEO: Okay, so saying that is there any seen objection is there any like quick objection?

??: I cannot yet. We haven’t moved through the queue yet and I have an explicit item about that.

AKI: yeah, yeah. There's a couple different options we can come back to this.
LEO: I'm not requesting for stage 3 in this meeting, because if I don't have time, I'm happy to take a look at the queue and see the current issues, but it, I know, I know an objection right now. now.

AKI: Okay, so we'll save this.

RPR: Frank has 3 proposals, 30 minutes each

Any others? Right, and the bot is paused, Kevin. It should back up. Okay. Then then let us begin Frank over T.

### Conclusion/Resolution

No conclusion

## Intl Displaynames

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/intl-displaynames-v2)
- [slides](https://docs.google.com/presentation/d/1hxhwHyJLYT32NYrKLTCDLhZHN6OVZEamJppLLlSmyi0)

FYT: Hi everyone. Thank you for coming. My name is Frank. I work for Google and on i18n in particular, and the invitation for a coma for two proposal. I also a member in the TG2 and have championed a couple of them and also income is some of the proposal in V8 today. I'm going to bring three proposed so, encouraging states to attention to of, then I would like to talk about stage 3 advancement, the last one will not be. The first one who talked about is Intl DisplayNames V2 for stage 3, which we tried. It was a pro and a pro, but there's there's some issue.

FYT: So first of all, what is that? So, what is Intl DisplayNames in the API self-motivation, try to enable developer to get human translation of some common [?]. Oh that a lot of the application will be used and also provide a straightforward API because some of that value that the human translatable string could be getting through from now, they're straightforward. hacky way to do it, but we may be causing a lot of problems. Our charter is to have a straightforward way to access those things. So it won't cause any, you know, 80% of time that were 20% of high causing problem, kind of issue.

FYT: So a little history, V1 of Intl DisplayNames already got to stage four around the time that in last August, we put together feature proposal, at stage 0 for some feature that people ask about the in the V1 timeline that we feel is not enough or have such an issue with and particular writing something we need to discuss after Temporal will be a more clear picture, so we put on together the proposal and adding, and removing feature and have a lot of discussion. And in April, actual in January V2 was advanced to stage two. And I was (?) and last meeting I bring up here and as for stage, stage, 3 events there are some issue there. One particular thing is that I think we got some great feedback from Mozilla about kind our after RTG discussion, but just wait right before this TC39 meeting and we didn't have enough time to look at all those feedback. The other thing I think is what Daniel bring up some interesting question and we shall go back there to take a look closer, look and work with TG2 in met resolve those things. So now I bring up here for stage, 3 advancement consideration again, So, here is the history with that little bit detailed though, but I think you can ignore the top part. The key thing is that in the April 19 that we have some discussion whether that have the, adding some new feature or new value there. I think there's some misunderstanding from me when I saw that. Andrea actually just asked a question and I thought as a requesting a Adding a new value there. And so that's a misunderstanding. but later I got clarify the other ones I mentioned that Daniel suggest we have a stronger view about the use case for unit. And also some naming issue after that.

FYT: So I'll go through the action items from TC39 last time. First of all, is default value for the dialogue, handling property. And that time I it, we actually later on decide to rename that. So, consensus, is that both Mozilla and V8, although currently using different kind of value, they both agree that we should keep it as "dialect" in the proposal. The other things that the train value for dialect handling, that Mozilla suggest was shortened, it to just dialect and standard, and dropped in the name part. And I think after a discussion with TG funding, didn’t believe that it was the right thing to do, So we dropped it. Another one's really just a question bungee out. but that I think we have some confusion, whether it should have additional value called menu. And after closer look at that it is something people bring up. unfortunately, one of the for TG2 is the thing we bring up here have should have a prior art. such a "menu" thing have been proposed by Apple to the cidr, but it hadn't been really kind of in the Upstream. Haven't been reportedly resolved yet, so some of the data is in CLDR, but a lot of implementations are not picking this up yet. So we don't really have the prior art establishment for that particular value. Therefore, although is a increasing mean, I think both Mozilla and Google and I think other members all talk about that believe this may not be the right time to bring and the way we currently proposal written this way later on, if we really needed it a couple of years later, when there is the prior art and C++ and Java implementation, got sorted out, what still add as an as an additional value. But right now, now is not the right timing, because there are a lot of issue Upstream data up and implementations is not addressed. yet. There's a steel help lot of confusion in that space, there's still actively develop on that. So, there's a clear need but it's just, we don't believe that's the right timing to bring it into this proposal. So we've decided to not keep not adding

FYT: The other thing is, as I mentioned Dan asked us to re-examine the neat, use case for unit, type to display main. And after deeper look, we decide to drop unit support. I think then you have a good point and we just don't believe we can find strong enough use case in JavaScript. A lot of needed we found in the past is from Apple is for the OS level, for the C++ API level or whatever their API for guys Objective C or C. They have that need but internal javascript website. We just have hard time together directly answer at the end of questions so we say okay probably the right thing to do is drop the support and TG2 have some discussion about that agree about that. Therefore, I went back here to change the spec.

FYT: Other changes. First of all, we're going to rename the file like handling. And after Shane suggest we all believe that is better because this only apply to the language type. So we would kind of follow outer Intl API to chance that thing to just call language display. Instead of called I like handling a have two possible value when it's like a dialect one in standard as I mentioned in the future, maybe the time is right? That we can add additional value "manual" there, but right now it is not on the table for us to in this particular proposal, the other changes would drop the section about supporting the unit type as a direct response to Daniel’s question. And we think that probably the right thing to do.

FYT: therefore, where is the spec text. I have a link in the proposal in the slides. So this partial recently change, One thing notice that used to be we check the types of language, then read the option and Jeff from Mozilla pointed out that in all other Intl API we should read the option regardless of whether we use it or not and then set it to internal slot. This is what we hear. So we follow his suggestion because I think that's aligned with all other example. He pointed out and did a really wonderful review for us.

FYT: So, here's an example. Well what will it look like only showing that for the language style acting so basically, you can have length pie before language and have this option bag have aligned with the displays Date, and for example, this is just English and you'll see in left-hand side with that lot are like Eng be, will get an error in British English. But if you, there's a stand-up that language display or showing as English, English, Primary United Kingdom, Etc, right? So those are there. Here are some other spec change. As I mentioned, adding two additional type and dropping the unit type the to audition time. One is the calendar to get an anaphor. The calendar one is daytime feel, which is not any of the data in them, but the field name of the datetime, I will show some examples later. So for example here that we showing name for that Calendar. The name of the calendar will go in the calendar, here is Showing that in simplified Chinese example. Here is more detailed, there's another aspect part because we are having the daytime field so this are the only possible value just getting the name of those fields, right? So example, same thing here, this is an example left-hand sides in Chinese right hand side in Spanish so you see here - I don't know how to pronounce this correctly Spanish (...) and so on and so forth. So those are the near of that field. So it will that's one thing that I think about health for some of the application that commonly need to display. That thing about that particular field and inside that there will be some value, from the date time formatting. Of course, you have to have chance to the internal slots. So this is also the recent change going through careful review by several members. And we have to have additional internal resolve options property, for language display. similarly, that we have some property for the instance, we have to add it but that's all the spec change. We have Shane and (?), both the reviewer and we'll have a V8 prototype available. So this year's main TG2 meeting the I think we've got support from the attendees to bring forward to TC39 for the stage three advancement. So any questions?

USA: Yeah, I am. I Audible Yes, it's low quality but it's good. Okay, I'm sorry about that. Yeah, I just wanted to say that as a stage 3 reviewer, I wanted to sign off on that. Thank you Frank for going doing all back and forth and making sure all the changes or questions are resolve.

YSV: Just wanted to chime in and say that I'm happy to see this. Go to stage 3.

RPR: All right, let's just do a final check. I think this. We're always asking out any objections stage 3.

SYG:I have no objections. This is Shu. I have a question though. Sorry, I didn't get to myself on the queue in time there. There was a it's true. Therefore General proposals that we need 262 editor, sign off for Intl stuff. It's not my knowledge that the 262 editors ever reviewed Intl stuff. So they all ecmascript editors have It's that editors have signed off line. mean the 402 editors have reviewed it?

FYT: I believe so. I believe that's the, you know, for each that's minus ending. So, you know, we do have four to editor, I think right now we have an actual Leo, still on that, but reach, our and wuzhou are at least will Joe and reach our are actively editing and Richard.

RGN: So this is something that's still pending on my side, but I'm comfortable to handle it at the editor level.

YSV: We do have a bug for this. I'll post it to the repo.

RPR: Okay, nothing on the key. So I'll ask again - any objections to stage 3? [silence] No objections. So congratulations, Frank, you have stage 3.

### Conclusion/resolution

- Stage 3

## Extend timeZoneName Option for stage 3

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-extend-timezonename)
- slides

FYT: The next proposal I will talk about is the Extend `timeZoneName` Option proposal for Stage 3. This is actually a smaller proposal. Basic idea is that we already have `Intl.DateTimeFormat` for years. It accepts a value for `timeZoneName`, and there's some people who suggest we extend the possible values for that option. We can have a different kind of time zone display. So, first of all, that the proposal is to - the changes that we currently have a Timezone option for interdisciplinary and time format and currently have a "long" and "short" option to display and this proposal basically is adding four additional possible values for the naming of this attribute. Recently changed. The new four are `"shortOffset"`, `"longOffset"`, `"shortGeneric"`, and `"longGeneric"`. This is the code example, what will happen and highlight one are the newly added ones. `"short"` and `"long"` are the pre-existing ones. So the short and long will display the time zone as GMT offset with short style, and long offset will show in longer style in short, generic and non-generic or (?) in PT, or Pacific Time. For example, in PST time, so here are some also example traditional Chinese, what will display, notice the GMT caches not necessary. Always mentioned the GMT, You know, in some localities may say UTC or whatever it based on their indulge the linguists believe what that value should be and there's not always a full hour for example. India have a half-hour offset.

FYT: So in Ecma-402, we have an additional requirement that the TG2 has to consider: data size issues. Usually we have have established require art and believe is difficult to increment efficiently in userland and also in the stage 3, we need to have some analysis of payload. Make mitigation and see whether that will be reasonable payload increase because usually of data make comparative speaking. Therefore, so let's go through those. So brought the pier we see many example in web page, in addition, some time they were using EST or EDT, they may only want to display. Probably, those are generated by PHP or Java, backend, or see how this plug-in, we have no idea, But they are presenting those kinds of information, ET for Eastern Time. MT for Mountain Time generic, we use this Eastern Standard Time for in daylight saving time, okay? The right hand side is also an example. We believe there's a broad appeal for the user because a lot of example, got files on the web. Of course, we also have the ICU and ICU4J and many other application help that time zone. So that we also believe that fulfills our prior art establishment. So in order, as I mentioned, for stage 3, Ecma-402 also cares about payload mitigation. So we try to do some high-level back of (?)study. See how much data size will be increase for the short offset. Because only, we need like to patent her Locale. So, for in the CLDR, you know, consider all the 406 Locales. The total size, we believe, it's just about 1.8K. If we compress is about 400 bytes and short. Generic are a little bit more, because there are a lot of fallback for those, you know, for example, Japan time, you know, just have Japan time, Japan standard,. They're not using daylight saving time. So there are no additional size increase. Long generic needs a little bit more so there are some requirement bringing a little more data. We believe that after compression it is less than (?)k if shipped with all 476 locales but for (?), for example, we're not shipping that many locales. We have a reduced size of a locale, we should. So the sizing (?).

FYT: In history, we have advanced this one to stage 1. In general this week, this month and a propose that for this meeting or we do there's some people Was that naming for the offset? I think that time we call short GMT and Long GMT to believe that is not a good idea. And so there are some discussion and we renamed need to `"shortOffset"` and `"longOffset"`. And then the last TC39 we advanced this to stage 2. A lot of people had an opinion about what was called `"shortWall"` and `"longWall"` in our original proposal. I think this original name was picked by one of the ex-members from IBM, but nobody liked that name including himself. There was a long discussion in the main meeting, we talked about probably 10 possible names. Initially, I think is you to app from voting and very creative discussion. We picked `"shortGeneric"` and `"longGeneric"`. If you are interested, you can take a look at the TG2 discussion; we probably spent 40 minutes on that. Also we agreed that we should bring this proposal into TC39 for stage 3 advancement during that meeting. Here again, this is a recent changes that part that we change it to `“shortGeneric”` and `“longGeneric”`, there is some part of the Forum at the time because. it is basically just in the algorithm for the patent that how to pick that time zone name only and you can look at it if it is still not very clear can look at the spec text to see it. Again, also the BasicFormatMatcher which is in the spec of folks. I would be a within the increment is par. We're using the BestFormatMatcher. We also have the need to implement some penalty to decide the pattern. There was also a long discussion during the last month about how to spec it out better. I think this was originally raised by Andre from Mozilla about the spec and original form that have some issue and really appreciate his review and we'll keep looking through that. So we kind of had a long discussion about that offline. But here's the current spec. We have PFC and RBU sign up as the reviewers. PFC has been involved with a lot of the recent changes in reviewing those things. Unfortunately, I didn't explicitly ask for a sign off from RBU. I didn't get a final signal, but I believe that they should have no problem because he get through all the videos back.

PFC: I did review it and I can give my explicit sign off. I think this is good. All of the issues that I saw in the spec text have been fixed up and I think this fulfills a clear user need. So I support this going to stage 3.

RBU: +1

FYT: Thank you. It's my fault. I should have pinged you earlier. Anyway, we have two reviewer both signing off right now. And I think USA also took a look at it. Here is my understanding about entrance criteria for stage 3. I believe we have all of them. I'm coming to the question to the committee, to approve advancement for stage 3.

YSV: Yes, I would like to give an explicit stage 3 +1 from our side. And we also have a prototype ready for this.

RPR: Excellent. So any objections to stage 3? [silence] There are no objections. Congratulations, FYT, you have stage 3.

### Conclusion/resolution

- Stage 3

## Intl Enumeration API Stage 2 Update

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-enumeration)
- [slides](https://docs.google.com/presentation/d/1rg5FMmU0vpi--KoxoIZPpNEWxhX-MfBUeoA0y_o94FQ/edit)

FYT: This is an update on Intl Enumeration API.

FYT: I probably will bring this up next time in July for a stage advancement. But today, I just figured that we need an additional round of discussion in TG2.

FYT: The charter for the Intl enumeration APIs is to try be able to list the supported values for options in the pre-existing Intl API. Here is a little overview of what happened. The proposal was originally motivated by the Temporal group, as they tried to have some function to deal with listing possible time zones. They just didn't think it was correct to put it inside of the Temporal API. So, they talked to, I think I'm afford to say, well, I think you guys have something into similar to this could you address Together. So it was yeah I think that's right thing. So I decided to pick it and to form the proposal together. DE also suggested some additional possible values. I thought it could be a little too difficult to do but anyway, in the last year, last June. We put together and passed stage 1 in September or (?) to stage 2. And one of the key things for stage 2, is trying get more, kind of say, okay, this stage 2, so we can get some more feedback or get some review from a privacy expert about fingerprinting. That actually did help. In November we gave some updates to TC39 after that. Also this couple things for in the March the TG2. We also tried to because the additional requirement for prior art and the difficult to implement a broad Pierre. Cartier kinda you know, be I was in a coma for two after where this bridge, which states to so So we say, well, Sharon say I think he did the right thing to say gold. Maybe we should go through the process to just make sure that still fit, right? So we go went through that and I think people agree with that and also I think for stage 2, have got our colleague and peers in Mozilla to circle this proposal around to their privacy experts and they have conclusion about their fingerprints concern and you can take a look at that and I'll pull. So, take look at that. Take additional month and come back to us. Say okay, they don't have additional fingerprint concerns. They had some other concerns, but no fingerprinting concerns. That's what we reached previously in in April. In May, we had another round of discussion and some members support a stage 3 advancement in Mozilla at At that time, think SB told us they have them have a conclusion. They want to take another look at it. Apple expresed no comments about that. In that time, I'm thinking bring up here for stage 3. So the SB tell me to hear, tell me the answer before this meeting but since I am not going to bring them to stage 3 if you didn't need to tell me right now. Anyway, so what? So, here's the thing that the Mozilla has (?) what the fingerprinting is, that's their direct quote from they are finding. We proved that. I think Apple groups have to.

FYT: The scope of this API basically includes six values. to allow the system to return information, whether what import value is, what kind of value is supported for those six possible values. Because they are really option names, and so what kinds of values are supported for that? Basically the proposals are only adding an additional function, the function is cost reported values of l've and have a key, which could be six values and have option. In the current form, the spec returns an object which has an iterator method, so, it will look like this, so you call it `Intl.supportedValuesOf` with the key `calendar` and then you can either raise It will tell you which one calendar is support or it goes through the currency choke which currency support Etc? Right? And another way in the current form of the spec you in the time zone, you can pass in an optional region and it will only limited tell us which timezone in US is supported. So here's come the first issue that after our May meeting, I think this was raised by Mozilla and trios from his very careful review. So, he is suggesting us say, well, maybe we don't need to over engineer this API and we could just drop this option and just don't need any option. The rationale he put on table is really reasonable because we already have Intl info API, which is passed last meeting to stage 3 in there. You basically asked for Locale and the Locale be able to tell you which one they are used for prefer in that particular account. So, with this kind of options, has redundant information. Because this API is telling us. What is the supported in that one is telling what is preferred and if already know what is preferred, you can just basically do `and` and you figure out which one is supported for that. So He suggests, this could be taking and removed to simplify the API. personally I believe that is case this proposal or original put together before I put on the Locale info but that one is moving a little bit faster because there are no privacy or fingerprinting concerns. So this one started earlier but is kind of moving a little slower. So, because of that already passed. I agree that probably is not needed. So I will propose to drop this, but I want to discuss with the rest of TG2 member in the our next meeting before I bring up to here for General consensus. But if you have any opinion about this, please voice it and also will welcome to come to the Ecma 402 TG2 meeting if you really want to join that discussion. So, I intend to go there and to suggest you remove it and everybody agree. I will drop it. And in July meeting I will bring up the proposal without this.

FYT: Another issue is, originally in the first draft I put together I was actually returning the information in an array. My manager at Google actually looked at it, and he said maybe it should return an iterator, so I tried to do that. I don't know if I did that right. We have something there but I have low confidence I specced it correctly. But then someone said why bother? The big reason is for memory, but it's only `"timeZone"` that has a lot of possible values. You can look at the discussion on GitHub about whether we should just call back to aray or iterator. I do think a specifying an array probably could be easier and using an iterator could be overkill. SFC had some concerns but we haven't yet reached agreement. That's another thing. I think the big issue is probably more controversial than the previous one. We need to resolve before we can agree about it. There's a better as a good thing for stage 3. So this something I intend to go back to with you to work with to resolve. If you have any idea or any opinion about whether it should return an iterator or any other idea, it would be really nice to for you to say and or join our discussion either in offline there or go through it with us in the next TG2 meeting.

FYT: So, what I asked TC39 today is really just express your feedback or opinion about this. these two issues or is there any other thing that you would like to give me as an action item to work on before I bring this back here for stage 3. Please voice it today and it will give me more time to work on that. Thank you.

YSV: I'm just going to raise a concern that we brought up earlier, that is our remaining standing concern now that the fingerprinting issue has been resolved, which is great. The fingerprinting issue was the blocking issue for us. But the other concern that we had was around the use cases for how this proposal will be used by consumers. One issue — and it's been a long-standing issue — is that in the use cases segment of the proposal, the only detailed use case is about inspecting the calendars, but it's very limited compared to the proposal, which exposes pretty much all of Intl. This is something that really should have been a stage 2 concern. So I'm bringing it not as a block, but a soft concern that won't become hardened, unless it's backed up by other people having a similar concern, which is we would really like to see the use cases proved out for this. In the case that the committee chooses to move forward with this proposal, when it does come for stage 3, even if we're not convinced by the use cases, we will accept that. But in that case, we would require — and I read through the spec, I don't think that the spec is permissive, in the sense that this wouldn't be a requirement — the requirement for us in order to make sure that the fingerprinting part doesn't become an issue is that any implementer who implements this API also ships the entire payload. So those are the two high-level issues we've got.

FYT: Sorry, can you clarify, when you say the entire payload, what does that mean?

YSV: So you can't for example ship part of the data you're referencing. For example, for the calendars and languages, you have to ship all of it, you can't just ship a subset.

FYT: One thing maybe I need to spend more time to write in the readme is the following: Let's say the Intl.LocaleInfo API, which is already in stage 3, this the the locale data that the application already knows. Let's say Arabic right, so intl Locale API can say, okay, this user is in Arabic, now what kind of calendar, for example, do they prefer, and the answer is one of three of them right? One way to use this API is then, we asked this API is a for which calendar you're supporting well. Somehow, if there are of them was that called calendar is not supported by the application, one thing the application could do is calling back to the server side, to say hey, give me a polyfill for this thing because native application does not support this. So one of the important use cases for us is to discover what is preferred but not included in the implementation in order to bring in a polyfill or bring in data in some way to fill the gap. Of course that's not the only use case, there's some other use cases for that. So I probably need to spend more time to address that, that, but it's not limited to the calendar, you can think about all the other things, whatever we're currently at them afford to support. I think here we have collation for numbering system or some other things that it could all could be, for example, in the Closure library we could use this API to decide what additional things to download in order to fulfill the needs. That's one of the reasons why we think this API is very important, it will from a very important cornerstone for the AJAX kind of paradigm to make sure the application does not solely depend on the implementation. But in case the implementation lacks something, we have a way to dynamically bring it down in an efficient way.

YSV: I do think that having it written down in the proposal document would certainly help. It would also help us examine each case for each one of these keys and understand the motivation and backing for why we want to have each of these. So I would very much support having this written down in the proposal.

FYT: Are you OK with it just being in the readme or do you want it in the spec?

YSV: I should have been more specific, I meant the explainer. Of course it is fantastic when we can write the intention directly in the spec because then we can also understand why we did it in the future. But having it in the explainer would be perfectly suitable.

SFC: I wanted to reply and clarify on YSV's second ask about requiring that implementations ship all the data. If I understand that correctly, I interpret that to mean that in order to resolve the fingerprinting concern, the set returned by this function needs to be equal to the browser version number. And I think it's an interesting concern that warrants additional discussion. I'm not convinced that that this API is going to cause any fingerprinting concerns in its own right. Because if we do get to a point where browsers are, you know, downloading additional locales on the fly, which would be definitely a nice thing to shoot for, that's going to raise the same types of fingerprinting concerns that this proposal would expose. For example, if you were to call create a date-time format in — pick your favorite esoteric locale, how about Klingon — if you were to create a DateTimeFormat in Klingon, and that is producing strings for you, and then Klingon gets added to the available numbering systems, both of those are equivalent fingerprinting concerns. So I’m not convinced that the requirement that browsers ship all data is necessarily unique to this proposal and I don't necessarily see that fitting in here.

YSV: Yes, you're absolutely right. This isn't going to be unique to this proposal. This is the first proposal that we're asking for this, but this is, if this goes forward we will be asking this from all proposals, that there will be no partial data sets being shipped.

FYT: Can I ask something here with that? I'm not quite sure about that. Because as you can see here, in this particular API the possible keys we have are `"calendar"`, `"collation"`, `"currency"`, `"numberingSystem"`, `"timeZone"`, and `"unit"`. So whether we ship 100 locales or 10 locales is not discoverable by this API, because `"locale"` is not one of the keys. Whether we ship with ten locales may impact it, but not 100 locales. First 10, locale. So, I'm not sure. I mean, I understand the fingerprint concern. If one of the possible keys is `"locale"`, fine, the thing you require has merit. And if you're saying, please ship all the calendars, then I agree with you. But in this particular case with regard to not shipping all the locales, ten or 100 shouldn't be observable by this API at all. So I don't know that that will be impacting the fingerprinting concern.

YSV: Sorry. Did I say locale? I mean specifically that we don't ship partial data sets of these things that we're going be exposing in a discoverable way. I don't know if I said locale there, but that was my meaning.

FYT: Thank you for the clarification. So I think what you're saying is that we should be shipping all calendars, all collations, all currencies, all number systems, all time zones, and all units. Is that what you mean?

YSV: Yes.

FYT: I understand what you're asking. I will bring that back to TG2 for that discussion. Thank you.

YSV: Yeah. And this also comes with — any future APIs that do something like this, are required to ship the full data set as part of their implementation.

FYT: Could you clear up? What do you mean by 'like this'?

YSV: Because there's a very vague if we have other enumeration APIs we don't ship partial data sets.

PFC: I wanted to mention that the original motivation for this didn't even originate within Temporal but it was requested by the W3C TAG in their review of Temporal. They asked that ES somehow include an API that lets you enumerate the time zones. The use case that they gave was building a time zone picker in userland. Maybe that helps to provide an additional use case. It is true that a lot of the time zone pickers I personally see on the web, use the the IANA codes for the names, with the slashes in them, whereas — I think it's just kind of a coincidence that the set of time zones shipped by by all browsers coincides mostly with that list. If there was any discrepancy there, I would suspect that people who weren't careful in building their time zone pickers would end up allowing you to select a value that couldn't get converted into a time zone or something like that.

FYT: Thanks for the information.

SFC: To discuss the iterator versus arrays question, just to follow up what I've posted on the issue. I think that one of the key differences with this enumeration style API is that the set of (say) time zones is known and is fixed in the implementation in C++, and in V8 or SM, or JSC or whatever. That list is known and it already exists, and for that reason, if we were to return an array, we basically have to copy that data from the C++ memory space into JavaScript so you can access it in your app. This is a great example of where I think an iterator is the right tool because it gives a low memory cheap way to access that statically available data. I know that there are some questions about, for example, why do RegExp match and formatToParts return arrays? Why are those different? And I think they're different because those arrays are computed on the fly when you call the function. There's no statically allocated resource for those arrays, whereas there is for this one. So that combined with the fact that these arrays are going to be very long in some cases, hundreds of elements, and also given that many languages and other platforms have been moving away from arrays and toward iterators, it seems like it would be a bad idea to use an array here, and we should instead use an iterator. So that's my opinion here, I'd like to have this discussion.

JHD: I have a quick reply to SFC. I think all of us largely understand the usability improvement or advantage of an array, but also the performance advantage of iterators. If we decide to go with iterators - the `SupportedValuesOf.prototype` approach - we do have a pattern of ArrayIterator StringIterator, RegexStringIterator for matchAll… we have a pattern of making new primordial types for each of these special kinds of iterations. If iterators are going to be a pattern, if we actually want to have more of them going forward, we should think about it. Is that a pattern we want to continue? Or if there's a different way of specifying it, that doesn't create new primordials and prototype methods and stuff. So if we decide to go with arrays here of course, that short circuits that whole discussion.

FYT: JHD, could you elaborate a little bit? More is so you're that currently my understanding is you're saying currently in 262 and for to in order to go through iterator we have to follow certain patterns or create a prototype object, right? So is that what you're saying, right?

JHD: That's the current precedent, exactly - and it’s not about how pretty this is to specify; the fact that it's complex to specify is an “us” problem. It's more that it creates another built-in object prototype, that in all of these cases is not available on the global prototype but you can still get to it through a number of other means. It may be too late because we have this precedent established, right? But it seems like looking with hindsight perhaps this was there would have been an alternative way to design these iterators in ES6, I wanted to put it in the committee's heads that we should decide consciously "Yes, we want to continue that precedent" or perhaps there's a better form we want to start using if we're going to have more iterator-producing APIs in the spec.

JHD: This is a reply to YSV's thing. So it seems totally reasonable to find a way to mandate the full data set, instead of partial ones, because that reduces the fingerprinting landscape, but I think that's completely orthogonal to this proposal because I can do all of the same fingerprinting that I could do with this, without this. It just means I have to do a little more work in advance, but it's not that hard. I just have to go to a bunch of browsers and build a long array of possibilities and then try them. So I think that it's fine if this proposal surfaced the need for that requirement, but I would hope that that would be pursued independently and not be chained to this proposal.

MM: I wanted to emphasize that the issue that JHD brings up about the hidden primordials is really a very serious issue. When successive versions of JavaScript introduced hidden primordials, which I'll define in a moment, it has caused security breaks in Google-Caja, in SES, Modern SES, and other systems. The various SES and SES-like systems, on initialization, do a transitive walk of all the primordials based on enumerating properties. What I mean by a hidden primordial is one that cannot be discovered by enumerating properties starting with known primordials. This falls into that category. We either need to stop introducing more hidden primordials, or we need to introduce a standard way to ask the platform to produce all primordials, or at least all hidden primordials. They can't be otherwise discovered. So that for example systems like SES can freeze them before it allows untrusted code into that realm. And that's really a requirement for these systems to stay secure. Anything else is a breaking change to those systems.

USA: I wanted to echo what JHD was saying in that my understanding of this proposal is that doesn't actually incur any additional data and it just provides a convenient API to have the data exposed in a certain way, but if anybody wanted, they could have access to this data anyway. We have userland modules which do some of these interesting operations and get this data. So just for convenience reasons.

SFC: Yeah, to reply to MM and JHD about the primordials and iterators. I see the way that TC39 specifies these iterators as an orthogonal issue, because we've recently advanced proposals that introduce these additional iterator primordials. If that's something we want to stop doing, then I think that that's a good discussion to have. I wouldn't necessarily like to block this proposal on that. I think we should decide what's the best tool for the job, Iterators or arrays? Then we can have a discussion about how to implement them. But I don't think we should choose arrays because we haven't gotten our act together on how we want to spec out iterators.

MM: I'm going to jump with a clarifying question. Why does having this producing iterator require the introduction of new primordials? We already have iterators in the language. Why can't the iterator instance, this is producing is a new fresh instance. It's not a primordial. Why does a method that returns an iterator cause the introduction of a new primordial?

JHD: MM, I can answer that because we went through the same question with `String.prototype.matchAll`. Essentially it could produce the same kind of iterator a generator spits out and not require a new primordial. But Arrays and Strings and Maps and Sets in ES6 all had their own individual prototype objects, with the `next()` method on the Prototype, that reads an internal slot on the iterator instance. And so, that was the pattern that we followed in `matchAll()`. And that is the pattern that we would be following here in the third bullet point on the slide. That's why I'm raising the question of, do we want to continue following that pattern?

MM: I'm insisting that we don't, that this is a blocking issue and I should have paid more attention to `matchAll()`. I did not realize until this conversation that that had introduced another hidden primordial. We must stop introducing hidden primordials, or we must stop introducing them until and unless there is a standard way to get them. Introducing new ones is a breaking change to systems that are already deployed out there.

SFC: I believe `Intl.Segmenter` is another proposal we advanced, which also has the hidden primordial for the iterator, correct?

RGN: That's correct, but the `Intl.Segmenter` iterator prototype also has other methods on it.

JHD: To be clear, MM, there exists a spec mechanism for that - we just have no precedent for doing it.

FYT: Sorry because I'm the champion and I want to partially answer this. I have never done this. I was just copying what is there already. If the current spec pattern is something that MM thinks is not right... we need a way to clarify how to do it right, because otherwise someone like me will just try to follow precedent, right? And it's okay, I won’t do it, but someone has to teach me how to do it the right way.

MM: I agree exactly with everything you just said. My apologies for not having paid enough attention to the proposals that during my inattention had introduced new primordials, I should have caught this much earlier. This is exactly an example of the process issue that YSV has brought up with the need to write down in the spec normative high level invariants. This is an example of such an invariant. This would be so that the people guarding the invariants don't have to pay attention to every single spec to make sure that a violation of the invariant doesn't sneak through. But now that I am aware of this, this is a blocking objection.

USA: I was just thinking if there was a convenient way for us to conclude that invariant right away. One way we could do it, would be maybe to introduce editorial notes in the places where this was done, make it so nobody copies that and and add somewhere very fine.

YSV: I got distracted by other work, but I'll make sure that we start working on the invariants again and finding out an appropriate way to do it and I invite anybody else who wants to do this work to join me. I think we should also integrate the invariant by Moddable and continue that discussion. Maybe it's the SES calls or somewhere else.

SFC: To reply to MM again. I think I agree with FYT… this could be a valid concern, but it's not a regression because we have these hidden primordials in other recently advanced proposals. I would be disappointed if we block this proposal since other recently advanced proposals have the same problem.

FYT: I have asked a question here because of that confusion here, a clarification question, to JHD. Just say there's a way we can do without doing that. Right? So I'm not sure — JHD is that the way you asked me to change it and I already changed it? I’m confused about how to specify, but iterator be honest because this yet car brings this back is one way and Right. So it will be nice to prevent this kind of thing from happening repeatedly again. Maybe someone has to write a example of how to spec an iterator the correct way, and we can follow it. I mean, it looks like it's not a blocking issue could be resolved by even with JHD. Think I me to do that. Even you want to go, the iterator that's mine is in, is that correct early?

JHD: If we decide to stick with iterators and not arrays, I'm happy to work with you to come up with a mechanism that does not trigger MM's objection.

MM: That would be wonderful. To be very clear, I'm not objecting to iterators, JHD plans for iterators and we find that the proposal as written. Now following the old pattern, I do object, that's a blocking objection.

### Conclusion/resolution

- Not attempting to advance

## Resizable ArrayBuffers for stage 3

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-resizablearraybuffer)
- [slides](https://docs.google.com/presentation/d/1K7t8lphY45yOfvsTOHxF4wZiMFCsVZZ_Bf_Wc7S3I_g/edit?usp=sharing)

SYG: All right. Resizable buffers again for stage 3. To recap, the action item from last time was to address the global constructor issue as raised by Moddable and before that JHD as well. We had an incubator call about this and the path that I decided to square the circle here and not introduce any new global constructors is to extend the existing ArrayBuffer and SharedArrayBuffer constructors instead, as presented very shortly at the end of last evening.

SYG: So concretely what that looks like is the following. So on the top section is the status quo when you make ArrayBuffer today, it takes exactly 1 parameter, which is the initial length of the buffer. I am proposing to add a read-only getter, so without a setter, that lets you check if the buffer is in fact resizable. So if you use, if you don't pass a second item into the array buffers, it is not resizable. Its byte length and its max byte length are the same and if you try to resize it by the resize method that I am proposing to add, or rather am moving from the ResizableArrayBuffer constructor prototype to ArrayBuffer's prototype, it would throw. If you pass an options bag, specifying the maximum byte length to the ArrayBuffer constructor you instead get a resizable buffer where the resizable getter would return true. You still have byteLength, and of course you can resize. You can resize the resizable buffer up to the maximum byte length and yeah, the the getters do exactly what you expect them to do. How these buffers behave is exactly unchanged from the previous iteration, where they were a different type under ResizableArrayBuffer. The only difference is that they are under the same constructor now, but must be constructed with this additional options bag.

SYG: Similarly, for shared array buffers, you get this exact mirror. Instead of resizable the the the getter is called “growable” to check if it is growable, because SharedArrayBuffer cannot shrink. There's no way to really share memory and let it shrink, that just doesn't work. And yeah, basically, everything is a mirror of what happens in the array buffer case. It hopefully should be pretty straightforward. So that's basically the main action item from last time that I hope is addressed. Before I present the rest, I would like to do to get a check that folks who raised the concern last time are happy with this solution.

PHE: This is Peter from Moddable. This is great. This is exactly what I kind of hope we ended up with.

SYG: So that's basically the big API surface change. Everything else, the core semantics, how things behave, how resize works. How grow works, that remains as it has been for a couple meetings now.

SYG: Some other updates since last time here is an interesting thing. Concurrency is hard as we all know, there was a bug in the spec that we discovered during implementation in V8. What happens when you have concurrent calls to SharedArrayBuffer.prototype.grow. So, when you're trying to race your grows on the same buffer. Imagine the following situation: you have some growable SharedArrayBuffer that currently has a length of 10. You have two threads that are concurrently running andaAnd they are concurrently racing to grow the array buffer. Thread 1 tries to grow it to a byte length of 20 and thread 2 tries to grow it to a byte length of 40. One such execution that could happen is the following. One reads, the current length, sees it's 10, thread two at the same time reads, the current length, sees it's 10. Thread 2 wins the race and grows the shared buffer to 40. Now thread 1 tries to grow. At this point, the SAB has already grown to a length of 40. So what happens if you try to grow it to 20, there was a bug that actually allowed thread one to grow it to 20, in effect causing a shrink, which definitely should not be allowed. The fix here is a bunch of memory model arcana, like usual, but the general idea is that we impose a total order on all calls to share a buffer that prototype dot grow. So this kind of race cannot happen. That if thread two race in this case, then thread one would just fail. That there will always be a total order regardless of whether they're being raced or not. For the implementers, the idea is that when you are implementing grow, you have to update the length. The length can be updated atomically by either a single compare-and-swap, or a pair of load-linked and store unconditional. With architectures like x86, having compare-and-swap instructions, and archs like ARM don't have a single instruction to do compare-and-swap but they have these paired load and store instructions that kind of put an exclusive monitor bit on a particular memory location such that when you store it, it, the store would fail if the value if the bit that the load link - So the load link when you load a memory thing, it like put to puts a bit says, I put this into exclusive mode and then when try to store it store a value to the same location. The store checks if the exclusive bit is still there. If not the store will actually fail and the idea is that if something happened in between like somebody else updated the value, or even like the cache lines clear, it would fail and you lose the atomicity guarantee. and the and the idea here is that updating the length can be either done with a CAS or an LL/SC, either a single one, or in a loop. So, why do I think it's a good idea to allow this latitude to either have a single compare-and-swap or a looped compare-and-swap such that if there are spurious failures, that you just try again. My thinking here is that because ARM with LL/SC has more spurious failures due to, you know, how far apart the instructions are in the instruction stream and the likelihood that the cache line is cleared. I don't want to require a loop. I think forward progress is harder to guarantee in spec if we allow it, if we require the implementation to be looped, like, how do I guarantee that the loop is not going to stay forever? It's not going to become an infinite Loop? And most importantly, I want allow this implementation latitude because I don't want to put extra work in restricting. the kind of implementation that can be done for obviously bad behavior. Like you really should not be racing your grows. We of course as specification authors and as the standards committee have to give exact behavior and exactly specify the behavior here but the take-home should be that you should not be concurrently growing your buffers. That is a bad idea. Synchronize another way and grow them in a predictable way.

SYG: So, the observable implications for this implementation latitude, is that if you have user code, that is racing should a robot for grows, if your implementation has a single compare-and-swap that might fail while loop is comparing swap might succeed. So if trying many times until the grow succeeds is important, my recommendation you should write to looping in user land. And in my opinion, this difference is not a big deal because SharedArrayBuffer.prototype.grow can already throw due to, for example the time we were trying to grow there was temporary memory pressure in the system and you didn't have extra memory to commit. So so in general grow and resize can throw due to memory pressure. Which at some memories are at any particular time, you might at some later time you might have a bit get a failure and users all of resize them grow must deal with that failure anyway, possibly retrying later. And yeah so that that all comes back to like don't race your grows if you really want to race your grows and you want to for some reason, make them as robust as possible and trying as many times as possible to succeed then write the loop yourself. This is my thinking,

SYG: And finally, another change that was made was Yulia from from Mozilla brought up that they would really like to see WebIDL integration be done before stage 3

WH: It seems that you’re specifying that the CAS might fail. CAS might fail for all kinds of reasons, even if you don't have other workers. Does that mean that everybody has to worry about the shared array buffer grow not working?

SYG: Yes, in the same sense that everybody who wishes to use Atomics.compareExchange has that same word today. You'd I think a good mental model here is that you think of grow in addition to doing the actual grow is also a compare exchange on the length field, and you have the same guarantees or the lack thereof as calling Atomics.compareExchange.

WH: So what happens if it fails? You get an exception?

SYG: Yes. Any grow can cause an exception even if there's nothing else in your program which changes your length. I don't know how to distinguish that. Like, it'd be nice if wasn't the case.

WH: This answers my clarifying question. I wish to come back to this when you're done.

SYG: Our integration is thankfully, it was fairly straightforward. For folks who aren't familiar with WebIDL, it defines some types and also its defined some what it calls extended attributes over types. For its types that have to do with ArrayBuffers and things that can be backed by buffers like typed arrays and data views, there are extended attributes. New attribute, [AllowResizable], that lets those types allows any APIs that have that attribute to allow types to also be backed by resizable buffers. The default, which is the status quo today of all existing web APIs do not of course have that extended attribute. No Existing API allows resizable buffers and resizable buffer back to type the race to be passed. In the future new APIs may allow. Future extensions to APIs might. This doesn't change what happened today. And yeah, that's it. So let's take the queue.

JRL: Question about the exposed API surface. So we have array buffer which will have a resize method and then we'll have shared array buffer which will have a grow method. Is there a need to have a different method for the two of them? Particularly could shared array buffer, just have a resize method that threw if you gave it a smaller size?

SYG: You're talking about a name, not not the actual message because they will still be two distinct methods that cannot be used with with receivers of the wrong type.

JRL: Yeah, I understand. The same way that set has `has` and map has `has`. They share the same name because they operate similarly.

SYG: Yeah. I mean, I'm trying to figure out how strongly I feel about this. It is possible, of course, to rename it to to have both be just called resizable. Thought that would give the wrong impression because it's not a choice that SABs cannot shrink. And what is the value I suppose of having the consistent naming? Perhaps you want library code, that transparently deals with resizable buffers regardless of whether it's shared or not. I don't think that's a good idea. Dealing with shared buffers versus non-shared buffers is a pretty different thing. So I'm not convinced there's much value in having both being named resize.

AKI: Support having the same name. [nothing further because mic issues]

WH: I am uncomfortable with specifying something which will fail for no reason. There are certain places where this is acceptable such as trying to reacquire locks. This is not one of them. If I have a program in which I have just one worker which grows the shared array buffer, it should not fail because of a spurious CAS failure. If it runs out of memory, fine, but it should not fail because of CAS. Repeating, I want the semantics to be reasonable for users of ECMAScript. So if somebody has only one worker, which grows the shared array buffer, that must succeed unless you actually run out of memory. I don't want spurious failures because of some spurious CAS implementation issues. Those are implementation details and the best practice for doing for load-linked-store-conditional is to use a loop.

SYG: Okay, so I shared the goal that if there are no races, it does seem strictly better to say that the grow must succeed, the issue is, I don't know how to distinguish that - it's not an implementation issue for implementers the language. It's like an implementation issue for the chip, right? If a load-link, store-conditional fails because a cache line was cleared because like they just decided to clear the cache. How do I distinguish that from a race?

WH: You don't.

SYG: So if the conclusion here is that we required the loop, we can have some constraint in there that says, despite this being a loop you must still guarantee forward progress. That's a thing we can say and I'm okay with that, I am just not like what teeth that extra constraint has.

WH: I really wouldn't worry about livelock here. If an implementation can't do that, then the same implementation cannot do regular locks correctly. If an implementation has figured out a way to do regular locks, surely it must be able to do this correctly too.

SYG: That's a good point. Okay. Then with that argument, I retract my position of allowing implementation latitude and basically would have additional language in there that says spurious failures should be retried. Are there any concerns with that outcome? Namely, the thing I find very convincing from Waldemar is that if my concern were to stand, then normal locks would also not work.

YSV: I'm pretty convinced by that argument.

SYG: Of course, I don't have that language written up, I hope we can iterate on that language.

WH: Okay, it's fine to iterate on how to say it well in the spec, but the goal, either you get a consistent result or you run out of memory, is perfectly achievable in any reasonable implementation which supports locks.

BN: This may be relevant (unless it's a terrible idea) to WH's point. I was also surprised when you mentioned that the thread that lost the race might just fail. I thought they would maybe hopefully both succeed. I realize now I was misinterpreting the meaning of the argument to the grow method. I thought it was like an increment to add to the current size instead of a new final size. If it was an increment then it seems like, from the perspective of both threads, they could both end up having their desired impact on the size of the buffer, if it was specified that way. So they’re not like disagreeing about the final size, they're just both putting their requested delta into whatever queue you're using to enforce the total order. So I'm wondering if you'd thought about giving the parameter that meaning instead of it meaning the new final length, if that makes sense?

SYG: Yeah, it does. I think we thought about having increments or decrements for resize and grow earlier on in the proposal, but didn't really revisit. So in that specific case of racing grows, it depends on what you want to happen, or what guarantees you want. If you actually want to grow, using as little memory, as you need to get away with your use case, you don't want to increment, right? it if you're racing to large grows and they're both, I don't know multiple megabytes. You probably care about the memory more than just if you can just give me this extra memory. Let me just take it even though it's necessary if you. if the, if the guarantee you want with these kind of low-level APIs, APIs, it's more control. Over the exact length and that you should fail. If you couldn't get to that exact length, then this makes sense. If your API is just, I need some extra bytes, I don't care if there's overcommit, then give me the extra bytes, then increment makes more sense. I have been erring on the side of exact control for the length of the buffer.

BN: Okay, sounds like you're thinking about it. If that was the solution to this race problem, then that would be great. But yeah, just wanted to raise the point.

WH: If you do have a race, let's say the current size is 10. So somebody wants to increase it to 20 and races with the other guy who wants to increase it to 40. What happens?

SYG: Right now, or with the fix?

WH: With the fix.

SYG: There would be a total order, so you will have an interleaving. So either grow 20 happens first or grow 40 happens first. If grow 20 happens first, both grow 20 and grow 40 succeed, if grow 40 happens first grow 20 fails.

WH: Okay, sounds good.

SYG: I would like to ask again for stage 3, modulo the change that we just discussed where we would have additional language that requires implementations to not pass spurious failures to to atomically update the length. So unless there were actual races. Yeah, basically we would wordsmith something to require the CAS and the stuff to be looped.

WH: Sounds good to me.

RPR: All right. Any objections to stage 3? [silence]

### Conclusion/resolution

- Stage 3, with a change to the locking semantics for growing loops as proposed by WH

## Symbols as Weak Keys, pt 2

Presenter: Leo Balter (LEO)

- proposal
- slides

LEO: This is something that I would like to bring up. Bring back the discussion that was in the queue, but also try to sum up the idea of what the objections from Waldemar. and Shu were about restricting symbols to be truly unique. I'm sorry if it's it's technically wrong and by that there are two things to addressed. This allows symbols registering a global symbol registry list single square root of LIF symbol for and also well known symbols separating them both, we should just Just create one distinction here and trying to capture the reasons. Yes. This adds a an internal Extra step for liveness of the symbol for the values. I understand this concern, although I'm not an implementer, I'm just taking these as yes, this is not desirable and understand this to you as well. and, One of the point talking to Rick has said, the weak map key should not be a guest board and reach unreachable by any code. That does not also not Explicitly, have access to the WeakMap. Hello. in symbol would break that. and trying to also consider the audio options. Like why not restricting them? Just give it a quick recap as well. Like the weak collections have a check for known truly unique symbols. This is also odd from the developers perspective, and I believe some of the feedback were related to that. But I'm not expanding this because I know that the next subs will be from JHD and just They might be related to this.

JHD: I had a clarifying question about the previous slide if you don't mind. if you don't have access to the WeakMap, then you can't get like, then you already can't to any of the keys. but like, you might if someone puts like globalThis in a WeakMap you can get to it even if you don't have a WeakMap. So I don't see how the how that is a property that exists or how adding a symbol breaks that. So I was wondering if we could get that clarified.

LEO: Um from my vision again, I'm not an implementer. think the point here is like if you add globalThis. Yeah, you can still add that and Google to exclude probably still be alive. Will be alive. Yes, you can do that today. But the thing is there is no extra step in the verification today that you have for adding globalThis. I think, what is implied here internally there will be, like, when Engine runs some internal check or ever how it goes there.

JHD: The last one on the slide.

LEO: Yeah, that's why I'm also separating them. This is actually a question for like and all the Mark. Should we just disallow owe symbols listed in the global symbol registry? Or should we just a little both of these points?

JHD: sorry question That the weakMap, he should be unguessable in unreachable by any code that does not also have access to the WeakMap. I don't understand that point specifically, I understand that the liveness stuff, that's not what I'm talking about here. I'm I don't understand that last bullet point and that's what I was hoping to get clarification.

LEO: Well, its reachable if you create something with symbol table for you can get it from Anything. This second bullet point should definitely not. Might not. Fully get to the well known symbols but definitely for the symbol that for you can I mean I understand that crossrealms, right?

JHD: I can yeah, that I could not only Crossroads in the same project that could create the symbol and then if also had access to the WeakMap, even indirectly, then I could pass that in, I get that first, but I don't have to have access to the WeakMap to be to have the ability to reach The key If the key happens to be already accessible to me, so I'm does that mean because not all explicitly have access to the key or to like like is that Miss phrased. Or I'm trying to understand why having access to the weakMap like makes a difference.

LEO: I need for forward this to Rick. This is one of one of the things when I was Consulting here and I'm just trying to channel this conversation, but yes, I don't have the full information about his feedback.

LEO: I'm sorry about this Interruption and my goal here is just to set it step forward. I don't think this is like Is, it's too much for me to request stage 3 in this meeting, but I want to make sure that we have a step forward. Like the next steps for to be addressed for the next meeting. So this is more like clarification concerns. If I don't answer all everything. Yes, I am also not going to ask for Stage 3 today.

MM: First of all, I want to take a moment to just address the previous question the phrase and that does not also have explicitly have access to the WeakMap. Cannot possibly be a correct phrase to include in this bullet point because weakMap, you not provide access to their whatever access you have with them without the weakMap. You have the same access with You can now with regard to the overall question I prefer and have always preferred that the version that Leo is currently shown of the one that expresses the objections from Waldemar and Shu. Historically, I want to just say a little bit about how we got here which is historically I objected I raised the same object that Waldemar and Shu are now raising, and then JHD raised the objection that allowing unregistered symbols while disallowing registered symbols created too much of a surprise, which I'm sympathetic to. And initially that took symbols as weak map keys out of the running entirely because there was no way to resolve that. Since then we've come up with some use cases that make it clear that symbols as weakmap keys have some uses. All those use cases only need the unregistered ones, and the use cases are sufficiently obscure for normal users, they are basically systems building use cases, that I think that they can overcome the usability surprise objection. There are some contexts where we want to disallow non primitive values. This is come up twice in the context of new proposals. One is the callable boundary in the revised Realms proposal to build membranes on top of. It's essential that not allow objects, but allowing something that can serve as WeakMap keys and has unforgeable uniqueness enables us to build membranes with good garbage collection and then the other one that came up is a records and tuples following symbols that can be used as WeakMap keys in there. Enables the rights amplification pattern, such that given a registry one can from those symbols look up other objects without contaminating the immutable data with the objects themselves. So even though both of those are future proposals, they're sufficiently different from each other that I think that they show that there is a systemic issue here. So my current position is, I am inclined to allow symbols as WeakMap keys to go forward either way because systemic issue shows that the extra ability is general enough. I'm okay, allowing them including registered symbols and well-known symbols, but I'm uncomfortable with that and I believe that the obscurity of the use of those cases should overcome JHD’s historical objection.

JHD: This has come up in plenary before, obviously not in any way that it prevents anyone from having their objections now. Mark's recollection of history is accurate. The rationale for trying to not distinguish between the kinds of symbols is also accurate. Essentially there's three kinds of symbols, there's regular ones, well known ones, which are cross realm but not in the registry, and then registry symbols. if we are trying to ensure that the only things you can put in a WeakMap is something that could at some point be collected. Then this proposed, alternative would achieve that but it's really easy to create things that in practice aren't collectible and put them in a week collection, like globalThis or weakMap itself like the Constructor, or anything, that you store as a property on a weak method and then you can make them be collectible, but in practice, if you do one of those things, they'll probably remain uncollectible and that's just not an issue and I think it would be really weird, like weirder than not having this proposal at all, to allow some kinds of symbols, but not others and I think that it would make it become a bad practice to use all three of those kinds of symbols and I don't know in which direction that would move but expect that a lot of folks. Say we'll just don't use the registry, make a regular symbol and pass it between Realms because then you can use it in a WeakMap. For example, I think it's just it's a usability issue and Justin's point next on the queue I think more eloquently explains it. So I think I'd pass to there but I just I really think that this is a unacceptable alternative.

SYG: I'll respond to JHD’s analogy first, which I think the analogy falls down a little bit. I don't think it's accurate to make an analogy with things that are global like globalThis or whatever else that that you can put in a weakMap today and like the problem. Isn't that Symbol.for registering from implementation point of view? Anyway, the problem isn't that Symbol.for symbols. The issue is that Symbol.for symbols are collectible today. Unlike things that are global so things that are global are already, not collectible because we keep them alive on the global, But because there's no way to observe the identity of symbol.for symbols, they can, in fact, be collected, when the last reference goes away. But with this proposal, if `Symbol.for` symbols are allowed in WeakMaps, but then the minute they are put into a WeakMap from that point on they be come uncollectible and that's the implementation issue. I think that's the distinction that's important to be. Not that, you know, they are already uncollectible then you know it's what's the problem with putting an already uncollectible thing. It's very strange that the collection name WeakMap would cause something to live forever. I don't think that’s great. I would like to hear what Justin has to say for the, for the other part. I won't respond to the user burden part of it. And then, finally, I think there's agreement from the champion group here that I do think it is important to draw the line at putting things, either with Identity or this, this class of things that class of values that can be garbage collected, once the last reference goes away like that, draw the line there for what can be put as keys. And for collections it would be highly problematic to allow other primitives like numbers but I don't think there's actually any disagreement there so that sounds fine.

JRL: So, I actually have a response to Shu or reply to Shu asking about if any implementations currently collect symbol, that for symbols.

JRL: Okay, so Your argument here. Changes my mind, just because it now becomes the same kind of bug that we observed with tagged template literals, which was their memory was essentially uncollectible and because you could reproduce the tagged template literal at any point in the future, if this is the same bug that could happen with symbol, for then we've just introduced a new GC bug and that seems bad. My original response though was that Banning symbol dot for symbols just pushes the responsibility onto the users who are trying to key with a symbol. So instead of just being able to do WeakMap.get or .set whatever on Ambiguously with a symbol that I am past. I now have to verify that this symbol is not registered globally which just means if I need to key on a weakmap I'm just inserting it into a map. Instead, I have to now switch between a map in a weak map which seems - the fallback that I'm going to have to implement is the exact same uncollectible memory allocation until the map goes out of GC now.

JHD: Because this is disallowing well known symbols, the code sample? That's in the queue. It would you have to be even more complex? Because you have to check symbol.key for and you'd also have to check that it wasn't a property on a symbol property on the symbol Constructor, which is a bit onerous.

WH: My only concern is about symbols which can be resurrected by naming them again, which is the `Symbol.for` symbols. I do not think we should disallow well-known symbols which are not `Symbol.for` symbols. So I think this slide is incorrect, at least if it's trying to address my point, which is that we should only disallow `Symbol.for` symbols.

LEO: The idea was just to actually I just try to put everything in perspective here to just make sure I actually address the concern. So I just wanted to make sure if you just should go with bullet one or both 1 and two.

WH: I strongly do not think that we should go with bullet two, I don't want to get into the business of figuring out what the definition of a well-known symbol is.

MM: I'm gonna introduce a quick clarifying. Question the well known symbols. Are they? Do they have a unique identity / realm are they the same or know? They are the same across every realm in there knocking registered.

MM: If they're the same across realms then they are recreated when you create a new realm.

WH: There's a small fixed set of them, it is not an infinite set.

MM: They are equivalent to registered symbols in the sense that they can never visibly go away.

WH: But they always exist, even if they're removed from the symbol constructor of all currently existing realms.

JHD: they're not configurable, so they can never be removed from any realm.

LEO: Symbol itself can be removed.

BN: I like the consistency of being able to put all kinds of symbols into the WeakMap. but I think these objections from WH and others do have merit and I just want to point out that what we're talking about is the cases in which WeakMap#set will throw when you try to put something into it. If we go with the version of the proposal where Symbol.for symbols are disallowed, that means WeakMap#set will throw if you pass such a symbol. That's not great for consistency, but in terms of web compatibility, it's a whole lot easier to undo that, to stop throwing that exception in the future, than it would be to enable Symbol.for symbols and then later disallow them. And, you know, because this is going to be something that people are using all over the world, I think if we ship that more conservative version of this (throwing for Symbol.for symbols), the community will let us know if that was such a painful mistake that we need to revisit it… and then we can do that, right? We can just make it stop throwing and say, “yeah, these symbols aren't going to be collected, but it's better for consistency to allow them in WeakMaps.” So I think I like the strategy/conservatism of that staged approach, of initially disallowing Symbol.for symbols, but considering enabling them at a later date.

### Conclusion/resolution

- LEO to have a thread on Github to discuss allowing Symbol.for symbols and well-known symbols.
