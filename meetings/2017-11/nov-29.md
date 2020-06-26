# November 29, 2017 Meeting Notes
-----

Jordan Harband (JHD), Rex Jaeschke (RJE), Michael Saboff (MLS), Caridy Patiño (CP), Peter Jensen (PJ), Sebastian McKenzie (SMK), Fabio Rocha (FRA), Till Schneidereit (TST), Peter Hoddie (PHE), Michael Ficarra (MF), Kat Z. Marchán (KZM), Bradley Farias (BFS), Daniel Ehrenberg (DE), Kevin Gibbons (KG), Chip Morningstar (CM), Dave Herman (DH), Aki Rose (AKI), Godfrey Chan (GCN), Yehuda Katz (YK), Natalie Silvanovich (NSH), Adam Klein (AK), Alan Schmitt (AS), Andrew Paprocki (API), Chris Hyle (CHE), Mattijs Hoitink (MHK), Mark S. Miller (MM), Mathias Bynens (MB), Keith Cirkel (KCL), Justin Ridgewell (JRL), Shu-yu Guo (SYG), Zibi Braniecki (ZB), Mariko Kosaka (MKA), Sam Goto (SGO), Keith Miller (KM), Sebastian Markbåge (SM), Dean Tribble (DT), Jafar Husain (JH)

Remote:
István Sebestyén (IS), Brian Terlson (BT), Leo Balter (LEO), Rick Waldron (RW)

-----

## Opening, welcome and roll call

- [Agenda](https://github.com/tc39/agendas/blob/master/2017/09.md)

## 9.i.n XS engine (embedded JavaScript) update on conformance, source code availability, and graphical user interface capabilities

(Peter Hoddie)

PHE: (Presenting)

PHE: We have a full ES2017 engine for very high quality animated interactive UIs on extremely cheap microcontrollers.

YK: I thought it was interesting that you talked about the spec is not interested in getting smaller, but you then went on to say how that didn't matter. How do you feel about spending more time on the committee thinking about offline tools? There are existing offline tools like Babel but I don't think we spend enough time thinking about the features we add in support of offline tools. I wonder if you think we could spend more time on it?

PST: Yes, I completely agree. In fact we utilise part of the specs that allow us to strip out parts. Exotic behaviours use a dispatching mechanism and so we can detect if objects are there or not, and we can remove the features both user-facing and internal. This is what is incredible. We use bytecode and so the linker can know which bytecode is used or not. We have some similar behaviour to strip the language if such bytecodes are not used. It doesn't impact the runtime. We will continue to investigate this more and more. Anything in the spec that has the ideas of isolation or dispatching - these are very important to us. The worst is features that are spread a little bit everywhere - these are more difficult to get rid of.

YK: I think it's great that we have a group working on a high fidelity implementation with a serious offline compile step.

PHE: Yes you mentioned Babel briefly, the minifcation work going on for babel is fascinating - but its terrible for us! It does what it needs to do very well but its focused on minfying bytes used, not bytecodes used.

PJ: I love the 8266 microcontroller! Does it work on the ESP32 as well?

PHE: For context, that's the successor chip. Yes, it does work on that. We found it to be less reliable but it is supported.

RW: Does XS compile and run on MIPS?

PHE: Predecessors to XS we did. XS is Pure C, no JIT. It should compile anywhere. We build against GCC and Microsoft Compilers. In theory we should be able to run it anywhere.

MF: What features caused you the most pain? And what proposals do you think will cause you the most pain?

PST: Pain is a big word. Everything that can be stripped on compile or downtime, we're happy with. Features that in spirit do other things are useful for us though, suppressing `catch` argument is useful for us as it shrinks the bytecode. Features like Atomics and SharedArrayBuffers are also fine, because they'll only be there if the developer is using it. Where we have to dig more is where it is mixed, async function is part compile time but also requires Promises inside. So when a developer uses async function it brings an entire runtime feature with it. In the latest stage 3 proposals, there is nothing horrifying. In fact a lot are on the compile side, to some extend. Like Object spread. We will look step by step at all of them. Does this answer your question?

MF: Yes. I wonder if eval or Proxies are problematic for you?

PST: Proxies are fine; they're pretty well-factored from our perspective. On the device Peter showed you, eval doesn't work. It's not far from working though; we've more and more tests to do but on something like the ESP32 it could be closer to working. Of course if you bring it in, then its less room for other things.

YK: Its worth noting the spec allows you to omit eval based on the hooks Domenic put in to support CSP.

PST: Yes, as for Proxies, if you use it then its on there, otherwise it gets compiled out.

PHE: Yes we were using Proxies in PUI for a while, but stripped it out as we got more obsessive over performance cost of running code which used Proxies. It was more efficient to make our own built-in exotic objects.

#### Conclusion/Resolution

- This is awesome ;)

## 9.ii.i Pipeline Operator for Stage 2

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-pipeline-operator)
- [slides](https://docs.google.com/presentation/d/112oOoEQi1v-uP1jSVWVHCAK7oPA15VX_UP_yarzMeLI/edit#slide=id.p)

DE: (Presenting)

### Interaction of await and pipeline

DE: Last time, the committee asked if we could integrate async/await better with pipeline. For background, we can't make await implicit in each pipeline operator because await points should be explicit--it's like releasing a global lock. See the slides for a detailed investigation into two possible grammars, both of which have some issues. I propose starting without await integration, just banning `|> await` for now so we can give it semantics later.

YK: Clarifying question: are there usecases for wanting the existing semantics?

DE: I don't see why you'd ever want to await a function

YK: If there are existing use cases we need to reserve it or something

BFS: You say this is an open proposal for C#? Could you clarify C#'s reasoning for this behaviour?

DE: Well, its proposed for C# but I don't think it has landed. I haven't seen any objections on the GitHub thread though.

BFS: Did they consider putting await between the two sigils?

JHD: You mentioned invariant with parentheses. This isn't a precedent we have though.

DE: Yes, I think it'd be very strange if we didn't allow this.

KM: Would you not allow arbitrary expressions?

DE: No, we would not prevent arbitrary expressions; we don't have other situations where we permit some expressions and not others.

BFS: Which grammar is being used here? Are you using await with the |> prefix or is it `|> NoLineTerminator` await?

DE: I think await in general doesn't have NoLineTerminator

BFS: Correct but this is now a grouped lookahead

(Someone): What about `|await>`

DE: The limitation of that is that you can't have trailing await--you can only have await if there's another function coming after. Seems artificial and shrinking the utility.

JHD: Could you not just make `|> await` have NoLineTerminator after the await?

DE: This proposal doesn't change how AwaitExpression works--that's part of the async/await proposal (ES2017) and it doesn't include an NLT.

JHD: Yes, but I'm asking could we make a new grammar production?

DE: How would you ban the old one then? As the right hand argument of a pipeline operator is an expression, await is an expression - so we'd have to explicitly disallow await in nested expressions, which would be strange.

JHD: So can we just ban await expressions within pipeline?

KCL: There are valid usecases for await expressions in a pipeline, an async function that returns a function could be used here.

DE: Would `(await expresion)` work for those cases?

KCL: Yes

YK: If nobody ever uses it, its fine

DE: My proposal for now is we ban await with pipeline.

DE: (Committee has some more thoughts to come back to. Continue presenting)

### Arrow function integration syntax

DE: Should we permit arrows explicitly?

MF: You'd essentially have assignment expression there without yield. It would seem strange to not have the consistency of having arrow and not yield.

DE: What would yield do? Do you expect the previous result to be yielded?

MF: No, just like await, we would want to get a function out of a Promise.

JRL: Babel reports using yield in right hand as a syntax error.

KM: Its the same problem as await

DE: Its hard for me to understand the code evolution idea. When would you actually put a yield here?

MF: It might be possible to just _also allow_ yield.

DE: I'm sort of fine with not allowing yield. I'm hesitant to do what you suggest because people on the bug threads have anticipated yield having different semantics, where yield is treated more like a pseudo-function, yielding the previous thing that came from the pipeline. Here, though, we'd be using yield to get the argument that someone passes into .next(). I'm kind of happy about yield being banned by the grammar because of the ambiguous interpretation. Let's keep discussing this offline.

DE: (Continues Presenting)

### Inserting an argument in the list vs calling the whole expression

DH: I don't think you can answer questions like this by putting contrived examples on screen. We have to reconcile with real code. I'm not comfortable with this level of question resulting in a conclusion.

DE: You're right, this on its own is insufficient evidence. Justin has implemented this in Babel so we can collect more real feedback.

SYG: Who prefers option A over B on the partial application?

DH: I don't think B is the right thing but there's a strong association of member calls in JavaScript with passing in a `this` binding.

DE: I'm not sure what you mean about "no this". The existing semantics pass the receiver.

DH: So you special case it?

DE: Its not special cased, its just part of the call semantics. The spec is literally the semantics for calling a function, just evaluating the thing on the left of the |> first.

DH: So if I have `x |> y.z` vs `x |> (() => y.z)` I get different behaviours?

DE: Yeah just like if you have that without pipeline.

(Question from the room: Why would we consider inserting the argument in the list at all?)

KZM: Elixir has this kind of semantics. People who come from other places would expect B. I don't know if JavaScript should do this but thats where the precedent is.

DE: Well, pipeline is in lots of languages, and they are kind of split whether they go for option A vs B on the slides. For example, F# doesn't insert it in the list. See a bug thread on GitHub for similar syntax in other languages, either is used (EDIT from DE: I can't find the list now; I plan to compile it).

### Un-spoofable call operator

KM: Can i clarify with receiver and bind operator, how would you do this? `receiver::function`?

DE: Yes

DE: This is going very over time. Can we add this to overflow items in the agenda?

#### Conclusion/Resolution

- Continue discussion later

## 9.ii.d Revisiting parameter initializers and sloppy eval

(Adam Klein)

- [proposal](https://gist.github.com/ajklein/b947351835cc77ad0040db9a55813f51)
- [slides](https://docs.google.com/presentation/d/11xRhQlcNGBdmKC43lEx7fUP0wl-QtFLg55FwgAvLE2k/edit?usp=sharing)

AK: (Presenting)

YK: Andreas Rossberg spent time on this, and option 4 was discussed and rejected.

AK: I haven't seen this in the notes.

RW: I did this earlier with regard to this bug, I'll share those notes with you.

DE: Could you summarise this for the comittee now?

RW: Right now, no. I'd have to go back and reread.

MF: Have you contacted Allen about this? Allen had talked about why the design had to be this way. Allen may be able to reiterate this.

YK: My opinion is that I always preferred option 4, but I think I lost that argument. If we can reconcile whatever technical reasons not doing this, then I'd be for option 4. There may be good reasons but in the absense of them I'd be for this.

KM: At least 1 point is that JSC has implemented option 4 - and we haven't gotten any bug reports. So I dont know what the technical point is but we have it implemented.

MM: Clarifying question - does JSC do this only in sloppy mode?

AK: Its not visible in sloppy mode.

DT: How are you going to propose this?

AK: I was planning to do a spec pr, but analysis is the next step.

MM: Do we have a rationale for if something should be a proposal vs pr?

DE: I thought I raised this issue on a GitHub bug thread but it was rejected

#### Conclusion/Resolution

- Look back over old notes to see why option 4 is not viable.
- Andreas Rossberg's slides: https://github.com/rwaldron/tc39-notes/blob/master/es6/2013-09/default-arguments.pdf
- September 18, 2013 notes: https://github.com/tc39/tc39-notes/blob/master/es6/2013-09/sept-18.md#510-function-parameter-scoping-and-instantiation
- https://bugs.ecmascript.org/show_bug.cgi?id=3383
- AWB post on Dec 3, 2014: https://esdiscuss.org/topic/scoping-of-non-strict-direct-evals-in-parameter-expressions
- "I propose, that for scoping purposes, we treat such evals (parameter expression + non-strict + direct) as if they were strict evals. That means that all declarations created by the eval code are created in a new environment record that is discarded when the eval completes"

## 9.i.d String.prototype.codePoints for Stage 1

(Mathias Bynens)

- [proposal](https://github.com/RReverser/string-prototype-codepoints)
- [slides](https://docs.google.com/presentation/d/19KBzd3E2Bjwv43_v0-5-yusdBMsrnNy0OOpc9dkWTPU/edit)

MB: (Presenting)

BFS: Are you talking about doing this all upfront as an Array - or making an iterator? Is there a significant need either way?

MB: I'd be against doing the work up-front. An iterator is useful for stopping early, and doesn't require keeping *everything* in memory.

JHD: For matchAll I was asked to use iterators. They seem to be the new way forward.

JHD: So we already have APIs for code points as string values but this is for numerical code point values right?

MB: Yes

JHD: If code points were added in es6 as the default string iterator, and people don't want that after all, then should we extend the API surface around code points or grapheme clusters?

MB: What people want depends on the exact use case. Most of the time you probably want to iterate over graphemes. For parsers, code points. But there are also valid use cases for iterating over UTF-16/UCS-2 code units.

MB: Daniel has been working on `Intl.Segmenter` which is for grapheme clusters.

YK: I strongly express support for this proposal. It should also be an iterator because you don't have to allocate the array.

DE: There's a similar issue that comes in `Intl.Segmenter` (a stage 3 proposal for splitting strings by various locale specific options, words, graphemes, sentences, etc). Grapheme breaks is often what people want for character-by-character processing. Some Western European languages don't have this problem as codepoints are the same as grapheme clusters in the NFC normalization, but different languages these things are different. Harmonising between this proposal and `Intl.Segmenter` would be important. Maybe we could even make this as part of `Intl.Segmenter`, except that pulls it into Intl APIs. The other point is its difficult to opitmise away iterators, especially on the boundaries of C or C++ and JavaScript. `Intl.Segmenter` though, you're probably calling into a C++ library. One API of `Intl.Segmenter` is an iterator that gives you the break type and substring. The other API is to call advance repeatedly and it returns indices, you can advance a few code unit indexes and see whats in between a string. Possibly these are parallel to this.

MB: These are all good points.

DE: There's a lot here, so we can talk more offline about this.

DH: I imagine getting the number of code points in a string is O(n), so not a calculation that JS engines are going to do upfront?

MB: (confirms)

DH: It's useful to have an iterator because you can do this count right?

JHD: I don't care about performance here, I care about code clarity

DH: Yes, I think if getting codepoint count is used enough it might be a useful API but its possible here to just use the iterator.

JHD: Yes, the same could be said about .length though.

MB: We did discuss code point length prior to es6, but it was shut down quite quickly.

CM: This API is useful but if I want a range - normally with a sequence if I have `n` the next one is `n+1` but this isn't the case here? These is dealing with the impedance mismatch of having an array of things where some are 1 thing and some are 2 and this is just a mess. Maybe the thing is to try to clean up this mess.

MB: Well, we can't really change the way how strings work.

CM: It's more about what Dan was saying, if we have a sequence of codepoints that are 1 2 3 4 5 rather than this non sequential ordering.

MF: Having multiple views over a string is just like data views on TypedArrays, we can look at it as code points, graphemes, words. This is not problematic to introduce because of that.

KG: JS strings are not sequences of code points - you can have lone surrogates. I'd be surprised if a code points iterator gave you something that's not a codepoint.

MB: Ahh, are you saying you want to blacklist lone surrogates?

KG: If it gives you U+D800 on its own it's not a codepoint.

MB: It is a codepoint but not a scalar value.

KG: I'd be happy to see something like the iterator throw an error for these cases but I just want it to the be thought about.

KM: I like the idea of using object destructing — array destructing is problematic for data structures because it's another iterator call to destructure arrays — so generally I approve of the object destructuring

YK: You did a good job of describing the use case. The low level improvements here are good. Size on iterators are a good thing, maybe we could look at this and explore it? I think this proposal is good on its own though.

MB: Can we have this as stage 1? Great, stage 1 it is.

#### Conclusion/Resolution

- Stage 1 acceptance

## 9.ii.k Grammar constraints

(Dave Herman)

- [blog post](https://bocoup.com/blog/i-slipped-on-javascripts-banana-peel)

DE: I wonder if its worth documenting a restriction here?

DH: Yes I think trying to make invisible rules visible here is not a good idea. If we have consensus on rationale we should be able to articulate that though.

DE: JS is complicated to parse correctly, maybe other languages are more complicated - but the point is if we are saying the invariant is that JS is easy to parse, we're already beyond that.

DH: Agreed, the dam burst a long time ago. I don't think we want to hold that constraint.

SYG: Everyone has manually hand written top down parsers, with arbitrary lookahead. So I'm not sure a constraint of LR(1) helps us here.

(Someone): Don't some parsers have operator precedence parsing for expressions? But still, that within a recursive descent hand-written parser.

DH: So was it wrong to back out Mikes patch around not having static semantic rules? Maybe the constraint doesn't belong there at all. I don't think we can come to a conclusion without Waldemar and Brendan though.

DT: You made the point of unambiguous language designs. But we have unambiguous PEGs which are unreadable for humans. We need to have an aspiration of a grammar but human readability is important. We can say "Were mostly LR1" but we have good reasons for going beyond that.

DH: Yes I don't want LR(1) to just be the constraints. Its a mechanical solution to other restraints. Like we dont want proposals with large amounts of lookahead, LR(1) sets a constraint to highlight that these proposals might get push back. Separately, the grammar being formally unambiguous is a useful constraint. I'm curious about people with academic or encyclopedic knowledge of the grammar - can we set up a system for verifying the determinism to check this?

KG: It's probably doable currently. We could probably arrange things so it is always doable.

BFS: I somewhat agree LR(1) could be loosened, implementations are not using LR(1). There are complexities on going beyond that that we haven't talked about. Catastropic backtracking, ASI are guaranteed on single token lookahead with LR(1). Multiple lookaheads for arrow functions are just a convenience. I would strongly suggest ASI is single token lookahead only.

DH: Maybe thats a good way of stating a rationale of this quasi constraint. We want to avoid backtracking and extra lookaheads for ASI. Those are useful constraints.

BFS: These aren't perfomance constraints to me. Implementation and developer understanding.

DH: I simultaneously believe machine parsing complexity can lead to human parsing complexity. Sometimes machine parsing complexity is necessary to make things more understandable to humans. I agree ASI is error prone and anything that threatens that is risky.

YK: One thing I found weird about the LR(1) requirement - we have a room full of people that write JS parsers. LR(1) is a weak proxy for something engine implementors care about. V8 has raised parsing implementation errors, like not a separate strict mode parser or real time parsing - not covered by LR(1). Implementation concerns are best raised by implementors rather than weak proxies to constraints like LR1.

DH: In a sense you're stating my thesis. This is a legalistic proxy for the intuitive goals. I'd rather spell out the intuitive goals than using this proxy. I don't feel comfortable on consensus that LR1 is a constraint of the language.

SYG: Does the notion of bounded lookahead mean anything for implementors to parse? Unless we chose a specific parsing algorithm does bounded lookahead even make sense?

DH: Again, its the intuitive goal vs specific. We don't want to have too much lookahead.

SYG: Is it correct that v8 doesn't do backtracking?

AK: We don't rewind the token stream but we keep a record of info so we can construct things.

SYG: So for Spidermonkey, JSC and V8 theres some unbounded lookahead then. We don't have a problem with this. If we say we want a bounded lookahead does this fix ourselves to a specific parsing strategy?

DH: So if we added features that needs more of this stuff you'd be happy with it?

SYG: I don't think anyone _liked_ the lookahead for arrow functions but...

DH: So maybe we don't want to just do this willy-nilly. We don't want to add features that do this but no firm rule.

SYG: Let me try again. The question is: even if we make it possible to not do unbounded lookahead for one aglo, there are many different algos - and current parsers are implemented similarly. It could be mutually exclusive that unbounded lookahead for one is not bounded lookahead for the other.

DH: I don't have an intiution for this.

KG: Having bounded lookahead for descent parsers may be good. Even if its only valuable for recursive descent parsers, as far as I know every JS parser is this. Stating bounded lookahead constraint even if not for recurive descent parsers might be valuable.

#### Conclusion/Resolution

- Chase with Brendan, Waldemar for their feedback.

## 9.iv.c Distinguishing literal strings proposal for Stage 0

(Adam Klein)

- [proposal](https://github.com/mikewest/tc39-proposal-literals)
- [slides](https://docs.google.com/presentation/d/1o6o3uWLIBH9FervYIiFLIiNMt0qKz6chk_Xkb_UC5A8/edit?usp=sharing)

MM: Let's say theres an existing html tag which does context sensitive escaping. Being able to additionally verify that the literal parts fed to the `html` tag are literal in the sense of html is nice, but then the template parts need to be fed to the tag in order to do the escaping.

MWT: On one side we have trusted types that we want to add to the dom. The goal of that proposal is to give us a runtime mechanism for taking the output of a sanitizer, and saying this output is "good". Security reviewers will have a couple of chokepoints they can review and moves it from usage to creation. Once you have created a trusted object you can use it at will throughout your application. The second part is literals are important to us because what we've found is there are a significant number of creation points that use literals. Its often the case that folks put literal strings into their sourceode, and those are trusted signficiantly more than user input which needs to be audited. `goog.string.const` in the slides is a mechanism for saying that we know this is a literal that can only be made in the source code (thanks to transpiling). Today we take those strings and bless them in a way we wouldn't from input from the web. Allowing us to use template literals and interpolation for those literals is very interesting and we'd want to extend this proposal for support for that. It'd be nice to have an api in the platform that accepts a template literal and some typed objects that maps to a trusted value.

DT: When building systems you quickly go from embedded in the source to a config file, which is equally as trusted. But we need a way to quickly safely dynamically create these. As opposed to string literals just in source.

KM: How does it work if you send a literal cross bounds, say `postMessage`?

AK: Almost certainly.

YK: Much earlier versions of Glimmer used the TypeScript type system to do this. It was hard to do performantly. I'm interested in this idea about strings being perceived safe for code. Is this a goal of this proposal?

AK: Its a goal to make this perfomant yes.

YK: Secondly, I think it could be interesting to have it create a POJO with a brand that can be checked by the code. If its a POJO with a reliable shape then the code can check the brand, which addresses Dean's issue - it gives you a nice way to handle dynamic strings too - you just need the brand to be a shared secret.

BFS: Have you thought of making a new type instead of making strings have hidden options? This way if I pass it to a function I can still have a brand check.

AK: Im not sure what you mean by new type?

BFS: Well we have integer types.

DE: Do you feel that way about having template objects sent to the tag have internal slots?

BFS: If it changes over time, yes. If I cannot observe how a template object is qualifying as a literal or not I would have problems with this. I haven't though of this design space but gut reaction is: this is hard.

DT: We've done this before using a Subclass of string, which is useful as it gets discarded when concated and the like.

AK: So, strings wouldn't change at all. It'd be about the way template tags are called.

BFS: Yes. Does this have any impact on template objects currently being shareable in the same realm.

AK: That seems orthogonal.

MF: I want to talk about how we expect this flag to propagate. Two trusted strings concatenated could be trusted, but there are subtle variances. A good example of where the flag needs propagating - e.g. keys on objects.

AK: The proposal is in an early point. The most promising iteration is this one where the data is stored on the template object, not a string.

MF: It sounds equivalent when we need to consider propagation though.

AK: It basically doesn't propagate.

MF: Let's say I have a trusted url and port, and I want to concatenate. How does the result get marked trusted?

MWT: There are two things we're talking about. I may have conflated those unintentionally. The TrustedURL or TrustedHTML would be types in the DOM. This handwavey proposal is that those objects could have a tag function that is built in, which could check the literal passed into it. So the tag function says I have a literal, I can use that and bless it as a trusted url. So the result back is a TrustedURL object. The developer doesn't care if it was created through a literal or not, just that it is a TrustedURL object.

MF: So the type may have prototype methods for these compositions. But what if we want to go the other way around from TrustedURLs to strings?

MWT: At Google we have those, called SafeURL - not TrustedURL. The literal mechanism in the google code is based on goog.string.const. Those const object can be concatenated. This maps to the idea of tagging a string as being literal and tracking that tag through operations. Its conceivable we can concat two literals and persist the tagging. This happens inside the google code. In discussions we've had, it seems obligatory to have this in the langauge. Adding a special case for this looked a lot simpler than adding taint tracking. That said if y'all are interested in doing taint tracking.

AK: For the record there was a crowd uproar against taint tracking.

DE: Clarification about the internal slot. If you're concerned about it being only exposed through internals, there was a discussion about exposing it on the JS layer. We could expose it.

MM: There's an attack on this - we can change the proposal to address this though. With this represenation a genuine template object that comes from anywhere will pass this check. An eval can create a template object that carries this brand and pass that around. Another branding mechanism that is in the language on purpose exists for this - that is WeakSets. If you have an encapsulated WeakSet that is not visible outside the trusted function, it can use that to check the brand, keeping it in the scope of the trusted function. This also keeps us from adding an exotic object which I really dont want to add, and avoids an internal slot which fails for Proxies and Proxy transparency. A proxy to the WeakSet will check through the same membrane. So now an evaluator can fail to brand these, or go ahead a brand them specific to that evaluation. So anything in the program that called eval is using the brand check continue to work _within_ eval, but outside of it.

AK: I don't think that solution works well in the general case. The vulnerability I recognise is problematic.

KM: You could just ban creating trusted objects in eval.

SM: Have you considered an opt-out mechanism instead?

AK: This tied into Marks thing about eval.

SM: I also noticed the discussion around concatenating and what we'd want to allow. I see a problem with each option. If you do a lot of concat, thats a lot less safe. We often see adding prefixes to something is what causes the security holes. But if we dont allow concat then this fails for other cases, like `'' + string` for coercion.

MWT: Yes, there are cases where its safe and not safe. I dont know the google library well enough to see what we do here, but in general I agree with you compeletely. In general concatenation is not a safe operation. On the web I'd rather we do this with templates than concat.

MM: With concatenation we could have a `cat` method which could wor like ` cat`${a}${b}` ` which could do the brand checks for each value and return a trusted string or not, depending if they all pass the brand checks.

DT: So the point is: what is your security goal. If its "im combining stuff we took from developers vs users" thats really useful, but its different to "i dont trust anyone". So when to use cat vs not is just a lint tooling.

SM: We probably shouldnt allow additon with the + operator, but if we dont it creates new problems. Again, `'' + somestring` can be stripped out.

MM: Let's not get confused about the words here. Its never a string itself thats branded, its an object that contains the string such as a template object.

CM: If I have 2 trusted strings, concatting gets me back a trusted string - this doesnt need to be true at all.

SM: Im basing this on the example on GitHub. One example is two declared literals which are added together. Treating that has having literalness.

YK: Security proposals need to enumerate their exact threat models; it seems like we are talking over a number of different threat models.

AK: This is more to take the temperature of the room; more details for threat models next. Stage 1?

MF: is this well-defined enough for Stage 1 without a well-specified threat model? Can we actually solve this?

AK: Mike's interest is integrating with the DOM trusted types proposal. Maybe the committee would like broader goals, though. XSS in strings is what this proposal is about.

MF: That's quite general.

BFS: Why focus on strings? Good to document while moving forward.

AK: Due to the way web specs are handled in multiple bodies, larger complex objects are handled in that other spec body.

BFS: I'm thinking about things like numbers

AK: I was trying to *narrow* it, but I agree that literal numbers can have similar properties.

MM: I find this proposal reasonable and want to see it go forward _only_ if the only things are branded are objects with identity. Branded values I would hate to see go forward.

AK: Discussions with implementations, I think that does make sense.

YK: I want to back Bradley up, TypedArrays, WASM.

KM: WASM has different solutions.

RJE: So any opposition to Stage 1?

#### Conclusion/Resolution

- Stage1, with a goal of this proposal being to provide necessary language-level support for the WICG Trusted Types proposal (https://github.com/WICG/trusted-types)

##  Inheriting private static class elements discussion and resolution

(Kevin Gibbons)

- [proposal](https://github.com/tc39/proposal-class-fields/issues/43)
- [slides](https://docs.google.com/presentation/d/1wgus0BykoVk_qqCpr0TjgO0TV0Y4ql4d9iY212phzbY/edit#slide=id.p)

KG: (Presenting)

BFS: On the static public fields shadowing, what happens when you assign to null?

KG: Nothing

BFS: That is the behaviour of super.* now

DE: You can still use super.constructor.

MM: How does super property access in initializers work when the super constructor is called from a different place?

KG: The superclass is thunked--references to this, super, etc are lexical, not based on where super() is called.

RBN: Is it worth changing the spec to support a prototype chain walk for private names so they behave similar to ordinary properties? Then we just have to solve one issue - if static fields need initialisers or something else.

KG: The current spec is heavily based around lexical scope. I'm not sure how it'd work with this.

RBN: I can raise the issue again on GitHub

DE: The basic idea is the design goal for private fields is they should be unobservable from the meta object protocol - we cannot have things intercept this. If we start looking up the prototype chain we call things that are interceptable.

KM: For class you could walk up the home object chain and verify the class matches the one you're looking it up from. You walk until you find ones that match. When you do `class extends somethingelse` you have an invisible side prototype chain.

DE: No the method has a home object which is the current class.

KM: The super chain?

DE: There's no separate super chain; it's just the __proto__ chain of the home object. For static methods and fields, this is the constructor and its prototype chain; for instance methods and fields, it's the prototype chain of the prototype object. We can't make a parallel "super chain" because if you mutate the prototype chain it should be reflected.

BFS: I also am concerned about crawling the prototype chain. I would be opposed to this. The obvservability and interceptability for things intended to be private would make them useless for nodes internals. Similar to self hosted functions, we'd need to avoid these if they're observable.

JHD: I have the same concern. If even the existence is observable, I have a problem with that.

MM: If we completely ban all static data, and a programmer using JavaScript in which decorators have been implemented - the currently anticipated semantics. If the decorator gets a thunking of the initialiser - could not a programmer who wanted _some static data semantics_ not implement an @static decorator.

KG: Yes but its use would be awkward. You couldn't refer to `this.#field`... so I don't know how you'd get that.

MM: Good point thank you. I think we should get rid of both public and private static data. Not introducing things that cause confusion is better than implementing with some confusion.

KG: That would also mean banning private static methods.

DE: Are all proposed solutions insufficient?

MM: The best resolution is to remove these.

DE: For the private static methods - they don't share the second concern.

RBN: Back to walking prototype chains - you wanted privates to work in light of changing the prototype chain. I agree. Changing these today doesn't effect it as they're assigned to the object not the chain. The lexical side chain which you have available during class declaration could be an approach. For private members you can follow this rather than the prototype slot. Similar behaviour to how public fields/properties work today. Maintaining a list of base classes during declaration and using this to walk solves this.

KG: Would this be equivalent to the proposal of copying fields? But not rerunning the initialiser. Just pointing to the fields.

RBN: No I'm saying maintaining an internal slot pointing to lexically scoped super class. Walking that chain over the prototype chain.

KG: I dont think you'd even need that, you could copy a reference.

RBN: Whatever we pick for public static, we could emulate for private static

KG: We really don't want to do that, public static walks prototypes.

JHD: Public statics are very very important to React. Banning them is unnaceptable to me. I want to make sure we note this. I'm content to see privates statics banned, but not public statics.

DE: To Ron's comment about walking prototypes, private fields can only be filled in within the class. Mutating constructors prototype chain, you could subclass the super from outside and have a class that observes these fields. Keeping a side prototype chain is a significant complexity. Traits tried this, its too complex. Meta object protocol is very complex already.

KG: We should discuss this more on GitHub to ensure everyone is clear.

YK: Im not in favour of rewriting intialisers. Value and reference types should be included in footgun examples. I want to echo Kat's sentiment - originally hearing of static privates I don't understand why you wouldn't just close a scope over your class. Private methods have this same problem. Should we just evangelise lexical scoped data for static private?

DE: Lexical scopes don't let you access instance fields.

YK: This doesn't matter for fields. The worry is we're taking a long time to address these footguns, this makes me nervous.

RBN: TypeScript now has a behavior for static fields which is like the current behavior. Subclasses inherit. We haven't had too much in the way of negative feedback for this. Our first implementation targeted ES3/5 and so we eventually migrated to ES6 for things like static methods and super. Our field implementation was changed to work the same way.

KG: The argument that this won't be surprising is not valid for me. I wrote JS for 10 years without realising this footgun, static fields makes this much more common.

RBN: My point we've had this in TypeScript for several years without issue.

AK: V8 has recently finished out public static fields implementation for now so I'm curious; the process document says only changes critical based on implementation should change. How are these that?

KG: We saw these as it was being implemented in Babel.

DE: I'd like to solve this in this meeting. We're at stage 3, and we have had these issues around for months. I don't believe the alternatives will present implementation difficulty, but we need to come to a conclusion.

AK: I'm not concerned about how hard it'd be to implement. It's the signal I'm concerned about. Now it seems working on stage 3 proposals these too early could require significant late stage changes.

KG: Thats always been the case, SIMD.

AK: Yes, its more about _is this critical_. These don't look _critical_.

DE: I wanted to give a chance to discuss both and how they're related. The first one is generating a lot of interest. My goal is to resolve this as quickly as possible after reaching stage 3. I should have allocated more time in the previous meeting to discuss it.

KG: I spoke about public statics in the context of a change which would fix the problem for private statics; would not have raised on its own.

MM: If we rewrote the static public field as an accessor with a closed variable - would this help?

KG: It wouldn't do us any good for static private.

MM: Okay, well my first choice is we should ban these for both cases. Issues of user confusion is more critical than implementation concern.

DE: Yes, but we should have a concern to solve these issues by stage 2. In this case I didn't do a good job of raising user confusion issues earlier.

MM: My second choice after banning everything is banning all but static public with the semantics of effectively declaring an accessor property - as just stated.

??: We have a few hundred devs using these without issues.

TST: Yehuda pointed a fatal flaw in `let field` solution. I also dislike the `{classname}.#{field}` syntax. But we haven't discussed enough the `static.#{field}` syntax.

YK: Yes, I agree. As far as I can tell all the issues are around typing `subclass.something` or `this.something` - maybe we could explore options of stopping people doing that. I will likely add a decorator to my own code for this.

KG: It's still useful to do the sharing of data across the body of a field. Having methods work in a subclass is useful.

YK: Its good to be allowed to write that but its also good to be allowed to say "I do not intend that". The fact these get subclassed by default might be a case of exploring more narrow mitigations.

DE: We're don't seem to be approaching a nice conclusion. Conservatively we could ban static field and static private, we could do this and pursue them in a later proposal.

JHD: We'd be highly opposed to ban this.

CP: Yes, web components use this too. Too late.

JHD: Too late because the value has been demonstrated. Banning now confuses users more.

YK: This only applies to public.

JHD: We'd be fine banning private, not public.

MM: What about accessors for public?

KG: It wouldn't be worth it as it doesn't fix private static.

DE: We could ban just static private fields and methods while permitting static public fields with current semantics.

MLS: I'm channeling chip with the term "piecemeal".

CM: Yes, but the ship has already sailed. In my opinion everything within classes is a clusterfuck. Thats just how it is. We keep tying ourselves in nots trying to get these twisted paths. Taking a step back and looking at a whole might be worthwhile but I feel we're no longer in a position to do that.

MLS: So my feeling here is we can incrementally make it worse to make it better later on.

KM: I'd like to avoid entering to a place where things don't interact well together.

DE: So the third method is `{classname}.#{field}` to get an element. Allow public static, fields with `this` but private static only be accessed via the class name.

MM: Yehuda's point is the functionality is equivalent to lexical variables in scope. Theres no point in adding this. Omitting static private completely is the superior solution.

DE: The downside to this is you don't have access to private methods and fields inside of the class from outside of the class.

KG: Let's say I'd be able to write a brand check, I need to access instance private fields to do this.

MM: Right, I got it.

YK: People have this piecemeal sense. We don't _have_ to implement static private fields right now. The huge majority of cases where people want static private fields do not hit this issue. Claiming we need to implement these all at once to be coherent is making us less coherent.

JRL: If we move forward with public static, it forces us to have a bad representation for private static. We don't solve the root cause. I want to reiterate banning public static does have uses. We have issues of sharing these in backbone classes, React doesnt mutate proptypes but that's not true of all frameworks. We should rerun the intialiser for public static and private static. I can make an issue about this for all the problems we found with Backbone.

YK: We can't have this advance.

DE: Its not looking to advance - its stage 3. We also talked about demoting to stage 2 last meeting and it was rejected.

AK: Again I'd like to talk about the process term "critical". Justin you want to solve this as "critical"?

JRL: Yes, we had multiple problems with Backbone. It'll crop up again.

YK: Multiple people in the room are deeply concerned about private static now. It's weird we feel the need to go forward.

DE: I want to bring back the idea of leaving out static fields and private static. We could split this into two proposals. Work out the remaining issues and ship the working parts. I understand its critical for users to have these features - but for now this can be done with transpilers.

MLS: Didn't we bring them together to solve this?

KG: The issues for why we brought them together have been resolved. They had cross cutting concerns, those are now solved. Are we are all comfortable with instance fields, private and public?

JHD: One of the main arguments for merging proposals was they all had similar semantics. Splitting them up is fine if we can keep them all looking similar.

MLS: Do we solve new problems by splitting them?

DE: No but we signal that instance fields are stable and ready to strip.

MM: Also the previous split was public/private, the new suggestion is static/instance.

MLS: I just have an inkling we'll end up with something worse if we split them now.

YK: Are people happy with keeping it together will slow down the whole feature? We cant keep moving with it as a whole.

MLS: Do you think it'd delay _past_ ES2019? A delay of 3 or 4 meetings wont matter for the spec.

DE: I don't think the annual cutoffs are as important as the actual time when we reach Stage 4; 3 or 4 meetings is that many months of delay. Anyway, it seems we've lost consensus for stage 3, it seems appropriate to demote to stage 2.

AK: The option is to be clearer about what is up in the air.

YK: Why isn't that identical to just demoting the _part_ that is up in the air?

DE: If there's anything we can do to make the GitHub issues or forums more accessible then we should do that.

KG: I'd be happy to say instance fields won't change. The problem with semantics for statics is we're revisiting because we discovered an important issue. Absent that discovery for public they wont change.

AK: What's the downside to moving to stage 2?

DE: This is important for a lot of users. Demoting means it takes longer to get to those users.

KG: So consensus on moving down to stage 2?

YK: Why don't we move to stage 2 and come back with a concrete proposal to separate these.

KG: So consensus to stage 2?

#### Conclusion/Resolution

- Class fields and private methods proposals demoted to stage 2 (NOTE: the next day, the instance aspects of these two proposals re-advanced to stage 3.)

## 9.iv.b Decimal for Stage 0

(Andrew Paprocki)

- [slides](https://docs.google.com/presentation/d/1jPsw7EGsS6BW59_BDRu9o0o3UwSXQeUhi38QG55ZoPI/edit?pli=1#slide=id.p)

API: (Presenting)

MM: When we rejected Decimal previously; it was the IEEE version and we rejected it on normalisation issues. We needed some kind of away to introduce user defined types that overload operators, but now BigInt has a special case which paves the way. They'll likely deviate from semantics of user defined types and operator overloading. This however is harkens to Promises - if we pick one of these options - we've picked one, despite letting users try it out. The case of Promises was that we saw a lot of effort in userland, community use, competition, and we could pick the right decisions. If we add value types and operator overloading, then we get the same opportunities here. We should enable this experimentation rather than pre-empt by making this choice.

API: There's nothing precluding JS right now - except for the syntatic sugar.

MM: The syntatic sugar is a huge deal.

DE: Well JS userland exist and have made these decisions, we could use that data.

MM: True. But the audience that will use it once we give it syntatic flavor will be much much larger and it'll have a different character. I dont want to introduce yet another special cased number, without introducing a reasonable abstraction mechanism. As you've shown there's a lot of choices - we shouldn't be maing those choices.

DE: I'm not sure those choices will affect the majority of users. Once you have a decimal library that's there, people are generally okay with it.

API: From the end user perspective there's no real difference between say bigdecimal or decimal because the key to it is in the encodings.

DE: bigdecimal.js has more users but it has a smaller package size.

MM: The options you demonstrated suggest that isn't the case.

YK: The existence of libraries demonstrates the use cases are taken care of - so the issue becomes around syntax.

DE: We need to get feedback aroung value types and WASM, as WASM is dealing with garbage collection

YK: Secondly there is a big difference with Rational and BigDecimal. You cannot express 1/3rd for example. Ruby has both, I tend to use Rationals in ruby. If a language has multiple options or high fidelity libraries - if people care they just use the other thing. I'd be concerned if we raced ahead with one or the other.

API: I'd be fine if everyone wanted to wait until value types existed. However if this has the value of making value types better I'm happy.

DE: I have no plans to introduce operator overloading any time soon; I have only proposed extensible literals.

KCL: I was going to propose operator overloading this meeting but didnt have time to finish it.

TST: A year ago we worked on typed objects but stopped because of WASM. Value types may not suffer these problems. It makes sense to explore value types more.
--> Link to last version of the value types explainer: https://github.com/tschneidereit/typed-objects-explainer/blob/master/valuetypes.md

KM: In particular with Rationals, if we did it in an engine I'm not sure it'd be substantially faster than a userland library.

API: I don't have data on Rationals, we don't use Rationals. IEEE fixed decimal is a lot faster for tight C code. The key is more representation inside the engine than performance - I'm not saying performance isn't important but standardised interchange is.

DH: I disagree with the notion that we can introducing decimal floating point as a more correct version of IEEE floating point. Just because it doesn't exhibit the same bugs doesn't mean it doesn't exhibit bugs. If we want to give people trust in dealing with money and numbers then thats a different motivation. I just want to make sure we get clear about the problems we're trying to solve - motivations matched to solutions. If we want to just people doing fractional math, decimal floating point might not solve that - but if we are concerned on interchange then maybe it will.

API: Giving people a mechanism for better fractional math doesn't preclude any option. The point of IEEE standard decimal is to deal with crossing the language boundaries.

DH: I'm claiming that I've not been convinced that "I want people to do math and it just work" is solved by decimal floating point.

DT: This is about making it easy for semi-good programmers to get rounding with decimals work. IBM spend millions on decimal just to solve this problem. Let's split this topically; an audience of financial programmers are served by this.

DH: I've been here 11 years seeing this happen before, people use the 0.1 + 0.2 troll as a way to explain introducing new features which are just as bugged. There is no way to implement infinite numbers in a finite space.

API: Well yeah of course everything has a trade-off.

DH: I'm just trying to find proof that this improves the math for Dean's suggested audience of financial programmers.

API: If we go forward I'd really like to present to peope I know in the industry and see where the way forward is. I just didnt want to do that for stage 0. We have a developer working on the C++ proposal for this, I didnt take up his time with this.

DT: A thing to think about is there is a question of precision - so we have a question of if the precision is important, normalising shouldn't affect the math. Say I dont have fractions I have bounded fractions then I should still be able to increment them and do the math etc.

API: Yes it's something we have to gather data on.

JH: Is it as important, given WASM - to let value types bloom? Someone will end up with something like Rational, and it'll be good, it'll be fine for the use case. I'm happy with stage 0 though.

API: Everyone's raising good points. We want to come back with the data gathered and see if one path shines over another. If that exists to feed into value types, then I'm happy. Is anybody opposed to stage 0?

YK: I think its impossible to oppose stage 0

#### Conclusion/Resolution

- Stage 0
