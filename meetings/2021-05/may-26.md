# 26 May, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Mathias Bynens       | MB             | Google             |
| Jordan Harband       | JHD            | Coinbase           |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Waldemar Horwat      | WH             | Google             |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Michael Saboff       | MLS            | Apple              |
| Chris de Almeida     | CDA            | IBM                |
| Jack Works           | JWK            | Sujitech           |
| Josh Blaney          | JPB            | Apple              |
| Istvan SEbestyen     | IS             | Ecma International |
| Philip Chimento      | PFC            | Igalia             |
| Rob Palmer           | RPR            | Bloomberg          |

## Discussion of globals and guidance for future proposals

Presenter: Shu-yu Guo (SYG)

SYG: This is not a proposal. It is meant for discussion with the folks who are here. It was brought up in the context of the resizable buffers proposal at the last meeting specifically from Moddable (PHE) and JHD that it is undesirable to add new global constructors. Specifically, for Moddable, there is an implementation difficulty with adding new globals in that their engine being in the embedded space, would need to put globals into RAM instead of ROM, which is more expensive and comes dear for embedded devices, I suppose. So that restriction, if we follow it, significantly affects all future proposals as well. So I want to open the floor to discussion here. Should we limit global constructors in the future? What should we do? What are people's thoughts? I want to start with with asking the Moddable folks — did they have any cycles between last meeting and this one to see if they can overcome the technical difficulty first before we move on to the discussion.

PHE: I'll take a few minutes to answer the technical question first, and for comments more globally, I'll get to them later in the time. At the last meeting, just as a refresher, we had raised the issue of global pressure on our engine and SYG had asked for some time to investigate what we might be able to do to mitigate that. We talked about that. Patrick took some time to do some implementation work. That was largely successful. I want to walk you through a couple of details of that so you understand.

PHE: The implementation of XS has always kept the global object in RAM. That's sort of natural. It certainly early on wasn't a problem, because the number of globals was fairly small, but we do have mechanisms for keeping things in ROM exclusively and then aliasing them in to make them writable again, that's important. People do create new globals at runtime. People sometimes modify globals at runtime, so putting them in ROM in a way that's not writable is not a solution. We had to look at ways to basically have the core globals in ROM and then make them overwritable. The "core" is ill-defined. But strictly from an XS perspective, what we did is we looked at the globals that are defined at the time of what SES calls lockdown. That isn't necessarily just the built-in JavaScript language's globals, but it's any globals that have been defined by the host up until the point that lockdown occurs. What we did is we put those into ROM just like any other fully frozen, immutable object. Then at launch time on the device, we use that ROM object as the prototype of what becomes `globalThis`, which is imperfect but at least as a first step proof of concept was very effective. It's imperfect, because depending on how you check for a global, you may or may not find the global that you're looking for. For example, `hasOwnProperty('Promise')`, this is false on `globalThis` when it should be true, but `globalThis.Promise` works, because it's one step behind. So the only solution to that is to make the `globalThis` object an exotic object that masks that structure. And we could do that, but in the time we had, we didn't go that far.

PHE: The improvements are pretty interesting for us. Again, remember we are typically on devices that have as little as 32k of total memory, and as a benchmark target, about 40k (4k?) free at the time that we start running. And so, we run JavaScript in a 32k (?) partition on those 32 kilobytes. All these numbers, you have to kind of scale in your mind for that. But when we do that, before we made any changes, the hello world example that we use, which literally does nothing other than a Trace, all the globals required about 2200 bytes of RAM. When we apply this change, that total comes down to 848 which saves about 1400 bytes of space. That's for really just the JavaScript built-ins. If we look at a more typical example, for example, something includes a UI framework, so it adds a bunch of additional globals, the win on a virtual machine is over 2K. In fact, it was exactly 2088 bytes, which is substantial when your machine is running in 32k. It's not often that you get that many bytes back out of that space. So that was great, really encouraging.

PHE: We also looked at compartments which are part of SES and something that XS supports and we're now able to afford a typical compartment 2 or 3 K of RAM which wasn't bad but was still more than we liked. With the global changes, we can now allocate a new compartment with just 624 bytes. A secure execution context, or at least a secure sandbox, in 624 bytes is pretty awesome, actually. We're pretty happy with that.

PHE: Long story short, we've shown that with XS, we can resolve this, we deployed these changes there up on our repo as of a couple weeks ago and so we're running with them. And they work. The downside right now is that it is visible to scripts that globals are split between ROM and RAM. But that could be resolved with some more code. There's nothing in the way there, and that behavior of having globals in ROM is opt-in. So, for example, when we're running test262 we don't Implement that particular behavior. So it doesn't cause any problem to hosts using XS that don't need that capability. That's what I had to say on that subject. If I had had time I would have put some pictures together, it probably would have been more clear. SYG, does that address what we had discussed before?

SYG: Indeed. Thank you very much for taking the time to the prototype and to find a workaround. It seems like there is a solution going forward that also independently improves your memory use. That sounds pretty great to me. If I'm reading it correctly, I'll take your response as out of the implementers in the room today that there is no implementation reason to prohibit addition of globals anymore with that solution going forward, is that right? [silence] Okay, seems fine. With that, I think if there is no implementation difficulty for adding new globals, of course, there exist independent reasons to prefer globals or not globals. Since we already have the time block set aside, are other folks interested in discussing that to produce guidance for future proposals?

JHD: I think that we have to be able to create new globals or we've unnecessarily hamstrung ourselves for what we can add to the language. I'm very glad to hear that Moddable has found an approach that relieves that burden but still there's lots of reasons I think why we should still avoid new globals when it makes sense. The implementation concern may no longer be there, but then there's the SES-style concern of enumerating globals, there's usability and linting, concerns of configuring your project linting config so that it knows which things are global in your target environment and which things are not, that's some complexity that the user ecosystem has to bear. The guidance I would hope to see is that a new global is fine, but if there's a way to make something not be global and it doesn't violate other constraints that we have, then I think that should be preferred.

SYG: Thanks.

MM: I just wanted to enumerate the other ways of addressing the equivalent of global pressure. The other options, other than just adding a new global variable. I want to first of all recapitulate the history. We originally raised built-in modules explicitly. One of the major motivations for that was to avoid having every new proposal add to the global namespace. So when we took built-in modules off the table, when we rejected it as a thing that could withstand TC39, we explicitly rejected a solution that was motivated to solve this problem. The other thing is a namespace object, like `Math`, like `Reflect`, is often where multiple globals will go together to be part of a conceptual unit or have something else in common and introducing a namespace object to aggregate. Those introduce a global namespace for the namespace object and then it's basically your traditional hierarchical namespace. Same reason we have directories rather just flat files in the space. With regard to the implementation pressure, Peter already talked about the bookkeeping that you can do for relieving the implementation pressure. But the implementation pressure is not really the main concern here. The main concern here is the usability problem of polluting, the growth of the global namespace. And the fact that the global namespace is shared with hosts and is shared with applications. So, as we introduce new global names, there's always the hazard that we're either incompatible with some host that had expanded into that same name or incompatible with some global variable of some application that is just simply of that name. These are all issues.

SYG: Thanks, MM. I agree that namespace objects have precedent and seem like a good compromise going forward. If natural grouping is there I suppose you know context of namespace objects. We could as a committee discuss carving those out right now. They're mostly ad hoc. `Temporal` makes sense as a collection of objects. `Math` was there from the beginning. But notably, we didn't put `WeakMap` or `Set` into, say, a `Collections` namespace, given that we have a status quo of being ad hoc. From the web platform's point of view we want to keep using globals. Is the committee interested in carving out namespace objects in this fashion, or continue in an ad hoc fashion to add them as needed?

MM: I'm certainly interested in exploring that. I do not have a concrete proposal or principle to put on the table. other than keeping the namespace option in mind, and preferring it. When we find that, it's a reasonable organization.

SYG: That sounds reasonable to me. One thing that came up in the resizable buffers discussion about where to put the no longer existent `ResizableArrayBuffer`, in global `SharedArrayBuffer`, one of the options was to not nest them in a namespace object, but to nest them as separate constructors inside another constructor, for example, if `SharedArrayBuffer.Resizable` was a separate constructor. That is a precedent that I did not like setting. Not just aesthetically, I didn't really like that. I'm perfectly fine with namespace objects provided that the namespace objects are POJOs, that they themselves are not constructors. I think, nesting constructors in other constructors could be confusing. And since we're having this discussion about globals, I would like to get some other people's takes on it, because that's an explicit anti-guidance I suppose we could offer if there's consensus.

MM: I'm torn on that one.

YSV: I want to reflect a little bit of the stuff that I've been thinking about in this space. Specifically, I agree with SYG that we do probably want to keep doing things on the web as we have been. We won't be able to control how different APIs are added to JavaScript necessarily, and maybe that isn't such an issue especially if we are looking at the problem that Moddable raised, if something similar like that comes up. Again, one thing that I was thinking of is, MM mentioned that we rejected the built-in modules solution, I would actually say that what happened there was we, from the browser's perspective, Mozilla in particular, put forward that unless there was consensus to move in that direction, then we would continue to also have globals and prefer globals on the web. But we didn't necessarily say that the built-in modules proposal was a bad idea. In fact, I believe we encouraged the champions to pursue it, keeping in mind that the web platform would probably stay as is. I think it's unfortunate that that didn't end up happening. There were a couple of other reasons why that didn't end up happening as for objects. I think what SYG said makes a lot of sense, it was a little weird to access another constructor on a constructor in the case of `ArrayBuffer`s and `SharedArrayBuffer`s. But I don’t have strong opinions in that direction. I just wanted to raise that I don't think that built-in modules were rejected out of hand. I think that there were certain constraints that in the end made it impossible to happen. And also, I think that maybe we can think about this a little bit more diversely, like there might be touch points where the web overlaps with other environments but maybe those don't all have to be completely consistent with one another.

MM: I'm glad to hear that built-in modules are not necessarily dead. As in the compartment proposal, we're pursuing good APIs for manipulating the import namespace and doing APIs for module loading. At some point we do want to bring the built-in module issue back to the table, informed by all that. So that's certainly very good news from our perspective, that that's not considered off the table.

YSV: I would say one thing that's important in that part of the story, is that the mechanisms specified in the built-in modules proposal — they were solid, were very interesting and that in itself was not the problem. The problem was the requirement that the web adopted it as the primary way in which globals will be added going forward, that probably won't happen. But the mechanism, there's no issues there.

SYG: I agree with YSV there.

MM: Excellent.

SYG: I'm not sure I would interpret it so positively. I suppose the mechanism, I agree is fine. The sticking point hasn't changed. Namely that even if built-in modules were a thing and TC39 specified a thing that has used built in modules, that this agreement from the web platform was that we will continue to use globals and will not only expose this new thing via built-in modules, and that has not changed.

YSV: Exactly what SYG said. That is the status there. There is also one issue with built-in modules, I believe the layering with the HTML spec that would have allowed polyfilling them is no longer possible, but my memory is failing a little bit there.

MM: Okay, so I'm going to walk away from this taking all of this as a very positive indication compared to what I remember of previous discussion.

YSV: If the take away before was that it was rejected out of hand, then I wouldn't say that that was the case. It's a more positive perspective and I think that it's good for us to think about it that way.

JHD: It's clear there's not consensus or consistent enjoyment of the idea of nesting something under a constructor, but I would not also say that it's something that must be an anti-pattern. I think it's something we should discuss if it comes up in the future. I think that it's clear that a namespace object is a clearer form of organization in the directory concept that MM mentioned, and that's definitely preferred. But I think that we should keep our options open and decide what makes sense case-by-case.

SYG: I think it's fine to have exceptions. Part of what I would want to get out of this discussion is that I would like delegates and proposal authors to spend less brainpower and time on the global organization part and, and come up with some good defaults and it sounds like so far, if there's a natural organization that's already available, then use a namespace object, use a global, and failing that let's do the ad hoc discussion.

JHD: I would extend that to say that if a proposal has future extensions that are somewhat obvious and likely, then consider how those could be organized under a namespace object. Even if a proposal will be just adding one thing it might also be reasonable, which may be case by case or not.

WH: I agree with JHD. That is, I wouldn't rule out nesting constructor objects. Just take them on a case-by-case basis and do what seems reasonable.

PHE: I agree with what JHD and WH are saying. I don't think there's a hard rule here. I think some of these things we're just going to have to evaluate on a case by case basis, which is what happened with the resizable global buffer stuff and a really happy outcome of that was in fact we didn't end up with any new globals or, you know in fact any new constructors at all which I think was a great consequence of wrestling with the problem even if a bit time consuming.

SYG: To agree, I'm not looking for a hard and fast rule but just guidance. So I think the action item here is that I will try to drop something in the how-we-work repo, rules of thumb for, other circumstances being equal, where you should put your new feature that you want to have a constructor, and I would invite JHD and other folks who have opinions here to collaborate on that document.

RGN: I have a comment on that point. Also tying it together with the discussion yesterday is that we should probably be thinking about guidance for proposals that explicitly includes an enumeration of primordials that they add or affect, and which ones of those are part of the global namespace.

JHD: That seems like a reasonable stage 3 requirement for certain, but I'm not sure how much we could do before stage 2. I'm okay with it. At whatever point it becomes reasonable, that's where it should be added. It seems reasonable to me to make a PR to the process document, adding to please explicitly call that out upon stage 3 advancement.

MM: I don't think I would be happy to see that as a stage 2 issue. It's okay, if it turns out be an inaccurate view, but impact on the primordials is definitely something we're going to argue about in stage 2 so it might as well be explicitly required in stage 2.

JHD: Seems like that's a worthy PR to the process document that we could then discuss after some async iteration on it.

DE: I want to suggest that these things be placed in how-we-work, which has a lot of guidance for proposal champions, rather than in the process document. Because people currently, just as we saw in this proposal, could already raise these things as concerns. In how-we-work, we can be a lot more descriptive about best practices that aren't that aren't quite binding. I think this would be a funny thing to make binding. There's really a lot of things about conventions for JavaScript, which extend a lot in quite a detailed way beyond whether something is a global or not, you know, just about how built-in objects are made that would be great to describe in how-we-work. So, I think this would be a good effort to follow up with offline.

AKI: This is actually a good point, of the distinction between our prescriptive document and our descriptive document. The process document we'll keep pared down because it's only the most explicit, and in how-we-work we can be a lot more descriptive and a lot more wordy, frankly, documenting things.

JHD: To clarify, what I was saying is SYG had already suggested adding to how-we-work. And I think the majority of all the guidance should go there for the reasons stated, but then someone suggested having an explicit requirement like enumerating expected impact on globals and that's the space. That one line is the part that I was thinking might be useful to put in the process document. The rest, I completely agree with you would go into how-we-work.

DE: I don't support that addition to the process document because I don't think we should privilege this one thing over all the other kinds of invariants that people are going for. this really sounds like one of those kinds of invariants. Documenting and agreeing on invariant efforts, I don't think we should rush to put it in the process document. This is the first invariant in the process, right?

JHD: So again to clarify, I'm not suggesting it be an invariant across the stack and I'm suggesting simply that they be explicitly mentioned, not that there be any constraint on what they are or how they're organized. That's how-we-work stuff. Just a suggestion.

DE: There's really a lot that goes into making a good explainer good, and I don't think we should be trying to encode all that in the process document. I don't think we'll do a good job that way.

MM: To clarify two things about my previous comments. Whether this conversation first, when I suggested stage 2 rather than stage 3, I was thinking about how-we-work rather than the process document. Second of all where is JHD said globals in his latest remark. I'm referring to all the primordials, whether they're on the directly on the global object or not. It's all the primordials that I would like to see much more explicit and earlier, but it doesn't have to be prescriptive.

YSV: I also support the suggestion of adding this to how-we-work. I can also imagine that this might resolve an issue that I opened recently about how to communicate the ideal process for interacting with host specification integration, which was a hot button issue from last week. I think that maybe that will be good resolution. To move it into how-we-work rather than the process document would be a good resolution if people are open to that. Additionally I think that when it comes to invariants we'll soon have a process for that, to make that clear. And that'll be a stronger guarantee later on.

SYG: For what it's worth, as for my original topic that I wanted to discuss, I'm satisfied with the discussion of the outcome here and the concrete action item of doing some work in the how-we-work repo. So there's nothing more from me.

### Conclusion/Resolution

New globals are ok.
Discussion of guidance to continue and hopefully be documented in how-we-work.

## Resizable Buffers (Continuation)

Presenter: Shu-yu Guo (SYG)

SYG: This is just a clarification from the discussion yesterday with Waldemar to disallow spurious failures in compare-and-swap when growing. It turns out I just don't understand the memory model even though I wrote it, and that the spec already prohibits spurious failures, so nothing needs to change. I misunderstood what I wrote myself and the desired behavior is already there. I just wanted to give an update to plenary,

WH: I'm glad to hear that.

YSV: I misunderstood what you wrote in the chat. I thought you said that the SharedArrayBuffer spec already had spurious failures, and it integrates (?)

SYG: No, spurious failures are already not allowed.

### Conclusion/Resolution

Proposal is unconditionally stage 3

## Housekeeping

AKI: A reminder that we have quite a bit of extra time. Next up is the security TG.

RPR: Unless there's someone that would like to present on this, I can just review where we are with the chartering of the security task group. [silence] We're in the process of chartering a new security-focused task group. As part of this, the charter and the ways of working are being discussed on a Reflector issue, and I’ll post that into the chat here. The chairs were asked to come up with an election process to elect the chair or chairs of this group, that was presented at the last meeting, I think in April. There has been one candidate mentioned on that issue: Granville Schmidt. The original recommendation of this election process is that ideally we would like to see a chair group rather than a single chair, so that at least more than one member is covered. So this is a brief call for candidates. If you're interested in being part of the management group for this security focused task group, please do reply to that issue. You can see there is an associated presentation of what the management tasks include. I'm going to paste the link in the chat here, which is on slide two there. It’s things like facilitating the meetings, managing agendas, ensuring note-taking and results are reported and coordinate and back with TC39. We definitely encourage people to apply for this to be a candidate. Also, I would say if you're nervous of elections, the way things have gone in the past, is that if there is consensus then we don't even go to a full-on named person election. If you are interested, I think we're planning to set a deadline of four weeks' time, so that either the results or the election can happen in the next meeting which is the July meeting. Any questions on this?

[Security Task Group Call for Chairs](https://github.com/tc39/Reflector/issues/313)

AKI: There's nothing on the queue.

RPR: So please consider yourselves encouraged.

## Admin: Realtime Chat Networks

AKI: Next up, our formally endorsed chat solution. I was planning on waiting until the end of day today because I wanted to give everyone a little bit more time to adjust and get used to new things. But since we have the time, now seems like a good time to talk about it. Freenode is, to quote SYG, up to some cartoon villainy. Some such ridiculous behavior that there's no real good reason to tacitly endorse their existence by having ourselves based there. And since all of the really great and thourough work that the inclusion group had already been up to, I would love if we could talk about using Matrix going forward. If I remember correctly, it was Shu who commented on a Reflector issue many months ago talking about, when it comes to inclusion, there are two different types of inclusion. We talked about ways that we can be inclusive to the community and we also talk about ways we can be inclusive to new delegates. I think this can cover both. We can have Matrix rooms that are accessible to the community that you don't have to have been using real-time chat for 25 years in order to understand (because for lots and lots of people IRC is just incomprehensible). Also for new delegates, it can be intimidating for a new delegate who, going through their onboarding email, see where our work is done: GitHub — great, I use GitHub; Discourse — click that, okay, I see what that is; IRC — oh, that's that thing that people who have been doing this for eternity use and they will make fun of me if I don't understand it. That's a pretty common response to seeing IRC these days. So I think it would be a great idea to formally endorse Matrix and move forward. What do y'all think?

JHD: A quick reply to that, I'm very surprised that people who aren't already familiar with IRC, see IRC and then have any expectations as to what it is. It would seem to me that anything that links to a good guide on how to do it is going to be approachable enough. But regardless, if Matrix seems to be going okay this week, if that's what decide to do, I would still prefer if we keep a community IRC channel on Libera, which already exists, I don't know if it's owned or not. So it's fine if If we want to move our community, our committee stuff somewhere, but I think it's important that we retain a community presence wherever members of the community are and IRC is one of those things.

AKI: I don't disagree. I actually have already sent an email to the Libera management. They're setting up our channels, ownership, and even potentially cloak (?). I don't think we should abandon IRC completely. I don't think we should say we're never going to use IRC again, but I just think that we're all our community conversations are, Matrix is a better choice. But I mean I'm with you I don't think we should abandon it entirely because then anyone can take that channel.

JHD: And the flip side. The other thing that I wanted to mention was at the moment, if we explicitly prevent people from speaking in the Freenode TC39 channels, then Freenode will come in and take over the channel and allow someone else to register it, which would be I think a worse outcome then just ignoring it.

AKI: Because cartoon villainy.

JHD: Correct, so I think that regardless of whether we decide to abandon IRC we should be very careful how we handle an exodus.

CDA: We'd still be able to have the IRC Bridge within Matrix right?

JHD: If that's something we wanted we certainly could, I'm sure.

AKI: Yes, right. I hear it's not quite as solid as we want to believe it is but but it is an option.

CDA: it's just nice to be able to deduplicate.

AKI: Sure.

MPC: The inclusion group piloted this and our basic stance is, it's not great. If you want to deal with it, go right ahead, it works, but we probably don't recommend it for most people.

AKI: All right, thank you for that.

KG: I wanted to say that I have been using IRC forever, and I will continue using IRC forever, but with that said, I don't hate Matrix, especially with the tweak to the UI to make it not just white space. So given that others' experience seems to be that Matrix is much more friendly to them, and that I am not in a position to judge because I have been using IRC for most of my life, I am in favor of officially deciding that Matrix is our new home.

WH: So one thing, as I mentioned yesterday, the one thing that's still missing from Matrix — or maybe is there but I haven't figured out how to do it — is downloading logs. I'd like us to figure that out before we officially endorse Matrix.

AKI: Sure, I don't disagree especially given the history we've had with US trade law and whatnot. It's pretty vital. I know there are ways to access logs. There's probably a script we could write to grab the logs that are—and look, Tierney's on it (TCN pasted https://github.com/rubo77/matrix-dl into the call’s chat). But additionally, WH, I do believe we are looking into if there is a better way for us to be logging.

WH: Yes I understand. And I would like us to figure that out before we officially endorse Matrix.

KG: WH, are you okay with just saying we are confident that we will have a solution within the next few weeks?

WH: I'm okay with that, but I want us to actually come up with a solution.

KG: Sure, I can commit to having a tool by the next meeting.

WH: That would work.

TCN: To JHD's point about carefully handling the exodus I would definitely say we probably just leave the channel and not say anything and to remove references. But never say we've left. Again, cartoon villainy. It's real bad, real bad, and I would prefer that we retain that control. And I'm happy, I'm going to be sitting on Freenode for a while for similar reasons, regardless.

JHD: I'm happy to be a signpost there to quietly nudge people in the right direction for as long as necessary.

PFC: I definitely support not having official things on IRC that the delegates should be recommended to keep up with if they want to participate. Because another problem I've had with IRC is the spam floods. I don't know if they occur in the TC39 channels but especially with the recent controversy around Freenode, I've seen a large uptick of spam floods with offensive and racist language. I don't think that's something that delegates should be subjected to if they want to participate in TC39. So I'd rather move sooner rather than later.

TCN: To expand on that, they [Freenode, not Libera] explicitly removed their prohibition on that kind of language. I would agree.

MLS: There's a little bit of inertia to make it happen and so that's slightly an accessibility issue.

AKI: I don't disagree, I think for people coming to the committee now people who are newer and people who like I mentioned earlier haven't been using IRC for years. It's one of the other for those people, you know IRC is not super common anymore. There is a web client if people do not wish to install another native chat client.

MLS: Yeah, I'm not denying that. I may be an anachronism, it's just some there may be some inertia.

MPC: A quick reply to be careful about the term accessibility and explicitly say accessible for whom. For example, are you talking about accessibility for users who haven't haven't used a certain platform before? That's what the inclusion group has been thinking about, mostly when we've like piloting Matrix and thinking about chat platforms, you know, is it common in the web space? Accessibility for users with a visual impairment or a hearing impairment or something like that, or is it accessibility in terms of like convenience to oneself, which is a perfectly valid thing. But I think it's very worth specifying that explicitly for the sake of clarity.

MLS: My kind of who is related to what (?) was that to begin this conversation as far as accessibility, you have to get everybody that you expect and want to be part of it to be switched over to using tools, new server the methods and all that other stuff.

MPC: I think RPR's reply can speak to the efficacy of that we've observed with Matrix.

JRL: To MLS's point here, this is the only group that I'm in that used IRC as a requirement in order to participate. So I'm essentially going to be trading my IRC client, for which I have to pay a yearly subscription to have a decent service, over to Element app for Matrix. So, trading one app for another. And now with this new app, I no longer have a paid subscription, which is a nice plus. In general, I'm trading one app for another, so it's neutral. I'm not adding another app to my setup.

SFC: +1 to what JRL said, this is the only thing I use IRC for, and also the only thing I will use Matrix for, so it's equivalent for me, and probably for at least some of the other Googlers as well.

RPR: In terms of achieving critical mass and achieving adoption. I feel like it's quite impressive already and because we've been using IRC for many years, it has been widely advertised at the start of every meeting and when the chairs onboard delegates. We tell people to join. It's part of the checklist. We even chase people if they don't register. And right now, the TC39 delegates channel is up to 34 delegates, whereas Matrix, you know, this project only started less than a year ago. It hasn't really been widely advertised. We only put it on the entry to this meeting and yet it already has more users. It has 40 or so delegates, and the Freenode channel has 34. I feel like that's giving us a strong indicator that it's a very easy to enter environment.

WH: How are you counting the users? What is the definition of a delegate?

RPR: People who are in these rooms and are voiced.

WH: People in the room on Freenode and total entries in the TC39 delegates room at this instant?

RPR: Yes, that's right. It also includes some people who are not active.

WH: OK. The one thing that wasn't clear to me on Matrix was how to get write permission to post. It was never explained in the onboarding. I somehow magically got it after a day.

AKI: We didn't exactly expect to make this transition as suddenly as we found ourselves. I don’t think it’s too much of a burden—as it stands now, every single new delegate onboarded by the chairs is manually added to all our comms tools. Admittedly, we weren’t prepared to do 50 at once, but once we’re over this hump it should return to normal.

SYG: I also don't hate Matrix, so fine with me. I was interested in asking the room about JHD's point, that if we keep a community channel where the community is, including IRC, who would actually stay in that channel? As the temperature check I seem to be getting from the room, is everyone so eager to uninstall their IRC client?

AKI: I will have. I'll have IRC Cloud running for eternity, because when will I ever not be on IRC? I don't know. And I think JHD said as well.

JHD: I have one to two dozen channels I’m in daily, and that's now doubled because they're on both networks. So I'll never be uninstalling my IRC client, so it's no burden for me to continue to be a presence there.

SYG: I would prefer there to be fewer official venues to engage the community, quote unquote. But I guess provided we already have a bunch, like we have the discourse, we have the current IRC, we will have Matrix. We will have another IRC then?

AKI: A lot of the Freenode and Libera interactions will likely be gently leading people toward Matrix. If they’re particularly disinterested in that move, we can entertain a brief conversation. Ideally our more involved conversations wind up on Discourse, a less ethereal forum. I'm not super concerned about staffing, but I get your point—having more and more “official” venues is not great. I'm not super concerned because I think we can gently guide people toward Matrix most of the time. And when we can't, then we can have an individual conversation.

JHD: And we can have all of our of IRC documentation pointing to our preferred official venues and not even necessarily mentioning the others. People that are still in Freenode will be gently nudged, we hope, over time, in a different direction. And then the people, if there are people, who happen to be on Libera, who want to be on IRC and who are thus there on Libera, we can freely make them aware of the other venues if they still prefer IRC. That's fine. That's on them. But you know, I expect that the majority of people will discover whatever our documentation points to that's on the website and how-we-work.

SYG: Yeah, that sounds reasonable to me. So I wanted to make sure that there was more than a single volunteer for these other venues to staff them. It sounds like we do have that, so it's fine.

SFC: I had a response to what SYG was saying about multiple channels communication. At least personally, I find real time chat to be a bit overwhelming, especially when it's not during a meeting. I like Discourse for most conversations the community wants to have with us. I think Matrix and IRC, which are both real-time clients, are something that I mainly see as useful for when we're in a TC39 meeting. I think that they're useful, but I don't want to have the expectation for me as a delegate to keep up with all of the chats that are going in real time when it's not during a meeting because that can be quite overwhelming.

YSV: I think this experiment has gone really well. It seems like we had a pretty seamless transition.

SFC: My next comment was just a PSA about SSO. I like to use SSO (single sign on) as much as possible for all these accounts because it's less passwords to remember and it's more secure. The mozilla.org server for Matrix has SSO and it has both Google and GitHub SSO and that's a great option for you to use. That's how I have my Matrix set up now, via the Mozilla server as opposed to the Element server, but since it's federated, I can still join all the same channels. But if you make your home account on the Mozilla server, then you can use SSO, which is kind of convenient. Which is another perk that is in Matrix that's not in IRC.

AKI: Good call.

JHD: It works on the Matrix homeserver, I signed in with my GitHub account so I don't think you need Mozilla for that.

(?) neat. Yeah I think so. Some homes are was why I don't think he even knew me B. Matrix has Google. I didn't I didn't think major excited Google as a so Rec button.

RBU: I just want mention that as we this transition good. (?) It makes sense to pare down the number of channels, we have an IRC and we talked about keeping people in one, but there's no reason to ask the resident TC39 delegates to the you to existing kirino, (?) The thing I would mention I was, I was probably wait on that because they might consider that. If we send a request for that, now, they might get spooked and nuke all the channels. We probably. (?)

JHD: That's something I think we can safely do. We can put like if we word(?) all the channels to the main TC39 one and allow people to chat.

RBU: Oh, that's also good. Okay, we should just do it.

USA: I was just going to say that we could make it opt-in for delegates to make sure that doesn't pose a problem.

AKI: All right. So I think this sounds like consensus, it sounds like we have this. There's going to be some growing pains, some adjustments and change is hard, but it sounds like this is going to be a good direction forward for us, which I'm really pleased about. I agree with YSV that the transition has gone pretty smoothly. Thank you, everyone for being willing to give it a try.

### Conclusion/Resolution

- We have moved from Freenode to Matrix
- Docs to be updated.
- Be careful with announcements on Freenode to prevent losing control of the channel.

## Admin: Meeting frequency

YSV: I'll just bring up my concern about the meeting frequency. I've been having a hard time keeping up with all the meetings in the last three months. I think we've had a meeting pretty much on a monthly basis. And for me what looks like is I prepare the week before and then I've got either half a week or a full week in in the calls. It's been a little bit hard to keep up and recently the meetings have been a little emptier than usual which I think is good. I think that means that we're reaching a point where we're covering all the topics that people want to bring up, but I'm wondering if we should actually in light of that reduce our meetings a little bit. What do people think about that?

AKI: I certainly agree that we have not had entirely full agendas which is pretty cool.

WH: I agree that the meetings have become too frequent — it's becoming difficult to schedule things like vacations around them.

SYG: I also feel the pain of the frequency more than I expected, as one of the proponents of higher cadence meetings originally. I guess that has somewhat achieved the goal of lessening the pressure of missing a single meeting if you want your proposal to advance. The main advantage of a higher cadence to me, is less pressure about like, oh, I have to get all my ducks in a row or I'll be delayed another three months. I think higher cadence does help that. YSV is absolutely right in that for a bunch of delegates, not all, but a bunch of delegates have fixed work for each meeting, regardless of how often the meetings happen. Browser folks might do internal meetings and reviews of upcoming proposals and just general coordination work before the meeting and possibly after the meeting, and that is just fixed regardless of how many hours of meeting, long or short. For the editors, there's always a bunch of stuff to review before each meeting and the higher cadence seems to have worsened that somehow. I'm not really sure because that feels like it should be proportional to the amount of work we're actually doing in the plenary. My take away from this, the pain of higher cadence so far is that somehow the change in cadence highlighted just how many hours we have per year in fixed work. It seems like we have many hours dedicated to TC39 per year and can we cut some of that back if we start having higher cadence meetings. Because if I look at other standards bodies, namely CSS or WASM with this kind of tick-tock cadence where you have longer face to face meetings a few times a year, but most of your work happens with shorter online meetings and calls. The shorter online meetings are usually much shorter than two days, they're like one hour a week or something. Whereas even though we have these shorter meetings that's punctuated by longer meetings and shorter meetings are still pretty long so maybe that's part of the issue. But yes, in general I think like so far the changing cadence has been pretty painful.

MLS: I agree that the cadence is too frequent. I'm constantly having to check my schedule and when there's next meeting the songs(?) over and also as WH says, not necessarily travel but all the different activities going on.

DE: As one of the people who initially proposed the more frequent meetings, I have to say that my experiences have been pretty similar in terms of, you know, feeling more stressed, that they're more frequent. Even though I'm, you know, coordinating among fewer people than someone like SYG is, at some level. So, I also, you know, in a model like the WebAssembly CG where they have most of their work happening in these weekly meetings, that are bi-weekly meetings of one hour. I think that that works pretty well, but I imagine that it would be difficult for us to switch to that because we've been having these gaps on the agenda. I mean there's been pressure for a long time to have DC, the ground, plenary be fewer hours and I pushed back on that because we always go into overtime on the agendas. Since we do have gaps these days, I do like the idea of reducing the number of hours per year of meetings until we see that there's a need to go the other way. I think we're able to do this because we've established good practices like the incubator calls the campaign group meetings that that give us space to have good discussions, and coming to plenary with more polished proposals. I think that's why we're seeing the agenda is being being less packed with many items, keeping to quite short time boxes. So, it's a success from us. In the near term, maybe we should think about shaving days off of the meetings that we have coming up in the immediate future. It may be hard to shift around the schedule for the next meetings because people probably have things planned around them. But what if we try to make the longer meeting be three days or the shorter meeting be one day? Maybe not both. We might need to be a little bit dynamic about this depending on how many items come up. I think that that this is the thing that's more likely to be easy to implement in the near term. Or we could make the days shorter, we could say it's two days and it's just two hours each day. At the same time, this doesn't reduce the fixed amount of work that that you have in terms of before each meeting reviewing with other stakeholders. Like I'm reviewing with stakeholders in Igalia and within the tools call, with some companies that we work with, and yes, there is a fixed amount of work. So, I agree with others.

SFC: I just wanted to say that I've been actually quite happy with the increased meeting cadence because it has made my life quite a bit less stressful because no longer is there situation where I really want to get this proposal finished by this meeting and if it misses this meeting it's going to be delayed by multiple months. Now it's only delayed by six weeks. So I find that it actually serves a nicer cadence because I can bring the proposal to TC39 when it's ready, as opposed to really trying to press against these arbitrary deadlines or else delay the whole project by multiple months. And I know that this has happened, for example, with the Intl Enumeration API proposal that Frank was working on as well as Intl.DisplayNames where in the old model where the meetings are very infrequent, we may have pushed harder to be like, we should get this proposal adopted in this meeting because if you don't, we are going to just delay our work by a really long time. But instead with the more frequent meetings, it actually is quite nice because we can gather feedback from the committee, make the changes, and come back in only six weeks and advance. So I think, at least from my perspective, the increased frequency has been really really helpful to help with the rapid iteration of proposals. And I've been really happy with that from my perspective.

SFC: And I have another agenda item after this, I'll just take that one now. So we've had exactly two meetings in a row where we've been undersubscribed. We've had meetings in the past where we've been undersubscribed as well. I remember the last meeting we had at Apple was also undersubscribed. We had an extra few hours at the end for an unconference. That just happens sometimes. Just based on the pace of work, you know. It's also been only since last November that we had a meeting that was oversubscribed; if you remember, it hasn't been that long since we had one that was oversubscribed. So I think that we don't have enough data, we don't have a big enough sample right now to really say that, oh, we don't need this extra meeting time. I think it's really premature. As to say that this meeting could have been oversubscribed, except that because we have the more frequent meetings I decided to pull my proposal from this meeting and put it on the next one instead so that I could have it more polished to present. I definitely don't want to say that, oh, we don't need this meeting time, because we just don't have enough samples for that. Now, maybe at the end of the year after we've tried this current cadence for a whole year, maybe we could make that claim, but I think it's way too early to make that claim after just two samples. A sample size of two is too small.

AKI: Understandable. Everything's been weird for a year, also.

MM: I think that this idea that — speaking specifically about the plenaries — the idea that a higher cadence of plenaries reduces pressure because if you miss one, it doesn't delay advancement, gets things exactly backwards. The main job that we should all see ourselves as serving on this committee, the main job is not advancing things. It's blocking mistakes. And if we miss a meeting where a mistake advances too far, that's not a question of a few months' difference. That's a question of living with the mistake forever. Since 2007 I think I've only missed three meetings because of the pressure to ensure that mistakes don't advance. And despite that the overall attention required to the meetings, the places where I felt like I conserve my attention of not paying attention, for example, to the details of RegExp, mistakes that we have to live with forever like additional hidden primordials crept in. So the purpose of the plenary as opposed to other meetings, the reason why we have to bring things to plenary to order for them to advance is so that other people on the plenary can stop them. And the plenaries therefore have to be at a cadence where the crucial work of stopping things is not missed by the people who can stop them.

YSV: I'm going to speak a little to what MM just said, and a little to what SFC just said. And I hope that we can maybe find a middle ground. This idea may be controversial. The primary issue for me is I need to review every single proposal and find the stakeholders internally and speak with them, make sure that we're not missing anything that could potentially be problematic from an implementation perspective, that's the biggest bulk of time on my part. And that's why even if we have shorter meetings that are around a day or three hours, this won't actually alleviate that time pressure that I have to spend prior to each meeting. What I think might work, is if we instead switch to something like single proposal slots, that are an hour to two hours long, two hours at a maximum, taking into account that Temporal when it advanced to stage 3 required it. That's why I suggest that. But in general around one hour, those slots are at a predetermined cadence. Maybe we can figure out a number. I don't have a direct one in mind right now, but maybe it could be every two weeks, maybe it can be every month, it's only one hour. It's treated as plenary and it's for larger proposals. It's not for smaller proposals, so that we can really give strong attention to the more complex potentially problematic proposals as they advance and just focus on those. That will also allow people to still bring their proposals pretty frequently, and hopefully also reduce this time pressure for people who need to review all the proposals. I don't know what people think about that.

DE: I really like YSV's idea. If we want to do the same number of hours as we have right now, I guess it would be like our current four times a year meetings, plus weekly smaller meetings. But if we're okay with reducing the number of hours per year, it seems like we have latitude to do that. Every two weeks would probably work and I agree that this could be a really great way to bring more focus into the topics, because with a long meeting, it can be hard to retain focus. I do want to directly disagree with MM, that blocking is the most important thing. I honestly don't think that blocking is the most effective way to control for quality. In the time that I've been on committee, we made mistakes that I objected to at the time and then we refer to them later, like, with the RegExp.matchAll g semantics. We talk things through and we have different points of view and we make compromises and I just don't think the option of blocking on the table is this decisive thing that causes us to produce output that is of substantial better quality. I think the important thing is that we, you know, examine this space very well and listen to each other and sometimes we end up doing that better than others. anyway, I think if we had these more frequent meetings but we published the agenda well in advance, then we would have ample time to let people show up or object to the the timing if they have a conflict when the topics that they're interested in will be under discussion. We've been able to work around people's vacations in the past and move topics around to when they'll be available and I think we would be able to do that if we pre-plan agendas for more frequent shorter meetings.

WH: I'm strongly opposed to having bi-weekly meetings. This will just become a scheduling nightmare. When I schedule a trip someplace on vacation, I usually schedule it many months or a year in advance. I have no idea what will be discussed on that day. Other people will do likewise, so we'll just have a nightmare of constraints. I'm in the model where I want to attend all the meetings, and the more scattered they are, the worse it gets. So I want them to be combined into significant chunks of time on predictable days which I know a year in advance so I can schedule vacations and other events around them. Other people have echoed this desire for larger chunks because it takes a while to prepare for one of these things. I'm not going to repeat those points. Scheduling when you're going to be available for meetings is very important. And I want to have frequency be as low as we can get away with. Can we do that?

YSG: Vacation argument is very compelling for me. I totally agree. One question, I have for you WH is if we had chunks, where we had like bi-weekly meetings and then long periods without bi-weekly meetings, for example, have like one month where we have two meetings and then when the plenary is coming around, there's a two months on either side that are free, something like that. I don't know how the time we were to work out with something like, Be more preferable.

WH: We already have incubator meetings. Let's use those. For the plenary, last year they were every eight weeks and the big change for this year is that they're every six weeks. Every two weeks is far beyond what I would find acceptable.

YSV: Okay, and so the clumped structure wouldn't work either, okay?

WH: I want them all together.

PFC: I'd really like to push back on the idea of the main function of the plenary being to block mistakes. I think as a delegate in TC39, it's part of our job to prevent mistakes from happening, but we do that by keeping current on all the proposals that are in the air, and working with the authors of those proposals to resolve things that we think are mistakes. It shouldn't be the case that if you see a mistake in a proposal that you want to prevent, that we go to the plenary and then dramatically reveal that mistake and send the author back to the drawing board for for another two months. I really disagree with that model of collaboration. I don't think it's accurate to say that the main function of the plenary is to block. The main function of the plenary is to move things forward together.

RPR: Thank you. Before we move on to the next item we can go 20 minutes or perhaps go another 10 minutes before we need to move on to incubation chartering, and the queue is long. From experience, we found that we can just keep on going talking about this topic. It's the topic that doesn't stop giving. So we will call a stop to it in 10 minutes.

USA: I agreed with the point SFC was raising and wanted to say that it goes counter to the whole idea that we need to be super duper careful about all the proposals and long longer the cadence insurer(?) or maybe not introspect lets introspect(?), it lets people have sloppier design and proposals at times for for advancement and that can can even exaggerate the situation.

MLS: I think that we can get counterproductive here to any meetings and also discussion structure. I think it makes things kind of counterproductive as I and others sounds like prepare for meetings. We look what's on the agenda. We have the 10 day notice effectively gives us 10 days to look at the items presented and understand what stakeholders have inside. Organization think about those and prepare usually conversations offline beforehand and And then it show up a plenary meeting ready to discuss them. I think also the structure of the meeting itself, I do think it's a good thing that we time box, where the presenter needs to give an estimate of how long things thinks need to take to have our scheduling. but also the schedule of meetings themselves. Before covid, I was eager to find out in, say, September of a particular year, what the meeting schedule was for the following year, I, like others, would make personal scheduling decisions based on meetings, because I think it's important for me and others from my organization and every organization to participate. Now that we're going eight meetings a year, that actually reduces attendance in some cases and I don't think people are asking paired and from what I see in chat. I agree that after the meeting you are a little fried and you need some time to regroup. The last thing I'll add is that we all have other jobs besides attending these meetings and a certain point, it could be too frequent to just meet and not get treated with the things in our organization will feel that pain.

TCN: I'm not sure whether this is a reply or not to what was proposed earlier. But I've been doing open source community meetings for years, running them, restructuring them, doing that and also internal meetings at Microsoft and stuff. One of the patterns I've seen people try to take is non-required, more frequent meetings and very often that— an example is my organization's all hands at Microsoft went from once a month doing a big meeting, to every week. We do an all-hands where you can show up if you want, and that's happened in the other open source projects I participated in as well, and the same thing always happens, where if it's optional less and less people start showing up. In the case of TC39, if the goal there is working on proposals, you'll get less engagement on those proposals overall. It ends up leading to more challenges for those who are starting, or more challenges for those who are less familiar with the process, and don't have it baked into their brain already. That would be a concern I have, is less direct interaction on proposals if we do go down that path.

KG: I said this in the chat so I guess I will just summarize briefly. I disagree with MM that blocking is the most important thing. But I do think that being able to review every proposal before it can advance is very important to me and I think to a lot of people. That's not exactly for blocking. I do need to do a careful review of things so I can bring up my concerns and I don't have the bandwidth to be doing that literally all of the time. So the way that happens is that before meetings I look at what's the agenda and I review very carefully. I can do that at a frequency of once every couple of months, and I cannot do that at the frequency of every two weeks. Again, I'm not discussing blocking, just having the opportunity to review things carefully. I would like not to have to do that more frequently than at least every six weeks.

SYG: I have a question to that point. I thought the bi-weekly thing was together with the proposal that the bi-weekly meetings are single proposal slots, so there will be one thing to review at most. Does that change your opinion?

KG: That's still a lot. Having to look every week at something to review carefully, is just a lot to spread out with the rest of my work. I find it much easier to dedicate a larger chunk of time to TC39 periodically rather than trying to remember to do a small amount of work every single week.

SYG: Thanks for clarifying.

TAB: Michael and up reflecting some of my comments from chatting here. (?) My issue with the meetings this year has been that after a big several-day meeting like this, I want to not think about JavaScript for a week or so, and think about other things. And then I have to prepare for at least a week in advance to do anything because of the 10-day proposal deadline, which ends up being like a week and a half each side of the thing. And when you're on a five-week cadence that leaves you about four weeks in between, and with those time periods, eating from both sides, you have maybe a week or so in the middle when you suddenly realize, oh shit, I should do something for this next meeting. That feels incredibly rushed. I've really not appreciated the way that that's help here. It's always just felt like “oh shit, There's a big meeting about to happen.” I don't have time to prep for it and then because I don't have time to prep for and I And then the next meeting comes up and it's the same thing happening again, but that's just how my brain works there. It does not work great for me and I would much prefer going back to six or even less. Because I've always felt that for TC39, even six meetings a year was a little strange. Often people have been talking about the CSS working group's cadence. We do it with three, sometimes four, large meetings a year, and then a weekly one-hour meeting where we just have small topics to talk about. Attendance isn't mandatory, but there's a agenda posted ahead of time. So, you know, whether you want to or not, if you can't attend a certain meeting, it's fine. It just bumps your topics, just bump it to the next week and that works really well for us and it has for years. That doesn't necessarily mean it will translate over to a new group. But I’m just afraid of high-cadence, very short meetings. They feel different from high-cadence, long meetings. Even high-cadence single-day meetings are significantly different than high-cadence one-hour meetings, mentally, socially, every aspect of them. It's a different beast entirely. So go in with an open mind. If these meetings are too frequent, that doesn't necessarily mean we need all meetings to be less frequent. Different types of meetings. Different meetings can work well on a different cadence than what we're doing here.

SYG: I've heard some feedback from delegates that there's a desire that they be present at every single meeting. I don't see how that concern is addressable if we want to scale up. It doesn't seem that like, any particular delegate should feel the responsibility to put a check on every single thing that goes through committee. That just doesn't seem like it'll ever scale and I'm not sure how we can address that with cadence. What are you trying to scale? That's more participation, more proposals, get in to 4 under consideration into the committee. (?) I don't really see this increasing. I think that the rate at which proposals get in is if anything probably already at a higher rate and we should reduce it. Sorry, I didn't mean the rate of stage advancement into stage 4. I meant the rate at which new proposals are proposed for consideration.

WH: Data disagrees with you because we've had extra time lately. So the rate is decreasing if anything.

SYG: I also didn't specify the time frame. That is true, but the committee's growing from 20 or 30 people a few years back, to what it is today. But it is definitely true that in the past two meetings that we have had extra time.

R~R: We're going to need to draw it to a close there. Thank you for everyone who's contributed here. I know we've got four people on the queue we haven't got to. So I'll capture this and I know that there's discussion going on in the TC39 delegates channel. So please feel free to to continue it there. It's kind of an unstoppable topic.

### Conclusion/Resolution

- No conclusion
- further discussion to happen

## Incubator call chartering

Presenter: Shu-yu Guo (SYG)

- proposal
- slides

SYG: I'm proposing not adding anything new to the chartering. The current charter has four items, two of which we covered in calls between the previous meeting and this one. It seems like, with the current cadence, and since nobody's proposing a change at least for the next meeting to the cadence, that means we have about time for two. We have two left, so I would like to drain what's in the current charter before adding anything new. And as a refresher here, is the link to the current charter that I will paste in chat. The next two items for the incubator calls are pipeline and the array copy methods. If you are interested in either of those topics, please add your GitHub handle to that issue there. And that determines if you get pinged, when a new reflector issue is made to schedule the next incubator call.

DE: There were many non-delegates who expressed interest in the pipeline operator. Can we invite non-delegates to the incubator call or should it be restricted to delegates and invited experts?

SYG: So far one of the points of the incubator calls was that people who would be the room in the plenary would also be the ones in the incubator call such that there was time for them to surface any concerns to the champion group ahead of time to work through, subject to the same IP stuff as normal delegates and invited experts. if non-delegates and invited experts want to come participate, I would prioritize surfacing the concerns of delegates in the discussion. That's the thing we're trying to do, to streamline here. If there's time, I don't see any reason, outside of IP reasons that I don't quite grok that we would disallow non-delegates, and experts.

DE: I'm just thinking of a couple people who signed the IP agreements, but aren't invited experts, who've contributed a lot to pipeline in the past. I'd want to invite them. Sounds like that's okay.

SYG: Yes. I see MM asking and check and we have a meeting for Scheduling. (?) Definitely won't have time for it before the next meeting. So please bring it up again when we do the chartering for the next set of incubator calls at the next meeting. I don't want to just keep adding backlog that we never clear because of the timing.

RRD: I'm going to propose to remove array copying methods from the chartered proposals. The main reason is that the record and tuple folks already have a channel to discuss those things, which is the monthly record and tuple meeting for which we have a meeting next week. We invite everyone that wants to discuss the subjects there, but if the need for a specific meeting, just to talk about array copying methods is needed just let me know.

SYG: As long as the stakeholders listed here are aware that the discussion is actually happening in the records and tuples call, that's fine.

RRD: I think we didn't do that last time, but we intend to actually post an issue in the Reflector about this.

SYG: Okay, when you do please let me know and I can remove it from the call. So with that, we have an extra slot. But I wasn't planning on adding another one to the Charter this time, would anybody like to volunteer their proposal or any proposal they would like to discuss?

RPR: There is nothing on the queue at the moment.

SYG: Okay, that's fine. Always happy to just have one as well. So last call, we will just have a single call on the charter for next time, which is pipeline.

DE: Can I make a suggestion on behalf of MPC in the chat? He wanted to get pattern matching in.

SYG: Sure.

DE: And I want to suggest that we have a call to discuss the interaction between WebAssembly and JavaScript. Not a concrete TC39 proposal. But I think an important thing for TC39 delegates who are interested in it to be invited to the conversation about it. Maybe that would go after pattern matching, because pattern matching probably has more immediate things.

SYG: Pattern matching would dovetail nicely with pipeline so that sounds good to me. So the charter for before the next meeting is pipeline and then pattern matching. Since we didn't discuss pattern matching at this meeting, I don't really know who the stakeholders are. I will add the champion group that I find on the proposal, but please add yourself to the next charter when it goes up.

RPR: All right, thanks.

### Conclusion/Resolution

- Pipeline remains chartered
- Array copying methods to be discussed in the record and tuple monthly call
- Adding pattern matching to the charter for before the next meeting

## Realms

Presenter: Leo Balter (LEO)

- [proposal](https://github.com/tc39/proposal-realms)
- [slides](https://docs.google.com/presentation/d/1c-7nsjAUkdWYie5n1NlEr7_FxMXHyXjRFzsReLTm8S8/edit)

RPR: so let's begin with Realms callable boundary.

LEO: Alright, thank you. And Thanks everyone for Being here for this presentation. Yeah, here to talk again about Realms. Now the API callable boundary, okay? So the primary goals are still the same. We still want for the Realms, a new global object, we're going have a module graph, separation with the single, synchronous communication between both realms and the proper mechanism to control the execution of a program. the interface is the same from the last meeting. One of the interesting things about this callable boundary in Realms is that we can still transfer primitive values. They are not limited to Strings, numbers. This has been discussed here for the last meeting. It's a quick recap. But yeah, so we have we can transfer from the realm. We allow transferring primitive values, including symbols, not just strings but we cannot transfer objects from one realm to another. But we do have a wrapped function out of an object like a creation of wrapped function cross-realm. When we transfer callable values. As discussed in the last meeting, we are still subject to some CSP directives like unsafe-eval. importValue is also subject to other CSP directives as default-src.

WH: Can you define the CSP acronym?

LEO: Yes, yes, Content Security Policy. Thank you. Yeah. So the functions are never unwrapped, every function is instead a new wrapped function exotic. And they don't have a [[Construct]]. Internal, these are not Chained. they have an internal call that one course. At this argument to object, this is done in the regular Functions’ call, we have more details this, from the last meeting, but these argument is actually subject to get rough value too. The general resolutions of this current proposal is as this proposed. API does not provide any cross realm object exists, but it's enables a virtualization mechanism that we can see if we can work with this to address many of our use cases. The API provides enough tools to implement membranes on top. Like when we do membranes Frameworks that are used for virtualization, we have a wrapped exotic Functions enabling crossrealms callbacks in the other direction. This is actually important to create this communication channel,

LEO: since then, after the recap that we just had, we have some challenges that I want to be discussed today. I think those are challenges that are important to have addressed to move forward with this proposal. And here is a summary of them going to discuss each one of them. I ask you please wait until I finish the presentation. So we talk to a lot of all of them. Let's add things to the, the queue, the first topic will be the HTML integration issue on the module map or graph separation. And then, we're going to talk about the web globals that should be during the host or HTML integration. And then I'm going to report some of the question back requesting the previous realm API to be discussed. What we have in HTML integration today we have a concern that was raised by the Chrome team to asking us to not introduce a disjoint module map. as saying this is a copy and paste in Web’s disjoint implementations module maps are tired tied to window or worker Global scopes. and their associated memory cache. Has HTTP. Cache is ETC. This is a discussion that we've been having on GitHub.

[slide: Module Graph/Map Per-Realm Instantiation]

And for what we want today is basically software that works like in this way, in this example here I have same module being ported in both in like my incubator, realm and instantiated realm, using the same function, but they are still The modules are resolved for Each different realm of than userland. What I see here in this program is that like, I have a module resolution that they're not messing up with the other realm. So, when I call, if the same function, it's getting a value that is like from a different form for the resolution of that respective realm, this module is imported from

[slide: Proposal Status-quo]

The status quo of this proposal is just saying each realm has its own Global scope, which this has been a constant among Alternatives presented here, each module instances, close over a global scope and each room should have its own instance of each important module,

[slide: Proposed Module Graph/Map Separation]

With the proposed separation, if I'm trying to capture the highlights here. We this proposed separation from the Chrome team are saying that we should be using a single module map with networking. parse syntax cache only from the parent from the parents realm, the child realm read from this cache. We extend the module map to instantiate the module source for each respective realm, They're being loaded before and previous code example that I showed how would operate like the same, like in user land, would observe the same results of that code. But now the fetch Network in syntax are cached in the top parent realm.

[slide: New issue: Contradictory requirement]

This is all fine until we encountered another requirement that is contradictory. We have this raised concern in the same thread discussion saying that child ream should not be able to add entries to the parent realm module map. So this means trying to import a module in Child realm, should not mutate the parent Realm’s module Map. This requirement implies that the parent realm should import all modules ahead of time before the child realm of Imports them. This would have undesired side effects to us. We should not force the top parent realm to import every module, we want to use only in child realms.

[slide: Potential Positional Flakiness]

This creates some problems. One of them is unexpected results. So in the box above we have module being first in in my main realm and then the child realm, this would not be a problem, but in the box below I'm first importing that module from the child realm and this would be an error. This is undesirable from the champion group.

[slide: Champion Group Resolution: Do not adopt Domenic’s proposed restriction]

I discussed this at a SES meeting with a lot of people involved. It was agreed that we should not adopt this restriction. We don't want to adopt that. even like the way it is even if it creates something that is as being say, like changing the parents Realm, because if a child realm is tied to the to its parent page window with synchronous, communication and being in the same Heap, we should just permit, both the parent and child realms to import modules. If anyone is interested in more details, this highlight will have a link.

[slide: Possible option parameter to disable mutation]

There's a possible option, Realm constructor parameter to disable the mutation of parent module map. This is something that has been discussed because that the proposed alternative that we are saying that we cannot that we don't want, We had one of the options would be set into a load the mutation of the module map but we also discussed that at the SES meeting and we don't believe we actually want to opt in. For something that we believe that should be running by default but we also got a suggestion for actually having opt-in to disallow mutation of the parents realm. But we hope this could be just a follow-up proposal and we'll be happy to discuss if anyone is interested in proposing that specific option.

[slide: Web Goals]

LEO: okay, following up. We have the module breath. We have the web globals by the, for the Realms includes ecmascript intrinsic size and the instance instance socialization hook allows to the host to Add more properties to the global object. The current spec text is allowing the properties is actually restricting product properties to a configurable this of the global disk to be configurable and they must have the most not have authority. Meaning they cannot perform I/O or create side effects of mutations status for the parents realm. This is this has been one of the things that I actually like has some discussions.

MM: Not only the parent realm, we can't have hidden mutable state, even if it's isolated within the same Realm

LEO: Okay, thanks for the clarification. Yeah, and we have a pull request in which we addressed this. We avoid things such having global such as window.top or window.location, when we say, they must not be configurable but also having Side effects.

[slide: Pushback for the previous Realms API]

And the third part would be the pushback from the previous Realms API. We've got the w3c tag review which was very insightful. In the w3c tag review, my takeaway from that was that we still received pushback from this proposal like trying to return it to the previous format where we have access to objects, cross Realms as allowed, Because from what was reported that we have many use cases where people just use iframes today. And yes, it could definitely have the benefit of using realms for their use cases. But this calling boundary requires to have similar communication, requires someone to use, could go through a whole membrane framework to make a better connection of things that they want to actually transfer if they want to transfer anything that is an object, that is not a primitive value. And with that, the bar to getting using Realm Is high due to the adoption of a membrane stream work on top of using Realms as well. so, it's two possible but it's a very high bar to adopt for many people. It's not for us because we already use it like for people virtualization membranes is something that already exists. It's already a known frequent thing for virtualization work but not for all of the people including individual developers with smaller projects. We got some of the feedback as well from TC39 for many delegates. This is not exclusive to one group or individual and we are just acknowledging that this pushback has been reported by many sides. From everyone, but we understand the discount. The boundary is a hard requirement from implementers. Yes. So today we have the renderer spec. We have the explainer, we've got the SES feedback. I believe most of the people involved in the side group are on board with this current proposal as it is being presented.

[slide: Status]

Today we have a proof of concept membrane. We have a poly-fill in a membrane framework operating on top of it. We have this TAG review which I am not calling the tech review fully Complete because we also want the discussion to happen here at TC39 but I'm bringing this pushback, we have implementers feedback. We have some Refusal, and we strongly believe the concerns that we have here can be addressed at stage 2 or stage 3 Mostly for the things that we talk about the module map problems and web globals problems.

[slide: Stage 3?]

And for that, let's open for the discussions because we want to request advancement to stage three today.

CP: Just to clarify, the module map issue has no implications - we expect the HTML integration is not going to touch or modify this in any significant way or in any ways, probably. So that's why we believe this stage is the proper way or the proper stage where we can address that with the integration Work with HTML.

KG: While I understand the motivations for the callable boundary, and they make sense, I am a little bit concerned that the restriction means that options bag arguments don't work. For example, I can't just provide my new realm a fetch function and expect that new realm to be able to call fetch, because fetch takes an options bag, which means I have to manually wrap it very carefully and like you know, that's surmountable and given the trade-offs, perhaps the boundary is in the correct place but I wanted to raise this as an issue, especially if anyone else has any bright ideas for how to make that less painful.

CP: Yeah, I mean yes or this is with a current proposal. You have to implement your own protocols to communicate. You want to do a fetch across the realm, you will have to implement something that transfers those options into some form for the other realm, you're going to make the fetch out there. You have two options, you do it yourself manually, which is a little bit tricky. We are to create a function may be passing as arguments to that function, instead of options. And then you construct the options the other side or you use, as a LEO mentioned, a membrane that does that for you but it's a little bit bigger, you have bring a library and you have to do initialization. So we understand that this is the case like this, it is the cons of going with a callable boundary

SYG: so one of the, so when the bount our boundary idea was originally brought up so I really still like the colorful boundary as the boundary of think, I thought was very clever and solving your use case, but the original boundary idea was well, how far can we get with just structure cloning? And structured cloning works for options bags and I don't think functions work for structure cloning anyway. So you can still have this callable boundary. I'm wondering what your thoughts are on combining structured cloning and the callable boundary, I guess it can't can't be exactly that because you want primitives to pass through as is though, I guess you can't really observe if you know they're copied or not because they don't have identity.

CP: We were hoping that records and tuples will build part of that role because in that case you can create a record and just pass that That will pass just fine through the callable boundary. But Spectators are going to have some issues with that and it's obviously more complex. We don't have that. Come sit in the library, in the inspected, a just got to bring a lot more complexity into this back in order to have something like structured cloning. And I know that Mark has a lot more concerns about even looking into expect iconic.

DE: talking about options bags is a bit too narrow. So even if we have records and tuples, if you call fetch, it's going to return a promise of a response and that's an object. So it's immediately going to throw, and also can't be structured cloned. The things that make infinite realm are quite different from the things that make sense to structured clone two different agents. Even if we ignore the layering issues with structured clone itself, I think what we can do is we can start with an initial minimal realm callable boundary proposal, which is quite expressive. And later we can add features either by generalizing the cases that currently throw a type error to not throw type error, or by making it an opt-in mode, that’s part of an options bag that you pass to the Constructor. I think that in terms of starting with a minimal piece of functionality, that can later be extended, this API does provide this kind of core base that most other things can be implemented on top of. Maybe not, maybe not everything. But in terms of ergonomics you could achieve most of this ergonomics through a library. So I think this makes sense as a starting point. I think it's best to start with something simple, given that the space of copying things is quite large.

RW: in the spirit of what Dan just said. TC39 as a committee has in the past has made clear that - I don't want use the word primitive, but let's say fundamental building blocks are definitely our business. For example, atomics aren't really particularly useful with shared array buffers unless you put a bunch of Library code on Top of them. So in a similar vein, having a very minimal realm API, it's definitely within our wheelhouse and provides this realm API expressively I just wanted to say, like, maximally minimal, minmax, maxmin, something like that, that and comment.

JHD: Yeah, so I wanted to talk about which globals are available inside a realm, the argument that heard from I guess the Chrome team and from other web Folks as well, has been that most web developers don't think of JavaScript and HTML as separate things and most web developers don't distinguish where setTimeout is specified, for example, which I'm sure is both true and also backed by all sorts of surveys. To me, that is a very compelling argument for deciding what defaults should be available. But there is a growing group of folks that do server side JavaScript that try to run code in both browsers and on the server or that make packages that are intended to be useful in both environments. And so it is very important to be able to have that knowledge to know which things are in which environments and to also author your code with the expectation that you're only using an intersection of those environments and not a union of them or any one of them individually. So I think it's very important that there be a way that I can get a realm that isn't a web Realm when I'm not on the web. More specifically, I want to be able to create a realm that’s not specific or unique to the environment I'm currently running in but that is actually somewhat portable and 262 is usually the group for that. so I want to just get on record that I think that's a very important use case and I think it needs to be addressed somehow

SYG: I can respond to that before going to the main topic. it is the case that from the mdn surveys, I think that that what you said JHD yeah it is backed up by the surveys that what developer is certainly do not understand or want to understand, and we think it’s not desirable for them to have to understand, what groups standardized what APIs and where they come from. So to that end, I have the opposite position, which is that I think it'd be more harmful than not for us to specify something that is portable by virtue of TC39 having specified it. I don't think that is the right thing to do for Developers. I think, for this question of having an interoperable set of globals, I don't know what to say there. The environments are different and there, the individual hosts, they’ve taken note, especially to try to Get more web APIs where the users have been asking for them. So I have some optimism there, I guess.

JWK: this is an advanced API. So I guess it's okay to require developers using this API to know this difference. And this proposal currently is a min-max and need a membrane to make it easy to use. Those libraries can set-up those functions.

SYG: I did not understand that point, I'm sorry. you're saying that membranes will provide extra globals?

JWK: The membrane or some other library (that wraps the Realms API) can do that.

SYG: How?

CP: Right. Yes. So once you bring in a membrane Library, you can see in the examples and demos that that they will mention you execute some code inside a newly created realm, that it finds new globals that when you try to interact with those globals, it actually goes across the callable boundary and executes the operation on the other side. That's the kind of things you have to do, Like, if you don't have fetch inside the realm, you have to bring in membrane, put it on top of the realm and then you have whatever globals you want to expose inside around from the other realm, you'll be able to do so. But you have to bring the library. I think that's an okay solution for now as we progress on on these, and I think the process will be more organic as we specified in the spec today that we're not dictating work, just like it is for the web today and node and so on, we don't specify it all of them. We only tell what are the things that the language requires and that's it. So the holes move we'll be adding that we can engage with different groups and try to add things that are useful for the Realms in different environments and do it in an organic way? I get that quite fine, you always have the membrane solution, or virtualization solution that you can commit on top of this very minimal API.

SYG: It's fine with us, meaning Chrome web platform team, that, of course, 262 will say the minimal set of things that all Realms must support. We're not okay With the position that 262 would prohibit additional things to be added to the global. Such as the guidance, he provided around. No I/O and hidden mutable State.

CP: Yeah, I believe we can compromise on that and just keep it configurable because I think configurable is an important distinction because that means you could virtualize and remove everything. We have plenty of issues with unforgeables in the web. So I think if the other champions are okay, I'm fine. Very nice job with the SES team and see what we can be there. Yes, that's something that I was going to add our goal.

LEO: Here just like draw this line and I think I like drawing this line at like, avoiding no configurables still allow us to do a virtualization and we might be more work for user land but it's too like something we can work on top of.

CP: Yeah. And they're just to be clear. I'm not saying that we are okay with adding those. ABI than the. And I'm, personally, I'm not saying that I'm okay. Adding I/O or as you call it, APIs without Authority. I'm saying that we cool that piece that I'm okay with this dictating that 262, not dictating that. And then we can engage with the different groups later on. Evaluating what these groups can add to to the globals when creating your own.

SYG: I'm okay with the dictation that that the, that no Authority be conferred. I think the, the globals that the web, know, seems sensible to add, here is not stuff that, do I. Oh, right. It's like, Like blob, and like atob, stuff like that. Like stuff that happens to not be in 262, but not for any actual reason.

CP: Oh, so you don't have any objection with the core spec text that we have?

SYG: I think the guidance is fine. I mean it's kind of loose enough that that will need to really look deep into what confers Authority and whether it makes sense to add. but like the point of the hard boundary, what I needed to do that, right? like fetch wouldn't work anyway. It's how do you get the like I'm fine with the no I/O thing basically. I am not fine with a Prohibition that like the only things that can ever be in a user specific realm are the things 262 so I'm okay with it. it,

CP: The current spec does not prohibit adding new things, it's just saying that those things that are added by the host should be configurable and should not have have authority.

SYG: I'm expressing support for what is in the current specdrafttract. I am pushing back against, what I thought, JHD was saying, which was pleased, prohibit, the host from adding its own things.

JHD: Just to clarify Shu. I was saying that it's fine. If the host adds whatever it wants by default. I want a way to opt out of host-added things.

JWK: Yes, same with JHD.

SYG: I don't understand that. Like, why is that necessary? Because if interop is the concerned, you do have the core interop that the core set of things that will always be there, which are the things in 262. The through the presence of additional thing?

JHD: I don't want code that relies on those additional things to function properly. I want it to fail, to not be portable.

RW: Yeah, I think that the point thing is actually pretty valuable to be able to create a fresh untouched, you know, global object that is you know, the Ecma 262 will object with nothing on it. there is value in that.

SYG: Okay, question, I don't know what more to say other than I disagree with that intuition, supposed to mean.

RW: That's fine. You're welcome to disagree. Great. I'm just saying that I see what George's point is, and then I could see value in it.

MM: right now, Ecma 262 equally depends on Unicode, but it does it not by copying the Unicode spec into the standard or getting into a turf war with the Unicode committee. It does it by citing the unicode spec in similar manner, for the things that were all agreed are harmless that that are currently added by web, but could be added by ECMA262 without creating harm. like you the URL Constructor, like blob, like the text encoder, text decoder, those things are standardized web-side behavior, but it can still be Ecma262, that standardizes that those things exist and what their Global names are. And then something that says we're including the things that are the harmless globals standardized by TC39 would include them without getting into a turf war with the web over how those objects behave.

YSV: This is in response to JHD. I myself later on the queue but this is very pertinent to what Mark just said which is as part of this discussion about the set of globals one suggestion that came up was to reference WebIDL's `exposed` tag. That will be a bit of work The plan was to have a universal exposed, which is exposed equals star. Normally, it's exposed equals and then you have like a collection of environments in which a given web it ideally API interface rather is exposed and I posted in the chat an example blob (https://w3c.github.io/FileAPI/#dfn-Blob) I think that helping this effort along may unblock this issue and allow us to move forward in a Official weigh-in that we can reference the exposed tag in web ideal that those are the interfaces that are included.

JHD: I guess, YSV. That sounds like you're talking about a mechanism by which the subset that I'm looking for, could be obtained. and if that sounds great, but I what I've been hearing from a few folks in the last 10 minutes is a resistance to the idea that a subset should be attainable in the first place.

YSV: So I think, I think what Mark just said that we don't specify Unicode we use it is pertinent here and I would see this as being a similar action on our side in that were referencing these APIs and using them, we aren't going to create an API in ecmascript that allows you to get all of the ecmascript APIs without Unicode. That wouldn't make very much sense, right?

JHD: right, because they depend on 262 to function, but none of we don't - 262 doesn't depend on any of the HTML APIs to function for the majority of it.

MM: What I’m suggesting explicitly is that we can depend on them, we can and in particular I first of all, I don't know. The the webidl `exposed` things so I'm not going to take a position on that. I'm going to take this position. Edition only on the ones that I know to be safe, like URL and textencoder. But those are both safe and host independent, and things that make sense across all hosts. So we can decide to be dependent on them by citing them and to, and to say that these are standard global variables in which the behavior of the objects at that Global variable is standardized by other Spec

JHD: That sounds great to me in general - that's decreasing the deviation between environments regardless of where the actual source of truth for the specification lives. But that unless we're planning to do that for everything, there still exists the same use cases that I have of wanting a subset.

CP: Oh, let me this is not a stage 3 blocker, Right.

LEO: Yeah look at that. That's one of the things that I've been trying to think we Like we have more to discuss in here. I think most of these can be stage three discussion but also like for what we want here. And what we proposing is just to Define like some like drawing the line for what we want as like in things being added my the idea of having like every group of proper you should be configurable is to allows someone to do configuration of of that realm to shape. Get back to what they want. We still do host integration to add more things, but we still allow the user to clean up what the host has just added. We do today with with iframes, people might not love like just removing things to shape it back but it's still like this is what is done in virtualization today, the experience is so much better from what we have today, and I still, I think we can make this line of “Yeah, let's not add a, let's not at all. Non-configurable properties” And then we can discuss in follow-ups. I was like extensions for the Realms have neurons. That is being cut off with just this most of the saddle globals Etc. I really hope like this. this. and knowing the limits of this configuration there, like we're configuration is necessary.

RPR: We've got an hour left and we're not really progressing down the queue because people keep coming in. It's your LEO to choose what you want to go to next but they're downtown is next in the queue. So why don't you just said it's a question.

LEO: if JHD could accept, it's definitely not what JHD wants, to shape the associated Realms to the state that JHD wants.

JHD: So I have a longer thing to say, which I won't now because we need to move through the queue I think, but I don't agree that that means it's not a stage 3 blocker. So I'd love to talk more about that later.

CP: I want to express JHD that this is something that you could do usual, and much. He's just a script that remove anything that you don't know.

littledan: I can I get a library at some point on exposed in the mechanics, but the idea would be that it's written in the web specifications, which things are exposed. And then have led by DL doing the plumbing to JavaScript to those unto the Realms overall. I think this matches up really well with what Leo's proposing, and I'm in favor of the contents of this slide and in the current proposal, which matches that

LEO: That was mostly it also like reflect some, some feedback from from my team back at Salesforce as they saying here minimal and John David Dalton or check here. What I want is actually, like, is still provide around, there is configurable But yeah.

WH: Clarifying question for Mark. Would the ECMAScript spec also require the same globals from other standards that you want in Realms to be present for the global script in all ECMAScript implementations?

MM: For the globals that I'm talking about, yes. I think that ecmascript should standardize the URL Constructor, a text encoding Decoder, possibly a few others, all of which satisfy the harmlessness criteria. That's on the current slide. all of which have a host independent semantics. And many of which are already implemented across multiple non browser hosts. So, yes, I think these should become standard Ecmascript period, independent of realms and then having become standard globals. They realms Creating the Chrome API, creating new Realms with the JavaScript standard globals would would thereby include them because they're big of a script.

RW: Stand standard Wellness Market. When you standardized, you can I ask clarify for you to clarify that you what you mean, as we standardize the name of the thing again and we stand here with your pointer to the definition right?
MM: you to the definition as of a You don't give to you the committee free license to make revisions that implicit Impressions. So so yes, yes, it would be by citing a particularly version of a particular external spec. And, uh, standardizing the name you with that point.

RW: Okay, just one. I just wanted to make sure that that was still the point, great

WH: Okay. Without getting into the specifics of what those are because that’s a topic for another day, I am partial to the argument that we should have a defined set of globals in Realms because of Hyrum's Law issues. We want to be able to make things which rely on other extensions to fail.

LEO: Yeah, and yeah, this is why we're trying to make this a stage three concern in terms of like, what we actually have each realm because if we had the host atoms, anything and in order to work with host to like what we are boarding first, we need to draw the line here as like, we're we're trying like on this slide. And we also need to work with the integration with HTML like what is necessary to be edited or not, and we can stage 3 experiment, like have experimentation limited subset or cutting off cutting down. How we actually make this, reflect eventually, Exquisite, but like today. don't I don't have you. I don't have any chance of extra globals beyond that, my script there are going to be added like we have just like very generic idea of what of what should be added. This needs to work with HTML integration. To start with one of the hosts as HTML.

SYG: Okay, so the talk about modules in the module map, some people asked in the chat that it didn't quite get the rationale from for why the module map thing is problematic from some web platform folks, the so I can try to explain that here hopefully in a clear way. The idea with the so we need to take a step back. So the idea with Callable boundary. Remember that the pushback for calling for a hard boundary. We're asking for a hard boundaries started because we saw a lot of evidence. Both kind of in the Wild on social media and GitHub and stuff and even internally at some teams at Google who were interested in using Realms as a Sandbox isolation, execution context. Basically We thought it would give them isolation just in a very lightweight so why not, sounds great! The problem is of course that if you can in fact, intermingle the object graph, then it is very difficult to secure the boundary and you would need something like a full membrane implementation to actually secure the boundary to make sure that your object graphs don't touch. And as we know, it's easy to accidentally pass an object that you thought conferred No Authority. But in fact, Confer some Authority because you can chase by its prototype chain to get to some function Constructor or something or other that's kind of the inherent difficulty. So the suggestion was like, we think is a foot gun because of the enthusiasm that people were displaying of wanting to use the old version of realms for something that it didn't provide a language level guarantee for. So that was the starting point. With the callable boundary idea that entirely solves that concern, right? That that because of how the callable boundary works the callable boundary version does not have the same foot gun at all. It's great. How this follows into where, the module map concern comes from is that well, the The thinking behind asking for the before a boundary in the first place Is this foot gun, to not have the the, the user round be able to touch and mutate the stuff of the outer realm having to be a hard boundary. in some folks, mental models, the module map is immutable. It's mutable State. And if you were to import modules in the user realm and that directly mutates, the module map in the outer realm. If we go with the the Let's Not Duplicate module maps situation, duplicating module Maps would have the issue of mutating. And the interim mutating the outer realm, but duplicating the module map has its own host of complexity issues. At least there was, there was pushback given by your female editors that it has a host of integration that complexity issue. So of, where does the cache live? Who does the fetch, that kind of thing. So, so the thinking with the module map is, it would be nice If The the mental model of the inner module cannot programmatically touch the outer realm of mutated State extended even to the module map. And that's why there's this split that's not quite worked out yet of if all the mutation happens still by virtue of code, being run in the outer Realm, The only thing that happens in the inner realm. is that instantiates? Something that's already been fetched. That would side-step back concern that said, I don't know how much of a blocking concerned. This is it would be nice if the mental model extended all the way down to the module map as well. I mean I think it is exception that that the Realms concept has to explain that no I/O is allowed except modules, right? No mutation that allowed except modules. Because you observe that the inner realm, fetch, something, and cost, mutation to happen in the module Map. So that is the rationale for why the the module map mutation was considered problematic, is that hopefully clear up some of the confusion,

CP: I wanted to mention that these obviously is has no effect on the spec, we will not change the spec in any significant way because it's not part of the 262 where we are specified at the spec. That's on the HTML integration, I guess. And and we have multiple solutions that we explore our. So I don't think this is stage 3. Blocker, I don't know if you have any different opinion on that, but I believe this this should not be a blocker.

DE: So I think I understand the point of view that inside of a module, you shouldn't shouldn't have any Ability to cause this I/O to be done. I think within the Champion group, this is understood to be a pretty acceptable exception. If you look at some really basic use cases, if you're going to run any code inside a realm at all, while respecting the CSP no-eval rule. You just need to load a module and those the code that you run will often be different from the code that you want to run outside the grill. So I think it just makes sense to let Realms load modules. I don't think there's any really substantial interference from one to the other. Sure, it affects This Global Network cache. There was a large amount of discussion about an additional caching layer at the module. Map level. That doesn't seem harmful, but it doesn't seem very very helpful either, because real interference is at the Network cache level. So it, so the current proposal does allow relevance to Inner Realms to cause something to be loaded into the network cache which could be observed by the by the outer realm, but this can be mitigated by if you want to run code in a realm where you want to restrict it, you just don't run code in the realm, that Imports the module because the outer realm that decides which code to run in the inner realm. I just don't think the appearance of it. A module is significant mutation because it its identity and it's not it's not sending any particular. Different given piece of data. And when, if something's cash, then you're going to continue to get that copy of it. so, I don't agree that this is a significant. This is significant problem. I think it would be it would just be quite unfortunate if we made this severe restriction, that that realm is cannot load modules, which were previously unloaded and the other things in the middle which are kind of splitting the difference don't seem to accomplish anything.

RPR: is everyone okay if we extend this by another 15 minutes, Yes. Okay. All right. So we'll do that. So Rick did Dan cover your item?

RW: Yeah, I think, I think Dan didn't need her of my item. Mostly what I wanted to say. that, you know, the issues with with the shared module, map, and mutating the outer. Like let's say the parent Realms graph isn't observable. You know, I think are nailed it down, he said that's not our problem. Anyway, the HTML spec can figure that out and all. Furthermore, I'll go as far said that, implementers can figure that out like where the modules get loaded with either one of them. And issue could very easily just create a module. could it make a difference because that's not observable. And if the argument is as well, there's a timing observability. Then I would say, that's a bad implementation. If it allowed for their period, timing observability first between a cached module in one that has to make a network request. You can fake that with whatever you need to do to, to make it, you know, put some non-deterministic result. So again, I don't think that this is a stage three blocker. I don't think it's really a relevant blocker for this proposal. that all stage 3 or stage for ringing stage, is it just doesn't really apply to the specification.

CP: the timing issue is even more difficult to or economically impossible, because you're using async Anyways, they're using game board, board, which is async, right?

RW: And even even static Imports that happen inside the realm, if Imports something that was already imported by the parent realm. So it's a little bit quicker because it's cached locally, the implementers can see implementations using split the difference and make it an auditor that a system cache or had to make a network request like you can't, there's can't. There's no way for the user. To know that that, you know, did or did not previously exist in the parent or in sibling right? For that,

RW: I'm going jump to the next thing because my I did have one of those after and just respond to Shu and say, you know, aside from using different words, it is not different. "positional flakiness" is just another way of saying order of statements matter. So if you to cancel out that that argument from us, that's fine if if you if that's the view it still makes a difference when somebody can change the order of static important to file without it making a difference and it might be a little bit strange, if changing the order like this in that example, that was on a slide would make difference that's all trying to say but if you don't think that that holds up on its own, then I would gladly say we retract that argument.

MM: I need to respond to Rick statement about timing because I completely disagree. Once you allow code to measure duration, there's all and there's lots of sneaky ways code can measure duration indirectly. So it's not necessarily that you gave it a timer, but once you want to code is able to measure duration there are tremendous numbers of side channels that they can then use and trying to delays to hide those side channels, is just a not going to be practical and being not something that implementations will actually do. Because we actually because the additional delays are too onerous and they're not the succeeded, avoiding the side Channel anyway,

RW: Wasn't that actually the solution or one of the solutions to like timing issues with settimeout all the implementations like basically, she like made it Non deterministic, what the minimum amount of time? A set timeout will actually take

MM: We're talking about is network round trip. Yeah. There's,

RW: I don't necessarily think we disagree, but what I'm saying is, is that How about this Mark? I see the argument you're trying to make. So I'll I will actually just go ahead and retract my personal statement it and still I will still say that I think that timing is not an item that this spec needs to address.

MM: I agree, completely. Okay. I think I'm in favor of the shared mutable parent, table map. The key thing is it's not overtly observable, meaning that there is no deterministic observation, according to semantics in the spec, observation through timing is a completely different. Kind of Of matter.

RW: I will concede that to you right now, Okay. And I also apologize for making odious claims. Yeah,

DE:I want to agree with with Mark here. That this, this thing stands on its on own even though this timing is observable because of the basic identity of loading modules.

MM: The further point I would make is that the coupling that work on? This is the stateful coupling that Talking about between the child and the parent is consistent with the theory of coupling that we already have through the callable boundary. We can radio retroactively, explain that in the Theory as if there's a there's communication over a callable boundary between the child's importer in the parents importer. The key thing is that No Object references are exposed across the boundary. It's only a coupling of side effects and a coupling of side effects are passing of data, can happen over a call boundary. So I think, I think all of this together argues that, this is just fine.

CP: Does Shu have anything to say about marks explanation?

SYG: I think it's okay to move forward with the with the With the version as is to allow modules to be imported. We will of course do need to iterate on the mechanics of how that works, As I think, it's still like, what were you would still like to do? Is that there be a single fetch not multiple fetches? If you import the same thing, we get multiple instantiations as you have said, but not multiple fetches. We have voiced, the concern I have said, it's not a blocking concern, this particular point. What I want to push back on here. I something that you said that this is not a stage three concerned because it doesn't touch the 262 spec text, I would argue that it is a stage three concern to the extent that without this being figured out, I can't really go back and start implementing this. Even if we reach stage 3 here and so insofar as stage 3, being a signal for the implementations to start implementing. If it's not figured out, you're still not getting to the point where yes, let's start implementing it because a large part of this will be integration with the host. But that said, I'm okay with the proposal.

DE: So if I could just jump in briefly, so I wrote the current HTML integration PR, I would be happy to upgrade to these other semantics to avoid the Redundant fetch. If this is the final decision, we were getting a lot of kind of conflicting signals about what the preferred semantics were. So that's part of why I didn't write it up so far but I can do this shortly after a week. would even be happy. You conditional stage 3 on that. Being written up. Does this? Does this resolve that particular issue, Shu?

SYG: I'm satisfied with that. I think, you know, it's still a non optimal outcome from from HTML web platforms point of view. But something we can live with, I thought there were other concerns. However, but that particular issue, issue, it's fine. Okay.

JWK: I like the new realm but how do you share ArrayBuffers between Realms?

LEO: So far they don’t go in full capacity for realms. The current base is still exploration. It is a complex situation figure out in one way or another.

RW: Also, I think the lack of SharedArrayBuffer improvement between realms is consistent with o no object reference policy. It's not an edge case. Null objects, buffers, etc., can be shared. It's very consistent.

JWK: Maybe we can add a primitive immutable binary type to the Record and Tuple proposal?

LEO: This would be exploration for the work, too much complexity to break what the callable boundary is doing.

LEO: I would like to hear what are the remaining Stage 3 blockers.

JHD: I have Stage 3 concerns that we ran out of time to discuss. The tldr is that there are 2 points. (1), when we're talking about adding something later, that's when we're subtracting something later, like making something more ergonomic later. It doesn't make sense to ship out now with every global and subtract later. (2), It's fine in our process to split things up, but that usually only works better when the second thing seems viable to be added later. But if it has insurmountable objections, it doesn't make sense to say that we ship something now and the other thing later.

LEO: We still have strong use cases for having full access to Realms and Globals. We just believe that there is a hard objection from one side or another. But in this case, your objection is opposed to another strong objection. There might not be a best solution for all, but the currently proposed solution is workable. We still have strong use cases to push for providing access to this. We could have a strategy showing how access to objects would be useful in the future. But we're still working on a cloudy perspective because we don't have all the artifacts we're providing. So that's why we like a step-by-step approach. But we still have strong arguments to continue exploring this.

RPR: I hope JHD and LEO can work together.

WH: I don’t have specific concerns myself but get the sense from the discussion that different people have different ideas about what this proposal means for implementations. So I echo SYG's point that we should make it clear what implementations should implement before stage 3.

### Conclusion/Resolution

- Proposal does not reach Stage 3
- will continue to be discussed.

## RegExp Unicode set notation + properties of strings for Stage 2

- [draft spec](https://docs.google.com/document/d/1Tbv3hfX9CxQtzH9r-JdxJsQZhmmDsidRUKKxg345JV0/edit)
- [slides](https://docs.google.com/presentation/d/1nb_6ZcAjG4AKwVrwpalu1Ep-h7TONxoSm-uxKx83Wik/edit)

MB: (MWS presents slides) asking for stage 2 acceptance. Nothing new, except now we have spec text, but going through the presentation as a recap.

MWS: Combined 2 proposals, earlier one was for set notation and there was a good reason to combine the two. For the set notation as such we are adding a subtraction, intersection, and the ability to have nested character classes. We are not changing regular expressions outside of character classes or character classes escapes. What we’ve settled on is to have a new flag that is ‘v’ which implies the flag ‘u’, which is on top of the unicode classes, but you don’t have to specify both flags to get the old and new behavior. New flag ‘v’ gets us new set notation. There will also be a getter called unicodeSet – not happy about the name because it is the same as the name of a related class in the ICU libraries, bikeshedding is still open. Set operator is proposed as -- for subtraction and && for intersection and also examples of nested character classes. All of this is a recap. Presented a number of times. We would like a reserved syntax so when we come up with new ideas in the future we don’t have to add another flag or add another mechanism that takes a lot of work. In particular, some regex engines also support symmetric difference. One of these reserved operators could be used for that. We would also like to reserve curly braces, which means you must escape them in character classes. We don't currently have a plan for curly braces, but we feel it also helps readability. The dashes are interesting, because they're also used for range notation. We use a double dash for subtraction. We're simplifying the syntax because a literal dash needs to always be escaped. Also when we have a range together with subtraction and intersection it requires that you put the square brackets into a nested class otherwise it looks confusing. We had long discussions about operator precedence. We're getting around that by requiring extra square brackets when you mix operators. Properties of strings are now also part of this proposal. We allow them to be inside character classes, but now with new notation, so that you don't get any strings, in literal form or as properties, where there is a set complement, because it is hard to define and there is no good use case. Some combinations are allowed like when you have an intersection of a property of strings with a property of code points, the intersection can only have single code points and the complement is nicely defined. There is a sample simplified hash tag regexp example. For string literals, we adopted a syntax that looks like a string alternation. The purpose is that it allows you to take a property of strings and then exclude a certain set of strings. (See flag example on the slide.) And you can put multiple strings into one rounded-parentheses item in the syntax. As Mattias said, the part that is new here is we have draft spec changes. We currently have them in a Google doc and they include syntax, static semantics and runtime semantics. I'm sure we have some holes in there, but it is largely complete and should hopefully work. We are reasonably confident, but that really gets reviewed and ironed out once we get to Stage 2.

MWS: And so we would like to ask today, to get approval to move forward. And at this point, I don't know if there are questions or whether we should take a look at the proposed spec changes.

WH: I've been involved quite a bit with this proposal and reviewed it several times. I'm happy to say that the bugs which I have identified have all been fixed. I have some questions I'd like to open up for more general discussion to the committee. These are things beyond simple semantics or syntax bugs or fixes.

WH: We agreed to use the `v` flag. It implies `u` in the sense that everywhere we knew in the semantics the things that were gated by the Unicode flag will become gated by either the Unicode flag or the Unicode Set flag. However, that leaves the question of user code that does introspections on regular expression objects. Does any user code look at regular expression objects and see if they have a `u` flag? Such user code will misbehave if somebody supplies just `v`.

MB: I certainly can think of examples, e.g. Babel or any ECMAScript parser implementation in ECMAScript would need to be updated to not only check for the `u` flag, but also for the new `v` flag if they change their behavior for parsing accordingly. This is equivalent to the changes that parsers in JavaScript engines would need to implement as they implement this proposal.

WH: A potential alternative might be, rather than gating spec logic on either Unicode or UnicodeSet, that supplying the `v` flag automatically sets both the `u` and the `v` flags. But that may have other undesirable consequences.

MWS: We intend for it to be possible and not forbidden to have both `u` and `v`, but that is the same as just specifying the `v` flag.

WH: As far as regular expression execution is concerned, that’s the same. It differs for anybody doing reflection on regular expressions.

JHD: My queue item is right after this. And I have a few questions about the specifics of this as well.

WH: Okay, next item. We added a whole bunch of other characters with special meanings in some contexts, such as `&`, `@`, and whatnot. Thus we will allow backslash escapes of those so users don’t get stuck: you can write `\&`, `\@`, etc. inside the new character classes. Would it be useful to retrofit those backslash escapes to also apply inside regular character classes so users don't have to worry about where they can escape those characters with backslashes? Currently we forbid those in regular character classes in Unicode mode.

MB: That's an interesting proposal. I like it. I would like to hear what other people in the committee think about this.

KG: I'm in favor of it. I hate having to remember which things I need to escape. I just aggressively escape punctuation that might do things. And when I escape a `-` in Unicode mode, that doesn't work, and that's always annoying. So I am in favor of porting these identity escape sequences to Unicode mode. We're not going to give them other meanings, right?

WH: `-` can be escaped as `\-`, but only inside a character class in Unicode mode. So it's weird.

WH: Next item. This thing will use both character sets and string sets and I’m iterating about how to spec that with the champions of the proposal. One thing that comes up is that, with the addition of string sets, matching choices become important. When matching against character sets, either the next character is in the set or not. There can be at most one element within a character set that matches. With string sets you can have multiple elements that match, so the question is which one to pick. I am assuming we want the longest one. I just wanted to raise this as an issue for others to think about. For now I think we'll go with the longest one.

MWS: Yeah, so what we have said for some time in our proposal, is that logically the strings in the set would be matched as an alternation. And for a regular expression engine, like what JavaScript I believe does, you would want to list them in descending order of length so that you don't get prefixes matching greedily before the longer version matches.

WH: Yes. You can have two possible interpretations. Let’s say inside a character class you have some string alternative separated by vertical bars. You could make the order of them significant, so you might pick the first one which matches. Or you can go for the longest one. I think I would prefer to go for the longest one, but this is a question I want to raise.

MWS: Yeah. So the proposal definitely intends to have these things be sets in a mathematical sense and then in the runtime semantics as we create a matcher for the set, we look at the longer strings first. Having it be text-order-sensitive becomes confusing when you take intersections, differences, etc. of string sets.

MLS: There's alternatives, for example you can do a collation order and also, you can go in order that they are included in the set.

WH: Yes, that was the other alternative. I would prefer to go for the longest one but wanted to raise the question to see what others’ opinions are.

WH: Last item. For some concepts such as flag emojis that were mentioned earlier, there are infinitely many possible emoji flags because some of them are defined to incorporate the name of the place that the flag designates, encoded as a sequence of characters terminated by a special character. If you just match all flags, there are infinitely many possible flags. I don't know whether unicode will actually define such properties, but I want to assume that somebody is going to want such things. So I want the spec to be usable with infinite string sets as well.

MWS: actually - on this point, I very strongly disagree. The intention for this proposal has always been that we work on what Unicode has been now calling the properties of strings, which are defined as enumerated sets of strings, and that means they are finite. So if you look at the Unicode Technical Standard for emoji, which is UTS #51, there are two types of things, they are the infinite sets of strings, which are specified by regular expressions, and there are finite sets of strings, like the ones that we are proposing to use here, and they are defined by data files that enumerate every string that is in those sets. And that is also why we have been arguing to use the \p syntax for these properties – because they work a lot like the properties of code points which have finite sets enumerated code points that they apply to. Which is very, very different from the infinite things like - well, actually, all possible Flags, isn't really infinite, there are something like 5,000 possible flags, but there is definitely an infinite set of emoji. And there's an infinite possible set of valid zero width joiner sequences.

WH: The number of flags is infinite because some of them are encoded as text names with a terminator. I don't mean the country flags, I mean the region flags like Scotland.

MWS: I thought that is limited by what is a valid subdivision, ISO subdivision code, and there is a limit to those but nevertheless there are two different things. One is a spec in Unicode for infinite sets. And we are not proposing to support those here. And if we were to propose those later, I would very strongly argue to use very different syntax for them and not use them inside of character classes. What we are proposing here is to add support for properties of strings that are defined as finite, enumerated sets of strings.

WH: I hear what you're saying. I don't understand the rationale.

MWS: Because implementation is just a set of strings, which is barely more than sets of characters. Because what lots of people think of as characters needs to be encoded sometimes as multi-character strings, whereas the other is really a matcher spec. And if you look at Unicode, as I said, one is defined as a file with a few thousand lines, or a few hundred lines of strings, that are the set of strings, and the other one is defined as a regular expression. Those two are very, very different things and they behave differently, and they are implemented differently, and people think of them as different things.

WH: Let's go on to the rest of the queue.

JHD: Yeah, so I just had a few specific questions. So in this case, you've put the pipe at the Belgian flag in the parentheses in the first example.

MWS: Yes, the left color bar of the Belgian flag is black on black background so it doesn't show up so well.

JHD: So is there always supposed to be a pipe there or is that just happened? It just to work there because you can have multiples. Oh, I see.

MWS: That's not a pipe. That's just the one flag.

JHD: What happens if instead of that flag? I put a character that isn't in the RGI Emoji set.

MWS: The same thing that happens when you do set operations in other places: If you subtract something that's not in the left set then nothing happens.

JHD: okay, so it's like a no-op. Might that perhaps mask a bug?

MWS: Well, that's the same in math. If you have a mathematical set of A and B and you subtract a mathematical set of B and C, you get the mathematical set that is A.

JHD: Sure. Yeah, I guess. Okay. So I mean, this is something we figure out within stage 2 but to me this isn't math and so like it's if it isn't a no-op,

MWS: But this is how people implement sets in general in computers as well.

MB: If I may, there's actually a use case here. It can be that it masks a bug in some cases, but it can also be a valid use case to have a user-defined thing on the left hand side, and you want to make sure that whatever the subtraction produces definitely does not include this particular string or this particular set of strings, then this feature lets you do that. This is an important use case, and I don't think we should make it throw an exception or anything like that just because it might be used incorrectly.

JHD: So, from the discussion with Waldemar, sounds like if I do `/.../uv`, that is equivalent to `/.../v` in the way, the regex is parsed in whatnot. If I do `/u` or `/v`, does `.unicode` return true and does `.flags` contain the string `u`?

MWS: No, Mathias was careful enough to point that out and define the spec such that that doesn't happen.

JHD: Okay, so the intention then, is that, if I want to check for, you know, see if a regex has Unicode semantics or whatever I would do `.unicode || .whatever-this-one's-called`.

MWS: Yeah.

JHD: Okay.

MB: It seemed important for flags to continue mapping to only their one corresponding getter, and for a flag not to suddenly influence other getters all at once. So `v` and `u` are really two separate modes you can think of: one is the Unicode mode, and the other is the UnicodeSet mode. There is overlap in their behavior, since Unicode set mode is a superset of Unicode mode, building on the existing Unicode mode behavior. But as far as the flags in the getters are concerned, they are really two separate modes.

JHD: Is there any use case for providing both `u` and `v` other than perhaps wanting to dictate the output of flags and the getters?

MWS: I don't know if there's a use case; it seems unfriendly to throw an exception if you have both, when it's not necessary, but if you think that would be better, yeah, this is also something.

JHD: I think we can be discussed with in stage 2. I just posted those mostly to get clarification.

MWS: Okay. Okay, thank you.

MM: I just want to verify that this does not change the Lexing rules of JavaScript, that anything that lexes tokens to tokenize JavaScript correctly today, will continue to lex correctly tomorrow.

WH: Correct.

MB: Yes, that is correct. Mark, we made that an explicit goal. It's listed in the readme of this proposal. I know we've talked about this last time the proposal was brought up and the time before that. Rest assured it is an explicit goal of this proposal to not change that invariant.

MM: Okay. And also, I want to say, I appreciate the humor of including flags in the regex pattern content, as well as on the (?).

MLS: On this page here, in the second example you show character class, it also contains some strings in here and earlier, we're both are talking about this, you suggest that you want to match the longest string first, when we have a set of strings when it seems to me that it's going to be more performance sensitive. If we match the longest string first, especially in example, here, where have a range of lowercase, ascii letters arranged of uppercase s, you letters in a bunch of screens. the ranges are easily matched while the strings are especially if there's a lot of them is more expensive to match. And I also think that the semantics for the, for those that are using these regexpressions, may not be if they have a implied matching order when we have a effectively character class or set that contains properties of strings.

MWS: So, in terms of performance, I can readily believe that this could be slower than not having strings, but we are not changing the matching behavior for sets that do not have strings. And so, if someone really wants this and does this, then they have a use case for it. And if that comes at some cost, I think, if that's the cost that it has because that's the feature that they need. On the other hand, you could also readily optimize this. I mean, what we are doing is specifying behavior, but implementations are free to optimize on top of that. So the typical thing that we do, for example in a collation implementation, is that you would do a fast lookup on a character. And then there is a flag on the lookup result. It says whether the character on its own is all that you need to look at or you need to look at matching a suffix from there, so you have a data structure where you find a lookup result for C in this case and C could tell you that if it matches by itself, then it's a match, but also there could be a suffix H that you have to mach only if you get to C, whether the next character is an h and you don't have to check for multi-character strings when the first character is A or B. So there are common techniques that are widely known in the industry that can make that reasonably fast if desired. In Terms of confusing semantics, I think people are used to not having an order or anything like that implied, when they are characters in the character class and I think it would be very confusing if there was an order implied, if the strings in a character class had to be matched in the order that they occur – in particular, if they occur in subtractions and intersections and nested classes and things like that.

MLS: well, it character class, you only care that you Imagine a character that appears in that class. It's a, it's a unique set. Its does the characters match what we’re currently looking at? Is it in that set or not? That's a whole lot different than when you start including properties and strings in a set, And I think the regex users understand that.

MWS: We have been using strings in the equivalent ICU and CLDR construct for the last 19 years and I'm not aware of that kind of an issue.

SYG: Is this the first flag implication that we have? Or I guess is an implicit implication in that implies the behavior but it sounds like it doesn't imply detecting for the presence of the `u` flag.

MB: I believe that's correct, yes.

SYG: Okay. this is not any kind of blocking concern. I'm just trying to kind of figure out in my head. How we ought to think about these implicit implications, maybe we would want them to be more explicit. Do you get a sense that it be significantly harder to use? I think I saw in chat that WH had suggested the idea of Having `u` and `v` always be together if you want to use `V`, what do you think that's it?

WH: If you set the `v` flag it would automatically set the `u` flag.

SYG: okay? Not that you explicitly have to type u but that didn't explicitly, implies you that U just with

WH: Okay…

SYG: I think I have some issues but they want to explore to see what. Yeah. Okay, that sounds good. I think that's I would feel more comfortable with with that. It's a gut reaction. I haven't thought it through. Then the implicit information.

MB: I think in response to what WH said earlier, what was compelling to me is the backwards compatibility aspect. Existing code that handles a RegExp object and goes down different code paths for `unicode` vs. non-`unicode` mode might want to do the same for this new flag. (Then again, they might need a new code path, since `unicode !== unicodeSet`.) That's an argument that would lead me in the direction of: if we make a change to the current proposal, maybe we should require both the `u` and the `v` flag to be explicitly set. Everything is explicit that way.

WH: I don't like it as much because it's just more typing and I would still want `v` to become standard usage. And I don’t want to have to deal with what happens if someone wrote just `v` when that doesn’t imply `u`. It would be annoying for that to throw an exception. It would be equally annoying to have to define a non-Unicode `v` mode.

SYG: The high order bit for me is just the implicitness. I would feel more comfortable if there were explicit whether you have to manually type or that it's testable. But the fact that it's an implication, I'm that seems okay to me.

MLS: So just following up on Shu's comment. So if I set V, but I don't set `U`, what does the Unicode getter return? There's different semantics with `v` vs just `u`. WH talked about, you know, implies or should they both be present is a syntax error for not both present or they are both present. It seems like the since their semantic differences. differences. We almost to have it so that `V` is a superset behavior of `U`, but they cannot be used together because the U semantics are different than the `V` semantics as are we discussed? I think there's some confusion as to how this, how this should work and how very refreshing should be constructed. Not just in the engine but also in people that use it,

MWS: So in my mind, if I might respond to that quickly in my mind, these questions need to be resolved but it's not very near and dear to Mathias and my hearts exactly which way we go. So I don't know if we require that `U` is given when someone does `V` or we forbid that `U` is given when someone requires `V`. I'm perfectly happy to collect arguments and have a vote or something like that at some point.

MLS: so I think these are stage two concerns as to how this, how this works, what was implied, you have Getters do, is a syntax error, they both required by

RPR: To clarify Michael, you're saying that these are things that could be worked through during stage two.

MLS: Well, yeah, I think while the stack the spec is being formed these issues need to be worked out. Yes, great

SYG: explicitly, not a blocking mechanism.

MLS: Well, if we think we do have a spec that says what happens? But we can change that.

WH: What currently happens is that `v` implies the behavior of `u`, but it does not show up as `u` in reflection, it only shows up as `v`.

SFC: I just want to say I'm really happy with this proposal moving to Stage 2. I support Stage 2, and I'm really happy with Mathias and Markus keeping me in the loop and resolving my concerns with the previous set of strings proposal.

RPR? I'm really happy to see this progressing for stage 2. See if the Champions like to ask.

MWS: I would like to ask for advancement to stage 2.

WH: Enthusiastic yes from me.

RPR: Any objections to advancing?

MS: So I don't know if we are advancing the set operations in the flag or property strings as well. Are you merging these into one proposal at this point?

MWS: Yes.

RPR: Okay, so just a final check, Are there any objections to advancing stage 2. [silence] No objections. Congratulations. You have stage 2.

MB: Thank you. We would like to also ask for stage three reviewers, and I would like to point out that WH has already been reviewing the draft spec text. We're very thankful for that. Maybe he wants to continue as a stage three reviewer.

WH: I will continue to review. I'd like someone else to review also.

RGN: I would like to participate in the review. Thank you.

MB: MLS I don't want to put you on the spot, but I know you've already reviewed the properties of strings proposal as a stage 3 reviewer. So if you want to review this proposal (which subsumes properties of strings) as well, that would definitely be welcome.

MLS: You can add me as a reviewer.

MB: Nice, thank you.

RPR: So you have your three reviewers.

MB: Perfect. Thank you very much everyone.

### Conclusion/Resolution

- Stage 2
- reviewers: WH, RGN, MLS
