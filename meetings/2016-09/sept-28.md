# September 28, 2016 Meeting Notes
-----

Brian Terlson (BT), Michael Ficarra (MF), Jordan Harband (JHD), Waldemar Horwat (WH), Tim Disney (TD), Michael Saboff (MLS), Chip Morningstar (CM), Daniel Ehrenberg (DE), Leo Balter (LEO), Yehuda Katz (YK), Jafar Husain (JH), Domenic Denicola (DD), Rick Waldron (RW), John Buchanan (JB), Kevin Gibbons (KG), Peter Jensen (PJ), Tom Care (TC), Dave Herman (DH), Bradley Farias (BFS), Dean Tribble (DT), Eric Faust (EFT), Jeff Morrison (JM), Sebastian Markbåge (SM), Saam Barati (SBI), Kris Gray (KGY), John-David Dalton (JDD), Daniel Rosenwasser (DRR), Mikeal Rogers (MRS), Jean-Francis Paradis (JFP), Sathya Gunasekasan (SGN), Juan Dopazo (JDO), Bert Belder (BBR), James Snell (JSL), Shu-yu Guo (SYG), Eric Ferraiuolo (EF), Caridy Patiño (CP), Allen Wirfs-Brock (AWB), Brendan Eich (BE), Jacob Groundwater (JBG), Adam Klein (AK)



-----

## ES Modules Lifecycle

(Bradley Farias)

Slides: https://docs.google.com/presentation/d/1aq_QjBUQTovj9aQZQrVzS7l1aiOs3ZNlk7wgNTUEMy0/edit#slide=id.g16ab11d101_51_46




BFS: We will be talking about host-dependent behavior: The Node module loading hook is specified in a way that meets ES spec requirements. There is a global and local cache \<explain details\>


(from slide)


1. Resolve (as absolute URL) => Fetch => Parse
    1. Make Module Record
    1. Place in Global Cache using Absolute URL*
    1. Errors remove records from Global Cache*
1. Traversal of import declarations recursively
    1. Ensure step 2 has been performed on the dependency
    1. Place dependency in Local Cache using Import Specifier*
    1. Link dependency to module
    1. Errors prevent any evaluation
1. Evaluate in post order traversal
    1. Errors prevent further evaluation


CP/YK/AWB: (There are items here that are strictly host-specific)

BFS: Necessary for Node

DD: for example the local cache is not required by the spec; we don't have one in browsers

BFS: agreed.

DH: Inherently, dynamic module systems that would want to interact with ESM need a late linking mechanism. Another option would be to delay linking for everything. I would be open to this option. It might not preclude reasonable implementation optimizations.

YK: And modules haven't shipped anyway

AWB: Appears to be an "interpretation" of the requirements, but we need to understand _why_
- e.g. local caching? Why required?



MR: We have caching; we need it

BFS: [~Lifecycle Errors slide]


```js
// a (entry)
import {fromB} from 'b';
import {fromC} from 'c';
```


```js
// b
export let fromB = 'b';
```


```js
// c
import {fromB} from 'b';

// FIXME
import {doesntExist} from 'b';

export let fromC = 'c';

throw Error();
```



BFS: This causes a link error. no evaluation occurs. B exports to A, C exports to B, and we fail. To implement this in Node, we store things in the global cache, and remove when there are errors resulting.

https://docs.google.com/presentation/d/1aq_QjBUQTovj9aQZQrVzS7l1aiOs3ZNlk7wgNTUEMy0/edit#slide=id.g16ab11d101_51_0

![](https://i.gyazo.com/7b287267136248ecc4972cd95a153ce9.png)

WH: What do you mean by placing b,c into a cache?

BE: It's not a cache; you can't miss. Sounds like the cache would be more accurately be called a table, since you insert things in for a real effect.

AWB: The spec text states when the link error occurs, it all goes away

WH: All of A, B, C disappear?

(confirmed)

DH: I didn't think there was anything in ES2015 about error states, global semantics of the registry

AWB: When you reach an error, it throws, and it unwinds to the old state

DD: Actually, the idempotency requirement is strong. Firefox found a bug in the initial HTML/Modules integration where we violated that requirement, and it caused us to make changes to unwind the state

DH: The slides discuss the idempotency requirements?

(confirmed)

BFS: (remove FIXME)

![](https://i.gyazo.com/db559bf71469f069698fb765d08b4844.png)


AWB: The top level was aborted before reaching the end, and result was...?

BFS: One function of the cache is to make sure the module evaluation only occurs for the first time the module was imported, and not again on subsequent imports

BFS: [~Lifecycle parallel loading slide] Diamond imports. We actually plan to evaluate in the order d, b, c, a

AK: Why are the linking and evaluation orders different?

BFS: The linking and initializing bindings steps are logically the same

![](https://i.gyazo.com/af2eb75c6dff2b72e7946b2eab37a0df.png)

![](https://i.gyazo.com/5829601fe73681f7e9dc13a6ed3cbc60.png)


YK: Spec bug? If hoistable decl and linkage occur in wrong order?

WH: Can anyone produce a concrete example of where this matters?

BFS: This...

(Note: this is far in the future of the deck)

![](https://i.gyazo.com/a1c0ea7e6590d8844f33a5013c0b05a1.png)

BFS: [Timing example - hoistable] After linking, functions are available to be called [since functions are hoisted]. If we get some things wrong, foo could be undefined when we try to call it.

AWB: This can't happen.

YK: Is this related to cycles?

BFS: Most of the problems are related to cycles, or things that cross them

YK: If you have a cycle, make sure the hoistable decls are evaluated ...?

BE: How observable?

BFS: In pure ESM, you never run code before it's completely linked, but when interacting with commonjs, we have to be able to execute some code earlier.

DH: ES2015 does not cope with dynamic modules.

BFS: If we have any interop, the distinctions between

BFS: let's go back instead of skipping ahead a bunch of slides

AWB: Need to understand differences between static and dynamic per spec.

BE/DH: need to address interop, dynamic code that can execute before link

BFS: CommonJS/ESM interop: conceptual distinctions are fundamentally at odds, material distinctions are at odds due to spec/implementation details

AWB: Conceptually, ESM is based around sharing bindings, whereas CJS is based on sharing values

![](https://i.gyazo.com/2013ae96e120336c4677c561fec63507.png)

- Conceptual: intent or design goals that are fundamentally at odds
- based on notes, records, design, etc.
- Material: specification or implementation mandates that are at odds
- based on things in reality

WH: Why are conceptual and material required to be at odds by definition?

AWB: clarify? "conceptually" ES modules are based around sharing of "bindings" vs commonjs sharing of "values"

BFS: More than that


BFS: There's more than that in terms of conceptual differences

YK: We were intending for the loader to fill that gap

BFS: Conceptual difference: Mode detection: The spec expects things to be declared out of band; this could be a grammar change

BFS: Material: Some cases are ambiguous. This isn't the most important issue.

BFS: Cache data structures: We will have module maps analogous to browsers

DD: This is what enforces the idempotency


![](https://i.gyazo.com/1f075f03f5f5c9cffcd3be00b634493a.png)

![](https://i.gyazo.com/d50ec1630faf59996f0f720959701d86.png)


BE: Can you unload from this?

BFS: From given module record, import some string it's permanent: cannot remove it.

AWB: depends. linkage errors you could

BFS: expect to completely recreate your dep graph

AWB: once mod is instantiated and linked into the system, it's in. If not past the point of linking, then no one has seen it.

YK: the discussion on es-discuss could've gotten it wrong?

DD: There was a conceptual goal of idempotency

DH: A thing in the spec, but not especially understood.

DH: consequence of things dissappearing at error? avoid surprises. need complete control in your program. Not always automattically forced into reload policy. If the spec says reload, then issue.

DD: The spec doesn't lead to reloads; it leads to permanent not-reloads.

DH: Doesn't deleting from the cache cause a reload?

DD: the semantics say: once you get an error, you must cache that error forever

DH: Sounds like we should add more features for control here

YK: Is an issue that node needs to be things to go away

(fell behind)

BFS: example: a mocking library that wants to replace things in cache

JSL: The default behavior in Node is to get the same behavior back once it's initialized

BBR: We want to avoid many cases of getting two copies of modules, though it's not always possible, e.g., case-insensitive file system and different case names.

AWB: if you have file path: import a from path, you retrieve, link that in; subsequent import of the same string returns the same thing.

DH: clarify: a post resolve name?
- Can't specify anything about strings that appear in the

(I didn't hear the end)

AK: Unfortunately, the spec does talk about those strings

AWB: What the spec says that if two strings are pointing to the same thing, it should be the same module

YK: We should fix the spec if needed

AWB: Want two identical paths to produce different modules

JSL: eg. mocks, instrumented modules

MRS: Some development tools explicitly control the cache, e.g., blow it away

AWB: things like repl loops are outside of the spec. But if you have two imports with identical strings, then under what circumstances would they produce different things?

DD: Discussion reiterates the following points a few times:
    - Per spec, the only requirement is that if A imports "x" multiple times, it return the same module. There is no requirement on A importing "x" vs. B importing "x".
    - However, some people believe that the spec should be talking about the "normalized" or "absolute" form, not about the literal string ("x" above) that appears in the `import` statement.

AK: In the specification, the third bullet in [15.2.1.17](https://tc39.es/ECMA-262/#sec-hostresolveimportedmodule) has the idempotency requirement. There is no normalization


This operation must be idempotent if it completes normally. Each time it is called with a specific referencingModule,specifier pair as arguments it must return the same Module Record instance.


(hostility towards note taking)

DH: Idempotency constraint not about source text, about result

WH: So where is the result used in the 15.2.1.17 HostResolveImportedModule •3 idempotency constraint? That line uses the string, not the result.

DD: Layering-wise, there's no way that we could enforce the idempotency requirement about any sort of normalized form, as this is done within the spec based on the name used to address the module in the source text.

DH: Thank you, good to know that the idempotency requirement is about the operation of HostResolveImportedModule, utterly impossible for node?

DD: the idempotency requirement is: if you have two `import "x"` in the same file, they must produce the same thing

DH: just a narrow constraint

YK: The intermediate string is where people are thinking about the api

BFS: This is a fine constraint for semantics

DD: Bradley's implementation is based on a map, as shown in his slides. The constraint of the spec means that,

if you want to use a map to satisfy this requirement

MRS: To get back to the core point, with Domenic's interpretation (i.e. that the spec only restricts that `import "x"` twice in the same file must return the same thing), are there any problems this?

BFS: No, no problem. We can implement this; I was just explaining what this is.

BFS: [Cache data structures slide]


![](https://i.gyazo.com/d50ec1630faf59996f0f720959701d86.png)


BFS: Using `import()` to illustrate

![](https://i.gyazo.com/6ab58a8d0a94937375e141b4240c7df1.png)

AWB: Remember that import sets up bindings

AK: The example would be identical if it said import "f"; import "f"; in semantics

BFS: The idempotency is prior to any evaluation. ESM import declaration links prior to evaluation, so idempotent prior to evaluation
- CJS declares its exports occur during or at the end

AWB: Doesnt matter what you did for exports, nothing to link.

BFS: let's say I have `import "foo"`

AWB: The difference between import and require is that require returns a value, so as long as you get the value, you have it, unlike linking bindings and pre-initializing them

BFS: The current feeling of how modules work is based on the Babel implementation, where that is not quite true. They use member expressions for variable access, rather than creating bindings

- using member expressions to simulate live bindings for variable access, not making bindings

YK: Babel might be leaky, but it allowed people in node to do things that need to be understood

BFS: [Timing slide] ESM was designed for async loading, conceptually

![](https://i.gyazo.com/deb57838dccb6937b8eb4b4e29704d0a.png)

AWB: My primary spec goal was static linking; I wasn't thinking about async linking at all

YK: AWB's spec is well written to separate the steps (re: sync and async are irrelevant)

BFS: To import CommonJS, you need to know their shape, which occurs during evaluation, after linking. For an ES module to import a CommonJS module, we need to hoist the evaluation of the CommonJS module into the linking phase

AWB: So if you want to treat a CJS module as an ESM, you can think of it as <?>

BFS: You still need to perform eval at some point

YK: b/c cjs modules need to be evaluated to know what the exports are, and have to evaluate esm, the cjs modules have to be run first (declarative vs. non)

DD: All agreed, evaluation has to happen first.

YK: CJS always treated as a single export

JM: _Do_ have an object before evaluation, can be clobbered. You don't know the bindings ahead of time. If you import a CJS module from an ESM, you can make the semantics be that your lookup of the name is dynamic in a similar sense to the live bindings from ESM.


AWB: When import something from another module, taking bindings that aren't initialized

WH: What is `import *`?

- `import *` doesn't import everything...

DH: Doesn't exist anymore.

CP: If you happen to have a module that is not esm, can create binding that is default

BFS: These slides are based on the intent that we would have the same level of compatibility as Babel, where you can have named imports from CJS. We'd like to not lose that.

CP: not a requirement

YK: desirable

- Have to allow evaluation before linking

DD: Allow him to get to the slides...

BFS: Without eval occurring during linking, we have no path to transition from transpilers to native modules.


BFS: [Timing example - Circular] Circular dependency between CJS and ESM, with `module.exports = null` from CJS

![](https://i.gyazo.com/a36044bb7e3306007b007ddc9b87d6a1.png)

YK: Is this a realistic example?

JSL: Sometimes people do actually blow away exports from within the module

BFS: entry is our commonJS, dep is ESM. Dep tries to link, but entry's shape is not finalized. We can snapshot the shape at the end of the evaluation, but we can't link it earlier as we don't know the shape.

![](https://i.gyazo.com/fbe3b4b28a7171f56ea077835f57cc79.png)


AWB: is the problem circ deps back to CJS?

BFS: You run into this sort of issue whenever you cross the bridge.


AWB: Requiring a dep starts a new root level load of the module. Not an import.


BFS: expectation is that esm cannot import cjs?

AWB: circularly.

DD: Could you clarify?

AWB: requires in context of esm cannot introduce circlularity because hey are binding based, not value based

DD: Can get an evaulation circularity

AWB: Can get a loop or an error

YK: banning cycles between cjs and esm seems more palatable

BFS: An alternate solution: Making loading esm from cjs an async op. This makes it so that you can't do eval circularly. This is a pretty drastic change, as some of your loading is async, so your whole dep graph is async

YK: would node consider disallowing cycles between cjs and esm?

BFS: Disallowing (throwing on attempt) was part of the original proposal

BBR: fine to drop support for circular deps?

JSL: Circular dependencies are actually very common with require. We cannot get rid of that. There is something to be said that, once we do an import, that we can't do a circular dependency back to require; maybe we can get rid of not allowing that

DH: This is not as drastic as getting rid of cycles altogether.

MRS: at scale?

BBR: Packages can actually be circular

MRS: essentially opting into once you have an import?

DD: Not the deps

DH: only within one package, if cjs package and want to migrate to esm: must migrate all within the package

DD: How does npm install circular package dependencies?

JS: It flattens the loop

DD: It would be interesting getting data on circular dependencies in npm packages

MRS: npm3 makes this worse by circularly depending on things flattening implicitly

JSL: There are multiple problems: When you do change the exports (insert explanation)

BFS: The two things which come up the most for Node CTC:
    - Named imports being supported in whatever fashion for `import <named thing>` from CommonJS
    - Can we do something synchronously? require(ESM) synchronously returns the module namespace object
That's mostly what this is about.

JSL: We could implement the spec as is. But this would make some compromises for the usability. With the current spec, these things wouldn't work.

DH: Design constraints:
    - It needs to be possible to import named exports from CJS
    - require(ESM) needs to synchronously

JM: Are these technical needs or ecosystem needs?

JSL: These are ecosystem needs. Babel today can do these things. Those users will want to be able to not change their code. If we say that doesn't work, we're violating a concern.

BB: People won't want to upgrade if they don't get synchronous `require`

DD: Some of these things are up for debate; maybe it doesn't need to synchronously return

JSL: We could also let require this return a Promise

BM: Async is a way to get out of these issues, so you get out of "the zebra striping problem".

(Do we need to be able to import CommonJS from EJS?)

JSL: Maybe we could sell, if it's a CommonJS, we can't import it.

MRS: That's easier to sell to Node people, but it's probably not what you want if you're an advocate of ESM. This will make the transition to ESL a hard sell for new users.


YK: any upgrade to esm, must break back compat.

JHD: a major semver release

DD: talking about named exports? If to make it work it would be an object not bindings? That's not a route we want to go

MRS: We're going to have mix of these two module systems for ever

DD: So, then do we want to get rid of static constraints?

DH: Do not want to throw away the guarantees from static constraints

AWB: With babel's loose interpretation of ESM, you're able to take a CJS module, apply its semantics, and it mostly works

BFS: It uses CJS under the hood, with ESM syntax

AWB: In the spirit of migrating, maybe just do exactly what Babel does?

BFS: are you suggesting we use the syntax of ESM, but not the semantics?

AWB: transpilation

YK: What node is discovering, esm and cjs is one big graph, other mdoules not considered

AWB: Babel translates ES module binding semantics into CommonJS value semantics

(discussion re: bridging from cjs to esm)

AWB: Not just syntax, fundamentally different semantics

BFS: But community things about modules as CJS

DH: concrete level: live bindings, aliasing

?

DD: Adding new properties or deleting old properties

YK: Changing exports by mutating properties

JSL: People mutate the object

AWB: With binding semantics, you can't look at a binding that hasn't been initialized. With value semantics, you look at everything as properties, you may see things as undefined

JSL: The community would really want named imports

BFS: We are here to discuss the problem. For timing, we have fixes, for named imports, we are here to discuss

JM: Sounds like we're going to break Babel somehow. We should be discussing how we will break Babel, but rather what's the way to break Babel that's minimally invasive.

YK: Could we make the exports object the default one, and sometimes make some of the bindings get additional redundant names?

DRR: as soon as named export plucking, make it non-trivial to move from cjs to esm. as soon as switched, one of two naive approaches.

https://github.com/nodejs/node-eps/issues/26#issuecomment-230572661

- (I'll ask Daniel to fill this in)
- instead of assigning `module.exports`, I'll do `export function() {}` over and over


JM: Third option, if there's no default export, Node could create one

MRS: It already does

YK: Maybe we could ask users to run a tool when upgrading

DRR: It would be hard to get the tool to be run

MRS: This would be a Python3-style incompatibility

BFS: skeptical that we can put in loader?

MRS: vast majority of modules will not be upgraded, more worried about these and users having expectations that they are

BBR: allow two different entry points, if package maintainer wants to do that?
- Or a tool that requires it, looks at the exports and creates a wrapper?

BFS: Not sure?

BBR: We accept that there is no automatic transition

MRS: We want to avoid module authors doing any explicit work

BFS: If default is

DRR: (fill in point)

DH: important to look at named imports and exports that don't change, vs. do

MRS: (spoke to fast for me to follow, but basically something about `module.exports = function() {}`?)

BFS: If we had a way to observe mutations, we may be able to track them, but it's not clear how we would do that

YK: Empirically, most modules don't do mutation.

MRS: Module authors will get bugs reported to them that claim the issue is the new version of Node.

AWB: It's clear that all of the CJS and ESM lumped together will not work perfectly, but we can example things for use cases. Some may be automatic, others for tools, others impossible

MRS: We are trying to make these tradeoffs, but we want to make them in a sane manner; we want to look at whether which things would break the spec, or break what things on what end. We think users have a reasonable expectation to be able to do named imports from CJS modules. We will have to sacrifice some of the linking features in ESM, since Node's load cycle is a big block. We need to be able to break the tradeoff without violating the spec.

YK: approach, get as close to the spec as possible, and come back to the committee with concrete points that need to be fixed.

BFS: [Hoistable fix slide]


![](https://i.gyazo.com/5f8b121af6cf3742ea6d81e0f1f6ac64.png)

BFS: you currently have access to calling the functions defined in a module even if you never evaluate it at all. In this proposal, that behavior would be removed, and you'd only get the functions if you really do it.

AWB: introducing new hypothetical API, need to define its semantics

DH: The observable difference is about whether you encounter

AWB: This only happens from circularities

AK: This is all about the interaction between circular dependencies between CJS and ESM


YK: Why care if esm can or cannot see cjs

BFS: We want a single module system that can be used for ES


I'm unable to type fast enough to keep up with this. Its hard to tease out the point when people start and stop statements mid-statement.

I want to explain, I'm going to, Here's how I think we can explain, let me unpack (interrupted)

DH: [suggesting some design where we "delay validation" of imports across module system boundaries]

AK: That would be a big change; it's hard to understand what that would mean.

DH: We may want to insert a lot more dynamism to solve this issue

MRS: How should ESM -> CJS -> ESM work?

CP: you would have a couple stripes when crossing the boundary

DH: That's why it's called zebra stripes

-----

(break)

BFS: Linking is very dynamic. The popular npm module "meow" relinks its parent. Used for CLI. When you require it, you get a new particular module per importer, which gives a modified version of it. We may need to revisit linking to support this.

WH: What does this achieve?

BFS: This lets you tool out your CLI without knowing anything about your dependent. It lets your dependency learn about your module by reading its package.json.

BFS: [Named imports slide] ESM cannot do named imports from CJS dependencies without mitigations. Our proposal is to hoist evaluation of the CJS module up to the linking phase.

![](https://i.gyazo.com/58ca70760c349d34ffa72d156e83b032.png)

JSL: No matter what we do, we will break Babel somehow, the question is just how.

BFS: In our current proposal, we would take a snapshot of the exported properties of the object and export those names. We had considered more flexible behavior, but it seems unworkable.

CP: How many people are using this?

JSL, MRS: Some? It's unclear how many rely on it.

![](https://i.gyazo.com/abf56ad5f940a8f89b19e96025e548b3.png)

MRS: We could say that it just doesn't work properly if you import it as ES6.

BFS: Common on npm: "import {Component} from 'React'".

ESM Doable needs
- Context:
    - Remove existing "magic" variables
    - Built-in module like `import {url} from 'js:context'` to get these variables -- defer to iterate on details, relates to discussion in Portland
    - Early errors from non-existent context variables

- Hooks:
    - Need to ensure hookup prior to

- Some kind of loader spec, maintaining invariants of es262. May be related to the loader spec.

----- Discussion
Context syntax details

BT: There was earlier discussion about import.context which would be a grab-bag object for these things like these, championed by Dave Herman at the Portland 2015 TC39 meeting

DE: If you want early errors, rather than getting undefined, then we could have `import.url` rather than `import.context.url` which would have an early error if you did `import.foobar`.

DD: It is important for this to be host-extensible and not introduce desktop concepts to the web

JSL: Yes, there should be compatibility between Node and the Web, and we'd be open to trying to move away from Node-specific APIs.

MSR: For extensibility, there are various cases, bundling loader, etc. These may hook into this in various ways.

YK: I'm concerned about compatibility with __filename__ and __dirname__

BFS: Although the spec would allow it, we will not modify the absolute URLs. The main thing we would need is import.url; we may want another path for CJS metadata, but no other properties shared between environments.

DH: I'm skeptical

MRS: dirname may be useful for a case where you have templates that you want to load from the directory where the JavaScript file is

DD: This could be based on require.resolve within the Node ecosystem

DH: In the loader spec work, there have been cases where import.url would not be such a clean thing to expose--for example, there could be two names that correspond to the same module.

import.resolve is another proposal for a pseudofunction, taking a string literal or possibly a runtime string value, for resolving the absolute, rather than relative, path which gives a more canonicalized way to reach the module, which would also be a thing that could be passed into import.

Generally: There is agreement in the room that getting the url and having a way to resolve an import into a url are important problems, and some subtle questions remaining about whether it should be a built-in module or pseudoproperty, as well as other details.

DH: New interoperability linking suggestion: The validation to linking would not always be performed statically, but rather dynamically when hitting a CJS module, and in that case, deferring the invalidation until the beginning of the execution of the top-level ESM module body. The next part is, what does the dynamic validation look like. One option is, we preserve live bindings from CJS, and the other option is a snapshot. The latter option guarantees nothing disappearing, but this loses the aliasing semantics of ES6. This is all for the case of importing a CJS from ESM.

BFS: There's a difference between snapshotting the list of property keys, and snapshotting the values of properties. I have proposed doing a live binding to the list of property keys which are available as one is exported from a CJS module after the initial evaluation, but to have bindings that are live from the CJS object to the module namespace object or direct usages

AK: The Babel version does have some notion of live binding [because it translates named lookups to member expressions on the exports object]

BFS: e.g., used in Promisify.all. Changing the values is much more common than changing the keys.

WH: Trying to pin things down. What is the specific evaluation order of an ESM module A importing from an ESM module B, and what exactly changes if B were a CJS module instead?

AK: [described DH's previous proposal involving delaying resolving bindings imported from CJS into an ESM until after CJS evaluates during evaluation]. Example:

// a
import {foo} from "b";
import {bar} from "c";

// b
export let foo = 1;
console.log('hello');

// c
console.log('world');
module.exports = { bar: 2 }

Instantiation of a causes instantiation of b, but because c is a CJS module we defer its "instantation" till later (and in the meantime put the "bar" binding in a into TDZ)
Evaluation of a immediately causes b to evaluate (before evaluating any of the statements in a), then c to evaluate, and after c evaluates we can complete linking of a to c, thus initializing "bar" to 2. If c failed to export "bar", then an error would occur at this time (before any of a's statements execute).

DH: Another possibility, more ambitious: We may be able to allow cycles, based on some reordering. Disallowing cycles would be an adoption hazard. The proposal here would require the earlier modules to fully resolve before the later modules come.

JSL: Tools can create cycles that didn't exist

AK: How?

MRS: A downstream dependency may end up adding a dependency edge to something that uses it very indirectly, and a module in the middle of this cycle might not know about this but be affected

AK: Cycles would not work with the idea I was describing before as requiring the ESM from the CJS that imports it would hang, as require is synchronous and wants a fully-formed answer immediately. Options include CP's making the namespace object partial, or returning a Promise, or Dave's changing the evaluation order.

[AK: lots of discussion about a cyclical dependency graph involving CJS and ESM modules; q: how does evaluation order change? a: in several ways. q: do we know anything about the shape of the ESM modules themselves? a: not if there are StarExports that cross that boundary]

Prohibit export* of a CJS module from an ESM module.

BFS: We shouldn't return different shapes of modules at different times, e.g. if an ESM module imports a CJS module while CJS hasn't finished evaluating

JSL: We do support that in CJS right now, as a side-effect of how require works

AK: It should be a dynamic error to try to import * from a CJS module if that module is in a purgatory state

AWB: Or we could relax the immutability of module namespace objects in a case where the imported-from module is dynamic. The immutability was mostly for optimizability.

AK: Couldn't there also be security issues with allowing a namespace object to change after creation?

AWB: With everything being ESMs, we can do static resolution all the way down to the base binding. We can't necessarily do that when we have dynamic CJS modules in the middle there. We have to stop at that point. Seems like that requires a spec change. Ultimately, I think TDZs take care of it, but at present, in the ES spec, we assume that we can go all the way to the end, as opposed to going through multiple steps.



## 11.3.a import()

(Domenic Denicola)


https://github.com/domenic/proposal-import-function

DD: Presently, all module loading is done statically, top level. There are cases where you absolutely need to have conditional imports. There are many common use cases. Need to dynamically load a module, with a string. Returns a Promise for a module namespace object. The proposal keeps with out general stance of keeping proposals small; this is mostly syntax plus calling out to embedder hooks.

AWB: Does the occurrence of `import` turn the script into a module?

DD: Initially, I thought to restrict it to modules, but no reason to restrict it.

BFS: Many reasons to include for use in Node

DD: Good way to bootstrap into modules

AWB: Why special form, not a function?

BFS: To give you a context

DD: Want to be given a module specifier, e.g., for some embedders, a relative path which is resolved based on where you're calling this from.

https://github.com/domenic/proposal-import-function#an-actual-function

https://github.com/domenic/proposal-import-function#a-new-binding-form

DD: This is better than inserting `<script type=module>` tags dynamically because it's based directly on module specifiers, easier to use, doesn't pollute DOM, etc. Not introducing a new binding form.

DD: New embedder hook, HostFetchImportedModule (runtime equivalent of [[RequestedModules]])

WH: `import(` is not currently legal, so there's no ambiguity with import declarations

RW: Channeling DH from three years ago: `import(` creates confusion because it looks like a function but isn't a function.

DD: This is a syntactic form that's function-like. super is a prominent one. Also, you can do (x => import(x))

RW: That's a good precedent to cite for this (w/r to "it looks like a function, but isn't actually a function object")

```js
Promise.all(["a", "b"].map(name => import(name)).then(() => ...)
```



BFS: To clarify, even in Node, it would return a Promise

DD: Even if Node wants require to be synchronous, asynchronous background loading of modules is useful, e.g. lazily loading things from JSDOM.

MRS: In Node, we'd probably still do sync I/O and just return a Promise

BFS: Can still use require to _basically_ this. The advantage to load the dep graph in a non-blocking way was explored via `require.async()` (pfft. whoops)

AWB: I was initially skeptical but like this proposal. Good for scripts, including for using built-in modules from scripts. Though you may want built-in modules to resolve synchronously.

AK: But it may take a long time to load the built-in module and want it to be asynchronous

AWB: Also, we could add the import statement to scripts

CP: Do you plan to allow require within module source text in Node?

BFS: Probably we'll have some way to get ahold of require, but we'd really encourage people to use import.

BB: Maybe you'd import require from a built-in module.

AK: Why is there a new hook for HostFetchImportedModule?

DE: Isn't this like adding something to [[RequestedModules]] dynamically?


#### Conclusion/Resolution

- Stage 1 acceptance
- Becomes Stage 2 at the end of the day tomorrow, noting that we are seeking feedback from DH and YK which may affect this.
- Reviewers:
  - Caridy Patiño
  - Allen Wirfs-Brock
  - James Snell



## Revisit System.global => global

JHD: Reviewers and editor have signed off on the spec text.

- Willing to make it `enumerable: true` pending implementor feedback

JHD: Hope to have as many browser implementations before Stage 4


#### Conclusion/Resolution

- Stage 3 acceptance


## 11.2.b Intl.Segmenter

(Daniel Ehrenberg)


DE: Unicode defines breaking properties: grapheme, word, line, sentence breaks.

![](https://i.gyazo.com/57e77bf6676eba9de26ff52fcf6bde5f.png)

- Want to remove `Intl.v8BreakIterator` (sorry about that!)


![](https://i.gyazo.com/e210324180f4fd426fe9104e3f058608.png)


```js
// Create a segmenter in your locale
let segmenter = Intl.Segmenter("fr", {type: "word"});

// Get an iterator over a string
let segmentIterator = segmenter.segment("Ceci n'est pas une pipe");

// Iterate over it!
for (let {index, breakType} of segmentIterator) {
  console.log(`index: ${index} breakType: ${breakType}`);
  break;
}
```


Short-cut accelerated API:

```js
let segmentIterator = segmenter.segment(
"Ceci n'est pas une pipe");

// next() returning undefined
segmentIterator.advance();

// index of current break result
segmentIterator.index();

// breakType of current break result
segmentIterator.breakType();
```

WH: Is the iterator the only API you're proposing? If you just wanted to turn a string into an array of words in that string, is there a quick way of doing that?

DE: For now just planning on providing the lower-level API. Things like that can be built on top of it.

JSL: Only works if you have full ICU (`Intl.v8BreakIterator`), ideal if this can be made to work with small ICU

WH: What does this do for indices at which there are no breaks? Does it have a concept of "no break", or does it just omit them from the iterator output?

DE: It omits them.


WH:

```
Hello, "world"! \n\n
```
Where do the word breaks go here, and are the decisions configurable?

DE: Explained in http://unicode.org/reports/tr29/ (UAX29)

WH: Might be nice to also include a segmenter that indicates character boundaries; i.e., everywhere except between UTF16 surrogate pairs.

AWB: Intl standard-optional, not standard-mandatory
- Is this functionality something that you want tied to the optionality?


BT: grapheme doesn't require a lot of data

DE: The advice is: callout to ICU or you'll do it wrong

BT: is Segmenter based on UAX29?

DE: Both UAX29 and UAX14

Mixed discussion about ICU data, etc. Dan answers all questions.

SYG: cannot reverse a string and get same breaks

WH: Reversing doesn't make a difference. In either the forward or reverse case you may need arbitrarily long lookahead and lookbehind to determine the breaks. For example, there are emoji grapheme breaking rules that state that if you have an even number of characters preceding your position then you have a break, but if you have an odd number then you don't. So you need to consider the input string as a whole.

WH: UAX29 lists lots of configuration sub-options for different kinds of breaking choices. Is it your intent to support those?

DE: Yes.

JSL: ideal to get rid of prefixed.

#### Conclusion/Resolution

- Stage 1 acceptance
