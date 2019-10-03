# January 26, 2016 Meeting Notes
-----

Eric Ferraiuolo (EF), Caridy Patiño (CP), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Leland Richardson (LM), Chip Morningstar (CM), Brian Terlson (BT), John Neumann (JN), Dave Herman (DH), Yehuda Katz (YK), Jeff Morrison (JM), Lee Byron (LB), Daniel Ehrenberg (DE), Lars Hansen (LHN), Nagy Hostafa (NH), Michael Saboff (MLS), John Buchanan (JB), Stefan Penner (SP), Sebastian McKenzie (SMK), Waldemar Horwat (WH), Mark S. Miller (MM), Paul Leathers (PL), Sebastian Markbåge (SM), Zibi Braniecki (ZB), Andreas Rossberg (ARB), Ian Halliday (IH), Keith Miller (KM), Tim Disney (TD), Miško Hevery (MHY), Brad Green (BG), Kevin Smith (KS), Brad Nelson (BNN), JF Bastien (JFB), Shu-yu Guo (SYG), Rick Waldron (RW), Staś Małolepszy (STM), Dean Tribble (DT)

-----

## Agenda

https://github.com/tc39/agendas/blob/master/2016/01.md


## Approval of the minutes from November 2015

WH: what sort of changes?

JHD: some editorial cleanup

#### Conclusion/Resolution

  - Minutes approved.



## 5. Proposals for Future Editions

## 5.i Zones

DD: Misko is presenting, zones.

https://docs.google.com/presentation/d/1H3E2ToJ8VHgZS8eS6bRv-vg5OksObj5wv6gyzJJwOK0/edit#slide=id.p

MH: Writing async code is hard, specifically book keeping of (begin/end of async tasks). Specifically for framework authoring, and cooperation between various components. In other langauges, this may be "domains" or "contexts".

MH: some existing implementations, Angular Zone.js, Zone, Dart Zones, Node.js domains/continuation local storage/asyncwrap, c# logical call context etc.

MH: this has been around for some time, but the lack of standarization prevents interopt and may also prevent more ideal solutions.

MH: Frameworks often what to know when work has begun and completing, this allows for batching.

WH: Can you clarify the example?

MH: In a typical application, a whole orchestration of async tasks occurs

YK: browser do this already, flush work -> calculate changes -> paint.

MH: by annotating different context, prioritizing is possible. One example would be animation context vs ..

WH: thanks

MH: another example is testing, existing solutions result in test "flickering", but using zones would enable some determism.

BT: Test262 would benefit from this, existing solutions require manual book keeping and tracking. No way to tell in the browser when a set of async operations have completed.

SP: it adds determism

MH: another use-case, is for measuring and instrumentation.

SP: you may also have interleaving plans, this helps group them and mitigate some common related issues

MH: good error handling, with zones you get the error handling for free. Global error handling lacks sufficient context

MH: You can also associate errors with the originating/initiating event for tracing/debugging scenarios.

DD: these actions can happen concurrently, an example would be an HTTP server serving many requests, each would want a zone To associated relevant signals.

MH: When you have unit test you want to know when everything is done so you can clean up to prepare for the next test in a clean state.

MH: this would also prevent test pollution

MH: How would this work?  Zone.current

MM: are you proposing global state that yields different values over time

MF: would a meta property be ok

MM: I had not considered this, it raises other questions

YK: this is a hypothetical API

MM: I understand this

MH: Time changes over time as well, but you cannot mutatie it yourself. `Zone.current` is similar in this regard.

...

MH: in a promise example, the callback would be associated with the zone it was instantiated in. So when invoked, it would remember its zone.

JM: how do zones change

DD: it hasn't been presented yet

YK: it is possible to create this API self hosted

DD: only if all async was hooked, and a transpiler for async/await

YK: I meant, if a user wrote this manually it would work

MH: Correct.

MH: We could monkey patch the then method, but their are limitations. These limitations include user-land task-queues, and other foreign async.

YK: and its common

MH: if they don't properly capture the zone, the value diminishes.

MH:

YK: ember has a mechanism, but without a standard interopt is hard.

MH: yes

DH: TLS analogy is the strongest one, async in JS is cooperative userland threads. What i haven't seen is, how to create such zones.

BT: So you said current implementation have holes?

MH/YK: It's insufficient to monkey-patch everything because frameworks might have their own event loop.

MH:  we need to provide the right primites so the platforms do the right thing.

MH: Now how to make new zones "slide: more realistic Example"

MH: Zones also offer local storage, and it is valuable

DD: The "node cloud team at google" wants TLS.

MH: ... describes other details, and suggests to look at the repository...

MM: What prevents you from calling a zone transition sync

BT: that is embers use-case

MM: run calls the provided closure sync?

MH: correct, the only way to change the zone is to call run or to call a wrapped function.

DD: run is to wrap, as call is to bind.

MM: the binding of rURL is it mutable? (referring to slide #12 "More Realistic Example")

MH: they are immutable

DD: one can put in a mutable structure

MM: the accessors are referenced via string, is that important?

MH: doesn't seem so.

MH: child zones inherit the parents zones

DT: can you arrange to merge multiple ancestors

DD: you can arrange manually yes

MH: we don't support that today.

(MM: Somewhere in here I made the point that asynchronous causality is a graph, but Zones needs to treat it as a tree.
At the base, the triggering of a callback has two causal ancestors, the registration of the callback and the triggering
of the condition that the callback should be notified about. In promises, these are respectively the .then and the settling
of the promise. All is a higher level pattern in which an outcome has more than two causal inputs.

What I finally understood from the discussion is that Zone's always follows only the registration, not the triggering, and
this does always pick a tree out of the causality graph. However, it is often not the tree that most intuitively corresponds
to the programmer's understanding of causality in their programs.
See http://www.hpl.hp.com/techreports/2009/HPL-2009-78.html)

MM: let me share when this would come in force, a Promise.all where the promise inputs were sourced from multiple zones.

SP: Only the callbacks will capture the zone, Promise.all itself wont' capture the zone, rather the callback passed to resulting promise one.

YK: i think we are making the graph vs tree mistake here

MH: the registration captures the zone

YK: I think MM is saying multiple consumer may want to be part of the causality

MM: Whoever invoked the then sets the zone

YK: that may not be correct

YK: let me try to say what the two use-cases are:

    1. somethingly ike TLS, sounds good.
    2. life-cycles hooks around stack pushing and popping, and that is extremely importent for flushing and rendering.

DD: i don't want to get into the hooks discussion yet

MM:  We need a standard API for the "wrap", the implementation isn't that important.

YK: The DOM has to do something, we will have to standardize.

DD: the host environment needs to register a callback, so a hook could be imagined.

MM: the fact that you are propagating from the registration, but that conflicts with the addEventListener example

SP: no this will work as expected as it will merely be another fork.

MM: If the first thing a zone does is execute a zone.wrap then the invoking zone gets throw away?

MH: The first thing I do in a click handler is to ask for a zone and do all the work in it.

MM: Okay.

YK: I agree that you could make these be trees, but I think it's bad that you can't handle multiple sources.

DD: Disagree as apps aren't trying to track this. We can take this offline to discuss more though.

YK: the concern that i have, is that causality and execution branching are intermixed. Frameworks will be the same place we are today, enumerating all the potential entry points.

MH: I'm having a hard time understanding

YK: do you enumerate all eventHandlers?

MH: no

MH: I want to make sure angular knows about everything, a second problem is to track user behavior flow. I would argue this requires hand tuning.

MH: Usually, zones trigger on router changes. App changes route and a new zone handles tracking from there.

WH: How do zones interact with iterators and generators? What happens if you start one from zone A and then call next from zone B?

DD: you suspect the execution context from the generator

MH: is this not the same as async

YK: presumably

YK: the data is stored on the execution context, pause resume should work.

MH: presents a strawman "slide: MVP API"

MH this is missing error handling, but that is handled by zone spec. Zone spec describes the details.

DD: having the fully customized wrap may not make it, as it makes some of us nervous.

MH: You get to wrap the callback into the wrap, but at the end of the day you don't get to override the Zone. Fundamentally, the result will be on the zone that was wrapped.

DD: Browser engineers are very unhappy about having to call code whenever setTimeout is called

YK: await having to do this is quite scary.

YK: if you don't monkey patch the world, the platform can be performant. This makes it somewhat scary.

WH: What's so special about 'then'? If a user implemented his own scheduling and callback mechanism analogous to 'then', would that capture and propagate zones from the creators of the callbacks or would it propagate them from the callers of the callbacks?

YK: i would hope async/await offers possibilities for optimization

SP: I believe async function would capture the zone

YK: await having different semantics seems like a refactoring hazard.

DD: if there is no callback, then there is no wrap.

SP: YK is the concern that the refactor from .then(...) -> await shouldn't change the instrumentation calls?

YK: yes

YK: wrapping allows you to intercept the scheudling

MH: no, wrapping is only post scheduling

MM: what about realms? onFulfilled could be in a different realm. The execution stack can thread through many realms.

*various members mime mushroom clouds*

** collective brain splosion**

MH: passing a callback from iframe1 -> frame2,

DD: we could handle this like bind, and let it work.

SP: what about cross realm data leaks.

DD: i think this is solvable, but the cross realm point is a good catch. We will need to explore this.

...: Examples have a then block presented statically, if the function

MM: it is the registration of the callback not the instantiation of the promise nor the function.

DH: I have questions about intra-thread uses of the API. Two questions:

    1. You have .get but not .set you can put immutable things in the .get so I'm not sure what it buys you to make it immutable.

MH: One property I'd like to have is that for apps that expect zone behavior, when you fork a child zone, application should behave the same way as without the fork.

DH: Only true if users don't mutate things. Is it vital for the language to enforce this guarantee?

MH: You can certainly override a property and that COULD break behavior. If code running in a child zone could mutate the parent then you couldn't see it in the parent.

DH: I didn't understand

DD: I'll rephrase -- if you allow children to set new properties, then they don't share the idea across the boundary. This is more of a path we want to guide you down rather than a path that must be enforced.

DH: I have a question that may clarify around lack of .set. There's history for other languages with TLS with use cases for what has historically been achieved through dynamic scope. A concrete example program would be a recursive descent JS parser. You have certain context being passed around like the labeles currently in scope. Only used a few places in the parser. It's a total pain to keep track. Other option is to use an OO pattern to carry context in a class/object so it's still explicit, but it's shrunk to one place. Another mechanism is to use a TLS (thread local storage) like mechansim or dynamic scoping so this becomes implicit. Only operations that need to access the state go through this. One answer could be we disavow this and say the OO way is the right way to do this. Another answer is to say this (zone) is right for doing this. Creating new zones is a heavy-weight api. Is there a lightweight user-land abstraction?  Is there no place for .set there?

YK: why not just provide set

MH: get will walk up the hirachy but set will not hence get/set are not symmetric.

YK: sounds like prototypes

WH: what you are after is dynamic scoping, and this is not dynamic scoping.

MM: two ways to implement dynamic scoping, shallow binding or deep binding. This is deep binding

DH: set is not a distraction here, the temp modify and revert is orthogonal, but in particulate in the dynamic set you actually want to use mutation.

MM: this sounds ok

DH: what does the UX look and feel like, when you are actually doing this. We may say, we don't care because its not a valid use-case. Could we build a library on top of this to improve the ergonomics

CM: if you make the zone mutable, you have taken away the immutability.

DH: yes

YK:  I am not wrong that using a mutable object in the slot. The parent zone will see mutation in the values.

DE: a problem with dynamic scoping with set, is that you may have  an outer scope that introduces a var, and an inner scope that defines a different variable. The hazard is accidentally overriding an unintentially is common, so disallowing set fixes this issue.

DH: we should do some exploration, using this API in those use-case and see if it falls over. We may decide that is not appropriate at all. OO may be a better way to solve this problem, although I myself am unsure what is the


DT: If A passes a zone to B and then to C, A could arrange so that B could change the state the C sees. A may want to arrange so that they are isolated very specifically. A needs to be sure, B cannot interfere with C etc. If we add set, A would need to add many defensive layers in-case of a malicious actor.

YK: a symmetrical problem is users may not realize the deep mutability.

SP: think prototype.value = {}  vs prototype.value = 1;, the former shares state the later cannot.

MH: I feel zones are more like an observer like a logging service. They get to watch over how an app runs and notify you to do something about it. Whether it's there or not, the app should function the same way.

DH: maybe the answer if you are using thread local dynamic scoping, it should not be built on top of zones.

YK: Arriving at "you should not put mutable objects there" is good. (referring to values passed into the zone)

MM: The proposal as it stand, there are some good goals that we should seek a way to address. Kudos on the good goals. The mechanisms as proposed combine several nightmares -- mutable global state, dynamic scoping, and before/after hooks. Before/after hooks reminds me of the nightmare of aspect oriented programming. They introduce an attack vector of invoking someone else's code during a turn while invariants are supended. Classically a thread is a sequential program, TLS (thread local storage) is a global variable for that sequential program. In TC39, we have successfully avoided global state -- if you lock down all the primordials, everything still works so far. We must keep that property. LISP has dynamic scoping. Scheme has fluid scoping. In Fluid scoping, thing that changes depending on the context you're in is the value of a lexical variable. You cannot see the values or rebind that var if you're not in the lexical scope. The strings are worse than classical dynamic scoping because the program can calculate the strings. Making them something first class or record based -- we should look how to restrict how you name those things. Otherwise you have a truly global variable.

YK: if you are too restrictive, people will end up virtualizing again.

MM: If you have fluid variables, you don't need to reinvent dynamic variables. They're still bad, but less bad. I'm firmly on the lexical scoping side of the debate.

YK: i think everyone agrees with that. Lexical scoping is the 99.9% case, some things don't quite fit in that. You can use globals or OO, all of them have issues. If you end up restricting, users will end up approximating the same thing.

MM: for most of the motivating problems for dynamic scoping, if rethought, lexical scoping patterns typically address the issues nicely.

YK: Who is the one rethinking it?  If it's an app developer, they won't end up doing it.

MM: I want to think through the concepts presented here without being anti-modular.

DD: to draw this to a close, why does this need to be in the language. Patching is hazardous, coordination between many collaborators is of value. We would like to move this to stage 0

MM: what does it mean to approve something to stage 0

DH: I think it's well motivated problem.

YK: well motivated problem

MM: if I endorse some of the goals but not the mechanisms, can I approve stage 0?

DD: Yes, and we encourage collaboration with the champions. Just want to move to stage zero if we can.

YK: Stage zero seems fine.


#### Conclusion/Resolution

 - Stage 0 approved


### Announcement

MM: Does ECMA have rules for NDA's signed at these meetings? Participants should not be required to sign an NDA, the company should protect its own secrets it should not be the burden of the participants.

We need to do some diligence, some work for the next meeting.

SP: Lots of these NDA's are totally incompatible with the nature of this TC

An email has been sent to István, and Salesforce will be contacted.

Its completely not binding, if it was not obvious.


## 5.iii Shared memory and Atomics (proposal)

Presented by Lars Hansen

(request slides)

LHN: motivation, why we need this. We will also go over some of the september concerns

(presenting slides)

Slides: https://github.com/tc39/ecmascript_sharedmem/blob/master/tc39/presentation-jan-2016.odp

LHN: Why not only for wasm?
YK: wasm will want to be sync exposable from JS which transitively means these constructs need to shared.

LHN:  next slide willl cover that

LHN: Why not only for wasm (2)

YK: we could say, wasm is only accesible async

LHN: we can't really

YK: this is a platform feature

MM: workers that have access to shared memory, are only available async.

LHN: what i am proposing is that we are proposing, is that JS define these semantics. This would give it some teeth, and enable healthier interopt.

DH: "if you're gonna drink, you're doing it under my roof"?

LHN: Why not only for wasm? (3)

MM:  given a shared memory buffer, each worker would be seeing it through a set of types. There is nothing that enforces which types, corect?

LHN: correct

LHN: why not something completely different?

YK: we also don't know what it is

DH: if we want, I could put a team on it for a couple of years

LHN: what is Pjs?

** parallel JavaScript **

A: Why is racy required

LHN: its hard to imagine C++ program that isn't racy

WH: Depends on what you mean by "racy". You can trivially eliminate all data race undefined behavior from a C++ program by turning all memory accesses into atomics. The execution would still be racy (i.e. unpredictable), but it would not be racy (i.e. have races causing undefined C++ behavior according to its memory model). The two meanings of "racy" are quite distinct.

A: one approach I could see, is the JS side only has synchronized acess to the array buffer.

LHN: concerns about slow

MM: pony + rust provide strong rules, can we enforce this?

LHN: that is off the table

DH: Don't know how to track ownership and infer types inside the asm.js typed array.

MM: the point that i am making, is that the type reasoning i am speaking of is only that of the typed array.

DH: but there is only 1 typed array for the program

DH: I can't make sense of this

YK: 1 heap, that is shared across threads, without races.

MM: no runtime cost im not claiming, there is a step (from dynamic -> static) that may involve an additional test.

YK: do you believe this cost would be cheap?

MM: im assuming (hope) it will be cheap

LHN: I would like to present this proposal not what MM is speaking about, but what MM is speaking of is interesting.

LHN: Some sort of integrity

DH: I was thrown off, because it is much more general.

...

DH: imagine that we had 1 big typed array, but where you could checkout sections of the array with different permissions (rw r) the sharing would be controller based on the permissions one had. This would allow improved concurrency, and safety. It can be data-race free, but would require some clunkyness. Alll this could be done via the message passing system, this could be spec'd and implemented.

LHN:  the point is, this kind of sharing DH is talking about has some issues and likely requires a better type system than JS has. Multidimensional arrays make this more complicated, (what killed it, i missed it..)

LHN: for ecmascript, we likely require a better system. But we have this system today.

LHN: I have decided to provide a low level system, and build a better system on top.

DH: A bigger KO, is that this can't come anywhere near the performance of the pure shared array buffer. Message passing comes at a heavy cost, as the hardware support for racy shared access enables order of magnitudes better performance

... Would a more constrained compile target not just solve this.

LHN: unity compiled some benchmarks, using shared buffer they benifited from 4x speed-up.

LHN: this API is a good basis to build a system on

WH: what is the API

LHN:

DH: We have done multiple years exploring this. With intel + Mozilla, we looked at race free high level API's and we really couldn't come to something that would work. It's not to say we are the only people to solve this problem, but their is limit to how much we can explore.

BE: WH you were ill and were not present to attend when this was presented the last time.

LHN: the shared buffer spec is small and stable

DE: In release behind a flag (in chrome)

LHN: alpha/beta/release will be behind a flag (on FF)

LHN: slide (API: Shared memory)

LHN: slide (API: Atomic Operations)

LHN: regular access to not guarentee tearing

WH: so everything is sequentially consistent, which is far slower than acquire/release on, say, x86

LHN: atomic access are sequentially consistent

What is the safe guarentee?

LHN: you cannot step outside the array, and the types remain safe.

WH: There is more to memory safety than that. Java got into trouble with this, and it caused grief for C++. Reading a value and using it twice, due to common optimizations, could result in seeing different values. Booleans that are neiter true or false, not because of strange bit patterns, but because of optimizations affecting the order of memory operations. If you try to nail this down so that it could never happen, we must restrict the optimizations to a level that hurts performance.

LHN: slide (API: Agent sleep and wakeup)

LHN: futexWait must no longer be used on the main thread of the browser.

LHN: slide (Agent model)

DH: what does a forward progress guarentee mean

LHN: more or less a fair scheduling guarentee

DD: are agents continents?

MM: worker goes through a sequence of jobs, there is a full ordering of jobs in any one worker. Each worker is a sequential program. Concurrency is between workers. I would be surprised if the division into jobs becomes relevant

LHN: i likely misspoke, my agents are most likely similar to what you call a vat.

MM: ok, so each agent executes a fully order sequences of jobs, where each job is executed to completion before starting the next job.

JFB: C++ is exploring forward progress guarentees to support weaker models, such as SIMD lanes or fibers. Its more a technical point.

JFB: C++ has spent many hours discussion this, it is quite complex.

LHN: slide (Agent Mapping)

LHN: to wrap this up, how you create agents, what they are and how you share them is all mapping specific. Browser vs node would be totally different.

LHN: in a browser it would be a worker, WW semantics need much work.

LHN: again, no futuxWait on the main thread.

MM: you are assuming agents are only coupled via shared array buffer or asynchronously

LHN: Slide (Memory model)

Totally ordered relative to a thread?

LHN: totally ordered base don the atomics

Physics doesn't let you have that, so..

WH: no you can

LHN: atomic operations from JS on all shared array buffers in your browser are totally ordered

JFB: the non atomic operations are all unordered, if you don't have atomics between them, everything can be re-ordered. The atomics provide ordering through happens-before with the non-atomic operations. The atomics provide inter-threads-happens-before between each other.

WH: I am not sure I believe you

JFB: there is a formal proof for the C++ model, there should also be a formal proof for this one before it is standardize.

WH: read behaves as sequentially consistent acquire, I don't know what happens if you try to load/release in c++ memory model

JFB: there is no load/release.. I believe this is beyond this content.

M: any atomic operation is sequentially consistent even if it is unrelated.

Browser that is spending many independent process, sharing memory is complicated. Im not sure what it means for them to be ordered

LHN: total order not sequential order.

LHN: slide (memory model 2)

LHN: this is easy to reason about, but slower then alternatives

WH: what happens during a race?

MM: once you read a value, does it remain stable or can it change?

WH: Do you get classical garbage or quantum garbage? (Quantum garbage is what happens in C++: reading a racy value and storing it into a temporary can cause the temporary to later spontaneously change its value).

LHN: i don't believe so

MM: so quantum garbage

LHN: Yes, quantum garbage.

JFB: architecture differences can make this impossible.

LHN: im wrestling with if that is reasonable, we have already defined races will create garbage, we are defining now how bad that garbage is. Even if you read garbage, the garbage is sensible for the type that you are reading.

LHN: some interesting complications, since we are using typed arrays, we can alias arrays, we can have atomic and non-atomic operations operating on the same array at the same time. Interesting problem for weakly ordered scenarios. We would like to give races a little bit of meaning. We want them to have enough meaning, so we don't crash the system

MM: weakly ordered data describes this

LHN: yes

MM: tearing is a out of thin-air value

LHN: nono that happens in a non-racy scenarios

WH: That is a different concept, memory models do not always match the intuitive notion of causality. For example, the C++ memory model allows you to write programs that test whether an atomic value is 42, and set it to 42 if it was 42, and the optimizer can cause, via various memory model deduction rules, to cause the test to become self-fulfilling.

LHN: relaxed atomics can cause this, we address this with strong atomics

...

LHN: lets  continue

LHN: slide (Other memory model issues)

LHN: the goal is to high performance, but we will get there

WH: i am concerned that this is the wrong starting point

can we get some numbers and see the difference

WH: Providing a low-level library that implements sequential consistency only instead of also supporting acquire-release-relaxed seems like defeating the purpose of the effort. Requiring sequential consistency on reads/writes is several times slower than just doing acquire-release semantics on reads/writes on x86. Sequential consistency only seems like the wrong starting point because it throws away so much performance compared to acquire/release, which almost always suffices. The point of this effort is to go for high performance.

LHN: any questions:

MM: you mentioned we avoid blocking the main thread, can we also make it so high-speed access is ???.

LHN: in principle yes, TypedArray constructers made illegal on the main thread would enable this. This may strike some people as strange, but in principle yes

YK: UI and IO threads blocking is a well known thing, I suspect not one will notice

LHN: I believe MM was thinking disabled access to the shared memory from the same thread. But i would suggest that would be practical.

BNN: WebGL is on the main thread, not having access to shared memory on the main thread would be unfortunate

LHN: i believe MM proposes workers having access to such things

LHN: slide (futexWait on the main thread)

LHN: slide (futuxWaitCallback)

YK: isn't message channel more compisition then postMessage

LHN: maybe we should hold off on this then

LHN: slide (side-channel attack)

LHN: slide (cache attack)

YK: i have a general question, other sandboxes allow this, how are we different? iOS sandbox etc. Prior art?

LHN: Im sure they have thought about this, but not alot of evidence they care about it

WH: Those things were designed at a time when timing attacks just weren't on the radar. They're all vulnerable to cache timing attack mischief. A large mitigating factor is that evil apps can be reviewed and revoked with at least a modicum of success. Browsers on the other hand must deal with arbitrary evil content.

DH: We live in a world, were forcing users to essentially install by merely navigating is true. Maybe we can prevent this, bringing us in-line with the iOS or similar sandboxes.

DH: we have strong signals, we can detect if an API caused the navigation or a user. This may be sufficient.

LHN: lets push this on the stack for two more slides

LHN: Existing tech (Flash/Java/PNaCL/NaCL) already demonstrate them.

MM: I would like to point out on this slide (status quo?) flash, java, nacl/pnacl are dead or dying. The fact that those exists, does not mean we need to put up with this.

LHN: I'm not saying that, only stating the current state.

(MM: A clearer statement I wish I said: "if we find the danger is bad enough, browser makers could turn off flash, java, and nacl/pnacl. iPad has already turned off flash. Many have turned off java. No one but chrome runs nacl or pnacl. OTOH, once this goes into javascript, it becomes impossible to turn off. So these prior systems do not commit us so strongly that we can deny that our actions today make things worse." Some of this was said in the unrecorded verbal discussion, but not as clearly.)

JFB: Tne google teams (chrome & security team) do not believe this attack vector matters. Timing isn't the attack, rather a mechanism of leak. Non-constant time crypto can be observed. Many ways to observe this state, the google security believes the problem is with non-constant time crypto itself, which should be fixed.

JFB: there is a large number of existing leaks, which need to be addressed, the timer is only the messanger not the route cause.

WH: Yes, non-constant time operations are vulnerable. But constant time operations are also vulnerable, as long as they access data-dependent memory locations within a cache shared by the attacker.

DH: performance.now was throttle for these reasons, was this to mitigate existing leaks, essentially buying more time?

JFB: I believe it was partly that, and partly because that precision was not required. It's a cost a running close to the metal, that you can observe the metal, preventing that defeats the feature

JFB: when the performance.now thing happened, it seems low cost to change (likely no-one depended on it) so given that something could be observed it was adjusted.

JFB: given this is going to happen, there will be high resolution timer. The course of action is to fix the route causes.

LHN: the current resolution is already sufficient for these issues.

JFB: with row hammer you can flip bits without atomics, because of hardware issues.

LHN: I haven't found any evidence of this making it worse.

YK: it doesn't seem like we are the first to encounter this

LHN: we may be exposing something, so we should becareful

YK: it merely feels inappropriate to have panic mode

LHN: i can agree with this.

WH: I believe in defence in depth, it is extremely difficult to transition all code that handles secrets to run in constant time with data-invariant memory access patterns. It's likely impossible. This applies to all code running on the machine, not just the browser.

MM: Other secrets exist, that can't be protected by constant time algorithms. For example, say some code is handed a graph containing secrets, where that code must traverse the graph to process the secrets. Clearly the pattern of memory accesses or their timing is not going to be independent of the topology of the graph. This claim that one can practically write side-channel-free constant time algorithms applies only to very specialized algorithms such as crypto.

LHN: moving along

LHN: slide (Mitigations for side-channel)

YK: existing API/flows exist to prevent driveby

DH/YK: let me unpack it, when navigating to a web app with an install banner, the JS code can trigger the install banner, but only if the browser believes it is not a drive by

LHN: slide (complexity)

LHN: slide (compiler can't introduce races)

LHN: slide (Shared Memory)

LHN: slide (User affected "only" by races)

WH: these are easy to deal with, the quantum garbage is not

LHN: yes, i believe my next slides will cover

LHN: slide (Where do we stand?)

LHN: do we want this?

MM: let me verify, can we negotiate re: deny shared memory buffer to the main thread?

LHN: we can talk about it

LHN: slide (Where do we stand? 2)

YK: can you do this with PNacL or flash?

Yes it is possible, but it is most likely quite slow

YK: stronger point, not only is it going to happen but it has already happened.

WH: Quantum garbage issue is new

LHN: We need more direct input, need help fixing it, or finding bugs. Stage 2 has the notion of reviewrs.

For the review, memory model stuff is very hard. This one may be worth getting outside help

JFB: we have contacted several and have been getting feedback from industry standards.

DD: this TC can help best with integration with the language, deferring the memory model issues to the experts seems appropriate.

LHN: for example WH doesn't want quantom garbage, this is good feedback. The current 2 month cycle isn't a tight enough loop.

WH: in the last few months, I haven't seen much improvement. Especially with the quantom garbage

LHN: Until now, it was unclear we wanted to fix that issue.

WH: I haven't seen enough progress

JFB: do you feel this would result in churn, or getting the entire proposal nixed.

WH:  I don't want values that spontaneously change, as that will leak and break all existing invariants. This is a deal-breaker until we have a believable proposal on how to prevent quantum garbage.

MM: if their was a boundary between code directly interacting with the shared buffers,  and the rest. It could prevent it the quantum garbage from leaking. If on that boundary crossing, we ensure an atomic operation. All values post the operation would be safe

no

LHN: if two works are running with shared memory, if X reads a value and Y writes that value. X reads into local var. It is possible to.

```
x = mem[a];
...
if (x)
  print(x);
could print 0.
```

MM: **ooupfh***

DH: this isn't a security concern, rather an correctness concern

MM: it is possible to fix it at the atomic operation level?

WH: No. This problem is independent of any atomic operations.

LHN: no

* lots of talking *

?: What do other languages do?

WH: C++ makes it undefined — lots of weird things can happen.

DH: the reason i mentioned Java, is because they have worked very hard, and it is still full of data races. They tried to avoid synthesing pointers to objects out of thin air, that is a seperate. Did they try harder? Did they try to solve this problem?

WH: Yes, they tried ;-). The first time they got it badly wrong. The second time, after a few years' work, they got it slightly wrong.

DH: given that they got it wrong several times, are they relatively confident in the current result?

JFB: Those researchers are worker with us.

MM: Java i think is a dismal failure in this regard.

DH: this is not the Java model, this isn't multi threaded objects out the wazoo.

MM: I agree it isn't the full java problem, I agree we should look to java for lessons. We should be cautious of thinking java is a positive example

MM: We should learn these lessons.

YK: I believe what is described is a deal breaker.

DE: in typed arrays they were initially spec'd outside of the TC, and now the TC and the vendors disagree. Recommendations landing sooner is healthy.


JFB: C++ hasn't tried to speciy what happens in the race, it merely says its undefined. I don't know if Java tries to specify it

WH: They tried it, but it was unimplementable, so no implementation was actually doing what the spec stated.

JFB: I think they worked to ensure the GC did the right thing

DH: that specific issue seems irrelevant, as we are only dealing with primitive values in an array buffer.

JFB: We should likely define how far the poisoning spreads.

DH: MM you argued that multiple nans (which is similar to this) was fine

MM: I merely argued that it was not fatal, due to nearly all the language features not being able to observe the issue. In general in JavaScript, if you read a value, and re-read it you can count on it being the same. This is true of all values including NaN for old code that does not include the new binary arrays.

MM: When you (Dave) figured out how to avoid the non-determinism without introducing the other problems my proposal was trying to avoid, I quickly accepted it as superior.

LHN: no actually their is a distinction, compilers today can optimize this to be single lookup

LHN: shared memory invalidates that, even in trivial ways

MM: can this be isolated?

YK: you can imagine a number leaks

JFB: we should define that if it leaves the shared buffer, the value no longer change

MM: could the compiler mark those object, preventing them from polluting.

LHN: it could


MM: it seems like we want something the same as volatile

LHN: I believe the compiler could detect these cases and prevent the issues.

JFB: yes, the memory model needs to be defined.

BE: does this help approaching stage 2?

LHN: I believe we can address the quantum garbage issue as mentioned above, we should take a pool and see if their are other blockers.

WH: timing attack is still an issue

YK: it seems like its going to happen (has happened)

WH: The difference is that, when we get a timing attack security scare in the future, if the timing is done via something like web assembly, the advice to the general public will be to just turn web assembly off. If it's a timing attack enabled via ECMAScript, it will not be practical to tell folks to turn JavaScript off because it's relied on so widely.

MM: I was prepared say no, we shouldn't move to stage two. I have reluctantly good news for you. I believe that really, shared memory should be kept out of the world of the browser. I don't think TC39 has that power, as BE mentioned. Agreeing to this, I feel like I have blood on my hands, issues will likely happen. Just  like `__proto__` it was better to define then to let it be implemented in an ad-hoc way. Given the large amount of high value pthread code in the world,  competitive pressures will force all browsers will to do this whether it is safe or not. We should work to ensure it is as good as possible

M:  we should be sure we work with webasm, and be sure this is something that works well for then.

*agreement*

MM: it was the potential ability, to stop the potential propagation of quantum garbage. If we can solve it, I am reluctantly OK.

WH: i would like to also see the quantum garbage issue sorted out before it moves from stage 2

MM: for me, the quantum garbage problem would be fatal, do I need to block on stage 2?

DD: you can stop the train at stage 4 still.

DD: not every stage 2 feature makes it in the spec.

YK: it is ok to say, I am willing to advance it but not beyond 3 or 4, until this issue has been addressed.

LHN: Yes it has to be solved, it is rediculous for JS to have this. Even if it means we take a performance hit.

DH: Helps us hans booms, yous're our only hope.

... some process discussion...

LHN: slide ("where do we stand? 3)

LHN: market place pressure, showing our seriousness is healthy. We are now at the point, were additional reviewers are important, which stage 2 is for.

MM: let me rephrase, what we believe we are advancing is a proposal that includes removing the quantom garbage propagation

*agreement*

BT: It is important to advance proposals.

BE: it will go into it wasm regardless we may aswell own it.

WH: I go on the record as objecting to advancing to stage 2 on the basis of failure to satisfy the stage 2 prerequisites. The prerequisite "spec quality: all major semantics, syntax and API are covered" is not met at the moment with the race memory model and quantum garbage issues being both major and unaddressed in the current draft. However, I will not block the process.

#### Conclusion/Resolution

 - advance to stage 2



## Weak References

(Brendan Eich)

BE: quantum death drink, half of something and half of something that is incompatible

BE: I'm here to discuss weakreferences, some want this but no-one is championing it.

MM: i do not have the time to champion it, but I will help a champion

YK: i think the main hazard alan pointed out, was that many people expect it to solve more then it should

BE: weak references wont be prompt

YK: you will still need to right cleanup code

BE: we will decouple them from GC in general, we want to avoid people assuming they can use this for fine tuned GC

MM: it may never be GC'd

BE: do we think it is important

yes

WH: No, and I mean this as a literal answer to Brendan's question: I don't think it's important, not that I want to actively prevent it.

BE: why, WH

WE: We already have WeakMaps (and yes, I know they are different!)

MM: WeakMaps and weak refs are totaly different. While "WeakMaps" is a better name than "Ephemeron Table", it has caused endless confusion.

YK: the fact that you can't self host addEventListener is the issue.

MM: WM and WR are totally different

WH: The main reason is that I don't want to make GC visible, which WeakRefs would do. I know you (MM) don't like it visible either. However, I have no antipathy to doing WeakRefs if the committee wants to.

A: one data point, v8 has finalization in its C++, people report false issues all the time wondering why some things are not destroyed

YK: removing all destructor logic will cause people grief, this will not replace that.

BE: the C++ layer has these things, JS is used more often to implement these features. I think this is far game, I think WH is ok with it as long as it doesn't telegraph the GC.

BE: I think we can do this

DT: I am interested, but what does that mean

MM: having worked with DT before, I am overjoyed.

DT: not currently on TC-39

MM: the individual who does the work, doesn't need to be on the TC, though it does help. I am happy to be the on-TC-advocate of the proposal if necessary.

LHN: have you looked at guardians (paper: http://www.cs.indiana.edu/~dyb/pubs/guardians-pldi93.pdf )

MM: I am very much interested in looking at it, and preferring the small talk approach. In small talk 80, they added post mortem finalization.

DT: I preferred the small talk approach

... some talk describing the above paper ...

BE: I would love a champion, but this will require cooperation with GC implementers.

BE: the only practical issue is deans partnership/activity in the meeting.


## 5.viii Async Generators

DD: i believe JHD should present

## 5.xiv Object.values Object.entries

(Jordan Harband)

https://github.com/tc39/proposal-object-values-entries

JHD: implemented in chakra, flagged in v8, my patch into JSC is not yet patched.

JHD: as part of core-js and es7-shim.

DE: i have no issues with the proposal, v8 implementation is flagged. We don't pass test 262 yet. I would like to wait until we implement this in atleast 2 browsers. So I would like to suggest we wait for the next meeting.

JHD: Browsers providing feedback, re: breakage or performance, should block it yes. I don't see that happening here thought

BT: this meeting is the last meeting for ES2016, if it doesn't make it here, it gets deferred to the next.

JHD: more then one feature on ES2016 would be good for PR.

SP: last time we discussed what is 2 implementations, did we decide what that meant

DD: no.

BT: how did the browser do on test 262

JHD: chakra passed, JSCS when it lands will be.

BT: i have zero doubt that this is implementable, but the question is from a web compat standpoint?

JHD: the class of problem is typically for prototype extensions not on Object.

SP: subclasses of Objects may be affected

JHD: it doesn't seem like their are many issues.

YK: should we just wait?

DD: yes

JHD: i'll bring it up next meeting again, hopefully it is shipping in one or two browsers and the web compat concern has been resolved.

BT: do you know what the chrome timeline is, will we have afew weeks of canary?

DE: ya, afew weeks.

AR: we should  land it in M50

YK: People maybe confused with async/await, entries/values introduces potential web compatibility issues, which we haven't vetted yet. Async await, had technical implementation details.

#### Conclusion/Resolution

- Stage 3 holds
  - wait for 2 shipping browsers to confirm web compat.


## `String#padStart`/`padEnd` (JHD)

#### Conclusion/Resolution

- Stage 3 holds
  - no further concerns about unicode/graphemes/RTL, Intl will handle that.
- will pursue Stage 4 when enough browsers have shipped it to allay web compat concerns


## Unicode fix: https://github.com/tc39/ecma262/pull/300 (DE)

Discussion about support for old operating systems

WH: In practice the unicode version doesn't affect ES programs much. New unicode versions mainly add new characters, and those just flow through ES programs regardless of the unicode version. The places where unicode version matters are relatively obscure such as case conversions for non-BMP characters or whether you can use brand new characters in identifiers. The situation will change when we add character classes to RegExps, so we should update the required minimum unicode version of the spec then.

DE: should we stay at unicode 5.1?

DD: now, it seems like we should move to 8

WH: I am worried this will cause too much noise in the Test262 tests. I think it is legitmate for implementations to lag if they rely on the OS's support for unicode and don't want to penalize them with Test262 failures for being lightweight.

DD: I think its no less legitimate to implement all of ES2016

DE: i don't understand your concern WH, it seems like you want to save the implementers some time, but the implementers seem on board.

WH: [repeats above]

DE: I don't believe this would be alot of noise

BT: they way i see us implementing these tests, is to have a single file for this test, having a single test fail is fine, and implementors already have machinery to manage test failures.

MF: are we doing 8 or 8 or greater?

BT/DE: 8 or greater

#### Conclusion/Resolution

- switch to 8 or greater and merge  https://github.com/tc39/ecma262/pull/300


## Object.getOwnPropertyDescriptors proposal email (JHD)

JHD: this method instead of producing a single descriptor, this would return multiple. Ultimately being what would be passed to Object.create's second arguments

JHD: can we advance it to stage 2, and we will firm it all up

MM: i am happy with stage 2

#### Conclusion/Resolution

- advance to stage 2

## Object.getOwnPropertyDescriptors object: null or Object.prototype as [[Prototype]]?

DD: what is the prototype of the object it returns, null or object?

YK: does anything in the spec return null prototype?

SP: Does Object.create second arg us ownProperties

JHD: yes

MM: getOwnPropertyDescritpor returns an object with prototype of object.

DD: I am fine with the prototype being object.prototype

#### Conclusion/Resolution

 - prototype stays as object, DD + SP will be reviewers.


## 5.xi Daniel, presenting SIMD changes since December

link: https://docs.google.com/presentation/d/1tREM-eLjadnXZogdKXlTWY8XzicXgylI_GlIxxsMNzc/edit

DE: (walks through slides)

DD: how do you feel about the test coverage

DE: test coverage feels pretty good, the tests for the value semantics will need some more work, but largely the test suite is good.

DE: we will need to do some work on the test harness, Test262 would like to generate the tests precedurally

DE: test harness may want sameValue sameValue0

DE: do we want SIMD to be optional

M: I would prefer for it to be optional, i don't see value

BT: small IoT devices

BE: the devices in question, have the required hardware

BE: SIMD is analogous to C++ intrinsics available to mobile apps that web apps compete with and mix with via webviews,

M: exactly

BE: which type of device, we want to avoid the kiddie car model

YK: As a practioner, I would like to have it everywhere. But if these devices don't implement it anyways then...

BE: what is the pressing small device use-case, the compact profile is test

DD: we could create a IoT core

BE: We don't want to go back to the compact profile of 15 - 20 years ago.

BT: samsung spoke about such devices

M: a watch

DD: Whats wrong with a fruit-like watch not supporting the full spec?

BT: it is hard to not get SIMD

BE: if there is a device that really cant run this, I question if it will have other features. Those devices tend to be hard targets.

DH: This is the same issue, we want to maybe only provide specific instructions, feature detection may be needed anyways.

DH: If it turns out a significant amount of the market can't implement we can reinvestigate.

JFB: just to be clear on SIMD. it is the bare minimum, and happens to be on most devices, and devectorizing is also not hard. It becomes really hard on much wider SIMD, that will be much more effort.

DE: it seems like we have a settled position

DD: thanks for your update

SP: can we figure out a better strategy of dealing with these problems? We continue to cover the points, and no much process is being made.

DE: we should look for such devices

BE: why would we look for devices to cripple the spec

MM: has someone reached out to the samsung folks

DH: I believe they implemented something that may support it all: https://github.com/Samsung/jerryscript


#### Conclusion/Resolution
 - successfully delivered the update to the committee
