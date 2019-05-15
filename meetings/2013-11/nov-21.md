# November 21, 2013 Meeting Notes
-----


John Neumann (JN), Allen Wirfs-Brock (AWB), Yehuda Katz (YK), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Rick Hudson (RH), Matt Sweeney (MS), Rick Waldron (RW), Dmitry Soshnikov (DS), Sebastian Markbåge (SM), Ben Newman (BN), Jeff Morrison (JM), Reid Burke (RB), Waldemar Horwat (WH), Doug Crockford (DC), Tom Van-Cutsem (TVC), Mark S. Miller (MM), Brian Terlson (BT), Andreas Rossberg (ARB), Alex Russell (AR), Mark S. Miller (MM)

-----

## Follow Up on IETF JSON WG Communication document

  (review)

#### Conclusion/Resolution

- Unanimous consent


## 4.5 Modules
(Dave Herman, Sam Tobin-Hochstadt)

(request slides)

(fighting Google Hangouts for fun and profit)


DH: Spec draft: Done.
Initial implementation for Firefox, POC for spec: https://github.com/jorendorff/js-loaders


End-to-End Draft Done:

  - Linking semantics
  - Loading semantics
  - Execution semantics
  - Loader API
  - Dynamic: CommonJS, AMD, Node compatibility layer
  - Bonus: literate implementation starting to pass simple tests

DH: there's a compat layer for dynamic import systems. Hope is that in a couple of months it can ship in nightly FF.

EA: is there a license on this?

DH: no, but we'll add one.

AWB: if you're contributing to ECMA, it has to be under the ECMA software contribution rules (ie, BSD license)

AR: can you add a license today?

ARB: how are these files related to each other?

DH: things are extracted from the source, and the short version is that the actual wording is now done. Then next steps are to improve the formatting and work with AWB to reconcile editorial issues.

AWB: yes, this is what we've done with Proxies/Promises/etc. Something we know how todo. if there are normative changes, they'll get resolved.

ES6 Draft

- Updated syntax for new parameterized grammar
- Static semantics done and implemented


DH: stuff that has been through the editorial process are the syntax, the static grammar, and static semantic rules. Don't have a doc dump this morning but can generate one today and send it around.

DH: didn't have a chance this morning to do it yet.

ARB: was only looking at the docx fragments so far...

DH: wanted to talk a bit about the last bits of the semantic cleanups. The distinction between scripts and modules and the browser integration: `<script async>` was a way to allow you to use the module system at the top level. This creates 3 global non-terminals. I say you dont' need `<script async>`.

Clean Ups

- Scripts and Modules


- Three goal non-terminals (Modules, Script, ScriptAsync) is one too many
- Elimintaing imports from scripts simplifies the Loader API—loading is purely about modules
- `<script async>` was a non-start anyway

DH: in additon, the idea of using `<script async>` was misguided.

AR: no, we can fix `<script async>`

WH: we discussed this at previous meetings, what happened to the need for script async?

DH: `<module>` instead. A nicer path forward for the web. Automatic async semantics. More concise than `<script async>`.

- Not part of ECMAScript
- As concise as `<script>`
- More concise than `<script async>`
- allows inline source
- implicitly strict (as all modules are)
- Named `<module>` provide source up front
- Anonymous `<module>` async but force exec





AR: this has real security issues.

YK: this can have other forms -- `<script type="module">`...etc...

DH: the goal here is to come up with the cleanest design we can come up with on the JS side and drawing a sharper distinction between scripts and modules. You get to start in a clean scope. Top-level decls are scoped to the module.

DH: you also get implicit strict mode. And inline source.

AR: this is never going to work in the field. This will violate expectations.

YK: can you show me what's secure today that does blacklisting?

AR: no, but that's not the argument.


`<module>` is a better 1JS

- Better global scoping: starts in a nested scope
- To Create persistent globals, must opt in, by mutating window/this
- Conservation of concepts: no special semantics required for reforming global scope, just a module
- A carrot to lead away from blocking scripts
- still accessible to scripts via `System.import`



WH: Universal parsing is a problem. HTML parsers know that escaping rules are different within a script tag but not within some other random tags such as module.

EA: you can see a transition path that starts with `<script type="module">` and move to `<module>` later

(some agreement)

DH: if `<module>` turns out not to work, we have other options. One of these is likely to work

AR: agree.

Alternatives:

- script module
- script type="module"

DH: benefits include: top-level decls are local. You can persist by opting in (window.foo = ...), but it's not a foot gun via var. No special semantics for the global scope; it's jsut a module. Still accessible via System.import.

```html
<module>
var foo = 1;
</module>

<script>
foo; // undefined.
</script>
```

DH: Recapping the concatenation story.

(didn't we all do this before?)


YK: `<module>` and `<script module>` are morally equivalent

STH: to address issues with `<script async>`, we need a separate entry point. Any of the others listed here address the use cases brought up that `<script async>` addresses.

WH:now you have 3 things

(emphatic disagreement)

DH: there are 2 terminals in the global of JS in this world, not 3. `<script>` and `<script async>` have the same terminal production

DH: we've had a hard time working through the global scoping semantics. We don't need special semantics for a reformed global scope. Deflty avoids implicating global semantics. Just write modules.


ARB: you still need the lexical contour, no?

DH: yes, but lets talk about that at the end.

DH/YK: there's an unnamed module loading timing that's before `<script defer>`

EA: you can't wait till domcontentloaded to run stuff. Need stuff running sooner.

ARB: Multiple module elements?

AR: Document order

EA: I jsut don't want us to cripple the system for this use-case, e.g. the HTML5 doc.

AR: you need both.

YK: a sync attr seems fine.

DH: we can't operate as if the web didn't exist, but we can't define HTML elements, so we need a story but not the answer.

BE: partial progress if possible

DH: lets talk about the loader API. Will send out slides soon;


Loader API
- https://gist.github.com/dherman/7568080


```js

var l = new Loader({
  normalize: n,  // Promise<stringable>
  locate l,      // Promise<address>, formerly "resolve"
  fetch f,       // Promise<source>
  translate t,   // Promise<source>
  instantiate f, // Promise<factory?>, formerly "link"
});
```

address -> where to find this
source -> the source text

WH: what's fetch for?

DH: gets the bits that are stored. The translate hook provides ways of transforming bits into other bits.

YK: `instantiate` is the bridge for legacy module forms: amd, node, etc.

WH: What exactly is promised in each step?
(see gist)

Core API

```js
// Loader API
// Promise<void>
l.load(name[, opts]);

// Promise<void>
l.define(name, src[, opts]);

// Promise<Module>
l.module(src[, opts]);
```

WH: If load is called twice, does it reuse the same module?

DH: Yes

WH: Concerned about options. How close do the options have to be to reuse instead of loading twice?

DH: the main option here is that you can skip the locate step. Load lets you start at multiple places.

DH: define() lets you do things after the fetch step, while module() lets you do the anonymous module thing.

EA: I'm worried that define() is a new eval().

DH: yes, that's what it's about. Downloading and evaulating code. Some people say "eval is evil" and I say "there would be no JS on the web without it". This is a more controlled and sandboxed way of doing it.

WH: define returns a promise of void. How do you safely use the defined module?

EA: I'm worried about CSP.

DH: l.import() as a convenience api. Kicks off a load and forces an execution of the module. Resolves to the module object. It's a nice way of doing it all in one shot.

DH: the registry API

```
// Registry API, methods on a Loader instance
l.get(name)    // Module?
l.set(name, m) // void
l.has(name)    // boolean
l.keys()       // Iter<string>
l.values()     // Iter<Module>
l.entries()    // Iter<[string, Module]>
```

MM: delete?

BE/RW: size property?

AR: if you can change it, you can delete...why not have it?

DH: you might astonish a running system

STH: it only removes it from the mapping. Agree with the misgivvings, but we should have it.

YK: I can imagine delete for security purposes

STH: clear() would be insane to use, but....

MM: if we have an existing contract, we should have it, else we should define some supertype

DH: it's a no-op in JS to do that. People are warming up on delete()

WH: what do these things actually do? eg. `l.define(name, ...);` then `l.get(name)`?

YK: there's a turn between when things are done and when they're ocmmitte. You see the "old" view.

WH: What happens when you call define twice with the same name?

DH: They race. Name stays what it was until one of them gets fulfilled; it's nondeterministic which one.

WH: How do you find out if there's a pending define on a name?

DH: You can't.

WH: That makes it impossible to write safe modular code unless you're the very first thing to run. Otherwise anything you try to define could be racing with something already started.

DH: `set` is synchronous "add this eagerly". Get is sync get.

DH: this is an inherently racy API because module loading is racy.

WH: why not placeholders indicating that a load is in progress?

DH: there's an implicit one in the system, and we try to have sanity checks, but ....

STH: now it's observable that things are loading in some order

WH: That turns a race condition into a reliable fail.
If someone tries to load a module and then I load a module of the same name, I want that to fail.

STH: (explains pollyfill)

WH: True, but don't see how that's relevant. I have no problem with module replacing. I want it done in a safe way, not in a racy way.

DH: We have handling

EF: Do yo have slides for all the exceptions?

DH: Do not, Jason has it documented, but could not be here.

STH: There are thousands of lines that explain all of this very precisely.

WH: I asked this earlier, what happens when I call define with the same name twice and was told it's non-deterministic.

DH: I stand by the statement that this is non-deterministic, there are too many cases.
(explains several common and uncommon cases)

e.g., jquery dep fails, but something else depends on it. zero refcount. Common deps may cause successful subsets to succeed or fail together.

WH: agree that you'll get non-determinism. But should we hide the started/unstarted state from the user?

(discussion of observability)

BE: Let's take

DS: The registry is global or tied to a particular loader

DH: A built in loader called "System"


Decoupling Realms from Loaders

(smells)
- Loaders are really about modules, but eval/evalAsync represnt scripts
- Mixing concerns: scripts vs modules
- Mixing concerns: module loading vs sandboxing
- Capability hazard: `new Loader({ intrinsics: otherLoader })`


Realms: Globals, Intrinsics, Eval Hooks

(facts)
- Global object & Function/eval are "intertwingled"
- Intrinsics and standard constructors, prototypes are "intertwingled"
- Realm and intrinsics are "intertwingled"
- Everything is deeply "intertwingled"


YK: (explains import from registry)
... Can create a different Loader for maintaining state in a specific module while loading another module of the same name.


Realm API

A realm object abstracts the notion of a distinct global environment.

```js
let loader = new Loader({
realm: r, // a Realm object
});
```


https://gist.github.com/dherman/7568885

```js
let r = new Realm({ ... });

r.global.myGlobal = 17;

r.eval(...);
```



AWB: This "Realm" as a global object is questionable.

DH: Talking about "Realm", "Loader" and "Module", likely should be in a "module" module.


Seperable From Loader API

- Important, but it's a separate concern
- Loader defaults to its own realm
- Realms; sandboxing, sync script executuon
- Loaders: async module execution


DH: a "Realm" is a "virtual iframe" from the same domain. It's a global with the DOM stripped out of it.

WH: Think there should be commonalities between API surface of Realm and Worker

MM: When you create a new Realm, what do you provide in order to give it initial state?
... Let's just keep this in mind.


Realm API

```js
let realm = new Realm({
eval: ...,
Function: ...
}, function(builtins) {

  // global object starts empty
  // populate with standard builtins

  mixin(this.global, builtins);
});
```

DH: First object contains things to explicitly add to the Realm's global.

EA: What happens when you omit it.

DH: you get an object that inherits from `Object.prototype`

WH: Is the global object always accessible at `this.global`?

DH: Yes

EA: This is the wrong default, we need something else.

MM: The only properties on global object that are non-configurable are `NaN`, `Infinity`, and `undefined`

DH: Better to start out empty and fill it yourself then to create something that almost looks like global

EA: The most common case is a global environment with all the builtins, should be the default

RW: agree

MM: So, if the callback is omitted, you get a realm that is the default environment with all the builtins.

EA/RW/DH: yes

STH: If the callback is provide, the realm's global is a null prototype object

(summarize change)

- no callback, default environment with all the builtins
- w/ callback, object with null [[Prototype]]


WH: What does the init provide?

DH: Allows you to whitelist what goes into your realm

AR: what about the second arg? can that be folded into the first?

DH: yes, perhaps "init: function(...) { }"


Indirect Eval

```js
let caja = new Realm({
indirectEval: function(args) {
    return anything
}
});

caja.eval(`
  (0, eval)("1 + 2")
`);
```

STH: I was really skeptical of this, but I was persuaded.

WH: Why not use something simpler such as define realm.evalToken as the function to compare against what the eval identifier evaluates to in order to check for direct vs. indirect eval?

(Offline conversation with MM/DH/YK/BT: indirectEval hook returning the result of eval wont' work without a way to refer to eval. Fix is to make indrectEval a translate hook similar to directEval.)

Direct Eval

```js

let caja = new Realm({
  eval: {
    direct: {
      translate: (s) => { ... }
    }
  }
});

caja.eval(`{ let tmp = f();
             eval("tmp") }`);
```

Direct Eval

```js

let caja = new Realm({
  eval: {
    direct: {
      fallback: (f, ...rest) => { ... }
    }
  }
});

caja.eval(`{ let tmp = f();
             eval("tmp") }`);
```

WH: Why so many levels of destructuring in the first parameter to the Realm constructor? Do we need then all?

Function

```js
let caja = new Realm({
  Function: (args, body) => { ... }
});

caja.eval(`
  Function("x", "return x + 1")
`);
```


ARB: Why not spec it by defined concatenation plus eval?

STH: Explains the issues the exist with toString.

WH: If the engine validates the arguments before calling Function then that limits the ability to provide new syntax for Function (for transpilers).


DH:
- Can't create new arguments syntax
- Simpler apis lose strong guarantees from validation?
- (need the third reason)

Function*

```js
let caja = new Realm({
  Function: (args, body, prefix) => { ... }
});

caja.eval(`
  (function*().constructor("x", "return  x + 1")
`);
```

`prefix` is the string that is either "function" or "function *"


DS: concern for changes in semantics of


discussion re: eval of source code

DH: Returning source code is the more conservative

MM: script injection problems because people want to create source from concatenation. If we translate an array of source pieces, then we're not doing concatenation in the spec.

MM: The string that's the prefix piece determines the constructor. "function" => Function, "function*" => Generator




DH: two place you can reach the function constructor

- `Function` global
- `Function.prototype.constructor`

If you mutate `Function.prototype.constructor`

1. Create a new Realm
2. Save the original `Function.prototype.constructor` to the side
3. Create a new `Function` in that global
4. Mutate its `Function.prototype.constructor` to whatever you want


MM: This strategy has been field tested in SES

STH: Function.prototype.__proto__?

BT: Object.prototype


Realm API

```js
let r = new Realm({
  eval: {
    indirect,
    direct: {
      translate, fallback
    }
  },
  Function
});
```

DH: A compiler for ES7 -> ES6. The compiler has some static source its carrying around and comes to:

```js
|-
|-
|-
eval(x)
```

And contains source:

```js
{t1, t2, t3}
```

Translate to an Identifier "eval", no way around this

```js
...
translate: function(s, src) {
  return compile(s, src);
}

fallback: function(f, ...rest) {
  return f(...rest);
}
```

WH: Fallback needs a this binding to handle cases with 'with' such as this one:
a.eval = <something user-defined>
with (a) {
  eval(b)
}

[ agreed ]

Cross-Domain Modules

- browser loader should allow cross-domain loads
- ServiceWorker requires cross-domain sources (XHR) and sinks (`img`, `script`, etc)
- Browser's `System.define` should be a sink
- No Problem:  type of src parameter unconstrained in ES Semantics—polymorphism to the rescue
- IOW each loader determines for itself what types are allowed for source

Streaming Modules

- Might want to support streaming I/O in the future

- Polymorphism allows admitting stream objects for `.define` and `.module` in future

YK: We've built a layer under the new constructs and CSP can work at that level: `loader.eval`, etc. A small core that we can build on top of.



#### Conclusion/Resolution

Realm constructor semantics changes:
- changing "eval" to:
  - directEval
  - indirectEval
- Remove "Function" hook
- no callback, default environment with all the builtins
- w/ callback, object with null [[Prototype]]
- fold callback into first argument as option, eg. `init: function(...) { }`
- "fallback" hook needs an additional first argument: `this` binding

Dave and Allen, follow up on:


AWB: Not all intrinsics are named?

DH: Yes. Don't need to be hookable, create a new Realm and get the intrinsics.

AWB: Do you only have to define the constructor of the intrinsic? Wire up first?

DH: Don't think those things need ot be customizable. We can extend the optional named parameters of the Realm constructor in a compatible way.

... Can fully customize the relationship between a Loader and Realm.

EA: Does modules have a hard dependency on Realms?

DH: no

AR: Seems like it's adding?

DH: Nothing new, we're just defining what was there.

AWB: Prioritize?

DH: Modules, Module loader first. Realms later.

STH: (explains that Module Loader can't be deferred, needed by browsers)

AWB: Realm seems very essential...

DH: Not necessary, don't put off the Loader API

ARB: What is the confidence level of this spec?

AR/DH: Very confident, but assume there are small bugs to address.

AWB: Very excited, feel like we've finally gotten it.

MM: Really like this, but would like to attempt reimplement SES on top of this and Realms API

ARB: (likes Realms as well)

STH: re: confidence in design... Dave, Yehuda, Jason and I have made revisions for a few cases:
- making sure everything held together at the lowest level
- have addressed all of the use cases that were necessary

DH: No more use cases, no more churn. There will be bugs, but we will discover these during implementation and address accordingly.

ARB: Happy with the design now, this is great. I agree that there wont be major changes anymore. Realistically no way to know if the spec is spec'ing what we think it is, until we get to it. What damage would it cause if we defer this?

AR: Alot

DH: Massive

BE: You'll lose momentum and gain a perceived failure hazard.

DH: JS Community will walk away.

ARB: is this all true?

YK/AR/RW: Yes.

Discussion about time line of ES6 implementation

(break)


## 4.6 The global scope contour
(Dave Herman)

Relevant:
- https://github.com/rwaldron/tc39-notes/blob/master/es6/2012-07/july-25.md#scoping-rules-for-global-lexical-declaration
- https://github.com/rwaldron/tc39-notes/blob/master/es6/2012-09/sept-19.md#global-scope-revisit



DH: I want to make the case that we don't think we need a second global scope contour.

AWB: We require a different set of rules for how to interact with new binding forms

DH:
- A clean story for what the development model is for how you share code
- Starting your script in a module, you're already in local scope
- no need to be scoping bindings in a global scope
- if you want to scope things, use a module
- if you want mutation, use a script

AWB: Can let, const, class be script scoped?

DH: Could disallow let, const, class in Script

EA/RW/WH: no.

ARB: How does that not violate 1JS

Propose:
    let, const, class scoped to Script, as if it had an implicit scope


EA: This would prevent people from transitioning from function to class.

RW: Developer console hazard.

ARB: class has TDZ
ARB: HTML event attributes might need to see the declarations

RW: Use developer tools as an example. The transition has hazards where user code thinks it has created a global binding, but actually hasn't.

```html
<script>
let foo = 1;
</script>
```

`foo` appears undefined in the console.

YK/JM: discussing concerns about fragmentation of the mental model of global binding in scripts

BE: Again, we have a consensus on this subject.

MM: In the body of a `with() {}`, what does let, const, class do?

AWB: It's a block. They're scoped to the block.

BE: What is the new input that we're reopening this for?

DH: The new input is that the module tag or type=module is a better model

RW: Concerns that there will be transitional inconsistency across browsers.

EA: The status quo would allow you to see the binding in a later script

Proposed scoping won't allow this.

EA/RW: let, const, class should be "var like" at the global level in Script.

DH: There is a potential confusion. The local scope contour is less confusing than the extensible contour.

BE: It's bad if people type:

```html
<script>
class C {}
</script>
```

And C disappears after the `</script>`

EA/WH/RW: Agree.

DH:
- let is the same as var globally
- const is the same as Object.defineProperty(...)
- class is the same as var globally

EA/RW: ^^^^^ Agreed.

BE: Speculation about module uptake doesn't trump the expectation of cross script global bindings.


#### Conclusion/Resolution

Status Quo. Yehuda commits to work through existing issues for alternate paths.



Next meeting agenda:
    https://github.com/tc39/agendas/blob/master/2014/01.md
