# March 14, 2013 Meeting Notes
-----

John Neumann (JN), Norbert Lindenberg (NL), Allen Wirfs-Brock (AWB), Rick Waldron (RW), Waldemar Horwat (WH), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Luke Hoban (LH), Matt Sweeney (MS), Doug Crockford (DC), Yehuda Katz (YK), Brendan Eich (BE), Sam Tobin-Hochstadt (STH), Alex Russell (AR), Dave Herman (DH), Adam Klein (AK), Bernd Mathiske (BM), John Pampuch (JP), Avik Chaudhuri (AVC), Theresa O'Connor (TOC), Rick Hudson (RH), Andreas Rossberg (ARB), Rafeal Weinstein (RWN), Mark S. Miller (MM), Reid Burke (RB),

-----

## 4.8 Object.observe Implementation Report

(Adam Klein, on behalf of Rafael Weinstein)

See: http://wiki.ecmascript.org/doku.php?id=harmony:observe

Slides (PDF, will prompt download): http://wiki.ecmascript.org/lib/exe/fetch.php?id=meetings%3Ameeting_mar_12_2013&cache=cache&media=meetings:object.observe_implementation_report.pdf

(Slide 1)
___
- Results are encouraging
- Two Google projects are pleanning to deploy run-time support
- Use cases
?
___


(Slide 2)
___
- Spec fully implemented (behind flag)
- Mostly self hosted: changRecord allocation, enqueing and delivery is in JS
- Mutation sites of observed objects deoptimize. Observed arrays are alwas slow mode
- Biggest perf bottleneck is feting changeRecords; plan to speed up Object.freeze()
___

YK: Concern about changeRecord spam (build up of changes
delivered at the end of the turn)

AK: There are places were large numbers of changeRecords are a concern

AWB: (missed question)

AK: We could define the properties as non-configurable, this is orthogonal to the isFrozen check.

AWB: Even if there isn't a specified state for a frozen object

EA: With proxies, that becomes observable

AK: There are changes to the spec since last brought to the committee...

(Slide 3)
___
- `Object.deliverChangeRecords()` continues delivery until pending
- Added `{ type: "prototype" }` changeRecord which reports changes to `__proto__`
- Minor changes to changeRecord generation to enforce consistency invariants
___

DC: Does that cause the turn to never end?

AK: Yes, same as recursive calls

ARB: Just another footgun in that respect


(Slide 4)
___
**ChangeSummary JS Library**
- Supports dirty-checking and Object.observe (polyfill to fast/safe object observation)
- Exposes semantics for a "diffing summary (Tn -> Tn+1 changes)
- Observe
  - "Values at a path" eg. `var foo = { bar: { baz: "..." } }; observe.observePath(foo, "bar.baz");`
  - Entire Objects
  - Array splice

- ??

___

WH: What is "values at a path"

AK: If you have:
```js
var foo = { bar: { baz: "..." } };

observe.observePath(foo, "bar.baz");
```

?: Observing paths leaks objects if we only have weak maps, not weak references

WH: Please explain

?: Path observers observe mutations anywhere on an object path a.b.c.d. Without weak refs these will leak a if d is still alive but a wouldn't otherwise be.


(Slide 5)
___
**Per Analysis (dirty checking vs Object.observe)**
- Results not surprising (this is good!)
- _nothing-changed_ case is overwhelming win
  - Discovering that nothing changed only incurs the cost of de-optimizing observed objects
- Object.oberse case never needs to keep a copy of observed data
- Object.observe appears to observed properties have changed (depending on observation "type")
- Arrays encourage "hidden" everything-changed cases eg. `unshift();`
___

AK: One of the worst cases is observing Arrays

WH: If you do that, do you get one record for the array, or one for all properties?

AK: One for every index and length

?: Which then can get (inefficiently) summarized back to one change record for the array if you use a summarizing adaptor.

EA: We knew about this from the very beginning, but decided to address it after we had implementation experience.

(Slide 6)
___
Adding Support for Array "splice mutations"

- Report on changes to Array elements (isUInt32(propertyName)) as "splice mutations"
- Degrade to "normal" property mutations if...
  - !Array.isArray(array)
  - array has non-data index properties
  - array has non-writable or non-configurable index properties
  - operation will affect indices > UInt32
___

WH: What happens when you observe a WeakMap?

AK: It's an object, but nothing interesting happens, because there are no exposed properties that will be changed. We could have synthetic events for Map, Set etc.

LH: We would have to specify these synthetic events ahead of time

AK: The requirement for Map and Set would be to come up with new types.

WH: Observers make changes between properties and getters/setters (such as what we're doing to regexp flags to support the compile method) uncomfortably likely to break user code that observes such objects.

LH: But these can already use synthetic events

WH: What are synthetic events?

LH: (explains the synthetic events api)

AR: We may want a declarative way to "squelch" certain event types.

AK: ...discussion of the cost of notifying for all changes

YK: As we add more "types" there will absolutely need to be a way filter the types you care about.

RW: It would be nice to specify the "type", similar to registering handlers for specific event types. eg. `Object.observe(o, "type:prototype", ...)` gives me only changes to the prototype. etc.

YK/AK: ...more discussion about complexity of adding the feature now or later.

AR: If you have filtering, users can choose the level of changes they are shown, without taking away any of the low level type notifications.

STH: What is the consequence of changing the system now? Can't we just do the right thing here for arrays?

LH: It introduces new complexity

AK: ...discussion of failure cases

AR: Fixing the Array thing for ES7 is a reasonable thing. But this is an example of something we will want to do in the future. This is also a chance to get the filtering feature and maintain upward compatibility.

YK: An array as an identity map

LH: An array as a tuple, its an object data type.

YK: Arrays used in Ember, specifically for numeric indices

...

YK: Do exceptions bubble up?

AK: There are many issues.

...May be better to special case splices

YK: ...discussion about spamming of changeRecords at the end of the turn and the sync behavior.

STH: If you're counting typing speed, you want all of the changeRecords

ARB: What happens when there are new observers or removed observers during a changeRecord delivery.

YK: I'm happy with the current implementation, but it would be nice to be able to squelch certain types of changeRecords

AK: Let's take this offline and look into ways of making this possible.

BE: (to ARB) are you ok with staying off the fast path?

ARB/YK/AK: ...Discussion about the possibility of a fast path for properly implemented Arrays

AWB: What happens if the object is implemented via Proxy, and doesn't have the normal representation of properties.

ARB: Treated the same as accessors

AR: To clarify, we call this the "slow path", but for apps that are going to use this, it's demonstrably preferable to existing art.


## 4.6 Symbols

(Andreas Rossberg)

ARB: Update on implementation of (unique) symbols in V8: mostly finished, and as efficient as strings as property names.
But symbols don't fully behave like objects yet, as would be required by current spec.

ARB: Propose two changes to the proposal:
1. Make symbol a primitive type
2. Change toString behavior to avoid hazard

Problem with 1: extending typeof

AWB: Symbols as objects allows for useful operations like toString

ARB: Can be solved the same way as for other primitive types: wrapper object

AWB: From a spec perspective, making them not an object is more pervasive

ARB: Very different for implementations. You can use them in context of string or object, but you can pick only one representation. Chose string-like context because that's more important to optimize. But makes special-casing all object contexts costly

DH: Would have to do this if we made this a primitive type as well.

ARB: it would just fall into similar cases as other primitive types (in v8 at least)

AWB: ...compares to primitive and object wrapper classes

DH: And we would have to provide wrapper class

AWB/DH: We should have a new typeof type

DH: Real implementations have other typeof types, eg. IE

STH/BE: ...recalling prior discussion that had no definitive conclusion re: new typeof types.

ARB: Can we really afford precluding new typeof results for all eternity?

DH: If we can get away with this, then it supports adding new types for future additions, eg. int 64

BE: This is important:

```js
typeof x == typeof y && x == y
            <=>
          x === y
```

...: The proposal from AR preserves this.

STH/DH: Giving the switch(typeof...) example

YK/RW: When would symbols be passed to this code anyway?

YK: It's a fuzzy case that is already broken, because `null` can't be checked

BE: We should just do it and that'll learn 'em. ;)

DH: A new type in typeof is good and we should just do it.

General agreement.

DH: Now that these are essentially primitives, we need ways to discern private and unique

STH/YK: Committed to a new global because we use `Symbol` to construct them.

AWB: `Symbol` is a factory that creates symbols, `new Symbol` creates instance of the wrapper class. (same as Number)

BE: Value objects allow "new"

AWB: I can define the `Symbol[@@create]` to throw


ARB: The current spec has a toString for implicit conversion, which makes it too easy to convert the symbol to a string accidentally without realizing.

STH: Have a name property, and a toString that throws

ARB: Or simply no toString. But `{}.toString.call` still works.

EA: String conversion already throws for null-prototype objects

DH: That's fair, it makes senses to have some sort of infallible   stringify.

DH: Proto-less dictionaries will become more widely used

AWB: ...recalling existing specification of ToString conversion

...Mixed discussion about ToString






#### Conclusion/Resolution

- New addition to typeof table
  - `typeof symbol === "symbol"`
- [[ToString]](symbol) => throws
  - therefore `symbol + ""` => fails w/ error
- `Object.prototype.toString.call(symbol)` => "[object Symbol]"
(ARB: or rather something else, given that we just decided symbols shouldn't be objects)




## 4.17 Legacy Compatibility for Block Level Function Declarations

(Allen Wirfs-Brock)

See: http://wiki.ecmascript.org/lib/exe/fetch.php?id=meetings%3Ameeting_mar_12_2013&cache=cache&media=meetings:legacyblockfunctiondcl2.pdf (This is a PDF that will initiate a download!)

(Copied from PDF)

Prior to the Sixth Edition, the ECMAScript specification did not define the occurrence of a _FunctionDeclaration_ as an element of a Block statement's _StatementList_. However, support for that form of _FunctionDeclaration_ was an allowable extension and most browser-hosted ECMAScript implementations permitted them. Unfortunately, the semantics of such declarations differ among those implementations. Because of these semantic differences, existing web ECMAScript code that uses Block level function declarations is only portable among browser implementation if the usage only depends upon the semantic intersection of all of the browser implementations for such declarations. The following are the use cases that fall within that intersection semantics:

1. A function is declared and only reference within a single block:
  - A function declaration with the name f is declared exactly once within the function code of an enclosing function g and that declaration is nested within a Block.
  - No other declaration of f that is not a var declaration occurs within the function code of g
  - All references to f occur within the _StatementList_ of the Block containing the declaration of f.

2. A function is declared and possibly used within a single block but also referenced within subsequent blocks.
  - A function declaration with the name f is declared exactly once within the function code of an enclosing function g and that declaration is nested within a Block.
  - No other declaration of f that is not a var declaration occurs within the function code of g
  - References to f may occur within the _StatementList_ of the Block containing the declaration of f.
  - References to f occur within the function code of g that lexically follows the Block containing the declaration of f.

3. A function is declared and possibly used within a single Block but also referenced by an inner function definition that is not contained within that same Block.
  - A function declaration with the name f is declared exactly once within the function code of an enclosing function g and that declaration is nested within a Block.
  - No other declaration of f that is not a var declaration occurs within the function code of g
  - References to f occur within another function h that is nested within g and no other declaration of f shadows the references to f from within h.
  - All invocations of h occur after the declaration of f has been evaluated.


Use cases 2 and 3 for a given function declaration f might occur within the same function.

The first use case is interoperable with the inclusion of Block level function declarations in the sixth edition. Any pre-existing ECMAScript code that employees that use case will operate using the Block level function declarations semantics defined by clauses 10 and 13 of this specification.

LH: Has to be a statically verifiable approach

DH: We can statically declare a conservation class of blocks

AWB: Most blocks are conditional in some form.

WH: (whiteboard)
```js
function g() {}
function f() {
  if (false) {
    function g(){}
  } else {
    g();
  }
  g();
}
```

WH: This example illustrates that #2 is not interoperable. It's not even clear to me what #2 means.
- Does the first call to g (in the else close) lexically follow the inner definition of g?
- Regardless of the answer, the second call to g is not in the intersection semantics (the inner g is never defined due to the if false) yet is treated by #2 as though it were.

AWB: A fix for this case: Add an additional clause that says the subsequent

AWB: The semantics we want, for non-legacy cases, in non-strict mode are the ES6 semantics.

DH: Not compatibility with reality.

...



Sixth edition interoperability for the second and third use cases requires the following extensions to the clauses 10 and 13 semantics. These extensions are applied to a non-strict mode functions g if the above pre-conditions of use cases 2 and/or 3 exist at the time of static semantic analysis of g. However, the last pre-condition of use case 3 is not included in this determination and the determination is only applied to function declarations that are nested within syntactic constructs that are specified in the Fifth edition of this specification.

1. Let B be environment record for the construct within g that introduces a new environment contour and which most closely encloses the declaration of f, all function code references to f, and the definitions of all nested functions that contain syntactically unshadowed references to f. This syntactic construct may be the definition of g itself, in which case B is the function environment record for g.


2. As part of the instantiation of        B, its CreateMutableBinding concrete method is called with arguments "f" (the string name of the function) and false. This creates an unitialised binding for the name f. Any reference that resolves to that binding prior to step 3 below will throw a ReferenceError exception.

3. When the InitializeBinding concrete method is used to initialise the binding for the function declaration f also invoke InitializeBind on B using the same arguments.

If an ECMAScript implementation has a mechanism that produces diagnostic warning messages, a warning should be produced for each function g for which the above steps are performed.



WH: #1 is a circular definition. Some references to g will go to the outer g in the example. It is up to us to define which definition points to which.

AVC: It would be beneficial to look at examples and then apply the fix rules and allow that inform the direction.

AWB: (whiteboard)
```js
// A dynamic ReferenceError.
// There is no binding to g()
function f() {
 {
    if (false) {
      function g() {}
    }
    g();
  }
}
```

AWB: The interoperable fix:
- As if there was a `let g;` at the top of the inner
block...
- the g() reference points to the g() declaration in the same scope


WH: ok, put back the outer g()

AWB: (whiteboard)
```js
function g() {}
function f() {
 {
    if (false) {
      function g() {}
    }
    g();
  }
}
```
...Didn't take into account this case, will need time to consider.


AWB: Could be two inner blocks, with declaration of g()...


WH: (whiteboard)
```js
function g() {}
function f() {
  {
    g();
    if (true) {
      function g() {}
    }
  }
}
```

WH: What happens when the first g() is called?

AWB: the first g() is bound to the outer g(), then a new g() is defined.

WH: (whiteboard)
```js
function g() {}
function f() {
  {
    g();
    if (true) {
      function g() {}
    }
    g();
  }
}
```

WH: Now what happens?

AWB: Per the proposed rules, both calls to g() are bound to the inner definition via the phantom let binding [presumably with the first one encountering a dead zone?].

[MM walks into the room and expresses speechless incredulity when he learns that adding the second call to g in this example changes which g the first call to g is referring to.]

AVC: There is merit to avoid being clever. Benefit to preserving any existing semantics.

BM: There should be a vision for a desired semantics goal

STH/LH: Two goals, which are competing:
1. We must remain compatibility with the web
2. Introduce block scope bindings

BM: Bad that an outer binding can change

AVC: ...correlates to AS

STH: We have sensible semantics for ES6/strict mode

AWB: We have sensible semantics for both modes

AVC: Confident that we might be able cover all existing use cases. But what happens when someone discovers a case that was covered?

STH: Easy to come up with sensible rules from other languages

AVC: All practical purposes

[? trying to start a meta-discussion about getting sidetracked on theoretical rather than practical problems]

WH: We are discussing because we know this is a real, practical problem based on research demonstrated at the previous meeting.

STH: The only guiding principle is to avoid breaking the web.

AWB: Where we're at, is the hypothesis that we can identify and fix the cases that break the 1% of sites that have code that violates. Introduce a declaration that spans the point of declaration and the point of reference

STH: ...clarifies the subset semantics definition

AVC: Two cases:
1. What to do?
2. Identify that subset.

STH: Yes

AWB: This conversation only applies to the 1% of code that exists that must be dealt with in a way that matches the 99% semantics

LH: ...recapping

AWB: JavaScript programmers will have two learn that non-strict mode always uses odd-ball semantics in addition to the strict mode semantics. If we make this work, there is one semantics to learn.

DH: Inclined to agree with Allen. A worse semantics, easy to explain vs. a better semantics that serves the 99% but loses the 1%... and we'll lose the 1% in a deep dark hole.
...Arguing for:

1. One set of rules, that is weird and less pleasant
2. Carve out heuristics for identifying ... giving the good semantics to 99%

BM: Missing analysis?

STH: Presented at last meeting

DH: Arguing for #2 (99%)

WH: Want to see the semantics of strict mode in non-strict mode as often as possible. Don't want to legitimize new quirks, even if that means that the transition rules are more complex. Hope that in a few years the strange semantics can be eliminated in favor of what strict mode is doing.

LH: This is exactly Allen's point. If Allen's point achievable? If it is, then I support it, but I don't think it's achievable.

AWB: This is a first draft.

YK: Function in block is oddball already. If we have a semantics for non-strict FIB and different from strict mode, it will make it hard to upgrade to strict mode.


Note: AC/BM please send Allen any materials that might be useful for specifying the semantics for FIB.



#### Conclusion/Resolution

- All (esp. AWB) to continue working through known issues in the 1% cases



## 8.1 Comments from István, stated by John Neumann

- The ECMAscript trademark is rather through. We have it in the most important countries, incl. US and EU.

- The EU formal recognition for ECMA-402 and TR/104 is progressing. We are now in the evaluation phase by a small group. They asked me to make a first draft for evalutation, which I did. Informally I have one "yes" so far, and no "no" yet. If the small group gives an ok, then the member countries have to vote. The process will take a few months more (but I do not know how long, because this is the first experience with the new EU policy).

- Regarding the IPR Adhoc. We are progressing. I think I can distribute an updated package to TC39 at the end of March. GA vote is planned for June 2013. Comments back to the IPR Adhoc, GA, or GA members. Just as last time.

WH: ECMA's TC39 email reflector is incompatible with gmail. If a gmail user sends an email to the reflector, non-gmail users will receive it but no other gmail user will receive it in his inbox. It will always arrive in the spam folder due to some SPF issue.

[Various people checking their spam folders now and discovering TC39 emails in there.]


## 4.10 Array Extras

(Rick Waldron)
(notes from EA)

RW: Wrote spec (using spec prose) Array.prototype.find and Array.prototype.findIndex. Found in most PL and JS libraries


```js
Array.prototype.find( predicate [ , thisArg ] )
```
https://gist.github.com/rwaldron/5079436

```js
Array.prototype.findIndex( predicate [ , thisArg ] )
```
https://gist.github.com/rwaldron/5079427


MM: What about start indedx? Does it go before the thisArg or not?

RW: None of the existing languages supports passing a start index.

RW: Not sure if this is for ES6 or Harmony

AWB: Feature creep

DH: Common, makes sense.

#### Conclusion/Resolution

- Exception being made. Approved for ES6.





## 4.15 Template Strings

(Adam Barth [present], Mike Samuel [phone] guests from Google)

BE: What can we do to template strings to make them secure by default and not an XSS hazard.

- tagless?
- a default tag?

AWB: They're useful for making strings.

BE: (reiterating) The obvious problem: using backticks with no prefix/tag, you  create potential for xss.

DH: Ok, so we've outlined the security argument, but important to note that tagless are useful and the security fix is still not enough to "fix" the bug picture security problems.

DC: No placeholders in tagless?

BE: Possible

YK: ...recalling discussion with Mark where the rabbit hole became extremely deep when trying to avoid accidentally coercing to a string.

MM: String.prototype.trim apply to delayed template string, which turns it into a string.
...Delayed template string inherits from template string

YK: Implicit coercions.

MM: This is one option

BE: Make the default case somehow not present, or neutered

AWB: Remember for "+" and explicit coercion cases, we're falling into the DefaultValue mechanism, which has a unique Symbol hook (in ES6), which means that what is sent to the object initially does not have a toString. The DefaultValue for the delayed template string is...
...DefaultValue applied in concatenation could throw,

MM: ...specifically the deferred template string. Specifically for the tagless template string case.

(RW: some terminology issues addressed)

WH: Understand the utility of tagged template strings, with possibly a default tag that does string concatenation, but what's the rationale for deferred template strings?

[some discussion, with no answer to WH's question]

MM: If the behavior is for the DefaultValue to throw, reject the implicit coercion. However, if you're writing a REPL and want to  stringify, you can explicitly call toString

STH: This is insane

DH: This is destroying the usefulness of tagless template strings.

YK: It's not clear how taking a nice feature and making it harder to use will fix a security issue, the problem will still exist with string concatenation.

DH/RW: Agree

Mixed discussion re: security issues in the DOM.

AR: Security issues revolve around reasoning about data and behavior which you'd like to think is benign, but combining them create abilities that they shouldn't have.

DH: By calling out template strings, we're effectively blaming "strings" for these security issues.

AR: innerHTML

STH: That's the problem

AR: This isn't about hard-and-fast, right-and-wrong. Security is about doing the right thing more often. Security bugs are just a subclass of bugs that bite very hard. The biggest thing any system can do to improve the security situation is to set the economics of doing the right vs. wrong thing in such a way that it's "cheaper" to do the right thing. So we can't pretend that this is about some perfect answer; it's about the economics of designing a solution that leads to doing the right thing more often, and that's a question about probabilities and psychology. We want to build a honeypot for doing it the right way.

MM: Key, either get rid of tagless template string or make them unpleasant; have we created a situation where developers would or would not have used the feature...

AR: What is the reality that adding a no-op tag? What does it actually provide? Stopping developers from using tagless by giving them a tag that does interpolation.

DH: Strings are the most used data structure in all programming. Yes, they are used heavily in secure code construction.
...Then there is the pitchforks and torches cost of making this harder.

MM: Also, the cost of companies that will be screaming about being bit by a security issue

RW: But these are no different then the existing security issues today.

AR: That's not a fair argument to discussion.

MM: The screaming over vulnerabilities is probably more costly then developer hardship.
...If you use a tagless template string in particular context, you can have a an autoescaped context.

BE: So, you could change innerHTML setter to check if the RHS was a tagless template string

MS: (phone) If you don't try applying the string concatenation operators to the tagless template string, you get secure auto escaping.
innerHTML

MM: Let's call that "Mike's Original Proposal"

STH: (listing)
1. Current status with default handler that interpolates
2. No tagless template strings
3. tagless template strings with no interpolation
4. tagless template strings produce delayed template string objects, with toString
5. tagless template strings produce delayed template string w/ special handling that coerces
6. tagless template strings produce delayed template string w/ special handling that throws
7. Allow overloading of the default handler for the tagless template strings

MM: (whiteboard)
```js
class DelayedQ {
  constructor(callSiteId, ...args) {
    this.force = function(handler) {
      return handler(callSiteId, ...args);
    };
    this.toString = function() {
      return stringer(callSiteId, ...args);
    }
  }
}
```

```js
html`<script>
  "${...}"
</script>`

```


WH:
```js
html`<script>
  "${foo()}"
</script>`

function foo() {
  return `...`;
}
```

WH: Using a tagless template string to construct an english sentence and I stick it into html, what do I get out of that?

AWB: You'll probably get garbage, because the innerHTML parser rules will be applied.

WH: How does foo in the example know how its deferred template will be interpreted? It becomes a really sneaky part of the API, where foo can return different things depending on the context it's called in -- can be string concatenation, various kinds of escaping, etc. This is too brittle and dangerous.

LH: innerHTML should've been forced to apply cleansing on all strings.

BM: How about immediately constructing and scrubbing?

STH: Same issue with E4H

DC: Don't forget about the off-browser cases.

YK: So the socket API should check strings that are created in Node?

AB: Yes

YK: Ok, I said this to be ludicrous.

AB: If you eagerly coerce to a string, you lose the structure of the object: which part of was a template and which part was data.

WH: We have no way to tell which part is which. [In the example above, if foo returns a deferred quasi, it's like it returns a bag of stuff that it wants joined together but it doesn't say what the stuff is (individual characters? names? rows in a table? entities? script statements? HTML elements?) or how it should be joined. It's not clear to anyone reading foo's code how what the semantics of the bag of stuff is. This is too brittle.]

STH: The point Yehuda is making, is that people make code and ship it out over the wire.

AB: ...describes the way Ruby server programs create outbound blobs that from templates and data that are flatten just before sending.

YK: I wrote that.

...Discussion about JavaScript developers, use of strings vs. DOM authors creating APIs that can handle template strings

AR: This is a new string of a different type

YK: We'll need to blacklist all strings if this is the case.

MM: ...introduces Mike Samuel's work

BM: Summarizing...
1. Adam: We control all user code
2. Yehuda: We control no user code

AK: Specifically, Yehuda refers to all existing code that follows a form where:
`"string..." + " is concatenated";`
and used to assign to innerHTML (or similar)

MS: Able to successfully migrate a codebase from ad hoc work-arounds. This used closure templates. Statically compiled version of templates.

STH: Is the argument leaning towards tagless or tagged, or is that not relevant?

MS: The system worked with nested script, css and html. In cases where developers needed, they circumvented the system.

YK: ...recalling hardships of Rails upgrading for a similar auto-escape system.

...

YK: Happy with current system + html default handler provided by the browser(*)

DH: Template strings are useful for other reasons: multiline strings, etc.

MM: Yehuda's suggestion (*) is good

STH: Established that we wanted a delay handler, which produced a delayed template string per Mark's suggestion

MM:
1. Immediate String interpolation
2. Delayed Template String

(Summarized from 1 & 4 from the list above)

LH: This delayed template string concept is now a second string type in the language and I'd be afraid to use them because they I can't rely on them.

MM: Is anyone opposed to #1? (Adam)

RW: Will any of the implementors here remove the template string  feature or tagless template string handler.

No?

LH: I was not comfortable with "quasis" when they required a tag, and even less if they produce a delayed thing.
...This forks the string "type"
WH: That's exactly what I was trying to say earlier. Deferred quasis are too brittle.

MM: Can process based on context

WH: This is just another bug. Makes the problem far worse if you have a function that returns a template string.

DC: The reason we went with template string over String.prototype.format was because this was safer.

MM: (to Mike) Do you find #1 & #4 acceptable?

MS: Yes.

AB: (whiteboard)
```js
var firstName = ...
var lastName = ...
elem.innerHTML = `<h1>Hi ${firstName} ${lastName}</h1>`;
elem.innerHTML = "<h1>Hi " + firstName + " " + lastName + "</h1>";
```

LH & AB: ...discussing the value of #1 & #4


STH: Reviving #2 & #3

0. Drop template strings
1. Current status with default handler that interpolates
2. No tagless template strings
3. tagless template strings with no interpolation
4. tagless template strings produce delayed template string objects, with toString


AR: Leaning on #2 or #3

YK: Nobody wants #2 or #3

WH: I want #2

DH: If we go with #2 or #3, we should just take it out of ES6

Discussion about a provided tag, called "s"

RW: Which means we now have a binding "s" and minifiers and existing code conflicts.

MM: Argument for #3...

DH: This is a tremendous failure of our duty.

MM: My preferred option is that we agree on something
...#2 does not subtract value

BE: Opportunity cost

MS: (Arguments for the current system.)

WH: Some browsers used to have a behavior that allowed regexp to be called without exec, and called directly—should we be able to take that out?

STH: Should a programming language not be allowed to have a feature that all other languages have?

AB: I'm not a programming language designer, I can't answer that

STH: That's a cop-out, because that's what you're asking us to do.

DH: (disdain)

WH: Originally, I wanted #1, now I want #2 because its too easy for people to forget to add "html``"

BM: #0 and #1 are the best cases, #0 adds no additional security risks. #1 is the pure option. #2 changes because you add to the boilerplate. The rest are a new thing.
...I'm for #1 because either you do it or you don't.

STH: Answer this...
Is this something that all languages should do? Or just JavaScript because it's bound to the web?

AR: Yes, we have to pay the cost for the good of the web and yes other languages should've done this (ie, not had the equivalent of untagged template strings).
...wants #3

RB: re: #3, important to have to think about what kind of handler need you need to use.

YK: That might work for your case, but the wider world will just use the interpolation tag.

...

DH: We're flailing. We should just go #2 and just move on, because I'm failing to make my case.

WH: I like #1 and #2, which are similar, but prefer #2 purely for a couple of practical considerations:
- Forgetting the html in html`...` causes a syntax error instead of introducing a security hole.
- s`...` is preferable to `...` because it's practical to search for s` in general-purpose editors, while it's not practical to search for only the occurrences of ` that do string concatenation.

AVC: If using this feature and just want to use string interpolation, why should I have to think about "raw" when "raw" doesn't really even reflect what I want.

(Allen leaving. 4, 1, 3, 2)

AR/AVC: ...continued discussion

Beginning to devolve.

YK/STH: arguing that it's not the language's job to hand hold

AR/AK/AB: ...disagree

WH: (whiteboard)
```js
AT&amp;amp;amp;T
```
(illustrating the dangers of blindly coding with html`` concatenations everywhere)

(Running out of time)

MM: What is the intersection?

DH: We're headed the wrong way, forcing into a design approach that we don't do.

RW: Should we table?

DH: Yes, that's where I'm heading.

AVC: We may never get consensus

DH: We won't give up, we've gained consensus under worse duress.



#### Conclusion/Resolution

- Tabled.
