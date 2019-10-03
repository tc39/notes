# May 27, 2015 Meeting Notes
-----

Brian Terlson (BT), Allen Wirfs-Brock (AWB), John Neumann (JN), Jeff Morrison (JM), Sebastian Markbåge (SM), Yehuda Katz (YK), Dave Herman (DH), Sam Tobin-Hochstadt (STH), Lee Byron (LB), Kevin Smith (KS), Daniel Ehrenberg (DE), John McCutchan (JMC), Dan Gohman (DGN), Brendan Eich (BE), Adam Klein (AK), Jordan Harband (JHD), Mark S. Miller (MM), Michael Ficarra (MF), Waldemar Horwat (WH), Chip Morningstar (CM), Simon Kaegi (SK), Peter Jensen (PJ), Eric Ferraiuolo (EF), Stefan Penner (SP), Paul Leathers (PL), Jonathan Turner (JT), Matt Sweeney (MS)

-----

## Agenda approval.

### Consensus / Resolution
So say we all.

## Approve minutes from previous meeting

### Consensus / Resolution
So say we all.

## ES6 Updates (AWB presenting)

AWB: Doing a few cleanups and tweaks to final draft to make it ready to publish. Have final PDF.

AWB: Working on updating Jason's tool to produce HTML version.

AWB: Deck on significant bug fixes (Share slides)

AWB: Bug #1: super prop assignment can silently overwrite non-writable properties (now fixed in spec)

AWB: Bug #2: Unintended for-in eval order change (now fixed in spec)

AWB: Bug #3: GeneratorParameter grammar parameter now eliminated (now fixed in spec -- replaced with early error rules)

WH: Wants a copy of the modified grammar to re-verify the changes in his ES grammar validator

BE: can you put your Common Lisp based validator on Github?

WH: I want to. Stay tuned. [May need to get rid of confusing irrelevant extra fluff that accumulated over the years.]

AWB: Spec going to ECMA in 2-3 weeks, will likely be approved by general assembly

AWB: Then going to ISO, changes mostly handled by ECMA secretariat. They will find some real spec issues. But it takes a year, so it'll be confusing because we'll come out with ECMAScript 2016 by then...

AWB: Name is changed to "ECMAScript 2015 Language Specification"


AWB: ES6 is done.

AWB: Reminder that  a year from now we will be at the same point for ES2016. At end of Jan next year we have to have a complete ES2016.

YK: We expect it to be light...

AWB: Yes, fundamental issue is what's in the spec and when it can come in.

AWB: We don't have a lot of breathing room to get stuff ready for inclusion.

AWB: Not going to be editor anymore. Who will be editor?

AWB: Editor is a full-time job.

[debate about form of the standard document]

WH: The format of the document plays only a minor role in what an editor does. The other duties of an editor are still a full-time job.

AWB, BE: Not feasible to switch away from Word for 2016.

BT: "Ecmarkup" is being used for 4 or so ES7 specs, we could rapidly switch over if we chose to
http://bterlson.github.io/ecmarkup/

BE: can we generate Word that's good enough for Ecma and ISO from Ecmarkup?

BE: easier to recruit new editor if we have better tooling and github PR-based helpers -- really want that modern workflow, it'll help productivity while not eliminating single-final editor role

YK, BT: Doing editing as a group would allow more people to get involved and reduce the amount of work that editors would have to do, allowing more people to help

AWB: Actual document editing took <20% of editor time. The 80% was spent on integration of proposals across the entire spec.


AWB: Jason no longer wants to maintain HTML spec.

MF: If we move to EMU, how will links persist across revisions?

BT: EMU requires assigning unique ID to each section

AWB: I'm leaving Mozilla too, but happy to help the new editor out.

?: What needs to live on the ECMA GitHub?

WH, AWB: Any contributions need to be in some format that ECMA can archive, for legal, librarian, and historical needs — imagine someone needing to track down the history of some contributions 15 years from now. For individual documents (pdfs, etc.) the simplest way is to send them via the ECMA reflector. ECMA keeps an archive of those forever. For ongoing things use an ECMA-sanctioned repository such as ECMA's GitHub.

## Module export-from additions (LB presenting)


LB: This proposal fills in a gap and makes things more consistent. Currently, it's unnecessarily verbose to put together a module.

YK: "export v from 'mod';" is confusing; does it re-export "default", or export a name "v"?

YK: Existing syntax for this seems clearer: "export {default as v} from 'mod';"

LB: How about we keep "export default from 'mod';' separately? Everyone seems happy with that.

### Resolution

Move to stage 2 with two accepted forms: "export default from 'mod';" and "export * as ns from 'mod'"

## SIMD.js Stage 2 (PJ, JM presenting)

PJ: (shows demo of graphics performance with and without SIMD.)

BT: (shows similar demo.)

MM: If you do a typeof, what do you get?

DE: Will talk about typeof semantics after presentation.

WH: Why is max only on float? That seems gratuitously inconsistent. max is just as useful on integers, even if you can roll it on your own.

MM: From a POLA perspective, it seems like there should be max on integers as well.

JM: Rolling your own max is simple.

BT:  Talked about SIMD and ES6 at recent talk, and most questions where about SIMD.

BE: I've gotten the opposite reaction.

BT:  Developers were interested in games.

SK: Why 128 bits

DGN: 128bits is a natural size for many operations and was the largest common size across SIMD architectures we considered

CM: Makes sense for performance use cases, but it seems weird to have the implemention detial bubble up.

JM: Larger can be written on top of 128.

MM: Minor API issue:  the name swizzle historically used simillarly to marshal and serialize

JM:  In graphics programming the name swizzle is the right choice

WH: How does endianness become visible?

DGN: First lane is always at offset 0 of the typed array, second follows first lane, etc. The endianness within a lane is implementation-dependent.
  (discussion about little endian/big endian)

DGN:  Contents of the lane are byte order dependent on platform

WH: SIMD reinterpret cast will do different things on different systems?

DGN: Yes.

AWB:  You see the same thing with TypedArray.

WH: You have load, load1, load2, load3, but no load6, for instance?

DGN: You could imagine what a load6 might be, but not particularly useful.

BE: It could be added in the future.

MM:  What does xmmintrin.h mean?

WH: XMM (a register type in the x86 architecture) intrinsics

R?: It's a header file that defines an interface that's widely used for 128 operations. In emscripten we have an emulation of it in terms of SIMD.js.

DE: Intention is to represent with value types with wrappers. Typeof returns a string representing the type for the value object.

MM: This is a proposed system defined value types. How does this work with user-defined value types?

BE:  If we're going to integrate with main spec, we might want to roll into user-defined value types.

DE:  What if we move to stage 2 and we can still integrate it into user-define value types.

AWB:  It would be good to not introduce 6 new system value types.

WH: Interpreting <, <=, >, >= as always being string comparisons in current spec text is hostile to value types and other numeric comparisons. (we don't want 200 < 9).

DE: With less-than, I just added a note that it compares it as strings.

BE: We should work on the operators which should be overridable. Don't define future-hostile semantics -- those that we'll need to change later.

DE: Like to make operators which are eventually overloadable, throw now.

WH: The spec has the Int64x2 case but can't find its definiton. Curious what int64's turn into when extracted. How does that work?

DE: Not defined. There is no way defined to load and store them yet.

WH: Defined multiplication by element-wise ECMAscript multiplication with its rounding of intermediate results > 53 bits. This is not what SIMD implementation do — they all do strict modular integer arithmetic.

DE:  I've added a note asking if this is the direction we want to go. The polyfill uses Math.imul which is the right solution. (DE will change the spec.)

JHD: Are properties of SIMD supposed to be nonwritable, nonconfigurable?

MM: The general style we've agreed upon is that primordial properties are either configurable or writable. This is important for initialization of realms, to make it seem like a different kind of realm.

DGN: I believe that Firefox JIT can handle that.

JM:  Should we think about standard modules?

DH:  While the module imports are not writable, the module table is. Realm initialization is just as possible with modules as with configurable/writable properties. You just have to update the table.

DH:  It's fine to not have a blocking dependency on modules. We don't have convensions for standard modules yet. I think it's fine to put SIMD on the global object.

JM:  It seems like someone needs to be the first to add a standard module.

DH:  It's OK if we wait for userland module convensions to emerge.

MM: We can let this proceed to stage 2 without having to specify in terms of value types or standard modules, with the idea that we will eventually get there.

DGN:  If we want to get this done in 2015, can we agree to have a SIMD global?

DH:  There's nothing wrong with having a global named SIMD and a standard module for the same thing.

MM: With modules standard and loaders not standard, is it the case that it doesn't give TC39 the option of specifying new things in terms of modules?

STH: We want to ship SIMD on a timeline which is not constrained by the loader spec.

MM: I'm convinced, I was just taken by surprise by the implication (that we couldn't add system modules).

AWB:  With globals, each realm now has to have all of these duplications, depending on optimizations.

MM: SES has to make sure that none of the primordials expose mutable state. They have to freeze them, and the only way to do that is to walk eagerly.

DGN: What about the large number of SVG bindings?

MM: The SVG bindings are provided through a membrane.

DE: Can we provide SIMD through a membrane?

AWB:  Not if it's in the ES spec.

DH:  Can't SES just delete SIMD?  (room laughs)

MM: Clarifies the cost in question:  traversing the objects and freezing everything.

STH:  So generally, adding "n" functions will present this problem for you.

MM:  Yes, when "n" is large enough. The way to avoid this overhead is to have a platform-provided way of creating a new realm that looks like this realm but is frozen.

DH:  (Notes that such a capability would have benefits beyond just security.)

CM: (To MM) Are you interested in creating a realm with specific constraints, or general realm initialization?

MM:  The realm API is for creating a new realm according to the wishes of the creator of the realm. What I'm interested in is not the Realm API itself, but have a way to ask the platform for an SES realm.

MM: "SESsiness"

BE: "Sessility" (real word)

### Resolution:  move to stage 2


R?: If you put a NaN into a TypedArray, the spec requries it to be a non-signaling NaN. Why?

AWB:  It was copied out of the WebIDL spec. There are only two references, we could remove those.

BE: spec link: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-setvalueinbuffer

BE: proposal is to remove the "if value is NaN..." language and let different (bit-patterns observable via typed array views as well as SIMD) NaNs be stored

WH:  Any thought to UInt SIMD types? uint8 and uint16 are much more useful for pixel values than int8 and int16.

DE: Use a different set of primitives. +, -, * don't care about signed/unsigned. Use differently named functions to load them or do lane-wise comparisons.

WH: That's awkward, particularly for uint8. Also, some operations can't easily take different names: <, >=, value-to-string conversions, etc. If I have a pixel color value of 255, I don't want it to print as -1.

DE: Using < on SIMD values makes no sense. What should it do?

WH: The obvious dictionary order comparison of the numeric values.

DE: People won't use it.

AWB: Oh yes they will. If it can be done, people will do it.

BE: group resolved already to avoid shipping non-starters...

## Generator function.next Meta Property (AWB presenting)

MM: If you allowed function.next within an arrow function inside of a generator, what would it mean?

AWB: It would just mean the same thing that it does outside of the arrow function.

DH:  What are the use cases other than getting the first one?

AWB: (References example in repo)

DH:  But you could do the subsequent capturings with a local variable.

AWB: It allows you to not special-case the first one.

DH: This feels like has a little of the ".current" api from C# iterators. Not sure if it matters. Does this create any GC pressure?

AWB:  Don't think so. It's specced so that it's cleared out when the next value comes in.

DH: Think you might just need "function.first" or something, but your (AWB) argument for not special casing is good.

DH:  Think it's odd to call it next when you mean previous.

BE: writes "function* gen() [ first ] {}" as an option

DH: No...

DH: Could be "function.yield"

MM: Writes:

```js
function* addr() {
    try {
        yield;
    } finally {
       return function.next;
    }
}
let tally = addr();
tally.next(17);
tally.return(5);
```


AWB: Returns the last value passed to next: 17

MM: Is it the value coming in to "return" and "throw" or just "next"?

AWB:  Just "next".

DH:  That's why you like "next", because it's only the value passed in with "next".

MM: We're agreed that this returns 17. If you resume with "return" then "function.next" retains the value of the previous resumuption.

AWB:  Yes. I entertained this.

WH: Any weird interactions with yield*?

KS: yield* primes its generator with the value undefined. If you write using function.next, you get problems because it will be primed with an unwanted "undefined"

DH: Could "yield *" prime the generator with "function.next"?
(discussion about incompatibility with current spec)

DH:  The code using yield * is probably pretty low, so we could probably do an errata.

DH:  The question is whether the community transpiling and using function* can

MM: There is a capability leak concern here, where it's passing to the subgenerator something that's not implied by the yield * itself.

DH:  Is that circular?

MM: But it's passing something from before when yield * is evaluated.

DH:  I'm beginning to think that this is the wrong path (passing in function.next via yield *).

AWB:  You could create some kind of wrapper if you wanted to pass in the first value to the subgenerator.

MM: Libraries could do this.

```js
yield * wrap(g, function.next);
```

MM: "wrap" returns an iterator which wraps the generator which primes the subgenerator with the supplied value.

?: Collect usage data of "wrap" to see if we should change yield*.

WH: By the time we get the usage data, it will be too late to fix yield*.

AWB: We'd end up with a second form: `yield**`
(general agreement on current yield * behavior)

AWB: Proposing that we move this to stage 2.

DH:  Don't think that "next" is the right name.

YK: Not sure we can advance a small syntactic thing to stage 2 if we're not sure about the final syntax because of transpilers.

MM: Is it worth taking a few minutes to brainstorm on a name?

List of _ options for function._: current, previous, last, next, nextarg, pre, step, lastNext, n, in, lastYield, lastInput, yielding, input, genin, previousValue, gin, gr, now, sent, generation

DH: Want some indication that it's the resumption value.

WH: If I were seeing function.current for the first time, I'd think that it was arguments.callee.

BE: What about "yield.something"

AWB, MM: (agree that it would work)

DH:  There's human ambiguity. Adding parens around "yield" should not change the meaning.

JHD: what do we call the value passed into Generator#next? we should name that and call this the same thing

LB: Propose "sent"

MM: Does anyone object to "sent"

CM: Would that be "dissent"?
(general agreement on "sent")

### Resolution

Advance to stage 2, update proposal to use "sent"

## Test262 Update (BT presenting)

BT: Test262 is super active. Much es6 coverage now. Strict clean.

DGN speaks to Math method test result variation, proposes fdlibm (+/- 1 ulp accuracy for most methods including sin)
[debate about whether to go for precision-based limits or mandate one particular implementation for reproducibilty]


WH: The state of the art advances. Had we mandated one implementation for reproducibility in ES1, we'd now be stuck with numeric functions that are inferior in both accuracy and speed than the current state of the art.

WH: For some functions, such as sqrt, it is practical to require correctly rounded exact results. For others there are no known efficient implementations yet without a bit of tolerance.


DGN: In the context that math libraries have the power in ECMAScript to deliver high-quality results at a variety of performance/precision tradeoffs and can evolve over time, the committee has three main approaches for the builtin math functions:

- Stay with the status quo. Math functions in the spec are entirely ungoverened. This has been the reality for a long time and it's not necessarily problematic.
- Specify particular implementations for each function, possibly including algorithms from fdlibm, crlibm, or other places. The main advantage of this would be that floating point in the spec bit-for-bit reproducible, which is an interesting property.
- Empirically discover maximum error bounds for existing ECMAScript implementations and specify something around that.

What do you prefer?

WH: Efficient and precise standard math libraries do a large amount of bit-banging. They can't be implemented efficiently in userland ECMAScript code using just +, -, /, etc. They need additional primitives.

DGN: We can do everything we need with the existing math primitives in ECMAScript. It'd be nice to add a few things, like reinterpret cast, but we can do that with typed arrays if needed.
