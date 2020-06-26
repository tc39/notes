# March 31, 2016 Meeting Notes
-----

Dave Herman (DH), Michael Ficarra (MF), Jordan Harband (JHD), Adam Klein (AK), Mark S. Miller (MM), Brian Terlson (BT), Domenic Denicola (DD), Brad Nelson (BNN), JF Bastien (JFB), Joe Lencioni (JLI), Sebastian Markbåge (SM), Jeff Morrison (JM), Kevin Smith (KS), Lars Hansen (LHN), Saam Barati (SBI), Keith Miller (KM), Michael Saboff (MLS), Eric Ferraiuolo (EF), Eric Faust (EFT), Chip Morningstar (CM), Dean Tribble (DT), Shu-yu Guo (SYG), Tim Disney (TD), Waldemar Horwat (WH), Bert Belder (BBR), Peter Jensen (PJ), Daniel Ehrenberg (DE), Caridy Patiño (CP), Diego Ferreiro Val (DFV), Jean-Francis Paradis (JFP), Shelby Hubick (SHK), Leo Balter (LEO), Miško Hevery (MHY), Allen Wirfs-Brock (AWB), Kevin Gibbons (KG), Steven Loomis (SRL), Zibi Braniecki (ZB)

-----

## Final Draft Standards Approval

ECMA-262: Approved with 2 abstains

ECMA-402: Approved with 1 abstain

ECMAScript Specification Suite (pointer spec for ISO): Approved

Note that everyone has until May 1st to review the document for patent issues.

## Tail Calls

AWB: objected that the current standard language is sufficient

SYG: *objected to AWB's objection and clarified the issue*



BT: The sec says the implementation must release any transient resource associated with the current context

AWB: if the current function is a cross realm call. so it's return has extra state to handle the return. ... people don't follow so he goes to draw a picture...

SYG: do you think it is spec compliant if two mutually recursive functions doing tail calls across a realm boundary caused the stack to continue to grow with each call?

AWB: No

MM: articulated the perspective that the *calls* can be tail calls, but the membrane in the middle may not be able to then make a tail call. Therefore the membrane is accumulating the intermediate state.

AWB: doesn't mind saying it's implementation dependent

...

BT: it would be preferable if the spec test calls out that if it's possible ot have the membrane crossing be a tail call, it should be.

AWB: given that there's an issue inke dhere to realms, are there other non-=specified things that might be tied to calls for which the same argument shoudl be made. "The spec says this should be a tail call, but if we do then e.g., debugging information will be lost so...."

AK: How did we arrive at consensus that this is normatively required?

AWB: It wouldn't bother me if Firefox didn't meet all of the normative requirements.

BT: I think that would bother Firefox once they started failing Test262 tests

EF: Yes, we want to pass Test262

BT: We all fail the reference types

MLS: We'd rather it say that it's preferred to use proper tail calls in the cross-realm case, and it's OK to do an ordinary call as Mozilla will do

EF: But that's the same, it's logically equivalent

MM, BT: But there's different conntations

AWB: But if you want compatibility, then you'll avoid it. But, here's a case where cross-realm tail calls would be good: Some of the Array built-ins...

EF: We need to speak more about our containers model, and the Array built-ins, and the implications. We've reached consensus

EF: The spec text should say it's implementation dependent, but aspirational, to do proper tail calls in the cross-realm case. We agreed that we do want a normative change to make the value implementation-defined in this case.

-- second part of tail calls, presented by BT

BT: For Chakra, implementing tail calls is hard because of some platform constraints: the Windows ABI is strict with when we can touch stack, and our calling conventions make it so that, in an ideal case, we can approach tail calls with roughly equivalent performance, however in pathological cases (e.g., mutually recursive functions with varying numbers of arguments) those will be slower for the forseeable future. We are concerned that if we just turn tail calls on on the internet, many sites will be slower, because existing callsites will happen to be in tail position. We use the Windows ABI for setting up stack; we have C++ exceptions, and doing this with tail calls is hard.

AWB: You're using heavyweight stack frames for all calls?

BT: Except for inline calls, which have a side table. That's the main problem. A side problem is, tail calls affect the value of error.stack, which is important. For example, telemetry tools which bucket based on the value of error.stack. And there is an ergonomic position as well: if you use tail calls, you don't get much feedback from the language. Instead, you have to put it in the right position, and hope that you have enough tests that exhaust the stack space. So an explicit sigil may help, for users to explicitly opt in. The benefits:

- Explicitly opt-in, to avoid slow cases where it's slower on some platforms.
- Give a SyntaxError when it's not a valid tail call, or some kind of error to help the programmer

MF: Clojure has a sigil for this, recur instead of return, which similarly helps

WH: Suppose they call a user-provided function and use the explicit tail call syntax. If that function turns out to be in a different realm, would they get an error?

EF: No, we would probably do a warning, not an error

MLS: So you're saying it's a tail-call hint? Otherwise, you'd expect an error for a cross-realm call.

MM: We should think about the cross-realm case as that the callee owns the stack space.

BT, AWB: We already talked about this, it's done

AWB: You could only use it when in tail position; otherwise it's a syntax error. My suggestion for how to approach it: the ergometric aspect we (TC39) talked about before

BT: Does anyone know where the notes from that discussion are?

AWB: I'm positive it came up, and we made a decision on it. We could revisit that, but maybe we don't have to. The primary concerns raised by Brian are implementability and web compatibility issues. If, on the basis of those issues, we need some sort of explicit designation based on tail calls, we don't have to get into the...

MM: For me, the convincing argument was none of the things emphasized so far, which was what appears in the stack trace. Not so much because there's existing software, but because users using stack traces for debugging need an understandable model about understanding what is in the stack. I don't think syntactic tail position provides that sufficiently for normal user programmers.

BT: Devtools could have a special mode where you're storing off stack off to the side

EF: Ergonomics of forcing spec non-compliance when debugging tools are open is very bad

MM: For the entire program, I'm not just getting the stack frames I want, but also for each iteration.

JM: It's not just about debugging, but also telemetry in production.

WH: For debugging you could start eliding tail frames only when running into a long repeating loop of frames of the stack, and keep them around otherwise.

MM: It's a much better knob to have it on each call, rather than on/off in devtools

WH: Is this a good knob to ask on each call site? It's too much to ask all script and library authors to think of this.

DE: Yes, this corresponds to how users work

MLS: Shouldn't this knob be default-tail-call?

EF: For web compatibility, programmers can already debug

MM: JS is unique in the span of programmers it tries to accommodate. In the absence of this debugger issue, many programmers will not know that a call is a tail call. In the absence of TCO, this would be fine. But having the default behavior of TCO on is counter to developer intuition in terms of when you'd get the stack

(fill in DE's point)

MLS: To me, it seems more intuitive to opt out of tail calls than to opt in.

SYG: I agree with Mark's intuition that this is not what programmers expect. TCO is not a time optimization. Because of various parts of implementation complexity, at best it could be a time savings, but it is not an

MLS: TCO lets us omit popping the stack and running epilogue code. And if I use less stack space, we touch less memory and are more cache friendly

SYG: I think most cases of accidental opt-in are not loops, and are simply function calls.

MLS: Performance benefits of tail calls: If you reuse a frame, you'll likely do less writes to a frame. Likely some things will already be valid there, and you're writing to the same cache lines.

WH: That is speculative. If your new frame is bigger than the fhan the caller frame, it could be slower.

BB: The spec doesn't require stack space. People right now don't expect to get tail calls or do tail recursion. I'd expect that, for those particular cases where tail calls are present, it would be better to make it an explicit opt-in, so we would be able to tell users when it won't work. For the cross-realm case, it would be useful to throw or warn, rather than silently using stack space.

BT: I think your (JSC)'s implementation is basically optimal, as you don't use C++ implementation, and the cleanup that the caller/callee do

AWB: Those are implementation decisions that each runtime does. When you design a new runtime, you make these decisions about which kind of stack frames you use.

BT: At the end of the day, we've investigated this, and we've determined that we'll see perf regressions in real code.

AWB: For a self-tail-recursive function, even if the tail call is marked, will the performance be less?

BT: For self-recursion where the argument pattern doesn't change, we'll be slightly faster.

EF: That falls into the good case. Anyway, how big of an issue is the error.stack thing?

JM: Facebook collects it

MM: With regard to cross-browser error code, there is a lot of differences between browsers, and you have a lot of differences

EF: But what if you bucket it by UA

BT: You can't just bucket by string equality

AWB: What do you do when inlining? Do you still synthesize a stack frame for it?

KM: Yes, every browser does this

(a side thing, everyone says)

MLS: Wouldn't you argue, based on your stack analysis, that this means that we shouldn't make a decision based on any kind of cross-browser support of stack scraping?

MM: With regard to the text that shows up in the stack. But with regard to whether a particular stack frame is represented or not, I actually don't know; I haven't investigated that as a separate question. My intuition is that there is generally pretty broad agreement that, per level of call, there is a line representing the stack frame. Certainly going forward, one of the things I'm concerned about is that I want to confirm is how to specify a stack trace. Many parts will have to be implementation-defined, but the basic issue of giving a general, predictable model about when you do and do not accumulate stack frames, I would like to have agreement is, on whether they accumulate. Could be opt-in or opt-out, a global switch or not, but I want to have agreement.

AWB: We certainly talked about debugging information in working on ES6, so that's been taking into account. So if we, right now, can address the issue without going back on that, that could be better

EF: FWIW when I discussed this with Dave, he found the devtools argument compelling, and found that we basically missed a stakeholder.

AWB: So is the first, performance issue important enough?

SYG: I see these (perf, debugging) as the same issue, in that an explicit opt-in solves more issues than an explicit opt-out.

MLS: The issue about what Mark said earlier, in an eloquent way, about the quality of JavaScript programmers, is relevant because it's a compiler trick to give better performance

AWB: proper tail calls proponents would say that it's not an optimization, it's about linear space

MLS: Second, it's a way to enable more programming styles

AWB: Yes, it was to make this possible. A transparent optimization would've already been possible, but the point is to enable proper tail call-based programming patterns, is the reason it was included in the spec.

WH: If we were to use an explicit mark, it would have to be an opt in. An opt out just wouldn't work. From personal experience from working with languages with proper tail calls, it would happen everywhere, confusing stack traces that didn't capture those.

BT: Opt-out wouldn't solve the web compat, debugging and telemetry problems

MLS: For RegExps, Google graciously collected information on what sites would break. Do we know what sites would break with tail calls?

DE: We know that tail calls occur on the web, but it's not so possible to tell whether it causes breakage.

AK: The kind of breakage we're talking about is that a stack frame is missing on a stack trace. This is very subtle and indirect.

JHD: I don't understand the rules of proper tail calls. It seems like spooky action at a distance, and I'd really like it with explicit tools.

MF: In Clojure it's just a hint/marking explicit, but tail calls could happen in other places.

DE: But here's it's being proposed to only do it when it's marked

AWB: If an implementation can do a transparent optimization, it can do it either way

KS: You don't want to put stack frame above user experience. To Jordan's point, by having it opt-in, if i"m googling about the feature, and understanding it, it's more something you can handle.

DH: Didn't we settle this in 2015? How many things do we want to revisit?

DE: We've revised other things in ES2015 based on other browser experience. And browsers are almost done with almost all ES2015 features, so there's not much risk.

AWB: What's crucial to me is that there would be negative performance impact. Essentially it's a web compatibility thing. I've been trying to set aside the ergonomics (since we already discussed it), but

DH: Proper tail calls are a space feature, not a performance optimization. This involves doing more work, so it may be slower than doing less work. There also may be well-known optimizations

BT: And we can do it sometimes, but not other times

DH: As a non-implementor, I can't evaluate these arguments

AWB: So replacing tail calls with marked tail calls addresses the legacy compatibility issue

DH: I really don't like us coming into something with long-standing consensus and casually reverting that

BT: What's casual about it?

DH: This is all built in consensus, and we should treat it as a hard-earned thing that should not be reverted cheaply. However, there were faults in the earlier ES process, including that we didn't have implementation experience. So it was inevitable that we would run into implementation. I don't want people to think that it's cheap to reopen the issue. We should understand the gravity of this. The other thing that we should figure out more about what explicit syntax we want to replace it with. If you have explicit syntax in every expression position that's a non-tail-call, then it's a nonstarter. For example, if the two branches of a ternary are tail positions. So tail position is a local property.

AWB: But the expressions feed into statements

EF: Say we make the syntax in the return position, and it feeds down into subexpressions

DH: Yeah, that sounds good, we should make that clear. I don't think anyone has done the work of thinking through completely. For example, let's put it on return statements. Oops, now there's no tail call in an arrow function with an expression body. There's work to do here--we are going pretty close to square one.

MLS: I want to reinforce your first point: there were no implementation. We implemented tail calls July/August last year, available in our nightly since then; we've had a few bugs. The last bugs were in October. We have an issue about debugging, and we have an answer for that--we're going to ship a side stack

JM: This doesn't address the telemetry issues. I'm just curious because we use it internally--we (Facebook) use production telemetry to debug issues. It will make it much harder for us to examine these stacks.

MLS: To reinforce Dave's point, one vendor, in good faith has implemented it. And now another vendor is pushing back on it without data.

EF: It's many orders of magnitude more work to implement it, at least six months. How long did it take you?

MLS: Three man-months

EF: When could we talk about it? In six months?

AWB: But it won't be official for a year

DE: It's useful to look to the current draft spec

DH: Yes, it's a reflection of consensus

AWB: All we could do at this point is revert it; there's no well-thought-out replacement.

MLS: It was unfortunate for us because we are throwing away our work; we did all of this work to implement tail calls, as the first implementor when ES6 came out of this feature

BT: We had a lot of features shifting underneath us too

DE: Us too

DH: It's not like implementors weren't at the table; they're at the same state now as then; it's not right for them to block the feature

AK: To be clear, V8 has done the implementation work, and we feel that we would prefer to get explicit syntax, for debugging/profiling experience

DD: For me, the programmer intention argument was really convincing, to give guidance when it fails.

DH: I won't keep saying this forever, but we talked about this already

AK: I agree that, in general, we don't want to go through the ES2015 spec. This is pretty much the last thing to come.

DH: I knew that there were some concerns about tail calls. Probably implementation concerns are bubbling up; I'm not an implementor, so there's nothing I can do. But now that I know you have an implementation

DE: I don't think we could ship Apple's strategy for debugging.

AK: There are developer experience tools, and

[various discussion]

DH: We have an implementer who has implemented [proper tail calls] as an optimization, and would like to continue shipping that optimization. We should make sure that any Error.stack proposal does not interfere with their ability to do so.

DH: BT wants to put forward a new proposal, and I want to make sure that he's going to be heard. From what I've understood today, it seems totally reasonable.

#### Conclusion/Resolution

Brian Terlson (with EF as co-champion) to champion a stage 0 proposal to amend existing tail call spec language to require extra syntax to implement a tail call

## Reference type and implementation reality (double-evaluation of computed property expression)

MF: IE6-8 and some versions of Opera has the correct (specified) semantics.

BT: Less worried about the web compatibility aspects. Fixing issue is costly for us.

AWB: We had a spec. We had divergent implementations. We looked it. We asked if the spec should change. We said no. We said that the spec was correct. An implementor becoming divergent doesn't invalidate that.

EFT: Firefox implemented the specified semantics as of two days ago.

AWB: The specified behavior was not an experiment. It was existing behavior by a number of implementations.

BT: We were following Chrome's behavior.

BT: Spec should implement reality.

AWB: Not if ...

BT: This doesn't matter all that much.

#### Conclusion/Resolution

Let the current spec stand.

## Intl

ZB: presenting gi

Wants to advance to stage 3

Fundamentally, it's that all future formatters will have *.formatToParts

AWB: objectected to the long name

ZB: the longer name is mostly used by libraries. Most people will just use format and so it's a good compromise

DH: Naming is bikeshedding.

WH, AWB: But we're setting precedent here.

#### Conclusion/Resolution

- Stage 3 acceptance


Additional Intl List/Unit/RelativeTime/Duration entries advance to stage 1

BT: Reserve the right to come back later and object more strongly. Not sure if ICU has the APIs that we can use to support this.

The ECMA-402 group encourages Microsoft to use ICU

AWB: TC39 is not supposed to be telling parties how to implement the standards, only what to implement.

## Public class fields

JM: talking (no presentation)

JM: An update on two major concerns. From Mark, public class fields in the constructor, Mark and Jeff talked with Kevin, and everyone is OK with it being in the class body.

MM: Even though there's no scoping mechanism, there is a scoping intuition. The use of the property name is in the body of the class, and therefore the property is intuitively scoped to the class body, and should be declared in the class body rather than the constructor.

AWB: are there initlaizaation expressions on the public class fields?  what is the scoping and evaluation time

JM: eval time is immediately at the last stage after calling super (the proposal documents it). It is part of construction

WH: this is similar to the alternate implementation of private fields?

KS: yes

WH: Is this done at construction time, or at the time super returns in the constructor? To clarify the distinction, what happens if super substitutes and returns a different object from the one it got?

JM: The properties get added to whatever object super returns.

WH: OK; just checking that the private and public field proposals are harmonious here, and it looks like they are.

AWB: you can think about it as an anonymous function that is invoked at the time of...

JM: you can think of it that way. there are edge cases that don't quite match that intuition

JM: there are conflicting opinions about what it means to put a this or a super in the expression

AWB: shouldn't be. there's only one plausible meaning of this.

DD: the other plausible meaning is the this of the lexicalness (lexical outer this?)  compare it with what is the meaning of arguments

AWB: what about constructor parameters

AWB: whatever the answer here, it needs to apply to both this and privates

JS: we could go with lexical this and instance this. we don't know yet which one is right. there's more utility in "this" representing instance and "super" making sense.

DH: argues that we should start from the intuition at the programming model not the implementation of the feature. so the "this means instance" is that intuition. they may lead to different conclusions for this vs. fields/properties. this praticular feature is lexically scoped to the class body.

AK: describing it in terms of a function call led to the confusion, but thinking in terms of instantiation avoided the confusion.

* discussion of `arguments`*

MM: classes are strict, so you cannot bind "arguments" as a variable.

AWB: showed a way that you could shadow it

MM: ok don't make it a dynamic poison, make it a static error. It's a weird edge case, so just make it illegal so we don't have to figure it out.

AK: that seems weirder than just making it lexical

WH: What about `this`?

MM: "this" inside an initializer evals ot the instance being initialized.

DD: shows and example such that there's two different definitions of this at different places in the class definition. that's super confusing.

DH: this issue comes up repeatedly because an intuition about class bodies is wrong. People assume tha thtey are executed once. But in JS they are not. You will always see things described in orde that will execute in a different order

DD: but this would be the first time that we have introduced such a drastic difference in timing.

MM: DD is bringing up two points. 1) wrt scoping 2) wrt execution time. Jeff and I had previously talked abotu execution time. If you accept the declaration being in teh class body, but you don't allow an initializer, then we avoid the multilayer issue. This is how it has been in Babel and people have not reported an issue.

DH: the intuition of top to bottom does not survive contact with reality.

BT: TypeScript also does not impose top to bottom ordering. And noone has been confused about it. Including with decorators.

DH: puts up another code sample to show that class elements are not really ordered.

```js
class C {

  state a = console.log("A");

  b = console.log("b");

  static c = console.log("C");
}
```

MM: my proposal is that we don't allow initializers and then this issue evaporates.

JHD: then you lose a lot of value of the proposals.

WH: in this example, statics would get executed only once or more than once?

DH: only once

DH: if don't allow for the idea that there can be multiple rounds of execution within a class, we will stall out class development.

JS: I need to know what concerns need to be addressed to make progress.

AWB:

WH: We already have staged execution that doesn't follow textual order. Functions get lifted to the top of their scopes.

MM: JS made the point about a bunch of data from existing users not being confuse. BT also reports users are not confused. So that corroborates JS position that execution order is not a problem. (that's separate from scoping). also combined with decorators that affect execution order, I retract my objection to changing execution order.

DH: some options: abandoned phased execution, [... I missed the rest]

MM: scoping of this, super, and arguments, and ...

MM: for all these, file issues on teh proposal

#### Conclusion/Resolution

- JM will bring a proposal in May
- DE will try to organize a call in advance
- please file issues on the proposal repo for all specific concerns
- some concerns seem to be: 1) execution order, 2) this/super/arguments scoping in both instance and statics, 3) initializers allowed in class body?

## Weak References

Dean Tribble presenting slides (https://github.com/tc39/proposal-weakrefs/blob/master/specs/Weak%20References%20for%20EcmaScript.pdf)

AK: What motivates the cross-realm restriction?

MM: Weak references open up a side channel: if I'm pointing at an immutable object, I can observe it going away. By separating the ability to create weak realms, that allows policing within a realm. But you can't police other realms.

AWB: So why wouldn't you use membranes to handle that?

MM: Yes, in that case you could handle it.

AWB: But it seems like realms are more general than the security use case.

MM: There is an enhancement that was discussed previously: if you have a WeakRefFactory, you can ... [didn't understand the full explanation, will follow up later (see issue below)]

DT: I'm going to time out the discussion. Let's add that to the issues list.

KG: Isn't there a race between weak.get() && weak.get().something?

DT: Within a single turn, once you've called .get(), the reference becomes strong until the end of the turn.

WH: So if you have an 'await', all bets are off?

DT: Yes, just as another job could have run and changed the state of the system.

WH: This now introduces a second side channel, which is that you can determine whether someone else has called weak.get()

MM: It's a statistical side channel, but you need to have the weak reference to begin with

DT: Let's cut this off and make it an issue.

[discussion of "minimizing non-determinism" slide]

DT: It's important that makeWeakRef is replaceable with something that has reproducible, deterministic behavior, e.g. for testing

SYG: How does the "Unintended retention mitigated" slide prevent bad programmer behavior?

DT: It throws an error

AWB: How can that be checked?

MM: If your holding's value is the target, then an error is thrown

WH: What if someone calls `makeWeakRef(this, () => closeFile(file))` and the implementation retains `this` due to sharing context with another closure in the same scope (as per the example in the presentation)? Is that a bug in the program or the implementation?

MM: You get a leak. The spec does not require that the weak ref is ever collected.

WH: So, unlike the tail call guarantee, there's no guarantee that *any* finalizer will ever run?

DT: We may try to tighten that guarantee, but for now, no, this is a programming error.

?: In addition to the general lack of guarantee, we allow closures to close over more of the environment than is explicitly mentioned inside them.

KS: I'm not entirely sure that separating the holdings into a separate argument, given JavaScript programmer practice, is likely to prevent programmers from running into this bug.

DT: You could have a lint rule, though: holdings provides a pattern for doing the right thing.

SYG: What if you 'yield' after calling weakRef.get()?

MM: That's up to the consumer of the generator: you have to assume that state may change between yield points.

WH: Is the implementation allowed to clear the weak reference while the object it references is still strongly reachable?

DT: No, the weakRef must not be cleared unless the target object is condemned.

WH: So how do you define reachability?

WH: Ah, then this will not fly:

```js
async function f() {

  let x = ...;

  let w = MakeWeakRef(...x...);

  await a;

  await b;

  foo(w);
}

function foo(w) {

  assert(w.get());  // this assert can fail in an optimizing compiler
}
```

MM: Yes, that's correct.

WH: Well than I'd like to understand how reachability is defined. x is still live at the time foo is called.

MM: If the future of the computation will use the object (navigates to the object and makes use of it), then it must be reachable at that point. So only if the implementation can prove that an object is not used in the future is it allowed to clear the weak reference.

WH: That still doesn't answer the question for optimizing compilers because the notion of the future is ill-defined. A compiler may take something that you think is in the future in the program text but does it early because it has no side effects other than on object lifetimes.

DT: Except for the clever thing to preserve this within a turn, implementations are allowed to collect things as early as possible, or as late as they want.

EF: I hope you are not attempting to specify when the collections will happen.

DT: Absolutely not. You can run collections whenever you want, even within a turn.

DH: In past discussions around weak references, there's a portability concern, and you mentioned between turn which something I've heard floated at various points. Not about security concerns, not bugs necessarily, just about different implementations collecting at different times.

MM: And even the same implementation collecting at different times.

DH: Worse, between implementations, you could test on one browser and then fail in another. But maybe GC is unpredictable enough in practice that this isn't that much of a problem?

DT: In a testing scenario, you can do more allocation to force more determinism.

DH: But that doesn't help here: if someone comes to rely on the behavior, it can work in one implementation but not other implementations.

EF: I can't speak for other implementations, but you may find that if you're debugging something, and then you go over to MDN to look something up, then you may go back to your test case and find that things changed.

AK: This is also a worry if your GC keeps things alive longer than another implementation.

DH: This might force better GCs to do the same, to match behavior.

EF: An implementation may keep various things alive for a variety of reasons.

DT: This is why we used to keep everything in one big weak array. We did this in Midori, and found that in a generational collector, then all those weak refs migrated to the older generation, meaning lots of pointers between generations. In this proposal, with a single object per reference, generational GCs could tie the generation of the weak ref to the object pointed to.

EF: I still think the concern has little to do with the GC's behavior. Our black magic is different than V8's behavior which is different than JSC's behavior. And that's completely opaque to me as a user, all I can tell that something is being kept alive, and I go pound on the door.

DH: Or that something that you expected to be kept alive was not.

DT: I think that's something that's not a problem in practice.

AK: DId you run your code on multiple implementations?

DT: Yes

MM: But not in the sense that the web platform has multiple implementations

DT: It was in that there were multiple optimization models, multiple architectures (with very different optimizations available), etc.

AWB: My experience has been that people rely on the idiosyncrasies of the timing of how implementations collect references. What it comes down to is: will people write mission-critical systems that depend on weak refs behaving in a certain way?

EF: I think that the stage process is exactly set up to handle something like this. We could create experimental implementations and ask people to write code against them.

DH: The problem is that this can't be polyfilled, so there's no good way to get developers to use this.

DE: Node has a weak reference API that can provide some of the same functionality which might provide code to use for this purpose.

SYG: What if you had an implementation that changed the weak ref to null at some point during the execution?

DT: You couldn't do that, since the object might still be reachable.

[KM/DT discuss various testing problems]

DT: Are we ready for stage 1? and then what is the gap to stage 2?

WH: Do we have consensus that this is something that we want to be adding to the language?

AK: I'm comfortable with stage 1, but not stage 2: I'm not sure this is something we want in the language

DT: Would it help implementers if there was something they could tell users when they report a bug, pointing at the spec?

DH: That's not really how the web works. When an Alexa top 50 site breaks, then something has to be done.

AWB: I'm just going to reinforce the same thing. This presentation didn't emphasize the unpredictability of whether your finalization will run. GC implementers understand that there are no guarantees about when, if, and how GC happens. Framework authors may not have the same understanding.

EF: At what level of the JS stack do expect this feature to be used?

DT: At the framework/library level.

AWB: Well, you can't guarantee that.

DH: And I'm not as worried about the framework authors. The problem is there's nothing stopping the long tail of authors from using it.

MM: I'd like to raise the similarity of this issue to that of the racy-read issue [in SharedArrayBuffer]. Once you make it available, some users are going to get sequential consistency in development, but get races in production. It's the same issue.

EF: The thing that makes me feel safer than the racy-read issue is the the weakRef.get() -> strong thing.

DH: That's a reasonable plausibility argument, especially the turn-based thing. But what about workers? Their turns can be arbitrarily long.

DT: So what would I need to do to get to stage 2?

AK: I don't have concrete thoughts there, I'm not convinced that this isn't a hazard for JS users.

AWB: On your list of things you need to address: I do think you need to address this turn-based behavior in a non-turn-based execution environment.

MM: In a long running computation, then you're no worse off than if you didn't have weak references. If you want to give the GC a chance to collect, you must add turn boundaries.

AK: One option would be for the champions to prototype this in one of the open source engines

DT: Would one of the implementers to volunteer to implement this?

DE: You could use Node, which already has a weak reference implementation.

SYG: I would volunteer to help one of the champions prototype this in our engine

AWB: This needs debate, and it needs implementation experience.

EF: The core of the problem is that the worries about the proposal are exactly those things that the proposal explicitly does not address.

#### Conclusion/Resolution

Stage 1

Open issue: deal with cross-realm stuff in more detail

Open issue: .get() -> strong as a side channel

Open issue:  address this turn-based behavior in a non-turn-based execution environment.

## Template Literals Are Broken
(TD)

(see slides)

TD: one of main points is to "embed languages"

TD: escape sequences introduce a problem

TD: can't embed languages if syntax is restricted to legal ES escape sequences

TD: proposal: remove escape sequence restriction

TD: cooked values option 1: cook valids, ignore invalids. could be footgun/surprising

TD: cooked values option 2: set cooked values with illegal escapes to undefined, devs can use .raw for originals

MM: option 3 we discussed?

TD: cooked values option 3: option 2, but use SyntaxError instance instead of undefined

CM: what about closing quote? eg [ \` ]

TD: \$ and \` are always escaped

DH: nothing we can do about "if you need to end in \, have to handle separately"

MF: ?

MM: for template literal tags that only pay attention to "raw" still see same raw content

DH: question is "can that be fixed", answer is no

MM: agree

AWB/WH: points out that undefined is better than a SyntaxError because of string concat

MM: withdraw option 3, prefers option 2.

DH: when you're designing that tag, you're making a library

AWB: only on tagged literals?

... discussion about it being a static error on untagged literals ...

DH: untagged could be thought of as sugar for builtin tag that throws on undefined cooked value

AWB: agree, could be handled

WH: a bit concerned about details; whether grammar can get out of sync with counting backslashes etc

DH: clearly stage 1 appropriate, will need lots of stage 2 spec analysis rigor

WH: similar to regexes, which have a cover grammar

... discussion about compat issue ...

#### Conclusion/Resolution

- Stage 1 acceptance

## Map.prototype.toJSON/Set.prototype.toJSON
(JHD)

Continued discussion from yesterday.

#### Conclusion/Resolution

- Rejected.

`toJSON` is a legacy artifact, and a better approach is to use a custom `replacer` that, for example, checks `[Symbol.toStringTag]` and dispatches to appropriate serializations.

The committee did not want to bless the `toJSON` approach by adding what would be an incomplete representation - one that would not obviate the need for developers to define their own serialization format and revivification logic.

## Aggregated FOSS parser pass-fail and equivalence tests
(KG)

#### Conclusion/Resolution

- needs lots of review, nobody volunteered
- decision left to Test262 maintainers
- Test262 are not conformance tests
- having additional repositories that are part of the Test262 project but not part of Test262 is OK
