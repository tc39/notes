# 21 April, 2021 Meeting Notes

**Remote attendees:** 
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Robin Ricard         | RRD            | Bloomberg          |
| Waldemar Horwat      | WH             | Google             |
| Chengzhong Wu        | CZW            | Alibaba            |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Jordan Harband       | JHD            | Coinbase           |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Mattijs Hoitink      | MHK            | Apple              |
| Federico Bucchi      | FED            | Apple              |
| Michael saboff       | MLS            | Apple              |
| Shane F. Carr        | SFC            | Google             |
| Dave Poole           | DMP            | Apple              |
| Philip Chimento      | PFC            | Igalia             |
| Jack Works           | JWK            | Sujitech           |
| Istvan Sebestyen     | IS             | Ecma               |



## Move test262 requirement to Stage 3
Presenter: Gus Caplan (GCL)


GCN: Yeah, so I don't really have any slides. This is just kind of a discussion that I wanted to have with various people who are involved in this so basically something that has been brought up a few times in the past has been moving the requirement of tests. It's currently a requirement for stage 4 moving that earlier and I should stress. I'm not looking for any consensus or anything at this point. I just want to kind of get a feel for how people feel about changes to this. They might have that sort of thing and yeah, just kind of see what ideas people have. Yeah, so basically the main thing that is the main idea that has been floated that I've heard is moving the test262 requirement to stage 3 in its entirety and there are some pros and cons to that. I think the main thing that I've seen against that is just during the lead up to stage three, things can change a lot so having tests like In the test262 repo might be a lot of churn and effort for people so I don't think we need to like say anything that can create like, you know, having a PR open or having tests in the proposal repo maybe or just you know, that sort of you know open topic. So, yeah. I'm interested to hear what people are feeling about this. Do you agree with this, disagree, have other ideas?

FYT: I think for any changes if there's no reason to change there's a reason to not change. I would like to ask you to summarize at least (I don't know what happened before) what harm the status quo in other words why the thing now needs to be changed. I mean, could you at least present that I mean if they're no harm their dull no reason to make any improvement. 

GCL: Yeah, sure. So just from an implementation perspective. It can be difficult to start making an implementation, especially for some of these more complex proposals. when there aren't tests and it's not like we can't, you know write the code that does something but often there will be bugs in it or even worse. It behaves like it doesn't like crash or anything, but it might behave differently from how the champions intended it to behave and then those become web reality because stage 3 is about shipping things. And so we get these little quirks sometimes things aren't caught. Sometimes they are and it's also just you know more difficult to implement because you have to sit there and read spec text, which is not a very enjoyable thing to read most of the time. So this is mostly a thing for people who are in the implementation phase.

KG: The Temporal proposal was a very large proposal that did have tests before stage 3, and they put a lot of work into the tests. They are very comprehensive, which is fantastic. I am interested if any of the people who worked on that proposal can comment on their experience and whether it was a useful thing for the Temporal proposal to do and worth the cost of writing all those tests and keeping them up to date with all of the changes.

PFC: From my experience writing tests for Temporal we did have some test262 tests before stage 3, but they were actually not comprehensive at all compared to what they should be if we were to open a pull request to add to test262. Precisely the reason for that was because during stage 2 there was a lot of churn. At one point we renamed Temporal.Absolute to Temporal.Instant, and Temporal.DateTime to Temporal.PlainDateTime, etc. That involved changing hundreds of test files and if we'd had a more comprehensive set of test262 tests, it would have involved changing thousands of files, possibly tens of thousands. At one point it was my intention to develop test262 during stage 2, but we just had to abandon that because it slowed down everything to such a degree that it would not have been until maybe mid-2022 before would have been able to ask for stage 3. Another way to do it would be to develop a proposal in stage 2 as we've done now and then at the end of stage 2, freeze the proposal and write all the tests, but if we couldn't have stage 3 before doing that then everything would still be a moving target. People would still submit changes, and given the format, you would still need to go back and rewrite the tests. So I support the underlying idea here, which is that it would be nice if tests were done earlier. But I'm not sure that requiring tests before stage 3 is the best way to achieve that. If anybody has questions about the experience with test262 for Temporal, I'm happy to answer that. I do think that we were able to avoid these kinds of quirks that become web reality by developing a polyfill that was tested by many people and that included its own unit tests, which are not as rigorous as test262, but still with that purpose. I think that helped us achieve that goal even though now I'm still staring down the prospect of writing thousands or possibly even tens of thousands of test262 tests during stage 3. I hope that answers your question.

KG: Yeah, thanks.

LEO: Just a quick note. I understand it would save you time, but the complexity maintaining these tests usually when you have tests fo the complexities will be much lower than maintaining tests for syntax. I think I would probably have one of the overviews as well like people who worked on the tests for the class fields family. Even if they were done in stage 3 like some of the proposed especially for syntax there are lots of proposals for protest movements. I have more to say in like the time. 

JHD: I just want to reply that especially in a large proposal like Temporal there may even still be but there certainly have been discrepancies between the proposed spec text and the polyfills. So despite a polyfill being easier to maintain and test against than test262 tests, that I don't think is necessarily any more of a guarantee of correctness. So if it's easier, that's great, and that's useful. I just want to point out that that's like there are still differences there.

JHD: The other one is: the requirement we decided a few years ago was to make one of the stage 4 requirements be an editor-approved pull request into the main spec. The effect of that from my perspective has been that the time gap between “stage 4” and “merged” is much smaller, which is useful, but more importantly, the quality of specification text written by proposal champions from my viewing has gone up dramatically in the years since we put that requirement in place, and it has helped to surface issues slightly sooner. Since it's only a requirement within stage 3, that doesn't necessarily mean that it will surface issues before implementation - I'd have to take some dig up some implementations but I feel pretty confident I would find a few things that we found from the PR and avoided an issue in implementations. There's been a lot of usefulness and I think a lot of benefit. I think before that requirement, the number of delegates that paid attention to spec text who were not implementers themselves was a lot smaller, and now I think a lot more people are aware of it. So I would then expect that if we had a requirement - not to merge tests into test262 before stage 3, but to get them mergeable before stage 3 and only merge them at stage 3 - the effect that I expect from that is that the gap between getting stage 3 and getting implemented will be much smaller, because when test262 tests are merged my understanding is that it's much easier for implementers to import those tests and implement; but also I expected the quality of test262 tests and also the general understanding of how to write them will go up over time which may in fact help a lot of the legitimate problems that have been reported by test262 maintainers and contributors about the difficulty of contributing, and also the difficulty of improving the complexity around that. There was discussion in IRC yesterday where some of LEO's concerns, and he's next on the queue; I'll defer most of that to the next item. One of the concerns that was very compelling that there'd potentially be a lot of changes during stage 2. It's almost it would almost be like we need an interim stage where like conditional stage 3 or something where there will be no more changes, but it's not actually stage 3 until the tests are ready to be merged, and then it becomes a stage 3, something like that, and I'm wondering if that might mitigate some of the concerns but I'll let LEO speak to those because maybe we can see what their thoughts are.

LEO: Yeah, just after some analysis. I also had some discussions with RW but I'm not sure if he's in this meeting. I am in support of having tests available before stage 3 because that actually helps with the concept of what we want for stage 3 is like in implementation ready proposal like the idea of stage 3 in my brain is like that we want implementers to try out a proposal with some estimation of  things becoming reality. There is a lot of other of my concerns of what it means to have that during stage 2 because stage 2 is too unstable. We expect too many changes and for some proposals this might kill like all availability time for anyone working in the proposed system. Like my not require too much as like a some API documentation etc.., There are a lot of tests for Queens(?) one of the examples of community that I seem really would be decorators. The greatest has been changing like sinful since forever. He even calls burn out on people trying to Champion it. And it's been a proposal that we actually requires a lot of tests food great, but currently if you get the current model of the creator's it's not hard to show the API and make us API surface documentation test would bring is another thing. It's actually a bad amount and any other new changes to the decorators proposal if they also require test that's also going to require a lot of things. So going on track of with what we'll see it would probably be good to see something like a stage 2.5 where yes, we actually like this proposal and it seems like it's finally ready for tests because someone working on stage 2 if they work a lot on the proposal, but they also work a lot of the providing tests and they come to TC39 anticipate that TC39 decides that's not the way they wanted that proposal. That means way more work costing time and maintenance of that proposal changing everything including the test. So what do we signal to Champions when they reach stage 2. It's mostly like I do not advise anyone who could be writing test right after you reach stage 2, which is actually what we signal for stage 3, but it's a different. perspective there because on stage 3 we expect stability. That's why we do have test262 as a requirement during stage 3 as well, because we expect this is stability. We expect implementations to follow the very great advantage of having tests ready when you reach stage 3, and I believe this would help accelerating implementations and they also like when things are far more consistent. I think that's would be a good guidance and also helpful to get champions and engaged I would sing chorus, but then in quarters of all I can gauge to the to having tests ready one of the other advantages of this was talking to Daniel on Monday and one of the things that might be even more useful is actually having some requirement. If you go transpiler related to that proposal and show that as a proof concept, I think that is actually a little bit more valuable in this process. He doesn't like change if we want or not but having a policy or transpiler ready before stage 3works as a good proof of concept and we can extract a task that we use for that. There are many more things that I could say here. I don't think I'm going to be discussing like the complexity of adding things to test262 because I think that it's worth of a lot of separate discussion. I'm also in support of that, but I just wanted to share this support because that's what I discussed with RW, someone who also important that statistics too cold for a long time, and this is my perspective. I'm going to share [a link](https://gist.github.com/leobalter/16364bb167633cb3cb31e0f95e160a2a) with some summarization of these points.

SYG: One of the motivations that GCN mentioned earlier was that they don't want buggy implementations to ship if the implementations were to misread the spec. That would have been caught by tests. I would like to respond and say that historically, in my experience, the difficulty cuts both ways. Is it's not easy to write tests out of thin air without an executable implementation to iterate on. So if the burden is on the champions to write the tests during stage 2 or whatever new stage this is I would imagine the rate of buggy tests also go up. I mean, currently the status quo even today it is not a rare occurrence that during the course of implementation in V8 or SpiderMonkey or whatever that we find some of the already committed test262 tests if there are any in stage 2 and we have to fix them. Sometimes they're really just silly bugs like because there was no executable implementation. There was just like a syntax error or something. Sometimes there are actual bugs. But yeah, it cuts both ways. What I would really like to see is that the barrier of test262 contributions significantly lower and I would like to offer a comparison here to web platform tests, which is a which is another cross vendor suite of tests, except they test, you know web platform features for interop. There's really no barrier of entry like there is no complex directory. There is no front matter to learn. There is no meditated to learn. It's just rather unstructured if you can write a test if you can write a test have some comments or whatever. You can get it in and I would like us to move into that direction. I frankly have not gotten any value out of the complex front matter of test262. I have gotten some value out of the directory structure. That's fine. But I think if we want to change the test262 it's to encourage folks to write tests earlier. We really need to do something about how easy it is to get a test written and accepted.

FYT:  Plus one for whatever the issue SYG mentioned. There are many times buggy test. 

LEO: So I wanted make actually getting better. Test engine262 works really really nice for authoring 262 tests than a given cooperation and probably checking these collaboration with we're doing it because the way engine262 of his reading we are it's worth a lot of exploration there from all the delegates. Not only people who are maintaining engine262 (and thanks GCL) because a just one of the main reasons engine engine262 is basically literal copy of specs that helps a lot getting coverage and verification of tests, it's too difficult to write tests. When you don't have anything to test with to run your tests with that would give you like some indication of passing or not. And yes, I think it's a totally worth separate discussion if you want to talk about how we want to change test262 to improve contributions. I don't think I think those are this is a separate discussion in both this current discussion and the contributions are worth a lot of extra time. I historically tried changing a lot of things and one of the main reason these cannot happen right now is because the weight that's just test262 is used among like several projects and it's still hard to make any changes at all the projects. We were actually doing it consistently. And making test262 keeping to be compatible is in my opinion harder than keeping ecmascript compatible with the web reality. For some of the changes that I try like frontmatter, a lot of people complain about. Something that I have another pet peeve is removing copyright headers in test262. I went through legal. I got like legal positions that I could actually remove it. I could just bring it to TC39 but technically I cannot remove copyright because it breaks test runners in browsers. It's one of my major things in test262 that people hate that in copyright headers and most of the time and very often in maintenance of tests to succeed. You need to go and grow grass and say like a you need the copyright header. You cannot forget it like you need to to add anything. We will try to understand why and the reason is because browsers are not like too invested changing that Sorry, it was too harsh.

USA: I didn't want to say much apart from what was mentioned, but this is all great. I am really happy that we're discussing this. I'm really happy we're talking about this. I hope we can come up with a venue for continuing this discussion.

SYG: Yes, so this item, let me give a quick overview of what happens in reality today for test 262 in case folks aren't aware. So what generally happens is that if the champions champions are eager I suppose or they have time or they would like to they generally contribute test262 tests. They write it themselves and sometimes that does happen before stage 3 sometimes does happen after stage 3 and in case the champions do not write test 262 for whatever reason because it is not a requirement for stage 3. What happens is that implementations generally want (or at least we want in Chrome) the presence of the feature in an interoperable tests suite before we ship something. So while stage 3 is implementation time, by the time we come to ship something, if there are not test262 tests that does hold up the shipping at least in Chrome because you know, we don't want to ship something that is not tested. We're just testing ourselves. And that seems eminently reasonable and what happens is that to not slow down velocity their Google contracts Bocoup to pick up the slack if there are features that have been stage 3 for a while and do not have test262 tests. We contract Bocoup to work on those tests and get them in and this usually works. Okay, but the tests don't get magically written right like someone has to write them and there are resources in place right now to make sure that they do get written and what I would want as an implementer, is that while historically this pattern has worked okay. I think the main answer here for my point of view as I said earlier is to make contribution easier. It's like a perennial complaint that engine implementer have: Certainly the writing test262 is a pain. Like figuring out how to copy and paste the right slight bit of spec into the metadata and then getting it reviewed and that kind of thing. That's not a thing that people really want to do if they can help. So the infrastructure around test262 could be drastically improved in my opinion, especially tighter coupling with implementations. So what happens if there are no test262 tests, is that when we Implement a new feature, you know, we're not going to commit code to the code? base without any tests. So we write tests anyway, but where did those tests go? Those tests go into the engine specific private test suites. They get uploaded and they run on  our bots. So that happens. Wouldn't it be great if we just took those tests and automatically just exported them to test262. This is kind of how it works for WPT (web platform tests). There are these things called two-way sync bots where if implementers as a matter, of course when implementing right test anyway, let's get them to let's get them up streams and let's get that fast track to upstreams, you know, apply all the IP rules get the copyright and whatever I would like us to move toward that kind of future that would kind of I think it duplicate a lot of work and move everything kind of to be easier.

RPR: we're actually at the end of the time box now.

GCL: Yeah. very happy with this discussion. Heard a lot of things I wasn't expecting to hear. But I think this is a great jumping-off point on this topic. Thank you everyone. All right.

RPR: Thank you to GCL and everyone. 

## NVC Training Proposal
Presenter: Dave Poole (DMP)

- [issue](https://github.com/tc39/Admin-and-Business/issues/130)
- [slides](https://github.com/tc39/inclusion-group/files/6332300/2021-04-tc39-nvc-training.pdf)

DMP: We've been working for roughly the last six months to come up with topics that we believe can help make TC39 more inclusive and more open to commute to contributions from a myriad of different people. on the topic of funding Ecma bylaws state that funding requests are either approved by the Ecma general assembly or the Secretary General. And so what we're looking for from this conversation is not is not consensus. It's not a vote. We're just looking for a clear signal about how we want to proceed and hopefully that is in the direction of doing this proposal.

DMP: So why do we want to do this? So we at the inclusion group believe that good communication is fundamental to working well together and to producing good quality products. Shared understandings and Frameworks can help make that communication easier even when we're talking about difficult subjects and communication is especially challenging with cross cultures; across time zones, and across organisations. At the end of the day we want to be productive even when opinions and positions differ. Just want to note that this isn't the first time that this specific topic has been brought up before there were three instances that I could find: two reflector in one of the in the code of conduct repo. So hopefully this is not an entirely new subject to people.

DMP: So what is nonviolent communication specifically? This is a methodology or framework developed by someone called Michael Rosenberg. If you're not familiar, this is the most concise explanation that I was able to find. It comes from Wikipedia, but basically it's a communication strategy based on the principles of non-violence and it's a method designed to increase empathy and improve the quality of life for people that do this work and for people around them.  The two links below cnvc.org and baynvc.org are two resources that I found to be very helpful in my research. cnvc.org is the global community for non-violent communication and bayncv.org is the Bay Area specific Regional group.

DMP: I want to talk a little bit about the process that we used to get to where we are today and to the training that we're going to recommend. We started by searching on CNVC.org for trainers presenting beginner/foundational level courses. We contacted five across North America and the UK, although there are trainers in every area of the globe. We asked them to submit proposals to deliver an intro course for us and from there, we selected two for a “short list” and asked them to normalize their proposals so that we could compare them side by side. 

DMP: We are recommending the proposal by Kathy Simon and Itzel Hayward. This proposal is two sessions of our plenary observations held on different days. We'll do some group surveys and meetings with leadership to Custom Design training specific to our needs. We do four 90 minute sessions delivered across multiple four day plenaries. So for example one in July, then one in October, and then on into 2022. Following the completion of that, the training there would be two 60-minute office hours outside of the plenaries for any follow-up questions. The two issues that you see link to there are where we've been tracking these proposals for  these trainings and all of the logistical stuff going on behind the scenes. Does anyone have any questions or comments?

IS:I have a question: two years ago at the 2019, June General Assembly. The TC39 Chair Group went to the Ecma General Assembly and they have asked for a professional communication training and I guess this is the reply to that. So this would be the so-called “professional communication training”. And then the answer of the General Assembly was that the general assembly allocated about 6,000 Swiss Francs for this activity and it was thought that it would be a half a day workshop in one of the TC39 plenary meetings, but next they wanted to have a more detailed proposal about what this project is about, with more details to the general assembly, and this contribution should be prepared by the TC39 chairs. Or probably on behalf of the TC39 chairs by somebody, and they wanted to see that back before we went ahead. So, I guess that this presentation is, or it could be as a part of it, or it could be the answer for it. I don't know, but I just wanted to recall it, you know what has happened two years ago. And so we are in the middle of a process. Thus there is an action required by the general assembly, because this is what they have asked for. Yeah, so this is my question, how we are going to satisfy the request of the General Assembly.

DMP: Yeah, definitely. Thank you for bringing up the comments IS. We started from the assumption that since the training was previously approved for in 2019 that budget approval was no longer valid. On the topic of funding we really believe that this series of training would be immensely valuable. In addition to that given that there is a Global Group or a global support body for non-violent communication. It would be a really powerful thing because anybody can pick up the same topic and go to where they are in the world and continue if they so choose.

DE: So to speak to each one's Point. Yes, this is the continuation of the same topic and we do plan to make this into a more concrete written thing to send to the general assembly and they admit Secretariat everybody the Chair Group delegated to me to liaise with the Secretariat on these funding issues. So I am looking forward to continuing to work there. On the budget creep. You know when that 6,000 Swiss franc figure was chosen. It was not chosen based on estimates with trainers. I've looked through the different trainers that were interviewed, and you can see them all in the inclusion group repository. There's very detailed notes written up about these possibilities and I really think that the selected option here will be a lot more valuable than if we just went for the absolute lowest cost option. I think this is a change in format from what was previously proposed (to begin at a half-day session), but I think this will provide a lot more deep value, you know, this multiple meeting format that's being proposed in addition to the experience that these trainers have with anti-racism training as well. 

IS: So my point was you know that they see our course of action and so they are expecting an answer now, and then what you have explained is that it is a part of the answer. Yes. so it has to be explained to them. In particular what is the scope of this workshop, it has to be explained to them, if that is ok? And it is not CHF 6,000 but it is some USD 9,200 or whatever, you know, etc….. So it is a continuation of that and now we have to feed back to them, but they have requested and will tell you this is not exactly the same but because we have evolved in a little bit different direction, etc. Etc. But you have now just told me. So that's cool. and then discuss with the General Assembly meeting then I guess that you get maybe a modification or maybe a go ahead and etc. I don't know, maybe some modification to the original idea and in that case in the July meeting and in the subsequent meeting if everything is approved you have to take that into account, etc... you know…. but I just wanted to remind you that this is how it works within Ecma, you know... so that they gave you the “ball” which happened two years ago, and then you have to kick the “ball” back now.

RPR: Thanks for explaining the mechanisms and how it works, this one is I think that DE has heard you so I think that's it would go away forwards and thank you.

WH: Non-violent communication as developed by Rosenberg is fundamentally a spiritual and divine practice. I'm really uncomfortable with incorporating spirituality, divinity, and religion with what we do in TC39. I don't think that we should be going into that area.

PFC: I just want to say that communication is difficult and I think it can only be a benefit to us if we are able to follow some sort of training that helps get better at communicating even across disagreements.

RPR: So Dave. Do you have everything you want?

DMP: Yes. Thank you.
## Read-only ArrayBuffer and Fixed view of ArrayBuffer for Stage 1
Presenter: Jack Works (JWK)

- [proposal](https://github.com/Jack-Works/proposal-readonly-arraybuffer/)
- [proposal](https://github.com/Jack-Works/proposal-arraybuffer-fixed-view)
- [slides](https://docs.google.com/presentation/d/1TGLvflOG63C5iHush597ffKTenoYowc3MivQEhAM20w/edit?usp=sharing)


JWK: Okay, so I want to introduce two separate proposals and they are somehow related. Today we have ArrayBuffers but they are missing some features. The first one is that we cannot freeze ArrayBuffers. So that it won't be changed accidentally. For example, I some constant messages and I don't want someone else to change them in the ArrayBuffer. And today we have no way to do this. The second one is that we cannot make an ArrayBuffer or typed views that are internally mutable but read-only externally, and the third one is we cannot limit how much of the binary that's some use sites can view, which means if we expose a TypeArray, even if we set the offsets and length they can still bypass the via the prototype.buffer to access the whole ArrayBuffer. The final one is not too important for me, but maybe we can achieve this by this in the proposal, which is performance optimization. Now we have SharedArrayBuffers. But it has so many limitations. It cannot be used in the insecure (without cross-site isolation) context. But if we can freeze the ArrayBuffer, the browser can share memory directly instead of going through the structure cloning algorithm. Therefore there are two new features to introduce. The first one is read-only ArrayBuffer and the second one is the fixed view.

JWK: Let me explain what the fixed view means. It describes the ability to limit a TypeArray or a DataView to only be able to view a small range of the underlying buffer. This feature can be composed with read-only so there’re four kinds of access (3 of them are new) to the ArrayBuffer. The right down one (no limitation at all) is what we have today. We can read and write, or get the full buffer from the TypedArrays. The left bottom one (read-only) is read-only so it can be only read but no write. The right top (fixed-view, writable) one is read/write but only limited to a small surface of the area, and the left top one (fixed-view, readonly) is the most limited one, which is read-only and only limited to a small area.

JWK: I haven't decided which API design I should use, but I have some design goals for what the APIs should satisfy. The first one is it should be one way, which means once you froze the ArrayBuffer. There's no way back. You cannot turn a read-only ArrayBuffer into a read-write ArrayBuffer. and it's the same for the limited view. If you make a limited view of an ArrayBuffer, you can only make the view area smaller, but not recover the full view.

JWK:  Even though I did not decide what design to use, I have two possible designs. The first one is a proxy-like new object, which acts like a proxy to an ArrayBuffer. _(shows slide "Possible design 1: Proxy view")_ You can see in the picture the 0-9 parts are the whole ArrayBuffer, and the proxy1 is what we are going to introduce. It’s a proxy to the bottom ArrayBuffer, but it's limited to the offsets and length. If anyone used this proxy1. It's will act looks like a normal ArrayBuffer and the 0 and 1 area is not visible to the user of the proxy1. We can also limit the writability on a proxy. Now we have proxy2 on area 6 to 9 and if we create a new Uint8Array from the proxy, this Uint8Array can only see the see the 6-9 parts of the whole buffer and it cannot change its contents.

JWK: The second design _(shows slide “Possible design 2: configuration”)_ is configuration-like. We create a new typed array with a second option bag that limits the ability to access the ArrayBuffer, Or we can add new prototype methods on the TypedArray prototypes to freeze the view. Maybe I missed something (in the slides). Let me share the repositories. 

JWK: The read-only parts have two targets. The first one is we should add a new way to freeze the buffer and the second one is we should have the ability to create a read-only TypedArray to a read/write ArrayBuffer. This means we can achieve internal mutability.

RPR: Okay, Jack. Did you want to go to the queue? They're out. There are some questions for you. Okay, excellent or that their thank you for that presentation. 

MM: Hi. First of all, I want to say I am very very supportive of this proposal. I think that getting better control of mutability is something that's very high priority, and I want to make sure that we distinguish carefully something being frozen or immutable versus a read-only view of something that's possibly mutable. They're both valuable, for example only something that's immutable can be safely shared with other threads without any interlocks. The main point I want to raise is that there's this stage 1 proposal (https://github.com/tc39/proposal-readonly-collections) that I've made that I've been quietly working towards advancing. We worry about collections in the main focus of that proposal. Is that for all of our collections that there's these three methods snapshot to diverge and read-only view for snapshot gives you back an immutable one if you do snapshot on one that's already immutable you get that one back. Diverge creates a fresh new mutable copy that starts from the state of the thing that you're diverging and then read-only view simply makes a read-only view of whatever it is and if you're already looking at something that's immutable or a read-only view read The readOnlyView method just gives you that one back. So I think all of that can be all of those. apply to ArrayBuffer and would fit with… Oh, thanks for thanks for bringing the the reading of the read-only collections thing up on the screen. I appreciate that. And so I think all of those methods and the general perspective of that proposal could easily be extended to include ArrayBuffer and would satisfy some of what you're asking for here.i like the window aspect that you're asking for here, which is not part of that proposal. And finally I want to mention that the issue that moddable raises that the mentioned on the screen here, which is the ability to put data in ROM is also a big payoff from introducing immutable ArrayBuffers as a first-class concept in the language. So Bravo!

SYG: Hi, so for your two initial designs that you raised with the proxy views and the configuring of TypeArray. I'm pretty against the proxy view design. I think ArrayBuffers and TypeArray are different than other collections because arraybuffers are already these things that you cannot directly use, that you already have to make an additional type to view. On top of via the TypeArray and I am pretty reluctant to want to introduce more levels of indirection here by piling proxy views of ArrayBuffers on top which they themselves cannot be directly consumed and then still have to make expertise around is that seems too complex to me and that complexity will probably reflected into the implementation, which is not great for for security because, you know, people try to break out of the sandbox and own engines with ArrayBuffers and TypeArray all the time. That's my first item we go into the second item the word security was thrown around. I know that this is kind of ongoing disagreement among several delegates in committee on what constitutes security for the language and we have a new TG2 to discuss that so I would be mindful here of how much you want  to build this as security. The views would not for example. Certainly, it would not be security against side channels. It wouldn't necessarily be security for implementation bugs and if that's where the complexity comes in that if the extra complexity makes it harder to secure the implementation because there are suddenly, you know an explosion of code paths that need to consider that arguably a net detriment to security.

JWK: so when I say security I mean application security here.

SYG: Yes. Then please say that. I think that is the point. In general  I am very sympathetic to the read only case. I understand that, you know some parts of it should not be should not provide you could you would you want to lock it down to be to be read only I am more skeptical of some of the other use cases in that grid you put out especially making a subsection read-write and disallowing writing to the rest. I would like to see some concrete use cases there I guess.

SYG: I am wondering what the concrete use cases are. if you could go back to your slides where you presented a grid _(slide "Introduce two new orthogonal features")_. Okay, how fixed view composes with read only? So in the upper right is read write a small area what let's say the top row it might correct in understanding that the motivating use case for the read only a small area. Is that webassembly use case you posted 

JWK: actually the whole first row is from that use case. 


SYG: Okay, hold still cold top row read only a small area and rewrite a small area is for web simply use case. Yes. 

JWK: So if delegates think this is not a problem to solve. I can only bring the read-only parts to the proposal. 

SYG: Yeah, I would like to talk into that more. We don't need to do it now. 

BFS: you were saying mixing read-only and rewrite with fixed areas. The I think yes slide is not necessarily stating. These are mixed. This could be read only of a small area of a larger read-only or read. Right?

SYG:  Isn't that isn't that mixing the mode of the entire ArrayBuffer?

BFS: No I'm saying you have a fixed view on a read-only ArrayBuffer would be top left. Effectively is a solution to your problem of mixing modes.

SYG: I'm not sure. sure. I understood that.

BFS: So Jack was explaining the fixed view is essentially taking a subset of your data and having it be bound checked. And so if you do that on a read-write or a buffer, we're not mixing modes; if you do that on a read-only, you're also not mixing modes. I think the concern You're having is if fixed view can change the read/write-ability of the underlying data. Is that correct?

SYG:  No, I'm just talking about if you layer a fixed view on top of another thing that changes to write ability.

BFS:  I think we can take this offline, but I think this is just a confusion on capabilities. I agree mixing modes would be bad.

JWK: They are two separate capabilities. They’re orthogonal features you can use one without use another one.

SYG: Fix views exist today via TypeArray.

JWK: No because you can access `view.buffer` to get the original buffer.

SYG:  So do you want to lock that down? It's that it's not that you cannot like limit the view, it's that you can always escape the view, and you want to not be able to do that unless you were already past the buffer.

BFS: Correct. This has actually been a problem with Node.js buffer and a security issue in the past where people were leaking data all for reused allocation pools.  So it's not it's not essentially heartbleed and had a similar kind of thing going on in node where you could basically Escape your bound check and start reading things. 

SYG: Thanks for the explanation.

JHX:  I see the  two designs which presents a I am not sure understand. so creating a separate view of about the other is just for is the whole ArrayBuffer. So the first one the first one is more like the read-only collection proposal. So I think it's not necessary to add more interaction levels.

MM: I want to respond to SYG (I see it's also the next thing that SYG has on the queue). I don't think that this proposal should be shy about saying security. It's unquestionably contributing to security.  Security can often be broken down into availability, confidentiality, and integrity. (https://agoric.com/blog/all/taxonomy-of-security-issues/) This obviously makes no contribution availability or confidentiality. Side channels concern confidentiality.  Read-only means being able to lock down mutability, which unquestionably makes a contribution to Integrity. So there's just no reason to waffle about whether this contributes to security. I think Google, in particular the Chrome team at Google, should be careful about trying to take some very weird idiosyncratic view of security that's focused exclusively on the same-origin model and side channels and try to turn it into a corrupted view of the general concept of security.

SYG: I would like proposals to be wary of using the word "security" simpliciter. Given that you MM have a taxonomy of where a proposal would improve what aspects of security I would like those explicitly noted instead of "this improves security".

MM: I'm fine with doing that as well and with being more detailed, but I don't think we should be shy about having explained what aspect of security it improves to then leave on the table that this is by virtue of that an improvement security.

SYG: That is not the view of the Chrome team as we have said in the past.

MM: I'm very glad we're going to be arguing that out until the Chrome team explains their bizarre perspective on security, I don't think everybody else should need to corrupt their use of the term.

RPR: Okay. I'm so what I'm hearing here is that this is a known disagreement. Do we need to resolve this in the context of this particular proposal? 

MM: We do not. 

RPR: Thank you. 

BFS:  so we have read only collections and we now have this to some extent with the read-only TypeArray wondering if we should actually make a real taxonomy for this or protocol for this of some kind, and generalize where you want to lock down internal data of some kind. It seems like both this proposal and read-only collections are about blocking down internal data when we don't really have a way to allow users to hook into the protocol to do that. We also don't have well-documented invariants. We're trying to get to when we do such a thing. So any future proposal might not match these two proposals, or they could go out of sync which we saw a concern earlier about. I just think we need to actually generalize this even if we keep the proposal separate just so we have everything in order so that nothing goes out of sync. That's one comment.

BFS: The other one is I'm definitely in favor of avoiding only allowing creating these at allocation point so the ability to stream data into a buffer while it is mutable, and then mark as immutable is much cheaper than trying to do things like ropes or something on the application level. I know VMs can try to optimize and do things on that path, like SYG mentioned, but the more paths you add it's not just VMs who have to deal with complexities. It's also applications and applications do have bugs. Those bugs can have real world issues. So I would be against it if we transition this in some future point to be a snapshot that allocates over something else in you can transition existing mutable array to immutable. That's all. 

DE: Yeah, I definitely agree with a lot of the things that BFS and SYG said. This is a frequently requested feature for example in Node.js and especially for this kind of case that the BFS and where you want to allocate something right to it and then freeze it so this is a reason that this proposal is quite different from the needs for records and tuples because records and tuples have structural equality without order requirement and you know we want to keep equality reliable in JavaScript with fixed Behavior. So if we're freezing something in the middle these structures are still going to have identity-based equality whereas records and tuples have equality based on contents. So not everything can be unified, but I think it's a really good idea to follow what BFS suggested and to think about this whole problem space. This is very closely related to the read-only collections proposal. I filed an issue previously on that proposal suggesting that we talk about ArrayBuffers and that seemed to be viewed positively within the context of that proposal so we should definitely decide on a particular factoring. I'm also a little concerned about the complexity of this space. I think once we have this taxonomy, it's important to think about which things we really definitely want to create language features for, and it doesn't have to be everything at first. It can be some of the simpler parts. I definitely agree with SYG that it does risk creating security issues to make some of these paths too complex. So I strongly support this proposal going to stage 1. It's a very important problem space for us to discuss and in the course of Stage 1, We can work out these issues.

JWK: There's nothing on the queue now. so we have two separate problems. It seems like we have strong agreements for read-only to stage 1. But do you think fixed views are also an important case to think about? 

SYG: I think for stage 1 you would want to certainly explore it. 

JWK: Yeah the limited view is requested from GitHub issues. And I think it _might_ be useful. Therefore I added it to the repo. 

BFS: I think that's something you can explore in stage 1. Okay, you can still ask for stage 1 one right now. 

PHE: I support both of these moving to stage 1. I think they as has been pointed out overlap with various proposals that have been mentioned in terms of addressing immutability, Especially in read-only in the APIs, and that's that's very important to us, but I do think as part of stage one. We're going to have to take a broader look at how all those pieces fit together.

YSV: In a review of these proposals, we actually found fixed views pretty compelling. We had a couple of concerns about the read-only view in terms of some of our internal discussions, but nothing that makes us concerned about stage 1. So this is just we do see a value in figuring it out for stage one.

KM:  I don't oppose stage 1 the but I think since a lot of this is sort of seems like like my understanding all of this is predicated on proxies not being fast enough the type of work and JSC some work in progress on making proxies just as fast effectively optimizing code, proxy optimized code and

JWK:  the proxy I mentioned is not a proxy we have today. It's a new kind of object that's dedicated, and masks the underlying ArrayBuffers, so it's not related to the proxy for objects. 

KM: Sure. I get the right and you can could re-implement this with that. You wanted to it would just have a performance overhead today. But so basically all I'm saying is if you know once if we had version of proxy that has like the information that the ability to inline your Hooks and stuff without overhead. We would probably be against this proposal because there would over sort of in which should be obsolete in world.

JWK: Yes.

BFS: And currently has a reply to that. So there are semantic differences with fixed views potentially depending on implementation, but for example, even with a proxy you can't garbage collect the ArrayBuffer if it's only held alive by a fixed view and resize it to a smaller amount. There are some very old issues particularly about Extremes in various engines where you do see examples of strings keeping alive, very large strings and this is shown up in our heap snapshots and profiling of our website at least. So, I don't know how we could fix that just by making proxies fast. That's all I know.

RPR: Okay, I think Keith's original statements for stands.

JHD: Yeah, just I mean it may not be relevant unless it goes to stage 1, but assuming it does can we please restate the proposal as a problem statement instead of as a specific solution?

JWK: Ok, I only got the possible solution, so maybe I can make the problem a more important thing in the readme.

JHD: Yeah, this was brought up yesterday on another proposal but in general the purpose of stage 1 is for us to explore a problem, and it's not until stage 2. They'll be really focused on the solution and what we often put on cost. This is stage one, but it's useful to think about it in terms of the problem.

DE: I want to disagree with that JHD. I think it's quite normal to have stage 1 proposals in terms of you know the in this kind of form and 

JHD: It's typical but it's explicitly in the process document, and we've spoken about it in committee before, and you didn't disagree with the same request for a different proposal yesterday, so I'm confused.

DE: The reason is because I think the presentation made the problem quite clear.

JHD: It's not clear to me.

DE: It's okay. Could you could you clarify that the nature of your no, I lack an understanding our problem. 

JHD: So I would like it to be phrased in terms of the problem so that I can gain an understanding. I cannot tell you why I don't know what I don't know.

RPR: Okay, could this be worked out after stage 1? 

JHD: Yes. The reason I'm asking is because if it goes to Stage 1 I would update the proposals table. and typically we try to have those have a problem statement. And so I'm hoping to have that clarified. So yes, it can be worked out separately. I want to have that request on the record, is all.

RPR: Okay good.

JWK: So it seems like we have stage 1?

RPR: Yeah, let's let's just ask so this is for the tube that you've got two questions here. Is this actually two independent proposals where these all in one? and our to in the independent proposals. Okay. Well, let's let's go through one by one then. 

RPR: So we will start asking for a and other objections to the read only to stage one. 

DE:  sorry. I this problems be should be considered jointly for stage 1 there's there's lot to work out and I think we should be working this out together.

RPR: Okay. All right then so the quick the question is and then there's more support from MF as well for that the progressing these together. All right. So so then the question is are there any objections to advancing both of these to stage 1?

JHD: It seems like I've no objections in stage 1, but it seems like it should be one proposal since they're both alternative solutions to the same problem.

JWK: I will merge that two repositories after the meeting.

JHD: Thank you.

RPR: Okay, so I'm not hearing any other objections.

SYG: I don't have time to get on the Queue right now, I don't have an objection. I would like to note for the notes that as one proposal, I find the read-only use case more compelling currently than the fixed-view use case and it is good to explore both during stage 1, but I just I guess I just want noted that I would like to be open to the possibility that the problem space is narrow in scope in the future if either use cases is found to be less compelling, and the champion themselves have said that maybe the the fixed view use cases not best as compelling submits a request from GitHub. 

JWK: Yeah. 

RPR: Okay, it's notes from Shu any any objections to stage one.

RPR:  No, so then I congratulations Jack you have stage 1. 

JWK: Thanks.

### Conclusion/Resolution
* Both proposals progress to stage 1
* Two proposals will be merged


RPR: I just want to add one extra note on the previous topic, which was the NVC training proposal by DMP, which is also just to explain that also. Just wanted to say that the chair group supports the NVC training proposal
## Intl Enumeration API update
Presenter: Firstname Lastname (FLE)

- [proposal](https://github.com/tc39/proposal-intl-enumeration)
- [slides](https://docs.google.com/presentation/d/1LLuJJvGsppQfFf0eCBBcplub_E7NY4EdbSVeE2duyoA/edit#slide=id.g96c285a300_1_0)



FYT: Okay, so, my name is Frank Tang from Google and what convey a internet resolutions lies HSI like 142 I came here last yesterday talked of three proposal. Today's the fourth one to talk about different from the other three. We are not asking for stage an advancement in this particular meeting, but there are some requests here to this International until you nomination. Epi currently seeing stage. To I just give you update the charter for the Intl. I nominate API is to be able to list the support has value for option in the pre-existing magma for to API, which means some of the ecma402I have option but is some of the value of the option is from the color point of view is a little harder figured out which value are supported which are not supported so in this This particular proposal we try to be able to let the software program be able to get the support of value in a particular implementation. So give a little historical background. So it was originally motivated during the Temporal proposal to discuss of a time zone support which actually encouraged to form this a proposal. Of course, other kinds of just one of the values helped the redress there's some other values or some of the option that people figured out that is also necessary to be able to return it was Advanced to stage 1 during June meeting last year and advanced to stage 2 in September meeting last year, one mistake. I made I'm sorry for that and that time when we Advanced stage 2 is so cool events to stay too and somehow I didn't get state three reviews. Viewers tied up or maybe we ask I just didn't realize that for stage 2 time for and I say, okay I can wait for stage 3, so I really sorry. But so if anyone  signed up for stage 3 reviewers, I cannot find them from the meeting notes. So basically I need someone to sign up for safety with yours right now. I gave the update in November meeting and all. so the other thing I want to emphasize that one of the reason we want to advance to State 2 is there are some concern about fingerprinting and privacy and we believe in the time we advanced stage 2 is however help us to get more exposure and to get feedback about the area which all report on the next slide about that. in the March meeting and this is the not TC39. This is in the ecma402. A monthly meeting in the March. We as many people may know that in agreement for TG2 to we have establish three area that we would like to qualify a proposal they support for stage 2 and but that because that happened after the September meeting. So I think our chair tried to do the process rise, so we discuss and reaffirm whether this we discussand reaffirmed this proposal did fit that three criteria pyre prior our civil code to implement in usual and and brought appear during that meeting, and also around that time Mozilla also reported their analysis of the fingerprinting thing. I think in February, and published a short paper, and share around an apple dialect in that time feel they need to take a deeper look at it. So they take a month and the April meeting Apple expressly agreed with summary that Mozilla put down in the I just a apple agree with analysis of what the Mozilla folks put it together and we believe they're no more privacy and fingerprint concerns regarding this proposal within the Ecma for to subcommittee and here's the thing that we got reported from Mozilla in fabric fourth 2021. Here's a link you You can read a report for short. The title is Intl enumeration APIprivacy inculcation Mozilla has recommendation here. You can read I start out long, but I'm not go do that you ask you to read it here line by line, but just call the summary the summary statement by mozilla does not believe any nomination proposal open up any new fingerprint vector and does we do not believe it should be blocked on that ground. So as I mentioned earlier DMP agreed that privacy analysis and that meeting therefore we believe. Sorry. I can't come back here and therefore we leave at least in the concern of fingerprinting. You raised during the stage 1 time. And when with advancement it got resolved, so we believe this shouldn't have any fingerprint issue if anyone has additional concern you're free to express it. But unless someone reopens that issue, I believe that it is being addressed.

FYT: So again, so what are the scope of the this API? Is that as I mentioned we try to cover what is already Express is already in option in a coma for two API in different Intl object and try to be able to programmatically to figure out what is supported in that particular browser implementation that including calendar and collation and currency and also numbering system time times on number system unit are exposed to listed in ecma402 text. We kind of have different kind of treatment one is Qaeda is my remember, right? I think the number assistance a you need to at least support o thing and unit basic state. That is exactly the state either support for browser all order for have no clear set return us back tax that you know, which is a set. So we try to have a way to allowed developer to figure out in that The computation what is it supported? So now we try to limit the API surface. So we try to for economics reason not to show a lot of different method. I think the originally when in the stage 0 kind there are many have several different methods and I forgot when exactly the time. we change it at least the so far. I think after cease to we just support one method which is not from any other Intl object but created from the interrupted to implement a method of supported values of which is very close to the supported locales of Intl different from that one. That does not accept a Locale but set key and optionally read except options our explains that part and the key is apply for all the different things. You have calendar, currency, number system,  time zone and unit and those property of those key are actually property near in various objects and happen in number format some happening data format and some happened in more than one format. And the expectation is that we will return a SupportedValues prototype object which has a iterator method which mean you can iterate through it.

FYT: So here's an example of what how it look like. So, you can say I want to iterate through the calendar of Intl and what calendat systems are you supporting Intl right? It will iterate through it. We return basically an iterator to the function similar to our array, but it's more flexible and you can iterate through that and so on and so forth and particular for time zone. It could ask also passing an option which have a region code that will allow you to not only lists all the time zone that support but for whatever the times are supported in that particular area. So the spec text here and I can read the spec text since we're not going to ask for stage advancement. This just try to tell you the report we have suspect axed. Are we still working on I plan to bring up to stay three advancement in May if we can reach agreement and car for two months of meeting. So if you have any issue or any action item you like me to work on it will be renamed. You can tell me today.

FYT: So my request is this is I need to one or two additional state three of your first word is if you have long she already last time. I forgot to note I would like to note it today. I really apologize. I didn't pay attention as hey. There's a problem. It's my misunderstanding, but otherwise I would like to have one or two additional safety reviewers. any question?

SFC: Hi FYT. I was interested in discussing with the rest of the committee about how this proposal relates with Intl Locale and flow which we advanced yesterday, in particular if you can go back a slide. _(slide with for-of examples)_. Yeah, so in locale info we established that for a particular Locale we will be able to return all the calendars that are preferred in that Locale. So I was wondering if it might be a useful time to speak with the committee about... because this is basically a union of all the locales and all the calendars supported by all the locales as opposed to the calendars supported by an individual Locale. As well as the other ones like, you know time zones and currency codes. There's been a lot of concerns in the 402 committee about the use cases of being able to select this data for all locales. Time zone pickers, currency pickers, and so forth, have been the main motivating use cases and I just wanted to get some feedback from the larger committee here on that subject about: can we align better on the motivation of you know, the functions like the ones that are shown here as opposed to the ones that are in into local info.

FYT: I would like to First clarify what one of my position in as a champion of a poset proposal from my point of view the Intl Locale info tells us anything about what is supported it tells us What is used in that region? For example last say you asked for Intl Locale info for a particular Locale: it may tell you "Oh, they use my calendar". Okay, it does not mean that implementation has my calendar, it only means that Locale that particular region. They're using doubt counter supported Locale. I mean, you know Here when you have supported values of mean a JavaScript engine here that particular calendar is supported or not. Right? So what is supported here? So while then you ask well what will happen if you know a Locale is using that calendar, but it's not supported here. What does that mean? Well, I think that's a very good interesting use case, right? So a developer could say "let me figure it out in this particular Locale what calendars are used"? Oh then I will ask the system to say whether you support it or not, right and then we'll say well it's not supported then you can put in some support maybe from a server sign right you can say "hey server this particular invitation does not have a my account or support and I do need to have that. So can I download my polyfills from Ajax or something?” So I think there's stuff for different purposes: one is telling us information of that particular Locale which is a Locale-dependent, only encode the information the other one is true exposed. what the implementation the V8 does increment which has two different thing.

SFC: I mean, I was hoping to get some more input from others on the committee, but if there's no input right now we can move on to my next agenda item.

SFC: Okay, my next agenda item is one of the main concerns that has come up from some stakeholders when we discussed this in tg2 is that the main motivating use case behind this proposal is for Pickers. Although I would argue it's not the only use case, that's certainly one of the main motivating use cases is I have a picker, like a timezone picker, etc, and you know one argument that has been made in tg2 is that if we want to support a picker we should do that in HTML, not in ecmascript. and I'm of the position that I think that this is in scope for ecmascript because this is the foundational data source that's required to implement a date picker. This data is required for HTML, and it's required if any user land library simply wanted to create a picker. This is the data source for that picker and I think the way that FYT has presented this proposal makes it very appropriate for use as a picker. I just wanted to get an opinion from this body about to verify whether it's a legitimate thing to introduce this API into ecmascript first as opposed to going through the w3c process of introducing this directly into HTML without an ecmascript side.

DE: If we if we want to go ahead with exposing this information, I think it does make sense for this to be part of Intl rather than HTML. If it were a couple to a UI user interface feature, that would be quite unfortunate, but even putting it in HTML, otherwise... I don't know maybe Intl could have been done in HTML or CSS rather than JavaScript, but at this point we have a body of experts producing these and I think it's all go here and didn't make sense to continue doing it at the  js level.

DE: To combine with my next topic, you know, I do like the API design of this proposal. However, the you know, the fingerprinting issue has raised and I think at this point should block at stage 3 for explicit statements of support from probably from Mozilla and webkit to ensure that they've analyzed this and come to the conclusion that it's not going to be a blocker for them to to later implement this feature.

FYT: Sorry, I don't quite get that. I did show you that they internal fingerprinting they both Apple and Mozilla explicitly said there are no fingerprinting issue, right? So you're asking different kind of statement. Is that why you asking?

DE: You know, it would be nice for them to clarify this Committee just to you know, sign off on what you just said

FYT:  I put the web page there. You can click that link there. It's not published by me they publish it in February and there's a link you can click,  and there was something written from webkit. 

SFC: We have explicit statements of support from both WebKit and Mozilla (about fingerprinting) in the TG2 meeting two weeks ago, which is recorded in the notes. 

FYT: Yeah. There are two apple delegates. I'm not sure as from Apple and I'll show how they were internally but to person from Apple delegate in I'm aboard to agree with pound that 

DE: Sorry for my confusion here. No problem to make sure that this was yeah, I'll take those notes in. Sorry about just want to clarify they have no explicit statement state. 

FYT: They're going to implement this proposal. They have the explicit statements say it is not a fingerprinting concern in the degree of the Exposed on that document. They say there are no additional fingerprinting vector and that's their conclusion. Just want to make sure I didn't miss the group that they this is a summary they say and they didn't say more than this. 

YSV: Hi, I can back up that we did review the privacy concerns and we don't consider that to be the blocking issue there. I don't know if the needle’s been moved yet on making the argument around the use cases for introducing this. But I believe this is just an update, so we don’t need to get into that. 

FYT: [Yeah, you're just this is yeah,

YSV: So the fingerprinting in certain is no longer an issue for us at all.

FYT: So DE, does this address your concern or there is a different one?

DE: Yeah. I just have to find the notes from the meeting with that forward to meeting unless there's an apple delegate here who can you can further clarify.

FYT: That's an April meeting. I don't think SFC may not have been put it up on the web.

SFC: Yeah, I'll publish the official notes soon, but you can find the notes in the Google Doc in the drive folder.

FYT: Yeah, usual. Usually they get published like couple of days before the next meeting. So I think that's one of the reasons SFC hasn't put them up. 

SFC: Yeah, I haven't put it up quite yet because I wanted delegates to have the chance to review it. 

FYT: the most knows about Mozilla has already put up just the apple one is not not not there the Mozilla one it seemed March meeting. Then Apple took one additional month to review whatever Mozilla folks wrote so it took longer than what happened the April meeting. 

MS: Yes, so I wasn't at that April meeting but not going to just dispute or deny that that we reviewed that I wasn't one of the ones that would be valid.

FYT: Sorry, could you clarify where you from?

MLS: I'm from Apple. Okay? so if it's in the minutes from one of our one of the webkit team members of united in said there's not an issue they grow. Mozilla than fine with that.

FYT: I apologize. I'm not a hundred percent sure. They're from webkit. I know they're wrong Apple so who

SFC:  It was MCM.

MLS: Yeah MCM is on webkit. Yeah. Yeah. Yeah. I trust more to him. There's another Apple engineer.

FYT: I believe the two people both say that yeah. Okay, so I assume that topic is not a no longer issue or any other issue on the talk about or any requests before I can take back to work on this month. if not, then my request is this could some cool people sign up for stage 3 reviewers.

RPR: okay, so we're not getting any immediate volunteers. Is this essential for now FYT? 

FYT: Yeah, if I come back as stage three, 

RGN: I'm planning to review it. But as an editor of 402, I'm not sure that's sufficient. 

JHD: I'll review it


### Conclusion/Resolution

* Richard Gibson & JHD will review

## Reviewers for the Object.hasOwn proposal

RPR: So just before we go to lunch, we've got another similar request. So that another reviewer or request. This is for yesterday's topic by TCN, which was the object.hasOwn which went to stage two. So we need a couple of steps. In fact, sorry we need I think just one extra reviewer because so far what? I think JHD will you be a stage 3 reviewer?

JHD: Object.hasOwn yes, I would love to.

RPR: Leo Balter has volunteered and Felienne as well. 

### Conclusion/Resolution

* JHD & Leo Balter & Felienne Hermans will review

## Isolated Realms update

YSV: Okay, we're at approximately 80 people so we had hopes that tomorrow could avoid meeting so that you would have the day off and we wouldn't have to meet again, especially at the odd hours that everybody's been getting up or staying up until however, we will very likely overrun today with the topics that are being discussed the question. Committee is do we want to tack on another 30 minutes to this presentation, or does the committee want to meet tomorrow early in the morning for some of you so that would be our normal morning starting time at 10 a.m. Eastern time or if we want to do something else do people have any quick comments on that. You can also post it on the Discord on IRC. I'll be monitoring that to see what we want to do about this. So rather post on IRC what your thoughts are there and I'll be taking a look at that. Then let's get started with Leo's topic, which is isolated Realms. You have the floor, floor, please. Go ahead.

LEO:  Okay, thanks. Yes, and just for clarification and I have a hard blocker for me tomorrow, so I'm not going to be able to join. I hope we can fix the realms updates today. All right, so we believe you can see my screen right but the Realms cover. Yes, that's right. Thanks. So. Yeah, this is a Realms update with the callable monitoring API. It's a new update on the API API. I'm going to give the word to Karine, But before that I just want to be sure like the primary goals still remain, like we want. but we run for the for this is a new global object with new setting of intrinsics with a separate module graph that still preserves synchronous communication between both Realms and for all to provide a proper mechanism to control execution of a program. I think CP can join in for now

CP: Yeah, I just want to do before you give you a little bit of context because we have been a stay still for a long time and part of the discussion with implementers of being around two main topics one related to the fact that you have multiple set of in transition. They are in the previous API. They were connected together introducing what we call identity this community, which is one you see that between guy friends and the main window and so on we have been trying to work with the implementers, especially with Google on resolving this issue. Basically the food gone issue as we call it is the problem that affects developers will have a hard time maybe getting to understand what's going with the identity of the object that are from different Realms. That's how being the priority for us to find a solution for that the second issue again about whether or not a realm is a security boundary. We continue saying there's not a security boundary. And so that's a secondary part that we have to continue engaging with with vendors and implementers. So this one in particular is focus on the separation between realms not having the reamls to in to be intertwined the object graph of the realm to be intertwined. So Leo will provide an update of these API that we believe supports this they use cases, but also support the theory -

YSV: Point of order people are not seeing the slides. Can we get Leo to refresh? How's that now do people see them?

CP: So that's that's primarily what I wanted to clarify that this is the they are objective getting to a new API still fulfill the use cases that we have but doesn't introduce the problem the food going problem where they object graph are connected. That's the primary goal today. Go ahead LEO.

LEO: Alright, so moving on. as CP was saying with to come context we I just wanted to emphasize with to preserve the same primary goals for this proposal and there a there are some changes to the new to this API. So today you have instead of having a just regular import different to a dynamic import you have importValue going to talk about it later more at the end and you have an evaluation function evaluate. It's definitely not equal because it's not exactly evolve. It does a lot of not a lot but like it does some several things differently. So I'm going to run through this and what this means. As CP has mentioned. This API does not have any cross realm object access. So the concerns of identity discontinuity are actually mitigated by this proposed model and there's the new Realms API they create this callable boundary. This is one of the things that I'm going to stress within the slides and this callable boundary this allows access to any non primitive values. So that's an important thing. This basically not bringing access to two objects in general and they can still be connected through atuo wrapping going to stress all of these. in the next slides, so to just start we have the quick examples on if you'd go with a realm dot evaluate, if you try to get a non primitive value, an object you immediately throw a type error saying with like getting a new array or getting object prototype, etc, etc. it when we say when we talk about. There is a lot of audio noise coming in like a wind noise. It's kind of distracting. Thanks. Okay, so when we talk about primitive values, I'm not restricting these to strings and numbers only. That means also like you can transfer symbols. This is one is a very important aspect of value for this. So here I am able to make comparison for symbol values like symbol there is shared across realms. And it's if we go through the draft spec so far we can see evaluate goes to more abstractions and let's go a little bit deep to through these abstractions where have perform realm eval. Perform realm eval is a now look to interactive all through perform eval is following a lot of similar spec steps that you can find in perform eval for indirect eval where it also like insurers Source text must always be a string in this case. It does not try to convert objects or anything for else eval does in this case. We decided to just like accept Source text as string and for the definition of what we are going to present here called. Realm is around that created the new realm where we called. It rounded evaluate when we invoke it and eval realm is this new realm created constructed by the caller realm and what happens here you You can see it's too unlicensed The Source text and those are not look allowed to perform eval. And the code is 2 evaluated within the eval realm. so for the matters of run time evaluation in any known normal completions that occur during run time evaluation within this eval realm will result in an Abrupt completion in the caller realm throwing a type error. This is important because we cannot actually have immediate access to No primitive values from the other realm as well, but it's important to know there has been an abrupt completion there but in the case where have normal completion, the result value is wrapped and that's when I'm going to go with the with the next steps. and so here is one of the interesting things. So if you have a value if the result completion is an object, but it's a callable object. I still don't have access to that a callable value, but I actually wrap it into a new function wrapped function exotic object. and these new exotic object is an object that does have internals realm wrap Target function in call and it's important to say like a new wrapped function is exotic object is also creating when wrapped function is already object returns a callable object so you can always create this callable boundary through creating a wrapped function exotic object. I'm going to show how it works, but mostly a quick example, here is a wrapped object always like capturing the last callable object and its to allows the the cross from communication having a callable. triggering of crossrealms so this call internal that is created for a new wrapped function exotic object will call the function set at the same object wrapped Target function. So basically it chains, I don't like using this word, but it's kind of like it connects the function from the other realm it It does have this wrap Target function. It's still not acceptable. Not exposed but the call will actually transfer the arguments to the other Realm. Some this sugaring that we have here is an evaluation where we have function do something. Yes, I can just run this something with the value 3. It's equivalent to getting this call and This is a illustration of what happens this slides are there I don't think it's that constructive to go through saying each step of the slide. And this is all already drafted in this proposed specs. I think it's a good for a normal like look at what it actually does. and the and then what we have with the auto wrapped functions that I also like a also lies in the wrapped function exotic objects when one realm sends a callable object, it's important here that I'm saying like one realm sending the callable object a new wrapped function is out of object is created. So here I'm just showing one way like when they do it quick evaluation that I that completes into a new function and I create a new function exotic object in when I say why we do have callable objects. I In for anything that so those have the call internal. It's not limited to ordinary functions because you can also have arrow functions bound functions or proxy wrapped functions. Of course, you could extend that to async functions generator et cetera, but they are not very useful as they would try to return non-callable objects. They would eventually fail but there is no restriction on that in the spec. Yes, WH has a clarification question you You do have get wrapped value for this and because you can still unwrap it I can try to form this but I need to go on with the presentation. I unless you want yeah.

WH: So if `this` is an object then it will fail?

CP: if it is not if it is a callable then it would not if yeah

WH: When is the `this` object callable? 

CP: You can “apply” on it because whatever have you call on it? You will get wrapped.

LEO: Yeah. Okay. You still don't have the access to this, is just you just create a new wrapped exotic. Yeah, and this is one of the things that I was trying to connect into this slide functions are wrapped in both directions. So that means if I have a realm in a capture wrap abrupt exotic from the other realm connecting to the other realm I also can send function to other realm so here I'm actually capturing one for function from one realm and also sending a function to the other realm, but I also the other realm who is Will receiv a wrapped function exotic object. Yeah, this is some sugary known how they are seeing internally. They're still not exposed to user land. Some perks of the this non callable objects any attempt to access no call of objects with values will error. Yeah, so if you try to run this round we evaluate and getting array you have a type error. Remember? It's a type error because you still not wrap in a broad compilations from the other side you just defer to type errors. Wrapped functions can't receive a non callable object. Yes, that's true. So in this case here, I have do something and I try to call do something send in our ordinary object as the argument it will fail it will fail fast. It does not even like do anything in the other Realms just verified the arguments. He cannot be wrapped.

YSV: Sorry, can I jump in for a second? We need more note takers are can we please have a volunteer to help with the notes? I can help with the notes great.

LEO:  Also in this area here where I have This is a little bit trickier where I have a function and I can see this error here from the other function because I in this case here dosomething at the last line is sending another function to the other realm. Sending a callable value is okay. It's going to be a wrapped in the other realm and when I try to call this function there it will fail there because that's when wrapped is going to be called. And it's like, yeah I I'm trying to receive object. There's not callable. So the failure still goes there. It's too tightly or? there. and here's the same way it also applies to async functions, but I'm using a even a little bit more General example of trying to wrap the array. That's when you actually try to bring in Constructors. Array will return an object, an array object and And if you try to the wrapped array It will fail it would have a type error exception. 

WH: Can you explain the previous slide? You get the type error, then what happens?

LEO: I do have the type error in the realm like in this case. I'm doing a try/catch. I'm actually saving I'm actually capturing these exception so do something here. We see if this error function. These are a function when called it receives the argument array there is going to be named into the parameter wrapped array and in this I try to call wrapped array fails because it tries to complete in an object value or returning a new array it throws a type error because wrapped array is in a wrapped function is type object. and it throws a type error because you cannot completes into a object non-callable. Yeah. 

CP: I think this slide is mostly around the caller which in this case is the realm, the caller of wrapped function. Array will get an error that fits into that particular realm. So the identity of that error is from that realm, it doesn't leak even though the error happens on the other side when it returns something back to the realm that is not a primitive value or callable. 

LEO: Yeah, and we think these slides I'm actually trying to show like where errors should happen within the proposed spec. Can we go to the next slide or yes, please? Okay. Thanks. Yeah, so here I have an Abrupt completion wrapping where I do have, In the case of like I just trying to evaluate throw new error. Here is for me by a good illustration where we have like, I'm trying to throw error just a generic error, but it's in this other realm. I don't have the identity of the error object from the other realm. I still have type error. I don't I still doesn't share the identity the API doesn't provide that directly and one important thing of about the wrapped functions they want to carry properties if have like if it tried to send a function that does have a property secret when I evaluate that I don't see that property. The wrap function is just like a new function. It's not an object that will get to call the other connected function in the other realm, but it does not look or observe any any extra properties of the function or anything. I should be using object has own here, but unfortunately the slides were made before the presentation yesterday. I would love to use object dot has own but let's move to the next Slide. the Realm prototype import value. I'm sorry about my audio should be clear here. So, what is it? We do have an importValue that is analogous to Dynamic import and the other should be different, but it kind of counteracts with the evaluate because the evaluates to depends on CSP relaxing like the unsafe eval. Importvalue is quite analogous to a dynamic import, but you actually capture a value from that the imported module name space. You don't get a binding you can totally don't get a dynamic binding or anything. You just capture value and also the values that are resolved they are dependent on going through this get wrapped value in this case. You can only receive primitive values or Callable objects in the callable objects will be wrapped. 

LEO: This quick example here shows that I have a specifier and and then I have a binding name some and the value of sum will be the one that I receive in this case as it is a function. I received the wrapped function exotic object that's quite similar to what you would have with evaluate, but the difference here is imported. We have the aspects of dynamic import and Import in general. Caching evaluated modules the successful evaluated modules. You still can run this another more times. You still have the aspect here where you need an async function for this code injection, but it's one thing that is a good trade-off for us. At least for us I mean the representing that the Champions here. The other parts of the communication there is this to remain synchronous. the module specifier and exported name are both required right now. So in this case here. I can have some insight code that actually my to import more modules who anything even if I don't care about the names, but I assume someone using a realm can just wrap that. Here's an example ahead with the test framework that I just want something that like exports and run tests. and I'll I'll scanning for Test code for userland most of the time test code I don't need to require like something to be exported by the name to be exported. That's why our for realms it’s still okay to have something. It seems OK we considered other options for this. This is in my opinion an okay option. and in the future when we discuss more further on the module blocks we can consider importValue having a module block instead of specifier. I think that's a very good addition for using Realms but it also depends on the module blocks advancing.

LEO:  Yeah, we have some caveats. I mentioned evaluate is subject to CSP directives as unsafe for important values also subject to it CSP directives their different as default Source functions are never unwrapped. There is no unwrapping, every evaluation wrap squabbles into a new wrabbed function exotic. That means if you transfer function here and they are all the time you also create a wrapped function exotic on top. You don't, There is no unwrapping of it. Wrap function is exotics don't have a construct and these are not going to be connected. It's just a call internal also the function Exotics the call they want coerced these argument to object. This is done in regular functions call. And wrap function exotics is this argument is also subject to get wrapped value that that's one the previous questions from WH. Going through after the cave. He adds the resolutions that I believe the current proposal might be limited on cross from object exotics, but still enables a proper virtualization mechanism as to provides enough tools to implement membranes on top and because we have these wrappers audit functions enabling crossrealms callbacks in either direction. we do have a proof of concept implementation from curries of membranes framework on top of these Realms API. and we can talk about it the The current status that we that we have rendered spec. We do have the explainer updated. We've got some SES feedback with some homework that we are working on and we do have some initial implementers feedback. We still work in progress. We want to reach out to implementers for more feedback. There is the TAG review that was ongoing. This proposal is to bring this new format of the proposals to be going back to the TAG for any necessary for reviews. And we have this proof of concept membrane on top we can extend about it, we can talk can talk about it. I really want to get this proposal to request advancement to stage three in the next meeting in May 25th. So please if you have anything that you feel that it's important to be solved by then. Let's talk because I think we're in a very good direction here. One of the things that is important about the membranes just to make JHD has raised some concerns about this API as because identity discontinuity. Yes. It's already a reality today. We already have that we've membranes framework and but with the membranes framework CP was able to reproduce some object like comparisons. That's to bring that aspect back through userland code but I'd say that's like how much more userland up to code through a membrane implementation. It's not provided by the API and that's it. Let's open for questions. I'm going to try to bring the tcq here.

YSV: All right, first up. We have a question or topic from JHD which I believe you just covered JHD. Do you want to speak about the intentional discontinuity? 

JHD: Yes. It is totally fine with me to say that object discontinuity is a footgun, and it’s totally fine with me to find a way to make the default behavior of Realms not have that footgun. That sounds great. Folks who are using a membrane library now, I think it is also fine to say for their use case, they will still need to use a membrane library (perhaps a different one around realms, but because they're already using a library, they already accept that cost). What I am not comfortable with: I can already use iframes and just directly pass objects around. That's a capability that eternally exists and can never be removed, so it does not make any sense to me that I would simply not be able to use Realms without paying for the cost of some sort of membrane library so I can replace the ways I'm currently using iframes (for example, to grab reliable copies of prototype methods or built-ins). I can already do this, and I want to be able to do it with Realms instead. This call wrapping stuff - I've heard that there's at least one use case for it, which is I believe Amp, and that's great, but it seems like a lot of complexity. It doesn't match the capabilities that the platforms already have, and could be done with a library around those capabilities anyway, so I just really don't understand why. The sense I'm getting is that there are some folks in the web world who wish iframes didn't exist and thus are pushing back and forcing Realms not to match iframes’ capabilities - that perception may be completely unfair and wrong, and I apologize if it is - but I think it's really important that Realms have the ability somehow to be an iframe, basically.

CP: Yeah, I can take that one. Well partially so yeah, we have discussed this extensively mostly with Google Fox. I think she was here the current API allows to eventually open that gate I would say I just give you access to the global space of the realm. So it's a possibility that in the future we can do that. I hope that we're going to revisit that at some point. If if the implementers are okay with having that we could add just very simple thing to do, but for now, it's just not really we got to push back on that particular point and that's what we're making a changes. So we want to continue arguing that the who have to get implementers provide more direct feedback 

JHD: Yeah, and I would love to assess that beacuse to me Realms don't seem worth it without the ability to have an identity discontinuity like I pointed out.

BFS: Can you explain your use case for that?

JHD: Currently if I have my code and I want to be robust against modification of globals I have to cache them as first-run code and that works when I do it. It's not super ergonomic, but that's a problem for another proposal. When I have the ability to cache iframes as first run code, then I can use that later to get an unmodified safe copy of any built-in method or object. It's not the same one as in the current realm, but for built-in functions that generally doesn't matter because of internal slots, so I don't see how I could do that with this Realms API even with a membrane library because I'm not trying to get an object, I’m trying to get a built-in function with magic internal-slot reading capabilities.

BFS: Can you explain how needing to Cache the iframe is different from needing to Cache the other APIs in both cases. It seems like you have to do it.

JHD: No, I think you're right, but it's a is a much smaller surface area and thus it would allow me to be a lot more ergonomic in the way that that works.

CP: And I'll just and I also think is important that higher. For that use case is JHD has tried you can not guaranteed to be the first one to be there. So creating an iframe to do that is the proper way and even the creation of the iframe doesn't even guarantee you that yet. You're going to be the first one but separate question, but I think it's real that you cannot achieve that with the current and proposed of without introducing a membrane, which is probably going to be more complicated.

YSV:  BFS did you have a further reply that you wanted to make here? 

BFS: Yeah, so this is kind of reply to the topic not necessarily to that. We're talking about iframes in particular. We're talking about a specific host capability that not all JavaScript hosts have not all seek to have and we're talking about a capability that that host ecosystem the The web environment is moving discourage and flat-out banning some of the behaviors were stating are always going to be there through their CSP stuff. I don't think we should use deprecated features that are seen as potential problem as a forcing function that it needs to land in the language itself when it is a host API that we're talking about. That's all I just don't think this topic is a good direction for us as a committee to walk towards.

YSV: Okay, and JWK also has a comment here or reply here

JWK: I agree it's hard to handle with module graphs from different realms, but I think we should keep the capability for advanced users to opt-in to the original access to the objects or the membrane the version of access to objects. And I have to say the current solution of the wrapped function looks like a poor Man's membrane, and why not make it a full functional membrane?

YSV:  Okay, and we have DE next.

DE:  JHD is arguing that this proposal would not be worth it without the ability to share objects directly not just primitives and callables through the through the realm boundary and I see this style of argumentation a lot in TC39 that you know, this proposal wouldn't be worth it. Unless we add that feature and I want to push back against that it's a general style of argument. I think even though we can find use cases for that other feature. It's reasonable for us to come take a <?> on a smaller feature set. That would still meet important use cases so that the champion group here has provided important use cases that this feature meets, and it's a relatively simple way to meet them and I don't think it's appropriate to say “Well, it must also provide this other thing because it's accessible through that other mechanism”. As BFS stated some parties view this is deprecated. It's not available on all JavaScript environments. And so I'm not I'm not convinced by that argument that the scope needs to include sharing objects between Realms. I don't think it would be a bad direction to go in I could see use cases, but I disagree that it's a precondition for moving forward. 

LEO: All right. I want to iterate something here with Regarding this group that the current discussion. I've been I just also talked to JHD. There is one problem here where we also trying to face some challenges. There is challenges involving both like the original form of the realms propsoal. Oh like the previous form and this new calendar or boundary one. JHD is telling like realms is not useful with this form, but it's too has an opportunity. You need to with proper discussion to discuss extensions of this realm with the I believe where we can meet these requirements in the future. But right now this current form is meeting a lot of our initial goals as I mentioned at the beginning. It's sort of like picking the challenges that we have because we have challenges on both ways. I know we might not disagree with all of them. But I think this is like a good path to go to move forward instead of being stuck like Like if we try to move to the original form we're going to be stuck again for the same reasons. We've been stuck for so long. JHD my callable action is actually do you think this is even considering all of this? Do you think this is something that for you? It's something that you would still object thinking this way like if. We want to explore expansion of this realm proposals after it's done with proper discussions in it It's still something that You still would still object with the current format? 

JHD: Yes, so let me reply to both DE and you. This isn't expanded scope, this is a reduction in scope, and it's a reduction in scope based on arguments that we, I don't think, have fully and fairly heard out in plenary. It is totally reasonable to say for any feature, “let's ship a subset and add something later”. There's a number of times with that's been done in the past. I don't think there's consensus that that's always a good approach but certainly it's a viable approach. However, that's only a viable approach when there remains a path to future addition of the extra features, and based on what BFS saying if browsers will never want to allow this feature, then it's not “shipping a subset now and adding it later”, it's “sneaking in a rejection of that extra feature”, and based on these arguments, I have no hope or expectation that if we ship this form of Realms that we would ever get the direct object sharing form. I think it's completely reasonable to to withhold consensus for advancement absent having those discussions in plenary and not just the with the champions in back channels.

YSV: I believe SYG has a reply to this topic

SYG: Yeah, I'm going to skip to get Originals. Thanks guys, because I think the current or the current discussion is pertinent. So we have discussed the previous iteration of Realms in committee, including the foot gun issue including on the GitHub issues extensively, so I would like to push back against that we have not like discuss this somehow and this is some some backroom deal here. I don't quite understand.

JHD: I'll clarify; that it is a footgun has been brought up and that is an argument to not make it the default. I have not heard any good arguments to not permit someone to opt into it.

SYG: Okay, I mean you're being convinced of the arguments being presented doesn't really I guess I haven't heard any

JHD: I mean that it's a bad argument that an opt-in footgun is something you’re likely to accidentally do wrong.

SYG: Yes, and we have to if we have right the the specific foot gun too kind of say my understanding here is not simply that you can you can mingle object wraps through the user realm and the incubator realm the specific foot gun. that There was active confusion both from web devs at large. Just like on that I saw on Twitter as well as you know, supposedly fairly well-informed folks with the web platform team about the nuances of security boundaries internal to Google who were confusing the capability that Realms was providing as some kind of active sandbox. and that foot gun was that this confusion would seem to be very real and that folks were adopting it for guarantees that it was not providing where intending to adopt it for guarantees that it was not provided. The foot gun is not that the capability exists and that you could accidentally opt-in, it is that they were actively opting in through a misunderstanding and this was something we saw during the previous iteration of the proposal. It was not a theoretical thing. It sounded to me. your response JHD that your use case it's not quite the full package of use cases that the Realms proposal seeks to address here, which is running this not entirely untrusted, but maybe semi trusted code with a fresh set of things and kind of its own environment. That's like separate somehow. your use case seem to be more focused on the on getting pristine copies of things. Is that right? 

JHD: yeah, I mean it is essentially a form of the getOriginals API that lacks the reasons it was a concern. That's essentially what I want out of Realms.

SYG: I would like to further push back that it is it is it seems rather unfair to the champion group into the Realms proposal which have not been confused about what the problem they're trying to solve to kind of pin that particular use case on the realms proposal and say that without that solving for that use case. 

JHD: From proposal is not useful. If we had never discussed it before that's fine, but we've discussed it in plenary and like I've discussed it with the Champions many times. So I think it's well understood that that is a hoped-for use case, but I hear you saying.

YSV: if it's all right, I would like to advance the queue. We've had a few people waiting for a bit specifically. Let's go with MM's reply to this topic and then BFS and then continuing on with the rest of the queue. I think this topic is close to being closed, please go ahead MM. 

MM: Yeah, we want to confirm much of what JHD saying about how we got here historically. And to respond to I think it was DE's using the term expanded scope in terms of adding in the direct access. It was the denial of direct access. That was the expanded scope. Realm started out simpler. As a result of Google's expressed concern and objection of the foot gun issues on direct access. And what we ended up with here was definitely an expansion in scope to deny direct access. It was motivated by the dangers of direct access and on this one. I'm kind of in the middle. So let me let me see if I can briefly State my in the middle perspective on this, which is that Realms both before and after are a security sandbox and the attempts to deny that or not understand that or paint it in other terminology have largely been besides the point. However, the experience at <agoric?> confirm very strongly that when you try to do anything at the realm boundary for security purposes other than build a complete membrane that guarantees isolation with one mechanism. if you have a bare membrane boundary and you do any kind of ad hoc manual programming trying to use it as a security boundary you will screw up. So in that sense, I want to confirm Google's concern as valid if you use the the realm boundary as a security boundary. You've got to have a single bounded mechanism that guarantees isolation so that you can then do everything else on top of that isolation. - we would have proposed building in a membrane directly if we had a simple membrane to propose to build indirectly but membranes are a pattern not at this point an abstraction mechanism. So what we're proposing here is essentially an isolation guaranteeing abstraction mechanism that we've shown by proof of concept can support building membranes. So I think that this succeeds at squaring the circle here succeeds at navigating between these different concerns and coming out with something that that best meets The Joint set of concerns.

YSV: All right, BFS, Do you have a response to the current topic or to mark? to the current topic not too much. All right, ahead. 

BFS: To the current topic not too Mark. video calls their around weekly the cover this there on the TC39 calendar. So if anybody feels like this is being done in a back room. Please attend those calls wash the GitHub. These are things that have been discussed for many months. These are not new changes or the problem of sharing objects non Primitives is not new. In fact, it's years old. So it's a little strange to hear that. It's being done in kind of a shady sounding way, please if you feel so attend meetings at be on GitHub. Yeah, that's all. I 

YSV: believe we have a reply from Jack Works to what Mark had said earlier. 

Jack: Yeah Mark said this is a proof of concept of for isolation. That's the current semantics doesn't support we upgrading supporting works of for example objects to achieve the membrane and because the current realm if I pass the function to another realm and that's run past the function back. I don't skip the same identity of the function but wrapped it twice the function. That's so its blocking us from upgrading to force membrane future because it's as a behavior changing and that's what we breaking. 

CP: No. We have we have created a proof of concept that this is not a problem. We have a experimental Library. I call it irealm and this experimental Ivory allow you to create a fully functional membrane across the two realm and yeah, you have to do a little bit more active acts to communicate between the two sides, but is a very small Library about less than 2 k. And so it's just a proof of concept demonstrate that in fact you will be able to do what you do with different graphs. Are you it gives you the illusion that you have access to the other object graph. We you do so through a bunch of proxies.

MM: Yeah is not the Exotic function created by this round method. You have to get to build a membrane. You're building an entirely new abstraction level with new proxy objects, including new functions that are not directly related to the Exotic function. 

YSV: all right, I if there's any more topics related to what we've been discussing right now around iframes, please start a new topic. Let's move on to SYG's discussion. 

SYG: right, I would like to extend my thanks to the champion group and the folks who have done a lot of hard work here to like Mark said I do believe this indeed squares the circle. When you know when we originally have grazed the the concern and proposing building in an isolation boundary directly. There was a pretty big expressivity problem with with Cycles which this callable boundary neatly solves and I'm very impressed by cleverness of the solution so just a thank you there. I'm very supportive of the current direction the there are some smaller remaining things that will not be blockers and I believe they can be there more mechanical issues that can be worked through one of them is the separate module graph, I think I don't think there's any conceptual issue there, but some kind of progress on draft on how this would integrate on the HTML side with the graphs machinery would help build confidence there That itss the right choice. I'm kind of I find the import value API a little strange in that it combines this Dynamic import mechanism with an export mechanism. That seems to be unrelated to what you just imported. If I read the spec job correctly. You can just export anything like that. You can try to get the value of anything. It just so happens that there's an import Step at the same time, but it doesn't have to be like a value that's exported by the thing you just imported. So that's a little bit strange to me. And finally there are some discussions internally at Google about the name realm and if it should signal more unambiguously that it is not a security boundary in the browser security sense. I imagine this will be very contentious. I don't really want to get into it now, but that is a remaining concern but it's not a blocker. I want to stress that name is not a blocker. 

LEO: That's all true. I just want to say likewise on the tanks because things for all the iterations on the on the import value the original name was import value, but we wanted to rename to avoid to avoid ambiguity with Dynamic bindings because there's actually get a gets a value from a from a binding of this module in space, but it's not ergonomic. I'm open. I'm totally open to bike shed the names and yes, we are still working on trying new things for this round. Um School structure of we just like not finding any alternative that we feel solid to suggest to rename realm we think about callable realm we really could could probably bike shed this but I think this should be done async too.

CP: Yeah on the on the April value. We also discuss some alternative an expansion of the import assertions, maybe something like that some options that can be passed. So we're still looking into it if you or anyone has any feedback on what kind of API we could use that I'll be great.

YSV:  We have a clarifying question from DE about the relationship with modules. Go ahead Daniel.

DE: Sorry not a clarifying question more like a response. So SYG mentioned that something needs to be done about the way that Realms would work with the HTML module map structure and how HTML works with molecules. I would like more information on this because I produced a PR for this in the past and I don't understand what the problem with it is. I think this version of Realms would work with that PR just the exact same way as the previous version did about I see 

SYG: That helps my bad didn't know the previous version the pr still applied. 

DE: Yeah, because it's pretty orthogonal to you know, this restriction is pretty orthogonal to how data modules work, but I think there was some discomfort with having a module map for realm and that's something that I continue to not understand. So second there was the concern about import value Maybe. It's you know, it could be surprising that you're importing something but also getting a single export at the same time and you know CP was suggesting that maybe we should have it import and you get a special name space object, but that would be far more complicated because we would have to make a special kind of module name space object that would perform this, you know wrapping or checking thing on each property access so you would to make a new kind of exotic object and it just seems like huge amount of overkill so I think it was it's just a much simpler approach. Even if it's sorry 

SYG: If I can quickly reply. My concern was not that there's a single value to export it, but that there didn't seem to be any connection between what you are getting out and the thing you just imported. I agree that getting a namespace exotic object would be a worse solution.

DE: What do you mean by the lack of connection?

SYG: if I'm reading the spec text correctly The Binding that you are requesting to be imported via import value. that doesn't have to be something that was exported by the module you just requested to be imported. It could just be like something that was on the realm

CP: No no would be an export binding.

SYG: Okay, then I retract that concern. Okay, good. Thank you. 

YSV: Alright, the next topic is from MM. 

MM: LEO in the slide where you're showing import value. We said something about needing an async function for something around the world, but I do follow that at all and I'm not aware of anything in this spec that that requires you to use an async function just for clarification. 

LEO: I'm sorry it requires an await, it produces a promise that will be resolved into the important value. Because it's connected to the dynamic import.

MM: Okay. We should we should all be should all remember that promises are the base level for this not wait. Await is higher level. Okay. 

LEO: Yeah. I was just trying to quickly jump into if you want that value you need to await an async tic.

YSV: All right next Next we have WH with the next topic.

WH: How would this interact with records and tuples?

CP: Yeah, so this is one of the things that we're eager to see and obviously once you have recommend to people because those are primitive values you will be able to pass them around and return it because they don't have identity and there they will be shared around different Realms that will work really great. They only open question is really about the boxes the concept of the box and whether or not you will be able to unbox something for number around so we have been some discussions around that but we’re waiting to see the development of Records and Tuple.

SRV: Yeah the replace just to say we have to work here doing whatever we can do to make because end goal is to be compatible with realms. That would be great. 

CP: And I noticed another thing that I want to mention here. Is that one of the probably the counter proposal from Google Fox was around using a structured plan to be able pass complex structures between the realms and are pushed back at the time was as focus on the Primitive values because represent tuples will allow you to be more complex structures once we have We have had in the language.

LEO: All right - just want to make sure if that. satisfies the topic from WH.

WH: Yes

LEO: Thank you

DE: Very happy with where we ended up in this proposal, you know, you can see in the public github thread in the public, you know videos from the meetings where we discuss the various Alternatives here that there were a number of other APIs discussed which relied on things like particular globals or I proposed one that was just kind of a mess of different functions that are you until what was going on, and I think collectively we in the in the participants of the SES calls. I'm happy that we were able to iterate on that and come up with something that was both simple and intelligible. and yeah, I support this proposal going forward. Yeah. Thanks for the help man. You have a lot on dates. 

LEO: Yes. there is a big list of all a lot of people who really helped in this proposal. DE has been among the like the top contributors in as I active facilitators for this proposal move in the head.

YSV: All right. Next we have GB.

GB: Yeah, just a second what DE said, it's a really exciting Direction and really great to see importvalue solution. is a really neat way of solving this problem. I just wanted to ask if because the one thing that does change is typically with Dynamic Imports. With normal imports you have the ability to get the name space and understand, you know, there's various design decisions there but specifically there is a normally with namespaces you can get the list and just thinking about if you wanted to have a slightly more reflective API if you didn't know the module you importing and you wanted to be able to reflect over it and get gather the certain exports or check for names. I was just wondering if there has been any consideration about being able to determine the export values. I also saw there was an issue about a possible Dynamic import form as a way to kind of Drive execution, you know, if something like that could return like a list of exports was just thinking if there's Ways that could kind of facilitate a reflective API for this where you if you don't already know the exports named in advance in order not to get narrower or if that's considered use. 

CP: Yeah, it is a good feedback. We haven't really talked about these we have touched on these use case. We have to look at that.

JWK: I think a new exotic module objects that forwarding those exports? will be good.

CP: Yeah, we discussed that one the problem with that one. Is that what happened if you access you export a function you access the binding twice and you compare the values because you're going to get a new wrap function every time that you acts as a binding. That was a that was a bummer there. We decide not to pursue that. Aside from the complexity of creating an exotic name space object and all that. I feel that that one in particular found by DE was fatal.

JWK: Well, that makes sense. Thanks.

DE: I also think that it's possible to build both of these ideas both what GB suggested and what and what JWK suggested in terms of this minimal APIs. he pattern is that you make single module that they you use import value on but then that module contains its own Dynamic import and then it can expose things out to the other realm by passing primitive values and by calling functions the membrane implementation that Salesforce has produced is is an example that shows some of this off and it will really be a quite short code sample to do something like what GB suggested with enumerating the the exports of course the proxy to implement what JWK is suggesting is more complex, but no less doable. So anyway, think we should say minimal with this proposal. proposal. As MM was saying, you know to make good use of this. It requires a bunch more infrastructure, and we're not really able to provide all of that here. It's more like providing the basis for patterns for using. 

???: Yeah that one of the, DE, one of the things that is critical to open the door for many of these Solutions is to have something similar to module block something that does not require evaluation in order to or parsing an evolution in order to do some of the coordination between the two Realms. So we hope that we can get module blocks or something similar to that both really opened the door for all days.

DE: Want to clarify the I mean, as you know module blocks are not a requirement for Realms. They're very ergonomic Improvement or and deployment Improvement, but all of Realms, you know, these mechanisms that are described would just as well with You know modulo these deployments and ergonomic issues with separate modules with separate files compared to with multiple blocks. 

???: Yeah, fine even with evolving you're willing to evolve allow evolving you laughs. 

YSV: Yes indeed. we have a another reply from BFS. 

BFS: Yeah, I don't think this problem is necessarily unique for exports enumeration. I think there are plenty of in this where you want to interact with code that may do things like preserve an ID of an object across the calls for whatever reason and I think just that's going to have to be something we figure out later. We have membranes built around this membranes are generally not something that we could easily approach a standard Library feature at this time. so I think maybe we should reframe exports enumeration to be a more General problem for any kind of enumeration for you want to iterate Properties or stuff like that? That's all.

YSV: all right moving on to our next topic from JRL.

JRL: So I want to explain a bit of AMPs use case or a pattern that we're using currently. We provide several globals that are not actually defined as globals for weird reasons in the worker thread essentially. This means we have evaluate a user provided script in the same context or in the same script as our wrapper. We do we do this by concatenating the parts together. So there's an opener like an initialization string that binds all the variables for us, then we can cat in the user script and then we can cat in the footer that essentially just makes all the entire script valid JavaScript to evaluate. We're evaluating a dynamic string except in amp’s use case, we can't use `eval`. We have a CSP requirement that we have to ban `unsafe-eval` because this prevents a whole lot of XSS attacks that we could be hit with because we're using also user-provided DOM on the page. One of the ways that we get around this is the `Blob` API is treated as a separate script source. So even though we ban `unsafe-eval` we are still able to evaluate a blob that we can dynamically construct and it'll continue to work just fine. So the ability to dynamically evaluate blobs is important for us because we can't do unsafe eval. I'm hoping there's some way that we can allow blobs to be evaluated in the context of the user realm even though the unsafe eval would prevent evaluate function in the the user realm.

CP: Yeah. I think that's possible when you call an unsafe value, you can pass a blob at least on the web. You should be able to do so.

JRL: Okay, to answer BFS’ questions. We use a blob object and then create a blob URL if either of those are usable in the realm that would be fine with us. 

MM: Could you could you explain in JavaScript terms of what a blob is a web API. 

JRL: There's a global Constructor called blob. It essentially allows you to create a new script that you can then evaluate. 

MM: I'm not asking a PR for creating am asking about what we value itself is. What kind of an object is a blob.

JRL: It's just an instance to blob Constructor so you can pass it to import to `URL.createObjectURL` and then you can get a dynamically evaluatable script from The Blob. 

CP: Yeah MM, this is used today with Dynamic import you can create. Eight a blob and pass it to the dynamic import and it will work just fine. It's it's consumable buffer. 

MM: Even when CSP has suppressed eval?

CP: Yes, yes, but if you could block block as well if you want to but if you don't block it and you have eval. 

MM: Yes. Okay, that's Really piece of news. Thank you

JRL: Yeah so blob when you use it to create a URL creates a new `blob:` scheme URL and it it's blob colon and then some uuid URL and you're able to pass that around to a script evaluator and then evaluate that blob as if it was a real script that existed on a server and that allows us to get around eval. 

??: Yeah doesn't just as I was saying that you will be able all to use that in the incubator around what we call the realm itself around Dodd import values. You will not be able to pass it into the room and use it inside the wrong obviously because it's an object but for not side you'll be able to evaluate these modules inside the realm. 

YSV: I'm jumping on the queue to say that we need another note taker. Can someone volunteer please? we will finish this topic sooner and get to other things if we have a note taker. And if you are new to the committee, then it would be a great way to get started working with it. I've got a volunteer on IRC. Okay, we can continue BFS, your topic was clarified, yes? Then I will move on to what WH yes.

WH: I'm trying to understand the answer to Jack Works' question regarding what happens when you pass a function both ways — it gets double wrapped. And thus I'm trying to  understand the claim that was made that this wrapping is helpful in making membranes that preserve round-trip object identity — how does that work?

CP: so two parts of these. I know you could I not a question. Before I think was removed on the double wrapping we talk about these which you as well in the spec. We're not doing any optimization as always and so the implementers can choose to optimize the wrapping because if you are wrapping it already wrap an exotic object you could go a straight and jump into the target function rather than wrapping the function. again, so you will be able to optimize that in terms of not having to create when you call one of these multiple wrap functions to have to go to multiple jumps, you can go straight into the target. That's one thing. The second thing is yes, it took us a while to come up with a solution to be able to use the wrap functions to pass information between the realm that is not necessarily in a ??? base therefore if you send me the function back, I would not be able to understand that that that was actually a function that I send you send you in in the first place. So that poses a problem how we could create a membrane that understand what's going on in the two sides of the boundaries. What we did in this case was to use some finals through some of these functions when you invoke the function. In the function is placing some internal reference some values in the size of the real that has the original Target the Target that you're wrapping on the other side. So every time that the other side needs to do an operation on the target, it has to first sign up to the realm that it will be using that Target by calling a function. So it does some initialization steps and then call the game with the actual operation that needs to be I carried on to that target. That was some kind of general idea of how we were able to implement this membrane on top of these wrapping my kind. 

WH: Okay, that gives me a general idea of what's going on. Thank you. 

YSV: Daniel you also have replied to this question. 

DE: Yeah, just summarize what he was saying. I think we could say it doesn't let membrane it doesn't implement the membrane for you. You need a different kind of wrapping and membranes but it provides a defense in depth and it's compatible Is that is with building a membrane for you. that accurate CP?

CP: Yep. Great.

YSV: Thank you for that summary next up, we have LEO.

LEO: Yeah, well if we don't have anything else to discuss at this current meaning for Realms, I just want to make sure we have some people signing up as reviewers. for eventually requesting Station 3. I still intend to request these three for the next meeting. I need reviewers. 

DE: I will review.

LEO: And who is that? Daniel? 

DE: So I think I could be revered. 

YSV: Yeah. Yeah, I will also review just to make sure I'm very familiar with the text as it is now.

LEO: Thank you. So, I believe we have any SYG and YSV. That's right. I'm not sure if someone and muted there there is some noise now. That was me. I was going to encourage JHD to be involved in the review process as well. 

JHD: Yeah, I'm happy to be on the list. There's enough other reviewers that if I don't have time to review the full thing, it should still be fine.

MM: I would appreciate it. 

JHD: Sure, and yeah, I'm happy to be included. 

DE: Yep. MM reflects my reason for encouraging JHD. Well, thank you JHD. All right. 

YSV: Do we have any other questions or topics for isolated Realms that we want to discuss? The queue is currently empty and we have about five minutes left on this topic. So I briefly wanted to touch on the topic that I introduced when we came back from lunch, which is what we want to do about the 30-minute overhang for new topics specific to the incubator calls chartering and also, the overflow for resizable ArrayBuffer and growable shared ArrayBuffer. We had three people explicitly say that they would prefer staying on with no break today and a couple of people signaled that either this would be fine or tomorrow after lunch would be fine. What are people's feeling in the room here. So far there have been no comments and nothing has been raised. However, I do have the previous three direct request to have today's meeting extended by 30 minutes. Are there any objections to extending today by 30 minutes so that we do not meet tomorrow. Thank you, explicit support from DE. We don't have any objections so we will stay or for me as well exposed to support from JHD as well. Okay, then we will continue on today for an extra 30 minutes longer than we normally would. Okay LEO have you finished everything you wanted to do with your topic now. 

LEO: For the Realms. Yes. The next one is slightly connected to Realms too so yeah, I mean for isolated Realms. 

YSV: So in that case, please go ahead and start your next topic. 

LEO: Yeah, just in case we are starting to call it Realms with the callable boundaries is start of isolated groups. But this is just the beginning with the name. Yes, I just use these two little rooms for too long. Let's go with the presentation. It should just afraid but slide that I'm sharing and I believe you can still see it. 

### Conclusion/Resolution

Signed Intention to request advancement for Stage 3 in the next TC39 plenary
Reviewers Assigned:
## Symbols as WeakMap keys for Stage 2

- [Proposal](https://github.com/tc39/proposal-symbols-as-weakmap-keys)
- [Slides](https://docs.google.com/presentation/d/1TWg0T4PEeBqH4NooWE5fLi0gJtAiHuXSn_s2oPR0g2I/edit#slide=id.gcbecde6e4c_0_7)


YSV: Yes, I can see it. Anyone have any issues with seeing the slide right now. and also before we dive in do we have enough note-takers? I don't know if we have enough note takers. Note takers, please yell if you are not having enough hands on the keyboard, go ahead Leo.

LEO: Thank you. Um, so with the TC39 famous last words, this one should be quick. So here I am to present symbols as weak keys. Let's go through this. So the primary goal for this proposal is just to have some a known object unique primitive values. queues for weak reference values the starts with weak Maps, but we're going to see more about it further. What this proposal is trying to introduce is just using a symbol in things such as weak map keys. And here I am to talk about unique values we map the keys are limited to today. They are limited to objects only due to their unique value and garbage collection observation. Symbols are also like unique primitive values with an expected short-term memory footprint. I believe so like that's my expectation and better translating to the usage go when we use them as unique keys. TCQ right now about this but among the other benefits this provides better ergonomics for weak references in general. 

MM: I'm sorry quick clarification. You don't you don't mean weak references. 

LEO: Yeah weak reference the queue, But yes, yeah. Yeah. It's such a minefield of words that are used to describe this I just try to use to say like symbols as WeakMap Keys as weak map values. I'm going to go through that like other the weak references finalization group. I have a slide for that for her, but I'm just trying to say like symbols as weak keys. I still need to find the best jargon for that. 

MM: Yeah. 

LEO: But I still believe symbols provide better ergonomics for that in okay. Yeah. Well, the next light was for the proposal. Jargon. We can see unique values as those values that cannot be reproduced identifiable without access to the initial production each new symbol is a distinct value regardless of their given description or lack of a specific one. Wait the tcq right now. Let's go to this slide. Yes, we today we still have symbol for and well known symbols because they still create a new symbol but they those are registry in the global registry shared among any other realm. If the symbol already exists with that key the symbol can be reused that's one of caveats of of this whole proposal and the well known symbols value are also shared across cross-realms we understand those are values that are not productive as WeakMap keys, but I believe for all the discussion that already happened around this at the TC39 GitHub orgs. This should be useful in my opinion. This should be user when responsibility concern. the use cases that we have for this the first one is most important for me is just agronomics. The Proposal itself provides better ergonomics with four distinct values being used just as key so for WeakMaps rather than creating custom meaningless objects simple values can a better purpose while still being primitive values and ecmascript already specified symbols as primitive values to be used as unique null string keys. So this kind of makes sense to also connect them as for me. It makes sense to connect them as WeakMap Keys as well. We have some slight use cases as well where this sort of connects as an alternative or as an option for people such as records and tuples where symbols de-reference through WeakMaps is also one of the one reasonable path as a way forward for to reference objects in records and tuples. We've been discussing box and probably one of the The candidates but see imposes to remains as a tentative and this proposal would offer a good option to be explored. Records and tuples also cannot contain objects or functions or methods and we'll throw a type error when some one attempts to do it. Realms and membrane system were already discussed? Realms in here are the main brain systems are using top of rounds are Frameworks using on top of rooms for communication virtualized environments. They usually rely generally rely on WeakMaps with many reference values use cross Realms and also this proposal opens exploration for using symbols as weak keys to kept remembering reference and still with better ergonomics in the in our current API though that as you already know objects cannot be accessed across realms this proposal will ??? system to have this communication using the symbols, although I just want to be transparent here the current main brain proof-of-concept membrane that currently developed those not really fully require that but it's something that we want to explore further. We want to explore the memory footprint of the daily usages. We cannot explore that with an actual like the these being offered. yeah, so we also talk about support for the weak references. I'm sorry MM. I'm still finding the good most accurate. jargon here because after analysis, I think we should we may support the symbols as weak set been using weak that's being used as weak references actual weak refs in the finalization registry. I'm really not sure and don't have a good argument in my opinion to bring as a use-case for this or that then consistency with <??> as they now become a aloud as weak map keys, the reason is why not adding them as we grab a weak set with graphs and finalization registry. Maybe there is something to be explored with weak refs and finalization registry. I don't see much for weak refs but consistency has been one of the things that I've seen all the delegates as well claiming to be a good reason. And as a starting point this proposal that all of the symbols are allowed as weak map keys weak map entries as weak references and finalization Registries. I'm trying to alias this as weak Keys. It's not helpful Expression so yeah, this is just examples of usage of symbols, it's quite straight forward instead of having an object. You have a symbol there. You would not notice this if I had like the first line of var unique equals an object. It will be the same code. and the current status of this we have the spec draft already with the only the normative changes. There are some pearls to adjust but they're all editorial within the spec draft just reflects the number of changes. We have proposal repo we have it an actual draft ecma262 where I still need to capture these editorial pearls, but it's to in stage one and there is a fair amount of previous discussions on this some of them on the thread started by GCL and we have a fair amount of like a input from delegates. It's to on stage one. I'm here requesting consensus for stage 2 in this country from that. I think it's good enough and we can Define what is next for what would be next for stage 3. So do we have consensus for stage 2?

YSV: We have a few things on the queue right now. Our first topic is from RRD, please go ahead. 

RRD: Yes. I'm in support of this and we originally wanted to bring that back for recording tuples as you explained in your sights, but we kind of left it on the side because we focused on bucks. That being said, I don't think that bugs and symbols as weak keys are mutually exclusive. If their utility, so yeah, it's important. This is good. 

YSV: Thank you Robin next we have DE. 

DE: Yeah. I also explicitly support this proposal. I mean as you might expect because I brought it to committee. I think it just makes sense for their symbols to be permitted and we have these use cases that were in the presentation and other use cases that committee members have raised but they didn't even make it to the presentation. So let's go ahead with this. I did expect text I reviewed it and it looks sound.

YSV:  Thank you, DE. WH, you're next.

WH: It's still unclear to me what problem this solves?

LEO: Yes. I mean I so for my presentation.

WH: It seems like this is making things more orthogonal. That I agree with but it's also introducing a new foot gun. So it's unclear to me actually what problems this solves. 

LEO: What footgun do you consider it contains? 

WH: A weakmap is no longer weak if you use a symbol that can be regenerated from a string at will. 

LEO: Yes that yes. Yeah, it does have the option if you use well-known symbol or symbols. registering the global registry shared across Realms those 

WH: I'm not concerned with collecting the few well-known symbols. 

CP: I believe when we talk about these in the SES meeting as we were saying that if you're using symbol for and using that as Aki for the requirement for a WeakMap, that's not different from using something like array prototype as the key for weak map for those who never be collected either.

WH: There is a big qualitative difference between those and arbitrary `Symbol.for` symbols.

CP: Can you provide more details?

WH: Just because it's possible to screw up by doing something deliberate doesn't mean that we should make it easy to screw up accidentally.

LEO: Well, I think the this is a the risk is minor because like someone would know what they were would be doing with their own code and by adding like a well-known symbol or symbol there is already shared. He's also like the person would make the symbol as security say like the person would know like what it would mean they were would be at an array prototype to a weak map key. 

WH: Well-known symbols are a distracting tangent to this discussion and I don’t want to worry about those. I'm concerned about the case of somebody generating their own `Symbol.for` symbols and using those as weak map keys.

LEO: Well, I'm using simple.for in well known because they have the same like this dish to reproducible like there's there's two identifiable in like the your initial question was actually like “why what is the problem?” I think is not a like a big pain Point here, but there is a good I see and many other delegates for see a very good ergonomic Improvement by just adding symbols as weak map keys and the consideration of like should we be limiting these symbols to Be strictly unique symbols as like not just allowing symbols are registered in this global registry. I think there were also like could like if we did that in fact in spec and not userland we would have other concerns as like identifying symbols are already existing as like we use for symbol keys for I don't see like any value in that in like verification process for low-level API in the spec, so that's why I'm not introducing this limitation. I still think the value of the ergonomic Improvement that this proposal offers is a better. It's a good solution over like the caveats. 

CP: Yeah one thing to provide a concrete example of where you will use is and you were asking the question the previous topic about creating a membrane between realms and we were able to do it without the symbols. But if you have symbols and what really you could do is more simple approach where an object that you have to create a proxy on the other side. You generate a key symbol for it. You put it in a way. Are you sure the symbol with the other side and that symbol represent the identity of the real Target any time that you have to do an operation on the other side you pass the symbol back and we use the symbol as a way to determine what the target is and when the symbol is collected on the other side because no one is using it anymore. No one is using it in the realm or even after from then the WeakMap will do the proper thing that those are that's a use a use case where you have symbols that are primitive value chain between grams and they serve as a key for WeakMaps that preserve identity somehow in a realm. 

WH: I agree with it. I love the idea of using unique symbols as weak map keys but skeptical about using `Symbol.for` symbols, which could never be collected because anybody can regenerate their strings in the future. 

YSV: We'll start with Kevin. 

KG: Yeah, so I'm on the queue. I share this concern, but I think it's useful to think about whether this is likely to come up. Symbol.for is kind of a niche API. I don't end up using it in my own code, I don't encounter it in other code bases very frequently. The place I see it come up is when someone very specifically intends to make something that can never be GCed and will be shared by everyone. I think the fact that it's not a thing that you just use randomly, it's a thing that you use specifically for the case when you want something that will live forever means that hopefully anyone who does that is going to understand the implications of putting it in a WeakMap. It's not like this is an easy mistake to make; it's something that I think is pretty clear from the API, so I think that makes me a lot less worried about it.

WH: I disagree with the claim that `Symbol.for` symbols can’t be GCed. They can. It’s analogous to when you create some new string — that string can be GCed.

KG: It is true that it can be GC'd, but the reason that you do it is because you want to have identity across all callers of symbol.for which is, I agree, slightly different from wanting it to never be GCed, but it's still like - this is not a thing that you normally do and is only a thing that you want to do in these scenarios when the thing you care about is the ability to have the symbol with the identity at different points in your program.

WH: Yeah, I just think that symbols generated by `Symbol.for` are very dangerous to use with weak maps. 

YSV: We have a reply from TLY. 

TLY: Yeah, I just wanted to point out a specific and really common use case, which is that in library code if you want to have something which is interoperable with the library. You often use symbol.for that it's discoverable by the library like for example rxjs uses a symbol.for(“observable”), so you can mark something as something that can be expected to have the observable protocol. So like it's not because you don't want to be garbage collected, say it's because you want it to be unique and discoverable across the code. But I don't know how that would interact with WeakMaps. I don't know if that makes it any more likely to be used in WeakMaps, just that there is it's not his niche as you're saying, but it is probably Understood as what it's for, but maybe not since you were saying it’s for garbage collection.

YSV: We have on the queue GCL, let's go. 

GCL: Yeah. I just wanted to say I think while WeakMaps is not an exceedingly rare API and symbol dot for is not an exceedingly rare API. Well, I mean it you know, and it does come up as TYL said I think when these two things inter, you know come into contact with each other. I think it's exceedingly unlikely that that contact won't be intentional and I think the limitation when this is intentional would be quite frustrating. For the same reason that normal symbols being limited here is quite frustrating. It's just breaks orthogonality.

YSV: Okay, we have our next topic which comes from RGN. 

RGN: I just wanted to express enthusiastic support for this. I think that the gap in functionality is frustrating. It's not just hypothetical.

YSV: Thank you. Next we have JHD.

JHD: repeating the explicit support for this proposal; this is great.

YSV: Next we have LEO.

LEO: Yeah, so I just want to make sure if we can put this proposal I am still requesting stage 2 in case it advances to stage two, I will ask for reviewers for stage 3 entrance of want to make sure because there there is a few concerns raised here. Are these two? objections for stage 2 does anyone object can we go? Can we move? Let me be clear. Do we have consensus for stage 2? I have audio problems, but I'm interpreting this as silence. 

YSV: Yes. We are having silence unless anyone has been having trouble unmuting there has been silenced for the last half a minute to minute or so. It does sound an awful lot like consensus for stage 2. Does anyone object? All right, LEO. It sounds like you have consensus on stage 2 for this. 

LEO: Thank you. 

JHD: I'll be happy to be a reviewer for it.

LEO: Thank you, JHD and RGN 

JHD: On IRC BSH also volunteered, appreciate that.

LEO: are we capturing the meeting notes so I don't have the whole thing here. Great. Is this all for your topic? Laughs? Yeah, do you want to discuss more about rounds? I don't think so. We're done for the day. I appreciate that. 

### Conclusion/Resolution

- Stage 2
- Reviewers: JHD, RGN, BSH, DE

YSV: Actually we're not done for the day because we decided to go another 30 minutes if everyone's still cool with that. You have two more topics to cover. If that's cool then on the agenda the last two topics, we have our incubation called chartering from Shu for five minutes. and then the Overflow item of resizable ArrayBuffer and Global shared ArrayBuffer Shu. Do you want to take the stage?

SYG:  yes, let's do incubation first because that will be quicker and can just get that out of the way. So currently we actually Quite a bit of a backlog too. I guess the changed cadence so shorter amounts of time in between meetings and just general scheduling conflicts with finding time for the incubator calls. Let me bring up the current charter between the last meeting and this one. One second, please. Is that visible on the screen? 

YSV: It is visible for me. Is anyone not seeing the site that SYG's presenting? the issue rather.

SYG: Okay, something everybody can see it. So since last meeting, we only had two for lazy Imports and the regex set notation which leaves three overflow the resizable buffers, module fragments, and the pipeline and I think there is one proposal that was called out this meeting that they would like to get on the incubator calls. Was that the copy methods on array. prototype, I believe, Is RRD still in the call? 

RBN: I can speak for him. Yeah, we would like to add this to the okay. 

???: Great. Yeah. Yes. 

RRD: Sorry. I was having trouble finding button. Yes would be super interested. 

SYG: Okay, sounds good. But given the backlog. I think that is the only one I am comfortable adding. I imagine we'll get to at most three calls before the next meeting because now we're at about a month in between each meeting, which is good, I guess for the faster Cadence. But it means less time to actually get these calls in. So without risking building up an even bigger backlog. I would propose we add just that one as we work through the backlog. Any thoughts or any other champions who would like to get in on the backlog? 

YSV: Sounds reasonable to me. 

SYG: all right, so then let the notes reflect that the only new proposal added to the incubation call charter between this meeting and the next one in May, at the end of May is the array copy methods on array.prototype. Yes, all right. Then let me stop sharing and then I'll jump in to my next topic, but I guess before I do that. So to kind of catch folks back up. Well, actually not before even that I guess we had asked somebody to one of the chairs take a screenshot of the queue. I think there were a few items that were left on the Queue that were not related to the where should construct for the resolution of the last meeting for the last proposal. We can have skis we don't have anything recorded in the notes. 

JRL: Interrupting, Was Symbols as WeakMap keys promoted stage two? We didn't record it in the notes.

YSV: it was promoted to stage 2 and three reviewers signed up. That was it think DE, JHD, and BSH, I don't know his last name. Thank you. 

## Resizable ArrayBuffer Overflow

AKI: They are available on the schedule under a time box. Overrun. There's the thing PHE was talking about explanation of reservations with global constructors. And next up was Yulia with a reply and you can do you can see this on the on the on the schedule. 

YSV: I believe I believe those two topics covered while we were discussing unless PHE wants to jump in with further discussions about models position here, but I think we did we did cover that topic as well as 

SYG: if it's okay if it's okay with PHE, I would like to save the majority of the time to return to global Constructor issue and Spend more time there, but I want to drain the rest of the queue because there were some topics that said that it's not directly related to the where's your Constructors Live question indeed to end the first topic after that is from DE, which titled. I was concerned about the wisemen decoration in the past, and I'm very happy with the proposal here DE. Do you want to speak to this?

DE: Sure so much of SYG update was about the semantics of the wasm integration. For example, the rounding the host hook and all of that looks very well done to me and I'm really happy that this proposal is gone to the WASM CG that it's receiving wide review that there's a there's a concrete iterated on API for exposing this to WASM memory. And yeah. So previous concerns withdrawn.

SYG: Good to hear. Thank you. 

YSV: And the next topic we have on the queue is from MM, which was Global / compartment. 

MM: Yes XS is a multi compartment system as SES and the compartment proposals introduce compartments and each compartment has its own Global. So the memory overhead of making new globals is more than what mean. PHE had mentioned is going by but I want to emphasize it. it's that there is a new Global property per new Global. Whereas an existing Global for which you add a property as using it as a namespace. That's the existing Global would be on the shared primordials. So it would just be / realm not / compartment that said for the particular thing that we're talking about I don't mind so much to new globals they see in the minor issue rather. rather the general issue of precedent is the important issue here.

SYG: all right, that would also be a good time to segue back into the discussion about the global Constructor versus the namespace constructors. So chatted a bit with Peter and they're so one I would very much I would like to take them up on their offer to do some exploration there on implementation strategies on the XS side to see if they can recoup some of the the memory cost incurred by extra globals see if anything that's already being done with the freezing strategy that they're doing for regular object properties can be extended to global properties as well. And for that reason a delay here is certainly reasonable and I would like how what I would like to get a signal my next meeting. 

MM: The freezing does not help with regard to the fact that they're  global. 

SYG: Why not? 

MM: Because you create new compartments with new globals at runtime. Yes start to populate them with all the globals so they're not in wrong. 

SYG: Where do those new so for the so when you create a new compartment with a new Global and you need to put in and a namespace object from somewhere that namespace object in the contents of that object that is in realm and you can just kind of plop that in and that's 

MM: Yeah, okay. 

SYG: so so why can that strategy with the copy-on-write thing not work for the global object itself 

MM: wasn't talking about copy-on-write a copy a copy on write could deal with this requires more bookkeeping under the hood. That's a separate matter.

PHE: I think my microphone wasn't working earlier. So yeah, I agree marks representing this very well here. I don't think specifically the fries mechanism helps us with globals, but there may be a modification or or clever use of our aliasing mechanism that would allow us not to allocate memory for globals that are not that aren't used over. There are fully frozen and so we can look into that. I'm happy to do that based on conversations with SYG. To see because that would certainly if we can be successful there or can find out many directions with work that that would certainly help alleviate some of the concerns with the growth of globals great. 

SYG: Yeah, that would be that would be excellent. It it I would like so in terms of process here. I would like to... whether we add new globals as a matter of precedent is something we should figure out. But it certainly affects more than this proposal. You know Realms is one that's planning to ask for stage 3 soon that adds a new constructor and the global Constructor if it becomes a matter of implementation in possibility that we keep adding new globals we should deal with that as a separate conversation and hopefully resolve that soon rather than kind of incidentally blocking on whatever the next proposal is that adds a new Global Constructor that on this I believe that would unnecessarily slow down velocity. So I'm happy to wait a meeting here and let's please yeah, try to have a separate discussion about what should we do about globals at the same time for

PHE: I think that's fair. Happy to report back next month with our next meeting with what we've been able to do or not.

SYG: so with that said as we were thinking about this there may also be a way to sidestep to “where should constructors live” issue at all. It would be a different API design. I want to take some time to kind of float that here. I'm not going to ask consensus for it, but kind of just throw it out there and get people to think about especially other implementers. They have concerns and then we can come back to it next meeting and we can discuss it in the incubator call if it is a viable path forward even if it is and we can sidestep the issue here. I still think it is very important as Peter has pointed out with this implementation constraint that we do come to a consensus on some precedent than what we should do for future global constructors. So that the I the technical solutions here to sidestep the issue at all is instead of introducing constructors that we don't we introduce we extend the existing ArrayBuffer and shared ArrayBuffer constructors, this is a PR. I opened yesterday on the on the repo proposal if folks have some time they are interested. Feel free to read through and there are different designs that are possible here the easiest and the simplest one is to take is to take a second parameter to the Constructor of ArrayBuffer and shared ArrayBuffer are such that if you pass in a second parameter, it's interpreted as a maximum length. And then your ArrayBuffer becomes resizable. You're all existing users the single parameter ArrayBuffer Constructor remain neither shrinkable nor growable. So nothing existing is changed the webcompat issue is a risk here does exist so it's so it's I think it's trivial but it is existing which is if your code for whatever reason passes multiple arguments today, it could maybe you could start throwing it could maybe start magically making your ArrayBuffer is resizable. so there is a back camp at risk there. Are there are other design options here to maybe sidestep that or to lessen the risk of that like taking an options bag as well as the second argument or even to overload the first argument with it options bag that lets you specify an initial and a maximum length and in this API redesign ArrayBuffers with have basically a different mode that says they are resizable or not. There will be a they would be a getter that says are they resizable? and already existing buffer would get a maximum byte length getter as well and if it is not resizable the maximum byte lengths would always return to fight length because it's not resizable. The nice thing is that transfer. well, I guess the diff doesn't show the transfer. I'm just looking at the diff the transfer there will be a single copy of transfer now because we only have one ArrayBuffer. And you can see diff here the difference is that you would just use the same? the same Constructor this lets this of this gives engines the same kind of security auditability property that we went with different types in the first place. The important bit is not that these are different types exposed to the user but that TypeArray that are backed by resizable buffers should get different hidden classes or shapes or whatever you want to call them from TypeArray that are backed by explain with ArrayBuffers because TypeArray paths abound in the browser and of the engines and those should remain untouched with the exact same semantics and we can do that if TypeArray back by resizable buffer is just get new classes and you hidden classes that need, you know, you need to write your ???. So overloading the extending the ArrayBuffer constructor here. It doesn't change that. You can flip a bit on the ArrayBuffer. Representation internally in the engine and when you make a new type the rate that's backed by a resizable buffer, you give that TypeArray that you and you kind of hidden class. So I think the really downside here is is some backup at risk and I do and a bit less opt-in I do like how current design is in that you have to opt into this new resizable vote, but that's a personal opinion and I don't feel super strong enough that shared ArrayBuffers are extended basically in the same way instead of a dot resizable thing. This is actually wrong. I was planning to read name this.growable because they shared ArrayBuffers can never shrink anyway, but you get the idea so that's about it for this new API redesign that could square the circle to put it up there if folks who have opinions about the designed like like the naming like JHD. I would love to hear your thoughts here

MM: even though I titled my question something else. I'll take the opportunity to say I really like this. It does reduce the global pressure of course, but it also I think just leaves the entire API surface of the language as a whole feeling much smaller. It's less cognitive overhead for somebody learning the language to just see that this is an optional characteristic of ArrayBuffers. So how the language feels to people who are not familiar with the history but coming in new is a good consideration and I think this makes the language feel smaller than the other way.

DE: Two comments. First kind of superficial nit, I think an options bag would be more clear (both for people reading the code and for if we ever find we need to add more things later) than positional argument. But that's it. I don't know if that would affect the compatibility issue at all. But that's the only thing I would change here. I wanted to ask how this affects the security concerns that you raised initially. Is it the idea that because there's a separate hidden class that we don't expect the security risk of changing those existing paths to occur, or that on implementation we found that things didn't factor as cleanly as we thought. Or how are things going with that whole security argument? 

SYG: a little of both. Originally I thought that having an array that's resizable buffers themselves have a separate hidden class would also be important for security. We learned that to be incorrect upon implementation. That is not important. What is important is the is the TypeArrayhidden class, whether they would be backed by resizable buffers or not. So that's one lesson that we learned.  And so the security concern was for how easy it is to audit or how easy it is to avoid having to audit existing battle-hardened paths, and I believe that to be entirely handled by having separate hidden classes for TypeArray.

DE: That makes sense because the battle-hardened part isn't the entry point that we see at the JavaScript level, but instead these routines where you can add this in class check at the start of it. Is that what you're saying?

SYG: Yes and around caching lengths across accesses in optimized code. You never use an ArrayBuffer directly for that, you have the TypeArray objects. So that's on the engine / VM level. On the application Level there may be - there was somewhat hand-wavy speculative that the code that is explicitly saying new ArrayBuffer maybe you want to audit those either and if you get the new type you don't have to but I think if we design it such that you can structure like with an options bag would look significantly different. I think that's more of a theoretical concern. Like I really hope nobody is shipping stuff. That's just passing ignored arguments that are objects in the second parameter to ArrayBuffer constructor. as for preferring an options bag, that certainly sounds fine. I'll probably spend the incubation call discussing this so if you have opinions, please come. Yeah certainly open to whatever shape this should do.

JHD: Yeah, I do slightly prefer an options bag just to avoid getting in that trap in the future. Not creating a new global eliminates the organizational concerns that motivated me bringing up the question in the first place. So it seems fine, and your consistency argument yesterday was compelling. But given Moddable's concerns, I think that this seems like a completely reasonable path forward.

PHE: Just briefly I think this is a much better API. Obviously it eliminates the issues we've been discussing and I wanted to thank SYG for sticking with it and seeing a path that lets us get to this simplification. I think it's better for the language overall. Thank you.

SYG: Cool. I do want to reiterate that I find the point PHE raised about the constructor - like I'm happy that this surfaced, the global constructor count constraint, and I just want to reiterate that just because it looks like we found a way out here that we shouldn't really delay that question because it affects other proposals as well. All right, and the queue is empty. So finally what I would like to ask is, outside of the surface API redesign around ArrayBuffer and shared ArrayBuffer. I would like consensus for kind of stability. and I wouldn't say locking down but stability around the rest of the design. How TypeArray constructors are extended, how that behavior works, the implementation guidelines, the stuff that we have been iterating on in the past for shared ArrayBuffer is actually when we did this. I think we jokingly call this stage 2.95 or something, but I basically want a consensus or some signal here that we are happy with the rest of the proposal and the semantics there. So on my end I can start by doing some implementation work for the rest of the week.

YSV: Alright, so on the queue, there's two items. The first one is mine. I'm taking off my chair hat at this point and speaking as a representative from Mozilla. Thank you very much for addressing our concerns around implementation interoperability with regards to the stuff that I've concretely reviewed so far. I'm happy with that. I would like to take a more in-depth look at these changes and think about it a bit but I don't have any direct concerns about the naming change immediately. So it looks good to me.

MM: Just support and especially like it with the new API. 

[queue is empty]

SYG: All right, sounds good to me. Thank you all very much. We can enter - really I do plan to come back next meeting to ask for stage 3 with the new API and come to the incubator call if you are interested. Thank you.

YSV: Before we close out this topic entirely I want to make sure that we don't lose track of the globals discussion that was raised in tandem with this proposal. Do we have a space or a plan for how to address that question?

SYG: To me it sounds like it would be a longer term - it's certainly not a proposal, so it would fall under the longer term open discussions. I will make a note to add such an agenda item to the next agenda. I don't know if I would describe myself as a champion. Probably, you know, I as a representative of the web platform prefer to be able to add more globals but yes, I will add a new topic to the longer term discussion for next meeting to hash out this question.

YSV: It might also make sense to do it asynchronously or something. So I'm just making sure that we don't forget about that as it was something that was brought up as something to continue discussing and whatever direction people want to take with that. 

### Conclusion/Resolution
- Stage 2.95
- Remaining todos:
  - removable of global constructors
  - addition of the new option in some form
  - Other semantics remain as-is.
