# June 5, 2014 Meeting Notes
-----

Brian Terlson (BT), Dmitry Lomov (DL), Waldemar Horwat (WH), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jafar Husain (JH), Jeff Morrison (JM), Mark Honenberg (MH), Caridy Patiño (CP), Yehuda Katz (YK), Niko Matsakis (NM), Ben Newman (BN), Filip Pizlo (FP), Sebastian Markbåge (SM), Rafeal Weinstein (RWN), Jaswanth Sreeram (JS), Alex Russell (AR), István Sebestyén (IS), Simon Kaegi (SK), Arnaud Le Hors (ALH), Reid Burke (RB), Erik Arvidsson (EA), Brendan Eich (BE), Mark S. Miller (MM), Peter Jensen (PJ)

-----

## Agenda

(Agenda item 5.2 added)

(István on the phone discussing non-member CLA process)

AR: It sounds like we're making the process difficult for non-members simply because it's currently difficult for members. Can we change the goal to just make the process simpler for everyone?

IS: We just need the process to be the same for members and non-members. That is the current process -- we need the pdf form

AR: Can you take it back to the assembly(?) as a request from this TC that we'd like to simplify the process for signing the CLA to a click-through form for everyone [members and non-members]

IS: Yes, I can do that

**discussion**

## Conclusion/Resolution
- Allen will continue to work with István on this
- Not clear how to proceed concretely other than having members continue to push for this
- Current process includes printing pdf, signing it, scanning it


## JSDoc*, JSIDL*, Code Editors

(Ask for slides)

SK: Type inferencing is hard

SK: JSDoc*, we need help from the user.

SK: Standardize JSDoc?

SK: JSDoc Proposal

AR: We are the only group that can add syntax so we should not put semantics in the comments.

AR: Interested in designing a type system

DH: I'm skeptic that we can design a type system for ES.

DH: Describes kinds of type systems: sound, unsound, guards

WH: I tried it for ES4. Came to the conclusion that a complex static type system would not work for ES's plethora of array-like things. On the other hand, more primitive type systems for things such as strings, numbers, classes are eminently doable and useful.

WH: I had a proposal for guards. These are more like a max min solution.

DH: Guards are too dynamic.

WH: In order for a type system to be useful, it must be enforceable in some form in order to catch erroneous or out-of-date type annotations.

DH: It is about as much a green field as defining a new language. It can mean so many different things.

JM: Would like to explore types for documentation at least.

DH: If there is no standard there will continue to be a proliferation of tools.

WH: We know this is a large space to explore. That does not mean that we should not explore it.

YK: If we make this a priority it will take years and years of discussion, dropping everything else.

BT: We can manage doing more than one thing at the same time.

AWB: This discussion feels like the early discussions of class syntax. Yet we were able to make progress.

DH: TypeScript is the strongest proposal at this point. Guards have serious problems for structural types. A sound type system (for JS) is still an academic research topic without a solution in sight.

YK: TS type system is incompatible with ES6.

YK: TS is a fork of ES5.

WH: These problems of incompatible forking are exactly why we need to take over this work.
f
AR: I want this for ES7

AWB: We haven't yet started to prioritize our next work items.

DH: The cost is very very high and IMO there are more important thing to work on than types.

WH: IMO documentable types are one of the highest priorities for us now. There is a lot of external interest as evidenced by the various external efforts.

BN: Strict scrutiny (e.g. from DH) can and should come before the proposal comes before TC39.

SK: Back to slides... Not proposing a type system. Implementors are interested in standardizing JSDoc..

SK: JS IDL?

SK: Type definition...

## Conclusion/Resolution

- Stage 0 acceptance
- Work on JSDoc

## Closing Iterators
(Dave presenting, send slides!)
Slides: https://speakerdeck.com/dherman/closing-iterators

Notes that key stakeholders have signed off on this (Andy Wingo, Luke Hoban, ... others)

**DH talking about breaking out of loops and calling .return() when an abrupt exit occurs in the loop**

WH: Does a yield inside a for loop call the return method in the normal case?

BN: No.

WH: What if that yield then gets killed by a break in the caller?

BN: Show example.

WH:

```javascript
function * a() {
  for (let x of y) {
    ...
    yield ...
    ...
  }
}

for (let b of a()) {
  break;
}
```

** Discussing: How should abrupts inside a yield* get bubbled? **

BN: Any yield on which the generator (or any nested delegate generators) are currently suspended effectively become returns, so the return value "bubbles" all the way out to become the result of the outermost generator.

WH: (back to his code example) What does a's return method do?

MM: The break in the for loop calls the generator's return method -- causes the yield to return

DH: Any abrupt (but only abrupt completion) of a loop [calls .return() method?]

** continues through slides **
DH: Next issue: What if iterator, when given opportunity to stop, decides to keep going?
(see slides for details)

function* g() {
  yield;
}
g = g();
g.next();
g.return(42).value === 42;

WH: where does the 42 passed to g's return method go?
BN: It returns out of g with 42.
WH: Is there any way for g to get at the value 42?
DH: No.

Brendan's Example
```js
function* gen() {
  try {
    yield 1;
  } finally {
    yield 2;
  }
}

for (let i of gen()) {
  break;
}

// The for-of loop unrolls to this:
var g = gen();
g.next(); // { value: 1, done: false }
g.return(42); // { value: 2, done: false }
// Not executed because of the break from the loop:
g.next(); // { value: undefined, done: true }
```

AWB: Important to remember that none of the costs (e.g. checking for a "return()" method) happen on "normal" completion of the loop -- only abrupt exits from the loop

DH: Let's talk bikeshedding: return() vs close()

BN: close() doesn't suggest that you can pass an argument

MM: .throw() is reflecting the throw construct within the generator, thus .return() makes sense

AWB: [strawman idea?] What about forbidding yield in try blocks?

RW: (silently, because I'm muted) Disagree with restricting use of `yield`

RW: Since we have an additional six months of "quality control" time with the spec, should we consider dealing with this directly as part of the "quality control" effort? Opposed to limitations on yield in try/catch/finally.

AWB: that could be applied to any subject that comes up.

DH: forbidding yield in try blocks is a non-starter because there would then be no way to ever do any kind of cleanup on a yield using finally

BE: Python 2.5(?) added similar restrictions and then later relaxed them, which proves that there are use cases for yield in try-finally.

AWB: You'd have to structure your loop with an outer try-catch, yield takes away guarantee that finally would run

DH: Understand this is intended as temporary (i.e. to avoid adding complexity to generators last minute), but worst thing would be if we landed on this as a permanent semantic

DH: Agreement is that this is right semantics, there's a question as to whether we can get there in time

AWB: I worry about the precedent of adding changes like this now

BN: I will be happy to review the changes to chapter 25 (Generators and Promises) that are necessary to capture these changes.

AWB: Still worried because of the precedent this sets.

## Conclusion/Resolution

- Ratifying DH's proposal ("proposal" to be clarified), with the fallback (in case we run out of time, or decide to prioritize other work) of forbidding yield in try-finally blocks and making abrupt exits from for-of loops put the iterated-over generator into the GeneratorComplete state (which is a semantic change from leaving it in the GeneratorSuspendedYield state).


## Generator comprehensions (slides plz)

Slides: https://speakerdeck.com/dherman/a-better-future-for-comprehensions

** Basically DH is proposing deferring comprehensions to ES7 with some minor changes to future-proof **

let a = for (x of a1) for (y of a2) if (y > x) {x,y};

WH: What type does this return?
?: It depends on the type of a1.
WH: Generating an array in the proposed world is ugly. If you want an array, you now need to convert the result of the comprehension to an array.

BE: The basis case doesn't work in the new design. To create a generator, you need to start with a generator. Awkward to write the first generator.

BE: problem is that a1 is evaluated eagerly rather than lazily

AWB: Where would we put Iterator.prototype in the Generator-related prototype object graph?
AWB: Hardest thing about this change is LAYING OUT THE DIAGRAM ALL OVER AGAIN: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorfunction-objects

BE: Inserting a new object without populating it with any methods invites breaking changes when we do populate it with methods like .flatMap.

JH: Really need to go with type-directed comprehensions (letting the iterable object determine the type of the comprehension) rather than the current syntax-directed syntax: (...) and [...].

WH: Worried that we'll rat-hole on the new proposal, which is pie-in-the-sky with a number of identified deficiencies. The current proposal is solid. The perfect is the enemy of the good here.

## Conclusion/Resolution

- Defer comprehensions from ES6 to ES7 to work on the more general type-directed, method-based approach to supporting comprehensions for arbitrary iterable types (arrays, generators, streams, parallel arrays, etc.).


## 7.1 `<script type=module>` status update (from DH)

DH: Would really rather have `<module>import { foo } from "bar"; ...</module>`, which is like `<script>`` but async, strict mode, has its own top-level scope, and can import declaratively (using ES6 module import syntax) from other (named) modules.

DH: `<module name="qux">` creates race conditions with HTML imports (part of WebComponents).

YK: People who saw named HTML module tags though you should mix html imports w named module imports
YK: When you have packaging solution (SPDY, etc), you no longer need named modules

MM: `<script type="module">` would inherit the special termination rules of </script>, whereas old browsers might not handle <module> the same way, since that tag name doesn't mean anything special in old browsers

AR: `<script type="module">` means the browser won't even try to parse it as JS, which is what we want [so that we can execute the script contents as a module, via some sort of polyfill]

DH: `<script type="worker">` might also need to have the `<script type="module">` semantics, and type= attribute syntax makes it hard to mix and match those attributes; maybe `<script worker module>` would be better? (i.e. the type attribute values become optional value-less attribute names)

DH: The difference between `<script type="module">` and <module> is that as long as there's ... you always have the option of writing `<script>System.import("main.js")</script>`
TODO: Get DH to clarify this point when we edit the notes.

MM: The `<module>` tag still has HTML misparsing consequences that `<script>` wouldn't have.

YK: The success of `<template>` proves that we can introduce a new `<script>`-like `<module>` tag.

DH: Need to create ways of doing this with pure JS, like `<script>System.import("main.js")</script>` and then add new HTML sugar later, like `<script type="module">`.

AR: [note taker (BN) may be misinterpreting] The JS API remains important even when we have HTML sugar.

## Conclusion/Resolution

- Adopt `<script type="module">` and expect transitional code to do `<script>System.import("main.js")</script>`.


## 7.3 HTML Imports

BE: Recast as `<script type="import">` rather than `<link rel="import">`?

## Conclusion/Resolution

- Consensus not reached.


## 7.2 Event loop

The issue is interleaving Promise response tasks with other tasks.

MM: Let's just not use the term "task" because it's confusing with other tasks (microtasks, etc).

Brainstorming names: job, tick (seems too close to `process.nextTick`), `slice`, `turn`, `chore` (lots of enthusiasm for chore!), `quest` (fits with realms!), schlep

## Conclusion/Resolution:

- Consensus not reached.



## Two or Three-day TC39 meetings in the future?

AR: Breakout sessions the third day?

EA: Can notes be taken in those breakout sessions?

MM: Breakout sessions for the rest of today?


## Modules breakout session:

[Notes](jun-5-modules.md)
