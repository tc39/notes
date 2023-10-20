# April 01, 2020 Meeting Notes

-----

**In-person attendees:**

**Remote attendees:** Yulia Startsev (YSV), Mark Cohen (MPC), Jeff Long (JHL), Bradley Farias (BFS), Rick Button (RBU), Michael Ficarra (MF), Mathias Bynens (MB), Myles Borins (MBS), Caio Lima (CLA), Dave Poole (DMP), Jason Williams (JWS), Kevin Gibbons (KG), Chip Morningstar (CM), Philip Chimento (PFC), Mary Marchini (MAR), Rob Palmer (RPR), Ross Kirsling (RKG), Waldemar Horwat (WH), Pieter Ouwerkerk (POK), Bradford C. Smith (BCS), Ujjwal Sharma (USA), Richard Gibson (RGN), Felienne Hermans (FHS), Nicolò Ribaudo (NRO), Shane F Carr (SFC), Justin Ridgewell (JRL), Jack Works (JWK), Philipp Dunkel (PDL), Robin Ricard (RRD), Ben Newman (BN), Sergey Rubanov (SRV), Jordan Harband (JHD), Guilherme Hermeto (GHO), Robert Pamely (RPY), Edgar Barragan (EB), Mark Miller (MM), Hemanth HM (HHM), Aki (AKI), HE Shi-Jun (John Hax) [JHX], Daniel Rosenwasser (DRR)

## Record and Tuple Update

Presenter: Rick Button (RBU) and Robin Ricard (RRD)

- [proposal](https://github.com/tc39/proposal-record-tuple)
- [slides](https://button.dev/talks/record-and-tuple-tc39-march-2020.pdf)

RRD: (presents slides)
RBU: (presents more slides)

WH: [Referring to Deep Path Properties slides] If a spread contains a property with the same name as an explicitly defined property, does it replace it?

DE: Yes, that's what spread is.

RBU: Yes, it works the same as object spread.

RBU: (returns to slides)

WH: How would you delete a property with the Deep Path Properties syntax?

RBU: Good question. You can't delete a property with spread either. Let's talk more about this.

WH: To clarify, to define `==` and `===` on records or tuples, you’re using elementwise `Object.is`?

RBU: Yes.

RBU: (returns to slides)

MM: There is a way to delete. I presume you're doing the natural extension of this for pattern matching. (Note: I clarified below that I meant destructuring.) If you pattern match against the pattern `#{foo, ...rest}` then `rest` is the thing you've pattern-patched against without `”foo”`. Pattern-match removes properties from things. So your deep update proposal is very nice - I also want to ask have you thought about providing the same kind of deepness on pattern matching? And does the deepness on both the expression and matching side - is that also an extension we should apply to regular objects?

RBU: The first statement about deleting in a pattern match: that sounds reasonable. I'm not super familiar with the pattern matching proposal but I think that makes sense. There has been discussion about what to do about a record that it spread and destructured produces an object or a record - right now we’re just making it a record, but there’s active discussion on Github.

MM: I was assuming that the corresponding pattern match would use the `#` syntax on the pattern side.

RBU: That makes sense. I'd have to do more investigation to give you a confirmed answer.

RBU: In terms of the other question,

MM: Deepness.

RBU: Right, and whether or not it applies to objects.

MM: And pattern matching.

RBU: Sure, I’m not familiar with the proposal to say if it’s feasible, but if it’s feasible, sure. For objects, it would be a matter of making the semantics understandable to the end user - whether or not you specify a path in the spread is complicated. I’d love for it to exist with objects but I need to look into it.

MM: With regard to read-only collections and harmonizing the two, I am interested to continue that discussion.

RBU: No problem, the proposal as it stands gives a lot of information.

DE: MM, do you mean destructuring, not pattern matching?

MM: Yes.

RRD: That makes more sense.

RBU: On destructuring we can confirm that the status quo is it creates an object, but we need to do more iteration on that.

MM: Is there a hash-syntax proposal on destructuring?

RBU: Not currently. It’s feasible but we have to do more investigation.

SFC: I like the changes and the direction of this proposal. My message here - especially when we’re thinking about standard libraries - if we’re thinking about records as being better than objects, it creates a dichotomy within the standard library. But I like how the new direction is that it looks like records are a fundamentally different construction in the language. For example that you can’t have functions and mutable things inside of the records, I think that’s a very strong part of this proposal - I like that change, that they’re immutable all the way up and down. That leads to the second part of my comment which is when you’re thinking about having functions, introducing this different thing with RefCollections just so you can have that seems strange - maybe you should just have objects. Is that a use case that really needs records? If you’re doing all these weird workarounds to make records do things that maybe objects should be doing, maybe that use case should be using objects instead of records.

RRD: To be clear, RefCollection is just an idea we’re proposing later on. It’s just one way to potentially achieve something that people were concerned about because they wanted to do those things with records. I still do think that records should be their own thing, not objects, but analogous. You can access records the same way you would access objects. I very much agree on the fact that it should be its own mechanism and we shouldn’t try to replicate objects. That said, the possibility of having some sort of escape hatch is nice to have, and that’s basically what RefCollection is trying to be. We will present it in upcoming meetings for stage 1, but for now please just take a look to see if records solve the problem that was originally there.

GCL: The limitation of Objects not being allowed in Records and Tuples seems very dependent on the idea of RefCollections, but RefCollections seem to have a lot of problems. SymbolGC semantics aren’t well defined, combination of ownership semantics… if RefCollection can't move forward, is that use case going to be supported? Are there alternatives? I think objects within records is a useful thing.

RRD: Yes. As far as us championing this, we don’t think that this proposal would make much sense if I were able to reference objects just like that. We think there are many footguns with the ability to put objects inside records and tuples. I would have a hard time explaining the semantics of that ability to coworkers and people in the community. Let's take Immutable.js, that actually lets you have Objects inside the immutable data structures. I talked to engineers who stopped trusting the equality operator in Immutable.js. They could have an object somewhere that could negate completely the equality semantic of what they’re trying to compare. I think this proposal should try to protect against that. We could think of other workarounds than RefCollection, but I don't think we want to change the core of the proposal as it is right now.

RBU: I would also clarify that we’re not presenting RefCollection or Deep Path Properties for stage 1 at this meeting, they’re just solutions we’re thinking about for this problem. I don’t think we should count out RefCollection just because it’s complex; I think there are some sharp edges that we need to work out, but we have time to do that.

GCL: I’m just asking if RefCollection can’t move forward for some reason, it would be a shame that this use case isn’t supported.

RBU: There are a lot of people that want the ability to have this escape hatch, so if RefCollection ends unimplementable, then we will need to find some other solution.

RRD: Same here. And to pre-empt one question, we have pure userland solutions that we could put forth if RefCollection can’t exist. We think it’s out of scope for this proposal. We won’t change the proposal itself for this specific semantic, but we’re absolutely okay with adding other things later on. RefCollection is what we believe to be the right way, but if there are issues with it we want to hear about it.

BFS: I want to state that there are various semantics for RefCollection, we can discuss it elsewhere and it can mostly be done in userland.

1 Reply: Userland can do RefCollection - Bradley Farias 2 Reply: Userland cannot do RefCollection with JS as it is. This proposal is an attempt to support "boxing" objects as many people have requested - Daniel Ehrenberg (Igalia)

SFC: To override a field deep in the structure, can we have a Record.assign() like Object.assign()?

RBU: Yes, there’s a namespace appendix in the proposal that has Record.assign in it, as well as a number of other Record & Tuple methods and their complete prototypes.

SFC: If we have Record.assign() do we need the deep assignment?

RBU: You can do the same thing computationally with spreads or Object.assign, it’s just as terse. You need a set of braces for each level of the structure either way. Record.assign doesn’t give us anything computationally that makes that simpler.

SFC: I think if we have Record.assign() then it suffices to override one single field.

RBU: If you’re trying to override one single field sure, but if you’re trying to override a multiply-nested spread… that’s a good point.

SFC: You have to have four levels of indentation, but you don't need the spreads.

RBU: Good point.

GCL: About equality semantics, the proposal for -0 and NaN with triple equals, aside from violating IEEE 754, this seems confusing to me. Where a value is being held shouldn’t change the semantics of equality that it has on a very general level. When something is put into a record or a tuple, it should retain the semantics it already has.

RBU: I’ll steal BFS’s reply to this in the queue, which is that the equality of the collection doesn’t simply represent the summed equality of all of its components. I agree this pattern existing is confusing, but I disagree that it is more confusing than the alternative, which is to have a black hole in a Record with a NaN in it.

GCL: I would say 1) I think it’s confusing to not follow the proper IEEE 754 semantics (for floating point) when comparing them for a number of technical reasons. The other thing is, the equality of the record in the tuple should be equivalent to comparing each element, because otherwise you get into these weird edge cases we're now talking about.

RBU: I don’t disagree that it’s confusing, I just think we have a different priority for which part of it is more or less confusing being more or less important. This is still an open issue, but I’m still firmly of the opinion that it should behave the way I describe, but this isn’t frozen.

GCL: I’ll follow up on Github.

RBU: Issues 20 or 65 that I mentioned in the slides.

WH: I like the clean solution for equality, with one caveat: I'm curious about the interaction between this proposal and value types, which was mentioned as a way to implement complex numbers by MM in yesterday’s discussion. Would we need something that's similar but different for value types, or could we re-use records and tuples for complex value types? The dilemma being that for complex numbers, if you want IEEE complex numbers, they need the IEEE notion of equality across the real and imaginary parts.

RBU: I’m not as deeply familiar with value types as DE, so I'll defer to him on that.

DE: Record and Tuple is sort of a more programmer-friendly name for value types. Records and Tuples are kind of a data model for value types. The idea of IEEE semantics for complex numbers is an interesting one. We could start with more NaN-like equality, and later on introduce equality for complex numbers. But for now we could say that these object-like things and array-like things don’t support these things and later on expose something supporting that. Value types will require many additional capabilities, that Records and Tuples don't provide, but will build on the same data model.

WH: It seems like a reasonable evolutionary path. I want to see something in the proposal to remind us about that direction.

RBU: I think there’s a small snippet but we could expand it.

DE: Yeah, I would be happy to discuss this in greater detail. I was planning to do it in a separate repository originally, but I’m not quite sure yet.

BN: It feels like there's a lot in this proposal right now. Some people will say that syntax is expensive. I wonder if the runtime part (i.e. the record and tuple functions, which I think are totally adequate for getting the sort of immutable triple equals objects you want) . Might be something that we can prioritize as a proposal in itself. Then a follow-up proposal to add the shorthand hash syntax, or do we need to include everything that's eventually going to be in the proposal up front?

RBU: From the champions group perspective, I think there’s always a fine line you have to draw between how fine-grained and how large you want these proposals to be. We're trying to strike that balance by splitting out RefCollections, removing with syntax, etc. I still think the syntax is very valuable for two reasons: 1) you don't just repeat the word Record or Tuple over and over again. 2) We already have significant runtime experience with this, with libraries that implement immutable data structures in userland. So the goal with record and tuple is to not only provide an alternative to those, but to provide something with a very terse syntax integrated into the language so you use it as much as possible. The addition of the shorthand syntax adds a lot of value to the proposal.

BN: I agree and I like this syntax, but it’s important to mention that it’s completely separable.

RBU: Yeah, and like I said the fine line to draw between where to cut for future proposals is complicated. I’m still of the opinion that it’s worth including with this proposal but am interested in hearing what the committee thinks about this.

MLS: I’m concerned that the update on this proposal came with two more stage 0 proposals, and if they’re needed to make these proposals useful, then I think those features should be considered as part of this proposal.

RBU: Even though we're not presenting on them this meeting we intend to iterate on them in parallel. The proposals being split gives us the advantage of iterating more quickly on the things that people agree on, like the core semantics of record & tuple. I agree that RefCollection and deep path properties are important for this proposal, but they're intended to solve sharp edges. I think Record and Tuple are still very valuable without them.

RRD: Yes, mostly RefCollection is something we don’t think we need, it’s something to address concerns. Honestly we don’t think both of those proposals are essential, though we do like them.

JRL: I just wanted to voice strong support for RefCollection. The ability to place holes in immutable trees is very useful. There is high value in holding references to mutable data out-of-band relative to the immutable structure. (excellent note taking!)

Chair: Champions group, please ensure that the remaining comments about RefCollection are discussed.

### Conclusion/Resolution

- https://github.com/rricard/proposal-refcollection/
- https://github.com/rickbutton/proposal-deep-path-properties-for-record

## Number.range and BigInt.range for Stage 1

Presenter: Jack Works (JWK)

- [proposal](https://github.com/Jack-Works/proposal-Number.range)
- [slides](https://docs.google.com/presentation/d/1JD9SrOEtGEviPYJ3LQGKRqDHYeF-EIt7RHB92hKPWzo/)

JWK: (presents slides)

WH: [Discussing the “Wait for discussions” slide]:

- Decreasing ranges seem fine.
- `Number.range(0, 10, -5)` should yield nothing.
- I wouldn’t worry about preventing infinite loops such as `Number.range(42, 100, 1e-323)`; there are lots of ways to get an infinite loop, including the obvious `Number.range(0, Infinity)`.
- `BigInt.range(0, Infinity)` seems useful, so we should allow an `Infinity` limit when making BigInt ranges.
- I wouldn’t bother with `includes`.

SFC: [Regarding issue #17](https://github.com/Jack-Works/proposal-Number.range/issues/17), when you have a Number.range(), does it return an iterator that has the next() method directly, so it's consumable once? Richard wrote that one way to think about Number.range() is that it’s an iterator factory - you call it and it gives you an iterator that’s consumable. The other model is that you call it and it gives you a Number.range first class object that’s not an iterator, but has a `[Symbol.iterator]` method that gives the iterator. The advantage of it returning an immutable is you can take it and use it in other places, e.g. with a NumberRangeFormatter or as an argument to a function. Generally, you may want to reuse it. I think both approaches have clear advantages and disadvantages.

GCL: I think reuse via iterable as you’ve described it is actually a downside, because you end up having implicit reuse instead of say, passing around a function, where you call it each time and it’s explicit that you would get a fresh iterator each time. I think reuse is good but I don’t understand why you’d want it implicit.

DRO: I agree that it should be an iterator in the sense that if you wanted an object that you could reuse, you could just use Array.from. I think providing the simple option that could become more complex through existing JS APIs is better.

JRL: I can't think of any other language feature that would give you an immutable data structure that you could continue to use as an iterator.

SFC: One of the examples I brought up in the thread is Intl.Segmenter, where we have a first class and immediate type, and we did that because we wanted to add additional methods after you segment your string like forward iteration, and there are also other things you might want to do with the segments, so we had it be its own object. Are there other things you want to do with a number range? Maybe you want to take it and divide it in half. Maybe you want to take it and know the front or the back.

GCL: I don't think you can compare Intl.Segmenter directly to Number.range. It's a collection of items that you can randomly index into. A range is not a collection of items. You can’t index into it, for example.

MPC: Some of those things that you [SFC] are talking about, could be done with an iterator. In rust, if you have an iterator and you get the last element, it just consumes the iterator. I agree with [SFC]’s point ??

MPC: Preference for `Number.range(10)` being [0, 10). I'll discuss this on GitHub.

RBN: There was a proposal a while back for adding a slice syntax, and as part of that I suggested a reified interval or slice based on something in C# where they added a range type, which gives the ability to specify start & end (but not step). The suggestion I had was an actual data structure called Interval which allows you to specify start and end. It is an iterator rather than being an iterable for many reasons, but it resolves several issues here, specifically with making start & end more clear, or members on it like includes. For example does it only include a number if you haven’t already iterated past it? This is the range in question that you can perform operations on. It's a little more flexible than the method.

RPR (on behalf of JWK?): Consensus for Stage 1?

RBN: I’m not willing to block stage 1, but I think we should consider exploring something more full-featured than a method on Number or BigInt. But I think this is a good thing to add to the language.

No other objections.

### Conclusion/Resolution

- Number.range and BigInt.range advances to Stage 1.

## Introducing: `this` argument reflection functions for stage 1

Presenter: HE Shi-Jun (John Hax) [JHX]

- [proposal](https://github.com/hax/proposal-function-this)
- [slides](https://johnhax.net/2020/tc39-apr-this/slide#0)

JHX: (presents slides)

MM: The slide with the `1::plus(1)`, what’s the `::`?

JHX: That is the bind operator proposal, currently at stage 0.It’s a stage 0 proposal.

MM: What does it mean?

JHX: It just means `plus.call(1, 1)`. Actually, `plus.bind(1).call(1)`.

SYG: When does Function.isThisArgumentExpected return true? When 'this' is syntactically present in the function body?

JHX: If the function expects this argument to be ??, for example if it’s userland code where you’re using this in your function, it should be true.

SYG: Whether a function expects it or not is the intent of the author, what is it actually testing, the syntactic presence?

JHX: Yeah, if there is a this keyword in the function body. Strictly speaking it means if you can use reflect.apply (applied?) to call a function, and there’s a this argument. You always can send a this argument, but many functions actually do not use it. So whether you send or don’t send it has the same behavior. If the function is implemented in a way that it needs a this argument, then it should return true. So basically it marks the usage of the function.

AKI: Are we clear?

SYG: I guess so? I see that BFS has linked me to something about it.

BFS: To be a bit-more specific in specification types, when syntax can produce a reference that can point to the "this" binding of a function environment the proposal's data value is set to true for the function that contains the "this" binding.

RW: I think SYG was actually about to ask the same question. What is the behavior of Function.isThisArgumentExpected() when called inside an arrow function that is anywhere? So for example at the top level where syntactic this exists, or inside a function where syntactic this exists but then some arrow function gets defined, and then within that, Function.isThisArgumentExpected is called. What behavior should we expect for that?

JHX: Arrow functions and bound functions should return false, because arrow functions and bound functions don't expect a this argument.

RW: So it’ll never ever return true?

JHX: Yeah.

WH: Very unhappy with trying to advance a proposal for which the only thing you had before the meeting was a title. I don’t think that’s okay.

JHX: Sorry, because I already proposed it in a previous meeting, I just did some document cleaning…

WH: All the other proposals except for your two were linked in the agenda.

RW: Need to have the full package several days in advance prior to the meeting.

WH: So I don’t think it should advance just because we haven’t had time to discuss this.

BT: Rules are quite clear that having materials for stage 0 and stage 1 are not required. We have a proposed rules change to require it for stage 1, but right now it’s not required. It’s requested, but not required.

YSV: We discussed requiring materials yesterday and we do have consensus on it, but it didn't happen before this meeting. I will echo WH’s point that I found it difficult to review proposals on the agenda without links.

BT: Sorry, forgot about yesterday’s discussion.

AKI: And let’s not forget how much I nag you all to review the agenda items before we arrive. So we had consensus yesterday on requiring materials but that wasn’t before the meeting.

JHD: That was regarding making sure we have a repository. Materials were not agreed upon.

AKI: At least if there’s a repository we can get more information.

SYG: I'm not sold on the motivation from last time, and it seems like the motivation remains the same from last time this was presented. The only difference I can tell is that the APIs are different. As far as I can see the motivation is for better error handling when it’s used by user code. I think we can say something pretty narrow about function ??? I don't think we can use this in the way the proposal is motivated, which is for throwing better errors. Are we going to be mandating that something like this is provided for ?? methods? For other things? We can say something narrow like “this binding is in user code”, but that doesn't’ make sense for a method provided as a native thing on the platform. And if this were in the language, how would we adopt it to do what it’s designed to do? Would you need to monkey patch all platform code to check for this? I'm confused how this would actually be used. If it's only for solving user code, I'm not sure why you cannot check this in user code today.

JHX: THe problem here is that currently we do not have the mechanism. THere’s no way frameworks and libraries can give the better error message, and not only that but to allow them to throw other errors in earlier stages. Currently it only triggers a reference error at runtime in a very late stage. For example, only when you click it and the code runs to the callsite, only then will it be a reference error. It's hard for users to find their bug in the first place. And about the platform and native things, I think it could also - it should be provided, this feature. Currently, the native APIs have the behavior, for example the constructors never expect a this argument. Arrow functions never expect this argument. No API tool exposes this information.

SYG: Arrow functions do have a this, they don't bind their own this they bind this (they bind the lexical this)

JHD : Arrow function don’t bind this, But it's that they don’t bind it, so they lexically refer to the outer binding.

SYG: Correct, yes.

RW?: The place where you need this is you want to call a function, and you want to know if it will use a `this` given to it, if I give it one.

SYG: I’m not sure how to use that information.

RW?: For an arrow function, it will ignore it. It already has this baked in.

AKI: Time! JHX, what do you want to do?

JHX: Are there any other concerns? SYG, we could discuss offline.

SYG: Happy to discuss offline.

AKI: Use IRC to set up a time to clarify. I’ll save the queue.

1: Reply: fundamentally undecidable Gus Caplan (@nodejs @tc39 @WebAssembly @OpenJS-Foundation)

2: New Topic: function proxies are interesting Mark S. Miller (@Agoric )

3: New Topic: `if (this !== undefined) throw 'did not expect this'`
Gus Caplan (@nodejs @tc39 @WebAssembly @OpenJS-Foundation)

### Conclusion/Resolution

- Not proposed for Stage 1, will discuss offline JHX/SYG

## Relax hashbang syntax for Stage 1

Presenter: HE Shi-Jun (John Hax) [JHX]

- [proposal](https://github.com/tc39/proposal-hashbang/issues/18)
- [slides](https://johnhax.net/2020/tc39-apr-hashbang/slide#0)

JHX: (presents slides)

RW: If hashbang is still a proposal, this should be an issue filed on the hashbang-proposal repository. Have we ever had any early stage proposal on a later stage proposal that wasn’t already in the spec? It seems not unreasonable to request the addition of one newline to the syntax.

BFS: I'm the author of the hash bang proposal, there is an issue open. There are a few implementations out there. We could go to stage 4 but not yet. I don’t want to have this tied to the hashbang proposal - I think there can be a lot more discussion about this than hashbang themselves.

AKI: Let’s continue through these slides.

JHX: (continues presenting)

KM: How do the simple transformers work today? It seems like they wouldn't work with let, const, or modules (export default).

JHX: They work, because they’re just simple prepends or appends. It never used the parsers, so it just works.

KM: That doesn’t work for modules. Like if you have a module file, you can’t export not at top level.

JHX: If you use them as a module, then it depends on how the user does it. The transformation only works like in a CDN, you only get the results.

KM: I don’t understand, I’m confused.

SYG: I don’t understand, I don’t think this works. If you have `let x` in one file and `let x` in another file that's 2 separate modules in 2 separate files. How do simple transformers deal with that case?

JWK: Maybe those source files are expected to be wrapped in an IIFE?

KM: If I had ???... before it was at the global scope

AKI: We are at time and the queue is full. We can try to come back tomorrow, but I don’t think a 15 minute time box was enough.

### Conclusion/Resolution

- Not proposed for stage advancement

Remaining queue:
1 New Topic: the context (an inline include, eg) is required information when authoring `test.js`
Jordan Harband

2 New Topic: I'm in favor of tolerating initial whitespace. But not other places Mark S. Miller (@Agoric )

3 New Topic: why should we cater to simplistic/brittle code transform tools?
Jordan Harband

4 New Topic: Should not do this Waldemar Horwat

5 New Topic: We should not set a precedent that simple concatenation preserves semantics Shu-yu Guo (@google)

6 New Topic: Are there examples in other languages that don't use # for comments, but ignore hashbangs?
Philip Chimento

7 New Topic: There's already some precedent with `sourceURL` and `sourceMappingURL`, which only have an effect once Devin Rousso

8 New Topic: Hashbang starting with a space is not a valid hashbang on Linux (and probably other UNIX systems)
Mary Marchini (@Netflix)

9 New Topic: Even simple ASCIIfiers need to understand JS semantics Justin Ridgewell (@google -> @ampproject )

## WeakRefs FinalizationRegistry API change

Presenters: Shu-yu Guo (SYG), Daniel Ehrenberg (DE)

- [pull request](https://github.com/tc39/proposal-weakrefs/pull/187)
- [slides](https://docs.google.com/presentation/d/1mT9qcho2gGGDTNFd5KnOTvweJ9NFM_fbmxbGnZz5H4s/edit)

DE, SYG: (presents slides)

DE: Consensus on removing the FinalizationRegistry iterators?

MM: There was some terminology about microtask checkpoints in the materials.

DE: I've done my best to eliminate references to microtask checkpoints. If there are any remaining, let's work offline to remove it.

MM: OK, so the issue is not to remove it, but what is it you’re trying to explain? I don’t know the details of the web scheduling semantics and how that translates to JavaScript.

DE: So, in the WeakRef proposal, I want to apologize for any layering errors, the spec doesn’t refer to microtask checkpoints, but the documentation does refer to the web embedding. In particular, the WeakRef spec deferst to the host in how to to handle the finalization callbacks.
The way the web does it, and all the embedders such as Node.js, is that these don't interrupt a chain of Promise resolutions. Promise jobs are treated as higher priority than WeakRef cleanup jobs. The spec leaves it open to JS hosts to treat them at the same priority. My understanding is that Moddable wants to treat them at the same priority. I don't see a problem with that. But the web, it’s motivated by wanting to not allow observability of the GC at higher granularity to prevent compatibility issues.

MM: So, I want to make sure that this particular invariance is preserved—the host given more freedom. The host cannot schedule a callback other than at a turn/job boundary. It cannot do the callback in the middle of an existing job.

DE: That’s correct. I don’t know if we’ve ever had language to prevent code from interrupting for any reason. It would be interesting to investigate adding such a language to the specification. When I read the spec, I always think in terms of that invariant being preserved.

MM: So first of all, I agree that we should tighten the spec, but I think it's urgent on this one especially. For this one, the callback happens spontaneously in a way that is unrelated with what the user code is doing at that moment., Because garbage collection happens interleaved at fine grain with what the user is doing. So if the language in the spec is phrased such that the host has to choose the order, as jobs, they can only be scheduled among jobs. That language would not imply that the host can do it during a job.

DE: The plan for this is to respect that JavaScript works in the framework that we have established. I think we should review that language offline and see if we need to add any clarification that jobs are not to run in parallel. Let’s follow up about this offline. I have not rebased WeakRefs to the new thing that has landed for Promises. As a part of the rebase we should handle that.

MM: That’s great, I’m happy with that.

SYG: To your earlier concern about the current language in the spec text, specifically for the FinalizationRegistry callbacks, it is the host’s responsibility to make this not interrupt synchronous code execution. Does that satisfy your interleaving concern?

MM: Ok. It does. If you don’t have a good answer to KM about motivating cleanupSome I can do that.

YSV: The proposal to use an iterator comes from the Mozilla side. We've been talking about this in depth. We totally support moving this to a per-item callback. We are waiting to hear back from one person, but this won’t change that, so we can go ahead with this.

DE: Thank you.

SYG: The test262 PR does exist, if we have consensus on this it should be ready to merge. I have tested it against my implementation in V8.

KM: I was trying to figure out the use case for cleanupSome.

MM: When we were first doing the WeakRef proposal, there were two use cases that needed cleanupSome, but we didn’t have cleanupSome. We invented cleanupSome for those two use cases: the two use cases are similar. One is long running WASM computations that never return to the event loop. The other is, in a worker, a long running JS computation that simply doesn’t use the JS event queue, instead some internal control structure. That might arise when the JS code is transpiled form some other language that doesn't have loop event loop semantics. Any such long-running program would know based on its semantics where the safe points are. It should be able to say, here are the safe points.

DE: In JS workers as well as WASM threads, you can use SAB i.e WASM shared memory for computation that is long running And might communicate with shared memory with Atomics in other threads.

MM: It would make sense if those don’t give back to the event loop as frequently.

KM: My concern there is that I don’t expect any other web api that has anything async at all to be runnable without returning to the event loop. It's not clear to me how these processes would… don't want to interface with how the web normally works now. That gives me plugin system vibes. Like trying to compile plugins in some other language without using how the web already handles this.

DE: This makes more sense for computationally heavy code than code that is doing a lot of interaction with APIs such as input and output.

MM: KM, workers are part of the web, my main response to you, is that JS is not just the web. Workers are web: it is perfectly reasonable to run a program in a worker which stays in its own compute loop, and works with SABs etc.
Why is that not reasonable on the web?

KM: You can certainly do that. You lose access to a lot of existing APIs that may not be replicable outside of returning to the run loop. You can do that on the main thread too if you are gonna do a canvas app.

MM: An individual worker computation can be quite specialized. What are the functionalities that a worker would need to return to the event loop without being able to use those functionalities at all? There are some. Obviously you can’t receive a postMessage. There are a lot of interesting things you can do without returning to the event loop.

KM: The postMessage ones are already… you can't even initialize a shared memory without using postMessage first.

DE: Once you initialize it and start the computation, then you could use this API. I'm wondering how we should proceed from here. You've raised this concern some time ago, and we've addressed it as the champions group.

KM: I’m very concerned about this API on the main thread for sure in the web. It feels like a big compatibility risk. I expect my thing to be cleaned up because I called cleanupSome after a GC. The main place you would care about this, at least on the web, but certainly other platforms, Where the main use case for this is probably things like "I have some giant existing code base which cares nothing about how to make a good ux on the web, and I want to just open a socket on that page and then draw something on a canvas on that page".
I don’t want to enable APIs that enable that to be easier.

DE: I’d like to get consensus on this other item that’s independent on cleanupSome.

DE: Any objections to consensus to removing FinalizationRegistry cleanup iterators and replacing them with passing the held values individually?

(silence)

RPR: We have consensus.

WH: I see that in the liveness fix, implementations are obligated to empty all WeakRefs for all objects in a non-live set simultaneously.

DE: You are allowed to choose any set when choosing liveness, you don’t have to chose maximal.

WH: It says that, but it also says that implementations must empty weakrefs in arbitrary live sets simultaneously, including ones that contain unrelated objects.

DE: But that’s if they choose that larger set. They could also choose [that smaller set?]

WH: Ok. So the choice is that's the part that's missing from the wording.

DE: Right, so…

SYG: Implementations do not have the obligation to choose the maximal set.

DE: I'd like to follow up offline to refine the wording. I don't understand exactly what.

WH: I will file an issue on that.

DE: Perfect

SYG: Can we come back to KM’s question on cleanupSome given that this has been stage 3 for a while, and we have made many late stage changes based on implementation feedback? For cleanupSome, the consensus is that in general we agree cleanupSome is useful. I hear some performance concerns that it might be abused to degrade main thread performance in a web setting. I think that concern is not something we should change about cleanupSome. Concretely I want to ask KM, because I would like to ship WeakREf soon to get real world feedback, do you feel strongly about cleanupSome to ask for a change in the API?

KM: I'm torn on this. On one hand, I think this is an API we may regret for compatibility reasons. It's a concern as a historically smaller marketshare engine… Chrome does one thing, Safari does another, then you have to hack your website to clean up an object that's still live. (???)

SYG: It’s not my understanding that removing cleanupSome would have consensus. If you are asking for a change it would be asking for something on the main thread?

KM: I haven't thought about that yet. I should speak to the architecture people on WebKit about it. I think they're currently unhappy with potential compatibility risks for the tradeoff of value proposition because the main use case they envisioned were the things I pointed out. That's why it came up so late. But I don't have an answer for you right now.

RPR: we’ve come to the end of the time box.

DE: I’m wondering whether folks would be upset if engines shipped this without cleanupSome with the possibility to ship cleanupSome later? I wonder if this would be considered out of order by the committee?

MM: I would be upset.

DE: Good to understand that, just curious.

SYG: KM, let me talk to you offline. I would like, before the meeting is over, to have some clear path forward on the record for committee. I don’t want to iterate in stage 3 further.

RPR: Is that the conclusion?

DE: I’d say we have consensus to remove the cleanup iterators and pass values directly.

1 Clarifying Question: Cleanup some doesn't mean "please perform cleanup", it means "do you have anything I can clean"
Mathieu Hofman (@stripe)
2 New Topic: Hosts can choose to have cleanuoSome be empty on main thread Mark S. Miller (@Agoric )

### Conclusion/Resolution

- consensus to remove FinalizationRegistry cleanup iterators and pass values directly
- SYG will follow up with KM on cleanupSome before the end of this meeting ([link](https://github.com/tc39/notes/blob/master/meetings/2020-03/april-2.md#revisit-weakrefs-finalizationregistry-api-change)).

## Temporal update

Presenter: Philipp Dunkel (PDL), Jason Williams (JWS), Philip Chimento (PFC), Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://pipobscure.github.io/slides/temporal-2020-03/)

PDL: (presents slides)

JWS, PFC, USA: (continues presenting slides)

WH: What does `withCalendar` return? Another Date?

USA: Yes, it returns a new fresh date with a different Calendar at this time.

USA, JWS: (returns to slides)

MM: This is not a blocker; I'm curious. With the operations being named things like "plus", I'm wondering: If we already had DE's operator overloading proposal in the language, would it make sense to have dates overload some arithmetic operators so you could express date arithmetic?

USA: I just wanted to point out that according to my understanding right now, operator overloading works when adding two objects of the same type.

DE: That’s not true about the operator overloading proposal. At the same time I think it will be better to use methods than operators for this. I think OO makes sense to use for really numeric-like things; specifically I didn’t want to encourage it for things like C++'s cout, things like that. I think it would become too cryptic to make prolific use of operators here. SFC has a further comment.

SFC: DateTime arithmetic is complex, there are questions about how to disambiguate. It’s not suitable for a single operator. A single operator would be making too many assumptions for an operation that’s less trivial than just adding numbers.

MM: Ok. Thank you.

DE: I want to mention that Temporal weekly meetings are open to delegates and invited experts, and we would be happy to have more people involved!

PDL: I second that statement. We are very excited to have a large panel of participants from a lot of different stakeholders on board.

SFC: Do we want to talk about enumerable properties now? [#403](https://github.com/tc39/proposal-temporal/issues/403)

DE: If we have time I think it would be ok. There are some getters on Dates and DateTimes to get the day of the month and to get the year. They can be enumerable and non-enumerable. My intuition that they be non-enumerable to match RegExp and global.Other people had the intuition they would be enumerable, matching own properties that coudl be used in operator spread. Do people have thoughts on this? Should we follow the conventions of things like RegExp properties, or should we be optimizing for things like object spread?

PDL: The example is that you have a year/month/date in an object. You couldn’t spread them unless they’re enumerable. At the same time, if they’re getters that are housed on the prototype, then they wouldn't be enumerable on the actual object. Same with RegExp properties. So it’s a question of do we go more with what we've done in the past and make them non-enumerable, or do we go with something easier to work with?

MM: For properties that are per-instance data I think that optimizing for object spread and rest is a nice thing to do. For anything method-like, I would not do that.

JHD: I have a queue item about this. Optimizing for rest spread is not what most instances in the language do. Array.length is an own per-instance data value, it’s not enumerable. Like Map and Set size are accessors, but conceptually, that is part of an instance. An error message, a name. There are a bunch of instances where that is not the case. We just don’t have own enumerable data properties. The convention is that those are things that users make, not the language.

PDL: That is where the question comes from and why we want the committee opinion on it.

MM: Ok.

JHD: Another question is if these things will be serializable to JSON. I think that at the moment they produce a string, but they could produce an object with properties and then you could stringify that. The ruby convention would be for the objects to have an asJson method that creates a plain object. I’ve followed that convention in a lot of my ruby codebases where that’s my plain object form of a lot of ???. toJson conforms to a asJson formed value.

AKI: I want to avoid devolving too much into a conversation better done on GitHub.

PDL: The problem is that on GitHub we haven't found the solution: we want to encourage everyone who has thoughts on this to participate in the discussion. If you could state in on Github it would be appreciated and we could close the discussion now.

DE: Given that there are no queue items I think that is a good comment to close this discussion.

AKI: Check out that issue on GitHub.

SFC: I put a queue item on.

AKI: Go for it.

SFC: This is a question - unlike most that we answer in the Temporal champions meeting - that we wanted to bubble up to the committee. In feb we brought up a question about protocols. This relates to the language where it’s a question of do we follow the convention of the language -- we understand the convention about properties not being enumerable -- or do we do what may be more ergonomic, to consider enumerable properties in this situation; that is why we are asking the committee for their opinion.

DE: It's not like all the champions have the same point of view on this.

SFC: I don’t mean to say all champions have the same point of view, I’m sorry for saying that. It’s a meta question. I encourage people to participate more on these Github threads, especially this one.

-----

MBS: I’d like to update on the current plan for voting on the 2020 specification as well on the plan around surrogate pairs in regular expressions. We have the return of surrogate pairs in regular expression capture groups, it has 30 minutes available at the end of the day today, having talked to a few folks discussing this matter, it seems hopeful to reach consensus on this discussion. After that discussion, the plan is for the editor group to make a PDF of the spec that we would be voting on, and we have the vote on the agenda for tomorrow later in the day. If anyone has concerns about this specific plan of action please reach out to me or other chairs. I want to make sure we are all aware and can comment on it.

## Ergonomic brand checks for Private Fields for Stage 1

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/ljharb/proposal-private-fields-in-in)
- [slides](https://github.com/ljharb/proposal-private-fields-in-in)

JHD: (presents slides)

BFS: I really like this proposal. It doesn’t install a private field. I wanted to call out something that might have been missing. Private getters and setters currently have a similar problem to the try alternative. There's no way to detect errors (???) If someone installed a getter that throws. (???)

JHD: That is a great point, I'll add that to the readme. I’m not sure if that spec text - uses PrivateFieldFind, I’m not sure if it can be used to find a private getter, but that is fine if we want to detect the existence of a private getter. A private method would return true if `#brand` was a private method.

WH: This seems reasonable to me. I am not a fan of having `#brand` being a shorthand for `this.#brand`. On the other hand I can see `#brand` being used to talk about the private field itself in other contexts.

JHD: To me those aren't mutually exclusive, because if private keys became a thing, then that example is exactly how it would be used. If `#brand` was used in other contexts to describe the private key it would still fit with this proposal.

WH: That's my intuition as well.

MM: I support this proposal. I support the in keyword. #foo being a shorthand for this.#foo is something I would like to have happened but at this point I don’t see it happening.
The tradeoff seems good, and I support using #brand for this purpose and forget about the other one. I do want to make the point that even without this proposal a plain #field should *not* be a reified private field by itself.

JHD: If we go in that direction and end up defining some different syntax to refine the private key value. I feel like this proposal would neatly expand to the reified private field Let's say it was @#brand, to come up with an example, you could still say `@#brand in obj` and the semantics would be the same.

MM: I'm simply in favor of this all the way.

JHD: Is there consensus for stage 1 for having this check without the exception?

(silence)

RPR: You have stage 1.
JHD: The second question is if everyone is confident that this is the solution for the problem, and given that I already have the spec test, if it is ok to go for stage 2.

WH: MM, how far along is reification — when might we expect it?

MM: I don’t think reification interacts with this proposal other than competing for the same syntax. If you had `&#brand` and that meant reification then that would just be an expression in that position, and then it would just be the normal `in` operator that we’re used to.

WH: Yes, my point is that if we go in the reification direction then we should have `&#brand in o`.

MM: I don’t agree with that, at that point it is not a new syntactic construct, you are just switching on the meaning of the two objects. You would need to overload “in” based on the value and not the syntax.

WH: What would be the difference between `&#brand in o` and `#brand in o`?

MM: If you say right now `object in object`, it stringifies the object on the left and looks that string up as a property of the object on the right. That’s not what you’d want here, which means you’d have to dynamically switch the meaning of the `in` operator based on whether the left object is a reified private field.

WH: I was assuming that we would do JHD’s semantics where the `in` operator would have special handling for private fields.

JHD: MM, I think what you’re describing is exactly what happened when we added symbols to the language, ToPropertyKey switches on the value dynamically.

MM: I really disagree with this. When we added symbols to the language, symbols are property names. We can have string named properties and symbol named properties. A refied private field is not a property name. It’s a Map-like object. You can certainly add a method to it where you can say `&#brand.has(object)` - that’s actually the perfect way to ask the value of the reified private name.

JHD: It sounds like if #brand became a private symbol. If MM objected to that and the first class representation of a private field was some kind of object and required some kind of first class syntax to summon it, then that value `in object` could perhaps continue to work, and if not, then that’s fine because this syntax could continue to work. I don’t want to derail into debating the reification of private fields.

I want to be sure that people who want it as a feature, don't feel like this proposal would disrupt it.

WH: I like this feature, I don’t want to end up in a state where we have two different ways of doing the same thing using `&#foo in o` and `#foo in o`. On the other hand reification seems like a pie in the sky thing at this point. I don’t want to block on reification to advance this.

JHD: If we reified in the way you’re talking about, there would already be two ways to access the value, one with brackets and one with dots. I think that split is inevitable and my hope is it doesn’t have to take up that much more time in this proposal if you’re okay with it.

JRL: One of the alternatives I suggested is that we could make `#foo.has` a metaproperty, so that #foo is not reified in any way. But calling `#foo.has(object)` would check to see if #foo has the private property ???. I’m curious if that would solve the reification issues here - if we just ignore reification entirely.

JHD: It seems like it might.

DE: I’m all for investigating this solution space. I’m a little uncomfortable with stage 2 because it is a little quick to rule out the private shorthand. And in particular, it’s not listed under stage 1 proposals, but when we took the shorthand out of the private fields proposal it was put into a separate proposal that I had in a personal repository that I thought we had agreed was stage 1 but maybe I was mistaken. I want to make sure that we come to agreement with the proponents of that proposal, specifically YK. Because Stage 2 I think should signify that we are pretty confident that we will go down this path. I want to make sure we have consensus with all the stageholders on that.

JHD: That’s fair. I’m also waiting on a reply from YK. I also feel like the shorthand has come up enough times in plenary with enough people objecting to it that I’m not comfortable that it’s viable anyways, but I’m happy to give more time if there’s more discussion.

DE: I’m happy to come back to this next meeting, I was a proponent of taking out the shorthand but I want to make sure we wait a little bit.

MF: If you are looking for stage 2 today, if you had considered alternatives, and if enough people have seen the proposal.

JHD: That’s a totally fair question, I’ve considered at least one other alternative in the README. I created this proposal during the Hawaii plenary so it's only been in public and on the agenda for two months. I can certainly try and gather more community feedback to be sure. The feeling I’ve gotten from the committee is that there’s not much more to explore but obviously that’s not knowable, so if others have feedback please make it known on Github.

MF: I think that the 2 months plus moving to the TC39 org will have given us enough confidence.

JHD: That's fair.

BSH: I thought we had a discussion in the Feb meeting not to move more than 1 stage in a meeting.

JHD: People have expressed a preference but I was not aware that there was consensus on that being a rule. There is precedence for this, specifically jumping 0 to 2 has happened a number of times, and 1 to 3 a couple of times. I don’t think it would be possible to jump directly to 4.

AKI: I don't recall concluding that we were not going to do it, but I feel like the barrier is from 0-2 is so high, if there are three delegates in the room, if something is going to make that jump, it has to be something we are super confident about what the shape of the solution looks like.

JHD: In particular, the jump to stage 3 is a signal to implementers to start implementing it. So we should be very careful about that. The jump to stage 2 is not nothing, to DE and MF’s points, but the jump to stage 2 is really just that we want to talk about it more. I’ll stick with my stage 1 consensus and come back at the next meeting after collecting feedback hopefully seeking stage 2.

### Conclusion/Resolution

- Consensus reached for Stage 1

## Compartments for Stage 1

Presenter: Bradley Farias (BFS)

- [proposal](https://github.com/bmeck/proposal-compartments)

BFS: (presents proposal)

SYG: So this is not layered on Realms? Or is it? Last I heard it was.

BFS: Technically you don’t need Realms to use this, but I suspect a large variety of use cases would want some combination of both. There is a Github issue where I went through all the use cases, and I discuss where I think that it would make sense to use Realms and where it wouldn't.

SYG: I bring this up because there are existential concerns about the Realms proposal. I asked devs internal to google for their thoughts on Realms, and the reception has been confused where they [think? Don’t think?] Realms provide new security [concerns? Guarantees?] [in?] a sandbox.

BFS: These have use cases without security concerns.

SYG: For stage 1 that's perfectly sufficient.

MM: The Moddable implementation of Compartments is in a single Realm, so it does not have a reified Realms API, so Compartments really is independent of Realms.

MF: Yesterday, we were talking about host hooks in the import.meta discussion, and DE brought up a good point that we shouldn’t just directly expose the host hooks we have in the spec today.
When we proceed with this proposal, we should actually intentionally design how we want to expose the functionality that the host hooks provide. I just wanted to make that suggestion.

BFS: I agree. I don't think we want to do a one-to-one mapping to host hooks because they have some (invariants?) that we can't enforce.

MF: I’d be interested to see how we do that.

YSV: Testing would be a use case where this is useful. Some test libraries have attempted to do this for Date, and sometimes this has been very complex. I'm wondering if there is any request from authors of those test libraries.

BFS: I think there’s a possibility. When mocha tried to move to separate address spaces as it was running things, One of the biggest problems they had was the harness they built (and had had for years) expects to be running in the same address space as tests. So even if you were to design something, part of the problem with userland solutions, you have to create a non-isolated overriding behavior of these APIs and it is really ugly. And I think that’s going to be more fragile than being able to state that the intrinsics are shared in the source texts but the host hooks are not. And that has its own level of complexity that we can discuss.

YSV: Ok, thank you.

GHO: Just to be clear, last time in Hawaii I had a conversation with MM about error handling inside compartments. The idea was to use the Agents that were not defined yet to do error handling. Is it still the idea?

BFS: Currently I am open to alternative suggestions, I think people may have differing opinions about it. If we had zones that exposed error handling, I expect it to exist on the compartment. I can say that much with confidence.

GHO: Thank you.

DE: In addition to agreeing with what MF was saying, I want to voice skepticism to the import now hook. I see you’ve evolved that since previously, I’m not sure what the idea for the module map is, but I think the module system that we have right now - the module hooks and everything - are oriented toward AMD, which makes sense for hosts that load modules from disk or over the network.I understand that it makes sense for hosts with sync module loading. It seems strange to ask hosts that go for this async philosophy to force them to allow loading modules sync.

BFS: We are not forcing you to be able to import things synchronously. The request by TC53 is about the overhead of having to do everything asynchronously, which I believe is a valid concern on the devices they are working on.

The key here is whether we have hosts able to reject the import now but still fulfill the asynchronous import, I believe? If hosts can do one or the other, users can do one or the other as well.I think for the majority of use cases we could talk about making the import now potentially more configurable than the asynchronous import, but it seems important now [?]

I don’t believe we can actually decouple it, unfortunately; it would be a difficulty decoupling to say the least because it means whenever you do an asynchronous import it has to call out to a synchronous import to avoid a race conditional. Getting the underlying stuff coordinating for a module map would be hard. Maybe not impossible, at the very minimum very hard.

GCL: I’m against the importNow thing. In reality hosts don’t do this sync but in the spec it is, we can figure out the spec semantics vs the reality semantics, but I don’t think this is a stage 1 issue.

MAR: My question is more on how we decide which hooks we’re going to have? Could we have hooks for promises, to help monitor async operations? V8 today has a hook for embedders to allow us to do this which provides amazing diagnostics. If we had that on JS it would be amazing. If we could have that in node environments it would be amazing for the language.

BFS: I agree there is some historical complaint on the web side about exposing such a hook. We could reevaluate that if we go discuss it, but it would have to be a coordinated discussion about whether we want it in the language because it would be disabled in a number of environments.

MAR: Sure but if it was less constrained on the compartment it would be a less contentious contentious thing?

BFS: We would need to coordinate with the people who would want to disable it.

MM: We have proposed the Realm API for reifying the realms concept, the Compartment API for reifiying evaluation. Each of these reifications is about a different scope. Most of the host hooks related to promises are in the Agent’s scope. I think we will have an agent proposal, and I think the things that are in the agent scope should be hooks that are exposed by the agent API. In particular, anything that has to do with scheduling jobs should be on the Agent API, it’s not a compartments issue.

MAR: It makes sense, thank you.

DE: I wanted to ask about the full specifier. I really like the change versus the previous presentation, where previously the module map was two level, and that seemed pretty impractical. It seems like here the full specifier is the absolute path after it’s resolved. I assume this would be in terms of getting an absolute path? How are you imagining this working, is there a hook to do the module specifier resolution?

BFS: There is a hook to do module specifier resolution. We have two separate ones because of the current API design. Full specifier is a bit interesting; node tried to do reference-based module maps where the module maps were not keyd off factory strings (be them URLs or anything else). We could not find a way to hook into the GC without leaking memory.
And so we started moving down the path of having htis thing called a FullSpecifier, which is a unique way to reference a module instance - wait. There is the concept here of a static method, which can produce a module instance, WebAssembly just called these modules roughly. So here a full specifier is a way to get a hold of the static module record, is what we’re calling those things that create instances. That’s how you can create a new module instance, otherwise you need a reference to the module namespace. Which is a reified one to one mapping to a module instance. We can discuss this offline. It's very intricate unfortunately

DE: Okay, but were you picturing we would do this refactoring to enforce all hosts have this? Because currently the hooks don’t enforce that. We could do a host hook refactoring. Is that what you were imagining?

BFS: I was not. I was going to layer this on top of the spec host hooks.

DE: That doesn’t make much sense to me.

BFS: If all hosts agreed to move forward with such a refactoring then maybe, but I didn’t want to make all hosts agree on that.

MM: We would prefer that hosts did that, let’s take this proposal as suggesting that hosts do that. This proposal can move forward and into the language without hosts doing that. This has to do with how the user provides hooks for creating new import behavior. The analogy with proxies I think is really good - proxies reify the things we do on objects and turn them into traps on handlers, and that’s essentially what’s going on with host hooks, and the handler traps are designed for the fact that the behavior is provided by JavaScript. It'd be quite different from how the engine implements them internally.

DE: That all makes sense thanks for explaining.

GCL: I think that any hooks we have in the language should be exposed in this API, because that's the level of expressivity you need to virtualize the language.

BFS: I’d be perfectly fine taking that on at stage 2, we can see what needs to be refactored in the spec.

MM: That is a goal of this proposal. That’s why I presented last time on Preserving Host Virtualizability. We really do to make it the case that any host can emulate any other host.

GCL: I just wanted to be very careful because BFS said something about layering, I just wanted to make sure we’re not having different hooks or hooks exposed differently.

BFS: The concern with layering is about what we would make to make an import map extension to ecma262. If we tried to remove it from ECMA262 it would be ??? for TC53 in such a way that it doesn’t ??? our use for promise values.

SYG: This is not a stage 1 blocker, but as it moves forward I think the implementability of it is not entirely clear on a hook-by-hook basis. If the current implementation is implemented in such a way that it's not easy to invoke a host hook, then... You are asking to make a bunch of things that are not observable now observable if you make compartments.

BFS: That’s not necessarily true. I think that’s true of this rough draft design. Some of these may actually be static values where we expose the ability to ??? at runtime.

SYG: I see. Like I said it’s not a stage 1 concern, but as we go forward it’s something we should watch out for.

BFS: I think this will be an effort.

MM: Clearly we are looking forward to having conversations with you and other implementers to explore the implementability of this.

DE: In the previous meeting we had a presentation on SES that had a compartment API. Has that API been moved here?

BFS: The presumption from the Realms call is that we can extract it if we move forward with SES. That would decouple it from some of the concerns people have with this being tied to a security concern.

MM: The compartments here satisfy more use cases with SES that are needed even without SES, they are now independent from SES.

BFS: Stage 1?

(silence)

BFS: Help! Anybody! Especially from implementation concerns.

SYG: I’d be happy to answer questions but I don’t have the cycles to proactively design this.

BFS: That’s perfect, thank you.

### Conclusion/Resolution

- Consensus reached for Compartments to Stage 1.

## Intl.NumberFormat v3 for Stage 1

Presenter: Shane F. Carr (SFC)

- [proposal](https://github.com/sffc/proposal-intl-numberformat-v3)
- [slides](https://docs.google.com/presentation/d/1PfHLoMiiM-U4AtqhSo0H_mJeul3I53rFjtELT4uVp4I/edit)

SFC: (presents slides)

WH: What does `"min2"` do for one million? Is it `1000,000` or `1,000,000`?

SFC: It will show the grouping separator (`1,000,000`). It only affects 1000-9999

SFC: (returns to slides)

SFC: Stage 1?

(silence)

AKI: I’m over here marveling on IRC because every time anything from Intl comes before committee, there are no questions and everyone’s happy with it. Just marveling.

(silence)

RPR: No objections. You have stage 1.

### Conclusion/Resolution

- Consensus reached for Intl.NumberFormat V3 for Stage 1.

## import.meta for Stage 4 ([continued from previous day](https://github.com/tc39/notes/blob/master/meetings/2020-03/march-31.md#importmeta-for-stage-4))

Presenter: Gus Caplan (GCL) and Myles Borins (MBS)

- [PR](https://github.com/tc39/ecma262/pull/1892)
- [slides](https://docs.google.com/presentation/d/1dXono-H8VjmihAM9bel1RuPvHoSFOqRZ-WprVWUQ3EI/edit#slide=id.p)

GCL: I'd like to move to Stage 4 with just the one host hook, if we can get consensus on that.

MBS: I followed up with Domenic today about this, to make sure we had insight from the original champion.

JHD: My preference would be that - when you said it’s ok to iterate during stage 4, it’s ok to talk about now or after it lands?

MBS: Technically both. I raised the concern with him that making a change like this while landing at stage 4 was out of line, but he thought it was fine to make this change before landing stage 4.

JHD: The thing is that this was not prompted by layering concerns, this was prompted by editorial concerns about layering hooks.

MBS: He said both editorial or layering reasons were good reasons to make this change.

JHD: My preference would be to land the changes now and pursue later. My sensibilities are that I do not give a lot of weight to a lot vs fewer hooks as much as I give weight to less powerful hooks. So far everything I have heard is that it is very criticial to be able to freeze the objhect and be able to supply values, But the finalized hook is kind of a god-hook - it seems like almost all of them aren't needed. I would prefer to wait for hosts who need it and then add the ability. It doesn’t feel necessary to disrupt stage 4 advancement. Separately, the queue item I had the other day was that if we have too many hooks then we have to expose them on compartments, but compartments isn’t that far along anyways.

GCL: It sounds like we are gonna have a big hook reshuffling anyway with compartments.

JHD: My preference is to leave them as it is. I think it’s reasonable to optimize both for having fewer hooks and minimally powerful hooks, while not instructing engines in any way. If hosts need an ability they should have at, on a case by case basis. It doesn’t seem like the powerful hook is fully motivated.

GCL: To clarify, you’re saying you’re not blocking this landing as it’s written.

JHD: Yes, I think it should land as it’s written and then defer hook reshuffling to a separate topic at a different meeting.

SYG: I do prefer that we land this as is - instead of going to a single host hook. To what JHD said, you said you would prefer to add the minimally powerful thing now, and then if hosts need it later add it. Is that possible? That would require a more careful auditing. My understanding is that if we go with a less powerful hook in the beginning, it's the same as any other web compat question. If we want to add more powerful host hooks, someone has to do the legwork to see if it breaks things.

JHD: Totally, my understanding is that the web reality of this is going to impact here, XS is the only one using the powerful hook, they are only using it to freeze. The web may have implemented the hook but they are only setting data properties.And if that understanding is incorrect, cool, I don’t want to break anyone, but it seems like the less powerful hook and a boolean indicating whether or not it’s frozen covers everyone’s use cases. So I’d like to explore that without needlessly slowing down the stage 4 process.

SYG: I think we should go for stage 4 as is, but for host hooks I don’t think we should design for ???. Part of the point of the host hook is that we don’t know exactly what hosts need. I don’t think because we can enumerate use cases today, that we should over index to those use cases. It would be more ??? to enumerate the use cases today to preclude a more powerful hook.

MBS: SYG, do you think it’s reasonable to land things exactly as they are and then explore this as part of the general hooks re-evaluation so as to not rush anything?

SYG: Yes, I don’t think we should change this. Especially since changing this now requires an upstream change in HTML. And if the only reason we want to do this is layering concerns, not behavior concerns, I think we should go with status quo.

MBS: GCL, are you happy moving forward with that?

GCL: Yeah.

MBS: To the other editors, do you have concerns with that?

MF: I would prefer to move the proposal to stage 4 before changing it.

GCL: Stage 4?

KG: Can we be clear with the exact variant that’s up for stage 4?

GCL: As is currently in the PR, with both hooks.

KG: Thank you.

GCL: Stage 4?

(silence)

MBS: You have stage 4.

MBS: Are there concerns with having this in the 2020 spec? Editors?

JHD: Given that the vote hasn’t happened, I think that would be deferred until the vote.

MF: Do you think we will be able to integrate tonight?

JHD: It’s up to the editor group.

MBS: Wanted to make sure before tomorrow.

MLS: We usually do things by Jan.

JHD: Sure, but we usually leave time for the editor to cut the spec before the opt-out period, but given that we delayed that, we could leave this until 2021.

MLS: I don’t feel strongly.

DRR: Is that the typical approach?As long as the spec for a certain year isn't nailed down, does that mean that we can add a feature that hits stage 4 if people feel comfortable with it?

JHD: Historically, the feature set is fixed in Jan of that year. However it is a moving standard so as soon as it hits master it is in the language. Generally the committee’s consensus is about whether it is in the language not which edition it should appear.
We do approve the spec and have an opt-out period, but that’s less about wanting certain features in whatever year, and more about are we comfortable with the spec and the opt-out period would indicate that. Stage 4 would hopefully give that for a given feature.

MBS: import.meta has been in stage 3 for a while, and is much more mature than the average.
I think it’s perfectly fine for this to be pushed off to 2021 if it’s going to put voting on the spec at risk. I don't want to push for this if it's at all going to put voting on the spec at risk. It seemed like in fairness to the way in which it is shipping. It seems appropriate to include it in the spec because of that but not at the risk of putting our traditions at risk.

DRR: I just want to know because for our compiler, and we have ES versions we can target. For my own understanding that’s really helpful, thanks.

MBS: The chair team and the editor team have been talking about this process, and the hope would be after we get through this meeting and the 2020 spec we would make better documentation about this process to ensure that we have clear times and clear process about when the spec can be relied on. This has been tribal knowledge, and that’s part of why things were delayed this year, so we wanted to make sure that it’s clearly documented and followed with good intent in future iterations of the spec.

DRR: Thanks.

### Conclusion/Resolution

- Consensus to move import.meta to Stage 4, as is currently in the PR.

## Return of Surrogate pairs in RegExp capture group names

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/ecma262/pull/1869)
- [slides](https://docs.google.com/presentation/d/1pKvUGkTcS5YkCqhJAlr093twy0RKtEmdoN6AGvpbP3Q/edit)

KG: (presents slides)

MPC: You mentioned in passing that it is impossible to be consistent with Identifier.I thought from yesterday that was still open, can you clarify it?

KG: If we decide that this `/(?<\u…\u.../>.)/` form is definitely legal, then it is impossible for group names to be consistent with identifier across the board, because this form is not legal in identifiers currently. If it is legal here in this regular expression, the goal with consistency with Identifier.

MPC: But the consistency is still contingent on our decision in that case?

KG: Yes.

MPC: I think we should at least solicit input from Intl and 402 folks, for what people writing code that involves these things need or want. It didn't seem to me that was a represented point of view in the discussion yesterday.

KG: My experience is that people don’t write unicode escape sequences by hand in identifiers.

WH: I concur with KG’s choices. The tooling argument dominates. Symmetry also points towards these choices, because symmetry within regular expressions is more important than symmetry with identifiers. If you break symmetry within regex, it becomes hard to remember to which kind of unicode escapes you need within one part of a regex vs. another. You also have symmetry with strings. Symmetry between regexps and other tokens is broken in all kinds of ways. For example in a RegExp you can put `2` in curlies to make a repeat count `/x{2}/`, but you cannot put `2.0` there and have it do the same thing, even though both `2` and `2.0` are the same number token. Regular expressions are not like these other tokens.

MPC: While all of those examples are true, I think it's subjective that consistency within regexp is more important. Intuitively, at a base level, I would expect this thing to behave like an identifier. It is reasonable to expect that this `/(?<\u…\u.../>.)/` thing behaves like an identifier.

WH: I stand by my position. In the interest of time I don't want to digress to debating the relative importances of symmetries. If we want to fix the symmetry between regexes, strings, and identifiers, we could expand identifier token escape syntax to allow surrogate pairs, but that would be a different proposal.

KG: Before we get more into this particular topic, I don’t want to resolve the question of which kind of symmetry is more important. My hope is that the other arguments outweigh the symmetry goals.

WH: We should not side track into a meta discussion about symmetries.

SFC: Wearing my Unicode hat, I think that non-Unicode regexps are bad, and shouldn't be used. In 2020 users should use Unicode regexps. So designing around the idea of symmetry within a non-unicode regular expression is something that I think we shouldn’t be worried about. You can feel free to disagree with that.

SFC: My next entry, one valid interpretation of this is to see what’s inside the angle brackets is similar to `${}`. And I can see better today than yesterday that there is something to be said for just parsing the whole regular expression using the same lexer. We shouldn’t have to in this particular case go into a different grammar. The regular expression grammar could be self-consistent. I just want to make sure it’s explicit that if we do go with KG’s proposal, we’re doing so because we desire this aspect that the entire regexp is able to be parsed using the same grammar.

KG: The way I would say is that my desire is to make tooling simpler, not just in that particular way; I’m making this choice because I think that’s a worthy goal even at the potential cost of other types of symmetry.

SFC: MPC asked what do the unicode people think about this? So here’s my response wearing my unicode hat: surrogate pair escape sequences are bad and we should try to avoid them whenever we can. It’s unfortunate that they’re already used in non-unicode regexes. It’s unfortunate that non-unicode regexes even exist. From a unicode point of view this is not the most desirable outcome. I’m wearing that hat, that aspect may not rise to the same level of some of the other goals, but that would be from the unicode perspective.

KG: I agree it's desirable to avoid exposing surrogate pairs, but I think in this case there are other goals that outweigh that cost. Especially because I think this is a place where I think very few users will end up exposed to surrogate pairs.

BFS: I’m curious, it’s not possible to have a lone surrogate without a pair in this context, does that affect your opinion at all? One of the main concerns with surrogate pairs is that you can have half a surrogate pair.

SFC: Half a surrogate pair is an unfortunate problem that allowing any surrogate pairs introduces.

BFS: They're not possible in this context?

SFC: If they're not possible in this context, that's another inconsistency with JS strings where you can have an unpaired surrogate. It’s not really consistent with anything but if it is self consistent with a non-unicode regex that is something we can say. Does it change opinion, no.

RGN: I want to point out that lone surrogates are possible. They’re thrown out by checking what’s a valid group name, but they’re certainly possible.

KG: The spec could be phrased in such a way that they are possible but rejected as an early error. But from a user’s point of view that doesn’t really come up.

RGN: They’re possible in the same way that a group name of 0 is possible, but not permitted.

MLS: I’m gonna respond to the prior thing first. The syntax allows a single escape which can be a surrogate but doesn’t have to be a surrogate half. It is completely legal. It just has to be an identifier start or continue. I want to thank KG for his quick response, I support this. I'm the one person he talked to who is in favour of allowing `/(?<\u{...}>)./`. The whole reason is that if I do write an escape, I want to write it with the curly brace format because I don’t want to find out what the first and second surrogates are - that’s the same way I’m going to use the identifier. I’m going to make a weak push for this, but not willing to die on this hill.

SFC: I think that - I appreciate the work that KG has done here laying out the pros and cons. These slides really do capture the debates we have been having; I appreciate that. I feel very comfortable that the committee understands the upsides and downsides of what KG has put forth here and is making a conscious decision, so I think it’s perfectly reasonable if the committee reaches a decision that the concerns that I and others raised yesterday are outweighed by other concerns.

MPC: I agree with MLS, re. `/(?<\u{...}>./`, having a weak preference.

KG: Sounds like opinions are about evenly split, anyone else?

WH: I’m neutral. I’m happy with keeping what is on the slide now, if people want that.

BFS: I have a slight preference for allowing `/(?<\u{...}>./` because it seems like we should be encouraging it in more locations.

KG: Ok. I am leaning towards this is legal too. Unless anyone has strong feelings.

RGN: Strong opinions against making it legal.

SFC: I have preferences for allowing it, wearing my unicode hat.

KG: I’m asking for consensus on making all of these [see ‘Open questions’ slide] legal, despite concerns from RGN.

### Conclusion/Resolution

- Consensus that both kinds of escape sequences in both kinds of regular expression, as well as unescaped identifier characters even outside BMP, will be legal and will be included in the 2020 cut of the spec.
- `/(?<\ud835\udc9c>.)/` will be legal
- `/(?<\ud835\udc9c>.)/u` will be legal
- `/(?<\u{1d49c}>.)/` will be legal
- `/(?<\u{1d49c}>.)/u` will be legal
- `/(?<𝒜>.)/` and `/(?<𝒜>.)/u` will be legal

## engine262

Presenter: Gus Caplan (GCL)

- [website](https://engine262.js.org/)
- [slides](https://docs.google.com/presentation/d/1lxX20voV2RuZE6QtlawShfznXtq8-yEMvXRucE_oyYk/edit?usp=sharing)

GCL: (presents slides) , (presents live coding demo of function.sent implementation)

MM: First, this is great work. It’s very much like what you would do if you were trying to write an executable specification, the difference being that you’re writing it in the same language. I was wondering, there is a similar project, JS-Cert at Inria. AS and PG have presented on that at TC39. They are doing an executable specification in an ML like language on top of Coq. It’s essentially an executable spec for js. It’s parallels reading the spec line by line. Have you had any contact with them? I would encourage you.

GCL: I have looked at that, I find it very interesting, especially the static analysis you get from it being implemented in an ML language. For me, the reason I wanted to do this as a separate thing is really the fast prototyping. For me, ML languages are some alien script, I can’t read them, they don’t make sense to me. I think to a lot of people who are working on JavaScript, working in a different language is difficult. So I think there’s a hole to be filled there.

MM: First of all, I'm completely on board with doing this in JavaScript. One question that this raises immediately, in doing it in JS, the interpreter itself uses a very small part of the JS language, essentially like ML. I’m wondering, have you tried to characterize the subset of javascript the interpreter itself is written in, any whether that subset itself is a good target for formalization, such that you can then indirectly formalize the language via the interpreter.

GCL: I haven’t explicitly thought about that, that’s very interesting. I think that’d be a fun project but I haven’t done anything in that direction.

MPC: This is just awesome. This is super impressive and cool and I want it now.

JRL: I tried inserting a debugger statement, and it did not work. You should add a debugger statement.

GCL: Where did you add the debugger statement? The engine262 source code or the code it was evaluating?

JRL: The code that was evaluating. I kind of expected it to break within the evaluation so I could step through the spec at that location.

GCL: Right now, we have these host hooks, and I agree that we should do something interesting with the debugger statement, but right now that just calls out to some host-defined option if it’s available. You could theoretically bring in your own behavior. I’ll look into doing something like that in the web UI, that’d be cool.

RGN: In love with this. Where would be a good place to start contributing?

GCL: (github.com/engine262/engine262) I have opened several big general issues on the engine262 Github, so working on those issues - a lot of these are incremental things. The number thing is just implementing a number of things on the Number prototype, things like stringification, etc. There are a billion math methods that all have to be implemented. If you are not into implementing the core stuff, there are proposals that I haven’t gotten to yet. As long as they have spec text they are a target for implementation.

RGN: Sounds good, thanks.

WH: I’m impressed that you were able to do a live demo. I’m curious - you said that you use this to validate things - how does parsing work? Do you try various possibilities until you hit something or exhaust all possibilities, or what?

GCL: Exhaustively proving that the parser will not parse invalid syntax is not something I’ve tried to validate. I’m interested in adding some sort of formal verification that the parser is parsing what it should.

WH: If some part of the spec lets you parse the same token sequence in multiple different ways, you just pick one?

GCL: At the moment it is just what acorn chose, which is what babel chose.

WH: Ok.

GCL: There’s definitely improvements to be made there.

MF: [doorbell rings] So how much of the underlying host engine have you chosen to rely on?

GCL: For the most part, the goal is to find a way to do it from first principals, there are some places where it isn’t easy enough to pursue. We haven’t implemented IEEE 754. We do implement the algorithms in 262 which specify their own behavior for number operations, but like we don’t perform an IEEE 754 number addition in JS, we just call `a + b`. For the most part, things should be implemented from first principles. Big int is something that we can implement without relying on the host's implementation of BigInt. I haven’t had the time to make a BigInt implementation.

MF: So for objects and arrays, you are representing them using objects underneath but aren’t using the host operations.

GCL: When the spec talks about adding something to a List, we use a host Array. When it talks about adding a property to an object, we use Map… we aren’t reimplementing HashMap.

RPR: We are at time. Now a message from the editors on where we are for 2020.

KG: Editor group is planning on landing a fixed pr with my changes regarding unicode escapes in regular expression capture groups, and import.meta as well. Both of those should happen tonight. And then we will say that is the version of the specification we are presenting to the committee for 2020 to begin the IPR opt out. We will have the formal vote tomorrow.

RPR: Thanks KG.
