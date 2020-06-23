# October 3, 2019 Meeting Notes
-----
Waldemar Horwat (WH), Andrew Paprocki (API), Rob Palmer (RPR), Joe Sepi (JSI), Jordan Gensler (JGR), Jason Williams (JWS), Brian Terlson (BT), Aki Rose (AKI), Mark Cohen (MPC), Pieter Ouwerkerk (POK), Randy Luecke (RCL), Michael Ficarra (MF), Kevin Gibbons (KG), Shane Carr (SFC), Robert Pamely (RPY), Michael Saboff (MLS), Keith Miller (KM), Chip Morningstar (CM), Mattijs Hoitink (MHK), Devin Rousso (DCR), Jordan Harband (JHD), Leo Balter (LEO), Justin Ridgewell (JRL), Robin Ricard (RRI), Jean-Francois Paradis (JFP), Valerie Young (VYG), Erica Pramer (EPR), Richard Gibson (RGN), Philipp Dunkel (PDL), Godfrey Chan (GCN), Joyee Cheung (JCG), Patrick Soquet (PST), Shu-yu Guo (SYG)

Remote: Daniel Ehrenberg (DE), Ron Buckton (RBT), Caio Lima (CLA), Yulia Startsev (YSV), Jory Burson (JBN), Ben Newman (BNN), Kyle, HE Shi-Jun (HSJ), Pedram Emrouznejad (PED), Dan Ehrenberg (DE), Mathias Bynens (MB), Jonathan Keslin (JKN), Frank Yung-Fong Tang (FYT), Yulia Startsev (YSV), Benjamin E. Coe (BEC), Peter Hoddie (PHE), Istvan Sebestyen (IS)

## UUID for stage 1


Presenter: Benjamin E. Coe (BEC)


- [proposal](https://github.com/bcoe/proposal-uuid)
- [slides](https://drive.google.com/file/d/1LOLLs-OWB1hglv7NQc70UNwsEBEmx1ro/edit)

BEC: (presents slides)


YK: First of all, yes please. I’d want this proposal as it is. A couple of things: Ember has two dominant uses of UUIDs, one is UUID generation for things we compile in the browser (an identifier, or something for references in the browser). We also use UUIDs for client-side UUID generation for database things - we don’t require, but we recommend that clients use UUID generators in the client before they send to the database to avoid race conditions, etc. The reason I'm excited about this is because we’re very nervous about the byte size of shipping a UUID library, so we make it optional. I think if a UUID library was in JS, we’d just make it the default.  Last thing is I’m very happy with the string version - there are cases that have come up when I’ve wanted to write a UUID into an ArrayBuffer facility, but I would be extremely fine if the answer was no to that.


BEC: That's been a topic of conversation; do we add the buffer API which is supported in the node library?


YK: I'm happy to discuss


SFC: It seems like the reason that client-side JS UUID is hard to implement today is because we don’t have a source of secure randomness in the browser. So it seems to me like if we were to add ArrayBuffer.urandom or something like that which gives us the entropy we need, that allows us to implement the UUID library in ways that couldn’t be done today. So by putting this in the language first, it seems like we’re jumping ahead (... - lost this last bit)


BEC: I tend to agree


YK: This is a really clarifying question - I thought that’s what getRandomValues was for?


MF: This would be an ES API that would rely on another web feature that is not in ES.


YK: You could be saying that you could move a part of the crypto api in 262


SFC: Potentially - it seems like if we’re looking at 262 in a sandbox, it does seem like there’s something missing.


BEC: Some platforms have access to these random bytes which are cryptographically secure, but it’s not standard in TC39.


WH: Agree with previous point that this introduces cryptographically secure randomness for the first time into the language, which is a desired feature on its own. It would make me sad if it we got the unintended consequence that users found that the only way to generate cryptographically secure random numbers is to generate UUIDs and parse them. It would be good to also provide a more direct way to generate cryptographically secure random numbers.


WH: This API is for text uuid only. Would we want to support binary UUIDs, or conversions between text and binary UUIDs, or is that a solved problem in libraries?


BEC: That’s a great question - I’ve used uuid a lot throughout the years and I’ve always ended up using the string representation. But the uuid library which is very popular does support a binary API and Robert, who maintains uuid, has said maybe we should support it.


WH: When you stick UUIDs in arraybuffers, what do you use?


BEC: I suspect most people putting them in ArrayBuffers are using the binary form. Myself, I’ve just been using the string form.


WH: Which endianness is it (if binary)? There are at least a couple formats: straight big endian and mixed endian where it’s little-endian between dashes but big endian overall.


Room: what does that even mean? It’s crazy


BEC: I think RFC 4122 is Big-Endian.


MM: Random bits have no endianness!


WH: They’re not *all* random, they have a version number in the middle.


MPC: Why not both apis? It seems like low cost to us to support both, but not supporting both would be an unnecessary burden on the developer to write conversions with lots of pitfalls.


BEC: I think that’s a really fair point. I think we haven’t answered that question yet, but it would paint ourselves into corner to only support one. Folks have made a case for both. I just want this to be a really straightforward API for everyone using it.


YK: I want to take the details of the use cases offline, but I agree that the string version is very useful when you’re just putting it in an object somewhere or using this as a key in an object. Binary indispensable in low level uses.


API: We use v4 only for many years. Other uuids versions have many pitfalls. Irresponsible for us to create it and have it not be v4 by default. Other versions are a giant footgun unless you really know what you’re doing. CM was saying that the use case is interoperation - sending values between clients and servers. If you’re sending a v4 UUID over the wire, you can have other libraries and languages generating them on the other end.


BEC: [echoing agreement]


GFC: Throwing this out there. This was in response to the future-proofing point, which it seems like we think v4 is the best thing for the foreseeable future. But we don’t know that it will be that way forever. If we have a default and we make v4 the default, we might get stuck in the future. The question I’m asking is is there another option? The options presented were no default, or a locked-in default. What are the use cases we are anticipating? If your use cases are interchanged, then it’s probably fair that you should specify explicitly because you want to be sure you match the endpoint on the other side. In that case it’s not much of a burden to specify algorithm explicitly. The use-case where you just want a string to stick in localstorage, you don’t really care about the algorithm and just want whatever is best. I don’t know if that would end up being feasible for other reasons - maybe there are other conflicts that would prevent us from changing this, but I think the question is whether you can specify enough of a use case for the “I don’t care” version, and if there isn’t enough of such a use case, then maybe you should have to specify it.


BEC: That's a good point; there's the "I don't know" use case.  They haven't read the RFC; what does v4 mean; what have I missed in the first three versions?  And the term "version" is misleading.  I wouldn't necessarily want to support v3 or v5 in the browser, and maybe not v1.  It could be, there is a paper that says we want a little more entropy, with better ordering properties. I could imagine there being a paper that says oh this is a much better UUID, we should use this, but it probably won’t be called v6, it’ll probably just be a different algorithm name.


JGR: I think you really need to know the length, at least in our use cases. We’re storing these in databases frequently and we rely on a fixed length. All the sudden if the length changes, it would break all our inserts overnight. I don’t want to rely on people doing the right thing and picking v4, because observably it would do the same thing. It’s kind of a documentation problem.


BEC: I think that’s really fair.


GFC: Given the presentation it seems like it was presented as a thing that could hypothetically happen, and I don’t know how much we should be thinking about. If it is a thing we should worry about, then it does worry me that there could be a future where everyone has switched off v4 and we’re stuck with returning a known-bad value, that seems pretty bad.


YK: Are you just saying you don’t want to have a default?


GFC: If you have a default, you have to think about what use cases the defaults are serving. If we don’t have use cases for a default, where you don’t care, then we shouldn’t have a default.


WH: To clarify, v4 is 122 bits which are completely random, 6 bits (actually 4+2 bits) which contain the version number.


GFC: So is your suggestion that basically we don’t have to worry about-


WH: Yeah, since you get 122 bits of randomness, it’s hard for me to see how that would become obsolete.


GFC: I think it’s possible that we find out that that number of bits isn’t enough at some point 10 years down the road.


WH: So you think that UUIDs would get longer than 128 bits?


GFC: If the assertion is that it’s a known thing that the algorithm won’t change then I think the default is fine.


MPC: This stuff is not a v1 concern, although if this is a web compatibility concern, maybe we should not pick a default. None of us are cryptographers.


WH: How do you know none of us are cryptographers?


MPC: Good point - rather, it’s that this isn’t a cryptographic standards committee.


BEC: I agree - I’ve read the papers around UUID v4, but I’m not enough of a mathematician to make any definitive claims about it. What if databases have a trillion items in them soon? Right now if you generate a billion a second for (some amount of time), you’d have a one in a million chance of getting a collision.


WH: The only way to avoid that while retaining random UUIDs is to make them longer than 128 bits. At that point they would no longer fit in the same binary fields, which raises the question of whether they would be called UUIDs or something else.


YK: What was persuasive for me is that the very common use case is interchange (i.e. putting UUIDs in postgres), so changing the default would really be a severe web compatibility issue.


BEC: Are you advocating for no default?


YK: I think someone needs to write down the decision tree, but I think there’s a lot of things that people thought were options that are no longer options.


GFC: As far as a v1 concern, it would be great if we can get an expert opinion to say whether it is advisable to have a default or not.


BEC: +1; That’s good advice.


GFC: I don’t feel qualified to know whether or not once we put this in it wouldn’t be subject to change.


KG: I'm really in favor of introducing urandom to JavaScript, like copying crypto.getRandomValues to Math.  I think it's important it happens in that order.


CM: I find the whole UUID thing baffling and I have since they first appeared in our world. There’s the wrapper for a good random number source, and I think a lot of people expressed support for a good CSPRNG. But beyond that is there anything good here beyond a printf? You’re encoding it in hex with some punctuation. What is there in the UUID spec beyond that? What is the value of this? I’m not saying to be snarky and I’m genuinely asking.


BEC: I’ve seen time and time again in my research that people screw up that printf epically, and so people think they’re getting a UUID but they’re not getting anything remotely unique. So having a contract where we deliver something guaranteed unique so someone using it as a DB key isn’t shooting themselves in the foot is really valuable. You can screw up that printf pretty bad.


YK: TL;DR postgres has a UUID datatype as a primary key and you have to give them a UUID.


CM: But it's just a string of certain length; what's beyond that?


YK: Postgres requires that it be non-colliding. You cannot give a random number to postgres, so you have-


MM: Postgres can't tell if it's random.


GFC: There's an insertion number.


API: As a reply to CM, this is as used as interchange for us as JSON. So if this isn’t valuable then JSON shouldn’t be either.


CM: I don't think that's a fair way to phrase things.


API: I’m saying in our codebase, it is. Just giving feedback.


CM: Having a standard way to represent it seems fine.


WH: As a more direct reply to CM’s question, UUIDv4 is not just printing a random number.  There are several fields that you must get correct, which are right in the middle.  You can't just print urandom bytes with dashes and expect to get a valid UUID.


MPC: +1; there have been attacks on RSA in the ‘90s and ‘00s due to bad padding algorithms.


MSL: I wonder if comparing this to erlang’s make_ref might explain or clarify how this is different from just a random printf.


SFC: It seems to me that in the current state of things, the places where random bytes can actually be generated, which right now is in a nonstandard node module and the webcrypto (something), and other things in other platforms - it makes sense to have UUIDs where we have the RNG. So it sounds like if we put urandom in 262, then this belongs in 262 as well. So might this belong in webcrypto or another standard.


BEC: I don’t have a good answer - hadn’t thought about that. How would that change the process? What are other folks’ thoughts?


BT: Stage 1 is just an investigatory stage - we can look into it in parallel with seeing if it would fit better in other standard documents. If you want an outcome I think we should try to get it now.


SFC: I’d like the stage 1 investigation to also include urandom.


WH: +1.


BT: Are you okay adding urandom?


BEC: Yeah, I already had this in mind but was wondering if this should be a separate proposal blocking on this?


JHD: I think what you should keep in mind is that these are among the questions people are going to want answers to when you come back for stage 2: “how you get to the feature”, “is there a default algorithm”, “how does it interact with use cases that want to constrain randomness”, etc


#### Conclusion/Resolution

- UUID has consensus for stage 1!
- Include investigation of urandom, which algorithms to include, and where this belongs


## Readonly Collections for stage 1


Presenter: Mark Miller (MM)


- [proposal](https://github.com/Agoric/proposal-readonly-collections)
- [video](https://www.youtube.com/watch?v=N-X_4Xe9lEw&list=PLzDw4TTug5O0ywHrOz4VevVTYr6Kj_KtW)
- [slides](https://github.com/tc39/agendas/blob/master/2019/10.readonly-collections-as-recorded.pdf)


MM: (presents slides)


WH: In the proposal you had an AbstractMap in addition to Map, with inheritance relationships between them. I don’t see that in the presentation. Are there inheritance relationships?


MM: I removed it from the presentation to avoid a misunderstanding: the proposal uses AbstractMap as an expository device, but we’re not proposing an AbstractMap constructor. We’re using inheritance as a fiction to explain behavioral contracts. I should probably withdraw this from the proposal.


WH: Are all of the inheritance relationships a fiction?


MM: AbstractMap is a fiction. FixedMap and ReadOnlyMap are real. FM would inherit from ReadOnlyMap. I’m not proposing we put a new prototype above Map.prototype because that’s probably a compatibility issue without a compelling reason.


WH: Also in the proposal you state that aMap.snapshot() and aMap.readOnlyView() produce results which are necessarily fresh, why is that?


MM: In other words, could you memoize?


WH: Yes, a given Map can only have one read-only view, so why can’t it always return the same ReadOnlyMap whenever you call aMap.readOnlyView() on the Map?


MM: I’m not proposing that ReadOnlyMap itself be frozen in the sense of Object.freeze sense. If I have a map and I ask for a readOnlyView and I give it to you, and then I ask for a readOnlyView and give it to CM, that should not accidentally create a communications channel between you and CM.


WH: But if you have a ReadOnlyMap and ask it for a read-only view you get the very same object?


MM: You are correct. That is an inconsistency between two constraints in my head that I hadn't noticed. That is a real issue that needs to be addressed.


WH: Thank you.


YK: I’m not sure if this is the same thing as saying it could create a sidechannel, but if you create a ReadOnlyMap, someone could use that as a key in a WeakMap and store extra data.


MM: Yes. What’s the problem with a readonly map being a key in a WeakMap?


YK: The thing that you might want to be able to avoid is having two people call ReadOnlyMap and use a library that uses WeakMap for side storage, and so then the fact that you get the same identity matters. I imagine this could create problems.


MM: OK Correct me if I'm wrong, it’s the same inconsistency that WH identified.


YK: The inconsistency affects the same problem. But what I’m saying is I thought I agreed with the fresh thing in the first place, because it allows me to get a clean value that doesn’t conflict with anyone else’s.


MM: The other constraint I want to propose to resolve this issue: that we have a deterministic spec. If we say that mutable map and you ask for read-only map multiple times gives you the same one. We should say either it gives you the same one each time or fresh one each time. We should not say it could give you either the same one or a fresh one.


YK: No matter what we decide here, I would find it useful to ask it for a fresh one.


MM: Would it be useful to ask a fresh map for the same content?


YK: Because I end up using it as a key in a side storage, and has really nothing to do with anyone else’s use of the same thing.


MM: OK I had not considered that.


YK: It seemed morally equivalent to a side channel to me.


MM: It’s not a side channel, it’s an overt channel. It might be unintentional, but that’s different from a side channel. I think that’s a good question we should keep on table for stage 1.


CM: The same reasoning applies to returning identity for the FixedMap.


MM: The issue that WH and YK just raised? Yes I think that it should be on the table for stage 1.


YK: All I want to say is yesterday we talked about # literals and I know this is not the same thing as that, but this lives in a similar problem space and so I’m excited to see this.


MM: Yes. Let me say that I wrote this down independent from # literal thing. Very excited about sharp litteral thing, at the moment I don’t see any conflict between those two things.


YK: I’m not meaning to suggest this as a conflict, I mean to say this exists as a higher priority.


JHD: would not be desirable, current proposal doesn’t have any inheritance hierarchies?


MM: Actually the currently proposal does have FixedMap inherit from ReadOnlyMap.


JHD: Okay but it doesn’t have any interaction between Map and Set.


MM: Didn’t want to break the web by splitting Map.prototype. Probably wouldn’t break the web, but large change for little payoff.


JHD: Absent web-compatibility concerns, would this be a hierarchy?


MM: Yes, absent those concerns I think the AbstractMap expository device in the proposal would be implemented as a common super.


JHD: OK, then offline I’d like to explore ways to make it web compatible.

JHD: Second part of the question: if I have a library that employs more robust programming style that uses Map.prototype.get.call etc for defensive programming, and I want to accept generic map like collection, if someone passes a readonly map, it would throw unless it uses the same internal slot.


MM: Yes, there are two separable issues. I did not address in my proposal how generic the query methods are. I think in fact the query methods could be the same method objects, just reproduced on multiple prototype objects. I see no reason for the query methods to not be generic across the three classes.


JHD: I agree if they share the same internal slot, then that issue is separable from hierarchy.


SYG: I would like to say I strongly agree with your decision to leave out generalized detaching. Adding detaching to existing collection types will be a giant source of security bugs for years to come so let’s please not do that.


MM: Thank you.


DCR: Would there be any sort of operation that you would get on a mutable map? Would those operations throw or would they not exist?


MM: The mutation operations would obviously continue to live on regular Map, but they would not exist at all on ReadOnlyMap and FixedMap.


JHD: Presumably if you did Map.prototype.set.call on a ReadOnlyMap or FixedMap it would throw.


MM: That's right.


DCR: For library design, it would be useful to know "am I a Map-like thing?".


MM: Splicing something in an existing prototype chain has some chance of breaking old code. It would be my preference to do that if it weren’t for breaking old code.


YK: Earlier you talked about not having a bunch of methods that throw. I agree with that. TypeScript issues with adding methods that throw. TypeScript would a minimum not want to expose those methods - it shows it’s incorrect that it’s there. If you ask for a map and you get back a bunch of methods that won’t throw, TypeScript won’t give you a red line, but then will throw. If you ask for a map and you ReadOnlyMap, TypeScript will give you a red line and that’s good.


MM: That’s supportive of the change?


Yk: Yes.


MM: Ok good.


YK: mutability creates invariance problems.


MM: All covariance and contravariance issues only come up for mutability. RO collections are only covariant.


#### Conclusion/Resolution
- Stage 1!


## Eventual-Send: Support for distributed promise pipelining


Presenter: Mark Miller (MM)


- [proposal](https://github.com/Agoric/proposal-eventual-send)
- [video](https://www.youtube.com/watch?v=UXR0O-CufTk&list=PLzDw4TTug5O0ywHrOz4VevVTYr6Kj_KtW)
- [slides](https://github.com/tc39/agendas/blob/master/2019/10.eventual-send-as-recorded.pdf)


MM: (presents slides)


WH: I thought that “Handled” was a synonym of some new variant of “Resolved”, but it’s completely different so the name really confused me.


MM: Completely didn’t anticipate that. Thank you for clarifying. All states of a regular Promise are reflected in a HandledPromise.


WH: [Referring to the slide with `get(p, prop)`, `has(p, prop)`, …, `applyFunction(p, args)`, …] Can prop or any of the other arguments be Promises?


MM: The arguments can be promises. I had not considered the case of prop being a promise. Currently prop is coerced to either a string or a symbol early on, but maybe the handler should do the coercing instead.


YK: You just mean property key there, right? You meant to include number and other things that are valid property keys, right?


MM: This is not thought out. I think we have a shim for this that we’re using in production. What our shim does, is that the [] immediately does the same coercion that square brackets do in normal property lookup. No matter what you give it, it does either of two things. If it is a symbol, it gives you the symbol. Everything else it converts to a string. It’s conceivable we might want to let the handler decide rather than have a decision up front. I had not considered that, it’s a good stage 1 concern.


WH: [“Cannot be shimmed!” slide] I’m confused by this. Wouldn’t `pr.resolve` be undefined on the last line of the slide?


MM: On the second line, the constructor is storing into pr the resolver.


JHD: It should be a function call; the slide is otherwise correct.


MM: I’m sorry, yes, it should be `pr(q)` instead of `pr.resolve(q)`. This slide is incorrect.


JHD: This kind of seems like a proxy for sync regular objects. It seems like a promise proxy, finding a way to async trap these messages. There’s been a few Qs in IRC as well, can you explain why proxies are not sufficient?


MM: The E helper that I showed is actually wrapping the promise with a proxy in order to give you a proxy that you can then say .foo() on. So you can use proxies on top of this mechanism to get some syntactic shorthands. My next presentation will touch on this. The reason you can't use proxies more directly is, you need to be able to do this eventual send op.  For example, simply on a local promise, for something that might be resolved to something that might be local or might be remote.  If p is just a promise, then p itself is not a proxy.  The E wrapper can wrap it in a proxy, but the promise itself is not a proxy.  If you express the delayed call the way you would express it today, like p.then(() => …), that can't fire until the promise is resolved.  So you have to pay the full round-trip cost.


JHD: Thank you.


KG: I am very far from convinced that this is worth adding to every promise in JS. Most usages of promises in the language today do not need to have the eventual-send-that-avoids-a-roundtrip that you described - they don’t have a distributed computation model. They’re a model that you’re waiting for, not making further requests to. As such I don’t think this is something we should add to promises.


MM: I’m confused about. You started with not adding to every promise which is the part that confuses me,. If you’re adding the existing promise API unmodified. This proposal is not adding new methods, and it is not changing the behavior of any existing methods. It is adding new internal behaviors. If we were adding a new abstraction to JS, in what way would that be cheaper?


KG: I can reason about promises without having to think about that additional behavior.  If those internal methods are added to every promise, I can no longer reason about promises in the same way.


MM: Every piece of reasoning you’re doing today, all that reasoning remains valid. We’re not handling then, catch, etc.


YK: what is the described scope of stage 1?


MM: I don;t understand the question.


YK: In general advancing to stage 1 is about exploring a particular space, what is this space that we’re going to explore?


MM: Other than pointing to the presentation I just gave or the proposal?


YK: In general we don’t say yes we agree with this concrete presentation because that’s not stage 1. In this case I think we really need an explicit broader area.


MM: The investigation will be what it is that we need so that third party libraries can build decent distributed JS systems with remote objects and promise pipelining.


YK: That is a good description.


#### Conclusion/Resolution


- Stage 1!




## Wavy Dot syntax for promise pipelining for stage 1


Presenter: Mark Miller (MM)


- [proposal](https://github.com/Agoric/proposal-wavy-dot)
- [video](https://www.youtube.com/watch?v=ikyK3hUJsN8&list=PLzDw4TTug5O0ywHrOz4VevVTYr6Kj_KtW)
- [slides](https://github.com/tc39/agendas/blob/master/2019/10.eventual-op-as-recorded.pdf)


KG: I would need to be convinced that promise pipelining is *extremely* common before we consider syntax for it. Currently it’s not common because the language doesn’t expose anything for this, so I would need to see this before stage 2.


MM: Going to stage 2 yes, that’s perfectly fair. Bit of history: promises we have in JS comes from a line of investigation. And in those languages once it was possible to do pipelining, it was used a lot.


KG: It seems plausible that might happen in JS, but also plausible that it might not. So I’d like to see that first.


MM: that’s stricter than what you said before. I thought you said you wanted to be convinced that it was going to be popular in the future.


KG: I do not feel like there is any way I could be convinced that this is going to be popular other than that it is popular.


MM: But the criteria should be that you’re convinced it will be popular.


KG: [tautology]


MM: OK thank you.


CM: I want to interject some actual world experience. Motivation for E in the first place was a system built in the early 2000s. We were using this all over the place, this is fundamental to building this massively distributed world.


KG: I believe that there are some applications that would make heavy use of this, not convinced that it’s worth making every user of the language learn.


MM: I agree with the bar you’re raising. I’m one of the harshest critics of adding syntax to the language. It would need to cross the bar that I apply to everyone else. I support ?., so some new syntax does cross my bar.


MPC: I’m sensitive to the idea of putting the carriage before the horse. I think it is very possible for syntax to inform value and polarity of a feature. Being convinced may very well be gated on syntax, or at least on good syntax.


JGR: For proxies can't you have a function with a then property to allow it to be both a thenable and a function?


MM: I tried to make promise pipelining work going down that road. The then can't fire until it gets fulfilled and you pay an extra round trip cost.


JGR: I’d need to see a concrete example. I have not had that issue.


MM: I don't understand how you could have not had that issue.  So we should work through examples.


WH: I noticed in the write-up you said that this was using the SendOnly variant depending if the result is used, and you said in an ExpressionStatement the result is not used, what about completion values?


MM: Yes, I would have to say for ExpressionStatements in completion value positions we would have to assume its results is used. If you could give me an argument to not conclude that I would appreciate it, but I would have to conclude that right now.


WH: You could just dictate, but we'll have to think about this.


MM: I would rather pay the occasional extra bookkeeping expense than the programmer surprise of having it not do what they expect.


WH: Yeah, you can debate about which surprise is bigger. Moving expression statements around changing what they do (i.e. whether they use Send or SendOnly) is also very surprising.


MM: Nice thing about leaving completion values aside, if programmers use this feature never know a special case is made, they never need to be aware, it’s completely unobservably different. The completion result thing - I would prefer to not have that be a place where the abstraction leaks.


WH: I’m skeptical of hidden gotchas that deoptimize your program depending on whether you have some expression in a tail position.


MM: Let me just check.  The only place completion value exists is evaluating scripts (eval).  Does the concept of completion value appear anywhere else, like in module code?


KG: No.


MM: In that case I would prefer uniformity and pay the extra bookkeeping cost.


JHD: But the do-expression and pattern matching proposals may intersect with that. At least do-expressions is definitely intending to use completion values.


MM: In that case that definitely should be investigated.


KM: Arrow functions without curly braces?


MM: It’s not a completion value issue. If you do arrow functions without curly braces then we assume the value is used. If you use the curly braces, then the value is not used.


WH: Arrow functions without curly braces contain expressions, not statements.


WH: The other question I have is that you support function calls but not `new` — is that going to be part of this eventually?


MM: It never occured to me. My inclination is no but that’s off the top of the head inclination. Nice thing about operators that we have, they’re not JS specific really. `new` would be JS specific, I think `new` is a good question.


JRL: I’m trying to justify in my head why you have to return a function at all here [slide ref?], why can’t you just return a proxy?


MM: You can return a function proxy, that’s why it says function(proxy). Problem is it can’t be that and a promise.


SFC: In the current world without HandledPromise, you can await the promise and then use the regular dot operator on it, without needing the wavy dot. So what does this add without HandledPromise?


MM: This proposal does depend on HandledPromise. It is purely trying to make it pleasant to use the functionality of the previous proposal. In absence of previous proposal this proposal is meaningless.


MPC: Why not roll this into the previous proposal then?


MM: We should apply a very very high bar to new syntax. I don’t want the previous proposal to be held up by this proposal. If this proposal never gets accepted, the previous proposal still adds tremendous value.


SFC: The utility of the TC39 process in promoting this to stage 1 seems like it could formalize that we think the wavy dot syntax could be used for this in the future, and if there’s another feature that wants to use wavy dot, then they would have to make the case that their other usage is more useful than this. I think there’s utility in giving this stage 1.


MM: The utility in Stage 1?


SFC: In giving stage 1 to this, even though this is still in a very theoretical position, because it depends on HandledPromise getting wide adoption. But I think it’s useful in that it documents TC39’s thoughts that this syntax would be useful in this context.


MM: Good thank you. Yes that reminds me of our previous conflict of the war over the @ sign. It was both private state and decorators were planning to use it.


BT: Do you see this as a way of reserving this syntax?


MM: Reserving is a strong term, it puts a stake in the ground: here’s a plan for syntax, any competing plan to use this syntax should coordinate with this proposal. There would be a conflict, what the result would be? One maybe would need to change its syntax, etc.? By planting a flag in the ground it alerts anybody that there might be a conflict instead of finding out accidentally.


DE: What are we putting the stake in the ground about?


MM: The investigation that is being proposed is the investigating of pleasant syntax for distributed promises pipelining, but in addition, the issue that Shane has raised is that by having the concrete proposal of `~.` in the content of the stage 1 proposal, it makes it clear that any competing use of `~.` is a potential conflict that we should coordinate about so that the conflict happens in an orderly manner rather than accidentally.


DE: OK I’m comfortable with coordinating on the use of tilde in this sort of context, that sounds good to me.


#### Conclusion/Resolution
- Stage 1! MM is 3 for 3! He might take it all! the! way!


## OOM Fails Fast for Stage 1
Presenter: Mark Miller (MM)


- [proposal](https://github.com/Agoric/proposal-oom-fails-fast)
- [video](https://www.youtube.com/watch?v=wNM2B4GFf3s&list=PLzDw4TTug5O0ywHrOz4VevVTYr6Kj_KtW)
- [slides](https://github.com/tc39/agendas/blob/master/2019/10.oom-fails-fast-as-recorded.pdf)


MM: (presents slides)


KG: Clarifying question: I would not consider stack overflows an OOM per se Are you intending to cover both?


MM: I’m intending to cover both. I did not understand that people used a different terminology for that. To me both are a form of memory, and both of them are not specified.


KG: It’s not running out of stack space. It’s that there is a number of functions that can be on the stack, no matter how much memory they take up.


MM: So yes I’m intending to include that, if you have a suggestion about better terminology that would be welcome.


WH: [referring to the slide] How does this exploit work? Is the top function a tail call or not?


MM: Hahaha. That’s funny. If this was run on a conforming JS system, which Apple provides wrt tail call, this issue would not have happened. This exploit would not have happened. However, obviously you can transform this program into one where there is no tail call. But this doesn’t change the point of the exploit. Had the underlying engine been spec-correct on the tail call issue, this would not have happened.


MLS: (indecipherable)


<!--
// → he was MS in previous TC39 meetings.  When did he change to MLS?
//      Unsure - he was MLS in the header of the Tuesday notes
//      Let's ask him which one he prefers in the next break
-->


MM: The point of the exploit is still there, the exploit is trivially rewritten to apply to any JS platform.


MM: (returns to slides)


API: I thought it was interesting because Bloomberg has done this in prod already. We've modified engines to make stack exhaustion and OOMs uncatchable in script. It works great in production and I can’t imagine it working any other way. We already have two separate memory heaps (the system heap and application heap) and so OOMs will happen when app heap is exhausted, regardless of system heap. So we’ve done that, it works, it makes sense. The flip side was when I prototyped stuff in Node, parts of Node are themselves written in JS. So, if you have a timeout watchdog that kills V8, that would not only bubble up through the app JS but also through the Node implementation, and it led to a wacky state.  So that's why I implemented in V8 the CancelTerminateExecution(),  because Node terminated execution but then it needs to un-terminate it when it gets back to the Node implementation. So it was really wacky inside of Node, and it’s still fragile and has issues, so I don’t really know if it would work in the OOM case, but I think we could still go forward.


MM: Thank you.


SYG: What is actually being proposed? A new API?


MM: No, not proposing a new API.  The new API I showed was trying to paint a larger picture.  The actual proposal is that OOM itself should cause preemptive termination of the unit of computation which has to be assumed to be unrecoverably corrupted, which must be at least an agent. It might be an agent or agent cluster or somewhere in between, depending on the semantics of SharedArrayBuffer. Right now this proposal is not proposing any handling mechanism within the language. As far as this proposal is concerned, we can just have hosts react to the termination. This is the larger picture of having code in the language enable the termination of other code.


SYG: I’m still confused. You are proposing that for an implementation to be considered compliant it must terminate the executing agent when that agent reaches an OOM condition.


MM: I suppose termination is not observable.  The requirement is that no further code within that agent is executed.


SYG: OK and yeah, that’s not going to fly.


MM: Can you expand?


SYG: There are many kinds of OOMs first of all, I’m unclear on what type of OOMs you’re referring to. There’s the OOM recursion thing you pointed to - let’s imagine a non-tail-recursive case where you ran out of some kind of stack space (artificial or real), that’s catchable and the web depends on it now. I don’t see how we could get around that behavior. There’s smaller OOMs that ??? must do as part of its execution - some applications do some kind of panic already, some are coded to consider those allocations fallible… I don’t see how to implement this.


KM: I can tell you as a fact, having looked into web-compat issues.  There are many websites that depend on OOM and then catch it and continue execution.  And those websites are big ones. So this is not web-compatible unless it’s opt-in.


MM: OK good, I was wondering if that would happen. I didn’t know if that was the case, I was worried it might be. Given that’s the case I agree we can’t break the web. The opt-in is tricky because the affected unit has to be the agent as a whole and there’s many different pieces of code running inside an agent. The opt-in rule I would propose is that if any of those units opt in, then the agent as a whole has opted in.


SYG: To be clear, there's the web-compat issue.  I'm also expressing doubt that it is implementable. Even if there were an opt-in, to be compliant you would have to honor the opt-in, and that might not be possible.


MM: Can you explain to me what characteristic of an implementation would prevent the implementation from being modified to honor the opt in?


SYG: Let's take something that aborts something on infalible allocation, deep down in the bowels of malloc.  How do you suppose we put the agent-killing mechanism on top?


MM: Under this hypothetical, what does it do right now?


SYG: Say it aborts a thread of execution.


MM: Then it’s already compliant with what I’m proposing.


SYG: So you are proposing that there is a range of what stops executing code?


MM: It has to be at least an agent, it has to be anything that could be corrupted. I’m hoping that we can refine the SharedArrayBuffer semantics so that we don’t have to require anything bigger than an agent. Let's assume that. If nothing larger than an agent gets terminated, then other agents can recover.


SYG: OK then I will weaken my statement from “not implementable in all implementations” to “I have reservations about implementers being willing to change their internal implementation strategy from a spec perspective.


MM: The thing that is non-conforming on implementations with regard to what I'm proposing is the thrown error, it’s not that the allocation per se has to change its strategy - you can do something like what API said where you turn the error into some kind of uncatchable failure. That would still prevent execution of other code within that unit.


SYG: As the person who implemented part of that code, that was possible with the architecture of SpiderMonkey.  I'm not sure that is generally possible unless the engine was built with that design in mind.


MM: OK noted, that’s a serious concern, I think that’s a good stage 1 investigation concern, and I think I will proceed to investigate that.


PHE: I like this area of investigation a lot. In XS we absolutely encounter memory failures of the kind MM showed with the linked lists [slide ref?], and I think what MM proposed is correct. There are other places - I think SYG mentioned one in the language spec where we are allowed to generate an error. It’s a curious error - there is no OOM error in JS, which is odd - we’re actually obliged to throw a RangeError, which is funky. (...) It does raise for me the question of array built-ins, for instance array.push() could fail. It seems to me that maybe the answer is that it’s okay to throw an exception in that case as long as the engine ensures it leaves the array state consistent as though the push had never happened.


MM: Array push: it’s definitely that array push failing for oom even if it leaves the array in the original state has to be unrecoverable.


Array.push is used on the inside of algorithms that assume it succeeds in such a casual and light way as the changing of property relationships in the doubly linked list example I gave [slide ref?]. The idea that an algo using array.push should be defensive against the fact that the array is not pushed is unrealistic. The arraybuffer case I think is interesting, specifically on allocation and on something that is explicitly called out as a container for a potentially large blob of binary things, I think it’s psychologically plausible to say that it’s part of the language spec that a “new ArrayBuffer” can fail in a recoverable manner. Even that we should be wary of that because it needs to be understood when you're using it that it’s possible to be defensive against.


So if it’s already part of the spec that that happens, then I would leave it alone, but if it isn’t part of the spec and the issue is real, what I would prefer is that we add a static to ArrayBuffer that is an allocateOrFail static that does the same thing as new ArrayBuffer except that it’s part of its semantics that it can fail. The key thing is that it’s called out as vividly distinct to the programmer from operations they casually use assuming they succeed.


PHE: OK so then if I understand you’re saying as a rule the built-in would fail with exception of calls like arraybuffer constructor provided it’s well document that it can fail for OOM reasons. I’m interested in looking into that and experimenting with that.


MM: I was hoping you’d say that, I’d like to work with you on that.


WH: I have a similar concern: Would this outlaw any kind of fallible allocation in the language? SharedArrayBuffer being one.


MM: Yeah I think that’s very much along the lines of the question PHE just asked. What I would prefer is that in general the answer is that it does rule out fallible allocations except for specifications that we decide to carve out, and that in those cases by carving them out I would prefer seeing something very vividly distinct.


WH: I would disagree with that, I would want new ArrayBuffer to always be fallible.


WH:  My other point is that this would be kind of a pyrrhic victory... What this is doing is preventing exceptions from being thrown from unexpected places. A few people might be able to program that way; you’re one of them. However, if you try to write general code, just about any statement you do can throw due to sneaky code that might run via getters, setters, and proxies in places you don’t expect them, and this proposal would not affect that. You could get rid of OOM throws, but you would not get rid of most of the other throws.


MM: This is one of those cases where the amount of code that would be affected directly might be tiny but it’s crucial code that affects a large body of other code. Basically mechanisms that are coded carefully in order to have high reliability properties like the realm shim, such that other code can reliably depend on other mechanisms can depend on. Also, a lot of normal non expert user code doesn’t have delicate invariants that are suspended over calls to other things. They certainly can, and there’s a lot of code that does, but as people are moving towards more stateless / functional patterns, the danger here is when you can’t avoid suspending an invariant and you get the exception while the invariant is suspended.


WH: If you’re one of those careful programmers, and you need to be in order to utilize this feature, perhaps a better solution would be to have a no-throw annotation on code that must not throw. Since you maintain that there’s a limited number of places affected by this, it would solve the problem without affecting anybody else.


MM: Okay, that’s a syntactic form of opt-in, let me explore this a little bit in real-time with you right now.


WH: This would also help solve the problem of getting proxies into places where you don’t expect them and stuff like that.


MM: If an exception would have been thrown from a place like that you would terminate?


WH: Yes.


MM: That’s an interesting form of opt-in; that would certainly solve my problem.


BFS: I would like to bring some existing stuff that we should take into consideration. I think it might not be possible to kill a whole agent cluster. With workers and stuff all over the internet now, even if you have a shared ArrayBuffer across them, you can pre-empt them and kill them, even … I don’t think it’s actually possible that…(disconnected)


MM: [in jest] Bradley I think your audio was preemptively terminated; I hope you’re in a consistent state.


[laughs]


MM: In reaction to Bradley’s question: if we can refine semantics of SharedArrayBuffers, I would certainly prefer that.


JRL: I have explicitly written test code to test for OOMs. I was writing a promise library, and in certain conditions, you could write a promise that could cause an OOM. … But for my test runner to die because the test is failing would be really disappointing for me. I wouldn’t be able to see what’s happening, why the test is failing, etc.


MM: I think that’s a use case for observing termination in a light weight manner that I didn’t have in mind that makes sense in a testing environment as opposed to a prod environment.


JHD: How would I produce an uncatchable error in userland?  The reason I'm asking is, for maintaining es5-shim, Adobe Photoshop has a JavaScript implementation and people are using es5-shim in it! It turns out photoshop produces uncatchable errors sometimes and some of my feature tests were running into that. It was a huge pain in the butt - some I could fix, some not. Meant that the user couldn’t use es5-shim in that version of photoshop. So (1) an uncatchable error seems like a bad kind of error.


MM: I think it’s the second worst kind of errors.


JHD: (2) And it seems bad to increase the number of things the host can do when the language has going in the direction of removing undefined behavior.


MM: I’ll answer the 2nd one first. That’s why I showed the keeper code even if not part of this proposal. My perspective on the realm shim is about enabling JS code to act as host for other JS code. Code that’s in a position to be host-like wrt to other code. I would like to extend this to preemptively terminated units like agents or agent clusters as well.


MM: What remains is the first question which is yes , uncatchable errors are a problem, but catchable errors when state is corrupted in unexpected ways are worse.


JHD: Because you might catch them and you might clean up after yourself?


MM: Because you cannot cleanup after yourself. The only thing you can do with undefined state is abandon of it. One way I like to explain the erlang failure mode: that process is now confused. Something needs to engage in recovery. Recovery is hard. Who is the worst entity to ask to figure out how to recover? Well the entity that is already confused.


KM: How does this work with error reporting on websites? Most websites have basically a big giant try/catch block or an onerror that sends a stack trace back to their server. If we had something like this we would need to provide some ways for sites to add that capability back in. No website will voluntarily remove all error reporting from their users because of this problem.


MM: Providing the keeper with as much diagnostics as possible about what went wrong is perfectly sensible.


KM: I get that.  I'm just saying that w/o the API for the keeper, I don't think any website would allow code to have this uncatchable error because then you couldn't get data that the error occured.


MM: Right now the onerror thing that websites use, I want it to be a JS portable way to get notified of termination. Certainly the absence of a JS portable way to do that, anything that adopts what I'm proposing, hosts would do something similar to what they're currently doing with their onerror. One thing we could consider is that the postponing of the keeper API is not something that should happen, maybe this argues that needs to be bundled into this proposal.


KM: You’re probably going to want to do that. Otherwise, it would be a disaster to not allow websites to report errors. There would be other things to try to ban the ability to throw uncatchable errors. I think it would be a disaster to disallow websites from reporting errors in production.


MM: What's the general reaction of bundling into this proposal something like the keeper mechanism so that you can, in a host-independent way, bundle code that could run in reaction to other code?


MPC: Is the idea that if we don’t bundle them, there wouldn’t be a way to observe this behavior in tests?


MM: In the absence of the keeper mechanism, hosts can keep whatever mechanism they want, … that test environments could assume.


YK: Are you asking whether people agree with the bundled feature, or whether agree that it should be bundled?


MM: I'm asking if people agree that whether divide into two proposals, they could be in the same proposal so that acceptance is atomically between both proposals.


YK: I think I agree that as a user it would feel, the value prop would be very high to justify losing errors. It would be analogous to putting code in an iframe.


MM: The issue is not letting hosts provide them, the issue is do we bundle this proposal with a way to provide them.


YK: In general hosts would provide it as a hypothetical thing… (indecipherable)


MM: I’m happy that the sense of the room is that we should bundle them.


KM: the other thing is: one of the biggest problem is dealing with failed host allocations nested deep in the OS that you can handle in obscure ways that may not be obvious to the engine VM itself. In a web browser you might have some UI framework that might have a failed allocation in some way, and that code is way deep in a legacy corner, it might report in some weird way, it might be an exception, it might not be. It might just end up in some inconsistent state that the user wasn’t expecting and Identifying that and handling that in this proposal might not be feasible. There would be millions odf lines of code you would have to go trhough to identify all these places.


MM: Is all of the code in this scenario javascript code inside the same agent?


KM: C++ code, native code, it could be JS code.


MM: This is really important. We can go through scenarios, but pick one first.


KM: there’s probably code somewhere in blink and webkit from super old original konqueror code that tries to allocate and fails and they create an error object in C++ code and throw and return back to the JS engine.


MM: So this proposal first of all de jure would not speak to that. But the pertinent question that one should examine with regard to a scenario like that is what code had responsibility for preserving consistency of state? And of what state? So if the C++ code doesn’t reenter JS code until all state managed by C++ is consistent again, then as far as JS code is concerned, no OOM had happened.


KM: so what I’m saying is the c++ code fixes up its state, allocates a new error object, tells the vm I just threw an error.
So you could end up with a situation where you’re eval-ing something in a loop and they were able to call this thing that causes an OOM that you weren’t expecting, and the API contract is that it can’t error.


MM: If the contract was that it can’t error, then it should not violate the contract by throwing a catchable error. I would consider this a mistake.


KM: The concern now is that that means that every line of all things that embed any JS engine - node plugins, anything that throws an OOM - you need to find all OOMs in your system to audit and that’s a huge thing to audit.


MM: I’m still confused about something.


API: It’s pretty much an intractable problem for node. The C++ code can do anything it wants. If you’re giving people the ability to have JS modules that are throwing C++ exceptions then all bets are off. This only works in our system because we own all of the native code we run.


MM: You now have much more experience with what I’m proposing than I do, so what do you suggest?


API: I would defer to SYG here, I think what would be good for node and good for the ecosystem was if there was an ABI there that doesn’t have anything to do with TC39. If node said “it is illegal to throw an exception ??” but node hasn’t done that. But what SYG was mentioning is that it wouldn’t be web compatible. You just have to decide whether what you can get away with in a limited form is good enough. In a closed environment like ours it’s great but otherwise...


YK: I’m aware of the C++ exception problem. If someone throws a C++ exception - there’s a lot of things you could do in C++.


API: But it’s not something that you’re throwing, it’s e.g. the STL throws an out of range or bad alloc exception.


YK: My question about the concrete thing isn’t “well too bad”, it’s what ??? (something about a try/catch)


API: most people have no clue.


YK: I work on ??? at some point if people mess up and create undefined behavior, but that doesn’t seem directly related.


API: I could say concretely what we had to do to the engine is that every call of a native from the JS native had to be wrapped in a C++ try/catch.


YK: That’s what you should do.


API: But engines don’t do that. It’s unclear whether engines should do that or node should do that, because they have other people writing native code.


AKI: Is that what ?? was talking about?


JCG: In node there are settings in common.gypi that do not allow user land C++ add-on to use C++ exceptions.


SYG: Since there’s a lot of intuition and personal experience that this is not web-compatible as a default-


MM: I accept the opt-in.


SYG: -and so we have to do an opt-in, but at the same time it can’t be an in-band opt-in because it affects the whole agent, you can’t do that because you don’t know what other code on the page depends on that. The opt in would have to be out-of-band, the web would probably not turn it on, and node might not turn it on. Isn’t it the job of the host to directly code this behavior in itself?


MM: It is the right of the host to do that today, because the language does not specify today anything about out of memory.


SYG: If there's no value add to the big platforms currently, …


MM: No. We can argue about it but my position is no. The step we went through in your inference chain that I object to is that it cannot be a language opt-in. I think that having anyone within the agent opting in for the agent as a whole is, I think, a good way to approach the opt-in. And notice that an agent as a whole only has a single thread of control. Anything in the agent that gets control can just go into an infinite loop and deny computation to anything else in that agent anyway.


SYG: Ok, that’s true.


YK: There's another link in the inference chain.  Just because it isn't on default doesn't mean the web can't expose it via an opt-in.


SYG: exposed via the language itself or?


YK: Like a ?? feature.


SYG: that seems fine to me.


YK: Eval is an example where we spec what it means to disable eval and then we specced it through csb (?)


SYG: right, I guess the point that MM directly addressed, that is something I’m willing to concede: yes there is existing data that one particular script may opt in ….???


YK: Are you saying the web wouldn't even want to expose the opt-in?


SYG: I wouldn’t, but I would need to think more about it. Seems like not a flat-out impossibility; would prefer WH’s suggestion.


MM: Any code anywhere in the agent by using this syntax...


SYG: Correct.


MM: Which I still support, but I want to point out that it’s still equivalent.


WH: No it’s not.


SYG: What is not equivalent?


MM: WH can you expand?


WH: It’s not equivalent because the no-throw opt-in would not apply to the entire agent. It would be local to the code marked with that opt-in.


MM: I see.


WH: Code marked no-throw would not be allowed to propagate exceptions out. An exception would immediately terminate.


MM: And, by having made that clarification, let me say that I think WH's narrower suggestion solves the problem I had.


AKI: Do we have consensus for Stage 1?


SYG: I'm uncomfortable with this as-is but I'm OK with exploring this space.  Would you be able to investigate WH's proposal at Stage 1?


MM: Oh yeah, WH’s proposal I find very attractive and it certainly would be an alternative to what is shown here.


#### Conclusion/Resolution
- Stage 1. 4 for 4!


## Promise.any Reprise

[Previous discussion from October 2](https://github.com/tc39/notes/blob/master/meetings/2019-10/october-2.md#promiseany-for-stage-3)

KG: The outstanding issue was that errors property on instances of aggregate error was an own data property or an accessor on the prototype which returns an array. There was some more discussion on GH - JHD said it would be more consistent with the rest of the language to have an accessor on the prototype. MB pinged Benedikt Meurer on the chrome team who said he did not feel strongly that it didn’t need to be an accessor. I would like to ask for Stage 3 for the variant of the proposal that has an accessor on the prototype for errors.


AKI: Queue’s empty.


#### Conclusion/Resolution
- Stage 3 pending spec text and appropriate reviews.


## Redux: Update on sequence property escapes in Unicode regular expressions


SFC: I suggested to MB to discuss this with ECMA-402 and other i18n-focussed groups.


AKI: Since we’re not moving on this meeting, I thought the intent was to simply gather more information from those groups rather than make a decision there.


MLS: Why would ECMA-402 have jurisdiction over this?


SFC: It was intended to get additional signals from people who have worked with this subject matter before.


API: Seems like there was a lot of personal preference in the room, but I want to clarify to Mathias which comments were preference and which were objections.


YK: Answer to that question depends… Whether unicode has a bifurcation between things that are described as a sequence or not?


???: There is a draft for UTS-18 to eliminate the harder distinction that currently exists in unicode. It has not been approved yet.


MLS: ???


YK: I think WH or someone else said that unicode doesn’t commit to any characters property will not become a sequence property?


MLS: They’re currently different in the spec.


YK: I will happily take this offline. The answer to the original question of whether or not I care is whether or not there’s actually a different in the unicode spec.


MLS: There currently is.


YK: Is there a commitment from Unicode that the same property would not change from sequence to non-sequence?


WH: You mean a character?


YK: (indecipherable)


MLS: What you’re calling a character property is called a ??? in unicode. What you’re calling sequences is what they’re proposing to call ???.


YK: And those names are in unicode a different thing and they are required to be a sequence property forever, and character properties are required to be character properties forever?


MLS: Properties are properties on characters.  Every character has multiple properties on it in the unicode character table.


YK: ???


MLS: We can handle them like we handle current properties for regular expressions.


YK: I'll take this offline.


MLS: The properties of sequences is as it’s described in Unicode.


API: Is the name stable between one set and another? Can a name that’s defined to be a sequence property ever be flipped to the other thing?


MLS: Unicode is not doing that and when Mathias asked if they could add a sequence suffix, the unicode committee specifically denied that.


YK: On what grounds? On the grounds that there is no point in doing that because it can’t ever change?


MLS: It has more to do with backward compatibility of use of those names. There are a ton of sequence properties that don’t have sequence in the names. There are a few that do, typically emoji names.


SFC: I'm pretty sure they don't change from one type to the other type but ill follow up with mark davis.


AKI: And you’ll update the issues queue?


SFC: Yes.


WH: Since the question was asked which proposals people would be okay with, of the three variants I would be okay with two of them: 1) the straight `\p`, or 2) if we have `\q`, then `\q` should be usable with both character and sequence properties whereas `\p` would be limited to character properties.


AKI: And you’ve had the opportunity to discuss this on the issues queue?


MLS: Yes.


API: I just felt the important feedback is just which things people feel that the champions couldn’t move forward with.


YK: It’s not actually as weird as it sounds because even though it is true that \q becomes the new \p, for the people who really care about the pedanticness of how many unicode code points are consumed, those people could just use \p. I agree with WH that that seems fine with me also.


SFC: We can’t reach a conclusion on this without MB here.


AKI: Yeah, I had assumed as much, I was not planning on talking about conclusions. That will have to wait until the next meeting.


#### Conclusion/Resolution
- Will be revisited next meeting.
