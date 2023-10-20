# September 24, 2020 Meeting Notes

-----

**In-person attendees:**

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Jordan Harband       | JHD            | Invited Expert     |
| Bradford C. Smith    | BSH            | Google             |
| Jason Orendorff      | JTO            | Mozilla            |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Chengzhong Wu        | CZW            | Alibaba            |
| SongYang Pu          | SYP            | Alibaba            |
| Mattijs Hoitink      | MHK            | Apple Inc.         |
| Michael Saboff       | MLS            | Apple Inc.         |
| Dave Poole           | DMP            | Apple Inc.         |
| Chip Morningstar     | CM             | Agoric             |
| Mark Miller          | MM             | Agoric             |
| Kris Kowal           | KKL            | Agoric             |
| Istvan Sebestyen     | IS             | Ecma International |
| Devin Rousso         | DRO            | Apple              |
| Jack Works           | JWK            | Sujitech           |
| Robin Ricard         | RRD            | Bloomberg          |
| Philip Chimento      | PFC            | Igalia             |
| Yulia Startsev       | YSV            | Mozilla            |
| Pieter Ouwerkerk     | POK            | RunKit             |
| Shu-yu Guo           | SYG            | Google             |
| Ross Kirsling        | RKG            | Sony               |

## Revisit Ergonomic Brand Checks for Private Fields

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-private-fields-in-in)
- [issue](https://github.com/tc39/proposal-private-fields-in-in/issues/7)

JHD: The request I made last time was, can this reach Stage 3? I wanted JHX to have time to respond.

JHX: Thank you, JHD. Thanks everyone for the patience. Last meeting, I was the only one who thought this was not OK. Thank you everyone for giving me a chance to comment, especially JHD and DE. Before the meeting I created an issue in the repo that summarizes my reasons for blocking the proposal. Basically, there are 3 problems. (1) conflict with reification; (2) syntax issue; (3) process. I think I have read the notes and the most important part is… I got new information. I want to summarize them.

The first is about reification. In the last meeting, I said I was unclear on the future of reification. In this meeting, I think that at least I figured out some opinions of other delegates about reification. One important point was that if there is reification, it shouldn’t use `#x` syntax. I understand that based on two reasons.

First, the potential confusion of `#x` and `this.#x` that may return a different thing. I think this is a valid reason. I agree. The only thing is that if this is very important, we should fix a similar problem on the public field! `this.x` and `x` give very different results. Of course this is not the issue of this proposal. I really hope that we can use the same quality standard everywhere.

Second, reification is another level. You will not need that in most cases, so if there is reification, it should not use different syntax. I think I agree that… I think… it seems there may still be delegates who want reification in the `#x` syntax. I'm not sure about it. I can probably pass this part. The first reason I think it could be seen as solved.

The second thing is about the syntax: it is likely to have reification. I have to say, it's still not clear what the future of reification is. But I'll skip that because I think the reification problem can be accepted by me. On the second point, the syntax, I still feel the syntax is a problem. I think JHD said that private fields don't use the symbol semantics intentionally. I can't say whether this is a good idea. I prefer symbol semantics. The point is, I think that the current syntax, overloading `in`, actually violates this goal, and increases the mismatch of the syntax and semantics. I understand that most delegates think it is not so harmful. It seems it will not cause bugs in practice. I get this. It's hard to say how harmful it is. I think in the last meeting, there were some suggestions that we should discuss whether we want…

BT: We're over our timebox. JHX, can you summarize?

JHX: I need some time to finish; 5 minutes?

BT: We’ll try to fit this in at the end; to be honest it’s extremely unlikely that we’ll have time. Could you provide 10 seconds of closing thoughts, JHD?

JHD: At this point, I think JHX is the only one who hasn't provided consensus for Stage 3. It would be great if you could type up your summary so that we can reach consensus in November, or so that we can spend the next two months trying to get to consensus.

### Conclusion

Proposal does not yet have consensus.

## Resizable and growable ArrayBuffers for Stage 2

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-resizablearraybuffer/)
- [slides](https://docs.google.com/presentation/d/1MnLKwT5vgWX8x3jZ0i-z92Twm6EEaEEbhG9VwfONfXU/edit?usp=sharing)
- [spec](https://tc39.es/proposal-resizablearraybuffer)

SYG: (presents slides)

JHD: On slide "Auto-length TypedArrays", when you said that when any part of the array goes out of bounds, then the whole array is out of bounds (?). So If i don't interact with a typed array if the ??? goes out of bounds, does the whole array goes out of bounds.

SYG: The way I wrote the spec, then that case is fine. If you never observed it going out of bounds, then it's ok.

JHD: So it only gets locked in if you observe it going out of bounds? Great.

MM: "Can throw OOM" -- What actually gets thrown?

SYG: In my spec draft, it is a RangeError.

MM: RangeError sounds good. My other question is, how upwards compatible is RSB from GSAB and the others? Rather than adding two new types, I'm wondering if we can just upgrade the spec of the types we have, such that ArrayBuffer is growable according to the spec, and same with SharedArrayBuffer.

SYG: Indeed, that was the first draft internally. Users liked it but the security team had to push back. Anything that requires us to audit existing array buffers and array paths, not just in JS engine but also in the web browser itself uses ArrayBuffers in its code. I wouldn't say it is a non starter but it has pretty big repercussions.

MM: So the issue is not the use of these by JavaScript code, but rather the use of fixed-length ones by things in the host?

SYG: Also JS code. It is a concern for correctness of implementation because there have been detached bugs and basically have generated a bunch of vulnerabilities for Chrome and firefox. If we were to generalize those paths have become battle-hardened over time. If we were to generalize those paths to support growable there's a risk of a long tail of security bugs.

MM: So if we're talking just about JavaScript interacting with these abstractions, I don't understand. Because you still need to implement the new thing. You still have just as much risk of it being abused.

SYG: Correct. If we implement it badly we will have vulns for these new types and these new types only. But if we upgrade the existing paths, we will have vulnerabilities not only of the new types, but also of the existing types.

MM: You're assuming the users of the broken abstraction are the victims. I was thinking that you were worried about cases where the users of the broken abstraction were the attackers. If you introduce a broken abstraction that can be used for attack that's no less vulnerable than changing the old abstraction so that it's vulnerable to the attack. The attackers will go where the attack is possible.

SYG: I don't quite understand. For example, GoogleMaps uses typed arrays. If we screw this up due to implementation bugs, we break Google Maps. But if we implement a new type, Google Maps will not be affected, because they will not migrate to resizable array buffers.

MM: In that scenario GMaps are the victim not the attacker. So for differentiating the victim your claim is valid. I question whether that's really the right security question.

SYG: I welcome that point of view. As a PL purist, I agree. As the person who will have to find engineers willing to implement this, I think the current plan has a much more viable implementation strategy, namely that we don't have to re-audit all the paths. In Gecko or Blink, web audio uses buffers.

MM: That's a case where there's a host using the buffer as well. That's why when you said “pure JS also argues for separating” that surprised me.

Once you involve hosts as potential victims, sharing the same abstraction with a potential attacker in JavaScript, then the distinction makes sense.

DE: I can understand this concern about web audio more easily than the Google Maps concern. I want to suggest a parallel concern exists in JavaScript. Previously, if you have an ArrayBuffer, you don't have the ability to change its length. But with RAB, now you have that capability. So that can have sort of downstream effects on other users. I was personally surprised about the initial version of this and making existing array buffers resizable. I'm pleased to see this restriction to be only resizable types. Tying down—not removing existing invariants about existing types. I am in support of the design that SYG has made.

MM: Having gone through this I'm in favor of it too. The WebAudio where there's a host victim and a JS attacker does make clear the need.

WH: I don't understand SYG's answer to MM's concern. I don't understand the Google Maps example. What would be attacking Google Maps? Whether we have one type or two I'm not sure really makes much of a difference here. If you have two types someone could try to sneak in a resizable buffer where the client was expecting a non-resizable buffer. If you have a single class with a slot that says whether it's resizable or not, you get a similar situation. So I don't see what the issue is.

SYG: For the Google Maps example since it was not clearly understood and I think we have resolved that issue I'll just retract that issue and hope we can move on.

For the 1 versus 2 types thing, given that there is a lot of implementer and software feedback that we want two types, and given DE's comment about invariants, I think signs fairly clearly point to having 2 types is the better choice here.

WH: Can you motivate that? I don't see much difference between two types and one type with a slot.

SYG: It makes a real difference - I speak mainly as an implementer here - it's not a centralized place in a JS engine you deal with typed arrays. There are IC paths, different tiers of the optimizing compiler, that deal with typed arrays in different ways. Currently the invariant is that the length cannot change. You betcha the IC paths and the JIT paths take advantage of that invariant. (IC = inline cache, the implementation technique). If we were to relax that for existing buffers, we would need to audit each of those paths. Those paths are sensitive because they have been used frequently as attack vectors.

WH: I was not suggesting we make all existing buffers resizable. I think you misunderstood my question.

SYG: What is the one-type hypothetical?

WH: Just like you have objects which are frozen or not, you could have buffers which are by default frozen-length but you could also request a buffer which is resizable.

SYG: So like an overload of the constructor that the engine treats differently but from the language looks the same?

WH: Yes

SYG: If there were a clear predicate, I don't have too strong feelings one way or the other.

SFC: This question of should we have one type with a slot that determines its behavior etc. has come up over and over again in Temporal, and the approach we’ve taken is multiple types, for discoverability, education, it works better with type systems like TypeScript, vs. methods that throw in odd situations. I think it makes sense to have separate types with separate behaviors here too.

SYG: I do find that compelling. You would need a sophisticated system if all array buffers were resizable for example out of bounds accesses.

JWK: I think the maximum size does not make sense to me. Users will set it to a very big number so he won’t get [an out of memory error], this make the limit useless.

For example I don't know what the maximum size it's possible to be, so I set it to very large and make this option useless. You can always treat this as developers want to set it to infinity. The limit doesn't make sense.

SYG: Why is this a new problem from what is the status quo? Today at the risk of wasting memory you can allocate a very large typed array and just not use all of it.

JWK: Yes, but it's already allocated. The problem is, in the slides, it says you need a maximum size in the constructor, but you don't have to allocate that much memory at the constructor time.

SYG: You will figure one out. I mean I think most users of ABs which are such a low-level API, those kind of programs that deal with buffers that are sized will have some notion of what is the max size that we want. If you do not know ahead of time you can figure one out that is maybe reasonable. It's not a thing that you need to get exactly right. I don't quite understand the concern. suppose the people who are using this are going to be coming from C and C++ that already deal with buffers in this way. If you are going to reserve a buffer you usually have a notion of what is the biggest buffer we want to use.

JWK: That answers my question, thanks.

WH: I had a similar question: Maximum size and Hyrum's Law. I asked the same question at an earlier meeting and was wondering if you now had a better response. I looked at the spec; the max size limit you can specify is 2⁵³-1. If you put something bigger, it will throw. But this creates problems with Hyrum's Law. Ideally, users will carefully compute the maximum size they will need and ask for exactly that, but according to Hyrum's Law, they won't. They will just ask for something that’s ridiculously big, and if it works in the implementation they’re using, they’ll ship that. Other implementations that use a different virtualization strategy will be stuck.

SYG: That is a real worry. I agree there.

WH: I see this settling one of two ways. Either every implementation will allow 2⁵³-1 and go on their merry way, or implementations with much lower limits will have compatibility issues, or we will have to provide guidance for what people should put in that number. Expecting web authors to get this right is too optimistic.

SYG: I share the concern. I have three sub-answers to that. (1) as pointed out by MLS, this is the problem of, let me reserve a very large number, has been seen in WASM memory. I'm hoping to engage with the WASM and Chrome team to see how they deal with it. If it's a problem that exists for them today, then we can learn something there.

MLS: I think I made that comment at the last meeting. Typically WASM allocates way more than they need, they just allocate the full 32-bit address space. At some point, you have a bunch of WASM web pages and you run out of memory on the system. You don't have enough memory to back it up on small systems.

SYG: There needs to be some web platform guidance about reserving a huge amount of memory up front. I hope that all the engines that ship both WASM and array buffers will work together to figure out what is sensible and interop here.

GCL: WASM does not require a max.

SYG: Yes, but it accepts a max, which is the problem.

GCL: I'm not saying we should not require max. I'm just saying that the thing that is considered good in WebAssembly is to start small and not assume a maximum. So the patterns might not translate over to us very well.

SYG: I see.

DE: My understanding of where we are today is that there was a lot of use of small ABs which had to be optimized in a way which wouldn't - where you wouldn't be able to apply the same optimizations as large array buffers, so that's why there was this split [between WebAssembly.Memory and other ArrayBuffers].

I'm not sure that will come up again with resizable buffers. Maybe once they're marked as resizable they won't need to be optimized as small buffers.

SYG: I do feel that as practically speaking if it is small, you shouldn't use a resizable buffer, you should use a small buffer. To go back to WH's question: (2) if you reserve a very large virtual memory range via the max length parameter and you exhaust your own virtual memory space, it seems like a "doctor: if it hurts don't do that" case, and if you get that error on your page, they shouldn't ship their product.

WH: If they only test on popular browsers which are permissive, there might be issues with other browsers or less popular implementations where it only fails on those platforms.

SYG: That brings me to (3), I have left a lot of latitude for implementations to throw here, if they can't reserve the new page. I can imagine a system that throws for what feels like unreasonable max sizes. I suppose memory issues are in general not interop but I hope to work with Safari in particular to come up with something that's reasonable as a heuristic. I hope that is sufficient for now. I definitely agree that it is a problem. We need to figure out without letting people exhaust their own virtual memory.

WH: I'd like to either see guidance on this when we reach Stage 3, or assume all implementations will accept 2⁵³-1 and deal with it.

SYG: If we can come up with something, then I would like to have a guidance note for implementations like we do in the memory model.

PHE: I like the direction this is headed in. PST and I would be happy to look at this from the perspective of more constrained devices. One question: I may have brought it up but I don't see it addressed here - the typed array, sub array methodThe TypedArray subarray method, its (?) kind of conflicts with the elegant solution you have where the (?) tracks the underlying buffer. I wonder if you had thoughts on how to solve that, or if you just declare it not a problem - you just declare you wouldn't be able to create a tracked array which (?)

SYG: Currently, all methods on both ArrayBuffers and typed arrays, if they return a new ArrayBuffer or typed array, that thing is backed by a fixed-length buffer. subArray - what happens in subArray?

PHE: It would fail in that case.

SYG: I'm trying to remember what I wrote. My intention is not for anything to return an auto-tracking typed array except by explicitly constructing it. Since that's an invariant the method happens to have now I would rather not relax it. Maybe there's a new case that throws. If there's demand for having an auto-length typed array, maybe we can add that. Pending data the plan is to not support it.

JTO: I wonder if typed array access from JavaScript is meant to be as fast as typed array access to arrays backed by ordinary array buffers. What's the mental model? You have an implementation model to check at the last minute that the array is correctly allocated.

SYG: My mental model there is that everywhere we have a typed array now you have to - outside the optimizing tier JIT paths where you have elided the detached check, you have to do that detached check. The detach check for resizable buffers is slower because you have to do the bounds check. That's my mental model: it will be slower in this case because it has to calculate this out-of-bounds. It's not going to be as fast until you hit the optimizing case. It won't hit this in the optimizing tier because JITs have an invalidation mechanism attached to the assumptions needed by the JIT code itself.

JTO: Is this an anticipated common use case, or is it mostly for JS code to set up memory and then pass it to some host API that's going to do some magic with memory?

SYG: I do think having JS dereferencing the typed arrays will be a common use case. I mean bounds checks can be - there's bit hacks for getting down the branches or whatever. I imagine these to be slower but not in the sense that - I don't know, like 100 cycles slower?

JTO: You don't anticipate that this would affect the- … even in the IC-driven, non-optimizing tier, you don't expect this to affect the performance of existing tiers not backed by resizable array buffers?

SYG: Because these are new types and the ones that are backed by resizable buffers you would give them a different shape and a different hidden class . That doesn't mean there won’t be a slowdown.

Where there's a slowdown is, if you have a program that mixes use of TAs that are backed by both fixed-size and resizable buffers in the same callsite, that will become polymorphic where currently they are monomorphic. That's a worry we will have to benchmark.

JTO: Thanks for making that explicit.

SYG: I would like to ask for Stage 2 and reviewers. I'm glad the Moddable folks have volunteered. I would also really like another browser vendor as a reviewer since this would because security folks worried. But first, do I have Stage 2?

WH: I support this for stage 2.

MM: +1, and I'd recommend you have Natalie from P0 take a look at this.

SYG: I'd love to have her take a look. Since she's Google-internal I consider her not a reviewer.

JTO: I'll ask our team to look into it.

KM: I can review if you want another browser person.

### Conclusion

Stage 2. Reviewer companies:

- Moddable
- Firefox
- Apple

## Builtin Modules for Stage 2

Presenter: Michael Saboff (MLS)

- [proposal](https://github.com/tc39/proposal-built-in-modules)
- [spec](http://tc39.es/proposal-built-in-modules/)
- [slides](https://github.com/tc39/proposal-built-in-modules/blob/master/slides/BuiltInModules-For-Stage2-TC39-Sept-2020.pdf)

MLS: (presents slides)

WH: You mentioned the `BuiltInModule` (BIM) API is for built-ins only. But in the shim example, you had someone exporting a user-defined implementation of `"js:Complex"` if it was missing from that implementation. So how does `BuiltInModule` know if the module is a real built-in module rather than a user module?

MLS: Actually you can add any user-defined module you want with a prefix you select and it would work. `BuiltInModule` can store user modules as built-in ones. I can export `Apple:Foo` and into the system so it can accept `Apple:Foo`, no issues. So yes, you're right, but we think this is a way that developers can provide their own modules at start-up.

GCL: To me, this proposal seems strictly worse than just introducing a new `ES` global object that we put built-ins under. I think BIMs are cool, and designing JS from scratch, of course I'd use them, but given all the constraints we have to fulfil with our standard library and all the API we are adding here and all the weird behavior we are running into, we have already solved it using globals. I get the namespace is busy but it seems to be that adding a new object solves better than what is being proposed.

MLS: How does that deal with the memory implications?

GCL: Explain?

MLS: That you don't pay the cost of the library that you don't use.

GCL: Implementations already lazily load all sorts of values and stuff.

MLS: Implementations typically store only text. You are paying the price in text space, but worse than that you are going to incur some memory overhead before you lazily load features. So you're going to be paying a penalty for that.

GCL: Whatever magic happens to provide the API when you call the synchronous script API can also happen when you access a property on the global object.

MLS: I have some backup slides. [switches to backup slides: Automatic Module Loading] SYG asked offline, why not just use globals? Developers are used to that. BIMs add extra complexity for devs. Conceptually, we could provide a loadSelf function that's internal, and for every built-in module, you would do a defineProperty. As soon as you go to access that object, it would load that module and add it to the namespace. You couldn't do this strictly in JS because you want typeof or instanceof Complex to be an object, not a function or anything like that. You don't want that type over instance (?) All the benefits of lazily loading are lost. So, the advantages of this is it gives module availability but gives a better programming model. It preserves the intent of BIMs, but you access them via the global object. They can be shimmed and polyfilled the way you are doing today. IT promotes a community built today. That is, when this is available, a developer can decide if they want to access the thing as a global property, or do they want to use BIMs? It would provide a standards means for built-in features. Most engines do lazy-loading except XS, and there's wonky stuff to make it happen. The other thing is that legacy feature can actually transtiion to be. (?) The disadvantages of auto-loading is that there are other JS hosts that couldn't care less about more things added to the global object. They're already in a module world. If we add this do we make it normal for browsers - and I don’t have answers for this questions. It doesnt solve pressure for namespace issues. It could also confuse developers for how do I get to Temporal or to Complex? That's a disadvantage.

GCL: I don't feel like anything that was just said implied that BIMs are better.

WH: You're showing slides that aren't in the presentation on the agenda; can you provide a URL?

MLS: The latest slides were just uploaded.

KG: Reload the agenda to get the latest slides. The link changed an hour ago.

KG: I want to get more into the memory issue. I don't understand exactly where the benefit for memory in implementations come from. Is there a reason modules are significantly different here?

MLS: In WebKit, we link in all the code. If something is lazilly added to the global object… The reason we are doing this is because. The global object takes a long time to initialize.

MLS: Primarily, our lazy loading is due to startup time for the global object. Which means that we’re paying the price for part of the memory cost of the objects. When you activate an object--when it’s used--you pay more memory cost to create the object, but you pay some anyway.

KG: The thing I had in the queue was, there are APIs in the web platform that aren't synchronously available. You have to await a Promise. It seems that would solve the memory issue if a big complicated library is async available and you wait for the library to resolve. The only cost you are paying is for the library to load up at the start up.

MLS: The existing import function fits that, right?

KG: Yes, it does, it’s just that--I am trying to get at, what the advantages are over the global. Maybe using it in a way that we don’t currently use it, by putting APIs behind asynchronous calls. We've already solved shimming problems with the global object: shimming, virtualization, etc. My company virtualizes tons of stuff so I care about that stuff. I would rather not virtualize additional APIs. I don't see the advantage of introducing BIMs over using the global.

MLS: We already have modules we can bring in from the network. You don't see an advantage of those?

KG: The advantage of those is that it allows users to organize their code in a particular way. But engines don’t have the constraints as users-- Engines can organize their code behind the scenes in ways that are not available to users.

MLS: But users they are declaring their need for a particular module. they are going to load their module with an existing need they have.

KG: Sure, yes

MLS: And, why don't we want to extend that to the local implementation?

KG: Because you have to introduce a whole bunch of APIs.

MLS: I am talking about introducing 5 APIs.

KG: They aren't trivial APIs. I’m not saying it’s a huge problem to add them; I just don’t see any advantage. I understand the memory issue with adding new synchronous complicated APIs to the global, just making the asynchronous. And then we don’t make everyone learn to virtualize things in a new way.

BFS: In order to shim things, it must be done eagerly and synchronously. One of the concerns we brought up was loading and parsing source text. Somewhat on the tail end of KG, in order to avoid having shims always load source text, or any built-in that may not be present, we would have to wrap it in a Promise somehow. So, that means anything of sufficient size… the only way to avoid eagerly loading source text would be to have the promise be wrapped in an API, does not have to be a promise, could be something else. So it seems, if the expectation that BIMs are expensive to load, size, computation, etc., how are we expected to eagerly shim these without incurring that cost?

MLS: The synchronous nature of shimming was a requirement for Jordan’s Stage 2 blocker back in Berlin, that it needed to be synchronous, for the classic scripts--they can use Promises, but you need to be able to do your shimming before the rest of the application runs. Unlike a network module, the module is part of the implementation. It may be on the filesystem or some other storage. It could be already compiled as part of a native dynamic library. So I don’t know if we could if we have to think that there’s always going to be a notable time access built in time because it can be optimized by implementation beyond source text.

BFS: Are we talking about users shimming it ? I can believe that, for host implementations, they always have it available ambiently, somehow. For shimming, they (???)

MLS: If, shim or polyfill, if that comes across the network, you have the latency coming across the network. That no different whether its a built in module or global. There is no benefit in BIMs of something that needs to be shimmed. It shouldn't be any longer than it is now. Does that answer the question?

BFS: I think it does . it seems it is an accepted downside.

GCL: If these builtins must be available synchronously, where does the load async benefit come from?

MLS: You do an async import of a BIM. That Promise… I expect the implementation would return the promise already resolved. I think thats more of allowing a programming model of someone wants to use than a performance issue. If someone wants to use modules whether BIM or network, I mean sure.

GCL: So if you're an implementation that wants to take advantage of loading these async, how do you do that while also providing them sync? You said an implementation can load these modules async, but at the same time, the modules must be available synchrnously for scripts.

MLS: If I had an API that added two numbers and provided a sync version and async version, they take the same time. One returns a value one returns a promise. So, loading the BIM async, it's going to be resolved and loaded, and you get back a Promise. It's a developers choice whether they want to optimize over the network or module. There is no need to restrict async vs sync.

GCL: So there's no benefit on the implementation on the engine side of the async option?

MLS: Yes.

JWK: This shim part of BIM makes lazy-load not possible. It shimmed part of the module, and it needs to import the module now to check if it needs to be partially shimmed.

MLS: Yes, this is the first access of the module, which is going to do the “lazy load”. It’ll be fully available after this code runs, whether you’re polyfilling the whole thing or shimming part of it.

JWK: But what if the partially shimmed module is not accessed in app code? And it's loaded unnecessarily?

MLS: On the lazy load code slide, if the application already accessed the module, then the property would’ve been changed--if you noticed the load self changes the property in this case it is going to change complex. The getter will never get fired because they whole property has changed. Does that make sense?

MM: I didn't hear; can you repeat?

MLS: JWK was basically asking, do you polyfill the code first, or do you access it? If you polyfill, when you go to lazy load what do you get. Let's suppose you polyfill lazy load, the property on complex is no longer going to be the property you defined. Its going to be the actual thing you polyfilled.

JWK: I'm not mentioning about the global variable. My concern is about, what if the partial polyfill is loaded, but it's not actually used anywhere else? Only the polyfill is importing the module to see if it needs to be polyfilled. It's not used anywhere else, but the import cost is raised.

MLS: Yea you pay the cost but the app has to have the disciple to only polyfill the things its going to use. If you don’t use this feature on the web page of application and you never use the module, in that case you polyfilled and brought it in later, that's just the way the application is written.

SYG: We’ve been talking a lot about the technical parts about polyfilling, sync/async, etc. From Chrome's position, and while I roughly agree with the position, I did verify this position up my chain, so don't shoot the messenger… from Chrome's position, let's separate the semantics of the BIMs and, once we have BIMs, are we going to use it for the ecosystem.
To me, that has two sub-questions: Are we going to use this for the web at large (outside of TC39), things that users don’t necessarily know to not be part of the core language--streams, fetch, data blobs, etc. And (2), are we going to use this for the JS standard library in TC39 itself? This is the ecosystem divergence problem. We currently have globals, people disagree on how well they work, but Chrome's position is that they work fine. So given that, if we suddenly have BIMs, users would have to understand, is this thing a BIM or is it a global, and how do I get at it? The thinking from the Chrome web platform leadership is that this is harmful. We should not diverge from standardized platform features to be available in two different ways. Chrome would not use BIM currently for new web APIs standardized outside of TC39. They will continue to use globals. And (2), this is a weaker no, but should we use BIMs in TC39 itself? Chrome's position is a weaker no. I could reopen this question, but the thinking is that the same problem applies to JS features.
From the web platform’s point of view, there is not a clear cut line that is beneficial to web devs between things that were standardardized. For that reason, it is very unlikely that if we were to get BIMs, that Chrome would ship the ability to import them as BIMs. So if Temporal were to be spec'd as a BIM and shipped under js:Temporal, the current thinking is that that wouldn't be made available. Personally speaking I think there is tremendous value in having a built in module machinery for other ecosystems that are not the web. I understand that it is not current champions group desires, so its not a value add for them. But personally speaking, I think it's worth discussing the machinery separately from the ecosystem question. But on the ecosystem question, I think we are unlikely to ship new features as BIMs. If there were a sync capability that made it look like globals, the thinking is that we would ship those. The new BIM would only be available only via global like mechanism if available.

MLS: How do you see that TC39 would spec BIMs if one of the major browsers would not deploy it? Is it a normative optional feature that would be useful for TC53 or NodeJS? How do we spec this?

SYG: I think that the BIM, for the sake of argument, suppose that we agree to ship BIM global that you have proposed here. Suppose it was this thing like you have on the slide, where you have a magic globalThis.Temporal. We would ship that, but you can't get importjs:temporal. I am not sure(?)

The contents of Temporal would need to be normative, but the way it were made available to users were flexible, globals or BIMs, the module part would have to be the normative optional. But thats a tech spec thing. I don't mean to imply in this position that, for example, the entire contents of js:Temporal would be normative-optional. I think that would be a bad outcome.

JTO: Mozilla's position is similar. The fact that there's little interest from web standards bodies in migrating from globals to BIMs means that it would be harmful for JS standards itself to do that. It would result in splitting the ecosystem. I want to emphasize that I am not opposed to the building blocks. Having a BIM system that could unify how BIMs work across other environments would be valuable even if the JS standard library doesn't go that route.

MLS: My comment that I made is that I don't see that as providing one 1JS - which I think is the unspoken motto of TC39 - one JS. It is not a browser language or whatever. It is language. And so, to me, it seems like if something's in the spec, and we want to support and implement it, it seems incongruous to me that we would spec a feature that we never intend to use in the ecosystem even if we liked the feature. Why spec something we think is cool but we are not gonna use it?

JTO: Mozilla would not be the target audience for that feature. We have no objection to the APIs being added and used by other hosts.

MLS: The other comment is that Apple that participates in web standards would like to implement those [web standards] as modules, not just in TC39.

JWK: The requirements of “the shim code must be run before the main application” requires a big change in the module execution order. That requires some code be more prior to the other codes. I think this is not look good to me.

MLS: This is a requirement on classic scripts. Classic scripts must do shimming before the script runs. That is a req for classic scripts, and JHD can provide details there.

JWK: I think it might be possible to work around this problem by providing a new syntax-level block to indicate it is shimming some module, but don't execute the block until the module is first being accessed.

MLS: I'm not sure how you'd spec that. It seems like you'd have a task you queue up that's dependent on the module. And there you would do the shimming on the first use.

BFS: Polyfilling globals must run before your main app code. There is some complex nuances to that. We have made it much more complicated to use top level await. Top-level await causes interesting behaviors in sibling modules. There's a double-wrapping thing. It's not like this requirement doesn't exist already, so I don't know if we need to do anything about it, because you already have to deal with it.

MLS: Yeah. CJS I think you need to do it in the engine.

WH: People were asking about how you lazily shim modules. Would a closure work? What do you mean by “some shims would need engine support”?

MLS: You could probably do it all in JS, but if someone needs to do it in the engine itself, we may not export enough APIs.

In the example on the slide, this is conceptually what you would do. But you need to do more to make the property defined here. It is JS 80% eq of what you would do. The engine would have to know the internal object.

WH: The thing I was thinking of was, you could have a `BuiltInModule` export API that, instead of exporting a module directly, takes a function that it would call to define the module the first time someone imported it.

MLS: okay so, on import kind of thing?

WH: Yeah.

MLS: You could have an API that takes a closure, agreed.

DE: I like the idea of an API that takes a closure for lazy polyfilling. There's a separate thing of async polyfilling, I know it contradicts some other constraints. You could fetch the polyfill if the module is absent or determined that there is something wrong with the BIM. So, I don't know if everyone here has read the previous import maps proposal that had a fallback list. It could be used to polyfill BIMs by picking the fallback only if the BIM isn't present. That API is rather limited; an imperative API here could provide more flexibility, but a key imperative is taking advantage of async modules. When we have dynamic imports, it gives spaces for the system to async fetches to get the module contents. So this could be great to lower the size of bundles in pages, which could really help application performance. I'd proposed an API for this in an issue. I understand the consequence is that BIM.import would sometimes return a promise instead of a module. This is a real technical benefit that would be impractical to get from promises. Temporal’s polyfill is very big. But we’re not going to change Temporal’s API to start with `Temporal.get()`.

MLS: You made that as a follow-on or separate proposal, right?

DE: I am very much in support of this proposal as is.

MLS: For async shimming, you were thinking a separate proposal?

DE: I think it could be part of this or separate proposal. People were talking about the benefit. I feel like this benefit, of reducing the polyfill loading overhead from JS implementations in general that already have the BIM, is a big technical benefit to consider. But do you think it layers on top of the base that you have in a clear way. I can understand the problem of ecosystem split raised by Chrome and Mozilla but I don't understand the alternative raise of specifying something in TC39 for BIM that is not for the web. I think hosts already have the machinery they need to do this. In TC39, we'd be specifying something that's already there in code and common. I don't want us to get into - maybe we can make a task group, I would really like us to be unified.

JWK: Check out #67 on the repo.

MLS: Stage 2?

JTO: Mozilla will block.

SYG: Since 1JS is a priority, the suggestion I had made is not coherent. So it's tantamount to a block. Since this proposal doesn't give anything that's exposed by js:, if the champion group doesnt see value in this dead machinery, then there is no value in having this machinery. We need to go into this with eyes wide open: at the point down the road where there is an attempt to standardize that Temporal is made available as a BIM, Google will block then.

MLS: So what does the rest of the committee think about adding this as a mechanism knowing that multiple implementations won't use it?

DE: I think we are here to make a standard we all agree on somehow.

AKI: I feel not positive about it.

WH: What is TC53’s position on this? Would they use it?

AKI: We are at time. Let's come back and discuss this more.

MLS: Google and Mozilla are on the record for blocking this.

### Conclusion

The proposal will not advance.

## Error Cause for Stage 1

Presenter: Chengzhong Wu (CZW)

- [proposal](https://github.com/legendecas/proposal-error-cause)
- [slides](https://docs.google.com/presentation/d/1EVhRzCBUGynFnQoTdOCifoTJRWzhPMw8reIC5gtjGBk/edit?usp=sharing)

CZW: (presents slides)

CZW: Asking for stage 1.

JHD: (in queue: why is this better than expandos, or an AggregateError, where the "errors" can be any values explaining the cause? ) Why is this better than one of a few alternatives, like expandos properties, or an Aggregate Error or a UserLand library? You also told us devtools could handle it. At the moment your example spec text allows it to be any value.

CZW: any value can be thrown so we are not limiting, so we can have any caught error as the cause even though js values don’t have much info, this is different from the stack. The cause is why this error happened so we can augment. For users if this array is thrown from deep internal, this might help to ?? these exceptions. The diagnosis will be more pleasant and easy to conduct. And why this should be in the spec, this way users can confidently rely on the error (?) If this is in the spec, the user can safely just construct this property with this argument. We can attach to the error instance and we can analyze it for you and this argument and all is done here is no additional contract between the user and the devtools.

JHD: To make sure I understood correctly, you're saying that even if this was just a convention, by putting it in the language, that encourages interop between languages and tools?

CZW: Yes.

JHD: OK, Thank you.

GCN: While there are lots of ways to achieve that behavior, this enables debug tooling to reliably use this info. When it is expressly implied by the language, debug tooling uses it to provide a better experience. If you just put a bunch of related errors into an AggregateError instance, the debugger has no way of knowing, just because a group of errors are in an aggregateError, that they are related. These are two different things, and this is an important distinction. There is no implication that two errors (an error and AggregateError) are related, a chain, a causality relation.

JHD: So you're saying it would require a convention to understand the causal relationship with the first AggregateError?

GCN: Correct.

BFS: I want to take it further than GCN, with the notion of breadth vs depth. With aggregate error, we get depth. This property gives us depth to that tree structure. This is really handy and gives us more information. In particular, an example would be, if there are two sets of errors that are cascading to two levels deep, your convention has to take into account that there are two branches to follow in the AggregateError.

KG: I wanted to express general support for this. I have used the identical feature in Java and it is there. It’s great with tooling and IDEs in the case of Java. I do want to make sure we get all the devtools teams on board, since I see this being most useful for devtools. I don't see any reason they wouldn't be, and it doesn't have to happen before Stage 1.

SYG: There is an incompat risk with Firefox as the Error constructor accepts multiple elements. I'd like to hear a Firefox delegate's take on that issue. I also have general support for this. I'll check with the Chrome devtools team and report back. A direct question for KG: What do you mean by getting the devtools team on board? There would be a special rendering of the `cause` property?

KG: Yes, I would hope that when you get an error in console (printed or thrown). I would hope that the devtools teams would make it be a series of stack traces, like it is in other languages.

SYG: I will ask them and report back to a future meeting.

YSV: We reviewed it. I did see this compatibility issue but we didn't talk about it. I don’t think there would be an issue changing it as the feature is already not standard and probably not heavily used but something we should check. Additionally I can speak to our devtools team to cover KG's concern. That should also be no problem.

JRL: (via queue message) Would love this for AMP. We currently mutate the error to add more message data, and occasionally set a .error property pointing to the original error. Standardization would be great.

CZW: Can this advance to Stage 1?

(silence)

### Conclusion/Resolution

Stage 1

## Double-Ended Iterator and Destructuring for Stage 1

Presenter: John Hax (JHX)

- [proposal](https://github.com/hax/proposal-deiter)
- [slides](https://johnhax.net/2020/tc39-sept-deiter/slide#0)

JHX: (presents slides)

MM: (from queue: destructuring better motivated than double iterator) I like the ideas about the better destructuring and having rest in the middle. Doing it both for destructuring and for parameters feels right. Parameters might be more complicated because of all the other semantics on parameters, but at least for destructuring. However, I don’t find that desire worth it for double iterators. I understand the scaling point but in my experience, the destructuring patterns and parameter patterns are not used at the scale where scaling is relevant. It is not worth adding a second iteration and taking it up apart in the iterator match I think it's a fine way to implement it that doesn't imply any iterator change.

JHX: There are two reasons. One is the scale issue, and the other is how you can double write the iterator in userland.

MM: What do you think about the destructuring enhancements themselves without double ended iterators?

JWK: JHX has presented previously, if we have no double iterator, then we must consume all the items in order to get the last few, which might not be desired, or have performance issues.

MM: Thank you.

KM: I agree it’s probably not a good idea, a footgun to (not??) have a double iterator.

JWK: The performance is ???

KM: If you have any kind of custom iterator, you'd have to run the whole thing. There is no way to optimise other than looping the whole thing. You can probably optimize but it would be complicated.

JWK: the common case is destructuring from array, Generally no-one would change Array.prototype.values,then the engine will optimize it.

KM: I am still uncomfortable with it because I am sure people will use it for other things on a custom data structure. Doesn’t seem like a stage 1 blocker for me.

SYG: One thing I didn’t see in this proposal, is how the two parts of the proposal mesh together. I agree with MM that the rest operator is more useful then the double ended iterator. (not a stage 1 blocker but should be addressed at stage 2)

KG: I support Stage 1. Definitely this is a problem that needs solving. Unsure about the current design presented here but I support Stage 1.

WH: I don’t understand the `string.replace` example because that passes exactly 3 parameters in the spec. I find the behavior of getting the last function argument for destructuring to be dangerous for compatibility, specifically for callbacks like this. It precludes adding extra parameters to the callback in the future. I'm ambivalent about its usefulness for parameter passing. I also think that double-ended iterators make this too complicated, especially considering what happens when something doesn't support the double-ended API.

JWK: You can design this api in a non-ergonomic way today so it won't introducing new problem.

WH: It does introduce new problems.

JHX: I tried to use the current mechanisms in JS already to achieve that. (???) I understand that the specific solution may be not very clear, but I think if I can advance to Stage 1, I'd like to update at the next meeting and have a long time to explain all the details.

RPR: Those looks like details that can be explored during stage 1

WH: I'm reluctant about the utility of some of this. That's all I will say.

JHX: Asking for stage 1.

(silence)

### Conclusion/Resolution

Stage 1

## Standardized Debug for Stage 1

Presenter: Gus Caplan (GCN)

- [proposal](https://github.com/devsnek/proposal-standardized-debug)
- [slides](https://docs.google.com/presentation/d/1TuLDmcjXuQmV3s6_thYCAlPaBLHO7ZM9pmCbS0oYcKw/edit#slide=id.p)

GCN: (presents slides)

JWK: It's possible to make debugger an expression that prints and returns the value.

GCN: Not entirely sure what you’re suggesting.

JWK: I can leave an issue on GitHub. (https://github.com/devsnek/proposal-standardized-debug/issues/3 )

GCN: OK.

DRO: This sounds like that this is just a wrapper around the console.log function? Is there anything more special about this proposal that can't be done with a console.log function?

JWK: `console` is not in the JS standard and requires adding it.

GCL: The motivation is, when I'm working in other languages such as Rust, I don't have to write another function to do this. I don't have to think about how I'm going to implement my debug facility, I just do it. The big motivation here is like provide the functionality without creating your own debugging toolset. It's not a complex behaviour, but I think it's somewhat essential.

BFS: I've presented on a similar topic in the past. One of the biggest things is that the values that are generated, don't have to be generated all the time. There are ways to detect that you're running in a debugger. There is a real world cost of generating values, if you look at prod logs of people logging often, there is a real CPU cost. Similarly, once you turn on debug logging, it just gets worse. Even having the values ready to put into debugger logging is costly. I would like to have something that tries to avoid these visible costs that we see today.

SYG: The use case you presented is logging. It seems that the default behaviour of the keyword would have to be logging to be useful. The default for debugger keyword currently is that it traps. It only works when the debugger is opened. How would you feel if it did that?

GCL: We don't have to use the debugger statement. I just put it in my slides as an example of something we could do. If implementations wanted to trap or log, they could. The point is that when augmenting it is useful.

SYG: It’s a little abstract for me, I agree that the implementation latitude was needed. But if the browser implementation caused a trap, that would not be useful for your use case.

GCL: We could discuss more in depth but I think ...???

SYG: What I'm asking is for this to be more use case driven. I don't understand if the use case is logging or debugging. We could figure this out later.

GCL: I would just say from my perspective that seems in the same realm. That would be if someone wanted to print they could ...???

SYG: I would not consider logging and debugging to be in the same realm.

GCL: In my use case I consider them being in the same realm of things.

WH: If you want to define some library functions, that's fine. I would be very skeptical of defining new syntax such as the `!` operator in the proposal. The bar to add a new function call syntax is high and I don’t see how this proposal would meet that.

GCL: The reason I bring syntax up is that implementations can take information about where in the source text it happens. I'd like to leave it open to further discussion, at least, because I think there are interesting pathways to explore there.

JHX: I want to mention how Kotlin uses extension methods to solve this issue. A full ??? method which can be used on any value, and use value. Also and in the also closurdo debug, console log, etc… it is just a more flexible way. We could also have a specific syntax to add other things, if we have ext-like mechanism.
I want to mention that a mechanism like syntax extensions, it could be used to test the idea.

GCL: Interesting, we should discuss it.

JRL: Can we have `debugger` in expression position?

GCL: We can allow that if we wish. It's a constraint of the grammar.

MM: I think that making debugger keyword be able to be used in expression position and having it throw you into the debugger with the value of the expression, a 'debugger expression' would be an expression just like yield expression could be an expression. Right now debugger can only be used at statement location. And it would naturally make the value visible from the debugging interaction. I realize that the debugging interaction is not something that TC39 specifies, but (???) This is something that they would plausibly do. The rest of this is not well motivated or interesting. I would drop the rest and keep the debugger expression.

GCN: I find the use of syntax would be more interesting, I would like to go forward in that path I can consider function as a backup.

WH: The syntax I was objecting to was things like adding a new `!` operator. If you want to play around with the `debugger` keyword and extend its syntax, I'm fine with that.

MM: Great!

JWK: (via queue) - https://github.com/devsnek/proposal-standardized-debug/issues/3

RBN: `debugger` being an expression in 2017-2018: We discussed the possibility of `debugger` being an expression back in 2017 or 18, when we were talking about throw expressions. At the time it seemed like an obvious "why wouldn't we do this?" If debugger was just debugger expression without any operands and there is almost no change to semantics it’s just syntax. I would consider using debugger.meta properties. There's a use case for debugger meta-properties that I was thinking about. VS Code shipped a new feature in their debugger for Node, that lets you evaluate an exprsesion in the debugger to give you information about the expression you have in your watch window. (??) I could see a possible use case of debugger. extensions something like debugger.typeProxy and watch it in another window. Or extensions that say I should step over this whenever I encounter it, for example. There's a number of interesting cases I could see that combine debugger metaproperties and decorators. This seems interesting for more use cases, and the idea is good but the syntax should be discussed.

DRO: Some of the things that were mentioned already exist on the console "spec". Consider taking the console spec and making it part of JavaScript?

GCL: If the proposal were to go in the direction of moving console into the spec I would withdraw it. I don't have any intention to poke that.

GCL: Does anyone object to Stage 1?

(silence)

### Conclusion/Resolution

- Stage 1 reached.

## Unused Function Parameters for Stage 1

Presenter: Gus Caplan (GCL)

- [proposal](https://github.com/devsnek/proposal-unused-function-parameters)
- [slides](https://docs.google.com/presentation/d/1zMH6qMZ_lAIedVui8hH1__dXbATF3Ur8gZppAlGR_r4/edit#slide=id.p)

GCL: (presents slide)

JWK: First syntax is error-prone, but I'm OK with the others.

WH: You need to take care with the syntax. `*` will have issues with things like `yield*`.

GCL: there are definitely some thoughts to be put into this, I'm not proposing anything specific here, so it should be fine to avoid scary stuff.

WH: Syntactic support for `?` and `*` both seem really scary, for different reasons.

RBN: I'm concerned about `?`. It conflicts with the partial application proposal which I still plan to advance at some point. It would lead to an extremely complex cover grammar to make that work. We already had to deal with complexity with arrow functions. Generally I prefer the elision mechanism (,, id) because it's similar to what we already do for elision in arrays. I’m also worried about star, it could be confusing just looking at documentation. Examples already legal since ES2015:

```js
function f(...[, , x]) {
}
const g = (...[, , x]) => {}
```

BFS: I'm uncomfortable with any new syntax. I don't think it would be worth its weight.
Elision is fine, If people want a placeholder it could be just a block comment, maybe people could use a linter to enforce it. If we talk about new syntax, I think no, but elision seems fine because the syntax is already there.

GCL: I would like to move forward with elisions. It's something that's already in the language, we're just extending it to other places where you would expect it to work. But I hear the point about new syntax.

JHD: I definitely think this is Stage 1, I like elisions, if it were Stage 2 I think the ??? should be solved. It solves a lot of problems that developers have, and would make a bunch of eslint rules unnecessary. We already support elision in array destructuring and we agreed to not add extra bindings for something like exception catch. This seems like the same scenario.

YSV: We don't see a need to introduce new syntax for this, but we're also wondering if we gain something beyond _ as the variable name, because it serves to document which parameters are not being used. By introducing a way with not having any kind of naming, introducing a comment of what the name was. We're not convinced that this should move forward.

GCL: As in the previous topic, I'm going to say that when I use this in Rust, it's handy to have the option to not name something you're not even going to use. It just one of those little things where you think the language is being effective, I agree it’s not a crazy new functionality.

BFS: can you clarify YSV, about the mixed usage? Talking about block comment I would use empty block comments and it would be misleading to use anything else.

YSV: Yes, people might find it useful, It's useful for the person who is reading their own code and knows what it does, or if there's some convention of knowledge around what's being used. It improves the provisionality of code, but it comes at the cost of error proneness. Ifound MF's comment about leaving a hanging comma might be a refactoring hazard, so I'm less convinced that we need this.

GCL: Is that different from destructuring?

YSV: If you are refactoring a function to take another number of parameters, you might be passing undefined somewhere you don't realize if you change the arity of a function.
Let’s say you have 3 commas then var name you’re passing effectively 3 undefined values. If you update the function to have a different arity, this will be a silent error. It makes it difficult to see both your mistakes, and the intention of the original author.

I'm not convinced that this is useful as it might seem. I know that it would be a popular feature, and may have heavy usage early on. But what we have now with the underscore may currently be better for codebase health overall.

GCL: Just to clarify, underscore is one of the options here.

YSV: I mean explicitly naming, that is underscore plus the variable name.

MM: I very much agree with YSV, I have used bare _in other languages. I found it unpleasant when I came to JS and couldn't repeat the single underscore. In JS not having this, I found it irritating, but using linters and tools we have today led me into the_name pattern. I rapidly came to realize it's actually better than what I wanted to do. I think this proposal is solving a problem that is better addressed by adopting new habits to name unused parameters. The gain is small enough that adding new syntax (even elisions) is not worth it.

DRR: Technically it's possible to ignore something with an empty binding pattern. It looks pretty horrible but it is possible.

JHD: It doesn’t work as it throws on null.

JHX: [] doesn't work.

GCL: It sounds like people are objecting to Stage 1?

MM: I object to Stage 1.

YSV: I also object to Stage 1

JHD: For stage 1 objectors: do you think it’s not worth committee time to ever discuss this again?

MM: Yes.

YSV: The demonstrated need is too small for the hazards that it raises. Having to discuss unnecessary parameters again might be worthwhile, but it might need to be in a different form or have overwhelming evidence that the limited provisionality this provides to the language overcomes the error proneness this introduces to the language.

JHX: If we go through the object ????

JHD: If you think there's a problem worth addressing then that is what Stage 1 is intended for.

SYG: Falls onto the same guidance, people have objected to the need of this, given the info we have today, If new information comes up, then we can revisit.

YSV: That is what I'm trying to revisit. It's not that we never talk about something again. It would be to our detriment to never bring something up again if it was rejected in stage 1.

MM: Agree with YSV. Based on the present information, absent new data from the community, I think it's not solving a problem that needs to be solved. If new information appears, I’m fine with revisiting it.

JHX: if a proposal is still Stage 0, can it have a user babel plugin to test?

RPR: Babel is not bound by the TC39 stage process. Anyone can add a plugin.

JRL: I can speak to Babel. We don't allow people to do syntax plugins. If you want to do a normal transform such as a comment or something you could, but it would be a little bit weird.

### Conclusion/Resolution

Not advancing

## Modulus and Additional Integer Math for Stage 1

Presenter: Peter Hoddie (PHE)

- [proposal](https://github.com/phoddie/integer-and-modulus-math-proposal)
- [slides](https://www.icloud.com/keynote/0c42Y16acgRtqdz7hEdtOtDFQ#Modulus_and_Additional_Integer_Math_-_September_2020)

PHE: (presents slides)

SYG: to make sure I understand: is the suggested semantics as `(x operator y) | 0`?

PHE: I'm not certain about some of the edge cases of that.

SYG: I would like to know the answer because asm.js (??) is a thing now That said, I do generally support your proposal and these methods. Even though asm.js is a thing now, I don’t assume engines will continue to special-case asm.js syntax going forward.

WH: To answer SYG, if you’re proving int32 inputs, the answer is yes for some of the operations and no for some of the operations.

SYG: Which ones differ?

WH: The simplest example is `Math.imuldiv`. The intermediate result is 64 integer bits, so you’ll get the wrong answer if you do it using IEEE double arithmetic and then coerce to an int32 using the `| 0` trick.

WH: How this will deal with overflow? If you do `Math.idiv(5, 0)`, do you get infinity or what?

PHE: It's a good question. The way that Patrick implemented it in the test bed is that it will return NaN in some of those cases. I don't recall that it returns infinity, but it might. We'd have to look at that on a case-by-case basis. My intent is that it would be a minimum of work on top of what the silicon instructions would do.
We gotta look on a case by case basis, it would be fairly close to what silicon instructions would do for efficiency.

WH: If you want to mirror what the processor instructions do you must not return any special values like NaN — if you allow these operations to produce a NaN or an infinity, the result will have 2³² + 1 possible values, which is hard to represent in 32 bits.

PHE: There may be input checking to throw on invalid values. I don't want to get into it falling into lots of different cases depending on values.

WH: Another fun case is -2³¹ / -1, which overflows a signed int32.

WH: I just wanted to bring up these concerns as things to be addressed. The proposal looks good for this stage as far as I'm concerned.

KML: Overall I like this proposal. I do wonder whether `idivmod` returning an array makes it more expensive than just doing idiv then imod and hoping the optimizer combines them. I don't know whether XS eliminates that array, do you even allocate the array? Usually object allocations are more expensive than almost anything else.

PHE: That's probably my least favorite one. It seems like a good thing to be able to do this in one step, but you're right, in the testbed XS is returning an array and that is going to clobber any performance win from the math. These are definitely up for discussion; if there's no good performance win idivmod doesn't fit. It does parallel math that other languages have. I could go either way. It's really a question of what's the win vs people's concerns.

KML: Totally not a stage 1 blocker, just a comment. (???)

RRD: Maybe tuples, if they work as primitives, could avoid that allocation.
That said, we might change the proposal to be objects.

KML: I don't think you could avoid the allocation — you'd still have to allocate the tuple.

RRD: Yeah, forget about it.

MM: There's something about the algebraic identities here that I don't quite remember. What I think I remember is that the operator we're calling reminder is the rem from an integer division that truncates towards zero, whereas modulus is the remainder from an integer division that truncates towards negative infinity. I'm wondering about you idiv - which way does it truncate? For idivmod, having the remainder be the remainder being from the division portion seems right, and I'm wondering if it's even reasonable to have two versions of that, for mod vs remainder for truncating towards zero vs negative infinity.

PHE: That’s fair, that would complete the permutations and combinations here—so that could make sense. On the details on the math, I’ll have to sit down and think about it for 30min.

MM: Do you remember which way the idiv you wrote down truncates?

PHE: I believe towards 0, but I'd have to check.

MM: OK, I support this for Stage 1.

PHE: Consensus for Stage 1?

GCL: I’d almost say it could go for Stage 2.

WH: I support this proposal. I’d like to see the semantics before this progresses to Stage 2.

### Conclusion/Resolution

- Stage 1!

## Incubation call chartering

- No notes

## Mechanisms to lighten the load on note takers

Presenter: Philip Chimento (PFC), Mark Miller (MM)

- [issue](https://github.com/tc39/Reflector/issues/227#issuecomment-691092343)
- [slides](https://docs.google.com/presentation/d/1uj33TfhhxC3Je0Q0H71QvyqMmToIVSEc7ivOfgY0g0k/edit#slide=id.p)

MM/PFC: (presents slides)

[discussion about using recording options]

WH: We cannot make private recordings of the meetings for legal reasons. If we take video notes, they must be public.

[discussion, with several people concurring with WH and explaining the issue]

KG: Google has a TTS API that supports streaming. It is not free but it is extremely inexpensive. It would take some work to feed it into a Google Doc, but it could be done. We could hook it up to a Google Doc. I could do the work, but does anyone have objections? To be clear, this does not produce a recording; it only produces notes.

WH: We say a lot of filler words when speaking that don't make it into the notes.

KG: There would be editors who ensure the quality. They would remove the filler words and incorrect words.

IS: +1

SYG: +1 and send me an email. We could get you a coupon.

KG: It costs, like, a dollar.

RPR: Are people happy to continue?

RBN: Teams also has this feature. I tested it and it seemed to transcribe audio fairly well.

JHD: If recordings are out, this might be irrelevant, but recordings that we can't grep (text search) might create a chilling effect and make people uncomfortable. In the same ways, we don’t want notes to be 1-1 transcription and have those notes not be edited. But this is a moot point given the last discussion.

WH: +1. Composing speech without lots of bothersome filler in real time is harder than writing things down. I used to take notes for the committee for many years. When I was the note-taker, the notes were higher-level than what they are now. I wouldn't mind going back to a slightly higher level than what we've been doing.

RPR: People can currently edit notes either in the Google Doc or when they go into the GitHub PR.

RRD: I would like high-level notes, but in some discussions, I don't understand everything that's going on. So that's why we end up with word-for-word transcriptions, because I don't trust myself to understand the gist of what someone's saying. So high-level notes sounds good, but it might be harder.

YSV: Coursera has a cool feature. Quite a fan of the automated transcription / video scrubbing on coursera.

MM: Can you do it after the fact?

YSV: That should be possible.

RKG: I am not a person that feels comfortable taking notes under the current process due to the extreme level of stress involved, but I would be inclined to help out in every meeting if it were a matter of post-editing automatic transcriptions.
