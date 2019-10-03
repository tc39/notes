# May 29, 2015 Meeting Notes
-----

Allen Wirfs-Brock (AWB), John Neumann (JN), Jeff Morrison (JM), Sebastian Markbåge (SM), Yehuda Katz (YK), Dave Herman (DH), Sam Tobin-Hochstadt (STH), Kevin Smith (KS), Daniel Ehrenberg (DE), Adam Klein (AK), Jordan Harband (JHD), Jafar Husain (JH), Mark S. Miller (MM), Michael Ficarra (MF), Chip Morningstar (CM), Simon Kaegi (SK), Peter Jensen (PJ), Eric Ferraiuolo (EF), Stefan Penner (SP), Paul Leathers (PL), Jonathan Turner (JT), Brendan Eich (BE), Dan Gohman (DGN), Miško Hevery (MHY), Matt Sweeney (MS)

-----

## Relaxed semantics for Promise.resolve nominal check (MM)

MM: presenting

```js
Promise.resolve(arb1).then(arb2, arb3);
```

MM: The invariant that we are trying to maintain is that in a realm where the primodials are frozen and arb1, arb2, and arb3 are from an untrusted party, then any code associated with those objects will be executed in a later turn. Since promises are not frozen, the invariant can be broken if "then" is overridden on the instance. The invariants can be maintained by a subclass of Promise.

```js
DefensiblePromise.resolve(arb1).then(arb2, arb3);
```

The other way that the invariant was broken was with Promise.resolve. Once we added the newTarget parameter to the Reflect.construct method, that meant that someone could invoke the Promise constructor with an arbitrary newTarget.


AWB:  That could be checked in the Promise constructor code. The constructor could traverse the prototype chain of the constructor.

MM: Because we have the mutability issue we have to protect the invariants in userland anyway, so I like the proposal from C. Scott Ananian. Just perform a Get on the "constructor" property of the argument supplied to "resolve".

MM: Do we have species on Promise

AWB:  Yes

MM: Don't think @@species buys you anything here

AWB: But there's a consistency

AK: This is a breaking change for shipping browsers.

YK: I would be suprised if there are programs which rely on this edge case.

MM: We should take this into account. Even if there's code subclassing promises, they would probably not be affected by this change. I would like AWB's opinion on whether we use @@species or constructor.

AWB: NewPromiseCapability might use @@species anyway.

KS: Can we confirm?

AWB:  No, it doesn't use @@species.

MM:  In that case I say we use "constructor".

AWB:  This is a class-side method, @@species is really for instance chaining.

MM:
```js
FooCancellable.resolve(arb1).then(arb2).then(arb3);
```
@@species of FooCancellable is Cancellable. Using "constructor", the first then is called on a FooCancellable and the second is called on a Cancellable. That looks correct.

AK: We'll have to look and see if this change breaks anything. (Not asking to postpone.)

SP: Chrome canary is already broken here:

```js
class Foo extends Promise {}
Foo.resolve(Promise.resolve()).constructor !== Foo;
```

### Resolution

Change Promise.resolve in ES6 specification to use "constructor" property.

### Operator overloading breakout

Slides: http://www.slideshare.net/BrendanEich/extensible-operators-and-literals-for-javascript


DE: Why not use an implicitly named, lexically scoped object for literals (literalSuffixTable)? No staging, just runtime lookup.

BE: Don't overload ===, instanceof, in

DGN: Most operators could be useful for SIMD, except == < <= is probably not a good idea since it'll return a SIMD vector which is truthy

BE: Strict equality is still via a structural recursive strict equality check not overloadable, or do we want to change that?

BE: Multimethods for dyadic operaors, not double dispatch; see Christian Hansen's work and Cecil

SM: Maybe mangle the name for literals somehow else?

[Discussion about how to handle suffixes with module imports]

BE: The hope is that the spec just has to define operators and literals in a general way. We can have an intermediate step which is value types.

### Value types breakout

DE reviews Niko Matsakis's proposal https://github.com/nikomatsakis/typed-objects-explainer/blob/master/valuetypes.md

- (I missed first implicit bit that DE identified -- /be)
- ValueType per-realm registry can only grow, never shrink -- is this ok?
- what if a value from another realm lacks a registry entry for its type? type error or implicit registry (MM objected?)

SM and DE discussion of trade-offs imposed by registry key as defined by NM

SM concerned about prototype sharing among several value types (immutable array and Array)

DE would rather stick with NM's proposal and leave out prototype-sharing and other such features

DE raises intermediate value representation problem.

```js
let Point = ValueType(Symbol('Point'), {x: Float32, y: Float32});
let p = Point(1, 2);
// is p.x a Float32 or a JS number?
assert Float32(0) !== 0;
```

Int64 hard case vs. number as well.

```js
x = Float32.[[Cast]](1);
y = Float32.[[Cast]](2);
```


DGN: how about Complex?

DE: `3+2i` is a "literal" that can be partially evaluated by smart implementations; the `2i` uses literal suffix `i` to make imaginary-2, and `+` operator does rest.

In general if number is the intermediate value type, lose precision when demoting (from 64-bits to number) and performance when promoting. Lose-lose!

Could add `Float32.add(a, b)` and so forth -- and these could be operator multimethods -- to help people avoid promotion to number from 32-bit value types


DE: Also thinking about [[Serialize]] and [[Deserialize]] internal methods (maybe Symbol.serialize and Symbol.deserialize one day) for persistence and structured clone

SM: thinking of separate faster-GC heap for value types since acyclic


DE: thinking about discriminated unions as well, which is why symbols might want to be embedded in value types.

SM: serialization raises question how this value types thinking relates to typed objects

BE: typed objects wanted for their reference identity, heap allocation, mutability

DE: mentions Swift inout handling of structs: `p.x = 1` => `p = p.replaceX(1)` updates whole struct


## Fresh realms breakout ##

MF: Fresh Realms

Programmer want guarantees about how their program will run without worry about what past scripts have done - in particular referring to scripts like prototype that monkey patch

original proposal....

global-f-global

```
var a=0;
function f() {
    "realm";
    a --> refers to lexical scope
}
```

new proposal is module based -- want to declare dependencies should be run in a "fresh" realm

---

discussion around how modules might construct graphs and a fine critique of the npm approach.

discussion around the process for splitting an existing module in two in the face of a "fresh" realm and looking at the problems associated with having those newly split modules sharing state

---

DH: Belief is that the dynamic api is sufficient and we need experience before creating declarative syntax

DH: An approach using manifests like System.js to construct the appropriate realm graph

JHD: Want the abilty to run a module in a fresh global especially in the context of using shims

MM: Fine but we should go ahead in parallel e.g. keep the discussion going as we gain experience

MM: SES Provides defensability but not defense. Enables use of multiple co-operative realms while protedting them from one another

### Brendan Break-in about literals and operator overloading

DH, YK: Do these invariants actually hold? Even if they do, do we really need all of them? Some make sense, but maybe not all.

Christian Plesner Hansen's multimethod post: https://mail.mozilla.org/pipermail/es-discuss/2009-June/009603.html

Christian's language? http://h14s.p5r.org/2006/05/neptune.html

YK: For operator overloading, instanceof won't work in Node because Node agressively duplicates prototypes. instanceof is an antipattern.

DH: npm will give you multiple instantiations of the same module.


## async await extensibility

| sync Iterator:     |
| ------------------ |
| iterator           |
| function*          |
| for (x of xs)      |

| async iterator     |
| ------------------ |
| AsyncIterator      |
| async function*    |
| async for(x of xs) |

| sync observable    |
| ------------------ |
| observable         |
| function*>         |
| for (x on xs)      |

| async observable    |
| ------------------- |
| Async Observable    |
| async function*>    |
| async for (x on xs) |

------------

```js
function*>() {
    var stream = await someObservable;
    for (let price on stream) {
        yield CAN(price);
    }
    console.log("done");
    }
}
```

vs. (new for* syntax with sugar -- e.g. on

```js
push(function*() {
    var stream = await someObservable;
    for* (let price on stream) {
        yield CAN(price);
    };
    console.log("done");
}
```

vs. (new for* syntax - desugared)

```js
push(function*() {
    var stream = await someObservable;
    await on(for* (let price of stream) {
        yield CAN(price);
    });
    console.log("done");
}

function* d(xs) {
    yield xs[0];
}

function d ([xs, gen]) {
    gen.next(xs[0]);
}
```
