# 21 July, 2022 Meeting Notes

-----

**In-person attendees:**

| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Ashley Claymore      | ACE            | Bloomberg          |
| Ross Kirsling        | RKG            | Sony               |
| Robin Ricard         | RRD            | Bloomberg          |
| Bradford C. Smith    | BSH            | Google             |
| Jason Williams       | JWS            | Bloomberg          |
| Hemanth HM           | HHM            | PayPal             |

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Michael Saboff       | MLS            | Apple              |
| Istvan Sebestyen     | IS             | Ecma International |
| Devin Rousso         | DRO            | Apple              |
| Rick Waldron         | RW             | Salesforce         |
| Chris de Almeida     | CDA            | IBM                |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Waldemar Horwat      | WH             | Google             |
| Philip Chimento      | PFC            | Igalia S.L.        |

## Iterator Helpers Update

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-helpers)
- [slides](https://docs.google.com/presentation/d/1T7uVl-GtpTPgNY0psvFoVm0v22_tLoz2o-vVjlTZvoY/)

MF: This is an update on iterator helpers. This is not a request for a stage 3 advancement, the champions do feel that the proposal is very near to stage 3. We just have a few open questions which we will run by you and we'll give you an update on what's happened since the last time we presented.

MF: So here's what's in the proposal, everything fits on this slide, you can see that for all of the iterator additions there are analogous async iterator additions, so I'll just go through them one by one: The iterator constructor is a convenience for extending and creating your own iterator subclasses. iterator.from is a function that when passed an iterable will extract its iterator and make it inherit from the correct iterator prototype so that it has all the helpers. When passed an iterator that doesn't inherit from iterator prototype, it wraps it so that it returns an iterator that does inherit from this Iterator prototype. And when passed something that already inherits from iterator prototype, it just returns that input. Iterator prototype has constructor of course. It has familiar methods from array prototype. So map(), filter(), flatMap(), reduce(), some(), every(), find(), and forEach() are all taken from array.prototype. The only significant difference worth calling out is that the functions that are passed to those helpers are not passed an index or the iterator itself like the second and third parameters for the functions passed to the array prototype methods. So, to make up for that, we also have indexed(), which is a method that pairs an index with every element in the iterator. In addition, we have take() and drop(). This is effectively a replacement for array.prototype.slice. take() allows a certain number of elements to be iterated and then ends the iteration. Drop skips a certain number elements before the iteration advances. And toArray() is a convenience for collecting the iterated elements into an array. I think that's everything.

MF: So why this set of things? We consider this to be just the minimal first step. As I showed you, this is pretty much just overlap with the array methods. And because of that, there's really little flexibility in the design space. We received a lot of great suggestions on the issue tracker for things to add, which we'll cover some of them later. They would be great to add, but they are not completely trivial. And in a proposal like this, which could end up being a mega proposal, I want to make sure that everything in it is unquestionable. That we're not kind of sneaking something in without as much oversight as it deserves. So, I think everything in here should be really straightforward to approve. That's how we made that decision. So it is quite limited for that reason.

MF: So here's an update on some of the resolutions that we've made since the last time it was presented. A simple one is the behavior of take() and drop() when passed an input that converts to NaN. Instead of doing what we typically do in builtins, where we treat that as 0, we instead throw an error. I think this is much more useful for consumers. We wouldn't want somebody to accidentally get the zero behavior with these methods when their input is not numeric. Of course, when the input is converted to a non-NaN that still works just like everything else, but this does go a bit against precedent, so it was worth calling out, but I do think this is the right call.

MF: This [next slide - PR 194] was the biggest decision. This point we had talked about many times in previous updates and also extensively on the issue tracker. If you look at that PR it fixes 5 issues on its own.This is whether we preserve the generator protocol. As a reminder, the iterator protocol is basically a subset of the generator protocol. The generator protocol includes throw and also the parameters for next and return to establish two-way communication between the consumer and the producer. We decided that the iterators produced by iterator-helpers are just Implementing the iterator protocol. They don't make any efforts to preserve that two-way communication channel. So because of that, these iterators that are produced, they do not Implement throw. And the parameters for the next and return are not passed or somehow preserved to the underlying iterator.

MF: (Issue 168) We made this change to AsyncIterator.from for performance reasons to skip an unnecessary wrapping of Promise. It now uses the PromiseResolve abstract operation (AO). The PromiseResolve abstract operation is the same thing used by await. So when a promise is passed directly to the PromiseResolve AO, it's not unwrapped and wrapped again so this is just performance improvement. I think it's going to be pretty uncontroversial.

MF: I think this overlaps with what Kevin was discussing earlier this week. AsyncIterator.toArray does not await promises. We discussed a bit about how for-await-of does not await promises. We've also worked with the champion from the Array.fromAsync proposal. So now all of these are consistent in not awaiting promises

MF: And that's it for the updates. So for the remaining open questions, I think I want to discuss each question and get feedback on each one as we go, Instead of going all the way to the end of the presentation first, if that's okay with the chairs.

MF: The first open question we have is, should there be an Iterator.prototype.flat()? We have Iterator.prototype.map() and we have Iterator.prototype.flatMap(), but we don't have flat(). You can emulate the 0 argument version of flat() by passing this function that returns its argument to flatMap(). Is that good enough for now? It is my personal opinion that is sufficient. Does anybody have an opinion on whether this should be added to this proposal?

USA: There's nothing on the queue yet.

JHD: I agree with you that it's not strictly necessary. I think that if you look at each array method and then like each missing array method, all the ones go from the end it like it's a pretty easy explanation, why you can't have those. With flat(),, it is less of a compelling explanation. So I think it would be a weakly held opinion. I think it would be nice to have it just for consistency. In other words I would prefer - I think it might be nicer to have the mental model here be everything that can be there is, instead of the model, that only the things that must be there.

MM: Similar reactions to JHD, but I mostly just wanted to ask the question: given that you're trying to be so analogous to array, is there a particular reason for leaving out flat()?

MF: Yes, that's a great question. I'm glad you asked that. So array.prototype.flat is mostly used without a parameter but it also accepts a parameter. There are basically three cases that the usage of that parameter falls into. Usage of the parameter with zero or one is useless because that's either not doing anything or its equivalent to the not having parameter. The cases of some finite number, that is not zero or one falls into, you could just call flat that many times. Assuming you know it statically. If you know that number statically, you can just just call flat() that many times, and the case of passing Infinity, which actually does not make sense for iterators like it does for arrays. So the case for passing infinity for arrays is something like you have a representation of a tree structure using arrays, nested in arrays at some arbitrary levels, and you want to find all of the leaf nodes. And you can use flat() with infinity for that. But if you use that Infinity with iterators, it always returns an iterator that returns an iterator, that returns an iterator, and you never actually are getting values. So that doesn't make any sense to me. The case where you pass a value that you don't know statically, I think that that's just not a case that comes up, it's not how people structure their data.

MM: Okay, frankly, I did not follow all of that. Sorry, I missed a bit.

MF: Sorry, I went too fast.

MM: No, that's okay. The main thing was probing for is if there was a good enough rationale for omitting it at the stage, and I'm I'm satisfied that there is. So I'm fine with your decision to omit it for now. It's beyond just the straightforward inclusion of everything analogous with no hard problems. The other - while I've got the floor, if you don't mind, I'll just ask quickly another similar question, which is, the omission of the second argument to the predicates and rather putting in a separate `.indexed`. What's the reason for omitting it? I don't mind the indexed. But what is the reason for emitting? The second argument for the normal, you know, map and filter and all those?

MF: So it's the second and third arguments, we omit both of those. We only pass the element and the reason is that it doesn't make as much sense as arrays, because you're not indexing into an iterator. That it's a kind of strange operation to try to emulate. Arrays are indexable collections so that index can be used for, for example, looking around you during the iteration, where that isn't useful for iterators. Additionally, as you advance iterators, that index is now relative, its meaning changes. So again those familiar patterns are not as useful.

MM: OK, I accept that, but does it hurt?

MF: I haven't thought through cases where it hurts. I instinctively think there are similar ways to run into some of the foot guns with passing functions to Array.prototpye.map that accept optional parameters but that you weren't thinking accepted optional parameters. I think they possibly could hurt, but I don't have good examples for you at the time.

MM: Okay, I'm satisfied for now.

KG: Thanks Mark. I maybe have an example for you: consider the case of drop(). So drop() skips a few elements from the iterator and the natural way of thinking about it is that it's just like calling next some number of times. But if there is an index argument that it's no longer equivalent to that because the first thing you get out of an iterator that you have called drop() on, the index for that is zero not like five as it would be if instead you'd just called next() repeatedly. So the index just doesn't make as much sense when you are considering iterator helpers.

MM: Ah good. That's very clarifying. It also clarifies why .indexed is a good operation for recovering the indices - if you want them you reify them explicitly in the contents. So, then the stage at which you do it, whether it's before or after drop preserves meaning, so that's great. Okay. I'm very satisfied.

MF: Yeah, you can think of it like pinning indexing at a certain point and then you can explicitly reference that.

WH: So, what is the meaning of `flat` in iterators? What does it do?

MF: It is exactly this. It's flatMap(x => x).

KG: Well, no, there's no `flat` right now. Are you asking what flatMap() does, or what flat would do, if we had it?

WH: What is the meaning of `flat` with a parameter? If you call it with a depth of 4, does it test to see whether something is an iterator or not during flattening?

MF: I haven't considered adding flat with a second parameter.

WH: Earlier you explained that it had been considered and rejected.

MF: No, I explained why the usage of a parameter and the different cases of that usage on Array.prototype.flat don't apply to iterators. So if we did end up adding flat, I'd be advocating for it to not accept a second parameter for those reasons.

DE: So, I think an issue for both flat() and flatMap() is, why was the decision made that this would be about a nested iterator rather than a nested array. Because I guess that's where the generalization falls through. I'm obviously we're about, we're talking about an outer iterator, but why are the elements that were flattening since generalized to iterators, rather than arrays?

MF: I wouldn't call it a generalization. They're just different structures. You could think of it as a generalization if they were iterables, which we certainly don't want. When we talked about - when we designed Array.prototype.flat, you can read in the conclusion of the meeting where we decided that that X.prototype.flat should flatten X's. This was when we were considering IsConcatSpreadable as a possibility or Iterables, there were problems with doing that. So the model that we want to go forward with was for X.prototype.flat to flatten X’s. I'm continuing that here.

WH: So, what is the issue with having a parameter of infinity?

MF: What kind of structure would you use that way?

WH?: Well, you care for iterator, which returns an element, some of, which are, which everything is elements. Some of which are iterator, someone who turned out the ones which are iterator experience,

KG: So I think that MF probably should have mentioned for context that right now in the proposal with flat map in particular, if you return something which is not an iterator, it is an error. So this makes it different from array.prototype.flatMap. The reason for this was that we didn't want the flattening behavior of flatMap() to work with iterables because that's just super confusing because e.g. strings are iterable. So instead we wanted to work with iterators, and switching on "Is it an iterator or not" is just kind of a surprising Behavior. So instead the behavior in the current proposal is that flatMap() requires you to return an iterator from the mapping function and it throws if you return something else.

WH: Okay, I wasn't aware of that difference. It makes it very different from what it does on Arrays.

DE: Do you have any use cases in mind? The use case in the explainer, you know, is an array that then has values called on it. Do you have any use-cases where you would really want this to flatMap to be over iterators rather than arrays?

MF: Whenever your iterator produces iterators.

DE: For example? like you gave an example which could have been handled. It were that

KG: if you have a Set of Sets and you do like set.keys().flatMap(x => x.keys()), that gives you everything that is in your set of sets. And like, if you spread it to an array first, now you've made a copy of everything for no reason.

MF: Yeah.

DE: Okay, thanks.

RBN: Yeah, I just well, I understand that the purpose of indexed is a way to kind of bring this back. I do find it interesting. That I've looked at a couple different prior art, libraries and languages C# #, one that I'm pretty familiar with had its language integrated query and enumerable extension methods, provide index on map() and flatmap(). This is actually useful for when doing especially data presentation. For example, if you wanted to say have a react react component that renders out a list and wants to toggle whether or not it's using a darker or lighter shading for rows to provide better visibility when rendering, you can use the index option to provide or check whether or not you are on an even or odd number item for the results. And it's not necessarily based on index() of the original source, but the index of the or offset into the current iteration. So I still think that there's some possibilities, some value for having index in map() and flatMap(), and even filter(), not necessarily in providing the source iterators, I still think there might be some utility there that doesn't require reaching out to yet another - to a different function to do this when you can already do the same thing with a array map and array flat map today.

MF: Okay, I think I've clarified my opinion.

JSC: Continuing the discussion of indexed() and index() parameters to mapping functions. One thing I wanted to raise was, I am very sympathetic with the idea that because we are dealing with potentially lazy iterators, we don't have random access indexing, it doesn't make sense to try to randomly access specific indices and so like to see index numbers mean, something different with these potentially lazy iterators or randomly accessible array. Having said that. I'm not sure if I find the example of, like, being like, dropping the first five value from an iterator and then trying to map with an indexed ballot with in this index integers. I'm not sure if that would be particularly confusing to people given that we already have this with slice. We can, you know, we can drop the first five values from an array and then we map. If I remember correctly, I'm pretty sure that the Index integers given to the mapping function will be starting from the first thing in the slice. So with that said, I don't feel particularly strongly whether we should have `indexed` as a separate method versus providing index arguments to the mapping function, but I will say that, I think it does make sense to provide index integer arguments to mapping functions too, as well as the first closure actually, instead of providing a generic index function, it has a mapIndexed function. where it explicitly - like you can you can instead of index providing a function that creates index into arbitrary lazy iterators. It forces you to use it to provide a mapping function for that which is basically the same as like .map. And if you are function provides an gets an integer arguments because of the concern about creating a lot of garbage with intermediate array entries with Indices. Now I'm not necessarily that, that's what we gotta do and I'm fine with having a separate index method. But I do want to say that it's at least from my perspective, that actually it does make sense to provide index, integer arguments, to flat map. And in fact, maybe more, maybe more efficient in that you don't have to create a lot of intermediate array entries, etc.

MF: I would like to refute each of your points. So it is different to drop and then map() versus slice in that slice and then map. You are correct that the indexes do start relative to the slice, but map is also passed that slice, meaning that those indexes can be used for that lookaround indexing that I was talking about.

JSC: Yeah, that's a good point. There is a, the original thing is provided as to the mapping function that is correct. I'm not even thinking about that. I would figure that you wouldn't even give that. The alternative idea is like to iterators. dotnet to yes, provide integer index integers, but not provide the original source array or whatever that would be the alternative in my head. Don't feel strongly about this but I yeah, I'm not even thinking about providing the source to the mapping function

MF: Okay, I didn't totally understand that last part. So are you saying that there is no longer an analogy between array prototype map indexes and iterator prototype map indexes?

JSC: I think there is an analogy, but it's in so far that it's insofar as that the index and pictures are from the slice's perspective, right?

MF: When you slice and then you map, the indexes are relative to the array after having been sliced.

JSC: Yeah. Okay. So yes, there is an analogy. I don't I mean, I think the fact that the original or a, or is for slicer, a is being provided to the mapping function and the slice.map. I mean I don't think that's super relevant, like I don't know what it would even mean in the context of this iterator to provide the original thing, because you can't axis, but I am just pointing out that. Even without random access it may still make sense to provide an index integers to mapping function on lazy iterators.

WH: Yes, I agree with JSC here. If we're going for a similar API then we should provide the indexes as arguments to callbacks. They're useful, even if you don't have an object to do random access into.

KG: To be clear WH, you would not also want us to pass the iterator itself, just the second argument.

WH: Correct.

MF: Okay, I will open a thread to follow up on this topic and we can have a conversation there. I'm personally still not convinced.

MF: Okay, moving on. The next open question is should we have a toAsync() method on Iterator.prototype? This is simply a convenience but it's probably a pretty common convenience. So you can call AsyncIterator.from like we see on the right hand side here, then you have to kind of break your chaining usage and then you end up formatting it all weird. Should we have a toAsync() method on the iterator prototype to do that?

KG: I proposed this but I'm in favor.

JHX: (from queue) +1

MF: Anyone other than KG?

MM: So, there's a coupling between this and the syntactic pipeline proposal, which is the, the disturbing syntax on the right hand, column is exactly syntax disturbance that the pipeline answers, so, so, if we add, it would be a shame if we included this simply because of the historic order in which the proposals were accepted. Hypothetically let's ask if pipe was already an accepted proposal. Would we still want a `toAsync()`?

WH: Yes, we would.

MM: Okay, WH, can you expand on that?

WH: Just looking at the slide on the screen: I would not want to turn this into a pipe.

MM: I don't mind toAsync(). Certainly the pipe is still awkward compared to the left and `toAsync()` seems pretty natural. Well, I do want to keep it down to a dull roar, to not use this argument to keep adding in methods for things that should just be that something operating from the outside. There's a modularity issue. It's for iterators to know about async iterators. It's not weird for async iterators to know that iterators.

JHX: The pipeline operator has very different operator precedence so if you use pipeline operator here, it will need many parentheses. If we use the extension proposal, then this can be solved. But if we talk about pipeline, I think we have the precedence issue. So I'm +1 for toAsync.

MF: Okay, hearing no strong objections. Then I will include it in the next presentation when this goes for stage 3.

MF: Moving on, drop - should drop's behavior be eager. What we mean by that is when you call drop() with some number, will it at that moment advance the dropped iterator past those dropped entries or should it wait until the next time it is advanced to first advance past those dropped entries and then advance? Currently it is specified to be lazy. That is the approach I think is correct, but it's not a strong opinion.

RPY: Sorry. I was a bit slow in the last Slide. This is a response to the last slide, I'm not necessarily advocating a change here but filtering on arrays with an async function is quite a big mistake that people make when they're not used to JavaScript quite often because it always returns truthy. I find it quite interesting here that were actually kind of advocating that pattern when you're using the It's a filter. So again not necessarily like suggesting a change, but it is something that stands out to me.

MF: Well, if you filter on an async iterator, the only thing to do is to pass in an async function, something that returns promises at the very least. I'm not sure how we get around that. Please open an issue for that. But let's continue on the drop discussion.

MM: Yeah, it should be lazy. One of the points of making things lazy is to not do work that's not needed. If nobody advances the dropped iterator, then the work to iterate the iterator from which you're dropping is work that is not needed.

MF: Thank you.

JHX: Is `take()` still lazy if we make `drop()` lazy?

MF: I don't think it is a meaningful question to ask whether `take` is lazy. take() returns a new iterator which will advance the underlying iterator to a point when it reaches its limit at which point it will say it is done even if the underlying iterator is not. So, there's no kind of eagerness or laziness involved.

KG: But yes, it's “lazy”, is the answer to your question.

MF: I'm curious to see how you would describe that as lazy, but we can take it up on the Matrix or something. Okay, it sounds like there's no opposition to drop being lazy.

MF: We are aware of a web compatibility issue (Issue 115) . This one is unfortunate. The toStringTag on Iterator.prototype is just like the toStringTag on every other prototype. It is non-writable but there is a library, a popular library out there, regenerator-runtime, that writes to Generator.prototype. Generator.prototype inherits from Iterator.prototype. And because of the override mistake, when we add Iterator.prototype toStringTag, it will try to make an assignment to that property. So in strict mode code, this will cause it to throw because it is doing that write to a non-writable property. I see two possible solutions here: either we make this `toStringTag` writable, or don't add toStringTag to Iterator.prototype. Maybe there are other options, but we'll have to do something to solve this problem. Any opinions?

MM: Why is it assigning?

MF: It is assigning to do a defineProperty and assigning to properties that don't exist does that. This is, this is just what people do.

MM: So we're talking about a particular legacy library.

MF:: It is a library that is very common.

MM: And the argument is that because it's common by copy. There's no way to upgrade it to so that it's doing a define property instead.

KG: In the recent versions, it's been fixed, but the old version will exist forever. It was - everyone used this library for a long time.

MM: Okay, I feel strongly that the toStringTag should not be writable but you can emulate a non writable data property that doesn't suffer from toStringTag in the way that we do in heart and JavaScript by using by turning it into an accessor but the setter behavior does the emulation. And I think that's what we, that's what we need to do every time they run into this problem.

JHD: That was my exact queue item.

MF: Okay, then I will explore the accessor approach. I'll create an issue to track it if you're interested.

MF: Okay. So, this proposal adds two new intrinsics (issue 173). These intrinsics are not reachable via repeated member access from the global. There has been somebody who raised an issue that there should be a requirement that new intrinsics that are added should be reachable via repeated member access from the global. It's currently my opinion that this shouldn't shouldn't be a requirement imposed on all new intrinsics. I haven't done this yet. If somebody feels strongly that this should be the case, please let me know and please let me know in under 1 minute.

MM: So I feel there's a genuine hard issue here and it's again wrapped up with the ordering of proposals. If the Get Intrinsics proposal goes into the language ahead of this proposal then that takes care of the issue. In the absence of that. The problem is that anything any code that currently tries to freeze all the primordial has, what does Is it walks everything that it can reach by transitive property access? And then it has a whole bunch of special cases for known special cases, all of that code, which is already out there. That's not upgraded to know about this will break. We'll introduce security vulnerabilities when this rolls out, if that the instead of having to require that code to be upgraded. Every time something like this is added. Requiring one upgrade for get-intrinsics would then take care of this issue,

MF: Okay, MM. Can you put your comment on that issue so we can track it? I think getIntrinsics is a good solution to this. I'm not sure whether we should require it to be first. I think we can discuss that.

MM; I will, I will.

MF: Great. So, a quick preview of some of the things that we did not include in this proposal, but I feel strongly will make for great follow-up proposals and I just want to preview them for you. `takeWhile()` and `dropWhile()` are like `take()` and `drop()`. But instead of being given an integer, they're given a predicate that while it continues returning true will continue to take() or drop() but when it returns false, it will stop. `zip()` takes a second iterator and creates a single iterator that pairs each element from the iterators. `zipWith()` is very much like `zip()` except instead of pairing, creating an array of two elements, it uses an arbitrary combining function that takes both of those elements. And `zipLongest()` is similar to the others except when dealing with iterators that will iterate for a different number of elements, a filler element is passed that is used for the shorter iterator until the longer iterator is finished. `tap()` is very much like map in that it lazily consumes the iterator but instead of respecting the return value like map, it is executed only for its effects, and the iterator still produces the same things that it would without tap there. Chunks is a way to take a length and get iterators of that length, skipping that many elements. So if you have A-B-C-D-E-F and you do chunk(3), you get two iterators, one of A-B-C, one of D-E-F. `windows()` is similar, but instead of skipping that number of elements, it only skips one. So, with a similar example like A-B-C-D-E-F with 3 that would give you A-B-C, then B-C-D, then C-D-E, etc. Iterator.concat takes an iterator of iterators and is basically flattening it but eagerly consumes the iterator. And Iterator.repeat is a way to create an infinite iterator that always produces the same value.

MF: Now that there's other good suggestions on here. I just want to call those out, as I would love for those to be in this proposal, but they didn't have the same very limited design space that we wanted to go for for this to make it easier for this proposal as a whole to go through.

MF: (issues 162 & 164) Okay, so finally, something we need to be considering as a follow-up to this proposal is clean up. So consider wanting to be able to do something when an iterator is finished in some way, whether it's exhausted or whether it returns early. So an example where we are iterating something from a database and we want to clean up, i.e. close the database handle when we're done with it. If we passed that iterator out to somebody else, how do we do that? But we have related a proposal with resource management or whatever. We will need to figure that out. We don't need to do it as part of this. And then finally, I want to ask for, stage 2 reviewers, our previous stage 2 reviewers have now become champions of Proposal. So we need new reviewers.

JHD: I'll review it.

RBN: I'll review it.

MF: Thank you. A third reviewer would be nice but I will also take two. Okay, I'll open some issues.

WH: Just a clarifying question: Do the various functions in the original helpers close iterators?

KG: So, it depends on the helpers. So .take will close the iterator when it is exhausted. The rest of them will just forward calls to .return except without passing the argument. flatmap has two iterators to close but it will close both of them. Basically yes, they close things in the way that it makes sense for them to close things.

WH: Okay, thank you.

### Conclusion/Resolution

- JHD and RBN to review

## Double-Ended Iterator and Destructuring Status Update

Presenter: HE Shi-Jun (JHX)

- [proposal](https://github.com/tc39/proposal-deiter)
- [slides](https://johnhax.net/2022/deiter/slide)

JHX: All right, the double-ended it always ended destruction disciples are just a status update. A very quick recap of the syntax Currently the description syntax only allow. resting the last position. And with this proposal we hope to allow resting any position. and also hoping it could omit the rest. Now here the last to actually do a very similar but and the pattern matching pattern match, the proposal they have difference in Union in pattern match. this only match exact two but in destructuring they should match a similar thing.

JHX: okay, one small update is because we now allow rattling and a position. I think we should allow the trailing comma after rest. Currently it's a syntax error then the semantics, this is the current destructioning semantics, the end up in the original Proposal. We introduced a new well-known symbol and used next to send d magic string And so if can give back the last elements in the rest's items on. The currently working version updated version. Change, change it to a separate method which is nextLast, And we do not introduce new well known symbols.

JHX: Okay, this proposal advanced to stage 1 2 years ago and I think I think most of us. Okay. with the syntax? This is what we want but The most important question. So what's the underlying mechanism for the double-ended iterator for destructuring. So we have the incubator call to discuss that we discussed several possible mechanism the first tool. I think know we don't like it because in JavaScript the disk or disc or destruction of big a based on the iterator. So the same thing the double-ended destruction should also be based on the iterator. So there are 2 possible mechanism. The first is use an iterator ere and we just just look at all the rest elements and in the last step, we take the last two items and assign them to last two or the last one. here a small opportunity here, they have the difference. If if we only have one element left. this is load is also very small point. And if we do not need the rest binding, we actually do not need to keep all the items within need need to keep two items in this case. and one, one thing, we should that even we only needed the last three items with student Need to consume all the items to get lost three. This is because the iterator is the currently in 1 direction. And the mechanism used is double-ended iterator. It's what this proposal wants to introduce. So here, we use the nextLast method to gets the last four elements, and it there's no rest bindings we actually do not need to call the next method again, which is for just like, just like in the normal destruction, if you only get to the first of three elements, you do not need to go on an next() and more and just call you return to close the iterator. And if we use the double ended, iterative only need to call next() and do not need to call next more.

JHX: So, this is the mechanism. I introduce. It's very simple. Here are some key points. The method A, it just works. You can't works for current or current, it iterates us, but if you only want to get to the last item, you need to consume all the items. And if the if the sequence is very long or infinite, that definitely come to work, you can just just you know tell me Oop and accident. Method B, nextLast, if you do not have a nextLast method it consumes exactly the wanted items and I can work on the infinity or very long sequence. Here are some examples of infinite for very long, but still, they are double ended sequence. For example, infinite repeat the repeats are actually, the double ended because the in both the and they just give you the same value and here is a very long, very big range. Obviously, you cannot consume all the whole items but it's okay to only take the last items. And many Infinity to sequence after have limit. So, in such cases, the last elements is just the limit.

JHX: There are some more consideration of the double-ended iterators, firstly, you can find it this asymmetry of the next and next. Last and second in the end, it worked help proposal. There help proposal. There are some discussion about whether we can have some matter like fine last supports currents. it's very systematic. Is very, very hard to find the correct semantics. But if we have some double-ended iterators, you could provide a reasonable semantics for findLast and reduceRight and the even toReversed. So this will make its much closer to the current Apis on arrays. And it also cover all the use case of reverse iterate. We have another proposal, a stage 1 proposal, for reverse iterators. So in that proposal you can write two iterators. But if you can writ two iterators, actually you always can write one double-ended iterator.. So I think maybe it's better to only maintain one iterator instead of Two iterators. And was the double-ended iterator toRreversed just gets the reverse situation.

JHX: There are also some other discussion about like the performance say and how engines can optimize or may use the method B internally for optimizing. For example, if we have range proposal in the future, a very large range actually, engines and my kids double-ended and and gets the last items but the user and it supposedly impossible to have to have such optimization. and note here, the mechanism Be with Mexican be developers can always convert to a known (?) to arrays. So method B has the his escape hatch. But if we choose method A it is impossible to get method B behavior.

JHX: We have many discussion on the record, they are some summary of the other discussions. example, it's always the developed due to (?) for example, in the reverses iterator, you always need to - it's the developer's duty to make sure to make sure that the normal iterator and the reverse iterative, they returned the same same sequence. and in the double-ended very interested, it's also the duty to make sure the next and the nextLast method eventually give the same sequence. and, and we also discuss to some like the it's better to treat building and using and its various Ecosystem or whether we should consider. If you need to accelerators ecosystem of, not everyone agreed that stuff. On the call, of course we have many arguments, but Eventually, it seems the people on the call generally like mechanism B.

JHX: be So here's a very simple summary of why I prefer method B. In simple case these two methods are just the same and in the worst case, method be give the power to the (? and the double-ended iterators by themselves can be used for can replace the reverse iterator. And can are some benefits to which they iterate help us, and the maximum has to escape hatch. So I was a champion. I'd like to go on with method B but we are going to stay you want. So so we always can revisit the design. Note that actually, it's possible support. both, that means if the iterator is double ended use method B. But if it's not to fall back to method B, but actually we can add a method A as fallback for method B anny time we want. So for now, I would like to focus on the method B and maybe we can revisit n the future.

JHX: So this is first important with this now and then there are others topics. The first thing is we change the next back to next last. On the problem of the original version, using the next back. Look. The first problem is that confusion, the people always ask, that's how I and iterates could move back to previous status, but actually the double ended iterator does not go back to the previous step. But think the confusion may become from the word "back", the word back is I use that word because of Rust double ended iterators use nextBack, but the term back may come from the C++ method. It actually means just makes the lost. So I think we should use the nextLast. More consistent words in JavaScript and they are the prominent people feel the, the next mass of should always forward only. And, and of the important problem is that, since the new version rely on the passing, the protocol semantics of iterative helpers, but that is removed, we have to use separate method now. So why change it to the next class? I hope it will be. Clear. So we will not cause great confusion with bidirectional iterators, and the word last is consistent with current API and the symmetry of the next. And nextLast could makes it clear that the next is consumed of the first item and nextLast consumes the last item of the remaining items And and now we do not abuse, the custom iterates protocol and magic strings.

JHX: The next topic is how to mark double ended iterators. Are you introduced special a new well, known symbols. But to be short, in this is this is solution possible but it's a little bit complex. So you can check this just comments here comments here, It's like the how to use this symbol solution, but consider we are moved to the nextLast we can use the much simple solution with of just checking nextLast to check whether iterator is double-ended. So we do not need to introduce the new well known symbols. We we just added an optional nextLast method to the iterator protocol just like throw and return. If an iterator only has the next semester, is to just normal iterator evening, both Both next and last last mess. It's double-ended later, he's not here. Interesting question, What if it only have the next last method? The current spec say that, it sort of should must have next method of but this is already a very that today it. Well, it will not give the syntax error because we hear is a destruction the we do not disrupt any thing. So it will not checked - we're not invoke the next method. So it is seems if we don't have the `next` part, we can get to the value. And it will help us invoke toReversed. toRevrsed just swaps next and nextLast. So for example, we assume that the array, is double ended in so we can reverse it, (...). And I will give its normal iterator. It just give you a nextLast only iterator. And you can still use this if you only destructure from the end. Another way to think about that is what should happen if we remove the next method of a double-ended iterator. Here we have a double ended and we remove next and in all these cases, it actually seems could get these values. The key point is the nextLast could also be used to consume last items. Just likes now saying it's just the mirror of the next method. So, we could update the iterator interface to make next also optional, so we can say an iterator is required, to have either next or nextLast or both, if they had both it is a double ended iterator. So if that we in such cases, the way only, we only use the last (?) and in this case, even we need the rest. so we can just reduce the next last semester to get the rust. Tha, so it's do not need to call the next method.

JHX: An interesting case is this. we just get all the rest items. So this is the current behavior but if, if we allowed nextLast and that's the next-to-the-last only its return, we can use this - we have the next.

JHX: So we have the normal iterators, the next only, and double-ended. The question here is do we like the nextLast only? It has the symmetry of the next and the nextLast. And the other topics here is built ins. I think all built-in can be double ended except matchAll, but I may miss something. I need to investigate.

JHX: And how do it iterator helpers work on double ended iterators? For forEach and Map we just invoke the underlying iterator methods. [missed discussion of other helpers]

JHX: Yeah. The final thing is how to write double-ended, iterating, generator on in the original version, I use the function sounds, but because we now move to next class, so we cannot write the go and literally directly while generator spot. If you if you want, you can still use a generator with the help of a wrapper, or even a decorator. It could look like [slide].

JHX: this is to all the come has ended and the future plan is to align with the it sort of helps and sync. It's maybe a good time to have experimental implementation so we can have some feedback and check whether work fine.

DLM: Thank you. I was wondering if you could expand a little bit on the motivation for having this in a language. When I look at the proposal, the motivation seems to be based on this sort of destructuring and these iterators exist in other languages. But I was wondering if you could expand a little bit on why we'd want that in ecmascript?

JHX: Okay, I think when we discuss that in the stage one meeting, I think the double ended destruction syntax I think people wanted them. And you can you can check that my stage one presentation. There are many examples, this is very old problem And of from the first day of the es6 that they are. Always question and stack Overflow. Why JavaScript not support rest in the middle of the pattern. So so I assume that we want that and the most hard question is how to how to provide that based on the iterator semantics.

DLM: Thank you.

WH: What are the semantics of the double-ended iterators? If you iterate from both ends, do they meet in the middle and stop or do they go past each other?

JHX: Normally, if the underlying Structure is already a deque, for example, arrays.tIt's easy to implement it that, you have two cursors, one beginning of the sequence and the other one is in the end of the sequence and you construct the next, well, first cursor to the right side and the next, last we removed the are the cursor from left side. And if they meet together. you have consumed all the items.

WH: This proposal is quite pretty in an abstract way, but I'm a bit concerned about the complexity implications for things like iterator helpers or anything which produces iterator APIs that will want or need to support the nextLast API. For some cases, it's a bit unclear how that would work. And for generators and async things, it’s hard to do async from both ends.

JHX: I think there's many many cases we do not double-ended iterators, for example. streams are always one direction.. So the double-ended is mainly for the normal cases like Set or Map because in JavaScript will they can Double ended. And in some cases, for example, what are listening in the like, the literature repeats it can be used with the, it will help us because it's (?) It might be have the pattern that you have infinite sequence and you do some operation on that and and In, and even some cases you may want to do the operating like take last or something like that. So the double-ended iterator can provide a reasonable semantic and eventually if there are some iterative that it's not double ended if people want to use double and if they can convert converted, to array.

WH: In the examples you gave some of them are quite tricky. For example, you picked an infinite sequence which converges to a limit of 0. So there is a unique value and there are reasonable semantics for having a last element and iterating from the back of that particular mathematical sequence. But there are also mathematical sequences that do not converge, and it's not apparent to the API whether some mathematical sequence will converge or not.

USA: Unfortunately, you're almost at time. So would you like to conclude?

JHX: yeah, I think I think the if I won't come close allies including the still the most important, the problem is what we like to choose the mechanism A, or mechanism B if, if people think the method A is already enough and we don't want method B, please add that. We can discuss that in the Repo, I'm always open to that. So we can revisit the design space, which which direction is what we want. Thank you.

[extended timebox 5m]

JHD: So I have mentioned this on GitHub but I just wanted to bring it up again here. I think that we're going to use the word "next", then it has to be in forward. next back or next last or anything like that. Like if the word next is in there to me it means forward and it's confusing to have it go backwards. But that's a bikeshed discussion that may be moot with the remaining queue items.

DE: yeah, so as is JHX was actually saying mechanism, a sounds pretty good. I really like that. your championing destructuring from the end that seems like a very useful everyday feature. And yes it's true that you would have to kind of use that array as a stack, but that's already a common usage pattern. For JavaScript arrays. So, implementations have to be able to cope with that somehow. And I'm wondering if we could move forward with just destructuring from the end of arrays and not adding a double-ended iteration protocol, which comes with a lot of complexity as has been noted.

JHX: Yes, it's possible. But I think of the that the difference here is that if we choose mechanism A that seems so we can but we're very hard to add mechanism B in the future But the mechanism B, if we we expose the mechanism A as a fallback. So, I think that the difference here is the possibility of the design. If we just choose mechanism A we can do things that we can never have double-ended iterators in the language.

DE: Yeah I'm not sure that's true because we could we could use reverse iteration just in other places in these cases of destructuring You're always iterating through the entire iterator. So it makes sense to just stick to forward iteration for that case. And in these but maybe there's other cases where you would want reverse iteration. I don't really understand the other use cases, so whether the complexity is justified comes down to those. I don't think we should forward design so much complexity unless we have a really strong reason to.

JHX: I think we all worry about complexity. My feeling is the reverse iterator actually have a very similar complexity to double ended because of you, you wish, if you actually do, you need to write to iteration and you still need to Iceman a similar parts.

DE: Sorry. I misspoke. I meant double ended, not reversed. I just wanted to focus on. Can we can we handle this destructuring through totally forward iterators as your mechanism A and move forward with this proposal that way.

JHX: um, yeah, personally I prefer the mechanism B because I always think we should we should consider - as I said, if we choose mechanism A now we can never have double ended.

DE: look forward to more concrete use cases for this in a follow-up presentation.

SYG: If I can jump a little bit. I agree with DE. I think the like, concretely for me. The problem statement that is uncontroversial is that people may want rest in the middle of their array destructuring and it seems like your preferred - that it seems like there's not consensus or there's not enough agreement on double-ended iteration being its own problem statement and you are conflating the two and it seems like there is a path forward with mechanism A to solve the narrower problem of having rest in the middle and if you would like to expand the problem statement to be directly about double-ended iteration that's a pretty different problem. And then we're asking you to justify that better. Does that makes sense?

JHX: Yeah, thank you.

WH: I agree with JHX here. I don't think that mechanism A is justified.

DE: can you can you say why WH?

WH: Because it precludes mechanism B. Mechanism B is a much more attractive general solution for things like reversing iterators. Mechanism A is a hack. Implementing it now if we later decide to pursue mechanism B would have been a mistake.

USA: We're at time. Can we continue this offline?

JHX: Yeah, I think this is important. so please raise the issue in the report. Thank you everyone.

### Conclusion/Resolution

no concrete conclusions

## Policy Maps and Sets for Stage 1

Presenter: J.S. Choi (JSC)

- [proposal](https://github.com/js-choi/proposal-policy-map-set)
- [slides](https://docs.google.com/presentation/d/1ykMq2uQZbvtawN5MpBMD2Y1PXk3DZEI_O5U0Fsf-_ZQ/)

JSC: I’m proposing a proposal for Stage 1. This is in collaboration with HM. This is for maps and sets that follow cache replacement policies. You all know the saying, “There are only two hard things in computer science,” right? So I'm proposing for Stage 1 that we start to explore the problem space of maps and sets: data structures for developers to manage different cache replacement policies. Because a lot of times developers use mapping data structures as caches, for various reasons, like they might want to cache the inputs and the results of an expensive function. They might want to limit the memory of that cache. So cache replacement policies are very common, very useful. Every CPU has some built-in, but they're also very common in application level code. They're also repetitive and annoying to re-implement. So the problem space here is that cache replacement patch management of mapping structures is important. It's hard and it's annoying and we propose exploring adding data structures that would support various basic simple policies like least recently used, up to a number like 50.

JSC: “There are only two hard things”: Let's try to tackle one of the two hard things. Let's try to make this a little more ergonomic and easy for developers who are re-implementing these a lot. If you are using least frequently used and limit up to 50 entities and then if you try to add a 51st entry to that cache, it will evict the least frequently used items from that cache. Keep track of. what's when top rankings were first-in first-out, think less, and less first out. So these are all very common Very basically Peterson Stephen quite useful programming, and not just CPUs. And we started exploring this because we were, we're also exploring a function memoization API so and in fact that's the that should be the presentation tacticals but a big part of function memorization is manageable cache. and and, it can be quite long. So we decide to split that up into this because we can be independently useful regardless of whether have been losing, Large applications are running applications. Sometimes they might a sport, you know, the byte and we expose garbage collection hooks or three exposed to be grabs and you know this is a lot of that might be able to place by more conflict like cache replacement policies, including a map of the structures. That's the Hope athletes. And that's something that we will try to explore in stage 1. We will try to explore various directions with the design, will try to decide on which Policies with the most important to add a look, like a different use cases and shape our API to fit them. And if both this and are coming book, so the memoization function, are it over between them, we will explore cross-cutting concerns, and how absurd use these for than the position function as a modular plugs likable our policy. So with that said I have another slide showing up now until solution, but I that's like I put my if I get for statement that just be asking for that actually. I would like ask for now, if and that's what happened objection to stage one poor this problem statement generic like math instructors attachment, cache eviction and replacement policies.

SYG:. Enthusiasm from me for exploring, high-level caches that better communicate intent for memory management for large applications. I want to give a story about why WeakRefs being exactly the wrong thing you want to use for caches people often reach for people often reach for week when they're when they want to write a user land cache because we have WeakRefs now when in fact, what they often want is something with a different eviction trigger than memory pressure. Like, least recently used, like a good like the policies on the, on the screen. Like, if you if your eviction trigger is just memory policy and you a cache based on that eviction trigger, your cash gets evicted just random times which defeats the purpose of it being a cash like yes, your memory can get freed but you didn't really achieve the goal, writing a cache that speeds up stuff. so, I think there's a general like weakRefs are useful for other things not just for caches to to be clear. So I'm not really arguing against WeakRefs, but for userland management memory in large applications, I think the to General design paths, we can go down, is something like this where we have higher level intent communicating, Primitives around caches or we keep exposing more GC hooks. And exposing more GC hooks is more fraught with danger and we should not do that. if we can help it. So stage 1 support for me to explore higher level like intent communicating caches, they are a lot of gotchas here, of course. Like this is, this is talking about actual resources, which the spec avoids at lengths to talk about. So there will be difficulty in actually talking about what the Of requirements. Here are what eviction triggers we want other than memory pressure, because there could be legitimately many other kinds of resource-related that are not related to memory. But you know, that might need more host hooks, which can which are useful, but might have other challenges anyway. Support from me. Thank you for proposing this

JSC:. I added myself to thank you, SYG, and of myself to the queue just so like it myself and I'd like to clarify SYG. Do you are you interested in adding a memory pressure cache replacement from all like has like a cache replacement trigger?

SYG: I mean that's what people use WeakRefs for. So if you want to subsume that use case you would need to consider the yes,

JSC: Okay. Okay, very good. All right, that's it on.

WH: SYG, I'm really confused by your answer. What do WeakRefs have to do with memory pressure?

SYG: Is has to do with memory pressure in that You know that it won't keep something alive during a g c. So, often people in user land if they want to write a cache and they and they cached item is not crucial to be kept alive the correctness of the application. They will hold onto the asset via WeakRef, which might, which means it could get collected at GC and GC happens during memory pressure.

WH: I think you're confusing caching with GC. A cache can discard objects held elsewhere. A WeakRef cannot get rid of an object which is strongly held. So it can only get rid of a key if nobody else holds onto it.

SYG: in like a key value map, you can hold onto the value of i0 craft. And the key is strongly held, right?

DE: so the WeakRef README actually walked through an example of how you would do this and maybe that caused confusion among developers, or maybe they already kind of wanted to do this anyway, but yeah, yeah, it should people should definitely be LRUs, but you can kind of get something from WeakRefs. Just it's very non deterministic and probably not what you want. want.

JSC: So what I from I understand and SYG, correct me if I'm wrong, there has been some demand from the the third party vendors of large web applications saying that they are having difficulty managing their memory, they're asking for more bait City so to speak books for He management when we might have much lower hanging fruit for them to flee. Make high level cache has are, you know, relatively simple things like color hell are you or Leslie? SYG, you have mentioned before looking at large applications for these sorts of invasive things when they may be make the So your journey through life of software for them with these with these relatively simple high level cache, The instructors. WH, does that help clarify the connection between the WeakRefs in these in that people are asked, are using WeakRefs and they're asking for GC hooks because they're having difficulty managing the memory when perhaps they would have a lot less trouble if they just started using if they use more of these big cache replacement policy.

WH: I'm now confused about what this proposal is about. I thought this was about just implementing algorithms which can all be done in user code.

JSC: That's right.

WH: Yet SYG just mentioned as a justification of this proposal a desire to avoid exposing low-level GC hooks, which indicates doing things inside the scope of this proposal that cannot be done in user code as it is right now. So you and SYG seem to have very different ideas of the scope of this. I heard from SYG that he wants this to use implementation knowledge of memory pressure and doesn't want to expose more GC hooks to be used by userland code. And you think that this is just userland code. So I don't see consensus on what the scope of this is.

JSC: So I have like I have possible solutions that basically are like, like, perhaps one solution we could explore for this problem space of data structures for four different cache replacement policies would be like versions of Map and Set that would like Are you and LF you? And the reason why, like, we're proposing these standard library is one there there in like, they're very common, they would be useful for function memoization, which itself is very common and which we will propose separately and

SYG: what is the eviction trigger in your current proposal? Like, Like, when do you decide evict something from the LRU.

JSC: in the current proposal, current proposal, like it one? Actual solution could be, could be just a simple. A simple number of students. Having said that, it would be within the scope of the proposal to extend it to like make this something that's not in commendable and userland and to have it be something like be triggered by refinement, it by memory usage itself. I think that's excited but I think part of the state 1,

SYG: I see, I don't think we're really asking for different things in that your it's it's okay. So Okay, let me rephrase. What I said earlier about is undesirable to have more g, c hooks. if your current Proposal with doing this only usual and we're doing things that are, that are already possible user land, sufficiently solves the memory management issues of large apps, cool. If it doesn't, I would like to think about Having like memory pressure. Be a trigger during stage 1 and Stage 2 to solve the problem of memory management for large applications. I agree with that and possibly other implementation, driven eviction triggers like that are not just memory, lay some other kind of resource exhaustion or resource management.

JSC: okay, yes, I agree That that would agree with that and I be within scope of our stage one explanation.

WH: I would not want those to only be accessible indirectly only via this API. I don't want to use this as a way to avoid exposing those implementation and memory pressure APIs directly.

SYG: do you think that is stage one question? Or do you think that is a question of problem statement?

WH: It's a question of getting agreement on what the goals of this are. Your goals seem to be at odds with some other people's goals here.

SYG: Well, my goal is to help large applications better manage their memory and manual like user hook, a possible memory pressure triggers, for instance is one mechanism that might help that a higher level cache API as proposed. Here might be one way to help that. I mean, I've given some reasons why implementations are likely to not be happy with exposing more GC looks, but I mean, the I'm not sure if I hear disagreement on the goal, I hear disagreement on mechanism.

WH: I heard one of the goals was to not expose low-level hooks for GC.

SYG: let me clarify that in that he was doing this. That is undesirable. It's not like a hard block or from us. I'm speaking from experience, for example, example, in JVM exposing things like priority references, being a low-level building block. That is not exactly easy to use correctly that might cost GC thrashing like there are known negatives from past experience that guide our thinking maybe we don't want to expose more GC books, but it's not like a hard blocker if it is, if it's like a useful hook that can solve the problem, we’ll consider it. So, I think there's a long queue of. I've talked long enough.

JSC: WH, does that address your concerns, basically that data structures that make cache management easier, whether those hooks would be in userland or not. I mean, I don't know, but I would like to explore that in stage 1.

WH: It's fine for stage 1. My other concern is that there are a lot of ways to do caching and standardizing, so it can limit — especially if the standard versions have access to implementation features which are not available otherwise — can limit the choices that users have.

JSC: So certainly there is a thread about which replacement policies to include that's issue number two and I would welcome your participation on it as well as discussion about concerns about limiting innovation in userland.

MM: I support this for stage 1. I support the broader exploration of the the suite of questions that we just raised in this discussion. Just want to point out that I think the discussion points at a good way to explore going forward with this, is on the one hand, you've got the the cache-based collections that have a policy of what to evict given that they've been triggered to evict something, you know, the other hand, you've got eviction triggers that say something should be evicted and one can imagine that those are orthogonal and composable so that you can parameterize a cache data structure that implements policy of what to affect parameterize, it over something. That provides the signal to of it and then certainly starting with only what can be done in user land today, which is as you showing on the slide a budget, because the numeric budget provided is is exactly the right place start. So, I support this for stage 1. and I would keep the larger agenda on the table for stage 1, but hope to see it separated into two orthogonal dimensions as it goes forward.

JSC: Just to clarify, MM are you. are you suggesting that we have a separate proposal for a generic eviction trigger API.

MM: I'm suggesting that it could be if you if you would like to structured as a separate stage one proposal and move that out of consideration for this proposal, I would be very happy with that. Also what I Expecting is that just this proposal covers both topics. Because the design of how these things compose is also part of what needs to happen in order to compose them. So either way on stage 1, stage one is loose enough that that exploring both dimensions as well as how to compose them seems good to me going forward, though. I would really like to see a worked out. Orthogonal composition between those two dimensions.

JSC: Okay, thank you, MM will keep that in mind. We might or might not make that a separate proposal if we develop something that might be might be complex enough to separate out the for now, we will keep them coupled in order to keep the keep all of these APIs are cohesive but we were too much already in already in mind.

SYG: Thanks. MM, That was well-spoken framing. I agree that they are orthogonal and should be composable. and I wish we can tackle both of the same time whether in separate or the same proposal, doesn't really matter to me, but I do see, I would like to keep the build it. I think the eviction trigger thing is missing expressivity that I see a lot of demand for from admittedly, a small subset of Very complex apps that are very memory hungry but I do see it as missing expressivity. So I would like to address that at the same time, if possible

JSC: one possible thing is that you know, we have a single parameter here. It's showing an integer but we could keep make it so that it requires an interpreter and if it's an integer, then it's simple simple Cardinal. But but we make, every can also type and keep it within my life. Define host to find, triggers to putting. That's just one example of course.

GSC:: Yeah. I just wanted to say I'm kind of this proposal. Nothing more to add.

JSC: Thank you. GSC

JSC: “William Martin's, no. Need to talk actually, it says support to stage one”.

DLM: I was originally going to ask why this can’t be done in a userland library, but if I came out of the discussion but I guess what I'd like to hear is your motivation for investigating this problem space inside of stage one rather than experimenting with this in userland libraries first done. I think everyone agrees, this is an important problem, but given complexity and perhaps a difficulty of coming up with a generic solution, I'm wondering if it wouldn't be better to explore this in userland libraries first.

JSC: well, there are a couple of problems to this from my perspective. One is that the original impetus of this from our perspective was because we wanted a standard memo-ization function API memorization is superficially fumble but course it high complexity Arts to out it manages its cache. And so the idea was why don't we make that much? But like, Modular much like a make, it a pluggable interface and like the comic things for memorization seem to be like to argue. So why don't we keep explore that separately? Because it made it probably will be separately and useful for large applications in addition to that there are their Arts do exist using its implementations vary. Something officials, confessionalism policies. Head. Instead let me be happy to try to do all of them, but it's, there isn't a lot that of something that is not not possible in user language SYG has, which has the trigger whether the memory signals from the engine itself. But also for this looks incredible, which course Does that satisfy you?

JSC: Okay. one memoization separate proposal is motivating this. Two there are existing there already exists userland libraries. And we would be happy to exploit those in stage 1. We think that this is an important enough and general enough problem, that it is worth exploring standardization, especially in really is really, it was agent, but it's true that like, even if this takes a long time to progress, there can be Solutions in userland. But I think that this is important and Broad enough and cross-cutting enough that it's worth exploring standardization for if not. And lastly we also would be exploring engine driven eviction. Alert/trigger, whatever the best word is, I don't remember. Does that satisfy your question?

DLM: Yes. Thank you.

JSC: All right, thank you next up, CDA.

CDA: Support moving to stage one. I do think there is potential here for things that can't be done in userland. So I definitely think it's worthwhile exploring the problem space.

JSC: Yes. Thank you. It looks like there is a lot of interest in and driven triggers that can trigger. So the feedback I'm getting back, this is one, it is you, it is nice and good to Work different policies. Feel free to explore that issue #2, and also feel free to open an issue where I might do it myself. But feel free to open an issue about hooks. I mean, yeah, about eviction triggers and what should what eviction triggers? Should we would be exploring Beyond Simple integer, cardinality all right, it's

JSC: I'd like to be asked for consensus for stage 1.

USA: I don't think there's anything on the queue. I think you have consensus.

### Conclusion/Resolution

- Stage 1

## Function Memoization for Stage 1

Presenter: J.S.Choi (JSC)

- [proposal](https://github.com/js-choi/proposal-function-memo)
- [slides](https://docs.google.com/presentation/d/1yeMIUYnu17QCvIADQ6rGg0v1tCC93EOkMhR66IKbYUU/)

HHM: Hello everybody. We have three difficult challenges. In computer science, as know, it's naming variables, cache invalidation and off by one error. Yeah, luckily function memoization is not one of them. Have you ever felt while holding the hay, I need to memorize this function. I have multiple times and I know that feeling. optimizing expensive function calls and ensuring the callbacks always return the same singleton object or mutually recursive or recursive descent in parsing are all some of the cases where a memorization is really useful and required.

HHM: Some of the stats for from npm. We are memorization, of course, lodash is getting these downloads weekly. But why do we need this? I known of the incubator calls we kind of came to a conclusion that common to use but Annoying to write functions can be categorized into this category made be the function once or memorized. So I think this is a classic use case of common to use but Annoying to write.

HHM: What if we had something on the product change which said function product memo here's here's an example, F, which takes and control of X and returns X into the first time we see we pass in 3, becomes 6. The second time, we call the same function of the same argument. It does not print anything but returned, six there by sketching and it's not really invoking the entire body of the function. Same thing happens when we pass into or to be

HHM: What is the problem statement? What are we trying to solve? I would like JSC to chime in here as we talk about the problem space.

JSC: So we're proposing stage one. The problem spaces function, memoization useful, common annoying to write. We're proposing standardizing memoization API. That we got lots of lots of use cases. This is a very popular pattern, you know, for making us a text-based Time. Trade-off with extensions too expensive function calls. Everything from Fibonacci to, to state UI calculation. It's a common pattern, e.g. in React and lots of more Lots. It's a very widespread thing because everyone uses expensive pure functions. So if we this is a pre-approved for stage one, we'd explore various directions. next couple of slides go more into that, You know we can do a static function. We could be what method, whatever you do simple many used real work for all these cases, it's possible and make sure that it's on the for them and policy Maps Sets just got an advance to Stage 1. We and we'd explore integrating that into our memoization API. If we got this to stage one like explore, like maps and sets. Not like interfaces to allow people to plug in and customize whatever cache invalidation or the memoization they want. We'd also explore memos relationship with the function once proposal. For this function, that causes functions to guarantees functions will be called only ones I'm pausing here to ask you for stage 1 with this problem Declaration here. Declaration, having said that because clients, if there's anything on that agenda, the but I am asking right now for consensus for stage 1. But people want, want, like examples of the sorts of solutions that we've come up with that, then we could go ahead with that. But right now, I'm asking for stage 1, if barring that

WH: To make a decision about the stage, I’d want to know: Is this better, is this more flexible as a userland library or as something built into the language? To decide whether something is better as a library or a built-in, some criteria I use are:

- Is it something that cannot be easily done in user code?
- Is there a canonical way of doing things? How large or complex is the space of choices and alternatives? Are lots of knobs and switches needed, or is there one clear and preferred design that works for users?
- Is it important that everybody standardizes on the same way of doing something, such as for things like protocols?
- Would a standard enhance or inhibit future user innovation in the problem space?

WH: What I can't tell with the information presented is how memoization fits into those criteria. How many knobs and switches are needed to satisfy different users of function memorization? Are we going to bless some solution which works for some people but not others?

JSC: Thanks WH. now to be clear do you think that that's a pre stage one question that would block stage one? It's a question, which informs my opinion on whether this is good for staying long enough.

HHM: Okay, all the different use cases that the userland has. So the question is more like, should it be and user land or should it be in the language itself, right?

WH: Yes, that's the question which I'm trying to find an answer to.

JSC: now we we didn't come with examples, lots of different examples from various useful and libraries. We do have like we do know about user land precedent, probably those used in JavaScript one, is lodash’s, memoize function, which exposes a cache, it only supports keying on one argument. It has a lot of limitations. There are some other many various other organizations libraries to has that have various different trade-offs limitations. One thing that we are, that we're exploring, is the use of map like data structures, like seeing apps from earlier with Tuple based keys. That's one possible solution that we would experience. Each one. But having said that, I would say that the fact that there are so many that there are so many different userland implementations with varying patterns, actually I would suggest that there is an opportunity to try to find something that standardized this standardizes this pattern and makes it more convenient for everyone especially now that there's a that there's a feature like tuples and also WeakMap keys. These two. that might make this more are of amounting to. Having said that, if you think that would block stage 1 And then we would be happy to hear your feedback and to come with to hear any concrete solution. Like concrete things you might have that might make us come back to the pre proposed for stage 1, but I think that There are so there are a lot of user land libraries, they do differ by the bit in their different approaches, you know, some of them only support picking up first almost all of them do as far as I know do or do expose their cache and they do tend to do allow for customizing and replacing their cache with their own limitations. But other than that, some of them there is variation. For them.

WH: Yes, I would like to see a summary of what the existing solutions to this are to inform the decision of whether this is something better left in user space or something which we should Implement in the language. Stage 1 has a connotation that if something goes to stage 1 then it's something that we want to pursue trying to put into the language. And I don't know whether that’s a good idea or not at this point without seeing the existing practice.

JSC: All right then in that case. So given that we did not come with a list of examples from userland right now. Does that mean that does that mean that you'll block stage 1?

WH: I don't want to be put on the spot into blocking or not blocking. I'm just expressing a request to understand existing practice before making a decision.

JSC: All right. Well, we could go on

WH: I'm curious what other people have to say.

JSC: All right. Thanks super much, WH. Next up is MM

MM: All right, I think I'll personally answer WH. I Support this for stage and I think that there are possibilities for how this can be synergistic with help from the platform in ways that exceed what you can do in user men and these are speculative. So this is The idea of of stage one exploration. moddable has part of their platform, not propose. We talked about proposing, An eventual fate, is a purity predicate to tell if given a value, including a function, has any mutable state which will permit and if it's not, then it should be deterministic. Its activity should be deterministic function of its arguments. If you've got a function, which is pure, and in which the arguments are primitives, which with records and tuples of the space of Primitives is substantial extended. And in which the return value is primitive then memoizing that function would actually be unobservable be different but higher performance potentially higher performance than the unmemorable. So that's, and I raise this not so much specifically because I'm interested in exploring that as I raised, that Synergy because even though I am, but because just that when you get into the issue of is memorization observable, then there are potential ways in which the platform could help out making some memoization optimizations unobservable that are not really achievable in userland.

JSC: All right. Thank you very much, MM. before I go on to DLM, since MM was addressing WH. WH, do you have anything to say in response to that? Or should I go on?

WH: What MM said is one possible use case. It seems to be a specialized use case. And I can't imagine that memoization would be used only for things which take primitives and return a primitive.

MM: I'm not suggesting that if you use only for that, I'm suggesting that in exploring this, there might be some synergies there be explored so that if you want an unobservable memo, the platform might be able to help you out.

JSC: All right. Thank you very much

WH: I’m not sure having a platform silently memoize pure functions is in scope for this.

JSC: All right, all right with that said. Thank you very much, both of you. Next up is DLM,

DLM: I think we've all known whether this isn't like there's enough motivation right now. That really explains why his can't stay his own Library. So I appreciate seeing a little bit more of that.

JSC: Thank you. All right, thank you very much.

SFC: Hello, my question is that often when we discuss new features in ecmascript as well as an Intl and other places, we look for prior art, and other programming languages are common place to look that. We used prior art a lot, for example, in the regular expression set notation proposal. That's not to say that prior art is a requirement because, you know, EcmaScript could be the language that sort of sets memoization is something that could be part of the language. So it's not necessarily needed to have prior art. But you know, if there's no prior art, it means that it's more incumbent on us on and on the proposal champions to make a very strong case. So I was wondering if there were other examples of major programming languages that have this feature and maybe what were some of the reasons that they decided that it was worth adding to the language?

JSC: All right, thanks SFC so So I know of at least five programming languages that have it built into their into their libraries. Those would be python, closure, groovy… I will get back to you on the others and And it's also there are a ton of userland libraries various programming with these. think like, I'm glancing at the Wikipedia page here there's at least 20 external links to various libraries for to limitations. This is, in my experience a very common pattern across programming languages. don't have a precise exhaustive list for you, but I'm pretty sure it's going to be a very large list. If we don't succeed and getting consensus for stage one, who today, one thing that I imagine we could do is come back and explore prior art from a lot of other programming languages and I think that, I think that you like, what the argument that you know, this can be done in userland and in such is definitely I'm definitely sympathetic to but at the same time I think that if it's a common enough need then it may be worth considering putting this that we interviewed the language of B so to speak at least consider him an It instant one. All right, does that does address your question SFC?

SFC: It does. I think having some examples on the slides when you're asking for stage 1 would be really helpful to motivate the problem space.

JSC: Yeah. And by examples you mean like showing prior art. Okay, thank you. SFC and

HHM: also given that the user as the went to the user land implementations, we see there are a lot of variations. I think that would also be an indication that if the standard I used and it's even more approach. so, having various different implementations with nuances within themselves,

WH: It depends on how they differ and what the reasons for their differences are.

JSC: one problem that I can imagine that the reason why at least in in JavaScript user land it is that but there is a lot of variation and in fact has been a lot of controversy. Like, if you look at underscore’s, there's a thread on underscore about this is How do you deal with multiple arguments? And that is has been a difficult to answer question in user land for a long time, because there's no clear way to do it. One thing that we're thinking about is having a map that's like, map or a map-like object and using Tuple keys and people keys for argument's lists, also that this favor and new.Target. And tuples and records whatever. And since those are evil are can use identity directly to people is that we would symbols from a week. All that is complicated and nobody named user land has that yet because note that we could kind of weaker single size with that piece doesn't exist yet. It's not exist. Yeah, so to a certain extent, no memories. Multiple documents of transcripts capacity is the language everyone. so to a certain extent memoization on multiple arguments is not possible in userland in JavaScript yet. Because we do at like how the only approach when we can think of which involves to, which involves using tuples as keys, or Records or maybe composite Keys. Whatever is not yet, has not yet been standardized or whatever. This is not. It's not yet possible and use them in userland. So everyone in user land is right now, King only on 20 argument, that is part of the reason for the variation among memoization implementations in JavaScript user land right now. So there's there's something of that, there's something of a historical problem there. Um, that's historical accidents so to speak.

WH: You mentioned tuples and records, but those have limitations in what you can stick into their fields. So how would that work with function memoization?

JSC: What we envision is having using a map or a map-like cash the and HHM, if you could show the slide about that one thing, solution that we are now preliminary early, imagining is having a map where I'm at like having two Spore records, whatever and replacing objects with symbols and having those symbols in a WeakMap and And then like, and then just storing those Tuple, those argument tuples in the cache, where the map like cash. Okay, thank you.

MM: so, just there is an outstanding question about examples in other languages. So I just wanted mention, He has an unobservable memo using a similar Purity predicate to what model is implemented JavaScript, all of the other unobservable memos that are more aware of our in pure languages. And I wanted to mention in particular, the datalog like languages in particular Dinah, In which this kind of built in memorization is fundamental to supporting Dynamic program that makes tremendous numbers of dynamic programming algorithms. Very beautiful to express. Let's not an argument. Why it needs to be in the language. other than user land, but it's an argument as to why memoization is a really nice thing to have That's it.

JSC: Thank you. Thank you, MM, data log was one of my first loves. And yes, it's it's true. That moment. status is used a in tabling for it next. And to be clear, there are a lot of a languages, like clojure groovy, whatever python that have memoization is just observable. Next up is a SYG.

SYG: I'm wondering how far you get with the proposal if we just did the caching proposal? Does that remove sufficient burden and complexity from the userland implementations or it's a really about having a standard way to like choosing a blessed way or is it about like it's real annoying to implement. now, a lot of that is caching,

JSC: um, I think the answer is so although the cache, the policy Maps would take a lot out of that, it would still be very annoying to deal with multiple arguments, you know. So like you would still have to like at least from what I can tell to politicize or whatever argument list along with you.Target and this receiver, he would have to and also replace objects with with symbols and that's it, this is the only way I can see you can do to have random axis caption of arguments lists, that is still a big hassle to do in and userland and it's still an X. So that's why everything in userland right now, only passions and ???. So, I came with that it looks to me.

JSC: Okay thanks.

DE: . I think it makes a lot of sense to add something like this, and I like how we need these code samples that you have. the caching policy is explicit. I do worry that it felt caching policy could be, you know, it could be sometimes the wrong caching policy. So that's an interesting part of this proposal. I do you think it makes sense ergonomically to have this in the standard library and there's plenty of evidence that it comes up. So I support this proposal moving to stage one but I would like as people have been saying more more kind of deep comparisons between this and other programming languages, as well as in the JavaScript Community, how these things are handled and with special attention to the to this kind of policy question

JSC: Thank you very much, DE. I would add that an interesting occurrence. Is that recently python had previously had only an LRU memoization function in its Functools built in and they recently added an unbounded cache that has users and under bounded my map just for convenience and interesting fact, I appreciate your remark about coming back with more prior art to Here. I wonder if we can't do that instead, of course but, but yeah, we'll see.

DE: Sorry, the other thing I want to mention is I do think that this is probably fillable even with multiple arguments and without the support for tuples as WeakMap keys and it's, you know, you can change together a bunch of maps. And so I would encourage you to experiment with with polyfills even if even if the community hasn't hasn't I'm caught up to that.

JSC: Yes that's also true we can use nested Maps. There is a thread about that particular structure we could use and yeah we could polyfill that nobody in community has far as I know is doing that right now. And we should explore that. Thank you. Do we only have a minute left?

RPR: You have got two minutes left and two people on the queue.

SFC: Just pretty brief is just to say that, you know, for these types of problems like caches and stuff, it's very important to be explicit about that. So I've had a lot of problems where bugs in code just originated because there's some cash that people didn't forgot was there, and then that's like the source of a lot of bugs in code, you know, as you said, it's one of the two hardest problems in computer science. So anything, anything in this direction like being explicit about what gets cached and what the policies are, I think is very important and I agree with some of the previous commenters. He basically said that the cache policy proposal that was presented earlier today, gets us already in that direction. So Yes. As as far as stage one goes, I don't know if I'm comfortable saying yes or no to that since I'm just one person in this room but yeah.

JSC: All right, next up is WMS no need to talk saying. Moving forward to policy map since its proposal can unlock better userland Solutions. Thanks WMS. I would say would say again that Although policy maps and would make this much easier, it would still be a big hassle to do deal with multiple arguments as well as as this receiver like you would at the like DE mentioned you would meet nested Maps or in this case, I guess nested policy maps, that's not like with nested policies. That sounds, I mean that is something that is probably very narrow namik. Having that, yes, it is theoretically possible just very on are gonna make even with policy Max unless you unless if you want to do with multiple arguments now the queue is empty. I would like to ask again for whether we want to explore this problem space given what we've presented or the if anyone would not support this for stage 1.

WH: I don't know how to translate this into Stage 1 or not, but what I'd like to see as a follow-up is a good analysis of existing practice. So I definitely want to explore the problem space, starting with gathering data on whether this is best done in userland or via a language-defined feature. The only hang up I have with Stage 1 is that Stage 1 implies that it's something that's we’re exploring within an eye of adding it to the language, and I don't think we know that yet with this.

JSC: now, to be clear, the formal definition of stage one acceptance signifies that the committee expects to devote time to examining the problem space in Solutions. Now it is true that there is a connotation that this has been elevated to something that they are consistently adding to the language formally. It's not in it. The in the definition, it's just a good time. Having said that Um, I would like to ask again since we're at time. Do we have consensus for stage 1 to devote time to examine the problem space for which is to come back with more prior art

RPR: and SFC here states that the proposal does make TG2 requirements for stage 1.

DE: I support stage 1

RKG: I also support stage 1

RPR: And we'll in WMS says that he supports further investigations on the problem space. okay, so final final call are there any objections to stage one? Okay, no objections. Congratulations. You have stage 1.

JSC: Thank you Very much. I look forward to collecting every single prior art of memorization in existence.

RPR: Strong ending.

### Conclusion/Resolution

- Stage 1

## Ergonomic Dynamic Object Restructuring

Presenter: Hemanth HM (HHM)

- [proposal](https://github.com/tc39-transfer/proposal-object-pick-or-omit)
- slides

HHM: All right. ergonomic Dynamic. object restructuring, maybe object occur, Ahmad Yeah, this time around the presentation starts at some of the examples that surface will be searching through GitHub and other sources to see how it is in the real world. Here's an example of picking up dependencies from config object. In this example we have a config object but we want to pick up dependencies, Dev dependencies and create dependencies only It's another example where we are picking only some of the other options from the user options. In this case, it's like shell and we do uid and stuff like that. And here from the request body, we are picking up things. We're interested, the name company name and password in this in this classic case of profile data. And this, this is a very interesting example where we looking, whether a component should reload or not. So here, it's trying to pick this data props with compare these and then again, it's picking from previous projects and compare dings. It's important to notice that compare case in previous crops all are dynamic in nature so it's not like we just have some set of values there. Here is an example where you're omitting sensitive data from user info location C, like license number and tax ID, and we have a new model here that's getting created by omitting action updates and action. Deleted here is an array of game the dynamic values. Of course, meeting schema is underscore ID and IDs and this is a real world example on one of the on neural network, Repose where we are China, project is committed with things that they don't really like to have in that particular model

HHM: so we all get the point right life is all about taking and omitting things we want to know making things that we want big Philosophy for there. one would argue that it's very easy to kind of have a utility method. Maybe we can just use `fromEntries`, and, or `map`, or those keys to check through, has on properties. And something like that. What we see on the screen or maybe we can use our destructuring assignment. But we'll probably see. What are the challenges as he goes for the next slides and may be omitted could also look like this where we have object from entries. We do a key map over and try to filter and omit the keys that we don't want from a no.

HHM: the major challenge is had been asking notice in the previous two slides, half ergonomic, it's not really ergonomic and we can like destructuring cannot stick anomalous properties which are Dynamic by dynamically mean like request dissection basically requires a hard-coded number of properties and, and picking up properties from the Prototype isn't even really possible with the and omitting some properties. You can only let clone and delete and not really like what we saw in the previous example,

HHM: So how would this problem statement for our stage 1 before we even talk whether it should be object, pick, maybe something like object filter? So what do we all feel? Is this something worth exploring here? I would probably cause a bit to ask about statement and then we could talk about how we could probably solve it if it is really a problem to be solved.

RPR: There was nothing on the queue. Are you saying that you want to ask stage one?

HHM: Yeah, yes. - consensus for stage 1.

KKL: We discussed this at Agoric and our feeling on this is that we will would support this first stage one. We strongly favored solutions that use syntax over strongly named arguments to a method.

RPR: Then MCH. No need to speak. It's a strong plus 1. This is one of the last things I reach for lodash for and then SYG.

SYG: So we discussed this a little bit as well. So KKL summed, it up. Well, there's concerns about, I don't know if I want to endorse a syntax approach necessarily, but I certainly have concerns about using strength properties. It seems to encourage computer property access, which is good for performance, not good for analyze ability. I wouldn't not be in general supportive of encouraging, more of that kind of Programming, type Programming, type ability was also raised in Internally like, would this make typing harder for 40s? Of course, that's not strictly in our purview but it's something consider if you want this to be broadly, broadly, for not blocking stage one, but yeah, serious concern. Something of the current design space as you have presented but problem seems to be yes, we should think about this problem. They were their use cases here.

RPR: Queue is empty.

HHM: if it's a conscience for stage 1, I would like to proceed on the presentation where I would like to present on use the possibilities on how we can solve this for stage 2. We do have a spec ready for the ergonomics of, but as you mentioned, if there are concerns on performance, we still, we do have other Alternatives, which I would like to present and see if that makes sense.

RPR: So a quick, check to study. Are there any objections 1 for this. No. Congratulations that you do have stage 1.

HHM: I think it would be either be a picker homemade, or it could as well be objects filter, which can take a picker and do both either picker on either picture on it based on what the user wants. here's an example expanding bit on that say if we were to have an object with A and B properties, we do a pick of a we would get a better with these factually, we can do that, but it's dynamic in nature in this example, where we have input and second part of the example, where we say we want to pick all the values which are less than three either using be structuring or object in trees will end writing things like this which is not ergonomic SP noticed previously to but different variations to this would be probably. This is, these are some of the things that popped up in the discussions where he is this course and others where they were a lot of steps. And inputs from individuals on varying aspects, few of things that I've been picked up here is the square bracket notation on object. Maybe we'll just have a DOT on the square, brackets and say, a b of the things that I mean, we need pick. We could also, they are Spread spread the case if you want to pick his of 0 and 1, dynamically and pick whatever we want, or it could be even the curly brace brackets, very much similar to square or it could be like currently does. But there is kind of in the forum's. There was kind of a disagreement on whether properties with default assignment value, should be picked. Or not. So these are some of the variants that were observed during the discussions. On ESP EST scores and likes. I would like to pause here, and kind of curious to know your opinions.

RPR: Queue is currently empty.

HHM: So, as some someone, a key already mention to that, that would go to others. And these are some of the stats we have on lodash and this is what we were thinking to, in terms of maybe how could look on different variations here. Probably should be I only for the stage-two happen is it's a mandate that the spec is ready 10 days before even we presented, its kind of vetted by some of the reviews. If that is the Clause, I don't think at this point, we are ready to ask for consensus on stage two.

HHM: Should I ask for stage 2 at this point of time? Or do we all do?

MM: I would have I would have checked the stage 2 but I would recommend not asking for a consensus in getting the objection. I think it's just premature to ask for stage 2.

HHM: Yeah, that's all I had for real work. On whatever is required for the state's doing and come soon. Thank you.

SYG: I want to make sure that you heard my and KKL’s feedback there for. Like I was, I'm confused at you directly ask for stage 2 given there were serious concerns about not adequately. Exploring the syntax solution to this screen where there was in tax. And the objection was not have that in terms of the performance.

HHM: Exactly. So what is that? We need to go and do some research before we get back up sticks. Finding the same thing that we are not in a stage two, as first pitch to because on the agenda and put it as stage 1/2. But when I realized the feedback we got here so far, it is not as ready for stage two. That's what I meant that you're not as creative as for stage 2,

SYG: thanks.

DE: The syntax options you gave they seem nice kind of clean and regular. And some way also seems for implementations. Well, speaking for others, it seems like it would be amenable to inline caches that sort of thing and typeable as your other proposal was, but it is kind of a lot. So it will take some more thought to understand whether we want to add this. There were alot of proposals in ES6 around adding different sorts of syntax, where object property access and definition, and I'm kind of glad we didn't adopt most of them. And that we adopted classes at look, more kind of normal and later, optional, chaining. So I want to be careful about how we expand this, but on the other hand, in a lot of ways that looks quite attractive: the curly brackets.I'm not sure.

HHM: thank you all for your feedback and definitely will get back with the answers and equal the constant that's that's been raised.

### Conclusion/Resolution

- Stage 1

## Function.pipe & flow for Stage 1

Presenter: J.S. Choi (JSC)

- [proposal](https://github.com/js-choi/proposal-function-pipe-flow)
- [slides](https://docs.google.com/presentation/d/1nkKKx26QuiqewGsl2gcTVFGd8HxRA_UBgtgQKdVpfQQ/edit?usp=sharing)

JSC: All right, hello everyone. Some of you might be familiar with the long and winding path we've had about the pipe operator, and so is something, this is an offshoot of all of that but it's just an API, it's just a function or maybe a few functions. So I'm proposing this for Stage 1 and the problem space that we're talking about here is serial callback application and/or composition. This is a pretty common pattern: developers often divide code into smaller callbacks and oftentimes sequentially call them with some initial input and oftentimes compose the callbacks into bigger callbacks. They use callbacks as building blocks and then combine them in various ways. They often use metafunctions for this. Sometimes they're called pipe, sometimes they're called compose. Sometimes they're called flow. In fact, this was one of the, one of the original impetus for the pipe operator in the first place. So, I am proposing for Stage 1 that we explore the problem space of functions that assist that standardized serial application, and composition of serial callbacks. And this is a very common pattern in the community. There's a list of prior art on the explainer, some of them involve having the zeroth argument be an input, which is then sequentially fed through a bunch of function arguments. Some of them are functions that create a callback So, these are a series of callbacks without it initially and put yet, which would be supplied later. And so if we explore this for stage one we would explore various directions for spherical applying in the composing that and this is already being explored to some extent by the pipe operator but unlike that it's not syntax, the pipe operator can apply to any kind of expression, not just unary function calls but it can apply. You know, if you apply array literals or object literals and it can apply n-ary function calls to this. This does not address that. This is not syntax; it's an operator. And on the flip side, you can compose dynamic arrays of callbacks which does happen sometimes. So in Stage1 we will continue to explore cross-cutting concerns of the whole so-called “dataflow” space including the pipe operator and bind-this. Just to give an idea of what some of the solutions look like I envision up to six functions on the function constructor. [unable to transcribe] …through a series of callbacks, and pipeAsync would do the same except that the callbacks are async. [unable to transcribe] But like we could have a pipe there possibly be a function that would pipe in [unable to transcribe] …series of callbacks, or we could have a function that composes them from right to left. So either from left to right or right to left. And by that, I mean like: you give `f`, `g` and `h` functions, so what's the order they would be called in? And there are differing opinions between JavaScript developers. There's a long running thread already on my proposal repository where people are discussing it. So I’m raising these as different possible solutions.

JSC: And so like now those aren't the only solutions. But these are the ones that I can think of because you know, there are three different things that do different things. Things there's like eight different possible conformations that we could pick

JSC: And lastly, I mentioned this earlier: There is overlap with the pipe operator, but a lot of developers have made it clear that they compose unary callbacks a lot in a lot of sequences and they are unhappy with the slight extra verbosity that the pipe operator adds. Also there's also the dynamic array of callbacks case too. So this is already a very common pattern. It's lightweight, and that is just an API and, and you can and you can dynamically typed in the sequence, the callbacks so and it is terser than using what pipe operator assuming that you're dealing with callbacks, I think that this can coexist with a pipe operator. I don't think it's, it's very positive and I think it's at least six exploring, officially and state. We've basically already been doing this when we discussed the dataflow proposals, this has always been in the conversation with the data were proposals that cuts conversations that I've helped with over the past year.

JSC: So, again, I'm asking, For stage 1 that we explore the problem space of the application of API that helps with application and composition of serial callbacks, we will be restricted to functional API. No syntax. Do I have stage 1 for this?

RPR: I'm so any questions or comments on this first?

DE: So I don't really understand. I mean, yes, this is common in the community, but it seems largely related to pipeline. I'm not really sure why we want both. I mean, This, this is kind of a stage one question whether we want to be doing these in parallel, when I introduced pipeline, made a specific comparison versus sort of the functional version and achieving stage 1 was based on I think an idea that yeah we do kind of want to explore the syntax version. This is common enough. So I don't know, maybe this should be part of that effort; I know you're involved in the other one. I just don't really understand why it's introduced as a separate stage one proposal.

JSC: Well, it's a fair question. I would say that one, the pipe operator proposal. So first of all, why is so first of all, there's the question of why would this be useful for developers in addition to the pipe operator syntax Sometimes. And also why should this be a separate proposal to the pipe? Operator proposal? I'll tackle the second one first. It's the pipe, operator proposal is already very important and is already large and dealing with the dealing with syntax operator. It's the specs already called the specs are ready. Large-ish there's and there's like most of the conversation on it is, there's there's still ongoing conversation on it especially regarding the topic token. I think that if we are, would it be if we would consider a complimentary functional API? In addition to that, that would be worth keeping that in a separate proposal. I think, I think would be clean. the as for the other question, would this be useful for developers in addition to the pipe off to as as you're well aware DE, There's a sizable amount of the community that uses unary callbacks and want a serial callbacks a lot and they, I've heard in pendants from a lot of, a lot of them that they feel that the pipe operator with a topic reference does not adequately meet their conciseness needs or their Dynamic needs. I've heard I've heard from a couple of developers saying that in fact they would prefer would have preferred a function to an operator in the first place as separate them with commas and also they can, they can apply an array of call backs, so they can dynamically exclude, a callback that they might that they filter out or something. So, and yeah, that I think. And I believe I have a bunch of code examples, but it is a comment, it is a common pattern. Now it's hard to say like how much of this pattern would per-se, by the pipe Operator, it's hard to say. I've tried to find examples that I think I put in an explainer of like dynamically excluding of callback to from this square or whatever. And I could do a more in-depth analysis of conciseness versus the pipe operator. Having said that think still that at the very least, it's worth exploring adding this lightweight functional API, has that that At least a lot of developers from the feedback I got feel would least be complementary to an operator.

JSC: Does that address your question a little bit?

JHX: I just have this similar feeling on the like JSC said and the problem of the pipeline operators, the topic for Functional programming That's you will have many topics in and the this proposal actually allow you to avoid many topic. So I plus 1.

JSC: Thank you. Thanks. I guess RPY is up next.

RPY: Yeah, this is feeling very reminiscent to me of the discussions we had before when we decided to go with the placeholder approach to pipeline. Like, I think we had this same discussion, really, my memory was that the committee felt that the placeholder approach better fits with what the language provides like. think this is kind of encouraging currying and things which is tended to be done by user land libraries, but it's not something the language necessarily promotes as a style and not really saying that we should go one way or the other, but it does feel like this is a reaction to the F# pipeline, not being chosen at that time.

JSC: Yeah, let me reply to the to the last part I was of course I like I was quite involved in the decision to go with topic orders rather than tacit function application in the first place, JavaScript is, course, an N-ary has an unary functions. It doesn't have only unary functions. Kind of has lots of other kinds of operations too. I feel that a syntactically having a topic style, although it's more verbose for composing serial callbacks is more useful. General. Its, but given that many, if not most functions are N-ary and many functions like they need, they need object or they need, what do you need a raise that you might want to type through? I feel that as far as the pipe operator goes pack style, the topic reference is appropriate more appropriate for the JavaScript language. having said that not just in function program in like unary, functional programming, heavy FP libraries like ramda etcetera but like, you know, in general, everyone uses callbacks right callbacks are pervasive in event brings, programming note, help make them popular, but not the. And now they're everywhere. They're on the web too, and sometimes people need to lose all that. so, this proposal but explore. simple. simple API for composing callbacks and I'm just thinking about I'm not thinking about encouraging currying, I'm not thinking about encouraging like very high level functional programming. I'm just talking about composing callbacks here, which I think that everyone can think of the time one day when they've done, callback based programming, incentive needed to compose callbacks. Having said that. Yeah, that's that's where I'm at. I think that this could be I think that hack-style is appropriate for the pipe operator but I don't think that necessarily excludes for more for this more specialized case of having serial callbacks giving that more dynamic was that the

RPY: Thank you

DE: Iguess we've kind of covered how the arguments for this, they're largely from the perspective of why people wanted the F-sharp pipeline that those cases do come up. and this makes me very skeptical of this proposal. I think it's okay if we have a more verbose option, I don't think our goal should be to minimize the verbosity at this completely absolute level. I think it's it's fine if we as committee make a decision based on lots of evidence that the more clear style for this that and it's always possible to make something other than a library I'd prefer that we avoid this kind of duplication. Even though there are plenty of cases where it's more concise matches that mental model, I think we should just make a choice one way or the other between F# and and hack and not have facilities for both.

JHD: Yeah, so this overlaps with all the replies that came in before as well, but I mean, I think so sort of two things in your example, there with functioned, pipe was x, f and g. You're comparing one examples of the pipeline. Another is just, you know, nested function calls or something slightly more verbose with like an actual Arrow function or something, right? There's a bunch of different alternatives. but like, It feels. I don't feel like the function pipe example is concise enough compared to the pipeline example, to really be worth it. it. Like the Reverend conciseness and porosity. And so it's not just about, like, character count or line count. It's about readability. How many times do you have to type the keyboard is almost irrelevant coding since code is Read way More often than it is written. And the syntactic form is the one that I think is going to be very common. And I just don't, I'm just skeptical that. That enough people will find `function.pipe` better to read compared to the pipeline one. And then the set the other part is a lot of the performance related push back against the F-sharp style and the pipeline proposal. As I recall was, we don't want to and I'm paraphrasing here. So if I do it wrong, correct me please but we it was something like: “hope we don't want to encourage excessive creation of new functions”. and even though there are certain and that quote, and then even though there are certain pockets of the ecosystem that do this sort of thing frequently. There's a difference between the language allows it and the language gives it sort of a blessed, first-class way to do it. And so I would wonder what the if those same performance concerns would apply here.

JSC: Hmm. All right. Thank you, JHD. So there are a couple of things here. I will address quickly. regarding conciseness verbosity. It is true that one, at least on the slide, the examples that use the function functions are not short. What I should have done is I should have gotten The `function.namespace`. Usually I imagine people would extract them from the function constructive so if you imagine no function dot, there's pipe f, g, whether that's more readable or not versus x-pipe operator F call on topic pipe g: topic is one thing a lot of I would say that it probably it's is less noise. but at the very least, it should be more precise than what's on the slide I should have gotten rid of the namespaces they almost always. I imagine would be extracted

JSC: The other thing is with regards to the performance concerns which I remember also regarding proliferation of callbacks is that I would like to divorce the idea of these functions that imposing character. from the from the from the, the, you know, from the very, from the Haskell inspired functional programming subset the communicate with other libraries. What I would like to focus on and which I think I tried to do it, the explainer is use cases that draw simple callback based programming which like I mentioned earlier, we've all done before, so like callbacks already exists, this isn't about out encouraging new like urging a lot of new callbacks without having to Curry, or partially apply every single time you want an unary function call. you know, we're what this is about is just is just posing callbacks that we are already dealing with in callback oriented programming, that's the idea. Now, whether that clashes too much against Like whether that doesn't sufficiently here, it's that this will encourage proliferate a lot of partially applied proliferation of a lot of partially applied or Costco functions, functions, of course, none of this can for sure, I don't think that should block stage one per say. I do appreciate the constat. Perhaps we should decide now that link once and for all or at least for the foreseeable future. whether we want to standardize at the very least manipulation of callbacks,

JSC: but I would say that try not to think about that. Try not to think about super abstract Haskell inspired functional programming, that's occurring and partial application so much as this is just about combining call the Callback already have Does that does that? Answer your question is have is for what equipment would work.

JHD: So my sort of response to that is my without hard data in front of me, of course, I think my feeling is that the way that I typically see or do callback composition is not consistently Generalizable, like, it's not something that would work with this syntax it. The way that I usually do that is I make a I wrap it in a narrow function or something, and I combined the things together functions. Sometimes return an object of things, and I only need one property or returns an array of things. And I need to do, you know, a tuple of things and I need to do like multiple different function calls on the results of it and so on and so like how that composition is definitely a universal problem. What I'm skeptical about is that this form of callback composition is actually common in a broader sense. and I would say that if there's, if the if there could be more use cases in the explainer more ideally, more evidence of usage of these sorts of patterns, especially outside of the subsets of the ecosystem, we've been talking about that would be compelling, I think for me. And similarly, then I would say if it's, if that is actually compelling, then that would be something that the pipeline proposal could, it would worth looking at further. Either. But if we didn't think it was a compelling enough pattern for the pipeline proposal, it seems unlikely to me that we will decide that it is compelling enough. Now,

JSC: All right. Yeah, I acknowledge your points. Jordan, and thinking,

SFC: Yeah, I was just going to observe that, at least function, that pipe async. Looks a lot like functions that are in the popular `async` package on npm that. I've personally used quite a bit and I guess in general, I'm somewhat in favor of exploring this problem space because I think that that you know, having a way with using regular functions to express this type of operation, is definitely something that developers have a lot. They sing package on npm is as you know, a lot of downloads even with promises which largely make you know like you know which in some sense move away from the Callback style but even with even in, even with that the popularity of that of packages like that, continue to increase. Because, you know, this is a very good way to lay out your code. I actually would, you know, my personal opinion would be that. This is the type of Direction I Would. I'm a like, would prefer to see us Explore like that as an alternative to the pipeline proposal, but even that pipeline is already at stage 2, you know. also, you know, can see a lot of the other arguments here that well, this is pretty much duplicating the work of pipeline. But, know, at least, for my opinion, you know, I think it would be really interesting to see like, you know, if this were to move forward, what would, what would it look like as alternative? But again, that that's that's a personal opinion of So that's all I have to say.

JSC: Thank you. SFC. I am pushing this as being complimentary for, for a. less General Uses of the pipe operator, which I'm also involved in, but I do think that it is, at least exploring the problem space, So to, to a certain extent, like we discussed earlier in with another Proposal, with memo stage. One has a connotation that the committee Might like, has positive at least some positive feelings towards it. it. Technically, it's just that the committee thinks it's worth. Devoting time to explore the problem space. In this case, the problem space is call back any kind like whatever callback composition or application of callbacks there might exist if I reach stage one, I would explore. I would try to explore it. A backbone into code. Black JHD mentioned. Different sorts composite callbacks healthy people, those callbacks and callback oriented code, and whether it may be worth standardizing functional API, in addition to the pipe operator and comparing them with versions, that use the pipe operator. That's what I would do at stage one. I appreciate the idea that maybe the committee wants to put its foot down and say we bless. We want to bless pipe, operator, and look at functional type option for a long, long time or effort. That's also the. That also, this muscle might be where the makes it stand either way. I would like to position this as a complement to operate whether or not this succeeds in reaching stage, 1 for exploration, and I also appreciate the mentioning of the async package. I think that one of the most compelling succinct, this thing's examples of increased since readability. When it comes to the proposed functions is with pipe async functions. Where you're composing a bunch or cereal, applying a bunch of async callbacks. think that that if I think that the benefits are clears with, You think one of the async functions? All right, thank you. Next up.

USA: Hello yeah thank you. And thanks. SFC! I agree you in I guess I can read a little bit the temperature of the room. My personal opinion is that I preferred this API over the syntax quite a bit. I think it is quite clean and simple as opposed to the pipeline operator which seems a bit more complicated to me so I really like it either way, I mean, I understand the concerns about being staged two but I feel strongly that with all the discussions about the ‘epic’ process proposal. Maybe this could be a good contender like using an epic for the entire Five Points. Space with your diagrams, I guess a number of times which demonstrates exactly how overlap there is between all of these. So, but either way, I do like this more than the Alternatives but at the very least we should work. Them together as opposed to thinking about each in isolation.

JSC: Thank you USA. Yes. Certainly those, the data flow diagrams that I've made before in the Articles I've made and also TAB has written stuff about them to packs to. Yes. The this is certainly a space that we started trying to look at holistically since last year, it may be a good candidate for YSV’s epics idea eventually if that comes to pass I will be happy to put everything and also the call this or like this operator that I'm managing under that to having said that and if you forced me to choose between this and the pipe operator, I wish you'd think about operator the pipe operators more versatile, it's or generally applicable. We have an area function calls all the time we have array literals in function calls and and object literals that whatever I think that if you If you force me to, I would choose the pipe operator. I think these could live together. I'm trying to position them complimentary and I think that it's worth exploring putting them into an epic if this doesn't succeed reaching stage 1, it will be a stage zero proposal in the TC39 namespace, and in might sit under under the Epic anyway.

SYG: so practically. I want to ask you as the champion, this the concerns expressed today like even if we on process, you know, narrow reading of the process document grounds, give stage 1 to this. Do you expect, what's the likelihood? How do you feel about addressing the concerns expressed in the room today? Which seemed to be pretty foundational motivational concerns. Like if you're, if the exploration is of Technical aspects. Like what would you learn during stage one that you can actually address the concerns raised

JSC: What I would do concretely, what JHD suggested and which would be to explore as much callback oriented programming as I could. and see where callbacks those sorts of callbacks are composed and see if there's anything generalizable from there. That's what I would do. Concretely for stage 1

SYG: Would that help address the motivational questions raised today of having pipe line versus the wouldn't some what?

JSC: What I would also do is translate those examples. I find them in the Corpus from callback oriented programming into versions, that use both a functional API approach and also syntactic pipe operator approach and compare them and then perhaps we will come to the conclusion step. This is just too redundant. the, let's pursue the popcorn like, like, let's give up on this. I think that, you know, there is a, there is sizable part of the community. That's clamoring for clamoring for this shift and I'm trying, I'm trying to make it so that this should be useful, even whether or not we have a part of the community, right? Like for callback oriented code and all the performance concerns that we've talked about before. If we can't find enough examples, when we compare them to pipe operator, that's like this is basically more readable than the pipe operator syntactically, then I would definitely give up on stage 2, that's if I, that's it, it's the stage 1. Now, that would be concretely, what I would do and I won't and it would help inform the motivation, vis-à-vis, the pipe operator is this enough of the benefit or pipe operator. when composing callbacks and callback oriented code? Does that answer your question?

SYG: so okay, so what I have heard is that you have some idea of the concrete thing you would between here and stage and between here and asking for stage 2, that may involve you dropping stage 2.. Like, I'm not like it sounds like you're signing up to do that work. Anyway, like what is the downside of doing this before stage one,

JSC: It's more of a formal thing. And, and invest like, and also whether others into committee would also help out. But I suppose they could help out in stage 0 either way, either way, this will be in the TC39 repository in a second.

DE: I'd rather we make a unified decision about whether we want to go for a pipeline syntax or a pipe function. I don't think this is the right framework for this. I think the right framework for this is what we did previously in pipeline of branches of the same proposal, it makes kind of implies. As that they compose. But I don't think these compose, I think we just should make a decision.

MM: largely along the same lines is what DE said. The issue about you've already said that. If you were forced to choose, you’d choose pipe, I think it's unacceptable to have both in the language. I think we should be forced to choose, and if you're already clear that you that if forced to choose, we choose pipe, I think we should just drop this

RPR: BSH says these methods would be extremely easy to just Implement a New language. So not needed in the language.

SFC: What about this versus pipeline? I would really like to see a presentation. Maybe you could make about like if we were to only do this versus if you were to only do pipeline operator what is what ends up happening and what does code end up looking like ends? You know, know that, you know, we asked the question if you had to choose, which one you choose. You said we should choose pipeline operator, I think that's that's a question that we answer as a group, that's why we're here as a plenary, you know, my personal opinion going into this, you know, to be as I've hinted many times before. Is that well, maybe I think an API solution is a better one. And I think that a really good way to move forward here. We're just here to have a presentation on the pipeline proposal where you basically like you know, where we can have this discussion as a group rather than just like saying, well, it's up to the champion to decide. Which one which direction we should go. I would really like to have that discussion as a group.

JSC: I think we're at really at time, right? So I think it's clear from this, that I don't that there's enough that I don't have stage 1. I don't have consensus for that. I will say that with regards to SFC, we've already basically done a lot of comparisons in the first place, although it was to F# style pipe operator with tacit application who was to syntax but we We already did a lot of those sorts of comparisons like last year, if you would like a presentation about that again. I we would be happy. At least I would be happy to do that again. But I'm definitely like JavaScript has n-ary function calls and it has object in the array, literals and lots of other syntax, non-functional operations. I think that I think that in day-to-day usage, pipe operator It'd be much, much, much more useful. We don't have partial function application syntax and would be like that would probably be performance concerns about that. So, with all that said, if this calls into question, the approach we're doing with the pipe operator, then I'm just I would rather just not pursuing this, I will see what happens in in some time, I have Miguel Explorer, like, callback oriented call back oriented, programming examples, and see how they more of how they compose if I find any super compelling that I might come back, but I think that it's clear from a bunch of is that they think that this is mutually exclusive with the pipe operator. I don't happen to agree but if that is strongly held and and arguments aren't enough to sway, then I think that I then I will keep this at stage one and I won't pursue this further.

RPR: All right, I think this. Now I'll point out in the queue that SFC has kind of came on you on by saying it like to see this approach. stay alive, but I think. Yeah, I think we have to wrap up. Wrap up there because we are at six minutes over.

JSC: Thanks SFC. Please feel free to reach out afterwards about like what we should do with this stage zero proposal. Thank you and also, yeah,

RPR: but please do reach out to JHX too. Thank you, then. Yes and hacks to.

### Conclusion/Resolution

- No advancement

## Stenography

Presenter: Daniel Ehrenberg (DE)

DE: That's a continuation of Dan's item from yesterday morning. Okay, the return of stenography. So you have a stenographer yesterday morning? How did people feel about it? Should we try to have a stenographer going forward? Let's resolve this in a more decisive way of dietary regime change. We can inform whether to replace resources were [inaudible].

DE: Hey everybody. So we had a professional stenographer yesterday morning. How did it go for all of you? Let's open up to questions and then we can come to a conclusion about whether to try to arrange for captioner. going forward.

RPR: I'll also say, I'm most eager to hear from the people who suffer the burden of writing the notes

RRD: Yeah, I've been working the notes here and there I'm not. the biggest Note Taker, as someone that takes occasionally notes, this was a clear Improvement. I mean, the bot was already an excellent Improvement back in the day. I think we made a jump from being from missing some points. taking notes to being able to take almost everything but the but placed a huge amount of load on us by sometimes repeating things or having weird delays that we just make us lose the flow of what it was being said. We have a stenographer is almost real time which is a huge difference and even if some things need changing From time to time. It's a rare enough that now we are as no takers able to understand better what is being said in the room and so bring in more context from our knowledge. as TC39 delegates, delegates, for linking to parts of the spec saying, okay, we're talking about this section at this moment. Describing, what is being shown on the slides. Which are things that who are not able do when we are with but so I think that it's become increasingly more useful with this.

[discussion of costs]

WH: I found that this was useful at the margin. I always go through and fix up notes, it's slightly more accurate but it wasn't a major difference for me. Both of them work.

[discussion of marginal vs signicant]

?: I just know that the things that you're looking over later and correcting is after the note takers have done their work here. So if the quality is improving overall after that work but also we have a simultaneous reduction in burden by committee. A, that seems like a pretty strong wind. I do this in real time as well. well. Okay, great.

[Note-taking paused so that note-takers can participate in dicussion. Long discussion not recorded]

### Poll

- Question: Should TC39 get stenography?
- Results:
  - Strongly Positive: 25
  - Unconvinced: 1

## Clarify the layering relationship between ECMA-262 and ECMA-402

Presenter: Richard Gibson (RGN)

- [pr](https://github.com/tc39/ecma402/pull/690)

RGN: Thank you, I'm back here today to close out a discussion topic that we opened at the start of the meeting in the Ecma-402 update. This is an attempt to clarify the relationship between Ecma 402 and Ecma 262. It's a relatively small PR against the former. And I'm just going to show it on the screen here, two sections get modified. Number one is that in “Conformance” we have an explicit note that Ecma 402 does not grant abilities prohibited by 262. That if that were ever to come up, that it would be considered an editorial error needing correction in 402.

RGN: And the second aspect of it down here in “API Overview”, which describes how Intl can be added to any implementation of Ecma 262. Ecma 402 introduces values such as the Intl object itself and everything in that object graph, and also the fallback symbol. Additionally, it refines the definition of functions specified in 262. These would be things like localeCompare and toLocaleString on the various types that exist there. And it clarifies that neither of the categories should prohibit behavior that is allowed by 262 for the values and interfaces defined in 262. So, this text is that Ecma 402 doesn't get to say for instance, that the array prototype behaves differently or the string Constructor or anything along those lines. We get to add new methods. And we get to refine methods that are defined in 262, but only according to the terms of 262. And then we provide a little bit of motivation for that: we want any given 262 implementation to be able to adopt 402 without backwards incompatibility. So that's basically the extent of it. I'm not going to draw the presentation out. I think I'm just going to go to the queue.

SFC: Yeah, thanks for presenting this. This is the PR that during my intro presentation on Tuesday I said, we would have time later to discuss, so thank you for putting on the agenda. I just want to say that having clearer conformance sections, I think is a very good thing. We've had issues - for example, recently, we've been having an issue with how we reference the Unicode specification such as UAX 29 among others and how when the conformance section is not clear. It leaves a lot of holes and ambiguities to decide whether or not engines are conformant or not, and I think it's really important when you have a specification that you're extremely clear about what conformance means. So, I'm in support of changes like this one that make that more clear.

RGN: Thank you.

SYG:First, a clarifying question. It's my expectation that 402 doesn't do anything with the host hooks and 402 itself is not a host.

RGN: That is correct. Yes, that matches my understanding.

SYG: Okay, I don't feel very strongly about this. Do you think it's worth saying something to that extent like it won't touch or fill in implementations of those hooks.

RGN:I'll have to think about that a little bit more. It might be valuable, but I'm not sure what language to use for it and I'm not sure about the reification of that in ecma262, But it seems like a good direction to explore.

SYG: Yeah. I'm not sure it fits in strictly speaking, the concept of conformance but this conversation got me thinking about it. But the existing language looks good to me also where section 3?

RGN: I stripped it out to aid this presentation. Section 3 is “Normative References”.

DE: Yeah, this version of the change seems good and it clarifies. I was a little confused by earlier versions and I'm happy that RGN followed up. So I support merging this PR

RGN: I appreciate that and thank you for your feedback. I'm also happier with this language.

MM: +1

RPR: Okay, the queue is empty.

RGN: All right. I plan to merge this later today. Thank you everyone for your time

RPR: Last call, any objections to merging? [silence] Okay, no objections.

### Conclusion/Resolution

- consensus on presented PRs

## Incubation chartering

Presenter: Shu-yu Guo (SYG)

SYG: So this is quickly going to be quicker than usual. I have been busy and I have not been very good about scheduling any calls between the last meeting and this meeting. So the charter remains undrained. So as a reminder, the current charter has Array.fromAsync, decorator Metadata, bigint math round 2, call this, and pipeline. Before I call for folks who want to add the proposals to the Charter, just a word of warning that I'm happy to extend The queue. It is just that it's not draining as fast as I would like given time constraints and things like that. And again, it's like another call for volunteers to help run the meetings. That would be very helpful. Okay. So with that said, I know that there's at least one interested party in a day. To the to the Charter. For the object pick/omit. So we have that. Any other interested parties

JSC: Array.fromAsync's issue was resolved. It no longer needs an incubator call. There was a pull request which was already merged. And Shu thank you again super much for coordinating all of these calls all this time.

SYG: You're welcome. Okay, judging by the silence what we will have in the charter between this meeting and the next one, which I think has a longer in-between time. So we should get through, at least some of these. So no arrayed out for amazing. What we will have decorator metadata, BigInt math, call this, Pipeline, and object pick/omit. I will publish the new Charter.

SYG: And as a reminder for new folks, how these incubator calls work is that periodically when I have time or someone volunteers to have time, there will be a reflector post made. the list of stakeholders, you see on the charter. Which is in the incubator-agendas repos issue list. That list of stakeholders will get copy pasted into the reflector post. You will get pinged to sign wall to sign up for a doodle. Basically, to list, availability will choose a time and then we will meet for one hour to discuss that topic. Usually, it is planned for a time slot one week out. So look out for that if you are on the stakeholder list for one of these.

### Conclusion/Resolution

- Charter between this meeting and next meeting:
  - Decorator metadata
  - BigInt Math round 2
  - Call-this
  - Pipeline
  - Object.{pick, omit}
