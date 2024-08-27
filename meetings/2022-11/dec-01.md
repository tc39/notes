# 1 December, 2022 Meeting Notes

-----

**Remote attendees:**

```text
| Name                 | Abbreviation  | Organization       | Location  |
| -------------------- | ------------- | ------------------ | --------- |
| Waldemar Horwat      | WH            | Google             | Remote    |
| Bradford C. Smith    | BSH           | Google             | Remote    |
| Shu-yu Guo           | SYG           | Google             | Remote    |
| Michael Saboff       | MLS           | Apple              | Remote    |
| Alex Vincent         | AVT           | Invited Expert     | Remote    |
| Jordan Harband       | JHD           | Invited Expert     | Remote    |
| Justin Ridgewell     | JRL           | Vercel             | Remote    |
| Ross Kirsling        | RKG           | Sony               | Remote    |
| Mathieu Hofman       | MAH           | Agoric             | In-Person |
| Joyee Cheung         | JCG           | Igalia             | In-person |
| Nicolò Ribaudo       | NRO           | Igalia             | In-Person |
| Romulo Cintra        | RCA           | Igalia             | In-person |
| Ujjwal Sharma        | USA           | Igalia             | In-person |
| Andreu Botella       | ABO           | Igalia             | In-person |
| Luca Casonato        | LCA           | Deno               | In-Person |
| Ashley Claymore      | ACE           | Bloomberg          | In-person |
| Robert Pamely        | RPY           | Bloomberg          | In-person |
| Rob Palmer           | RPR           | Bloomberg          | In-person |
| Andrew Paprocki      | AMP           | Bloomberg          | In-person |
| Jason Williams       | JWS           | Bloomberg          | In-person |
| Linus Groh           | LGH           | SerenityOS         | In-person |
| Christian Ulbrich    | CHU           | Zalari             | In-person |
| Tom Kopp             | TKP           | Zalari             | In-person |
| Yulia Startsev       | YSV           | Mozilla            | In-person |
| Eemeli Aro           | EAO           | Mozilla            | In-person |
| Daniel Minor         | DLM           | Mozilla            | In-person |
| Patrick Soquet       | PST           | Moddable           | In-person |
| Istvan Sebestyen     | IS            | Ecma               | Remote    |
| Daniel Rosenwasser   | DRR           | Microsoft          | Remote    |
| Leo Balter           | LEO           | Salesforce         | Remote    |
| Frank Yung-Fong Tang | FYT           | Google             | Remote    |
| Caridy Patiño        | CP            | Salesforce         | Remote    |
```

## Iterator Helpers for Stage 3

Presenter: Michael Ficarra (MF)

- proposal

- [slides](https://docs.google.com/presentation/d/1npPCpovE6NtFPFvagaq8eoX2VLXM6Tac_fl--7_NrzY/) \

MF: Okay. well, like yesterday, my title slide, I forgot to change, but this is for stage three as it says in the agenda, this is not just an update. So this is iterator helpers. You’ve seen this quite a lot recently. At the last meeting we discussed some final tweaks we want to make before stage 3, which we have since made. So I'm going to go over them. The first one, we discussed this a couple times with never any strong opinion given by committee and kind of some mixed feedback from the community as well. Given that, I ended up making what I think is a really uncontroversial call and merging this suggestion, which was to add a counter to all of the Array-equivalent methods that we have. So this would be like, reduce and map and them. You'll see in the summary slide of the end which ones have a counter. I'm calling it a counter not index because that was also brought up during the meetings, but I don't think that's really observable, that's more like a documentation thing.

MF: We also talked about the possible web compatibility issue with toStringTag. And we decided to ditch the more complicated accessor solution that does a bunch of safety checks, and just make it a writable property. So we closed the accessor one and merged the writeability one.

MF: We discussed possible solutions to the desire of having all of the intrinsics reachable from transitive member access from the global and our resolution was it was okay to just document an expression to produce those intrinsics instead of including new properties that we don’t really care to be there. So that one has been rejected.

MF: And this one, I think, is the biggest one and the one that required the most careful review, which is how flatMap works with the return value of its callback for both the sync and async versions. So the sync version I think is pretty straightforward. We do these steps in order: if flatMap returns something that is not an object, we throw. If it is a sync iterable, we just get an iterator and iterate that. And if it has a next property, we assume it's an iterator. For everything else we throw. So this now accepts iterable values and iterators. For async flatMap, it's a little bit more complicated. So for an object, we still throw. For things that are async iterable, we can support that just fine as well. We would call it and just async iterate it. For things that are not async iterable but are sync iterable, that is also fine. We call it and we convert the iterator to an async iterator and then just do async iteration. The kind of problematic one is when it has a callable next property. We don't know whether that is meant to be a sync iterator or an async iterator. The solution we've gone with is just to assume it is an async iterator. And for all other values we throw. So now both of these methods support both iterators and iterables, and they're both aligned with the respective from method, the static on the constructor. And that's the solution we chose because we can't distinguish them from the string property “next”, which is used in both cases. It's not clearly marked which one it is. So we felt it was the least problematic solution there. Note that strings, importantly, are not iterated, and if there are other iterable primitives, those will not be iterated as well. So, if someone puts Symbol.iterator on, like Number.prototype, that will not be iterated, like a primitive. When we add Tuples we’ll need to add support for them in a similar exception. So depending on the order of those proposals landing, probably this one first, we'll need to include support for the other.

MF: Because of the solution we chose in flatMap, there's a possible kind of weirdness that shows up, which I didn't see as a problem but worth mentioning. If you produce an async iterator from an async iterator of promises, you will get a thing that you couldn't have before, which is if you do a for await over the result, you can observe that there are promises as the result of the async iterator that was produced. I don't think that that's a problem. It's just a little bit weird. Another thing that KG had suggested, that we decided was too weird to do is technically we could try to distinguish via just the next method whether this is an async iterator or sync iterator by doing this little trick where we try awaiting it and if it returns the exact same reference, then it's an async iterator and if it doesn't, then it's a sync iterator. I think that's just a little weird, but it is an option. If we really do hate the option used for async flatMap assuming iterators are async, we can do that. So, with all that said, this was the pull request and we merged it.

MF: We'd also discussed this very niche case: interleaved calls to return and next. After a bunch of discussion, we didn't really have much of a decision at the end of the last plenary. We had discussed possibly trying to align the limitations of these iterator helpers with the limitations of async generators. And so basically, they should be treated in the same way, there should be a similar mental model. That is pretty much how the discussion played out online as well, when we talk about this issue further and that's what we decided: that we should have that analogy be applicable. Because of that, we've rejected this suggestion to make the resulting iterators slightly more flexible in their behavior. There would be very, very few people who would actually be able to observe this, and you'd have to be using manually implemented iterators yourself.

MF: So, this is the result at the end. This is everything that's in the proposal. You can see that we have the static from methods and then all similar prototype methods on each. toAsync on Iterator.prototype being the only one that differs. You can see for each of the callbacks that are now passed the counter, I just called them -WithCounter here. And that's everything. So I think there's one other noteworthy change, or maybe more we'll see.

MF: So, the is a change we made without really any other precedent in the language elsewhere. But I think it's really a positive thin. When you pass a callback, for instance,if you look on the right column, these callbacks passed to the prototype methods, they're expected to return promises. But this change allows them to also return values that are not promises. And it would be like a Promise.resolve with that value. So if we wanted to filter with a predicate that we would have used for filtering with Iterator.prototyp,e that's just fine, and it just uses the primitive itself. So, I think that's good. It reduces the number of ticks, it is technically observable, if you observe the number of ticks, but okay, so who cares. I think it's a positive change.

MF: This is kind of an infrastructure change. This was all described in the proposal’s spec before, and we separated it out. So now we have a pull request for all of the infrastructure for what a built-in async function is in 262. So, both this proposal and `Array.fromAsync` needed the same infrastructure underneath, so we combined them and refined them and I think that this pull request is ready to go. So, if you're looking for "where's all these things that were in there last time?", that change is because it's all been pulled into this 262 PR since it really isn't specific to iterator helpers. It just needs to be there. On a related note, we have one new open question, which is about built-in async methods. Currently I believe they are specified to have a prototype of Function.prototype. Should their prototype be AsyncFunction.prototype? It seems like an uncontroversial suggestion but it's actually, I think not, appropriate because there's really, no difference between (in the spec) specifying a built-in function that always returns a promise, which we have many of, versus specifying an async built-in function. It's really just a spec convenience for how we write it and it's an editorial decision really whether we choose one or the other and I don't think that that editorial decision should have these normative implications about what the prototype is. I'm make that argument in this thread, which I've pasted here, I think there's a similarity as well between spec things like this, and with the actual ecmascript source code where you can have functions and you can have async functions, and the functions can always return promises, but it doesn't change the prototype. And is there any real use to AsyncFunction.prototype anyway? It doesn't even matter. So I would prefer to reject the suggestion and just have all built-in methods, whether async built-in methods or not, extend from Function.prototype. Well, that is the question. I don't think it's a super important question to answer today. It does have to be answered before, obviously before we do implementation and stuff, but that's everything that's happened and I would like to ask for stage 3. I'm sure there will be discussion to be had first.

\
BT: Yes, you are correct. There's four items in the queue. right now. so KG is up first.

KG: So MF is aware of my opinion on this question, but as he mentioned one of the recent changes was to align Iterator.from with Iterator.prototype.flatMap, and how they handle the return value. And in particular, the current spec will reject strings, or will not treat strings as being iterable for the purposes of Iterator.prototype.flatMap. I think it is maybe acceptable for Iterator.prototype.flatMap because if you return a string - when you actually want the code points of the string? That's a pretty weird thing to do, and you can return the code point iterator manually. On the other hand, `Iterator.from(string)` just should work. That is a perfectly reasonable thing to write. Iterator.from is a way to get an iterator out of an iterable, and Strings are definitely iterable. There is no reason for it to reject that. So I think Iterator.from(string) should work, even if that means it is inconsistent with Iterator.prototype.flatMap.

MF: Yeah, thank you for the feedback. I was somewhat on the fence myself. I chose to lean toward the consistency between flatMap and from, because I think that might be what developers value. I feel it is a fairly rare case but I agree, it’s a surprising case where Iterator.from(string) throws. I think I would be open to changing that if we have others who agree and not many who disagree. I would assume you also want AsyncIterator.from to support strings?

KG: Well, yes, exactly the same comment.

MF: I'd be open.

JHD: Yeah, I agree with KG. I think that it's bizarre that strings are iterable but either way you're not from string. It makes a lot of sense.

BT: All right. Thank you, Justin. \
\
JRL: Weakly kind of like the current behavior. It just makes it really easy to explain how flatMap flattening behavior will work. Whatever `from` gives you, if it turns into a real iterator or returns multiple results, that's how flatten would work. If it only returns a single item, then that’s how flatten will work, they'll just be a single item. It kind of makes it nice and easy to explain. I'm just curious how we explain if we go with this change, how do you want to explain flatten's behavior.

MF: It doesn't make it simpler, it just stays the same. It's just that the description of Iterator.from would be simpler if you were to defer to that. So if you were to instead define flatMap flattening behavior in terms of Iterator.from, just have the exception in flatMap instead of from. I don't think it changes the complexity of describing that, just where you describe that.

YSV: On the topic of Function.prototype versus AsyncFunction.prototype. I agree with the arguments that Michael made that we should be going with function prototype and I support that. okay?

MF: That was very quiet. It sounded like support for Function.prototype for built-in async functions.

BT: Shu. agreeing with the statement. It sounds like

SYG: Yeah, that's it.

BT: Thank you, Shu.

NRO: We already have different functions like the promise combinator. So you like faction web platform the old have functions process like I would find it, strange to her different prototype, just because it deserves, like, newer methods are assumed from this.

BT: Okay. thank you. JHD. is also plus one on history,

JHD: I just want to add that I think if async functions had been around in es6, we would have made all promise returning functions have AsyncFunction.prototype. But since we didn't, we kept with that consistency when we added a new promise combinators and things like that. It makes sense to keep with that consistency even though I would argue it's a little weird that built-in promise-returning functions are not AsyncFunctions, but it's not that important, and we should shouldn't start doing something different.

BT: All right. the queue is empty.

MF: So should we ask for stage 3, conditional on that tweak to Iterator.from and AsyncIterator.from to accept strings? In my opinion, it's a fairly small and straightforward change. If not, I can make that change and bring it back next time.

BT: I think maybe we just ask for stage 3 and if folks want to object because they want to see what this change looks like, they can say so. How does that sound?

MF: I'm happy to do that.

\
BT: All right. So MF would like stage three for iterator helpers.

SYG: for the conditional thing. I Better want to understand what are the methods that are affected?

MF: So flatMap on Iterator.prototype and AsyncIterator.prototype will not change. Iterator.from and AsyncIterator.from will accept strings in addition to everything they currently accept.

SYG: exemption so, two methods only the from methods will change. that's correct?

MF: Yes. And only for strings.

BT: The queue remains empty. Are there any more clarifying questions? Going once. going twice. All right.

JHD: real quick. this is probably something for Records and Tuples to solve and not this proposal but I'm assuming that like tuples are going to be an iterable primitive, and I assume that tuples would be treated in a similar way.

MF: Yeah. I had mentioned that during the bottom of this slide. Yeah, that depending on the order that they reach stage 3, now, it seems like this will land first, the other would have to add support for the other.

JHD: Sounds awesome. Thank you. Sorry I missed that slide.

SYG: I am still confused about what we're asking for consensus for. Okay, so we are asking for consensus for everything else, and then waiting to work out whether the from methods will accept strings, or are you asking for consensus that the from methods accept strings, and we're just need to wait to update the the spec draft.

MF: The latter.

SYG: Okay.

BT: All right. we have a plus one for stage 3, Explicit, support from LCA. Thank you LCA. RPY also +1 for stage 3. NRO also +1. So I think we are good to go here. No objections. I see explicit support modulo the function prototype change. I think you're good.

MF: Thank you, everyone. And I also like to thank the other people who have contributed significantly to this proposal, with champions being YSV, GCP who started the proposal, and KG. So thank you all. Thank you.

### Conclusion/Resolution

- Stage 3 - conditional on changing the Iterator.from handling of strings

## Async operations

Presenter: Jack Works (JWK)

- [proposal](https://github.com/tc39/proposal-await.ops/)

- [slides](https://docs.google.com/presentation/d/1bB63gV3H9qUvMg4FUHAu9jv2E7wL65jGZd_f46tIc10/)

JWK: There has been no change since stage 1, because this proposal is quite simple. Let me give a review for this proposal first. This proposal is a syntax sugar for promise utilities, and syntax is very simple. As you can see from the slides, There are four new expressions to call the promise utilities. Since stage 1, we have figured out the motivation.

I have seen some criticism about async and await. It says, when you need to run some tasks in parallel, you'll need to go back to the Promise land. That's some kind of abstraction leak. By introducing this proposal, we can remove this kind of abstraction leak. You can do more things in async/await without mentioning Promise. The syntax and semantics is quite simple so there isn't much space we can change. I wonder how the committee think about this. Can we get stage 2?

BT: Queue is currently empty but we can give it a little bit for Folks, to raise questions. all right, KG is on the Queue. Go ahead. Kevin.

KG: Yeah, it's not totally clear to me what problem this is solving. Like, what is the problem with mentioning Promise?

JWK: Hmm. so the motivation is to hide promises. I know the motivation may not be very convincing to everyone. If we cannot get to stage 2 it's okay.

KG: Yeah, I appreciate the desire to not have to think about promises, but I think we probably need to think about promises sometimes, and it's not worth adding new syntax just to hide promises. But that's just my personal opinion. I don't feel that strongly. \
\
BT: All right, there's a few other similar topics on the Queue \
\
EAO: Yeah. pretty much. I could I come in the same sentiment from Mozilla we don't really see. that this brings sufficient benefit to really be proceeding. I mean, all its really doing is saving about nine characters if I can tell right program tactic and I mean. On a personal level, I'm not really sure why if you're writing async/await-based code, you should not be aware of promises. and the capital P promise that can be used.

JWK: hmm, or maybe we can think of that as a chance to rethink how we educate async/await to JavaScript developers. Today async/await is described as a syntax sugar for promises, but if we are to fill this gap, maybe we can change the async await, as a more top-level structure.

BT: I think there's a few other topics that are similar here. So, we'll just kind of move through those first.

NRO: It's like everything that has already been said by others. I don't think that Promise is something we should try to hide. People using async functions should still know how promises works at least at the basic level, because like often you have to add a .then somewhere, and you should do know what async functions are.

DRR: I think it's going to talked about, but even if you are trying to hide promises in this case, they're still there, right? thing that you did before was like, with async/await, some extent is God, then and cache and whatnot. not here. You're still ultimately doing what these functions would have got anyway. And that's not really a change. You're just kind of hiding the characters in a sense, right? And so you can basically polyfill this to some extent and I think this is a good segue to maybe one of the next topics but that's it for me.

WH: I'm also a bit dubious about adding new syntax for a minor feature like this, especially since it doesn't extend to other kinds of combinators which people might want to do.

MAH: I share some of the concerns that were just expressed

BT: Oh, sorry. Yes. I rearranged the queue slightly. Shane is on this topic but on the, on the pro side of things,

SFC: I don't have a super strong opinion here, but just looking at the proposal, I've always felt that async/await has solved a narrow part of putting promises into the syntax of the language problem. It does seem to me that there's room for us to explore more ways of putting promises into the syntax of the language, and this seems, you know, like a plausible direction to meet that end.

BT: All right, thank you, Shane. Now,go ahead and MAH.

MAH: Yeah. So I do share some of the concerns that were just expressed. One thing that concerns me is that you're not hiding, you can't hide completely promises. in particular, if we ever add a utility to the Promise global, then it wouldn't be able to add that same utility to this syntax. Furthermore, all engines currently have memory leaks based on promises and there is all very and this is particularly egregious for promise that race and have been able to fix this because I can replace Promise.race for the programs running under me. This wouldn't be possible. if this was syntax.

JWK: Yes. Dynamic dispatch will be slower. But it looks like the committee has not been convinced by the motivation, so we can discuss this later if anyone is interested.

BT: I think SFC has a good question that that might indicate some next steps here. SFC, if he wanted. to say more about that.

SFC: Yes. So I think that the research call that YSV runs every month, this seems like a good venue to explore this because really this is about how JavaScript developers see and interpret promises and we know we want to make sure that promises are done correctly, and that we avoid foot guns. I think I've heard people in this committee previously discuss how async/await already created some foot guns for developers. It's not clear whether this proposal would help or hurt. I think it would make the proposal stronger if there's some evidence from developers, and a really good way to get that is to, you know, engage in user research.

JWK: That's a good suggestion. Thank you. I will try to bring this topic up in the research call.

BT: Sorry newt. there's one more item on the Queue, RPY . do you want to go ahead?

RPY: Kind of, a continuation of what SFC was saying, and so my own feeling. So if the goal here is to hide the complexity of promises then I think this is to surface level because it's really just renaming utilities that are there. I think maybe explore where users are finding that complexity and what more we could do to make it easier for people to not have to be exposed to promises. Because right now, like as soon as you debug these objects or anything you're going to be exposed to promises.

JWK: I think there isn't much space we can further hide the promises, because for things already async you don't need a promise but if things are not, for example from event emitter it has to call the promise constructor.

RPY: Okay, in that case, you may as well deliberately force users to learn promises and understand how to use them,

JWK: Hmm. Okay. Thanks.

JHD: I have a comments about that. So for me, this proposal is not about hiding promises in any way. I'm technically a co-champion this proposal and I think that that motivation is actually a reason not to have it. For me it's about the ergonomics of using promises, and reaching for `await` and being able to use `await.all`, for example, instead of having to kind of break the chain. When you do `Promise.all` you have to do the thing with the parentheses -that admittedly with something like pipeline, would be a more ergonomic, but pipeline doesn't exist yet. A lot of the footguns that I see in `async`/`await` usage are caused by the attractiveness of using `await` unnecessarily. And when these syntactic options are available than they become equally attractive and often they are the more correct choice than `await`.

JWK: await an array?

JHD: Yeah, I mean if you `await.all` an array, that is much more ergonomic and attractive than … in other words, when people do `await a; await b; await c`, and store those in variables, what they should be doing if `a`, `b`, and `c` depend on each other is using array destructuring equals `await.all` of an array of a promise to get out the results. Because that's concurrent,and there's no reason otherwise for them to be serial. and that using `await.all` is far more ergonomic and appealing to the point where I think more users will do it rather than unnecessarily serializing their asynchronous functions. So, to me, that is the primary and most important aspect of this proposal. Hiding promises I think is very much an anti goal. Nobody should ever forget that Promises exist, but to me this this avoids very, very frequent footguns.

BT: there's, a couple plus ones to that RRD.

SFC: +1 to what JHD said. \
\
RRD: I can't say can't say adoration Marshall. Yeah. likewise actually I’ve refactored code, that was using sequential await because awaits looked very. you know. once you're in a single weight function, you want to use await, I think, psychological effect and that's absolutely not the language design concept of thing in a way. it's more psychologically, speaking your more enticed to use a for everything and I end up doing. sequential weights. where actually you could probably things and the availability of await.all might be a way to kind of push the developer to go towards this. Although I wouldn't like say this with certainty without research here. So it's certainly interesting to try to get people “to do the right thing”. that's it.

BT: And JRL.

JRL: Yeah. Sort of the exact same thing. I have had to refactor code from beginners who do serial awaits because they want to avoid using Promises. Their mindset is that async is the replacement for Promises, using async await syntax is how they write their code. And so they avoid Promises methods entirely, Promise.all specifically is the one that I see the most, but allSettled, any, and race, I’m sure those will come up as well. It seems like that has the most improvement to me because it allows beginners to think of this as being the way that you do something in async/await syntax.

RBN: So, I posted this also in the Matrix, but it I think one of the things that was discussed was, you know, async/await hides promises. But that's never really the use case of async/await. It's not to hide promises. It's to allow you to take what was previously somewhat complicated continuing picking continuation-passing style code and then allow you to write that code linearly so that you can leverage the benefits of existing control flow such as continue break return. Loops etcetera, things that you can't do when you're doing continuation passing without increasing the complexity of writing that code. These types of operations like await.all really don't provide anywhere near the same kind of benefit. There they are for all intents and purposes just hiding Promise, but you should not be hiding promises. You need to know how promises work to use async await. I think it's a mistake to try to make that a goal, but a rationale for a proposal. I don't really see the benefit that this introduces. And instead, this looks more like additional complexity, and trying to hide something that you really should know how it works. And to the previous point about folks not using promise.all and using serial awaits, I don't think that this solves that either, it does make it fewer characters to reach for the thing that they're also not reaching for currently. And I think that's more a matter of documentation and teaching, rather than ease of use. Promise methods are things that you should continue to use, you should know how to use. And I don't think that this actually addresses that. All right. thank you, Ron.

BT: The queue is now growing rapidly again. we are getting a little bit tight on time so I think if we can be concise that would be good.

RRD: I agree with him. Yeah. Very was saying, because when I'm saying+1 this is a problem, I'm not sure this is exactly the solution, it should be research. Yeah, that's it.

ACE: RBN said, a similar thing to what I was going to say but in a better way. \
\
DRR: So I think I think one of the unfortunate things is discussion is that like the most convincing thing for me is the heaviness right? The fact that promise that Arrangement, that is just like cumbersome. You do it over and over again. but really Promise is a namespace. If instead of these functions in Promise were like methods of something shorter, part of like a value called async or part of something that you Auto Import. Like, you just imported from another module. That would probably give you the lightweight sort of thing that you're looking for. And so that's kind of like - it feels weird that we just would be saying oh well writing Promise.all that is very long. You have to do it over and over again. Yes, maybe there's like a sort of thing where you can align it with async/await. So maybe it's more syntax oriented, but if it was just more like, wait, we probably wouldn't be having this discussion. And so I feel like based on that, it doesn't really matter if we add new syntax, overall. But, you know, I'm willing to hear more arguments over time.

JWK: Thank you.

BT: All right, last time on the Queue is Michael.

MF: Yeah. My feedback is not too much different than others. I just wanted to say that I don't really think that having more than one way to do things (which I personally dislike) is paid for by this pain. I would like to see – if this does not reach stage 2 today – I would like to in the future, possibly see this presented, alongside with the proposed solution, any considered but rejected solutions. Because we've only seen what is proposed today but not anything else that was explored, and we don't really know what our options are, and what is presented today doesn't seem very appealing to me.

JWK: Thank you.

BT: The queue is empty.

JWK: Okay, maybe we need to do more research on this. but I don't think there is any other way to slow this problem if we need to do it in the syntax space. I'm not going to ask for stage 2 now. \

BT: All right. I think just make sure to check the notes. There's a few interesting ideas for further investigation there, so Thanks for that discussion.

### Conclusion/Resolution

- More research required. Maybe other solutions. Clarify problem.

- Did not advance to stage 2

## Intl era and monthCode proposal for Stage 1

Presenter: Shane F. Carr (SFC)

- [proposal](https://github.com/FrankYFTang/proposal-intl-era-monthcode)

- [slides](https://docs.google.com/presentation/d/1hoQUYL_mfdLXMHRsNcG27aJirukuDGsVbqntd_tcR0A)

SFC: I'm presenting this on behalf of FYT who is not able to join us today on Thursday. But this is his presentation and I'm just walking through it on his behalf today. So let's get started. Okay, so this is a new proposal currently at stage zero. The motivation here is that in order to implement Temporal non-Gregorian calendars, it's necessary to specify some details about how era and era year and month code etcetera behave. The Temporal specification has intentionally left this piece out of scope, and this proposal aims to fill the gap. I also noticed that a lot of the Temporal champions are not currently here. So I guess I'm the one presenting this. So, I'll continue. So the scope here is that the Temporal proposal specifies the ISO 8601 calendar and the UTC time zone, but it does not specify the details of how those other calendars and time zones behave. So, this topic has been discussed several times in the TG2 meeting, most recently in October when FYT walked through these same steps of this same slide deck. So the goal of the proposal, again, is to define the semantics of the non Gregorian calendars scoped to the set that is defined by CLDR ( the common locale data repository). There are about 20 calendars that are specified in CLDR, just for context. These are things like the Hebrew calendar, the islamic calendar — there are several different versions of the Islamic calendar — the Buddhist calendar — there are several different versions of that — Ethiopian, Chinese, and so on. And all of these calendars are used either in government, official, cultural, or day-to-day use in various countries around the world. So the goal of this proposal is to clarify that so that it's implementable. So that these calendars are implementable when using the Temporal calendar specification. Cool. So more specifically, the scope here is that the Temporal.calendar interface which again is already stage 3 requires that the non Gregorian calendars, at least specified the month code, as well, as many of the calendars are going to be using the era and eraYear. But it does not specify exactly how those behave.

SFC: So, yep. Let's go ahead and look at some examples here. So let's suppose that you wrote this line of code you wanted to create a date in the Hebrew calendar, month M05L in year 5779. So the like, what is a, what is the year? What does, what does the year mean? What is it relative to? What codes are allowed as monthCode? And, in this case, M05L corresponds to the month Adar I. in, and in the year 5779 as you can can see but the exact behavior of how the monthCode behaves is not currently specified for implementation to be consistent, which I think this really drives home the main crux of this proposal, is that without this proposal like different browser engines, could implement these monthCodes and era codes differently and it would be totally permissible. And and this does not, Help of providing a web compatible API because the this is much of the goal of ECMA 402 is that we don't want to specify too much of internationalization behavior because so much of it is implementation and Locale dependent, but we do need to at least set up some guardrails And, you know, the real Crux of this proposal is that we need to set up these guardrails, and one of the key things that really be cannot avoided is identifier strings are really something that really need be to be clear and specified, because the actual code people write - the actual JavaScript files that get sent to two engines - need to be able to be interpreted in the same way. So it's going to walk through a few more slides here, a few more examples and then I'll get to the queue. So the Gregorian calendar eras as well. We don't currently specify what those eras are and how they work. Like, if you did want to specify the example of the identifier for a Gregorian era, which one do you want to use? There's many, many choices. There are many reasonable choices. One implementation could choose a different syntax to another one. So one concern that was brought up about this proposal as well we don't want to actually be defining what these strings are. We should be able to point to a pre-existing Authority for these codes for these identifiers. So, why don't we just use CLDR the identifiers? There's a little bit of a problem here. CLDR doesn't actually define identifiers. It uses integers from 0 to 1, and then for a few calendars like Japanese all the way to 236. This is, this is what it looks like in CLDR data, it has you know, the eras are defined as integers. But this is not ergonomically… it's not easy to explain this behavior and it makes it very basic behavior. That is only well defined for the purpose of data transfer and data interchange, but it does not make sense for actually writing in code because these identifiers have no meaning outside of the data that they represent. So, one of the one things that I really, really want to emphasize here is that this proposal is going up for stage 1. Stage 1 entrance requirements are that we've identified the champion, outlined the problem space with examples, a high level API, discussion of key algorithms, identification of cross-cutting concerns, and having a repository that summarizes all this. All these things are done. Now, I understand one of the main concerns about this proposal is where do the actual strings get defined? FYT in the presentation Just showed that Well, they don't, they're not actually defined currently in CLDR itself, because they have integer identifiers, but maybe we don't want to put them into ECMAScript because, you know, ECMA 402 maybe shouldn't be the authority, the global authority for what for where these codes are. specified. So I think one of the main questions to be answered before we go to stage 2 is exactly what authority we use and, you know, I think that FYT has additional slides to explain different options for the authority for where these strings are specified. So stage 1 acceptance signifies that the committee expects to devote time to examining the problem space solutions and cross-cutting concerns. So therefore, we'd like to request approval for advancement of this proposal to stage 1. And I believe that's the end of slides. So now we can go to Q&A.

BT: The queue is empty. but we can give it a few moments to see if folks want to enter the queue. All right. The queue remains empty. So I think That is just militant agreement.

SFC: I would love to hear from either PFC, USA, or RCA, because you all had raised some concerns about this proposal regarding the authority. So I hope that the changes that FYT made to the proposal to talk about the authority are sufficient. And I'd like to get at least one verbal approval that the direction sounds like the right one.

USA: Yeah, thank you, SFC. One thing that we communicated directly to SFC and FYT who's that? At the time this proposal seemed to rely completely on a coma. in TC39, in order to standardize Much of this data regarding calendars, and glad that FYT has taken this into a direction where We could do that in a more appropriate venue. So, thank you for addressing that concern and we apart from that the rest of the proposal looks great to me.

API: Just wondering, if was CLDR like the like the people working on that? I mean, have they been posed? The question, I mean if there are they against creating identifiers for these or if we chose the solution for it, are they okay with it? Do they see in…

SFC: I mean we've definitely been talking with the Unicode folks. We have several docs and proposals in the Unicode space right now and I mean, ICU4X is already using some of these identifiers. So, like these identifiers are going to have to be written down somewhere and I think it's good that Temporal the forcing function, because it hasn't really been a problem that unicode had to solve, but I think that it is definitely a problem that needs to be solved and I've not heard any pushback from Unicode on that.

API :So yeah. you know what are they

SFC: ICU4X. I can go back to the presentation a little bit. So, like, for example here in Hebrew, you know, the month code, M05 is something that ICU4X is able to consume. and the Gregorian era codes here as shown. ICU4X is also able to support those. now that there's some open issues about, like, what exactly are the best eraCode to be used And, you know, this is ICU4X, not ICU4C, although I think that ICU4C will adopt these once they're in a standard. So yeah, there is still a lot of room to explore here and that's why, you know, we're asking for stage 1.

MF: I don't have any stage 1 concerns with this. In fact, I definitely think that this should reach stage one, but I do feel kind of uneasy about us defining this data. I think there are other bodies who have many more experts that can make more informed decisions. I know that we have some experts here in committee on some of the topics, but like, the remainder I'm not sure is qualified, or at least I don't feel qualified to participate in this kind of standardization of this data. I would really prefer a more dedicated body standardizing it and we could normatively refer to it.

SFC: You know, I'll just quickly walk through… FYT has a few additional slides at the end of the deck, which I'll just quickly walk through to provide some additional context here. Basically the additional context is that the ECMA 402 currently has identifier strings. It does define some of them and then it does refer to other authorities for others and there's a few examples here. So for example, these are identifier string Things for collator sensitivity, these as far as we can tell are defined in ECMA 402 invented these identifier strings for these four options for collator sensitivity. It also invented these strings for the the size of what are these date-time fields? as well as the names of the date-time fields themselves? And there's a few more examples of DateRange patterns, Etc. There are some examples where we don't actually define the strings, but we point to another for the body, for the string, one example here are the unit identifiers so that the unit identifier strings are defined in UTS 35 and in CLDR data. However, we do actually have a list in ECMA 402 that is a subset. So like we didn't invent these strings but we do actually list the strings in our specification. And then here's some more examples of that, like, for example, this slide is really small even on my screen, but there are numbering systems. Yeah, I think this are numbering systems. and I think also you know, unicode properties also as well like are listed in our specification. Although the string is our first invention elsewhere. So it's really more of a question of like, where are the strings invented and there's precedents there, some precedent for us, inventing strings in 402 and there's some precedent for the strings being invented elsewhere. And, you know, my personal preference is that Unicode is the correct body to define the strings. But again, this is something that we'll continue to discuss. Well, we're at stage one.

MF: Yeah. I find your examples pretty unconvincing. It seems like most of the strings we invented were not specific to individual languages or calendar systems or anything. But we can move on.

SFC: Is anyone else in the queue? It looks like the queue is empty. So, if the queue is empty, I would like to request consensus for stage 1.

BT: All right. Any concerns with stage one. Right here. I hear none. I think that is stage one.

SFC: I see a couple of thumbs up in the room so thank you. If I have any time box left, I have one additional related question.

BT: you don't actually but we may have additional time to come back to this. Before lunch. depending on what we can put in.

SFC: Okay, if I just like another five to ten minutes for an additional question, so thank you.

BT: All right.

### Conclusion/Resolution

- Stage 1

## Intl DurationFormat Stage 3 Update

Presenter: Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/proposal-intl-duration-format)

- slides

USA: Hello. And welcome to another update for Intl.DurationFormat. The proposal has been proceeding along quite nicely since we've been become such big fans of the history slides, I would like to present some myself. The proposal itself actually came up in a discussion with ZB. in March of 2016. but the actual proposal Of was was kick-started by YMD in February, 2020. So the proposal Prestige, one in February 2021. I joined in later as Champion went to stage two in June, and then moved on from there. So, it's missing the fact that there's another stage 3 update now, But yeah, I know, It over time. I took over from YMD. and you know, me made a bunch of updates.

USA: Just a quick refresher. What is DurationFormat? Well, DurationFormat is a Intl formatter like many other Intl formatters, but it formats compound durations of time. So, as opposed to something like relative time format it, takes in a pom pom duration of time with multiple units. It's possibly a format that it is locale sensitive not only for regular sort of Pros like duration for many but also for a digital Styles since those are also local dependent. It is the actual proposal itself. If you think about it architecturally it's built on top of NumberFormat, as well as ListFormat. So it takes all units. It formats them using the unit formatting option of number format and then coalesces them together using this format. So as I mentioned relative time format. You might know that there is this constructor that would that already allows you to format a single unit of time, and DurationFormat sort of builds on top of that and improves on that. and well, to state the obvious. It also sets up the stage for Temporal duration, which will be first class object that represents durations. and those objects should be able to be formatted using the duration formatted.

USA: Moving on. There are a few normal changes in this proposal that I've been in response to implement the feedback that I need to mention here in front of plenary and get consensus on first one is the sort of spec bug, You can say, that throws so, so yeah, the change through a RangeError for strings strings this Reported by YSZ from Apple. Thank you again, for recording this. Essentially, the problem is that duration format as we discussed in previous meetings has no currently mechanism for accepting strings. It accepts objects only, and it throws if you pass in any argument other than an object, the Temporal duration Constructor that that does allow. In fact, a the ability to purse strings, it does except strings a person but at the same time he throws RangeError for invalid strings. So this change it aligns the spec in the sense that it continues to throw an error in all cases, except for Strings, it throws a RangeError in itself. This doesn't mean much, but it means that you know, most improbable the the exact kind of error would not change and just to not cause any observable difference. So, thank you for pointing this out. And Yeah, another is sort of a major rewrite or format two parts. So as you might know, all the format functions that we have in do have regular format function as well as the format two parts function. Now, this format two parts function in duration format while it well. while it did work had a few quite fundamental issues and essentially did not produce exactly the result that was expected. So there were a number of a number of issues that were reported by FYT, and all these old bugs, as well as some feedback that has been raised is addressed in this PR. So this PR is basically a total overhaul from my two parts, and fixes everything anyway. And finally this the the last PR is to reorder property access, this was reported again. by FYT and it as fixed by PFC in Temporal basically. if you see the spec text of DurationFormat, there is a huge table in in the proposal that that stores a large amount of information regarding the different units. And the the mean of iteration within the proposal it followed table order. So essentially the duration units were followed in a certain order and because of that, the field access the property access was was done in a different order as opposed to Temporal and this was not the right idea. Thank you FYT for raising this, and thank you for fixing this as well. So, yeah, now, it fixes the order and, the new order is hard coded like in Temporal. So should fix the problem.

USA: Well, I would like to ask for consensus for these, minor bug Fix PRs.

BT: we do not have a queue,

USA: okay. I guess we could wait for a couple seconds and if, if nobody has any comments I would like to seed the rest of my time to the the meeting.

BT: We don’t have any comments.

USA: All right, perfect. Thank you, everyone. I will continue to make progress on DurationFormat. I would like to inform you that LibJS among other implementers like for instance, JSC have implemented this proposal and so it is starting to ship. So, I'm quite positive about reaching stage 4 some time soon. but that will have to happen another day. All right, thank you. you.

### Conclusion/Resolution

- Consensus for the minor bug fix PRs

## Mass Proxy Revocation for Stage 1

Presenter: Alex Vincent (AVT)

- [proposal](https://github.com/ajvincent/proposal-mass-proxy-revocation/)

- [slides](https://docs.google.com/presentation/d/1UW_RdbJ7fbGTL-ZWLjfdeORUD3-dTdR5Ex87m1450dI/)

AVT: While we're doing this, I want to express thank you to SES for helping me go through this process, starting back in January and in particular MM, who unfortunately is not here right now, and JWK, who are the champions on this proposal So one. more moment I'm actually on the wrong. I'm sorry. I have to switch Windows here. okay, here we go. go. so, I was all right. Now we're at the top. We're ready to go. So, I'm here talking about proxies in general, because it turns out that we have a bit of a problem with them in terms of scalability. what we think about membranes which is where we see a lot of use of proxies, then you have Shadow targets which point through a WeakMap to underlying original elements or original.

\
[screen sharing being sorted] \

AVT: Yes. Okay. All right. Starting over. With proxies we have particularly shadow targets which point to underlying nodes and proxy handlers, which come from usually the membrane into the proxy. and those are the two things that we create a proxy with. We have the shadow target and the proxy handler. Proxy.revocable is a way to revoke the proxies because it returns a revoke() Function as well. well. So, this is great for individual proxies, but we have membranes, which will create lots and lots of these proxies for use in the real world. I mean, they're in use right now with Mozilla Firefox, they call them cross compartment wrappers. SalesForce has, it's observable membrane, and the whole point of a membrane is that you have a one-to-one mapping between the original objects and the underlying proxies and the proxies make that work, that point that refer to them. So what is a membrane? Well, it's basically a way that you can have object graphs that are separated by this abstraction called a membrane and each member and each object graph will treat the other object graphs with suspicion. And you can use a proxy to look up a property of an object as I'll show in a moment and it will return another proxy, again, keeping that one to one relationship. So that through the appearance of the other of the user in the second object graph, it looks just like they're in the first object graph. It's almost transparent, emphasis on almost as I'll explain in a moment. so, you have the proxy for the first child node. excuse me for a parent node over here. And it will have a reference to the underlying HTML element. Well, if we look up the first child property that first job property does not exist. on the proxy until it comes back through a cycle to Across the membrane. And then we get the head object and then the membrane will create that proxy and connect the two proxies together. Just like we were in the underlying object graph. Similarly, if we have an event listener, which follows the Observer pattern, and we want to pass it into the underlying object graph, that will usually result in a proxy being created by the membrane to refer to that event listener inside that first object graph. So, this allows a bunch of security features, which are really useful. Think about file system access you do not want to grant that to a webpage in most cases. but it also goes both ways. You don't necessarily want to have the underlying object graph have access to things in the … again it's mutual suspicion is the concept but there's also the possibility of integrating say web extensions before web extensions were an actual standard. So that motivated both proxies and WeakMaps. The downside as I said is, when you have hundreds or thousands of nodes, they're everywhere. And that means you have hundreds or thousands of proxies, and hundreds or thousands of revokers. And, that's what we're here to talk about. If you try to revoke hundreds or thousands of proxies, you're running hundreds or thousands of revoker functions. And even if you don't revoke them, you still have to create and hold references to those revokers. Have to hold onto these and you have to be able to create them in the first place. so, the original model of a membrane was centered around cell membranes. no, you do not need to understand biology this is a question that was raised four and a half years ago when I first presented membranes with MM. and the original concept was one-to-one mappings as I said earlier with a maximum of to quote sides and quote, objects are circles in this object graph, and the proxies are semi In that meeting. I went when the question was raised about biology being necessary to understand I responded with: No. it's actually more three-dimensional and I will admit fully. I did not fully understand what I was saying at that time, but in September 2018, about two months, after that meeting I had a revelation that said “no actually this is really valuable” and I came up with a new geometric model for membranes. here I'm putting every object graph in its own plane. Two dimensional plane. The physical distance between objects and proxies means nothing here. It's just, this is straight out of object graphs in discrete mathematics. But instead of having circles, and hemispheres, I'm sorry. Let me try again, instead of having circles and hemispheres and semicircles circles representing objects and proxies rep respectively. Now, we can expand to having spheres for objects and hemispheres for proxies and I draw a little cylinders to indicate the connections between them. This has a few advantages in this new geometric model. Again. physical distance is not relevant in this particular model, except that you do not want spheres hemispheres to intersect but the idea, of inside the cell membrane versus outside, the cell membrane goes away and you also have the capability of adding more object object planes. now instead, of to object graphs, you can go to as many object graphs as you want. You can swap them, you can reorder them, you can put there is no object graph has preference or precedence over another and I've started calling these hypergraph membranes. Excuse me.

AVT: So why are we actually here today? Why am I going through all this background? What worked and we're talking about Revoking proxies if you want to revoke the green object graph here, think well. then. you not only do you have to revoke the proxies in that realm, but you also have to revoke proxies pointing to that Realms underlying objects. And, again, each revoker function, you have to hold on to but it's only two slots that it's clearing to actions clearing two slots. The target and the proxy handler, that's all it does. So what I came up with this is the idea that I'm trying to bring to the committee here for discussion over the next several months. Is adding a third dictionary object, excuse me, a third dictionary. Argument to both new proxy and proxy.revocable, and this would initially support a single property, a revocation signal. The signal is a symbol that we would create via proxy.signal. I'm a side proxy.create signal. We pass it in as a third argument and then we want to kill the proxy. we can call Proxy.finalizeSignal. and it's if the signal is, is revoked. any proxy holding reference to that signal is considered dead. This has a bunch of advantages in the sense that we might not need proxy down. As a couple. we would not need to create hundreds of revoke hers. That's less. memory allocations. Let's garbage Pressure, in fact, hundreds of revoking functions are down to at most 2^n-1. revoke or functions and most and even more for even better. It's usually (n*n-1)/2. because you, revokeers would only be dealing with two object graphs. now, we are aware of the cancellation proposal and the exact shape of our revocation signal here is completely flexible. If the cancellation proposal moves forward and is stabilized, we could certainly change this proposal to model on that one or two. use it actively, we're completely open on that. What we were most concerned about is getting the shape of these arguments, right. And seeing if we can get this idea to move forward. And that's it. That's all I have to present gentlemen, and ladies, thank you.

BT: All right, we have one item on the queue Ron.

RBN: The. actually I should have a second one, so start to talk to my first topic. that's which is is it possible that disposable stack which is part of the explicit Resource Management proposal that I'm going to be presenting think after the break would also potentially be a solution for this The Disposable stack API. API. Has. a method that allows you to record a regular function as a disposable callback, that will be invoked on dispose and that would allow you to essentially create a single container that you would defer all of the revocation or the revoke functions that are returned from proxy revocable. such that a single disposed call with then. spin through and and call the revocation. On each one. So, I'm wondering if that might be a solution instead.

AVT: I don't think so. respectfully. And I'm getting back to the point of it's not that you are it's not. Let me try it. Let me see if I could try this. What we're saying is creating those revokers in the first place. Holding them. and eventually having to run all of them. is what I'm really trying to get at. Here. MM, I believe describe this as a scalability disaster and it's really unfortunate that he's not here to actually speak on this. JWK is the other champion. This proposal JWK , feel free to jump in anytime you want. So, I although disposable sack could could run those functions. So, could a promise The point is, if we have, if we don't have to create them in the first place, if we have a very simple very short. a short circuit really to actually revoke all of these processes at once.

RBN: That's what I'm trying to get at there's still going to be overhead because you still have to perform some type of allocation to track that record for the revocation. So I can understand it releasing some of it but I also don't see how disposable stack couldn't also potentially be used? That was going to go to what my other topic was going to be about cancellation but I'll add that to the cues and, SYG was on there as well. well. So, I still think that disposable sack is a potential solution to this.

JWK: I can see it's possible to use DisposableStack for this use case. There is some chance that the engine can unobservably optimize. At first, we create a proxy by Proxy.revocable. Then we add the revoke function to the Disposable stack callback. The engine can drop the revoke function because it knows the revoke function is only used to revoke the proxy and if the DisposableStack is also implemented by the engine. Now revoking the proxy does not need to hold the revoker function in the memory anymore. The engine will know it should revoke the proxy when the Disposable stack calls. But yes, there are still some differences. The engine still needs to create the revoker function. It will live for a very short time but it is GC pressure.

```javascript
const { revoke, proxy } = new Proxy(...)

disposableStack.defer(revoke)

return revoke

~~~~~~~~~~ after the return, `revoke` is no longer accessible from user land.
```

RBN: Not unlike how abort signals work in the DOM, where DOM APIs have privileged access to record something in a abort signal versus how users would actually use it via having to attach an aborted events. I'll talk about that a little bit more when I talk about cancellation as well, but I think that there's some overlap in those cases.

AVT: As I said, we are willing to to adjust based on where the cancellation proposal goes. That's absolutely, not a problem here. But like you just mentioned about abort signal one of the points that BFS raised. when he was co-authored on this proposal was. If we don't have to create the revoke or function, we don't have to allocate the memory. We don't have to put pressure on the garbage collection as much. It can seriously reduce both the those up front.

JWK: Yes. It still has some pressure on the GC with disposable stack. There are some more differences. As you can see on the slide, the signal is a symbol so it can be passed across Shadow Realms. You can create a proxy signal at this Realm and revoke it another Realm.

AVT: That is what that actually came out of conversations with CP give he and I were talking about that. I didn't fully understand it, why? why? But that was The reason he gave. and I'm thinking to myself, okay, that works. question for the chairs. How much time do I have for me?

BT: You have 12 minutes left,

AVT: Okay, thank you.

SYG: Yes, As far as I understand, this is a proposal for an optimization opportunity basically to optimized. reputations in a way that is infeasible to do in userland. and membranes being the motivating use case I'm wondering does this solve another use case other than membranes. I know. know. I guess. be transparent about my biases here. We're not like, V8 has not been been Like, looking back as an implementer. if I could do things over again, I would say proxies overall, we're not worth it for implementation in engines for the usage they got, I understand there are some heavily concentrated uses. like at SalesForce for some of these membrane use cases. But overall, the amount of complexity they have added two engines. I think didn't really trade-off in the way we'd like in the end. This seems. like a small enough change, but I need to think more about it. but I want to be cautious in extending the extensibility(?) of proxies and given You know. how many things they how difficult it is to kind of Reason through things and proxies I want to build some confidence that this is a more General thing Or it's just the, here's an opportunity to make membranes faster and we want engines to do it.

AVT: I, cannot speak to other use cases, I simply do not have experience with using proxies in other contexts.

JWK: In general, if some use cases require creating a lot of proxies and then revoke them at once this proposal helps. But I personally don't know any other use case than membrane that needs so many proxies.

SYG: Like cancellation as an analogy for promises, Like I can also Imagine a world where we're like, we have like thousands to to be clear doesn't seem like that big a number. where we have order of magnitude larger than that promises and cancellation needs to scale That hasn't really come up for promises. but I could see that as a more compelling issue. but for proxies Yeah, I'm not like I would like to see some, I'm not going to block stage one because part of the exploration here it would be to look into that problem space and see how well. the analogy with cancellation is. but but like it's walking for me, it's working out how much work is involved in doing this? and what it's our bank for it Is it just membranes If it is some little little skeptical. Unless the work involved here is actually very little in which case after that investigation that's also fine. Like the trade-off spaces, you know, on both ends

AVT: I'm suspecting. this is suspicion only. that it will not take much more that we're talking about a third slot on the proxies which is basically a pointer but don't hold me to that gentleman. I don't know. a collection to track everything that has the same signal, right?

SYG: Like, we're not going to walk the Heap and say I'm going to we're going to look at every object in existence to see which would sir proxy with this special signals. You're going to have this collection like a registry like a finalization registry under the hood. Anyway, Right. and the Gap have weird implications with cross from. Does that have weird in implications with ephemeral marketing and if it doesn't then, OK, maybe that's fine. But more investigation, not a stage one concern.

AVT: Okay.

YSV: We have similar concerns as Chrome regarding these use cases here. We would like to see this be more general or be more generally applicable. But as Shu said, I also agree, I don't have any objections to this going to stage one.

BT: All right. thank you.

RBN: So, the slides brought up the cancellation proposal. and I wanted to speak to that just a little bit. cancellation has been a bit stagnant because it's been blocked repeatedly by WHATWG due to the existence of AbortSignal. and my biggest concern is that this is yet another attempt at a cancellation mechanism. That is very similar to to abort signal, And I am concerned that they will again Make attempts to block because of the similarity to abort signal. Now cancellation. I have been meaning to come back to that The last time I was looking at that proposal and trying to talk with it was DD about it. The approach that I was looking at was potentially now utilizing some type of host hook, which would mean that there is still nothing within the spec you can Define as a cancellation signal it would be up to the host to give you an object, you could actually use for for cancellation. But that might still be an option here to say, leverage, abort signal, and utilize the same type of hooks that the DOM uses for APIs like fetch to be able to hook into it. So I think that's a there is potential for an approach there for cancellation and this then becomes a a valuable motivational. use case, to at least address the host hook type behavior to make that work. But I do see adding yet another potential cancellation mechanism might be a blocker from the web platform perspective. So if this does advance to stage two, we should probably keep that in mind. and I would then try to pursue a potentially a host hook based approach for cancellation, just so we have a way to leverage something like an abort signal on various platforms if necessary.

JWK: Yeah, the last version of the proposal is based on the host-provided signal. AbortSignal. If you are interested, you can see the old spec.

AVT: you talkin about, the cancellation? proposal Jack and \
\
JWK: The massive proxy revocation.

RBN: Okay. And that and that said, one of the goals of something like the cancellation and abort signal. approaches, is that? There is a separation between the thing that cancels and the thing that receives that that cancellation signal, hence the aboard controller board signal or cancellation source and cancel token. The disposable stack can theoretically used in the same way but it doesn't provide that level of Separation. but that's generally not what you need here. here. That separation. is usually, because you have, a canceller and a cancelable that operate at a distance with some level of operations occur in between whereas something like disposable stack might still be useful here because you're passing it. could be passing directly to say the proxy API as well. So we might be able to continue to leverage disposable stack but as something for this because it is kind of within its wheelhouse of stating, what you're essentially doing is cleaning up all the proxies and resource cleanup is the purpose of disposable stack and the resource management proposal.

AVT: I will say, I am looking forward to that conversation. later on today, Not trying to cut you off RBN. But I am aware that I'm probably running out of time here. Yeah, and I do want to let WH have his chance to take a potshot.

WH: Thank you. I'm trying to understand how this is meant to work. If you cancel the symbol, does this immediately kill all the proxies? Or do they die the next time you try to use them, in which case the proxy has to check whether the symbol is still alive every time you use the proxy?

AVT: Yes, that. If, if the proxy tries to access the proxy Handler and the signal has been revoked, it is treated as a TypeError, just as if the as if the revoke or function had been executed. But also once that signal has been revoked, it also exposes the underlying proxy and the underlying objects of the proxy to garbage collection. That is the current version of the spec. We are willing to change that along with pretty much everything else. We're just throwing this out to see if it sticks. Does that answer your question sir?

WH: How does something “expose objects to garbage collection”? That is actually a problem I've been wrestling with in another context.

AVT: I cannot answer that question off the top of my head sir. I'm sorry.

JWK: I can answer the question because I wrote the current spec, it checks the signal when using the proxy. And if the signal is already aborted, removes the internal slot. It's unobservable, if there is already if there is already no reference to the targets or the Handler.

BT: We’ll need to cut off the discussions here if you want time to ask for stage 1

AVT: I am asking for that please.

BT: All right. if folks have concerns with advancing its proposal to stage one, please. raised those concerns now,.

SYG: I have no concerns for stage 1, but I want the Champions to understand the skepticism I express that endorsement of stage one here probably does not have bearing on it, progressing all the way and we should work together to address those concerns.

BT: All right, that's sounds like stage one approval.

AVT: For what it's worth I was looking for a mechanism to do revocation of proxies en masse. If this proposal doesn't make it all the way through, I am perfectly fine with that. but, thank you very much.

### Conclusion/Resolution

- Stage 1

- Need to look into implementation complexity and if solution can be generalized

## Chair Announcements

BT: all right, have a few announcements. before lunch first, I believe Michael has has an announcement. announcement

MF: Yes. I would like to take this time to draw your attention to a reflector thread, number 450. You don't have to go there right now, but in it, I mentioned that we haven't been having TG3 meetings in the last few months because our chair, who was an employee at F5, has left and is no longer a delegate. So we need to look for a new chair so we can continue to have TG3 meetings. Remember TG3 is our Security group. We focus on on topics related to security. We also have a lot of upcoming topics that are posted in the security repo under TC39. You can check out those, where we've been talking about some of those. But I would really like to get those meetings started again. I was appreciating the ones that we were having, but we do need a volunteer for chair, or possibly multiple volunteers for chair. So you don't have to volunteer here and now, but if you would like to go to number 450 on the reflector, you can throw your hat in there. That would be very much appreciated by all the attendees of TG3. That's all

BT: All right, thank you, MF. on the topic of chairing, it has been my honor to serve you as chair for the last handful of years here. Unfortunately, that is coming to an end pretty soon here. So, we will be looking for opening nominations for chairs for TC39 relatively soon. I do plan to stay on to help with facilitation and RPR and USA will continue as chairs. So, that will remain the same. But but it's a job that I think three people as ideal for. So, if cheering TC39 is something that you're interested in, please consider, Throwing your hat in the ring, I guess. And if anyone has any questions about what the work entails or that kind of thing. I am happy to be a resource, so feel free to reach out. Alright, and then I think you the eyes. Next up was an announcement.

YSV: Hi everyone. mmm similar to BT, I will be actually taking some time off. So we will be down one facilitator. and I think having a facilitator in the room to assist the chairs, whenever necessary is very useful. So, I'd like to encourage folks to consider becoming facilitators It is a lower bar in terms of work than doing the chair But it definitely helps the committee function smoothly and it also relieves a bit of pressure during committee time from the chairs, so that they can organize other work. that needs to be done. while the committee's in flight and make sure that things run. Let me know if you have any questions about what that looks like.

RPR: I'll say we are very grateful for BT’s chairing over the years. Certainly I have learned a lot, and in any leadership situations like this there's always tough spots, there's always awkward calls and so on. So it's not an easy job to do. Also, we will miss YSV temporarily while she’s away. If you would enjoy the role of chair, please do reach out. We will do a formal reflector post next week, commencing the call for candidates. We will target an election at the March meeting. So there is plenty of time because we know that finding candidates takes a significant number of hours. Some people. need to get permission from their employers - this is ideally a long-term role. I will say that both myself and USA plan to continue in the chairing role. So candidates will be supported in the role. If you have any questions, please come to me either now and a more always happy to do a zoom call.

All right. I think we've finished for lunch two minutes early. So Brian, if you're anything else. anything else.

BT: I, think that's it. I think we can break for lunch.

## Explicit Resource Management for Stage 3

Presenter: Ron Buckton (RBN)

- proposal

- slides

RBN: We've gone over some of this. before. in over the years that this proposal has been around, but I'll briefly cover some of the motivating reasons that we've been looking at this proposal. We wanted to address some inconsistent patterns for resource management for example there are various mechanisms for handling resource clean up such as return on iterators, release lock on stream, readers close on file handles and there's numerous example of this examples of this in the explainer repo as well. Meaning that for any given API, you can be difficult for users to know what's the right way to clean things up. Even if you look at some node examples in node streams some some objects have close(). some have destroy(), which is the right one to use. So it can be unclear as to what is the right mechanism to actually perform resource clean up in those cases. We also wanted to address issues with scoping of resources and managing resources lifetime. Currently, this can only be addressed really with try/finally. But when you use, try/finally, to actually access the handle in the finally, you have to declare it outside of the Meaning that? or trivial kit for the majority of trivial cases, it's hard to know what whether that object is actually still alive. and we wanted to also address a number of common foot guns for managing multiple resources. Sorry, this also applies to the scoping as well. if you happen to release. a resource without using a try, finally Block in this case, you could have an exception in the intervening code, and then as a result don't actually release the lock that you've taken, and this could potentially run into a deadlock in async cases. In cases where dealing with multiple resources, we have similar issues with if you allocate your resources and use a single try/finally, for brevity's sake, you run into issues, where an exception, when closing one resource could result to be in another resource not being closed, or closing resources out of order, If, for example, be depended on a still being alive, so these and then these are A number of footguns. The only way currently to do this right with multiple resources, is continuously nesting, try/finally blocks which results in this fairly heavily nested code before you actually get to the logic that you actually intend to represent. So, all of these things are specific motivations that we are intending to solve with this. So, we have a couple of motivating examples to show how this can be used. So, here's some examples of using the node FS promises API to open multiple file handles. In this case, if these file handles happen to then implement this pose you would be able to inside of a block declare each with each resource they are required. perform, whatever operations, you need. read and write. And then in the any exceptions are occur, or if code complete successfully then those resources would then be easily. disposed one in reverse order Assuming there were any potential dependencies and make sure that all of those resources have been cleaned up successfully, or that appropriate errors have been thrown.

RBN: Another a motivating example for this proposal are cases, like, logging activities, you can leverage the capabilities of limit this proposal to both, interpret, when an activity begins by forming a function, call that returns an object, that is then disposed. And then regardless of how the function completes be that from an exception via for return. When the block exits that activity will be disposed and can log its completion. Another motivating example, which is one that I'm hoping will be able to consider when we're working with in the proposal for the shared structs capability is working with mutexes and condition variables This is something we've definitely been considering these capabilities are things that we would have, it would be considered adding in those proposals. And I believe that the approach that we're taking with resource management is supremely motivated by these types of examples where we can scope lifetime of locks to specific blocks. Such that the block completes, we can release those locks cleanly, and avoid potential deadlocking scenarios due to mismanagement of handling locks, when working with something like, try/finally, or APIs that are maybe not as easy to use this or even using something like continuation passing Style Style(?) APIs.

RBN: So, I wanted to then touch on some of the recent updates we've made in this proposal. Most of these or pretty much all of these are in response to issues that were raised in the last meeting with one exception. we'll get to those We've added a SuppressedError to this proposal. This is due to the discussion we had around and aggregate error and the aggregate error nesting That all WH was concerned about there was an issue brought shut up in the Babel implementation about a “for using” of being confusing to parse, requiring too much lookahead. So, we've banned this in a fashion similar to how we ban certain cases for things like expression statements, containing left, let brackets so that we can differentiate between that and a let declaration. And as I mentioned, the last meeting we're considering postponing several capabilities, such as using asynchronous using declarations. I’ll get to that a little bit more into that later. As well as void bindings on the API side of things for disposable stack and async disposal sack, we've added a disposed getter as a convenience mechanism to determine whether or not a stack has already been disposed. There are other ways to do this. One is to just try to add something, add a resource and seeing whether or not it throws because it's been disposed but there is a concern, there is a way to do this. That is is somewhat To use currently requires you to pass a null in and then determine whether or not you're getting a TypeError because it's been disposed to disposed or a reference error. and that's not a very convenient mechanism. So this makes it a little bit clearer. also in a previous meeting in the last plenary session, we discussed the `use` method which at the time had an overloaded definition, we've broken that out down into three distinct methods. I will note, I have made a change to the slides in the last hour for those that are viewed, slight change to it mostly due to I've added a single slide at the end. JHD(?) had a concern that he believes is still unaddressed from #102. I have added the slide that specifically details his comments so we can discuss that at the end. We'll discuss that towards the end. Also like to mention, I'd like to try to save most discussion of the queue until I reach the end because I have an hour. I know we're short on time for this meeting with a number of topics of currently have. So I want to try to get through the slides as quickly as I can and then we can come back. So another thing that was brought up by the reviewers specifically SYG mentioned that disposed indisposed to async methods were in the last proposal and I discussed them being Auto bound Getters. He had some concerns about that. we've determined. We've discussed that a little bit. The original design was based on how Intl number format format works. And it is a way to kind of help with a functional programming style case but arrow functions are just as useful here. So we've decided to remove the auto bound getters for these. And instead make these just aliases so that you don't have to necessarily reach into the symbol name that is primarily used for the disposable protocol or disposable interface. but give this a more easier to access public member that you can reach. one of the other changes that we've made is that when the move method on DisposableStack is called, which would take the contents of one DisposableStack and move it out of that. Stack into a fresh disposable stack. That the current disposable stack that move is being called on becomes disposed and I can talk again about what the move semantics are when we get down to that slide. so, using declarations, are a mechanism that we are introducing that allows you to declare a block scope variable. That is constant so much of a constant variable. whose at the time of the Declaration is initialized. Its value is captured and its Symbol.dispose method is stored in a record within the environment. Such that when the block exits that dispose method will be called on the resource to explicitly release those resources. So that the timeliness of that resources or the liveness of that resource is limited to the scope of the block. “using” declarations,do not currently allow destructuring, allowing us to have a relatively small case, a small syntactic footprint when it comes to use these decorations. they are permitted is at inside of any block scope, they are also permitted within the head of a for statements or of or for-await of but not a a for-in statement. so again, these Bindings that are produced are immutable. and their lifetime is scope is scoped to of the block scope container. This helps us to reduce the excessive block scope nesting that occurs when you’re trying to emulate this behavior with try/finally patterns as a Min mentioned before they are not permitted. with it's not permitted to use binding patterns with them. This is due to the potential confusion between what actually gets disposed. It's been decided that it's better to have the thing that you want to dispose be specifically declared And then if you need to further destructure, that you can do that in this effort declaration, these are also not permitted at the top level of a script. because of the liveliness of a script is at odds with the scope of the variable, the variable would potentially be globally scoped but then when would it be disposed So instead they are not permitted, the top level script they can be used. Son of a block inside of the script but not at the top. prior art for these are C++ stack variables, C# 8 using declarations, the entire proposal is very similar to those as well as C Sharps using statements, python with blocks. Java has try with three(?) resources. So there's a lot of examples of this type of behavior Within in other languages. And as I mentioned earlier, we also allow using in the head of a for a there are forstatements, a for table statement or a a for-await of These are. similar to how constant declarations would work in each of these cases in that. The Binding becomes block Scopes. So in a for of an A4 weight of statements, even though that binding is declared at the top, because it is constant, it doesn't change. We don't necessarily need to introduce a new per, iteration blocks, do for these, As a matter of fact, we don't introduce new per iteration block, scopes for constants even though I say its scope to each iteration here, if that really doesn't matter, there, it's that unlike a var or a, let that can change during iteration. These remain constant. But they are scoped to the lifetime is scoped to the block. So in a for-block, its scope to the four statements. So it doesn't matter how many iterations since that constant that variable doesn't change. in a for of or a for-await-of so that becomes the lifetime to scope to that specific iteration. So, once the block or once that iteration has completed, and the next value is pulled, then you were introduced a new using declaration. we don't support these in for-in because for-in cannot produce a value that can be disposed. And despite for-await having the await keyword, a using declaration inside of a for-await still uses the synchronous disposed and not the asynchronous using I can get into that a little bit more later as well, but it specifically around how you are. the lifetime of the using statement and which method is trying to use. to use. Now. so disposal, semantics. when you have a using declaration, the value, can be null or undefined in which case we don't capture the symbol disposed method. This is to simplify cases that are conditional so that you don't have to have very complex conditional, branching logic. or very odd switch statements. to try to get around these types of cases. So it's a convenience mechanism. there is prior art for this in other languages C# using statement using declaration allow you to specify a null in which case it becomes null, nothing gets added to the system to the environment. However, we do capture disposed. at the beginning of the block and not the end. So if they disposed is not present on the object or is not callable, we will throw a TypeError. that ensures that resources are properly disposable before we try to execute the code that uses it. Which allows us to avoid potential side effects in the system and give users a better indication of what went wrong. when we have this declaration again, will record the value of the expression. and dispose method in the current lexical environments in a stack. So that they would be then disposed in reverse order. This reverse order semantics is important again, due to resources you declare earlier later, may be dependent on resources that you declare earlier there for disposing, An earlier resource would make a later resource fail, eventually fail during cleanup

RBN: so the semantics when exceptions occur. in this example, we have a case where we have a using declaration for something that has a disposed and an error is thrown in user code, and I'm calling this user code both really are. But the difference here being that's the non user code is the implicit disposed that gets called at the end of the block. so, in this example, we record the object and its disposal method. at B. We throw an error and then at C, we will exit the block because of the abrupt completion caused by throw. when this happens will attempt to dispose. the resource. It's recorded today since this succeeds without error and the block had a throw completion as its completion, we will continue to go. We will then Let that throw can tear. That throw continuation. Flow out of the block as the the result. in the case that a exception occurs during disposed but not in the body, we will choose to then propagate that specific exception. This. is a change from. the last meeting where you would, if there was an exception from a to suppose, we would always throw it with an aggregate exception that changed due to the switch to using SuppressedError and we'll explain a little bit more in an upcoming slide. now, in the case that both the body, and the dispose method, throw, we will introduce we have now, introduced suppress are suppressed, are is somewhat similar to a great exception, but they have some differences. in why they exist and what their purpose is. But for the time being again, describe this little bit later, But right now, what happens is, it's just SuppressedError will now be thrown where We're an error property that said on, it is the error from dispose because that is the currently the topmost error. and it's will be the error that this, that the new error from dispose is suppressing, so that we have a way to actually access what the error was that was originally thrown in the block. In the event that there are multiple. resources, and all of them dispose and the body disposes, you end up with a nested structure of this suppress errors, representing that Jagged error suppression condition we discussed in the previous, plenary that we needed to resolve with. Aggregates with an aggregate are So, in this case, we Receive an exception and user code, which results in the throw completion. The altar disposed for. the second resource also results in a through completion. and the supposed to the first Resource also results in a throw completion. So as a result will end up with the exception that could be caught by user, by user code. Being a suppressed error that points to the exception at “f” that comes from the first resource. that suppresses, the except the suppressed are that came from those previous from the second resource. that suppresses the original error and have a way to access the errors and this allows us to maintain the same exception structure that you would receive. Regardless of refactoring. So if you were to move using be into a separate block, we don't end up with different levels of nesting. or different ways of nesting than we would have with aggregate error.

RBN: So, about SuppressedError proposal actually I think maybe the first one that proposed aggregate are although that ended up advancing. or at least at the same time that it was promise.allSettled also look to introduce it. So we ended up kind of aligning on the design for that. that error at the time. However, over the course of Several plenaries discussions and offline discussion as we kind of determined that aggregate are really isn't the best representation of are suppression. So AggergateError is primarily designed to hold a shallow flat list of Errors. It becomes a little bit harder to reason over an aggregate error. If it could also contains an aggregator aggregate are that also contains the errors. and that's becomes a little bit unwieldy to work work with. However, error suppression is usually or is almost always a result of nesting. It's blocked nesting. It's I've one exception that I through and then another exception I threw that is that would replace that exception that we might still want to be able to see both. SuppressedError helps better model that relationship because it allows us to both point to the error that caused the suppression, as well as the error that was suppressed. now, we've chosen to use “error” and not “cause” because cause has a little bit of a special meeting with other error types. It's a thing that you provide in an options bag, therefore it's usually it's often optional on error definitions. It has kind of a special meeting and I'd like to try to preserve that where possible so that we don't necessarily step on that. Also the error here is roughly equivalent to the errors on aggregate error. Except we only have one of them. so, that is primarily the motivation rationale for why we're using error and suppressed as opposed to cause and and suppress.

RBN: So, there was an open question that we'd brought up in the last meeting about whether or not using declarations should become unusable in the block scope exits when they are closed over. it would have prevented access enclosures that executes later. you can introduce constant aliases. The champions’ preference at the time was no. for various reasons we had It was. biggest brought up was that this would essentially introduce a new tdz. and we were concerned I was concerned and spoke with several implementers about this that introducing a new tdz would have potential side effects when it comes to optimization and performance. a number of implementers chimed in that there were concerns and the issue has since been withdrawn.

RBN: So, with that, I'll move on to a discussion about the Disposable and AsyncDisposable interfaces. So this is the protocol with which disposing works. So the Disposable interface describes an object that has a `Symbol.dispose()` method. invoking, the method indicates the caller doesn't continue to use the object and therefore the object can release its resources. this `Symbol.dispose()` method is used by the semantics of both the using declaration disposable stack and the async Disposable stack class yet adaption adapters. the idea with `Symbol.dispose()` is that when invokes the object, that hosts, it should perform all necessary, cleanup Logic for the object with the intent being that, while the object itself has not been freed in memory. it will still exist until garbage collection. What did anything that the object is holding onto that might potentially need to be freed such as file system, handles network, two streams. Etc, that those are cleaned up in a timely manner. And when called this symbol, as opposed methods should avoid throwing exceptions but there's no requirement for this to be the case, it's just a better practice rather than a mandate or rather than it shouldn't throw exceptions when called more than once. it should generally be safe to repeatedly called disposed. And again that's not required.

RBN: The AsyncDisposal interface. asynchronous version of disposal. and I'll get a little bit more into where the proposal split might be happening when it comes to async using. But we've decided to keep in some of the capabilities of async using due to their value within a potential value within the ecosystem. while we settle on a issues on the async disposed or async using syntax. in the meantime isn't disposable account is very Cooler(?) to the Disposable interface but these objects would have an async disposed method purpose of this method is to allow resource clean up. that is not necessarily capable of being performed within a within a synchronous block of execution. much like an async iterator has a return that it can be potentially asynchronous. an async close essentially returns a promise that resolves. when the resource has been freed, In. within the API, we have introduced disposable stack and async disposable classes. The Disposable stack class is a container. Its purpose is to hold multiple disposable resources such that when the stack itself is disposed those resources. but that it contains are also disposed. It's called a stack because resources are added in a in order and then released in the reverse order.

RBN: DisposableStack is very similar to python’s ExitStack and borrows heavily from some of the design there. It's a convenient container for wrapping multiple disposals. Disposables in a very is very helpful when working with complex. constructions, such as classic instructors where if you are creating a class that it is also disposable that host multiple disposable resources. There are certain patterns of attaching those resources that are very difficult to use without a construct like this. And I think I have some examples later in the slides that show this. In addition disposable stack provides some help with interop. It allows you to take a not only to use a well-defined disposable resource of, also to adopt resources that are not using the Disposable interface by basically registering that value with a custom callback the ability to add just a the other deferred. plain callback method, which is again, which is designed to roughly approximate. the go defer statement. There's the method allows you to move things out of the stack. and the disposal syntax or semantics. so get a little bit more deeper into this disposable stack Use is a method that accepts a disposable adds to the stack it allows known to find just like the using declaration and just like the using declarations symbol disposes. Act and cached on Entry. when the resource is added both the resource and its method or added to the internal disposable stack. And importantly when you call this method, the result of the Disposable is returned. This allows you to get very close to the resource acquisition time whenever you create the resource or what we get the resource from a function. that there is very little opportunity for other user code to run between when the resource is allocated and when it is added to the stack, therefore, the use method Returns. The thing that you put in, so that you can say, declare a variable that equals stack use the thing that you're going to dispose. and get that value back after. It's been added to the stack and a way you can say, Canon(?) consider a using declaration to be a syntactic sugar, over a every block, having a disposable stack, That new resources get added to during those decorate. Those declarations are are initialized,

RBN: In addition. this, So the next few methods I'm going to discuss were originally all on the use method at the last meeting. We decided to break up views into multiple functions. to avoid the overloaded Behavior. One of those overloads was this mechanism adopt we can change the name as we discussed but this was the one I found to be the most appropriate for the use case. Its purpose is interop and allows you to adopt a foreignresource that uses a non-disposable syntax or uses a non-disposable object, and attach custom disposed semantics. or to use a disposable where you want to override the disposed semantics with something else. in this case, unlike adopt, the value is added regardless as to its value. So this can be an object, it can be a number, it can be undefined. that value will then be passed as an argument to the on disposed call back. when the resource is or when the stack is disposed and this resource would be disposed that callback is then invoked with the resource as its argument. it Returns the value of this argument much like use So that again the acquisition of the resource that is passed to value is as close to the it's added to the stack as close to the time that is required, as is possible.

RBN: The third method that we added, to break up the overloaded use is the defer() method. This only accepts a callback and adds it to the stack. so it's similar to adopt it as a callback, only. it's like you executed with an empty argument list. in case a function depends on arguments.length. It's an approximation of Go’s defer statement, which to allow you to add essentially any function wants to the stack gets used later. As I mentioned during the previous, proposals discussion around proxy revocation that you could in theory. great a stack and then just defer the revoke methods that are returned. So, here are some examples of the of how this pose will stack works in the case of adding a disposable. You create the resource calling stack use again, the acquisition of the resource here, Get Resource One. is as close to the point where you add this at it to the stack as possible before it gets returned. This is also very valuable if you're calling an API that takes in multiple arguments and each of those Disposable you can in an expression position. when calling that function call stack use for First Resource. In the first argument stack used for the second resource in the second argument and those get added in the appropriate order. Such that they are again released in the appropriate order. Adopt, for example, here is very similar. It allows you to add non-disposable values as if they were disposables again as close to the acquisition as possible with a call back, that allows you to handle that clean up later. and in the example of fact, defer allows you to add any you call backs. would like, as a dispose. Now, the Disposable stack move method. this is very similar to a behavior in pythons exit stack. which I believe called pop all. the idea here is that you are taking all of the resources out of one disposable stack, putting them into a new disposable stack and returning it The specific use case for this is around construction We're in a class Constructor they might have an example of this here. Yeah, in a class Constructor. I have this example is class has two resources, Channel and socket both are disposables. However, I don't want to use using declarations for these because I don't want them to be disposed when the Constructor exits. I want them to be disposed when the class is disposed. However, if there are any exceptions that occur during construction, we want to make sure that those resources are cleaned up. so in this case, we can use a disposable stack and then have that stack attach the resources that you are adding to the class. Such that once the Constructor, it completes, you can then call stack move to take everything out of that stack. So that stack can still be disposed. since that will be disposed regardless as to what you do or do not add to it or any other changes you make to it. It then. those resources can be pulled out of that stack so that they won't be disposed now because construction is completed and because this again is a convenient container this allows me to then call `Symbol.dispose()` later on on this container object. And then dispose all of the things that were added to it in the correct order. So you don't have potential for this case socket has a dependency on channel so it could be the closing, the socket might require some cleanup that requires a channel to still be alive. So rather than reproducing this stuff Is this socket disposed, is this channel disposed into this dispose method of the class and somehow possibly transposing those and doing it wrong This ensures that if you call this pose on the stack that you created during construction, that everything happens in the correct order. and we mentioned, before, the original stack will become disposed. This again was a new changed since the last plenary And again, this is extremely handy for class construction. It's also helpful for factory functions where you're doing more FP style work, where you're not actually using class instances, you can do the same type of behavior is just using constants. And again before this used disposes, a getter. Now, you would just essentially use an arrow function. So, in addition to DisposableStack, we're also introducing the AsyncDisposableStack. which is similar to pythons AsyncExitStack. essentially, mimics the same capabilities of disposable stack is designed to work with asynchronous disposables. So the defer callback can return a promise. So can the on disposed has to adopt and the Disposable that passed in can be async or a normal synchronous disposal, the Disposable as that this boat. Suppose method can Will essentially just be executed.

RBN: As I mentioned. earlier on in the slides there are a number of features that this proposal has had since essentially its Inception that have been either postponed or withdrawn, one thing that we are postponing is async using declarations. So this is the would be the async syntax that is the same form. that we are currently proposing for the synchronous syntax. But designed to work with a sync dispose, we do believe that we have a syntax that we can move forward with. But there are some caveats to that that are a reason to postpone the syntactic portion temporarily. So again this async form of using declarations, these would be allowed at the top level of async functions. and at the top level of modules those Have implicit support for couple of low weight, but would not be allowed in a regular block And the concern here was one raised by MM that a regular block, that contained an async using would have an implicit await and he prefers to find to make sure that every potential. a interleave point. is marked by either wait or yield. Thus, a regular block would not be be sufficient. One approach that we've discussed in the Is link tissue. to potentially leverage async do Expressions that you would have to await, which is what I showed in the example. Here, that would mean that this Intex would be dependent on the advancement of async do. which is one reason to postpone it one concern that I have with leveraging async do is that it's fairly easy to accidentally leave off the await. since the sync since an async do block, would still execute up to the First. asynchronous. point either the Away tour, the results of the block. therefore, it can look like your code is working correctly, If you have a async do that contains an async using and then synchronous code. But then the result isn't actually cleaned up. So one alternative we might consider is introducing a specific await using block. where the weight is kind of required and due to how that would I work with with ASI and careful, use of “no line terminator here” productions, we can essentially ensure that if we were use this syntax that it would avoid that case. It also means that we wouldn't have a dependency on async do. but if and when a seeing through does advance, they're still that potential for a dangling await.

RBN: Another thing that we have postponed to a follow-on are separate proposal is finding lists declaratory binding list. Using this was originally part again of the original proposal, when this was still a using statement, that was a like a try with finally type approach. in that you could have resources that you could access that already existed. This works really well for things like locking or for logging locks, where you'll never actually reference that declaration ever again and avoid things, like no one used for ours. However, we decided to cut this in favor of reducing proposal scope and the void binding. We introduced is potentially useful in other cases, you don't necessarily need it for array destructuring since you can skip elements explicitly. But there are a lot of these with that such as the trailing commas. Does that mean you don't Advance at that point? And that can look a little bit ambiguous. So there is potential for introducing this as a completely separate syntax that is completely divorced from the using proposal. So we may look at advancing that as a separate proposal in the future.

RBN: the using statement which was the original design of this proposal back when it was first, introduced, has been withdrawn. This is due to the fact that it seems that we've primarily been in favor of the are RAII, the “resource acquisition is initialization” style. I've been very much in favor of that and even C# which has the using statement that this was heavily influenced by recently added using declarations. as well. So, we've been less motivated to actually introduce this. this. We considered keeping it as a bridge to a sync using statements, but given that we've found potentially valid syntax or Bibles(?) and text you want to use for async using declarations that we decided to withdraw both this and the async using, or using await or whatever you want to call it statement that we'd had initially as well.

RBN: And that get them to open issues. This is the slide that I mentioned the beginning. There was a concern raised by JHD and that the ordering of arguments for the adopt method should match the precedent set by methods like array prototype for each or map. or reduce. I've contended that that ordering isn't a preferred ordering. that this is more in line with things like JSON.parse. Where text comes first, were the non callback, comes first, the callback comes second. stringify, where the callback comes later, or array, from where the callback comes later. Both of these were introduced after Arrow functions. Well JSON wasn't but array from was introduced after Arrow functions were introduced. which kind of reduce the need to use this trailing This, argh and many API. Most new code doesn’t use that API design anymore, because it will end up using Arrow functions for readability. So, we also prefer leading with the value, because that value ends up being returned. It's a bit more awkward to have the value come later and be optional if the idea is that you're intending to return that value to keep it as close to the acquisition Point as possible. leading with the value also in, in our opinion, is better for type inference and editors using either TypeScript or flow or one that supports JS for Or for type annotations and such as working with JavaScript envious code One reason for this is that if you had the undisposed common value or as with any of the other as we something like a ray reduce if you are writing code and have that type of type inference, you don't know what the type of X is yet because you haven't provided it. Therefore it's really hard to write this callback. Instead, you have to write a right? I, think you're going to actually be disposing, then go back to where you started and then write the code that you would have used for disposal disposal. So this is a very poor developer experience for those working in editors that have this inference capability. Where if we continue to use the value comma on disposed order then by the time we get to the point She writing the disposed callback. We actually have the type of the things. So it's much easier to write which improves the developer experience. developer experience. JH. had said earlier in chat that he was going to be unavailable for this talk. that his concern, he believes is still valid. and that if we do decide to move to stage 3, that he would ask it, be conditional on resolution of this situation. And so with that, I will lead to comments that are in the queue. and we can talk about the status of The Proposal. &lt;End of slides>

SYG: I think I'm first up on the queue. I'll start. So I added this earlier when you were talking about the auto bind concerned that I had. my main concern, there was the kind of the Hidden per instance storage and the behavior being different or something that looks just like the regular method. After you show me the use case, I think I would be ok actually with a function that combines the move Plus explicit creation of this of the bound. dispose. But if you as Champion are happy with just using arrows, that is, of course, even slightly preferred.

RBN: by me, but I think I'm happy with using preferreds…. I think I'm happy with using Arrow functions the idea to add the disposed as an auto buying method was something that came from I believe someone in the community that thought it would be useful. So, I can see there might be potential that we might want to consider adding something like that in the future, but I don't find it to be as strong motivation with arrow functions. with the only downside being that you have to create a closure variable or a variable, you close over to make that work. So, I'm less inclined to use auto bind, I do find the existence of a regular just dispose method, helpful. Just like we have. values on array and map and set and keys and entries on. on those. which some of them are just an alias to the same method that's used for iterables. So I found those to be useful but was less inclined to maintain a auto bind given the discussion that we were having

SYG: Agreed. for the strings the string name aliases being useful.

KG: I don't really like the idea of including the async stuff without syntactic support for it. I find it very strange to be introducing a symbol based protocol that actually isn't a protocol because the syntax doesn't exist. I would be happier if the async stack and the async dispose symbol were only added when async syntax comes along. I don't… it's not the end of the world, if we include it in this proposal if everyone else disagrees with that, it just seems very strange to me.

RBN: so, we've had multiple discussions on the proposal repo about this. that when I've spoken with folks on the web platform, they're mostly interested in the async features since most of the APIs, they’re working with are asynchronous. So we found that Though, we are. potentially blocked on the. async using syntax that having the capability to use something like an AsyncDisposableStack. and having that API well formed early. stands a better chance of getting earlier adoption Within web standards bodies, getting more folks able to use it early, even if they're having to use something like an AsyncDisposableStack within at the top level of their function to make these resources work. We have more than a few

KG: Didn’t DD say that he didn't want to add anything without syntax?

RBN: I believe DD did, yes. But I've been also conversing with other folks on the web platform and on node.js as well.

KG: Okay.

RBN: Under theirs. less of a name. Click inclination to do much until those exist but I do find that the ability to use a disposables with or without syntax is more important than not having it at all. So I think there's a good opportunity for us to get ahead of get ahead of things here, especially since I think we do have a have a fairly clear. Direction on how we want to proceed with async syntax that It's very likely that once discussions around. async do or leveraging, a customer weight using statement have settled. That I might be bringing that that up Force its own stage 3. that's potentially the January meeting. in which case these would be very close to coming out at the same time. time. so again, I'd like to try to move forward with the async syntax, or with the async protocol, because of the potential of use in existing used within applications that will be using async resources and could leverage things like adopt or defer today. and then be able to bring in the syntax as soon as we have finalized finalized that

KG: I guess I have the opposite opinion. Mostly I am less confident that we'll be able to find a happy resolution for async syntax. I would very much like to, but async do isn't viable for reasons I'll get to later. And so, I'm not sure we'll be able to find something which satisfies MM. And I feel like it would be kind of unfortunate if we ended up in a situation where we have this protocol that exists to support syntax which we thought we were going to add that we then never add. That's my main concern about this. And on the other hand, if we do think that async using syntax is coming soon, it seems like it would be fine to defer the async stack until that near point in the future, rather than trying to bring it in now.

RBN: I'm not sure if MM is present, but in the issue where we've been discussing this we have kind of settled on the approach here. He was in favor is last comment there about using the await async do. Which is why I brought that up in that slide

KG: Okay, I guess I'll just skip ahead.

RBN: So I was gonna say that's a yes MM has does believe that there is a way forward here and that an approach, like that is lot of whether we're using, a that will work. once we have `await async do` or a separate syntax to specifically indicate the block

KG: Okay, well, if he's okay with some other syntax, that's fine. But `await async do` just doesn't work. `async do` has limitations on what you can put within it. And in particular, you can't put control which affects the surrounding context, because if you aren't awaiting, then the async block is not executing in a straight line with the surrounding context. It just doesn't compose. You can't use `async do` for this sort of thing.

RBN: and we do have an alternative syntax were considering, which is this await using block? Since the purpose of the block is to the purpose of having a separate Syntax for the block is to explicitly. indicate that What what is being awaited is the dispose of the using declarations Therefore, a very clear and explicit await using block to indicate that this block contains those basic using declarations sense. And the choice of using. the await using for the block. is to match MM’s specific requirement that any potential asynchronous to interleaving point is explicitly. demarcated by await keyword. whereas the using declaration inside is marked with a I think because it is, not actually doing anything asynchronous, it is only indicating that an asynchronous effect may occur. Therefore, these two things, go hand in hand and I think that might be the best approach that will go that we can go forward with

KG: Okay. well, I will think more about this syntax later but I'm glad there's a potential resolution. However, either way, either the async syntax is something we are going to work out soon, in which case deferring the async dispose symbol until the syntax comes along seems like not a high cost, or the async syntax is not something that we'd get soon, in which case it seems like there is all the more reason not to include the async symbol until we are sure that we can actually get syntax for it.

RPR: So RBN. you've got 11 people, 11 key replies to get through in a bit. Five minutes if you wish to ask for stage 3. looking at,

RBN: We can get through what we can quickly.

SFC: Just a quick clarifying question. Can you await a promise that returns a disposable and does that go into the regular disposable or the async disposable? Like, a promise that returns something with a sync disposal function.

RBN: Yeah, that was actually the first example that I showed is that you can it doesn't matter what the expression is on the right as long as the thing, the difference between using and async using, is that using explicitly looks for symbol not disposed async using explicitly looks for symbol. That async disposed first. And then symbol that dispose of that. If if that didn't exist, just like for-await does.

SFC: Great; in that case I'm fine if async dispose is dropped.

??: next I think is MAH.

MAH: I want to say that. the async using could be a lot today in a position where we're already configured, where we're okay with it being there, which is the top level of an async function, or the top of a for weight of block. The. concern is that it doesn't cover all the do scoping that programmers may be wanting to do. and using for weight off is a bit of a hack if they wanted to create a block there. So, we do need to find a way to create a block That is clearly marked within the way to keyword. I hear KG's issues with the async do expressions. I believe, RBN, as a alternative syntax that's who We maybe we can all agree on and but but I do see a path forward. and I would prefer if everything went in at once because it seems that async async usages. are the primary usages. has that ecosystem is interested in.

RBN: and I'll say, one more thing to the discussion about, potentially deferring, the async symbol and async DisposableStack. When in the last meeting I proposed maintaining those while splitting off the rest, were primarily because I wasn't sure. We had figured out the async syntax yet. I do think that we are pretty close to that. So I'm actually more comfortable with potentially postponing those. since I hope to again, present, specifically, the async portion of this. at the next plenary. And so, I am perfectly fine with postponing those given that. We believe we have a clear path forward.

SYG: then there's nothing I need to stay with you.

RPR: Patrick says, plus 12 on these concerns. Many to talk So next is SYG again with "what's the suppressed part?"

SYG: Clarifying question, what is the, what's the intuition for why? It's named suppress error? what is being suppressed by? My intuition is just that it's being chained. there.

RBN: I'm not sure where chaining comes in. That doesn't… let me see if I can find the example here. so, I'm not seeing chaining. because I don't think that a group describes what's happening, What's happening in a case? Like this is that you have an exception that's thrown at C but then an exception that's thrown at location E here would otherwise replace that exception so you don't even see it. so it suppresses it. this is a term that's used in multiple languages Java. exceptions have the Java exception class actually has access to get to these suppress error or suppress. Options. You can walk those exceptions. So we've chosen to call it suppressed specifically because that is I think the best terminology to use you are This is a suppressed error. What do you suppressing? where you are suppressing this other other error?

SYG: So, it's okay. So suppress this it's here, It's more like shadowed

RBN: shadowing. But yes, the term that's generally use has been the term suppressed,

SYG: Okay. That okay I'm I'm a little bit. It's not going to block stage 3. I don't think I didn't quite understand the like why it's called suppress. I need to think on that if it's well understood in other languages, could you be just me?

RBN: OK I use Java as the example, the Java adds a method to an error or two exceptions allows you to navigate to the suppressed exception. But because JavaScript can throw anything we don't have anything to attach that thing to us is, we don't restrict that, it's only errors. So if you were to throw hello world from location e here, there'd be nothing to attach it to their for the suppressed error is a contrivance to wrap the error that you through. in something that we can very clearly state that this caused a suppression. Here's the error that was actually thrown in the, here's the thing that it's the bat are are suppressed.

RP: RBN. You only have 2 minutes remaining, so I think if you want to ask the stage 3 and now is the time or you could use that time to just go through the queue and get more feedback,

RBN: I don't know if the queue items that are listed here would our would block advancement. One seems to be just a question about ordering.

RPR: is anything on the Queue potentially blocking advancement? That's to Alexander WH and EAO.

EAO: on my part, I would like to. So when I look at this proposal, I see a lot of suggestions for how the syntax variant of using makes life easier or reproductive outcomes, but I'm not seeing really almost any examples or any examples of how other disposable stack with the async Disposable stack is making things possible or easier than they would be.

RBN: Otherwise this is, something we discussed in multiple meetings and on the issue, tracker as well. One of the things there are, numerous cases for DisposableStack that I've actually used in the ecosystem of a look at things like VSCode has a disposable container for disposable that are used for. used by. all of its extensions. This is a thing that exists in multiple platforms. Dotnet has one ands python as well. And one of the things that it really helpful for is is working around. and, the foot guns of class Construction. This is a significant issue. We specifically discussed it last plenary that it's really hard to do this right without a convenient container mechanism and DisposableStack provides that container mechanism and does it in such a way that is consistent Needs. specific concerns with the that we have around using, which is why it's introduced.

RPR: Okay. RBN. We're at time. So do you wish to ask stage 3?

RBN: Yes. So I'll go back to the slide. I'm seeking stage 3. for using declarations and disposable stack. It sounds like we might want to postpone a sync DisposableStack. and such a advancement would be conditional on the outcome of the discussion with JH Around The Ordering of adopt.

SYG: I want you to be be clear on what you're asking. Not, we might postpone a sync.

RBN: Now, I'm sorry. I'm trying to say it's conditional on postponing async disposal stack. And symbol .s and disposed to the async using declarations part of the proposal.

SYG: So there's two conditions. There's the the deferral of the async parts to be done together with the async syntax and the reaching a resolution on JHD’s argument. Ordering is that do I understand correctly? That is correct.

WH: I also have a comment on argument ordering in `adopt`. Putting the disposer first makes it less likely that, if you get an exception while computing the disposer expression, that you fully calculate a value and never run the disposer. That’s because, with the reversed order, if computing the disposer throws, the value expression is not evaluated. It’s a factor but I’m not sure it's compelling enough to affect the order. I'm fine with this being in stage 3 with the two conditions just stated.

RPR: I just going to clarify So the the ask here is stage 3 without the AsyncDisposableStack and symbol and then we're deferring the to the argument ordering that adopted.

RBN: Yes. let's so which differing that the advancement would be conditional on that.

RPR: Yes. it will be resolved within the state. Okay, do we have any objectiong? Do we have any support for advancing us to stage 3 based on that?

WH: I support it.

RPR: We have two thumbs up in the room from PST and SFC. we have support from WH and KG on the Queue and SYG. So you have a lot of support. Do we have any any objections?

DE: I support advancement, can I register a request? not for not for RBN, but for I guess people who work in browsers. runs filed an issue. asking in HTML. How did you work with web platform that the proposal is long? had you know, a section in the readme describing how it would work with, with the web. I don't know if it's gotten much feedback on that part. I don't think this should block stage 3 because Ron has done this preparation and and integration proposal work. but I encourage people to get their kind of HTML departments on this too. see if they have thoughts on this. But I think that could be done later. they can this proposal makes sense whether or not various web features decided to integrate with it. So I support advancement.

RBN: Thank you.

RPR: Then there's nothing more. Congratulations. You have stage 3 subject to the conditions we've already said.

RBN: And I know I'm over time box. And I apologize for this but I also want to make sure that So they sync using async disposal stack. and symbol async and planning to split off. hoping to maintain stage 2 for that. And I'm also plenty of put off void bindings. I'm that I'm I'm fine with it. Actually re-proposing. It's stage one. one. But I want to make sure that We don't. have any. objections to maintaining stage 2 for those features that were splitting off.

DE: Sorry, I'm not really sold on void bindings being stage 2. I think we probably should go with another approach. That's not based on an operator, but using it in a not operator kind of syntax. but I think it's important, it's a really important problem to solve.

RBN: So, Mark that. one out. Like I said, I'm happy to re-propose that at stage one if necessary. So but at the very least I think there was General preference for pushing this. Pushing the async using, I just want to make sure that if I can to maintain stage 2 for that. Side of the proposal. Are there any objections?

KG: I explicitly support keeping it in stage 2.

RBN: Thank you.

RPR: Alright. That part is kept at stage 2.

### Conclusion/Resolution

Stage 3 with the following conditions:

1. No AsyncDisposableStack

2. The argument ordering will be resolved in Stage 3

The following parts remain at Stage 2:

1. AsyncDisposableStack

2. `async using` syntax

The following does not remain at Stage 2:

1. `void` syntax

## Module Expressions

Presenter: Nicolò Ribaudo

- [proposal](https://github.com/tc39/proposal-module-expressions)

- [slides](https://docs.google.com/presentation/d/1p5YTy0tAIlMrTKonl-hDwyR1ikHbOGa97hO0JlyEaqE)

NRO: Okay, so yeah, I'm going to present the module blocks proposal, which has been renamed to module expressions. This rename has been necessary because of a separate proposal previously called "module fragments", that is more or less in the same space, and calling them module expressions and module declarations makes it easier to understand the difference between them.

NRO: Quick recap, what are Module expressions? They allow you to define modules inline in other files and import them using dynamic import. They have their own scope and do not capture bindings from the outside, which means they behave almost exactly like modules in separate files. One big advantage of module expressions is that they are serializable, which means they can be transmitted to workers using `postMessage`. Workers are actually the main motivation for this proposal.

NRO: So right now, there is a high barrier when working with workers because you always need to create a separate file, and you cannot co-locate code that logically works together on the same task in a single file if it's meant to be executed in multiple places. There are some libraries that allow us writing the worker code inline. For example, greenlet. Those libraries usually take a function, they stringify is and send the string on the other side, and then `eval` the string to get back a function. This works, but it has some problems. For example, it's not clear that this function cannot capture bindings from the outside. Or if you have dynamic imports with relatives paths in this function, then it won't work when passing to the other side because it loses the referrer. Also, there are problems with CSPs because it's a string. And lastly, you cannot use static imports in the function: you can use dynamic imports. And with module expressions, we could have something like this so greenlet-like libraries could be updated to take a module expression, and inside this module we can do whatever you want. We can export functions, and there is a clear scoping difference from functions. So that is clear that you cannot capture bindings from the outside.

NRO: So, what's changed since last time we presented this? We have removed a shorthand for modules that only export a single function, mostly due to concerns about the scope of default parameters. There is no clear indication, other than the `module` keyword, that default parameters cannot capture bindings from the outside, because there are no delimiting braces. We do not have strong evidence that this shorthand is necessary, as every library currently does what module expressions would allow us to do using functions only. So we don't know if people need to use functions, or if they just don't have alternatives. This is just simple sugar, so it can be potentially introduced as a separate proposal letter.

NRO: Module expressions now evaluate to a module object, which we have renamed from `ModuleBlock` to `Module` to align with other modules proposals. Specifically, the `Module` and `ModuleSource` constructors proposal presented yesterday includes a `Module` constructor. The `Module` constructor that module expressions introduce is very limited and does not have any properties other than `toString` on the prototype. We have made it as small as possible so that module expressions do not depend on other proposals and can move ahead, while other proposals can expand the capabilities of these objects.

NRO: We now have written a specification text on top of the refactoring that is hopefully going to be merged in soon in ECMA-262, which changes how modules loading is divided between HTML and 262. Importing module expressions does not go through host hooks anymore, so it's completely contained within 262. Well, except if the module expression imports some external dependency.

NRO: We have continued working on host integration. We have not yet updated the HTML integration pull request yet. However, some details about how it works are that `import.meta` is built using the same data as the outer module. This means that in practice module expressions share the same `import.meta.url` as the outer module. It is already possible for different modules to have the same `import.meta.url` if they are in the same file. If you are using two different `script` tags in an HTML file. JHD is not here, but he asked me to mention that he thinks that every module should have its own `import.meta`, and that we should carefully consider the implications of this choice before asking for stage 3.

NRO: As mentioned earlier, module objects are structurally serializable, so you can create a clone of a module object. HTML will copying relevant parts of the `[[HostDefined]]` slot that module records have, where host store information like baseURL, which is needed for resolving URLs for imports, so that even if you pass a Module to another worker imports will all work as expected. When you clone a module object, you get a fresh module that can be imported and evaluated again, starting from a fresh state. Structured cloning works the same way for module objects as it does for other objects. If you call the `structuredClone` function with the same module object twice, you will create two distinct modules with a fresh state. They are still deduplicated using the classic rules, so if a module object appears twice in a single `structuredClone` call, it will be deduplicated. If you import a single module twice, it will only be evaluated once because its state is already evaluated. However, you can clone it and evaluate it again. This also means that the namespace resulting from importing a single module twice is the same object, but the objects from importing two different copies of a module will not be equal to each other.

NRO: Our main motivation was to make workers easier to use. However, after discussing with the HTML people, we found that allowing module objects to be passed directly to the Worker constructor risks encouraging people to spawn too many workers. So there are discussions about alternatives, and one of them is "blank workers". Blank workers are workers with a default implementation, and there would be a method (the name of which has not yet been decided) such as `addModule()` that allows a module to be passed to an existing worker to be executed. This would allow multiple modules to be executed in a single worker. This is exactly how it currently works for worklets. So for example, you can currently use `CSS.paintWorklet.addModule` with a string specifier, and `addModule` will load that module: the natural extension to that is to just allow module expressions there. Are there any questions?

SYG: Yeah, just step. blank workers are currently. There's not much there there yet. It's as far as I understand, it's just been kind of this idea thrown out but by be Kelly. I very much like the idea and I would like to somebody to pick it up more. I'm trying to find some owners. But yes. like workers cool, I wish you were more of a real thing, right?

NRO: We have them pushed as much as we would like to get on that, but it looks like it's had the adapt makes, most people had this car

DRR: you know, maybe the elephant in the room, I guess I'm the elephant in the room. is that the amount this syntax is now seems to be used at the expression statement leveling and so at the very least, TypeScript has had this notion of internal modules which which I think Is a? concept that kind of was discussed early on in this committee. and so we have for better or worse TypeScript needed to have some sort of implementation of modules. back in the day, and whether or not there's going to be an interesting concept of internal modules, which are we now, call namespaces and I tripped or if they're going to be external modules that we just called modules now, was unclear. So we did both. and, so now there's you know, if this was simply at the expression level, then it would be a different story but it's still weird. But now it seems to be the case that this is also, you know, statement expression or Declaration level where you can witness these and not have to bind them to a local variable at least in the examples that are given in this presentation so far. I don't know if there's an easy path forward with that. I, know that we would prefer to have people use the namespace keyword, and we prefer people not to use namespaces at all in TypeScript these days. But there is certainly a large amount of code that continues to use it and that's definitely a problem for us. So, I think it warrants some deeper discussion there in terms of like what the future direction that is.

NRO: so, just to clarify: is the `module` Keyword in TypeScript is deprecated, or it's justnot encourage anymore in favor of `namespaces`?

DRR: it's not deprecated right now, so there's no warning that if you use it we're considering that for our next version. But at the very least, deprecation means that you won't get a warning until maybe a few versions in. And then, after that, We will we won't cut it off for like another two and a half years probably, probably

??: Okay, thanks. for the clarification. You have a reply from JWK

JWK: I have tried to implement module expressions in TypeScript and currently, module expression does not conflict with the TypeScript module, because typescript requires a module has an identifier after the module keyword. But yes, module declarations will conflict because they share the same syntax.

NRO: so, if necessary can we bring up this again later with module declarations, since it's currently a separate proposal? Because that's the most likely to complete with that: it uses the same syntax space.

DRR: I was unclear from the presentation. If that was a combines thing or that was part of this. Now, it's still definitely a concern right With having this notion of like a declaration that may not exist, but still existing like a variant of JavaScript, right? So think that that is going to be a difficult thing for us. but I think we can continue in the queue.

MM: So I'm confused about whether the module expression. you say evaluates to a module, rather than a module source But you also say that it's serializable into the past to workers, certainly, a module Source internal record of the modules source is is, is serializable and can be passed workers. If a module has other context information. that. I don't understand how that would be serializable. So I'm confused.

JWK: Maybe not. addModule can access the module source internal slot of the module block. Sent to the worker and automatically reconstructed a new module instance with the import hook in the worker.

MM: Where is the import hope within mean they're the. So there's no context on the reception side, for deciding what the import hook Etc is just receiving a first class value over postmessage. There's nothing that provides a context.

NRO: The `Module` constructor as proposed by the Module and ModuleSource constructors proposal is not serializable because it has user-defined functions. Modules created using module expressions syntax are serializable because all the context is not user-provided, but managed by the host. So the host can serialize the source and all the data like the baseURL, and the information to say if this module has been created with a model expression syntax. So it just uses the host-define import logic and it uses this context that the host manages to resolve dependencies.

MM: So, I completely don't understand that answer. The, it seems, it seems like you're sweeping things under the host rug rather than rather than providing a coherent answer. that would only what you're saying would be coherent only if there was something coherent for cut for hosts to do with responsibility, you're delegating to them and the problem seems just as impossible in the host side, There's no basis for what context. to reconstruct on reception site. That matches the context of the module, that was sent.

NRO: So, the only context that the host needs is where to start resolving. Because the host uses host-defined hooks, and those are always available, they do not need to be serialized because they're just the default implementation.

MM: if there are multiple such context in the receiving worker, just receives the module object over postmessage. there's no coherent answer about What. import hook hook context associated.

NRO: Can you clarify exactly what context is in this case?

MM: is the, you know, the important. okay? Such the it needs the context. I mean, if you were, if you were passing a specifier string, thus the when you use a specifier string, it's on the use of the specifier string. That all of the context is provided for resolving the specifiers rate. Likewise if you the coherent thing to me is to pass a module source. and then it's on the use of a, my, the that you can do with the module Source, because as the module source does not have context, it's all of the uses of the module source that have to provide the context. There's no context that comes with it. and the module sources of first class object can't be magically provided with context. And in a place where there is no Natural Choice about what context to provide. And I would, I would say that the receiving module over postmessage message is one of Situations. Where there is no coherent choice about what context provided.

DE: So I'm on the queue. Can I address this?it's very difficult to talk about this in a host neutral way. It's possible that the logic here which has a specific to certain host, so, you know NRO described, the the HTML increasing being something something as part of the this proposal for HTML and other similar hosts, The there's only one host, took the context consists just of the base URL. that relative paths are there. module specifiers, our result relative to. That's the that's the context and that context is really serializable if other hosts have like multiple import hooks, so they're juggling between from the same host made that might not be serializable. but do you see what I mean? Like we if we get concrete and think about can this be serialized in the context of HTML with HTMLs built-into import hooks then it becomes more clear.

MM: Okay, so the the, the the agent that is receiving the post message, might be an agent that contains for example, multiple realms. And the Realms might be associated with different. import hooks.

DE: So in HTML when you send a message it gets sent to a specific realm that's that's well defined I mean, at least it. get it gets received by a by a particular realm and then when it receives that then it can use that Realm’s import hook. It's not, it's not sent to an agent for the, if it if something is sent to the dispatch. for the agency. Well, that dispatch happens at some point and then it gets received by the realm and the realm can use its import hook. okay?

MM: So I'll just, I don't need to take any more air time on this. I'll just say, I'm I'm very puzzled by this issue and I think that included that. I think that this kind of implicit context re-creation is a bad decision. But I'm happy to take it up offline.

DE: Yeah, maybe if you can come to some of the module Harmony calls and we could discuss it more there.

MM: Okay.

DE: I think we've made a lot of progress on. on this question, in particular, in that form.

GB: what I'm asking about is somewhat, the kind of related question on the module source side. and I appreciate that. at least for the module object. that 11 losses that kind of input hook. customization information during reach It's true. but I was wondering how information is maintained for module source when module source is used in turn for within realm virtualizations(?). So in those use cases where you do want to create multiple customizations from a specific module expression, in the slides NRO mentions the Host to find data on the module is, is automatically cloned. I was just wondering how this host to find information is carried through to module Source, or is it entirely abstracted away from from module source.

NRO: So, the [[HostDefined]] slot is only necessary for instantiation of Module instances. And ModelSource does not need this because module source does not have any context.

GB: so, if I were accessing the.source, of the module, I would get something that basically only encapsulate, some The Source text string but none of the other host information about that module and how do you propose Start to integrate with. things like CSP.

NRO: Okay, well, I guess the ModuleSource was still have some CSP data. However, this proposal by itself does not give access to ModuleSource. But yes, the ModuleSource would not need to only be a string, but also have the some host-defined data that says "this string is considered safe". Still, that it does not give any problem to ModuleSource, because like that data is serializable.

GB: Sure. Thanks.

RPR: Back to Daniel.

DRR: So you mentioned lenders as one of the things that is useful here. or why this has like advantages over just a string of flying over the actual code that you want to run in a module. So I'm linters there's also type Checkers if you want to kind of like love them in the same category. So so one of the early feedbacks back in stage one that we provided on the was often one of the biggest use cases that you have here is you're going between like, a dumb (DOM?) you know, the down worker. and you want to like spin up a web worker or something like that, To try to communicate with. and the globals there are completely. I mean there, there's some overlap there, generally different, right. They conflict with each other. and it is difficult for us to model. a world where a module inside of another module, that they actually see different. globals in some sense, so from our point of view, that's all about, configuration declaring. What stuff exists? What stuff is available? what is valid to use and what is invalid to use? And we've tried to think about ways to make this work at least in a way that is like clear. We still don't really have any great Solutions I think this is the same is this is the case for other type checkers, like Flow as well. First from the discussions that I've had but their team so, I think it's a tough spot and it's especially kind of you know, unfortunate given the fact that much of the time when you're doing things across workers you, we will have a project that is like complex and bigger in some cases to and those are the cases where you often benefit from something, like a type checker. If you are still running it to just friction there, That's, that's something that I you know, I don't have an answer to now, I don't know if we will have an answer to it since we've thought about it for a bit. but maybe you know as a user you just kind of have to say like well I'll find it, I'll find a way to hack around this across projects and make it work somehow. So there are at least your entry point, maybe like a little bit better to use but otherwise you have to like defer to a different project entirely. So Take that as feedback of like, I mean, maybe it's something for everyone else to chew on as well, But it's something, where we find it difficult to support in any meaningful way. Maybe a big part of the use case, here is like not solvable by types(?).

NRO: Okay. Thank you. This is because TS only allows specifying the type of module in the config file, and not inline in the module, right? So we need a way to let type checkers… Well, we need to work with type checker, to find a way to define the type of the global object inline in modules.

DRR: not just the global object. but like the namespaces like the eyes use namespace as like a more General. The concept, the world in the world in which like values within the world in which like type slower than and we need to away to end of the world in which like modules themselves, living like how they're declared in some sort of, like, Global scope dolphin(?). That's like the file system. for example, but it can be more than just the file system. So those all sort of interrelated and the way that we you know, we don't have fine grains ways of Trying that in parts of a project, right? The way that we kind of load things is we have the notion of ulis and files. We find a transitive closure of their files. That they sort of reference. and then you when, when you, when you start with that Roots at the files, you still also have a set of like configurations that you can give us two and you know, there's exceptions of things that can be added in But you can say only for these files, they see part of that world or a different world. Old. And so, Our granularity level is projects, that can often refer to other projects. There is no notion of like embedding a project inside of another project. It kind of gets really funky to start thinking about that. So it's a, it's a difficult thing for us to support. and we've had like ideas of what. Oh well what if you did What if you had a way to like specify options within a module expression. Things like that. but it doesn't really solve like how do you how do you know whether or not a file is like reference by that inner project versus that outer project will sense. It gets kind of messy. so I think that that is one of the tougher points for us to solve and no type Checker that I know of for JavaScript has this solved. Actually, most type Checkers that I know of solve this only in the form of something like, #ifdef(?) like, C or C++, And I think that's kind of like me, not this specific problem, but things like it.

SYG: Yeah, I want to reply to DRR’s answer. It doesn't seem terribly worse to me to have complete like you can do this as a without any type checking. support and they would still be marginally. better than the status quo of having a string literal that doesn't have anything Like not even you know syntax while forming its checking,

DRR: its relative. So you get you get no syntax checking. but, if we try to aggressively provide semantic, errors and that just becomes noisy and sort of annoying

SYG: I'm saying you don't, it becomes like a slightly better string literal, but it's still like better than what it is today which is a string literal.

DRR: Yeah, I think that that's been floated and that's that's definitely something we could provide And maybe there's a mode where you say actually don't from don't provide any errors on any of this stuff. just do a best. Effort sort of check. It's not the craziest thing. so, I can kind of float that on our our team.

RPR: Thank you. So we're at time. Nicolo to say a final wrap word.

NRO: So yes, thanks everyone. I plan to work on these issues. We would probably present at some feature meeting with some solutions to this problems.

## Module declarations

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-module-declarations)

- [slides](https://docs.google.com/presentation/d/1uUzU9vKPoHq566TfT7doZUUdfEzi60frYcw-VJ7RdcM)

NRO: Okay, hello. It's me again. As RPR mentioned, the module fragments proposal has been renamed to module decorations. Initially it was a very different proposal from module expressions, but we've renamed it because the proposal has changed enough that it can considered as an extension or a follow-up. As you could guess from the name, module declarations are the declaration form of module expressions, and so they we behave like shown in this example. A module declaration is like a cost assignment with a module expression. However, model declarations give us something new, which is that you can statically import them either from where they are declared or from other modules, and so this also extends what models capture because it upgrades from nothing to visible module decorations. Visibility follows the usual scoping rules. And what is the motivation for this? It's quite different from module expressions. What we're trying to solve now is bundling. Modern JavaScript apps have many many files, and loading them one by one has some like different performance problems. Like, going back and forth to the different requests. This is partially solved by HTTP2. Also, you get better compression if you have single big file with aggregated things, it compresses in a more optimal way. And well, we probably all know about bundlers like how they already solve this problem.

NRO: The problem is that maintaining the ESM semantics is hard. There are mainly two different approaches. Some of them merge all the top level scopes, and Rollup is an example of it. So you need to rename variables, you need to manually recreate namespace objects when you have a namespace import. And you cannot really represent the semantics of TLA, because if you put everything in a single module, you cannot have modules executing in parallel. Other bundlers wrap every module in a function, for example webpack does that, however, it's quite hard to preserve the live binding and semantics across different modules and you have to manually manage things: you have a JavaScript-written runner to link all the functions together instead of relying on the built-in logic to link all the modules together. With module decorations, bundlers could take different files as they do now, and almost only concatenate them in a single file using module declarations to represent all the different modules, and they only have to rewrite the specifier of an import statement to refer to the inline module decoration, instead of existing external files.

NRO: There is a parallel effort in other standard venues to optimize bundling, which is the "bundle resources" proposal and it allows containing different sources such as images or css files. We believe that module declarations and bundle resources can coexist, because they work at different levels. Bundles are at the HTTP level, so you still have to go to through all the network layer logic in the browser implementation to get files out of the bundle, and module declarations are within 262. So they are like more closely to where they're needed. And also, usually applications have many more JavaScript files than other resources, so it makes sense to have a solution that specifically tries to minimize that while working in parallel on other optimizations.

NRO: What's changed since the last time we presented this proposal? We have added a specification text that is built on top of the specification text for module expressions, so if you want to read it make sure to read the other proposal. This means that this proposal can only advance if module expressions also advance. One of the main changes is that instead of using strings with URL fragments as the name of modules, we now use binding identifiers. In addition, module declarations can now appear at any level, whereas in the previous version of the proposal, you could only have a list of top-level module declarations in the top-level scope of the module. By default, module declarations are now private and must be explicitly exported using the `export` keyword, similar to other JavaScript constructs. The original proposal had everything public by default and allowed access to any module fragment by adding the fragment to the URL when importing the module.

NRO: To import module declarations from other files, you use the existing `import` statement. For example, if our previous module exports a bundled module, you can import the bundled module and then import things from it using the `import` statement. As mentioned before, in the previous proposal you would have added a URL fragment to specify the module to import.

NRO: What does this mean for the HTML integration? We still haven't opened a pull request because the proposal is still at stage one, but our plan is that module declarations inherit almost all the decisions from module expressions. So, importing them is completely done within 262. They inherit `import.meta`, and they can be structured cloned across workers. It's important to not notice this difference, which is that module declarations capture other module decorations. So you could have a graph of module decorations and transfer the whole graph from one worker to another. And it works the same as `structuredClone` already works. If the same declaration is cloned twice in a single call, it will be deduplicated, like in this graph. And, I mentioned that loading of module declarations is completely within 262, except that there is some complexity related to how to import module declarations from other files work. Because in this example, the JS, cannot start importing until we finish loading 1.2. This complexity doesn't currently exist. Currently, we can load all the importance in parallel. So we need to adjust the loading logic to allow some imports to be blocked on others. And that's all, thanks for listening.

NRO: Before going to the queue, I just want to quickly mention that since JHD isn't here he asked me to say that he finds this scoping rules of modules weird because module declarations are Linked together before evaluation of the module. So if you can import a module declaration like this, but if `numbers` was a constant variable whose value was a module expression, you could not statically import from `numbers` anymore because numbers would only be available at runtime and not at linking time. So, yeah, let's go to the queue and remember that and I plan to ask for stage 2 at the end of the time box.

CP: the TDZ, there is not really a TDZ. It is more of a developer expectation. When they do the same things with function because they cannot really call those functions. during the linkage and evaluation phase like this is kind of new now, you have potential failure in the linkage process because you have a thing that is not declaration is an expression, and that might trick some developers, but I understand that that might work well with warm.

NRO: So, module declarations are hoisted in the same way as strict-mode non-annex-B functions are hoisted. So you can use them before the declaration, which means that if you import a module declaration from another file in a cycle it's hoisted, so it should still work. Yeah.

CP: So what if what I'm saying is that today, if you doing that with functions, you might get to import a function and export it again. and, obviously hoisted. but the with modules now, you'll be able to Simply modify your code and the function will work fine, but you're making from declaration to expression and it continues to work unless than the function is called. But for modules is a little bit more harsh I would say because you can only work if it is a declaration, if you make it an expression it Doesn't even link anymore.

NRO: Okay, yes. Thanks for clarification. So yes, this is similar to what JHD mentioned, which is that module expressions are only available at evaluation time, so you can not statically import from them and you can only statically import from module decorations.

GB: just add. I assume the implicit assumption is that module decorations are constant declarations and they can't be reassigned. all other module decorations are actually real assignable, in ECMA 262,

NRO: Yes. Thanks for pointing that out. Yes. module declarations have const bindings. The reason is that you usually want to use module declarations at link time. So, assigning to declarations might give you some expectation of changing the behavior imports, but that's not possible because they've already happened, at module linking time. You still have the variable containing the module object at runtime, so you might want to replace that I guess. We've not found any good reason to just use let for module declarations, but it's definitely open for discussion.

DRR: I think this is more of a clarifying question but it relates strongly to this because I mean, Basically. what I realized was, okay. I mean, depending on the semantics of this, you may not have perfect static analyzability, right? It sounds like in order to do that, you basically are saying, okay. well if you do want to import from one of these module declarations it needs to be like somewhat trivial irresolvable in some way. And so it's I mean, I don't know the specifics like if can you you export a module declaration from another module. and can that then be imported from another module

NRO: Yes. So right now, the spec text adds to the module record a list of exported modules declarations, so that before execution all the modules declarations which it exports are actually usable as module expression when imported from the other side.

DRR: Okay, ISO I think I see what it is. Well, so I mean while you may not have a TDC issue then you don't always know whether or not you do have a An issue with static analyzer ability for some tools, right? Like you don't know, what graph of modules you need until you executed everything. I guess you don't always have that with Dynamic import either. so it's not a problem. It's just more of a sort of concession, right? I think that might be be Interesting, for something implementations but it's I was just kind of trying to assess out the details here.

NRO: I know the graph because you can only statically import module decorations which are exported, and you can not statically import module expressions So you have all the informations about the initial graph before evaluating.

DRR: Okay, so you do you do need to set the name space then you need to be able to track this. Yes, okay.

KKL: Okay. yes, I just wanted to clarify. It is the case that the module expression can import lexically, import a module declaration,

NRO: Yes. The new import form would also work inside module expressions.

JRL: I’m confused about the split between expressions and declarations here. It seems like this is the same core idea and you even mentioned that on one of your earlier slides that this builds exactly on expressions. I don't understand why these are two separate proposals being presented as if they could advance without the other one. Expressions without declarations doesn't seem particularly useful to me, declarations without expressions, like obviously this builds on top of module expressions. It seems like these are the same proposal with two different syntactic forms.

NRO: Yes, these two proposals are very strongly linked. However they have their own independent motivations. Module expressions solve its goals even if module declarations don't end up advancing. Module declarations cannot advance without module expressions because they are built on top of that. And also, other than module declarations this proposal introduces these static imports syntax, that is completely unnecessary in a world with only module expressions. So yes, these two proposals are strongly tied but it still makes sense to consider them as separated, proposals since they're trying to solve different goals and one proposal can live without the other.

DE: I think argument could be made for for merging them or for, you know, switching the switching up the responsibility between one and the other, but I think the main thing we should be thinking about for this is kind of communication with our community and stakeholders. I think it would confuse everybody if we tried to re-layer these things. This is what we saw with the, you know, class features like private fields. trying to climb to make some layering that that was kind of perfect for us internally. made things more difficult to understand outside of the committee. So I think we should be able to maintain and understand the relationships in the complexity here or just the what what Nicolò just describes while kind of leaving the proposal separation in place.

KKL: Yeah, following on from that, I think it's useful to separate them simply because it is considerably easier to advance module expressions than module over than module declarations. And I want to touch upon some of the reasons why. One of the key differences is, related to my previous clarifying question, because module expression can import module declaration in some of the limitations of module declarations therefore import module Expressions, making them less useful. In particular the notion of a module source does not make sense for a module declaration in the way it does for a module expression. That is to say that if you have a module expression that Imports lexically another module, declaration, it is no longer really transferable as a text. you have to have information from the module instance object of the context of the referrer in order for the stringly named Imports of the transitive module declaration dependencies to be resolvable after it's been transported to another worker. So, on the one hand, I'm not keen particularly on preventing the case of serializing a single module to another to a worker because it doesn't harm anything. because it's possible to use the module and module Source constructors, or module expressions in fact, in order to create more elaborate linkage of modules that are cooperative graphs creating bundles of cooperating graphs entirely from module Expressions that are transportable is a single artifact with all of the necessary metadata to another worker for other more, elaborate Arrangements. But with module declarations/fragments in the mix, that's no longer safe. You're not going to have a source necessarily for a module expression. I can elaborate upon that. but I think think that in the Interest of time. I'll stop here.

RPR: Yeah. got less than 10 minutes.

DE: It was definitely a goal of this proposal that module expressions or declarations that close over other module decorations could be serialized. and I think this works, let's follow up about this in module Harmony calls.

KKL: Yeah, happy to. Yes, and the other aspect of this is the concern - no, brain is not working at this hour. We'll talk about it on module harmony call.

MM: Yeah. I think I think my question is closely related but certainly on the same slide that we're looking at right now. what these arrows between the modules here. in terms of the concepts of module objects and module Source objects and import hooks, in all of those, What are those errors if what it means. And the the text talks about pre link to declarations. Can you explain to me in terms of The. mechanics of import Hooks and all that. What a pre length declaration is?

NRO: So, imagine, that A, B, C, and D are four module declarations that all import each other, so we are not going through external modules. It's still, we still need to exactly define how this proposal interacts module module source. Because it's possible that we would have just a single module object for the whole graph of statically lined module declarations. But I believe integration with the Module and ModuleSource constructors proposal is something we should figure out during stage 2 and not now. Well, not necessarily before going to stage 2.

MM: Yeah, I certainly agree that this can go to stage two. without answering this question. So, let me just just note this as a concern for stage 2 which clearly you're on board with, so, that's I'm fine.

NRO: So I would like to repeat the invite to you, to attend in some of Module Harmony Call to discuss this proposal

GB: I was wondering if maybe ron could go ahead of me since I think it's also related to this topic. topic. All right.

RBN: yeah, and I guess I should have asked this more of a clarifying question but I wanted to make sure I have a good understanding of what? what the similarities or differences are between the Declaration and expression form versus how we have function and class declaration expression forms. specifically can I would expect the only differences would be that the module declaration form, introduces a new lexically scoped variable, that's conflict with other Declarations of the same name in that same file, and that the the discussion about static Imports. But that otherwise those two things could be used interchangeably as in the lexical module declaration has a value that is reified at runtime that you could also pass to a dynamic Import in the exact same way that you could pass a module expression to a dynamic import. Thus it has the same module hooks To returns a module versus a module source that that same decision would be made for the module declaration form.

NRO: Yes. Like, unless you want to statically import them module expression, or module expression are the same thing. like modifications just introduce the beginning in console and you can statically or dynamically import that because it's a module object exactly as it is for module expressions.

RBN: So it's a bit like a hoisted function declaration but const.

NRO: Yes.

RBN: All right. Yeah. Just want to make sure that those were consistent because it felt like the ability to statically import. if the direction. Was that the module depression is produced a module Source because that was serializable because a module has linking behavior that might not be serializable that there's a ,discrepancy between statically importing something versus the dynamic import syntax, because Dynamic Imports you would potentially might potentially have to say, wait Imports new module, The the module expression versus what you would do for a module declaration. So that's where I'm worried about there being a inconsistency.

NRO: No, they're the same thing. Because, module expressions can also statically import module decorations, so they can participate in the graph and they can be the entry point of the same module graph, the same way as module declarations can be.

WH: The grammar in the proposal contains separate lines for `export` *Declaration* and `export` *ModuleDeclaration*, but a *Declaration* can be a *ModuleDeclaration*. I'm confused as to how those two `export` cases differ.

NRO: Declaration is an umbrella term for all the declarations?

WH: Okay, so then you have a simple bug in the grammar. You can parse an export of a *ModuleDeclaration* in two different ways: You can either get it directly via `export` *ModuleDeclaration* or you can `export` *Declaration* where the *Declaration* happens to be a *ModuleDeclaration*.

NRO: Yes, they're equivalent.

RPR: Okay. Two minutes remaining. So if you want to ask for stage 2, suggest that we do that, okay?

NRO: Yes for it up this for the topic in queue, please reach out to me. there is any stage blocking concerns?

RBN: My topic is currently in the queue, I do believe is concern for me, regarding the potential advancement for stage 2. So, I want to address that. Yeah. Yeah. So My concern is that. or part of this is clarification, but a module declaration can essentially close over another module declaration in a containing scope. Can it close over anything else?

\
NRO: No, only module declarations.

RBN: This is a bit of an odd, inconsistency, compared to function, declarations or function Expressions class declarations class Expressions that have the ability to close over things. And I understand that that's not necessarily portable. In the conversation, with members of my team, earlier this week, there was concerns raised about the fact that there was not sure that it did not have this. consistency, even if you were forced to, provide those, bindings for, those closures when you actually imported at the at the source location, so there was some concern there that, that might not be also inconsistency between you can close over a lexically declared module declaration, but nothing else.

NRO: Yes. Module declarations… You could consider it as a parallel scope where there are only modules created with the declarative form, which are available before execution, and then and you capture bindings from this scope, because it's all static loading before doing anything else. And then we have the runtime scope where we have all the variables that cannot be captured by module declarations because they're executed in a different phase.

RBN: I'm not sure if Daniel might have any other concerns, but I might say that I won't really block stage 2, but I do think this is a concern, to, to consider. I know that the earlier bleep was dominant in a cola is Luca’'s proposal which was somewhat similar as providing a block mechanism. That was portable did close over things, but you would have to supply those close value. So that might be something we need to talk more. or as we're pushing this up for stage between stage, 2, and stage 3.

KKL: and, for the record, I also will not block but I do think that in stage 3 and Stage 2, we will run into physical limitations that will not allow for the possibility of preserving the invariant the constructing, a new module from its source always works. but

DE: I think that will be fine. And I think we can discuss that later.

RPR: Are there any objections that would block stage 2? Do we have any support for stage 2?

GB:, it very well thought out in line with the other modules work that's been going on. I do have stage three concerns but I don't know any stage to consume. I suppose. for stage 2.

RPR: USA in the room with +1

RPR: I can see that there are concerns on the queue. Daniel did you want to speak to yours? We want to make sure that we bring everything out before concluding.

DRR: I think just the thing about having a world of values and then module values that you need To sort of treat separately. doesn't quite feel right? to me. It's something that I've also voice in terms of. earlier forms of decorators when they look more like macros but so I don't think that's a stage 2 blocker but it may be for moving forward past that.

RPR: Okay, thank you.

JWK: This is different than the decorators case in the static decorator, if you Imports it's you cannot use it in the normal random value space.

DRR: but this although can cure but you can't, you have a special form of values that you can import from, but you can't do that with any other value. Yeah. so your yeah. I mean you're creating a new thing that you can do with Imports but only certain things can be done. You can do that with. so that's where kind of fun I don't want to spend too much time on this,

RPR: All right, thank you. WH. Can you go in 20 seconds?

WH: Yes; Maybe I just don't understand this, but I don't know what happens if you have a module declaration inside a function. When does it take effect and become visible to other modules? What if you have one inside a loop? What other things can refer to it? So I just don't yet understand the interaction of module scoping with our language scoping here.

### Conclusion/Resolution

State 2

Lots of open topics

## ShadowRealm

Presenter: Caridy Patiño (CP)

- proposal

- slides

CP: We want to provide an update on ShadowRealms. I will go really quickly because we have two things I want to spend time on discussing. That's why we asked for 60 minutes today. For those that are not very familiar with it, ShadowRealm provides a way to evaluate code inside a new global context with a new global object. We have been working on these for quite some time. Yesterday we were looking at the first presentation about Realms, it was actually nine years ago from Dave Herman. So a long time coming, hopefully this time around we can get it done. In terms of the proposal, you have the proposal, the spec, the explainer, (we have a new explainer just for errors). In terms of the API, nothing has changed, it remains the same. In terms. of the implementation status, we have implementations in the three main engines. Apple was able to pull it out of Safari 16. That was the concern that was raised last time in plenary. It's not available in any of the engines yet, but it's implemented in all three of them. For today, we have updates on the integration process with HTML. We have two normative changes. very small, but we believe that we need to achieve consensus on those two. And then we have an explainer with clarifications as well.

CP: I will go over them really quickly and we can go into the normative changes, to spend time deciding whether or not those are what we want to have there. In terms of the HTML integration, there was a setback for a few weeks, there was a gigantic spec refactor not related to ShadowRealm that affected the changes that we proposed, and there was a little bit of back and forth with the rebase process, finally. Igalia took over the pull request and updated it, So now it's ready. I've been ready for a week to be reviewed. Additionally, there are other things that we want to provide, specifically a explainer about how to make decisions whether or not new features coming to HTML should be included or not in ShadowRealm. These are not part of the normative text though. It is just going to be an explainer for implementers. I don't know if there is anyone in the meeting that can provide more details, that's where we are right now.

CP: In terms of the normative changes, there are two of them. And this one is motivated by previous discussions in plenary. specifically, from Shu. There were some developer productivity and developer ergonomics issues with respect to errors. specifically when an error occurs during the linkage process of modules or some other error occurs on instantiation of the module. The developers were not getting, at least in the Google implementation, sufficient information. They were not getting the proper error message. So it was difficult to find out what was going on when they used ShadowRealms. Luckily we have the implementation in Firefox that actually went beyond what was already specified. And they came up with this idea of stitching together a better error message that can provide, not only information about the original message. but also giving you the hints that this was happening because the error is crossing the callable boundary. So in this normative change, this error.message can be stitched together by the host using information from the original error. But remember that in 262 we do not have any specification details about the error message, So those are host specific implementation details. So we're trying to navigate the waters of this in the spec text. Providing specific details about how this process of creating a new error message can contain a lot of more information. So in this particular case, Firefox is using the name of the error and the message of the error to stitch together a new TypeError.message when an error is crossing the callable boundary. The TypeError is created on the other side, and the message is now stitched together in such a way that gives you all the information that you might need. in terms of the actual text.

CP: In the in the pull request. we are asking about the part where we specify that when they're resting copy, when the new message is stitched Together by the host, that should not be. that should not cause any. ecmascript code to be executed. Meaning, is not observable for the usual And that these operation is being It's been carry on. This is the area that we want feedback today. we believe is fine. but at the same time, we're not married to the solution. This is what Firefox Implement they figured out how to be able to stitch together the message when the data associated to the arena error was generated by the host or was modified by the user. But if the users trying to intersect these files, or providing the proxy of their own in those cases, they will bail out and they will be just changes the information that they have on our informational That's the implementation Firefox has. We believe this is a good one. We don't know from other implementers If this would be, they would be able to do the same thing. If we decide that this is not What is this is not a good solution then we can do a role I get on the error, which is going to be observable by ecmaScript code. So that's the first number two changes and I think I will just go over the two remaining, three remaining slides and then we can go back to discuss the details of the agent. So keep this in mind. The second normative changes, might be a little bit more more controversial. In discussions with the SES folks, Mark Miller came up with this example that is interesting because up to this point we at least I believe that the membrane implementation was able to cover all the cases to censor the information about the errors in such a way that you Will not be able to observe that you are running inside a virtual environment. MM came up with this idea of getting the engine to throw an error language error that can be captured on the same round without crossing the boundary. a callable bond theory and at that point, you will be able to capture the entire stack. observe that you are inside a virtual environment. As a result of these, we looked into how we can provide a mechanism for a developer to create a better environment that can censor this kind of stack And we come up with nothing else than just providing a normative change that would. prevent the host from leaking this information. there is observed from within as Shadow realm. it does not affect the current state of things where there is no Shadow realm, you get divorced at that will remain the same. Even if there're came from Shadow Realm. But if you are observing their own within the shop around you get censor and the censor means stack frames are going to be removed from the ground. The stock produced by the hose. Again, we do not have anything about Our stock error stocks in 262, this is all outside of 262 but do we can provide guidance on and certain information in the spec that can be used by the by implementers to, to carry on this kind of censoring. to be more specific about it. this is the text that is going that is in the pull request right now. and hopefully we can agree on it or find a better solution. They highlight the important parts, This is again, only when you are observing an error inside, a shot of wrong intents. and the error should only contain any stock information about Inside. The. the chat around, meaning all the functions, all the frames that you can create from within the ShadowRealm that you can observe there anything for not side, you should not be able to see it. And the reason for push for this is because we have no other ways for virtual environments to hook into this process and be able to implement censorship. in userland for this type of error. So this is the second one time. I'll get back to it in a bit in the last one. This is the last slide. There was a request from Google. to clarify in the explainer the story around security and I've been sensitive topic since the very beginning. I believe, I personally believe that this time we are very specific. about what you could do with the shadow realm in terms of security. We have an explainer section now that contains the details about integrity, availability and confidentiality. with the details of why ShadowRealm does or does not provide guarantees around different vectors and hopefully this is sufficient to to get everyone on the same page. I'm not to confuse. users of the ShadowRealm on what the guarantees, are. that's the objective of that. So that's pretty much it I wanted to now open for questions and then specifically wanted to go into the to the normative changes and and get feedback. back from on the plenary about it is two things.

SYG. Question about The normative change number one Number one we talked about this error thing and talked about a division between kind of user errors created by user code and errors created by the system. And that you should be able to kind of transparently stitch together, a better message, if the error comes from the system like file, not found during module loading, but the way I understand that spec text to mean, is that if you cannot observe the data property, access you are allowed to stitch together. A user are like, if it's if you have a user error, that's a pure data property, it's not observable that, you know, there's no getter, there's no proxy trap. you are allowed to that. This together. but if it is a getter or if it is a proxy trap, now, you are not allowed to to stitch together.

CP: That is exactly the intention. That is exactly the implementation in Firefox.

SYG: Yes, Okay that's I'm fine with that. It's kind of weird, I guess, but I have no real complaints. like it's kind of weird in that. that. depend on the how well? The programmer Grox, the JS module so that so the division is pure data properties. I guess that's okay. Yeah to be more beam or to be more specific.

CP: I don't know if there is anyone from Mozilla here that can speak about it, but if you attempt to install a getter on an error for a message or name property, Mozilla will still use the original data value for those two properties instead of calling the getter. It is a proxy, then they just simply do not consider the object to be an error because it does not have the error data internal slot, it's considered not an error and then, the new error will have a generic message. That's what Mozilla is doing. which I think, is better, the generic message in that case is used.

SYG: I see. in the final question is that this is a non normative note, right?

CP: As it stands today, it is just a text in the spec.

SYG: Okay, that's all right. Yeah, I misspoke the, the normative implications is the Underline. underlying heart. All right, but if there is no normative requirement on the envelope messages, they're like we could still just always put the most unhelpful are yet as we're any other end, which okay, and that's the case. Anyways, today for all errors like this pack, does it say anything about errors? that the message? there we go.

SYG: Okay, thanks. I'm happy with going to change point. You. has a reply.

YSV: I'm not the person to ask about this but the person to ask is MAG from the SpiderMonkey team and please reach out to him this week. If you have questions about the spider monkey implementation.

CP: Yes.I will reach out.

JRL: Can you go to the next slide? So this is concerning the censorship of error Stacks. The way that I’m interpreting this is that if I have a host program and I'm calling into a ShadowRealm to do some user program, I can't get any of the error frames that happen in that user program. Is that correct?

CP: if you are outside of the shadowRealm, you do not get censored, you get the same that you get today. The reason for that is you are in the incubator realm, you have full access to create ShadowRealms, why wouldn't you get to see what's going on. The second is if you have any process to do logs or telemetry, you do want to have the full scope of what's going on. so for those reasons you get the full stack. you get the We'll start again. the that's the last line that didn't on ShadowRealm, should continue to expose it the entire stack and remember that we have the Integrity with the boundary meaning non Shadow, realm cannot access an object from inside the ShadowRealm that includes error. So if he crossed the boundary and you are will be created. and data review contained entire full stack,

JRL: So this is only if I'm inside of a ShadowRealm and I receive an error from the host, the host stack will be censored.

CP: Yes, I mean that not an error fun day holds any error that you have access to from within a shot or home to Only see the stack frames Associated to the ShadowRealm. That's the only change.

JRL: I’m still confused, but we can go on.

MAH: the reason CP just mentioned is that it's actually impossible for the ShadowRealm creator to modify the environment inside the ShadowRealm, to do this censorship has to be done by the host. and as CP just mentioned, as currently proposed. the implementation is allowed. and we actually encourage the implementation to restore the full stack frame when the it crosses the code boundary. So that the incubator realm has the full stack trace available and the reason for that is to keep current error reporting tools and other are introspection working in the incubator Realm.

JRL: About where this applies to, the censorship here, I don't understand. You said that, it needs to be censored because you can't censor it yourself in userland. But I don't understand the motivation to censor at all.

CP The motivation is that in some use cases like virtualization, you might want to prevent the program that is running inside the shadowRealm to notice that it is running inside a ShadowRealm or to not detecting which context this program is being evaluated and executed. For those reasons you want to censor information that is not related to the functions that are being in the call stack from within the realm. You don't want to see the rest of it.

JRL: I understand it now, I'll put another topic on, but I think this violates some common cases. There's more topics, I already see more topics about this exact topic. So I'll let that go on.

CP: Yeah. there's one more thing I want to mention, we have an error explainer, it goes into details about how this. process should be carried on, including reentries and so on, when you have cycles of function between Realms and in incubator realms. So it's very extensive.

MAH: to clarify, this is this is something that's needed, not just for Salesforce, or SES. But some community members have asked for for this as well.

CP Yeah. The explainer goes into the details, not only for the stack, but also for the message, on how to stitch that together because we cannot have this information into 262. We need to provide guidance for implementers, so they can implement it.

SYG: I am opposed. to. specify any censorship. I don't think. that it is my bills. Yeah, I don't think we should be. to the extent that ShadowRealms was motivated Beyond mental Beyond with use, cases Beyond membranes this fixes Behavior specifically. for virtualization use case. in the stack Behavior. Like that's the philosophical reasoning. Opposed. having this. normative change more narrowly in the spec. I don't understand what normative Force we can say. If you have, we can say anything about stacks. like it's not a normal thing that we have currently. I just don't understand what you can say about it. You can have guidance but we can also just not follow that guidance and not be a compliance issue either. So there's like a strict strict reading of the spec question. And I really want to dive into that. I don't think that's, that's proof especially possibly, I just don't think we should be fixed when we should be narrowly addressing the virtualization use case. I mean this is kind of related to the security versus Integrity discussion on the explainer that we've had. which is from certain perspectives of security. In the browsers that you already don't have any any kind of Information hiding, because this is in process is open to side channel. Timing attacks you obtain already leaked everything both sides. So to have this additional extra complexity here. I think will further misguide folks into thinking that this gives you a stronger security boundary than it does, which is from browser's perspective for information hiding. It does not. because of, cause of Spectre. So, I mean, and then there's also implementation complexity on top of this, I'm not Opposed. like throw. to two. censorship for the stats here.

CP Yeah, I think you're right. We stated clearly that ShadowRealm does not provide confidentiality and therefore we cannot hide all the information, that's not the goal. So when it comes to providing a mechanism for people to be able to do this kind of thing, are you also going to be opposed to maybe providing another mechanism that can allow that.

SYG : I am not. I know there's the independent I forget what it was called now, but the censorship

a proposal with these use directives a while back and these different kinds of censorships that one might want to do on the test on the frames. If there were an independent. like username Durable way. for both Shadow Realms and for a Library Stone to hide their frames, to kind of opt into this kind of censorship. I'm very open to exploring that Avenue to have this Default behaviour built into Shadow realms for the sole purpose of virtualization. I disagree with that goal. but you also had a different constraint which I'm not sure It works with an independent way to censor Stacks, which is you don't it sounded like you don't compromise that you don't control the code, you are loading into the ShadowRealm. If you did today presumably, you can do some super heavyweight thing of replacing all the stack and capture that Tracy. to make your today. You can achieve this by transportation.

CP: Yes, I see. I see. if you are and you capture the error in the cache. and you process that error before, given into the actual code, code. I find any case, too.

SYG: I don't want it again. I don't want to rat go into the specific design of the other censorship capture a proposal But I am open to that. All right.

MAH: A very quick point. confidentiality is not by default. possible with is not, by default protected against by ShadowRealm. However, it is possible to protect and achieve in production. at least. by removing all sorts of time measurement. we do explain that it is possible and we do it in a way that proven, it's possible. So, yeah. Anyway, back to the stack censorship, ShadowRealm does provide a strong guarantee that you cannot access an object reference from anotherIShadowRealm. or. from a ShadowRealm, or onto your incubator realm from another Realm. V8 has a that Construction mechanism that does expose structured objects so V8 will have to find a way in no matter what to construct its errors. differently. that doesn't expose direct references to objects in other Realms to the stack Construction. Construction. It's I any so your statement that any kind of censorship is it's not acceptable. Goes against the requirements of ShadowRealm in the first place.

CP: Okay. Can you elaborate more on this?

MAH: That quadratic error capture, stack frame mechanism that the v8 has references can provide references to be up to the the functions of understanding. And if those functions are in other realm, they shouldn't you shouldn't be able to have a direct reference.

CP: oh, because of the callablet boundary, got it!

SHU Yes. with boundary and variance should be kept. I agree with that statement and if ba needs to change is custom, stack traces APIs, it will need to do that. But the invariant we agreed on it. The colorful Foundry, the attorney we agreed on is not censoring of like names or else. right?

MAH: So it's not a blanket statement on censoring. stack Construction.

Yeah, the thing is about sensor into like, okay,

MM: Keep in. mind that for V8 specifically. the textural stack is constructed from the structured stack. So if V8 as she just agreed has to do re-engineering on the structured stack API any way to prevent cross realm object linkage. If the if the form of engineering they do there is to censor the cross frame stackable structure. Nurse crackle, stack frames that it will simply fall out of that implementation. That the textual stack derives from the structured stack. propagates the same sensor. and we (?) about that?

SYG : I mean. I can't really speak to that right now

MM: It’s a suggestion to investigate.

SYG: Is that relevant to whether I normatively want this in the spec?

MM: Well, if you're normative if your if your reluctance is in order to avoid doing implementation work, my suggestion is that the path of least resistance. implementation work. You need to do. Anyway, might lead to this result. I see implementation complexity.

SYG: I think out of the things I said. is not the the most Salient reason that I am opposed the most Salient reason. I am opposed, I would say is It. gets us closer. to The. security kind of territory that we were trying to avoid with the callable boundary. I, do. If?

YSV: if I may, I'd like to jump in with my comment in support of Shu's. she's argumentation here because in fact, Mozilla has the same concerns and I'm sort of echoing the concerns that were raised by our implementer Matthew. Go do it specifically. We are opposed to perhaps opposes too strong but we would rather not see stuck censoring in the specification. It's a complication at that. the use of additional resources, It introduces a false sense of security, specifically what SYG was been saying here that giving the sense that there is confidentiality that when there is none particularly, since we don't have a origin boundary here, we can't guarantee that. So we're not entirely convinced that introducing. This footgun is beneficial for the web. and with it. We see sort of limited benefit for the web so we would like to strongly Recommend that it's not included.

DE: I agree with what YSV said about the merits of censorship, I wanted to make a more Scopes comment about what kinds of things we can include in this specification text So in the in the development of this proposal, I was pushing the Champions towards Writing something in the in the specification text that referred to this document that went into more detail. Overall, I think it's important that we didn't do something like publish. I'm documenting it on GitHub and you know, maybe everyone's not on the same page about it and maybe the Champions think that everyone has to do it and other people. and the Center Stone. That would be bad. It’s kind of a misunderstanding. overall. I think it's I think it should be okay for us to make normative requirements. that is not completely. spelled out algorithmically It's not good if the normative requirements have to be kind of solved like an equation. like if we just have a callable boundary invariance and people are supposed to infer, okay? That means I have to use stack censorship and it's all completely implicit. I think that means the specification won't form a good communication device or what form an effective coordination device. device. so, I, I think it's better. These things are spelled out more. There was an earlier draft where there was a note. And the note said, “implementations should do this' '. In general we don't have notes in specifications. We can't have notes that say implementations must or should do that. That has to be normative text outside of a note. I'm happy with the idea of not including this normative text, but I would still kind of defend that it's the kind of thing that if we were to have, it would be in the specification.

SYG:I'll respond to that, so in the spirit of what you said, I agree with Dan and along that Spirit. I'm happy with normative changed one even though it's not an excuse me, completely formerly spelled out. I think the difference for normative change to even ignoring the merits to the scope Question to the scope point about just agreeing to normative text my bar is How likely do I think it is that desperate implementers will read this and arrive at an interoperable implementation and if I feel like know, then I'm going to pose that normally text. Yeah,

DE: That's it. good point. It could definitely use iteration if we were to go forward with it. so I agree with you.

RPR: Queue is empty.

CP: So, it seems to me that normative change 1 is good. We can move forward with that one. and then, normative change 2 is no good, and we will remove it. Is that where we are?

RPR: Any objections right?. Okay. Did we have any messages of support on this first?

DE: I support this change. I want to say I'm exposed to be fine with it, even if I previously expressed support for slightly different semantics there, it's all good. And so the last question would be for the committee for us to get to stage 4, maybe, perhaps a next meeting. the things? Is that you would you look forward to to see? beyond the HTML integration, which is our our hands

SYG Well, I'm looking for two shipping implementations and I think that might be quick for next next meeting. I like it.

DE Sorry. great humility gration. as we've discussed his action from the Champions music where the the categorization of, which interfaces are exposed to expose the ShadowRealm should be at least a motivation, should be better better documented. for some of the cases that that on a raise. I don't understand the motivation. So, that's that's the action at the HTML. People are waiting for and then hopefully we can get further reviews after that.

CP: Yeah, that's the plan. Maybe we should have something very similar to the error explanation. We can have an explainer because doesn't go into 262 spec, It's just an explainer. Maybe we can share it with implementers and agree on it.

DE: yeah, this suggestion of the other ways to put this actually in the web IDL text. Put guidance on whether when to use, expose people stuff. So, I think this is, this is probably the biggest clotting issue before. the proposal is kind of ready to ship in browsers that we that we really get clear definition that we're confident in which interfaces Are exposed.

MM: I added one item to the TCQ. Just a brief note, there is an additional normative invariant that we need in the ShadowRealm spec. We've talked about but I didn't realize till now had not yet been included. Which is the one that was implicit in previous conversation about the structured stock price, that the object graphs must remain disjoint. that the post cannot hosts are implementations cannot introduce things. that Object. create Direct. references across, the callable boundary called The Boundary must remain intact. and I think that needs to be normative invariant that that's in the ShadowRealm spec before, it goes to sleep.

CP: Yes, It is in there Mark, it is spec'd right now. First of all, I believe there is a motivation for all implementers to preserve that, some implicit motivation there, but there is a piece of the text here. Let me find it. I didn't put it in the slides because I don't believe it's controversial at all. But this is the actual text.

SYG: That reads might be worth expanding that to a more blanket thing of like, forbidden extensions that we can't add anything that would end up. produce direct references to another realm direct object references.

MM: Yeah, it's a really important variant in the fact that that, even if it's implied right now, the fact that I missed it and Matt and Matthew missed it. says that should be more explicit.

CP: MAH was working on this with me.

?: Okay. But, but yes, I agree that it that it's worth highlighting. What to do We want to have more details on the East Shore. different wording of this or this is sufficient.

MM: oh, not about the. It's not about errors. it's about the texture highlighting talks about errors on top, I'm saying that there's a invariant with regard to shadow Realms as a whole. the host sent you know that that the object graphs must remain disjoint. that must be an invariant. then you can force implementations that it's impossible to have an object reference that bypasses the call the boundary.

SYG: Yeah, like concretely, I think it should be a clause in Forbidden extensions for inside Shadow realms. You can't do this like for the host. Should not be able to introduce say we had get intrinsic to your student. Should be able to introduce intrinsics from incubator realm as a host API. that would break everything so should be a forbidden extension.

MAH: There is an open issue for this. It's so issue 324 and I have some proposed text in there. it would be good to have feedback on that. That aside, I tried to word it to not conflict with the existing realms, but it would be good to have feedback, especially from implementers to see if it's not overly restrictive.

CP:Yeah, in any case we have to split the pull request, or modify the pull request to only have the first normative change. I can add that to the same for requests or a new PR and ask for feedback from some of you in the pull requests.

### Conclusion/Resolution

Stage 3

- No to Normative Change wrt error stack censorship (remove it)
- Yes to Normative Change on non observable error message, keeping no-user-code
- Champions to improve note about forbidden extensions inside the shadow realm

## Intl NumberFormat V3 - Stage 3 Update

Presenter: Shane Carr (SFC)

- proposal

- slides

SFC: So new information from when we discuss this on Tuesday, so I asked the committee about their feelings on the limiting, the ranges of of until mathematical value and some new information we have is thanks to RCA for doing some some good research on this is that the current rib reality is that Chrome. chrome. implementation. Actually, Firefox and Safari don't agree on that limit. So my question is, because I only have five minutes, I'll jump straight to what I would like to propose, which is that updating the Spec to require a minimum amount of precision, which we can set according to web reality. um, if browsers, support more than that, that's fine. But the sec will only require a minimum amount of precision, and I wanted to see if that… So that's Option 1, as I'm showing here on this slide. This slide is the last slide in the main presentation. So I wanted to see if there's any objections to using this path forward.

SYG: You said web reality. Is this stuff shipped?

SFC: Yeah, All the browser's are shipping this now. so this is about web reality.

SYG: All right. It seems like the safest path forward now is to require the minimum I guess.

USA: I also wanted to say that given that we already have feedback from implementors, we don't have any reason to wait until stage 4.

SYG Is there guidance on the minimum? is the minimum meant to be aligned with ICU4X changed?

SFC: that, that was the intent except that now that Chrome gives us what a minimum might be. We might just match what that is.

SYG: I mean, I think there's some wiggle room depending on how recently we shipped it. What we think that usage numbers are like I don't think this is as set in stone but I'll defer to folks doing the actual field research in the FYT here.

EAO : +1 for the 1st option

SFC: Great. So if we're all okay, with having a minimum limit that will move forward and you know, make that change to the specification.

RPR: Another +1 from DE.

RPR lists the proposal deferred to the next meeting:

- Prototype pollution mitigation / Symbol.proto for Stage 1
- Async Contexts for Stage 1
- Documenting Stage 3 proposals which are not ready to ship
- A procedure for multiple active supporters in committee to achieve consensus
