# 111th TC39 Meeting

Day Two—19 November 2025

**Attendees:**

| Name               | Abbreviation | Organization   |
|--------------------|--------------|----------------|
| Chris de Almeida   | CDA          | IBM            |
| Dmitry Makhnev     | DJM          | JetBrains      |
| Philip Chimento    | PFC          | Igalia         |
| Matthew Gaudet     | MAG          | Mozilla        |
| Jonathan Kuperman  | JKP          | Bloomberg      |
| Richard Gibson     | RGN          | Agoric         |
| Waldemar Horwat    | WH           | Invited Expert |
| Anthony Fu         | AFU          | Vercel         |
| Daniel Minor       | DLM          | Mozilla        |
| Martin Alvarez     | MAE          | Huawei         |
| Eemeli Aro         | EAO          | Mozilla        |
| Devin Rousso       | DRO          | Invited Expert |
| Caio Lima          | CLA          | Igalia         |
| Ross Kirsling      | RKG          | Sony           |
| Keith Miller       | KM           | Apple          |
| Yusuke Suzuki      | YSZ          | Apple          |
| Christian Ulbrich  | CHU          | Zalari         |
| Joshua Goldberg    | JKG          | Invited Expert |
| James Snell        | JSL          | Cloudflare     |
| Lea Verou          | LVU          | OpenJS         |
| Chip Morningstar   | CM           | Consensys      |
| Ron Buckton        | RBN          | F5             |
| Daniel Rosenwasser | DRR          | Microsoft      |
| Istvan Sebestyen   | IS           | Ecma           |
| Ashley Claymore    | ACE          | Bloomberg      |
| Jacob Smith        | JSH          | OpenJS         |
| Andreu Botella     | ABO          | Igalia         |
| Chengzhong Wu      | CZW          | Bloomberg      |
| Guy Bedford        | GB           | Bloomberg      |
| Gus Caplan         | GCL          | Cloudflare     |
| Jake Archibald     | JAD          | Mozilla        |
| Jordan Harband     | JHD          | Socket         |
| Kevin Gibbons      | KG           | F5             |
| Mathieu Hofman     | MAH          | Agoric         |
| Michael Ficarra    | MF           | F5             |
| Mark S. Miller     | MM           | Agoric         |
| Nicolò Ribaudo     | NRO          | Igalia         |
| Olivier Flückiger  | OFR          | Google         |
| Ruben Bridgewater  | RBR          | Invited Expert |
| Rob Palmer         | RPR          | Bloomberg      |
| Shane Carr         | SFC          | Google         |
| Stephen Hicks      | SHS          | Google         |

## Async iterator helpers recap/update/polyfill

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-async-iterator-helpers/)
* [slides](https://docs.google.com/presentation/d/1nQvAwvOQ0gDJ-eLIVIy3rYrlZj3qGvPHCeH_Veba2cc/edit?usp=sharing)

KG: So I apologize that this proposal has been taking so long. A combination of complexity and me having had a child. But I am hoping to get consensus, or at least agreement on certain points. I am hoping to resolve one question about scope and then come back with spec text and Stage 2.7 soon, I hope. No promises there. I thought I would be ready for the last several meetings and it hasn’t happened yet. So we will see. You can find the proposal in Github of course.

KG: Recap. Very briefly, I am not going to keep going through this every time, but the general idea is you have using a function like `.map`, with an async iterator, this produces an async iterator which you can in principle pull from multiple times, without first waiting for the previous values to settle. The code that you see on screen, it is perfectly legal to write. The idea is that I want to make the `.map` able to perform fetches concurrently in this particular case.

KG: So I have some principles that I am trying to use to design the APIs here. Also looking at this I am realizing that I had at least two more that I meant to write down and didn’t. The first one is of a funny one with the consuming iterators, for example, `.some` or `.every`, these are necessarily potentially going to lose values. Like, the—if you try to do those concurrently, there’s no support for that in this proposal, you will necessarily be losing a value because the—the consumer is only going to produce a true or false end. By losing values is that it will pull from the underlying iterator, and it potentially pull multiple times from the underlying operator, and those values are never exposed to the user. If you imagine the underlying iterator is yielding file objects or something by which needs to be done, I posed, consuming those with `.some` and doing so concurrently, there’s no way to decompose the values produced from the underlying operator. That’s inherent to how those works. That is not necessarily inherent to how map and filter and front map work. For the ones that do pass the predicate. They don’t need to be dropped. This has some odd implications for the design, which I will get to on the next slide. And this is also rarely going to matter because almost all consumers are going to drop values anyway. So, for example, if you are using a for loop over the result, the for loop is going to stop the first time it sees an error, or something that says `{done: true}`, for example. And so the for loop will not continue consuming the iterator past that point and the values will still be dropped. But it’s possible to consume these manually in such a way that the values that are produced by the underlying iterator are never just dropped on the floor. That means they will always end up potentially after being passed through a mapper function as a result of a call to `.next`. Then we will get to the implications of this principle in the next slide.

KG: Also, I want to say that the results are race free. But only up through the first promise or `{done: true}`. What race free means is that if you call `.next` multiple times, you should see exactly the same results as if you called it just once and then waited for the Promise to settle and then called it again. This makes it much easier to reason about.

KG: Originally, I had wanted to preserve this property even after `{done: true}` and so forth. But that’s not possible to do consistently with the previous principle. So, for example, imagine your mapping function throws for the first, like—the very first time it’s called. But not the second time it’s called. And you pull from that twice. The first Promise is going to be rejected. And if we were trying to maintain this property that `{done: true}` would be the natural thing you would observe the next time, if you are pulling one other time, then we would have to do that same behavior if you are doing that two at a time. That means that the value would get dropped on the floor. So the first principle makes it impossible to say that the second principle is maintained, even in the case of rejected promises and completed promises. So we slightly weaken it to say that it’s only through the first rejected promise or done true that we preserve this sort of race free. You can’t tell you are doing things concurrently property

KG: The last thing is more debatable. Which is that I want to say that once a consumer of one of the map or filter or sum functions has observed from the underlying iterator, a `{done: true}` or something similar or produced such a value itself, it will not further consume the underlying iterator. This requires the consumer to be maintaining its own internal state. By that I mean the consumer keeping track of whether it’s closed or not. Basically.

KG: So I have not a precise polyfill but an illustrative example on the slide of how the map ends up working. There’s a lot of complexity. And we will talk about a couple of pieces, but most of the complexity is just around keeping track of whether the iterator is done. So that they—we need to wrap calls to the underlying iterator so that we can mark our own iterator as done in case the underlying operator throws. That sort of thing.

KG: And I am not totally sure this complexity is warranted. The point of this, all of this complexity is to maintain this last thing on the slide. Which is how iterators normally behave. But I don’t think it’s that important to behave this way. So the consequence of this is that if you, for example, close the result of the mapper function and call `.next` again, if we are trying to maintain the third principle, it—the iterator here, the result of the mapper needs to know whether the dot return call has happened previously. So it knows whether to forward the call to the underlying iterator. It’s an open request in my mind whether it’s important to keep track of this. Again, the sort of natural way to write this as a generator or something would absolutely prevent this call from being forwarded to the underlying iterator. There’s not a necessity for that. If the consumer is trying to do something like what’s on the screen here, which is a weird thing to do, we don’t necessarily need to try to save from it or protect the underlying Iterator from it. And certainly it would simplify the implementation, especially for `.map` which is by far the simplest one, if we didn’t have to keep track of this state internally.

KG: So I welcome feedback on that, but I am leaning not to maintain the third principle on the slide, because of the complexity it adds.

KG: Okay. And I have a couple of more questions I want to get to, but do we have anything on the queue for that specific topic before we move on?

DLM: There is a clarifying question from Waldemar

WH: Can you go back to the principles slide? What does “first” mean on this slide? You can create promises and resolve them in a different order. Which does “first” refer to?

KG: Which one of these says first? Yes. Good question. What I mean is, first in terms of the sequence of promises that resolves, regardless in which order they settle. So, like, you produce five promises, let’s say by calling `.next` five times. Let’s say that the fourth one immediately settles with `{done: true}`. And then subsequent to that, the second one, rejects. Number 2 rejects after number 4 has already settled with `{done: true}`. The consistency—the race-free only goes up to number 2 in that case. So you don’t get this race freeness when things are settling out of order if earlier things are being rejected. Like, earlier sequential things.

WH: I think I understand.

KG: I apologize that there’s not a slide here. Not a sample here.

WH: Okay. Continue, please.

KG: All right. And then, the next thing I wanted to talk about was not originally in scope, but it keeps coming up in examples that I try to write or that other people happen upon in their own lives. Which is that you often need to do clean up. Technically this is true for synchronous helpers as well, but it ends up coming a lot more when you are doing async stuff. An example, one I have on the slide, is to imagine that you are mapping user IDs to databases, so you're taking each user ID and doing a database lookup and you want to close the database when you are done. This is a fairly normal thing to happen. The problem is you are producing an async iterator and there is just no way with the code here to say that you are done, to be notified that you are done. The async iteration protocol has a method, `.return`, which is called when the iterator is early exited, although it’s not called when the iterator is just exhausted. But there’s no way to hook into that method if you are using one of the helpers without manually wrapping it, which you don't want to do because the helpers support concurrency and any async generator wrapper will negate any concurrency. So ideally, we should have a way to hook into the call to `.return` so we can do cleanup here. And probably we will want this cleanup to also happen when the iterator is exhausted because within syntactic async generators it’s easy to clean up when you reach the end of the function with a finally or whatever but there’s no way to do that with iterator helpers: if the iterator helper is holding on to resources, you need to have the cleanup function be called on exhaustion and on early exit.

KG: Also, you sometimes need to do cleanup eagerly. I guess I should say, a mental model for iterator helpers is that they are sort of wrapping something underlying. And from that point of view, you would probably expect that the cleanup function for the wrapper would only get called after completing the cleanup for the thing that it wraps, i.e., in stack order, the same way it works for `using`. Like the iterator might be depending on some resource that is held by the underlying thing so you need to finish cleaning up that underlying thing before you clean up the other thing. That’s true in general. But in some cases, you actually want to do the cleanup more eagerly than that. I am hoping people are familiar with `AbortController`, but for anyone who is not, it just gives you a signal and the signal calls a callback when the abort method is called on the controller. So it’s a simple way of signalling cancellation, many things on the web platform and many APIs support passing a `signal` parameter as a way of aborting asynchronous operations. You might hope that if you are using one of these async operations, inside of an async generator, then if you early exit from the async iterator produced by the async generator, it could call this `finally`. But it doesn’t. Because the way async generators work is that they are sequential, and each call to `.next` has to settle before the call to `.return` even triggers. Now, I think that for async generators that is how it has to work. Just syntactically, we can’t have the `finally` in this example start running while the code is paused at the await. That’s the whole cancellation debate and the resolution is you don’t have a way to cancel arbitrary operations, so, fine. But you really want to be able to cancel this particular operation because there’s no way that you will make progress past that `await` without actually finishing the operation, so you have this sort of double bind, where the thing that would tell the operation to finish can’t run until the operation finishes. So on the previous slide I was discussing, a natural way of thinking about cleanup is that it’s inside out, it’s in stack order. But in this case, you would want the cleanup to run before calling any internal cleanup.

KG: So the question is, do we want to support having a cleanup method which is called before the underlying thing gets called? So for places like this or an iterator helper where you need to pass the abort logic into the inner thing rather than waiting for it to abort first. And I think we probably do. I think we probably want to support both. Because these cases do come up in practice. Is this something that is worth adding in the initial version of the proposal? I think this comes up enough to be worth doing. It’s one additional method. We would have to bikeshed the name. I think we can probably get away with leaving it out, because nothing else in the design of the proposal actually depends on it. But it does come up a lot. Yeah. I mostly just wanted to get the committee’s attention on the cleanup issue, and especially in the context of async consumers because they come up a lot. If anyone feels strongly it should be in the initial version of the proposal, please talk to me. Okay.

KG: Nothing else on the queue?

DLM: Sorry. Waldemar on the queue. Waldemar

WH: I am not quite sure what cleanup would do here. If cleanup is just a function, then whatever is triggering cleanup could call the function. So what is it doing other than calling the cleanup function right away?

KG: Right. I apologize for not having this example written out. Like I said, I’ve been ill.

KG: So the idea is… this function that is producing an async iterator, wants to produce an async iterator which will have its cleanup method called when this loop exists. If you are writing syntactically an async generator, you do:

```javascript
for await (let item of getAsyncIterator()) {
  if (condition) break;
}

async function* getAsyncIterator() {
  try {
    let resource = await acquire(); yield await fetch(resource);
  } finally {
    resource.release();
  }
}
```

This already works more or less today. You can have an async generator hold on to a resource and then release it in `finally`, because `finally` will get triggered when the break happens. This code is all legal today. The problem is, there’s no way to do that if you are doing something with an iterator helper as on slide 7. If this example on screen is my `getAsyncIterator`, where do I put the release logic?

WH: Okay. I understand the problem.

KG: Yeah. So this is why I think that it’s potentially worth including in the initial version of the proposal because there’s just no way to put any release thing here, other than manually drafting on a dot return function.

WH: Thank you.

KG: Okay. I didn’t have anything else. This is again a call for people who are interested in asynchronous iteration to come talk to me. I believe we will be talking about this a little more later in the meeting with concurrency. I guess, yes, we haven’t got to that topic yet. Yes, we will be talking about this a little later in the meeting. I want to emphasize that this property is inconsistent with getting optimal or even like especially good throughput. Because you are always forced to wait for the first result to settle before the consumer can start processing it. I think that that’s the right behavior for an async iterator by default. The calling document upon it, should not change the order of the results. Sequences are naturally ordered. Messing with the order is weird. Preserving that property, you get order, get results out in the order they went in, it means that you are fundamentally limited in the throughput. So I think that’s okay. We will talk later about the fairly common case where you don’t care about the order and you want to produce things as fast as they come in. You into a different set that is not in this proposal. The plan is, proceed with this. Don’t include cleanup, even though I think it ends up being basically necessary for cases like this. The—it proposal has taken long enough already. I will have a number of follow-ups if we are able to make progress on this, or if anyone else wants to help because I don’t have to be the only person championing this if anyone else is interested.

DLM: Chip?

CM: You were raising the question about whether the support for teardown should be in the first version of whatever this is.

KG: Yes.

CM: I wanted to share my perspective which I think it needs to be. The need is real. If that is not provided for, people will probably come up with a variety of ad hoc workarounds to cope with this and some of that stuff may be awful and introduce horrible ecosystem noise that we will have to deal with when we finally do get around to adding that.

KG: That’s a very good point.

DLM: Michael?

MF: I am not too concerned about that risk. The awful things they do, yes, they will be awful. But they will still work. No matter what we do introduce, like, they are not going to break the patterns. The biggest risk is they end up setting a precedent and the community goes with that, and whatever we provide ends up having to be inspired by it somehow. I don’t think it’s—like, I—somewhat agree with you, there is a risk. I just disagree about what the risk is. I don’t think it’s a compatibility risk.

DLM: Point of order. We have 3 minutes left. RGN, you are next.

RGN: I think I largely agree with MF. KG did a good job of describing the problem. And he’s right that it will come up for anyone who interacts with this. But really, all the solutions for it, I think, are isomorphic to each other. You have to stick something along for the ride where you can register a teardown callback or stick a promise on it that you can subscribe to or something along those lines. And, yeah, I mean they all have different particulars, but fundamentally, the behavior is interconvertible. So I think I would like to see something, if we come up with a really good shape, but if we don’t, then there’s just going to be a variety of largely equivalent solutions in the ecosystem.

KG: Yeah. The precise equivalent—it depends on what you mean by equivalent, but—there is actually a fairly important distinction in whether the cleanup function runs before or after doing cleanup on the underlying iterator. And like those are pretty subtle differences. So I would worry a little bit about if we do something that is different from ecosystem precedent. On the other hand, like I said, I think we probably want to support both. So it probably doesn’t end up mattering in practice.

RGN: Agreed.

DLM: Okay. Looks like that it’s for the queue.

KG: Okay. I apologize for this proposal taking so long. I am not asking for consensus or anything. And I will get the code in the notes after my next presentation, because I think I am next.

### Speaker's Summary of Key Points

* Proposal for async iterator helpers continues.
* Principles: values are not lost, results are race free _up to first rejection/done:true_, if a consumer sees {done:true} then the underlying iterator will not subsequently be called.
  * the last point may be dropped.
* Async iterator helpers are ordered, which means they cannot be maximal throughput.
* We probably need a helper for doing cleanup, which may or may not be in this version of the proposal.
  * There was some support for including cleanup in v1, but some people thought that, while such a thing would be needed, it need not be in the initial proposal.

### Conclusion

No conclusion sought. Interested parties are invited to continue participation on GitHub.

## Iterator Join for stage 1, 2, or 2.7

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/bakkot/proposal-iterator-join)
* [slides](https://docs.google.com/presentation/d/1jclIOSbSdyepVCiYXQ4eXc2Uh8FBnBKnFOtsx12N3r0/edit?usp=sharing)

KG: Hopefully, this presentation will be a little more coherent because it’s a simpler topic, despite me putting it together literally at 3 in the morning when I couldn’t sleep.

KG: Right. So this is a new proposal for synchronous iterators. My fundamental thesis is that it should be easier to concatenate the contents of an iterator into a string. It comes up a lot. I will make the case for this on the next slide. But take my word, it does come up a lot. Many, many people are writing code that does this.

KG: You can do it with an iterator today, but you use `.reduce` or `Array.from`. `reduce` throws if the iterator is empty, or you need extra logic for the first element. Of course, converting to an array, you are allocating the entire array which you're just going to throw away. So I don’t think the current solutions are particularly good.

KG: Just to make the case it comes up a lot, this is a code search on Github, showing 1700 results for just specifically a `Array.from(something.keys()).join()` We have specifically something with a keys iterator, and we have specifically putting it into `Array.from` to `.join` it. And there's the same number of results if using array spread instead of `Array.from`. There’s just thousands and thousands and thousands of examples of people already doing this, converting an iterator they already had into an array so they can call `.join` on the result.

KG: So I hope you are convinced that this is a problem worth solving. That it does indeed come up a lot and the existing solutions are no good. Before I move past that, I would like to ask for Stage 1 for this problem statement / thesis.

KG: This is me asking for Stage 1. Any objection or support?

DLM: We have MF with airing of grievances.

MF: So in many ways, I hate this proposal

KG: You can air your grievances on Stage 2. Your grievances are not Stage 1.

MF: You are correct. Fine.

DLM: Okay. I guess—are there any objections to Stage 1. + 1 from MAH. That’s two voices of support. Any objections? No? +1 from WH and MF and from CM.

KG: Okay. Moving on to the part that MF will object to.. So a concrete proposal. I think this should be `Iterator.prototype.join`. It works like `Iterator.prototype.join`. So, what are the alternatives? We could, for example, have a general collect method on iterators. And/or have a method perhaps on `String.prototype` that takes an iterator. That’s how Python’s `join` works. You have a string and call `.join` on the string and pass the iterable. That works fine. If we were designing a language in the abstract from scratch we might choose to go that way. But we’re not. We already have `Array.prototype.join` and that’s what everyone is familiar with. It’s important to keep the symmetry. The naming, I know that "join" is a heavily used word. There’s lattice join, there's joining threads. And of course there’s `Array.prototype.join`. But "join" is what the ecosystem has settled on for this operation. We are not introducing a new term in the language or into the ecosystem. But it’s not like even the type theorists in JS are using "join" to mean something else. Ramda has join. Immutable has a collection join. Every general purpose utility library JavaScript which has this functionality has called it `.join`. And in any such library that has a method called `.join`, it is this functionality. Also, it’s not just this functionality in broad strokes. They also have the precise behavior where it calls toString on the array elements and separator. As you are aware, I think this is a dumb thing to do in general. I really don’t like the way the language works this way. I think in any API that is not copying an existing API, we shouldn’t do this. But we are copying an existing API. My position is that this should work just like `Array.prototype.join` in that it should do coercion. Despite our aversion to coercion.

KG: And here's the spec text. You can see the toString calls in here, this is `Array.prototype.join` + error handling and iterator handling. Right down to the single letter variable names which I don’t love.

KG: Okay. That’s the proposal. I am requesting Stage 2 or 2.7 given I have spec text but it’s not been reviewed. Yeah. Let’s hear MF’s grievances and anyone else.

MF: I agree with you. I don’t like the fact that it’s called join. I don’t like the fact that there are alternative, more generic versions of this that possibly obviate it. I really don’t like that we ToString the argument. I don't like the argument being optional and defaulting to a comma. Given all that, I realize this is probably the best we can do and I support this proposal.

KG: I appreciate your support.

DLM: Next up we have Ron

RBN: Yeah. You mention in the slides prior art in ramda and I think some other libraries that use join to do the string-concatenation similar to `Array.prototype.join`. A lot of that comes that’s what `Array.prototype.join` does. But when it comes to actual queries, you can see that in ramda where it has both a join that does the string concat and a group join which is actually like a database join operation between go sets of data that there is some overloading of terms that we think through as this—before this gets to something or before we like really settle on join as the name. Not that I don’t think we couldn’t progress with join, but we need to be aware that there—if we do want to have any type of this more complex query operations to consider that potential overlap in terminology.

KG: I feel extremely strongly that we should not use `Iterator.prototype.join` to mean anything other than this. I agree, it’s an overloaded term. But the overloadedness is already inherent to the language—it’s not something being introduced here. The particular meaning of join as `Array.prototype.join` is already inherent to the language. And I think as a consequence, regardless of the proposal, any future proposal that is doing any other notion of join would already need to deal with the fact that the term is overloaded because of its presence on `Array.prototype`. This is one of the most common methods people call in JavaScript already. I don’t think putting it on iterator prototype as well meaningfully changes anything about that.

RBN: I do a certain thing, with `Array.prototype.join` you are dealing with something that is a fixed length. You can know that by looking at length as to maybe how costly the operation is going to be. When working with something that is an iterator, you don’t know what the size of this result is going to be. It could progress infinitely, it could just be a very large set and you have no way of calculating that cost. So I am a bit concerned that a join of this approach is a little bit—it might hide the underlying cost and complexity that you would expect for something like array.

KG: So it’s true that in some cases, in the maximally generic case, you don’t know the size. That’s not anything like universally true. The example that I had is that you are joining the keys of a set or a map and in those cases you know the size. It’s not present on the iterator itself, but it is present in the collection from which the iterator is drawn. I think that's a perfectly reasonable thing to do. Yes, that is going to blow up in your face if the iterator is infinite, and it’s true if you are writing maximally generic code someone may hand you an infinite iterator. But in most cases you know that’s not a problem and you want to write natural code for those cases.

RBN: Some and every do have short cuts out, though. A join does not. Join will always have to progress to the end, whereas some can progress until it matches.

KG: forEach doesn’t have a short cut. Or, most of the time you would be using reduce.

DLM: RGN is on the queue

RGN: There’s no bailout here but the point is moot. People are already doing what is on screen now. Throwing iteration results in a temporary array just to call join. So the fact that a big iterator will blow up is already an issue and not affected by the introduction of an iterator prototype join.

DLM: Okay. Next up we have SFC.

SFC: Yeah. I was looking through the—the—the queries that you found on Github for the different places people are calling this. It seems like the—most common cases are, for example, when you need to do a debug output. There’s people who do that and pass to a `console.`log and in a lot of cases people build up SQL queries or other-related like putting stuff in syntaxes. And then the third is, calling join with the empty string. Where you just take them all and concatenate them. So in `Array.prototype` we have `.toString` which is more useful for doing debug output. There’s also `toLocaleString`. Right? Which doesn’t actually do a very good job at toLocaleString because it uses a locale specific separator, but doesn’t do list formatting. We had to take it open for a while, toLocaleString on should do list formatting. Web compatibility. But add another function for that. Maybe it could go on here. I am wondering your thoughts on why we should use join or—or whether we should consider having more specialized functions maybe like `.concatenate` and having some sort of like toString function that is more debug oriented, using `.toLocaleString` for debugging. Or it’s motivated to have a general purpose join function.

KG: I think it’s motivated to have a general purpose join. A lot of the examples don’t want the toLocaleString. The second example on the slide, that was the screenshot which is building up a range header, which is a comma separated list. There's lots of comma separated lists in the world. And I think this comes up enough in exactly this form for it to make sense to have in exactly this form. This is what people will reach for.

KG: Separately, I agree with you, having an operation for doing list formatting of like—locale-based list formatting is useful. I wouldn’t want to put it on `Iterator.prototype`, at least not under the name `.toLocaleString`, because I think people pretty naturally will expect that to work the same way it does for arrays if it is present with that name. So my preference would be to put it somewhere else. Potentially `Intl` and have it take an arbitrary iterable, which I am pretty sure is already how it works.

DLM: Reply by Ashley.

ACE: I think if the suggestion is, we should have like `Iterator.prototype.toString`, yes, that’s maybe convenient. But I think what happens more often is people accidentally `toString`ing something, but not thinking about it. And with the case with an infinite iterator, calling `.toString` implicitly somewhere that’s makes me more nervous. I wouldn’t want `toString()` on iterator to be called implicitly. Obviously there is a `.toString` on `Object.prototype`, but it returns a rubbish string and it's usually obvious as suddenly the train timetable says `[object Object]`. Whereas infinitely looping is a much worse bug.

KG: I agree with that. One of my favourite examples of this is that if you call `Math.max()` and pass an array you get NaN out. Maybe not what you expect. But it’s because it’s calling `.toString` on its argument. And then parsing that as a number and it’s just generally very strange.

DLM: Okay. Just a quick reminder, 5 minutes left. Shane?

SFC: Yeah. To be clear the previous question was exploring what you see as the space of, like, what functions should eventually land on the iterator prototype and how this fits with them. I think that given `.join` is fairly explicit about taking the elements in joining them with a separator, I don’t think there is a—I think that it’s fine and harmless in terms of, you know, like it could even coexist with some other potential functions, like exploring a locale prototype function. They would coexist and would be fine. I support it.

KG: Yeah. I agree there’s a lot of space for things vaguely adjacent to this. But I want to keep this scoped to just the one thing.

DLM: Okay. Looks like the queue is empty. We should ask for explicit support for Stage 2.

KG: I guess 2.7.

DLM: We should do 2, first, I believe. And then—

KG: Okay. Sure. I would like to request support for Stage 2.

DLM: Okay. We have a ② from WH. With a little circle around it. MF volunteers as a reviewer, which I will take as support. And that’s two voices. Any objections? No. JHD will also be a reviewer. I think with that, we can say you have Stage 2.

DLM: For 2.7, you need the reviewers to sign off on the spec text, as well as an editorial approval

KG: I am an editor and I approve.

DLM: Does that count? MF is an editor and approves.

DLM: Any other voices for 2.7? Just as a formality. Or objections?

KG: Okay. I guess just can I get explicit support for Stage 2.7?

JHD: I reviewed it and it’s fine. Good for 2.7

DLM: Good for 2.7. And 2 minutes left to spare.

KG: Okay. Thanks very much. Thank you.

### Speaker's Summary of Key Points

* Joining an iterator to a string is a common operation. Right now people have to `.reduce` or `Array.from()`, both of which have significant downsides.
* Ecosystem/language precedent is to call this operation "join".
* Given that `Array.prototype.join` already exists, we should make this operation work like it.
  * `Array.prototype.join` is gross in some ways but the committee begrudgingly supports consistency.

### Conclusion

* Stage 2.7

## Composites comparator choice

Presenter: Ashley Claymore (ACE)

* [proposal](https://github.com/tc39/proposal-composites/)
* [slides](https://docs.google.com/presentation/d/1ByfhAVVeEfeBj2g8TkP6f55hSmq8_8tevUxuRQLfISg/)

ACE: Great. So anyone that knows me knows that once I smell alliteration, I can’t avoid it. This is a Composite's Comparator Choice. Not asking for consensus or advancement. I just want to chat about this proposal.

ACE: So a quick recap. I presented composites back in April for Stage 1. And while yes, April wasn’t that long ago and only Stage 1, this is really a rebranding, doing a reset on the five to ten years of discussion on records and tuples. A lot of this stuff is really not new in the slightest and it’s been something we spent easily hundreds of hours talking about when including all the discussions outside of plenary.

ACE: The way this is kind of different from records and tuples and why I want to completely rebrand it to shake off any of the areas we had gotten into the local maximum before. Most notably this proposal is saying no new primitives. These are objects.

ACE: And the—in some ways, you can think of records and tuples as introducing ergonomic immutability. And you also got equality. This, the way I like viewing composites, it’s almost the other way around ever so slightly. Composite is primarily thinking about equality. And a very particular form of equality. We also got the comparisons proposal, and that’s a very different type of equality. This is a very deterministic, very reliable equality. Not asserting that only at one point of time things were equal. I have presented before that when you have that type of equality, it pretty much says these things have to be immutable. So there’s a slight maybe like inversion of those two properties, the effect and the cause.

ACE: So the kind of problem, like the use case problem we kind of keep coming back to is, if someone in a position where they want to create a set of 2D positions, if you try to have objects today, even though they are frozen and contain the same things, they are two different objects, not triple equal, not strictly equal. So `Set` says, they are not the same. You have two different positions.

ACE: Pretty much the most common way code gets around this is they use `JSON.stringify`. Any scanning over open source code is the thing people reach for because it kind of works, and also, it’s like right there in the language. So this works. But `JSON.stringify`, you have the problem of if your keys ended up being created in a different order, they will produce different JSON strings, if you are not customizing that. It will throw if you have a BigInt. NaN becomes null, dates become strings. And while not true in all cases, there are cases where the string representation of this is going to consume more memory. Like, if you think about numbers with a lot of digits, it will take up more space to represent the digits as characters rather than a 32-bit number.

ACE: You also end up with a Set of strings. From a TypeScript perspective, it is not very descriptive. And also, if you then want to loop over this thing and do something with them, you are going to `JSON.parse` them if you want to access the things or like `string.split`. However you formed that string.

ACE: So that’s the idea around composites. And most people say, composites are a bad name. I know it’s not a great name. I'm always a fan of starting with a bad name to leave room for improvement. This can be called something different and the API doesn't necessarily have to be exactly like this. So you have some composite factory and when you create your composite, saying, I am creating this composite out of two things, where X is 1 and Y is 4, somehow the Set says that’s great. These things are the same. And the thing you can’t see here, things you got back are objects that have an X and Y property, then when you want to loop over at the point later, you can access those values. So it avoids the issue of having flat strings. You have descriptive things that are useful in other ways, more than just being equal.

ACE: The two things that we discussed in April, we spent a lot of time talking about negative 0. I wasn’t expecting us to do that. The other thing that was suggested was that we approach this problem by doing interning. That was a suggestion from the V8 team, “have you thought about doing interning?” The thing I presented was that, yeah, these things work in maps and sets, but they kind of won’t work in many other places. But they won’t be interned. If you don’t know what interning is, I will explain it in a later slide. I have written that that would be a potential route to go down. It might be a potential thing. It’s important we discuss it because that decision dictates so many other decisions. It’s very hard to get anywhere else to consensus on almost anything else about the proposal, if you haven’t answered this question. So you kind of have to at least be, like, which one do we think is most likely before you can have really any success talking about anything else?

ACE: So the kind of two different approaches you have are, one, the thing I presented before, which I am calling unique objects. So in this design world, maybe the API would always be like `new <whatever we call these things>`. And you always get back a new object. So and you will be able to see at that by the fact that these two things triple equal, false, you got back two separate objects. But there will be APIs, where you can ask, yes, two different objects, but they are actually equal in a composite way? So maybe they will be like composite or equal to ask that. Or, like, maps and sets would say, yes. Those things are equal when you put them inside these collections. And also, as a result of a for, map and set, saying they are equal, they the same values are zero. `Array.includes` and includes says that, maybe array `indexOf` and array `lastIndexOf`. Particular APIs would handle composites.

ACE: What would that look like in this made-up kind of language? I thought—yeah. I tried writing in JavaScript, but I then we would nitpick about like actually—this is not JavaScript or C++, but hand wavy intentionally. So the idea in this design space is that the composite factory always creates a new frozen object, but maybe it still computes a hash. You can imagine this one way to work. And then in all the APIs, where the equality should kick in, they will have a branch, where it detects the value is a composite and does the different type of thing. Like, if you look inside things like `Set.prototype.has` already, this is already how they do things in other types. They are switching on whether you have a BigInt or Boolean and switch into how is that thing—which comparator should I ice when I am, like, going through the entire data structure backing the set. This is an extra branch there.

ACE: The other design space, menu option B, is interned objects. Maybe in this case, the API looks like this. You would drop the `new` keyword and have it like a factory function call. And here, you would get back—because I am creating a composite of the same kind of values, you might get back the exact same object on the second call. When I ask, are these things triple equal? It says yes. Why? These are the same object—everything in the language, and every single library says they are equal because it would be impossible for them to ever say they are not equal because they are literally the same memory address.

ACE: Records and tuples also worked with `===` but the idea there would be overloading the triple equals operator. With Composite's all the work is done at construction and triple equal has no idea that it’s comparing composites. How would that look under the hood in a pseudocode? There would be some hidden global cache, and then that composite constructor is then kind of, like, hashing the data, looking if this composite already exists somewhere, and if it does, give that back. Otherwise, create a fresh composite and then cache it. Naturally, you don’t just want that cache to grow forever, so you need to be holding on to these things weakly and making sure they’re collected to avoid this just leaking forever.

ACE: So if we, like, compare those two things, on the unique side, the construction call is like people can think about it it’s fairly similar to create a regular object, and a little extra overhead because it will have—potentiallying the things like sorting the keys. So a little bit more expensive than creating a regular object. There will be no new GC semantics. It’s just, like, I’m creating an object, that object behaves in WeakMaps and WeakSets and weak graphs just like any other object would, but the equality only works in certain APIs. The exact set is kind of up for debate, but it would only work—there would be no syntactic way of comparing them. You can imagine in the future this is like the signals proposal would be another API that did this, MF’s `Iterator.uniqueBy` would be another API that has the handling for composites. And in that world, that’s where if we went that route, then some of the other issues on should we be sorting the key, handle all im-- and how do we handle negative zero are all up for debate in that world, because the equality semantics aren’t ingrained into the object at creation time, so there’s a little bit more flexibility. If we go the interned route, then kind of people can think of these things as having a variable creation cost, like, sometimes these things will be cheap to create, sometimes they’ll be more expensive to create. There’s going to be some sort of new GC semantics around them. One reason records & tuples were primitives is because there’s new GC semantics and one with to avoid there’s way to avoid GC semantics is saying these aren’t objects, and strings get away with being objects on the heap, and you don’t ever expose that to the user because they’re just exposed as a primitive.

ACE: And the great thing about interned which really excites the developers that I hang out with and meet at conferences or out on the street, is that they love the equality model here, it’s super simple for them. They’re like, equality works everywhere. They don’t have to think about which libraries may or may not support them, why the maps and sets behave differently to triple equal. It’s like generally, the people I meet really like how Simple equality is here. And if you go that route, it really dictates a bunch of design decisions such as you have to sort the keys. If you’re sorting the keys, that then complicates allowing Symbol keys. It pretty much dictates what you have to do at the prototypes. It pretty much dictates what you’re going to have to do around negative zero. And that’s why I really want to focus on this discussion, because it really forces a bunch of other decisions into other particular design spaces.

ACE: I’m just going to have TCQ up on my phone just in case.

DLM: Keith is on the queue.

ACE: Great. KM?

KM: Yes. So it seems like the main intention of this is something along the lines of—I’m just trying to reframe the problem of, like, the issue could also be equally solved in the way many other languages have solved it, is that your map and set provide your equality and hash so that the user can define them however they want. I guess I’m curious, like, how the committee in general feels about something else. I think from an engine optimization standpoint, I wouldn’t necessarily want it to be the same class as map and set, because you pessimize a lot of things. You have the TypedArray problem where all the prototype methods are horribly slow because they’re shared across all TypedArrays in engines. But outside of, that I would be open to having it be the same anyway. But having—is that something—when you feel badly about because it’s hard to write those methods correctly and they think that most users are going to get it wrong, or is it something that—

ACE: Yeah, the other option I’ve not listed here, which we could introduce new variants on map and set in the language. It could either be, like, `new MapV2`, `new Map2026`, `new`, like, `MultiValueMap` or whatever you want to call it. Or, like, a set—I had another idea that I never presented for stage 1 of an options bag you pass to the map instead construct or the customize these things.

ACE: Introducing a new types of maps and sets to me, I think, has a few problems. One, I think when I—I do like training for JavaScript developers. It already confuse them that, like, so many things online say JavaScript objects are like maps. You know, you can put string keys on them. And then you also have maps. And then JavaScript developers try and use the, like, array index thing on maps, and it kind of—it looks like it worked. And those maps are objects, so you can just put string keys on them, and then they get confused when they iterate over the map and those things are missing. It’s already confusing. Introducing yet another type of map I think is going to really make it an even harder language to teach. It’s also, I think, really hard to—because we’ve already got the word map in the language, i’m really struggling to think of what you’d call this other type of map. If you call it a hash map, that makes it sounds like the existing map isn’t a hash map, but it is a hash map. It does have hash map-style performance.

ACE: The other thing is how would someone customize it. Do you pass in a custom hash function? There’s no hash utilities in the language. We could expose hashing things, but when we talked about that before, I really think it’s going to be really hard to expose, like, a hashing primitive in the language because of one of the main problems that comes up is that you have two fundamental opposing ideas. One is that the hashing function should not be completely deterministic based on the spec. Like, if the spec said “given this particular string it must hash to this particular value”, like, locking in an exact hashing function would be bad because we now can’t use newer hashing functions as they get discovered. We’d also have hash collision attack potential. On the flip side, there are people that want the language to be completely deterministic and don’t want us to introduce more things that are implementation defined. So I think that’s only just one of the problems we’d have if we wanted to start exposing a hashing utility in the language.

ACE: I also think that—when I used to be a Java developer, it was no fun reading all the boilerplate around even keeping and passing in hashing in equality functions or getting the IDE would have if you add a new property to this object, here is the like quick fix to make sure you also update your hashing function and your equality function to make sure they’re in sync with each other. And I really don’t want to see—I love that we don’t have that in JavaScript today. And I would be upset to see a rise that type of code in the language. You’re right, it’s the other menu here I’m leaving out. In my opinion, I’d like to do one of these to things first, and only if these two things are complete writeoffs, perhaps exploring that. And happy to hear the rest of the committee on this. And I don’t want to go too long on that, because I do want to talk about these things more than that. But I think we have time.

DLM: Next up we have GCL

GCL: Yeah, so I’m curious what sort of concerns there are about the interned one, because I kind of feel like my instinct is to say the interned one, unless it’s not implementable for some reason, and then I feel like I’m almost being given—or we’re being given too much choice right now about which one we would want, unless there are other constraints beyond implementation concerns that would be good to know about.

ACE: There are more slides later I’d like to go over first before we go into that. Because it starts to—it shows some of the potential down sides.

DLM: Reply by WH.

WH: The main concern about the interned one is that if you ever use WeakMaps, it’s impossible to unintern things, so the pool of interned objects can grow to infinity and there’s no way to remove them even if they’re not used anywhere.

ACE: Yeah, I’ll cover that exact thing later. And then we can come back if you want to expand on that late, Waldemar, that would be great.

MAH: I’ll be really quick because I want to discuss all those things, and regarding custom equality, I con her with everything ACE mentioned. We could do it on custom maps and sets, not really a fan of it. I am 100% opposed to any protocol for custom equality that would basically give you equality outside of just objects you create and where you specify yourself the equality you want to use for that collection. But even for that, I think it’s too complex and it’s too risky to let the user shoot themselves in the foot anyway.

DLM: Ron.

RBN: So a few times this has come up in the past, such as an approach using Symbols for this and—that we’ve discussed. I’ve generally been in favor of some yourself find equality. Most static languages have this capability and the closest dynamic language to JavaScript, Python also has this capabilities. One of things I found while experimenting with the shared structs developer trial in V8 some type back is that the—the lack of user defined equality makes it very difficult to create shared data structures that can be lock-free collections, for example. And as we’ve discussed with the shared structs proposal, that is something we may eventually have to propose, if we never have something like custom equality, we might eventually need to propose some type of shared or lock-free collections, because they would not really be implementable by users. There’s no way to actually define that type of equality and have it work across multiple threads. Having custom equality would be very helpful in those cases. And often times, you have collections where you want to be able to compose, say—compare URLs and not have to `toString` them, which is roughly an example similar to what was in one of the slides.

RBN: The upside of custom equality is that you don’t have the memory overhead of having to maintain the composite, and as per WH’s concerns, the long-lived lifetime of these potentially interned values. And if you have something that is a unique value, then you’re constantly recreating them to do comparisons and it’s not very efficient compared to an algorithm that doesn’t need to maintain state. And while, yes, you can potentially shoot yourself in the foot by having custom equality, that is pretty much the case in every other language that has that capability, and it’s still fairly heavily used and used well, so I’m not sure that preventing users from being able to shoot themselves in the foot isn’t then removing the ability for them to actually get some of the work that they need done by removing the power from those users or not giving them the capabilities that they need.

ACE: So thanks, RBN. Yeah, and I know we talked about this before. I’d really—I really appreciate this feedback, and I see everyone on the queue. I really don’t want to talk about custom user equality today. Let’s assume we’re not requesting that route, and I can definitely come back and we can do a different presentation about that choice. I would like us to, like, put ourselves in a mindset where—because we’re not trying to reach consensus at all. Let’s do a thought experiment where we’re not doing custom user equality. If we’re not doing custom user equality, how do we want to handle it? That’s the topic I would really like to talk about today, and I don’t think we have time to expand beyond that. The reason—I completely agree that there is a space for custom user equality. And I think that could be in the language. The impression I get is, yes, most languages have that. But also most languages have it because they’re just copying the pattern that was there in the ‘90s and earlier, and I don’t think it’s because it’s the best thing. I think it’s just languages copying older languages. What I see in newer languages, and this is jumping to Shane’s topic of what do other OL languages, it’s like other languages I create a record or struct and I just define the fields on it, and I for free, get hashing and equality out of the box. Like, I can override those methods, but most people are not overriding them because their use case is perfectly adequately met by just the built-in ones you get for free. So, you know, perhaps if we did have a protocol thing, you’d have some annoyingly—like, we already have classes in the language and you don’t get hash and equality for free. Like, we already have the structs proposal, and maybe there would be a type of syntax for defining structs or class like things where you get those protocols.

ACE: The problem with that is, like, the problem we have is, JavaScript is really hard to optimize. Like, it’s, like, those other languages have compilers and have much, much more static sound type systems, even if they’re still, like, maybe JIT compiled, they’re JIT compiling a much simpler type system. I think the other thing—I think developers don’t want to be writing these things in lots of cases. I do appreciate there are cases where you do want to customize these things, but I think they are more power user niche cases that are better served by a different proposal. And also I think most developers want their things to be fast. And as soon as you have a custom protocol, it’s going to be so, so hard to optimize that because you now have to be, like, well, this could be reentering. And maybe that’s the route we’re going to get. But let’s pretend we’re not going that route, just because I would really be interested on this particular decision, even if we don’t end up going with either of them.

DLM: Do you want to go on the with the queue, Ashley?

ACE: I’ll get through my slides. So as I said, we’ve been talking about this type of stuff for, like, maybe, like, somewhere between five to ten years. And one of the things that I think we haven’t had in previous discussion is actual, like, numbers, I think. So I don’t think performance is, like, the first—the most important be all and end all, like, the fastest solution wins. But I think in the past, we’ve kind of gone round and we’ve speculated on performance. I think an ingredient that I thought might be an interesting ingredient to add into the mix is some actual numbers. So what I did was implemented these two different approaches in V8—as best I could, I’m not an engine implementer. (Leszek Swirski?) on the V8 team looked at my branches and pointed out where I was being a very bad developer and helped me improve them, which was really appreciated, and I don’t think they’re great implementations and they’re somewhat representative now because I received some help. As I said, this was just in V8 because that’s the one I was most familiar with. Perhaps it would be interesting to do a similar thing in other engines to compare.

ACE: And I was spending time trying to think of how could I benchmark in and I realize I was spending more time thinking about that than running the beverage mark. The benchmark I was going to do with these two implementations is let’s create keys where you have three numbers, so like a 3D vector, and I’m just going to do, like, fill a cube with, like, all the positions in that cube.

ACE: So I’ll go through what everything on this graph is trying to show. So there’s, like, three sets of bar charts. That’s me creating ever-growing cubes that, like, double in size. So the first cube is, like, 70 cubed. And then the next one is 88 cubed and then 111 cubed, so each cube is roughly twice the volume as the previous cube. Like, within some error, very small error. And then within each kind of bar chart, there are six, like, different implementation strategies of how has that kind of vector been turned into a key. So the first one is pass the object to `JSON.stringify`. The next one along—for people that can see color, it’s like the orange one—that is, like, a custom JavaScript implementation of interning, where I’ve got, in case, it’s like a map containing maps containing maps containing weak refs. And then the next one is the V8 native implementation where I’m not interning. So you’re always getting back a fresh object. The one next to that is, again, you’re always getting a fresh object, but it’s like a userland JavaScript polyfill. And the next one along, and now if people can see color, we’re on the grey one, third in from the right. And that’s `JSON.stringify`, and you pass it—pass in a custom replacer. It’s just like an identity replacer, you get given the key value, it gives back the value and it’s just like a singleton function, so there’s no function allocation there. And that’s effectively like turning off all of the fast paths inside `JSON.stringify`, because there’s this custom function in there. And the next one along, and you got the two darker and lighter blues, similar to before, one is native and then the next one is the JavaScript polyfill, and that’s the interning approach where there’s this hidden cache and the second time you create things, it returns the existing object. So that’s all the different implementation strategies, and then the thing that’s running here is I’m just creating all the keys, and then I’m, like, throwing them away.

ACE: What can we see here? What we can see here is in V8, `JSON.stringify` is really, really fast. And annoyingly, while as implementing this, they kept landing things and making it faster and that line went down as I spent time, and I couldn’t work on this full-time and I would come back to it after a few weeks and `JSON.stringify` had gotten faster, which isn’t a big surprise, because one, it’s just concatenating string ropes under the hood. It’s not having to sort the keys. The thing I’m passing in here is just a small object with, like, single character, like, the property names are just single characters. And then there’s just numbers. And V8 is doing, like, SIMD optimizations to turn it into a string as fast as it can.

ACE: The other thing that I guess isn’t a big surprise is the polyfills are slower than the native ones. The interning one, because the interning one has to do all its work at construction time, kind of has the biggest kind of overhead of trying to do that just in userland. This is not really the things are able to do that super fast. The other thing we can see is that, yeah, there’s a big cost when using V8 of doing just `JSON.stringify` versus `JSON.stringify` with a custom function. I can see there’s a clarifying question from SFC.

SFC: Yeah, can you clarify again what the difference is between intern bespoke JS and intern composite JS?

ACE: Intern bespoke JS is the minimal JavaScript for this exact case, where all it does is it’s interning objects that have an `x`, `y`, `z`, so it’s—whereas the composite one is the more generic I’ve been given some object, and I don’t know what the keys are. So I’m sorting the keys and I’m handling it more generically. Whereas bespoke is hand-crafted for this exact case and nothing else.

SFC: Cool.

ACE: So the next one, if we jump along, and if people have these slides checked out locally, you can play jumping back and forth between the two slides, this time I’m creating all the keys, but then I’m also inserting them into a set. So now what we can see, maybe the biggest thing to get out of the way is that while previously the, like, polyfill for the non-interning composite was faster than the interning one, as soon as you then actually put one of those things into a set, like, that advantage completely goes away because it’s now having to do all that work that it put off, and it’s harder for it to do that work when your monkey-patching `Set.prototype.add` compared to doing it just within your own constructor.

ACE: The other thing we can see here is that, like, the two JSON lines both jump up. That’s because in V8, it also interns these strings lazily. And when you call `JSON.stringify`, it creates a rope. And when you put the JSON string in the set, it then interns that string, so it had a similar thing of while it could construct the string very quickly, when used that string as a key, it then triggered additional work.

ACE: The other thing we can see here is that the three kind of other ones, like, the custom, I can only handle this very particular case of X, Y, Z, versus the two different composite approaches, they’re actually really, really close to each other, and I wasn’t expecting. I was actually expecting interning composites to be slower in this case. My hypothesis was, the cost of interning and the complexities of interning would add so much overhead when you’re constructing these things, that even when you’re inserting it into a set, it’s easier for the set, because you’re effectively doing just pointer equality style set insertion. I thought the overhead of interning would still put it on the back fill. But what we actually see is for the smallest cube, the interning composite works out faster than the non-interning one. `JSON.stringify`, though, still beat the two of them. We then go up to the the medium sized cube, and now actually the composites ended up working out slightly faster than `JSON.stringify`. And then the largest cube, you actually see a slight switch where now the interning composite is now slightly slower than the non-interning one, and I haven’t quite dug into that. I think some of it’s just noise. These are all very close. And I think also it’s, like, by the time I’ve created 3 million intern composites, I think we’re now seeing a bit more time on the GC handling those. But, yeah, the thing that surprised me most was how similar the performance of the two was. I was expecting the interning to actually work out slower here.

ACE: So I wanted to drill a bit more into the things. You’ll notice here, the eagle eyed amongst you, there’s only three lines. Why are there only three lines? If you plot all of these things here, a lot of them just skyrocket off, and then the three that I wanted to compare look almost identical. And so to actually see any difference between them, you really don’t want to be plotting the other attempts. So the three here, so the kind of gray squares, are `JSON.stringify`. The green stars are the non-interning composite. And then the blue circles are the interning one, and what this shows is that—so—and then the X axis is me repeatedly creating keys and inserting them into a set. And I’m not clearing the set, so the first iteration is actually filling that set, and then 2, 3, 4, 5, et ceteras are effectively just doing a set lookup. So all the cost of, like, allocating and creating the data structure of the set is all paid off in the first iteration, and then the remaining iterations is kind of just showing the cost of creating the keys and performing the lookup.

ACE: So the very first one, we can see here, like, the interning one is slightly slower because it’s paying that extra cost of having to do that interning logic. But then what we see is once we have got done that interning, the cost of creating a cache hit when you create the intern composite is really good. Like, when you get a cache hit, it does almost, like, zero allocation to do the lookup, and then it just returns the existing composite, and then again the set lookup is much cheaper because it’s having to compare much less. So the slope there is much shallower, and by the time you do the second iteration, you’re already kind of getting payback for the extra time you spent interning, whereas for the non-interning composite, while it’s cheaper to begin with, the extra work you’re having to do every single time means that the slope is steeper and you—it starts to become slower and then obviously the more you do, the more they’re different.

ACE: And then last thing I did here was just to kind of try and remove the cost of creating the keys. So here I, like, create all the keys, put them into an array and then I just keep looping over that array putting them into the set. So here we’re kind of purely looking at the set lookup times. And you’ll notice that, like, in this gray square for JSON and the intern in parallel because they’re both using an interning approach, and unsurprise league the set lookup, it has very, very similar logic. Whereas the non-interning one has, like, the custom set equality. That one has, like, you know, that steeper line. So this kind of tracks with, like, the hypothesis. But, like, what you probably predict here, like, interning is cheaper—an interned object is cheaper to do a set lookup, versus one for custom equality, and which is why V8 has chosen to intern strings when you put them into a set, rather than do a custom act of equality comparing bytes every time.

ACE: So as WH alluded to earlier, what’s the downside of interning in the downside of interning is the garbage collection semantics get complicated. So an example that shows this is that it is here. I will say, like, these things don’t leak until you start doing these types of things with them. Like, my implementation in V8 doesn’t leak, even though it’s interning them, it doesn’t leak them. But once you start trying to use these things in a way that does interact with the GC, you start to see kind of interesting kind of design decisions arise.

ACE: So here we have a—I created a composite with, like, X is 1 and Y is 4. And then I have a WeakSet. I add that composite to the WeakSet so we have like a design choice of, well, what happened at that point in time? I can then ask, like, does that WeakSet have that composite that I just put into it? That’s another design choice inflection point, and I set C to null, and at that point in time, let’s assume that’s the entire program. There’s nothing else in some other module. Right now nothing has a composite like that, that they have a strong reference to.

ACE: And then, like, await. Let’s assume GC is deterministic and this is, like, enough time to trigger a GC. I then now create that exact same composite again. I say I want X is 1 and Y is 4, and then I ask that WeakSet, hey, do you have this key? And then, again, we’re asking a question, so there’s a design choice of, like, what should the spec say? So this is, like, the design space where you go down. So, like, we created a composite. And we put it in a WeakSet. We really have, like, two choices here. Like, so add returns the WeakSet, like, it returns this. So 2 two choice there assuming that it doesn’t, like, halt is it either throws, like, the completion is either going to be like a throw completion or like a normal completion of, like, yes, here is that WeakSet.

ACE: The next design choice is, like, okay, we’re asking a predicate. We have two choices there. Like, assuming it didn’t throw, can it return true or false? And then we sleep, and then we ask has again, and, you know, the choices we have there in, like, the spec are either it says it returns false, it maybe returns true or maybe returns false, or it should return true. A design choice I’ve not shown here is the assumption that the first line is valid, like, I created a composite that only contained strings and numbers. Another design choice is that whenever you create a composite, you have to include an object as part of the composite. And I think that’s bad for another reason, and I’ll only get into that if someone asks me to because I want to be, like—I don’t want to spend too much time.

ACE: So this looks like oh, we have like a big design space. I think in reality, we have two choices. And that’s because if I put something in a WeakSet, and it didn’t throw, if I immediately on the very next line ask, hey, WeakSet, do you have that thing I just gave you and it returned false, that’s so weird. That is just like really bad, and people will laugh at JavaScript if it works this way. This is how it works in Java, but you have to opt in. You have to pass a flag to the WeakSet and say I’m happy for when you get give an bad value, it’s just a no op. You have to, like, consciously opt in to the WeakSet in Java. It doing that implicitly would just, I think, be so weird, and I can’t see any advantage to this value immediately falling out the WeakSet as soon as you try and put it into it. Perhaps I’m alone on, that but I think everyone one like, yeah, that’s weird. Let’s not do that.

ACE: The other choice is, if the spec said after you sleep, then the WeakSet must say false, that is just not how GC is defined in language. We do not say every time you yield, that guarantees the garbage collector will fully run. Like, as far as the spec says, we only say which things can’t happen. An implementation of JavaScript that never collected anything would be a 100% valid implementation of the spec. So I don’t think we can start to say, after you yield, you’re guaranteed the garbage collector will definitely find all the composites put in every WeakSet and make sure they’re removed. The other, like, should it return true or should it return false, the roll of the dice, the language just doesn’t do this. We don’t have this non-determinism around the garbage collection semantics. We’re very, very clear about what should be observable, and I can’t imagine after doing all that work, I just can’t imagine we’d want to backtrack that.

ACE: Really, it sounds like with interned objects, with the things with type of object, you really haves two choices. Either the WeakSet throws. That then—the thing that in the past people have said, that’s really bad is, like, right now, in the language, every single object, no matter how silly it is to put in a WeakSet, maybe it’s `globalThis`, we let it happen. So this would change this. Potentially this might happen anyway. It’s been discussed around shared structs, like, should shared structs be allowed in a WeakSet? They have type of objects, so maybe this comes up anyway. But that’s one choice, and I think some people really hate that. That is my gut reaction to beginning, was that seems best. We should just throw. That was my initial gut reaction to this kind of thought experiment.

ACE: The other option is that it has to be kind of, like, a memory leak—and what I mean there is that the WeakSet actually will have a strong reference to the composite. It will see that you’re giving it a composite. It will see that the composite contains no objects. So it has no way of kind of—there’s nothing about that composite that gives it a finite lifetime. Everything in the composite has an infinite lifetime, therefore, the composite has an infinite lifetime. The WeakSet says, well, then the only thing I can do now at this point, because I didn’t throw, was that I have to hold on to it strongly. Because someone can always create that composite in the future and ask me if I have it. That’s bad, because as long as—if the WeakSet itself gets collected, then it’s all fine, or if you `WeakSet.remove` the thing, that’s fine. But if you’re not doing those things then, yeah, the WeakSet will just grow. That’s not great, because memory leaks tend to not be everyone’s favorite friend. In some ways, that’s maybe not as bad as it sounds, because we can do things like, for particular code, maybe we can do static analysis that would be able to see that’s happening. Potentially devtools could log a warning saying, hey, just to let you know, you’ve put like an infinite lifetime composite into a WeakSet. You’re probably leaking. Here is where that happened. Maybe don’t do that. If you create a heap snapshot, the heap snapshot statistics could say, here are the WeakSets that contain lots of these types of dangerous composites. You probably want to look into that. So while it sounds bad, I don’t think it’s—it’s not necessarily, like, as horrific as it maybe sounds.

ACE: I’ll also say that, again, when I talk to a lot of JavaScript developers that aren’t just, like, obsessed with, like, just like an after JavaScript developer, most of them say, like, why would anyone need a WeakSet? I’ve never used a WeakSet. And these aren’t junior developers. The that’s are JavaScript developers that are creating stuff with JavaScript for, like, longer than I’ve been alive. And they’re like, I’ve never come across a use case where I’ve used a WeakSet. That’s not a big surprise. They only come up in very particular cases, and most—it’s also rare when you’re using a WeakSet, you’re using it where you don’t know what the values are you you’re putting into it. Yes, that does happen, and a lot of cases where you’re using it it’s used internally in the library where they know what they’re putting in the WeakSet. So while it sounds bad, I think people will be a little open minded that it’s maybe not as bad. Because I’ve been somewhat convinced that maybe throwing is a bit surprising here. Maybe the leaking with all the support and maybe, like, tooling to help warn people. Maybe if we had to choose, I’m now somewhat leaning towards that one. But, yeah, I’m very much close to 50/50 between these two choices.

ACE: And I’d also say whichever up with you choose, you can always implement the other one. This is really like, what is the default? If the default is to throw and you wanted the other thing, you would try catch and put the value into a regular map. If the default is that it leaks, well, then you say if—like, before you put the thing in the WeakSet, you go if this thing is a composite, I will throw and say, like, this isn’t a value I’m prepared to handle. So this really is like, what is the default behavior? And this isn’t about WeakSets. It’s the same for WeakMap and WeakRef and FinalizationRegistry. And thanks for letting me get through all those slides, and back to the queue.

DLM: Okay, just to note, I moved off the topics that are related to your most recent set of slide, and if we have time, we can go back to the earlier topics. And first up we have GCL.

GCL: Hi, yeah, regarding WeakMap set ref, et cetera, we actually visited this space back when working on the Symbols as WeakMap keys proposal. And we came to a prior consensus that I think is quite reasonable where we defined what allowed values would be based on what we called forgeability of the values. And that’s basically saying that if you can have something that has a value in the JavaScript language that has some identity, and then lose access to that value, and then from scratch, create another value that has the same identity, you cannot use it as an entry in these types. So, like, I don’t know why we would not just use that prior consensus here.

ACE: That was my gut feeling as well, if these things are forgeable just like numbers and strings and registered Symbols are, if you’re putting them into WeakSet, you’re probably doing something wrong, so we would throw. I’m going to say, the reason I’m convinced against that is at least with the other—like, there was already precedent with Symbol—when we made that decision, all Symbols were rejected. So there was already precedent for some rejection. Yeah, I guess I’ve convinced myself that the committee are going to block a proposal that says some things with type of object that are not null throw when you put them in a WeakSet. I’ve kind of convinced myself that’s an unpassable design within the committee. Maybe I’m wrong and I’m being too pessimistic. Academically, I think that’s the correct answer.

DLM: Next Matthew.

MAH: Yeah, so the—I don’t have an opinion right now. I’m not sure which way I want it to go. I just want to highlight as you mentioned, there are potentially other proposals or other objects that may exist in the future that would also have an interaction with GC. You mentioned shared structs, there’s also basically the wasm shared objects, which is similar to the JavaScript shared structs. So it’s very likely that there would be other objects that cannot be garbage collected. Those, however, have a slight difference, is that right now, it’s a restriction that they wouldn’t be able to be WeakMap keys. It is possible that in the future, they could become WeakMap keys. In which case, I still don’t know which version I’m in favor of. Because if we allow them, that means we’re leaking now, but we’re no longer leaking in the future. I don’t know.

DLM: Okay, we have about 14 minutes left. Jake?

JAD: Yeah, I guess I’m just agreeing with what GCL was saying. People use WeakMap and WeakSet for the GC stuff, so anything that’s going to great that semantic just seems bad. When developers ask why can’t I use strippings and numbers in a WeakMap or set, you just say, well, because of the formability thing, so I think they would understand this perfectly fine. I your point that, yeah, WeakSet is rare, but WeakMap isn’t, is it has the same problem, right? As when used as keys. So, yeah, I think throwing makes sense.

DLM: Next up, Waldemar.

WH: So there’s a couple things going on here. One is we should not assume developers write all the code which they are running. If they’re using a WeakMap, it’s probably deep inside some library that they’re using, so if that leaks, it will be hard to figure out what’s going on. The other thing, which we haven’t talked about yet, is the communications channel created by interning if you intern values with negative zero. Let’s say interning interns the value it sees, and the next time you intern something, if it’s === to the original value, it gives you the interned value. This lets unrelated things communicate by playing with values containing a whole bunch of ±0.

ACE: Yeah, it’s a very common—so there’s lots of libraries already on NPM that kind of the do this interning thing. A thing I can reliably raise on all of these libraries and I have done and I fix them, and they always make the mistake, if they don’t consider negative zero and it’s first right wins. If you intern an object, and you put an negative zero, the next time someone asks for it and they pass positive zero, they get back negative zero because they currently interned one contained negative and vice versa. The records & tuples polyfill also did that in the first iteration and we had to fix it. It’s a common mistake to make because most people don’t know negative zero exists. If you ask people on the streets, they don’t know what you’re talking about. What I think we would do in that case, and it really forcing one of two decisions, either we say these things are not equal and so the thing you get back, is it positives or negatives zero would not intern to the same value. I don’t like that. I think we would always normalize map and set. So regardless of what you were interning the value you get back would always be positive zero. One thing we didn’t make clear in, interning approach, it’s not interning in like the value you cashed in is like any, it’s still a fresh object because it needs to be immutable and if you passed in a proxy, we can’t cache that proxy. We can’t to—is it kind of doesn’t matter which value was passed in to begin with. We’re always creating a new object on that fresh interning one, so we can do a normalization step.

WH: Yeah, there’s another potential source of trouble with NaNs if you stick a NaN into an ArrayBuffer and extract which NaN it is.

ACE: Yeah, so we possibly would normalize NaNs here as well. That’s another maybe kettle of fish to get into. I think normalization would be the strategy here for interning.

WH: Yes, that works.

DLM: Jordan?

JHD: Yeah, so there’s a ton ways in the language to create memory leaks that we don’t throw for. And I’m not going to leave the opportunity to check a TC39 bingo box, and I think it’s too nannyish to be that pair Floyd about memory leaks. Not only is this unlikely to happen that there’s that many compos activities that have non-finite lifetimes that are then put in a weak place, I think that’s, like, an obscure edge case right there. But everyone who is doing stuff with weak things, whether it’s the application developer or a library developer, they—if they’re using them, and they care about leaks, and they’re not just cargo culting some constructor in, then thoughive they know about this stuff. We don’t need to do it for them. They can check for it. And if they don’t know about this stuff, they probably aren’t—are already misusing their weak collections anyway. I just am not really concerned about, like, this—the potential memory leak of this obscure edge case here, and I think it would be much weirder to make what is a weak key or, like, what—the criteria for being weakable, like, I think it would be much weirder to make that more complex.

ACE: Yeah, I think—I do agree, if I do think we have gotten to a niche area with the WeakSets and even with WeakMaps. I agree with JAD WeakMaps are more common than WeakMaps. And people are definitely using WeakMaps more. And I will say, yes, we don’t throw in all ways you can memory leak. That’s because we attendant detect all ways you can memory leak. I think one thing about this is it’s trivial to detect that this is kind of fundamentally wrong. So it’s easy for us to throw. And it aligns with how we already throw for similar values.

JHD: But Symbols aren’t similar values, so we don’t already throw for any object, except for I think window, because it’s exotic. But, yeah, as to—I see a queue item and I’m just saying, memory leak is not a breakage. Neither is a code regression. The performance works fine.

ACE: Until you hit OOM, which then it’s still there.

JHD: Sure.

DLM: Waldemar?

WH: I strongly disagree with the preceding statements. If somebody has written a library which uses a WeakMap and they don’t update it, it will be broken. Not only will the WeakMap inside the library continue to grow, it will also create a leak inside the interner. Which is a very different scenario from just having a fixed number of a few long-lived global objects. The interner itself will leak these things.

ACE: Just to confirm, WH, you’re not saying that throwing would break libraries. Your preference is to throw?

WH: Yes.

ACE: Right. Thank you.

DLM: MAH?

MAH: Yeah, just I want to reiterate that the problematic here is application creating these composites passing them in libraries that internally use these weak collections and the application is not really in control of whether the library they use is able to handle that situation. So then the application would be faced with a choice of not using composites, or to either leak or basically the library not functions anymore.

DLM: Okay, Keith?

KM: Yeah, I guess on the same vein as that, like, the—any time we add any of these new features anywhere in language, every library that uses WeakSets needs to be updated instantaneously, otherwise it’s broken. It doesn’t fail safe. It fails badly, and I guess to my second point of memory leaks aren’t breakages, there are certainly platforms that exist that many people have, probably in this room, where if the website uses too much memory, it will just kill your web page. And it’s not controlled by the browser, the operating system does this. And there’s no fallback, there’s no escape. You just die. It’s not like it starts paging to disk. It just kills you. So I guess I would argue that leaking memory is breakage in some contexts.

ACE: And, then, just so I have it on the record, you’re also for throwing for this particular case? I have similar things where I was talking to Google last night about caching things, and caching things to avoid computations later sounds good, but you can run out of memory. It’s much harder to run out of CPU. Yeah.

DLM: Point of order, we have actually now about four minutes left.

ACE: So I’m really interested in all of these other things. I am wondering—yeah, let’s just keep going with the queue.

DLM: SHS?

SHS: Yeah, so I mean, people are talking about, you know, these libraries that are using weak collections and that they’re going to leak all of a sudden. The alternative if we throw, they’re just going to fail fast and also be broken and if you’re not controlling your library, you still can’t use this library. And I’m trying to get of sense of are we saying failing fast is at least a better alternative or something else entirely?

ACE: Yeah, because this is why I’ve been asking for clarification, and some people may say throwing breaks a library, because now if I pass a composite, these forgeable composites, now that library throws where it didn’t throw before. It’s a backwards compatible change because composites don’t exist yet. No existing code would break. You would have to start using composites to do this. Personally I think this is, yes, if a library wants to start supporting these forgeable composites and it takes them into a WeakMap or WeakSet, then they need to be updated. I think it’s very natural in the ecosystem, if you want to a new feature, you have to wait for a library to update, you have to fork it and move to that new version. Like, it’s not great, but it does seem like it’s not that bad that the ecosystem will have to release new versions if they want to support new features.

SHS: Yeah, because I mean, everything using it would be leaking right now—it’s not actually fixing any breakages.

DLM: Okay, next up is Ron.

RBN: Whether the concern is that it breaks because it leaks memory and the tab get shut down or it throws an exception, throwing the exception will inform the developer or the consumer that the—where the issue is specifically, whereas leaking will just result in a crash that it’s much harder to track down. So throwing and failing fast is much more reliable and much easier to fix.

DLM: Thanks, Ron. Matthew?

MAG: So I just wanted to note we started trying to decide a little bit about how did we feel about interning versus the version that doesn’t intern. Coming back to that point a little bit, people seem excited about interning. I’m excited about interning. But there is architectural limitations for SpiderMonkey that might pose problems making this, like, potentially unimplementable and at the very least very hard. So I just am doing my obligatory wet blanketing here.

ACE: I think Iain raised an issue from the SpiderMonkey team raising in, and I do apologize I implemented this in V8. I was much more familiar with V8’s garbage collector and semantics than spider. And I wasn’t aware of some of the different strategies that SpiderMonkey had, and I think I understand the issue that SpiderMonkey has than I did before. I definitely don’t understand it as well as the SpiderMonkey team. And I’m wondering an actual next step here, I think, could be I go away and I try and do a SpiderMonkey implementation, because I don’t want to put that burden on to you folk. To kind of really, really feel that pain and just kind of understand that. Yeah, thanks for raising. It was news to me last week. Thank you.

DLM: Okay, we have under one minute folks. Actually, we just ran out of time. And I’m not holding back anyone from lunch. I don’t know, I’ll leave it up to the other chairs whether we want to try to do a quick continuation later on.

CDA: If ACE wants to do a continuation, we can.

ACE: Yeah, and the other topic on the queue here is the kind of wider design decision of, like, neither of these things and a different thing. So whatever we do, I think I’ll be coming back to plenary with more slides. And I don’t want to take time away from stuff already on the agenda for this meeting.

CDA: I think we will have some time available towards the end.

ACE: If we do have time, I would appreciate it.

### Speaker's Summary of Key Points

* A quick recap of the problem space around complex Map/Set keys was presented.
* A core design choice that dictates almost all other aspects of the proposal is if Composites are interned or not.
* Two experimental implementations of Composites were made, one that interned, one that didn't.
* Benchmark performance results comparing the different approaches were presented. While interning did add overhead to the initial call to create the key, as long as the key was needed twice the overhead was paid back due to the faster lookup and subsequent pre-interned keys.

### Conclusion

(discussion continues on [day three](./november-20.md))

## Concurrency Control stage 1 update

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/tc39/proposal-concurrency-control)
* [slides](https://docs.google.com/presentation/d/1WoEqtVKEJgIhyTbOO2aWbNKLCFNPXHMb0ZW3gMFpyvU)

MF: So this is an update on the concurrency control proposal. Remember, this is a Stage 1 proposal, so we’ve agreed in the general, you know—the general problem space that we think it’s worth solving, but we don’t have any agreement on the solution space yet. And I have refined it a little bit more since we last talked about it, and I want to present some of that and then get some feedback.

MF: So remember the problem space that we're addressing is that there there’s no convenient built-in way to orchestrate or limit concurrent access to a resource. This can be any resource. These can be things you typically think of as resources like file handles or database connections or something like that. But I want to mostly focus my efforts here on functions and async iterators. Although they are generally useful. But those are things we have built into the language now.

MF: I want to remind you of the context around this proposal. We originally had Iterator helpers, which is now at Stage 4. This gave us this very small set of methods on Iterator prototype for either composing iterators or consuming iterators. And KG has a proposal that’s at Stage 2 called Async Iterator helpers, which is the same thing but for AsyncIterator and that proposal is also going through a lot of work to make sure the async iterators it does produce can be consumed concurrently, but there are no facilities for controlling that. So in this proposal I want to add those facilities. And, you know, as a prerequisite to that, a way to describe concurrency strategies.

MF: Also, I want to remind you that, like as a follow-up to this, we hope to get to a point where we can have unordered AsyncIterator helpers, when used with the things provided within this proposal to describe some amount of concurrency, could be a lot more efficiently consumed than async iterator helpers that are always consumed sequentially. And then we expect that this will be a majority of the usage of async iterators, they would be consumed in this unordered way and be much more efficient because of this sequence of proposals here. And just a reminder of what exactly we’re talking about for those. The iterator helpers added map and filter and stuff like that to `Iterator.prototype`. Async iterator helpers is doing the same for `AsyncIterator.prototype`, and `AsyncIterator.fromAsync` and the buffered method on `AsyncIterator.prototype`. And we’re looking for something like a way to opt into an unordered AsyncIterator prototype that then has all of the same methods, and this would be like something like an unordered method on AsyncIterators, so once you have an AsyncIterator, you can call a `.unordered()` method to opt you in to getting unordered helpers.

MF: What are we looking for this proposal to provide to get us to that point? I want to go over the context of this proposal as I'm imagining them at the moment. It may seem like a lot, and I’ll have a summary at the end and I don't think it’s that much. So first thing we need do is for, you know, integration with async iterator prototype, we need to add a parameter to each of the six currently (as of this proposal) present consumers of async iterators that are there for AsyncIterator prototype. So here I’ve just added an optional concurrency parameter at the end of each of these parameter lists. That parameter is—you can for now think of as an integer and that just tells you, you know, how many concurrent operations can be happening, can be performed by that helper. This can also take a more abstract description of concurrency that we’re going to call Governors that I’ll get to in a second. As an example on the right you can see what you might do prior to this proposal where you for-await over some AsyncIterator, and then you have to await some predicate, and this is basically implementing `AsyncIterator.prototype.some` manually. But you can see that it won’t do anything concurrently. It will await this element and then it will wait the promised return by this predicate and await the next element and it all just happens in sequence. So that would be equivalent to what is going to be introduced with async iterator helpers. That proposal doesn’t change that at all other than making it convenient to write. You would say `asyncIter.some(predicate)` on line 10 here.

MF: So with this proposal, you can do the same operation with a concurrency of 5 by just simply passing 5. It should be that easy. If we want to do some kind of more complex strategy we can pass a governor, which I said, which we’ll get to. So additionally, if we are giving these easy ways for people to consume AsyncIterators concurrently, we probably want to give them an easy way to opt out from the production side, from being consumed more concurrently than they would want to be. So this propose also adds a single additional prototype method for AsyncIterator called `.limit(N)`, which limits how many pulls can happen to the underlying iterator. So if you look at the example, we can create an AsyncIterator here that logs every time it’s pulled. And then we created a new AsyncIterator that is limited to two. And if we next it a bunch of times, only those first two get logged immediately, and then the next ones will not get logged until after we’ve awaited these first ones.

MF: Third of four slides here I have on this. I told you that we wanted to be able to describe more complex forms of concurrency. This is how we’re planning on doing it. We have the governor interface, and we want to give the developer the ability to define their own governors. This is not a feature that is going to be entirely built in and controlled by us. Because there’s lots of different kinds of concurrency strategies that people are going to want to describe that we can’t predict ahead of time. This is definitely a place that needs a protocol because of that necessity of user extensibility. So I’ve defined the governor interface, which has a sync and async version of acquiring a token, which gives you the right to use the protected resource, and then that token has a way to release it. Which gives back that allocation so that others can do an acquisition. This is done through either the, you know, ergonomic `release()` and `asyncRelease()` methods or the identical `Symbol.dispose` and `Symbol.asyncDispose` from explicit resource management. There’s also a governor constructor itself to make it convenient to, like, subclass, as you see in the example on the right. And a couple of prototype methods that you get with it that make it easy to actually use those governors in the way we expect people to use them. If you look at the example, we are implementing some custom governor where we override the `acquire` and `tryAcquire` methods, returning some token that can be released. I’ve omitted the actual details of the kind of concurrency strategy that’s being described because it’s not important for this. And then you can see a usage of it down here in lines 12 through 16 where we create a governor that is governing some resource, and in some async function, we await the acquisition of a token. So it will wait until—until the resource is available, and when it is, it can use it, and at the end of this block, you know, explicit resource management's `using` will clean up for us. Alternatively, we could have used one of these prototype methods from `Governor.prototype`. If we had done `gov.wrap` on a function F that didn’t have line 14, it would behave just like this, like it did at line 14.

MF: And finally we have one built-in actual concrete governor called counting governor. This is a semaphore, if you’re familiar. It used to be called semaphore actually in an earlier version of this proposal and people had some issues with that. So this is a built-in governor. It describes the most common kind of concurrency limitation, is just we have some fixed number of some resource that I don’t want anybody using more of than that number at the same time. This is also useful for sharing some resource without coordinating ahead of time. So if I want two different unrelated operations to use the same pool of allocations, like, that’s—that’s facilitated by this rather than just an integer like we saw before. So as an example, I can create this governor. I can use it in these two different `forEach` calls on AsyncIterator prototype, and I can also use it in async function F, and these will share that same pool of two resources.

MF: So that was, like, an in-depth view of everything that is currently in my preferred solution for this proposal. Here is the summary of it. I’ll just go over it very quickly now. We have the additional parameter on those six AsyncIterator prototype methods. If it's passed an integer, it’s the same something as passing in a counting governor. And you can also pass in arbitrary governors. And we also have the addition of a new `AsyncIterator.prototype` method for limiting concurrency because it’s appropriate to do that if we’re giving a convenient way to consume these concurrently. We are establishing two new interfaces for governor and governor token. And governor has a prototype with two methods on it, `with()` and `wrap()`. And then we are introducing the concrete governor counting governor, which is the by far most common kind of concurrency strategy that we believe people will want to use.

MF: So it came up in the issue tracker and during a previous presentation, I believe DLM, and possibly others had some doubts about the motivation for this proposal and I wanted to quash that with these next couple of slides. We have here a list of some incredibly popular NPM libraries. Not all of them, but a lot of them, most of them on this slide, are very, very popular NPM libraries, and next to it is a single line of how you would replace that entire library using the things provided in this proposal. I don’t know if it’s too valuable to actually spend our time going through each one of those, but you can trust me that for the most part, all of these libraries are now unnecessary with this proposal, with the exception of the `async` library at the end, which is another incredibly popular library, one of the most poplar libraries on NPM, which includes a whole lot more, and possibly a space we would like to explore for pulling in with follow-on proposals. And this throttle one would like a time-based governor. We don’t like the idea of introducing the concept of time within this committee, so that’s left out of this proposal.

MF: And here is just like some download numbers just to show you these are very, very popular NPM libraries. Lots and lots of projects use them. So I think it shows that there's definitely a very strong need for these kinds of things.

MF: We spent a lot of time going down kind of a rabbit hole of trying to solve the whole space of concurrent task queues as well in this proposal. It is surely the case that there’s a big need for concurrent task queues just as there’s a big need for these other concurrency helpers we’re providing here. But as you can see from these libraries, all of which have lots of uses, they are all very different, both in their complexity and capability. They use very different subsets of the total capabilities.

MF: So, you know, it is very important for us to provide something like governor protocol built in to the language, because it’s a coordination primitive. That’s what we need to do in a language, provide these coordination primitives so that the ecosystem can standardize on them and then work together, right? That's what we do, build standards. So it’s very important that we have those kind of things as part of the standard library. Additionally, we maintain the standard library and the standard library, in particular async iterator, is a built-in consumer of such things, so unquestionably those should be part of this proposal. But for concurrent task queues, even though they are clearly very desirable and much needed, the design space is a whole lot bigger.

MF: There’s a lot of variety in those different libraries. They go from very, very simple kind of like one-pager implementations to very complex libraries, and they all choose different subset of all of these features, which are all useful in their own right. And you sometimes don’t just want something with everything. A lot of the people who just have one of those one-pagers with a priority and none of these other things don’t want to think about all these other things and have that all built in. And additionally the thing we’re providing here, Governor, would be helpful in building such a thing, so it makes it even easier to build those libraries.

MF: Now, I do think that it would be valuable to explore this space. I think it would be a great Stage 1 proposal where somebody actually looks at where we could draw a line and reasonably include the features that are needed by the most people without excluding too much, and make it extensible or something. But I don’t want that holding up the rest of this proposal. It is a possible follow on. I don’t know if I will do it, but I don’t know if we should forever leave it to the community. Maybe we should wait for more centralization. I don’t think that will happen, because as we talked about, the variety is pretty extreme. But it’s an area for exploration. For now, we've just completely removed that whole space from this proposal. We’re not trying to solve concurrent task queues. I will continue using these libraries in my own code, though. It seems like everyone needs a concurrent task queue.

MF: So we’ve also considered how this interacts with the ecosystem. As I said before, we interact with explicit resource management, the using syntax, because governor tokens are disposable. So they implement `Symbol.dispose` and `Symbol.asyncDispose`. We’ve talked about cancellation a lot. The—you know, it’s important to be able to abort token acquisition, right? When I try to acquire, I may, you know, at some point say, "oh, never mind, I don’t want that resource anymore". And I need to be able to, you know, stop acquiring. This is going to come up a ton. So there needs to be some way to do it. Right now, cancellation on the web happens with abort control and abort signal, and we want this thing to kind of work well with things that are cancelable on the web. So in my opinion, our hands are pretty much tied. I went down the route of trying to design something really nice with abortable governors that are separate from governors and we can make nice guarantees about if you’re a non-abortable governor you can’t abort the request, and that's beneficial for some case, but it was ignoring the greater context that we want this to work well with other cancelable web interfaces. We need to do something with passing in a signal and working with abort control and abort signal. There will be some changes to make that integration. We also need to consider that atomic mutex from the shared structs proposal is somewhat overlapping in the way that you would maybe confuse them with counting governors. Maybe we just need to choose the same method name, but they just have different prefixes. I mean, we’re not doing any kind of atomic actions within this proposal. You know, I know people had an issue with, like, naming counting governor semaphore before because they, again, thought it was only for, like, threading use cases. Even though semaphore just means a counter. So anyway, we need to consider how those two will exist together. That is work to be done still.

MF: And then we have design questions. These are like things that could go either way, and I would really like feedback. I mean, I don’t have to get feedback. I can just make decisions. But if there are people that are going to have opinions after I made that decision, I would like to hear that feedback sooner rather than later. These will be in no particular order. I’m just going to go through them and explain what I mean here. But some of them are not very important at all and some of them are pretty important.

MF: So should counting governors have idle listeners? This is a thing we saw a lot in the concurrent task queues, is that they would want to know when there’s no work being done anymore. Similarly, somebody might want to know when there’s no consumers of a particular resource. And they want to be notified in the event that that happens, not have to poll for it. So we could add that. I have experimented with it in the polyfill. It’s fine. Is it useful to include? I don’t know. I think it probably pays for itself, but I don’t want this to have a massive surface area that I put in front of the committee, and hear this is scary, it’s too big. I put in right now what I think is absolutely necessary for sure. And if everybody says, like, yeah, we should add that too, I’m happy to pull stuff in. So I think it would be probably good, probably pay for itself.

MF: Should there be a prototype for GovernorToken in the same way we put a prototype on governor? Should GovernorToken be a thing rather than just an interface? This could be helpful because we have the ergonomic string-named `.release()` method, which is supposed to do the same thing as Symbol dispose and then you can just implement one and then the prototype is helpful in defaulting the other. Alternatively, we could just have the Symbol named methods for doing that, and expect people to always use explicit resource management or have a really unergonomic invocation of the disposal method. And I don’t know what else we would put on it. Maybe somebody else has ideas for what helper methods might go on GovernorToken one day and maybe at that point we could add it. Maybe we can’t. I don’t know. I’d have to think about that. But should it be there? I’d like to hear feedback.

MF: So I talked briefly about it before, but, should there be some kind of time-based Governor that can do throttling? CountingGovernor is obviously the most common description of a concurrency strategy, but a throttling governor seems to be like the second most common thing that people want to describe. We saw the need for that in some of those libraries. I think probably eventually we should have something built in here. Do we want to have it as part of this proposal or as a follow on? That I think is more of the question there. Again, I didn’t want to present some big mega proposal and then it gets a little scary. But if people think, yeah, this is obviously going to need to go in, we can pull it in.

MF: Oh, yeah, I kind of talked about release, and asyncRelease being string properties that are equivalent to the Symbol ones. If we drop the release names, and I say like it’s not ergonomic, would we also want acquire to be a Symbol and that be a Symbol-based protocol? I’m okay with that too. This is acquire on a governor, not a method on the governor token. I’m open either way there.

MF: Oh, you know, I don’t remember who brought this up, but somebody brought up that, like, you know, every time we acquire, we create one of those governor tokens. That’s another allocation. Should we allow people to reduce allocation by passing in some representation of an existing token that now represents the acquisition? Should it be done as an optional acquire parameter? If we do that, then I kind of should have done the final bullet point first, that then, like that takes up that space, and we might want to use that space for other things. So I’d like to hear opinions on that. Is it really valuable to save those allocations? I don’t know. We’ve done it for other APIs in the past.

MF: This second to last bullet point about avoiding deadlocks is almost certainly a necessity at this point. I was thinking about it would be nice just for convenience to be able to have like a `governor.all` that takes a couple of different governors and says, if I try to acquire this, then you try to acquire all of the governors that were composed. I was only originally thinking it was a convenience, but actually we need to solve the problem of someone who acquires one governor and tries to acquire a second one while some other actor is doing the opposite, and they’re deadlocking. I think this is, like, a really common thing that’s going to happen. So I think it would be irresponsible to add these without adding some way to compose them and use the typical strategy for trying to acquire multiple semaphores. So we probably have to add a `governor.all`. I should have just done that because I’m very confident that that’s the appropriate thing to do.

MF: And then finally I talked about governors having a configuration as they’re constructed, but they might also want to know something about the actual acquisition site, right? So, for example, you might have a governor that is parameterized by some priority of the thing that’s trying to do the acquisition, and it passes that in. So would it be okay for governors to take an optional parameter for `.acquire` that tells them about who’s acquiring it and why or whatever. Again, this is all very open ended thing, because we’re talking about user extensibility here, where who knows what they would want to use that parameter space for. But I can imagine a couple of cases, and that means that there’s probably a lot more that developers will end up thinking about. But it makes sense that you want not just fixed configuration at construction time, but also dynamic information about who is doing the acquisition.

MF: So finally, these are the things that I believe have to get done before I present for Stage 2. We need to figure out how to integrate AbortController or AbortSignal for cancellation. That’s a very important thing. We need to make decisions on all of these open design questions that I just presented. If there’s any feedback today, I need to incorporate that. I need to update the proposal explainer. It’s definitely out of date. And we have some portion of a polyfill, but again also out of date. And that’s going to need to be updated too. But that can’t really provide any value until the polyfill for async iterator helpers is complete, which we’ll be waiting on KG for. And, yeah, I’ll have to provide some spec text, but that should be fine. And that’s my presentation. I don’t know how much time. I used a half hour of my time. So we have half of the time for feedback. Hopefully there is a lot on the queue.

KG: Yes. Great presentation. I want to argue for CountingGovernor being named semaphore. I think the people who thought it should be named not semaphore were wrong. This is what everyone in JavaScript calls it. Also, as we’ve been discussing briefly on the Matrix chat, it’s totally possible that this could be made to work across threads, and then it would actually serve the cross thread use case as well. But I think even if it’s not, it’s definitely valuable on its own. Semaphores are for concurrency, not parallelism. It should be called semaphore. We can fight about that later, though.

CDA: Okay. NRO?

NRO: Yeah. Disclaimer, I don’t really don’t know what I’m talking about. But if, like, use case is presented for the counting governor is that you have some resource, and say you have three buckets cannot do more than four things in parallel with three buckets and you want to limit yourself to three, and then when you acquire the right to use the buckets, would it be helpful for the counting governor to give you the bucket that you can use?

MF: What do you mean give you the bucket?

NRO: Give you an object. I don’t know, like, you have three connections. Acquiring gives you a connection object that you can use, maybe subclass talking. I don’t really know.

MF: I see. Instead of just—instead of, like, just giving you the token that represents that you have the authority to use the resource, give you a pointer to the resource itself?

NRO: Yes.

MF: It’s not how we’ve designed it. I can think about that. Off the top of my head, I’m not going to be able to give a good reason why we don’t actually manage a resource itself. But let me think about it.

CDA: KG?

KG: Yeah, it does work like that in Rust, but Rust obviously has its extremely powerful type checker so that it can actually guarantee that the token that is vended by the lock is the only thing that grants access to the resource. I don’t think it necessarily makes sense to do that in JavaScript, just because we don’t have that type checker. And that’s the main reason you want to do it in Rust. In JavaScript, it’s easy enough to say assuming you have a token, you’re allowed to call a `poll` method or something.

PFC: In the bottom point on this slide, can acquire take an optional parameter and—did I understand correctly that it’s passing a user-supplied value through to protocol methods?

MF: Yeah. So the—so the acquire method is part of the governor protocol. And, you know, it would not be used by counting governor because it doesn’t need any additional information about the call site. But for something that, in my example, like priority, for something that needs like a priority at the call site, it can take in that information and use that for maybe—deciding which of the many things that are trying to make an acquisition actually get one first, so I wouldn’t say it’s like passed through to the implementation, because the governor itself would just be implementing an acquire that consumes the parameter rather than ignores the parameter.

PFC: Okay, but fundamentally, is a userland value going into the engine and then back out into userland and then back into the engine?

MF: No.

PFC: Oh, okay.

MF: We’re talking about user-defined governors here. If I would write my own priority governor of some kind that has an acquire method that has a parameter rather than does not have a parameter. That’s the question at the end. Like, is it allowed to have a parameter.

PFC: Okay. I was going to caution you about some of the cans of worms that we opened in Temporal when we still had protocols there. But it sounds like this doesn’t apply. Great.

CDA: RBR?

RBR: So I believe in general, it’s great to have something like that. I’m just wondering if is it actually simple enough for most developers to being used? Because, like, the current helpers that are meant to be replaced with it are actually very simple, often. They’re just straightforward for everyone to understand, and with the governor token, definitely being more powerful, you can do a lot more with it, and I believe it is good from that perspective. Just is it really intuitive as I said? I somehow doubt that, that a lot of people will be able to use it. And there’s another downside that I see with it. It’s actually only governing in one area. You don’t know the resources of that machine that you’re running on and you do not know with whom you might also compete with a different governor on that same machine, so that’s a big problem for me that I would like to solve, because I have looked into the same problem from a different perspective before to take the overall resources of a machine into account.

MF: Yeah, so to the first point, I think the vast majority of developers are actually going to interact with this like we see on line 13 here. They’re just going to pass a number and it’s going to get faster. You know, they won’t be thinking about governors unless they have a more complex desire for concurrency, and most desires for concurrency is just "bigger number". So I think we don’t need to worry about the understandability there. You only interact with governors when you actually know—I don’t want to say you know what you’re doing, but know what you want. On the second point, I explicitly do not want to solve that problem that you’re talking about, of trying to assert authority over some entirety of a resource. We are talking about a problem space where you know a resource that you have, and you’re delegating authority to that resource in order to share that authority. The problem space of, like, trying to say, I’m on a physical machine and now I am the authority over all of this machine's available resources is a totally unrelated thing, in my opinion. I do not want to get into that.

CDA: RGN?

RGN: Right. So `AbortSignal` is obviously important to consider. I’m glad that you called it out head on. But it’s also a giant can of worms. And I was wondering if there’s any appetite for pushing something more fundamental and kind of taking the lead on a protocol or an interface or a pattern that isn’t so bound up in muddling capabilities and in requiring a whole lot of the web platform?

MF: I think—KG’s on the queue next and I think he has thoughts.

KG: Yes. Absolutely, RGN. I have thoughts on this topic. I fully agree we do not want to pull in all of `AbortSignal` and `AbortController`. And I also think that there are things that would need to be improved about those interfaces to make them usable for us. In particular, it cannot be the case that the way that you register that you want to get an abort callback called is doing addEventListener and passing the string "abort".

KG: There must be a better interface for us to be able to use it. And there’s also a bunch of other thing that are wrong with abort signal having to do with the event machinery and cancellation and capability sharing. I think that the route forward is to try to improve those things on the web platform, as part of WHATWG. Potentially with the motivation that we would like to be able to use those things in JavaScript, but I think it’s also well motivated to improve the things on the web platform. As evidence for this, I present any the web internal uses of abort signal all work exactly the way that you would want userland to work, so it’s understood on the web how these things should work. It’s just that the capability of using these things in the correct way is not exposed to users, only to web internals. So I think that we can probably, hopefully, work with WHATWG to improve the usability of abort signal and abort controller. And then having done that, define a subset of those interfaces in JavaScript, so what we could say is in JS, there’s a class AbortController such that instantiating that class gives you an instance that has a `.signal` property, which is an AbortSignal, and AbortSignal have a, for example, "onTeardown" method, which takes a callback. And on the web platform, these classes, AbortController and AbortSignal, would have a bunch of other stuff, and those things would not be defined in JavaScript, and these would be extending JavaScript which wouldn’t require changes to the web platform. It’s allowed to do that. And other platforms could also have that subset that’s only in JavaScript and have cancellation that interops with how it works on the web.

RGN: All right, I’m thrilled to hear you say that you also agree that there’s a path forward. Cancellation is obviously very important, but we just can’t use the status quo. I think it will probably be a long road, but that’s very encouraging. And I’m happy to have an ally.

KG: Yeah. I do also want to say, I don’t think there’s any route forward to this other than improving AbortController and AbortSignal. We can’t define a new thing. It has to be something that is, like, transparently already what the web platform is doing.

CDA: All right. We have exhausted the queue.

MF: Okay. I’ll give it like another minute, but, you know, while we wait for anybody else to get on the queue, I just want to remind you that, like, there’s an issue tracker, you can post opinions there. Talk about any of these open design questions there. So I would love to see more feedback on the issue tracker, you know, before I really get going on updating this proposal.

OFR: Maybe since we have time, so I was wondering about universality. So you showed, like, how this is coming up in different libraries, and it’s, I don’t really know much about these things but it looks like an opinionated design, so I was wondering is there limits with what you then can do it with since—yeah, I was kind of missing that topic from the presentation. What are the limits, what can’t we support? What would we have to add on top of it to support everything?

MF: Yeah, that’s a good question. I hope this interface is not too limiting. As I showed in the bottom bullet point here,, once we start thinking about additional concurrency strategies that people want to implement, we learn things like oh, it’s actually useful to know about the call site. Maybe you need to have a parameter passed in to acquire. That changes this governor interface, and hopefully during Stage 2, we could do enough of that, learn enough through experimentation, that we feel confident that it is very broadly applicable to the kinds of things people want to do. I’m unusually optimistic that we will actually be able to get good coverage there, because it is a simple concept of saying, hey, I need some time with that limited thing. And then, okay, I’m done. I no longer need some time with that thing. There’s really not much more to it than that, other than as we said, maybe telling the controller, why I need that time or who I am or something like that. And we could be fairly flexible with it. Just saying, like, throw an options bag into the acquire. So, like, I feel pretty good. I feel pretty good about it. I’d love to hear if people come across cases that are not covered by this, and I can then talk about whether that is desirable.

CHU: Yeah, coming back a little bit to this, what OFR was saying. So thanks for the presentation. I think from a developer’s perspective, I think it is useful. Especially I also think the prospect of kind of, like, you know, getting rid of so many different libraries is something that is pretty interesting. But, yes, as weed say, so I need some time to digest the whole thing, and my only concern so far would be the report, you know, like, API design, so naming, stuff like that. So that’s what people were kind of also saying in the queue. So apart from that, I think it’s good. Yeah.

CDA: SHS.

SHS: Yeah, so if you had an additional optional parameter to the acquire method, my understanding is that all of these iterator helpers would be calling acquire. And would not know what to pass to. Obviously it’s optional for a reason, but I guess how do you see that working together?

MF: Yeah, that’s why it would have to be optional, because some consumers just won’t have that information to pass. So any governor that’s written to observe that parameter would need to expect that it’s sometimes not present. Unless you have any idea of what additional information the AsyncIterator prototype methods would provide.

SHS: No, I’m just trying to imagine if somebody would want it to somehow pass those—the extra information along, maybe need another parameter, they want another parameter to those methods to again say what kind of—I don’t know. I was trying to Imagine what people would want.

MF: I see.

SHS: Or lacking.

MF: That’s a good point. That is something I should think about, is if the caller of the `AsyncIterator.prototype` methods would provide that and then it gets passed through during that orchestration. That’s something worth exploring.

CDA: We have exhausted the queue.

MF: Okay. That’s fine by me. I can yield the rest of my time. Thank you all for the feedback, and remember to participate in the issue tracker.

CDA: Would you like to dictate key points summary, conclusion for the notes.

MF: I would prefer not to.

CDA: Okay. Will you commit to—

MF: Yes, I’ll write it in the notes, yes.

CDA: Okay. I have to ask.

KG: Just before we move on, I do want to say that the effort to get abort controller and abort signal sort of cleaned up in WHATWG and some subset of them imported in the language I think is important and something potentially a lot of people will be interested in, so please anyone who is interested in that topic come chat in Matrix and at some point, I will try to put together some sort of presentation to bring to WHATWG. I’m especially hoping that I can get the participants from browsers to help out a little bit there, because I have personally found it very hard to get feedback from people in WHATWG historically, and this is going to be a blocker for this feature getting added to JavaScript.

### Speaker's Summary of Key Points

* The concurrency control proposal has evolved since last presented
* Scope has been limited to not include concurrent task queues
* Reinforced justification through comparison to highly popular npm libraries
* Reviewed remaining open design questions and cross-cutting concerns

### Conclusion

* Committee has been updated and some feedback has been given

## `Object.propertyCount` for Stage 2

Presenter: Ruben Bridgewater (RBR)

* [proposal](https://github.com/tc39/proposal-object-property-count)
* slides (not shared)

CDA: Are we attempting to get the screen? Okay, there we go.

RBR: Sorry, I had to—I was still in a Zoom call, and that’s actually the wrong window. Give me a second. Sorry. All right, sorry. So like we have spoken about performant object property counting before, and in my original proposal was for problem space where we are often and definitely needing the number of properties on enumerable own keys, that’s very frequent use-case. I was also suggesting to do the same for something like get on property names and for getting property Symbols. I wanted to make that as a very generic API general originally, where it would work with an options bag so pretty much any possibility can be retrieved by any user. Because, like, at the moment, and we are allocating an intermediate area to getting the data, this causes obviously, like, memory pressure and such, like, the garbage collector is involved, and we normally don’t need this at all. Like, with the engine can likely optimize this at least from an after first access to know how many properties are on—could count it definitely.

RBR: Now, the original one was rejected, at least in its current form, and therefore, I was looking into it again to make it simpler. And to separate it in three different built-in methods that we also discussed before to just have the object keys links method as well as potentially object get own property names links and get own property Symbols links. This would not have any options anymore, so it aligns with the existing methods, and also as less possible options in general, like, with the original one, it would have been possible to, for example, get non-enumerable property count, which is a rare use case, definitely. And I have not found any use case before that. And that’s something that would not be possible as such directly anymore. And my focus is only actually for this one. And my suggestion is we discuss this as a main key. And, like, I would ask the committee to consider `Object.keysLength()`, and to be implemented as such. And we are—I’m also suggesting the other two that I would like to separate it into different steps for a vote. Some usage examples are, for these simple case, we discussed it before multiple times that we definitely have sufficient usage for that. What was way more difficult to find is usages for the others. And like get own property names links is actually something that is used a lot in pretty much all end code. Why? Because, for example, babble is used everywhere. It’s always vendored or transpiled in the end, and there’s another module I forgot, which also contains it. I believe it was one of yours.

JHD: Yeah, there’s one of my mine called `hasSymbols` that I do this check for because I have to detect core JS’s Symbol polyfill or attempted Symbol polyfill. And I would be able to take advantage of the faster check-in and engine.

RBR: So and, like, I tried to actually filter those, and it’s not so easy always, which definitely uses moment and video.js and grape-js, which are direct usages, and I just had it open, and I don’t know, my Windows got confused when I was playing around here, and I don’t have it open anymore, and I can open it again in a second. And actually, on—as a future reference, what we could consider while I was looking into it, I definitely found that more likely usage what would be actual usage is Symbols. Like, everything we do, and when we work with it is probably also a little bit babble related or helpers. Every code base tries to filter for enumerable Symbols. And not that it’s a super heavy task regularly, but it’s a common task. Why is it not super heavy, because we don’t have as many Symbols on objects. It’s still much faster in the end probably because, like, in that case, the filtering is completely gone. So that would be a potential and future thing. But for now, I want to focus on the simple keys lengths and would ask the committee for voting only for that for Stage 2. Jordan, do you have anything to add for now information

JHD: yeah, in general, the last presentation of this proposal had a single method with an options bag, and there was some pushback from folks saying, you know, I’m paraphrasing here, like, they don’t like options bags, they’d rather see a bunch of separate methods. There were differing subjective opinions about which pattern is more discoverable, you know, within an IDE with tab completion. There’s examples of both patterns being discoverable, so kind of it’s not really clear that either one of them is more discoverable than the other. What I would point out is this committee has long preferred smaller proposals that build on each other over time. That’s fine. That’s a great way to design stuff. But if the full future design direction is not thought through to some degree, then things can organically go in weird directions so you end up with weird words. I’m sure everybody’s got a pet thing in their this might qualify for that. So in this case, in the fullness of time, if we can convince the committee that all four of these types of counting are necessary, then we’re going to end up having four—either four separate methods of, you know, like westbound a length suffix or a count suffix or whatever, or one separate method.

JHD: If people are cool of peppering four separate methods knowing that’s the definition we’re going for. Great. Separate method is the right API design to go with now and works very easily as the composable thing and add one at a time and parallel proposals that advance together kind of thing. However, if that feels distasteful to anyone, then it might make more sense to have a single method that has progressively added options support so that we still only have one method moving forward. You know, I think obviously I think Ruben and I have the preference of the original design and one method with the options bag. We find that more discoverable and easier to use and document and so on and cleaner. But that’s a subjective opinion. You all can have different ones. But since whether it’s separate methods or single method is a major semantic that is something that has to be decided before Stage 2. Just wanted to make it clear to everyone that, like, we fully intend to eventually convince you all that all four of these problems need solving. Assuming that happens, we will have four methods with the current proposal. So if you don’t like that, please offer your thoughts on a single one.

KM: I think in general, this proposal kind of the intention of many respects of this proposal is to avoid allocating an object to then say the API requires allocating an object to call it kind of defeats the purpose in many respects. Certainly when your engine is optimized enough, you can eliminate the object allocation but most code on the web does not run in any tier that does any optimization. And when people come to the committee and say I have a proposal to improve performance and to avoid an object allocation and then obviously the array allocation will be a lot bigger.

JHD: And the other note here is that your options bag you only need to define once. You have one object whereas you call the function end times.

KM: Nobody hoists the option bag and write the literal—

JHD: I understand that’s the pattern. What I’m saying if the goal is to avoid allocations you would do that. Totally fair to then say we shouldn’t design something that has a pit of success or something. Yeah, like a foot gun like that and you have to be something extra to have it be performative that’s fair feedback and to have a single method without the option is great, I don’t know of one off the top of my head. It’s not entirely true given the usage patterns that having the options bag cancels out the performance, it requires the hoisting.

KM: I think people just don’t do that. I have never seen that in any code that I optimized in the web. I haven’t seen the source thing. It’s just there. And this can’t be done by the transpiler because it’s actually semantically wrong because the identity of the object changes from being one to many and so they don’t know if the thing you’re calling is actually the real web API that will care about the identity or not. They can’t do that removal. So they just don’t. And maybe there should be some flag or something where you say I promise I really don’t care about options bags. Web API says it’s an option bag, please just hoist it for me. Then people run into weird bugs and turn it off. And so, like, I do worry that, yeah, the options—I guess my point, you know…

NRO: Yeah, question. So you said that engines will be able to optimize this but only in the most advanced tiers and not in general?

KM: I mean, maybe there’s some hypothetical world where you could do this. Again, you don’t know what you’re calling, right? You need to do something where you have some sort of SSA form of your program and that is at least for us on most code is like code ever CC1 runs on that state at all. Everything else runs in a completely and execute the byte codes in the interpreter or in the JIT code and no nonbyte code optimization and object allocation is not in the same thing as the function call that would be—

NRO: I would expect it in this case the case where cost of the object matters when you’re running it as many times. Probably go through the most advanced tiers any way. But here my personal position is the proposal I would like to follow what engine developers think it’s best.

KM: People say that but most code doesn’t run on that. And there’s, you know, you can call this thing in many different places all over the code base and it could be smeared all over the code base and isn’t going to get optimized.

NRO: Okay, thank you.

MAH: We like the multi-method approach. I think it’s more easy for users to understand what it does.

LVU: I think at this point a lot of the things I was going to say have been already mentioned. But overall, I think there is a need for something like this. So +1 to the general need. I’ve also come across use cases where I wanted to see the length of own properties, not just keys. I’ve seen use cases for both. I don’t think I have ever seen use cases for counting the length of Symbols without actually accessing the Symbols. So I don’t know if there are use cases or if this is just for completeness. I agree with JHD that the options bag would be a lot more elegant. The way I see it which may not be the motivation for everyone, but the way I see it, this is the method that primarily exists for performance or otherwise you can get object case length or object get own properties length. It seems to me that the primary reason to use this one instead is to avoid the whole on the allocation. If we require the options bag and we have that performance over here, it kind of seems like it defeats the purpose. So I would also even though I generally do like options bags, I think in this case it’s not a good fit. I would also vote for multiple methods although some of the method names proposed seem a little comically long. I wonder if something key count or own property count, I don’t know.

LVU: And I kind of want to +1 in advance what EAO is going to say. The object is empty. That seems like a really nice thing where a lot of use cases around this is basically figuring out if it’s zero. And that covers that while avoiding all the more elaborate design decisions around the individual methods.

RBR: I agree that it is indeed like about the empty case, it’s probably the most common case. But it’s definitely not the only case. Actually when we were looking into this, we had, for example, a couple of situations where it was checking for a single or maybe two known properties to be the only own properties on an object. For that completely not work anymore. You still have to use the other method.

JHD: The other thing is there is not a single concept of empty. Does that mean zero own enumerable Symbols and some care about Symbols and not strings and some care about strings and not Symbols. Some of them, I don’t know, is it an object with under protonull empty, I don’t know. For each given application it’s easy to say this is what empty means here. In the broad general sense for the language, I don’t think that’s an easy answerable question. We can decide something. As Ruben mentioned we spent hours looking at scraped results of code searching and very few of the cases were as simple as just `Object.keys` length equals zero or not equals zero. Most of them were doing more complex things that would motivate the additional methods or having the ability to count and not just check for zero.

RBR: Also for a fast test for comparison. Like, that’s very important actually. You want to know if something is identical or not. And to just decline without having to spend any additional CPU resources and just check for equality of the lengths. That’s a very common CC1 use case.

MAG: Basically I want to echo what KM said from the perspective of performance. The object bag undoes most of the value of having a new method. If the goal of this is performance, and I think it is, let’s not do the options bag.

KM: I also one of the thing for us at least on JavaScriptCore, the returned backing of the Array is copy on write and shared with every single one that you return. Actually allocating the options bag will allocate more memory than the wrapper around the array and would eventually worsen the situation. Once we’re talking about the higher optimization tiers we could in theory know the array length and not allocate anything any way in either case, all you’ve done is made performance worse in the lower tiers than the higher tiers.

RBR: To cut that short because I believe a lot of people were speaking up for no options bag is someone in favor of an options bag?

RBR: I don’t see anyone. That means that’s ruled out.

JHD: That’s fine. The reason I brought this up is also because during the Temporal discussion there was some push back from implementers about the number of methods that exist and the desire was to have fewer. And this is the opposite of that. So if that’s fine, because this isn’t 50 methods, possibly 4 or 5 that like cool. We can go ahead with single methods. More important to solve the problem.

EAO: Feels weird to be replying with my own topic after it’s been considered already. Fundamentally it sounds like we are being asked to make a decision based on improving performance for certain cases. Improving ergonomics for something that is related to performance and we are told about looking at many sides, all these examples but then do you have further data of what you gathered? The question I specifically would have is, yes, I entirely believe there are many cases where you care about a length other than zero about what that might be and so on. I have no clue what fraction of the whole of the times when there is interest in the length is about interest in anything other than zero. Is it like 90% is about asking for zero or not or is it like 50% is about asking for that? And it feels to me like a sense of this would be important in order to figure out the semantics of what is the appropriate thing to promote to Stage 2?

RBR: If I may answer about that, so the numbers actually even if we would have a full data on that which I cannot deliver as such with a percentage, but I don’t believe it’s the right angle to tackle it, because actually the empty cases often for options, which are not as many, and when you are having more properties, it’s often the comparison. And now how many times is the single module used or this method used in what circumstance? This matters a lot actually for validation. I also care about the length and because I have an expectation that an object has a specific shape. I can immediately decline anything in validation if I know it doesn’t match my expectation. That is definitely a performance sensitive thing on the server side and I want to know is it right or wrong? And in this case, like, the server will probably have a huge use case, about like how many instances are there. So I’m struggling with what numbers are we actually looking at? Even if we would have the number that you were requesting.

JHD: The other thing to add is that if you’re looking at how many humans have written the code that cares about, you know, non-zero numbers or like specific non-zero numbers, we haven’t done that research yet, but if you’re looking at how many humans run the code that does that, because it appears in Babel helpers that NROs queue item I’m sure will talk about later, it’s such an unimaginably large number of websites and unimaginably large number of humans are impacted, it doesn’t matter if one person wrote the code one time because it’s so prolific.

CDA: Couple things. We have quite a large queue still. We have less than 15 minutes to get through it.

KG: Just to reply to the question about how often you want this just to be zero versus actually caring about the count, I think you actually care about the count pretty frequently. The case this comes up for me is that I’m using object as a string keyed map which is like a pretty normal thing to do. I mean, we do it in our own standard library functions. And I mean, how often do you care about `.size` on maps for the count just being zero versus actually caring about the count. I mean, pretty frequently you care about the actual count. Literally every time you do that, you would also do it here because, again, it’s often when you want this, it’s just because you’re using an object as a map.

MAH: So there’s been a lot of talking about performance optimization here. The thing I think to realize there are a case that impacts us quite a bit where performance is not the only problem. It’s like the memory cost of doing a call and basically doing the length on it especially in the case of TypedArrays. We basically want to know if there’s extra properties non-indexed properties in TypedArrays. TypedArrays can be pretty large. If we need to get the full list of all the index properties just to realize there is no index properties on it, it’s just a massive allocation for no reason. And you may run out of memory just for that. And then you have a correctness problem, not just a performance problem. So in our case, we’re interested in getting the counts of own properties name properties sufficient on the TypedArray so that we can detect if there’s no extra properties on it. And there’s no other good ways than if you want to be careful about memory allocation.

KG: I’m very happy to see `keysLength` or `keyCount` whatever we’re calling it to go forward to Stage 2. I’m not totally convinced by any of the other things. JHD mentioned we’re splitting this up and bringing the parts individually as four or five proposals. You’re welcome to do that but do not expect it to sail through committee. I haven’t seen a case convincing to me other than the basic one. Basic one, one hundred percent.

JHD: That is totally fair we need to make the case for them better regardless of API structure. But with the stuff RRB and I looked through all last night, all four have enough use cases we have to take enough time to prepare the case and deliver it. In a future case I’m sure we can do that.

CDA: +1 from DRO and RKG. Matthew is next on the queue.

MAH: As I just mentioned we need to know about non-enumerable properties. Care about the keys. Having non-enumerable ones.

CDA: +1 from CHU.

CM: Just asking from a position of genuine ignorance: in surveying of all the code that’s out there, I don’t have any doubt that you seen occurrences of these patterns a lot, but can you tell if they’re in performance sensitive contexts? Just because people write the code a lot doesn’t necessarily mean that code gets executed a lot, in the sense of being in a loop or in some operation you’re performing frequently. Do you know anything about that?

RBR: Well, on the server side, as said, is validation. Depends on what object you’re validating especially when there’s any TypedArrays involved. Definitely very performance sensitive part.

NRO: The usage in Babel, I can remember where we were using it. I was checking it now. We do count Symbols, but that’s mostly for some earlier terms. There are some proposals CC1 where it’s based on whether there is properties or not on some object so we need to implement that. There are some other usages where we maybe need the number of enumerable Symbols of the object spread but that’s like for all features that other people should stop. So people use the API, they’re probably running in browsers that support object. We probably update the API but ideally wouldn’t impact very few users because users subject not to use this transformative if benefit from the API.

JHD: It’s a fine thing to say if they do in fact support only the modern engines that they should be, you know, tightening up the transpiler targets so they don’t need most of the helpers but in practice I think we know that’s just not the case.

NRO: In practice, transpile too much. Here we’re talking about transfer of the future eight years ago but in practice users tend to transpile too much.

CDA: That’s it for the queue.

RBR: May I ask for Stage 2 for object keys length.

KG: Sorry, I also didn’t get on the queue about this. I am tentatively okay with it going for Stage 2 right now, but it is very hard to prepare for presentations like this when the materials aren’t linked and the state of the readme doesn’t describe the thing that’s going to be proposed. Like, there’s a reason we have the agenda deadline. I guess I don’t insist on being a stickler about it for this particular case, because I think—I mean, MF and RBN are in the meeting and presumably also on board. So everyone who would have participated in those conversations within our company specifically has had a chance to talk about what is actually being proposed now that we have seen what has actually been proposed. But, yeah, I want to call out this as an exceptional case; that you shouldn’t expect to be able to advance proposals that you haven’t put on the agenda with all of the supporting materials ten days before the meeting.

RBR: Duly noted.

JHD: To be a little separately from what Kevin just said that he has noted, since the broader problem space is not completely solved by keys length, hopefully cool to leave it as Stage 1 and make a brand new `Object.keys` length proposal at Stage 2 and keep working on it and present it separately? Is that fine for everybody and also make sure that the part that Kevin is convinced of is Stage 2 and the parts he’s not convinced of is still Stage That also makes it clear hopefully.

?>> NRO says +1 to Kevin but already said it yesterday. Okay.

?>> Sorry. I just added something. I am not super convinced about they’re very related problems. Are we talking about like splitting this proposal into tiny bits.

JHD: Yes. But I think that it would also be reasonable to rejoin them later if enough of them advance. I agree they’re highly related. And in particular RBR is motivated to solve any portion of this problem as quickly as possible so that we can incorporate it into various code bases. But if we don’t split it up, then it gets kind of confusing about, like, because we don’t want to slow down keys length while still making the case for the others.

MAH: As a user, I would be concerned why is there keys length and not a length of the other APIs that are very similar?

JHD: Sure. But I mean, there’s a lot of confusing things about the static APIs.

KG: What other APIs that are very similar?

MAH: Get own property names, get own property Symbols.

JHD: The other ones on the screen.

KG: Those don't look anything like `Object.keys`. Those are just observably very different things.

MAH: Different name.

KG: They have extremely different names, yes. I mean, observably very different. I don’t know why you would expect—

JHD: Either way, I would say that the number of developers who use these four APIs that give you the arrays is very, very large for `Object.keys` and very small for the other three. The number of users impacted is massive for all of them. Most of them don’t even know that the rest exist. I’m not worried about user confusion in this case. I think most people won’t even notice. My hope is we can fast follow with the others any way.

CDA: We have a couple minutes left. And just gentle reminder we’re playing a little fast and loose with the queue. Please be mindful. EAO, can you be brief?

EAO: Yeah, did I miss and did we discuss in this presentation why it's "length" and not "count"? Why is it "keysLength" and not "keyCount" which seems much more natural to me at least?

RBR: Since originally it was property count and that is natural and it is generic thing. To align how users are currently using it that is pretty much like object keys target length, that’s why it’s called object keys lengths to key that aligned. I don’t have a strong opinion about that. Like, I would totally be fine with count instead.

JHD: That’s also a Stage 2 level bikeshed I think.

EAO: Sure. If the whole proposal is like this much text and the title of it is maybe the most important part, I think that is significant even at this stage especially as it seems that what is being asked for Stage 2 has evolved during this whole—now it’s just the `Object.keysLength()` or maybe `Object.keyCount` that you’re asking for?

RBR: Like, my first step was to ask for that. And then afterwards, I would have liked to continue. But I don’t believe we have enough time actually to even go for the other parts. And like to continue discussing the others.

CDA: We are just about out of time. So at this point, yeah, do you want to call for consensus or just wait and schedule a continuation to do whatever else?

JHD: Yeah, I think we should ask—I think we would like to ask for consensus for Stage 2 for `Object.keys` length as a peeled out proposal and leave it as Stage 1 and then come back at a future meeting to try advancing the rest of the parts?

RBR: While doing so, we can always align the names. I don’t worry about this. That should not be a problem.

CDA: Do we have support for advancing `Object.keys` length to Stage 2? You have a +1 from EAO. +1 from MHN but frustrated about splitting. Do we have any objections to Stage 2? Okay. Noting we have a little bit of dissent about the naming and the splitting. But it sounds like you have Stage 2 for `Object.keysSomething()`. Length or count. Should be clear for the notes. Thanks. Yes, applause. JSL noted that the note taking was rather difficult with the quick back and forth. So please go back and check your comments for accuracy if you were speaking in the last 15 to 20 minutes, I would say. RBR and/or JHD, would you like to dictate summary, key points, conclusion, et cetera? You got consensus. Stage 2 for object—

### Conclusion

Object property count remains at Stage 1. Object.key\[sLength|Count] is separated out to be a new Stage 2 proposal and we will continue to iterate on both of these—the entire problem area which spans both of these proposals. The name will need to be decided before Stage 2.7.

## WHATWG Stages

Presenter: Chengzhong Wu (CZW)

* [slides](https://docs.google.com/presentation/d/1I-3g1QFGaiazy98hf0RisfH5f0BVn6SRH5lfxxXJ2g4/edit?usp=sharing)

CZW: Good evening and afternoon on the Zoom. This time I will talk about the WHATWG stages introduced. First of all, a disclaimer. I’m not speaking for WHATWG or any organizations. The presentation is from the point of view of a TC39 proposal champion. So if you find anything wrong or not accurate, please feel free to join the queue to correct me.

CZW: So first of all, what is the WHATWG stage process? So usually when we contribute to WHATWG specs, we will submit a request to the specification, and it’s more dynamic than compared to TC39 proposals. WHATWG stage process was a new optional opt-in process and people are trying to contribute to the WHATWG specs, and the stages are asking for explicit implementer involvement at multiple check points and what we are at TC39 here and it’s useful for the broader community to see what’s the progress of a certain contribution, because it’s not easy to tell the steps of a proposal, how is it going, and if there are any concerns, and if it’s close to be accepted to the WHATWG specifications. So the stages give the community that how close a feature is going to be landed on the WHATWG specifications. So there was a blog post in April 2025 or just a few months ago that announced the introduction of the stage proposals at WHATWG. So what are the details of the stages in WHATWG? So it’s loosely modeled after the TC39 stages. So there are Stage 1, 2, 3, 4, but no Stage 2.7. It’s kind of like the previous version of the TC39 stages.

CZW: So the Stage 3 in WHATWG requires the WPT of the new feature. And similar to what we have in TC39 a contribution to the WHATWG specification will require a explainer document but it’s not as the same as the specification text that we have here that is written in the very special text formulation. It’s just a required only the explainer document is required and there’s no formal format of the document. And taking a look at the WHATWG stages of view, it’s pretty similar to what we have here in TC39. So that’s kind of like loosely modeled after TC39 stages. And, yeah, going back to the presentation.

CZW: So the issues that we are trying to address with the introduction of the stages are like we are—the TC39 and WHATWG are separate organizations and we have our own working model and there might be some discrepancies between the two organizations and there are some—sometimes for TC39 proposals, we need web API integration to be successful in the introduction of the new features and, for example, the ECMA script modules require the web integration and we have the syntax that work with the web APIs to be able to work to be useful. So this TC39 proposals we need to integrate with the web APIs but TC39 proposals also being staged. So we have to be able to inform the web editors that at what point that the TC39 proposals are being considered stable to be working because otherwise there are back and forth reviewing process that the proposals are going to change. If the proposals are going to be changed in TC39, the web part of the specification, we also need to be updated. So that’s kind of like back and forth between the two organizations. And that will cost a lot of burdens on the proposal champions to work with.

CZW: So that’s a first issue that we want to address with the potentially with the introduction of the staged process. And the second is that we need to know how this proposal, TC39 proposals work exactly with this web APIs, like, for example we have the modules and the syntax proposals and we want to know how exactly in detail this proposals are going to work with web APIs and which web APIs this proposal will need integration. This also gives the TC39 committee here an idea how these proposals are going to work with the web APIs. And the third point is that we will like to mention before the stage process in WHATWG also give the committee how this web integration work is being progressed in WHATWG and how the acceptance—how the WHATWG is willing to accept the changes in the web space. So we hope that the introduction of the stage process could also unlock the TC39 proposal from being in the deadlock state being back and forth with the web specifications. For example, which party should advance the proposal first? But of course the introduction of the stage process itself does not address this issue alone, because we also have to coordinate between the two organizations.

CZW: And we have talked about the stage process. And we can also see that what TC39 proposals or what TC39 proposals should go through the WHATWG stage process, of course, the stage process is purely an optional, opt-in process. It’s definitely going to be on the proposal champions willingness to be involved in this new staged process. But I think it’s recommended for proposal champion to go through the staged process if the integration work will involve large web integration work, for example, if it—well, it’s purely subjective to say what changes will be considered large of course. But it’s a recommendation that if the proposed champion find that the integration work is not trivial and go through the stage process might help the standardization. And so the recommendation is of course that the champions will have to obtain through the process and the question of us here is—the first question is, should TC39 explicitly document this kind of criteria for TC39 proposal to go through the WHATWG stage process? And the second question is, should we review what TC39 proposals should go through the process later? So when a proposal is going to advance in the WHATWG stages and we would like to say that how the two parties should advance, like, it is TC39 proposal should advance before a WHATWG contribution if it’s at Stage 1 and Stage 2 because at these two stages, a change in TC39 proposal is likely to be happened and we would like that. We don’t go back and forth between the two organizations.

CZW: We would like to say that the TC39 proposal should be formalized first in the TC39 committee first. So that the fundamental of the work could be formalized and for Stage 3 and Stage 4, I would say that we should recommend the two proposals, the TC39 proposal and the WHATWG contribution of the integration part should advance together that could mean that we could ask a conditional advancement first and then say if this proposal advances next at TC39, we could say that the integration at the WHATWG could also advance conditionally or can we say that the contribution at WHATWG be advanced to Stage 3 before the proposal reaches Stage 3 at TC39 first? I think that will be a question for the committee. And there’s no Stage 2.7 at WHATWG. And I think it could potentially be viewed as on par with WHATWG Stage 3 because they have similar stage advancement criteria.

CZW: So, yeah. And last what current TC39 proposals should go through the process? Once again, this is a pure voluntary process for TC39 proposals. So first we have AsyncContext at the TC39 and we have the champion support going through the process because we found that the web integration is not trivia and it could help us to express the states of the web integration work to the committee that we are not being stalled and working on the proposal and we are working on the web integration. And it’s currently at WHATWG Stage 1 now.

CZW: We presented at TPAC last week on November 11th. And, yes, it’s already in the WHATWG stage process and it’s at Stage 1 now. And there are other candidates in the TC39. We have like ShadowRealm at Stage 2.7 and there were web integration documents and there were web integration needs. And also the phase import that is also at Stage 2.7 and I would expect that the proposal of the ESM phase import would be not as satisfactory if we don’t have the web integration available and also it’s nontrivial as a phased import to be integrated into the Node.JS as it has a node VM module that has a virtualization in the module in the node VM API and the ESM phase import would require nontrivial integration in web node J S and there are other proposals for the WHATWG process? That’s all the presentation. We can go to the queue now if there are any items on the queue.

NRO: Mentioned and discussed WHATWG last week and the feedback be too formal. We should try to align document on the side and having to switch to Stage 4 together. They don’t care if the way we do things together is like unofficial like conditional consensus or something. The champion can just like see there is basic consensus on one side especially because on the website WHATWG you don’t see this every two months, there is much more active process to see if there is some consensus. The champion got to groups maybe TC39 first and then on the other side agree and ready to move and then we can formalize it on the other side also.

MF: I agree with the sentiment expressed. And I think what you’ve presented is kind of very structured and trying to say let’s align stages or let’s try to have some kind of idea of conditional approval based on advancement or trying to align within the same week or something. I think that’s just excessive. I think maybe we can get to a point where we have something like that especially if the stages evolve over time to be more closely aligned. But I really don’t think we need that. I think what you’ve been getting at here is something we have talked about a bit in the past about like something our process document lacks is any kind of acknowledgment that there is a broader web ecosystem that will need integration or experimentation work and adding additional entrance criteria to one of the stages along the lines that like we have done that work, we feel confident in the direction, we have like the signs from them, you know, that’s a much more generic thing. And more generically applicable too. As the standard ecosystem around us evolves, either the stage process or what standards are relevant, it would still be applicable and new criteria for our—entrance criteria for the stages. I think, you know, trying to go about it that way is a little bit better and more flexible and still accomplishes what you’re trying to do here.

DLM: I agree with what has been said. I think what’s important for us there’s at least some strong signal for proposals that have an effect on the broader web platform and acceptable on the HTML side and AsyncContext is a great example that the implementation and JavaScript is not concerning but has a large impact on the web platform. So I think this is a good sign that you’re going through the stage process here.

ABO: So I think, considering some of the dynamics in this committee, when we were going through this and looking at the stages process, I suggest that is probably good to advance to Stage 3 and 4 together. And in particular, like, even if it’s not together together, having input to the committee some even if it’s an informal statement by WHATWG saying “from our side, it looks ready for Stage 2.7, or 3 or 4”. And then, like, I think that is still very valuable input to this committee—like, everyone who is not being involved in the web integration can know that, yes, the web integration side of this is actually involved. Like, that they agree with moving to the next stage. And in that sense, that would also be useful for 2.7 even if WHATWG doesn’t have a 2.7.

CDA: All right. Sorry. I had to re-add some things to the queue. I don’t know. Something bugged out. JSL was up next.

JSL: Generally agree with the statements about not being too formal. But I do have some rather, you know, very deep concerns about tying ourselves too closely to with WHATWG process. The reason WinterTC was created and ultimately TC55 exists was started is because WHATWG specifically ignored the requirements coming from node and server-side run times. In fact, in the charter, you know, in many conversations, they specifically say we just don’t care about those use cases, right? And I want to be very careful about tying advancement of proposals in this committee to another body that specifically rules out use cases coming from members of this committee. So I’m all for, you know, building relationships and making sure we actually have this alignment and things are moving forward but I want to make sure we’re not tying ourselves too closely to that. It’s very important.

CZW: Yeah, I think I would definitely agree with this saying that the TC39 process are not going to be deeply coupled with WHATWG process and that also suggest I’m not suggesting that we are going to rule out any other runtimes from the integration process of TC39. So like I mentioned on this slide, that I say the integration with Node.js module is important to be as it is significant. For this particular presentation I think the point is that the two standardization parties can help—will need to work together to make a TC39 proposal successful and potentially we can also have other run times integration as well like Node.js.

CDA:: NRO, I say you had a reply.

NRO: Topic and reply are the same thing. Next on the queue.

CDA: You’re up next.

NRO: So WHATWG early stages can also be a good way to inform whether we want to continue to propose or not. I think something not proceeding WHATWG does not automatically imply that we should not do it here. which means maybe a proposal is with in this group some good feature for JavaScript but some web APIs would not get a tied integration with it while run times may get better integration for the proposal. For the reason we might think it’s good to put it in JavaScript. Even if something is blocked at WHATWG, we should decide maybe want to continue. There are some examples like ShadowRealm where in practice, even if we were going through the staging process, ShadowRealm maybe not going to Stage 1 and maybe imply we decide not to do the proposal. Too late to know what we have done. There is proposal like explicit that has no web integration at all but has quite good integration with service run times and we still thought here it was good for us to like design this proposal as a core feature of the language.

EAO: Noting that the import text earlier that a couple of months ago advanced to 2.7 import bytes proposal have a lot of overlap with the implementation work that’s going to be—the proposal work going to be needed that we do in the HTML spec. I would be interested in hearing what signals are expected or needed by TC39 to unlock the advancement of these proposals in our committee and specifically given the context is there an expectation of the proposals going through the staging process of WHATWG in order for that to provide the appropriate signals for the advancement here or would it be better for the WHATWG part to be something ad hoc that is made up just for this?

DLM: From my point of view, I would like to see merged MOS spec. I don’t think it’s necessary to go through the stages process. I think the PRs would be small and I think it would be easier to have them merged prior to them advancing.

EAO: Wait, you want to see a merged PR in the HTML spec before it lands in the JavaScript spec in Stage 3 or 4? He said yes. But that is even though the text in the HTML spec is referring specifically to things that are added abstract operations that are added in these proposals that don’t exist at the time when it would land? I would presume that the HTML spec depending on the JavaScript spec means that the JavaScript spec needs to have the feature in order for the HTML to refer to it?

DLM: I just don’t see—

NRO: My reply here, I think that depends on whether we are going on WHATWG side through the process or not. If I remember correctly, the next standard way we have been doing things when working with WHATWG there’s a request and the request gets merged to the HTML spec and links to the proposal. And the request gets merged when basically the design is agreed upon and browsers committed to implement it. That’s basically equivalent of Stage 3. I think when going through the stages process, the request gets then merged with Stage 4, so maybe the going through the stage process, the signal the browsers want the Stage 3 even if that request is not merged yet but a separate document.

CDA: We have one minute.

DLM: Okay. Try to organize my thoughts. Stage 2.7 means JS specification is stable. Hopefully that’s a strong enough signal on the HTML side to move ahead. I guess my point is import bytes is like a draft PR and I guess I would like to see an actual PR. And in this case it’s module and so much is done in the host. It’s difficult to do meaningful implementation without knowing what the HTML spec side was going to look like.

NRO: The reply was specifically for this topic about whether we should do stages for import syntax and that’s for the champion choice and for context we decide to go to stages because it’s a very large integration and many points we need feedback for import text and bytes that is probably much smaller and might be overkill to go through stages.

CZW: I think another point that it might be worth mentioning is that what the WHATWG staged process are checked through GitHub issue labels and not like what we have here at TC39 and we need a repo and we need like sort of all the materials that are available. It could be more WHATWG compared to the Node.js proposal here and maybe apply to the request saying Stage 3 would be sufficient to the question.

### Speaker's Summary of Key Points

WHATWG now has a stages process similar to TC39. We discussed how TC39 proposals that have a significant web integration should interact with it. The involvement of the WHATWG stage process is voluntary for champions.

The inclusion of the WHATWG stage process is not exclusive in the TC39. There can be other runtime integration as part of a TC39 proposal, like Node.js.

AsyncContext has reached Stage 1 in the WHATWG stage process.

### Conclusion

The WHATWG stage process will not be an official criteria for advancement in the TC39 process. Stage 2.7 in TC39 should be a strong signal on the HTML side to move ahead.

## Spec-defined or Implementation-defined limits

Presenter: Shane Carr (SFC)

* [slides](https://docs.google.com/presentation/d/1NsezmIvFSr4qH4EXnh-cqOjikiUx196feKNM797m6fw/edit?slide=id.p#slide=id.p)

SFC: All right. Hello everyone. So what is this talk about? It’s called spec defined or implementation defined limits. So many JavaScript features have limits of things, upper limits defined by memory or because of memory limitations or so forth. And sometimes these limits are defined in the spec. Sometimes defined by the implementation. I’m going to walk through a few examples and then I’m going to have some discussion questions to guide the development proposals. First of all start with array. This is an example where there’s a spec-defined limit. So the longest length allowed for the array is UInt32 and says right here in the spec. If you don’t believe me look in ECMA 262, it’s right here. I checked in browsers. All the engines that I checked comply with this. It’s an array. The limit is here. This means that when engines implement this, they don’t have to—I’ll stick to the background and save the commentary for later. I want to present evidence. Array constructor has the maximum length. Intl mathematical value we discussed and I brought back a pull request in the last meeting. This is a spec-defined limit and we introduced in Ecma 402 and currently the limit is for the size of the number is defined to be limited to the range of exponents that an IEEE float supports. However, in the last meeting, we decided—agreed to change the limit slightly to cover more use cases. But it is still a spec-defined limit.

SFC: ArrayBuffer. ArrayBuffer is interesting. This one is a little bit of a hybrid. So it has both a spec-defined and implementation-defined limit. There is a spec-defined limit says if size is 2 to the 53rd power minus 1 throw a RangeError. If it is possible to have the data block size byte throw the RangeError. It’s spec-defined and implementation-defined. The biggest that implementation can support is 2 to the 53rd power.

SFC: BigInt. That’s very much implementation-defined. And I spent some time to try to figure out what is the implementation-defined maximum BigInt. What I found here is that it seems like Firefox has a limit of 313592 digits. As soon as you try to create a BigInt with 313593 digits, you get an exception thrown uncaught range error. And Safari throws uncaught RangeError. And it is slightly different of Firefox and same order of magnitude. Chrome has a BigInt and RangeError maximum BigInt size exceeded. The only way to reach the Chrome limit is not via the string constructor and Chrome has the smaller limit than BigInt and able to reach it by using some crazy like mathematical operation here in order to get Chrome to finally throw a range error due to BigInt size.

SFC: Strings. Strings don’t have implementation-defined. There’s no limit written from the spec. This is an example, for example, when I take `String.prototype.concat` and no wiggle room and says return the string concat operation and no opportunity to return the error. This is how browsers behave. So I did this little thing where I take a one character string and I keep doubling the length until the browsers yell at me. Chrome gets to 28 iterations of the loop and throws the range error. Firefox gets to 29 iterations of the loop and prints uncaught internal error. Whatever an internal error is. And Safari gets to 30 and prints range error out of memory. I also tried getting this from an `Array.fill.join`. I could have maybe been able to use `iterator.join` but now use `Array.join` because that’s what I have. On Chrome when I run this, the tab crashes. It gives me the dead tab icon. Firefox when I run the line of code throws an exception. RangeError out of memory. Safari hangs (it’s been running on my laptop for an hour and it’s just hanging). So that’s what happens with strings.

SFC: So one question here is are exceptions when out of memory conformant? So on the previous slide with string, for example, Firefox throws a RangeError. The spec doesn’t tell—let’s say it can. Firefox does. The spec doesn’t say it can. Also same thing with BigInt. Doesn’t say that you’re allowed to throw an exception yet all the engines throw an exception for BigInt when out of range. Is it compliant for engines to throw the exception or is the only reasonable behavior to either kill the tab and give me a dead tab icon on my screen or else just run infinitely and hang forever like Safari is doing? By the way, my computer’s CPU doesn’t notice there’s an issue here. I feel like Safari is like I detected you hit infinite unsupported request so I will just stop the program running. I don’t know what it’s doing. But there’s a few linked issues if you like to follow along on the issues.

SFC: So this slide, considerations. When we’re thinking about implementation-defined versus spec-defined limit is some considerations we should take into account. One is implementations with different constraints. So, for example, we range on XS running on tiny devices and V8 running in data centres and this is implementation of spec defined limit. If you have the spec-defined limit does it work in both environments? Maybe it does or doesn’t. That’s one consideration. Another is behavior across engines. If I run code especially true for browsers, when I run code I expect the code to behave the same of course across different implementations. That’s kind of core to why we’re sitting here in this room. We care about consistency. And one is ambiguity of implementing. This hits me a lot working on some of the proposals. Like, if the spec doesn’t say what the limit is supposed to be, someone has to make the decision. Someone somewhere has to make the decision or else like, you know, whether it’s just relying on your memory allocator to make the decision or relying on the programmer to avoid the allocator making the decision and choosing something heuristic and someone needs to make the decision. As the implementer I much prefer the spec tells me what to do than me trying to be like I have a limit even though spec doesn’t tell me to have a limit because then I have to make a decision that really I shouldn’t be the one making it. It should be the proposal champion making the decision, not me.

SFC: Difficulty picking a limit. So as an implementer I can say I don’t want to pick the limit. But the spec author is like I don’t want to pick it either. It’s hard to pick a limit. I want the BigInts to work and multiply BigInts and work. Even though it may crash some browsers and not others, I don’t want to think about that. It’s difficult to pick the limit. How do you decide what is too big or what is too small? And future proofing.

SFC: This came up with Intl mathematical value. The limit we picked with Intl mathematical value is implementing all currently available data types and we had feedback that it is not scalable for future BigDecimal and Decimal128 types, and please fix. If you do choose the limit and too low does it break things when you increase it later? That’s another question. So I have some questions for today. And again, this is motivated because I’m working on proposals that involve like setting these constraints and I want to sort of discuss some of these questions. Under what circumstances should the implementation defined limit be preferred over the spec-defined limit and some cases where the implementation-defined limit is the right thing to do? Maybe there’s cases that spec-defined limit is the right thing to do. How do you make the call? One thing I want to state here is about the use cases. I guess that’s actually the second one.

SFC: What guidelines should be used when determining the spec-defined limit? If you’re implementing a feature like Decimal, are you in the position to say, well, I think that all known use cases from the Decimal type are going to need no more than 10 to the 1000 power or something like this? And decimal gets this by using the decimal 128 type. Actually this comes up in Amount rather than decimal. Amounts where do we set the limit there? Set it to the decimal 128 limit or more than that? I don’t know what the answer is there. So what guidelines should we use? And then the third question is, should we sort of use this hybrid approach more? We saw this hybrid approach also in ArrayBuffer? I don’t know if it was intentional or not and hybrid limit. Should we favor more hybrids and favor conformant implementation need to support at least this big of whatever the thing is and maybe at most the other limit thing is and could pick between the minimum and maximum and that’s hybrid. And code written against the specification and conformant supports something in some range and doesn’t support something outside of another range. In-between the two is implementation-defined and complying code won’t write things that sort of hit the medium range.

SFC: So those are my slides. This is the last slide. I was looking for some discussion on guidance here. Looks like we have a little bit of a queue growing, which is good. Why don’t we start going through the queue.

WH: Let me try to organize the discussion a little bit. There are a few questions here. One is should there be limits? What should the limits be? And what happens when the limits get exceeded? We’re not running Turing machines with infinite tapes. There will be limits.

WH: Let’s start from the last one: what happens when the limits get exceeded? The spec doesn’t seem to say and that is actually an area of concern because when you exceed things like memory limits or possibly fall into the infinite loop that somehow gets broken out of, you have a possibility that you might break some spec invariants. We have a lot of parts on the spec which maintain some invariants. Those often temporarily break invariants inside spec code but fix them up before the spec code finishes. If those get broken, you could have security issues, you could have all kinds of trouble. And implementations are cognizant of that. One thing that we might want to look at is specifying how implementations should respond to things like running out of memory.

WH: The next question is what should the limits be. Should they be spec-defined or implementation-defined? This came up recently in a recent meeting when we were discussing the spread operator to build arrays. It turns out that implementations have fairly different ideas about how many arguments to a function are too many. I personally do not think that it’s possible to specify all of those limits within the spec. Like, I can’t think of how I could define the maximum limit on the number of stack frames you can have before things blow up. Implementations will differ as to what is considered a stack frame. You can’t specify limits in the spec on memory. implementations differ quite a bit in their memory allocation strategy—some may aggressively intern strings, while others may be content with the existence of lots of independently generated equal strings, each allocated separately. These things are impossible for us to specify. There are a few things which can be specified but for the most part, I consider this to be an unsolvable problem with the advice to implementations being just to be reasonable. Like, what is the maximum length of a string you can have?

MAH: So if MM is around, he can probably take my topic better than I can. The issue is not just for—so WH just mentioned what is the spec going to do if one of these limits is broken? Might break invariants. If you fail in the location and basically end up having an operation failing when the program doesn’t expect it, if the program cannot observe it by having the exception thrown, then the program might get into an inconsistent situation itself. And this is why there is a Stage 1 proposal about “out of memory situations must fail fast”. So that really the program should not observe those situations when there is an unexpected condition encountered like this. Unfortunately there are diverging opinions on, I believe, which is probably why it has not made much progress. But we still strongly believe that programs should not get to observe the situations and the agent should be killed or actually the agent cluster. At least for operations where there is no reasonable ground that the program might expect an error. Like, this is where, for example, you had the example about creating the new ArrayBuffer. There are potentially expectations there that creating a new ArrayBuffer might actually fail. It is actually spec-defined that it is acceptable to fail there. But if it’s not specified if the caller has no expectation, it should not become observable.

MM: I can clarify. MAH is right about our starting position. To explain the controversy and what the path forward is, is that the browsers currently do throw an observable out of memory or out of stack or probably both and they’re not willing to change the default behavior to fail the agent rather than throw the error. And I understand that certainly the status quo counts on that. However, none of these out of resource conditions are currently in the spec. So it’s our choice how to go forward in the spec in a way that both meets the needs of programmers and recognizes implementable reality. So the proposal “OOM must fail fast” basically turned into one of host fault handlers when one of these exceptions that programmers cannot reasonably recover from like out of memory even though right now in browsers, it’s presented to the program, it’s not practical to write programs that are fully defense against errors that might happen at every little micro condition. So the idea is for all of these, to instead delegate to a host fault handler and then as a wrinkle on top that could be part of the same proposal or could be part of a later proposal is to have the host fault handler then be able to delegate back to a user fault handler which might be data describing choices, might be something in another agent so you’re not depending on the own agent to—or might be just a callback and you hope things are safe enough. So the bottom line is that going forward to admit resource exhaustion into the spec to recognize reality, which we favor must allow an implementation to react to these resource exhaustion issues with a fail fast, with a sudden stop of the agent. It must enable that and if going forward with the proposal that recognizes finite resource reality and does not enable a conformant implementation to fail fast in reaction is not something that we would approve.

MAG: So I just wanted to say kind of tying on to this, the spec doesn’t expect these sorts of like exceptions and it does get SpiderMonkey just specific trouble because we try, we are one of the engines that actually tries to throw out of memory and try to recover from out of memory conditions, and this actually gets us in trouble because we end up having to try to handle states that don’t exist in the spec, but only exist as a result of out of memory conditions in our engine. So one of my current background tasks to see whether or not we could flip it so that it worked more like Chrome and just crashed on memory.

MM: Sorry. Chrome crashes on out of memory?

MAG: That’s the tab crash.

MM: I’m left with the mystery that questions raised by SYG representing Chrome or representing Google that caused us to give us on having a fail fast be the default behavior.

MAG: Yeah, I very vaguely remember those conversations but I can’t provide any colours of them.

MM: If we can get an agreement in the committee to have the default be to immediately fail the agent and then as needs arise provide opt-ins for something else, but start with the default being resource exhaustions that might happen in places reasonable programmers cannot prepare for should immediately crash the agent. That would be wonderful.

MAG: Yeah. But just the actual point I wanted to make here is that pursuing this how far we pursue this, you get into the situation where a lot of the spec invariants suddenly stop being invariants because if you set new limits, they can be violated and then those—now you can’t write the nice exclamation points of syntax around the thing and never be an abrupt completion here. A lot of the spec will get kind of grosser is my suspicion. I’m not saying it’s wrong, but just a heads up that trying to handle all these errors is a pain. There’s a gradient between versus mill Tuesday to the implementation and the valueOf the spec that I can read this and reason about this in the 99.9% case.

MM: Let me just double check with you in the default that I would prefer, the fail fast, the thing we originally proposed, there would be no such—it would recognize reality of finite resources and provide a spec recognized way to react and it would create none of the complexity that you just stated. Is that all correct?

MAG: Yes. I’m just talking because the proposal or the discussion here is from Shane where he’s like, you know, where should we add new limits? Should we add new limits? How should we define them versus implementation-defined? I would caution that bringing all implementation-defined limits into the spec—and you could argue we should go further down the road—will make the spec actually worse. I’m not sure that’s worth paying the price.

MM: Where the spec has spec-defined limits or not is—you agree it’s orthogonal to the issue of whether the default should be that the agent fails fast?

MAG: Probably. Mostly using OOM fails fast is make mention of the spec change problems, but yes.

YSZ: I’d like to just mention if we install user crafted handler as a full handler, there’s a high chance that it ends up doing out of memory due to the handler of this. So a lot of engines is having, for example, some fixed size of heap as a batch of memory agent so then OOM can be rather, it is extreme condition which is actually exhausting all the memory anymore and any kind of execution of user code would be allocating before something than embody the function and in this case it is doing fading due to the OOM, just a chance.

OFR: Since this was asked to Chrome out of memory is not recoverable generally, so it will crash and yes similar to what you just mentioned, typically when you’re out of memory, you’re out of memory. It’s hard to do anything at this point. However, probably what MM was referring to there are some limits that we introduce, for example, we have the maximum string length and maximum array length and things like that and sometimes get a RangeError in these cases even though spec doesn’t mention them. As far as I understand, this is the current case. Also typically when we tinker with the limits, people tend to be really unhappy if they go up or down or whatnot. It’s actually something that people rely on and I don’t think we could just crash in all of these. We definitely could not crash in all of these cases.

MM: Can I ask you a question? When you say you can’t crash in these cases, is that just because of legacy? Do you agree that practical programs, it’s beyond what practical programs can do to be defensive against thrown errors for some of the other limits you just mentioned?

OFR: I don’t think I agree with that. I mean, I find it totally practical to try to allocate an array and have like maybe the input of the array is user controlled and then have the backup strategy if that is not possible right now. I don’t think it’s per se something that we should ban.

RPR: KM is next.

KM: On that point, definitely being compatible, plenty of websites where they handle OOM for like allocating some enormous array in the spot where they know they’re allocating something enormous. And they intentionally want to handle it. I also think that crashing is more likely to cause web compatibility issues in general because then all of a sudden it’s like your browser is slightly less efficient than the other browser in the context and instead of being the OOM that the website can recover from and it’s a full blown tab crash and no way for the tab to recover if you wanted to, and if they have a video game and trying to allocate stuff until they run out of memory. Browser A, you like—it works fine because they can just happens to sit under the limits and browser B, you know, they go over the limit and then there’s some way they can handle it even if they wanted to.

JHD: The rationale that MM has talked about seems good in general. But to what OFR was saying, I think there absolutely are places on the web where people are feature detecting a known limit—not in a wild “double the string until it blows up” way, but in a “I know this precise number makes these browsers, that I have to worry about, fail, so I will do one thing and in those cases I will do something different”. I can’t remember off the top of my head if any of my older shims have that stuff. If they do, I didn’t put them there, someone else did, but I wouldn’t be shocked if they did. And so I definitely think just banning it outright is not fully web compatible.

OFR: Now the slide changed. So there was this number to the 53 minus 1 on the slide. I just wanted to mention this it because it looks kind of strange but this slide makes sense. Step 1 is making sure that your number will be representable as a double position float without using precision. If you go above that, then you don’t get—you cannot represent the integer in a float anymore. And then the second thing just acknowledges that probably on TypedArray, often people allocate big arrays and maybe we need to fail earlier than that even. So I think this is actually—to me, this looks like a very sane choice.

SFC: That’s very much the case here. Like, the spec once return the length of an ArrayBuffer as a float presumably, so it implemented that as a limit. It also is still the case that this is a limit. I agree with you that it seems like this is unlikely—like, this limit was chosen not because of the ones to have to avoid out of memory situations. It is still a limit. And this slide is also interesting because it is one of the only cases in the spec that explicitly allows a range error to be thrown. So there’s sort of a few interesting things here.

OFR: Just wanted to add it’s not that we want to return it as a float, but it’s the only number that we have accept BigInt and returning the BigInt, well, maybe nowadays we could talk about it, but probably not a good idea in this case. So we have to.

NRO: Very similar to what was just said. We don’t have just limits ready to out of memory situations, like, for example, the Intl NumberFormat limit that we had. I believe it was introduced for the memory problem, but it’s just because we felt it was good to have the limit there, which is now that we can increase the limit to something, something larger. Maybe we could at some point have the surety of when we need to introduce limits that are stricter than just oh, well, maybe you can do a thousand billion because that might fit in memory, but it will be good to limit users to just doing a thousand and things like that.

SFC: I will reply to that that is also the topic of my topic below. But the limit that we have in Intl mathematical value is because of implementation limits. That’s why we added it. We added it because it’s more expensive as an implementer to handle the case of this has infinite precision. Then you have to write your code to be robust and have robust out of memory handling. Many of the libraries that the browsers depend on like ICU and others have questionable behavior when it comes to out of memory errors. It’s actually quite challenging to write in the browser engine that handles out of memory and in a proper way. So we added limits because of that issue. And the limits we chose, it was fairly arbitrary how we chose them. I don’t want to say there is any really, really good principled way that we chose them, which is one of the questions on this slide. We chose them because, well, if we’re going to be picking a limit, we may as well pick something that is small enough that is easy and cheap to implement and optimize it but using text storage when we can and things like this. If we are going to choose a limit, maybe we choose a really low one that is super cheap to implement but also handles all the use cases. And that’s what we ended up doing with Intl mathematical value.

WH: Go back to the ArrayBuffer slide. So I’d like to point out that the spec does have a limit on string length. According to the spec the maximum length is 2<sup>53</sup>-1 code units. On the other hand, the spec never says what happens when you exceed that limit. Of course implementations have more practical limits on the length of a string

WH: Even if the committee doesn’t want to pin down a numeric limit on the length of a string or size of a BigInt, I would support it if the champions were proposing to introduce mechanisms like the one on line 2 of this slide for other cases such as string concatenation or BigInts building. I’d like to point out that a string exceeding a maximum length error is typically not an out-of-memory error. It’s usually quite reasonable to proceed with other computation and it will work just fine. The same thing happens when you get a BigInt that’s too big. So for those cases, it’s perfectly reasonable to sprinkle optional RangeError throws in the places in the spec where that can arise. I wouldn’t want to pin down the implementations of what the exact values of the limits should be.

MAG: Basically this ends up being a +1 to WH because I like this language quite a bit because it recognizes reality and it provides a nice like exception type to throw. It means that when you’re writing algorithms against this is not shown to be infallible operation when in fact it’s fallible. So I like this idea of maybe being a little more judicious about this and, yeah, that’s about it.

SFC: I also like this type of language. I would like to see more of it. I also want to emphasize part of the point here is I don’t know why we want to use this word impossible or deferring to the memory allocator. It seems really silly to like say that—also expensive to implement. As an implementer of Intl stuff I can say that like it’s really really annoying and hard to write code that checks every time that you call the system allocator checks to make sure this is correctly handled and returns errors and make sure that all the APIs do the errors properly. Like, in a perfect ideal world, this is how code would be written. In practice, this is not how code is written. In practice, the way that code is written is like when there’s—when malloc returns null then you exit the program. It’s very hard to write robust code in this way. It’s much easier if you write your code such that you—it’s very difficult to hit an out of memory error. So I have a little bit of—I’m not super excited about using the word impossible here. I would rather it be like if—I would rather the error be like if the implementation decides for whatever reason that it doesn’t want to create such a data block, it doesn’t necessarily need to be using the word impossible here. And it could decide tomorrow that it’s OK to create a block that it wasn’t able to create today.

MAG: Basically, we already write code like that and it sucks. We have OOM simulations to do at that because you need to try, what happens if an OOM happens here. We have to build infrastructure to support this and it’s not fun. I support your notion of making this written differently than impossible. It would be the host may choose not to fulfill this request. You know, we can—for various reasons at various points. I don’t have a real real problem with impossible because I choose to interpret it loosely. I could see why you want to change it.

SFC: I am going back to this question slide because I think that we had a good discussion today but I am going to sort of state what I see is the answer to the these. And then we’re out of time. So one is under what circumstances should an implementation versus spec defined limit be specified. It doesn’t sound like we answered this except that I heard a number of people in the room expression that the spec should acknowledge that these situations happen. And in that sense, then, we end up with sort of specific—end with hybrids like ArrayBuffer. I heard that. The second was what guidelines should be used when determining the spec-defined limit? We didn’t completely answer that question. Mathieu said, make it open enough that we could—implementations could choose to do something that is not just based on what the memory allocate says we could do.

SFC: The third question is easier to discuss in the context of a specific proposal, Amount, which is “should we favor spec-defined minimums and implementation-defined maximums.”, something like this. And I think that that is—this is an interesting area to explore. And so for example, when talking about Intl mathematical value, say all engines must support at least a thousand digits of number, and may support more, but may also throw a RangeError or have other behavior for handling those cases if these chose not it. I would encourage any proposal champions who are dealing with this—with questions in this area, this is my main message here. I would encourage any proposal champions working on proposals that touch this type of thing to think about these questions. And when writing your specification text, look at what we do with ArrayBuffer, try to think about some of the questions whether you should set minimums, choose your guidelines—trying to add some flexibility and I hope that that’s what we can do moving forward.

KM: A minimum runs into problems of yeah, if you actually run out of memory. What do you do? If the minimum is large to hit that without like to recover in the general case, let’s say the limit—like, you have to support a BigInt of 10,000 digits. That’s a big allocation. If that allocation must exceed your program crashes. Spec-compliant then like that might cause compatibility issues in and of itself

SFC: Let me jump back in here. The minimum in my mind should be driven by all known use cases are like 99.999% of use cases are handled by the minimum. And ideally the minimum—the minimum should be set such that even XS running on a smart watch has no problem meeting the minimum. The minimum is not something that should be so large. It should be—it can be quite small. It’s not intended to be, like, pushing the limit of what an OS can do.

WH: With regard to numerics we have existing, very longstanding precedents in the language: The numeric literal grammar lets you write as many digits after the decimal point as you want. However, implementations are allowed to ignore them after a while.

SFC: Cool. I agree with that. I don’t see anyone else in the queue. So what I said earlier is what I will repeat or I will go put it in the notes as the summary. Thank you for taking the time to discuss this.

RPR: Thank you, SFC. That was a very good summary earlier. Thank you for offering to put that in the notes.

### Speaker's Summary of Key Points

* There is a fair bit of support for explicitly allowing engines to throw exceptions when hitting memory limits
* Consider language that allows engines to throw exceptions not only when the memory allocator fails
* Spec-defined minimums could be appropriate in specific proposals

### Conclusion

Future proposals that involve unbounded operations should refer to these principles.

## Module-declaration like proposals in other areas of the web

Presenter: Nicolò Ribaudo (NRO)

* [slides](https://docs.google.com/presentation/d/1DQkU3Bgqp0M9afRALa21GWNyAmyCy4A5lUhzdQe_WAs/edit?slide=id.p#slide=id.p)

NRO: Hi. So this is also another update from what I learned last week at TPAC. There are multiple proposals in the web platform that deal with modules and introduce module-like concepts to some of the other web languages. And so this is an overview of what is happening out there. And disclaimer none of these are close to being cross-browser standard. Some of them are closer to others to shipping one browser. But that’s how things are standardized on the web. It doesn’t mean they are stable. This was maybe three years ago. We have this proposal here in this committee. That basically, allows you to define multiple modules in a single file. The use case here is to simplify bundlers, making it possible for bundlers to represent procedure semantics to bundler existing implementation, existing browsers without having to export this somehow, Stage 2 is very tentative. Important for places to use them. So you could have a bundle with a bunch of modules. You could split, put in some file and some other modules with some other file.

NRO: There is something very similar for CSS. There is this proposal with the `@sheet` rule. That would allow you to put multiple style sheets in a file, and give them a name. In this example here we have—a single file. That by itself, defines that div has the color blue. Then defines these two nested style sheets not applied by default for just changing style. You can import this style sheet. Here is `@sheet foo`. You can then add import foo from the file. It’s different from JavaScript. Because like CSS, the outcome of a CSS file is a set of side effects, whereas for JS the outcome is exports. So the syntax looks the same as we have in JavaScript, just get foo out of a file. This is actually not giving you a reference to foo, it was giving the reference defined in there. You can also link directly to the sheet within HTML. There is some discussion on whether this would also play the stats to sheet or just what is defined in sheet foo.

NRO: You can also import from JavaScript. Wake up the web platform `type: “css”` as a module type. So you can import something from a CSS file and you get like the default import and get an instanceof CSS sheet object. This is used mostly with web components. And the proposed behavior with the add sheet, there is to be name export from CSS files for the various subsheets.

NRO: HTML is modules. Modules contain HTML code. The current proposal is that we have an HTML file. It has—some exports. So in this case, it exports the element with a blog post. Then you can import HTML modules. Like importing the exports. The proposal says that unless otherwise specified, all HTML modules have a default export which is basically like a whole document like a DOM document defined in an HTML file.

NRO: There is—there is also discussion about allowing define CSS modules directly inside HTML modules. There was actually multiple sessions at the TPAC. Seems to me this proposal is being actively worked on more than the others. This gives a specifier. This specifier is a similar concept to what we call a specifier in JavaScript, except that in JavaScript imports we have a kind of specifier, specifier by itself does not module. Refers pair that point us to a module. This will be a global like absolute specifier.

NRO: So we can define a CSS module. We can then import it in HTML templates with this shadow root mode sheets attribute that gets one or more of these global specifier names. So inside this template element we are basically importing this foo-style module. Which would apply the style to this contents of the template and this is scoped not like most CSS global for the document. You can import in JavaScript using—just put the global specifier in—in the, like, import specifier. It uses import maps under the hood. When trying to resolve the foo, it is checking the import map and somehow the previous definition installs in the import map. There were some active discussions about whether this global is a good idea or not. Whether what happens technically proposes is supported in separate files so there was discussion about what happens if you do import before \[inaudible] is loaded because this JavaScript import is just pointing to some registry in not actually loading it. But then this behaves exactly like—from the JavaScript point of view, foo behaves exactly like the existing type CSS imports.

NRO: So this is—what we learn and I wonder if anybody has comments and opinions? Opinions are not for me, but you want to share your opinions with people. Ashley?

ACE: Being lazy, do you know off the top of your head, you said the CSS specifiers are like an absolute global, if there are slashes, what’s the—is it first in, right last errors, do you know?

NRO: That was again an active topic of discussion. The two options she can have, the first one wins. Or maybe—a style sheet object is not like—not a static object. You can replace its contents. There is like a `.replaceText` or something. So maybe if the—if the DOM changes there is a new style module with a specifier, it could update the contents, but there isn’t a definite answer to that.

ACE: I don’t know if there’s overlap with the new map extension where it only grows, it can never be replaced. They should be aligned

NRO: About the conflict also, in the—the current semantics, it’s like not that difficult of a conflict because we have one file of contents HTML. You can have a global view. If you consider the proposals for HTML modules, it is more complex because maybe you have separate HTML files that define the same specifier and it might end up conflicting with that. Not the same.

JAD: I don’t know if you said this, but in terms of import maps, the current proposal that populates it. And it was discussed if you edit the source does it modify the source of the import map as well. And also, what happens if you change the specifier attribute and that was all kind of left up in the air. I don’t know. Our—you might want to talk about this because we were not keen on this at all.

LVU: Yeah. I was in that session there was pushback around this and basically, I think—at a high level HTML and CSS declarative and reactive languages and this is part of their power, you change something and everything just updates. You don’t worry about the side effects. This means every feature needs to take account for the mutability. When an author sees an specifier, at the and to change the specifier attribute and now the module specifier has changed. Which brings up a lot of questions that never had to deal with JavaScript. Because JavaScript is top to bottom, usually semantics, you never have to deal with that sort of thing. Same with the contents. There’s all ways to change the content of a style element. CSS object model. Regular DOM methods to overwrite the text content. How does that work? That is easier to model because even in JavaScript you can import an object and change values of properties in that object. So that already has precedent. But changing the specifier and having the import change has no precedent whatsoever. It’s not even something that authors want to do. But to be consistent with the language, you can’t say, there’s this HTML feature that behaves differently from the entirety of the rest of the language. And I think this is something we will hit, going to keep hitting with these features if you have—if it’s both of the language and importing local resources, importing URLs you don’t have that problem because a URL can’t change under your feet. When defining local resources, then how do you deal with that? I don’t know. There’s also the question of a lot of existing web platform features that import things that have been designed to work with just URLs. ECMAScript modules were defined between URLs and specifiers from the beginning. It’s well-defined. CSS imports on the other hand, treat everything as a URL. So now you add additional syntax to make them work with specifiers. Which is not insurmountable, but another work. Then the question of what problem were these proposals solving? The need for modules in JavaScript is very clear. The need for modules within CSS is also clear. But what we need to have specifiers that become part of the same module map, or like it seems to me if you dig deep into some of the use cases, often it’s around resource loading and working around bugs and issues with how resource loading works. So maybe the solution is not? Specifiers at all. I am not sure.

ACE: For some of these things, maybe it’s like developer experience, where we expect the developer might want to author some of these things. It seems it’s also motivated by—like optimization to get more things into, like, one HTTP request. I guess I have two questions. One, is there—what is the primary and the secondary? Is it primarily about getting more into a single HTTP request and also maybe this could be useful for some DX things or one? Another question after, but…

NRO: So a lot of at least motivation for some of these proposals maybe Jake, you probably know better than me. If you want to reply to that

JAD: Most is driven by declarative shadow DOM. Right now the shadow DOM for each incomplete instance of the web component is different depending on the—yeah, the attributes or whatever. But your styles tend to be the same because you have one block of style prepared for whatever content. Right now, the best you can do really is have a line style block for each instance of your web components and they will be exactly the same for each one. You can’t have a link URL style sheet pointing to a URL. The link in the body will load asynchronously. It would be a flash of unstyled content. So yeah. What we need is a way of being able to sort of reference styles from somewhere else, and then have those render block in the head. So it’s like saying, it’s a bundling thing. Those styles might be bundled for efficiency. But yes, a part of which they haven’t done is referencing that in the head to say block rendering until these are ready.

ACE: And my second question was, I know there’s a few other things in this space around like optimization. So there’s—there was something around web bundles. I don’t know where that got it. I saw recently, one of the browsers I am not going to guess which one it was, shipped—shared compression dictionaries as a way to share resources across multiple things. I am wondering, if HTML wants HTML and CC to be embedded JavaScript, maybe—is that the right thing, or should be looking at a higher level of merging arbitrary things as opposed to each domain doing independently? I don’t know. That’s a question.

NRO: There is some value in having this as part of the language because we have way more tools that specialize in a single language which makes it easier to adopt these things. But I don’t know if it would be the best one.

GB: This is a really interesting discussion. And I am really glad we have folks bringing a TC39 perspective to them. And sort of a module perspective. For addressing questions, I think there is a lot of design in the addressing of modules that would be great—sorry for module declarations that would be great to have in these discussions, has—you touched on some of the topics, but there’s a lot more here. Were you able to have those kinds of discussions at TPAC? Or do you think that there are ways that we should continue to have those discussions?

NRO: I think we should continue to have the discussions. We should figure out who to invite to the—our meetings much it’s great it figure out if the infrastructure we are building for modules is something better used by other things like ideally the way this modules are exposed to JavaScript, the same as nested to JavaScript exposed to not like a whole new thing. So we need to work more with them, to figure out how much we can align.

GB: Yeah. I just want to reiterate there’s huge value in building some alignment where we think about the cross-use cases and thanks for bridging those discussions

NRO: And I don’t know who “them” is. That’s also still to be figured out on my side.

JAD: Yeah. I think “them” is a combination of what—they have the module integration and the CSS working group. Yeah. I am worried about this whole—like, the problem with CSS is that it has an object model you can change what it does and I think that seems inherently incompatible with specifying modules. Yeah. I don’t know if there’s going fob a way out of that

NRO: Like, for example, there’s—the other proposal, feels very similar to the JavaScript one. Maybe just very much on the surface, maybe it is something more deep. I just don’t know yet.

JAD: The difficulty with the sheet thing, in the object model you will be able to go in and change the specifier name dynamically and I don’t know how that would work.

NRO: Yeah. I don’t know either.

### Speaker's Summary of Key Points

We went through an overview of different proposals developed in other web standard bodies that introduce new types of modules, or "nested files":

* HTML imports
* inline CSS modules
* css `@sheet` rules

We discussed the similarities and differences that they have with TC39's module declarations proposal, and how well they do or do not integrate with JS's module system.

## Comparisons

Presenter: Jacob Smith (JSH)

* [proposal](https://github.com/JakobJingleheimer/proposal-comparisons)
* [slides](https://docs.google.com/presentation/d/1tu8yK57yMDdBsD4FgDX7GuRndLZfqvrukEG_AukYeJU/view)

JSH: So I have returned from A Coruña with up dates to a set of proposals that were made there. And this was the first of what became three. This one was sort of the core one and the other two were ancillary and we decided in A Coruña that they had merit on their own so they were spun off immediately. So this is the core of the first one. So the gist of what this proposal is, is A different from B. If so, how?

JSH: Changes from things that were presented in Spain, there’s a new co-champion, RGN. And we’ve settled on just one comparison function. Name to be bikeshed later. Instead of trying to figure out the—like a search and expect type stuff, that’s sort of a different thing. The comparison can have two kinds of outputs: either `true` or “deviations”, depending on the mode that you are working in. Or just `undefined` on success there are no differences.

JSH: Deviations would be an iterator, keyed by the path to the deviating leaf, and its value is kind of the "expected" / "actual" and then, what we are calling "reason". More on that in a second. Leafs are compared with `SameValuesZero`. And each branch segment is checked for exact sameness, to avoid unnecessary drilling. It’s not—compare is not (yet) a replacement for `assert` or `expect`. They could use it under the hood and surface that information in whichever way they want. We’ve spoken to authors of userland libraries and they have voiced eagerness to use this, it does a lot of the work they don’t care to do. We have broken out `pretty` as a problem for later, potentially, reduced after some of ancillary proposals land, and the reason for that is because this is useful without it and unblocks this proposal from a daisy-chain of those other two proposals.

JSH: So what this would look like in some quick samples here, is sort of what you see before you. We have added `mode` here in case what our real hope is, is not feasible. So if it is sufficiently performant, then we would probably collapse the number of modes. So mode `first` is—it gives you the first deviation. And then mode `all` would give you all of the deviations. And then, under `reasons`, it would provide a dictionary detailing the problems or like the difference—the causes of the differences. The—yeah the main ones are listed here. And—so we do—as I mentioned, have some open questions about mode, if that’s even necessary at all. If it’s optimizable enough, maybe we drop `all`. Custom handling for leaf comparisons, "I do care about enumerability". "I care about things that were not discovered in the base dictionary". "How do I handle that?" And is further—further customized, would it be needed now? Or if that is a "tomorrow problem"?

JSH: So some other things that came up in those discussions are things like matchers. Commonly, in—in writing something, you might say, like this thing is going to be some kind of number. I don’t care what it is. Just as long it is a number. That’s a related problem that we’re aware of, but we think is out of scope for this. And what it calls this, comparisons versus differences, something like that. That is the TLDR for the update to the proposal and asking for Stage 1.

RGN: All right. First thing, just to set the tone for the following discussion: I would encourage everyone to not get too hung up on specific example APIs shown in the slides. It’s okay to discuss them, but remember and do keep in mind that we are seeking Stage 1, not Stage 2 or higher.

JHD: Yeah. I don’t understand why you need the first mode at all, when you can just `.take(1)` on the iterator?

JSH: Sorry. Can you repeat it?

JHD: Yeah. If you just delete the middle snippet and you use the all mode only, you only want one, do not take one and close the iterator, take the first item and presumably, I am assuming obviously this could be checked, that is sufficiently optimizable to make that fast. That’s—to me, that’s the reason to make it an iterator, to choose to only take one. If you want all of them, it would just be a big array.

JSH: I think in previous discussions, we had talked about some under the hood cost that you might pay or something. I don’t remember what that was. If just—grabbing the first one does address those—those performance issues, then yeah.

JHD: Yeah. If to to N items is prohibited for some reason, then you just wait until the second item is requested before you start computing the rest of them. And that works fine. I have no idea what the performance profile is. Stuff would be, but, you know, if there is a fast threshold—the threshold where fast turns to slow, you just do the slow work at that point when they have taken that item. That’s my intuition anyway.

OFR: I haven’t fully thought about it, but I was wondering what is the intended usage? Is it—expect most of them will come through anyway, and the second thing, because that might depend a bit. So dropping `first`, might have a bit—could have an effect on the implementation, it could be more complicated because you potentially have to keep around a bit of state to figure out where you left the last time. I guess, it also depends if we expect this to happen often or the `fast` case, we get back `true`.

JHD: My personal use cases of this are three fold. One would use the one on the left, for a predicate. One of those would actually use the one in the middle, so I can give some sort of explanation for why they're not equal/similar/whatever. And anything that is doing inspection or logging use the one on the right. I would like them as fast as possible, of course, and if we need first to exist, so be it. Unless there’s evidence we need it, it seems like we don’t.

CDA: All right. I just want to note that we have quite a long queue and possibly we're dipping into later stage concerns quite a bit. This is just a proposal going for Stage 1 at this time. So just please be mindful of that and try to be somewhat brief in your comments. RBR?

RBR: When it comes to the all case iterator in general, I share the concerns from OFR that keeping around the state is actually something that might be difficult, also the object might be mutated in between. I believe if we return all, then it should be kind of like—I don’t know. Like a set or array. I don’t care.

LVU: I would not debate use cases for this. My worry is, is this the right level of specificity? It seems to me this might be a special case of a broader problem around recursive traversal of deep structures. I mean if we think about the flat case, compared to arrays, doing diffing of two arrays, we iterate over one and look up values on the other array. So how does that translate to deeper recursive structures? Most people have written helpers for deep equals many times or just walking structures. Or merging structure. Or effectively, mapping. Like all of the concepts we already have for regular iterators, it kind of translates to deeper traversal. And I wonder if something like that could solve this plus a lot more problems rather than something specific to comparisons and diffing. Comparison and diffing, this is more like diffing rather than comparison. Like, in terms of naming. Yeah. That’s it.

MAH: So I mean, just a general concern. Like, worry about—it really depends on the shape of the API, but I want to find some shape of API that doesn’t encourage users to build equality predicates. An equality can only be reliable if data is immutable. So yeah. I just general worry about people abusing any comparison mechanism

JHD: I don’t think anyone holds an expectation that content-based equality persists when things are mutable. But in practice, many objects that are being compared aren’t mutated, so it’s fine.

MAH: Yes. I understand. I—I just want to find an API shape that steers towards users not doing that. I know I can’t prevent it.

CDA: Please use the queue. CHU?

CHU: So my question would be, what are deviations useful for? I get it, they could be used for nice error messages like for an `expect()` style testing. But the way, I remember when you presented this in Spain, the proposal was about equality. And not about deviations—so the major use case was whether something is deeply equal or not. Not about—if objects are not equal, how they are not equal. Because I think that—with paying respect to currently asked stage advancement, the API is not clear and this opens up a lot of other problems and questions. Like, for example, with nested objects, having the same key names, deeply nested within, if I would have deviated structure, I would—I don’t know, reconstruct it. So I am asking what kind of problem do you want to solve? My impression was that it was strictly about equality and now they are also deviations, so what is the focus now?

JSH: Kind of still yes. It does tell you whether something is the same thing. And as you said, if it’s not the same, then how. That’s what the reasons are. It tells you the bits that are not the same

CHU: We talked about the assertion use case. For assertions, it's sufficient, when objects are deeply equal or not. So why now the how part, the deviations?

RBR: Before assertions, clarifying, part to that, is actually that normally want to print something to the user in one way or the other and the information about the traversal—

CHU: That’s not the initial problem space in Spain, at least not, how I remember it. Back then we were talking about how to implement equality, I see what you have changed, using a function now. I can relate to that. But I—I would rather have a proper description of what the deviations are and the larger things that they are used for. I know what you can use them for, but there are already various implementations out there. And I don’t know so that’s—what would that be used for, besides that?

CDA: Again, please be mindful and use the queue. We have a reply from JHD.

JHD: Assertions—meaning a condition that throws if it’s not met—is not by any means the only way that people check things or test things, et cetera. There are many test frameworks that continue running the rest of the tests even when a test fails and you need to print something there. And many of those tests outputs have a headline with some extra detail and the first failure is a great thing to put as the headline and the extra detail would contain them all, for example

MF: This is not a comment on, you know, whether I feel this proposal is valuable or not, but I don’t agree with CHU’s assertions. As far as I remember, the major motivating factor was its use in presenting human-readable descriptions of a failure when an assertion failed.

JSH: That is correct.

CDA: All right. JHD is on the queue with this clearly an important problem area to explore + 1 for Stage

WH: I still don’t understand the goal of including this in the language. This seems like it would be perfect for a userland framework. There are so many different ways you can compare things. What do you do when you have recursive structures and infinitely recursive things? Getters and setters? Run the getter or see if it’s the same getter function? So I just don’t see why this should be considered for the language, rather than remain as a userland testing framework because of its many different options—such a large API surface.

JSH: So for what we have seen, the differences are rather small, most of them do the same things. And as to why make it part of the language, one of the reasons to cite is all of our neighbors have this. So quite a lot of people believe that this should be core to a language itself. And it’s kind of a bit strange we don’t have something like this. In terms of why native userland this is related to some of the extra access that native can subsequently provide, that user-land can’t really. For instance, like Node is a special case because we have more access than, say, like in a browser. And so we’re able to leverage that. But you can’t really expose that to user-land because then they could like naughty things

WH: I don’t understand the answer.

JSH: In its entirety or—

WH: I don’t understand what it does that you can’t do in userland.

JSH: For—okay. For instance, are you familiar with the sibling proposals?

WH: No.

JSH: Okay. So one of the things we had talked about in Spain was like for instance when you have a proxy: that can’t be detectable in user-land, but that could be super helpful to a user trying to debug. Information we want to surface under particular circumstances, there are those other proposals that sort of deal with the complexities of that. And this feeds into that. So this provides something that then you can subsequently work together with those things. But if this is not there, then you basically have no foundation.

WH: Okay. I still don’t understand the answer. But are you saying that this will expose proxies to general scripts?

JSH: You mean to user-land

WH: This was in the context of things which users can’t do otherwise?

JSH: Do you mean, would we expose whether to—a user observable way, would expose to a proxy?

WH: Yes

JSH: No. Explicitly not.

CDA: Okay. We have a reply from MF

MF: Yeah. I pretty much share the same sentiment of WH. I do think that this is a useful thing. But I don’t think it’s very common. There’s a small number of libraries that need to do this. And they can exist as libraries. I don’t think it can really do anything that’s all that special, as we were discussing. The difference is that it can show, and should be limited to the difference already, given that we don’t want this introducing new capabilities of piercing proxies or describing internal slots that differ. It would be great if it could additionally describe those things to the end-user, but that can’t go through the language as a string as it would basically expose that information. It doesn’t actually become special. I don’t think it’s either common enough or special enough to warrant its inclusion in the standard library

CDA: RBR

RBR: I also agree that this does not add anything that user-land cannot reproduce. Absolutely. And it actually exists, I am the main `node:assert` maintainer, and in this case, it’s an opinionated algorithm for the comparison. Every comparison algorithm and JavaScript is an opinionated algorithm. As such, the main difference or difficulty that we have is actually uniformity across all the comparisons. I believe having that as a standard is actually a good idea. Because then we don’t have to bikeshed about it anymore. It’s not a discussion, "why is this working with my one comparison algorithm, but I have the expectation for the other one". That’s something I commonly see when comparing any of the libraries and often bug reports. It’s an opinionated implementation.

CDA: We have a reply from JAD: + 1. This seems like a “dev dependency.” And not needed in the standard library. MHN?

MAH: Yeah. I am wondering, do all places that do these deep comparisons agree on what is something that is equal? Because if they can’t agree, how can we agree? And find something that everybody agrees with.

CDA: A reply from MF

MF: Yeah. Relatedly, I would be more convinced if I saw the coordination naturally happening among the libraries. And that could come to us, you know, I don’t think we should be guiding that process there. What is preventing libraries from coordinating.

JSH: You are saying that if all of the libraries did subsequently agree, then a proposal should move forward? Or we just leave them at their agreement, and move on?

MF: Probably the latter. But I don’t think that we should be guiding that. That coordination—

CDA: We have a reply from RGN

RGN: This is not attempting to coordinate. This coordination isn’t even required. You know, any difference that isn’t relevant for a particular application can just be skipped over in the iteration results.

RBR: So one very big reason for the algorithms deviating is performance. In node I use some functionalities to make algorithms faster that are not exposed that I want to add to the language. But that’s a different story.

RBR: And in that case, it’s something where a lot of the comparisons are not done because they are seen as "okay, like, it’s good enough" as a comparison. And otherwise, I would slow down the comparison. That is something why I believe putting in the language is beneficial. A written in the engine itself would be a faster way to compare these.

CDA: Okay. We are starting to get low on time. There’s a reply from KM. And now, a reply from DRR. I would really like to get to EAO’s topic. KM be brief

KM: Sure. I guess on that point, an open thing it’s good to know we standardize. They won’t keep the opportunities and it doesn’t have the behavior I want. Yeah.

CDA: DRR?

DRR: I think the argument around performance is almost subtle because being able to optimize implementation means you have a different ordering and how you produce results. And in some cases you may decide to do something different. Whereas, having a default implementation in the standard means you can’t change that as easily. I would urge caution and point that out. That’s it

CDA: All right. We have 5 minutes EAO.

EAO: So yes. I don’t understand yet what is the clear expression of the problem or need that we are asked to advance possibly to Stage 1 on this. The previous conversation just now, was really informative and sounded really interesting and had potential. But I would like to hear from the champions what is the explicit problem statement or something like that that we are being asked about here. My understanding kind of reading between the lines, which I should not be doing for a Stage 1 proposal, is that it something like, it would be useful to standardization a representation of how object the different from each other. I don’t know if that’s the case. Please tell me the problem we are trying to solve here.

JSH: Yes. Like your summary, I think it is—how do I go back? I think that aligns pretty well.

CDA: The slides—different from B and if so, how.

JSH: Yeah. I think that aligns pretty well with what EAO just said. Reading between the lines. But apparently, not. So I think what EAO said is indeed what we are going for.

JSH: Anything else to add, RGN?

RGN: It is a common need to present a description in varying levels of detail for how one structure differs from another.

CDA: Do we have support for Stage 1 for comparisons? JHD was on the queue earlier with support for Stage 1.

CDA: Do we have any other voices of support for Stage 1?

CDA: We tend to like to see more than one voice of support.

RKG: I don’t block, but like, they asked for a problem statement, which should include _why_ you want this. You haven’t answered that, so… This seems insufficient as a justification for Stage 1.

CDA: Like, do we have any—call for any—any objections to Stage 1? So some folks are unconvinced, but if we don’t have somebody else to support

JHD: I get that. Stage 1, we will keep talking about it. The API is a Stage 2 concern and potentially it could not be on the slides and it would have been a similar ask. The reason why I want this is, I maintain multiple packages that are deep-equal comparison predicates and one of them that tries to give an English string describes why the things aren’t sameish for some value of that. And that is not just a dev dependency. I am not aware of anything that is even things that are primarily dev dependency, that don’t run in production somewhere, and that’s things definitely want to run in production. I mentioned two packages on matrix, 55 million downloads a week that this proposal would make obsolete. Yeah. I want this functionality in the language. I don’t care about my packages downloads. I want the clearly heavily used use cases to be addressed

CDA: Thank you, JHD. Last call. We have less than—I see responses in the queue. I had to clear it earlier. We don’t have time. And JSH is not around tomorrow. We cannot do a continuation of this. So with JHD’s comment, did that convince anyone to support Stage 1

JSL: I will support it. With the caveat that the repo does need to have a clearer problem statement with the why along the lines you just explained.

CDA: Okay. So JHD and JSL support Stage 1. Did not hear any objections. Some healthy skepticism.

MF: Yes. I am—I am not convinced that this is a problem that is good use of the committee time at the moment. It doesn’t mean it will not be in the future. I think it can come back for sure. Stage 0 is fine to continue talking about it. I just don’t think it’s ready for Stage 1 yet.

CDA: Okay. Comparisons remain at Stage 0.

### Speaker's Summary of Key Points

* There is a need to clarify the problem statement
* There is also some skepticism about this functionality being included in the standard library
* Some specific **Stage 2** concerns included:
  * What constitutes “difference” with respect to cyclic structures/accessors/post-hoc mutation?
  * To what extent such a built-in API can foster performance

### Conclusion

* Comparisons remains at Stage 0
