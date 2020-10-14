# January 25, 2018 Meeting Notes
-----

Sebastian Markbåge (SM), Lin Clark (LCK), Waldemar Horwat (WH), Dean Tribble (DT), Chip Morningstar (CM), Brian Warner (BWR), Mark S. Miller (MM), Till Schneidereit (TST), Michael Saboff (MLS), JF Bastien (JFB), Mattijs Hoitink (MHK) , Kyle Verrier (KVR), Brian Terlson (BT), Shu-yu Guo (SYG), Ron Buckton (RBN), Michael Ficarra (MF), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Tab Atkins-Bittner (TAB), Kevin Gibbons (KG), Domenic Denicola (DD), Mariko Kosaka (MKA), Myles Borins (MBS), Peter Hoddie (PHE), Jordan Harband (JHD), Justin Fagnani (JFI), Caridy Patiño (CP), Zibi Braniecki (ZB), Daniel Ehrenberg (DE), Keith Cirkel (KCL), Justin Ridgewell (JRL), Mathias Bynens (MB), Patrick Soquet (PST), Nathan Hammond (NHD), Stephen Murphy (SMY), Adam Klein (AK), Sathya Gunasekaran (SGN), Gabriel Isenberg (GI), Dave Herman (DH), Jakob Kummerow (JKW), John Lenz (JLZ), Diego Ferreiro Val (DFV), Maggie Pint (MPT), Thomas Nattestad (TND), Isabelle Valet-Harper (IVH), Peter Jensen (PJ), Brad Nelson (BNN), Godfrey Chan (GCN), Sri Pillalamarri (SPI), Eric Holk (EHK), Reefath Rajali (RRI), Rebecca Turner (RTR), Natalie Silvanovich (NSH), Sam Mussell (SML), Sebastian McKenzie (SMK), Daniel Rosenwasser (DRR), Joyee Cheung (JCG), Rob Palmer (RPR), Sean Larkin (SLN)

Remote:
Bradley Farias (BFS), Thomas Wood (TWD), Ben Newman (BN), Rick Waldron (RW), Valerie Young (VYG), David Turissini (DTI), Allen Wirfs-Brock (AWB)

-----

## Agenda

Agenda: https://github.com/tc39/agendas/blob/master/2018/01.md


## 13.ii.h Async Iteration for stage 4

(Brian Terlson)

- [proposal](https://github.com/tc39/ecma262/pull/1066)

BT: technical content is all good, there are Test262 tests, I don't know how complete they are, there are still gaps in coverage, but I think those are normal test bugs, not blocking

AK: I think our stage 4 requirements are covered

RW: we're doing a survey of the async iteration tests to get a sense of what's covered and what's left to cover

BT: has been implemented a number of times, in chrome, safari, firefox, babel, typescript. I think it's ready for stage 4, big feature, lots of people have reviewed it. Any objections to advancing to stage 4?

(No Objections)

#### Conclusion/Resolution

- Stage 4 acceptance


## 13.iii.o Intl.RelativeTimeFormat, Intl.Locale for Stage 3

(Zibi Braniecki)

- [proposal: Intl.RelativeTimeFormat](https://github.com/tc39/proposal-intl-relative-time )
- [proposal: Intl.Locale](https://github.com/tc39/proposal-intl-locale )
- [slides](https://docs.google.com/presentation/d/1JlVOkn21jyF4YlsxBeisfvyYKzf5AZYNUzrUeZD12CQ/edit#slide=id.g2e1d914bb7_0_62 )

ZB: Intl.Locale is a building block for any i18n. Previously all APIs accepted a (string) BCP47? language tag. now we ..?

ZB: allows for language negotiation, allows people to implement their own formatters, avoids need for people to do pseudo-parsing of the language tag strings

ZB: at stage 2, had some recommended changes. Accept well-formed language tags even if we don't recognize that language. Internal changes to rely on Intl.Locale in constructors, can pass one into date/time constructors. Compared to BCP47 we do one more operation: deduplicate, sort. BCP47 does not standardize that, so that's our extension.

ZB: propose to advance to stage 3. Questions?

AK: do you have anybody using this already? I'd expect a polyfill to work pretty well

ZB: we use it inside firefox, we migrated all our do-it-yourself parsing code into parse Intl.Locale

AK: that works nicely for this use case

ZB: any objections?

(none)

ZB: second feature is Intl.RelativeTimeFormat, currently in stage 2, for communicating date and time in short periods, used a lot in e.g. gmail, calendar: "two minutes ago", "last month", etc

zb: in stage 2, we were bikeshedding on the option name. "lsat month" vs "one month ago", some languages have both. polish has a word for "two days ago". The option owuld allow overlays for specific languages. Settled on name of "numeric: always/auto".

ZB: compound relative time: "5 months and 3 days ago". Doesn't work well in list format ("in 3 months and 3 days and ...?")

ZB: minor issue, the +0 vs -0 case, we expect people to use "now" but "in 0 days" might happen ?

AK: when we're advancing to stage 3, I assume you've already got internal approval?

ZB: yes, it was approved by ECMA-402

reviewers thumbs up

AK: if that means signoff by that group, then it's slightly further along, so we don't have to assign reviewers again?

?: we assign reviewers in both groups

ZB: it's implemented in firefox already, there's also a polyfill. we're pretty confident that this feature is useful, small, andready to roll out. Propose to move to stage 3. any concerns?

(No Objections)

#### Conclusion/Resolution

- Intl.Locale to Stage 3
- Intl.RelativeTimeFormat to Stage 3


## 13.v.c Decorators: towards Stage 3

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-decorators/)
- [slides](https://docs.google.com/presentation/d/1g6hrJp_nk_OeapuPXlkE4D_31OZbz4wQbXuIagsyoUI/edit#slide=id.p)

DE: not proposing stage 3 at this meeting. want to review recent spec issues, get feedback, get clear path towards stage 3

DE: when you have multiple decorators that expose the same field or method, overlapping, what should the semantic be? resolution: if they create the same field or method, they throw a TypeError. It detects more errors when implemeitng decorators.

DE: but decorators might

YK: this is for decorators that add extra.. extras, right?

DE: right, ... normally coalesced

DE: error on invalid descriptors: decorators take/return JSON-like objects , this makes it easier to program

DE: slightly generalized decorator syntax. Previously you cannot use a decorator like @foo[bar], since there's a syntactic ambiguity with computed property names. Previously supported @foo.bar (property access) or @foo(bar) (function call). Now we also support @(arbitrary[expression]) as an escape hatch for complicated expression. Decided to not support @foo().bar or @foo()()   (ed note: see slides, screen obscured)

DE: PR gives semantics for this new syntax

DE: restrictions on what decorators do: support for creating non-enumerable fields, enumerable methods (which can't be done with normal syntax), create non-writable fields/moethods, create sealed/frozen prototypes or constructors, add more fields/moethods. Can change the placement (prototype vs static vs instance)

DE: we don't yet support: private on prototype (probably an error), private writeable methods, prototype fields (this is new), configurable/enumerable private fields (this doesn't make sense), accessor fields, methods with an initializer (doesn't make sense either)

MM: what's the issue with accessor fields?

DE: we could permit that, it's unclear why you would want an own accessor as opposedto an accessor on the prototype

MM: the getter/setter might close over data that's instance-specific. Not saying it's a compelling use case

YK: I think the use cases would still be possible by wrapping the constructor, just less ergonomic?

DE: right. decorators can define a "finisher" callback, gets the final class and can replace it with a new one. Lots of use cases for this, .. hard to describe, but finishers are a core feature of decorators

MM :was there a particular problem with supporting

DE: the way fields get to be a ninstance is the initializer callback, called with no arguments with "this" is the ..

DE: unclear how we could call ..

DE: would require new/differnet API

MM: ok

DE: more changes for consideration, working with YK and Brian and the code champions, have some recommendations, looking for feedback

DE: remove decorator access to private fields? maybe we shouldn't give access to private fields/methods to decorators, there's a sense that it violates privacy. It might not be considered to violate privacy, since private fields/methods are only available to things that are explicitly given access to them, defining a decorator is kind of part of the class body and "trusted". This is also useful for class decorators to turn the entire class into something that's exposed to the outside. `friends.js` in the repo, exposes friends (expose all private fields to a testing framework, but not anyone else). Intermediate alternative: class decorators only see public elements

YK: is this only for class decorators?

DE: no, both class and method decorators. The alternative only applies to class decorators.

DE: recommendation of champion group is to continue with the current proposal, which allows both class and method decorators to observe/modify private fields. It wouldn't really simplify things to use the intermediate alternative.

DH: I like that

DE: remove visibility of initializer function? field decorators expose the initializer function, decorator is passed a descriptor with view properties, one of the properties is the initializer, it gets no arguments ("this" is the object?), this is useful for observed. Need to move the intiilizer from the decroator into the initializer for the synthetic field (?). Looking for other ideas. For now the recommendation is to leave the initializer function accessible.

DE: do we pass enough metadata around? decorators of fields and methods might need to coordinate with the decorator for the whole class. We could add a general-purpose metadata method, but from what I hear, using the finisher mechanism (YK/Brian/Ron) seems to be sufficient. Ron's metadata library works well in concert with this. recommendation is to not add any additional metadata mechanism

DE: next steps: talk with more stakeholders. Too many semantic corners to go over in tc39. Looking to videochat with implementers, test authors, library authors, anyone else, to go over the semantics in detail, by the next meeting

DE: in sep there were 4 people signed up to be stage 3 reviewers, I didn't press anyone to review for this meeting, if anyone else wants to be a reviewer

MM: I'd like to review

DE: thanks, that's it

DH: give me a deadline for reviewing, I'll meet it

DE: two weeks before the march meeting, communicate reviews to the champions

YK: for Dan, I have no problem with expanding the new syntax form @(arbitrayr[expression]). If the use case we're targeting is cleaning up old transpilations, another solution would be to create a new local variable with a different..

DE: this is another place where you can evaluate code inside the body of the class, which affects the order of evaluation..

YK: that's a good enough answer

YK: you got the history one degree off, before I handed it off to you..

YK: because of the computed property problem , the carve out will be difficult, I think it's good to shrink it down to a very small set. I think the parentheses is a suitable escape hatch

YK: want to reiterate, there's not just testing cases. Debugging cases (not in browser) are important too, want errors in dev mode to indicate which private fields exist. @testable / @debuggable, I'd strip that out in production but leave it in testing.

?: now that we support parenthesis, why dod we support foo.bar

DE: it's just a natural thing to write in that position, it'd be awkward to require the parentheses all the time

RBN: people often use namespacing through objects

RBN: execution order is important, if you're using tooling/codemod to fix decorators that no longer have valid syntax, you have to keep the order the same,

JRL: in the last meeting, we decided decorators would leave private methods writable. you disallowed it now? .. @bound

DE: I don't think private writable methods would be useful for that, you'd turn it into a field declaration. A method is the same on all ..

JRL: Larger point is that any different between public and private is going to cause confusion later on..

DE: I'll make a PR to relax this restriction. part of the reason was writale private methods owuld have different semantics than public methods, they don't have a prototype chain, so the design of private methods is to be a strict subset of the semantics of public fields/methods

AK: I don't understand the criteria, for some of these it doesn't actually do anything, for some it's abad idea, my question is, I think writing decorators is a pretty expert domain, so why would you want to disallow decorator authors from doing things

DE: yeah, we could liberalize these and allow all the ones that are sensible

AK: why are these restrictions here?

YK: I basically agree, but I think there are two good reasons for restrictions: either it makes no sense, or the answer to what it does isn't trivial and we don't want to block the proposal on that. But a lot of the rationale is that figuring out what it actually does is hard, it's ok to stage this

DE: yeah, in class-reltaed proposals, we see a corner of the language that's not ergonmic, we need more discussion. Cutting off corners, not to close off discussion,

AK: Yk's description sounds reasonable. If it's not useful and hard to do, then we should not do it

YK: usually someone always comes up with a use case, but Dan usually puts things on the "not supported" list is because it doesn't yet work

AK: .. I'm most excited about decorators for letting people do stuff we haven't thought of yet

DE: that's good feedback, I'll try to add as many supported things as possible, and get more objective criteria for why not support something

MM: I recall decorators on privates meeting the object-capability requirements. The current state might be viable. This is obviously a dangerous area. For things which we might not support now, there's a distinction to be made, which things can be compatibly postponed, vs which things if we don't support them now we don't support them ever, or would require an incompatiblity

YK: my intution is that it would be compatible, but might have a security change

MM: programs in which they are not exposed.. in a previous program the class was annotated, in the old version of the language the programmer didn't need to know the decorator details to know the class is still encapsulated

MM: now that I'm a reviewer, not asking for resolution, but wanted to raise the issue of things we might not do now because we don't see a usecase, for everything on that list, can we postpone it with out cost, or would they add complexity if they were separated out

DE: there's a few sources of complexity from postponing features. if we postpone access to private things in decorators. hypothetical compatibility issues, if yo uhave a class decorator and you start by filtering private elements from them, then later we add them, some decorators might break

DE: when I think about breaking it out in to multiple parts, there's a programmer mental model, the cost should be motivated by lack of use case, or a concrete problem that comes from making it available in the first pass. in this case we have well-motivated use cases and i proposed a security model that explains this, when you use a class decorator, you are exposing the body of the class to the decorator. If you don't want to give it rights to the body of the class, then use a function for that sort of use case. the point of a class decorator is to give it the class body

MM: within this proposal, the only thing that could access private state is a class decorator or a decorator on the private member itself, right? No way for decorator on a different member to access sideways?

DE: right. method/field decorator finisher gets whole class, but not private fields

MM: can class decorator add new fields?

DE: yes, but can't add new lexical bindings for private fields, just new anonymous private fields

YK: metapoint about slicing off parts / postponing, lots of features are in flight at the same time, for public properties you don't really need decorators (reflective api is enough), but for private state that doesn't work, our rationale was that we'd expose them to decorators. I'm worried about lopping off features

MM: yeah, that's why I asked about cutting off vs postponing

YK: postponing for a short time is fine, postponing for a long time would make me uneasy

DE: the static class proposal (later today), some things nobody is asking for yet because we don't have private fields yet, but once we do have them, you'll need various ways to access them, one is private methods, or lexically scoped functions in class bodies, a third is decorators, they're all complemetary. we might lexically scope name declarations that are not just driven by class bodies, for all four have cases where they're natural to use

WH: why do you disallow `@foo(x)(y)` and `@foo(x).z` but allow `@(foo(x))(y)` and `@(foo(x)).z`?

DE: we didn't mean to support those, that must be a mistake in the grammar patch

DE: if anyone has more concerns that would impact stage 3, tell me now or in the GH repo.

AK: I have a high-level concern, there are lots of users in decorators in the transpiler ecosystem, at least TypeScript is waiting for this to go to stage 3 before they implement the new version of decorators. So there may be some lag time between this going to stage 3 and browsers picking it up because there are so many things.. what's your expectations, will the spec be done before it goes to stage 3?

DE: expect changes, there's a Babel implementation of the new spec in progress. TS is more conservative, Ron can clarify more. Having the stability we get from stage 3 will have value for users, even in the interval where it's supported in the transpiler community but not the browsers. Getting to agreement in this committee will be a real value

YK: you mentioned TS, there is a stage 2 proposal that's much closer to this one, but TS support is of a much earlier proposal which is quite different. People are waiting for an indication of stability

AK: because of the big semantic differences, there might be some changes as users start to pick it up

YK: especially given how it interacts with other proposals

?: dumb question, do we intend to iterate towards a standard library of decorators? Ember's stdlib. Is this a library author tool, or will we offer the lbirary?

YK: I intentionally didn't include a standard library in a contentious proposal, but I intend to introduce some when this gets to stage 4 and is not contentious. Enumerable, .. If a lot of libraries had to impement them, it'd be annoying. A lot of webdevs exposure to this will come from an ecosystem that provides them.

WH: how long of an opportunity do we have, after introducing decorators, to web-compatibly introduce a standard library of decorators before all the good names are taken

YK: if we get to standard modules then it doesn't matter

DE: these questions will be easier to .. after adam's presentation

AK: best to keep things as small as they can be. Closure compiler would be happier if these things weren't included

DH: extensible web, if we'd said ServiceWorkers couldn't ship until we'd built a standard library of workers, it would have been harder to ship, and we'd do a worse job

YK: AppCache

DH: this is a place where library authors can experiment and do a better job than we can, then we can later come back and standardize

?: there's already community fatigue about new features, sometimes we need to recognize that something is a library author feature, and tell them to use a library

DH: yeah, serviceworker was a really low-level sharp-edged tool, people jumped in and got confused. We could describe this as a low-level tool and expect libraries to develop useful abstractions

?: I think that phrasing is valuable to the community

DE: I think this is all really actionable feedback. The champions can collaborate on a library. Especially if during stage 3 it gets used by more transpilers, they might offer libraries too, even if we don't get it to stage 4 now. Does that seem reasonable?

DH: as long as they seem decoupled

BT: yeah, I'd say this or an upcoming meeting is pretty early to standardize a library for a feature we haven't even shipped yet

YK: some of us who are good at libraries should just write the polyfill

ZB: to lower the pressure on the listing protected keywords you want to use.. maybe introduce a barrier in the form of namespacing decorators, reserving @name (with no dot) for us, @foo.name for not-us

DE: this new proposal could refrain from dumping everything on the global object

ZB: if in the next two months people take over all the cool names, then we have to figure out compatibility

DE: look at the code samples from the slides, people import decorators from modules

DH: we exist in a market, and sometimes people use up names, we can't block everything on the market using up the good names, we should let that drive pressure on us getting work done, but not freeze us in our tracks

DE: any more comments? nope, thanks

#### Conclusion/Resolution

- reviewers will work on it


## 13.v.b Static class features proposal

(Daniel Ehrenberg)

- [proposal](http://github.com/tc39/proposal-static-class-features/)
- [slides](https://docs.google.com/presentation/d/1wixI6gGDlH26xze35MKcIFyAHlQU7y9yWR06Hd37E80/edit#slide=id.p)


DE: stage 2 update. at the last meeting we split off static features into a separate proposal which was demoted to stage 2

DE: static private has a hazard for subclasses. several tc39 members went through a large list of alternatives. I'm not proposing this for stage advancement, just giving an update

DE: summary: keep static public field declarations `static x = y`, semantics: own data property definition on constructor, subclasses will see inherited through prototype chain

DE: new thing: add lexically scoped functions to class bodies. `local functions f() {}` (`local` is straw), semantics : function declaration hoisted to top of the class definition, so it can read/write private fields (as they're lexically in the class body), hoisted just like functions /async / generators

DE: separate stage 3 proposal for private instance methods. At last meeting, the static aspect was demoted, but instance methods (and private instance accessors) remained. syntax: `#method() {}`, think of it as a superduper underscore, can't access from outside the class. semantics: non-writeable own private field on the instances. Same private field is written on each instance of the class

DE : based on the hazard (accessing private static elements from subcalsses), this doesn't add private static fields or methods to classes. We've looked through several alternatives, probably dififcult to add in the future. Might add let/const/clsas declarations to class bodies as a workaround

DE: will go through details, ask for review

DE: static public fields. stick with original semantics. analogous to instance public fields, but on the constructor. Own, writable, configurable. Scope is like an instance field declaration. "this" is the constructor, has super property access. `arguments` is poisoned (unlike concise method bodies), would be confusing.

MM: and that's consistent with instance initalizers

DE: right

DD: syntax error or throw-upon-access?

DE: syntax error, including eval-inside-initializer

DE: this is new: when initializer is evaluated, no longer TDZ, it *does* have access to the class (without the new fields), fields are added one-by-one, as we discussed in May in Munich

YK: I'm asuming we still use the class-initialization order we agreed to (what I worked out with Brian), it was finicky, if people want to question that, let's do it holisitcally

DE: I think we achieved consensus on that

YK: just imagining someone looking at that slide and thinking we should revisit that opinion

DE: evaluation order: can use computed property name, evaluated top-down with the others. There are several passes over the class. One computes property name, second computes decorators, final computes static field decoration(?) initializers, must be at end otherwise class is in TDZ)

DE: initializers evaluated just once

DE: edge case of the semantics, Set() on the prototype chain (see slides). This is just how prototype chains work, would be weird to change it. Making it not a data property would make Object.freeze not work.

WH: we explicitly made instance properties not do this (in classes)

DE: in classes, own properties are defined as ..

WH: in classes if you have an inheritance chain, every level gets to define own properties on the *same* object

WH: we'll talk later

DE: similar situation with object literals. So we decided regularity/consistency is more important than creating a special case for this.

DE: replacing "static private" with lexical declarations in class bodies. DD's refactoring example (see slides). Using "function" would be confusing, if there's a different token that'd be more clear.

WH: could remove `function` from that example, use `local finalizeFactoryCreated(..)`

DE: might want to have local generator, async, or local other things

WH: but you already have the same issue with static and instance properties. For example, just above on the slide you have `static async fromFile(...) {...}` which doesn't use a `function` keyword.

DE: hazard of static private (from justin ridgewell). discussed several alternatives at the last meeting, then more since, haven't found any that seem to satisfy everybody. But lexically scoped declarations in class bodies seem to satisfy the use case.

DE: semantic details. `local` keyword makes it clear this isn't a method, not on the prototype. If you want to bikeshed about the keyword, add to the bug.

DE: scoping: (see slide)

DE: also supports async functions, generators, async generators. Function is created at the beginning of the scope (start of curly-bracket), so no ReferenceErrors

DE: one question, should we allow let/const/class declarations in class bodies? Have plausible use cases. Details of execution order, what scopes they get. We leave out `var` (not block scoped). Disallow other kinds of statements, would make things complicated. Proposal: don't yet add any of these.

DE: private methods. currently at stage 3. Given lexically-scoped functions in class bodies, why do you even need private methods?

DE: pretty natural to factor stuff into separate functions, but not expose that internal function as a method. Using a lexically-scoped function requires changes to call syntax, ugly. Easy to change between public/private methods.

MM: clarifying, in the WeakMap theory of private state, this is checking that the 'this' object is a key in the weakmap, right?

DE: right. another way to think about it is a weakset, although the semantics are closer to a weakmap

DE: so, should we have private accessors? from domenic and ron, it would be useful. Could be useful as output of decorators (e.g. Tracked), but it's strange to have accessors without reflective mechanism

AK: not necessary no reflection, but it gives private fields more and more properties of .. but aren't

DE: it reuses the property descriptor infrastructure

AK: private state is not like property access (no prototype chain) ..?

MM: how would you describe the accessors in terms of the weakmap theory of private state

DE: you aren't accessing the value, you're accessing a property descriptor, then applying it

DE: decided to include private accessors

DE: should we have both private methods and lexically scoped functions?

WH: you mean private instance methods?

DE: right, not private static methods

DE: private instance methods enable easy refactoring, easy access to 'this' and 'super'. Terse, easy to use. No known hazards of instance private methods (unlike static private). JS has always had function-based and method-based phrasing available: both seem like natural patterns, can organize code with methods or by functions.

DE: summary, status of proposal (see slides)

DE: need help bikeshedding about token choice, whether to leave class/let/const as a followon, need to draft tests and prototype implementations

(break for lunch)

YK: need to maintain ? in the class body. First tried to get static methods to work, then think about alternatives, I think that ignores a lot of .. he use cases for static functions is actually quite narrow, for some reason you need access to the private state inside that function. if you don't need that, a ? is sufficient, from a JS developer perspective they already know how that works, .. people point out correctly that they .. don't have functions that don't make sense as methods, and vice versa .. the cost is that we make .. more complicated

WH: object to static field semantics. if you write to a static field, you should write to *the* static field, not to a shadow copy of it (in a subclass)

AWB: the term "static field" we were led into using that keyword because it was available/reserved in ES6, but they aren't static in the same sense as in java. they are class properties as they exist in smalltalk or ruby. that word as we apply it to static variables, the intuition may not be quite right. there are two ways you might want to use state associated with a class. one was is to have exactly one piece of state shared by the class and all subclasses, the other way is to act like a normal inherited property. This proposals uses the word static consistent with the way methods are used, each subclass gets its own copy of the state. it turns out a lexical let or const would serve the other purpose. a single "counter" shared by the parent class and all its subclasses, there are use cases for both of those

WH: how would do a single counter in the subclass example?

AWB: assuming you don't have a lexical let in the class body, you'd add a lexical let outside the class body

WH: I disagree with the explanation, in prototype languages, instances inherit from a prototype instance, which leads to the same kind of shadowing problems. We deliberately chose not to follow the prototype approach when designing how instance fields work in classes.

AWB: instances do inherit from the prototype chain

WH: when you write a superclass instance field from a subclass it does not shadow it. We either should use the static field semantics from other common languages, not do static fields, or name them something else.

JHD: I don't think static fields are broken at all, every one I've showed the syntax to, it works as they'd expect it to work. They want `class Foo { static bar = 1 }` to be the same as `Class Foo {} ; Foo.bar = 1` outside the class body. We should think carefully before changing the semantics as currently specified.

RBN: in the spec today, we already have an example of behavior that already aligns with the proposal, which is how Symbol.species (?) behaves on the constructor (?) .. we're just giving users the ability to do this in the class .

AWB: about prefixing these lexical declarations, I'm concerned that the push for prefix seems to be intuition about how people might be confused about this, if you look at the bug thread from this morning, I talked to kyle simpson, an educator, about whether people would be confused by unprefixed lexical declarations in class bodies, he thought consistency among all curly-braced things was important from a pedagogical POV, I'm having a hard time finding the justification for a prefix

YK: I think people should look at the thread  https://github.com/tc39/proposal-static-class-features/issues/9#issuecomment-360551924

DE: I'll follow up on the thread

RBN: I've had offline discussions with Daniel, wanted to bring it up, I've filed an issue (#23, https://github.com/tc39/proposal-static-class-features/issues/23), it feels like we're missing (even with lexically-scoped function definitions), since we don't have a way to lexically scope variables, even if we did we'd need to provide for privileged static initialization of these variables. if we have a locally scoped function and want to do static initialization, there's no way to have access to that state without hacks involving public static field initializers, so I find that having some mechanism for privileged static initialization is a valuable feature, locally-scoped definitions would have very limited use without it. With privileged static initialization I can store a function with privileged access to instance private state into a block scope out side the class

DE: I really like your proposal, it's an interesting addition ot the problem state. we could leave out lexically-scoped .. in classes, and add .. blocks, leak that to a variable on the out side

DE: the alternative proposal is, instead of lexically scoped func def in class bodies, is to add a static block, a place you can execute code in a class body, just imperative code, that can leak to a lexicaly binding outside the class definition, the static block is evaluated inside the ..

RBN: let's have further discussion on the issue tracker, good place for questions, just wanted the committee to be aware that this is an alternative, or an augmentation

MM: as an augmentation, the idea of a static block, I don't have a problem with that. Using that as the mechanism to provide the functionality that lexically-scoped declarations do, is too roundabout a way to do it. Unclear, hard to read, bad.

DE: what about the advantage of avoiding needing to add a new token

MM: I'd rather introduce the new token

YK: ron's proposal, I may agree with mark, but I'd like to explore before we add more things to the class body

MM: I'm in favor of exploration

AWB: I'm not a big fan of the private instance method proposal in particular, but one implementation thing I wanted to bring up, they're currently defined to behave as if they were private fields of the instances that are read only, that's how the spec would describe them

DE: right

AWB: in fact they are statically resolvable with a type guard

DE: right

AWB: I'm concerned implementations won't do that, they'll implement them as you describe them, so if someone defines a class with a dozen private methods, each instance of that class would have 12 additional readonly private slots, which are dynamic accessed, both a space hit and a performance hit when you access them. I'd like to see some evidence via implementers that they're going to add a  new mechanism specifically to avoid that problem

DE: I was hoping that would not be necessary, maybe if

AWB: I don't think there are any other things in the language that would provide the mechanism you'd want to implement private methods

AK: I think it shouldn't be that hard, it should be completely static, but I'm happy to do that legwork

YK: I'm not sure what WH's proposed semantics are, I want to add about inheritance, ruby has semantics where writing to the sub field shares .. with the superclass, it was sufficiently important that I added a .. subclasses writing to the static don't modify the parent, they create a new variable that is inherited

WH: do both mechanisms coexist, or did the shadowing mechanism replace the C++/Java-style mechanism?

YK: yes, we did not replace. 5 years later, Rails uses the/my new abstraction. So it didn't introduce any problems, and seemed to solve a lot

AWB: smalltalk provides both mechanisms

DE: ..

YK: if you don't do anything you get inheritance, but if the child reassigns it, the .. sees the update, but the parent sees the original value

MM: AWB, in smalltalk, is this class variables and class instance variables?

AWB: yes

MM: what was the frequency of use of those mechanisms?

AWB: it evolved over time, originally class variables were most frequently. As people discovered that class instance variables existed, they began to be used in more complex abstractions. This is somewhat different in smalltalk because none of these have the privacy aspects of "private" and how visibility is shared via inheritance. [Update, Smalltalk class instance variables are essentially "protected", while class variables are public.

AWB: in terms of public,

YK: ruby has the same two mechanisms

WH: sounds like there is demand for both mechanisms

AWB: lexical provides one,

WH: lexical doesn't provide a public one

WH: I thought AWB was suggesting having a scope that includes the class definition

DE: two ways do to it,

WH: a lexical declaration outside a class is not connected to the class at all

AWB: .. if you wanted to make it publicly visible, a public accessor would do it

AK: public static accessors are already part of class

WH: would be satisfied if there were an ergonomic approach for defining non-shadowy static fields in a class that's equally attractive to the mechanism for defining shadowy static fields

WH: (on the subject of syntax) local declarations should use the same syntax as static declarations or use an alternate approach such as having local blocks. Uncomfortable with having irregularly different syntax formats for every type of field we have. Sounds like there's a variety of approaches, maybe use the same syntax but with a different keyword, or demonstrate why it's not possible

AWB: I'm concerned about inconstant application of simplicity/"might be useful" tradeoffs. e.g. private field accessors sounds like "might be useful" and we decide to include them. For others ,we think it might be useful but decide to not do it. Let's come down on the side of simplicity

DE: for those specific cases, ? has a specific case for where it'd be useful .. tracked decorator. Other things that were left out of this proposal, because nobody supplied a concrete use case for them.

AWB: the real criteria we should be looking at is, is there a significant enough use case for which there is no alternative, justify adding complexity to either the feature or the overall language

DE: let's continue to discuss the tradeoff for private accessors

AK: he's not particularly objecting to private getters, but it'd be easier to understand if we knew what criteria was being used to rule things in vs out

DE: I'm not really sure what to clarify about criteria

AWB: a good contrast is lexical let declarations vs the getter/setter discussion. we can give use cases for both, there are other ways to accomplish both of them, but .. what do we decide to do

DE: for this proposal, I wrote a couple of documents about various alternatives, I could write such a document about this, not sure it would address the ad-hoc ness

AWB: I'm concerned about the overall complexity of the class features, we're adding an awful lot. It doesn't necessarily make sense to do all those things with classes in javascript

AWB: private methods is another example of a maybe non-essential feature that adds complexity

DE: I tried to explain why I think it's motivated, not sure how to make progress

AWB: not time today, or in this format, to go through point by point

DE: maybe we can do that offline, I argued for it, sounds like you're not convinced

YK: AWB's already written a lot of comments expressing those

DE: happy to get more input here

AWB: one suggestion, my sense from observing from afar/locally, a lot of controversy that takes place on the issues list is not highly visible to the committee as a whole, the presenter tends to emphasize their own position

DE: in the previous meeting I presented the whole problem space

AWB: there's a contention between the champions model and the committee consensus model, not sure what the sweet spot is, in some cases we need more visibility of the ongoing controversy

AK: I'd encourage other people to get more involved with the github repo

YK: the issue is not that AWB is surprised

DE: if someone wants to be a co-champion for this issue

AWB: maybe, I'm not sure I can make that commitment. Maybe if champions make progress reports..

DE: isn't this a progress report? we had other meetings with intermediate status. No notes, but I called attention to it on the reflector

AWB: I guess I didn't have visibility of that, didn't fit into my time budget. I'm not dumping stuff on you dan, just raising broader questions

WH: you're not the only one having this issue

DE: let's wrap this up for today, please follow up on github, especially with the threads that .. go to tc39/proposals, it's linked from there.

DE: about the visibility questions, at tuesday's newcomer's dinner, people expressed interest in improving documentation/visibility as the committee grows

#### Conclusion/Resolution

?


## 13.v.a BigInt status update (significant recent change)

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-bigint )
- [significant recent changes](https://github.com/tc39/proposal-bigint/pull/106 )
- [slides](https://docs.google.com/presentation/d/1gXw9ewq8VzsWUuFgEHi-V2vx4tfZl5lJlkGQWw4iesE/edit#slide=id.p )

DE: proposal to add arbitrary sized integers to JS

DE: one update since last meeting, TypedArrays have ops to convert from one element type to another, initially with BigInt arrays this would throw an exception. One primary use case was to manipulate binary data with 64-bit integers. Asked several people whether BigInt64Array or BigInt64 in typed arrays was a useful feature, everybody said yes. In this PR we're addressing some edge cases around casting. Previous logic was to throw TypeError to avoid implicit conversion without explicitly calling the constructor. With patch, this writes .. ?? lossy conversion?

DE: other change, BigInt.parseInt was removed, Mathias Bynens' fromString subsumes this, more clean/uniform, this is a pattern we want for further numeric types

DE: Test262 testing continues to improve, almost all the surface, still adding tests for type coersion, test by josh wolfe and robin templeton. Spidermonkey has a bug open with a feature-complete implementation, V8 is in progress, plain bigints are done, new typedarrays are not done, good performance. JSC impl is in progress

DE: that's it, any thoughts?

DT: with the recent Meltdown/etc, for aynthing that's a security/psasword/key, you want to be able to erase it so your GC doesn't spread the secret all over the place, are any of the driving cases for bigints here (I love bigints) set up to be able to encoruage / use this for crypto, expressed in JS, which suggests we need to look at things like controlling allocation

DE: people say they're interested in this for crypto, even though we removed all rerefences to crypto fro mthe explainers because of all the different potential attacks, we aren't exposing constant-type operations, etc. I'm not sure what we can do to mitigate even with out this feature, it's possibelt ouse existing features for cryypto

DT: a way to mitigate it might be to use a standard set of crypto libraries

DE: yeah, WebCrypto is a thing

DT: we might refer to that in these docs

DE: maybe in a future impl WebCrypto could take advantage of BigInts

WH: still not fixed-time

DE: but WebCrypto could/could-not add fixed time

DE: maybe docs say "what are you doing, use WebCrypto instead"

WH: my main issue is with new coercions being added, we had many debates about this before. We have a choice between doing things generically between typedarrays or not, for a while we'd settled on doing things non-generically. The coercion doesn't actually solve the genericity problem, we're introducing some coercions but not the right ones. With the ones we're introducing, if you write a value into a typed array and the value is either a Number or a BigInt, in the range of the typed array, and read it back, depending on which typed array you use, it may be the same type or it might be the other type. The coercions are only on writing, but not reading. E.g. you can generically write a function that writes a Number into any width numeric typed array, but a function that reads a value from a typed array, adds one, and writes it back won't be generic across typed array widths.

WH: I'd either like to see no coercions, or if we want genericity we should add BigInt arrays of all widths. It would let folks standardize on using just those and not have to wonder whether they're getting a Number or a BigInt each time

Jakob?: originally proposal there was a distinction between existing TypedArray behavior (throw any number into a 8-array and it just takes the last 8 bits), and the new ones that care what the value is,

DE: how does this differ from the rest of JS

J?: assingment to a typedarray has always done an implicit truncation(?)

DE: I always thought typedarray's conversions were the big difference

J?: I don't feel strongly about it, just the original proposal created a difference between the original typedarrays and the new ones. if you think about typedarrays being raw bit thingys that operate on raw bit values, then it makes more sense. If you think about them as arrays of a given type, then it makes more sense to think about the original (truncation?) behavior?

AWB: specifically about the conversion example on your slide, Uint8iArray taking the Float32Array as argument, the "from" method with second argument as a map function was specifically designed to do that sort of conversion, to convert elements as you transferred. if we're strictly talking about bigint64 arrays to floats or vice versa, I'd point people at that instead of ..

DE: you mean .. "from"

AWB: yeah, this particular example of passing one array into the constructor, that's sort of a deprecated way to do it, the constructor "from" method was specifically intended to give you more control

AWB: there's a broader issue, you aren't just talking about what happens at construction time, you're talking about any time you do a put or store

DE: right, (example on screen from issue), PR changes the semantics of `set`.. seems hard to split, must do either one or the other

AWB: I think changing `set` (doing lossy casts when appropriate) is consistent with history of TypedArray

Jakob: for existing typed arrays, you can assign a string, if it contains a number, it converts the string to a number, then takes the bits from the number that it needs depending upon how wide the array is. For the ? proposal I'm not sure it does any more.

Jakob: this is an example of the type conversion that arrays have always done. these new typedarrays are doing it differently. I'm fine with doing it differently, just wanted to point out the inconsistently

AWB: general job of value conversion.. I can see an argument that TypedArrays themselves are kind of special in how they map between different numeric element types, and in that context, bigints .. would be a reasonable expectations

WH: converting from a string first and then doing a modulo size of the elements, creates incompatibilites between Number and BigInt typed arrays. For some you get the correct modulo mathematical value result, for others you get rounding then modulo, pandora's box

DE: I don't think we can get beautiful mathematical identies from JS type coersion

API: the initial driver for all this, the BigInt typedarrays were meant ot be more like BigInt and less like typedarrays. There was supposed to be fewer implicit coercions going on. Do we need BigInt versions of all the other sizes? Seemed like overkill, they could always be added

AK: what I'm discovering from this discussion, the bigint versions of typedarrays are just a different kind of thing than the existing TypedArrays. Jakob noticed that it threw in a funny place as it tried to take .. the alternative to this PR would be a typecheck very early, converting typedarray into a array and that won't work

DE: I had a different PR, closed it given how the discussion .. we went through all of the them to find th aplces where it would throw in the middle, but not call the callbakc, which is the most problematic case.. is that what you were getting at?

AK: yeah, I'm not strongly opposed to that as a solution to the weirdness, mainly I want to avoid the halfway behavior, I'm swayed by arguments from Jakob.. more narrow, constructor, backing store of one thing into the backing store of the other, not wholesale change to.. think of it as a different hierarchy of arrays, if we went that way

YK: question for anybody, is BigInt likely to result in 64-bit wasm interop in the future. 64-bit values as passed into or out of wasm instances

JFB: yes, they're planning to use BigInt for those values

DE: I'm working on the wasm-JS interop spec, currently no support for this, thinking it would be a good followon

JFB: core wasm allows importing/exporting 64-bit integer values through functions as well as globals. In a JS embedding, those are spec'd to throw right now, speifically to prepare for JS BigInt coming along (instead of the JS embedding spec'ing e.g. two 32-bit integers for each 64-bit integer). wasm to wasm can already use i64 today, in a JavaScript embedding. Very little stuff that needs to be done to make it work

YK: as a user of wasm (rust), the 32-bit limitation just means you can do as many tagged pointer tricks.. excited to see it

DE: there's a bug, I can add a link to the notes

DE: how should be conclude?

AWB: if you only do casting, you already have it, with `from`, rather than future changes

DE: throw exceptions more aggressively, tell people to use `from`

DE: .. does that seem reasonable? back out this PR, throw sooner within the algorithm when converting between bigints and non-bigints, and not add more types

WH: if we can take out the coercions, I'd be happy. I'd love to have the other integer widths of BigInt typed arrays, but the removal of the coercions removes the imperative to do this now instead of in the future.

DE: ok, we have consensus


#### Conclusion/Resolution

- Back out PR that added implicit coercions
- Re-open other PR that attempted to throw earlier in the algorithm

## Open-ended discussion: Exploring Statements as Expressions.

(Ron Buckton)

- [proposal](https://github.com/rbuckton/proposal-statements-as-expressions#readme )
- slides ??

RBN: we've got several statement categories: simple (Abrupt completions: throw/return/break/continue, other: debugger), compound (control flow: if/switch/try/labelledstatement, iteration: do/while/for, block), declarations (variables, function declaration, class declaration, import/export declaration)

RBN: simple statements are the primary area of investigation: fairly trivial semantics. First example is throw operator. Current open proposal allows throwing exceptions in an expression position. Any expression can throw, not a big change to mental model. Fits into ReturnIfAbrupt semantics, exists in Ruby/C#. [Proposal](https://github.com/tc39/proposal-throw-expressions)

RBN: return. would allow early exit in the midst of an expression. requires only minor changes to support, fits into ReturnIfAbrupt semantics. Requires additional lookahead restriction on ExpressionStatement. `function checkOpts(opts) { let x = opts && opts.x || return false; ... }`

RBN: same for break and continue. Can completely replace ContniueStatement with ContinueExpression. `for (..) { const y = x.y || continue; .. }`

RBN: debugger. would allow breakpoint inside an expression.

JHD: what would `y` be there? (when a continue/break/etc interrupts the assignment)

RBN: `y` wouldn't get a value, the continue would terminate the assignment

MM: the debugger case raises an interesting issue with real utility: what value does `debugger` evaluate to? could allow the debugger to feed a value into the program being debugged

RBN: current semantics, debugger returns undefined, might be interesting for meta properties

MM: one of the invariants you'r trying to maintain: if the statement completes non-abruptly, the completion value is that same as the value of that the corresponding expression evaluates to.

RBN: debugger is the only simple statement where there is theoretically a value

RBN: compound statements, contain other statements. Haven't really dug into these beyond do-expression proposal. The do-expression proposal overlaps with the others, discussion can be merged. Analogue between IfStatement and ConditionalExpression. Best analogue for blocks is the do-expression proposal.

RBN: other declarations as expressions. Many existing analogues: FunctionExpression, ClassExpression. ImportDeclaration maps to a proposed ImportCall. Inline variables look interesting: `let z = typeof x === "object" ? (let y = x.a.b, [y.c, y.d]) : []`, to re-use the intermediate in multiple positions. If it's just about null, optional-chaining is an option, but beyond that there's other options.

RBN: open to more discussion

WH: for return/break/continue, esp return, if it always takes a unary expression, it works. If you let it optionally take an expression or not, you get into serious issues.

RBN: yeah, we'd have to consider an option for return.. ASI issues to consider

WH: `a + return / c` . the slash is both a division symbol `a + (return) / c`, or it returns a regular expression starting with `/ c`

RBN: yeah, one of the purposes of this discussion is, is this a direction ECMA-262 wants to go for expressions, if it is, other than throw, none of these are proposed for any stage right now. Concerns like whether return requires an expression should be had. For cases like the throw operator, does it make sense to have throw in light of do, or have do in light of all these statements possibly becoming expressions, how do all these decisions correlate, want to hear from the committee

YK: I'm strongly interested in this direction. Sometimes people object: don't do this piecemeal, why do X with out also doing Y. Is there any intuitive understanding of the relationship between expressions and statements today? Any grammatical reason to not do it is a good one. I don't think there's a current strong intuition as to whether yo uvan treat any given things as an expression or a statement. I wouldn't feel bad if we went down the path and stopped halfway

DH: so you're saying the state of the world today is that we're halfway

YK :yes

YK: using this featurein ruby and rust, the nice thing is that, it's nice to generally assume that things work this way. e.g. multiple languages have `if` as an expression. when you try it in a new language, if it doesn't work, you get a syntax error and figure it out and move on with your life. I think we should try even if we cna't do the whole thing.

AK: I spend my time in C++.. Compound `if` , with internal declarations, now you're talking in the do-expression space

YK: one more thing, because of completion value reform and eval, we did a lot of the work already. It doesn't always work. We can bite off pieces and not worry about whether everything

DH: are you saying, as a reply ot YK, YK says we can do this piecemeal, AK says do expressions and compound exprssions should deal with the concept of completions and .. in a unified way, there are some dependencies between the different work items

AK: yeah

KG: there's a distinction between exprs and statement, not always maintained, expressions have values, statements cause effects. Not accurate, but lots of people (inc me) think this way. I'd be sad to see us go down this path because it's not what I think of expressions as being, complicates my personal model

DH: strongly disagree with that model, having spent many years inside many programmings languages (esp lisp and functional languages), completely expression-based and mostly side-effect-free. History of programming languages doesn't behave that way, not at all the mental model. the value of being able to do side-effects in an expression-based language.. value of expression-based is composability, not purity. Plugging one expressions outputs into another's inputs is important, completely orthogonal to side-effects. Interms of history, personal experience, practical value: side-effect-freeness is the wrong model

KG: not really talking about side-effect freeness, not purity. More the purpose of the code, "what are you doing with this bit of code". I've lot of experience with expression-based languages, or things like python that do some of each. "Is the point of this to produce a value", I'm behind the do-expressions proposal

DH: ok, maybe we're not disagreeing as much as I thought. Places where there's much less practical utility for having them produce values. My guess, I agree with you on loops, disagree on return and throw. Common patterns you see in practice, want to .. ? . Loops you want to embed in contexts that return values. .. it's jumps that you don't want to see as the value protocol ..

TST: mostly what dave said, loops are more fundamentally different than the other constructs. If/switch/try have the highest value to them, I don't care about the simple ones compared to those. And they have fairly clear answers to what are the completion values. Whereas for loops there are really crazy edge cases for completion values with break, folks have been exploring in the do-expression proposals, don't know if they can be easily surmounted or taught, if only for that reasons, I think iterations are very different from the rest. My preference would be to focus on control-flow statements (if, switch, and try), as they are expressions in other languages, and maybe loops happen or they don't.

CM: dave made helpful comments, lisp and things are conceived of from the beginning as expression languages. This whole exercise feels unmotivated. what is the problem we're trying to solve here.. is there some need that the world is crying out for? Or see if something useful shows up? Why are we doing this?

RBN: as we were investigating the throw operator proposal, one requirement was to look at what this would look like for other statements. Whether we do that or not, is a question, but if we're going to draw a line, where do we draw that line. Have a clear reason why we stopped here instead of there . When looking at these, I had a problem finding a good reason for return/break/continue to be expressions, argument was "why not".

CM: "throw" seems motivated. "debugger", first time I'd thought of that, but oh yeah!. But "try"?? "return?"" Can't even wrap my head around.

DH: (trying to be terse). This is about fine-grained small-scale improvements to the conciseness/clarity (not terse as possible, but eliminating boilerplate that distracts), replicated across every little expression people write, so a tiny improvement in the aggregate is huge. re "try", if you don't have the ability to put "try" in an expression, you have to creat a temp variable, hoist it out.. break up what used to be a nice composition of anonymous subexpressions into different separate expressions that force you to name temporaries. Don't really need a name, but the language forces you to pick one. That "temp" name isn't useful information to the reader. This allows you to avoid giving names to things that you don't have a name for. Small benefit, but adds up across lots of different places where it gets used. Of course in complex things you want to assign intermediate names, but we can avoid forcing the programmer to do so

CM: I like that phrasing

RBN: two things I'd like to see come out of this discussion. Is there a priority list the committee wants from this list of statements? Some that are too big to be worth the effort? Also, revisit the stage 3 advancement for throw-expressions by the end of this discussion

MM: scope of lexical declaration expressions? Nested let declaration.

RBN: In the example, the `let y` scope is the surrounding block. To match C#.

MM: in the cast of `const y`, with this you can do something you couldn't do otherwise, assigning a const value from within an expression evaluation

YK: a case that's vexed me, motivates me, assertion functions that takes an expression, and it gets stripped out by build tools. Must use IFFE or something. Have to hoist the variable out.

KG: new syntax is expensive, even simple syntax like throw expressions, pushing obligation to learn the new syntax on everybody, unlike libraries. Should only use it for hard problems: async/await, omitting catch bindings. I want to be conservative with syntax.

KG: I'll die on a sword before you let `y` escape that expression

RBN: there are other proposals, in progress, if they get to the comittee, then allowing this `y` to escape makes a lot more sense. C# has reference and out parameters, pass-by-reference, in the case of a dictionary, they have an output value and return a boolean, can use in a conditional or an if. There are valid use cases, but not in the case of just temporary locals.

KG: everybody disagrees with me, but I think throw expressions aren't sufficiently motiviated if we have do-expressions. I'm blocking consensus on stage 3.

AK: let's point to some backing material, let's talk offline

DH: I agree with being conservative and the cost of syntax, but maybe I disagree with the cost accounting. I feel this is removing a restriction rather than adding new syntax, I'd put it in the same rough category as removing catch bindings, which I'm a fan of. Doesn't increase complexity budget. The budget is stretched. I'll join you on that sword. I'm nervous about a lot of the syntaxes being discussed, but in this category it feels like polishing the ergonomics of the existing forms

KG: if the grammar was the same, I'd agree, but I think it's not

MM: noticing that if for/switch/labeled-statements comes to have a value, then `break` -with-expression makes sense, to provide a value to the thing you're breaking out of

DH: .. I proposed this 8 years ago..

WH: my concern is how complicated it makes the language. `throw` expressions feel natural and are useful and grammatically unproblematic. `debugger` seems harmless. I see the use case of embedding statements inside expressions. However, we can do all of those with the `do`-block-expression proposal. The others bother me because they make the language more complicated: they cannot use the same grammar as statements for a variety of reasons. I don't want to create a second statement grammar just for statements inside expressions. If you need statements inside expressions, just use do-expressions.

SG: you ask a question about sequencing, we're already starting with throw-expressions, I agree tha the other arbupt .. but in the control-flow bucket, those seem motivated to me.. ternary operator. I'd start with throw, then if/switch/try, then either iteration or the other abrupt completions, or just stop there. I tihnk if/switch/try would provide enough value, and give you some of the infrastructure to solve the other ones

RBN: my question, since the issues of do-expressions are similar to the ones with compound statements, .. using do-expression vs if-expression, I don't want to say we only have one or the other. Seems like blocks flow into the control-flow ones. Seems like general consensus is to avoid/skip the var/let/const ones.

SG: if/swtich/try are bigger bang-for-buck

RBN: if we have do-expressions, why have throw: Having throw on its own lets you avoid creation of unnecessary block scope

DH: I second throw/return/break/continue and if/switch/try as good priorities. Don't sink entire category on ..?

JRL: very interested in break expression, taking value. Sam's block proposal from last time, would obviate the whole `using` discussion from yesterday

WH: but break already takes an optional identifier, as a label

JRL: `break label with value` opens up all kinds of exciting user-land block expressions, re: @sgoto's block proposal?

DH: a note, I proposed the same thing with different window dressing a decade ago, maybe look at the list from back then

BM: I'm excited about debugger with expression, able to serialize/persist devtools properly

RBN: I've heard one statement of blocking. Is there any objection to throw-expression moving to stage 3

KG: yes, sorry, I'm concerned about the complexity of the language

AK: do you think throw-expressions *increaseS* the complexity?

KG: yes, I do. If the grammar could be made the same, I'd be fine. But `throw a+b` throwing `a`, I'm not ok with, it means two different unrelated things in expression-vs-statement position. Since the two grammars can't match, I think it increases the complexity, so I'm blocking

YK: point of order, not about you specifically, this is the kind of thing that really benefits from coming u pat the entrance to stage 2

KG: I did

YK: sussing out whether we want a feature at all in stage 3 is a weird thing

RJE: btw, consensus does not mean unanimity

MM: we have a history, we say "consensus", but never define it, precedent is .. My sense, it's not unanimity, but it does admit a single member blocking consensus with the understanding that you feel very strongly about it. A single dissenter with weakly-held dissent generally concedes to the room. A single dissenter with strongly-held dissent has frequently saved us from terrible mistakes. I don't want to change our sense of that

YK: one mitigting factor that might avoid deadlock is social pressure on dissenter to join group

DH: concrete suggestion, the core disagreement seems to be if the gotcha of different meanings of `throw a+b` in the different positions, is that sufficient to sink the benefits of this feature. The debates so far has been does this add complexity, does it add user benefit. The way to make monotonic progress is to zoom in on the specifics. It needs more rounds of discussion, but not infinite rounds. Maybe we haven't had enough discussion of that specific issue. The lack of zeroing means you could change my mind

WH: leaving the metagame and going directly to the issue, the question seems to be where `throw` lives in the precedence hierarchy, if it were at the lowest level, there would be no issue with it changing the meaning of `throw a+b` when used inside an expression, but you'd also always have to parenthesize it. If it were in the middle, say just above logical operators, then you need to parenthesize it in some cases but it would change meaning in a few expressions. Maybe we could find a place in the hierarchy where it wouldn't cause significant problems. Would that satisfy your concern, KG?

KG: that might be a good thing to do, I don't know there's any answer to that question which would satisfy my concern

?: the grammar issue DH was talking about, I don't think it's the sole issue. I agree with ? that we ? moving this to tsage 3, not just because the grammar. The lack of .. in do-expressions, is a topic I don't tihnk has been adrress. Maybe using do-exprssions for this case would be a way forward.

DH: modulo fine-grained differences, the problem with wrap-in-do-expression is similar to wrap-in-IFFE, speficially the throw. Adding additional boilerplate that's not the thing you're trying to talk about. `do` is slightly better than IFFEs, but still worse than expression

?: `do` is much better than IFFE

DH: sure, but it's still not saying what you mean

KG: I think do-expression is maybe better at saying what you mean

?: at some point, our committee may reach the size where this process might not resolve

YK: it's bad for the person objecting if they're worried it will change the process

DH: wanted to reiterate what MM said, we don't want to lose a very valuable check-and-balance

KCL: timecheck for remaining presentations

RBN: conclusion: not moving to stage 3, want to address concerns, maybe offline, maybe grammar changes to make it more viable as an option, ..

#### Conclusion/Resolution

- not moving to stage 3



## issue about process, coordinating with other standards bodies

(Jordan Harband)

JHD: timeline for Promise cancellation. there were some disagreements, different forms. In between meetings, the proposal was withdrawn without explanation. Champion wasn't in the next meeting. So after something was already specified in browsers, and shipped, before this committee got to ask the champion. Venue change. Brought up again. .. the name "AbortController" must be used

YK: there's a worse problem, there are aspects of the .. Domenic made a stronger claim.. DOM features.

JHD: the effect, regardless of the quality of what landed in browsers, is that TC39 now finds itself constrained by what's already shipped in browsers. I saw it as a process failure, I don't know of who, seems like it would have been much better if it'd been standardized and then used in e.g. `fetch`.

JHD: not trying to figure out blame or specifics, but main issue is that something happened that was sub-par

JDH: now we come to Observables, an important primitive to represent multiple future values. Some people on the committee think this is valuable, it's upon the proposal and champion to demonstrate/persuade of that, but the possibility exists that this is true. so tc39 (and member companies) should be very interested in properly standardizing this. It has not been brought up in committee very frequently, and the Github repo is very busy, so people can't keep up with the current status. Hasn't been on agenda very often. But now it's starting to explore a change of venue and appearing in browsers. Maybe that's good and we can follow them and add it into the language. But if something ships and then we're constrained, that's a process failure. Member companies that are in both orgs should help.

YK: one point, Cancellation had an especially acute problem, we were standardizing async functions, which maybe wanted to be cancellable. Observables don't have as obvious an intrinsic connection to the spec

JHD: ok, I think it's relatively coupled to async iteration, but either way I wanted to bring the issue up, it's possible that by the next meeting in March, Observables may have already been shipped in browsers.

JHD: I'd request that any company here which is involved in other standard bodies that might overlap, please act in good faith and attempt to delay those processes at least to figure out whether this should be the venue. For proposals you are championing or debating, decide if it's worse to land it in the language (with reservations), or to be forced into the language (with web reality)

JHD: for anyone with a voice in the Observables discussion in the HTML spec, please see if there's a way, or to confirm if we should, have them in the language first.

JFB: one issue, I don't like the phrase "act in good faith", it implies what happened in the past was in bad faith. But I'll assume you used that phrase in good faith.

JHD: fair enough, thanks

JFB: I know at least in wasm we haven't been perfect in the past, but I think it was through our collective incompetence and not malice. For example, there are places where the web platform could have been involved, we reached out, but nobody showed up. Maybe we should have reached out harder, because when we finally sat together things were pretty much done, and there were tensions. If folks from this committee are interested, it's best to attend other groups, not wait for other groups to come kiss the ring. For example recently MM has been participating with wasm and host bindings and that's been tremendously helpful.

JHD: thanks for that. I recently learned about a WeakValueMap map being considered for wasm, which also might force the language's hand, thanks for clarifying

MM: webassembly is a very interesting interaction, I'm on the wasm team at google and involved in the standard. There's pressure to introduce weak references or something morally equivalent into wasm. There's a weird disconnect between that and the same team having advocated that weakreference *not* be available in javascript, and not denying that wasm and JS are synchronously coupled, so anything in one is also in the other. SharedArrayBuffers, as available in javascript and standardized by ecma, are available in wasm and standardized by w3c, this will continue to be painful. There's a need for both bodies to track and agree on precisely the same spec. That's a very weird thing to try to coordinate. In order for neither side to feel they've been forced by the other, you need consensus across both groups across both organizations.

AK: I second's JFB's suggestion to not imply bad faith or malice

JHD: I apologize, thanks

AK: thanks, we might want to consider changes to our process, to address these process failures. Mark's example is interested, it involves large numbers of people trying to agree on things, difficult

DE: a classic way for standards groups to address these things is with liasons. Ecma has a special form to sign to be a liason from a different committee. we've relied heavily on specific people who cross over between organizations. It's great we have several members who cross over to wasm. Maybe we should actively promote being these liason positions, splitting up that work among multiple people so we can do a good job

YK: agree strongly about "nefarious", no mustache-twirling villans here. But also, people aren't always behaving solely on rational technical reasons.. about venue, which standards body is responsible, people react strongly to questions of venue, used to accomplish certain goals. It was hard to figure out what happened with that. As a person without a lot of leverage, I'm not at a browser company, tc39 is special, it gives leverage to people who aren't at big companies, attempts to move things to other venues that are mostly populated by large-company, serves to reduce influence of smaller parties, might contribute to more heated conversations

DE: different standards orgs have different ways to get involved, whatwg is pretty open, but easier in some ways, harder in other ways. When there are cultural differences,

YK: as a practical matter, there are venues that see their job as mostly documenting the will of implementers, but those make it more difficult to

AK: I encourage you to use language that's less divisive..

YK: I don't think it's malice, it just makes it hard to include the non-implementers .. I meant it in an uncontroversial way, whatwg is historically meant to serve implementers ..

DD, remotely, after the fact: I contest that characterization and believe it's based on a misperception. The priority of constituencies puts users over web developers over implementers.

RJE: ok, we've run down the clock. Please check the Doodle poll for the London meeting, the host needs to get numbers for the room. Thanks to Sam Goto and Google for a great job hosting the meeting, the new-comers' get-together, and the Wednesday dinner.
