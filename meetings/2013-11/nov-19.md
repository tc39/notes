# November 19, 2013 Meeting Notes
-----


John Neumann (JN), Allen Wirfs-Brock (AWB), Yehuda Katz (YK), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Rick Hudson (RH), Matt Sweeney (MS),  Rafeal Weinstein (RWN), Alex Russell (AR),  Rick Waldron (RW), Dmitry Soshnikov (DS), Jeff Morrison (JM), Sebastian Markbåge (SM), Ben Newman (BN), Reid Burke (RB), Waldemar Horwat (WH),  Doug Crockford (DC), Tom Van-Cutsem (TVC), Mark S. Miller (MM)

-----

## Welcome

JN: (Introductions)

DC: (Logistics)

JN: ...updating status of RFTG
...Adopt agenda?

Unanimous approval

JN: Approval of Sept Minutes?

Unanimous approval

## ES6 Status

AWB: (presenting Luke's spreadsheet with remaining features that need attention)
https://skydrive.live.com/view.aspx?resid=704A682DC00D8AAD!59602&app=Excel&authkey=!AAMixsO0TuyPYwc

...Function.prototype.toString still needs attention

BE: Mark is to write spec, in this case under-specify

AWB:
- Refutable pattern matching is deferred
- still need specification for enumerate / getOwnPropertyKeys/Symbols in various places
- Proxy handlers, cut
- C-style for-let

BE: We agreed on semantics

AWB: We agreed on outer capture, but won't try to update per iteration. Need per iteration binding.

YK: This is the consensus I recall

AWB:
- Modules, static semantics complete
- No loader/runtime semantics yet.
- Dave will have a complete spec this meeting

YK: (confirms that it's complete)

AWB: Yes, but not yet in the spec.
- Standard Modules deferred.



(TVC dials in)

## 4.4 Finalizing the Proxy API for ES6
(Presented by Tom Van Cutsem)

TVC: First three relate to es-discuss threads, re: simplifying Proxy. Jason Orendorff expressed concerns.
- hasOwn()
- invoke()

WH:

AWB: Looked for traps for call

BE: Total traps?

AWB: Now 14 traps.

BE: Cool. Not including hasOwn()?

AWB: Not including

TVC: The next is `invoke()` trap. Leave out for now to avoid inconsistencies with `get()`?

YK: How do you implement virtual objects? ie. an object whose `this` object is always the proxy. Can't do it reliably without invoke.

WH: Still not reliable, even with invoke.

YK: So what are the cases?

AWB: Can still implement a virtual object or full membrane, or thin wrapper.

YK: Not the use case. Want to make an object where `this` is the proxy and not the target.

TVC: Are you arguing that `this` should remain bound to the proxy object upon forwarding? If yes, this is the default.

YK: As long as maintaining equivalence between `foo.bar()` and `bar.call(foo)`

AWB: yes.

TVC: Regarding Handler API: not enough motivating use cases for proxy handlers without community use. Propose to defer.

AWB: Let's publish the library code
TVC: It's already on github, as part of my shim. I will publish it as a separate project to make it more accessible.

TVC: `Proxy` as a constructor? Currently, no `new` throws TypeError

AWB: Not really a "class"

AR: You create new ones?

AWB: No prototype

AR: Gives an instance, why not "new"

AWB: Would need an @@create

YK: Then shouldn't be capitalized

BE: We can do "proxy"

AWB: (to Tom) the concern is: if it's not "new-able", should it be little-p proxy?

TVC: Given choice between little-p proxy and requiring `new`, I prefer `new`

RW: Agree with Alex, `new Proxy()` creates new Proxies, so allow `new`

AR: Let's not duck the charge on @@create.

WH: Proxy is not a class.

YK: ...But has allocation

WH: I would hate to specify what happens when subclassing from Proxy

AWB: Must create a special constructor

TVC: @@create doesn't make sense here

BE: Is Proxy a class?

(General: no)

TVC:


DS: What is typeof and instanceof

AWB/BE: object

BE: Capital P

AWB: Ca???

DS: Whatever Proxy creates?

BE: That depends on what is created.

DS: By default?

BE: typeof depends if there is a call trap. instanceof depends on the prototype chain. All in the spec, so can create any object (apart from private state issues)

AWB: Ok, into the future... would value objects allow `new`?

BE: (int64 example)

...back to why should `new` throw on Proxy constructor.

BE: Seems counter intuitive: Proxy constructs objects. `int64` creates a value. callables construct objects

[ inaudible ]

BE: these are object constructor functions, which is what people want to do with "new"

AWB: this is somewhere in the middle between newing a class and a random function that returns an object

BE: in either case, it returns a new object and proxies are factories for object

AWB: yeah, I agree...spec currently calls them "proxy factory functions"

BE: pretty weird not to have "new" on this.. feels natural

YK: Intuitively, the difference between returning an object and not a value

AWB: we can do it...need to make it an exotic object with a special [[Construct]]

AR: agree. Making it exotic is good.

TVC: what's the summary?

AWB: we allow new, we do it by making it exotic.

EA: Do we REQUIRE "new"?

WH: what does Map do without `new`?

EA: Throws

BE: Why are we requiring `new` again?

RW: Needed for subclassing

AWB: my objection is that we're trying to tell a story about objects, classes, and @@create... this confuses the story

YK: there's already a weird split...saying you have to use `new` avoids the confusion

AR/RW: agree

AWB: we could go either way, and it's subtle, but most people won't see the subtlety

RW/BE: the conservative thing to do is to throw now and we can walk it back later

AWB: agree

JM: Removing the throw might change control flows?

BE: non-issue, rare.


#### Consensus/Resolution

- Drop `hasOwn()`
- Drop `invoke()`
- Postpone proxy handlers API
- REQUIRE `new Proxy` by making Proxy an exotic function that has it's own internal construct. (this is only "action" item)


## ES6 Status (cont)

AWB:
    - Symbols in place
    - Binary data deferred
    - RegExp look behind deferred

WH: No comprehensive specification of which variant of RegExp lookbehind was wanted. Followed up on es-discuss and got no good answer to questions.

AWB: No one has stepped up, deferred to ES7
- Completion reform has bugs, but that's just work for me
- Global scope, Dave has some possible changes he wants to discuss at this meeting
- Eval scope, now simplified because can't eval a module
- function scope, needs spec some design issues still open
- Promises, Domenic has a complete delta, just needs to be added
- Internal Method Invariants. If we're going to keep this section, someone needs to provide spec ready text.

MM: If Tom will collaborate with me on this, I will commit to producing this.

AWB: I can live without this section

MM: ES5 had that section, I will talk to Tom about creating this for ES6

...

AWB: For the end of this year, we need a feature complete spec. Essentially a "candidate spec". This means all the features there are sufficiently specified to allow an implementor to implement. I think we have a shot at it. There is work to do. Questions remain in modules, but Dave can update us. Dave and Jason (Orendorff) have been working like crazy to finish modules, including a reference implementation.

MM: The spec we want to be feature complete includes modules?

AWB: Yes.

MM: The loader stuff as well?

AWB: Yes.
... Over the next 6-9 months, we need implementors to work and provide feedback. We should push forward with what he have now (this includes modules)


## 4.1 Review Latest Specification Draft
(Allen Wirfs-Brock)


(request slides)


Discussion re: arguments.caller, arguments.callee in non-strict and strict mode.

Discussion re: default param aliasing

BE: (tries aliasing on SM)

YK: Issues with arguments.caller, arguments.callee in framework uses.

BE: Do we want three types of arguments?

YK: It's not really three types

...

BE: Fair to say there are three observably different kinds of arguments

-

YK:

MM: Adopt some semantics where aliasing

BE: Deep aliasing of destructured parameters is bad

AR: Walk back poisoning entirely?

MM: No.

MM: Any simple parameter is aliased and any new style parameter is not
... on defaults I could go either way.

AWB: Back to scheduling

BE: If there is destructuring, no deep aliasing.

WH: Easier to explain if the rules are compositional.



#### Consensus/Resolution

- Parameter issues
- default params, alias is independent
- destructuring has no name for top level object, no aliasing
- rest has no aliasing
- non-strict mode arguments have unpoisoned caller and callee


... Continue discussion re: do Arrow Functions have an arguments object?

#### 4.3 Should 'arguments' in an arrow body be from nearest outer defining scope, or early error?
(Brendan Eich)

AWB: Arrows don't have an arguments object, but `arguments` is a keyword inside arrow functions.

WH: `let arguments = ...`?

not allowed, recapping ES5 strict rules that were applied to new forms in ES6.

questions about conditionally reserved words

AWB: what if the outer function _does_ say `let arguments = ...;`, what is it in the arrow function?

MM: (whiteboard)

```js
function f() {
  var arguments = 1;

  [3, 2, 1].forEach(v => v + arguments);
}
```

YK: `this`, `super`, `arguments` should refer to its outer.

WH: 11.6.2.2 and 13.2.1.1 are inconsistent. The former omits keywords such as "arguments", while claiming to be based on the latter.

#### Consensus/Resolution
- `arguments` is lexically captured by arrow functions
- 11.6.2.2 and 13.2.1.1 are inconsistent (file a bug)
- yield cannot mean "yield to the outer"


AWB/BE: yield just follows the rules for yield

MM: (whiteboard)

```js
function foo() {
  var yield = 8;
  return function * bar() {
    yield baz();

    function baz() {
      return yield;
    }
  }
}

var f = foo();

console.log(f().next().value);

// 8
```


#### AWB: ...Computed property keys: No dynamic checking for duplicate computed property name in object literals or classes

```js
{
  [expr1]: 1,
  [expr2]: 2
}
// Does not check if expr1 === expr2
```

MM: Cannot statically repeat properties in object literals

AWB: This isn't a static object literal

MM: ...

YK: The most common usage will by for symbols, eg. @@iterator

AWB: We don't have a mechanism for runtime checks like this and shouldn't be adding such checks

MM: The create and overwrite paths are very different (define v. assign)

WH: Pick one or the other. If we're going to do static checking, do it consistently. Either always check or never check

AWB: The complications I ran into were in gets and sets, it's not just "does this property exist"...

BE: We do want computed property gets and sets
...We should do checks.

AWB: It's not that non-strict doesn't check...

MM: given that we do dynamic checks in strict mode, you prefer NOT doing them in sloppy mode?

AWB: I don't like the dynamic checks either way

MM: that wasn't the question

AWB: the precedent in ES5 for object literals is that strict mode has "more" static checks.

AWB: "from a language design perspective", we should have them the same in both cases

BE: I'm w/ WH and ARB, we want the check in strict mode

AWB: so you don't want the check in sloppy mode?

BE: I don't think there is only one consistent position, and I'm ok with no dynamic check in non-strict mode

... discussion of the current static checks in non-strict mode ...

#### Consensus/Resolution

- No change, this is the semantics:

```
var name = "x";
var o = {x:42, x:45}, // static strict error
    o2 = {x:42, get x()}, // static error
    o3 = {x:42, [name]:45 }, // dynamic strict error
    o4 = {x:42, get [name]() {}}; // dynamic error
```

AWB: the consensus is that for dynamically computed property names we will dynamically check the things we would have statically checked.

WH: Pop quiz. What does the following parse as?

```js
baz = ...
function foo() {
  var yield = 8;
  return function * bar() {
    yield
        baz
    yield
        * baz
    yield (baz) => yield * baz
  }
}
```

[Almost nobody guessed all of these right.]

Current answer, with all optional semicolons inserted:
```js
baz = ...
function foo() {
  var yield = 8;
  return function * bar() {
    yield;  // The yield expression rule has a [no LineTerminator here]
        baz;
    yield // The yield * expression rule doesn't. No optional semicolon here!
        * baz;
    yield (baz) => yield * baz; // The * here is a product of two variables
  }
}
```

#### Consensus/Resolution
- Update `yield * [Lexical goal InputElementRegexp]` => `yield [no LineTerminator here] * [Lexical goal InputElementRegexp]`



## Class/optional yield arg ambiguity

```js
function *g() {
  class foo extends yield {} // is that an object or the class body?
  {}
}
```

Proposed solutions:

- Disallow trailing yield in extends clause
- Requires an extra parameter to Expression and AssignmentExpression
- extends LeftHandSideExpression
- would be only place an expression isnt explicitly Expression or AssignmentExpression


BE: (whiteboard)

```js
// Don't want to require these parens:
class C extends (A + B) {

}
```

BE: Should have no trailing yield, as a static error

... lost track here...


WH: (whiteboard) Counterexample to claim about never requiring parentheses in expressions that would be unambiguous without them:
```js
a = b * (yield c)
```


WH: Think of "extends"  as having the same precedence as assignment operators. That's why class C extends (A + B) would require parentheses.


#### Consensus/Resolution

- extends LeftHandSideExpression
- would be only place an expression isnt explicitly Expression or AssignmentExpression


## Cross-Realm Symbol Registration

(need slide)

AWB:

```js
// key is a string
Symbol.for(key) => aSymbol // creates a new Symbol if key is not registered

Symbol.keyFor(aSymbol) => key
```

- Where for all strings S: `Symbol.keyFor(Symbol.for(S)) === S`
- the use case for `Symbol.keyFor` is serialization


Revisiting discussion from last meeting, re: Symbol.

Discussion regarding the value, or lack of, registered Symbols over Strings.

DH: Is it necessary to be `Symbol.keyFor()? What about `Symbol.prototype.key`

DS: Is there direct correspondance between `Symbol` and `toString`?

DH: If the symbol is registered, `toString` does the same as `Symbol.keyFor`

AWB: is this good?

DH: What does `Symbol.keyFor` return if the symbol is unregistered?

undefined

#### Consensus/Resolution

- Agree on proposed API.
- If the symbol is unregistered: `Symbol.keyFor(unregistered symbol)` returns `undefined`
- `Symbol.keyFor(not a symbol)` throws


AWB: An issue about Symbols not being usable as WeakMap keys...
...which is ok...

This lead to discussion about (re)naming of WeakMap. It's possible that WeakMap may be renamed SideTable


## Introduce a Prototype object that contains sloppy arguments object @@iterator function?

Discussion re:
- `arguments` prototype
- `arguments.prototype.constructor`


AWB/MM: instanceof is generally misused

AWB: Current spec: all built-in iterators. Self hostable

MM: Issues are with consistency.

BE: (whiteboard)

```js
Array.prototype[Symbol.iterator] !== (function() {
  return arguments[Symbol.iterator];
})();
```

MM: ...future JS programmers learning classes without understanding prototypes. Let's not unnecessarily introduce new abstractions that can't be understood within these semantics.

(meta discussion)

AWB: (describing a spec that used class inheritance for all new inherited objects, eg. `Array.Iterator`)

BE: Return to the question... should `arguments` be iterable, and how?

AWB/MM: (discussion re:


#### Consensus/Resolution

...?


## Conventions for ignore over-ride of @@iterator

MM: Why is this a spec issue?

AWB: @@iterator is bad example, @@toStringTag is better

BE: Use `undefined`, not "falsey"

AWB: re: `new Map(?, "is")`

BE/RW: `new Map(undefined, "is")` defaults to empty list

AWB: Happy with undefined.

#### Consensus/Resolution

- Just use `undefined`


## (function Foo() {}).bind(x).name?

See: http://wiki.ecmascript.org/doku.php?id=harmony:function_name_property

AWB: What about anonymous function expressions?

RW: No name is made

AWB: What about bound anonymous function expressions?

RW: Same, no name.

DS: Could bound functions delegate their name? Do we want to do that?

BE: Might be interesting to find out, can chat with Brandon about this.


#### Consensus/Resolution

- "bind" wins over "bound"
- Brandon needs to review the spec.



## 9 ECMA-404 W3C TAG / TPAC report
(Alex Russell)

AR: (recapping JSON specification leading to 404)
... There are people at the IETF that want more restrictions, eg. a number types, character encoding.

WH/MM: what does that mean?

AWB: Let's avoid doing what they're doing.

AR: They want to restrict all the things, that we're simply not willing to do.
... The draft revision includes non-normative "advice". They've also diverged on what is "valid JSON".

RW: Specifically, they've changed JSON so that JSONValue is not the top level grammar production, using JSONText instead. This means only "{}" and "[]", which is incompatible with Ecma-404.

AR: (proposal to work together)

STH: 3 levels.

1. Bytes on the wire. For example reject UTF-32
2. Sequence of unicode code points that make up a valid JSON sequence. This is covered by ECMA-404.
3. Semantics of this structure. For example, reject numbers with a thousand digits.


#### Consensus/Resolution

- Alex will draft statement to send to IETF last call, due Thursday



## 4.9 Reconsidering Object.is
(Dave Herman)

DH: Object.is might be a mistake

AWB:  Could be trying to fill one of two purposes:
- the finest distinction possible
- what you really wish triple equal was

For general use, you want -0 and +0 to be equated, NaN to equal NaN

MM, WH: Multiple NaNs are not visible in JavaScript

AWB, DH: Different NaNs are distinguishable if aliased via TypedArrays

AWB: Hence Object.is does not discriminate as finely as possible

WH: That would be a mistake. ES1-5 clearly state that the NaN values are indistinguishable, and some implementations rely on that for NaN-boxing. Object.is should consider all NaNs to be the same.

[ discussion ]

AWB: NaNs are technically still not distinguishable in ECMAScript because an implementation has the freedom to write any quiet NaN bit pattern into a TypedArray, not necessarily the one that generated the NaN; in fact, writing the same NaN twice might generate different bit patterns.

Discussion about equating NaN values (https://github.com/rwaldron/tc39-notes/blob/master/es6/2013-01/jan-29.md#conclusionresolution)

MM: The spec allows 0/0 to be written to a TypedArray twice with different actual bit pattern.

More discussion re: IEEE NaN

#### Consensus/Resolution

- Status Quo
