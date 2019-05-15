# September 18, 2013 Meeting Notes
-----


John Neumann (JN), Dave Herman (DH), István Sebestyén (IS), Alex Russell (AR), Allen Wirfs-Brock (AWB), Erik Arvidsson (EA), Eric Ferraiuolo (EF), Doug Crockford (DC), Luke Hoban (LH), Anne van Kesteren (AVK), Brendan Eich (BE), Brian Terlson (BT), Rick Waldron (RW), Waldemar Horwat (WH), Rafeal Weinstein (RWN), Boris Zbarsky (BZ), Domenic Denicola (DD), Tim Disney (TD), Niko Matsakis (NM), Jeff Morrison (JM), Sebastian Markbåge (SM), Oliver Hunt (OH), Sam Tobin-Hochstadt (STH), Dmitry Lomov (DL), Andreas Rossberg (ARB), Matt Sweeney (MS), Reid Burke (RB), Philippe Le Hégaret (PLH), Simon Kaegi (SK), Paul Leathers (PL), Corey Frang (CF)


-----

## 4.2 Reconsider decision to make Typed Arrays non-extensible (Cont)


RW: (recapping yesterday's discussion)

EA: Can we pick 3 people to champion a recommendation?

RW: Ideal

(support in the room)

#### Consensus/Resolution

- 2 People to come back with a recommendation:
- Dmitry Lomov
- Allen Wirfs-Brock

Post meeting update: Dmitry and I discussed the issue and our
 recommendation is that Typed Array instances should come into existance being extensible. This is only about the objects created by the current set of built-in typed array constructors (or any subclasses derived from them). It does not imply that fixed size array types introduced by the future typed objects proposal will necesarily also be extensible.
-- Allen

As part of that consensus, variable-length (but not fixed-length!) typed array instances that are part of a future Typed Object spec should also be extensible in the same way as current Typed Array objects. In that way, full compatibility and equivalence between say "Uint8Array" and "new ArrayType(uint8)" will be maintained. As part of typed objects proposal, we will also consider having a different "type constructor" names for variable- and fixed-length typed arrays (e.g. "new ArrayType(uint8)" vs. "new FixedArrayType(uint8, 10)").
-- Dmitry

## 4.4 Symbols

Dave Herman presenting (follow up slides)


DH: Symbols: object or primitive?

Open issues:
    - privacy
    - object or primitive

(1) Statelessness
- Symbols should not share state
- Encapsulates key and nothing else


(2) Cross-Frame Compatibility

```js
obj[iterator] = function*() {};
```

Another frame must also know what this `iterator` symbol is


EA: Workers?

AWB: Only an issue when you want to move a value...

EA: Case where you use a name as a brand (branding using public symbols do not work. Branding needs true private state.)

YK: can these be structure-cloned?


(3) Methods

DH: The one place that most objects can't have methods is prototypeless objects, but they can have instance methods. For most most of the interesting data (strings) there are things you can do on them:


```js

alert.call();

Math.sin(0);

document.getElementById("body");

```

DH: if you only allow things to work via functions with arguments, you are turning off a powerful tool


(4) Mutable Prototypes

Monkey-patching standard methods is a best practice

The evolution of the web depends on it

DH: This is important to the language

DH: mutable prototypes are the way that developers provide a consistent platform across user agents they don't control


STH: This is assuming that Symbol will grow methods

YK: It's actually an assumption that it _won't_

DH: If we freeze a prototype, we're closing the door to ever evolving the API and closing the door to user code experimenting
- No experience to show that freezing a prototype "works"


WH: By "mutable prototype", you mean add and change methods, not change the prototype

DH: Yes, changing the shape of the prototype object

AR: (general defense of mutability, in prototypes and otherwise)

AWB: Freezing the prototype can be undone safely, if there is reason in the future.

AR: this is not a conservative position, despite the claim.

DH: It doesn't matter, if we design depending on the invariance that the prototype is immutable then we can't change

(5) Non-Answers

(6) Shallow-Frozen Objects

```js
O.getPrototypeOf(iterator).foo = 12;
```

- Fails Desideratum #1: is stateful
- Fails Desideratum #3: distinct cross frame iterators

WH: What doesn't work?

DH: The standard iterator symbol would be different in different frames because they exist in different heaps


(6) Deep-Frozen Objects

```js
O.getPrototypeOf(iterator).foo = 12; // strict error
```

- Fails Desideratum #4: no evolution


YK: How does the current spec deal with the function.prototype linkage

AWB: The prototype is null

DH/YK/AWB: this is incoherent, doesn't work at all.

(7) Missed? Something about prototype-less wrappers, fill in from slides...


(8) JS already has an answer for this! Autowrapping of primitives

- typeof iterator === "symbol"
- Get/Call operations auto wrap
- Prototype state is global per-frame

"People think auto-wrapping is gross"
- provides uniform OO surface
- does so without runing immutability
- doesn't ruing API patchability
- need a solution for value types



(9) Remaining Issues

- [[ToPropertyKey]] of Symbol objects" auto-unwrap? Does it matter in practice?
- Worry about toString for symbols and Symbol objects? Does it matter in practice?


WH: We should be consistent with the way we already do things. We don't unwrap boolean wrappers when used in a condition; we shouldn't unwrap symbol wrappers when used to look up a property. If you use Boolean(false) in an if statement, it will evaluate true.


AWB: In ES5, there was special treatment of wrappers, e.g. in JSON.
- no reason you should have a wrapper value in most contexts
- I would say, don't use

YK: Is it important that === works cross frame or just the indexing
- Have a mechanism that allows them to

DH: A kind of object that overloads ===

YK: No, don't

- If you go with new Symbol() returns object with mutable prototype

DH: No "object" solution works because of methods
- Need to move to next slide
- w/r to toString, I can't construct a plausible scenario where this would be encountered

YK: Accidentally construct a wrapper

WH: People explicitly convert to string before doing an operation. It would be impractical to make symbols survive the various kinds of string conversions.

ARB: Lot's of existing code that has code paths that converts a value to a string to get property key, would subtly misbehave with implicit symbol-to-string conversion


(10) typeof Extensibility

We don't know that it wont break the web

MSIE "unknown type may simply be rare enough to be undiscovered.

Fallback: "object" with [[Get]] et al that behave like auto-wrapper? (Object.isValue()?)

WH: It won't break the web because existing scripts won't see the new type. Seeing one of these things requires changing the script.
WH: We said that array subclasses are new and safe because unmodified code won't see them break things like Array.prototype.slice.call; why isn't the same argument applicable to symbols?

AWB: when I did symbols originally, as primitives and not wrappers, it was a bug farm, because everywhere that assumed a primitive type, now had to explicitly account for the possibility of a symbol. The standard library in particular had to do this. In practice, anyone who is writing a general-purpose library would have to do the same thing. If you have wrappers, then the value "turns into an object" when you use them as such, which works fine.

ARB: I implemented symbols in V8 with wrappers and there were no places where they needed special handling.

AWB: yes I agree! Wrappers address most of the issues.


YK: (Concerns about existing code that might not be resilient to typeof)

DH: the most straightforward thing to do is extend typeof, but you can have code that's not resilient to new typeof values.


(More discussion of existing library code having to deal with symbols).

DH: Many new things in ES6 are objects with new APIs, so passing them in would violate basic interfaces expected. Whereas for typeof, many APIs will take any value whatsoever, and then figure out what to do via discriminating via typeof. So introducing a new typeof will break their assumption that they can handle any case.

JM: I don't think it's so different; they will fail in similar ways.

AWB: This is different; it's at the core of the language, and there is a different expectation.

DC: Yes, this is different. There is an idiom that will fail, and it's a common. `switch (typeof something)`.

DH: if the only conservative extension guarantee we can make is that if you don't use any new features, everything is fine...

DH: the difference is that there are APIs that say "I'll take any JavaScript value," they don't mean "I'll take any JavaScript value that was present in the ES5 era." This is different from saying "I'll take something with an array interface," and you passing in something like Map which happens to violate the array interface.

WH: you are picking the wrong strawman. We are introducing things that do keep to the array interface (array subclasses) but break existing idioms such as using Array.prototype.slice.call to coerce to an Array object.

DH: right, I'm picking Jeff's strawman, not yours.

AWB: the issue with slice() is about realms, not kinds of objects, or subclasses.

WH: The slice problem is not about realms. It arises merely if you introduce an array subclass and never use more than one realm.

WH/AWB: (arguing about what they're arguing about)

JM: You say it's clear when you pass in the wrong interface to an array-expecting vs. an all-expecting. Can you expand on why that's clear?

DH: Difference between an api says "I will take an arraylike thing" and I will operate correctly and API that accepts "any"

JM: but it's not about types for the "any" APIs; they usually just pass them through, e.g. a datastore API.

LH: Rare that any API says "I'll accept any"

DH: we're talking about parametricity, passing through the value vs. inspecting it. My experience is that I see type inspection of the type-any inputs a lot.

LH: How often does an API take type "any"

DH: A lot of JS programs don't protect against wrong values

WH: No such thing as an API reliably taking type "any" and portably doing anything useful with it. Suppose we later introduce a new Decimal primitive that obeys the IEEE standard in that a DecimalNaN is not === to itself. Would a map work with it? Code that exhaustively type-dispatches primitives simply must change once in a while.

YK: (recalling a point AWB made) people using typeof to defeat autowrap, tell the difference between a thing that auto-wraps and a thing that does not

DH: The reason we shouldn't be afraid, is typeof of serves the purpose ...

EA: If typeof primitive symbol returns "object" there is no way to distinguish a primitive symbol from a wrapped symbol.

DH: we'd have to add a gross check for distinguishing
- slipperly slope

WH: "the future is bigger then the past" and it seems we're trying to perpetually mortgage the future to fix a relatively transitory fear we're not even sure is real. The cost is forever having yet another mechanism to distinguish the types of primitives.

DH: Then there is the "browser game theory" argument, who will implement in the face of danger first?!

WH: (interrupts)

DH: I also like finishing my sentences. I'm willing to give it a try, but...

EA: FWIW, V8 is shipping typeof symbol under a flag and no bug reports

DH: under a flag is not the web
- Willing to take this back to SM implementors

AWB: Explicitly checking for "object"

DH: Existing code breaking, this needs to be considered.
- New code can find old code that can be fixed

RW: Will put Symbol through jQuery in test suite to see what "breaks"


Agreement that auto-wrapping is the way to go

WH: Yes, use auto-wrapping the way we know it

re: toString


DH: One way or another we'll have to have it, whether it throws or produces a string

DH: There are values that throw, like proto-less objects
- conversion to string is not infallable in JavaScript


ARB: implemented two toString methods
- Symbol.prototype.toString => throws to avoid the implicit coercion hazard
- Object.prototype.toString => applicable to Symbol, but have to be explicit

AWB: Plausible that Symbols could have a printable "name"

DH: Proposal summary:
- Symbols are primitive
- typeof is "symbol"
- standard Symbol prototype
- construct to create wrapped symbol
- Symbol wrapper object does not auto unwrap. ToPropertyKey will eventually call Symbol.prototype.toString which will throw.

ARB: for the record: that is exaclty what V8 implements

YH: to the implementers in the room, please make the error message when you use a wrapper very nice.

ARB: V8 gives explicit error message

DD: new Symbol() is a probable footgun; should it do anything at all? Maybe just throw? Because we don't have symbol literals, so unlike `new Number(5)` vs. `Number(5)` vs `5`, the choice is not obvious; people will try to do `new Symbol()` not realizing that this creates a wrapper.

RW: Agree.

ARB: but then it's weird that there is an object you can get access to, but whose constructor doesn't actually work.

DD: but the only way you can get access to these objects is via the `this` value inside `Symbol.prototype` methods, in sloppy mode.

DH: no, `Object(primitiveSymbol)` would give you back the wrapper.

DD: ah, damn.

AWB/ARB: Discussing valueOf returns, used in contexts where a numeric value is expected

DC: But string.valueOf produces strings


AWB: Do you anticipate future value types having auto-wrapping?

DH: BE has thoughts about typeof modifyability

RW: Defer until BE is present.

Agreement


AWB: How does user code define a "well known Symbol"? One that works across Realms?

DH: not sure
- Standard library, we can create something that exists everywhere
- Library code, not sure


ARB: Think this is a serious problem that needs to be addressed


DH: Proposal
- Agree that it's bad to have a Symbol with BOTH a private and public form
- Private by default? Public by access?
- Need to solve the remaining proxy leak problem

AWB: We've discussed and concluded that we're nowhere near a solution to the private state problem.


YK: Mark's solution inverts where the transaction occurs

DH: If private symbols really behave like WeakMaps and you invert where they live, then they are truly private

YK: You want the proxy to trap them.

Why?

AWB: It's just a property name.

DH: If you have access to the symbol

EA: What about iterator?

STH: If you want the proxy to have iterator behaviour, you need access to @@iterator

...


AWB: Mistake to conflate symbols, which are guaranteed unique property keys, with private state. There is a temptation to do it, but we run into problems. I want private state, but there are better ways to do it.

DH: I am pretty exhausted from years of this debate, but from all the things we have to decide, this has to be decided now. And I am willing to fall on either side of the fence (private vs. public vs. both), for the sake of resolving this, but we need to resolve it.

LH: agree; we can't leave this meeting without a decision on this. But Arv's proposal (GUIDs) does give us a path.

AWB: but Arv's proposal doesn't solve privacy at all; it's just about the representation of symbols (strings vs. real symbols).

RW/DH: strings as symbols have bad usability and problematic to use.

YK: No solution to the enumerability question (are symbols enumerable)

DH: yes, if we were going to go with this, we would just have iterator and create be a shitty string.

YK: worse, it would have to be a UUID published in the spec.

AWB/DD/AR: underscores are better than GUIDs.

DD/RW: Symbols not for private state, use a WeakMap. Symbols for uniqueness, move on.

DH: Arv, what is your issue with just having public symbols?

EA: they don't carry their own weight. They behave like strings, except for reflection.

(silence)

AWB: there is one difference. They are in a different meta-level of the system. There is no way that user data can coincidentally be confused for a symbol.

DD: also, symbols do not show up in `JSON.stringify`.

DH: This allows us to add a meta level. Just like `__proto__` in the past. Underscores are, until now, our magic feather that we wave around to say "This is the meta-level! This will not be confused with data!" And that's BS.

LH: unless you enforce the distinction, people will build abstractions that break through the layers.

EA: before we had `for-in`; then we gave people `getOwnPropertyNames` and people started using that; now we're going to give them `getOwnPropertyKeys` and they'll use that.


discussion about the string display

YK: debugger could recognize that it's a uuid and replace with a readable value

discussion about "__" names.

LH: if you use any english word, someone _could_ create a conflict. If you use "__", there is no accidental conflict.

YK: Using "iterator" or "`__iterator__`", no one can reliably ducktype for an ES6 iterator




STH: leaving for lunch, in favor of Symbols

EA: I'm still in favor of keeping symbols, sorry for derailing the discussion a bit; what helps is the possibility of removing `getOwnPropertyKeys`. That makes them secure in the absence of proxies.

LH: but then existing libraries cannot implement a real mixin that moves symbol-keyed properties over to a target object
(if symbols aren't given reflective capabilities)

(Brief discussion of making `Object.mixin` be the only way to do this.)

DH: `Object.mixin` that can transfer symbols plus proxies allows you to reimplement `Object.getOwnPropertyKeys`.

AWB: Still think we should have Symbols, getOwnPropertyKeys

WH: I object to getOwnPropertyKeys (because of too many historical layers: in every spec we seem to be adding yet another layer of enumerating the properties of an object with a we-really-mean-it-use-this-one-instead-of-the-previous-edition's vibe).

DD/AR/DH: (discussion of `Object.mixin` + proxies trick.)


YK: It sounds like we're slipping down the path of doing privacy with symbols again, and we're going to appease people for the wrong

LH: the concern for `getOwnPropertyKeys` is that people would just use it in place of `getOwnPropertyNames`. Maybe if we separate into `getOwnPropertySymbols` + `getOwnPropertyNames` that will make it sufficiently painful that people won't just use `getOwnPropertyKeys` together.




#### Consensus/Resolution

- Symbols are a new primitive type with regular wrapper objects
- typeof symbol === "symbol"
- implicit conversion to string throws
- new Symbol throws
- Symbols are public, not private ok that they leak to Proxy
- Symbols are unique
- Only exposed via Object.getOwnPropertySymbols instead of Object.getOwnPropertyKeys
- `Object.mixin` copies both symbol and string properties


Additionally:
- AWB commits to bringing a proposal for user defined well-known symbol registration



## 6. Post ES6 Spec Process

(Rafael Weinstein) - http://slid.es/rafaelweinstein/tc39-process



RWN: put together some thoughts after the last meeting with DL, EA, AWB, etc.

RWN: most of it is good except that it's date driven and the consensus requirements lead to a high-stakes game for getting features into the game.

RWN: The second problem is that with large-quanta spec releases, there's a varrying maturity level for proposals. Stable stuff is "held hostage" to newer features.

RWN: as we near a release, we end up with large pressure around things which may or may-not make it. Argue that this is destructive to feature quality.

RWN: we also have an informal process. It occurs to us that acceptance of features comes before details are sorted out. Implementers, therefore, lack a clear signal about when it's time to start implementing features. Might be unavoidable, but other groups show a different way (W3C, e.g.)

RWN: we also have a single spec writer who bears the full burden of authoring spec text.

RWN: a few ideas:
- decouple additions from dates
- put structure around stages of maturity
- what does each stage mean? Get clarity

RWN: non-goal: componentize the spec or break apart responsibility from the whole group. Also a non-goal to change the rate of evolution (necessarialy).

RWN: looked at how the W3C works and tried to extract the bits that seem to work well. A 4-stage process:
    1.) proposal
    2.) working draft
    3.) candidate draft
    4.) last call

RWN: At a (much more) regular interval, we'd post (smaller delta) drafts to ECMA.

AWB: do these stages line up with W3C terminology?

(sort of, not really)

RWN: proposals outline the problem, need, API, key algorithms, and identification of cross-cutting concerns. Also, and identified champion. Acceptance signifies the idea that the solution is something the committee wants to keep working on.

RWN: note that we don't explicitly slate a specific revision is targeted for a proposal. That comes later.

AWB: concerned that we might accumulate accepted proposals that there's no activity on. How can we structure a cull?

BE: as needed. FileSystem API as example.

RWN: the analog might be the "deliverables list" used by W3C -- removing something from the list on the wiki could be that thing

DH: Not to componentize? Seems like there is something of a componentization and that's the value?

RWN: don't want to abandon the goal of language coherence. CSS did this wrong and have lots of weirdness as a result. Non-communicating editors lead to pain. This model is different: everything merges into a single spec.

DH: how is this different to what we're doing now? Maybe this is a smaller tweak?

BE: What this does is adds more staging before "proposal"

RWN: this is saying the first stage doesn't have spec text, but the second stage does.

DH: Makes a lot of sense, might make sense to spell out the earlier "incubator" stage.

RWN: so there might be a stage-0, which is sort of the strawman we've had before

RWN: what we want to see at stage 2 is draft spec text. It can have early-quality notes, etc. but thought should be put into the text for the feature before we collectively accept the feature.

RWN: there are a couple of key things to look at: can we decouple spec editions from specific features? what are the substantives stages of maturity?

BE: quick question: the i18n spec was on a different track, is this only for core stuff
(quotes FakeAlexRussell??)

(sort of, might be a way to draw stuff into the main spec)

RWN: stage 3 is the "Candidate Draft". It signifies that the committee thinks the scope of the feature is set. We can incorporate changes, but the key thing is that implementations are potentially costly. This stage is a green-light for implementing and final feed-back

RWN: stage 4 is "last call draft". 2 implementations and an acceptance test that they pass. Once accepted at this stage, the draft can be scheduled for the next spec to be published.

RWN: what about dependencies? The committee isn't absolved of this. IT's up to us to manage them and there isn't any silver bullet. We need to make decisions.

RWN: thought a lot about linkage as a part of this. A champion's interests might work against the language (ducking dependencies, etc.). The committee still needs to advise and continue to look over the landscape.

(discussion)

AWB: implicit in this is redefining the role of the editor to be more of an EDITOR, and less of an author. Should probably have a role in advancing proposals.

RWN: so still a world where there's a single editor?

AWB: yes.

(general agreement)

PLH: Noting that some of the process order might be confusing/out of order, with regard to naming?

RWN: yes, "last call" means somethign different in W3C that doesn't map well

YK: the year might be a red-herring. The point isn't the date and the goal isn't to rush things under the wire.

RWN: (refers to Chrome release process) (not quite Chrome, but close and relevant: https://developers.google.com/v8/launchprocess )

AWS: some of the non-technical overhead can be offloaded

DL: part of the goal is to help offload the work, getting more people writing more spec text.

(notes that this happened for Proxies and O.o)

DL: inside the v8 team, we don't have a ton of visibility into the maturity of features.

BE: spidermonkey has shipped many things over the years, but at a cost

(discussion about implementations and style)

RWN: so we can imagine that you'd have different styles of implamentations at each stage? Makes sense.

(agreement)

AVK: the w3c is removing the last couple of these steps

PLH: there's a new draft on github somewhere

(some discussion that you need implementations, hence the new W3C process)

AR: the chrome process shows that some features might slip multiple features, and that's very good for overall quality.

AWB: are the criteria here entry or exit criteria?

(discussion)

WH: What about mutualy beneficial features?

AR: that's the dependency question, we talked about that

RWN: it's sort of arbitrary, but that exists no matter what. There's no silver bullet. It's the job of the committee to keep an eye on what's in flight. Not sure a process can ensure that we can do that well or poorly.

WH: not componentizing is good, but want to make sure that the process doesn't get in the way.

BE: true.

AWS: if we see things that are tightly linked, we might treat them that way

RWN: as I said earlier, the committee can choose to merge them

WH: is the intent that the spec will be written by many people? or a single author?

RWN: the hope is that we'll have more authors for sections of the text, and it'll continue to be the responsibility of the (single) editor to maintain quality.

YK: I've found it useful to go throuh the exercise of writing spec text

LH: I like that aspect of this proposal quite a lot

DH: I've found it useful to write things in pseudo-code when exploring many alternatives...there's a cost for writing it out that way

AR: things are meant to get more "specy" and improve in quality over time

(Reviewing previous approaches to specificying new features)

BE: I think ES7 should follow this

AWB: Yes

STH: As long as we're realistic about how much process change can really be helpful

DH: Smaller features can ship and large pieces can take the time that they need.

DH: need a way to post features in progress

WH: Difficult to do refactorings the spec if various folks write parts of it independently.

BE: Integration step left out? (eg. when does feature integration to the spec occur?)
- huge costs
- potentially huge conflicts
- need to identify necessary changes early as possible

WH: Concerned that the one-edition-per-year timeline is unrealistic both for us and for our users.

WH: Once-per-year would be too much of a moving target for users. For example, writing (and re-reading) books about ECMAScript would be difficult.

WH: Imagine trying to fast-track one edition per year through ISO, with yet another one done in ECMA by the time the previous one gets done in ISO. Also note that ISO has been known to generate interesting comments.

??: We don't need to send every edition to ISO.

??: Yes we do. They don't like it when you update an existing ISO standard and don't send them the update.

??: ISO likes their specs updated once every three years.

WH: How many simultaneous internal versions of the spec (the master Word document) would we maintain? Three?

AWB: One.

WH: Really? Let's say we'd plan to ship a new edition every December. When would we fork our internal spec to work on new features for the next edition while preparing to send the current edition to the General Assembly?

AWB: Every January

WH: Then we'd be editing two editions simultaneously almost all the time.

AWB: I can handle it.

WH: Yes, but can the reviewers of the spec handle it? We have enough trouble getting folks to re-read stuff as it is.

WH: Once every two years would be more reasonable.

#### Consensus/Resolution

-




## 5.10 Function parameter scoping and instantiation

Andreas Rossberg

- [slides](default-arguments.pdf)


Default Parameters/Arguments

Goals: Convenience Feature

- Readable!

Non-goal: subtle expressiveness

Should be able to understand the defaults without looking at the function body

ARB: Two Issues

- Scoping related to the function body

(examples of really weird cases)

Solution:

    - Defaults should behave as if provided by wrapper function

Solution:

    - Evaluate defaults in seperate scope
    - Can see "this", "arguments" and function name (where applicable)
    - Can see other parameters
    - Cannot see bindings created in function body
    - Cannot see bindings created in function body LATER (via eval)


Evaluation Order

```js
function f(x = y, y = 2) {}

function f(x = eval("y"), y = 2) {}

function f(x = (y = 3, 1), y = 2) {}
```


ARB: Preferably should be const bindings _in that scope_ (not the function body)

AWB: (describes the TDZ)


Solution:

- parameters have TDZ
- Initialized in sequence


WH: No distinction between a missing parameter and explicit undefined?

AWB: We agreed on that a long time ago.

BE: I thought there was agreement/discussion?

(referring to: https://github.com/rwaldron/tc39-notes/blob/master/es6/2012-11/nov-29.md#proposal-part-2 )


(need slide examples)


DH: Most concerned with implicit rebinding

STH: The rebinding is only observable

(discussion re: mutation in parameter bound closures)

STH: Can fix this while preserving


ARB: Can change the "nutshell" to meet the needs of the concern items:

    const => let


BE: In the example that binds


AWB:

- parameters are in separate scope contour
- visible to the body scope
- the body is disallowed from creating
- "namespace" for parameters


NM/RW: (agreeable points about curly brace boundaries reinforcing scope)

BE: Summary:

- Outer Scope
- Parameter Scope
- Function Body Scope



YK: (recalling names declared in parameter scopes being rebound in the function body)

AWB: I can express this with one Environment Record

ARB: Cannot, because of eval. A delayed eval in the parameter list must not see bindings from the body

```js

function g() {
  return 3 * 3;
}

function f(h = () => eval("g()")) {
  function g() {
    return 2 * 3;
  }
  h();
}

```

AWB: Agreed


DH: (post-clarification)

- Two Scopes
    - The Function Head/parameter list
    - The Function Body

In the function head/parameter list, cannot see the scope to the right (the function body).


AWB: Any new syntax in the parameters, changes the handling?

(vast disagreement)

AWB: The spec currently says var-like bindings. If you have new syntax, they're still var-like

- Duplicates are illegal
- Rules about redeclaration



```js
// If...

function f(x) {
  var x;
}

// changes to...

function f(x = {}) {
  var x;
}

// No difference.

// But changes to...

function f(x = {}) {
  let x;
}

// Error for redeclaration.
```


(clarification re: nothing changes var bindings to let bindings)



WH: (whiteboard) What is the value of y in this example? 5 or 2?

```js
function f( x=(y=3, 2), y ) {
  console.log( x, y );
}
f(undefined, 5);
```

(discussion without a clear resolution)

CF: What about:
```js
var y = 2;

function f( x=y, y=3 ) {
  console.log( x, y );
}
f();
```

BE & Others: `y` is shadowed result is (undefined, 3)

WH: What is the value of y in this example? 2, undefined, or 5?

```js
function f(x = (y = undefined, 7), y = 5) { ... }
f(undefined, 2);
```

AWB: The original value of the parameter is used to decide whether to default it or not.

BE: Surprised. Unhappy with having to store the original values of the parameters, thereby making for two copies of each one.

AWB: Already need to do this for the arguments object.

BE: The arguments object is easy to statically detect. These are more insidious.

(no clear resolution)

ARB: Fundamendally these are mutually recursive bindings.

BE: We agreed on two scopes. Head and body.
- If another parameter has a default?


#### Consensus/Resolution

- Two Scopes
    - Head/Parameter List
    - Body
- Temporal dead zone?
- Details unresolved?


## 4.5 Modules Update

Dave Herman

- [slides](need to commit for a link)

### Generic Bundling Slide

(Debate about hash as the delimiter. Agreement that this discussion can take place elsewhere.)

DH: the browser loader is not something that belongs in Ecma-262. It's a separate spec. We can do it concurrently. We definitely want to start now and get feedback early, but it doesn't need to block ES6.

(Discussion of confusion on parsing vs. evaluation timing. Custom loaders can implement the desired esoteric use case; see caching slides.)

DH/LH/JM: Use case under discussion is lazy module execution, like AMD bundles or previous named module declarations. If you have a `console.log` inside a module, is there a way for that not to get executed?

DH: we may need to check to ensure that is possible, but it probably is. And the simplification of removing named module declarations still seems worth it.


## 4.6 Unbound variable checking

Dave Herman

DH: Proposes that if m is an imported module, then m.bar should be a compile-time error if the module doesn't have a property named bar.

WH on whiteboard: Should this be a static error in that case?

```js
module m from "foo";

with (a) {
    m.bar;
}
```

?: Modules are in strict mode and don't allow 'with'.
WH: But this isn't a module; it's just referencing one.

## Module loading

DH: it used to be that `<script async>` would be able to do I/O, including `import` declarations; I've relaxed that. Now `<script>` can do that.

DD/DH: (clarification that you can use module syntax in scripts, not just modules>

BE/DH: (discussion of allowing `<script>` without `async` to load modules.>

AR: note that inline scripts with `async` or `defer` attributes *currently* do not impact execution or parsing. This may change in the future.

JM: if people want to use `import` in a synchronous script definition, that should be OK; just throw

DH: that was the direction I was moving, but LH was objecting to. And DD has an interesting point that if we don't let `import` happen at the top level, that would work well too.

STH: What do we like?

YK: Adding a form to HTML that says "this is a module." This reduces the need to allow `import`s in scripts.

BE: that would mean we're betting on getting something into HTML

DH: yes, but you could just use the loader API.

BE (whiteboard): four cases

```html
<script>(1)</script>

<script src="...">(2)</script>

<script async>(3)</script>

<script src="..." async>(4)</script>
```

WH: how do you load a module without async scripts?

YK/LH: `System.load("module")`

WH: and you wouldn't need to import `System` or similar

DH: no, that's just a global

WH: but we have features that require modules, e.g. `iterator`

DH/YK: yes, but you can just do `System.get("std:iterator").iterator`.

WH/DH: if it's hard to use a module inline in the page, then it's hard to write the good code we want them to write.

DH: this is something that needs to happen for multiple reasons, so it should happen in HTML.

YK: `import` in top-level scripts doesn't give us modules in top-level scripts, only `import` in top-level scripts.

JM: so how do you enter the module system from HTML?

DH: two ways. The loader API, or the hypothetical `<module>`.

BE (whiteboard); top level script looks like

```js
let { keys, values } = System.get("@iter");
```

DH: BTW JS practictioners, I'd like to reiterate if you have concerns about the standard module system.

LH: Implementers will ship iterators before modules, so we need a way to get at these things more easily.

DD (jokingly): We can just use a proxy to trap `@@iterator` in the meantime.

DH: I really think this how-to-enter-the-system conversation can occur outside TC39.

BE: so we can provide two top-level environments.

BE: OK, this is all about separation of standards-body concerns.

DH: and this helps not block TC39.

(Discussion somehow turns back to `<script>` vs. `<script async>` getting module-loading abilities.)

BE (to LH): so you're worried about an attractive nuisance, people doing more synchronous loading than they should

LH: Well today, `import` always succeeds, but with this proposal, it's order dependent, like today's `System.get`.

WH: <module> as a new HTML element won't work due to HTML parsing issues. Note that scripts contain un-HTML-escaped <'s (and even larger chunks of HTML tags) while other HTML elements don't. An HTML parser wouldn't know how to properly skip past an element (such as the proposed <module>) that it doesn't know about.

DH: I think `<script type="module">` or similar is going to be necessary, for many reasons.

DH: so to recap, there's the two possibilities: allow gradual integration via `import` etc. in scripts, or the green path where you enter the module system once and then are there.

JM: Facebook wants both, so we can do initial page load and async load.

DH: that's fine, you can do that with `System.set` in the initial page load.

DH/BE: (Agreement that this should go in other standards bodies.)

## Back to Static Checking

LH: back to static checking?

BE: you have to do label checking. It's not that bad.

ARB/BE/DH: we have to implement to find out.

BE: how much parsing do you have to do?

ARB: so that's in the pre-parser for V8

BE/DH/ARB: (discussion of V8's pre-parser)

DH: somewhere in between a reader (along the lines of SweetJS) and a parser, and that's what I don't understand.

ARB: it's a parser, but it just glosses over a lot of the grammar.

ARB: to be completely honest, we would like to get rid of this thing.

BE: so we won't know if adding this static checking for modules has implementation consequences, until implementers actually go implement it. So if they have appetite for it, we should try to do that.

DH: JSHint or TypeScript could do all these things... We need to at the very least provide the basic foundation. But that would shut the door on further static things.

BE: V8, do you guys have an appetite for trying it?

ARB: I'd like to try, but not sure if it's possible within the ES6 time frame.

BE: and what about Chakra?

LH: we can try it, but we don't know...

DH: it would be OK with me to close the door on static things like guards.

BE (to ARB): wait I'm confused. If you're doing import/export checking, aren't you doing about the same work you'd be doing for full static variable checking?

ARB/LH: no

DH: import/export is top-level only; you don't have to walk the full AST

LH: you would have to freeze the global environment at the point in which the static checking happens, and test against that

DH: yes, that's right

BE: OK, so maybe it's enough to have import/export checking. That spot-in-time check could be a problem. Yes, this is a problem for monkey-patching.

DH: every time we go through these cases it takes hours to remember the global object semantics.

AWB: I thought we concluded a long time ago that we had to preserve global semantics.


DH: clarifies: only talking about within the body of a module.
- Check the script against the current state of the Global object at compile time
- This is an unsound and incomplete analysis, but, it's one that you can program to.

BE: so if we say that module bodies do not have this type of static name checking, we're closing the door to guards, hygenic macros, type checking, ...

WH: how does it close the door to guards?

DH: we always talk about guards as if we knew what their semantics were...

BE: OK, well, how about truly static stuff like types or macros.

DH: my experience in ES4 was that it was fighting with the dynamic aspect of the language

WH: in Lisp we have a multi-level time-of-execution (i.e. eval-when) system... it was very messy...

BE: I think static types and static metaprogramming as an option are shown to be not possible, really, via the fact that TypeScript and Dart are both basically WarnScript.

DH: I think that it's been shown that tooling is generally how the web solves this problem.

LH: and we could do this outside the language itself, the opt-in could be e.g. opening the debug tools instead of being in a module body.

STH: But, nobody's said that this is a horrible feature, there's just some implementer reluctance.

DH: JSHint works fine; modules alone will allow JSHint's undefined variable checking to work without having to provide a large list of globals.

LH: we've started creeping a little bit toward doing more static analysis, but this would be a big step.

DH: what do you mean static analysis.

LH: I mean more early errors. We added more in ES5, e.g. duplicate variables. ES6 has added more with `let` and `const`. This is the next big jump. It's not clear where that's trying to go... We could go much further, we could build the whole linter into that point.

DH: I have years of experience writing Racket code, which works exactly like this. Once you're in module code, you have static variable checking.

LH: but no global object in the scope chain.

DH: actually kind of, but yes, people don't use it nearly as much as on the web.

DH: The static variable checking is both unsound and incomplete; the former is because of snapshot-in-time globals, and the latter is because of the halting problem.

WH: I want a way to get static variable checking but also monkey patching. Perhaps declare which global bindings you might want to monkey-patch.


checks on import/export
