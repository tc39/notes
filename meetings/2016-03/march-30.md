# March 30, 2016 Meeting Notes
-----

Dave Herman (DH), Michael Ficarra (MF), Jordan Harband (JHD), Adam Klein (AK), Mark S. Miller (MM), Brian Terlson (BT), Domenic Denicola (DD), Brad Nelson (BNN), JF Bastien (JFB), Joe Lencioni (JLI), Sebastian Markbåge (SM), Jeff Morrison (JM), Kevin Smith (KS), Jafar Husain (JH), Lars Hansen (LHN), Saam Barati (SBI), Keith Miller (KM), Michael Saboff (MLS), Eric Ferraiuolo (EF), Eric Faust (EFT), Chip Morningstar (CM), Dean Tribble (DT), Shu-yu Guo (SYG), Tim Disney (TD), Waldemar Horwat (WH), Bert Belder (BBR), Peter Jensen (PJ), Daniel Ehrenberg (DE), Caridy Patiño (CP), Diego Ferreiro Val (DFV), Jean-Francis Paradis (JFP), Shelby Hubick (SHK), Leo Balter (LEO), Miško Hevery (MHY), Allen Wirfs-Brock (AWB), Kevin Gibbons (KG)

-----

## Length argument normalization for TypedArrays, ArrayBuffer and DataView constructors

slide presentation by Leo Balter

AWB: Explained the background for the weirdness here. Sources of odd and inconsistent type array index and length handling spec behavior in ES6: Kronos spec, what browsers actually do, input from implementors, legacy compatibility.

DD: Current implementation status seems like the best guide here

DE: But there might be things we could tighten down, and things we can't (like requiring integer indices)

LEO: Do you want to see more work at this meeting?

AWB: Doing it on a github issue might be sufficient, the important thing is to think deeply about the issues

#### Conclusion/resolution

LEO: to work out details on a github issue.

## Duplicate sloppy mode function in block web compatibility fix

Shu-yu Guo and Daniel Ehrenberg presenting slides: https://docs.google.com/presentation/d/1E_LM_X4_EMEhcmfiA_AHJ4zw0aKDM8DBxqFOmNsiMHig/edit#slide=id.p

AWB: The semantics in the block have to match ES6, so whatever we do to solve ["Problem #2"] must follow ES6.

MM: Which browsers have shipped the Annex B behavior?

SG: Chrome and Edge, though Edge has other weirdness.

AWB: Problem 2 had no legacy intersection semantics before ES6. Firefox would set f to the function outside the block; other browsers would set f to 42.

AWB: In strict mode f is undeclared in the outer block.

[discussion about the content of Annex B]

DH: Getting f = 42 is not surprising in Annex B semantics. The last assignment to f is 42, so it makes sense that the outer f is 42.

MM: Trying to understand the level of breakage: is it one site, or a library, or what?

SG, DE: Multiple sites for Problem #1, breakage seemed pervasive due to common use of concatenation.

SG: For Problem #2, only one site, and they got fixed, but it's new behavior introduced by Annex B

WH: But non-Firefox browsers did behave as per Problem #2 before Annex B, so this is only new behavior in Firefox

AWB: Since Problem #2 isn't in the intersection semantics, we have to see what we can do about the weirdness we introduced

AWB: To be clear, Problem #1 is a real compatibility problem

DH: [To SG] You said that you received a bug report, and that triggered in your mind the intuition that we got the sloppy mechanics wrong. Can you explain that in more detail?

SG: It seemed to me that we had introduced something strange that had nothing to do with the problem we were trying to repair with Annex B.

[argument about dynamic semantics]

AWB: One reason the function didn't get assigned directly is just that it would have been an extra bit of state to keep around. But the other was that it falls out of how hoisting works; reading the current value of the binding simply matches the expected dynamic semantics.

DH: Setting the outer f to 42 is more natural. ECMAScript has both scope hoisting and initialization hoisting. Scope hoisting is something we have to live with for Annex B. Initialization hoisting makes it natural for the assignment to f to replace the function with 42.

WH: Agree with DH. Why are you trying to change this (proposal #2) to something less intuitive?

AK: I agree with intuition of 42 being the right answer, but I can understand the intuition of function, since Annex B's raison d'etre is to hoist the function value out of the block.

AWB: What I can't recall is why we decided to do the assignment [to the outer binding] when hitting the function declaration, and not at the top of the block.

MM: Diverging from the strict mode semantics would be a refactoring hazard for moving to strict mode

DE: That doesn't affect the majority case, which is function declarations inside a try/catch

WH: We already specified the behavior in ES6 Annex B. We shouldn't change the spec to be incompatible with ES6 without a good reason. I haven't seen a good reason yet for problem #2.

SG: It sounds like there is consensus on repairing the multiple declarations case, but maybe not on making any changes to the spec with regard to Problem #2

WH: Would like to understand exactly which function will be chosen when reparing the multiple declarations issue. Want to make sure that the proposal doesn't make changes beyond what's needed to support intersection semantics.

[whiteboarding ensues]

#### Conclusion/resolution

- Fix #1 (multiple declarations)
- Leave #2 as-is (f = 42)
- DE: to push forward his pull request


## Make RegExps more consistent in their treatment of flags

Michael Saboff and Daniel Ehrenberg presenting slides: https://docs.google.com/presentation/d/1BZiysQL4YMXgexwTmcZTFOD0nxGSAGz7PbzAotoDiGw/edit#slide=id.g127bcf3e41_1_0

AWB: I think this is uncontroversial

WH: Do it!

#### Conclusion/resolution

Exec will read from [[OriginalFlags]] for all flags, including global and sticky

DE: will push forward his pull request

## RegExp feature testing and web compat

Daniel Ehrenberg and Michael Saboff presenting slides: https://docs.google.com/presentation/d/1BZiysQL4YMXgexwTmcZTFOD0nxGSAGz7PbzAotoDiGw/edit?pref=2&pli=1#slide=id.g127bcf3e41_1_10

AWB: Our policy prototypes-as-regular objects so far was that we'd revert if we ran into compatibility issues.

MM: Unless there's unfreezeable hidden state on it, as there is on Date objects

MM: A workaround would be to revert RegExp.prototype to a RegExp, and make RegExp.prototype.compile throw if the receiver is frozen

DE: So the idea would be to try to detect SES?

[presentation continues, with a different solution: make methods not throw in certain cases]

MM: I like this much better than what I just suggested

JHD: Would we do this with other getters?

DE: It really depends what feature testing libraries emerge

JHD: Wouldn't returning undefined for 'sticky' cause feature detection to treat it as not working?

DE: Yes, we're not attempting to make old feature tests work with new features.

AWB: If you want to detect sticky, you should create a RegExp with /y

AK: The spec for toString doesn't check [[RegExpMatcher]] directly, it delegates to the 'source' getter

JHD: So we should just make 'source' behave the same way as everything else, and fixing toString will fall out of that

#### Conclusion/resolution

DE: will push forward the pull request

## Private fields

Kevin Smith presenting slides (TODO(KS): Please add slides here)

KS: Note that "static shape" is not a design goal; we'll get to that.

KS: compare(other) demonstrates how these are not instance-private fields, but class-private fields

WH: what if an instance of class A didn't have a value for the class-private field?

KS: a private field always has a value, by default undefined. Assignment in the constructor is just assignment.

WH: so there's no way to do `delete this.#data`?

KS: correct; that is a syntax error

KG: could you access using a computed expression, or does it have to be the dot syntax?

KS: it has to be the dot syntax

DH: `#data` is not an expression form?

KS: we'll get to that. There's a shorthand.

KS: (explaining "spec implementation" slide) will require a new kind of reference--- a "private reference". Note that we're not going through WeakMap.prototype.get/set; we'd be creating new abstract operations WeakMapGet/WeakMapSet.

AWB: why do you have to bring weak maps into it at all? Why couldn't you create a new concept of a separate mapping alongside the object?

KS: I did something similar in a previous version, but feedback was that this is essentially duplicating the weak map mechanism, so there's no reason to duplicate

DH: beware of that rationale, because that's what led to scope chain records being objects.

AWB: where does the weakness come in? Since each one is attached to an instance, and the lifetime of the slot...

DD: right, you don't need the weakness of the map itself; the map never gets collected

DH: duly noted, but the map is not reified, so it doesn't matter in the end

WH: my question about the choice of using the weak map formalism for the spec is "can this be implemented efficiently using slots on objects" and I can't tell from looking at this proposal

AK: it doesn't matter at this stage (stage 0 -> stage 1)

JHD: the weak map idea is useful for explaining it to developers

KS: (continues to "Derived classes")

MM: the assignment cannot simply turn into the abstract operation WeakMapSet; it needs to instead first do a WeakMapHas and if it's false, throw.

KS: agreed. This is not an exact translation of the semantics.

DH: don't care about whether this is specified in terms of weak maps, but I think I missed a point. It's supposed to throw if you assign twice?

MM: no. Let's say that you had a plain assignment in a method, just to be clear that this is not an issue specific to the constructor. Let's say that you had a method and it says `this.#data = 3`. Now let's say that somebody else takes that method and does a `.call` on it to some completely unrelated object. If the assignment turned into a WeakMapSet, then rather than failing because it's applied to something that's not an instance of the class, it would effectively *make* it an instance of the class.

DH: that's the part of the design I'm not understanding. Why are you supposed to fail?

KS: because that would be a source of bugs

AWB: you can't use it for branding if you do that, is the simple answer.

DH: Where's the commit point?

MM: the commit point is the WeakMapSet that does not correspond to code; it just corresponds to a position in the constructor.

AWB: it's the point at which `this` becomes real.

DH: that's not what I'm asking. What I'm asking is when does it not become possible to add new properties?

MM: properties are part of the class declaration

DH: OK, but then there's some kind of internal brand mechanism that you're not explaining...

WH: Here's how the branding works. The private properties are implicitly created at the top of the constructor. No other place creates or destroys those properties; assigning to this.#p (whether or not in a constructor) can only change their values.

DT: would it be clearer to have a weak map per class that maps from instances to their private data object

MM: no

AWB: constructors are only newable, not callable

DH: for now...

MM: no, we closed on that

AWB: correct, the current consensus on the committee is that we cannot

MM: AWB and Yehuda brought a proposal to examine what would happen if we enabled constructors to be callable. What we I believe jointly decided is that the wrapping function is the strictly superior way to get the functionality such a feature is providing, and we withdrew the proposal. I consider the consensus to have been not to make constructors callable.

AWB: I agree, at the time we agreed to not make constructors callable.

DH: I certainly don't recall that, but I don't think it's related to the current proposal. I think the only issue you're trying to protect against is methods. You don't want methods to be able to attach this private property to other objects. And that remains true despite the fact you can move the constructor around.

WH: I assume that if you evaluate a class definition inside a loop several times, the resulting classes will have unrelated sets of private properties?

KS: Correct.

JHD: if an object in one realm attempts to retrieve private fields in another realm, does that work?

DH: if it's the same source separately loaded, they are just distinct classes and so they don't connect. If you move hte consructor from one realm to another, then instance produced by it should be able to interoperate.

AWB: here's an interesting situation... what if you have a class expression that's evaluated more than once.

DH: I would expect that to work.

AWB: consider the mixin pattern...

MM: no, there's no conflict. If you construct a tower of classes that you instantiate, there's no class expression in that tower... The mixin is a lambda abstraction over a class expression.

DH: yes, the lambda body is creating the leaf node of the composed class

MM: no, no. The mixin pattern is where you have a lambda abstraction *over* a class definition. When you apply it, then you evaluate the class declaration applied to it, but what that means is that you're applying it ... the chain of application happens every time you evaluate a most-derived class.

DH: right. That's roughly what I was saying. I was half-wrong. You can call it with the same parent class multiple times and it will be the same parent class. So any privates on the parent class will be shared.

AWB: OK. But what you can't do... what that precludes is that any object that uses mixin foo, which happens to have some state, that you can ... if you have an accessor for that private state, you can apply it to any instance which has mixin foo, which feels like it should be similar to but is different from, if you have two parallel subclasses...

MM: right. It basically means that `extends foo` is more different than people might expect from `extend fooMixin of (something)`

AWB: if you wanted to add private state to object literals, right, think instead of saying class you just had object literal `{ #data }` and some methods that reference data, and then you start talking about multiple instances from that object literal....

DH: What you've presented so far is pretty intimately tied to the class syntax, and a platonic ideal that we've not quite reached is having the primitive reflective constructs so that you can implement the classes without the class syntax

MM: that's where the weak map analogy is key

WH: noooooooo!

AWB: I don't think so

DE: can we hear the rest of Kevin's proposal

AWB: we've started making exceptions to that proposal

DH: I'm not ready to unleash the floodgates and let classes diverge arbitrarily; for the time being we should be trying to hew as close as we can, even if we have to make temporary divergences. This is definitely far afield from Kevin's proposal, and I think the short answer is that this is totally polyfillable with weak maps.

AWB: I don't think that's the end of the story. In the list of requirements, once of my requirements which I got from Mark was that you can reflect on these things.

DH: a weak map polyfill of this allows that by simply not exposing the weak maps

WH: earlier in the meeting I understood that the weak maps were just an expository thing. If we start exposing them for dynamic means of creating classes not using the class syntax...

(Everyone): nobody is advocating that

MM: what Dave's saying is that if you wanted to explain these semantics not using the class syntax, by using weak maps appropriately you can emulate in user code everything that's going on here.

AWB: I think that statement's probably true, but I'm not sure what the relevance was.

DH: I think that that's more than enough for now, and I'd love to let you keep going.

KS: (moves on to "what about static shape?" slide) This is not what I'm proposing, note; this is the static shape design. Object allocation time vs. at `super()`-chain time.

AWB: whether they're incrementally added or done in one shot

DH: but once the super() protocol has completed, it can't change. So neither of these is a "static" shape design. The only question is, at what point in the dynamic class initialization protocol, have we fixed the shape. But in either case you're providing a very strong invariant, that I would expect the JITs to be quite satisfied with. The JITs are already expecting things to be incrementally initialized.

WH: I hope that it's fairly trivial for a JIT to figure out that it's statically shaped for classes that do not inherit from anything else. Now if a class inherits from something else, then the JIT would have to be able to figure out what it's inheriting from at compile time... how hard would that be?...

EFT: which it can't... For the multi-level case, it doesn't matter from an implementer's perspective at all, whether it's done all at once or incrementally.

WH: It's essential that the non-inheriting class case be statically analyzable and efficient. Don't worry as much about inheriting classes.

AWB: can we agree that the scoping rules and the shadowing rules are an orthogonal thing?

(General confusion)

AWB: it'd be a complicated set of rules, but it's a next-level refinement. Let's assume they're disjoint.

DT: stage 1 sounds like a fine time to do that.

AWB: where you'd observe the difference between the types of allocations, would be if an intermediate constructor decides to expose the object and terminate the allocation process by throwing

DH: Sure. Or just by calling methods, that could live on the subclass, which are looking for private fields that don't exist. However that is totally consistent with the kidn of bugs that have existed since time immemorial in a dynamic language like JavaScript

AWB: these are all error conditions that have to be checked for, conceptually on every access. They really amount to the same thing.

DH: I want to make a claim and I want the JIT implementers to tell me whether my claim is accurate. Optimizations based on object shape are extremely dynamic, and likely to remain extremely dynamic, and are not likely to be based on static inspection of the class hiererachy, in a dynamic language like JavaScript, and this will remain true. Especially since the set is determiend so early in the initialization process of the object, that how much static information JITs want to use will be roughly zero.

EFT: I can tell you that the more dynamic information you give me the happier I'll be. If you give me an object literal, we can just use the property names to pre-initialize all at once.

DH: let me give you an example... class A extends B class B extends C class C extends D, and you can see all of the class declarations and all of the privates declared in them. Are you likely to build optimizations that take advantage of that?

KM: we wouldn't allocate the shape, but we'd give you give a bunch of inline shape.

EFT: we'd love to do that too... but how would you evaluate extends clauses? They're arbitrary expressions.

KM: we'd attach the number of things we'd do to the function object, and as you go up the chain you'd add more information

(Lots of cross-talking.)

DE: there's three different times: parsing time, class instantiation time, and when you're calling the constructor. The static shape gives you the nubmer of slots at class instantiation time

DH: that's a really important point; I was conflating them. Tell us why it's broken.

KS: ES classes can do crazy things. Mutate inheritance chain; return arbitrary objects from your constructor. (Advances slides) We can say "it doesn't work", but some people are going to do this.

DD: every Web IDL-specified constructor uses return override. That may not be how they're implemented, but that's how they're specified.

DH: that was the whole realization in late-ES6 discussions. Return override is the linchpin.

KS: (advances to "edge case 2") If the shape of the object is determined by looking at NewTarget, Reflect.construct lets me forge NewTarget and get an object with whatever slots we want, without every passing through the constructor to initialize the slots to preserve invariants. The fix to this edge case is to add some kind of per-field TDZ, so that you add the slots but any access to them throws until the constructor does something to them

DH: how does Reflect.construct work? How can you construct an instance of A without passing through the constructor?

KS: the system knows which slots to add by looking at NewTarget. We have an object that looks like an instance of A, but never actually passes through the constructor for A.

KM: is this any different than any other thing you could do with Reflect.construct?

MM: there's one crucial difference, which is that this can be done without A's cooperation. Whereas it's perfectly fine to say that a class is explicitly vulnerable to a superclass which it explicitly decided to extend. This however allows you to construct something with an A brand, and it's not in any sense A's fault.

DH: I believe there are enough edge cases number N to sell me, but I am totally not sold by edge case number 2. Reflect.construct allows you to disobey domain-specific invariants of a class, but that's not surprising.

MM: the fact that you can forge brands

EFT: isn't that explicitly what Reflect.construct does?

MM: part of the economy of this mechanism is that if you try to access the slot on an object without it, it throws

DH: I've completely flip-flopped. Once of the important use cases of branding is to control the creation of your type, so you can disallow the creation of objects that don't go through your construct path. There's no way you can fix this.

EFT: users are just getting screwed by their own ignorance!

KS: we're trying to create an abstraction that you can pass off to someone you don't trust

DH: there's a sliding scale of maliciousness here, which is important to keep in mind. The worst case, which is maybe a minority case but is the worst minority case, is true malicious actors you can't trust, e.g. embedded ads. There are also important use cases where they have the flavor of adverserary; what you're dealing with is you're implementing jQuery, and you have 17 million users, and you want to provide an abstraction where some subset of those 17 million users won't be able to fix things except by reaching under the hood and mess with things. That now ****s you as the creator of jQuery because you have users messing with your abstraction and preventing you from changing things going forward. So there are cases where there are people who are not mustache-twirling villains---not idiots, even---but have opposed incentives. The point being, there are multiple valid use cases in JavaScript for airtight abstractions. It's easy to caricature them.

AWB: this is simply saying that initializing things to undefined is not sufficient

KS: remember I am not proposing this. But if you wanted to fix it, then you'd have to do something like instead of setting them to undefined, you set them to some TDZ thing.

AWB: and when you access an arbitrary object with one of these slots, you have to verify that it has one of these slots, you can't just do in the general case a "slot 14 get its value" because slot 14 may not be...

EFT: any NewTarget-based abstraction is at odds with this attack vector.

DD: agreed

AWB: my solution to this is the TDZ thing

EFT: great! I like that solution

AWB: more likely than not, people can combine the check

DE: I think one of the big benefits of things being initialized to undefined is you don't get an explosion of TDZ. Implementations would have two options: dynamically check on every access, or, make it part of the hidden class. The latter just gets us back to the same bad state we're already at for properties. If we encode in the hidden class, we get this same hazard, which I'm happy Kevin's proposal avoids.

WH: TDZ you can do as efficiently as the weak map thing. The only difference I see is that TDZ requires going through Reflect.construct before it also gets blessed by the constructor. I don't know if there's a way to get blessed by the constructor without going through the construction process. Otherwise the proposals seem to be equivalent... Actually, here's the one example I can think of where the TDZ and weak map proposals differ: The superclass constructor returns an unrelated object {} instead of this. The subclass constructor tries to create its own private subclass slots.

AWB: so you would add the subclass slots, without adding the superclass slots... Oh..... I don't like that...

KS: given that custom elements use this pattern, we'll just have to tell people you can't refactor from `this._x` to `this.#x`.

KS: (moves on to edge case 3)

DH: this doesn't seem legit either. The relationship you're looking for is not the prototype chain, but the actual thing you extended from.

EFT: static shape is something you wish to guarantee for code that wishes to be well-behaved, and wishes to run fast. This is not an example of model behavior.

MM: with regard to what you just said, the standard JIT approach is entirely compatible with that goal and with Kevin's proposal. When something causes a violation of your assumptions, you fall back.

EFT: and that's my reaction here is that we'll just fall back and not give you the static thing we calculated

KS: Right. Whereas instance slots proposal falls over in this case.

AWB: there's an easy fix... disallow mutable prototypes if private slots are present

DH: that sounds fishy to me

AWB: at the subclass point, when you subclass, you want to know what the slots are going to be, including those up the hierarchy. You're now really strongly building a dependency on the leaf class now. Given that it seems reasonable to say you can't change the inheritance structure.

DH: so let's say I use a local variable and then refactor to a private field. That has a non-local action at a distance that changed the mutability of my prototype chain. Don't get me wrong, I'm not a big fan of mutable prototypes, but I don't like this kind of action at a distance. It reminds me of back in the ES4 days how we said that using yield in the body of a function would cause it to be a generator. I myself have personally run into a problem where I was refactoring a generator and removed the last yield and things went WILDLY INSANE and I had no idea what was going on.

AWB: so I think you are getting at the fundamental difference between thinking of this as slots and a record vs. a weak map on the side. Weak map on the side is the classes we have now and the object inheritance structure we have now and there's a side mechanism that doesn't impact that.

DH: I disagree that's what this is about. Either way, I want to be able to refactor with no non-local changes.

AWB: well here's why non-local changes might or might not be reasonable. If you think of these slots as being a sort of extended object structure that we didn't have before, then you might well say that that these are different types of objects.

DH: that's exactly counter to the spirit of 1JS. I don't want to have two types of objects with opt-in.

AWB: we already have two types of constructors

EFT: I think classes have already missed that boat

DH: I still think edge case 1 was end of story.

AWB: I missed the TKO aspect of edge case 1

(Discussion on how to call the different ways of setting properties. Settle on "class determined" vs. "constructor determined.")

DH: so I think edge case 1 is TKO for class determined

CM: TKO means you just barely won.

DH: oh, then just KO then. Why is edge case number 1 a KO? It's because, you are actually in the semantics depending on knowing what the set of slots is, and that set of slots is trying to actually make a prediction, about what's going to happen by the end of construction. And it's an inaccurate prediction because of return override. Return override we discovered is not an edge case; it's actually fundamental. It says that constructors have arbitrary programmatic control over what type of object they are going to produce. It is the right and responsibility of the constructor to determine what set of slots. You cannot deterministically predict that from knowing the class extends relationship. The class determined version is making an inaccurate prediction. Whereas Kevin's proposal (constructor determined) is only fixing the slots after the constructor has actually been given its state.

EFT: also, the optimization thing is not a problem, sorry.

KS: (moves on to const classes slide) We can explore const classes as an opt-in alternative for achieving static state. It's much cleaner to keep the class-determined static shape separate from privacy.

AWB: if the return override returns a non-extensible object, can subclasses still add slots to it?

KS: yes

MM: and that's another thing that's very natural if you think of this as weak maps.

WH: what happens if the superclass constructor returns an object that is already an instance of the subclass?

KS: if it already has the slot that you're trying to add to it, it will throw.

EFT: throw or shadow, it doesn't matter much.

AWB: and if it returns a proxy? You can add private slots to a proxy?

KS: yes. It falls out of using weak maps to describe it.

MM: all you're doing is using the proxy's identity

AWB: but then proxies need to carry state...

AK: proxies already carry state, using something very like this, in our implementation

KS: (moves on to "other features: shorthands" slide) I haven't included this shorthand in the spec text, but there's no real problem. But there's a question of whether the shorthand would work inside things that have a different `this` value.

DH: is it syntactic sugar for `this.`?

KS: that's my intuition...

EFT: so that's a runtime error

KS: correct

MM: Dean and I argued this and I'm convinced it should be syntactic sugar for `this.`

DH: I think this could be really critical in terms of adoption. Someone's going to accuse me of being a paternalistic, but I'm not being paternalistic here. A programming model where you default to private is just nicer. Allowing people to drop the `this.` is a powerful incentive

JHD: as the person who cried paternalism, I don't think this is paternalistic.

DE: the alternative is that `#data` would be a lexical thing.

DD: I am uncomfortable with `this.` being omitted. It's confusing and looks lexical.

DH: we should be able to note this as a non-consensus point and move on.

AWB: I dislike the lack of leading keyword, e.g. `private #data`.

DH: these little differences will make a difference between adoption and non-adoption.

AWB: some people will look at this and say readability will be improved by `private`.

DH: I would rather be beat up and adopted.

JM: Allen, your concern is purely readability?

AWB: yes.

WH: I have the same concern as Allen.

AWB: I have the same concern about the field declarations. We're moving from a language that always has a keyword declaration

MM: concise methods are a counterexample

AWB: but I have a much bigger concern. Most of this stuff we can workaround, but you know and I'm aware that you don't have `protected` here. And to me, I don't mind if you're saying "right now I'm not talking about protected," but if this can never support protected, I'm very very unhappy.

MM: if you extend this to support protected, I will be very very unhappy. If you do it the way Allen does it in his proposal, I will be very very unhappy. The reason you had to restrict the lexical scoping of the pound-names, including nested classes, was because of the protected.

AWB: for an object-oriented programmer, `protected` is the declaration you want.

MM: (explains to AWB why nested classes and his protected proposal don't play well together)

WH: Protected would let anyone access the fields, which would defeat the point of this proposal.

DH: there's definitely a bunch of open areas...

DE: YK is championing a proposal for protected state, and he's in communication with the private and public field proposals. I'm happy we're keeping them separate. I don't think we need to unify them.

DH: I disagree.

DE: well, the champions are talking about how to make the semantics consistent, and when the protected proposal gets further along we can have that conversation. We should not block stage 1.

MM: does anyone object to this proposal moving to stage 1?

(Silence)

DH: this is a great place to be for stage 1.

AWB: I don't want to send a message that this proposal is what private state will look like

DH: that's what stage 1 means.

#### Conclusion/resolution

## Revisiting Function.prototype.toString

MF: presenting the changes from yesterday

#### Conclusion/resolution

- Stage 3 acceptance

## Map/Set to JSON

JHD

The proposal is to add the Map/Set a function so the toJson is useful

get the iterator on the receiver, create an array from it, and return it.

Serializes a nmap as an array of entries. It's equivalent to spreading the map to an array.

The proposal is linked form the agenda.

AWB: How confident are we that this is right thing, since users can add it themselves

MM: They could also create a replacer

## Draft Proposed Frozen Realm API

Chip Morningstar presenting slides https://github.com/FUDCo/proposal-frozen-realms/blob/master/FrozenRealmsPresentation-2016-03-30.pdf

DH: [discussing the api] the 'endowments' argument of realm.spawn() doesn't seem essential to the proposal

CM: Yes, it's a convenience. The idea is that you might want to pass some useful things to the new realm.

WH: Spawn lets you install shared objects in multiple subrealms; eval can't do that because there is nothing to latch onto.

DH: You do need spawn(), in order to create a new realm, but then once you have eval() you can do everything else

[presentation continues]

MM: Note that two different sub-realms of TheFrozenRealm share the identities of all the primordials: Array, Object, etc.

AWB: There are two separable parts of this proposal: TheFrozenRealm, and spawn

CM: Yes, but they're very useful together

DH: The thing I'm concerned about is that with everything locked down and frozen, polyfillability becomes really difficult. I'm interested in how you can hook into the eval behavior, e.g. to add a transpile step. In this case the single identity of the Function constructor seems problematic

MM: You can use "spawn" to create a "virtual" frozen realm, and everything else is spawned from there. Yes, you need to coordinate, and anyone spawned from TheFrozenRealm won't get anything in the "virtual" frozen realm.

DH: But that breaks the whole idea of polyfilling, where there's no explicit coordination. I don't understand yet your constraint around multiple realms sharing the same identities of the primordials. It may be that those use cases are distinct from the polyfillability use cases, but I'm not sure.

MM: Multiple uncoordinated polyfills and identity are simply in conflict. You have the opportunity to do one or the other.

DH: To offer use-cases, this is effectively sandboxing, e.g., an IDE that wants to run untrusted code, or in a spreadsheet where you want the user to define their own functions. There are also use cases not related to security: e.g., IndexedDB might want to run user code in a background thread, or in another process, and they need guarantees about that code not having side effects.

BE: Houdini [from the css work group] would also like to use something like that

DD: But they decided not to use a frozen realm for that purpose, partly because they want to run existing code that's not compatible with a frozen realm

WH: I still don't understand how you can add new methods to Array.prototype in subrealms of TheFrozenRealm

MM: You create your own Array.prototype and install it, using APIs found elsewhere in DH's Realm proposal

AWB: Isn't there a staging issue there?

CM: We chose TheFrozenRealm as a jumping-off point simply because it saves a lot of work, not having to freeze everything at startup. If you had the whole realm API on other realms, that solves the staging problem

DH: It sounds like TheFrozenRealm doesn't have that much stuff on it?

MM: It has everything except for Math.random, Date.now, and the Date constructor

EF: Are we confident that there won't be new things in the future that are also problematic?

CM: This does create a future-looking constraint that such problematic things are either left out of the language entirely, or left out of TheFrozenRealm.

WH: Wouldn't weakrefs also fall into this category?

MM: Yes, it was in the list I just said.

DH: There's no way for a polyfill to add a new API to TheFrozenRealm, without global coordination. People coding to TheFrozenRealm environment will have to be very conservative, since for example different browser versions might ship different sets of things in TheFrozenRealm. Polyfilling is used in lots of places to solve this problem, but doesn't work here.

MM: The experience with SES is that global coordination works

DH: In practice, you're not going to get adoption if you have to tell users to put the global coordination code in the right place in their app. The es2019-shim cannot add things to the frozen realm: instead people have to change the top level of their app in some fundamental way.

CM: Users won't want other people to go in and offensively polyfill the wrong things, and they want to protect against that

EF: What about when new things are added to the platform?

CM: That's a problem

EF: Can i create a new frozen realm after applying polyfills? Then, I'd never use the built-in one.

CM: Everyone has to ensure that the other one is polyfilled, or someone has to change it before freezing it

JH: I'd want to create a new, single, global frozen realm with all the polyfills applied.

EF: You'd initialize the environment how you want, and then spawn frozen from there, engines would provide very little new aside from the little addition to the realm API

CM: The SES shim is very expensive because it has to do the complicated, expensive freezing process. If it's built-in, it could be cheaper

MM: This is a logically sound design direction. If it's affordable with respect to initial page load performance concerns, sounds good

EF: And this is needed for real users to be useful

MM: The number of primordials has been growing very quickly, especially SIMD

EF: The number of people who want to run these sandboxed environments is relatively low, relative to the world of JavaScript, and they can take the expense

CM: But we want to have it fast

MM, CM: Do the freezing lazily, to make it fast!

EF: That makes me very uncomfortable

CM: EF, you said you didn't see much use of frozen. That's because it's tedious, painful, slow and confusing, so there's no ecosystem, aside from people like us.

AK: This addresses the speed of the ES primoridals, but it doesn't improve the speed of the rest of the APIs one expects in a web browser. What's exposed by the web browser is much larger than what's exposed by ECMAScript.

MM: Some usage is just a plug-in interface, which doesn't need any DOM APIs with a particular new API surface.

DH: You're proposing no DOM APIs on a frozen realm by default, to clarify

CM: Right, the frozen realm only includes what's in the ES spec

DH: A sub-realm extending that may add more

AK: But you wouldn't want to add the existing DOM APIs, as the existing DOM APIs are not defensive according to this programming model

DH: We want a pure starting point that we can add to incrementally. You could give some users a mutable view of the DOM, giving as much as you want

AK: Why do we bother putting, e.g., Math, when you can add these extensions?

MM: Because ES is host-independent, and it doesn't have any mutable or nondeterministic state (with the two exceptions). When you build an OS, you have user mode and system mode; the basic distinction is that user mode instructions are computational, not causing external effects. You have to go through a boundary to cause host actions or DOM actions

AK: I would like to believe the web specs were that rationally split, but I am not sure.

BB: An easy starting point would be to make user do things in a worker, which has limited API access

MM, DH: You don't have synchronous, object-based APIs

BB: But if you were serious about isolation, you'd serialize communication. In Node, we have some experience with vm.createContext, and users don't consider it a safe sandbox--you can use shared resources and kill other things, and generally each vm uses a lot of resources, and people are talking about a new way to create contexts

MM: By sharing the realm, which you can do because it's frozen, it's extremely cheap to create tons of tiny sandboxes. We're working on porting the SES shim into Node

BB: I'm guessing it'd be faster

MM: It's much faster. You call vm.createContext just once, and then call the SES shim to freeze all primordials, and then emulate the creation of subsidiary realms. We emulate it with a kludge involving 'with' (which this proposal would address). Creating an isolation boundary within the realm is very lightweight.

WH: How many objects would that be?

MM: Four

WH: Does that include Math.random, or Date.now?

MM: No; that would add an additional four objects

AWB: I really like this idea; it's very attractive. The realm concept has some subtleties, and one subtlety is that every function is hard bound to a specific realm. The primary use of that realm binding is access to other primordials, to find which, e.g., kind of Array RegExp.prototype.exec should return. So the frozen RegExp.prototype.exec would return an Array from that original realm, even if the realm has endowments changing Array.prototype, so you'll get skewed--

MM: Sometimes that matters more than others. When you polyfill, you need to understand those dependencies, which is an additional dependency on polyfill. If you polyfill RegExp, you've got to do the corresponding thing to Array.prototype.

DH: That's the Realm API, not this

WH: If you want a polyfill on Array.prototype, you end up having to polyfill everything to refer to it: JSON, RexExp, ....

CM: Part of the issue is that when you bring in all of the historical baggage, it's easy to conflate all of that mechanism with what we're advocating here: A very simple programming model

AWB: It looks nice and simple, but it may be more complicated. The other half is that Realms are indirectly leaked into other things, function contexts

DD: On the web platform, every object, not just functions, have a realm pointer. This may affect their semantics.

DH: You can crawl from an object, to its constructor, to the Function constructor, and discover which realm you're in

DD: The HTML spec has a "relevant settings object" (over 100 references). This comes up, e.g., in the custom elements spec, which uses that object to find which HTMLElement constructor to look at when creating an element.

CM: When we talk about realm, there is an idea that there is a 1:1 correspondence with the HTML concept

AWB: That's not why I introduced realm

DD: These correspond, and that is how things work, and that has value

DH: Objects have a connection to their global in the web platform. In the ES spec, we have explored the way that functions correspond to the global object. We shouldn't be short-sighted about formal distinctions between standards bodies and make suboptimal decisions that negatively affect other parts of the web platform. A lot of what we're talking about is the realms API, which is distinct from frozen realms. It's important to keep them separate.

DD: Implementors, do your non-web objects have a realm associated with them?

SG: Yes, based on the compartment, but it's not a physical field in the object.

DH: In reality, in ES/the web platform, all objects have realms, and we should acknowledge this

CM: We start out with things isolated from each other; there is not necessarily a 1:1 correspondence between these multiple realm contexts, even if they seem similar. We have 20 years of experience building large, complex, highly-secure systems, and it's really easy, and really lightweight

JH: Since the frozen realm does not have a lot of the browser globals, does it lack Annex B?

MM: "Annex B considerations" section of doc says that the ES2017 draft spec doesn't have any inherent state in Annex B, so they are safe to include.

JH: So do you include them? And what about parsing semantics (e.g., FiB)?

MM: We are just asking for Stage 1. It's valid to explore these questions within Stage 1. We make a concrete proposal and then talk about possible variations. The proposal here is to omit the dynamic things in Annex B, but have the evaluators be sloppy evaluators. Embedding environment still have the choice of what to include.

JH: Should frozen realm code be all strict?

CM: I want it to be always strict, and MM wants to leave as many degrees of freedom open as possible

AWB: Could go either way. It's not clear to me why this isn't folded into the overall Realm API.

MM: We're just using two things from Dave's proposal (eval and global) and adding two other things.

AWB: You can't do anything without reified realms

DH: This is totally blocked on Realms

CM: This isn't based on the Realms API, but as we got into it, it made more sense that we do want it in one.

MM: Should we merge this proposal with the Realm one?

DH, EF: No, this should be on top of Realms

MM: Spawn should be part of the Realm API?

CM: We need to communicate about how to make this possible

SG: What is the security guarantee that this frozen stuff gives you?

MM: The guarantee at this point in (example in the slides) only effect Bill's program can have on the universe, outside of the internal state that Bill creates, is the ability to increment the counter and see the result. The only effect Joan can have is decrementing the counter. These are real guarantees, a result of the underlying formal model. You start with memory-safe object programming, plus real encapsulation, plus isolating objects from the ability to cause effects. Because Bill hasn't been given any objects other than the change object, that's all he can do, as long as he's in the context of frozen primoridals. Otherwise, Bill can go and mutate all kinds of stuff in Alice's world and destroy her.

SG: Given that there are other security models in web browsers, and we want to run this in web browsers...

MM: There's no incompatibility

EF: So you give everybody one realm?

MM: Yes, that sounds secure

EF: What about software flaws; that sounds prohibitively bad for us, if we're sharing across origins. Software flaws is a real thing--there's a very large surface here.

AK: Chrome is moving its cross-origin iframes into other processes to get stronger isolation and attack this large surface issue.

EF: As an implementor, I'm very desperately worried about sharing any object that is touchable by two non-trusting parties. Even if there is a theoretical argument, the surface is large.

DH: Sounds like that is the concern. Specifically the idea is sharing an object across all realms.

EFT: At the moment, if you try to touch something from a different origin, it's opaquely prohibited. Here, it's transitively immutable. If everything was written perfectly, then immutable is immutable, and we win. But otherwise, we have an information leak, and that is scary.

CM: We're assuming that a particular mechanism is implemented to get these guarantees. You're already relying on your compartment separation guarantees. Why is this any different from that?

EFT: I don't want to give away the banking password of my users, and this increases the surface significantly.

DH: I understand much better now. It's not a big API. I was shocked at the resistance, but I had never thought that it would be a shared singleton global. So it seems better to make separate ones.

DE: But if that's the case, why is it safe to share these at all, and why should we trust the security model? MM has made many fixes to ES, and JITs are a very large surface area, as well as the standard library. Are we confident that this will fix things? We have a much tighter boundary with memory,  a much smaller surface

<missed a bunch>

DH: But why not use separate objects? And are you saying that Google Sheets shouldn't be doing what it's doing, with letting users run JavaScript code?

AK: If the committee is putting this forward, it is asserting that it has value, and the value is security. So the committee would be saying that it has value

DH: I think it's easier to imagine this being useful than it is to require good security models

AK: but you can do this today

DH: yes but you get better performance today

CM: (gives a hypothetical example based on payments), which could be done with SES

CP: We have 2m developers at Salesforce, and we'd really like them to be able to create JavaScript/HTML/CSS components in our platform.

DE: So you are all running under the same origin?

CM: Caridy told me that, to prevent interference, they are using same-origin iframes for isolation, and then they rewrite instanceof and === to make it work

MM: this is an example of a large production site that is paying a large cost just to keep things from stepping on each other

DT: my site has similar issues with auditing. How easy is it for me to prove to the auditor that there is no problem? But we use all these third-party plug-ins, and we provide data to them. Separate iframe doesn't let us provide that data, but if I don't go through enormous hoops to get it to be considered secure

AK: So you can see how we're concerned about how this would be considered secure

MM: He could use this mechanism

DH: Seems like this localizes the security needed

EFT: There's no way that I could convince Boris and Bobby that one shared realm is security.

DH: Sounds like Chrome is saying that putting this under security requirements is prohibitive

AK: not sure I want to make a statement that strong but we need to consider that when talking about advancing this proposal

DH: people are already doing this today and if we can localize that to a single API

DE: it's not a local thing because the entire design of the ES standard library has been bending to these SES constraints

DH: I don't think that's relevant because there will be a lot of people doing this who are not from the ocap community or following the SES tradition; the basic idea of running code in a realm that cannot have effects on the world

DE: not trashing the world sounds like a property that you want to be rigorously enforced

CM: if you can't guarantee us memory safety and object encapsulation then we're fucked anyway

DH: we already depend on immutable objects being immutable

EFT: I'm telling you I work on a JIT for a living

DH: people have security needs and they depend on things like immutability and when the JIT breaks immutability it causes problems for everyone. If we have a relatively small API that depends on these properties and localizes the security needs people have, people will gravitate toward it and stop depending on the larger issue.

EFT: the surface area is small, the pressure is large

DT: the structure I have to go through to do this with iframes is $20K for a pen-tester because it's complicated and my developers could screw it up. That happens all the time across the web.

SY: if the web security model is not sufficient.... (interrupted)

DH: are you asking why can't we do this today with iframe sandbox? The reason is performance. An iframe brings in a whole bunch of machinery and if all you're doing is running code you don't need all those mechanisms.

SY: and that is the reason why it's not in your interest to work with say the HTML spec, or whoever comes up with new web security, to improve these things

BE/AWB: this isn't just browsers, it's Node and IOT

DH: this doesn't have to do with Node. The idea that you would be able to run pure user-provided code guaranteed not to have effects on the world is powerful.

DE: regardless of whether you call it security, if it's broken it's not great.

MM: it being well after 5pm, all I'm asking for today is stage 1. Clearly the committee's interested since they've been discussing it for an hour...

DE: so nothing can be rejected from stage 1?

MM: is there any objection to stage 1?

(Discussion of how this fits with the realm API)

MM: we already asked the room if we should merge the proposals and we should not, apparently.

AK: I hear two things. Frozen realms, and the realms API.

MM: if it's viable to get rid of the frozen realm and add spawnFrozen we can do it.

JHD: why isn't realms in stage 1?

All: it predates the process

JHD: it should be implicitly stage 1

DD: I don't agree with implicit stage 1 for every pre-ES6 idea

DH: there's a weird relationship where this is blocked on an API that I have yet to propose. I don't think it's necessary for the proposals to advance together.

WH: We should discuss Realms before bringing them to Stage 1, but it's OK for this proposal to be at stage 1

DH: We could back off Realms to Stage 0

WH: I want a presentation

#### Conclusion/resolution

Frozen realms is stage 1, Realms is Stage 0

DH: promises to present on Realms soon
