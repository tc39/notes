# September 19, 2013 Meeting Notes
-----


John Neumann (JN), Dave Herman (DH), István Sebestyén (IS), Alex Russell (AR), Allen Wirfs-Brock (AWB), Erik Arvidsson (EA), Eric Ferraiuolo (EF), Doug Crockford (DC), Luke Hoban (LH), Anne van Kesteren (AVK), Brian Terlson (BT), Rick Waldron (RW), Waldemar Horwat (WH), Rafeal Weinstein (RWN), Boris Zbarsky (BZ), Domenic Denicola (DD), Tim Disney (TD), Niko Matsakis (NM), Jeff Morrison (JM), Sebastian Markbåge (SM), Oliver Hunt (OH), Sam Tobin-Hochstadt (STH), Dmitry Lomov (DL), Andreas Rossberg (ARB), Matt Sweeney (MS), Reid Burke (RB), Philippe Le Hégaret (PLH), Simon Kaegi (SK), Paul Leathers (PL), Corey Frang (CF), Mark S. Miller (MM)

-----

## Agenda

(discussion re: destructuring concerns)


AWB: If you want to not throw for no value you have to define the default value.

DH: That's not YK's position. He wants to not throw.

DH/AR: The way you pull things out of an object is to do a [[Get]] wich does not throw and returns `undefined`

WH: What about `{a:b, c:{x}} = {}`? If you emulate the [[Get]] model, you'll still throw on a two-level destructuring pattern. Not clear what the useful point of sometimes soft-failing and sometimes hard-failing, even within the same pattern, is.

DH: That is not the same issue.


DH: In the case where the thing you are destructuring is an object, and the property you're looking for is not there, it should not throw. That matches existing JavaScript

```js

{ a: { b: c } } = {};

```

The inner object is the source of the error.


ARB: Confused because notes different from what just said.

AWB: Currently spec throws unless a default value is provided.

YK/DH: Not happy with that outcome.

RW: (recalling agreement between AC/YK/RW at last meeting on feeling that we're not following expected JS behaviour)

DH: The obvious case is using an object.
- What does the syntax most naturally correspond to?
- Looking for smooth refactoring paths


ARB: I don't buy that it will be common to refactor like this

ARB: Common bug that you get `undefined` for `o.x`

DH: That is just how JS works and we cannot redo JS.

AWB: I can represent YK's position. Personally fine either way. But we need to decide. We cannot keep putting this off.

DH: I believe we would dissappoint the community if it threw. It is just too different from what they are used to.

AVK: My recolection was that we woudl go with no exception and maybe add a `!` in the future.

LH: Ultimate consensus at last meeting was fail soft, waiting for ARB to object.

ARB: Other consistency arg with a future formal pattern matching

AWB: Yes, but for pattern matching we'd have something else

LH: If pattern matching used something else, and you were in that context, it's not a stretch to tell people there are new rules in that context.

ARB: Results in two semantics for one syntactic class (patterns). Bad for consistency and language economy

DH: Whatever familiarity from other languages and contexts, we need to align with JS and align with fail soft

AR: (to ARB) the practioners in the room are consistently disagreeing with your position.

RW: In a pattern matching context it is fine to do things more strict. People will not be surprised by the difference between destructuring and pattern matching

DD: (recalling recent extensive destructuring experience)

DH: Opposed to having two different semantics. Throw in destructuring but fail soft in [[Get]].

JB: What was the problem with `?`

DH: Default behavior is backwards.

AWB: There plenty of unresolved syntactic and semantic issues and not enuogh time to get them done in ES6.

JB: and `!`?

AWB: No bang for ES6

RW: opposed to re-appropriation of `!`...

ARB:  I think this makes for a worse and more error-prone language. But acknowledge that I am alone and I will not stand in the way of this.


#### Consensus/Resolution

- Throw if not an object
- Then do a (fail-soft) [[Get]].



## 9. Promises
Domenic Denicola

https://github.com/domenic/promises-unwrapping

DD: Consensus on AP3. Some issues with extending toward the future. Some bugs in the DOM spec. Tried to fix those.

MM: Recommending that TC39 adopt promises-unwrapping so that w3c can proceed, and TC39 also get consensus on adding `.done`, `.flatMap`, and `.of`.

AVK: promises-unwrapping is wanted for shipping in browsers. A lot of specs that rely on promises and we'd like a blessing.
- AP3 was initial consensus
- changes were made to make new consensus

MM: Can we agree on promises-unwrapping to move forward?

STH: The promises-unwrapping spec, in that it doesn't include ... (Google Hangouts misbehaves.)

MM: (explaining semantics and benefits of flatMap etc)

DD: without flatMap they will unwrap on the way out

STH: unwrapping?

DD: input side doesn't unwrap, only the output side

STH: Then I'm happy with this.

MM: No dissent from promises-unwrapping with the addition of .done, .flatMap, .of

WH: What is the unwrapping doing

DD/MM: explains that unwrapping occurs as long as there is a then() on down until there is no then()

ARB: (to Sam) I share the compositionality concerns. Are we sure there is compositional abstraction if you use two levels of abstraction?

STH: if you ever write .then, your system is not going to be compositional where promises are a data type (or you'll have to do extra work)

WH: What is a then-able promise?

DD/AVK: Just an object with a then function and you assimilate. It's "promise like".

WH: .then does what?

DD: .then is how you extract values

MM: (explains unwrapping again)

WH: What is .flatMap?

MM: A promise accepting another object, causes the .flatMap to

CF: it's "then" without magic

MM: it's lower level, .then is built on top of .flatMap

ARB: .flatMap is parametric and does no magic on it's values, where .then does

LH: the only way you can convert a thenable to a promise is return it from a promise. `Promise.cast` and `Promise.resolve` will not convert a thenable?

MM/DD: no, `Promise.cast` and `Promise.resolve` work the same way, storing any thenables as their value, and then the unwrapping happens when you call `.then` on the promise who has that stored as its value.

WH: What is ["The ThenableCoercions Weak Map"](https://github.com/domenic/promises-unwrapping#the-thenablecoercions-weak-map)

MM/DD: (explanations of security concerns)
- No code contributed by the arbitrary object will execute during that call
- assimilation of thenables was constructed so that the object cannot cause side effects during the operation

DD: It's clearer when the code intends to run async, vs. some code running when assimilation occurs and some code later.

MM: Then I should talk about .done now

AVK: I think we have consensus on promises-unwrapping, and can defer `.done`.

MM: declaring consensus now is crucial to unblock the DOM. If we can defer `.done` I am fine with that.

(General agreement that promises-unwrapping with .flatMap and .of has consensus and .done can be deferred.)


LH: Will need to add cancellation capabilities
- Want to make sure that if we're sticking this in DOM apis, make sure there is back-compat safe to add them

AVK: I believe that Mark and Domenic have given plenty of thought here

DD: (confirms)

MM: Notes that Test262 will need to be extended to support async testing

DH: This is really well developed and thoroughly spec'ed... what is the possibility of getting this into ES6?

(murmurs of insanity)

AWB: We're close approximate spec deltas here. Not quite cut and paste, but encourage that we might be able to fill in the editorial aspects.
- What about the event loop interaction

MM: I think the right precedent is Object.observe, it was very well written, very complete and we adopted to ES7 (for as much as that means)

DH: Doesn't need to be tied to the event loop
- event loop is very clear.
- would love to recast the loader api in terms of promises.

MM: That's a better pay off

AR: Not quite that simple... in many cases result in void return types

AR/DH: agree that this is better overall

AWB: More confident about Promises, vs other features. If editorially practical, we should try.

AR/AWB: No syntax, so no issue there.

PLH: Makes life easier for w3c specs as well.

AWB: What about an ECMA technical report in the interim? Or an independant spec in the interim?

DH: In practical terms, that would mean I couldn't use them in the Loader api?

MM: w/r to synergy between module Loader and Promises
- how much of a difference does it make, if you could rephrase the api in terms of promises?

STH: Many methods would change to use promises, a few cases would be drastically simpler, and all cases would be improvements in useability.

MM: I would be over-joyed to have this in ES6

DH: Most important to this: Domenic, Anne and whoever need to provide Allen with complete works as needed.

WH: It's weird that if having a "then" property that's not a function is equivalent to not having a "then" property (the object is considered non-thenable), but having a "then" property that throws prevents the object from being returned from a promise. Too ad-hoc.

WH: Let's say we introduce structs where if you mis-define fields it throws?

DD: if you introduce changes like that, you'll have to re-factor checks throughout the spec and .then can be refactored in kind

DC: To be clear, a thenable is:

DD: An object that has a .then property whose value is a function (is callable)

WH: understood (but don't like it)

DC: ok

AWB: A bit of legacy around "callable"...


(Discussion about detecting then properties)

DD/MM: JSON.stringify precedent: determining whether to return a property based on whether it's callable

AWB: JSON.stringify is filtering...

DD: But same meaning

AWB: These callability tests are unnecessary?

DD: Proven to be necessary

WH: To avoid objects with .then that isn't callable... Why aren't we using [a well known symbol] instead of the string "then"?

AR/DH: There is no way we can introduce this feature that has a change like that.
- A lot of existing code to interop with

DC: "then" is the wrong word.

MM: for a long time I fought for "when", but there is too much web-reality that calls it "then" and it wasn't worth fighting

WH: What happens if a thenable doesn't call onFulfilled or onRejected?

DD: then it stays forever pending. This is a valid use case, e.g. a server that never responds to a request.

DH: and it's actually a really nice zero of the promise algebra!






#### Consensus/Resolution

- fast forwarding Promises into ES6 as per https://github.com/domenic/promises-unwrapping
- Postpone with option of revisiting
- cancellation mechanism
- discussion of done method




## 7. Object.observe status report.

Rafael Weinstein
- [slides](http://slid.es/rafaelweinstein/object-observe-sept2013) <--- etherpad fucks this up :(


Discussion related to how nested observers should chain.

AWB: Maybe have `performChange` do take one more parameter, that is the record a function that calls notify.

NM: Or have `performChange` return the record.

AVK: You can skip the `object` in the record because the notifier knows which object it is working with.

MM: Does not seem like a good path to not handle expecptions???

RWN: The mutation records from array methods are about the intent to mutate the object. It cannot tell what the new state is of the object.

MM: If somethings fails, and you try to perform the same operation on a replica you will get the same failure on the replica.

RWN: I attempted to do the work and this what I intended to do.

MM: I'm fine with this as long as it maintains the ability to keep a replica consistent.

AWB: Would it be ok to not record property changes on array propert changes.

WH: What kind of a change record would "sort" generate? In particular, how would the change record describe how the array was sorted (ascending, descending, by what key?)?

RWN: If the array only said it was sorted then the code would need to keep a copy around to know what happened.

WH: In that case would reverse also emit a sorted change record?

AVK: Is "sort" proposed.

EA: No

(discussion about observing changes of attributes such as making an object non-extensable)

AWB: It is uncommon to care about property changes for lists.

AVK: <input type=file>.files might want to use Array.observe. It only cares about the items in the array.

AWB: It seems strange to use observer for this use case.

DD: generally DOM has a lot of things where the only difference from normal ES constructs is that when the object changes, you need to update something on the user's screen. New subclasses seems unnecessary, there's no new API.

AVK: Considering using array or a small sub class. Reusing array as is easier because you get a lot of things for free.

AWB: Use more specific class than array.

(Discussion about Array.observe vs. Object.observe.)

RWN: Allen, I think what you're saying makes sense, and it's a specific instance of a more general thing of filtering, which we may want for performance. Let's defer that.

CF: An API question---what about { new: newCallback, updated: updateCallback, ... }, instead of (callback, ['new', 'updated', ...]).

DH: yes, callback-last is definitely important

RW: (explains in depth the benefits of this)

RWN: I'm not especially excited about separate callbacks, because often you want a stream of change records, and not to react individually to each of the operations.

RW clarifies with some code Corey's proposal:

```js
// either

Object.observe(foo, {
  updated: function() {},
  deleted: function() {}
});

// or

Object.observe(foo, function() {});
```

RWN: This is an antipattern. We don't want to split the callback like that because the change log is the important part and if you split it it is hard to get ordering right.

RW: The misunderstanding: the list of change types is a "white list" of change types to include in the change list, not a 1-to-1 "events to handle" list.

WH: Want the names to be consistently present tense: new, update, delete, prototype, reconfigure

RWN: prototype is used when [[Prototype]] is changed

WH: how often do you observe an object whose prototype chain changes?

RWN: well, a common use case is using the prototype chain to represent concentric scopes, e.g. Angular

RW: It is valid to want to observe changes in the prototype chain, but I don't think Angular is a good supporting argument.

DD/RW: Object.setPrototypeOf is the supporting case for observing prototype replacement

DD: so then why not include observing the changing of extensibility

AR/AWB/RW: I think we need that for completeness anyway.

MM: yes, any mutable state should be observable; as long as it is observable by polling, `Object.observe` should work.

RW: agreed, you could definitely implement it.

Moved on to "Thought Experimental" slide.

WH/DD: the names on this slide are weird. "deleted" doesn't work (it's already used by normal objects). "set" vs. "updated". It seems like namespacing is necessary.

RWN: Agreed, there is a namespacing issue.

WH: Would prefer to keep the simple notification names ("splice", "set", etc.) to match method names that generate those notifications. It would be bad if we got into a pattern where method Foo generated ArrayFoo notifications when used on arrays, MapFoo notifications when used on maps, etc. This would be an annoying abstraction leak for observers who don't care which particular data structure is used to store the things being observed.

RW: Map and Set operations have potential to be deceptive; since the actual data is held internally, freeze operations have no effect (freeze is on the surface for tamper proofing), so there might be a situation where a Map or Set is "accidentally" assumed to be locked down but is still observable. FWIW, I do like the addition of change observation for Map and Set.

MM: Freeze is not about freezing the object, it is about making it tamper proof. I think we can postpone this to ES7.

RW: (to RWS) we can talk about this more offline

AVK: it would be nice if there was a recommendation for how to do namespacing, for other specs etc.

WH: Asks about ordering semantics

RWN: there is an unresolved issue about ordering of different types of work in microtasks (promises vs. `MutationObserver`s vs. `Object.observe`); this is still undecided.

... Moved on to the performance slides.

WH: The slides are comparing the proposed language mechanism to polling, which is a bad choice for the comparison control group. If I were implementing observers in existing ES5, I definitely would not do polling; I'd set dirty flags and keep a list of dirty things. That should be the control group for the performance comparisons.

RWN: the point of these graphs was not to show anything particularly interesting, but to show that there were no major surprises awaiting implementations.

AR: What do you need from this group? How close are we to being "done"?

RWN: Got good feedback on a few things to change. Maybe next meeting we'll have something that's really "done" and we can't go any further without implementations.

AVK/RW: just be sure to update us on es-discuss when you make changes.


#### Consensus/Resolution

- failure cases, what to do when an exception happens midway through performChange
- change type naming, eg. "sorted" => "sort"
- 2nd/3rd argument order (offline discussion)
- Post to es-discuss when wiki page is updated.


### Licensing Concerns?

AWB: there was some discussion on the mailing list...

RW: I am pretty sure that was a troll.

STH: So this same guy actually came on the scheme mailing list and behaved similarly. It seems he just wanted to upload the PDFs somewhere, and did not actually care about the contents of the spec.


### 8. Data Parallelism

Dave Herman & Niko Matsakis

DH: I wanted to explain why the issue of sequential fallback is not as simple as "we should just throw" for synchronous code.

NM: I want to separate out throwing on non-parallelized execution vs. non-parallelizable execution. The former is not what people want.

(General agreement.)

DH: yes, you want the engine to be able to make dynamic decisions about whether parallelism is profitable.

NM: it turns out there are many reasons why an execution may be non-parallelizable, not all of which a user should concern themselves with. There are implementation constraints that make it very hard to parallelize in some cases, but in theory they should be parallelizable. For example, in SpiderMonkey, string operations: they are currently implemented in a very scary imperative way that is hard to make threadsafe, but from a high-level perspective it should be obviously parallelizable. (It's not mutating shared state.)

NM: Our conclusion was, we would instrument our JIT compiler to generate parallel-safe code, which needs a warmup; we'll run sequentially for a while, before we're ready to *try* parallel execution. It's going to be hard to implement a parellization strategy that doesn't work like this.

ARB: I totally agree.

DH: Cannot get to paralelizing until have done some serial exucution to gather information.

NM: Implementations will grow the set of code it can parallelize over time. Cannot force any constraints on the closure. The alternative would be to instrument the entire the engine ot keep track of what cannot be parallelized.

NM: The other option is to formalize what can be parelized in the spec. For the end user they will still not know what will run in parallel.

EA: What is preventing engines for running Array map/filter etc in paralel if it cannot be detected.

DH: It would be an interesting thing to try out.

NM: There are other methods like reduce that cannot be parallelized. We therefore still need the par* methods.

ARB: Throwing if it is not parallelized is not sensible because it is too hard to specify what things can be parallelized.

DH: The order is non deterministic. That is the big difference. And this makes it easier to parallelized.

NM: THe order is only crucial for reduce.

WH: Even if an operation has no side effects, if several of the constituents of a map throws, you might get the wrong exception.

WH/NM: (discussion about definition of side effect, whether throw is a side effect.)

NM: 1) mutation of external state; throws; and straying into native code (that we don't have a safe version of).

LH: if I'm interpreting this correctly, it sounds like the whole parallel JS thing becomes less of a standards thing, and more of an implementation concern, except there will also be some non-deterministic parallelizable array method.

DH: but it's also important to give the parallelism recommendations teeth because then authors can depend on it.

NM: it's also useful to have a specification available for users to read to understand what works where. It doesn't effect the semantics, and it probably doesn't belong in ES spec, but it would be useful to have to point users to.

NM: for example we only lazily make `function.arguments` do crazy things, so that's not an easy thing to spec.

WH: do we really need new nondeterministic array methods? I agree that you don't want reduce operations that have serial semantics (add first element to second, the sum to the third, the sum to fourth, etc.) but could deterministic tree operations (add elements pairwise, then add the pair sums, then add those in paris, etc.) be sufficient?

NM: the main one is `reduce`. You *can* do a tree-reduction, but that is not always the right thing to do on all architectures; it has a performance cost.

DH: also, we want to have developer tools give feedback on what can be parallelized; we are talking with a PhD student about working on this.

ARB: How does this interact with GC?

NM: Works well using nurseries.

AWS: A version of region based collection.




## Newly Added to Global Object

DH: Straw proposal `Symbol.iterator`, `Symbol.create`

AWS: A single method on Symbol, `Symbol.for('iterator')`

EA: You can have get and set and use set to register user defined known symbols.


MM: registration needs to be like interning

DH: We're only talking about location of these new things.

EA: Libraries want to register well known symbols

DH: This is not what LH is trying to address

MM: Built-in symbols, as specified by the spec: no mutation and no global channel

Well-Known Symbols available on the Symbol object itself

LH:

- well-known symbols
- Symbol
- Reflect
- System



LH: We should be designing the library system independent of modules

DH: (clarifies) Implementation dependency graph, can't rely on these new objects without knowing where they come from (modules)

LH: We need to decide, concretely, if these are exposed on the Global Object.

(RW clarifies for MM)

MM: Will this break the web?

LH: Conflicts are soft conflicts because the objects are configurable

LH: How will symbols be held?

```js
Symbol.iterator = @@iterator
Symbol.create = @@create
```

The value is the _initial_ value (as done with other items in the spec)

writable: false
configurable: true
enumerable: ?



AWB: need to discuss @@toPrimitive

RW: Does this really need to be exposed?

AWB: It's useful for any objects that have internal data (like Date)








#### Consensus/Resolution
- Global
- Symbol
- Reflect
- System

- Well-known symbols defined as properties of Symbol
- using given name, no "@@"
- https://people.mozilla.org/~jorendorff/es6-draft.html#table-6




Next Meeting:

Nov 19 - 21 at PayPal
