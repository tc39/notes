# July 23, 2013 Meeting Notes
-----


John Neumann (JN), Luke Hoban (LH), Rick Hudson (RH), Allen Wirfs-Brock (AWB), Yehuda Katz (YK), Anne van Kesteren (AVK), Jeff Morrison (JM), Sebastian Markage (SM), Paul Leathers (PL), Avik Chaudhuri (AVC), Ian Halliday (IH), Alex Russell (AR), Dave Herman (DH), István Sebestyén (IS), Mark S. Miller (MM), Norbert Lindenberg (NL), Erik Arvidsson (EA), Waldemar Horwat (WH), Eric Ferraiuolo (EF), Matt Sweeney (MS), Doug Crockford (DC), Rick Waldron (RW)

-----

## Agenda

JN: Brendan will be here tomorrow

Introductions.

(https://github.com/tc39/agendas/blob/master/2013/07.md)


Discussion about getting agenda items in earlier, general agreement.


AWB: Clarifying #5 Open Issues (previously presented as a slide deck, now easier to track)


#### Consensus/Resolution

Will continue to use Github as the agenda tool, with the constraints:

  - Agenda should be "locked in" 1 week prior to meeting
  - Agenda URL will be posted to es-discuss immediately following the current meeting
  - Allen has running "Open Items" section.


Corrections:

  - What to expect in the RFTG mode
  - Add JSON document to #9 JSON


Agenda Approved.


JN: Welcomes new Facebook participants


## 4.1 ES6 Status Report
(Allen Wirfs-Brock)

AWB: Draft published, Revision 16

  - Backed out the Symbols as non-wrapper types from Revision 15
  - Section items renumbered for clarity
  - Want to re-org/re-order the entire document
    - Primarily re-order the lexical grammar and syntax (currently out of order by 3 sections)


LH: (asked for motivation)

WH: Noticed...
  - Changed for-in to disallow left side assignment expression.
  - Syntax for arrow doesn't propagate the NoIn-ness of grammar rule. A NoIn arrow grammar production expands into a seqence that ends with a non-NoIn expression.
  If we hadn't changed for-in to disallow left side initializers, this would break the grammar by allowing in's to leak into a NoIn expression.
  However, we have changed for-in to disallow left side initializers. Given that, the regular/NoIn syntax rule bifurcation is now pointless. We have an opportunity to simplify and regularize the grammar here.

AWB: Will look into removing the NoIn productions.

LH: This was discussed recently on es-discuss
(need reference)


AWB:

  - Further rationalization of alphabetizing Chapter 15
  - Reminder that people should use the bug tracker for spec revision issues.
  - Implementor feedback will be prioritized



LH: Re: initializer argument with an "entries" property will be used to create the entries in the Map (7.a)

  "Let hasValues be the result of HasProperty(iterable, "entries")."

AWB: Explains the rationale of creating a new map from an existing map

```js
var m1 = new Map();
var m2 = new Map(m1);
```

LH/DH/YK/RW: Should be:


```js
var m1 = new Map();
var m2 = new Map(m1.entries());
```

EA: Should just use `@@iterator`, which is `entries`, but without explicitly checking for a property called `entries`.

DH: Advocate for uniform API, test for existance, assumes it's iterable, 2 element array-likes and initialize.

MM: Have we decided on the convention that an iterator of X is also an interable of X. A map.entries() gives you an iterator.

YK: map is already an iterable

DH: Should make sense to pass an iterator to Map

AWB: All the built in iterators are also iterables

DH: Agree, though this has been debated

WH: What happens...

```js
new Map([ "abc", "defg", "hi" ]);
new Map([{ 1: 10, 0: 20 }]);
```

BE: The first one makes a map mapping "a" → "b", "d" → "e", "h" → "i". The second one makes a map of 20 → 10.

AWB: The algorithm for Map should check for entries to be Object

DH:

MM: I don't think we should special case for string

AR: Agree, but not with example

MM: Making a special case for String seems like an odd decision

AR: In the case of i18n where we can't change the code point... you can imagine having a string map, but if I can just pass in a string.

... Don't object, just exploring

AWB: Objecting. What use case can you imagine where programmers intend for strngs to be array-like?

MM: None reasonable

...

MM: Question about value objects. If the value object responds to Get(0) or Get(1)


WH: with Mark, don't want special tests for different types

LH: If I do...

```js
new Map([ 1, 2, 3 ]);
```

I will get `undefined, undefined, undefined`, which is a stronger case for making the check

DH: +1

WH: Elsewhere, we've gone to detect duplicate errors

AWB: Checking for duplicates will duplicate the cost

MM: The impl of any hash table will require a test for duplicate keys

AWB: What about key, values that have been collected over time?

MM: There are use cases for duplicate key checks

LH: Historically, we make duplicate checks when it's syntactic, and this is the first time we're trying to apply duplicate checks to runtime semantics

MM: If something you didn't expect happens once, i'd much prefer an error

YK/RW: That's bad for the web

RW: Map would become a "try/catch" case

... mixed discussion about the precedent for loud or quiet handling

WH: Are there any other constructor that throw when created "incorrectly"?

RW: In non-strict mode, a program can create an object with all duplicate keys and never fail in production

...

MM:

AVC: Creation can be what is the least requirement for what it takes to create a map. Taking an arbitrary structure and make a map and it's perfectly good semantics to


LH/MM: Offline conversation about what qualifies for extra defense.

DH: Select cases where there is easy to argue that there few legitimate uses, ok to have occassion sanity tests. In general, JavaScript does not go out of it's way to provide you with defensive mechanisms. It's hard to predict where people are going to get hurt, better to allow them to decide.


WH: Paying for consequences where `with` doesn't protect against collisions.

AWB: Try to apply my model when writing these algorithms, please try to read the algorithms when they are published


#### ~~Consensus/Resolution~~

  - Map contructor, accepts optional initializer
  - If initializer undefined, creates an empty map
  - If initializer defined, invoke the @@iterator to create the entries from.
    - For each entry, check if non-null object, throw if not (If Type(map) is not Object then, throw a TypeError exception.)
    - pull off the 0 and 1 property
    - make 0 a key and 1 value
    - No check for duplicate keys

  - Remove the explicit check for an "entries" property, this is implied by the
    check for "@@iterator"

**UNRESOLVED**

AWB: Will put a note in the spec: "Unresolved: how to handle duplicate keys"


WH: Don't yet have consensus on how to handle duplicates, would like to discuss computed properties


## 4.3 Array.prototype.values
(Allen Wirfs-Brock, Rick Waldron)

AWB: Ext.js uses a `with(...) {}`

```js
function f(values) {
  with(values) {
    ...
  }
}

f([]);
```

YK: Means that we can't add common names for common objects?

RW: ...Explained that Ext.js fixed the issues, but face a commercial customer update challenge. In the meantime, it continues to break several large scale sites.

AWB: Brendan's workaround (from post on the list)

```js
values() -> @@values();
keys() -> @@keys();
entries() -> @@entries();
```

Importing from a module...

```js
values() -> values([]);
keys() -> keys([]);
entries() -> entries([]);
```


DH: Warming up to the idea of a general purpose protocol, implement your map-like protocol.

WH: But now you need an `import`

EA/AR/DH: Web breaking... but why not break

AR: Meta property, [[withinvisible]]

(Way too much support for this)

DH: This idea is fantastic

EA: Very useful to the DOM, may not need another bit on the object, maybe just a "whitelist".

MM: A very small list of names that "with" doesn't intercept

YK: Could, but semantically almost the same thing

EA: But without the extra bit on all objects

MM: Don't want to require a new bit for all objects.

DH: Need to fully explore the effects on the rest of the language..
  - Blacklist for just Array or all objects?

EA: A blacklist that exists, string names, when you enter `with(){}`, the blacklist must be checked.

MM: If the base object is Array, if the name is on the whitelist

EA: Have an instanceof check? This problem happens in the DOM with Node

EA/YK/AR: We can actually use this for several use cases.

EA: The issue needs instanceof to check the prototype chain.

AWB: For objects you want to treat this way.

DH: The middle ground...

  @@withinvisible, well known symbol

```js
Array.prototype[ @@withinvisible ] = [
  "values",
  "keys",
  "entries"
];
```

AVK: Might have a more generic name, can be used with event handlers

DH: `@@unscopable`?


```js
Array.prototype[ @@unscopeable ] = [
  "values",
  "keys",
  "entries"
];
```


WH/MM/RW/YK: **actual clapping**

... Mixed discussion about performance. General agreement that penalties for using `with` is ok.

AWB: Code may override this, but at their own risk. For example


#### Consensus/Resolution

  - @@unscopeable
  - A blacklist, array of strings names that will not resolve to that object
    within `with() {}`


  DH: This is about the extensible web ;)



## 3 Approval of the minutes from May 2013 (2013/029)

JN: Need to approve the notes...

Are there are any changes to approve?

(none)

#### Consensus/Resolution

  - Approved.





## 9 JSON
(Doug Crockford)


DC: Gives background re: JSON WG and presents a proposed JSON standard to be submitted to Ecma.

  - Please read tonight for review tomorrow

NL: Benefit from reading the JSON mailing list threads.

YK: Will be painful.

AR: This document seems completely unobjectional

DC: IETF claims abstract formats cannot work

Mixed discussion about consequences.

(Read and be prepared for meeting tomorrow)



## 4.2 Add fill and copySlice methods to Array.prototype and Typed Arrays
(Allen Wirfs-Brock)

http://wiki.ecmascript.org/doku.php?id=strawman:array_fill_and_move

AWB: The Chronos group want to add methods

  - fill a span of a typed array
  - move copy, with care for the overlap


### Array.prototype.fill (Informal Spec)

```js
Array.prototype.fill = function fill(value, start=0, end=this.length) {
  /*
    Every element of array from start up to but not including end is assigned value.
    start and end are coerced to Number and truncated to integer values.
    Negative start and end values are converted to positive indices relative to the length of the array:

       if (start < 0) start = this.length-start

    Reference to start and count below assume that conversion has already been applied

    If end <= start no elements are modified.
    If end > this.length and this.length is read-only a Range error is thrown and no elements are modified.
    If end > this.length and this.length is not read-only, this.length is set to end
    Array elements are set sequentially starting with the start index.
    If an element is encountered that cannot be assigned, a TypeError is thrown.
    Element values are assigned using [[Set]]

    The array is returned as the value of this method
  */
}
```

Examples

```js
aFloatArray.fill(Infinity);  // Fill all elements with Infinity
aFloatArray.fill(-1, 6);     // Fill all elements starting at index 6 with -1
aFloatArray(1.5, 0, 5);      // Fill the first five elements with 1.5
aUint8Array(0xff, -2);       // Place 0xff in the last two elements
[ ].fill("abc", 0, 12)
    .fill("xyz", 12, 24);     // Create a regular array, fill its first dozen
                              // elements with "abc", and its 2nd dozen elements
```

### Array.prototype.copySlice (Informal Spec)


```js
Array.prototype.copySlice = function copySlice(target = 0,start = 0, end = this.length ) {
/*
  The sequence of array elements from start index up to but not including end index are copied within
  the array to the span of elements starting at the target index.

    target, start, and end are coerced to Number and truncated to integer values.
    Negative indices are converted to positive indices relative to the length of the array.
    If end <= start no elements are modified.
    If end > this.length a Range error is thrown and no elements are modified.
    If target + (end-start) > this.length and this.length is read-only a Range error is thrown and no elements are modified.
    If target + (end-start) > this.length and this.length is not read-only, this.length is set to target+(end-start).

   The transfers takes into account the possibility that the source and target ranges overlap. Array elements are
   sequentially transferred in a manner appropriate to avoid overlap conflicts. If target <= start a left to right
   transfer is performed. If target>start a right to left transfer is performed.

   If a target element is encountered that cannot be assigned, a type error is thrown and no additional elements are modified.
   Sparse array "holes" are transferred just like for other array functions.

   The array is returned as the value of this method
*/
}
```

Examples

```js
[ 0, 1, 2, 3, 4 ].copySlice(0, 2);
// [ 2, 3, 4, 3, 4 ]

[ 0, 1, 2, 3, 4 ].copySlice(2, 0, 2);
// [ 0, 1, 0, 1, 4 ]

[ 0, 1, 2 ].copySlice(1);
// [ 0, 0, 1, 2 ]

Int8Array.from([ 0, 1, 2 ]).copySlice(1);      // RangeError
Int8Array.from([ 0, 1, 2 ]).copySlice(1, 0, 2);  // Int8Array 0,0,1
Int8Array.from([ 0, 1, 2 ]).copySlice(0, 1, 2);  // Int8Array 1,2,2
```

**Moving data within an array, destructively on the calling array**


AWB: Possibly rename `copySlice` => `copyWithin`

LH: Should Typed Arrays have the same surface as Array?

DH: Typed arrays better behaving and better performing since they guarantee density. (non-sparse)

  - Notes concat as the only array method that expects explicit array-ness

RW: Do we have consensus

DH: Brendan had issue with `fill`

AWB: Brendan's issue was the similarity with `copySlice` and had suggested `fillSlice`.

DH: Not sure I understand his objection...


#### Consensus/Resolution

  - Agreement in room
  - Would like Brendan's input


## 4.4 Consider deferring ES6 Refutable Matching.
(Allen Wirfs-Brock)

AWB: In March, we agreed to add refutable pattern matching; began working on adding this to destructuring and realized the work involved would be too great, considering the time frame remaining for ES6.

Propose to defer refutable pattern matching.

(whiteboard)

The current spec would attempt to do a ToObject(10); and would throw:

```js
let { a, b } = 10;
```

What happens when you reference a property that doesn't exist on the object, will throw:

```js
let { a, b } = { a: 10, c: 20 };
```

To avoid throwing:

```js
let { a, b = undefined } = { a: 10, c: 20 };
```

YK: Removing the question mark breaks the consensus.

AVK: Is it hard to spec the "?" on the outside? Allowing only one level?

AWB: It wouldn't be hard, but it creates a weird language issue.

YK/AWB: It's easy to do in the grammar

LH: What was in the spec, solved 80% of the cases, we moved to a solution for 100% and this will set us back to 20%, which isn't acceptable.

AWB: What happens at the parameter list level?

YK: Ah, there is no place to put the out "?"

DH: Agrees... as long as we have a fail-soft, we're ok (YK/LH/RW agree)

YK: We could make the extra sigil mean refutable.

WH:

```js
let [a, b] = "xyz";
```



YK: Why Andreas would have argued strongly against a refutable sigil?

DH: I think this will fail without inclusion of Brendan and Andreas

AWB: Andreas is fine with dropping refutable matching

DH: Are you sure?

Current spec is fail soft

As long as Brendan and Andreas are ok with it, we can fall back to fail soft.

AVC: The fail soft is consistent with JS behaviour. If you want something stricter, then the problem should be on the right side, not the left side. Otherwise you need to introduce an operator for the left.

AWB: (reads back conversation from Andreas)

DH/YK: He doesn't seem to say anything about returning to fail soft.

LH: I think we've exhausted the conversation

WH: If we don't do it now, the behavior of refutable and regular rules will be inconsistent in the future; i.e., a trivial refutable rule that doesn't actually make use of the refutable features will behave inconsistently with a textually identical nonrefutable rule.

YK: But you'll be able to opt-in to the full set of "refutables"

WH: I think it's uglifying the future.

YK/LH: It is.

DH: There is precendence in Mozilla's destructuring, that doesnt have refutable matching.

LH: If we added the bang which is the strict mode for this and adds the bang in front, opts in.

AWB: The next part...

WH: The string example:

```js
let [a, b] = "xyz";
```

Should there be implicit ToObject on the right side?

YK: We agreed `new String()` solves the problem, if that's what you actually wanted to do.


#### Consensus/Resolution

  - No implicit `ToObject()` on the right side (eg. the string will throw)




## x.x Review of Proposed Features
(Luke Hoban)


### Function toString
http://wiki.ecmascript.org/doku.php?id=harmony:function_to_string

MM: The one issue about Function toString, discovered since the strawman was written:

  Since eval()uating a function declaration or function expression defaults to non-strict, a strict function must present the source code of its body as beginning with a "use strict" directive, even if the original function inherited its strictness from its context. This is the one case where the original local source code of the function is inadequate to satisfy this spec.

YK: Doesn't account for super, either

Discussion about identifiers captured from lexical environments.

Was the lexical environment strict?


#### Consensus/Resolution

  Change wiki
  strictness included in notion of lexical context. Thus
  - always adequte for toString to preserve the original source
  - result behaviour equivalence does not require injecting "use strict"


### Function name property
(Allen Wirfs-Brock)
http://wiki.ecmascript.org/doku.php?id=harmony:function_name_property

AWB: The spec doesn't have mechanisms for capturing the name based on the syntactic context.

LH:
```js
let f = function() {}
```

...Needs to know "f".

AWB: It's not an insignificant amount of work.


...Conversation Moves towards prioritization.


### Modules

LH: Need to know that modules are going to be spec'ed asap.

DH: This is my next item to work on

AWB: Modules are the next most important and significant to address in the spec.

**High priority**


### Standard Modules

DH: Back off on standard modules for ES6, very few things.

Standard Modules:

  - Math
  - Reflect


YK: All of the built-ins.

RW: If I want to avoid using a tainted built-in, `import { Array } from "builtins";`

DH: What does this directly solve?

YK/RW: When you want to get a fresh, untainted _____.

AWB: Who will write out the standard modules?

EF/YK/RW can work on this


Mixed discussion about feature dependency.


DH: Luke and I can craft a dependency graph offline.




### Binary Data

On track (wiki near complete)

**High priority**



### Regexp Updates

  - http://wiki.ecmascript.org/doku.php?id=harmony:regexp_y_flag
  - http://wiki.ecmascript.org/doku.php?id=harmony:regexp_match_web_reality
  - http://wiki.ecmascript.org/doku.php?id=harmony:regexp_look-behind_support
  - http://wiki.ecmascript.org/doku.php?id=harmony:unicode_supplementary_characters

**Low priority**




DH: Optimistic that we can get Modules and Binary Data to green (in the spreadsheet)



### Proper Tail Calls

DH: Just need to identify the tail position and finish the spec.

AWB: It's just a time consuming project. Property access in tail position? Not tail call.

DH: Safely:

  - function call
  - method call



#### Consensus/Resolution

  - Plenty of work left.




## 4.7 Math
(Dave Herman)

DH: Introduces need for 64bit float => 32bit float and projecting back into 64bit float. If we had a way to coerce into 32bit

  - Can be simulated with TypedArray (put in a value, coerced, pull out)
  - To have a toFloat32


EA: Does JSIDL Need this?

YK: Not that I know of

MM: The real number it designates is a number that is designatable as 64bit

DH: (confirms) If you have a coercion, the implementation could do a 32bit operation

WH: Note that for this to work, you must religiously coerce the result of every suboperation to float32. You can't combine operators such as adding three numbers together.

Given
x, y, z are all float32 values stored as regular ECMAScript doubles, the expressions

x+y+z
float32(x+y+z)
float32(float32(x+y)+z)

can all produce different results. Here's an example:

x = 1;
y = 1e-10;
z = -1;

Computing x+y+z using float32 arithmetic would result in 0. Computing float32(x+y+z) would not.

On the other hand, there is a very useful property that holds between float32 and float64 (but not between two numeric types in general such as float64 and float80), which is that, for the particular case of float32 and float64, DOUBLE ROUNDING is ok:

Given x, y are float32 values, the following identity holds, where +_32 is the ieee single-precision addition and +_64 is the ieee double-precision addition:

float32(x +_64 y) === x +_32 y

And similarly for -, *, /, and sqrt.

Note that this does not hold in general for arbitrary type pairs.

Here's an example of how DOUBLE ROUNDING can fail for other type pairs. Suppose that we're working in decimal (the issues are the same, I'm just using decimal for presentation reasons), and we compute a sum using arithmetic that has four decimal places and then round it to store it into a type that has two decimal places.

Let's say that the sum x+y is mathematically equal to 2.49495.
2.49495 (mathematically exact sum)

Then we get:
2.4950 (properly rounded result of invoking + on the wider 4-decimal place type)
2.50 (rounded again by coercion to narrower 2-decimal place type)

Yet, if we had invoked + on the narrower 2-decimal place type, we'd instead have gotten the result:
2.49 (mathematically exact sum rounded to narrower 2-decimal place type)

AWB: Is the proposal to expose a toFloat32?

DH: Yes and the Math object seems like the obvious place

RH: Also, toFloat16

DH: Long term, the solution will be value objects, but in the near term, this will have benefit much more quickly

WH: Found evidence that the optimizations are safe as long as the wider type is at least double the width of the narrower type plus two more bits: http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html . This is the case for the float32/float64 pair (they're 24 and 53 bits wide respectively), but not in general.


#### Consensus/Resolution

  - Math.toFloat32()

  More discussion about where (Math, Number.prototype)



## 4.8 Stable Array.prototype.sort
(Norbert Lindenberg)

https://mail.mozilla.org/pipermail/es-discuss/2013-June/thread.html#31276

NL: Does anyone know of performance issues that prevent going to stable sort.

DH: Tread lightly, no one wants regression

EA: Libraries implement stable sort today because they need it.

YK: D3

MM: If the answer is that performance is negligible, then we should mandate stable sort. Otherwise, we don't. We need to answer the question first.


#### Consensus/Resolution

  - Deferred



## 4.9 Time zones 1: Bugs or spec issues?
(Norbert Lindenberg)

https://mail.mozilla.org/pipermail/es-discuss/2013-July/032087.html

Discussion around the semantics of Date

AVK/MM: Be able to create a date instance with a timezone, other then the current timezone

MM: ES5 implies a live communication channel into the Date instance

AWB: It's part of the algorithms

MM: We could say that we're going to stand on the ES5 spec.


#### Consensus/Resolution

  - Deferred


## 4.10 Time zones 2: Time zone as property
(Norbert Lindenberg)

https://mail.mozilla.org/pipermail/es-discuss/2013-July/032080.html


NL: Dean Landolt proposed a property on Date.prototype for the timezone, that all the functions look for, born with the default timezone, but can be changed.

MM: Should be static, like Date.now()

RW: Otherwise there would be Date objects with different timezones.


#### Consensus/Resolution

  - Deferred



## Date/Timezone

Proposal 1
AVK: Having Date objects that have timezone as internal data instead of system data.

Proposal 2
NL: Pass time zone information separate from Date (as a parameter to methods)


#### Consensus/Resolution

  - Write a strawman for ES7 (either)
