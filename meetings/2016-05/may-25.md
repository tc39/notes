# May 25, 2016 Meeting Notes
-----

Brian Terlson (BT), Dave Herman (DH), Michael Ficarra (MF), Jordan Harband (JHD), Waldemar Horwat (WH), Tim Disney (TD), Shu-yu Guo (SYG), Mark S. Miller (MM), Kevin Smith (KS), Michael Saboff (MLS), Eric Faust (EFT), Chip Morningstar (CM), Daniel Ehrenberg (DE), Leo Balter (LEO), Yehuda Katz (YK), Jafar Husain (JH), Andreas Rossberg (ARB), Ben Smith (BS), Thomas Wood (TWD), Alan Schmitt (AS), Brad Nelson (BNN), István Sebestyén (IS), John Neumann (JN), Jeff Morrison (JM), Domenic Denicola (DD)

Remote:
Dean Tribble (DT), Nikolaus Papaspyrou (NPU)

-----

## Agenda

??: Unfortunately we will not able to cover all topics. There is a priority for proposals that have to advance in this meeting. The target is for each topic one hour of discussion maximum. We will see how that will work out...

__NOTE from István__: The formal Ecma rule is that any proposal that has to be voted upon formally (i.e. one vote per member company present in the voting) in an Ecma TC is a publication at least 15 days before the TC meeting. Anything shorten that that can be introduced, discussed, move forward for further discussion, consideration, etc... but a "formal" TC decision is not possible.

## [Decorators](https://github.com/tc39/proposal-decorators) (YK, BT)

[_slides_] __TODO:__ link to slides

ARB: the fact that classes are declarative is a feature

WH: adding a link to the proposal to the agenda 30 min before presenting a proposal looking to advance is unreasonable

DE: agreed

WH: links should be posted to the agenda the week before

WH: what is the signature of the enumerable decorator?

JM: it takes a descriptor and returns a list of descriptors

DH: the decorators feature is an extensibility feature that allows you to transform something in the source into 0 or more alternatives

DD: is the value property a method or a function?

YK: it is an uninitialised closure that errors on invocation

SYG: what if the list has multiple entries with the same name?

YK: we may want to validate

YK: [_presentation finished_]

DD: many abstract ops in current spec text are undefined

YK: initial spec text has left out trivially-defined abstract ops; I can clarify them

DE: this exposes objects in an intermediate state; how does the constructor relate to the resulting class?

YK: intended semantics: it is the original function; invoking before class is initialised is an error

DE: then you couldn't have a decorator that replaces the constructor with another function?

YK: it is possible

DE: which one has the identity of the class? always the one you return?

YK: decorators that replace the original constructor will incur some cost

DD: you have to produce a wrapper for all decorated classes

BT: we could also not have them be SameValue

DE: I would prefer we have no runtime overhead from a class that has been decorated

EFT: classes already have additional cost (derived class constructors' this value)

YK: the set of functions and values conveyed in this proposal is quite small

DD: I had hoped to see ore formal semantics; how does the array get converted into ClassElements? how do the property descriptors get used?

DD: do you pack them up into spec objects and unpack them, or are the same objects re-used?

WH: if the first decorator creates a getter that matches up with a setter somewhere else in the class?

YK: syntactic merging when a decorator is attached to a get/set pair; non-syntactic when a decorator adds one half of get/set pair

YK: coalescing gives us syntactic merging; semantics of defineProperty hold for non-syntactic case

JM: why are decorators run bottom-to-top (closest first)?

YK: BT: it's like function application

WH: Do decorators ever appear after the thing they are decorating, rather than before?

YK: No, they only have access to what comes after.

BT: We considered other things too

YK: Such as object literals, maybe they will come, but it will still come before.

DE: how would private state interact with decorators?

BT: and how about initialisers?

YK: Property declarations would work by reifying the initializer in a thunk and making an analogous object representation

DE: And how about private state?

YK: Make a getter/setter for the private state for the slot which is exposed to the

YK: depends on the particulars of KS's proposal

YK: what part of the proposal is insufficiently precise for stage 2?

JM: To put words in your mouth, sounds like you are saying, for fields, there will be a separate type of object which is made, right?

YK: Right

DD: my concern is that this has a *lot* of unspecified behaviour; was submitted very close to the meeting

WH: agreed

YK: Spec text for Stage 2 is allowed to contain holes

BT: the things that are missing are not interesting

DD: the case for uninitialised functions is super interesting

YK: not needed for stage 2--this is already something that the spec implies exists

WH: disagree, that is a core issue

YK: stage 2 expressly does not require complete spec text

DD: I can't tell if this is 10% or 90% of full spec text because I had 1 minute to review; best guess is 30%

YK: I assert that the API surface is very small

WH: I disagree. I think you need to figure out what an uninitialized function is before this advances

YK: extrapolate what that would mean for other proposals

YK: I have told you what the semantics are

DD: still open questions: does it have a prototype? lots of others

KS: This is a core semantic change to the basic language and exposes something that's not there right now

DH: it happens to be written "make a function that is unintialised"; question remains what is the difference between an initialised and unitialised function?

DH: can be a single it that marks the function as uninitialised

EFT: then it should specify it that way

JHD: can it be a live binding to a different function that always throws, that's updated later?

WH: What happens when you call toString on it? What happens if you start walking its prototype?

BT: The only difference is that when you call it it throws. Otherwise it's just normal.

DD: what about construction? these are open questions

JM: is it the same as if you had a function that throws an error?

DH: this is uninteresting

DD: no, it is core to the semantics

DH: it is a minor issue because, for stage 2 proposal, should not be concerned with such details; consider if it is a feature that is good for the language

KS: We can't evaluate that yet. One of the things Yehuda said is that this is a 20% feature. But the solution to the 20% feature is requiring some core semantic changes. That makes it hard for us to reason about the cost/benefit changes.

KS: not comfortable finding edge cases on the spot

YK: If we are talking about edge cases, we are not talking about the core semantic features

DH: This is an important feature. People are over-focusing on certain things. This 80/20 thing is about, if you have a feature that solves some cases but not others, users have no choice but to step outside of the declarative feature and use an imperative way to define classes. Then people don't feel that the actual feature is worth using. If I have to keep falling off the common path, it is not a complete enough abstraction. People feel that the max/min thing falls off a cliff. It'd be nice to have a general solution like this rather than special cases.

YK: There might be alternatives, but none seem to be really done/in use. So ecosystems are depending on this being a feature.

DH: The spec was presented too late to advance today. But I don't think it's acceptable to block this on a technical issue in the next meeting. That is reason to note that it has more work to do.

DD: The issue is whenever we get fully specified semantics, hopefully sooner than two months from now, it would be useful for evaluating the proposal. If you look at Stage 2 proposals so far, they have full spec text.

YK: other proposals have hit stage 2 with similar spec text

DD: disagree, most proposals reach stage 2 with full spec text; we have frequently gone well beyond the requirements

JM: Sounds like there's no stage 2 and we are out of time

YK: I disagree that I need full semantics. This is just a map operation

DD: I think KS and I disagree on how core the things that you've elided are

MF: I agree with DD, previous stage 2 proposals have often had full spec text.

MLS: Seems like spelling them out would help, and giving

#### Conclusion/Resolution

- Proposal does not reach stage 2 yet

## Private Fields (KS)

KS: consensus last meeting was stage 1. overall approach: non-reified WeakMap per-field.

YK: appreciate a review?

KS: _review, pulls up slides_:
  - design goals
  - basic syntax and semantics
  - throws when attempting to access field on object without it (ie, if the non-reified WeakMap doesn't have the object as a key)
  - example of non-reified WeakMap potential implementation
  - Derived Classes

YK: when would private initializers happen in relation to public ones?

KS: Interleaved

YK: Are you proposing initializers?

KS: Yes

YK: What about those initializers controversies?

KS: [_deferred til later section of proposal_]

KS: what about static shape? [_overview of edge cases_] return override issue seemed to resonate with the committee: "just works"

KS: other features: shorthands. `this.#bar` vs shortcut of `#bar`. Agreement was that `#bar` is simple sugar for `this.#bar`.

YK: `#bar` is always syntactic shorthand for `this.#bar`?

KS: Yes.

NB: Previously there was some uncertainty about which `this` would be appropriate, and the resolution is that the current `this` value is always fine.

KS: Early errors are unspecified atm. For example, nonexistent field names or shorthand that is nested within an inner non-arrow function - I'd like those to be early errors.

DE: There are early errors for this.#foo where foo is not a private data at all, right? You're just missing the extra additional tighter checking for #foo to not look at the outer lexical fields, right?

KS: right

YK: i think the rule you have in mind is that it is syntactically allowed in method bodies wherever the "this" value is defined to be the same as the class?

BT: it might be the same as where `super` is allowed?

KS: moving on for now

KS: last time i didn't present initializers, because of max/min, but obv they are an important feature.

KS: My preferred semantics for initializers for private fields is that they execute in the lexical env of the class body, but would not have access to the newly created instance via `this`.

KS: after talking things through with Jeff, it doesn't bother me to allow access to `this`, `super`, `new.target`.

EF: `new.target` is a dynamic call-site specific value

JHD: `this` is also pretty dynamic

KS: It is a bit weird to have it there, but I wanted the environment to be as close as possible to the constructor, except without lexical access inside of the constructor.

EF: And all of these operations run right after super

KS: right

WH: can these fields refer to each other in their initializers?

KS: yes.

WH: so there's a TDZ if it's not yet initialized?

KS: yes, they run in textual order.

_many_: Does it return undefined if you access a private field before its declaration?

KS: [_overview of spec text_] InitializePrivateFields.

YK: When would the initializer fail because the private property already exists? More about return override?

KS: You can construct crazy scenarios where--

WH: a super constructor can return an existing instance of a subclass

MM: I feel very strongly that an error should be thrown when adding the same private field redundantly

KS: If an initializer is missing, it sets it to undefined; otherwise it sets it to the value of the initializer

YK: We were asking what happens when reading from a private field which is not initialized, for accesses that happen before, during and after construction.

KS: You'll get a TypeError if accessing a missing field

YK: Access to private fields require an initialization check

JM: This is the same check as needed for accessing a field on an object when you apply the method which uses private state to the wrong kind of object

YK: Maybe return undefined?

MM, WH: There should be a type error

MM: Seems like the access checks could use the same machinery as returning undefined for missing fields anyway

YK: What about fixed shape? Why did we get rid of that?

KS: I did earlier have preinitialization to undefined, before any initializers run. I was attracted to the idea thinking that it would be more performant, but then I didn't receive feedback that it would be more performant. I was initially hopeful that this would help, but it didn't seem justified.

WH: I would prefer that we don't do that earlier preinitialization. This would preclude any possibility for those to be const.

KS: If you leaked out a partially constructed object, your invariants are going to be hosed anyway. It would be preferable to fail loudly.

YK: I'm concerned this could have cost for real implementations.

DE: It seems like it would work to me, based on how we do hidden classes today.

ARB: We already have to do this same kind of check exactly the same way for existing property accesses. It happens whether you return undefined or a TypeError.

MM: can we agree that if while implementing it we run into perf issues, we can revisit, since right now all implementors in the room seem comfortable with it?

KS: _continuing with slides_

KS: shorthand syntax is added to the spec. i would prefer more early errors than fewer; not added to the spec yet; not my area of expertise yet.

KS: Current status: spec complete except for static rules and early errors, and will need refactoring to merge with public properties regardless.

YK: I feel concerned about not advancing them together.

JM: We're in close communication with each other. Only things left for public properties are configurability, and `super`

DH: Concerned about `new.target` across the different proposals - cross-cutting like "class evaluation order" but hard to evaluate in the context of one proposal.

YK: I think there is disagreement about those answers.

DE: _describing differing opinions about what should be available and what should not_

JM: most compelling case for `this` is helper functions that are on the class hierarchy, others as well.

MM: i have expressed hesitation, but at this point I agree [about `this` being available]

DE: re `new.target`: i'm sympathetic to kevin's argument to keep it consistent with the constructor.

KS: seems weird, but motivation for including was to avoid weirder differences.

DD: new.target feels more like arguments

MM: But really super is the only thing that's not argument-like. The fact that this, super and new.target are special forms, makes me happy with including them and not arguments

YK: I'm more interested in hiding values that shouldn't be present than exposing only the minimum that are present

JM: An intuition here is to say that these evaluations happen at the last step of super, which happens inside of the constructor

JHD: We discussed `arguments` at the last meeting and agreed that it would be an early error in initializers.

KS: If you wanted to censor lexical things, right now you could create poison in the scope.

YK: How should function.sent work?

KS: I haven't reviewed exactly how function.sent should work.

WH: The # is part of the same token as the private name. Is it intentional to make it into one token instead of having the # and private name be two tokens?

KS: Yes.

WH: About the choice of what follows the #, the grammar permits #0. Is this intended? It uses IdentifierPart

MM: I would prefer that after the # we insist on IdentifierStart

MF: Identifier or IdentifierName (ban reserved words?)

KS: IdentifierName. This looks to me like _blah, so I don't see why not IdentifierPart since you can do _0. But I'm fine with IdentifierStart at first.

WH: IdentifierName. This would allow things like #if.

YK: So what is the precise scope chain of the initializer?

KS: In the specification, it is a new lexical environment which inherits from the outer one which adds this, super and new.target. There is no additional censoring, but we could add this if we decide to.

JM: I think last time on public properties, we had consensus on censoring arguments.

KS: I'd be fine with censoring arguments

YK: It's uncontroversial that normal lexical scope works. But for special values, which of them are banned?

_many_: arguments throw, and nothing else

JHD: ie, anything available in the *default* constructor, immediately after `super()`, except for `arguments` which is an early error.

YK: Why ban arguments?

MM: Because it's confusing, whether you include the outer or inner ones. And arguments is a mess left over for ES3. There is no reason to include it for new programs.

YK: For new.target, maybe it should be banned because you may assume it refers to the outer lexical binding.

EF: I'm sympathetic to that actually

MM: It does make sense to ban confusing constructs

DD: I share Domenic's concern about including a new scope without curlies. All of the other forms could be referring to the surrounding construct that also has that exact same hazard. But I would prefer if we would have a discussion about whether this is included.

JM, WH: This spec meets Stage 2 because the spec is clear and makes a concrete proposal towards an outcome.

YK: This is a concern that I think needs to be resolved before Stage 2, as it is a major semantic issue.

DH: Agreed; this is an ad-hoc decision-making process; there should be a cross-cutting presentation first

JM: If we had spec text for poisoning arguments, would that be sufficient?

YK: There needs to be more discussion about new.target

DE: There are a lot of open bugs and technical discussion on the GitHub for both property declarations and private state, with issues for coming to a technical agreement on these issues. I would encourage more committee members to participate if they have time.

YK: There should be a cross-cutting presentation first.

JM: I had prepared a cross-cutting presentation and it is on the agenda but we have not gotten to it yet.

YK: This proposal is being treated differently from the decorators proposal and being held to a higher standard.

WH: As I repeatedly said, the decorators proposal was made available a few minutes before the presentation, which was too late to read and evaluate it. That's why it didn't advance to stage 2.

WH: There is complete spec text here and not in your proposal which lays out the details

YK: The answer was given and committee members did not believe it.

#### Conclusion/Resolution

- No consensus on stage 2 yet due to barring process issues

## JSExplain (AS & TW)

AS: [_presenting slides_](http://ajacs.inria.fr/files/2016-05-25-jsexplain.pdf)

AS: equip JS with a formal spec, logic and tools for verification, formal proofs of security properties

_show more slides_

MM: because of the very close textual correspondence between the reference implementation and the prose spec language, the coverage results are very close to corresponding implied coverage of the spec itself.

AS: _show more slides_

BT: Would like to be able to set a conditional breakpoint on the ref interpreter to test if Test262 hits it.

WH: A similar "reference implementation" previously attempted in ES4

SYG: This seems very familiar, did I request this of the authors a couple of years ago?

AS: Yes, you were the direct inspiration for this!

YK: Less sofisticated tools would like to make use of this, eg linting. A more accessable language is good. Lots of people would
find that JS is the easiest to write in.

MM: Tradeoff: ML is familiar to a smaller audience, for the same executable spec as written in subset ML vs subset JS,
how readable is it, given familiarity? If ML's readability is sufficiently great, then it may be a suitable tradeoff.

MM: More useful: spec right now has lots of internal asserts - invariants for the spec, if any of the asserts are false, a
static spec bug. A tool like this would be good to prove asserts hold over the portion of spec formalised. As more spec
formalised, to continually recheck. Would set the ground to writing more spec checks.
When the language is evolved that breaks an invariant, it is good to know that as an evidence point to
justify/rationalise the breakage.

YK: Agreed

#### Conclusion/Resolution

- will continue iterating

## String.prototype.pad{Start,End} (JHD)

JHD: implemented in all major browsers; stage 4?

all: yes

#### Conclusion/Resolution

- Stage 4 acceptance


## Object.getOwnPropertyDescriptors (JHD)

MM: what order?

DD: the well-defined one.

MM: which keys?

DD: own property keys and ...

DD: I wish it was shipping in 2 stable browsers

YK: why rush?

DE: waiting until 2 implementations ship causes chicken-egg problem

JHD: some browsers say they won't ship things that are not stage 4

YK: I'm fine with stage 4 in this situation

#### Conclusion/Resolution

- Stage 4 acceptance
- __*TC39 needs to schedule a discussion in the next meeting to review the stages process document*__

## Template Literals (http://slides.com/disnet/template-literal-problems-7) (TD)

TD: _presenting_

YK: there's a hazard for the HTML thing

YK: if you are not trying to do the raw thing (treat it as a string), could be a hazard

YK: could have had an API for getting cooked value from raw

MM: this is my mistake; E does this differently using $

WH: explain where tagged flag comes from in grammar

MM: I volunteer to review this

WH: Me too.

#### Conclusion/Resolution

- Stage 2
- reviewers: MM and WH

TD: Also, relatedly:

```html
<!doctype html>
<html>
  <head>
    <script>
      "</script>";
      let s = html`</script>`
    </script>
  </head>
</html>
```

MM: We can't escape this

YK: why do we care?

TD: MF: it's just an interesting related case because problems with templates/raw are not fully fixed by this proposal alone

## Observables (JH)

JH: _presenting slides_

JH: we're not sold on the name "closed" right now for the Subscription interface

JH: I would prefer "unsubscribed" to "closed"

CM: "unsubscribe" and "unsubscribed" are too typographically close

MM: considering DD's cancellation proposal, I may want to fold this into general cancellation framework

DD: if we add a new data structure, it should have consumers in the web platform

DD: concerned about not returning Promises?

_discussion about meaning of stage 2, in particular the effects of cancellation proposal on this proposal_

WH: A flaw of the stage process is that it doesn't deal well with dependencies.

_more discussion about meaning of stage 2_

#### Conclusion/Resolution

- We agree that this is a feature that we have consensus on and hope to eventually include in a version of the standard, but we have not worked out major semantics with respect to cross-cutting concerns with cancellation, promises and the async iterable symbol. So this meets some of the Stage 2 criteria and not others, and remains Stage 1 for now. This is an advancement on previous concerns, where we were not convinced that we wanted to eventually include this feature.

## [Cancelable Promises](https://docs.google.com/presentation/d/1V4vmC54gJkwAss1nfEt9ywc-QOVOfleRxD5qtpMpc8U/edit?usp=sharing) (DD)

DD: _presenting slides_

DD: Cancel needs to be a third state. Bluebird tried using just a normal exception, but people had to do catch { if (is cancel) { ... } } which is not so ergonomic and doesn't work well, so now they use something more like a third state. This needs to be reified throughout the language, both asynchronously in Promises and synchronously, for analogous use in async functions. This happens when you await a canceled promise.

WH: Why does cancellation carry a reason?

DD: Maybe it doesn't need one, but it seems nice and analogous to exceptions.

MM: Cancellation should be as fast as normal control flow and should not collect stack traces. It doesn't collect stack traces.

SYG: try-catch is not slow because it is an exceptional event, it is slow because of the non-locality itself

EFT: motivation?

YK: XHR has an abort feature; fetch API is Promise-based and cannot have a similar feature

BT: this is especially important if you await one of these promises

DD: key distinction between error state and canceled state is top-level ignores canceled promise

JM: If you have a promise that defers to another promise, and the inner promise is canceled, then the outer promise is canceled since it was waiting on the inner one.

MM: No reason to introduce CancelReason; that's unrelated

DD: Yeah, you could just use strings as the cancel reason

DD: Canceling async operations. First, any Promise can call its cancel function and get cancelled that way. But what is our standard library mechanism for triggering/manipulating cancellations?

DD: Naive async function integration doesn't work. If you have a callstack of async functions, how do you reach down into the "current" one and go and make the await become a throw cancel? Seems somehow non-compositional. Also, making two separate classes (e.g., a subclass) would be messy, and seems like we shouldn't make Promises mutable by consumers either.

DD: Alternative: Cancel tokens. Kevin Smith wrote up a proposal; I would like to add the "third state" changes to that. For web APIs, let's establish a precedent of passing an options object argument with a cancelToken. You pass cancelTokens explicitly, and call .cancelIfRequested() if needed at certain points. Users can insert these wherever they want.

MM: Cancel tokens could be passed around through zones, though I don't really like this.

DD: It would be unergonomic to base the feature on this pattern.

BT: People use this pattern in C# and we shouldn't discourage it, but we don't need to build this in

YK: Ergonomics still seem disconcerting

BT: C# uses a pattern default argument value of CancellationToken.None() which is a dummy and lets you not worry about undefined being passed in.

YK: There is a global coordination problem related to composition here. We have to work out how things are threaded through.

BT: Do you have an example of how Promise.all and Promise.race should be updated.

DD: Oh, yeah, this could be where we establish our precedent of how to take a cancel token as an argument! This would parallel fetch's options bag.

MM: As combinators over promises, Promise.all and Promise.race also have to figure out how to deal with their array Promises canceling. I think they should be separate.

BT: Agreed, cancel should just drop out of the race.

WH: Promise.all should cancel if any of them cancels. Promise.race should ignore cancelled promises and wait for the rest; it should cancel only if they all cancel.

DE: Analogous to Promise.all for rejection then?

WH: Yes

MM: To be clear, a cancelled promise is settled, right?

BT: Concerned that people will reuse options bags and pass them into various places with options not suitable for those contexts.

ARB: The synchronous third state freaks me out. This needs more discussion. We are suddenly adding a totally new continuation across the whole language.

DD: Want to fast-track this through the stages

WH: I like this a lot but am concerned about the ergonomics of practical use patterns and possible syntax issues. These will take a bit of thought, so racing for stage 2 at the next meeting seems worrisome.

#### Conclusion/Resolution

- Stage 1 acceptance


## [Definitive decision for Test262 python runner](https://github.com/tc39/test262/issues/647) (Mike Pennisi)

LEO: TC39 agreed to deprecate the python runner in 2014, we want to remove it from Test262 as it demands extra energy on a deprecated tool while implementing new features.

EFT: We can work it out. It does not need to move it to a new TC39's repository.

_many_: let's remove it.

#### Conclusion/Resolution

- Already deprecated; just delete it.
