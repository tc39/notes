# May 23, 2017 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Brian Terlson (BT), Michael Ficarra (MF), Adam Klein (AK), Chip Morningstar (CM), Dave Herman (DH),  Kent C. Dodds (KCD), Kevin Gibbons (KG), Tim Disney (TD), Daniel Ehrenberg (DE), Shu-yu Guo (SYG), Jeff Morrison (JM), James Snell (JSL), Keith Miller (KM), Myles Borins (MBS), Rick Waldron (RW), Mariko Kosaka (MKA), Stephen Murphy (SMY), Rob Palmer (RPR), Andrew Paprocki (API), Philippa Gardner (PGR), Sam Goto (SGO), Mark S. Miller (MM), Nathan Hammond (NHD), Masud Rahman (MRN), Henry Zhu (HZU), Sebastian Markbåge (SM), Joe Mordetsky (JMY), Franziska Hinkelmann (FHN), Caridy Patiño (CP), Myles Borins (MBS), Ron Buckton (RBN), Ashley Williams (AWS), Domenic Denicola (DD), Patrick Soquet (PST), Peter Hoddie (PHE), Leo Balter (LEO), Ben Newman (BN), Jafar Husain (JH), Yehuda Katz (YK), Sarah D'Onofrio (SDO), Kirill Cherkoshin (KCN), Andres Suarez (ASZ), Diego Ferreiro Val (DFV), Tzvetan Mikov (TMV)

Remote:
Jamund Ferguson (JXF), Bradley Farias (BFS)

-----

## Welcome

(request slides?)

AWB: (introduction, explanation of TC39 and Ecma)



## 6. Agenda Adoption


https://github.com/tc39/agendas/blob/master/2017/05.md

#### Conclusion/Resolution

- Adopted


## 9. Ecma 262 Status Update

(Brian Terlson)

BT: (Final draft of ES2017 coming soon)

- Ongoing effort in Ecma and ISO to accept non-paged formats
- Convince to move away from paper documents
- Many editorial commits from Andre Bargul
- The opt-out period has ended, can move forward with publishing
- Executive committee approved draft last month
- The draft is now "ES2018" (which means we are working on ES2018)


#### Conclusion/Resolution

- On track for publication


## 10. Ecma 402 Status Update

(Caridy Patiño)


CP: Draft is complete, producing a PDF with "print to pdf".

BT: If the new tool from Dean Tribble doesn't work out, we'll just do the same for Ecma 262

CP: Minor editorial and version updates.



## 11. Ecma 404 Status Update

(Allen Wirfs-Brock)

AWB: We'll get to this on Thursday, please read the documents in reflector





## 12. Test262 Status Updates

(Leo Balter)

LEO:

- over 200k new lines of test code written thanks to test generator
- a lot of coverage for async iteration
- New coverage for object spread (rest properties)
- Documenting new feature tests via front matter flags
    - this allows consumers to filter tests as needed
    - https://github.com/tc39/test262/blob/master/FEATURES.md
    - Aiming to grow the contributor base.

LEO: (explaining clean up of erroneous tests that interact with implied global, re: "length" and "name")

AWB:
- Tests are required for reaching Stage 4.

RW:
- Has been working on some of the tests for async function and generators with for-await loops
- Extensive destructuring assignment and destructuring binding tests ported from for-of
- Caught some awesome crashing bugs.

DD:
- Object Rest/Spread has open agenda item for further discussion.
- Has a fairly complete test suite.


#### Conclusion/Resolution

- The work is never ending, want to discuss further contribution opportunities with other members




## 16.i.a RegExp Legacy Features for Stage 3

(Mark S. Miller, by Claude Pache)

https://github.com/tc39/proposal-regexp-legacy-features

MM: The meeting notes did not capture the reviewer names, so didn't reach out.

DE: subclassing restriction is neither necessary or sufficient.

- There are use cases where subclassing is relevant.
- The steps using new.target don't prevent leakage

MM: Need to revisit.

WH: Have same concern; in fact the very motivation argument contains an example that demonstrates why it's not motivated.

- Don't think subclassing should be gated.

DE: Can discuss further and return

MM: revisit on Thursday

AWB: Don't need to rush


MM: Goals: minimal semantic pollution, while matching web reality as closely


#### Conclusion/Resolution

- Revisit on Thursday



## 16.i.b. Math.signbit proposal

(JF Bastien, presented by Keith Miller)

https://tc39.es/proposal-Math.signbit/Math.signbit.html

KM: propose a signbit function that will behave as a signbit function should
- The existing Math.sign gives results that are unexpected

WH: I disagree with how it's presented, but don't disagree with the feature

KM:

https://tc39.es/proposal-Math.signbit/Math.signbit.html#sign

- Should we coerce the number?
- What should we do with NaN?



WH/MM: Why is Math.sign inadequate? Why would you like to get this information?


KM: want to do low level operations that require the signbit

RW: I spend a lot of time writing bit shifting operations to determine sign of values assembled from 8 bit, looking for signs.
(After revisiting real driver code, and further discussion re: this is about the IEEE754 double precision sign bit, I retract this use case evidence. Determining signbit for these cases would require knowing the number of bits the value should be clamped to).

MM: Is there a situation where you want just the sign bit but not the full 64-bit serialization of the number? If you usually/always want the full serialization too, you can just serialize to a TypedArray.

AWB: cases where it might matter if you're receiving a value that came from positive or negative

API: Important to use copysign to know if truncated precision that looks like zero is positive or negative, as in -0.000 being rendered in red

WH: Using copysign or Math.signbit for that is a bug! If the original untruncated input is actually -0 (which you can get in various ways without any roundoff), it should not be rendered in red. Instead, use x<0 as the test.

YK: There may be cases that exist that can be satisfied with this operation in other languages?

MM echoes: let's take a look at other languages.

KM: There are many results for signbit in Apple codebase

WH: How many of them are bugs?

KM: Need to answer these questions:

https://tc39.es/proposal-Math.signbit/Math.signbit.html#alts

WH: If we're going to do this, the way it's specified now is the right way to do it: result is a boolean, NaNs are always "positive" to avoid another Pandora's box. However, I haven't seen any good motivation so far as to why we should do it. The one thing this does is provide a way to distinguish between +0 and -0; the canonical way of doing that has been to take their reciprocals.

?: Or use Object.is, which is the new hotness.


#### Conclusion/Resolution

- Coercison ToNumber?
- Unless otherwise necessary, follow existing
- The return type is Boolean?
- Yes
- NaN is equivalent to a positive number?
-  JFB to address



## 16.i.c Status update on RegExp proposals: lookbehind, Unicode properties, dotall flag and named groups status update

(Daniel Ehrenberg)

(request slides)

DE: proposals...

- named groups https://github.com/tc39/proposal-regexp-named-groups
- dotAll https://github.com/tc39/proposal-regexp-dotall-flag
- Unicode properties https://github.com/tc39/proposal-regexp-unicode-property-escapes
- lookbehind https://github.com/tc39/proposal-regexp-lookbehind

Status:

- All implemented in V8
- Tests in Test262
- Spec text written by Mathias Bynens and others
- Implement next?
- Sarah working on this in ChakraCore!


LEO: I believe Andre Bargul is working on this in SpiderMonkey?

SYG: Need to sync upstream? Not a clear rebase path forward

AWB: Looking for an additional implementor for Stage 4

SYG: Does Firefox count?

KM: Michael Saboff is on board, as in: "supports the idea"

#### Conclusion/Resolution

- General support?


## 16.i.d Intl.Segmenter for Stage 3

(Daniel Ehrenberg)

https://docs.google.com/presentation/d/1KC-qBVqsUdTiePWmSextuMGVIsUa3Tb9EOcVNIj8eOA/edit#slide=id.p

https://github.com/tc39/proposal-intl-segmenter


DE: (from slides)


- What?
  - Locale-tailored grapheme, word and sentence breaks (UTS 29)
  - Line breaks (UAX 14)
- Why?
  - Complex in-browser rich text editors, design tools, rendering
  - Want to deprecate Chrome's Intl.v8BreakIterator
- Out of scope
  - Hyphenation

DE: new, "jumpt to a point, reverse iteration"

BT: Any new features to Intl are impossible without ICU

WH: Is the issue that ICU is the only viable library or that there are several libraries that do things differently?

BT: ICU does a lot that the windows intl libraries don't do and vice versa. It's not that non-ICU are not viable, but that this is very ICU.

AWB: Are we adding because it's in ICU, ir because it's fundamentally useful?

BT: Fundamentally useful

DE: have to decide between shipping massive amount of data or being slightly inaccurate

- Can be used for HTML line breaking accuracy

BT: concerns...

- First time with Intl, we went in circles to implement "implementation defined"
- Now have a bug, because only non-ICU Intl. Our results are not interoperable.
- The community sees this as "chakra does the wrong thing"
- Expect to use the date time formatter to get a parseable date
- When there are invalid characters in result, they file bugs
- Want to format a full time, ie. minutes as mm:00, because spec said so.


DE, BT: discussing Intl implementation databases...

AWB?: Are those libraries standardized?

DE: CLDR is Unicode (http://cldr.unicode.org/)

DE: New ICU APIs go through a standards process.

AWB: edition 1 of Ecma 402: "don't like things left under specified". The outcome is interoperability issues on the web.

BT: It would be better if the implementations were all diverse instead of a consensus-of-3 vs. 1. The latter case makes the 1 look like a bug.

RW: (provides historic context w/r to the intentional under specification)

AWB: Do we want to specify a behavior, ie. ICU or not?

- Would it be better for interoperability to specify explicitly?
- Should we draw the line and say we're not going to introduce new features that are intentionally underspecified?


BT/AWB: Do nothing until we get consensus on normative references to, eg ICU.

BT: The windows database has everything that CLDR has (regularly updated), this doesn't help.

AWB: Do we introduce new features that are not fully specified?

DE: Likely need to work offline

BT: Ok with stage 3 because it gives me enough time to take this to the Windows team

DE: Stage 3 might be a good "forcing function" to drive the research to solve the above questions and concerns

BT: Agree


AWB: I think we shouldn't advance "implementation dependent" features

BT: We're moving towards ICU normative

DE: Whether we make it normative or not, is not relevant to spec text

AK: Not a stage 3 issue.

(Further discussion re: unspecified or underspecified features)

LEO: Would like to ensure that someone from Microsoft is formally reviewing.


#### Conclusion/Resolution

- Stage 2 acceptance
- Reviews still needed
- Caridy Patiño
- Kent C. Dodds will find someone at PayPal
- Brian Terlson





## Normative ICU Reference


BT: Should we advance a proposal for normative ICU reference?

DE: want to include Steven Loomis and Anne van Kesteren in this discussion

JSL: Volunteer to help

#### Conclusion/Resolution

- Stage 0
- Domenic Denicola to act as committee liaison




## 16.i.e Standardizing Date.prototype.toString

(Daniel Ehrenberg)

https://github.com/tc39/ecma262/pull/848

DE: Long time unspecified, all browsers are consistent, simply want to get this defined

AK: Can this be addressed when we discuss "Needs Consensus PRs"?


JXF: Are there libraries that will break with this change?


DE: TZ is optional

API: Not guaranteed to have a TZ string on systems with no TZ

DE: Any recommendation for how this should be handled?

API: whatever the os reports?

AWB: Just toString? Or toLocaleString?

DE: Just toString

AWB: (explains how 262 defers to 402 in toLocaleString cases)




#### Conclusion/Resolution

- Consensus



## 16.i.g Float16 on TypedArrays, DataView, Math.hfround for stage 1

(Leo Balter, original request from esdiscuss)

https://docs.google.com/presentation/d/1Ta_IbravBUOvu7LUhlN49SvLU-8G8bIQnsS08P3Z4vY/edit?usp=sharing

LEO: (presenting direct from slides above)

AWB: Who's blocked by not having this feature? What's the use-case? Pain point or "nice-to-have"?

LEO: Main usecase: webgl, graphics,

DD: Support stage 1 to explore.
- For stage 2, need to determine how widespread the need is, from webgl/graphics/etc folks.

WH: What are you going for here? Space compactness, speed, compatibility with external APIs? What's the speed benefit if there are no Float16-specific operations currently? Are the expectations that implementations will optimize a double operation followed by hfround into a 16-bit float operation?

DD: largely about memory and movement between cpu and gpu

DE: speed gains are in communication between CPU and GPU  (I thought there was mention of DMA?) (not sure)

LEO: A polyfill exists, but not efficient

AWB: If the concern is memory compactness, not performance, and there are no operations... add extra zeroes?
- Can produce a memory buffer containing Float 16s...missed

KM: is it a matter of costing X times as much in software?

DE/SM: Already supported in webgl... serving hardware that can only use half-floats in a render target... passing data through, computational format use cases. Best way to get the most amount of bits through the process.

DD: Can already pack the bits into 16-bit elements and use an array buffer

SM: Have use case, but much more narrow

YK: Seems like setFloat16, getFloat16 might be useful without Float16Array?

_Agreement_

DH: The dataview is a way to do marshalling/unmarshalling of opaque data

DD: @ Dave... ASM/WebGL/Unity, etc?

DH: Can pass along to them to find need.


#### Conclusion/Resolution

- Stage 1 acceptance
- need to explore and answer questions discussed above.
- Ask browser-based game developers if this is of broad value


## 16.i.h Why allow BindingPattern for BindingRestParameter for object rest. Maybe we should just allow identifiers.

(Keith Miller on behalf of Saam Barati)

https://github.com/tc39/ecma262/issues/915

KM: (walking through the issue linked above)

The simplest example:

```js
let { ...[] } = {};
```

What does `...[]` mean?


AK: (explains that `...[]` is nonsense)


Doesn't exist:

```js
Object.prototype[Symbol.iterator]
```

WH: So far the examples of nonfunctionality have all been about array destructuring after ... . Is the proposal to get rid of array destructuring or all destructuring after ...?

?: We're just raising the issue.

SM: Context: what happens if `{ a, ...{ b, c }} = rhs`?

AWB: What does `{ a: [x] } = { a: obj }` do?
- `x` is bound to the first iterator value of `obj`
- what we're discussing is the fact that `b` in `{ a, ...b } = obj` is always a new object whose prototype is `Object.prototype`, so there's no chance it's iterable

AWB: We still have the ability to define `...` in object rest destructuring as "take all the keys from the RHS that were not already destructured, create an *iterator* from that, and use that iterator for destructuring into whatever pattern comes after the `...`, which would work for `...[]`

BN: Does that work for `{ a, ...{ b, c }}`?

SM: We would specify that case separately, so we would not create the iterator AWB proposed.

KM: We could say it's disallowed to write `...[` for now, then design the behavior later.

HZ: `...[` used to be a syntax error in Babel in 6.0, but we changed it to be allowed in 7.0 (still alpha) so we can make a patch.

Agreement on making `...[` a syntax error for now, which can be revisited later.

SM: What about `...{`?

AWB: Assume it destructures he remaining properties?

KG: Not currently useful?

SM: No, there are use cases for `{ a, ...{ b, c }}`, because `b` and `c` must be own properties, whereas `{ a, b, c } = obj` allows `b` and `c` to be inherited.


Important distinctions:

```js
// find A and B anywhere in the prototype chain of the result of evaluating expr, ie. [[Get]]
let { A, B } = expr;

// find B only when own, enumerable B exists on the result of evaluating expr
let { A, ...{ B } } = expr;

// What does this mean?
let { A, ...[ B ] } = expr;
```


#### Conclusion/Resolution

- Consensus to disallow `...[` & `...{` inside object destructuring, as invalid syntax



## 16.ii.a Atomics.waitNonblocking for Stage 1

(Shu-yu Guo, Lars Hansen in absentia)

https://github.com/lars-t-hansen/moz-sandbox/blob/master/sab/waitNonblocking.md

SYG: (reviewing: https://github.com/lars-t-hansen/moz-sandbox/blob/master/sab/waitNonblocking.md#overview-and-background )

MM: re: naming, "waitNonBlocking" is like "jumbo shrimp"

SYG: Leo suggested "waitAsync"

WH: MM, before you ask for chaging the name, keep in mind that wake affects both wait and waitNonblocking.

WH: So waitNonblocking checks the atomic value only at the time you call it, not later?

SYG: Yes

AWB: `Atomics.wait` is waiting for changes?

WH: No, I thought this as well, but that's not what it does. It checks the atomic variable only once, when you first call it.

SYG: If the atomic variable's value doesn't match, wait aborts immediately. If it matches, it waits until woken or it times out.

DD: Why an operation, when `===`?

SYG: Should defer to Lars

WH: proposal contradicts itself, some inconsistent behavior: https://github.com/lars-t-hansen/moz-sandbox/blob/master/sab/waitNonblocking.md#informal-semantics-aka-notable-facts

WH: In the current spec, an agent can only do one wait at a time. If it blocks, it can't do anything until it times out or is woken up. With waitNonblocking, it can have several waits running in parallel, and the proposal is inconsistent as to what happens if wake gets called to wake only one agent.

Discussion of naming...

DH: is it too late to rename the original naming?

SYG: The risk of breaking code is low, but we have shipped so sooner is better.


#### Conclusion/Resolution

- Stage 1 for semantics, naming TBD.
- WH to review semantics.




## 16.ii.b Module import options discussion, potentially for stage 1

(Domenic Denicola)

- Discussion: https://discourse.wicg.io/t/specifying-nonce-or-integrity-when-importing-modules/1861/4
- Slides: https://docs.google.com/presentation/d/1qfoLTniLUVJ5YNFrha7BaVumAnW0ZgcCfUU8UbyyuYY/edit?usp=sharing


DD: (walking through slides)

discussion about multiple requests for same resource with different parameters/options

AK: Can fetch twice if necessary, eg. once with credentials and once without (per case)

DD: (calling out issue with `integrity` option)

https://docs.google.com/presentation/d/1qfoLTniLUVJ5YNFrha7BaVumAnW0ZgcCfUU8UbyyuYY/edit#slide=id.g1f527b5ce9_0_103


DH: Strong "EWM" (Extensible Web Manifesto) story... service worker hook vs. new js syntax? A low level hook would allow people to experiment on workflows immediately in userland

WH: What does SRI stand for?

SS/KM: "Subresource Integrity" (see: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)


DD: sharing feedback from team

BT: Typescript effectively has out-of-band type declarations for imports, which might be a precedent for out-of-band metadata about imports generally.

JM: Flow has in-band `declare export ...` annotations and out-of-band declarations, and people seem to prefer out-of-band.

MM: Anywhere you can hook back into JS code for information needed by Service Workers, you should just communicate that information to the loader.

YK: The top-level app shouldn't have to do all integrity validation. Easier for libraries to ship manifest files than inject code into application modules.

DH: Is it even possible to come up with a hash that's identical to a certain part of the string being hashed?

AWB: Circular dependencies make in-module integrity hashing impossible, right?

MBS: Peer-to-peer networks would be eager to come up with a spec for low-level hooks for out-of-band configuration.

BF: I will weigh in for in-band, don't want people to include in work flow.

DD: Sounds like out of band?

BF: No (something about files?)

(some discussion about tooling and file modification)

BT: Do we have an inkling what out-of-band configuration would look like?

DD: Prototype in service workers? Would be great if Node could provide some use cases.

BF: can offer use cases... not always about integrity... might want async loading, parameterization (via url params currently)

MM: (asks about package.json)

AWS: People put all kinds of custom things in there, but the format isn't going to change.

DH: Big distinction (in terms of standardization) between a machine-generated format vs. something humans are supposed to write.

SDO: Was there a follow up about how Node users might want to use this?

DD: Yes

JMS: Need to work through this on the Node side.

SM: Need any input from Webpack?

DD: A lot of responders want "In Band"




#### Conclusion/Resolution

- Out of band is preferred
- No need to advance in TC39 at this time
- Recommending ServiceWorkers get a hook?
- Apparently they already have this
- Can experiment with "In Band" (using e.g. module identifer query params)



## 16.ii.c Importing modules which failed evaluation

(Domenic Denicola)

https://github.com/tc39/ecma262/issues/862

DD: (walking through the issue)

AWB: Should put the new state in AbstractModuleRecord (not just SourceTextModuleRecord), as something any kind of ModuleRecord must implement.
(general agreement on this, including from DD)

DH: Explains what non-SourceText ModuleRecords are for: dynamically creating dependency graphs.

MM: The AbstractModuleRecord super class should have an abstract method that returns the module's dependencies, and it can be implemented differently for SourceTextModuleRecord vs. other record types.

DH: That should be a spec-level mechanism, not exposed to JS. (general agreement)

AWB: Concerned about rethrowing/reusing exceptions. (===)

YK: Awaited rejected promises re-throw the same (===) exception every time; there is precedent.

SDO: Promises might not be a good precedent, since their exceptions aren't going to be === across multiple realms.

DD: Errors won't be cached/re-thrown across multiple realms/iframes. (SDO seems reassured)

DD: Not aiming to come to a conclusion in this meeting for split between AbstractModuleRecord and SourceTextModuleRecord, but maybe directional comments.

AWB: AbstractModuleRecord contains what it contains for sometimes subtle reasons, so we should be careful about hoisting functionality up from SourceTextModuleRecord.

DH: Feels like a natural modification by coming up with the state transitions. This seems like the next incremental improvement.



#### Conclusion/Resolution

- Moving forward with top-down storing/re-throwing of state/exceptions, as proposed by DD.
- Still need to figure out the details of circular dependency situations (don't merge the spec PR just yet).




## 16.ii.e Advance Numeric separators proposal to Stage 1

 (Sam Goto)

Proposal: https://github.com/samuelgoto/proposal-numeric-separator
Slides: https://docs.google.com/presentation/d/1hcajTemZB2Ruo4EePOyFiva1xpyv5ukKk4aQ0B83dUA/edit#slide=id.p


SGO: (walking through slides)

MM: Separator at the beginning of number is a non-starter for JS because that's currently a valid identifier.

SGO: Restrictions: single separator, between digits only, tentatively just `_`.

WH: [responding to `parseInt("10_000")` example on slide]: Currently that's valid and returns 10. Changing the behavior on user input can be troublesome.

- Discussion re: `parseInt("10_000")`
- Likely to follow the same design decision used when introducing `0b` and `0o`

MM: (explaining why we usually chose to take safe route when introducing new features that "might" be non-upward compatible. And why we sometimes do succeed at a "technicalllY" non-compatible cleanup that turns out to be compatible with the web anyway.)

AWS: How is breakage measured?

RW: bug reports, sometimes only one is needed

SYG: explaining how finding and experimenting is ad-hoc

RW: (revisit the Array.prototype.values issue)

WH: Is the _ only allowed between consecutive digits? i.e., not allowed adjacent to a decimal point?

SYG: Correct

WH: What about inside the exponent?

SYG: _ would be allowed between digits there too.

RW: Volunteer to write tests for this


#### Conclusion/Resolution

- Stage 1 acceptance
- Needs grammar written, etc.


## 16.iii.a Accessing host-specific module metadata from inside a module

(Domenic Denicola)

Issue: https://github.com/whatwg/html/issues/1013
Slides: https://docs.google.com/presentation/d/1p1BGFY05-iCiop8yV0hNyWU41_wlwwfv6HIDkRNNIBQ/edit?usp=sharing

AWB: (objecting to `import { url } from "js:context"`): lose idempotence?

DD: Still idempotent given (importing module, identifier).

AWB: If identifiers like "js:context" are going to be host-defined, and you use an identifier not defined by the current host...

DD: There are definitely portability problems. Probably a good idea to do `import * as module from "js:context"`.

MM: Want to require it to be straightforward for a controlling context (such as the creator of a Realm) to be able to virtualize or censor access to host-defined objects.

DD: Parsing seems necessary there.

BN: The import style will be hoisted, so it's harder to do feature testing (because you can't catch exceptions). The import.meta.* property is just an expression, so developers can inspect its properties using conditional logic.

DH: You can still use `import * as module from "js:context"` and then inspect the properties of `module`.

BF: Some developers might really want early errors.

JSL: Worried about two different hosts trying to define the same property.

MM: Only option #3 makes sense.

DH: Can't introduce let variables that collide with named imports! (MM retracts)

WH: MM, so your concern is that you want the ability to disable code from running things like import.currentScript?

MM: Yes. Code should not be able to do i/o if it's denied access to i/o objects.

MM: In option 1, it would work if the special name were passed to the module loader, which would be able to deny access if it wants.

DD: currentScript is an HTML script elements, from which you could get eval

DH: import. is a much bigger concern in a script than it is in a module because

DH (rephrasing his argument):
- today you can run untrusted code with a protected eval (which must be a script, not a module)
- today people write secure code by restricting access to eval
- adding new power tools to modules is safe because restricted eval can't access them anyway
- so we have some time to figure out a security story for host-defined contextual module capabilities

WH: So you're suggesting that import.meta be usable from modules only, not scripts?

DH: Yes

DE: To build a platform where this is a security primitive requires consulting with a lot of stakeholders who care about capabilities/security.

DD: I want it stated on record that we do care about security.

MM: (concedes this is true, having an argument)

DD: Node is going to implement "js:context" anyway if we don't come up with something in this meeting.

MM: The beautiful thing about "js:context" is it falls within a mechanism (import) that we already have to vet for security/sandboxing purposes.

JSL: Node does not have the option of avoiding this question. We have to have some mechanism to get module-contextual metadata.

KG: (strawman idea): what about using top-level `this`, which is currently undefined?

(general aversion in the committee)

DD: Option #1 and option #3 can be done outside this committee.

WH: A lot of bad things have gone into the spec which have been implemented on the web and then later forced through committee as "existing practice"

DH/AWB: Time pressure is distorting the conversation. We're going to keep talking about this.

MM: Now strongly favoring #1 (that is, `import * as module from "js:context"`).

MM: "Us realm guys" (referring to himself and DH et al.) really need to figure out security implications of modules and loading hooks. More and more libraries are going to be made available on the web using modules.

YK, WH: Why is import.meta.* (option #2) hard to virtualize?

WH: Option #1 has the problem of namespace collisions between module names and meta-like things like "js:context". This kind of thing hurt perl badly, with creative filenames causing havoc when passed to file i/o.

DH: Option #1 also has to be hoisted out.

AWB, WH: Based on this conversation, option #3 (adding new free variables) seems completely off the table.

MM: Withdraws objection to option #2, since `import.meta` just becomes one of the things that obviously have to be virtualized in a secure environment.

DH: Object.getOwnPropertyDescriptor is precedent for `import.meta` *not* being a locked-down module namespace-like object.

YK: Option #3.c (`import { url } from here`) is undesirable because it must be top-level.

(bikeshed discussion of what to call `import.thing`)
(general consensus for `import.meta`)

MM: What about exposing dynamic `import()` as a method of `import.meta`?

DH: `import.meta.import()` is just really verbose for a common idiom.

BF: And import() should be available in script, where the import.meta meta-property is not available.

#### Conclusion/Resolution

- Let's go with `import.meta`; Domenic to come back later this meeting with a proposal
