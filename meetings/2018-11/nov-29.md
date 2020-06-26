# November 29, 2018 Meeting Notes
-----
Mattijs Hoitink (MHK), Michael Saboff (MLS), Keith Miller (KM), Tadeu Zagallo (TZO), Natalie Silvanovich (NSH), Waldemar Horwat (WH), Daniel Ehrenberg (DE), Jean-Francois Paradis (JFP), Chip Morningstar (CM), Alan Schmitt (AS), Ross Kirsling (RKG), Jordan Harband (JHD), Brian Terlson (BT), Kevin Smith (KS), Eric Faust (EFT), Sathya Gunasekaran (SGN), Till Schneidereit (TST), Lin Clark (LCK), Godfrey Chan (GCN), Kevin Gibbons (KG), Pieter Ouwerkerk (POK), Randy Luecke (RLE), Devin Rousso (DRO), Reefath Rajali (RRI), Adam Klein (AK), Rex Jaeschke (RJE), Mark Miller (MM), Shaheer Shabbir (SSR), Mrelita Tiwari (MTI), Jonathan Dallas (JDS), Brendan Eich (BE), Emily Huynh (EHH), Michael Ficarra (MF), Ilias Tsangaris (IT), Thomas Levy (TLY), Augustus Yuan (AYN), Nathan Hammond (NHD), Sebastian Markbåge (SME), Justin Ridgewell (JRL), Shane Carr (SFC), Dustin Savery (DSY), Frank Yung-Fong Tang (FYT), Mariko Kosaka (MKA), Peter Hoddie (PHE), Patrick Soquet (PST), Felipe Balbontín (FBN), Dave Herman (DH), Shu-yu Guo (SYG), Yehuda Katz (YK), Yulia Startsev (YSV), Sebastian McKenzie (SMK), Aki Rose (AKI), Tab Atkins (TAB), Mathias Bynens (MB), Scott Myers (SMS)

Remote:
Ron Buckton (RBN), Bradley Farias (BFS), Robert Pamely (RPY), Leo Balter (LEO), István Sebestyén (IS), Richard Gibson (RGN), Guy Bedford (GB), Conrad Watts (CWS)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/11.md)


## JSExplain (10am Breakout Session), summary of discussion (AS)

JSExplain (https://github.com/jscert/jsexplain) is step-by-step JavaScript interpreter that displays the source code evaluated, the interpreter, and the state of both. JSExplain now supports proxies, and the goal of the session was to request feedback for features to implement. The following were suggested:
- Annex B 3.3, in particular functions and blocks;
- arrow functions and their scope;
- promises, promise description, including the display of the stack;
- for education, improve the UI to show a frame with the current spec text and the values of bound variables;
- in the future, find a way to link feature descriptions in MDN to a JSExplain example that can be run step by step.


## Private Symbols (10am Breakout)

JRL: I'm proposing a few changes to the Private Symbols proposal presented in July 2018 to address a few of the concerns. The two issues were syntax (people like the private fields `.#` syntax), and transparency in membranes. So, to illustrate the change I want, see:

```
class Example {
  #foo = 1;
  bar() {
    return this.#foo;
  }
}

const obj = Object.create(new Example);
obj.bar()
// => 1
```

JRL: This reuses the same syntax, but does away with weakmap semantics to better mirror public properties. I think the consistency here is more valuable than the branding.

KG: I disagree with this. I shouldn't be able to just create a prototype chain and suddenly get access to the private state.

JRL: This doesn't expose the private state, it just allows it to live on the prototype. I don't see this as much different than extending some base class that has private state. It's pretty much the same. The private state is still encapsulated to the functions that are on the class (or in scope in some way).

KG+JRL and others: discussing extending.

JRL: The other compliant is that private symbols should not pass through the proxy. In order to maintain membrane semantics, they must throw. So we define private symbols to throw errors without consulting the target and without trapping:

```
const p = new Proxy(new Example, {
  get() {
    // never called
  }
});
p.bar();
// => Error is thrown
```

JRL: Since we're using private symbols now, this also logically extends to allowing installing the symbol onto foreign objects:

```
// Using a class, because there's no way to reify a private symbol yet.
class Ex {
  #foo;
  static get(obj) {
    return obj.#foo;
  }
  static set(obj) {
    obj.#foo = 1;
  }
}

const obj = {};
Ex.get(obj);
// => undefined

Ex.set(obj);
// => #foo set to 1 on obj

Ex.get(obj);
// => 1
```

JRL: This exactly mirrors public properties, but the private property is still encapsulated to the methods defined on the class. While I can install the symbol onto foreign objects, those objects cannot mutate or access the symbol without using my code.

JRL: Further, we can achieve the exact same semantics as the current proposal by using a weakset to guard our code:

```
const brand = new Weakset;
class Branded {
  #foo;
  constructor() {
    brand.add(this);
  }
  bar() {
    if (!brand.has(this)) {
      throw new Error;
    }
    return this.#foo;
  }
}

// Or, extract the checker.
function check(obj) {
  if (!brand.has(this)) {
    throw new Error;
  }
}
```

JRL: This allows more usecases, is more consistent with public properties, and still allows branding without much trouble. I think this is the better option.

KG+MM: This leads to the confused deputy problem, where you cannot reason about the instances you're operating on. If we adding syntax for a security feature, we need to make it secure by default. Making it operate on foreign objects is a no go.

JRL: I'm using syntax here because it was a sticking point in the last meeting. We were going to object without syntax, and now we're objecting with syntax. This doesn't prevent people from securing their code easily by using a weakset.

KG: This also makes it difficult to reason about multiple privates on an instance:

```
class Node {
  #base = 7;
  #val;
  constructor() {
    this.#val = 1;
  }
  bar() {
    this.#val = 2;
  }
  method() {
    return this.#val + this.#base;
  }
}
```

KG: Here, I want to say that if the node has a `#val`, then it has a `#base`. Allowing me to have one without the other on a foreign object is terrible.

JRL: Again, this can be guarded against by doing a weakset check before installing onto foreign objects.

Misc: If you're going to have a syntax and also require a check for usage you can reason about, just put the check in the syntax.

SGN: There an issue with the current class private fields. You can actually install a private field onto a foreign object:

```
class Base {}
class Ex extends Base {
  #foo = 1;
  isExample() {
    return this.#foo === 1;
  }
}
const o = {};
Ex.__proto__ = function() { return o; }
new Ex;
Ex.prototype.isExample.call(o);
// => true
```

SGN: This means that we already have the confused deputy problem with the current semantics.

MM: I think just because we have one issue, doesn't mean we should allow all of the confused deputies in.

All: more discussion about whether confused deputy is really a goal of encapsulation. Or, whether language consistency is more valuable than security.

## Dynamic Modules (11am Breakout Session)

DE: The idea is to follow-up with Guy Bedford's presentation on Tuesday. He is not able to come right now. I've been in contact with him about this proposal and he said OK to meet without me. I'll start by summarizing the proposal again.

DE: The goal is to allow native ES6 modules to be usable in Node.js and to have ES6 modules in Node.js work the same in Node and on the web. So there are lots of details. One proposal is that when ES6 imports a cjs module, then it is ust be one big object. Guy's proposal breaks them out into named exports.

YK: Some people think we should turn cjs module into the default, but ... (fast speaker)

DE: "People" is ambiguous. People want different things. Guy's proposal is based on let's make this a gradual upgrade. I don't want this discussion to be which one to go with. I want this discussion to decide if any of the infrastructure that this proposal needs is acceptable from a TC39 perspective. From there, the embedders can work out the details they want. The main thing is what happens with cycles. My understanding is that cjs will hit the cache with cycles; if you do the require backwards, you get an uninitialized module, and later access to that object will get the properties. Do if you have code that runs at the top level, you might see this artefact.

YK: This comes up when extending classes.

DE: The issue with extending classes happens with both cjs modules and ES6 modules. (says that the error types are different.)  So, the proposal here is, there was a big effort on how he could get a reference error in these cases. And you can in the named import case. But if you import star, you get a namespace object. So Guy looked into what if we made even more conservative checks. Those ended up being too conservative.

YK: So the check is, is the property on this object?

DE: That check turned out to be unimplementable. And if you do a for..in over the namespace, you should get a reference error. And having that expose a reference error was too difficult to implement. There was a different idea for a check. If you have an ES module somewhere, there should be an error, but that was too conservative and too difficult to debug.

YK: And that's the status quo that we agreed to at the time.

DE: Yeah, so that's the status quo. The interesting part is circular references. Guy's current proposal is that you'll see an empty object. My feeling is, this all makes perfect sense. It seems like YK and Dave were interested in edge cases.

YK: I think the reason I don't like it is philosophical. I've become more convinced they're not so bad. The first is import * is guaranteed to have a fixed shape  The list of keys should be the same no matter when you look at it.

DE: That changes with this proposal.

YK: Yeah, so philosophically that could be a problem. The second is there's a correspondence between import* and bare references such that import* and import{} are semantically different.

DE: Bare imports already give more aggressive errors.

DH: Yeah, someone made that point. But someone made the point that namespace objects are first-class objects.

DE: And there also seemed to be this idea that no one is going to want to use import*.

DH: So the concern was roughly of the shape, are there cases where people find that to make code that should work work, they need to move it to the import* syntax to avoid checks?

AK: The answer is no.

YK: The mechanism is that if you write import{}, the linker needs to know right away that the name is there.

DH: If you write import{} with this proposal, it defers the check until it's done executing the module.

AK: You'll know it before you start executing any code in the module. In a corner case, you can have a hoisted function that runs before the module is finished loading. But you get lots of edge cases when you do that.

YK: So the worry is that if people use more curlies, if the check can sometimes run during the cyclic resolution, people see different behavior when using import* and import{}.

AK: That sounds like bad software engineering. Cycles are problematic already.

YK: There's a bag of tricks that you have to learn.

AK: I think I answered that, but what I'm saying is that you're not avoiding any error that you won't get later. It'll just fail in a different way.

YK: In import{}, we defer the check.

AK: Right

YK: So then there's no problem. So when you say inport{}, and you see that module the first time and you're ready to link it,

AK: The whole point of the dynamic modules patch is to let the curlies behave in a way that's relatively nice.

YK: You still won't evaluate the top-level module until you know. You're deferring the linker error.

AK: The actual problem with dynamic modules is not import{}, it's import*.

DE: Is there an example?  This is very abstract.

YK: This was not my concern in the first place. My concern was the first thing.

DH: Remind me the two issues.

YK: One of them is my issue and the other is the correspondence issue. The first issue is, a philosophical issue.

DH: That's different than this question about there being more errors in practice?

YK: Yes.

YK: On the first issue, we are changing an invariant. ((( The invariant is that before, import module namespace, no matter when you look at it, always has the keys, but now you might look at it when it's not complete. )))

DE: So let's talk about the philosophical issue?

YK: Let's finish discussing issue 2. But my opinion is that I think that issue

DH: My opinion is that I think this issue is fine. i think conceptually we're deferring the checks until we have complete information about the graph.

AK: You're dereffing the checks related to that module.

DH: We have a set of linkage that is known statically. And we have a set that is known after cjs modules. And we are deferring static importing rom those deferred executions until after those executions are finished.

AK: I'm not sure about exactly what happens in cycles.

DH: I don't feel fully educated on that. We're deferring the check to some point.

AK: The concern is that in the presence of cycles, what effect does hit shave?

YK: If you have curlies, and you decide to run the check right now, but sometimes you cannot.

DH: I bet you can construct a cycle where there's enough modules where you can go in both directions, where you import{} from one and import{}| in the other.

AK: I suspect that, there's two options. Either you run the check too early, or you run the stuff in tz. So I think that's the way this mostly errors.

YK: But if you do that, then you can have a tdz error that...

AK: No, I think the runs-later part is not a problem. Because I think you have errored due to the linking error.

YK: I think you wanted to make the hoisting function thing an edge case, but it might not be an edge case.

YK: I think if the linkage error happens late, and you start running the program, you can get weird errors.

AK: The problem we've found is, in the presence of cycles, what happens to the top level... is it possible to run the top level of the es module where the cjs module has not yet loaded?

YK: And what is the difference there between import{} and import*?

AK: And there is a whole other question and there are fewer problems there, the other thing being that you have these namespace objects where ...

DE: I'm having trouble following. I'm looking up what the semantics are of the cyclic case.

AK: The thing to do is to design a case that has problematic behavior and then actually run it through the machinery to see what happens.

YK: I'm trying to figure out which abstract layer is the right one.

AK: The thing that's confusing both bme and dan is that there are lots of semantics, but it's not clear what Guy's proposal actually does. The point is not that you shouldn't have more ideas, but that does not move this conversation forward.

DH writes some code on the board.

```
// e0
import { foo } from "c1.js"
import { bar } from "c3.js"

// c1
require("e2.mjs")
exports.foo = ...

// e2
import { bar } from "c3.js"

// c3
require("e0.mjs")
exports.bar = ...
```

DH: I'm trying to demonstrate a cyclic graph in which there are deferred checks imposed across multiple crossings. So we have a type crossing between all four files. I'm trying to demonstrate that you can't partition the graph and run all the cjs first. Because if you could partition the graph, that would be nice, but that's impossible. So therefore, the only options I can see is that either you do some of those deferred checks before you finish execution of cjs, in which case you could get errors for things that could have been there if you waited longer, or you do the checks after everyone has executed.

AK: What happens if you need to start evaluating a module that depends on a cjs module that hasn't executed yet?

DH: What I'm saying is that there's a deferred check that runs later. Because once you run cjs stuff there's no possible way to do the check. So, you either do the checks before you've done some of the executions, or you do it after you've done executions not only of the cjs stuff but also yourself.

AK: There's checks all the time.

YK: Do you do the check after you get the reference?

DH: You want to guarantee that you always do the checks after you evaluate cjs but before you do yourself, but that's not possible. So there are tradeoffs.

AK: We're not going to run the check before we run cjs. So my understanding is that you're able to run...

KS: It's a strange situation where ...

YK: Dan had a question where if you import a bare name from something that's not exported, will you ever get an error?  And Dan said, there's an error later on.

AK: It's now or later for the errors. Now I don't know if that's what Guy's proposal actually does, but that's the intention. So you can't end up in a situation where you have some pulled-out function.

YK: The question is what happens when you get to the bare ref and ...

YK: There are only two things that can happen. Either the cjs module loading hasn't finished yet, or it did finish.

DH: I think this module sounds brilliant. I'm thinking of edge cases. With dynamic modules, you don't even know what the module graph is up front. If what we're saying is that we do the check as soon after we execute the module body, afte more execution happens, more modules come into the graph and add more requirement to the graph.

DE: Dynamic modules can only use require() and they have no dependencies in the graph.

DH: When they run the require, that module may have not been seen before.

NHD: (fill in later)

AK: In DH's cde, (explains something involving c1 exporting foo)

DH: I think, we have basically build a set of interests that we haven't yet been able to check. There is some number of things that we want to get from this module before we know if it's there yet. but in the future if more checks get added, those can be eagerly answered.

NHD: It's not necessarily eager though. They can still get delayed. You can make a function that adds a new export.

All: No, we won't allow that.

DH: I think what Guy's semantics is, if they refer interest, what is that later point?

DE: After the cjs module evaluates. When it says, here's my actual names. That's the point. That's stored in exportNames in spec text. It actually creates new mudable bindings that are uninitialized. It checks those, and if there's something at that point that is uninitialized, it throws reference errors.

YK: If you look at an uninitialized value that will never come, you could get a tdz because it never comes. But I an giving a thumbs-up.

DH: That completely corresponds to current cjs practice today.

YK: It's very close to the csm semantics.

DH: Cycle construction is an inherently problematic thing.

DE: Exporting getters...

DH: The things you verified at some point in time should remain true.

KS: The semantics you currently talk about are possible with the current spec. It's just weird that it doesn't have everything available until later. but what happens with the namespace object in import*?  We can frame the whole thing as what happens with namespace objects.

AK: Are we okay with these cycle semantics?

DE: All those things we discuss, as Kevin is saying, lives on top on the current spec. it's implementable on top of the current spec.

AK: Does it matter if it is possible in the current spec?

DH: In the semantics I want, ...

DE: About star exports, the PR that we were discussing in committee adds a layering change that allows star re-exports. But the problem is that you could get an esm module that is dynamic. The PR allows that to become more dynamic. The es6 module becomes more dynamic in that it supports a call that adds more stuff to it, and you can keep adding stuff until you think you're done.

KS: Currently during the linking phase, ambiguities are resolved.

DE: The ambiguities are...

YK: They could go from non-ambiguous to ambiguous based on cjs modules.

KS: The dynamic module wants to, its namespace object could add entries after it executes, but if we allow export* from that dynamic module, the downstream esm module has to dynamically add things to its namespace object. So that's the part that the poisoning/infection

YK: From a star perspective, that's bad.

DE: Let's stick to the current proposal.

YK: No matter what the semantics are, if I write a program with bunches of cycles, it's going to be bad.

NHD: What is the proposed solution exactly?

KS: The PR to ema262 changes the get namespace operation such that if I'm trying to construct a namespace object for myself, I'm going to pass a list throughout the graph so I can grab all the exports that I need. The PR says that I'm also, in addition to flowing the exports list throughout the graph, i'm going to throw my namespace object, so that people can add things to my namespace object later.

YK: That's a mechanism, but it means that...

KS: The dynamic module has this collection of namespace object that is waiting to add things to it.

DH: (asks question about current 262 semantics)

KS: So, the PR is not exposed to user code, but V8 in its representation of a dynamic module would have a phase...

DH: A deferment mechanism?

KS: Yes.

YS Writes another example on the board:

```
export {foo} from "bar.esm"
export * from "dyn.cjs"

import & as ns from "collection"
```

YSV: Part of the problem is that you're propagating something through the graph

DH: An alternative is that we can disable export* from dynamic modules.

YK: That's a good idea.

KS: If you do that, you do ___

DH: It's a loss of ergonomics, but export* is a convenience anyway.

KS: My hunch is that ___

AK: It seems like the whole idea is to do in cjs modules what you can in es modules.

YK: This is messy in es6 modules already. As a user it's always weird of when I use * anyway.

DH: This seems like a good way to make these changes incrementally.

AK: Has Guy responded to that request?

KS: I'm not sure.

DE: Looking at the bigger picture, for the Node.js group, we should take their concerns into consideration. if we come down from TC39 that we insist that this is an error, ...

DH: It's a diplomatic question. We should treat this as an engagement, but not a declaration.

YK: This original issue is very related to the original error.

DH: There's a problem of cognitive load where cjs and es6 modules are different modules, and by doing export* you can change the type of modules, and that's really confusing.

YK: Basically if I import from somebody and that causes problems, I want to avoid that.

AK: I think most people here are okay with the suggestion

DH: The design of es6 modules is that they can only be mutated from inside the module. Does that retain true with the cjs wrapper thing?

DE: Yes, that remains true.

YK: I want to state my concern. We said originally is that people want modules to work the same in node and in the browser. I'm concerned that a reasonable bundler would be able to implement the same behavior, and dynamic makes that a lot harder to do.

DE: So it sounds like node must use bundler semantics.

YK: No, the worst bound is that bundlers just have different semantics. That's the status quo. i'm not trying to say anything is fatal, but there's really 3 things in the wild.

AK: Is this the same concern?

YK: It's the same concern as Dave's. We've never talked about my original problem, dynamic shaping problem.

YK: Export* would have made my concern even worse. I was very heartened that Guy was thinking about this stuff. however, i've not heard people discuss the concerns of the third environment a lot, and dynamic options make it hard to do a good job in the bundler environment. But tl;dr is that static shapes are easier to compile than dynamic shapes. Guy put constraints on cjs modules that make them work better in ecmascript graphs, and those improvements help the bundler case.

DH: Why is ___ not sufficient?

(out of time)

## JS Explain — AS

Attendees: AS, SYG, YS, MHK, PST, IT (note taker)

AS: Naive JS interpreter written in OCaml, as close to the spec instrumented to generate a trace of everything that happened. JS Explain provides a way to navigate that trace. You can inspect the state of the interpreter. [DEMO]

AS: Right now we put links to the spec in the the interpreter. The idea is that it would have a frame on the side that would show you the link—still a WIP. It's on the most current version of the standard.

AS: We just finished adding proxies. We had to redo everything when the memory model changed.

SYG: Currently there's not a widely used implementation of Annex B 3.3—very few people understand it. In particular functions in blocks, which isn't lexical scoped, rather it is weirdly dynamically scoped. If you implemented this, the small audience would be very grateful because it's a hard spec to implement.

AS: Nobody has written to part of the spec better?

SYG: No. It's a dark part of the spec.

MHK: Could be useful to understand current scope in arrow functions.

YSV: How difficult is it to do an implementation of a feature in the spec?

SYG: Because the groundwork is done it's pretty simple. As long as it's precisely defined it's easy.

YSV: Would be good for our process to write in a way that is easy to translate. Making formalization of JS easier makes the spec better in the long run. It will make us have fewer inconsistencies in the spec.

SYG: I have skepticism, because barrier to entry to spec is high—wouldn't want to make it higher.

YSV: Wouldn't be required.

AS: We could do it so that the spec would be easy to translate into code and we could play with it.

SYG: Easy for proposal writer to spin up a playground.

YSV: Would be nice to make their job easier because it makes our job easier. We should consider it as a option. It would be ideal to run the strict language version.

AS: A nice side effect is everything is typed. We need to address completion values. What I would like is to have type annotation in the spec.

PST: What happens if there is an error in the program?

AS: What kind of error? [DEMO]

AS: How about async/await?

SYG: The Promise spec is more complicated than it really is.

PST: If you could do a step by step description of how promises work.

YSV: Promise description would be great, as it's fairly complex.

AS: We need to consider host specific behavior. We didn't implement `for.. in` because it's not spec'ed clearly enough. We are thinking about implementing the "good" enumeration order.

SYG: For the web dev audience we could have a tool on MDN so people can understand step by step what is going on.

RK: They may not need to understand what's going on a source text level.

YSV: Browser version?

AS: Yes, runs in the browser.

MHK: You might have different levels about what it shows you—web devs may only be interested in JS/Pseudo JS version while spec implementers would be interested in other parts—for different audiences.

AS: We would like to be able to modify the state and rerun the code. I'm lucky I have one engineer working on that.

SYG: This is cool, but it's a lot of work to keep in sync with the spec.

AS: Yeah but the spec is moving slower now.

SYG: If it's of so much use to the org, how can we get people to donate time? The education group?

YSV: I think this is a fantastic tool for the education group. We could help people what's going on in the spec with this tool.

AS: We did this with JS, it's also easy to do with another language. JS is unique given that it puts everything in the spec.

SYG: When was your last talk about this?

AS: Munich.

SYG: Now that it's more mature, I would love to see this presented now that we have education efforts spun up.

AS: The frame on the side that has the current step would be nice. Would like to show then, maybe in May.

YSV: Hope you submit this to JS Conf EU, it would be awesome given it's interactive.

PST: Devs often have incorrect mental models about how JS actually works.

YSV: I believe Cambridge is working on visualizing every step of execution as a graph—their goal is to formally verify functional languages. It's also an educational tool to show how performance is impacted by decisions. They presented the second keynote at Lambda World Cádiz. It's very visual.



## Typed Objects 10:00 am

(This section is presented as-is because the note takers didn't bother to keep with the format of the committee's notes)

```
js objects are notoriously dynamic, less than ideal. makes it hard to integrate with wasm
gc proposal on wasm side associated with typed objects. js and wasm can both have references to and efficiently operate on a typed object
for thus we need to have deterministic memory layout, in all envs except edge, wasm is ahead of time compiled so access cannot be dynamic
typed objects provide more predictable performance AND behavior

typed objects are indexed collections with types on the entries
type primitives, any type, or object or string. like typed arrays but for structured data
if you install a named prop as an alias, guaranteed to have all lookups to that name to be the same because it cannot be overridden
if in your compiler you have a simple typecheck, you can inline accessors
typed objects are extensible/subclassable. basically appends slots at the end of the memory layout.

q: what about nested struct?
a: this proposal only has references to other structs in structs, cannot embed
   nested structs would need to have fat pointers or copy in copy out semantics, so this version doesnt include it, too complex mvp
   we will probably want to revisit it

   old proposal also had transparent types where you could access the underlying buffer but not this one
   we could maybe say give me an instance of this typed object based on this buffer.
   if typed references were restricted to be in the same buffer you could use this feature to embed structs in structs
   if you have this option, youd probably be able to encode these locations more efficiently if its consistent
   < confusion> ok lets skip this because it is not in scope
q: how do you do arrays?
a: they are not in explainer yet but will probably be in mvp
   would probably be fixed length arrays, fixed at construction time
   kinda implies nested structs

   we could however have value type arrays

q: how do these interact with proxies?
a: these are just exotic objects
   and they can be implemented with proxies, so they are not a problem for membranes

q: whats the overall goal? just fixing layout for interaction with other languages?
a: yes, and introducing a way to have more predictable performance for interacting with collections of data
   think like typed arrays, but for structured data
   cannot unify it with the typedarray prototype though

q: sounds like arrays are core to this proposal due to the above goal, but theyre not in the explainer yet
a: structs are also collections of structured data, because of references

comment: typed objects you can know there is no alias between different types
q: but theres no plan for making them aliasable?
a: if we had transparent types you would be able to alias

q: why do we want backing buffers if the buffer is not transparent?
a: so we can send large amounts of data between threads efficiently

q: can you put methods on the prototypes of these things?
a: yes, we thought maybe wed freeze the protos entirelt, but we only freeze the identity of the proto

you can compose behavior with means other than subtyping (traits)

how does eqality work on these objects?
still reference equality

[END]
```



## Kevin's 1pm Talk

KG: The globals proposal is in stage 3. The bare name "global" doesn't work on the web. globalThis works. But the "this" keyword confuses people known to JavaScript, and globalThis might make more people confused. This is relevant right now because it's 4 days from landing in Chrome stable. But there will become a point where we can't revisit this. Is the room concerned about this given the new feedback?  If so, what other names should we use?

JRL: globalGlobal?

MB: This is already decided I thought.

KG: We shouldn't pick a name, users see it, and we don't change it.

MB: We already picked a name; we already went through this process. We all wanted `global`, but it didn't work out. We had to come up with a shortlist of names, Microsoft did a study on real-world usage of these identifiers, and based on that data we decided on `globalThis`.

KG: There were other names that Microsoft provided that we might want to consider instead.

YK: I'm a little confused. At the time I had this concern exactly. My recollection is that the committee is that this isn't an important name; should only be used by power users; it's hard to pick a good name; there's no web compatibility issue; and I'm one of the person who had that opinion, and the committee dismissed it at that time. What is the reason for revisiting this?

KG: Now having seen strong feedback from educators, that is what is different now.

AK: We did spend a lot of time talking about adding "this" to the name. I don't see that globalThis should be in the first thing you learn when you come into the language. Seems like we're re-litigating this issue, thought a lot of people on the thread feel this way.

DE: I regret the process we used in TC39 to arrive at globalThis. i think it would have been better to advertise and get feedback on the name, rather than using the deliberate secrecy. In the future I'd rather not do that. I'd rather get outreach. We have a group for that now.

JHD: The name globalThis has been public for months now.

AK: I don't think this is a useful conversation.

JHD: It seems like shipping it in Chrome could be an issue. And Kevin is asking if that's worth re-evaluating anything.

KG: ___

DE: We have feedback from the community about aesthetics. We can take these case-by-case. It makes sense that this should be open to community feedback.

YSV: Dan made an excellent point about our process for getting feedback. Also, in this thread, Axel concedes that this is the best name from his perspective. So reading the thread in full would be worth our time.

JHD: Axel is considering closing this thread later today.

MM: Is there a short summary of how Axel arrived at the conclusion that globalThis was the best name?

YSV: There were arguments for all the alternatives and globalThis seemed like the best.

JHD: He accepts the constraints.

KG: There were some names that seemed not totally terrible that we objected to on aesthetic or pedantic grounds. but we're not necessarily the best for judging aesthetics. I wanted to point out Global with capital G. We reject that because it's not a constructor, namespace, etc. But maybe we should consider taking that aesthetic pain since globalThis has aesthetic.

SFC:300 seems like a lot of votes. how big is it ?

JHD: Axel (and another educator that retweeted) has a lot of twitter followers and got a lot of people to upvote; 300 people is for sure a lot, very quickly, but maybe take it with a grain of salt.

YK: One thing I was worried about that the time is, when people teach JS now, most tutorials use window. And if they keep using window, then globalThis is a power user tool. But if people start thinking globalThis is better than window, then a lot of beginner documentation for JS has globalThis in it.

KG: ___ said this is something beginners will encounter. But if I were an educator, I would want to use this name for my code to work in Node.

YK: So the argument that we can dismiss concerns that this is a power user tool is maybe not a good argument, which makes me feel less comfortable about globalThis.

EF: It seems like Axel came around. So isn't this resolved?  Is there more progress to be made here?

KG: That's not something I noticed when I read the thread at that time.

YSV: We are over our timebox; consider discussing this in a breakout session.

KG: I really do feel we need an answer to this question because it's urgent.

AK: My next topic on the queue further justifies that `globalThis` is better. Most of the comments on the thread just talk about all the other names that we already dismissed.

JHD: So out of all the suggestions, the only name that was suggested we hadn't seen before was `globalContext`. But the only name that really survives the complaints is `Global`, which we had previously discussed.

YK: I'm not going to object. However, this seems like a referendum on `globalThis`. I strongly disagree (with what?). If we were really trying to look for other names, but we've already done that. there's a tension here between people wanting an aesthetic name and people who think people won't use it a lot. In the list, none of the non-aesthetic names are ever consider.

JHD: 15-20 other names were suggested, like `__global`.

AK: I think this is why it takes TC39 to take forever to do something.

JHD: The issue that `global` breaks Flickr was filed publicly in December of 2016. So it's been public knowledge for a long time.

KG: I really want to try to assess if this is worth spending more time on.

YSV: Let's do a raising hands of who thinks we should do a breakout session.

(a few people raise hands)

KG: I don't think a breakout session would actually be useful. It sounds like the room wants to continue with globalThis with a few exceptions.

AK: My concern is that the same issues will come up again and again.

KG: Maybe our aesthetics disagree with the communities. But we can say that maybe the community hasn't thought through this issue as much, and maybe that's true.

YSV: Let's make a writeup about this decision and give that to the community. And if nothing comes out of that, then we consider this a closed issue.

MM: That sounds good.

KG: Yeah. I don't want to write it though.


## Standard Libraries (1pm breakout)

Attendees:

- MHK
- NHD
- DE
- SFC
- MF
- CM
- MM
- IT
- RKG
- TL
- PS
- SG

DE: What do people want to talk about?

NHD: Resolver chain.

DE: Or in general, the infrastructure for standard modules?

NHD: Yeah, but in general, if you have an import mapped item,

MHK: That might be package name maps.

DE: How about if we change this to infrastructure. Another infrastructure is IDL. And another thing I want to talk about is Contents.

MM: Pure modules from resource modules distinction. We've been very careful with the primordials that if you freeze them all, there's essentially no state left, so they can be shared by subgraphs. A pure module is one whose top-level state is transitively frozen and so does not provide a communication channel.

MHK: I want to get a sense for the namespace we should use for importing standard module things.

DE: I'm excited for that.

DE: Should we walk at a high level for the motivation?

MM: Yeah, let's make that the first one.

MHK: Starting with motivation.

### Motivation

MHK: My main motivation is that other languages have these features build in, and JS doesn't. There's a lot of cool things we could ship with an engine/browser so you don't need lodash and all these other common things that people put in over and over again.

MHK: Another motivator is to drive contributions through that. So if people are able to continue on a higher level, people can start contributing library pieces. (something about native code)

MF: So you said something about shipping les code. So I think there's 2 sub-categories there. There's things that aren't available and aren't right, and then things that are hard to get right. So if I want multimap all the time, that's easy, but I have to write it all the time. But there are plenty of things that are hard to get right.

MHK: The desire of having these things available is having them be correct. i think that's a value that comes with that.

MHK: Another big reason is, if we use the module system to do this, we can save space for the committee to develop features that don't pollute the global namespace. This helps problems like

TLY: Doesn't using prototypes make it hard to add features in the future?

DE: There are mechanisms or that. For me, build-in modules have scopable virtualization. With the ___ maps proposal, you can take a built-in module, and ...

MF: Can we not get into those details?

DE: Okay. So I think shimmability is a goal.

MHK: Yeah. The ability to patch a bug or missing feature is something we should consider.

MM: We should acknowledge going into this that we want to make things tamper-proof but also shimmable, and that's a tension. but they're both well-motivated.

NHD: I want to create an area where it's easier to play and work without the tension of TC39. So here, we have to concern ourselves with a tremendous level of details about web compatibility, Annex B, etc., whereas in a Standard Library specialized container box, some of those concerns can melt away. So that gives us an area where barriers for entry are lower.

CM: Backwards compatibility is lower.

DE: In the Intl subgroup, we've been able to make large progress on APIs, so I think we can make progress in this area of standard libraries by splitting this up.

CM: Another motivation is by breaking up chaos. As this bucket gets bigger and bigger.

MF: Another motivation: allowing for a point of coordination. There are 2 different aspects. (1) we provide a bunch of well-known symbols or interfaces.

SG: Like protocols?

MF: Yes. And (2) well-known data structures that you don't want to have to convert between these isomorphic data structures.

SG: How does this work with the existing global namespace?

MHK: That will just keep existing.

DE: There've been perennial proposals to fix global things.

SG: So in the future, if we have new modules, they don't go into global?

MM: But that's certainly a motivation?  So we can stop polluting global namespace.

MHK: So we have to evaluate that separately.

NHD: But import from a module ___ array

SG: Why is that a problem?

NHD: ___

MM: Whenever I hear "centralized", I think, let's do something else.

DE: I'd be interested in hearing your thoughts. Shimming right now is very decentralized.

MM: There's a hierarchy of control points that could be described as decentralized. Shimmability is directly is in conflict with getOriginals.

SG: I want to play devil's advocate and go through the motivations. For having a playground, we already have polyfills. So maybe that's not a strong enough motivator. I'm not saying I'm right.

MM: We have something that already does what?

NHD: That provides a lower barrier of entry.

SG: Built-in modules are not helping with that.

MHK: What you get by going it through a standard library is that the library is standardized.

DE: I agree that whether it's in a standard module doesn't affect whether it is possible to polyfill.

CM: With a library, there's a level of opting-in that the user has. So they could be fixing their world while breaking mine.

SG: That's a good point. My main motivation is to make people use the esm syntax to import modules. But users use esm, but there's no way to import the standard collections. So this provides a unified surface for people to write code.

MHK: I agree with that. IN the long run, I'd want global objects to be in the standard library. But going forward, I want everything to be using this system to do it.

NHD: Would that speed up the generation of the global object for each context?  Like, you don't have to throw Array on it?

DE: In what context do you not throw those things on it?

MM: There is a way that this would speed up initialization. As the committee standardizes new stuff, if you put it in a global realm, all those things need to be instantiated. But if we put them in a module, they don't have to be initialized.

SG: We already can lazy-init. That doesn't change much.

NHD: But now we can do it in the startup process.

MM: There's an interaction with shimmability. If you can postpone running the code to shim a module until the module is loaded, whereas in a global, you have to do all the shimming upfront.

DE: Any more pieces of motivation?

PS: In the real world, the user of JS, the old cheap has the C compiler and the C library. Often, not the same people write the C compiler and the C library. Which means that if we envision a JS with a core and a standard library, you could also imagine that some of the library are not provided by us, but by somebody else. Since JS language is usually ties to a browser, you always imagine that the browser vendor does everything. But it could be very useful that especially if it is completely standardized, you can have different people doing different paths of the thing. (continues with some examples.)  So that's the "Second man" motivation. And, what Max (?) is always talking about, that we should have no internal state, that's essential to us. Since we're instantiating ___, that is very costly.

MM: Another motivation: something Yulia brought up: so far, everything that we have available as part of the JS standard, none of them have special dangerous powers that need to be specially arranged to virtualize or censor. There are some proposals that would introduce special powers that would need to be quarantined, so that old code that precedes the introduction of special powers can distinguish special powers from just new pure modules. So if builtin modules are introduced in a way to distinguish between pure modules and other things, things that are dangerous, such that you can make a loader just for pure modules and a loader for dangerous things, then the category of dangerous modules becomes a place to put things like getStack, makeWeakReference.

SG: Would this be part of the spec?

MM: Yes.

DE: Another benefit of standard modules is that they're standard. They could be common tools that JS programmers use in lots of different environments.

MHK: And there's certain guarantees behind quality and behavior.

NHD: It can help drive down JS hype. Like, the new library framework hype, by saying look, here's the thing, it's the standard, use it. Instead of like, should I use lodash or underscore or something else?

CM: Depending on how the committee's work gets subdivided, committees don't have to be on the same schedule as being on the 262 spec.

DE: I don't see the schedule as a blocker. We seem asynchronous already.

CM: I'm talking about rolling out.

DE: I think that's already the thing. Nobody pays attention to the step function.

CM: But also, the different libraries don't have to be in sync with each other.

MHK: Alright.

### Bikeshedding names

Namespace suggestions: std, js, es, lib, standard, e
Prefix suggestions: `@`
Separator suggestions: `/`, `:`, `.`, `|`, `://`

MHK: We have the distinction between string vs not. I would want to stick with string. Most obvious option is `std:`.

TLY: Would we want to register a scheme

DE: Yes

MF: I think that's problematic—I don't think we should sit on a scheme space. Any builtin modules where the module specifies is a valid URL is bad. In the future it could be useful specifier.

DE: Aside from the URL space, we want to consider npm namespace i.e. @key.

MHK: If we use `:` it looks like a URN and might break current usage, such as in WebPack.

DE: Or we use that & register a scheme.

NHD: Agree. If we do a scheme, we must register.

MF: Yes, but I don't think we should do that. Best bet is to consider 2 major ecosystems: web & node. Harder to avoid user defined modules in node space, so we would want to go the route of @<namespace> because node modules are specified as whatever.

DE: Use of term node is ambiguous. Sounds like we're talking about the npm namespace.

NHD: We can parallel the npm namespace pattern... But who says npm is forever.

MF: npm will avoid that space because it's builtin modules.

MHK: Should there be one or multiple namespaces? If we tie it to npm it will hard to look for namespaces as you have to go to npm.

DE: Why is that hard?

MF: You don't need to go to npm...

TLY: Eminent domain it.

DE: Sounds like we want `::` because don't want it to be a URN.

PST: No dot, too many dots in our codebase.

TLY: Slash looks like a path.

PST: Yes, I cannot look like a URI or a path—must look like a language namespace. `::` works well for me as someone from C-world.

NHD: Throw `key|` up there.

NHD: Want to avoid URI, want to make it clear that it doesn't look like a path.

DE: `@key/` may or may not satisfy that.

TLY: Looks like an annotation to me.

MHK: Or decorators.

NHD: Other goal is to avoid conflict with npm.
MHK: At Apple we have an internal one, so also we want to avoid conflicts with that too. It's basically a shorthand for the closest node_modules directory. We use artifactory.

NHD: Artifactory is whatever you throw in package.json

MHK: Want to sense if we want one or multiple prefixes. We is going to own the namespace & what is going to be in it? I think one namespace is problematic—same problems as global scope, where everyone gets to write to it. I want `js` as our ECMAscript prefix and vendors can have other prefixes. I want developers to understand that `js` is constant across environments.

DE: I made a repro recently that is trying to doc the non tc39 APIs that is incompatible between web & node...

NHD: Who serves as the register for namespace?

MHK: Nobody.

DE: I think it would be great to have someone who documents this is the js standard base library even for things that are spec'ed outside of TC39.

MHK: I would have concerns—I wouldn't want everything in the std library to be specified by TC39... It would have to live in the engine.

TLY: I would be intended that all these things would be implementable as JavaScript.

DE: Not a requirement.

NHD: Want to specify behavior & API rather than implementation.

DE: There will be isomorphic code that will be using namespace not specified by TC39—how do they decide what namespace they use?

MHK: They should separately seek standardization of that library.

DE: We should let ourselves be available a registar. Biggest risk is inaction.

MHK: We also try to avoid making mistakes as we can't backout anything.

NHD: Import maps spec gives us the ability to deal with isomorphism. We specify `js::<url>`, now node doesn't know which version for doing URL. Answer is import map for the correct behavior.

DE: URL is a standard. We should give a clean path for things that start off as web APIs and make there way into node.

NHD: Or leave it to user to decide what namespace they want to pick from... How do we guarantee the same level as rigour—who is responsible for bugs, etc?

PST: Under `std::` there only should be modules that have been specified as we do currently. There is already something in place for have 3rd party modules, so we don't need to substitute for that i.e. npm.

DE: What about built in web features? How should those be exposed?

PST: I'm not sure.

NHD: Web platforms don't care about that world.

DE: How does that give us an answer on one vs multiple name spaces.

PST: Ok to have multiple, but what I would like is to see a commonality in loading mechanism between different JS environments.

DE: You feel strongly that other communities not invade this namespace?

PST: Yes.

NHD: DE is saying that we should be able to adopt other namespaces.

DE: Ok with multiple namespaces as long as we do it well. We can specifically endorse specific things being in our shared namespace for isomorphic. I have concerns about inclusion in WHATWG—they don't have a formal governance structure...

TLY: Is there a middle ground where we reference their spec. Let the other spec specify the behavior, but we specify the API surface.

MHK: That may get us in trouble if they break the web.

MF: Let's move on... Most interested in contents & shimmability.

DE: Let's talk about import-maps story.

MHK: We could have a chaining mechanism for loaders. When a module is imported, first resolver in chain gets called to see if they could resolve, this goes on recursively. If by the end no one resolves it throws. We could create a loader at end of chain to see if they can resolve the std library. That's how you could layer host specific resolving on engine.

DE: Import maps module specifier to URL. If you use this to map `js::` to <myURL> it let's you polyfil & gives you something that shimmable in a control way cause it's centralized in the import map. Would benefit by bringing node into the conversation. Needs to work across platforms or at least that there is one on each platform. Want to make sure that things are in sync between web & node.

MHK: That's part of the other proposal.

DE: Is it OK for TC39 to tell import map proposal to say we want shimability across platforms? We could either make sure that the ecosystem is aligned or just say this is out of scope... Proposal has said this is out of scope.

MHK: Champion should talk to node people to see if loading mechanism is reasonable for them to implement.

DE: Not one person's responsibility, we can be part of this too.

NHD: Happy to serve as liaison to node for import maps.

MHK: I think std lib fits with import maps.

NHD: I'll follow up with my contacts—Miles & Adam.

DE: J Chung is leading open standards effort—will introduce.

NHD: Does this answer shimability MF?

MF: There are many ideas what people want, shadowing is sufficient for some, others may be interested as mutating builtins.

DE: As the controller of the import map tells that to have the import map of the polyfil...

NHD: Importing standard Array is an issue given they are different identities ie. instanceof.

DE: Luke Wagner wanted WebASM to import web APIs directly without going through JS. V8 concluded get originals proposal causes memory overhead. Mozilla says good technique doesn't. There's are different analyses.

NHD: Webkit says it OK.

MF: Apparently idea behind get originals has changed. Can't explain it very well though... Kevin knows the answer to this, he spoke to Dominic.

#### Conclusion/Resolution

– NHD to get in touch with J Chung
– Resync with get originals and Luke Wagner

## WeakRef Session

TST: I talked with the other co-champions and even we have some catching up to do.

TST: Briefly on the state of discussions, there are uncertanities around what exactly is a turn of GC, when exactly cleanup could happen, what does strong reference within a turn means. Is it after a script job has finished? After a Promise queue has been emptied? To my surprise, the spec pretends this doesn't have any ordering reqs.

MM: Let me be precise but I agree with the sense. The spec is written in such a way the ordering policy decisions are left to the host. There is some arbitrary set of named job queues, each queue is FIFO. All promises use one of those job queues. All promise operations within an agent are fully deterministic ordered within that queue. However, the mechanism the spec uses to leave a lot of policy choices to the host is to say: at the end of a job, it's up to the host to take a look at the existing job queues. And of the ones that are non-empty and has a job that's ready, the host is completely free to determine which queue to service next. As far as the spec is concerned, the async things caused by async loading, script execution, etc, all could be interleaved between any queue operations between diff queues. I *believe* it's the case on all hosts as long as anything is ready on promise queue, the other queues are only serviced when the promise queue is drained.

SGN: What are the other queues.

TST: The HTML spec specs some other queues. The JS spec specs 2 queues: the promise queue and script queue, equiv to microtasks and tasks. The JS spec gives freedom to drain these in arbitrary order. The HTML spec is explicit about the microtasks being drained before the task. In practice, any JS env that wants to be able to run normal JS without being reworked for an env, and wants to support async/await, needs to keep the HTML guarantees. The freedom doesn't matter except for weak refs since weak refs spec say something about in-turn stability. We just need to define what it means.

MM: Original definition of turn (which committee unfortunately renamed job) is that computation that is bracketed by empty user stack.

KM: So doing a promise is a turn.

MM: Right, between two promises there are no user stack frames. That's the defining bracket.

KM: How would you even know... when do you know when the weakref finalizer runs anyways? I mean at the end of which turn?

MM: There're 2 issues that depend on turns. 1 is when finalizer runs, and 2 is nature of stability guarantee. The alternate proposal is that we recognize in the spec that the promise job queue is treated -- we make it normative -- as strictly higher priority, so that a seq of promise job is an atomic thing we can talk about. I don't want to call it a "turn" or past terminology that's browser-specific. We need a term nevertheless. That would give us less non-determinism that all platforms have anyways. It gives us something we can count on for all platforms. I'll just call it a macro-turn for the moment. For the first part, the proposal that the scheduling of finalization schedules jobs on some job queue is necessarily of lower priority than promise job queue, so no finalizer will ever get called while there are ready promise jobs.

SGN: Why does this need to be in the ES spec?

MM: You *could* do that, that's a viable alternative and nothing would break. However, it means that a correct JS program (vs a correct web program), in that a correct JS program is trying to be correct in a host-independent way can only depend on the JS spec. Even thogh there's regularity that all hosts admit the promise queue priority, a JS program cannot depend on those.

SYG: What do you get out of not having it in the JS spec?

SGN: The web spec has a proper place, it seems like.

MM: The HTML spec would not change in the place where this needs to be specified if we make this change. But this means JS programs can depend on this behavior for their correctness.

TST: One reason to do this in the JS spec that envs like node don't follow the HTML spec, but still have the implement the same behavior.

TST: This is relevant for this discussion because of stability and finalization time. We can introduce the same fictional freedom about job queue but I don't think that we should...

MM: ...because it makes writing correct portable programs harder.

TST: In practice I don't think it wouldn't...

MM: A correct JS program can only depend on the JS spec.

TST: What I'm saying is the spec should be all you need.

KM: So is there any concern that because we're only doing this at the microtask checkpoint boundary that you can write a program that was entirely async, thinking that, like, everytime I am effectively yielding to the run loop by promise chaining forever, that the finalizers will never run.

MM: So I have a questoin about node. I've seen a discussion about a possible scheduling policy for node but don't know what was decided. The other event on scheduling is external IO events -- IO events generating callbacks. The policy change we're talking about only makes sense if servicing IO events is *also* strictly lower priority than promise events. If those IO events can be interleaved with promise queue work then this policy doesn't make sense.

MM: If the IO event enqueues a callback, which queue does it enqueue the callback on. The reason I ask is because *if* it remains the promise queue is strictly higher prio...

KM: I agree with you. You're going to have a bad time if you're going to keep chaining promises, you'll still get the spinner.

MM: But even if the larger unit is finite, it won't be a lot longer.

TST: I want to briefly explain why this is even relevant.

```
if (wr.deref()) {
  await immediatelyResolvedPromise;
  wr.deref().foo();
}
```

This is the classical double deref issue that Dean presented on, and that's why we have in-turn stabliity. Engines will optimize the immediately resolved promise out. It'll be as if it's a block.

MM, SGN: No, there has to be a turn.

TST: *If* it's observable yes, but if not it gets optimized out.

MM: So, I agree this can be optimized out. But I don't see the point of the example.

TST: The point is at that point it's back to double-deref and it leads to a situation where you're very likely to have completely stable behavior in engines, but in the future GC changes will perturb and lose stability.

MM: I'm worried about await patterns people using. They're making bad assumptions about the await points that're making their programs bad.

TST: I think the immediate assumption for the example I gave is a very common occurrence. Await's often used in a way that there *might* be not necessarily is async behavior here.

KM: For file and cache, immediately resolved is common.

MM: But to help the programmer reason and to give predictibility? Programmers need to learn double-deref over an await is bad.

SYG: Isn't this like GC hazard analysis?

TST: This is probably something devtools can do as a best-effort.

MM: We're trying to reduce the non-determinism as much as we can. People *will* write programs that *happen* to work and will continue to happen to work under intense testing, that an innocent change wil cause those programs to stop working.

TST: One thing that might help is if you have a debugger open, the debugger could switch at random between 2 different behaviors. 1 is very aggressively GC and clear weakrefs, and the other is do as little finalization behavior as possible. If you switch between these randomly you're likely to get bugs from both of these behaviors. We should recommend engines do this but we cannot spec this.

KM: And also it's only so useful to diagnose. When a dev is just writing the app you think they'll actually do this?

TST: Given the chances that this code runs in the course of debugging...

KM: Maybe headless mode.

TST: Go ahead.

KM: Uhh we don't have a headless mode.

MM: One can imagine devtools has a GC fuzzer.

TST: More like a quality of impl thing. We should make specific recommendations about this. Impls should do this from the get-go.

SGN: I think the biggest thing is the API. Right now we nede to create a WeakFactory does makeWeakCell. Puts the Java in JavaScript. We should use the constructors with new WeakRef, new WeakCell.

KM: I agree.

MM: We were scared of the constructor and put a correctness condition: we're willing to use the constructor if we're willing to make a change to the normal class pattern, because normal class pattern has a .constructor property. So anyone has an instance has the power to create new instances. For weak refs, that would be a gross violation of least authority. I should be able to give you the ability to observe that a particular weak ref becomes null, or to deref it until it becomes null, without giving you ability to create new weak refs.

SGN, KM: Just delete the .constructor prop?

MM: If we can agree that WeakRef.prototype.constructor does not point. If we the spec writers delete it then it's okay.

KM: Why in the spec instead of let the user do it?

MM: We want the safe way to be the easy way. That's also why the weak factory is also on the system object. System object gives you special powers and can be censored.

SGN: Why does it matter the initial state is spec compliant?

MM: This is why we put Error.p.stack in Annex B so that a framework that removes it is still spec compliant even if a framework removes it from the initial state.

SGN: Do we want to make that ergonomic tradeoff?

MM: Yes, if we're going to introduce these magic powers so that when we introduce the new powers...

KM: Are you okay with putting the WeakRef constructor on Annex B then?

MM: Yes, actually.

All: Okay, haha.

MM: To be clear what this means it that a test262 test, that property has to be in Annex B...

All: Acceptable tradeoff for me.

TST: Excellent, this allows us to do something more ergonomic while keeping the invariants. There are still other things about the API. Dean and I talked extensively. One thing is the name WeakFactory is in there in part because it's hard to name as it services multiple purposes. It's a mechanism for grouping lifetimes for finalization purpoess *and* something to hang the ability to create weak refs off of. I want to disentangle these two. If you want to have a weak ref, say new WeakRef, and WeakRefs have nothing to do with finalization. If you want to do finalization, register your object with something called e.g. FinalizationGroup. You create FinalizationGroup same way as you create a WeakFactory, passing it a cleanup method. Then you pass it object and holdings pairs with a registration API.

MM: The reason for adding the registration API so we can remove the weak cell.

TST: Exactly. If you need both finalization and weak refs, you'd use FinalizationGroup.

MM: How do individual weak refs become associated with a weak ref group?

TST: They don't, you separate concerns.

MM: I see.

SGN: The problem is you need to have the target and holdings to do the unregistration. Seems limiting but I can't think of a problem right now.

MM: Let me understand, the weak ref no longer has holdings at all.

TST: Exactly, only when you register the weak ref for finalization.

MM: I see. This is clean, I like this.

KM: To unregister you need the strong ref also? When you want to unregister, provide it with just the holdings. If it hasn't been finalized yet...

TST: I hadn't considered unregistering with just the holdings.

SGN: But you can register the same obj with multiple holdings. Common use case.

KM: Why is that common?

SGN: Shared state.

KM: But your holdings can just be a collections of a bunch of things that distinguish.

SGN: Okay, but that seems arbitrary to have that restriction.

KM: It's not that you can't have separate ones, just if you want to be able to unregister with just the holdings. Otherwise you have to have the object to unregister, which is very difficult if I don't care about it anymore.

SGN: Or you get a handle, that's the weak cell. That seems better.

KM: Or an optional 3rd argument like a key to unregister, then you get to choose it.

TST: Could provide an overload of WeakRef ctor that passes in holdings and a group that does both. WeakRef would just WeakRef, WeakRef(t, holdings, group) combines the registration, passing the holdings to group. One way could be unregister just based on the holdings.

KM: Could have on the group a way to register with the holdings.

TST: I think we can discuss the alternatives.

MM: I like that the registration might take an optional key, and it's if you provide the key, it's the key you use to unregister.

TST: Assume you're using an object as your key. Nothing prevents you from creating a weak ref using that object as your target. Then when you call unregister it's ambiguous.

KM: But th eonly thing you can pass is the key.

TST: Oh so if you want to unregister *at all* you have to pass the key.

KM: Yes. If you want to use holdings, pass holdings. If you want to use the same group you could do that.

MM: Makes it orthogonal, yes.

All: We like that, yes.

SGN: I have another concern. The register has a strong ref to holdings, which means we can't GC the holdings, which means weak refs have stronger GC guarantees than anything else in the language.

MM: It's the group that has the ref to the holdings. If the group as a whole is garbage...

KM: Does the finaliezr for a group run if the group isn't reachable.

TST: If the whole subsystem goes away in one go then no finalizer will run.

SGN: But if the group does a lot of registrations and we want to do some cleanup we can't, because holdings are strong.

TST: The entire point is that you want to be able to pass something to the finalizer that is guaranteed to not be collected.

SGN: If the target is not GCed. If the target is GCed, we have to call the finalizers.

MM, TST: *After* the finalizer's run the holdings aren't held anymore.

SGN: You could not run the finalizer...

All: That's not desirable, so they have to be held onto strongly.

KM: What's the seantics if the group itself is dead?

TST: Then nothing gets run anymore.

KM: If you have a socket that socket won't be closed...

TST: Yes, you should strongly associate the group with the socket. Consider a wasm module where you have JS reflectors for some state in linear memory. You want to pass those out weak refs so you can clean up memory state, but if the whole memory goes away, then the group goes away, and you don't want to waste time doing the finalization work.

KM: I see.

SGN: The next one is the finalizer gets an iterator and can iterate all the weak cells. What if you don't finish iterating?

TST: Arbitrary future time and the rest will be yielded.

KM: Previously you get the weak refs/weak cells, and if you want the holdings you call the getter. Those things are gone now so you just iterate through holdings.

#### Conclusion/Resolution

See summary session.

## Summary Session 3:30pm

### Least-Authority Libraries

MM: Modules have top level state, to import shared modules into a frozen realm, we need modules that are known to have frozen top level state. This can bootstrap importing other modules that have least authority. This would have prevented the recent NPM exploit.

### Implementation Security and Correctness

MF: We had 2 major takeaways. They are recorded in the tc39 security repo. (1) Have guidelines for Stage 3 reviewers, and include security as a guideline. Natalie offered to put together a PR to the process document and present it at a future meeting. (2) It might be valuable to create a list of exotic JS values. If would be useful for proposal champions could provide how exotic JavaScript values could interact with their library. We should start with values that have caused errors in the past.

### Source Text-ness of Template Literals

JRL: We discussed what the implicit call site that could call to a decorator function, pipeline, etc., that would allow us to determine if a call could have been forged: a call expression and not source text in your JS file. There's a few issues that come up with tail call invocation. You could look at the stack, which is zero cost, but with tail call invocations, it's difficult, because the stack gets pushed off and replaced with the tail. So we'd need to figure out that problem. We could still move forward with Dan's proposal to add an internal slot to tag template strings, and allow hosts to build on top of that to give them the easiest path forward to tell if a tagged template literal was source text.

### Private Symbols

JRL: 2 camps to the private symbols debate. First camp, allow private symbols to be allowed on foreign object and propagate out the prototype chain, and the other saying that branding is the only way to have proper privacy. The other topics discussed were proxies with private symbols, continuing to use the same syntax. That would be the smallest possible change from the current proposal to a new proposal backed by private symbols.

DE: What do you recommend?

JRL: Nothing, because I'm not going for stage advancement.

DE: There is no consensus on making any changes. Correct?

JRL: Yes.

### JS Explain

AS: We were most interested in having Annex B 3.3. There was a request to have arrow functions. Promises, way to display the stack, and regarding the UI itself, show the spec text instead of the interpreter being run. I'm hoping to have that by Berlin. Maybe have a way to put feature descriptions on MDN to explain an example.

### The Issues Queue

KG: We handled a couple of the issues. There are a lot of them. We have a better sense of what general kinds of issues there are. I'd appreciate having a place to move them that's not the general spec so we can address open-ended and questions separate. If you feel like taking care of issues, there are a lot open.

### Typed Objects

TST: Typed objects has been in the works for a while, been resurrected with Wasm. They are in lockstep now. It's not yet in a state that we can present here, but talking about it was helpful. It'll be on the agenda in the future.

### Optional Chaining Discussions

DSY: We started with simple property access, and actually reverted all the changes. So optional deletion is back, optional function call, and we're using `?.`, `?.[`, and `?.(`. I think based on the group, we have universal consensus, a few questions, but overall we're looking good for Stage 2 advancement in March.

### WeakRef

TST: Weakrefs, we had a proposal in the spring, and V8 is working on the current proposal. SpiderMonkey also has an implementation in progress. We also found out that it is polyfillable in the web platform because of spec bugs. We got to a state where I think we have a better factoring of the API that doesn't have factoring (?). That should be ready for Stage 3.

### Dynamic Modules

DE: Discussed Guy's proposal. All seem to agree that named imports from cjs into esm seems reasonable. Sticking point are * re-exports from cjs into esm. You can see the module object change over time. That's something we will have to think more about, whether it's okay and well-motivated. But that would prohibit certain cases, but allow for a lot of integration. I think we have agreed about some of the big points.

### `|> ::` function calls

TAB: We had a cool review of all the function syntaxes, and realized that they weren't as collapsable as we thought: early vs. lazy evaluation of the major bits. Conclusion is that we need to be careful about reviewing them together with each other in the future.

### JS Standard Library

Nice group about JS Standard library. Started by collecting motivations. We did preliminary ideas on namespace prefixes and what they should be, and finished on brainstorming on what we put in the standard library, which ranges from deep to shallow libraries, something we can take to the next phase of this proposal.

### What's involved in hosting

AKI: We talked about hosting and did some recruiting. Talk to me about what's involved with hosting.

### Locale Data

SFC:Talked about how Intl has hard coded database. Can vary between browsers. Users might want fresher data. How can provide a service to users so they can provide their own data. How can browsers implement new features without adding to what browsers already have to do.

### Jessie Semantics

MM: Small subset of javascript that is pleasant to code in. This provides strong understanding of what your code is and how it will run. Talked about how we could formalize it.

### Talking about our reputation

AKI: Spent some time about reputation. It's not super awesome. I'll come to the January meeting with ideas on what we can do to improve it. We also talked about what we want our reputation to be, and figure out what small things we need to go in that direction: finding kinder ways to say thanks-but-no-thanks; preparing the rationale document (volunteers please). You'll hear more in January.

### How we make decisions

YSV: We talked about how we make decisions, and what do we make decisions about, how we bring in tools. I suggested we have a way to have tools to bring back what people think about the language so we have higher-quality data. Maybe have self-selected samples.

## End of Meeting

RJE: Thanks to Michael and others from Apple for the facilities and hosting the dinner!  (applause). Thanks to the note takers, mainly SFC and AY  :-).

YSV: Thanks to RJE for doing the last 15 months of organizing!

RJE: Thanks everyone!  Safe travels.
