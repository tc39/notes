# July 29, 2015 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Sebastian Markbåge (SM), Jafar Husain (JH), Eric Ferraiuolo (EF), Caridy Patiño (CP), Waldemar Horwat (WH), István Sebestyén (IS), Mark S. Miller (MM), Adam Klein (AK), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Jonathan Turner (JT), Paul Leathers (PL), Chip Morningstar (CM), Vladimir Matveev (VM), Ron Buckton (RBN), Brian Terlson (BT), Alan Schmitt (AS), Ben Newman (BN), Mohamed Hegazy (MDH), Abhijith Chatra (AC), Tom Care (TC), John Neumann (JN), Dave Herman (DH), Brendan Eich (BE), Daniel Ehrenberg (DE), Dan Gohman (DGN), Andreas Rossberg (ARB), Rick Waldron (RW), Mike Pennisi (MP), Akrosh Gandhi (AGI), Jonathan Sampson (JSN)


-----

## 6.11 The scope of "use strict" with respect to destructuring in parameter lists

(Andreas Rossberg, on phone)

- [slides](https://docs.google.com/presentation/d/1nv4UPDgjL7SdXewTPBt_IpcRxkIFzhz1ENrfyvKcY8Q/)

ARB: Strictness Scoping

Issues:

- VMs need to do parsing & static checks in single pass
- w/o building an AST (lazy compilation)
- Backtracking is not an option (at least not for V8)


DH: clarify backtracking (2 possibilities?)

ARB: rewinding token stream

ARB: easy in ES5 because only additional check is duplicate parameter names

```js
"use sloppy";
function f(x, x) { "use strict"; }
```

Difficult in ES6, b/c default parameters


```js
"use sloppy";
function f(g = (o) => {with (o) {}}) { "use strict"; }
```

ARB: also cannot determine scope due to interactions between Annex B and strict mode:

```js
"use sloppy";
function f(g = function(h) {
  { function h() {} }  return h;
}) {
  "use strict";
}
```

WH: The issue in this example is hoisting and variable binding, which is more than just error checking. Function h here is nested inside a local block, which means that the 'h' in the return statement refers to different bindings in strict vs. non-strict mode. But you don't know that strict mode is in effect until encountering the 'use strict' later!

DH: Don't know yet whether this is an error until later. Previous examples: Store a "dirty bit". This example: have to have a data structure that will hoist in 1 of 2 ways if it turns out to be strict mode. Implementable without backtracking.

WH: Note that a single state bit is insufficient. You can have these things nested arbitrarily deep, leading to a potential exponential explosion of states.

ARB:

Much More Difficult in ES6

- The directive can affect arbitrary code
- Nested arbitrarily deep
- Would need ot defer any sort of mode-specific decisions in the parser for code that occurs in parameters
- But with arrow functions, we do not even know (in time) that we are in a parameter list

```js
"use sloppy";
let f = (g = () => { /* Are we a parameter? Do we have to defer? */ with (o) {} }) => { "use strict"; }
```

ARB:

BE: The arrows are parsed with a cover grammar
- When initially implementing strict mode, SpiderMonkey had to implement token stream backtracking to account for the function body "use strict" prologue affecting to the left

ARB:

Categories of mode specific logic

1. Mode-specifc errors: (eg. with, delete, for-in, octals, let, variable name validity, parameter conflicts)
-> Easy to defer, at least in principle, but may have measurable cost
2. Special handling of eval (scoping, variable modes)
-> Not an issue
3. Actual divergence in parsing/scoping (Annex B function scoping, yield?)
-> Affect downstream decisions, transitively defer

DH: yield doesn't have contextual differences in strict mode, in generator functions

AWB: restricted in strict mode (non-generator) functions
- other differences?

DH: this-binding

YK: to be clear, these disadvantages only apply to sloppy mode programs; modules and strict mode programs are not affected

ARB: 3 modes, effectively:

- sloppy
- strict
- "don't know"

DH: (discussing potential for performance regression)
- Any parenthesis expression could potentially end up in slow mode

ARB: Agree

AWB: Don't see this as a problem for JITs

BE: (asks implementors what they're doing to solve)
- SpiderMonkey uses token stream rewinding and it covers all the cases

PL: We haven't gotten this far

ARB: This has been brought up with the team before, and token stream rewinding has been off the table
- Don't want to do token stream rewinding in V8, various issues (e.g. with Blink interaction?)


BE: If it can be done and satisfies performance constraints, then engines should consider

ARB: Compiling functions separately, ie. if function in parameters, compile sep. More than just rewind, would have to record all the functions, may be done with them, may not be done with them

MF: Can we see a proposal/solution?

ARB: Make it an error to have a "use strict" directive in a function with a non-simple parameter list.

YK: Should implement ES6 as written while this is resolved.
- Don't block implementing default parameters on this
- Just a suggestion

BE: "more of a guideline than rule"

AWB: You could make the restriction more specific: only disallow functions that declare "use strict" and contain a function in their formals list

ARB: Could be that only error when "use strict" inside function would change the mode, as the outer mode might already be strict

YK: refactoring hazard.

BE: Jason Orendorff says "works for me"

AC: don't like this suggestion, I don't want to impose an error because an implementor couldn't make it work

Discussion, re: hardship of implementation

YK: Don't like that end developers have to know why this won't work, b/c implementing hard.

BE: implementors are considered second to developers

AWB: previously, sloppy mode was restricted to simple parameter lists.

BE: No micro modes: no runtime semantic differences due to

AC: Chakra implements with rewinding

YK: objection: semantically this is the wrong thing

DD: but we're moving to all-strict world, so making the mixed mode cases more painful might be ok

DH: This is such an edge case that I don't tihnk there is an adoption risk.
- "use strict" retroactively providing subtle differences in the parameter list is a gotcha
- preventing diversions in the semantics to close window of confusion

BE: Suggestion fixes the right-to-left violation

DH: Could enumerate all those cases and make errors, but much harder.
- Fixes, but means new rule

YK: Poisoning `function () { "use strict" }`

BE: use top level "use strict"

YK: Not realistic

BE: Andreas reduced list to parameter lists that contain:

- functions
- arrows
- future "do" expressions

Discussion re: "use strict" expectations

YK: Prefer the stricter rule

DH: appear to have consensus on Andreas' solution

AWB: What exactly do we mean by "a function with a 'use strict'; prologue? Are we only talking about "strict transitions" (i.e. functions that declare "use strict" that are in non-strict contexts) or do we mean "use strict" in *any* functions.

MM: Functions that have a "use strict" know that they are strict, whether they are "pasted" or typed
- Taking the strict function out of strict context may cause errors as a result of code execution that previously expected strict context, which is a refactoring hazard

MP: Another (less difficult/serious) case where strict-function-rewinding is relevant is in the case of named function expressions. e.g.

```js
(function static() { "use strict"; });
```

Ref: https://bugs.ecmascript.org/show_bug.cgi?id=4243

Discussing implemention strategies

- checking for duplicates
- eval, arguments
- yield, let


BE/AWB: existing semantics imply some right-to-left checking

BE: Non-simple is:

- default
- destructuring
- rest

(Anything that is _not_ a list of identifiers)

YK: Need to acknowledge that we'll need to tell people to _not_ "use strict" in functions, if they use non-simple parameters.

Acknowledged.

The solution is just use top level "use strict"

DH: We'll fail to explain this at the level of enumerating ES6 features they can or can't use in this case. The outcome is something like "just use top-level strict, or iife strict"
- Would like to revisit


YK: Not just this edge case: ES6 and strict mode has created this weird window.

AK: Functions in the parameter list might become strict if the function is "use strict"

DH: `this` behaviour changes

YK: Ultimately breaking "use strict" for function

AWB: Any function whose mode (lost track)

Discussion about ES6 feature adoption.

RW: disagreed with error when "use strict" occurs locally, but outer mode is already strict (ie. no mode change)

Discussion about developer expectation.

AWB: there is another alternative spec function that is more restrictive: ContainsExpression

RW demures ("You might say I am not willing to die on this hill.")

#### Conclusion/Resolution

- Make it an error to have a "use strict" directive in a function with a non-simple parameter list.
- Early error
- No matter what mode you were already in
- When people want to use local "use strict", doing it b/c they want to know that this is always strict, no matter where it ends up.
     - Applies to all kinds of function/generator syntax
- IsSimpleParameterList http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions-static-semantics-issimpleparameterlist



## 6.9 Reconsidering the Number.prototype-as-an-ordinary-object change

(Daniel Ehrenberg)

DE: This change breaks the web (specifically: mootools calls `Number.prototype.valueOf(Number.prototype)`)

https://esdiscuss.org/topic/number-prototype-not-being-an-instance-breaks-the-web-too
https://github.com/mootools/mootools-core/issues/2711

Solution: roll back the change.

BE: Number, String, Boolean should be

MM: To be clear: Date.prototype will be an object, not Date; RegExp.protototype will be an object, not RegExp. Every built-in constructor introduced after ES5 will have a plain object prototype.

MM: Prefer we do Number, Boolean, String together

#### Conclusion/Resolution

- Boolean.prototype, Number.prototype, String.prototype rolled back
- File a spec bug?



## 6.12 Spec defacto String.prototype.trimLeft/trimRight

(Sebastian Markbåge)

https://github.com/sebmarkbage/ecmascript-string-left-right-trim

SM: Already shipping in all major engines. Controversy: what to call it?

JHD: in JavaScript, left-to-rightness of strings is a rendering artifact. The conceptual "first" character of any string, whether LTR or RTL, is index 0, and the "last" is index length minus 1. Thus, in JS, left/start/index zero are the same, and right/end/index length minus one are the same.

DH: These are extremely common in programming languages

Discussing semantics of "left", "right" and "start", "end"

DH: There is precedence for JavaScript interpreting the word "right" to mean "the end of a sequence", from ES5: `Array.prototype.reduceRight`

#### Conclusion/Resolution

- Stage 1 acceptance



## REVISIT: 6.11 The scope of "use strict" with respect to destructuring in parameter lists


DH: The only thing that "use strict" can cause (in ES5) is an error (to the left)
- Our resolution was to say, "the use strict prologue in functions is now defunct"
- An alternative, w/ better outcome: revise "use strict" to no longer affect _anything_ to the left.
- A back-compat change, because it only allows things that were previously disallowed.
- no semantic difference

AWB: There are implementation semantics, w/r to parameters
- extra scope contour for eval context
- duplicate parameters


WH: How does it affect hoisting checks?

AWB: Hoisting rules in annex b don't apply if there is decl of same name (need to double check)

MM: How did we resolve names introduced in the function head vs names introduced in the function body, w/r let/const

AWB: disallowed

Discussion, re: strict in blocks?

AWB: need to check this against the existing function declaration instantiation, re: strict/non-strict checks

STH: Expressions in parameter list are not in strict mode.
- Enter strict mode due to prologue at beginning of function, does put parameter list expressions in strict mode

YK: Bigger picture: ES5 introduced the concept of a strict function.
- The proposal before is honest about admitting that's not a thing
- Sam's proposal ignores that and introduce's a new thing


Discussion, re: expectations of strict mode in functions


AWB: parameter with an initializer that uses `this`
- Assuming that's called with nothing in that position, what is `this`?
- If strict, `this` is undefined
- If sloppy, `this` is global object

```js
"use sloppy";
function f(foo = this) {
  "use strict";
  return foo;
}
f();
// what is the value of this expression? the global object? or `undefined`?
// w/r to Sam's proposal (eliminating right-to-left strict-ness effect)
```


YK:

With Sam's proposa, this would return `[undefined, Global]`, despite expecting `[undefined, undefined]`

```js
(function(foo = this) {
  "use strict";
  return [this, foo];
})();
```

DH: In ES5, there was a fundamental confusion about "use strict" in functions. This was exacerbated by ES6. In the fullness of time, TC39 is saying, the directive prologue should be used:

- Global "use strict" (being careful of script concatenation)
- Top-level IIFE "use strict"
- module code

MM: We should be explicit w/r to "top level strict mode", in that we actually mean "top level iife with strict mode"—to avoid the concatenation problem.

Advice: "Just use modules".

#### Conclusion/Resolution

- The previous consensus remains




## REVISIT: 6.7 new & GeneratorFunction

AWB: (answers to questions from yesterday)

- Generator functions are new-able
- Generator methods are new-able
- Implicit body


```js
function * g() { this.foo }

x = {
  *f() { this.foo }
};

new f(); // ok
new x.f(); // ok
```

Relevant SpiderMonkey bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1166950

DH: Bare generator function call behaviour is correct?

AWB: Confirm


Updated:

| S | I | Code |
|---|---|-----------------------------------------------|
| X | X | `{ *foo() {} }` (no [[construct]]) |
| X | X | `function * () {}` (no [[construct]]) |
| ? | ? | `function * () { this }` is exactly like `function() { this }`  |


AWB: Concern about removing new:
- Implemented to allow it without throwing
- No TDZ on `this`

Acceptable risk?

BT: Implementors on both V8 and SpiderMonkey have shown interest in making generator not newable


#### Conclusion/Resolution

- Spec change: generator functions and methods do not have a [[construct]] trap, so `new` throws




## Process Document discussion (to settle things once and for all)

(Domenic Denicola)

DD: (Showing https://tc39.es/process-document/)

Reviewed:

- https://github.com/tc39/process-document/pull/1/
- https://github.com/tc39/process-document/pull/2/



AWB: w/r to reviewers, committee should assign reviewers.

DD/RW: reviewers attached at Stage 1. Stage 2 entrance requires review

RW: Propose: At Stage 0, reviewers get "attached", but non-binding. (basically, it's a "champion group")


... Next thing...

## What is an "implementation"?


Discussion re: Stage 4

- Important to get feedback from engaged implementors

RW: Concerns about flag/no flag

DD: Must be unflagged

RW: Disagree, will result in stonewalling from implementors

DH: Transpilers should count

Discussion, re: experiences had with other new features.

"Significant in-the-field experience with shipping implementations, such as that provided by independent VMs"

Stage 3: "Will require feedback from implementations and users"



#### Conclusion/Resolution

- need links to Domenic's commits


## 6.8 SIMD.js: Start the process to move towards Stage 3

(Dan Gohman, John Mccutchan, Peter Jensen, Daniel Ehrenberg)

- [slides](simd.pdf)

DE: (introducing topic)


- Boolean vectors
Previously, the result of SIMD.Float32x4.greaterThan was a SIMD.Int32x4 vector, with -1/0 for true/false
Now, new boolean vector types, e.g. SIMD.Bool32x4, represent boolean results and values
Used for select and logic operations
More efficiently implementable on some architectures
Not simply Boolx4 because the registers in implementations may be represented differently based on width.


- Unsigned operations

Unsigned comparisons
Unsigned saturating add/sub
Unsigned extractLane
No changes needed for constructor, replaceLane because coercion will wrap unsigned values to the appropriate signed value
No separate unsigned type


- Postponed features

Float64x2--we couldn't find an important use case with improved performance
Int64x2--Not needed due to boolean vectors, and really not needed because Float64x2 is out
selectBits--minimal utility due to select, and efficiently implementable in terms of other boolean operations


- sumOfAbsoluteDifferences replacement

widenedAbsoluteDifference, unsignedHorizontalSum, absoluteDifference
Seeking implementation feedback: applications and benchmarks
Replaces sumOfAbsoluteDifferences (slow on ARM)


- Other spec changes

Homoiconic toString()
`SIMD.Float32x4(1, 2, 3, 4).toString()` => `"SIMD.Float32x4(1, 2, 3, 4)"`
Shift operations max out at 0/-1, rather than wrapping around
Ops like reciprocalApproximation are loosely specified, like Math.sin
Removed operations on DataView--TypedArray ops suffice
Operations on subnormals may flush to 0, unlike ES scalars
Various minor spec bug fixes


AWB: w/r toString. The approach shown is a new precedent

DD: Similar to Symbol

AWB: Will this be the new way

BE: value types with literal form should convert, but this isn't value types. I like it.

AWB: Should other new things have this toString() output? Map & Set?

(moving on)

- Strong type checks on lanes

Lanes are required to be Int32s and not implicitly coerced

(See 5.1.2, http://littledan.github.io/simd.html )


AWB: for WebIDL, we advised to use normal ES coercions

DE: Considered specified getX, getY, etc.

DH: I don't know if it's that important to coerce or check.

BE: Doesn't want this to be an enumerated type. Symbols?

AWB: The advantage is that Symbol is not coercible and you only accept those that you've defined.

DE: if we had a Symbol API, we'd still want an extract lane API

STH: numbers are the right thing here

AWB: ToNumber, because that's what ES does
- Actually ToInteger
- ToLength

WH: Note that the proposal is a bit inconsistent in validating numeric inputs. For example, shifts use ToUint32 for the shift count, which turns -1 into a huge shift amount. ECMAScript's built-in shifts treat the shift amount mod 32, while the proposed ones treat it mod 2^32.

DE:


- load and store operating on any TypedArrays

load and store take TypedArrays as arguments and permit array element type mismatch with SIMD type


WH: Reading spec, cannot load and store booleans. Looks intentional.

DE: Fails on booleans, intentionally.
- Intentionally abstract data type
- Want concrete data type, call select

WH: Fix other places in the spec for booleans, such as the statement that bitwise cast can cast any SIMD type into another SIMD type.

AWB: (requests justification for extracting values of a different type than the type of the Typed Array)

DE: DataView doesn't really work, in an asm context. Operations on DataView accept endianness where this has to use native endianness to be efficient

AWB: if int8 array, extracting floar 64, does it

DE: No, it is element-aligned. The hardware supports this.

DGN: (phone) confirms hardware support

AWB: If you're talking about a float32array and you're extracting int16's, that just seems like a type error.

DE: Better?

DH: Go back and change array buffer, can't do that
- ArrayBuffer was defined as opaque
- Everyone wants to change rthat now
- No real world constraint

DE: how is opacity enforced?

(no answer yet)

WH: Some ArrayBuffers are indeed opaque. Restricted exposure for security reason

DH: TypedArray views on ArrayBuffer, detached
- Allow operation on ArrayBuffer
- We'll have to break the invariant


BE/DH: what they're doing will work

WH: Not a pointless invariant. Move on.

(moved on)

Questions for Committee

- Should wrapper constructors be explicitly [[Construct]]-able, like Number, or not, like Symbol?

BE: have to call with new to get the object

AWB: Symbol is just odd because concern that `new Symbol()` would be used to get a generative object.

DD: Necessary to impose a rule for creating a Symbol
- No literal form? No wrapper

DE: if you call construct, if NewTarget undefined, construct wrapper

AWB: Minimize new patterns. Overloading constructor is not new.

AK: Why this route instead of Symbol route?

DE: Symbol is special throwing on new? But maybe Symbol is the new way

DD: If no literal, then no `new`. If a literal is added later, then re-open `new`

BE: (explains wrapper history, aggree with DD)

(moving on)

Spec Language Innovation Acceptable?

- Rest parameters
- SIMD as a spec meta-variable


AWB: There was use of rest early in ES6, but taken out

BE: parameters that were optional

AWB: implies JS level parameter list

DE: no


Discussion, re: spec mechanisms

(moving on)

RW: Recommend moving this to a separate spec, similar to Intl (Ecma-402). (Note that this was considered ideal by the champions as well, despite the opposition from other members).

DH: disagrees

WH: Also disagrees with separate spec. This defines primitives tightly bound into the core of ES, with serious interactions and precedence-setting with other ES work such as value types.

DE: Issues surrounding value type definitions, but don't want to to wait for value types. Don't want to be blocked and separate spec ensures that

(moving on to implementation status)

Firefox Implementation Status

In Firefox nightly:

- Float32x4 and Int32x4 entirely implemented and optimized in JavaScript (regular and asm.js) on x86 and x64.
- Missing boolean vectors
- Other SIMD types (Int16x8, Int8x16, Float64x2) partially implemented in the interpreter only (ergo not optimized). The newer APIs (SAD) haven't been implemented yet.
- All SIMD types are implemented as value objects, at the moment.


Microsoft Edge Implementation Status

- Majority of SIMD.*.* APIS supported.
- Some of the new APIS need to be implemented such as ExtractLane and ReplaceLane, and unsigned operations
- Asm.js optimization is complete (minus new api support).
- Non-asm.js optimization we plan to start soon.


V8 Implementation Status

- Intel object implementation will not be used for V8 and work has started to implement value types from scratch. Intel code generation may be rewritten to the new model.
- Bill Budge has added a Float32x4 type with correct value semantics and basic operations, without acceleration, behind a flag.


Specification Status

- SIMD.js Specification v0.7.2
- Updated polyfill and tests validate all operations, basic value semantics
- SIMD.js is ready for reviewers and and editor comments/signoff
- Hope to move to Stage 3 in the September meeting


Requesting reviewers


WH: purpose of spec, disagreement whether to support only use cases experienced or useful with a more ecmascripty orthogonal feel. For example, the spec currently can load int8, uint8, int16, uint16, int32, uint32, but it can only extract the first five of them (can't extract uint32 even though can extract int32 or uint16). Min and max work on floats but not on integers, even though there is no hardware obstacle to do so and even though there are much more complex intrinsics defined such as
unsignedAbsoluteDifference.

DE: support unsigned operations on int16 and int8

BE: waldemar wants max on integers that can

DH: SIMD building clear layer to hardware

WH: want consistency:

- integer max
- uint32
- for usability, uint8 SIMD pixel values printing liked TypedArrays as 255,255,0 instead of -1,-1,0.

WH: Diverged from TypedArray,

AWB: TypedArray both have int32 and uint32, JS programmer expects that

BE: argument to be consistent

DE: TypedArray is the model going forward, with the exception of Uint8ClampedArray

AWB/BE: Yes

WH: treatment of denorms non-deterministic

DE:
- operation and flush to 0
- operation only

WH: Does the hardware flush both inputs and outputs to 0, or is there some major hardware that flashes only inputs or only outputs to zero? (an arithmetic operation might take denorms as inputs, or it could produce a denorm output even though all inputs are norms)

DE: Both inputs and outputs

WH: [later in the discussion] Intel has FTZ and DAZ bits which control these separately, so they can be independent.

(Difference between Arm and Intel)

DGN: Arm 64, arm v8 corrects this

MM: this non-determinism is actually just difference between platform

WH: The SIMD spec doesn't state that. It could differ operation-by-operation.

DE: The spec can't state that.

WH: Really? Why?

Discussion re: nan encoding

DE: http://www.ecma-international.org/ecma-262/6.0/#sec-setvalueinbuffer (step 9.a)


AWB: (explaining why spec says this)

DH: we should change the def of SameValueZero to say that two different bit patterns for a NaN are not equivalent

DE: create a data property and set value to one bit pattern, non-writable, non-configurable, call Object.defineProperty with a different NaN, then do [[Get]] and you'll receive old bit pattern

DH: No mutation, but incorrectly states that change was successful

DE: spec says a platform will have one endianess or the other; this can be applied to denorms. Spec dependent.


WH: What do relational operations (.equal, .lessThan, etc.) do when they see a denorm? treat as zero?

DGN: treat as zero

WH: So then what will === do? Do they equate all distinct denorms to zero (which would be really weird as ES behavior)? Are you going for the fast implementation of === or the precise implementation?

DGN: === does not equate denorms to zero, even on platforms that flush denorms. It can be slower than .equal.



http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4610935

DE: One outstanding question was whether this work should be done in a separate specification.

RW: Yes, I had suggested that. But you said something about a polyfill for SIMD.js?

DE: It is incomplete

BE: It can't express value object; it can't intercept `==` or `===`

RW: Alright, then it is no longer a suggestion of mine

Unsigned Types? Argument for them?

Consistency with TypedArray


DH: I want to know more about what SIMD use cases are, operations should map to need


WH: want unsigned types:
- consistency with typed array
- printing (want 255, not -1)

(not an explosion of the API)

DE: fewer function names, more function objects.

AWB: lot's of domains with similar conventions
- once integrated, it becomes part of the spec as a whole and will require understanding of these irregularities
- an argument _for_ separate spec

DE: it's a large thing, mostly irreducible

JHD: non-specialists are going to write this stuff by hand.

(Argument to make the API more like JS)

DE: prefer to keep it as is

YK: So a specialist doesn't need the unsigned types?
- then don't worry about use by non-specialists


DH: Either accept Waldemar's argument, or state case based on historical precedence. If no consistency, then don't care.

WH: Note that I'm not alone with that argument. I don't want this to become personal.





#### Conclusion/Resolution

- `new` throws
- not separate spec
- spec mechansisms: Allen, Brian, Rick and Dan to work through
- Reviewers:
    - Waldemar Horwat
    - Jordan Harband
    - Brendan Eich
    - Mark Miller
