# 20 July, 2022 Meeting Notes

-----

**In-person attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Robin Ricard         | RRD            | Bloomberg          |
| Jason Williams       | JWS            | Bloomberg          |
| Bradford C. Smith    | BSH            | Google             |
| Dan Minor            | DLM            | Mozilla            |
| Ross Kirsling        | RKG            | Sony               |
| Kris Kowal           | KKL            | Agoric             |

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Nicolò Ribaudo       | NRO            | Igalia             |
| Waldemar Horwat      | WH             | Google             |
| Michael Saboff       | MLS            | Apple              |
| Chris de Almeida     | CDA            | IBM                |
| Caridy Patiño        | CP             | Salesforce         |
| Yulia Startsev       | YSV            | Mozilla            |
| Frank Yung-Fong Tang | FYT            | Google             |
| Devin Rousso         | DRO            | Apple              |
| Istvan Sebestyen     | IS             | Ecma International |
| Rick Waldron         | RW             | Salesforce         |
| Philip Chimento      | PFC            | Igalia S.L.        |

Day 1 <- yesterdays notes

CERTAIN PARTS OF THE NOTES ARE GOING TO BE WRITTEN BY THE ATTENDEES OR EDITING, IT WILL REQUIRE KIND OF HUMAN EDITING AND CONFIRMATION. bUT STILL, TRANSCRIBING EVERYTHING THAT WE ARE SAYING IN that section leading up to that will be good.

Transcribed.

tHAT IS THE STANDARD WAY OF DOING IT. oKAY.

I will do it small here.

You know, if it’s not too difficult to do it in kind of natural casing, then that would be nice. But it’s understandable, but that’s the standard way of doing the text.

Yeah, I think she has it turned on so it’s – it’s in normal text here, it looks like.

?: okay. Perfect. So . . . my understanding from our conversation before, is that if you don’t know who is talking, you will put in

?: SPEAKER:

?: we have them in there right now, and we can put in either speaking or just chevrons. Because we just got that name list, and there’s no way we can even get remotely close to doing that today.

?: right.

?: okay. Yeah. Then we will – we will work on filling that in.

?: okay. Great.

?: one thing . . . Dan, would you prefer, like, chevron speaker colon or just chevrons?

DE: we – so what we usually do for the final version of the notes is, you know, we have the three letter acronyms, you know, that there’s no time to use those for today. 3 letter acronym, colon and the comment. So if you could

?: I can do an audio check at any time.

DE: can people go around the room and say, hello. I work at Bloomberg The audio needs to be turned up in order to hear everything

?: the last one was quite inaudible.

?: hi, I am Daniel. From Mozilla.

?: pretty good.

?: who are you? Brian?

BT: hi, I am Brian I work for Microsoft.

RPR: hi. I am Rick. I work for Bloomberg and one of the cochairs of the meeting so you may hear me meeting a little more than others.

DE: Julia, who are you

YSV: that is an excellent question. Hi, I am Julia. I work for Mozi

DE: okay. So . . .

YSV: I have a question. Are we doing a test for the note-taker.

DE: so now we have professional captioners with us. And the first presentation of the day will be to review the motivation for this and open it up briefly to questions with them. Before going on to two hours of captioning support. And then, you know, they will leave. And we will decide whether we want to continue with this for future meetings

YSV: Okay. And the process will be forwarding to get a quick preview, it’s going to be our current bot-based note-taking or full note-taking?

DE: they are taking the notes. We will have to fill in names because I failed to send the name list to the captioners before the event. Hopefully in the future meetings, it will be possible for people to – for the names to be part of this as well.

YSV: okay.

DE: and I will explain more in the presentation. I wanted to ask people, the first time they talk, to identify, just say their name and the three-letter acronym in this topic

YSV: that sounds great. That’s a good idea

DE: and that is a practice going forward so everything will start to catch on

MF: should we ask Kevin to have the transcription about simultaneously into a separate document

DE: in my opinion, no. I am watching the transcription, and the bot needs a lot of human help anyway, so . . . I don’t – I don’t think that will be a good use of anyone’s time, to provide that human help, given this.

MF: okay.

?: yeah. A person.

?: okay.

?: someone in the room

?: no. They are on the Internet. So Duane O’Geil. Am I pronouncing the name properly?

?: no one ever does. It’s O’giel.

DE: he runs a transcription company and we are working with somebody in his firm to do this, and this is sponsored by Bloomberg.

?: awesome. [inaudible]

DE: that transcribed as [inaudible].

Duane O’Giel: I think one of the key things beings just to note for everyone here too, when you are speaking, remember to be close to your mic. And also, allow others to finish their instead ofer sentence. It just makes it a little easier for the captioner to get the information in there properly.

DE: I wanted to request that you interrupt us, maybe through a message in the chat or just a message in the document when things are difficult to hear, so that it can be, you know, reported to the committee. Would that be okay?

Duane O’Giel: yeah. I think one of the things that you will see that the writer will do is, they will put up [inaudible].

DE: okay the great. People watching the notes, if you see that coming up, you can just, you know, shut out or put a point of order on TCQ to say, point of order, we have an [inaudible] comment. So we will repeat this when the presentation happens

?: okay.

## Professional Stenography

Presenter: Dan Ehrenberg (DE)
[slides](https://docs.google.com/presentation/d/1FLtYVdf2l3yX0U5NlUC91mcyC5OR8m6CTx77yjqURD8/edit#slide=id.p)
[issue](https://github.com/tc39/Reflector/issues/426)
[glossary](https://github.com/tc39/how-we-work/blob/main/terminology.md)

DE: yes. So – so this is about professional support. This is my first presentation as Bloomberg, but it continues a line of work through to the TC39 group. This is an inclusion issue for multiple issues. I am happy to see many of you in San Francisco and remote. The note takers are exhausted. It falls on the same few people. In principle, the notes don’t have to be as extensive as what we have been taking. But in practice, we find there’s a lot of subtle things in the conversation that would get missed by this potentially and have been historically. So it’s important to have full transcriptions for us, for that purpose. Further, this can help, you know, hearing impaired participants follow during meeting as well by following the notes or for whatever reason that the audible version might not work as well. KG made a bot and working on incremental improvements based on speech that detects API. But it’s too much work for the human note-takers to keep up with corrections and end up checking in gibberish in the notes.

DE: So this is our solution, a professional captioner. And we have a professional person on this call taking the notes right now, into our notes document on line. The flow is like before. The captioner writes the transcript into our Google docs document and corrections can happen from the committee, the other document, both during the meeting and after the meeting.

DE: So some tips for enabling good transcription: if people can contribute to the glossary, this forms some base material that the captioner can use to assist in understanding what are the technical words that come up. We are using the replacement JS filed used in the bot, but into more human readable form. So please, when you talk, because we are a new group for the captioner, if the first time you speak, you can identify yourself, and your 3-letter acronym, then that will be helpful for the captioner. It might not be sufficient just one time, but if – TC39 delegates can fill in missing names, that’s good for today, at least.

DE: So we are joined by the IR broadcast captioning company from Duane O’Geil and his staff. They have been taking notes from the beginning of this presentation. Today we have two hours of professional captioning sponsored by Bloomberg. If this experiment work wells, then we plan to ask ECMA for support for ongoing professional captioning. This is well within the Ecma bylaws which state that the secretary should prepare the minutes of the meetings. It’s clear that ECMA was always in the loop for that. So I want to make sure, is everyone okay with her being here for the next two hours and later, maybe tomorrow, for example, we can recap and whether we want to continue with the professional captioner. That’s the whole presentation. Do people have any concerns or comments?

BT: no, none in the queue at this time. But we can give it a couple of seconds to see if anyone is typing

DE: SPEAKER: We have Duane on the line if anyone has any questions.

JHD: I have a question. So the – for mark down, the style of things in the notes needs to end up a certain way. But obviously, that may not be, like, that would be disruptive to the process of taking the notes. So is there – is that something we should take on ourselves or feedback we can provide for the stenographer to clean it up after or what are your thoughts

DE: the answer is both. For today, I didn’t give advance instructions about how to do the mark down formatting. Over time, maybe this is something that they could be writing things a little bit more in that format or fixed up afterwards. But it will take time to, to, you know, have this conversation about the format. Duane, do you have any more comments on this

Duane O’Geil: I think what you just said sums it up quite well. Once we have better information, understand the conversations and such, we can, you know, definitely adapt to that. However, you know, coming into this, as newbies, it’s going to be more difficult. So we will just have straight text. If this is something that does proceed in the future, we can certainly work to understanding what exactly it is that you need, and trying to incorporate that moreso into everything that we provide.

JHD: and we will presumably have some feedback channel set up for having – for conveying that.

DE: yeah. I have an email thread with them and we can be in touch.

BT: a couple queue items, Michael:

MLS: our desire to take exhaustive notes may not be reasonable. Other TCs don’t do that. MLS, Michael. I know other TCs, they record salient points of the discussion, and the result of the discussion, it may be the case that it’s just not reasonable for us to continue the process. And I understand it is difficult for the note-takers or the bot fixers or whatever you want to call them

DE: so I addressed that in the beginning of the presentation. Why isn’t it reasonable if we have a technical path forward with this sort of support?

MLS: because even with the stenographer, I don’t think we are going to fully capture everything without people going back and editing what has been recorded. Especially when we have – especially when we have multiple people involved in a conversation which occasionally happens

DE: to clarity, this is – IR broadcast captioning has been flexible enough to work with our existing work flow. They are typing into Google docs. People who want to edit, can, but they will have more accurate base material than they did with the bot.

MLS: I am not sure you’re understanding my point.

DE: we would have humans editing the notes for some of the reasons they do today, to get – to make sure the points fully accurate, but they will be working with a base of more accurately transcribed material. I disagree with you that it’s feasible for us to choose the salient points. When looking at the past notes of TC39, important points have been left out by attempts to only list the salient points. It’s hard to read some of the notes from back – from back then. I think it’s person for our process to have this more fully captioned

MLS: let me continue what I was going to say, when you replied. I think – I think a speaker could register that there’s certain points they want captured in the notes. And if they do that, it reduces the amount of note-taking that needs to happen.

DE: okay. That’s an interesting idea.

BT: we have a few more items on the queue, and only like a minute or two left on in the timebox. So let’s try and get through this. Would you all have a reply on this topic

USA: real quick, I understand Michael, the point that you’re trying to make, but I – I have a strong feeling, looking at the quality of notes that we have right now, that the proposal is still a lot for work than what we have currently, which is a very good base to – to make slight edits on. If speakers have to specify more details or if we go back to the bot or whatever, all of those require more work. Of course, without having to pay for the transcription.

DE: yeah. What we have seen is that the work for note-taking falls on a fall number of people who have trouble participating in meetings. And I think that would still be the case, even if the notes were high-level. But maybe note takers can comment. Can you extend the time box by 5 minutes? So we can work through the queue.

BT: I will look at that. Let’s get Robin

RRD: So. Yeah. I’ve been taking notes in the past and this meeting yesterday. To first answer to JHD earlier, for the mark down formatting, I think the amount of work we need to adapt to our formatting is very minimal. So I am not at all concerned about this. Also, to answer to MLS . . . for us and what we are seeing right now, we haven’t gone into technical discussions yet. So there is a caveat on this. But we will see when we go to the technical discussions. Right now, the way the notes are being written is way more helpful than the bot ever was because there is less repetition. We really feel like this is transcribing what is being said in the room. So we are still able to go and edit, we are still doing this, but we are doing it at a frequency that is much lower than with the bot previously. I think there is huge plus on a different state

DE: the note takers have a hard time getting people to listen to them, when they ask people to talk more slowly or – or to, you know, talk more to the microphone. So I think asking it to be on the committee to when a point is salient is kind of difficult. And it can be difficult to figure that out in an online conversation.

BT: okay. There’s a few folks in the queue. Just a time note. We can continue this discussion to 10:20. But absolutely no later. So let’s try to actually get done in more than 5 minutes.

DE: okay. Thanks.

HHM: yeah. Adding on to the same discussion here. We have taken notes a number of times, and we highlight the challenge . . . feeling what the stenographer convey, can we have a summary of what happened during this presentation? Like the notes in the meeting. Yes, it’s really useful. But to create a summary of what happened during this particular segment in the meeting.

DE: that is a welcome contribution. It can be done for past meetings. It’s pretty separate from the – the note-taking. I mean, one did not subsume the other. If somebody wants to do that work, it’s a great initiative.

HHM: okay. Then. Thank you.

BT: go ahead, Shane.

SFC: I just wanted to remark that there is no delegate in the room that has complete context on every TC39 discussion, and relying only on note-takers to decide what the salient points are is just simply not scalable. Having a comprehensive or exhaustive baseline I think is essential. I want to reiterate that point.

DE: any more on in queue

CP: I am with MLS on some of the things he mentioned. What is the point of having notes beyond the ECMA archives? I believe there is much more but it’s hard for me to think about how are we going to enable other people to rely on the notes and today, I know most people will never go back and look at the notes and look for points in the conversations. Maybe we have to do some work around it by creating tools that allow us to maybe link from proposals to the notes for every time that the proposal is discussed in plenary and so on . . . so maybe there’s more that we can get out of the notes, and having professional notes helps. So to date, it’s very, very minimal what is useful from the point of view of the notes.

DE: my experience as a proposal author differs significantly from that. I need to look back at what was previously stated to follow up with the concerns raised. They are in the course of the discussion also. So, yeah. Improved tooling, separately separate from a captioner. This is an extra piece of work that we can’t contract for, and great to have volunteers for.

BT: first, MLS wanted to say that his point was the speaker identifies the points that they want recorded. But he doesn’t need to speak. YSV go ahead.

YSV: I wanted to remark, first, that I’ve been following the note takers and the note-taking is really high quality. I would like to remind folks that I had a project, it’s – I haven’t had time for it – but I had a project that was linking different parts of the discussion, how we were switching from which concerns were being addressed and how. And actually, doing a detailed tagging through all of the notes in order to generate for us a design rationale. This was part of the rationale project. That was a point in which I thought it was a really a shame we couldn’t have more high-quality notes because if we only take, for example, the salient notes, you don’t actually capture – if you go back in history, when we were only taking salient notes. Back when only taking the salient notes, it was very difficult to understand how a decision was come upon. Why we made a certain decision. Because only the decision was recorded and not how we got to it. We already have a problem where we are losing information about a decision that’s been made in the past. We end up with a design and we don’t know how we got to it. Like DE mentioned, I too go back into the notes to determine how we came to certain decisions. And that is much easier with a high-quality, high-resolution note-taking system. The only alternative, I could imagine, to what we do today with these high-resolution notes, is something like recording video of these. But that is a contentious alternative.

DE: yeah. Thank you very much.

BT: we have to leave it there. But thankfully the queue is empty

DE: I take it there’s no objection to continuing with the transcription until noon? Okay. Thank you.

BT: thank you, DE.

## Avoid triggering throw in corner case in async generators or Avoid mostly-redundant await in async yield*

Presenter: Kevin Gibbons (KG)

- PR: [Avoid triggering throw in corner case in async generators](https://github.com/tc39/ecma262/pull/2818)

- Alternative PR: [Avoid mostly-redundant await in async yield*](https://github.com/tc39/ecma262/pull/2819)

KG: So this – the title of this issue is misleading because when I originally noticed the issue, I proposed a fix and realized that the fix was for an issue which shouldn’t have happened in the first place. So I have a slightly larger proposal to make. But it needs a lot of background. So we will spend a while doing background on this. So this is the main pull request that I want to get feedback for. There’s an alternative one linked there that makes the smaller more technical change. But it’s 2819 that I wanted to focus on today. So I'm going to do a bit of background. Some of this will be familiar to many of you. But it’s important to understand, and also, some of this will be important later for the iterator helpers proposal.

KG: So . . . there are a couple of protocols in the spec that are not necessarily completely defined, or the definitions are not necessarily consistent with how they are used in the spec. I am going to talk about a thing I will call “the iterator protocol.” This method `.next` and optionally `.return`, where `.next` returns an object that has a `done` boolean and a `value`. And this is like the main way you interact with an iterator. You call`next` repeatedly and check the `done`Boolean. There is a method to call on the iterator to perform cleanup. So the value from return is required to be an object, but not otherwise particularly inspected. But I want to focus on the format of the return value from next because it’s important later.

KG: So the iterator protocol is used primarily by`for-of`loops. It will get Symbol.iterator from the iterable and invoke .next on the iterator. And if you exit the loop early, by calling break, it calls iterator.return. The value is the contents of the value slot from the return value of the next method.

KG: Okay. The generator protocol extends that slightly. By adding an additional method, throw, as well as by adding arguments to next and return. These arguments are not strictly given an interpretation in the generator protocol, but they are a way to communicate to the generator instead of consuming values from it. The point of throw is, according to the spec, to notify the generator that the caller has detected an error condition in the generator itself. But nothing calls that. That's not quite true, but we'll be coming back to that. Almost nothing in the spec calls throw. So the interpretation of throw is something you have to work out based on how it works in generators itself. There’s an example of a generator. If you are paused at a yield, the yield itself you have to call next to get to the first yield. And then the first call to next will give you done false and the value that was yielded. And then if you call throw after that, that will – while the generator is paused, it will trigger the catch block. If you call dot return it will not trigger the catch block, but it will trigger the finally block. So this is when it means to say that throw is for error conditions in the generator itself.

KG: One other interesting part of syntactic generators, part of the syntax of generators, is that there’s the yield* operation. Which forwards all three of the things, including the arguments, to another generator. And there’s logic for if the other generator hasn't implemented part of the protocol. The important part it’s forwarding the entire protocol. Then we can make stuff async. This is pretty much the same as the iterator protocol, but you get promises for objects instead of just raw objects. But again, the done boolean and the value. I want to emphasize that the for await loop does one await. And that's the result of`iterator.next`. It’s awaiting this first promise on the screen here. It is not awaiting the values slot from the object inside of the promise. And in fact, it is possible to write an async iterator that has a promise in that value slot and the for await loop will observe, in the body of the loop, the promise. It will not unwrap that promise. And then again, we have the async extension of the generator protocol which is exactly like the regular generator protocol, but they return promises rather than just the objects.

KG: There’s an asterisk on the "anything" there. The reason for that asterisk is that in a syntactic generator, when you do a yield, it awaits the value yielded before it wraps it up in this {done,value} pair. So, for example, if you yield a rejected promise, instead of yielding, it will trigger the catch. It will not pause the generator. It pauses the generator in sense of performing an await. But not the value from next. But it will actually immediately trigger the catch just as if you had replaced that whole yield with a throw. I guess with a throw of `await 1`. And of course, if you yield a non rejected promise it will unwrap that promise just the same. So this is the syntactic generator. Similarly, the async from sync wrapper, where you are doing a for await loop for something that is a sync iterator of promises, it will unwrap those. so in practice, while it is technically possible to put an arbitrary promise in the value slot, the syntactic generator and the automatic wrapper for sync iterators will not ever have a promise there because it will await it first. And it’s basically for this reason that`for await` doesn’t unwrap promises in the value slot. It’s because the assumption is that a well-behaved generator is never going to do that. Let’s see.

KG: So that’s all of the background. The weird part is that yield star in async generators does do an await. If you `yield*` from a weird iterator like this, where you have very carefully manually arranged to have a promise value in the slot - and it’s only possible to do it like this - then the yield star will await that value. So it’s not just transparently forwarding the protocol to an inner generator; it’s putting this extra await here. And I claim this is weird. The only way this await is relevant is if you have a manually implemented iterator as on the previous slide. It’s not something that comes up with a syntactic generator. And it's different from how `for await of` works. `For await of` will observe the promise. I would like to propose we get rid of this await: this is a normative change, but likely to be web-compatible. You can run into this in the sense that your code will run slower because it’s doing an await it doesn’t need to do. But to see different values rather than just differences in timing, you have to have have a manual async iterator as well as do a `yield*` in an async generator of that async iterator. I don’t think this is likely to come up very much. I would like to propose that we get rid of it.

KG: Also, I think this might have just been a mistake. We went back and forth on how yield should work with promises in async generators several times, and at the point we did decide that it should be yield that does the await rather than having `for await` doing two awaits, the decision was only really talking about yield itself, not yield*. There was even a line in the presentation that said `yield*` doesn’t peek into the promises returned from `next`. But because of the way the spec text was written, the change that made yield do the await, also happened to make `yield*` do an additional wait. So I would like to change this. Again, not guaranteed to be web compatible. There are different technical issues we can discuss if we don't like this, but I am hoping for consensus for this change. Do we have anything in the queue?

BT: yeah. Kris, strongly supports this bug fix, but doesn’t want to talk. And then Mark has a question.

MM: So there was a lot of discussion around all of these issues originally about where the double await should be and all that. And I was wondering besides looking at the old presentations, did you take a look at the – or were you around for when we were – when we had those arguments and . . . I am just wondering if you’re – if this is informed by what the arguments were, as well as what the conclusions were?

KG: I was not around, or it was my first meeting, so I don’t particularly remember it. Yes, I went through the notes and the discussion in the pull requests and the various alternatives. There wasn’t much discussion of `yield*` itself. It was on the for-await loop and the yield. So as far as I am aware, this is just a case that we didn’t discuss at all

MM: I did participate heavily in those, and everything is consistent with my memory. And I find it plausible. So I support this change. I do want to make sure that I didn’t misunderstand something. You said throw is almost never called into spec. If a for loop is exited with a thrown error, that causes – that does cause throw on the iterator being iterated, correct?

KG: no. That calls return. It closes the iterator. But it is not considered an error condition in the iterator itself.

MM: oh. Interesting. So you said it almost never calls. Is the only call the yield star?

KG: yes. Well, yes. The only call is in `yield*`. But, of course, that’s forwarding the protocol. So if you do – like a user had to write `.throw` manually, except for the issue which prompted this, which I can direct you to the GitHub issue to show you the code which does a yield star of a rejected promise in that case.

MM: got it. Okay. I support this. I am done.

BT: thank you, mark. YSV is up next

YSV: yeah. So from our perspective, we don’t see an issue. And this is a nice bug fix. But we agree that there is a potential for web compatibility issues. This has been shipping for quite a while. That is only impacting this one case, where you have manually constructed an async generator and then yield star. Does yield star potentially have impacts where this extra await is observable for other code? Is there any way for us to investigate that?

KG: so this will affect code that is not doing this weird manually async iterator in the sense that an additional await implies an additional tick. So this will change the ordering of code that is doing `yield*` in an async generator. As far as I can tell, the only effects are the number of ticks and this case where you have a manually implemented iterator that puts a promise in the value slot and then you do a yield star in an async generator of that manual async iterator, that will observe different values. As far as I can tell, those are the only two cases. So timing and this weird manual async iterator case. Not aware of any other differences.

YSV: okay. So the proposal here would be we take the risk, have an implementor test this, see if we get bugs?

KG: yeah.

YSV: okay. I have some web compat data. I will post it to the issue.

KG: okay.

BT: all right. KKL is next.

KKL: KKL. I support this change. It looks like a bug fix to me. It should be possible to do ordered delivery of promises for which the promises that are delivered have an orthogonal order which is consistent with the way promise queue would work. It’s possible to deliver a promise that resolves much later.

BT: all right. Thank you, KKL. DE is up next.

DE: as someone who was involved in this particular discussion, I agree that yield* was kind of an after-thought. And the attempt was to plumb through in a consistent way and this fix makes a lot of sense.

BT: all right. Thank you, Dan. Next up is WH.

WH: You have two issues here. What is the throw issue? Can you give an example of how it’s triggered?

KG: yes. I will pull up the code because it is very hard to talk about, without having code. `<<showing issue #2813>>` Okay. Here is a horrible program. The thing that is going on here is that you have a manual implementation of an async iterator. The manual implementation returns a promise wrapper that contains done: false and `value` is a rejected promise. And then you are doing yield star on this manually implemented async iterator. The thing that happens, and I am almost certain this is a bug . . . is that when the – when you do `yield*` of the inner iterator, the promise rejection is awaited during the yield star, and because of how the spec is written, let’s see . . . so in the evaluation semantics for yield *, when we got the normal success the call to next, we call async generator yield. And inside of async generator yield, we are performing this await, and exceptions are propagated. We are awaiting a rejected promise and then propagating exceptions of the promise was rejected. So a throw completion. With this question mark. We propagate the throw completion. And then in the yield* semantics, we set received to the results of the async generator yield. And then the next time through, we say that `received.type` is ‘throw’. The name of this variable is probably indicative of what it is supposed to be. The idea is that ‘received’ is what the consumer of the generator is trying to provide to the generator. With a regular generator, the only way to get this is if someone called dot throw when the generator was paused. Similarly, the way you get a return completion is that someone called dot return while the generator was paused. But because the exception happens inside of async generator yield, rather than happening outside of async generator yield, where propagated, like called to generator is thrown, the spec language thinks basically that the throw completion came from the consumer of the generator, rather than coming from the rejected promise that the generator returned. <<15.5.5 AO>> As far as I can tell, this is the only place in the entire specification that dot throw will be called without a user having first called dot throw and that getting propagated somehow. And I am almost certain it’s a bug due to async generator yield having await inside of it. Does that make sense?

WH: Kind of, yeah.

KG: okay. And, of course, the way that getting rid of the await fixes it, is that getting rid of the await in yield * means this line will not be here. <<27.6.8 AO>> It will go back to being the case, the only way you get a throw completion out of async generator yield is if someone called throw explicitly instead of having another way of getting a throw completion.

WH: Okay. Thank you.

KG: I don’t see anything else on the queue. I would like to ask for consensus for this normative change. I will write test262 tests and of course we would need an engine to volunteer to ship at some point and hopefully confirm it is web compatible. We can’t do that without getting consensus. So I would like to ask for consensus for this change.

BT: I am not seeing any – Rick go ahead

RW: My only question was, you mentioned writing test262 tests . . . awesome. Have you identified existing test262 tests that will use – that will changed by this. If you haven’t, will you do that work and we can rely on you to make sure that this gets sorted.

KG: My current plan is to use engine626 and implement this change and run test 262 and see what fails. If it doesn’t work, I would have a harder time, but I'll do my best to identify any tests that will be invalidated.

RW: great. You literally jumped to my next point, which was, to recommend using GCL’s engine262 to find them. Perfect. Awesome. It sounds like you have a great plan. I love it. I am all in.

BT: all right. It sounds like consensus to me.

KG: Thanks very much.

### Conclusion/Decision

- Consensus on removing the await
- KG to write test262 tests / find old tests which are invalidated

## Always check regular expression flags by “flags”

Presenter: Richard Gibson (RGN)

- [pr](https://github.com/tc39/ecma262/pull/2791)

RGN: okay. I am Richard Gibson, abbreviation RGN. And I am here to talk today about fixing an irregularity with regular expressions that was discovered or probably rediscovered as part of introducing the V-flag. So there are a number of regular expression methods that need to check the flags of their receiver or argument. And for the most part, the way they do it is by using the flags getter. Look at String.prototype.matchAll and String.prototype.replaceAll, both Get "flags" off the regular expression. And it's the same on RegExp.prototype for Symbol.matchAll and Symbol.split. But there are two methods that behave differently. And they are being changed by the V flag, prompting a comment from JHD in the pull request to introduce it, why are we doing a conditional Get of "unicode" after getting "unicodeSets"? We should instead be reading it unconditionally. More predictable behaviour. And the reason for that was that the existing method already did conditional reading. If you look in Symbol.match, we see an example of it. Right here. <<22.2.5.8>> Where it reads the "global" property off of the regular expression, if that’s false, does down one path, otherwise reads the "unicode" property only in the other one. The Symbol.replace operation is similar. Reads the "global" flag, and then only if it’s `true` reads "unicode". This is surprising. It surprised JHD and me, and the champions of the V flag proposal, and it’s a little awkward. The built-in "flags" getter, in fact, does do observable Gets of the individual properties, always all of them and always in the same deterministic order, and concatenates them to a string, which is what we see the other methods such as split interacting with (after forcing ToString just in case an override has done something weird), checking it for specific characters representing the flags. So the needs-consensus pull request is proposing that we update the two divergent methods to instead behave like the others. Rather than reading individual properties directly and conditionally, a pattern which gets worse after we have the V flag and after we introduce even more relevant regular expression flags, we just basically cut it off now if we can do so with web compatibility. It makes things a little bit simpler and certainly more in alignment with the other four methods. And that’s where this stands. It is a normative change. I suspect web compatibility, but I don’t have any firm evidence of that yet and the best way to find out is to attempt this if we get consensus to try. That’s the end of the presentation, and I open it up to the queue.

BT: WH is up first.

WH: If I were changing this, I would rather move in the direction of reading individual flags rather than what this is doing, which is moving from reading individual flags to calling a method which reads every flag, accumulates them into a string, and then decodes the string looking for single characters. It just seems like it’s doing more unnecessary work. So — what is the reason for the change?

RGN: largely to avoid unnecessary litigation with every new regular expression proposal about which individual flag properties should be read in which order and under what circumstances.

JHD: I put a response on the queues. It’s unnecessary work when somebody writes a subclass because otherwise will detect that all of these getters are unmodified and they will pull the value out of the slot. Since essentially zero people on the planet write – the overwrite design of the getters is something that while the committee decided it wasn’t worth the turn to change the feeling of the room when it’s been discussed, it’s consistently been that we wish we hadn’t included all of it. It’s simpler from a perspective of this specific algorithm like `match`, in this case that we are looking at, it’s simpler in terms of the observable calls are deterministic and also avoidable for the common case. But that seems like an improvement

WH: If approximately nobody encounters this, what’s the point of changing it?

RGN: to reiterate, to avoid litigation with every regular expression proposal. Only two methods of the six read individual flag properties directly, and it would be a better use of our time if they didn’t. Reading "flags" ends up in the same place, except for pathological cases that intentionally diverge from the standard built-in behaviour.

BT: YSV has a reply on this topic

YSV: yeah, to chime in. This might be something that is optimizable at the engine level. But the benefit here is at the spec level where we have consistency across all of the methods and then for, for example, in an implementation we could comment, keep an existing version if it is fully one-on-one transation. Except for the branch case, which might be a – subclass built-in, for example

BT: thank you, YSV. Dan has a comment next.

DLM: yes. I just wanted to express positive from the SpiderMonkey’s team

RGN: thanks, I’m happy to hear that early on from an implementation

BT: with that, the queue is empty. Would you like a call for consensus on this change

RGN: absolutely.

BT: Anyone object to making this change?

BT: all right. I am not seeing anyone on the queue. So it sounds like consensus to me.

RGN: okay. Next up is going to be, I think, preparing test 262 changes to capture them. The pull request against Ecma 626 is already in good shape. So thank you

BT: all right. Excellent. And I believe you have the next agenda item as well.

### Conclusion/Decision

- PR/change accepted

## Allow toString of a built-in function to output a computed property name

Presenter: Richard Gibson (RGN)

- [pr](https://github.com/tc39/ecma262/pull/2695)

RGN: This one is regarding `function.prototype.toString`. The highlight of the issue in question . . . behaviour of XS, not matching the other implementations with respect to the name portion of the output from the built-in `function.prototype.toString`. Other implementations always output either an identifier or nothing at all, or in the special cases of a symbol-name function, a special branch for a computed name. What XS is doing, instead is outputting a computed name for it, which is allowed in a different branch of `function.prototype.toString` but not for a built-in. The concern and the proposal here is around whether or not that should be permitted. Essentially, we are looking at the . . . the behaviour that is required when the function in question is built in. Currently, it is the case that the portion of the returned string that would be managed by a particular production must be the value of the [[InitialName]] slot. The [[InitialName]] slot is something that every built in function has. And it is set at creation to equal the "name" property, which in certain circumstances could be changed later. Most of the time, the initial name slot value is an IdentifierName, but again in the case of the symbol-named functions, it’s actually instead a computed property name that looks like “[Symbol.something]” optionally preceded by “get” or “set”. << Production: NativeFunction >> The question here, the normative aspect of the change is around whether or not we should permit the bracketed string literal to be considered valid for a built in function. It is important to note that in the case of a function which is not built in but also doesn’t have source text, such as one that is a proxy or the output of bind, must also conform to NativeFunction but doesn’t have this name constraint and so the XS output is valid. So the fundamental problem here, I think, is that we probably could nail down `function.prototype.toString` a little bit better. This particular change is normative in the direction of being more flexible, but I would be willing to listen to should it be less flexible . . . but the pull request here is, towards increased flexibility and I think that’s the starting point of the discussion for today. With that, I am ready to hit the queue.

MF: So you gave a single example there, where XS outputs a computed name looking thing, but it’s using empty string, which isn’t compelling because they could omit that name at that point. Match the implementations. Is there a case where you could cause XS to output something that wouldn’t be a valid identifier at that spot?

RGN: yes. That is the case for some built ins, but also the case for the ones I was talking about, like when you bind it. You get things like this . . . and this . . (highlighted parts of PR). XS has the interesting property that the string inside the brackets for these functions always matches the name of the function as far as I can tell, which is not the case for the other implementations. There’s this, like, split between the "name" property of the function, and the content of the string output by `toString`.

BT: all right. MM has the next queue item.

MM: yeah. Um, I strongly object to the idea of making the spec more permissive and less deterministic. You know, the whole purpose of having a standards committee originally was because of the capability problems between browsers and the pathological game theory as we called it. All of the engine-makers have an interest, especially in things like this, where what the decision is matters much less than whether there’s agreement. We all have an interest in having the engines agree so that the programs that are out there, that were – tested against some engines work on other engines. We have a normative spec. We don’t have adequate test 262 coverage to flag those in error and has a simple solution to, add the test 262 tests to bring everyone in conformance with the normive spec, and in any case, over time, because of this – the capability issue, it more important than the particular resolution of how strings print, we should be seeking to be more deterministic in the perspective, not less deterministic.

RGN: I am extremely sympathetic to this point. And if there is appetite to nail down not just what goes between the function token and the left parenthesis, I would be willing to pursue not just that, but also the whitespace.

MM: I would appreciate that. I would certainly support that.

BT: okay. JHD is on the queue next

JHD: yeah. So I asked in matrix, but I haven’t got an issue yet. In safari, I pulled up this string prototype dot symbol dot Iterator, and the dot name is the – symbol dot iterator and brackets and that’s fine. Two spring also contains the same thing. Is that currently valid or is your PR – what would be required to make it valid?

RGN: what does it look like right now?

JHD: the . . . function space brackets surrounding symbol dot iterator, parenthesis and the rest of it.

RGN: it looks like this one, but in place here is symbol dot iterator? (“`function [Symbol.iterator]() { [native code] }`”)

JHD: correct

RGN: that is valid right now. And remains valid

JHD: would it be then correct to say that your changes only allow a string literal inside the brackets. That’s the addition?

RGN: it has to deal with this, between the `function` token and the left parenthesis `(`. The current spec allows any property name in the grammar, identifier or computed, but has an extra constraint in the algorithm for a built-in function. The one that would be changing, if we adapted this, is . . . this part. <<Diff: 20.2.3.5 >> So the reason why the bracket symbol dot iterator is valid, not just valid but required, is because that’s what the [[InitialName]] slot of the function holds. So it would not be valid right now to have `function ["[Symbol.iterator]"]`. That would not be valid because [[InitialName]] itself starts with bracket S, not bracket quote. If you take it and drop it in, that’s valid now and remains valid. What is not valid is wrapping it in double quotes to make a string and wrapping that in brackets to make it computed.

JHD: with your change, do the contents of the quote still have to match the initial name slot

RGN: yeah. If we go this way. The – it introduces a NativeFunctionName function, which says, for anything that is a computed property name where the value is a string literal, just evaluate the string and make your checks against the result. So . . . it would treat as equivalent this from XS, where the computed property name is a string containing bracketed contents, with this from JavaScriptCore, where the computed property name is a symbol.

JHD: Thank you. That clarifies it for me.

BT: we have MF in the queue again. 9 minutes left on this top

MF: have you spoken to XS about why they made this implementation

RGN: I have not, and there are issues around it anyway that need to be fixed no matter what. XS was just the discovery point for this particular weirdness.

MF: it would make me more comfortable hearing if we have heard from XS about whether this change was intentional or easy for them to match the spec as-is. I see they see value in choosing the more descriptive name, but I can’t speculate beyond that

RGN: Peter is not with us today, or at least not right now

MF: okay.

RGN: honestly, though, my preferred outcome would be what MM suggested, which is more determinism that nails everything down even further. So I mean, I am willing to have anything that is better specified, but that can be editorial or normative. And if implementations are willing, I am willing to put in the spec work to nail things down either further, rather than going in this direction of more flexibility. But really, I want to know how the committee as a whole, feels about this area and any changes that might be made.

BT: all right. MM..

MM: you said normative or non-normative in term of pinning things down. It really needs to be normative.

RGN: if I said that, I misspoke. There’s an editorial aspect to clean up toString, which I separated out into #2828 and that has not landed yet. But no, I am specifically talking in this discussion, about the normative changes.

MM: okay. So I certainly object to anything that is more permissive than the current spec. And I certainly support a normative spec as deterministic as possible and deterministic, if that’s possible.

RGN: okay. I think we are willing to pursue it regardless. So maybe the question around that now would be, if it’s better to do so as a needs-consensus pull request, or series of pull requests, or instead as a proposal?

MM: I think it needs – my sense; it should be a proposal. It can be – proposals that don’t generate a lot of controversy can go through the process quickly. But I think it should be a proposal.

RNG: ok. With that, I think I would like to take it in that direction. Given that there’s no – no proposal yet for it, but I am willing to do that, you know, essentially immediately, how does the committee feel about giving it stage 1?

MM: I am obviously in favour of that.

BT: Are we sure what the proposal is. Is it what is in this PR

RGN: The proposal will be “reduce flexibility in `Function.prototype.toString`”.

BT: but there isn’t a proposal written up?

RGN: no. Because it’s actually a reverse course from this pull request. Not only not do this, but also, go even harder in the other direction.

BT: okay. If there’s no reason for a rush here, just write a proposal and come back. We can, you know, move fairly quickly through the stages of it.

RGN: okay.

BT: in fact, if you have something that you can put to paper, by the end of the meeting, we may have some additional time.

RGN: yeah. I think – I think I can do that. I will definitely give it a shot. As far as this topic before it’s ready, is there any other feedback?

BT: the queue is empty.

RGN: okay. Well, thanks, then. Expect to hear more on this in the near future

BT: all right. Thank you.

### Conclusion/Decision

- RGN to create a proposal: <https://github.com/tc39/proposal-stricter-function-tostring>

## Well-formatted PDFs for TC39 Standards in 2022 and Beyond

Presenter: Allen Wirfs-Brock (AWB)

- [slides](https://docs.google.com/presentation/d/1eNKAGEoa6WGgg9IEhTBHdHj1jA7aJFPO5PIsYminP3E/edit)

  All right.  Next up, we have Allen.  Allen, welcome back.

AWB: hey. You guys hear me?

BT: yeah. You sound good

AWB: cool. Let’s see if I can . . . figure out here how to make my slides visible. And there it is. Hello, everybody. Most of you probably don’t know me, but I am Allen, and I was the project editor for ES5 and ES6. I’ve been working with IS, the secretary in a bit to look at PDF issues and stuff. I wanted to fill you in, on what I have done. And present to you some things that you need to consider for TC39 is going to do going forward in this area. So let’s get started.

AWB: So Ecma always had a standard for formatting standards as a book. And traditionally standards, of course, were published essentially as books. They are documents on the Ecma’s website, you can go to that in great detail, describe the formatting requirements of these book-like standards. And they, themselves, that description, I believe, is derived from even more detailed standards for what a standard is supposed to look like. And there is a Microsoft word template, a docx file that lays out the matrix for such a format. Up through 2015, the standards were developed exclusively in Microsoft word using that template. They generated nice printed documents. But, you know, by the time ES6 was done, it was pretty clear that most users of the spec were using it on the web and make a much better experience with a presentation of the standard that was really authored to be used on the web. And so you have got what we have today. And it’s a great format for online presentation. And we are authored using the ECmarkup tools. And so people don’t have to learn word and just as importantly, the standard is really now too big to work with Word for some several reasons we discovered.

AWB: But there’s been a problem since then, and how do you turn this into a book? Because there are important constituents of Ecma that have an expectation that important standards are published as nice books. And in particular libraries and archives, national archives and other standards of bodies have an expectation for these book-like standards. And so this has been quite a pain for the Ecma and the secretriat since then. So in . . . in 2016, when we were going to to the new process for authoring the spec – let’s see here. Well, okay. Let me give you an example here. So this an example. So basically, the best that could be done in 2016 was to – okay – load the HTML version into a browser forcing the table of contents to be linearized at the front of the doc instead of in the side – interactive side bar, and then telling the browser to print. And you got this long continuous thing with arbitrary break pages. And various other issues like anything that required horizontal scrolling would get truncated and you ended up with . . . you see something at the front of the document like on the left here . . . when the expectation of these external customers is something on the right. And by the way, this thing on the right is now how it looks, until the work I recently did. So back then . . . okay.

AWB: So back in 2016, Brian, I think, who did a lot of the – this original work in migrating the EC markup and creating it, you know, we talked about this problem of printing. And I remember him saying, he thought that CSS page media support, whatever that was, was a likely solution. But I seem to recall he went off and he talked to some of the browser people at Microsoft, and he came back and said, basically, well, unfortunately, browser don’t support any of this. So while there’s all these great features in theory in CSS, for doing exactly what we want to do, is producing nicely-formatted books, browsers just don’t support them. We just kind of moved ahead and the best we could do, and kind of held off Ecma saying we can’t do any better.

AWB: So actually almost a year ago, I was talking to them he said, can’t we do better? And I looked around a bit more at – at the CSS page media and stuff and I discovered that for me, I discovered that the fact, while browsers can’t handle this, there are a number of nonbrowser renders that do. So . . . you know, you take your HTML and out comes a PDF that is nicely formatted, if you’re HTML has the right imputing and stuff. Most of these are commercial products, some of them are quite expensive, and some of them have – have – you know, quite restrictive licencing. You could only one on CPR with most 4 cores and things like that. And but there are solutions out there, and there are people who use these to create very sophisticated book-like things using CSS and HTML. But more recently, I noticed that there is this one open-source project called “paged.JS’ it’s a polyfill of this media support and it works – it was intended to work primarily in chrome-based browsers. Is itize a polyfill. It’s a polyfill for the CSS constructs that support paged media and it does it in the browser by making the Dong, interpreting the both what the layout – the browser has initially created and then looking at the CSS paged media property that is are in there, and figuring out how big each page will be and creating a bunch of individual containers and flowing it into them. In the browser, you get a paged view of the document, and then you can use this a regular print function of – of a browser, and chrome is smart unlawful that you get nice, paged output with all the footers and – prior to the GA approval of the 2002 standards headers that are described using the CSS paged media constructs . . .

AWB: so that’s what I did. I took the – I took a week investigating this process. What it would take to do this with the 2022 versions of the standard. And what I do, the basic idea was, to . . . start with the output of AC markup. Basically, I started with the – the HTML output, and the CSS file for EC markup. And I started just running it through this paged JS polyfill in a chromium-based browser to see what would happen. And I discovered various things that was in the markup that would cause it to crash, cause paged JS to crash or not render appropriately. And so, you know, I didi an iterative process basically of fixing things, going back, editing the HTML file, running it through the process again. And initially, I did this experimenting with the 2021 education of Ecma 626. And I got far enough with it to say to the – to them that I think we can do this for the – for the new standards. And so . . . we talked about that and I said, okay. Let’s go ahead and do it. And so as soon as GA approved the 2022 editions, I sat down and applied this process to both 262 and 402. And it took me about a week and a half to do the two of them. And they’re now up on the Ecma website as the PDFs.

AWB: There’s a number of things I had to do. To do this, you have to modify the CSS, so it has, you know, has the page metrics or what – the dimensions, and line and page layouts, where the headers and footers are. And the Ecma standard has things like, you know, where the page number is, flips from side to side. And the front side has Roman numerals. So that’s all specified there in the CSS file. And the text is justified. And there’s a number of convenient classes, convenience CSS classes that are created. So you can make it easy at the HTML level to specify if I need a page break or I don’t want a page break here and things like that. So anyway, I did that. It was a bunch of manual work involved. But it didn’t actually take all that long.

AWB: And the real question for you guys, I think, to consider is, I don’t think – I would hope nobody thinks that it would be a good idea to go back to the really bad PDFs being produced before and I am sure the secretriat wouldn’t like that, the standards, the peers would hold their nose again. So I think as a group, or maybe it’s the editors and chairs as a group, but you know, TC39 needs to think about what they want to do going forward. And so I just wanted to layout a couple of options for you guys to think about and talk about and eventually make some decisions on. One of which is, assuming you buy into that CSS page media applied to the – the core HTML documents that are produced by TC39, is the way to proceed? One decision is whether to continue to use paged JS or switch to a commercial project. I suggest stick with paged JS. Some of the commercial products have some more capabilities, arguably they may be more stage in the long run, the commercial projects, paged JS is a pretty young, open-sourced project. And – and they keep work on producing – they definitely have people working on it and they have plans and a road map for their future. But it – you know, whether in the long term, it survives or not, maybe really knowses. For sure –

BT: sorry to interpret, there’s quite a few people in the queue and 4 minutes left in the topic. We have to go through it pretty quick.

AWB: I am almost done. Anyway, so the question is, assuming you’re going to stay with this general approach, how do you want to do it? Do you want to repeat the 2022 process it’s not that hard to do. And I have a document and work to do, to document that process. Something I have noticed that – another one is the simply diff, the HTML level from 2022 to 2023. And so carried forward the 2022 augmented HTML, if you will, that is driving this process, and just applying this. It’s probably less work. And the third one is, trying to automate this process so it’s done easier and detectly from the original EC markup source. And one important consideration I wanted to mention here was that good pagination requires aesthetic decisions and so some human has to look at it, to really, you know, decide that the page breaks are right. At the very least, you need a PDF editor important for that.

AWB: Here is how you might automate the work flow. Currently, the source files, go through the EC markup program, CSS. An option that says, well, generator HTML with some variation specifically that support the page markup and use as the alternative CSS file. Run that through the process – run that through the processing. If you need manual edits, make them at the EC markup level. Add classes that are specific to the PDF presentation. And it won’t effect the web presentation and spit it out. And so that’s basically it. So . . . it’ your decision to make and think about. I can answer any questions anyone else in the 30 seconds remaining or whatever

BT: we have like a minute and a half.

AWB: okay

BT: Let’s go quick. SFC wants to know if you resolved text searching in the PDF

AWB: yes. That was resolved. Don’t use a MAC preview to concatenate

BT: DE is on the queue next.

DE: yes. As we have been discussing in TC39 delegates, I think we previously agreed as a committee to ask the secretariat for a contractor to help with this task. If you’re saying you don’t want to do this task forever, which makes perfect sense, maybe we work on boarding a contractor for this work. I am not sure we have volunteers in TC39 to do this manual work that you talked about

AWB: so I guess two points I want to make: to do a good job, these are aesthetic decisions where understanding the materials are important. For example, where to make sense to break an HTML production or not. So that’s one consideration. And so just a front-end HTML-CSS contractor. I don’t know how well they will do on that. Cumulatively, this is a couple weeks of work for a year. It looks like . . . and so I would think it’s – it would make sense for TC39 to try to find somebody who can commit to that level of work. It’s not – it’s not a lot. It’s not a big job.

DE: yeah. It seems reasonable to look for someone who can do a couple of weeks of work. If we can’t find them, search for a contractor.

BT: we are over our timebox. We do have some –

IS: it’s very, very quick.

BT: we have some spare time, is there any observation to extending this item up to 15 minutes? All right. Let’s go to 11:45 at the latest. Go ahead.

IS: okay. I am from Ecma. So basically, when we started this project we tried to find a “contractor''. And actually, we had close contact with one of the professional companies (PDFreactor) who had a leading professional renderer program. And the company which I have in contact with, which had the best marks also in Allen’s presentation, what it could do; and we worked with them quite a lot because they had quite a large number of professional user companies “on the hook”. PDFreactor, and especially one gentleman in that company was very helpful to us. But unfortunately, we (or better he) was not able to find anybody among their good contacts, and so that was the point, you know, when we – when we went back in the discussion to AWB what to do and how to progress with the project. I mean, AWB was involved in the entire process, of course. And then I told AWB that unfortunately we couldn’t get any “contractor” we have to carry on with the project ourselves. So we tried to get them, with the help of this company, but it was not successful. It doesn’t mean, of course, you know, if somebody else tries to look for it and then they have more luck. And then you find somebody. But we also tried that other avenue and in the end, we came up with the current solution, that we make a “quick and dirty” solution for ES2022 internally, and then we have one more year time to work out a more professional solution for ES2023 and beyond. So this the full story behind it. Thank you.

USA:: next, we have WH

WH: Looking at past ECMAScript PDFs, the older ones such as Edition 5 have a nice sidebar with the entire table of contents as an outline you can click on and go to the section. The newest one doesn’t support that. Do any of these tools support that? What’s required to make it work?

AWB: sorry. Yeah. You’re talking about PDF bookmarks, basically. That is one feature that paged JS doesn’t currently support, which is the generation of PDF bookmarks, which is what is used, the PDF side bar and such. Some of the other commercial packages do. The table of contents, in the PDF, does work. You click on a page and it takes you to that page or whatever. There isn’t a side bar. At least my rationalization for now is that the primary purpose of this document, this PDF isn’t for onscreen viewing because the HTML is vastly superior for that, but it’s for printing books and printed books you don’t have that side bar. So . . . but that could go into the decision of what to use for the . . . for the renderer.

WH: One of the critical uses is archiving. PDFs are self-contained. With HTML, you never know when you got the whole bundle or have some missing resources.

AWB: right.

USA: okay. Next up, we have Michael

MF: hi. Can you give us an idea of what portion of the – what changes you have done or changes to the kind of like infrastructural parts and what portion of the changes were changes to like content parts. Because the infrastructural starts, I would like to ingrate into Ecma, so you don’t have to repeat year after year

AWB: it’s almost all structural changes. Some of the customs like ECU grammar would break sometimes. It just – paged JS has a hard time with custom elements. And so the solution to that is to turn them into DIVs. And that’s one of the things, if we had this alternative paths with PDF output option is turn those into DIVs. In terms of the actual content, the only content change I had to make was, there was some wide tables relating to modules in the Ecma 262. There’s no way they would fit on the page. If I pivot them, switch the columns and the row, they would fit nicely on page. And I would recommend that in the master document because that presentation is just as nice as one that is currently there. The only other content-like change I had to do was, I manually – I semi-manually created the table of contents. And again, I think that’s something that could be done within EC markup.

MF: okay. I am looking forward to seeing your writeup, then.

AWB: yeah. Thank you

USA: next we have Shane.

SFC: yeah. Thank you for your work on this. I think that we would all agree that, you know, in the long term, it would be good to have be an automated process. And in terms of the ways to get to that, I think that it would be helpful for us to establish a list of requirements that we want out of the generated PDFs to evaluate one of the other solutions for that. And then hopefully, we can get to a point where we run this as a GitHub action, the PDF is generated. Then you download it off the GitHub actions. We already do that for documentation and for the HTML version of the perspective. Why not for the PDF version of the perspective? I think that, you know, these are the kinds of problems that we should be able to solve. You know, and . . . yeah. I just wanted to start that conversation. That’s all. Thank you.

AWB: yeah. I understand. Yeah. I agree. I think that’s the ideal forum, is that edits are done in terms of the EC markup level and runs through the process. The one caveat I throw it, you don’t have to do this on a weekly or daily or . . . but before final publication, a human is going to have to take some time and go through the documents and say, hey. Now that’s a bad place to do a page break. Let’s tweak the class annotations here and get a better page break.

SFC: rather than having like a contractor to do this every year, manually, it would be better to have a contractor automate the process once and we don’t have to have a contractor anymore because, then, you know, we just – you know, because the PDFs are always generated in the exact same way every time and if there’s a page break in a weird place, that’s one, small change to make upstream in the EC markup and that problem is fixed. But we don’t need to have, like, a high-skill contractor for that

AWB: yeah. I just – I would say I suspect most of the work in automated this is actually in the EC markup HTML generator. I don’t know if that is something you want to stick – a contractor or not. I don’t know which of you guys currently maintain, you know, that – that tool chain.

DE: so to maybe draw a conclusion to this discussion for next steps. In the chat, there’s an interest in the editors in looking into this process and seeing if it can be made work well enough without too much work going forward. And if there’s more support needed, you know, MF did an extensive search for type setters, finding 4 different for quotes. Not for a software licence, but for a human. If we find that after a decent amount of looking into improving automation this we need significant human work, then we will probably be coming back to the secretriat asking for this professional support, unless somebody on committee can do this. This has been presented before and no volunteers, but maybe that will change. Does that capture a conclusion for this topic?

BT?: Sounds right to me.

AWB: okay. Let me end by saying, as you guys think about and you want to drill in it more, I am available to talk to people, and . . . and, you know, tell you a bit more about my experience as you get into it. So . . . so thanks.

BT: thank you. AWB, for this excellent work.

### Conclusion/Decision

- AWB will need to document work done to produce the PDF
- Editors will look into automating the procedure as much as possible
- Failing that DE wants to ask ECMA to contract someone to make the PDF

## Shebang Grammar

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-hashbang)

JHD: all righty. Hi, everyone. We have had this proposal for hash bang comments for a while. It was championd by BFS who is no longer in the committee. Stage 3 shipping and chrome, firefox and chakra core and node JS and safari and XS. I will update this before this is archived. My hope is that something that stage 3 in the shipping virtually everywhere and has an open perspective PR approved by an editor is acceptable for stage 4. So any observations to stage 4? Or consensus for stage 4?

BT: let’s give folks a couple of seconds

JHD: Of course

BT: In the room, we have thumb’s up.

BT: The queue remains empty. I think we have stage 4 consensus.

BT: awesome. Congratulations, BFS.

### Conclusion/Decision

- Consensus for stage 4

## Intl Fallback Symbol

Presenter: Jordan Harband (JHD)

JHD: all right. Is that on? All righty. Okay. So there is a symbol inside the Ecma 402 spec called the fall back symbol. This is the – the way you get it, this is my code from the package that gets it. Call into format like this. And then you get the symbols off the object, and you look for the one that has the appropriate description, depending on which browser you’re in. This one is the [inaudible] so the symbol in the specification is a same realm symbol. A standard unique symbol. Symbol parenthesis and to fall back string? As the description. However, V8, I believe, implements it’s a well known symbol. In other words, the same value across different realms. The choices – so there’s a deviation between some implications and the spec. Other implications, all implemented as same-realm symbol. So technically, we don’t have to do anything. We could make sure the test 262 tests are up to date and V8 will decide if or when to make their implication match the specification. But it seemed a good idea to get affirmative, to reaffirm consensus of that’s what we want. I don’t have any strong opinion whether it’s same or cross-realm. There are kind of – I believe there are arguments in favour of either course or against either course. There are tradeoffs no matter which way you go. One of the important reasons to answer the question is that there are – is another proposal later in the agenda to answer if something is a well-known symbol or not, so this is an open question that I would want resolved. There’s the issue that – if it’s a well known symbol, there is cross-realm instrickensic, which complicates things for the lockdown environments. So, yeah. I am sure there are folks on the queue to add context to those sorts of concerns. But my hope is that we end this agenda topic with either yes, it is same realm and we will make sure test matches that or no, change to be cross-realm and then we can discuss it.

BT: Shane.

SFC: yes. So I – thanks for bringing this to my attention yesterday during lunch. I am reviewing the specification for this symbol. My understanding is the symbol is used as a way to – for users to detect when fallback has occurred or not, by comparing the results of an operation to this symbol. So it seems to make sense that the intent is basically – it could be a comparison to a string literal. But it uses symbols, so you compare to a symbol, I think it’s odd – I think it would be the expected behaviour to essentially have it be a well known symbol because that’s the expectation of a string. Because if you compare a string to a string, it’s fine. If it cross-realm, they have the same comparison. Having the symbol also be cross-realm makes the most sense intuitively for the use case. I see there’s some more agenda items in the queue. Why don’t we go through those first

BT: Dan on this topic?

DE: yeah. To explain the rationale for Intl.FallbackSymfinebol. It’s completely a hack. Ecma402 was designed – Allen, if you’re on the call, can confirm because he was there and I wasn’t . . . or some other people here. When it came out, before ES6 classes were fully defined and it was attempted to be consistent with what we thought classes were going to be. Including what we thought calling a constructor would do. That turned out to not be the case. There were some late changes, making sure the internal slots were available rather than adding internal slots later. Which were good changes. But it meant that some of Ecma 402 semantics made it to initiallyize an existing object as an Intl object. When ES6 came out, there was an attempt to say, we don’t need this anymore. We can use them as, you know, make them be what classes ended up finally. And Rick is raising his hand.

RW: yeah. I want to confirm your story because I was actually the one that did all this work you’re describing and you’re 100% correct.

DE: Okay. I did the worse part, trying to implement and ship this or working with Caitlin potter, I think she was the one that implemented it in V8. It wasn’t web compatible because this were libraries using this older pattern for caching. It wasn’t introduced to detect anything in particular. It’s the mechanism. We have symbol, but didn’t add internal slots. We didn’t want to go back to that.

RW: I’m sorry. You had to do that.

DE: it’s okay. I liked the – the effort.

BT: we have MM on the queue next.

MM: there a distinction that seems to be missing from the discussion, which is, well known symbol, and often seems to be taken into the discussion to be synonymous with cross-realm symbol. Registered symbols are cross-realm. It was a mistake that we made that well known symbols were not registered. To have – there’s basically 3 categories of symbol. And there should have been 2. There’s registered symbols, which are cross-realm. Well known symbols, not registered, still cross-realm. And non-registered sim bottoms, which are not is well known and per realm. If we want something to be – if we want to introduce a new cross-realm symbol for some reason, I think any – any new one that we add beyond what is already in the mistaken category of well known symbol should be added as a registered symbol. And the conflict any work that assumes that can discover all of the well known symbols by looking at the – the string named property – string named symbol valued of the constructor, I have written codes several times because I have needed it, I suspect many other people have. So even if I reform all the code that I have written, I think many things out there in the ecosystem that will break that may not be detected for a long time because of the assumption because if it’s – if it’s not registered and cross-realm, then it’s on the symbol constructor. So I just want everyone to keep in mind that there is this third category, with regard to the fall back symbol. I don’t care whether it stays per realm or whether it becomes a registered symbol or whether it becomes simply a string. But I certainly do not want it to become a new well known symbol.

BT: thank you, MM. A lot of discussion on the queue and we have 7 minutes left. Dan is next.

DE: so I think being per realm just makes sense for simplicity, I don’t want to get into the issues that mark raised. I think when it was implemented initially, it was in V8 per realm, it might have been part of the conversion, C + + where it happened to be cross-realm. And yeah. I think it would – if V8 finds it high priority to fix, then it seems okay. But I couldn’t make that case for them either.

BT: frank has a discussion.

FYT: yeah. I have the current container for that part of the V8. Whatever we decide, I will try to implement, in V8, as long as we have good enough unit tasks . . . don’t worry about that part. This is some part we didn’t somehow pay attention to in the past. Apologies for that

BT: all right. Thank you, frank. SFC is next.

SFC: yeah. I have two agenda items. The first is, thank you, DE for your explanation. I noticed in the specification that the fall back symbol is only set in sections that are labeled normative optional. So it’s fairly clear that this symbol is, like – if not deprecated, then legacy. So I think the option that is – I don’t exactly know the implications side, but whichever is least intrusive is the definitely the one we should do. Let’s see. No responses to that, I will go to the next agenda item. I know, for example, RGN has been working on the pull request to clarify what types of things Ecma 402 is able to specify. If registering a new symbol is in the area of things that Ecma 402 was allowed to specify. If 262 has a list of registered symbols, is Ecma allowed to add to that list? Is that legal to do? Or is that not compatible for 262 implementation is 402 adds more symbol

JHD: from a spec perspective point of view, we don’t have anything that – like, it would be correct for 402, to patch the wellknown symbols table in order to make a well known symbol editorially. There isn’t yet that cares about in the table, but there might be based on current proposals, whether they are allowed to do it or not, I think with consensus, they would be. Whether we would want to give that consensus is obviously a different discussion. And then, yeah. Sorry. I will let MM answer.

MM: so the – I think the question steps right into this ambiguity, which is the question that you stated was, allowed to register new symbols, which makes me think about registering symbols, but the question is, as I stated verbally, was about well known symbols. I would certainly say that – I would certainly say that creating any well known symbols is something that I would like to resist and that should not be done lightly. It should be brough to the attention of the committee as something to examine whether there’s a good case for a well known symbol. With regard to creating new registered symbols, I would – obviously, it’s still a thing that needs consensus and should be examined, but I would be very relaxed about registering new symbols. I wouldn’t have a problem with that.

BT: all right. Thank you with that. One more item in the queue, which is Ashley.

ACE: so . . . my understanding – when I first saw symbols, my understanding is the great thing about them is they are guaranteed impossibility to clash with anything on the web. You get web capability for for free. My concern and maybe it’s not a real concern and in actually a pragmatic would remind, if we started using register symbols for things in general, fall back symbol is an exception, is that we, then, go back to having web compatibility issues. You take a random example like the double ended iterators. People go, and start using this, you know, symbol dot fall double ended iterator. But then it doesn’t conform to what the proposal ends up being in stage 4. And yes, . It feels a shame we could lose that guaranteed web compatibility things of well known symbols not being registered.

MM: I think that’s a good point. I think it’s – I think that it certainly a true, in theory, as you stated, I am not sure it is realistically. The flip side of it is that introducing new well known symbols, where there’s a shared cross-realm identity that is not discoverible is something that has some very severe problems. So these two – so I think we now have the pros and cons for both sides of this dilemma. And, therefore, each case should be talked about. It’s always the case as mentioned with the fall back symbol, a registered symbol and just using a string, logically, are not much different from each other. So any time it might be a registered symbol, we should also put on the table, as a possibility, should it just be a string?

BT: all right. SFC . . . we are slightly over, SFC. If you can talk in less than 30 seconds or so

SFC: yeah. My comment is, I don’t know if it was clear what the web reality is here, but I think we should just do what the web reality is. It doesn’t seem like something spending a lot of time on.

JHD: right. I mean, web reality in terms of number of implementations would be it’s the same realm, unique symbol or or pro realm unique symbol. Which is what the spec currently says. We can go for that, unless someone has a desire for change. And I am not hearing that. Cool. Thank you

SFC: Does that mean we are keeping as single realm

JHD: Conclusion is that we are keeping it as a per-realm unique symbol, like in the spec, and to ensure that test262 tests correctly reflect that.

### Conclusion/Decision

- Keeping current spec. Of per-realm.

## Remove Order Check in NumberFormat v3 and ECMA402 DateTimeFormat

Presenter: Frank Yung-Fong Tang (FYT)

- [PR701](https://github.com/tc39/ecma402/pull/701)
- [PR100](https://github.com/tc39/proposal-intl-numberformat-v3/pull/100)
- [slides](https://docs.google.com/presentation/d/1UUvbf3FFu9PGtrPAKPdMad9DZuVFLIvkAsAxyJZyvxM/edit)

FYT: hi everyone. I'm so sorry. I'm too lazy to drive to San Francisco. I’m FYTI work on the V8's internationalization team, with SYG and SFC. And today, I want to talk about issued and mainly I put here because the number format is in stage 3. But you also do address this, you should have another half. Have the touch actually is an ecma402 date-time format. So we found that that to thing probably would need to talk together, so why put it in together the thing? Because it's stage 3 already and SFC will to talk to you about other issue, about the V3 proposal. and number format. But the thing I think we should, we believe we should put together in talk one thing together.

FYT: So what is the issue? The issue is they're currently in the Intl data format and the newly for an Intl number format V3, which is modeled after the date format, have the form that range method or formatRange two parts for different kind of output, which - that method takes two argument and supposedly to format a range of either type. I ordered a range of number in particular for the number format, be three. The number could be also represented by stringFormat and what happened right now is whenever we did originally did the date-time Format thing. We have a range check to say well if the first argument is larger than second one, they throw that range error. And at that time, we think probably. That's right thing to do and whenever we try to apply for number formatter and we figured out there are certain thing. It didn't really make much sense and we in particular I think with their soyuz case with thing will be blocked by this kind of constraint. So the status quo is that how if the x is greater than y, we will throw rangeerror. and we are proposing for both in the number Three. And also, I can afford to problem with the 402 pr normative, of course, to change it to no rain through and just return a string with the formatted value. And so, so basically there's a request to change that.

FYT: The scope is listed Here, I list here. I have a troop, ER, diagram, take a look Look, PR 100 for that and PR 71 for that. So, it will impact five different functions, but all for the same reason of the rain, check there are two main motivation for that: one accession 14. Essential one and another one for efficiency. The main motivation is really find some real life use case that we really need to format in a way that the first one is actually larger than the second one. In particular, if that value are present not in a linear domain, but in a cycle, domain, for example, day and time. And you think about that, right? So, you may think February is smaller than december, but a February of next year is actually not, not, right? So, the thing may go and circle or you know, you have a degree in the end goal, you know, 359 degree, have a larger value than 1 degree, but actually in another way you can think about is as smaller one, you may want to format it before before that. so that that is an interesting issue

FYT: the second in the motivation tried to remove unnecessary order check, which is causing implementation burden for the future implementation because we have this number format string, they can take invalid in the train for in order to do this range check of a compared to value. We actually spend a lot of time to cast there for V8, I think, other and remedy to have them we have quite a big chunk of code. So there's the second motivation is that we can agree. This is a should be down for another reason. It will be a very good thing. Also to remove those requirement that we can trim down the Unnecessary code to do this kind of change. Check.

FYT: So to illustrate a real-life use case was showing you here a the street sign in San Jose City there are places as you see those signs they say no parking from 6 p.m. to 8:00 a.m. which is very different than from 8 a.m. to 6 p.m. And also another example on the website formatting in the website, it says no parking, 10 p.m. to 6, a.m. I from a larger value of the clock. I mean, the our to a small value of our and so they're real usage, another example. that place has a display the physical year for various organizations, or government, bonds, about government entity books, our US federal government, they are physical year for October 1st, a larger quantity to September 30. Of course, is implied next year, not the same year, we go, only, look at that. That actually is from a larger value towards smaller value, right? Is a very different meaning from September 30 to October 1st, which is only two days. So they actually communicate different thing whenever a particular value using a cycle domain, instead of a linear domain.

FYT: So here's another example, you know, this is more than a red sometimes have Direction but we are not going to talk about the rationale there. My point is that those values: anything revolved with this domain, it wouldn't they have the chance, you have to say something from a larger to smaller, and they're different. And can have different semantics, it will swap the order they're different thing. So, because of that, we believe there's a strong use case actually multiple strong use case that this kind of formating restrictions should be removed. So we propose to change for numberformat v3 in here which currently in state Require a normative change to that proposal. And this is a change, right? So basically there's a one function after operation and this part should be removed. In particular this part of code, actually when I've implemented V8 I'd I'd probably spend at least 10 day to write those Code because there will involving parsing the string and a lot of comparisons. mainly because your comparison can involve an infinite number of digits and an exponent, right? So it's become pretty complicated. So we removed that. Just I, you will be actually, it's not choose that being the side benefit will also remove certain requirement for interpretation. Well, we're be both whatever increment in there, right? remove that gets trimmed to size and of a future limitation or will be easier for then.

FYT: There's another one, which is 1 line change, this is a for the plural formatt. We also should remove that. So that is our for the number of v3. But in order also, so change your for date-time format, we also need to make a one-line change to the current Ecma 402 proposal to just cross out the one line to do the check, and that will do it.

FYT: So, That is the thing we discussed. So here I'm just show are my case of proposing this and we're opening a question. And after discussion, I will request of TC39 consensus for those two PRs

RPR: The queue just has +1 ones on it at the moment.

USA: Yeah, I want to say a bit but FYT’s excellent presentation made all the points I wanted to make anyway, thank you. I think this is one thing to point out. Okay so one great thing that this demonstrates is that we did the perfect process here. Where we initially released something with a restricted feature set just based on the use cases that we had in mind. then we came up with more use cases, compelling use cases, for increasing the scope and then we did it. I'm really glad with how this turned out, and we had a really positive discussion about this in the emca402 meeting as well. So yeah, strong support for this. Thank you Frank.

FYT: I forgot. Sorry, I need to mention one thing we just discovered yesterday, a little caveat. So this questions not related to format but to plural range. Mark Davis, who is a author of at UTS35 CLDR mentioned in the and a double check with NSC currently specify that you UTS35, they specify the data they the data they collected or did plural rannge category were other assumption that the first one is smaller than the second one, although, it's not clear if there is there any Locale which will have a different value if the values are swapped. And so we may have an issue theoretically, you know, with the 6,000 language in the world that beside a plus we we Act We use that the out of 5,000, maybe one day while five on the jungle, have some issue with that. But so far we are not aware of any language having that issue, and Mark and I are working on that to somehow communicate with CLDR. Maybe somehow make sure that you UTS35 to provide some way to, to address that in the data collection part. We do not believe there's a real life issue so far, but theoretically we want to bullet proof the spec and data collection process so they will if that such thing happened, we'll be able to implement that in CLDR collection and also see you so far. I think they believe we believe there it is a matter with a least 100 or So CR locales in ICU, or maybe more than 100, but theoretically, it is possible, but we'll work that part.

USA: I had a clarifying question regarding that. It's quite obvious. how removing this constraint on format range improves things and allows us to do more things. I am curious, from a locale point of view, does directionality change the result of select range, or is the idea just to To allow people to not worry about the correct order.

FYT: So, to respond to that. So the issue is the current spec in UTS35 says the data collections was under the assumption that first one is smaller than that one. the older data got Collide in is based on assumption. It doesn't mean that a solvent shouldn't have to hold for the other case, but it is possible, theoretically things in some languages, The order may have impact. We do not know any language which has that impact, but that's why I say that the text in UTS35 is very strict, internal of the Assumption and I think, MM, just say he should need to dig into it and maybe either change that assumption or maybe provide a healthy way to collect data or flag the issue.

USA: If this assumption doesn't hold in some Locale. There are currently no known issue but theoretically possible.

USA: So maybe some future locale might have that distinction. Okay

FYT: Okay, Yeah. And you know, is one thing about theory is not our thing about practice, right, there's 6,000 language. We currently only have data for like, maybe 200-300 languages that linguists have had time to dig into. And it may not be relevant next, 50 years for 4,000 of them anyway,

DE: Yeah, it seems good. I think the check was earlier, just sort of a quick error check and the use cases included here seem great. So I'm in favor of the change.

DLM: And the same for SpiderMonkey Team, I think FYT made a very convincing argument for making this change and we support it.

SFC: Yeah, I just wanted to highlight the procedure that we're proposing going through here which is we have both a stage three proposal and the ecmascript specification, which both need to be changed in order for this change to happen. Because one thing that the TG2 felt was that we didn't want the number formatter and the date-time formatter to have different behavior on format range. So part of our discussion at the TG2 meeting earlier this month was to basically go make this this presentation where we're basically proposing two things, at the same time, both a normative pull request against ecma402 and a normative, PR against the stage 3 proposal, at the same time. So I just wanted to highlight that and if anyone has concerns about that procedure or has suggestions about how that procedure could be done better, this would be the time to raise those. Otherwise, this is what we're proposing to do moving forward.

RPR: Is any more discussion needed? `<silence>` So Frank, would you like to ask for a consensus for these?

FYT: Yes, I'd like to ask for consensus for these two PRs.

RPR: Hey, any objections to these two PRS. [silence] I'm not hearing any objections, and we've had some support earlier, So, congratulations, Frank, SFC, you have consensus.

### Conclusion/Decision

- Consensus for both PRs

## Temporal Update

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](http://ptomato.name/talks/tc39-2022-07/)

PFC: (Slide 1) This is another presentation about Temporal. As mentioned in the title. It's going to be an update of what's happened, and a request for consensus on some normative PRs, all of which are fairly minor edge cases. (Slide 2) It's only been a month and a half since last time. We have been continuing to adjust the proposal based on implementer feedback and bug reports. The fixes that you'll see passing here are getting more and more obscure as implementers dive down into deeper and deeper edge cases. One change since last time is that the SpiderMonkey implementation has advanced and we got loads and loads of bug reports from André Bargull. Thank you very much for reporting all these things, and in many cases proposing fixes to the proposal as well. But for that reason, we have a bit more to present than last time.

PFC: (Slide 3) Plans for the future, as engines continue to implement the proposal we will continue turning their feedback presentations like this as bandwidth allows. For each thing it takes some time to prepare an update to the proposal and also to make sure that there are test262 tests for each thing that we ask engines to change.

PFC: (Slide 4) For the future there are three major pieces of implementer feedback that we still need to address that are not just edge cases. There are descriptions here and issue numbers, so you can take a look at those on the proposal repo there. There's one for an optimization of the case of built-in calendars that Yusuke Suzuki from JavaScriptCore suggested that would involve freezing some objects ([issue #1808](https://github.com/tc39/proposal-temporal/issues/1808)). There's one for better integration of the calendar and time zone objects into Ecma 402 ([issue #2005](https://github.com/tc39/proposal-temporal/issues/2005)). And there's one suggested by FYT from the V8 team that we haven't yet followed up on, which is investigating removing the calendar slot from PlainTime ([issue #1588](https://github.com/tc39/proposal-temporal/issues/1588)). So those things we hope to address in the following plenary. And of course, more edge cases as they come up from implementers.

PFC: (Slide 5) Also, giving an update on the process of standardizing the time zone and calendar annotations in the string format. To recap, what we already have, is a draft standard that’s being discussed in the IETF. There is an IETF meeting coming up in 5 days which USA is attending, and driving this process. There's an issue open in Temporal to implement conclusions. It seems like there is still one discussion open but it seems that we'll be able to reach a conclusion in the upcoming IETF meeting. After that hopefully the IETF standard will become a published draft, at which point we would have met our requirements to ship Temporal unflagged should implementations be ready for that.

PFC: (Slide 6) I'll continue with the description of the adjustments that we want to make to the proposal; the normative PRs. (Slide 7) Here's the first one, we have a PR ([#2245](https://github.com/tc39/proposal-temporal/pull/2245)) for more consistency in copying object properties. We want all the steps that copy properties from one object to another to use the CopyDataProperties abstract operation. This is for consistency with the rest of the spec. So this is a normative change because it changes the order of operations observably, unfortunately. But otherwise, it doesn't really have a practical effect on how people are going to use Temporal.

PFC: (Slide 8) Next, we have better validation of calendar and time zone values, it is actually several PRs that are all kind of the same topic. As you might be aware, we have user-defined calendars and time zones as part of the proposal and these are protocols that provide certain methods which JavaScript calls internally. And so if you have a user defined one, it could return all sorts of nonsense from one of these methods. In most cases if there's obvious nonsense being returned we throw, but André picked out a few more cases that we should throw on. So that's what these three pull requests are about.

PFC: (Slide 9) Next we have a pull request ([#2262](https://github.com/tc39/proposal-temporal/pull/2262)) to align the rounding modes that we support in Temporal with the Intl.NumberFormat V3 proposal. When Temporal got to stage 3, the NumberFormat proposal hadn't yet decided which rounding modes to include and we tentatively chose four, with the understanding that we would make sure that the available rounding modes would align with the rounding modes provided by NumberFormat later. The four we picked correspond to the four `Math` methods to do rounding: `ceil()`, `floor()`, `trunc()`, and `round()`. Although "round" was called `halfExpand`, because that was the term that NumberFormat chose for the option value. NumberFormat is now in a later stage and it definitively includes five more rounding modes, so we feel those should be supported in Temporal as well.

PFC: (Slide 10) Now, we get into a real edge case. We want to put a limitation on the the 4th constructor argument for PlainMonthDay that we expect nobody will ever use unless they're implementing their own calendar. So this is kind of an esoteric use case but in any case we don't want people to be able to provide years that are outside of the representable range of Temporal dates.

PFC: (Slide 11) Another one, PR [#2267](https://github.com/tc39/proposal-temporal/pull/2267), we want to avoid repeated observable Get operations on the same property. This doesn't really change how Temporal works unless you are observing the property Get operations on your calendar object. So this is technically a normative change, but it doesn't change much, just a small optimization.

PFC: (Slide 12) In the same vein, PR [#2269](https://github.com/tc39/proposal-temporal/pull/2269), we want to avoid an unnecessary call to a `toString()` method where if you have a Temporal.ZonedDateTime object, you want to convert it to the string. But you use an option which means that you don't want to include the calendar name annotation, then there is no need to call `toString()` on the calendar object. So, we can avoid doing that.

PFC: (Slide 13) Next up, there are three pull requests ([#2284](https://github.com/tc39/proposal-temporal/pull/2284), [#2287](https://github.com/tc39/proposal-temporal/pull/2287), [#2345](https://github.com/tc39/proposal-temporal/pull/2345)) to clarify or fix edge cases in the grammar of ISO 8601 strings. A couple of places where we need to disambiguate things. In, I think it was in June or April, I can't remember which one, I had a another PR that did a bunch of disambiguation on PlainYearMonth versus PlainTime strings and these are a couple of stragglers left over from that. We also have one to accept a calendar annotation, in a string, that's being parsed as a Temporal.Instant, which previously was not accepted, but for consistency with the rest of the proposal should be accepted and ignored. Basically all the other ones are stragglers or mistakes in the grammar, disambiguation time strings from year-month strings.

PFC: (Slide 14) All right, the next one after that, (PR [#2292](https://github.com/tc39/proposal-temporal/pull/2292)) is a new thing that was pointed out by André from SpiderMonkey. There are some legacy names in the time zone database which — according to the description of what time zone names should be supported in Ecma 402 — ought to be supported but they were not allowed by the grammar for ISO 8601 strings. So we added these to the grammar. This makes things more consistent.

PFC: (Slide 15) We have a PR [#2297](https://github.com/tc39/proposal-temporal/pull/2297) for changing the order of observable operations when we are validating numbers, that are passed as the values of properties in options bags that want to accept integers. So this makes Temporal more consistent with how, for example, the integer argument in `Number.prototype.toFixed()` works. But this is something that's consistently different between Ecma 262 and Ecma 402, as RGN pointed out. So there is a discussion, open in Ecma 402, which proposes aligning the order of validation there with the order of validation that we have in 262. So hopefully there'll be an update that brings the two specifications into alignment. But for now, we'd like Temporal to align with 262.

PFC: (Slide 16) Following on, in the total method of Temporal.Duration, we want to handle the case where the answer that you would get is infinite. Durations are not allowed to have infinities in their components, you can't have a duration with infinity microseconds, for example, however, you can calculate a total and the result can be infinite. So for example, in the code samples that I put here, we have a duration of `Number.MAX_VALUE` microseconds, and we want to figure out what the total is in nanoseconds. The answer is infinity. We want to make the `total()` method consistent with what you would get if you calculated it manually by multiplying the number of microseconds by 1000. The `round()` method is not changed, because it returns a Temporal.Duration which is not allowed to have Infinities, so that would continue to throw an exception, but `total()` here would return the value infinity.

PFC: (Slide 17) One more, (PR [#2316](https://github.com/tc39/proposal-temporal/pull/2316)). This might even be the most obscure edge case that we have for consensus in this presentation. So the Calendar `fields()` method. It's optional if you're implementing a calendar. If you don't implement it, then it'll just do a default identity transformation on the input to that method. The output of that method is iterated over, but if we don't call the method, we don't need to iterate. So this is basically removing an unnecessary property access, we avoid calling the `Symbol.Iterator` method of `Array.prototype` if the calendar doesn't implement the fields method. Is this going to come up in practice? Probably not. But anyway.

PFC: (Slide 18) We had a mistake in the duration balancing algorithm, that would result in durations being balanced relative to the wrong date so that we want to correct that mistake. It's a normative change because it causes a different output.

PFC: (Slide 19) And then finally - this PR needs more discussion, so I'm skipping that one.

PFC: (Slide 20) And then finally, we have a normative change for time zone transitions at the extreme of the range of exact times that JavaScript supports. So, you have some time zone transitions that are based on rules that, until further notice, continue indefinitely into future. So, for example, tme zones that have regular time changes for daylight saving time, there are rules that, for example, change on the last Sunday in April, or last Sunday in October, until further notice. Maybe until those laws are repealed, for example. Technically, the transitions ought to continue into the year 275760, which is the maximum year that we support for exact times. If you have a time zone and you ask for the next time zone transition, when you're already, at the end of the representable range, we don't want it to throw a RangeError because that means that you have to have error checking code around your call to `getNextTransition()` just for this weird case. Instead, it should return `null`, which is the documented return value for if there is no further transition, and anyway, in the year, 275,000 we will probably not still have time zone transitions anyway. This is consistent with what we do for getting the current exact time if the system clock is set to a value that's past the end of the range. We clamp it to the end of the range instead of throwing, because we also don't want `Temporal.Now.instant()` to have to be checked for errors. So this is a small consistency fix for something that again likely won't come up in practice.

PFC: (Slide 21) That's the extent of the normative PRs that I wanted to present. I'd like to ask if there are any questions and after I answer them, I'd like to request consensus on the normative changes that I just presented.

RPR: At the moment there's no one on the queue. Makes it seem like the whole committee agrees with you, but let's find any questions or any comments.

DE: I support this moving forward. I think we can agree on these changes. It's great that you're continuing to do diligent work. Were you saying that you expect the final changes and unflaggability or shippability to be in the next meeting?

PFC: Unflaggability depends on the outcome of the IETF meeting, which is in five days. I don't know that implementations would want to unflag Temporal until the implementation was complete. That's up to the implementations. But I don't think we would need to wait for the next meeting to have the unflaggability, if we meet the conditions that we set out in the stage 3 meeting. As for the final normative changes, implementation is still going on. So of course it depends on what other things are raised by implementers between now and then. I've thought several times that the next meeting might be the last slate of normative changes, and I've been wrong. So I don't know how much I want to promise about that. But I do know that implementations are continuing and at a certain point they'll be finished and there will be agreement between the implementations on all of these things. And you know, it's getting done.

RGN: +1 for normative changes

ACE: +1, so much great work

RKG: Ross says, thanks for all of your continued efforts.

DLM: +1 to adopt the changes.

FYT: So first, I thank all the champions to address a lot that you should I erase and I'm currently implementing it in V8. I think there are still a lot of issues. How to address in particular, I think there's an issue about the precision in Duration, in Temporal some parts of that are a little bit unclear: in particular when they have a balanced duration and the requirement for each the abstract operations, but it's getting closer. On the V8 side we are trying to land - this is a huge implementation, but we're almost landing at least a rough shape of the functionality without internationalisation to report yet. There are all well, need to have something I think working with (?) and someone needs to address the eraYear and era and (?). The other issue is that in particular, I think we do need some spec clarification of the week of year. That is, it's currently blocking me from getting the review because that particular method is just too big and my reviewers just refuse to look at it.

PFC: Okay. The week of year, that's on my radar. I'm expecting that it doesn't need to be a normative change because we can just provide a reference to somewhere else where it is specified. And the precision issue, I think we need to find out if that all that needs is a clarification in the spec, in which case, it wouldn't be a normative change, that we need to present or if we need to change something. Thanks for mentioning those. Those are both on the road map.

FYT: I think my key point is just thinking I want to bring the reality to the rest of TC39. The champions did great work. I think the implementations are getting closer and closer but there are still a lot of things that kind of helped to shape out all the detail. I think André probably shared some of the same issues. I mean, I basically wrote every single line of the implementation in V8 myself. And there are issues, which is still very confusing but those are probably will be in, doesn't mean you to be clarified by the spec It just the organization wise and there's a lot of changing from the ground up, but the points that I think all the information really try very hard to meet that, but it's still a lot of work, at least in implementation. So you probably will see some requests for us to address. Of the car at cases. Yeah, but great work. We really, really appreciate your work.

RKG: Yeah. I don't think that's really a negative point, the back and forth between implementations and spec has been very good and fruitful and active.

PFC: Yeah, I do expect there will be more but yeah, I think it's approaching something, let's put it that way.

FYT: Definitely agree with that.

API: The slide that you had about the are returning null if there's no more transition, it just got me thinking that I remember internally we had to extend the number of transitions generated in our time zone data because we regularly encounter dates and times 100 years in the future. And I remember the time zone data had a limit on the number of transitions that they were generating. So it's just a comment that like browsers and implementations might have to decide at some point. What if they want to increase that default and what what should the web really provide?

PFC: Hmm, I did not know that the time zone database had a limit on that. Because the rules file in the time zone database doesn't. So does that mean that when they when they compile it to the binary time zone data that they only take a certain number of years into account?

API: Correct. I think they changed the default, I'd have to look up exactly but off the top of my head I believe it went to like 2049 or something like that. That was the last transition in the binary file. And so we had to generate more because we needed more. This will be an observable difference between browsers, using files with different numbers of transitions. But also, is that default that tzdb came up with acceptable for the web? Because otherwise anybody trying to compute something that far in the future will get back back null and will have to work around it.

PFC: This is new to me that it's limited in the binary files. Would you mind opening an issue on the proposal for that? Because I think it's something that we will need to take into account.

API: Yeah, I'll dig up the information and open one.

PFC: Okay, thanks very much.

FYT: I just want to add to that. In the recent TZDB update, there's a issue, probably is something to talk about. Normally, time zones, in the future if daylight saving time ends, they stay permanently on normal time. It could happen that time zones stay permanently on DST, without a transition back to normal time. That may come to US, Marco Rubio already passed the bill in the Senate. So if house passed it by then signed it it will be the case for US too, but I'm not sure that really impact employment patients (?). They have some nice (?), they need to have somebody really do that. So this, it could break a lot of assumptions people have about daylight savings. They always think they're back and forth but they are or back to the normal but they are case already easily be that the end up in the definite future and updating I same time similar. Or to Marco Rubio proposed in the US.

PFC: Yeah, I think we're covered for that because in Temporal, we don't make a distinction between what is normal time and what is daylight saving time. It's just a UTC offset. so, I think this will be covered by the language that implementations use best effort up-to-date information from the time zone database.

FYT: Agreed.

RPR: The end of the queue.

PFC: Thank you. Are there any objections to approving these PRs that I presented?

RPR: This is a request for consensus. A lot of strong support earlier on, and no objections I can see. You have consensus.

PFC: Thank you, I'm done and it's within the time box. Thank you very much, everybody.

### Conclusion/Decision

Consensus on the following normative changes:

- <https://github.com/tc39/proposal-temporal/pull/2245>
- <https://github.com/tc39/proposal-temporal/pull/2260>
- <https://github.com/tc39/proposal-temporal/pull/2261>
- <https://github.com/tc39/proposal-temporal/pull/2262>
- <https://github.com/tc39/proposal-temporal/pull/2265>
- <https://github.com/tc39/proposal-temporal/pull/2266>
- <https://github.com/tc39/proposal-temporal/pull/2267>
- <https://github.com/tc39/proposal-temporal/pull/2269>
- <https://github.com/tc39/proposal-temporal/pull/2284>
- <https://github.com/tc39/proposal-temporal/pull/2287>
- <https://github.com/tc39/proposal-temporal/pull/2292>
- <https://github.com/tc39/proposal-temporal/pull/2297>
- <https://github.com/tc39/proposal-temporal/pull/2298>
- <https://github.com/tc39/proposal-temporal/pull/2316>
- <https://github.com/tc39/proposal-temporal/pull/2344>
- <https://github.com/tc39/proposal-temporal/pull/2345>
- <https://github.com/tc39/proposal-temporal/pull/2351>

## NumberFormat V3 update

Presenter: Shane F.Carr (SFC)

- [proposal](https://github.com/tc39/proposal-intl-numberformat-v3)
- [slides](https://docs.google.com/presentation/d/1C2FiBTcDBKOGORONHI6lV_rMWge3RAokb1kSlfw8igE/edit#slide=id.p)

SFC: So I'm going to be giving an update on intl numberformat v3. The proposal has been in stage 3 since last July almost exactly one year and I'm here to give a stage three update. So since it's been a little while since I've presented this proposal, I'm going to go ahead a little bit and remind you what it's all about.

SFC: So the number format V3 proposal addresses issues in the Intl number format object that users have requested. We are very, very choosy about which ones we prioritize. So an example here is that, for example, these are two features that were requested. One was additional scientific notation Styles. We decided not to prioritize that because it doesn't have great deal of Support, it doesn't have very many stakeholders. Number ranges on the other hand has many stakeholders and great CLDR support. So we decided to to adopt that one into the proposal.

SFC: So yeah, so I'm going to go through. Now, the parts of the proposal. Again, this is already a stage 3 proposal but I'm just going to remind you what they are. I'm also going Going to highlight in green and blue, some changes that are either happening now or are assumed to happen and those are the things that I'm asking for consensus on today. So I want to give the overview presentation and then show you where the changes are. So on this first slide the intl number format range. This slide explains, the use case for this function, this allows you to format ranges of numbers, including ranges of currencies, and ranges of measurement units. It's very well motivated. One of the sort of highlight features of format V3 is the format range function. Here are some details about it. And here is my first highlighted section. So thanks to Frank's proposal that was half an hour ago, this function no longer throws a range error when attempting to format numbers that are in the wrong order where the number on the left is greater than the number on the right of the function call. So, that is a change, which is hopefully approved, and thanks FYT for championing that part of it. The rest of the details here are still in effect, so if either side is not a number, we still throw the range error and we support the localized approximately sign and we also have correct format two parts output for format range. Although there was a there's an editorial bug regarding them regarding formattoparts output. but the behavior is It is understood and accepted so that's the first highlighted section.

SFC: Next, the next Slide. (#367) next feature, we're adding is the grouping in. I'm another very high in demand future. I would call this one of the three most highly demanded features or bug reports that I get as part of Intl is I want to control grouping separators. I want to turn them on or turn them off. Intl doesn't support that, doesn't give you an way to do that. Now we will take a grouping enum which is able to specify a grouping strategy. The change here relative to when I presented this. A year ago, is that you pass in a value into the use grouping option, the stage three proposal had that throw a type error. Now it just defaults it all everything goes to Auto, the use case that got brought up was a use case for people where it's a, it's a largely a web compatibility issue because people are passing the string “true” into the in to use grouping and the string “true” with this proposal would throw a type error and that was not great. So now we just say any truthy string. We're going to treat his Auto and everything else still works. There's this no errors Happening here anymore. I've discussed this already a group to meeting two months ago and got people are happy there. So now I'm asking this group, they're just raising awareness of the this change.

SFC: Let's keep going to the new rounding and precision options. So there's three new options that are being proposed to be added in this proposal: rounding priority, rounding increment, and trailing zero display. So rounding increments, the behavior is shown on this slide. There are a few changes in stage 3 that I'm looking for consensus on. which are one is that the rounding increment now requires that minimum fraction digits equals to maximum fraction digits. This is largely due to limitations in ICU as well as are known, use cases where the primary use case for this feature is nickel rounding and currency which requires minimum fraction equals maximum fraction anyway. so we're just basically enforcing that so you cannot use this feature without having that constraint be being upheld. And in addition, a change that I'm asking for consensus on that we have not yet, fully approved in TG2 is to also set those two options to the same by default, which means that if you have a call sites that does not specify either minimum faction or maximum fraction but does specify rounding that call sites should work. And this change allows that call site to work, so you don't have odd errors being thrown. Thank you yusuke for finding a lot of these issues with rounding increments.

SFC: The other issue (#286) here is with round increment, it cannot be mixed with significant digits, only with fraction digits. Previously, you got a RangeError when you made that mix up now, you get a type error with that mix up. It was another change that we you didn't test group 2 and now I'm highlighting here.

SFC: trailing zero. Display is unchanged. That works the way it has always worked. Whether distribute trailing zeros, you've got options, I think that one's not very controversial

SFC: Rounding priority details. (#8) There's no proposed changes right now, although there is one on a later slide that I'll show you regarding rounding priority. This is a way for you to resolve cases where you specify both minimum fraction digits and minimum or maximum significant digits in the same call sites until number format. And this new rounding priority option allows you to resolve conflicts between those two between those two sets of options.

SFC: Interpret strings as decimals, (#334) this is the part of the proposal where currently, if you have a string that has a lot of digits in its right now, now, the number get the string gets interpreted as a number which means that you lose Precision. This is quite important for cases such as currency formatting where currencies are often stored and very small units. But then if you have to display a large amount of them like, for example, if you are storing your numbers in 10^-6 units of currency but then you have to display a 10^9 amount of currency, you're going to run into this issue quite easily. the way that we solve this problem is by introducing a new type of the specification called the intl mathematical value. And basically allowing the string to carry its full precision throughout the number formatting stack. This turns out to have been a more complicated part on the implementations than I had anticipated. And part of this is resolved by removing the range check as Frank already Illustrated in his presentation, This afternoon, I do want to highlight that there is a pull request open for review. I believe it's a waiting on KG as well as others to finalize that review, I would really appreciate if we could get that PR approved and merged because I think it's been, you know, it's one of the last big changes and it's been in the way of some of the implementations finalizing and landing and shipping.

SFC: Rounding modes, (#419) nothing's changed here. I think people are happy with what we propose. We spent quite a bit of time before stage 3, debating these names and what they are what the behaviors are. So no changes here.

SFC: Sign display (#17) - no changes here. This one is a fairly small uncontroversial part of the proposal, so, no changes here.

SFC: And there are a few remaining open issues (#63, #96, #98) on the proposal repository. There's several editorial and documentation ones, which I'm not going to present here, but there are a few normative ones, or ones are potentially normative. They want to highlight here along with the proposed path on these. The first is to add source to the format to parts output. I think I mentioned this a little bit earlier. There's a bug in the specification that was found both by anba and then again by FYT separately, when they were implementing this proposal where the source field on the format, two parts is not being set up correctly, so that should be fixed.

SFC: #96, improve algorithm for resolving. Minimum Maximum Traction, digits, and rounding priority. This is a suggestion made by PFC which makes a lot of sense to we debated we discussed it in the TG2 meeting last month. And there's General agreement. During the group that PFC change proposed changes a positive, change the exhibit. the exact specification for that needs to be written and tested and that's an action item on myself that's coming up to tweak that part of the algorithm to be clear. That's only affects cases where minimum and maximum fraction to the star difference when rounding priority is applied. So it's a bit of an edge case, but it will make things more understandable and you're interested in the details, you can click Issue, #96 or I can also show it on the screen. Many people have questions about it, you can enter the queue. If you have any questions about any of these things, then we can dive into more details.

SFC: The third open issue is limit the the exponent and range implementing medical values. This is another concern that was brought up by implementers, so part of the idea of using intl mathematical values so that we can format things that are beyond the range of a double. However, we probably don't need to support formatting numbers that have 1 million digits in them, and by not having a limit, it does introduce some complications in implementations. So the proposal here is to set same limits, I believe we currently have discussed ten thousands, digits and 10,000 possible maximum minimum exponent, which is a limit where we were inspired by Temporal and new Date. The these limits already exists in elsewhere in 262. So we're not inventing them Completely new. Temporal for example has limits on the size of dates and that are related to 10,000 years or something like that. So, We're proposing to use those same limits, the exact details of that you can see in that issue 98 and how we arrived at those limits. And the pull request will be coming soon.

SFC: So, what I'm asking for consensus on, now are for sure, the pull requests that have already been merged and the ones that are highlighted in green and blue throughout the presentation, as well as seeking feedback on these last three normative issues if anyone has concerns about those. Otherwise I plan to go ahead and make the pull requests to make those changes, work with implementers to make surethey're tested and then, you know, remind you about them when I hopefully ask for stage for sometime later this year. So that my, that's my presentation. I'm now going to discussion.

KG: Yeah, can you go back to the grouping slide? (#367) Yeah, this one you're saying about interpreting all truthy strings as being "auto". What are the allowed inputs here?

SFC: so currently use grouping, is an option that either takes a truthy or falsey value. And this is an, and the proposal is to in is to interpret certain truthy values that are currently in the space of things, you can pass to use grouping as either men to are always,

those are basically the two new things are adding and then other different strings would be interpreted as Auto, so there are strings are interpreted as Auto, which is basically exactly the status quo right now.

All the strings are interpreted as Auto.

KG:I do not like that at all. Having some strings that are truthy be different from other gibberish strings is not a behavior that I am in favor of. If we can find an alternative, I would be much happier. It seems very unfortunate to me to say that the inputs of this are any string but there are specific named strings that have different behavior than literally any other string. That's just, that's just very strange. I'm fine with defaulting, like, `”true”` to "auto". No problem with that. But like, not random strings.

SFC: yeah, so right now like this thing is going to work and then it basically is going to give me grouping separators

KG: but also like you could put `“min2”` into there and it would give you -

SFC: Yeah. So what we're proposing is so this behave, this part the behavior you want to change so Min to means that this number here is not going to get a grouping separator after a number from at V3. So, basically been to is now a specified to have a special behavior outside of the space of strings.

KG: What I'm saying is that I am fine with having “min2” to have different behavior from "auto". What I don't like is having “min2” have a special behavior that is different from “min3” or "min34" where those two things aren't rejected, they're just a different thing.

JHD: I mean, It seems like if you make any tooth E string except for the known values, the auto that means you can never again a node value web compatibly because someone will probably depend on meaning Auto, so, the only way you can ever add a new value is by explicitly, rejecting all unknown values. So that you can remove that exception later, one of the time,

KG: like I said, you said this came up but you had originally rejected unknown things, but it turned out people were passing the string "true". I think having the string "true" be an alias for auto, no problem with that, just not any truthy string.

SFC: Moment, take that feedback. They can see again. Just make sure we're clear here. The status quo, is that any strings are interpreted in this way. So we already are doing the change where we are taking a string that currently means Auto and in effect mapping it to mean something else. So did this proposal already does that? So I do not necessarily know if I agree with JHD statement that well we can't do that again because we're doing it right now. That's exactly what the proposal is doing. I mean, it's already in stage 3, I'm saying that if two years from now you wanted to add min3, I suspect it would work in a similar way and be acceptable. This has been the state since 2012.

KG: Yeah. My concern is not web compatibility per se. It is just that having the input type be all strings, except these specific strings mean one thing and then all other strings mean a different thing is not a reasonable input type. I acknowledge that right now you are mapping all strings except the empty string to true and then now you're just picking some those out to map to a different thing. But that was a perfectly reasonable type. It's just Boolean. And some strings are one thing and every other string is a different thing, that is not a reasonable input type.

SFC: Okay, let's keep going through the queue. We may come back to this one.

MLS: So yeah, my question is you talked about this format Intl mathematical value is hard? Is that specified as to what that's going to be?

SFC: Yes, the details of Intl mathematical value are sitting in this pull request number #82. (SFC explains PR #82; what follows is unedited auto-transcription output.) which I can open that here. The exactly what's Happening Here is are basically pointing to the string numerical little, little, the string, numeric literal G, That exists in equity to 62. and instead of parsing that grammar into a number object, we trust that grammar into a mathematical value, which means that week retain full Precision of it. But the string that the syntax of the string still needs to conform to string numeric literal. but that mathematical value, that's it. That's my question is, you specify the format of that way to storage so that we're all implementations, you get the same values. These specific. I mean, this be the reason we use a mathematical value here is to is to enforce that the full value of the number is translated from the string into from the input string into the format is true Without the loss of precision or the loss of digits. so, we don't specify how implementations are representing that. And this is one reason why this was actually one of the more difficult parts of proposal to implement. And the way that we're implementing this, at least in V8, which is the implementation. I obviously have the most visibility into since FYT is on my team. And, you know, I see what the things that he does is to basically keep the string as a string and then use, I see use function that basically also interprets that string as a, you know, infinite Precision string. Without having to do any other operations on it. So one question that came up during the review of this was well, well, are effectively introducing, a new novel way in the ecmascript language which represents arbitrary-precision decimal strings and my answer to that is absolutely not. The because the only requirement that we actually have out of the mathematical value strings, is that they are basically passed through transparently into the internationalisation part of the library. So we're not actually establishing any standards for how these are represented by the, by the implementation. It's just convenient that ICU allows them to represent it as strings all the way through, but the actual like future of high-precision decimals is, I hope going to be in the decimal proposal, which is currently stage one. And I hope that will be the actual standard for how we represent these. So no, the specification does not require a particular way that browsers do that. Does that answer your question Michael?

MLS: it does.

RKG: I passed your thanks on to Yusuke and he in turn thanks you for this proposal.

FYT: Yeah, so I think I want to bring back to what we just discussed before any. So I think the opposition for that is to say, oh, how about we just take the string true as Auto but throw out other string values. That's the position of taking that what really happened that that will happen is that will break the of compatibility of current segment for to even without the V3. So, we have to make a chance decision where to warn upgrade what happened compatibility or not. He wants to discuss that.

KG: I would say that the current thing is also breaking web compatibility, it is in principle possible that someone could currently be passing “min2” it's just that you don't really expect them to be doing that. So you are okay with that break. And my position is that I am similarly okay, with breaking web compat for any string that we don't expect people to be passing. It sounded like the only one we are currently aware of people passing this "true", so special case that one, fine, but don't just say every single thing is accepted. That's like, it is not a break where there was not one previously

FYT: I agree you but in terms of a probability of breaking is a huge difference, you break room with one string, stranger. So, I think what we're talking properly coming talking about the compatibility probability how to being mine.

KG: I mean, I agree with that. I am not attached to a decision to specifically accept "true". I am however pretty strongly attached to not having this input type. So we could explore other options that don't break web compatibility in different ways, we can have a different property or we can have a symbol enum or something. There are several other possible ways to avoid breaking web compact. But this option is bad. I don't like this option.

SFC: I'm going to go ahead and just react to that one more time, which is I'm presenting the original issue from on, but here for the web compatibility issue with the string "true" is. So with all INTL APIs I see this very much as a problem of best effort where like if the interpretation of a particular string changes slightly across browser versions. It's very much just like having new Locale data, and having new locales that slightly tweaked held things are expected to work right. now the all the strings map to Auto and we basically say Otto is completely implementation-defined. We got make no promises over what Auto does. It means that grouping separators are usually shown, but there's some locales. I don't like grouping separators and they don't have any at all, right. And it's very much a limitation to find so we're basically taking a string out of the space Of completely implementation-defined behavior and giving it a more specific. Well defined behavior and that is very much a for compatible change because we're because pre prior to the when this specification is done, it has basically the in the implementation-defined Behavior, which is “auto” is the grab bag for everything that's implementation-defined, right? I my concern with my concern with special casing. The string true. that, I mean, I think that at stage 3, we kind of made a mistake by breaking webcam compat for all for all strings. Except these three and I think that we would have been better for us, even when we had first proposed this proposal to actually do it this way. I, in my opinion, this is a better way to do it. you know, but I also understand that like we, we could just fix this And web compat issue we know about with strength, true. And then, you know, if that really truly is the only one competitor issue, I think everyone's happy. But we, you know, I'm also worried that there is a much larger space and I just don't really see the downside of having all strings map to implementation to find Behavior changes.

RPR: to remind that this 3 minutes, 3 minutes left on the time box. you don't have any queue items.

SFC: Let's just keep chatting about this for the next three minutes and hopefully get a conclusion.

KG: I acknowledge that the thing I am proposing is more of a risk of breaking code than just mapping everything to auto but I don't think just mapping everything to auto is reasonable behavior. I am not attached to this solution I proposed, I'm fine exploring other solutions, but just picking out specific strings and saying these are given specific behavior and every other string is auto, that is just not a reasonable API to work with.

SFC: I mean, I think we're in agreement is just, you know, the weighting the priorities. like I said, the fact that all strings map to auto is definitely not something that we're going advertise, like on MDN or anything like that. It's not something that most developers should know about. It's more of a I see, add more of as a spec issue and like a web compat issue than like something that users are actually going to see. Like I I would read, I would reject a pull request to mg and that like said you can pass any string in here and guess what? It will be Auto. Like I think that would be like ridiculous and I would like rejects that.

KG: The thing is that like someone is going to write `min2` and then someone else is going to come along and change that to `min3` and they are going to pass a number in the billions and they're going to see three commas and be like "that totally works". And they're not going to know that in fact it was just something else entirely, because nothing told them that they did it wrong. It just happened to map to a different thing which happened to work in this specific case that they tested.

SFC: Okay, That's valid. I propose that we take this discussion offline and continue to discuss it on the GitHub. Cool. So I'm going to do so in my last minute, I'm going to go ahead and ask for a consensus on all of the other things that proposed, the ordering these changes, with rounding increments, the mathematical value, pull request, and then my proposed Direction with your meaning, open issues with the understanding that will continue to discuss the use grouping string behavior on GitHub. That's my proposal.

RPR: FYT is on the queue with resolved options.

FYT: It's not true. It will that passing min3 can't be distinguished from `min100`, because the result of `resolvedOptions` will have `auto`.

KG: It's not that you can't distinguish it. It's that you have to go out of your way to distinguish it. But if you just try to use it, it will look like it worked.

FYT: There is way to distinguish. That's all I want to say, okay, I thank you.

RPR: So, I think we've agreed to kind of like to defer the resolution of that one. So SFC has asked the consensus on everything except for the group and part are there any objections to do that? Any messages of support? I'm all right. Given that there are no objections. I'm going to say that we have consensus on those. Those items.

SFC: Thank you very much, everyone. Thank you,

### Conclusion/Decision

## Set Methods: how to access properties of the argument

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-set-methods)
- [slides](https://docs.google.com/presentation/d/19nCrwU5RkbIafW9zRDVDbGbPsiq7ct1IovsJLTU7p8Q/edit)

KG: Continuing my quest to work out all of those little details adding `Set.prototype.union` and friends, I have another question for the committee today. So just to recap, previously, we decided that methods like `Set.prototype.intersection` should use the internal slots on `this` but not on the arguments, so they should use the public API on the argument. So that, for example, you can pass a proxy for a Set as an argument to set.intersection and have that work. Or you can pass a user-defined set-like thing. But we didn't specify exactly what that public API should be. And in particular, should it be string based? Should it be accessing the regular `.has` method that a user would call, or should it be symbol based? And just to set the stage here, I think the most interesting example of one of these APIs is set dot intersection. Here I have written out an algorithm for intersection. The fact which is interesting about intersection is that it needs to, depending on which of the receiver or the argument is larger, you are either going to iterate the receiver and check membership in the argument, or you are going to iterate the argument and check membership in the receiver. If you just do one, you get worse big-O behavior. So you do really want to switch on which is larger. But in any case, you can end up accessing both the iterator and has or some equivalent of has; you need some way of checking membership in the arguments. So the obvious thing to do is to just use strings, to just call .has, but there's a problem: map has .has. `Map.prototype.has` checks for membership in the map. But that's not what Symbol.iterator does on maps. Symbol.iterator iterates the map, giving you entries. So in my example, where the algorithm used switches on the size of the argument, map would work as an argument to intersection only sometimes. It only works when map.size is larger than receiver.size. Because in that case you would be using the has method on map which works as if the map is a set as opposed to using the symbol dot iterator method on maps, which does not work as if the map is a set. I think that's bad. I would not like to have an API where if you pass a map, it works sometimes.

KG: So more generally. Do we want to accept things which happen to implement has, or do we want the arguments to set prototype intersection to be treated as sets only if they specifically opt in to being treated like sets, for example, by having a symbol which indicates that this is how you query set membership? And if you implement this symbol, then you are promising that the implementation for symbol.iterator is consistent with the implementation for Symbol.SetHas and perhaps the string name size or perhaps you have a new SetSize symbol, something like that. And you would only attempt to call this method; you would never call the string named `has`, method and the map of course would not implement this symbol. And in Set this symbol would just be an alias for the string named method `has`. If you have a set-like it could be whatever you want. I like this behavior personally but it would be a new thing, a new I suppose well-known symbol. Yeah. That's the question I would like to put before you today. And then if we do decide on symbols there's follow-up questions, but just this bit to start.

MM: First of all understand the example, what point was being made the if you if instead of asking the Opera House, Iterative, if you instead it just skipped got puppies, that are rare. Then the the map will be set like in both of its has behavior and it's got keys Behavior.

KG: It's true that that would happen to make Map work. I claim it is perfectly reasonable for a user to implement a List data type where `has` queries membership in the list but `keys` gives indices of the list, the same way it does for arrays. And if you had a list data structure where `has` does list membership, but `keys` does indices like for arrays, that is inconsistent, but in a different direction.

MM: Okay, that's that's the clarification I was looking for. That explains what problem you are and are not trying to solve. So the key is the lack of ability to say what contract, in the consequences, what caught my eye. So the issue is that you have object, it seems by its protocol. That it might be trying to be set like but it might just seem that way by coincidence and that there is no way to ask Are you trying to be like a set? right. Do we want to restrict this to things that intend to be set-like? Exactly. So, so that question, that abstract question is, is logically prior to the symbol or string issue. And if the answer is that, we're not trying to restrict it, then the keys and `has` that, it makes a map look set, like, or that might accidentally make something else. Look set-like would be consistent with. Not restricting it to things that intend to be satellite. So first of all just want to a great degree with that so far?

KG: Yes, I agree that this decision is logically prior to whether we wanted to accept strings or symbols.

MM: Okay, I'm good. Good. So now if we do want to restrict it to things that intend to be set, like the then the question is, what's basis for the past and the certainly the presence of a symbol be a way to do that. It's not necessarily the only way to do that. Is it necessarily the case that for the question you're you're posing the string versus symbol is exactly determined by the intention question here.

KG: So it's possible in principle that we can have a different way for a data structure to opt into being set-like. I am not aware of a different way that we could do that while also not adding additional observable property accesses. I think if we want to keep the number of observable property access to a minimum, we basically have to do the thing I proposed where you have symbols in place of strings.

MM: Okay, thank you. That was very clarifying. I did not understand what the coupling was between the two issues and that makes sense. I'm done.

GCL: Yeah, so I think this was sort of mentioned in what was just said, that the problem here is using set.prototype.intersection where the argument is. Something that not just another set. It's like what if you want to intersect with a map or something?

KG: It's more, what if you want to intersect with a user-defined thing that is trying to be a Set, or what if you are accidentally passing something that is not a Set.

GCL: Okay. Okay. We did. in your example, it's either using. Just remember, it's either the `has` or the iterator, right?

KG: Yes

GCL: So if something's trying to be set, it presumably as those probably

KG: Yes

GCL: So it might it would probably work. So the question is just whether it what's it, what happens if something is accidentally passed, that is not correct?

KG: Yes.

GCL: Okay. Thank you. I was just what I was trying to tease out.

KG: if someone passes something like Map, which implements the interface but implemented without keeping to the contractions, what happens?

WH: You keep talking about this thing called “set-like”. Could you please define it — what does it mean?

KG: That's a good question. I don't have a concrete definition because there's different possible ways of doing it, but the important parts are that it is possible to test membership and it is possible to iterate and probably also that it is possible to test size and that the iteration is consistent with membership testing and the size is consistent with iteration.

WH: Okay, I suspect we will not get agreement on a definition of set-like because it varies depending on context.

KG: well so - it's not like that the spec is going to expose the words "set-like" in any exposed thing. The question is just what is the actual algorithm that set dot prototype dot intersection uses and the algorithm that I have on the screen relies on exactly the things that I just named, and it relies on string-named properties, but it could rely on them in a different way, in principle,

WH: it's much more subtle than this. I’ll come back to it when it's my turn in the regular comments.

KG: Sure, PFC, I believe is next.

PFC: I just looked it up, we had an item in the February 2020 meeting, where we asked pretty much the same question for Temporal.Calendar and Temporal.TimeZone. I can paste a link here. My memory is a bit fuzzy but I think we were hoping that the committee would agree to set a precedent one way or the other. I think people were not feeling strongly enough one way or the other to set a precedent, but the general feeling at the time was strings unless there was a good reason not to. However, we didn't have this complication with Map, so maybe that constitutes a good reason not to.

KG: I think that the case for Temporal was somewhat different because you didn't particularly expect that users might pass anything other than a calendar and here it is entirely likely that people will be passing things other than sets. So the precedent, even if we had said this is precedent, I think would not have been that strong.

PFC: I don't think it's intended to pass anything other than Temporal.Calendar. But my understanding was that if you have a protocol, you do also need accept plain objects that implement the protocol and are not necessarily subclasses of that particular type.

KG: Well yes but like the expectation is the user is definitely going to be passing something that implements the protocol and is not going to be passing like a Map or something.

PFC: Alright, I get you.

WH: I was looking at the code of this proposal. It introduces and consistently uses patterns such as making decisions based on whether the result of the “has” method is a literal `true` or `false`. Why does it do that, resulting in surprising behavior if “has” returns a non-boolean?

KG: Are you looking at the spec text? I'm sorry, the spec text is not up to date. I have not prepared this proposal for stage advancement, I am only trying to talk about specific questions before I do that. Someone other than me wrote spec text a long time ago without working through all these questions. and I am trying to work through all of these questions before I update the spec text. So the spec text is just wrong. I apologize.

WH: The spec text was linked from the agenda. It was not clear from the agenda that we shouldn’t look at it.

KG: I'll go remove those things.

WH: Okay. The next item is about the definition of “set-like”. This definition varies depending on which method you're talking about. For example, `Set.prototype.intersection` works just fine on multisets so “set-like” includes multisets. But for `Set.prototype.symmetricDifference` as currently implemented, a multiset will not work. So a multiset is “set-like” for some of these methods but not “set-like” for others. So it's hard to come up with a consistent definition of what “set-like” means in different contexts.

KG: So, it is true that a multiset is not set-like for the purposes of symmetric difference. That said - so this proposal includes currently six methods, I believe: union, intersection, symmetricDifference, difference, isSubsetOf, and isSupersetOf. Of those, intersection and difference, I believe use the same notion of set-like, and union and symmetric difference I was probably going to accept any iterable, because in both cases, you only need to iterate the argument. You don't additionally need to query membership. so, I don't know that this would be an issue in practice.

WH: You would get the incorrect result if you just run the algorithm — the difference won’t be symmetric. If the multiset is on the right side and contains an element twice, it will toggle each time it sees it while iterating through it.

KG: Depends on how you write that algorithm. But yes, I agree that that is potentially possible. I think that's kind of out of scope for the question I am asking here because that would be a problem equally with a symbol-based protocol or a string-based protocol.

WH: It's very relevant to the notion of what it means to be set-like.

KG: I agree that it's relevant to the definition of what it means to be set-like but it is relevant for a part of the definition which is orthogonal to the part about, is the protocol string-based or symbol based. So we don't have to resolve this before we address that question.

WH: I recall that it was asserted earlier in today’s discussion that the resolution of the set-like question must come before the protocol form question.

KG: I don't think we require a complete resolution to the question of what is set-like in order to make progress on the specific question that I'm asking here.

ACE: So this won't be news to KG. As we've already talked about this. I thought I'd bring it up. up. I guess it's a slight move on from over is purely string or symbol. But then what what That symbol exactly means. guess, one more how many symbols were talking about So, you could have. this one method is a symbol, so then you've got set has symbol.iterator symbol, and then size string, or they could all three be symbols or strings. Or we have one symbol or one string which returns to you an object that then conforms the protocol akin to when you call symbol.iterator, the protocol isn't just so that the iterable protocol isn't just having - to returns something with a next method. So you could imagine Set having a symbol that is set like symbol dot set like bikeshed, name pending and then the expectation of that. Is it returns you something that has a has iterator and a size and then, for set, it could optimize not returning an object by just returning this, which conforms to accept its own protocol, that the benefit then being You can Implement multiple protocols that all want to use, Symbol.iterator, but for different meanings, maybe one iterators returning, pairs one, iterator goes backwards. Like you can have of protocols that all are all trying to grab it through the iterator symbol. But you'd only be able to implement one of the protocols. So in this case, you know, you could say, I'm going to be set. So I'm I'm going to add Set has and that means my symbol do iterator returns values. But in our means, you can't conform to any other. Protocols are also wants to use iterator,

KG: So I think if we think that this is something which is likely to come up, that people might want to use one thing to be iterable in different ways depending on which protocol they are trying to implement, I think the easiest way to resolve that would be to have a symbol.setIterator or something like that, rather than having an additional object that gets returned in the middle. I think the additional object doesn't add much benefit, because unlike for iterators - iterators need to carry state, but this would not need to carry state. So I think I would prefer just having an additional symbol on this rather than getting an object and then looking at methods on that. Symbols are not expensive. That namespace is not contested. But that's a personal preference.

RPR: okay, and thank you. I just took a quick time, check. We've got about six minutes remaining and the queue is deep, so we're probably not going to get through it all

DRO: from TCQ: why can’t we convert the arg to a Set? [audio issues]

KG: I can perhaps just try to answer that question as written in the hopes that I can address it. The reason that we can't just build a set from the argument directly is because that has worse big-O performance. In particular in the case that the receiver is very small, for example, the empty set, you really don't want to have to iterate the whole argument. That is potentially very expensive and that is work that just does not need to be done.

RPR: DRO, you are still too quiet to hear. Maybe you could put your comments in the TC39 delegates chat.

GCL: Hello. so I'm sort of curious like from a more, I guess sort of like, flipping the question when something is a very obviously, not a set like it's an empty object. What would we consider like the point at, which we decide that this object is not useful? I don't like there's, I don't think we have an answer for that right now because we're sort of discussing whether a protocol should exist, but I'm just sort of curious like for example, in this, in this example, code on the slide here, right? It's doing, you know, bound function create, our got has, and if that's undefined that's like a spec assertion problem, because bound function create so, like, within the context of, like, whatever this algorithm is some point, There's like, I guess I'm trying to get to the question of like something that incidentally looks like a set for example, map versus something that is very obviously not a set. There's the there's the path we take where we say something has to very gbesi by like some sort of simple branding or something, but I'm just sort of curious of curious if this is a useful way to look at it. Just to sort of understand maybe what kind of check, we're actually trying to perform here.

KG: So I think we get whatever things we need to get and we check that they have the types that we expect them to have and throw if we were not able to get the things that we needed, and then we just proceed to blithely use them. And not like - like we're not going to check that the result of our `has` is a Boolean, that sort of thing. So yeah. And I would expect it to be like that. You get everything up front, if anything wasn't a function or whatever you throw and then you just proceed.

SFC: Yeah, so I just wanted to raise the the idea that maybe we should be thinking about these function names as or these protocols as essentially being part of global namespace. Like, when we give the way we need, when we name functions, we should be thinking about how functions with the same names this behave in other, you know, in built-in objects. and if we think about the string names of these functions as having, you know, know, consistent Behavior doesn't need to necessarily be something that's formal, I think it could help resolve some of these issues like the one that's that KG is showing here where like dot has method is a different Behavior because it has different semantics into places of we have to have a function with that name concretely. I think one thing we may want to consider which I'd I didn't directly see in the presentation is that we actually use a new string method called set has. I think the presentation suggest we added a string method with that name will not add a string method with that name that maps to a certain Behavior made duplicate the behavior of other functions, but then also becomes that, you know, Global namespace, and then we use strings because we I do want to echo, PFC’s point from earlier that we discussed this quite at length, with Temporal and decided to use string functions. So I'm kind of hesitant with the idea of basically saying that we should use simple functions here. Like I think that's a much bigger discussion, and I don't know if we have consensus on that, but if we're already using string, function names basically everywhere. Why not just continue to use them here as well?

KG: I agree that if we do decide to use strings here we are essentially deciding that string named methods on every built-in type are part of a global namespace. I think that would be bad and we should not do that. That is why I want to use symbols. I really don't think that Temporal set precedent for this case. Because as I said it earlier, the case for Temporal was where you had specific - it wasn't that you were expecting to implement this protocol, the calendar-like protocol, on random other objects, it was that you were building a calendar specifically for Temporal. And that's a pretty different thing from this case. Using string named properties for things like error cause or for Temporal calendars, I think is entirely reasonable, but this is a case where you will be implementing a protocol on something that has other behavior and is used for other things, so I don’t think Temporal sets precedent. But I agree with you that if we do decide this is strings. We are basically deciding that this is a global namespace and we have to be very careful what we use.

SFC: yeah, I guess my response to that is I don't necessarily think that's necessarily a bad thing. It's just something we have to be more careful. We we should tread more lightly in that direction but I don't necessarily think it's something that we should completely rule out, you know, I think longer more descriptive string names is not necessarily something we should rule out.

MM: Okay, I'll make it very quick. I appreciate the question. I can see both sides of it. You asked for a preference. I'm going to express a preference but I'm still open to arguments on the other side. My preference is very much along the lines of what SFC was talking about because of the nature of JavaScript as language, JavaScript like small talk like python is loose polymorphism. and we've been treating it that way in design and the example that you're examining to to provoke our intuition, Perfect example. why does set have keys and values and entries? It's exactly because we had in mind some abstract polymorphism between set and map, so they could be used in similar consumption contexts.

RBN: I brought this up in the delegates chat. That is there a reason that we couldn't depend on a more generic implementation of intersection that uses set has and something like either entries or Keys as opposed to trying to grab the iterator directly off of that because you mentioned intersecting with a map with sometimes work. Actually, I don't think would ever work because the things you iterate on the map would be the entries, because that's the default iterator for a map and a map you've never have those. The entry as a key. So you can theoretically supported a few actually used the string Methods, that that matched.

KG: So the reason that it works sometimes with a Map is that this algorithm only iterates the Map sometimes. Sometimes it calls `has` on the map. And yes it is true that in the case where you actually iterate the map, that you would always get the empty set as the intersection. But the algorithm doesn't always iterate the map.

RBN: That is true. I am. I do the question that whether or not we could just depend on the existence of something like, keys or entries to be more generic and kind of not of avoid the issue of it being inconsistent.

KG: So I gave an example earlier where you might have a list like data structure for which `keys` gives the indices but `has` gives you list membership, and I think that is a totally possible thing to do and to try to pass to Set intersection, and then it would run into exactly the same problem as Map currently does with the design where you are using has and symbol.iterator. So I don't think this problem is avoidable if we are using string named properties. It's certainly true that we could use keys instead of symbol.iterator and I would be open to that change. I just don't think it avoids the problem.

RPR: Ok, KG, did you have any closing remarks for this topic?

KG: Sorry, I guess I should have asked for a longer time box, is my closing remarks. Expect to continue this discussion next meeting. I will try to get that spec text more coherent and I apologize it wasn't previously. If you have further thoughts in the next couple of months, please put them on the issue tracker.

### Conclusion/Resolution

- No consensus, needs to come back for resolution

## Duplicate Named capturing groups for Stage 3

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-duplicate-named-capturing-groups)

KG: Okay, this will hopefully have significantly less discussion necessary than the previous item. So I presented this at the last meeting for stage 2. Since then I got some useful feedback - or I suppose during the meeting - I got some useful feedback that as specified the iteration order of properties was inconsistent. I'll get to that later. But there's only been that one small change. So I'm here today asking for stage 3.

KG: So the proposal is, in regular expressions, you can have these named capture groups, which are very helpful. You don't have to remember exactly the order of all of your capture groups and use \1 and so on, you can just give them useful names. The problem is, or at least a problem is, that sometimes you have multiple different ways of writing things, where you don't actually care which way was written. So for example, you might have year dash month or month dash year, as in this example. And you just want to extract the year from this. But right now we have a restriction that says you can only use a given capturing group name once in a regular expression, so the names must be globally unique. So this currently is a syntax error. The proposal is that we relax this requirement, so that if the capturing group is reused across alternatives - so, where you have a pipe between the two parts that have the named capture group - the capture group names can be reused. It continues to be an error to reuse a name within an alternative, but if they are in separate alternatives, then it is impossible for them to both participate in the match. Modulo some details about repetition.

KG: And backreferences refer to whichever one happens to actually participate. In the case of repetitions it refers to whichever one participated in the last match. That's how it already works.

KG: And the .groups object that you get when performing a match, the property on that groups object is the value of whichever one actually matched. And here is where there was this tweak to the spec text as it was proposed last time. Now the enumeration order of the named properties in that group object is always the same. It's always whichever the order that the names first appear within the regex, even if the one that actually participates is - like, if you have group names, A B | B A and the second two match, it's still going to be `A, B` on the groups object, not `B, A` so that the groups object has deterministic order.

KG: And it's been reviewed by RGN and WH. There is complete spec text. The spec text is quite small. There's not tests currently but I will write tests if we get stage 3.

RPR: There is no one on the queue.

KG: I'd like to ask for consensus for stage 3 for this proposal language.

RPR: Any objections to stage three?

DE: This was my mistake. I support.

MM: I support

WH: Me too

KG: Thank you.

WH: Thank you for fixing the overly generic spec methods.

KG: Okay, I will take that as consensus. Thanks very much.

### Conclusion/Decision

- Stage 3

## Symbol Predicates

Presenter: Robin Riccard (RRD) Jordan Harband (JHD)

- [proposal](https://github.com/rricard/proposal-symbol-predicates)
- [slides](https://docs.google.com/presentation/d/1-3SEk2fr3LHoezFgyaXJX0O6UU6pKgd444a372qQ4pQ/edit)

RRD: Okay. So this is about symbol predicates. We're going to show what we are introducing just after, and we're going to present it for stage one and maybe stage two. So the main motivation dates back from our last presentation with record and tuple champion group for symbols as weakmap keys thaat we presented the last meeting. So when we went for stage three with symbols as weakmap keys. We discussed the possibility of a new proposal. That was symbol predicates. And the goal of this was mostly to able to extract a way to find out what would be or not be a valid WeakMap Keys. So the main thing that we needed at this is being able to Define if symbol would be registered or being well-known.

JHD: Right. Yeah, so it's relatively straightforward, it's two predicates, it uses the thisSymbolValue abstract operation to figure out if a symbol or not and returns true or false. That's all it does. One of the nice things that this will provide is the - so for isRegistered. You can do this in user land with you know typeof symbol.keyFor `=== 'string' and wrapping that in a try-catch for when you pass a symbol in there, but this is much more straightforward and ergonomic. Then for the is WellKnown, the only way to do that is to enumerate all of the existing well known symbols and cache them during a time when you know that the realm is is not messed with, and then, at any future time, you can check that list. So this is also much more ergonomic to do.

RRD: That's it so that we already answered earlier. So, Yes, into phobic symbol is not going to be a volunteer program. So I'm looking at the queue seems empty, we're then going to ask for a consensus for stage 1

JHD: and the problem statement, I mean we could call it “symbol predicates” but a more verbose form would be a more ergonomic way to determine if a symbol is well known or registered.

HHM: The well-known symbol is what we have in the table in the spec. Those the are cross realm. Are registered also cross-realm? Or is there a way to distinguish between?

JHD: Yeah, registered symbols and well-known. Those are both cross realm. So if you need a predicate for is cross realm, you would combine these two. But in order to know, if something is a valid WeakMap key, you need to know that it is registered or is not registered alone and it being well-known actually is sufficient. So or sorry, it, well-known symbol can be weakMap key. So, You need, the use cases. Cannot be solved with one predicate alone, you need to, they could be different different set of 2, but I don't think that there's I'm not aware of a use case to know if something is cross realm or not. But since you could construct that with these two, predicates to me, these two seem like the appropriate kind of place to draw the line.

DLM: We discussed this in the SpiderMonkey team. We're happy with this proposal and we support for stage 1 and Stage 2.

JHD: Thank you. And so we started just by asking for stage 1. So like want to make sure we get that in there before we talk about to. Yeah, yeah. So Shane have here.

SFC: yeah, so I think you described fairly well the motivation for isRegistered because it has to do with the weak map keys. I'm wondering what is the use case for isWellKnown, because I think that there's, you know, the second predicate isWellKnown is one option. The other option is isCrossRealm and I'm wondering if you can justify why you chose isWellKnown as the predicate; why is that one more well motivated than isCrossRealm?

JHD: So I think It given that the symbols for WeakMap Keys decision was to include well-known symbols like so Unique Sandwell, knowns can be weak and registered cannot be the strongest argument for isWellKnown being a thing goes away. So I agree with you that we could pick either one but there have always been since es2015 three categories of symbols to which happened to be cross realm, but that's not - incidentally they are but it's not that there's like my the mental model in my experience is not. we have / realm and crossrealms symbols. It's we have unique symbols that are per realm. Well, known symbols that are cross realm and registered symbols that are so cross-realm. Given that those are the three categories, it felt appropriate to draw it on those three lines and add another alternative. Instead of is well-known, would be isUnique. But while there are defined terms pretty Universal terms, how widely understood they are not as a separate question, but well-known is a thing and registered as a thing, but the term unique symbols is not the way that they're universally described, that's a term that I think we've only as a committee kind of started using often during the symbol as weakmap keys discussion. But I think before that there wasn't really a need to discuss them. So again, it feels like these are the two commonly understood categories and it makes sense to me to then reify those as a predicate. but yeah, we could absolutely go any of those directions, if someone has a strong feeling to push in a way it as long as all of these questions can be answered by composing these predicates then all the use cases that we can think of are addressed.

SFC: We can keep going through the queue. I added another item later.

MM: Okay, so I'm perfectly fine with this going to stage one where we're investigating the question. I have quibble with this going to stage two, aside from the issue of naming and categorization, just in terms of the logic of the API. A question that has repeatedly come up is whether to relax the existing spec invariant that the well-known known symbols are exactly the symbol valued string static properties of the symbol Constructor. The reason why that invariant is currently useful and used if they're what if we introduce the API such that I can get the same utility from a more principled API that would be interesting. The utility that I need is to know for a given well-known symbol, let's say you're writing a remote object protocol between to address spaces and a well-known symbol hits the boundary. You'd like to know not just is it a well-known symbol but which well-known symbol it is, so that you could then serialize the identification of which one it is to the other side. So the other side can then use this API to look up the same, well-known symbol, and this probably why stresses that the committee made a huge mistake in not having the well known symbols beer. Registered because of all the well-known symbols were simply registered. Then the inter inter the remote object treatment of registered symbols were just apply without needing any more cases.

JHD: To answer your question, Mark. I think that the - during the presentations about the get intrinsics proposal, we've discussed extending it before I come with a enumeration. in other words with some mechanisms so that you could get all the intrinsics. At which point you could filter with these well-known predicate and get the list, you want regardless of where they live and it is absolutely something I was thinking about that, perhaps one the iteration forms would give you a way to decide, which one it was in addition to the ability that you could just look at the dot description on it, but like, that's something I'd love to love to discuss separately. But I think that I would like to relax the requirement that they be on symbol for other protocol proposals, and I think that that would be a path to it, but I think that is orthogonal to this proposal.

MM: Well, it's not orthogonal in the sense that the `symbol.keyFor` and and `symbol.for` is already can be used as a predicate, if you wish to as to whether a simple as So similarly a corresponding thing that named well-known symbols could do likewise, and right now essentially the Symbol Constructor is used for that name, lookup, which is terrible, which I agree, is terrible. The get intrinsics proposal as the lever for solving this I had not considered, and that's interesting. So I think that that's a good discussion to have during stage 1, so on the basis of that surprising suggestion from you. I continue to support this for stage one, and not yet for stage 2.

JHD: so another possibility, MM which sort of like a little bit anticipates? RBU's question is, I would a different proposal in the same way as we added `.description` we could add a `.isWellKnown` accessor on symbols, but I don't think that that To me that it doesn't address the ergonomics that this does.

MM: Yeah, I don't see how with regard to the issues that I'm raising. How is any different than what you're proposing now?

JHD: Oh yeah. Sorry, if it was a Boolean. No. But if essentially provided a string enum value that told you that (?) that would address your use case as well, but don't think it would meet the ergonomic desires here. And so I would consider it a separate proposal.

MM: Yeah. Also, we'd only need half of it, you'd still need a way given that to look up. up the corresponding Well-known symbol.

JHD: Right, fair enough. That was why I thought it made sense for get intrinsics because that that provides then both mechanisms.

MM: Yes it does.

SFC: Yeah, so given that the three types of symbols. I was this wondering if you considered an API where phase the function is called symbol time, like Symbol.symbolType, and some of that symbol type returns one of the three stringy enums, we seem to do stringy enums lot and especially in, I think Temporal is a few cases of that. Then you don't have to decide, which predicate to use because there's just one function that would work just as well.

JHD: The, I think, the only complication there is then we would have to reify the term unique or pick over another term. And given that, that isn't already a universal term. I think that gets complex and given that, I don't think we will ever add a Fourth Kind of symbol. Like, when you, when you have a permanent three items set, then like, you can do a three valued enum, or you can do a pair of Boolean or something like there's a lot of different ways to if that, that describe that. seems like the sort of thing we should figure out prior to stage two, but I would say that unless Well, we would always look for that feedback at any time, if no one in this call, or in this meeting, Like has a strong feeling that that's a better API than that would be a good signal for us to take or similarly, if there is a strong that would be a good signal for us to take either way. But yeah we had not considered it. No I think for The Unique reasons that we mentioned a few times,

SFC: Okay. Yeah, it's there. If the set of possible types is going to be extended in the future, I think what you've proposed here is a reasonable path and I think that it makes sense to have the predicates be on the bottom level, you know, have them be disjoint. isRegistered, isWellKnown, if there's a third or fourth type. This can also be added as additional disjoint, you know, "is" methods. But you know, if we do think that there's just going to be three types of symbols, maybe having one single accessor type is good.

JHD: So yeah, yeah, I've heard enough discussions that having as three types was, is a mistake A lot of folks seem to feel that maybe to would have been better. So like I have a feeling that it would be very difficult to get consensus for a fourth. Not that. I think - I also can't conceive of one But like I just I doubt that that would come to pass. So, okay, looks like the queue is empty. I think we can Probably ask for stage one first.

RPR: thumbs up in the room from Shane etc.

JHD: And we've had some explicit support from Daniel and Mark

JHD: So any objections to stage one? and I guess stage two is more - Yeah. I mean, if if if there's only person with one of those two, we could maybe try and push it. But so Shane unless you're completely abandoning the enum idea and unless know, In else supports it, then we would still have to ask Mark.

MM: Yeah, I object to stage two but I'm anxious to see the topic move forward. So I'm anxious to engage with you on the issues that I raised. And I don't think any of them are showstoppers. I think they're all things we can come to agreement.

JHD: Yeah, so MM, regardless of this proposal, I absolutely will be engaging with you. As soon as I have updated the get intrinsics, proposal for obvious reasons. And then I guess my question. So that, so that Robin have actionable feedback for this proposal. Yep. Could you state your stage 2 objection in a way that gives us something to achieve when we come back and ask again?

MM: Yes, the difficult issue with regard to well known symbols for which there is currently no good API and for which an API satisfying your purposes could also satisfy is to answer the question, for a well-known symbol, which well-known symbol is it, and correspondingly given the identification returned by such a question, to say give me the well-known symbol identified by this identification. In other words exactly The `symbol.for`/`symbol.keyFor` protocol that, just for well-known, rather than for registered and I think that's it. And I also think that if we did that, we wouldn't particularly need an isRegistered; symbol.key for is is perfectly fine as something that you can overload for purposes of finding out, if something is registered.

JHD: So the fair, thank you. That's, that's very clear-eyed for what it's worth: I don't agree. I think that we still Would we still need both of these predicates? Because ergonomically having to call one function and get a Boolean is far superior and cleaner and conveys intention better than having to remember the exact comparisons to need it, they needed to get the semantic you want. It's the difference between whether you have to, like, for maintainability sake, you kind of have to make a function or a library or something versus when you can just use the built-in directly. So I am fully in support of the mechanisms you're looking for, but I think, Even if we had them, we would still want these two predicates for ergonomics reasons

MM: okay, I understand and I look forward to continue discussion on. But I do object to stage two.

RRD: Thank you. Okay. So, yep, for the note, we can conclude stage one, not stage two. Thank you.

### Conclusion/Decision

- Stage 1

## Allow hosts to reject private fields

Presenter: Kevin Gibbons (KG)

- [PR](https://github.com/tc39/ecma262/pull/2807)

KG: Here we go. This is a request that I am bringing which came up in HTML. So for context, you may or may not, hopefully are not, aware that it is possible to add private fields to existing objects using this horrible thing we call the return override trick. You probably shouldn't, but it is in principle possible to stick a private field on any existing object. Another thing you may or may not be aware of is the thing that HTML calls the windowproxy. Which is this - the window object in HTML that has very special properties; in particular, it behaves differently when you are accessing it across realms or if you navigate a page; the window object preserves its identity but its properties all change. It's a very strange object, the windowProxy exotic object is very strange with regard to these crossrealms things, and it is very strange in every engine. So implementers noted that adding private members to these particular objects, the window object, as well as I believe the location object, was a lot of work for something that basically shouldn't ever happen. "Getting this right in Gecko is a very large amount of engineering work with very, very low user value". And I agree with that assessment. So, the precise proposal here is to allow hosts, potentially only web hosts, we will need to discuss that, to reject having private fields added to specific exotic objects. So this is - when the host defines special objects like the window proxy, this gives them the option to, if someone tries to do the horrible return override trick to stick a private field on that exotic object, it allows hosts the option to reject that field. And there is an additional requirement that it be stable over time. So any time you call this host hook on the same object twice it must give the same answer. You can't accept a private field once and then reject it later. But otherwise hosts can do this for any of their exotic objects. As currently written, at the request of some people in this thread, I made this specific to web hosts. I said that only web browsers were allowed to do this thing. Some people said they would like other hosts to also be able to do this, specifically so that you could emulate web hosts. I don't care either way. You can discuss it. But I just want us to allow web posts to reject private fields on window proxy.

KKL: We've discussed this at Agoric and came to the conclusion that we are okay with this proceeding. We're concerned about the text limiting this behavior to web hosts and we would like to have a path open to host virtualization of this behavior such as something like JSDOM could create a window object that emulates it. And we would be comforted if there's text to the effect that we intend to leave open the possibility of host virtualization behavior.

KG: I'm happy to put such text in the PR message. I don't know that such text would really make sense in the spec. We don't really talk about things we might do in the future.

KKL: If I recall, from my last read of this, there was text expressly precluding certain hosts, non web hosts from having this behavior.

KG: Yes.

KKL: Right now what it says, which is to say that there should be if that if that Text persists in this. There should be a corresponding relaxation of that with such that one if we were to propose virtualizable behavior in the future that it would be clear that this was not intended to preclude that possibility.

KG: I mean, we would just remove this paragraph if we wanted that.

KKL: This is about communicating forward to whoever's in the room on the day that happens.

JHD: I would also add if you're trying to emulate a web browser, then you would immediately need to do all the Things, the spec says about web browsers, including Annex B and stuff and follow the HTML spec and whatnot. So like this wouldn't preclude you from doing that if that's what you're trying to emulate. But if you're trying to emulate an on web browser, you shouldn't do that. Anyway, it's a bit of a petty, semantic difference,

DE: I think this this comes up in practice, if you have, for example, a test environment, that is one environment, but emulating another. So I think this is not so good. You could also window proxy is about navigation and I don't know if this is our systems, tend to emulate to that level.

KKL: That's fair.

KG: I think that there is certainly a path forward to making this something that could be virtualized, but the path forward is just removing this line or saying something different here. And in those other places that are specific to hosts, if we wanted to make them fully virtualizable, we would need to remove those as well. So I mean if you would really like I could add an editorial note saying this may be relaxed in the future, but nothing in the spec says that right now about anything.

KKL: Well, I think the, the word I used “would be comforted” that that's as strong as I'm willing I'm willing to say.

KG: All right. Now, we have tons of things on the queue.

SFC: Okay, a clarifying question is, how does this relate to Object.isFrozen or Object.isExtensible? And do those block the addition of private Fields?

KG: It does not relate in any way. Those do not block the addition of private fields.

SFC: Okay, so if isFrozen and isExtensible do allow for the addition of private fields with the hack, then should we consider, rather than just allowing hosts to choose objects to make "private frozen" (or whatever new adjectives you want to describe), we just make that adjective, the state of the object, something that anyone can opt into like they can opt into frozen and non-extensible objects?

KG: So other people have proposed this also, I think that's a very reasonable idea, but it is something that we could trivially put on top of this proposal and is also a much bigger change. So while I am happy to explore that possibility and to, if we actually do go down that route, to rephrase this in terms of that, I want to just get this little part in now and worry about a larger design later.

DE: I support this proposal. It's seems like a reasonable way to deal with the Practical problem. I wanted to Recall why the return override trick exists on one hand: It's because this is how es6 class instantiation works in general, you call it the super class, it makes a base instance with not with no fields and then the fields get added as you go down for kind of imperative lie in. This can't be pre computed because we have mutable prototype chain, maybe structs proposal could make a version that doesn't have this property. but that's a separate thing that we didn't want to block private fields on further, return override trick helps with custom element upgrade. Anyway, those things, neither of those things applied to the global object. So those are two like actual kind of use cases for this and the global object is not one of those. So this restriction seems like a practical solution.

WH: I saw some comments on the issue from a developer who expressed dismay about not being able to put private properties on window proxy objects. Does anyone here know what this was all about?

KG: No, but I assume it's just trying to do something like a WeakMap but faster. this [on screen] was the answer I got. I'm also curious, but I don't know.

DLM: I just wanted to reiterate the SM team's support for this change. It came up in the presentation already but I want to say it again.

PHE: So, I have no objection to what's proposed here. I am uncomfortable with the form of where it's placed in the spec. This is clearly limited. Yeah, I brought this up in the, in the discussion threads. The this is specifically limited to web browsers and we have a place to put things specifically that only apply to web browsers in nxp. And it seems appropriate for this to live there until it has a broader application. I am sympathetic to the comment KG that you made about it being challenging to kind of cross reference every line you read in the main spec body with the annex I would suggest an alternative solution which is to put a note in the the place where you currently put this. EXT, that refers the reader to the appropriate spot in annex.B but then we we would be consistent with how the the spec is generally constructed.

KG: So two comments on that. First, we do put notes already, like "Note: Annex B adds an additional step at this point". That has not made it be pleasant. It is still extremely frustrating to jump around. Second thing is, we already have exactly this note in the non-Annex B hostMakeJobCallBack: "ES hosts that are not web browsers must use the default implementation of hostMakeJobCallBack". So this wouldn't be the first time we were putting something web browser specific outside of Annex B. But like, finally, Annex B is very, very painful. Like having it separated is very painful. And I would want there to be a commensurate amount of benefit to someone for having this outside of annex B. I don't understand what the benefit is.

JHD: We discussed this a couple years ago. Annex B, we are getting rid of there. Will be no. Annex B. It will all be in lines and like that is that is the plan we discussed and there's a lot of a lot of contention about exactly what gets moved where and when, of course so it's not a quick process. But that is why I think it would actually be harmful to add more stuff to Annex B because it just adds to the bike shedding will have to do later, you know, and so that's what we've already inlined a few things and made them made them normative optional. Rather than you know and didn't add browser notes in those cases. So I like I think that I agree with you that historically, Annex B would be the place for this but given the discussion We've had about it. It feels like editorially, it would be it's, you know, know, it we should be following the which is trying to move things out and not, you know, add more stuff into it.

PHE: I guess my recollection of the conversation from a couple years ago and I do recall it is a little bit different than yours and I'm not I can't check the notes right now to say my recollection is indeed that we would move things out where we could but I don't Don't recall. That we said, oh the goal is expressly to get rid of annex.B, you know, become a this page intentionally left blank.

JHD: Yeah, I mean I probably painted that with too broad a brush. I would, I'll nuanced it to say that things that needn't be browser-specific, will either be made required or normative optional, Case by case, that was one of the things we discussed. And that there was some concern about some aspects the grammar And how that would mesh back in and that's a also, a different discussion. I don't recall, like, I recall that there are desire. I have some of it for some things to remain browser-only perhaps many things but I don't recall pushback about the general concept of the Annex B except for the grammar stuff. But yet, go ahead.

MM: I was the one who originally proposed getting rid of Annex B and just procedurally. What happened was in the in the I had not in prior to the media made adequate announcements prepare the delegates to know that I would be raising that during the meeting. So in the meeting, I did achieve consensus that we get rid of annex.B as well as consensus about what happens to all the pieces, where they go or more qualifying text gets put among them, then after that happens, WH pointed my procedural mistake, and that he would it, he is interested in the topic, he had some particular objections to some of this particular conclusions. But I don't remember what the impact was of WH’s objection. Over the overall idea that Annex B is going to disappear.

WH: I was never a part of a consensus about the making of the entirety of Annex B disappear, and I would strongly object to that.

MM: Okay, that answers my question. Yeah, the consensus was definitely an illegitimate consensus on the grounds that Waldemar was not present and removing Annex B was not on the agenda.

DE: Great. This, this matches my impression of the situation well that we just don't as much as it disappoints me that we don't have consensus as a committee on what Jordan stated. And yeah, and I was giving a presentation and then MM broaden the scope and I was very happy and excited about the conclusion but But now we're back just taking it Case by case in the sense of we do not have an agreed on Direction many. There's There's a standing disagreement here. there are many cases in committee? I would, I would love for Ruth and XB, but we don't have consensus on that.

KG: WH [on the queue] agrees with someone.

WH: I agree with PHE.

KG: You would like it to be an Annex B?

WH: I would like Annex B to list things which are different for browsers.

KG: So as I mentioned previously, I have personally and as well as teammates, have been caused a great deal of pain by having things outside [sic] Annex B. Like we have wasted multiple engineering hours. So if there is some benefit to having things outside of Annex B which is commensurate with that cost, I would like to hear it, but in the absence of such a benefit, I would really like to not keep doing this.

WH: So you agree with me about avoiding having things outside of Annex B?

PHE: I'm sympathetic KG. But I mean, I can make the exact opposite point, which is every time I have to read something about the web browser in the main text, it's a waste of my time. I'm okay. I mean and so I'm looking for I'm just looking for something which, which could maybe work in both, both cases, you know, the comment at the end is a little bit of a like a ha like if you read the entire spectacle and say oh you have to do this, And then you get to the end and says we only have to do it. If you're a web browser, you've now burned time reading something that you didn't didn't need to

KG: Host callbacks don't place requirements on hosts, they give options to hosts. If you didn't have anything that you wanted to reject private fields for, this host callback would be irrelevant whether or not you are a web browser.

DE: I think the error has affected many people who worked on web browsers as well and that's a large important constituent, That's why some cases such as for this Intl.fallbackSymbol, we do include it in line with formatting that tries to clearly state that this is not always necessary. I think, I wonder if we could find a solution here through better formatting, maybe if we even had like a link from the place says that it's normative optional to the you know, place in the front matter that defines that or we even had a toggle switch, which switches it between being inline and or in the end. But I don't think the state of having things be out of line at the end has been good for the core goal of the specification of aligning implementations. It's It's it's caused misalignment and bugs

KG: in the spirit of alternative possible formattings, PHE, how would feel about if instead of this just being direct `perform`, if it was a like `if the host is a web browser then` and then this `perform`.

PH: I think that would help it would certainly raise it to the front so you wouldn't have to spend time going through it. So that that could help the could be a pattern that might be useful moving forward. But I don't know if that addresses WH’s concern.

WH: For things like for one-liners like this I don't care if it's defined in the main body or Annex B as long as there is a pointer to it from the other place. As long as you can reach it from either place, for small one-liner things like that, that will be fine. If you're reading the main body you definitely should see that what you're reading has parts which are modified for web browsers. Similarly, if you're looking in Annex B, you should see all things which are modified for web browsers and not have to read through the main spec to find them all.

KG: Ok. I don't currently have a note in Annex B, and there's not currently a note for HostMakeJobCallback. But I will add both of those and then they will both - the existing one and this new one will be reachable for Annex B. And PHE, if you are OK with having the `if` guard the `perform`, I think that sounds like a reasonable compromise,

PHE: That sounds reasonable. I trust you on the details of the spec text.

KG: Okay, having discussed the precise formatting of this change for three times as long as we discussed the actual change, can I get consensus on the actual change, which is to allow specifically web browsers to reject private fields on specifically exotic objects that they define?

KG: I'm going to assume that's consensus having previously gotten support from SpiderMonkey.

RPR: I'm seeing nods from SFC in the room and PHE is nothing as well, okay? So I hope -

JHD: So just the specific use case of browsers, preventing private Fields being added to the window. Proxy is like a no-brainer for me. Like obviously, we want to prevent that, there's no valid use case for it taste for it. I'm on board and there's there's been some, know, rumbling about maybe the location object to and I'm probably fine with that also. But the even the with the web browser limit, this is sort of a broad brush and who knows, you know, maybe they'll the web will start not permitting private fields on all sorts of random stuff and while that's fine, if there's no case for it, like no one will notice. it's also a capability that it's hard to virtualize and can't be mimicked and userland so, It feel Useful to me to If possible constrain this as tightly as possible because if it turns out that there is a demand for it then probably be want to expose it to And the we should probably find out about that before were locked into some design because like a web browser. Host. let's say just chose to go nuts with the host hook

KG: so I don't think we can reasonably write down more constraints than this, but I'm quite happy to go back to the HTML thread and say this TC39 approved of this with general language, but specifically for use with window and/or location, if you actually do want to start doing it on more stuff, please talk to us before doing that. Or something to that effect.

JHD: Yeah. I mean, that would be really helpful and maybe a non normative note think the indicating that intent would be really helpful, You know? It's, there's always a balance between opening windows for Innovation, but also for abuse and between locking things down to an impractical level. And, you know, there's, we have to find a place. We have to wait until at some point we have to just wait and see if something gets abused before we learn. If, that's a really a thing to lock down in the future, so I hope it won't be but I just wanted to bring that up so it was recorded.

RPR: We're actually 10 minutes over on this topic but WH still has something the key. So please try to be brief.

WH: Yeah, just wanted to follow up on the question of divergence between implementations is a possible issue. So I agree with the previous speaker in that I don't want to start seeing random objects reject private fields. I also don't want to make this into a general API that can be applied to arbitrary objects since that would just complicate things further. So if the status quo is that the window proxy object is special, that's fine. I don't want to overengineer this into a generic thing that can be applied to other objects.

KG: Yeah, for sure, and HTML will have a precise definition for this. So there will not be like - we will say HTML is only the only host that is allowed to have non default behavior, and then HTML will precisely write down the behavior. So I would not expect implementation divergence with what's currently here.

WH: Okay, sounds good.

DE: I want to encourage us to have a kind of positive collaborative relationship with host where we can work based on trust. I worry a little bit about the kind of discourse here about if we let them do this then they'll try to do that. We're all just on the same team there in Open Standards process as well. Also, governed by a code of conduct so let's just keep that in mind.

CP: It's clear that this is going to be a problem for virtualization because you will not be able to create something that looks like a window, it seems problematic. You will always be able to test if it is a real window or not. So I wonder if we should look into alternative solutions where an object can expose some information that can be used to prevent the addition of new private fields. That way we can virtualize those objects, maybe a well-known symbol added into the object or a new API, that prevents the expansion of the object with private fields associated with it. And the same tricks can be needed for window practices.

KG: So we're over time. So SFC brought up that idea and previously WH objected to that idea. My response when it was brought up previously is that I think that's a thing that we could usefully explore in the future, but I do not consider it in scope for this PR. We could certainly build such an API on top of this PR once this was landed but I would really like to just do the small change right now and discuss possible virtualization for this change and expansion to user code at a later date rather than 5 minutes over our timebox, or 15 minutes, whatever it is.

JHD: I said earlier that putting private fields is the same as putting a key in the weakmap. Can you put Window in a WeakMap?

KG: Yes, you can. The implementations are very different. So while the answer is yes, you can put a window proxy in a WeakMap, implementations in engines for WeakMaps are very different from the implementations for private fields, at least in some browsers.

JHD: that makes sense. Like I'm not saying that they have to be linked but like from a mental model is it worth after this PR considering making the same host hook prevent something from being a WeakMap key?

KG: No. I'm just going to say no.

DE: So, knowing that, do we still have consensus on this PR? If we already kind of knew that, but that we still know it. Okay, great.

KG: I think this is consensus.

RRP: Have we explicitly asked for any objections to consensus here? [silence] No objections, thank you.

KG: Thank you for your feedback. I will take your editorial feedback into account and if someone else wants to explore adding this to userland later, go for it. I'm not doing that.

### Conclusion/Decision

- Consensus on the PR, given editorial tweaks
