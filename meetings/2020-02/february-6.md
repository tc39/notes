# February 6, 2020 Meeting Notes

-----

**In-person attendees:** Aki Braun (AKI), Andrew Paprocki (API), Rob Palmer (RPR), Waldemar Horwat (WH), Chip Morningstar (CM), Shane F Carr (SFC), Shu-yu Guo (SYG), Jordan Harband (JHD), Michael Saboff (MLS), Keith Miller (KM), Michael Ficarra (MF), Jonathan Keslin (JKN), Kevin Gibbons (KG), Richard Gibson (RGN), Justin Ridgewell (JRL), Zibi Braniecki (ZB), Myles Borins (MBS), Bradford C. Smith (BCS) Rick Button (RBU), Mary Marchini (MAR), Guilherme Hermeto (GHO)

**Remote attendees:** Dan Ehrenberg (DE), Brian Terlson (BT), David Rudin (DRN), Jason Nutter (JAN), Ron Buckton (RBN), Pieter Ouwerkerk (POK), István Sebestyén (IS), Min Qi Wu (WMQ), Leo Balter (LEO), Valerie Young (VYG), Jack Works (JWK), Mathieu Hofman (MAH), John Hax (JHX), Caridy Patiño (CP), Sergey Rubanov (SRV), Rajiv Batra (!!!), Yulia Startsev (YSV), Bradley Farias (BFS), Gus Caplan (GCL) Younies Mahmoud (YMD) HE Shi-Jun (JHX), Robert Pamely (RPY), Caio Lima (CLA)

## SES Compartments

Presenter: Mark Miller (MM)

- [proposal](https://github.com/tc39/proposal-ses)
- [slides](https://github.com/tc39/agendas/blob/master/2020/02_talk_Splitting-SES.pdf)

MM: (presents slides)

WH: For the Date constructor, you omit sensing the current time, what about the time zone? Date is full of conversions between local time and UTC.

MM: I think it’s fair to say that the group as a whole is not at a definitive decision on what to do about time zones. Certainly the safe state, will be to just have a fixed time zone, such as Greenwich Mean Time. The answer is TBD. We realize that timezone and locale are annoyances we will have to come back to, but at least they are not high speed channels.

MM: (continues to present slides)

MM: Now I will take questions.

DE: You talked about host hooks. Where can I learn more about host hooks?

MM: There are 2 incomplete lists of host hooks. Host hooks are, at this point in time, a neglected part of this effort. We need to get back to it. There was a much earlier version in which we had an API specified for a small number of host hooks. Since then, there was a gathering of things that look like host hooks. There was an issue posted on the Realms proposal. I did a separate gathering on one of the pages in the SES proposal repo, not in the READMEs, summarizes my attempt to gather host hooks. I only became aware of the other list on the repo this morning, but I think they are in agreement. Most host hooks will transform to APIs relatively easily, but we need your help.

DE: I’m curious about modules. The module host hooks are not laid in a way that corresponds to a way you might implement it. We might want to refactor.

MM: Suggestions certainly welcome. Just need to keep in mind all the simultaneous needs we need to satisfy. The important thing, which may not be obvious, is the staging separation, which is what I tried to emphasize in explaining the MMU. Things that are already loaded, you are just doing instantiation and linking. So in terms of a full module loading API, there are a lot of things that are not relevant. It was interesting to untangle that from what you want to do during runtime.

DE: Are you saying that you don't want these virtualized environments to have the same capabilities as the more general module graph case?

MM: I’m saying that I want them separated, so that in a TC53 configuration, the loading abilities might be absent, whereas the instantiation and linking abilities might be present. In a full web context, the loading will still be there. Loading is source files in directories loaded with IO to static module records. I want the Compartment API to go from that phase (static module records) to linked module instances. Those two things are really conceptually different. TC53 brought home the huge payoff of separating them in the API. So what I'm presenting here with the compartment API is only the second phase for that. I'm expecting a separate loading API that can provide arguments to the compartment API.

DE: Thanks for explaining.

JRL: Can you go back to the endowments slide? So you were saying that the endowments object are things that are copied to the new global object. Wouldn't that leak the outside state? Doesn't that give the compartment access to the parent?

MM: Yes. That is the intention. One of the reason we separated Realms and Compartments, is that we found it much harder to prevent leakage over a realm boundary than we expected. It is hard to do controlled sharing of what you intend across a realm boundary without leaking other objects from the realm that you did not intend. When you are within one set of shared frozen primordials, we found that not to be a danger. The things you share via endowments are the things you are sharing on purpose.

GHO: Thanks Mark. When you have code being evaluated in a compartment, and the code has a handle rejection, what happens?

MM: So you and I talked last night. For the rejections that are about turn boundaries, about what happens at top of turn --- such the motivating case is the Node unhandled rejection, where you have a Promise that entered a rejected state and no one was listening for it --- since it's about the turn, is on most grounds not the right ergonomics, division of concerns, to put a hook on that, neither at the realm nor compartment level. What the turn is really about is the agent. And just like we're taking the spec concept of a realm record and turning it into a reified Compartment, and taking the spec concept of the intrinsics record and reifying it into a Realm, what we decided last night was to create a proposal repo about the agent API where we can put host hooks that are per-agent. That is about installing the error diagnostics that are about turn boundaries as well as host hooks for defining scheduling policy.

BFS: I just wanted to say that at least with unhandled rejections, it would be pertinent to move this to the older proposal called Zones.

MM: There is one option for how you could put it into this Compartment proposal. I don't remember who suggested it. You could associate with the realm that created the rejected promise. You still couldn’t invoke this hook until the turn boundary. But on the turn boundary, the invoked hook could be the one associated with the promise’s realm of origin.

DE: When we were talking about realms and interaction with modules. It sounds like a realm can create a compartment inside of it, with its own module map. Is there any way that realms can use modules without SES compartments?

MM: The realms proposal is now delegating many things to the compartments proposal. The original motivation for compartments proposal was for SES, and in SES is where you get a lot of nice properties for why it's organized this way. But the compartment API I presented could be made available as a standard API whether or not you are in SES. Although you don't have frozen primordials, it still lets you have separate global objects, host hooks, etc. So although it doesn't provide separation, it gives you the ability to customize an execution context.

DE: Are you set on realms not having access to the parent realm’s module graph?

MM: Quite the opposite. This was a late realization. (slide on frozen intrinsics). The start compartment has not lost it’s host objects, the powers associated with being in the initial evaluation. There is a separation between it and the intrinsics, the fact that the document is available here is interesting and surprising. The start compartment is in complete control on how it passes forward the powers it has. By the same token, the start compartment can have as its same namespace, in its loading behavior, provided by the host compartment. The import map provided by the browser is fixed before code starts running in that frame. So it's a fixed mapping provided essentially to that start compartment, and then the start compartment can create new compartments, either providing mappings to names it has, or giving a separate loading mechanism, e.g., loading things from a packed set of modules (you don't completely ignore the host-given modules, like built-in modules), and then you provide to the child compartment mappings only to those, insulating them from host-granted powers. So this is less than an abrupt transition from how JavaScript runs on hosts now than we were expecting.

DE: It sounds like you are saying that with the combination of the compartments, host hooks, there should be flexibility among the uses of the API to grant host capabilities. In the near term there would be no way to grant host abilities?

MM: I’m going to provisionally say that no, what is a start compartment immediately has the global namespace, and that the compartment map provides an ability to grant subsets, and given that there is some loading behavior.

### Conclusion

Update without stage advancement

## Time Duration Format Proposal for Stage 1

Presenter: Younies Mahmoud (YMD)

- [proposal](https://github.com/younies/proposal-intl-duration-format)
- [slides](https://docs.google.com/presentation/d/1IfyFfYBROZJkODWWHudBKuGkKvTzN_Pwn2iq1ZM4_JY/edit?usp=sharing)

YMD: (presents slides)

SFC: I just wanted to provide some context. We’ve been discussing this in TG2, ECMA402 that we have monthly. This is a longstanding feature request. The fact that Temporal.Duration is coming gives this some urgency, but this is a longstanding request. We’ve discussed some ins and outs of this API, this is only a stage 1 proposal, before stage 2 there are still some open questions on the repo. I encourage you to look there for additional feedback.

JRL: Throughout the presentation it said "1 hours". That's supposed to be "1 hour", right?

YMD: Yeah, that's a typo.

WH: What is the relationship between this and UnitFormat? It seems to be a special case where units are time.

YMD: You are combining units together. … If you want to round or not, and then you format all of them together?

WH: What?

SFC: When you are formatting a duration, it is conceptually similar. However, we found that durations are different enough than other units that they have a lot of options that don’t apply to other units. Durations are usually formatted in a list, which is not supported by UnitFormat, for example the dotted format. Plus we still need an API that accepts a Temporal duration, which doesn’t make sense for NumberFormat.

WH: Duration is not the only one thing that does lists like hours, minutes, seconds. For example, degrees have degrees, minutes, seconds. This country expresses distances as 6 feet 5 inches.

SFC: We have a separate smart units proposal for covering things like feet and inches. We see those as two separate problems.

WH: Is the units proposal also going to accept time?

SFC: We just approved UnifiedNumberFormat, which supports formatting time units, but mainly in the context of measures that aren’t duration, but things like miles-per-hour. We do have some duration units in that proposal, but it's not all-encompassing.

WH: I’m just feeling a bit of confusion about the distinction among the proposals.

RGN: Number format is always single unit as currently presented?

SFC: Yes.

WH: But you just said there is a proposal for formatting feet/inches?

SFC: An open issue we want to address in 2020, but not part of a currently active proposal.

YMD: Asking for Stage 1.

RPR: Any objections?

(silence)

### Conclusion

Consensus reached for stage 1

## Request for reviewers for Logical Assignment

JRL: I need stage 3 reviewers for logical assignment.

Kevin, Daniel. KG and DRR

## WeakRefs status update, continued

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-weakrefs)
- [slides](https://docs.google.com/presentation/d/1a4hrdlEcpyKmBj6VtAVYDkokeW_HLFXcg11xIxhwlWM/edit#slide=id.p)

DE: I want to make the case for independent lifetimes more intuitive. You will export some function that wants to do finalization work. …. In that kind of case the group will be held live.
In WebAssembly, you may have memory, and that memory will have allocations against it, and a group associated with that memory. When that group dies, it’s probably because the whole module dies. This is usually a resource you are sub-allocating. It would be extra work that wouldn’t serve any particular purpose. If we didn’t have any independent lifetimes, we would need to keep track of this additional work. It just makes sense to have independent lifetimes.

MAH: I’m not sure I quite understand the resources. If we have a live object that has some storage and decide that goes away, if we don’t want to do cleanup, but let it fall away, what happens to the live object that the user has? Does it become corrupted? I don’t understand the use case for the independent lifetimes.

DE: I’m confused by the question. Either the object refers to the storage or the function does.

MAH: With a WeakRef, I suppose, And if it doesn’t that means the store isn’t collected anyway.

DE: I don't see why you would use a WeakRef there. Can you explain?

MAH: If you don’t use a WeakRef, that means your object has a strong reference to a backend store.

DE: That is what I think would make sense for the cases I can think of. If you have an object that points to a WASM heap—I’m making these references to WASM because it’s a concrete case, but if you have another one, we could use that instead.

MAH: No, we can use that one. I just don’t understand the advantage of letting the group die if the backing store isn’t collected.

SYG: I think, MAH, you can imagine for the WASM case that the things you hand out are WeakRefs, and you manually dispose the memory somehow from the main linear memory. you would not need to run the finalizers anymore.

MAH: Right, so that is what I am saying. The live object would have a weakref to the backing store. Which means when the object tries to access the backing store it would blow up.

DE: This just seems independent--whether or not the instance holds the WASM memory, you’re already buying into this blowing up design decision—and opt-into doing the finalizer work.

SYG: Imagine your API was that you attach the finalizer per WeakRef. In that API, I think it is unsurprising that if the WeakRef died before the finalizer died, then the finalier would not die. But now with a FinalizationGroup as an aggregation, it seems like the same behaviour would happen. The idea with things like fetch() is that you fire away an operation that may be completed, and you just don't have that with GC.

DE: I think the practical effect of not having independent lifetimes, would be that the object has a reference to the backing store. If not, you can just hold the reference yourself.

MAH: I agree it's easy to do one on top of the other and not the opposite. We should try to at least be very clear and make sure users don’t expect to get the callback.

DE: I agree we need to follow up with improvements to the documentation.

KM: We should consider if there is a better way to name things, to make it clear that it is not going to behave the same way.

DE: I like that idea. Do you have ideas for a name?

KM: I don’t have any right now, but I’m happy to brainstorm.

WH: I'd like to re-raise the issue I raised yesterday. What is a WeakRef oblivious execution? I read the document and it says that all WeakRefs pointing to a specific object are null and whether the object is reachable.

SYG: Not reachable, but if the identity is observed.

WH: What does “there exists a valid future hypothetical WeakRef-oblivious execution with respect to obj that observes the Object value of obj” mean?

SYG: That means that if you continue with the evaluation, with the extra rule that all WeakRefs pointing to that particular object always returns null when the WeakRefs are accessed, …

WH: What does “identity gets observed” mean?

MM: A `===` observes an identity. A map lookup on a key observes the identity. The idea is that two objects that are otherwise identical will act in otherwise the same ways; they can still differ in identity. For example, executing a function does not observe identity, because you can have two functions with the same execution with different identity.

WH: I have an empty object, and a WeakRef pointing to the empty object. What observes the identity of that object?

MM:Triple equals, using it as a key in a map, etc.

WH: So if I get a hold of that object and then `===` it against some other object, that observes the object?

MM: That’s correct.

WH: In that case, the definition of liveness is completely broken. If you have a cycle of objects with weak references pointing to more than one member of that cycle, you can't collect that cycle given the definition you just stated.

SYG: People found this issue yesterday. Issue #179 On GitHub

KG: I have a proposed fix on GitHub.

WH: Ok.

DE: Any thoughts on the name FinalizationHandler or FinalizationRegistry?

SYG: Do people feel that if the handler to handle something dies, the thing that it is supposed to handle doesn't happen? Does that make more sense than if a FinalizationGroup dies?

JHD: It seems to me that it is a FinalizationGroup but it does not group finalizers.

DE: JHD, does FinalizationHandler solve this problem for you?

JHD: Yeah, I think that doesn’t imply the plurality.

MM: The registry, the idea that a handler being dereferenced causes something not to happen is unintuitive to me, but it makes more sense with a registry. If the registry disappears, the operational consequences of these registrations don’t happen. So I like FinalizationRegistry.

DE: Any concerns with moving forward with FinalizationRegistry? Not pushing for stage advancement?

KM: It sounds better.

JHD: I'm not sure I like FinalizationRegistry. I'll post more on GitHub.

### Conclusions

Retained consensus for independent lifetimes Contingent consensus on FinalizationRegistry, meaning barring feedback from folks on the exact name of FinalizationRegistry, implementations reserve the right to ship WeakRefs with the FinalizationRegistry name before the next meeting. Please give feedback on #180.

## Syntax for Explicitly this argument for Stage 1

Presenter: HE Shi-Jun aka John Hax (JHX)

- [proposal](https://github.com/gilbert/es-explicit-this)
- [slides](https://johnhax.net/2020/tc39-feb-this/slide)

JHX: (presents slides)

JHD: One of the earlier slides, you claimed it had a convoluted function that made it hard to realize what this was. In the common case you aren’t going to be writing code that is hard to glance at. In the uncommon case, you can write code that is hard to understand far outside the receiver.

JRL: Arguments, there is no bug if you call a function in the different forms (callback, method, etc), using the incorrect this is a bug with different forms.

JHD: You mean, like, `.map(parseInt)`, this doesn’t really fix that— In all languages you run into bugs if you use it wrong. There are so many ways that if you look at the code and can’t understand it, you will do it wrong. It seems to me that this feature does not actually solve the problem of making it easier to understand how to call a function. It only addresses a specific issue.

JHX: A single feature cannot fix everything, but it can provide a mechanism to improve, and can be used with other features, for example the thisArgumentExpected property, which I also want to submit, they can be used together to solve some problems.

MF: To be fair to this proposal, we do have precedent for a feature that does this same thing in the arguments space. While that doesn’t also solve everything, it is a step in that direction. Also while there are a lot of bad things that come from that, you do see code switching on function length.

JHD: Although there is a way if an argument is passed, there is no way to determine if this is implicitly or explicitly undefined.

BF: Even though we have .length, there are some bugs around default values in certain locations.

BF: I do like a lot of the motivations of this proposal, of trying to solve different kinds of cases. I don’t think that putting it on the syntax of this is the best way, but if all we are trying to do is solve for motivating use cases. Things like marking functions as methods rather than something constructable, and likewise things to be constructed and not called. Furthermore this proposal adds a lot of complexity to the syntax, and can be solved by adding a statement.

WH: You raised the issue of `Promise.reject` as a motivation for this feature. I agree `Promise.reject` is a nasty gotcha. However, this feature fails to do anything to solve that problem, so I don’t know why that is in the presentation. The problem that this proposal does solve is that there is only one way to refer to `this` in ECMAScript. Now we’d have two. And now we can rename `this` and change its value by assigning to it. I have yet to see a good motivation for doing this.

JHX: The issue of Promise.reject is in the second part, the next proposal.

WH: We have an ordering issue. You mentioned `Promise.reject` as motivating this proposal. Please explain if it motivates this proposal.

JHX: Why don't I finish the second part and then we can discuss.

JWK: Allowing destructuring on this binding might be new problems if a property is a method, you would lose the this binding.

JHX: It's possible, but you already can do it now. So I don't think it's adding any new requirements.

SYG: I agree with WH, it does not meet the bar for new syntax.

RPR: The queue is empty. Do you want to ask the question now or wait for the next proposal?

JHX: I’d like to continue to the slides for the next proposal.

RPR: Are you happy that we switch to a different agenda item. We will come back after the next one.

JHX: Ok.

RPR: Thank you.

## Remote plenaries and SLTG/incubator calls

Presenters: Shu-yu Guo (SYG) and Dan Ehrenberg (DE)

- [proposal](https://github.com/tc39/Reflector/issues/264#issuecomment-577316380)
- [slides](https://docs.google.com/presentation/d/1Y7KfzrWwSsHl6tUpPwm8g0DghmUPsM1PUD_umwuZHjQ/edit#slide=id.p)

SYG & DE: (presents slides)

JHD: When I’ve been on calls where quorum is an issue, typically its X members on a team, and there are some required number of members on the team, we count them. In the past, whether delegates or members, I don’t remember counting for quorum. Have we ever done that in the past? How would it be structured?

DE: I'm not aware of that kind of counting. I suggest that the calls be treated just like the in-person meetings.

MBS: In theory, quorum here, could be the subset of people with interest in a topic. We can say, for this topic, who are the delegates who want to participate, that group can become the group quorum is based around?

DE: I disagree with that proposal. This is plenary. This is not a way to set up smaller groups. SYG's half of the presentation is about that. So everyone who is interested in the consensus process is expected to join these calls.

IS: There is a need for a quorum among Ordinary Members the GA (see Bylaws 8.5), but in a TC there is no quorum, independently from the number of participants, every decision has to be a simple majority.

WH: You do have rules about notice for what decisions are up for a meeting.

DE: About ECMA having a 3 week deadline, TC39 uses a 10 day deadline, IS and I were talking about this. Given that we have been making decisions using a 10 day deadline, it makes sense to change the bylaws. I’m not proposing to weaken that.

IS: On the paper it is 3 weeks, 10 days in practice for TC it is ok, in my opinion it is not even necessary to change the bylaws. If TC39 finds that 10 days is better, then do it…

JHD: The reason I am asking is with 6 opportunities a year, there are 6 times I have to call in to impact a decision.

IS: Regarding the proposal for remote GAs my feeling is that we have to find out first what is practical and what not. First, we have to find out whether for 40-60 people, the conference call may work or not work. And how long it should be. The proposal had 2-3 hours in mind, which is tiring, but if we look at the timing of it, according to what other bodies do, that might be okay. But if we have participants from all the different major time zones (US East, US West, Europe, Asia Far East), someone is always suffering. So what I see in other organizations what they are doing is quite different. Then they are rotating from meeting to meeting. So these are the things, before making a final time zone decision, we have to hash out a little bit.

JHD: With 6 opportunities a year, that is how many times I have to make myself available. If there are 14-16 times a year that I have to make myself available, or risk making myself not available, then that has consequences of my not being available to push one way or another on proposals. The general concern I have is that people interested in these topics will miss them.

DE: This seems tied to the baking period.

JHD: Sometimes in the past, proposals have jumped multiple stages in one meeting. Often, people have expressed concern about high velocity advancement. They would prefer to wait for the next meeting for the next stage. Because we have 2 months between meetings, we have a default imposed buffer, where people have time to discuss issues on GitHub, etc. If we have the potential for advancement every 2 weeks, in the span of 2 months, the current period between meeting, there are more opportunities for advancement. You could push a proposal from stage 0 to stage 4 in that time!

DE: It might allow things to be more fluid, if we want to talk about proposals for limits then that would be interesting.

SYG: I think allowing for a higher velocity is a good thing. There are proposals that are small enough and scoped enough, it was uncontroversial enough to jump stages in plenary. I think that would be a desirable feature. Because the participants are the same, and are experts, if we feel it is moving too fast, we would put the breaks on it. I think the policy should be default fastest speed.

AKI: Nothing is going to make its way to Stage 4 in two months given that they need implementations.

JHD: Given that an npm package could be considered an implementation? And even getting to Stage 3 in that time is too fast.

DE: There is a lot we do leading up to stage 3 where we want to be sufficiently open to feedback.

JRL: Like the idea, but if we only have 1 hour meetings every couple weeks, how much time will be eaten by process discussion.

SYG: We will have to not schedule those for the calls.

JRL: Is that ok with ECMA?

SYG: That is a great question. That stuff can be streamlined.

IS: I think we would have to basically ……. They don’t have to go to the meeting, unless it is a crisis situation. Certainly it gives a lot more flexibility. (Note: not said at the meeting. About 4-5 years ago we had already the complaint at the TC39 meeting that we take up too much time with process and administrative tasks. For many participants that is annoying. So, we have generally decided to have minimal process and administration related discussions in the F2F TC39 meeting, but push those items to the GitHub Reflector. I think we have to go back to that situation).

JRL: Ok

MBS: Obviously we need to work out the process a bit more, there are things that relate to process or updates that we can save for the in person plenaries.

GHO: The option with 8 meetings with 3 hour calls, seems reasonable, more than that, more frequent would be more of a burden.

SYG: I would like to ask the room general opinions. Maybe hand raising?

WH: Let’s go through the comments first.

SYG: Sure.

MLS: 1 hour meeting - 1 item meeting, I’m not going to show up if I don’t care about it. Even if we have a 3-hour meeting, it's a 3-topic or 4-topic meeting, and I'm not going to attend if I'm not interested in the topics. I think it's important that all delegates have an understanding of what's going on. Do I like to travel? No. I think there is something to be said about getting together for several days, including side conversations.

SYG: It is not going to eliminate that.

MLS: well, we will still have 4, I’m concerned how this would work. I think there can be some difficulty, and it may change how we do things.

DE: Would you recommend that we limit the scope of what we discuss in these calls?

MLS: I have the same concern as JHD, having to be present for many calls in the year. It’s a catch-22. I don’t want the greater frequency/less time, I think it is important for all delegates to participate.

SFC: I agree with MLS.

KM: I like the idea of remote plenary. How would we pick a time zone? It seems like it would be unfair to people not in PST. It would be crappy to have to call in at 5 AM.

SYG: Choosing the time zones is going to be difficult. As someone who works with coworkers in Europe, there are precious few hours in the morning. I think PST mornings have a reasonable overlap.

DE: Kinda hard to be worse than the current state, at least if in Europe. I got a lot of pressure before the meeting to weigh towards California delegates. For timezones, similar thing. Lots of people think we should follow the tradition of following where people live.

MBS: In NodeJS we have a tool that will figure out times that have the highest probability of attendance. The Node TSC has a call every week that changes time. We’ve found that it is able to work. There is one meeting that is better for the pacific region, something like that might not scale to this meeting, but there is prior art.

WH: The more short meetings we have, the harder it is to schedule vacations around them. With six meetings a year it is practical, but it becomes impractical to attend all of them if they’re every couple weeks. That raises the problem of control of the agenda. We have a habit of adding things at the last minute, and saying it is fine as long as no one at the meeting objects. Problem is, if you have so many meetings that it is impossible to be present at all of them, then you will get into situations where decisions are reached without you being aware of them ahead of time. I would only support that if we are strict about adding items 10 days before the call so that you have a chance to say something before the call. For example, after this meeting, I will be in Africa for 2 weeks, without an internet connection.

SYG: That is a reasonable request. If the meetings are short, it seems less likely that last minute additions will happen, but it makes sense to tighten the schedule and planning. It seems there are folks who would be happy with shorter calls.

WH: The rule needs to be, we will not add last-minute agenda items, instead of today’s rule where we can add them as long as no one at the meeting objects.

SYG: I agree with that. Part of the reason is that the next chance we have is in two months, if we have more calls, the burden is lifted.

YSV: From my perspective, it would be better to have longer, less-frequent meetings, because I schedule review periods for my team. If they were more frequent, it would be harder to schedule review periods. It would be a much higher burden to handle that going forward. I would propose 5 (?) calls that are 5 hours long.

GHO: This opens the door for companies that are in the bay area to attend the remote plenary in together.

SYG: I don’t understand.

GHO: For example, Netflix, Salesforce to attend together physically present.

SYG: Is it ok if we also get a physical space for companies located close to use? I think it is OK if you want to do that. If what you are asking is if it official procedure that physical space is reserved.

GHO: I’m not asking if it is a requirement, but if it would be forbidden?

SYG: It doesn’t seem forbidden, if you can show up to someone’s office at 9AM.

MBS: I think this is a yes-and situation, considering co-located plenaries. I know how much work it is. If we have hubs for NY, SF, and Europe, maybe we can run co-located plenaries for them. It would limit the amount of travel required. I don’t think this would be perfect, but it would be less disruptive.

JHD: The downside is that if a meeting is not 100% remote, the inevitable outcome is that the remote experience degrades, whereas if the experience is equal to everyone, people have an incentive to make sure the A/V works, etc. If we have a remote plenary it would be a better experience if everyone is remote.

API: In my mind it couldn’t work if there were hub, because one region is always going to be out. If you shift to accommodate Europe, Asia is out.

KM: One thing that might be worthwhile, for the first year, cutting one meeting. If we make this change, if it flops, we only have 4 plenaries. We can try 5 in person plenaries, and one replaced with remotes.

DE: Would you be open to a trial run this year?

KM: Yeah.

SYG: I’m ok with a trial run this year.

MBS: Would we drop a meeting?

API: I have a suggestion, it’s my queue item.

MF: We could do these remote meetings at the same time as the in person, but not have stage advancement, have commitment from everyone on the call for stage advancement, but do the stage advancement at the next meeting, so that it doesn’t immediately start out moving the ability to attend.

SYG: I disagree with starting off with calls without stage advancement. The feedback thing could be handled in the context of the SLTG, which I haven't presented yet. If the trial run is to see if people can show up for a call, I hope people can do that.

KM: +1

YSV: +1

SYG: I would like to present the second part of the presentation. Is that OK?

(silence)

API: Are we planning on giving this more time?

SYG: I would like to.

SYG: I will continue with what I think the SLTG morphed into.

SYG: (continues presenting slides on incubator calls)

CM: I’m uncomfortable with getting squeezed by the timebox. I’m sympathetic to the travel burden issues and general concerns about cadence and productivity. I’m also concerned that a lot of what gets done at plenary is informal, in the hallways and at meals. You get to know your committee members, and dig into real depth into someone’s issue. A lot of that is a common understanding of each other's mindset. That understanding is a lot of what makes the committee tick successfully. Periodic SLTG is fine. We have a lot of individual champion groups, and folding that in is great. As far as I can tell remote conferencing for large groups is an unsolved problem and am generally skeptical.

YSV: We do still have the other 4 meetings. Many delegates don’t go to all six. By reducing the number, we might increase the number of delegates that go to the same meeting.

CM: If there are only 4 meetings, that makes it more likely that delegates attend all four? That's plausible. I’m just very concerned about any time you have delicate social dynamics disturbing it is risky.

SFC: I echo CM and MLS and WH. In general I am supportive of the idea of incubator calls. I also feel that alone solves a lot of the goals of remote plenaries, identifying the issues being raised. Even starting with just incubator calls, and seeing if it makes in person plenaries more efficient, I don’t see why you don’t need both. If it does make it more efficient, we could go to 4 in-person plenaries per year and not have remote plenaries.

DE: It sounds like incubator calls will start first, so we can see. I’m kind of skeptical of reducing plenary hours before making sure it works.

API: One potential baby step, why don’t we try it out first. Pick one of the in person meetings, and run it as a two location meeting. The point of doing two locations is to prevent travel burden. You still have to travel, you just might only have to travel for a subset of the meetings. It would be Asia and CA as a pair, or CA and NY as a pair. That might happen twice, or NY and EU as a pair. Trying if 30 people in a room talking to 30 people in a room to see if that fixes the social aspect.

SYG: Concrete steps to take from here. Trial running a remote meeting, should we do that this year?

MBS: We have to review the meetings for this year. Maybe the chair group can handle this.

API: I don’t see how we can change this year’s meetings. Dates have been posted and delegates (including myself) have booked travel already.

DE: We should work offline to have a proposal for this meeting.

GHO: That’s gonna be hard to schedule 2021, we are trying to host in 2021, if the dates will change we can’t commit to host until we know the exact dates.

JRL: We can keep the same dates.

DE: This sort of circularity is what I ran into for the past meetings.

MBS: If you are in the midst of getting a venue secured, it should be a pivot point.

DE: The other action point is incubator calls.

SYG: So what I said was, because of the novel chartering idea, at the end of the next meeting, I will ask for a subset of proposals at that meeting to participate in the incubator calls to benefit from the feedback. The expectation is that we debate the incubator calls post next meeting.

DE: Sounds like a good conclusion.

### Conclusion

For incubation calls, SYG will formally ask for participants and ask for a “charter” at the end of the next plenary meeting. Some folks from IRC expressed interest in starting the incubation calls before the next plenary, so SYG will make a Reflector thread after the meeting and ping some particular delegates to do a trial run before the next plenary.

MBS to follow up with a concrete proposal about remote plenaries from the chair group at the next TC39 meeting; DE to follow up with him

## function thisArgumentExpected property

Presenter: HE Shi-Jun aka John Hax (JHX)

- [proposal](https://github.com/gilbert/es-explicit-this)
- [slides](https://johnhax.net/2020/tc39-feb-this/slide)

JHX: (presents slides)

JHX: I want to respond to previous questions first. When function is passed to api that does not pass this, it could throw when function ref this value it causes late stage errors you cannot track where the cause of the failure is if you want to do better can we provide an option for that this is the thing allows us to mark the intention and nature of the function. It is possible to write functions to be called in different forms, but most functions do not need that.We need some way to mark the function for specific purpose.

JHX: (continues to present slides)

WH: Since you cannot refit any of the existing APIs that take callbacks, how useful would this be in practice?

JHX: Could we fix the existing APIs?

WH: It would be a breaking change.

JHX: In most cases you can’t fix it, but not every case. You can still write a better API in the future libraries and frameworks.

WH: People are going to continue using the existing APIs, and if you install a second copy of them, it will cause confusion.

JHX: Many people only use frameworks, rarely use low level APIs.

BF: It seems like this would need to affect any host provided API, not just through JavaScript. Which is both non-trivial, but also I suspect in the future new APIs may struggle to have this property consistently set, for what the intention is. That probably needs to be discussed later.

JHX: that would be discussed later. it is not very hard to define this argument. e.g. most methods on prototype should be true and all constructors it should be null.

BF: I do not believe that is the case, but we can discuss that later.

BF: This proposal is leading towards a much more rich code expectation/reflection, I don’t think it should be limited to the usage of this. You can’t tell if a thing is intended to be constructed. You can sometimes tell via prototype, but not 100%, this should be generalized.

JHX: There is a separate proposal for “is constructor”. This can be configured, it does not provide truth. The reflection provides something you can never change, but they are related.

RPR: 5 minutes left.

JHD: The question I put on the queue is Array.of, thisArgumentExpected => false, does not tell you if it can take one. thisArgumentExpected => true doesn’t tell you it is required, because you can omit it. For Stage 1, what problem is this solving. I see some use, .length,.name are properties. They are difficult to otherwise infer. Whether it uses this or not, it is similar to .length. I’m not clear on what this is solving. If the value is not going to help prevent errors, what is the problem we are going to be exploring in stage 1?

JHX: The feature is to mark the intention of api. Frameworks/libraries and language can use it for defensive programming, depends on author of library how it should use this information.

JHD: You are intending use cases where someone receives a function and dynamically decides whether to give it a receiver based on this data property?

JHX: For example, when you add an event listener, it can throw in an early stage to give better errors.

JRL: My queue item is incorrect, but there was talk before about an getApply operation that is separate from the get and apply that currently happen in `obj.foo()`. If we had a single mop operation that allowed you to detect this on the object side rather than the event listener side. I think we are approaching this from the wrong direction.

JHX: Maybe we can discuss this offline.

JRL: Happy to discuss on GitHub.

JHX: I would like to ask for Stage 1 for thisArgumentExpected.

MF: Can we phrase the proposal for stage 1 in terms of the goal instead of the solution.

JHD: To approve for stage 1, we need to agree on a problem. It’s not clear to me, and not to MF what the problem is exactly.

BFS: I think the problem being discussed here is the errors JHX was showing us, not the ability to patch, but to inspect the intended usage of functions.

MF: Sounds acceptable to me.

RPR: Are you happy with that?

JHX: Yes.

BFS: We are trying to find ways for reflection to allow people to understand intended usage of functions, particularly the `this` value.

JHD: Can I suggest calling it the receiver, to avoid overusing the word this? This seems like a better approach.

RPR: Are you happy with BFS definition of what to explore for stage 1?

JHX: Yes

SYG: This is similar to the other proposal I asked to be rebranded (ArrayBuffer.fillRandom). In order to get stage 1, we have ignored the presentation, which is mostly about solution. The only part we are getting to stage 1. I am completely uncomfortable without paring down the proposal. If people look at the proposal list and see thisArgumentExpected, that is not at all what reached stage 1.

MF: That's a common theme, with delegates overworking their Stage 1 request. And it's useful for the committee to see the solution they have in their mind, but I agree that from a marketing perspective, we need to be clear.

SYG: When people discuss this when they want to participate, if the explainer discusses this, I don’t think we should encourage the particular shape.

MF: I agree with you; it's that when we advance it, we should be clear what we're advancing.

JHD: The name of the repo, the explainer, and the list should match for stage 1.

MF: Might want to ask the delegate.

RPR: You want to get it into a better shape before getting to stage 1?

SYG: Yeah

JHX: Not sure what shape it should be like. I don’t understand that. It could be changed.

SYG: The concrete list is that the explainer does not propose that solution. Perhaps a separate document that is not on the README, that describes the solution. The proposal is not on that solution.

YSV: Maybe the title needs to change to: Reflecting `this` for methods.

SYG: Good suggestion.

RPR: That concludes `thisArgumentExpected`. Do you want to ask for stage 1 for explicit this?

JHX: Yes. I would like to ask for stage 1?

RPR: Any objections to stage 1?

(several objections)

RPR: Will they be provided?

CM: They have been provided. The proposal has something in it, but it hasn’t been characterized as to whether it is enough or not.

WH: This does not solve any problem and introduces a new way of saying `this` in the language, which is not a problem that we have. It is not that phrasing it in a different way would make it more acceptable, I don’t see this as solving a problem.

RPR: Thank you for your presentation JHX.

### Conclusion

- `thisArgumentExpected` proposal not advanced to stage 1, waiting for additional clarification of intent of proposal and renaming explainer.
- explicit this parameter - did not reach consensus for stage 1.

## Module attributes status update

Presenter: Myles Borins (MBS)

- [proposal](https://github.com/tc39/proposal-module-attributes)
- [slides](https://docs.google.com/presentation/d/1m6J33TeFHnkFOKXqBnkhS6RqBVsJV4n70X_j5ALI47g/edit)

MBS: (presents slides)

MBS: We are not looking for stage advancement, but are looking for stage advancement at the next meeting. We would like to hear any concerns.

BFS: I’m not comfortable to ship the unkeyed form. Using two keywords instead of one is vital. Having as type instead of as seems important for a variety of reasons. We don’t know if other environments are going to use this. It remains specific to web concerns. I would want to hear from other environments. If we do ship an unkeyed form, and need to upgrade to a keyed form. I am totally OK with it being a following for the keyed form.

DE: I thought that for one, going backwards, with the keyed/unkeyed form, I thought environments could be responsible for taking a string and considering it equivalent to the object. So I wonder if it would be okay to have both the string and the object literal being accepted.

BFS: I am not okay with that. It is a major interoperability concern.

DE: I care alot about interop. We can discuss this further. You are characterizing this as web specific, but this applies to any environment where you load modules based on mime type.

BFS: The type check I have no problems with. I don't like the framing of your security concerns. For example, I've talked with the WASI folks, and normally WASM should have no side-effects, but now that's no longer true with this proposal.

DE: I don’t know who claimed that. The WASM stuff is about it being equivalently powerful to JS. We’ve left whether WASM should be marked as an open question.

BFS: Let's just state that I don’t see it happening.

DE: If we went back, is this proposal ok to advance?

BFS: There are other concerns.

MBS: There are other potential environments, deno team specifically, a non browser env that loads urls. They don’t use mime types, they make claims of web compat being a high level goal of the runtime. They did express interest in this proposal.

BFS: But they want web compatibility.

MBS: With that in mind, if we want to have, in the case you mentioned, if the web is unable to support this without this mechanism.

BFS: That's not true, because there are out-of-band solutions. We can discuss offline.

MBS: Ok.

GCL: The web has this clear security concern. I understand why a solution to that is needed. It might even consider a JS convered to JSON or JSON to JS a feature. It might not even want this syntax to be legal in that context.

DE: It’s really hard to understand the question.

GCL: I meant, if you wrote a module in JSON, and I want to add logic to the things being exported, you re-write it in JavaScript, and now your consumers are not aware of the silent upgrade.

DE: That sounds like a good use case for a javascript module. It is really hard to talk generically about these theoretical environments.

GCL: Like CommonJS has done that for years.

DE: Ok, but in that case you would change the file extension.

GCL: Yeah, but the consumer doesn't necessarily type in the file extension. If the host didn't want to subscribe to the thing about not branding a module when you import/export it, how do you deal with this?

DE: I think if you want to use modules that would also work on the web, you would use a module with a JS mime type, and would have a module that redirects one to another.

KM: Isn’t this being forwarded to the host, so the host can error? This seems like a non problem for them.

MBS: Yes. If you wanted a special way to parse the JSON, if we had the object form, you could pass a reference to something. We are not making a claim as to how hosts would utilize this. That would be creating an expectation about how these are used, and would be consistent across these hosts. I want JS to be transferrable across these hosts.

MF: I wanted to voice my support for having import site metadata. This topic has come up in the past and we have discussed it, and we have given very poor examples of its use where out-of-band metadata would be more appropriate, such as subresource integrity. I have many use cases I can think of where import site metadata would be important. I would like to see this proposal include more. I would like to see them explore non-constants as well.

DE: “What?!” MF, it would be great if you could document these use cases in the repo.

MF: I would like to see this proposal.

MLS: Since we have a generalized constant form, we need a better keyword than as.

DE: Myles and I were debating whether to show the keyword bikeshedding slide. We agree and aren't sure what keyword to use.

KM: With would make more sense.

MLS: And if you have and object format, one could make the case that you always use the object if you are talking about the type.

MBS: I think that what we went back and forth with as a champion group, the most common use case is going to be type, if they are not using the other metadata, having the shorthand will be useful. It seems like that the committee might prefer more verbose format.

BFS: So, we brought it up last time, this really needs to have a clear story once you do get to stage 2, about what syncronization happens across call sites. MF brought up that subresource integrity would vary across call sites. I have concerns about call site variance.

DE: In the current spec outline, I was picturing an error at link time. When there is a module imported with non-identical attributes. For dynamic imports it would be up to the host. Looking forward to hearing what they are.

MBS: So to summarize, it sounds like we need to follow up with MF, BFS, and GCL.

DE: Does anyone have other concerns before stage 2?

(silence)

MBS: To clarify, not asking for stage 2. Thank you everyone.

### Conclusion

Not asking for stage advancement, will follow up with MF, BFS, GCL, RGN.

## Strings or symbols for Temporal.Calendar protocol

Presenter: Shane F. Carr (SFC)

- [proposal](https://github.com/tc39/proposal-temporal/issues/310)
- [slides](https://docs.google.com/presentation/d/1nx3Gq2orWoKYbjeQJuJQFEIh1Rk_bqf9Rb4o-D8I3x0/edit)
SFC: (presents slides, quickly).

SFC: Strings or symbols?

BFS: I think the variation you should look at is if these are intended for a single type, or a union type? Things like iterators or protocols attached to existing or other objects. For those, using a symbol prevents a clash. For timezones, if they are new objects, there doesn’t seem to be a problem with strings.

JRL: These objects, they are passed in as parameters to methods?

SFC: The temporal types will expect a timezone, and will expect them in a certain form.

JRL: I would use strings.

JHD: It seems that this should be a subclass that uses an internal slot, and use strings. The fact that we aren’t sticking them on symbol doesn’t mean we aren’t expanding the number of protocols. If it is a calendar it has a bunch of operations. It doesn’t seem like a protocol, we aren’t trying ot make Calendar-like things, just Calendars. Thus a subclass with an internal slot is the way we do that.

DE: You are misunderstanding this proposal. You can also use anything that conforms to the protocol and it will still work. It is orthogonal.

JHD: It must be a subclass.

DE: Let’s follow up in the issues. I thought we came to an agreement that it can be a subclass, but not must be. Even if it must be a subclass, it can be a symbol or string.

JHD: My other point stands, its not a bunch of protocols, it should be strings.

RBN: There may be existing implementations of timezones or libraries (moment) or existing calendar libraries that can have the same name functions that do different things. The symbol approach can be used to prevent collisions. The libraries can implement the symbols to interact with the new API.

DE: I think you need a shim.

RBN: One possibility is a string based method names, but a single symbol that returns this. Which is something we are considering doing this for the cancellable proposal.

SFC: That is an interesting idea, we can discuss that offline.

MM: I’m not understanding some depth here. My reaction is that this is normal object programming that would not justify a symbol. The thing that gives me pause was RBN’s comment. The cancellation tokens’ use of symbols was the right thing. I need to see what is how this is similar.

SFC: Similarity to?

MM: Similarity to symbol usage in the cancel token proposal.

SFC: I’m not familiar with that.

JRL: Cancellation protocol can be placed on generic objects, if we had a string key like .then, there would be collisions. This seems hyper specific, and doesn’t warrant symbols.

WH: Count me in the strings camp as well unless new information arises.

SFC: In general we have support for strings. We will follow up on the 1 symbol access thing.

### Conclusion

SFC will follow up with RBN regarding using a similar pattern to cancellation tokens, where one symbol is used, returning this.

General feeling to using strings in meeting.
