# 30th Nov 2023 99th TC39 Meeting

-----

Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

You can find Abbreviations in delegates.txt

**Attendees:**
| Name                   | Abbreviation | Organization      |
| ---------------------- | ------------ | ----------------- |
| Istvan Sebestyen       | IS           | Ecma International|
| Michael Saboff         | MLS          | Apple             |
| Nicolò Ribaudo         | NRO          | Igalia            |
| Rezvan Mahdavi Hezaveh | RMH          | Google            |
| Jordan Harband         | JHD          | Invited Expert    |
| Rob Palmer             | RPR          | Bloomberg         |
| Waldemar Horwat        | WH           | Google            |
| Chris de Almeida       | CDA          | IBM               |
| Ujjwal Sharma          | USA          | Igalia            |
| Linus Groh             | LGH          | Invited Expert    |
| Daniel Minor           | DLM          | Mozilla           |
| Philip Chimento        | PFC          | Igalia            |
| Ron Buckton            | RBN          | Microsoft         |
| Daniel Ehrenberg       | DE           | Bloomberg         |
| Samina Husain          | SHN          | Ecma International|
| Ethan Arrowood         | EAD          | Vercel            |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |

## continuation of the new stage discussion

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/process-document/pull/37)
- [slides](https://docs.google.com/presentation/d/1vdps2Ga2eHYhCSDN6pmYYWtPKfAsgP_i88sLlqEq-Xo)

MF: All right, so this is the continuation of our discussion about adding a new stage to our process. A reminder, last meeting, we reached consensus on, in principle at least, adding a stage between 2 and 3 for testing or whatever we deem necessary experience with a proposal before advancing it to be recommended for implementation. The reason why this is an agreement in principle and not actual consensus is just that I didn’t have any specific wording written up to agree to, so today I have that. So things I’m looking to do today are first approve the specific process documentation changes that I’ve made. So I have an open pull request right there that you can go take a look at. We’ll look at it in a second ourselves. So that will officially include that stage as part of our proposal process. Then I want to come to a decision on how we are going to name stages now and hopefully into the future, in case we need to make any additional changes. And then lastly, I have a recommendation to revert some of the current Stage 3 proposals to this new stage. So first this is the pull request to the process document. I think this is the entirety of it on the screen. It’s very short. You can read it there, but that’s the thing I’m asking us to agree to. Effectively we’ve just moved Stage 3 entrance requirement to this new stage and changed Stage 3 entrance requirements to be appropriate pre-implementation experience.

MF: Yeah, that’s it. And this is what it looks like rendered, so it adds a row to the table in the process document, which has all of the same content that you saw in the pull request. So that should be fairly straightforward since it is just the things that we talked about last time in writing this time.

MF: As far as naming, I think I have spent probably too much time thinking about this topic, and I wanted to start with, you know, I looked around at some of what other standard bodies do for their stage naming. You can see here is an example from ISO, which is fairly elaborate, to say the least. They have about 50 different stages, and the interesting part about this is that they number their stages with, likes 10, 20, 30, 40, which conveniently doesn’t overlap with how we have numbered our stages up to this point. We could adopt something similar to that which would have more freedom in the future for putting stages between other stages. It’s not perfect, but that is an option that we would have that I considered while doing this -- while I think about how we name stages.

MF: Mikhail from University of Bergen has also helped out. He sent me some information that, as you know, and as you saw earlier in this meeting, he has been doing a survey of all language design groups, whether they’re standards bodies or committees or whatever, and how they have stages and move between the stages, and here we see examples of how they name some of their stages, which I was using for inspiration as well. He also aligned them in a way that they aligned to what our stages are, so we could better select from those, if we wanted to. So thank you, Mikhail, for sending that over and helping out in that way.

MF: So what I’ve come up with here is that there are, at least what I’ve thought of, there are three naming schemes that are possible, and so the first naming scheme is purpose-based, and this describes what the committee does during that stage. So Stage 0, we do exploration. When they’re given two names here, I’ve underlined what I would probably prefer calling that stage, if we are to name them. So Stage 0, we do exploration. During Stage 1, we do design. During Stage 2, we refine the selected design. During the new stage we do validation of that design. During stage 3 we implement it, and during Stage 4, we integrate it into the draft spec.

MF: The middle column I call status-based. This describes the current status of the proposal as of this stage. So instead of what we do during that stage, it's kind of like the fence-post problem, this describes what we've achieved. So in stage 0, it's completely new. We've not achieved anything. In stage 1, we've defined the problem space. In stage 2, we've chosen a particular solution. In the new stage, we have approved, in principle, the design of that solution. All the details should have been worked out. Once the proposal reaches stage 3, we've recommended that proposal to be implemented by implementers. And at stage 4, that proposal is now a draft standard. So it is being integrated into the draft spec. And lastly, in the third column, these terms are prioritizing what we would like to communicate to the community, people who are not participating in this process themselves, so that we can make it clear what we want them to think of it. So Stage 0 means we just are not yet considering this proposal. It hasn’t been run by the committee. So it’s not being considered. Stage 1 proposals are under consideration, but that’s about it. All we’ve seen is the -- what is in the proposal README. Stage 2, we have a draft design, so that’s -- that emphasizes it that it is not final. And this -- in the new stage, it is undergoing validation. I think people understand what that means. During Stage 3, this was a little more difficult to come up with, I think people generally, especially in the software field, understand what staging is and this would be a staging proposal. And then Stage 4, effectively for everybody, that means complete. So complete works, and that also is in common use in other language design bodies.

MF: So those are the three naming schemes that I was able to come up with, and I think they’re all useful in their own way. So I have come up with a concrete proposal for what to do for naming. This is my preference here. So I think that the left column, the purpose-based names should be the stage names that we use for our process. So that's exploration, design, refinement, validation, implementation and integration. Small note here that, like, when I’m saying them, kind of in my head, I like using the word phase with them instead of stage. It sounds a little more natural to me, and that’s a terminology that’s been used with the WasmCG and maybe why it’s sticking with me. But anyway, that doesn’t matter. It’s just something I have experienced and wanted to share. Additionally, to help with this transition from stage numbers to stage names, we can assign a number, which won’t be too important. It will probably just be used internally in tooling and such in the meantime, while they are on their way to adopting the stage names. All public messaging that we have, where we talk about stage names, we should use -- where we talk about stages of proposals, we should use the names instead of the numbers. We should phase that out in how we communicate to the public and how we communicate internally. And also, I -- as I said, I think the other two columns are useful in their own way. And the process document already has a status column. So I’m recommending that we update it to, like, match the naming -- or like the descriptions I’ve used there. And incorporate what we want to communicate with that stage, both of those names into the process document. So that’s the concrete proposal there related to naming.

MF: And then finally, related to reverting proposal stages, I looked through all Stage 3 proposals. A lot of them didn’t have tests listed, but I found tests for them. The tests were implemented in test262 for almost all of them. So I’ve now updated the proposals list, and there are only two proposals that are completely missing tests, as far as I’ve been able to determine, and two proposals that currently have an open pull request with tests, which is effectively having tests. So because of that, my recommendation there is to revert just the two proposals on the left, the ones that have no tests, to the validation stage. This is the new stage. And for the two proposals that have open test PRs, we can leave them in the implementation stage, Stage 3, for now, just to not kind of disrupt whatever, you know, implementation or process might have been in place right now. I also want to note, there are other proposals that are at Stage 3, the implementation stage, that just have really, you know, poor or insufficient testing, so one or two tests. That wouldn’t be sufficient for moving to Stage 4, which is where our current requirement for testing is today. But I chose not to make a request for those to be reverted to the validation stage. I’m happy to do that in the future or, you know, if that is the committee’s desire, we can do that as soon as we want. But for now, my recommendation was at least just these two that do not have tests at all, and no indication of having worked on tests.

MF: So a recap of the things I’m asking for consensus for today, I want to address these three things in this order. One, officially adopting the new stage into our process. I think this should be pretty much pro forma. We’ve already, in principle, agreed to all these things that I’ve written down here and I hope to have accurately reflected those things. So the new stage as described in the process document pull request. And agree to merging that pull request. If we are successful there, I would like to see if we can agree to that naming plan that I have proposed or possibly with some modification to it, if we have a discussion that necessitates it. So this would include the changes to the process document to improve communication that I recommend, as well as updates to our communication in the proposals list, the how-we-work repo, on the website tc39.es, within ecmarkup for tooling support, and in each of the proposal repos where they list a stage number today, as appropriate. And, after that, assuming we have worked through that, I would like to ask for consensus on reverting those Stage 3 implementation stage proposals to the new validation stage. And that is it for the presentation.

JHD: Okay, I’m first on the queue. So we’ve discussed this before. Like, no matter what we do, numbers are never going away. Everyone will continue to refer to them as numbers. But then separately, and there’s a number of other items on the thing, is I would not offer consensus for that. The numbers are better. We already had names, nobody used them. We used the numbers because the progression is clearer; the ordering is clearer. And so I’m happy to add names back, new names. There’s nothing wrong with most of your names there’s a bunch of bikeshedding on the names from the new stage that will happen. But from name is fine, but I think it’s important that we keep the numbers in terms of making sure that we what we say in our external communication is aligned with what the entire community who pays attention to this stuff has grown to expect.

CDA: Yeah, I agree partially with JHD. And I just feel like we skipped a step here because you’ve come up with these different names, and I think you’ve done a good job of it, but I don’t see the compelling reason of why we’re moving back to names or adding back names. When this came up previously, I looked at the discussion from some years ago where there were originally names and they switched to numbers, and I found that discussion to make sense and to be compelling. And I don’t know -- I don’t understand why we have a need or compelling reason to add the names back into it. So I’d like to understand that motivation before even talking about what the ideal naming scheme is.

MF: I can offer a brief answer to that. I showed in the presentation that we could follow some numbering schemes and even numbering schemes that don’t overlap with our current numbering scheme today. The reason why I went the naming route is because in our last discussion, which was probably an hour, hour and a half, on this at the last meeting, we were unable to come to any agreement or even any set of constraints that permitted any choice of number for this new stage. There were people who said it must not start with a 2 and there were people who said it must not start with a 3 and people who said it must be between 2 and 3. These are not constraints that I can resolve. So instead of going that route and having the same fruitless discussion during this meeting, I decided to try to see if we can use a name-based scheme. We’ll see how that works.

NRO: I was going to say exactly what MF said.

EAO: Yeah, just reiterating my thoughts on this stat. We should make use of the fact that between -- if we’re going to have any number assigned here between the value integer numbers 2 and 3, there is the mathematical constant _e_, which has a value of 2.718 blah, blah, blah, which is roughly in line with the sort of number that I think we most might want if we want to actually specify a number. So if we’re not renumbering the later stages and if we are particular attempting to use a name like validation, which by the way, I kind of like, then I would very, very much like for the number here to be -- that is used to be the mathematical constant _e_. Be particular, because, well -- well, in particular, because it injects I think an appropriate amount of whimsy into who we are and how we present ourselves, and it’s also the only value between 2 and 3 that I am at least aware of that has a single character representation for it. That’s it.

USA: Thank you, Eemeli. Next up we have Nicolo.

NRO: Okay, yes. So specifically for the names proposed, I like them. I prefer the names in the third column, but I’m fine with any column. I just dislike integration, because where we use the integration term when talking about HTML integration, and that’s something that’s very often -- that very often happens before Stage 4. I understand these are integrated in the proposal into the main syntax, but we can probably find another name for this, if not just completed, even if it’s not the purpose of Stage 4, just because in practice, how everybody thinks about Stage 4 proposals, except maybe for the spec editors.

USA: All right. Next up we have WH.

WH: I find the names in the purpose-based column very confusing, and it looks like I’m not the only one here. I would very much prefer to use a status-based names, which are much more familiar and describe what stage a proposal is at right now. For the short form, number _e_ sounds like a great idea. And there is another thing which wasn’t addressed, which is whether moving from stage _e_ to Stage 3 will or will not require committee consensus?

MF: What was the question?

WH: Will moving from stage _e_ to Stage 3 require committee consensus or will it be automatic as soon as the tests are done?

MF: Of course it requires committee consensus. Each of the stage advancements require committee consensus.

KG: But I hope we can have a convention that it’s basically pro-forma. We’re not revisiting previous questions, we’re just saying, that, yes, we agree it is sufficiently validated that we can move on to Stage 3 and no other questions about the proposal at that time.

WH: Can you tell me why it shouldn’t be automatic?

MF: Because it’s any sufficient experience. Some proposals require other kinds of experience or feedback via possibly, like, polyfills that, you know, get community feedback or whatever it is that is necessary. Like, those criteria end up being determined per proposal. Yes, for some proposals, you will be able to just say, like, whenever test 262 maintainers have decided that the tests are mergeable, that this will advance. But that is definitely not always the case. So I don’t think we could have some sort of automatic process associated here.

WH: Okay.

USA: We next up have MLS.

MLS: So I agree with Waldemar. I like the status-based better than the purpose-based, although the new stage, I think, since, you know, we have what’s going on, what the stage is for, I prefer that the new stage be called test development.

USA: Next we have DLM.

DM: Yeah, I would just like to say that as an implementer, I don’t think this advancement should be automatic. I’d like to examine in detail whether the testing or considerations in place are sufficient before advancing to Stage 3, since that’s when we begin our implementation. And I know in the queue right now, I would also prefer to continue with numbers. I think we’ll spend a lot of time coming up with names and people are already familiar with numbers.

USA: Next we have RBN.

RBN: So this actually was started as a response to the topic that Chris had, which you apparently moved to later, but one concern that I have was that “validation” and “implementation” are often too tightly coupled. You can write tests, but you often need to run an implementation against those tests to validate that the tests themselves are written correctly. They kind of go hand in hand, and it’s kind of hard to separate these things. So I’m wondering if the names here are wrong. Like, “implementation” to me is -- if the goal is that no one should start any implementation until tests are written, it’s, again, hard to write those tests. If the goal is that we should not generally implement this across all implementations, I think that’s also what Stage 4 means. It just feels like these names are too -- represent too much of something that is not quite as delineated as they seem. I know that I’ve had to, when writing tests for the various proposals that I’ve had, I usually have to use something like an implementation of engine 262, which is not caught up on all of these proposals that are currently in Stage 4, so sometimes that implementation might not actually be perfectly valid because it has dependencies, because the proposal has dependencies on things that haven’t been implemented yet, so there’s not really a guarantee that actual implementation is correct, so it’s really hard to write these tests without something to run them against.

MF: I just want to make it clear, we’re validating the proposal here, we’re not validating an implementation. So validation of the proposal means that you have -- let’s say it is an API proposal -- you have considered all reasonable inputs and the expected behavior for those. You know, up to this point, you may not have considered all inputs that you would during the testing phase or all orderings of effects. These things are fairly nuanced, and even though you’ve written the spec text, you may not have understood the consequences of that spec text. You know, just simple step ordering things that, until you’ve been forced to consider, like, inputs and outputs themselves. So an implementation, if it’s a correct implementation, to confirm that you’ve written your test correctly, isn’t really necessary to do that.

RBN: It sounds like what you’re wanting are tests against the specification, not tests against an implementation, which is something you kind of said, but we have no way -- well, there have been projects that have been discussed in committee of research to, like, turn the spec itself into something evaluatable approximately, that seems like something you would want to be able test to verify the inputs and outputs and be able to verify implementation tests from that, but actually writing and having dependency on having full tests in test262 when there is no implementation to validate is very difficult.

KG: So I think even in a world in which we did have fully productionized esmeta to produce the tests, that wouldn’t accomplish what I want the stage to accomplish and what I think MF wants the stage to accomplish: a human, ideally champions of the proposal, have sat down and thought really hard about the trivial little consequences of decisions about, like, the order in which things happen. And while I agree, Ron, that it’s very hard to write correct tests without an implementation to test against, like, fully correct tests, I think that it is very important to do the work of thinking through all those little consequences and that that work is normally done only when writing tests, and that that work can be done without an implementation. Like, I have done that for several of my proposals, and I do end up putting some bugs in the tests where I do something. And I work through the process of that and working through the consequences of the trivial parts of the proposal that otherwise doesn’t happen. While I agree that it’s -- it should be expected that the tests continue to be refined once implementations are running and the tests can be run against the implementations, I think that they can and should be written prior to an implementation actually existing.

RBN: I’m not going to argue on this, but I think when you stay writing tests is the only way to validate that these inputs are correct or to get that understanding of inputs and outputs isn’t necessarily true. I found things that I read a bunch of tests for and wrote the implementation, I realized there are pieces that are missing in the specification text that weren’t in the -- can’t be validated by the test because the tests were assuming certain things worked. These two things do kind of go hand in hand.

KG: I’m not saying that writing tests is either necessary or sufficient. I’m saying in practice, that tends to be the point at which it happens. Like, we have seen this across many, many proposals. And of course, not all of it happens there. Some will only come up in implementations. But the bulk of the work tends to be in the test writing phase, in my experience.

RBN: That goes to points of the topic, these names, they feel little bit too cut in stone. The way that the names that are chosen like "validation" and "implementation" , when those two things aren’t quite as delineated as they seem. So it’s not a thing that -- I’m not trying to say that these are the wrong phases. I’m saying these are the wrong names.

USA: All right. If that topic is finished, next we have reply from PFC.

PFC: This chicken and egg problem with writing tests, this isn’t a new problem with this process change. This is something that basically anyone who writes or reviews test262 tests will have encountered before. It would be nice if we could take a look at the test pull request and take a look at the spec text and say, 'these tests are correct' or 'these tests are not correct.' But in practice, that’s not possible unless the proposal is really trivial. There’s always this chicken and egg problem, where you write the tests, and then you test them against a polyfill, which may have bugs or may be incomplete. Or you test them against a partial implementation you build yourself from a branch of the engine, and if there are discrepancies, it could be a bug in the test or the spec or it could be a bug in the implementation. Or like KG and RBN said, ESMeta or engine262. There’s never going to be a clean separation of these, so personally, I think it’s fine that we acknowledge that there’s not going to be a clean separation in the stages.

NRO: I also, when writing proposals, validate them with either -- I usually write a Babel implementation or sometimes an engine262 implementation. And if this helps the person writing tests, we can still work on some implementation to help us write tests. We’re just not expecting browsers to actually start putting in the work for it.

USA: Thank you. Next we have CDA.

CDA: Yeah, I’ll try to be brief, because I’m stacking up the queue now. And I think RBN already spoke to this, but I think a lot of trouble with these names are the overloading of the terms, validation to me seems like something that comes later. You know, maybe review is better, but we use that term in other contexts as well. So I’ll leave that at that. The -- you know, when I asked why are we looking at names now, the answer was that we couldn’t agree on a stage number, but I think we’re making the problem larger. You know, we couldn’t agree on a stage number, now we’ve -- you’re introducing the naming and now we’ve got to figure out names for four or five or six stages. That seems like a more difficult problem to solve than just the one with the new stage while retaining the numerals. But I don’t want to ignore the -- I was trying to look for the notes on the original conversation of when the move to numeric stages happened. But I don’t want us to just ignore that and pretend like that’s not an issue anymore, so if we are going to use names, we should be able to explain why the concerns about the names that we moved away from originally, why that’s either not an issue now or how we are still solving for that issue, and it’s not regressed to the original problem that was solved years ago.

MF: I can clarify that for you. If the one you’re talking about is the one from, I don’t know, five or six years ago or whatever it was, that wasn’t a move from names to numbers. Those names that were listed in the process document were not used by anybody, and I don’t remember who it was, but somebody pointed out that they also didn’t accurately reflect how we used each of those stages. So the names were just dropped from the process document because of their inaccuracies. The numbers were always what was used, at least during my tenure of about ten years.

JHD: That’s right, the names and numbers landed together with the post ES6 stage process. We never didn’t have the numbers, is my understanding.

CDA: Okay, yeah, so I misspoke. This is, again, why it’s important that I find these notes, to be able to accurately speak about it. Thanks.

LGH: [on queue] official stage names for external communication emphasis here, seemed like a good idea regardless of what the committee prefers to use internally. End of message.

JHD: I don’t agree. I think the things people are already using outside of TC39 is the things we should use in our communication, otherwise it’s just being aspirational. No matter what we do, we’re not going to shift what people use to describe them, so we should be, thus, consistent.

>> Next we have MLS.

MLS: Following up on what JHD just said, the Venn diagram doesn’t have an intersection. If we say we’re going to have the current stage numbers and add a new stage and we have a stage. Why don’t we borrow a stage from ISO does that don’t go into great detail and fill it all out, but multiply our current stage business 10, so we have 0, 0, all the way up to 40 and new stage 25. I think it’s pretty easy to train the community, old Stage 2 is now stage 20, old Stage 3 is now stage 30. I do think we need to come up with a good name for the new stage. But let’s try make it a solvable problem with both numbers and names.

JHD: Yeah, I mean, that’s certainly -- that certainly is possible, but I don’t see why it’s not easier to put in a 2.5. I don’t think anybody cares that there’s integers. There’s no type here. And the current disagreement is about, like, 2.5 versus 2.7 and stuff like that, and we would have the same discussion on 25 and 27 and so on.
. MLS: So _e_ is cute, but I don’t think it makes sense, because it doesn’t -- it doesn’t sort nicely, you know, 2E, 3 --

>> That’s fair.

MLS: _e_ is nice and cute. And I think 2.5, okay, so you’re adding a significant digit, why do you care where it relevant to the decimal point. Why not make it 25 and have 0, 010, 20 and 30.

JHD: That adds one thing instead of changing four or five existing things.

MLS: Right.

JHD: I agree it keeps the right ordering.
. MLS: Yeah, I don’t think the -- I think community is smarter than we’re giving them credit for. We say old Stage 1, new stage 10, bomb, we’re done.

USA: Okay, so, Michael, that was it for that topic. We have Nicolo’s item up ahead, but that doesn’t really pertain to this whole discussion of stages.
. MF: Well, I don’t think really any of it pertained to the first thing I was asking for. We seemed to jump the gun, and I guess because everybody is so interested in naming, I assume that means that everyone already agrees to consensus on the first point, that we do want to adopt this stage, include it in our process, and merge that PR. I would like to ask for consensus officially on that first point.
. USA: Clarify, you’re asking for consensus on the introduction of a new stage between the new -- the existing stages 2 and 3? And, yeah, that’s it, I guess.
. MF: Exactly, as described in the process document PR I linked to on the slides.
. USA: Right. Nothing on the -- okay, Chris has support for Stage 1. Then there is Michael Saboff who says didn’t we agree to that at the last meeting. I guess that counts as support.
. MF: Yes, MLS, the agreement was in principle to add that stage, but I didn't have any specific wording. So we're agreeing on the specific wording, which would now officially include it in our process by adding it to the process document. As of the last meeting, it's not part of our process. It was just an agreement that we would explore this route. Yeah, and I was given the parameters of that.
. USA: Nothing new on the queue. I would say that we have consensus on the first sort of statement.
. MF: Great. Maybe, then, I can skip from 1 to 3. We can address NRO's queue item and we can try to reach consensus on point number 3 on this slide before going back to the whole naming debacle.

JHD: Yeah, I would describe it, from my head, is consensus on number 1, comment that we can’t merge it until -- except we can’t merge it until we settled on number 2. Hopefully we don’t have to argue about number 1, anymore, only the naming.

MF: I don’t see a reason why it prevents us from having it as part of our process. It’s an inconvenience that will hopefully motivate us to make a decision. But it’s not strictly necessary.

JHD: In the history of software, the most permanent thing is “temporary”, so I feel like it’s pretty important to wait.
. USA: Note that it says TBD at the moment.
. JHD: But, like, people will externally start describing things as stage TBD. It will happen, I guarantee it. I would encourage us to wait until we settled the naming thing.
. USA: Next up we have Nicolo.
. NRO: Yes. For point 3 here, I guess. One of the current Stage 3 proposals mentioned is that do not have that 262 service phasing parts, and the reason why it does not have the test is because it’s incredibly difficult to write them, with the reason being that this proposal only works when the host platform exposes some type of module from JavaScript so it connects the source for that module. And it explicitly forbids a source for the modules. There are WPT tests for this proposal that specifically use wasm as the example external module that has a source, like, given how this proposal is on the edge between 262 and HTML, maybe we can consider not demoting it given that there are some tests, just not in test262.
. MF: Yeah, it sounds, to me, that WPT tests would be sufficient for this kind of proposal. So I would support not including it -- so that would mean that only decorator metadata would be recommended for demotion to the new stage.
. USA: That’s it. That’s the entire queue. I think we have a long bikeshed ahead of us, but apart from that.
. MF: Yeah, so I am actually kind of unclear on whether JHD has withheld consensus for number 1. It seems like we reached consensus. I’m not sure..

JHD: No, I do not think that we should be merging the PR yet. I think that we should agree that we will adopt the new stage into our process, and I would call it conditional consensus on resolving number 2.
. MF: Does that mean that if we’ve not decided on the new name, we cannot have proposals at this new stage?
. JHD: I’m talking about merging the new PR into the process document. I’m talking about updating the public sources of truth. We can internally consider things in those stages in the meantime. That might make it more confusing. That’s a different question. But I think we should settle on the naming before we make public communication.

MF: Okay, well, let’s hope that in the next 45 minutes that we have allocated to this topic, we can come to a resolution here.

JHD: Fair enough.

MF: I think one of the biggest sticking points was that during the last meeting there were a lot of incompatible constraints voiced about choosing a number between 2 and 3. And that made it seem to me to be impossible to do that. Would some of the people who voiced constraints on that be willing to speak about their current positions on it, maybe they have changed, maybe it is possible to stick to numbering, we only have to decide this one number and be done with it. Maybe let’s explore that route first.

KG: Well, I wasn’t such a person. I think JHD has at least expressed strongly that he doesn’t want 3 in the name. I don’t really care about the name of this too much. I do want to say I think we should try to leave the other stages alone, no matter what we do. And so no matter what we do, I think we should only try to pick one name right now, number or name. And I am fine with picking a number, and I’m also fine with picking names and having 0, 1, 2 and test stage developments 3 and 4. I think it’s okay to be inconsistent. I think that it is also a suggestion of text relevant if Michael or whatever it was, sounds good to me. Although I absolutely liked your approved in principle option. I’m fine with other things. I just want to emphasize I think we should focus on this and not try to touch other things.
. USA: Next we have Waldemar.

WH: I’m fine with stage _e_. And if we do Michael Saboff’s suggestion to multiply the numbers by 10, I’d be fine with stages 0, 10, 20, 27, 30, 40.

>> Okay, anything that’s a number, really. That’s it for the queue.

KG: Does anyone not like stage _e_?

MF: I hate the whimsy, but I would accept it.

USA: Do you want to ask for consensus on this?

MLS: I specifically don’t like it because it’s not -- it is not a literal number.

USA: Okay. Well, there’s a clarifying question from Nicolo.

NRO: Yes, do people that use E actually call it stage E or 2.7 or whatever is the E value? Like, it’s a number with digits, or would you call it a letter?

WH: We’d call it stage _e_.

USA: I guess E is the proposal for the number, right? Like, it would have another name still going with the idea of also introducing names. But E would be specifically the number. Chris, you’re on the queue.

CDA: Yeah, there’s a question of whether anybody did not like E. I do not like E. Also, didn’t we discuss E previously?

>> Yes. At the last meeting, it was suggested by EAO.

USA: We have a reply by PFC.

PFC: Yeah, I also don’t like it. I feel like whimsical things tend to be barriers to external communication. But I don’t want to hold up the process, so if people want E, that’s great.

MF: Also the point that Nicolo brought up concerns me, about having some people refer to it as E and some people refer to it as approximately 2.7. Some people will be just confused. That kind of worries me. And I think we’re just bringing problems on ourselves for no reason where we could just choose, like, a decimal number that is rounded to the tenth place evenly.
. USA: Next we have Eemeli.
. EAO: Yeah, I just thought I’d mention that I at least would be happy with something like 2.718 as an ex-police number for this.
. USA: We have a reply by Ron.
. RBN: I kind of concur with the comments that the whimsy I don’t think makes sense. E as much as we’re all developers, and many of us have backgrounds in mathematics, it’s not necessarily obvious to many people what that’s going to mean. Something like 2.718 is also going to be relatively awkward to both write and remember when you’re trying to write things down. I think it just makes sense to call this -- call the stage something like 2.b or as I discussed in the chat, pre-3. It doesn’t necessarily have to be an integral number, it doesn’t have to be a floating point number, it doesn’t -- it can be text, it can be whatever, and we can call it 2B, we can call the first -- call 2, 2.a, and just consider those to be interchangeable. Just something that unblocks us but really doesn’t, like, have to necessarily imply something whimsical or specific closeness or distance and if we need to add another stage after it, we can.

USA: We have Chris up next.

CDA: 2.b implies the existence of 2.a, which is not necessarily a problem. I see MF’s response there. I guess if you’re changing 2 to be the A, then sure, but that leads to some ambiguity when people refer to things as 2 and does 2 mean 2B now or 2 mean 2A now?

RBN: I mean, I think the way that this has been discuss and presented, it feels like really what we’re doing is we’re moving the testing phase to Stage 2. But we don’t want -- we want people to be able to advance beyond Stage 2 to the point where we don’t relitigate for our bingo, relitigate all of the things that were discussed in Stage 2 just because we needed to make a change in tests and get approval for that. So it does feel like making it 2 dot something makes sense. And like I said, using 2 and 2A interchangeably I think would be acceptable, and I’d put in the chat and call it 2.testing and I think Rob just said that just now, or 2.validation or 2.v, or this something that lets us indicate this without necessarily trying to make a huge change to the process that we have in place since, again, what it seems like what we’re doing is basically moving the tests back to Stage 2.

MLS: We’re really concerned about confusing the community about not changing the existing names. But we’re willing to confuse the community by calling it E/2.718285. I’m -- this is the last time I make this case, I think we need to be consistent with our numbering, and if we want to introduce a decimal, I think that’s confusing, because it’s only one stage that’s going to have it. I think that the community, we got to give them more credit than I think we are. We’re adding a new stage. And so adding a new staple stage, we have to change something to fit the new stage in, because it’s at the middle and not at the beginning or the end. So let’s just bite the bullet and make it so that we do this in such a way that we can do this again if we want to. That’s the last time I speak on this.

>> All right, and that was the queue. So I think the options, the big options here are E, 2.5,
2.9, renaming all the existing stages altogether, and then make it something like 25 or 29,
possibly. How do we do this?

MF: Maybe this is an opportunity for a temperature check along those directions. I don’t know how to use the temperature check thing.

>> Yeah, but, like, what do we check the temperature on?

MF: No, what I mean is not that I don’t mechanically know how to use the temperature check thing. I’m not sure of how the temperature check might be appropriately used to resolve the problem.

WH: Would anybody be opposed to 2.7?

??: I think you have three temperatures. You have _e_, 2.x, (2.5 and 2.7 and 2.9 have been discussed), or changing the numbering system altogether. 10, 20, 25, 30, 40.

MF: Can we get a response to Waldemar’s question, first. Would anybody be opposed to 2.7?

MLS: I think it's confusing. I don’t think it’s a good idea.

MF: Okay. Then yeah, we will need to do a temperature check along the lines of what NRO suggests.

USA: Eventually, Michael what you are suggesting, start at the temperature check and redesignate every emoji, a certain option and then people vote for their favorite option

MLS: There needs to be 3 options. I think there’s E, a lot of people want E. There’s 2.X, and I don’t know what X is, 2.5, 2.7, whatever. And there’s a new naming scheme, my suggestion, you can – the temperature check should be a new numbering scheme. Or you multiply things by 10. I think that’s only three choices. Let’s not confuse it more than that.

MF: Michael, haven’t you already rejected two of those options?

MLS: I know what I am going to select on temperature check

MF: Haven’t you stated that like you would not permit 2.7 just now and you would not permit E?

MLS: Well, I think 3 of us spoke up that we don’t like E.

MF: Yes

MLS: I don’t believe in lone veto, so we need to have a discussion sometime before consensus. If I am the only one that doesn’t want 2.X, then I live with it.

MF: Well I will re-ask WH's question, does anyone in addition to MLS object to 2.7 in particular?

RBN: I really don’t think 2.7 makes – is very clear. I don’t think it’s – the right direction. I also object.

??: So we have objections to 2.7. Do we want to try the temperature check?

??: I am willing to, but I am afraid it feels like we have incompatible constraints again.

??: Right. I think you’re – people don’t like E. People don’t like 2.7. People don’t like the naming.

??: It sounds like 2.7, arguing against 2.X or anything.

??: There’s a few more options, 2 +. Would you like to try that? How do you folks feel about that?

??: I think more options dilutes intention.

RPR: Could we just check, are there objections – let’s start with 2.testing. Are there any hard objections to 2.testing?

WH: Yes, I object. That sounds like Stage 2.

??: Okay.

MLS: Agreed.

RBN: Are there hard objections to “2+”?

WH: Yes. Same reason.

MLS: Yeah. I don’t know –

WH: “2.” followed by any letter is much worse.

USA: Should we have a bunch of replies, but I think they’re not like . . . Things – Eemeli, would you like to speak to that?

EAO: It sounds like we have multiple options of the temperature check process. It isn’t necessarily the best choice to go with them. Do we have some place like the notes document which we could entry a preferential vote across the candidates after we identify a subset of all the candidates to a vehicle giving us information how we stand on this, and possibly we could preagree to go with the winner of this vote with losers basically – single transferable vote style of balloting?

USA: I feel it’s difficult to do the counting of the vote synchronously, especially on a topic like, this where there’s no clear preference.

EAO: Did the counting for things like this turn out to be very easy, especially if we have only – what are we – 20ish people here. That could be done in a couple of minutes manually. USA: All right. Michael, you had a reply?

MF: I am not sure of the details, but there are some rules that ECMA has any time a vote is taken, and the voting system used might be included in that. If we go that route, we need to make sure that that is actually acceptable.

USA: That would make things even more significantly difficult, I feel. Going by the ECMA bylaws, voting is per member. Yeah. I am not sure rank voting is considered in that. Nicolo has a proposal?

NRO: Yeah. I guess it’s been discussed. I don’t really think consensus is – we can just do like follow whatever rules we have for voting, which is I think as mentioned, like one vet per member and whoever the majority wins. And we are wasting a lot of time on bikeshedding a number. And like I didn’t think the process we have consensus applies to this type of things.

JHD: I think things that are communicated externally pretty much do require consensus. I think that this isn’t like how we use TCQ or something. This is part of the public stance of the committee. So in this particular case, maybe we can all agree to do our consensus to a vote. And that would be great because the wasted time is unfortunate. But in general terms, I think something like this does require consensus.

KG: So I happen to have been reading the ECMA bylaws recently. I do think that it’s fine to try to proceed with consensus here. But the bylaws specifically call out that voting is to be used when there’s no other way to make progress. And it seems like this might be such a case. So I don’t object to tying to seek consensus first. I just – at some point, I think we may have to give up on that and voting should be the fall back

JHD: Yeah. And I will – as much as I would – if this were a language thing here, I think and hopefully all of us consider having to vote being a huge process failure. But since this isn’t a language thing, I think maybe it would be an acceptable consequence if we can’t come to consensus. I was reacting to the implication that this is something to be dictated by chairs. I agree, if we can’t get any progress, and we all agree we want the stage, it makes sense to do a vote. I don’t think we should go to like the ECMA one vote per member thing necessarily.

MLS: I suggest you don’t want to do that because it’s only ordinary members that vote. I believe at this meeting we currently have Bloomberg, Apple, Google, IBM

JHD: Ordinary members are voting on Ecma. I thought all members vote, that’s all it’s been for editors and chairs. Either way, doing by ECMA member means that anybody who has a co-worker as a delegate, their votes will count less because they have to smoosh them together into one vote. And invited experts don’t get votes. That might not be a satisfactory way to do voting.

DE: Nonordinary members can vote for committee-level things.

DE: If we did want to have a case where we didn’t want to go by strict consensus, I hope we only use it if there’s a clear super majority and not go by anything on the boundary. The Ecma bylaws give us leeway in how to run things. And how to make decisions. So we have flexibility here.

MM: I am – even though we could invoke that ECMA bylaw, I am scared to do anything that sets a precedent to make decisions not by consensus, and I think this one is easily solvable by asking for consensus to resolve this particular issue by voting. What I am hearing is that there’s general agreement that we’re willing to resolve it by voting, so if we just get consensus on that, then we haven’t established a precedent of weakening consensus as the decision procedure.

USA: All right. Michael, what about we do this: open up like hedge doc or something on your screen Shane and we could do a quick legend, and do mock vote or a vote of sorts using the temperature check. And then ask for consensus on whatever gets the most points or . . . Votes.

CDA: Could we do a mock vote for fun, to inform whether I want to join the consensus for the vote. (joke). I think before you ask for consensus for the vote, we need to define, are we doing like a vote that is simple majority, based on the Ecma rules where its ordinary members voting or not – I actually don’t think it’s limited to ordinary members, or if it’s a 75% – you know, what is the actual vote needs to be defined before we ask for consensus?

?USA?: Well, this is why I think it’s better to either go for a simple temperature check and ask for consensus on whatever wins the temperature check. Or just go for a proper vote with like simple majority. Because otherwise we have to get consensus on how to vote, and then – yeah.

IS: [ in chat ] In TC39 practice we go with consensus, we try to avoid voting. The voting according to Ecma rules would be based on TC39 membership present in the meeting (ordinary, associate, NFP, etc…one per organization) and then a simple majority. Alternatively, though not in the Ecma Rules (but compatible with it…) we could go for a socalled “indicative vote” (by organizations present), which is basically similar to the “temperature check” (by anybody in person present in the meeting, except for observers).

USA: (Reads the chat of IS) Michael, what do you prefer is that case?

MF: Don’t make me choose. I put my opinion in the queue. I think if we are able to reach consensus on a vote, that is equivalent to some of the people holding up what is, I think, the majority opinion here, just deciding not to hold that up. By consenting to a vote you would say, it’s okay to override my opinion. I would say maybe we try that first. Otherwise, I am not sure what to do after that.

USA: Okay.

USA: Well, would somebody who has been against 2.7 so far like to speak to that?

USA: Oh, yeah. Sorry. Ron? I think your topic . . .

RBN: My reply. I was asking, and beginning to think this is – we need to solve this temporarily, at least, for this discussion. But I think we might want to have a larger discussion separator. We have been incorrectly using the temperature check since the day it was added to TC39 and it’s been, this means this thing this means that thing. We instead need to – as the work has been going and might be going on in the future for improvements to TCQ, include an informal binding mechanism, we talk about voting, it sounds very formalized, when a lot of the times we want to give the champion more feedback and be expressed more concisely than a lot of people just expressing their opinions [via + 1. A, is this a nonbinding poll and continue to use the temperature check in this way. I don’t think that’s the way it’s been designed.

USA: I think a combination of your concern plus what Michael just suggested could be done properly through a temperature check. We could ask for temperature on 2.X or 2.7. And then like people could adequately vote, if they – for example, indifferent or if favor and so on. Sorry. Eemeli, you have raised a hand. But . . .

EAO: Yeah. I mean, according to TCQ, I’ve been talking for the last couple of minutes, but I – yeah. My strong request would be to get consensus first, on binding to the results of the vote or a poll before we do the actual vote or poll or indicative poll or whatever we call it. Because as we are currently in the situation, where each of the options that has been presented has had somebody strongly objecting to it, if we vote first and then find ourselves to that by consensus, I would be very surprised at whoever lost the vote would not – would agree to that and rather not submit to that consensus. Whereas, I do believe it’s easier for each of us to bind ourselves to a vote or a poll before we know the results of it.

USA: Can we move past – oh, there’s . . . More replies. So maybe let’s just quickly go through the queue. Nicola, you had a reply

NRO: How to vote, giving the 50% we need, is to first do a temp check and then vote between the two winners.

IS: Yeah. Okay. So once again, so Ecma has one rule regarding the whole thing in TC and this is the 50%. Yes. So the simple majority. So that can be done. In practice of a temperature tool check, et cetera, what you are doing, it is not explicitely supported by an ECMA policy, but it is also not said “no” by the ECMA policy. It is up to you, it’s possible. That’s the reason, we always left it there. And the other point is that the unanimous agreement, the consensus agreement that was again a TC39 practice. And so there’s a little bit of contradiction between the TC39 practice and the ECMA rule. The ECMA rule is very clear. You should try to get a consensus. If that’s not possible, and you want to move ahead, then it is the simple majority vote. But so now you have to be careful what you want to do. In the first case, you can fall back of course to the ECMA policy. But my preference would be that you do also this time in the TC39 way, you should be trying with temperature checks, maybe to come in to comprise, et cetera, and then if the consensus of TC39 doesn’t work, then you have to go back to the ECMA rules. So I don’t know if that was very clear or it was – it was just confusing the matters.

CDA: I feel pretty strongly that – I don’t think we should move between the extremes going, you know, we can’t get unanimous consensus and go that way, we do one member, one vote. 50% majority voting. I will try to get, first – if we want to get unanimous consensus, a general consensus, and that could take the – for the purpose of voting, if we have an overwhelming majority in favor of one of the options we do that and not one member, one vote. We should find something in the middle ground before we go to the opposite extreme.

USA: All right. MLS says consensus for a vote lowers The Bar for approval. What do you folks say we do a nonbinding temperature check regarding one or more of these options? Let’s start with one of the options, right? In the chat, MF you say, temperature check on what we don’t like would be useful. Do you want to do a reverse temperature check?

MF: Yeah. I think Nicolo suggested this originally in the chat. I think that would be most helpful, we just find the number of people opposed to each of the currently considered options and that would allows us to focus our effort on the least opposed option making progress. You know, talk to the people who oppose it, see how strong the oppositions are. That kind of thing. What is the basis for it?

MF: I see some thumbs up in the meet.

>> All right. So let’s set up a legend, if you will. And then I can start the temperature check on the TCQ. It seems like people are happy with the idea of eliminating least popular options. What do you believe is the less popular option here? Because it’s very hard to get a feel of the committee at the moment.
>> No, that’s what we need the temperature check or whatever we are calling it, the vote, determines the least popular option. We can’t see what the least popular option is and then . . .
>> Okay.
>> You know what I mean? We have to . . .
>> Should I in the meantime, there is a legend –

WH: There are lots of biased ways of trying to arrange the votes or assign emojis to favor particular outcomes. I would like to see a temperature check for each alternative presented here.

USA: So you – Waldemar, you would prefer individual temperature checks?

WH: Yes. A separate temperature check for each of the main alternatives.

NRO: Strong support for Waldemar

MF: Is there a concern that a particular choice of emoji would bias people’s decision here?

USA: I believe so.

NRO: Can I also say the support other than this, each option we know like how much it’s like and how much it’s disliked.

USA: All right. Then, let’s pick the – the first – and then like we can sort of record for each of them, and then in the end, we get a breakdown of – I guess we have come back to what Eemeli suggested, ranked voting essentially. So Michael, which one do you think we should talk about first?

MF: Please don’t include me in this.

[_option 1_ temperature check: Stage “e”]

USA: Let’s start with E. Let’s say that was one that came up sort of very early on. And then we have not talked about it for a while. And I will open the temperature check now. And let’s vote on _e_. So . . . Okay. Signing in. Let me check. There are 35 people.

CDA: Not 35. We have the transcriptionist. We have a – 2 people are at least transcriptionists because you have cart files, there’s two IS, two MF. There’s not 35

USA: Safer 25. We should wait for maybe 25 people to vote. So far we have 6 and 9, so

USA: So now we have 15 votes. It doesn’t seem to change.

CDA: Now, point of order. If JHD is correct, we might need to start over. EAD didn’t have TCQ open

JHD: If you could show the current state of TCQ. But EAD, if you see the emojis, nevermind. You can vote

EAD: I’m sorry. Guys, I am new to this. The strong positive to unconvinced scale, voting on like Option 1 and –

USA: Yes

EAD: Okay. And then what are we going to do? Option 2 next and then revote?

USA: Yes.

EAD: Okay. Cool. Thank you.

USA: All right. With the idea being that we should be voting in a vacuum on each one.

RPR: Clarification from the chat. It’s E. Just E, the option.

CDA: Right. Not 2.E. Okay. So who is screen sharing right now? RPR?

RPR: Yes, I can.

CDA: Can you update your option document, to reflect what we are actually voting on, which is just E alone.

RPR: Just E sorry. If anyone has been voting based on 2.E, please change it. Stage E.

USA: Ron asks about 2A, 2B. I would have thought it’s part of Option 2, but I guess – No – implies a number, 2.N more like. So perhaps that could be option 4.

USA: It’s stabilized with around 21 votes. I would just take a quick screenshot. And yeah. We can remember what that was. Copy.

USA: Okay. So we have 8 positive. One indifferent. And 12 unconvinced on my screen. I will stop the temperature and move on to Option 2. Okay. It’s done. And it’s starting again now. Also, I just realized, I didn’t vote. But I have given up at this point. I would happily accept what all of you vote for.

EAO: What are we currently voting for?

[_option 2_ temperature check: Stage “2.x”, where “x” is a digit to be decided later]

USA: Option 2. Getting the temperature check on how you feel about Option 2.

EAO: Where can I see what is Option 2?

USA: On the screen share.

CDA: In the Google meet.

EAO: Thank you.

USA: So it i 15 +. Yeah. 4 – so 19. 20, 21. More or less reached the same amount of votes. Let’s give it a couple more seconds. Okay. Okay. Anybody still voting? It seems like not. So . . . This – All right. So I will stop it again.

[_option 3_ temperature check: Renumber stages to 0, 10, 20, 25, 30, 40]

USA: And then now, let’s switch to Option 3. And I will open the temperature check again. This is for renaming the existing stages from stage 10, 40 – 0 to 40, and then adding 25. 19 so far. We’re missing a couple of votes. Somebody still in there? Okay. Another one. All right. This looks like we might have – yeah. We have – okay. All right. I am going to – if nobody is still voting, I would screenshot this as well.

[_option 4_ temperature check: Renumber stage 2 to 2.a and insert stage 2.b]

USA: And now, finally, we have the 4th option. So I will stop the temperature check and start again. Rob, if you could – yeah. Thank you. And it’s on.
>> Could you clarify if this option means renaming the current stage 2 to be 2A –
>> Yes
>> And the new one to be 2B?
>> Yes. To clarify, the existing stage 2 would then be renamed to stage 2A moving forward. Yeah.
But all the existing – other existing stages would rename – would remain unchanged.
So we have 10, 12 . . . 21 again. I suppose it’s stable now. I will take a screenshot again. And that’s the last one. So okay. I will finally stop the temperature. Let’s see. We have . . . So now, the most complicated thing about temperature checks is how to interpret them. I mean . . . There’s a few that are matched in terms of unconvinced. But then I'm indifferent and I suppose that affects the support. Purely based on support, strong, positive, plus half positive or just strong positive, + positive, the winner is Option 2. Stage 2.N. It’s also the lowest in terms of unconvinced.
Yeah. So talking of that, then, Samina, you have your hand raised?

SHN: Yes. Can you share the screenshots of the 4 options with the votes so everyone can see them.

CDA: They’re in the delegates chat

SHN: Sorry. Thank you.

USA: Good point. I could copy them into this document.

>> It could be kept in the notes, if we want.
>> Sure.
>> But in the meantime, how do folks feel about Option 2, then? Can we get – perhaps ask for consensus on Option 2. Let’s see. The queue . . . Ron proposed one temperature check. We did that –
>> I think that’s old
>> Yes. So empty queue. And –
>> My topic was still valid.
>> Sorry
>> The question I wanted to ask
>> Yeah. I’m sorry. I skipped that by accident. Ron?
>> Yeah. And I know there’s also the discussion going on what is the number that comes after, but I also wonder if the topic I had up made sense to discuss prior to that because – well, we can ask it after, but my question is whether we could couch this as conditional advancement penning testing being written. Rather than have to introduce a new stage. But . . .

JHD: So I replied this in matrix as well, but the reason for this whole effort is because it is really important to have a completely distinct category for which the design is almost exclusively finalized, but it’s not yet ready for implementation. And many proposals would be hopefully here for a short time. If we had this new stage 5 years ago, Temporal would have been sitting it in for many years, appropriately. Because the main reason that Temporal wanted to be at Stage 3 was so tests could be written and people could implement it and try it out. And the main reason they didn’t want to stay at stage 2 is that they didn’t want to relitigate the design. That’s what a new stage provides. There’s not a lot of benefit in just making the test requirements come sooner.

USA: And next we have Eemeli. To answer your question, I can see a poll going on right now in delegates, so people are voting for what the X should be. It ranges from 0.5 to 0.9, including 0.75.

KG: We can’t use the thing in the chat to determine this.

USA: No. But it’s – I guess temperature check for what you could possibly ask consensus on.
>> Yeah.
>> So what I was also going to say on this, is that given that we have not chosen the X, it means that when we voted for this option, we were voting for each of us, the best of these 6 or 7 different options that we consider that would be the number. So that probably explains at least in part the higher popularity of this option compared to the others. But sure, let’s go with this.
>> There is a very significant point of order by Chip. I have no idea how we passed this timebox, but we have.

CDA: Yeah. We deliberately ran past the timebox.

>> Yeah. That’s true.
But at least let’s ask for consensus on Option 2 and then we can figure out the X later. What do you folks think?
>> Can you repeat that?
>> I was proposing we ask for final consensus on Option 2 and figure out the X later. Another question would be, JHD, would that help your concern of not having a name before we merge this?
JHD: Like it was 2.question mark or something and figure out the question mark later?
>> Yes.
>> So I – I am throwing in a point of order. The fact that before the lunch break, we can’t go to the next topic any way, without short-changing it, so I think we should just try and finish up here, if we feel like we can in the next 20 minutes.
Because again the next item is 30 minutes and we don’t have that much before the break.
>> All right.

WH: I support consensus on Option 2.

>> Okay. There’s nothing in the queue. But let’s give second or so before we finalize it

WH: I was one of the initial objectors to it.

??: Yeah. Thank you, Waldemar. Really appreciate it.

??: I’m sorry, so are we – apologize, I am confused. Are we relying on the vote in the delegate’s chat in matrix at this point.

??: No.

??: Okay.

??: No, We just – Eemeli is asking a clarifying question, I believe, regarding this. Yes, we are asking for consensus for 2.X, where X is anywhere from 5 to 9.

EAO: So specifically, what I would like to ask is that, the range of choices we are considering, is that 2.5, 2.6, 2.7, 2.8, 2.9, exactly only or any exact number between the range from 2.5 to 2.9. Those are two different questions.

USA: That’s a good question. We could have made Option 2 more specific.

WH: Looking at the delegates’ channel poll, there are three options with more than one vote, which are 2.5, 2.7 and 2.9. So we should pick one of those three.

MF: Yeah. People expressed that it should only be a single digit after the decimal place. I think that’s a good idea. It’s more convenient to talk about. Also, in the last meeting, a lot of people wanted to emphasize that it was mostly 3, so something closer to 3 than to 2. Which 2.5 does not qualify for. It seems to meet those desires, of the ones in the poll, that have more than one vote as WH said, that’s 2.7, and 2.9. So I would say we should try to consider those two options and see if there’s any opposition there.

USA: All right. On the queue we have 3 messages. Michael Saboff, who supports 2.5. JHD consensus, one of them, preference for 29, failing that 2.5. And lastly, Daniel Minor supporting 2.5 also, or 2.7, 2.8 or 2.715.

>> We have a good mix of everything.

USA: Ron, says that they have preference for 2.9. 2.5 does not adequately indicate relative progress of the proposal.

WH: I also have a preference, 2.5 is too evenly spaced.

USA: Eemeli says, well, Eemeli you have a comment?

EAO: Yeah. At this appointment, I don’t really care where we end up on this. But I would like to note explicitly, this has been way, way too messy. And we they would to come up with some way that we have – for making decisions like this in the future, where there’s multioptions between which we need to choose. This needs to be written down in an internal policy. I don’t know what. So we don’t end up in this mess later on again.

USA: Thank you, Eemeli. Well, we can either decide amongst ourselves, which one of these to go for, or make two final temperature checks. At this point, why not. Michael, do you have a preference for one of the two? Would you like to just straight away ask for consensus on one, or would you –

WH: Let’s do temperature checks on the two options. If somebody wants to propose another option, we can do a temperature check on that one too. I don’t want to discuss the process any more.

USA: Okay. Okay. Fair enough.

USA: So all right. Then I will open the temperature check yet again. Twice. This time, we first start with 2.5 and then go to 2.9. As you can see on your screens, I will starts now

MLS: Can we do one temperature check with both. And people can weigh their – strong positives.5 and unconvinced 2.9. And you can put whatever.

WH: No. Because the scale is biased.

USA: The worst positive. Yeah.

USA: CDA says, split the difference. 2.7. Perhaps we have an option C.

CDA: Yeah. Would the people who prefer 2.9 be happier with 2.7 rather than 2.5? And same question reversed: for the 2.5 supporters, is 2.7 better than 2.9?

WH: Let’s just do three temperature checks. One temperature check for each of the three options.

USA: Okay. First we are running right now a temperature check on 2.5. The votes are coming in. Folks let me know – well, okay. Let’s see. We have 11. 15 votes at the moment. This is 16. Or, well . . . Yeah. All right. So more votes. At some point . . . 9, 10, 15. 20. We are missing one. Okay. We have one less vote now. 5, 6. 12. 20. Okay. No, don’t do two options, please. Unless somebody is still voting, I would take a screenshot here again. And we – okay. And then I will stop the temperature . . . And start for option B. In the meantime, I will copy this in the delegate’s chat. So that was option A, everyone. This time, I did vote. Let’s see. We have 9, 17. I think we are missing a vote. Or two. 9, 14, 20. Okay. Wait. All right. Unless somebody is voting at the moment, I will lock this one down as well. Okay. And stop the check.

USA: And then finally, for 2.7. Here we go. We have 16. 17. Wait. No. 16. Yes. For some reason, we have more votes this time. Somebody . . . Voted multiple times. I don’t know. Let’s hope that.

NRO: Be careful when voting, you want to change your vote, you have to click the button to remove the old vote and do a new vote. I think that’s at least what I have seen.

WH: Yikes, I didn’t realize this thing would record multiple votes from the same person on the same poll if they changed their vote!

USA: I am not sure if it’s supposed to do that. But –

NRO: Yeah. Nobody voted more than once. Like, just be aware.

USA: I think we have pushed the limits of TCQ –

CDA: I think the results are past the margin of error as well.

USA: All right. I will stop the temperature now. And basing this, I think, the winner is option C. Is that correct? Yes. Right? Like . . . It did actually manage to split the difference. So let’s – okay. Yes. Before we finally call it a day for this particular discussion topic, let’s ask finally for consensus on naming the stage 2.7, use open for your comments and support, as well as objections, if you have strong objections against this.

WH: I support this.

WH: The other thing that we should resolve is with stage naming, since it was the discussion about which columns of names to use.

USA: We shall indeed get to that next. I see only support in the queue. So – 2.7 + 1. Okay. Okay. Michael, would you like to speak to your concerns?

MLS: Well, I think our process is broken in this discussion, shown as the process is broken, the consensus process. I am not going to block on 2.7, although I could be a lone dissenter and block it. I don’t think it’s worth our time. My big concern is, we are trying to convey some kind of ranking of this stage relative to the stages around it, which I think is kind of a false thing to do. Each stage stands on its own and own entrance and exit criteria, how do we convey something by giving it a significant digit that the others don’t have. I put that in the chat. That’s enough said.

USA: That’s fair. Well, apart from that, we see support for 2.7. Michael, I think you have your answer, despites all the conversation that went down.

MF: I mean, thank you everyone for being so patient and I know it was as painful for me as it was for you. Nobody enjoyed that. But the good thing is, that we have this additional change to the process, which it did seem everybody was in favor of. So I would like to do a wrap up here.

MF: As for consensus on the new stage adoption, I don’t think it is necessary because it was conditionally adopted based on choosing a name and we have done that. Can I ask for consensus on point 3 on this slide, for now reverting just decorator metadata to stage 2.7. [silence] Okay? I don’t hear any objection.

RPR: Just to check Michael, this reversion, I think in the past, you have talked about how we are going to separate out the committee decision, to rename from the public messaging. We will prepare a public messaging so it’s done in an orderly way. So –

MF: Rename, what do you mean by rename

RPR: When we announce the new stage. Do the public communications of what all this means, we are not going to rely on the notes going up, there’s going to be a lot of proper communications plan. And so I am to check that this – this reversioning, the stage proposals will be delayed and in terms of when we actually show off until we have figured out the communications plan

MF: I'm fine with that. I guess that that kind of skips ahead to what now would be in point two. Now in point two, we don't have to be concerned about changing any existing references to existing stages, because they have all remained the same. But I do still want to pursue adding additional. additional information to the process document along these lines. I know that there were some problems that some people had with some of it, so I will not ask for that today, but I plan to open a pull request. Hopefully, we can do most of the discussion about problems people had with that on that follow-up pull request that adds some of this additional information, and I can bring that just as a needs consensus PR in the future. So, at that point, we would have external communication information in there.

RPR: This sounds fine. We do it atomically in a planned way. That was my only concern. Thank you

MF: Okay. Does anyone want to speak against reverting just the one decorator metadata proposal

CDA: Yes. The proposal is – I don’t like that it’s snuck in here. I think a proposal shifting between stages needs to be explicitly called out on the agenda.

MF: It was. You mean the – you mean just –

CDA: Decorator metadata.

MF: The agenda should have said there were stage changes happening as part of this, not just linked to the slides.

CDA: Yes.

MF: Okay. I will ask for it next time, then.

MF: Okay. That’s it, then. I think that’s all I have.

USA: Thank you, MF, for what will go down as the favorite item throughout this plenary.

WH: Point of order. We never resolved the naming column issue.

CDA: I think the number choice meant that it is resolved or at least can be deferred to later because it unblocks the process change

KG: We don’t have names until we have a discussion about names

WH: We are not going to change the names from the status quo to any of the other columns?

MF: Yes. For now. I will be opening a pull request. Hopefully we will do the discussion on the pull request. I will be happy to ping you so you’re aware of it when it opens.

WH: Okay.

USA: All right. Then that’s it. Let’s break for lunch. Thank you, everyone, especially our note-takers.
(lunch)

### Speaker's Summary of Key Points

### Conclusion

- new stage officially adopted, numbered 2.7, sits between stages 2 and 3
- MF will merge the process document PR
- MF will pursue improving the process document with additional information to improve communication
- MF will ask to revert decorator metadata proposal to stage 2.7 in January

## Continuation of Temporal

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal/)
- [slides](http://ptomato.name/talks/tc39-2023-11/#9)

PFC: Thanks for permitting me to present this follow-up item to the Temporal item I had on Tuesday. This will not be very long. But I will use the time to clear up the questions that we had on Tuesday. So I will be presenting this, but I would like to acknowledge JGT who is also here, who contributed a lot to the presentation.

PFC: So a lot of confusion on Tuesday was around data-driven exceptions. First of all, I apologize for confusing the issue by using the jargon. I thought it came from TC39, but I guess we only used it in Temporal meetings. We will take an action item in a future Temporal champion meeting to come up with a name for the design principle to avoid confusion in the future and then maybe document the improved term somewhere.

PFC: I will give an overview of how data processing works from Temporal to clear up the confusion and then at the end, I will present the normative change again. And hopefully that makes it clear exactly what is being changed and why we are changing it.

PFC: All right. The context behind the principle of avoiding data-driven exceptions is that date/time data always contains lots of weird edge cases. People normally don’t think about them. So things like leap days, daylight saving time transitions, but also things like non-Gregorian calendars where there are leap months. It’s common when writing code with Temporal to not test with the weird cases. If the weird cases throw exceptions, then the code will work fine iin development and testing, but it will break when confronted with real-world data in production. And there’s a precedent, code that breaks when confronted with valid but usual data is not how most JavaScript API works. We avoided that in Temporal. This is also not unique to Temporal. All software that deals with date and times needs to deal with these. For example, if you buy a yearly subscription on February 29th, you still have to pay your bill the next year, you don’t wait until the next leap year to pay it. Or if you have an email system that sends an email every day at 2:30 am, it shouldn’t skip the day when daylight saving time start or ends, and so on. So across many of the real world use cases we observed that these data dependent edge cases are handled by an existing software-defined default behavior for how to resolve ambiguity. If you don't have a leap year, February 29 is automatically clamped to February 28. And if a time of 2:30 AM is requested on a day when the hour from 2 to 3 is skipped because of daylight saving time, we use 3:30 AM instead. And a lot of these defaults were inherited from elsewhere, including the JavaScript `Date` object already.

PFC: We have been using the term 'no data-driven exceptions' as a shorthand in discussions about Temporal. I have tried to state the principle more fully here in italics. "Data-dependent ambitious cases should default to reasonable behavior instead of throwing". Here, data-driven exceptions in retrospect is not a good name. But it basically means, if it doesn’t throw for a normal date and time, by default it shouldn’t throw for a weird date and time. I say by default, because there are cases where you do want to throw when confronted with weird data. It depends on the use case. So if your use case is sending an email at 2:30 am, then it’s fine to send it an hour later because of daylight savings time. But if your use case is determining what time to write on a baby's birth certificate, then my software should warn the user that that time is invalid. So because it depends on the use case, Temporal has a way to opt in to throwing an exception and it’s usually by passing an options bag to the method with some option that has the value of `"reject"`.

PFC: A lot of other APIs like the existing Date object, they don’t let you opt in to throwing like this. They silently fix the weird data and return the date, which we are calling 'clamping' here. So no data-driven exceptions isn’t a new thing, but how a lot of other date/time APIs work. The new thing is that we try also to provide an option for 'yes data-driven exceptions' when you want to support the unusual case where the clamping is not acceptable.

PFC: Something else we talked about on Tuesday is 'valid data'. I have a couple of slides on what valid data means. Temporal objects can be a form of data that we pass into a Temporal API. Temporal objects are immutable and always contain valid data in the internal slots. This contrasts with the JavaScript `Date` object: you can say `new Date(NaN)` and get a Date object that has NaN in its internal slot representing an invalid date. You cannot do this with Temporal objects. And in the normative change we are talking about here, we are converting from one type of Temporal object to another, from PlainYearMonth toPlainDate or PlainMonthDay toPlainDate. This is the valid data we are talking about. For completeness, I will go over the other data that we consider valid.

PFC: Property bags can also be valid data. The way we consider these is that for each property there is a validity domain and the property bag is valid if each property is individually valid. So, for example, the domain of an hour property is an integer in the inclusive range of 0 to 23. The domain of the month property is a finite positive integer. Now, that might seem weird. Months go from 1 to 12. But values like months 13, you can see in the next line here, they might be valid in the non-Gregorian calendar. So we don’t consider positive out-of-range day and month values to be an invalid property bag, they are valid for the property bag and then later the calendar will do some validation on whether that date actually exists or not, and clamp by default or allow you to opt in to throwing.

PFC: Calendars can be custom objects, and accept all sorts of month and day values that even the built in calendars don’t accept. But what’s always not valid, you can see in the bottom line here, things that are obviously bad data like a non-integer day or year or a negative hour or a zero month, these are not valid property bags, they will always be rejected. You can’t choose to clamp or reject. They are not weird data, but just plain wrong. So the general principle here is if an input could be valid in some day, month, and calendar, etc, then we don’t throw by default, we clamp by default and let the developer opt in to throwing. Even if the result isn’t present in a particular day/month/year calendar, if we can determine without doing a calendar calculation, that an individual value is invalid, like a negative day, then the property bag is not valid. If it could be valid but needs a calendar calculation to be sure, then it’s valid and subject to clamping. Now, this is a messy principle. I think that’s okay because dates and times and calendars and time zones are messy. But it is consistent.

PFC: The third kind of data that we consider valid is strings. We accept strings that adhere to a specific grammar: whatever ISO 8601 defines, and extended by the new IETF RFC we are standardizing. The strings we accept are compliant with these standards. The flexibility discussed where the user can opt into clamping or throwing, that only applies to cases where we are interpreting number input, not string inputs. These standards are unambiguous about what is syntactically valid string or not. Here are some examples. Top one, 02-29, a valid month-day string. The next one, 2024-02-29, it’s a valid date string. 00-00 is not a valid month-day string. 12-32 also is not and 2030-02-29 is also not a valid date string.

PFC: The standards I talked about ISO 8601 and the new RFC, they don’t include time zone transitions in their definition of validity. That would be impossible, because time zone data changes. So we do still occasionally have to deal with strings that are syntactically valid but don’t represent an existing time. The string on the second-to-last line represents a nonexistent time, it’s in the middle of the hour in a DST change. For a syntactically valid string like this, when converting, you can choose using an option to clamp or throw, and clamping is the default. The string on the last line, with the time 99:99, also doesn’t exist, but it's not a time that clocks can display in the first place. It’s not a valid string.

PFC: Here is an overview — the slide's a bit full — but these are the ways that you can do a data conversion in Temporal that could end up being invalid in the result domain. So where this idea of clamping by default and letting the user choose to opt into throwing applies. There is a lot of things not shown here, that is that most conversions can’t fail at all, at least not because of being invalid in the result domain, like February 29, 2030. For example, If you convert from a PlainDateTime to a PlainDate, every PlainDateTime object can be converted to a valid PlainDate.

PFC: We are talking about conversions that can fail due to being invalid in the result domain here. On the left most of these conversions clamp by default and have an option to throw. The code examples here, they all show what it looks like to opt in to throwing. If you leave out the options bag, or if you supply the appropriate different value for the option, you get the clamping behavior. This is crammed in, I hope everybody can read it.

PFC: On the top right, these ones don’t let you opt-in to throwing. We considered them a convenience method or a convenience conversion. So they always use the default option. If you don’t want to use that, you can specify it manually by using the longhand way. For example, in the case of these property bag arguments to `.until()` and `.equal()` and other entry points, if you don’t want the default behavior for the conversion, you can convert the property bag yourself using a `.from()` method. Converting a PlainDate plus PlainTime, you can do that by first converting to a PlainDateTime, and specifying the option, and then converting to a ZonedDateTime and again specifying the option. Depends on which conversion you want it to throw on.

PFC: Then we have these odd ones out, the two down in the bottom right. So now with this context, let’s go back to the normative change, which would be basically to empty the bottom right category of conversions that always throw, which we consider a bug, into the category above it: the "always clamp" category.

PFC: So if the conversions in the bottom right, the throwing category, would follow the same default behavior of the rest of the Temporal API, they would clamp the result to a valid date, because the desired date doesn’t exist when the receiver is combined with the input.

PFC: So, back to the normative PR that I presented on Tuesday. It moves those throwing items into the always clamping category. It’s a bug discovered by a user, in actual usage of a polyfill for this proposal. And we want to ensure that the default behavior of the similar Temporal APIs is consistent.

PFC: If we were still working on the API design at Stage 2, we would probably want to add the option there. I don’t know for sure. But we will track that for a follow on proposal. So if we didn’t make the change, then a common use case like what day of the week is my birthday next year would throw when somebody’s birthday is February 29, which is what I referred to earlier as weird data. Valid data, but data that developers are likely not testing with. So that would be an unexpected result.

PFC: Okay. We are a bit less 20 minutes into the timebox. This is what I had to present. I will be happy to answer questions now.

WH: Thank you for the description of philosophy and rationale. The list of examples and cases is a bit lacking. While I understand the philosophy, I don’t understand the boundaries of what is changing. So let me ask a few cases to let me check if my understanding is correct. I see it allows November 31st. So by the philosophy, the month and day could be anything positive. `plainDate.until` would also allow `plainDate.until({year: 2023, month: 17, day: 952})`?

PFC: That’s right. The reason for this— I didn’t go into this detail on this slide, but the principle here is that PlainDate.until conceptually takes another PlainDate as an argument. For convenience, and this is what I referred to as 'convenience conversion', anywhere an API takes a PlainDate as an argument we allow you to pass a plain date property bag instead, or a plain date string. And that is just simply so that you don’t have to type `Temporal.PlainDate.from(...)` every place you have data like that. It is treated as if you had called `Temporal.PlainDate.from` without any options. So you get the clamping behavior.

WH: Okay. To check if my understanding is correct, this is not just the convenience methods? `Temporal.PlainDate.from` would also allow `Temporal.PlainDate.from({year: 2023, month: 17, day: 952})`?

PFC: Right. So that goes back to what I said here on this slide with day 9999. If we can determine without consulting the calendar, that it’s invalid, then the property bag is not valid. If we would have to consult the calendar on whether that month or day is valid, the property bag is okay and subject to the clamping behavior.

WH: So that is clamped to December 31 of 2023? Example is, year 2023, month 17, day 952.

PFC: Yes. That is clamped to December 31st.

WH: And if the month were 3, it would be March 31, not December 31?

PFC: Right.

WH: Clamping is per-field and not per-day-of-the-year?

PFC: That’s right.

WH: Okay. So yeah. In the `toPlainDate` conversion example on the slide, these would no longer throw and you could write `plainYearMonth.toPlainDate({day: 44})` and it would clamp it to the last day of the month?

PFC: That’s correct. Yeah.

WH: Okay. Is there a limit to how large of an integer you could provide for a day?

PFC: I am not positive about whether it’s MAX_SAFE_INTEGER or MAX_VALUE. Let me check.

WH: Okay. While you’re checking, thank you for the explanation. I am good with this.

PFC: Okay. Glad to hear it. I will have an answer to that question about the day in just a moment.

PFC: It has to be an integral number value and it has to be one or greater. So I guess Number.MAX_VALUE is integral. And infinity is not.

WH: Okay. Thank you.

CDA: Nothing else on the queue.

PFC: Okay. Yeah. If we don’t have anything else in the queue, then I would like to ask for consensus on that change.

CDA: You have a + 1 for consensus from DLM. Do we have any other voices of support for landing this PR? Do we have any objections to landing the PR? [silence] CDA: You have consensus, PFC.

### Speaker's Summary of Key Points

Overview of what constitutes "valid data" in Temporal APIs and when the clamp-by-default, opt-in-to-throwing behavior applies.

### Conclusion

- A normative change to overflow behavior in PlainYearMonth/PlainMonthDay.p.toPlainDate (PR #2718) reached consensus.

Philip please link the slides above

## Iterator helpers (continued)

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-helpers/)

MF: So we talked about this a couple days ago. Iterators have an issue with web compatibility. I have a pull request, one possible solution for resolving that compatibility issue by replacing two data properties, the `constructor` and `Symbol.toStringTag` data properties on the iterator prototype with accessors that do weird stuff.

MF: JHD had brought up that another possible temporary solution here is to just omit the properties. I had said that I needed to go look at the previous discussion because we discussed that at the last meeting. I looked at those notes and that was indeed what was suggested by NRO at the last meeting. JWS had raised an issue with it, but was mistaken. So that would also be a valid way to solve this problem in the interim. So I think personally, I am okay with either way forward. I think I do have a slight preference for going the accessor route because I do think it is a little bit less risky than omitting the properties. It seems that omitting the properties is more easily observable, you just toString any built-in iterator or, you know, or you ask for the constructor property of any builtin iterator. Whereas, observing the fact we have these setters, requires you to actually do getOwnPropertyDescriptor on Iterator.prototype itself, which I think is an incredibly unlikely thing for someone to be doing compared to the other things. Both routes should preserve our ability to replace them with data properties if we care to in the future. We would definitely care to in the future if we went the route of omitting it because one way or the other, we would like those properties to exist.

MF: So I personally don’t see the upside of going that route. Either one is fine by me. I just want to pick one of these ways forward because we do want to get iterator helpers shipped, apparently there’s a lot of demand for it. One more thing: if we decide to omit the properties, going the route of adding data properties later does require an implementation to be willing to do that experiment again. And possibly risk running into a web compatibility issue. Rezvan has spoken on behalf of Chrome, that they would do that, but that’s obviously non-binding and also things may change between now and whenever it is, like 6 months from now that we can try this again.

MF: So we don’t know if that would get us to the case where we have data properties. It might end up with the accessors anyway. That’s all I have to say on the topic

JHD: When we are talking about toStringTag, zero risk. Period. People don’t depend on the exact value of toStringTag. We have added toString tags to things and it hasn’t broken. That’s not the concern - constructor is the property that is more often used. It’s been pointed out that `instanceof iterator` doesn’t care about the constructor properties. So that pattern will still work. It would only be if someone writes what I would find odd code of `X.constructor === Iterator`. And omission, that would be always false and with the accessor it’d be true. But nonetheless, I feel like adding properties is a much less risky change than especially properties that match what everybody thinks – what the intuition is. Much riskier than changing the underlying change between data and accessor in either direction.

JHD: So I would much prefer to just omit them. And it seems like in the coming months the remaining sites will upgrade and I can coordinate with the representative Transcend to keep pushing to try and get the sites upgraded and to do the follow-up proposal to add the properties back at that time. So yeah. That’s my two cents.

MM: So I find JHD's explanation very plausible. But it would be very nice if there was some way to get evidence one way or the other in a timely manner. The thing that strikes me is that whichever way we go, when we want to make the transition from whatever it is we did in the meantime to a data property, we might get stuck. We might not be able to transition to the data property. And the cost of omission is that if we can’t move from omission to the data property, we have locked in a behavior that we don’t like. Whereas, if we can’t move from the accessor to a data property, we are actually getting the behavior that we want, rather than locking in the wrong behavior. We are just getting the behavior we want with the undesired meta-level representation, which strikes me as a smaller cost. I am not blocking either way, whichever side of this can gain consensus, I am fine with. Because I think that either way, the risk is small. But given the cost of getting stuck with omission, my – I am still – in the absence of evidence, my inclination is towards the accessor rather than omission

NRO: Yes. So let’s say we omit it in 6 months or one year, we still cannot move to the data property. Moving then to an accessor is less risky. So we could still in the future decide "okay. We tried, we failed. Let’s move to the accessor". Rather than remaining stuck in the omission status.

KG: This was a response to JHD. I didn’t didn’t get in the queue on time. The claim about constructor to run into this you have to be doing `X.constructor === Iterator` and that’s weird code. It’s bad code, but I put a link in the matrix to 150,000 instances in GitHub in JavaScript. It’s a thing that people write a lot. I think that the chance of not being able to add the properties later, if we omit them now, is unacceptably high and therefore go with accessors.

CDA: Nothing on the queue.

KG: Also, just as another point, like, no one will notice the change from accessors to data properties. That won’t come up for any normal programmer. Whereas, going from omitted to not omitted will come up and I don’t think we need to expose users to this sort of thing.

CDA: JHD?

JHD: Is there any chance we could not make a change to the proposal, but see if Chrome is willing to ship, let’s say, the accessors with the expectation that they will be changed later? I mean, I know ideally the spec matches reality, so that’s the downside, but the intention would be in the near term, we would be bringing the implementations to match the spec and if that became impossible, we would have to change. I don't know if that’s much better. I prefer omission, but I thought I would bring it up.

MF: JHD, I think that is the plan with the accessors. We ship accessors, and we revisit this and see if implementations are willing still to try to switch it to data properties.

JHD: I was asking about skip the "spec the accessor" step. I see why that could be worse; it’s just something that popped in my head.

CDA: Queue is empty.

MF: Okay, I mean queue being empty, I think MM raised some good points that I hadn't had in my initial presentation there, that there's different kinds of risks, and one's getting stuck with a representation we don't like, and one's getting stuck with values we don't like, and it seems like getting stuck with values we don't like is the much worse case there. I also just still don't see the upside of the omission route other than giving us warm fuzzies, right? It makes us feel better, but to the user, there's no upside. So I still lean pretty strongly to preferring the accessors approach and would like to see if we can get consensus on that. But if we can't, obviously the number one priority is to just move forward in some way. So I'd be willing to do either one.

MM: Just support – I support the accessors. As I said, I am not blocking the other. But yes, I support accessors. I hope we can get consensus on that.

NRO: Yes. I originally, like last meeting, spoke in favor of just omission. Even with accessors the goal is to eventually try to get the properties, then I am fine with either temporary solution.

MM: JHD – are you okay with accessors rather than omission?

JHD: Yeah. I mean, it’s – I don’t think I would block on it. Is it worth doing a quick pair of temperature checks on those two options? And that might just end it?

MF: I would leave it up to the chairs to decide whether we go the route of asking for consensus or going to the temperature check.

CDA: The chairs do not want to decide.

MM: MF, you’re the champion. I think it’s your call.

MF: Well, yeah, then I would ask for consensus for going with the accessor approach. I do think, I want to state this, I'm not trying to steamroll anybody, I, in full good faith, think that we will be able to move to data properties in a couple months. So I just think, I want to go with what I feel is the more sure route of getting there.I think we'll all be happy about this one in a few months.

MM: So we have some explicit support. Any objections?

JHD: Yeah. I guess we can go with it then. I hope all the implementers in the room are hearing clearly that as soon as the sites are not broken anymore, that we want to move to data properties. Separately for the room, I guess, I assume that there is nobody that would have any objection to trying to move to data properties in the future, providing browsers are willing to ship? If you have an objection, now is the time to surface it, I think. If not, then yeah, I think we might as well go ahead with the accessor, even though it’s not my preferred option.

CDA: So . . . A moment ago we were talking about consensus in support and objections. Are we talking about the accessor?

MM: Yes.

JHD: Consensus for accessors is what I have heard. And I haven’t heard anyone voice any objection to eventually moving to data properties. It seems like I am the strongest person against accessors and I am not blocking on it, so we can call it consensus.

CDA: Yeah. Okay. I want to be clear for the notes. So we have explicit support from MM and from others?

KG: I support accessors.

CDA: Okay. + 1 from KG

MM: NRO, didn’t you explicitly support accessors?

NRO: I support either option, as long as we agree that we want to then move to data properties.

MM: Okay.

CDA: Okay. I think it was clear that there was no objection. Last call for objections. All right.

### Speaker's Summary of Key Points

-

### Conclusion

- Merge iterator-helpers PR #287
- JHD to follow up with Transcend and pursue the transition to data properties when the time is right

## Incubation call chartering

EAO: So this is – advertising an introduction called from the last meeting because of timetable schedule constraints, I haven’t able to get it up until relatively late, if you look now on the Reflector, you would find an issue for this, that’s pulling for dates for the table format proposal for next time sometime. If you are interested, participate because I have one reply so far. If I don’t hear anything by the end of day tomorrow, I am going to basically cancel and figure out otherwise how to take that one forward. Also, this LA has been very cold.

CDA: All right. I have shared the link in the chat, in the Google meet as well in the channel in matrix. Anything else for this item? I don’t think so.

CDA: All right. If there is nothing else, no comments on the queue, I think that is it for this plenary. Thank you, everyone.

RPR: And also, just to say, we are working on the invite for the next plenary. Obviously the next one is San Diego. The dates are set. So there’s no issue there. We are at the moment, Rodrigo is working on getting hotel recommendations. In particular, we had a discussion in the matrix chat, where people want to avoid hiring cars. So we are going to try and select an interesting part of town, where we can share taxis to make that a bit easier.

KG: A reminder to fix up the notes, please and thank you. Find the places you spoke and correct them.

CDA: Yes. Please ensure comments are accurate. Especially those attributed to you. All right. If there’s nothing else, I think we can call it. Thanks, everyone.
