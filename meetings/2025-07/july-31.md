# 109th TC39 Meeting

Day Four—31 July 2025

**Attendees:**

| Name               | Abbreviation | Organization       |
|--------------------|--------------|--------------------|
| Waldemar Horwat    | WH           | Invited Expert     |
| Sergey Rubanov     | SRV          | Invited Expert     |
| Daniel Minor       | DLM          | Mozilla            |
| Dmitry Makhnev     | DJM          | JetBrains          |
| Istvan Sebestyen   | IS           | Ecma               |
| Jordan Harband     | JHD          | HeroDevs           |
| Zbyszek Tenerowicz | ZTZ          | Consensys          |
| Chris de Almeida   | CDA          | IBM                |
| Daniel Rosenwasser | DRR          | Microsoft          |
| Eemeli Aro         | EAO          | Mozilla            |
| Samina Husain      | SHN          | Ecma International |
| Aki Rose Braun     | AKI          | Ecma International |
| Olivier Flückiger  | OFR          | Google             |

## Opening & Welcome

Presenter: Ujjwal Sharma (USA)

USA: Good morning. Hello. time can we ask for two volunteers of notetaking before we start with topics which should be the final session of topics for this meeting. I see that people are filing in. 28 of us are here already. We need two. So that’s great odds, I guess. If any of you would be willing to do the first half or the first presentation, or just these next 30 minutes, that would be fine as well. And we could rotate as we go for the next four—

JRL: I can help with notes.

USA: Thank you, JRL. Can we have one person to help JRL out as well and would be ready to go? I see that people are still coming in. Perhaps some of our newly joined delegates would like to help out with notes. Also looking at, RBR, in the meantime would you like to try out screen share and see everything is in order?

USA: First off we have `Object.propertyCount` for stage two. So—in the meantime, would somebody be so nice as to volunteer for taking notes for either this slot or any fraction of it? There’s four equally long sessions.

MF: I can do the first hour, this is MF.

## `Object.propertyCount` for Stage 2

Presenter: Ruben Bridgewater (RBR)

* [proposal](https://github.com/tc39/proposal-object-property-count)
* [slides](TODO)

USA: Okay. You can start.

RBR: Thank you very much. All right. So last time we spoke about proposal for `Object.propertyCount`. And we decided on-stage one in this case. And in this case, there were like some questions around some details that, I believe the overall idea for the most common use cases was agreed upon that it’s good. Now, after giving that some time I saw it is probably good to try to limit it a little bit more to less use cases and to have separate proposals for some of the other aspects because it is more explicit. Because the problem statement that we talked about last time was that, it is mainly to overcome performance and correctness issues. That’s just the same. In this case, actually for variety of different use cases or algorithms. So input validation, for example, guarding against too big input objects you want to compare objects and have telemetry data and be able to compare that easily.

RBR: Many algorithms are needed for some kind of a fast pass in this case. Generally, am I look for. Example, `Object.keys().length`, that just pops up, it was always originally the options and detect string properties on live objects, it would have been also to detect dense or sparse arrays. So, this was originally like some of the aspects that were possible with it. Because like I showcased thin proposal itself, like a big list of usages for different things. Like very popular modules or frameworks like angular, react, etc., etc., and note, and lodash. There is really a lot of usage of a couple of these patterns.

RBR: We did discuss if something like, for example, the non-index properties, if it is something common or not and to have extra properties to check for. I wanted to highlight in this case, actually, regular any expansion, with object match, match all on something, we actually receive an array with non-index string properties on them. Like the last index, groups, etc. So it is actually something that is not too uncommon to also have even spec as such.

RBR: I just want to briefly go through the examples, again, like we have only enumerable symbols, for example, in this case, these cases do care about receiving these enumerable symbols. So it is not only about getting the count of them, but they actually went to get the symbol properties as well. We do have a couple of check where’s they only care about the lengths for some comparison, that is for react, for example, Next.js. For example, any non-symbol property, only the length is checked for example in react, and checking just generally lengths for is there a property, done in VS Code. I did not put any examples in the slides at the moment for anything that would reflect object keys because the list would be too big. Like there are more cases and more examples for the others I just wanted to highlight these again. We do have array index checks and Lo dash, and Node.js is definitely something I have concrete examples for, anything in Node.js that is doing cancel log that allows you to inspect would use that to differentiate numerable versus non-enumerable symbols, for example, and nonequal and gone equivalence parts. So, these all use that.

RBR: As conclusion from that, we can say, okay. Last time we already agreed that the most common use case is `Object.keys().length` because there is probably some usage of the pattern in any code base. I believe that's why I don’t have to highlight that anymore because of the very, very high frequency of that. What we do have, however, also like symbol length checks. And this case, enumerable symbols, non-enumerable symbols, both in this case, and index properties is always checked for in multiple cases. It is definitely something we can see in the wild.

RBR: Nevertheless, I wanted to simplify the current proposal. So I’m trying to push out the non-indexed properties and also the sparse array detection as such. Because in this case it is implicit. So like that we can have a separate proposal for these aspects and just simplify the overall options of the proposal.

RBR: I believe each of the proposals does provide benefit on their own as well as the current still, like the minified object property count proposal. And while like altogether they can provide an even bigger benefit if used alongside.

RBR: Then—yeah. One of the benefits is, one of the discussion was also, at least in a GitHub issue, there is the difficulty of defining what a non-index string property looks like, because we have a different handling on type arrays versus arrays, that is something that would not fall in here anymore and we can just concentrate on the most common use cases. We also have explicit checks in this case for is an array dense or sparse which we could then handle instead.

RBR: And there, anything else pretty much as before, right? It should only handle own properties, and enumerability is defined by the enumerable parameter in the options. And it should avoid administer mead at array allocation and optimized scope later in the spec that’s not the case. Just like the high level spec is pretty much still the same, because there was no big change besides removing, in the key types like instead of having index and non-index string ones, we now have just string as key type, as a combination of them. That is all that changed. I can also show the concrete spec if wished. I believe that’s something that we can read individually, though. So I would only open that it is explicitly requested.

RBR: Just to highlight again the use cases. So we have improved readability and explicit intent when we want to receive the number of properties on any object type. That should be significantly faster in many, many cases and such also reduce memory overhead when doing so and simplifies the code as well. That is pretty much just another information.

RBR: Like I did, I—wanted to really just focus on the minifying the original proposal. And that’s why I don’t, didn’t go too much into detail about the complete spec anymore as last time. If that’s requested, we can go into that. Otherwise, is that addressing originally mentioned issues for everyone? Like as I said, I’m going to showcase solutions for the remove parts in different proposals afterwards.

USA: On the queue we have a few topics. First up we have NRO.

NRO: Yeah. Hi. This is not a new topic, but many companies in this committee have like meetings the week before plenary to go through the agenda and look at proposals and think of a shared position. And this proposal there is no slides in the agenda. And the proposed semantics changed five minutes before this meeting. I just saw there was a request like 30 minutes ago. So it was very difficult to like coordinate with a company position for me fast, because just not clear what was going to be proposed.

RBR: Yeah. The PR was up longer. But I didn’t merge it. That’s true. I’m sorry. And I have to generally apologize in this case. I am currently on vacation and I had very little Internet access during that.

NRO: Yeah. I also have concrete topics, but there is MM on the queue before me.

MM: So the, so my concern is that the next three proposals also by RBR, or by RBR and JHD. Seem to be very related to this proposal. In fact, they even say they are related.

RBR: Yes.

MM: So before asking, before, I would like to, to at least understand the problem statements of the next three proposals before being asked to make a decision on advancement of this proposal. I’d like to be able to consider them altogether as a set of closely related goals. That perhaps could be more pleasantly addressed with an API that covers all of them or not. I mean, I just don’t understand yet.

RBR: Uh-huh. So I would be fine with that. If everyone else is fine and to just continue with the others and we can discuss them in the end.

MM: Good.

USA: Would anybody be opposed to that for asking for consensus altogether? At the end of the four presentations?

KG: I think it is fine to ask for consensus for the various pieces individually at the end. I think it is pretty likely that we’re not going to be interested in advancing all-or-nothing though. There might be some subset.

MM: I’m not suggesting that we advance all-or-nothing, I’m just suggesting that I would like to understand the other three before being asked to advance this one.

RBR: Uh-huh.

USA: Also I see support from MF on the queue. So let’s proceed that way then. However, should we go through the queue of this item before moving on to the next one?

MM: I believe so.

USA: All right. RBR, if that is fine by you, then next on the queue we have NRO.

NRO: Yeah. So can you say more about what is the use case for listing only non-enumerable properties? It is clear to me why there is this case for listing only enumerable ones and listing all of them. But looking into the examples linked I could not find a case of nonenumerable. So there is a get in the enumerable properties, so you need to get in the nonenumerable to have all of them. But it was not just non-enumerable.

RBR: That is, I believe, we do have cases where we want all of them, I found those. I did find a lot of cases that is more common to have a filter for only enumerable ones, what you’re saying is like, we are, I missed examples for only nonenumerable ones. I agree. And I believe that is a very rare use case. In this case it feels more of like how would an API look like of some, like, this, this fashion where we just don’t do the non-enumerable ones as well. Because I believe it is simpler to just have the option one way or the other. Like even from implementation standpoint, it should not really be much different.

NRO: Okay. The reason I’m asking is because I find it weird to have these like enumerable option that is like a Boolean or a string all. Like if we want to keep the three states, it probably should be an enum with three strings, but if there isn’t a use case for having non-enumerable properties, this could be just include non-enumerable Boolean without having the three states if we only need two of them.

RBR: That is actually a very good point. JHD and me we discussed the "all" versus Boolean aspect it is going to come up in the other proposal as well. I believe that is a good point. I’m also totally open to having a string instead. I don’t believe there is any case like this before in the spec anywhere. So it would be using definitely if it would be introduced a Boolean and string, and I’m totally open to alternatives as such. I believe as long as the overall functionality will still be provided it wouldn’t matter, I believe. We could subsequently remove the non-enumerable case even though as I said, like when I see an API like that, I would normally expect to have like—one side and the other side as well.

NRO: Yeah. Yeah, I mean, like if the name was a different option, like the one you suggested, then if is true or false, I understand, I agree that, like true or "all" is weird, but there are multiple topics so let’s go through the queue.

RBR: Uh-huh.

JHD: Yeah. So I just wanted to add, I agree with what RBR said, the use case for only nonenumerables getting that number is rare. I don’t think it never happens. I think sometimes you do want to know if there are nonenumerable properties on an object, but it is more like we definitely need enumerables and we definitely need everything. Those are, you know, so we have those two things and it’s, it would be a really weird API in my opinion like when you can, like—it would be really weird API in my opinion to have one half, like one subset in the entirety versus either just the two subsets or the three states of either subset or both. So it like doesn’t make any sense to me why would we include just enumerables and all and just those two options. If we only have two options it would be enumerables and non-enumerables and to get all you add them together.

USA: We have a reply by MF on the queue.

MF: Yeah. So I think everything we add to the language should be able to be justified. We’ve done, we had this discussion before with that TypedArray getter, whatever it was. I think we made a mistake there as well just by trying to fill in a matrix when there is no reason to have that thing. It was very clear with that last time this occurred. With this time I’m not, you know, 100% sure that there’s absolutely no use cases for the option we would omit, but like I just, I don’t want to add things to the language that don’t have justification and they don’t have existing people using them. We wouldn’t do that if this feature was standalone. It shouldn’t change things just because it’s part of some option matrix in the current proposal.

JHD: Yeah. I completely understand that philosophy and I think that with the timed `Array.getter` one, like that is a—like that was the entirety of the purpose was to fill in the matrix. So therefore your philosophy like completely, it is appropriate to debate there. In this case, it’s, it’s only partially appropriate because as was describing, right? It is like, it is a weird API design to have only enumerable and all. And if we have only enumerable and nonenumerable then we made the all case less ergonomic and also like perhaps less performance. And so having all three, you know, is like, is not weird to me whereas just having enumerable and all is. Does that make sense? I don’t know, it feels like a very inelegant API if it just has enumerable and "all".

MF: I do understand how it can change the ergonomics of the design. But everything I said still stands. Whether this is introduced as a standalone proposal or introduced as part of some matrix in a proposal with many other things, I don’t think that would change our criteria for whether we include it. I understand that might lead to awkward APIs and that is a trade-off we have to consider for those use cases.

RBR: So, like I believe, when I probably look for it hard enough I probably will find some, that is my expectation, but I do expect it to be a rare case. It is not a case that would never come up. That’s not the situation. And as JHD said, I believe we only pretty much have, or if I would choose, let’s say it that way, I would probably either just use three states, which is definitely my favorite one because it has the least performance overhead. Or it would only be possible to either get enumerable or non-enumerable ones, in which case we only add this case so you only do two calls in the end, which is also a bit weird.

USA: We have SHS on the queue.

SHS: I’m going to plus one what ?? is saying.

USA: And KG.

KG: I’m going to plus one what MF is saying, we have `Object.keys` and `Object.getOwnPropertyNames`, this gives you the only enumerable and nonenumerable string keys, there is no object to getNonenumerablePropertyNames. So two of the three things in the matrix is the current state of affairs, that is a perfectly good state of affairs.

JHD: I don’t think that is a good thing, it is gross, and they are named.

KG: I agree the names are bad. I don’t think there is anything wrong with only having these APIs. These are the APIs people use, we don’t need to provide additional APIs just to fill out the matrix. There are probably two people in the world that would use them. That’s not a good enough reason.

USA: Okay. Speaking of there is less than 10 minutes. So, you need to be faster. Next on the queue is JRL.

JRL: Responding to JHD point here, he is arguing to have an that returns enumerable and nonenumerable and only those two subsets. That is going to break the fast path where you can do only all look up to see how many properties you have. That will only work for all. I don’t think we should design an API that can never hit the fast path.

USA: Next we have NRO.

NRO: I was suggested in the two states, not enumerable and nonenumerable. But enumerable and all. The option can be world today be true to mean everything, instead of just one. And for the other case with nonenumerable ones, you can do the difference between two numbers, that’s just the rare case. And the weirdness of an overload between a Boolean and a string constant is higher than the input weirdness, I find it weird to have to get all of the API properties.

USA: Next we have KG.

KG: Yeah, I also want to ask about motivation for the string versus symbol versus all. I couldn’t find any examples in my code bases where this was a thing that mattered. In fact, literally the only examples I was able to find were `Object.keys().length`. I’m happy for a proposal that makes `Object.keys.length`. I have not found much justification for the rest of it. Separately as a question of the API design. I don’t really like having this options bag. I would prefer to have separate method at least for string versus symbol opposed to string versus symbol or I symbol, because it is more discoverable, and matches `Object.propertyCount`. And in fact, a sort of obvious way of doing both of these things is that we can have `Object.keysLength`, and `Object.getOwnPropertyNamesLength`, and `Object.getOwnPropertySymbolsLength`. And just be done with it at that point and not have options bags and not have renames and not have to worry about filling in the matrix. We would just be taking the existing things and say when you are using the existing things, but you want to length of the thing and not the whole array, we have a function that gives you that.

RBR: So about the options. That is something JHD and me discussed, for example, to have individual Boolean types for say symbols and strings. The difficult part was the default would have opposing Booleans in this case, because the string properties would be true. While symbols would be false to represent `Object.keys` by default. And that felt a bit off to have like multiple Boolean options that are not like all identical.

JHD: Yeah, in general having two booleans that covers more states to describe three states is not a good option design. But to your point, Kevin, you’re saying no options bag at all. That sidestep that question of how should the options bag. I agree with you, that would be, that, if options bags are seen as a bad thing, and you see separate methods as more discoverable, both of which I disagree with, but assuming those are the case, then the path you’re suggesting certainly is the most straightforward. But given.

KG: It is definitely more discoverable. As to whether they are bad in general, I don’t want to offer an opinion on that. But I want to point out, these are very, very close cousins of existing APIs.

JHD: That’s true. But discoverable. I don’t think that people think that get keys exist. But if there are options bag on get keys, everyone would know about it. And IDE, autocomplete and stuff and like pop-ups would fill in the options bag information and that’s much more discoverable usually then having to change to a completely separate method to even know it exists. So I think actually the opposite of what you’re saying is true about discoverability. And then separately, the existing names are inconsistent and gross and weird.

KG: They are the existing names.

JHD: Yes. Yes, yes. We have done that, for example, we keep the receiver argument on the array methods that take callbacks for consistency even though it is gross and no one wants to use it. That’s a trade-off we do have to make sometimes. But it is not something we are shackled to. We can also choose, that the existing name, the existing pattern is gross and come up with a new better pattern and just decide to be okay with the inconsistency because the improvement is so much better. Now, that may not be worth it in this case for you, that is a position to have. But like—yeah. I think that like continuing—looking at like four or five new methods with gross names that are inconsistent with each other just because those mistakes were made a decade plus in the past seems unfortunately to me.

KG: So I have two specific things I would like to hear responses to. The first was, I do want to hear more about the justification for providing this functionality at all for beyond just `Object.keys`, like I said the only cases I have been able to find from my own code bases were object keys length. If you want to do more than that, it needs to be separately justified. I’m completely fine with the justification for `Object.keys().length`. But not beyond that. The second thing, a concrete suggestion for a way to go about creating this functionality, which is to have, for example, `Object.keysLength`, which would be literally Object.keys( …).length, which I think is very clear. Matches the methods that people are already familiar with. Answers the question of like which functionality to be provide given there is a handful of the methods that provide you an array of properly names we would tack on a new version of each of those and bees done with it. I would like to hear responses to those two specific suggestions.

RBR: If I may, let’s start with the latter one first. Like I actually would like to add an option to, for example, like that’s one of the proposals for `Object.getOwnPropertySymbols` to only return enumerable or nonenumerable ones which is actually way more, like if you, and that hopefully addresses implicitly your questions around that. Because I do, like when I look for it’s not as common, like I would say `Object.keys().lengths` is like, you don’t find any code base without it almost. It is not common. Just with the other code base, if you look of the symbols one, you will find it in almost all popular modules as well. At least once. And as such—

KG: That was not my experience. I looked at several places and I think I found one place that needed the number of symbols.

RBR: Like if you want, we can have a look at.

KG: Yeah. I don’t think that has to be done now. Just, having a bunch of examples in the README would go a long way.

RBR: I did, like there is an issue open about it where I already mentioned some. I did have some in the slides now. And I can just add a commit to, add to read me a couple of the examples in this case.

USA: All right. We’re at time for this particular session. We have two responses to KG on the queue. And a new topic by MM. How do we want to proceed? Do you want—

MM: I can postpone my topic until the end of all of the presentations.

USA: Thank you, MM. And what about the responses to this? Can we come back to them later.

CDA: This are just end of message if you just want to read them.

USA: Okay. I can say plus one to JHD’s argument on discoverability. That said, I don’t see a need for optimized counting of anything other than enumerable own keys. That’s what was mentioned earlier by ZTZ. And JHD said `Reflect.ownKeys(…).length` appears a bit, too, although no wear as near as often as `Object.keys`. So those were the two responses and we can move on with the next item.

### Speaker's Summary of Key Points

* List
* of
* things

### Conclusion

(see end of day)

## `Array.isSparse` for Stage 1

Presenter: Ruben Bridgewater (RBR)

* [proposal](https://github.com/BridgeAR/isSparse)
* [slides](TODO)

Reply: See comments below, it can _sometimes_ be O(1) but is sometimes O(N) EOM

RBR: Yep. Yeah. Okay. So, `Array.isSparse`. And like it is something where I actually, I’m not certain if `Array.isSparse` is the greatest name to say as the very first thing of this proposal because maybe it should be called `Array.isDense` instead. But let’s have a look at it.

RBR: So, I do want to detect if an array is dense or sparse because of when you want to write like very correct code and you have a high performance cliff to address that. Because detecting, if an `Array.isSparse` is quite difficult in that case. Very briefly, I believe everyone in this round knows what a sparse array is, but nevertheless, we are talking of an array where we have an index that is in between zero and lengths of the array. Where it doesn’t have a property at that index. So there is a hole which is not even represented with an undefined as such.

RBR: And the motivation and then, well, you have a correctness pitfall and potentially slow code when you’re using sparse arrays because they need to have more optimizations to be handled properly. Some code reinvents to wheel to check for that. Some just accept it, while it can have actually weird outcomes and some methods, for example, when you have like sword, for example, can have a different outcome. And adding `Array.isSparse` would handle one of the cases we removed from the `Object.propertyCount` proposal because with that it was implicitly possible to know if an array would be sparse or not. Now it is just explicitly handled by a explicit proposal, very clear. A static message. You know if it is sparse or not. You can go on. Sparse is a term that is such by having a hole or not. Because like, there’s one special case it would have an exception when you just started an array. For example, with `new Array(100)`. And then you fill it up afterwards. That would still be like nonsparse in this case. Even though it started sparse. It should be very trivial to implement and get optimized code in userland.

RBR: The algorithm is straight forward, we check if it is an array, otherwise return false. We could theoretically throw in case a non-array is passed through. I wouldn’t mind that. That is up to debate, I would say. And then we just check for the lengths and check for each of the properties being there. If it is then it is true. Otherwise, it is false.

RBR: We already have differentiation of internal types in V8 and SpiderMonkey and also JavaScriptCore as far as I know to handle sparse arrays, returning that information should be straightforward. Only proxies would be slow in this case.

RBR: And examples what it would look like, that would be something to debate, for example, if we want to handle array-like objects that is something we can have a look at. Would definitely help for correctness in a couple of cases. Because we have a hole, in this case, for example, we would just get a NaN, while a sparse array would keep the hole as such. And like what is the hole? Like not a number. It is very clear. Well, the hole is a bit difficult to even understand what it stands for. And there are a couple of edge cases that are not like—it is difficult to handle even spec-wise, I believe, and sort and stuff.

RBR: As soon as, like in V8, for example, there is a very nice blog post about the issue when you ever access an entry outside of regular indexes. In this case, like any code that handles that part will actually run slower. So it’s definitely a performance cliff that we want to prevent and checking for that is positive overall.

RBR: Where it can be used as in data validations, when we are serializing, we want to have a correctness. And we want to have it spherical, if something does it would leak through the hole. Okay. Where do we use it at the moment or check against situations like that? For example in node, every longing, every assumption, Lodash, all uses that, and check for holes. Lodash definitely does that. Jest does it for snapshots and diff logic. fast-deep-equal is a library to compare fair objects and the same for deep-equal. object-inspect is logging or serialization part. And it handles it. And there is a lot of that actually in polyfilled code. Now, for example, polyfilled code wouldn’t become better by adding a new API, but theory, like a new future polyfills could actually be more performant in the case that API exists for a while. That is definitely a likely use case, I would say.

RBR: Like I said initially, we could name it differently, for example, like array is dense. There is prior art and/or languages as well. That’s why I believe isSparse is good. For example, in Python, there is scientific Python, in this case, they have a sparse message, and also when you work with Android, there is a sparse array class. So you can definitely have a similar thing as in JavaScript in this case. And they have it for performance reasons and it always depends on trade-offs on the algorithm or the data structure used if one or the other would be faster. But this dedicated class would exist in case you wanted to have something like that. And I also already mentioned like the internal types. So like, for example, in V8 or SpiderMonkey you have like something like is fast packed elements kind or holey—element types, etc.

RBR: And we don’t, like we would just expose an already existing information as such for users, which they can also know on their own. So we just want to have faster code. Which we can use to actually get correct code to run faster or we want to have very secure code to also run faster. And we don’t care about sparse arrays normally. We want to prevent sparse array usage. That is actually the major goal. So that’s the simple proposal here. It’s—I don’t know what questions exist because next steps would be getting input, addressing comments, the we want to go that way or not, like it would definitely be an alternative, to I mentioned differentiation of the index and `NonIndexStringProperties` versus `NonIndexStringProperties` on Object.propertyCount.

CDA: WH.

WH: Is the intent that this method do the work in constant time or would you want to provide this method even if it requires a linear scan through the entire array?

RBR: So right now we always have to do the linear scan. There is no way around it, as such, I want to have it, it is an explicit API, it makes it very simple to read and understand. And performance would not be slower than with the colonel way of writing it. Ideally, and I believe that would be the case in pretty much any engine, they can optimize to an O(1) access.

WH: I’m not sure I agree with this. If this were slow then people might not do an extra sparse array test and instead just run their algorithm directly avoiding an extra scan.

RBR: That’s the major problem. So like, for example, I’m the maintainer of assert in Node.js which is also used for trip equals the same algorithm. Just as, instead of throwing it, it would return true or false. And like there, we have that check for, I don’t know, I believe—I don’t know, like—forever pretty much. And we actually have a very high overhead explicitly for collecting if an array isSparse. Like in this case I optimized that check way doing a very crude check, actually, I’m checking for first if a value is undefined and while I iterate over the array anyway, and then if it is undefined then I check the enumerability, I only check for the enumerability in that case, because the enumerability check is quite expensive. So it is like, I try to really push this case out with very crude code. Because it is so slow otherwise. And like mostly no one does that. No one would even check for something like that. They would just check for existence with enumerability and that is very, very expensive.

WH: Okay. My concerns are about the usability of this. There are a couple aspects. One is polarity of the question this asks. If this thing returns true, then you’re guaranteed to have holes in the array. If this thing returns false, then you may or may not have holes in the array. So you haven’t really learned much.

RBR: Why?

WH: Because of array-like, such as the examples you have on the previous slide.

RBR: So, actually in this case, because we—because I suggested not to handle the array like, you mean?

WH: Yes. There are three possible results. One is you know it is dense. One is you know it is sparse. And the third case is, it’s a maybe. And this conflates that maybe with dense instead of sparse.

JHD: But if you use—

WH: I think it is a problem.

JHD: If you use `Array.isArray` that distinguishes between the two cases.

WH: Yes.

JHD: Given this is a predicate it can only return two states, it is very bad for a predicate to throw. I’m not sure how to support that.

WH: The fix for that is that most of the time you’re interested knowing for sure there are no holes in it. If you called this isDense, you could return false on things which are not arrays, and it would be fine.

JHD: Like isDenseArray or something, yeah, that—I mean, that would, I think that would solve the same use case, sure.

WH: Well, that would avoid the pitfall of it returning false and you forgetting—

JHD: And also.

WH:—and forgetting to check it being an Array and then operating on a sparse array thinking it is dense.

JHD: That is a fair point, yep.

WH: Going back to the other usability point, by having this as a built-in method, you’re encouraging folks to call this a lot more than if they have to do quite a bit of other work to implement it. You can imagine libraries calling multiple functions, each calling `Array.isSparse` internally. What they should be doing is calling it only once and caching the result.

RBR: Well, but I mean, programming mistakes are there all along. And I would imagine that especially an API like that would be used where people understand also what it stands for. And otherwise, they probably don’t use it.

WH: I’m not sure how that relates to the point I just made. My concern is that, if this thing is O(n), you want to encourage people to call it once on an array and cache the results, rather than calling it inside each method you call on the array.

CDA: There are a lot of items on the queue.

WH: Okay. Let’s continue.

CDA: Can we go to MAH.

MAH: Yeah, `Array.isSparse` is insufficient for proxies, for example, even then, it is a point that MF was making a little bit earlier. But I’m not convinced an array that was sparse and is made whole again, if you want, can actually be considered dense by, will be actually be implemented as dense the way the programmer using this API would want to know. I don’t think there are any ways of differentiating between the two sparse responses.

RBR: I’m not sure I totally got that. So like right now it would be made whole again. Like if every hole, like if you start with a sparse array and you add them later on it would be considered fine. That is correct. With this API.

MAH: With this API, but I don’t think—programmer using this, this API would expect if it is not sparse that it was—WH’s point, if it is not sparse, they would expect some kind of faster behavior probably. Possibly. Which cannot be really guaranteed with sparse array being made whole again.

RBR: Correct.

CDA: All right. There’s comments from SHS evidence. Sometimes O(1) and sometimes O(N). KM.

KM: Yeah, I think there might be a misunderstanding how JSC works. There is a sparse mode, you have indices that are very part apart, you have an the Deci at 10 million, 5, and 3 billion, like nothing in between. Where it turns into a hash table. So this would always be ON in JSC and it would probably be a pretty, non-trivial amount of work to make it do the same thing as V8 and adding that simply for this checked with probably not be something we would want to do. The, I think, so I think, V8’s, if I understand correctly, actually, I would like OFR state it, he is next on the queue, their implantation still has this problem. You can go to holey, but that will not convert back once you become dense again, you always have to check if there is a hole in it. I don’t think developers will be aware of this, they think this is a simple check that the engine can fold away and do it constant time. It seems like a lot of the motivation of this is like trying to avoid a lot of the perform ins issues around holes and prototype chain walk. If I were to see any proposal, I guess I would rather see something that like converts arrays into like a TypedArray like things where index accesses just stop forwarding to prototype and it is an opt-in thing, you don’t have to worry about holes anymore. You have a hole, it is filled in with your value and doesn’t have to worry about someone to intercept your access. That would be a lot of work for engines, but feels like what a lot of people would expect out of arrays and arguably could have been what arrayals could have been from the beginning. That is are is my opinion, I’m sure there are people that disagree with me, but—

CDA: OFR is on the queue, and an O(n) in V8. And major slow down. OFR.

OFR: Maybe I can quickly explain. We have holey arrays and non-holey arrays internally that do not necessarily correspond to like the semantics you envision for your `Array.isSparse`, because as was mentioned, for example, if you fill the holes then, then the array becomes not sparse according to your API, but internally, the API would still keep this as a holey array. And but in general, I don’t think we also would want to make any guarantees what kind of internal representation we keep for the arrays. And there’s also a bit of, so there’s additional considerations going into this, like, for example, if we would go back and forth between different shapes of arrays, that also internally makes our code more polymorphic, because now where somewhere this array changes shape and it is used somewhere, then suddenly now we have to expect two different shapes. So actually it is better to stick with the shape that you decided early on quite often.

OFR: So yeah, so in general, I think, depending on the API, that really depends exactly on the spec. Maybe sometimes we can give an answer in constant time, but I would not want to make any guarantee, basically no guarantees maybe we could, but typically no.

RBR: May I directly, this has come up a couple of times. May I directly respond to that or give a comment.

OFR: Yeah, sure.

RBR: I’m aware of that and to be expected of that. I only know of one API that returns in V8 when you start with a holey array that goes back that is called `Array.prototype.fill`. It changes the shape back to a dense one as an exception of the rule. Normally, that is not the case. As such it is more like doing always, do 100% have an O(n), which I currently have. Or do I hopefully, I say, hopefully, have an O(1) instead?

OFR: Here’s the problem. Like if you use this API in a way that you first check this and then iterate the array anyway or the keys anyway, you are slower doing this, right? Whereas if you did one loop and checking if it is sparse and work you do in one go it is faster. It is not even clear with the guarantees that we can give you that you would get an overall faster solution to your problem.

CDA: All right. Sorry, just want to note that we have just a little bit over five minutes left for this topic. Lots of items in the queue. So please try to be brief. SHS.

OFR: I actually talked about the wrong topic. The other topic was I don’t think a holey array is a massive slow down in V8. I would be curious to see actually data where it makes or breaks a program. I would be surprised by that. Typically if goes into dictionary mode, yeah that is a problem. But as long as it is just holey versus non-holey it is typically not that big of an issue.

RBR: It is not directly related to that. It is more of to check for an array that is sparse, that’s the most expensive part.

CDA: SHS.

SHS: Yeah, I was going to say, if this is guaranteed O(1) it could be usable, but if it is always slow, you are saying is not possibly not useful. I don’t know if MM was replying to my comment on non-determine. I. But it is O1 because you have to take a slower path for holey array. And o1 in most cases, most arrays are dense, maybe that is fine as is.

MM: Yes, I was responding to what I saw to be your question. Interpreting as implying nondeterminism, where it is, there is fast part potentially giving different answers for different implementations.

SHS: Yeah, that is right. But the O(1) in the most common case and O(n) in some cases is still useful.

MM: I understand and agree it is well motivated. I would rather not have the eight at all, then nondeterministic one.

SHS: I’m backing off on the nondeterministic one. Chris KM.

KM: Only possible to be O(1) in V8, it's always O(n) in JSC. The only reason we have to add dense arrays support simply because we have not found that the dense versus holey optimization was profitable. So we didn't implement it because we didn’t find it profitable. So to only add that optimization simply for this API that already feels like a bit of a foot gun would not be something that we would want to do.

CDA: WH?

WH: The non-deterministic case is also a funky communication channel—you can learn the history of how the array was made.

CDA: MF?

MF: Yeah. Some of what I want to say was already covered. I’m grateful for that feedback from the implementors. I do see a use case for this, I see the problem that you’re trying to solve here with this performance cliff. And if we can verify with data, as requested, that there is a performance cliff here, I do think it is worth solving. You know, a use case I see is that you have an API that takes what may be a sparse array as input and saves that and stores it as like a working buffer that it does many operations on over a long time. If you take that sa input, you want to do a check ahead of time to see if it is sparse or dense because you may want to do a copy into your own dense array, in fact, like densifying it, if necessary, so that all of the work that you do on it for a long period of time later is more performant. Again, this is assuming there is a big performance difference there. So I, if that can be shown, I do think that is a valid use case, but that does sound like pretty much what KM suggested, make this some kind of more efficient, guaranteed-dense data structure. And maybe that’s the route we want to go. But I do still support it, I do support investigating this problem area.

CDA: NRO?

NRO: Hi. Yes. Someone already briefly mentioned this. There is a potential foot gun with this proposal that is the common way we should expect to use these, I have a function, it receives an array, I check, it is dense, if it is dense, I go in the fast path, if not I go into the slow path. Like, for example, in slow path for every property check if their array actually has the property or not. However, like the denseness of the array can change when reading properties in the array, with the Array getter. So we need to find a way that people do not accentuate between fast and slow path depending checking whether it is dense in the beginning. Because then when they use the array the result might be changed. Like how, is this the way that the API is meant to be used or the expectation that before reading the property from the array first check if it is dense?

RBR: That’s a very good comment. In general, I appreciate the feedback about it. Like I believe it is a difficult problem to solve right as such. Especially with the current feedback. I’m not certain anymore if this is an ideal API for it. I don’t know an alternative at the moment for it either.

NRO: Maybe, there was a proposal from MM, but checking something that is stable. That means you can read things from it without worrying about the effects. Maybe something here, you’re looking for, checking if the array has owned property and nothing else. Like basically an array, but it is a different API from what you can see. Like a dense array that does not have an excess.

CDA: So we are at time for this topic. I have captured the queue in case we want to return to this later. I believe that we agreed earlier to go through all of the topics before we, before you ask for consensus for advancement. Is that still accurate? Preference expressed by at least some folks. Okay.

### Speaker's Summary of Key Points

* List
* of
* things

### Conclusion

(see end of day)

## `Array.getNonIndexStringProperties` for Stage 1

Presenter: Ruben Bridgewater (RBR)

* [proposal](https://github.com/BridgeAR/array-get-non-index-string-properties)
* [slides](https://github.com/BridgeAR/array-get-non-index-string-properties/blob/main/slides/07.2025%20-%20proposal-slides.pdf)

RBR: Thank you. I said before, I’m trying to simplify the object and property count proposal. And one part is actually getting the nonindexed string properties. We have a special case for arrays and TypedArrays in this case, which we don’t have, for example, for sets or maps. And like when you add an entry to a set or map it would, you don’t get that back when you call `Object.keys`, but you do get in the answered property that you would apply to a set or map. Now, this is something not too typical, but you, when you went to have very correct code you have to check for it. And like, this is most crucial for arrays. For correctness. So that’s why I propose with JHD a small helper that would accommodate that need to know if any extra properties are on there. I believe the most common use case is to see what properties are on an array. And not only know the count in this case. Like if you get the count, you pretty much care about getting them. So that’s why this added method is there. First of all, the name is very long. JHD and I discussed the quite a lot about the name if there is anymore precise naming for this type of property. We couldn’t come up with anything shorter. That’s why it is currently like that. If anyone has a different name, I’m very happy to hear that. And the main idea is to just return good evening, that is outside of the regular array index. In this case, that also prevents the ambiguity of what the index would look like. That’s why it is proposed on array directly.

RBR: So motivation. Or to start again. Arrays can have own enumerable string properties that are nonnumeric indices, to handle them, you have to filter it in quite a weird way. In this case it has to be a number that starts with zero. And has to be up to the power of 32 minus one. So it is a bit weird to filter these entries. And yes, this [example on slide] is done in code currently. To showcase the differences, for example, when you inspect an array. Definitely node it is done. You can see that when you call council lock.

RBR: We also have, as I mentioned earlier, on arrays, sometimes properties added. So maybe we do care about which ones exist, and this is when you call match, match all with regular exceptions and that’s just a return array with those non-index string properties.

RBR: Python has something roughly similar as far as I could tell. Like the `list.__dict__` exposes non-indexed attributes that are publicly accessible. It is, like not directly related, but the question is also like JavaScript is very specific about that. How we handle data types is quite different to other programming languages which is the main reason why there’s not a lot of similar cases in other programming languages.

RBR: So how is the proposed API looking like? Very simple. We have the non-index string property on the array . We have the target. We convert it to an object. We could theoretically check it is only an array instead. And to throw a TypeError in this case. I’m totally open to either/or. It is more like in the end we care about really knowing these extra properties, when you call that method you should be certain it is an array already. So I don’t worry about either case. In the end, we return only the enumerable ones and that’s pretty much it.

RBR: So which, like, in this case if it is a type error, if we want to go that way, I would prefer a little bit over calling two objects. This is actually wrong in here, in the slide. And then we only handle the arrays. We have to discuss array-likes though, how we want to handle those, I believe array-like objects are always a little bit tricky to deal with. And placement idea was to simplify the object property count proposal and because it is a main major issue only for arrays and that’s why I am only put up, put together the array proposal. If this is accepted and deemed a good proposal, I would probably also go ahead and suggest something similar for TypedArrays. Because that’s the only other type where we can also do something similar and when you really care about the correctness that would, you know, fill up the space and can handle all of these cases altogether.

RBR: The name, as I said, is long. But it seems to be the most clear for the intention. And if there’s an alternative I’m very open and curious to hear that. We could extend that proposal to also, again, have that enumerable argument. I believe, actually, since we are coming back to that, that is good—coincidence to discuss how we might generally handle three states if we want to like define something as, okay, if we have it, a situation where we care about three states do we want to normally deal with it as a string or something else like that? Because in these proposals, it’s coming up more often. I believe the would-be good to just think about it in a more generic fashion.

RBR: Yeah. Then the length property is a little bit special due to it not—I mean, it’s a magic property pretty much in JavaScript. And it should probably not be returned there. If it is, non-enumerable or if it is not like, it is a bit questionable how to deal with lengths. I personally would normally not return it at all. That would be my suggestion, but that is an edge case we have to discuss if we want to go that route.

RBR: An alternative I also thought about was to just extend object keys with options where we can do something similar, but it would again be a downside to the very explicit handling of its only an array and we have, again, the problem of what is the index looking like? Is it actually all index types? Or only a specific range? And therefore, I didn’t go that route.

RBR: So yeah. I’m very curious to get input and seeing—if this makes sense or if it would be better to maybe keep that as a separate part on the `Object.propertyCount`. But I do believe it is actually necessary to get the properties at some point. Like we have code in Node that does that, for example. And there is a V8 method we use for it to overcome the performance overhead otherwise.

CDA: Should we go to the queue?

RBR: Uh-huh.

MM: Yeah, so—

CDA: Sorry, MM. Hang on.

MM: Oh, I’m sorry.

CDA: We have NRO first on the queue with long names are fine for these very specialized APIs. And then MM is next.

MM: Okay. So, the problem that this would be solving, which I agree is a well-motivated problem. I would like to solve it. I mean, we face the problem. Is that for all of the varieties of own properties other than the indexed property to find out about them currently requires enumerating through the indexed properties before you can find out about the other ones. Now, one of the principles of good primitives for algorithms where you might be looking for many particular things is fast reject of the voluminous cases, but you don’t have to be accurate with regard to providing what the user wants if you can provide a conservative envelope that contains what the user wants and somewhat more, but not something voluminous. The reason I raise all of this is that I find it strange for this one that you’re limiting it to enumerable string-named properties. I would find this useful, in fact I would only find this useful it gave me a shortcut to find string and symbol named own properties whether enumerable or not. In other words, if this were phrased, for example, as an option bag on `Reflect.ownKeys` or some kind of variation on `Reflect.ownKeys`. I do not favor adding options bag to existing APIs. So I would rather it be some new method rather than an options bag on an existing one. But nevertheless, think of this as something like ownKeys that skips the indexed properties is what I was looking for. And for the same reason of conservative container I would not at all mind if it includes length and the most parsimonious explanation of what this is would end up including length. So that would be fine with me.

RBR: So let me summarize, just because there were a couple of things. So, including 'length' is good. And we should go for either adding the enumerable property as suggested here as an addition on that right away. And ensure, like where we place it, it could be on `Reflect.ownKeys` instead. Okay. That might be an option. Like the performance is actually like, at least from what is used in Node at the moment, and due to using the internal V8 method, there is exactly that skip part. So like the performance difference is significant in this case for a bigger array. Because the properties are sorted internally in different buckets. So they are first sorted in, let me think—

MM: Indexed properties come first.

RBR: Yeah, they come first. Then the string properties, I believe, and then symbols are linked.

MM: Yeah. The thing is with indexed properties coming first, there is no way, currently to find out about the other ones without paying the cost of enumerating through the indexed properties.

RBR: Yes.

MM: So, if there is simply a way to skip past the indexed properties are what I find to be a strong motivator.

RBR: That is exactly it without the symbols, by the way, if we return those as well, I personally would be fine with that. The original idea around it was that it is currently possible to return the symbols separately. This is currently, like we just cannot differentiate index versus a NonIndexStringProperties currently.

MM: Oh, right, there is an existing API for enumerating only the symbol-name properly.

RBR: So you are `Object.getOwnSymbols` that returns all enumerable and non-enumerable symbols.

MM: Okay. Including symbols is not a strong requirement here, you can do-it-yourself. But including nonenumerables is.

RBR: Yep, uh-huh.

MM: Okay. That’s all.

CDA: NRO?

NRO: Yeah. One more question about what you currently do. So I understand, you, for example, you use full in the log output because it shows the array and then the array the named properties. Do you currently use like for loop from zero to length to get the indexed properties and then after that get all of the keys and filter them? Or do you just use like a for loop over the object keys to go through the properties and the key index sorts the properties before in the right order.

RBR: There are different algorithms that Node uses. So it depends. And like one use case is for the longing that you just spoke about. What is done is to actually like we do call the extra properties, like something like that pretty much, which returns only the non-index string properties. We iterate with the for loop over the lengths of the array. I assume, and now, we check while iterating if there is a hole or not. If there is no hole then everything’s good. And we just print it like that. If there is a hole, now, there’s another option in node we call object keys, so if you have a huge hole it is cheaper to call `Object.keys` on that. So that’s why then only over the keys is iterated and then it is cut off from that point on. So it is a bit weird. There are on edge cases, it would make the code much simpler if something like that existed with also the other APIs and to know if something isSparse or not. If something has these properties or not. It makes it very, much, much similar to deal with.

RBR: Then in—in assert for example, to compare objects we also loop over the lengths and check for if there’s a hole or not, but that just doesn’t do anything else. And then afterwards we go over all of the NonIndexStringProperties which we receive through an internal V8 API that is not specced.

NRO: Okay. Thank you. I understand why you need to do this.

CDA: There is nothing else on the queue.

RBR: So, thank you for feedback in this case. And like to summarize, last time I understood that like mostly the feedback was positive, I heard. And what would be requirement is pretty much to have, and this by—in the beginning already. I would still have a question about having a separate proposal for TypedArrays in this case because I believe it pretty much only applies to Arrays and TypedArrays, I would make it explicit on these two otherwise not. Or if we want to go for Reflect. I believe that would be a question from the committee on my side how we want to proceed in this case. We still have this three-state part to discuss. Like how we would want to deal with that. I could make a suggestion to make it like a string in this case for all three where we pretty much have like enumerability—none, for example, all, or only enumerable or something like that. I can think about more names if you want. Is that good? I take—

CDA: Now there are a number of items on the queue. So go to JRL.

JRL: Okay. I think this proposal depends on there being a good fast path inside of engines. I know V8 has this particular fast path you’re looking for. Do or engines maintain the keys for index and non-indexed separately?

RBR: I would like, just without knowing, I do believe we have to have something like that because they are already sorted, right?

JRL: Yeah, but that could be done as two loops through the keys or something like that. If they have specifically split the same way that V8 has done, this is a very simple API that gives you access to, to essentially an already maintained array that already exists, and effects a small discussion in matrix how we implement isSparse.

CDA: KM?

KM: I believe we do. We definitely have a property table that has all of the—we—yeah, distinguishes the indexed keys from the nonindexed keys I believe it also, I don’t know if it completely distinguishes the symbols though. But I kind of assume we do because of the way the enumeration works where it splits them. So but if—not, I mean, I guess, I guess—if not, I guess in theory this maybe we would be better as an iterable or something where we could just skip over those ones, but it probably, it is probably too early to decide that here, I think, we can decide that later for the reflection, I think, looking at it further.

CDA: MM?

MM: Yeah. The limiting all of these array-like things only to arrays, you know, postponing the proxy question until the later discussion. But the reason why I find that limit strange anyway is that early on in Ecma-5, I believe, we were very, very careful to ensure that all of these higher order array operations could all take a non-array as "this". And we specified, we specified what the behavior is so it was well-defined on non-arrays because we had at least back then, I would suspect we continue to have many array-like objects. Like the DOM Nodes object that are not arrays, but are nevertheless treated as arrays for most purposes. And that includes, I believe, if you enumerate their properties, the enumeration order, even for non-arrays, is still guaranteed to do indexed property first. Somebody should double check me on that. But if that’s the case, then I would prefer not to see these algorithms limited to arrays.

RBR: It could also be Object.getNonIndexStringProperties.

MM: I’m not concerned about where the API is. It can still be on array, like the array generic operations on are on array, but apply to non-arrays. The thing that I’m complaining about is when the algorithm says if it is not an array return false or something. I would prefer it to just state the algorithm so it didn’t care if the operand was an array.

RBR: Right. How do we know the right index length in this case. The array we have two to the power of 32 minus one. Whereon TypedArrays we don’t.

MM: Yes. I think, the fact that TypedArrays have a different criteria, TypedArrays and strings, together, have a different criteria with indexed properties then arrays and all other objects do creates a problem. But I think that the, I think the right way to address that problem is to simply ad mitt there are two different concepts of indexes in the language and we need to be clear when we’re talking about each one. Rather than trying to do it by type differentiating. Oh, if you’re going to do it by type differentiating, I think the answer on that is clear. All of the objects that are neither arrays nor TypedArrays nor strings all use the same definition as arrays do.

CDA: Richard?

RGN: Yeah we raised that topic. Actually, I think it was me that raised that topic last meeting. I believe the result of the discussion is that when you’re looking at properties generically, only the array indexed properties have special treatment. Just like is currently the case when you’re enumerating them.

MM: So you’re saying that for an array-like the indexed properties must be enumerated first would follow the TypedArray definition of index property?

RGN: Right. It would vary somewhat based on where the method appears. If you’re in an object context or an array context, as indicated by where you got the function from, then it would only be the array index properties that are in a special category. If we had something specific to TypedArrays then that would be the only thing that uses the special definition for TypedArray indexes.

MM: So, clearly everything has a defined enumeration order. And that enumeration order says index properties first. So for all values in the language it must, there must be some type-based determination of what the appropriate definition of index properties is. And this could be generalized by simply adopting that same definition on a per-type basis.

RGN: Well for property enumeration it is not type specific when you’re enumerating. It is only the array index definition that is special. Even if you’re enumerating the properties of a TypedArray, what you will see is the array index ones come first in numeric order. And then anything that exceeds that in lexicographic order.

MM: So indexes on TypedArrays might appear after non-index properties?

RGN: Yeah if you’re enumerating them with an Object or Reflect function.

MM: Since we’re only asking for stage one on this, I’m going to postpone diving into this, I’m glad I raised it.

CDA: NRO?

NRO: Again, I would like this option for the propertyCount proposal, but I—think that should be done after this proposal goes to Stage 1. I think we would, the use case here is to in general get the properties that are non-array-index properties and then exactly the future should be discussed later.

RBR: Sounds good to me.

CDA: GCL?

GCL: Hello? There we go. So, I wasn’t sure to say this for this proposal or on the next one, but I’m just kind of thinking like there’s this really nice API in V8 called key iterator where you just tell it like whether you want own properties or prototype properties. Whether you want strings. Whether you want indexes, whether you want symbols, whether you want numbers, if you have numbers, whether you want them to deal stringified or not. And then it gives you all of the properties in the correct order based on that. I feel like, I mean, that’s a lot. But if, I don’t know if maybe like it we’re adding all of these new methods like whether something like that might be more helpful, especially if we’re going to come back to this in the future for any reason. I don’t know.

RBR: So I personally would be fine with that. I love that. I believe that is the API that we’re using internally in Node to receive that part. And it’s very powerful as such. Right? Because you have all of the differentiations imaginable. In this case, the idea was actually to keep it very limited because often like, that would be a much bigger API. And would potentially add a note, depending on the implementations in the different engines just also cause more work so to speak. But I’m open for that, if that’s, if that’s the way to go, I believe we could. Because it would solve the same problem space.

CDA: NRO?

NRO: I think it is good to represent the proposals, all of the things we’re presenting have separate use cases, and yes they are in the same space of more, fine grain, reflection, other objects, but like even their different use case it might be possible that some of this end up in part of the language. Others don’t. And it’s possible for different use cases it is good to have different separate APIs, depending on what the APIs end up looking like. So deciding now whether it is worth doing or not. I think we should go through them one-by-one as their proposals. And in the future, we have one API that does everything, but it is too early to say that.

RBR: So I believe there was very valuable input, like I would definitely try to look at the option, like how to name that. And for the three states. And to make sure that it is there by default for now. Gus, if you wouldn’t mind, we could also just meet afterwards maybe and discuss potentially about the other API. I’m not sure if you would be interested in that. And like I would think about where to place this to make it more generic as such. I believe the most simple way to put it on Object, that is my current approach that I take along from the current discussion, that is fine. After the last one, I hope, because it felt like the overall idea is still that we want to proceed with something like that. So even though there is still should changes ongoing, I hope we can get it to stage one after the last proposal.

CDA: All right. Thank you. We will move onto the final topic. If that’s all right.

### Speaker's Summary of Key Points

* List
* of
* things

### Conclusion

(see end of day)

## `Object.getOwnPropertySymbols` options for Stage 1

Presenter: Ruben Bridgewater (RBR)

* [proposal](https://github.com/BridgeAR/object-get-own-property-symbols-options)
* [slides](https://github.com/BridgeAR/object-get-own-property-symbols-options/blob/main/slides/07.2025%20-%20proposal-slides.pdf)

RBR: One second. Whoops. Yep. All right. So, like actually, again, like after looking into these use cases with the other APIs, it was very frequent or for me relatively frequent thing I saw is that when someone uses `Object.getOwnPropertySymbols` in about 90% of the time they don’t want to have the nonenumerable ones, they only care about the enumerable ones. They want to filter the nonenumerable ones, which causes an extra overhead that we now have to iterate over the whole area where we already allocated additional memory and CPU cycles on getting those and now we just create a new array where we remove these afterwards.

RBR: So I would like to add an option and to filter these by default so we don’t even have to do that work upfront. Like where it is, relatively frequent is in any serializers or loggers. And as sometimes libraries attach like some properties with symbols to hide implementation details, because most users only use object keys and when they don’t use private like classes with private property, in this case, and they often use symbol-keyed properties to hide things away. In this case, they often also do that in a non-enumerable way, because they are not logged because the serializers filter them. Which is good.

RBR: So right now we do have that over head of calling `Object.getOwnPropertySymbols` and addition to filtering and then checking for the property descriptor if it is actually enumerable or not. Which is like one way of doing it. There are—actually, it is the only one I can think about for this one. And it is extra code and there is no way of optimizing it currently. And I would like to just be able to do that. Like the current APIs that we have, we spoken about, like that are sometimes a bit weird, I do feel that. Because it is inconsistent for me how they are handling properties. Like `Object.keys` is only returning enumerable string and keys and `Reflect.ownKeys` returns everything, and getOwnProperlyNames returns the string names, and getOwnSymbols returns symbols enumerable and nonenumerable ones, and most cases people care about nonenumerable ones especially for symbols there is no API to handle symbols at the moment for only enumerable ones. We do have the object keys for enumerable strings so that’s good. That is why I believe there is need for something else there.

RBR: But like when I looked for it, like Lodash, node—and many more, filter the enumerable ones at the moment when checking for symbols. Like I have a couple of links here and I can show code if we want.

RBR: And like the addition doesn’t break anything because we just add an option. There is no current options so that wouldn't hurt. Again, we have the three states we have to discuss to figure out how to deal with them. Because I believe it should be three states from the initial discussion, I feel like we should always have those. And especially with adding more of these options with a different proposal, it would make sense to have it consistent across all of these. It is quite straight forward in the usage, I believe, like you just define it as false. And enumerability is false or true and define it and check it afterwards and get to the expected properties.

RBR: Like the specification is in here, I don’t believe we have to go through it right now it is more of the idea if we want to push for that or not. I did think about alternatives. So, we could, of course, have individual methods that only get enumerable ones instead. But like as discussed earlier, I believe more methods make it actually more difficult to find these. And like an option is normally simpler, and these will autocomplete and users will definitely find the options, I’m quite confident, the option is much easier to find than an extra new method that is added to the spec. Like filter could be added to `Reflect.ownKeys`. We could do that. It already came up in the earlier proposal. So that’s possibility. Or we keep everything, but I don’t believe that is quite good.

RBR: Yeah. Polyfillable. We don’t have any side effects. Etc., so I don’t believe there is any downside. Like should we add the "all"? Similar to the others? But in this case I believe it is mostly because the current default is "all". It is a little bit different, because all of the APIs have different default or behavior. Like should we add "all" or should we not? I do believe yes for consistency reasons. We could add additional features like configurable and writable, but I don’t think we need it right now, we would have to have a strong reason to add it, finding more use cases. Mostly it is about enumerable in the first place, that addresses a big performance problem in the ecosystem right now.

RBR: So yeah, I’m pleased to hear your comments. And to discuss it more. Like I do have to publish a polyfill for these maybe. And to see how things are going.

CDA: KG?

KG: Yeah. I’m fine with the solution space for stage one. I feel extremely strongly that the proposed solution is wrong. I would not accept this method going forward to be anything other than a new separate method, not an options to the options bag. We have `Reflect.ownKeys`, we have `Object.keys`, we have `Object.getOwnPropertyNames` and `Object.getOwnPropertySymbols`, these are all other points in the matrix. If you’re going to fill out the matrix the way to do it is with a new method, not an options bag. If the proposal is filling out this hole where there's other methods which do something very similar it needs to be its own method. Now, if we’re talking about adding other kinds of variability here, about like, you know, if you want to filter only the writable properties or only the configurable properties, whatever, I’m okay doing those as an options bag, they don’t have existing methods that are only varying different parts of this matrix. But we have `Object.keys`, `Reflect.ownKeys`, getOwnPropertyNames, getOwnPropertySymbols—the only acceptable way to solve this is with a separate method.

RBR: I have a question. Why is there a—strong reason against, for example, we could say we want to add the option for enumerable on all of these.

KG: I mean `Object.keys` versus `Object.getOwnPropertyNames` is already the enumerability. We already answered how do we get enumerable or not: with a separate method. `Object.keys` versus `Object.getOwnPropertyNames`, those are exactly the same except for one filters by enumerability. So if you want to add anything that is exactly like `Object.getOwnPropertySymbols`, but it filters by enumerability, this is literally a two-by-two matrix for string versus symbol, and enumerable versus non-enumerable. There is one hole, and the way to fill out the hole is to match the other three in the matrix.

CDA: KM?

KM: I guess I agree with what KG said there a method for consistency, but if you care deeply about performance on this, you don’t want an options bag, because that option has to be allocated every time you call this. In theory, in JSC and probably the other engines in their most optimizing compilers they might sync the optimization, but you have to be deep, deep, deep inside of the optimizing pipe lines of the engines and code has to be super, super hot before you get the efficient behavior. So you probably want a separate method. Icing on the cake, I suppose.

MM: So before I ask my question, I want to ask a meta question. I have a lot to say as I mentioned for all four proposals combined. Is it was appropriate for me to start those discussions now? Or should, or do we have, or do we want to do a separate demarcation of questions specifically on this proposal versus the set of four proposals together? With nobody saying anything, I’m just going to go ahead and jump in to asking things that might type for proposals and some things that are explicitly about the proposals together.

MM: So the, my general, when I look over all of this and look over even the existing API, I think we got too much existing API and I’m very shy about adding yet more API with regard to enumerating properties. I find myself either using the narrowest `Object.keys` or using the broadest, `Reflect.ownKeys`. And what it seems like we’re trying to do, we have been sort of partially trying to do, if we want to read rationalization into the existing API is to invent more of a query language to anticipate accurately what other, you know, what various code might specifically want to enumerate. And the thing I like about ownKeys is that I don’t have to learn or express myself in some query language that may or may not, and usually does not, anticipate what I exactly want to ask about. I just enumerate something that is guaranteed to contain what I’m asking about and then do post filtering.

MM: The one change that I have been hearing about that I find well motivating is when the things I would be thought I would need to filter out are voluminous and therefore it’s very expensive to filter them out by manually enumerating. Like, and this, this is a place where this stands out. And to first approximation the only case where that stands out is index properties.

MM: The other thing that the set of proposals, specifically the first proposal is about is also trying to give you counts of things rather than having to get the enumeration and then it asks for the count of the enumeration. And once again, that is motivating when the enumeration is large. It is also strongly motivating when the question you’re asking is a question you would add many times, for example in a tight loop, which I generally have not seen on length queries. So my preference for all of these is, is opposite of NRO’s, which is that they all be put together into one stage one proposal with the emphasis being on algorithmic speed up for user code that is willing to do some post filtering, but not willing to do a lot of it. And only when we expect that the skipped user filtering is—where the skipping can be done in O(1), or least something substantiality less than O(N) across the high-speed engines, because if it is O(N) to do the skipping we didn’t gain that much over doing the filtering ourselves.

MM: So, so that’s the first big point, and I think the biggest point, that applies across all of these proposals.

RBR: So, like one part I was a bit uncertain about that you spoke about that was—in particular for example, here. Is when you get the symbols you always have to call like, you have to check for the enumerability while filtering, it doesn’t matter if you have enumerable or non-enumerable ones because you have to do the check one way or the other that is the expensive part. And it will be expensive for a few properties.

MM: So for me, the question I would be asking, whether it is worth adding API service to solve the problem. How often do users encounter objects with a massive number of symbol named properties? I have certainly never come across such a thing.

RBR: Depends on how many they have hidden and like how many properties. So for example, in Node, it is a very common pattern, instead of having a class with private properties, we have symbols to hide things way historically. And like also depending on how the code is written and like it was simpler to do it that way. So—

MM: So what, what is the maximum symbol count on a single object that you have encountered in practice?

RBR: It is probably roughly, I don’t know, 10 to 15.

MM: Okay. Not 10 to the 15th. Just 10 or 15?

RBR: Yes.

MM: So I would prefer not to add API service when the user can just do a post filtering and what they are interested in. Because you’re not going to anticipate all of the different distinctions that users are interested in. And you know, throwing away 14 out of 15 is just not a terrible cost unless that itself is done in a loop which I haven’t seen these things themselves be nested within loops.

RBR: Is more. Yeah, yeah.

MM: It is more on the outside of the loop. They are not on the inside. So I would just, I would just not solve the problem. You know, just leaving it to users to do their own enumeration and post filtering, I think doesn’t try to anticipate what the particular distinctions are that a user might want. And then the exception, the motivated exceptions are the ones where both there’s a voluminous number that we expect users to encounter in practice often enough. And that the API we expect would provide a significant speedup over post user—user post filtering across the high-speed engines.

RBR: So that part would be faster because getting the enumerability is actually expensive. The API call itself.

KM: Is that expensive because engines just don’t optimize it. That is something engines can easily do, it is never shown up as hot so they never bothered. So like which probably means that either our tests are measuring the wrong thing or you are doing something unusual.

RBR: So it is indeed, I believe, not that optimized in V8. For example.

MM: Right. But, to expand on KM’s question, I’m sorry to interrupt, but to expend on KM’s question. Essentially there is two different asks of the engine that is in this conversation. One is for the ones where we think we really needed to be faster, we could either suggest that engines provide a new API or we could just suggest that they fix the underlying thing that needs to be faster if it can be fixed in a local and simple way.

KM: ZTZ?

ZTZ: Just a quick thought. When MM said there’s a lot of APIs already. Maybe instead of multiplying all of the possibilities into more functions we could consider the opposite and having two methods with an options bag that covers absolutely everything that would be symbols included or not included as well as enumerability and so on. Which also means that with the right combination of options in the options bag, I think, `Object.count` on an array host would be different than array with `host.length` which also covers detecting parse arrays. I don’t know if this makes sense, just a fresh thought. And since this is stage one, maybe this is going to be useful.

RBR: That was the original proposal.

ZTZ: Okay. I’m new here.

RBR: The proposal last time.

CDA: WH?

WH: The proposed doesn’t work on array-like. Just because there are four numbered properties and the length is four, doesn’t mean you don’t have a hole.

CDA: MM?

MM: Yeah. So now, I want to bring up the issue of proxies. So there are several issues related to proxies. And for stage one, I just, it is adequate for me to just mention them. Certainly I, nothing having to do with proxies is a gating issue for entering stage one. The algorithms, which you can have different particular algorithms written down but for non-proxies or non-host exotic objects are not observably different, but for which proxies make things observable that are otherwise not observable. And the algorithms that are written down, I think are not really well anticipating proxies. So for example, what happens when ownPropertyKeys tells you that something exists and you turn right around and do a getOwnProperty on it and getOwnProperty says it doesn’t exist.

JHD: MM can I jump in real quick, we followed what `Object.getOwnPropertySymbols` which basically if that happens we skip that property. If you’re generally just saying be aware this can happen on exotic objects including proxies that will absolutely be accounted for before seeking stage 2 or 2.7.

MM: Okay. Great.

JHD: If there is a specific type of behavior you except or want to see, of course, please file an issue or let us know. We are aware it needs to be handled.

MM: Okay. That’s great. That is my major concern about proxies.

MM: The other issue is any time we’re trying to call out arrays as special, that needs to apply to proxies on arrays as well. Because the existing `Array.isArray`, has the taxonomy where proxies of array are considered arrays that is used for example, by `JSON.stringify` that uses the same criteria that `Array.isArray` that determines what printing algorithm it is going to use.

RBR: I’m not totally certain to what proposal that applies in this case.

MM: So, mostly to the `Array.isSparse` where we talked about what does it do on non-array objects. If we generalize it so that it just applies to all objects and then it is type-specific what definition of index it’s using, then there’s, there’s much less of an issue, because then obviously it would include proxies on arrays because it includes proxies in general. There would still be the issue that the definition, if, if—if—regular objects use a different definition of index then arrays use, then there is only the, you know, comparatively minor issue just being careful to ensure that proxy on array uses the indexed, I’m sorry. It is—

JHD: Objects and arrays use the same concept of index.

RBR: Yep.

JHD: As do proxies.

MM: `Array.isArray` and `Array.getNonIndexProperties`. It is more `Array.getNonIndexProperties`. Out of all four proposals that is the one I find most well-motivated.

RBR: Yeah, I mean, was the nonIndexStringProperties, I believe, the, like, it felt like it should be more generic as such we could just apply the same for all objects and then like just collect what type is it in internally, so if it is a proxy or an array, then the array index would apply. If it is a proxy on something else, than the other index applies.

MM: No, no. I’m sorry for having to—surface this nonuniformity in the APIs that, that I designed, but if it is not an array then even if its on a TypedArray, the proxy on a TypedArray should just act for purposes of the API as a non-array. We only surfaced through the proxy interface whether it is an array or not, I’m sorry, whether it is an array or a function or other. And that’s, that’s the extent to which you can directly see—

RBR: But I believe that is fine. Because the index type in this case is fine.

MM: Yeah.

RBR: So that’s okay. I believe. I don’t see the issue there.

MM: Okay. Good. So, so that was it for my postponed questions. And my big one is simply: What I, what I do and do not find motivating with regards to justifying new API services and my desire to see all of these considered together across all four proposals to address with smaller total API.

### Speaker's Summary of Key Points

* List
* of
* things

### Conclusion

* List
* of
* things

CDA: All right. We are just about at time. And I’m also, we are almost 10 minutes into what would normally be the lunch break. But we have no other topics for the afternoon. I know some people have very strong preferences on not breaking for lunch and not returning later. So to that end, it seems like this would be the time to formally request consensus for advancement on your proposals.

RBR: Yep. So with the first one, it was, I’m a little bit uncertain now like if it should be really one or not. Because there were very, like different opinions now of the committee. And actually, even partially going back to the former proposal was requested. So in this case, like I do believe the overall idea of the first one was `Object.propertyCount`. I don’t know if there is anything standing against stage two. Like, everything is in there, I believe for that. With the others, I believe with `Array.isSparse` it felt like there was a lot of discussion around this topic. I’m not sure if we want to progress that to one yet or, like that was my feeling. I did see a couple of aspects to, think about it stronger. Even though it like—maybe just getting input on how to address it differently. And like the problem space.

RBR: With like `Object.getOwnPropertySymbols` to provide an API or not. I understand that it could, we could argue like it should be optimized in the engine so that, because we don’t have so many properties that are symbols. And that is an aspect I can see. And as such I can also imagine not pushing that forward from my side. Like to first get that in place before adding a new API. I would be fine with that.

RBR: And the other one was, which one was it? The `Array.getNonIndexStringProperties` how is the called? Get—`Array.getNonIndexStringProperties`. So this one, I felt like the committee was in favor pretty much of the idea. So it would be great to progress that to stage one in my perspective.

CDA: All right. So, as WH’s comment on the queue points out, we will be considering these individually. MM also has a comment on the queue that he didn’t want to speak to, but I’m going to push him the speak to it anyway on the object to stage two because I want to look at them together. MM, can you elaborate on this?

MM: Yeah. I think that all four together are addressing very related issues. The fact that there are four means that the first one by itself doesn’t cover what we would like altogether to cover. And—and—and—together they're too much API service for the functionality that they’re providing. So yeah, I object to stage two for property count by itself. I would prefer whether they are put into one proposal or not, to accept all of these into stage one or, you know, or whatever subset there is general agreement for stage one. And then to consider the overall problem space across them for me as if they were one proposal because I would like minimum API for the totality that is well motivated.

CDA: Okay. No, I understand your perspective. Where I’m a little bit confused, I guess, and JHD and RBR can correct me here, this one originally one proposal and the committee requested explicitly—

MM: Oh, is that right?

JHD: Yes, that’s right.

MM: Okay. Okay. Thanks for reminding me.

CDA: We have to pick which.

MM: You’re exactly right. I have been in a similar frustrating situations. That’s a very good point. I’m still not ready, given the issues I’d like to discuss that are touched on by their proposals, we don’t have to unify them, but I would like to hold `Object.propertyCount` from stage two until we understand better the issues across the or ones.

CDA: Understood.

RBR: If I may add one point to that, because `Object.propertyCount` is a little bit distinct from `Object.getOwnPropertySymbols` and the option as well as `Array.isSparse`, and `Array.getNonIndexStringProperties` because they return the actual properties. While property count is actually really only about "give me the count". I believe that is a, like all of these have a very distinct value from where they are currently standing. I believe just only does API on its own will address a major performance issue that the language currently is facing. Like, `Object.keys.length` is like a major thing in any code base.

MM: No. I understand that. I do appreciate it. The issue is that your options bag is basically designing a query language in anticipation of what queries the user might want to ask. And what that distinctions that query language should or should not be able to make, I think, should be co-designed with the query—the queries that we want to support with regard to enumeration.

CDA: All right. So noting Mark’s objection and then KG also objects to stage two, KG, do you want to speak to that.

KG: I have not been convinced of the utility of all of the various options `Object.propertyCount`. I’m convinced of `Object.propertyCount` without the other options, but not prepared for this to go to stage two with the other things in it. I would be happy to continue discussing that. If you want to open an issue that gives me some examples of times when people need counts for all of the various permutations, I can certainly be convinced of the utility. But I’m not right now convinced of the utility.

CDA: And MF is on the queue, plus one for KG’s comments. We are not getting stage two for `Object.propertyCount` today. Let’s move to the next one in the list. `Array.isSparse`. Do we have support for stage one for Array.isSparse?

JHD: A few of the queue items we’re giving plus one for stage one for all of them. So there is already been support for stage one for all of them. Just making sure.

CDA: Yeah. So MM expressed support for stage one for everything. Yeah. That is true. But we’re going to go down individually and just make sure we are clear for the record. WH?

WH: Which item are we—

CDA: We are on `Array.isSparse` for stage one.

WH: I’m unconvinced on this partly based on the discussion in Matrix where it became clear that these will not be O(1) algorithms. If we add them to the language, they will become an attractive nuisance, and people will call them a lot more than they should. And they will slow down programs. So I’m unconvinced that there is any solution to this space which would not have adverse consequences on performance.

CDA: Okay. Just to be clear, is your concern a blocking concern? For stage one?

WH: Ah—I mean, I—ah—

CDA: KM is also.

KM: I need to be convinced of this more. So if you’re not going to say it, WH, I can do it for you.

CDA: A reminder stage one is just about dedicating time to investigate if there is a solution to the problem space, not deciding on a solution.

KM: The way the problem space is defined is detecting if an array is sparse or not. And that current problem statement does not seem, it seems like interactable in like to solve for depending on the engine implementation and it is very engine implementation-specific it is not sort of not something I would ever want to reveal in like those kind of implementation details. So, I guess, like I would need to be convinced that somehow the solutions, any solution in that space is even possible like before that. I mean, like—I guess you could say, like I want to solve the halting problem and like, I guess, you could say that is a valid thing we want to explore, but without any, I can’t imagine any viable thing I would approve in that space. I don’t know if that is a sufficient argument to block stage one.

WH: Thank you, KM, you made the point I was trying to make. Given input provided by the implementors, I see no evidence at this point that there exists a solution to the problem space as defined.

CDA: Okay. Understood. Yeah, KM, we don’t qualify whether, you know, objections are valid or not. So—we’re not going to go down that route. So plus one to KM’s comments in the queue. There is support for stage one from ZTZ. And OFR is opposed to any speed guarantee or mention. And MAH is on the queue to confirm a problem exists first. So this sounds like a pretty clear signal from the committee that we are not going to advance `Array.isSparse` today. But just a reminder that, you know, a no is not necessarily final. And if you came back to the committee later with convincing problem statement or the benchmarks, etc., that MF mentioned, there could be a path forward.

CDA: Let’s go to the next one. `Array.getNonIndexStringProperties` for stage one. So we approve as mentioned previously. MM supported this for stage one already. And USA also supports for stage one.

USA: Yeah. This seems like it is—sorry. I can just speak to that a little bit. It is adding new functionality and its named in a nice way. So we’re convinced.

CDA: Yep. USA. Strong support from (?) on this one. And ZTZ. So a lot of support. Any objections for stage one on this. Not hearing anything. Nothing on the queue. So congratulations. You have stage one for this one. It is a mouthful, that’s why I’m not saying the whole thing out loud again. And then finally, `Object.getOwnPropertySymbols` options. Do we have any support for stage one here. We have support from MM. Any other voices of support for this?

KG: I don’t like the name. But I’m happy with the problem space.

CDA: Okay. So, you have support from KG. Any objections to stage one. MF also supports stage one. Hopes to see it as `Object.symbols` in stage two. MF, did you want to speak?

MF: No.

CDA: Okay. I already called for objections. Not seeing anything on the queue. Okay. I think that we will say that you have Stage 1 for this proposal as well. Okay. Hang on, ZTZ has a comment, not convinced it will be used in the wild, but support stage one, fair enough. All right. Congratulations, you have stage one. It gets a bit of a mixed bag for the efforts today. But congratulations on the ones that advanced.
