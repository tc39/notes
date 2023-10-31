# 18 May, 2023 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation | Organization      |
| -------------------- | ------------ | ----------------- |
| Jordan Harband       | JHD          | Invited Expert    |
| Sergey Rubanov       | SRV          | Invited Expert    |
| Lea Verou            | LVU          | OpenJS Foundation |
| Ben Allen            | BEN          | Igalia            |
| Duncan MacGregor     | DMM          | ServiceNow        |
| Peter Klecha         | PKA          | Bloomberg LP      |
| Philip Chimento      | PFC          | Igalia, S.L       |
| Nicolò Ribaudo       | NRO          | Igalia, S.L       |
| Ujjwal Sharma        | USA          | Igalia, S.L       |
| Kevin Gibbons        | KG           | F5                |
| Chris de Almeida     | CDA          | IBM               |
| Justin Ridgewell     | JRL          | Vercel            |
| Ben Newman           | BN           | Apollo            |
| Chip Morningstar     | CM           | Agoric            |
| Daniel Ehrenberg     | DE           | Bloomberg         |
| Daniel Minor         | DLM          | Mozilla           |
| Eemeli Aro           | EAO          | Mozilla           |
| Waldemar Horwat      | WH           | Google            |
| Zibi Braniecki       | ZB           | Invited Expert    |
| Michael Saboff       | MLS          | Apple             |
| Jesse Alama          | JMN          | Igalia            |
| Mathias Bynens       | MB           | Google            |
| Istvan Sebestyen     | IS           | Ecma              |
| Willian Martins      | WMS          | Netflix           |
| Lenz Weber-Tronic    | LWT          | Apollo            |
| Frank Yung-Fong Tang | FYT          | Google            |
| Ron Buckton          | RBN          | Microsoft         |

## Async iterator Stage 2 feedback needed on design/tradeoffs

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-async-iterator-helpers)
- [slides](https://docs.google.com/presentation/d/10y7dAh6LaBqVEV5E7Wb8kDZ9XBkfqTY-pC_JUCBVk30)

KG: I’m asking for the committee’s feedback about some of the possible design decisions and tradeoffs and principles around concurrent async iterators. You’ll recall that async iterator helpers advanced to Stage 3 very briefly, and then we noticed there was this opportunity to tweak the design some, such that it would be possible to get concurrency when using them without requiring any significant work on the part of consumers. But behind the scenes, it entailed some pretty significant changes. And I know this the past we have often done things where the champions sort of go off into a room and design a proposal and then present it to the committee as something already completed, but the design questions here are pretty tricky and not really an area the committee has explored very much so far, so I wanted to hopefully get everyone more involved. So this is something of an experimental presentation in that I’m asking for feedback in a way that we often don’t. We’ll see how it goes.

KG: The proposal exists, but is quite sparse at the moment because the interesting work is not yet specified because we have to decide what the design we want is, hence this presentation. But as a reminder, the basic idea, the simple part, is that we want to make it such that if you call `.next()` multiple times on an AsyncIterator, which was produced by an iterator helper without awaiting the first result, so you call next twice, for example, without waiting for the first one to settle before calling the second one, then this would start doing work in parallel. So in this example, you would potentially be doing two fetches in parallel or one fetch together with one pull from the async iterator, which is of course an async operation. That sort of thing. That is the basic idea, and all of the interesting questions come out around edge cases, basically. Edge cases and exceptions and also flatMap, for reasons I’ll present.

KG: The point of this is that it gives you concurrency and it gives you sort of multiple kinds of concurrency between the mapper and the underlying thing. And it keeps the property that iterators have that they are pull sources, meaning that in this case, the level of concurrency is driven by the consumer. If the consumer is doing a lot of work after each result, then there’s no particular reason to bother with a higher degree of concurrency. So they can pull very slowly and not get any concurrency at all. Or if they are capable of doing a lot of work, then they can pull many times and get a lot of things in parallel. But in particular, you don’t get any new issues with backpressure, because backpressure is still handled the same way it is handled for regular AsyncIterators, which is just that the consumer is only pulling results as fast as they are able to deal with them. This makes it pretty different from many other concurrency primitives: in most places concurrency ends up being driven by the producer of values and you say, you know, I want to do a map with a concurrency of 5, and then that just goes along producing values regardless of how fast the consumer is able to handle them. So I want to emphasize that the core fact about this design is that concurrency continues to be driven by the consumer of the iterator.

KG: And with that said, I am also proposing to include a convenience method, which would call .next multiple times and keep the results in a buffer. This is mostly for use with stuff like for-await, where for-await is inherently not going to be concurrent, but you might want to do a little bit of concurrency between the body of the loop and the producer, so you might buffer one result ahead in a for-await loop or, more generally, if you are going to be consuming sequentially, but you want to tell the consumer that it should produce results concurrently, you can use this helper to do so.

KG: Because it is going to call .next synchronously multiple types, this is not a thing where you can say `.bufferAhead(Infinity)`, because that would attempt to call `.next` infinite times. The pulling is done synchronously because the concurrency has to be driven by pulling synchronously. Okay, so that’s the basic idea of the proposal.

KG: But concurrency, as we are all hopefully extremely well aware, is difficult. There are a lot of tricky cases. So I want to come up with a principle that might help guide us here. And I think the sort of obvious or cleanest consistency property that I can imagine is basically, as long as there’s no racy things happening, no races in the pure sense, and also no data dependencies between the mapper and the iterator, anything like that, then you get the same results in the same order if you call multiple times synchronously versus if you call once and then await and then once and then await and so on. And by the same results, I mean when the promise is settled, the values with which they settle are ultimately the same values. So, you know, you get five promises from calling `.next` five times and the values that those promises ultimately settle with are the same regardless of whether you are calling .next five times in a row or once and then await and so on. This is, I think, a very nice property to have. It is in fact quite hard to imagine how you could reason well about concurrent iterators without having this property. Because you really don’t want the results you get to change for a pure iterator based on how quickly you are pulling from it. That would be very difficult to reason about.

KG: So if we do like this property, there are a couple of immediate consequences. The first is that promises have to settle in order, or at least the promises that are prior to the `done: true` results that you would get at the end. Specifically, because iterators have this property that once they have thrown all subsequent invocations give you `done: true`. And you can’t know if an earlier result is going to throw or rather if the mapper is going to throw for an earlier promise until it’s finished working. So you can’t settle a second promise until the first one has finished doing work, because the second promise might need to be `done: true` if the first one ends up throwing. And this has the consequence that values can just get lost, can get sort of produced by the iterator or the mapper and never surfaced to the user, because a different call threw. So in this snippet of code on the screen, you can imagine that `.next`, the first call to `fn`, to the mapper function, throws in the first case, but only after a couple of seconds, and in the second case, it just settles instantly with a reasonable value, a non-exceptional value, and if we had settled the second promise as soon as the call to the mapper function had finished, then we would end up violating this property, because we would get something where the first result is an exception and the second result is something other than `done: true`, which is what you would get if you had called it once and then waited for results to finish, and then another time and so on.

KG: So if we like this consistency property, then we have this unfortunate downside that values get lost. I think that’s probably okay because the property is worth having, but it’s worth noting that, you know, in cases where you are dealing with resources which need to be collected or something, this could be a serious problem. On the other hand, this is already how, for example, Promise.all deals with exceptions: if you pass a bunch of promises in `Promise.all`, and then one of them throws, unless you were manually keeping the intermediate results around, then stuff gets lost, and, like, that’s not a big problem. That said, with Promise.all, it’s at least possible to keep the values around and it’s not in this case. Okay, so that’s one question. How do we feel about this consistency property and specifically this consequence of values getting lost.

KG: Another question is what do we do about `.some` and `.every` and `.forEach` and `.reduce` and these other things. The sort of default behavior, the non-concurrent behavior is that they pull once and then wait for that to settle, and then apply their predicate or mapper and then wait for that to settle and then pull again and so on. That’s the obviously correct behavior in the case that you are thinking of these without concurrency. And these have the property that they are consuming, they consume the entire underlying iterator. So I mentioned earlier that concurrency in this design is driven by consumers, and essentially, these methods are the consumers, but they don’t have any obvious way to specify concurrency. So there’s a couple of ways that we could deal with this. The first is we could just say, well, you can already get concurrency by just replacing the predicate with the identity and doing the predicate at an earlier stage in the pipeline so, you know, you do `.map` of the predicate or of the `.forEach` function and then call this buffering helper, and then you’ll invoke your `.some` or `.every` or `.forEach` with the identity as its argument, and this works - you do in fact get concurrency in this case, but you are kind of, I don’t know, this is not super obvious. It feels like an abuse to not actually be passing your predicate to `.some`. The whole point of `.some` is it takes the predicate and now it’s not a predicate because you want concurrency. But maybe it’s okay. I don’t know. It’s certainly simplest to not take a concurrency parameter and say you can get the thing you need if you really want to.

KG: All right, another question is that with this consistency property and more generally, with how we have been thinking about this, we have said that they are order preserving, so your `.map` function gives you the same results in the same order no matter how fast the function settles. So if the mapper settles on the second result, and then the first one after that, you would still get the first one first and then the second one in this case immediately after. So it is imaginable to have something that doesn’t work like that, to have something where the results settle as they come in, and this is actually how it works in some other things. So, for example, I’m sure many of you are familiar with observable from RxJS; observable is conceptually less ordered than async iterator, so they have made the decision that map on observable just gives you a new observable where the results are the mapped results from the original observable, but the order is not preserved. The order is just whatever things are ready, they are presented. And there’s certainly a lot of applications where that’s the thing that you need, where you don't need map to not be order preserving. I’m not intending to add those in this proposal unless people feel strongly about it.

KG: Also, with this design, the consumer can pull multiple times, and maybe the producer doesn't want to support that - you need a mutex. I know that I have had to write this sort of thing many times in my own code where I want to have an async function that you can call multiple types, but not like 50 times concurrently. Maybe like 3, particularly when you’re dealing with rate limited APIs and that sort of thing, so maybe we could have a helper for bounding concurrency. But probably it wouldn’t be in this proposal because it’s useful well outside of the case of AsyncIterators. But it’s something to think about and I wanted to get a sense of the committee for what -- whether that’s something they think would be useful.

KG: And then the last question is just, flatmap doesn’t fit very cleanly into this design. If you are pulling multiple times from flatmap, you don’t know if the result iterator, the iterator that is produced by the mapping function is going to produce five things or 50, so if you pull, you know, ten times, if the consumer pulls ten times, then those might plausible all be produced by first the iterator that comes out of the mapper. And so no matter how many times the consumer calls .next here, it’s only going to drive concurrency in the result iterator, not the underlying iterator. Again, this is something you can work around by splitting things up. You can do .map and then .buffer and then .flatMap(x => x).

KG: This is the last bit that I want feedback on, of course apart from the general design. The observation that with flatMap, you can get concurrency in the design only from the result iterator, not the underlying iterator. Unless of course you do the same thing that you would have to do with `.some` and so forth where you split up the mapping of the underlying thing and then use a buffer helper or some other similar way of driving concurrency there and then do flatMap. This is awkward. Not the end of the world but awkward.

KG: I would like feedback on all of this. The design is pretty complicated. And some of the tradeoffs feel not like a great obvious correct option for any of them. So yeah. What do people think about the consistency property and the losing values, order preserving, whether we need a primitive for limiting concurrency, that sort of thing. Hopefully, we have things on the queue, because I am really hoping to get people’s feedback on this.

SYG: Clarifying question first. I wanted – one of the slides said sequentially or concurrently, forget which one it was. Something for – yes. That one. Whether the call to `.next` method. Just to clarify, that means if the call to next happened in like one run to completion unit of evaluation, like one job –

KG: No, I mean calling `await` on each call before invoking `.next` again.

SYG: Okay. That makes sense.

MF: So I see iterators as not an abstraction themselves; but as an underlying support mechanism for building other abstractions on top of them. Those should support ordered and unordered abstractions. Sequences and enumerations. I really like the out of order versions of these. I think that they should probably be the ones that get the simpler names in async iterator helpers. When somebody uses the async iterator helpers and expects the results in order and sees that they are not in order, then they can resolve that. When somebody uses async iterator helpers and expects there to be, you know, maximal concurrency, and doesn’t get it, that doesn’t jump out as much. It’s not telling them that it’s not as performant as it could be. Of course I do think we should have both, ordered and out of order versions eventually. The ones with the simpler name should be the out of order ones.

KG: I would like to hear if anyone else has opinions on that.

JRL: I have also done these parallel async iterators. The way I handled the `done` signal, every call to the iterator will return `done`, if anything before it returned done is by adding a `.cap()` method essentially. The cap method stores a buffer of your promises. It allows internal parallelism to happen. Go to the source and call it multiple times, by the cap iterator itself maintains the buffer of things that are still pending. When the items come out, it resolves the items in order and allows them to proceed. That way, you don’t get the case where a done signal from like the hundredth call happens immediately because the source iterator is truly done before the first iterator, the first time you called it, which goes through an expensive map operation before that completes. If we add in a second method here, a helper method here that captures promises and gives you the correct semantics for order of resolution, I think we can do out of order pretty easily.

KG: We can do out of order.

JRL: I mean, and give people the exact semantics they want to get the order preserving cases.

KG: How?

JRL: By giving the cap method the responsibility of doing the buffering and returning the correct order.

KG: I will have to go look at your code.

MF: JRL, does that method have an infinite buffer? I don’t understand it

JRL: It pushes thing – as you call next it pushes a new item onto the buffer and waits to resolve that promise that gets pushed until the internal things before it have already resolved.

KG: Right. So that’s just the semantics I am proposing –

JRL: Not worry about the order of anything else. All that needs to worry about order and buffering is the cap method. Everything else just calls through into its internal source iterator and does the map operation.

KG: Okay. So it’s a – cap is a weird name. It’s a helper that takes – well . . . no. So let’s say you have an async mapper and let’s say that it is by default not ordered. So your `.map` produces promises by settle out order – not promises which settle out of order. Promises which settle in order, it’s just that the thing that you get from the first call might have been produced by the second call to `.next` on the underlying iterator.

JRL: Caps know which call is currently being buffered and then resolves.

KG: Knows which – does cap take the mapper argument?

JRL: I mean – no. The map is the internal iterator here.

KG: Right. Once the internal iterator is producing results in a different order than the underlying iterator, there’s no way to restore the order of the underlying iterator, that order is lost.

JRL: The map itself is keeping a queue of promises and resolves its own queue of promises

KG: That is what producing results out of order would mean, yes.

JRL: To me, producing results out of order is leading – sorry. So every individual call to a map function would return a promise. That promise is tied to a particular internal result of whatever the source – this would be easier if I can explain with code. I can’t explain over text.

KG: Yeah. So you’re right. The two different things that you might mean by out of order. There’s promises settling out of order, but setting with the same values they would have otherwise settled in. And there is, the values themselves being reordered. So that the first thing always settles first, but it might be a value that is produced by a subsequent call.

JRL: Okay.

KG: And the second thing is the more useful one for when you don’t care about order at all. But requires you to have an internal buffer to settle things as they come in.

JRL: Is that useful?

KG: It gives you results as fast as possible. You can for-await over that. You can do the first thing when the first bit of work comes in.

JRL: With the first bit of semantics though. It can be another order that does – what you have described is the first thing. What I expected to happen. It’s how it operates.

KG: Yeah. Doesn’t play well with for-await, for example. For-await is always going to wait for the first one. And it also fundamentally can’t work with filter, because filter - you might have to call `next` multiple times on the underlying thing to produce one value. So you can’t possibly settle a later promise for filter, before earlier ones. But yeah, it is a possibility. It seems less useful. MF, which out of order were you thinking of?

MF: Full values being out of order.

KG: Okay. I should have clarified that there are these multiple possibilities. I do think that the more useful one, if you are giving up ordering, is to give up entirely. But on the other hand, I do see where you’re coming from with the simpler thing, JRL. It just seems less useful.

SYG: I’ll respond to the current discussion first. I agree with KG, as far as I understand JRL’s description: to fully take advantage of out of order, you have to propagate the out of order-ness all the way to the underlying consumer. Like, whoever – after all your iterators is done, whoever the you want consume are, the for wait for something else. Like if you do not do that, then you can do something under the hood, but you cannot actually like maximize – you don’t actually get the performance maximization that you want because you’re introducing some other kind of serialization at some point by doing some queue somewhere. Like maybe you can let some stuff under the hood, one finish before the other, but then if the you want consumer and the code still has to wait for the order because it expects an order to result, then you again lose that. So it’s less clear to me like what performance gains – how much there is compared to like fully out of order, where every consumer on every tier has to be aware that it’s out of order.

SYG: So I think if we support out of order, it should be like fully, everywhere out of order. My original topic was – I agree with KG, it feels to me like – I agree with KG and disagree with MF, it feels to me like iterators are ordered. Like by default, they feel like an ordered thing to me. You pull them one at a time. Whether or not your model is they can or can represent ordered or unordered things, their APIs that they give you one thing at a time and the order in which they give it to you is an order and I think it’s very natural to – for programmers to think about that as an ordered thing.

SYG: So to have the default of async iterator helpers be unordered, I would find surprising. It’s not to say they cannot do a transform that changes the order. But I disagree with the intuition that iterators are this amorphous thing that can be ordered or unordered. And my initial thinking in seeing a bunch of these questions is, it seems like because iterators feel fundamentally ordered, in that they give you one at a time, the unit of concurrency where it makes sense to have things unordered, to fully take advantage, that makes the most sense to me to be the amount of buffering done. So like . . . if you do not buffer ahead, then you pull one at a time, and you are restricted by the ultimate order that you want to preserve, so the underlying vends you something, and then you need to resolve them in order in the iterator helper and that limits the concurrency that you can do. But if you buffer ahead, I think it’s fair game in terms of programmer intention if you buffer n, that those n things you buffered, could become unordered. This strikes me as the – a natural way to think about it. Like, if you – if this were like data parallelism, it’s similar to a thing you want to do a lot of data parallel operations, a data parallel filter. The difference between that and the iterator version is that the iterator version does not have like random access view of the entire collection. You don’t know. But what you do know, if you have a buffer ahead is, you know the chunk you buffered . . . does that make sense, Kevin?

KG: No.

SYG: Okay.

KG: Two things, I guess. So it sounds like you are saying, if you use this `bufferAhead` helper, then you are opting in results coming in out of order?

SYG: Yes.

KG: So I think if you don’t use the helper and you don’t like manually call `.next` a multiple of times, then there’s no possibility of things happening out of order. Because you don’t start doing the work for the second one.

SYG: Sorry. I retract my original suggestion. I don’t think it’s important that the buffer ahead itself, that that particular method call is the thing that opts you into out of order. But the out-of-order opt-in makes sense as a buffering call. Like buffer ahead, you have `bufferAhead` as in order, but have `ooBufferAhead` or something. The unit – yeah.

KG: That makes sense. Unfortunately, you can’t split them up. Whether things settle out of order has to be a property of the mapper. Not of the consumer of the mapper. If `.map` is constrained to give you things in order, or `.filter` is a better example, then you can add a buffering helper and the buffering helper like, can’t do anything about the fact that the things that its buffering settle in order. It could, you know, vend them in a different order if it really wanted to. But if the underlying thing is settling things in order, preserving sequence order, then they are going to be in the buffer in order and you can’t start going out of order in a useful way, inside of the buffer.

SYG: I think I see. Okay. That’s unfortunate.

MF: I have a response to that. I believe you can do this if the thing that the out of order buffer method returns has a prototype chain which has another set of out of order helpers on it, then that’s how you opt in those helpers. That’s the out of order behavior.

KG: What does it look like?

MF: You mean the code from the consumer?

KG: Yes.

MF: Not like the – instead of the `bufferAhead`, then you do – whatever the consumption, the filter . . .

KG: Oh. So you buffer before calling `.filter`?

MF: Yes. Or whatever opt in method it is. The opt in gives you something with the extended prototype chain.

KG: You are imagining, it’s not exactly a buffer method anymore. It’s a switch to out of order versions of these helpers method.

MF: Yeah. Yeah. Which is something I would be okay with

KG: That is way we could get out of order. It’s a bit weird. And it’s unfortunate in that like if you do `.map`, `.filter`, et cetera and then switch to out of order versions of methods, the subsequent calls are out of order. But the earlier ones are ordered. There’s nothing you can do about that

JRL: Yeah. I think what SYG and MF have talked about answers my question. If we rearrange the order of these, then we can allow the consumer to choose their own semantics. What is required though is just that we allow promise settlement to happen in any order and then you can add your own semantics after that in either of these cases by rearranging the way you call the methods.

KG: You can do that with map, not with filter

JRL: MF just explained it. Instead of calling filter and bufferAhead, you do bufferAhead and filter. In this case, cap filter or cap out of order and filter

KG: You’re not calling the same filter method anymore. You’re calling a different filter

JRL: I don’t understand. You are calling the filter iterator

KG: MF said a separate prototype. That feels necessary here. The default filter either gives results in order or it doesn’t. There’s no way to be in between.

JRL: Okay. I think I need to see a better example with MF’s case here. Sorry.

KG: Okay. Yeah. We will keep talking about it off-line.

WH: I would prefer the default to be in-order just because I think of iterators as being in-order. It will be fine to have some kind of out-of-order mode that’s explicitly out-of-order. I am also curious what happens if iterators recurse into themselves? Does it open another can of worms?

KG: So interestingly, this is already possible with async generator, it can call `.next` and it queues it up. I think if we preserve the consistency property that things settle in order, then you just can’t - the consequence of doing that is that your iterator is now jammed or stuck. If an earlier call is waiting for a subsequent call to finish, and we are preserving order of settlement, then you’re deadlocked. And that’s okay. Just don’t write a deadlock. But yeah, I think that is unavoidable. At least if things are settling in order.

WH: Okay.

DE: We have three main options here: one is the async iterators model, where you don’t have parallelism. Yields would be the same as `yield await`, and initially, Kevin (zenparsing, not KG), was proposing that yield would not be like yield await. Yield would let that calculation go in parallel. If you yield a promise. Domenic Denicola and I were pushing for `yield` to be more like `yield await` because it seemed like it would be intuitive around certain kinds of edge cases. But I guess what Kevin understood and what we had trouble understanding at the time is that that eliminates an important and useful source of parallelism. In the pre-`yield await` version of async generators there was a complex mechanism in place where you could kind of generate this queue of things and one yielded value would be depended on previous things. You could call `.next` times but it preserved the principle if you – that the future ones, if one of them threw, the subsequent ones would be rejected. They wouldn’t be resolved. This is the same semantic that JRL was getting at with cap. So I see this whole thing is option number 2. What generators were before we switched from yield to yield await semantics. And option number 3, they are all kind of independent. Which I think is what KG is proposing. At this point, it feels to me like we just made an error when we switched from `yield` to `yield await` semantics. And the `yield` semantics provided a consistent model and which would solve the filter and map problem in a consistent way. I think in simple cases where you’re trying to fetch a bunch of things in parallel, it just ends up working. Though maybe getting some of the results slower doesn’t let you do several subsequent maps and have them operate perfectly in parallel. So it does introduce some additional dependencies, but it does in a way that kind of supports this coherency. What do people think?

KG: I remember that debate. I think that it wouldn’t have been as useful as concurrent iterator helpers would be, because unfortunately generators are like – the whole way that they work is by control flow. And the control flow primitives that we have are sequential inherently. For map, yes, you can imagine a world in which there is no implicit await when yielding, and you can then write a concurrent map as a generator by yielding the promise from the async function. But you can’t do that with filter. The reason why is that the decision about whether to yield the value depends on the result of the predicate function, meaning you call your predicate and after that call, decide whether or not to yield the value. And you can’t do that without awaiting inside of the async generator because the way that you make a conditional yield is by putting an `if` and as mentioned, the control flow is sequential. So you don’t actually get the full concurrency you would get with iterator helpers with that change. The only concurrency you get is the simpler one for map. So I think I see where you’re coming from. But I think that fundamentally, it’s actually the fact that control flow is sequential that is stopping us here, not the decision about yield and await.

DE: OK, thanks for explaining; that makes me feel simultaneously better and worse.

SYG: Can you clarify? Dan do you mean parallelism? Or do you mean concurrent? We are talking about await, whether there’s an await point. Not the predicate being executed in parallel.

DE: Yeah. Obviously we are not talking about CPU parallelism. We are talking about the I/O interleaving stuff.

SYG: My understanding is that this enables some parallelism: if you get a host-vended opaque thing, that could actually do things in parallel. But for user code, we can’t get it.

KG: Yeah. I am not imagining that engines would implement any parallelism. Like, CPU-level parallelism. Only network etc.

KG: Okay. So we are past time. Thank you for the discussion. I think the order one definitely we are going to need to talk about prior to everything else . . . that discussion will have to happen first. I did want to check; it sounded like no one voiced objections where values get lost. MF didn’t like that we have this ordering constraint. But I am going to assume that no one thinks this problem of values disappearing into the void in the case of exceptions is a big deal. And assuming we do ultimately settle on this order preserving property, that we will probably keep this consistency property in the face of values getting lost. And we haven’t talked about flatMap, but I wanted to raise it and depending on how the discussion of ordering goes, we can – if people have thought about how to address these please open an issue or ping me.

### Speaker's Summary of Key Points

- The committee has previously agreed that iterator helpers should enable more parallelism than their previous naive definition whose semantics did not enable multiple subsequent iterator results to be resolved concurrently.
- The committee discussed which sorts of dependencies should exist among iterator results: should we consistently preserve that the promises resolve in order? This is somewhat necessary to allow iterators to maintain the consistency property where, once a Promise is rejected, then
- MF thinks that preserving order by default is not important, but others such as SYG and WH do think of iterators as ordered
- Justin has this idea of an intermediate order preserving where resolution is out of order and that enables you to do things with helper methods to optionally preserve order instead of entirely different sets of methods.

### Conclusion

- Async iterator helpers remains at Stage 3
- Next steps: Figure out what we want to do about order. And if we come to a decision there, if we come to the decision that we like the property that I have raised, that the ordering property that I have raised, then we need to figure out what story, if any, we have about concurrency in flatMap and ??[summary?]. And I have shown there’s a possible work around with what is the proposal, but maybe we should have new methods as well. If we decide something else about order, then I haven’t thought about what to do next in that case.

## `Promise.withResolvers` - call for stage 3 reviewers

Presenter: Peter Klecha (PKA)

- [proposal](https://github.com/tc39/proposal-promise-with-resolvers/)

### Conclusion

- JRL and JHD will be Stage 3 reviewers for Promise.withResolvers()

## Incubator Chartering: Call for helpers

Presenter: Shu-yu Guo (SYG)

- [repo](https://github.com/tc39/incubator-agendas)

SYG: So I start with the call for facilitators first. So as a quick recap for folks who weren’t here when we started this, the incubator calls are meant as a kind of regular sanctioned time to discuss proposals to try to settle normativer and a higher bandwidth to settle them among a smaller group of stakeholders so they can be brought back to the next plenary kind of with the kinks worked out ahead of time The larger proposals already have their own regular calls and this is not meant it cover those, but meant to cover the other ones that don’t quite rise to the level of being large and complex to meet their own calls but would benefit from having some time set aside to discuss outstanding design questions. That said, there hasn’t been one in a while because for lack of facilitators, I haven’t been running them for a while. But that is the idea of the incubator calls. If anybody does have time to run them, I would very much appreciate some volunteers to run them. The work involved is usually ahead of the call, making a reflector issue for which there is a template, making some documents ahead of time, like an empty notes doc, a doodle to collect times to have the call. And then during the call itself, to run the meeting, and to possibly take notes. But I think the note-taking part, since then, I know some of the other calls have been using auto transcription features from Google Meet ask that’s been okay, so the note-taking thing is less important than the verbatim minutes we have for plenary. Another call for facilitators, if anyone is interested, it would be much appreciated. And to move on to the chartering part, I will call for volunteers for proposals that would like to have outstanding issues discussed. And then we kind of put that into our charter and then we redo this charter after every meeting to see if there’s new proposals that need to be picked up or dropped because the issues have been resolved.

SYG: Currently, I think Jessie, who is not here today, I heard – out sick or otherwise we would have decimal call. I think Jessie has a call plan for decimal. So if you are interested, as a decimal stakeholder, go to that reflector thread. But for other proposals that might benefit from an incubator call between this meeting and the next, on the – incubator agenda repo, we haven’t ran the calls for a while, the current two upcoming are decimal and `Object.pick` and `omit`. Volunteers that want to discuss some specific design questions? I don’t know if the async iterator stuff would benefit from the call. There’s a lot of topics that may warrant its own call, but what are your thoughts on that, KG?

KG: Sorry. I have been typing up other things. And not paying attention. What was the question?

SYG: Are you interested in putting async iterator helpers as an incubator call?

KG: Yes. If people would want to join such a call, if JRL or anybody else would be interested in joining such a call, I would be delighted. It doesn’t necessarily need to be a facilitated call.

SYG: Yeah. I think – yeah. If the audience is small enough, we have had some large calls that something like TCQ would have benefited the call, but if it’s call enough, that’s fine. With transcription, it’s also just fine to not take notes.

KG: Would people be interested in such a call?

USA: JRL said on chat that he would be interested. Also MF.

KG: I will try to set something up off-line, then.

SYG: Yes we can just use the retemplate for that. All right. So the three you have currently are decimal, scheduled or being planned currently. `Object.pick` and `omit` and async iterators. Anyone else before we call it?

CDA: Is this on the calendar?

SYG: Yes. As they are scheduled because these are ad hoc scheduled, depending on what TimeZone the stakeholders are in, like they are usually determined by a doodle a week ahead of time and then put on the calendar.

CDA: Okay. Thank you.

SYG: Alright. That’s it for me.

### Speaker's Summary of Key Points

- Incubation calls can only continue if someone steps up to run them. SYG has not had time recently.

## Continuation: Source maps: Should TC39 standardize and improve them?

Presenter: Dan Ehrenberg (DE)

- [current "spec"](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit)
- [slides](https://docs.google.com/presentation/d/10nYC0dD-CWXnmPtqeuQMVM15b8kWMgrIS6j2G2wpoyw/edit)
- [repo](https://github.com/source-map/source-map-rfc)

DE: So we were talking previously about whether we should form a TG for TC39 to discuss source maps. Part of this discussion was about whether source maps are in scope for TC39. Based on our charter, I think that source maps fit within our charter, because this is a closely related facility for JavaScript in addition to other things. At the same time, it’s beyond what we have been doing so far. So that’s kind of what I meant when I said it’s beyond our current scope, but I don’t think it’s beyond the charter scope. IS expressed concerns we were going too fast. I didn’t quite understand those concerns. So I wanted to turn the floor over SHN to give background on Ecma process and her point of view on this

SHN: Thank you. Thank you DE for presenting yesterday on source maps. Obviously, it’s always good to have new work items. There were a number of comments yesterday and I want to add a few more things. You’re correct, the scope of work of TC39 could cover source maps. You have space in there to evaluate and consider proposals for complementary or additional technologies. And potentially, source maps could be one of them. We don’t want to slow you down. It’s good to move forward. There were comments and ideas, but I didn't capture all of them. It is important that within TC39, you have consensus that you want to work on this work item.

SHN: You may use a task group, a TG, to work on this. You would need a convener. You need at least two members of the TC39 to participate in this, in addition to the – you had mentioned yesterday, DE, there were 2 or 3 other members that we could potentially invite as expert participants into this conversation. Your overall TC39 is a royalty-free space. So any TG that you bring in there would also follow the same rule and principle. So a suggestion would be to form a TG, and start the work and maybe the work is to build a consensus amongst TC39 and see how best source map fits. So I’m going to pause for a moment. Does that make sense for you?

DE: For me, that sounds great. Yeah. I would note there were at least 4 different TC39 member organization present in the calls. We would have to circle back and get official sign-on from them to form this TG if people from Mozilla or Google or Vercel or anybody else who’s a member organization participating has an answer to that, that would be useful. But we can also collect that later.

SHN: Okay. And in the event that in doing your work in the TG and I don’t know if that’s yourself, if you’re going to be the convener, DE, it results that Source maps best fits outside of TC39, and you would like to have a new technical committee formed, then you do have to bring that to the GA for approval. And just to give you some timelines, we have a GA coming up on June 27th. We can certainly make note of the fact that we have a source map as a new topic, as a potential conversation. So I think that’s positive. In the event that you want to make this a TC on its own, it could be discussed at the GA in December. So keep those timelines in your mind. We have certain structures and we don’t want to delay, we want to give you some framework of where you are at. I will pause there again. Is that making sense also?

DE: That makes sense. Question: could we start as a TG, but then later consider moving the work to a separate TG if that seems convenient?

SHN: Yes. You may. I would encourage you start this soon.

DE: Okay. In that case, with Bloomberg supporting the formation of this TG, I would like to call for other member organizations, if you want to express formally interest in pursuing this as a TG.

CDA: Yeah. I support the formation of the task group. And I was at one of the meetings, where we were discussing that, that Dan had mentioned. So yeah. I would be in support of this. I have another queue item, just saying that we should really have the chair or preferably, multiple chairs nominated, elected, at the time of forming the task group.

DE: To that, I am happy to volunteer to be initially the convener of the source maps task group. I’ve already been the one convening the first couple informal calls that we had. And I would be happy to continue that role. We would also need an editor for this subgroup and I think we will be able to recruit one from other participants. I don’t want to say any names, but I have ideas in my head for who to ask for that.

CDA: Okay. Just to be clear, Ecma rules stipulate that the elected chair or chair group is for a term of 12 months.

DE: Yeah. Sounds good. I am, of course, happy to rotate out or take a cochair if anybody else is being considered.

DLM: I just like to speak briefly that there’s definitely support within Mozilla, but at the moment it’s the developer tools involved in this. We may need coordination on this side, because I am not sure if there are TC39 delegates, but there is definitely support within our organization.

DE: It’s been great to see somebody from Mozilla attending these meetings. Thanks.

MLS: I support it.

JRL: Also support from Vercel.

SHN: Regarding a few other comments. You had also mentioned yesterday talking about the alternative copyright. I would like to reflect upon that more. I don’t have further comments to bring right now. But anything that we may need to think about regarding alternate copyright will have to go on the discussion with the general assembly. But I need a little bit more homework to do on that.

SHN: My second comment, DE, you had mentioned that there are some members – there is some interest from non-members on this subject. It would be very good as soon as they are interested to participate that I know that they need to be invited experts. I am very happy to think about or bring them in as invited experts. I would like to do that for this calendar year, assuming you would begin this task group sooner than later. And assuming their interest is strong, they will consider membership in the year 2024.

ZB: SHN, this is the case for my organization. We are considering membership with 2024 and may be interested in this task group.

SHN: Very good. I can’t see who is speaking. ZB?

ZB: I represent Amazon

SHN: Thank you.

DE: That’s great. Thank you for your openness there. I have already at least tried to communicate this message to the parties involved that were nonmembers. And I hope they’re thinking about it. But yeah. The point is taken that if we are doing this under a TG, then we get this intellectual property protection, which I believe is very important. But it does mean that all participants will need to follow these procedures and the hard part, given the openness expressed by SHN, is to have the legal departments review the forms before the legal agreements before contributing, which is the whole point.

SHN: Yeah. What are the next steps from your side, DE?

DE: Well, given the support of five members of ECMA, I take it that this TG is convened. I can work with you and the secretariat to make sure this is reflected on the website and such. I will start email threads with the non-members to explain this plan and the opportunities for participating. And I will schedule a follow up meeting and put it on the TC39 calendar.

SHN: Thank you.

DE: Everyone agree with all that, any concerns with this conclusion?

IS: Sorry, we also need some text. So for scope and work items, et cetera. What is going to be worked out now in this meeting? Or in the next stage or next meeting?

DE: Sorry. You need text for the scope of the TG?

SHN: Correct.

DE: What is it that you like to describe?

IS: You should have a look at what we have done for TG1, TG2, TG3. Also, something like that. It’s also in order to be that we have an agreement, okay. So what is the scope and work items, et cetera, et cetera. Very, very briefly. have a look, you know, what we have at the moment on TC39 task groups.

DE: Okay. So I think I presented what the scope and work items were. And I will work off-line to come up with this text. Is everyone okay with that?

SYG: I support it. I have a question about the scope. So for JavaScript, our work is never done. For source maps, it’s not clear to me that it is in perpetuity. Do you foresee a point where you set out the goals and accomplished, and then it is done?

DE: That is possible. But there are further goals beyond those three initial ones that I set out that have been raised by participants, such as working on getting the ecosystem to make more use of source maps, more compressed… It’s possible to reach an end state, but I wouldn’t want to say in advance we are planning on closing this at some point. Does that seem reasonable?

SYG: Yeah. I don’t think you need to prescribe an expiry or anything. But I do think it might be worth revisiting the – like, rechartering it every once in a while. Every two years or something.

DE: So at some point this group will produce one or more specifications. And then those will be kind of coordination points. I imagine that we will have frequent status updates with the TC39 plenary. And I am happy to say that, like, every year at least there has to be a status update with TC39 being happy with the group existing or something like that. I am not sure what you mean by rechartering. I wouldn’t want to get into, where rechartering the group is this costly exercise.

SYG: Sorry. Yes. I agree with that. I don’t mean formal bureaucracy. I mean, checking to see if there’s work to do.

DE: So I want to suggest that we have just like we have with TG2, we could have status updates, probably take less time than TG2 status updates, in plenary, at a high level where it’s described. But at this point the group would not be seeking consensus on anything in particular. Does that seem like a reasonable way to make sure it doesn’t go off the rails?

USA: To sort of build on that, actually, as you mentioned we effectively have updates from TG2 because of the editors updates. But we do not actually have formal TG updates, which is perhaps tangentially related to the fact that TG3 is in the best position right now. Perhaps we could start doing TG updates in plenary, and that could help in different ways, including this one.

CDA: So I have a reply to that in the queue. And it’s actually an Ecma rule that the task groups report at each meeting to the technical committee.

DE: Yeah. I think in practice, TG2 is like this because you have those editor updates. I think once there is an initial source maps standard, then these will take the form of editor updates. So I think this all coincides.

CDA: I want to double-check, make sure there are no – we have several explicit support from various organizations. Are there any objections to forming the task group?

*no objections.*

IS: Sorry to complete a different matter. So it is that – so the scope and the program text looks like it would be needed and I don’t know, it is coming from this meeting or coming between this meeting and the next meeting? And how so? If you form a TG then we need – rather at the beginning because we have to put them into the – into the website. So I think it is –

DE: Yeah

IS: Yeah. So I didn’t get it. I am getting this meeting or what is it?

DE: Okay. I can dictate a draft scope now, but I did just present on the scope and the program of work in the slides. I would prefer to follow-up by email in the next week or two to have a written scope and program of work that I can edit a bit. And it sounded like when I previously proposed that here, people were okay with me writing that off-line. We had a shared understanding

IS: Okay. So that’s fine with me. So based on the material which is already existing, you will see on the TC39, you will see some sort of text which we will put in, into the – on to the ECMA website for TG4. Is that agreeable to the group?

CDA: I am fine with approving the task group based on this conditional – we need this formal scope and program of work. But I think that – at least on our side, we understand what that looks like. So we are comfortable with, you know, approving this without necessarily blessing the exact text here and now.

IS: Okay. Thank you.

MLS: At the next meeting, we can, you know, review the text, just in case there’s any kind of work Smithing, but I agree.

CDA?: Do we have a plenary before the next GA?

DE: No.

MLS: It doesn’t matter with the GA, though.

IS: So this is TC39 internal matter. So at the GA, certainly there will be a report about it, about the status of TC39, and it will be mentioned that this TG4 has been created. And about the topic, et cetera. And but everything else, this refinement, it will be among ourselves. So we will come up between now and the next meeting with the text and then if somebody will not like it, we will discuss it at the next meeting. This is my understanding. Thank you.

CDA: I am just a little unclear then on rule `7.3: Terms of reference of the TG shall be included in the minutes of the meeting of the TC at which the TG has been formed. In case of a “Royalty-Free TG” the Terms of Reference require the approval of the General Assembly.`

IS: No. Automatically, everything at the moment because the TC is royalty-free, so every new TG automatically also gets royalty. So that’s not the point. The other one was the point on the copy right. Yeah. The copyright, it should be this alternative copyright or not. But this is not a concern right now. Because we don’t have any text yet, et cetera. And this copyright issue really comes up before the publication of the standard or technical report or specification. But for starting the work, you know, it is a royalty-free TG. This is immediately important. So there’s a difference between copyright.

DE: Some background on that. I guess the General Assembly was a little concerned about enabling the creation of too many royalty-free groups so then they wanted to be in the loop. So it’s more about allowing royalty free than allowing the formation of TGs for having their topics. For that reason, it’s already covered.

SHN: Because you’re on royalty free for TC39, what you create under it as a TG does not need to go for conversation in the GA. If we want to talk about the alternative copyright, that needs to be discussed. That’s a separate issue. And I think we can look at that later. So you may form your TG, under royalty-free. The scope and the work items and the program of work, that would be great DE. And we will share that on the website as work ongoing in TC39.

MLS: And the alternative copyright is only needed when we approve a standard. What copyright do we approve the standard under. So I think that’s some ways off.

DE: Yeah. But the secretariat can be warned that when the time comes, I will want the alternative copyright. We don’t need to take action but it's not bad to be made aware.

IS: So that’s – it is not a decision now. It is a decision just before the publication. So then it comes into action. So whoever writes the specification, et cetera, what kind of copyright, ECMA vote on it. This is not a matter right now. Right now is the matter really for the royalty-free operation regarding patents. And SHN has said and also myself, this is not covered, that we are in royalty-free TC.

DE: It’s relevant. The reason it’s relevant is because if Ecma opposes the application of an open copyright for this standard that we want to write, Ecma would not be a suitable host for this and have to take the work elsewhere.

MLS: I don’t think Ecma is going to oppose this.

DE: I don’t think so either. But I am just being clear about the reason that it’s mentioned. You know? I am assuming it’s going to be okay. So that’s why I am doing this here. But if it’s – a discussion that is going to be in any way complicated, I would be very surprised and disappointed.

MLS: I don’t think to be controversial.

SHN: My last comment on this. Daniel, your point is taken and it’s fair you’re bringing it up now. If need be, you may share at the GA and give everybody a heads up. Again as MLS said, it shouldn’t be a show-stopper. Your point is taken. Thank you.

### Speaker's Summary of Key Points

We discussed the formation of this TG. We had explicit support from IBM, Vercel, Google and Mozilla and Apple. Explicit support from potential new member Amazon was also noted. The scope of it is roughly to develop a standard for source maps, based on the existing source maps V3 document written by Google and Mozilla and to both improve the accuracy of the standard, as well as to improve features to specify the mapping in a stronger way, in JavaScript and in other languages where source maps are used. DE will put a monthly meeting on the TC39 calendar that everyone is welcome to join. It’s open to Ecma members and Invited Experts. We have heard from the secretariat that they are open to new experts in the source of 2023, in this effort. And this will be noted to the Ecma GA in their next meeting.

### Conclusion

Consensus for forming `TG4: Source Maps`, with explicit support from DE (Bloomberg), CDA (IBM), JRL (Vercel), SYG (Google), DLM (Mozilla), MLS (Apple), and ZB (Amazon)

## Continuation: Array.prototype.group rename for web compatibility

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-array-grouping/)
- [slides](https://docs.google.com/presentation/d/1QvTThZlYfsXDHGIGR-vAR3AhTbRe9ySukuW-H1ZnjKM/edit#slide=id.p)

JHD: Okay. So the – what I am hoping for, consensus on, for the array grouping process, we heard feedback a few days ago, Mozilla in particular, not the only one is weary of failing to – for a common name. And allow there was further discussion about what that – what future implications that has, for this proposal, the rough consensus that we had at the previous meetings, was to go with static methods. Instead of array 0.prototype.group and groupToMap. We have object.groupBy, which produces a product. And map.groupBy. They call into this GroupBy abstract operation. The spec is otherwise simple. It gets the group and null object and populates one. 1, it makes a map. And it populates it. I am hopeful that folks have reviewed it. I believe the spec steps were in the previously reviewed specification. The intended semantics should match exactly what was agreed on in Stage 3. So if it’s an error, if there’s anything that doesn’t match and I can fix that quickly.

JHD: And actually, yeah, I see JRL’s comment on the queue much the spec text is new. But I hope this is not the case, but I believe –

JRL: The spec text has changed significantly. Not just the – like, separating it out into a static method, but the old thing operated only on array and array-likes. The new one operates on iterators. Any iterable can be accepted and it will pull values out of that. So the spec text is pretty significantly different.

JHD: Okay. That’s important to note, then. Then in that case, remaining at Stage 3 may require being conditional on review of the spec text until folks have reviewed in the next few days and stepped up to comment. So that is the change in semantics, instead of operating on a receiver that is array-like, it operates now on an argument that is an iterable. First of all, is there anyone who has reviewed the PR and is comfortable with it besides JRL and myself?

DE: One thing I noticed is that it’s creating a map directly instead of creating this. Or is it this and falling back to map, if that’s not present?

??: You’re not correct. Directly creating a map and not invoking the constructor or using species or any of that stuff.

DE: Okay. I think the pattern where with set methods, we wouldn’t use this, but would create an instance of this. Was that the pattern we are setting?

??: No.

DE: No?

KG: That method directly constructs the internal slot. Set methods are prototype rather than static. So they are slightly different, but yeah.

DE: All right. The set methods don’t really tell us one way or the other. And the spec looks good to me. Though, I would appreciate another like week to look over it better or something.

MLS: So I am supportive of a way out of the problem right now, given we’re talking about new spec text, this should be downgraded to Stage 2. It wouldn’t take long to bring it back to stage 3, but the spec text needs to be currently reviewed.

JHD: That’s fair. I had not reviewed enough to realize it’s that different. I think we should demote to Stage 2. Agree on the semantics or at least on what the open questions are, such I can come back and we can get a resolution and return to Stage 3 at the next meeting.

MLS: That’s doable. The other thing is that, since you’re making this on Object and Map, is it possible that we could just have any arbitrary iterable and not an array?

JHD: That’s how it’s specified in this request. That’s a change. These currently take any arbitrary iterable.

JRL: JHD, can you show the groupBy abstract operation? There’s going to be calls to GetIterator and we are doing iterator to close, IteratorNext. All of regular iterator stuff this. Was done to match `Array.from`, I believe.

JHD: The only part that wouldn’t match `Array.from` is the arraylike fall back that `Array.from` has.

KG: It also matches `Object.fromEntries` et cetera. We generally consume iterables, everywhere except in `Array.prototype` methods.

PKA: Yeah. It occurred to me, it works on iterables and not just arrays. But has anybody thought about making this an iterator helper? I just know people are going to complain bitterly about it being static. And that would be just a way to avoid it being a static.

JRL: The iterator group by method is expected to return an iterator. The thing is, iterators, they can be infinite. The way that this behaves in other libraries, other languages, where there is an iterator groupBy method, the return value doesn’t group all values. It only groups concurrent values where the keys are the same. So instead of getting an object out, you would get an iterator that yields an entry where the first value is the key of the current run, and the second value is the items that were in this concurrent run. And then if you change to another key, you get a new iterator – a new entry out. And if you go back to the original key, you get a new entry out.

JHD: Yeah. And I think the other thing to note here, if you did that, then you would have to presumably pass the result into `new Map` or `Object.fromEntries`. Which would still force you to use a static method.

PKA: Yeah. I think I forgot there was already an iterator called `groupBy`. I was imagining something that iterator prototype method that returns an object. Maybe that’s too confusing, if you already have a groupBy iterator that returns an iterator.

KG: We don’t in this language. But it is a thing in a number of other languages.

KG: I reviewed the spec text and it looks good to me. I am okay with demoting to Stage 2 and coming back next meeting.

SYG: Consistency with what again?

??: `Object.fromEntries`. And new methods. Constructor and yeah.

SYG: I don’t want to be fast. Iterator is not fast. But we can probably special case, array iterators, you don’t have to muck with the prototype chains and stuff.

DE: So I am happy with this plan of adopting static methods, demoting to Stage 2 today, and hopefully promoting Stage 3 at the next meeting. Are we okay with repeating the pattern that we did with import attributes and kind of making a pattern of demoting even if we’re considering re-promoting next meeting? I heard skepticism about the pace. So I wanted to double-check on the meta point. If people are okay with this back and forth.

JHD: For what it’s worth, I agree completely. It’s a good pattern, as I have communicated before, we should be unafraid of demoting and repromoting in the future. And especially when that demotion comes from a shared understanding of the purpose of demoting and the things that are expected to be in scope before repromoting.

DLM: I think this is exactly the kind of case where we should be demoting and repromoting. That’s a good case. The spec text hasn’t been agreed upon, it shouldn’t be Stage 3.

SYG: This is a case where while there wasn’t implementation. it was agreed that Safari did that due to miscommunication and attempt to roll it back, whereas Chrome has shipped in good faith for like two years. So there was more consideration there. But Dan, I agree, that this case is more demote to Stage 2 and a signal to keep. There’s more consideration – the difference with import assertions, we might have to leave with the old thing and the new thing we want. Whereas, in this case, it is unequivocably dispute the new thing

DE: I was getting at, we are agreeing to demoting this. The question is, is there risk we will hear in hesitation, we shouldn’t make a habit of promoting again the meeting after demoting. That was a source of hesitation I heard about import attributes and I wanted to bring up that discussion. If that was going to be a source of concern here. I get the feeling that everyone is fine.

MLS: If we meet the criteria for Stage 3, then we are good to go.

CDA: [on queue] +1 JHD's comments re: expectations wrt 3->2->3

JHD: All right. So I would like to state the consensus and let me know if anyone clear. This proposal goes down to Stage 2. I will bring it back in the following meeting, with - pending current discussion with taking iterables, and static methods on Object and Map, and Map calling the constructor directly, like we agreed for the set stuff - with the intention of bringing it back at the next meeting, to re-request Stage 3. If we all agree that’s the consensus, then I will ask for reviewers. Sounds like we agree.

CDA: It’s a little less timely now. But I was just supporting JHD’s comment with regard to when the proposal moves back to Stage 2, and defining explicitly the new acceptance criteria for why it was Stage 2 and what the expectation is for Stage 3. That’s all.

DE: [on queue] support conclusion

CDA: We are over time, but there’s one more comment by Shu.

SYG: Yes. There are – there are definitely test two tests needing updating. I will update those in the next week or two. So that should be done hopefully well in advance of the next meeting.

### Speaker's Summary of Key Points

- The new proposal uses static methods on Map and Object.
- The Map method constructs Map directly, rather than `this`.
- The committee is generally in favor of demoting to Stage 2 and re-promoting to Stage 3 whenever something is ready (even if that is next meeting)

### Conclusion

- This proposal goes down to Stage 2.
- JHD will bring the proposal back in the following meeting, to re-request Stage 3.
- Stage 3 reviewers: KG, SYG, and someone from Safari who MLS will recruit

## Decorator metadata final spec text review for Stage 3

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-decorator-metadata)
- [spec](https://github.com/pzuraq/ecma262/pull/10)

KG: There were a couple of changes proposed during the presentation. And so there hadn’t been time for spec text to be written and reviewed. And the spec text has now been written and reviewed. And it implements the thing that we discussed during the meeting. I can pull it up on screen, if you would like. I guess I will do that either way. I have had the chance to review it and it looks good to me. So formally asking for Stage 3 for decorator metadata with the semantics discussed earlier at the meeting. And in particular, the relevant thing is that the decision about whether to set the metadata at all on the class depends on whether there are any decorators, the decision about whether to look up the decorator from the parent depends on whether there is a syntactic parent, and finally, there is a non-configurable and non-writable null, `Symbol.decorator` property on Function.prototype.

[on the queue] Support from DE, RBN, SYG

USA: Can we go ahead with this consensus?

JRL: The way we are doing the conditional setting of the metadata object onto each class. If someone is taking a class, like – taking a class constructor as a parameter and accessing the metadata object on that, it will – because classes inherit from the superclass, the constructor will inherit from the superclass, it’s going to return the superclass’s metadata. And this is not a blocker, but I am concerned this causes accidental changes to the metadata object. Where it’s not intentional.

KG: If someone writes to it after the fact?

JRL: Yeah. Instead of changing the metadata object on the subclass, it will access the super classes metadata and the write goes to the super classes causing change for all of that metadata.

KG: That seems like a valid concern, if you are writing to metadata outside of a decorator. I don’t know if we expect people to write to metadata outside of a decorator

JRL: I don’t use decorator metadata or have any experience, maybe this is not something that ever comes up.

KG: Unfortunately, I don’t either. I am only presenting this because I asked KHG to write the spec text, which he did; we agreed on the semantics on Monday or Tuesday or wherever day. I can’t speak to it either way. I don’t know if there any people who have more thoughts on that topic. But this is the semantics we agreed on.

RBN: First to clarify, which mutability concern are you discussing? Talking about mutability of making a change to the decorator after it’s been defined or talking about making a decorator trying to write a mutable property that might be a object –

JRL: Not the decorator. We have a superclass. We have a subclass, not having a decorator. The subclass constructor, inherits from the superclass. If I access the subclass metadata object, I am going to get the value of the superclass’s metadata object. Any mutations to that after the fact will actually mutate the superclass’s metadata object and not the subclass.

RBN: This is because the subclass does not have a own `Symbol.metadata` with its own object and chain

JRL: Correct.

RBN: I don’t know if KHG put thought into this. The purpose of metadata, the expectation is that mutations that occur to metadata after the fact are a bad idea. So I don’t really know that I have a perspective on what that really should be. I think that the expectation with metadata, at least in the libraries that use it today, is that even the reflecting metadata allows metadata to be mutated after the fact so there is the possibility, although it hasn’t come up in practice. And it’s always possible to have a class that might be concerned about mutations to have a class decorator that freezes its metadata before it’s written to the class as well.

JRL: Okay. I don’t have the experience to say whether or not this happens. If RBN who has extensive experience with decorators, shouldn’t have any experience writing after the fact, then that’s totally fine.

DE: I think it’s entirely possible or likely that someone will write this pattern at some point. At the same time, I think, you know, as we have been discussing decorators and how they are in some way, we expect more people to use decorators than to write them. And manipulating the metadata in this way is a thing where we hope it’s a more of an expert thing. KKL used a nice phrasing before, of the prototype chains being the devil we know. Yeah. This is a little counterintuitive, but it’s very easy to explain in terms of exactly what prototype chains are. They are just – you have to kind of think about. In general, with metadata, keep in mind, when you have metadata that relates to a particular method or field, you have to build your own structure around it. You’re not just dealing directly with random properties of that metadata object. So I – I think it’s good that we went with the simpler design, instead of the design that does a lot of work to prevent you from tripping on yourself, because this gives us the expressiveness that we need without adding too much complexity, even though it’s possible to be confusing, if you expect it to do a lot of things for you.

KG: I agree, this thing seems like a footgun. On the other hand, I don’t see a way to fix it without imposing a cost on every user of every class, by unconditionally creating the metadata. So this seems like the right tradeoff, even if we have a this downside, since if we don’t expect people to mutate after the fact

DE: And also not to hook up the prototype chains – no. Not for this. Nevermind.

JRL: I am satisfied with these answers.

USA: Anybody object to Stage 3 consensus for this? We already have consensus for the semantics and we have already heard a few statements of support. All right. I think this has consensus.

### Speaker's Summary of Key Points

- JRL raised the concern that making placement of metadata on the class be conditional raises the possibility that someone mutating the metadata object after the class could accidentally mutate the superclass’s metadata instead of the subclass. But we’re not worried about it. So we are not going to do it anyway. No one else raised concerns.
- The spec text is written and reviewed by one editor, KG.

### Conclusion

- Decorator metadata is at Stage 3

## General procedural comment

[not related to the previous item]

JHD: I want to make everyone aware that the procedural requirement is that anything that needs consensus (and I am not referring to any specific item, including this last one) is called out on the agenda ten days in advance. That means anything that says “updates” - that’s not sufficient. You need to be saying, you’re going for stage advancement or looking for normative change.

KG: To be clear, the previous topic was on agenda for Stage 3.

JHD: Yeah. That’s fine. This doesn’t refer to anything specific – there were a number of items that weren’t on the agenda such that I didn’t have to click any links to find out that it was something that needed consensus. And that is what I understood the procedural and the spirit of that requirement to be. It would be great if we were more explicit on the agenda itself about that in the future. Thanks.

DE: +1

## TG3

Presenter: Chris de Almeida (CDA)

CDA: TG3 has not been meeting. TG3 has been without a chair. So this is – you know, informally, I wanted to kind of gauge whether folks are still interested in TG3 activity?

JHD: Still interested, but not at a point where I can step up for it. I am also not sure if I can chair as an invited expert anyway.

CDA: Another thing: I don’t believe that the chair vacancy we would want to fill with multiple people, so it’s not just on one person. But I don’t believe that a TG3, that a task group can only meet if there is a chair. I think you could still meet for whatever that’s worth. Michael is in the queue.

MF: I am definitely still interested in TG3, both for the work that we have planned, but also for the other responsibilities we initially chartered TG3 to be responsible for. Reviewing proposals before they advance to Stage 3 for any security concerns or anything. So I would like to continue working through the open issues on the security repo. I feel like personally, I am not great with operating within groups that are not like – in discussions that have not been led, in some way, or have a moderator. So I really would prefer a chair. And also we need to coordinate times and the video call and the note-taking stuff. And that is a responsibility that I can’t personally sign up for, for the same reason I couldn’t sign up before. I have editor responsibilities, other responsibilities – I just can’t make room for it right now. But if we can find a chair, I am very interested to participate at least in the meetings.

USA: Okay. Well, task group needs at least two people from the technical committee. Between you and JHD, we have ticked the box. Dan –

??: Mark is not here and Mark was one of the people supporting the task group creation. He can’t speak to his continued support or not.

DE: So it would be nice if Michael were able to chair it. Ultimately, at least in the initial meetings of this task group it was immediately beset by the differing security philosophy of the SES group and the browsers. it would great to talk that through as well as review proposals. And I would like to see this move forward. I am also not going to be chairing it. But I think you could do a great job, Michael or anybody else here.

CM: I wanted to speak on behalf of Mark because he couldn’t be here. But he is interested in TG3 continuing in some capacity. Yeah. Nothing more specific than that. But he has not lost interest in this.

USA: That seems to be it. No volunteers so far.

CDA: Okay. So we are still stuck on, I guess, the chair vacancy. There is apprehension about meeting without a chair, or chairs. Is that essentially where we are at?

DE: So why don’t we give this one more plenary before we deconvening the group, but continue the chair search. I am glad you brought up this Chris, to bring it to a close.

## Conclusion

CDA: Okay. So the action, I guess to take here is to try and put the call out for nominations again.
