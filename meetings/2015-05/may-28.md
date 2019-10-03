# May 28, 2015 Meeting Notes
-----

Brian Terlson (BT), Allen Wirfs-Brock (AWB), John Neumann (JN), Jeff Morrison (JM), Sebastian Markbåge (SM), Yehuda Katz (YK), Dave Herman (DH), Sam Tobin-Hochstadt (STH), Kevin Smith (KS), Daniel Ehrenberg (DE), Adam Klein (AK), Jordan Harband (JHD), Jafar Husain (JH), Mark S. Miller (MM), Michael Ficarra (MF), Chip Morningstar (CM), Simon Kaegi (SK), Peter Jensen (PJ), Eric Ferraiuolo (EF), Stefan Penner (SP), Paul Leathers (PL), Jonathan Turner (JT), Brendan Eich (BE), Dan Gohman (DGN), Miško Hevery (MHY), Matt Sweeney (MS)

-----

## ECMA Update (István)

Do we still withdraw E4X and etc?

### Consensus / Resolution

Withdraw.

## Function.prototype.toString revision (Michael Ficarra presenting)

MF: presenting https://github.com/michaelficarra/Function-prototype-toString-revision

MF: Let's review the spec for toString

YK: How does it deal with default arguments?

MF: The spec currently doesn't say anything about parameters

MM: The requirement is that the returned function string has the same behavior when called

YK: Worried about what implementations do

BE: All the known implementations do source recovery

MF: presenting...

Open issues:

- function name property
- definition on MethodDefinition and GeneratorMethod is left undefined because how would you define this, new.target and super--eval'ing it couldn't let them bind properly. However, it's important to leave things open to implementations to just hold the source code as they do right now.
- It would be better if the spec talked about the result of evaluating [[Call]], rather than the internal steps of [[Call]], so it doesn't overspecify. This text seems to use the word 'indistinguishable' in a way that's specific to that particular paragraph; maybe it should leave the word 'indistinguishable' for what it means in the rest of the spec and use another word here or refer explicitly to the outcome of the evaluation.
- Add an optional FunctionBody after '[ native code ]' for the native case (suggested by MM)
- Require (in chapter 16) that implementations generate a SyntaxError for '[ native code ]'

MF: Discussing the "Else, if func has an [[ECMAScriptCode]] internal slot" clause of the new spec text

AWB: The statements "func was defined using ECMAScript code" and "has an [[ECMAScriptCode]] internal slot" have the same meaning

MF: How do we handle things that were not created using the Function constructor or written in ECMAScript code? What if a host-provided exotic object has an [[ECMAScriptCode]] internal slot?

AWB: Then it is, by definition, created by the Function constructor.

MM: The first if should just be "if func has an [[ECMAScriptCode]] internal slot and is callable..."

MF: But then you need a way to distinguish the case where the host environment provides some object that has an [[ECMAScriptCode]] internal slot?

BE: You don't need to, it can be the "else" clause, along with an Assertion

YK: Back to the goals: what rubric is being used to decide which cases should be defined to throw a SyntaxError when toStringed?

MM: The goal is to avoid the case where toString doesn't generate an error, but evaling the result doesn't produce equivalent behavior to calling the function.

YK: An alternative design is to provide source recovery. In that case, the design should be to return whatever the user typed. That obviously violates the evaluatable requirement.

MF: The proposed change also defines the 'function() { [native code] }' string that must be returned.

YK: Does that mean that the PS4 returns that string for all functions? Or is it non-conforming.

MM: This definition means we're committing to '[ native code ]' being a syntax error.

CM: Seems brittle, could we prefix the string with something instead?

BE: Web code depends on that specific "[native code]" string -- de-facto standard

MF: And the point is to be easy to parse it (paired braces, brackets, etc)

MF: Proposing moving to stage 1.

YK: Don't think we should move to stage 1 as this is the first time the committee has seen it.

BE: This has been discussed on es-discuss, there are open bugs

AWB: The problem goes back to ES6 discussions

STH: Yehuda clearly disagrees with the underlying goals, which is why his complaint should be relevant to whether we move to stage 1

BE: That is a very valid procedural objection; separately, I don't feel like source recovery is doable

AWB: If the interest is in providing moving functions between address spaces, then maybe we should do it somewhere other than `Function.prototype.toString`, which doesn't work for all cases right now anyway.

MM: Why not make toString do that job?

AWB: Because it's at odds with source recovery.

YK: As we add more things like 'super' to the language, there are going to be more and more cases where toString is not going to provide portability.

MM: The cases I care most about are FunctionExpression, ClassExpression, GeneratorExpression; am open to producing guaranteed SyntaxErrors for things like GeneratorMethod.

CM: But that's still going to put pressure to try to generate things that work for round-tripping behavior and are further from the source recovery usecase

MM: The de facto standard in ES6 was already to generate an error at eval time for methods, I'm only trying to make that explicit in the spec

YK: I don't want the addition of 'super' in a method to change the output of a test suite from the source text to a syntax error

MM: What if we inject a guaranteed syntax error [like "[native code]"] in to the toString? Or alternatively guaranteed that method syntax is a syntax error in an expression.

YK: I would be open to that if it's easy to strip out.

AWB: This whole thing bothers me, toString seems like a debugging/recovery thing, even if it's been historically used with eval. I don't like that, in a debugging session,  toString will not return the source that I typed.

CM: It really sounds like these goals are at odds

    > (function() { /* hello */ }).toString()
    "function () { /* hello */ }"
    > (function() { /* hello */   }).toString()
    "function () { /* hello */   }"
    > (function( foo ) { /* hello */   }).toString()
    "function ( foo ) { /* hello */   }"


JHD:  `Function.prototype.toString.call({foo() { return foo }}.foo)` in firefox returns "function foo() { return foo }" but in v8/chrome returns "foo() { return foo }" which are not functionally equivalent

JHD: also, `Function.prototype.toString.call(Object.getOwnPropertyDescriptor({get a() { return 3 }}, 'a').get)` in FF returns "function () { return 3 }" but v8/chrome returns "

YK: Can we agree that source recovery should be a goal of this proposal?

MF: It wasn't originally my goal in putting together this presentation.

MM: I agree that implementations seem to be aiming for that goal, though it's not a goal of mine.

SP: Another use case is detecting what features a function is using (say, 'super')

MM: The injected syntax error solution supports that use case

MM: I only care about a certain set of cases

YK: What about arrow functions?

[...lunchtime discussion...]


YK: There are a set of things that do not have unserializable state (FunctionExpression, ClassExpression, GeneratorFunctionExpression, and some declaration forms of those). There a whole other set of forms (arrow functions, concise methods) that may have unserializable state.

YK: The proposal is to add a new predicate (strawman: "Reflect.isPortable") that can be used to determine which of these forms a given function falls into.

YK: The predicate could even return more information, such as a list of free variables in the function.

YK: Given the above predicate, I am satisfied that moving MF's toString proposal to stage 1 will satisfy both the source recovery use cases and MM's portability uses cases.

### Resolution

Move MF's Function.prototype.toString proposal to stage 1, with a dependency on the Reflect.isPortable predicate (which is effectively a stage 0 proposal) and an added goal of supporting the source recovery use cases.

## Decorators (Yehuda Katz, Jonathan Turner) (Need slides)

YK: Used to be against decorating function decls which hoist. Also, having decorators on exprs and decls was bad. However, I've come to peace with hoisting the execution of the decorator expression. Seems plausible.

AWB: Function declarations are created before there's any environment. If you introduce something that can execute at that time it changes all of the semantics.

YK: This is hard. We need to think hard. What Allen said was true.

DH: We shouldn't rathole for too long on what the answer is because we don't have one yet. There is no obvious right answer. Easiest not to support this at all, but this is a mistake - people want to use function declarations, and if decorators don't work on function declarations, people won't use function decls. We have a few tools - 1 is imports.

YK: The semantics will be rough no matter what. We can prototype and see if in real world code this is a problem.

JM: Prototyping is great but it doesn't find footguns well because it's a small module.

JT: We can put it in typescript. We get good feedback. If it's just in experimental, it's possible to remove later.

AWB: Clarifying module initialization: when a module is instantiated, one of the first thing that happens before it finds any imports, it instantiates any function declarations.

DH: You could observe that a binding isn't initialized yet. Could introduce TDZ?

[Problem: If you make a let binding and refer to that in a decorator parameter, you will hit a TDZ]

AWB: Creates opportunity for fatal circularities that weren't a problem before.

YK: We should get our transipler friends to try it out and see.

DH: There needs to be work on this... need a plausible design.

YK: I agree.

AWB: Would it be an acceptable semantics if we can't figure it out we say that decorated decls don't hoist?

DH: Sure. There will be inconsistencies any way.

YK: People depend on hoisting. What it would mean is that occasionally their code wouldn't work and they wouldn't use decorators. Maybe that's ok.

AWB: Maybe that's ok! Could be same as classes. Could have good error message.

[ Presents on parameter decorators ]

YK: Parameter decorators work on Parameter descriptors.

JM: Couldn't I just decorate the entire function and use the reflective API to touch the parameters?

JT: Yes.

AWB: What do we statically know and what is knowable dynamically. Do we statically know there is a formal parameter named "f"?

YK: You can't change type or name of the parameter descriptor. The main thing is metadata. Possibly wrapping the default expression.

AWB: Root of the question is about the fact that a function definition starting with name and parameers through the body is something that is statically analyzed as a unit independent of evaluation. This injects in essence evaluation semantics into the middle of the static analysis...

YK: I Wouldn't think of it that way. I would think about it that you create a function in the first step and then you go through the formal parameters and get their descriptors and you could modify them, but the modifications you can make are limited to things we can accept.

AWB: Ok, different question. Last question assumed the decorator was evaluated at func definition time. But another way is that they are evaluated on each invocation.

YK: One goal of decorators is that they don't introduce call-time overhead.

BE: Need to clearly define the evaluation model.

YK: Started with the reflection API as I'd like to desugar to two reflection APIs.

AWB: Here's the trap: If I wanted to write a static compiler for ECMAScript, how does this impact those uses?

YK: The simplest thing this is doing is adding metadata which seems equivalent to adding to weakmap.

AWB: If evaluation happens after the class... if it doesn't require anything at compilation time...

YK: I think that's a sticky question..

AWB: It looks like it's inside the function.

YK: It's outside.

AWB: What's the scope of param decorators? Are params in scope like they are with defaults.

YK: All decorators, no matter where they are placed inside the class body, have the scope of the outer scope. It's possibly confusing.

AWB: I think it's totally confusing.

BE: It seems confusing.

BE: ARB sees wanting decorators on static constructs like modules and other decls. There is a tension between static and dynamic.

YK: In practice the case that Allen mentions won't happen.

YK: Originally thought that param decorators didn't fit into this, but everyone wants this so...

AWB: What about destructuring?

JT: (Answering what is done in TS) Param decorators have outer scope.

AWB: Violates rule we had in ES6.

YK: Need to work out the semantics.

AWB: What about patterns [destructuring bind]?

JT: I think TS doesn't allow now.

DE: Must be hard to even reflect on destructuring bind

AWB: It would be bad if the decorators worked only some of the time, and then not on destructuring bind. Good to capture all the hard problems.

[Discussion between AWB/YK Regarding when evaluation occurs for various decorator constructs]

JT: Imagine we had a reflect.decorate API that was capable of composing for you. The other way would be to form a decorator pipeline of sorts.

YK: Completely replacing a class with a new class seems bad.

JT: We want to create a reflect API for self-hosting decorators with a step-by-step thing.

[ More presentation and discussion missing from here ]

### Observable Nominal Type (JH, KS)

JH: Presenting slides TODO(JH): add link

Issues with async generator proposal [expanding on bits where slides are terse]:

- General agreement that async function* should return an "async iterator" instead of an Observable, as observabe's push model is not necessarily asynchronous, example being sync DOM events

Questions on `Array.prototype[Symbol.observer]` slide:

DH: Why the check for falsiness of iterResult?

JH: Just being safe, agree that if |generator| is a real generator it's not possible for iterResult to be falsy.

MM: Why are you calling generator.return()? That's normally meant for early exit.

JH: In this case the generator is being used as a sink, rather than a source....no, sorry, the slide is wrong [live coding].

Questions on WebSocket slide

MF: Why arrow functions?

JH: No particular reason, other than those that refer to 'this'.

JH: [...continues...]

SP: What happens when errors occur? Error propogation?

JH: When an error occurs in a Promise, the Promise is "dead". That's not the case with Observables, since other observers could still be added by subscribing. But an error signals the end of a single subscription. Every observation ends with either "done" or "error".

SP: I think that subscribe() seems like it conceptually should return a Promise, with the only callback passed into subscribe() is "next". That would make this compose better with other Promise code.

JH: That's exactly what Observable.prototype.forEach does. But there you don't get the subscription back, so you can't unsubscribe. Unless you have cancelable Promises.

MM: Alternatively you could return a pair of [subscription, promise] from subscribe(). But that has the problem that a single subscriber could end the whole observation.

SP: OK, now I'm seeing that this is the same issue as cancelable promises.

Side bar:

[discussion among YK and MM about having then() return a subscription, and why we didn't do that]

MM: You could have a lower-level operation than then() that returns a pair of [promise, subscription] where unsubscribing only cancels the particular callback passed in, not the whole promise. And you could have async functions make use of this, which makes it not so bad that you have a pair returned. This might provide an answer for cancelable promises.

[TODO(YK, MM): More detail here if you want it pulled out of this presentation]

...back to Observables...

MM: Does calling unsubscribe() cause return() to be called on the argument to subscribe()?

JH: No, I don't think so...KS?

KS: Yes, a well-behaved Observable should call return().

CM: I don't think that makes sense, return() should only be called when the Observable's stream is complete.

MM: Doesn't that break the compositional cleanup semantics?

KS: The way I designed the polyfill was more in line with that thinking [that return should be called on unsubscribe], will sync up with JH to sort that out.

YK: I think SP was getting at this: we shouild make sure that we [learn the lessons from Promises] and have error propagation work well.


DH: Comments on Event Composition slide. Trying to describe Hot/Cold language. For mouse moves, it seems like once you have no more subscribers, you want to stop receiving mouse events.

DH: trying to understand hot vs cold observables: mousemove is an example where once you reach zero subscribers there's no point in continuing to receive events, so the data source cancels

JH: Yes, that's "hot"

DH: whereas a cold one might be like a network fetch where when the subscriber count reaches zero that doesn't mean you won't have new subscribers and you don't necessarily want to cancel the underlying request

DH: but the decision to be hot vs cold is at the data source, and Observable combinators are about subscription, so one set of combinators works for both hot and cold?

JH: well yes but there are plenty of combinators and inevitably some only make sense for hot or cold, and it's IMO more reasonable just to have one set of combinators and have some that simply don't do anything reasonable when called on the wrong type of data source; so that's a leaky abstraction but more practical


MM: Proposes `Observable.prototype.then()`.

KS: Considered that in the polyfill, but ran into possible other things that .then() should do. Will continue consideration.

JH: Continuing Event Composition use cases...

MF: These new methods, are you planning to put them on Observable.prototype? Won't that cause problems if people start monkeypatching?

JH: Yes, something to be considered.

YK: Promises got fast-tracked because of use-cases in ES6 and the DOM. Have you gotten a lot of feedback from DOM folks that want this? I'd imagine that there would be people chomping at the bit to use Observables for events.

JH: Have only heard a bit from DOM, regarding filesystem APIs. Not a lot of feedback from that side.

YK: In the meantime, I encourage JH to work on "Observables A+", with a test suite

MM: With the goal of working with other Observable libraries and getting them all on the same page

JH: I've been in discussion with those libraries

YK: You don't even have to write the reference library, but it would help to have lots of examples (IndexedDB, other web APIs) showing the value, as was done for Promises.

JH: I think it would be nice to explain DOM events in terms of Observables; at the least we should be able to adapt them.

MM: Naming concern: this name seems close to "Object.observe". If it didn't exist, "Observable" would be the right name.

DE: We could defer this question until one of the two proposals makes its way further along.

JH: Could Object.observe be in terms of Observables?

MM: Would Object.observe folks object to that?

AK: I'm probably the best person to speak to that, and it seems like a reasonable thing for Object.observe to be in terms of Observable

JH: Also, ideally "subscribe" would be called "observe"

CM: I think "subscribe" actually has something to recommend it -- gives rise to Subscription as name for thing you get back (Observation doesn't work, singular)

AK: No one is currently working on pushing Object.observe to stage 3, but I'd be happy to have contributions or feedback.

BE: There are objections to it; some people think it shouldn't be there (see Nov 2014 meeting notes)

JH: Including me

DE: Let's say neither Object.observe nor Observable can get to stage 3 until we get some resolution on the naming conflict

[ General agreement, moving on ]

[lots of discussion about hazards of sync Observables; `Observable.prototype.subscribe()` only actually subscribes at the end of the turn to avoid one such hazard (see slide)]

MM: Basically, in Promises, there's a guarantee that the callback is called from a clean stack. For Observables, the only guarantee is that the callback is not called from the callback provider's stack. Which is still a pretty good guarantee.

JH: Right. We put the burden on Observables that, if they act synchronously, they be careful that they don't depend on state that might change while they act.

MH: We [Angular] can confirm that this is a good tradeoff.

JH: The motivation for not forcing next() to be scheduled in a new job is to be maximally efficient.

MM: Something I've expressed before, and I'll reiterate, is that I worry about all this new syntax, and would like to see some way to use composition to avoid adding new syntax for each combination of these things.

DH: I think the exploration is great, but I also have concerns about proliferating syntax.

### Resolution

Move to stage 1, keeping in mind DOM events especially
