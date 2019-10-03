# July 24, 2013 Meeting Notes
-----


John Neumann (JN), Luke Hoban (LH), Rick Hudson (RH), Allen Wirfs-Brock (AWB), Yehuda Katz (YK), Anne van Kesteren (AVK), Jeff Morrison (JM), Sebastian Markbåge (SM), Paul Leathers (PL), Avik Chaudhuri (AVC), Ian Halliday (IH), Alex Russell (AR), Dave Herman (DH), István Sebestyén (IS), Mark S. Miller (MM), Norbert Lindenberg (NL), Erik Arvidsson (EA), Waldemar Horwat (WH), Eric Ferraiuolo (EF), Matt Sweeney (MS), Doug Crockford (DC), Rick Waldron (RW), Rafeal Weinstein (RWN), Dmitry Lomov (DL), Brendan Eich (BE), Brian Terlson (BT)

-----

## 4.6 Binary Data Update

(Dave Herman & Dmitry Lomov)

DH: (Introduces Binary Data) A mechanism for creating objects that guarantee a shape (Struct)

Use case that has become less important, I/O

Dmitry has given use cases where we still want control over endianness

MM: A little surprised by this direction (not objection)

If you have something like a class, do you an imagine something like an array buffer, per instance?



DH: it's still possible to overlay structs over larger sections

MM: if you want the instances to be gc'able...?

DH: they'd have to have separate backing storage, but those could be GC'd like normal

There's more work we've been doing with Rick and his group at Mozilla on parallelism patterns by describing the shape the data you're operating on. You still want the ability to do things like parallel iteration over arbitrary JS values, which means things like "object" and "any".

Those are high-fidelity drop-in replacements for JS arrays, but with no holes.

DH: once you introduce pointers, you have to bifurcate the design a bit; opaqe vs. non-opaque structs. Don't want to go into details, but will put that on the wiki.

MM: You can use structs to model more classical class object model where all the data is on the instance. (structural types)

YK: Do you imagine people using this in regular JS?

DH: Yes, but if they're writing regular JS, they'll profile and find that they want to use these sorts of structs in hot places.


```js
function ThingBackingStore() {...}

function Thing() {
  return new ThingBackingStore();
}
```

... Becomes something like...

```js
var ThingBackingStore = StructType({
stuff: new ArrayType(object)
});

function Thing() {
var selfie = new ThingBackingStore();

selfie.stuff = ....;
return selfie;
}
```

WH: What kind of fields can be had?

DH: Type descriptor algebra, set of combinators. (atomic types) Uint8, Uint8Clamped, Uint16, Uint32, float32, float64, ObjectRef, StringRef, "any"
new ArrayType(T), new ArrayType(T, )

WH: no uint64?

DH: no.

BE: I'm proposing it separately

WH: what's the difference between ObjectRef and any?

DH: ObjectRef can be a object or null, while any can be any valid JS value.

DH: SymbolRef is mostly an optimization over any.


EA: What about SymbolRef?

DH: Symbols should be objects. We'll have that discussion later.

AWB: Why isn't there a Uint16Clamped?

DH: That was just needed by canvas.

MM: Only Uint8Clamped?

DH: Yes, compatibility with canvas' ImageData.data.

AR: Y U NO CLAMPED EVERYWHERE!?

```js
var Point = Struct({
  x: uint32,
  y: unit32
});

var p = new Point({ x: 1, y: 12 });

p.buffer;

p.byteLength;
```


WH: Can you replace the `buffer`?

DH: No, {[[writable]]: false, [[configurable]]: false, [[enumerable]]: false}

WH: Can you write to the buffer?

DH: Yes


DH: V8 team also wants reflection so that they can check the type and the field offsets.


WH: what if there's an object field in the buffer somewhere?

DH: let me outline what I'm doing, mayble that'll clear it up

if I have:

```js
var q = new Thing();
q.buffer == null; // true
q.byteLength == undefined; // true
```

One of the things we've talked about is being able to censor access to the buffer at various points.

Lets say you want some computation is working on a sub-view of a buffer, we need to be able to cordon off access between these parallel things.

We can imagine putting/removing things from the "opaque" state. p.buffer is originally some buffer object, but then I'd be able to set the opaque state. Having an access to the buffer will let me re-set that constraint later, ocap style.

WH: I'd like the type itself to denote if it's buffer-backed or not.

DH: once I can lock down the instances, that doesn't matter so much.

WH: it's one more thing I have to write out at creation time

WH: I'm looking at this as a backing store for classes

DH: my feeling is that it's more type and design consistent to not have this depend on having the property

AR: how do I know it's in the opaque state?

DH: I'm trying to avoid competing with the namespace for property names, so I haven't solved that yet

LH: I think that's weird. I don't think anything in the current draft indicates the per-instance-of struct type that goes along with the type.

BE: that's been diagramed.

DH: We should stratify buffer and byteLength.

WH: are there any other special names besides "buffer" and "byteLength" that you're thinking of adding?

DH: the other major ones are methods that do getting and setting for things like multi-hop getting that avoids intermediate alloc.


```js
var S1 = { foo:     , bar:     }
var S2 = { ... s1: s1, ... }
var x = new S2();
x.s1.foo
x.get("s1", "foo")
```

// lots of discussion about structs, prototype chains, and confusion about how long this has been agreed

AR: don't worry about so much about this object/buffer split; it's showing up because DH is enamoured of return overloading

DH: the main feedback I'm hearing is that they don't want default stuff in the prototype chain

// AR: what's the controversy?

DH: getOwnPropertyNames() matters and should behavle as much as possible like a normal JS object that it's emulating. If it has ergonimic issues that we discover later, so be it, but that's the general approach.

MM: if we find a problem, I'm happy to deal with it -- but I want to take it seriously and not as a detail.

AWB: I think this is extremely promising and there are lots of ways we can leverage this. But I don't see how we can get this into the ES6 spec. So many details. So many interactions.

WH: so there won't be binary data in the spec?

AWB: no, there are TypedArrays.

We might be able to do this as a self-contained thing after ES6.

Speaking editorially, we probably need to accept we won't get this done for Dec.

BE: if we're going to discuss if this is ES6 or ES7, we can have that discussion, but that's not how this started.

LH: this began as a technical update.

AWB: Need to explore the interaction with classes, @@create, etc. to me it's hard to separate some of the tech discussions from the schedule discussions.

DH: Objection to the exxageration of "newness" of this conversation.

BE: (Right, we've seen this)

MM: First time I've understood, so first time I'm reacting. Where the buffer is used as an instance itself

AR: No, not the buffer.

MM: What are these called?

DH: Structs, always. These examples are just to show what you can do with them

MM: the idea that these things inherit from the struct-making function's prototype...was that always there?

BE: I'd like to intervene. We're mixing things up still. Can I be blunt? The thing that set mark off was the "I don't have a strong opinion about that". If it's too late for ES6, it's ES7. We need details and there's sentiment in favor of stratification.

...Champions should have a strong opinion about these aspects

These should look like objects as much as possible

DH: Fair, but these weren't on my agenda to talk about. My dismissal was out of unpreparedness for the question.

WH: I would much prefer for this to be in ES6. TypedArrays without Struct seems half-baked

DH: YEs, agree, but the specing of modules trumps the specing of binary data.

YK: IIRC, you've said that Struct is polyfillable

WH: What does "polyfillable" mean in this case?

YK: Does not need to be in the spec for user code to use.

DH: Polyfillable in the sense of perfect semantics, but not the level of performance.

DH: yes, but this enables a class of optimiztions

LH: it's not strictly enabling the perf optimizations...right?

DH: no, you can't infer that there's an invariant that it won't change.

WH: You cannot know that a property is uint8 for example. It's hard to efficiently allocate just a byte for it if you can't tell that no one will try to write a larger value to it.

DH: I want to make another point which I had to learn along the way: I came to understand that there are 2 large, distinct classes of use-case:
    1.) efficient representations of memory _within_ pure computation
    2.) serialization and de-serialization
The design constraints are very different. For I/O, you want a LOT of control. And JS is expressive for those things. Doing it in a built-in library is a waste of TC39's time. Where TC39 can add something programmers can't is the memory-internal set of use-cases. Polyfilling only gets you a little bit of benefit there, but if it's built in, the optimizations can happen.

BE: the typed-array use-cases motivated the structs work for efficient overlays.

WH: but why would you polyfill something that doesn't perform or only has TypedArray?

DH: it's better to put it in TC39 even if we don't get full-structs. I'm gonna do the best I can to get it into ES6, but it's important. No reason not to have TypedArrays if we can't get it done, though. Better for us to control the sharp corners than to leave it in Khronos.

DH: I've focused on the in-memory patterns and others probably haven't thought about these as hard. But i haven't even gotten to the stuff that the V8 team brought up: for webgl, since you can have structs and they can be overlayed with buffers, what's the alignment story? TypedArrays haven't had unaligned access. The safest thing to do here is to provide a universal padding scheme that's portable.

DH: gl programmers want the ability to use structs on the JS side, but on the GL side, want the ability to demonstrate exact offsets and optimize for specific systems. They want aligned fields, but they want complete control.

WH: do they want holes? if we use C-padding, they can re-order fields explicitly to get the least total size.

DH: I'm unclear what's specified and not in C

WH: The C language spec states only that the fields must be in ascending address order. However, in order to be able to link code and have it interoperate, every ABI must spec it. As far as I know, they all specify it as "naturally aligned" using greedy allocation: for each field pick the next position that has the correct alignment.

WH: This is sufficient control to allow users to minimize padding to the minimum possible if they want to. I sometimes do this to my C++ classes. All you need to do is to reorder your fields to avoid doing things such as interleaving bytes and float64's.

DH: the proposal from dslomov's group is that the struct ctor can specify offsets:

```js
new ST([
    [0, uint32, "le"],
    ...
]);
```

MM: dave, can you state the alignment rule?

DH: every leaf type in a struct has natural alignment

WH: this is like most C systems, if you make an array of structs, the elements cannot be misaligned. struct sizes are rounded up, padding them up to their largest alignment to avoid possibly putting them in a misaligned context and breaking the alignment. A struct {x: double, y:uint8} has size 16 instead of 9 so that alignment of the double field works if you create an array of such structs. On the other hand, the struct {x1:uint32, x2:uint32, y:uint8} would have size 12 instead of 9 because it only needs 4-byte alignment.

MM: I heard there was soemthing about a reflective operation for obtaining the layout?

DH: it's work I still ahve to do.

MM: what object do you get back?

DH: TBD. Tempted to say it looks like the thing you passed in originally.

WH: I dont' see bool...deliberate?

DH: yep.

WH: let me go on record as requesting a bool field.

?: Can't you use uint8 for bool?
?: Use object type for bool.
?: What about other types such as different kinds of objects?

WH: bool is different. I am only asking for bool here. A bool stored in a single byte, so using 8 bytes for an object reference for it would be a substantial cost. A uint8 is not a suitable replacement because one of the major use cases for structs is to use them as an efficient backing store for objects, and getting 0 and 1 instead of false and true would be a really annoying impedance mismatch.

MM: how many bits per bool does an array of bool's contain?

BE: needs to be exactly 1 byte

WH: Don't want to repeat the C++ vector<bool> mistake that tried to pack it to 1 bit/bool and ended up breaking lots of things. The C++ committtee now regrets having done this.


## 9 JSON (Continued)

(Doug Crockford)


DC: Explaining updates made since yesterday

- Reordered Appendix
- Moved ECMAScript mention

The last big change is that Rick suggested removing the security section (10) and I think I agree

AWB: Those don't apply to a spec at this level

DC: Agree, I don't think it belongs

AWB: what's the start symbol of the grammar?

DC: unspecified.

RW: my suggestion was to re-order the appendix to ensure that Value comes first and that anything that is one starts the gammar

AWB: I think it should specify a start symbol.

DC: some uses of JSON won't want a bool at the top level

AWB: ..or array, or object. All this describes is the universally valid syntax, and that has to start somewhere.

DC: I don't think it does

AWB: then I don't know how to parse/validate.

YC: I think you do need a root symbol. I've had this exact issue.

AR: C++ experience backs that up. Lots of incompat.

RW: can't we just say that anything that's a value can begin the production?

MM: we have a historical conflict. As I read the ES spec vs. this, we see value vs. object/array.

DC: it should be value, then. How should we specify that?

AWB: just say that any input that can be parsed that uses that start symbol is valid JSON text

MM: we should decide if we want to be compatible with reality or the RFC. Given that we decided on value in ES, we have incompat. Shifting to value as the start symbol would be up-compat with reality and current practice.

AWB: doesn't say what a "reader" does with this grammar, so can allow/disallow however it wants. There's no universal JSON reader.

MM: JS might accept those things but not give you access to the literal content of the values

NL: this should be based on Unicode code points. We don't know how to convert between things if we don't.

DC: best practice might be to use Unicode, but this grammar doesn't need to.

NL: I differ. We care about computing in this group.

DC: if someone wants to use a 6-bit code to send JSON from a satellite, JSON is agnostic.

AWB/NL: The title says "interchange format", should probably just be a "grammar"

NL: Without reference to Unicode code points, we can't decide which characters Unicode escape sequences are equivalent to, e.g.
\uxxxx ===? ö
\uxxxx\uxxxx ===? ö

AVK/NL: current best practice is to base document formats on Unicode, e.g. HTML

WH: The description of where whitespace can go is broken. Currently it's described as only being allowed before or after one of the punctuation symbols. That means that "{3}␊" parses but "3␊" does not.

MM: Crock, what purpose does the document serve?

DC: ... i forgot what he said

MM: Comparison to RFC

AVK: Refers to ECMAScript's JSON, not the RFC

AWB: Wants other standards to make references to this normative standard and not some other.
...To avoid the inclusion of anything that isn't the grammar, eg. mime type

MM: The danger of the IETF is trying to go beyond the RFC.

AWB: This document to have the grammar over an abstract alphabet, normative Unicode mapping to that abstract alphabet.

MM: Ok, a two level grammar. Still a refactoring of the RFC and that's ok.

AVK: You don't have to refactor, just define the grammar as a code point stream

note differences between code points and character encodings

MM: Why retreat from the RFC?

DC: There is contraversy in that it tolerates unmatched surrogate pairs. Want a standard that avoid that contraversy

NL: You can avoid it by talking about code points. The transfer format can outlaw unpaired surrogate, e.g. utf-8.

AVK: Right, utf-8 does not allow lone surrogates, it can only encode Unicode scalar values.

[After the fact note, we neglected escapes here...]

BE: Try to avoid duplicating efforts

DC: This is meant to be a guard against other efforts going out of bounds.

BE/AWB: Need to be addressed:

- Goal symbol
- "e" production
- leading/trailing whitespace
- character sets


NL/AVK: Without describing the character encoding

Discussion about character => code point

AVK: Need to define a representation you're using

AWB: Define the alphabet

AVK: Use the Unicode alphabet, without talking about utf-8, etc.

AWB: DC might be rejecting the discussion of encoding.

DH: The purpose of code point is to avoid talking about encoding.

AR: Why is this so important?

AVK: In order to describe the grammar, you need to define an abstract alphabet, Unicode is sufficient.

MM: This differs the RFC is code units instead of code points

DC: I will add a sentense in the section about JSON text, that it's a sequence of code points

AWB: Unicode code points

Include an informative note that it doesn't imply a specific character encoding

Character sets:

    "json text is a sequence of Unicode code points that conforms to this grammar"


Start symbol:

    value


MM: Move to declare consensus?

AWB/WH: Doug needs to finish an editorial pass

#### Consensus/Resolution

- Pending the remaining edits, to be discussed for approval tomorrow.



## Test262 Update
(Brian Terlson)
Test262-ES6.pdf

Talk about moving Test262 to github.

BT: What do we need to make that happen?

DH: Use CLA for pull requests.

DH: Lets not solve this now. Lets stick to the current process that only we can only approve PR from members of TC39/ECMA

Apporoved to move the source code to GitHub, keeping all the current process for approval of tests.

IS: We will need to have a way to download the tests from ECMA.

IS/AWB: Needs to be an update to the tech report. Describing what the different packages are good for.

BT: In due course backporting will be hard, but in the ES6 timeframe it should be okay.

MM: Are we anticipating backwards incompatible changes to the testing harness?

BT: There migth be some, we can probably avoid it.

MM: good, good.

BT: In ES6 a number of tests moved location. We'll create a map and move them programmatically.

AWB: I'm planning on making the reorganization within the next few weeks.

BT: We'll annotate the tests with previous and new locations.

BT: Norbert's proposal is to rename the folders to use English names and remove the multitude of subfolders.

[Discussed moved to organization of the spec.]

AWB: There could be an arbitrary number of chapters in the spec. It's somewhat convenient to be able to say "chapter 15".

BE: Core shouldn't depend on 15.

AWB: Trying to get to that situation.

MM: I don't object to a part 1 / part 2 organization, but I also don't see the point.

MM: Back to tests, I want test directories to match spec chapters.

BT: Agreed.

BT: Contributors: http://wiki.ecmascript.org/doku.php?id=Test262:coreteam Need to expand.

DH: We could use github pages and make Test262.ecmascript.org point to that.

DH: BT, you set up a mirror for the site. I will do the DNS switch, call me, maybe.

BT: Given the new algorithms, designating algorithm step is not always feasible. Proposal is to require identifying the section, and maybe the algorithm step.

BT: Ensuring full coverage becomes harder.

[Much discussion on algorithm step designation not minuted.]

YK: This should probably be dealt with at the champion level.

BT: Open issues: How to create cross-host-compatible collateral for realms and scripts?

MM: ??

MM: We might only be testing the slow path of JavaScript engines. Testing things in a loop will help.

[Insert poison attack.]

#### Consensus/Resolution

- move the repo and Test262 web presence to github.com/tc39



## 5.2 Can computed properties name in object literals produce string prop names? Duplicates?

(Allen Wirfs-Brock)



http://esdiscuss.org/topic/on-ie-proto-test-cases#content-5

AWB: Latest revision include computed properties

```js
{ [x]: 1, [y]: 2 }
```

1. Can x evaluate to a string or a symbol? The concern is that people hope to determine the shape of objects by looking at them (but engines also want to determine the shape statically)


2. Duplicates?


EA: I thought we allowed any value as a computed property

DH: Yes, and converted with ToPropertyKey

Discussion re: duplicate computed property keys


DH: Comes down to "how likely are there going to be consequences

WH: I draw a distinction between definition and assignment and I view this example as definition.

EA: If you call defineProperty twice with the same property you do not get an exception. We should have the same semantics for define property in an object literal (and class).

MM: Often enough, if you get a

MM: The importance of throwing an error at the point

YK:

MM: If these are symbols, the programer did not intend to override a previous property.

DH: JavaScript practioners consistently tell us they prefer fail-soft with opt-in. Having said that, we are deploying strict mode more widely.

BE: We don't know, people will write top-level functions.

DH: It's the direction we're heading in.

WH:  Main motivation here is consistency. In strict mode we intentionally  made having duplicate properties such as {a: 3, a: 4} be an error. That  rule is simpler and easier to remember than a rule that constructs  another exception such as it being an error unless one of the properties  is specified using [].

[debate]

WH:  This has nothing to do with allegations of trying to make the language  less dynamic. I want the simplest, easiest to remember rules. Had duplicate textual properties been allowed in strict  mode, I'd be campaigning to also allow them if they're specified using  [].

...

Discussion re: strict mode checking vs non-strict mode checking

There was an assumption that computed properties would disallow duplicates in strict mode (throw)

MM: The failure will frustrate programmers, but the lack of a failure will frustrate programmers. You say some prefer fail soft, I know of some that want fail fast.

DH: Static checks are easy to reason about and easy to justify. Dynamic checks are harder to justify and lead to unpredictable results.

AWB: What happens when x is undefined?

BE: Let's stick to duplicates

It's unlikely to want duplicates

The most common case is that you write two lines like the above and that's what you want

We should not creep into B&D language with runtime errors

Quick poll:

    - error, 7
    - no error, 6
    - abstain, 9

DH: I want to hear a response to Mark's point about being bitten by fail-soft

AR: In Google Wave, you'd get notices that the application "crashed"... the rest of the web doesn't behave that way. Fail soft is seen be some as "wrong" and others as "going along". I put more favor towards getting "going along".

AVK: In specifying web APIs, authors regularly requesting less errors. Back in 2000's, WebKit had asked for less errors...

YK: Identifies committee pathology

EA: Waldemar wanted symmetry with the iterable parameter to the Map constructor regarding duplicate keys.

LH: Do not agree that we need symmetry here.

BE: This is syntax, Map parameter is not symmetry.

Recapping Waldemar's position about consistency with duplicate string keys in Objects in strict mode.

Break.

Post break discussion, after the points made about @@iterator and @@create


#### Consensus/Resolution

- Strings allowed
- Strict Mode: Duplicates are an Error
- Non-Strict Mode: No error





## 5.3 Special syntax for `__proto__` in an object literal

(Allen Wirfs-Brock)

AWB:

```js
{"__proto__": foo}
```

MM: Uncomfortable with either semantics for this issues

YK: This is new syntax that looks like old syntax

...quotation marks and no quotation marks should do the same thing.

DH: But then there is...

```js
{ ["__proto__"]: foo}
```


YK: So for dict, we want "__proto__" as a regular property?

MM: Yes

DH: Allows...?

MM: I'm ok with either decision, because equally uncomfortable

DH: What happens today?

```js
{__proto__: foo }
{"__proto__": foo}
```

Same.

MM: Then the quoted case should remain as is.

BE: The


MM: computed form:

    - no compat hazard
    - new special case that requires checks
- too much overhead
- syntactically unclear re: outcome.


#### Consensus/Resolution

- __proto__: magic
- "__proto__": magic
- ["__proto__"]: no magic, just a string
- ["__" + "proto__"]: no magic, just a string


## 5.4 Are TypedArray insances born non-extensible?

LH: Pretty sure all are extensible.

DH: I'd like them to be not extensible. There's performance benefits. No reason for expandos. Put them on another object. Gecko is not extensible.

WH: Second

DL: Current implementation allows them to be extensible

AR: does anyone think they _should_ be extensible?

*crickets*

*tumble weed*


#### Consensus/Resolution

- TypedArray instances are not extensible.



## 5.5 concat and typed arrays

(Allen Wirfs-Brock)

AWB: Anything that's an exotic array (ie. Array.isArray(a) === true), will "spread"

...Gets weird with Typed Arrays

Proposing:

    Specifically for concat, we give Typed Arrays a new special concat that auto spreads


MM: The only sensible approach has to be type compatible

DH: concat is badly designed

...If we have to do a new method, we shouldn't try to simulate bad behaviour

Conversation leans toward:

- Two new methods that represent the two behaviours of concat, but as single operations each
- Names need to be added to @@unscopeable

LH: Does not like a new method that does 90% of the same as another existing method

DC: can't we just lean on the new syntax? Use "..." for this:

```js
new Uint8Array([...array1, ...array2]);
```

AWB: if this isn't heavily optimized, this is going to create a large intermediate object

DH: this might create issues until people get "..." and engines want to stack-allocate args

AWB: not an arg

// agreement

Mixed discussion about general purpose apis that are lacking in the language.

BE: how should we settle those issues?

AR: with science. Look around the world and see what's most common; then put those things in the std lib

#### Consensus/Resolution

- No concat on Typed Arrays



## 5.11 ToUint32(length) and Array.prototype methods

(Allen Wirfs-Brock)

AWB:

```js
let len = Get(o, "length");
let len = ToUint32(len);
```

If "o" is a Typed Array, this above will

Can duplicate all the algorithms to handle Type Arrays

Don't want to do that

What is the impact of changing to:

```js
let len = Get(o, "length");
let len = ToInteger(len);
```

53 bits

DH: Wrapping around?

AWB: Getting there, not done with points

For regular arrays, already there, constrained to uint 32

Only talking about Get, not Put

```js
[].forEach.call({ 1: 1, [Math.pow(2, 32) - 2 ]: "pow", length: Math.pow(2, 32) -1 }, e => ...)
```
Visits only the first (nothing after, because holes)


```js
[].forEach.call({ 1: 1, [Math.pow(2, 32)]: "pow", length: Math.pow(2, 32) 2 }, e => ...)
```
Visits the first and last (nothing in between, because holes)


```js
[].forEach.call({ 1: 1, [Math.pow(2, 32)]: "pow", length: Math.pow(2, 32) -1 }, e => ...)
```


Readers: That would be really slow and insane. Don't do that.


Propose ToLength()
- return length >= 0 ? Truncate to 2^53-1 : 0;


WH: Note that this only applies to the length property. In other places where the Array method take positions or lengths as parameters, they already call ToInteger, not ToUint32.

MM: Are there places where the operational meaning of -1 is changing?


BE: There's hope to make this change, sure that the only things that will be broken will be tests.

WH: [[Put]] still has a restriction?

AWB: Yes

Typed Arrays are not exotic arrays

BE: Typed Arrays are going to use 64 bit unsigned for the length, gonna be nice.


## 5.14 keys(), entries() return numbers for array index properties
(Allen Wirfs-Brock)

https://bugs.ecmascript.org/show_bug.cgi?id=1560

AWB: Arv filed a bug re: Array iterators, the keys() iterator (as well as entries()). Currently it is speced to use strings for the indexes. It would be better to use numbers.

RW: Agree, the string property would be unexpected.

General agreement


#### Consensus/Resolution

- keys(), entries() use numbers for array index properties




## 5.7 Does Object.freeze need an extensibility hook?

(Allen Wirfs-Brock)


AWB:

```js
let y = Object.freeze([1, 2, 3]);
let x = Object.freeze(new Uint8Array([1, 2, 3]));
```

The second does not really freeze the underlying buffer. So, the following does not work as the array case:

```js
x[1] = 1;
```


Discussion about the operational understanding of Object.freeze, clarifications by Mark Miller.

Lengthy discussion about Object.freeze

AWB: Proposes the freeze hook

@@freeze

Called before the freeze occurs


DH: I'm pro mops, but you have to be careful with thems.

LH: Don't think it's wrong that the second item (from above) doesn't freeze the data, that's not what Object.freeze does.

WH: Object.freeze is part of the API and should match what reading and writing properties does (at least for "own" properties). Having Object.freeze not freeze the data is bad design

LH: Object.freeze is bad design, Typed Arrays are bad design, we're stuck with them, so what should they do.

DH: (agrees)

MM: Object.freeze is named badly. Other than that, there's nothing bad about its design. Its purpose is to make an object's API tamper proof

LH: (agrees)


AWB: Method that creates frozen data?

```js
Object.freeze(new Date())
```

#### Consensus/Resolution

- No @@freeze MOP hook.




## 5.4 Typed Array MOP behaviours (Continued)

AWB: Talking about the descriptors of the properties of TypedArrays

```js
{value: ?, writable: true, enumerable: true, configurable: false}
```


MM: Doing a defineProperty on a single one, should throw. Doing a freeze on the whole thing, is allowed.

BE: Right now we throw from freeze

MM: Making these appear like properties in the MOP, throw on individual properties changes.

```js
var b = new Uint8Array([1, 2, 3]);

Object.defineProperty(b, "1", {});
// Throws!
```

BE: This makes sense.


#### Consensus/Resolution

- Object.defineProperty on Typed Array will throw
- Object.freeze on Typed Array will throw
