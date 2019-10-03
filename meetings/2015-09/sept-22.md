# September 22, 2015 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Sebastian Markbåge (SM), Jafar Husain (JH), Eric Ferraiuolo (EF), Caridy Patiño (CP), Mark S. Miller (MM), Adam Klein (AK), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Chip Morningstar (CM), Brian Terlson (BT), John Neumann (JN), Dave Herman (DH), Brendan Eich (BE), Rick Waldron (RW), Yehuda Katz (YK), Jeff Morrison (JM), Lee Byron (LB), Daniel Ehrenberg (DE), Ben Smith (BS), Lars Hansen (LHN), Nagy Hostafa (NH), Michael Saboff (MLS), John Buchanan (JB), Gorkem Yakin (GY), Stefan Penner (SP)


Remote:
Mark S. Miller (MM), Dan Gohman (DGN), John McCutchan (JMC)

-----

## Opening Items

JN: (Introduction)

JN: Agenda is https://github.com/tc39/agendas/blob/master/2015/09.md

YK: Post ES6, do we want to break up days into plenary and presentation.

AWB: An agenda item?

BE/YK: Add to agenda

Suggest:

- morning plenary groups
- afternoon discussion

LS: (facilities)


## Adoption of Agenda

AWB: Future agendas should avoid being specific about the version

BE: Helpful for me to know which features are on track

#### Conclusion/Resolution

- Change agenda "Proposal for future editions of ECMA-262"
- Agenda approved


## Secretariat Report

JN: 1 o'clock on Thursday


## 5.1 Shared memory and atomics

(Lars T Hansen)

- [proposal](http://lars-t-hansen.github.io/ecmascript_sharedmem/shmem.html)

Need slides

LHN: Work in progress at Mozilla, Google, etc.

Use Cases

asm.js

- pthreads in translated C/C++ code
- Support for safe threaded languages

"Plain" ES
- Shareed state and multicore computation
- Fast communcation through shared memory

Use cases conflict:

- asm.js has flat memory, no gc, string types
- plain ES is object based GC'd weak types

Compromise?

...

Approach

Provide low-level facilities
- SharedArrayBuffer + TypedArray
- Atomic Operations
- Concurrent agents (introducing)
- Agent sleep/wakeup operations

Build Higher Level facilities

- Locals
...
(need slides)


API: Shared Memory

A new data type:

```js
var sab = new SharedArrayBuffer(size);
```
(need slides)


Views on Shared Memory

```js
var sab = new SharedArrayBuffer(size);
var ia = new Int32Array(sab);
var fa = new Float64Array(sab, 8, 10);
```

(need slides)


API: Atomic Operations

```js
...
```


API: Agent Sleep and Wakeup

Modeled on the Linux "futex" (fast user space mutex)

```js
Atomics.futexWait(i32c, loc, expect, timeout);
Atomics.futexWake(i32c, loc, expect, timeout);
```

- Minimal assumptions, very flexible
(need slides)


Example: mutex lock()

```js
Lock.
//  get code from slide
```


Discussion re: scheduling and execution.

DH: tasks can be scheduled, but not executed

CM: Understanding there would never be shared state threads in JS. This appears to be that.

(Discuss after presentation, Moving on)

LHN:

Agent Model

- Need a model for concurrency in ES
- Define concurrency in termsn of agents
- Define agents in terms of ES6 jobs
- Give jobs a forward progress guarantee



Agent Mapping

- In a browser, an agent could be a web worker
- SAB sharing is by postMessage,
- WebWorker semantics need work, nearly useless today.

- In a non-browser setting (SpiderMonkey shell)
- concurrent thread, separate global environment
- mailbox mechanism for sharing memory


AWB: Can imagine request for generalized model

DD: A different group could approach to define generic

AWB: Dont want a mechanism that will only work in a browser.

LHN: (Confirms)

Implementation Concerns

- Trick to block on the main thread in browsers?
- Subcontracting, main browser thread actus on behalf of worker
- Possible to deadlock if main thread is waiting
- Make workers not truly concurrent
- Where's the bug?
- Subcontracting for UI and other things are also problematic

DD: An early version of this proposal said that these APIs were not on the main thread

YK: Scary to have locks on the main thread

LHN: Not that scary, it's no different than a loop

YK: Async functions are the solution that has evolved

AWB: Are the workers multiplexed?

LHN: If JS on main thread creates a worker and waits on the location, it will hang because the worker doesnt get started.

AWB: Semantically observable?

LHN: Can observe remotely (a corner case)

Memory Model (1)

- Atomics in the program are totally oridered
- Conventional "happens-before" relation on events:
- Program order (intra-agent)
- Atomic-write, atomic-read (intra-agent)
- futexWake called -> futexWait returns (intra-agent)
- postMessage -> event callback (intra-agent)
- transitivity, irreflexivity


Discussion: clarification of consistency model

Memory Model (2)

- Reads only see writes that happen before them (and only the last of those writes)
- Unordered accesses where at least one...
(need slides)

Memory Model (3)

- Races are safe, programs don't blow up
- Races are unpredictable, a race poisons the memory by writing garbage
- A race affacts... (need slides)


DH: Say there is a non deterministic collection of memory bits in location

YK: What happens when you read the garbage?

LHN: Currently will get the garbage


Memory Model (4)

Complications:

- Aliased arrays and cells thar are not exclusively atomic
- Weakly ordered memory (ARM, MIPS, Power)

C11, C++11 have similar issues, mildly unsound?

Java Better? But complex and subtle


DH: if mem model says data structure, behavior localized to data structure. integration with rest of language impacts jit compilers, spec semantics (how deep). Not sure what the biggest risk is... limited to array buffer and only in specific case? Invariants in loads and stores

LHN: optimization to load value from typed array, use it for something, eg. function call. If not affected, can reload.

DH: Already know typed array, can assume not shared array buffer. Cases where I _don't_ know the backing store, nervous

AWB: Typed array accesses with brackets

Limit concerns to optimizations re: Typed Array cases.

DH: Concerns: How much does this leap into the current spec. How much does it affect the lower level operations?

AWB: Typed Array access get turned into operations on their bufffer. Buffer operations become polymorphic (unshared, shared). A common operation that occurs, with slightly different behavior.



Other Memory Model Issues

- No "relaxed" atomics, we problam ant them but they are complicated
- No "acquire-release" atomics, ditto though weaker use case
- Shared memory can be used to implement high-precision timers (you just count), which can be used to simplif cache sniffing attacks
- Slight security concern
- Misc minor issues, see github repo


BE: Like mips load, link (re: "acquire-release")

LHN: (state of "acquire-release" on current platforms)


Status

- Spec is stable, memory model is being refined
- Firefox Nightly since Q1 2015, demo level code for asm.js, plain JS is running
- Google have committed publicaly, at least in part
(need slides)


CM: This is terrifying. Can see cases for use in libraries for communicating internally, but as soon as this is exposed to random web developers... The nightmare is people that don't know how to code in this paradigm. Likely a majority. Now can write highly insecure programs, introducing the problems that JS rid us of

YK: What about other high level languages, Ruby? It exposes pthreads. Then developers write better higher level abstractions

CM: Nothing to protect from authors of page and script running in it.

YK: Concerns is third party scripts?

CM: Yes.

YK: Could mitigate

DD: sandbox?

CM: Could design the things you might make with this, then codify into language...

YK: Verification?

CM: No, if the facilities don't exist, then safe.

BE: Agree, most web developers should not be tempted, even able to write shared memory programs. We need to talk about what goes wrong. Cannot have shared memory without races? We have demand for this.


Why Not Just for asm.js?

- Some tasks are best/only done in JS callouts
- I/O
- Thread Management
- Runtime tasks in general

- JS has data structures, easier to program
- The callout needs at least some shmem access


LHN: need to satisfy both use cases

DE: Any program can already get into an infinite loop, unresponsive.

CM:

BE: If we don't do something like this, there will be a bigger gap for webassembly stuff.

YK: Shared memory is not inherently unsafe, only in raw form. We can provide safe access.

(Mark joins on phone)

YK: Need to more concretely address the constraints

MM: Will read emails from waldemar:

- Introducing a high bandwidth side-channel
- Even if only computation with coarse granularity, the ability to access shared memory seems fatal.

LHN: Only fatal if you can prove it's not already possible

MM: No way to do high-bandwidth side channels, such as cache attacks

MM: Timing attack is: shared array buffer with self.

BS: Issue is using the shared array buffer as a timer, you just read it and allows cache attacks

MM: If attacker can create two threads that can communicate, you can create high resolution timer attacks

BE: There's been demonstrations of not-as-high resolution timer attacks that already exist. This is not the _first_ high resolution timer attack.

MM: Waldemar believes this is a bad vulnerability

BE: http://www.theregister.co.uk/2013/08/05/html5_timing_attacks/

DE: Any further conserns?

MM: Delayed weak refs because of

- JS has become mostly deterministic
- Plat

- bits in nan are platform dependency, not generatl non-determinism
- for-in iteration order is platform dependency, not generatl non-determinism


MM: On whatwg, proposed System object. System is not distinct from the ES built-ins. Grants

MM: perhaps the non-determinism comes from creating the Worker in the first place? Thinking out loud

Where does one get access to the SharedArrayBuffer constructor

Either from global or imported from module.

AWB: How do you gain access to an already existing SAB created in another Worker?

MM: Creating an SAB alone is safe.

BE: The

(http://www.theregister.co.uk/2015/04/21/cache_creeps_can_spy_on_web_histories_for_80_of_net_users/) / http://arxiv.org/pdf/1502.07373v2.pdf

LHN: the resolution of performance.now has been reduced to help prevent the caching attack

DD: not concerned about the paternalistic argument, rather the actual security concerns?

YK/CM: Concerned about the programmer shooting themselves in the foot

MM: Concerned about security attack, more than programmer

CM: concerned about DOS attacks from third parties
...concerns are directly related

YK: Right way: expose async futexWait

LHN: Originally had an async futexWait

CM: Proposing non-blocking-but-blocking?

YK: No, want to express sequencing in a local way. This will be done with async function
... want same solution, async futexWait

MM: Q: motivation for SAB proposal: conventional c/c++ pthreads code can be compiled through asm.js can still fnction?

LHN: That's one of the case

YK: Shared Memory is a useful primitive.

MM: Want to separate:

1. Compile old legacy pthread code
2. Make good use of hardware parallelism

BE: legacy?

DH: Tried to build higher level primitives to give deterministic parallelusm to JS. Challenging. Meanwhile the extensible web strategy proves every time. Expose better, high performance, multi-core parallelism primitives.

YK: Should give 0.01% more credit (like authors of gzip, etc)

LHN: first thing I did when I finished the prototype

MM: fan of the Rust/Pony approach, low-level, universal. Arrived independently at a similar result.

YK: Easily imagine a Rust-like model, b/w dynamic checks

DH: Rust has Shared Memory concurrency, static type system and library design that statically guarantees
...best of performance and programming model. Can't be added directly to JS, maybe with APIs and DSLs that have some speed tradeoffs, don't know what will win in the end

BE: MM mentioned Pony, which has similar design

BE/DH: Cannot evolve JS into Rust.

MM: not what I'm proposing. I'm proposing investigating building on TypedArray safely parallel memory system with ownership transfer of region, capitalizing on Rust/Pony development

DE: how do we solve the compile from C++ problem?

BE: circles back to earlier point: don't have time to find SAB alternatives, without exposing shared memory needs of C++. If we do nothing, then other "bad stuff" will happen. If we do this, then other people can experiment to find a better solution

MM: The potential show stopper: the side channel. I want to see some real analysis of this danger and why we should be confident that the danger is minimal, before we proceed.

LHN: we have security people working on that, we can try to expedite.
- danger is that page load, you think its safe. Allows to fork off a worker with shared memory, and there's the attack.

YK: Might want restrictions on the main thread, so ads can't own your site

LHN: is this appropriate for the language or the browser embedding?

LHN: whole thing with service workers/shared workers is tricky.

YK: Thing is (oksoclap disconnected on me, notes lost)

LHN: fundamental constraints with blocking on the main thread? Or can the browser implementations work around this.

YK: is this a fundamental C++ problem?
- fetch in browser: fork off a thread, do the work, wait for response.

LHN: depends on which web APIs are avai
- want to update webgl

"shared" or "transferrable" canvas

DH: Concern, if growing API, implementation burden to find ways to share with workers? maybe WebIDL?

AK: More clarification on urgency?

BE: if we do nothing, it is a bigger jump to WebAssembly, or somebody else will do it anway to compete. Can't polyfill Unreal engine 4.

DH: Jeopardize adoption of web assembly.

AK: Is this going to be a problem with wasm features for time to come?

BE: maybe in the future JS will not be serving the cross-compilation master, but not right now

YK: constraingts: what dynamic checks do you need to make SAB work?

BE: if we have web assembly in all the browsers, why would we need these in JS?

MM: Memory model discussion?

LHN: we talked about that.

BE: If we say out of bounds "no and forever", something else will happen (see: flash, java). We need to work towards something.

YK: concrete example: VLC in the browser, don't want to write C, write JS, chunk up the screen

AK: Can't use argument of "needs" c/c++ pthreads.

LHN: (pre lunch summary)

- This feature has cost
- sophisticated shared memory given to those that don't know how to use it

YK: better to allow the ecosystem to help us design the higher level sync operations than try to design ourselves

LH/MM: discussion of burden of proof of timing channel attacks

BE: hard to choose between higher-level and lower-level primitives

YK: quarantining helps that problem. Have to deal with timing channel attack.

CM: not sure quarantining is sufficient, what are the modes of vulnerability. Ecosystem of mutually distrustful components, run the risk of someone not paying attention, leaving the barn doors open

YK: orthogonal to the primitive, access to the primitive

AK: depends on the primitive

YK: actually, yeah.



(Lunch)


BT: True that impl. shared array buffers in wasm is easier than normal JS?

LHN: Different, not easy
...Optimizing generics atomics, backend implementation

BT: SAB in wasm have same security concerns?

LHN: Yes.

BT: Need a sense, wasm is a ways out.

BE: something will happen if we don't act

LHN: thought about having it only in asm.js, not sufficient. runtime and IO services need accesses to shared memory and atomics. some of it could be moved into asm.js, but not all of it. to do so asm.js would need access to DOM APIs.

DH: Value? Same potential security concerns. Same access from JS. Also brought in requirement to standard another thing. If done in asm, then need to standardize all of asm.

BT: what about WebAsm only? I don't think polyfills are critical. asm.js is great because it is a subset, sound great as a marketing story, but haven't seen a real example

DH: Important that it was a subset, was adopted.

BT: asm.js compiled stuff doesn't work when asm.js is turned off. Games will not run in wasm

YK: gzip.js?

BE: you're saying that things don't work well outside of optimized asm.js?

BT: wasm polyfill has no value to game developers. Unreal Engine running against this polyfill will not work.

DH: asm.js exists today! Polyfill WebAssembly to asm.js, it will run well.

BT: asm.js apps running without asm, don't run.

DH: two different stories: asm.js as a subset of JS is to break out of a deadlock. Disagreement between browsers about how to port C++ apps to the web. Competitive pressure created excitement. Kickstarting the process.

BE: (shows zombie chicken killing example in browser) compiled to asm.js, running in browser.
(He's playing this next to me and I'm really more interested in that than the current discussion. - RW)

DH: WebAssembly is in a different place -- not about disagreement between browser vendors, there is agreement. The polyfill here is about making sure that browsers that haven't yet implemented features can still run, and people can ship functionality.

BT: wasm polyfilled ontop of asm will be a useable experience?

BE: Yes, I'm playing right now.

BT: the polyfill burden for asm.js is too much, you can probably get better performance without asm.js. Kind of a side tangent

DH: this is super important! Need to keep our eye on the ball for polyfill for WebAssembly. Still have a couple of years before wasm, maybe more years before all browsers have the functionality, maybe timeline is off, but the polyfill story helps mitigate the risk of shipping wasm features.

BT: if I'm Epic, I need two codebases to support asm.js and non-asm.js browsers

YK: long tail of things that benefit from asm.js, but still work without

BE: spoke with Apple about this, they think they don't need to specialize for asm.js, can generate good code without detecting "use asm"

BT: Why polyfill?

BE: Can run code sooner than later.

BT: Browsers that don't support asm or wasm will be gone soon?

BE: That support asm, but don't support wasm.

YK:

BT: I think I can understand the value of the polyfill

BE: But do we want to add it to JavaScript for all time? Maybe that's not the right argument, what about Rust to JS, Pony to JS, etc.

BT: But you can still do that from wasm, right?

LHN: we need to make sure we support both use cases, compile to asm.js and data parallel in JS. Much more useful to have both than not

BT: I agree we shouldn't be telling JavaScript devs that they can't use these features, but do we save anything but focusing only on asm.js? It sounds like no

LHN: I don't think the extra burden to the JS dev is very big

AWB: It doesn't seem like it would be optimized very well if we force JS devs to communicate through asm.js for this feature

BT: If there is strong motivation to add for all time, then I'm fine. As long as not _just_ for a polyfill.

DH: I see this as a building block for the long term

BE: we need to reach consensus, but we don't have to say this is going to be in JS forever just yet


LHN: Request Stage 1, with a list of things to investigate.

MM: w/r to SAB, discussed extensively that burden of proof to show cache sniffing vulnerability is on the champion

... memory model is not contained. This will bleed into anything that touches the SAB. We need to try to find a way to contain it.

LHN: sounds reasonable

AWB: Object to Stage 1?

MM: no problem moving to stage 1

YK/SM: What restrictions do we want, who do they work? Difference between global and local.

CM: All concerns are stated.

#### Conclusion/Resolution

The committee agrees that those wishing to advance shared array buffers must explicitly address the following before further advance is considered:

1. To what degree might shared array buffers exacerbate the side channel problem that web browsers suffer from?
- The issue is the potential increase in vulnerability over the status quo.
- How bad might this new side channel be?
- How can we be confident that it is not worse than that?
- How bad is the status quo?
- How much less bad could the status quo implementation be without breaking the web?

Cite: https://github.com/lars-t-hansen/ecmascript_sharedmem/issues/1

[Waldemar: I couldn't attend the meeting because of an injury accident but was asked to share my concerns about how bad this can be. Here's a paper demonstrating how one AWS virtual machine has been able to practically break 2048-bit RSA by snooping into a different virtual machine using the same kind of shared cache timing attack. These were both running on unmodified public AWS, and much of the challenge was figuring out when the attacker was co-located with the victim since AWS runs a lot of other users' stuff. This attack would be far easier in shared-memory ECMAScript, where you have a much better idea of what else is running on the browser and the machine (at least in part because you can trigger it via other APIs).

https://eprint.iacr.org/2015/898.pdf ]

2. To what degree can normal JavaScript code be insulated from the complexity of modern memory models?
- For code that does not itself touch a shared array buffer, but for example, merely calls something that does, it is not reasonable to disrupt the programmer's understanding of the JavaScript program in terms of naive sequential consistency.
- Of course, one can do that at the price of fine-grain synchronization and/or avoiding all interesting compiler reordering like common subexpression elimination. But such approaches are likely to kill the performance that motivates this proposal in the first place.




## 5.2 SIMD.js Stage 3 proposal

(Daniel Ehrenberg, John McCutchan, Peter Jensen, Dan Gohman)

DE: (update)

(Copy from slide)

AWB: do you mean they are not canonicalized in a SIMD.js operation or when you extract? lumping load/store w/ extracting

DE: canonicalized at extraction
- Interfacing between SIMD and TypedArrays, never creating a JS scalar

AWB: don't think you need to say this

DE: consensus among implementors was to specify.

AWB: I don't think this is observable. It is no more observable than normal number arithmetic, you can tell with two values but not necessarily that a third is the same

DE: change makes spec more strict.

DH: observable.

AWB: TypedArray, have a signaling NaN. SIMD signals on signalling NaN, if the SIMD unit processes, you must get exception thrown.

DE: Yes, I think that's what should happen, but we also removed the feature in another case. It's not really in use

AWB: Read from TypedArray a f64, allow that to continue being a signalling NaN.

DE: We were trying to make the change on the writing side, but we changed to not care about that

AWB: concern that implementation will have to change to allow for signalling NaN. Saying that the implementation cannot change that to a non-signalling NaN.

AWB: Do any known implementations treat signaling as non-signaling?

PJ: x86 doesn't, it just uses the default control register

DE: We don't allow people to turn that on from JS anyway

DE: Suggested to make lane an argument to load/store

BE: case wants constant. (lane argument)


(Copy from slide "changes")

DH: (question about partial staging?)

BE: Seems better than going back to zero

DE: Diff in how hardware works, between ARM and x86. Proposal to have opaque type for this case

BE: Don't know how to fix this without support from hardware?

DGN: We have a proposal that works, but we don't have enough confidence. Current proposal doesn't use an intermediate type


(Copy from slide "questiosn raised by reviewers")

- SIMD as a built in module (now, global object)?
- Methods on wrappers (now, static functions)?
- Class hierarchy to reduce duplication?
- Equality semantics?
- Motivation for certain operations?


DH: agree, modules should not be a blocking depedency

AWB: Possible to define as module, but also not be a blocking dependency
...Issue is the _size_ (500 intrinsics) relative to the actual use.

DE: down to 300 now, signed vs. unsigned added an additional 100 or so

AWB: Didn't have to.

DE: targeting asm style compilers and normal JS JITs

AWB: One possibility: build hierarchy. eg. All the integer types can share an add method. You need to check the arguments anyway.

BE: this is class-side inheritance

AWB: confirmed.
...Type check -> type dispatch.
...add method can check type of value

BE: you're saying that implementations need to optimize down to functions with typed arguments

Discussion re: overall design.

AWB: remaining concern: huge API surface area

DE: Still don't think it's a major concern.

whiteboard...

```js
SIMD.Int32x4.fromInt16x8Bits();
```

Could be:

```js
SIMD.Int32x4.fromBits();
```

Because type check must be done _anyway_.

JMC: Doing that loses the static knowability

DE: Big difference between optimizing for a completely unknown case and just deoptimizing for disallowed types.

JMC: in terms of RTTI you don't lose anything, but in static case you do

static types give us hints, otherwise we...

AWB: a hint is just a hint, still have to handle the general case

DE: we can propagate the type infomration in asm.js

AWB: this is a general type inference propagation problem

BE: Full JITs do that, but asm.js doesn't. This is not a simple API

DE: Not usable by people who don't know what type they're working with ahead of time

BE: SIMD programmers must now the exact types, they'll write by hand. Nobody is calling for the frombits case except you (AWB). JMC, do you agree?

JMC: people will write this code by hand. people know the types, every SIMD program is completely typed. Nobody cares for a generic conversion, they know the types, it's been propagated the whole way through

AWB: That's generally true for most code that people write in most application domains. You just don't redundantly annotate the operations with the types

BE: I don't think frombits is a user concern

DH: This is a JavaScript DSL

RW: when you have uglifiers, like closure, it will alias builtins

PJ: that's OK, the declaration needs to be in the same context. if you look at asm.js code, that's how it works currently

RW: my question was about the static knowability, WRT to JMC's point

DH: (explains how optimizer can determine that builtin is aliased)

BE: seems like the remaining complaint is too many methods

AWB: is there some fundamental API design that can reduce the number of methods?

DH: I don't think counting the number of methods will lead to better design.

... The overall problem domain is affected by the combinatorics. It's a large domain.

JMC: you're asking is there some alternate API design we could have? We have as a group collectively tried to accomplish this, and we don't think there is.

BE: signed vs. unsigned operators

JMC: feedback we got is that the API would be better with explicit types. It goes against another constraint, lets have fewer functions.

AWB: my argument is have multiple types, but share functions between those types

DE: Doesn't work in asm

AWB: short term trade off

BE: Explicit type instructions that map to hardware instructions
...SIMD is _only_ about hardware instructions

DE: equality semantics... should `-0 === 0` wanted to generalize to value types, is this what we want? should it be SameValue?

AWB: if you have `Float32(0, 0, 0, 0) === Float32(-0, -0, -0, -0)`, how should those be compared?

DE: we don't think this will be useful for devs at all, it just needs to be defined. Simplest definition I could think of, and implementable

AWB: `===` gets applied to each of the elements?

DE: Correct.

AWB: Same issues that come up with scalar numbers in JS

positive and negative zero are equal, but NaNs aren't necessarily

DE: Could be that `===` is considered a "legacy"

AWB: I don't have the solution...

MM: Find deep equality with SameValue attractive

AWB: possibly, but I'm concerned about maps and sets. using a map for memoization, key is a SIMD vector. you want to memoize float32x4 differently with +0 vs -0

```js
let m = new Map();
m.set(Float32(0, 0, 0, 0), 1);
m.get(Float32(-0, -0, -0, -0)); // 1?
```

DE: Don't think anyone will do that.

MM: memoization is a strong argument

DE: I don't think memoization is useful for SIMD vectors

BE: used for constants.

MM: memoization is broken if you don't distinguish +0 and -0, e.g. dividing by this produces positive or negative inf
... Any NaN contained, must be not equal.

DE: you already have to do that with floats.

MM: not if we say that === is non-reflixive with the values

DE: Implemented in some browsers, seem convenient to us.

MM: strong preference. when it is applied to anything other than direct application to a scalar, mathematical equivalence class must be reflexive

Discussion of `===` and `==` semantics.

DE: I wouldn't want to make different behavior for ==

AK: This is more appropriate for Brian to deal with; DE said it's not important to SIMD.

DH: Is problematic for me that `NaN !== NaN`, except for when it's in a SIMD value, eg. `Float32(NaN, 0, 0, 0) === Float32(NaN, 0, 0, 0)`
... Only reasonable semantics: component-wise `===`, respect NaN

BE: it seems like we'll break with IEEE754

AWB: it seems logical that === should propagate out through the components for value types

BE: Do SIMD programmers want all NaNs to not equal?

JMC: Yes

BE: Do SIMD programmers want -0 to equal 0?

JMC: Yes

MM: Understand -0/+0, by why NaN semantics?

AWB: my only concern with the present design is WRT maps and sets. we decided to use SameValueZero


```js
let m = new Map();
m.set(Float32(0, 0, 0, 0), 1);
m.get(Float32(-0, -0, -0, -0)); // 1?
```

AWB: we could define SameValueZero for vectors to not distinguish + and - zero.

DH: we want SameValueZero and === to be recursively defined

DH: nobody expects 0 and -0 to be different in a set, nor do they expect NaN to be different

RW: And has, get will behave accordingly:

```js
let m = new Map();
m.set(NaN, 1);
m.has(NaN); // true
m.get(NaN); // 1
// even though NaNs are not `===` equal.
```

DE: we assume that SIMD users are more clever and will not be confused by this?

MM: we all agree that SameValue recursively does SameValue. My preference is that all of them recur with SameValue. Next... (missed the specifics here, sorry)



... in order to implement SameValue, if x != x && y != y then return true; else ... it knows that NaN is a bizarre case, and it tests for it explicitly. It knows that 0 and -0 are weird and test for it explicitly. That coding pattern is copied a lot

BE: this won't get any better with this

MM: I'm not suggesting that SIMD.js diverge, just for value types

DE: Brian, do you have an opinion?

BT: I'm in Dave Camps

MM: I'm going to register an objection, but if no one else agrees, then I'll let all these recur on themselves.

AWB: that's how value types should work, still concerned about maps. Maybe we should revisit for maps an explicit comparison function.

- https://github.com/rwaldron/tc39-notes/blob/master/es6/2013-01/jan-31.md#mapset-comparator
- https://github.com/rwaldron/tc39-notes/blob/master/es6/2013-11/nov-20.md#reconsidering-the-map-custom-comparator-api

BE: We have unfinished business with map

DE: We have an objection registered, but consensus on the current equality spec

Discussion of min/max vs minnum maxnum. Defined by IEEE754, related to NaN behavior. minnum/maxnum will return the other value if one is a NaN

JMC: confirms that IEEE754 defines min num, max num

AWB:

discussion about including length in SIMD operations

MLS: Resolution on built-in module?

DH: Need module loading completed

AWB: Don't need this

YK: Signed up for this previously, can restart work on it.

DH: Browser vendors are blocked on loader api

AWB: we should as a matter of policy, call an end to adding new globals

DD: I don't agree, the global object is where you put these things

DH: aspirational, but not there yet

AWB: Stage 3 means API is frozen.

DE: There is an outstanding API question re: `{load|store}[123]` (`load1(...)`, `load2(...)`), that needs to be investigated. Potential performance cliff.

YK: TLDR here is if you still want to make this change, you need to signal to the implementors that this is what stage 3 means

DE: Can decide now that we're not going to do this change.

PJ: problem is that we want people to use constants for accessing the lane, but they don't have to, and that needs to work

JHD: how hard would it be to split the load/store methods into stage 2, and the others move to stage 3. Does it work without those methods?

AWB: you could code the equivalent, not as efficiently

BE: will we learn more to help us decide?

JMC: this is a relatively new suggestion. I don't think we'll learn anything new performance-wise. If compiler cannot be sure that it is a constant, it can choose not to optimize. Let's just make a call

DGN: difference from extract lane: there are indexes in bounds that we can't be sure to make fast. Slow and tricky to implement

DE: behavior is strange to have operation throw if it would be slow

AWB: Still alot to work on in the spec. Is it at API freeze state or not?

BT: to the best of our knowledge, no changes.

AWB: enough thorough review of this large and complex addition to the language?

BE: SIMD seems stable. it's funky but its gone through the paces for stage 3. We wanted it for 262 because it blazes the trail for value types

AWB: more comfortable in another spec



#### Conclusion/Resolution

- Stage 3 acceptance
- `{load|store}[123]`
- Consensus on existing
- Equality Semantics
- Consensus on existing
- An Objection from MM
- Work to do on Maps and Sets




## 10 Tooling Update

(Brian Terlson)

BT: All proposals are now using ecmarkup

- 402 Complete
- 262 In progress

CM: Need improved workflow documentation.

AWB: Concerns about general public review; diffs not ideal

YK/DD: will review visual, structural diffing tools to add to workflow


#### Conclusion/Resolution

- Write up workflow documentation.
- Review and recommend visual, structural diffing tools to add to workflow
- Move 262 to Ecmarkup

## 5.4 Updates on class-properties proposal

(Jeff Morrison)

https://github.com/jeffmo/es-class-properties

JM: (updating)

YK: Decorator interop, with this proposal, needs reflection

JM: Don't decorators operate on the instance?

YK: Unrelated, decorators are described in terms of descriptors.

MM: How do class instance properties interop with decorators?

... Revisiting the proposal semantics.


MM: Expression itself is evaluated once per instantiation?

YK/JM: Yes

AWB: How does inheritance work?

JM: Each property and expression is evaluated in top down order as a result of `super()` in `constructor() {}`

YK: Mark suggests that these go in the constructor

BE: Problematic:

```js
class C {
  ha = eval(args)
}

var args = "arguments";
var huh = new C();
console.log(huh.ha); // ?
```
http://gul.ly/4du5

JM: as written, the `this` binding is the object that's been instantiated.

DD: This is an issue, the lexical scope is unclear

BE: But there is a "secret" thunk scope

JM: Users have been using this in Babel without any confusion about the expression being delayed or defered.

Discussion about `arguments` and `this`

MM: How is this an improvement over https://github.com/jeffmo/es-class-properties/issues/2 ?

DH: (responding to alt proposal) the syntax isn't good.

- The class body is for declarative parts of the object template
- The constructor body is for imperative initialization parts

Easy to get caught up in semantics and lose sight of syntax.

MM: Disagree. Convention to follow: always begin a class by putting the constructor first and in the constructor, properties declared, then blacnk line (for organization).

RW/AWB: Where does super go?

MM: This is an open question. Depends on what you need to do with instance properties and when

Discussion comparing:

```js
class Point {
  constructor(x, y) {
    public this.x = x;
    public this.y = y;
  }
}
```

vs.

```js
class Point {
  public this.x = x;
  public this.y = y;

  constructor(x, y) {
    // ...
  }
}
```

`x` and `y` not in scope.

JM:

```js
class Stuff {
  autoBound = () => {
    console.log(this);
  };

  id = getId();
}
```

DD: This SHOULD be written in the constructor.

RW: Completely agree, and also concerned with:

```js
class Stuff {
  a = () => {
    console.log(this);
  };
  b() {

  }
}
```

AWB: And what is `arguments` in that arrow?
JM: Same as arguments immediately before the class declaration:

```js
function foo() {
    arguments; // same
    class Bar {
        a = () => {
            arguments; // same
        };
    }
}
```

...

Discussion comparing the merits of Mark's proposal vs. Jeff's proposal.


MM: These declarations should result in non-configurable properties.

YK: Disagree.

#### Conclusion/Resolution
- Move to stage 1
- Jeff will follow up with Mark to further discuss his counter-proposal, and Allen to further discuss his thoughts on private properties
- Jeff will update proposal to store property declarations in slots (rather than container on prototype)
- Jeff will include reflection API for introspecting/reflecting declared properties
















(keep these)
