# 23 March, 2023 Meeting Notes

---

**Remote and in person attendees:**

| Name             | Abbreviation | Organization       |
| ---------------- | ------------ | ------------------ |
| Chris de Almeida | CDA          | IBM                |
| Istvan Sebestyen | IS           | Ecma International |
| Waldemar Horwat  | WH           | Google             |
| Daniel Minor     | DLM          | Mozilla            |
| Yulia Startsev   | YSV          | Mozilla            |
| Ashley Claymore  | ACE          | Bloomberg          |
| Daniel Ehrenberg | DE           | Bloomberg          |
| Nicolò Ribaudo   | NRO          | Igalia             |
| Richard Gibson   | RGN          | Agoric             |
| Sergey Rubanov   | SRV          | Invited Expert     |
| Jordan Harband   | JHD          | Invited Expert     |
| Jesse Alama      | JMN          | Igalia             |
| Justin Ridgewell | JRL          | Vercel             |
| Linus Groh       | LGH          | SerenityOS         |
| Mark Cohen       | MPC          | Netflix            |
| Michael Saboff   | MLS          |                    |
| Chengzhong Wu    | CZW          | Alibaba            |
| Justin Grant     | JGT          | Invited Expert     |
| Philip Chimento  | PFC          | Igalia             |

## Shared Structs update

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-structs)
- [slides](https://docs.google.com/presentation/d/1Qhrn6w3hcD4_uD9ebKfz4Fd_tJqQyPOI-IlH8keWIfQ/)

SYG: So this is an update on the struct and shared structs proposal. It’s more of an experience report. One of the big questions – well, before I get into the main thing, give a quick overview of the talk. It’s more of an experienced talk of the work in V8 and the work we have been doing in V8 to see the feasibility of implementing shared memory multi-threading and some of the interesting challenges we came up and how we solve them and so forth. This is not going to be a talk about the design space a little bit. But my intention here is really just to give an experience report of the feasibility study, of the work that we have been doing, the plan is to come back later in the year and talk about the design. If you’re not really interested in the implementation space, sit back and relax and enjoy a quick tour of some of the interesting inner works of JS engines. If you are another implementation, this might be interesting to you to see if some of the challenges are shared or interested to V8 and interested to hear afterwards. With that start with a quick recap what my mission here is with this proposal. The overall mission of which this proposal is one part is to raise the performance ceiling of advanced JS web applications by giving them access to shared memory and improvements in task primitives. The operative word is _advanced_ JS web applications. You can see the current concurrency mechanisms around single threading and communicating message loops and serializing and deserializing is all fine for not advanced web applications where you have an application that doesn’t need to squeeze out every bit of performance out of the machine. There are a handful of web applications like office suites such as from Google and from Microsoft that while the number of applications are few, their users are in the billions and they do want to squeeze out every bit of performance possible. So why can’t we squeeze out every bit of performance possible today? The main reason is boundary costs really kill you. And by boundary costs, I mean the costs of serialization and deserialization across worker boundaries for JS values. And here multiple previous investigations and failed attempts by advanced attempts of utilized workers show in a the boundary costs come from not being able to share states. You have to copy. And this cost really kills you because it’s kind of hard to scale your application. Maybe you can do some tricks with one worker but then you can’t really do things beyond that because for every boundary crossing between every worker or between the work and the main thread, you have to pay the boundary cost. You might wonder why doesn’t SharedArrayBuffer solve the problem. You need to choose your own object and primitive lay out. So not only do you – you don’t have to copy, but you have to serialize and deserialize. That is equivalent of introducing your boundary are high copy costs. It is hard to maintain and really only a solution if you’re compiling from a language that takes care of object lay out for you like ++ in WebAssembly and their SharedArrayBuffer is fine and for web applications, ArrayBuffers don’t help you for general programming. They help you if the data is byte buffer oriented, then of course they I do exactly what they were designed to do. This proposal is about fixed layout objects, which I’m calling structs. And structs are objects with fixed layout at construction, i.e., a closed option than open object than Java and that is the right ergonomic for some objects and happens for shared memory and possibly performance there is a use case for fixed layout objects. And it’s attractive for a bunch of things. Shared memory as what is motivating me primarily but WASM interop and FFI and packing memory lay out and predictable performance and would be helpful for data types like complex. It gets more speculative lower down the list. This update focuses on the implementation experienced around one which is a big open question, like, it was possible at the time I proposed this, it was not feasible to do in engines. Therefore, we should just give up before we get too far. So Number 1 is it even feasible in production engines? Is it feasible for shared structs and feasible for sharing string? Even if it is feasible is it worth it for the performance? If we implement that is shareable, the hoops to jump through to share things killed the performance. The only reason we’re doing any of this is for performance. Is it worth it for the performance? After we do that can developers leverage it if we built it? Of course we need to it rate and discuss the design. As I said earlier the plan is to save that for a later agenda item in the year. So this update is about the first three things about what we have learned prototyping and shared memory in V8 around architecture and performance. The table of contents. I will go through the implementability of case study of V8 and architectural champions and challenges in run time and strings and exposing synchronization primitives to Java script that I think is interesting and look at quick synthetic benchmark that is the start of the performance investigation and then I’ll go through some feedback from other partners that we have already engaged and outline some next steps. Implementability. To start with, this is exploring the implementability of these things that we prototyped in V8 and Chrome. This contains shared structs with null prototype struct. Shared fixed-length arrays are like JS arrays but shared and allegation have the null value for the prototype and fix and length and can’t resize because they’re shared. And the JS level synchronization primitives that were prototyped are mutexes and condition variables. Architectural challenges in V8 the two are Isolates and the garbage collector. How you share pointers in the JS engine because JS engines – because JS is very single threaded and has been single threaded from the beginning, it’s very reasonable that all VMs have been engineered with single threat vie Manoticks in mind and they are isolated and isolating in separation with the GC heaps. I imagine other engines if this is not built in assumption, the unit of a separate unit of execution designed to run a single thread I think that does exist across engines. The core problem is basically that if you want to share things that make isolates not so isolated. In particular V8 has the notion called "pointer cages". We do this for two reasons: For heap size optimization and for compression and for security. So what pointer compression is, on 64 bit machines: there’s ASCII representation on the slides of pointer. Divide it into two halves and upper bits consider base access and the lower is offset. What you can say is each isolated unit execution is give it 4 gigabyte GC cage that all of the heap pointers must be kept. This is the JavaScript GC heap and not like the malloc heap but what the garbage collector manages. If you do this and give each unit a separate 4 gigabyte "cage", you can chop off the top. You know every pointer has the same upper 32 bit. You only need to keep the lower 32 bits around. This is a good memory optimization on 64 bit machines. That’s what we do. The problem is that if each separate unit of execution of same 32 bits the worker has a different thread than the isolate. If you want to share something, you can’t. You don’t know what the base is – you can only share full pointers or share things in the same cage. And the solution for the prototype is that we move to a per processed shared cage for the entire process across all threads is a single 4 gigabyte for all GC heap pointers. There’s pros and cons for this. The pro is this unlocked other benefits independent of the other prototyping effort and simplified code and led to sharing of read only stuff again that was kind of interesting. And that sharing of read only stuff is a nice optimization that should benefit all executions. There was some security benefits by having everything in a process in the same cage, you could put some guard pages around that cage in an Uber cage that is even bigger and sand box other things that are off the GC heap like array buffer data, for example. That was hard to do for – in the per thread – in the per isolate cage world. This is easy to do in the per process cage world. The main con is that it limits your heap pointers. This is not all pointers and not all memory. Some things are allocated off heap like array buffer data. For the GC heat this limits to 4 gigabyte process. That is a fine limit for web use cases. Might not be a fine unit for server side cases and we have ideas to relax it to make it an 8 gig cage if it is too big. The second part of the architectural stuff is the garbage collector. This is a big one. Garbage collection: coming out of the design that JavaScript is single threaded, it is natural to design the garbage collection such that each separate heap on the worker versus on the main thread. Those heaps are independently collected and closed – their object graphs are closed. There’s no edges between them, so you can just independently collect them. The problem is one if they have separate heaps where do you put the shared objects and recall the design here has a constraint that shared objects cannot point to local objects. This is a good restriction to make shared things easy to read and point willy-nilly to object that it is not thread safe. So where do you put the shared objects? You have two broad choices. You can have, coming from an implementation that already has separate heaps, you can have a shared space and have a special heap out of shared things go next to the local heaps or have the unified single heap across everything. We chose A because having a shared space – having unified heap across everything is not an incremental software engineering thing as years of rewrite and there’s no reason to do that up front. So having this special shared space that is owned by the main thread is the solution that V8 chose is basically a separate heap out of which all shared things go that is – sits next to all the threat local heaps as well. So this shared space supports concurrent allocation. Nonshared spaces are still independently collected. Because this is a shared space, everything all the other thread-local heaps can point to it, but it cannot point outward, so to know the full liveness set of the things in the shared space during the garbage collection, we basically have to stop the global with the global checkpoint. For major collection we have to stop the mutators. We applied some of the usual tricks to garbage collections to make stop-the-world not too painful. Marking is still incremental and we have the shared remember set that is analogous to a new remember set. There’s pros to this. This is an incremental solution. It extends the existing architecture and its performance is probably good. It has the desirable performance characteristic if most garbage is local. So if you think of the generational hypothesis for garbage collection that most objects die young and you have a separate young space that collects – that’s fast to collect because most of the objects are short lived, you can squint and kind of think maybe most garbage is not just young but also local. It doesn’t escape your local thread. If that hypothesis works out, this is probably actually a good design. The con here is that on paper, it’s not maximum performance. You have to stop the world, so it’s very difficult to in the separate heaps world to have a concurrent with mutator GC if you have shared stuff. You have this problem where because everything that’s shared has to go into a separate heap, you might allocate stuff in the wrong heap to begin with. And then you have to perform a copy when you find out, oh, it escapes the local thread, and I have to copy it. This may be okay, like, that con is also analogous to the generational hypothesis that things that survive young generation will get copied to the old generation. Just like things that survive the local copy – sorry, the local heap end up getting shared will get copied into the shared heap. Maybe that’s okay. We need real world cases to see if the design decision makes sense for performance. That’s the major architectural challenges and how we solve them. On the run time side there’s challenges as well. The design – the proposal was designed from the get-go to pig by back well on existing JS object run time and restricted the design of struct such that you could mostly just use what was already implemented except with the restrictions that would make it not thread safe. The reason was for incremental implementability. The proposal is going to die if the requirement for implementations is that you must write a completely new VM, so it was designed to piggyback on existing run times. and there is some work but over all, I think, for V8 at least that hypothesis pans out. The key is hidden mutability and the shared barrier and the publication fence. The hidden mutability stuff is basically the structs and these shared fixed-lengths arrays and things are designed to have immutable shapes and sealed objects. They have fixed lay out. When you extend the lay out of the object that is inherently a mutable operation and need to rejig the lay out of the objects. If you declare the lay out ahead of time, the thinking was that is enough to get you easy to implement thread safety for the most part. We’re not messing with the hidden internal state of the VM and only do read only the operations on the VM because you declared lay out up front. Some operations that look like read only in the language are read-write in the objects in the VM. Tmhe two examples I want to highlight in V8 are being used as the prototype changing the lay out by optimizing for use in the prototype and puts it into dictionary mode among other things. And we have these caches that I think we added for sunspider that other engines might also have that end up being hidden points of mutability. Luckily these are mostly easy to solve. The solution is do the mutability thing upfront like if if you care about for-in enumeration cache, you can have the cache or do it up front. Do it at the time of declaring your struct type instead of doing it just in time when you do for-in. The other solution is you just don’t do it. These are optimizations. It’s not a correctness issue if yo don’t do it. If it becomes performance issue that’s more fun later for VM engineers. The shared value is to enforce this design constraint to – sorry, to force the design constraint of restricting shared objects from being able to point to local objects. Again, this is just like a core design constraint. You can’t have pointers – you can’t have edges from shared things to local things. So how do you enforce this? The solution here is to on assignment, basically apply what I’m thinking as a write barrier what I’m calling the shared value barrier. This is not a write barrier in the garage collector sense. This is a write barrier in something that must get triggered every time you have an assignment. I had worries in the beginning I would need to proliferate the shared value barrier everywhere. But I think in the design of production engines there are a few choke points - not one, but a few choke points because of the unification around inline cache paths, you can insert this barrier and have good confidence of correctness. And you can even have a fast path and slow path that works out fairly well. Some things you know to be shared by just the type like shared structs are always shared. JS objects are never shared. Therefore, the slow paths, you can jump to the runtime and ensure the right barriers are thrown and so forth. The gotcha here is that you do have to do a bit of work for the JITs because they have to know they might be assigning to the shared objects and emit an extra value barrier. The final piece I want to highlight on the runtime side is the publication fence. This is a bit of memory model arcana. the design of racy shared memory stuff is that the observable races must only be on things that are observable to the surface language. But there are a bunch of of course VM internal data structures and even if the design of the shared structs allow for races at the JS language layer, we must never allow any data races at the implementation layer because that means VM crashes. So the bar here is at least could be higher if we iterate on the design but the bar is at least the VM must never crash. And that basically boils down to that when you allocate a shared object, they can become visible to other threads without a synchronizing API like post message. If they go through synchronizing API then it takes care of VM internal things being visible to other things and it’s published and you’re okay. But it might just become shared by simple assignment to another shared object that is already shared. It can become visible very fast. You have to ensure if it becomes visible in this fast way to other threads, we must not – it must not become visible in a way to other threads that causes the VM to crash because we didn’t publish all of its internal fields correctly. And the solution here is quote allocation is publication. This is something that basically with the JVM does and when you allocate a shared thing you have a store store barrier before the allocated objects is returned by the factory. You basically allocate it and initialize all the internal fields and emit a store store barrier that in the C++ implementation is release fence. We have convinced ourselves this is okay. This is memory model arcana.

SYG: So that is the – I’m moving slightly high inner the abstraction layers now. The other huge challenge that we did see ahead of time is strings. Strings are these like simple nice things on the surface language that are extremely, extremely hard to implement and understand in production engines because the performance requirements on them are actually fairly high. So over the years all the engines have very highly mutable many different representations of strings internally and those representations are mutable and they transition between these representations. I’ll go through some of this. If you haven’t seen this, this is terrifying. Just in V8 and I think a lot of these string types, these string representations carry over to SpiderMonkey and JSC as well. We have the string types and sequential strings that you might think of as C strings and modulating the null term lating character and contiguous character buffers and sliced views with other string in offsets and the length. We have constringes that are sometimes called ropes that are tags of other strings. You get "cons strings": why do we have them? We didn’t spec a Java-style string builder so people use + to build strings. If you copy and flatten and copy like strings into larger character buffers every time you append them, that is too slow. We made internal invisible string builder. We have external strings this is V8 specific thing. External strings are character data are owned by the embedder. Blink. Chrome might say this is my string. You should have a JavaScript object representing it but I own the characters. Or node might say it. I don’t think node says it. You have internalized strings strings in the intern table. If you internalize them you compare them by pointer. You have thin strings which are pointers to internalized strings. This happens because when you internalize a string you want to convert it to internalized string, but you can’t do it in place because you don’t have access to all the references to that string. You instead do indirection and turn the string you internalize to the pointer and we call it a "thin string". The problem is these transition states in place and some transitions overwrite character data. What is the state transition? That’s what it looks like. [hideous graph on slide] It’s extremely complicated. And the solution here is to deal with all these super unthread safe that over write character data is do the following: Strings can be shared in place or by copy. Ideally you want to do it in place so you don’t have to incur a copy. Sequential strings that are character buffers are allocated in the shared space. They can be spared in place. That doesn’t mean they’re always shared. They are allocated in the shared heap that I talked about earlier. Other strings are never basically in – all the string works like slices and ropes and that kind of stuff are never shared. When you need to share them, you flatten them into the character and copy them and string sharing occurs in the shared value barrier. That’s the representation part. Interning is canonicalized and you can’t it to use property keys and intern and when you do the property you do the look up, is this the name of the field and pointer comparison of character buffer comparisons. Interned strings need to be shared for performance and intern table needs to be shared and thread safe. And in place internaling importance for performance. You don’t want to incur a copy every time even for single threaded execution. The first time we intern something on a miss, the first time we intern something on a string table miss, you basically flip a bit on the string that says I am now in the intern table and I am the canonical representation. On subsequent hits you convert them to the pointers to the canonical version and those pointers are the thin strings. The in place part is the string table miss when you insert it into the first place and insert it into it, you do this in place to the string to do the first something that gets inserted is the canonical string. The solution to make this thread safe is luckily the string table is thread safe because production engines support things like off thread compilations and they’re compiling the program and have property names to canonicalized and it is in V8 that supports lock free hits but lockful misses and allocate all in place internalize-able strings in shared place the intern space in shared space. Now, there’s another wrinkle to this which is that some shared string transitions overwrite character data. The string table hit that I talked about, when you convert – when you transition a character buff tore a pointer, how do you do it? So you actually over write the character data. You just like overwrite the contents of the string, you say I am no longer a character buffer, I am a pointer and first word is the pointer to the actual string instead of start of the character buffer. The problem is that that is of course super unthread safe. You can’t overwrite character data is another thread is reading it. The observation for our solution here is that while you do this overriding of character data, you never actually change the character contents. Indeed you can’t because JavaScript strings are at the JavaScript language level are the immutable primitive value types. The character contents never change. What we basically do is indirection where we have a separate thread safe forwarding table instead of transitioning these unsafe transitions in place we reuse another field, the hash field in this case to store forwarding index that says I’m a forwarded string instead of looking at the indirection in my own memory go look it up via this index in the separate thread safe data structure. With that the state transition is even more complicated. [even more hideous graph on slide] But I guess it was already impossible to understand.

SYG: So final bit before I get into performance is an interesting lesson from surfacing synchronization primitives. The multithreading you want to get faster performance ceiling than pure message passing. You do it blocking the thread with new texts and condition barriers and so on. You can’t do it on the main thread but if you have more coworkers you can do this. You can already do this. We’re forcing users to write their own text and condition variable today that is an art and not easy. Good for the engine to provide it. I think this proposal should also include mutex and condition variables. This is just what I was saying. I think these should not be in scope with the proposal and present detailed API in future and may have symbol.dispose synergy with resource management. The interesting realization here is that under the hood, ultimately blocking your thread and doing wake ups on the thread requires some kind of OS support. POSIX has abstraction layer if you used P threads variables and those are all implemented on the operating system by OS specific thing. Windows have slim reader write and macOS has unfair lock stuff. They all bottom out. You have to rely on passing the boundary. And OS level primitives all require some structure with a stable memory address. You can’t move the it, if you move it, you cannot address the thing that you are waiting on. But production engines use moving GCs like generational and compacting that move the contents of JS objects. If you surface these two surface languages like JavaScript that move the objects under the hood, these must be moving GC safe. The lesson is do indirection. These objects can point to other data structure that that is not moved if you want to use, for example, P threads to implement these. While you’re at it, might as well implement these manually. They are extremely fat for no good reason. If you implement your own you can tune your performance. WebKit is blazing the trail with the parking lot. I see it as Linux futexes in user land and more ergonomic and great for synchronization primitives and apply straight forward in implementing condition variables and mutexes in the JS engine.

SYG: The upshot is that yes, structured shared memory is implementable. There is a dev trial that is highly experimental feature that is not guaranteed to stay. That is behind a flag that is off by default that could be removed at any time. If you’re interested, there’s a flag that you can manually flip to try out these things. If you open the slides and click on the dev trial link there’s a document for how to turn it on and what the APIs are if you’re interested.

SYG: That’s the implementability part. We now move to performance numbers. The only reason to do any of this at all is performance. Like, there’s no reason to introduce a harder to program model if it’s going to be slower. You might as well not do it. We need some verification this is worth it for performance. So the dev trial is still relatively new, and we’re engaging partners to come up with realistic use cases. We have the synthetic benchmark that is for the most widely applicable case that is zero copy message passing. That doesn’t require mutable shared memory, it just requires some kind of shared memory. If you have the thing shared and message past it even if immutable should be zero copy and must faster than we do today and create a synthetic benchmark. What does it look like? So the Y axis is in milliseconds. The X axis has the weird looking equation. What this basically – what the synthetic benchmark does is that M of F times D equals C means a tree of nodes with fan outs, so how many nodes at each level of the tree. F is how many nodes at each level of the tree. D is how many levels of the tree there are and C is the total node count. For the synthetic benchmark creates the trees to be passed by message. And there are several configurations. You can put short strings in them. This is randomly general raised strings guaranteed not to be generalized. And numbers and mix of floating point and integral numbers. And the POJO is ordinary JS objects and struct is the dev trial. What you see, this is the message creation time. This shows that structs take longer to create. Why? Because shared structs need to be shared. They have the shared value barrier especially for strings when you have to ensure that the strings are in the shared space. That actually takes time. It takes longer to create. So we’re not starting off to a good start. It’s actually slower, but when you post message it, this is the unsurprising thing. When you post message it no matter how big the payload is if it’s zero copy the time is constant and basically free. For ordinary objects this scales very badly with the payload size and the object complexity. This [chart on screen] is log scale. I have no idea how to fix the Y axis. But the actual top is a hundred milliseconds. Whereas the bottom is something microseconds. All the flat lines on the bottom are the shared struct stuff and the thing that is exponentially growing but is linear in the picture because of log scale are the ordinary objects. This is what we expect. That’s good. And this is the total. The total time. The POJO lines basically grow pretty fast and the struct lines are better. Transfer free as you expect but still nice to confirm. Not completely free because some costs have been moved to the shared value barrier but still nets out to be worth it. This is just scratching the performance of the performance ceiling. We need more sophisticated examples and something that fully leverages shared method threading in the traditional day than using it to improve message passing although it could be used to improve message passing. We’re waiting more partner engagement with the DEV trial.

SYG: What do the partners say? We have engaged some partners. Notably folks from Microsoft were trying use the dev trial to see if it can be used to speed up Babylon.js that is rendering. So the current design of shared structs is data only. We don’t know how to share functions. It’s very difficult to share functions to share code. That was punted and left out of the proposal. Turns out having a data only proposal makes it difficult to incrementally adopt. If you have existing code base and see would multi-threading speed this up, yowled do that Babylon.js did and take one class if I don’t have message now I need to refactor all of the use side for static methods and hard to swap implementations and a big pain. Ergonomically is difficult to locally adopt it in the existing code base. The other big feedback was this requires self don’t cross isolation opt mated. On the web any kind of shared memory requires the site to be opt into cross origin isolation. This is something that exists today. And you can only used shared array buffer high performance now and other stuff if you opt into cross isolation. This is extremely onerous to set up. And partners basically complain can I use this without cross origin isolation? There’s pretty unequivocal answer there: That’s categorical no. You must use cross origin isolation to use this. It’s exactly the same kind of Spector race as SharedArrayBuffers. How onerous it is and working as intended and the level of scary needs this annoyingly high level of opt in intent. I’m not sure if service folks have looked at this since the web added it and if they consider a similar level of opt-in intent to be necessary for surface don’t applications to use shared memory especially in multitenant stuff. But it’s annoying but it’s not going away. This is – we have to have this level of opt in.

SYG: So what are the next steps here now that we have done a bunch of implementation work and have a prototype? We’re going to explore more with partners such as these office suites like Google sheets and Babylon.js and advanced web partners that want to squeeze out every part of performance. Plans to have a method sharing design. I think it’s become clear that it’s just pretty unergonomic to not have method sharing and a few ideas have been kicked around that is kind of analogous to wrapped primitives. I won’t go into detail here. It doesn’t involve fully sharing code. It involves like how to make sure the same set of code gets associated with the right shared structs across multiple threads. There have been good design discussions with folks like RBN and DE and MAH and ATA. And big one is WASM GC alignment and the WASM GC is to add objects to WASM and multithreading will come in the future and alignment with the multithreading capability is a hard requirement. The plan is to ask for Stage 2 sometime this year. Look for future presentation on the actual design. We have the working call that is monthly or something if you are interested. Look for it on the calendar. And big shout out to the V8 team and partners and Microsoft team making thread safe on the blink side and thanks to the other delegates for the regular working calls. And that’s it for the presentation and I’ll take questions with the last few minutes.

WH: What did you mean by release barrier?

SYG: Talking about the publication fence?

WH: Yeah.

SYG: It’s a release fence. You allocate a thing and write things into the field, the internal fields of the thing I allocated. Before it’s returned from the factory and can escape to script, I do a release fence.

WH: What is a release fence?

SYG: It’s like an STD atomic release fence and one of the things that the C ++has.

WH: That doesn’t do anything unless you have acquire on the other side.

SYG: Release write doesn’t. Release fence does other things. It’s like a separate thing.

WH: It still doesn’t do anything unless there is an acquire on the reading side.

SYG: We can discuss the architecture offline. They are convinced it’s kind of okay. We can look at the generated machine code. In the JVM if you look at this they don’t use C ++stuff they have the architectural they do that basically prevents store. Store store reorders at the compiler and the ISA level.

WH: Okay. I have a different question. Does this work for all primitives or only some of them? Does this work for bigints?

SYG: In the dev trial I’m not sure if I implemented BigInts. It is designed to work with all primitives by copy if nothing else.

WH: What do people generally do if they want to share a RegExp or a Date?

SYG: They can’t. Because this must be an opt in and not like a transparently we make some things shared because that’s too unsafe if they are missing like – the fact of the matter remains a lot of the standard library is going to remain single threaded and the shared part is not going to be as expressive. And if they need to do a date, they would need to convert it to an inter change format that is primitive. If they need to do RegExp, similar. How big a problem that is hoping that is empirical question to figure out with partners.

WH: I imagine a big one that you already mentioned is functions.

SYG: Yeah, functions, yes, also a big one.

WH: Okay, thank you.

LCA: I assume SABs also can’t be shared through the shared struct as the JS objects; is that correct?

SYG: Yes, that is correct because shared array buffer object themselves are single threaded JS object is only the backing store that it’s shared. When you share today array buffer you clone the shared array buffer object but don’t clone the memory it points to. You can’t change that behaviour so you can’t do it. This will be award and should be solved in some way and maybe a new shared array buffer object that still wraps the same pointed memory. Already aliased. Not worse to do it again. I don’t have a nice elegant solution here.

LCA: Thank you.

YSV: SYG, thank you very much for the very informative presentation. That was really interesting to go through. I’m wondering, you don’t have to commit to anything with this, but I’m wondering if you have sort of a preview of what you’re thinking of in terms of the design for the shared methods? I’m curious what the search space is for the design there.

SYG: Sure. The high level current idea, there’s different variations of it. The high level current idea that I think about it is analogous of wrapping of primitives. When you have an object that is not an object. When you want to call – or string is a better answer. When you have a string and want to call the prototype thread on it. At the time when you call IETF becomes automatically automatically wrapped in the object that is string.property copy from the current realm and that has the right methods on it. We can think of sharing methods in a similar way when you call – when you do a property access that is not an own property, sing it has an null prototype it doesn’t have this, where does it go? And another mechanism now it gets automatically wrapped to some thread local object that contains all the code that you can then use to resolve and call the methods. The space here is how do you ensure the same set of methods and these objects? How do you set it up and bootstrap the workers to have the same code? What is the right thing and how do you communicate sharing that stuff to bootstrap it? Folks like DE and MAH have been thinking about by sharing modules and maybe to use module identifiers. Not identifiers. Module specifiers in some way to ensure that the same copy of things get loaded across multiple workers. But the preview here is basically still punting on actual sharing of code. But for ergonomics, this wrapping of primitives analogy already exists and may work well for shared structs.

YSV: Okay, thank you. The wrapping was what I thought might be the direction. But I’m interested in hearing about this module as a vehicle by which we can share methods. I heard a little bit about this. Okay, interesting. Thank you.

USA: Next up we have DE.

DE: I’m very happy to see all of this progress on this proposal. You know, the benchmark results were impressive and hopefully motivating for various groups of people. Also happy that you’re treating future WASM-GC alignment as the requirement, and looking into the usability issues like methods. In the method case thanks for being open to suggestions and having these regular meetings. Overall I think the project is going well. When SYG refers to partners, I take it that this is still open for other major websites that might make use of this that you might be open to working with more groups and wonder if you want to advertise that briefly because this kind of partnership model is supposed to be kind of open. Anyway, that’s up to him, not to me. I’m hoping for class syntax and single threaded structs. We've talked about structs being analogous for records and tuples–although we don’t know what the future of records might be, but this concept of having certain properties of objects fixed when they are allocated as opposed to freezing them later is very powerful and I think it’s good that we think about this as language designers and use it in more cases where it’s helpful.

SYG: Thanks DE. A response to that. First I should thank you for the method sharing idea. I was more stubbornly still thinking if we can have special magical functions or something. This current direction is much more tenable. Thank you for bringing the idea up. As for the partners thing, it is open. I’m open to partnerships. I don’t want to widely advertise it because the quality of the dev trial is not there. I think the current partnerships require high touch. And I and the team only have bandwidth for so many high touch partners why we’re limiting to basically advanced large team corporate team backed applications. But as it becomes more stable, I would certainly welcome partners of all sizes. It wouldn’t be enough to work with large sites. I would like to get more experience on how useful it is across the spectrum of developers even though it is designed initially with the advanced web partners in mind.

USA: Thank you. Next up we have MM. One quick reminder we are about 7 minutes to the end of the timebox.

MM: Okay. First of all, my compliments on how much careful engineering and the quality of the explanation. I appreciate all of that. I have a question about the relative contribution to performance of two different aspects of what you’re doing. And then I’ll also explain before you answer, I would also like to explain why I’m asking that particular question. So the question itself, when you do the message passing, if the structs that you’re passing were transitively immutable, but you were still able to share them between threads by pointer passing, I take it that would be compatible with the experiment that you actually did that you showed the results for. And obviously the full proposal has the read/write structs and the ability to do fine sharing and locking. The reason I’m asking is that all of the impacts on the programmer model and the contagion of needing to deal with concurrency through the ecosystem as people release libraries all comes from the need to coordinate a shared memory multithreading by locking that the spread of locking disciplines into user code. If all you are doing is passing transitively immutable structures through message passing between threads, that would not affect the user model at all.

_transcription service interrupted_ _switching to bot_

SYG: Doesn't mean that we're not going to make these structs available. it probably means that by default if you don't opt into it, your server does not into it. You get these things as immutable at construction time and they can still be zero copy, message passed. You can't do the full escape hatch. fine-grain locking. but you can still do the zero copy message passing and they still can be shared, but because you don't have cross-origin isolation. you just cannot have mutations, okay?

MM: That's a very useful answer.

SYG: but I also want to double down on that like in our exploration and and talking with these advanced web partners, We believe that the escape hatch for mutable shared memory with the fine-grained Locking is required to move the needle for the performance ceiling for these Advanced web applications.

MM: For these advanced web applications,do you have any quantitative sense of how much additional benefit they get from fine-grained read/write, sharing of versus read only sharing.

SYG: Quantified? No. This is this is this is bit of a chicken and egg problem, we have to build something, so they can prototype something. and the thing is like, because this kind of the traditional sense of shared memory, multi-threading doesn't exist on the web, of course no Advanced web application was written that way unless they were already written in C++ or something. So they basically have to rewrite stuff which will take a long time to re-architect. But the idea is, for example, for something like a spreadsheet application, you might have multiple workers that do calculations on the spreadsheet. Currently, if you have a giant spreadsheet that spreadsheet model in memory needs to be duplicated per worker. If you do not duplicate that, that module is highly mutable because like different cells are being written to, etcetera, input and calculation updates… if you want to share that shared like this, if you want to share the data in memory, you need fine-grain locking in the traditional shared, multi-member in the shared memory multi-threading sense and that is just a different architecture that will have different very different performance characteristics than how folks are doing it today. And I can't quantify until I can convince folks to build that experiment which is the partner exploration bit.

MM: Thank you. I got a lot out of that answer.

USA: Great. Well, we have one final reply by Waldemar but I wanted to ask if we can take this offline; we are at time. What do you folks think?

WH: As a follow-up to MM’s question, are there issues with hidden mutability when sharing transitively immutable objects?

SYG: Are you asking about Javascript objects?

WH: Yes, I believe that’s the case that MM was asking about.

MM: Yes.

WH: Are there hidden mutability issues with sharing POJOs (plain old Javascript objects) in general?

SYG: Sharing immutable POJOs can run afoul of hidden mutability. Another thing, I didn't highlight was all pojos allow you to reconfigure, non configurable writable properties to not configurable and non writable. That is not even hidden, that is like explicit mutable stuff Like that changes the property descriptor Is of an object. The POJOs allow that. Well, actually, I take that back that doesn't apply if you if it's deeply non writable anyway. everything anyway. So okay I take that back but there will be there might be hidden mutability concerns for pojos. My sense is still that that is really only a problem for production engines that have had many that has had decades to build in optimizations at the object representation layer And those are just optimizations and if you have A new like, opt-in space to think about sharing We might disable some of those optimizations that are not sure it's safe. Okay.

SYG: Yeah, thank you for the questions and listening.

### Summary

Shu-yu Guo of Google has been progressing on a prototype implementation as a dev trial in Chromium of Stage 1 Shared Structs, in collaboration with large partners, e.g., Microsoft.
This system enables faster execution of advanced web applications through shared-memory multithreading of JavaScript programs, including GC heap-allocated structures (something impossible with SharedArrayBuffer).
Various implementation challenges were discussed, and benchmark results showed strong improvements.
Regular external calls for TC39 delegates take place to iterate on the proposal, and the V8 team will be open to additional partnerships to prototype shared structs more broadly as the current prototype matures.

## Async Context

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-async-context)
- [slides](https://docs.google.com/presentation/d/1LLcZxYyuQ1DhBH1htvEFp95PkeYM5nLSrlQoOmWpYEI/)

JRL: This is async context for stage 2. There’s been no significant changes in the proposals since the last time this was presented back in January. All we have done is written spec text. We have a series of open questions, but we’re trying to go for stage 2. The reason is because a lot of this proposal is going to be integrating with the larger web platform, Node.js ecosystem, all of these other environments. In order to really have these discussions with these other standards bodies, we need a tangible API. We want to demonstrate what async context is capable of, how to integrate into browser features. We are seeking stage 2 even with a couple of open questions to have something tangible to discuss with these other implementations.

JRL: Let’s start though with a use case. This is plain user code. This is something I might write in order to handle some kind of fetch. I am doing something like a postMessage or I am just doing normal code. One use case is to measure execution time. How long until I POST data to my server to save state or something like that. We want to have some kind of insight into the events happening on line application. We are taking this user code and how might we integrate something like open telemetry? The current full proof way is to modify your code. First, we have to do a couple of wrapping operations in order to make other things aware of tracing contexts. But we also need to modify the dev code. My handler needs to be aware of spans. Propagate that across the code into any kind of entry point that might finally terminate this operation. So in order to do this, it’s cumbersome. I have to write code with tracing in mind. If we have AsyncContext, then my user code doesn’t have to be aware at all. I can set up the tracing to happen, patch global event listeners to make them aware. That’s the extent of it.

JRL: The AsyncContext, and I will show this is implemented in a second, this takes care of propagating this tracing event for me. My dev code doesn’t need to be completely rewritten with this in mind. It’s just a seamless integration of library code into my application code without doing a bunch of rewrite.

JRL: Implementation of tracing is something as simple as this. We could set an AsyncContext instance. We could have a wrapping function that will perform the necessary creation of a span object in open telemetry and run in asynccontext with the current span value and propagate all the way through the call stacks to everything gets immediately the current span for whatever fetch or whatever is happening on your server.

JRL: But this just happens at the integration point. At the wrapping point, trying to enable tracing. It does not happen at the developer code, which is completely unaware and doesn’t need to change or take in mind any of this. It simplifies the ability for me to integrate other libraries and frame works into my application code, without making changes.
If we think about this at the very highest level, what does AsyncContext give us? It’s a run function. A get-function and there’s a wrap function as well I will go over in a minute.
But the highest level, AsyncContext allows us to store a value in a global storage state, during the execution of a particular call.
We can go through the code sample and get a sense what have is happening. During online, duing the first of the function, I expect – I own this function. We know what expected is during this first case. It will be the value 1. We need to determine is the value of the context that `get` is. It will be whatever is set there via the run at the call stack level. So if we step into context that run, we are inside of this run call stack. We invoke this function, and this inherits by the current run. Line 6, this should be very easy to prove to your self that context is going to be whatever that value is, was placed by the run. And obviously, expected is the value 1.
But then we hit this `await promise`. And that pauses the synchronous execution of this function. Now we set out. [bab] at line 2, which is now done. It’s synchronously complete. Now line 3. And we do a second of this `fn` function in a separate function that calls call stack. We enter the context with the value 2. We then invoke `fn` with expected value of 2. This line 6 should be easy to prove to yourself. The context will hold the value of 2, the expected is obviously the value of 2. Then we hit a promise again. The same promise, it could be any promise really. It’s just we are pausing this synchronous execution of this function. One of our asynchronous context will resume. One of the functions will have finished waiting on the promise and redeem execution. After the promise, we continue with the `fn` function, we would to see you are it return the 1 value for the first execution. Expected is still 1, because it’s a closure wrap parameter. We need to ensure that context pulls the value that was placed by the run. That’s for the first execution. Now we need to ensure that context that get holds the two values, placed there via the run, we get into how this happens, with a little bit of pseudocode.

JHD: I have a clarifying question. Do you want me to wait until the end?

JRL: I can take it now if it’s quick

JHD: Would the same assert work if I did `promise.then` or `.catch`?

JRL: yes. You’re talking about a change in line 1. Yes. If you do anything like that, the expectation is the promise will reserve your async context for you. We will discuss that at the end because that is brought up by – the expectation is that, the promise will propagate the value for you.
How might this work?

JRL: This is not a perfect pseudocode, but 99% correct pseudocode. This is actually how I have implemented this using a native ad-on to do this. Essentially this code. This is the majority of the stuff necessary in order to implement a full Async Context. There is a global storage and that storage value is maintained by the currently executing agent. That storage value is able to be manipulated by the AsyncContext instance.

JRL: We have a `.run` method here. Look at lines 6 through 8, the context instance is able to clone the current storage value. Set a new value because I can’t clone and set a value of a single step. And then it’s able to set the storage value to this brand new clone with my new mutation added. After that point, this map is essentially immutable. I can’t express that in job script, as I am not mutating further. During the execution of call back, the synchronous execution, the global storage value held by the agent is whatever the mutation of the map was. After the synchronous execution of that call back, we restore the previous async global context back into storage.
And so it continues on without any further changes.

JRL: Using the get method, we are able to access whatever is currently stored in that global storage value for my current async context instance. So guard this with these methods only async can access the global storage value. It’s a very proper API for it.

JRL: The only code that is not shown here is how this is getting propagated. And that happens at the moment via host hooks. There’s `HostMakeJobCallback`. A paired one called host call the job call back which is responsible for snapshotting, which is just taking the reference to the current storage state, and storing that in your call back – in your job call back. And then whenever you call that job call back, you restore that snapshot to the global storage state. That takes care of almost all of the complexity of this problem. The propagation of the async context happens at the language level. Automatically for you.

JRL: The final fundamental API that is exposed by async context is called `.wrap`. A static method. All it does is take the snapshot, a point of reference and that’s the extent of it, and it stores that value in a brand new call back for you. When you invoke that call back at a later point we restore the snapshot as the current global state. When we execute your wrapped function, and then we restore that prior state back to the previous value.
That’s the extent of the three APIs that we need. And that’s all that really has to be done in order to do this for almost all cases that happen.

JRL: This kind of API allows us to implement all kinds of features. We discussed a little bit about performance analytics using OpenTelemetry. if you have an APM, using Sentry or DataDog or something like that. This allows those libraries to accomplish the performance monitoring they want to implement. We have logging use cases. Both on client and server, when you go to augment the log with additional data. The request ID, maybe the DOM elements that caused the click event to happen, . . . this allows nice framework APIs without imposing costs on your users. This is one I am excited about. The same reason that OpenTelemetry works seamlessly, frameworks can work seamlessly because the framework doesn’t need to pass to the user a context value, some state or something like that. It can be propagated through the framework code into the user code and back into the frame work whenever user code calls the framework APIs. And have that happen automatically for the users, which is magical. There are browser features, not like me running my code in a browser, but browser features themselves that can be implemented on top of this. There's the TaskAttribution APIs that Chrome is working on. And the ability to detect long tasks for these tools. That is handled whenever the click started or your fetch or post-message started. Something like that. There are cases, particularly for something like IMP, the time it takes between the click event listener to your paint when you mutate something on the DOM tree . . . that can be implemented on top of AsyncContext. In the browser itself there are task scheduling APIs, where you can schedule some background work to on a background task that only is executed whenever. And then have that background priority propagated to other things, if that task invokes . . . if they wanted to have a fetch or post, all also inherit a background priority automatically without you having to do anything. I wrote normal code, scheduleled for a background and continued to happen in the background, which is amazing.

JRL: We have open questions and opening to answer them between stage 2 and 3. None are huge changes in the fundamental API; how to integrate each of the features. I will start off with the easy questions and get to the hard questions as we go through the presentation

JRL: The first one is about constructor extensions. About DevTools. At some point, DevTools want to display the global storage state, so you can see what your async values are holding. If I just have an anonymous symbol or context, pointing at a value that is not helpful for Dev tools. I can’t tell what value is held by what. It’s not useful. If I had a mapping that said, pointing at that at a value of zero or a mapping that said, being context. I can look and it says, I am set to this theme. That makes the DevTools nicer. It will affect the overall API.

JRL: The other possible extension is having the default value. If you’re familiar with React context, it allows us to initialize your GSX context value with an initial so you don’t have to constantly recreate that if isn’t is set. This is for something if you’re propagating a theme or a colour scheme that has bunch of colour values, for individual properties or text nodes or Dom element styles where you initial values and have it automatically propagated, if the context is not been directly set for you. So the overall thing here, the name doesn’t affect the overall APIs, but default value affects the way dot get operates. If there’s not a bound mapping, a set mapping in the global storage state, then the default value would be returned for you instead. Neither of these are super high priority, but they are nice to have, we could do anyway

JRL: There is a question of higher order of functions and organize ergonomics. There’s is `AsyncResource`, which is mostly equivalent to what we have as `AsyncContext.wrap` you initial a class instance. This is a class. You knew. You have an instance. I am extending it because I took the code from the node docs. You have a method called "run in async scope". It performs exactly the same thing that wrapp does. It snapshots at the time of the construction and then run async scope allows to run a call back within that snapshot so you run it and go back to the prior async global storage state. This is the way node exposes the API.
The way we expose this API and someone who is migrating from Node into AsyncContext, it’s not 100% straightforward. It’s possible to get the exact same API. But you have to use a higher order function to do it.
I don’t think we would have trouble doing this. We could think of this idea. But we’re not normal developers. We’re extremely technical. We understand how to do these kinds of things.
I don’t know that a beginning dev would understand how to do this, if they are trying to do this migration. I don’t think people immediately think of the higher order function, immediately invokes. That’s not the first step that the beginning Dev would make. I don’t need to think about higher order function, and in this case, I am exposing snapshot, which which is equivalent to having a wrap, evoking the call back parameter with a bunch of arguments.
This just makes it easier for beginner devs to migrate into AsyncContext API.

JRL: Let’s take questions for those two, if we have anything and get to the big questions that are going to be posed later on.

USA: There’s 3 questions in the queue. First up, JHD.

JHD: Yeah. So when I make a new function, I don’t have to tell which variables in scope I want to close over. And I have done that in PHP, it’s annoying. What if it should automatically do ‘wrap’ for every function?

JRL: If you are using promises, it is automatic for you. However, there are more queuing primitives that can be written. For instance, you could have a batching function that schedules a bunch of functions to be run at a background task or all at once. Those individual tasks lose their context when you put it into a single set time out or a set interval or something like that. They inherent the context at the time the set interval is scheduled. Not the context at the time I ask for this function to be batched.
Async context.wrap allows you to integrate async context into these other queuing primitives like a batch.

JFI: I wanted to chime in on that point here because I was on the Dart team when they introduced zones. And very similar issue, any time you store a call back in user land code, your library storage the call back has to take great care to run the call backs. To capture . . . and it ended up being a game of whack-a-mole. People go to every library out there, over time and be like, I am trying to use your library, it doesn’t restore the correct zones. It was kind after very difficult – I don’t even – I haven’t worked on Dart, and I don’t know where they are with that situation. But I don’t know if there’s any way to get around that, but you know, given the size of the library ecosystem in JavaScript, it might take a very, very, very long time for libraries out there become async context compatible when they store call backs. If there’s an automatic way around this at all, it would be greatly appreciated

JRL: I don’t think there’s a way to automate this beyond the natural continuation point for promise await and when we have discussions with the web platform folks around addEventListener and other registration time events, there is a – it is impossible for us to do this automatically in one 100% cases. 95% of cases you don’t is worry about. The closure creation time is not the context propagated. It is call time. I could invoke this within a different `context.run` that inherits

JFI: For most end-user behaviour, right, like imagine add event listener was not context aware. It doesn’t restore – or capture the current context, that is a stand in for a library not updated to do this. You say, okay. Could you capture the current context like on the closure, on the arrow function like your passing to add event listener, even if it’s not been updated yet, you will get – 90% of the time the behaviour you would have wanted?

JRL: I don’t think this is possible to do automatically for a closure creation. Because this is an extremely expensive operation to do constantly. For the points you’re interacting with code that does not properly propagate, you can manually call wrap at – before you pass the call back to the code. I don’t think this is can be done in 100% of cases, as I said. Now, I think we will talk about the performance penalty that that would incur –

DE: This is a semantics questions. Not a performance question. In cases where you take API that takes a call back, you don’t want it to close over the kind of immediately enclosing context. That’s why we can’t make this automatic. At the same time, there’s – the scenario that Justin outlined where async shifts –

JFI: I meant that as a stand in for user land – I know the platform you wrap all call back entry points.

DE: Yeah. I mean, the Node ecosystem already has this. And that’s where some of the batching thing happens and the experience has been, things can get bugs fixed over time. I am not sure

JRL: I think the case here is, during performance a hoist all of the functions out of – as much as possible. I might have the highlighter function reused in multiple promise chains. So like promise whatever my function is, in the global scope. In my module scope. That function can’t close over the module scope context because that is always empty. It has to be the context at the time that I registered the `.then` on my promise or I waited on my promise and invoked the function.

SYG: I think that’s my confusion. Like, I don’t – I did not understand what JFI was saying, like, if you could do it at closure creation time, then use the binding, right?

DE: Yeah. I don’t see how JFI’s idea would work. And I think we should discuss this more off-line. But there are several circumstances where you don’t want the semantics.

JFI: It’s a question of defaults and it’s . . . just relaying the struggles of an ecosystem that is orders of magnitude smaller than this, try to adopt a similar API over time, so putting that out as one of the potential speed bumps here.

DE: I want to acknowledge, I agree with Justin and there are integrations costs to this proposal. Certain things do have to be updated or they will not like combine well with this feature.

API: I wanted to throw on, exactly what Justin is proposing, the nonweb platform, we have been doing this, if people are not using the provided primitives that the chain, the values will not work correctly. In practice for us, that hasn’t been a big issue. It’s very apparent to someone if they got above and the value is not what they expected, they just go find the place where they were passing a call back or proper API and fix it. So it’s – you’re not going to prevent bugs from existing and user land libraries.

JRL: Right. I do want to move on to other questions. Do you mind if it’s quick?

CZW: I would just like to mention that the user function to be traced with OpenTelemetry requires not being wrapped for outer spans to be propagated into the function. So wrapping every function in context will be a no-go for OpenTelemetry.

JRL: Okay. Next up is mark. You are going to talk about something as my next open question. Can we if we pause that

MM: I was thinking of using my slot to ask a question that is not what I wrote down. I think it’s quick.

JRL: Okay. Go ahead

MM: I appreciate the notion of the snapshot as a non-high-order capturing of the current dynamic state. But what is the API of the return snapshot object?

JRL: It’s exactly the same. Let me switch back to the slides. It is exactly the same as what is in the comment here. Async – this does internally async context.wrap with this arrow function.

MM: Ah. Okay.

JRL: Line 2 there and line 3 through 5, those are equivalent. It eliminates the high-order function for the user from having to think of a higher-order function.

MM: Okay. So now go to open a possibility that I might hate . . . but it’s worth putting on the table. What do you think about attaching a refined dynamic context, a snapshot through errors at error construction time which is exactly the same time that errors capture the dynamic stack?

JRL: I think it’s a possibility. The – we need to consider this more. I don’t know how that would operate, if – with the abrupt completions through all the values. I think it would work fine. I don’t think having a wrapped function would be the appropriate thing to attach to an error instance, we need to be an object of some type that allowed you to do – I don’t know how to extract a context out. But I am not 100% opposed to it. I just don’t know how it would work at the moment

MM: Okay. That’s an adequate answer. Thank you.

JRL: SYG?

SYG: Yeah. I want to clarify something about what it unlocks. Some of the browser features would unlock. And I read that means that things like priorities for tasks are going to be layered on top of this? Which is not correct. Like, those things – task contribution and other platform APIs that mechanically can be explained by async context can and are progressing independently of async context.

JRL: Yes. We’re essentially reimplementing the base layer for all 3 proposals. Task, long task, you have to have something that is similar to async context. It would be nice if we could layer this so async context is the thing that does this for you. However, the person at chrome is we build with task contribution. The need exact way you layer this is up to the implementation. But the same core has to be solved for all the proposals.

SYG: Agreed. On the same core, explain the mechanics of the propagation needs to be solved. The second part of the item here is that I think what async context is really talking about, the delta between that and other stuff, the web API is thinking that programmable, and having this is a different design space, it pulls into considerations on the implementation side, that non-programmable API Is like task contribution don’t need to think about. And yeah. So agreed the mechanical – there is a core that aught to be shared. Implementation, even nicer also in spec. But async context is more powerful and we should give it more consideration. Because like, you know, you can store like . . . the current concerns are something like you can have an unbounded number of objects that are propagated, and you have scalar data to propagate.

JRL: Yeah. Thanks. We have DE and then I am going to pause the queue. Because we still have a couple more items to get through and they are going to be more involved with discussion

DE: Okay. I want to do both queue items. I think another way to view async context is it provides an extensive web manifesto programmable. We are in agreement of the relationship and working closely with people working on async context or other people in the pro team who are diagnose task attributions. These are not effort proceeding without coordination. Not that anything has to block out anything else. So before we move on in the presentation, I want to ask because this is a confusing proposal in a lot of ways . . . does anyone have any questions about the basics, just clarifying what the proposal does? Like, how is it used and the cases we’re talking about? Does anyone want to . . . get some more background? Ideas? Shu?

SYG: Okay. Like, what is the semantic difference between this and incumbents?

DE: I hope that is modelled through this. This is something to be done yet.

JRL: I don’t know what that is.

DE: Yeah. No, if you look at the host hook for like jobs, it saves and restores incumbents and/or things, but I was hoping to do those through variables. I don’t understand those to say, yeah.

JRL: We’re taking advantage – HTML incumbents, or the setting or, it’s 3 different things, we’re taking advantage of the same thing we added to the spec to propagate the value. So the same host hooks, the host make and host call job call back to propagate the incumbents around, we take advantage that have is pop grate async context around.

SYG: That’s what I expected. You want to like make sure that is by – how the feature is designed.
The second part of my question that I am not clear on is, what is the lifetime, what – forget about analyzing. What is the best – what is the shortest lifetime you can give to an async context

JRL: An async context itself is like – an object that holds. So whenever the user releases that. `AsyncContext.run` is important because it holds – mutates the storage mapping, and then executes a function.
So the shortest lifetime for that mapping is whenever all asynchronous operations and sync calls finish that descend from this particular run. We have a value of 1. That takes so it’s pointing to a value of one and held in global storage. During the execution of the synchronous execution of the MF function, that context mapping is held.

DE: JRL, in the last meeting, they were having a expectation of developers to expect that such variable will be cleaned up, if they are not going to be accessed along –

JRL: I am trying to answer exactly that.

DE: Sorry

JRL: During the synchronous execution of this, that map is held by the settlement of the promise. Until that happens, that mapping needs to exist. If the promise itself were to be deallocated. The mapping needs not to be held. It could be released at that point. If the settlement does finish, if we get to line 13, 14, then that context still held by the synchronous execution of the resumed call stack that happens whenever you put the pause, async function back on the execution stack.
So during line 13, 14, that context is still held. After that context, nothing else holds that mapping anymore. So we are able to free that global storage mapping that created during the run on line 2, at that point. As long as nothing snapshots your context – your mapping, then it’s freed immediately. If something does mutate your mapping, via the calling context.wrap or promise.then or await promise, or something, it’s held for as long as that thing exists.
After that thing no longer exists, your mapping can then be referenced and deallocated . . . possibly deallocated. I am hopeful this can be optimized away so a lot of things can be freed very quickly

USA: You have two replies on the queue and 20 minutes for the presentation

JRL: Is this polyfillable. No. Async await is not polyfillable no matter what we do. You have to transpile to promises in order to do this. Dan, ask this one

DE: So I don’t think it’s reasonable for async context user to expect that the implementation will be some magic to figure out sooner that some – variable will not be experienced. People who use async context have to expect that the object they put in the async context will stay live until that asynchronous thread of execution completes.
So I think – this was –

SYG: Let me see if I get straight. Async thread of execution complete, do you mean –

DE: Call backs that wrap, that ends up closing over that runs value

SYG: But in no longer – when it no longer has any future tasks?

DE: Yeah.

SYG: Okay.

JRL: I need to pause the queue, because there’s more to go through. We will address more in the break at some point in the future.

JRL: The next question is Generators. Around async generators and synchronous generators. This is mark’s question. Let me go back in the slide show. It has a defined behaviour across await. So await online for here, I know what the behaviour of the context before that await and that context after that await wait. However, I don’t know what the answer is for the yield boundary of an async generator.
There’s a couple of different answers we could make to this.
So in your mind, I want you to formulate some kind of solution to this question.
We have a `context.get`. Await. Get on line 5. I am going to assert that those two values must be equal because that is the semantic of async context. However, I don’t know what the context is between line 5 and line 7. We need to come to a solution for this kind of a question.
There’s 3 – 2, but 3, answers that I think are possible here.
We could have a knit time of the async generator. On line 11, I construct a generator by evoking it. We could lock that value at that exact time. Context is a value of 1.
Alternatively, we could take the approach that most of the other – the rest of the language is going to be doing, and that it’s set at the call time of your call stack. On line 14, the 2 value i propagated into the context. I will explain how this doesn’t violate the await semantics in a second.
A knit time locking, line 11, a context value of 1. Any time this generator executes the generator holds the value of 1 in the async context global storage state, all the reasons are 1.
I said, I am asserting that line 3 and 5 must always be equal and obviously that is the case here.
And the – it it happens that between line 5 and 7, they are also equivalent. The generator itself holds on to its creation context.
The other logically consistent answer here is that it is the call time of the call to the next that propagates. It doesn’t matter there’s a value of 1 during the construction, but what the value is on line 14 and 17. Line 3 and 5 are equivalent. No matter what choice we make here, these two lines have to be the same. So in this case, it captures the value at the call to the next on line 14. The two value is there on line 3 and stored on line 5. The yield escapes the current execution context. It goes back to line 17. On line 17, I reinvoke this generator with a new context value and that value could be seen when that generator resumes execution. This is still logically consistent for-await. And this is the choice we want to make for generaller rarities because we don’t have to do any extra work. This already is the became the spec is implemented. Also this affects synchronous generators. Whatever choice we made for an asynchronous generator across the yield boundary, it’s the same answer for a synchronous generator. We could go with the init-time-lock value of 1. Or continue with the current call time whatever you called that next. So you get a value of 2 and a value of 3. This is still consistent with the async generators work. But we have to be mindful of this. Additionally, we have other things that look like generators but are iterators. For instance, an array iterator. If I have a generator, implement that iterator as a generator, then we have a knit time construction or hall time construction. With the way – do choose a knit time construction, we don’t have to answer, what happened for all the iterators that exist in the specification in If we chose a init, does this get property see a value of 1? Which means I need to add a context. If we chose call time semantics, nothing needs to change. There is no change in the larger semantics of the language. Whatever the context value is, the next time, is the context that the generator stays in the body.
It is the first question question Let’s go back to the queue.

JRL: My opinion is that we should use call time semantics, I would like that. If we have a strong preference for a knit time construction, then this proposal is going to get very, very large.

USA: First up which have Andrew

API: I have a question to know your thought. If you did capture it at a knit time and called it.next. It would see value 1. Would that preclude you from –

JRL: Correct. If we chose a init time the generator can only ever see a knit time. If you chose – if we chose call time it’s easy to wrap with a generating that preserves a init time context for you automatically. This is explained a little bit in the attached initial thread. I did not include it in the slides. I’m sorry.

DE: I don’t think we should resolve it today. It’s good to have feasibility into the issue and we have to resolve it before stage 3, but I want to focus on . . . we have a good draft? I think we do

DLM: (from queue) +1 we can discuss this in stage 2.

JRL: Let’s pause this and go to the issue – remind you that the issue is number 18 on the Repo.
The next open question that we have is around async – I’m sorry. Unhandled rejection. I have 10 minutes left.
Essentially, unhandledRejection – this is the only web platform we specify because we defined the – we need to answer what is the context captured when async context – when it unhandled rejection to revoked. Line 6, a get store inside unhandled rejection listener. What is supposed to be get? We have a get stored in that unhandled rejection event listener and see some value. It can either be the time that it happens. I think that’s a silly answer because for reason in a moment, it could be the throwing context. The thing that wraps whenever the throw happens. That’s a bad answer, because we could talk about it. There is the call time, when the rejection happens. Line 14. When the rejection actually happens, which one of these three answers essentially do you think is the one that is propagated? There’s more clarification that needs to happen here. For the majority of cases, it doesn’t matter what our choice is. Unless we chose the registration time of the event listener, which is an awful choice. If we choice one of the other options, we have essentially consistent, pretty logically consistent answer. The ABC context here will be propagated to the rejection, unhandled rejection for all the promises no matter what happens. You can go through a series of call chains, async stack, async function that calls another function, that calls another function that eventually has an unhandled rejection promises. All see ABC because of the way the semantics of the proposal works. We don’t have any issues.
But this really comes up when we have this specific set up.
We have a promise, the promise rejection function escapes the context, the context.run. On line 9 through 14 here, I create a variable called reject. I then invoke a context.run and get that out of the context.run. The rejection has leaked out of my context. That’s an important point to make there What is the context at the time that this rejection happens on line 16 here? What is the context that happens here? At the moment, the answer is call. It’s whatever the reject function itself is invoked ask that is a side effect of the way that the then is the thing that captures the context, not the promise.
If we want to make this – change this so that it is the init context, then I have to go through and make a larger set of changes to that the promise allocation stores the context and not the then handlers. This is the next hairy question we got. And I will jump back to the queue

MM: Yeah. So my sense is that unhandled rejection handlers are there for diagnostic purposes, which is the reason why errors capture stacks is all for diagnostic purposes. You can have a rejected promise that is not rejected with an error, but with that program, it doesn’t capture a stack . . . so my suggestion is that the unhandled rejection handler, bound to default, and that if the handler wants to extract the dynamic context associated with the reason why the promise was rejected, that it can do that by using the error option

JRL: I am going to give you a hypothetical answer to this. I run a platform. My platform runs user code. I don’t control the user code that is run. However, I do need to ensure that the rejection is associated with the request that is handling that – whatever caused that rejection to happen. In that case, I could only successfully associate – that would break my platform for certain cases. So I am not –

MM: What are the uses other than diagnostics?

JRL: I need to show the user the query params it caused that to do the diagnostics for them

JRL: I can’t force my user to throw an error in every case.

MM: Okay. I am certainly happy for this question to proceed during stage 2. And I agree with the other thing about yield, able to have the question proceed? Stage 2. I got to say, I will take the opportunity to say, I am very supportive of this proposal going to stage 2.

JRL: Awesome. Thank you.

USA: Real quick, you have no more than 4 minutes.

JRL: Yeah. The last one we will have to digest over lunch because I can’t answer whatever I do

DE: I would really like – focus on do we like this proposal? Go to stage 2. We need to discuss that. Or we just keep it stage 1 for now? Do people want to add to the queue about thoughts for that?

JRL: I can ask for stage 2 and proposal the final question afterwards?

DE: Yeah. Let’s do that.

JRL: Okay. Then, yes. If – I don’t think any of these questions are blockers for stage 2. In fact, I need to get it stage 2 to answer some of them with the larger web community. I would like to, with the current semantics and spec tests, ask for stage 2 with the expectation we will have the larger discussions on the web platform folks and other implementers after stage 2.

KG: So I am fine with stage 2. But like with the understanding that I am basically taking it on faith that it is useful in the ways that you said it would be useful. I don’t understand – I can’t visualize how it’s useful in all those things. And like as you say, we need to talk to the rest of the platform to ensure it does work in some of those cases. But I would like to spend like a lot more time sitting with examples of - here is why it is useful in this case, how are we expecting it to get used, to solve problems that it solves. Right now we talked about the logging example and that is neat. But I need to see a lot more examples for a feature of this size to be happy adding to the language. That said, that can happen in stage 2. I am fine taking it on faith that those examples exist. Just I would like to see them when this comes back.

JRL: Okay. Yeah. We can work on that. I do think all of the cases that we have listed in the slide at the very beginning are case that is are solved directly by the presence of async context. So I will flesh out those examples in the repo after today

KG: Okay. Thanks.

USA: All right. I think you have a number of other comments with support. There’s CDA that says, IBM supports stage 2. KG went so I will delete that.

SYG: I think the utility is – of this particular proposal is restricted to making a programmable, which is not as wide of the slide, which other web APIs. They can go independently without this happening. With that said, the user programmable part is useful. There are frameworks that would benefit from this. The big if is on the acceptability of performance. And I think the performance – the performance of the implementation, and techniques will work for the existing web features and the user programmable async context.
But I think that it’s still an if.
And historically, there’s been resistance in V8 if not performing enough.

JRL: Okay

SYG: Yeah. Completely fine with stage 2.

SRV: (from queue) support for stage 2

JRL: Okay. Then I am going to – I will answer your thought in just a second. I am officially asking for stage 2 so we can wrap this up in the timebox. And I am happy to talk while having lunch. Getting several explicit supports in the queue. Does anyone object to reaching stage 2 today?

JHD: I don’t object, but I want to say, I would like it to be explicit, if possible, that it is goal of the proposal to, as much as performance allows, have the defaults be safe. Meaning, like, it’s really – I want it to be really easy to preserve async context and really difficult to accidentally lose it. And I understand performance issues may interfere, but like, if that’s an explicit goal with that caveat, then I am happy with stage 2

JRL: That’s a discussion we will have with the web platform folks how to work across a large slot of code. That’s my intention as well, to make this automatic in most cases.

JHD: Thank you

MM: I just want to say that I disagree that capture should be the default on semantic grounds - independent of performance.

JRL: Okay. I am going to pause right there. Let’s not discuss that at the moment. I want to make sure I get to stage 2 before this timebox is up.
There are strong supports. I didn’t hear anything objecting. I think that’s official I am stage 2. Correct?

CDA: Yes.

JRL: Perfect. Thank you. Mark’s point, I think your explicitly – about closures, capturing them, registration, time would make to capture time, we can talk about the web platform talk, which is issue 22. About registration time capturing event listener and other platform –

MM: I don’t disagree. I was thinking specifically of closure capture.

JRL: Yes. I agree it should not happen. I hope it can happen because that’s the only way that will happen in the ecosystem. For Shu’s point about performance, I think this is – more performance than the current solution which users have to do. And that’s all I have time for.

### Speaker's Summary of Key Points

Reaches Stage 2 Future presentations (and edits of the proposal README) will need to elaborate on the use cases, as the committee does not understand these beyond logging.
Open questions will be discussed on repo threads and in regular calls which to be advertised to the committee.
Need to investigate ecosystem integration Also to investigate the implications of having automatic `context.wrap` capture of functions as suggested by JHD

### Conclusion

- Stage 2
- Explicit support from KG, SYG, CDA (IBM), SRV, DE, DMR

## Promise.withResolvers

Presenter: Peter Klecha (PKA)

- [proposal](https://github.com/peetklecha/proposal-promise-with-resolvers)
- [slides](https://docs.google.com/presentation/d/18CqQc6GfZJBWmT7li2nqfvrSFhpNwtQWPfSXhAwo-Bo)

PKA: Okay. Hello, everybody. My name is Peter, I am a new delegate with Bloomberg. And I am here to give a brief presentation on Promise.withResolvers for Stage 1.
The idea is hopefully familiar to – probably familiar to a lot of us. The plain Promise constructor works well for use cases. We pass in an executor. It takes the resolve and rejects arguments. Inside the body, we are meant to decide how the Promise gets resolved or rejected bypassing it into some async API, like, in this case. That works well for most use cases, but sometimes developers want to create a promise before deciding how or when to call its resolvers.
So when that situation arises, we have to do the dance of scooping out the resolve and reject from the body, binding to globals and going on their way, like in this case This is a really common – I don’t want to oversell, it’s not everyday that you write this, but fairly common. It gets re – this a wheel that is reinvented all over the place. Utility function in the TypeScript. In Deno as deferred. It appears in all kinds of popular libraries

PKA: The proposal is very simple: a constructer that does away with the need for users for – developers to write this by simply returning a premise together with its resolve and reject functions on a plain object.
This idea has been in Chrome before. It used to be in Promise.defer. Many people know it under that name. The name is bikeshedded in future stages. But it’s clear that there’s a need, or a desire for this functionality. And it would just a nice thing for developers to be able to have an easy way to access this functionality.
So, yeah. I am ready for feedback.

DLM: Yeah. We discussed this and the team agrees this is a common problem and we support it for Stage 1.

PKA: Great.

CDA: Okay. KG?

KG: Exactly the same comment.

CDA: Okay. Yeah. I would say the pattern is extremely common. And IBM supports of Stage 1 as well

MM: +1

RBN: I just wanted to say that I’ve definitely in favour of this proposal. I am not sure I agree with the naming and I apologize if I missed too much. As I said in the chat, I had to step away for a minute.
Definitely if favour of this. This exists quite a bit throughout the ecosystem. In Jquery from promise was adopted by the language as Jquery's defer. There’s libraries implement and it’s extremely valuable. Around naming, this is something we can bikeshed in Stage 1.

PKA: Absolutely.

RBN: I like that this mirrors – subtlety mirrors the `Proxy.revocable` API, where you get both the promise and the thing that does the resolution or revocation as properties

JRL: I have written this in every one of my applications.

LCA: Deno has standard library function author this + 1 for doing this built in. Next we have JHX.

JHX: Yeah. I also support Stage 1. my question is do we have the history info that why es6 do not include `Promise.defer`.

MM: Yeah. I was there. I was actually the one that pushed for the – the original proposal actually had `promise.defer`. That was also in the proposal as I originally wrote it.
And I was the one who then pushed for the change to the current API, where you have the executor to the constructer. And I am glad that that – the exector and the constructer made it into the language, but the perspective that we had at the time was to be be as minimal as we can. So it was really one or the other. And I think that I agree that the aesthetics of language today is, although I am certainly very much still on the side of trying to err on the side of minimalism – I think to be redundant in functionality, by adding this common API, is fine.

CDA: Okay. We have nobody else on the queue. Give that a moment to stir . . .

JHD: Yeah. So I jumped on the queue. The first thing I was curious, would this follow the same species pattern, that Promise.all happens to? This is something for Stage 2, I was just curious if someone had thoughts on it.

PKA: It’s a open question. The spec as it I have it written would have subclasses would have produce subclasses.

JHD: For now, that answered my question. We can discuss it further in further stages. Thoughts on naming: there a lot of websites that ship `es6-shim` that deletes `Promise.defer` because Chrome shipped it for a while and it wasn’t in the spec. So that may or may not be an option. Throwing that out there. Also, something to deal with in later stages.

CDA: All right. Another moment here . . . in case anybody wants to jump on the queue with anything. Failing that, I think you have already got several explicit messages of support.
And we have another one.
I guess if you want to repeat your call for Stage 1 consensus?

PKA: Yeah. Do I have consensus for Stage 1?

NRO: +1 for stage 1

### Speaker's Summary of Key Points

General support This was only omitted for minimalism in ES6 Name to be bikeshedded, "defer" has the problem that `es6-shim` deletes it Symbol.species to be discussed

### Conclusion

- Stage 1
- Explicit support from MM, NRO, CDA (IBM), JHD, KG

## Quick Regex Escaping update

MM: If this is a bit of dead time, let me update something that KG, JHD and I resolved over lunch. One is that KG did a slide show that had a really quite exhaustive analysis of the safety of `RegExp.escape` and the renumerationion of the unsafe cases and that convinced me. So I think that given the – what the rest of the room was in the previous conversation, that we will be going with head with `RegExp.escape`.

### Summary

MM’s security concerns have been addressed, looks like we can progress with a `RegExp.escape` API

## Temporal nanoseconds precision follow-up

Presenter: Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://docs.google.com/presentation/d/1b74GI-zHrG0wDzmwFs_yPWRli24KyVUNx3GeZt8JouA/edit#slide=id.g2227767b447_1_6)

PFC: After the presentation on Tuesday, I got some feedback that it would be useful to go into the difference between nanoseconds and microseconds precision here. And also, elaborate a bit on what the current opinion of the Temporal champions is of this, which in the presentation I didn’t mention explicitly. I made a couple of slides, if you want to follow along, at the end of the slide deck from the presentation that I gave on Tuesday, in the last three slides.

PFC: First I wanted to go into the assumptions that we made when figuring out the solution to eliminate unbounded integer arithmetic that I discussed on Tuesday.
What we’re assuming is that the range that JavaScript Date covers right now, which is 100 million days before and after the Unix epoch, that should be the range that Temporal takes. Because one assumption is that we don’t want people to have a `Date` object that cannot be ported to use a `Temporal` object. The other assumption is we'd like the noncalendar units of `Temporal.Duration` to be at least able to handle subtracting the earliest possible `Instant` from the last possible `Instant`. One thing that this means concretely is that math with Durations requires one more bit than arithmetic with exact times. Because you have the difference between the earliest and the latest or the difference between the latest and the earliest. So you need another sign bit on top of that.
I did a little table here about the required bit widths for each scenario. The first column is the proposal as it currently is. The middle column is the situation after we set an upper bound on the bounded duration. The third is the case for if we set an upper bound and change the precision of the proposal to microseconds. So no nanoseconds. Duration storage, that is a problem we consider already solved. You store in JS numbers, which are essentially 64 bit floats. That doesn’t change. 640 bits seems like a very large storage, but there is optimization possible, and I recommend it as well, if a duration with only a few units, like 5 seconds or one hour 30 minutes.
Duration calculations, that’s where the unbound integer that we want to get rid of.
If we follow the plan that I outlined on Tuesday, then to do duration calculations after that, requires somewhere between 75 and 84 bits, it depends where you place the upper bound.
My feeling is that if you’re using more than 65 bits anyway, you may as well place the upper boundary at max safe integer for seconds, and a billion minus 1 for subseconds, or a million minus 1 if we go to microsecond precision.
So that would be the 84 bits.
The 75 bits would be if you placed the upper bound at the exact number you needed to hold the difference between the earliest and the last instant.
If we also limited the precision to microseconds, then this would be a range of 65 to 74 bits, depending where you place the upper bound. Notably, you could not fit in 64-bits, unless we reconsider one of the assumptions to have duration able to cover the entire range of earliest to latest instant because . . . 64-bits is exactly enough to store the signed integer that is the storage of an Instant with microsecond precision. You will need the 64-bits. The storage you need, the integer size you need to do the calculations with, these don’t change from 74 and 65 bits when you place an upper bound on duration.
If you also limit the precision to microseconds, then you can use 64-bits for the internal storage of temporal instants. You need the extra bit for duration calculations. That won’t fit into a 64-bit integer arithmetic. I have the 3 \*, maybe there’s a special case for durations that exceed 64-bits.
But you do need more than 64-bits in any case for other duration calculations.

PFC: I made this last side about what seems to be where we have arrived at the Temporal champion meetings. The upper bound on the time units of Duration. For a long time we weren’t convinced of that, but recent discussions I think changed everybody’s minds.
Given that we solved the unbounded integer problem with that, additionally going to microseconds precision doesn’t seem like a clear win.
Because the only gain you get of being able to do something in a 64-bit integer, that previously had to be done by the 64-bits is the internal storage of the time since epoch in temporal instant and time zone.
That is, as far as I can distill out of the discussions, how the champions group is thinking about it.
Now, from other discussions, like – from talking with SYG, they place a different weighting upon those two things relative to each other. I would like to ask if we can have maybe a short discussion to hear opinions from other delegates about this, any other concerns there might be? Can we get a signal, how people are generally thinking about this? That’s what I wanted to present. Let’s use the rest of the time for discussion.

WH: I had to step out for a moment, sorry if I missed it. What upper bounds were you using for bit calculations?

PFC: I had a range of bits on this slide, depending on the upper bound. The highest number of bits comes from using the upper bound of max safe integer seconds and the lower comes from using the upper bound of just enough to hold the difference between the earliest and last instant.

WH: And what is that in time?

PFC: It’s on the first slide here. It’s the same range as Date.

WH: 10^8 days? Okay.

CDA: We have DE on the queue

DE: So I agree with the champion group here. I’ve been in touch with them, but the nanosecond precision has some benefit as far as future proving and utility. You can see from Darryl (???) that you don’t need to go more precise than nanoseconds. But microseconds will work for a lot of applications, but it would be unfortunate given all the work that’s been put into making sure that temporal can represent all kinds of things that come up, if we were missing this piece. I think it’s a little bit more of a future proofing issue, as well, that we know that some data is in terms of nanoseconds. Even if we don’t want to do calculations with that now, we may want to in the future. Given that chart of bit widths that PFC showed, it doesn’t seem like microseconds give that much of a benefit in terms of any meaningful kind of memory usage or performance.
Or maybe it does, but it’s for a reason that I can’t quite understand. So yeah. It would not be, you know, a complete killer of a feature if we used microseconds, but it seems preferable to use nanoseconds.

SYG: Thanks, PFC for doing the work on the bounds here. I mean, there is benefit. I see instant storage to be 64-bit. Like, that is a benefit. We may disagree on the degree of the benefit, but that is a benefit.
I want to give – so the V8 position here is we can live with the bounded stuff and nanosecond precision. We still prefer miscroseconds, but we can live with the champions' preference. Some for background anti-nanosecond position, like some of that is performance driven as with all feedback from V8 is. But some of that is actually like just philosophical disagreement. And I am a little bit out of my depth here, relaying the opinions of others on the team. The feeling is nanoseconds for the computation that people want nanoseconds for is just not useful. The computer clock will not get to good nanoseconds. It sounds good on paper. We will future proof but people are not convinced that is going to happen in a useful way for nanoseconds. I don’t know what kind of clocks they are using today, like, are these financial stuff exchanges, using their own like atomic clocks what are they doing to get nanoseconds? In any case, like that kind of future proofing bar is not something that has been really applied to other proposals. Like we did not really – it’s not just performance that we are against nanoseconds. But performance takes precedence, takes priority. So we are happy with the current solution. But yeah, we don’t think nanoseconds are useful.

CDA: Okay. Next on the queue is APK? A quick note we have just a few minutes left for this item.

APK: Yeah. This is real quick. Responding to SYG that it’s not so much about the origins of the clock because a lot of times it’s used for exact sequencing because it doesn’t matter what is it is, but it’s a single clock generating the numbers it so it’s consistent in the data set. It’s more, to me, the near-term benefit is not some hypothetical future situation, but that literally every other system and every other programming language now have upgraded either started out or upgraded to nanoseconds. So when you’re ferrying values through JavaScript, from different systems, you don’t want the case where just because it happens to be going through the JavaScript language, as a temporal-needed type that you’re losing precision or how somehow carry the extra precision out of band just to get it through JavaScript into another source, like from a database to a service or another database. There’s is a clear benefit to doing it now because nearly every other system already supports it

PFC: This is maybe a hot take, but I guess if we didn't have Duration as a first class type in Temporal, I would struggle to see the utility of nanoseconds, but since we do, I think that’s mainly how I see it being used.

WH: Nanoseconds are used for interop and round-tripping from other systems. Nanoseconds are quite common. One minor concern is that Abseil uses quarter nanoseconds, which actually causes a lot of friction of the boundaries.

CDA: Okay. Last on the queue is + 1 on preferring nanoseconds from DLM.

PFC: Yeah. Thanks for the input, everyone.

### Summary

The committee weighed pros and cons of nanoseconds vs microseconds, concluding to stick with nanoseconds as the granularity of all Temporal time/instant types, to enable interchange with other systems.

## Time Zone Canonicalization for Stage 1

Presenter: Justin Grant (JGT)

- [proposal](https://github.com/justingrant/proposal-canonical-tz)
- [slides](https://docs.google.com/presentation/d/13vW8JxkbzyzGubT5ZkqUIxtpOQGNSUlguVwgcrbitog)
- [summary](https://github.com/justingrant/proposal-canonical-tz#handling-time-zone-canonicalization-changes)

JGT: Thanks so much for having me and I just want to say before I start that I am just so happy and grateful to be here. I’ve been working with temporal for 3 years for you, it’s great. I work in startups so there’s often a bunch of downtime. I learn something every time. So thank you.
So today we will talk about the canonicalization of time zone identifiers. There’s a Stage 0 zero repo up here. I just cloned the temporal repo for now. If we get Stage 1 we will clean it up. Richard Gibson has graciously agreed to work with me as a co-champion which is awesome. Let’s just dive in.

JGT: So today these are fairly complicated topics so I'm going to provide some context and then talk about the problems and some solutions.
And if that goes well, we will ask for Stage 1.
First in context is the IANA time zone database for everybody in computing. A quick introduction to TZDB: the core is rules. Rules are like a function that accepts the name of the time zone and identifier, and UTC timestamp, and it returns the offset of that instant in that time zone relative to UTC.
A Zone is a collection of rules for a particular time zone. For the location of this meeting today, the Zone is America/Los_Angeles, it would be -7 hours offset from UTC.
Zones are named by identifiers. An identifier is the name of a continent or ocean, slash and the largest city in the time zone. There’s also the special prefix called Etc which has special time zones like UTC which do not correspond to any geographic location.
There’s 600 of these. They grew slowly, like when a country decides to split a particular region’s time zone.
Finally, there are Links, which are redirects going from a non-canonical identifier to a canonical identifier. Links don’t have their own Zone records. They're only for backward compatibility.
The final player in this space is CLDR: the localization data repository used by ECMAScript, Android, and others.
When you call Date.toLocaleString, there's a "PDT" at the end of it. The "PDT" comes from CLDR, which needs to know about time zone identifiers because those are the keys to look up the time zones it needs to display localized text. When this changes, CLDR picks them up in the next release (after delay). The next release of CLDR usually contains the update.

JGT: The next piece of context is explaining why "Links" are created. Links are the focus of this proposal.
There’s three reasons. One is to deal with legacy identifiers. US/Alaska, before the Continent/City naming scheme was created, was the name for the Alaskan time zone. Now it’s America/Anchorage. There's never going to be any more of these, so not a problem for ECMAScript.
The next kind of Link is controversial: it's merging zones that have had identical rules since 1970. The maintainer of the time zone database wants to reduce the size and overhead of maintenance of the database, and so in the case of let’s say Iceland, that had the same rules as Ivory Coast since 1970, those rules are now merged in the time zone database.
And so as you can expect, this is controversial because there are lots of use cases including ECMAScript here, but also Java and elsewhere, where it’s helpful to hold on to the original identifier used because it’s entirely possible at some point Ivory Coast and Iceland are going to diverge again and which would result in data loss for the end user.
Thankfully, this is not an issue for us because ECMAScript implementations work around this problem. Firefox uses particular makefile options when they build the Time Zone Database. We are not worried there. For V8 and WebKit, they use CLDR which never changes the identifiers once once is published in a CLDR release. It’s like a Roach Motel for canonical identifiers. So, therefore, when they ignore that because it’s against the policy to change the identifier after it goes in.
Both of those are not an issue.
What is an issue for us today is this third case, which is when there are changes to the English names of cities, like when Asia/Calcutta was renamed to Asia/Kolkata or Asia/Saigon to Asia/Ho_Chi_Minh. These renames are rare. One each per year in the last three years. Previous was in 2016. So it’s – they are rare, but when they do happen, they are problematic and that’s the focus of this proposal.

JGT: So switching from context to problems.
One of the problems I mentioned before is that because Firefox and V8 WebKit use different data sources, this difference leads to different userland behavior. In this case, there’s variation between implementations. If I create a time zone, then Firefox will give me back Asia/Kolkata, but Chrome and Safari will give me Asia/Calcutta. This is a challenge and needing to deal with it is annoying. And it also creates some other problems that I will talk about later.
The reason this variation exists is because the spec is vague about what implementers are supposed to do. It says, of the time zone database. But it doesn’t narrow it down enough – I mentioned before that Firefox uses the build options. That information just is not in the spec. And so furthermore, thankfully nobody does this, but there's nothing that prevents implementations for doing worse things, like mapping to . . . Stockholm to Berlin and all over to Serbia. Developers in those countries would not be happy about that.
But even in the current state, developers are unhappy with the current state.
The problems I'm showing are from a quick Google search. A small selection of bugs that I saw for developers complaining about the current state of things, almost all of the complaints are that V8 and WebKit are not caught up with how identifiers are in the time zone database like Firefox. Here's one guy complaining that it's been broken since 1993.
Another guy, his piece of network equipment that depends on the time zone ID hasn’t caught up. You can find dozens more like this of people complaining about this over the years.
People understandably, if you live in a country, you have an opinion about what your cities will be called. And it’s annoying when you’re a software developer, looking at what your computing platform is giving you a colonized name instead of the one you prefer.

JGT: Beyond people being pissed off and having political or cultural concerns, there are software engineering issues too. For example, in the Firefox case, canonical identifiers change over time. This means that static data, like in test automation, can behave differently over time.
So in this case, I could run a test suite. Pass in Asia/Calcutta and get it back. Upgrade Node, run it again and I don’t get the expected thing back, I get Asia/Kolkata. This is a specific example of a general case: with time zone identifier strings, you can’t use triple equals as the way to determine whether two time zones are the same. An example here is, you take the current time zone, save it, one year later, come back, load it back, compare the two. By string identity. And they don’t match. And so I think that’s what the one lesson that came as I dug into the problem: the core issue to solve is that using === on string identifiers to compare time zones is not a good idea because those strings can change.
OK, these problems are bad. But with Temporal, they will get worse.
Today, before Temporal, you have to dig to find the identifier for a time zone.
The first 4 lines of the top code sample are a localization example of a date. You will notice, when this output here of 3-10-23 India standard time, there’s no time zone identifier. From the end-user’s perspective, there is no presence of the identifier. The only way you can get it is if you call the resolvedOptions method and pull the time zone property and get the the ID. You will never see it otherwise, like if you `console.log` a date. You will never see it if you hover your date in the debugger. Never see it in browser devtools.
However, in Temporal, ZonedDateTime has the identifier in its `toString` output. Any time you call `toString`, any time you transform a Temporal.ZonedDateTime to JSON. Any time you console.log it. You will see this identifier. And so it’s a safe bet that maybe 100X, maybe a 1000X more developers will see identifiers after Temporal is out than before.
So that was essentially the impetus for me doing this proposal this problem will get worse than it is and there’s a fair element of evidence that it’s already pretty bad.

JGT: So let’s talk about proposed solutions to these problems. There’s two groups of these solutions. The first group makes small changes to the spec text, to reduce the divergence between implementations and the spec and implementations and the spec. Tighten up the spec to prevent future divergence and work to see if we can converge on a consistent approach for now.
And then a second part of this, to complement the changes above is to make small API changes that make it less disruptive when this changes in the first place. This will really help for the inevitable next time we have a Kiev to Kyiv change We split these solutions up into 6 steps under the idea that some might get blocked or technical issues. We didn’t want the perfect to be the enemy of the good. We can move forward on the rest.
The first category is the spec changes. To simplify the abstract operations that deal with time zone identifiers. His makes every other change easier. Following this is to clarify the spec to divergence from getting worse. Not make a normative change yet, but to say, if you are doing this in the future, please don’t do this because it’s stupid. Please head in this way.
And then work with the implementers of V8 and WebKit to see and their upstream dependencies, like ICU to see get a solution to the out of date identifiers. These are for current code from Temporal. These are the biggest source of problems today. There’s only 13 of them. Which is really good news. Which means the absolute worst case, there’s a hard coded mapping table to get updated once every year. Ideally we want a single upstream place where this happens. We’re talking about whether CLDR can be at that place. If nothing works, the worst case is not bad. Because the rate of change is low.
If we can get through 1, 2, and 3 we will be in a good place to add normative spec text that prevent the problems in the future as the limitations move forward, they will not diverge.

JGT: Let’s talk about API change. Two in mind. Today, the main reason why code behavior changes when canonicalization changes is that we do this eagerly. If we provide an identifier both today and in Temporal, it will do this identifier before doing anything else.
You lose the knowledge with your original identifier that you passed in. An example where Australia/Canberra and I get back Australia/Sydney. So if this changes from one release to the next then the code will change.
The proposed behavior is to not to do that. To essentially keep the existing identifier that the user provides, instead of immediately canonicalizing. And when the user asks for it back, give them back the same identifier that they provided. So that fixes the test automation case and makes things more predictable in the face of changes.
In almost all cases, this code will not change. There are a few exceptions to that. If I call Temporal.Now to get the current host environment's time zone, it is always going to return it canonicalized. If I am doing the thing I said you shouldn't do several slides ago to use the string IDs for comparison, then you’re going to run into this problem.
So I think for Temporal, there’s not a lot of Temporal legacy code, it’s easy to customize the behavior. In DateTimeFormat, it’s up to TG2, whether they want to retain the existing behavior or snap to the behavior we are proposing here. There’s an issue in the repo to discuss this, please comment if you have an opinion one way or another. There is also a proof of concept PR to describe the changes required to implement this. It's pretty small. Only a handful of places where identifiers are dealt with in the spec.
The second API change. This previous change introduces a problem, developers want to have a way to know if you have two different identifiers. How to know if these are the same time zone? That’s the final step, to add a Temporal.TimeZone.prototype.equals method, which solves this problem of having to use identifier strings because you can use code to determine whether Calcutta is the same as Kolkata. You can do this today, as a work around using `ZonedDateTime.equals`. You can see, it’s not particularly ergonomic or discoverable.
This is the proposal and I would love your feedback

CDA: Thank you, Justin. We have a number of items in the queue. First up, DE

DE: So I think you have made a strong case that the insistence of the ECMA-402 shouldn't normatively reference the IANA timezone database, that this is not good and we need to allow tailoring, and we need to coordinate among implement indications as well as possible, possibly through CLDR. Overall, I would like to defer to TG2 to make a judgment. Even though TG2 doesn’t own Temporal, they are the most qualified body in this area.

DLM: Okay. I would say, thank you for the presentation. I think it’s very well-explained. And overall, I think what you’re proposing is well-motivated and SpiderMonkey supports this.

FYT: I wonder whether this is the right place to talk about this time zone thing. It’s a complicated issue. So I have to throw this topic out here . . . do we really think is the stand up body to discuss this issue or should be deferred to some other place to talk about it?

JGT: And just as a quick clarification, I was actually requested to do this proposal by TG2. And I think to answer this question, I do think what TG2 or what – excuse me, what we can do in TC39, design the API to be less sensitive. There’s two parts: one is define the spec of how ECMAScript will deal with this. It’s codifying the existing practice. Implementers have decided this. Our goal is to – can we align on something and lock it in the spec to prevent further divergence. There are changes we can make that are unrelated to any standards of body, how do we make things easier for ECMAScript developers. From my mind that, is the core reason why TC39 needs to deal with this, because we want to decrease the impact of this, whatever these standards happen to be.

SFC: I will reply to this, which is that . . . it’s the job of this body TC39 to provide interfaces that developers can build software against. Like, that’s our job. And there’s certain assumptions that developers can make and certain assumptions developers cannot make.
And if a developer – like, if we think that there are assumptions to build certain types of software, then those are things that should be codified in the specification. And JGT has shown quite a lot of evidence that having a consistent story across the web platform about how we feel with time zone canonicalization is one of those things. And therefore, I think it is the job of TC39 to codify this. I would also clarify that CLDR and IANA have their priorities and needs when it comes to how they recommend that you do it.
For IANA, JGT explained what they are optimizing for is data maintenance cost. So they want to merge as many time zones together. CLDR is optimizing for stability. The reason why they continue to use the obsolete time zone IDs is because they have data files that are – that go back a long time and want to continue working based on software that has been working for 20 years and continue for another 20 years.
So those two bodies have different priorities when it comes to how to do the time zone. And TC39, we have other requirements for what our developers need, which is not necessarily what IANA or CLDR developers need. This is appropriate for this body to explore. And I am also one of the people who recommended to JGT to make this proposal. So I am really happy with the way that the slides went together. I think JGT did a good job of motivating Stage 1.

DE: If TG2 is in favor of this proposal going forward, then I am as well. This endorsement was previously unclear to me.

SYG [from queue]: Say more about "implementers have already decided"? Not familiar with space.

JGT: I think I understand this question. So in absence of the spec being clear about what the expectations are, both sets of implementers, so this is both the implementers that rely directly on CLDR, which is WebKit and V8, and Firefox, right, independently have come to a relatively similar conclusion, which is resolving Iceland to Ivory Coast is a bad idea and should avoid it. That’s what I meant by implementers have decided. They have coalesced, except for the 13 outdated zones that CLDR has kept for essentially implementation reasons. They seem to be very similar. And so it does feel like if we resolve the 13 mismatched zones, then we could get pretty good consensus across implementers of how the specs should behave going forward to prevent this kind of bifurcation in the future. Does that answer your question?

SYG: I want more detail. Treat me like a golden retriever. Et cetera. What is the . . . what is the – let’s see. How do I phrase this . . . Firefox Mozilla, it’s a bad idea to do this, is is that written down anywhere, or just converging behaviour that you . . .

JGT: I think in the case of Firefox, it was an explicit decision, as far as I understand.

SYG: Sorry. Is this written down in another like in what WG or 3, as a spec agreed upon by web browser already?

JGT: No. It is accidentally evolutionary behavior over time responding to just pick what is sensible.

SYG: Okay. I see. this proposal seeks to codify some of these – codify that convergence evolutionary behavior plus the 13 extra ones?

JGT: Ideally, to fix the 13, so we end up with one. We end up with one behavior across implementations and then to codify that.

SYG: I am still confused. What is the . . . is the convergent effusionary behavior a subset?

JGT: Things that are not converged. Because of the implementation of CLDR because they never update the zones. Therefore, over time, Firefox has diverged from V8 and WebKit. And so the goal here is actually to respond to customer feedback, saying that behavior is bad. To see if we can find a way to converge V8 and WebKit to Firefox is and lock that in here are some principles that will guide how we will do this in the future.

SYG: And is it also in the scope of this proposal to write down the behavior that has converged?

JGT: I believe so, yes.

SYG: Okay. I think that answers my question. Thank you

CDA: Okay. We only have a few minutes left. I don’t think we will be able to get through the entire queue to that end. Justin, do you want to – is there any particular item that you want to address or keep going down the list for a minute or two

JGT: Yeah. I will love to hear – to respond to MM’s thing first.

MM: Yeah. So there are genuine territorial disputes and strong feelings on both sides, they are not – they don’t have an objective resolution. I would hate for us to be in committee arguing between the partisans of both side. Is it our practice that all of the resolutions are delegated to a standards committee

JGT: The time zone database owns those thorny problems. It’s more a matter of the time zone database has a makefile, which is a misnomer. It’s code. You run it. And that code spits out data files at the end. There are options to that makefile.
And our decision is essentially which options do we want to pick that define how the output is going to look, but the actual decisions of what data goes in there and what the names are, that is not our problem at all. It’s purely about how we use the options that are available to us by somebody else.

MM: Whose problem is it? What standards organizations are we delegating these political decisions to

JGT: It’s IANA. The decision to admit and name the identifiers in the time zone database comes from IANA.

MM: Okay. Thank you.

WH: Looking at the database, I do see separate entries for Iceland and Abidjan even though they have the same offset. I am curious: what happens when large zones bifurcate, like might be happening in the US nowadays if Congress decides to repeat the 1974 year-round DST experiment. Suppose Los Angeles goes to year-round DST and Seattle does not, how would that affect the concept of time zone equality?

JGT: What happens in that case, as a new zone was created and that recently happened for a portion of Mexico. . . they add a new identifier for that portion of Mexico. That’s how that works. And yes, it does, if I have the old identifier for that part of Mexico, and I am living in a new one, it gives us the wrong time. There needs to be a way to say. Hey, I live in this time zone and that’s one of the consequences of using the time don’t know database and all and that’s not unique to us.

RGN: I will elaborate. Bifurcation of zones is a concern. Whereas, the IANA is back-ward looking. We want to make sure that code that depends on Temporal and ECMAScript goes forward. Iceland, there’s no guarantee that because it has agreed with Ivory Coast since 1970, it continues to do so in perpetuity. That’s the reason we want to maintain the distinction by default. I mean, it motivates browsers to do so. But codifying it is an appropriate characteristic of this proposal.

JGT: And I can quickly answer the previous question about web compatibility. Today we make no guarantee this will change over time. It’s why Firefox has been able to diverge from V8 and WebKit. Also, because of that, in order to worry about backward compatibility, I think you first need current compatibility. Which we don’t have today. And so one of the parts of this is to try to make more explicit in the spec what are the things developers can expect compatibility over time and the places they can’t.
Looks like we're out of time.
Can I ask for Stage 1?

MM: Support

CDA: We have explicit support from MM, CDA (IBM), DE, DLM. Okay. You have Stage 1.

JGT: Haha, I feel very popular. Thank you, everybody.

### Speaker's Summary of Key Points

- The committee discussed various cases where time zones are canonicalized incorrectly by web browsers, and differing from each other, with a proposal for how to fix this and ensure common semantics.
- The biggest open issue is what should happen to DataTimeFormat.p.resolvedOptions().timeZone: whether it should continue its current behavior or snap to the proposed behavior for Temporal. That’s the biggest area where I am looking for input because I honestly don’t have a strong opinion of how that can be resolved. I would sort of follow the crowd.
- Everyone in the committee agreed that we should snap to the modern identifiers of Kolkata and Ho Chi Minh City and Kyiv; please get in touch with the champions if you disagree.

### Conclusion

- Proposal reaches Stage 1
- Explicit support from MM, CDA (IBM), DE, DLM

## Class constructor and method parameter decorators

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/rbuckton/proposal-class-method-parameter-decorators)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkodwnfnGJ4--QyAsrw?e=c7blVv)

RBN: So we shipped the TypeScript 5.0 release, including support for the Stage 3 Decorators proposal. It gives opportunity to the native decorators. And it also gives us the opportunity to turn our attention back towards the ecosystem's use of TypeScript decorators to find more both innovative use cases and potential migration blockers. Yesterday we saw the metadata proposal, which is one of the several capabilities that was enabled in our legacy decorators experiment, and has evolved from concepts that I discussed with YK and EA back in the original design as far back as 2013. I am excited to see the progress and the progress of metadata is extremely broads and the proposal goes a long ways to removing hurdles to migration. Another component of the 2013 design was the potential to have function declarations, function expression, error functions, objective literal methods and parameters. Given the complexities of hoisting and circularity issues for function declarations, by the time decorates reached stage 2, we focussed on classes and class elements and leave for the other for future proposals. As TypeScript looks at existing use cases of decorators, one of the used experiments not covered has the ability to decorate parameters and methods. So the question then becomes, what exactly are we talking about when we talk about parameter decorators?

RBN: Parameter decorators. They are in TypeScript currently for experimental support that is logically similar to parameter attributes in C++ and Java. As I mentioned, this is part of the initial design that we had been investigating with TypeScript experimental decorators as far back as 2013 and 2014. The motivations around this, when they were first considered when we started putting the proposal so long ago, and still exist today, are varied and align with the metadata proposal as it stands currently. One major case heavily used in the ecosystem, is constructor parameter based dependency injection. Another common case used today is a web API request routing, bind request headers, from form fields to parameters of methods of class. And then these motivations can be extended into a number other interesting areas that aren’t currently either viable with TypeScripts derivatives or aren’t easy to do because of limitations. Argument validation of null and define I don’t your range validation. There are issues that I have seen across multiple object relational mapping system. Type ORM, related to entity construction. Another is method parameter marshaling for interfaces, WASM with native libraries where you need to easily marshal strings or other data types including potentially things like fixed shape objects. And obviously metadata which is heavily used by many of the scenarios that are discussed about.
One of the other motivators and the reasons again that I mentioned earlier is that there are 3 remaining blockers for migration within the ecosystem. This one which is the lack of the ability to do class constructor parameter decoration, this is a high priority thing. It’s heavily used by a lot of large projects that use TypeScript. And it’s what I will talk about in this proposal, another is the lack of metadata, again this is one that is very high priority within the ecosystem for that type of migration and addressed by the proposal at Stage 2. And the fact that currently there’s no ability to decorate entangled get/set pairs. This is a low to moderate priority. Less incidence of this in the various repositories that I have investigated. It’s now addressed by the proposal – potentially addressed at Stage 1.

RBN: I would like to spend time talking about each of the cases I talked about in the motivations and where this has value in the ecosystem. So dependency injection. If you’re not familiar, a version of a controlled design pattern. Used in large scale applications, large scale deployments. It's used in VS code and Angular. Angular has used dependency injections since Angular 1.0. Before TypeScript got involved with decorators. Advantages of this is it facilitates breaking down applications into parts, components and services. And helps facilitate unit testing by isolating dependency, so you can inject mock and fake implementations. Constructor parameter injection specifically is something used when a part or component in this – dependency injection needs to perform initialization. An example that I have used in some places is editor like VS code might register the L monikers for various – to be interpreted by the electronic tonic run time and do that as part of an injection. So in that system, or a component might receive at construction time the – a service with which they do their registration and pass that along and perform the registration during initialization. Without this and the ability to do with . . . you have to tag on a specific class or have a specific design for your class to indicate this is when initialization happens. And that then overcomplicates the process of setting up tests and mocks. This is used heavily throughout many projects. Angular has had constructor parameters since 1.0. They were doing specially crafted parameter names that only work in you’re in an environment that supported a usable function prototype toString, and back when this was being used with angular 1.0, it wasn’t guaranteed to exist and it’s potentially not viable today given that it’s possible that a embedded JavaScript engine might not maintain source information and might not be able. So the mechanisms employed by Angular back then are not up to the needs for angular when it released 2.0.In addition, DI is used heavily in the TypeScript ecosystem. DI systems. This includes Is injection system to be used – uses parameter injection within TypeScript. These are large projects. On the proposal repo. I have links thousands of these in the ecosystem today. As an example of what dependency injection looks like. A class to inject services and using a service identifier, in this case, I am using strings, but this could be individual decorators. There's a service identifier that you define that describes a service and that is a decorator function. So you annotate it for that. In this case, the constructor receives these values by – when the DI container does its work to satisfy dependencies, determine what it needs to create the objects to begin with, and you can see at the bottom of this example, if you had a DI container, could could contain the source and getting an instance of the customization service, it would allocate and fill in the things necessary to create this.

RBN: Another example: a clip from actual usage within VS code. It uses the service identifiers that are essentially the name of the interface or the name of the service that you’re injecting and each one is an actual decorator. You can go to the slides and see the link, to see where this thing exists within the VS code, source code. And VS code has hundreds and hundreds of cases of this. It makes construction very easy. Another use case for this are methods that are endpoints and parameters are used to bind specific request parameters to parameters of method. That model allows you to abstract away complexities, handle coercion strings for, say, a numeric ID that you pass in a request route. It exists again, in the TypeScript ecosystem, if packages like loopback for. How this looks in at run time is that you have something like – a book’s API that binds a get method to various endpoints in. The first first case, inquiry string parameters to get the page number and size that come in. Requesting a single book, we can bind to a route parameter to get the same of the book. And when posting data, we might be able to say values from the route, the current user in that context. It would utilize async context. Without that, form fields or be adjacent to a serialized body from the foreign body.

RBN: One example of something that isn’t feasible with TypeScript decorators . . . this ties into the things with annotations and run time-type checking as well. Argument validation, you can do here parameters, things in the body of the method, as a search, you can then expose on the parameters themselves.
In a way, this allows you to – promotes reuse and also makes it as if it’s part of the documentation. And because of the fact that parameter decorators are something that is evaluated at declaration time. When the user manager class is defined and made available within the run time, these things can be statically applied and attach metadata. You can use this information to perform especially binding. Let’s say have a HTML template, where you want to generate form fields and you could inspect the metadata assigned by the not empty and required parameters to actual HTML form code. This wires up this type of glue for these types of capabilities that really wouldn’t be viable if you were performing a search. In the case of object relational mapping, ORM systems allow you to define entities that happen to a table in RDBMS. Many ORMs use Object.create to hydrate. It has the prototype methods, and use to work with the entities. However, Object.create doesn’t work when you start introducing private fields. So ORMs, it has to call the constructor. Calling the constructor to hydrate is feasible, but then you have to ensure they have to specifically accept a single parameter that has an options bag. You want to provide other parameter list. So it makes it harder for the ORMs to know what is the best to do. This would allow direct fields to specific parameters to allow this hydration to be more compatible with what you want at the – on the end-user perspective. We want the code writing in this case to be better or easier for a human to read and write because the people that are likely to interact with these objects ask but a machine to leverage.
In the case of a ORM example, we might have an entity for a user class and store the ID and the password hash as a private field. Because of the password hash, we can’t use Object.create, since it won’t match the name, including a hash mark. And we need to handle how the construction works. We might be able to bind the field – each of the construct parameters to a database field. Leverage the name to handle that. In the case of renaming the field definition that exists or picking up the field definition that exists in the database to match the parameter without having to specifically match on zero the parameter’s name and allow us to have initializers to specify defaults without having to have something like a bag of properties.

RBN: One of the other motivation we’re looking at this proposal is to provide the capabilities to better interact with foreign interfaces for one language run time . . . packages Fie-Napi, to provide FFI interop. But you want FFI marshaling behavior that is adjacent to the function. So I have an example here. If you were to try to use JavaScript from native code, you have to do this definition where you specify the return type as well as the parameter types on essentially one line and then on the next line define the actual function. This has the same issue that we were discussing with the premise authorities, where this might be fine for one or two parameters. Once it’s longer than, this you eyeball the order of parameters – parameter types versus the parameters in the second list. It makes it harder to read and know what the differences are and make appropriate changes. Whereas, if we had something like parameter decorators we could instead, mark [eeism] of the parameters with the thing we expect to come in here. Expecting this to be an int and the next to be a string. Specify marshaling behavior, like is this null string? How is it handled? This is using classes instead of functions because again this proposal specifically is focussed on the existing syntaxes that work for classes, and I will get more how it relates to the potential future for function decorators in a bit.
So next thing I want to get into a little bit is if we consider this, what the syntax looks like. I am looking for a Stage 1 proposal, meaning that we will have to be open to alternate behaviors to syntax possibly changing to for, this is something that is acceptable. One thing I would like to state is we should be very careful about eventually changing the syntax of how decorators work.
That consistency is what a method decorators looks like versus a parameter decorators. I think it’s best to stick with the syntax that we already have, and essentially illustrated here is that a function rest parameter would allow an optional decorator list before the element. A formal parameter would allow it before the binding element.
We have restrictions on when they can be placed with the static semantics. These are only currently valued on class constructors and methods.
As far as potential semantics, the goal is to align with the evaluate order and application order already present in the decorators proposal. This is the order that TypeScript uses its experiment decorators version of parameter decorators. And both of these – the TypeScript implementation in the legacy and native support are essentially the same when it comes to ordering. With other decorators, all replied – sorry. It’s always in document order. The expression that is part of each decorator, the ABCDEF would be evaluated in the order they appear on the screen. But how they are applied, the order they are applied is based on the – the specific prescribed order that is not document-order based.
In the case of method parameters, the decorators would be provided before the decorators method. Constructor would be before the class itself. And parameters are applied independently.
As with decorators on individual declarations, it would be in reverse order. It means that if we were to step through the evaluation order of decorators here, we could start by looking at the first parameter in the parameter list, meaning that the first decorator would be applying is the one closest to the parameter declaration.
When that is then applied, we then move on to applying the one that is slightly further back. The earlier in document order in this case. To match the same reverse order, the – that we see with decorators today, once we finish with parameter 1, we might move on to parameter 2. Which means starting with the decorator closest to the parameter declaration. And then moving on to the one that is next. Or that is previous to it in document order.
And then obviously moving on to the ones of the method, which occur in that method order. This order is important because of the fact that when we are applying the decorators, they are applied to the – initial method declaration itself before any other method decorators could potentially replace it, and no longer be valid . . . it wouldn’t match the parameters that are here The next question is whether or not – what kind of things might you be able to do. TypeScript has limitations with its parameter decorators, which are not terrible limitations. You can still do interesting things as I have shown with the decorator constructor parameter injection and even with rep parameters. That could be achieved today with something like the access to context metadata. Access to at least the ordinary index of the parameter. That would essentially allow you to emulate what the parameter decorates in the leg say are able to do. There’s other things that are interesting in here that we could potentially do So I will – this is an overview but go into detail of what these are in the upcoming slides Like any decorator, it has the same API. Accept a target and a context. Parameters, like fields, don't have a representation. Not one that exists at the time of the declaration. Thus, the expectation would be that parameter decorators like fields received undefined as the target because there’s nothing to wrap or replace here.
As far as the second parameter context, we would again need some type of way to differentiate from others. We are using “parameter” as the name here.
At the least, we expect an ordinal index because that’s the only thing guaranteed at the time that it’s applied. You can’t get to a parameter’s name, in type text decorators because you only have access to function Proto-type string 2 to see that. Names are optional because binding patterns don’t have names to refer to. But having a name, even if it is optional, is useful in these cases. With parameter binding for HTML routes is that not having to repeat the name of the parameter is extremely useful, as with the example to database fields in ORMs One thing that TypeScript doesn’t have, and you can’t do today with the parameter decorators is annotate rest limitations . . . to know – it’s useful for cases where there’s an array, but do you know if it’s an array as multiple or single arrays.
Another possibility we could have something like add initializing, adding static and extra that apply to the class, but not the function body. It’s important because these are all things that are declared and aligned with all decorators are defined with methods and fields and declarations themselves Another thing that is important and ties into the decorator metadata proposal is that one of the two key things that parameter decorators are useful for is associating metadata about that parameter. This is necessary for the DI constructor parameter injection case. It’s extremely – it’s necessary for most FFI cases. It’s extremely necessary I for HTTP route parameter binding Another thing this is looking into the ability to look at the function that the parameter is on. When you look at something like a field or method, you are attached to the class as well. You get context whether the method is static or nonstatic, AKA, instant or Proto-type. This is important when defining metadata on the objects, you need to differentiate what things you are describing. If you have two decorators on two fields or on two parameters, you need to be able to and want to differentiate, then you need to create an object graph within the piece of metadata to differentiate between what field was this attached to, what method was this attached to and in the case of the parameters, what was the parameter that this was attached to at the time.
Here, we have chosen to use the name function as opposed to method or something else to maintain a consistent API. And allow us in the future support parameter decorators on function decorators.
One thing that is really interesting with this design and with the design of decorators in Stage 3 is that there is this potential capability that we don’t really have or didn’t build into the legacy decorator support in TypeScript. These are very limited today. They can only be used to collect metadata.
they are only observational. It’s not designed to return a function that replaces the function that was attached to. We didn’t want a parameter to have the type of capability. It was too complex and cause problems with decorators that are replied by other parameters.
The field decorators in the stage 3 decorators proposal showed us there is room for potential investigation to like what could we do if we intercept binding of an argument to a parameter. There is the possibility that we could allow a decorator to have this type of capability, assuming it’s the performance characterring are viable, but do things like have parameter validation, the required – at required decorator might be able to say, hey. Here is the value coming in. Defined or undefined. Throw an exception. So this doesn’t have – you don’t have to have some other mechanism attached to that method to do that kind of work to read metadata to intercept these. You could do these in line. FFIs, MarshalingAsString and do you need the string to come in as length prefix or null terminated. How does that work [stbh] having a decorators how the behavior should work so that the end-user can just accept the string and not have to really worry about it.

RBN: So what we are looking for with stage 1 is just to investigate the syntax and API design. Try to gather feedback from implementers about the performance concerns. Related to intercepting bindings. Try to again determine is this viable? Are there changes to make this work? Is this the direction we want to go down or find other approaches?
One thing that I do want to point out, this proposal is not bringing in scope function decorators. There is something we do plan to bring to committee in the future. This is something that was problem – I shouldn’t say a problem. Was a sticking point for decorators for many years as the proposal progressed because it was really hard to nail down what the semantics should be for a function decoration declaration that is decorated. Because of hoisting and circular imports and other things, it was the reason it was cut from the current decorators proposal at Stage 3. For the time being, we’re keeping function declaration decorators out of scope, which means function parameter decorators are out of scope as well as out of scope for this proposal are object literal they had decoraters.
We want to make sure this design is forward-thinking.
So I have gone through a lot of this. I want to go to the queue, start talking about things. I think it’s kind of interesting to – bring these in and again there’s thousands of examples of this in the TypeScript ecosystem. This has been a capability that we provided with our legacy decorator support that has had some option and has been extremely value and I would like to see that value and those capabilities come to JavaScript as a native decorator support.

CDA: Okay. We have under 15 minutes left. And a number of items on the queue. Let’s jump in.

MM: Yeah. This looks expressive enough that you could use this to express the special case of extractors for extracting from the argument to the parameter. And if the parameter is a deconstructing pattern you get the functionality of a record bound to the elements of the destructuring pattern

RBN: That’s not quite accurate. Only at parameters and top level. One of the advantages of the proposal is that it’s essentially an extension to the destructuring pattern. You can put it deeper than just the top level of a parameter. So there is a little bit of overlap with the capabilities at the highest level, only parameters as it comes in. Parameter decorators, they give you the ability to have – to attach static metadata and observe that outside of that function, but they don’t give you the depth into intercepting destructuring like extractors or any other pattern matching extension light. Extractors, ordinary, in the mid-of the parameter. They are evaluated at run time. You can’t observe this information that they attach without doing function Proto-type 2 string type. You can place them within the destructuring. But they don’t give you the ability to the static analysis outside of the function other even run time analysis of information that was attached statically. So again, they touch a little bit at the very high level, but as far as the specific use cases, they are different.

MM: Okay.

KG: Yeah. The first thing is most of these use cases don’t have anything to do with classes. Validating parameters does not have anything with classes. Routing does not have anything with classes. DI? Maybe a little bit. But most of the cases don’t have anything to do with classes. In terms of problems to solve, most of the things that you talked about are not specific to classes. I should say more explicitly. I don’t want to see a world in which we have people start using classes just so that they can have methods that have parameter decorators on them. I am opposed to reaching that state. So -

RBN: Let me – I will address those points. One of the reasons this proposal is scoped as it is, is again that sticking point on function declaration decorators. That is something we haven’t solved and/or a solution has bent brought to committee. I am trying to leverage this new – interest in switching to negative decorators to bring more of the ecosystem over. And while there will be time it will take to this [THET] proposal advanced through the staging process, I don’t – decorators as it is was delayed for a while because of the function declaration sticking point.
As I said, everything that I am doing in here is with a forward-thought to what . . . it’s designed to take those in mind. However, I have scoped this specifically to class constructers and class methods for several reason. One we have limited the scope of decorators currently at Stage 3 to only on classes. They are not supportive the object literal method, and the in TypeScript is son-in-law for class constructers and methods. What is interesting about this, however, is that I really – I have gone through and done a bunch of different source graph searches, thousands and thousands of cases. No cases of someone just using a class static methods to clear something that using that to make it useful. I am building this off real-world examples and built over the past 8 years. There has ban lot of adoption within the community. This has a lot of benefits even with the narrow scope that it has, there is that – the eye towards what this looks like with functions? We could not support – not currently support decorators on a parameter without supporting them on a declaration because they are statically evaluated at definition time. Which has the same issue. So I am looking at it – trying to advance this as focussed specifically on class constructers and methods. The parameters of those. Again with eye so we don’t have the blocking concerns. But when those – when a solution for those is presented and makes it through, we will easily intend that over to that

KG: I understand the reasons that function declaration – well, I understand some of the reasons at least that function declarations don’t have parameters. But – sorry. Function declarations don’t have decorators in part because of the hoisting complexity. There’s another reason, which is that they are less obviously a good idea. However none of that is relevant to the fact that most of these use cases do not – are not particularly about classes. While I get that you want to restrict the scope to narrow thing and advance it and later add function parameters, that assumes we are definitely doing function parameter decorators. And I think that is far from a foregone conclusion. I should say this is not a stage 1 blocker. But I am not okay with advancing to stage 2 with only class methods having parameter decorators. I just really don’t think we should be in that state. If we’re solving the problems that you are laying out, we are not solving them just for class methods; we are solving for functions in general. We can’t just do 50% of parameter decorators. We just can’t.

RBN: My only again – comment to that is that I think we were in the same boat with decorators. And I think function decorators are valuable. My first experience with TC39, I was invited by Luke what was the PM and he brought me to present the decorators proposal and this was back in like I think late 2012, early 2013. I would have to look at the email thread for that And these were all things we considered. We went threw years of discussions with the angular team and part of that design was function decorators. It’s been hoisting and issues around hoisting and potentially factors getting in the way if you add a decorator. That stymied the entire proposal for a while.
I will get back to it here . . .
I plan to take all of these things into account with design. The design for this should – and we end up adopting function decorators, whatever that takes, this should work with that and I wouldn’t see again, I agree I don’t see this is advances to stage 2 if we make it so that these would never work with function decorators. I do however want to avoid these same type of issue where this just can’t advance because we can’t figure out function decorators. There’s too much values in the capabilities and that’s shown in the ecosystem that these are worth having, even if it’s limited space. We need to design to support this, but I would be concerned about blocking this purely on the we haven’t figured out function decorators yet so we shouldn’t take this.

KG: That is still my position.

KG: I did have the next thing on the queue as well.

KG: The previous thing was concerns about advancing class method parameter decorators outside of parameter decorators more generally. I have a very strong objection to advancing class method parameter decorators without having function parameter decorates. Stage 1, yes. Not stage 2. I wouldn’t be okay without function parameter decorators. I understand the difficulties but I don’t think we can solve this halfway.

KG: So that was a specific concern about the current shape. But more generally, I just don’t think that this makes sense in JavaScript. I appreciate there are lots of TypeScript users that like it, but we don’t need to add every syntax that everyone has liked. Yes, if it existed people would use it. It exists in TypeScript so people use it. But I am sure you are aware that people are validating arguments without using decorators. It’s more concise, but it’s generally worse for readers in most cases. The brevity is just not worth the cost in terms of language complexity and additional difficulty for readers. I will not stand in the way of this advancing to stage 1 by myself. But I don’t think it’s a good idea.

DE: So I want to first say, I really appreciate the time that RBN put into this. It’s great after having huge amounts of endurance you’re endurance through the ten-year span, but to evolve the language despite the huge difficulty of that, the decorator transition for . . . it’s going to be allowed and I hope that we can continue this pattern of having the run time parts of the language be, you know, decided at TC39 . . . I hope that we can continue evolving the language such that, as said in the chat, we can eventually fill in the gaps that people are doing with tolls and widely adopted which we thing are good and find verses of that. We have judgment, make judgment calls about what things are good.
I do agree with KG that we should be considering a broader scope of the interaction with things like function decorators, function parameter decorators. And as well as extractors/pattern matching. This might be a good time to use a fixed style approach as we have been doing for class proposals, where we have, you know, five or more class proposals, currently under development and have a meeting every two weeks and talk about how they interact. There’s a reasonable question how we want to prioritize the multiple proposals in this space. Personally, I am excited by extractors and about function decorators. And pattern matching.
I do think it’s important that we eventually do something in this space. There’s also a little bit of a difference in terms of the ecosystem adoption of this. So the other features of decorators class, field, and method decorators were in both babble and type transcript. But parameter decorators were not in Babel. And they were just in TypeScript.
So that doesn’t mean this is not valid and important, but the other part at stage 3 was filling in the – cross-implementation, making it kind of even higher priority eco-system-wise. Not to minimize this. But also, some uses of these decorators like some uses of other decorators depending on run-time emit, which is not part of this. And I guess I would like to understand that a little bit better. How that relates to the adoption, upgrade story. If we want to say no to this proposal, we should say no. That would help TypeScript say, you would have to use the experimental decorators. You couldn’t upgrade to standard decorators and still have parameter decorators. If we didn’t clearly say no, they might say, TypeScript this will be a language extension to work with that. If we leave this proposal in limbo for five years, I think that would be bad for the ecosystem. And make it more difficult for the adoption of standard decorators, possibility plus extension was parameters which are not misaligned with the TC39 decorators. This is an important part of the equation to consider.

DE: I don’t – DRR or RBN, you disagree with any of that?

DRR: If I can quickly respond. I would like to further discuss, obviously we don’t to be in the state for five years, but I would rather have those quick conversations at stage 1 than have them right now . . .

DE: No. No. I don’t think we are in a position to say no right now

DRR: Sure

DE: But . . . I would like people who have strong concerns to think about whether this is a going to be really a fatal concern. How we determine that?

CDA: We are over time. But . . . I think we can use the last few minutes here to maybe hopefully get through the last items in the queue, if that’s all right.

RBN: I want to respond to DE if we could and a response to KG as well. I fully intend to bring a proposal for function declaration decorators and object decorators most likely this year. This is something I’ve been discussing with KHG and others over time. However, because of the existing TypeScript eco system and the potential – migrating everybody to native decorators I wanted to get out here first to have these discussions first. Regardless of what state function declaration decorators end up being. I plan to have those as part of the discussion. Talking about class and method, this is higher than bringing them themselves.

DE: Yeah. I think that’s reasonable. But I also think we can see that we will have to have the bigger picture together. Before we can advance these things beyond Stage 1.

RBN: That’s fine all right.

SYG: Yeah. I want to give RBN some direct feedback on the implementation stuff.
So first personally, I agree with KG on the readability, it will harm readability. But that’s my personal feelings here. I will not certainly not block Stage 1. I think my general sense on things that I disagree with on a feeling level in terms of readability and code organization and stuff, if there is demand and I think the TypeScript ecosystem has shown demand, if there is a demand, who am I to stop people typing what they want to type. Where implementation runs against that, if there is significant performance concerns for the user? Not the developers. The developers want to type the thing, because they want it. But if that has negative downstream consequences on the broad pot of web users then it’s a problem we care about, particularly for decorators. The whole style of metaprogramming and the runtime having to support it, there’s a lot of mines there about performance, which is why V8 gave strong feedback that caused the decorates in the state they are.
So I think when you think about this space, the advice is V8 will be be evaluating it through the lens of understand that things that look declarative ought to perform declaratively. That’s the lens which we will evaluate things. If it starts to feel declarative, hide so much magic and performance overhead underneath it, we won’t agree with it.

RBN: That’s fair. I have interesting thought abouts decorator, the ability to like bind things and performance that might be interesting. But I won’t go into detail right now. It’s something we can talk about off line or on the proposal repo.

DRR: I want to say, there have been comments on the taste of this that we presented. A lot comes with the context of years of building the application and ripping out and presenting it as-is to show motivation use case. Over time, we could present the use case with less pressure, to get some understanding and that’s all I wanted to put out there. So keep that in mind.

JHX: Okay. I am not sure how parameter decorator . . . in my opinion, any of the strong leader could have cost. But if something is difficult, it’s because of the structure is bad or just wrong. Not because the feature itself is necessarily bad.
Okay.

CDA: Okay. We are past time slightly. RBN, did you want to ask for Stage 1

RBN: Yes. At this point, I would like to ask if we have support for Stage 1?

JHD: I’m sorry. I am not on the queue. Can we – the title is class method parameter decorators. Could you phrase that as a problem to be solved?

DE: I don’t think proposals at Stage 1 have titles, problems to be solved.

JHD: It’s been asked for a number of times in the past since that’s what that stage represents. I am not necessarily asking you to retitle the proposal, but as was commented a lot of tiles, there were goals. If we are coming at this, we want this syntax feature and here are all the use cases . . . that is putting the cart before the horse.

SYG: Stating the goals and the problem is different than what the title is.

JHD: Sure. Forget the title. What is the problem statement?

RBN: Essentially, there were two: one is that we are trying to – like to enable some more flexible metaprogramming capabilities at that allow the motivations I listed. Request for routing . . . these are hard to do today. I think I showed in the example of FFIs, that’s the current FFI APIs, the eyeballing and disconnect. These are hard to do especially with class methods, which have the same methods with method decorators. We don’t have that ability during definition time to kind of inject and intercept and make these changes and do this type of recording These are things that are really hard to do right or become more complicated because of that eyeballing that you have to do. I mean, you could emulate parameter decorators using normal method decorates, which is how they worked forever, it’s a wrapper around what the parameter decorator had beenings like. But you have to eyeball what is the index. If I refactor and move a parameter around, I am having to figure outer what is the index has changed to, this is complicated if you want these benefits. So we like to make this a lot easier. So this is a feature to make these capabilities easier. The other problem statement is, we have a large community of the TypeScript that we like to migrate to native decorators and hoping . . . and not to rewrite the code to switch to the native code. We understand that there’s a likelihood that if this does make it past stage 1 or make it to stage 1 and beyond, there might be changes that result in limitations. The same thing happened with – kind of happened with field decorators and the same – and the need to have like the accessory key word and the limitation now that we don’t have the ability to have the paired or tangled get set. We are shown there is a broad community involved – or interested in this, used this and like to bring that capability here.
Again we are trying to solve an issue around improving the developer experience and have evidence backed by years of users showing this is a great way to do that.

JHD: Thank you.

CDA: We are way past time. Asking for consensus. You have explicit support from MAH, DE and JHX.

RBN: Do we have anyone objecting to stage 1?

KG: I don’t object to stage 1. But you heard my thoughts on advancing in the current form to stage 2.

CDA: Okay. You have stage 1. Thank you.

RBN: Thank you very much.

### Speaker's Summary of Key Points

- Parameter Decorators part of initial draft of decorators proposal, under consideration outside of plenary since 2013.
- Have existed as part of TypeScript’s ‘--experimentalDecorators’ for 8 years.
- Broad adoption within TypeScript community (Angular, NestJS, InversifyJS, LoopBack 4, and others).
- Enables decorator metaprogramming targeting parameters to assist with hard-to-achieve operations today (FFI type marshaling, DI constructor injection, HTTP route parameter binding). Alternative approaches require divorcing parameter-specific meta information from the parameter itself, which can be a maintenance headache (see `ffi.Callback` example in slides).
- Makes some operations more capable, such as moving asserts out of the method body and onto the parameters, allowing that information to be used outside of the method (such as binding a method and its parameters to HTML form validation).

### Conclusion

- Stage 1
- Explicit support from MAH, DE, JHX
- Important to consider Function Decorators before this can advance to Stage 2.

## Import reflection discussion continuation

Presenter: Mark Miller (MM)

- [proposal](https://github.com/tc39/proposal-import-reflection)
- no slides

MM: So I think I did express the issue there in the – in the next presentation, which is – but it does apply for to this one, which is that there is a whole bunch of related issues – you know, proposals related to modules that are not organize [thol]nal, coupled to each other, and feed to be considered as a organic whole to maintain the coherence of language.
So I would like to hold anything back from Stage 3 until we can coordinate across the set of module proposals.
Because otherwise, once something goes to stage 3 without that, then we might have painted ourselves no a corner.

GB: It’s important to try and define what we mean by coordination here. Since there has been a tremendous amount of coordination in the modules group meeting every two weeks, that’s 1 ½ hour meeting we have between all the module specs to ensure we are maintaining this alignment for specs. We have to be careful about holding anything back because otherwise, it will be very difficult for anything to progress, if we can always make this argument. So I wonder how we strike a balance there to make sure we’re continuing to build the foundations

MM: First of all, we admit that I might be underestimating the degree of coordination there is, because I have not been attending these meetings, I waived this consideration during Nicolò’s presentation, I know how well he understands the overall considerations of modules. And I understand you do to from what I have heard from other conversations.
But I am certainly not oriented enough right now, as to how import reflection relates to the overall set of module concerns to. I mean, you’re not proposing it for Stage 3 right now. That’s correct, right?

NRB: That is correct

MM: This doesn’t immediately come up, but I have a bunch of open questions but how it relates to some of the other modules that are fuzzy right now so we can take them offline. But I do want to just express concern that there is that coordination and it’s much like what we face in the early days of classes. It was very important to figure out how to break it up and have pieces go forward such that we weren’t painting ourselves into a corner

GB: Yes. If we can come up with a plan to work through those concerns that’s great so we don’t end up in a situation where there’s surprises when we seek a Stage 3. Would it help to bring some of these questions to the SES meeting and more important discussion into that context?

RPR: Then maybe MM could be invited to the module meetings.

DE: There’s an open invitation if you want to join. It’s the same time as the SES meetings on Tuesdays.

MM: Yeah. Attending more meetings is not something that is necessarily easy for me to do at all at this point. But I very much appreciate that it has been raised at the SES meetings. What I saw in your presentation was quite different – and by the way, in ways that I have very much attracted to. I really liked the orthogonalality, in terms of the five phases and how you could have a reflection into each of the five phases. I thought that was really beautiful and elegant. But it was different than anything we discussed in the SES meetings

GB: We can certainly come to the SES meetings and explain this to and express what the layering is for the proposals

MM: Okay. The other thing – let me just say – it’s not fair as a consideration to hold things but, but practically is a consideration for me – as you know, Chris Colal [?] has been on paternity leave, which is going to extend through April 27, is the day he’s back from paternity leave. And I have been crippled to understand the overall, you know, the overall ecosystem of the modules epic in the absence of Chris.

NRO: [inaudible] bringing forwards the learnings [inaudible] the SES meeting.

MM: Yeah. That all sounds good.

RPR: SYG, o you want to go with your question on the queue?

SYG: What was my question on the queue? I see a screenshot. Yes. Yeah. I guess that wasn’t answered by Mark’s question. Just mechanically, what – like, this has to be a stand alone proposal still. So what is the layering?

NRO: Mechanically, the layeringis that there’s no dependencies. This can land as is by itself.

RPR: Good enough for me. DE is not in the room. If we move . . . back to SFC. Is SFC in the queue?

SFC: I added this two days ago. I wanted to say that I like the way of expressing the five phases of module loading. This is the most clear of the various module loading proposals and I just like the direction this is going. I think it’s very clear.

DE: Yeah. At first, when import reflection was being discussed, I was pushing for import reflection to be part of the thing to go with the import attributes. Part of that might have been nervously trying to build the case for import attributes which we now agreed on collectively. Part was an argument that we also made that we should not have too much blowup in the syntax space used by import statement. The explanation that at what phase modifiers are was very persuasive to me. Put something in this as the syntax and the specific semantics of saying which phase we’re talking about. And the different feature that is are each independently motivated turn out to fit with the phase scream [?].

DE: So at this point, I am convinced that this is a reasonable way to evolve the import grammar without becoming kind of too complicated. And with having a reasonable kind of separation of concepts.

LCA: Okay. That’s it for the queue. Is there anything else? Then I would once again like to ask for the stage 3 for review. NRO, Chris and DE. I am not sure DE will make the review for the [inaudible] we would very much appreciate it to ask for advancement.

MM: The next meeting is at the end of May. Correct?

[various]: Yes. Yes. Mid-May.

MM: Let me say, I like the overall direction. A very positive one. I want to make sure it’s all coordinated well.

LCA: Thank you.

### Speaker's Summary of Key Points

- We talked about how, going forwards, module reflection can be coordinated with the other proposals related to modules.

### Conclusion

- Plan is for import reflection to come back in the next meeting in May to ask for Stage 3.

## Async Explicit Resource Management again

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-async-explicit-resource-management)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkodu1RydtKh2ZVafxA?e=yasS3Y)

RBN: I am going to bring up where we left off. This slides I am about to show are this is the same slide running as before. I have added some slides for additional discussion. Let me just get those shared. This is the slide we left off on. And I am going to go into a little discussion here. The consensus we had on it was Tuesday, to move toward with the syntax. I did an investigation into this. I put up PR’s I mentioned. I’ve had – I think at least SYG looked at it and talked it through with him in Matrix yesterday. But to give kind of an example of what we are looking at, to introduce a cover grammar for `await using`, it might look I will show on zero in on the slides. This is off the use of cover grammar for specifically the cover parenthesis expression and cover parenthesized expression and parameter list and the cover expression and async arrow head. Essentially, what we produce here is rather than an await expression. We produce a cover grammar that covers the same thing that await expression covers.

RBN: But then it wouldn’t be bind until the later point, when static semantics are applied Again this is just could be covering await unary expression, identity [?] to a wait expression. Where this matters as you bubble up out of to assignment expressions to expression statements, you cannot have an identifier name follow an expression on the same line. That is invalid. Today it triggers – it wouldn’t trigger ASI [?]. It’s on the same line. And then specifically, what want to opt into for await using, so in that case we would have an `await using` declaration. And this has again – this cover await expression and a wait using declaration head, cover grammar, this matches now the case where expression now fails because you cannot have something following this in the expression case.
Here, we would say though a no line terminator works and then parse a binding list that does not include patterns. The specific parse parameter - production parameter shown here is relatively new. I just merged it into the research management case because of an editor comment about using the parameter in two different ways. This is more consistent. I am presenting this here as well. We successfully parse this and if semantics . . . and verify this is a valid cover for await, new line term later, slots into the space we had before.
Now, the implications of this are that again cover await expression using deliciousing [?] head will eagerly consume what would be the content of the await expression. And then again, followed by identifier name and illegal . . .

RBN: So a number of example cases for this . . . if you have await X today. This is the cover weight expression. And then later refine to await expression because it’s a involved expression.

RBN: If you have await using on its own., this is just an await expression. using is not reserved. It’s an identifier in this case. If you had await using, followed by a new line and X = Y these are two separate expression statements, because of ASI. We would inject – this would fail to parse in both cases and I will show that more in the next slide. But when the expression case, it failed parse the next is identifier, but because of the failed, we reparse, as if we inserted a semicolon, and we end of the line.

RBN: The reason this fails the case of the await using declaration is that await using declaration requires the binding list on the same line as the keyword. This wouldn’t match this await using X, again we would cover the parse await using as the cover grammar. We successfully parse the using declaration however we have an early error for lexical bindings not having an initializer when it’s constant. This would result in a syntax error during the early error static semantics. And the other case: If you have await followed by a new line, using X = Y, this would fail to parse in both cases. Because await using, normally parse a wait expression will fail at the expression level because you have again an identifier on the same line. And would fail to parse await using declaration because again you have a new line in between. So this would not be an await for nothing. That’s not valid in JavaScript. This is X = Y, will fail to parse as an expression, but will back up until we reach the level we are parsing expression statements, but we have consumed these token as – and successfully parse it using await using declaration.

RBN: One of the other things that we looked into – I don’t have this in the slides, but I investigated async using as a grammar. It has the same level of complexity, except there’s one small benefit at least to the await using grammar in that in both the case of await expression and await using declaration there’s a plus await context. It’s fairly easy to restrict these and those cases. In the case of the `async using` expression case for an async using X = Y type declaration is in + await, but the async using, an arrow function head is not necessarily parsed. So there’s a little bit of discrepancy there

RBN: On the parser complexity side, I did implement this in TypeScript 3 weeks ago. But I was trying to it each of the possible cases. TypeScript is not necessarily LR1, most of the parse is but we have a couple cases of infinite look-ahead how we deal with – generics and arrow functions. But we primarily stick to LR1 and 2. We might max out at 3 token look ahead in case that is are not specifically handling arrow functions. In TypeScript this requires to disambiguiate to look ahead. If we saw the await token in a statement context, which could allow expression statement, if we saw the next token using with no line terminator in between and the next is an identifier with no line terminator in between, it’s definitely not an await using and only using deliciousing [?] and parse as such If parsing complexity for a parser that permits two token look ahead, it would perform such look ahead to make this simple.

RBN: So . . . again I talked about this with SYG. I haven’t had really feedback from anyone else about the cover grammar. So I am not sure if there are any issues with the grammar. I think this is feasible and I would like the chance to go to the queue, see if anyone has feedback or concerns and potentially see if this is enough to advance to stage 3.

WH: I am curious why you have the restriction against `using` followed by `await`.

RBN: Part of it is copy paste. And trying to maintain similarity or consistency. Another part of it is, if this advances to stage 3 and once we have merged them, I plan to come back and this request to remove that, to avoid complexity using await orderings. Now it’s kind of just sitting there. But I wanted to keep the restrictions with using for the time being.

WH: Yes. So I looked at it some yesterday, it was the only change that I request: get rid of that restriction. Still thinking through all the cases. Examples are `await` can be used as an identifier in -await cases, except that it can sometimes also be used as an identifier in +await cases. And haven’t thought through all the possibilities yet.

RBN: One of the reasons – I agree we don’t really need the look ahead restriction. An expression and await using declaration are only in + await case. So you wouldn’t use that as a identifier of those cases.

WH: The BindingIdentifier grammar allows use of `await` it as an identifier in +await cases. It’s counterintuitive.

RBN: That would be interesting because I did not – I thought that was specifically restricted to prevent that from happening.

WH: It is doing it. There is a note that explains why.

RBN: And the other thing is that await in this case, the look ahead restriction only would have affected the next identifier in the binding list, not all.

WH: Yes. There is a static semantic there. I am still working through cases such as `await of` and `await using`… I need to convince myself this will work. I just need to think about this more.

RBN: One of the cases in using declarations if you in a for of because using is not a reserved identifier, or reserved keyword, if you had 4 open parenthesis using of – is this a using declaration named of that you are binding into the result of whatever is on the right? Or are you binding an identifier named using of, a thing named of and that’s less – I think we might still have – the same restriction. You have entered a two key word case that takes you out of the this has to be await using. Yeah. Await X of isn’t valid because X has to be a left-hand side expression. And await is unary. So it’s wrong for that to work. We don’t need of restriction for the for declaration case.

WH: Yeah. No red flags, but I haven’t convinced myself fully that it works yet. I just need more time.

DE: The cases for you presented in your slides, dealing with new lines, that looks great. Also, making the normative change to allow using await in non-+ await context seems fine. Also, fine if we didn’t do that It’s pretty hard to read the cover grammar. Like, I think it looks right. Have the editors thought about moving away from cover grammars to some other way of, you know, notating this stuff?

KG: No.

DE: Okay.

KG: I mean, it might be a good idea, but we haven’t thought about it.

SYG: So happy to defer to WH on a closer reading of the grammar. Talking with RBN, I am convinced this is just like easily implementable in handwritten with recursive descent with limited look ahead . . . and I guess also TypeScript is of course that way. And that’s the thing I was really after and I am convinced of that. So happy with Stage 3

RPR: Yes. That’s the end of the queue.

RBN: So knowing that – the conditions for this are a bit interesting. So the proposal’s at Stage 2. In the January meeting, the sentiment and the consensus was to achieve Stage 3 in March. The terminology that was used was “no later than” . . . considering these, but that it is true that the – specific cover grammar was not provided in advance of this meeting. So if someone does have concerns and would like to block consensus, that is a potential option. But I would like to at this point ask if the condition for using await and satisfactorily – is satisfied to the committee’s – satisfactory to the committee. Is there possibility we could advance to Stage 3 with the syntax

RPR: Are you asking for Stage 3

RBN: Yes, I am

WH: I will support, unless I find problems in the grammar in the next few days.

RBN: From my investigations, it’s 100% feasible. It’s whether or not the cover grammar I provided matches with what is needed to make this work. I have put a bunch of different cases, not just the ones I have shown, on the slides here to verify that a cover would be successful for this. So I think it’s definitely something that we will be able to solve, even it requires amendments to the cover grammar.

RBN: So I think given that condition from Waldemar and a couple in the queue as well . . .

RPR: Yeah. + 1 from DE, MM, and CDA. So I am only hearing support and WH has got his conditional review. But it sounds like people are confident.

RBN: To clarify, any observation given the specifics around the cover grammar not be available in general

WH: Can I ask you to remove the restriction against `using await`?

RBN: Do you mean against lookahead of `await`?

WH: Yeah. Just delete the look-ahead restriction

RBN: It’s definitely not needed in the await using case or shouldn’t be using that because we already validate after the fact. So I don’t think that that would be a normative change but on the offchance it is, if we have Stage 3, even conditionally, I will ask for consensus on zero that change, if anything.

WH: Okay.

DLM: + 1, the conditional advancement based on WH’s review

DE: It was sort of suggested in that exchange that we maybe ask for consensus allowing for-await using await in an await context and I would explicitly support that. Even as much as it’s weird and ugly. Are we calling for consensus on that or considering that for future

RBN: One is moving the look ahead restriction I put in this slides for the async await using declaration. Since it’s not really necessary. It’s more of an editorial question. And removing the await syntax. I would ask for consensus removing that restriction, it’s undone restrictions giving the change to syntax

DE: The first is an editorial fix.

RBN: I can concur with that

DE: Good it hear if anybody has concerns. Now we’re switching from using await to await using, there’s no reason if you’re not inside of the function to prohibit using await to do – clean up something called await. What do people think?

RPR: SYG + 1.

RBN: Any objections to that change

RPR: Nothing from the room? No objections on the queue.

RBN: It sounds like we have conditional advancement assuming, based on WH’s review, then.

RPR: I agree.

RBN: The one last that I wanted to bring up is again to – as a reminder when we reach consensus on the condition in January, one of the things that we also had consensus was was the async and sync versions of the proposal will merge down to one for the course of Stage 3 to Stage 4 in part to make my life easier when it comes to specification changes. Since they would be – maintaining them in parallel and writing testing. To clarify, this was a prior consensus once it reached Stage 3. And I wanted to remind the committee, I will do this once this final condition is met

WH: This will make everyone else’s life easier too.

### Speaker's Summary of Key Points

- Consensus on day 1 to use `await using` keyword ordering given a working cover grammar.
- Cover grammar provided via https://tc39.es/proposal-async-explicit-resource-management/pr/15/
- Parser complexity only requires two-token lookahead in engines that are not strictly LR(1).

### Conclusion

- Stage 3, conditionally on final review of cover grammar by WH
- Consensus on normative change to remove `[lookahead !=`await`]` restriction for sync `using` declarations.
- Support from WH, SYG, DLM, MM, DE
- We already have WH and SYG and MF has been the reviewers back in Stage 2

## Incubator Call

RPR: SYG, did you want to do anything with the incubator call?

SYG: No. I really would like to get these started again, but I haven’t been successful in galvanizing other folks from running those and I have not had time myself.

## Non-violent communication course (NVC)

RPR: This was not on the agenda because I forgot. We have budgets that we had reserved from ECMA for the nonviolent communication course (NVC). There were requests from ExeCom. We haven’t done all the items that were asked from that. As it stands, at the next ExeCom meeting happening in three weeks time, we are planning to withdraw our funding request, unless someone valiant wants to step up and really do the work for arranging that.

DE: The work of arranging it means putting an item on the agenda for this meeting and getting two-thirds support of the committee for continuing it after having presented the syllabus. So Chris actually found the syllabus in more detail. But none of us had the energy to put it on the agenda and argue it through the committee. Yeah. Do you have any thoughts

CDA: Yeah. That wasn’t the significant burden. We didn’t have a chance to meet again as a group (inclusion group) prior to plenary to discuss this, but the ask was beyond that. It was, first of all, that we raised in plenary the types of issues that led to needing the training. I did go back and forth on whether to add this as an agenda item. But I was concerned that could manifest as airing grievances and really didn’t want finger pointing or anything like that.

CDA: So I think that it’s still worthwhile to pursue, but I think that if we renew that effort, we should try and predicate it on something a little less focused on combativeness and acrimony and really frame it as something more positive. So . . . does that make sense?

DE: Yeah. This seems like meaningful immediate feedback that we can bring to Execom while withdrawing the request for now, based on the previously-agreed on deadline.

CDA: Yeah. It was – here is the verbatim: “A discussion be held among TC39 membership during a regularly session plenary session to surface the types of instances and issues that have encouraged newcomers to stop attending as well as other communication issues that led to the request for this NVC training and it should . . . during the training along with the proposed training schedule. Discussion should seek consensus that the training is appropriate and expected to address the improper communication techniques and concerns that initiated the training request.”

CDA: It goes on. But . . . I just felt that the initial ask to surface the types of instances and issues that have discouraged new attendees and other communication issues may not have been a fruitful endeavor.

DE: Yeah. It was very important when we were setting up the Code of Conduct in the first place to not have that be oriented around blaming any delegates in particular. And probably work on improving this stuff going forward, we will need to do something going forward. I agree with you, CDA. Thanks for looking into this.

CDA: I will say, I’ve been pleased at how this plenary has gone. I really can’t think of a single issue or problem in this sort of area. So I am very happy at the, you know, collegial atmosphere that we have had for this plenary. I think the last one went well as well, but I wasn’t able to attend much of last plenary.

RPR: We are out of time, but the initial request went in 4 years ago. And I think the – committee has done well since then.

DE: That’s not to say that such a training is not helpful

RPR: Agreed - it could still be helpful.

JHD: Perhaps just less urgent than originally believed.

DE: Sure.

RPR: This is the end of the meeting. Thank you to our meeting host F5!
