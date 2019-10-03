# July 24, 2012 Meeting Notes
-----

Yehuda Katz (YK), Luke Hoban (LH), Rick Waldron (RW), Alex Russell (AR), Tom Van-Cutsem (TVC), Bill Ticehurst (BTT), Brendan Eich (BE), Sam Tobin-Hochstadt (STH), Norbert Lindenberg (NL), Allen Wirfs-Brock (AWB), Doug Crockford (DC), John Neumann (JN), Oliver Hunt (OH), Erik Arvidsson (EA), Dave Herman (DH)

-----

## Agenda

10:00-11:00am

Discussion of proposed agenda.

Determine participants required for specific subjects.


July agenda adopted

May minutes approved

## 4.1 AWB Presents changes resulting in latest drafts

Draft related bug filing
  Increased community participation, a good thing
  Issue with numbers not matching duplicate filings, be aware


Quasi Literal added to specification
  Spec issues have arisen, will review


Initial work defining tail call semantics (still need to define tail
positions in 13.7)
  What defines a "tail call" in ES
  Existing Call forms need to be specified in how they relate to
  tail positions. (call, apply, etc)

STH: Important that call and apply be treated as tail calls

YK: and accessors

STH: Agree.

...discussion of examples

AWB: Differences between accessor calls as they apply to proxy call traps,
not definitively identifiable at syntax level. The function call operator
and the call trap.

TVC: Proxy trap calls currently can never be in a tail position (except
"apply" and "construct" traps)

STH: call should be in tail position. Clarification of known call site
syntax, per spec.


#### Consensus/Resolution

  Anything that could invoke user written code in a tail position to
act as a tail call.

call, apply, accessors, quasi (interpolation), proxy calls

  We still need to specify the tail positions in the syntax. There's
a start by DH on
http://wiki.ecmascript.org/doku.php?id=harmony:proper_tail_calls which uses
an attribute grammar, but the current spec draft leaves this blank.

Filed: https://bugs.ecmascript.org/show_bug.cgi?id=590


## 4.5 RegEx "Web Reality"
(http://wiki.ecmascript.org/doku.php?id=strawman:match_web_reality_spec)

Introduction to discussion by Luke Hoban

LH: Attempted to write a guide to make regex specification match current
implementation wherein order of production matters. See *15.10.1 Patterns*
in above link.

...Gives specfic examples from 15.10.1

Discussion between AWB and LH re: semantic annotations and redefinition.

YK: Do non-web implementations match current spec or web reality?

AR: Are there any non-web implementations?

YK: Rhino?

BE: matches reality because based on SpiderMonkey circa 1998

Test cases? Yes.

BTT: Yes, cases exist in Chakra

LH: (Refers to examples)

NL: Do these affect unicode? We had agreement at previous meeting that web
reality changes would not be applied in Unicode mode (/re/u).

LH: This is what regex is in reality... Waldemar did not want to specify
because it's too hard to specify, but now the work is done

AWB: Too hard is not an excuse to not specify, good that the work is now
done.

Discussion of "\u" in existing regex - \ug or \u{12} is interpreted, but
differently than planned for Unicode mode

Trailing /u flag?

Makes grammar more complicated to have \u{...} only if /u flag used.


AWB: Three things to address: Web reality, Unicode support, new extensions

LH: /u the only way to opt-in to Unicode escapes with curlies, with Unicode
extensions.

NL: need to reserve backslash with character for new escapes in the future,
e.g. \p for Unicode character properties

OH: Fairly substantial regex in wild all created with RegExp constructor.

YK: Moving forward: Evangelize using Unicode and tacking "/u" onto all new
regex?

BE, OH, AR: yes.

Decision: LH and NL to collaborate on integrated proposal



## 4.7 Adding forEach to Map and Set
http://wiki.ecmascript.org/doku.php?id=harmony:simple_maps_and_sets

Deferred, got to it on third day


## 4.9 getClassNameOf

BE: Recap, last meeting there was discussion about getting a strawman from
YK

YK: I began specifying, but existing questions prevented

BE: some want to solve not only the typeof null problem, but also "array"

YK: What is the usecase for Object.isObject

DC: Polymorphic interface

AWB: "has properties"

RW: Similar to isNaN: isNull that is only for null

OH:(Reiterates that we cannot change typeof)

AWB: what is it about host (exotic) objects that need to be differentiated
from native (ordinary) objects?

YK: Reclarification about things that are not objects (in the [object
Object] sense) that say they are.

AWB: If we go down this path, can anyone redefine the return value

YK: My question is:  either always return object Object, or let anyone
change to return anything

AWB: Rephrase as "extending toString()". Removing [[Class]] from spec, but
now as [[NativeBrand]].
The default: exactly as they are today. in ES6, if this property is
defined, then use it, if not, use default.

Mixed discussion of real world uses of:
Object.prototype.toString.call(o)

BE: 1JS Killed typeof null


BE, OH: Like the idea of a configurable property to define explicit value
of brand


YK: why is what "toString" returns so important?

AR: 2 things:
1. Fixing is not easy
2. How to correctly fix w/o making more surface area for the wrong thing


#### Consensus/Resolution

There is worry that changes to spec that affect the return of toString will
have adverse impact on existing libraries and users when they encounter new
runtime behaviours where the existing behaviour is expected.

Belief that we need a more flexible mechanism, whether it is AWB's
configurable property that defaults when not explicitly set, or AR et al
trait type test proposal.

BE, AWB: nominal type tests considered an anti-pattern per Smalltalk, but
they happen in JS not only "because they can" -- sometimes because of
built-ins you need to know


## 6 Internationalization Standard

Norbert Lindenberg: (Introduction and opening discussion)

Discussion, re: contributors

## 6.1 Last call for feedback before final draft

Function length values? Using ES5 section 15 rules would cause respecified
functions like String.prototype.localeCompare to have larger length values;
using ES6 rules would let them keep old values.

Leads into larger discussion about Function length property.

Decision: Apply ES6 rules to all functions in Internationalization API.


Numbering system, number formatting system. Would like to reference Unicode
Technical Standard 35.


Outstanding issue:

If you have 4 different impls, 3 of them support a language that you want
to support, how can you polyfill the 4th to support the language.

The constructor can re-declared?

#### Conclusion/Resolution

There is no easy way currently, second version of Intl spec
will address this.

Conformance tests being written for Test262.

NL will have the final draft prepared for September meeting, but will
produce drafts leading up to that meeting.


## 6.2 Microsoft and Google are implementing prototypes

## Unicode support

AWB:

within curlies: any unicode code point value \u{nnn}
so essentially three ways within string literal:
- two old-style escapes, expressing utf16 encoding
- two new-style escapes, expressing utf16 encoding
- one new-style escape, expressing code point

BTT: treating curlies as utf32 value?
AWB: curlies contain code point value, which you *could* call utf32

DH: old-style escapes always are a single utf16 code unit, so always
.length 1; new-style escapes always are a single Unicode code point, so may
have .length 2

NL: "<<some stupid emoji>>" = "\u{1F601}" = "\uD83D\uDE01" =
"\u{D83D}\u{DE01}"

AWB: one point of controversy: what happens with utf16 escape sequences
within identifiers
- no current impl recognizes suppl pair escape sequences for suppl
identifier characters
- `var <<wacky identifier>> = 12` -- is that a valid identifier?
- `var \u{<<wacky identifier code point>>} = 12` -- is that a valid
identifier?

NL: and, for example, what if it goes in an eval?

DH: careful! difference between:

```js
eval("var <<emoji>> = 6")
eval("var \uD83D\uDE01 = 6")
eval("var \\uD83D\\uDE01 = 6")
```

AWB: disallowed:

`var \uD83D\uDE01 = 6`
`eval("var \\uD83D\\uDE01 = 6")`

allowed:

`var \u{1F601} = 6`
`eval("var \\u{1F601} = 6")`

DH: any reason to allow those?

YK: sometimes tools taking Unicode identifiers from other languages and
translating to JS

DC: we have an opportunity to do this right; `\u{...}` is the right way to
think of things

DH: we have eval in the language, so the language thinks of strings as
UTF16 and should have a correspondence in the concept of programs

LH: there's just no strong argument for this inconsistency

DH: there's no real practical value for disallowing; there is potential
harm for the inconsistency in causing confusion in an already-complicated
space

DC: the only real value here is for attackers; no normal code uses this

BE: and maybe code generators

LH: it's just removing an inconsistency that could be a gotcha

LH: there isn't a codePointLength -- is that intentional?

AWB: since strings are immutable could be precomputed

DH: which is why you want it to be provided by the engine, so it can
optimize (precompute, cache, whatever)

DH: should it be a function, to signal to programmer that it has a
potential cost?

AR: but no other length is a function

DH: fair enough, just spitballing

AWB: what about code point iteration from end to beginning? and also
codePointIndexOf? don't have those yet

## 4.1 (cont) Processing full Unicode Source Code

String Value

Conversion of the input program to code point sequence outside of standard

Trad. \uxxxx escapes represent a single char, creates a single BMP
character, 16bit element

Issue: in string values, ?? (Etherpad is broken) === \u1F601 ===
\uD83D\uDE01 === \u{D83D}\u{DE01}. In identifiers, ?? ===  \u1F601 !==
\uD83D\uDE01 !== \u{D83D}\u{DE01}. Inconsistency that's hard to explain to
developers.

DC: This feature is more likely to be used by hackers than developers.


AWB: Two APIs

```js
String.fromCodePoint (build string from integer values)

String.prototype.codePointAt
```

What's here, valid surrogate pair?


DH: Mixing the API levels is problematic, should it be scrapped?

...The problem in naming is the "At"

...If we're going to build code point abstractions, we really need a new data
type.

NL: ICU has iterators for grapheme clusters, words, sentences, lines – all
based on UTF-16 indices. Abstractions don't require different indices.


Need more here.


## 4.13 Destructuring Issues

A. Patterns discussion on es-discuss

Issue: ToObject() on the RHS?
This is currenty specified and enables things like:
`let {concat, slice} = "";`


This equivalence is desirable and maintain by the current spec:

```js
let { foo } = { bar: 42 }

===

let foo = { bar: 42 }.foo;
```

A syntax for pattern matching against objects

```js
match({ bar: 42 }) {
  case { foo } { console.log("foo") }
  default  { console.log("no foo") }
}
```
---------------------------------
```js
let { ?foo } = {}
let ?foo = {}.foo  // _wtf_
```

DH: Pure WAT. Let's pick the most common case and address that. You cannot
presume to cover everyone's pet case

What is the right thing to do.

DH: Future pattern matching

LH: Reiteration of correct matching vs intention

More discussion, defer until AR is present

```js
let { toString: num2str } = 42;
===
let num2str = (42).toString;

```

Consensus without AR is to impute undefined for missing property when
destructuring, and if we add pattern matching, use different rules for
patterns compared to their destructuring meaning.

BE talked to AR at dinner on day 2, thinks he heard this and may have
agreed (to avoid breaking consensus). Need to confirm.


B. Defaults


Explicit undefined value triggerw use of default value initializer.

```js
let foo = (x = 5) => x;

foo(undefined) //  returns undefined by current draft
foo()    // returns 5 by current draft
```

Issue:  is this desirable?  dherman and others think an explicit undefined
should trigger use of default value. use case in support

```js
   function setLevel(newLevel=0) {light.intensity = newLevel}
   function setOptions(options) {
       setLevel(options.dimmerLevel);  //missing prop returns undefined,
should use default
       setMotorSpeed(options.speed);
       ...
    }

    setOptions({speed:5});
```

Note same rules are used for both formal parameter default values and
destructuring default values.

```js
let foo = (...x) => x.length;

foo(undefined) // 1
foo()    // 0
```


Need summary.
decision:  change spec. to make undefine trigger use of default value.*


C. Unresolved issues related to iterator naming/access

1. Be able to destructure things that did not opt-in
2. No implicit coercion
3. Array.from

spread works on array-like
destructuring has rest pattern

```js
import iterator from "@iter"

function list(x) {
  return iterator in x ?
    [ y for y of x ] :
    x;
}

[a, ...] = list(jQuery(selector));
[a, ...] = list([...]);
[a, ...] = list(function *() { ... });


f.call(f, ...args)
same as
f.apply(f, args);

```

#### Consensus/Resolution

* change spec. to make undefine trigger use of default value.

(DH)
iterator is a unique name -- can't be public because iterable test not
confined to for-of RHS

Destructing and spread - no iterator protocol.
(return to existing draft semantics of arraylike — [Cannot be both iterable
and array-like])


Array.from should... (this is a change to current specification)
  1. Attempt to use the iterable protocol, if cannot...
  2. Fall back to using Array-like protocol
  3. Always return a copy

(Filed: https://bugs.ecmascript.org/show_bug.cgi?id=588)
