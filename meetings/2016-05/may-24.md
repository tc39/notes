# May 24, 2016 Meeting Notes
-----

Brian Terlson (BT), Dave Herman (DH), Michael Ficarra (MF), Jordan Harband (JHD), Waldemar Horwat (WH), Tim Disney (TD), Shu-yu Guo (SYG), Mark S. Miller (MM), Kevin Smith (KS), Michael Saboff (MLS), Eric Faust (EFT), Chip Morningstar (CM), Daniel Ehrenberg (DE), Leo Balter (LEO), Yehuda Katz (YK), Jafar Husain (JH), Andreas Rossberg (ARB), Ben Smith (BS), Thomas Wood (TWD), Alan Schmitt (AS), Brad Nelson (BNN), István Sebestyén (IS), John Neumann (JN), Domenic Denicola (DD), Jeff Morrison (JM), Louis Lafreniere (LL, via Hangouts, part-time), Dean Tribble (DT, via Hangouts, part-time)

-----

## Attendee Update

In the morning we've had 22 Face-to-face participants but Hangouts is not switched on yet.

After 11:00 the Hangouts was on:

- Louis Lafreniere (LL) from Microsoft Redmond.
- Dean Tribble [tribble@e-dean.com] also joined part-time

From Google local experts as observers: Hannes Payer, Jakob Kummerow, Ross McIlroy, Michael Hablich, Yang Guo, Toon Verwaest, Daniel Clifford, Nikolaos Papaspyrou, Jaroslav Sevcik, Deepti Sharma (all part-time)

## [Always update object properties if property descriptor is applicable (NaN issue)](https://github.com/tc39/ecma262/pull/353) (DE)

DH: Summarizing issue:

In order to be able to talk about a bit pattern of NaN in a reliable way we need to know where canonicalization. Canonicalization is a chaotic operation. In order to reliably predict the bit pattern of a NaN, we need to know all the places we can go from a known bit pattern to an unknown bit pattern.

YK: If you would like to assert that if you write a NaN and want to read the same NaN back...?

DH: Every place where data is transferred through the semantics you have a source and a sink, anywhere where data is flowing, if you have an input that is a bit pattern and there are one or more outputs or ways to read the outputs the output operations need to know you have the same bit pattern as input.

WH: Storing into a variable is not of those things. Storing into a variable does change the bit pattern.

DH: We need to enumerate this. IS the only place we allow canonicalization is reading/writing from a float64array

DE: More pedantically: per 754, the NaN payload is unspecified so it's not canonicalization in that sense.

DH: Plus does not guarantee any of its inputs. It's making a new value. Anywhere a new value is created out of thin air we can simply say it's allowed to pick a bit pattern. A sensible way to spec this is every NaN value carries with it a bit value.

ARB: I don't think that's true ?

DH: We need to enumerate the places where a value is passed into an operation and is required to be preserved. We can say we have these traces where bit patterns are stable, but otherwise NaN is completely unpredictable.

WH: An implementation that does NaN-boxing must have canonicalization on every possible path between bit patterns and variables. If it contains a path that doesn't normalize NaNs, then it's buggy. Thus in some sense it's moot where canonicalization happens — its exact location (whether on reading from a typed array vs. later on storing to a variable or passing as an operand) should be unobservable on a non-buggy implementation.

YK: Are you saying you want canonicalization allowed at any point in the system?

WH: There must be a canonicalization somewhere in every possible path between arbitrary bit patterns and variable storage....

YK: There is only two places where this can happen. The fact that there is a canonicalization for something like the plus operator doesn't mean we have to spec it.

DH: Comes down to this: you can think of NaNs as having one extra bit for whether its trusted. If an impl wants to allow an untrusted NaN in variable storage to flow through the program, then we need to disallow canonicalization. But we don't want this. We want to canonicalization in places where we can get an untrusted NaN.

DE: Can we scope this issue to the PR?

YK: In the absence of explaining what is appneing with the untrusted NaN in the first place, the change is not saying anything.

DE: I would be ok with waiting on andre bargull's PR until we have time to address the NaN canonicalization, but since we don't have spec text we don't know what is being proposed....

WH: SIMD doesn't do canonicalization.

DH: We were trying to propose that two different implementation strats were valid. We want to understand how both these strats should work.Non-determinism is sufficiently tricky topic that we should try to understand it. Fine to accept the PR but it's worth rying to understand it. We have enumerated 3 of 4 places where untrusted NaN's can flow in.

YK: In the absence of nailing down the trusted and untrusted NaN thing, we can't nail down what the PR is saying.

DH: Technically true. But we want to unblock v8 from doing the improvement they want to do. But I worry. We think it should hang together but we don't know. We should do the work.

YK: I think trusted vs. untrusted semantic is pretty close to what we want....

DH: I Don't think you want trusted vs. untrusted in the impl, it's a model of the implementation that allows us to think about it. Spec shouldn't talk about an untrusted bit for NaN.

DH: Canonicalization exists because a NaN might look a pointer.

WH: You could make an implementation where canonicalization happens when reading into a typed array or storing in a variable or passing as an operand and they would be indistinguishable
DH: The job we have here is to define the spec. Spec is incoherent. We can draw no conclusions (or any conclusions)/

WH: Spec was written with the conscious decision that NaN's were indistinguishable...

DH: That was 7 years ago. Ship has sailed. Says in one place that NaN's are indistinguishable, and says they are distinguishable in other places.

DH: We can reason from spec or reason from implementation. Impls are OSS, if you can know where all the canonicalization occurs, you can simply avoid them.

WH: There are so many of these places you might not be able to avoid them.

YK: If an impl is required to canonicalize in these places, WH is correct. But we're not saying that.

DH: The spec doesn't give us the answer to this question of when you can canonicalize because the spec doesn't say when you can canonicalize.

MM: The important point is that every point we don't state you are allowed to canonicalize that we are demanding you are not allowed to canonicalize.

DH: Right, Dan suggests that each NaN value carries with it a bit pattern. And unless otherwise explicitly stated, that bit pattern remains consistent as it flows through the system, and there are a fully enumerated set of places canonicalization can happen. We should define those points. There are Math operations. Synthesized NaN values out of the blue === they can choose whatever bit pattern. There is reading from a float32Array or float64Array. SIMD.

WH: The spec says that there is only one NaN value. We have had this discussion before and the solution that we reached when we introduced TypedArrays, we don't say what bit pattern you get when you write a NaN into a typed array.

MM: I remember doing that, but it was in a later meeting that we were talked out of that and instead we were talked into the position that SameValue is no longer a test that NaNs are the same value but it's an equivalence class such that all the NaN values are in an equivalence class but a particular NaN value is preserved.

WH: This doesn't seem well-defined so I'm not sure what that means... It won't be coherent. Then you have to define in the spec where you preserve the value or not. It's infeasible where you start introducing stuff like sort or other higher order algorithms since those algorithms rely on SameValue being identity. For example, for a set, if you insert a NaN into a set, is it the same NaN or not?

DH: That's just reality. TA's allow you to distinguish NaN.

MM: Sets are a great example because sets already use a larger equivalence class (SameValueZero), and set semantics are trying to be deterministic. +/- zero are distinguishable in the language, but sets treat them as equal, so is using a larger equivalence class.

MM: Two successive observations of a value across steps that just shuttle along a value should not observe different bit patterns.

YK: I agree with this invariant and we should specify it. You are just saying a more rigorous version of what I am saying. People assume it is true, so we should specify it. In the absence of having said what you suggest the point is moot.

WH: This is incoherent in the case of idempotent canonicalization. It's unobservable.

MM: Reading a bit pattern into a number, I'm expecting to allow the implementation to create any bit pattern it wants. It's not subject to the rules that I've described. Reading a variable is a place where I want to preserve identity.

WH: How would you observe the canonicalization of storing one variable into another? It would be shadowed

MM: Take a NaN value, serialize to a bit pattern, remember said bit pattern, then take that variable, pass it as a parameter, store it to another variable, do all these other opaque steps of conveyance, then we serialize it again. If the two bit patterns are different, then this demonstrates that an implementation fails to conform to what I want.

WH: it would be good to always canonicalize. On the other hand it may be the case that your arithmetic primitives might produce a new NaN value.

MM: I am perfectl yhappy to say that unserializing a bit pattern into a NaN may give us a different NaN. Not willing to have conveyance steps produce a new NaN.

WH: If you read it into a typed array and write it into a typed array, you might get a different bit pattern.

MM: That's fine. When you usserialize a NaN you can get whatever bit pattern.

DH: PR is good. As long as we all agree we want to specify that NaNs carry a bit pattern with them and is by default stable and we want to enumerate places we can do canonicalization.

MM: It's not an issue of canonicalization. We want to let them use a different bit pattern.

DH: Agree. Canonicalization is the wrong word.

DE: Volunteers to write spec text about how NaN's flow. Also known as "scrambling semantics".

WH: MM's proposal would preclude important optimizations for implementations that do partial NaN-boxing. Example:

    `f64 → v → f64`  // Copy an f64 from one place to another in a typed array

    We want to be able to do this without canonicalization or scrambling or NaN-boxing conditionals

    But now if someone copies `v → w → f64`, the implementation might want to fall back to NaN-boxing and store a canonicalized value into w.

MM: Yes, optimizations like that would be precluded.

DE: Don't want to preclude optimizations

## Syntactic Tail Calls (BT)

BT: Summary of existing PTC issues: elided of Error.stack frames, lack of obvious developer intent for tail calls, (see details in proposal).

[_discussion about syntax_]

YK: let's discuss syntax after we've agreed to do STC

BT: this is the gist of the proposal: continue in expression context; static semantics that leverage existing "is in tail call" spec semantics to precisely define the places where you can make a tail call. Thus, you get a syntax error if you try to make an invalid tail call. `return continue` is the easiest option/smallest modification to the grammar we've thought of. We also considered `return.tail` or similar.

[_reminder to ignore any statements about specific syntax, for now_]

CM: rephrase: STC allows the programmer to mark specific calls that are in tail position, to convey intention and desire for PTC, and the implementation is required to apply PTC. If they omit the affordance, the implementation can still choose to apply PTC, or not. Simply to provide a marker of programmer intention which impls must honor, and relax the requirement where unmarked?

BT: correct.

ARB: worth noting that v8 has an implementation of this (only PTC is in Canary with "experimental JS" flag, command line flag is required for STC)

YK: I dont understand why we ... . It seems like there is a coupling of the relaxing of the PTC feature with the STC feature, this concerns me.

DH: we were concerned about honoring the consensus process and not lightly pulling things back that were already in the spec. Instead of pulling back PTC for some "future STC", we wanted a concrete STC approach first. Maybe at some point it makes sense to separate them.

YK: Are you proposing stage 0 today or stage 1?

??: It was already moved to stage 0 at last meeting.

BT: I think this proposal is good for stage 1.

YK: To whatever extent consensus requires for stage 0, I think this does not exist yet. I don't like that we're trying to bus relaxing PTC with STC. STC needs to be considered on its own merits. My positions on PTC and STC are unrelated.

ARB: I don't think it makes sense to discuss these things in separation. I think the right way to look at this is as an erratum to ES6.

DH: I would never be ok with new syntax as an erratum. New syntax is a high bar.

YK: I don't think STC is strictly better than PTC. I don't think it has strictly less problems than PTC.

DH/ARB: I don't think anyone thinks that.

DH: PTC is one option, STC is one option, and none of the above is on the table.

MLS: Another option is that PTC and STC can coexist.

YK: Status quo of reality is none of the above, but there are real world requirements for it.

ARB: V8 is blocked on decision from this committee to ship.

YK: PTC/STC or none of the above? If none, there's nothing to ship.

ARB: I don't think there will be consensus for such an option.

MLS: Can we eliminate no tail calls?

DE: it may be that we're not settled on a particular syntax for STC, but that we really see the disadvantages for PTC. v8 is not announcing any particular shipping plans - we want to consider the entirety of this discussion - and we're eager to see consensus.

YK: I think this claim misses the empirical story. STC requires consensus. In the absense of STC , if any implementation refuse to ship PTC, then reality is that essentially no web reality for PTC.

MLS: I did not sense that this is the case.

ARB: We want a decision, whatever the decision is.

DH: I agree to the consensus to accept PTC, but I don't accept the requirement to ship PTC.

YK: some implementations are refusing to ship PTC. If vendors agree to ship PTC then this would change my view.

DE: If there were a broad consideration from the committee that we don't want PTC then implementations would take that into account.

YK: How does Microsoft feel about PTC?

EFT: There is a war on between implementers over spec compliance.

YK: Pragmatically is is true that implementers can just not implement the features.

CM: Is anyone advocating none of the above?

YK: I have more concerns about STC than PTC.

YK: Stack traces are a problem, it affects analytics, you can try hard to use PTC but not get feedback from it. Concerned that can make mistakes with it but not know.

DE: Is Error.stack used by glimmer?

DE: What would be the impact of missing stack frames?

YK: I think the problem with Error.stack is about analytics tools that are expecting to inspect the entire stack, and they get confused by missing stack frames.

YK: Ruby has PTC, but off by default, which I'm happy with. I am allowed to champion none of the above. I'll have trouble. I'm persuadable on STC, but don't want S0/S1 STC to means S4, which I think some people want. I want to be able to object to S2.

BT: Thread on Github: https://github.com/Microsoft/ChakraCore/issues/796

On x64, we currently use windows ABI, has some constraints, if we do not relax them, we wouldn't be able to implement this feature faithfully. We can't grow stack frames, if we can't we have to use call to increase size of stack and there's a pathological case of argument number growth and run out of stack space.

From a perf standpoint, perf would not be better as JSC has found, maybe slightly worse. You could change callling conventions, but louis can say more about that?

MLS: How does STC solve your problem?

BT: it doesnt, but scopes problem to specifically one case.

YK: In the sense you're not able to implement PTC then you're not able to implement STC.

DE: One strategy is to implement a large stack frame to allow for it to grow. An intervening return will give more stack space anyway.

MLS: It's the same thing as "is in tail call position".

DE: Explicit tail calls don't exist in existing code that don't intend to recieve a tail call. So you can do more risky things.

BT: I'm not sure your implementation strategy would work in the progressively growing stack trace.

DE:: How do yoy know what's big enough. JIT? You can always construct programs to progressively abuse larger stack frames.

MM: Would you expect to faithfully implement STC?

BT: Potentially not, but It changes the tradeoffs

DH: I've just transiitoned closer to the none of the above option.

MM: I really don't want to transition to yet another consensus that we don't implement.
If you can state the way you're not expecting to implement the feature faithfully, please put it into the proposed spec.

DE: I don't think there's any implementation that passes 100% of Test262 performance tests for PTC.

MM: we don't go into the process of proposing things we don't expect to implement.

DH: We started with the aim to give some perf/space guarantees, but then we decided that's not going to work so we decided to give a syntactic guarantee, but now we've decided we don't want to give that gurantee?

BT: I want to give the guarantee.

MLS: We should not consider proposal that we don't want to implement.

EFT: But we can't faithfully implement what we've got.

BT: Our x64 implementation can't grow our stack frames due to the Windows ABI. Performance is not good, and syntax help in that case.

LL: The main thing on perf is the only case it could be a perf win is tail recursive case, in all others we have to check a call is a jump to a function with a jump to callback(?) need a test at the bottom for parameter count. In terms of stack space, if calling out with same number or less then fine, but more will cause break, no way to change return address of caller , breaks unwinding mechanism of window. Rely heavily for excp handling , stack locks(?), telemetry etc.

SYG: is it the windows stack unwinder? The stack that is outside the scope of JS?

LL: Yes, windows stack walker, we follow the ABI for telemetry, the windows stack walker. There's also downsides in code size, because we don't know # parameters, we have to handle this every time there's a tail call.

YK: Is this the same thing as saying we're requiring all JS impls to have their own stack unwinding mechanism? If the windows team says they're willing to change their implementation, then it'll just be future implementations.

DE: I think it's relatively hard to change an ABI that is used by many compiled programs. Are there are more implementation issues that may be interesting to us?

LL: No.

DE: How might STC change this?

LL: it does not remove the problem, but it helps a bit. We could allocate some stack space when we see a tail call, and allocate less than required by frames.

DE: Spec guranrtees asymptotic stack size, so provided the bounds of the growth are better than linear, then it's reasonable.

MM: if there is no asymptot that is approached, it is not compliant.

MLS: Log growth is not spec compliant, but not useful for the sorts of programs this is intended.

SYG: for the spec, there is no such thing as half compliance.

DH: has a programmer, are you going to use these features that sometimes work, or will you fall back to a loop?

SYG: It is useless to talk about anything with space, the spec assumes infinite stack space, is this a well defined spec question?

DH: Perfect is the enemy of the good. Literature on this requires a complete cost model with a lots of complex formal semantics detail. We don't want this in ECMA-262, too complex. We can specify this morally. We don't have to be mathematical here.

MLS: if the spec is written in such a way that recursion can continue indefinitely and Chakra cannot do it, then it is not compliant.

DH: I agree, there has to be human judgement to do this.

YK: The alternatives are manual versions of the same thing, stack data structure or tramoline, these things have guaranteed space. I would be happy if these data structures are specced then I would be happy with STC over the engine's choice.

ARB: Those space gurantees don't apply to the general case.

YK: Once  I notice I have unbounded input, I do a data structure version of the same problem. In all cases, I do know the cost model. I do not understand the cost model of PTC.

DE: We heard last tinme that tail calls are hard to implement from SG and Eric, this would be good to recap. (Cross-realm)
SYG: we reached consensus on this

MLS: A cross realm growth for the stack is fine.

YK: I assume it is not the case you can observe something from the same realm.

MM: By construction you can.

YK: what guarantees am I getting from the implementation?

MM: if you call something that allocates stack, that itself make a tail call, altogether there is allocation even if I tail call that.

YK: If i write mutually recursive code, and someone reogranises my code so that some of my functions now in different realm?

MM: This becomes no longer a tail call.

MLS: if it's cross realm, it's not tail call and it's fine.

YK: Manual techniques vs tail calls, manual are easy to gurantee the cases TC less easy.

MM: Over cross realms, it is possible to cross a membrane boundry, the fact it is no longer asymptotic space, it is not a problem?

YK: What is surprising is that if you write a program is TR, and a membrane is introduced is is unsurprising . You need to consider whether someone can introduce a membrane.

EFT: the difference between proxies and cross-realm is that membranes are actively inserted

YK: Given the options, the fact that introducing a membrane makes it no longer TR, it makes this technique less appealing.

MLS: this is considered rare. It's not perfect but it's acceptable.

YK: I am the target audience because TC is a rare benefit, and being uneasy about the choice between TC/manual data structures, I will opt for manual.

JM: Do we agree that exceptions are cross realms and membranes?

YK: One also has to structure their program to use TC.

MLS: Lets move on. Slides (Response to PTC Issues)
As the first implementer of tail calls, we think there's lots of invalid fear. BT asked for data, so here it is. (PTC statistics).

ARB: (Google Search is mostly sloppy mode, hence only 29 TC calls compiled.)

MLS: The reason for showing this, today we're looking at 5% TC. We're talking about 1/20 missing things from stack frames etc. In terms of % of performance loss, my understanding of perf loss is only for TC?

LL: That is correct.

MLS: (Three Issues Raised) I'd like to approach each. (PTC Performance Concerns) We have seen no issue with TC perf. Most work was Calling convention changes (6 weeks).

DE: v8 perspective: a lot of optimisations in various compilers, not enough implementing in certain compiler tiers -- all tiers required changes.

MLS: Zero-sum game for general web?

YK: Any time spec chanes compilation tier, there's a significant cost?

DE: Yes

CM: you're measuring accidental tail calls, not calls that were meant to be there. If people are aware, this percentage is going to go up.

MLS: In general the concern about tail calls in general web going to hurt .5%? I don't think it's a valid concern, hard to measure that level of perf degredation.

YK: A 10% slowdown is significant enough to beat with manual code.

MLS: We describe late where we get performance wins.

YK: What do implementations think the actual slowdown is?

MLS: We think 0%, according to our experience and the Chrome experience.

DE: Except micro-benchmarks.

YK: 5% of calls are accidentally used? if we made STC opt in, would people use it?

MLS: STC does not resolve the performance issue, and if PTC is used, all browsers will want to optimise it.

YK: Firefox people: given you have not implemented PTC, would you implement STC optimised to a level equivalent to PTC?

EFT: yes.

DE: For v8's part, we have considered whether it was required in all compiler tiers, if it were with explicit syntax then you could say you have opted into a particular compiler tier.

ARB: But you can do that with PTC too.

DE: STC has a lower implementation load to ship it.

DH: If implementers say it's going to be easy, we don't need to optimise, it's going to be competing with loops for developers standpoint. If it's not performing well, then people won't adopt. Since 2 browsers have aggressive optimisation, there'll be competition over it.

MLS: we did not do aggressive optimisation, we just implemented it.

DH: The things to compare are people writing loops manually vs TR, not PTC vs not-PTC. Do you think you'll get compariable perfomance for current TC implementation vs loops?

MLS: we don't know the answer yet.

DE: Within an impl, you can do things like alloc registers for a whole extent of a while loop rather than TR loop. Some can, but in a naieve implementation you don't often have enough info at all tiers. Engines prioritise optimisations based on whether we think these will be used.

DH: it's a relevant concern for developers, they should not think it will slow down their code.

YK: relevant comparison is with loop + stack. STC feels like a perf regression for me if I switch to it.

MLS: the more relevant concern about TC and performance is whether developers will adopt it.

YK: I agree that is the goal.

DH: That's not what got consensus, more ad-hoc, code generators won people over, not styles of programming. Transpilers can do their own data structures if they need.

ARB: necessary for compiling languages that use this

DE: the trampoline pattern is already used on the web (js_of_ocaml, closure compiler).

ARB: ...and its performance generally sucks.

MLS: Lets move on (PTC Performance Concerns, bullet *). We have to swallow loss of perfomance

EFT: we could not implement the feature with cross realm without API changes. Microsoft could not implement this feature with no performance cost.

MLS: Not ability to implement, but how it slows me down.

DE: I don't think this will be revisited for much more ES2015 features. All have implemented much of these features. Some ES2015 Compat things such as TypedArrays need revisiting

MLS: if performance is a reason to re-consider something in the spec, it is not a valid concern.

YK: PTC is targets at making a power-user pattern more ergonomic, and it actually makes it slower is a serious concern.

EFT: Implementers have been able to bridge Class performance gap with transpilers etc, but we cannot do this with PTC.

DE: To continue the point of limited features to revisit, those couple of things may. We don't consider S4 until feedback from 2 impls, we shouldn't worry about features going in and being removed, we need to get S4 ratification from implementations.

BT: There is precedent: we removed Reflect.enumerate for performance reason.

MLS: High bar to remove stuff, I worry the bar is being lowered.

YK: Almost everyone has implemented almost everything of ES2015, except PTC, the bar is high here.

JM: reality leads, not the spec. Nobody shipped TC yet.

ARB: Can we all agree that performance is not an issue?

MLS: (Last point) 2.6x speedup for some benchmarks, possibly x86 CPU caching/returned stack. We did not expect this, and got this.
Implementation perfomance is not an issue.

DE: Was there other Chakra perf issues raised?
BT: x64 perf likely not good in many cases, simple mutual case about even, but initial concerns over x86 perf have been addressed. Was that it?
DE: Yes

MM: I understand reason why a faithful impl seems impossible is unable to predict max size of stack frame. What if threshold size stated such stack frame that would need more space than threshold only allocated on the stack, but further space is allocated on the heap and subject to GC. I think you would achieve the asymp space complexity required by spec. A large threshold would make this a rare case, so GC overhead wouldn't make slowdown in practice.

BT: you're trading off the same thing, either you get an out of stack space error, or the program slows down substantially.

DE: Wouldn't this be a different ABI?

BT: it would also have implementation constraints. Many tools would have no idea about the stack spillage sitting around in the heap.

MM: if the total number of arguments and local variables is over 1000 ...

DE: Math.max.apply (_large number of things_), in v8 that works up to 16k. We don't do something different for apply from normal.

MM: Choice of large number of arguments + locals, such it is rarely hit to exempt from TC vs completely giving up on normative TC vs accepting some kind of TC unfaithfully implemented.

DE: at this point we are adding more concerns for programmer: are they using a cross realms, are they using the good number of arguments? Should we throw an exception or silently drop out of TC for STC.

YK: if we have a syntactic feature that does not throw an exception, I have deep issues with it.

EFT: No intuitive knowledge of membrane use inside SpiderMonkey by programmers, so same code may throw under different engines.

DE: The argument ceiling seems very random
MM: I wouldn't have suggested it except for Chakra. You're not obligated not to allocate.

YK: If i write code using STC using V8 or JSC and I don't know about the restriction, but it blows up without my knowledge on Firefox?

MM: I write call using STC, and you're calling across a membrane that is not using STC. If the implementation is good enough to do tail call optimization, it might still work.

YK: if you write STC syntax, you don't have guarantees that it will be in tail call.

BT: In practice number of locals + args for TC would have to be pretty small. We wouldn't want to allocate the max amount of space all the time. Not feasible option.

DH: I want to understand the Firefox issue. There is a practical difference between PTC and STC for security proxies. We can't reject statically a cross-realm call, even if we explicitly asked for it (STC).

BT: Depending on "ask for", some people think the point of PTC was this if they use explicit tail call position.

DH: this is a question of predictability.

__*LUNCH BREAK*__

MLS: [_PTC debugging concerns_]

JSC has implemented ShadowChicken, it is enough to create a shadow stack for the developer. We save only the deleted frames in ShadowChicken, we save 128 elided frames. We chose 128 because it is a good balance, users don't want to see all the elided frames. we synthesise the elided frames by reinserting them into the existing stack. This is only in debugging for now, no Error.stack. Not in the tech preview but in nightly.

MM: I thought there was some GC non-determinism?
DE: This was only my misunderstanding.

MLS: If we run over 128, we save only the last ones.

YK: does this apply when the developer tools are not opened when the exception happen

MLS: If the inspector is open, the frames are collected.

DE: the developer tools have to be open for frames to be collected.

YK: I think this is probably fine.

??: Also the webkit remote inspector exists, so streaming of debug is possible.

MLS: Shadow chicken is invoked when remote inspector is connected, not familiar with developer tools internals though. An alternative is to turn off tail call to debug.

YK: Disabling PTC is not an option as you'll then not catch errors at the end of a long TC.

MLS: We don't think that debugging issues are a show stopper, we can do it with tools open.

JM: if we find concerns with dropping frames, then we can compile away the tail call for that code.

MM: Lets say PTC & STC, if the syntactic marker is taken to do 2 things: static error if not a tail position, in addition I'm not interested in accumulating the tail stack frame for debugging purposes. Say the ShadowChicken elided frames are only for PTC and not the marked STC, then we get close to the reliable stack frame that people are expecting.

WH: Difference with plain STC?

MM: you get stack frames up to 128 only for PTC.

DE: What's the advantage over doing this for both? Once we have syntax there seems no advantage in not using syntax.

MLS: you still need to save the frames in STC for the error stack or for debugging.

MM: The kind of stack traces you're collecting for promise, is that only after 128 frames you loose elided tail calls, which seems good to me.

MLS: are you assuming you would not lose any frame with STC?

MM: they would always be lost. The PTC tail frames that are not STC marked would be all kept in a pure STC system, and only the 128 more recent frames would be kept in a PTC + STC system.

MLS: Our intention is to never use ShadowChicken when the webinspector is closed. Performance overhead of 8-10%, also a memory user. Scope chain copies keep live locals that could be collected.

MM: I'm only concerned about PC rather than variables.

MLS: Main advantage of tailcalls is that locals can be collected after the call.

YK: any modern testing framework will report the stack frame when there is an error. It is important to understand the path taken through the code at the error. You don't want to lose frames, even with STC.

EFT: comment about debugging intent for code authors vs code users: user may need stack frames when author doesn't.

MM: Just in the same way the author of the code makes the decision to use a loop rather than a call without considering the user.

WH: If you write a while loop, you'll always have one frame of your library. If the library uses tail calls to callbacks, it's possible for the library to wipe itself off the stack completely.

MLS: Error.stack is not dependable. It is inadequate if we're arguing about telemetry concerns today.

[_Simple Error.stack test_] There are already concerns about using Error.stack for telemetry today.

DE: we should see about improving these things.

MLS: So, we shouldn't be using this as an argument to not implement TC.

MM: the current behavior of Error.stack is non deterministic, it differs between browsers.

MLS: And between releases too.

MM: It is good to have in mind what we want Error.stack to be for the co-design for TC.

MLS: It is telemetry in general, not just Error.stack. It may be worth considering speccing something especially for telemetry. Not just who-called-who.

DE: I would rather not have to regress what we have, because we already shipped these different methods to get information about the stack frames.

MLS: [_PTC Telemetry concerns, last point_] Just speculation that telemetry will be broken if TC are implemented.

YK: Don't use TC is not suitable answer for broken telemetry with TC.

_General agreement._

MLS: But, we have no known breakage.

YK: Error.stack used in a bunch of ways, one is telemetry, reporting errors to console when promise rejected or async, stack trace for thing that has happened. One problem that will happen is when you have a library that uses STC and then the library will be hidden from the stack trace.

DE: Error.stack used by Google in application frameworks, collected and bucketed, looked at by devs to resolve bugs. Not a website breakage concern.

MLS: you won't be able to aggregate.

YK: Native frames are never the source of your bugs.

Multiple: Not true

YK: Are we adding more cases to when frames are elided. It is not speculative that a developer does not want more elided frames in their stack traces. Some companies may begin to avoid using libraries with STC because they need the telemetry from calls.

BT: F# has tail call. You can deploy F# to windows store. There is an app insights tool that does telemetry, and that was impacted by F# apps. The solution was to say that you don't get stack traces for these tail call using apps.

SYG: Do people who put apps on the app store always opt for the telemetry? Or is this thing just that exists?

BT: We have sufficient evidence that telemetry is impacted by eliding frames.

MM: VMs have a very minimalistic instruction set, explicit loop construct which is the only difference from a normal set. The designers wanted a very explicit contract with the user when they want to see stack frames. Calls should always generate frames, loops not, they wanted to be explicit about this. User experience through the debugger is an important part of language design.

MLS: there is tail call in C++. We get telemetry with frames elided, we deal with these.

EFT: By turning off the optimisers.

MLS: Even so, we are able to just from the telemetry, without necessarily recompiling.

DE: you reason about which things are inline, and which things are tail called.

MLS: typically you care about the last 5 frames. That is sufficient to get the job done.

YK: we dont necessarily want the c++ debug experience to be that for Js developers. You aren't necessarily able to do this reasoning all the time.

WH: Lots of experience with lisp debugging, and in most cases turning off TC worked. However, it didn't work when I was using libraries that were deeply recursive. In those cases getting the last 128 shadow chicken frames is not enough — it shows all the frames near the leaves, but I often needed the information elided in the base frames.

YK: Sometimes the error occurs in the base frames, sometimes in the middle, sometimes in the leaves.

MLS: (Summary slide) In nightly since October.

BT: Regularly open the dev tools after error occurs, not always able to refresh to reproduce bug - don't want to lose state.

JHD: JSC used to have different optimisation levels with debugger open or closed. Very awkward to debug in this circumstance.

_Etherpad went down for a ~minute_

_Discussion about an API to get better debugging_

YK: imagine you have a library that wants to use STC ... you will want to see all the frames to debug your code.

DE: A more reasonable usecase is not to see your loops but to see nested stack frames, A callback into user code could be problematic.

YK: It is not always the case that you need to know that you need to turn ShadowChicken 'mode' on in order to collect STC frames.

DE: I would encourage library authors not to do a tail call into a callback provided by the user.

YK: Some coordination about turning on ShadowChicken is something that everyone has to consider, whether QUnit does it, or telemetry apis do it etc.

DE: does shadow chicken change the behavior of Error.stack?

MLS: not implemented yet.

YK: 128 frames not sufficient

MLS: arbitrary chosen constant, can be changed. no implementor wants shadowchicken on all the time due to overheads.

MM: Regarding Error.stack and telemetry, the only thing relevant is the program counter. If you had a 128 cycle buffer with just the PC in it, it may have little overhead. Depending on the detail of Error.stack

YK: how can the user decide whether to use the feature, if they're not sure it's going to work as expected. This is more the case for PTC than for STC.

MLS: Last two points on slide are the crux of it for me and JSC.

YK: there are at least two implementations with problems.

MLS: If we are willing to say the spec has less value because of the process in place at the time stuff went into the spec it is disconcerting. JSC didn't get the memo saying that other implementations weren't doing this. We implemented this because it was in the spec.

EFT: It is not my motivation to state that we're trying to ditch this feature because we're not planning to implement this.

YK: Why did you say that cross realm does not require a state change?

MM: I don't believe the spec change that cross-realm requires has the controversy that others do.

YK: I disagree. The spec has to be changed to say that tail call does not work across realms.

DE: I think the change has consensus to say that TC doesn't work across realms.

EFT: Web developers don't know that TC doesn't work across realms, even if we do.

ARB: there are many other things that do not work across realms.

KS: I think there's consensus to changing the spec regarding cross-realm, the spec should not change from PTC to STC, or to remove PTC.

YK: Basically this feature cannot make stage 4 because it cannot be implemented by 2 browsers.

MLS: It is.

CM: v8 has it behind a flag. Chakra have not started it, but they have a strategy that could work for me as a user.

YK: they cannot implement it in SpiderMonkey because of cross realms issues. A serious change is needed no matter what.

BT: Why was the PR rejected then?

MLS: The reason the standard exists is to agree on behavior. I agreed on Firefox request because it allows them to participate.

_etherpad down, 30s_

YK: I think that if people use realms/membranes much more then I find that it does damage to STC/PTC, and this is not good.

CM: motivation to get tail call and motivation to get cross realm are orthogonal to each others.

YK: I think people will use realms by abstraction, the decision about where computation will be placed may be handled abstractly.

MM: when you package things with abstractions, you put intermediaries between the caller and the caller. A tail call into the abstraction is a tail call into the packaging, so you don't get guarantees.

YK: I agree, this is the essense of why I disagree with CM. These abstractions may be brittle, I suspect it will be a problem.

MM: would you opinion be different if we said normatively that there is always a membrane between realms, but that it may be optimized away. The call site that is doing the call to cross realm is tail, but you don't get the asymptotic behavior as the guarantee is not preserved.

YK: v8 has to fake that,

MM: Eliminating the membrane is TCO. If you're doing an STC tail call into a non-...

YK: the problem is that such cross realms tail call may work in V8, but would not work in Firefox

EFT: Back to MLS point, we've heard from implementers and users, and we still stand at an impasse.

DE: I think when safari ships release, when google has users in number largers, we're more likely to see missing frames and dev impact.

YK: Web compact does have an impact. Telemetry will start to work less well, and we'll not immpediately notice a webcompat issue.

DE: there is no way to collect data right now.

YK: I disagree it is purely speculative, TC inside of a promise, you'll miss frames.

KS: We're past that point now, that's a stage 2 concern.

DE: more developer flow compat than webcompat

YK: people rely on Error.stack, and it's not clear how people will deal with it not working.

DE: Can we talk about value of STC over PTC. Use cases that are important solved by STC not PTC. Leaving aside surface syntax being objectionable. 3 presented on GitHub, but I disagree.

DE: The performance optimisation starts being valuable after a certain point.

JHD: To confirm, you're looking for any use cases that are PTC works and STC does not work?

DE: are there other cases than the 3 we considered where PTC works and not STC?

YK: Is there a production implementation of something where someone would use STC in preference over PTC?

DE: are there cases where STC would not work?

YK: I agree that STC satisfies transpilers, but there are questions about the syntactic cost.

MLS: STC doesn't really solve the issues that have been raised. It doesn't take care of the telemetry and debugging issues.

These issues have already been tackled though?

EFT: Broken realms worse with STC due to intent, but the brokennes is also horrific due to PTC.

YK: I don't have a mental model to write a PTC program. I can imagine how to do it with STC.

DE: To respond to performance of debug not being resolved by STC: when user expresses STC intent, user doesn't want to see elided frames as they're looping. "return contunue" doesn't expect a shadowchicken stack. I would advise against calling out to user code with STC.

ARB, MLS: I disagree with that, there are libraries that need to do exactly that.

ARB: for instance when you have a continuation as a parameter

EFT: I'm unhappy about implementation specific type errors, MM says he is unhappy with implementations that are being forced to throw implementation specific type errors.

DE: for debugging and telemetry, the intent to do a loop or continuation means that we don't have to implement shadow chicken. It doesn't affect existing code that didn't intend to use PTC.

MLS: The point about STC, the user wants it but I can't do it, do I throw an exception?

EFT: If someone wrote a module loader with each module in its own realm. This would impose problems.

SYG: what things do not work cross realms?

MM: For identity of continuity, I would like cross realms to be as little surprising as possible.

EFT:  cross-realm tailcalls violates the least surprise for me.

MM: There are sufficiently strong engineering reasons for inter-realm membranes, certainly since one browser is using them. I want all surprises resulting from it needs to be specced carefully.

YK: This is one such surprise, existing in ES2015 and unspecced as such. A solution to that problem is to remove the thing that creates the surprise.

BT: STC would allow real tail calls in sloppy mode.

DE: It defines proper tail calls in sloppy mode. The user has expressed intent that tail calls should be used so we do not have to update caller and argument.

JHD: Why is a benefit to enable new features in sloppy mode code?

MM: It's an old debate. We should have left sloppy mode alone ...

YK: let's not open this discussion, but everyone would agree that make tail calls available in sloppy mode would not be good.

BT: There is no additional spec, function.arguments and caller will be null when you try and access a frame that tail-called to you. This is the same as currently with strict mode calling into sloppy mode.

YK: I am skeptical that you can do this and it is an easy change.

WH: But we solved those problems already in the existing spec, which allows a strict function to tail-call into a sloppy function.

BT: Strict calling sloppy gets a normal sloppy arguments object.

MLS: what is arguments.caller going to be?

BT: arguments.caller in sloppy mode when called with Tail Calls in sloppy mode, null. The mental model is that: Tail Call to a function is equivalent to Strict function calling a sloppy function, regardless of mode of the calling function.

BT: if it's trivial to do (enabling tail call in sloppy mode), what would we not do it?

MM: I don't want any more investment into sloppy mode where it is not required.

DE: Current spec text is strict only, for better or worse.

YK: what is the next step?

DE: enough arguments for stage 1?

YK: no. Stage 0.

DE: Stage 1 = committee has interest in it? A single person not having interest in a feature is not the committee as a whole.

MM: STC clearly qualifies for Stage 1. Does not mean that I'm in favour of it happening, does imply I'm interested for us to continue exploring it. And that the proposal as stated is a good foundation for this exploration.

WH: I think we've done as much exploration of the problem space as we can. And I think we're going to find it hard to change opinion here.

DH: my current opinion of STC is that we're better off without it. If we want to advance something to stage 1 even with several members disagreeing, I'm fine with it.

FSC: Do you think we could get stage 1 for proposing to remove PTC?

YK: I don't think that's unavoidable. Considering that we've heard a lot of concerns regarding STC, I think we still need to discuss this parallel proposal for revising/removing PTC.

MLS: I will not support further stages for STC and do not want to waste time by not stating it.

JHD: there is no point to moving it to stage 1 as we don't seem to want to discuss it further at the moment.

WH: The thing that flipped STC for me was it not working cross-realm. I was interested in it but not if it sometimes doesn't work.

MLS: there is no proposal to remove PTC.

DE: I think we have spec materials for the issues with PTC and spec text is quick to produce.

CM: Removing PTC for the way it was before, or to adapt to address the implementation concerns?

DE: totally removing all mentions of tail call from the spec

CM: I would be completely opposed to that

MLS: I would be opposed to that. (inferred)

DH: We know we would need some changes to fix the cross-realm issue and arguments issue. Either eliminate it, or make fixes to make it implementable in the real implementations.

DE: What are the fatal flaws? Cross-realms or others? Make the cross-realm a silent failure or exception?

DH: hearing from Microsoft that they won't be able to implement it ... you're eliding the difference between syntactic opt in and syntactic guarantees.

DH: the thought burden for tail call is large in both case. They're more binary for STC as they are closer to guarantees.

(discussion & disagreement about whether one would use tail call)

EFT: there are many reasons why calls are not in tail position

DE: STC is simpler to use than PTC because you get an early error if you request a tail call at a place where it's not possible

WH: Removal of PTC would have to go through all of the stages.

MLS: the consensus is not about whether we want to keep PTC but if we want to remove it

MM: discussion needs to continue, and to change we need a consensus to change

YK: Can't lean on the process without it blowing up in our face.

KS: If debugabillity of the language in the future is put at risk by this feature, then we should be careful about this change.

EFT: I think this feature violates the hyppocratic oath, I don't believe it has done no harm.

BT: is the fact that it cannot be implemented with interoperability a harm to the language (cross realm, number of arguments)?

several: We have agreed on the cross realm exception

BT: in practice, developer will not be able to rely on tail calls even for calls in tail position

WH: Number of arguments issue: The spec does not require any particular tail call to be elided. Only the asymptotic behavior matters, so I'd consider Chakra to be compliant with the existing spec.

MM: The chakra issue can be fit given careful wording of the asymptotic wording. In each call, if the number of arguments does not keep growing, reaches an asymptote, the enlargement of a frame reaches an asymptote.

EFT: we're bending backward to allow some lack of interoperability.

WH: No need to change the wording for the number of arguments issue.

YK: I think the cross-realm issue is more serious than the chakra/arguments issue.

MM: can we take the Chakra off the table as a gating concern?

BT: So we can interpret the Chakra solution as being compliant with the spec, even though it contradicts the wording of the specification?

MM: the observable requirement only has to deal with asymptotic behavior

YK: I agree we can take it off the table, but I don't think that it's a good reason if its only to take it down to one implementation with issues.

MM: the cross realm issue is an acceptable violation

BT: The spec currently says "The tail position call must release.... before invoking the target function, or reuse those resources" How is explicitly not doing this, doing this?

CM: The reason you need to do this is because the arg list got bigger, when it does you need to allocate more resources, the spec does not say by how much. You've increased your resource consumption, but because everyone has to grow frames.

BT: when we grow our frame we're not reusing the older frame

ARB: but this is not observable

WH: Releasing resources only matters (i.e. is observable) in the asymptote. If you have a function that calls itself n times with a constant number of arguments, then using Ω(n) space resources would definitely be observable. If the arguments are growing, say you allocate frame sizes in powers of 2 and reuse them until you cross the next power-of-2, eventually you'll reach a max function frame size s, and, important, the total size of all frames will be O(s). You can then do amortized analysis and pretend that the original frame had size s. If you do increase the number of arguments without limits, you're going to run out of memory anyway, with or without tailcalls, because you won't have enough resources to hold even one frame.

BT: Substantially less in this than other impls.

WH: You'll be off by a constant factor, which is not a concern as they're not defined by the spec. The amortized/asymptotic calculation of resource use. When you have a chain of frames, each of which grows, you can use amortized logic to pretend the first one has the same size as the last.

EFT: Daniel Slater has written a slew of papers on this, the constants don't matter in the end.

MM: does this criteria work here?

WH: Yes.

BT: I'm convinced that the spec does in fact not require that we have constant space use. If we always reuse the same space when the # of arguments is constants, and increase it linearly when there are more arguments, then it seems that we satisfy the spec.

WH: My amortized analysis critically relies on implementation frame sizes growing exponentially past some constant threshold. If you allocate a new frame every time the number of arguments grows by 1 from the previous frame, then you will indeed violate the spec because the total size of frames (1+2+3+4+5+6+ ... + n) is proportional to n², which exceeds O(n). On the other hand, if you allocate frames using power-of-2 sizes past some constant threshold, and reuse prior frames when they fit, then you will use amortized resources (1+2+4+8+ ... + n), which is O(n) — in fact, it's less than 2n.

YK: Summary of the major points: several issues reported during implementation. Arguments should be fine. The cross realm issue needs spec change. There was a debugging concern related to the dev tools. Apple did a good job showing ways to address this. There is the impact on the error object, with web compatibility issues. And the general question of is it possible to use this feature at all.

_Yes/no response_

MM: does TCO give the same problem?

DE: It's relatively non-counter-intuitive given other forms of TCO where you do a program transformation and a call ends up in the tail call position.

KS: The reason the cross-realm issue is not a killer for me, any time you mix objects between realms, you're already dipping your toes in complex waters, and this is another facet of this.

DH: realms will become more common. As a Java dev, I have some debugging experience where some weird bugs came from using different class loaders. I don't think cross realm bugs will be rare.

YK: How do you figure out how to use the feature. For PTC, it's quite tricky, and any new exception added to tail call position is making it more tricky.

DH: Throwing in PTC because you're doing a cross realm tail call is crazy, as you may not know you're doing it.

DH: the alternative we have not yet talked about is to actually require all the implementations to allocate the stack frames to remove the interoperability problem.

CM: I don't buy the interop problem, if you have an implementation doing PTC, at cross-realm bounds or not, you have two things: 1) incidental resource usage benefit, reduction in memory pressure,  similar to amount of RAM on a computer, 2) I am writing some specific code, to gain a deliberate resource consumption benefit, using CPS in my code, where I'm controlling the environment my stuff is executing in. I'm not concerned about the cross realm case here, because I'm not intending to use cross-realms. I'm going to rely on it in the single realm. I don't want to throw the baby out with the bathwater.

YK: this is true if you can do this reasoning.

DH: Discussion about liklihood of cross-realm mutual recursion, likely if code modularised. Given increasing size of algorithm and increasing usefulness of realms, the more likely of mutual recursion over the boundary.

CM: I take your point, but from an architectural position, getting into the situation of having that level of inter-module cooperation arranged in advanced by potentially loosely coordinated parties, and have those parties in the situation requiring mutual recursion to work seems unlikely to me.

DH: example is a plugin style for an algorithm

EFT: If cross-realm is not an issue for PTC, then STC could be put back on the table for cases when we do care about tail calls across realm boundaries.

DE: I don't see how PTC vs STC changes anything regarding the cross realm issue.

_discussion about putting STC back on the table_

YK: procedural remark: STC has to gain consensus to be on the table.

MLS: I don't want both PTC and STC, as it makes PTC optional. We would have compatibility issues.

DD: If the limits are not made explicit, then there will be compatibility issues.

YK: there are other concerns, like Error.stack.

DE: The spec is a place to have behaviour consistent across browsers.

YK: this is true. Apple is saying is they have shipped PTC, and if V8 does not have to ship PTC there will be compatibility/functionality issues with Error.stack. The converse argument could be made: by shipping PTC there could be loss of functionality of Error.stack.

MLS: I don't think there is consent for STC to reach stage 2, and I don't think it's worth the committee's time to progress it to stage 1.

YK: there is a norm question here.

MLS: there isn't support for STC, so I would like to remove that from the table.

DH: we haven't even talked about the syntax. Adding syntax for this feature is not warranted. Introducing syntax comes at a high cost, for the cognitive model of the language, for the ecosystem. I do not believe that tailcalls are common enough to deserve syntax.

WH: full agreement with DH. Don't want to subject users to constant style wars about whether they should be writing `return f()` or `return continue f()`.

EFT: Can we make progress in the last minutes?

YK: the fact that there is disagreement on the usefulness of the feature should be taken into account.

EFT/BT: agree

YK: Spec should follow reality, if engines aren't implementing PTC then the spec should be amended to reflect it.

YK: this time, several engines have tried and failed to implement the feature. It should be OK to say that this feature in the spec could be removed.

CM: several users have been surprised to see that tail call did not work

BT: proxies were requested, were hard to implement (one man year), but they were implemented early because of the requests. There were no such requests for PTC.

DH: I championed putting PTC in the language, but I have come to the realization that I don't need them that much.

JHD: I don't know what a proper tail position is.

_discussion about using trampolines vs CPS and tail calls for code generators_

ARB: one stated goal of Harmony was to make JS a good target language for compilation

YK: for that use case STC is acceptable

DH: my understanding of the world has changed because of asm.js and webassembly. JS as a target language is not as important now. There are performance issues for tail calls when compiling to JS right now, but is it a reason to add syntax to improve it?

DH: my preference is to remove PTC.

DE: How do we decide?

DH: this is the one significant feature of ES6 that is causing the most trouble, and it was agreed before we had a process.

BT: the probability of this happening again is very low.

DH: if PTC was proposed today, it would have 0 chance to make it.

DE: should consensus be the basis to remove PTC?

YK: what will the implementors do?

DH: they don't want to ruin their relation with the committee

CM: as someone who wants to keep the feature, I'm still open to discussion. We tend to emphasize arguments that talk about benefits instead of cost. Many arguments about cost went beyond the implementation and were about the feature itself.

DH: the main issue is predictability.

EFT: where is the bar to continue the debate

MLS: we have not heard anything compelling to remove the feature. Web compatibility would be a compelling reason.

YK: if you leave PTC in and others don't put it in, there will be a web compat issue

MLS: if we leave it in, other vendors will end up implementing it.

EFT/YK: you're strong arming the committee

MLS: I'm not the only one who wants to keep PTC

CM: I'm agnostic on STC, it's the underlying language semantics that I care about

DE: which issues should we reconsider?

YK: What the stack trace looks like in PTC, What happens in the dev experience? I agree apple has done good work on the second issue. Nothing done to nullify concerns about the first.

#### Conclusion/Resolution

- No consensus on removing PTC
- No consensus and no rejection to advance STC to stage 1

Meeting ended 17:30.
