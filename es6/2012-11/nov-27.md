# November 27, 2012 Meeting Notes
-----

John Neumann (JN), Norbert Lindenberg (NL), Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Brian Terlson (BT), Luke Hoban (LH), Rick Waldron (RW), Eric Ferraiuolo (EF), Matt Sweeney (MS), Doug Crockford (DC), Nebojša Ćirić (NC), Yehuda Katz (YK), Erik Arvidsson (EA), Mark S. Miller (MM), Dave Herman (DH), Sam Tobin-Hochstadt (STH)

-----

## Welcome

...Welcome and introductions. JN welcomed members and introductions were made. DC gave us facility and logistical information. Dinner for Wednesday is set for 6 PM.

## Agenda 

JN: Previous Meeting Minutes

JN: Review and approve?

RW: Confirm that l have had opportunity to review prior to submission.

JN: Minutes from Sept 2012: Approved.


Review and approval of agenda. Labeled as rev42 will be sent to Patrick for publication.

## ES6 feedback via TypeScript

LH: Move TypeScript feedback update to later, as part of module discussion.

## Review Proposals for inclusion in ES6

JN/AWB: Discussion re: harmony:proposals page and status of listed items.

## Spread Operation accepting Iterables

RW: SpiderMonkey has implemented spread to accept iterables despite the resolution from July. Would like to revisit the resolution.

DH: The implementation was likely just a misunderstanding, will file a bug for these notes.

EA: Let's add to the agenda for further discussion.

## Agenda Discussion

Missing agenda items re-added.



Begin Technical discussion  as item 4 on agenda

## Review of new draft spec

AWB: Summary of changes in recent spec. drafts, including:
- Global declaration instantiation added, "global object + lexical scope" model.
- Program is now Script
- Set/Map size is now an accessor
- Set/Map clear method added

Notably, size is the first accessor defined by the spec.

DH: There will be more accessors defined in the module loader spec.

EA: Ensure no prototype for methods, should behave the same as spec functions.

AWB: Explains how the spec language is laid out for accessors, wherein "get" or "set" is prepended to the section item's title.

RW: (agrees that it's clear to follow)

AWB: This is the first rev. that brings in Proxy, which leads to the restructuring of early sections and internal methods.

Section outlines...

```
6. Source
7. Lexical Grammar
8. Type
Abstract Engine
Language
  Lex
  Syntactic
Vocabulary

9. Helper
10. call/return/scoping
11. expressions
12. statements
13. functions
15. Libraries
```

Explanation of rationale leading to the restriction and reorganization of internal methods for defining spec behaviors. Leading into the organization of...

### Meta Object Protocol, aka. MOP

Discussing section on invariants and how to redefine in a reasonable way. We need people who are interested in these invariants to make contributions to this section.


8.1 Language Types
8.2 Specification Types

8.3-8.5 Will be moved to after section 10, these define the concrete types

8.3 Ordinary Object - an object that uses the standard MOP semantics in 8.3. example: Objects, Function objects

8.4 Exotic Objects - any object that is not an Ordinary Object, which means anything that specifies the use of something that is not in the MOP. examples: BoundFunction, Arrays, Strings

Standard Object - any object defined by the specification.

WH: why is BoundFunction exotic?

AWB: the special semantics of [[Call]] and [[Construct]]

WH: Does this mean that all built-in functions eg. Math.sin are exotic? This labeling bothers me if the user might be able to define differences between ordinary/exotic

LH: Why aren't all objects exotic?

AWB: initially set out to replace Host Objects, initially defined as anything that has redefined its internal methods

LH: Are there any checks, "is this an exotic object"?

AWB: No, this just simplifies and cleans up the language to that describes an object that has "special" semantics

WH: Do you identify all built-ins as exotic?

AWB: Reads back from Built-In descriptions in rev12

STH: Seems like it's simply a way to ease the pains of editing the spec.

AWB: [Further explanation of

WH: ?

AWB: Every algorithm in chapter 15 is the definition of the algorithms used when [[Call]]. In a situation where we need to reify concepts where we're not sure what the execution context currently is... eg. generators

WH: How does execution context come into this discussion

AWB: The spec needs to be able to discuss these semantics (gives example)

NL/WH: How is this observable if the implementation may or may not be provided in ECMAScript code?

AWB: Only need a means by which to explain the semantics.

I need to be able to talk about the execution context of a chapter 15 function while in a chapter 15 function algorithm

DH: I'm not sure this concept of an exotic object is the best way to go about this.

AWB: At this point we're talking about chapter 15 issues, not specifically exotic objects.

DH: I think this is good to signal to implementors that something different will have to occur.

STH: This is simply a tool to aid in the editing process.

DH: Not an annex, good.

AWB: Correct, the different semantics are grouped where they actually belong.

WH: I still don't understand why there is a grouping of these types of objects.

AWB: Please review the spec... If there are any strong arguments, please share.

AWB/DH: Confirm the subject matter of sections 8.3 and 8.4

RW: (stated prior to beginning of meeting) This change makes reading, understanding and following the varying behaviors easier to follow.

WH: Reading 8.4.6 and can't follow the description...

AWB: There are issues that exist due to prior hacks (not authored by me).

STH/LH: As long as this is just a spec tool, there is nothing wrong with the chosen categorizations.

AWB: For those of you reading the spec, please re-familiarize yourself with the new terminology.

LH:

AWB: The risk for semantic change... some methods renamed, some may have different behaviors. No change to observable semantics

DH: Don't remember the proto climbing refactoring

AWB: Tries locally, then same operation on next level. Each step up is observable via proxies.

DH: not web dependent

WH: if it's not visible, why do implementations need to change?

AWB: In the presence of proxies, proto climbing is visible. The difference... What [[Get]] in the old system did was loop, instead of recursion. If a prototype was a proxy, the trap would never be invoked. In the new system, it will. The property access system needed to change to support this...

DH: We'll get feedback from proxy implementors

AWB:

MM: There are two engine based proxy implementations, SpiderMonkey and v8—let's wait to discuss the impact.

BT: So there is a low risk of semantic change in 8.x? (with no regard for proxies)

AWB: Should be no observable semantic change and this should be confirmable with tests and reviewers.
...Will add a description of what should be observable and not.

Another change happening in this edition, is specifying where each exception is thrown. Previously this was implicit, but is now **explicit**.

WH/AWB: review 10.2.1.2.6 use of ReturnIfAbrupt(value)

LH: was there concern of ambiguity before? Seemed clear...

AWB: There were places where it was unclear where the the exception should be thrown, Mark had identified the loop in ??

...Discussion about explicit exceptions

DC: Need to break.

WH: Throw on string concat over allowed length?

...Discussion about ReturnIfAbrupt...

LH: Is this a maintainability issue? If a new leaf addition is defined that uses ReturnIfAbrupt, do you have to check all call sites?

AWB: The work is already done.

... Discussion.

## Break.

## Meeting Notes - Publish to wiki
(side discussion, but valid to document)

#### Conclusion/Resolution 

- RW to publish meeting notes to ecma wiki (in addition to publishing on es-discuss and submission to ECMA)

## Internationalization Update

NL: (Summary of changes based on feedback) Spec document submitted to general assembly for approval. HTML version of the spec has been prepared, will be posted to ECMA site after GA approval. Demonstration of test402 (INTL spec testing) running on Firefox (special build, not in Mozilla repository yet).

NC: v8 Implementation has regressed, due to clean up of defineProperty use.

LH: Has an IE plugin impl., next phase is to implement directly

LH: Should have discussion re: spec intention that all checks whether this is an instance Object, is this cross-realm? or this realm?

AWB: Yes, let's discuss this. Clarify...

NL: Any questions re: Internationalization 1.0?

JN: What is the plan w/r to hosting and maintaining test402

NL: Any company that wants to invest resources into contributing tests and maintaining?

BT: Can't say specifically, but Microsoft will certainly be contributing tests

NC: Same for google

JN: Anything for submission to the GA?

NL: We'll provide a technical report of some form for submission. Will provide the number of tests, (approx) and that coverage (missing and not) is understood.

### International 2.0
(get slides from NL)

(1)
Complete Spec Sep/Nov 2013
TC39 approval March 2014
GA approval June 2014

MM: Be aware of possible delays in ES6

(2)
Prioritization

(3)
High (Or part of ES6?)
- Unicode normalization
- Case Conversion
- Character properties in RegExp or as API

Discussion re: unicode, changes in ES6 to RegExp re: unicode
No changes are in draft yet.

(4)
High (cont)
- IANA timezone IDs in DateTimeFormat
 - Chrome 24+ has impl
- Message Formatting, including gender and plural handling
 - Not clear how template strings fit in

RW/NL: agree to loop Alex Sexton into the work on message formatting specification.

(5)
Wait
- DateTimeFormat improvements
 - Need feedback on 1.0
 - Pattern strings, highlevel specifiers
 - Info for date pickers
 - Date intervals, relative dates, durations?
 - Expose ToLocalTime?

(6)
Wait
- Resource Bundles
 - Needs investigation
 - Maybe module system can be used?

WH: How are resource bundles different from JSON?

NL: That's generally how they are stored, the challenge is loading the right bundle for the application's current locale

DH: can this be stored compressed in a binary format?

AWB/LH/YK: (discussion and agreement on HTML/CSS involvement in resource bundling is too browser-centric)

WH: Rather than providing a method that loads a bundle from some web page (which will likely clash with how a particular web server is structured), provide utilities such as decoding a bundle from a string and selecting the right bundle (e.g. the current language's) from a list of bundle names.

MM: Abstract the problem to a data loading issue

EF: Whose job is it to define the information in a resource bundle?

EF/NL: generally the library or application using the data has to define its structure and provide bundles for the locales it wants to support; there is an issue when third parties want to add more locales

(7)
Medium
- Text segmentation: word and line breaks
 - Editors, offline indexing...
 - Chrome already has impl
 - Browsers names for languages
- Display names for languages, countries, scripts
- Number parsing - no currencies/percent/dates

MM: Presumably there are other standards bodies that we can use the data from.

WH: This gets into the political issue of what countries are called based on local law. Is Taiwan a country?

(8)
Medium/Low
- Calendar Support
 - Info for date picker
 - Conversion between calendars
 - Calculations within calendar (add 3 days)


(9)
No
- Title case, too many house rules
- Language Detection, too specialized
- Encoding detection and conversion, value decreasing.


(10)
- Script reording in Collator
- Pseudo-numbering systems in NumberFormat and DateTimeFormat

(11)
Approval?

JN: Who is working on this?

NL: First meeting had representatives from Mozilla, Google, Microsoft, Amazon.

JN: Will provide minutes of meetings to ECMA?

NC: Yes.

JN: Despite potential operational changes from ECMA, let's move forward with this project. Continue to report as adhoc group via this group.

#### Conclusion/Resolution

TC39 Approves to move forward with 2.0. NL will submit slides to ECMA for minutes record.


## String Normalization
http://wiki.ecmascript.org/doku.php?id=strawman:unicode_normalization#add_normalize_method

NL: AWB has removed a number of references to normalization from the current spec that did not reflect reality

**String.prototype.normalize(form)**

MM: Any sequence of utf-16 has a valid, specific normalization?

NL: Will have to check if the normalization spec has anything about unpaired surrogates.

MM: Either we make the function total, in the sense that it always returns a string, or total in the sense that we define where it throws exception.

NL/LH: (agree w/ always return a string)

NL: Are we in agreement to spec this?

MM: Requirements: (moved to resolution)


#### Conclusion/Resolution

- Yes, requirements:
  - total,
  - deterministic
  - idempotent normalization (normalizing the result of normalization again will return the first result)

WH: Note that Unicode got this wrong a while back (their normalization algorithm wasn't idempotent, and it didn't even form proper equivalence relations). They fixed it since then and now explicitly state that it's idempotent.


## String Case Conversion

http://wiki.ecmascript.org/doku.php?id=strawman:case_conversion

LH: Why isn't this in the Internationalization standard?

AWB: Is there a reason this isn't in the Intl 1.0?

NL: Case conversion wasn't considered in original scope for Intl 1.0; we then forgot to add it when respecifying String.prototype.localeCompare and friends.

RW: There is a Case Conversion item in Intl 2.0, is this the same?

NL: Correct, but these functions are in Language spec. Should this be added to ES6?

AWB: Don't think that we should start moving Intl into ES, or at least not until ES7

NL/LH: Not being in ES6 doesn't prevent implementation or spec authoring.

LH: Doesn't need to be in the wrong spec just to move forward.

#### Conclusion/Resolution

- Goes in Internationalization but doesn't prevent specification or implementation.


## Eliminate ToUInt32() warping on array access

AWB: Sparse parameter on Array iterator constructors (eg. Array.prototype.keys/values/items that determines whether or not "holes" are included in the iteration.?
Can we eliminate functions returning Reference values from the specification

AWB: Arrays use ToUint32, which does modulo arithmetic.

WH: Yes, but it doesn't actually warp indices. Ones larger than 2^32-2 are not array indices; they're not treated modulo 2^32.

WH: Also note that strings such as "0.0" and "007" are intentionally not array indices either, even though they're within the array range. The array index code checks that the value round-trips to a number and back to the same string; this is what keeps indices over 2^32-2 from warping.

MM: What are the practical benefits of this?

AWB: 2 Things, we could do this at 2^53 and truncate there instead of warping

MM: Is there a history of implementors that have worked out these issues?

AWB: Every new array(like) operation needs to have this behavior

DH: Concern that this will break the web

AWB: IE had a problem for a long time that went nearly unnoticed.

MM: strategic to postpone this cleanup until we have integers. Don't see a reason to make this change

DH: Concerned about code that would even have arrays this large

AWB: The point is to avoid craziness after 2^53

MM: What is the handling of the 2^53 edge condition that this change will benefit?

AWB: I have to review the spec and can follow up tomorrow.

Look at 15.4 of ES5.1, when you go over the edge, results in expand properties being set on the array. Additionally, the 2^32 edge condition:

```js
var a = [];
a[Math.pow(2, 32) - 1] = true;
```

#### Conclusion/Resolution

- Tabled until AWB has further impact research.


## The prototype/constructor object model supporting Generators/use of instanceof with generators and generator instances

AWB, presents UML diagram to illustrate...

The Generator Constructor doesn't need a global name. Assume it's accessible at System.Global.

Each generator function has a unique prototype object with own properties for next, send, throw, close, etc. These prototype types may share references to the built-in mplementations of those methods.

```js
g1 instanceof Function; // true
g2 instanceof Function; // true
```

But no way to test if either g1 or g2 is a generator function rather than an ordinary function.
...

Possible Solutions:
1. Make Generator a subclass of Function, allows instanceof checking (on some kind of special System object)
2. Make a global built-in Generator constructor
3. @@hasInstance(): void

Anomalies...
1. instanceof will be true for non Generator functions
2. g1.constructor === "Generator"?


DH: If we go against the behavior of the language we'll end up with...

MM: Agree up until the reflective Generator

DH: Function creates function, Generator creates generator

YK: Anything other than that is pure WAT.

AWB: Need to get our terminology straight.

MM: Going forward, we've created this class system... Having Generators be a subclass...

lost track, sorry. Hope Mark can fill this point in later.

YK/MM/LH: like...

```js
class Generator extends Function.prototype {}
class g* extends Generator {}
```

DH: The way to check "is this a generator?"

```js
Object.getPrototypeOf(f) === "Generator";
```

MM: Of all the things we're talking about, creating Generators reflectively is the least concern. Something like...

Function.makeGenerator(...); returns generator function

... If that was important to provide, but likely not.

MM/LH: Generator is a zero-arg, no-op.

LH: Reiterates that class g* extends Generator {} clarifies thinking about the diagram
<img src="https://dl.dropbox.com/u/3531958/tc39/generator-diagram-1.jpg">

DH/LH: (Discussion of this inside Generator)

MM/AWB: (Converge on diagram of inheritance relationship)

DH: Which parts do we surface as public API?

MM: Abstaining.

DH: Important to retain Python naming to avoid WAT. Ok with not surfacing anything to public API

WH: Would like to at least expose "Generator". [Note: the object I was referring to got renamed to "GeneratorFunction" later in the discussion and further down in the notes here.]

DH/WH: (Disagreement on exposure of public API)

AWB: Need a value for .constructor

DH: Ok, .constructor dictates the requirement.

MM: Does this mean that if you call the Generator constructor with a yield?

AWB/RW: Error

??


DC: Are we adding Generator because it qualifies as important enough to stand on its own?

DH: Reflective evaluation is powerful enough to stand on its own. A huge gulf between `with`

MM: There is no immediate benefit...

WH: It's easier to include then to exclude it, for spec benefit.

MM: Agreed, only benefit is specification symmetry.

WH: Function does reflection, so it makes sense.

MM: Consensus on exposing GeneratorFunction via some imported module?

All: Yes.

MS: Can I determine if an object is a generator function?

DH:
```js
f instanceof GeneratorFunction;
f.__proto__ === GeneratorFunction.prototype;
f.__proto__ === (function *() {}).__proto__;
```

#### Conclusion/Resolution

- Per diagram (https://dl.dropbox.com/u/3531958/tc39/generator-diagram-1.jpg), but without exposing "Generator"
- "GeneratorFunction" exposed via a module
