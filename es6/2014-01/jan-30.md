# January 30, 2014 Meeting Notes
-----

John Neumann (JN), Allen Wirfs-Brock (AWB), Yehuda Katz (YK), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Rick Hudson (RH), Matt Sweeney (MS), Dmitry Soshnikov (DS), Sebastian Markbåge (SM), Ben Newman (BN), Jeff Morrison (JM), Reid Burke (RB), Waldemar Horwat (WH), Doug Crockford (DC), Mark S. Miller (MM), Brian Terlson (BT), Luke Hoban (LH), Andreas Rossberg (ARB), István Sebestyén (IS), Niko Matsakis (NM), Brendan Eich (BE), Rick Waldron (RW), Sam Tobin-Hochstadt (STH), Rafeal Weinstein (RWN), Dmitry Lomov (DL), Niko Matsakis (NM), Simon Kaegi (SK), Dave Herman (DH)

-----

## Parallel JavaScript

RH: API is stable

RH: Parallel array data type is no longer there. Instead as methods on arrays and typed objects.

NM: To be clear you can have an array with structs in it.

RH: The sweet spot is games and image processing.

RH: No current show stoppers on implementation. Some things to work out related to GC.
The strategy going forward. Be complimentary to the typed object spec. Will track it and spec parts of it Typed Object spec. "Close follower". Will move in tandem.

LH: To move to phase 1 we need to see some examples.

YK: Agree, we need to see where we're at.

AWB: Agree, we should have presentations to move from phase 0 to phase 1.

RH: I have presented twice already...

YK: Moving to phase 1 should require a presentation.

YK: Concerned that we are exploding the API with mapPar, filterPar, fooPar etc.

YK: Prefer static functions

EA: Or a standard module `import {map} from '@parallel'`

YK: `this` in functions?

```js
arr.map(obj.method, obj)
```

DH: The signature should just match the existing functions.

RH: Not less surprising. Just as surprising.

```
parallelModule.map(arr, func, ...)
// [T] -> .... -> [T]  // same return type
```
 NM: What would you call `from`?

WH: It's too confusing to require completely different static function style for invoking parallel maps as compared to non-parallel maps. mapPar etc. method style is better than the proposed alternatives.

DH: It is always nicer to write a method call than a function call.

DH: Don't want a "bring me a rock" exercise.

EA: File issues on GitHub on the drafts (that are also hosted on GitHub).

MM: Worked well for Promises.

YK/MN to talk through the concern about a "ton of methods".

#### Conclusion/resolution

- Move Parallel JavaScript to phase 1
- Talk offline about design issues further


## Structured Clone

DL: Is implemented in all browsers. Part of HTML spec. Hixie speced it. Hixie is happy with TC39 moving this to ES.

YK: Like to object to this motion. It is currently a giant set of scenario hacks.

DL: We want to add language objects that we want to transfer.

AWB: Cloning framework in ES.

DH: Is it possible to reform or do we have to start from scratch? Seems hard to reform. Too many issues.

MM: Fears that if we do not take it over and introduce something new. The old will continue to exist. We need a path to replace the existing system, including what PostMessage does.

DH: We need a roadmap. How do we handle transferables?

DH: Hixie (or Anne) added Map and Set to structured clone to HTML spec.

DL: We cannot add extensibility mechanisms if we do not own the spec.

YK: We should own the spec. Opposed to DOM specific extensibility methods. General extensibility mechanism are important.

BE: How would symbols work?

AWB: We have a symbol registry. As long as both side cooperate. Serialize to a registration key. The two sides need to agree.

MM: It is unobservable that the symbol is not the same across the two workers.

WH: What if you have the same symbol registered under two different strings?

MM: That can't be allowed.

BE: in the cross-machine limit, structured clone is serlialization/deserialization; start there, allow optimizations like Sun XDR, Van Jacobsen TCP/IP, Google protocolbuffers
[discussion on optimization]

WH: What do we mean by optimization?

DH: [explains difference between opaque and structured clone, including implications on optimization]

WH: Are we going to settle on one of the two or do both?

DH: Both
[more discussion on optimization]

BE: [explains history of prior work]

BE: Can't tell Hixie and Anne to stop adding to structured clone.
Anne: Want to give them assurance that we will take over the effort.

WH: What's the consensus?

YK: We'll take it on. Move to stage 0.x


## defineGetter, defineSetter etc in Annex B?

BT: IE ships this.

MM: It would just be speced using defineProperty etc

AWB: Firefox does some strange things.

BE: please enumerate "strange things", file bugs

YK: It starts at level 1. Or 3? there are already implementations.

RW: What sites?

BT: Will attempt to furnish a list of sites...

#### Conclusion/resolution:

- Makes sense to put in ES7 annex B
- Brian to write an initial speec draft


## Process document

Process doc is now public
https://docs.google.com/a/chromium.org/document/d/1QbEE0BsO4lvl7NFTn5WXWeiEIBfaVUF7Dk0hpPpPDzU


## Scheduling for next meeting

April 8-10 at Mozilla, San Francisco
May 20-22 at Facebook, Menlo Park
July 29-32 at Microsoft, Redmond
Sept 23-25 at Bocoup, Boston
Nov 18-20 at PayPal, San Jose


## Async/await

LH: https://github.com/lukehoban/ecmascript-asyncawait

LH, MM: await syntax is important because the precedence of await needs to be different than yield.

LH: async functions could be combined with function*; in such a thing we'd need both yield and await

MM, WH: What would the behavior of such a thing be?

LH: That's a seperate proposal - something we can discuss later.

BE: Syntax conflict with => functions (elided parameters). what does:
    async() // newline, no semi here
    => {...} ...
mean? We can make it be an async arrow if we want, but second line looks like 0-param arrow function expression....

WH: async (a, b, c) => await d looks too much like a function call of a function named 'async'. Need to parse a long way before figuring out it's an async lambda. This wouldn't fall under the existing cover grammar.

LH: I'll look into that.

DH: Initially concerned about hard-coding the scheduler.

LH: Identical to Q.async. There is only one way to do this.


MM: September Promises consensus is superior to the Promises spec we have now.
[Debate about whether we'll end up with two Promises APIs]

WH: Do the two APIs use the same scheduler (that would be hardcoded)?

DH: No.

LH: Can we move async/await to stage 1?
General agreement

AWB: This means that we agree that this is something in a future version of ES

#### Conclusion/Resolution

- Moved async/await to stage 1.
- Next step is to write real spec language


## Promises discussion

MM: Advocacy for .then()/.cast()

STH: Advocacy for .chain()

LH: Proposal of Promise.chain() compromise

YK: I would probably be ok with this

MM: I would probably be ok with this
... extensive discussion ...

MM: A resolve of a resolve does not create multiple levels of wrapping. Without chain this is not observable.

BE: .chain() requires over-wrapping/-unwrapping, without chain this is unobservable and therefore optimizable -- says to reject chain (surprised by own position changing)

YK: This persuades me that we shouldn't have .chain()

STH: I strongly disagree, but I'm not going to hold up ES6 over this


#### Conclusion/Resolution

- Promise.cast is renamed to Promise.resolve (remove old Promise.resolve)
- Keep then, reject chain (NOT DEFER, reject!)
- Renaming .cast thus removes over-wrapping (always-wrap) deoptimization in old Promise.resolve

Some further discussion on keeping the spec inheritance/AOP-friendly by not using .then internally some times, short-cutting through internal methods or internal helpers other times
YK, MM, AWB have details
