# September 23, 2015 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Sebastian Markbåge (SM), Jafar Husain (JH), Eric Ferraiuolo (EF), Caridy Patiño (CP), Mark S. Miller (MM), Adam Klein (AK), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Chip Morningstar (CM), Brian Terlson (BT), John Neumann (JN), Dave Herman (DH), Brendan Eich (BE), Rick Waldron (RW), Yehuda Katz (YK), Jeff Morrison (JM), Lee Byron (LB), Daniel Ehrenberg (DE), Ben Smith (BS), Lars Hansen (LHN), Nagy Hostafa (NH), Michael Saboff (MLS), John Buchanan (JB), Gorkem Yakin (GY), Stefan Penner (SP)

-----

## 5.5 Decorators Update

(Yehuda Katz)

https://github.com/wycats/javascript-decorators/tree/big-picture

YK: Consider this an exploration in several cross cutting features that are in development.

Starting at https://github.com/wycats/javascript-decorators/blob/big-picture/interop/reusability.md#usage-with-property-declarations-in-javascript

```js
class Person {
  @reader _first = "Andreas";
  @reader _last = "Rossberg";
}

let andreas = new Person();
andreas.first // "Andreas"
andreas.last // "Rossberg"
```

The `@reader` decorator has created the getters for `first` and `last`. ie.

```js
class Person {
  @reader _first = "Andreas";
  @reader _last = "Rossberg";
}

// Actually produces...

class Person {
  _first = "Andreas";
  _last = "Rossberg";

  get first() { return this._first; }
  get last() { return this._last; }
}
```

Assume `@reader` is defined as:

```js
function reader(target, descriptor) {
  let { enumerable, configurable, property: { name, get }, hint } = descriptor;

  // extractPublicName('_first') === 'first'
  let publicName = extractPublicName(name() /* extract computed property */);

  // define a public accessor: get first() { return this._first; }
  Object.defineProperty(target, publicName, {
    // give the public reader the same enumerability and configurability
    // as the property it's decorating
    enumerable, configurable, get: function() { return get(this, name); }
  });
}

function extractPublicName(name) {
  // Symbol(first) -> first
  if (typeof name === 'symbol') return String(name).slice(7, -1);

  // _first -> first
  return name.slice(1);
}
```


AWB: How is `super` treated, when encountered?

YK: Not yet considered, avoiding entanglement with yet to exist features, trying to stay future proof to account for them.


Moving on to: https://github.com/wycats/javascript-decorators/blob/big-picture/interop/reusability.md#basic-rules-of-decorators

DH: Decorators vs. macros: staging. Decorators good next step

YK: Consider decorators a meta programming facilities.

Basic Rules of Decorators:

- Decorators always operate on a particular syntactic element, providing a hook into the runtime semantics for that syntax.
- If the runtime semantics for the syntax include `let x be the result of evaluating SomeExpression`, that expression is passed into the decorator as a function that, when called, evaluates the expression (a "thunk").
- Decorators are not macros: they cannot introduce new bindings into the scope and cannot see any downstream syntax. They are restricted to operating on a local declaration using reflection tools.


Looking at: https://github.com/wycats/javascript-decorators/blob/big-picture/interop/reusability.md#appendix-making-propertydefinitionevaluation-decoratable

AWB: Why not capture the property key, could be computed property

YK: Don't want to make that policy decision, but can revisit.

AWB:



YK: general open question about whether a decorator function has to return a descriptor or not. alternatives like "false => cancel property creation" or "undefined" to keep going untouched, etc
...explanation of "decorate" implementation in the appendix, which is semantics, but not API.

DH: question about if decorators have to be identifiers, or LHS

YK: (explaining how computed and uninitialized property decorators would work the same)

YK: static properties would be treated the same as object literal properties, as type "property" instead of type "field"

Discussion re: `static @reader` vs. `@reader static`

YK: you have to decide where to put the decorator, I've always put it to the right. Usually modifying the builtin thing

AWB: I've always thought of it as modifying the declaration

_question about shadowing symbol bindings in Methods example, update function_

YK: easy to create shadowing hazards with symbols and function args

(explanation of decoration on properties in object literals using shorthand syntax)

DH: basically the hint is a tag to explain to the decorator function the context being used

YK: yes, this is a motivating example

AWB: ambiguity here? can't tell whether the user wants to initialize to null vs. normal shorthand syntax

YK: it's up to the decorator to decide the semantics

YK: simplest solution is to say that you have to type @reader _first: undefined directly

YK: but my suggestion is to allow decorator to decide

(describing how the motivating example would look in MM's syntax)
```js
public @reader this._first = first;
```

YK: feel less strongly about how in-constructor declaration is bad. Moving @reader to the right of public

DH: I don't think that's the issue. more important that properties are at the toplevel of class

YK: not arguing one way or the other for "initialization in constructors or not" but trying to demonstrate that that question is orthogonal to this topic

MM: accept that this is orthogonal

YK: _showing syntax alternatives for privates, not trying to bikeshed_

YK: in this hypothetical privates scenario, subclasses would not have access to superclasses' "private" fields, ie, lexical scope

YK: no reflection API to get at privates outside of lexical class body, and Proxies do not allow access to it

DH: if you want to think of it like weak map...

YK: that's not the programming model or representation. Reflect.construct is a difference

DH: doesn't affact intercession

YK: from semantics perspective, very similar

Discussion of observable differences between weakmap and this

MM: only becomes observably different in the future were it could be reified

YK: I agree. My proposal doesn't make it a weakmap, but from a programmer perspective, you could see it that way

AWB: difference: a mirror of private state needs to be presented to decorator, mirror is presented at class definition time not instantiation time...

YK: there's one difference, it's a *read only* WeakMap - you aren't allowed to set the fields

MM: about mirror: mirror is reflecting on the class...

AWB: no instance-level reflection

MM: why does the reification of the field name as part of the reification of the class need to be able to give read access to the instance value

AWB: it doesn't

YK: TL;DR new metaproperty called class.slots, effectively a limited subset of the weakmap API. only operation I care about is class.slots.for, gives dictionary with private fields

MM: some reification of the name of the private fields?

YK: just the ones that are lexically available to the class definition. Gives keys and values of properties declared

MM: why give the ability to read the instance value, but not to set the intsance value

YK: sorry, imprecise. You can set private slots, cannot replace dictionary. Think of it as non-configurable

MM: ok, good. reification is not quite a weak map, doesn't have ability to delete. Violates the fixed shape constraint

AWB: agree details need to be figured out, but big picture sounds good

YK: (describing syntax class.slotsof)

MM: class.slotsof is a special form

YK: refers to a lexical binding, not value. wanted for ergonomic reasons, if you need to do things on the class outside of the class definition lexical scope

AWB/YK: better to try to move this inside the class definition, perhaps with a static { ... } block inside the class definition

(discussion of accessing parent's slots from nested inner class)

DH: for this case, just use a local variable in parent scope, can be accessed by inner class. maybe let bindings in class definition?

YK: class.slots reification mechanism is 90% sugar

DH: (example of let binding of class.slots in class toplevel so binding can be accessed by inner class)

AWB: if you have this you have less need for static private slots

YK: static method that you invoke and delete immediately has same behavior

(discussion of private statics)

MM: thing that makes private statics different, for an instance, all contributions are collected into one instance, in static it is spread out over the prototype chain... should be able to let the prototype chain do it's work

AWB: don't think so, what if you make an instance count static. now define subclasses, don't they get their own instance count?

MM: but they can't access it

YK: (getting back to presentation)

YK: (explaining how slots.for is abstraction for get/set in decorator for public vs. private properties)


(come back to field, slot, property distinction)

BE notes:
- class elements define properties of the class prototype, class statics of the constructor
- JM's property declarations specify something else: instructions to run from `[[Construct]]` before the constructor call
- this suggests using "field" as jargon for JM's public property declarations and YK's private slot declarations
- field: instance property instruction specified by declarative new kind of class element, public or private
- slot private field
AWB recalls ARB's V8 self-hosted JS has private slots, want them to pack in instance storage

DD: cannot be allowed to run synchronous operations arbitrarily in all constructor (HTML Elements, etc.)

YK: Agree, lock down reflection APIs

AWB: Any new reflection APIs should be reviewed by Mark for security

(lunch)


YK: Summary...

- Decorators on methods
- Decorators on object literal properties

Neither rely on some other proposal

DE: previous proposal mentioned function decorators

YK: Issues

- Staging
- Where does decorator go? It's clear with class and object literal, not with function decl.

AWB: TDZ?

```js
// TDZ on access vs invocation

addEventListener("error", onerror);

@metadata("foo");
function onerror(...args) {

}
```

Unclear what this does.

DH: The decorator is not wrapping, is mutating existing object.

- not calling the decorator later.
- An identity decorator should be equivalent to not having a decorator at all
- Becomes the one place a decorator is not wrapping.

Angular use case: want to decorate function declarations for unit testing.

DH: factor out function declaration decorators. Rather have an imperfect decorator than none at all.

YK: Not actually proposing this.

MM: Happy with this at stage 1, no controversy.

YK: Important change: If expression, thunk on it. (thunking in lieu of quoting)

AWB: is there specifically a name parameter that is that thunk?

YK: yes.

AWB: trying to understand various binding contexts where wouldnt want to evaluate ...

YK: not confident that there is no case to defer evaluation

AWB: concerned about expressions _not_ being evaluated

Discussion, re: effect on computed and non-computed properties

JM: VM authors lose the ability to understand the shape?

YK: No

AWB: requires analysis at runtime, rather than compilation.

AK: might lose runtime fast path

DH: can't be any worse than existing policy of looking at the shape after the constructor is done.

AK: Once you see decorator in literal, the VM gives up until sometime later.

YK: Doesn't mean it's slow

AK: In the short term, maybe.

DH: need to understand challenges:

- already ahave machinery to analyze and find optimizations
- accept that decorators may have a slow first implementation
- why can't you then immediately optimize with existing machinery?

YK: Request moving presented today and "privates" (abstractly) to stage 1. Want to think about future additions in terms of being decoratable.

DD: Not enough discussion re: decorating shorthand properties.

AWB: This is just part of feature design details.

AK: Don't understand the "bundle".

YK: Form a champion group to work forward these features as a group.

JM: Do something outside of committee.

- Private state
- Decorators
- Decoratable object literal properties


#### Conclusion/Resolution

- Remains at Stage 1 with all changes presented


## 5.3 Async Functions

(Brian Terlson)

BT: Stage 3 proposal?

- Waldemar has reviewed, changes in place.
- Yehuda and I agree on cancelation
- Believe that cancelation can be done later

YK: If you don't type `return` in your async function, no way to the return path. May have written some finalization, but no way to guarantee

BT: Can write async that assumes some finalization, that might not happen.

YK: In the absence of cancelation, if there are no upstream promises to reject...

DD:

```js
async function foo() {
  setup();
  await delay(5000);
  cleanup();
}

const p = foo();

p.cancel();

// Would need to be...
async function foo() {
  setup();

  try {
    await delay(5000);
  } finally {
    cleanup();
  }
}

const p = foo();

p.cancel();
```

If async functions forever stay non-cancelable, no issue. If all async functions become cancelable, the hazard is introduced.

BT: async functions _must_ be cancelable. We won't add them unless they are.

- fulfilled: normal completion
- rejected: throw abrupt completion
- canceled: return abrupt completion
- ???: continue/break abrupt completion

JHD: q. about synchronous "return abrupt completion"

YK: Generator, call `return()`

"Return Abrupt Completion" is for any kind of return from current execution

BT: case where promise returned by async function, awaiting 5 promises? A promise is canceled, reasonable to handle that promise and move onto the next thing—otherwise have to nest 5 try/finally deep.

Discussion of return, cancelation and recovery.

AWB: A new type of completion?

YK/BT: Yes

JHD: Clarify need for cancelation?

BT: Cancelation important, widely wanted, they will come to Promises, and will not be able to use async functions for that. So needed for async.

Discussion re: promise cancelation, how to introduce it.

CM: clarification between the two main uses of a cancelation.

YK: Promises should be allowed to represent themselves as cancelable

CM: No disagreement.

JHD: maybe cancel is just the wrong name?

YK: cancel impacted design, want to make sure that adding cancel to async function in the future wont pown them.

BT: haven't found significant issues with cancelation for async functions

- Subtle to add to Promises, but work needed
- No obvious issue to add to async function

Hazard:

```js
async function foo() {
  setup();
  await delay(5000);
  cleanup(); // <-- not called if canceled.
}
```

...

DE: Changes since last update?

BT: No relevant.

AK: Async arrows?

BT: Waldemar reported no issues.

DD: Should use try/finally to guarantee cleanup. Strictly a hazard if someone starts calling `cancel()` on your promises.

BE: Does this push up need for finally method?

BT: Need more work there.

YK: `finally` is a handler, doesn't correspond to a completion record change, but a cluster of completion records

DD:

```js
async function foo() {
  setup();

  try {
    await promise;
  } catch cancel {
    // recover and continue?
  } finally {
    cleanup();
  }
}

promise.cancel();
```

BE: Add cancel to Promises, then ok for async/await

BT: finally is being conflated with cancelation

This is stage 0.

SP: A future where finally is important, if code written to expect, then ok.

BE: Should use try/finally, regardless of await

...

BT: Chakra has implemented async/await on Edge. SpiderMonkey may have implementation? In Babel, TypeScript, Flow.

DH: Confirmed active development in SpiderMonkey

JHD: (some q about try/finally)

SP: assume code written indefensively might fail.

More totally useful, important, completely clear and not repetitive discussion about how bad code might fuck up if promises are canceled.

#### Conclusion/Resolution

- Stage 3 acceptance



## ECMA-402 Update

RW: blah blah blah

AWB: A lot of proposals, what is the criteria for new additions

EF: Paving cow paths, otherwise remain in library code. Working on proposals for plural and relative-time formatting.

CP: For ES2016, we will focus on exposing low level apis for existing abstract methods. New features will probably arrive in ES2017.

DD: FirefoxOS devs discovered real needs that are being reported.

EF: Getting the locale data (e.g. CLDR data) into/accessible-by the runtimes is a focus because it avoids haivng to transfer larges amounts of data over the network. NumberFormat and DateTimeFormat have large amounts of locale data to back their APIs; looking to do something similar for plural and relative-time formatting proposals.

#### Conclusion/Resolution

- Send new HTML to Ecma




## 5.10 Proposal: String#padLeft / String#padRight

(Jordan Harband, Rick Waldron)

https://github.com/ljharb/proposal-string-pad-left-right

JHD: (run through history of proposal)

- min length vs. max length semantics? min length semantics with repeat. max length is the desired functionality.

AWB: re: min length and max length, concerning unicode characters, code points.

JHD: Issues will exist in _any_ string apis. This API doesn't use code points, can be changed to do so. Length property wouldn't be useful. If filler is a surrogate pair, I can use a multiple of it's length...

- Max length is in code points?

DH: re: terminal output, do control characters count against length?

JHD: Yes, always.

Discussion, re: code points vs. latin centric characters

BT: This API is no different than existing APIs

JHD: really want to solve this? Change everything to use graphemes

AWB: interpret "length" as simply: "number of occurrences of your fill character"

DD: assumes the rest of your string is Emoji. Never going to get the width correct.

AWB: if it doesn't do the right thing in the real world, why?

BT: Trying to do things beyond the simplest use case is just untenable.

RW: Intl could adopt responsibility for a non-latin character set handling?

BT: Agree.

Derailed into discussion about what gets to go in the standard library and what gets defined in a standard module.

DH: (To Rick) Not cool to attack other specs when inclusion of proposal is questioned.

Note: I made a comment that if two string methods are "too much", then we should revisit SIMD for the same concerns.

Back to padLeft, padRight...

DH: Clearly important if implementers are agreeing to implement before other features.

Discussion re: stage 1 or 2?

AWB: For stage 2, controversy resolved.

JHD: Then stage 1.

#### Conclusion/Resolution

- Stage 1 acceptance
- Reviewers to be assigned.


## 5.11 Proposal: Object.values / Object.entries

(Jordan Harband)

https://github.com/ljharb/proposal-object-values-entries

JHD: Need is obvious.

Question about return: iterable or array? Spec wants to be an array.

DH: Confirm, when array you get a snapshot. If an iterator, then updates would be shown, which breaks from `keys`

#### Conclusion/Resolution

- Stage 2 acceptance


## 5.12 Proposal: String#matchAll

(Jordan Harband)

https://github.com/ljharb/String.prototype.matchAll

JHD: pass a regex, returns an iterator, each yield returns what exec would.

Notable:

- doesn't accept a string, not coercion
- always adds the "g" flag
- makes a "copy" of regexp to avoid mutating

BE: reason for not including string?

JHD: Enforces a better practice

AWB/BE: valid, but creates an inconsistency, should be updated to include string.

JHD: Will update then.

AWB: Needs to work with RegExp subclass as well.

DE: Will call RegExp.prototype.exec, can leak the RegExp.

Confirmed.

Specify as `@@matchAll`

AWB: Default impl of `@@matchAll`, see default `@@match`

DD: Not a lot of "library" code

BE: Won't find it there, it's generally in "open code". Steve Levithan wrote about this.

YK: Ruby has a scan method, which I use frequently.

DD: an alternate: add another flag that avoid global state

nah.

DE: Still leaks.

Can we avoid the observable "cloning"?

BE: Take back to work through this

Discussion of algorithm approaches.

YK: Missing? A thing that's like exec, but gives you back the lastIndex?

AWB: `exec()` could grow an additional argument for start position.

The name stinks, but nothing really better.

- `matchEach`? It produces an iterator... (some agreement)

nah.


#### Conclusion/Resolution

- Stage 1 acceptance
- Accept strings
- Allow RegExp subclass
- Default impl of `@@matchAll`, see default `@@match`


## 5.9 Trailing commas in function parameter lists

(Jeff Morrison)

JM: Updates since previous...

MF: Change arity? Object, array...

RW: No, ignored.

YK: Symmetry with arrays? Holes on the call side?

nah.

BE: (revisit C issues with trailing commas)

AWB:

Missing:

- evaluation rules
- static semantics rules

BT: Don't need to block on this, can be delivered later.

Quick run through trailing comma in parenthetical expressions

nah.

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers
  - Michael Ficarra
  - Brian Terlson


## Process Discussion

- A plenary day
- Two presentation and discussion days


### Exponentiation Operator

RW: Precedence issues:

BE (On whiteboard): -x^y in math and every other language means -(x^y)

Old spec is (-x)^y

AWB: Does the potential confusion of this (whichever way it happens to be decided) suggest we should pull it out?

BE: No, math and every other programming language do it this way...

AWB: I agree if there is an exponentiation operator the precedence should be followed going back to math. Since this potential confusion has been identified, we have a perfectly good way to do this...

RW: This is a case of the new process working as it should - implementers gave feedback, proposal is now better.

YK: Arguing for -5 ** 2 being (-5) ** 2 because people will think that's how it works.

YK: I think minus is kind of an edge case and I'm happy with this either way. Is my intuition wrong? If everyone else thinks the answer of what the proposal is now, then fine.

BE: Problem is people thinking minus is part of the literal.

DH: For math it seems obvious that -5^2. But for -5 ** 2, because of the whitespace around the infix operator. Even without space, - seems to be part of the literal.

BT: Python docs says don't use space.

YK: Doesn't JS precedence win over all other precedence?

RW: Jason's intution matches that of all other programming languages that has intuition operator.

YK: This is cargo culting.

BE: Let's say that fortran did it to be mathy and everyone copied it. There's still a precedence argument.

YK: I'm a rubyist. I had to look up what is in ruby. People don't know ow it works.

DH: We are operating in the context of an industry that gets expectation from historical context or JavaScript operators?

BE: You should be parenthesizing.

RW: Coffee's ** operator matches Python and Math and Ruby.

JH: Will value types complicate this? Will people copy/paste from C programs or other things?
JS is eating the world. This will cause friction if we break historical precedence.

YK: I don't copy/paste code from other languages.

BE: Options: 1) wall of confusion, do nothing. 2) math/programming language precedence. 3) Javascript/dave/unary minus binds tighter people.

RW: Mark advocates for abandon/withdraw (1)

BE: Let's vote...

1: 4, 2: 15, 3: 2 (including MM virtual vote)

DH: Let's be clear - people might copy code I guess, but effectively zero people have an intutition about this from other languages. Agree people have an itutition that ** is the exponentiation operator. But people usually try to avoid dark corners so they never develop an intuition for negative bases.

I also reject that we must do what math does.

DD: I disagree.

BE: New option: 4 - it is an error to combine ** with unary minus. Code you port doesn't have this almost for sure.

No consensus... people are leaving.
