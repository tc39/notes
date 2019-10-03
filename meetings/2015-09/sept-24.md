# September 24, 2015 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Sebastian Markbåge (SM), Jafar Husain (JH), Eric Ferraiuolo (EF), Caridy Patiño (CP), Mark S. Miller (MM), Adam Klein (AK), Michael Ficarra (MF), Peter Jensen (PJ), Jordan Harband (JHD), Chip Morningstar (CM), Brian Terlson (BT), John Neumann (JN), Dave Herman (DH), Rick Waldron (RW), Yehuda Katz (YK), Jeff Morrison (JM), Lee Byron (LB), Daniel Ehrenberg (DE), Ben Smith (BS), Lars Hansen (LHN), Nagy Hostafa (NH), Michael Saboff (MLS), John Buchanan (JB), Gorkem Yakin (GY), Stefan Penner (SP)

Remote:
Mark S. Miller (MM), István Sebestyén (IS)

-----

## Exponentiation Operator

RW: BE suggested option 4 yesterday (throw when unary negative is used without parens)

(whiteboard)
```js
// Ok
let z = K - x ** y;

// No Ok
let z = -x ** y; // Syntax Error

// Must be:
-(x ** y)

// Enforced by grammar change, just a SyntaxError
```

RW: BE wrote up option 4 and a summary and emailed to esdiscuss

RW: _similar to TDZ: an error when something ambiguous happens_

RW: AWB + MM switches 1 vote to 4, RW switches 2 vote to 4.

RW: question to group: do we have consensus on stage 3 with option 4?

AK: i think this sucks for users

RW: only when the user does something ambiguous

AK: we already have Math.pow which is unambiguous. why add another way that has ambiguity concerns? it looks confusing to me as a user.

AWB: it requires that you put in parens, what a careful developer would already put in parens

RW: considering your feedback (a syntax error would be a bummer) are you willing to block consensus?

DH: I will push spidermonkey team to display a better error in this case

AK: i think it's just fine to choose one (ie option 2 or 3) and i chose option 2

DH: that's just going to be a bug farm

BT: like it is in every other language?

DH: yes.

YK: there's bugs in every other language, but we don't have to copy those bugs into JS

RW: this is sufficiently useful to the end-developer

DH: Here's another way of looking at it: there is a natural ambiguity between two historical precedents, reasonable to expect it to go one way or the other. Don't just pick one because it will confuse people who expect the other. Making it an early error to avoid the ambiguity is good software engineering practice

AK: why do you think other langs (with exp operator) don't make this an error?

YK: they cargo-culted it.

AWB: some of them actually have negative numeric literals (option 3) baked in to the language.

DH: so -1 actually ends up doing the right thing...

AK: I'm not the only one who thinks this, Waldemar might think this too

RW: I don't think so; Waldemar supported requiring parens early on

DH: very recent precedent for exactly this kind of decision when andreas proposed that "use strict" implications for parameter lists were ambiguous; we decided to make all of the ambiguous cases SyntaxErrors to avoid confusing people one way or another. That was a good decision, this is similar. Let's not knowingly create an ambiguity where both are reasonable interpretations.

MM: in agreement with Dave, avoid misinterpration where the consequence is the program proceeding without diagnostic that defies user expectation

MM: ... proceeds without a diagnostic that violates user expectations.

AWB: if we're wrong about this and get tons of complaints, we can always remove the SyntaxError and select options 2 or 3 later.

DH: Oh, python has the same error... -1**2 == -1

AWB: maybe Matlab...

RW: concerns enough to block consensus?

MLS: i agree with AK; i don't like option 4. we'll implement the spec but I think it's unnecessary complications given other languages.

BT: I think it is unnecessary, but I don't care

YK: Do you agree, if we pick 2 or 3 there are some users who will pick the wrong one

BT: yes, but that's true for everything that includes precedence. We don't make all things an error where precedence is ambiguous.

YK: there are different kinds of confusion, mixing operator classes is an especially bad kind of confusion

AK: use strict in parameter list is different -- had implementor concern as well
(discussion of "use strict" w/ parameter list, comparison with this case)

YK: BT, your point about general operator precedence is valid. I wondre why the difference from the normal precedence... why is changing the precedence in a precedence class not a red flag?

BT: I'm not sure people talk about operators in terms of precedence classes

DH: I think people do -- I do. I don't remember factoring rules for BNF, I think of it terms of whitespace and "tightness" or "looseness"

AK: it was useful to see the thoughts yesterday. another straw poll would help me see if i'm an outlier or not.

YK: option 5 of "i don't care" please

RW/YK: let's say: 1 is "do nothing". inaction.

BT: I violently don't care

MF: let me remind the room; option 4 doesn't prevent options 2 or 3 later.

[poll]
1. Dropped                                                    0
2. Hold @ current proposal  (-5 ** 2 => 25)  3
3. Orig Proposal (-5 ** 2 => -25)                   0
4. BE syntax                                                11
5. IDGAF                                                       3

RW: we can still relax the syntax error

AK: rare enough case that it likely won't happen

DH: I'll prototype a good error in my own parser

#### Conclusion/Resolution

- Stage 3 acceptance
  - with the provision that option 4 goes in
- http://jsbin.com/baquqokujo/1/edit?output



## 8. Test262 Update

(Gorkem Yakin)

GY: (General update on status of ES6/ES2015 support in Test262)

BT: previously we decided it was important to have clear delineation between test artifacts at specific spec versions, but that's hard.

YK: It stops making so much sense now. Can I suggest a feature flag thing?
(discussion about how to handle old tests that break with a new version)

YK: at any point in time, take a snapshot of all stage 4 features and that's what we give to ECMA

AWB: strictly speaking, only yearly releases approved by GA that are final

AWB: nothing becomes stage 4 until version of the spec they're in is approved
(more discussion about stage 4 vs. stage 5)

BT: I see it this way. for implementors, there is value in having tests checked in to Test262 when they're working on the features, ~ stage 2/3. Only consideration here is what implemetors find useful

YK: ok stage 3 seems fine

BT: if things break, git has tools for this. going forward let's not have branches, just say Test262 is living

AK: I say stage 3

(RW agree, this aligns with implementation step)

YK: I think stage 2 criteria is Test262 tests. For me, as spec author this is valuable

AWB: during stage 2, I expect these to change a lot. These are part of the artifacts

DE: for the SIMD tests, we went through a lot of churn. it makes sense to have them outside of Test262, now we're stage 3, we're ok with Test262

YK: I think that implementors should have commit access to Test262 while they're working on it

BT: difficulty mentioned by DE is real

YK: not intractable to make this frictionless

BT: I don't think this is too bad, having written thousands myself. Not frictionless, but surmountable

YK: this sounds like a real blocker. proposal: I think you should be able to put all tests for a feature in a file, people who are working on stage2 and up features should have commit access

BT/DE: we should use pull request model

AK: nice for implementor to know these are stable, stage 3 is nice

(discussing whether we need to use pull requests vs. direct commit access)

DE: problem with stage 2 is that the API is not stable, so it doesn't provide value

DH: having tests are similar to having spec, helpful to make it clear to people how the feature works

AK: we have automated process pulling Test262, we don't want to have to triage unstable changes

YK: feature flags should solve this problem

BT: difficulty is that numerous different Test262 harnesses, I understand Google has their own

_ general agreement that Test262 tests should be stage 3 _

DE: YK and others are going to look into adding feature flags to implementors Test262 harnesses

BT: difficult to test features in isolation, they are often cross-cutting

_ discussion about difficulty of implementing feature flags _

AWB: what is the plan of record for user-facing test page?

BT: someone has to fund this work. Someone in Microsoft working part-time on this, build scripts to package the tests into a site. Maybe get UI guy to spend some time on it

MF: why do we want this?

BT: useful as a marketing feature, show how accurate your browser is

AWB: original motivation: valuable to have vendor-independent neutral test, not subject to gaming

JHD: easy to test in browser with a web link, harder with a harness

AWB: if we think it's valuable to have a website where users can run tests against multiple browsers, then some members have to step up and do the work or foot the bill. Otherwise take away the website

BT: money problem right now. accomplished webdev, about a month of effort


#### Conclusion/Resolution

- Test262 is "living"


## 5.6 Proposal: call constructor

(Yehuda Katz)

YK: (from proposal)

- ES5 constructors had a dual-purpose: they got invoked both when the constructor was newed (`[[Construct]]`) and when it was called (`[[Call]]`).
This made it possible to use a single constructor for both purposes, but required constructor writers to defend against consumers accidentally `[[Call]]`ing the constructor.
- ES6 classes do not support `[[Call]]`ing the constructor at all, which means that classes do not need to defend themselves against being inadvertantly `[[Call]]`ed.
- In ES6, if you want to implement a constructor that can be both `[[Call]]`ed and `[[Construct]]`ed, you can write the constructor as an ES5 function, and use `new.target` to differentiate between the two cases.

Motivating Example

The "callable constructor" pattern is very common in JavaScript itself, so I will use `Date` to illustrate how you can use an ES5 function to
implement a reliable callable constructor in ES6.

```js
// these functions are defined in the appendix
import { initializeDate, ToDateString } from './date-implementation';

export function Date(...args) {
  if (new.target) {
    // [[Construct]] branch
    initializeDate(this, ...args);
  } else {
    // [[Call]] branch
    return ToDateString(clockGetTime());
  }
}
```

This works fine, but it has two problemLs:

1. It requires the use of ES5 function as constructors. In an ideal world, new classes would be written using class syntax.
2. It uses a meta-property, `new.target` to disambiguate the two paths, but its meaning is not apparent to those not familiar with the meta-property.

This proposal proposes new syntax that allows you to express "callable constructor" in class syntax.

Semantics

- The presence of a `call constructor` in a class body installs the call constructor function in the `[[Call]]` slot of the constructed class.
- It does not affect subclasses, which means that subclasses still have a throwing `[[Call]]`, unless they explicitly define their own call constructor (subclasses do not inherit calling behavior by default).
- As in methods, `super()` in a call constructor is a static error, future-proofing us for a potential context-sensitive `super()` proposal.

```js
import { initializeDate, ToDateString } from './date-implementation';
class Date {
  constructor(...args) {
    initializeDate(super(), ...args);
  }

  call constructor() {
    return ToDateString(clockGetTime());
  }
}
```


AWB: This is an exceptional example, most cases just defer to `new`, where this goes off on some other operation.


RW:

```js
class A {
  constructor() {
    this.aProp = 1;
  }
}
class B extends A {
  constructor() {
    this.bProp = 1;
  }
  call constructor() {
    return new B();
  }
}

class C extends B {
  constructor() {
    this.cProp = 1;
  }
}

let b = B();

b.aProp === 1; // true
b.bProp === 1; // true

let c = C(); // throws! there is no call constructor here
```

AWB: Think about it, not as a property added to the prototype, but as an alternative to the `constructor`

MM: interaction with Proxy call trap?

AWB: class with a call constructor get a distinct `[[Call]]` that knows how to dispatch to the user defined behavior.
...no proposal yet for reflection
...no toString yet.

MM: toString the constructor, you get the entire class

JHD: currently unspecified in ES6; some engines give the "class", some give the constructor, some give a function that has no indication it was a "class"

YK: Then it would be included.

YK: _shows `call constructor() {}` vs `() {}` inside a "class"_

Mark's Alternative:

```js
import { initializeDate, ToDateString } from './date-implementation';
class Date {
  constructor(...args) {
    initializeDate(super(), ...args);
  }
  () {
    return ToDateString(clockGetTime());
  }
}
```

AWB: i don't like it because you could forget the method name

YK: also conflicting with square bracket syntax and arrow functions
_lots of agreement that this is confusing_

MM: happy to drop it; glad to have a reaction.

DH: only thing that gives me pause is Stroustrup's principle: new stuff, people want long syntax; later, people want short syntax.

MF: May want a decorator augmenting a call constructor (Michael, I missed the tail end of this, can you fill in?)

YK:

MLS: would this allow you to omit the `constructor`?

YK: class would create a default `constructor`, but otherwise behave like a function

_discussion about callable non-constructable classes; general consensus is that you should use a function for this_

DH: Like this b/c it matches built-ins and defines a clear separation of semantics

AWB: _discussing built-ins that create wrappers_
... Don't need to add sloppy mode semantics for built-ins, eg. SIMD

JHD: it's an axiom that `Object(x) === x` if it's an object, and not if it's a primitive. This must be preserved.

MM: Object.prototype.toValue, auto-wraps `this`.

AWB: Then unwraps

JHD: Every JS value must be wrapped when pass through `Object`.

AWB: Not saying "no wrapper", needs wrapper to do method lookup

DE: Sounds like two versions of ToObject?

JHD: in a sloppy mode function, if i do `this.foo = "bar";`, and `this` isn't `undefined`, it *always* sets the property such that `this.foo` can be retrieved immediately after. If `this` is a primitive, this isn't the case. If we change the auto-wrapping behavior of "this" in sloppy mode, for **any value**, then this will break existing code.

AK: Not going to add reflection here?

YK: No, but reflection is needed.

AK: Will it "grow" reflection?

AWB: We hope to advance this to ES2016

YK: Reflection is needed along side decorators and this proposal, but don't want to block this on decorators.

AWB: No reflective way to change a function with toString, but can see it's whole body.
...tweak toString, for class with a call constructor, include it in the toString representation

MM: Should be the entire class definition

DH: ??

AWB: That position is contraversial

MM: Thought we agreed?

YK: Bigger toString issue.

AWB: For 2016, toString should at least include call constructor body

MF: Want added restrictions before 2016, we can limit the reform proposal to buy time.

_This can be implemented in terms of `new.target`._

AWB: Nec. in support of decorators:

- If you want decorators to be able to create call constructors, there needs to be some reflective way to install them.

AK/BT: _discussion potential implementation details_

#### Conclusion/Resolution

- Stage 1 acceptance
- toString includes call constructor body in output
- Goal for Stage 3 next meeting.


## Secretariat

IS:

- Only Ecma-404 will be fast tracked.
- Bugs in Ecma-402 need to be addressed.
- ES2016, 17, 18, etc. might cause issues?


I can't really understand most of what's being said over the polycom.

Sounds like ES6 has a lot of downloads


## Meeting Schedule

JN:

- November 17 - 19, 2015 (San Jose - Paypal)
- January 26 - 28, 2016 (San Francisco - Salesforce)
- March 29-31, 2016 (San Francisco - Google)
- May 24 - 26, 2016 (Europe)
- July 26 - 28, 2016 (Redmond - Microsoft)
- September 27 - 29, 2016 (Los Gatos - Netflix)
- November 29 - 30 - December 1, 2016 (Menlo Park - Facebook)


#### Conclusion/Resolution

- Need to confirm Munich in May
- Rick, Dave will figure out March


## 5.13 Updates on rest properties proposal

(Sebastian Markbåge)

https://github.com/sebmarkbage/ecmascript-rest-spread

SM:

https://github.com/sebmarkbage/ecmascript-rest-spread/commit/f4cb9c0ff9f4509854d5d30f4517a23b1a7d7e98

```js
var o = Object.create({ x: 1, y: 2 });
o.z = 3;

var x, y, z;

// Destructuring assignment allows nested object
({ x, ...{ y, z } } = o);

x; // 1
y; // undefined
z; // 3
```

AWB: Object pattern destructuring doesn't check enumerability, just goes by property name

DH: The `...` means "I'm enumerating the names"

SM: ie. getting the keys

AK: What about in the binding case?

SM: Consistency. The BindingRestElement only allows an identifier.

SM: I will write a proposal to fix BindingRestElement to allow nested BindingPatterns.

#### Conclusion/Resolution

- No stage change


## 6. Updates on Loader

(Dave Herman)

https://github.com/whatwg/loader/
https://github.com/whatwg/loader/blob/master/roadmap.md

DH: _introduction_

BT: crass question: will we have something to implement soon?

DH: all you need to get started implementing is a basic understanding of what the really core name resolution is going to look like.

BT: and that's done?

DH: it's done *enough* that you could be hacking on this now. not written in the spec yet.

BT: Concerns that if spec is not written and we implement, it might be useless. Stuck in holding pattern.

DH: Should start hacking on this.

DH: we will get you stage 0 stuff written as soon as we can.

BT: (wants estimate to communicate to Edge team)

DH: We can promise name resolution drafted in the spec by the next TC39 meeting.

JM: How are relative urls resolved? Relative to what? (toplevel document? importing module url?)

DH: "referrer" used for relative, "/"?

DH: _explains how "module src" will respect base url, but imports inside the module will not_

MM: Loader constructor has no concept of URLs, just name resolution.

DH: Loader class is generic. Specific default Loader has to be host specific, there is a spec.

AK: Who are the experts working on the Loader spec? Anne? Dimitri (Glazkov)?

DH: Both have reached out. Let's have a meeting with those people.

AK: Dimitri is quite busy, so...

YK: I think it's important for Anne to be involved here.

DH: script type = module should have roughly defer semantics, asynchronous but ordered.

YK: before doc ready, content loaded

DH: We have to asynchronously load the deps, do we have to complete the compile phase of first script type = module, or ... execution phase as well

YK: argument for deferring evaluation at all, first is ... if you move on to second, your script didn't get a chance to configure...

... you cannot start download script type = module imports before ...

AK: this is all about what script tags do right now

YK: you need to have one block. this block is for configuring my loader, I don't want any scripts to load before this is done. Not good to block loading modules before all scripts are loaded

DH: if semantics of type=module is only that one has to precede the compilation of the other, forces you to use legacy script.

YK: there's a worse problem, path for legacy script => legacy blocking script, or use legacy defer script, and now you have to decide order between them. Another option is loader config, that has to run before, but not other scripts

DH: a narrow case? Could have a syntax instead of reusing form?

YK: if you try to make other scripts ordered, you have to speculate whether one is a loader

DH: Another Q: Allow completed subgraphs to execute early? Hold the line on deterministic top level execution.

Issue: module system forces sequentiality

Ie.
- download
- get deps
- download
- then start compiling

Probs

- May create latency
- Could a subgraph that was completed start executing?


MM: what would be the definition of a completed subgraph that distinguishes it?

DH: for example, toplevel module main, requires foo and bar, foo requires jquery, bar requires 100 modules. While bar is downloading dependencies, foo is downloaded jquery, waiting to compile and run. In that case, schedule foo and jquery's top levels to run, more concurrent semantics, less deterministic

MM: makes sense, introduces new element. optionally breaking toplevel module execution into separate turns. multiple modules part of 1 dependency graph may be executed in separate turns

YK: middle ground: start executing subgraphs in the order they've been specified. gives you determinstic ordering

AWB: in terms of modules, there is only one syntactially type of module. two types written: script type modules, root of execution, import other things. OTOH, module-like modules have exports and imports and logically are doing useful work if people import them. I thought that module-like module would never be initialized if someone didn't import it. In theory, a script tag that names a module-like module, doesn't have to be executed unless a script-like module imports a module-like module.

DH: no interest in inline-named modules

AWB: not relevant to this discussion.

AWB: script-like module: used like a script, doesn't have exports, does have imports, written for effect

DH: either are there, b/c in a script tag, or not.

AWB: so you write a script tag, name a script-like module, that needs to execute as soon as the deps are available.

JM: has to wait for deps?

AWB: it can't run until it's script is available. Here is code I want to execute. If you name the script whose exist to export it, but nobody uses it. What does a module script tag mean, this gets to the deferred semantics. Here is the script, I want to evaluate this, even if nobody depends on it.

DH: No. Cannnot express the former in HTML. The module doesn't have name, cannot be depended on.

DH/YK: they have source but they don't have name.

AWB: Anything in a script tag is the root, execute directly. Assume ordered?

DH: _confirms_. Intentional order of execution. Code directly or indirectly depended on has to execute immediately. Does all that have to happen in a single event turn? Or across several? If the subgraph has completed, can execute?

MM: bottom-up execution constraint. clearly doesn't imply any type of suspended caller. If all module execution is executed in single turn, then starts and ends with empty stack.
 implementations can do whatever they feel like to do other jobs

DH: (explaining options between single job vs. multi-job loading. if multi-job, then decision between total ordering and partial ordering)
1. single job
2.a. total ordering of modules N jobs
2.b. partial ordering of modules

YK: module imports are declarative, so gives clear dependency order, effectively a set of jobs, deterministic. Another set of jobs exist...

...modules want to initialize state, using set of promises. dependency ordering that is opaque to module execution order, benefit of that is we can have synchronous 1-shot path through module execution...

YK: problem with 2.a...

JM: we've used 2.a. for a long time and it has worked well

YK: ... other things in the dependency graph is opaque, to repair that, we need toplevel await

AWB: my concern with 2a. only comes up with circular module deps, a set of dependent modules isn't fully initialized until you circle around, each module has been given a chance to initialize and execute through entire body. If you start doing other jobs, somewhere along that path, are there going to be potential observable....

DH: difference between observable and likely. We shouldn't care about reflectively being able to observe that things are complete. Ignoring the reflective stuff, just declarative, initializing these in dep order, outside of cycles you can't have a problem. Even within a cycle, early reference to something that hasn't executed yet, but that can happen synchronously too.

YK: there is a toplevel cycle problem already

MM: I think there is an adjustment to 2a and 2b to avoid cycle problem. adjustment is strongly-connected cycle is atomic, if we allow interleavings, only between strongly connected cycles.

AWB: then you'd have to identify these

...


_discussion about N job module loading -> toplevel await_

DH: _describing the problem with toplevel await and node.js_
... people want to use synchronous functions in module initialization, but this forks functionality between async/sync variants...
... toplevel await gives you a way to prevent module use before initialization. in node.js currently people often just race between initialization and use.

MM: question: node modules is loaded via require? If someone calls require in a later turn, the module is loaded later. [ everyone confirms ] so toplevel modules can already be run over multiple turns? [ confirms ]

YK: their concern is that introducing await for require will change the behavior of require in a confusing way

JM: But it's backward compatibile and not a breaking change, right?

_no_

MM: why isn't toplevel await something that can be written already?

YK: you can desugar that already, but they still don't want it

AK: They just don't want the feature.

SP: Bad experience when tried to do this the first time.

_confirmed_

YK: they say, once you start using async, everything leaks. And that's true

DH: sounds bad, but there is a reasonable solution. allow toplevel await, asynchronous loader spec, and node won't use it. any modules that have toplevel await will be incompatible with node

YK: syntax errors, or run to first `await` and done

DH: they can do whatever they want here, if it becomes popular on the web, maybe that will change their opinion

MM: If toplevel await is equivalent to something users can write anyway...

YK: I just realized that it is plausible to do what async function does, if await appears at toplevel the export is a promise

DH: Yes.

- require is zalgo-ish
- may block severely

MM: that to me, disqualifies it. But we're not talking about require, but import

DH: all node packages expect to start with toplevel synchronous main and require

MM: would expect to interface between two systems, what you obtain is a require immediately returns

DH: two things that you want for evolutionary path: require an es6 module that awaits, thing you get back is a promise rather than module. Other part is an alternative entry point for node: execution semantics at toplevel is es6 loader program, everything runs through async pipeline, with imports instead of require

YK: await, import at toplevel could trigger that

DH: maybe inferred rather than opt-in

MM: i don't see how this forces you to require as suspension point for caller

YK: browser does not want require that sometimes returns value, sometimes promise. legacy purposes, require returns value.

MM: require has to return what the required module exports

DH: could say: all ES6 modules provide a promise

- Agreement on 2A semantics

2A: Modules execute in the order that they appear textually (same order as ES6 semantics), but may run across multiple turns.

Moving on.

DH: Need stage 0 for  module metadata

https://gist.github.com/dherman/c35e968991b67ae98423

MM: there's a defacto spec in JS: source maps. very specific about what type of information is mappable. I think this corresponds to filename/dirname...

( discussion of import.context )
EF: why import and not export?
(module would be better, but it isn't a keyword)

DH: import.context.lineno, callno?

MM: my point is: if template strings actually created a sourcemap on the template object, as part of the extended definition, you'd have all the information by that mechanism, including where the individual thing in the source
...

DH: the competition here is __filename, __dirname, etc. import.context ergonomics is pretty close, are you talking about something worse?

MM: there is an overlap of functionality with sourcemaps and template strings -- we should coordinate these.

( question about this exposing a new execution context for module system )

DH: this was always the case with modules.

MM: can't you just create an error, throw and catch it to get the information for the filename, line, etc. how is the info on import.context different?

CP: just one concern about import.context compared to `import local from this module;` proposal, we need a new way/channel to ask loader for such as information, before it was just a synthetic module that relying on the loader semantics to do the bindings.

_extended discussion about what information would be stored on import.context -- is it source name, dir name? or is this too node-specific?_


Dynamic Relative Loading

- Dynamically load a relative module when it's only needed rarely:


```js
// lib/index.js
configButton.onclick = async function() {
  // corresponds to: `import { readFile, writeFile } from 'fs';`
  let { readFile, writeFile } = await import.named('fs');
  // corresponds to: `import config from './config.js';`
  let config = await import('./config.js');
  // ...
};
```

DH: Dynamic scope tricks you into thinking that you can abstract normally (say, by moving outside), but you can't

Need: static syntax to communicate information so that we can dfkjnsdkfbjv ;skdfjblskdjfnbvlksdjfbsdfv

_discussion about import(...) and import.named(...) being meta operators_


AWB: make it not an operator: meta property whose value is a closure

MM: could be closed over the data from import.context

_discussion about ambiguity of syntax_

DH: syntax needs work, not complete/final

MLS: because dynamic, needs a new API. Don't like the properties on keywords.

DH: _re-explains everything that lead to current design_

_Discussion re: `import(...`_

DH: "out of band" in a subexpression and need additional data

AK: Assumed import dynamically, methods on a loader instance?

DH: Missing ability to do relative dynamic loading, needs context otherwise need to write information in your code about where the file lives.

AK: need some syntax that says "where am i?"

DH: we want the smallest number of constructs, there is benefit to users for this. However, inband vs. outband is real ergonomics issue. Ability to correspond syntatic forms between declarative and imperative forms has value

DH: Moving on. Need global APIs here, reflective API for dynamically creating a module instance. I want Reflect.Module (or something living under Reflect), DD wants...

tl;dr: Spec defines a module namespace exotic object, need a way to create these. Custom loaders need to make these.

AWB: can other modules import those? [ others say yes]

DH: reflective vs. source text module objects...

- Module Records, not Module Namespace Exotic Object
- need something for that
- needs to go somewhere
- DD says WHATWG shouldn't be monkey patching onto Reflect object
- Loader spec lives on a bridge
- Not specific to WhatWG
- Belongs in Reflect

_Agreement_


MM: _talking about `System`_

DH: This will block stages of Loader.

AK/DH: Milestone 0, not Stage 0

DH: milestone 0 doesn't depend on this syntax, but milestone 1 does, and we don't want to hold that up, so people can start building the ecosystem

#### Conclusion/Resolution

- Stage 0 acceptance
  - granted for dynamic relative loading
- Module Record thing goes in Reflect, full-stop. ("Reflect.Module", perhaps)
- `Reflect.Loader`, `Reflect.Module`
