# September 18, 2012 Meeting Notes
-----

Rick Hudson (RH), John Neumann (JN), Mark S. Miller (MM), Norbert Lindenberg (NL), Nebojša Ćirić (NC), Allen Wirfs-Brock (AWB), István Sebestyén (IS), Luke Hoban (LH), Paul Leathers (PL), Sam Tobin-Hochstadt (STH), Andreas Rossberg (ARB), Brendan Eich (BE), Erik Arvidsson (EA), Dave Herman (DH), Yehuda Katz (YK), Rick Waldron (RW), Eric Ferraiuolo (EF), Matt Sweeney (MS), Doug Crockford (DC)

-----

## Agenda

Introductions. Brief Agenda tweaks

RW: Confirm that Internationalization spec is available, per last meeting

NL: Internationalization specs are available on the Wiki

AWB: Start with Internationalization

IS: We need two products: The spec and a technical report (via test suite)

JN: Would like Internationalization tests to be included with Test262

AWB: Finalize by June

## Internationalization

(Norbert Lindenberg, Mozilla)

- [slides](https://members.ecma-international.org/get.php?group=TC39&file=2012_sub_tc39-2012-065.pdf)

## Review and Approve Final Draft of Internationalization API Specification

(Introduction)

NL: Final draft following major discussion in May and tweaks from July.

Primary change is to **Require Normalization By Default**

DH: Is this a performance issue? Should we leave it to the lib authors

AWB: Why do we assume lib authors will write wrappers.

YK: Because we have no evidence to the contrary

LH: That implies a judgement about design...

RW: Spec APIs are not _bad_, they often require simplification for wide acceptance and use.

Discussion returns to whether or not Normalization is _required_ by the specification or if it is implementation independant.

Agreement that generally there should be no "optional" implementation details. Conformance should be explicitly normative.

NL: Note about ES5 assumptions that a string has been normalized before parsed.

NL: Three options to support or ignore:

1. Normalization
2. Lowercase to Uppercase first
3. Numeric sorting


## Don't Use Year 0 in Date/Time Formatting
2 AD, 1 AD, 1 BC, 2 BC

Discussion and explanation

YK: Ruby has a year 0

AWB: Fundamentally Date/Time objects are ms mapped to some external designator, would there be any impact?

Decision: Date calculations will remain as is; but dates before 1AD will be adjusted in localized formatting (Date.prototype.toLocaleString, Intl.DateTimeFormat.prototype.format) to reflect no year 0.

## Conformance Tests

NL: 137 tests, reaches almost all algorithms, coverage is still thin, draft test report

LH: These have been effective in identifying bugs in Chakra prototype implementation

## Implementor's Report

(Google)
NC: Chrome/v8 has `Intl` namespace and the implementation is working towards passing the conformance tests with ~20 failures. Some tests not yet implemented. Google internal use

AWB: What is the feedback?

NC: Mostly migration based discussion for the time being. There was a previously a [Localization] API.

AWB: Issues with name conflict? Wouldn't know if it was prefixed.

NC: Will be removing the prefix

DH/YK/STH: Discussion about globals, as they apply to the future with modules. import foo from ... will reduce naming conflict overall.

(Microsoft)
LH: Currently passing 100/137 of conformance tests. Dont have direct user feedback. No one is actively using the prototype.

RW: Is there any communication between implementors?

NC/LH: Only via es-discuss

(Mozilla)
NL: Prototyped in SpiderMonkey. Uses ICU for comparison, formatting and feature detection. JS/C++ for implementation, Unicode extensions not yet supported. Passing 128/137.


## Approvals

NL: Final change, move to year 0.

AWB: Need to address the "optional" spec issues.

DH: Not that leaving things unspec is evil, we should just be conservative.

RW: For the sake of clarity there should be a specific list,(via notes?) of "optional" implementation details.

DH: Agree, similar to the history of strict mode list

LH: This can be produced off-line

AWB: In the form of an Annex

DH/LH/AWB: (Discussion about implementation limitations)

**Summary**
Produce Annex that outlines a list of all optional implementation details. Include a rationale for each item that describes strong reasoning for optional implementations.

## Annex
Optional

All Functionality
- Supported Locales
- Default Locale
- Supported subset of unicode
- Best fit matcher for locales
- Supported Unicode Extenion values per locale
- Additional values per conformance clause

Collation
- Adherence to unicode collaiton algorithm
- Support for unicode extenions keys kf, kk, kn and parallel options caseFirst, normalization, numeric
- localized sort orders
- Default search sensitivity per locale

NumberFormat
- Support for numbering systems
- Implementation of non-decimal numbering systems
- Localized decimal & grouping separators, representation of negative numbers, percent sign
- Localization grouping
- Localized concurrency symbols and names

DateTimeFormat
- Supported data/time formats per locale beyond core set
- Best fit matcher for formats
- Supported Calendars
- Support for numbering systems
- Localized format patterns, weekday names, month names, era names, am/pm, time zone names


BE: Similar to the underspecified portions of Date

LH: Of course, we'll work together to be as consistent as possible.


## Approval of Intl

JN: If there are no objections, we will forward this document specification, ECMA-402 to the CC & General Assembly for final approval.

...No objection.

JN: With the final modifcations, this document will be submitted to the CC & GA for final approval. NL and NC to produce a list for an Annex of optional details.

JN: Any desire for ISO fast tracking?

(Discussion re: ISO benefits.)

#### Conclusion/Resolution

ECMA-402 Approved for submission to ECMA CC & GA

ISO fasttrack postoned (with the limited time frame of 2 months notice prior to presentation the GA, approx Oct 10, 12?)


## Intl 2nd Edition

NL: There is a need to continue work, towards a 2nd edition

JN: Agenda item for Nov.

IS: Need to determine scope and scale of needed changes.

#### Conclusion/Resolution

Agenda item for November 2012 to entertain a proposal.


## Parallel JavaScript

(Rick Hudson, Intel)

### River Trail (Intel)

- [slides](https://members.ecma-international.org/get.php?group=TC39&file=2012_sub_tc39-2012-064.ppt)

**Map**

- myArray.map(callback)
- myArray.map(depth, callback) // for an n-dimensional array
 - elementalFunction (element, index, source)
 - (need slides?)


DH: Not sure that the level of technical detail is yet appropriate (from the perspective of an implementor)

YK: Gratuitous API changes should be avoid

RH: Intentionally avoided using the |thisArg|, think it's complete unnecessary and exists for legacy purpose.

DH: Absolutely not the case and is very important.

RW: For example, when you have a constructor that has properties [[Put]] via map, |thisArg| allows setting the context within the callback to the constructor itself.

DH: This needs to be taken offline, away from the committee.

LH:

**Examples of Map**

```js
paArray.map(function(element) {
  return element+1;
});

paArray.map(2, function(element) {
  return element+1;
});

paArray.map(2, function(element, [i, j], array) {
  return element+1;
});
```


LH/DH: (Discussion of explanation of River Trail semantics and the use cases)

LH: Is it the claim of this proposal to follow the ECMA-262 Semantics.

DH: Yes, up to the issue of floating point non-determinism

LH: Which means an engine cannot detect... (lost)

RH: We do rely on the programmer to know that they need to write an associative and commutative function. Tools can be provided to help.

LH: Worried about implicitly saying that a function does not match what ECMA-262 says it will mean.

DH: (Clarifies that it's _just_ JavaScript)

BE: Parallelization can be painfully slow

YK: If it's straight forward, then why not specify how Parallelization is accomplished

DH/BE: Too early to attempt to specify Parallelization detection.

Lengthy discussion of Parallelization "mode" switching semantics... Devolved. Ended abruptly when no progress was made.

**Shape**

- Mixing 1D and 2D operations requires an understanding of shape
- Shape determined at construction

**Identity**

- Accessors to non leaf elements of ParallelArrays will return a fresh ParallelArray
- References semantics for === remains consistent

Between the two:
- pa[2] === pa[2] true for only 1D ParallelArrays
- pa[2] === pa[2] always false when shape is > 1



LH: Asks for explanation...

DH: Will fill in blanks offline

AWB: Are there any other efforts that are developing competing specifications?

RH: Not exactly, but WebCL(Kronos?) is similar in the application they are trying to address.

DH: A different name?

BE: Vector?

DH: Also, the world will hate us for creating a new Array-like.

RW: Only a problem when creating constructors that produce objects with numeric indices and a length property and no Array proto API.

DH: Which it does.

RW: Then it will be a problem.

MM: The proliferation of Array-like things is unfortunate

RW: And ES6 reduces that pain by effectively eliminating arguments via rest and Array.from()

...

DH: There was also the idea of having parallel-specific methods.

Derailed to Array-like API issues on the whole... When to implement array API and when not. Why and why not...


#### Conclusion/Resolution

Further research and offline discussion.



## Define Properties Operator ":="

(Allen Wirfs-Brock, Mozilla)

Introduction, rationale as published:
        http://wiki.ecmascript.org/doku.php?id=strawman:define_properties_operator


DH/AWB/RW: (discussion) Object.define, Object.put

RW: Have research and supporting cases from jQuery, Dojo, YUI, Node core, Underscore... Always exists an approximation of "merging" or "extending"

AWB: We should strive to fix the future and correct developers thinking about "define" and "assign"

LH: That's a dangerous scenario to put developers in, where they have to think about assignment vs definition.

RW: The newly created dom node case, for batch property assignment (originally brought forth by Doug) is the second most important use-case, but implicit define will pave innerHTML (or any dom node properties)

...

DH: Shouldn't create syntax for the less common operation.

MM: Agreed.

AWB: But there is no way to:
- Batch define class-side properties
- Batch define constructor properties
- Batch define instance properties

YK: Nothing for static properties in classes yet anyway

MM: But not sure we need any syntax yet. If there was a lot of precedent for batch define, in the same way there is for assign/put, then it would make sense, but there is very little userland history for _define_

RW: Agreed, assign/put is a cow-highway to pave, but user code has barely begun to include regular use of definePropert(y|ies)

MM: (comments about private name access concerns)

AWB:

LH: Long term, we're going to have to consider features that are allowed to move private state.

DH: Essentially, you'd need inside access and list private items.


Discussion about side channel access via newly defined properties that were never expected on the object.

Discussion about the needs of Private Names, Unique Names and WeakMaps.

BE: People want Private Names as much as they want Unique Names

YK: Can we tell people to use Unique Name when they want copyable and Private Name when not.

BE: I thought of this earlier, but wasn't sure, but it could work

AWB: ...

MM: Given ES6, remove the copying of private names, allow copying unique names: Can this be written as library code?

DH/YK/RW: Devs want Object.define which is Object.defineProperties
Object.assign() or Object.put() (these are the same, just different names)

Extensive discussion around whether or not Object.define()

Extensive discussion around whether or not Object.assign()

Derailed due to concise method's making non-enumerables, which means they won't copy if the rule disallows copying.

...Revisit "Concise Method Definition" (add anchor)


Object.define( target, source )
- All own properties of source
- plain object descriptor map is copied
- private names are not copied
- unique names are copied
- super mechanism (rebind super)

Object.assign( target, source )
- Only enumerable own properties of source
- Invoke [[Get]] on property list derived from source, for each property in list [[Put]] on target
- private names are not copied
- unique names are copied
- super mechanism (rebind super)... AWB To determine needs
- Returns modified "target"

DH, MM, AWB: Object.assign a well worn enough cow-path to be worth paving. Object.define isn't, and so should only be standardized after libraries have explored the space.

#### Conclusion/Resolution

- Accept Object.assign into ES6, but postpone Object.define (or something like it) to discussion of future versions.
- Reference materials and use cases: https://gist.github.com/3744794

(\*\* The inclusion of variable length sources is imperative to match real world patterns found in the most ubiquitous JS libraries)



## Concise Method Definition, Revisited

RW: Defaulting concise methods to non-enumerable is a mistake

DH: Not sure about the decision to go non-enumerable. Users expect that things they create to be enumerable and things that the platform provides to be non-enumerable.

LH: enumerability is not a real concept with any sort of meaning.

EA: (reveals the broken-ness of the DOM)

No longer arguable.

#### Conclusion/Resolution

- Concise method definitions create [[Enumerable]]: true


## Scoping of the Top Level



## var and the window.prototype issue

var indexedDB = window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.indexedDB;

Issue with WebIDL change.

REVISIT.


## let, const, module, class

Global scope contours

AWB: propose extra global contour, shared across all scripts, for new binding forms, to avoid colliding with Window object

others skeptical of complexity of new scoping model for globals

#### Conclusion/Resolution

continued on second day, resolved then
