# 2 February, 2023 Meeting Notes

-----

**Remote attendees:**

```text
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Santiago Diaz        | SDZ            | Google             |
| Frank Yung-Fong Tang | FYT            | Google             |
| Michael Saboff       | MLS            | Apple              |
| Dave Poole           | DMP            | Apple              |
| Josh Blaney          | JPB            | Apple              |
| Richard Gibson       | RGN            | Agoric             |
| Chip Morningstar     | CM             | Agoric             |
| Daniel Rosenwasser   | DRR            | Microsoft          |
| Ron Buckton          | RBN            | Microsoft          |
| Daniel Ehrenberg     | DE             | Bloomberg          |
| Ashley Claymore      | ACE            | Bloomberg          |
| Rob Palmer           | RPR            | Bloomberg          |
| Peter Klecha         | PKA            | Bloomberg          |
| Justin Ridgewell     | JRL            | Vercel             |
| Andreu Botella       | ABO            | Igalia             |
| Nicolò Ribaudo       | NRO            | Igalia             |
| Ujjwal Sharma        | USA            | Igalia             |
| Ben Allen            | BAN            | Igalia             |
| Philip Chimento      | PFC            | Igalia             |
| Aditi Singh          | ADT            | Igalia             |
| Romulo Cintra        | RCA            | Igalia             |
| Istvan Sebestyen     | IS             | Ecma International |
| Kevin Gibbons        | KG             | F5                 |
| Michael Ficarra      | MF             | F5                 |
| Yulia Startsev       | YSV            | Mozilla            |
| Eemeli Aro           | EAO            | Mozilla            |
| Daniel Minor         | DLM            | Mozilla            |
| Jordan Harband       | JHD            | Invited Expert     |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Duncan MacGregor     | DMM            | ServiceNow         |
| Chengzhong Wu        | CZW            | Alibaba            |
| Tom Kopp             | TKP            | Zalari             |
| Linus Groh           | LGH            | SerenityOS         |
| Luca Casonato        | LCA            | Deno               |
| Ben Newman           | BN             | Apollo Graph, Inc  |
| Pieter Ouwerkerk     | POK            | RunKit             |
| Chris de Almeida     | CDA            | IBM                |
| Iain Ireland         | IID            | Mozilla            |
| Willian Martins      | WMS            | Netflix            |
| Leo Balter           | LEO            | Salesforce         |
```

## getIntrinsic for stage 2

Presenter: Jordan Harband (JHD)

- [PR](https://github.com/tc39/proposal-get-intrinsic/pull/17)
- [slides](https://docs.google.com/presentation/d/1dEwM0IeUrJxCbo_VR7p6kI1Yw6bvcxL780UsL25BLTI/edit)

JHD: This proposal is for getting intrinsics. As a reminder, the primary motivation I have to champion this is to be able to retrieve reliably the original version of a function for use in polyfills or any code that I want to be robust. This is something that doesn’t need to be super ergonomic, but it needs to be usable. This use case is not going to directly affect a large number of developers, but it will indirectly affect a very, very large number of developers. This is all things we discussed in the Stage 1 agenda item and prior.

JHD: The additional motivation that has been added speaking to MM and MAH and other folks working with SES is the ability to enumerate all of the intrinsics. What this will offer is one of the points of tension that we’ve had in the past has been when somebody wants to add what is referenced as a “hidden intrinsic”. For example, the `MapIterator` is something that you cannot directly find off of the global. You have to actually call a function in order to get at it, so you can’t naively discover it. You have to know it exists and get it explicitly. Being able to iterate intrinsics means you’d be able to access these hidden intrinsics and discover them without having to have pre-existing knowledge that they’ll be added by a browser tomorrow, let’s say. So you could write code that finds all of the intrinsics, even the ones you didn’t know about when you authored that code. During a previous meeting, I agreed to add that motivation to this proposal so we could cover both, since they’re relatively tightly correlated.

JHD: Okay. (obviously this function won’t be called “get”, but this is an example of the use of the retrieval mechanism) If we call to get, you’d pass in some strings and here is an example of a data property, a getter, a symbol, a well-known symbol, and the important points to note here are that the get prefix or set prefix, although nothing in 262 supplies a setter. If you try to access an accessor property without the appropriate prefix, it will throw. If you attempt to access a data property with an inappropriate prefix, it will throw. The only bracket notation that is supported is literally a well-known symbol, symbol dot something, and anything else is a type error. Given that this retrieval method will need to be some sort of global function, any SES lockdown or similar environment can replace that global function and add intrinsics to it or deny access to intrinsics as it likes. This isn’t a way to violate the “first-run code wins everything” process, because first-run code can replace or modify this function. There’s also a host hook in here so that without having to replace the function, hosts can inject their own intrinsics at the end of the list. For example, the web can - in any order they like, there’s a few constraints in the spec text on it, but essentially the string input yields whatever object they want, as long as they don’t collide with the previous ones, and the list has to be idempotent in the sense that it has to return the same values in the same order it’s called, every time the host hook is called.

JHD: The iterator semantics, for convenience I aliased it to `keys`. You call it, you get an iterator and it’s an alias for a string input into the retrieval function. I chose to go with this approach instead of something like entries or the objects themselves. You need the key name to describe it anyway, and the objects are often lazy-loaded by engines, and we don’t want to force engines to reify - if you exhaust this iterator, you don’t want to load everything into memory solely to iterate all these items. So you can very trivially, especially with iterator helpers, map this iterator to the output of the `getIntrinsic` function, if that’s something you want to do, but you needn’t if that’s something you don’t want to do. I happened to use a MapIterator because it seemed simple. The MapIterator instance you iterate over, you can never know it exists other than the fact that it’s a MapIterator. That part seems not a major semantic to me, but regardless, I’m more than happy to specify it a different way. It just seemed like a simple approach. I also didn’t want to add an additional intrinsic - like during `matchAll`, we had to add a new hidden intrinsic in order to iterate strings with a regex. If somebody thinks that that is important for consistency or that it’s weird that it’s an iterator, we could imply it’s a map iterator, we could imply it’s a generator, we could imply it’s an iterator helper. It’s observable but it feels like an almost editorial choice in the case this nobody is going to care what it is as long as it’s specified.

JHD: That has covered a very brief overview of what I consider to be the major semantics. Before I go into the global API, I would love to take a moment and go to queue, if anyone has clarifying questions or major concerns with the broad picture I just described.

MM: Yeah. So I just want to mention, there’s another example of the -- the possibility of the spec looking like it’s introducing global mutable states, since map instances are mutable, and then it being a subtle theorem that all of the primordial state is actually immutable because the map cannot be changed after initialization. So on those grounds alone, I would actually prefer specifying it in more like the way the spec specifies other hidden data structures, which is using the spec explanatory types, rather than hiding a JavaScript type.

JHD: Yeah, that’s totally fine. The spec doesn’t have a Map type, really, it has Records, but Records aren’t meant to be dynamic. So effectively what I would be doing then is using spec lists and just like it does for `[[MapData]`, I would be iterating through those spec lists, and that’s fine. It’s just more abstract operations and repeated algorithms that also exists verbatim in the Map stuff. So, yeah, that’s fine. I think it’s a good editorial question. I currently have spec notes in there that say this map instance is unobservable and never touched by user code. I could add something that says it wouldn’t be mutated - I don’t consider that a sticking point for me if that’s your preference and everyone is cool with that.

MM: It’s not my preference. I just wanted to state it to, you know, get it said. But I do not think this -- you know, making a decision on this one way or the other is needed to enter Stage 2.

JHD: Awesome. I would agree personally. But will of course respect it if someone else thinks it needs to wait. Thank you, Mark. I see Michael is on the queue.

MLS: Yes, so you said that with a realm that the Realm could override what it gives you. Doesn’t that circumvent what you’re trying to do?

JHD: It does not in sense that this is essentially reifying the technique I currently use, which is what I do first is I exhaustively grab every object that I know about and then I cache them in a robust way separately from the globals so that second-run code can call into that first-run code and access the globals even if they have been later modified. However, if the globals are modified before my initial code runs, of course - the whole nature of JavaScript is I cannot get access to anything that code that ran before me has denied. In this case, this is a global function, so my first-run code would simply set aside this function and save it and provide it to the second-run code. And then if something modifies or deletes or replaces that global function, I no longer care because I’ve cached the original function. Certainly if the code has replaced that retrieval function, before my first-run code, then there’s nothing I can do about it, and that’s by design. We don’t want to change that aspect of JavaScript.

MLS: So you want to get-you’re basically lying to get as close to intrinsics as you can?

JHD: Correct. And, Shu, I see your question.

SYG: Yes. One of the motivations that you said was you agree that it affects few develop, but it affects more users downstream.

JHD: Uh-huh.

SYG: You mean user polyfills and stuff?

JHD: Yes.

SYG: So given that if this is, you know, about gettings a close to actual intrinsics and you can and it’s not a new capability, but is it just about the extend? Remind me again what the issue is with the current technique.

JHD: There’s two things. One is that I currently have to exhaustively grab every object, which hits the memory thing I talked about before. It loads into memory intrinsics that I may not need for safely providing them, maybe, to later code. The other one is that currently the only way to get access to some of the intrinsics is by a form of eval, which conflicts with CSP, and there’s just no way to access that in Chrome Apps, for example, unless I ship syntax that would break older environments. Let’s say we in the future we add syntax that’s the only access to some intrinsic, in a world where `getIntrinsic` is shipped, but the new syntax is not, I would be able to attempt to get that new intrinsic in a recoverable way, and I currently can’t do that without eval.

SYG: I see. Okay, thanks. If you and other committee notion will indulge me for a second, I and Chrome have a concrete alternative proposal.

JHD: Sure.

SYG: I was going to wait until the end of the meeting to reraise -- to reiterate the memory use concerns that we have had in the best, the first value with get originals. So that memory use concern still stands, and there’s twofold there. There’s two kinds of memory use concerns. One is the possibly having just have all of the actual objects. That is not a problem that V8 has simply because of V8’s implementation deficiencies and not having lazy loaded global, so we currently just usually have all of it. But the concern that V8 has is that you have to keep the pointers to these somewhere. If we make them all available, which they are not currently available now, we have to keep pointer fields to let you get to them somewhere. Whereas currently, you know, they’re only accessible by property accesses, therefore, if they’re forbidden, they’ve overridden, the pointer fields are overridden and we don’t have a point or the the actual field. So that’s actual concern. Given that and give than I heard is that the capability you actually want is to get some of these intrinsic -- hidden intrinsic things that cannot be currently gotten, I’m wondering if it’s a feasible alternative that, one, I like this iterator thing that returns string keys. That doesn’t have any implication on performance really. If you can iterate that thing, if you can iterate the built intrinsics, instead of providing you a getter that lets you get any arbitrary intrinsic, we only provide a getter that are let us get the hidden ones that cannot be gotten by normal means, because you have to load first anyway, so if -- can your use case be satisfied by having an iterator that iterates string keys, getting the ones accessible via regular property syntax because you have the keys that you got from the -- from the iterator, and then the ones that you cannot currently be gotten by regular property syntax, there’s a getter to get you the hidden ones. That’s a much bounded -- that’s a much smaller number of things that we have to, like, keep pointers to, just the hidden ones.

JHD: I think that would address MM et al’s concerns, or use case, and I’ll let MM speak up if not.

MM: I'll confirm that.

JHD: It would also certainly address the eval aspect of my concerns. That would be a much better world than where we are now. The downside is I, and SES, would still require all the property walking code that we currently have, and we would never be able to remove that.

SYG: Yes, that’s the tradeoff.

JHD: So maybe that’s an acceptable tradeoff, but that’s the tradeoff that would be being made to your suggestion. I agree that that would be a bare minimum, that’s something to consider.

YSV: I think I’m next on the queue, and what I had -- my question kind of relates to what Shu was saying. So one thing that I’m a little bit at a -- one thing that I’m struggling with a little bit is the use case and the applicability broadly to the language for this, because as you mentioned, you have solutions for this within your libraries. And one area that’s missing right now is specifically the hidden intrinsics. I also recall that this --

JHD: That’s right.

YSV: I also recall this proposal initially came from the shadow realms proposal and the desire to be able to get unpolluted globals from, for example, an iframe to then modify them potentially in some way or to be able to use the unpolluted global in some way. And I’m wondering if maybe my memory of the goal of that proposal is different. I do see two potentially separate use cases here. One where overriding the get intrinsics with custom values -- I know SES case and also your use case. I’m wondering is there a more widespread use case we can fit to better or in fact the way to go the what Shu is suggesting, a more bounded API. Those are the questions I got.

JHD: As far as your question on the queue, how widespread is your technique, I can only answer the one package I use for this has 40 million downloads a week. I don’t know if anybody else uses this technique, and that’s the package I use for it. That gives you an idea of the scope and limit of that scope for me. I can’t speak for MM and crew, but I have no correlation with ShadowRealms for this. Without full object transfer ShadowRealm doesn’t do anything for me, however, with either just hidden intrinsics or with what I’ve currently got proposed, it would also work for ShadowRealm use cases because a new ShadowRealm would have the same capability and you can modify or restrain as you like. I agree with you and SYG that it would be a much smaller and more bounded set to just be hidden intrinsics, thing we can’t reach with property access.

YSV: Right, just to clarify my ShadowRealm comment, maybe my memory is shaky here, but I recall when we orally discussed in ShadowRealm and -- we decided to not make it transparent in the way you had originally intended, you said you needed an API. And part of my question is are we still solving the same use case in this case?

JHD: Yes. I needed this long before ShadowRealms. It’s just that was regular Realms were going to be a way that I could get it without having to make it its own proposal. You’re right in the sense that the change to ShadowRealms is what convinced me I definitely have to make it an actual proposal to solve this, as opposed to just kind of piggybacking on regular Realms.

YSV: I’m looking forward to Kevin’s response this as well. Thanks.

JHD: Cool, yeah. I see JRL says “why not just add hidden intrinsics to the global”. That’s certainly an option. That would also mean a, like, permanent decision that all future intrinsics be added available on the global, and they’re never again be any hidden intrinsics. For things like `AsyncFunction` and `GeneratorFunction`, it’s probably not that big a deal, but there’s a lot of them in the sense of there’s Map, Set, String, and RegexpString iterators at a minimum. That’s four. And then the iterator helpers have IteratorHelperPrototype, so we’d be adding a lot of globals. Or we’d be creating a new global namespace just to hold hidden intrinsics, which also seems weird. But that’s certainly a viable alternative path if that’s something you would prefer. So unless Justin has a response to that, we can move to Kevin.

KG: Yeah, so just to respond to YSV, we don’t do the same sort of iterating every property on the global thing that JHD is doing, but we do do something similar, and we are not doing it because of being, like, fundamental integration with the language stuff, we are just like a fairly normal script. But one of the things that we need to do is be defensive against the environment getting modified out from under us, which -- because what we do is provide a script that integrates with other web pages, our script runs on, you know, banks and airlines and so on, and the environment for like random bits of JavaScript on a banks or airline or whatever is, while not exactly hostile, somewhat unfriendly, because people do all sort things. To ensure the script breakage is not our fault one of the things we go through some effort to did is ensure wherever possible we are using built-in versions of things, rather than things that have been patched by the environment. So wherever possible, we try to make a point of caching intrinsic stuff up front, and I should emphasize a lot of that stuff is host stuff, less the built-in language stuff, although we do cache some of that as well. But, you know, fetch or whatever is certainly something we need to cache. And this is harder because we don’t always know at the point in time when we are doing the caching what things we will need for the rest of the lifetime of the script. You know, we don’t necessarily load everything right away right at the beginning. We have something that runs first, but not all of our code is necessarily running first. And so it sounds like what JHD does is just caches everything, and that would be impractical for us. I think that would have too negative an effect on performance in the environment. But we do, like, make a best effort to cache the things we will need, and if we could instead just cache the get intrinsics function, and, you know, patch that function so that anything that we patch will be patched for subsequent uses of that function as well, that would make our lives easier. Now, you know, we can live in the world that we’re currently in, but certainly we would use this if it was available. And we are not doing, like, yes stuff that is particular to, you know, language expert shenanigansful we’re just like a relatively normal script trying to integrate with a surprisingly hostile world that is other people’s websites.

JHD: Thank you, KG.

YSV: I guess I have a slight response to that, and maybe a question, clarifying question for that, if I can. So just to be brief, so we have something similar where in our self-posted code, we want to get the intrinsic value. It’s different from what you described, because you mentioned that you’re also patching code, but we also have -- it’s a security layer for us where we definitely don’t want to be getting user modified code when we’re working with our built-ins. So this is a use case I’m quite familiar with, but the patching use case you mentioned, that’s I think the one that is different here, and also the one that I’m particularly interested in. The question I have for you, KG, is the this API fully solve that use case for you, or is this something that will work, but maybe it could be better?

KG: It definitely doesn’t solve the patching one. Like, it doesn’t do anything for the patching one.

YSV: Would it be valuable for us to investigate an intersection of your use cases along with the others a bit more?

KG: So the patching one is kind of tricky, because the whole point of patching is that you want to modify the environment for all of the subsequent code. And that means that you might need to be, you know, replacing `Array.prototype.map` or whatever, and, like, you need to replace the one that they will actually reach for, as well as any other way that they might have to try to get at it. I suppose I would be interested in investigating that space, but it is I think a much more complicated space to ask for something that can replace things that are built into the environment that’s not the way we currently do it, which is go into the environment and replace the thing that’s there. Yeah, so not to say I wouldn’t be interested. I just think that this, as it currently stands, would be useful to us and it is hard for me to see how we could do something more that would be solving the patching use case.

YSV: Okay, thanks.

JHD: And personally, I would be very loath to tacitly endorse mutating globals, because people already do it with all the discouragement in the ecosystem, but I think that’s worth discussing separately, like Kevin said. I think SYG might be next.

SYG: Yeah, I want to separate this cache some intrinsic at first ride in the Firefox on posted use case as a separate ones and exhaustively do this for every single intrinsic use case that ?? raised. I think the former technique is much wider spread, and I think the current language serves that use case very well, because it’s -- by its nature, you’re getting a few things. Like, I’m implementing -- like, I want to call the original dot map thing. I want to cache that. I think we need a new feature for that. But the exhaustively -- to exhaustively do this for every single intrinsic thing, it’s one of the problems that this is actually solving here, plus the hidden intrinsic thing. That seems like the missing capability for robustness that you want.

JHD: Right. I can actually ask, Shu, you’ve implied and said some performance and memory concerns – any memory concerns about including the potential set of intrinsics be so large as including everything. Is that only for the iteration side or is that also for the retrieval side?

SYG: It is only for the retrieval side. Like the iteration side, because you have made the iteration return strings, that’s no longer an issue for the iteration side. For the retrieval side, the problem is that every time you create a global, if you want the original intrinsics to be reachable via anything, via property access or via -- sorry, not via property access, via a special get intrinsic function, we have to keep slots for that -- for every single intrinsic that you might want to get so we keep the originals, because the normal ones that are gotten via property access could be overridden.

JHD: I assume that every implementation by enlarge has some sort of dirty bit where it knows if a built-in property has been modified or not. Does V8 have something similar?

SYG: It is not my understanding that any implementation has that. Why would you track that on properties? Like, these are just properties like any other properties.

JHD: I see. Okay, yeah, I guess I was assuming that that was some sort of optimization hint. But I mean, obviously I don’t know how these things are implemented. But my thinking just now had been, like, you’d only need to store those pointers for the things that had been modified because you could just -- if you knew which had been modified and not, you could just do the lookup, the property lookup, because you know --

SYG: That seems way too complex a scheme to implement for this anyhow.

SYG: But the point is that we -- that the memory concern is this, like, we have to have slots for every single intrinsic, and that is what we don’t want, because that is a per global cost, and especially on mobile, this is a big issue. Like, this is an issue that we’re going to have to also do something special with for temporal just adds so many things. But, you know, there’s really no way around that and the use case for temporal is kind of set in stone, everyone is convinced. I’m trying to think of ways that could satisfy your use case without having to incur that cost.

MLS: Yeah, I just wanted to say that it sounds like we do a similar thing to what V8 does. When we create a global object, we create it from intrinsics and it’s kind of a special case. We do have some lazily created object-based upon first access for less use things. But it’s -- the process is kind of unique in initialization. So you’re reif ing for us is also going to be some work for us as well.

JHD: Okay, thank you. I see MAH and YSV.

MAH: Yeah, SYG, question, like, the cost that you’re talking about is about having to keep the intrinsic is only for the original intrinsics that have been replaced, right? The ones that have not been replaced you need to keep them around anyway.

SYG: The cost is the storage for the pointer to the intrinsic. Like, you have to have a holder to keep the intrinsic. That’s the cost.

JHD: And that’s costly enough, Shu, that having a thousand of them is significantly worse than having, like, 50 or 20?

SYG: Because -- mainly because, one, it scales with the number of intrinsics, and 2, it scales with the number of realms. Which is, I think for what it’s worth, I don’t think that matters on desktop, but it does matter.

YSV: same implementation for SpiderMonkey, I’m assuming same for JSC

BT: Before we move on to a new topic, I just wanted to quick -- just remind you that if you want to finish your presentation and come back to the discussion, you can. But happy to drain queue at this point as well.

KG: This is just to say I like the design where you’re returning a string. In particular, for the patching case that we’re discussing, it’s a lot easier to just patch getIntrinsics and not have to worry about the thing that’s returning a string, because that iterator only actually gives you access to the string, so I like the design with the string iterator.

DE: This is an interesting proposal idea. If the performance issues that SYG raised, both for lazy loading style implementations and for implementations of V8’s style can be worked out, then great, I’m not opposed to it. But I think this is part of a more general need, and I think this need comes up in your libraries and you’re handling it, but it’s having code that is high integrity, code that you write that comprehensively closes over all of the original load time global environment. And this is code that’s extremely hard to write. In code that comes up in multiple different environments, like intrinsics of certain JavaScript engines, core kind of extension code in some systems, as well as systems like Node.js core or libraries like the ones you maintain. And sort of platform core code in other cases. In Bloomberg, we do sometimes use a realm that doesn’t have the ShadowRealm boundary for this kind of purpose. So overall, I think we need to think about some higher level mechanisms to solve this problem comprehensively, because we have lots of evidence from real vulnerabilities that such manual mechanisms, even when they do have access to the intrinsics through various means are error prone, and those errors result in kind of breaking the exact extraction that they’re trying to meet. So, yeah, not opposed to this moving forward, but if we’re trying to solve this problem, I would like us to think about some higher level solutions that may be partly tooling, may be partly thing that are outside of what we standardize. But it would be great if we had some kind of broader solution where you write normal looking code and it comprehensively becomes something that meets these kinds of goals.

JHD: I think that would be great. I think that I’ve not sensed an appetite for solving that problem in the committee in the past, and I think that this proposal, which I think is independently motivated, as well as a number of others which I think are independently motivated, could actually combine quite nicely to address the problem you’re describing. But if there’s committee appetite for solving it holistically and having that be an acceptable motivation for these other proposals, that would be great. I think the tradeoff for the smaller part of intrinsics that SYG suggested would be not getting the desired DX to solve that problem. So I think it sounds like there’s a storage/memory tradeoff or whatever to be able to get that DX. Because there’s definitely nothing ergonomic about caching globals on global access, and you have to know what they are.

DE: I don’t want to claim there’s no DX difference between your proposal and SYG's alternative, but I think if we want to avoid the kinds of vulnerabilities we’ve seen where the abstraction is broken, we would kind of want something stronger than the getIntrinsics proposal. But that may be in form of a tool that outputs usage of the `getIntrinsics` API. So what you’re proposing might be a step in the right direction. Anyway, if you’re saying you haven’t heard appetite on the committee for this kind of stronger solution, well, I’m expressing that appetite.

JHD: Yeah, thank you. Yeah, and I will also add that the currently proposed retrieval API would solve a huge problem for node, which currently has to optimistically cache and `callBind` all of the intrinsics there order to have the call be robust, and that incurs a huge performance cost. Providing this API as proposed would, I think, have a major performance benefit for node, but it sounds like that would be a cost of memory storage. But, yeah, so that’s another consideration. Thank you, DE, that’s helpful feedback. MAH?

MAH: Yeah. I think there’s appetite to solve this problem. One solution that we have to think is of course freezing the intrinsics, but that does have side effects, and the problems that we need to solve, which is solving the override mistake for the intrinsics. I would very much love to explore that further, as we’ve expressed earlier in the secure mode discussion. I -- yeah, so I think saying there is no appetite for solving what this -- solving this differently is probably not quite right.

JHD: Yeah, I think it might -- a better phrasing of what I said would be I have sensed insufficient appetite over the years to make that be a primary motivation. I’m glad to hear that there is more appetite for that and that these concerns are more recognized than they’ve felt in the past. Okay. And then -- okay, somebody’s queue item got deleted. I don’t know if that was by accident.

JRL: That was me. I’m going to take my spot. I think there’s been a misunderstanding at least I have a misunderstanding and I keep trying to get it clarified the chat but no one was telling me differently. What’s the behavior of get intrinsic for `foo` if `foo` has been modified before you called get intrinsic?

JHD: You get the original foo, not the modification.

JRL: This returns of the original value, no matter what?

JHD: That’s intention, yes, unless you replace the getIntrinsic function itself of course.

JRL: Doesn’t that run up against the lazy loading issue? I’m sorry, I thought -- when I heard this earlier, I thought you said if you denied a value then get intrinsic could not get it later on.

JHD: Currently if you want to deny something, you delete it off the global or off an object, right? With this proposal, you also will have to wrap the `getIntrinsic` function to deny it. As far as the lazy loading issue, I don’t know how that is implemented, but my assumption is that whatever sort of implicit secret getter is there when you try to access, I don’t know, Map for the first time or something, that that is actually what would be invoked when you try to get the Map intrinsic. So you don’t actually have to load Map until the first time somebody accesses it on the global or tries to retrieve it. Does that answer your question?

JRL: Yeah, so that -- that clears up my question about, like -- I thought -- I could not see the value of this over just having things on the global. But if we can get access to the original regardless of being patched, then that makes it clear.

JHD: Yeah, and then in particular, it’s that currently you have to know in advance what intrinsics you’re going to need for your entire application, and then cache them, whether they’re hidden or not. And the advantage of the current form of the retrieval function with every intrinsic is you just have to cache one thing and that’s like a lens into all of the intrinsics at that time. Regardless of modification in the meantime.

JRL: So for -- so this -- I understand now. This makes me have to rethink of what SYG was saying earlier about V8’s implementation. The original time that this was proposed was that it would be too much of a memory concern because it would allow you access to a pointer that are had been rewritten, like, they would have to store this intrinsic somewhere, even if you had -- even if it had been modified. Is that still an objection from SYG?

JHD: My understanding, just before SYG steps in to respond, my understanding is that the issue is not the storage of the object as much as it is the storage of all the pointers to the original objects. Because there’s, like, I don’t know, 1,000 intrinsics or something, so you’d need to store 1,000 intrinsic pointers per realm, whether you lazy loaded the thing it pointed to or not.

JRL: Isn’t that what is required by these semantics, where you can modify 'foo' and still get the intrinsic 'foo'? You got to have the ‘foo’ pointer somewhere.

JHD: Yes, it is. That’s the tradeoff, that the complete use case requires that.

JRL: Okay.

JHD: My understanding of SYG’s pushback is could we sacrifice meeting some of that use case by only providing the hidden intrinsics and then the tradeoff is that instead of storing 1,000 pointers per realm, you only have to store 10 to 20 pointers per realm.

JRL: Okay.

JHD: That’s my understanding.

SYG: This is all predicated -- yeah, I think your understanding is correct, this is all predicated on you have to run first anyway. If you have to run first anyway, right, that’s basically the tradeoff.

JRL: Thank you for clearing this up.

BT: Just to note, you’re down to a little bit less than 15 minutes.

JHD: That’s fine. So, RBN, your item actually deals with the next part of the presentation, I’d love to go on.

RBN: That’s fine. I asked in matrix whether or not there was more slides because I’m not seeing them, so I wasn’t sure the presentation ended.

JHD: There are more slides and I think Hax had a item that relate to the the naming, but I wanted to address all of the other items before we got into that.

RBN: I’m fine with waiting.

JHD: Awesome. Thank you. So that’s all of it, you know, modulo namings and so on. That, I think, covers the discussion, hopefully, for now of all of those major semantics. It’s clear that we will need to have lots of further discussion about hidden versus all intrinsics and whether, you know, it’s -- yeah, and then those tradeoffs of pointer storage versus not having to know in advance what intrinsics you need. I think that the retrieval API really should be a global function because that way you can just grab that function or replace that function very easily. It has been suggested off and on that it be stored under some sort of object namespace (like we have JSON etc) - we’d have intrinsics.get or intrinsics.keys and that covers the two entry points, and that’s fine, but then you’ve got an additional intrinsic object and code that caches that object would not actually be safe because things could mutate that object later so it sort of adds an additional footgun.

JHD: Essentially if we had two functions, then we’ve got either two global functions, adding two globals instead of one is less ideal, or we’ve got a global function that has a property on it like, for example, `getIntrinsic` and `getIntrinsic.keys`. That would also be fine, but it’s kind of weird to have a non-constructor function that has an own property on it. We could do it, it’s just there’s no precedent for it. It’s not weird in JavaScript in general, it’s just kind of weird in 262. So in the PR that adds in enumeration, the current thing I went with is a function that when it gets a string, it’s retrieval, and when it gets no argument, it’s iteration. It is completely natural to have an “eww, gross, don’t overload one function to do two things” reaction to that. The alternative, as I see it, is either two functions or the expando property thing I mentioned.

JHD: at this stage, yeah, I wanted to get thoughts. The specific names are not super important, `getIntrinsic`, `getIntrinsicNames`, that can be bikeshedded at any time. It’s more the one function or two, and then if it’s two functions, are both global or is one chained off the other, something like that? Or is there an alternative suggestion like a namespace option that hasn’t been considered. I’d love to hear about it, and that’s where we can go to RBN.

RBN: so to my topic, it kind of covers two thing that are slightly related but if I need to split them up, that’s when I see get entrain cig, if you pass it no arguments, then it gives you an iterator is a bit odd, especially if you call it to get property scripter, if you call on no arguments, that doesn’t give you the names of all the property descriptors. We have a separate name for that. So it would be more consistent with the JavaScript naming scheme for the rest of the API to keep this as a separate method that produces those names. And then my second part of that topic was related to -- and I mentioned this in the matrix as well, there have been numerous discussions over the years about adding other things to reflect, and it’s always come back that no `Reflect` should only ever contained the things that are related to proxy operations, which I find unfortunate because reflect is such a broad meaning that generally means reflection, and is often used for those types of things --
for more than just reflecting of -- or intercepting proxies or providing default behavior for those, so if we were to perhaps relax that restriction that we’ve put on reflect over the years, that this would be the place that you would put that.

JHD: Yeah. I completely agree with you about `Reflect`. At one point there was ES6 contained a - I forget the exact name of it, 'get all keys' or something function that would basically gave you all inherited keys, and that Proxy trap was removed, and I really liked having that function, but because the Proxy trap no longer existed, the function trap had to be removed as well. I agree with you it’s unfortunate. if that was a generic home for reflection things that would be the perfect place to put it. And I see Shu’s next item about global is easier to get in patched. You’re right, it’s basically the same - so, yeah, it can be under an existing object, and that would be fine. If it can be `Reflect`, perfect, that’s where it should go, because the name “reflect” is perfect for that, and it’s a poor choice for proxy traps. But, if it can’t be `Reflect`, I don’t know where else it would go.

RBN: Yeah, I don’t know if it’s something you want to try to pursue, but I definitely think it would be worth at some point us trying to get consensus on, like, not having this requirement that reflect only be proxy traps, because I think there’s definitely room for other augmentations that we could add.

JHD: At that point when this is ready for Stage 2, I would love to do some temperature check to figure out or light polling or something to figure out what the preferences are of the committee for that, and their appetite for relaxing that restriction on `Reflect`. It’s clear that this proposal is not yet at that point in terms of firming up the API. That’s very good input. Thank you.

RBN: All right. Thank you.

SYG: I think I’m up next. Thanks for answering the question, JHD. I will just say I agree with -- I guess you and also with Ron. I also like putting it in `Reflect`. That just seems intuitively like what the reflect name space is for. And I’ll also put in an argument for relaxing this -- relax and allow `Reflect` to encompass more than just proxy traps if we are interested as part of the secure -- like for prototype solution thing that I presented and the hardened JS or ES thing that MM allude to, if we’re interested many the broader enterprise of fixing stratification in the language, like, `Reflect` is the thing for putting stratified capabilities in. The we already have that name space, we shouldn’t make a new one.

JHD: If `Reflect` is a suitable home for it, then it immediately becomes obvious that this should be two separate functions with two very clear names under Reflect and that answers this slide’s question, so I do like that if nobody is opposed to it.

DE: Yeah, I’m curious if people from XS are here, because they have a really interesting and different approach to globals intrinsics that, you know, I think we should consider generally relevant that implementations may eventually try to efficiently deploy JS over time: stripping out unused intrinsics. If somebody from that group is here, I would love to hear from them on how get iterator to what extent it would be implementable or cause space blowups.

JHD: That would be great. And I’ll kill the time before one of them speaks up if they’re here saying that I think that if you are able to -- if XS were able to impose any form of linting rules on its users and were able to guarantee that the retrieval method was only called with a static thing, I think it would be very trivial to determine which intrinsics were accessed through it and then you’d know which ones you could shred.

DE: I think that’s fine. The iterator is more the thing that makes it harder.

JHD: Totally, yeah. I think if there’s any use of the iterator, it becomes very tricky.

SYG: Can you say why?

DE: You know, for example, with Temporal being huge, it would be great if on these embedded devices, Temporal just wasn’t there or only the parts of Temporal that was actually used. So they actually tree shake that kind of stuff.

SYG: Right. But the iterator returns strings, so it can keep returning strings, but you just -- they’re kind of not useful.

DE: Well, then if you pass, like, things in the iterator to the getIntrinsics thing, if we were trying to encourage this coding pattern, first of all, you would have to include all the strings. But if you actually get them, it is even more.

JHD: If they forced static calls into the retrieval method, you wouldn’t be able to dynamically call the results of the iterator. I feel like a assuming that a restriction like that is viable, I have no idea if it is, it would naturally cover it and you wouldn’t write any code in that environment. But again, I have no idea if that is a viable approach.

DE: Well, yeah, on one hand, mechanically, yes, but then there’s this ecosystem question of do we want to encourage people to iterate over all the intrinsics. I’m not saying any of this is fatal. Once in some future meeting when they’re present, I would love to hear their take.

JHD: Cool.

BT: We’re dune to three minutes, by the way.

MM; I think I can be very brief. I’m hope to reconsidering the reflect constraint. I don’t immediately know of any fatal reason, you know, any reason why it would be fatal to add it. I want to revisit the old arguments and might be forgetting something but want to check with Tom. I’m open. I can see why it’s very attractive.

JHD: That’s great. So I am clearly not going to ask for Stage 2 today given all the feedback I received. But I am ever the optimist and hoping in March I could seek Stage 2 if I can resolve these questions.

JHD: I want to be clear what these questions are and ensure the folks who have concerns can participate on the repo. So what I’m hearing is a lot of preference for two separate functions, I’m hearing some preference that they live under ‘Reflect’ I will open an issue for that, and MM you or Tom can comment on that if there’s any reason why that’s an issue or anyone else of course. That’s one item.

JHD: Another item is that I’ll open an issue for is what SYG mentioned about all intrinsics versus just the hidden ones. I will solicit XS’s opinion as well and try to tag some folks from each engine that I know of to weigh in. And we can discuss the – how fatal that concern is and what tradeoffs are in that issue and I think that’s it. Is there anything that I missed? Those seem like the primary questions. I think it’s been answered why we don’t want to just stick them all on the global. Is there any other open questions that anyone has in mind or…

SYG: I have a suggestion. I would prefer investigation along use case line that YSV did some work in the matrix chat already try trying to tease out different use cases and I came to the realization during this meeting that the cache intrinsic versus cache the world are even though one is generation of another is a different use case. I would prefer – I don’t know if it would be a reframing but kind of the alternatives that we talk about that I suggested that what use cases they solve for use cases that we know and what use cases are we okay with not solving and so on?

JHD: Sure. I will open a third issue, then, that sort of focuses on the use cases so that if needed, we can revisit any design from those principles.

YSV: Thank you SYG for bringing that up. This is something that I would really appreciate and help me frame my thinking about this proposal and what the potential resolution of the user.

JHD: Thank you SYG and YSV. That’s my action item is make those three issues and we’ll have those discussions. That’s all. Thank you everyone.

### Conclusion/Resolution

- Remaining at stage 1

## Import Assertions

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-import-assertions/)
- [slides](https://docs.google.com/presentation/d/1c5y-t-O3wrMEQWb92P1xL7PRcNmFZOOK2-BmC5FUkE8/edit)

NRO: Hello again. Talk about import assertion, we couldn’t come to conclusion regarding the process had of people working in protosessions plan to explore relaxing host restrictions to better feed what HTML needs and what web browser needs. They would want to use differences depending on the type of the import and potentially to send different accept headers to one model. And also if we change the semantics of import assertion assertions we may also want to change the syntax. We want to explore what is possible in the syntax space space. We know there are some time constraints on this mostly because some implementations are already shipping. We hope to bring some consensus either the next meeting or within two meetings.When I presented this ago, we couldn’t come how to proceed. Initially demote to Stage 2. We are coming back to the design phase. So the option was to demote to Stage 2 to explore what I just showed in the slide. This has some advantages which is that we are giving a clear signal that we are reconsidering this proposal like how it’s designed both implementation and explain why implementation are being asked and not shipped and to developers that often developers are interested in using in proposal and Stage 3 is often a signal of almost stability and moving back to Stage 2 would make it clear that the proposal is quite unstable right now and the developer should not start relying on it. The other option we have is remain Stage 3 because with consensus we can still do any change we want to the proposal. Even if it’s reverting from scratch probably as long as we have consensus. There are some more difficulties which is that we need to coordinate properly with implementations to delay shipping and also maybe harder to explain to developers that they should not rely on import assertion right now because there is less clear signal for us. We would like to have something in the conclusion in the notes saying people don’t use this. But that is for people that follow this from very close close. And so we left the discussion at this point last time and I would like to try to find consensus of one of the two possible put forward that we have. I don’t have any slides. I would just go to the queue and see if anything has – anyone has preferences.

JHD: I explicitly support moving to Stage 2. I think that’s a great idea, it sends the right signal. An extra comment I wanted to add is the other day I mentioned something about “maybe this should be revisited at Stage 1” and got a lot of sort of what I hope is a fear-based response - that I have a belief this should be revisited does not mean that I would want to - I think it’s procedurally important to not relitigate in the absence of new information, and this proposal needs to be in the language - that is the previous consensus, and there is no new information that changes that. So I think this is a great plan and I hope that we can move forward with it. But I just wanted to reassure anyone that despite me thinking that, I would think it would be inappropriate to block access to Stage 3 simply because I have a belief that maybe it should be at Stage 1. So there’s no risk of that. That’s all.

NRO: Thank you.

MLS: So I strongly support Stage 2. I think it’s the right answer. If you look at the slide that you have there, all the things on the left column there for Stage 2 are true, we need to reconsider design of proposal, it was mentioned before that we don’t want implementers that are not shipping to ship and also it is a signal to tell developers don’t rely on this feature. It will probably change. I think that the criteria you lay out or the reasons you lay out to demote to Stage 2 are all true.

NRO: Thanks MLS. I see a question from JRL on the queue.

JRL: This is both the response to you and Michael here. If we go back to Stage 2, what is on the table for changes? In my mind, it’s the keyword and the evaluation restriction. If those are the only two changes that are necessary, it doesn’t seem like we are completely rethinking the proposal. This seems like a largely stable feature for people who are already depending on it because it’s not going to dramatically change – minus the keyword change which I would argue against – the semantics what is going to happen in the end are the same.

NRO: So among the people working on modules, there is no agreement yet on what the changes would be. One of the most obvious solution is to just change the keyword syntactically and leave the restriction but replacing how much the restriction. If we want to still, for example, to give a special meaning to the type assertion or keep all the assertions in the object bag, there are people who would like to still see different syntax so I’m not – I don’t have a solution yet I’m proposing. What I’m asking now is to go back to the design phase and to have all the interested people participate in the discussions. We want to re-explore the restriction of the syntax and know which would be the syntax we are going to propose.

MLS: Okay if I respond to JRL? What was presented on Tuesday was more than just syntax change. There was significant syntax change and possibly semantic changes. To me that’s a Stage 2 activity.

JRL: The semantic change is the removal of a note in the specification. I don’t think that’s really a semantic change.

MLS: But there were many other things proposed as well in those slides on Tuesday. And there wasn’t clear direction as to where to go with what the various proposals because it’s pick one direction. So there’s a lot of uncertainty as to how you move forward.

JHX: I don’t need to talk. Just a +1 for Stage 2. I think it gives a much clearer signal. Thank you.

DE: So I was very happy to hear JHD’s acknowledgment of the current committee consensus. I believe that it makes sense to consider that in effect if we decide to retract the Stage 2 that we agree we want this language feature to happen. We just have to fix these issues.

DE: So the champions plan to explore, I think this should be what the committee plans to explore. I think these are the things that need to be revisited as JRL said they’re scoped. There are semantic changes, you know, we’re not talking about changing a note. We’re talking about changing the normative semantics. That’s what motivated this whole kind of revisiting. I think if we have consensus to come to updates within two meetings and nothing else would be revisited, then that’s something that I would support a retraction to Stage 2. It would be especially nice if we could agree on the timeline that we’ll spend this time debating and we’ll all collectively aim for this conclusion. Not just the champion ground but the committee aiming for reaching a conclusion within two meetings. It’s important to have both the scope limitation and the time goals because this is an urgent issue because it is shipping in a bunch of places and because we do agree that we want to fix it. So in some sense, time is running out. This is just kind of both a pragmatic thing but also in terms of respecting the consensus that we have established in committee and the work that’s gone in from – well, if I say the champion group, I’m thinking myself, but also NRO and many other people as well as the various people who have worked on implementing this in a bunch of browsers in tools and many different environments, as well as the whole committee that’s de devoted a bunch of time to this. I don’t think either of these things call the whole proposal into question and so again very happy to hear that acknowledgment from JHD.

BT: I have a quick question. I think you want Stage 2 with the scoping restrictions and with the time limit restrictions over Stage 3 because Stage 2 sends the appropriate message but I’m wondering what your thoughts are on whether that’s true given that this isn’t a pure Stage 2 in a sense since we’re scoping the discussion and potentially even putting a time limit on how long it will be at Stage 2 before going to Stage 3.

DE: So I would be okay with either Stage 2 or Stage 3. Honestly in the lead up to this discussion, I was kind of waffling between them. So that’s why ultimately I don’t think the champion group should be kind of burdened with making these kind of process calls. I think things should somehow be clear cut. But they’re kind of not. And as long as we agree on what the scope of what we’re investigating is and the timeline and we try to communicate that externally, I think we could consider this either Stage 2 or Stage 3.

BT: Okay. I guess you weren’t making the point that Stage 2 is better for messaging.

DE: No.

BT: So my question is maybe for those who were in favor of Stage 2 from the messaging perspective, just to think about whether given the proposed scope and time limit, if Stage 2 or Stage 3 is the more appropriate messaging. So with that I think we –

DE: Do you have an opinion Brian?

BT: I don’t really have a strong opinion. I think given some of the – where temporal is at and I think there’s been other proposals over the years as well that have had some changes at Stage 3. It might be appropriate just to do a we’ll make changes with consensus process there. But that’s really a weak preference and I would defer entirely to what the champions want to do.

DE: I would say that from a process perspective, I agree with you and NRO, there isn’t any particular scope limitation to what consensus can achieve if we can make consensus changes to the whole spec at Stage 4, then consensus changes to Stage 3 are good. Also with the class field proposal, we did a downgrade – not downgrade but retraction to Stage 2 and there were pros and cons to that process. But ultimately we ended up with the same or very similar design to what we had previously. So I think our recent experience shows that we can both make changes during Stage 3 or make changes at Stage 2 and then come back to Stage 3.

BT: I think that’s true.

MLS: So I don’t think that we should bound either the discussion or the changes to two meetings. I think it’s incumbent upon the champion group to make things happen quickly and the champion group I think controls as to the scope of changes. But I don’t think we as a committee need to make that proposal. There’s two reasons for that. One, I think there’s a messaging issue. I don’t think we want to message that to the outside world. And two, I don’t think we want to constrain ourselves if during the process we discover it takes longer. I think there are limitations on both sides. I think we should just say we’re in downgrade Stage 2 and, yeah, the committee thinks it will come back in two meetings and that would be great but I think that’s more incumbent on the champion group than anybody else.

JHD: So I don’t know if – whoever was around and remembers but when `globalThis` was in Stage 3, it ran into an issue with the name change. At the time I preferred it to remain at Stage 3 and did not push for it to go down to 2, and I received some rather harsh criticism about that. I think that over time I’ve come to realize that I actually agree with that criticism. I think it should have gone down to Stage 2 and then gone back up with a new name - but the reason that I was not in favor of that is out of fear. I felt like I had achieved something with Stage 3, and I was afraid that I would lose ground and be unable to re-achieve it if I went down to Stage 2, and I have a feeling that I’m not the only one that has those kinds of feelings about their proposal. I remember the numeric separators proposal was Stage 3 and went to Stage 1 and back up to Stage 3. I think that was appropriate and the right signal to send. What I would love to see is the committee become less afraid of fluid movement up and down and instead prioritize sending the right signal and reflecting more accurately the state of a proposal instead of holding on to what is seen as an achievement or a milestone. So I would love to see this proposal drop to Stage 2, I think that’s where it belongs. I think once these questions are resolved, assuming that there’s no major issues with it, that it will be appropriate for it to be back at Stage 3. I hope that that re-advance is just as seamless.

DE: So we’re all talking about messaging. We agree that something clear should be explained externally. MLS, when you talked about this and what do you think adopting or nonadopting as a committee the scope limitation would do for messageing? I thought the scope limitation would be a clearly kind of positive thing to message and want to understand what you’re thinking.

MLS: I think it’s immaterial. The committee determined there is an issue with the current design and going back to Stage 2 where both syntax and semantics are going to change and committee hopes to deal with it quickly. Full stop. That’s all you need to say. I wouldn’t say we’ll have it done by the main meeting. Just we’re going to deal with it quickly.

DE: So JHD started his responses saying we establish established certain kind of consensus around that we want this proposal to happen. Is that how you see it or how – this is also kind of in the question of like what sort of scope of revisit revisiting should we be considering?

MLS: Stage 1 says we want to do this and investigate this this. Stage 2 is we’re basically getting serious and working on spec text. I think JHD's comments about globalThis are appropriate here. He says that, you know, at one point he was concerned and had some fear that it wasn’t going to see the light of day. I don’t think there’s any fear here, right? The committee still supports something like this but we know it is going to change. So I wouldn’t be concerned. I think the clear signal to implementers as well as to developers is appropriate. We don’t want more developers to start relying on this feature because that gets us into a more difficult position.

NRO: Just to clarify MLS, you don’t like the time text limitation and say limit the scope of the changes shown in the slide or are you saying we should just go back to Stage 2 with no restrictions attached?

MLS: Why would you restrict what you may or may not do because in the process you may find those restrictions actually bind the champion group? Why do you need to communicate that? I don’t think that’s necessary to do that nor to tie your hands. And tying your hands as far as, okay, two meetings we’ll have it done, in four months it will be done, why constrain yourself? You may have it done in one meeting.

DE: Well, the TC39 process is about incremental establishing consensus and that necessarily means tying our hands because once we decide something, we try to build other things on top of it. I think that’s the motivation.

MLS: I don’t support and don’t see why you want to constrain both yourselves and put that out to the community. I think it’s limiting.

DE: Speaking kind of directly, based both on GitHub threads and comments made earlier in this meeting, I had misunderstood that JHD wanted to demote from Stage 3 and then simultaneously kind of once we’re there question whether the proposal should move forward at all. That’s kind of something that I think would be not quite respecting the consensus we’ve incrementally established which led to the implementation work and the work from modules group and many different groups. And so I guess I’m happy with Stage 2 if we are doing so in a way where we agree to respect the kind of established consensus, and I’m a little skeptical of moving to Stage 2 if we’re calling all of that into question to such a degree.

MLS: Historically when we’ve demoted and then returned to the prior – when we demoted from Stage 3 to Stage 2 and back to Stage 3, it’s been less of a process to reach consensus at Stage 3. This is what we changed, this is why we changed it, these are the issues we dealt with, blah, blah, blah. We always have to reach consensus. So let me be clear probably how WebKit would deal with this. If it stays at Stage 3, we’re probably going to ship what we have right now, which I think is a bad thing but I think we have to do that because we expect more developers would probably start using it. But if it goes back to Stage 2 we’re probably not going to ship until changes are made. I think that Stage 2 is the right response right now, because there is some changes as it says here on this slide explore alternative syntax to better represent the new semantics. We’re changing syntax and we’re changing semantics.

DE: That’s very useful to know about what your shipping response would be. Basically you’re saying we don’t have the option as a committee to say this is still Stage 3 but don’t ship it yet. You’re saying that’s not something you would be able to follow through on.

MLS: I can’t say for sure what we do but if it’s Stage 2, we’re not going to ship. If it’s Stage 3, then we have to keep our pulse on things. My understanding is Chrome is not going to do anything with the ship status.

DE: That’s true regardless of whether we de demote or not. We discussed that. I was hoping that we would be able to use the newly or soon to be established column in the proposal document requires coordination. This if stays at Stage 3 would be a clear thing of requires coordination.

MLS: I don’t think that we fully agreed on that. I made my comments known. In fact the discussion we had Monday about that needs coordination I made it pretty clear this is a proposal where I think that breaks down because prior we would have not put needs coordination for this proposal and very similar would ship. We found something at Stage 3 and now needs coordination. It would have been a failure.

DE: I think we agree that it was fortunate and if the current HTML signed off on this but sometimes things happen. I don’t know. I don’t think it’s more or less of a failure depending on the particular like messaging or process route we decide on right now. When you say it’s not fully decided on the column, I thought we had decided on it and it was just down to kind of wording. Do you see uncertainty around that as well?

MLS: As I said, I made the comment it’s a hint. It’s a hint what implementation should do.

DE: Sure. So I guess I would kind of like to dig into what is insufficient about that hint? Because we’re talking about –

MLS: Let’s continue talking about this proposal. I don’t want to monopolize time here. There are other people that are on the queue and let’s move on.

BT: We have a point of view from YSV.

YSV: That was actually the point of view I was going to make. We were veering to a previous agenda item and not talk talking about this one.

DE: We can discuss that later. But I really think that that formed part of the solution. Any way, we’re done with that topic.

JRL: To Michael’s point here I don’t care so much about the time box. But we are already constrained by the ecosystem here. Shipping as you said V8 is already shipping and can be used in Chrome. Node already has an implementation and TypeScript has implementation. All of the tooling ecosystem has already adopted this syntax but none of the tooling ecosystem cares about the semantic restriction that we placed on this syntax. It is a disservice to us to that ecosystem for us to go back and radically change the syntax and semantics from what is currently there. I really want us to not make most of the changes that are happening here. I want to push it towards removing the host restriction which means only the browsers and the evaluators would need to make any changes. It would be seamless from the tooling ecosystem. So the bounds that I want to place on us if we go back to Stage 2 is to not make a radical change to the syntax that we already have. I don’t care so much about the timing of it because it’s already in the ecosystem. Already exists and the ecosystem is not going to undo the work they’ve already done just because we move back to Stage 2.

BT: Next on the queue is – actually we have a new topic next. So DE if you had anything to close off on on this, feel free.

YSV: So this is in fact on the same topic, I just wanted to give people space to finish placing their thoughts. We’re still on the topic of whether or not we’re down downgrading to Stage 2. So my view is as a design committee we should be putting ourselves in a position where we can make the best possible language design decision that we can. My understanding of the history of this proposal is part of the way that we landed on the syntax was in fact the restriction that’s currently being ignored by the tooling ecosystem that JRL just mentioned. And as a result, that’s made the current syntax for representing the original semantics somewhat meaning meaningless. I think this is a problem from language perspective because effectively the goal of the syntax is no longer being reflective in how it is being used and weakens the meaning of what assert is. What the word assert means. And in a sense, I think this reflects that there was some frustration in terms of how we got to the constraints that brought us to Stage 3 in the first place. So when we’re talking about removing that constraint, I believe it does – someone is unmuted.

YSV: So from my perspective, what we want to do is we want to give ourselves the freedom to properly investigate this question but at the same time we exist in a space where we’ve sort of dealt ourselves a poor hand. From my perspective, I’m sorry JRL, but a lot of the tooling implementers are very capable of the adjustment that might be asked of them. It’s not like we are going to be breaking the web in the way that doing a semantic change like much later on not semantic change but syntax change much later on might impact like small scale sites that don’t have technical expertise to be able to adjust to that. So I wonder if maybe we can work together to actually get to a positive solution space here. That said, even if we do this work, we may actually end up with the same syntax. I think that’s the reality we need to accept. We may end up with it in two different ways and may choose to go with the assert syntax and as Shu mention mentioned broaden the definition of what assert means. We may alternatively have assert as a deprecated syntax which means it’s still possible and some old built in tools and some older libraries may continue to use it, but we may introduce a new syntax that more appropriate appropriately encompasses the new meaning, the new semantics that is intended by this language feature. I think also I should point out that there are other proposals that would benefit from a broadening of the meaning of what import assertions currently is. It may allow us more flexibility in a single part of the syntax space which is the right-hand side of the import statement. Because previously we’ve been discussing introducing additional modifications to the import statement including right-hand side modifications and left-hand side modifications, et cetera, and it becomes very complex. Whereas if we bring import assertions back into the fold, we have modifications to the import statement on the right-hand side and we have a single options bag, this is easier for the developer model to understand. But this does represent a large rethinking of the scope and a re-understanding of how we move forward with the proposal. If we look at this as designers, what puts us into the most advantageous place to make the best decision possible here for the benefit of the language and the benefit of developers going far into the future?

NRO: Thanks. I think we are all in agreement about what possible changes we want to explore in the proposal and there is some disagreement about whether we should explicitly prevent ourselves from exploring potentially even more. I think the best thing for us could be properly like both communicate outside and to leave us like the space we need to explore would still be to go back to Stage 2. And we all at least now seem to agree on what we should have – what we should do. I think that is enough without explicitly restraining us. So I think the motion without string restrictions would be fine. And like we are – but being clear that the champions group and people working on models intend to proposal some specific set of changes. We are not going – this is not something we’re asking consensus on. I want to make sure that I and other people are working on this are not interested in exploring even more. Like, even that I think that it’s fine if the committee decided to just go back to Stage 2. Without further restrictions.

BT: Okay. We have a couple replies to that if you want to take those from the queue. First is JRL who says: if committee wants Stage 2, I won’t block but I still want to push for current syntax at Stage 2. End of message. Thank you Justin. And then YSV.

YSV: I think what may be appropriate given the way that the ecosystem has started using this proposal, the restriction we introduced that brought us to the current syntax has lost meaning. I believe it’s appropriate for us to request consensus for loosening the restriction before or even in lieu of going to Stage 2.

BT: Can you clarify the restriction you want to loosen?

YSV: This is the restriction – this is the note that’s been mentioned. I think it’s on the slide. If you can go back NRO, relaxing host restrictions to better fit the web platform needs.

BT: That seems fair. Justin, do you want to talk about your +100,000.

JRL: I explicitly support what YSV is proposing here. We need to remove the restriction.

BT: All right, thank you.

JHD: Yeah, to be clear, I think YSV said relax not remove. I think that the entire point of the proposal is to meet the web platform needs or otherwise there’s no need for the proposal to exist at all. So it seems very obvious to me that we have to relax the restriction to fit web platform needs. I think that any remaining restriction would be something that still permits the web to do what it needs to do. That’s the purpose of this proposal.

DE: So I think there are two possible changes. So again it’s not a note this is normative text that says that the assertions may not affect the interpretation of the module. The note means it’s nonnormative and not part of the definition. This is part of the definition. So there are two possible relaxations. The one in the PR that NRO presented before made it so that only the type can affect the module’s interpretation. The one that was proposed – sorry, alternative would be to say, oh, you know, that whole options bag is pass passed up to the host and there’s no restriction on its use. I know some people in the modules group are concerned about kind of name spacing issues if we might want to have a particular namespace for things that TC39 could define. Personally I’m not so worried about that. Or namespace for things that don’t affect how the module is looked up, just how it’s exposed on the JavaScript side. Personally I don’t see a need for that restriction and I would be in favor of – as one option what YSV suggests. But I was kind of expecting to have more extensive discussion before we arrived at that conclusion.

SYG: I was gone for 30 minutes. I may have missed some context here. For the restriction, are the two possibilities that you listed DE, do they both satisfy the original security requirement?

DE: Yeah, that’s right. These would both be that the type can drive how the module is interpreted so then it can drive how the module is fetched. But then the question is what we do for other non type assertions/attributes.

SYG: Got it, thanks.

DE: I am wondering if anybody here has feelings about downsides of YSV's proposal of simply going with the assert syntax and removing the restrictions on any of those attributes having arbitrary interpretations.

BT: I want to point out that we have 15 minutes left and that I think we have consensus on loosening the restriction. I just want to make sure that we want to get more clarity on how much in the remaining 15 minutes, if that’s the most important thing to go after. And no problem if it is. YSV is on the queue of clarifying her position, which seems good.

YSV: Yeah. I want to clarify that what I’m proposing here is not in lieu of further discussion of the other items, but I think that the loosening of the restrictions is something that is a given because of the issue raised within HTML and also because of how people are using it. So this isn’t saying that we shouldn’t have further discussion and, for example, just go with the assert syntax. It is instead saying there is something that has a lot of evidence behind that we may have made a mistake going into Stage 3 that led us to certain syntax. That mistake is clear. We should fix it. And then we should have further discussion.

DE: That sounds great. Definitely support kind of establishing consensus on some sort of loosening of the restriction and we’ll have to work out details in subsequent discussions. Also JHD I think was noting earlier that we had established consensus on certain aspects of this proposal. Maybe we can note what sort of consensus we are considering to be established in the minutes along with this potential consensus topic. I don’t know if JHD you could speak more to what sorts of things you interpreted that to contain.

JHD: So, for example, the Stage 2 consensus means that the committee is planning to put a solution in the language to the motivating problem. The motivating problem here is browsers want to be able to import JSON and CSS and some other things and they want an explicit way to indicate that those imports cannot execute JavaScript. There’s probably a better way to phrase it, but something to that effect. That’s the problem we have already agreed to solve. That shouldn’t be relitigated unless the whole committee agrees it should be, which clearly it does not. The current syntax and restrictions are there to solve that use case. They failed to achieve that. My expectation whether the proposal is in Stage 2 or 3 (although I continue to think 2 is appropriate) is that we would go back to Stage 3 and encourage people to ship with the solution that solves the thing we already agreed to solve, which is that the web can import the modules it wants with the evaluation constraints it wants. Does that clear it up for what my expectations are?

DE: That sounds good. I would kind of say that I think that we have a spectrum of interpretations of what Stage 2 means. Maybe articulating the strong Stage 2 thesis, that Stage 2 means that we’re committing to solve a problem which is kind of the way that I look at it. Maybe in this case, given that spectrum of opinions we could kind of note that commitment as a kind of thing that we’re having consensus on as a committee along with potentially consensus on we’ll do some sort of loosening or other that Yulia proposed. These can be kind of the two things that we ask consensus on along with consensus on the not downgrade, what was the word? Recession to Stage 2.

JHD: I guess another way that I would phrase it is since the current syntax and restrictions – the current proposal does not solve what the web needs, the worst outcome would be that thing shipping everywhere since it’s not even useful. So again regardless of the stage, we need to ensure it’s useful for the web since that’s the whole point, and we want to avoid something that’s not useful being in the language at all if we can.

DE: Completely agree with you. Very happy that we’re on the same page about all of these kinds of things.

BT: So I think we’re at the end of the queue. Are there any more topics from the champions that you’d like to go through?

NRO: I would like to ask again if we have consensus on relaxing Stage 2 in some way to exact to fit what the web needs and then if we have consensus on these, I would ask if I have consensus for Stage 2 explicitly wanted to say that if we first agree on loosening the restriction Stage 2 is expected Stage 2 because it wasn’t expecting to have this first consensus on the scope first. So I still want consensus with Stage 2. But I’m not strongly asking for that.

DE: Can part of what we’re asking for consensus on also contain – I don’t know if this is consensus-seeking matter but at least recording in the notes what JHD said about the kinds of things that are kind of established and if basically if anybody sees things differently from JHD's interpretation of this, it would be great to hear that so we can kind of assess out those issues and write the shared understanding in the summary.

BT: I think if the ultimate outcome is that we’re going to go to Stage 2, I think you don’t really need consensus on relaxing the restriction or on the in-scope things. But it does seem good to document those. So I’m happy to spend some time making sure we have those recorded in the notes.

YSV: Just to give my position on this, the reason that I suggested that we clarify this relaxing of the host restrictions is to make it clear that we’re not re-litigating that piece of it. And if we go to Stage 2, then this is clear that this is something we’ve already got an agreement on.

DE: I think that would be extremely useful in discussions both internally and externally as we’re kind of coordinating with HTML to have consensus recorded. And I think as a committee, we can at least in my presentation at the beginning of this meeting, I mentioned that as a committee we could come to consensus on kind of saying anything. Like, remember at one point we came to consensus on everyone should use semicolons and then we reversed that. But we can just establish that we’re saying a thing by consensus.

BT: I think I’m a little bit confused what is being asked. We could call for consensus, but it sounds like there’s an element of and this should be binding in some way beyond what our normal process would call for. Is that the case or are we just trying to document for ourselves what kind of things that we’re going to consider during Stage 2 just as a guiding principle? Another thing I will say it’s the champions can propose what they want to propose. And if the champions feel that something is out of scope, then that seems to carry a lot of weight during Stage 2. So I guess I’m a little bit confused process procedural, like, what is actually the request here.

DE: I guess I was interpreting it like it would be kind of weird for a non-champion to block the proposal on the basis that we’re only okay with assertions if we agreed to what YSV is suggesting. I think when JHD talks about making fear-based decisions, I think that’s a concrete fear that I’ve had had, demote to Stage 2 and then there would be this kind of hard block on, no, we can’t ever satisfy the requests that web browsers have made because that would contradict the no assertions thing. That’s kind of the concrete fear. So kind of hearing out any objections to the proposition that YSV made would totally address that.

BT: I see. So we are proposing a scoped Stage 2 discussion in a sense. Would you say that that’s true? I heard that from the presentation that that wasn’t the case.

DE: Well, I don’t know. I think this is a little different from that. So, yeah, I’m wondering if MLS has any thoughts on this topic.

MLS: I don’t think you need to do that. I think just downgrade to Stage 2 just like we have done with a bunch of other proposals.

NRO: I think we should recognize what is our guiding principle even if we don’t express consensus on that. This is different from the proposals because it’s already shipping some implementations so we are – we need to figure out the solution and we don’t need to be stuck here forever.

DE: So we have like a weak tool on establishing consensus in the notion. We can record in the summary that the participants said in the meeting at the time shared the goal of weakening the constraint as part of this. How would that be?

BT: I think that’s totally fair and I think it’s also fair to say that the champions only intend to entertain changes in the specific areas and that’s where they’re going to spend their time investigating. And set the expectation that there will be a proposal along these lines in the next couple of meetings and that it’s fair to observe nobody in this meeting had raised any objection to that assuming no one does which I haven’t heard so far this meeting. So that all seems like fair and useful content to put in the notes.

NRO: I see some explicit support for Stage 2 in the queue.

BT: I want to give a chance for anyone who really doesn’t think that we should entertain loosening the restrictions that YSV called out as necessary when we go back to Stage 2. Just want to explicitly give the floor to anyone who wants to have that discussion further and it seems like not. So that seems good. And then are there any concerns with going back to Stage 2 with the understanding that the champions have outlined what they see the changes are going to happen in Stage 2 and we would expect a proposal along those lines in sounds like a couple meetings would be the goal. I see some explicit support on on the queue from JHD and from MLS and from LCA. Any concerns from anyone? Anyone who feels like we should consider additional questions during Stage 2 or any other related concerns?

SYG: I have no concerns with the Stage 2 thing. I have a clarification to ask of the champions about the – what’s meant by 'explore' alternative syntax. What is meant by explore?

NRO: I wrote 'explore' there to keep – I don't know if we will change to syntax. We know that we might end up having to keep the 'assert' keyword. Explore is –

DE: I think we have the syntax space pretty well articulated. We sort of thought through most of the space before Stage 2. One thing that might change is the keyword. We could make other nicety changes like removing the curly brackets and the other syntax change on the table is considering a split between attributes which could affect the interpretation of the module and attributes which couldn’t. I am personally not convinced by this split. But anyway, the attributes that couldn’t – sorry, and a third thing is that we could have a single string instead of key value pairs. Given that we have the whole space kind of understood, I think we should be able to work through it pretty kind of rapidly.

SYG: Just for clarification..

GB: Can I just bring something up, I was feeling within that scope, there is still the question of how – what the key model is going to look like that hasn’t been discussed and in the framing of talking about this being constrained discussion for future meetings, I feel should bring it up now. And that’s that import assertions has an assumption that host don’t introduce – that host throw for unknown keys and the assertions model is based on sort of the shared understanding that hosts would have similar assertions for equivalently named keys. But when we move to an evaluation effect instancing but we’re not giving that power to any other key while still giving hosts the ability to key names to be able to be coordinated between hosts. Without discussing that underlying consensus problem, I think that’s again going to put us in a different position because it’s not just the fact that it’s assertion, it’s the fact that it’s an assertion and we have this kind of key space and those semantic also change when you move from – just asserting to evaluation. And I just wanted to mention that because I feel like it’s part of the scope of this overall.

DE: There’s been a long-running argument about whether

GB: Specifically I mean just as far as the – I have a delay go ahead.

DE: Just hear you cutting in and out. I thought you were done. So you can finish.

GB: Apologies. I don’t have a great connection at the moment. I’m on mobile. I do feel it’s worth considering that. I also want to be clear that when the discussion is brought up about being able to unify on the syntax, I do think it’s worth still considering import reflection on exactly how this proposal goes too much and that it can still exist as a proposal side by side with this one.

DE: If you could fix up your comments in the notes so we can all understand you, that would be great. Then I can catch up on it, what you were saying. One particular question is whether unknown attributes or assertions are ignored. There are clear examples both for attributes that drive the module’s interpretation and for assertions why nice to be ignored and for example for lazy module loading or for a checksum that you’re checking, you kind of want there to be a fall back behavior where it’s ignored. But for type you definitely don’t want it to be ignored if the system didn’t know about the typed attribute. I think that’s something to work out but I don’t think it’s quite linked to the relaxation. It ties in and it’s not the first time this question appears. I agree that will be good to discuss.

GB: That’s all I wanted to say.

BT: We are over time. LCA has one question on the queue that is probably – can be answered quickly. LCA, do you want to talk.

LCA: So my question is the exploration of the cache key semantics whether the – would this approach likely import assertions would be part of the cache key and how exactly this looks in practice. Is that also responsible? I think so.

DE: So I think to meet the web requirements the type just has to be part of the cache key. If anybody sees another way to make that work, then it would be interesting to hear it. Then it’s definitely in scope to say how much we want this to generalize? Do we want it to be just the type or do we want everyone to have a wider space of things that can enter into the cache key? Does– I think it’s in scope but we have the web requirements that are guiding us.

LCA: I understand. I’m understanding the assumption the relaxation takes place but what extent does the relaxation result in.

DE: To what extent is a tricky question.

JHD: I’m echoing what DE said. We couldn’t avoid talking about it since we have to deal with that in order to think about how it integrates with the web - that is the point of the proposal.

BT: I think that clears the queue. That was your queue. So we are at the end of the queue. I think we have agreement on Stage 2 at this point which I think was the main outcome of this redux item. If that’s not the case speak up in the next couple seconds here. Other than that, are there any other questions that the champions wanted to get resolved as part of this agenda item?

NRO: No, thank you.

BT: All right. So I think we have consensus on Stage 2. Congratulations?

### Conclusion/Resolution

- Building off of [earlier discussion of import assertions this meeting](jan-31.md#problems-with-import-assertions-for-module-types-and-a-possible-general-solution--downgrade-to-stage-2), the committee reached the shared the understanding that we should revise this proposal to meet [the requirements of the web platform](https://github.com/whatwg/html/issues/7233) that the module type drive its interpretation.

- To reflect the scope of expected future changes, the committee reached consensus to demote the proposal to Stage 2.

- The champion group plans to develop this proposal further over the next 2-4 months, with a goal to come back to committee with a proposal for Stage 3, based on iterating on:
  - The syntax (e.g., which keyword(s) are used)
  - The semantics (e.g., what forms part of the cache key)

## Decorator `context.access` object API

Presenter: Ron Buckton (RBN)

- [issue](https://github.com/tc39/proposal-decorators/issues/494)

RBN: So I don’t have slides to share with this. I’m just linked to the issue report. So put that up for discussion. Essentially if you’re not aware, TypeScript recently shipped its 5.0 beta. We have been working for quite a while now on the implementation of decorators now that it’s reached Stage 3. As part of the process of working on this implementation and kind of testing out the capabilities that it provides and collecting some feedback, we have noticed an issue that we would like to resolve with the API-defined for context.access that’s provide provided to a decorator context for class members and part of this we’re looking to request two normative changes to the Stage 3 decorators proposal. The first thing that we have been looking at is the context access.get and.set methods. Get and set are conditionally installed on the access property based on the type of declaration. For fields you get both a get and a set or methods you can only get them for a getter calling the get will invoke its – the get accessor and set accessor you call set to invoke its set accessor. The current API attempts to emulate the same thing you get with a target. So we believe it was originally intended to kind of mimic the behavior you would see with say a method decorator that takes a target and if it replaces it must then use dot call on the target or auto accessor decorator that has a target that contains get and set and then you must then invoke it with dot call to set the this value, this receiver used by those methods. And these behaviors are for the replacement mechanism are kind of necessary due to the nature of the thing that you are replacing, expecting to work with this, this receiver is what is passed along as they are invoked and they are expected to essentially be wrappers therefore must match the same behavior. However, we believe that context access using this is the wrong behavior to mimic. It’s again necessary for method replacement but the `access.get` and `access.set` methods don’t actually have that requirement. They more closely resemble reflect get and reflect set or WeakMap get and WeakMap set. So we have found in our investigations that people have found this to be confusing. The fact that it even mirrors the get and set behavior for an accessor kind of leads – has led people to try to use context.access.get.call when they should have been doing target.get which would result in an infinite recursion until stack overflow and you’re just reentering the same thing over and over again. Not only do we believe that emulating the reflect or WeakMap get and set where you pass the thing that is the think receiver as an argument rather than using dot call, not only do we feel that is the more appropriate metaphor to follow, we believe that actually having this differentiation makes it easier to explain to user users the difference in what they’re trying to use. And I’ll get to more about what the API looks like as well in a moment. The other thing that we are looking to add –

USA: Just a second. There’s a point of order. If you have not yet please add your name abbreviation and the organization at the top of today’s notes. That’s all.

RBN: The other thing we were considering is an important and missing part of this API or this behavior is that there is no way to test for the presence of a thing, of the decorated member on an object. Now, where we find this is important is that the access object on context, its primary motivated use case is allow decorators to have introspective and reflective way to work with private members of a class that they are decorating. If you have a decorator on a private field or method, that decorator has access to just that private field or private method. And it generally can do so by invoking the get or set to get the value underlying that private member or set the value for that private member. And that works perfectly fine for scenarios where you know that the thing you are working with is that private – is that type or class. However, it is missing the ability to actually test for that presence. So there’s no kind of imperative mechanism to emulate the private member in that object test we recently added to the language. This is important because a lot of the cases that would actually use this that this was designed for are cases like running a lazy initializer and use the access key keyword and looks like a fail that is something instead lazily initialized on load. That lazy init possibly involves possible calculations that might take time, might be be expensive and have side effects if you’re unable to do an early test of the value in the object, then you might be doing all of this work and only be able to write that value or test whether the object is something you can even legally write that value to by calling the getter or the setter which might be too late, as all this work has already been done. The main point – the reason why these are presented together is that an API like context.access.has.call(object), is really nonsensical. It doesn’t really lean towards the current metaphor. Therefore, we believe that if the current metaphor for has is that the target is passed in, like, it would be for a WeakMap or something like reflect might be the best example here but for a WeakMap or WeakSet, for example, then we believe that get and set which would sit next to it should also have the same API. So that’s basically where we stand. We’re trying to see if we can get this resolved in this plenary. We don’t have a request for this yet, we wanted to make sure this was the direction that the committee was will willing to move towards. Main reason for the concern is again we are in our beta period for 5.0 and see if we can resolve this before we hit the release candidate. As part of the 5.0 beta, we have opted to temporarily disable access. This is basically the small chunk of the emit that has been commented out. The helper we have written to make these things work down level will – didn’t change and will continue to work. So we’re not concerned there. We want to make sure that we have the right behavior for what access is supposed to look like before we hit our release candidate. So I’ll open to the queue before asking for specific consensus for these.

USA: There is a topic by JHD.

JHD: Explicitly support both of these. I think `has` is an obvious omission and we should add it regardless of whether the function required `.call` or not, and then separately, I agree there’s no constraint requiring the `.call` thing. As I recall it was a choice because of, as you said, method replacement. That’s not the intended use case for these access functions, so this is more ergonomic. I think we should do both of these changes.

JRL: In order to reduce confusion because it’s on the accessor or the access object which to me says accessor and accessors do not call and add assertion that the method invocations undefined oh or full if you don’t find anything.

RBN: This accessor is an access object itself. If we made that requirement you have to do a `.call()` and now `.call()` undefined and shift everything to the right. Because the members of access are get and set, – well, those aren’t key words but you essentially have to de destructure them or pull them all to call them, that’s not really convenient. I don’t think it’s necessary to have any check against the this value.

JRL: There are other ways to achieve the same goal. Checking arguments link or something else that we make it clear that this is not a getter or setter on the descriptor. This is a map interface.

RBN: I don’t think that’s necessary. I correlate this to if a private name were actually a WeakMap, then access would be the WeakMap instance.

JRL: The WeakMap is going to throw if you don’t call it correctly.

RBN: The WeakMap will only throw if you called it with invalid target and if you were to say context access get and pass the target that isn’t valid, that will throw because the private member is undefined on it. It won’t throw for a public member because we don’t make those types of requirements for public members. But the private member semantics would be preserved.

JRL: For a WeakMap, if you were to do WeakMap.get and .call() it the week map would throw because it doesn’t have access to the WeakMap’s private slot. My goal is reduce the confusion with accessors that require.call and if we do this in any fashion where it is clear if you .call this with a value and you don’t pass the necessary target parameter or target value parameter for set that it throws in some fashion so that accesses and it’s clear that the WeakMap semantics or the Map interface semantics are not what is being used here.

RBN: There is one difference between these two approaches approaches. One this is – so for get and set, this is a little bit more like reflect get and set, I would say. But the other issue when you’re looking at something like WeakMap, we perform the assertions on the this value because the get and set methods of the WeakMap are on the prototype and the actual WeakMap storage is on the instance. Therefore, you could theoretically attempt to patch the instance, that contains the state that you care about by passing a malformed value for the this receiver. The way that the spec is currently written access is a plain JavaScript object and no special state. Get and set are functions that essentially functions that wrap an abstract operation that points to internal slots stored within the function. There is no state on access that needs to be preserved for these and there is no prototype lookup and get and set are not shared. If that is an approach that we need to move to, I think that would be a viable option but I don’t know that that becomes yet another intrinsic to expose and I think is a much larger spec changes than what we’re proposing.

JRL: I think we’re talking past each other then. I will defer this to an issue on whatever proposal this gets added to.

RBN: I think I might also be confused because your topic says add assertions that this value is undefined but I think you were instead asserting the this value is not undefined.

JRL: My intention here is that the this value is not the target. And that the target has to be passed as a parameter and some form of assertion. Let’s defer this to an issue tracker so that it’s more clear what’s happening.

DE: So I’m next on the queue. I would like to make the decision here rather than asynchronously on the issue. I totally agree with RBN that we should not start doing anything special with the – giving internal slot to this object. I mean, that would be a major change that we have been trying to avoid. Overall this API change seems totally reasonable and fine. I support consensus on it. We just got to Stage 3. It’s a lot better to raise this now than later. If this were coming, you know, after the proposal we’re shipping somewhere I would say, no, it’s not worth it. But now it seems fine. I wonder why this is coming up only now because I don’t know, this particular trade off was already kind of clear to me when I was writing the earlier draft of this proposal where I proposed this sort of object scheme which then, you know, the decorator champion group kind of took over and elaborated and worked out all the issues that there was going to be this issue of of, okay, what’s the get function, what’s the set function? Do we have has or do we rely on exceptions? So much taking place and I kind of wonder why this was missed maybe. But any way things happen and I’m fine with this change going in. Happy to see the attention to detail.

RBN: I do want to go back. I think we kind of partially went to your comment without quite resolving the comments that JRL had. I agree I think we need to get this resolved now. I think the important metaphor to take away is that while we want to emulate the API semantics as far as get taking a single argument, that is the thing that matters and set taking two arguments being the thing that holds the value and the value you are passing in, those are definitely the things that we want to be able to support. The fact that there is no prototype chain for look up and one of the potential benefits of this is that you can do destructuring. A lot of the examples on the decorator’s proposal repo do destructuring of access get set into things like initializer and the current approach with get and set is that get – both of these are essentially function closures that take the private member that you’re going to associate with to perform these actions against. So the access object itself doesn’t really matter. We want to make sure we don’t run into issues with the very ways that people want to be able to use this based on the examples we have been providing on that repo. In addition, because of the fact that public fields also support access get and access set and that you can pass in essentially any value you want as target, you could pass in a number or an array or anything and even if it’s not related and if it’s a public field that exists on it, you get the value back. It just uses a normal property access. If you were to pass in undefined as the target in this case, it would throw by nature of the fact that any property access on undefined will throw. But, again, we neither want to break the destructuring case for get set because, again, we have some examples that already use that that people have been buying into. We don’t want to break the regular property access off of get there these cases if we can avoid it. I think definitely we want to preserve the regular property access for get and invocations a method and weakly care about the destructuring case and as specified is currently supported. JRL, do you feel that is an adequate description or do you have a particular direction that you feel we should look towards for consensus?

JRL: So I agree with the map interface here. That’s fine with me. The only thing that I wanted is to reduce the confusion that this is not an accessor, it’s not a getter or setter on the accessor on the descriptor. If we could achieve that through this check, that would have been fine. You seem to not want to do that. That’s totally fine. We can also achieve this using checking arguments.length. Get has to receive one argument, has one argument, set two arguments and accomplish the same thing. If you were to get.call whatever and not pass the second parameter there what is actually the first parameter, it would have thrown and it would have been clear this is not an accessor because you can’t dot call it and treat it like a get or accessor.

RBN: My only argument against that is we don’t do that currently for anything like WeakMap, we don’t do that for almost anything in the language.

JRL: We do it implicitly for WeakMap.

RBN: For the WeakMap if you pass a second argument to get get, we don’t throw? Or we throw? I was not aware that was the case.

JRL: If you .call, my goal isn’t to really check the link. It’s to check that this is correct. On the WeakMap the get has to be correct or otherwise it throws. If you WeakMap.get.call it throws. Access.get.call does not throw. I want it to throw because it can’t be treated as an accessor.

RBN: See, this becomes tricky because the cases where I want to use this, I might want to pull off the getter and store it on a record and that then complicates the case where I now have to pull the get method off of the record to call it or capture the entire access method if I don’t have the set or get methods.

JRL: I understand that. I won’t force us to check `this`. That is a valid reason. I think that checking `this` is wrong because of that. We could get the same kind of goal by checking arguments length. Now we aren’t doing the exact same thing that WeakMap WeakMap.prototype.get does because WeakMap checks the this value. We get the same end result. You cannot treat this access.get as an accessor because it has to receive an argument.

RBN: So DE has a reply to this about JS conventions which I agree to. I will let him speak to it in a moment. There’s a point I want to make as well which is, yes, we don’t generally do that with the JS APIs and many of the APIs specifically get and has are things that I would realistically want to pass into something like an array filter if I’m building a dependency injection system and want to test for the presence of a thing on a set of multiple objects that might be a multi-import injection. Therefore because has has – because get, set and has methods would essentially have this and act like the function closure and not like a method behavior I would expect to be able to pass has into an array and get an array of booleans and not error. And expect the same with get and argument list and pass it into filter if we have an argument list requirement that would fail because we pass in index and all the other methods that has method would normally ignore and the only way around it is arrow function and seems unnecessary to use an arrow function to wrap a function closure that doesn’t care about the other arguments. If we had partial function application, that might make it easier to write the code for but I don’t see that being valuable other than I agree avoiding the foot gun.

DE: I want to kind of disagree about the filter thing. I think we shouldn’t be excessively designing all of these APIs to be passed in to filter without an arrow function. Arrow functions are fine. But I also don’t think we should be excessively defensive with these APIs. I don’t think we have any particular indication that people are going to use these APIs in the wrong ways that the defensiveness that JRL is talking about might tie into. So I really think it would be a violation of our typical JavaScript conventions to check arguments length. I’d rather we stick with what RBN is proposing.

RBN: And I would also state that the this value doesn’t matter in these cases and the issue is passing too few arguments to get and tried to do dot get and dot call target you will get an error because you are trying to get it off of undefined. Not removing an argument and making the extra arguments potentially wrong and introducing a new argument in-between. Set in the same case would mostly fail unless you’re trying to set a value the same instance on the instance for a private field for example. But again set if you passed one argument you would be setting undefined on that thing that’s a potential problem. But in the most likely case with private fields that would most likely throw the value than passing the target. In all of these cases the this value doesn’t really Matter.

USA: Quick reminder you have approximately 6 to 7 minutes minutes. Next on the queue is IID.

IID: So in the issue, there was a little bit of discussion about whether this caused us to allocate more objects – more access objects or not and the conclusion I think reached that it doesn’t. That the behavior there is unchanged. So the first half is –

RBN: That’s correct.

IID: And then the second half of my question is like it was a little surprising to me that we only noticed that we needed to be allocating fresh objects and it wasn’t valid for an object to be reused because we asked this question. So to what extent has the sort of object allocation story been scrutinized for reducing unnecessary allocations. I think obviously these are short lived objects in general and the garbage collector will handle it. But if we can avoid having excess GC churn by making a small change, that would be good. I’m not sure whether it is good to freeze the context in access objects and guarantee they’re always the same same. That does require us to hold on to them like as long as the constructor exists, probably. But I know that up until like when we were doing review, we weren’t considering this a lot. I’m wondering has somebody looked at this? Is there anything we can do to – without compromising on any other values – limit the performance overhead of using decorators?

RBN: I’m not sure if KHG who is the champion is able to join the call at the moment. I know they had limited availability until the March plenary. So I imagine KHG would have more context as to the investigations from engines. DE might as well. I know when DE was champion there was a lot of time spent on this. I do know that we had things in the past where we had discussions about how engines can theoretically optimize if you never touched access, then it could be lazily initialized by the engine as long as it is not observably different to user code. In most cases where anyone would actually touch the access object they intend to use it would be a very rare case for somebody to do a dot access look up without intending to use it.

DE: I would not assume that that’s possible for engines, because some engines have that they could have a fake or hidden getter and some engines don’t intend to have that path. But concretely if we wanted to make a change so that it doesn’t allocate objects that are kind of proportional to the size of the code or the number of class elements elements, that would be a big change. The assumption has been going into this proposal that it’s okay to pass a couple option bags, allocate a couple options bags per decorator. It’s not option bags per instance. It’s each time the class is being evaluated. I’m sure you noticed this in the review. Making things frozen is pretty – is somewhat fraught in various different ways. Is the concern about when you have a chain decorators?

IID: So there’s a comment in the issue that says that we do need a new – because you could add a property to the object that you get in, just a second.

RBN: Seeing if I can find it.

IID: If it’s actually per class and not per instance. Maybe I have just gotten myself confused here. I’m not as concerned about.

RBN: Decorator is currently recreated. The decorator context including the access is recreated for each evaluation of a decorator during the class initialization phase. So it is not unique to any instance, it is only during the class initialization. It is per decorator evaluation, though. I think one of the reasons for that is that – so that the context and context.access itself can’t potentially be used as a WeakMap key for communication. I don’t know. They were reset.

IID: I guess if you can confirm that that the additional object allocations are happening not per instance but just per class initialization, then I think that that would satisfy any concerns that I have.

RBN: That is how we have implemented it based on my reading of the specification, that is how I understood it to be within the specification. I believe how it is written. The access again is not per instance. It is per class, per decorator. It’s essentially per decorator evaluation. The other thing too is if it does come down we have to consider whether to freeze the object, I think that is outside of the scope of the changes – at least for the most part outside of the scope of the changes that TypeScript is requesting specifically the only thing we are concerned about at this particular moment is what the shape of the API is if we need to make other change changes, I would be happy to pursue that as a separate needs-consensus PR as that would not affect the or at least not have a major impact on TypeScript shipping, being able to ship this feature.

IID: I agree. Based on your comments, I don’t think it’s actually necessary to freeze.

RBN: Thank you.

DE: I want to confirm that my intention when drafting this initially was that it be per decorator execution and definitely not per instance. If we did want to change the design to allow for more reuse across decorators or to avoid allocating so many closures, my preferred design would be that access maps to an instance of a class which has get, set and has methods on it, that would make it – maybe we would give a fresh instance of that. It would be somewhat less allocation. But it sounds from what you’re saying you’re not concerned it is clarifyied this is per decorator execution and not per instance; is that correct.

RBN: Yes, correct.

USA: One thing. I was going to mention that you’re out of the time box. Since we have time at the end, you could ask for an extension.

RBN: Maybe a five minute extension. I will just restate the biggest concern is the shape of the API. TypeScript is in the unique position because we are doing down-leveling in many cases or even just a pass through of the API that a lot of the deeper performance concerns and how those are implemented are at times somewhat outside of the scope of what TypeScript is concerned with. We are concerned with performance in general. But the exact host implementations is kind of outside of our purview. So as long as we are able to have a decision on what the shape of the API is, that satisfies our needs and again anything else such as whether we need to fix the argument length in some way or if we need to change how the this binding works, those are all things that we are a bit less concerned with in making sure that we have a stable API that we can ship and there can be some minor changes if necessary while it's at Stage 3. But as long as we know or fairly concern that is a correct API, that is what is most important to us.

DE: Now that implementers have been taking more detailed looks at the decorator proposal, I wanted to ask you explicitly about a couple possible changes that could make things more efficient. One is what I mentioned before about access being an instance of a class rather than an allocation of these four allocations. The other one is `@initializer`. This was in an earlier draft `@initializer` was not a function that anybody could call. It had to be triggered by a keyword on the class element. Everyone found this extremely ergonomic and everyone was happy after I tried to float it with some engine maintainers they said `@initializer` should be fine. I didn’t want to double check that people are okay with the aspects of the design and that we don’t – to flush out any concerns so we don’t have more surprises later.

IID: Speaking on behalf of Mozilla I’m not aware of any performance concerns we have yet but the implementation has not necessarily gotten to the point where we have identified those. So I can give you a cautious everything seems fine so far but not a definitive one.

RBN: And I would ask that if there are concerns about this, that there definitely would be value to bring it up on the issue tracker. I want to make sure we don’t take the remaining time box to be stymied in performance instructions orthogonal to what we’re requesting.

SYG: I am just saying V8 hasn’t started implementation yet so I have nothing for DE, sorry.

USA: That’s the whole queue.

RBN: So I am seeking consensus for two changes, PRs will be forthcoming probably tomorrow to change the API signature for get and set on access so that the target is passed as the first argument rather than expected as the this receiver. And the other item – I don’t know if I should request these individually, but the other item I am seeking consensus on is the addition of has as a missing and necessary piece of functionality.

USA: Nothing on the queue yet. Explicit support +1 from DE on the queue. JHD also repeats explicit support for both. So I think you don’t have objections, only words of explicit support.

RBN: I appreciate that, thank you very much.

### Conclusion/Resolution

- Consensus for target moving to be the first param rather than receiver
- Consensus for adding a `has` method

## Temporal Stage 3 update continuation

Presenter: Philip Chimento (PFC)

- [proposal](https://tc39.es/proposal-temporal)
- [slides](https://ptomato.name/talks/tc39-2023-01/)

PFC: It’s me again, PFC from Igalia presenting work that’s done in partnership with Bloomberg. I’m here to present an overflow item from the Temporal presentation we had on Tuesday.

PFC: **(Slide 35)** First up, we had an objection based on the discussion about the spelling of `calendarId` and `timeZoneId` and JHD agreed to withdraw the objection, thank you very much. I'm just reiterating it here because it was originally mentioned in an unscheduled item. If you were looking for the discussion here during this item, it’s been resolved. And we’re going to proceed with the capital ‘I’ and lower case ‘d’.

PFC: **(Slide 36)** There was one normative change that I presented where more time for review was requested. We’d hoped that that could be reviewed by this time but I made these slides not knowing whether that was going to be the case or not. But at the moment, it seems like this is not ready yet. So skip this one.

PFC: **(Slide 37)** The final thing that I wanted to present: on Tuesday when I went to go and record the conclusions of the item to my horror I realized I had left one normative pull request out of the slides. So it would help a lot if we could get consensus on this without waiting for March but I guess the best thing to do would be to treat it as a late agenda item addition and so if you don’t want to support it for that reason, no hard feelings. But we have one more normative change that basically just changes the order of observable property reads on options bags that are passed to `since()` and `until()` methods. So I was hoping it would be possible to get consensus on this from the plenary since it’s a very inconsequential change that just reorders some user visible get operations. And that was all. So my request is would the plenary be willing to consider giving consensus to this one pull request?

USA: Let’s see. First of all, we have DE on the queue.

DE: I’m just looking at the PR now and I definitely support reading options only once. This brings us closer to kind of the WebIDL way of reading all the options bags up front. So I’ll just check it editorially but sounds good.

USA: Next up we have JHD.

JHD: Same thing, explicit support. We have tried very hard to clean up past mistakes where we read things multiple times all over the spec like promises and stuff like that. We should do that, everywhere, including here.

USA: PFC, that’s all of the queue for now. So I think it implies consensus.

PFC: Thanks for accommodating this late-breaking request. And that’s all I had.

USA: All right. That was quick and nice. Next up we have DRR and RBN with decorators and export ordering continuation. Are you folks there?

### Conclusion/Resolution

- Consensus on merging https://github.com/tc39/proposal-temporal/pull/2447
- https://github.com/tc39/proposal-temporal/pull/2479 will be presented again in the following meeting

## Decorators and export Ordering continuation

Presenter: Daniel Rosenwasser (DRR)

- [proposal](https://github.com/tc39/proposal-decorators/issues/69)
- [slides](https://github.com/DanielRosenwasser/tc39-2023-01/blob/main/Decorator%20and%20export%20Ordering.pdf)

DRR: So welcome back. We’re continuing our discussion happy groundhog day for those who celebrate it. This is kind of appropriate, I guess. So when we spoke yesterday, I think there were a couple topics I did want to briefly address. One was whether or not toString should inform where the decorator placement goes. And our perspective is that toString on functions is kind of fragile for a lot of purposes these days. I understand many of the possible use cases. We all understand that a decorator being included in the toString text won’t necessarily evaluate an environment that doesn’t have the same bindings but then there’s other thing that don’t work in eval like await or yield which might not work unless you’re in – they don’t work in eval. You have to really construct the type of function that you need the context in, right? So that wouldn’t quite hold up. And so there’s another point which is that decorators are not included on the method's toString when you decorate them as well. It’s actually kind of a weird state because the current spec text specifies not on methods but on classes. Something we might want to revisit. And if it is important to try to retrieve some of the information where decorators are placed in the future if people have concrete proposals that’s something we could reconsider and try to find a way to figure out with the context object given when you decorate something. There’s also something we have discussed before many times about whether or not a decorator goes before a return statement or something like that. And those statements like constructs really compose in the sort of intentional orthogonal way and decorator doesn’t flow up to the entire thing and class decoration is really its own thing that is distinct from a class expression and the decoration case the export keyword is part of the declaration and otherwise class expressions in the space and specialized behavior in the context. That’s why, for example, export default doesn’t get followed by the class expression and gets followed by the class declaration. It’s part of the declaration. I don’t know if that’s something that we need to dive in for very long. But I would like to ask if these directions jive with people. There was some discussion in the chat yesterday where people said they would be open to option 2, but I think following up afterwards, it was more like option 2 to them was like the least contentious thing. What I would like to ask is can we pursue any of these options? Option 1. And so I do see that we have some items in the queue first. So I guess we can jump to the queue. So JHD.

JHD: So obviously at any time we can discuss anything for any reason. That’s a good thing. But the only changes we generally expect in Stage 3 are related to implementation stuff. I was curious what – is there any, or what is the, new information that motivates this discussion? Because I’ve heard a lot of discussion points and they’re all interesting and worth exploring, but we also (four or five years ago I think) explored them pretty exhaustively over a long period of time and came to a conclusion. Is there some new information?

RBN: I would say, yes, there is some new information and yes we did discuss this multiple times over the years. But where we ended up with that discussion was to leave things as they were while investigating some other task tasks that never really were resolved prior to Stage 3. And I think as we were saying in the discussion yesterday we reached – I think we kind of reached the point with the proposal where there was some I think burn out on a lot of sides as far as what was going to happen and it just advanced because it had been sitting for so long. It may be that we possibly advanced prematurely because we were undergoing significant changes between the original proposal, what originally advanced to Stage 2, a syntactic version that was complete over haul of the entire proposal to then going back back to the expression-based form. I think a lot of these were left unresolved. And unfortunately I wasn’t able to be present during the meeting where it advanced. I made my position on certain things known but I was trying not to block because again a feeling of burn out with it. But what is new is that as we have been actually doing the implementation for Stage 3 decorators that we have held off on making any changes to the legacy decorator support because of all of the changes occurring in Stage 2, as we had an implementation of Stage 3 decorators sitting in a PR, people have been able to experiment with it, we have been building and trying to migrate application applications to it. We are now looking down the barrel at how many projects need to perform this migration, the amount of code sharing that will involve and the amount of man hours even though it seems small on an individual basis it’s a large number of projects. So if you spread that out, that becomes – we’re talking about costs associated with this migration and that in the intervening time between when a lot of these decisions were made and when we finally reached Stage 3, the pool of projects using TypeScript's legacy decorators did not remain stagnant and has grown significantly in that time. Had decorators reached Stage 3 in 2018, 2019, this might have been a different issue. This has gotten much larger. Our concern is that we are asking – going to be asking our customers to make a change to use these new semantics yes but in many cases like mentioned class decorations the run time semantics for those aren’t different that existing class decorator only solutions aren’t immediately migrateable which means we are asking people to make a change purely on an anesthetic reason that is going to cost money for a very large portion of the ecosystem and so we are concerned about introducing this code churn and the time associated with this even if we have a code mod and the wealth of documentation for TypeScript decorators that uses the ordering based on the Stage 2 support we would like to be able to leverage. Again, semantic differences in how member decorators work but member decorators aren’t affected by export ordering

JHD: So I want to make sure I understand your response and then I have a response. So it sounds like you’re saying that the new information is that the quantity or the scale of usage of legacy decorators has grown significantly and similarly the documentation describing it has grown and so the churn that would have been required in 2018, 2019, it is much larger than it was then?

RBN: Yes, that is correct.

JHD: Thank you. I understand that. Part of the response is while I do agree there was burnout on all sides with that discussion, that is very unfortunate and ideally avoidable but that’s also true in many decisions. And decorators on exports were certainly one of the things to explore and very much not the only thing. With regards to these two options, I feel like option 1 should almost be a nonstarter because it essentially re-activates all of those discussions that have already been had and that triggered all the burnout. Option 2 at least avoids doing that. It does create the potential for style guide holy wars and linter configurations forever which is the tradeoff. And then of course option 3 is to keep the status quo. I feel like options 2 and 3 are the only ones we should be considering.

SYG: I want to understand this migration story. I want to dig into it a little more. It’s similar to something that the Angular framework had to deal with. So the Angular situation is basically that they are not going to move to standard decorators and the main reason for that is that they not only have documentation that used the old decorators but they also have video tutorials and stuff, a lot more than just text documentation that can’t be straightforwardly updated. For that reason they’re not going to do the migration. I present that without any value judgment. That’s just what they’re doing. I thought I understood the thing about the documentation point. What I don’t understand about the documentation point is we have two worlds. We have the non-standard decorators that TypeScript have shipped and we have the world of Stage 3 standard decorators. They are different in semantics and in syntax. So when you want to update your documentation that currently refers that currently uses the non-standard ordering and when you need to update that to refer to the standard ordering, like don’t you already have to update your documentation because the semantics are also different? What is the situation where this eases the migration because you don’t have to do work? Because it seems like the delta of the work is – the delta of changing the ordering of updating stuff is relatively small in the grand scheme of migrating from the pre-standard world to the standard world anyway.

RBN: So one of the points that you were asking about was why would you not have to update the documentation any ways? And that is in a world where decorators were allowed before the export keyword, be that option 1 or option 2 as presented on the slides here, in a world where we move to this scenario, yes, you have to update documentation for member decorators because the semantics for those has changed. In many cases, it’s actually not the documentation that might need to change, if you had a field decorator that did a certain thing and that certain thing is still viable with Stage 3 decorators with different semantics semantics, the documentation for that will likely not change because it’s the documentation that the consumer of the decorator has. In some cases there might be a documentation change to add the accessory keyword for the feature. If it’s the method decorator you could write a decorator could potentially – a method decorator specifically could be written so it supports both legacy TypeScript decorators and the Stage 3 decorators in some cases barring things with at initial initializer and whatnot. If it is function replacer decorator it is perfectly easy to do that and your documentation for those doesn’t change and the semantics of what goes on under the hood doesn't matter to the consumer of the decorator. So in a few cases you would have to make documentation changes for fields and anything might previously get and set because of the differences. There’s a sunk cost and not much to get back with it because those are either syntactic changes like adding an accessor or wholly different semantic changes that can’t be supported. Method decorators don’t necessarily suffer that. When it comes to class decorators, as I said before, the migration of a decorator author from a TypeScript class decorator to a Stage 3 native class decorator is I do nothing. My runtime semantics if I didn’t have access to the context object before, I don’t need access to it now. I would be able to pass through a function and perform any wrapping that I would need to have occurred and already works. And that means the class decorators semantics don’t change and the only change is syntax and if we address the syntax change any documentation around class decorators doesn’t need to be changed. Any code mods that had to be performed for class decorators wouldn’t need to happen and wouldn’t need to happen for method or anything else decorators. The only thing this would affect or this change would affect for documentation would be the Stage 3 decorator decorators would have in documentation changes if we pick one of the two options presented would be just documentation changes around how field and getter/setter decorators might be used and that’s it.

SYG: I heard two new things there that I didn’t realize, one there is a third migration target of somehow of being a hybrid between the standard decorators and the non-standard decorators; is that right?

DRR: So you can basically ship a function that can act as a decorator for both legacy and Stage 3 decorators and depending on whatever the run time or compiler recompiles the U site to the decoration site can handle for the objects that come in, right? So basically you can entertain a hybrid option, right? You can ship a library that works in both modes. Is that kind of what you were asking about?

SYG: Is that speculative or actual? You have partners that are going to do this?

RBN: In cases where it is technically feasible, that is actual and that is a specific constraint – I shouldn’t say constraint. That is a specific capability that we pursued since the beginning. I know early on when YK was the champion, we were looking at making sure when the context – when we eventually looked at the context object, it might have a symbol.toString and history tag or something to use to differentiate the things to help with the overload overloading of legacy to native decorator case. This overloading thing is something we have been pursuing for a while. We suffered losses with this in that when it came to engine specific requirements on how fields work, we needed to – and introduced the access keyword we knew this is a case where we cannot support that migration. For cases like TypeScript legacy decorators and if you decorate a getter or setter we gave you entangled the get/set descriptor that gave you both. That is something that we were intending to because of the fact that the current spec changes made that not feasible, that’s one of the motivations behind the group and auto and there is change on the user side that would allow an existing decorator that supported both to be able to differentiate either by looking at the argument list because every legacy decorator – every legacy class element decorator takes three arguments versus a native decorator which always takes two arguments. So there is a way to to differentiate between the two and that is something that we said since the beginning.

USA: We have a queue. But before we move on with the queue, this is already over time. But we can extend until until 55 because we have time. Feel free to go on.

RBN: Thank you.

USA: The next on the queue is KHG.

KHG: I just wanted to weigh in about that type of migration. So I don’t think that this type of migration is necessarily that comment in the ecosystem. When it does happen, it is very tricky to do it all at once. And the style of enabling code bases to migrate incrementally one file or one section at a time has work worked well for us in a few cases particularly in the ember JS community specifically at linked in and where I worked with ember JS, we basically had a decorator pattern and whole class built before decorators were part of the language or part of the process to become part of the language. So when ember decided to adopt decorators legacy decorators, we had to do that type of a migration. And it was just not something that could be done, too many differences and too many small details. Not something that we could do all at once in very large mature code bases. Just based on that experience, I think this strategy is something that I would pursue at a company looking to migrate from Stage 1 and legacy decorators to the final spec. And I think that it’s a valid like way to do it without without, you know, shutting down everything and rewriting your entire app. So I just wanted to weigh in about that.

USA: Next we have DRR.

DRR: I mean, one thing that I did want to also raise was as a tooling implementation, one of the difficulties we also found with the current scheme is that with the way we encode the syntax tree we often think of them as context syntax trees rather than extract and we have to hold comments and ordering and things like that. And so our typical previous strategy was to just sort of like encode all of the modifiers – all of the decorators followed by the modifiers followed by every member and every list of things had a specific ordering before or after each other. And now sort of threw things off when we’re – before we used to consider export as a modifier, keyword whatever you want to think about it as, whether or not to you that’s correct it did add a lot of complexity where we have to interleave between modifiers and keywords and decorators. And ordering and reprinting syntax trees and formatting and things like that, it is going to be a similar pain over time as well. So it is a minor consideration though I think overall our argument about usability and other ecosystem concerns has been more of a deciding factor. That is another reason why we have decided to bring it up today. I just didn’t get the time to sort of address it.

NRO: Just to mention that I believe the complexity for the (inaudible) how to internally present this. For Babel, we have a different representation than TypeScript and for us it has been much easier to handle like comments and for position of pieces with the syntax after export because we don’t consider export and somebody in the class and declaration that includes AST that represents the class. That said, it’s more difficult for us to properly handle but it’s a problem we solved and whatever syntax we end up choosing I think what are viable for tools even if one of the alternatives is some tools compared to the other.

WH: What are you proposing for decorators with `export default`?

RBN: Expectation would be that decorators would in option 1 decorators would come before the export keyword and would be blocked in the expression much like we block other things like export default class in the export de default that is not tied directly to class expressions, class decorations such that as today without decorators if you really wanted to export a class expression as the default you would have to say export default open parens and the decorator list. In the option 2 case both would be considered part of the declaration.

WH: So I have a strong preference for option 2 or 3.

USA: Next up we have DE.

DE: Just to be totally concrete, WH put a code sample in the – code sample in the queue comment decorator export default class or expression. And, yeah, that’s what the syntax would be except it’s not an expression it’s declaration even if it doesn’t have a name.

DMP: I ran a very quick given timeline and very informal poll of our developers and by about a factor of 20x, they felt that the before option was the better or current one. Could be a reflection of the things that exist currently. But I just wanted to offer that as a bit of information.

RBN: I think someone on the decorator for export issue on GitHub last night posted that a search of the Babel ecosystem that allows you to have a condition for before or after has several orders of magnitude difference in folks explicitly setting decorators before even though decorators after is the default. So people are intentionally opting into that behavior and using it more than the default. I need to look at the issue to see what those numbers were. These are also not – they’re very tentative numbers and could be just based on how the search was performed but,

SYG: What is the order of the sample size of the internal developer poll?

DMP: Quite small. The number of folks that felt that the after export option was preferred was in the single digits.

SYG: Thanks.

RBN: Looking at this, that a search for the decorators before export false returns 410 files and decorators before export true is 1.3 thousand files I forget where–

NRO: I was the one that did that search for that. So Babel has multiple versions, the legacy one that is the one with the (inaudible) most used ones. Put all the other versions together. This is just searching on GitHub. For the most recent version we default to the corrector correctors after default and after middle we require users where they want to put it with the option. And this option that can be used both now that we default to that and previous versions has roughly the same amount of like before and after in negative search search. If I remember 1.3 K for the decorators before the export and 1.3 K for the decorators after the export.

RBN: I appreciate the clarification.

JHD: My queue item is that I’m not sure that these number numbers – we can really reliably infer preference from the numbers. Certainly surveys convey that better. But because we’re looking at folks that have been seeing decorators in documentation and in TypeScript and angular for some cases in the better part of a decade. For example, you could explain those results with that’s the ratio of people that prefer decorators before. You could also explain them by saying those folks are trying to use Babel on the code base following all the existing patterns. It's a good data point. I would caution us from inferring user intent with these numbers with this kind of legacy usage baggage.

DRR: TypeScript had over 35,000 issues both open and closed. In the span – I mean over the span of decorators and it’s been almost eight years since we actually released our implementation of legacy decorators. One out of 35,000 issues, only one has ever been about supporting decorators after the export keyword. And that person was trying to just use the current Babel implementation. And there are like I don’t think more than one up vote on that issue as well. So I don’t think that – I think it’s so overwhelmingly positive in the direction of decorators before export, we just have such a lack of feedback towards the status quo option within the Stage 3 proposal. Now, you might say that that’s because the precedent was already set but I just don’t feel like that is the case, right? No one said actually I find this very unintuitive, the current proposal direction is better and come talk to us about it. Discuss it on the issue tracker for the proposal but that sort of – I mean, it is a little self-selecting as well. You already understand the spec well enough to deconstruct things and say the class expression and the class expression sort of rhymes here, that should come after the export keyword. In practice there’s this sort of theory versus practice thing where we just have so much more community precedent and support and desire for the decorator before export keyword syntax, right? So I really have a hard time squaring those facts, right? Eight years of our implementation, five years of the sort of – it was the sort of encoded mistake in the spec text that we sort of ran with and didn’t want to fight and not a lot of, I don’t know, semantic rationale for why we want to make that switch. It’s just so overwhelmingly – it’s hard to ignore that to me, right? I think that I have to put that out there.

DE: I think that’s a great point that DRR just made. And we can’t always take this kind of feedback quite at face value but I also really don’t think we should ignore it and I would further say we should be taking this kind of stuff into more careful consideration in general as a committee and in particular making it even stronger point we should take existing ecosystem stuff like Babel and TypeScript legacy and experimental decorators as a real – we should be considering it kind of a real thing we're really migrating from. People can incur these migration costs but we should be not thinking about it like we’re designing everything from the beginning, but taking the way people are using these things into account as kind of a first class thing. I think when we were discussing things like set versus define for fields, it was kind of treated as inappropriate or out of scope for people to talk about how the Babel and TypeScript semantics were one way and this was the other way. I think that was in error. I think the strongest argument both for decorator before export and for set was that there was this exist existing usage that way. And that’s a real value proposition that we should be able to talk about in committee and able to make decisions based off of. I’m glad that for future facing proposals we are doing this design work kind of collectively and formally in the committee. But I don’t know. This sort of situation may come up again. I think we’re going to see it when considering type annotations syntax for one, that the way the ecosystem uses JavaScript extensions today matters and it’s okay to make decisions that are designed specifically to be concurrent with that rather than designed to be perfect from first principles. This maybe is the actual product that our customers, JavaScript users want. That’s all. That said, I agree with others that I really hope that we can come to a common conclusion. I understand if there’s a need for migration purposes to have a mode for decorators that isn’t part of the JavaScript syntax. But I wonder if flags can be used for this as opt in rather than kind of default. This is kind of important for maintaining a unified language. Thanks.

CHU: I can only second this. So we have the ecosystem and changing this, just about migration and also about like, you know, people have been doing this all the time. As I said, no need to talk.

USA: Apologies for that. So that is the end of the queue.

DE: Champions want to call for consensus on anything in particular or temperature check as to what we were just discussing?

RBN: DRR, do you want to go with us as a presenter. I don’t know if you’re muted again.

DRR: Can we request option 1 consensus that decorators be placed before the export keyword?

USA: Give a few minutes to the queue.

JHD: I think we should ask for option 2 first personally.

RBN: I’m not sure that I agree. I look at it more as option 1 is the state we would like to be in. Option 2 is the fall back.

USA: I believe it’s up to the champions to choose which option they want to ask for consensus.

JHD: That’s fine. I just made a suggestion.

DRR: I would prefer to ask for option 1 and so do we have consensus on option 1?

JHD: I don’t think option 1 is an option we could go for. I think that would be reopening arguments we had many years ago and I think the argument about migration is one that supports option 2 but does not invalidate the arguments for decorator-after.

RBN: I would like to revisit that for just one moment. You were stating that option 1 isn’t viable because of the kind of decisions and discussions that we made prior to Stage 3.

JHD: Right. I’m saying that I don’t think any of the discussion has invalidated decorator after. I think all it has done is been an argument for supporting decorator-before.

RBN: I would like to finish here which is that there are two things that we have been trying to address over the past two days we have been discussing this. One is that there were two reasons that mandated export after. And even the second one I think is somewhat unclear but the first one was that decorating an export be a thing. And through the years that we have been discussing this this, that that issue has been open, and hasn’t been much motion on it. I made every attempt I could to explain how this really isn’t – how decorating export doesn’t provide anything really valuable that we would actually ever be able to support or would likely be able to advance. And that having both and having them do potentially different things would be a foot gun. We do not believe that decorating an export is a valid reason to specifically choose the decorator after. The only other rationale was around function prototype toString that I believe is something that is addressable if we need to talk more to that. Everything else was purely aesthetic about English language what does it mean and whatnot? That I don’t think are specifically reasons to stay with the export keywords those are purely aesthetic. The only two functional things were decorating an export being possible viable and function prototype toString that are options for. If those two things are considered not valid, then revisiting option 1 is stating there is a case that could be made this is the right direction to go because those other issues are no longer relevant, I think that is worth considering.

JHD: But I think minimizing aesthetic concerns and saying those don’t matter if the technical ones don’t exist, I don’t agree with that. But, yeah, I think there’s been commentary in the queue and the matrix that we should go to the other folks that have expressed anti-preference for option 1 before I continue at least.

USA: I think MF is next in the queue and he mentions if you go with option 1, I would like to hear support from WH since he said only option 2 or 3 is okay earlier. I suppose if WH still around.

WH: I’m around. Am I being asked to actively enthusiastically support option 1?

USA: I don’t think you need to actively enthusiastically support it. But are you okay with it?

WH: I'd rather not express such support.

DE: WH, can you speak to the reasons just summarize.

WH: I would rather not comment at all, please.

USA: That’s fair. Thanks WH. So that was MF’s. Next up we have EAO who says I support requiring decorator before export. So that’s explicit support for option 1. And then Daniel you’re on the queue next.

DE: I think we should focus on the actual reasons rather than this kind of meta point that we have discussed before though that meta point is true. I support option 1 or option 2. Is MM here? Does MM have any – I think MM made arguments about this in the past. If not, if somebody could summarize the points of view that if anyone here finds this point of view pervasive could summarize the actual reason to see how much buy-in that reason has in committee?

JHB: I’m happy to do that. I just very much do not want to re-ignite all the debates that I thought were settled years ago. It’s essentially that the mental model here is that export does not modify – modifies the module and any modifications it makes to the local scope or to the value being exported or the binding being exported are incidental. And you don’t have to share that mental model. That’s fine. There’s multiple mental models here. In that mental model the decorator goes next to the thing and not next to the export. As I did actually mention the other day or yesterday or whenever it was, that – let’s say I take the thing and I decorate it and put it in a variable and then separately export the variable, the decorator is right next to the thing. If I then want to export it inline instead of sticking the export keyword in front of it I have to stick one somewhere in the middle of the code. That just feels really weird and confusing to me. I think optimizing for how code looks in one state while ignoring how code transitions between states is going to be a problem. So even if we go with option 2, I firmly believe and would recommend in every place I have a platform that decorators be placed after the keyword for the reasons I stated.

DE: Okay, I feel vaguely sympathetic with that that you should be able to kind of plop export on the beginning of anything of any declaration and the decorators could be part of the declaration. So we have heard other people in the discussion previously not just you raise express they prefer not to go with option 1. So I would like to consider option 2. Because option 2 already addresses the transition cost.

RBN: My point that I was making before and I appreciate JHD kind of reiterating his concerns was that I wanted to make sure we knew what those concerns were and the two major concerns that I knew were blocking for the function prototype toString and the decorating and export. The mental model and the aesthetics of how the code looks and where it reads and whatnot was definitely not try trying to minimize that but stating the aesthetic decision is the tough one because you have strong support on both sides for both aesthetic choices for various reasons. So I was more specifically trying to focus on the technical reasons rather than the aesthetic ones because the aesthetic ones won’t have a clear cut off because again different people do have different mental models.

DE: It’s hard to say where the line between technical and aesthetic is for a lot of language design.

JHD: I’d like to clarify as well, I think although I deplore the world where legacy usage in documentation forces our hand, this wouldn’t be the first time that’s the case. I recognize that that’s a valid problem that is an expensive thing and because I think that argument has been made compellingly, I would concede and not block option 2. I certainly don’t prefer it, but I wouldn’t block it because of the transition argument. And I don’t think that my mental model position invalidates the alternative mental model that one would have with decorators being before the export keyword. Similarly that informs my preference for option 3, but does not give me a motivation to block option 2. Option 1, however, though, I think that invalidates the mental model I hold and that doesn’t feel good. And given that a number of folks expressed negativity about option 1 that’s why I made the suggestion that we go option 2 first because that seems a more palatable approach that addresses all the transition cost arguments.

DRR: Well, we in the champions prefer option 1 which is why we wanted to go first.

JHD: I get that. It is your prerogative to make that decision. That’s the reason for my suggestion.

DRR: Right. I mean, are there any other – you know, we mentioned that WH preferred not to speak on this. Is MM not around on this?

JHD: The other thing it is always uncomfortable when we have to put people on the spot and ask them to draw a line in the sand. It’s always unfortunate when design decisions are made because people are too hesitant to speak up or don’t wish to even though they have an opinion. Like, it feels like we should respect to some degree the preferences that have been expressed.

WH: My views are very similar to JHD’s.

KHG: I don’t mean to interrupt. I had an item on the queue and I wanted to talk about it. It got deleted. I just wanted to respond, just to provide the opposing side. I think I agree with JHD analysis. I actually tweeted earlier this is just really the address in code form. We’re all just seeing it different ways because there’s two different mental models that make perfect sense here. There is the cost of transitioning code around that if you have the mental model of like export X on an expression effectively, that is something that you’ll have to think about. The opposing cost is, you know, if you have multiline statements, if you are reading a lot of code which I think developers tend to spend more time reading code than writing code. The clarity of reading the code and the ability to understand what the code does at a glance is very important because generally people aren’t always reading with like intent to scanning every word, every line and in particular people who have learning disabilities or visual processing issues, it’s going to be even harder for them to see that there’s that export keyword at the top there. So I think there are costs to both sides for sure. I just wanted to voice that that is the cost that is most preeminent in my mind and a mistake I made on code reviews when having to look at decorators after.

USA: We have a number of comments on either side on the queue. First up you have HAX who says I support option 1 and then there’s WMS who says +1 to JHD’s point and Richard who says that I share JHD’s discomfort with option 1 for essentially similar reasons. At the same time, we’re running out of time. That’s all.

DRR: Sounds like we have people who have a preference for option 1, however, also people who are sharing their general discomfort for option 1. But who would prefer not to block on it. You know, I am not strongly in favor of providing every way to do something, but considering an exclusive order sort of situation where you must put it before or or after, you know, a good compromise is one where everyone has an option but unhappy about the other result maybe. So perhaps option 2 is a direction we can pursue. So let me ask this: Do we have consensus for option 2 where decorators are placed before or after the export keyword or export default but must be one or the other?

USA: So far we have support from DE on option 2 and then NRO says option 2 with syntax error and then option 1, then option 3 and then option 2 without syntax error is there a preference. So I guess that’s in favor of option 2. But with the restriction that you proposed. JHD says begrudgingly consensus on option 2 and RHB says +1 support for option 2. So far only positive for option 2 with the restriction that you propose. That’s all. WH says they support option 2. I think it’s safe to say you have consensus on option 2.

DRR: Beautiful. Amazing.

RBN: There is one other topic related to this that I want to make sure we discuss. We were earlier talking about how MM doesn’t seem to be on the call. His one concern at one point is around function.prototype.toString inclusion and want to make sure we cover that so if we have consensus on option 2 we’re not having to revisit this again because of that confusion.

JHD: Can I comment on that.

RBN: Yes, please.

JHD: My understanding is that nobody wants to try to elide the export keyword from the toString representation. So I feel like we can either pick that decorators are never included, like, decorators on exported things are never included in the toString or we could pick decorators are only included in the toString when they appear after export, although that seems weird if both positions are allowed. And so it feels like either of those two options would satisfy my understanding of MM’s position. Of course, MM can clarify. And I don’t think that that decision should block option 2. I think that’s just something we should figure out in an issue.

RBN: One thing I was going to bring up was that I had a suggestion I had been discussing with other folks with Daniel and with KHG offline which is if we had gone with option 1 and had decided that we didn’t want to include export in the to spring, we could have made the distinction that decorators that come before export would not be included. If you decorated a class that doesn’t have the export declaration they would be included. If you are specifically tailoring the code to use the eval of a toString case that is a niche case as it is and the step of having export declaration for the binding as a separate statement is not a far stretch if you are again trying to custom tailor for the environment. It does feel a bit weird to have a distinction if we allow both but in the same vein allowing both would also make it feasible to have a specific case where you are custom tailoring your code to work with the eval case. That said, I still find evalling a toString to be an unsound and unreliable practice even though it has – it does exist in the ecosystem, I have seen it used well for performance and other things and functions but I also believe that forthcoming proposals or in progress proposals things like module blocks might be potentially a better way to do that as well because it doesn’t require strings and worrying about the CSP, for example, being an issue for making that reliable to use regularly. So I think it might be weird but it also does, like you said, make it so that option 2 is still viable.

DRR: Okay. Any responses to that?

USA: None so far. There’s DE.

DE: So given all this, I think it makes sense to cut off the toString before the exports so like any decorators that proceed exports don’t show up in the to string and we try to document better that people really shouldn’t expect that eval thing to work reliably and any decorators come after the export do show in the to string of the class. Is that what we’re leaning towards so that this group doesn’t have to come back to committee and ask for consensus on that again?

RBN: I’m amenable to that.

DRR I’m amenable to that as well.

WH: I agree.

DRR: I’ll go out on a limb here just as given that we have consensus as option 2, I assume that we prefer as a committee not to try to make people uncomfortable by suggesting option 1.

JHD: So if you need someone to stand up and say I block option 1, I will be that person. We don’t have consensus as a group on this. It’s not only my thing. But, you know, yeah, I will stand as the blocker.

DRR: Okay, cool. I think that makes other people feel more comfortable. Thank you Daniel. In that case, that’s it. I’m pretty sure, Ron, is there anything else that we need to cover.

RBN: I don’t think so. I think we have just to clarify we have consensus on option 2 allowing in both positions exclusively so you cannot put decorators in both positions on the same declaration. You can mix them in the same file. That doesn’t matter. And just to make sure that we have the bases covered we’re seeking consensus on Daniel’s suggestion that the source text of a class declaration is cut off immediate immediately after the export keyword or export default keywords such that if you choose to put decorators in between export and class, then they will appear in toString. If you put them before the export keyword they won’t appear in toString.

??: Immediately after the keywords.

DRR: Yes, and I’ve updated the slides to specifically cover this. It’s not decorators go after export, it’s either before the export in general or after the export default if there’s a default or just export itself if there’s no default. They are kind of a unit in this proposal, right?
So neat.

RBN: And to clarify was making sure we were explicitly asking consensus for the `toString` behavior and we have folks that support that and determine if there’s anyone that is opposed to it.

WH: Sounds good.

USA: All right. Congratulations to the champions.

RBN: I apologize for interrupting. There is a qualifying question from LEO in the queue.

LEO: Just want to add in the minutes, just want to make sure that we have consensus for option 2 with the exclusive-or (XOR) positioning.

### Conclusion/Resolution

- Consensus on allowing decorators before the `export` keyword in addition to after the `export` or `export default` keywords, but with a Syntax Error if you specify decorators in both positions (i.e., exclusively one position, or the other, but not both) on a single declaration. Decorators must not come between the `export` and `default` keywords if both are present on the exported declaration.
- Consensus on the source text cutoff for class declarations remaining only the ClassDeclaration production. Decorators before `export` will not be included in Function.prototype.toString(). Decorators after `export` or `export default`, or on a non-exported class declaration or class expression, will be included in Function.prototype.toString().

## Feedback on transcription

DE: Does anybody have feedback for the transcription?

JHB: Can I provide that async after reviewing the notes?

DE: That would be great. I just need to kind of follow up with the ECMA secretariat to make sure this continues if people like It.

NRO: This is super helpful. I feel like the quality was quite high, much more high than – possible to confirm one with the other. Human taking notes are much, much better.

USA: I suppose this was asked during – taking my chair hat off. This was asked during the delegates chat today. But if you are wondering, well, I am hoping that you feel similarly about the notes and if you’re wondering what you can do about it to keep it as it is, you could find out who your GA representative is and talk to them about making sure that they let it known that we all appreciate the transcription and it’s really helpful.

DE: So we have the Ecma GA meeting coming up in June. And you don’t actually have to be the primary GA Delegate. They can delegate to somebody else in the organization. It’s a Zoom call to call into. Let me know if you need access to instructions. Even if you’re not an ordinary member, it still helps to have all Ecma members represented in the Ecma GA to make the best decisions. Still very welcome in the conversation and everything. And most decisions in Ecma are made by consensus and not by actual voting and counting majorities. So for the notes, I like the suggestion that MLS and Patrick outgoing secretary general made of writing up these more detailed summaries and conclusions. So I wrote some for some topics, I will be trying to edit those. If in addition to the conclusion we can write a summary of the major points discussed, this will be really use useful for all kinds of people who are trying to understand the meeting. At the end, we can collate them all and put them at the beginning. I encourage you all to either write summaries or review summaries that other people have written to fix any inaccuracies over the next couple weeks before the notes are published. Any input from the transcriptionist?

TC (transcriptionist): I don’t think so. The terminology through the days. As things go on I’m learning the terminology

- Many notes in the chat in support of the transcriptionist

- A round of applause for the transcriptionist

### Conclusion/Resolution

Widespread support for using human, rather than machine transcription, given the inaccuracies in current machine transcription. Further feedback will be collected offline/over time to inform the decision of whether to continue transcription in 2024.
