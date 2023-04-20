# May 23, 2016 Meeting Notes
-----

Brian Terlson (BT), Dave Herman (DH), Michael Ficarra (MF), Jordan Harband (JHD), Waldemar Horwat (WH), Tim Disney (TD), Shu-yu Guo (SYG), Mark S. Miller (MM), Kevin Smith (KS), Michael Saboff (MLS), Eric Faust (EFT), Chip Morningstar (CM), Daniel Ehrenberg (DE), Leo Balter (LEO), Yehuda Katz (YK), Jafar Husain (JH), Andreas Rossberg (ARB), Ben Smith (BS), Thomas Wood (TWD), Alan Schmitt (AS), Brad Nelson (BNN), István Sebestyén (IS), John Neumann (JN), Domenic Denicola (DD)

Remote:
Michael Hablich (MHH), Yang Guo (YGO), Toon Verwaest (TVT), Daniel Clifford (DCD), Nikolaus Papaspyrou (NPU), Ben Titzer (BTR)

-----

## Discussion of the agenda and timing

PTC/STC on Tuesday morning/afternoon for MS employees to call in
9 hours differences between CET and US Pacific time. Only afternoon works...
First YK/BT class evaluation order, then PRs, then features for advancement, then other features

## Class Evaluation Order

(Yehuda Katz, Brian Terlson)

[_Presentation (with slides)_] https://github.com/tc39/notes/blob/main/meetings/2016-05/classevalorder.pdf

BT: We need consensus, as this comes up with decorators and other new language features.

YK: Resolves question that committee asked

BT: [_slide ES6 Class Evaluation order_] Mostly not observable.

MF: Some of those steps are observable

YK: The interleaving is not all observable

EF: What matters is that the evaluation steps are in order and that you get the TDZ right

BT: The observable effects are that the class is in TDZ while the extends clause is evaluated and then the computed property names are evaluated

BT: [_slide In-order Evaluation: Unrealistic_] Hard to add additional features to classes while maintaining these constraints

YK: [_slide Impossible scenarios with in-order evaluation_] There are a number of dynamic things, and it'd be really hard to do them all in textual order for new features

DH: Can I make that slightly more rigorous? A number of new features include evaluation of expressions

...

YK: __TODO: provide gist link__. When should static field initialization be evaluated? Seems like it would be nice to have the class not in TDZ and fully initialized when static initializers run. Glimmer actually uses this.

MM: This is really bad, like Java; we shouldn't have the class defined until all of the statics are there.

DH: This is one of the most common, natural use cases of statics.

YK: What should be done instead?

WH: In C++, you can do this, statics are defined later. Worked fine until constexpr, which exposed badness with phases. Now it exposes lots of badness that no one understands — can't even call constexpr functions statically and textually defined earlier in the same class.

MM: I want to register that exposing this is disturbing

YK: Here's an @integrity decorator. It freezes all the things. If we want to have statics evaluated later, outside of TDZ, but it had ordinary imperative semantics, then we couldn't do it in conjunction with the @integrity decorator, because the freezing should happen later.

YK: If you have a @nonconfigurable decorator, then you need the getter/setters to be put together, otherwise "adding" the second one would fail

YK: Forward references: the static initializer should be able to call all kinds of methods, even using computed property names, which are declared textually *after* the initializer

WH: What if Symbol.iterator referred to a static initializer? Example:

```js
    class Args {
        static LIST = [... new Args()];
        static PI = 3.14;
        ... iterator code refers to PI ... // In turn, LIST refers to the iterator code, creating an order of evaluation dilemma
    }
```

YK: You're assuming this is imperative. We'll see in the proposal. We'll come back to further example later.

BT: Instance initializers have to be run as part of the constructor, so they are not subject to in-order evaluation

WH: I was talking about static.

BT: [_slide Out-of-order Evaluation_]

WH: Is the order purely syntactically defined, or does it vary depending on what's in the values being defined?

BT: Syntactically defined.

BT: There is actually an intuitive order, which runs in non-textual order, found in other languages. You  may think it's good or bad (Java example); there are ES supersets which are very popular
which have this sort of semantics.

YK: We can use semantics similar to Ruby, though it has more imperative class semantics, where ES is more static. Babel and TypeScript made independent choices here which are out-of-order and seem to meet user expectations, though at the same time, the semantics may be incidental based on the implementation of transpilation

BT: These are not edge cases; they are core features. Instance and static initializers are very very popular features and we in TypeScript have not received any bug reports of users being confused about the evaluation order.

BT: [_slide Class.next Evaluation Order Strawman_] Aligns what is implemented in Babel and TypeScript (modulo a TS bug that they are on-board to fix).

BT: Difference starts with step 4, about making an intermediate list of all of the methods

YK: The spec could've been written this way, and the difference is unobservable

BT: Evaluate decorator expressions (to find out which decorator it is, not to call the decorators) and computed property names.

WH: What scope are decorators evaluated in?

BT: In the same scope as computed property names.

WH; So they cannot see any of the class properties?

BT: Correct.

EF: What happens when decorators are not in the picture? Seems like it just means that statics happen at the end. Let's tweeze these two things apart.

YK: It will be clarifying to think through the complete picture with decorators, but you are right. A lot of this is spec factoring, but this is very important to expose to decorators.

BT: Slide edit to insert step 11 where decorator transformations are run after static elements are installed onto the class in order by evaluating initializers

WH: Isn't it problematic that you have static element initializers run, with access to the class, when the constructor is not in TDZ? What if an exception is thrown in step 10? To be more concrete, ...

MM just now gave an example of a decorator that freezes the class. If one of the static initializers in step 10 throws and someone catches it, the class will be defined but never be frozen.

DE: E.g., what if the initializer saves the constructor somewhere and then an exception is thrown? Then you'll see that the decorators have not run and the integrity is not inserted.

DH: There is a distinction between the ability to write something silly that doesn't work and a full argument against a proposal. It's more important that you should be able to meet important user cases. It might not be so important that you could leak a class that hasn't fully been initialized.

YK: FWIW I think it's good to reduce the number of bad cases. We should try to figure out the actual cases and what the issues look like.

DH: There is imperativeness inherent in the space.

YK: I think we can make it declarative modulo static initializers.

MM: To clarify, do these steps (sub-steps of 4) run member-by-member in textual order through a few of them, or does it run across all members in order?

YK: In textual order, each member will do those four steps, though we could consider another way.

EF: You can decorate the getters and setters separately?

MM: What does that mean?

YK: Run textually bottom-up per get/set.

WH: Seems like the order in which decorator functions are evaluated in step 6 is not statically decidable because of getters and setters that use computed property names. One can't statically tell which getters will match up with which setters if they use computed property names, and the pattern of these matches will change the order in which decorator functions are evaluated in step 6.

DE: Seems like the getters and setters get evaluated first, and coalesced, and then the decorators run

KS: Could this be factored a bit differently?

YK: Up to spec editor

KS: Seems like no changes to current class semantics, right?

YK: Right, maybe a small amount of changes to class literals, but otherwise the same.

KS: So mostly a constraint on future additions?

YK: Yes, it gives guidelines

JHD: What is the division exactly between step 6/7 and step 11?

YK: Decorators should not be able to see the in-progress class, so they will get access to some sort of representation to something instead. Step 6 produces modifications, and step 11 actually applies them.

JHD: So 6/7 produces property descriptors and 11 applies them?

YK: Basically, though we need more power than just property descriptors; for ES2015 property descriptors are everything.

WH: Why don't the decorator functions in step 6 get evaluated in textual order?

YK: Wouldn't be opposed to running them in textual order.

MM: What is the difference between this and TS?

BT: TS does step 10 and 11 in reverse. So if you have a static initializer referring to the class, you get an instance which isn't decorated. You need to make a tradeoff: does the decorator see the static fields of the class, or switched?

DH: It's important for a class integrity decorator to be able to apply to the statics and make them affected as well.

BT: Babel with the decorators plugin aligns entirely with this.

JHD: If you have a static initializer which creates a class instance, don't you see the partially constructed class?

```js
class Foo {

    @incrementByOne

    static A = 3;


    static B = Foo.A; // is B 3 or 4?

}
```

_Discussion about how decorated properties work using thunks. It's similar to TDZ intuition_

MM: Can a decorator on a property see the class?

YK: No

EF: Sounds like people are swayed that we want out-of-order evaluation. What else besides decorators is up for discussion here? Maybe we could come back to these things in the decorators proposal.

YK: There's also something with computed property names, but I want to come to consensus on the basics here.

MM: question

YK: You shouldn't have access to the class in a dangerous case.

MM: For the sake of concreteness, the overall picture you have in mind is that step 11 only applies to class decoration, right?

DE: Do we have consensus on a staged order?

MM: It needs to be clearly and unambiguously defined, and follow least surprise; this seems pretty good to me.

WH: One comment: for step 6, I would suggest textual order.

EF: At the last meeting, people had a lot of trouble with class initializers. Has this concern been resolved?

MM: yes, for me.

DE: So, consensus?

__*Yes*__

EF: what is the concern with object literals?

BT: Because the right hand side of object literals are evaluated in order with computed properties, it is basically impossible to apply the same scheme to objects, unfortunately.

YK: Today, object literals are still used a lot as partial classes. Because that's a thing people do, you may want to use decorators (e.g., @nonconfigurable) as part of objects. The issue is that computed property name evaluation is interleaved with the property values. Seems like specifying a different ordering would create subtle bugs, so it's very hard to define well.

DH: I want to be able to have a @nonenumerable decorator for all property definitions, and it seems like a huge loss otherwise.

YK: Why did we get rid of duplicate property names anyway?

DE: computed property names?

MM: rest and spread properties (FB proposal) became more useful if textually later properties could override earlier properties.

YK: I don't think that was the reason.

MM: That was the reason. I was insistent that the dynamic error parallel the static error, so we got rid of the static error as well.

JHD: Although it would be a breaking change, maybe it would be reasonable to evaluate all computed property names of object literals before their values

MM, WH: Agree.

ARB: You could have arbitrary side effects in computed property names or property values!

MM: If the feature was recently deployed, then the code that's using the feature is generally code that's still being maintained.

YK: I think web developers assume that new features are still in flux to some degree.

JHD: Cases 1) Babel 2) Web but not caring about compat 3) Node, and then v8 changes in a major version bump. None should be a problem.

KS: Prototype in Babel?

ARB: I don't like this change because I think left-to-right is a good thing to have.

EF: I'm also vaguely uncomfortable, but not being able to write decorators in object literals anyway seems

DH: It might be that people take arguments that they use as computed property names, but probably aren't all that stateful

DE: Domenic has mentioned a use case for this where people may even refer to properties of objects as computed property names.

YK: It was a mistake to make getters/setters non-enumerable

DH: I remember getting consensus on it being enumerable

DE: But doesn't Object.assign only refer to own properties, so making it enumerable wouldn't fix rest/spread properties?

YK: Regardless, the room somehow believed getters/setters would be included in rest/spread params (included in "snapshot")

MM: ... uses own/enumerable/Get, follows Object.assign semantics

YK: But a getter on the prototype is not an own property.

YK: It's urgent to reconsider this because people have implemented it.

JHD: Sounds like this is unrelated to the topic at hand.

YK: Just mentioning all potential breaking changes.

EF: Seems like coalescing get/set was better in the old world than the new world. Should we explore alternate syntax so that it's grouped?

DH: Syntax is very expensive to add. It would be unfortunate to add new syntax that doesn't "pay for itself" and flattening is very ergonomic. Coalescing is nicer for the metaprogrammer.

YK: Linters should enforce get/set being adjacent.

YK: Maybe there should be a dynamic error if you decorate both the getters and setters separately

MM, YK, EF, DH: All agree, better than decorating them separately.

_Do we have consensus on everything?_

DE: I'm still uncomfortable with static initializers running before the class decorators have had their effect on the class, similar to WH's concern

#### Conclusion/Resolution

- Consensus on a general staged model
- Provisional consensus towards a proposal to evaluate all object computed property names before the values
- Interest in seeing more development towards how getters/setters will interact with rest/spread properties, including reconsidering whether they should be non-enumerable
- Consensus that decorating getters and setters separately should be a dynamic error; you are decorating the pair, not individually.

## Updates from István

_Record all members present, including on VC, in the notes_

Do we have consensus on adopting the minutes of the March meeting?

Besides Github notes and ES discuss notes we need to prepare the official Ecma version of the minutes that annexes the "Technical Notes". This is needed not so much for TC39 as for the other Ecma Membership on what is going on in Tc39, and this goes also into the long-term archive of Ecma.

_Consensus_. TC39 approved TC39/2016/019 Rev1 minutes of the March 2016 San Francisco meeting.

- We cannot have any more technical changes for ES2016. As requesred by Ecma Rules the 3 TC39 standards up for voting at the June 2016 GA have been published. Only small Editorial changes are allowed. ECMA Secretariat is working with the editors of 262 and 402. In ECMA 414 (ECMASCript Suite) Allen Wirfs Brock suggests also to included ECMA-404 (JSON) into the normative references (I have forgotten to say verbally in the meeting...). This is an editorial addition as ECMA-404 is already included as Normative Reference in ECMA-262...

- ECMAScript Suite (ECMA-414) for ISO fast track up for approval, going to be presented to ECMA GA. The ECMA Management are all very impressed with the ability to release ECMAScript 2016 so quickly. To avoid getting out of date with frequent updates, we will not submit future ECMAScript "components" (like ECMA-402, ECMA-262) updates for ISO fast track and just submit the one suite standard as the new Edition of IS 16262. Unclear whether this will work practically (actually ISO secretariat suggested this, but some national bodies may object to it - one never knows), but it is very important to ECMA that the annual version be standardized and published.

- ECMA-404 (JSON) will be up for ISO fast track from the 2013 version, aligned with IETF standard, unlikely to change in the future. Actually we have a go ahead from the Ecma GA this from 2014, but only now we are submitting the fast track. The only reason for the JTC1 fast-track of JSON to demonstrate the world that JSON is stable and there is no intention to change it. When there will be a similar IETF Standard (not FRC) we will issue a new ECMA-404 Edition when we will take up that and get it synchronized with ECMA-404.

- Brian Terlson and Rick Waldron has been proposed to the Ecma Management and the CC by István for the GA ECMA award of recognition at their June 2016 meeting. Caridy Patiño (as ECMA-402) Editor may also be proposed for an award (this was seconded by TC39). We are also open to nominating other TC39 committee members for ECMA recognition awards for any outstanding TC39 related contribution. This occurs twice a year at the GA. E.g. Allen W-B. or Waldemar H. has received this award in the past.

__NOTE__: The ECMAScript standards currently contribute to about 2/3 of all Ecma downloads of standards. Constantly we have about 5000-7000 downloads of ECMA-262 per month. That is the record holder standard. The HTML version has about 100000 visits in 2016 so far.

Another point only mentioned here but not in the verbal report: He gets a great external interest for ECMAScript Security Projects and how to speed up ECMAScript performance (e.g. by parallel processing) for Media Codecs running in ECMAScript.

## [Standardize a RangeError for call stack overflow](https://github.com/tc39/ecma262/pull/319)

(Mike Pennisi) https://github.com/tc39/ecma262/pull/319

BT: Leading discussion on this proposal. This would help write tests to see if resources are exhausted for stacks.

WH: This seems like a special case of out-of-memory. How could you even signal such an out-of-memory failure? You could make the same case about writing tests to make sure weak maps garbage collect.

DE: It is not possible to detect memory exhaustion on Linux reliably.

DE: On Linux it just picks a process and kills it, not necessarily the one that exhausted memory.

BT: yes, for this reason I oppose this proposal. It does not seem possible for us to reliably detect the out of stack condition and recover with a RangeError.

MM: The ECMAScript spec can only "correctly" be implemented on an infinite memory machine. We don't acknowledge failure. Java preallocates VM errors. Erlang OTOH terminates the process. Let's do that in ES.

BT: Although that would be ideal, it sounds web-incompatible.

_Chakra, JSC and SpiderMonkey throw exceptions on out of memory, but V8 just crashes_

DE: Sounds like we need more web compatibility evidence. Maybe we should recommend to browsers to collect data on how often out of resource exceptions are caught and handled.

SG: Games may try to allocate a bunch of memory in a try block

_General discussion about the unimplementability of throwing correctly all the time._

DH: We have to do good science here.

DE: The Test262 tests are parameterized, and there are both positive and negative tests

DH: Recommendation to Test262: write a routine to experimentally determine the maximum stack size, and run this at the beginning, rather than starting at 100k.

BT: Isn't it possible for this to come to a variable outcome?

MLS: I wrote this routine, and it's very hard to do it correctly determine the exact outcome. It required growing exponentially, then backing off, etc

LEO: After a lot of research, this was the best we found. It is not the happiest solution, but we couldn't find anything better. We just wanted to offer some form of tests on Test262 for each feature of the spec, and that's what we did for tail call optimization. You already have to have a $PRINT function that implementations support, and this is similarly parameterized.

BT: It's a pragmatic solution

MF: Proper tail calls are unobservable and should not have a Test262 test

BT: But it is very useful and works on all implementations

#### Conclusion/Resolution

- Consensus to not standardize RangeError (impossible to implement reliably)
- Continue discussion on a GitHub bug about possible reorganization of Test262 to take into account that the PTC tests are implementation-specific/not technically correct

## [\w and \W semantics in case-insensitive Unicode RegExps](https://github.com/tc39/ecma262/pull/525)

(Michael Saboff)

WH: This is the exact same problem that I solved in ES3 by adding the prohibition to case-canonicalization of non-ASCII Unicode characters into ASCII characters. Without that, the same \W weirdness would have appeared in ES3.

MLS: Recap of very strange semantics caused by Unicode case folding (MLS please insert link to slides). \W includes K because the kevin symbol case-folds to something in \w, so K is case-insensitive in the set of things that aren't a letter.

MLS: Proposal: make \W be the inverse of \w, and change \b and \B to be consistent. An alternate proposal would be to stick to ASCII-only as Waldemar did for ES3.

WH: [_explaining the rationale for how ES3 regexps were specified_]. Character classes evaluate into sets of allowed characters and an invert flag. Used an invert flag to make [^...] be an exact negative of [...]. It would have been tempting to use an invert flag to make \W into an exact negative of \w, but that wouldn't work when combining \W or \w with other things in a character set: [abc\w], etc. That's why \W inverts the set manually instead of using the invert flag.

YK: Would it be web-compatible to do a change?

WH: Having k and s match \W is clearly a spec bug.

YG: Chrome shipped this in 50, with the spec's semantics.

DE: It should still be web-compatible, though, as it is very recently shipped. The bug reporter was someone who was writing a conformance test, rather than finding this in actual usage.

BT: Edge actually ships MLS's proposal, so we don't need to worry about web compat.

MLS: Should we change \b as well?

YG: Yes, they should change together?

WH: Isn't it strange that what's contained in the class is dependent on the i flag?

YG: But they should change together and be consistent.

MLS: There is currently an inconsistency between \b and \w due to this issue as well. Proposal flips this, and makes \w\W or \W\w be \b. It's necessary for

YG: I was suggesting bringing in Unicode because it seems ad-hoc to bring in just small long S and kelvin symbol

MLS: Or, we could make it not cross the ASCII boundary, and not do Unicode case folding with respect to the evaluation of this character class.

JHD: But seems like we should be aligned with Unicode.

MLS: My proposal just uses UnicodeCaseFolding.txt and will be future-compatible

YG: It seems rather ad-hoc to not follow UnicodeCaseFolding.txt, so let's keep it if possible. This all applies only with /ui, right?

MLS: Yes

DH: What Unicode changes affect this?

WH: Unicode defining new characters which case-convert into ASCII letters.

_discussion: Good to follow Unicode going forward, as it has changed over time, both in adding new characters and revisions to existing characters_.

#### Conclusion/Resolution

Consensus on MLS's pull request, and working out \b and \B as he indicated.

## [Function names](https://github.com/tc39/ecma262/pull/575)

(Michael Saboff)

MLS: Proposal: When the inferred name is a reserved word, use "" rather than the current name. The problem is that the .name property won't eval.

MM: What is the problem with the .name property being not an identifier?

MLS: The problem is that math.js puts type decorations in the name when they put the property of the function into the object.

DD: Later, they eval it, concatenating the .name onto it

MM: That's what broke in Chrome 50 on SES, which was wrong due to bound functions and getters/setters.

MLS: but you can't call getters and setters

EF: Yes you can; get the property descriptor, find the getter, and call it

DD: the issue is how should we balance compatibility with the clean semantics of the current spec.

DE: V8 has shipped this in Chrome 50 and does not see a huge flood of bug reports

JHD: Function name property is not something that you can eval in general

DE: There are a lot of ways that we could handle compatibility issues. Collect qualitative or quantitive information, contact large users, etc. Where does this sit when comparing to TypedArray methods (Microsoft contacted Turbulenz; it was fixed and we all managed to ship the methods) and RegExp feature testing (too widespread; made a spec workaround)?

MLS: Seems like this is probably not as bad as the RegExp issue.

MLS: Proposal: "" name only in object literals, when the name is not an identifier

YK: Compatibility is important

BT: good to have an evidence-based overturning of previous decisions

MLS: Hard to do telemetry for this

#### Conclusion/Resolution

No change in the spec for now; MLS says Safari will likely ship their compat workaround for now, and see if it can get more information for the next meeting or the one after that to consider the decision


## [TypedArray/ArrayBuffer/DataView constructor changes](https://github.com/tc39/ecma262/pull/410)

(Leo Balter)

LEO: [_Presented bug comment showing behavior across browsers_]

MM: What does n/a mean?

LEO: not providing that argument

MLS: JSC gives somewhat changed and more standards-compliant behavior for some cases listed here, more in line with all other implementations

JHD: Seems like some of these have multiple browsers throwing, but your PR makes it not throw, in alignment with only V8. Why?

LEO: I'm trying to make a canonical approach

DE: We should consider web compatibility also for things that are not strictly at the intersection

YK: E.g., Mobile web

MM: When there's no hard rule applicable, about intersection semantics, then we can rely on soft factors. Another factor here is consistency among approaches.

LEO: Some of the real motivation is also web compatibility. For example, throwing errors for things which are not integers, or some other things, which did not throw in any browser but throws in the spec.

MM: Is a particular -0 value correct?

BT: We have had some -0-related bugs in the past; not sure if this is that.

LEO: What I have here is a new abstract operation, ToIndex, to uniformly treat all of these arguments.

_MM, LEO: Going through the details of the spec_

LEO: The new semantics for ToIndex are ToInteger, then check that it equals toLength of that (which asserts the range basically), allowing -0.

YK: Point of hesitation that in some cases, almost all browsers throw, but one browser does not throw and the resulting semantics do not throw.

MM: Seems like this is representing the length, rather than the index

LEO: Sometimes, it represents an offset index, e.g., the TypedArray byteOffset argument has ToIndex applied to it. I've bikeshedded a lot of different names!

CM: Question: How does ToIndex differ from ToLength? Are there places where ToLength is used which don't go through this?

JHD: There are many uses

LEO: Many cases use ToLength that I cannot apply this check for ToIndex to.

DE: e.g., all of the Array methods

CM: OK, compatibility seems like a decisive argument

MM: Why not just use ToLength?

JHD: Because then it wouldn't throw a RangeError.

MM: Although I prefer errors to no errors, I prefer smaller specs to larger specs. Why not just use ToLength?

DE: I think Allen wanted to make TypedArrays as strict as possible. This PR seems like a good compromise.

LEO: It's also nice that we have stricter infinity behavior.

MM: This sounds OK then

LEO: From TC39 philosophy, we could change later for throwing to not throwing, right?

MM: Let's throw the error because want to throw the error

YK: But we could go from throwing to not throwing, right?

MM: We can, but let's get a good decision here.

CM: Some of these things seem like weird cases that should throw an error, and some browsers do throw errors for some of these cases. Part of that is using a consistent rule everywhere, which i like, but if it's gonna be sloppy, I'm in favor of being more particular on edge cases.

DE: One thing I really like about this proposal is how it's consistent between the different callsites. Some callsites cast to 0 in all browsers on NaN

LEO: I'm not totally stuck one way on NaN. Maybe we could throw. But I believe this proposal is the most consistent way. One historical reason Allen mentioned was to make it compatible with WebIDL. It's true that this is not exactly the same as WebIDL, but I also consulted with developers who use TypedArrays every day, and they liked this proposal.

MM: there are cases where it's an error to make a 0-length array?

LEO: I found all kinds of cases of inconsistencies here. This PR makes things more regular.

MM: If the PR is adopted, then for all kinds of arrays, can you make zero-length arrays?

LEO: You will be able to create empty ArrayBuffers. TypedArrays may have additional checks.

MM: any objections?

MLS: Were you concerned about compat, DE?

DE: No, I was concerned about compat for other proposals. I think this will probably work.

#### Conclusion/Resolution

_Consensus!_

## [Revisiting "Duplicate Function Declarations in Blocks"](https://github.com/tc39/ecma262/pull/453) (DE, SG)

SG: Should our Annex B 3.3 legacy duplicate function in sloppy block behavior do an assignment for each function declaration, or just the last one?

DE: I thought we were executing the assignment for each one. This is observable if you break out of the block in the middle. I'm fine with only doing the last one.

SG: I'm fine with either also, but thought we had consensus on just the last one

YK, MM: Seems like it'd be more intuitive that each function declaration does the assignment,

#### Conclusion/Resolution

Consensus on DE's PR to do an assignment for each function

## [Throwing an error for returning primitives from base class constructors](https://github.com/tc39/ecma262/pull/469)

(Claude Pache)

DE: I'm concerned it wouldn't be web-compatible to change this. We've apparently always supported returning non-object from a construct leading to returning this

DH, others: Concern from various members of the committee about returning primitives leading to breaking long-held invariants

Realizations:

- Broader concern: ES2015 and this proposal both ensure that objects are always returned from new; the question is just does a primitive return this, or throw a TypeError
- DE: Web compat may not be so big of an issue since this only applies to ES2015 class syntax, not ordinary function constructors

#### Conclusion/Resolution

Yes on the PR, though we will have to take web compatibility feedback into account as implementations attempt this

## [Always update object properties if property descriptor is applicable (NaN issue)](https://github.com/tc39/ecma262/pull/353)

(Daniel Ehrenberg)

DE: This PR makes writes of a new NaN value to an existing writable property in an ordinary object take effect. That way, a non-canonicalizing implementation like V8 does not have to do a check on ordinary property sets to meet correctness. It continues to prevent information leaks on nonwritable properties by making those writes not change which NaN is there, though return success. Seems like a great change towards web reality while keeping both implementation constraints and desirable language properties in mind.

MM: Sounds good to me

DH: I'm uncomfortable with making this sort of change; the semantics for NaN observability and canonicalization seem weird

DE: The spec text is weirdly written; it warrants a refactoring.

BT: Didn't you promise to do that at your first meeting?

DE: Sorry I haven't done this yet; it's something that I was planning on doing if/when SIMD.js reaches Stage 4.

DH: I'm not sure if your refactoring makes sense either.

#### Conclusion/Resolution

Discuss more later. Agreement between DH and DE that this is lower priority than many other items on the agenda.
