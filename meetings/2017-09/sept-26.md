# September 26, 2017 Meeting Notes
-----

Andrew Paprocki (API), Brian Terlson (BT), Chip Morningstar (CM), Claude Pache (CPE), Godfrey Chan (GCN), Jordan Harband (JHD), Leo Balter (LEO), Maggie Pint (MPT), Michael Ficarra (MF), Michael Saboff (MLS), Patrick Soquet (PST), Peter Hoddie (PHE), Rex Jaeschke (RJE), Rob Palmer (RPR), Ron Buckton (RBN), Sam Goto (SGO), Sebastian Markbåge (SM), Shu-yu Guo (SYG), Waldemar Horwat (WH), Yehuda Katz (YK), Mathias Bynens (MB), Justin Ridgewell (JRL), Kyle Verrier (KVR), Keith Cirkel (KCL), Till Schneidereit (TST), Aki Rose (AKI), Daniel Ehrenberg (DE), Valerie Young (VYG), Rick Waldron (RW), Dave Herman (DH), Henry Zhu (HZU), Tim Disney (TD),

Remote:
István Sebestyén (IS), Ben Newman (BN), Caridy Patiño (CP), Keith Miller (KM), Gabriel Isenberg (GI), Zibi Braniecki (ZB)

-----

## Opening, welcome and roll call

- [Agenda](https://github.com/tc39/agendas/blob/master/2017/09.md)
- Lunch here at noon each day

## Adoption of Agenda


#### Conclusion/Resolution

- Adopted


## Approval of previous meeting minutes

There were no issues with the minutes of the July 2017 meeting (Ecma/TC39/2017/034).

#### Conclusion/Resolution

- Approved without change

## 5. Report from ECMA Secretariat

There were no objections to the proposed changes to Ecma/TC39/2017/038, 2nd draft ECMA-404 2nd edition (Rev. 1)

Status of reporting to Japanese comments on fast track?

- Adopt all but one Japanese comments; provide rationale for not being able to adopt the one comment

There were no objections to Ecma/TC39/2017/040, 1st draft ECMA-414 3rd edition (with JISC comments) (Rev. 1), or to
Ecma/TC39/2017/041,  Disposition of comments regarding ISO/IEC DIS 22275 completed by Ecma (Rev. 1).

#### Conclusion/Resolution

- RJE to resolve language issues in the 414 suite

## 6. Meeting Schedule

DE: Dan set up list of proposed locations & times. Proposed 2 East Coast meetings, 3 west coast meetings, 1 Europe.

Schedule postponed to Thursday with hope of Bay Area hosting of January meeting

#### Conclusion/Resolution

- Revisit first thing Thursday to confirm contentious meeting hosts/areas

## 7. ECMA-262 Status Updates

(Brian Terlson)

BT: Many items stage 3; deadline for November meeting for Stage 4 proposals to be ready for inclusion in ES2018. 5 or so proposals in stage 3 before this meeting, doubtful they'll make it into ES2018.

YK: Making stage 4 still needs 2 implementations in browsers.

BT: Stage 3 is a big list, we have to be careful for getting these into ES2018. Need to figure out timing beyond November. Talk to me if you need help; assume November is cuttoff for Stage 4 into ES2018.

BT: Normative bug fixes added to spec; [Missing toNumber coercion](https://github.com/tc39/ecma262/pull/1000) that became security issue in Chrome, Project Zero reproduced this.

MB: The security issue was in ChakraCore / Edge.

BT: Working on unifying conventions, using standard set of conventions for looping, get/set values, parameters, concatting strings. Spec is getting a lot better factories & uniform conventions. Hoping to support polymorphic references so one can see a list of all parts of spec that use a polymorphic reference. Changed grammar params, supporting better tooling in ES code. I promise Ron's work will blow us away

RBN: I can't promise that.

BT: I can.

BT: If anyone has any questions I'm happy to answer them around the state of 262

#### Conclusion/Resolution

- On track for publication

## 8. ECMA-402 Status Updates

(Daniel Ehrenberg)

DE: Lots of editorial/non-normative updates

DE: One other change: make all the `Intl.*` objects ES6-style classes where the prototype is not an instance of the class. Many minor editorial PRs and minor normative PRs. Please help with reviews.

#### Conclusion/Resolution

- On track


## 9. ECMA-404 Status Updates

(Chip Morningstar)

CM: Been finalised for a while; we're in the process of running through JTC1 fast track. Need to update spec to reflect new RFC numbers; but through finalisation+specification we have to formally bless as a change. Patrick emailed this - the same ECMA-404 spec but with new RFC reference.

YK: I saw there was a proposal to make this JSON a proper subset of ECMA-262; is this a change to 404 or 262?

CM: 262 only

## 10. Test262 Status Updates

(Leo Balter)

LEO: Have updates on test 262. We have more comtributors since last meeting. We've been working with contributors from Igalia, partnership with Bloomberg. At Bocoup we have partnership with Facebook on Test262 - thankful for these. Valerie Young joining us for Test262 with interesting work, really appreciate. Test runners added that we're incorporating with, allow us to integrate with projects that want to use Test262. We're going beyond browser implementations and making sure Test262 is useful for other projects - brings us more feedback, more contributors & improvements. Really appreciate work so far. Rick & I are doing mentorship for contributors. Almost 60,000 tests right now in Test262. Thankyou

BT: Related projects are [eshost-cli](https://github.com/bterlson/eshost-cli) and [eshost](https://github.com/bterlson/eshost)... It's used in the Test262 harness to run scripts uniformly across node, browsers. Gotten a lot better recently. If you're testing scripts in different engines, `eshost` is going to help a lot. Check it out!

#### Conclusion/Resolution

- New contributors
- On track


## 11.ii.a Pipeline Operator

(Daniel Ehrenberg)

- [Explainer](https://github.com/tc39/proposal-pipeline-operator)
- [Presentation](https://docs.google.com/presentation/d/1qiWFzi5dkjuUVGcFXwypuQbEbZk-BV7unX0bYurcQsA/edit#slide=id.p)

DE: Evolution of bind operator. Frequently requested feature from community; I wanted to give it a chance at TC39.

(Presenting slides)

BT: To give context, pipeline operator is coming up over bind operator (which is a popular proposal with babel plugin usage)

DE: To clarify Brian and Ron are doing a lot towards both of these proposals

BT: These two proposals are about 50/50 split as to which they prefer. Setting expectations around bind operator though, it may not be right choice. Point being we're trying to get use-cases from bind operator into pipeline, let's be careful about that.

JHD: Does advancing this prevent the bind operator proposal? Worried about Array.prototype.slice.call, etc. Also worried about imperative nature; bind operator lets me bind ahead of time, this looks to not. Does this proposal obstruct bind usecases later?

RBN: Partial application can solve most issues around bind. `Array.prototype.slice(?)`

JHD: Want to delete Function.prototype.call and things still work

BT: Why?

JHD: Because then I'm not relying on the `.call` API. It's not super common to be robust against things like this, but that doesnt mean its not a good goal. We need to allow users to harden their code and prevent edge cases like this.

BT: (example of removing matchAll)

JHD: Defense model here is that you run code in an environment you trust, but after that anything could happen. I use `Function.bind.call` to protect against this.

BT: It's reasonable to have a syntax for method extraction, but the pipeline operator does not hit this mark.

JHD: Yes - I love this operator, but it needs to not prevent these use cases.

BT: We don't want `::` being used alongside pipeline (`|>`), what I'm envisioning is pipeline operator, plus partial application syntax, plus a hypothetical new syntax for method extraction.

YK: I really like this proposal. Some concerns with previous proposal that are addressed here. I do prefer pipeline to not refer to `this` because it confuses the model. This is addressed with the partial application syntax (`?`). The two aren't coupled necessarily but we should try to think of both.

WH: My fear is we end up with too many independent features and lose sight of overall simplicity of language. If this gets accepted we're pretty much required to do partial application which has some serious problems to the extent that I wouldn't want it in the language - this proposal depends on that. Also this doesn't address the method extraction use cases we just discussed (referencing the `::` discussion above).

TST: How does this work for async functions? Async function calls will become more and more common and this may cause friction.

DE: Only supported in as much as async functions return Promises. We've discussed implicit awaits for Async Generators; coupled with yield. We've been careful about adding points where the function pauses without having explicit syntax — this is problematic. Should we add explicit await support?

TST: My preference would be a combinating operator for async function calls.

TST: This is introducing a new way of calling functions, and not having that do something useful for async functions would be bad.

YK: At minimum it seems that `x |> await fn` doesn't work.

DE: In particular, even if you put parens in the right places, you'd be awaiting `fn`, not `x`.

CM: A concern I have around the cognitive burden of the overall language. What problem does this solve? Rather than this would be nice?

DE: People monkey patch methods to do this right now, there are functions frameworks to this now.

CM: I don't understand what this has to do with monkey patching?

DE: The difference is that rather than writing decomposed pipelines, people will monkey-patch existing classes to add functionality to a type. Some users find the pipeline syntax preferable. It solves a composability problem.

MPT: We've been using fluent apis in JavaScript forever. People love that. jQuery for example. It resonates, people understand it. Pushing data through a series of operations.

CM: Do people monkey patch though? That's the concern.

MTP: I have.

YK: The biggest motivation for this is that libs and frameworks want to use a more functional style of programming. People want to use more functional composition these days, left-to-right composition is the big missing thing. Alternative to monkey patching is wrapper class, but it's complicated, not a good way to make a functional pattern. This is.

DH: Without operator any method you want you have to think of in advance, but with operator you can decentralise what functions can partake in composition chain. There is a popular jquery framework for doing this with classes, but you have to specify up-front which methods are included, so it does not work as well.

DE: Stage 1?

WH: I do want us to see coherent version of this with partial application. I want to see a general solution for this syntax area rather than accepting ad-hoc proposals one by one.

DE: Can we work on a general story for Stage 2?

JHD: That follows the process document

MF: Same concerns, want to see alternative or exploration around bound method extraction

BT: Strawman would be keep `::` as prefix operator.

DE: We can explore syntactic versions of that. Should we be Stage 1 or 0 then? Any objections to Stage 1?

(No objections)

#### Conclusion/Resolution

- Stage 1 acceptance
- Before Stage 2: investigate strawman for method extraction, which may simply be prefix form of `::`





## Code of Conduct update

https://tc39.es/code-of-conduct/

LEO: Since last meeting we have Code of Conduct approved. We expect everyone to act accordingly. Document is a single page document, one can get it printed. It will be sent to ECMA. We need to assemble an enforcement team; we're looking for volunteers to enforce this. Any volunteers? Please reach out to me if you wish to volunteer for the Code of Conduct Enforcement Committee.

#### Conclusion/Resolution

- Leo is finding more volunteers for the enforcement committee
- The chair group should add a formal summary of the Code of Conduct for the next agenda templates.
- We already have an email for reporting. It currently goes to the chair group (Rex, Dan, Leo) and the Editor (Brian Terlson).
- tc39-conduct-reports@googlegroups.com

## 11.ii.b How should ECMA-402 proceed in light of "ICU standardization" concerns
- https://github.com/tc39/ecma402/pull/172

(Daniel Ehrenberg)

DE: 3 browsers use ICU, 1 uses its own. ECMA-402 tries to be as specific as possible about what the algorithms mean without reference to ICU, but compatibility issues arise none-the-less

- https://github.com/tc39/ecma402/pull/172

Proposing to add text to ECMA-402 to specify goals as we evolve. Not complete solution but attempts to address concerns before, involving Intl standards.

BT: ChakraCore is most likely to be using ICU, we'll be closing all of our Intl bugs per compatibility with other browsers. The added paragraph is good. We won't be hearing differences in spec though; as we'll be using the same API.

RW: We previously discussed normatively specifying ICU correct?

DE: Yes, we discussed but it doesn't seem a good idea as we need to specify the actual data; the locale database JS implementations have. But we cannot because this data changes over time:
- data improves over time (e.g., geopolitcal changes)
- All vendors upstreaming data via CLDR, so things are moving towards convergence
- Each vendor tailors it to their distribution
- Differences of opinion
- Regional legalities (representing some things differently per region, lawyers won't accept restrictions on this).

RW: I just wanted to ensure we're not codifying this. Even though implementations will use the same data?

DE: The underlying locale data is even tailored to different vendors. No one ships the exact contents of CLDR, so it's not reasonable to require using it.

MB: The added paragraph makes sense as it matches reality, but how does this affect Test262 tests?

DE: Test262 will not be able to assert on string output of these methods.

BT: A bunch of tests do this.

DE: New ones won't be able to. These should be moved to a separate area.

BT: These are good tests. The spec says you can return empty string if you want to though, so I guess they're all invalid?

DE: Spec allows more variation.

BT: Total freedom to pick whatever pattern to return though right?

DE: There are minimal requirements though, for example for dates you need to have an hour-minutes pattern. There is a minimum list with minimum requirements.

YK: Question for Node are you planning to implement this?

PST: Nope

DE: It's up to implementers, there is no requirements for this. (Added clarification later: Node already ships V8's Intl support by default; there's nothing for Node to do here. However, V8 currently exposes a compile-time flag which some users switch off to disable ECMA-402, which RW is using.)

RW: We're already shipping Node without `Intl` support

YK: So you can not ship Intl, but is there possibility of shipping a different Intl to what's specced?

MB: When working on implementations, Unicode property escapes proposal depends on various documents; Unicode Standard, Emoji spec published by Unicode. ICU has its version.

DE: In particular, ICU ships a subset of these properties, and sometimes lags in the Unicode data version.

MB: The main Unicode standard is ratified every summer.

DE: All converging to same thing though.

MB: Mostly a problem of timelines. Emoji drafts have own timelines. ICU has its own release cycle. Which do we follow? When do we decide to update the spec/proposals? When one of the drafts is updated? When one of the specs is formally updated? When ICU updates?

DE: Looking for consensus for interoperability. Any objections?

#### Conclusion/Resolution

- Consensus: we've addressed the concerns as best as we can, but accept that it's not perfect.


## 11.ii.c Extensible literals

(Daniel Ehrenberg)

- [Explainer](https://github.com/littledan/proposal-extensible-numeric-literals/blob/master/README.md)
- [Presentation](https://docs.google.com/presentation/d/13Ej08CCqXGCTF46GabGdzBepWBgU5d70TtPPYFkkZcs/edit#slide=id.p)

DE: Shame Brendan (Eich) wasn't here, this is his wish list.

(Presenting)

BT: Brendan presented suffixes as a general value types framework. Noticed examples has IEEE 754 decimal values. Does this take into account things like operator overloading?

DE: Good question, decomposition for value types is many fold; literals, operator overloading. In this case we call a function and whatever the function returns is given. The CSS Typed Object Model was specified before this.

DH: Brendan had thought about introducing a staging system, which has downsides. The benefit is that this is a bunch of pre-computation that you could pull out. No sound way to precompute this way. User land compilers can do unsound pre-computation to compile away suffixes, which is good enough for us. The particular path for this design precludes that kind of staging.

DE: Good point. Template literals have facility for caching but might be too heavyweight.

DH: Hard for any solution to meet reasonable requirements.

MLS: Concerns this is creating a bigger problem that this is solving. Automagic calling of some constructor to get some object - with a literal what works and what doesn't? It's a pandoras box of overloading operators. If this was a reservation of syntax for future extensions I'd be comfortable with this. Makes sense to reserve syntax for integers, decimal. As Dave says some of this is unsolvable arbitrarily.

WH: The syntax is already reserved. You don't need the proposal for that.

DE: Currently the syntax is invalid.

MLS: Sure, but we could reserve the syntax space as a forbidden extension. I could go with that. The automagic calling of functions is my concern.

DE: This was a specific request from Brendan, that if we add specific literals such as BigInt then the mechanism should be open for user-defined literals as well. As far as Operator Overloading it is much more complicated at runtime. May or may not be something we ever want to add. On extensibility, I don't think we would ever want JS to have a pixel value type; but web platform would, so I'm not sure if you would want to support only built-in things.

MLS: So what even happens when you return +?

DE: In this proposal, return an object. However, seems like for some people extensible literals only make sense in conjunction with operator overloading, is that right?

MLS: Which is a much harder problem to solve. So maybe we should just reserve the syntax?

DE: Interesting proposal. Should this be a needs-consensus PR to reserve syntax ahead of time?

YK: In what sense is it not reserved?

DE: It's not reserved, a syntax error. Section 16 reserves for extensions beyond spec.

BT: Yes technically implementations are allowed to extend past spec. Reserving syntax communicates we plan to reserve syntax for something. I don't think this needs a needs-consensus PR.

DE: We can achieve consensus now.

WH: First comment was the same as Dave Hermans. Order of evaluation, having to parse string every time.

WH: Second comment: not all identifiers are allowed here.

DE: Yes we couldn't allow `x0` for example.

WH: I saw that in the proposal. But you missed  `e` and `_`. This is a case of where we allow some identifiers and not others. That's fine.

WH: Third comment: we will not be able to introduce new builtins because of compatibility reasons. Will prevent us from introducing things analogous to decimals, bignums in the future.

WH: Fourth comment: other languages let us customise strings, thoughts on that?

DE: No, but we thought about customising object literals.

WH: Yes we shouldn't do that, objects aren't literals they are expressions. This could explode the grammar as well, causing problems for contextual keywords. Doing just for numbers doesn't have same impact.

MPT: if we go down road of literals, date literals would be major usecase.

WH: If we had extensible string literals we could use them for dates.

MPT: Yes we could. Dates are very close to CSS types.

YK: Once we approve this we wont be able to have any more builtins. Secondly, in order for specs to be experimented on then we need to use tools like Babel. Reserving syntax means Babel cannot experiment. Reservation is difficult for this.

MF: What is the relationship to tagged templates? I don't see the advantage.

DE: Usability; it would be awkward for example to wrap all bigints in backticks. This is a story to generalise use-cases like this.

DE: So, stage 1 or stage 0?

WH: I'm happy with stage 1.

RW: So stage 1 but with no additions in Section 16?

DE: No, we'll leave things as they are.

(No restrictions will be added to Section 16)

#### Conclusion/Resolution

- Stage 1 acceptance




## 12.i.a Intl.NumberFormat.prototype.formatToParts for Stage 4

(Daniel Ehrenberg)

- [Explainer](https://github.com/tc39/proposal-intl-formatToParts)
- [slides](https://docs.google.com/presentation/d/1--PmAca3qyQQfQz4OXj7l8QxpzfUF1GS4ET3ampvg_M/edit#slide=id.g255358455f_0_63)

DE: (presenting slides)

DE: Intl.NumberFormat.prototype.formatToParts ready for stage 4?

DE: It is already shipped in Chrome Canary and behind a flag Firefox.

Everyone: Applause

#### Conclusion/Resolution

- Stage 4 acceptance


## 12.i.b Intl.Segmenter for Stage 3

DE: (presenting slides)

E: Intl.Segmenter ready for stage 3?

Everyone: Signs of approval

#### Conclusion/Resolution

- Stage 3 acceptance


## Secretariat

(István Sebestyén)

IS: (briefing on ECMA-262, 402, 404)


#### Conclusion/Resolution

- On track


## 11.iv.a First Class Protocols

(Michael Ficarra)

- [Explainer](https://github.com/michaelficarra/proposal-first-class-protocols)
- [Presentation](https://docs.google.com/presentation/d/1WrvSyslnF-5VnPj3k3HRq8MRzuiSN1kQ6ENE1iUSmDU/edit?usp=sharing)

MF: This was originally in last meeting as Interfaces, now called First-Class Protocols.

MF: (Presenting Slides)

WH: Will extending existing classes work in Mark's world when native prototypes are sealed?

MF: No, it will not be usable _in that way_.

SGO: Will protocols inherit pre-written methods or do I need to copy over?

MF: You do not need to manually copy over all methods; any written in the protocol will be copied onto the implementee.

JHD: What does the `implements` keyword (following class name in class declaration/expression) do?

MF: As shown in an earlier slide; it checks for complete implementation of required symbols and copies methods over.

JHD: Is the return of a Protocol a constructor at runtime?

MF: No, it is an object who's prototype is null.

MF: Any more questions? I'm looking for stage 1.

BT: Is the `implements` operator the right verb?

MF: I'm open to change. It was designed to be close to `instanceof`

YK: A few comments. There are existing supersets which use `implements` keyword - TypeScript for example. Should TypeScript migrate? Could we have a nominal check for `implements`?

MF: It would require magic - we'd need to record that a protocol has been implemented rather than do a simple `in` check.

YK: A few more comments; at design time a class can implement but what happens with the dynamic API? Also what happens with duplicate definitions?

MF: Depends on your definition of, for example `Foldable`, there are different symbols and so two (or more) implementations would all have a different lexical definition of `Foldable`.

YK: What restrictions are we putting in place for this?

MF: Key part of the proposal is for ad-hoc extension. I dont see this as a problem.

YK: Doesn't it have the same problem as monkey-patching in general?

MF: No, each implementation gets what they want out of it.

WH: I have concerns on fragility and complexity. You cannot extend frozen classes, so they become second class citizen. Makes the problem much worse by encouraging monkey patching existing classes. This will lead to interface hell the likes of which you might find in Java.

WH: Suppose you have an interface that defines several concepts. Say, for example, we want to create a protocol which shares only 1 method from an existing protocol

MF: I don't see the use. If you have a set of methods you can have for free why not have them?

WH: I don't want them.

MF: Then I don't see why you'd want to use that example protocol.

WH: Let's say we have a protocol for fields that defines addition, multiplication, commutativity, etc. I want my protocol to only define addition, not multiplication.

MF: Well you cannot use a subset of the protocol; if the protocol defines both you need to implement both.

WH: This is the interface hell which ecmascript has avoided so far.

MF: In Haskell, a typeclass is idiomatically only meant to provide one thing. Some Haskell users are very vocal about typeclasses that ask to implement more than one thing. Hopefully we'll have the same thing here. Many people have their own implementation of functions built on top of reduce, I'd like to get to the point where we can share that information.

BT: What was the issue with frozen classes?

WH: This asks users to monkey patch classes, so frozen classes will not work.

BT: Isnt that the point of frozen classes? You're locking them for extension.

WH: No, frozen classes are useful in other ways, for defensive programming.

MF: It's fair to say that frozen classes don't get to extend to protocols post-frozen. They have expressed their intent to not extend this.

JHD: Why would you want to freeze a class and still have it mutable later?

WH: No, protocols are not changing the behaviour of the class; so they are useful even with frozen classes.

MF: You can create a sealed class as long as the protocol definition exists before declaring the class. I'm confident this wont be an issue.

WH: I'm confident it is.

MF: Okay, Array.prototype has a string property called `'map'`. If we want to implement a Functor on Array, a Functor.map protocol's _Symbol_ could only be implemented at definition time. You don't have access to the Symbol before the protocol exists.

WH: You're letting implementation drive behaviour - it's the wrong thing to do.

JHD: Could this be made to handle array-likes or string property protocols like "thenables". Could your proposal handle existing string-based protocols; for example thenable? It could then retroactively implement, for example thenable, without access to the Protocol. People are generally familiar with duck-typing, like thenables, so this would make more sense.

CM: I have a meta question; will this make sense who hasn't written Functional Programming? As in, 98% of JavaScript programmers.

MF: I didn't mean to give the impression that this was a functional programming proposal.

CM: This is too many layers of abstraction. It's a smart idea but I'm having trouble with it. I know lots of people will have trouble with it. What is it you're trying to accomplish?

MF: I would point to you the iteration protocol which is something we do with this. We don't expect people to define iteration protocols, but they reap the benefits of iterators.

CM: Right, so these is generalising protocols for userland?

MF: Yes.

MPT: Something that defines a contract; these are very helpful with Dependency Injection, but with generic types, abstract classes we end up with a huge mess of what I'd call "inheritance". I personally advice my younger developers from inheritance, its an untestable mess. Contracts are the part I like, subscribing to an implementation. Is this a can of worms to open?

MF: Conceptually this doesn't mash together objects. There are no namespace conflicts.

MPT: Not worried about namespace conflicts, worried about smashed together behaviours.

CM: Yes - too many orthogonal regions of distinction for people to detect.

MF: Do you have recommendations for changes? How can we change this?

SGO: I would appreciate more examples; how does this reflect web development?

DH: A few reactions. I'm not sure I share aversion to inheritance - this is about fitting in with object mechanisms we have. The cowpath of existing mixin pattern is an important signal. Primary concerns though: the convenience of `thing.map` over `thing[SomeProtocol.map]`.

MF: Were the examples in slides not convenient enough?

DH: It's hard to beat `thing.map`. My other concern is wanting to allow separate pieces of code to allow implementations of interfaces independently. Show us an example protocol, the ways in which instance coherence blows up and what this does to resolve that. How do you solve the "instance coherence" problem (which has been extensively studied in the industry)?

MF: Thanks that's great feedback.

YK: I'm worried that multiple pieces of code implement the exact same protocol. The "who got there first" problem isn't solved for laws about types.

MF: Yes, you can implement the same laws but with different performance characteristics.

YK: Yes, so in Rust you either implement your protocol for a foreign type or a foreign protocol for your type. This isnt the case here?

DH: This is out there - but it has come up before that we need way to talk about "packages" in general. When people write JavaScript there is a set of implicit semantics that strongly defines a "package". For example Rust brings in the notion of crates as a first class piece of the language.

SYG: Dave and Yehuda talked before about doing this in userland. What do you lose by doing this only in userland?

MF: You lose the syntax, which is a large part of the ergonomics.

SYG: Sure, Im concerned if its just sugar. Do you lose guarantees if its just in userland?

MF: Yes, this could also be done as a userland package. It requires group buy-in to this pattern though, promoting that with the language is the best way to accomplish that.

SYG: So... would we start wholesale moving to protocols?

MF: Hopefully; it would be great to see built in Protocols, it would be great to look into. Assuming this gets in I would love to extract these concepts, like those in the built-in collections. I will be looking into what can be extracted as protocols if this reaches stage 1.

DE: Is this what we want? There are some implicit protocols in ecmascript but incoherent; Symbol.iterator, thenables. Is the goal here to reify this?

MF: I would love this to be the case. How would we go about representing the concept of some of these, like Array likes? I would like to work with someone who has more knowledge of the HTML concepts.

DE: CustomElements looked into using Symbols but it wasn't ergonomic enough. Do we add new methods to reify them in protocols?

MF: Yes

KVR: My question; if I'm writing a function that I want to adhere to a protocol, how can I make assurances about types? Seems an uphill battle without a type system? Maybe it makes sense to push this into TypeScript or Flow?

MF: Yes type system would help with automatic resolution. Without types we can use same techniques we do today. Runtime checks on parameters, etc.

MPT: It'd be nice to implement things like comparability - in different use cases, for example I might want two dates to be comparable by timezone where others do not.

WH: What happens if you want to use someone else's code with a different notion of comparability?

MPT: We cry

MF: No need to cry, you can represent two different notions of comparability.

WH: Now you have two notions of comparability.

MF: This is okay.

WH: No it's not, now everyone will have to choose one or the other even if they don't directly care about the distinction between them, and their decisions might later turn out to be the wrong ones.

-- Out of time --

MF: Any objections to Stage 1? Do we want to look into these problems more?

WH: I won't block stage 1 but the negatives outweigh the positives right now.

- concerns about complexity of language and breaking existing usage patterns such as freezing
- ok with exploring for stage 1

MF: Please express your concerns about freezing in the issue tracker so we can resolve this.

YK: I feel the same, I have concerns about even the rough shape of this solution. I'd like to explore other options along this line.

BT: Are you hoping to subsume use-cases like mixins?

MF: This would hope to eliminate the need for the mixin pattern.

BT: Then this would clearly be stage 1. There are two proposals - traits and mixins, that are on the wiki that these subsumes.

DH: As long as we note that this does not stop us seeking other proposals.

#### Conclusion/Resolution

- Stage 1 acceptance


## 12.i.b Class fields status update

(Daniel Ehrenberg)

- [Explainer](https://github.com/tc39/proposal-class-fields)
- [slides](https://docs.google.com/presentation/d/169hWHIKFnX8E-N90FJQS3u5xpo5Tt-s4IFdheLySVfQ/edit#slide=id.p)

DE: (presenting slides)

(On ASI/semicolons, in private class fields)

WH: Annoying that `async` behaves differently from `get`, `set`, and `static` with respect to line breaks.

WH: Not having ASI inside classes would simplify a lot of things.

YK: If you are a person who doesn't write semicolons, of which ASI is a shifting landscape then you need to keep a strong linter. Is it that we want to enable people who want to avoid writing semicolon to rely on lints?

JHD: Short of web compatibility changes, we either have to enforce `;` for private class fields - adding to the list of rules you need to keep for ASI, or ban ASI which people may get angry over.

SM: Two use cases are people who refuse to work with semicolons, but also those who are hit by accidental ASI - we should focus on that use case more.

DE: If we ban ASI for now, we can add it later.

WH: If we allow ASI for now, we're stuck with it forever. Disallowing now means we can revisit.

KCL: What we're saying is that to use private class fields we _have_ to use semicolons? Right now we have workarounds for ASI through changing code, but this would be the first feature where to opt-in we need to use semicolons.

LEO: Semicolons are already there. We cannot get rid of them. ASI Issues are inevitable. I had a proposal for comma, but ASI is inevitable.

WH: I think it is harmful to allow ASI. Class syntax is evolving rapidly. ASI will mandate no-line-terminator-here restrictions in weird places, which are hard to remember — they're in some places but not other. Let's bite the bullet and disallow ASI for now.

LEO: We already have semicolons in class bodies, we already have ASI within method definitions, etc. The semicolon is already a ClassElement, ASI comes with it, I don't think adding limitations between new class fields will be a good thing. (The current proposal seems just fine as it is).

SM: (an example of class fields assigned with arrow function)

DE: It does not seem we're at consensus on this topic. As a default, I think we should stick with ASI.

#### Conclusion/Resolution

- Proposal holds status quo

Update: Will revisit at the November meeting, due to further concerns raised afterwards by committee members. This remains an unsettled topic.

## 12.i.g  Atomics.waitAsync for stage 2

(Shu-yu Guo)

- [Explainer](https://github.com/tc39/proposal-atomics-wait-async/blob/master/PROPOSAL.md)
- [Presentation](https://docs.google.com/presentation/d/11I90n1TD8JXL1euckt1YWS-VD_fdm_s4MNTiu9FgT5Q/edit?usp=sharing)

SYG: (presenting slides)

YK: Expected semantics for this that blocking waits would execute first due to the task queue.

SYG: I dont think it is currently specced this way.

WH: I've reviewed the proposal. Happy with it except for one detail: I'm worried about the proposed line cutting semantics — you can get starvation from this behavior. (Provides exemplar details):

- Agent 1 does async wait
- Agent 2 does async wait
- Agent 1 does sync wait; gets inserted first in waiting queue (right before Agent 1's async wait)
- Agent 2 does sync wait; gets inserted third in waiting queue (right before Agent 2's async wait)
- Someone calls wake with a count of one, waking up Agent 1
- Agent 1 does sync wait; gets inserted first in waiting queue
- Someone calls wake with a count of one, waking up Agent 1
- Agent 1 does sync wait; gets inserted first in waiting queue
- Someone calls wake with a count of one, waking up Agent 1
- Agent 1 does sync wait; gets inserted first in waiting queue
- Someone calls wake with a count of one, waking up Agent 1
- ...

Problem: Agent 2 gets starved out.

SYG: I understand the concerns here. I'll open an issue on the tracker. To recap, we have consensus for stage 2, we will raise the issue Waldemar has raised.

#### Conclusion/Resolution

- Stage 2 acceptance



## 12.i.g Intl.PluralRules for Stage 4

(Daniel Ehrenberg)

- [Explainer](https://github.com/tc39/proposal-intl-plural-rules/blob/master/PROPOSAL.md)
- [Slides](https://docs.google.com/presentation/d/1--PmAca3qyQQfQz4OXj7l8QxpzfUF1GS4ET3ampvg_M/edit#slide=id.g255358455f_0_78)

MB: Intl.PluralRules also has the capability to figure out plurals but also ordinals. Should we split into two methods, since ordinals have nothing to do with pluralization?

DE: It has shipped in Chrome Canary - do you want to unship it there?

CP: Need a way to format ordinal

DE: CLDR does not have the data for formatting ordinals - too much data, too complex.

MB: What I'm saying is that plurals and ordinals could have their own API method instead of everything being part of Intl.PluralRules

DE: But they have the same API shape

MB: Yes - but that doesn't mean they are the same. I'm not looking to block this, just raising the point.

DE: We could unship this from Chrome to resolve this, but is this just a superficial change?

ZB: Looking through CLDR data I see Filipino, Welsh and Irish language the sentence structure changes for ordinal changes.

DE: Yes we need to differentiate ordinal and cardinal

ZB: We need to translate the whole sentence depending on the ordinal category

DE: So what to Mathias' point - should we have separate classes?

ZB: Ordinal is rare enough to not validate a separate class. Very rarely you will need an ordinal type.

MB: I'm not suggesting we should completely reinvent the API, just to separate into separate classes

DE: How would we do that without changing the API?

MB: Well it would be the same class, just separated into two e.g. Intl.PluralRules & Intl.Ordinals, and without the need for the options object. Still returns the same results.

DE: Options are useful for future extensions

MB: We can always add an options object later

ZB: I support moving forward with Intl.PluralForms handling the two types.

DE: Ordinal and cardinal? No separate constructors?

ZB: Correct.

#### Conclusion/Resolution

- Stage 4 acceptance


## 12.i.c Intl.RelativeTimeFormat for Stage 3

(Daniel Ehrenberg)

- [Explainer/Spec](https://github.com/tc39/proposal-intl-relative-time)
- [Slides](https://docs.google.com/presentation/d/1--PmAca3qyQQfQz4OXj7l8QxpzfUF1GS4ET3ampvg_M/edit#slide=id.g255358455f_0_73)

DE: Some pushback to making changes for singular vs plural. Temporal proposal uses plural, RelativeTimeFormat uses singular. ECMA working group says stick with singular. Other contention is style name; short medium & long? These CLDR names are well founded as well as in other formatting libraries - we would want to stick with these conventions.

MPT: The values differ depending on the use case. Are we talking duration of time or unit of time?

DE: The ECMA-402 working group encouraged singular for consistency; we have to have a break somewhere given the mismatch between Temporal and Intl.DateTimeFormat

MPT: But the careful convention is, singular for date, plural for duration. This is like a duration.

DE: Oh, I see your point.

DE: For style, we are sticking with the CLDR convention, following feedback from the ECMA-402 working group.

MLS: Medium seems to be used in Date formatters for macOS and Windows APIs.

DE: What about for duration formatters?

MLS: Not sure...

DE: Can anyone sign up to review this for stage 3?

MPT: I'll be a reviewer.

MB: Me too

#### Conclusion/Resolution

- Singular or Plural? Plural
- Medium size? Do more research
- Stage 3 Reviewers:
    - Maggie Pint
    - Mathias Bynens



## 12.i.f flatMap for stage 2

(Michael Ficarra)

- [Explainer/Spec](https://tc39.es/proposal-flatMap/)

MF: Current issue is what do we consider "flattenable"? Candidates are Iterable - but unexpected behaviour with Strings; or another Symbol. For Stage 2 we've stuck with `isConcatSpreadable` Symbol.

YK: I'm fine with isConcatSpreadable. I think Domenic's position is that a lot of things pretend to be arrays, the platform can't continue to pretend things are arrays. `isConcatSpreadable` is - for better or worse - what we can use to continue pretending "thing" is an array. Or we could look at a "new thing".

BT: Is there a concrete proposal for new thing?

YK: Not really no.

MF: Do we have a consensus on Stage 2?

LEO: Can we take the time to make this stage 3? I'd be up for it.

BT: The spec has not changed for a year, the one big issue was around `isConcatSpreadable` - which has been addressed. Personally I have no problems with Stage 3.

MF: Has anyone given it a full review?

BT: We're missing one more reviewer for Stage 3.

RW: I can commit to reviewing to Stage 3 for tomorrow.

JHD: Me too.

#### Conclusion/Resolution

- Stage 2 acceptance
- Will address it again in this meeting for Stage 3
- Reviewers for Stage 3:
    - Rick Waldron, co-reviewing with Valerie Young
    - Jordan Harband


## 12.i.i Early Errors for RegExp literals

(Andre Bargull, Daniel Ehrenberg)

DE: (Presenting Explainer)

- [Explainer]( https://github.com/tc39/ecma262/pull/984 )

#### Conclusion/Resolution

- Consensus Achieved


## 12.i.j Timezone tweak

(Daniel Ehrenberg for Jungshik Shin)

- [Explainer]( https://github.com/tc39/ecma262/pull/778 )

DE: (Presenting Explainer)

#### Conclusion/Resolution

- Consensus Achieved


## 12.i.k Sloppy function hoisting web reality tweak

(Daniel Ehrenberg)

- [Explainer]( https://github.com/tc39/ecma262/pull/888 )

DE: (Presenting Explainer)

DE: Let's defer this.

#### Conclusion/Resolution

- Consensus


## 12.i.l export-ns-from

(Ben Newman, John-David Dalton)

- [Explainer]( https://github.com/tc39/ecma262/pull/1005 )

BN: (Presenting Explainer)

BN: Consensus?

BT: So the spec text hasn't changed from the proposal. Its just a PR, if you read it before nothing has changed.

YK: Does this include `export from`

BT: Lets keep them separate.

#### Conclusion/Resolution

- Consensus on spec text; will add tests before next meeting to remove needs-tests tag and permit merge.


## 12.i.m Iteration protocol change

(Michael Saboff for Keith Miller in abstentia)

- [Explainer](https://github.com/tc39/ecma262/pull/988)

MLS: (Presenting Explainer)

SYG: I'm onboard but this is shipped. What is the issue with webcompat?

BT: Was this considered before?

MLS: We had no answer as to why it was originally done this way.

YK: I feel confident we did not discuss this before.

DE: I would suggest it ended up being a cleaner spec by writing it this way.

DE: (Quotes Reference) from Allen Wirfs-Brock "So I did the obvious optimizations at the spec. levels. I probably didn't do it for next because it would have required inlining two levels of iterator-related abstract operations which would have generally obscured what was going on."

TS: A similar thing came up in WHATWG Streams, where an options object is passed in. It would be good to establish a precedent that configuration arguments for iteration are evaluated eagerly.

MLS: Consensus, and also that we will continue to do this kind of optimisation within the spec?

YK: It's not an optimisation in as much as it is semantic change that allows for optimisation.

DE: We have agreement on this particular case, right?

#### Conclusion/Resolution

- Consensus
- Consider spec changes that use cached Get()s in similar cases on a case per case basis



## 12.ii.a Introducing Intl.Locale for Stage 2

(Daniel Ehrenberg)

- [slides](https://docs.google.com/presentation/d/1I4Ormej3A5911MxQww2k-Cn46T3ZMpRSxN89gYYMHds/edit#slide=id.p)
- [explainer](https://github.com/zbraniecki/proposal-intl-locale)

DE: (presenting slides)

BT: It seems as though if I just add a garbage string then it wouldn't error, but wouldn't provide anything useful.

DE: Valid concern, we need to discuss further.

ZB: On garbage strings: we are validating that they are valid locale strings (RFC5646).

BT: It seems wrong to give an invalid locale and it not tell me about it; e.g. `xx-xx` - is this valid?

ZB: No.

DE: Let's revisit this once we reach stage 2

ZB: To clarify: Brian you're asking two questions: Does it support garbage, which I would say no. Second is does it accept invalid locales? Its a negotiation of which locales you want and what you want from them- not to verify browser has all data for this locale.

CP: We're focusing on the wrong part of the proposal. We're bringing to the table how we can extract this information.

ZB: The algorithms already exist here, they're just hidden. We just want to expose it so libraries can use it

?: Is normalisation like upper or lowercase specifiied by ICU?

DE: If you pass a locale into Intl.DateTimeFormat, for example, and read it back out it should comeback normalised. The input format is case insensitive but output is normalised.

DE: So are we ready for Stage 2?

MLS: Is it stage 0 right now? Should it go to stage 1 first? There's no rush right?

DE: Stage 2 doesn't need all of the details right

ZB: This has been evaluated for over a year.

YK: The question is: does it satisfy everything for stage 2

DE: I can go back to experts to get more reviews and clarify things

YK: This seems like a process for stage 2. Stage 2 is draft level of quality.

MLS: This wont make it for ES2018 so why rush through stages?

DE: Stage 1 or Stage 2 doesn't change anything.

BT: Let's push it to stage 1.

#### Conclusion/Resolution

- Stage1 proposal
 - Point of further research: What should be the behavior when an unknown locale is passed in--throw an exception or parse it anyway?
