# July 23, 2020 Meeting Notes

-----
Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

**In-person attendees:**

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Yulia Startsev       | YSV            | Mozilla            |
| Waldemar Horwat      | WH             | Google             |
| Jordan Harband       | JHD            | invited expert     |
| Marja Hölttä         | MHA            | Google             |
| Chengzhong Wu        | CZW            | Alibaba            |
| Mark Cohen           | MPC            | PayPal             |
| Chip Morningstar     | CM             | Agoric             |
| Mark S. Miller       | MM             | Agoric             |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Dave Poole           | DMP            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Bradford C. Smith    | BSH            | Google             |
| Justin Ridgewell     | JRL            | Google             |
| Istvan Sebestyen     | IS             | Ecma               |
| Pieter Ouwerkerk     | POK            | Stripe/RunKit      |
| Ujjwal Sharma        | USA            | Igalia             |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Mary Marchini        | MAR            | Netflix            |
| SongYang Pu          | SYP            | Alibaba            |
| Devin Rousso         | DRO            | Apple              |
| John Hax             | JHX            |                    |
| Shane F. Carr        | SFC            | Google             |
| Rob Palmer           | RPR            | Bloomberg          |

## Examining Structural Racism in TC39

Presenter: Mark Cohen (MPC)

- [issue](https://github.com/tc39/Reflector/issues/305)
- [slides](https://docs.google.com/presentation/d/1i9-VCNi4KZNisntn9TTCFaZhrPwMQr4XuYEqHBg7pAE)

MPC: (presents slides)

LEO: Regarding outreach, I’d like to express how this is very positive, because I’ve seen, as an ESL speaker myself, it was basically led by DE and Carridy, we could give feedback on something we were working on, and also get feedback from other ESL speakers, from those who wouldn’t be able to participate in TC39 since it’s conducted in English. I have been also working on outreach work for communities in Brazil or people who speak Portugese, and for me it's just a generalization of the Brazilian community, yesterday we had a discussion about working on a new feature for the language, and we had feedback from a person about how to contribute and read the spec. I have a lot of feedback, and I can delay discussing this to later. This would improve representation at TC39.

AKI: To everyone: if you have questions about this type of things, don’t ask your friends of color, don’t put that burden on them, please come talk to me, or find other white folks doing anti-racist work. It's ok to be vulnerable when asking these questions. There is the #tc39-inclusion channel on freenode that you can join.

MPC: Thanks everyone, and please come to #tc39-inclusion to continue the discussion

## *continuation* Ergonomic brand checks for private fields for stage 3

Jordan Harband (JHD)

- JHX’s position: https://gist.github.com/hax/5e94c7959703ea95d4ff9c9deac12988
- (no slides)

JHD: JHX and I talked about this offline to discuss their objections.

JHX: My point is about the syntax. I don’t like the syntax, ???
At least, there is a line between two worlds. One is . which is used more statically, and now if we also want to overload "in"... It doesn't match the other two syntaxes. If we had reflection then we can overload all three, since then I think it would be ok.
I think that there is a connection between the reification proposal and this one. At least the syntax should be the same, and if there is no reification I cannot accept the overloaded "in", because it would just add new confusion by not following the pattern of the original "in", `[]` and `.`. If we eventually have the reification, I’m ok with the current syntax. I discussed this in our company and this is what we think about it.

DE: You talk about consistency, but I don't understand the inconsistency. The proposal of JHD seems in line with the decisions about private fields. For the thing about reification, I see how these proposal are related but I think this proposal makes sense on its own. Can you explain why the reification is a requirement?

JHX: I think we can check our documents about that. If we use the object access syntax, `#x in obj` should map to `obj[#x]` not `obj.#x`. We shouldn’t add new ad hoc rules; this is not a good thing.

JHD: There’s two worlds we’re talking about, one where the reification proposal doesn’t advance and one where it does. If it does advance, #x would be a private symbol (based on the current shape of that proposal), `obj[#x]` and `obj.#x` would work identically, and `#x in obj` would work as JHX expects. In that world, when reification happens, everything is that consistent.

JHD: If it *doesn’t* happen, what pieces of that world are missing, and what happens when a user runs into them? If they type `#x` by itself (not in front of `in`) or in square brackets, they’ll get a syntax error. Which seems consistent with other places in the language that have “missing pieces” that are errors.

JHD: If we don't do reification, than obj[#x] would just be a syntax error everywhere, and tools would just crash. It's not possible to get it wrong.
As for many things in the language, if a developer might expect something to work but then it just crashes early, it's something we have generally considered acceptable.

JHD: It might be different if we knew reification was never possible, in that world we’d have to address this problem now, but since work is being done on reification, it may not be a problem that needs to be solved.

JHD: The committee already made a choice about private static ???. You could make a table, see that there is a missing piece, try to use that and it just crashes. And that's something we have been considering acceptable.

JHX: When we overload the `.` the private fields use a very different matching/semantics (?) of the property.
We current don't have a simple line that if you only use the obj.#x and do not care about reification about #x it's ok. Now we overload the second one, the "in" syntax, which is much dynamic and it calls to reification. This does not only give you a syntax error, it makes the mental model more complex. This is the concern, and I think that we can not accept that.
If we reification there would still be a different line between the syntaxes, but this proposal is in the middle of them.

SYG: My understanding of the linked document is that it uses a farly pedantic understanding of the semantics of the "in" operator, where the LHS is any dynamic value.
In my experience, this is not the mental model of developers. You are not checking if that value exists in the object, you are checking if it exists as a *key*. This proposal is not at all inconsistent, it makes it *more* consistent because… obj.#x looks like a property access, and I feel like allowing it on the lhs of "in" would make it more consistent.

MM: I support this proposal, but I think that the discussion of the interaction with possible reified private names was too simplistic. If you'll be able to reify them, they wouldn't be private symbols because of security reasons.
It would be more something like a PrivateName object, which is a weakmap-like object. This proposal would preclude the #x syntax from being how you reify a PrivateName.
There’s a nice symmetry to this proposal: obj.foo asks obj about foo; obj.#foo asks #foo about the obj; "foo" in obj asks obj about foo, and #foo in obj asks #foo about obj. There is a left-right inversion in both cases.

The only cost of this proposal is that it prevents #foo as being the syntax for reification.

BFS: In particular, if on the LHS you just have the token "id", then the token "in" and then the token "obj", I would want computed accesso for that case. However, if you have a string literal on the lhs, you can then use dot access.

You can use it, but if you're using . access in particular--currently our private state only uses . access. You have to use .#id. There's an argument that we can state about computed access, but that's only if we have a proposal that can state that we can put in computed access.

I really think that this is a constraint on future proposals and not on the current one. I would like to understand the research that the current proposal has done to ensure that these positions are still valid for future proposals.

The objection isn't for the current proposal, but rather it creates requirements for future proposals. Although there's a valid objection, it is not actually on this proposal. It would be a burden on the ability to reify private names.

There is no clear reason why it clear rea

DE: maybe at this point summarize consistency argument:

Private fields and methods follow this consistent logic that the semantics are in parallel to ordinary properties and methods. In the syntax, they have a subset of the semantics. Cases with private fields or methods except for a few edge cases that includes weakmaps and ???

In general, the semantics are parallel to ordinary properties. This furthers that analogy, by continuing to be analogous to normali properties and it would make sense.
I don’t see a lack of consistency, I don’t think there is a blocking issue raised, I haven’t heard one.

JHD: I ask again for stage 3, I guess the only one blocking was JHX, what do you want to do for this proposal

JHX: I still think that it's a blocker issue. I maybe need to think about it more, and we'll see if I can change my idea.

DE: I think the way we work in tc39, we ask if somebody has a reason to block a proposal, we need to have reasons to block a proposal. JHX's concerns are based on misunderstandings, and I don't think our process has blocks without reasons that aren't justifiable.
I'm wondering how that affects it.

JHX: I think I have given the reason. I still think there are consistency problems, and what I’m asking for is if we have the reification, I’m OK with that, but if we don’t have reification, I don’t think we should overload `in` because it increases inconsistency.

DE: We discussed this at length in the core private fields proposal.

Many people with peop ???

JHX: It's not about that. If we already overload the dot, then at least there is a line: you only use the dot form.

This is a step from dot form and dynamic form with brackets
???

If we only overload one and not the other, then it doesn't match the existing syntax of . and []. It increases the mismatch.

DE: we have 3 different syntactic constructs than with the #
You can have # after . or in a field/method declaration. Putting it in "in", it just increases the consistency. It’s not specific to just after the doc because this is used in definitions

JHX: I’m not sure how it could increase that. I’m focusing on `in`, `.` and `[]`, it’s not about the dot, it’s about the bracket.

DE: the consistency argument of dot corresponding to brackets was raised in the private field proposal. The committee's current consensus for the stage 3 proposal is that we made the tradeoff that it's only permitted using dot access, not through square brackets. So that private name work in this way and they have a subset syntax and correspond well to JHD’s proposal.

JHD: In other words, all the things that are more advanced than this proposal have not considered what you have talked about as a mismatch. Myself and other folks consider this to increase consistency than decrease consistency, if there is a mismatch created by an earlier proposal it should be addressed by that proposal but in a world where that proposal exists this proposal makes sense.

Assuming that reification doesn't advance or advance in a way that doesn't make sense with this syntax for you, I think that it would be a loss for the language.

SYG: I have heard many counter arguments to the consistency concern that JHX has raised from me, DE and other folks.
I’m not really hearing why those counter arguments are not enough to cover why this is not enough and I will be disappointed to see this blocked because of that consistency argumrnt

I see sufficient care to address the point and to explain why it is infact consistent. We can disagree on that, but I’d like to see a counter to the counter arguments on why this is inconsistent.

MBS: Can we ask JHD to finalize this discussion?

JHD: I'd like to ask to extend the timebox of 5 minutes. This is a concern that could impact other proposals.

MBS: Unfortunately, we don’t have time to extend this, just one minute.

JHD: When somebody withholds consensus for a proposal,
especially when we are at stage 2, the reason for whitolding advancement usually needs to be something clear and actionable for the champion. I’d need to have something actually to do to solve your concerns.
I’m gonna ask again for stage 3, and if someone goes against I’d ask for actionable feedback.

JHD: Any objections?

[silence]

JHD: I’ll be happy to work with you JHX during stage 3.

### Conclusion/Resolution

- ~~Advance to stage 3?~~ Nope, challenged in IRC

## Async Context updates & for Stage 1

Chengzhong Wu (CZW)

- [proposal](https://github.com/legendecas/proposal-async-context)
- [slides](https://docs.google.com/presentation/d/1Ef2JI4ntkWd-M8fDqOGZGGh7CiPD05L39CZRSv1II_0/edit?usp=sharing)

CM: Can you describe what it is that this does, and how it does it? “The problem with being confused is that, first of all, you’re confused,” and I’m confused.

DE: I wanna suggest that people take a look at the readme and they described APIs and what APIs does

CZW: last time there was a major security issue with async hooks and the ability to run callbacks. Now, there are these objects which are async locals.

CM: Rather than explaining this in terms of how it differs from the previous proposal, let’s talk about it in its own right. First with an example of how it gets used?

CM: wanted a walkthrough of the examples

DE: sounds like a good plan to me to do that before going to queue items

[Presents slide 13]
https://docs.google.com/presentation/d/1Ef2JI4ntkWd-M8fDqOGZGGh7CiPD05L39CZRSv1II_0/edit#slide=id.g86607955ef_0_435

CZW: This is an example of a tracking server, with AsyncLocal stuff. Getting the request object for each incoming HTTP request. So, we do a lot of Async operations and here we can get the context from the async local. And there are no additional params to the function, so the request is lost.

[Presents slide 14]
https://docs.google.com/presentation/d/1Ef2JI4ntkWd-M8fDqOGZGGh7CiPD05L39CZRSv1II_0/edit#slide=id.g4446cf2007b006c1_0

We can get the exact initiating request from the database. So this can address the issue.

CM: In this case, when we call `getContext`, where does `getContext` get the context from? What asyncLocal object is being used? Is it a global variable? Where is the scoping control?

CZW: Each instance of asyncLocal has to declare their own instance, and the instances will not conflict with each other.

CM: So the context is being held in a variable inside the context.js module? I’m just trying to understand the scoping behavior. I’m not sure thrashing through this is the most productive use of the committee’s time.

CZW: So we in Node.js handle the request concurrently. One request may be active for a short time, and yield for the I/O operation. In the access of the request object, in the context for the global, they may conflict with each other because they are concurrently accessed. Async logic flows let each request store things.

CM: If I understand, previously we were keeping it in a global, and now we’re keeping it in a module scope var in context.js but there is nothing in the queryDatabase call. If someone else invokes import `queryDatabase`, whose execution is interleaved with this, there’s a hidden dep between db.js and context.js module and that ambient state is being passed between both implicitly.

CZW: The db.js has to explicitly depend on context.js to get the state passed through.

CM: gonna have to think about this one some more; I think there are some not very good engineering practices in this example, and it’s hard to separate those from the proposal itself. I’m not sure thrashing trying to understand the proposal in real time in front of everybody is worth their time.

WH: A lot of us are in the same boat.

GCL: If this helps for those of you who are confused about what async local storage is. In Node, we have Async hooks, which track when promises are created, resolved, or rejected. When the promise goes through fulfillment or rejection, and through the fulfillment queue. One level up abstraction of this is AsyncLocalStorage, where you store the state of these promises. Having an async local instance means that you must explicitly participate in holding this data and if you do async code, async stuff that access your data, ??? One of the big reasons this is useful is application performance management (APM) and tracking how resources are used and how long they are being used. Basically one of the big reasons for async hooks and async local storage is to track the reading of async files, HTTP requests, and then, recording that data. But one of the problems here is that, doing this without support from the engine, (or even with the support of the engine in the case of Node), when the abstraction has to be such that it is not part of the language itself, but some kind of sidechannel thing, results in a large amount of overhead and I think there was an issue in node.js that reported 99perc overhead when using async local storage. By adding this to the language itself, we can integrate these behaviors directly into the language itself and get rid of the overhead.

CM: That has a little bit of a "doctor it hurts when I do this" vibe. What you're saying is, it’s very expensive to do this thing you shouldn’t do. In the example in front of us here the database module is completely non reentrant in a dangerous way so I’m very concerned

DE: For the reasons Gus explained, I think this is an important problem space, I think this is a really important problem space and there were examples where people were saying “I don’t really understand where scopes are made…” The fact that you have these distinct AsyncLocal object seems like a good basis for figuring out these details. I’ve worked in other programming languages that have dynamically-scoped ??? and they seemed useful. We have a presentation of incumbent realms and better tracking about baseUrl and imports. I think the underlying primitive is really something like this. I know there are problems for us to work out, I know there are a lot of problems to solve and figure out before stage 2 but it seems to be a very important problem for us as a committee to solve.

SYG: I want to push back a little about what DE said about incumbents—I think there’s a big difference between fully defined semantics and exposing programmatic control with something similar to dynamic scoping, even when the concepts are similar.
I really could not understand the audio but one of the main thing is the removal of the async hook but the dynamic scoping thing remains and it is still not addressed, which was the main committee concern last time. And that’s it

CZW: AsyncLocal needs to be explicitly referenced to get a value or to change it. The dynamic scoping issue DE mentioned, ??? Dynamic scoping for the issue correctly ???

SYG: I did not understand, sorry

CZW: Explicitly reference to get the value and there is a better asynclocal ??? Has to be triggered by referencing a single instance. So ??? AsyncLocal provide any dynamic scoping (it was very difficult to understand with the audio feedback) That’s my point for the concern

MM: I will keep it short, because of sound issues my understanding is incomplete, but this still seems like dynamic scoping. The behavior of a callee depends on elements of a calling context that are not explicitly passed as calling arguments. And any such implicit context breaks many algebraic properties of the language. The question is, can a closure capture the dynamic context that is relevant at a given moment in time? Both the answer “yes” and “no” lead to unpleasant consequences. There is no good answer to the closure question when you have dynamic scoping. We have a large complex language that already has a complex computational model for people to form intuitions, and adding dynamic scoping to it pushed it too far. I am against seeing anything like this advance.

CZW: Async local storage can be treated as a value store, where the value has to explicitly reference the variable. It can also get and set the global. It is also possible to not set it in the global, I’m unsure what issue can be with asynclocal and async scoping. Since the async local has to be explicitly referenced in the code, So, I’m not sure if this can solve the concern. The async local itself has to be explicitly referenced, to set the value or get the value. It can be treated as an exclusion global.

MM: If I understand correctly, I do agree that that’s an improvement. The old proposal was more like Common Lisp dynamic variables. The new version is more like Scheme fluid variables. Both are examples of dynamic scoping but scheme’s was the cleaner approach. I appreciate that. But both still suffer from the fundamental problems of dynamic scoping, for example, the closure question.

GCL: When you say you have a problem with the intermediate closure, are you saying that even if it were available, it would not be used correctly?

MM: The second. Both answers are wrong, but in opposite ways. If you say the closure can’t capture the dynamic context, you have one set of problems, if it can, you have the opposite set of problems. The real problem is the introduction of dynamic context at all into a lexically scoped language.

GCL: Got it, thank you.

DRO: This is not an objection. It is a question. I am not sure how any of this is not already doable with existing language features. It seems like AsyncLocal is just a wrapper around a static global, that you can get and set with function wrappers in those specific circumstances. Is there anything special about AsyncLocal that isn’t just a wrapper around a value? I'm fine with introducing a language construct that it's already doable with other language constructs, and I just want to understand what makes this special.

CZW: The difference between asynclocal and a global is ??? the global may be overwritten by another js execution and they are interleaved in the async operations. They can be kept safely in the async local. It’s not accessible from another execution or another request—they are different for each run of the request. This is different from the global, which is global to every execution.

DRO: Is it accurate to say that the same asyncLocal variable effectively has multiple values depending on what async flow you are in?

CZW: Yes.

DRO: I think that is a potential point of massive confusion for developers.It breaks the expectation that one variable has one value. Now you can have an AsyncLocal, and in your debugger, you switch to one promise exec to another and something that should be global is now something completely different.

CZW: before the feature we had to implement the same function in the host nod.js and it is hard to have devtools understand that concept. It will be harder to implement without the concept existing in the language itself. This would expand the use-case by adding the ability to the language.

DRO: Right, but getting it into the language still requires that developers understand why it's there. There’s still that first part of explaining to developers this is one reference to multiple values.

CZW: this is not a new concept, there are many prior art on this , an??? Language like java, I’m believing it would be possible since there are many prior art examples for this

BFS: I have two responses. One, This can't really be done in existing language constructs, this requires some specific hooks. We had a normative PR for browsers needing for their realm. It’s not something realistic or something anyone would want to use.Two - per the multiple values thing. I am not entirely sure I agree with the statement that a variable must hold a single value. Variables change over time, they can change because of their closure, you see this happen all the time. That doesn’t seem out of line with existing things we’ve designed.

WH: I also had a hard time following the presentation due to audio quality issues. From what I think I understand, I have the same concerns about dynamic scoping that MM and SYG had. I can’t tell for sure, but this looks like Dynamic Scoping, and I would not like to see that in the language.

MBS: CM are you ok deferring your question?

CM: My topic entry in the queue, “thread local may be a good point of comparison”, captures what I had to say. Thread local is indeed a feature that many languages have, but it’s still a very bad idea. This proposal seems to have the analogous features with the analogous hazards.

MBS: Any final decision or consensus?

AKI: It seems like it.

MLS: I agree.

YSV: We have hitten an invariant here that was not written down. A later presentation will cover this.

### Conclusion/Resolution

- Not going to stage 1

## *continuation 2* Ergonomic brand checks for private fields for stage 3

JHX: I wasn’t able to respond earlier; I would like to object to this proposal in its current form, because it seems that obj[#x] will never happen. We can try to find alternatives in the future.

JHD: to summarize: JHX believes that there should be an invariant that `x in o` implies `o[x]`, and this proposal does not support that in its current form. I will be discussing this with JHX over the next two months, and will bring it back for discussion in September with a longer timebox.

### Conclusion/Resolution

- Does not yet advance; remains at stage 2
- No consensus yet on this invariant in either direction

## Flex Incubator Calls to weekly meetings

Leo Balter (LEO)

LEO: I’m proposing weekly incubator calls. SYG has been organizing these meetings, and I’d like to have more.
Agreement? objections?

YSV: I kind of am overburdened by meetings. Having them biweekly works for me, once a week would be hard.

SYG: Part of the intention of incubator calls is that because they are so focused on a particular topic, delegates shouldn't be responsible for attending every single one.

I understand that as implementers our nets are wider and feel more responsibility to attend all of them.

YSV: I feel like I have a responsibility to attend all of them, actually.

SYG: I understand that for myself too, as the V8 representative, as I should have some familiarity in what's going on since we'll eventually be going to implement that.
I want to understand how the other people in the room feel, because I would preferably not want you to feel that way.
I feel like delegates have different areas of interest

LEO: I think that incubator calls are good when we have very specific meetings for specific things.
Not just like having freq ad-hoc conversations, today let’s say today we have temporal and decorators topics, but I had a specific question about realms and we used the call to discuss that and define next steps.
While for some bigger topics we can have this, for other smaller topics or specific points incubator calls are very helpful, because it provides a space for these things.

I do not know want to make implementers feel to be overburdened byt hose calls and it could alleviate burden in tc39 meetings before going to the meetings

SYG: I want to apologize for how badly I’ve been scheduling the calls.

Specially for the last one where I misread my own doodle, it is not a skillset that I have to smoothly schedule things.

Having a weekly cadence sounds good to me, but I would like someone else to sign up as an additional facilitator to help with scheduling and running the calls.

LEO: I’m in this spot although I feel like I’m pretty bad to do this, I hope someone else could help here. I don't think that I would do a very good job, but I can try if there is noone else

MF: I think LEO might have misunderstood the written topic. What I’m suggesting is that we schedule those meetings in pre-dedicated timeslots, but not necessarily every week.

LEO: A fixed schedule still brings a problem regarding availability. If we have some cadence, we can expect people to be available.
YSV is basically saying that people try to make themselves available for these meetings.

SYG: I think you are still misunderstanding. I think that what MF is saying is if the list of what to discuss in incubator calls exceeded the time we have, then ???

MF: In practice it may be the same—if we have a weekly cadence, but no topics for that week, we’ll cancel it. I think we should take a more pessimistic approach where we assume no content and then fill it in as needed.

SYG: ??? that seems the most sensible point for us to fill in the schedule.

MBS: I have seen in many cases that if you keep up a regular cadence and then drop things if they are not needed, it ends up working better. If you have like one hour per week dedicated to this,... YSV, in your case if you know that there is this possibility at a fixed time every week and then it can be cancelled, ???
If we’re not proactively chartering off that time, it’s more likely not going to happen at all.

YSV: I guess I should also respond to that. I would be more open to this if there is demonstrated pressure to have more meetings rather than doing it preemptively. I would prefer not to have it aggressively scheduled and then cancelled, but I'm open if it *has* to be done on a weekly basis because we need it.

I’m also concerned that if we’re doing too much work between meetings that the meetings themselves will be overburdened.

LEO: I would just stay with the bi-weekly meetings. Incubator calls are really important for me and I would like to have more of them. Also, I'm not retracting what I said to SYG about helping facilitating.

SYG: would be much appreciated

YSV: side channel on IRC, I want these to be successful and I am not going to help as an implementer as much as I could if it is a weekly meeting. I'm not blocking this from being a weekly meeting.

LEO: I don't feel like we should feel pressured. The concerns are valid, and my goal here is to recognize that these meetings are great.
Let’s continue the biweekly and if we can in the future see that there is an overflow we can bring this back and discuss this again. I still want them to be weekly but I don’t want to put pressure.

DE: It's a lot of work to run these meetings: I run other meetings… Also, it’s very good to have volunteers to have co-facilitators, but I have been failing a bit on this one.
I wanted to help with this but I dind't have enough time. I want to disagree with the assertion that more work between meetings would increase the load of work we have during meetings; we have seen that it's the opposite.
Also, Implementers shouldn't feel pressured to come to every call outside the meetings. They already don't participate in many of those calls and we don't want to make anyone feel pressured to do so.

AKI: keeping with fortnightly meetings unless it becomes more important to switch to weekly

YSV: It sounds that I'm the only voice here saying that weekly is a problem. If people want to do it weekly, please go ahead.

LEO: you’re important for us so I don’t want to go forward if you don’t want to.

I'm not comfortable proposing a change if you are discomfortable with it. It's important for me that people are onboard, and I would prefer to wait.

AKI: We can discuss this in an issue further.

### Conclusion/Resolution

- Incubator calls remain bi-weekly

## Incubation call chartering

Presenter: Shu-yu Guo (SYG)

SYG: At the end of each plenary I call out a few proposals that could benefit from a higher frequency feedback loop. To either hear feedback or iterate feedback and bring it back to committee. First, overflow: the security model that we want JS to have. This is a conversation for plenary but it would be good to hash out preliminaries in a call first. That is overflow due to scheduling mishaps. Before I get into nominating specific proposals, with a fortnightly cadence, we usually have 5-6 slots depending if the plenaries are farther apart. So I think a comfortable number of proposals is probably 6. So with that, `Number.range` is probably the first one I’d like to have an incubator call for. There was a lot of back and forth between the iterator and iterable design. There were a lot of voices on either side, so that’d be a good thing to hash out. If the stakeholders for that are still on the call, champions, it would be good to get confirmation to participate with `Number.range`. I think await operations could also use some feedback given that there were some concerns about the DX improvement of these await ops, and if we should have them, if we should have something that’s just for Promise.all, or if we should not have them at all because maybe the DX thing is not as clear cut as we thought. So the second is await operations. The third one is Array.prototype.unique. Everyone seemed to agree from my reading of the room that having a unique operation on arrays would be useful, but disagreed on the particular semantic and especially the proposal as currently written. So that’d be a good item to get feedback on. Right now we have 4 items, to recap, security, Number.range, await operations, and Array.prototype.unique. Are there other proposals that people would like to discuss? I know LEO said earlier in the meeting that there are a bunch of proposals that he wanted to see discussed in the calls, do you have anything to say?

LEO: I cannot list them together here. I did not take note of them, but I also - if I remember correctly. It actually depends a lot on the actual champions for each proposal, if they feel comfortable as well being at the incubator calls.

RBU: For the record and tuple proposal, we already attended one for the deep path properties subsection. We have some initial conclusions from that, but I don't know if it’s worth attending a second round, I don’t know if it’d be useful if the same people attend.

SYG: If there's no additional point of request for feedback from the champions we don't need to revisit in so short a time, especially since they haven't come back to committee.

I think if there is a particular topic - because Records & Tuples are so big - if there’s a particular topic that the champions want to request feedback on, that’d be good, but otherwise I think records and tuples as a whole is probably not a good use for the calls.

RBU: I will take a look at our list of things that might need to be discussed and I will report to you.

SYG: Sounds good. I think the final one I'm on the fence about: does anyone feel like they would benefit from discussing slice notation? Are there topics of contention that we could hopefully get ahead of if we work them out in the incubator call? Here, unlike consensus, silence would mean “no”. So if no one feels strongly then we don’t need to charter that proposal.

LEO: It's hard for me to tell anything because I don't know if the champion of slice notation is here. If we want to tell anything else of the things that are overflowing from this meeting, I wonder if DE would like to bring some discussion for the pipeline operator-

DE: I don't know - I would be open to a discussion of the pipeline operator. I don't know how to work through the current thing. If people are interested in discussing that, the incubator call would be a good place.

SYG: The bar would be a concrete request for feedback. It sounds like we're still kind of unclear on what the concrete points of feedback are. Then I propose that we stick with the current 4, which is a lighter load than usual, which should be fine. To recap, those four are security, Number.range, await operations, and Array.prototype.unique. I will make an issue and then ping all the known stakeholders, and then if you’re interested please just add yourself to the issue. The process here is that by default, the times are 9-10 PT, which is a bit late for APAC, but for EMEA and the Americas that’s kind of the sweet in between time that’s reasonable for both European folks and American folks.

DE: Was there an idea to discuss the async local storage proposal?

SYG: No one proposed that, but if you are we do have two slots.

DE: Can we follow up offline? Is it ok to add these things between meetings, or do we have to decide now?

SYG: I’m totally fine if other folks are to have it be fully fleshed out - especially since we have free slots - so if we add async context, it’ll be scheduled after all the other ones chartered today, and pending if it would be agreed on.

DE: We'll follow up by email.

SYG: There's another one from MF on the JSON.parse proposal. I imagine the focus is the serialization part, not the deserialization.

MF: It could benefit from further specification of the exact mechanics of the deserialization part, too.

WH: I understand three of the proposals but not the fourth. You said there’s a proposal for discussing “security” without providing any details. What specifically about security would we be discussing?

SYG: It's not a specific proposal but a topic of discussion that came up in IRC/plenary. What should the security model of the JavaScript language - as we consider proposals and deliberate them, what should the security model of the language be? It's not a concrete proposal but I wanted to get some preliminary discussion started among stakeholders before we bring it to plenary.

WH: Okay thank you.

SYG: So we have two additions, one is kind of contingent on signing up of the stakeholders from async context, and the second one is JSON.parse. Are all the stakeholders of JSON.parse on board? If so it doesn’t have to be contingent, we can just have it. Is RGN here?

RGN: Yes, absolutely, sounds good.

SYG: So we have five confirmed ones and one we'll follow up on. Look out for the Github issue.

MM: I want to expand on the question that was answered between WH and SYG. A lot of what the security thing has been about and what I expect the incubator call to be about is an issue of terminology, as well as, of course, what we should do. Historically there has been a persistent misunderstanding on different groups using the word "security" to mean different things. The SES group, for example, has been shifted to the term "integrity" to avoid these misunderstandings. Part of the incubator call on this topic should be in fact to clarify “security” vs “integrity”, so at least within the context of these discussions, we know we’re meaning the same thing by the same words. This is a tricky issue.

SYG: Thank you. Ok, I think that's it. Be active on the Github issues if you're interested in any one of those six topics. Also there's a TC39 calendar, if you're not signed up, please do.

## ResizableArrayBuffer and GrowableSharedArrayBuffer for Stage 1

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/syg/proposal-resizablearraybuffer)
- [slides](https://docs.google.com/presentation/d/17QwbVQEYClzfCDGgWyZg0V_zTC1DWsNwPWvJPuXIqRg)

SYG: (presents slides)

WH: I had difficulty following because of some points of confusion so I may need to recalculate what I think based on the answers to a few clarifying questions I have queued up.

WH: You mentioned that WASM can grow buffers. Can it shrink them?

SYG: WASM cannot shrink them, no.

WH: You mentioned that auto length tracks the length automatically and detaches the buffer whenever a portion of the TypedArray would become out of bounds. Those are mutually exclusive - you can do one or the other, but you can’t do both, so I don’t understand how you’re doing this.

SYG: I think the miscommunication, the TypedArray does not detach the buffer, it acts as if the buffer were detached if due to a resize event any of its portion goes out of bounds.

WH: Yes, but then I don’t see how it can track the length, because whenever you shrink, some portion of a resized buffer will always go out-of-bounds so the TypedArray will get detached.

SYG: Ah, I see what your point is, yes. For auto length TypedArray views, if it is a non-zero offset, shrinks that shrink earlier than the non-zero offset detach it, any other shrinks don’t detach but just change the length. For fixed-length TypedArray views, I hope that there is no confusion.

WH: Yes. OK, thank you.

[folks just deleted several intervening items from the queue, so back to WH]

WH: I’m looking at it from a usability point of view, the devil is in the details. You said it’s not observable whether this is done by memory reallocations or just by remapping address space. That’s a nice theoretical view if you never care about performance, but for things like this it matters whether operations are constant time or linear time in the size of a buffer. So I see scripters discovering some things like, well, is this usable if you resize frequently or not? An implementation which takes linear time to resize will preclude a script from actually using the resize facility very often.

WH: A separate issue is what’s reasonable to ask for as the maximum length. If I ask for four gigabytes as the size limit, is that feasible or not? You’ll get Hyrum’s Law effects here.

SYG: Those are good concerns. To the first one, am I giving complexity guarantees. I haven’t given it much thought. Probably not. But I do expect the engines to align on the implementation strategy of in-place growth, for the same reason. So like you said, someone who is doing linear resizes will be at a competitive disadvantage. The as-ifness that I highlighted is to give a pass to things like WebGPU. If WebGPU vends you a resizable arraybuffer that is not created by the user, it is free to use this interface to explain certain things that the interface already allows to express. But like it will basically give you a differently-backed buffer, which happens to be, observably, outside of timing, resizable array buffers. I don’t expect there to be significantly different implementation strategies for user-created resizable buffers.

WH: What will the guidance be for specifying the maximum length? What will we tell users they can put in there in practice?

SYG: That’s also a good question, I don’t have a good answer for you now, I’d like to work with partners and engine folks in stage 2 to come up with a sensible thing to prescribe there.

WH: Thank you.

JHD: You said, I have a big arraybuffer and a TA looking at the end, and I shrink the buffer, and the TA is out of bounds.

SYG: It’s like a latch. It’s one-way. It's not going to become valid later.

JHD: The question is if I later grow the TA is it going to come back?

SYG: No

JHD: Ok, thank you. Next, definitely a stage 2 concern, not worth bikeshedding, but is there a reason that it has to be a global or could it be like Proxy.revocable?

SYG: I don't have an opinion here, I'm fine with whatever we reach consensus on.

LEO: I just think there - when we are talking about this, those seem like niche specific problems. I don’t have any specific objections, but out of the flexibility as we write ECMAScript, that’s not only implemented in web browsers, etc, I wonder if this can be something we consider implementation optional, as Intl is today. I’m not sure, I’ve been thinking about how I like the way JavaScript is implemented today in Moddable, and I’m not sure it requires features that seem too specific like this. I totally understand why it is important to release the feature natively.

SYG: If there's concrete pushback from the Moddable folks and engines with significantly different tradeoffs from the browser folks I would like to hear them. I would like to try for this to be not optional. I think we’ve already decided on a direction with ArrayBuffers that we do care about in-memory manipulation of binary data, and that has enabled whole classes of applications. I think that it directly led to WASM. If we didn't have that, we wouldn't have had asm.js and we wouldn't have WASM. I think more expressive buffers to enable more use cases is a direction we are set on, I don’t want this extra expressivity to be optional if we can help it. But I’m a realist, so if people actually cannot implement this, then we’ll talk about optionality. For GrowableSharedArrayBuffer, it will be the same as SharedArrayBuffer in terms of availability. It's behind COOP/COEP on the web or whatever flag it is on node.

LEO: Okay, thank you.

YSV: This is just a comment, we have no concerns about stage 1. Our experience with ArrayBuffers was very difficult. There is hesitation, but we are interested in ???.

SYG: 100%. This design already looks pretty different from my initial design after talking to the Chrome security engineers and the people who architected the arraybuffer stuff in V8.
I expect some worry in all the other engines given how battle-hardened these paths are. I want to talk about this with all the other engines, basically. I'm hoping the implementation plan I laid out, if we can make these separate code paths, that will lessen a lot of the worries. But yeah, the worry is there, it’s not just for Firefox, it’s also for chrome.

YSV: I would love to continue that conversation as this moves forward.

PHE: I’m really pleased to see this topic being addressed. It solves a problem for low memory devices. I personally ran into a case this week where we would need resizable array buffers. I understand why you are focused on performance and resize-in-place. To complete the picture, from our perspective, we would never do that. Our array-buffers are typically stored in relocatable memory so that we can compact. We don't even have an MMU to fragment. And so, that’s fine, that will work with this proposal, in what you’ve said I’ve heard you say that the specification wouldn’t require specific requirements to resize in place, and I think that intent is good, I only bring this up to make sure we keep that up through the process. I think there is more work to be done on views, we use data views heavily and they have - it is a fair question to ask if they should have an auto-tracking behavior, it doesn’t have to be addressed here. There’s also an interesting question about TypedArray’s subArray method, which could arguably also take up an auto-tracking behavior, but since the start and end parameters are optional, you couldn’t take the strategy laid out in the constructor.

SYG: Thank you for the comment, these are great points. I would like to work with you, or anyone else. You have a different implementation constraint. I would love to work with you. I do admit that I did not provide a complete thinking through of all the views, and there’s no way we can advance without that.

JRL: Clarifying question from the earlier topics on TypedArray that’s pointing at a ResizableArrayBuffer. You’ve said that if the TypedArray were ??? by something, and then if the ResizableArrayBuffer were to shrink, but earlier you said that ResizableArrayBuffers can’t shrink, so I’m confused as to how you get an out-of-bounds here.

SYG: ResizableArrayBUffers can shrink. THe idea is that you don't have to decommit your physical pages when you shrink, you just change the length or something. I think the shrinking is important to explain the repointing use case that WebGPU has, but I'm not putting a particular implementation constraint. Notably here, you can throw OOMs on both grows and shrinks. So if you choose to implement resize shrinking via realloc or something, and that throws for some reason, you’re allowed to propagate that up to the user. I think that is important but if folks feel strongly about shrinking about non-shared buffers I hope you reach out.

MLS: SYG, you specified the current and max length. Do you see the max as something the engine must honor in the future? Or is it just kind of like an upper bound ??? request, and you throw an OOM if you can’t honor it?

SYG: Are you asking what the pedantic normative thing should be or what I think will happen in practice?

MLS: The pedantic normative.

SYG: The pedantic normative thing is that I want it to be completely up to the host. Because both the resize and the constructor can throw, one strategy can be that you optimistically agree to any byte length. The other end could be you try to commit everything up front and resize never throws. But I want to give implementations the full spectrum of choices here.

MLS: The reason I ask is that we saw early on with a lot of WASM programs, they just ask for a full 32-bit address space, which is counterproductive to other running WASM processes. So, I'm wondering if the API could encourage programs to be responsible in their requests.

SYG: That feels like maybe one of the things that we as browser implementers could coordinate in a non-normative way in the same way that we coordinated not diverging too badly on WeakRefs and Finalizers.

MLS: Yeah, that is fine.

GCL: Love this proposal. I want to say - wherever this proposal goes in the future, should still try to fix the WASM detached buffer problem. To make sure that we are up front about that.

SYG: For sure, and I’m in regular discussion about this with the emscripten team, the WASM tooling team at Google, as well as the WASM standards team.

SYG: Ok, so do I have Stage 1?

AKI: Do we have consensus on Stage 1?

WH: I think you do!

### Conclusion/Resolution

- Stage 1!

## Documenting invariants

Presenter: Yulia Startsev (YSV)

- [repo](https://github.com/codehag/documenting-invariants)
- [slides](https://docs.google.com/presentation/d/1a9-E87grtSbFGTHMfEJJoVjbHbSTe2PH_ed8StssZ_w)

YSV: (presents slides)

JHD: I'm very strongly in support for documenting these. There are a lot of invariants that are not documented, and they shouldn't be broken just because there isn't the person advocating for them during the meeting. It will be useful for the reverse. There are a lot of people who believe there is an invariant, but there isn’t one. Thank you YSV for doing this work.

YSV: I'm happy to hear that.

WH: I like documenting these. I’m curious what your notion of an invariant is. Some things I would consider an invariant is that the grammar be LR(1.5), aside from a few trivial adjustments for readability. Another invariant would be that there is no place in the language where both a division and a regular expression are allowed at the same time. And I hope it’s clear why you would want to enforce such an invariant. Would such things be candidates for the invariants list, or would they be too low-level?

YSV: Thank you for bringing that up. I would consider that a "should" based on the arguments you made in the issue. It seems like in the issue, it seemed flexible to do something different here. But because the spec is currently written in that way, I think it would be useful to document that. You mentioned that there are a few places where this isn’t true, so it would fit into a “should” and then we’d have an allowlist for the APIs that don’t conform to that invariant.

WH: I think I wasn't clear. The spec conforms to the invariants, but you have to transform the spec slightly to get that invariant. So it’s not a “should”, I’d consider it a “must”.

YSV: I think that can be considered an invariant, especially if you are reading the spec and making decisions on the basis of it. And I would say that you have done that, especially given that you’ve opened issues. So that would be a candidate for an invariant. As I mentioned, it can be anything that is true about the specification now, or something that was true, that was changed, we recognized it was an issue, and going forward we want to maintain that invariant. So both can definitely be candidates for invariants.

WH: Ok, thank you.

SYG: I think you asked for clear dangers, we should be conscious about what we consider an invariant vs emergent behavior. There are properties that are true today in an invariant manner that are true of the spec that are not worth documenting. It seems very easy to backport rationale. If you put a property in front of someone, and ask someone to come up with a reason, they can come up with a reason.

YSV: That’s a very good point.

SYG: So I think the rationale point is really key here, we have to be really careful.

YSV: I consider the rationale to be crucial to this, and hope that we can add rationale for the invariants we already have. One of the reasons why I want us to start having this discussion is so that we do start talking about the invariants that we are bringing up to the committee. So that either- and I think we will have to come up with a process for rejected invariants that people deem important that are not held up by the committee, those should be recorded as well. That is a good point. I don’t have an idea yet about how we are going to do that.

SYG: Thanks

BFS: I’d second YSV’s point about personal vs plenary acceptance, we can state many things about emergent behavior, but I think no matter what we do, people will hold a personal level for invariants, but I think this is more about doing this as a community at the plenary level. So even we one of us considers something emergent, others may find it a personal invariant that they don’t wish to be broken.

SYG: I think that makes sense. I think the plenary thing is important. I guess I was warning against- that people approach this in good faith and not try to pursue personal invariants by backporting rationale.

SYG: What is your envisioned process for relaxing must/must-not invariants?
I’ll give you an example, a couple years ago I think we could have easily said something like "shared memory will not happen", and then the market changed and we decided to have this tradeoff.

YSV: Do you happen to remember what the rationale for excluding that was?

SYG: Channels, timers, like MM was saying algebraic properties, I’ll let other people take over.

WH: I was one of the people trying to exclude shared memory because it provides a very high resolution timer.

YSV: I see.

MM: There were many reasons not to do shared memory. BE famously said this was an “over my dead body” issue, I was taking a similar position, not just for a timing issue, but prior to shared memory, we had a very robust concurrency model, communicating event loop concurrency, where different agents are only asynchronously coupled to each other. It was exactly a irresistable market pressure---the desire to run games written in C in the browser---that forced our hand.

YSV: I see. In the “documenting invariants” repository, there is a section called "abandoned invariants", and what I'd hope to do more in the section is to document what has been the process to abandon them. My imagined process, which is different from the one we may come to, is one similar to the process to introduce an invariant. To remove an invariant, you would bring a normative PR and challenge the rationale based on this set of conditions. Not sure yet if that will be how it is in practice.

BFS: Sure, we actually had another example of what we considered as - we haven’t adopted invariants as a plenary - when we passed through the hashbang grammar, there was an invariant that you could append comments safely at the beginning of any source text that was already valid. From there, we had a discussion about the rationale, which was there, to prepend license comments, was of higher priority than the ability to integrate with shell scripts. And so we’ve had this kind of back and forth before, I think we can just set up a model similar to that and look back at all those examples similar to that where we’ve done that in the past.

YSV: I agree with that, it is a good idea.

SYG: My response to what YSV said was that I'm mainly worried about extra-process bureaucracy here. In those cases it usually behooves us to move faster. And if extra bureaucracy means we spend an extra year relaxing an invariant and then move on with the feature, that might be bad.

YSV: That's a good point, and now that I'm thinking about it I'm wondering if it wouldn't be appropriate for an invariant to be relaxed in the process of moving forward a proposal.

THe process that I’m seeing right now is that we have a number of invariants that aren’t written down. We need to write them down. But I think it could be that a proposal itself is evidence that an invariant should be relaxed. I’m not too sure yet all of my thoughts about this.

SYG: Thanks, I do agree that it should be important to make implicit invariants explicit.

RKG: So there’s the long ongoing desire to document rationale and the way that we do things, and this is I guess based on EIM invariants being very useful to broaden and codify. But of course there’s a lot of things that we seek to uphold that - you wouldn’t be able to call the syntax budget an invariant in any meaningful way. It's curious like… I'm guessing that the boundary is fairly fuzzy. This connects to the question of emergence as well, because there’s certainly going to be concerns that become more or less meaningful in a given context or a given time. This is exclusively for something that's solid and clear and defensible enough to be put in spec text, right?

YSV: Yes. I guess you are also referring to the rationale project from last year.

RKG: Right.

YSV: Thank you for bringing that up, that’s another case of me trying to make sure we’re writing things down. One way that you could phrase this is that this is a more immediate goal, and it doesn't exclude from the work of writing down the irrationale. THat work would still be ongoing, to help us understand our goals, I think the rationale project is useful for that, whereas this is for understanding how we constrain our design.

YSV: (resumes presenting slides at “Addendum: Clarifying the process”)

YSV: I would like to ask for the temperature of the room on this.

AKI: You are always so thoughtful about this kind of things that I'm sure that many would like to read this before making a final decision.

CM: I just want to endorse your proposal YSV, in the whole vein of documenting our invariants, these are sort of meta-invariants, and I like that we have this quite a bit.

WH: I like the idea, I don’t agree with the content. This is too strict and it’s different from what we’ve actually been doing in practice. We’ve blocked things from stage 1 for stage 2 reasons if we really thought they wouldn’t have much of a chance to advance past stage 2. But that wouldn’t be allowed under this proposal, so we wouldn’t be able to do that.

YSV: That's good feedback. Do you have other comments about the other stages?

WH: I have had only a few minutes to look at this document so far. I would not be okay with this becoming the official policy at the moment.

YSV: Just to make it clear, the feedback I'm looking for is not if this should become the new document. It's more about if people are open to iterate on this and modifying the process document.

WH: Given that clarification, sounds good.

MM: I just wanted to speak in support of this, I was about to say more but the back-and-forth between YSV and WH clarified everything I was going to say, so I’ll just say I support it.

SYG: My question was clarified as well: you want the temperature check to see if folks are open to reviewing.

YSV: Yes, and with the idea that if you’re up for reviewing, we would be open to adding something to this effect.

SYG: I am in support of that, though I’m not sure on what timeline you’re looking for. This needs discussion with other web standards folks at Google for instance, to see if this is a direction that’s desirable for TC39 with respect to the rest of the web standards world.

YSV: I'll make this available tonight so that you can do that at your pleasure, and I will tell you when I bring it back.

JHX: I want to show my support of this. I think this is really helpful to the newcomers. And I feel in previous meetings some proposals advance under a different standard, which is very confusing. So I think that this is very helpful.

MF: You said that you’d like this to be made public soon. I’m all for doing work in a publicly visible way, but I don’t think I want to have the feedback discussion and everything- I don’t want to have public participation in that. What venue are we going to be using for feedback?

YSV: I wasn’t aware that it would be an issue. I was thinking to do it as a PR, which would be public. Alternatively what I could do is send each person a copy so that they could give me feedback, or aggregate anonymous feedback, or I can share this document and you can leave your comments on there.

MF: I would prefer a form of feedback where we could collaborate. Something like a PR but in a private repo under the tc39 org so that all delegates could participate.

YSV: Would it make sense then for me to do this on the reflector temporarily, and then once we’re happy with the words, we can move it somewhere else?

MF: It works for me, I wonder if anyone else has some ideas.

MBS: I wanted to clarify if the concern is with the conversation happening where it can happen publically, If we are looking at doing this privately, I think there is a tiny bit of a gray area where we find ourselves in where we would be mostly talking about process, but if we end up talking about technical things, I’d like to make sure we’re consistent. So I wanted to clarify if the concern was about the conversation being private, or it being read publicly.

MF: My concern was with general public contribution. I don’t think it is necessary. I am fine with the general public being able to view our conversation.

YSV: That is a good clarification, thank you. I will think about this. I’ll post this on the reflector.

Remaining queue:

1. Reply: We could limit participation in a PR by locking it (MBS)
2. New Topic: where is its home? (AKI)

### Conclusion/Resolution

- We will start work on documenting invariants.
- We will start iterating on the process documentation on a private Github repository.

## Many specific invariants to consider

Mark S. Miller (MM)

- [slides](https://github.com/tc39/agendas/raw/master/2020/07-slides-some-invariants.pdf)

JHD: The typeof ===/== invariant. People have a wide assumption that they are interchangable. Eslint has the eqeqeq rule, it doesn’t autofix. I think it is an important invariant to maintain.

MM:

BFS: There is ecosystem reliance on emergent behavior as if it were an invariant. Particularly minifiers. I think it would be important to evaluate the current ecosystem tooling. While we may want to keep invariant themselves somewhat private while we discuss them, we need to do an ecosystem audit before add invariants for operators in particular.

JHD: There are a lot of places they are accessed on things that aren’t the receiver, every time a regex is passed into a string for example.

MM: If there are enough of them, it would mean it isn’t an invariant.

JHD: I don’t think it is invariant at all. I would love to discuss offline.
