# 16 May, 2023 Meeting Notes

-----

**Remote attendees:**

| Name                | Abbreviation | Organization      |
| ------------------- | ------------ | ----------------- |
| Jordan Harband      | JHD          | Invited Expert    |
| Sergey Rubanov      | SRV          | Invited Expert    |
| Lea Verou           | LVU          | OpenJS Foundation |
| Ben Allen           | BEN          | Igalia            |
| Duncan MacGregor    | DMM          | ServiceNow        |
| Peter Klecha        | PKA          | Bloomberg LP      |
| Philip Chimento     | PFC          | Igalia, S.L       |
| Nicolò Ribaudo      | NRO          | Igalia, S.L       |
| Ujjwal Sharma       | USA          | Igalia, S.L       |
| Kevin Gibbons       | KG           | F5                |
| Chris de Almeida    | CDA          | IBM               |
| Justin Ridgewell    | JRL          | Vercel            |
| Ben Newman          | BN           | Apollo            |
| Chip Morningstar    | CM           | Agoric            |
| Daniel Ehrenberg    | DE           | Bloomberg         |
| Daniel Minor        | DLM          | Mozilla           |
| Eemeli Aro          | EAO          | Mozilla           |
| Waldemar Horwat     | WH           | Google            |
| Zibi Braniecki      | ZB           | Invited Expert    |
| Michael Saboff      | MLS          | Apple             |
| Jesse Alama         | JMN          | Igalia            |
| Mathias Bynens      | MB           | Google            |
| Istvan Sebestyen    | IS           | Ecma              |
| Willian Martins     | WMS          | Netflix           |
| Lenz Weber-Tronic   | LWT          | Apollo            |
| Ron Buckton         | RBN          | Microsoft         |

## RegExp v flag for Stage 4

Presenter: Mathias Bynens (MB)

- [proposal](https://github.com/tc39/proposal-regexp-v-flag)
- [slides](https://docs.google.com/presentation/d/1pjP06RhOAbYlh-6rYhe3v1SsxD2qLpiWAC2dKDBSJZo/edit)

MB: We’re asking for stage 4 for the RegExp v flag proposal, and just to recap, this adds not just the v flag itself, it has pattern syntax and semantics for literals as well as properties for strings and number of set operations that are lived here. I’m not going to go over this in detail; it’s just a refresher. The details are in the proposal.

MB: Let’s go over the stage 4 requirements and I’ll explain why I believe we are meeting these requirements now. There is a test262 feature flag, it’s regexp-v-flag, the test landed on three or four separate PRs, I actually recently added some more tests after, yeah, we found some bugs in existing implementations. So, yeah, we’re pretty well covered for tests.

MB: In terms of implementations, the implementation is shipping in Chrome 112, so that’s two stable releases ago. JSC has an implementation as well which has started shipping in Safari Technical Preview 166, which is also a number of technical preview versions ago already. So it’s been out there in the wild for a little bit.

MB: We have a PR that integrates the spec that we proposed with the upstream spec. It’s come through a lot of reviews and discussions and we’ve iterated on it quite a bit. And as usual, we do want to ask for Stage 4 pending approval of the editors. Several of the editors reviewed this in depth and gave us concrete suggestions for specific issues. Hopefully we can get Stage 4 pending the final LGTMs and being merged. This last bullet point is not a stage 4 requirement and I think it’s useful to mention. We also proposed an integration of the v flag with the HTML stop card, because HTML exposes a pattern attribute which allows to -- and behind the scenes it gets compiled to a JavaScript regular expression. Initially when the pattern attribute was added it had zero flags enabled. As soon as the u flag became a thing in ECMAScript, I made sure the HTML Standard was updated to use the u flag, because it enabled additional functionality and now that the v flag is starting to become a thing and with shipping implementations, I believe it’s strictly more useful to enable the v flag instead of the u flag. There’s a lot of detail in the spec PR that I’m linking to here for the HTML standards. This is technically a breaking change for the web, but, yeah, if you’re interested, there’s a web compatibility investigation I did there in the thread based on the use counter we added to Chrome and it looks like we might actually get away with this change. So I’m pretty excited about this. There’s also a -- this is it not just Chrome, slipping in chrome 114, there’s a WebKit implementing this ready to go as well. Yeah, and that’s really it. I think -- I believe we meet the stage 4 criteria, so with that, I would like to ask for your blessing.

RPR: All right. So this is the formal ask stage 4. DLM on the queue.

DLM: Yes, SpiderMonkey team supports stage 4 and I want to note our implementation is in progress.

MB: That’s really exciting. Thank you.

RPR: MF says I support stage 4, end message, and Chris says plus 1 for stage 4 and the message. So we’ve got three explicit forms of support. Any objections?

RPR: No objections. Congratulations. You have stage 4.

MB: Thanks, everyone, and thanks in particular to everyone who helped with this proposal. You know who you are. It’s a lot of people. Thank you.

### Speaker's Summary of Key Points

- we have agreement on stage 4, and additionally, I think it’s useful to know that the SpiderMonkey implementation is in progress. I didn’t actually know that. We did file implementation issues a while back. Yeah, it’s good to know that this is being worked on actively.

### Conclusion

- Consensus for stage 4 with explicit support from CDA, DLM, MF
- Implementation in SpiderMonkey has started.

## Add Implementation status to proposal pages

Presenter: Michael Saboff (MS)

- [slides](https://github.com/msaboff/tc39/blob/master/Proposal%20Implementation%20Status.pdf)

MLS: DE presented I think two meetings ago talking about how we communicate, what’s going on with the Stage 3 proposal. This kind of came out of that, so let me go here. So there’s a kind of sad story. A funny thing happened on the way to Stage 4. This is not the only proposal that’s gone through this kind of difficulty, but it’s a recent example. And it’s one that Apple was kind of affected by. So this is the array grouping proposal. It’s currently Stage 3 and went to Stage 3 in December 2021. During that meeting, there were some concerns and so at the end of the meeting, there was a poll taken is one of the two APIs proposed, its name was changed. And they started implementing. Great, that’s what’s supposed to happen in Stage 3. Another reading happened at the June 2022 meeting and basically we dropped the by part of the name. And then there was another naming concern.

MLS: And maybe there’s a moral here. It seems like when you add something to the array intrinsic, you run into problems. Is not the first time. The issue was found by Mozilla. and found this past December. Bikeshedding ensued and if you go to issue 44 about the array grouping proposal you’ll see there’s been a lot of discussion about what to do, but nothing has been decided yet. We talked about this at the end of November, beginning of December 2022 meeting, so very quickly we got to it. There was three basic proposals: stay the course, come up with a new name or names, or propose a static method. Again, no conclusion was reached at that meeting. A call was put out for implementers not to ship. But let’s go back in time. The JSC team actually had implemented this before the change that was done in July of 2022, and we changed the names to the new names on August 3rd. And we shipped in Safari 16.4. So we’re currently shipping, so we didn’t heed the not ship because we actually had done the work before the not ship call had gone out. And it turns out that, I attend TC39 meetings and there’s other people on JSC that occasionally attend, but I don’t follow what proposals everybody checks in. So we had some breakdown in our internal process, but I didn’t put two and two together. We didn’t have good communication from TC39, do not ship, to actually we should turn this thing off. So they didn’t mark this as do not ship, but the problem is that implementers would have to pull anything that’s got marked with do not ship.

MLS: And proposal, they may not know what implementations they should alert. If you go to this proposal, how would they know what implementers have been doing with this, how long they are in their implementation, so on and so forth. What if every Stage 3 or higher proposal had an implementation status? We just talked about RegExp v flag, and if you go to the RegExp v flag proposal page, the main one, you will see something looks just like this. I took the screen shotlast week. And it has the blues are links, and they’re typically links to the bug used by that implementation to track the progress on the implementation. So you’ll see that there’s SpiderMonkey, Chrome, JavaScriptCore and we enabled it in STP166 and so forth. And I might add for the open source implementations, the -- I think in the case for this proposal, the proposal champion actually created the bug. So the information here as to what limitations are in progress or done is available on the main page.

MLS: So this is a -- it’s not a proposal. I’m not talking about something for stage 0, 1, 2, 3 or 4. I’m talking about a meta proposal, process proposal and basically it’s two-way communication. And the first thing is that every Stage 3 plus, maybe we can talk about 3, we can do this earlier, but the main proposal page includes an implementations section. And for each current expected or related implementation, when I talk about related, maybe it’s in some other language or something like that, the -- we include at least these things. The implementation status proposal, this is for each implementation. The status for that implementations for the particular proposal, and if possible, a link to the bug, an implementation issue tracking system, and if possible, a TC39 member contact for issues, stage changes, et cetera. And the implementers are responsible for letting champions know, status changes, typically, you know, an arbitrary person can’t go into a proposal page and just arbitrarily change it, so they would have to send an email to champions or something like that. And the champions are responsible for having communication with implementers when issues arise or to state changes and, conversely, this already happens, but implementers, they let champions know, hey, we’re having problems with this, usually that would come to plenary at some point. But that’s basically the proposal. And we can talk about should this be maybe Stage 2 and greater or Stage 3, that we can bicker about what we want to do there. But I think at least Stage 3. That’s basically the proposal that I’m putting forward, and like I say, it’s a process proposal.

USA: Yeah, hi. I wanted to start off by saying I strongly support this. The reason for that is that we have a convention to do this within TG2. I’m not sure if you’re familiar with this, but we have a Wiki to track all the proposals, including implementations, and other things like MDN documentation and such. It has existed for a longer time since -- well, I suppose since Intl or, you know, definitely since before I was involved. And there is a lot of great benefits of this, apart from the ones, Michael, you just mentioned. I see no downside to this.

MLS: Yeah, and if you have a Wiki and a proposal, you know, so TG2, you got a lot of things in flight, but if you pointed to that Wiki, so you have one level of indirection, that would be fine.

USA: Yeah, for instance, like, we -- I suppose we have a proposals repository that does that, so on the one hand, yes, that would require a slight indirection, but at the same time, it would be also easier another way in that you could find all the information in the same page. So I guess it’s a slight tradeoff, but either way should be fine.

MLS: Yeah, that sounds completely agreeable to me.

DE: This proposal is for having the context, the document sounds really great. I’m really in favor of it. I’m wondering if in addition to this, we could have something summarized in the proposals repo, or in some other place. It doesn’t necessarily have to be there, but proposals repo, in addition to making sure that we have these contacts in place in place, letting everyone in the JS community check up on the statuses would be good. We previously discussed possibly having something like “requires coordination” or another title that, or someone suggested “changes expected”. Anyway, I didn’t land anything about that in the proposals repo because I took it that you might have had concerns, and I’m wondering what you think we should do there now, if anything, in addition to champions reaching out to implementers about status changes.

MLS: Well, Dan, I think I understand, you know, at the time, your desire was that there would be two-way communication between implementers and champions. And the concern that I think I had then was, you know, putting the two pieces together because it required some polling. This kind of came out just in the process that we worked through when we received an email, hey, are you guys shaping the array group by APIs, and then the experience we had with the regexp-v-flag, which had it, and it seemed like collectively, this -- correct me if I’m wrong, but I think this answers the concern you had because it answers the coordination you were talking about and timely communication either direction, from implementers to champions to champions to implementers.

DE: I think implementation with the rest of the JavaScript community who is watching this is also important and that we should note somewhere, probably in the individual proposal repo, but also hopefully summarized in the proposals table if something is in this kind of state, not only to the implementers, but also to the rest of the community. So don’t you?

MLS: Slight concern about that is that let’s suppose that for whatever reason an implementation is a little bit slow or to respond to implementing a certain proposal. I don’t want the community to start sending hate mail. Even if it’s our GitHub IDs that are used to, you know, to contact people. Now, saying that if we put the bug -- you know, we put a public -- an open source bug information, you know, in there, you’re going to get the hate mail on the bug. I can attest to that.

DE: Sorry, I’m not saying about putting the contact information there. I’m saying putting the proposal status.

MLS: Yes, but if the proposal status -- if the proposal status -- so the proposal status, I think I’m fine at what stage it is. But if you’re talking about implementation status, I think we need to be a little bit careful.

RPR: I think there might be confusion here. This is about the proposal status when it goes into like a -- you know, there’s some kind of extra notes required, and I think Dan is proposing just maybe a boolean tick or asterisk to go see the additional status notes.

MLS: That’s fine.

DE: Exactly. The kind of update that champions will be contacting implementers for, that’s the information that I would also want to see communicated to the community without them having to go into an arbitrary implementation.

MLS: Okay, even if that’s a committee internal discussion?

DE: I don’t know what you mean by committee internal discussions. We discuss all these kinds of things in public, generally. I think it’s good if we publish these things. If there’s some completely private discussion for some reason we can’t publish, we should at least say, okay, there’s something going on internal, and this is in this other state, then that would probably be useful.

MLS: Okay.

RPR: Okay, I think we got agreement of some kind of mark in the proposals repo to go say see extra information in the proposal itself.

MLS: Okay.

RPR: Is that okay, Dan?

DE: Yeah. Let’s -- let’s try to work out how to express those, but I think we can do so offline.

SYG: Yeah, I also support of -- having implementation status and links to the bugs earlier than where we currently have it. But to make sure I understand how this would have prevented the miscommunication that resulted in the Safari mishap that you mentioned, could you walk me through how -- the array grouping had these links, how would you have noticed?

MLS: So first of all, I think at the November/December meeting, or when Mozilla first came up, hey, there’s an issue here and they created the issue, it would be noted that, okay, JSC has implemented this. And so we need to communicate with them. At that point, we hadn’t shipped Safari 16.4, so we could have unshipped it as it were before it got out. It was definitely an STPs for, you know -- for multiple iterations. We implemented -- we ship a Safari technology preview every two weeks. So our implementation pre-the name change in June, July, whatever it was in 2022, we were shipping the earlier names that had the by in them, and then we just -- in August we changed the names, and we implemented it -- we turned on our flag at that point. So August 3rd, 2022, is when we started shipping it in nightlies and shortly after that the technology previews. But we lost, I think, three months from when we were contacted, and I don’t know whether it was you or somebody else looked at it, because I think you contacted us, hey, are you shipping this, and oh, yeah, we are. We lost three months by not having the bidirectional communication.

MLS: And in this particular case, we could have stopped shipping 16.4.

SYG: So to make sure I understand, the idea would have been that when we discussed this in committee, it would not only -- not only would there be this kind of written section in the -- in each proposal, but it would become part of operating procedure when we discuss these compat issues in committee that we would take stock of this implementation status that each proposal was at because that information should be readily available? Is that how you foresee that --

MLS: Sure, the champions would know at that point when there’s a discussion, you know, instead of saying don’t ship, we would say, okay, so somebody has shipped. That somebody, are you guys able to unship, what’s the status of your shipping, how much -- how long has it gone out, blah, blah, blah. It’s just more information to add to discussion.

SYG: What I’m trying to just dig into is the idea that this would have been brought up entirely within plenary and then a JSC delegate would have noticed it in plenary, or is the idea that because the information is there now, the proposal champion does a manual check and be like, hey, look, this is an STP, let me send an email to Michael, say, and ask -- or have another FYI. Is that the idea or just remaining in plenary?

MLS: It’s probably more the latter, or it’s both, but I would hope that the champion would be the first to notice and they would raise the alarm with the implementation.

SYG: Okay, I see. Then to that, we can reinforce that idea by, you know -- if we have the section, we can have urgent info at the top of that section, right? Like, known compat currently, known incompat currently, so if implementation delegates polled the proposal section and look to the implementations status, there is some big warning there as well. But, yeah, let’s just try to --

MLS: Yeah, this doesn’t -- yeah, SYG, this doesn’t handle all the cases, because, you know, some of -- let’s say somebody starts embedding something and it’s not just your real simple proposal. You know, maybe it takes a month, they got other things they’re doing, so they start implementing something and they check the proposal page, they -- you know, they look at the spec changes and what they need to implement and start doing it, and then four weeks later when they land it, they may or may not go back to the proposal page. There’s a window here. In this case, this would have definitely helped. And you see the two -- the two bottom bullets, the implementers are responsible for letting champions know what is -- change in the status of an implementation. So then there’s the responsibility there. And then the champions are also responsible -- then the champions are also responsible for communication when things come up. You know, stage changes, you know, usually that’s not as, you know, concerning because it’s discussed out in the open and all implementers know what’s going on there. But it’s more when, hey, there’s an issue.

SYG: Yeah, okay. Thanks for clarification. Possible tangent, but has Safari unshipped array group?

MLS: We’re in the process of doing that.

SYG: Gotcha. All right. Thanks.

MLS: We’ve landed a patch and it’s whether or not it’s going to get -- whether there’s still time to get it into 16.5 or not.

RPR: Okay. I’m also seeing, yeah, we’ve got less than 10 minutes on the clock, so please keep that in mind, everyone. And I think that was a concrete suggestion from SYG to call this section and then perhaps urgent. DLM says plus one, this is a good idea. Do you want to say more, DLM?

DLM: Just wanted to -- oh, did I have -- oh, it’s just, that yeah, we often find ourselves looking for this information anyway when we’re planning or doing proposal reviews, so I think it would be really great to have this available in a single spot. Thanks.

RPR: Thank you. SYG? Concrete action.

SYG: Yeah, concrete suggestion for we have a repo template for proposals, right? I don’t know who administers that, but it would be good to update some skeleton there to just, you know, list out the major browser bug trackers for ones that reach Stage 2 or 3 or something like that.

CDA: I think we can capture that in the kind of conclusion summary, that there’s an action to take there.

RPR: Do we have a volunteer to update it?

SYG: I mean, I volunteer if somebody tells me where it is. I don’t even know where it is.

DE: <https://github.com/tc39/template-for-proposals>

MLS: And I’m willing to help with that as well.

RPR Okay. So it’s a shared action between SYG and MLS. Thank you. Next –

DE: Part of the conclusion that I want to have clear is the recommendation to updating this template, it sounded like we were also agreeing that the -- that the proposals repository should have some column that if there is some altered status of proposals that we link to this in a column of a proposals repo, maybe this would even figure into a section for the template proposals, is this part of the shared conclusion of the committee?

RPR: I understood that SYG was proposing calling it urgent, in fact, so that could just have a link to the urgent.

SYG: No, no. That’s not what exactly I had in mind, but I’m not opposed to that idea. I was just saying that in the same implementation section, on each proposal, repeat that has the list of bugs, if there were urgent info that needs to be pushed out to all implementations, that it would be captured there. It seems just as good to me to have captured that in the index as well.

MLS: Yeah. And we only have urgent info if there is urgent info.

DE: Okay. So there could be a column on Stage 3 that says urgent info, question mark, and if there is, there would be a link to that urgent info section. Would something like that make sense? We can iron out the details, but I want to have this clear on the conclusion, because I think we were unclear on the conclusion last time. Do you think we need to do that as a check mark or we only put the link as needed?

MLS: I’m thinking it’s -- I’m thinking it should be an exceptional case.

DE: Yeah. So the link, it would normally -- normally the box would be empty, and if there is urgent info, then a link would be there.

DE If we can work it out offline.

MLS: But the link is basically going back to the proposal, which the table has a link to the proposal anyways?

DE I think it’s important that this be summarized in the proposals repo, that you be able to, at a glance, see whether there is urgent info. Because it’s an exceptional case that there is potential.

MLS: And I’m agreeing with you.

DE This is all part of the same -- okay, great. So it would –

MLS: Let’s work offline about how we implement this.

RPR I think we have agreement here.

RPR: All right. On to William.

WMS: I think I said I’m -- I’m about to say the same thing as everyone else also, so I think no need to talk.

RPR: Okay, standard header section could be a good way in the -- yeah. Thank you. Mathias?

MB: Yeah, just quickly wanted to point out that it’s a Stage 4 requirement to list the implementations, so overall this doesn’t actually add a lot of overhead for proposal champions at all. And I would also say for the slide we’re looking at, the second check mark, bullet point is actually the first step in my mind -- it takes almost no time for a proposal champion to file a bug for each JavaScript implementation and add a link to those bugs in your proposal readme. The first bullet point, “capture the implementation status” is the second step, that’s less important than having a link to each implementation tracking bug, because you can get that information from the bug anyway. Overall I’m strongly supportive of this.

RPR: Thank you. Justin?

JRL: On the main website is the proposal section. I want to make sure that whatever we decide here, that section on the main page also has a link to an urgent flag or maybe bugs -- links to the bug trackers for implementation, something like that.

RPR: So does anyone support that, putting on the website as well? Dan?

DE: So, Justin, you made two very different suggestions. One was about urgent info and the other was implementation status. Which things do you think need to be shown on the website?

JRL: This is all implementation status, the entire proposal. Isn’t this the same thing?

DE: Two components. One is making sure we have cross references to the implementations. The other component is make sure we have documented both in the issues -- we have issues for implementers as well as in the repository, whether there’s any urgent special info about that proposal. So I was proposing in the proposals repo we include the latter but leave the former to the individual proposals.

JRL: Okay. I didn’t understand that you were proposing this for the proposals repo and not for their actual read-mes of each individual proposal.

DE: The most important information would be in the readmes in the individual proposal, but I want the proposal repo to cross reference that so it would be easy to identify which things have urgent information.

JRL: Got it.

DE: Because even though MLS identified flaws with the mode of polling, there’s only so many stakeholders you can reach out to one by one in the community external to that also needs access to this information, at a glance.

RPR: Okay. So in light of that, Justin, are you proposing any additional information on the website?

JRL: No. I didn’t understand that DE was already proposal that. I like DE’s proposal.

RPR: Good. Thank you. Nicolo?

NRO: Yeah, I want to mention that in what repositories, the request and play, so that every time that someone proposes a change, they’re responsible for exclusively opening reports in the various issue trackers of all the main implementations. When we have a working model from us because they, like, didn’t need to go to these meetings for concerns, most things happen asynchronously, but still there’s a reason for explicitly reaching out to implementations.

RPR: Thank you, NRO. And JRL? How do champions communicate with implementers.

JRL: Back to me. I want to make sure there’s some way that champions can easily communicate with implementers. Whether there’s a dedicated issue on GitHub that the implementers whether actually read when there’s a notice or there is some form of bug tracker link that is publicly open so that we can comment directly on to the implementers and give them status updates. As long as one of those two things works for implementers, then I think we’re satisfied.

MLS: Yeah, I think if the bug is listed in the implementation section, then I think you just comment on that bug.

JRL: Sorry, not for -- not for urgent updates. Like the fact that this needs to be rolled back in implementation. But normal status updates. Are people actually going to listen to that when say this is now Stage 3 and ready for implementations?

MLS: Yeah. I mean, that’s what the bug’s all about, you know, tracking -- this is a feature, you know, maybe the bug is created when it’s Stage 2, and you put in comment this proposal has been moved to Stage 3 as of, you know, whatever date.

SYG: If I can interject here, the thing -- stage advancement is pretty well worked into the various work flows already.

JRL: Yeah, yeah. I agree.

SYG:I don’t think that’s ever missed. Like, what kind of other info -- other updates were you planning on communicating, Justin?

JRL I have no idea when implementers actually start working on their prototype stuff. So if there’s a name change, like what happened for array grouping, that would go out into this status update. I don’t consider that urgent as in, like, they need to unroll whatever they did, like Safari needed to do.

SYG: I see. I see.

MLS: So in the case of a name change, it happened with array grouping, we responded to that actually pretty quickly. You know, like I said, August 3rd we changed the name and we -- we set the enablement flag to true. So that wasn’t a problem. We got that message just fine.

JRL: Okay. So we just need the urgent communication channel and implementers will track whatever urgent thread issue we have.

### Conclusion

- SYG and MLS to update proposal template to have implementation status section - <https://github.com/tc39/template-for-proposals>
- SYG and MLS to add column to proposals repo to represent urgent info/status.

## Decorator field/accessor initializer order

Presenter: Kristen Hewell Garrett (KHG)

- [issue](https://github.com/tc39/proposal-decorators/issues/508)
- [slides](https://slides.com/pzuraq/decorators-field-accessor-initializer-order)

KHG: This issue got brought up recently by someone who was playing around with the decorators implementations in the transforms and Babel and what not. They thought it was a bug at first, and we started looking at it and realized that this actually may be an issue, and may warrant a change. So I just thought I’d bring it to committee to see what everybody thinks. So basically the issue right now is that field and accessor initializers run from the innermost decorator to the outermost decorator. So in this example here, an Int of times 4 is called four and then-2 is called. So we take 5, multiply it by 4, and subtract 2 and the result is 18. However, getters and setters are replaced from inner most to outer most and that what this means is they execute in the reverse order from outer most to inner most. So in this example here we have minus 2 gets called first when we set the value to update it to the exact same value it started as. Minus 2 is called first and then times 4. And that is a result of 12. So after looking at this for a while, I realized there wasn’t really a way to have an accessor specifically that can set the initial value and the updated value given the same input through the same output. So, yeah, this could be an issue for people who would expect that and are trying to write decorators that do that.

KHG: So why is this an issue that’s coming up now? First off, previously, TypeScript and Babel legacy, you know, the original decorators transforms that we based the proposal off of and that it evolved from did run initializers in this current order. And it worked for a very long time and there were really no issues with it. The reason, though, that it worked, that we didn’t realize was an issue here was they would also then take that initial value and assign it to the field with set semantics, so it would trig for setters for that field and it would set that value on the instance through the setters. With the switch to define semantics, that kind of -- it’s no longer the case and the current proposal does not do that. So the initial value just gets set directly and the setters are never triggered.

KHG: So we have two proposals potentially for how we can solve this. One is to simply reverse the order of the initializers so they would run from outermost to innermost. Conceptually we can think as if the value is being set and the initializers are running through same order as if you called a setter on this field. And this would mean that basically all execution of decorators would run from outermost to innermost in all cases. To be clear, decorators themselves would still evaluate and apply their transform from innermost to outermost, but the value they return, for instance, the method or the setter or the initializer, that would be called from outermost to innermost, which is already the case for methods. So that’s one option. The other option would be to restore the previous behavior. We would essentially have setters be called with -- so the initial value for accessors specifically would still be initialized in the current order and then it would run through the setters of the accessor, so in this case, with the original implementations, we would end up with 64 as the initial value, but that’s because the initial value is going through this twice. So what you would really do is if you wanted to implement this, you would just remove this init from both of these and the setters would call like normal and you would end up with the same value, so the benefits of this one are that it is basically similar to what the current system is doing so it’s less churn overall, and, yeah, it really only affects auto accessors, fields would remain exactly the same, methods would remain exactly the same. And so on. The only other downside of this approach is that it does make it slightly harder to distinguish between the initial value and the updated value. Like, if the setter has ever been called, but it should still be possible to do via a WeakSet. So, yeah, I do think both of these would work. Any thoughts, questions, clarifications?

NRO: Yes, can you share the first example with a set and init. So if in this example we also added a get -- now a set would first run the minusTwo setter and then the timesFour setter, right?

KHG: Yes.

NRO: Okay. If you also did a get to both the decorators, that does the same thing. So minusTwo that subtracts 2 from the value, and timesFour that multiplies by 4. Would the result here be that the values first subtract 2 and multiply by 4 or multiply by 4 and subtract 2?

KHG: So with a getter, they run from timesFour to minusTwo, I believe, because you’re calling the original getter first, and then -- so the outer one calls the inner one. You know, you’re replacing the getter with another getter. Yeah, that calls the inner one. And you could get the correct behavior, quote, unquote, here, by replacing both of these with a getter, but the reason you might want to do this style of using set and init is to cache that value to you’re not calling it on every single get. So that’s one of the reasons why this particular issue could be a problem. To be clear, the getter is the -- the outermost getter still runs first, it just calls within its own function the timesFour decorator and then that calls within its function the getter that gets the initial value or the value that’s stored in the private slot. Like, first and last here is kind of not really -- it’s like -- that’s why I say outermost and innermost. You could order your logic in minusTwo to happen before or after timesFour. Yeah.

NRO: Yeah, so just to clarify, getter and setter would always run in, like in the same direction, which means that the transformations applied to the value are in different directions, because for one it's happening on the return value and for the other on the parameter?

KHG: Yes. I believe.

NRO: Okay, thank you.

WH: I had the same question, and I do not understand the answer. To give a concrete example, if `minusTwo` also had a getter which added 2, and `timesFour` also had a getter which divided by 4, then what would be the value actually stored and what would the getter show you if you had both the setter and the getter?

KHG: that would make this example more confusing. Because then you would be doing it twice. So if you had a setter and a getter and they were both doing this, and you set the value,

WH: The scenario is this. The setters are as on the slide, but the getter of `minusTwo` would add 2 and the getter of `timesFour` would divide by four.

KHG: okay, so set would be called first, and say we set it to 6, and so minus two times four is 16 and 16 is stored in there and when we get the value of 16, it will divide it by 4 and that is 4 and add 2 and that is 6 again.

WH: The getters are running in the opposite order of the setters, correct?

KHG: kind of like, the effects of getters are going to be in the opposite order of setters, but again, the reason is because the outer getter is calling the inner getter and the outer getter can replace the inner getter entirely and not call it at all if it wanted to. Which is the point of decoration and you are turning a new function that will replace the old function. I guess. Like the effect is that the inner getter will run before the outer getter.

WH: And the inner setter will run before the outer set?

KHG: yes

WH: Okay, that is good. That is the correct answer.

JRL: Option two does not seem to be solving the bug but adding a new bug. On the issue thread, the bug is that the order of the init and the set call order are different. And we can see that still here in this option 2. If you noticed init does times `initValue * 4 - 2` and the set value will do `initValue - 2 * 4` and it is still in the opposite order. We have not solved the bug, in fact we will have made it worse, because init will call all of your setters?

KHG: two points there, because of the setters, you no longer need the init, you could remove it and have the behavior that you want. The other part of this is the existing behavior that many things need init on top, it is not my preferred behavior, I would prefer proposal 1 but that would mean less churn and be a smaller change overall in some ways.

JRL: The churn is happening because we chose Define semantics. And we are adding back Set semantics in Option 2.

KHG: I would be happy with reversing the initial order.

JRL: Option 1 is my preferred option as well.

SYG: So let me make sure I fully understand. So my initial thought is that reverse order initializers and this is just different. So could you remind me again the like why we should fix the ordering to be completely the same here?

KHG: The reason would be let’s say you wanted to make these decorators, right and you wanted them to cache the value. We would really not be able to do it. You would have to implement this as a getter that completes the value, and that is only way to do it. And additionally, like for our use cases for this type of thing where people will want to take a value or transform it or wrap it and cache the that result. So it does seem to make sense to enable that. Yeah.

SYG: Okay, I am not deep enough into the ecosystem, and I can take that at face value.But given that, I think I agree with what Justin was saying we have made a decision on Define for fields, as opposed to Set, and the proposal 2 feels very strange given that starting point. So if this needs to be fixed, or the behavior needs to be changed, seems 1 is better there.

RBN : I want to clarify and if we change the initializer for accessor field we would be changing the initializer for non-accessor field because decorator design is specifically designed to allow you to overload a decorator and switch on kind and for some examples accessor field could apply to non-accessor field and switch unkind and make sure it happens in both cases.

KHG: Absolutely, and this would apply to fields and accessors if we changed it.

JHD: I think if you go back to the example slide? Yeah, so this seems super clear to me. And in simple cases decorators feel like they should be sugared for wrapped function and this should in all cases to my reading only b five times four minus two and always multiply by 4 and subtract 2, and nothing else should happen. This seems like it is a bug but the second bullet here from innermost to outermost, so yeah if that happens, and I am not entirely sure if I am advocating for proposal 1 but if proposal 1 addresses that behavior so those things are always consistent and that should be consistent for accessor or non-ACK second error any field or for methods and anything should be innermost to outermost.

KHG: to clarify decorators are evaluated from innermost to outermost but should be executed always from outermost to innermost. When assigning a value. The proposal would make that always the case. And I understand that seems a kind of counterintuitive but think about it from the setter perspective. What we are doing with the decoration is replacing the setter with a new method that has to call the original setter.

JHD: It is currently implemented that way, but does not need to be implemented that way.

KHG: how would it work in the reverse?

JHD: I would have to think about it. But I am saying from a broader perspective, it feels like the only right behavior to me is both evaluation of decorators and on execution of them from assignment value going from innermost to outermost.

KHG: Let’s think about this from a getter perspective, right. Like getters like WH pointed out and what you’re asking is that thinking about things like assignments I think should be from outer to inner and kind of get or executions should be from inner to outer, if that makes sense?

JHD: I clearly have not paged in enough of this to speak about this clearly and I feel strongly, by reading this code, that timesFour should happen first and minusTwo should happen second and it would be confusing to me if it was different. Before I don’t know if that answers the question on how to implement and that seems like the challenge and not something – we should focus on what the reader of the code believes what it should do.

KHG: I don’t think we can, and I don’t think it logically makes sense to have an inner decorator replace the outer decorator setter. In order for this to work, actually, minusTwowould have to decorate before timesFour and do it is recovery placement first and so then receive minus 4 to replace minus 2.

JHD: I will take this off life to see how it can implemented but reading this code it should be timesFour and minusTwo

SYG: You cannot implement it and it wraps the way it does and if you want to do it linearly that is completely different from how decorators work.

WH: JHD, if you have an intuition about the order in which decorators should execute, keep in mind that it can apply to only one of getters or setters. If you pick an intuitive order for setters, then getters must proceed in the opposite order. If you pick an intuitive order for getters, then setters must proceed in the opposite order.

JHD : So instead of two mutating decorators it could be accessor decorators that would change the common, and you would say I would probably have the same intuition that would then conflict because they would work at the same time.

WH: When you have two decorators, each doing one level of quoting/unquoting, then get and set must undo each other and then run in opposite orders because otherwise you’d get incorrect results.

JHD: Thanks, that helps clarify it for me a lot, eg with JSON stringifying and parsing and back and forth. Okay, so yeah, I think in that case, I am reacting because this example is about setters, and with a mix of getters and setters, I would not have such a strong opinion.

KHG: The proposed solution would treat the initial definition of the field as a set in that case. Instead of an access so it would run minus two times four because you are setting the value.

PFC: We were talking about the example. I would like to give my compliments on how clearly it illustrated the problem. I think that the code sample really showed something that was unintuitive, and I shared the same intuition as JHD at first. I think the example really helps justify why we should consider a normative change here. I don’t have anything to say about which option it should be, just giving my compliments.

EAO: Do we lose much functionality by restricting the syntax to only support one decorator on a thing rather than figuring how multiple decorators combine? As I have looked at the read of the proposal, and that only has examples that only ever use one decorator at a time. And I have looked through the issues as well and I was not able to find anything that discussed this. And as context I am not much of a decorator user and I will presume that this is something, this is obvious that it does not need to be stated but I am asking for it to be stated. Why do we need multiple decorators on any one thing?

KHG: so I can answer that in different parts. There are a lot of examples in the ecosystem that use multiple decorators and so you have ORM and define a column through multiple decorators and combinations of decorators and it really is like what the pattern of decorators is. And the idea is that you have a decorator that will take a value and transform it into the same type of value but add some decorations to it. This is how decorators and annotations have worked in other languages so it would be counterintuitive to say that JavaScript will only support a single decoration and both, conceptually, it is crucial and in the ecosystem it is extremely common.

NRO: Yes, so if `init` was designed to be used the way `set` is, and instead of returning the value it would transform value and call the next initializer, this would solve the issue. Like now if we call all the `set` hooks and they are in order because one happens in the next decorator, and init happens after the initializer from the previous decorator returns. While if we use the same style of transform them passing it, would that solve the problem.

KHG: Are you saying proposed solution 1 is what you would prefer?

NRO: If you go back to the first slide --- If we modified this example by adding `init` together with `get` and `set` in the destructuring, and calling `init` inside the `init` hook exactly as we do for `set`.

KHG: right, so okay so that would actually work. However that was a hard constraint placed by implementers, that we could not capture the init function. If you could capture the init function you could maybe change the ordering.

NRO: If that is something you could not do, my preference would be option 1.

RPR: That is the end of the queue.

KHG: this is a late addition. So because this issue just came up last week, so, we can wait for consensus but I would like to wait for anyone and do we have consensus for normative change of proposal solution # and reverse order of initializers and treat it as a set?

RPR: Dan is on the queue.

DE: What part of NRO’s idea would requiring the initializer?

NRO: Because the decorator would have to call the next initializer to get the previous value, and that would have performance implications.

DE: Okay, then I did not fully understand NRO’s idea but I am happy with solution 1.

RPR: Dan is that explicit support for solution 1 or just tolerance?

DE: Very weak support. I have not prepared for this topic so I don’t have strong thoughts about it.

WH: How do the two solutions behave in the case where you don’t want a setter and only want an initializer?

KHG: if all you wanted was an initializer and in this case, the minusTwo timesFour and that is it and the getter and setter just initialize the slot. And proposed solution 2, it would be times four and then minus two and that would be set and the values would be 18 and there would be no getter or setter that would access the private slot directly.

WH: Just to make sure I understand this, one can initialize without running the setters?

KHG: In proposed solution 2. it does run the setters but the setters is just setting the value on the private slot. If we are adding the setters there, like back, if it is exact implementation as is here, then what we would have initial value of times 2 – then again you would update the implementation here to just have setters and remove the initializer entirely so if you set it to the same initial value, you would end up with the same result.

WH: This makes option 2 unpalatable to me, so I will go with option 1.

RPR: So we have some opposition to solution 2.

KHG: I am happy to wait for consensus if no one wants to strongly support option 1.

RPR: We have explicit support for solution 1. Any others?

NRO: Option 1 for me.

RPR: Thank you NRO.

RPR: I will check because this was a late breaking item. So it is possible to object purely on time and is there anyone opposed to adopting solution 1?

WH: I support option 1 but I would like to ask the champion to come back to this topic in a future meeting and actually explain all the details including examples with setters and getters. I want to understand the consequences of option 1, but this does not block consensus.

KHG: okay that sounds good. So next meeting I can set that up.

RPR: Chris will come back with a greater explanation of proposal of solution 1. So far no particular opposition. Thank you.

NRO: To clarify we do not have consensus yet until the next meeting?

WH: I am not withholding consensus — I support option 1. I’m just asking for a future full presentation out of curiosity.

KHG: okay.

RPR: It seems that we are agreeing we should return before we stamp this as accepted, we will return to the next meeting? That is the course of action?

JHD : So sounds like we have consensus, and Chris will hopefully will come back in a future meeting with a more detailed report about the consequences of the change, but moving forward with it for now.

RPR: Okay thank you. So then we do have consensus on accepting solution 1. And but with the request to come back, and can you verbally dictate the conclusion?

KHG: so we have consensus to accept the proposal solution 1 which is to reverse the initializer order for field and accessors and treating them like a set to the value like we are updating the value. So the same order that setters went in. And we will make that change and I will return in the future meeting to discuss more thoroughly that change.

DE : In the summary a quick explanation of option two. And can someone dictate a summary if?

KHG: objection to option 2 it was more confusing it did not seem – technically did addressed the bug possibly introduced more because people would not understand that initializers run and setters run. It could be counterintuitive.

WH: If you had only initializers you want the initializers to do the transformations. If you had only setters you want the setters to do the transformations. But with both, option 2 would run the transformations twice which would be really bad.

### Speaker's Summary of Key Points

- objections to option 2:
- Was more confusing, possibly introduce more bugs because people would not understand that initializers run and setters run. Counterintuitive
- Option 2 seems like a poor emulation of parts of Set semantics, rather than sticking with coherent Define-based semantics
- Option 2 has certain cases where things run multiple times in a counterintuitive way.

### Conclusion

- Consensus on option 1: To reverse the initializer order for fields and accessors, conceptually treating them like an update to the value, the same order that setters run in.
- In a future meeting, the champion will come back with a more detailed explanation

## Decorator Metadata for Stage 3

Presenter: Kristen Hewell Garrett (KHG)

- [proposal](https://github.com/pzuraq/ecma262/pull/10)
- [slides](https://slides.com/pzuraq/decorator-metadata-for-stage-3)

KHG: Decorator metadata, last time we talked about the design, and we kind of came to consensus of the overall design. And we updated the spec and everything and so yeah we are proposing for stage 3. And so a refresher and why metadata is useful and there are a lot of cases that use it: *ORM’s and so we have meta-data and what type of columns are being – what types they are and constraints are and et cetera. And runs on type information, and routing type*`reflect.metadata` is the single most-used decorator library and so it has this valuable capability.

KHG: How it used to work, a quick refresher: in legacy TypeScript decorator the class is the first parameter. So they could assign metadata to the class and add it to a WeakMap, and there is any number of ways they can key into that metadata. Decorators in the current proposal do not have this capability and they never receive the class so there is no way to do that publicly expose metadata and proposal is a shared metadata object and when we are decorating the class the decorators will receive this object on the context, and it is just a plain JavaScript object and we can use it to assign values and use it in a key in a weak map, and passes to all decorators and get assigned to `Symbol.metadata` on the class itself.

KHG: So, yeah. I will say in review, just before the plenary there were some issues raised with the current spec and the first one was that some so decorators context object does inherent from parent class data object and this will lead to it eventually – something is inheriting and we want it to make a null – no okay, so it is inheriting from class from the `Symbol.metadata` from the simple class and that will come from the `Symbol.metadata` function and that cease like a bad thing if someone replaces that and people could inject metadata into everything and the proposed solution were to have it be define `Symbol.metadata` function to be non-configurable null, or we don’t inherit the superclass is function itself.

KHG: The other issue that was brought up and the other one the spec currently just blanket assign `Symbol.metadata` for every class. And that was not my initial intention and I did intend for it to only be assigned on classes that are decorated and that was my review after the last implementation. So I would need to make that change. So happy to withhold stage 3 based on those.

KG: It is important not to add metadata by classes by swapping out `Symbol.metadata` on Function.prototype. So for our solution to that problem, I don’t have a strong opinion about which way to go, and I lean towards making the get conditional. But the thing said in the presentation was not what was proposed in the issue. The thing said in the presentation was to the get if the superclass is function.prototype. But the proposed thing or at least I think the proposed thing was to only do – only make the metadata object be derived when the class itself is derived, which is syntax. You can syntatically extend function and you do want the get to occur in that case. I would say the metadata object is derived based on whether the syntax is derived.

KHG: One issue with that if we combine that with the other change where the only decorated classes get metadata assigned at all, um, then the idea is that if you have like class A which has metadata and class B which does not have metadata and class C has metadata, and so class C would inherit from class A metadata. And then up the chain of the prototype. So define it as non-configurable and not enable null, that is not an issue because that will be just be null.

KG: That makes sense and in that case, I like that option. I would also want to make the get conditional even though it does not solve the problem. It just seems silly to do the get in the case of nonderived classes. But we should also have nonconfigurable nonwriteable null Symbol.metadata on Function.prototype.

KHG: That is an optimization we should put in there.

SYG: I zoned out why it is non-sufficient.

KHG: the idea is that say you have class A, class B which extends to class C which extends B, and class A has metadata, and class C has metadata and class B does not and intermediary class does not and update is that class D would not get a single metadata object and class C and its metadata would inherent from class A metadata directly and we would do that on doing a get about the superclass to get that property which is inherited, `Symbol.metadata`, and it would get the metadata object from class A. And then it would inherit from class A. So, you know if class A did not have metadata, it would then skip class A and get a function that prototype again. So you know, that case where we would need the prototype that could not be changed.

SYG: I had understood that if it was tactically extending it would get the metadata, and if it was not extending, it would not get the metadata

KHG: even if it is syntactically extending it could still get the metadata on function of that prototype because it is going to get it in the superclass and it is going to call get and go through a normal process.

SYG: Oh yes, yes, I understand. Thank you.

JHD: My queue item says only decorated classes that assigned metadata get the symbol, but it was pointed out in Matrix that that would violate previous implementer constraints here that the shape of the class would be determined based on syntax. But then that always means that classes that are currently decorated would suddenly start acquiring metadata as this feature gets shipped, and as we add new protocols we add them to the tree. And so maybe there is no other way to do it. It struck me as strange that everyone would get the burden of metadata even if an application is not using metadata at all for example.

KHG: So the constraints from implementers I think is more that we need to be able to tell the shape of the class from the syntax. Right? So if we added decoration to a class and that will result in always having `Symbol.metadata` then we can tell what the shape of the class would be from it is syntax and we can tell it get some of that metadata on the instance at that Point because there is a decorator. What they are opposed to is “maybe the decorator will create metadata, and maybe that will create Symbol.metadata, and so I think –

JHD: That is what my queue item proposed and the Matrix comment made me realize that would not work for that reason. To preserve the static shape, we would have to add another keyword like `accessor` syntactically for metadata.

KHG: We would also need to change the API as we agreed on previously because this metadata objects just exists, passed to the decorators. And if you don’t use it will still get defined on the `Symbol.metadata` and we previously talked about having admin.metadata which is a function and there was a security issue with that. And yeah, I do think this API is both intuitive and does tend to work. And I also not super concerned with the the cost of adding that because it is just one object on class definitions. And if it were like an objects on every single instance, I would just be concerned but they are just on the definitions themselves and typically, and unless you are dynamically defining classes, it is 0 tens of thousands.

JHD: I have one other question then - the `Symbol.metadata` object on a decorated base class, what is its prototype?

KHG: The object inherits its prototype is superclass, oh on a base class? It would be `null`.

SYG: Backing up what Chris is saying: our requirement is that the object shape be determinable statically, and things that look declaratively will look declaratively with respect to shape, and adding to `Symbol.metadata` to classes that have decorators still meets that constraint. So I’m not excited about adding extra properties on every decorated class, but if it is just classes, in that instance like Chris was saying that would be okay.

KG: We talked about a lot of stuff, and I want to recap, since it sounded like we were on the same page about a solution. Just to confirm: the idea is that there is no symbol.metadata property created on any class that does not have a decorator, and for any derived class that does have a decorator, during class creation the metadata property is looked up on the parent class and whatever value you get is used for the `Symbol.metadata` object for the derived class. And in addition, there will be a non-configurable and nonwritable null `Symbol.metadata` property on Function.prototype to avoid this problem where you have a base class without decorators and derived class with decorators. Is that an accurate summary?

KHG: Yes.

KG: I am happy with that state of things. It does require a couple of small tweaks to the spec text but I think we can do that readily.

KHG: only tricky part is getting like figuring out how to whether a decorator exist on that class and answering that question on the spec, and I should figure that out pretty quickly.

MHG: So consensus? Anyone? Does anyone oppose to consensus before changes or are we okay moving to stage 3 conditional on these changes?

KG: I would be happier if we can come back tomorrow with spec text and ask for consensus then. I think it would be pretty straightforward. We have a little bit of extra time, it is only Tuesday, and I would be happier to have all of the boxes checked first.

KHG: cool okay that sounds good. And I will get it done by Thursday for the committee to review. Thanks everyone.

### Summary of Key Points

- There’s a constraint from implementers that it be syntactically determinable whether a class should be given a Symbol.metadata property. This means it can be conditional based on the presence of decorators, but not by the actual usage of metadata by decorators. Additionally, we all agree that we don’t want it to be possible to add metadata to everything by modifying Function.prototype. The only way it turns out to be practical to do that is to add a non-configurable, non-writeable property of null to Function.prototype, to avoid injecting metadata on everyone. Given those constraints, there’s only one design that makes sense, and that’s the design everyone likes.

### Conclusion

- The committee generally agrees on the design for metadata discussed. It will revisit this topic later in the meeting for full consensus on Stage 3 based on spec text currently in progress. Changes to be made:
- A new non-configurable non-writable null `Symbol.metadata` property will be added to Function.prototype
- Only syntactically derived classes will look up Symbol.metadata on their parent
- Classes without decorators will not get a Symbol.metadata property at all

## Iterator Helpers: should Symbol.iterator fallback be a callable check or an undefined/null check?

Presenter: Michael Ficarra (MF)

- [issue](https://github.com/tc39/proposal-iterator-helpers/pull/272)
- [slides](https://docs.google.com/presentation/d/1WlhX7mT7n-lgYmU9RR0AVUmNzFVbhBs2bQtvhjuSgss)

MF: So before I start, I just wanted to make it clear that I am aware that these topics are fairly dense and can be difficult to understand, so I wanted to just give everyone free reign to at any point, if you have a clarifying question, don’t even bother jumping in the queue. Feel free to just unmute and ask me a clarifying question at any point during the presentation. Afterwards, we can start using the queue. Because I’m sure that there will be other people with the same question if you have a question. So this is the first of the two topics. It should be the easier one, so let’s get started. So this pertains to this pull request, which you can follow along if you want, issue <https://github.com/tc39/proposal-iterator-helpers/pull/272> in the iterator helpers repo. I have two sections. On the left is the section of code from the iterator helpers proposal. On the right are some sections of code from ECMA 262. What they’re showing is the fallback from a Symbol.iterator to the string "next" method in cases like `flatMap` where we accept both iterables and iterators or in `Iterator.from` where we do the same. On the right we have a similar fallback, except it’s from asyncIterator to iterator. And that happens in existing places. So if you have for await, it will fall back to the sync iterator. So the difference I’m highlighting is that on the left, the fallback happens based on the callability of `Symbol.iterator`. If `Symbol.iterator` is not callable we fall back to `"next"`, treating it as an iterator already. On the right, the fallback happens based on, as you can see in the top, it being undefined or null. So if asyncIterator is undefined or null, it will fall back to iterator, but if it is non-callable, it will just fail by trying to treat asyncIterator as a function.

MF: I claim that this is a discrepancy worth looking into and possibly fixing. I see three possible options. The first would be changing what we saw on the left side, the IsCallable check in iterator helpers to an undefined and null fallback. And the other is to change async to sync fallback from an undefined or null check to a callable check, which would have an impact on existing programs, and I’m not sure of what that impact would be, but probably fairly minor. We’ll get into that more later. And our third option is to not fix it and be okay with that inconsistency. So as an example of option 1, consider this program: [on slides] iterator.from, remember I said there were two places in iterator helpers where that AO was used. `Iterator.from` and `Iterator.prototype.flatMap`. If we gave Iterator.from something that has a Symbol.iterator that is `0`, which is non-callable, currently, we don’t consider that to be iterable. We consider that to be an iterator, so we fall back. If we make the change in option 1, we would consider this to be iterable and then it would try to call `0`, and it would throw. This program would go from non-throwing to throwing. As an example of option 2, we have something similar, an iterable that is possibly also async iterable, because it has a `Symbol.asyncIterator` property, but it’s non-callable. Currently, if we use that in a for-await loop, the for await loop will consider it to be async iterable and it will call `0`, which will throw. If we make the change for option 2, this will not consider the value to be async iterable, so we’ll fall back to Symbol.iterator and call that and it will succeed at sync iteration. And option 3 of course is obvious: we don’t make any change.

MF: So some things to consider for when we were making this decision, iterator helpers should not be considered in a vacuum. There’s async iterator helpers also in progress. It’s a stage 2 proposal. Iterator helpers is Stage 3. And async iterator helpers will add an async to sync iterator fallback to the iterator helpers. So now we will fall back from async iterable to sync iterable to iterator. So if we don’t make any change, we’ll either have an inconsistency between the async-to-sync iterable fallback and the sync iterable to iterator fallback in the iterator helpers, or we’ll have an inconsistency between the async-to-sync fallback in iterator helpers and the async-to-sync fallback in other places where iteration happens. I think that would be a big problem. We should not have that -- that’s a much worse inconsistency than the other ones we’re talking about.

MF: Also, if you care about -- I know a lot of people probably don’t remember, but I’m also championing the first class protocols proposal. This is a protocol -- probably the most used and popular protocol that we have in the language today. When people start defining and using their own protocols using language facilities, if that proposal is to advance, it should use one of the strategies that we decide on today. And the third thing to consider, you may or may not consider it related, but we have a string-based protocol from basically forever ago for getting a primitive value from an object and it uses the toString or valueOf string-based method names, and that fallback from either toString to valueOf or valueOf to toString, whichever one it prefers. It prefers different ones in different circumstances. That fallback is done via callability check, which matches what we have today in the iterator helpers proposal. So to match this existing fallback behavior, we would be taking option 2.

MF: So with all that, my opinion at the moment is that we cannot do nothing, mostly because of what I said about the future additions of async iterator helpers. Option 2 is the most desirable. I think option 2 is most desirable. It matches the valueOf and toString. It does have a risk of changing programs. And as a reminder, for why I think this is low risk, we’re only considering broken programs and how already-broken programs would break. So changes to existing programs shouldn’t be feared. I think it’s highly unlikely that someone is relying on this. I haven’t been able to think of a reasonable case how somebody would be depending on this kind of failure. And that’s the end of my presentation.

CDA: Okay. We have WH first in the queue.

WH: I agree that option 3 is unacceptable. Between option 1 and 2, I have a slight preference for option 1. If you’re switching behavior based on a slot, you should switch behavior based on whether something is present or not. Null and undefined are well-known values to indicate the absence of something. Checking whether something is callable or not just feels a bit weird. The reason it’s done for `valueOf` and `toString` is because people use objects as hash tables and can accidentally stick things into those properties. That is very unlikely to happen when you use symbols.

MF: I hear a slight preference for option 1 there Waldemar. Is there anyone else?

JHD: Post-ES6 the language has moved to equate absence and `undefined`. So all the places where those things are different are typically legacy things. Overlapping null and undefined is less universal, but it seems reasonable to me to have that equivalence.

JHD: [on queue] Strong support for option 2 if web compatible. Option 1 if not.

DE: Yeah, I personally prefer option 1. But I think for iterators today, it’s using just undefined, not null or undefined in and your patch in option 2 uses undefined as well. I think this makes sense because we’re looking to our -- the normal cases where the property doesn’t exist. That will return undefined. I don’t think it’s a good idea for us to work on trying to get things somehow fixed up in an error case. I think it will fail more loudly, and I think that’s the protocol pattern that ES6 set in place, which is different from the pattern with valueOf and toString. The rationale that Waldemar gave for callable checking for valueOf/toString is unique to non-symbols, so doesn’t apply here. More broadly, ES6 made a number of things more strict, so I’d like to continue with that more strict, more loud errors pattern. And I’m fine with it if we end up putting option 1, null or undefined, or even option 2. I think it’s good to get consistency.

MF: So just to quickly correct a statement you made, the pull request for option 2 I have here, doesn’t do just an undefined check. It may be confusing because you can see that, in GetIterator, we’re comparing against undefined. But that undefined is returned by GetMethod, which does an undefined or null check, so it is testing for either and treating them the same.

DE: Oh, sorry. I support Option 1 as is.

MF: Yeah, and that’s why I had them both up here. But, yeah, it definitely is understandable. I was confused myself at first.

SYG: I also have a preference for option 1. I think for the easy way out reason you the expect, which is the reason that you gave for a slight DX improvement for option 2 that might fix things up doesn’t quite meet the bar for me to see if it’s web compatible, given that it’s changing from something broken to be maybe something slightly less broken. I’m inclined to leave well enough alone and change this iterators helper proposal to be consistent with what the spec does today.

JHX: Yeah, my question is about how does -- how our decision affects the first class protocols proposal. Because I don’t fully understand this part.

MF: Yeah, thank you for asking that. Actually, I should have gone into some more detail on it. What we’re effectively doing in each of these places where I showed is we are testing for whether a protocol has been implemented, and if not, testing for whether a different protocol has been implemented. First class protocols, the proposal, has a component that allows you to test whether a protocol is implemented by some object. That test can be done either via testing whether each of the symbols on the tested object is callable, or whether the value on the tested object is not undefined or null. And I imagine that whatever we choose here today is the choice we would make for that test operation in first class protocols. Did that clarify?

JHX: The -- I think the problem here is -- sorry, I understand -- so I understand the protocol. Also not -- I think it might be accessors?

MF: Yes, it could be an accessor, but, you know, after doing the get, the result should be either tested for callability or tested for not null or undefined.

JHX: Sorry, I still don’t get it. You mean the protocol should always get a function.

MF: Yes.

JHX: It can't be a normal value?

MF: I mean, it is a stage 1 proposal at the moment. That could change before stage 2. But I was thinking that they would all be functions.

JHX: Okay. It’s not what I understand before. But, okay, it’s the department of the first class protocol. But thank you for the answers.

DLM: Preference for option 1

JRL: Can you show the example code for option 1? I notice here we’re using Iterator.from. Now show the example code for option 2. We’re using for-await. If we choose option 1, is there any breakage to the current use of for-of or for-await-of?

MF: No. That would be aligning iterator helpers and theoretically async iterator helpers with these existing forms.

JRL: Okay. My preference is for option 1, because it doesn’t break any existing code.

MF: Okay. I somewhat take issue with the term “break,” but, yes, "it does not change the behavior of existing broken programs" is how I would phrase it.

CM: Yeah, so I favor option 1, just because the presence of a null or undefined pretty clearly signals “this thing is not here” and, therefore, fallback to some other thing. Symbol.asyncIterator exists so that you can provide a property which is an async iterator. And to provide some other kind of thing there is just a weird thing to do. And so option 1 just seems like a clear kind of way of signaling the programmer’s intent.

MF: Okay, given there’s nobody else in the queue, then it sounds like pretty strong support for option 1. No dissent really, and gladly I heard opposition to option 3. So I will do option 1, which I can make by just changing the iterator helpers proposal. So I’ll do that.

SYG: Before we move on, could well, in the spirit of Michael Saboff’s earlier proposal, get an affirmative from everybody here on the implementation side that is already Stage 3, and if this is a thing you already implemented, you would have to change. Is there a PR that is in progress for the spec change?

MF: Yes. That -- that’s this. So we have updated spec text.

MLS: Thank you for calling that out.

### Speaker's Summary of Key Points

- Strong support for option 1: e.g. WH/CM said that undefined/null more clearly indicates absence whereas other values are more clearly an error
- Strong opposition to option 3 (continue with inconsistency)
- Committee generally prefers errors to be louder and more obvious in error cases, hence disprefer option 2 (the presenter was the only one to support option 2)

### Conclusion

- Consensus on change #272 of changing the Stage 3 iterator helpers proposal to make fallback for non-iterable things to be based on null/undefined, rather than callability. This PR will be merged.
- Champions will need to inform existing implementers about this urgent change (per Michael Saboff’s earlier topic)

## iterator helpers: should malformed iterators fail early or fail only when iterated?

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-helpers)
- [issue](https://github.com/tc39/proposal-iterator-helpers/pull/274)
- [slides](https://docs.google.com/presentation/d/107HP2juNXjuCkoxhUqHZfHiJ0HEGcz-kbraHdpdEiMg)

MF: So like the last presentation, we have an example of the spec text here. On the left is the iterator helpers proposal again, and on the right is 262. What this is showing is on the left, an AO that is called with every iterator helper right at the start of the helper to get the next method out of the iterator. So an iterator is an object. It has a string `“next”` property, which is a function. So you can see that the first thing we do after getting that value is we check for the callability of that "next" method. If it’s not callable, we throw right away. And remember, a lot of the work of iterator helpers is delayed. So this could be like a map over an existing iterator, you know, of some function and it produces an iterator, but nothing happens at that moment until the resulting iterator is iterated. So if you have a malformed iterator used with that iterator helper, it will throw immediately even though no iteration happens on the result. On the right, you see 262. In 262, we do something a little bit different. We’ve broken it up into two parts. In 262, there’s the part at the top, which gets the string `”next”` property, and sticks it in this iterator record. And then some time later when we call iterator next to advance the iterator, it just blindly calls whatever was stuck in that NextMethod slot of that record. So you can see there’s no explicit check for callability immediately when we get the next method, the check for callability ends up just failing when we try to advance it. But remember, that’s when we try to advance it, which is different from when we get the next method out of the iterator.

MF: And it’s different in exactly one case: empty array destructuring. It’s the only case where you can observe this difference between iterator helpers and 262 today -- because you separate the two concepts of getting the next method out of the iterator and doing iteration because empty array destructuring doesn’t end up doing any iteration, so you can see the difference. So I, again, claim that this is an inconsistency worth looking into.

MF: We have four options in this case. And I’ll run you through them just like the last presentation. The first two of these options, in my opinion, set some kind of consistent design philosophy. The remaining two don’t, but they are valid options that we can take.

1. So the first sets a design philosophy that we should consistently fail early, even if iteration may never happen, just like in my `map` example that I gave you where the resulting iterator is never iterated, or just in case of an empty array destructuring, we would just fail early in those cases.
2. The second is also a design philosophy and it’s the opposite. It’s consistently delay failure until iteration happens because iteration may never happen, so you may not actually run into that failure.
3. The third option is to remain inconsistent, but we still want to make a change to iterator helpers until iteration. We’ll get into why that might be a desirable option as well.
4. And the fourth option like last time is do nothing. It is okay to have inconsistencies here.

SYG: What is the difference between options 2 and 3? Is it the case that 262 today already consistently delays failure until iterations start?

MF: It is the case that 262 does. This -- number 3 is for delaying iterator helper errors.

SYG: Right. But how is that different from 2? If you delay iterator helpers, wouldn’t everything be consistently delaying failure until iterators start.

MF: 2 also makes a change to 262 to not actually get the iterator at all. I’ll show in more detail. I have a chart that breaks it down in a little more detail that specific difference.

SYG: I might need to see the difference to understand that, I mean, the actual change to understand.

MF: You know what, let me just skip ahead to that chart real quick. So this is that chart. You see it -- in option 1, we add that callability validation to 262 on the right. In option 3, we just remove that callability check on the left in iterator helpers. In option 2, we remove that callability check in iterator helpers, but we also skip ever fetching or closing the iterator in cases like empty array destructuring. So empty array destructuring would truly be a no-op instead of opening the iterator and closing the iterator without doing any iteration, which is the thing that splits those concepts in 262. Remember, everything else in 262 uses these concepts. You can’t actually distinguish the point between getting the iterator and starting iteration, except for the empty array destructuring.

SYG: What is the inconsistency? Because option 3, you billed as "remain inconsistent". What is it inconsistent with?

MF: Because you would be fetching and closing the iterator for empty array destructuring. Give me a second. So option 3 is not inconsistent between iterator helpers and other forms of iteration in 262 today. There is consistency there. It’s just that I don’t have a way to describe a consistent design philosophy going forward using just this change.

SYG: I see. Thanks.

MF: That was all. But, yes, options 1, 2, 3 all provide consistency between this property that we’re looking to get out of iterator helpers and existing other forms of iteration. Okay,

MF: So let’s go into examples of what will change given the choice of each option. So remember option 1 means we have a design philosophy of failing early. So if we have empty array destructuring for something that’s iterable, but returns a broken iterator, today this does not throw, because remember, we fetch the iterator, we don’t iterate, and then we close it. So with the change in option 1, this kind of program would throw. We would be more strict about broken iterators. It seems like the choice that we made in the last presentation. Option 2 has a design philosophy of delaying failure until we actually do iteration. So on the other end, iterator helpers, if we invoke an iterator helper on a broken iterator, but then never iterate it, currently, this throws because it does a callability check, but with option 2’s change, this would not throw until we actually start iterating that result, which may never happen. So the similar change that would happen in 262 with option 2 is that when we have an empty array destructuring, we don’t even bother getting the iterator because we know we’re not going to iterate ahead of time so there’s no point in getting the iterator just to close it. So right now, this getter will be called, but with the change in option 2, this getter will not be called. It will completely skip it. And, yeah, I just kind of explained this -- we won’t, like, close the iterator either. So this skips all of the iterator protocol because we know that we don’t need anything. We’re not pulling anything out of it. Option 3, as we’ve talked about earlier, it is similar to option 2. So this is the exact same example. This would be a change to iterator helpers, but we would not get that change to skipping iteration entirely for empty array destructuring. So that brings us to this diagram again now. I went over it earlier, so I don’t think we need to go over it again. But option 1 changes only 262. Option 2 changes both 262 and iterator helpers. And option 3 changes just iterator helpers.

MF: So to summarize where I stand on this one, unlike the last presentation, I think all options are actually acceptable. The do-nothing option is fine if we preferred that, but I think it is the worst option. So I like how options 1 and 2 give us a consistent design philosophy whenever we’re doing built-in iteration, we have a design philosophy to follow with either 1 or 2 when we add new uses of the iterator protocol. I like that options 2 and 3 delay errors if those errors may not ever happen. So this is different than the typical good philosophy that you should fail early. That is only true if you are inevitably going to fail. If it’s possible that, like, some case is bad but wouldn’t necessarily run into the error, you should delay it until you know whether that’s the case. So that makes options 2 and 3 preferable. And I think that these changes to empty array destructuring, which we discussed, which exist in options 1 and 2 are very low risk, and I guess I’m not going to compare them to the other presentation, but I think they are very low risk and we should not stop that from allowing us to have a consistent design philosophy from options 1 and 2. So my preference order is option 2 over option 1 over option 3 over option 4. And as a handy guide for you, I have a decision tree. This may or may not actually be the best way to do this, but I want to give you a minute to answer these four questions for yourself, A, B, C and D, and depending on where you fall in this table, it will tell you which option you prefer. That for any of you who had not yet already made up your mind, this could help you. The cases with bottom mean you have made some nonsensical choices, so please don’t arrive at those.

CDA: There are lots of folks in queue.

MF: I guess we can start going through the queue while I have this up for anybody who is undecided.

KG: Yeah. MF already knows this, but I prefer option 3. I do think that it does have something of a consistent philosophy, which is that we just assume that you have written correct code and don’t go out of our way to, like, do extra work in case you haven’t written correct code. Because if you have written correct code, you have an iterator here, and then, like, you don’t run into these error cases. And honestly, that’s not like an unreasonable philosophy. We do that in a number of other places, and, like, sometimes I like to have error checks, but these are pretty obscure errors and you will get an error eventually unless you do something very strange. I do think it is sufficiently consistent, and I don’t see much reason to do extra checks here. And I really don’t see much reason to change existing code.

JHD: I think option 1 is best based on my intuition as well as after this chart came up, it relates the same way. My analogy here is do we check for my passport before I get on the plane or when I try to leave the airport in the country I’m arriving in? And it seems silly to me to delay an error just because it might not happen, because there’s no situation where I’m passing a broken iterator that I’m doing the right thing, so, like I very much want to fail as early as possible. I mean, option 3 seems fine as well, I believe, because if I’m understanding it correctly, option 3 is -- thank you. Oh, I’m sorry. Option 4, I guess, is the do nothing. Okay, well, then, I don’t know. Like, I can accept not wanting to change existing code for those that are gun shy about that. But I would want -- yeah, in general I would want as early failure as possible. In other words, I want to do the extra work that Kevin was talking about as often and early as we can.

CDA: Next in the queue is Justin.

JRL: So going through this is option 3 also contains an unrelated optimization for empty array destructuring, and in that case, we don’t touch an array iterator. But that is completely unrelated whether or not we want to validate a function and validate this is actually an iterator. I think we can make that change, but it’s a separate decision. If we choose option 3, which is my preferred option, I think this still gives us a clear philosophy that we are doing things lazily. We are not actually going to validate that the iterator is a callable next method until iteration actually happens. So that still seems a consistent good answer to me.

MF: So I would say option 2, the change to empty array destructuring is not really separate because the only reason why we can observe that there’s a difference currently between iterator helpers and existing iteration is because empty array destructuring separates the fetching from iteration because it, you know, doesn’t iterate. So if we conditionally fetch as well, that means that empty array destructuring no longer makes it observable that there’s a difference between early failure and later failure. We could have this be a separate change, but I do think it’s significantly related to the question we’re trying to answer today.

JRL: I mean, if you -- iteration here is the fact that you called the next method. If you never call the next method, then what does it mean that you didn’t actually perform anything lazily? Like, so you’re saying that it’s observable because array destructure doesn’t call next method, but we’re not calling next method because we don’t need get anything, so we didn’t validate it. That’s still a consistent answer. We just never called next. We’re going to call next, but we never did it. So it’s still lazy. We still have the same consistency here.

MF: Yes. But when it does the fetch of the iterator, whether or not that fetching iterator decides to fail based on a non-callable next is observable. And if we don’t fetch an iterator, if we skip that whole process for empty array destructuring, then it’s -- it’s a question that cannot be answered about whether fetching fails early or it waits until iteration. I’m not, like, disagreeing with you. I’m just putting it in terms that mesh with my mental model.

JRL: My support here is for option 3.

CDA: All right. We have -- next in the queue is SYG.

SYG: I also support option 3. Risk appetite for this is very low, so I think especially given what we discussed in my initial clarifying question that the inconsistency in option 3 is not so far inconsistency between iterator helpers and 262, but inconsistency with the design philosophies that you laid out in options 1 and 2, which existing discussion, I think, kind of shows somewhat of a value judgment. Like, there are different framings of this that hint at a design philosophy within option 3 as well. But I think if I can push back on the design philosophy framing, like, given that the language already does a thing, the signal that I’d be interested in is how users think about it today or how developers think about it today and how predictive is any design philosophy in fitting with, like, how users think about what is happening today? And that’s the actual thing I want to minimize. Like, I don’t want to adopt a new scene philosophy that is not predictive of how users think about it today. And a legitimate answer could be they don’t think about it today so it doesn’t matter. But I actually don’t know. So given that, my risk appetite is pretty low.

???: Option 3 seems the least risky thing. That’s it for me.

WH: I consider passing an invalid `next` method to be an error. You shouldn’t do that even if you use an empty array. But I’m also not a stickler on detecting such errors in every possible case. So either option 3 or 4 would be fine. I’m not a fan of option 2 just because it introduces different behavior depending on whether an array is empty or not, and I don’t want to introduce gratuitous irregularities here. I kind of view option 2 as akin to allowing users to provide an invalid sort comparison function to `sort` as long as they pass an array with exactly one element.

MF: Yeah, I think that’s a great analogy. Very much like that. Which is not allowed today.

DLM: (on queue) supporting option 3.

CDA: And that’s it for the queue.

MF: Okay. Definitely sounds like the majority support option 3. I think JHD was on the side of option 1 and a couple of people in opposition to option 2, so I’m leaning toward, then, just proposing for consensus that we select option 3.

DE: [on queue] +1 to SYG’s comment

JHD: Since I don’t like 2, and if 1’s not going to get consensus, which it seems it won’t, then I definitely prefer option 3 to 4, because that at least creates consistency, so I’m fine with that as a fallback.

### Speaker's Summary of Key Points

- Skepticism about risk/reward tradeoff of changing array destructuring semantics and of special-casing empty array patterns
- General design feedback that, in this sort of case, it’s fine to follow the principle of letting things flow and triggering an error when it comes up, rather than bringing it up artificially soon.

### Conclusion

- Consensus on option 3

## Array.prototype.group rename for web compatibility

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-array-grouping/)
- [slides](https://docs.google.com/presentation/d/1QvTThZlYfsXDHGIGR-vAR3AhTbRe9ySukuW-H1ZnjKM/edit#slide=id.p)

DE: We heard Michael’s meta topic, now we see the visualization of a Lie group conveniently on the right side of the screen, which does not pertain to this topic at all. Next slide.

DE: So we heard the history, and overall, the -- this proposal has held up based on we encountered an issue and the champion hasn’t been available to work on this proposal. So next slide. So what should we do from here? I think Michael Saboff said -- led the discussion about the most important thing, which is to improve the coordination and communication between champions and implementers. I’m very happy about that conclusion.

DE: On this specific proposal, there is work needed. Someone needs to think of a new name. There are a bunch of proposals to the issue tracker, and somehow try to check if it’s web compatible, which is a little difficult.

DE: Overall, at a high level, how can we deal with stage 3 proposals where the champion’s unavailable? I think this has come up in a number of cases. This is not the only one. In my opinion, when a proposal becomes stage 3, it’s sort of -- the committee has sort of taken collective ownership over it. Obviously if the champion’s around and available to work on it, great for them to do so. If not, we should expect to have a call for volunteers and get more people involved. Ideally, this will come from the champion, but even if the champion’s not available to do a call for volunteers, we should still do one as a committee anyway.

DE: So in this case, do we have any ideas for how to find web-compatible data stores array methods? We keep encountering these issues, this one is pretty obscure because it’s not even about a library using the group. It’s about someone using `group` as a property to check the types of things.

DE: So how should we be doing it? Should we avoid adding new array methods or should we just think of a name that’s more obscure, like maybe groupToArray [NB: DE meant to say groupToObject] would be nice, or groupToMap.

SYG: I don’t have a good idea for the array stuff, but I have a comment on the stage 3 thing. Thanks for bringing this up. And this is something I’ve said multiple times in the past, I think it’s very important that the committee, what’s the word, the committee maintains the strength of the signal of Stage 3 to implementations, both in what it signifies, in is it ready for implementation and ready to ship, and also in simplicity, we have one Boolean bit -- that’s kind of redundant, we have one bit, is it ready for implementation. I think it’s important the maintain that signal so following that train of thought, if something cannot be shipped, because of a known incompat and the champion becomes unavailable, I think we should demote it. Perhaps it -- well, perhaps not immediately demote, but I don’t know how we can do this, if the -- if the champion is completely unavailable. Like, I’m hoping perhaps champion will still be available for a 5-minute item saying, hey, I’m not available to work on this anymore. Can I hand this off to somebody. If not, we should demote it to stage 2 until somebody can pick this back up. If that is unrealistic given the champion’s availability work on TC39 stuff, I don’t know if it ought to fall in the chair group or regular volunteers to go over stuff that are Stage 3 but don’t have an active champion.

DE: I agree completely with everything you said. In particular, once we have this urgent information problem, pointing to any urgent issues, then implementers can easily say, okay, anything if Stage 3, without this mark, it’s in this state where it’s hopefully ready to have implementer energy and implementation feedback. We don’t want things to be in that “urgent information” state for a long time. If there’s no energy to repair the proposal, then we can make a trend in the committee of retracting the proposal to Stage 2; that sounds good to me.

DLM: Thank you. Hopefully I’m audible this time. We discussed this in our proposal review meeting and the team is quite opposed to renaming this again and in general, we would be opposed to adding new array methods. The bugs that surfaced for this that we discovered through this implementation were not easily localized back to this renaming. As a matter of fact, the I think second time this came up, the bugs were fairly obscure, and I think the lesson that we learned here is that in the lack of -- you know, without extremely compelling evidence, there won’t be any problems with the name, we would only consider static methods in the future for this. And EAO is next in the queue to discuss this.

EAO: As Dan said, I thought we had earlier some consensus on looking over this. But -- so I was a bit surprised by the shape of the question here from DLM, but that was probably not intentional. However, I do think that this is really less important than the metadiscussion here about what to do in general with this proposal. And there I’m -- I think I’m on the same sort of direction as I’ve had others before with this -- that this ought to get bumped down to Stage 23, especially if we don’t know whether we’re talking about an instance method and what it’s called and whether it’s a static method and what it’s called and how man

KG: Yeah, this, I guess -- DLM already said most of this, but it does seem like we basically don’t have the option of using good names for things, given how often we have been running into bugs. I do hope that we can keep the option of using more obscure names, so in particular, the suggestion for these methods was groupToObject and groupToMap. And I feel reasonably confident in predicting that those are not going to have compat issues. In fact, it would not surprise me if literally no one has used the identifier "groupToObject" in any JavaScript program at any point, but certainly not as a method on arrays or as a property on arrays or a property on something that might get type punned with arrays, as we ran into with group. So while I am basically neutral between static methods and obscure names in this particular case, I do hope that in the future, we can consider obscure names for adding new array prototype methods. Even though it seems like we are unfortunately constrained to obscure names.

DE: I want to turn this question back to DLM. Would SpiderMonkey be open to considering very obscure names or should we rule those out as well?

DLM: I think if it has a UUID or something in it. Yeah, I think this has come up several times in the context of the bug.

DLM: The bugs that showed up a second time were quite difficult to trace back to being caused by this rename. So I think – I mean, obviously I am not going to say no, never again. But I think a compelling argument, a more compelling argument than we don’t think it’s going to cause problems.

DE: I think we were saying the same thing. Yeah, I think it would be kind of unreasonable to claim this is very obscure but group is not found in any of the five old libraries that keep causing problems for us or however many there are. So yeah. I think – I think there is a difference between these, but also, I would be okay with the conclusion that we just never add any methods. We should probably make a decision one way or the other on this.

DLM: I mean, I guess, just to add one more point. We are developing from the developers point of view and not choosing names that are possibly not very guessable or hard to remember. I don’t know. It’s just – a slight argument. But I think without, you know, saying never, I think we definitely SpiderMonkey team has a strong preference for seeing and a static method as opposed to new array methods in the future.

CDA: Okay. Justin is up next.

JRL: To clear up the confusion about this, the last time I presented this, in November of 2022. We had a slight preference for a static method, Object.groupBy, a static method on the Object constructor, and Map.groupBy, a static on the Map constructor. We did not get consensus to change to a static method. What was proposed is that I write the spec text and bring it back in the next meeting and we decide whether we like the direction. The spec is written, a PR open for it, but I did not bring it back to get consensus to change the direction. If we can’t get consensus on static methods, then we go back to defining new names. I just don’t have the time to do that and I don’t have access to that anymore to do the scans to figure out what names are available.

DE: That’s great. I am glad to hear about this progress. Justin would be open to additional code Champion for this proposal?

JRL Yeah. That would be great.

DE: Okay. If a situation like this recurs, can we plan to ask the committee for pro promisize, proactively, like make a promise of coming back next meeting, we are not able to do the work, we can all ask for help? Would that be doable? Is there anybody who wants to coChampion, this now it’s explained the spec work is done and presenting the results to the committee

JHD: It’s related to my next queue item. I would be happy to.

JHD: My queue item was basically, can we establish consensus to do the static methods, keep at Stage 3, (even though arguably, it should have been reduced to stage 2 in the past) and move forward with that? And if we want a separate metadiscussion about this, a longer metadiscussion than this timebox, about how whether array prototype methods are on the table in the future or not, then that seems like worthy of a separate agenda item. Is there any – I mean, any issue with that? Those things weren’t on the agenda ten days in advance, but like the semantics seem like a pretty obvious delta on what we got consensus on. Array.groupBy . . .

DE: So I am happy with that personally if we have a champion who is available to present this. Could we review this new PR in an overflow topic?

JHD: That seems fine. Yeah. Either way, I am willing to join as a co-champion.

EAO: I think switching to static methods has not been reviewed as a thing by everyone on this call previously. And it’s big enough change that we have to consider this to currently be at Stage 2 and possibly open for consideration for Stage 3 at the very next call. Because I mean if we are close to fulfilling the requirements, that ought to be achievable. So I would much rather bump down to Stage 2, to represent really – to match the very representation of what we claim it is and what we want it to do and what it’s going to be.

JHD: Yeah. I am fine with that as well. It’s just I will bring it back with, you know, JRL as well as if it’s variable in the next plenary meeting with the changes in Stage 3. Again, either way.

EAO: Okay. Just to be clear, I would be happy with this.

DE: Maybe we can do both. We can have an overflow topic of looking into this, on Thursday afternoon, and then talk about it more next meeting if we have more to discuss.

JHD: Would that mean that the conclusion for this item is I will join as a co-champion, discuss as overflow item later this week and unless we get consensus as keeping in Stage 3 in the overflow item, we move to Stage 2 and in the event it stays at – in the event that we don’t get consensus to keep it at Stage 3, then in the next meeting we come back and try to re-achieve Stage 3. But in the absence of consensus to keep it at Stage 3 we have consensus to move to Stage 2. Does that seem like a good conclusion?

DE: So all of these moves, adopting the static methods or demoting, they’re all kind of a big deal and require consensus. Why don’t we make sure to schedule the overflow item if we have to all think about it and then try to come to a conclusion on demoting and/or switching to static methods on Thursday.

JHD: Okay.

MF: I feel like I am getting mixed feedback from Mozilla on their position. It sounded like DLM said earlier that Mozilla is not willing to entertain an alternative name for `Array.prototype.group` and if that is the case, I don’t see why any other proposal for a new method for Arrays would be acceptable for experimentation on Array.prototype unless it naturally has a very obscure name. I would like clarification on whether there are future implications from this statement from Mozilla

DLM: Thank you. I think you summarized our position quite nicely. So yes. We wouldn’t want to see this particular one, another rename attempt for it. It’s already not worked twice. And in general, we are opposed to further prototype methods on Array, except in the case you mentioned, where there’s a naturally obscure name. I guess I would hesitate a little bit. I don’t really want to say, never again in the absence of YSV since she has much more experience on the committee than myself. So I would say the context of our internal discussion is yes, we are very reluctant to consider something like this again. But I wouldn’t say never. At least not until I have had a chance to get YSV's opinion on that.

MF: Okay. That satisfies me.

DE: Okay. I want to make a further suggestion: maybe since there aren’t that many Stage 3 proposals, maybe we can do a quick like 15-minute or 20-minute sweep, just check on what is going on with the Stage 3 proposals that are not on the agenda. Ask people how they are doing. So we can be in sync. Does that make sense? We could try this at the next meeting. We don’t have to come to a conclusion now. Anyway, thanks, everyone.

EAO: Yeah. Just wanted to make it clear because I think we glossed over it. Are we now assigning for allowing or some term, I don’t know what is even valid here, JHD to be a Champion of this proposal? As an action taken by this committee without, if I understand right, the Champion off the proposal itself being proposed

JRL: I am the champion of this proposal. I am happy for JHD to be a co-champion and present at the next meeting or whenever.

DE: In general, if the champion were completely absent, we have already indicated in various documents that someone else can step up to be the champion of the proposal. Thanks, everyone.

### Speaker's Summary of Key Points

- Mozilla indicated strong skepticism to new Array.prototype methods including future renames of this proposal.
- Committee members were generally on board with static methods for grouping.

### Conclusion

- JHD will be a co-champion of this proposal and present it towards the end of this meeting or next meeting for investigating static methods.
- And no change to the stage right now, but we anticipate that if there’s a big delay, that it would be proposed for downgrading Stage 2.

## Float16Array for stage 3

Presenter: Kevin Gibbons (KG)

- [proposal](http://tc39.es/proposal-float16array/)
- [slides](https://docs.google.com/presentation/d/1gBVaE4KV9JhRxG_V4_xjLW7P18lnKCDJEIktpi6eIxs/edit)

KG: Okay. Hello, everyone. This will hopefully be a short item. I put this on for 45 minutes and I don’t know why I did that. Possibly just because we ran out of time last time but I don’t anticipate that taking that long. Of course, if you want to argue about it at length, we should absolutely do so. So here is a link to the repository.

KG: The proposal is to add a new kind of TypedArray: Float16Array. These are analogous to 754 binary-32 floats, which is what Float32Array is, and 754 binary-64 floats, which are what Float64Array is and JavaScript number type is. The semantics are not included in this proposal, since they're in IEEE, although we can talk about it if you want. In addition, there would be 2 methods on DataView.prototype.{getFloat16,setFloat16}. Nothing special there. And added since last time, or during last time, a new static method on Math, Math.f16Round which gives you the nearest number precisely representable as a float16 value to its argument. So round to the nearest Float16 basically.

KG: And so why? This has been talked about for years it turns out. The primary reason and the reason it’s more relevant now than previously is for web platform integration. So there are a couple of web platform features already which make use of Float16 values, WebGL and WebGPU, because graphic cards make use of float16 values and I will talk about that more in detail later. WebGL has been around for a long time and has a terrible hack for Float16 values which I will get to later. WebGPU is shipping in Chrome and I understand implementations are underway everywhere else. People are excited by it. And also, there are new features in the pipeline, and I don’t want to make promises about the features ever actually maturing and shipping, but there are things that are actively worked on, in particular float-backed canvases which higher than 8-bit colour depth and WebNN, which is a proposal for neural networks in the web platform directly. There are other use cases that exist as well but the primary concern here is web platform integration. You can’t do platform integration in user land. Like if you have a WebGP takes buffers and in some cases vends buffers, the thing that it takes can’t be a userland Float16Array because it won’t have any idea what to do with that. That looks like a user class. It has to be built into the platform to have platform integration.

KG: So I am going to talk in not too much detail about the various existing features and support it with miscellaneous screenshots. This is a screenshot from the WebGPU specification. Float16 is in fact an extension to WebGPU. It’s optional. But it is the first extension because everyone knows we are going to need this. And I have a screenshot from the WebGPU repo issue tracker where I said, hey, would this be useful for webGPU. And several people said yes. This person in particular said he expects many users of WebGPU are going to want Float16Array when they start to write shaders which use this.

KG: Then WebGL is already shipping. This is the horrible hack that I mentioned previously. The texToImage API takes a buffer or array containing values to specify the texture, and do you see that these are all pretty reasonable. If you are – if the buffer is backed by bytes, you pass an int 8 array or uint8array. Float, a Float32Array. But if you want to pass it a half float, that is to say a binary 16 or float 16 buffer, the only way you can do that is by passing a UInt16Array, where it’s in fact a UInt16 interpretation of the binary for float 16 values. Not actually UInt16s. This is horrible. We are just – we have to live this because there’s no other way to have a TypedArray containing 16 bit values at all. Uint16Array or nothing. Fortunately, because this is a place that is accepting values rather than producing values, this can be changed to also accept Float16Array without breaking anything.

KG: And then a float backed canvas, as I mentioned previously, is in progress. This is a screenshot from the readme there. The original plan had been to vend Float32Array because at the time they wrte this, there wasn’t a Float16Array around, even they are actually only going to be 10 or 16 bit colour depth. There’s been discussion about whether to block canvas on having float 16 arrays in the language. People reasonably believe that our process is slow. And they don’t want to block things on it. There’s also debate about what the default should be independent of that. It’s not relevant here. But the thing I wanted to point out here is that people are in fact seriously considering having this API vend a Uint16 array which contains the binary for float16 values values. And this is not something that we can fix if it happens. Unlike with web GL, where it’s accepting this array, here, it would be vending one. Once it starts vending, we are stuck with it. If float 16 is not going to happen, that’s what we will live with.

KG: Similarly, web NN, ML models very often use 16-bit values, especially as we get modern open source models, like stable diffusion is large, and it turns out to sacrifice very little effectiveness to use float16 instead of float32. Here is a screenshot of the Web NN proposal. And in fact they have said the working group as a whole is supportive of this proposal and there’s commentary why it’s important.

KG: Also, userland wants it. This is from three.js, it links a couple issues. There's been commentary about this for a while. This is webonnx, a user land machine learning library I am sure some of you have run into. And they can’t take float 16 as an input type because there is no float16array in the language. And it’s not just like the people using web GL and web GPU and so on. It’s also useful to use it even if you’re doing stuff on the CPU, because you can have lower memory usage and sometimes that’s the right tradeoff, although that one can in theory be done in userland at some cost.

KG: There’s a polyfill, which is correct to the extent it’s possible to be correct, but it can’t integrate with the web platform. It’s not a substitute for being the language.

KG: I want to briefly run through some other considerations. I am not going to talk about all of this in detail, but happy to come back if you want. There are other 16-bit float types. BFloat16 is gaining some traction, but it's still pretty obscure right now, and the others are more obscure. I reached out to the web assembly working group and they were of the opinion that adding the TypedArray to JavaScript would not affect web assembly. It might be something they would want to integrate at some point in the future. But it doesn’t support float 16 at all. Also there is unfortunately one place in the language where we do math on the values in typedarrays which is sorting. Otherwise, there’s no requirement that implementations support math on float 16. But this does exist for some reason. And this might give difficulty to an engine that doesn’t support actually performing math on 16-bit values. But you can promote to float 32. That is sufficiently performant for the approximately 0 people who will ever use this.

KG: As to whether it’s practical to implement, there is a universal support in compilers for storing 16 bit floats and that’s sufficient except for sorting. There's also standards-track extensions in C and C++ for proper types. Not super relevant since there is no need to do arithmetic. And then there is some support in hardware, which is also not very relevant, but the fact that casting operations exist in hardware is nice. It’s trivial to do in software of course.

KG: So finally here is the spec text. [shows text] I don't want to suggest that implementation will be trivial. But that’s all there is. Yeah. I would like to go to the queue and ask for Stage 3.

DLM: Thanks. Since the last time we had the chance to dig in from SpiderMonkey and we have no concerns for this. I think it’s fine for Stage 3.

SYG: We support Stage 3. We don’t have any real concerns. Sync’d with the V8 team as well and basically there’s no – yeah, there’s no issues that we can foresee. That’s all fine. I want to set some performance expectations because this is basically going to be for ferrying bites from GPUs more or less, do not expect float operations to be fast – do not expect code that is written, for example, in asm.js style, where you get stuff out of the a float16, do math by casting everyone operation with float16 around and storing it back to Float16Array, do not expect that to be optimized any time soon, if ever. Because of things you mentioned like limited CPU support on older CPUs and we don’t do the work for that. I think if everyone is clear on that, this is basically for interchange with GPUs, no concerns here.

KG: Yeah. Absolutely. This is not about the performance of arithmetic on float16.

DE: Looks good to me for Stage 3, having reviewed the spec text.

WH: I reviewed the spec and support this.

MS: [on queue] offering support. No need to speak.

### Speaker's Summary of Key Points

- engines consider this feasible to implement
- but, don't expect them to optimize arithmetic on float16 values

### Conclusion

- Consensus for stage 3
- KG to update proposal README to list implementation status

## Source maps: Should TC39 standardize and improve them?

Presenter: Daniel Ehrenberg (DE)

- [previous source maps specification](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit)
- [slides](https://docs.google.com/presentation/d/10nYC0dD-CWXnmPtqeuQMVM15b8kWMgrIS6j2G2wpoyw/edit)
- [ongoing development](https://github.com/source-map/source-map-rfc)

DE: Excited to be talking about this stuff. Source maps. I want to move towards an interoperable and reliable standard and some other people do as well. The question is, do we, as a committee, want to work on this?

DE: So source maps are a JSON mapping with this VLQ coding thing to associate the corresponds between original source code and compiled bundled transpiled, whatever source code. There’s a great [article](https://web.dev/source-maps/) about this.

DE: The source maps specification is in a Google doc. It’s gotten far this way. Everyone in the ecosystem supports source maps these days. Whether it’s browsers or transpilers or multiple kinds of debugging tools. But certain parts are implemented and interpreted differently by different implementations. Source maps are unreliable because certain names don’t have a way of being mapped. And there are different interpretations of different things. So the result is that advanced debugging programs end up having to reparse JavaScript and assign weights to multiple possible interpretations of the same thing (!), assigning of being accurate. This is entirely crazy.

DE: To look into this issue, in the TC39 tools outreach call, we have gotten together to start discussing this in an informal capacity, just an outreach call. We will be continuing to discuss this topic monthly. Among participants there were some shared goals. And we have some shared communication channels.

DE: Actually, the repository <https://github.com/source-map/source-map-rfc> was set up 7 or 8 years ago by people in Mozilla and Google. Purely an asynchronous mechanism to try to build agreement on improvements. I want to work on source map through TC39 as the next step.

DE: The goals that the participants are outlined were one is, any effort here would be based on incrementally modifying the current definition of V3 source maps. Ideas have been floated to move towards a DWARF-based format, or to have something more directly readable than VLQ, but we are not considering either of those two extremes. We want to just work on evolving slowly from the existing format.We do want to complete the current specification. This is sort of like a process that has happened with HTML, where with an ambiguous standard that people interpreted slightly different ways, certain supersets, you do archaeology to say, what is the web reality for the standard? And through that, complete and correct the specification. For names, there are a few concrete sources and places where we need improvements. One is that we don’t have any mappings for variables to names. One is we don’t have any mapping from object properties to original names. And function names, those exist, but they only show you where the function starts. They don’t show you the extent of the function. You can reconstruct it by reparsing, but we want that information to be present explicitly. And finally, improving the association of the original and the compiled files. There are a couple different ideas for this. Ultimately, sometimes, the association gets lost based on the ambiguities of path resolution. We could have certain debugging identifiers, that could associate these things better.

SYG: How did you select TC39 for this effort? Did you consider other standards venues?

DE: We have an issue in the source maps RFC repository where I presented two options. My preferred option. Another option is WICG. WICG doesn’t answer the question of, where the final standard would be, but it answers the question of what could we use temporarily to kind of – a way to safeguard IP while the proposal is under development. I would be okay with that. This is what I will encourage the group to do if TC39 is not interested in working in this area.

DE: Starting with WICG and then seeking another standards venue seems like more overhead, and it’s especially complicated if we ever want to make an actual standard and want to ensure the continued equality of position of different stakeholders. We can go into other alternatives, but the group of participants is aware that there are multiple options and has so far been fine to go along with my suggestion of going through TC39.

SYG: Okay. Thanks for the background. I will close with, if Ecma is chosen as the standards body for IPR stuff, I strongly urge that the source maps spec adopt the alternative copyright that we adopted for TC39, as opposed to the regular ECMA copyright. For W3C, I believe the copyright is relaxed in the way we want.

DE: Yeah, definitely. I would also want to adopt the RFTG policy, which is equally important.

SYG: Agreed.

MLS: I believe a TC requires 3 members of ECMA to want to create it and create the charter of what that TC is. And the new TC, it may be more difficult to get invited experts because they would have to be invited by who the members are, of that TC.

MLS: I don’t think a TG is too far out of what we’re talking about here. And Chris, I will roll into my next topic, which I think Dan pretty much answered. But that’s what other coordination with other standards bodies. Because it sounds like, certainly there’s obviously JavaScript tie-in, but there’s tie-in with other, you know, possibly Wasm, possibly the browser itself. And so on and so forth. So if this is done in Ecma, with most likely a new TG, how much of the work would require that coordination? Could it all be done under a new TG or a new TC?

DE: Well, it’s just like in TC39, how the work ends up spanning multiple standards bodies, we end up having to think about how JavaScript integrates with various embedders. I would expect source maps integration work to extend beyond Ecma. We already have an established pattern for doing that in TC39.

DE: As far as barriers that a separate TC would provide: I would also add internal company processes. In some companies, an employee may have permission based on legal approval, to participate in one particular TC or working group in other standards bodies, and having another separate TC might require going through such an approval process again.

SYG: Okay.

DRR: Consider that a working group is a good first step maybe as an incubation step to figure out what the heck this starts out as. What it grows into. But it doesn’t need to be a technical – I mean, I don’t know if it really fits into TC39 itself. I don’t have a strong opinion on that. That’s a point in on time. But keep that in mind.

DE: The participants in the source maps discussion are in agreement that source maps need to remain a multilanguage thing. What is the part it doesn’t match with TC39?

DRR: I don’t know if it doesn’t match. But it definitely feels like – well, I mean you could imagine that it’s independent of JS. Over time, different debuggers and tools, different formats something like that. I don’t necessarily know. Again, I don’t have a strong opinion against bringing this into TC39, but off the bat it doesn’t necessarily feel like it’s in the usual scope of what we do. But that doesn’t mean I wouldn’t change my view over time, couldn’t be convinced otherwise. But having a working group working on this doesn’t seem that far out.

DE: Okay. It’s definitely change in our scope. BTW our term for subcommittee is "task group". Working groups are for W3C or others.

CDA: I just popped in a reply to that comment and that’s just that the charter of TC39 does include libraries and complementary technologies that support the language. And you could certainly argue that the source maps would fit within that definition.

DRR: Yeah. I can kind of see that.

DE: I think there’s a change in scope is which is why I am bringing it to the committee, whether we are changed in that change in scope.

MLS: Do we need to formally call for consensus to form TG4?

DE: I don’t know if this is required for Ecma, but I would like to call for consensus for this committee. Like, are we in agreement that we want this scope change?

MLS: Yeah. I think TC39 needs to recommend this to GA.

DE: So let’s call for consensus.

IS: I think you are going too fast. Yes. So at the moment, what I feel is, is that, you know, these are the first ideas, and certainly I mean you have to digest and you have to discuss all these points what you have said. Does it now fit in the certainly scope in TC39? If it does, you have the possibility of creating a TG. The TG has advantage of course, that you are completely in the control of creating and running the TG. So you don’t have to go to the higher body, to the GA, to, et cetera, ; you just create it. But if you cannot agree, you know whether it fits into the current scope, et cetera, then unfortunately, you have to go up. And then you have to involve the GA and so on. And at the moment, you know, my feeling that this was now the first presentation. I think people have to have questions and people want to get familiar with it, what is this new – new topic, new animal. And then you can move forward. I mean, both ways are possible either to create a TG or not a create a TG, if it is fits fully into the scope of TC39 and the working of TC39, which – what I understood so far, that it is a little – it is different. So my feeling is, you know, that you should think a little bit about it and come back to the next meeting until you have a clear picture. So I mean, this is my first feeling via listening to this points. So thank you.

DE: To conclude, I am okay to continue informally without a TC for now. However, without IP protection, I worry this will have a detrimental effect on who can participate. Many companies have policies they can only participate if there is an IP policy put in place. So I don’t know.

IS: Yeah. Sorry about that. I do not understand that you go immediately, you know, into details. Yeah. So whether it is a royalty-free patent policy, whether we should have the alternative copyright policy, et cetera. So these are very, very important. I fully agree with that. But this is a second – the next level of question, you know? When you already know, you know, okay. This fits into TC39. And et cetera. Et cetera. You should go from the top to the bottom. So don’t bother at the moment about the IP policy.

DE: The question was asked and we can continue in an overflow topic on this.

CDA: We are a little over time. If I understand correctly, I think what I am hearing from that is a formation of the task group is separate from the standardization of a specification and the patent policy and IP agreements and things like that, which makes sense. You can’t feed all the birds with one scone.

CDA: We’re at time. Daniel, would you like to – shall we just add a continuation on Thursday?

DE: Yeah. I am not sure where to go. If we have 10 more minutes some other day that would be great.

### Speaker's Summary of Key Points

- Several participants in the TC39 tools outreach call have been discussing improving the source maps informal standard, with the goals of
  - Correcting and completing the existing specification
  - Improve mappings for names
  - Improve associations between files
- DE proposed to form TC39-TG4 to develop a source map standard
- Committee members discussed whether this was in scope and whether TC39 was a good venue.

### Conclusion

Continue discussion on Thursday
