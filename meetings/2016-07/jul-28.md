# July 28, 2016 Meeting Notes
-----

Brian Terlson (BT), Michael Ficarra (MF), Jordan Harband (JHD), Waldemar Horwat (WH), Tim Disney (TD), Michael Saboff (phone) (MLS), Chip Morningstar (CM), Daniel Ehrenberg (DE), Leo Balter (LEO), Yehuda Katz (YK), Jafar Husain (JH), István Sebestyén (IS), John Neumann (JN), Domenic Denicola (DD), Rick Waldron (RW), Stefan Penner (SP), Jonathan Sampson (JSN), Caridy Patiño (CP), Sam Tobin-Hochstadt (STH), John Buchanan (JB), Kevin Gibbons (KG), Lars Hansen (LHN), Tom Care (TC), Dave Herman (DH), Bradley Farias (BFS), Kris Gray (KGY), Adam Klein (AK), Dean Tribble (DT), Eric Faust (EFT), Jeff Morrison (JM), Sebastian Markbåge (SM), Saam Barati (SBI), Kris Gray (KGY), John-David Dalton (JDD), Ben Newman (BN), Morgan Phillips (MPS), Shu-yu Guo (SYG), Paul Leathers (PL), Ben Smith (BS), Zibi Braniecki (ZB)

-----

## 10.ii.a Shared Memory And Atomics

Lars Hansen

https://github.com/tc39/ecmascript_sharedmem


LHN:

### Agent Semantics

Blocking: an agent can block waiting to be woken without returning to its event loop

Web awareness: an embedding can deny some agents the ability to block (eg. browsers main thread)

Forward progress: agents must eventually advance if

All agents die at the same time

### SharedArrayBuffer

- New Data Type
  - Like ArrayBuffer
    - map TypedArray and DataView onto it

  - Unlike (see slide)


Sharing Memory



### `Atomics`

The global `Atomics` namespace has static methods that operate on TypedArrays

Atomic access:
- `load`
- `store`
- `add`
- `sub`
- `and`
- `or`
- `xor`
- `exchange`
- `compareExchange`






BFS: Is it possible to have another worker store between wake?

EFT: Yes

DT: A spin instruction that doesn't spin, on x86?

LHN: Yes

- Investigated `pause` as a lightweight `wait`, that wouldn't go into a spin, but `wait` for a short time
- if hot `wait`, could've used `pause` before going into a `wait`
- you could use `pause` instead of direct into `wait`



(I'm not sure I captured this as well as it could be, would appreciate more eyes/brains to revise appropriately)


### Memory Model

... see slide

### Challenges

... see slide

### Opportunities

ES is "easier" than C/C++
- Performance demands slightly lower
- Shared Memory sep. from non-shared
- Only flat shared memory, no pointers or objects

... see slide



### Two Level memory model 1

Conventional axiomatic high level model

- Defines sync accesses
- sync order
- "happens=before" relationship

... see slide


### Two Level memory model 2

... see slide

### Synchronization Order

... see slide


### Viability 1

... see slide

### Viability 2

... see slide

LHN: WH found an important bug in the memory model's definition of viability that causes the synchronization order to not be well-defined. Without a well-defined synchronization order we don't have a workable model. This will require a rewrite using an operational approach instead of the current two-phase viability and synchronization approach.

LHN: [talking about slide] Races "leaking" into the memory model of the sequential language.

WH: Agree that they don't leak (and must not leak). The price we pay for that is significant loss of opportunities for optimizations. It remains to be seen whether that's a reasonable price, but I assume it is for now for the purposes of this proposal.

LHN: [talking about slide] Security issues are the "cost of doing business" of shipping shared memory, at least according to one major browser vendor. Mozilla is less sanguine about that.

MM: Is there any way to ameliorate this?

LHN: Add a switch to settings to turn multithreading off.

(discussion, re: changes that need to be made)

WH: The memory model will need to be rewritten.

?: Why rewrite? Can't we just fix the bugs that WH found in the presented memory model?

LHN: What I just presented is the new memory model I'm developing to fix the bugs, not the one currently in the spec.

- Avoid a circular

WH: What was in the spec had fundamental incorrect assumptions such as defining viability as a separate phase before synchronization, or the ability to put all memory accesses (including non-atomic ones) into a global total order, which just isn't true.

WH: We all agree on what the simple cases where everything is synchronized properly ought to do, such as what happens in an atomic load that sees the result of a prior atomic store. It's in the other cases that need to be nailed down where the big memory model issues lie.


SYG: How to test?

- An impl to be compliant, must be able to observe the memory model
- Is that possible?


BS: without particular axiom, here is X that breaks.


SYG:


STH: Write the memory model, rep. all the legal executions. Run X times, ensure that all


SYG: How to test the actual implementation



#### Conclusion/Resolution

- Stage 3 acceptance
  - After Waldemar is satisfied with rewrite of memory model
- API freeze granted?


## 10.i.b Disregard lastIndex for non-global non-sticky regexps

(Leo Balter)

PR from Claude Pache https://github.com/tc39/ecma262/pull/627


LEO: The change is: "don't do the lastIndex step unless isn't actually necessary"
https://github.com/tc39/ecma262/issues/625

DE: Global regexps don't make sense when frozen

- Some programs freeze regexps, unsure why.
- This is in use, received bug reports

(discussion, re: how long this might've been allowed?)

AWB: user-freezable properties and strict mode introduced in ES5

DE: Doesn't make sense to read/write lastIndex unless actually necessary.

AWB: Could break something

DE: True
- The plan is to attempt the fix, ship on chrome/canary and see what happens

AWB: (recapping the proposed fix)

LEO: This PR also adds a change to avoid get and ToLength operations on lastIndex for the same regexps. A poisoned RegExp lastIndex property wouldn't affect it.

```js
function test(rx) {
    rx.lastIndex = { valueOf: function () { throw "ok" } }
    try {
        rx.exec('foo')
    }
    catch (e) {
        if (e === "ok")
            return true
    }
    return false
}
```

LEO: After this patch, a `test(/a/)` should return false.

MM: That does not only address the web compatibility issue, but does a clean-up on the lastIndex.

#### Conclusion/Resolution

- Merge it
- Implement in canary and report what happens



## 10.iii.d Object.shallowEqual

(Sebastian Markbåge)

- [proposal](https://github.com/sebmarkbage/ecmascript-shallow-equal)


SBI: Problem...

### Memoization


... see slide

```js
function eq(a, b) {
  return Object.is(a, b);
}
function memoize(fn) {
  let lastArg, lastResult;
  return function(arg) {
    if (lastArg !== undefined && eq(lastArg, arg)) {
      return lastResult;
    }
    lastArg = arg;
    lastResult = fn(arg);
    return lastResult;
  };
}
function calc(obj) {
  return obj.x + obj.y;
}
let memoizedCalc = memoize(calc);
let obj = { x: 1, y: 2 };
let res1 = memoizedCalc(obj); // slow
let res2 = memoizedCalc(obj); // quick
let res3 = memoizedCalc({ x: 3, y: 4 }); // slow
```


SM: Would like to be able to compare only the own property values



WH/MM: (discussion about concerns and objections that have been previously discussed)

YK: Does this anticipate being faster on value types?

WH: As an evil villain I love the ability this might give me to compare the internal variables captured inside closures [scary emoji]. Mwa ha ha ha ha!

MM: That's one of the issues I had raised.

YK: ?

SM: Most of the time, returns false.

YK: (equating semantics to memcmp)

AK: No, memcmp is just implementation suggestion

MM: The semantics:

- If the answer is true, guarantees follow
- If returns false, no guarantees follow

YK: The guarantee using Object.is?

MM: Uses identity

SM: Compare objects across realms is also a question

YK: Ok, the intended implementation is memcmp

(confirm)

FST: There's a browser war on. If [browser x] returns true 30% of the time in this case, then I must return true at least 25% of the time.

AWB: Are there other approaches you could use to obtain much better performance?

YK: The whole thing is a performance detail which we don't really specify. There are some things that look like value types but in fact have expensive === operations.

AWB: We chose to have multiple representations of things like strings for performance reasons. Now they will cost us. It's hard to specify semantics.

FST: As a browser vendor I don't want to constrain otherwise efficient representations due to the performance implications of wanting to return true from this feature.

MM: This is affected by the transposed implementation of weak maps.

WH: And it leaks information about what's in the weak map.

MM: You'd want closure state to not be part of the comparison.

MM: We want to store private state in object slots, but we want object scans to not reveal anything about the private state.

FST: Implementations will need to distinguish different kinds of internal slots anyway.

WH: This presents similar issues to NaN comparison, but for strings. As the example in the presentation showed, now you can figure out the pedigree of whether a string was constructed in one piece or as a rope by something on the other side of an abstraction boundary — something that must not be leaked for security reasons.

BE: leaking string implementation details (Rope vs. Flat representation) has been constructive for Heartbleed-like security attacks in past.

STH: evidence of the code you've written being slow enough

SM: no evidence yet

AWB: Here's another path... bring the slow path code to implementors and try to optimize in the runtime. Then with this experience, determine a proposal for language or built-in library changes

SM: Will try

WH: Do implementations ever store hashes along with strings to be able to quickly determine that they are not equal?

FST: We intern some strings, but not all.

(discussion, re: hashing, string interning)

YK: MM, are you not worried about the moving GC leak?

MM: I am.

YK: Moving GC... do a comparison, it's true. The object is changed by GC, and becomes false

STH: No

EFT: If there is a concrete case that shows instability, we can explore

WH: Can discover if implementations do lazy string interning

MM: Do meet S1 criteria, but not worth trying to move this forward because this doesn't have a chance of advancing further. Identified real issues, that we can find a way to address. Sam's suggestion might be the only viable

STH: Actual shallow comparison, implement that in VM and work on optimizing.

AWB: Essentially same as my suggestion

Agreement, but comments from implementors that I didn't quite catch

SM: Object.assign could be done much faster in VM, WeakRefs... Plausible to find other ways to accomplish same thing. Difficult to reach non-leaking solution.

MM:

Something about exploring alternative solutions


It's hard to hear because they are across the room and basically mumbling as far as I can tell. Mark is facing away and it sounds like "mmph mm-mmmph err mmph foo sh mmph sh"


(discussing "fast")

YK: VM authors recognize security issue of fast

MM: How much slower would be an accurate implementation of shallow comparison be?

SM: Would it be possible to expose the ability to compare shapes [or use the shape as a key in a map]?

MM: The nondeterminism arguments apply to anything that assumes same shape.



#### Conclusion/Resolution

- Explore STH/AWB recommendations




## 10.iii.b Promise.prototype.finally

Jordan Harband

https://github.com/ljharb/proposal-promise-finally


JHD: (presenting from the link above)

AWB: How would a user write something that is rejected from a finalizer?

WH: What does finally return?

JHD: A new promise

DD: Conceptually wrong to overwrite return values

YK: There is control flow model and have way to...

WH: How does this interact with thenables?

JHD: If the finally return value is a thenable that's resolved normally then it gets replaced with the prior resolved value.

WH: Does this introduce a notion of finally-able with parts of the system probing for the presence of a "finally" method analogous to what they do with probing for a "then" method?

MM/JHD: No, just like we don't have a "catchable"

JHD: (explanation of naming, can be reviewed in proposal)

BE: names are metaphorical and analogical, not only identical up to isomorphism; finally seems good to me.

- Existing implementations noted as well

MM: Some "wrinkle" in Q?

JHD: Will identify and note if necessary

DD: Could be naming, ie. "fin" for ES3?

BE: `promise['finally'](...)`

JHD: No conflict re: cancelable promises proposal

YK: Might be good to have finally in language, before 3rd state

JHD: Same

- Devs can proactively use finally where semantics match

YK: Might be hard to convince that finally is the right thing to do

AWB: Why wasn't finally included in ES6?

YK/MM: The ES6 Promise feature was "maximally minimal", so finally, along with others, eg. queue, were postponed

JHD: Stage 1? Note that this meets the Stage 2 requirements.

JHD: Stage 2?

DD/DE: There are issues that need to be addressed in this spec text

JHD: changes needed in this spec, to reach Stage 3

- PromiseReactionJob needs attention

MM: Want to revert my Stage 2 agreement...?

JHD: (cites Stage 2 from process doc)

MM: (something about Stages)

JHD: If I get Stage 2 now, I can work towards Stage 3 in September

(General discussion about process)

YK: We frequently have disagreements about the process.

DD: Disagreements on process aren't helpful

AWB: Don't want to jump feature two stages in one meeting

YK: The criteria is met
- I want criteria that's objectively applicable

AK: The criteria is "there is spec text to review"

JHD: Since this was on the agenda for May, then everyone diligently reviewed, right?

AK: There is no review requirement on Stage 2 spec text. Achieving Stage 3 requires review and revision, etc.

JHD: So, AWB objects to Stage 2 on the grounds that it's two stages in one meeting.

AWB: Won't block if the rest of the room wants to advance

WH: Have no objection to this, but in the future I'd love a prior notice on the agenda for any item that wants to jump more than one stage so I can look at it much more carefully before the meeting.


#### Conclusion/Resolution

- Stage 1 acceptance
- Stage 2 acceptance




## 10.iv.b Cancelable promises update

Domenic Denicola

Slides: https://docs.google.com/presentation/d/1kSY7X1ymw5f2oatDrZaMJh4Z_wpd0ynZIimhUyqhbrY/edit#slide=id.g15f86355f5_0_55

DD: Major change: third state

- A new completion type is unable to achieve consensus
- Concern:
```js
try {
  f();
  g();
} catch (e) {
  h();
}
```


A new exception that is not an error: Cancel

- Does not subclass Error
- Branded with a [[CancelBrand]] internal slot
- Does not get reported to the host
  - window.onerror
  - process.on("uncaughtException", ...)
- Does not get tracked as an unhandled rejection either
- throw Cancel("message")


Making it easy to treat cancelations as non-errors

Bad code...

```js
try {
  await fetch(...);
} catch (e) {
  if (!(e instanceof CancelError)) {
        showUserMessage("No data for you, sorry.");
  }
} finally {
  stopLoadingSpinner();
}
```

Proposal:

```js
try {
  await fetch(...);
} else (e) {
  showUserMessage("No data for you, sorry.");
} finally {
  stopLoadingSpinner();
}

// Also, Promise.prototype.else
```


Addresses the new code, old code issue, because no old code will have this form,


JHD: (question about brand checks)

WH: Can you do try/catch/else?

DD: No

JHD: Any catch cancel?

DD: No, this is everything _but_


Cancel token's cancel() always creates a Cancel

```js
const { token, cancel } = CancelToken.source();

cancel("message");
// internally does: new Cancel("message") and stores

token.throwIfRequested(); // throws the stored Cancel

token.promise.then(value => {
  // value is the stored Cancel
});
```


MM: Then still invokes the second callback?

DD: Always has been
- source of bugs
- throws happen, people expect their catch handler to be called

MM: I disagree with your opinion on the usefulness of `.then`'s second argument

DD: it's more of a power user feature.

DE: This works better with the two argument `then`. previously there was a back compat concern (with third state), and with this proposal, it's more compatible with 2-arg then.

MM: Having `else` in relation to `then`..,

Cut off by other members who are time constrained

BE: Is dependent on state of the stack?

DD: No

DE: Sounds like this is analogous to then/else, letting cancels propagate, where 'then' handles the next try and 'else' captures the non-cancel reject; I think this is consistent with the two-argument form

DT: A wants to suppress errors if A is being canceled, regardless of what B does. If B errors, it goes up to A and A can decide what to do.

DD: I recall this concern, I disagree that this matches all reality

DT: Back to try/else. Q: try this thing and my local token is canceling, suppress error, otherwise...
- Need

MM: The test: is it a cancelation?

DT: A cancelation is a fine way to implement shut down
- Need to allow the shutdown, avoid thrashing

DD: Experience shows that it's important to suppress the...

DE: Sounds like the disagreement between Dean and Domenic is whether to just suppress the one cancelation, right?

MM: Asking for: source of information is a distinct thing, expanding the syntax taking into account the token as a source of information.

DT: I'm saying we can get a syntactic form that can do both

DD: I'm only trying to address this problem,

DT: (describing example of cancelation where a download was stopped, but results in a parse error of the incompletely downloaded contents)

YK: hard to imagine a library creating a cancel token... (I missed the entire scenario, Dean started talking)

DT: I create a file and a cancel token and hand the file to the parser, then trigger the cancel token, which stops the parser. For example, stopping a page

DD: Stopping a page is a bigger deal

BE: (asking for summary of what needs to actually be addressed)

DD: The question is, is there an unobtrusive way to have syntax that provides the semantics that Dean wants?


DT: The Question: The indirect cancelation, does it turn into an error?

DD: Don't think we need to address the case of "buggy code"
- Part of why no longer championing try/catch/else

DD: The concern is about calling into a library which, you cancel the library's overall operation, and it gives you an error rather than a cancelation. The conclusion is that that is very hard for the library to do; these syntactic affordances make it hard to do as you'd have to do a catch, followed by a brand check, which is intentionally hard.

DD: I'd like the committee's feedback on the full spec, which is now much smaller due to fewer modifications to promises, etc.

DD: Some more ideas on making Promsies more ergonomic: Make cancelation easy in async functions.

More Ideas...

- Inserting cancelation opportunities into async functions

Simplest case, pass the token:

```js
async function cancelMe(cancelToken) {
  doSyncThing();
  await doAsyncThing(cancelToken);
  await anotherOne(cancelToken);
}
```

What about uncancelable things?

With the current proposal...
```js
async function cancelMe(cancelToken) {
  doSyncThing();
  cancelToken.throwIfRequested();
  await doAsyncUncancelableThing();
  cancelToken.throwIfRequested();
  await anotherOne();
}
```


Probably want...

```js
async function cancelMe(cancelToken) {
  doSyncThing();
  await Promise.race([
    doAsyncUncancelableThing(),
    cancelToken.promise.then(c => { throw c; })
  ]);
  await Promise.race([
    anotherOne(),
    cancelToken.promise.then(c => { throw c; })
  ]);
}
```

...But that's gross.


This is better:

```js
async function cancelMe(cancelToken) {
  await.cancelToken = cancelToken;
  doSyncThing();
  await doAsyncUncancelableThing();
  await anotherOne();
}
```

Defines a new meta property:

```
await.cancelToken
```

MM: Which awaits does that change?

DD: The ones afterward?

DP: How do you get rid of it in that execution?

DD: Set to `null`

SP: An await inside an arrow function?
- Carry over?

DD: Syntax error


DT: Do uncancelable thing might be multi-turn, the only reason for race is you might want to do the stuff after as a result of cancelation
(I need that double checked, I don't think I got it correctly)

(We're looking at...)
```js
async function cancelMe(cancelToken) {
  doSyncThing();
  await Promise.race([
    doAsyncUncancelableThing(),
    cancelToken.promise.then(c => { throw c; })
  ]);
  await Promise.race([
    anotherOne(),
    cancelToken.promise.then(c => { throw c; })
  ]);
}
```


DT: Moves final behavior from the end, to middle

DD:

DT: The conse. not obvious, not possible to test, is the "re-ordering"

DD: Not reordering

DT: it's fundamental reordering. You're moving something that is syntactically ordered, to execute out of order

YK: When async thing, await means "some promise". await.cancelToken is a new promise.

EFT: (confirm)

YK: Arrow functions do not inherit await.cancelToken because they do not generally inherit control-flow (like return) and async/await is control-flow

...


SP: There is a potential memory leak to discuss.

DD: Can we defer that?

SP: Yes.


(discussion, re: es-discuss request for changes to this proposal)

SP: Scope of cancel? Race and All

DD: coming...

(next)

With the proposal as it is:

```js
function delay(ms, cancelToken) {
  return new Promise((resolve, reject, cancel) => {
    const id = setTimeout(resolve, ms);

    if (!cancelToken) return;
    cancelToken.promise.then(cancelation => {
      cancel(cancelation);
      clearTimeout(id);
    });
  });
}
```

JHD: Would have to pass cancelation through that cancel function?

DD: Yes

Similar for XHR...

```js
function xhrAdapted(url, { cancelToken } = {}) {
  return new Promise((resolve, reject, cancel) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => resolve(xhr.responseText));
    xhr.addEventListener("error", () => reject(new Error("could not XHR")));

    if (!cancelToken) return;
    cancelToken.promise.then(cancelation => {
      cancel(cancelation);
      xhr.abort();
    });
  });
}
```


DD: Note using `new Promise` which really only used when your doing async that doesn't use promises

New API:

```js
function delay(ms, cancelToken) {
  return Promise.cancelable(cancelToken, resolve => {
    const id = setTimeout(resolve, ms);

    return () => clearTimeout(id);
  });
}
```

SP: want to make async function cancelable...?

DD: Still use promise constr with legacy code that doesn't use promises


DT: question about [token].promise.then...?

DD: Come back to it.



Cancel Token Composition?

Precedent from .NET:

`const { token, cancel } = CancelToken.linked([ct1, ct2, ...]);`
Here token is canceled if any of the following is true:
cancel() is called
ct1 becomes canceled
ct2 becomes canceled
...
I haven't really investigated what this is used for in the .NET ecosystem...

The extra cancel() seems useless and an artifact of the .NET setup, so instead:

.NET's version but a little better


`const token = CancelToken.some([ct1, ct2, ...]);`
Here token is canceled if any of the following is true:
ct1 becomes canceled
ct2 becomes canceled
...
Still unsure what the exact use cases are, but it seems plausible.



DD: Call it "some" or "any"


SP: The leak: scenario where cancel token is much longer lived than the code being canceled.

DD: You have one cancel token with long lifetime and components with shorter lifetime

YK: In Ember's cases, you rapidly get into situations where the cancelation is complicated to thread, e.g., async methods.

DT: You end up creating links at different points in lifecycles

DD: So there are good use cases, for CancelToken.some.

Strike: "Still unsure what the exact use cases are, but it seems plausible."

DD: So does anyone need CancelToken.every? .NET doesn't have it.

DT: Never needed it [in Midori]

YK: We should think about it because it's symmetric

DT: It's asymmetric; cancelation is monotonoic. We just don't get this pattern in Midori.

SP: Doesn't sound useful

DT: You might end up with some nice usages of 'some', so it is a good thing to have.

RW: Why not call it CancelToken.all?

DD: I should think about that harder; there was some argument about all rather than every. Anyway, this is more about 'some' given that 'every' is not useful.

RW: In favor of 'all': For explanation purposes, it would be nice to have this analogy. Apply what you already know.

YK: I have become comfortable with a cancel token as a parameter.

DD: The concern Yehuda has raised is, the semantic burden on developers of threading the cancel tokens through all the APIs, and changing all the signatures, is an issue. Should we mostly do options objects or bare parameters?

YK: Seems difficult to have a universal convention

DD: In .NET you have static types and overloads so it's easier.

DD: YK's idea was to introduce syntax for allowing cancelTokens and awaits to work better together:


```js
async function cancelMe(cancelToken) {
  doSyncThing();
  await doAsyncUncancelableThing(cancelToken);
  await anotherOne(cancelToken);
}
```

To...


```js

async function cancelMe() {
  doSyncThing();
  await doAsyncUncancelableThing(await.cancelToken);
  await anotherOne(await.cancelToken);
}
```

YK: This would continue with our tradition of implicit parameters, e.g. implicitly passing 'this'. You don't want to have to add it explicitly


YK:

```js
async function cancelMe() {
  doSyncThing();
  await doAsyncUncancelableThing(await.cancelToken);
  await anotherOne(await.cancelToken);
}

let [cancelToken, promise] = [some ambiguous token] fetch(...);
```

MM: What would this correspond to with explicit characterization?

```js
function fetch() {
  return await.cancelToken;
}
```

YK: There is a pervasive threading problem. This is analogous to new.target.



YK: `[some ambiguous token]` is the machinery that represents the longhand that Domenic showed

```js

let token = new CancelToken(function(c) {

});

function fetch(

@Yehuda, can you fill in this example with some code that illustrates whatever you were going to write,

```

DD: What I'm hearing is that people are not heavily concerned. Sounds like this might be worth pursuing. Cancelation already has a lot of stuff in it, and it's hard to get a read on how many people are going to have objections. Dean already raised several objections and we didn't have time in the timebox to raise all of them.

DT: good effort and really want something along the lines

YK: If the implicit argument fails, I'm not sure whether I'll be OK with this whole proposal.

DD: There is some enthusiasm for this proposal, it seems, including some of the additions. More is available in the repo. I'll add more spec'd things, including await.cancelToken, Promise.cancelable, and CancelToken.any

BT: What do cancelable promises change about async functions? Seems purely additive.

DD: Yes, seems purely additive. We don't have third state.

YK: It'd be possible for await to send cancelation tokens, but only if you do extra things to thread things through.

BT: Another question about Domenic's proposal: Is the rationale for why third state is bad documented?

DD: I'll write it up.

BT: I think it needs to be reflected, so we know years from now why we didn't go with third state.

#### Conclusion/Resolution

- Continued development based on today's discussion
- await.cancelToken
- Promise.cancelable(...)
- CancelToken.any|some (whichever?)
- DT to provide direct feedback
- DD to write up reasons why not going with third state: https://gist.github.com/domenic/f3ecf2dd1b27409567ba59e3fabbc047 documents the reasons briefly, as well as arguments against those reasons which were not found compelling enough to re-gain consensus on it.
- Next meeting, I'd like to move to Stage 2



## 10.iv Async functions

Brian Terlson

https://tc39.es/ecmascript-asyncawait


BT: When we got async functions to Stage 3, we did spend hours talking about possible futures for cancelation and how those futures would impact async functions. We found that additive things to async functions would also be additive things to Promises. So whatever you would add to one that would be a breaking change would be a breaking change for the other. I didn't see anything in Domenic's preentation that made me think otherwise. Even the third state proposal, I'm not sure would run afoul of that.

YK: The only issue is that, in the syntactic form there's a try/catch/finally, and in the method form there isn't

AK: There is also a concern about using try and catch, without finally

YK: And it's just worse in Promises anyway

MM: The only one that makes me nervous about a possible cross-cutting concern is getting a syntax for passing the cancel token. That's the one most likely to be one where we might end up regretting simply accepting async functions as is, without also having it be a lifting mechanism for threading the cancel token.

YK: I feel pretty confident that the kind of syntaxes that we would want to use would be the same syntax for regular functions. We need the same mechanism to work within functions that aren't async functions anyway, as they need to have the parallel calling convention.

MM: of the things we heard in the previous conversation. the only cross-coupling concern is the issue that YK brought up is trying ot get some useful syntax for threading the cancelToken.

MM: I don't think we should implicitly pass a parameter to existing sync function calls and change the semantics retroactively. Anyway, given the overall situation, I'm not arguing that we should hold async functions back.

WH: The grammar is both impressive and really scary, trying to see how much it can dance on the edge of a cliff without falling over — cover grammars inside of cover grammars — but I haven't found any flaws yet.

When is "await" usable as an identifier?

DE: anytime you are not in an async function. <then more details> We implemented it all in V8

BT: It's just like yield

WH: await is different from yield in that it appears at a much higher precedence than yield.

YK: What are you worried about?

WH: Ambiguities on code sequences that start with await/ and then get interpreted in diverging ways (due to the await-as-identifier vs await-as-operator distinction that flips the / between division and starting a regexp) by cover grammars vs. real grammars. It's a potential bug farm.

WH: I am not opposed to Stage 4, just noting the potential danger.

BE: is there a way to look at the grammar of "yield" to have it work?

#### Conclusion/Resolution

- Stage 4 acceptance


## 9.iii.c Decorators

Yehuda Katz and Brian Terlson

http://tc39.github.io/proposal-decorators/


YK: Has been working closely with Dan since the last meeting to come up with how to move forward. I want to address the technical issues. The spec is now in a Stage 2 complete state. Many have asked, why can't this be a transpiler feature. I think it's possible in principle for that to be true, but it's not as cut and dry. One problem is that it absorbs a bunch of syntax from the class body; it's important to coordinate that somewhere. You'd imagine that private state could use the @ sign, and you would want to understand that this is reserved for decorators. Also, it would be difficult to have a conversation in this committee about the class evaluation order (as last time) and interaction with features like private state. We have a lot of cross-cutting concerns to think through. The concerns from implementors is that adding more syntax features slows down the parser, which affects startup time.

MM: I was surprised by the idea of just doing this in the transpiler world.

YK: This will be standardized somehow; there are already two implementations. We should have a document that defines it, with some sort of spec. So it would have to be a delta on top of the JavaScript spec, if we keep it in transpiler land.

AWB: if it's done as a preprocessor, you'd have to do it to standard JavaScript semantics. So everything would have to be expressible in terms of the core syntax/semantics. So if the core isn't sufficient, it won't be possible to do it correctly.

YK: In order to get the semantics for high fidelity, the preprocessor will have to target ES5.

AWB: But then you can't get classes completely correct. If you were going to go the route of a preprocessor, what changes would you have to make to the current spec?

YK: We've been doing some refactoring. But it'll be hard to target ES6

MM: The decorator proposal allows a decorated constructor to result in a wrapping of the constructor. But since it's only recognized as a constructor in ES6 if it's written as a constructor, there's no way to translate

BT: In practice, you have to target functions, not classes. We will have responsibility for the problem no matter how we decide to layer it.

MM: Creating high-fidelity transpilation options on the way is a perfectly fine sequence of activity.

YK: And we will give this spec to the current transpilers. The only question is whether it's done here, or actually my opinion is that it would be somewhat possible to do as a layering

AWB: I don't think it's possible

YK: Anyone opposed to this spec being eventually in the language?

DE: I'm not convinced this spec should be in the language. Looking at Angular use cases, this doesn't support annotating parameters and other things, and there is no clear migration path to supporting those from this proposal.

DE: There is a competing feature from Angular for annotations

(There is no spec, but it's documented)

YK: I object to Angular approach, there are very real issues with that proposal that are unexplainable

JHD: The things they want don't block the addition of this feature? Why not add the other kinds of decorators later?

DE: Hard for me to see how imperative decorators like in this proposal would map to declarative ones that annotate parameters.

BE: Not here to future proof against all possible proposals by champions not in the room

YK: There is a spec here, this has years of development.

BE: too far to block

YK: Are you saying these use cases are insufficient

WH: Concerns about missing capabilities. Want to see a consistent path to annotating properties.

YK: This has become maximally minimal

DE: Concerns Andreas has raised: the decorator can run and do all kinds of things, which prevents optimizations

JHD: This is no different than the inelegant solution of O.dP after the class is defined.

BE: The question is: are we saying that we _never_ want to do this?

EFT: Surprised that this feature is being shied from when it's beloved and widely used in other languages.

WH: I like decorators! I just want to make sure that we create a consistent design of decorators for various kinds of entities and needs rather than falling into a max-min tarpit that supports some but then precludes others due to poor design choices.

YK: Willing to champion additions to this proposal to satisfy outstanding needs.
- The interop issue (with "annotations") has existed for some time, we can keep coming back with new features
- The work can be done in Stage 2
  - Babel is skeptical now
  - Stage 2 signals to community


AWB: My understanding is that Stage 2 is "not locked down", the language wants to solve this problem and will eventually include the feature.

Massive agreement.

BE: Are we in favor of adding a decorators thing?

DE: Not convinced an imperative decorator is the way to go

YK: Agree to explore decorators in other positions before Stage 3

WH: Concerns about missing capabilties. Want to see a consistent path to annotating properties.

BE: (@Dan) Worry about dynamic meta programming in class declarations?

DE: (some kind of agreement)

BE: Would love static decorators, but it's a hard problem and

YK: The Annotations feature requires evaluation of expressions, is not itself static

(discussion re: static decorators)

YK: Is the concern that adding this encourages too much dynamism in class declaration code?

SM: Will existence slow it down?
- Believes optimizations can be made to mitigate

YK: The decorator returns a descriptor that can be used, but cannot have effects on the object itself.

BT: Want to push for Stage 2

WH: If we approve this, are you committing to explore property and parameter annotations?

YK: Yes, I will do that before stage 3.

BT: Fair to make that separate?

NO.



#### Conclusion/Resolution

- Stage 2 acceptance




## 9.iii.b Private State

Daniel Ehrenberg

https://github.com/tc39/proposal-private-fields

Slides: https://docs.google.com/presentation/d/1RM_DEWAYh8PmJRt02IunIRaUNjlwprXF3yPW6NltuMA/edit

DE: I've taken on Private State proposal from Kevin Smith

AWB: Get WeakMaps out of the proposal! I don't want to see them anywhere near this proposal, whether in implementation or spec language.
- Remove the layering violation

WH: Don't want proposal formalized in terms of weak maps either because of GC correctness concerns.

See slides


DE: Should this be "actually private"?

WH: Yes

AWB: Yes

DE: Or Reflective?

No.

See "Why inaccessible private state?" slide

"Soft Private" already available through explicit Symbol use

AWB: Big issue: we changed class instantiation to predictable shapes at the request of Google. This completely throws that away

DE: We addressed that two meetings ago.

MM: The shape is static enough for the fast path to be fast. The only things that cause it not to have the shape that you expect are bizarre, rare things such as a return override or prototype mutations. Engines can still optimize for the fast path.

DE: two things we want to optimize for: 1) at the allocation site, how large (allocation size). 2) map transitions between different object states.

AWB: that's plausible; i'll need to think through it and reserve the right to bring it up again.

YK: I realize a lot of people disagree with me wanting soft-private, but we actually have to discuss it.

BT: could you expose a lower-level capability without syntax for now? (i.e., with computed properties + private symbols)

MM: private symbols don't work

YK: proposal would be a private object that looks a lot like a WeakMap

DE: one option is as YK said; another option would be trying private symbols, and we could work through the issue with them.

MM: if you reify private symbols, you break membranes.

MM: We're rehashing arguments we had years ago like "should private be soft or hard". There are notes.

YK: I object to the precedent "we had a binding conversation 5 years ago"



Call for Stage 2?


#### Conclusion/Resolution

- We don't have enough time?
