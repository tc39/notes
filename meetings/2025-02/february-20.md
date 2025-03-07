# 106th TC39 Meeting | 20 February 2025

**Attendees:**

| Name             | Abbreviation | Organization        |
|------------------|--------------|---------------------|
| Chris de Almeida | CDA          | IBM                 |
| Samina Husain    | SHN          | Ecma                |
| Eemeli Aro       | EAO          | Mozilla             |
| Daniel Ehrenberg | DE           | Bloomberg           |
| Daniel Minor     | DLM          | Mozilla             |
| Ujjwal Sharma    | USA          | Igalia              |
| Art Vandelay     | AVY          | Vandelay Industries |
| Jesse Alama      | JMN          | Igalia              |
| Ron Buckton      | RBN          | Microsoft           |
| Nicolò Ribaudo   | NRO          | Igalia              |
| Kevin Gibbons    | KG           | F5                 |
| Oliver Medhurst  | OMT          | Invited Expert      |
| Luis Pardo       | LFP          | Microsoft           |
| Dmitry Makhnev   | DJM          | JetBrains           |
| Linus Groh       | LGH          | Bloomberg           |
| Philip Chimento  | PFC          | Igalia              |
| Erik Marks       | REK          | Consensys           |
| Chip Morningstar | CM           | Consensys           |
| Aki Rose Braun   | AKI          | Ecma International  |
| Istvan Sebestyen | IS           | Ecma                |
| Michael Saboff   | MLS          | Apple               |
| J. S. Choi       | JSC          | Invited Expert      |

## Decision Making through Consensus - take 2

Presenter: Michael Saboff (MLS)

* [slides](https://github.com/msaboff/tc39/blob/master/TC39%20Consensus%20take%202.pdf)

MLS: This is a meta conversation, meta discussion. How we work. I presented this at the February meeting last year, so I guess it’s an annual thing. Hopefully it’s not forever. What I would like to talk about is consensus, basically how we work as a committee. So some of this is a review from last time. There’s a few different definitions of consensus. It comes from the Latin word consensus that means agreement. A generally accepted opinion or decision among a group of people, the judgment arrived at by most of those concerned and a group solidarity in sentiment and belief.

MLS: And since TC39 is part of Ecma, what do Ecma bylaws say about consensus? It’s interesting that the bylaws are actually silent about what consensus is. These are the three rules that you find in the Ecma—there’s bylaws and there’s rules. There are three rules by decision making and talks about simple majority and should not use voting unless it’s required and this is not something for us but the member of after TC has the right to ask for a minority report which they shall provide to be included into the semi-annual report. The interesting thing, these rules exist and all the other TCs and TC39 as well work by consensus, but in all the other TCs a consensus is basically the generally accepted view kind of policy. I think that most TCs do not regularly take votes on things. So what I’d like to do is look at our practice and then talk about it and see, you know, if there’s ways to possibly change this. So for mostly most cases we follow the notion of general agreement. We see that at this meeting and most meetings. After most discussions the moderator will ask do we have consensus or explicit support for Stage 3 of this proposal?

MLS: And we look for delegates that either, you know, support with thumbs up or see it in TCQ and don’t need to speak, I support this. And that seems all well and good. That’s really good that we are able to operate that 9X% of the time. Occasionally someone will speak up and say I withhold consensus and give a reason as to why they withhold consensus. And that makes the process one of unanimity. We must all agree and sometimes we agree by being silent, but we must all agree for something to move forward or for something that we are discussing to happen. One dissenter blocks consensus. And that’s what I would like to talk about today. There is a truism that a single person with holding consensus is basically we call it a block. It’s a veto. We’re vetoing something. A single member of the committee has the power to decide what we do or actually in most cases what we don’t do and that’s what I would like to see if we can change.

MLS: So here are some of the issues that I have with the current process. If my observation that withholding consensus is generally used by a small number of committee members, I would add that those who whohold consensus or block are typically more vocal and longer serving members and feel comfortable to speak up. Certainly we have members served on the committee for a long time and prominent in the JS world and know JavaScript and the committee and the language and things like that. But the committee as a whole is seeding greater authority to this small group of people.

MLS: And there’s actually been cases although rare where a single blocker has ended the discussion of a proposal, basically shut that proposal down. And there’s also been cases that I’m personally aware of that somebody that has been blocked has stopped attending. They don’t attend TC39 anymore. Now, I want us to consider as a committee—I can’t remember who I was talking to. I started attending in 2015. It’s hard to believe that nearly ten years has gone by. But I’m considered a newcomer to the committee. And they view this single dissent policy in action. For some it might energize them. Look at the power that I have if I don’t like something, I can block it. But it’s probably more the case that someone is checking out TC39 for the first time for a few times, they look at how the committee operates and it would turn them off.

MLS: There’s different personality types. I’m willing to speak up and get involved in the argument, but there’s other people that are more timid. And somebody like that that wants to bring a proposal, they can be put off by our single veto policy.

MLS: The last thing I want to point out is that we need to acknowledge that our lone veto policy can hurt the relationships within the committee. Yes, we have competitors in the committee, I work for one of the browser vendors, and there’s other browsers that are represented at every meeting. And, you know, my company may see a slightly different view of how JavaScript should do its evolution and we have to come together from the diverse backgrounds. I work on the JavaScript engine and I write some JavaScript and it’s mostly test. I’m a C++ programmer. I need to hear what JavaScript developers want in the language. So we have to come together for the benefit of the whole community. That’s developers and implementers. Now, I don’t want to impugn at all the motives that someone may have in blocking someone although they may think there are past instances to question the motives of specific instances. For me it’s the impact of having a single person being able to block. So our current veto what I call power versus supporter power. Somebody who supports something versus somebody who supports it that basically one veto is one block.

MLS: Facetiously I said let’s put it in JavaScript. We understand it or should. This is a way of representing how our current structure works. You know, each delegate has the same quote, unquote power when attending a meeting. Collectively we’ll call the total power of one and so you divide the delegate power is a fraction with the denominator is the number of delegates. But the voter power also has one and the denominator is the number of blockers. And so as soon as you remove a blocker from a supporter from the number of supporters, you’re going to—the vetoes will win. And this maybe is more advanced than JavaScript needs to be. If the number of vetoes is greater than zero, the motion is going to fail, whatever it is. I do want to point out at this point that according to Ecma bylaws, only delegates should be allowed to vote. An invited expert, I don’t think, should be considered as somebody who is blocking. We’ve been generous in that, but I just want to point that out and that’s maybe a separate discussion to have.

MLS: So what I’m proposing is that we have a policy where we need 5% of delegates to block something with a minimum of two. If you have 40 people, 5% is 2. So less than 40 people and we typically are more than that. But less than 40 people, I would think that 2. Why did I pick a minimum of 2? My theory is that if I was to block something on some kind of principle that I would be able to convince at least one other delegate that’s attending that my reason for withholding consensus or blocking is reasonable and they would support me. If I can’t do that someone can’t do that, then I think that that’s a reason why they shouldn’t be able to block.

MLS: So once again, I put this in JavaScript. This is a set of instructions that describes this. But basically, we give what I call the power of a veto versus the power of a delegate, that they’re equal and that we do it based upon some percentage. Like I said, 95% or more of passing, then something passes or 95% or more of those that support something that they—that it pass and less than that that it would fail. So this is basically my proposal. And I haven’t—I put 45 minutes. I expect there will be a lot of conversation. Translating this back to English, this is what I propose is that to block or what we call withholding consensus, we need 5% or a minimum of 2 vetos and which ever is greater to block something. So I don’t see the queue in front of me. But let’s go to the queue and let’s have some conversation.

USA: Reminder that we have a little over 30 minutes. So let’s navigate the queue accordingly. If you permit, I’ll start in order. First we have JHD.

JHD: Yeah. So your presentation is two parts: The problem and the proposal. I completely agree with every aspect of the problem that you described. I wanted to talk a little bit about the benefits of our consensus process in that I think that we are one of the best functioning standards organizations out there based on my experience in others and conversations with folks who have had experience in others. I think that is because our consensus process assuming everyone is always in good faith, our consensus process ensures that all of the—what’s the word I’m looking for? Each of us in here represents some percentage of the ecosystem in some way. Hopefully we have a hundred percent of the ecosystem covered in this room. That is probably incredibly wishful thinking but hopefully it’s at least approaching that and that’s the goal. That does not mean that everybody in the ecosystem has a conceptual representative in this room, because we don’t have hundred percent. But the hope is that that is the case, is that even if only one human in this room conceptual represents someone, that person has the voice by proxy. The consensus process ensures that majorities can’t overrun the minority. That of course resulted in spec designs that aren’t ideal at times, I think most of the time it has resulted in better specifications. And especially in general for language assigned, but I think especially in JavaScript with web compatibility to be concerned with, the much higher priority than getting things shipped is not shipping the wrong things in the sense there’s that quote in software engineering no is temporary and yes is forever. It is safer to say no and iterate and think than say yes because we can’t walk it back. That’s conceptually true in majority of scenarios you can’t walk it back in the company’s product or software product that is installed with a versioning system. And node, for example, have major versions and break things and drop things. That doesn’t mean that they can actually remove stuff if enough people use it. But in JavaScript in the web, like, you know, the threshold is much lower for something to be unremovable. So I think we should acknowledge that even though all of the problems you describe are real that there are a lot of benefits in that it makes sure that we go—I was reading this quote the other night, actually. I think it’s from the navy slow is smooth, smooth is fast, and I think consensus helps us go smoothly.

MLS: Let me counter with a couple comments. I’m advocating for consensus. We don’t have consensus. We have a single veto.

JHD: Sure. Let me rephrase. Unanimous consensus, hundred percent consensus.

MLS: That is unanimity.

JHD: Yes.

MLS: As far as us being one of the more smoother operating committees, I would disagree because—and you’re probably aware, there are instances in the past where are our single veto has been what I would call a code of conduct violation.

JHD: Absolutely.

MLS: Okay. And that’s not acceptable.

JHD: I agree.

MLS: Okay. And then I go back to the point that if I want to block something, I should be able to find one other person present that would agree with me even if they’re not from the same, you know, faction of or resonating the same part of the ecosystem, they would agree with me on principle that, yeah, you’re probably right.

JHD: So I would agree with you except that one of the problems you cited is not everyone has the personality type that they want to stick their neck out and speak out. Those very people are going to be the ones that are not going to be standing up in solidarity with the otherwise lone veto. In fact, in practice, even this room that is arguably skewed towards people who will speak up, there are a number of times when I have been a lone veto and had three or four people privately tell me they support what I’m doing but they just didn’t want to speak up because there was no need. Maybe this would create the need for the second person to speak up or whatever inhibited them from showing solidarity in the first place would still present itself and then a thing that should be blocked isn’t.

MLS: So I think it’s harder to be the first veto and it’s easier to be the second and joining somebody. I would hope that would be the case. Maybe we could work on that, that we promote people to do that. I find it a little frustrating that you had the instances where you block something and people afterwards in the hallway say I support what you’re doing or speaking up in solidarity or anybody else.

JHD: There’s lots of frustration including when I’m the one blocked by lone veto.

RPR: I’m really pleased to hear the agreements, the levels of agreement that we seem to all be—JHD and MLS acknowledging the same kind of problems, I would say I think I can speak from the chair group that we have seen those kind of problems as well. But I also want to speak to JHD’s point about the benefits of our process that in general it does seem that the overall process we have today works quite well. These problems that we identify in general I would say the points at which these become so problematic that they get escalated to the chair group happens roughly every say 12 to 18 months. So this is not an every day every meeting, every item. The point at which this comes to perhaps you might deem a code of conduct violation and there are all sorts of reasons when something is so outrageous that people want intervention, I think that’s more on the less frequent, that perhaps Michael what we’re trying to discuss here is something that is –

MLS: I say this I don’t think we had a single blocked decision that I can recall. Maybe we have. But I think we have been following consensus what I call true consensus this meeting.

RPR: This meeting worked well even in cases where only one person said they’re blocking, we have felt that was representative of a…

MLS: Yeah.

RPR: Thank you.

SYG [via queue]: Can you speak more to "smooth", comparatively to other bodies?

JHD: I’m not talking about the feelings and sentiments of those in the room. I’m also talking about the quality of the APIs produced.

SYG: I was wondering about like an occurrence or something, what do you mean by smooth?

JHD: So I’m looking at the time spent beyond just the development and implementation of a feature but also the adoption, education, and usage of a feature over a long period of time. And I think that JavaScript has a better track record with those things than other bodies that I have seen or experienced.

SYG: What is another body like that?

JHD: I don’t want to be too specific about the things that I’m maligning because I’m trying to be diplomatic. But, you know, the favourite example that I already stated publicly in the past there’s a can play audio API on the web that returns the string, probably the string maybe or false [https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType]. And I haven’t heard anyone ever defend that API and that’s a tiny example which is not comfortable mentioning.

SYG: By smooth, you’re judged quality of the output of a committee?

JHD: Including that. I’m including the smoothness of uptake and usage and understanding of it and sentiment of the community of it over time. In other words, I’m suggesting even though the current process produces frustration and inner personal tension in this room, that while I would welcome a better alternative, I think that it produces—that the trade off is that the world suffers less in return for us suffering a little bit more.

NRO: MLS already said this, it’s true it’s difficult to block right now. If we require more than one block, then being the first person blocking and second person of support is much easier. I’m not alone in doing that. And my other point is you said no is now and yes is forever. That’s a nice sentence but not true in practice based on how we block things. Very often it happens that proposals get blocked or at least slowed down because they’re missing some feature like next person judgment on what you use it for but the example is branch X and say this proposal need to be rewarded because I need the work. And left the proposal to go ahead and that’s a temporary yes and if you had it now it’s forever. I feel like half of the time we block things it’s for things that actually can be fixed in the future.

PFC: I think JHD gave the example of being an objector to somebody and receiving messages privately later saying 'thank you for doing that, I agree, but I didn’t want to speak up.' I think when you publicly dissent or you veto something there’s a certain social cost that you pay. I’m not sure that the system we have currently makes that cost be paid by the right people. So I think it’s natural that you do pay a certain social cost. I think that’s correct. You shouldn’t just be able to veto things without any consequences all the time. But right now, let’s say if JHD vetoes something and other people would also like to veto it but don’t speak up, JHD pays the entire social cost and the others kind of get away with it for free. think a proposal like this, that would force those others to also speak up and share the cost, lowers it for everybody but also—like, I don’t see the problem that this would let things get through that shouldn’t get through. I just see it as the social cost would be borne in a fairer way, that’s my opinion.

MLS: Let me add a comment to that. I think in the proposal is blocked say to the next stage and there’s a lone blocker, the champions are going to go to the blocker and say what do we need to do to change? With what PFC said, now you have more people that may have different concerns that the presenter or the champion is unaware of and now they would be possibly more aware of what they needed to do to modify the proposal moving forward.

JSL: Yeah. I definitely think the proposal here is good. I would like a little bit more. A lot of times people say I don’t think this should move forward. That’s a statement of opinion. A lot of time we take that and interpret that as a block. I actually think we should make “no, I don’t think this should move forward” as a formal—more of a formal thing, right? You’re putting a motion on the table and then it has to be seconded by somebody. And that has to be something very explicitly stated I don’t think they should move forward. But even when the committee agrees to table this, the expectation from there is the champions will work with the folks that are blocking it and try to work out the solution and if they decide with the champions that there’s no path forward to resolve the block, then it’s considered the block. Then this thing is not moving forward. If they can work it out, the expectation is they will work together to figure it out. As the final stop gap, the chairs should be empowered and to be able to say, we have noted the objection, right, the committee seems to be, you know, not behind that objection, we’re going to move forward any way. There’s problems with every approach.

MLS: Yes, there is.

JSL: But I think if we formalize it better than just two, I think we will have a much better result.

MLS: I agree. My biggest concern is I don’t like the current policy. I think we should have something that has a little bit input from the committee to block things.

JSL: I will stress this is not unique to the committee. We have this exact same problem in Node.js. If we can solve it here, fantastic. I will take it over there too.

DE: Just to emphasize a problem that JSL said: it’s often ambiguous whether somebody is blocking. This really happens all the time that someone says “I don’t think something should move forward” and it’s ambiguous whether it was blocked or whether the presenter voluntarily took it back. Even if the chairs intervene and participate in the discussion, it’s ambiguous whether the chairs are mandating a procedural decision, or suggesting something that people voluntarily listen to. This allows us to have certain sorts of standing disagreements about what is actually going on procedurally in the committee. I really like the idea of JSL formalizing it some way or another and encouraging explicitness.

MM: So I use the queue a bit as an outline to remind me of all the points I want to make. Excuse me for that. I will combine them all. So we are a social process as well as a well thought out process. It’s important to understand and I think this is borne out by my experience on this committee that the systems that enable human cooperation, some of which are formal rules and many of which are social norm, and as far as what are the de jure rules we’re operating under, what are the game theory that follows from the rules and taken from themselves, you’re absolutely right this is unanimity. I think it’s valuable that we don’t label unanimity and that is overall documentation of the how we work does state a rule that is gainfully equal to unanimity and in the context of norms with a different flavor. The world unanimity has denotation and consensus has denotation and connotation. On the connotation we’re close to consensus. On the rule we’re absolutely close to unanimity. Specifically when there’s a lone dissenter, and I’ve been the lone dissenter on a number of occasions as you know, when there’s a lone dissenter, there’s a set of social norms that are very much felt by the lone dissenter, and I have often yielded sometimes enabling the committee to make what are in retrospect obvious mistakes that I wish I had actually not yielded like the override mistake. I was the sole dissenter there and under social pressure, I yielded and I wish I had not. I had been on the other side. I pressured WH to [?] SharedArrayBuffer. He was not. He was the lone dissenter. This is before we knew about Meltdown and Spectre. He has look ahead. We have been saved over and over by him as sole dissenter that everyone was on agreement on. I joined the committee during the worse political days of the committee where essentially everyone on the committee except for Doug Crawford initially as the sole dissenter everyone on the committee had wanted to move forward with EcmaScript 4 including all of the browsers. And then if we had operated on your rules, we would have accepted EcmaScript 4 and building on that and JavaScript would be as useful to the web as ActionScript is. Obviously we have made mistakes on the other side that speak to your side of this thing. But the point I want to emphasize is that the thing that overcomes what seems to be the simple game theory of unanimity is the system of social pressures and what it amounts to is that a strongly felt dissent blocks a weakly felt dissent given good faith operation is often overcome by social pressure and the person yields.

MLS: Do you want me to talk about that?

MM: Yes.

MLS: I agree with what you’re saying. The thing is the social pressure, we have to take into account different personalities that are involved in this social contract. And I would say that you have a strong—you have a willingness to speak up when you think of something is wrong or conversely when you think it’s right and others think it’s wrong. But I think that we have a disparity among those who have initiative in a setting like this. And I would put myself as more of a stronger—I’m willing to give my opinion, right or wrong at times, and so the social contract we have to assume that there will be variability among the willingness to restate positions.

MM: Absolutely. Variability in willingness to state and variability in willingness to hold to a sole dissent position and block under social pressure to the contrary and that variability is two sources. One is how deep are the genuinely felt good faith technical objections in one’s head whether they can articulate them or not and the other one is to what degree is the person responsive to social pressure? And there’s no way to separate those two.

MLS: I agree.

MM: Okay. So another part of the norms, not the rule, part of the norms that come from being a sole dissenter and I’ve seen this again over and over again, is that it’s kind of your responsibility to explain why you’re objecting. And sometimes it can be hard to state, because sometimes they articulate what are felt and turn out to be valid but still it’s a strongly felt social pressure to explain what the objection is because what you’re trying to do is empower—this is another thing that I think is really important. You’re trying to empower the problem-solving ability of the entire committee and especially the champions of who you’re objecting to, to figure out how to move forward by refactoring the proposal in a way that does address your objection. Because the objection is not to solving the problem that the proposal is trying to solve. I’ve never seen that. The objection is how the proposal proposes to solve the problem. And over and over again what happens when there is a sole dissenter that is able to explain why they’re dissenting, not always but this is by far the majority of the cases, is that the problem-solving process is engaged and often the proposal is refactored in such a way, you know, revised in such a way as to meet the objection and the proposal is often better for it.

MLS: So I would agree with you in the cases where the objection is dealt with. There are—you would agree with me, there are cases where the objection stops the proposal.

MM: Yes, absolutely.

MLS: Even though the committee believes that the problem is a problem that does need to be solved and I would stipulate that I think there are cases where we think that the proposal is aimed in the right direction. Maybe not perfect. So I think we need to be careful and be generous to say this give and take is good in all cases, because sometimes –

MM: So I think that’s again addressed best through norms not by changes of the rules which is it should be everybody involved, especially both the objector and the champions, should be reminded by the overall social system that the objection is an objection to the way in which the problem is solved. I don’t think there’s ever been a case where the objection was to solve the case for a lone dissenter or the objector was to solve the problem at all and the problem solving dialogue should proceed from there. Sometimes it can’t be solved.

MLS: I disagree that there are times in the past where it can’t be solved.

MM: I won’t debate whether that happens sometimes.

USA: I have a point of order. There’s around 7 minutes remaining and a lot of items on the queue.

MM: Let me just make two more points. One is the browser makers have a defacto veto anyway. And any rule like what you’re proposing does not solve the fact that each browser maker has a unilateral power to veto anyway. I will just mention ShadowRealms and decorators, they’re not—you know, if it were the case that all the browsers but one wanted to do it and one browser maker was saying, no, we will not implement it, the committee would understand it is worse than useless, it is counter productive to move forward to standardize it. So if the browser makers want to go off and have a collusion among themselves as to what they will implement ignoring the wishes of users of JavaScript, they’re free to do that. We can’t stop them. But they should stop pretending that their participating in an open process. Under the rule we have, we have an open standard process that empowers JavaScript users to have by the rules similar power as the de facto veto power that browser makes have.

MLS: So I don’t think this proposal makes that worse, right?

MM: Yes. Yes, it makes it much worse. It disempowers the community compared to the browser makers.

MLS: So the browser makers if two delegates –

MM: If one browser makers declares we won’t implement it no matter what the rules say, you cannot solve that problem. It’s dead if one major browser maker says “we will not implement it.”

USA: Maybe go on with the queue. MLS, if you would like to ask for consensus by the end, we should probably also earmark some for that.

DE: I don’t think that makes much sense.

USA: I don’t see why. There’s rob and Phillip have responses on the queue, for instance, but there’s –

NRO: There’s 13 items on the queue. We cannot reach consensus if five minutes about anything of this.

USA: You meant about that. No, I mean we have four minutes now. We can certainly not resolve. Michael, what would you prefer? Have you finished with your comments?

MLS: I hit the major ones. One more thing. This is something that I mentioned last time we discussed it but worth reiterating and it feeds into a point that JHD made, any rule system, the first time you propose this how to game it? Nine ways to game it come to mind. Given that any set of rules can be gamed, the real choice we have is if the rule has a pathological outcome because it was gamed, does it feel safe or feel unsafe? Because of this no is temporary and yes is forever, the rule we have got, the only rule that fails safe. And now I’m finished.

MM: Any chance expanding the time box?

USA: Good question. I think we are booked for today. But let me ask my co-chairs. Do you think that we could have –

CDA: It would have to be after lunch.

DE: We have the whole afternoon currently reserved for break out sessions that I proposed. I wonder if this could continue in a break-out session or we could also make an overflow item which is the whole group? I would be happy with either one. I think this is an important topic to continue discussion on it.

JSL: We did tell the transcriptionist yesterday we are finishing roughly around noon.

DE: We should 80%. I would propose break out session or plenary continuation.

MLS: I want the queue to be heard.

DE: Could we do that half an hour or hour eating out of the breakout session and everyone can go through the queue items?

USA: I think we should be able to do that. I think it’s up to you Michael if you would like it to be a breakout session alongside the other one. But I think you can talk to rob in person or us online and figure it out.

CDA: Is it possible in terms of helping make this decision, are the break-out sessions going to be limited to the in-person attendees?

DE: No. We will have people attend the break out session.

NRO: There are four people on Matrix asking for this to be a whole group topic than break-out session topic.

## Continuation: A unified vision for measure and decimal

Presenter: Shane Carr (SFC)

* proposals: [measure](https://github.com/tc39/proposal-measure/), [decimal](https://github.com/tc39/proposal-decimal/)
* [slides](https://docs.google.com/presentation/d/1050DHlNOzcN-8LqJQ_6z8j-LryXgEqOcLfcVzkhJyEk/edit#slide=id.p)

SFC: So I prepared these slides based on some of the feedback that we have received when we brought this up earlier in the plenary and reviewed this with the champion group and will be presenting this today. So let’s go ahead and get started. First thing, this is a great time to go ahead and do a mini announcement about a delta that we have made based on feedback from primarily EAO and others about the name of this type that was in the presentation yesterday called measure. Amount and why? It is both current and currencies and strongly suggests it is approachable and lightweight. I will be using amount instead of measure for the rest of the presentation. One thing that I feel we missed a little bit about yesterday’s presentation is we weren’t aligned on what is the scope that we’re proposing with the type called amount. I want to talk a little bit about this. I wasn’t at that time prepared to answer. I prepared the answer for it now. Why do we need amounts? Why is it motivated? Why is it important to have?

SFC: I went ahead and prepared a slide to summarize some of these key points. So one is it represents the thing that many developers frequently have that is a number appear with a unit. By representing this, we can do things like offer useful on and what we can do on the data model the better we can do. The second problem is it fixes some certain specific item or problem that we have because if you take this thing and you use it in multiple different formatters, they all need to know about the identity and the nature of that thing in order to do the correct behavior. I use the run don’t zero problem all the time when I give the presentations. The amount proposal addresses that problem by using the same type of plural rules for example. Three Is that it is a prerequisite for the messageformat proposal medium term. There’s some concern we’re working through.

SFC: But the messageformat specification recommends that they have this type in the data model because when things get shipped and then formatted, it’s a very common source of bugs that message will say this thing should be displayed in currency USD but all of a sudden when you go some other country and then it’s some other currency, the number gets displayed with the wrong currency and bad things happen. So the messageformat recommending in the data model and the fourth is smart units proposal. I annotated that longer term. We don’t have full agreement on whether this is going to go ahead and land. I wanted to put it here. It is also one of the points of motivation for having a separate type because it means that the smart units proposal will be much more narrow in scope. This reached Stage 1 at Tokyo TC39 [2024-10]. We agreed as a committee that this was a problem space worth exploring. So hopefully that answers some of the questions about amount motivation.

SFC: Another thing that we didn’t really discuss yesterday in the presentation was about what is amount and what is it actually look like? I drew a strawperson example here. On the left side is what you can currently do with an amount. If you have a value and currency, you have something like—let’s say it comes from some external source. You might have something that looks like this and come JSON object from the server or something like that. And then you plug it into the Intl number and this is what you have to do. You split it apart. The currency goes here and the value goes here. If you have precision, that also has to go here. And then you get the formatted value out and hopefully it works. This is error prone. I have evidence it’s error prone. Hopefully that’s pretty obvious to people in this room. On the right is with amount. You trigger amounts and comes from some external source. Now you have an actual amount object that follows the protocol and then you can pass it into Intl NumberFormat directly. There’s no possibility that currencies and values and units and things get out of sync with each other. So this is what I mean when I talk about amount.

SFC: I also want to talk a lot about scope. I feel like a lot of misunderstanding yesterday about the scope of what I mean when I’m saying amount. The scope that I’m talking about is it’s a data type that represents the following: Numeric value and the precision of the ville and the dimension which could be a currency or a unit of that measure. And it’s being proposed as opaque type. The exact representation of the numeric value and the precision and currency of the unit are questions that the champions will answer. What this committee needs to know this is in the data model and nature of the data model. The exact way they are represented, the discussion we will have in future meetings. Some of the functions it can have definitely in scope, it should have a from or some type of constructor to be able to build it. Also have a to locale strong to use it for formatting. Maybe in scope the ways to get the value out and maybe an equal function and add subtract, maybe, maybe not. I imagine add subtract that actually not make it in and serialization may or may not. You have to build it and use it and format it with the localized string out of it.

SFC: What I’m definitely not proposing is unit conversion. We’re saying that amount is way too big in scope. I’m proposing it not with unit conversion. This is a natural place that unit conversion could be added if the future. I’m not proposing unit conversion at this point in time. Another question that was raised that I wanted to discuss a little bit about polymorphic amount versus decimal amount. What I mean here is that an amount could be a type base that makes an arbitrary numeric type and number and decimal and BigInt and carries it with precision and dimension. It could be a type that always uses decimal because in order to interact more nicely with the decimal ecosystem. So my proposal for here is in order to basically not make this observable at this point in time and opaque enough to restrict to decimal semantics and have this flexibility moving forward. So basically try points on this question. Now I want to talk about decimal/amount harmony.

SFC: This is another question that I don’t think got adequately addressed yesterday. I really wanted to have more time to discuss it. Now I have my time to discuss it about why opportunity space that we have if we think about these proposals together with each other in harmony, what are some opportunities we have that we don’t have if we think about them in silos? So if we think about amount by itself as a silo, I think amount is motivated. It still solves problems by itself. This is the thing you might have. You might have constructor called dot from using the Temporal example. That’s a thing we could discuss later. But you have a dot from function and might take a value with thing with the significant digits like this and then you can use your NumberFormat for it and it will work. That’s fine. In fact, this constructor could work in the harmony mode. Again, harmony you can do on the right and still have the decimal and annotate it with things like precision and annotate it then with your dimension and then what you get the other side is amount that you can use for formatting. It’s very explicit what you’re adding to the data model and when.

SFC: On the right side is explicit. The first step is you project your number into decimal space and then give it the precision and dimension. I think that Temporal has given us a really great example of how this exact pattern can be quite successful at building very, very clean easy to follow and easy to debug programs by having for example you saw with the date and time and TimeZone and zone to date time. And that sort of thing work well. I think that’s an opportunity we have by thinking about Amount and decimal in harmony. It Tuesdays unified framework for JS to deal with numbers. This is a great opportunity to give developers of the language basically in the same way that Temporal solves or radically improves interaction with dates and times, this is a great way for them to improve the options with numbers. And also puts i18n front and centre that I care most deeply about. By putting the data types front and centre it means two locale strings and do localization out of the gate and not developers to split amounts and different places and so on and so forth and puts it right and centre so the right thing is the right thing.

SFC: What I want to talk about the next and open up the queue to discuss today is about the motivation for these proposals. I say that if we feel that decimal is motivated, if we also feel that amount is motivated, there’s no reason not to make them work nicely together. This is my position. I think this is pretty—this seems pretty obvious to me that if we think both proposals are individually motivated, we should make them work nicely together.

SFC: This is other page of notes and I can come back if people have questions. And harmony proposal could introduce namespace and I’m not proposing this one way or the other. And Intl name space? Maybe it could. That is a discussion we can have. Someone on that side of the table raised a question about rationals yesterday. Don’t currently have a plan to support that because of prior art and things, I’d rather embrace decimal as the data model and then the fourth the pack semantics of this. There’s intermediate type on the previous slide. I don’t think that it’s a good use of plenty time to discuss it right now. But it will definitely be something that comes up in the champions meeting.

SFC: This is the primary way I wanted to spend the time together, the remaining of the time box together, is to answer these two key questions. Is decimal ready for Stage 2? Is the amount proposed in the slide deck ready for Stage 2? We have spec text for decimal. The other decimal champions that worked together for the last year done a great job producing the spec text and it’s quite sound and solid. Amounts does not yet have the spec text. I hope to change that. Not next time we meet. But I want to get these questions. What are the remaining concerns we have about the motivations of these two proposals individually and if we can agree that these are both motivated, then we should look at how we can advance them and make them work nicely together? That’s what I would like to discuss today

KG: Give the example of uses amounts for formatting for Intl format, NumberFormat, can you talk more about what Amount does, what problem it’s solving?

SFC: This is the problem it solves. It solves the problem of the motivation. I can go back to this slide. Number 2 is an actual real concrete problem that it solves. In order to do things like reason out the plural form of the amount, you need to be able to know what the—you need to be able to know the entire data model of the amount including the number and precision of the unit and in order to reason of the plural form of the amount.

KG: I’m not convinced that this warrants a new type. I feel like it would be relatively straight forward to just make NumberFormat accept like an object that has a type and amount property and not like put anything in the language except to change to NumberFormat.

SFC: You’re advocating for a protocol-only approach and not a type approach?

KG: Yes.

EAO: Noting that one of the issues—one of the use cases for decimal in particular is that it is solving is that currently we have decimal libraries and user space and when they go through JavaScript and need to communicate between each other using something like a string to present the Number can be problematic for example because of concatenation and having something like Amount would also support this sort of a thing effectively providing JavaScript providing the way to represent numeric value without necessarily having a way to doing anything with the value which is of course what Decimal does. But the ability to represent a numeric value that is not representable by Number is a thing that Amount provides.

JHD: I think there’s intrinsic value in having authoritative thing that libraries and user code can use to inter operate with. However, I don’t think that on its own should be enough to motivate any addition to the language. I think that should be a sweet bonus that we get with something else. Otherwise, there’s hundreds and hundreds and hundreds of things we should add to the language. Pretty much any time two widely used libraries share an object—you know, share a data structure, sure, let’s add a new global, a new class and type. I’m slippery sloping it a bit. But I don’t think that needs to be sufficient and I can wait until my other queue item before I say more about it.

SFC: I will reply to that thread which is this that I don’t buy the slippery slope. There is a problem in the i18n space and there’s an opportunity to solve the problem. I think if there’s cases of common data types with the i18n value those should be representable in the language. I think this is one of the cases. There is a limited number of the cases. Temporal answers a very large percentage of them. This is one of the remaining ones that is not answered by the language in terms of objects that are able to represent things that can be localized.

NRO: This is not just communication that elaborates but one trying to communicate is built in on the language. That makes the difference of trying to communicate with each other. Already we have part of the official way that it should be done.

MM: Can you go back to the first slide of decimal and harmony. I missed Tuesday morning. My apologies. I want to understand the withSignificantDigits, the thing that that produces is not simply a decimal. It’s a new type which is decimal together with some kind of precision; is that correct?

SFC: Yes. I annotated that and calls it for the purpose of the slide decimal with precision. I note also two slides, three slides later, the last bullet point and the exact semantics are not decided whether it should exist or be named. There was some disagreement even among the champions about this. I don’t think this is a Stage 2 blocking concern but definitely something we need to discuss.

MM: So the thing that my question is, what is it about the notion of precision that’s introduced by the with significant digits that is in some way relative to decimal but not to regular quote unquote numbers?

SFC: The notion of precision could be used for other numeric types. We had an opportunity. I mean, this is me speaking personally. We have an opportunity with decimal given that decimal the IEEE decimal gives us a way to encode precision in the data model that sets decimal apart from the opportunities that we would have with other numeric types.

MM: So the notion that’s built into IEEE decimal itself is non-precision, it’s not significant digits, it’s not digits after the decimal point, it’s not error bars, it is number of trailing zeros, only zeros.

SFC: That’s correct.

MM: As far as I can tell, I know of no use cases for which that is useful.

SFC: That is useful.

MM: Instead of 1.0 if the actual numeric valueOf 1.11111, you would render it out all to all available—as deep as was needed to correspond to the underlying precision of the finest precision of the underline representation?

SFC: I would like to hear Nicolo’s response.

NRO: Whether you store number of digits or number of significant digits or zeros, regardless that the model represents, they are all equivalent. You can convert them with the—Regardless of whether you store the significant number of digits or number of digits after the dot or the number of zeros, they’re all equivalent representation of the same concept. You can convert between them just based on whatever you’re storing and the valueOf the number.

MM: Are you suggesting that our decimal precision that it is, for example, number of significant digits or numbers after the decimal point and then we’re enabling an implementation trick and we’re using what IEEE-754 considers to be the number of trailing zeros we’re reinterpreting that aspect of the underlying representation not to mean number of trailing zeros but instead to mean number of significant digits or something?

NRO: When I convert it, not just like if you need IEEE, there are three trailing zeros here, we can say there are six significant digits, for example.

MM: And then the rendering that we would do is to extract that from the underlying decimal representation and then interpret it as number of significant digits.

NRO: Yes.

MM: And then render it that way rather than rendering it according to the IEEE?

NRO: Yes.

MM: That’s interesting. That’s the first justification for this that I heard that makes sense to me. Thank you.

JHD: So the question I pose is what functionality does amount provide beyond being a built in container for multiple somewhat related values? Waiting, it occurred to me that perhaps an alternative name for this that will simultaneously convey my skepticism and its semantics is Intl NumberFormat options bag factory. It seems like that’s all this is, is it’s just a class for the purposes of wrapping an options bag to pass a NumberFormat. That doesn’t feel sufficient to me. Does it do more stuff that I’m missing besides that and providing an interop point.

[Slide: https://docs.google.com/presentation/d/1050DHlNOzcN-8LqJQ_6z8j-LryXgEqOcLfcVzkhJyEk/edit#slide=id.g3316773b416_0_5]

SFC: I’m putting up this scope slide because what I would like amount to become is this thing that also does these other thing that are listed under maybe and future. I’ll remove those from the proposal for now in order to seek consensus given there was skepticism about things like unit conversion being in there. Seems like removing unit conversion make some delegates why do we need this any way? And it’s an interesting point. I’m glad we’re discussing it. There’s a really good opportunity here to have things like serialization of these values, I think that’s quite compelling to have the equality of these values. Not just a NumberFormat factoring, it’s all Intl. Any object that can operate on these, not just NumberFormat.

USA: Quick point of order. Shane there is around five minutes left.

SFC: We got started about two minutes late. I would appreciate the extra two minutes if possible.

USA: Okay.

DLM: Just like to second JHD’s comment. I agree that what’s being proposed is a potential solution for problems with Intl NumberFormat and messageformat. But I think it’s the only solution. And I would encourage us to investigate other options as well that might not be quite as heavy-handed.

SFC: Are there any ideas that you have, any specific thing that would be less heavy-handed?

DLM: I think as JHD mentioned, an options bag would be one solution for Intl NumberFormat use case.

EAO: This is a little bit more meta. Given that the proposal formally only has one champion who is on leave, and it’s being worked forward within a larger group, I was thinking it might help a bit with a lot of shaping of this if at least Shane and possibly myself could be eventually recognized as champions of this proposal. My interest here is indeed the “opaque amount” level of defining this and further work from there ought to follow on in separate proposals.

NRO: I think it’s very—with BAN away for a while, we should have different champions. Like to have EOA and Shane and he will have more time. Have the proposal and talk with people about it. I would like it straight from you Shane.

SFC: I think it would be great for—if Jesse had more time. I definitely see myself as an adviser and put together slides. Point of order. We need note takers.

DE: This is good. I’m glad we’re getting more support for this proposal. Just to note in general, you don’t need to ask for anybody’s approval for add or remove and champion group can do this. Happy to have the people working on this.

MF: So it seems like amount is supposed to be covering this really broad association of a unit with some numeric value. Decimal is—I’m supportive of that proposal for the scope it’s supposed to address, but it is not so general that all values with units would be representable in decimal. KG brought up yesterday that it is common for non decimal rational values to have units and be displayed in that way. And you simply cannot store a third as a decimal of 0.3 repeating and have that be the same thing. These should be pursued separately and motivated separately even if they would be asked to work nicely with each other. But I don’t think that we should be limiting Amount to just like Decimals in this way.

USA: That was your queue.

SFC: I just want to give anyone else the opportunity to jump on the queue. There were two questions I was asking and one was about decimal and the other on amount. And we focused on the amount that was the newer topic that makes sense if you spend a lot of time there. I want to give anyone else the opportunity to jump on the queue for that.

SFC: Regarding while—if people are deciding to get on the queue, responding to the point about Rational, I hear you, I think a letter design is able to have Rational support here. I also think that the problem is not—doesn’t have a lot of prior art. And that’s not what I’m proposing at this time. We can talk more about that offline.

JSL: The way motivation for amount is worded here in the problems to solve, I think decimal definitely feels very well motivated for language amount. To me right now is way more appropriate motivated for Intl and discussions there. Just kind of where I’m feeling right now based on the comment.

SFC: This was useful discussion. I think we’re just about out of time. And the champions will definitely continue to, you know, explore can this work with the protocol only approach and then consider it. Okay.

USA: Thanks Shane and everybody else for participating in the discussion. We cut it very close. That’s great.

### Speaker's Summary of Key Points

* Some concerns about Amount being motivated if its only use case is Intl
* Requests to explore a protocol-based approach
* Question involving the representation of precision
* No delegate raised concerns about Decimal motivation

## Continuation: `Number.isSafeNumeric`

Presenter: ZiJian Liu (LIU)

* [proposal](https://github.com/Lxxyx/proposal-number-is-safe-numeric/issues/4)
* [slides](https://docs.google.com/presentation/d/1Noxi5L0jnikYce1h7X67FnjMUbkBQAcMDNafkM7bF4A/edit)

LIU: Yes. I’m going to start. Here is the problem statement for `Number.isSafeNumeric`. Just before last presentation, I received a lot of feedback and thanks to everyone. Here is a progress statement. The first slide has changes from the last presentation. Here are five changes we made. The first is clarify the motivation and the real problem. The second we remove strict format rules by default and align with ECMAScript and StringNumericLiteral format. The first is to remove `Number.MAX_SAFE_INTEGER` limits for value safety and add identification for unsafe numeric string and we have more questions for changes and feedbacks to look at GitHub issues.

LIU: Here I will start the motivation part. Currently we have focus on real motivation. It’s the string to number conversation may lose its original precision and integrity. Most developers are not aware of this problem because this problem exists for stack overflow and can represent everywhere. I think this is a potential risk for apps. And third is no reliable method to detect precision loss. Just compare with string value is affect by different problem. So we think we should provide a built in method and help developers to avoid this problem earlier and choose right parsing method. And the problem we are facing: The first is cross system value mismatch. In Alibaba built a mobile api gateway called MTOP calling HTTP API need use JS SDK and opener and go through after back ends and we have 100,000+ API and 200,000 backend serving and more than 1 billion calls per day. The problem is Java has the Long type whose numeric range may exceed what JavaScript Number can represent. And we have to convert all numbers from the back end to strings in the gateway and we have numeric value but in gate way we have to transform in the string due to the case. And in JavaScript every developer need toString number conversation manually and the bugs produced by precision loss happens every day. So every day I receive many new questions just for this value and error number to back end or whatever happens. So it’s the problem we’re facing every day.

LIU: And the second is sheets use decimal.js everywhere. DingTalk—you can think of them like Google Sheets—allow users to create table and numeric values stored as strings. And when they’re displayed to user or doing subsequent operations, like formula calculations, engineering teams need to do string-to-number conversation. Just because the string to number conversation may be precision loss, so the DingTalk sheets engineering team have to use decimal.js everywhere. For viewing the table, decimal.js add extra JavaScript bundle size and slow down for the first screen performance because we have to—we must load decimal.js first. So if a `Number.isSafeNumeric` method exist, for many cases, decimal.js is optional and dynamically.

LIU: The definition of `Number.isSafeNumeric` is not updated. For ECMAScript StringNumericLiteral format. For 123 and leading decimal points or trailing decimal points are accepted and the invalid for null and undefined and some format. So I think this makes it easier to not write duplicate code.

LIU: The next is value safety. The update validates the real-number value of the numeric string, and retains its original precision and integrity after being converted to a JavaScript number. Here I just list some examples. For 123 or numbers fall and max integer and smaller and max integer converted to JavaScript number and then using its original precision. Just for some floating numbers. And the examples, it’s where I tried to convert string to number, the numeric type is changed. This is invalid case.

LIU: And I just updated identification for how to define unsafe. In ECMAScript the number toString for nodes and if X is any number value other than negative zero, then `ToNumber(str)` is `x`. List definition if `x` is JavaScript number must be numeric string generated by toString. The `ToNumber(str)` must be `x`. And in our definition, what is unsafe? Unsafe means if it is numeric string and `ToNumber(str)` is code due to IEEE-754 double precision limits and ECMAScript round result, the significant digits of `str` are modified in conversation, it means `str` doesn’t have an exact representation of `x` due to modified significant digits. It can be converted back to the name numeric string that means unsafe. Here is a formula that I had before. It is just the formula and not implementation.

LIU: And also there is waiting for discussions. Better name for `Number.isSafeNumeric`? Currently we call `Number.isSafeNumeric` and we see the list can be represented with a better name. But also some people may make a better new name for the same behavior. And a new name like after double parse double input. This is waiting for discussion. That’s all. Any questions?.

USA: There is a long queue. Unfortunately not a whole lot of time left. But then I don’t know, if we can do a continuation of a continuation. But anyway, let’s start with the queue in the meantime. First there is NRO.

NRO: Thanks for presenting this again. I find motivation clear now. I believe the motivation is not actually about how numbers are represented as a float but just whether string contain a number is still not round trip and mean to humans when going through the float which I believe is also probably answers KG’s question which is specifically about how floats internally are represented. I have a question for you that is do you think if you had Decimal as a built-in in the language, this proposal, would it still be useful? To be clear, I don’t think we should clock any proposal going for Stage 1 based on another Stage 1 proposal? If Decimal proceeds, do you feel like this proposal would still be motivated?

LIU: Yes. I think even if Decimal is still useful because number is numeric just for the purpose of number is numeric is going to validation and when is written, it means you should choose a better parsing method. For you maybe BigInt and maybe use decimal.JS or proposal decimal and proposing decimal can solve almost the questions about that. But the validation method is simple and easier to check if a numeric string is valid, is still necessary.

NRO: My question is because I was thinking you would just not use floats. You would always use decimals if the numbers are not floats. I have a second topic in the queue for the committee. I heard yesterday some interest from delegates giving a presentation to how floats work. When we discuss this topic, we find we talk past each other because we have a different understanding how floats are. I’m not volunteering for this. I strongly encourage someone to volunteer to prepare this presentation.

KG: So in your examples, you didn’t include any strings which represent the exact decimal value of a float. For example, you have on the left 123.5678. The exact decimal number of the JavaScript number is some 40 or 50 digit abomination. If I wrote out that 50-digit number and 123.5678000079, whatever it is, would that string be accepted?

LIU: I know your problem. You mean if a numeric string contains more than 40, 50 digits, it can be accepted?

KG: Not just like a general string, but if the string is in fact the exact decimal representation of a JavaScript number, not the representation that you would see when you call toString by the exact decimal representation of the floating point number that JavaScript actually has internally, should that string be accepted?

LIU: I think –

NRO: I think I have an answer. And I think the answer is not the string should be rejected because then when you—the difficult conversion of the number to the string does not give you something that a human would read and say, okay, this is exactly the specific float value that was represented in binary format.

KG: So the point is not just that when you parse it to a number, it is still represents the same value, but when you parse it to a number and then serialize back to the string, the resulting string represents the same value?

SFC: Next on the queue. I discussed this a bit to pin down a little bit more exactly what the formula is. I made an issue https://github.com/Lxxyx/proposal-number-is-safe-numeric/issues/3 with the suggestion on the proposal repo that you can look at off line.

KG: Can you put a link in the Matrix?

SFC: I can put it in the Matrix.

PFC: Thank you very much for coming up with the problem statement and illustrated use cases. I found that very clear. I support Stage 1. I had some suggestions but you can skip the rest of my topic. I will post those on the issue tracker.

SYG: So the spreadsheet use case seems strange to me in particular the use case of if you can represent an input string as a float, then as you use it as a representation. But does that mean that you are also—like, it seems to imply to me that if your initial input happens to be representability as a float64, then you are opting into IEEE and operating on the number and, if it is not representable, you are opting into decimal arithmetic. Those are different worlds and seems world to me to make that decision on the initial input string. Like, why do that?

LIU: Because when last year we proposed Decimal, this is my first time to participate in TC39, the problem that I bring from DingTalk sheets is that I want to use Decimal to solve the decimal.js problem. After one year they have new—they found something that can be easily solved by number and numeric. And when you use numeric string, maybe decimal or maybe any other. So we think if we can replace some simple operations by just using number or number type or just JavaScript or types, it don’t rely on decimal.js, it’s a benefit for all system of capture and for the server proposed decimal comes to we write the code to use the proposed Decimal for less JavaScript on the side. So I mean it’s a progressive so you always choose the new technology that can help run better code.

SYG: What I’m saying is if you know the representation is represent—if the representation is safe, why is `Number.isSafeNumeric`—it doesn’t say anything about the operations and arithmetic and other formulas you want to do on the number later, you could still accumulate errors if you keep doing IEEE 754 arithmetic. Why is it okay to—it seems like a different kind of—like, why did the engineering team decide that it’s not safe everywhere, right? It doesn’t give you the safety property it seems like you actually want.

LIU: The engineer team said if the `Number.isSafeNumeric` method exists, it does exist, choose the problem. For many cases, let’s say it’s just like read only state or just read table or just shows on static or anything, decimal.js is optional and for some formula calculations or precision loss, they can load in decimal.js dynamically when they need it.

SYG: How do they know for particular operations if they need to load decimal.js or not?

LIU: Just for any excel, it has a define of precise sharing loss problem and means if the double is 15 significant digits are called precision loss. In this case, a number of 15 significant digits, they choose to use decimal.js and they use it for simply dividing it.

SYG: I will drop it there. I find it unconvincing, the safety stops just at the parsing. There is no kind of transitive safety property. Seems like the wrong kind of architecture. I would not recommend `Number.isSafeNumeric` for this use case. For storing and serializing JavaScript numbers I would recommend [?] but in this case I find it strange.

LIU: This case is just people who do not—this is just do not want to log extra library and they like to display—they don’t like to display wrong values. So if there is a list, this helps a lot. But if you mean errors, this must be solved by next proposed decimal or use some that is more library. This is engineering feedback.

KKL: Thank you to SYG for drilling in on that. In particular I agree if the range of expressibility values for a particular number are not—that if you do not really have a choice of whether to use the decimal if the range of expressible values can only be captured by decimal, I don’t think it is sound engineering. For my experience Uber has a JavaScript API gateway that received traffic and disseminates to Java, Go, and Python services and runs to—I’m extremely sympathetic with my experience to the problem that you’re having, I think that if I were to try to capture my own understanding of what the problem statement is in that domain, it would be that JavaScript—because it does not have identical numeric types to these other languages, that it is sometimes—it is necessary in many cases to resort to using the string to capture for example on 64 byte integer and datetime stamps and nanosecond-resolution time stamps and of course decimal as well. But I think that I would say that a solution to this problem would be of the form of JavaScript APIs for recognizing whether a string can be safely captured in a corresponding JavaScript type or returned to the string format for that type. I would expect a solution in that space to not be a single `Number.isSafeNumeric` method but a range of methods pertaining to specific numeric domains specifically strings that capture int64 strings, and strings that capture decimal, strings that are—but not strings that capture float64 since JSON can handle that particular case fine. So my hypothesis is that the problem statement is that we need to find a way to improve JavaScript’s ability to recognize value ranges like int64 and decimal that don’t have native representations so that applications have a more clear APIs for interacting with those values without loss of precision when translating them in and out of local representations and I submit to you that that might be something that we could make progress on in Stage 1.

LIU: Yes, thank you. I already consider with the proposal, I think maybe a group of method can help but I just choose one method because I do not know if a set of methods is too much or we should just use this. So I just brought one method and thank you for the feedback. I know how to do it next.

USA: Next we have a response from SYG where he says I find Chris’ serialization use case compelling. That was the entire queue. Would you like to ask for consensus again more formally? Let’s give a minute. I think we already heard a few folks mention that they were—happy to support Stage 1. But just to be clear, let’s –

GCL: I do not feel comfortable with Stage 1 at this time. It seems like there’s still a lot of unanswered questions about what the motivation here is. I think what Chris suggested is interested but is a fundamentally different proposal. And there’s also an active issue for this proposal about the motivation that is still going and I would like to see that go somewhere before we move further with this.

USA: I’m sorry. Who is that? Could you add yourself to the queue?

GCL: This is GCL.

USA: Apologies. On the queue, we have Shane, then.

SFC: I still think this is strongly motivated for Stage 1. And I think that the presentation illustrates some of those points. I think being able to reason about what is safe to serialize back and forth between the different data types is definitely a problem I experienced and a problem that I have seen others give themselves on and perhaps don’t necessarily agree what is a safe number and ask “please explain more”—means it is a complicated problem. The problem space is fairly clear, you know, the language needs—maybe the language needs some mechanism available in order to make this determination and the language currently doesn’t have a mechanism and if it does, we can support Stage 1. I definitely think this is the problem space is motivated.

USA: Next on the queue, we have a response from Ken.

KG: Shane, if you think it is not motivated, can you state what it is. I am still struggling to understand what it is.

SFC: Absolutely. You have a numeric like thing that is represented of a string and take the numeric like thing representation of a number and want to do so without losing any precision of the string and determine if it is safe to do that given that the space of numbers that represent both the number and smaller in the space than is represented more in the string.

KG: Does it mean to lose precision?

SFC: The value as projected in the decimal space changes across the operation.

KG: Rejecting 0.1.

SFC: 0.1 would be retained because projected the number back in the string space retains the original valueOf 0.1.

KG: Not representing it as the number loses precision but representing the resulting number as a string as precision?

SFC: Mostly, yeah. I wrote in an issue about the exact like more formal definition of that, but yes.

KG: Okay. I’m okay going forward with the problem statement of “I want to know if the string can round trip—can preserve its mathematical value round tripping through the number[?]”. That seems like a reasonable problem statement.

MF: That was the first—that description right there is the first time that I understood a problem statement for this proposal. It’s possible that that would make me okay with going to Stage 1 for it. I would like to see why it’s useful to know why you don’t like to change the mathematical value like a string representation of a float that’s derived from the string. But if we could do that, then I would be okay with Stage 1. Sorry that this was weird, but my opinion is changing on the spot.

SYG: I’m unconvinced for Stage 1 at this time. I think we moved pretty far from the initial—like, we zoom out, I think we have moved out from the initial motivation from LIU’s presentation yesterday about validation and about this. And I feel more unconvinced because one of the motivations here is this unsound architecture for doing arithmetic and numerical operations on decimals or floats. So I want us to have a tighter formulation here. Like, I think as a committee we have backformed something that we can understand and sounds reasonable to convince ourselves that we can go to Stage 1. I’m not at all convinced. That’s the problem that LIU is trying to solve and I don’t want to explore something that is the problem that they don’t want to solve and give them a thing to solve in an unsolved way that I’m worried about with the spreadsheet use case.

MLS: I have similar concerns. The motivating example here was input validation and it’s not going to help with the—you input it correctly, but it doesn’t help with further calculations. KRIS did talk about being able to send data between applications, and I think there could be the use for that. But I think we could go to Stage 1 but I think there needs to be a lot more work as to why this is—should be.

NRO: I think the motivation is not clear. And I don’t think it changed since yesterday exactly the example with mathematical variables in the slides yesterday. Maybe to help the committee would be useful to have more examples how to use this. Like, actual code examples of maybe having in your software where you show what it would need to do if the check passes this other thing and then you leave knowing what the other thing would do would help with communication in this proposal.. But I’m finding it motivating enough for Stage 1.

SFC: To add to the question of why would you want to do this: I mean, the simple answer is that f64s are more compact in general than strings. And often times when you’re storing in a database or something or sending over the wire, you want to send something as an f64 because it is a more compact representation. You want to be able to verify that the decimal value in your string is able to be round tripped through the compact floating point of view. I think that that is why you run the operation. I think the operation is sound and some problems need to solve and that’s why the operation matters.

SFC: I think I’m next on the queue. I think someone asked earlier doesn’t Decimal solve this? I think Decimal does maybe solve it. I think Decimal still does have a limited precision but it is able to represent—it could be considered maybe a better vehicle than f64 when you’re trying to serialize the strings to numeric type and might want to reach for decimal instead. I think there’s still room to explore how this problem could be solved in a Decimal state. I still think the problem space is motivated enough for an exploration phase for Stage 1.

MF: I’m now starting to understand this proposal is more about representation of a float as a string to a user. It seems like then this proposal will bring into scope some of the looseness we have about that representation currently. Assuming that we can fully define that space, that should be okay. It is also a bit weird that we sometimes represent floats not in decimal notation but scientific notation. That’s an arbitrary decision because we chose a certain number of digits that we thought would be okay like 30 years ago or whatever. And that really has nothing to do with this. That’s kind of a bit weird. I think it will be a stumbling point for this proposal. That would be stuff that could be investigated during Stage 1. At the moment I’m not opposed to Stage 1.

USA: Oh, you aren’t. I believe there’s still people who are opposed to Stage 1? Can we clarify that to see if there’s any path forward for Stage 1 in this meeting.

USA: Yes. GCL you’re on the queue.

GCL: I think sort of like MLS, I have heard some alternative problem statements that I think make a lot more sense to me than what has been presented so far. And if we were to iterate on those before coming back to make that what the Stage 1 consensus is asking for, that would be probably—like, I think I could see that being acceptable.

MSL: I’m not going to block Stage 1, but I think the motivation here is fairly thin. I think there’s some issues with what this API wants to promise. But I think that the bar for Stage 2 is going to be much higher unless there’s significant change, I don’t see it advancing past Stage 2.

SYG: I’m still uncomfortable with Stage 1. Like I said previously I find KKL’s motivation in the problem statement clear and compelling and happy to explore that. But I don’t want us to give Stage 1 to a proposal by coming up with a problem statement that we came up with for the champion. Like, if that is—if we independently reach that point, that feels like a different proposal to me. We should do that. And go through Stage 1 for that proposal instead of saying, “Oh, actually this proposal’s problem statement is this thing,” and then we advance Stage 1 for that.

USA: I see. So to be clear, SYG, would you withhold consensus for Stage 1 at this moment?

SYG: I would.

USA: Okay. All right, then, we don’t have consensus for stage advancement, but for the next time this comes to the committee, I would implore the champions to engage with every one that participated today and others in the committee and I think you could—you heard a lot of statements of support. So I think this could go to Stage 1 at a later meeting. Thank you LIU.

CDA: I was on the queue with a reply quickly. So I just wanted to state for LIU that it sounds like there is a path and folks are uncomfortable because they’re not seeing the unified vision of what the problem statement is, and so if you guys could nail that down between now and, you know, next plenary, then there’s potentially a path forward for this to advance to Stage 1.

LIU: Thank you, everyone.

USA: Thank you. Would you like to go to the notes and add a summary of the discussion that happened earlier.

LIU: Yes, thank you.

RPR: Specifically, maybe GCL and MSL might be able to contribute to the consensus summary.

### Speaker's Summary of Key Points

* Clarify the motivation and real problem
* Upgrade for value safety definition

### Conclusion

* withhold consensus for Stage 1

## Language design goal for consensus: Things should layer

Presenter: Daniel Ehrenberg (DE)

* [slides](https://docs.google.com/presentation/d/1Nj6E1h0SeyDGI3e8BQlATQeX-l6x4Jx7uGAM8XimfIM/edit#slide=id.g329dc435965_0_344)

DE: I want to talk about a potential language design goal which is that things should link. Here on the slides is a beautiful layer cake to illustrate that concept. The idea here is to bring language design goals explicitly to the committee for consensus so that we can establish a kind of a shared basis for doing design. This is something that YST proposed that we do some years ago. I think it’s a great idea.

DE: Concretely, the proposed idea here is that things should layer. You have sugar on top of core layering capabilities and layering, and most features are syntactic sugar. It could be a transpiler or npm module and that is layered on top and some are known and can be layered on top otherwise.

DE: I’m not talking about the JSSugar/JS0 made in previous meetings. That’s a separate conversation. I’m just talking about the single language JavaScript/Ecmascript that we currently define in TC39 should have a layering within it. More like a logical editorial layering rather than necessarily two languages. That’s a separate conversation. But still, it was good that that was raised because that gets at some of the underlying design points that are important to discuss regardless of whether it’s one language or two.

DE: So a question is, when should capabilities be added? I think the answer is when the capability is really the goal of the proposal. So an example is Temporal. Temporal adds two capabilities. It adds this higher precision access to `Temporal.Now`, the current datetime, it also adds access to the TimeZone database that the browser has, that JavaScript has. But most of Temporal could’ve been implemented as a library, as “sugar”, without any new capabilities. So Temporal has both sugar components and underlying capability components.

DE: Another example of capability that is maybe a little bit ambiguous is the temporal dead zone (TDZ) where `let` and `const`, the variable that defines throws and access before the definition is reached. This implies a new capability that is implicitly to efficiently perform this check which actually no one consistently succeeds at. When this feature was being designed it was kind of assumed that it would be possible for engines to optimize it out and we previously heard a presentation by SYG about the possibility of eliminating these checks or at least in certain cases. Is this a core goal of let and const features? I’m not really sure. I think the lexical scoping part might be more core, but the question of whether TDZ is core could go either way.

DE: There are other cases where capabilities would really be pretty accidental. And one of these, again, I’m stretching the meaning of the term “capability”, but this is kind of core to the argument, `Map.prototype.getOrInsertComputed`. This was a proposal from KG that this is coupled with the check to make sure that things didn’t go wrong with the structure during the call back. And effectively, even though this could be polyfilled, it requires kind of taking over things. It’s kind of a capability. We decided, no, this is not worth it. It’s not the core goal of the proposal and adds extra complexity.

DE: The other one I would call out is match where the match proposal includes currently a caching mechanism to make sure that properties and iterators aren’t read multiple times in multiple match statements that implies a new engine capability to magically make this sufficient. So it implies some capability to not actually create the map, but still do the optimization.

DE: So when someone expects the JIT to have a new ability to make things fast, that corresponds to a capability. But engines just aren’t magic. I’d actually say that build tools and bytecode interpreters have similar constraints and similar optimization capabilities in the general case. Sometimes they’re able to optimize things, but you really don’t want to have to rely on them.

DE: They’re not magic. Both systems aim for spec conformance. So some limits of build tools although some build tools can operate on the whole program, many of them operate on a per file basis. So they don’t have access to, you know, cross-module analysis. Often they’re working just within a particular function. But not always. Semantics of build tools are simple and deterministic. The semantics that they ascribe to JavaScript at least when you want to have the things that are supported across everything. When there are optimizations, they are mostly local and about preserving semantics, not creating—not changing the—not giving the statements meaning. Also meaning build tools are poorly funded, so it would be difficult for them to maintain a higher degree of complexity. So they have to operate at this simpler local level and they have to conform to the semantics. Bytecode interpreters need to do the same thing.

DE: JavaScript engines these days, at least the ones in web browsers, tend to be based on bytecode interpreters. There are some JavaScript implementations that are not of that form, but at least this is one environment that we have to make sure that the language works well in. So generation of bytecode is file-by-file or function-by-function. So it’s somewhat fine-grained. You know, pre-parsing makes it finer grains. It also cannot rely on this broader analysis. Even within that unit of granularity, it has to be fast and simple when you’re doing bytecode you don’t know with it and get complex analysis and have further executions and have them trigger JIT. And to get semantics it has to be possible to do that locally. Bytecode interpreters need to support all of the language, and we don’t want to go to some complex tier because some different language was used. Another reason that simplicity is important because more bytecodes mean more complexity downstream of the JIT and just more things to implement. This implies to me that syntax features should, when possible, desugar easily into the efficient JS and not rely on intelligence from either build tools or bytecode interpreters.

DE: And this leads the two possible statements for consensus; encouraging that things should layer and when capabilities are not the primary goal, we should do things that can be implemented in terms of other things. So for libraries, this is one possible wording that I haven’t wordsmithed it much and would be interested in your input. For libraries, you know, library features should by default be implementable accurately in JavaScript given the assumption of an original built-in environment, unless the goal is new capability. If a new capability is exposed this should be deliberate and well-understood. For syntax, by default should be expressible via desugaring into existing JavaScript syntax features and are completely accurate. And where desugaring is not possible we should understand that the benefit of this aspect of the semantics is worth its cost in terms of complexity for developer mental model and implementations. So I think we’ve mostly been designing in alignment with these principles but somehow it’s felt a little bit out-of-scope to argue for them directly.

DE: Sometimes, discussions in TC39 proceed with the understanding that we shouldn’t spend too much thinking about the tooling implementations because later there will be the native implementations. We’ve been using that argument for a while. In the JSSugar and JS0 implementation that was flipped on its head where it was raised that, you know, we shouldn’t put things in native engines because tooling could potentially do much more complex and advanced things. I don’t think either of these are true. We should go for features simple and possible and simple would be they would layer on top of other things. So thank you.

SYG: As a quibble for the previous slide or slide 6 to think about bytecode, you know my position on this, but I want to highlight for the room that from my point of view, the limits of—I agree with your characterization of the limits of bytecode interpreters that even the JITs and certainly bytecode interpreters are not magic, and from my point of view they are externally imposed by basically performance incentives that all the browsers want to be fast in particular want to be fast in loading. Web pages because Web pages are these ephemeral things and not long-running applications and exceptions exist, of course. Because of that, everything has to be—anything we do, any optimizations we do have to pay for themselves. If they don’t pay for themselves end-to-end to some naive parsing and execution, why would you optimize it?

SYG: That throws a whole class of optimizations and analyses out the window because of the pressure to compete on loading performance or else we lose users, et cetera, et cetera. Some of that I agree totally also applies to tools. A lot compete on the building, the actual running performance of the tools themselves. I hear people complain about some bundlers being slower than others and that’s the reason to switch to another bundler. It feels to me that that space is more open on the—in the ahead-of-time tooling space.

SYG: It is not externally imposed and tools could have a different goal of trading the performance of running itself with generating better code, smaller code, more optimized code or something. I understand that is not a space that a lot of the tools in the JS tooling space compete on, but it doesn’t seem like there’s the same kind of external pressure. If nothing else, this is what I see in every other AOT language space, right, that there’s a reason why a clang have and GCC has O1, O2 and O3 and use them for different use cases and not always competing on generating code the fastest. Sometimes you want to take the time to generate the most efficient code. Whereas we never really have that full luxury in the browser engine.

DE: It’s not always about execution time. There’s also the complexity of building and maintaining these systems and the need to compose them. I think we should consult the authors and maintainer of these tools when understanding what they could do in the future or someone has a new tooling effort that they’re going to spit out from different groups. We could work with them. These tools that are more advanced in the way that you’re alluding to, until they start existing, we should maybe considering the existing things. Regardless, I argue we shouldn’t just add features that work for either of these two cases. We could continue the queue. Somebody running the queue or am I supposed to be running through it?

NRO: Just every time I hear people mention how much JS code help, it is very difficult to do that because of JavaScript. People with browsers know this. You have the JIT and just assume this function will take a number. But then you need to bail out in some cases and go back to like the original bytecode. And cools cannot just bail out because the code is there, they cannot just load some different version of the code which means that the reason there are no tools available to these advanced optimizations even though people tried like I’m thinking of the—it’s not possible because of that unless you restrict what JavaScript your user can do. But it is some subset of it.

DE: Maybe the Closure compiler is another example of –

NRO: Closure has a lot of restrictions of what JavaScript can provide..

SYG: As a quick response to that, it is true that something typed or directed is generally infeasible as AOT optimization in JS but there are like we have seen in the innovation in the AOT optimization space that are impactful like tree shaking. That is not something that engines can do.

DE: Tree shaking is great and an example of optimization that doesn’t change semantics. That’s what I have as my third point under the limits of build tools. If we add language features where to get the right semantics, you need to do some advanced analysis, that’s completely different from an optimization that doesn’t change semantics, that you do some more optional analysis on.

ACE: I think tree shaking is great because it shows the power of when parts of the language are static where that really helps tooling. Yes, tools can also tree shake common JS but generally a lot of the offers enjoy tree shaking and more because there’s just not more static guarantees similar to word presenting the records and tuples, like syntax there was providing static guarantees. I think that’s very different. So I think not to pick on a proposal, but to pick on one, when we talked about pattern matching or any of those that add symbol protocols, symbol protocols are kind of the opposite of that in that even if you can see the class and see the adds the symbol, you don’t know if that method will be monkey batched with the completely different optimization unless you can be sure that the prototype is frozen, that there’s no static. It may be difficult that the prototype is frozen. I think there’s very—we’re not doing things in general, but there’s a big difference between the static parts of the language and the dynamic parts when it comes to tooling.

DE: Let’s have more statically analyzable things when it works out for the design of the thing that we’re working on. That’s another possible goal that we could document.

JSC: Just a quick question on the last slide’s statements for consensus for libraries. Scope-wise, the library features, you’re talking about standard built-in?

DE: Yeah, sorry. That’s referring to the built-in functions and classes in ECMA-262.

KG: So for the syntax statement, I have I guess two quibbles. The first that I’m not at all sure by default syntax should be sugar. I think that actually exposing new capabilities is one of the best reasons to add syntax. I’d like the bar for adding new syntax to be pretty high and sugar doesn’t usually meet it whereas new capabilities are most likely to meet the bar for being worth doing. So I’m not sure at all that I like to say that default—we should by default assume that syntax features should be sugar. A second quibble is that for the second sentence there, I think even things that are desugarrable, we ought to understand them to have cost in terms of complexity for the developer mental model and to some extent implementations and that is true whether or not it exposes a new capability like JSSugar.

NRO: When we talk about syntax sugar, do we consider for example the using proposal or –

DE: We consider that to be just –

NRO: That’s an example of something that is very easy to transpile.

DE: So I think there’s some kind of intersection of the statement that you’re making and the statement that I’m making that would be valid. Basically when we add new features, they shouldn’t – we should not add new features with random edge cases that make it harder to desugar that doesn’t have the case for that. That’s what I’m trying to say and don’t need to affirmatively state either way ant the valueOf sugar features.

KG: That sounds good to me.

DE: And using is tiny new HTZ and make it better, I would say no.

KG: It does. Have you been following the discussion about classes and switch statements?

DE: I wasn’t sure how to treat that in this presentation so I didn’t mention it, the details. That’s why I mention either past or future things. Let’s consider that to be a valid counterargument to those edge case semantics. It shouldn’t be that we say, well, you know, it can be done correctly in an engine and it’s fine. It’s an advantage if it’s more easily desugarrable.

KG: Yes. I definitely am willing to sign on a to statement for the future whose primarily end is not the introduction of a new capability it is best if it is pure sugar instead of sugar with some edge cases

DE: Great. So I think this leads to a clean refactoring of both of the statements or like when a feature is not motivated by adding a new capability, it should be expressible via desugaring with the existing JavaScript syntax features or otherwise the benefit needs to be understood to be worth the cost. I think that refactoring could be done for both of those statements.

KG: That sounds good to me. I think that we were talking about composite keys like speaking of modifying the semantics after every map object.

DE: Right.

KG: That is not a case of clearly desugaring and modifies existing things.

DE: It’s a new capability. I would consider these new capabilities, you know, even in these cases where it’s like, you know, you can express this in JavaScript. If you can’t express it well enough in JavaScript or well enough for the first one means you have to replace all of these existing things. For match well enough has to do with having to instantiate this extra map. So it’s not just about whether during during completeness-wise you could express it or whether it –

KG: Okay. With the understanding that something like composite keys would be a new capability and evaluating it on the basis of whether that is—whether the cost of the new capability is worth it in terms of developmental model and things that are not intended to be new capabilities, then we ought to ensure they are pure sugar.

DE: Yeah.

KG: I’m willing to sign on to such a statement.

DE: Awesome.

MM: So first of all, let me just mention that this conversation just now between KG and DE actually covered very well most of what I had to say. So I’m very much on board with all of that. I think the way to think about this is that everything is a trade off. This is not making any hard and fast new rule. What it’s doing is making explicit a certain additional preference ordering to take into account in making these trade offs. And in particular, what it’s saying is really demote substantially anything that is accidentally not desugarrable and that if it’s anything other than sugar, both—I’m phrasing it in syntax terms but it actually covers both. Anything that is not decomposable to the existing language should have good reasons for not being decomposable with the existing language. Now, I want to refine a bit the nature of the preference order. So desugaring can be more or less syntactically local. And I would add to the preference ordering that desugarings that are more syntactically local are preferred to ones that need a less local transformation of the syntax. I’ll give two examples. Generators, async functions and async generators are local to the function they occur in, basically doing a CPS, equivalent to the CPS transfer of the function they occur in, but unlike cooperative concurrency stacks, they do not cause a general CPS transformation to be even thought of as a gedankenexperiment for the program as a whole. A further less local transformations top-level wait that causes transformation of the module as a whole, the top-level of the module as a whole. And in both cases, I don’t expect implementations to implement it via desugaring. That’s another dimension of the preference order which is there’s two motivations for not accidentally defining something that cannot be desugared. One is efficiency. And the other one is making the fundamental semantics of the language more complicated. Because async functions and generators and top-level await can be desugared, even if for implementation efficiency reasons nobody would implement it that way, the fact that it can be means that there’s a certain level of fundamental semantics of the language that is not being changed by those concepts.

JHD: I think I will say the top-level wait can be desugared in that way.

DE: I agree that top-level wait can be read in both ways. It becomes a little philosophical. Ultimately this wording could be used as an argument if we were considering it again against top-level wait because the argument would go most people need further entry point and putting it in the nested module and that is for Bloomberg and reason for new capability. It does really change not how the module graph works –

MM: You’re correct. I will make it a counter factual example. I think you understand the nature of the example.

DE: I agree with all of your points. If anyone is familiar with theoretical linguistics, optimality is having the constraints and to the thing that is most optimal with that order. And I’m not sure if we should structure our thoughts in committee that way but a great way to think about it.

MM: I think it’s worth re-emphasizing something that I think you and KG agreed to which is having avoided accidental non-desugarrability, the requirements especially on syntax for both sides of the dichotomy things that can be desugared or things for good reasons cannot, the bar on both should be very high but for different reasons. Neither one is to be preferred over the other, which is both of them are to be preferred over something that can’t be desugared for accidental reasons.

SYG: I wanted to call out that there is attention—even though I’m very supportive of the direction that it would be nice to have standard libraries that are actually specified as literal JavaScript, that comes with a bunch of hooks, because that’s just how JS works and that is often in tension with optimizability and making things fast because more hooks means fewer guarantees. All the usual reasons. So maybe that’s reason enough that if we try to do this direction of design, that it’s reason enough to motivate more language features for robust code. Things like the motivation for getoriginals even though getoriginals is problematic for different reasons. But this is the same reason why if you look at the browser engines we all have weird little DSLs for writing built-ins even if they are self-hosted with JavaScript. If the minute you self-host you will discover that it is not a good idea unless you basically make a different DSL that looks kind of like JS.

DE: I agree it would be valuable if someone were able to solve the problem. I want to ask for conditional consensus on these statements with the reordering that we would resolve in more detail offline about—rather than saying by default, we’re instead saying, that, you know, for features that don’t add capabilities and then conversely when we add capabilities, it’s for reasons—so with the group of people who wants to participate in the consensus—on like the wording details, you could raise your hand or speak up later in the issue tracker and we could develop this online. Would people be up for that conditional consensus?

KG: Quick response to SYG. When I say desugarrable to JavaScript, I basically mean desugarrable to JavaScript assuming no one messed with the built-ins. I think that’s how most users understand it and how we should understand it to mean here.

DE: That’s what I wrote also.

KG: Where is the comment about not messing with built ins? Given the original built in environment.

DE: SYG clarification question.

SYG: So one thing that on the syntax side here, less so by the libraries, on the syntax side, it does not say anything about that whether something ought to be in a native engine implementation or in a tool. I don’t disagree with the general design of the statement for how we should design features, but are you implying as part of consensus here that by layering things this way then they ought to also meet the bar to be implemented natively in engines?

DE: We don’t currently define multiple languages. At the point when we get consensus to have multiple languages standardized by JavaScript, I think we could consider such questions. This is pertaining to the single language that we standardize.

SYG: I see.

DE: If engines are not going to add something, it won’t become part of the language standard. That’s our current practice. And we could consider other presentations about other proposals about changing that.

SYG: So I want to be very clear that if I give consensus to that statement about syntax, that if we design a syntax feature that is pure desugaring, that significantly lowers the likelihood that we would want to support it natively in engines. I don’t think that’s a bad design but that lowers – that kind of anticipates my bringing up again of two different languages.

DE: Great. I look forward to that future discussion. Under our current process, if engines refuse to implement something, it will not become part of the language. So I look forward to that future discussion.

DE: Could we have just five more minutes to go over the rest of the queue?

CDR: There’s only two items. One is end of message. MM says +1 on general direction and holding back on current wording.

DE: I would like to ask is this something that you want to iterate on the wording offline or confirm it at a future plenary?

MM: Iterating offline is fine.

NRO: What does it mean for us to have consensus on the two things? We have consensus when we advance the proposal, would we have a check saying of advancement and match this with the consensus process part?

DE: I don’t think we need more checklist items. Instead, this statement is an admissible argument next time something comes up for discussion. If someone feels a relevant point to bring up, they can say remember we agreed on this design goal. This is the reference point. I think this applies to –

NRO: It is setting a precedent in some way?

DE: I don’t like that wording, but sure. Do we have conditional consensus with the module off line? Who explicitly supports this. Chip and MM thumbs up and OMT and LCA and I think that’s consensus unless there is another interpretation.

CDA: Unless anybody speaks up in opposition.

DE: Any non-blocking opposition or points of concern? Points to think about?

CDA: Not seeing anything. All right. Thank you Dan.

### Summary

* DE argued that:
  * Most features should “layer” on top of existing features, and only some add new “capabilities”
  * When a capability is added, it should be because that’s the actual point of the proposal, rather than just being an incidental choice
  * When it comes to syntax features, DE asserts that bytecode interpreters are under similar constraints to transpilers. Both have faced expectations from people not involved directly in them that they could perform non-local optimizations reliably, but this is not the case. Instead, both benefit from simpler, locally analyzable/desugarable designs.
  * Proposal: Most features should layer, and the ones that don’t should be adding a capability for a reason.
* (Summary of main discussion points)

### Conclusion

* Conditional consensus on a modified version of the statement: Rather than asserting that there should be many sugar/library features, the design principle statement should focus more on the negative:
* When new features include new capabilities, this should be for a particular reason.
* This design principle is not an entry on a checklist or requirement for stage advancement, but rather a reference point for future discussions, a permissible argument in committee.
* Delegates to collaborate on GitHub to finalize wording, including review from MM, SYG, KG, NRO to ensure that it resolves questions that they raised

## Continuation: [Decision Making through Consensus - take 2]

Presenter: Michael Saboff (MLS)

RPR: I already clarified this with MM outside. But we already have precedent. In general, I agree with this point that we do operate with unanimity in the role and I think it’s also important that we have modified the process in the past to say that we can go forward even without unanimity in very narrow cases such as the clarification we made to what is acceptable when blocking Stage 4?

MM: Let’s not just have the discussion where we come back to Michael’s topic. Yes.

PFC: MM mentioned rules needing to fail safe, I think I would not say that the current situation is a rule that fails safe. I would say it is a rule that fails in an acceptable way to most of the people currently on the committee. That is one of the things I took away from MLS’s presentation. I think an example of that is this morning we talked about a number of examples of bad ideas where are somebody could have vetoed it but didn’t or was persuaded to yield. Those are valid examples and they stick out like a sore thumb in our memory because regret is a very strong emotion. But we don’t talk about the vetoed ideas that would have worked out great because that is just not something that we can know. You could call that failing safe, but I’m not sure I would agree with that. I just want to point out the negative ideas for which we feel regret are not the only examples of the process not working as we Intended.

MM: I don’t know how to read the queue. This is just—this is not from CDA but restoration of the previous queue, right?

MLS: Regulations made in the comment.

CDA: So I’m putting the individuals three letter acronym or two letter for those grandfathered in or else it looks like me throughout the queue that is not accurate. Next we have—did we skip ahead? Phillip now.

NRO: When we talk about requiring more than one person to block, we should consider whether more than one person means that two people from Bloomberg, for example, can get together and provide support to each other and whether we require it to be two different organizations so that companies that send one delegate are not at disadvantage compared to companies that send four or five. If you want this to be at least two organizations, then we should also consider cases like Igalia paid for Bloomberg working on proposals. Would they be able to decide together to block some things and Bloomberg is being asked to do so. This is not just as multiple companies here have financial relationships with other companies in the committee. So we need to be careful about this.

MLS: I agree with you. I have had conversations about this. I agree that we probably if we require multiple people to block something, they should not be from the same organization but we do have financial relationships that are not clearly known at times.

JSL: Agreeing. It does not work if they’re from the same company or from the same—or have that financial relationship. That’s going to have to be whatever new process we have here is that it has to come from somewhere.

PFC: I also want to suggest that when we think about changing the rules we build into the norm that we revisit the rule and see if it needs to be changed after some number of years. I see the current rules around vetoing as appropriate to a different time in the committee’s history and I suppose it’s appropriate that we revisit it now. We may come up with a rule that is not suited for purpose in five years, so maybe we should revisit it in five years. I would love to have a mechanism by which it just shows up on the calendars that we need to consider that, rather than somebody having to spend a lot of emotional and social labour to bring it to committee every so often.

DLM: I wanted to bring up the change we made a couple years ago and had local supporters for advancement than taking silence as consensus. I see this proposed change in alignment with that kind of makes sense to me that we should then possibly have two people vocally block consensus. I do think it should be two, though. I made the same point later in the queue, I don’t think the reason to make a 5% rule. I think 2 is probably sufficient. The other thing that is interesting is the point about financial relationships or delegates from the same company and if we’re going to require like a clear separation between two people to veto proposal then we should require the same rule for two supporters for it to advance.

SYG: Along the point about having active support, I want to give a framing that I’ve been thinking about especially with what has happened with decorators and ShadowRealms and the contrast between TC39 and something like WHATWG is that our culture of vetoes and blocks I think for many reasons not the least of which is the social and the emotional cost of being kind of the lone blocker I think TC39 operates more on a can we live with—sorry, if you think of a spectrum between we can live with something versus we are really enthusiastically supporting something and think of that as a spectrum the stage advancement in TC39 can kind of run the whole gamut and not got to that and workshop and compromise enough so that everyone can live with it and there is no strong active interest especially from the browser vendor to do a thing. And that kind of thing can still get stage advancement in TC39 whereas that kind of thing has a much lower chance to get stage advancement or agreement in a body like WHATWG and it can happen if a proposal advances to a later stage but is actually in the—nobody is really that actively interested in it but we’re grudgingly think we can live with it and if that is the state that the proposal is in, I think that is bad. I would like to—and I think that is bad. I would like to try to fix that with better process. But from where I’m sitting, it seems like the blocking culture of TC39 directly plays into us getting reluctant stage advancement. So if I can have input here, I would like to nudge us towards having more stage advancement means active interest.

EAO: Just what I noted there. I generally support the idea. But I think having two people support a veto is enough. The 5% part of the rule just seems way too complicated. And counting whether or not we happen to be over 40 people or whatever the other limits are require three seems unnecessarily complicated.

MLS: I can live with that.

JSC: There’s been talk about the social cost or the social pressure appears about being the first to announce they are blocking. This is not a formal thing. We have got TCQ here where a lot of people sign in using their identity. Just an idea is that we could have people report that would like to block a proposal and that it would show account of how many people are saying they would block. And if at least two people appear or however many meet the threshold for actual blocking, then their identities would become public on the part of like maybe the chair would review or something. So basically the idea is that your identity would not be revealed if you’re the only one who signals to TCQ that you would block. If you have another person who also signals that they would block, then you could reveal it together and perhaps that would mitigate this social cost or pressure of being the only blocker having—and being the first to announce that you would block. You will be able to see that someone else agrees with you on blocking. Basically the idea of perhaps we can leverage TCQ or something like that. In general for signaling, what SYG mentioned earlier on signaling general sentiments, I think we could make leverage TCQ to have people signal their general attitude or temperature towards proposals like I could live with this versus I would like to block this especially if someone else would also like to block this. I know that would get complicated with like delegates, like, organizations versus individual delegates or whatever, but that’s just an idea. Am I proposing this instead of the two-person block change?, asks LCA. I don’t think this is an instead. I think this would be we could use this if we have like the two people are needed to block, we could use TCQ to execute and to implement it by having—if there’s only person who would like to block, their identity would remain hidden but at least two people would like to block than TCQ would show it to everyone and the chair would reveal their identities to everyone because they’re blocking it. Does that make sense LCA?

JSL: I would modify that just a bit. About the secret block vote, and I don’t think the step of revealing the blocker is necessary. Using a tool like TCQ to at least take the temperature check of the room on kind of where are we at on this makes perfect sense, but it can also remain completely anonymous. It’s just like, we’re not very enthusiastic about this or this is something that for sure we want to—also want to render a specific question. If we are going to do that, you have to be able to have specific question and what is the temperature on the question?

JSC: We have temperature checks using TCQ with emoji from what I recall. Exactly like that. But I think it’s important to have it be shown with a specific question like would you block this? And have it remain completely anonymous. And positive, positive and following, and confused, instead of something like this, I would like it to be clearly “would you block this” and have it remain completely anonymous. I think that would be productive. Does that go with what you’re saying? And mitigate the reluctance of people to block, by giving information anonymously to people whether they would be the only one who would block it or not.

CDA: We have several replies. I just want to note that we have like a little over eight minutes left for this entire topic. So if people could try and be brief so we can get to the following topics, that would be greatly appreciated. So PFC.

PFC: I would be very wary of any sort of anonymous voting and would prefer that we only use that in situations where it’s absolutely necessary like voting on the chair group and maybe, say, personal safety reasons to keep your vote anonymous. I don’t think it should be done in the case of voting on proposals. My goal here is not to remove all of the social costs of blocking. I think you need to bear some of the costs and if you’re going to veto something, you have a responsibility to make clear why you’re vetoing it and do it in a convincing way. So it would not be my goal to remove that burden from somebody who wanted to block the proposal.

CZW: I think what I’m saying is related to PFC that what we have been doing is blocking and we need to work out how to unblock the proposal from advancing not just adding a +1 to block and without leaving a path to work out how to unblock.

JGT: Just sort of generally anonymous blocks tend to have a poor track record in political science in general. And so they don’t bring out the best behaviors in people. Often that social cost is helpful. So I would not—I’m sort of with PFC and definitely not want us to get into position where we enable it some anonymous person is holding things up. That doesn’t sound good.

JSL: I think it’s important there to understand what we’re talking about with the anonymous temperature check is not an anonymous block. Blocking would still have to be explicit. They still have to raise their hand. I want to block this. And I think it’s important to speak to there is social cost can’t just be like I don’t want this to move forward. If the proposal has been adopted by the committee and says we think this is something we should work on, then whoever is blocking advancement of that does have a responsibility to figure out how to unblock it. It’s not just I don’t want this to advance, it is I will work with the champions and figure out a path forward that does work that does advance the work of the committee. Otherwise, if that doesn’t happen or if they get together and they work that out and they still can’t find a path, then it becomes a committee decision on does this advance or do we park this? It’s not one person blocking it at that point. It’s the committee deciding, yes, there’s not a path forward. So, you know, we can’t define what the social cost is and part of it is you have to work to advance it within reason.

JSC: Just adding on to what JSL said. The concerns about actual anonymous blocking make sense. I’m just talking about having some sort of temperature check showing people, telling them if I were blocking, if I blocked, would someone else also block too and then you have to justify everything and whatever. If you know the answer yourself and can predict what the other is going to say…If you don’t want the proposal to advance, you don’t need this question or whatever. But it still could be useful, I guess, for other people who would want to. But if you already know you don’t want the proposal to advance, then you can just block it or whatever anyway. That’s all.

SYG: This to respond narrowly that the blocker should be responsible for moving the proposal forward another way. That doesn’t make sense to me. The blocker has an obligation to explain and articulate a reason why they’re blocking, but sometimes the reason is they don’t believe that this problem is worth solving or something. That doesn’t make sense to me whoever blocks then takes responsibility to advance the feature.

JSL: Might be that I misspoke. That’s not quite the approach. It’s the person that is blocking has a responsibility to try to find a path forward. A path forward does not mean necessarily advancing that proposal. It might mean you agree to disagree and this thing just needs to be parked and there’s no way to move it forward.

SYG: I see, okay.

MM: I want to recount a conversation that RPR and I had in the hallway that RPR mentioned a part of. Very much surprised me and moved my position towards MLS’s, which I did not expect. First I just want to mention the thing that came up here which is, well, it shouldn’t just be two people, it should be two people from two different—we should represent two different orgs and should be two different that don’t have financial relationships. That’s a perfect example of a slippery slope mechanism that RPR and I did discuss before we came to the interesting insight that let us in your direction. But I think that’s also worth recounting. Any rule can be gamed if the rule is just two people, if the rule is two people from two separate orgs I know how to game that. It would be harder but I would do it if I needed to for what I consider to be good faith reasons. I would simply not do any of this if I didn’t consider my reasons to be good faith. And then if it were two people from two separate orgs with no financial relationship, I know how to game that too. The problem is that every step of escalation of the rule to try to avoid some gaming problem causes the person who needs to block it for what they consider to be good faith effort to escalate their political manipulation to keep it blocked which creates bad feedings that causes the rules to be changed to escalate further and what you’re doing is every step of this is weakening social norms in the attempt to replace it with formal rules. A lot of why we’re working is because of the general good faith respecting of the social norms that we have written. We have written them in How We work. Many of the others are just sort of things that evolve in the air as a shared ethic and many we don’t know how to articulate, but we have good social norms and rules can start killing social norms by replacing it with what looks like politics that leaves a bad taste in people’s mouth.

MM: Okay. Now, the two weakenings of my position that take us in your direction that RPR and I came up with, once something has reached Stage 3, Stage 3 is explicitly a signal to browser makers in particular but to everybody you can now invest heavily in this thing because it will only be stopped for very extreme reasons. So weakening single veto between stage 3 and 4, I’m open to considering it. Now, what the particular rule is for weakening, I don’t know. And that would have to be part of the discussion. I’m not agreeing to any of the particular rules that were mentioned here. But I’m hoping to the idea of something weaker of single veto between 3 and 4 because of the magnitude of investment and therefore the magnitude of the cost if it’s blocked from 4. That’s one. RPR, please after I—you know, correct me if I’m mischaracterizing anything from the conversation.

MM: The other one is that rather than the objector having to get a second person to object, which I find unacceptable, instead what we came up with I think was very interesting. And I’m wondering in particular MLS your reaction to it that is the objector has to get another person on the committee to agree that their reasons for objecting are good faith. The other person might disagree – might support the proposal, might hate the fact that there’s an objector, but they agree that the objector is holding their objection in good faith. That’s an adequate block. If they can’t get one other person to agree that the reason is good faith, then we would have to word it carefully to not lead to politicking opportunities but I would be willing to say if you can’t get one other person to agree the objection is in good faith, maybe that is not an adequate situation for blocking.

MLS: I considered the social norms we have in place already included that but explicitly specifying that I think is good. Going back to your Stage 3 to Stage 4, it sounds like—and I think we already have the social norm as you increase in stages it should be more difficult to do that.

MM: But more difficult is right now just in terms of the norms, not in terms of the rules. And I’m willing to consider a strengthening of the rule against blocking. I don’t have a particular proposal that I’m prepared to agree to but I’m open to considering a rule change that would weaken the ability of a lone objector.

MLS: Okay.

MM: Am I getting it?

RPR: I think we have a few ideas and definitely the ones that you were saying were part of that. I think perhaps the slight refined version of that that I chatted with CDA and actually it came from CDA was that it might be—this kind of needing to get a second supporter to block might be something that because we only want to employ this in emergency situations and don’t want to change the general nature of the conversation, it might be something that came out after like a cooling-off period. So we would do it at perhaps one meeting later. At that point, we would then seek someone else to speak up in favor of the block and the degree to which they speak up in favor of it whether it is in good faith or something else. We could perhaps iterate on that.

MM: I’m unwilling to agree that the second person has to actually object.

RPR: Sure, yes.

MM: Even for a cooling off period. Except maybe during the 3 to 4 where I’m open to other suggestions.

DE: The comment is about this. We already established a rule for 3 to 4 by precedent during the class fields discussion where we said you can’t object because you disagree about the design during 3 to 4. It has to really be for, you know, implementation-based reasons. We had somebody saying I object. Or actually a number of people saying that and then we said, no, this doesn’t make sense. And we proceeded. So the thing is with our current veto-based process, we end up on this path of needing to at great cost to us all invent these detailed legalistic explanations for why we can do things. If we have procedures that were in extreme cases based on super, super majorities with the extra pauses (?), I think we would be able to get past these things without nearly as much strife. These things cause actual problems for us. Any way, the particular case of 3 to 4, there’s really no action to take. We don’t –

MM: I’m confused about the norm versus rule there. Somebody can say that they’re blocking for the reason that is considered to be legitimate and somebody who wants to block it can claim they’re blocking it for the enumerated reasons in the non-good faith manner. Is our current operating rules one in which a claim to block it for those reasons can be overruled?

DE: So, you know, this is—like, I was saying before about it, people have different interpretations what is going on with respect to blocking and procedural things in committee. It is ambiguous. Previously in class fields people claim I’m blocking and then it happened. So whether this was the chairs making the determination that it was ambiguous or meaningless or that being an emergent property of the committee is ambiguous. Maybe more the latter. At least I think that’s what the chairs might have wanted at the time. I’m not really sure. But we end up working on getting through these issues through a huge amount of extra mental effort and extra kind of case by case decision making and everyone worried about overstepping and it’s a distraction from the language design work.

MM: I don’t think it’s a distraction. I think that overruling, overcoming an objection should have a very, very high bar.

DE: Yes, agreed.

MM: And that the nature of the process we need to always be talking both about the rules and the norms and overreliance on rules can really be disruptive.

DE: Yes. So I agree completely with what MLS stated at the beginning which is what we don’t have shared norms here. We have different people who have different practices in terms of what they feel is appropriate for blocks. And this gives disproportionate weight to people. We have to really make sure that we can be open about all of the different concerns that everyone has and not overemphasize the concerns of people who feel more like blocking.

MM: The other aspect that I think is very much worth being explicit about is that each browser maker de facto has a unitary veto if the browser maker says we want to implement something, it doesn’t mat warm air the committee does. And in general on the theme of rules it’s hard to understand what makes TC39 part of its character that’s something I love is that TC39 itself has no enforcement power, the coupling between TC39 decisions and what anybody else outside of this room actually does is only through norms.

DE: This conversation is about getting those shared level playing fields communication and consensus determining practices. That’s what we—I think we agree on this. This very kind of philosophical point.

MLS: I need to get going. Please continue and put this in the notes.

LCA: I want to second MM’s comment on rules and gaming of rules. I hundred percent agree with you, if we come up with stricter and stricter rules about what is a valid detail, we will just whoever wants to veto will want to game the rules. Ultimately this will always end up being a case by case decision that the committee has to take just like it is right now. We may decide to do something about a veto and ignore it or we may decide to agree with the veto and not to ignore it.

RPR: I’m saying thank you so much for presenting this topic and all your efforts.

MLS: I enjoy the rich conversation that’s resulting from this.

LCA: I don’t think it makes sense for us to continue to escalate in any way because if we do that now, we have to do it again the next time somebody blocks it. It won’t change the ultimate thing that – the situation we’re currently in where every time somebody blocks and maybe a majority of the committee does not agree with the block, it ends up being a case by case decision that ends up with some people being upset.

REK: I wanted to make a comment regarding the notion of financial relationships between member orgs because it seems to me the spirit of the comment is about disclosing conflicts of interest should we adopt this role to have at least two blockers or whatever the number is. I would caution against trying to define like a particular notion of an outside relationship or a conflict of interest because it seems like that would put the blockers in a position of potentially improving the non-existence of a financial relationship and it also raises a lot of questions about what is a meaningful financial relationship or conflict of interest because for some of the organizations that belong to this committee, you can imagine that there are some trivial contracts or financial relationships that exist between them that committee members aren’t even aware of. So I would just like to generally caution against the notion of encoding specific language like financial relationships should we choose to adopt this process.

JLS: Just two points. One I just want to clarify because I said it a few times and others. I don’t think anyone suggested that seconding a block, someone blocking and someone else saying, okay, I support this block implies that that second person also wants to block. And speak to your point, mark, you’re absolutely spot on. It might just be that, yeah, I might disagree but I see where you’re coming from, yes, we can go through this more.

MM: The standard of somebody else agreeing that the blockage is in good faith is consistent with that same person voting to advance. So once again, denotation and connotation. Phrasing it as “I second the block” gets the connotations wrong.

JLS: Yes. One other comment with what LCA was saying and other comments adding new rules here should be the last resort. Adding new policies should be a last resort. Coming to find a policy to make this better, yes we can. Everyone will hate it but yes we can. It should not be something that we reach for now. If we can come up with a better social norm that we all agree to, that’s by far the better approach than devising new policy. I’m happy to help on devising new policy if we need.

JHD: I put this on the queue when MM was speaking. I think three to four is not where people are concerned with and I think that somebody gaming the rules in bad faith is something that we’re all concerned with. The social cost of objecting in good faith is incredibly high. The only reason this entire room doesn’t hate me because they all understand I’m arguing in good faith and willing to discuss and so on and so forth because I have been an objector many times and I have found it seems like the whole general state of affairs holds true with other objectors who I am present for side discussion about is that it’s generally understood and appreciated when frustrating lone objectors are still doing it from a good place. And that matters. That mitigates the social cost a lot. Therefore, someone arguing in bad faith, it will not take very long before that is transparent and the social cost of doing so becomes very, very high. And so far, I have not seen any nefarious throwing of bodies at—you know, bringing new people in to burn all the bridges until they get their way. That’s the only failure mode I can think of of what I’m describing. So I think assumption of good faith and as JLS and others have alluded to, making sure that if you’re an objector whether you’re alone or not, making sure you’re accessible and available for discussion of paths forward I think that mitigates a lot of the social cost. It’s still not going to be conducive to every personality type. I feel like most of the time this is a friction—has friction and frustrating but nonetheless a functional process.

CDA: We have +1 agreeing with REK’s comments from LCA and OMT. CM is next.

CM: I am very sympathetic to the concerns that MLS articulated. But I am also observing we have been, I think, reasonably successful with the current process for going on a couple of decades now. And I am nervous about the consequences of making major changes in that process being disruptive and destructive in ways that we cannot foresee. The discussion here—there’s been a lot of ideas that people have put forward, which I think were well intentioned, but feel like a lot of rules lawyering, to capture nuances by making the rules more precise or making the rules more detailed. I think these notions are sort of missing the point. I think we might benefit from clarifying the norms, in the documents about how we work and all of that being much more explicit or expansive about what the norms are, possibly evolving or articulating the norms in more detail, to address some of the issues which I think have legitimately been raised. But I am very nervous about making a change that turns the whole process on its head

AKR: Yeah. Yeah. I also had the feelings that CM mentioned.

PFC: The same thing I said before about rules that fail safe, and how that’s distinct from rules that fail in ways that are acceptable to people in this room. I think saying that we have a reasonable track record of success may be true, but it is also subject to survivorship bias. We have a reasonable track record in the things that matter to the people in the room. That’s a fair point. But I think we have not seen examples of things we know would have been good if they had gone forward, that were stopped by somebody digging in heels at the right moment. The thing is, the loss that is prevented and the gains that are missed are all ultimately hypothetical and speculative. But it’s often easier to foresee short-term harm than it is to foresee long-term benefit. And I think that gives some validity to the survivorship bias argument.

JHD: I had a comment there. I mean, opportunity loss is less bad, but ship badness. Another way to rephrase it would be, of course, I immediately forgot. Let’s say you have an idea that you—that was shut down because of problems that this proposal hopes to resolve, bring it back. If you are enough energy to do, if it’s a good idea, convince someone else. The only things I know of where some—I know something was a good idea and it seems permanently killed is when the people who had the energy and time to bring it back stopped doing so.

PFC: Yeah.

JHD: That is a failure mode, but, like, it’s—you can bring it back.

PFC: That’s exactly what I mean when I say that success is in the eyes of what is acceptable to the people in this room.

JHD: Okay.

PFC: Because MLS mentioned, people have run into roadblocks and then left. Those ideas aren’t coming back but we don’t know about them.

CDA: Sorry. We have SYG next.

SYG: Yes. Similar point. I think Jordan what you say kind of reveals that you prefer a certain disposition of person to be participating here. Like, I don’t think it is—this is something that MLS called out explicitly in being welcoming to new contributors and that kind of thing. Like the failure mode ought not to be super human persistence. That doesn’t seem like a good thing to expect of people.

DE: Yeah. Just agreeing with SYG. There are real serious opportunity costs. We do lose proposals because we—family are made to not feel welcome. This is kind of core of diversity and inclusion work that we have talked about many times in committee that I think deserves continued emphasis. People can be so people have limits. We encourage good work to be done.

CDA: All right. That is it for the queue.

RPR: Yeah. I would be happy to say summary notes, what we heard. I am not going to capture everything, but I think we have generally agreed there are problems to be solved here. Really appreciate all the different suggestions that have come in. We recognize this is a very delicate matter. And we really want to make sure that any suggestion, any proposal here, any cure is not worse than the disease. And this is something that the chairs have spent time digging into, thinking about the past and we are open to ideas. Not just here in plenary, but outside. And we are very happy to work with people who have energy and ideas for taking this sport. We are appreciative of the discussions we had here today that show some signs of light at the end of the tunnel. Does anyone else want to provide any summary statements that we have heard?

CDA: I guess I would add that I think we have heard, you know, of course this started with MLS’s slide deck and statements of the perceived problems. But I think we have uncovered kind of a broader category of problems. And potentially with a broader number of solutions. So I think we are all interested in things that improve our processes. So looking forward to continuous improvement.

CDA: All right. With that, that brings us, I think, semi—that’s through our scheduled topics anyway. How are we doing, DE on the breakout topics?

DE: We have 15 breakout topics proposed. I would encourage you to go to the breakout topics task. There’s a link to the Google form. Where you can vote for which breakout topics you are interested in. I think we can leave a couple of minutes and have a short break maybe for that. For voting. And then maybe we have time for 2 sessions. Or maybe it should be one session. Given there’s only an hour and a half left

RPR: So thank you, everyone, for participating in this week. I think it’s been a meeting to remember. Thank our hosts: Thank you, Michael and Kevin for arranging an excellent venue; it was a superb social, as well on the Tuesday night. These things take a lot of energy to organize and so thank you to F5.
