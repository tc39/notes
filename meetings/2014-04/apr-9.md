# April 9, 2014 Meeting Notes
-----

Doug Crockford (DC), Brian Terlson (BT), Luke Hoban (LH), Dmitry Lomov (DL), Waldemar Horwat (WH), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Hudson (RH), Rick Waldron (RW), Eric Ferraiuolo (EF), Jafar Husain (JH), Jeff Morrison (JM), Seo-Young Hwang (SYH), Mark Honenberg (MH), Caridy Patiño (CP), Yehuda Katz (YK), Niko Matsakis (NM), Ben Newman (BN), Filip Pizlo (FP), Norbert Lindenberg (NL), Sebastian Markbåge (SM), Mathias Bynens (MB), Rafeal Weinstein (RWN), Jaswanth Sreeram (JS), Alex Russell (AR), István Sebestyén (IS), Mark S. Miller (MM), Tatiana Shpeisman (TS), Brandon Benvie (BB), Brendan Eich (BE)

-----

## RF Status

(John Neumann)

The May version of the specification is the opt-out version

See:
    http://www.ecma-international.org/memento/TC39%20policy/Ecma%20Experimental%20TC39%20Royalty-Free%20Patent%20Policy.pdf (E.4-E.6)
    http://www.ecma-international.org/memento/TC39%20policy/Opt%20Out%20Form%20for%20a%20TC39%20Royalty%20Free%20%28RF%29%20Task%20Group%20%28TG%29.pdf

#### Conclusion/Resolution

- May document will be opt-out


## RF/TG Item

(John Neumann)

JN: Vote to request lifetime membership waiver for Brendan Eich

Motion to approve? [WH raises motion]
Yes, seconded

No discussion, No objection

#### Conclusion/Resolution


- unanimously in favor


## Object.observe Update

(Rafael Weinstein)


RWN: The next step was spec text review.

YK: Reviewed but have feedback

AWB: Concerned not enough attention from committee members

YK: Similar concern, but additionally want to see more practical application testing of new features in general.

AR: Can you be more concrete, with regard to Object.observe

YK: There is a need for filtering of change records

RWN: We had hoped to work on this post 1.0

YK: We tried this and it's messy and complicated, so it's either a matter of being messy and complicated in user code or in V8

LH: Valid and being addressed... How does this correlate to the status of the spec.

YK: The spec seems fine, but this is an issue discovered when I tried to make something with it.

LH: More effort has gone into review of this feature than any other

YK: But needs to be useful to library code.

AWB: (continuing) I'd feel more confident if more committee members reviewed the spec for correctness.

RWN: What is the purpose of the reviewer role, in this stage? I assumed it was for the mechanics, not the feature itself. I'm confident we can work through the existing concerns.

YK: I think that practitioners need to be given an opportunity to review in real use

RWN: This should be done much earlier in the process.

JH: How long is needed to feel comfortable with this?

YK: We already made implementation attempts and ultimately view them as failures. We wrote real code and discovered real problems.

LH: So you're not comfortable giving consensus at this point, based on your actual experience.
...Concern that consensus blocking this late

RWN: Propose that we don't move to stage 3, but I want a commitment from Yehuda that to prioritize working through the remaining issues.

YK: Confirm

RWN: We should view this as feedback for the new process

YK: There was feedback, but no action

RWN: There have been many updates and if there were issues, that was on you to follow up... If there is criticism, it needs to be on record.

AWB: In addition to meeting notes record, file bugs to track progress

YK: In general, if there are concerns, there's two sides: person A thinks "I should push harder" vs. person B saying "that's fine" without giving it much thought

AWB: Still need to be more active reviewing in the committee.

Relevant: https://github.com/rwaldron/tc39-notes/blob/master/es6/2013-09/sept-19.md#7-objectobserve-status-report (incomplete notes about the
discussion about filtering in general)

#### Conclusion/Resolution

- RWS withdrawing request for stage 3
- YK commits to prioritize working through remaining issues prior to next meeting.
- RW commits to reviewing for spec mechanics
- AWB: "Don't approve stuff without reading the spec text, dammit" :)


## Royalty Free Status

(István Sebestyén)

JN: (recaps decisions)

IS: Issues:

1. Status of Third Party contribution
- Currently under ballot
- expect it to pass

AWB: Will the forms be available prior to the conclusion of the ballot?

IS: Yes, will make available as soon as we can.

AWB: We have a back log of contributions waiting to be accepted. Would like to be able to provide immediate instruction

2. IPR has prepared FAQ addressing Ecma copyright policy
- http://www.ecma-international.org/memento/Ecma%20copyright%20FAQ.htm

3. Liason with IETF

4. JSON

AWB: The first edition is done, no sign of interest for a second edition.

IS: Fast track ISO?

(will follow up)

RW: István, please send link to FAQ for inclusion.

confirmed

BT: CLA needs to be electronic and checked automatically for each pull request (bot)

RW: Needs to provide access to committee members to confirm contributor agreement.

EF: Is the vote for just the forms/agreements?

AWB: The vote is to approve the policy, the forms already exist.

#### Conclusion/Resolution

- RW/BT/AWB to send CLA requirements (noted above) as need to be successful


## Parallel JS Spec Report
(Rick Hudson)

Slides: [TC39PJSApril2013.pdf](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/TC39PJSApril2013.pdf)

RH:
Summary

- Major Focus on implementation
- Use case driven perf tuning
- Harvey Mudd collab
- Prohect implementing OpenCV
- Demos rewritten to use typed object API

Design Goals

- Ease of use
- Deterministic where  possible
- Follow current syntac seantics, and security

Platorm Independent
- Supporte all kinds of Platforms, Parallel or not
- Perform well on different parallel architectures, multi-core, GPUs SIMD

Extracting reasonable performance out of parallet hardware
- Extracting all performance a secondary goal


Key Insight: Temporal Immutability

- During Concurrent Execution
- A computation can read or write its local data
- A computation can read shared state
- Parent waits patientily
- Whitelist thread-safe/temporally immutable primitives
- violations or best effort faulure result in a seuqnetial schedule
- Otherwise
- Nothing changes
- Current JavaScript programs are unaffected

→ The sweet spot between Functional and OO



WH: Examples of whitelisting?

RH: Math.sin

WH: Calculating the sine might be parallelizable, but are the lookup of the name and object used to invoke it parallelizable? My biggest concerns are with the glue stuff such as variable and object accesses, which might hit a proxy, observer, or whatnot.

RH: It's a QoS issue. Start with everything blacklisted, then let implementations figure out what to optimize/whitelist.

WH: If I dont know what the impl does, what am i allowed to do to stay in this efficient realm

NM: Building tools that will help developers see what operations are causing de-opts, general jit feedback

MM: With the JIT optimization, you're comfortable knowing the jit will do its job

WH/YK/MM/AR: (Disagreement)

AR: I maintain a hierarchical constraint solver and must pay close attention to keeping math operations on the same numeric path (note: maintaining values as integer or float)

NM: For best performance, parallel code wants to do the same. We expect better developer tools will be very helpful for both cases.

WH: I want to know specifically how to stay within the good performance safe-harbor

NM: Yes, but we don't have a complete picture.

WH: Want at least a safe harbor subset described. Having users study the idiosyncrasies of a specific implementation to discover it just leads to fragmentation.

TS: Recommend best practices document, vs. specification text

WH: Standards can clearly suggest. For example, the C++ standard has done that by naming the safe harbor conditions that allow the RVO and NRVO optimizations. Implementations can go even further than the cases named in the standard, but users can expect to have at least those optimization cases work efficiently.

NM: I can see an addendum that includes this, but we're not there yet. It takes time to figure out what the common subset is. I expect we'll eventually be able to say this with more precision.

WH: Where on the spectrum between stylized mostly machine-generated code (asm.js) and general-purpose user-written code can we expect the optimizable subset to be?

NM: Much closer to general purpose user-written code.

RH: There will be a sweet spot where this will be very effective. Progress will show

RH: (continuing)

Parallel JavaScript API (ES7)

- Extend JavaScript's

(Need slide)


**Sum using reducePar**

```js
// Sequential
var i;
var a = [1,2,3,4];
var sum = 0;
for (i = 0; i< a.length; i++) {
  sum+= a[i];
}
```

```js
// Data Parallel
var pa = [1,2,3,4];
... need slide.

```


Reverse
```js
var pa = Array.buildPar(4, i => i);
var reversed = pa.scatterPar((a, index, c) => c.length - index - 1); // [3,2,1,0]
```

Positive
```js
var pa = [1,-7,3,5];
var positive = pa.filterPar(e => e > 0); // [1, 3, 5]
```

WH: Is there a similar thing to (common lisp) mapcan? [In Common Lisp mapcan is a map which calls a function on each element. The function returns a list and mapcan returns the concatenation of those lists. The JS equivalent would be the same except using arrays instead of lists.] When writing code I found mapcan to be one of the most useful mappers.

NM: We don't currently have a flatMap operation. It can be done in parallel but requires multiple passes. Could be done in user code.

WH: Doing it in user code makes it hard to optimize well. A built-in would offer more opportunities for an implementation to optimize it by expressing what the user is doing much more directly.

NM: Let's follow up off line

LH: I've noticed that these are all defined on arrays, but used to be on Typed Array

NM: On both

LH: These are consuming and producing arrays, is there a lot of overhead? You'll have an allocation

DL: (Dmitry, please fill in)

NM: The API is important, but we haven't worked on it.

RH: (continuing)

**Non-Determinism**

(see slide)

MM, WH: Why do the arrows on the slide cross? Why require reduce combinators to be commutative?

NM: For parallelism.

MM, WH: Why? Only associative is needed for parallelism.

TS: eg. if you try to do addition, 100 threads on GPU and doing addition as atomic operation, can't guarantee commutativity

WH: If you're able to compile the reduce operation into an atomic add, just do it. If you know enough to compile it into an atomic add, you also know that atomic add is commutative.

WH: If you have something more complex, assume it's associative but don't assume it's commutative. It significantly limits the applicability of the algorithms.

NM: I'll do some more measurements and come back with data.

MM: When the elemental function is commutative, in that case, use whatever technique you want to preserve associativity

YK: You may want to allow people to say that

WH: I want to see, in practice, if that makes a difference

TS: What's a non-trivial example of a noncommutative reduce operator?

MM: Matrix multiplication is associative and non-commutative

RH: (continuing)

**Spec Wording**

reducePar and scanPar use values from the original `O` array and results pusged onto an `A` array

"repeat in an arbitary and implementation dependent order len-1 times."
"select 2 previously unselected indices, k1 and k2 from `O` and `A`"

WH: What is the result of reducePar when the input is an empty array?

Agreement to follow the same empty array behaviour currently defined by `Array.prototype.reduce`

**Why Parallel Versions**

Sufficiently sophisticated copiler argument
- new semantics to reduce, scan

... need slide.


**What we have learned**

- We can see the horizon and there are no show stoppers
- Multiple prototypes: Intel(FF, [V8/Crosswalk](https://github.com/crosswalk-project/v8-crosswalk))
- Production: Mozilla closely tracking spec
- Scaling is achievable in parallelizale parts of the application
- Falling back to sequential schedule better than throw
- Out pointers to kernal functions are useful for reducing memory pressure and avoidng copying
- Allocation pressure is crucial to performance in larger kernels

**Pressure on Memory Management Latency**

(just wait for slides)



MM: Earlier said whitelisting things known to be immutable or threadsafe?

RH: No, have to define "thread safe"

NM: have not done that, want to replay executions without side effects


**Next Steps**

(copy slides)

(end)

LH: There was other work that Brendan had shown, re: SIMD. Is that still for ES7?

NM: (recapping current progress, no answer for ES7)

Mixed discussion about comprehensions, the introduction of .buildPar, filterPar, reducePar, mapPar

TS: As we added parallel versions of map, reduce, etc. needed parallel of comprehesions which is buildPar

MM/JH: (substantial use of comprehensions in other languages)

WH: Desire to have a parallel comprehension syntax.

?: Why not just optimize the current comprehension syntax?

WH: For exactly the same reason why we're discussing parallel map et al instead of reusing map: it's hard in general to tell whether calls to functions can be reordered.

LH: (subjectively) the comprehension form is more attractive



## Signature of Array.from map callback
(Allen Wirfs-Brock)

AWB: Currently differs in callback arguments:

.from
```js
callback.call(thisValue, v)
```

.map:

```js
callback.call(thisValue, v, i, source);
```


RW: The change is supported in Map.prototype.forEach, Set.prototype.forEach, where the last argument is the set or map

AWB: But what can you actually do with that source object if it is just an iterator object?

JH: What

AWB: Consider scenario where someone might want to use the same map callback function for old-style map callback functions + Array.from

AWB: Functions that try to index into an iterator (3rd param) would get undefined, because its an iterator -- not an array

RW: There's a 3rd case for index, eg. tracking index for conditional execution (eg. even/odd element). Might concede the 3rd argument

AWB: Map.prototype.forEach() passes key (for "index" param). Set.prototype.forEach() passes element

AWB: Obscuring errors if arguments don't match expectations

RW: This is a user-code problem

JH: Could we leave it out and require a free variable?

RW: Would be weird that the Array mappers don't leave out the 3rd argument

RH: We find the index very valuable for picking up stuff from free vars

RW: Let's provide index/key for both paths, but not the 3rd param. If you need that you can use a closed over free-var

#### Conclusion/Resolution

- Change usingIterator path callback signature to: value, index
- Change array like path callback signature to: value, index
- Removes "items" from 17.d.3.1 (array like path)
- Adds "k" to 8.g.7.1
(Noted: https://bugzilla.mozilla.org/show_bug.cgi?id=904723)



## Bug 1571 RegExp Syntax
https://bugs.ecmascript.org/show_bug.cgi?id=1571

AWB: ES5 changed (?=) and (?!) from zero-width atoms to assertions

- Doesn't match reality
- Why was this change made?
- Should we roll it back?

LH: If web reality matches 1571
- we don't know the motivation
- we don't know who or why

MB, WH: Roll the change back to ES3, all browsers match ES3 behaviour

AWB: Need to update the ES6 web reality

DC: Did this make it into the bug suites?

LH: Must not have, because no major browser is failing.

WH: How much does Test262 test detection of syntax errors?

BT: A lot but probably not enough


#### Conclusion/Resolution

- Roll back the ES5 change


## Change "EscapeSequence 0 [lookahead ∉ DecimalDigit]" to match reality
https://bugs.ecmascript.org/show_bug.cgi?id=1553

AWB: Strict mode explicitly disallows octal escapes.

MB: Technically `\08` isn't an octal escape sequence though since `8` is not an octal digit; not sure if the strict mode rule applies

LH: We should take this offline

WH: Not a DecimalIntegerLiteral, which can only have one digit if it starts with a zero.

?: So '\08' is a null followed by '8'.

WH: No, it's not that either. The grammar has a lookahead restriction that states that a decimal integer escape cannot be followed by a digit. It's a syntax error.


#### Conclusion/Resolution

- Follow up on the bug report
(AWB: who/how?  Action items without names don't get done...)


## Implementation Dependencies in String.prototype.replace

AWB: 21.1.3.14 "Table 40 — Replacement Text Symbol Substitutions": someone should research what implementations do here (any differences or "web reality" to match?)

This issue dates back to ES3

#### Conclusion/Resolution

- LH to follow up


## RegExp toString escaping not fully specified

AWB: 21.2.5.13 may need a more explicit spec.

WH: This was intentional when we defined toString in ES3. If the RegExp is constructed from a string, the string is not always usable as-is due to issues such as //, ///, and others. Evolution of regexps to support non-BMP unicode may introduce other cases due to the cover grammar.

WH: Given that the source string is not usable as-is, there is no obvious unique value that toString ought to return. An implementation might choose to optimize or simplify regexp patterns (example: replace /[zzzzz][.]\u0041/ with /z\.A/), and implementations may differ in how far they go in such optimizations. In ES3 we decided to specify the behavior of the returned string: if eval'd, it must produce an identically behaving RegExp. Don't see anything that would invalidate that decision since then.

MB: Browsers currently re-use the exact pattern, e.g. `String(/a/)` vs. `String(/\x61/)` – normalization/serialization would be welcome

RW: ES3 spec says "...src may or may not be identical to the source property...." when referring to whether `RegExp.prototype.toString()` should return the same pattern given to it
...This language disappears in ES5

- ES3 15.10.6.4
- ES5 15.10.6.4
- ES6 21.2.5.13

MB: `eval( RegExp(string) )` may not result as intended e.g. if string is `'/'` or `''`.

WH: specifying toString completely is a can of worms; instead we should add a requirement that leaves the exact `toString` behavior up to the implementation, as long as `eval( RegExp(string))` returns a regular expression that has identical behavior.

?: Not all browsers correctly implement the rule that RegExp toString results must be evalable into the same regular expression.

WH: That would be a browser bug.

AWB: Some browsers haven't been paying close attention to this.

WH: Best fixable by putting a few test cases in Test262.

#### Conclusion/Resolution

- Leave `RegExp.prototype.toString` definition as-is, but consider adding requirement https://bugs.ecmascript.org/show_bug.cgi?id=2609

## Allen's TODO Summary

- Lots of Module related cleanup and refinement
- new eval semantics
- MOP/Proxy property enumeration API
- Cleanup completion reform and issues (nothing insurmountable)
- Need to write Annex B spec for HTML-like comments

BT: Can you describe the "MOP/Proxy property enumeration API" item?

AWB: There are outstanding enumeration issues that we need to finally address.

## Introduction and Language Overview

- Need ES6 paragraph for intro (Brendan?)
- Need somebody to update language overview
- In rev23 added some material about classes and how they related to the prototype discussion


#### Conclusion/Resolution

- RW volunteers to write first draft of language overview


LH: Is the recent work you've done on scope complete?

AWB: Still have work to do on eval scope

BT: That's whether or not there is an implied block

RW: This is not to say that _literally_ the difference is the addition of "{" + source + "}", but that you could reason about the result in such a way

AWB/LH: Approximately.

...re: Modules

JM: Can work to help Dave extract Module knowledge

RW: Review, find missing parts, report it (bugs, to Dave, etc)

AWB: HTML comments syntax should be specified for Annex B https://bugs.ecmascript.org/show_bug.cgi?id=2610


## ES7 Process, New Proposal Home

https://github.com/tc39/ecma262

AWB/BT/LH/RW: mixed discussion and agreement to replace the wiki.

#### Conclusion/Resolution

- All in favor!

RW: Should this github repo contain actual proposal info?

BT: Haven't decided yet, but seems reasonable

RW: Will hold off until the organizational story is complete.

RW: We should have a guideline on format for linked proposals (see http://wiki.ecmascript.org/doku.php?id=strawman:string_padding as a possible example)

Discussion about what topics should be in this guideline

- History
- Use Cases
- Problems/Pain points addressed

BT: (to YK) send a PR with your proposal proposal.

JN: Please review the review sign up sheet and sign up.


## 4.4 Object.getOwnPropertyDescriptors
(Rick Waldron)

RW: this is the analog of defineProperties
This is for ES7.

MM: Returns array or iterator?

RW: It returns a plain object that can be passed directly to defineOwnProperties

MM: Does it inherit from Object.prototype?

RW: Uknown. Open issue.

WH: What if you have a proxy that represents a massively infinite structure, what does this do?

RW: Unknown. Open issue.
No reason to rush, this is an ES7 thing.

AWB: Must be same answer as what you get from getOwnPropertyNames

RW: Makes sense.

DC: Returns things that are not enumerable?

RW: Yes.

MM: I have no problem with this. What about symbol properties?

AWB: Open issue.

MM: This one is a trivial polyfill.

AWB: Any library can implement this. They should experiment and figure out what's useful.

YK: There are many issues. Would be best for us to decide what the right behavior is.

AWB: If you have a complex object you don't necessarily want to create all these property descriptors... Lots of allocations that get thrown out immediately. May not be a good idea.

YK: Maybe you want a fn with a callback that yields in the value

AWB: Or something like iterator but it doesn't necessarily fit.

MM: There might already be a polyfill in the Traits.js library.

WH: Why does it return an object instead of matching the behavior of Reflect.ownKeys?

RW: To pass to O.dPs

BN: Why no 'own' in the name even though they make own properties.

AWB: History - you can imagine dealing with own properties and inherited properties, you have to make a choice about which you deal with. Methods explicitly have own in it. In situations where the only thing you could deal with drop the 'own'. Defining implies own.

BN: Descriptors is so verbose... why?

RW: You get back a descriptor. There is already a getOwnPropertyDescriptor.

ACHIEVEMENT UNLOCKED: Longer API name than getOwnPropertyDescriptor!

#### Conclusion/Resolution

- Stage 0 acceptance
- Pursue for ES7. RW has spec text.
- RW to send a PR to add to github.com/tc39/ecma262 tracker

## 4.5 Array.prototype.contains

(Rick Waldron)

RW: ES5 adds String.prototype.contains. Seems oversight that we don't have the same thing in Array. But, we can wait until ES7.

BT: Any spec text?

RW: Not yet, just mailing list discussions.

WH: Are you searching for elements or subsequences? If goal is to be analogous with string you would be searching for subsequences.

DC: We didn't do that for `indexOf`... Rick suggests continuing in that tradition.

WH: That's confusing. If it's not analogous, it should have a different name...

MB: Would be nice for DOM (would get rid of abstractions). DOM has `contains` for classList.

YK: Why not use `has` like set?

MB: Because `classList` already uses `contains`.

BT: Is this different than `indexOf`?

RW: Open question.

#### Conclusion/Resolution

- Stage 0 acceptance


## 4.6 Updates to parseInt

(Rick Waldron)

RW: Should `parseInt` handle new octal and binary integer literal syntax? [bug #1585](https://bugs.ecmascript.org/show_bug.cgi?id=1585)

WH: Which octal syntax? 0123 or 0o123?

RW: 0[OoBb]<suitabledigits> only.

AWB: Essentially add the new literal syntax to `parseInt`.

WH: Sounds great, love to do it. But are there security problems? For example, let's say you have a website that parses the same 0o123 integer twice, one time uses `parseInt`, other time uses something else that isn't aware of the new prefixes and thinks that parseInt would return 0. Validation might pass but actual value would be wrong.

RW: Doesn't this exist with hex integer literals?

WH: No, hex literal has been around since the beginnning... These would be new. It's a breaking change.

MM: What is the rule that you propose to recognize an octal literal?

RW: Those in the spec: 0b/0B or 0O/0o.

LH: This works today (returns `0`). This is a breaking change...

AWB: Applications may not want this behavior...

MB: You can use `Number("0b11")` or `Number("0o42")` instead, at least in V8. (`ToNumber` in the spec should be updated to make this official: https://bugs.ecmascript.org/show_bug.cgi?id=1584)

LH: Was that a breaking change? Looks like, but we went from `NaN` to actually returning a number.

WH: It's a breaking change. parseInt looks for a valid prefix and ignores the rest. parseInt('0o123') currently returns 0 because it sees the starting 0.

#### Conclusion/Resolution

- It's dead. RW to close the bug wontfix.


## 4.3, Update Object.assign to accept multiple sources

(Rick Waldron)

RW: `Object.assign` is useful. Multiple real-world APIs do this, but most allow multiple sources.

AWB: Some have additional options (enumerable vs. non-enumerable, shallow vs. deep copy).

RW: We selected an appropriate name (assign) that set it apart from existing APIs (ie. extend, or merge). We got consensus on this. Problem is that the response from practitioners has been negative. They want a multiple sources version.

EF: Didn't we solve that with reduce?

RW: Somewhat, but it introduces a bug.

RW: I tend to agree it falls short of the cowpath. We should fix for ES6.

YK: one of the common use cases for assign where you're supporting multiple mixins

BT: Why is name important?

AWB: Anyone else who has defined `Object.<that name>` could clobber existing stuff.

SM: Want an immutable version?

RW: Workaround - just use first source as empty object.

AWB: We considered that in the future we might want to add an options record. We weren't trying to provide an end-user solution but a primitive.

EF: If we only had support for one source and target and people used the reduce pattern we could break the web in the future if we want to extend this later.

RW: It will be a WTF that we ignored the cowpath.

AWB: That's why we chose a different name. This isn't `extends`.

YK: It's about real use cases.

WH: Why do the existing methods ignore exceptions?

MM: If some props cause exceptions and others don't, rather than have it be random which prop took, you have a gaurantee that all non-exceptional properties took. Do same thing with DP.

BT: What options?

AWB: Filter function, whether symbols are used.
:: Discussion about whether and what was discussed previously, confirmed prevous consensus was target and source previously, but we didn't explicitly say multiple sources was out ::

YK: We decided that we were going to do assign now, and punt on more complex APIs for ES7. We don't need copying APIs for very specific use cases.

RW: this is a super common use case.

AWB: Most common is single source + target

YK: People will want multiple sources and won't see it as different API.

AWB: Concern that for people who are doing mixins, this is the wrong primitive thing.

YK: Won't happen. Doesn't rebind `super`. So we need ES7 to handle `super` correctly.

BE: Who's against?

AWB: I'm not enthusiastic. Won't stand in the way.

BE: Seems strictly winning to have multiple arguments.

#### Conclusion/Resolution

- Object.assign gets multiple source objects.


## 5.1 Object.entries, Object.values

(Rick Waldron)

RW: ES5 added `Object.keys`. For ES7, `Object.entries` and `Object.values` make sense. These return arrays.

BT: Array of arrays for `entries`?

RW: Yes. You can pass to Map constructor.

YK: Important to be iterable.

AWB: Why not return iterator?

RW: Agree it's crappy but it makes sense because keys returns array.

AWB: Alternatively we could add this to a standard `Dict` module.

BT: Assuming we get standard modules?

AWB: We'll get them.


#### Conclusion/Resolution

- Need strawman for stage 0


## Test262 Update

BT: A lot of pull requests piling up
... Domenic will port promise tests
... Awaiting the contributor agreement form

BN: Will contribute Generator tests

BT: Also need syntax tests

DL: V8 is beginning to implement ES6 and will want to contribute back the tests

RW: We'll need to update the current PRs with any guidelines

MM: For tests that are not specifically specified as strict-only or sloppy-only, currently the Test262 harness only tests these in sloppy mode. Must test these in both strict and sloppy by default.

BT: Issues with the error message string varying across platforms

BT: Also need cross realm association testing
...Naively, we could write in-browser tests, but ideally we want host-agnostic testing.

AWB: Need to stay up to date with reviewing

BT: Rick and I have been doing this

DL: V8 team can assist as well

BT: Will need to support a variety of disparate test systems

MB: What about Annex B tests? They'd have to run in a browser; test runner needs to support that somehow.

MM: Detect Annex B features, then if they're present, test if they behave as per the spec, if not, fail silently.

BT: Continue to report test coverage gaps.

#### Conclusion/Resolution

- BT to publish test criteria/guidelines
- Inform current contributors of guidelines to prepare
- Establish rules for testing Annex B


## Async Functions Question
(Jafar Husain)

JH: Question about the omission of the `close()` method from iterator

BE: `close` came from Python, was on generator objects. We unified send and next, we didn't include `close`.

JH: To be specific, I want the object returned by `@@iterator` to include a `close()` method.

BE: The problem with `close` in python is that it leaks GC semantics.

JH: I understand this isn't based on IEnumerator, but think there is a important case being missed.

MM: I like this addition

BE: we solved by making `close` automatic

DL: If you have `close`, and have `try`/`finally` there is no guarantee that the `close` is called.

BE: In a browser, to avoid denial of service, `finally` is not guaranteed to run.

AWB: Iterator prototocol doesn't require implementing throw, so that the iterator must only implement `next`

BE: Andy Wingo presented cases for removal https://mail.mozilla.org/pipermail/es-discuss/2013-May/030683.html

Discussion about whether this is a breaking change, resolution - it is but probably not a big deal

The name "return" is more accurate then "close"

LH: We need a write up that explains why this is critical

RW: (to JH) confirm a write up for tomorrow

Discussion about "reserving" names on iterator objects.

BE: A symbol for the name of the method?

The risk is not big enough

JH: ES6 for-of won't look for a `return()` method, but ES7 for-of will look for it and invoke.

BE: Deeper issue, we had `close`, but we got rid of it. Was it because no one used it as presented, or was because Andy's points were sufficiently convincing.

YK: Having `close()` exist cause hazards?

BE: No

BN: You might break the for-of to exhaust the iterator elsewhere.

MM: Under this proposal, when the for-of exits early (break) it would cause the generator to take the exit path. If we do this, we have to do this in ES6. It's sufficiently weird enough that I'm not convinced.

YK: You'd opt in?

LH/MM: no

MM: If the for-of exits early, the `return()` on the generator is called

This _must_ be done in ES6, if done at all.

JH: Similar to `Object.unobserve`, sometimes you want to stop doing something that you've started.

Discussion about ways around and reasons for use.

MM: What if we modify: no explicit close/return on exit of for-of. generator objects have this method, but must be explicitly called.

JH: That allows for a future syntactic form?

MM: Probably wouldn't add syntactic form.

LH: Worried about the whole notion of having a return mechanism on generator objects (referring to the example given by Andy Wingo, item 2, surprising yield behaviour).

JH: If for-of doesn't explicitly call the `return()`?

BE: That's addressed by item 3 in Andy's concerns

MM: You could still do this by writing out manually

JH: Yes

BE: Recap: no explicit for-of semantics, has a `return()` that can be called if needed?

BN: may want `return()` to exit without triggering catch, vs. `throw()`

MM: Please present use cases that illustrate

JH: Confirmed.


#### ~~Conclusion/Resolution~~
- ~~Generator.prototype.return()~~

(continued to April 10, 2014)
