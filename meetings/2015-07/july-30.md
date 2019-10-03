# July 30, 2015 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Sebastian Markbåge (SM), Jafar Husain (JH), Eric Ferraiuolo (EF), Caridy Patiño (CP), Waldemar Horwat (WH), István Sebestyén (IS), Mark S. Miller (MM), Adam Klein (AK), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Jonathan Turner (JT), Paul Leathers (PL), Chip Morningstar (CM), Vladimir Matveev (VM), Ron Buckton (RBN), Brian Terlson (BT), Alan Schmitt (AS), Ben Newman (BN), Mohamed Hegazy (MDH), Abhijith Chatra (AC), Tom Care (TC), John Neumann (JN), Dave Herman (DH), Brendan Eich (BE), Daniel Ehrenberg (DE), Dan Gohman (DGN), Andreas Rossberg (ARB), Rick Waldron (RW), Mike Pennisi (MP), Akrosh Gandhi (AGI), Jonathan Sampson (JSN)

-----

## 7 Test262 Updates

(Brian Terlson, Mike Pennisi)

- [slides](https://jugglinmike.github.io/presentations/2015/tc39-Test262-update)


MP: Introduction

See slides

WH: (re: http://jugglinmike.github.io/presentations/2015/tc39-Test262-update/#7 ) question, re: es6draft, ecmascript spec, before/after publication?

?: es6draft ? ECMAScript 6 draft

BT: Ongoing. Could also add Chakra bugs


MF: raw flag? Does this prevent issues other than directive prologue issues?

MP/BT: "raw" means: don't touch the file, just run it. No access to assert features, useful for syntax only tests

[discussing distinction between early errors and parse errors that Test262 does]

http://jugglinmike.github.io/presentations/2015/tc39-Test262-update/#12

AWB: These are a specification artifact. An implementation doesn't have to do parsing and early errors in separate passes.

WH: This becomes visible when there are multiple errors, some in parsing and some early errors. Does the spec designate which error should be reported when there are multiple of these?

AWB: No. An implementation is free to report any of these errors.

AWB: Distinguishing early and parsing errors in tests is overspecifying.

(re: website improvements)

BT: current Test262 site does not have ES6 collatoral.
- Implementing ToLength appears to lock up the website
- Alot of work needed to get the Test262 site into a functional state
- Is the work something that Bocoup is going to do?

MP: Nearing end of time, but ideally would like to take on this work

BT: Then we need to find a "resource" for this project
- Enumerating outstanding issues with Test262 website

YK: Considered running tests in iframe or worker and timing out?

BT: Harness uses iframes

Discussion of implementation details of test harness

BT: Requirement of new site: use web workers


Moving on to http://jugglinmike.github.io/presentations/2015/tc39-Test262-update/#15

MP: (first example) TypedArray, 9 sets of the same tests. The tests might start in sync, but it's hard to maintain over time.

- Typed Arrays (9)
- Destructuring Assignment (3)
  - AssignmentExpression evaluation
  - ForIn/OfBodyEvaluation
    - for..in statement
    - for..of statement
- Spread Operator (4)
  - ArrayLiteral: [...x]
  - ArgumentList
    - SuperCall: super(...x)
    - CallExpression: f(...x)
    - MemberExpression: new f(...x)
- Expressions & Declarations
  - Function
  - Generator
  - Class


AWB: Similar to wanting to share code in tests, implementations will want to share code.
- Look at how an implementation and its tests go wrong?
- Tests that would catch the most common ways the implementation abstractions might go wrong

YK: Instead of testing all the things, find the things that might fail
- things that look similar, but are subtley different: test that.

MP: (gives an example of how strict and non-strict tests are automattically run, unless flagged)

WH: Value in testing exhaustively when the number of cases is reasonable. Per the presentation, there are only 18 contexts in which destructuring is used, which is reasonable for full cross-product testing.
- Re: Allen's point, there are subtle things that can go wrong. I can imagine an implementation getting destructuring right in most contexts but messing up some subtle aspect of it for, say, arrow function parameters.
- But still worthwhile to test try to be exhaustive

BT: Not suggesting that we won't test syntax in unique contexts
- More about the authoring
- For tests that cover identical syntax semantics and the only difference is syntactic context, then test once
- Why not sweet.js or an existing templating engine? We need to test syntax errors (and other negative tests)

WH: Just pick one that doesn't make you escape all of the ECMAScript syntax

Discussion, re: https://gist.github.com/jugglinmike/476bdb6dd69ffddaf9d2#syntax

AK: (concerns about useful output)

DD: most consumers clone the repo, so we need to make sure that we check the output as well

AK: I'm less concerned about running, but about the output that will inform me of the failure

BT: Don't want to check in the actual generated tests
- This proposal MUST make it easy to identify failures
- The test harness will write to disc the actual code that failed at the moment of failure
- produce, on-demand, the filled-in template

DE: For tests users, this can be automated?

BT: Yes.


#### Conclusion/Resolution

- Continue exploring test generation


## Meeting Schedule

(John Neumann)


JN: will propose a 2016 schedule in september. Need to know if we'll be in Europe?
- Switzerland: Geneva, Lugano, Montreux, Lausanne (Geneva may not work: too many attendants and too expensive)
- Germany: Munich
- France
- England

Discussion planned for next meeting

- September in Portland, hosted by jQuery/Yehuda
- November in Santa Clara, hosted by PayPal


JN: Need to confirm what the 7th edition will contain

YK: Straight forward, whatever is Stage 4 goes in the spec

AWB: (enumerating general spec process timelines)
- submission
- review
- 60 day opt-out

YK: That's after January?

AWB: Approximately end of January

YK: January is submission, work backward to find deadline.

Discussion re: time needed for Brian to integrate the stage 4 features.



#### Conclusion/Resolution

- Get proposals wrapped up if you want to get these features into the spec



## 6.4 Advance Async Functions to Stage 2

(Brian Terlson)

- [slides](async-function-updates.pdf)

BT:

Updates from Last Time

- Complete spec available ( http://tc39.github.io/ecmascript-asyncawait/ / https://github.com/tc39/ecmascript-asyncawait )
- Removed `await *`
- Implemented in Babel
- Losts of positive feedback from the web

DH: Future proof for potential future syntax extensions

DD: Clarify not `await *`

BT: `await *` was not useful. If there is a proposal for a useful semantics, then good, but not in this proposal.

Questions

- Async Arrow Function
  - async (a, b) => await a + await b;
  - (a, b) @=> await a + await b;


DE: What's the issue with the first?

BT: `async` not a keyword and that could be a call: `async(a, b)`

MM: @ seems like a poor choice, but I don't have an alternate suggestion

AWB: only b/c "a"sync
- the `async` form defeats the conciseness

BT: I've worked out the grammar, it needs review, but it appears to work correctly

YK: Shouldn't have 3 sigils right next to eachother.
- hard to google a sigil or set of symbols
- a "grawlix" problem

BT: Opposed with the top grammar? (assuming the grammar works)

(no opposition, pending review)

DH: Would like to see more code illustrating actual use cases

DD: There's a lot of code in the wild that's been using the top form

DH: Any higher order combinator is where this will have the most use.

MM: No consensus on the second. Consensus on the first contingient on grammar validation

DH: Cannot make `async` a keyword, one of the most popular modules on npm is `async`

DD: `Promise.all` doesn't quite work because it's a combinator that takes promises, not functions that return promises

DH: The syntax that we've come up with for past features like `=>` map to an extremely high use case with hardship. Not clear to me that we have the full async callback picture

DD: should look into the ecosystem of Babel users and see where it's come up


Design Questions (continued)

- Newing an async function:
  - Error
  - Promise-for-instance


BT: Suggest "no"
(no disagreement)


Design Questions (continued)

- Errors in Parameter Initialization



```js
function* foo(a = (function() { throw 1; }())) {

}
let iter = foo(); // throws 1
```

BT: the equivalent in async functions:

```js
async function bar(a = (function() { throw 1; }())) {

}
bar(); // as of the latest proposal, this throws 1

// Alternative semantics would have the error deferred:
bar().catch(cb => ...); // Possible semantics
```

DD: Wish this was caught for generators

AWB: We knew about it, but nothing can be done

MM: For generators, we have immediate throw
- Async function: throw in body breaks the promise
- think about _when_ the throw happens
- what way is it reported?
- throw in generator body is reported with a throw
- throw in async body is reported by rejecting promise

YK: when use promise, you can catch all the errors into one place

AK: Arguing for throw immediately?

BT: Yes, found that error throwing default parameters don't happen (rare case?)
- Mark's point about multiple symmetry in play

CM: setup preparation part, consumption part. The generator setup might have error in setup, reported immediately

DD: Code will expect to receive the error via the catch path, not an immediate throw path.
- Most promise ops go through the API
- Devs can muck with the built-ins and produce errors


AWB: What if you put a proxy on an async function and the call trap throws?

MM: There's not a problem with the [[Call]] trap. If the [[Call]] trap in the Proxy throws, then you have a "throw".

AWB: Say the async function is actually a proxy wrapped around an async function?

MM: It's exactly the same hazard as if you hand someone a function that wraps an async function and the wrapping function throws.

DD: Problem is thinking of async functions as a separate category. Just a function

DH: Mark, I agree. There are errors we consider normal to happen in programs that you should deal with, and those where soemthing went badly wrong and you can't write code that has try/catch every where. A function call that throws an exception should follow the error handling model for the programming paradigm that we're in; since we're in an aync world, the programming model for handlng errors is `catch`


BT: want to be very clear about rationalization, so that same can be applied to `async` generator.

AWB: The generator function returns its value before evaluating its body.
- A generator is a function

MM: An async generator... I missed the rest of this

YK: Can you `yield` in a default parameter in a generator?

AWB: No, you cannot `yield` there because the object doesn't exist yet.

BT: We need to establish the rationale for the behavior of error handling in non-simple generator parameter lists

YK: Might've been a mistake?

AWB: Generators do what generator functions previously did in Firefox. We weren't sure if it should be changed. Different results:
- timing evaluation changes: happen on the first `next`, the values aren't the same values at the time of the call.

DD: Generators suspend immediately, `async` suspend on the first `await`

DH: All cases, expect that parameter default expressions execute eagerly, not that they execute at some time later

DH: Generators are all about order of execution. The fact that generator functions and async functions have different control flow expectations means that it's reasonable for their error handling behavior to differ.

Discussion about complications of the implicit `yield` in generators

DH: Don't need symmetry between generator and async

YK: Async function is just a function, but the generator is a different thing.
- When calling a generator, you're not calling a function as shown

DD: When calling a generator function, the first line of the function does not execute

DD/YK: Agreed.

YK: The consequence is that the refactoring doesn't make sense.



Design Questions Continued

- Await synchronous things synchronously
  - `await 1` does it trigger a turn of the event loop as in the desugaring?
  - allow synchronous await but ensure promise resoltion is async?
  - do neither and allow returning an already-resolved promise?


MM: describing the hazard of sometimes "sync" and sometimes "async"


????????????????Z??????????A???????????L????????????G????????????????????????? !????????????


:applause:

YK: The same hazard doesn't exist with await, because the callback model is changing which scope the function is called in, but doesn't exist in await.

MM: Agreed that the hazard to aync functions is smaller than that to Promises. The bugs will be both fewer and more subtle and harder to figure out.


DD: no cost to go back to the event loop


YK: not true.
- hot code is always awaiting some promise, could be optimized to consider inline-able. Never true if you always have to go back to the queue

MM: If an implementation can optimize, which is very hard and hazardous

YK: I'm making a different point. If you say. "you are not allowed to go back to the event loop" and if you discover that it is synchronous, then you can optimize by in-lining the synchronous code. In an ideal world, it is "just a loop", and a loop is fast.

JH: The relative harm: cost not zero, need to weigh

MM: Experience with `asap`, cost is worth it to reduce the hazard.
- When bugs do occur, very subtle and hard for programmer to figure out


YK: Hazard in the callback case is in pieces of code that are right next to eachother that appear to [...] Let me put it another way: the hazards you are talking about are based on assumptions that I would never make when writing a program.


MM: hazard as soon as mutated state is sufficiently non-local

YK: cannot rely on what interleavings are possible

BT: hazard here: order of your next turns change. not that callback could be async, but that your callbacks mayb run out of order. What Yehuda is saying is that people don't write programs with multiple Promises where they expect the promises to resolve at specific turns of the event loop.

MM: Two different hazards:
- The order of events on the event loop is one hazard
- the isolation of side effects is job that was executed up to the await point, completes before any code of the `await`
  - All invariants storing during the job

Mark, I need you to fill this in, we're moving too fast.


YK: Transaction committed before any await is called. This exists in Ember.
- Need to see an example of the invariant Mark is describing

MM: After the await point, the callee is starting with a fresh stack.
- Event loop programming paradigm that suspends an invariant must restore the invariant before the job ends.
- Illustrates with example of doubly linked list operation


MM: Event loop concurrency requires restored invariants before the end of the event loop turn

YK: Different from what's encountered in practice

DD: What's the position?

YK: Discussing already-resolved-promises

DD: `await 1` is not the same as `await Promise.resolve(1)`
- If you have a promise, you've said that the value is async and breaking that is crazy

MM: Found with the Q.asap bug: I wrote my code, tested my code, then my code had bugs. Result of code running out of turn with test code.

YK: consistency is absorbed by syntax

MM: disagree
- The bug was directly the result of assuming the invariant will be resolved.

Discussion re: invariant restoration on event turn completion


```js
// BT:
foo().then( function() {
   /* 1 */
});
/* 2 */
// Which is first

async funcion foo() {
  /* 1 */
  await x;
  /* 2 */

  // are these the same turn?
}
foo();
// HAZARD: setup state required by /* 2 */
```


Currently, `await` is always async.


JH: Concern that the notion of asynchrony bound to...?

MM:


JH: predicts that await means async to developers. await is composition.

DD: yield is composition

MM: asynchrony is mandated by the async keyword

JH: is that adequate? `async` means asynchrony, `await` does not mean asynchrony, just pause the execution.

YK: Come back to this?

Agreed. Next turn of the event loop.

JHD: Agree that `await x` always means `await Promise.resolve(x)`?

Some agreement.

YK: Doesn't fully describe the trade off

MM: Implementation prohibited from making optimization

JH: can we put together a program that illustrates the hazard?

```js
// BT:
foo().then( function() {
   /* 1 */
});
/* 2 */
// Which is first

async funcion foo() {
  /* 1 */
  await x;
  /* 2 */

  // are these the same turn?
}
foo();
// HAZARD: setup state required by /* 2 */
```

YK:


```js
let x;
foo().then( function(val) { x = val; /* 1 */ } );
// what is x?
```

JH: Is that an issue in asap? or were there other issues?

```js
// BT & YK:
async function foo() {
  // relies on y being `1`
  await x;
  // relies on y being `2`
}

let y = 1;
foo();
y = 2;
```

MM/DD/YK: discussing the hazards above.

AK: Different conditions, different behavior.


Discussion about race conditions in JS

DH: largely around the interleaving asynchronous events
- Mark wants this to be limited

MM: confirms

YK: When type `await`, I expect unpredictability

MM: unpredictable interleaving of job


DD:

```js
function dStuff() {
  if (window.state === 1) { doA(); }
  else { doB(); }
}

async function foo() {
  doStuff(); await x; doStuff();
}

window.state = 1;
foo();
window.state = 2;
```

MM: impossible to reason about a program without knowing something about what is going on.
- testing in sync case, and it works
- execute in async case, and it fails

DD: Always have a consistent state on the next turn


Discussion, restating positions back and forth.





- Promise cancellation:
  - Depends on cancellation at the promise level
  - Urge promise champions to consider ergonomics with async functions


BT: not going to specify cancellation in this proposal

MM: Not sure that base Promise is going to change?

DD: Talk offline.

- Await at top-level
  - Can you await at the top level of a module?
  - Useful, especially in Node


DH: Issues.

YK: Previously, could assume that top level ran start to finish, if many pieces have setup await

AWB: this changes the entire model of module execution

BT: modules are wrapped in async function which called immediately

MM: after top level await point, import/export, are these effected?

AWB: initialization happens in the order of import/export but before the module body starts

MM: only "when" the execution happens

AWB: This could be misunderstood

DH:

```js
import ... from ...;

let m;

if (dev) {
  m = await local.import("lib-dev");
} else {
  m = await local.import("lib-production");
}

export let x = 17;
```

DH: Requires module be async.

Unresolvable if node remains sync at the top level.


(break)

DH: we need to do more work offline.

BT: is top level await worth pursuing?

DH: Addresses a definite need, eg. dynamic module loading

BT: Flesh it out?

DH: No, this needs to be designed in concert with loader. Suggest decoupling to unblock async/await

BT: Confirms.
- Waldemar's grammar concern?

WH: (presenting now)

```js
async(a=await/
```

- According to cover grammar, this is a division symbol
- Is await a keyword or identifier here?


BT: parsed like a keyword, but there is a static semantics that says any occurence of await expression is an error.


```js
async(a=await/x, b=c/i) => b;
```

- Parse cover grammar, don't know that you're in a arrow function. This lets await sneak through as an identifier
- When you do the reparse, `/x, b=c/i` is treated as a regexp

MF: The reparse says it has to match this additional grammar, same set of tokens

WH: It's not clear in the spec.

BT: Yes, the await would appear as an identifier until you apply the cover grammar.

MF: (reads from [ECMAScript 2015 specification, section 12.2.1.1](http://www.ecma-international.org/ecma-262/6.0/#sec-static-semantics-coveredparenthesizedexpression )

MF: if await is always an await expression, this would fail to reparse, resulting in a SyntaxError

BT: Correct, expected.

BT/WH to have offline discussion re: grammar.

BT: Those that know execution model should review this.


#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers
  - Waldemar Horwat
  - Jafar Husain
  - Yehuda Katz
- `async (a, b) => await a + await b;` contingent on grammar validation
- `async` functions: no construct slot
- errors occuring in parameter initialization take the catch path




## 6.5 Proposed Changes to Observable API

(Jafar Husain)

https://github.com/zenparsing/es-observable/tree/zenlike

- [slides](https://docs.google.com/file/d/1uEVcOgJIMsHjN1vypKKyfmDRg_bz5cKXpo0v4Nc0q8NfqKolBeSDHIj8z9GS8A4EiMpZ8QQ3l87Q_wF3/edit?usp=docslist_api)

JH:

Conclusions after 45 Issues and Impl Work

- Generator should not be used Sink
- Sync Subscription Affirmed Necessary
- Can implement EventTarget using Observable


Using Generators as Sinks

Issues:
- Type Fudging (would like implicit {done: true})
- Priming Problem
  - issue with implicit yield
  - considered a decorator, but likely a footgun
- Return invoked on unsubscribe
  - mistake because it conflates two concepts: the need to free scarce resources and the need to signal iteration has completed
  - the equivalent to breaking out of a for loop,


YK: Why does it end up not being important to generators? (dispose being separated from return)

YK: Straight forward to add a `dispose()` method to Generator instance objects  http://www.ecma-international.org/ecma-262/6.0/#sec-properties-of-generator-prototype

JH: Believe adding `dispose()` is good

DD: And/or remove `return()`. To remove the try/finally that's implicitly added around a for-of loop

Discussion, re: try/finally

JH: even if we fix the return/dispose conflation, the priming problem is still a compelling reason not to use generators as sinks


Using Generators as Sinks (continued)

Issues:
...
- Multiple unsub methods


Proposed Solution: Observer Type

(get bullets from slide)



Advantages of Observer Type

(get bullets from slide)


Proposed Observable Type Changes

(get code from slide)



DD: Strange to hide a method by using well-known symbol
- if sync subscription is allowed, just make it easy


WH: What does Symbol.observer return? (Not referring to the symbol, but to the method to which this is the well-known symbol-as-computed property name)

JH: Nothing

DD: What happened to the flush that we discussed?

JH: In progress

MM: What is the `Object?` in `Observer` type?

JH: Allowed to return something

(Should be "any")

MM: Why not just support the Observer (in `subscribe` method)
- Prefer two separate methods

JH: previously had a forEach that returns a promise, still exists, just not shown

Discussing a swath of code on jsbin


Sync Subscription Affirmed Necessary

- Necessary to build EventTarget using Observable
(get rest of bullets from slide)


Jafar moves through slides too fast.


DD: Would prefer something simpler than Symbol.observer, instead just call it something obvious

MM: Name it such a way that the name is clear to the user (no suggestion)


Discussion, re: await observable.



All scalar combinators produce promises or observables


#### Conclusion/Resolution

- Stage 1 holds
- Offline discussion, re: sync subscription



## 6.13 Advance Rest/Spread Properties to Stage 2

(Sebastian Markbåge)

https://github.com/sebmarkbage/ecmascript-rest-spread

SM:

Static Properties vs. Computed Properties

SM (slide): question on evaluating computed property keys multiple times on the LHS of a destructuring assignment?

SM (slide): question when a "rest" destructured object param throws (via getter, for example), should `rest` be undefined, or a partial object. or, should the getter be copied rather than evaluated

```js
try {
  var throwingObj = {
    x: 1,
    y: 2,
    get z() { throw myError; },
    w: 4
  };

  var {x, ...rest} = throwingObj;

} catch (err) {
  x; // 1
  rest; // undefined (could be { y:2, w: 4 })
}
```

MM: possibilities?



SM:
- undefined
- { y: 2, w: 4 }

MF: also `{}` and `{ y: 2 }`

MM: further semantics need to be explored


#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers
  - Andreas Rossberg
