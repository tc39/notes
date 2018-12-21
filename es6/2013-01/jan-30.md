# January 30, 2013 Meeting Notes
-----

John Neumann (JN), Norbert Lindenberg (NL), Allen Wirfs-Brock (AWB), Rick Waldron (RW), Waldemar Horwat (WH), Tim Disney (TD), Eric Ferraiuolo (EF), Sam Tobin-Hochstadt (STH), Erik Arvidsson (EA), Brian Terlson (BT), Luke Hoban (LH), Matt Sweeney (MS), Doug Crockford (DC), Yehuda Katz (YK), Nebojša Ćirić (NC), Brendan Eich (BE), Andreas Rossberg (ARB)

-----

## Function In Block Options

(Luke Hoban)

Option #1: No let and const in non-strict mode
Option #2: Taking the breaking change, w/ evangelism
Option #3: Hybrid semantics for function-in-block, that still maintained semantic alignment with let and const
Option #4: let/const anywhere in scope changes FIB semantics.

LH: a combination of 1 & 3 might be the best path forward.

Option #3

```js
function foo() {
  bar();/// throw, extended TDZ
  for (var i = 0; i < 10; i++ ) {
    bar(); // throw, TDZ
    let x = 10;
    // semantics of function in block are as though...
    // 1. let bar = function() {} were inserted
    // at start of block
    // 2. var bar = function() {} were inserted
    // at start of function
    // (1) accomplishes ES5 let/const semantics,
    // (2) accomplishes compat
    // These are combined with an extension of the TDZ rules
    // to throw on accesses to let bound variables
    // whose activation block has not et been created.
    function bar() {
      console.log(x);
    }
    bar(); // succeed
  }
  bar(); // throw, eTDZ
}
```

WH/ARB: if there is a let or const anywhere in the program, don't do this in sloppy mode?

LH: There is an option, if you have any let or const, then function block is ES6 semantics... But I don't know how we'd define this.

YK: I want to go on record that I don't support this kind of unrelated opt-in.

RW: This is a language level weak inference...

WH: Far less a concern than burning people for the next twenty years.

BE: It's not an opt-in, it's allowing the syntax to speak for itself.

Discussion re: ES6 static semantics to determine runtime semantics.


LH: Option #4 is a possibility

MM: For both strict and non-strict?

LH: Option #4 in sloppy mode and clean up in strict mode.
...Key thing to note: the extended TDZ.

AWB: Is it compatible semantics with whats observed on the web...

Discussion about compatibility of options

STH: Pick one whether it works with what we want to do later

AWB: What are the compatibility requirements?

Discussion re: the sanity of each implementation's semantics.

BE: Not sure any are worth rescuing in sloppy mode. Leaning towards strict mode to align the let, const and fix FIB semantics.

LH: (Presents: http://web.archive.org/web/20120513130620/http://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/)

Mixed Discussion centered around the intersection of implementation semantics. Need to avoid creating yet a _new_ set of semantics that are outside of the intersection semantics.

Avoid specifying any of this in sloppy mode? BE, MM, ARB, WH agree.

LH: I still think there is something that we can do to make this work.

MM, BE: Avoid two identities for function declarations.

AWB: Reiterates proposal: Don't hoist the initialization of the function, initialize at the point of declaration.

STH: 1) define the semantics of let, const and FIB in sloppy mode and require special casing, 2) don't define let, const and FIB in sloppy mode. Define how the interact that's "mostly compatible with the intersection. Or we prevent them from interacting by ruling out sloppy mode.

BE: ES6 let in sloppy code makes FIB ES6 semantics

**Option #2** will be rejected by implementors

**Option #1** No let and const in non-strict mode

LH: Addresses compatibility concern, Forks the language.

Paths of teaching JavaScript will hinge on whether you include "use strict".

eg. Can't copy-paste code from blog post into script tag.

MM, WH: Would like a meta tag that makes all scripts and inline JS strict-mode.

LH: Recognizes the ease of copy/paste JavaScript for teaching purposed.

MM: The future will all be "use strict"

RW: In the last two days there has been two different blog posts focused on _removing_ strictness from JavaScript.

YK: Even if you think strict mode is ok now, but still has low uptake. We're making it an obligation for new features which is too large of change.

Mixed discussion about the semantics and restrictions of strict mode.

Further discussion about how simple examples and teaching JS in the future will require "use strict". Recognizing the real consequences of copy/paste restrictions.

LH: Concerned that Option #1 will absorb ALL new things.

**Options**

Option #0: No new syntax in non-strict mode
  0a. Truly no syntax (ARB) **Not Alive**
  0b. Allow module, but nothing else
  0c. Allow module and class, but nothing else
  0d. Allow everything with a body, but nothing else (the body is implicitly strict) **Not Alive**

Option #1: No block scoping in non-strict mode **No Support**
  1a. Preserves everything except let, const and FIB

Option #2: Taking the breaking change **No Support**
    - (w/ evangelism)

Option #3: Hybrid semantics for function-in-block
  3a. In both strict and non-strict **No Support**
  3b. In only non-strict. Strict keeps ES6 block scope functions
  3c. Absolute minimum intersection semantics supported in non-strict, else ES6 semantics

Option #4: let/const anywhere in scope changes FIB semantics

Option #5: No block scoping in ES6 **Strong Pushback (after discussion)**

(Note: "block scoping" means: let, const, class, FIB)

WH:  Are the options listed about what we want to spec or what the implementations ought to *do* (leaving aside the question of whether or how the standard specs it)?
LH: Here we're explicitly discussing what implementations should *do*.
(general agreement that this is what we're discussing at this point.)

LH: We cannot do FIB with meaningful semantics in the face of let/const

AWB: If you didn't have FIB, are there still issues?

LH: No.
...To avoid any issues at all, the solution is Option #5.

RW: Does that also include "class"?

STH/LH: Option #3 is the counter point to Option #5.

LH: Option #5 is only legit if Option #3 is rejected.

BE: Option #5 means that class can only appear where functions can appear.

MM: (reiterates belief that one the experiment of extending ES6 features into sloppy mode has failed)  ((Note to Rick: We repeatedly clarified that Dave's 1JS is not the extension of ES6 into sloppy mode. It is the earlier realization that we didn't need an additional mode switch, such as an ES6 pragma.))

AWB: Working towards balancing the future... future advantages of block scoping are so large that we should be willing to find a way to make them work.

BE, WH: The future is bigger then the past.

ARB: Wants #0 as cleanest and easiest path forward. (list updated)

BE: Option #0a is dead on arrival. (list updated)


AWB: Does #0d exclude rest and spread, destructuring? (list updated)

BE: Yes, Andreas and others discovered potential issues, probably not worth pushing.

...Yes, going with Option #0, changes the future

STH: One JS is about not having a switch to get new language features, eg. a language version etc.

RW: "use strict" is still a big red switch.

STH: Yes

BE: Committee opinion on #0d?
#0d "not alive" (list updated)

Circular discussion about macrocodes caused by Option #1

YK: What about Option #4?

ARB: No.

AWB: Option #4 is an extension of Option #3, because it allows you to safely shift into supporting let and const.

ARB: Strongly dislike because it has a refactoring hazard.

LH: If you're in strict, you already get correct semantics. Option #4 only applies to non-strict mode.

ARB: Want as few component interactions as possible.

WH: This is the closest we can get in the face of web compatibility.

AWB: Proposes Option #3c...? In only the specific cases where a reference does not have a local declaration

WH:

AWB: Willing to throw out function declarations created in eval.

WH: (Whiteboard)

```js
var f = ...
function a() {
  if ( false ) {
    function f() {}
  }

  f();
}
```

WH: What do we want this to do?

BE: In IE, the inner f hoists. In SpiderMonkey, no hoist. What should we do?

Option #3c: Absolute minimum intersection semantics supported in non-strict, else ES6 semantics.

BE: I think we can do #3c and Allen can make it work, concerned that Waldemar will poke holes and be unhappy.

WH: The above must call the outer f in strict mode. In non-strict mode we shouldn't specify what this does (it becomes a moot point if we continue to outlaw nested functions in non-strict mode). For compatibility we'd want to add an informative note stating that, if the implementation extends non-strict mode with nested functions, the similar program below calls the inner f:

```js
var f = ...
function a() {
  if ( true ) {
    function f() {}
  }

  f();
}
```

...There is no support for #3a (list updated)

LH: #3b is the bridge between compatibility and progress.

AWB: #3c covers the minimum use cases for compatibility

WH: #3c and 4 are similar

LH: Still supporting #3b

(Break for Lunch)


LH: Summary of current discussion. Why is that people are concerned about any of the #3's?

ARB: A lot of time for the committee to spend on identifying the sloppy mode issues. Why introduce complexity for something "transitional"

LH: So, not really an argument _against_ #3, but for #0

ARB: And not creating a more complicated language

AWB/EA: No.

AWB: (#3) Arguably no more complicated then (#0)

MM: (Uses "duplicate parameters in parameter lists with defaults" as example of adding complexity)

AWB/MM/WH: (Discussion around complexity implications)

AWB: Complexity that occurs in edge cases is not

LH: We can't argue complexity... Let's look at the trade off for long term goals of the language

BE: Can we get rid of Option #1?

Yes. Option #1: no support. (list updated)

LH: For those that support Option #0, If we couldn't get consensus on Option #0, what are the material arguments against Option #3?

BE: (Makes further case for the future friendliness of #0d)

LH: Reiterates the previous question...

BE: Option #3c could work really well

WH: If we go with #3c, there is no spec work, just implementors

AWB: Yes, there is spec work...

Discussion comparing the specifics of #3b & #3c

Support moving to #3c.

AWB: If sloppy mode, here is a compatibility issue.

MM/ARB: (Answering Luke's earlier question) If Option #0 is off the table, then there is no opposition to #3b or #3c.

**Consensus**

Allen will spec #3c static semantics with informative note for review, tentatively to fallback to #3b


BE: Make an error?

MM: Benefit to future implementors that want to be in conformance by making them errors?

BE: Refutes

MM: Retracts

AWB: Sloppy mode has let, const and class grammatically and semantics


Return to the bigger issue...

Reiterates Kevin Smith's proposal:

1. No opt-in required for new syntax, except
2. Except: No breaking changes to sloppy mode
3. No grammar contortions (e.g. let) to support sloppy mode
4. All new syntax forms with code bodies are implicit strict


BE: Appears to be stand between #0 and #3

MM: Still opposed to the let issue, by creating a potential hazard.

BE: At last meeting we agreed to break this... (whiteboard)

```js
var let;
let[x] = y;
```

AWB: We discussed this last meeting and agreed.

MM: I changed my mind.

WH: This is actually a grammar issue, which means that you must be able to parse it before you know whether or not you're in strict mode.

MM: Reiterates concern about creating potential hazards

LH: If we want to add new syntax, we're going to encounter these issues no matter what "mode" we're in... Hinging new syntax the fact that a small window reserved a few keywords won't scale (let, const, etc).

AWB: There is a certain circularity in arguments that are fine with new features only in strict, but also fine with allowing a single conflicting

MM: Reiterates

WH: So the argument is that we're making "sloppy mode" too attractive?

MM: Yes, avoid linguistic screw-ups.

LH: A lot of us don't view as "screw-ups"

WH: strict mode is just too complicated for user land code with many scripts on one page.

MM: If we're going to continue to support "sloppy mode", we need to make any use of "let" as a variable an error (retro-active reserve?). Cites Safari experiment of "let", Firefox experiments with "let".

LH/BT: Get data on use of "let"

MM: I'm back to where I was previously... I don't care enough to argue anymore.


(Note: Previous discussion can be found here: https://github.com/rwldrn/tc39-notes/blob/master/es6/2012-11/nov-29.md#the-syntax-of-let)

LH: Option #0 is too short sighted and based on "luck"... There won't be another opportunity to retro-reserve words, as there was with Strict Mode

MM: Two scenarios:
1. A breaking change that leaves the language in a better, more consistent state.
2. A breaking change that mars the languages and creates something that you constantly need to be aware of...

LH: (anecdotal C# experience)

MM: Counter with sentiments re: language complexity.

AWB/WH: Appear to be converging...

MM: I won't block the let kludge

AWB: But we need to address the larger issue of features in non-strict mode

WH: If there are concrete concerns, I want them on the table, but I don't want to spend more time on abstract arguments.

ARB: Concrete issues have arisen

WH: What are they?

AWB: We expect to have concerns.

ARB: issues with destructuring in sloppy mode

AWB: We have a spec for this.

MM: A spec that special cases for these issues and pays an unnecessary complexity cost.

AWB: Reiterates the concern that user code will not want to "use strict"

EA: I don't want forked languages

ARB/MM: Too many small breaks add up, I want to avoid introducing new breaks.

AWB: Fundamentally two approaches:
1. A discontinuity, resulting in multiple versions.
2. A single version, evolves incrementally.

LH: (Insight regarding the effects of "mental forking")

WH/DC: (Discussion about the inline-script problem)

DC: Code has long been moving away from inline code and our goals shouldn't be to preserve that.

LH: But there are still multiple scripts

DC: Strict mode is the path forward, we can maintain ES3 and ES5 "sloppy mode", but ES5 "strict mode" is the way forward.

AWB/YK: Even the term "sloppy mode" is a pejorative.

DC/YK: (Discussion about the current state of strict mode)

WH/YK: We have data that 10% of uses aren't even being used correctly, where "use strict" isn't correctly in the prologue position.

YK: Worried that people will want to use new features, but simply won't understand the requirement "use strict"

DC: This is not hard

...Continued discussion.

LH: ...Interjects to resteer conversation

?: The fundamental disagreement is about whether we want to make a simpler spec for the future by basing new features on strict mode only.

WH: No, that's not the bone of contention. WH would also prefer to have a simpler strict-only spec for new features, but supports 3c/4 from earlier because getting into strict mode is too inconvenient. Today it's too awkward to get into strict mode in practice for web pages, although this may change in the future?. Too many (10%) web pages unknowingly get this wrong by putting a "use strict" somewhere other than the preamble.

MM: What do you see would need to happen to make strict mode convenient enough?

WH: Two requirements:
1. Need a clear indication that a user's attempt to get into strict mode failed, such as having a ```use strict``` directive rather than overloading a string constant. It's obvious from the data that the bug that the strict mode directive doesn't go into strict mode if it's in the wrong place hits too many users.
2. Need a way to declare that all scripts on a page are strict. That's out of our control, but this is a prerequisite to making strict mode convenient for multi-script pages (and WH is aware of the potential issues of scripts coming from different sources).

YK: Hopefully I've made it clear that the current state of strict mode tooling is at a significant disadvantage.

MM: I understand that we need to work with DOM spec writers to get means of making "global" strict mode a reality.

Revisiting past conversations that led from ES6 being "versioned", to being "strict mode" only, to being "one js".

LH: We did adopt One JS. There have been two concrete issues:

MM: Terminology: "one js"?

LH: As in, new features do not require "use strict" or a "version"... Recommend continuing in the default direction: Continue on the path we're taking.

MM: That is not the meaning of "one js" (Rick: It's really important that we not confuse this issue with 1JS.))

AWB: If we can't agree on a new position.

WH: Wants to hear from others...

RW: (big spiel about strict mode and new features)

EF: Agrees and supports default strict mode in modules. Not enough of a historic sample to say whether what size "switch" and how many "switches" to have will be idea. We only have one real sample so far, ES3 -> ES5. The new ES6 strict mode will only be the second.

RW: Agrees with Eric and supports strict bodies by default.

DC: Including class?

RW: Yes

YK: Not Arrows

MM: Agree, not on that boundary.

LH/MM: Closer to comfort if classes and modules have strict bodies.

MM: Agreed not to hold up consensus

YK/RW: No Arrows

#### Conclusion/Resolution

Consensus on...
Stay the course on spec development approach
Class, Modules implicitly strict.
Arrows not strict
Sustaining our position on the handling of let ambiguities
(Note: this is a local consensus)

MM: Declared as not holding up consensus, though not in agreement. I still think this is a terrible idea, but it looks like the best we can declare consensus on.

BE: (Out of band) I think that's a good consensus, arrows can't have intrinsic names (contrast with NFEs) so arguments.callee may be wanted, so arrows should not be strict-only.


## Static/Class Side Methods

(Yehuda Katz)

```
ClassElement:
  MethodDefinition
  "static" MethodDefinition
```

Full strawman here: http://wiki.ecmascript.org/doku.php?id=strawman:class_method_syntax

Supported by TypeScript, Continuum, etc.


#### Conclusion/Resolution

Consensus in support of this proposal. (File spec update ticket)


## Revising The Array Subclassing "Kind" Issue

(Allen Wirfs-Brock)

Reiterates the issue at hand, illustrated here:

```js
class V extends Array {
  constructor(...args) {
  super(...args);
  }
}

var v, m;
v = new V(1,2,3, );
m = v.map(val => val * 2);
console.log( m instanceof V ); // false :(
```

If we extend...

`Array.from( iterable ) => Array.from( iterable, mapFn )`

```js
// Add a "map" function to the class-side from method:
NodeList.from( nodelist, thing => thing );

// Turn an array into NodeList
NodeList.from( array, thing => thing );

// Turn an array of nodeNames into NodeList of nodes
NodeList.from( ["div"], node => document.createElement(node) );
```

MM: thisArg?

EF: It's possible to lose the context if you alias the ClassMethod

MM: For consistency purposes, add thisArg

#### Conclusion/Resolution

Consensus on this proposal, with the addition of thisArg per Mark's request.


## 4.7  Fail-fast destructuring with ?-syntax for irrefutable opt-in

(Brendan Eich, Andreas Rossberg)

1. No ToObject(RHS).
2. Exception on missing property selected without a ?-suffix.
3. ?-suffix allowed on any pattern, imputing undefined deeply instead of refuting.
4. The ? is a separate lexeme from the : in long-hand patterns.

One entry point:
https://mail.mozilla.org/pipermail/es-discuss/2013-January/027800.html

Allen argues cogently against (1) but endorses (2-4).

BE: (Whiteboard)
```js
var { toLocaleString, split } = "";
```

The only ones that are affected: string, number, boolean.

ARB: implicit conversion is future-hostile to pattern matching.

STH: (Whiteboard) Example of pattern matching.

switch ("x") {
  match {}: return 1;
  match _: return 2;
}

 You do not want implicit conversions in pattern matching, which would make this take the first branch. Similarly, if we allow matching literal strings.

ARB: For consistency, would imply conversions for other pattern types, too (e.g. literals). No issue technically, but insane from practical perspective

BE: Reiterates... In the case where

There is no history of primitives being used on the RHS, so there is no need to support any kind of implicit ToObject.

"You say po-tah-to and that doesn't change tomato".

...

MM: Question about cover grammar.

AWB: The grammar is spec'ed and in the latest draft.

...

YK: Wants irrefutable destructuring, ie.

```js
function Foo(options) {
  var { foo } = options;
  // if foo is not a property of options,
  // just give me "foo" that's undefined
}
```

BE: Use the ?

```js
function Foo(options) {
  var { foo }? = options;
}
```

WH: Is ? deep or shallow? i.e. what should the following do
var { p, r }? = q;
? answered:
- if q is null: p and r are undefined
- if q is {r: 7}: p is undefined, r is 7.
WH: That means that ? is deep.

WH: Given the discussion above (not recorded in these notes?) about doing primitive pattern matching assertions in the future, just curious what the semantics of ? ought to be so that it would interact well with such assertions. Example:
What should ? do in these cases?
let {p, q}? = {p:17}
Here p gets 17 and q gets undefined because ? distributes down.
But then what happens when we get value assertions? Without getting into syntax details, assume that x: true is a value assertion that fails unless property x exists and has the value true.
let {p: {x: true}}? = null
let {p: {x: true}}? = {q: null}
let {p: {x: true}}? = {p: null}
let {p: {x: true}}? = {p: {}}

Mixed Discussion and debate, re: pattern matching examples.

BE: Return to... Waldemar, are you satisfied with ? for irrefutable destructuring?

WH: The question, is there a purpose of having a shallow "?".

BE: The common case is implied deep "?"

AWB: More comfortable if there was a strawman of what the full language would be like in the future.

BE: Dave has a proposal written, but we need to capture the latest developments.

ARB will work out new pattern matching strawman based on proposed ideas.

BE: (to YK) have we assuaged your concerns about irrefutable destructuring?

YK: yes, as long as "?"


#### Conclusion/Resolution

- No implicit ToObject(RHS). **consensus**
- Exception on missing property selected without a ?-suffix. **consensus**
- ?-suffix allowed on any pattern, imputing undefined deeply instead of refuting. **consensus**
- The ? is a separate lexeme from the : in long-hand patterns. **consensus**

"?" in combination with default values, syntax error.
```js
{ a? = 42 } // throws.
```

If you write a "?" on a larger structure, you can have default values anywhere inside.

```js
{ a: b = 42 }? = undefined
```

WH: Where should the ? go syntactically? In particular, should we have
{p: q?}, {p:? q}, or {p?: q}

STH:
```js
let { p }? = null;  // p bound to undefined
let { p? } = null;  // throws
let { p: q }? = null; // q bound to undefined
let { p?: q } = null; // throws
```

WH: This is quite close to conflicting with the ternary operator but can't think of any obvious ambiguities as long as the ? in patterns is always followed by =, }, comma, or :.

Dependent on patterns being fail-fast:
ARB: Cute idea: Make ```undefined``` into a keyword that is also a pattern that matches only the undefined value. This way existing definitions such as
var undefined;
and
var undefined = <something that evaluates to undefined>;
and
(function (undefined){})()
will work, but
var undefined = 42;
will fail.

**General Agreement**

## 4.11 Name Property of Functions

(Brendan Eich, with additions by Brandon Benvie)
http://wiki.ecmascript.org/doku.php?id=strawman:name_property_of_functions

BE: Early approaches...

```js
function f() {}
f.name == "f";
```

BE: (from Brandon Benvie's proposal)

Justification: the usefulness of the name of function is not just for debugging. It is useful in the same ways that property names as strings are such as dispatching by name or assigning by name.

1. Every function has an own "name" property, and this property is always a string (unless the user specifically decides to violate this norm).
2. This name property is initialized with the value that makes sense from static semantics.
3. Allow predefined names to be altered in cases where it makes sense.

Semantics:

The baseline descriptor for every function is the 'name' property defined as
{ value: "",
  writable: true,
  enumerable: false,
  configurable: false }

For FunctionDeclarations, named FunctionExpressions, MethodDefinitions, or accessor Properties then the function's "name" property is set to the given identifier.

In the case of the constructor method of classes, the class
name is used instead.

In the case of accessors, "get" or "set" is included.

The "name" property is set to non-writable.

Function.prototype's name is also non-writable.

Anonymous FunctionExpressions and ArrowFunctionExpressions assigned in a VariableDeclaration or ObjectExpression are given the name of the variable or property they are assigned to and the name remains writable.

Anonymous ClassExpressions follow the same semantics, with the name being used for the constructor method.

Whenever a function's name is defined by a Symbol instead of a regular identifier then the name is the result of ToString(symbol).

The name property should (probably) not have any reflection on the output of Function.prototype.toString.


MM: Having the result of toString be immutable is important, agree with proposal semantics.
...Security leakage from the name property, is the type of information that the toString method leaks. No integrity issue, just a confidentially issue.

BE: We _could_ make Function.prototype.toString be a getter that can be removed.

MM: This is one of the aspects that I gave up attempts to secure, and it's never been an issue.

BE: Make it writable?

WH/MM/AWB/YK: Writable.

WH: There is a slight advantage to making it non-writable. Otherwise when writing it to change the function name, you'd expect it to change the result of "toString".

Discussion re: history of Function.prototype.toString result.

MM: Explain the divergence, toString is a reflection of the source code itself and the name is how you'd like to identify the function within tools.


#### Conclusion/Resolution

- Consensus on the proposal, with { writable: true }


## 4.12 Typed Arrays Update

(Allen Wirfs-Brock)

Slides (pdf): http://wiki.ecmascript.org/lib/exe/fetch.php?id=meetings%3Ameeting_jan_29_2013&cache=cache&media=meetings:typedarray_status.pdf

AWB: We're absorbing control of the TypedArray specification, previously authored by Khronos.

W3C has dependencies on the Khronos spec.

This specification will not include any parts of the Khronos spec, but will be compatible.

JN: We need to make sure we're not violating anyone's IPR, István can inquire.

EA: We can have Ken (Kenneth Russell, Google) review the drafts.


LH: Short term, the editors need to understand what's going on and there is no push back. The standards organizations need to know that we're now working on this specification. **Agreement**

AWB: (Proceeds to technical presentation)

**Integrate into ES Spec**
- ES spec conventions and semantics not WebIDL
  - Khronos spec not necessarily tracking WebIDL
  - eg. instanceof
- Lot's of implementation differences among browsers at MOP level to straighten out
- TypedArrays are subclassable

LH: TypedArray implementations are incompatible in the same way that all DOM implementations are incompatible, because WebIDL is not implemented compatibly.

**Max Length**
- Currently Khronos spec's all lengths as Uint32
- Not future friendly, especially for byte sussed element arrays
    - eg. a Uint8Array might map to a large real memory-mapped buffer bigger then 4GB.

LH/AWB: Seems that WebIDL is the cause of this constraint.

AWB: I'm going to spec the max length at Int, not Uint32

LH: Should record the deltas

**Khronos/W3C TypedArray Objects**
(Diagram)

AWB: 9 prototype objects, 54 distinct method/get accessor functions per Realm.

MM: How did we get 9?

LH: UintClampedArray, which used to be CanvasPixelArray

**Prototype Hierarchy Factoring**
(Diagram)

AWB: 10 Prototype objects, 6 distinct method/get accessor functions per Realm.

# 10, TypedArray.prototype

+ `[ BYTES_PER_ELEMENT: int abstract ]`
+ `set() void`
+ `subarray() void`
+ `byteLength() int get`
+ `byteOffset() int get`
+ `buffer() Object get`
+ `length() long get`

- `Int8Array (BYTES_PER_ELEMENT int=1)`
- `Int32Array (BYTES_PER_ELEMENT int=4)`
- `Uint8Array (BYTES_PER_ELEMENT int=8)`
- `Uint32Array (BYTES_PER_ELEMENT int=4)`
- `Float32Array (BYTES_PER_ELEMENT int=4)`
- `Float64Array (BYTES_PER_ELEMENT int=8)`
- `Int16Array (BYTES_PER_ELEMENT int=1)`
- `Uint16Array (BYTES_PER_ELEMENT int=1)`
- `Uint8ClampedArray`



MM: A Uint1Array or BooleanArray, where each element is one bit.


**TypedArrays act like fixed length, numeric element JS Arrays**

- So why not even better Array integration?
- Class methods?
  - TypedArray.of
  - TypedArray.from
- TypedArrays should be iterables?
  - @@iterator
  - keys
  - values
  - entries

**Even Better Array Integration**
- Other Array.prototype methods that will work just fine on TypedArrays
  - toString, toLocaleString, concat, join, reverse, slice, sort, indexOf, lastIndexof, every, some, forEach, map, filter, reduce, reduceRight
- Only 5 Array.prototype methods won't work with TypedArrays
  - push, pop, shift, unshift, splice


**Add Array methods to TypedArray**
(Diagram)


WH: Are TypedArrays spread by Array.prototype.concat and ...?

LH: TypedArrays are a targeted tool for byte level programming.
...Doesn't think that the generic, higher-order Array APIs should be exposed on TypedArray

WH: [Repeats question]

?: TypedArrays are not exotic arrays so don't get spread by Array.prototype.concat and ... . On the other hand, TypedArray.prototype.concat will spread TypedArrays only.

WH: OK.

(Debate about whether TypedArrays need the suite of Array methods)

YK: Using TypedArrays would be a pain if they didn't already offer these array operations.

WH: It would be too confusing to have gratuitously different APIs for two array-like things in the language.

RW: Agree.

AWB: My understanding was that we were absorbing these in order to provide the capabilities that the language provides

STH/WH/YK/RW/EA: Strong Agreement.

LH: Agree that there are some use-cases for these, but may not be our place to define these methods

YK: (channelling Alex Russell) The reason we're taking this on, is because it's our responsibility to correct "yet another array like thing that isn't an array"

RW: Agrees.

LH: Implementation and performance issue concerns?

WH: This is not a lot of work for implementations, and implementations (as opposed to users) are clearly in the better place to implement these efficiently.

(STH: After the end of the official meeting, there was some discussion as to why Typed Arrays wouldn't just become genuine Arrays. This would mean
that they'd have all the Array methods, some of which would throw on use (those that change length). This needs discussion at a future meeting.)

#### Conclusion/Resolution

- Move forward with the plan presented.
