# September 28, 2017 Meeting Notes
-----

Andrew Paprocki (API), Brian Terlson (BT), Chip Morningstar (CM), Claude Pache (CPE), Godfrey Chan (GCN), Jordan Harband (JHD), Leo Balter (LEO), Maggie Pint (MPT), Michael Ficarra (MF), Michael Saboff (MLS), Patrick Soquet (PST), Peter Hoddie (PHE), Rex Jaeschke (RJE), Rob Palmer (RPR), Ron Buckton (RBN), Sam Goto (SGO), Sebastian Markbåge (SM), Shu-yu Guo (SYG), Waldemar Horwat (WH), Yehuda Katz (YK), Mathias Bynens (MB), Justin Ridgewell (JRL), Kyle Verrier (KVR), Keith Cirkel (KCL), Till Schneidereit (TST), Aki Rose (AKI), Daniel Ehrenberg (DE), Valerie Young (VYG), Rick Waldron (RW), Dave Herman (DH), Henry Zhu (HZU), Tim Disney (TD), Caio Gondim (CGM), Brittany Storoz (BSZ), Sathya Gunasekaran (SGN), Domenic Denicola (DD), Richard Gibson (RGN), Michael Z Goddard (MZG)

Remote:
István Sebestyén (IS), Ben Newman (BN), Caridy Patiño (CP), Keith Miller (KM), Gabriel Isenberg (GI), Zibi Braniecki (ZB), James M Snell (JSL)

-----

## Opening, welcome and roll call

- [Agenda](https://github.com/tc39/agendas/blob/master/2017/09.md)

## Other Test262 updates

LEO: During this meeting we hold some break off sections to talk about Test262 and we had some productive conversations to move it forward. We should have another meeting today, probably on lunch time and everyone is welcome to join. We should release a report after this meeting.

## Updates on the Code of Conduct Enforcement Committee

LEO: Since Tuesday we found more volunteers and I'm now vouching for Maggie Pint to steward this group and I'm also deferring to her to give more updates about it.

MPT: Volunteers for the code of conduct enforcement committee include myself, Jordan Harband, Jory Burson, and Aki Rose. I would like to approach Myles Borins to work on this as well. Our first action will be to create some scenario playbooks to help the committee understand what course of action will be taken when code of conduct violations occur. These are something that we can publicly share and accept feedback on.

LEO: To confirm this is approved by consensus, I'd like to ask if anyone has any objections.

(no objections)

#### Conclusion/Resolution

- consensus

## 15.i flatMap for stage 3

(Michael Ficarra)

- [Explainer](https://github.com/tc39/proposal-flatMap)

MF: Updates:

* no longer looking for stage 3
* IsConcatSpreadable has changed to isArray check. Reason: 2 was opt-in to very limited exception in Array methods. X.prototype.flatMap should flatten Xs only.

#### Conclusion/Resolution

- Stays in Stage 2


## 15.iii String.prototype.matchAll for Stage 2

(Jordan Harband)

JHD: (reporting follow up items from discussion: questions and change requests are resolved). Waldemar withdrew his concerns over dinner — addressing the problem wasn't worth the extra complexity here. Can explore a flag that finds all matches (including overlapping ones) in an independent proposal if we like.

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers for Stage 3:
    - Daniel Ehrenberg
    - Mathias Bynens

## 12.iv.b Decorators: detailed discussion of proposed semantics (cont)

(Daniel Ehrenberg)

RBN: Private name API. Decorators on two different class members that add an "extra" with the same name. Collisions? Talk offline.

JRL: Why not WeakMap?

DE: WeakMaps have stronger GC guarantees than what we want for private names. If all references to a WeakMap go away, all contents of the WeakMap should be collected, whereas that's not true for private names. It's harder for implementations to provide those stronger WeakMap semantics, whereas private name semantics can be easily implemented using hidden slots on instance objects.

YK: WeakMaps ok for babel.

DE: (identifying implementation tradeoffs)

JRL: What dos the getter and setter do to public name

DE: Throw an exception

JHD: (echoing Bradley's concerns)

DE: What does the committee want for decorators to be brought to stage 3?

YK: Ron's concern

DE: Need detailed reviews

YK: Concerned about decorators falling behind private state, because private state is influenced heavily by decorators.

#### Conclusion/Resolution

- Reviewers
- Waldemar Horwat (for January meeting)
- Dave Herman
- Sathya Gunasekaran
- Bradley Farias


## 13.i Object Shorthand Improvements

(Ron Buckton)

 - [Explainer](https://github.com/rbuckton/proposal-shorthand-improvements)
 - [Slides](https://docs.google.com/presentation/d/1tsE8sbLBvi-1xHPaeeI9u50ktqDub2EfhyrrvTEkfRA/edit?usp=sharing)

RBN: (presenting slides)

DH: In your examples your computed keys are all literals, but it works for any expression right?

RBN: Right

CM: What problem is this trying to solve? This looks like more stuff to put in my linter to stop using.

RBN: This is a feature available in the C# language.

CM: Do the code savings pay for the cognitive overhead?

RBN: I'd say the cognitive overhead is the same as existing shorthand

CM: Which are already problematic. I think they were a mistake to begin with.

RBN: I'm on the side of them

CM: People like them, that's how they got there.

JHD: The renaming thing, while powerful ends up confusing people. I feel this would have a lot of cognitive overhead. I also agree with Chip.

AR: Object destructing is good but it is so powerful it can be difficult to understand. This feels like it compounds this.

YK: All the forms here can already be done by existing syntax. I agree with others about the cognitive overhead. The thing with existing destructuring is that it mirrors the style of object creation but this goes further. This feels confusing.

SGO: I am worried this becomes an anti pattern as soon as it is shipped. If you don't own the object you are consuming, and the o.x is changed to o.y, your code breaks. How does C# view this problem?

RBN: Well C# is statically typed so we have compile time checks for things. In JS we have TypeScript or Flow to cater for this. This proposal is designed to progress the shorthand notation; you can destructure deeply currently, and use spreads. This is designed to bring the deep destructing properties and spread to a top level.

DH: Can we make it a point of presenting to show people not just contrived examples and instead present actual use cases. What DHH says from rails; "show me the code". In addition some A/B slides of "this is what the code looks like with this feature, this is what the code looks like without"

RBN: If the concerns are we need more examples, I don't want to abandon the proposal.

MPT: I understand the hazards of not having a type system - but this is always the case. The problem Sam describes should be lintable; but the hazard is no greater with or without a type system.

YK: I agree.

DE: So for private fields this would just be an early error.

WH: This proposal overlays property definition and expression grammars, which poses grammar problems. Suppose you start parsing an object literal:  `{ get[foo]` looks like the beginning of the definition of a getter, but then it can be turned into an expression that looks up an property of the object named `get`:  `{ get[foo].x }`. I can come up with many of these examples. This would preclude a range of ways we might want to extend the property definition grammar.

DE: I understand the objections, but personally when I learned destructing I expected this to be a part of it, I was surprised it was not. I find it intuitive.

RBN: I dont believe the grammar issues are unsolvable.

DE: We've solved grammar issues in the past.

RBN: You're saying that adding this feature increases complexity of adding new features later on?

WH: Yes, and that complexity is not worth the benefits of this feature.

(roll call)

WH: I object to this for stage 1

YK: I also object.

DE: I somewhat support this.

#### Conclusion/Resolution

 - RBN to address concerns and re-present.
 - Not promoted to stage 1


## 13.iii Nullary coalescing operator

(Gabriel Isenberg)

- [Slides](https://docs.google.com/presentation/d/1m5nxTH8ifcmOlyaTmTuMAa1bawiGUyKJzQGlw-EVSKM/edit?usp=sharing)
- [Explainer](https://github.com/gisenberg/proposal-nullary-coalescing)

(Gabriel Isenberg)

GI: (Presenting)

DE: Why not stage 2? The definition of what triggers going to the alternative -- we are talking about "null or undefined" only. Is "null or undefined" the right choice?

Everyone: yes

CM: Use of `?.` in the examples are confusing. Can I see an example without optional chaining?

MF: Read the spec text.

YK: "null or undefined" well motivated. Especially to check whether or not could be used to dot index.

DE: Stage 2 was the concern about syntax, which is about relationship with the optional chaining "?." syntax

JHD: Operators in optional chaining proposal should be considered at the same time as this. Both should be considered in stage 2.

MLS: "?|" makes sense to me

WH: We keep bikeshedding the optional chaining proposal. But none of that affects the use of `??` here.

DE: "??." or "??[" in optional chaining would mean we can't consider "??" here. Stage 2 things should have a moderate level of stability.

WH: `??.`, `??[`, and `??(` in optional chaining does _not_ mean that we can't use `??` here if we ship the proposals at the same time.

DE: It would break behavior

WH: No, it wouldn't, as long as we ship them simultaneously so there is no existing behavior to break. Just introduce four lexer tokens `??`, `??.`, `??[`, and `??(`. The lexer automatically picks the longest token. It's the same situation that we've had since the beginning. For example, `-` and `--` are both tokens even though one is a prefix of the other.

JHD: Stable semantics are important in stage 2, not syntax.

GI: Waldemar suggested `??` to align with all proposals.

WH: We cannot, for example, introduce `-` and later `--` because it would break existing code that subtracted a negative number from something. However in this case we can introduce `??.`, `??(`, `??[` all at the same time and the lexer can differentiate between them.

DH: We should be considering these together - that is important. We don't need to heavily block everything though; for the record I think we could bikeshed forever, but `??` is an excellent syntax for this. I am unlikely to like a third character for the other proposal.

WH: To clarify, I was presenting this as an option because some people wanted `??.` for the other proposal; I personally do not want `??.`; I prefer `?.` for the other proposal.

DH: Yes its important for us to air this. I don't want us to feel we have to solve everything here though.

GI: I'm happy with the feedback but I feel It's useful to look at them in isolation.

MF: We don't need to consider the syntax before stage 2. We dont need to block it.

YK: Even for a syntax propsoal?

MF: This is _not_ a syntax proposal. Yes it has syntax but the importance is the problem solving nature. The point is stage 2 should be blocking

DE: If we were to go with `??.` and `??(`, there would be a conflict between whether you're referring to the nullary coalescing operator or optional chaining. It sounds like Waldemar wants to differentiate based on whitespace, but I think that would be too confusing. This case is a little different from `--`; it's a qualitiative thing. I think that using `??` with an array literal is more common than negating a negative number. You may really want to write `x.y?? [1]` to default to `[1]`, or you may want to read the "1" property of `x.y` if `x.y` is not null as `x.y??[1]`--if we differentiated these only based on whitespace, it would come up in real cases in a confusing way.

WH: I agree with that reasoning, which is why I personally prefer the `?.` variant for the syntax of the other proposal.

DH: `?` as a sigil conveys the sense that there may or may not be a "thing" here. It's intuitive; even if you are unfamilar with the syntax you can intuit it from the use of `?`. In addition `??` fits in well with our double character infix operators. `?.` though feels right because you're modifying the `.` operator, but `??.` feels like applying an infix operator to this; so it does not fit as well. `?.` for properties and `??` as an infix style operator feel right, other styles do not.

GI: Using `??` for this proposal feels right - its uncontroversial. Shall we look at stage 2? Any objections to Stage 2?

YK: Dave did you have a comment on the nully thing?

DH: No strong feelings on if this is a stage 2 or 3 question - but what are we doing about nully vs undefined? Both are plausible. We have a convention of `undefined` meaning "not there" at current; so refactoring paths between old code and the new operator it would suggest `undefined` is a use case; however nully is also a common use case. My point is we should have a useful, well reasoned, one sentence explainer on if we are going with nully or `undefined`.

JHD: There are many conventions of null and undefined being "not there". I'm not trying to advocate for any position but there is a group that feel null and undefined. In React for example when you want to render a JSX element on a condition - it's a common footgun that falsy values that are not actually false or null will get rendered, this operator could complement this use case. If this only worked with `undefined` it would not address all usecases such as this.

DD: There are two camps. If you come back and say its null or undefined without good reason then it might not progress.

YK: Yes, but don't just go away and write an explanation of why null or undefined is right, instead also figure out _if_ that is right.

#### Conclusion/Resolution

- Stage 1 acceptance
- Need to work out syntax with respect to optional chaining operator

## 13.i Partial application

(Ron Buckton)

 - [Slides](https://docs.google.com/presentation/d/1GSnqtT1jHbilIAwCuaK2yjKNj0y6cLfJNisZDig3Nm8/edit#slide=id.p3)
 - [Explainer](https://github.com/rbuckton/proposal-partial-application)

RBN: (Presenting)

YK: I don't understand the "..." rest argument. In the backchannel everyone agrees it's confusing/shouldn't be allowed. The fact that the question about "call by value" or "call by name" might block this proposal - the fact that it is a question means there are detailed semantics that need in-depth explanation.

RBN: Once we have it defined we can have a set semantic to describe. It is not unheard of to have semantics that need in-depth explainers - for example the lexical this inside of arrow functions.

DH: A syntax suggests it will continue with eager evaluation. Need some syntactic design to indicate where the evaluation is paused. To me the syntax is asking for eager evaluation - the syntactic traditions of JS also suggest this. I would be shocked to see a delay of the evaluation of this. Outside of that, I want to make sure this syntax is actually cost saving - I'm worried about the barrier to new learners, not hard blocking.

RBN: I look at this as an alternative to expressing this through arrow functions - to make it easier to codify partial application rather than using arrow functions. To your earlier point; arrow functions allow us to pick and choose these semantics though - but I would agree that eager evaluation feels like the right choice.

TST: I agree with Dave that this question shouldn't exist. Anything other than eager evaluation would bely all intuition. I do like this syntax though.

RBN: Call-by-value and eager evaluation is what everyone preferred during the break. If you need deferred, use arrow function.

DE: When does C# evaluate default arguments? Is it per-function-call, as in JS, or once like Python?

RBN: Default arguments can only be value types or null in C#.

RBN: (explains new last slide)

KV: I feel like this example doesn't truly show the benefit of partial application... I'd be curious to see an example that uses the pipeline operator but without the partial application proposal - I'm curious if it'd be significantly less readable.

RBN: Okay so can we move this to Stage 1? Any objections?

KV: I feel as though this could be implemented in userland - what's the value of adding this to JS?

RBN: There are userland libraries to do this; but its more code than just an arrow function to do it properly. In addition the syntax becomes much more complicated as you have to pass the function, the arguments and some placeholder sentinel all into a library function. So it's more work in userland. In addition hosts have the capability to optimise this by having syntax; while the userland library will always have an upfront cost to performing these operations.

WH: The main issue with this is the syntax. This is garden-path syntax. Consider the function `foo(x++, Y(g, h, k, l), m*n, "hello", bar, ...a)` - what does this do? It's a function call, right?

Everyone: Yes a function call

WH: Now let's remove that last `a` and change this to `foo(x++, Y(g, h, k, l), m*n, "hello", bar, ...)` - this is no longer a function call, it is a closure capture. My issue is that it looks like a function call but it is not. I think the syntax is a non starter because of this. If we had a syntax at the beginning that suggested to the user that it is not a function call then this would be fine. Syntax before or after the identifier that starts the closure: `{HERE}foo{OR_HERE}(x++)`

WH: The other problem with the syntax is that this allows no way to create a closure that takes no parameters. When the semantics were to defer everything, that was kind of ok because you could just wrap the whole thing in an arrow function. With eager evaluation, the lack of a way to define a closure that takes no parameters hurts because wrapping in an arrow function switches from eager to lazy evaluation of the arguments.

BT: Are you objecting to the feature for stage 1? Stage 1 is not about syntax - it is about promoting this to a feature we want to consider.

WH: This whole proposal is about syntax, and I object to the syntax.

MB: The proposal is about adding partial application to the language in one way or another. Advancing to Stage 1 does not prevent us from changing the syntax.

DD: I don't think we should block stage 1 - but I do think this is a worrying trend of presenting full code and semantics and asking for stage 1 where the syntax and semantics aren't sensible. Present an idea to push an idea to stage 1, not syntax and semantics to get the idea to stage 1.

RBN: The syntax and semantics are flexible but without syntax and semantics there is nothing to present.

MLS: This proposal meets stage 1, given the policy document.

WH: I'm happy to advance to stage 1 — I think the general closure capture this does is useful but have strong concerns about the garden path syntax.

#### Conclusion/Resolution

- Stage 1 acceptance

MF: I don't object to stage 1, but don't believe that we'll be able to come up with a syntax that makes this proposal viable.

LEO: I agree with Michael.


## 12.iii.c import.meta for stage 3

(Domenic Denicola)

DD: Are we happy to progress this to stage 3?

(Discussion about whether the name is appropriate, whether it should be included outside modules, revisiting other semantic decisions, settling on this design being a reasonable starting point despite limitations.)

Everyone: Agreement

#### Conclusion/Resolution

- Stage 3 acceptance

## 14.i.a Builtins.typeOf() and Builtins.is()

 - [Explainer](https://github.com/jasnell/proposal-istypes)

(James M Snell)

JSL: (Presenting)

JSL: Any questions?

DD: What does this improve over `constructor.name` or `[Symbol.toStringTag]`

JSL: We need something that gives reasonable assurance.

DD: We have existing mechanisms in the language.

JSL: If we have something existing then thats fine.

DD: Yes if you want something with stronger guarantees, we can do that but thats different. If we're solving the general problem we already have this.

KCL: How is this different from toStringTag? How is it meant to offer stronger guarantees?

JHD: If code modifies `Array.prototype[Symbol.toStringTag]` then later queries to check that will return something different to what I expect. If I cache `Array.prototype[Symbol.builtin]` I can subsequently `.call` my cached function with any type and it should return `'Array'` for arrays - I can't do the same with `toStringTag` because if it is changed, introspecting it gives the changed value.

KCL: You've buried the lede here - that's the motivating feature of this.

JSL: I will take this away and work on it some more.

#### Conclusion/Resolution

 - Remains stage 0

## Numeric Literal Separator to Stage 3

 - [Explainer](https://github.com/tc39/proposal-numeric-separator)

(Rick Waldron)

RW: Would like to move to stage 3. Reviews -- all concerns in reviews resolved. Implementation in babel. We have Test262 tests ready to merge.

RW: (lists all concerns/issues from reviewers in explainer)

RW: Waldemar pointed out in his review that the spec didn't allow an underscore after the first digit in a number (i.e. 10_00 was allowed but 1_000 was illegal). Fixed the grammar to allow this.

DE: Does ToNumber change?

WH: No; ToNumber will not allow underscores. The intent was to leave the syntax of the strings allowed by ToNumber unchanged. We had to revise the grammar to achieve that because ToNumber had been sharing some of the lexical grammar.

RW: Waldemar also found that the ToNumber grammar had allowed underscores in some places but not others. Fixed that problem in the latest proposed spec.

RW: As we're out of time I'll re-present this at the next meeting.

#### Conclusion/Resolution

 - No progression to Stage 3
 - Present and next meeting

## RegExp proposals to Stage 4

(Daniel Ehrenberg)

DE: RegExp dot-all flag is shipped in Chrome Canary and Safari Tech Preview. Stage 4?

DD: No stable implementations, so this doesn't meet Stage 4 requirements

DE: Earlier in this meeting, we moved other features to Stage 4 which are even less far along in shipping. We should arrange for a discussion on what is good enough for Stage 4 so we can apply a consistent policy.

#### Conclusion/Resolution

- Will be discussed next meeting

## Promise.prototype.finally status update

(Jordan Harband)

JHD: Promise.prototype.finally went back to having a fast-path for when a built-in Promise is given as an argument, based on implementation feedback. Hoping to come back in November with more rigorous experience from implementations.

## Another RegExp Annex B 3.3 sloppy mode function hoisting edge case https://github.com/tc39/ecma262/issues/480

(Shu-yu Guo)

SYG: Implementors should take a look at https://github.com/tc39/ecma262/issues/480 . Seems the spec disagrees with implementations. Need more data.

SYG: Implementations seem to all accept the form.

WH: But do they have the same semantics for it?

SYG: I don't know.

TST: Some implementations reject this.

#### Conclusion / Resolution

 - False alarm, implementations all follow the spec here these days

## BigInt ToPropertyKey

(Daniel Ehrenberg)

WH: Need a very strong reason not to do what toString does.

DE: What about performance?

WH: That's way down the list of concerns here. This won't come up often.

YK: My intuition is we should ban bigint property keys. Are people not interested in banning this because they feel we went overboard with banning uses of bigint?

BT: I do not think that.

YK: We already ban things like ===. It seems plausible to teach people to not think of this as a number, it is just a special type and will throw typeerrors for many operations

JHD: I do not expect toString to be eval-able, but it I do expect String(3n) to be '3n'. If I only care about the value it should be interchangeable everywhere.

DE: toString is not meant to be evalable. toString of the string `"3"` and the number `3` both produce "3", but strings and numbers behave differently.

WH: By that argument, the string `"false"` and the boolean `false` should behave the same everywhere too, which makes no sense.

JHD: No that's not quite the argument. I'm just expressing intuition that if it is toStringable then it should be able to be a property key.

MF: I don't see why it is problematic to allow property keys.

WH: The reason for banning it for `+` was because there are no reasonable definitions of adding a BigInt and a Number. Which ever way we come up with to define it would be wrong a significant fraction of the time. That problem doesn't arise here. I don't see any good arguments to diverge from what `toString` does.

DD: My intuition - not my understanding - is that `x[1] = 5` is desugared to `x['1'] = 5` - so I would also apply the same intuition that `x[1n] = 5` would desugar to `x['1n'] = 5`. But to counterpoint my own point this is not true of `x[0x1] = 5`.

MB: It's also not true for exponents, e.g. `x[1e3] = 5`. The same thing applies for the example in the slide: `x = { 3n: 'a' }` should work the way `x = { 1e3: 'a' }` does.

DE: But your intuition won't follow for variables, e.g. `x[foo] = 5` isn't `x['foo'] = 5`.

DD: I suppose the issue could be that developers may see an array index as an integer and using bitint as it is an integer type

MLS: We just spoke about adding underscores as numeric separators - we're not tostringing those, so this point doesn't follow.

YK: I share Domenic's intuition that it is a foot gun. On the other hand, we're happy with toString, we're happy with string keys - we're just maybe banning the combination of those two, which seems more in the province of linting. Unlike binary `+`, there are well-defined semantics for what this operation does.

#### Conclusion / Resolution
 - Allow BigInt as a property key

## Process for adding agenda items

LEO: I want to codify the deadline for adding agenda items - the deadline should be Friday, UTC-12, 7 days before the date of a meeting. This gives everyone a week to read the specifications and prepare for the meeting.

DD: It is important for the Chrome team to keep track of any advancement - we would ask if it is put on the agenda with little time for the Chrome team to review - don't expect advancement.

MPT: Its a concern for us at JSF too - we need to publicize information about these and it can be awkward if things get added too close to the meeting.

YK: I think the level of prep is stage dependant.

LEO: I don't want to stress it too much. I really just want to raise the intention to add a deadline - please feel free to send feedback to me.

JHD: I thought we had agreed on previous meetings to have this deadline. We just need to agree on something to avoid meeting disputes or disputes on GitHub. We just need to pick a moment in time.

DH: Whatever we pick - let's just consistently apply to everybody to prevent any abuse of the system.

YK: So for stage 0 and 1 it seems as though these have some lenience but Stage 2 or 3 should prepare these materials before the deadline.

LEO: I'm not asking for consensus - let's defer to next meeting.

JHD: No, let's make a decision now, and we can change it in November if need be.

YK: Concretely could we say Stage 0 and 1 put the topic on the agenda before the deadline, Stage 2 and 3 add presentation and other materials before the deadline.

JHD: Okay so Stage 0 and 1 have to simply be on the agenda by 10 days before the meeting, Stage 1 and 2 need all materials on the agenda by 10 days before the meeting.

CM: Can we please add a specific date and time and time zone for the exact deadline for each meeting?

JHD: Yes I will do that.

#### Conclusion/Resolution

 - Add a 10 day deadline in the agenda template
 - Specify an exact time for each meeting
 - Specify minimum guidelines for what needs to be on the agenda for Stage 0 and 1, and Stage 2+

## ArrayBuffer.transfer

DD: There used to be an ArrayBuffer.transfer proposal - it was rejected before but I think it should be Stage 0. If you are interested in this please talk to me.

DE: The whole point of ArrayBuffer.transfer is to grow an asm.js heap. Isn't this subsumed now by WebAssembly.Memory.prototype.grow?

DD: I have other use cases, e.g., testing.

#### Conclusion/Resolution
 - "you can't stop me from making it stage 0"

## Float16 Typed Arrays

(Michael Z Goddard)

MZG: Float16s are useful for graphics and physics calculations, numpy, texture information. You don't need 32 bit precision.

LEO: We're not sure if want to advance to stage 2 yet, this is just an update.

DE: Do you actually need element by element access as a scalar? Or just memory buffers? The latter is already possible with array buffers.

MZG: There isnt a float16 typed array so WebGL gives you half precision. WebGL could down convert from 32 it but I dont think its workable because then you just spend a lot of time converting 32 to 16 bit.

DE: Have you discussed this with WebGL folks? Do they have interest?

MZG: I haven't discussed this with them no.

DE: It could be worthwhile to do this, I can introduce you to some people for this.

MLS: X86 and ARMv8 don't have native 16 bit float - so there'd have to be manual conversion.

RW: I suspect that might be why they weren't in the original Chronos TypedArray spec.

MLS: To me without instruction support it'd be slower or just as slow to do this as it is currently.

DH: If its just Arrays and not value typed theres not much you're doing much with instructions. If you're just passing to GPU thats fine right?

MLS: Correct, GPUs bread and butter is 8 and 16 bit floats.

DH: So float 16 arrays allow you to store which you can ship through GLSL. We're essentially talking about loads and stores in the JS side, and instructions done on GLSL.

MLS: Loads and stores would be groups of integer 16 bit values in CPUs for passing throughs, just buckets of bits for passing through. If one of the use cases of this is loading an Array with data - what does that look like?

DH: Yes, is this even useful for JS if you cant compute without GLSL? The question is can you write the programs you want to write? Float16 array would satisfy use cases without going all the way to value types?

MZG: Yeah

LEO: I'll bring a draft spec next meeting.

#### Conclusion/Resolution
- No advancement, a draft for Stage 2 should be prepared as a follow up.
- Work more closely with WebGL community, as this is the motivating application

## Meeting concluded
