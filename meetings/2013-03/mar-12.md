# March 12, 2013 Meeting Notes
-----

John Neumann (JN), Norbert Lindenberg (NL), Allen Wirfs-Brock (AWB), Rick Waldron (RW), Waldemar Horwat (WH), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Luke Hoban (LH), Matt Sweeney (MS), Doug Crockford (DC), Yehuda Katz (YK), Brendan Eich (BE), Sam Tobin-Hochstadt (STH), Alex Russell (AR), Dave Herman (DH), Adam Klein (AK), Edward Yang (EY), Dan Stefan (DAS), Bernd Mathiske (BM), John Pampuch (JP), Avik Chaudhuri (AVC), Theresa O'Connor (TOC), Rick Hudson (RH), Andreas Rossberg (ARB), Rafeal Weinstein (RWN), Mark S. Miller (MM)

-----

## Opening

## Introduction

## Logistics

## Adoption of Agenda

Mixed discussion regarding scheduling over the course of the 3 days.

Approved.

## Approval of January 2013 Meeting Notes

Approved.


## Adobe

JP: Here to help accelerate the ES6 spec, positive motivation. Excited about Modules, concurrency, debugging and profiling specifications.

BM: Background as trained language designers and implementors and here to help.

JP: Also excited about asm.js

BM: Not sure about the spec status/prospects of asm.js.

Edit (2013-03-22)
http://blogs.adobe.com/standards/2013/03/21/adobes-ecma-tc-39-involvement


## 4.9 JSON, IETF changes
(Presented by DC Crockford)

Currently, JSON is an RFC, informational, the IETF version will be an internet standard and there is a minor correction that affects ECMAScript.

The use of "should" in 15.12.2

AR: What is the motivation of the change?

DC: The change involves the mistake of using "should" w/r to multiple same-named keys error. Multiple same-name keys are invalid and _must_ throw an error (vs. "should" throw an error)

LH: This is a breaking change

DH: The worst being the use case of multiple, same-named keys as comments

DC: That's stupid

YK: That's based on on your recommendation to use a keyed entry as a comment, so people naturally used the same key, knowing they'd be ignored.

DC: I would certainly never recommend that practice

YK: It was a side-effect

AR: Which key is used now?

AWB: The last one wins.

AR: Is that the root of the security vector?

DC: Not in ES, but in other encodings

AR: Order matters, unescaped content that follows...

DC: The current spec says "[they should not]", but will say "[they must now]"

YK: Let's define an ordering and make it cryptographically secure.

DC: (recapping to Mark Miller, who just arrived)

MM: You can't do that.
(laughs)

MM: You can't change "should" to "must"

YK: Agreed, you cannot change JSON, there are too many JSON documents in existence.

MM: Agreed.

AR: It's possible to ignore this change?

DC: Yes

DH: Then why are we creating a dead letter?

MM: ES has a grammatical specification for validating and parsing JSON. Anything that is not conformant JSON, would not parse. This change loses that property.

DC: Or we don't change the spec

MM: The way that you properly reject our favorite fixes, I think you should apply to your favorite fixes

DC: I'll consider that

AR: There is considerable opposition to this change

DC: Two choices...

1. Make it an error
2. Continue to take the last one

DC: Decoders have license to do what they want with non-conformant material. Encoders _must_ be conferment to new changes.

MM: Our current encoder conforms...

AWB: I don't think it does... reviver/replacer

MM: No, can only apply objects instead of the original objects.

AR: Did not realize the production/consumption distinction of this change.

WH: Supports this change. ECMAScript is already conformant because it never generates duplicate keys.

MM: With this change ECMAScript would have two unappealing choices:
A. No longer be a validating parser (i.e. a parser that doesn't allow any optional syntax or extensions, even though extensions are permitted by the JSON spec).
B. Do a breaking change by throwing errors when seeing duplicates when parsing.

#### Conclusion/Resolution

- Revisit this, after DC has made a final decision.
- FTR: Majority opposition, no consensus.


## 4.12 StopIteration/Generator
(Presented by Dave Herman)

https://github.com/dherman/iteration-protocols


DH: ...Confirms that there is lack of understanding for Generator "instances"

MM: Clarify terminology

DH: Generator objects are instances of Iterators, in that they have a `next` method. The current design is based on a thrown `StopIteration`

C#, Java, Python apis for comparison.

My opinion, a single method is win.

Concrete proposal:

- The benefit of a single method
- Not based on exceptions
- Compatible with Generator semantics

Iterator API object has a single method:

```js
{
  next() -> { done: false , value: any }
          | { done: true[, value: any] }
}
```

b/c generators can return an argument, if you're using a return value

```js
function* f() {
  yield 1;
  return 2;
}
```

for `for-of` this doesn't matter, but for libs like q, task.js this is useful for pause and resume with value

If we didn't care, the result value can be omitted

This API was pleasant to write and works nicely with existing idioms

MM: Requires allocation for every iteration?

DH: Yes, will still need the object allocation, but

WH: Does next return a fresh object? or can reuse the same?

DH: Can reuse

AWB: For every iterator in the spec, we need to specify a fresh or reused object?

DH: Yes.

YK: The current API, able to do yield ...returns a promise...

DH: Can still do that, this change is internal and w/r to performance, this should be highly optimizable.

AWB: Anything that uses a method based implementation, will be more optimizable through calls vs exception.

DH: I've never seen an iterator API that didn't have some performance issues

AWB: (refutes) Any method based approach can be better optimized over exception based approaches.

DH: I don't have a solid performance story, but the feedback I'm getting is that there is negative concern about the StopIteration approach, whereas this approach mitigates these concerns. Issues arise when dealing with multiple iterators

WH: If you try throwing StopIteration across iterators, it will be caught

AWB: Or it won't

EA: Surprising: If any function throws a StopIteration, it will jump out of the for-of.

AWB: I noticed this in the examples shown in the github repo

WH: Why I'm in favor... Throwing StopIteration across places where no iterators exist and if code is refactored so that an iterator is present, you'll experience unexpected behavior. (This suffers from the same capture flaws as Lisp's old dynamic scoping.)

LH: When we last talked about this, we whiteboarded the priority order. for-of is the primary case, generator authoring is the secondary case. Cases affected by this: direct API consumption as third and direct API authoring is fourth

If we're really sure the engines will do the work to optimize these things?

A. will this slow down implementation?
B. won't be willing to implement due to poor performance?

AR: No implementation wants to ship something that will potentially be slow

LH: Of course, but StopIteration has to go.

MM: One allocation per loop

WH: So is this

MM: Only if you reuse the record

LH/WH: Of course and that's what you want

MM: Then, as Allen said we need to specify this

DH: My inclination would be to use a fresh object each time

AWB: ...you know the first time, because it's the first time that next is called,

MM: My proposal is that you provide stop token as a parameter of next(stop), every time. next(stop) would return either the next value or the stop token.

DH: (clarifying) "iteration" is one time around the loop. "loop" is the entire the operation.

WH: It's possible for next(stop) to cause havoc from one iteration to another by caching one next call's stop parameter and returning it from a different next call.

[Someone had also presented a variant of the proposal where <stop> was a field on the iterator instance instead of an argument to next.] WH: This would create funky failures if, for example, you had an iterator that did a deep traversal of an object tree and said tree happened to include the iterator instance.

MM: In order to not allocate on every iteration, you have specify (???)

MM: A new stop token would be generated per loop.

WH: What's a loop? This gets confusing when you have iteration adaptors.

AWB: If the client passes in the token on next(), then it's the client's burden

MM: Anything that's unforgable, unique, or itself side affectable.

DH: Is there support for Mark's API?

RH: If you use Mark's API, overtime...

MM: My API reuses the object for the iterations of the loop, by passing it back in as an argument to next()

RH: To avoid the cost of allocation?

MM: Yes, but only as a token

EA: You can have a return value in a generator so the object passed in needs to be mutated to include the return value in case of end of iteration.

MM: That is a downside of this proposal, where StopIteration would carry the value.


DH: (examples of the two proposals)

Dave's
```js
{
  next() -> { done: false , value: any }
          | { done: true[, value: any] }
}
```
Marks's
```js
{
  next(X) -> any | X
}
```

AWB: (suggests an alternative: pass an object to next, on which next sets the result)

STH: ...is hostile to implementors and user code.

ARB: That's the C-style of doing it.

WH: Suppose the iterator takes an object and returns all the properties, but calls on itself?

DH: Mark's proposal is broken, because it doesn't work with return values of generators.

MM: Agreed.

DH: Don't think that we're approaching consensus, but don't let your idea of perfect cloud judgement. I'm asking engine implementors if this is appealing. The concern over StopIteration is real.

AWB: This is certainly better then the current plan of record

AR: Agree.

BM, JP, AVC: Agree

BM: This is also future proof and works well with concurrency and the semantics are sound. It's also easy to implement and optimize.

AWB: All spec iterators/generators _must_ specify a reused iterator or fresh

MM: (further support for AWB's claim)

DH: Not sure if we're trading short term wins for long term losses. Are there long terms

ARB: There is another secondary effect that it encourages better GC

AWB: This shouldn't be a problem for a good GC

MM: I'm really only concerned about the loop aspect

AR: We have the tools to work with hot loops

WH: Alex's point about the escape valve is key

DH: Not discounting the needs of the developers/user code. The method API is appealing, vs. StopIteration

RW: Agree.

DH: (Shows example of C#)

AWB: The third use case that Luke gave, using an iterator and the fourth use case, creating an iterator.
...This API is more complex for user code
...More ways for client code to go wrong

BM: Disagree, this is a safer.

DH: Don't get out of sync. Argue that the Java and C# API are too error prone.

BM: Agree, this is actually superior to the Java and C# APIs

ARB: This is actually the path you'd want in typed languages, minimizes state space

DH: I want to see a better overall interface for iterators and generators, without jeopardizing the acceptance.

MM: In favor of this API, if the implementors are not objecting. Although I don't like the API itself.

DH: Agree, I prefer the pure, stateless proposal

AWB: If an object is passed an argument, the object is used as the value bucket.

DH: Still mutates the object

AWB: But it mutates an object that you've explicitly provided

BM: The issue is not the allocation, but that you have to go to heap at all.

ARB: If you do this pre-allocation thing, it might be observable

BM: But that's the case either way

DH: Is the mutable version going to harm optimization?

ARB: Yes: the object may be shared, in which case mutation may become observable from the distance, and cannot be optimized away

RH: If the object being mutated escapes to an old mutation, this kills potential optimizations.

DH: Seems like consensus on the pure, stateless version of this:

```js
{
  next() -> { done: false , value: any }
          | { done: true[, value: any] }
}
```


JP: "more" vs. "done"?

(can discuss further)

#### Conclusion/Resolution

- Rough agreement (between those present) on pure, stateless version of:

```js
{
  next() -> { done: false , value: any }
          | { done: true[, value: any] }
}
```
...To replace StopIteration

- Always has an own property called "value":

```js
var i1 = (function *f() {
  return;
})();

"value" in i1.next();

var i2 = (function *g() {
})();

"value" in i2.next();

var i3 = (function* h() {
  return (void 0);
})();

"value" in i3.next();
```

- Built-in iterators should be specified as returning a fresh value.
- See: https://gist.github.com/dherman/5145925
- Without Brendan, a champion of iterators and generators, don't have full consensus



## 4.2 Modules
(Presented by Dave Herman, Sam Tobin-Hochstadt, Yehuda Katz)

See: https://gist.github.com/wycats/51c96e3adcdb3a68cbc3

Slides (PDF, will prompt download): http://wiki.ecmascript.org/lib/exe/fetch.php?id=meetings%3Ameeting_mar_12_2013&cache=cache&media=meetings:modules-march-2013.pdf

DH: We're committed to making this happen for ES6, it's too important to miss and I'm going to do whatever it takes. Please remember that you can always bring specific issues directly to us (DH, STH, YK).

...Not going to spend time on syntax. Focus on Module loading semantics to address any outstanding issues, spent last two months working with Sam and Yehuda and polling community leaders to get use cases to work with.

Recognize that some use cases may not be covered, but that's ok.

### Module Loading Semantics

...Currently a notion of having a string-name registry

...Move towards having a separate space for module registration

Minimalism - IN
Nested Modules - OUT

```js
module "libs/string" {
  export function capitalize(str) {
    return (make the string capitalized)
  };
}

module "app" {
  import { capitalize } from "libs/string";
}
```

The registry corresponds to a `Loader` which creates a `Realm`

MM: But you can have more then one Realm

DH: Think of `Loader` as a virtual "iframe", as a concrete way of describing it. When you create an "iframe", you get a whole new global object with it's own DOM. A `Loader` creates a "sandbox" global that can share system intrinsics.

*The `System` loader.*
```js
var capitalize = System.get('libs/string').capitalize;
var app = System.get('app').app;
```

*Custom loader:*
```js
var sandbox = new Loader({ intrinsics: System });

sandbox.set('app', System.get('app'));
sandbox.get('app') === System.get('app'); // true

sandbox.eval("import { capitalize } from 'app'; capitalize('hi')"); // "Hi"
```

Acts like a map, `.get()` will get the module

[Module pipeline diagram]

                 module name
                      |
                      V
                  normalize
                      |
                      V
                   resolve
                      |
                      V
                   fetch
                      .
                      .
                      V
                  translate
                     |
                    V
                    link

Produces one of three values:
 * undefined: default linking behavior
 * Module: registers module instance object directly
 * {imports : [ModuleName], execute : (Module ...) -> Module, exports : [String]} : invokes execute to produce module, exports optional


...

### Use Case: Module Paths
```js
System.ondemand({
  "http://code.jquery.com/jquery-2.4.js": "jquery",
  "backbone.js": [ "backbone/events", "backbone/model" ]
});
```
...is sugar for...

```js
System.resolve = function(path) {
  switch (path) {
    case "jquery":
      return "http://code.jquery.com/jquery-2.4.js";
    case "backbone/events":
    case "backbone/model":
      return {
        name: "backbone.js",
        type: "script"
      };
  }
};
```

MM: This is changing the behavior only at the system `Loader`?

DH: Yes.

STH: This is the API that several people indicated was important during the last meeting.

### Use Case: ...?




### Use Case: Compile To JS

```js
 System.translate = function(src, options) {
  if (!options.path.match(/\.coffee$/)) {
    return;
  }
  return CoffeeScript.translate(source);
}
```


LH: Is this updated on the Wiki?

DH: Will update. Much of the changes are about refining API and making common things easy and most things possible

### Use Case: Custom AMD

Creating custom translations for extensions...

```js
import { data: foo } from "text!foo";

```js
System.normalize = function(path) {
  if (/^text!/.test(mod)) {
    return {
      normalized: mod.substring(5) + ".txt",
      metadata: { type: "text" }
    };
  }
  // fall-through for default behavior
}

System.translate = function(src, { metadata }) {
  if (metadata.type === "text") {
    let escaped = escapeText(src);
    return `export let data = "${escaped}"`;
  }
  // fall-through for default behavior
}
```

WH: Why would you want to do it this strange way (escape text only to then eval it) instead of just letting the text be? [It feels kind of like the folks doing eval("p." + field) instead of p[field]].

DH: (explains James Burke's summary of static asset loading)

### Use Case: Importing Legacy Libraries
(Specifically, not libraries that use CommonJS or AMD, but libraries that mutate the global object)

```js
var legacy = [ "jquery", "backbone", "underscore" ];

System.resolve = function(path, options) {
  if (legacy.indexOf(path) >= -1) {
    return {
      name: path, metadata: { type: "legacy" }
    };
  } else {
    return {
      name: path, metadata: { type: "es6" }
    };
  }
};
```

```js
function extractExports(loader, original) {
  var original =
    `var exports = {};
    (function(window) { ${original}; })(exports);
    exports;`

  return loader.eval(original);
}

System.link = function(source, options) {
  if (options.metadata.type === 'legacy') {
    return new Module(extractExports(this, source));
  }

  // fall-through for default
}
```


LH: Once we ship this, we want people to start using modules as soon as possible. How?

YK: Realistically, a "plugin" for something like require.js will have to provide an ES6 "shimming" mechanism.

LH: To paraphrase, we're providing the primitives that make the common cases easy to overcome. What about the legacy libraries that won't be brought up to date? Can we provide a simple mechanism?

DH: No, legacy libs that just expose themselves to the global object, without any sort of shimming mechanism are out of reach

LH: Thank you, that's a sufficient answer

### Use Case:

Import AMD style modules and Node style modules. Effectively, ES6 module importing from non-ES6 module.

There is no way to tell

```js
System.link = function(source, options) {
  if (options.metadata.type !== "amd") { return; }

  let loader = new Loader();
  let [ imports, factory ] = loader.eval(`
    let dependencies, factory;
    function define(dependencies, factory) {
      imports = dependencies;
      factory = factory;
    }
    ${source};
    [ imports, factory ];
  `);

  var exportsPosition = imports.indexOf("exports");
  imports.splice(exportsPosition, 1);

  function execute(...args) {
    let exports = {};
    args.splice(exportsPosition, 0, [exports]);
    factory(...args);
    return new Module(exports);
  }

  return { imports: imports, execute: execute };
};
```

BM: Could you postulate that exports and

DH: You could but, unrealistic

BM: Could be optimizing for module provider, but not consumer...
...

MM: What does the `Module` constructor do?
DH: Copies the own  properties of the given object.

MM: What is the job of the `System.link` hook?

STH: To go from a piece of JavaScript source code to module instance object, translate is string->string.

WH: Is it a `module` or `Module` instance?

DH: `Module` instance object

Take the source code, all the deps, finds all the exports, links them together.

The link hook can return
1. undefined for the default behavior
2. A Module instance, where everything is done and complete
3. An object, with list of deps and factory function to execute at some later time (eg. when all deps are downloaded and ready)

YK: Explains that a two phase system is required whether you're using node, AMD or anything. Now you can use ES6 provided hook.

BM: Optionally specify the list of exports?

DH: Yes.

Conversation about specific example.

MM: Clarify... noting that the positional args is similar to AMD positional args

DH: Yes.

ARB: No static checking for non-ES6 modules?

DH: Yes, it's a hole that can't be filled if we want interop from AMD->ES6 and ES6->AMD (or node)

ARB: Concern about having two imports, checked and unchecked. (implementation complexity concern)

BM: The alternative is to not support AMD and provide only one imports

STH/RW: This is an option, but a worse option.

...Discussion re: static checking for non-ES6 modules

ARB: Every single construct, import, loading etc now has two different semantics to support.

BM: Forces users into thinking about which they need... optimizing for module authors, not module users. The wrong case... otherwise enforce static checking for all module code

AR/STH: Not possible for _all_ existing code

STH: (whiteboard) Indirection via dynamic object makes static checking impossible.

For example, if you write the code:

```js
import { a } from "some.js"
... a ...
```

where `"some.js"` is an AMD library, then there's no static checking, but if you refactor `"some.js"` to be an ES6 module, you automatically get static checking. But if you don't support this use case, then there's indirection:

```js
import { exports } from "some.js"
... exports.a ...
```

And changing `"some.js"` to use ES6 never results in new static semantics.

...Mixed discussion re: dynamic checks vs static checks.

BM: Was under the impression that the dynamic checks might be too late, but it has now become clear that they happen early enough

STH: Cannot create references across `Module` instances to dynamic module code.

MM: the world of JS uses feature detection, on the AMD side... can AMD code feature test?

STH: (refers to an early slide, which shows example of importing module as single object, properties can then be tested for)

MM: (confirms that STH answers Q)

DH: Pause on the Question of dynamic import/export
(Returns to the pipeline diagram)
...The "fetch" hook is the part where you go get the bits

DH:
(Slide: 1. Load and Process Dependencies Diagram)
(Slide: 2. Link)

AR/DH: Note that browsers can provide their own plugin points for the Fetch step

MM: All of the hooks have been executed and there is no user code? If this fails, there are no side effects?

DH: Correct

ARB/STH: During

DH: Modified the registry, but there is an inflight loading happening, when the inflight is finished, it will pave the changes to registry. (last op wins)

ARB: When you evaluate a script that imports module Foo, which runs hooks that in turn import Foo into the module registry, what happens?

AWB: Why are they operating in the same Realm?

DH: It sounds like an objection to modifying the list of modules in the registry by downloading code that modifies the list of modules in the registry...

STH: Imagine we didn't have loader hooks, all you could do was eval and had two XHRs that fetched and eval'ed. We'd still have the same issues that we'd have with loader hooks, it's a problem with mutation and concurrency.

ARB: Agree that the fundamental problem will always be there, but have a problem with shared global object for all modules.

DH: If the same module is attempted to be defined in two places, that's an error and is a bug.

ARB: Only when within the same compilation stage, silent overwriting otherwise.

WH: What if module A depends on both B and C and the initialization of B fails?

DH: C remains uninitialized but present in the registry

WH: This breaks the model. It's not C's fault that its initializer didn't run.

AWB: Mark C as never having its initializer attempt to run and run it the next time it's imported.


DH: Moving to next slide

(Slide: 3. Execute)

Produces "Result"

Note that each step in the 3 parts has an Error path:

1. load/syntax error
2. link error
3. runtime exception

...Mixed discussion re: execution despite exceptions

...Mixed discussion clarifying fetch semantics (1. Load and Process) re: dynamically building URLs to batch load? re: browser knowledge of sources?

LH: What does the synchronous timeline of Slide 1 look like?

DH: All normalize hooks first (need names and locations), then all resolve hooks

### Use Case: Importing into Node

```js
System.resolve = function(path, options) {
  if (node.indexOf(path) > -1) {
    return { name: path, metadata: { type: 'node' } };
  } else {
    return { name: path, metadata: { type: 'es6' } };
  }
};

function extractNodeExports(loader, source) {
  var loader = new Loader();
  return loader.eval(`
    var exports = {};
    ${source};
    exports;
  `);
}

System.link = function(source, options) {
  if (options.metadata.type === 'node') {
    return new Module(extractNodeExports(this, source));
  }
}
```

### Use Case: Single Export Modules

DH: Brought this up 2 meetings ago, had a proposal that wasn't ready, it was shot down. This is something that I'm being told is very important and I agree with them. We can accommodate single exports via design protocols, but the developer community may not like it.

DH/YK: (walk through the `System.link` implementation)

DH: Can, should do better. Goal: Simple syntactic sugar. **It's important, we will address it and we will do so with syntactic sugar**. We will create a means by providing an "anonymous export". We will review the "sugar" at the next face-to-face meeting.

...Recognizes the community frustration regarding lack single/anonymous exports.

...No dissent.

LH: (Questions about how this works with the previously shown use cases)

...

YK: (Shares anecdotal experience from developing the ES6 transpiler that was adopted by Square. Positive experience.)

STH: Updated/removed junk from wiki


LH: Can imports be in scripts?

STH: Yes


DH: There was originally a use case that involved jQuery, we can't satisfy this without breaking everything (there is no way to be ES 3, 5, 6 at the same time)

But...

```js
if (...some detection...) {
  System.set("jquery", ...);
}
```

```html
<!--
once this is loaded, the jQuery module is
registered and available for all scripts
-->
<script src="jquery.js"></script>
<!--
which means all future scripts may have this:
-->
<script>
import { $ } from "jquery";
</script>
```


LH: What about concatenation cases?


DH: (whiteboards example of `System.ondemand`)

```js
System.ondemand({
  "all.js": [ "a", "b", "c" ]
});
```


AWB/STH: (whiteboard)

m.js:
```js
module "m" {
  export let a = 1;
}
```
n.js:
```js
module "n" {
  export let b = 2;
}
```

Needs:
```js
System.ondemand({
  "m.js": "m",
  "n.js": "n"
});
```

If you concatenate?

m.js + n.js = concat.js...

Needs:
```js
System.ondemand({
  "concat.js": [ "m", "n" ]
});
```

Arrays for files that contain multiple things

...

ARB: We're over-prioritizing for concatenation. The language shouldn't be hostile, but should stop at good enough. We shouldn't optimize the design of the language around a secondary concept

AWB: modules are a concrete concept in the language, we need to focus on these as a building block

LH:

STH: The claim that concatenation is going to become a not-important part of the web is ludicrous

ARB: I think that mid-term concatenation will harm performance

YK: Do you think that concatenation will go away?

ARB: In the long term, it might

YK/STH: This is what is ludicrous

...Mixed discussion re: library vs. language

AWB: There is a standard loader, defined by the language

...From Arv:
AR: Joining files to optimize download and compilation

STH: YUI optimized for reality and found that concatting is important

YK: Should Ember ship 100 files?

AR: Any modern library has a lot of files. Apps/libraries are making trade-offs to get good performance.

DC: Caching is not working. Browser will get better.

AR: SPDY will make things better

YK: Even with SPDY, there is a lot of IO

ARB: It is perfectly fine to depend on a tool for concat

EA: We are designing based on concatenation. We should take that out of the picture. We can always write compilers that does the linking.

ARB/LH: With a compiler you can do linking/bundling and existing and future tools can do this.

STH/DH: There will be holes in these.

LH: module "a" { ... } is leading developers down the wrong path

STH: Recommmend doing modules the node style, where each file is a module

YK: AMD developers use a build system that adds the name to the define(). They don't name the modules in their source. The build system names the modules.

MM: AMD experience speaks in favor of a concatenator.

STH: You will get a compile time error if you import a file that contains a module.
...

ARB: How about adding a way to just register a module as a string containing the source of its body as if it was a file.

AR: Then you have to allocate the string
...

AWB: Wants to use module "abc" { ... }. It is a good way to structure code. And you don't want to tie this to your configuration management
...

STH: The strength of the system is that it supports both

ARB: The approach Allen wants is not well supported because it lacks lexical scoping

AR: If we use a string literal we cannot check the code to do prefetching etc

ARB: It is a string so the string only needs to be lexed, then the parsing etc can be paralellized, not so with embedded module declaration
...

ARB: There is no way to not modify the global registry when defining a module.

DH: The file system (in SML) is also a shared registry. The module registry is no different

ARB: Disagree. There is no way to create a local module here

STH: JS has a lot of ways to struccture code: functions, classes etc and modules do not need to fill this role

ARB: More interested in preventing accidents due to name clashes.

...Mixed discussion of module syntax related concerns

DH: Ability to prevent people from using module syntax?

MM: Yes

**STH: For Andreas' concern, look for the names of module declaration strings, check the registry and if any already exist, error.**


...Defining a loader with right hook, prevent the mutation of the registry by anyone that does not have access to the loader

**MM: Satisfied from a security perspective.**

ARB: Would prefer for the default behavior to error, need to be explicit if you want module to override in an imperative manner.

DH: Not opposed to moving towards scoped modules in the future. Just worried about complexities.

ARB: Only concerned about import scope semantics

STH: concern is that polyfills have to use `eval` and then `System.set`

ARB: good to make it clear that polyfills are doing some special

DH: agree with ARB about polyfills

STH: This is something to be deferred without blocking progress, but ok with changing to error to achieve consensus.

YK: agree with STH about consensus, but potentially concerned.

#### Conclusion/Resolution

- Default: declarative form of a module is an error if a module of the same name already exists in the module registry.
- Using  `System.set` to overwrite an existing module is not an error.
- Behavior of errors during module initialization (when some module initializers don't even get started) is still unresolved.
