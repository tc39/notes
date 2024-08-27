# 25 January, 2022 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Bradford C. Smith    | BSH            | Google             |
| Robin Ricard         | RRD            | Bloomberg          |
| Luca Casonato        | LCA            | Deno               |
| Ujjwal Sharma        | USA            | Igalia             |
| Chris de Almeida     | CDA            | IBM                |
| Ben Newman           | BN             | Apollo             |
| Frank Yung-Fong Tang | FYT            | Google             |
| Leo Balter           | LEO            | Salesforce         |
| Waldemar Horwat      | WH             | Google             |
| Jordan Harband       | JHD            | Coinbase           |
| Philip Chimento      | PFC            | Igalia             |
| Frank Yung-Fong Tang | FYT            | Google             |
| Pieter Ouwerkerk     | POK            | RunKit             |
| Istvan Sebestyen     | IS             | Ecma               |

## Close sync iterator when async wrapper yields rejection

Presenter: Mathieu Hofman (MAH)

- [PR](https://github.com/tc39/ecma262/pull/2600)
- [slides](https://docs.google.com/presentation/d/1W9EJoWOvi6jU1A2bwyixzOceoP_ASAeaOYER3Zy9P00)

MAH: All right, so let's talk. About the async iterator wrapper in and in particular when does it not close the sync iterator that it wraps. So, I came up with issue sometime last month, and then I searched and apparently, I wasn't the only one. There was already an open issue from two years ago on the repo and really the issue is cases where, the iterator that is wrapped doesn't get closed when one would assume it should have gotten closed.

MAH: So let's look at what's currently happening with a synchronous iterator and iteration of them, if you go and you have. So I'm in all the examples. I'm going to be using a generator for creating an iterator, because it's just like more visual than implementing the next return and throw methods on them, but here what's going on is, if you iterate over an iterator, if the iterator throws, the finally still gets called before the error is getting called. Okay, so no surprises here. If you switch to an entirely async iterator with an async iteration, the same thing happens. The finally Clause is executed before the exception being thrown is caught. The reason is because the iteration gets - actually, I'm not going to go into detaill. If you do the same thing, but instead of throwing you yield a rejected Promise, it's the same behavior. You have defined in Clause, that gets executed when iterator gets closed. And you, And then the error is called one slight difference. Here is moddable xs seems to be have a different behavior. I reported the issue yesterday, when I noticed this.

MAH: None of these cases had a, the async wrapper come into play. If we change and instead of using an async iterator. We actually use a sync iterator with an async iteration, that is where the surprise happens. It's very hard to see the difference. The difference here is, there is a `async` keyword. That's the difference. And in that case. The wrapper gets closed. However, actually, the wrapper does not get closed because it gets yields. a value ends up being rejecting.

MAH: So here, let me explain what actually is going on. If an iterator throws, or yields a rejected promise for an async iterator, the consumer assumes that the iterator had the chance to clean up before and it will not try to explicitly close it. However, the async iterator that was wrapped for it. It yielded a promise. That is an entirely value for a simple generator to return. So it doesn't assume it caused an error. So there is an impedance mismatch here between the async iteration and the sync iterator, and it's an impedance mismatch that the async wrapper is not fixing. So what the PR does is to close the sync iterator that it wraps, whenever it yields a rejected promise and the sync iterator believes it was not done already. So that means if you call next and the - and the sync iterator yields a rejected promise, before rejecting the next call before it will incur a rejection. Next call. It will go and close the sync iterator.

MAH: so this is the first issue that I noticed, and while digging into it I actually ended up realizing there was a second issue, which is little bit more complicated. But first, I'd like to know if there is any questions on this first part and I can show. Also the diff of the pr.

MAH: Here is a difference. What happens is for next, we end up ? the iterator record and saying like you should close if it's it's a rejection. Same thing for throw it because it is possible for throw to actually say - so when you call throw, it's possible for throw to catch it and return a value saying I'm not done yet. So actually that is returning ?. in same thing for that was returned and same thing for throw. And so I say like in the wrapper continuation, we plumb this through and we have the main cases. The main case that we check - basically, if we're not done, we add a reject Handler to the promise and the reject Handler will close the iterator before returning the original error thrown. Which is the behavior that yield* has. So is there any question on the behavior of this change?

JHD: So I'm not sure, but does this affect `Array.fromAsync`? Does it have to make sure to do the same behavior?

MAH: `Array.fromAsync`? I don't remember if it tries. I looked at when I looked at the spec, the only places that we're generating a async wrapper like this, where yield and for of for loops, Loops such.

JHD: A change to the producer, not the consumer. Is that right?

MAH: Yeah. I don't remember. Actually, I should check that array from async does.

KG: You probably didn't see anything because Array.fromAsync is a proposal. So you wouldn't have seen it in specification. And JHD, I think you're right that this is relevant in that it needs to close the sync iterator if it yields a rejected promise. If it is using the async-from-sync iterator wrapper that for-await uses, then I think it will get that automatically. If it's specified some other way, it probably won't. So this is a good thing to check with that proposal.

MAH: Yeah, cool. I should definitely check Array.fromAsync() for other reasons. This, I think wrapper currently is not accessible anywhere from user code array. From async might actually make that happen, which actually might be a SES implementation/implication?, but I do want to Look at that one. Anyway, I'll be very bad for that. Yeah, it did cool.

JHD: Yeah, it doesn't affect your PR. Just wanted to ask if it was something to follow up on after.

MAH: I will follow up for sure for other reasons, but since we're fixing the wrapper, it's anything. Using wrapper will have the fixed behavior. It doesn't. It's basically fixing the impedance mismatch. So, it's making sure that the async iterator is reflected onto those wraps. All right, so let's get back to the presentation and

JSC: Yeah. uses the same Machinery as for await, and yes, this should be automatically - just like how it changes for async-await. It should change from sync. There shouldn't be any problem there. I did check this but I would like a double check from someone else, but yes, the last time I checked it should all be automatically handled already.

MAH: All right. I will definitely double check Array.fromAsync.

MAH: All right. Cool. So, so when I was looking at the spec, I realized another weirdness regarding yield *. This one's a little bit more complicated to follow. So I'll try to go step by step. So this is the reverse basically, if you end up calling throw on an iterator, it bubbles, the error into the iterator and Generator actually do implement `throw`. However, in the language, there is nothing that calls throw explicitly. The only place in the language word exists is on the semantics for yield* that forwards throw. The language never calls throw itself, it only forwards it, but the way it works is that you call throw an iterator, you will be able to catch it and same as a catch, not actually throw an error anymore and continue. So, here in this example [on slides]. We Prime the generator, we yield one and we print it then right away. We throw. So at the place where yield happens, it will become a throw, that will be caught and you will see, we will print "iterator throw" and then as any finally close we all go through the iterator clause and then since no error was thrown, we actually never print B Same thing if we just forward. If we add a yield star here. This is just forwarding so there is no behavioral change it all works the same way, if you switch to a sync, same thing happens, nothing changes because we went to the asynchronous land.

MAH: Now what happens when you remove the throw from the iterator that yield *wraps. So if you try to throw on yieldl star on iterator that doesn't have throw and do end up calling throw on the iterator that yield* creates in that case. The yield *, semantics will go in and close the wrapped iterator. The for async iterator. And then it will throw a type error because it is a contractual error to call throw on something that doesn't have throw. So you can basically check the implementation for yield*, it's the throw case, it explicitly, close the iterator. And it says, like we're going to throw right away a type error because throw has been missing.

MAH: Let's see what happens when the iterator that is forwarded, is synchronous, instead of asynchronous. So, same as in for-await. Now, all the sudden what we have, we have, we, we never have the synchronous generator getting closed. and instead of a type error, we actually have the error that was thrown bubbling back out. So what happens, it goes all the way into the yield-star, the yield star forwards to the async iterator wrapper, the sync iterator wrapper throw implementation. The only thing it does is re throws the error and Doesn't touch the rap, thinkety thinkety, thinkety reader. This is again surprising.

MAH: And so What I believe we should do here. No matter what we should always close. The. I think wrapper should close the sync iterator wrapper if it happened in those cases because we're trying to call throw again on something that internally doesn't have a throw. I also believe it is a contractual error like the same the same as a yield * would behave. And we should consider changing - instead of re-throwing the error, we should consider changing to a type error. So that is a little bit - I wasn't exactly sure, so currently the PR doesn't do that, but I would love to have the opinion of the committee on that change as well. And I can show the change in the PR. So, it is basically.

MAH: so on the throw implementation, instead of basically rejecting the promise with the thrown value I go in and close the iterator and then re-throw the value. However, I believe instead of getting the value. We should actually throw a type error the same way yield star does. Instead of this.

MAH: Any questions and what is the opinion regarding what should be thrown here?

WH: That's a good question. I have the same question as to what should be thrown there. Do we have tests for this? Do we know if anybody's relying on this behavior?

MAH: I doubt it, that anyone is actually relying on this because I said, like, going through yield star is really the only way you can trigger this because the async wrapper doesn't exist anywhere else and the for await of, doesn't call throw on its own. So the only way, this can really happen is in this kind of setup that I showed here as far as I understand. So, I doubt anybody is actually relying on this error being thrown again instead of another error.

WH: You have `removeThrow` in here. How likely is it that people are going to do something like that?

MAH: okay. So the `removeThrow` is more of, because I'm using a generator to implement my iterator. So, if someone actually implemented an iterator later with just next and return and didn't implement throw on it,

WH: Okay.

MAH: So, somebody created a manual. iterator without throw used it in the sync. Iterator use the old in a yield star inside an async function and try to call throw on that.

WH: What happens if the iterator doesn't have a `next` or `return` method?

MAH: In next, the iterator is not valid so you actually not even get there and return. It will just throw throughout. So when you try to close the iterator through return or whenever it's done automatically, the async wrapper or yield star, will try to call return and we'll throw a type error because that function is missing. Or actually reject the promise with a type error because async.

USA: So their own time and there is nothing on the queue. Is there something that you'd like to ask?

MAH: I would like to ask if this is normative change. So the first question is, if the forwarding the closing of the iterator wrapper, the first part that I Presented and closing the iterator on an explicit throw. If that is an acceptable change for the committee, have consensus on that. And the pr is free to review if anyone needs a bit more time. I already have 2 approvals.

KG: I'm in favor of that change.

YSV: Just to clarify, you are still making one more change to the specification. Is that, right? to this number of PR well with into what we're throwing,

MAH: The second question would be regarding where were throwing I after thinking about it. This not in the pr yet, but I believe we should throw a type error to align it this with a yield star. But I have not done that change on the pr yet.

YSV: When you do that, change, can you CC me?

MAH: I can.

YSV: but no objections. It looks good.

SYG: You presented two normative changes. Is there one normative PR or to 2 normative PRs?

MAH: There is one normative PR. Okay. So there's one number that PR that fixes both the initial issue and the reverse issue

MAH: Correct.

SYG: Okay, and I have another clarifying question, is - so currently if the underlying sync wrapper. I'm just trying to clarify, exactly this thread that you look at slide that you're on now (13). If the underlying sync iterator has a throw the async wrapper forwards it, if it does not have a throw, instead of throwing a type error like yield star does it just re-throws the argument error,

MAH: correct.

SYG: Okay. Thanks.

MAH: Yeah. throws and Define currently it just reject the PromiseCapability which is the value. Which is different from what yield * does.

SYG: Okay. So another way to sum up your change here is to make the async wrapper aligned exactly with yield star semantics.

MAH: Yes.

SYG: Okay, great. That sounds good to me.

MAH: All right. I believe I do have consensus for those changes and I will CC YSV or anyone else for review. [silence] Just YSV then. Okay, great.

### Conclusion/Resolution

- consensus for change to close underlying iterator when yielding a rejected promise (both for `next` and `throw`)
- consensus for change to throw a TypeError when calling `throw` on the wrapper and the underlying iterator lacks `throw`, rather than throwing the value passed to `throw`

## Symbols as WeakMap Keys updates and discuss the usage of registered and well-known keys

Presenter: Robin Ricard (RRD), Ashley Claymore (ACE)

- [proposal](https://github.com/tc39/proposal-symbols-as-weakmap-keys/issues/21)
- [slides](https://docs.google.com/presentation/d/1-Hp4Qd0mmdufYCwI9fTdCxgt4xEHqE1mPfqRxzuzMvc/edit#slide=id.p)

RRD: Ok, so hello everyone. I'm RRD. I'm working for Bloomberg. And today, my colleague ACE and I will introduce you in a day to symbols as with Ashley Claymore, the champion group for symbols, as weakmap keys is composed people from Salesforce, and Bloomberg, Bloomberg, on the Salesforce side, we have LEO. That is the main champion on this proposal. So the states are the result of the collaboration between everyone in the champion group here.

RRD: So the last time symbols as weakmap keys were discussed was to ask for stage 3 at that time. time, the committee objective, the advancement for lack motivation, for the proposal, for context, at the time, symbols as WeakMap keys. when we went to Stage 2, we had the intent to supplement records and tuples to go to help with reference being updates. So we would use symbols as we can have t to the objective referencing. But by the time, stage three was presented records and tuples moved to another solution to do the same thing. So boxes and object Placeholders as we presented them last time. So stage three symbols, as WeakMap keys was not as useful as it was when we presented for stage 2,

RRD: So, however, during the last plenary, the champion group for record and tuple presented, the design space of referencing objects. So we included the advantage and the shortcomings of boxes, and object placeholders as well as the option of using symbols as weakMap keys instead as the different option, the committee at that time was strongly advising our champion group towards using symbols as weakMap keys as a solution to referencing objects. So because of that, the record the end the champion group took the decision to remove boxes and object Placeholders from the proposal and we're not going towards using symbols as weakMap keys. Again, as a way to reference objects in Records integrals.

RRD: Likewise our co-champion group is planning to use boxes for object, placeholders to reference objects, through membranes in Shadow Realms without them. They also need symbols as weak map keys, that are really good replacement for that. So that's why we intend to ask for stage 3, on this proposal at the next meeting.

RRD: Before we can do that, though. We have one has outstanding issue to resolve first. And so that issue is how registered and well-known symbols will be used as weakmap keys. And before we go into this, we want to make sure to say that for the purpose of membranes and records/tuples. This does not really affect us. So, whatever decision we take here is not affecting the use case that we have it. There is an issue open and ACE will go through the issue a bit later on.

RRD: Before we move on though to the issue. I want to show you our main use case and explain to you. Why it doesn't relate to registered and well-known symbols. Our main use case is to be able to build up an object registries such as this one that is showing up on the slide. Given a simple primitive that we would put in a record to both structures all that we intend to send between Shadow Realms. We would like to be able to look up the corresponding objects. And if you look at the specific implementation, it creates a unique symbol per object, and it also puts the description of the object in the symbol's description to help with debugging. Also, for debugging, we heard last time at the last meeting from YSV. That for example, Dev tools could be able to look at the real object and present it well in the devtools, if the object registery would be consistently located, so we would probably be looking at a pattern that people would use. And with that, I will leave it up to ACE to going to the main issue.

ACE: Thanks, Robin. so, to simplify the remainder of the discussion, I'm going to introduce a non-official definition for simplicity. So I'm going to define what an "eternal" symbol is as just a way of referring collectively to both well-known symbols. So these are things that you find on the symbol that Global symbol object with a capital S. Of course anyone could add their own property to the symbol, but that doesn't mean it's well known. These are the kind of official one and symbols that you get immediately when you create your kind of job for a fresh spec compliant JavaScript engine. So for example, Symbol.iterator or Symbol.isConcatSpreadable. And then also, you have registered symbols. So these you get from passing a value, typically a string, to the symbol.for method, if you don't pass it a string, it coerces the value to a string.

ACE: So, these symbols behave differently to unique symbols. Unique symbols, their identity is more like objects. Every time I call symbol(), I get unique symbol that's been created just for me and no one else can ever create something that is equal to what I just created. That's just like whenever I create an object, you know, given a fresh object. That is now a unique to that caller. And no one else can then create that same object. It's the only way to Get those things is if you are ever pass them to you.

ACE: These Eternal symbols. They're more like all the other Primitives, you symbols are Primitives. But the Eternal symbols and more like numbers and strings where anyone can get ahold of these. It's not - even if these things, I have two separate bits of program, those two separate bits of the program can independently get these values and then compare those values and they will be equal. So from now on, if I say Eternal symbols, that's collectively I'm I'm talking about the set of symbols that are either well-known or registered and unique symbols are symbols that came from the Constructor.

ACE: So the contentious issue is about these Eternal symbols and putting those in WeakMaps WeakSets, that kind of weak Collections. And the feedback that some people give and which it would just kind of a logical feedback. Is why would we not allow these things? Considering they sound an awful, like some object values, which are allowed things like object.prototype. And as long as something has its long as the realm is alive, the object dot prototype for that realm, for most programs, most programs are single realm. So you can kind of think of object approach that there's something that is never collected. So that sounds a lot like these Eternal symbols. So if we allow these things that it seems okay that we would also allow eternal symbols. Sowhat's the kind of special discussion here.

ACE: And a third. The distinction is very subtle. It took me while to kind of wrap my head around it. The subtlety is that. if we actually kind of look at this from two angles, you've got the specification and then you've got the implementations. From a specification point of view, these eternal symbols, they do exist forever. Once I create a registered symbol. It is forever stored in a Registry, the global symbol registry. It's kind of an ever-growing registry of entries of the symbols. However, the design of it doesn't Force implementations to implement things that way, they may Implement things that way and some engines do have, you know, they may not, they may give it a different name in but they have a global symbol registry that does just keep growing and forever keeps hold of registered symbols. The way this is implemented is that they you actually get the same semantics that you would just for a string that you can create strings and pass strings around. But if everyone drops all the references to those strings, then strings can be garbage collected and then someone can then create their same string again, and you know, no can would kind of know that it was a period of time where that string didn't exist. And the even the same for well known symbols. Technically you could. drop all the references to them, and they could be collected and then engines could re-materialise them because engines, they're intercepting the equality of these things, they can - as long as they make sure all of this stuff aligns with what the specification says it should do, which is to say these things act like they exist forever. So as long as they appear to exist forever, then it doesn't matter if implementations actually optimize for this. And from checking out playing around with some code, it looks like at least spider monkey does optimize this and if you just keep creating registered symbols, as long as you drop the references them, they do actually get collected. So what this results in is that for engines that do optimize for this so they put in the work to optimize for this, they would then need to in the kind of world where symbols are allowed as weakmap keys. If you could put Fresh eternal symbols in general into these collections. Then those collections actually need a branch. that doesn't that can actually holds onto these things strongly. So, maybe inside their WeakMap. They actually have a strong Map that actually keeps hold of a reference that strongly references, these things. And that's the kind of the subtle difference.

ACE: The difference here. compare these two things, like object or prototype. Object.prototype. If I put that into a weakset that's enough that the weeks it doesn't have to do anything, special object prototype is very unlikely to be collected if the week set is still around. So do we accept can just treat object prototype just like any other object weeks at isn't changing. Its lifetime doesn't have to do anything special. Whereas a WeakSet inside an engine implements garbage collection for Eternal symbols will need to do something special to ensure that the following code holds: I put a registered symbol inside my WeakSet. Then potentially all references to that symbol are dropped, then potentially. The engine would want to collect that symbol now, but it mustn't, it must actually treat the weak set as a strong reference to that symbol because someone could come along and query the WeakSet and say, is this registered symbol in it, and it must assert true because that's how the specification is to find that these things always exist. It shouldn't have disappeared. so, it only be when these think when the weak set itself is dropped or if it's removed from the WeakSet that. Now, actually, that thing actually can be garbage collected. So this is the big difference from object from these kind of Eternal objects. Is that the WeakSet isn't? Actually doing anything special for those things. Where, as in this case, the weeks out would need to do something special weeks. The WeakSet would actually become a strong set for these values.

ACE: So, as I said, I've kind of been looking implementations and this contentious issue focuses are the kind of issues around the eternal symbols, but that's not to say that that's only thing, that's kind of difficult for implementations. It could be that in certain engines, and I think moddable's XS may fall into this category. The symbols are on implemented with any GC semantics at all. Some engines, Implement symbols using their internal object kind of mechanisms. other engines implement symbols more like numbers. so, in those engines, they would have a similar problem for all symbols. so, it's things like this, that we when we talk about this proposal, we see this proposal as it adds a capability to the language. It's a way that people can write code in a way that they're expressing a certain intent. that then certain engines can optimize for all and run in a very in the most memory efficient way, possible memory efficient here, being Garbage collecting things as opposed to having the smallest footprint necessarily. but it's not a guarantee to just kind of like yeah, similar to if you read documentation on mdn about like finalization registry. The suspect doesn't make any guarantees on you getting finalizers and you're going to get different behavior on different engines. So, we wouldn't expect your kind of everyday JavaScript programmer to necessarily be fully aware and cognizant of utilizing this capability of symbols as WeakMap keys. because it will have subtle behaviors if you're expecting your program to be portable across, kind every JavaScript engine out there, you know, not just the big engines that in every single engine out there. We want to make that clear that we're aware that The implementation aspects of this do go beyond just registered and eternal symbols. There is a larger picture. There. We do think that this adds a lot of value to the language with those things still in mind. That. It's another thing that's potentially obvious, but we think it's great to be clear here. We're talking about how it should behave.

ACE: Now kind of looking at this more from the users perspective. whichever way we go on this decision, and we really like to find a way to move forwards on this decision, is what is the default? And it's less about what is actually possible like this. This decision doesn't really preclude a use case. It's kind of just changes what code you'll have to write to meet your use case. Now, if we say that these Eternal symbols are allowed, then you're someone could get the opposite Behavior. By creating their own kind of wrapper around weak sets, then does this check. Or alternatively, and this is kind of like a pseudo code of what engines would have to do in the other case, is, if we say these eternal symbols aren't allowed, then if someone did want to create WeakSets or WeakMaps, the do just accept every symbol, then they can still do that. They'll just have to again, kind of create their own wrapper that then has like a site set that whenever there's one of these Eternal symbols that you usually wouldn't be allowed. We store it in this other set, so it's we're talking about what? What behaviors you get out of the box, you know what it is compared to, what will people have to? What Behavior someone have to add themselves.

ACE: So that the Champions group, the decision we’re kind trying to encourage people towards. As we think the default behavior should be to throw on these Eternal symbols. Because allowing them is a potential source of memory leaks. Memory leaks are very hard to debug. And, allowing them will add complications to certain engines. They'll have to change their WeakSets and WeakMaps and things to actually have special but handling of these things. So and it if you will do want this, they can still implement it themselves. So that's what the Champions group is leaning towards again, as Robin said earlier, the actual use cases from the Champions group. The main thing we want is for the core use case of unique symbols to be allowed. That's the thing that really opens up the possibilities for us. So, you know, the thing we want the most is to move forwards and we think this decision is the one that's most likely to move forwards on.

ACE: The contention against not doing this, is that we're creating a very kind of public split in the the symbol semantics. You know, it's not as simple - it's simpler to say all symbols can used as weakmap Keys. It's a much longer sentence to try and explain to someone, some symbols can be used, it depends. You have to explain to them about registered symbols and these things, you know, it adds a complexity to the language from one perspective.

ACE: The mitigation, we think to this contention, is that, if we start off by throwing on these Keys, then that then still leaves a path to accepting them later as opposed to allowing them and then trying to back tread and then throwing in the future, you know, think it's easier to throw first and then work towards accepting them. and all we also think that introduction of a predicate so that people can test symbols, so they're know whether or not they'll be allowed, Also kind of should help this world have like a smoother. It should be smoother to think about this. If we actually introduce something some more APIs.

ACE: The predicate we're imagining is like a Boolean predicate. What should it be called? And where should it live? And what we're leaning towards is, it should kind of live everywhere so that this would actually be the same function. Like similar to a nickel out. A good example, and I forgot my head. So these would result in it being the actual same function, but they kind of it lives in different places; it has a different name. Rather than only having like WeakMap.isValidKey() being the way to test. You'd have weakmap. isValidKey WeakSet isValidValue, weakRef isValidTarget and finalization registry isValidTarget as well. So that was also ideas around. Should it be on object that that didn't that didn't fill right in terms of like, what things you should be able to pass to that are living on the object name space or it being just a it not having any name space at all. It just being a completely new Global. So those things were discussed, but we think it would be better to keep them on the kind of weak Collections and the finalization registry on all of them. It kind of seems odd to only have it on one on one of them.

RRD: Yeah, so essentially here, we're trying to unblock the possibility to go to Stage 3 at the next meeting. So the way we would proceed that way is that we would be adding the predicate before asking for stage 3, the predicate that we just presented, in that condition. Like we've added that predicate and defaulting to rejecting Eternal symbols, would we expect blocks at stage 3, with our current proposition? And so if the answer is yes, but accepting eternal symbols resolve the block and not create another block, because again, we do not mind either accepting or rejecting them for our own purposes. Because our motivating, use case is only to use unique symbols, but we do understand that we need to tackle that before going to stage 3.

RRD: So, with that in mind, I will first ask do the chairs how much time we have left on the agenda as an indication?

BT: About 35 minutes looks like.

RRD: okay, so that should be enough time to get everyone and we can get through the queue now.

WH: You talk about eternal symbols, but I'm not quite sure why. I was the one who was pushing back on this, but I was pushing back only on registered symbols as weak map keys. I don't see need for the extra complexity of worrying about what you're calling well-known symbols.

RRD: So, I think that Mark has an answer to that actually.

WH: It's the same thing as trying to use `Object.prototype` as a WeakMap key. It's okay. It won’t get collected because you'll never be able to get rid of all references to it, but it won’t affect garbage collection in general.

MM: So I do have an answer. So object prototype is a great example. Object prototype is unique per realm, if an entire realm gets garbage collected, then the object prototype from that realm gets garbage collected. The problem with the well known symbols. Is that if in a given state of the world, the only references - if a realm that contains what is at a given point in time, is the only reference to something that was defined as a well-known symbol. If that realm gets garbage collected and there are in that state of the world. No references that, well-known symbol, but then a new realm is created. If the creation of the new realm causes there to be a new reference to a well-known symbol where it's the same considered the same symbol, same symbol. Meaning that if the, if the old realm, had not been garbage collected in that you had tested, they would have been testably the same, then it is, it has a immortality that object prototype or anything realm-specific does not have. So, the fact that realm creation effectively recreates it means that the abstract identity can never go away.

WH: Okay. I still don't see the problem.

MM: The problem is that, if I've got a weak map in realm A holding as a key, an object prototype from realm B and realm B gets, garbage collected, then that association gets garbage collected. If it has a well-known symbol from any realm, then that has to leak, it can never be collected.

WH: That's not a leak.

MM: It can never be collected

WH: But that's not a leak.

ACE: I think in practice, it's less likely that the well known symbols will cause the same issue. But from a specification kind of correctness perspective. They in this very very Niche Edge case. do have the same issue. So for the same reason that we wouldn't allow registered symbols. It seems to make kind of logical sense to also not allow well-known symbols. And that is this Edge very very Niche case of the exist, the current realm, you've taken a WeakMap from one realm. That has a well known symbol moved it to this other realm dropped. The reference to the realm. You've dropped all the well-known symbols from your own realm. So now in memory potentially, there are no well known symbols and the engine collects them because has the optimization even for well known symbols neither. As only like 11 of them. Maybe they haven't hard-coded those eleven and they allow them to be collected, but you still have the ability to create a realm somehow because that still exists, you then run realm Constructor. You now recreate the one and symbols and they should now still appear to be in that WeakSet, but they potentially could have been removed from that set, if the engine doesn't protect against it. So it's a, it's a much less likely case than a registered symbol one, but it does in theory follow the same logic.

MM: Yeah. Well, I want also introduced a little editorial note here, which is the committee, including me at the time, made a terrible mistake when we first had the coexistence of registered symbols and well-known symbols, we should have defined the well known symbols to be registered. The fact that there's two separate concepts of immortality is just a mistake. The important difference is eternal versus mortal, and if the well known symbols had been made registered, there would not be a cross-cutting distinction.

WH: OK. I have questions about the boundary. So well-known symbols are defined as things which are on the `Symbol` object…

MM: I would say that's that's the right predicate, that's the right way to write user code to find them, but I would say the definition them should be that creating a new realm. We create yogic that. It's a shared symbol identity between new Realms of new Realms. Implicitly refer to same symbols.

RRD: I mean, in the interest of time, we could agree on our side to give the known list of well-known symbols and and use that in the spec we We wouldn't do that trick. That we're doing here. This is usual in, could indeed. So spec wise, would be very precise. What is in there, which is those Specifically, a finite set of keys. Yes, so I have okay,

KG: Can I just interject briefly? I agree there is like this distinction between well known symbols and eternal symbols, and that we would need to resolve it one way or the other, in some cases, but feel like the registered symbols are the more interesting case and we should address that one first and only then decide what to do about well known samples because as well known symbols sort of fall between the registered symbols and the unique symbols, and we should resolve registered symbols first because well known symbols fall kind of between registered symbols and unique symbols in how Immortal they are.

WH: Let me finish please. I got interrupted a few times. If you enumerate the well known symbols in the spec, that’s okay. But I don't want somebody adding a symbol to the `Symbol` object to suddenly create a new well-known symbol.

MM: Right? Right. It's got. Its got to be a reference to the internal spec definition of the set of well known symbols. It's not based on any one on a user code test.

WH: Okay, I'm done.

RRD: We can continue this discussion and table that decision whether it's it's registered or registered plus well known symbols. I see that Shu also has that topic in later, but I would like to be able to move on.

LEO: Yeah, just want to emphasize that we just want to make this work around to address concerns. For the champions group, none of this will block or improve our use cases the application for what we want with this proposal. So I think if the concerning Point refers only to register symbols. That's also fine. I am pretty flexible here for because what I want is being able advance this proposal. So I think we should also like understand if this concern is like, we should, we should not worry about well known symbols, but stick only to register symbols. I'm fine with. This was just watching as this is a champion, a coach, and owner of this. I think we can move. Ahead, without you well known symbols in restrict. This contention only to register singles.

MM: And yeah, the problem is, we need something that has consensus. Yes. And for me, it's very clear that the important distinction is eternal vs. non-eternal. The important distinction is not registered vs non-registered.

LEO: Yeah. that was the understanding like, from the Champions group. That's why we are also adding well known symbols to List, we were never like, in my perspective. I was never seen as being like the number of symbols in stick to that, but just the fact of liveness is compromised and not by the numbers. but the liveness of like one symbol can be compromised but that's it. Like that's my that was my understanding that were how we are trying to address. This may be the co-champions, my have a little different perspective, but I'm sharing my I just want to make sure like tell everyone, We are flexible. We want to move this ahead. The concern. we are trying to is Is the actual use cases in, which this restriction is not like an improvement or blocking for any of our applications?

MM: Okay, so I regret needing to bring this up. This was a an internal discussion at Agoric discovered this problem, which is that given that we make the Mortal symbols also be valid Things to have a weak reference to so that the whole Weak reference finalization, finalization, registry system makes garbage collection observable. We've now introduced an amazing side Channel. Through the collector. It's it was already the case that when we introduced weak references and finalization, We first proposed that a weak reference in one realm, can't observe the garbage collection of some of an object or another realm that the that the cross realm weak references would be strong. That lost because of objections from implementers, which I quite understand, and and we've been living with that. So if you allow a object reference to be scared, be in two Realms than the dropping of it in. One realm can be used to signal code in the other realm through the covert channel of the code in the other realm uses, a weak reference of, in final position and, finalization registry to observe its collection. shadow realms essentially plugs that side channel because there are shared object identities [lost connection…].

MM: Yes. Okay, the so mortal symbols are as weak map keys. Does not introduce a covert Channel but mortal symbols as something you can have a weak reference or, or find use the finalization registry to observe their garbage collection. What that means is that suddenly we've we've reintroduced covert Channel. In a way, where it can be used to communicate even between Shadow Realms. Despite the fact that the shadow realmboundary has completely plugged the shareability of object references. So the unpleasant solution, which I want to put on the table, but since we're not seeking stage advancement right now, we don't have to come to a conclusion on it right now The unpleasant solution is Is Mortal symbols as WeakMap keys, but continue to prohibit them as things, you can have a weak reference to, or observe their finalization on

RRD: We need to discuss with the champion group if that's an okay compromise, what about eventually? Disallowing? Yeah. Okay. We need to think about it. Yeah, this is this is surprise.

MM: So I think Let think that's exactly the right answer.

RRD: For the exact use case we're talking about, we don't need requests and finalization reaches tries, but I still need to do, we still need to this?

SYG: Yes, I have a question for Mark. I'm on. I am also on the queue. That's the next response. I'm not sure that the that the property you want that because you cannot directly intertwine object graphs between a shadow realm and the Creator realm. that's it is impossible to observe GC. As the callable boundary exists, so you can still wrapped functions. So, From within the shadow Realm. If a function has been wrapped on the other side, the create around the creator realm, has a strong reference to a thing, whose wrapee is a function in the shadow realm, the shadow realm can and find the shadow realm has no strong references to that wrapped function, only we can write like, the GC is already still entwined.

MM: You're correct.. And that's a good point. It's kind of - I'll just leave it as you're correct and the discussion about this should definitely take that into account. The answer might be under discussion. That we're not weird. We're not reducing security further than the status quo. And I certainly won't argue with that status quo. So, yeah, so let's continue that discussion separately. But thanks for that point.

JHD: Yeah, so I had a couple points I wanted to make. Throughout these discussions (not just today), people have talked about collectability - the spec doesn't guarantee collectability, only observability. So I feel like if you're writing a program where you care about collectability and GC and memory and stuff, you already are being careful about what you're creating and when and how you're managing things; maybe you're doing advanced stuff with `FinalizationRegistry`s. Adding another item to the existing long checklist doesn't seem to be that big a deal. The other point: when you showed those alternative classes (a couple slides before this), it doesn't make sense to me to have the base class limit what it can take and then try and expand that in the subclass. It seems more appropriate to me that the base class is unlimited and the subclass is where the filter is added. To me that reinforces my position, which is that I think that ether all Symbols should be accepted or none. My next point is that I think the predicate is useful regardless. I think whenever we discover as a committee that there is a semantic that the people in the community need and are using in their programs, and then the way that they're representing those semantics is something that doesn't entirely match it or that matches it by happenstance, then, it behooves us to provide a semantic guarantee. For example, “it's an object” happens to be the predicate for determining if something can be weakly held or not, but I think it would be much more appropriate to provide our own predicate that we as a committee can evolve if and when that semantic evolves. So I do hope that predicate lands, unrelated to the progress of this proposal.

WH: We should not Implement problematic behaviors and having registered symbols as WeakMap keys is problematic behavior. For at least some implementations, it defeats garbage collection optimizations.

JHD: The spec doesn't guarantee optimizations.

WH: The spec doesn't guarantee any GC. But an implementation which lets you sit in a loop creating objects and discarding them and run out of memory doing that is a bad implementation regardless of what the spec says.

JHD: and similarly speaking a program that unbounded added registered symbols to a weak collection, would probably not be a great program regardless either.

WH: I disagree. Let's move on.

SYG: I think I strongly agree with WH's point there. I don't. think that the, I mean, if the argument is - I didn't quite understand the argument there. You said two things stored in one is that either all should be accepted or none, which is an opinion. I'm not sure why that's an argument. And the other one heard was base classes should be most accepting and then further, restricted, behavior and subclasses, but week maps are already restrictive today that's the base class. And that it's arguable that someone we may want to use the weekmap thing that is week on object keys today, but strong on all primitive keys and they are certainly welcome to extend weak maps to do that today and I don't see why that's thing. We should not let happen as a language design committee. Well, so, I don't quite understand the second argument either.

JHD: I mean users can make their own classes that extend or compose weak or strong collections already with or without this change, right? No action of ours can really prevent that. If we expand the base `WeakMap` class to accept symbols, and then a developer wishes to only accept objects, then they can make a subclass that redefined the add method or the set method that imposes that restriction. Alternatively, if somebody now wants to have Symbols supported then they would have to make a subclass and override the add or set method and strongly store those. To me it feels like the better design to have the to end up in a place where if you want a more restrictive set of input you use a subclass to do that versus using a subclass and composing some entirely different data structure in order to make a more expansive set of input.

SYG: That is not a design goal that I think a language level primitive or API ought to have. I think the only design goal that I think we ought to follow here in that scope is that they are able to do something in userland to work around their issues whether that be more expansive or more restrictive.

JHD: I agree. I'm stating my opinions, but I think to me it's all tied together that I don't think that we should differentiate between kinds of symbols. Currently the lifetime of Symbols, or the cross-realm-ness of Symbols, is not something that developers have to think about, and I would argue is not something that they do think about, and I think that it would be unfortunate to force that knowledge upon the common developer for the edge case of caring about collectability when you're using an unbounded set of registered symbols weakly, which is I think we're talking about an infinitesimal probability percentage of an infinitesimal percentages of use cases.

SYG: I'm just missing steps in the argument because like if That's what you said. assume. That folks are using register symbols, like a register symbols themselves are exceedingly rare to begin with. What is it matter? What we do here in terms of the end developer. To learn. like, if most - if the overwhelming use of symbols are what's called mortal symbols in this presentation. I guess I shouldn't say Mortal symbols, I imagine there's plenty of uses of well known symbols at least implicitly, but explicit use of symbols are probably mortal symbols. So non-registered, symbols, then they don't have ever have to, like, really learn the lifetime. Different subscribe because it's doesn't come up there trying to put registered symbols and do we collections begins?

JHD: I've seen it as a mix where people choose one or the other and don't necessarily care which one they're using. And I have asked people why they chose one or the other and they don't necessarily know - some of them have the correct answer that matches the semantic differences but much of the time they just are following an existing example they saw somewhere else, they don't know why. And so I think that the usage is common but caring about the differences is rare.

SYG: I see. Then my response to that as as if that's the V8 person, I guess, is that? At currently registered symbols in V8 do just leak forever. We don't have this optimization that SpiderMonkey has so I mean from that point of view. I think it behooves those developers to probably learn the difference between about for and unique symbols. Any way we can move on with the pieces.

YSV: I'd love to talk about our implementation because I'm pretty sure we do not garbage collect registered symbols. I'm pretty sure they hang out forever and we The string to live forever. So I think the, what was being observed as a GC was probably GC and other items. I will check that in our implementation tomorrow. I'll get the test case from Ashley and make sure that that's the case. But from our side, we do not have as far as I know an optimization that would block this. But I understand that there are other concerns here that are unrelated to this.

KG: So, this is just a brief response to JHD. You said, you see users using registered symbols who don't really understand what they're doing. I am not super concerned with making the experience of those users as painless as possible, and I think I agree with Shu that like registered symbols and regular symbols, really are different kinds of things and the fact that some users use them interchangeably because they don't know what they're doing is not all that compelling to me.

JHD: Yeah, I mean, that's fair. I find it equally uncompelling and don't find it important to make things easy for people that are already doing hard stuff to manage memory and lifetimes. I think that it's fine to add another item to the checklist of stuff that they have to do.

RRD: I guess the main question I have for you to reason is that if we were to go with rejecting Eternal symbols, would that be OK with you being the, we still have the option to try to introduce them after discussing more with the committee with I think I think that we should not get any more granular than the type of thing and symbols are one set of things.

JHD: So I would not be comfortable with allowing a partial subset of Symbols, to be clear.

RRD: So to be clear, you saying, you're stating that you're going to block if we differentiate the symbols. Yes, okay, noted, we will need to resolve that because yeah, this is going to be an issue. I'm less variability.

MAH: Alright, so basically I'd like to answer JHD and I've already expressed argument before and in the issue, currently this the fact that there's a value that has the same type of and that has different. Your regarding garbage collection is restricted to this unique symbol Eternal symbol in the future. There will be records tuples and [ audio cut out… ]

[Everybody suddenly dropped from the teleconference. Waiting for folks to get back in.]

MAH: So I'll restart. So this is an answer to JHD’s point that it doesn't no one values that have the same type of to have different behavior through those weak collections. If we look in the future, when we're going to have records and tuples, records and tuples that do not contain any kind of symbol or completely forgeable. They can be built up. From all the strings and numbers, and other printed that they would contain, and they would also have a different behavior under weak collection and garbage collection than records and tuples that do contain unique symbols. I'm not going to get into the registered or not, if they contain a unique symbols. Did we get a composite ID identity from those unique symbols, and they would be eligible for being keys in a WeakMap. So we will have different values with the same type of, that would be eligible or not as weak my keys in the future. Based on that, I really don't think it's that much of a stretch to have different symbols the same way as long as we have a predicate to test all those values.

JHD: Just to clarify: you're saying that a Record and Tuple, without a symbol, will not be able to be used weakly, but a Record and Tuple with a unique symbol will be.

MAH: correct.

JHD: I mean, that doesn't sound great to me either, so I'll have to think more about that.

MAH: missing my point. is that type off is not the correct discriminant for testing those things and it shouldn't used at all. And that's why we need the predicates.

WH: Are you suggesting extending the predicates to cover that case as well?

MAH: Yes, very much.

RRD: Yes, it would definitely.

WH: Okay. Yeah, sounds good.

JHD: I would like to see the predicate land for all sorts of reasons including this regardless of how fast this particular proposal advances.

RRD: could we request a continuation tomorrow? If that's possible?

BT: It should be possible. We'll get back to you at the time. Okay?

RRD: Yeah, let's then if we okay. Let's do a quick temperature check just to have an idea in general for everyone and we do know that there is potential work if we had restrictions but the options for that temperature, temperature check would be the heart would be no restrictions Plus would be No registered symbols, Symbols,
the eyes be no registered symbols or well known symbols,
and the unconvinced one. The last one is will block regardless. even if we do have or not have restrictions in place Actually probably we don't need to minute the details of this add a legend somewhere in the chatter. Yeah, let me try to do it in this queue entries. I think that's the most accessible sometimes. Okay, Trent reason I'll do that and do that. Just Okay. Do you want to have pizza just while Robin puts the things in the key? Yeah. Yeah, we can that.

PHE: Thank you. So my I'm trying to understand how this will be used. And I, main I talked about implementation complexity for excess to garbage, collect symbols, would be a big deal. It would be a lot code, a lot of work and it would increase memory use. So it's not super exciting from the comments. I understand that Mozilla and Google's engines, don't garbage collect symbols at this time either. So, I'm sort of taking from that. I'm not sure what to take from that either that this feature that we're contemplating adding of symbols as weak map Keys is useful and valuable even on engines that don't collect keys, or adding this feature, which seems possible will increase the use of symbols in a way that might necessitate implementing garbage collection of symbols. And I'd like to understand that better before we get to stage 3 because the the relative effort to implement is considerable.

SYG: Both V8 and SpiderMonkey collect symbols, but do not collect registered symbols gotten by Symbol.for. Is it the case that XS collects no symbols, whether they are from Symbol.for or just regular new Symbol symbols?

PHE: Yes, that's correct. Okay. And to be clear, I'm not saying it's impossible to do, But it is, it is a pretty big. It's a pretty big change because the implementation is very much optimized and very lightweight because it doesn't have to think about that. Just respond with exhaust, the time bikes. Just a couple words if need to.

ACE: I just spoke to Peter. What I said earlier of the thing with this proposal the intent because the alternative is a guaranteed leak of using something like strings to do the mapping. So yeah, we appreciate that in some environments. It would leak. The idea of using symbols, is that it's a signal that engines, could try not to leak versus the existing status quo, which would be a guaranteed leak in every case.

BT: Right, we have to move on to the next agenda item. Do, did you get what you needed from it? Yeah, I can't.

Results of straw poll on which symbols can be used as weak map keys:

All symbols: JHD (and Jack Works, added after the meeting)

Only non-registered symbols: Waldemar Horwat, Justin Ridgewell, Shu-yu Guo, Kevin Gibbons, Ben Newman, Caridy Patiño, Daniel Rossenwasser

Only non-registered non-well-known symbols: Mark Miller, Luca Casonato, Mathieu Hofman, Richard Gibson, Willian Martins, HE Shi-Jun, Chip Morningstar, Bradford Smith

No symbols: (no one)

Indifferent: Robin Ricard, Rick Button, yulia, Rob Palmer, Sarah Groff Hennigh-Palermo, Philip Chimento, Sergey Rubanov, Ashley Claymore, Tab Atkins Jr.

### Conclusion/Resolution

- None

## Reversible string split

Presenter: Luca Casonato (LCA)

- [proposal](https://github.com/lucacasonato/proposal-reversible-string-split)
- [slides](https://docs.google.com/presentation/d/1g1vgp8vTs_romhA29N2MHKz47UhgwOPnXpKGZOHEwyQ/edit?usp=sharing)

LCA: Cool. I'm just gonna introduce myself real quick because I assume most you will not know me. I joined TC39 last December. My Meeting. I attended I work on the deno project. We're building a server-side JavaScript runtime similar to node.js but with a focus on web platform compatibility and modern JavaScript features. So, the proposal presented today is a reversible string split. I will start out real quick by explaining what the current JavaScript's behaviour is, then I’ll go into the behavior of other languages, then what reversible string splits actually are, what benefits they, and if we could add them to the language. So the current way to split strings in JavaScript, is the String.prototype.split method that takes a separator and an N value which specifies how many values to return. This n value both specifies the amount of splits that happen and the amount of items that are returned. So for this string here, ABCDEF separated by pipes with an N of 2, you would split that into two items and and two split points at index 1 and at index 3. Many other languages have different Behavior. Namely, the behavior is that I'll just go through them real quick. They all have the same behavior. The behaviour is that the split count is n minus one times and the return count is n items. So if you split with n equals two, that will return two items like JavaScript does, but only a single split is performed. Which means that the last item of the returned values is the remainder. Python is a little bit of an exception here. It also returns the remainder but here, but it considers n to be the split count rather than the number of items returned. So it returns n plus 1 items. But really, this is the same thing as the other languages, just n is plus 1 in all cases.

LCA: So quick summary. All the languages return a remainder. This split count is 1 less than the return item count. Except for JavaScript which Returns the same amount of items as it does splits, so it doesn't return a remainder. That means that all languages do reversible splits. So their splits can be reversed losslessly with a join. So for any string V and any separator S and any unsigned, nonzero integer n, you can reconstruct the original string by joining with the separator again. The reason JavaScript cannot do this is because it does not return the entire remainder in its last item.

LCA: What are some benefits? Prefix splits are very common, where you want to split at one specific character, for example, so you have a .env file, where you have a key then an equals sign, and then a value and where the value could also contain an equal sign. You don't want to split at every occurrence of the equal sign, but only at the first occurrence and you want to ignore all other occurrences of that. This also happens very often with filesystem paths, or URL paths. Same thing for cookies, HTTP/1.1 headers, and mime types. There's a bunch of cases where you split at a single character. And that character is only valid as a split point the first time it is encountered and not any subsequent times. Currently, this is relatively unergonomic to do. You either have to use indexOf to find the split point, which is relatively trivial to do if you're only splitting once. But if you're splitting multiple times, you have to put this into a for loop, you have to keep track of where you're splitting from. It’s easy to do this incorrectly. And we obviously requires tests. The other option is to do an unbounded split and then join back the remainder. This is actually very common pattern, but obviously not very ideal. You're creating this intermediate array and are doing a bunch of work, figuring out where to split in the first place, even though you don't actually need to. Here's an example of parsing an INI file. In that format you have multiple lines and each line has a key and value separated by an equal sign. [pointing to example] This is the common pattern that many people use and with reversible splits. This could be much easier. You can just say, I want two items and then the second item will always be the remainder if the remainder contains another equal sign.

LCA: Another benefit is the familiarity of reversible splits. They are the standard in most programming languages standard libraries. C#, Java, Python, Go, … all of them. You name it. Another issue is that JavaScript’s special behavior catches even the most skilled JS Engineers off guard. Surma, I think most people know him, is a very skilled JavaScript engineer. He was caught off guard this and if you read through the comments of this particular tweet [pointing to slides], there were a lot of people which were surprised by this behavior, too. And you can actually also see this in real source code if you go to sourcegraph and just do a search of how people use split. You see that a lot of people aren't aware of the N argument to String.prototype.string or how it works when doing a bounded split. They will do an unbounded split and then do a slice on the result because that is how they would do it in other languages. If they want to do a split on the first item for example, or just the first two items.

LCA: So, a quick summary of the benefits, many tasks that people currently do use unbounded split for are a lot easier. For example, these prefix splits are not always just two items. You can also split into three items. Let's say or four items with separators, but the key point, is that the remainder may contain these separator and you don't want to split that. Additionally it’s very familiar to many developers and is the de facto standard in many languages, essentially all languages? I haven't even found a popular language where this is not the standard behavior. So, what I'm tentatively proposing is to add a String.prototype.splitn method. The name comes from what Go and Rust do. And it essentially does a reversible string split with n minus 1 splits, in returns N items. You cannot call it without specifying an N. So if you want to do an unbounded split you will still need to use String.prototype.split. Pretty self-explanatory, this behavior. A little FAQ item: could this be an option on the existing split method? Yes, it could, it could be an extra argument to split. That could be remainder = true or reversible = true. Out of all these alternatives I prefer the last one, but there's I think there's an open issue on the spec repository (issue 5) if you're interested in some of the discussion here. Another open question is regex separator support. So, split currently supports regexes in its separator, and if you put capturing groups in that Regex those capturing groups are actually expanded into the return array. And if you do a bounded split with a regex seperator, then those regex or those expanded capturing groups are taken into account, when determining how many items to return. The question is should this be supported? Can capturing groups be folded in without breaking reversibility or should this capturing group fold-in Behavior, not exist at all? The other open issue is, is having two split methods confusing (issue 6)? We see this with String.prototype.slice and substring and substr for that often. People don't know what to use. They look it up every time. So maybe having a more descriptive name would help on that front, or alternatively should this method not exist at all and should really what we should be telling people is to just use a regex for prefix splits for example, this is valid thing you could do. And another open question is what actual Behavior should this ‘n’ argument have? Should it behave like Python where N equals the number of splits, or should it be like other languages where n equals the number of maximum return values. The current JavaScript behavior is where n is equal to the number of splits and the maximum return values, but that is what breaks reversibility. So it can't be that: it needs to be one or the other. There's an open issue for that too. Yeah, that's the proposal. Are there questions?

LEO: Yeah, just one thing if that actually moves on which I'm quite like positive. Okay, but we will probably need some bikeshed for the names just for the considerations and probably compatibility check otherwise. It seems, okay. We have precedent for it.

LCA: Yeah, I'm not locked in on a specific name. That was just what other languages use and that some people may be familiar.

SYG: I don't quite understand how this solves the original issue, is we behave differently than the thing named split in all these other languages and that is that trips folks up. So because that is our split remains that thing that trips people up, right? We're not gonna be able to change that

LCA: Sure. Yeah. Yeah, that's obviously concern and and there's unfortunately nothing we can do about that. But, having this alternative behavior if people search for split in their IDE for example can type in split, and they'll get this other method and that may prompt them to think about what behavior they actually want. There's two split methods that might initially confuse them and think oh why is there two split methods? And then they'll look at the documentation and see that maybe the they wanted is actually the splitn behavior. So yeah, this is obviously a concern, but I don't think we should block improvements just for the reason that we cannot change the original behavior. So, because the original behavior exists, we should add a new maybe better maybe more user friendly behavior. And im not specifically saying this behavior is better. I'm just saying this behavior is more familiar to many people I think. I do think this is a valid problem.

JHX: Yes, we discuss this proposal in JS IGB meeting last week, and it seems that many participants even if they are experienced JavaScript programmer for many years, they don't know split has an optional argument. So adding a new method, which the name indicates that it can with splitn(). I think it may solve the problem.

LCA: Yeah, this is. let's see rust. I think that's the same thing where you have a split method and a splitn method, don't quote me on that, But I think I remember that's how it works. Where one is bounded and the other ones is unbounded.

RW (via queue): "Simple investigation shows that many devs don't know split have an optional arg " What investigation was that?

LCA: and Rick that investigation is, let's see here. If you do a SourceGraph search, you'll see that many people will do an unbounded split, and then do a slice from 0 to n, rather than just doing split with the n value which would be the same thing and with the current behavior.

RW: Is that the thing that JHX was referring to?

LCA: Yeah.

MM: I just wonder if WH remembers why we did it the way we did. And was there any reason to do it that way rather than what's being proposed?

WH: No, I did not work on `split`.

JHX: In previous. JSCI meeting. Also. Someone ask though, why the split behave like that and someone checked some old browsers, and it seems this is added in ES3. And it seems some version of Netscape added this and it did not exist. In JS1 or JS2.

MM: Okay. Thank you.

JRL: Okay, starting with the primary thing that I see split used for, is they don't actually care about everything in split. They care about a particular index. So they're making the split so they can get the array and immediately accessing a single index of the array. So they want the first thing up to the equal sign or they want the second thing after the equal sign and they care about nothing else. I'm curious if the need that we see for split-n is because they want a similar behavior for a split[index] and they can't get it with split, or it's difficult to use split correctly because it's different from the other languages. And if instead we tackle this as getting a splitAt() or some other named method that extracted a particular index of the split without actually creating the array as an intermediate, if that would solve the main use case that people want.

LCA: yeah, I think that would solve a use case, or at least, there's can be use case. For example, you just want to get the key for a key value pair that separated by an equal sign. But let's say, you want to get the actual value here and not the key. It would not solve that use case because for that use case, the current behavior is insufficient because you can't just get the second item (so index one of the returned array) because the value may contain another equal sign. That's this prefix split issue. That would need to use the split end for like a reversible split. But yeah, it for specifically the scenario where you just want to put once and get everything before a given separator one. Could imagine that an additional method is added? I don't know prefixUntil or something. Something of that nature that returns some string, value up to a separator.

JRL: I hadn't considered the case where the value had an equal sign in it as well. So that's a good point. Okay, great.

JHX: Yeah, I want to show my strong support to this proposal because I have been caught by this several times. My use cases. I want to split several. That's a part of the string and I want the remainder, and deposits in some other. Legs, But it's the current split is just useless as the current behavior just you spitted. It's all and you slice, it. It's behave like, like, that but I don't think it has any usefulness. So I strongly support this proposal and especially the split end of a separate massive because it's also, so solved visibility are often. Like I said before that, many people never know you have the second optional parameter. Personally I slightly prefer the Rust version where n is the first argument. It might decrease some confusion, with the original function. So a generous support that. Yeah, Yeah, that's it.

MAH (via queue): +1 to the proposal

CM: I kind of like this except I hear echoes of `substr` versus `substring`, where we ended up with two different functions with almost the same name and subtly different semantics and they sit there in documentation introducing, as I think SYG pointed out, a discoverability issue. It leaves us with this situation where you have this little bundle of confusion that gets introduced to people who are learning the language, and it adds to the overall complexity cost that those people have to suffer. I'm genuinely on the fence whether the modest improvement pays for this cost. The newer function, in both cases, has what I think are clearly superior ergonomics, but I'm not sure that pays back the additional cost in confusion to people who are learning the language. And when I say “I'm not sure” I genuinely mean that as I'm not sure, and not that I oppose this, but I think we should be factoring that cost into our deliberations.

PFC: (via queue) “Agree strongly with CM's point about language learners”

LCA: Yeah, I generally agree. I think it's very important that we consider that this doesn't confuse newcomers to the language. I think if we could come up with a very descriptive, clear name, maybe 'splitn' is that name? I don't know. Maybe some folks have better suggestions, but if we could figure out some good way of if we say splitn is a good name that describes what the function does well, then I think with substring and substr specifically, like one just looks like a shorter version of the other and they don't really the name that specifically say that they have any different Behavior right now. So if we can encode the difference of behavior into the name, that may help with the confusion.

LCA: Then I'd ask the committee if you want to push this to stage one. Are there any objections?

MM: while I agree with some of the discomfort, for stage 1 I think it clearly qualifies. I support for stage 1.

WH: I support this for stage 1.

LCA: And I don't see any other objections. So thanks. That's that. Yeah, thank you for that.

USA: Rob. Mentions plus one for stage 1, as well as lie on the chat. So thank you very much.

### Conclusion/Resolution

- Stage 1

## Class brand check for Stage 2

Presenter: John Hax (JHX)

- [proposal](https://github.com/tc39/proposal-class-brand-check)
- [spec](https://tc39.es/proposal-class-brand-check/)

JHX: Okay, Okay, let's start. Hello everyone. everyone. I'm Hax. Yeah, now 2022. So it's time for stage two. Yeah, here are the links that explains of this slide and the proposal repo and the spec text. And I also have a presentation script, which were written in by language. So so you can check that script, if my presentation is not very clear. Okay, since their class branching proposal enters stage water year, 2 new, TC39 delegates, [sweet angel]? and [to channel]? have joined as co-champions. Both form pythons, which join alkmaar half year ago. Okay, I'll completes the initial spec text in the to share our home countries, the bubble implementation. And JWK provides the initial typescript implementation the joint efforts of all the prior military(?) spec text combined with the feedback the transpiler increment. Since we have exam, the manner of the core issues and refined semantic details of this proposal here. Here are the issues and I will go through these issues later. At this meeting. We hope that the committee will allow this proposal to advance to stage two.

JHX: First, a recap of the proposal. This proposal propose a new syntax, class.hasInstance check whether the value O is an instance constructed by the class in the nearest lexical context. the concept and the use case of this is very close to run time type checking of objects in other programming language. Typical uses is as follows in. For example. This is a very simple example, it's a Range, so it would use an immutable pattern, so you can, if we ignore the other part, we write an equals() method that we check whether our the that is also our range. If not, we return false. or we just compare the fields and give the result.

JHX: The motivation when entering State 1. It's General 2021. I have already elaborated on the existing ways of checking instance, including `instanceof` which exists since the early days of JavaScript, which is based on the prototype chain. So, even if the result is true there's no guarantee that is really constructed by your constructed in the past. Also, you can use WeakMap WeakSet manually and adding Brands to every instance. This is possible and has maximum flexibility, but require some boilerplate code. However, many JavaScript developers are not familiar with WeakSet API and them more importantly, most JS developers do not understand the Concept of brand. So this pattern is only used by a few Advanced developers in the world. In addition it was mentioned some data starts weeks at implementations in Kirk engines, may have GC effects and performance different from properties of fuse improve objects, which may also cause some developers to abandon this pattern. so, with the addition of the private fields feature, feature, developers can check instanceof in an interactive Way by accessing private fields leave age of somatic, effect of the objects, which you do not have class specific private fields, which trigger TypeError. However, this model needs the bolierplate code based on, try catch. And by its very nature, an abuse of private fields. as problem from problematic, for both eligibility, eligibility and it's maintainability. I don't think meeting last week and asked for your January private-in-in proposal, which is extension of the private fields, masses and others. And to stage three hand with these proposal went to stage 4 last year. This proposal makes it easy for developers to check if private atoms exist on an object to. So you can also use it checking instanceof. although the proposal where a limit to the try cash, but other problems with using private fields to check whether and instance is constructed by the constructor do exist

JHX: So here are some simple comparisons between them first in the mental models class hasInstance, is literally means checking whether object is an instance of class and privately in. Oh, that word means checking whether object O has a private name. Although the facts were similar there, Of course, significant difference in mental models the formal reflects the general concept of OOP, which is common all or programming language for application. Developers are accustomed to this mental model, the existence checking of some private name. does not match and express the high-order intentions of the developers. Well, the property in reflect the brand directly with the cola private name, but it should be clicked collateral would clarify that, although, the, this proposal called class-brand-check, it's more for the purpose of naming, the proposal based on the terms that JS will not has established. Well, the reality is that brand new track, and not a concept that JavaScript developer and the even the Larger community of programmers, has a common perception and understanding to the best of my knowledge is concept of brand. Is rarely used by other mainstream program language coding communities. So although it seems possible to express the concept level brand directly with the code level private name, It does not Necessarily match the programmer's mental model.

JHX: Yeah. Of course, in some certain scenarios are the ones that developers may want to accurately Express and control a piece of code depending on certain part of private elements. Class has instance, may not may also mismatch the concept of model if the heart is such requirements, these cases usually involve the override trick to install private data for arbitrary objects. And some developers May treats private in OS deprived of version of duck type check. However, we believe that that subject is more and alternative to interface between acquiring, but not a good option to to concrete class checking. On the other hand developers are taught to use duck type check because instanceof has cross-realm issue, which was a big pain point in the early days of the web when iframe was popular. or spring, basic type Checker inherently cross green. All cross-realm may not be the major issue in web development today. the long-standing Territorial and the documentation legal Singh has a large JavaScript developers to establish that duck type check equals to Cross realm. Wow, private-field-in looks a lot like duck type check is Delta cross realm. So so the deck off Private in looks very like the attack off. The key in but it works and it works differently the possibility of such false expectation. It's not thought of, but of course, it's probably not a good person. on the other side class.hasIinstance strongly leads to a class based rather than Proto based version of instance, of upgrade the floor model, jump more than JavaScript in the Likely to create false expectations of cross realm. first, heuristic instance, tracking and individual private element checking which mental model is broader and more universal. Perhaps question that cannot be fully agreed upon the community. the committee should probably remain neutral on the matter. I and the other champions of this proposal based on feedback from our companies and communities believe that believe that holistic instance check is more Common and useful for the average developers. At a minimum It should have the same level of syntax support of the individual private element existence checks. and in practice, there are some difference, in other cases, using the private-in requires the introduction of private elements even if the class itself, do not have the requirement of having the private. Instance checking and hard parts are not necessary to really to be introducing hard private such as converting the public diffuse into private Fields accessor systematically. Difference and just risk risk, a breaking change, which easy to ignore. Secondly, because the field initialisation might fail and object might be in a situation where it has some private elements being installed and the some other part of the elements and fields are not all those constructive fails directly When field initialization, fails making it difficult to get such an incomplete object directly through the mention the [override] return trick, as well as some use cases such as the parent class, cash in the ink instance. You can actually get such broken objects. For these reasons in the end relative reliable pattern based on existence check of private elements is not a very nice pattern, especially when reading The Branding that code you happiness. See is Declaration. Of course if you can ensure that Branding is always the last field we can move with Ambassador afterwards, but we have many fields. branding will be in the middle of the class. I'm not sure which is worse the The middle of all bottom, but open, obviously, the ideal place for branding will be at the Head of the Class. and, well, when the Constructor fails is still possible to get the broken up should whisper and in many cases. So, we don't always need a very perfect solution, but in terms of insurer instance, very pretty the floor. May eventually Force develops back to the more lengthy manual WeakSet solution. this is a example. That's it. You may use a parent class cache that instance and it cost the, the ecos should not true. But actually you couldn't make it true. So, based on these consideration would be that one either. Either some, some of the other books solution for checking cross-realm sense. not only in mental models, but also in practice.

JHX: Here are some semantic details we explored. It's brought here for important issue. The first one is when to install the class brand. you can check the this issue for the details. Basically, there are four possible timing, but the first is impossible in JavaScript, and finally the champions choose the fourth one, after the return completion of the constructors. So if constructor throws the brand will not be installed. We choose this time because it makes sure the object is fully initialized. And in addition consider e already have private-in. You can always use it if you really want the other timing. At the end of control, this timing is much trouble to do manually because Constructor can have multiple Returns.

JHX: The second issue is about so whether the class has instance to the function with just a function like and we, we like to choose functional like because the functional objects, you need to specify the nameless and even the behavior of whether it accepts this argument. but if it's just a function like syntax nothing to worry about and these things do not add any benefit. So we now have meta property, which looks like property, but not a function like import. I'm not sure whether we can quite function and now the math method, I look like a method the but it's not a method. It's just a syntax.

JHX: The third one is The behavior of eval. Obviously. first one should always work and the second one should throw syntax error, if there is no class outside, but what about this? Because the class only have the brand if the we can static check it how contains class.hasInstance call. So, it's a question of what it returns. We would prefer it to throw a SyntaxError. Oh, but there are another case that it have the static class hasInstance. But also will, this is really a trouble one. Currently, the champions like to also throw type, sort of syntax error here to Simply simplify the case or the developer may be confused that sometimes it's so simple syntax error sometimes and not.

JHX: and the next is the syntax problem. The class has instance access to have overlaps with RBN's Class Property, access expression, proposal. And Ron said that he will considering visiting that proposed syntax to allow this proposal to move forward and reserved class-dot-syntax for other possible matter properties of methods. and the spec taxed, which stage 2 require: it's hard to read spec text and even harder to write spec text, Especially this proposal. There was such important mechanism, has objects and classes. This is the first time that close Kon and I have written such a complicated spec. Again, we said RBN and because we learned and copy the manager of the spec text of, from the Class Property access expression, proposal to our earlier version this purpose, in spite of our best efforts. We are sure that if there will be some mistakes. I hope you help us to correct them. Here is the spec text. we add other slots, called class Brands, which is a list of credit Casper and and we also add slot slot After the function. The function will have a class brand and When when Constructor it kills, it will check if the path brand is not empty. It will add The brand to the class Brands list of the object. Yeah, there are also here is the syntax and The runtime see is first to check if the instance is an object and then it's use the get class environment to gas the branded class. And if, the place Brands include that brand never return.

JHX: So, so summary, there are summary here that we add a class has instance call and add a class Brands slot and the cost for an assault on the function. And special thing we add causing environmental record because currently it's just a single normal declarative environment record, and now we add a class environment called, called, which how class Constructor field which you can use it, too. Class. so, if we can advance to stage 2, we will continue to refine the spec text and we will use the transpires to exploring old cronikeys and we hope to get the user feedback from the, for example, the bubble implementation. Okay.

SYG: Yeah, so for the eval question, I think the precedent is certainly that it should work inside direct eval. As for your implementation concern that it wouldn't know statically to that. We have to allocate the brand, There are other cases already like super, which works inside direct eval. That causes extra allocation to be made to store the home object for instance on methods and eval just pessimizes everything. Which we assume that super is used inside eval if eval exists. And similarly for this we will have to assume that the class brand is used. So I think it's theirs. It's not really an issue in that It doesn't make the situation worse than it is today.

JHX: Yeah, actually, there are proceedings that includes import matter which cannot use the eval in any context. I think it's made based on some other reason, but from the developer's perspective, it looks like it's just you cannot use it.

YSV: So reading the the way that it's described in the spec. Also, I believe your polyfill does the same. It appears that this is syntax sugar on ergonomic brand check. I would like to see some information about how that's doing in the wild. Have you taken a look at that so far? Do we have it that data anywhere.

JHX: First, it's not the syntax to her because currents would truce the install the brand at the end of the constructor. This is what you can't catch from the private field. and I think, and we think this is in the most cases people want such Behavior.

YSV: Does it significantly change the kinds of work you could do with this that its installed at a at a different point?

JHX: Yeah, if the constructor throws that the behavior will be different, right?

YSV: And in that case ergonomic brand checks would work. But this wouldn't, right?

JHX: Yeah, in if that happens, the private fields may already installed on it.

YSV: Right. Well, that's what I'm getting at. So, all cases that can be covered by this are already covered by ergonomic brand checks. Isn't that right?

JHX: Sorry, I don't get the question.

YSV: So like all the cases that can be expressed by this can also be expressed by ergonomic brand checks. Is that right?

JHX: no, maybe I try to let me, let me explain?

YSV: I'm rephrasing, All happy path Versions of this can be expressed by ergonomic brand checks.

JHX: Oh, you mean in the common cases, yes, I think we in the common cases there might be not have no much difference,

YSV: Great, So what I would really be interested in seeing is interest in this feature that we've already shipped because there's such a similarity between the two of them. I would just be interested in understanding what uptake we have and how that's doing in the wild so far.

JHX: Okay. I think, yeah, I think maybe. Well, we’ll have the Babel implementation land soon. it may be better to collect some feedback from the users.

YSV: Yeah, we can also do something like, you know, looking at what the uptake is generally among developers and what problems are they solving with it? Are they having a difficult time with solving? Like not a focus group Where that may skewed in one pattern or another, but a more General like just a look at how the ecosystem is currently reacting to that previous proposal that we already put out there. That may also help Orient Us in terms of motivation because one concern I have with this proposal is, you know, I'd actually like to see something like this, but broader, not only applying to class and I'm curious like, is the current proposal that we've put out, sort of solving this fully for class. Maybe we can something that takes a look at a broader set of concerns, maybe if it's possible? because we actually just removed Something from our code base that did effectively hasInstance, but on all JavaScript objects, so that's one case that like, we know that that's a pain point, point. It exists and not only limited to classes. I understand that that's a more difficult problem to solve, but I feel like it would be nice to sort of investigate this problem fully and like really ground ourselves in the motivation and fully understand, like what's the impact of what we've already done before we move ahead.

BT: Okay, we'll have to stop the discussion there. Unfortunately, in the time box does collapse, we may have time at the end of the meeting come back to this. If you would like to do that.

MM: Just a quick clarification from YSV. When you say before we move ahead, you mean, specifically before we advance to stage two

YSV: rather I'm thinking about stage 3. have another concern about the spec text. I hope that we can refactor it. I mean, stage 2, we're supposed to like, really ground our motivation and really like, understand what we're solving. So I'm a little bit concerned that we're moving ahead with this as quickly as we are. and I have some open concerns, but I'm Not willing to block it from going to stage two. However, for stage 3, I do think that this requires more work.

MM: Thank you.

BT: Hax, Would you like to see if we can come back to this At the end of the meeting?

JHX: Okay.

BT: All right. We'll see if we can schedule something and Waldemar and SYG, please keep track of your queue items and start with you next time If we can come back to this.

### Conclusion/Resolution

- schedule time to continue tomorrow

## TC39 & copyright

Presenter: Yulia Startsev (YSV)

\[no notes\]

### Conclusion/Resolution

- TC39 has reviewed the proposed license text and approved of its general intent and wording modulo any changes proposed by the IPR group. TC39 intends to use this alternative license for its specifications.

## Class Brand Check for Stage 2 [extension slot]

Presenter: John Hax (JHX)

JHX: I think WH was asking about computed properties. Am I right?

WH: I posted this on chat. The issue I'm having with this is that the Contains operator in the existing spec is a bit weird. If you use Contains in an expression which includes a class, Contains will peek into the computed property names inside the class. If you use Contains on the class itself, it will also peek into the computed property names in the class. This proposal is trying to use Contains to manage a class scope, which means that things inside computed property name expressions are considered to be both in the class for the purposes of Contains, and not in the class for purposes of Contains. This is weird, and I suspect this will be a bug farm. As discussed on the chat, I would prefer the approach of using something other than Contains to look for things which are class scoped.

JHX: And just as this part is very hard, I'm not sure I figure out the correct way to spec that. But what I can tell you is with the champions we had some chat about the computed property, we tend to believe it's better to Throw a syntaxerror. but what I haven't figured out is how to spec it. So as currently speced as I suppose it's allowed, but will always give the if there is there's way or its we're always give you the false results because in that time no one can get the class. So, so there's no instance of that class. So I ever check it. Just give me false, but it seems useless so we prefer to give a syntax error. We don't want it to behave like ‘this’. `this` in the computed property exists outside of the class, which is I think very surprising.

WH: We need to make up our minds about whether computed property names are part of the class scope or not part of the class scope because it will make a difference here.

MM: WH, what do you recommend?

JHX: We hope to make the computed property in the class scope, but yeah, but but we, we tend to hope it should throw syntax error for class.hasInstance. Not sure about the future class metaproperties, but for the class.hasInstance we feel It is better to throw syntax error.

WH: We need to be careful because we're setting a precedent here. Say you have class *B* nested inside class *A* and a computed property name expression *E* defining one of *B*’s members. If you refer to `class.hasInstance` or `class.whatever` inside *E*, does it refer to class *B* or class *A*? Both? Neither?

WH: We need to figure these things out because this will set a precedent for future behaviors. My preference would be that it should be as much of a textual scope as possible, so I’d prefer the answer to be class *B*. However, I haven't thought through all the implications of this.

SYG: Yeah, I think what I was going to ask before was, what is the - in practice, for the use cases that you're looking to solve for here. What are the guarantees that you want class.hasInstance to imply? Mechanically, I understand what you are guaranteeing Is that the Constructor has run to completion without throwing and all the private fields are installed. but given that that's basically all that it guarantees, if it's not guaranteed that for example, the prototype is the same as you expect, What is the use case here?

[JHX call dropped]

SYG: I will repeat. I'm wondering what it in the use case that you're trying to solve for, What are the guarantees that you would like class.hasInstance to imply. Because it doesn't for example, imply that it has the expected prototype, because it just checks that the Constructor has run to normal completion. Is it are you looking for example, to like, use it together with instanceof, are you thinking of it as replacement for instanceof?

JHX: Sorry, what do you mean replacements?,

SYG: part of the argument from the motivation for the proposal, that the developers you have talked to, or whoever have this mental model of object-oriented programming. and they want a more robust way to check for instanceof a class. JavaScript is very Dynamic, And this is your proposal that you can check for instanceof a class, but it doesn't quite… like people have different ideas of what instanceof implies. Maybe they think it means it has to expect a prototype, maybe a people think that that means that it has all the private fields that they expect that it should have. this proposal Implies some of that stuff. I'm wondering like what is the use case, where that is the set of stuff that you want to guarantee?

JHX: Oh, okay. I see your question. I think that this proposal is try to use class.hasInstance. Who ensure that the object is created by that Constructor. And so first it's is the object is constructed by the class. And second, it should have all the private elements and the private fields successfully installed installed on it. And third, the Constructor should not throw. That means it gives you a valid object. and about the, the the property officer. if people want to make sure that the for example, that all properties are there, they can use like Object.freeze themselves. so, I think most of the time, especially a very large community, I can attach many people in today's developing really dynamically change like prototype. so, things like that. so I think what they want is a simple way to express the normal requirements that this is the instance. And in most cases, they don't care about every detail about that. So for example, someone may modify my prototype.

SYG: isn't it also rare to have a half constructed object escape and get passed around?

JHX: like if it's correct, so it's it's more about. I list the two aspects with the first one, and I think the most important one actually is the mental model. There are two parts about the edge case in practice listed here because it's actually the part, part which we have the events in this stage one with the private-in, because many case are actually, I solved the private-in which join us at our own style that the cost has increased cannot satisfy These cases, for example, and install any type pure object. I just want to check our part field. So I listed the difference here, but my main motivation I think is to provide a mental model, which is much closer to the average JavaScript programmer's. so, like I said, It's more like a better instance off.

SYG: Like, don't like the mental model of programmers when they think something is an instance of a class. They expect that the layout like And the data and the behavior that is associated with that class are available for use on that instance. This proposal is kind of about the state side of things ensuring that all the fields have been initialised and Constructor ran to completion without throwing. But I don't see how it is a simplifying and better mental model than what instanceof provides. It's a different mental model. It kind of it lets you check for a separate side of what it means to be an instance of something. I don't have anything against this proposal. I don't quite understand. The motivation still, I being like a superseding thing that we should be. It sounds like you're saying we should if this proposal were to be in the language. We should be teaching OO using this concept. instead of instanceof, but they cover different things. And I think the actionable thing out of my concern here is, maybe a different name than hasInstance?

JHX: Yeah, it's hard for me to express that. I think the feedback side coming from the many programmers. They must not be

SYG: sorry. Let me ask a different question. Could you articulate, what is the mental model That you think programmers have that this would directly reflect?

JHX: so, it's more like the way you write code in other languages just very close to type checking. When you write code, you type check, it narrows the type and you can do the correct operation on that objects.

SYG: Right, but this doesn't let you do that because of the Prototype thing. It only lets you do that for Fields, Basically. which is a part of it. As I said, I'm not saying that's nothing but but it's not the whole model.

JHX: Yeah. I understand that someone can change the Prototype with us and sing some prototype, you choose actually lose the control of the public methods for example, but I think it's could be solved by some other proposals, so you can use it together. At least class.hasInstance ensures that you have all the static part, like the private fields, and some of the public parts, for example, the public field you can we can see of it. about public methods and accessors, which is by nature virtual it can be changed or overridden over three devices or cost. So we may need some other proposal to solve such question, for example, in of course, I thought robust coding. I would like to do some spec dispatch just like private methods, but I don't want to write everything in private method than wrap it in those public methods, but this part of wood could be solved by other proposals in class.hasInstance. I don't think we can use one proposal to solve all the other things.

SYG: I agree, but I'm saying the name has instance sounds like it implies more than what it is actually guaranteeing. and I would like to, I would like for us to think about it differently

JHX: It could be part of the big picture. For example, we can if we have some static dispatch, which is dissipation maximum in future so you can use this to again use that you have class.hasInstance and you can safely call the other methods not only the private part so we can complete the complete the picture.

All right, we're running out of time on our extension here. my the because SYG wasn't registered the queue. I wasn't able to list mine as a reply to SYG

MM: I want to start with the question that to clarify something that will then determine the rest of that. At what point in instance initialization does an object become an instance, as far as this check is concerned.

JWK: when the constructor completed without exceptions.

MM: Okay, excellent. In that case. I reckon as I know how to answer Shu my mental model very strongly Is that the Constructor is supposed to bring about state that satisfies the invariants that this represents? if construction is aborted before the Constructor is then it fails to do so. and that makes this solve a problem that the class brand checks don't solve, because the class brand checks would solve if the conspiracy would cause the test to pass if the Constructor is entered, not if the Constructor completes. if I was coding this manually with WeakMaps, what I would think to do is to put the instance into the WeakMap of the end of the Constructor, which is what which is the proper thing. This automate sweet with regard to changing the Prototype or anything else. That's the responsibility of the class author, and with, by providing tools like Object.freeze, we provide the class author, the means to ensure whatever invariants they want to guarantee. and under hardened JavaScript, previously known as SES, we encourage those patterns and those use of such tools. So I think Constructor completion implies invariants, have been put in place, implies only Now should it be considered An instance, is The Sweet Spot. Is the correct model for this proposal.

SYG: That sounds fine. My concern remains that if the broad problem that we are solving for, is that there is a mismatch with what developers' mental models of an instance is. And we don't have a good way to check for that. This doesn't go all the way it goes that way in a particular scenario in which you just listed Mark and I agree with you there, that it provides a very valuable tool.

BT: I'm sorry to interrupt. we have to move on, we're over. Okay, three by three minutes now. It seems like Hax if you wanted to ask for consensus, like right now, you could

JHX: if I can, I would like to ask if there's any if there's any even minor objection, we just have to move on but if I served you know.

MM: I support this for stage 2.

YSV: I will not object, but I feel like there is some more exploration to be done here with regards to what were actually trying to do and how we communicated to the programmers.

BT: But you're comfortable figuring that out during stage two.

YSV: I'm not comfortable being a lone objector. Okay, I think I think we just have to move on that. We don't have know if I'm the lone objector, then this goes to Stage 2. That's what I'm saying.

DRR: I have similar concerns, to be honest with you. I feel like this is a fourth way to do something similar that a lot of programmers will not know the difference. In, or take the time to understand to be honest.

BT: Okay, I think that's all I need. We just need to go on so Hax. think probably the next best step is to bring this back again at a later meeting. And I would I would probably recommend talking to Daniel who it sounds like he has concerns of other folks are out there with concerns.

Please reach out to JHX so we can figure this out and be ready for next meeting. Okay? Okay, if you have any concerns priests. Yes, you on the Republic. Thank you.

JWK: What if we also add the Prototype check? calling class starts has instance.

SYG: Sorry. My concerns are not in the necessarily Daniel's concerns, but I think we need to move on. You should reach out to him.

### Conclusion/Resolution

- No advancement - bring back at another meeting

## Enum for Stage 1

Presenter: Jack Works (JWK)

- [proposal](https://github.com/Jack-Works/proposal-enum/)
- [slides](https://docs.google.com/presentation/d/14WtGmdWjEYXIXZVWJWpERF98D90_BytceAu7b7DKr5Q/edit?usp=sharing)

JWK: Just started. So, enums are a popular feature in many programming languages. As you can see in the picture. I'd like to add enum to the language, because first, it's useful when representing something that is limited to a set of primitive values. And next, we have reserved the word enum for many years, and I think it's useful to make use of it.

JWK: First of all, I need to mention that in the current proposal. I have no exact design for the syntax yet because I want to make sure to figure out the design constraint first. When exploring the idea, I found it's possible to have many conflicting requirements. So it's important to figure that out before we start designing the syntax and the semantics.

JWK: Here's the design goal. First, it should work well with TypeScript and FlowJS because strong motivation is to share work with the type system. The second one is maybe we should prefer static over dynamic design. I present this covered in later slides. Third, enums are frequently used in high-performance scenarios. In case of bit flag calculations, for example, in typescript compiler, enums are used to store the bit flag of AST status and there are folding constants in the compiling stage. Four, the enum should support symbol, string, number and bigints. I don't know if we will support objects or R/T. That's weird. And one of the most important motivations is to support the ADT Enum, but that proved to be very hard to specify. I'd like to add it as a follow-on proposal and I think we have many interested delegates in both topics. I think maybe SYG and RBN have interest in this.

JWK: Okay, so I'll present the plan and I'm first I have a little bit of decided semantics here. It's not configurable after definition. You cannot add new keys after define and all values are read-only. And the second, it's a declaration but not a hoistable declaration. And duplicated keys are a syntax error or early error or runtime error. whatever. It should be an error.

And we have many undecided semantics. First of all, Should we design it in a more static, analyzable way? This is a bit like how the decorator proposal has its design constraints. I don't know what we should do here, but I think we can discuss it here. So, some use cases for high performance, or the minimal JavaScript size by inlining enum values. As you can see in the picture in typescript, They have constant enums, and when they transpile into JavaScript, enum values are inlined into numbers, instead of objects properties.

JWK: The second one is, can enums extend other enums.

JWK: the third one is should we allow the developer to hold different kinds of values in an enum. TypeScript allows this, and FlowJS does not. in the typescript documentation They said this feature is very not recommended because it's highly like Something wrong. Another reason, when using bigint as the enum value, if the “n” suffix is forgotten, there will be no error but to turn it into a mixed type enum.

JWK: And the reverse mapping for a given primitive value T, how to find out the enum key K, which has the value T. Currently developers can do it by iterating on keys on the enum object to do it, but should we provide some convenient way to do it?

JWK: Next one is Computed keys and computed values. The first is duplicate keys. It should be an error. And if it's, if computed keys are allowed, the developer might pass a symbol in. And I think that's a bit strange to have side effects when defining an enum, but that also happens when you're defining a class Fields with computed keys, so I think maybe it's okay.

JWK: and auto increments, as you can see, many languages can have how to compute those keys. And the first one is 0 and the second one is one and the key, and the value auto increments by the natural number, but I think it's a foot gun when you add an item in the middle, then all following numbers, implicitly, increase by 1, or if you remove one item in the middle, and I think that's frequently to be happen When, when the developer thinks the enum item is no longer used, but it will implicitly, make a breaking change in library.

JWK: The next one is, should we allow syntax collision with Typescript and Flow? so, if we try to avoid syntax collision, we have to choose some different Syntax, For example, we use the `enum Direction for symbol` so they have significantly different syntax. Any semantics that's not compatible with the current typescript and FlowJS enum, they need to have something like what they do to the class fields today. Now typescript has the `useDefineForClassFields` flag to switch to ES semantics.

JWK: And the final one is, should we allow default member types? if we can make it default to single, or we can allow it without the same strain as the key value, or We can make its default type to be number like any other languages, too.

JWK: And the final one is, should We allow iterators on it and what should it yield?

JWK: And the summary for the plenary of undecided, semantics and syntax. It's frozen. It's a declaration and no duplicate key is allowed in the question of semantics that I want to ask for other than me.

JHD: This is all very interesting and like I've participated on the repo for it, but its semantics feels premature for a stage 0 proposal. And I think a lot of us would be very interested to hear about the problem space and the motivation. Is it possible for your presentation to be reordered slightly, so we could talk about that first?

JWK: Okay, so I split this proposal into two parts. The first part is the plain enum. You can see in this form and they only contain the key value pair, you can think of it like sugar to how we Define enums currently in JavaScript in Frozen objects.

JHD: I was hoping to get more of an idea, “why do you need an enum?” It seems maybe like you’re taking it for granted that we all understand why these are useful. I'm not sure that's the case.

BT: I think like a lot of queue entries that are along that, so maybe we can just go to the queue and let folks ask the ask questions.

Is Jack, if we drain the queue before continuing with the slides.

JWK: Yes, okay.

MM: Yeah, I think I might be expressing something similar. skepticism. The new syntax is very, very expensive. I'm very glad that we know that you're using a keyword. That's reserved. So you're purely turning the erroneous, Source text into not alone. He's technically still introducing syntax and it is very expensive and there seems to be so many cheap ways to get the effect of this. For example, some code I had pasted into the chat.

MM: (code example)

```ts
const Enum = new Proxy({}, { get: (_, name) => name });
const { a, b, c } = Enum;
```

MM: I just don't find that this constant construct pays for itself, that the problem that it's solving is worth paying the cost of new syntax.

JWK: Okay, I think. It's a fair point because we already can have the same weight as similar ways to define enums today, but they are inconsistent. For example, DOM has enumerations like In XHR that have some readyStates defined. and in some other libraries like react enums are defined as all uppercase Variables in the file. I think we can benefit from a unified form. The more important motivation is to bring us the ADT enum . This kind of syntax is much more useful than the normal enum, but it's very hard to specify, so I have it as an add-on. So my current presentation is intended to gather the interest from the committee. And so I am so we can gather a group of people to gradually develop this proposal forward in the future, and I'm not intending to push it too fast. before we figured all the details out.

MM: With regard to the multiple competing patterns for expressing this currently in the language. If they're using the language as-is to express the concept. Work well enough And the problem is that there are multiple them than the that I think we should do is to pick one and bless it or promote it or something, But if you can express it currently in the language well enough then that that even more strongly says we shouldn't change the syntax of the language to express something, you can already express well enough in the language as is. And with regard to blessing one of those, I think that's a separate question. I don't have an opinion on that because I don't know what those are, but I'm skeptical on that as well. I think allowing one of those to rise to a de-facto standard by competition is the right way to resolve that in terms of the multiple ways to say.

JWK: As you can see in this picture, we can have something for Symbol or for BigInt, or maybe we can choose to bless maybe a symbol or number. I don't know. so, Yes, it's reasonable to be Skeptical, if the new syntax is worth it. I'm here only intending to gather committee interests on both plain normal enum and sum type.

MM: okay, so I am. So I'll just register as the feedback you're looking for. I'm very skeptical and I would be happy to see this as new syntax, not Advance into the language.

PFC: I'd like to reply to MM, that if we were to adopt a syntax that was statically analyzable, that might enable tools to catch a whole class of bugs. That might not be possible if we organically allowed one enum convention to be adopted into the language. I believe there is an advantage to syntax in this case.

MM: I have a quick reply: typescript already types string instances, you know, concrete strings as types, and we've been using enum patterns in our own code. Where just each enum has the literal type string. That is, that is its value. So, typescript already gives us the all the static analyzer ability of that that we find we want.

JWK: (inaudible) What about the sum type enum?

MM: Yeah, the sum type enum is more interesting, but it sounds like you don't currently have a way in mind for us to get there.

JWK: yeah, I'm here to gather interest so we can develop the idea together.

MM: So the sum type enum, I find more interesting and I'm less skeptical of it.

JWK: Okay. Thanks.

DRR: Yeah, so when one comes to the TS perspective, I think it's I think it's we basically thought back at what we've done, it had tripped and said kind of for the last many years, we try to stick just to erasable types and then they Other features we say, well, it would have been better if it goes in gone through the standard sort of track. And so first things like namespaces and whatnot. We kind of say like, we actually wish we had not done some of those, but the thing that we always come back to is, yeah, but enums are really nice. And so one thing I will put out there is when we talk about static analyzability with new language features, we often try to start from basics of, you know, how can we take existing code, that's written in JavaScript today, and do analysis on that, right? And there's a lot of basic primitive that you can build on to build a bigger pattern and in some ways you saw that back in the days with like class Constructors, right? Like class factories, things that basically create a class for you until ecmascript 2015 created a class construct, right? TS eventually was able to type many of these like class factories and whatnot. We did a lot of work to make sure that could happen, but you lose a lot in the cracks, right? Like you lose the ability to understand the intent behind the code because a lot of it is heuristics. So a static analysis tool, like TS, can't do everything, right? It doesn't know to correlate, in the case in constants that are all intended to be related. It doesn't know that these random constants are actually tied together that need to kind of like be analyzed in a specific way. And and so in the case with like, let's say Java they they have actually been exploring a case of like, sum types as well, where you say, there's a set of classes that are offered or instances or classes that are all related in some way, you analyze one, you should also think about the others well. Enums kind of rhyme in the same way, right? They give tools the ability to know that when you're talking about one specific thing and actually could be related to a more specific set of values that aren't just like a couple of strings or numbers that have the same values. And so that intent has lost a lot of people try to go the path of I'm just going to use an object literal with constants. I'm just gonna use a set of constants exported from a module, but it feels like these are all sort of ways of getting towards enums. So that's something that would allow other tools to work with in terms of constants and optimizability like You know, TypeScript has seen the 15% in, you know, Improvement in performance from inlining enum values. It's not an enum specific optimization. You could do that with constants too - [crosstalk].

JHX: Our colleague here wants to discuss the cost of new syntax. Yes. We will always have a high bar for introducing new syntax. There Are some differences because this is a keyword reserved for usage. I Hosea the problem here is, if we all have been reserved for many years, if we do not use it, then downstream like TS or flow type. They just use that and actually the syntax and the semantics conflict and are different. It seems not a good scene for the ecosystem. We need a common base for, you know, common usage. This is what I think about this special case.

KG: This is just a reply to that. The reason new syntax is expensive is primarily because it's a burden on learners of the language. It's not primarily because syntax space is limited, in the sense that there's only so many different ways we can write things down. But the cost is that people need to learn things. So the fact that it's already reserved isn't super relevant because people don't need to know about this right now and if we introduce new syntax then they do need to know about it.

WH: Throughout this presentation, I don't know what the problem we’re trying to solve is. I’ve seen some hints such as that TypeScript has defined extensions which include enum and maybe we want to backport those into ECMAScript. The danger is that if we define an enum which is different from TypeScript then we just create friction between TypeScript and ECMAScript. Maybe the problem this is trying to solve is static analyzability. If static analyzability is the thing then we should define some lightweight way of creating constants inside objects which is statically analyzable. Conflating that with enums introduces a lot of difficulties, such as enum inheritance machinery and so on. And if we just worry about defining constants in objects, those issues are solved for us. So I just didn't see the motivation for enum so far.

SHO: Like Waldemar, I'm really struggling to see what the motivation for this is outside types. It's nice for typed languages and it's nice for typescript. Which, like, TypeScript isn't JavaScript, right? Like I don't think that's enough of a reason to add something to the language and something that, you know, involves some restrictive mental concepts that do fit well with Typescript, but aren't necessarily very JavaScript-y. It seems to me and I might be wrong and there might be other motivations for this, but I'm sort of not seeing it right now, especially when you consider the use of linters, right? Like the biggest problem of using what I like to call "folk" enums or like object-based enums is that sometimes static linters can't always identify when you put a typo in to look up a property, but like that sort of the one place where it sometimes fails and it can be fixed by— YSV will sort of refer to this, I think, in the example she gave next, right? That's fixed by just not putting your constants in objects. And so I do sort of struggle to see how this fits in and outside of the motivation of we want more type-y things in JavaScript. That's it for me. Thanks.

YSV: I can pick up from there. So the point I want to bring up is, I do think that the case can be made for enums, but we have to understand the problem that we're solving. So the reference that I'm making to the react code base, and you've got a link there to that code base in mozilla-central.

<https://searchfox.org/mozilla-central/source/browser/components/newtab/vendor/react-dev.js#22-41>

YSV: But it's the same. is that they've implemented enums using symbol for. So, registered symbols or an integer for performance reasons, so, I'm wondering, you know, is this something that potentially has performance impacts and by introducing something like an enum, we can alleviate certain concerns, of course. Here It's being solved by number. What would the enum bring to something like that? That would be an interesting use case, and maybe there are other use cases. I believe that's what we're currently missing from this discussion.

JWK: Okay, for the question before I want to reply. Yes, I agree that in for normal enums it's just like, it's just, like, pretty syntax sugar for the Frozen objects, but I think we can gain more from a, Sum Type enum, what we, this is what we do in front JavaScript and you can have this and it's can take pattern matching. I think we can continue.

BT: Did you hear what YSV was saying?

JWK: Yes. Hmm. I think the React example has what's I just mentioned about. They have, as you can see, they have many. Something like React element type. prototypal many constants for and it's it will be, it will be much more concise when we have this enum. And yes, it's interesting to investigate.

GKZ: Hi, my name is George. I'm on the Flow team at Meta, and I designed and implemented Flow Enums which we open sourced this past summer. So I can speak to our use cases. The majority of the value from implementing Flow Enums was for the value in the type system: because the enum declaration creates a new type, we supply exhaustiveness checking and so on. I should mention that Flow Enums are very different from TS enums. I can share a little comparison here. But if you ignore the types, there are a couple of things that users derive value from enums, just from the runtime. And we have on the order of magnitude around 10,000 Flow Enums in our code base right now. So this is something that users have adopted a lot. We provide several useful methods that don't come easily from the previous pattern that users would use, which is just `object.freeze` on object literal with literal values. So we provide a cast function that is a way to check if the value is a valid one, we also provide a `members` method which provides an iterator for the values of the enum. But again, most of the value comes when you use the syntax with a type system, I can see there being a value of creating this for Typescript and Flow, if there's a standard way to do enums. I intentionally designed Flow Enums to be very restrictive in their definition, so if in the future we standardized an enums feature, it would hopefully be a superset of whatever Flow Enums is. I'd even be happy to make reasonable modifications to Flow Enums to fit whatever that standard is. Yeah, that's all. Happy to answer questions on different use cases that people use enums at the company. Since we have very many different use cases.

JWK: Thanks for the support and I want to reply to SYG. That's yes, there are constantly adding and I'm once won't automatically convert existing code, but for new codes, we can have other things use relative.

PHE: Sure, so I just talking about uses of enum in the embedded Universe, we end up, writing a lot of code that deals with data sheets with that come with c-code with long lists of constants that are often expressed as enums. It's so common that at some point I wrote a quick tool to convert C enums to JavaScript and so I'm, you know, That works. It would be nice to have that in the language, but I, you know, I agree also with Shu's point that there are lots of solutions for enums out there today, and those are going to keep going and maybe our tool will too, but adjust to output enum syntax instead. So I'm interested to see this explored. RBN Had done some interesting work before.

LEO: just taking the hook as you just say, I think we have many different works for in nam here and I would like for I see in am keeps bouncing back to TC39 being presented in. There is a lot of stage zero enum proposals. I think there are clearly some loose ends. So I like having a better description. Convincing use cases for what we want for Nam. Clear path ahead for the syntax and everything. I wish we could just explore this as a stage one to have like a one proposal that we can work on top. I think like the signal for stage one is that what we want to explore and understand better these motivations and like what is the path ahead. It won't reach stage two without answering those but it's at least like not yet another enum proposal. And I think this one captures like some part of like from RBN and RW. I think we can explore and work on that.

BT: Okay, so we're out of time. So I think at this point we can say yes, I think you. We can ask for support to investigate the space. I think it's fair to say that the sum type enum is a later stage concern.. So who I think we're just talking stage one to investigate the problem space of enums. Thanks. Are there any objections to that?

WH: Yeah. I'm uneasy about this. This is too vague at this point. I don't see the problem space identified. I see a lot of different ideas here and pretty much the only thing they have in common is that they all use the keyword `enum`, but they're so different from each other. So this is too vague for stage 1.

JWK: so, As I said, I didn't have a design before I figured out the constraints. I just want to explore this idea before continuing.

WH: I have nothing against including enums in the language, but this is not stage 1 at this point in time, this is stage 0.

JWK: Isn't stage 1 just a problem we can try exploring?

WH: We haven't agreed on what the problem is.

JWK: Okay. So, another one is, I want to form a champion group. Is anyone else interested?

LEO: Just saying Jack. I think who can benefit from forming this Champion group, async to the delegates Channel people. Yeah. well, yeah,

WH: Forming a champion group would be a great way to proceed.

[from chat] George Zahariev (Meta)
GKZ:
<https://flow.org/en/docs/enums/>
<https://medium.com/flow-type/typescript-enums-vs-flow-enums-83da2ca4a9b4>

LEO: And in capturing all of these references people mention here, especially the chat. chat. So we can capture this references, work with his people and get things that we can bring together. We understand. What is the problem to Advanced is to stage one?

BT: I think we, you know, maybe get to stage one with some additional discussion. I think consensus on a problem on what the problem is, isn't necessarily a requirement for stage one entrance, but I think we're in a good place. Anyway, we can form the champion group and come back with some more concrete information. I think there will be a better chance of success.

### Conclusion/Resolution

- Does not reach stage 1
- Form a champion group asyncly
