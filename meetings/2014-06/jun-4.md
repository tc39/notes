# June 4 2014 Meeting Notes
-----

Brian Terlson (BT), Dmitry Lomov (DL), Waldemar Horwat (WH), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jafar Husain (JH), Jeff Morrison (JM), Mark Honenberg (MH), Caridy Patiño (CP), Yehuda Katz (YK), Niko Matsakis (NM), Ben Newman (BN), Filip Pizlo (FP), Sebastian Markbåge (SM), Rafeal Weinstein (RWN), Jaswanth Sreeram (JS), Alex Russell (AR), István Sebestyén (IS), Simon Kaegi (SK), Arnaud Le Hors (ALH), Reid Burke (RB), Erik Arvidsson (EA), Brendan Eich (BE), Mark S. Miller (MM), Peter Jensen (PJ)

-----

## Adoption of the agenda

https://github.com/tc39/agendas/blob/master/2014/06.md

AWB: Adding section 8: Other ES6 Technical Issues
AWB: Adding "Report from ECMA secretariat" to HTML integration section

SK: Add an agenda item to discuss JSDoc and its use in editors

AWB: add "ArrayBuffer neutering" to ES6 agenda items


## Conclusion/Resolution

- Agenda Approved
- Minutes from April 2014 approved


## Scheduling of TC39 meeting


JN: Meeting schedule changes are problematic

- In november, we'll select for next year.
- The current meeting dates need to be approved now and committed to

YK: Didn't weigh scheduling concerns of champions vs. non-champions well

AWB: Hard to weigh those concerns until we know what will be talked about

Next:

- 29-31 July 2014 at Microsoft in Redmond, WA (USA)
- 23-25 September 2014 at Bocoup in Boston, MA (USA)
- 18-20 November 2014 at PayPal in San Jose, CA (USA)

(posted: http://www.ecma-international.org/memento/TC39-M.htm )

AWB: Should set agendas based on schedule, rather than other way around

JN: I will propose meeting dates in September for your consideration


## Agenda for this meeting

DH: Talk about generators tomorrow (Thursday), to accommodate Brendan Eich and potentially Andy Wingo

## 4.2 Schedule Review

AWB: Goal was to present ES6 to ECMA general assembly for approval later this year, meaning we need to approve finished draft at September meeting, meaning we need a finished draft at July meeting. I don't see any way we can have even an approximately finished draft by July. Also starting to get good implementer feedback which is causing spec churn, but there are pieces missing review. If we ratified what we have now we'd be missing serious implementation feedback.
AWB: Propose we slip our publication target by 6 months. Spec will still be feature frozen. We're just fixing bugs and accepting implementer feedback.
Concern 1: is this opening the door to feature creep? Important it doesn't do that.
Concern 2: Will this simply delay implementer work by 6 months?
Concern 3: Perception of committee failure?

DH: We should move forward on the work and message that we're doing so. Spec is not what drives the work, spec is the final capture of a stable consensus. I'm OK with the spec slipping.

WH: Don't want to repeat E4X (ECMAScript-for-XML) experience of shipping buggy spec, and later abandoning it.

?: Hazy distinction between calling something a bug vs. a revisited conclusion.

WH: The issues with E4X were clearly bugs.

AWB: This committee can tell the difference between fixing bugs and revisiting conclusions.

AWB: Focus energy on ES7 [if you want to revisit conclusions]!

AWB: Other factor playing into spec review is Test262, to which we've just gotten approval to accept contributions

JN: Can we approve the change of dates (presenting finished draft to TC39 committee in November rather than July)?

AWB: Everything we want to include is in the spec at some level of quality, it's just a matter of ensuring quality.

YK: If you're an implementer, you shouldn't treat this as a slippage.

AWB: Should we start naming spec editions using years rather than an incrementing number (ES2015 vs. ES6)?

AWB: Let's not throw this in with messaging about the schedule postponement.

YK: The fact that people are used to ES5/ES6/etc. will make the change important as a messaging technique.

BE: Let's sleep on it.

## Conclusion/Resolution

- Postponement of presentation of final ES6 draft agreed upon
- Switch to yearly naming convention to be slept on


## Update on changes to spec since last meeting

AWB: See "Draft Rev 25" section of http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts

AWB: Object.prototype.toString.call(proxy) will be either [object Object] or [object Function] depending on whether the proxy is callable, so that there is no way to tell that an object is a Proxy
MM: Have to choose between use cases, and being able to hide Proxy-ness is the better choice
AWB: Already considered/dropped isProxy, so using O.p.toString as a back-door would have been inconsistent with that decision

AWB: Another Proxy issue MM and I talked about: custom property descriptor attributes on Proxies, specifically adding additional attributes to the descriptor that the Proxy could recognize.

```js
Object.defineProperty(obj, propName, {
  value: whatever,
  customAttribute: attrValue
});

// Should the customAttribute be preserved here?
Object.getOwnPropertyDescriptor(obj, propName).customAttribute
```

MM: Decision was to disallow/ignore custom attributes. Might add an additional object metadata API in future versions of the language, but it will be separate from property descriptors.

AWB: for (let x in x) -- "bombs" because referring to x before temporal dead zone ends.

```js
let o;
for (let x in (o={ f(){ return x }, x=42 }) {
  o[x](); // gives TDZ error
}
```

MM: In for(;;) {} loop, can say for(let x = expr;...) -- that expression iterates the zeroth item of x?

DH: Yes

## Conclusion/Resolution
- Leave as is currently spec'd


## 4.3 `arguments` and `caller` poisoning & static class methods of same name

BT: Should we keep doing the poisoning?

MM: We poison to make stack-walking code fail noisily, early

AWB: In the long run, is more confusion likely to reside in not being able to have static methods called "arguments" or "caller," or not being able to get away with stack walking?

YK: Having strict mode code dynamically allow static methods named "caller" and "arguments" when non-strict mode code forbids them seems strange for strict mode (which usually only forbids things).

BT: If we can't get rid of arguments and caller can we make the properties configurable?

MM: I no longer object to making .caller and .arguments configurable, so that you can make static methods with those names.

## Conclusion/Resolution:
- Make the .caller and .arguments configurable properties for all functions (except sloppy mode functions), so that they can be overwritten.


## 4.4 `return` on generator/iterator types

## Conclusion/Resolution

- Postpone until tomorrow morning at ~10:30, after István's talk at 10:15.


## 4.6 Reserving additional words (`yield`, `async`, and `await` in particular)

YK: Want to support async functions in top-level scripts.

AWB: Is a module with no imports essentially a top-level script?

AWB: We've gotten away with introducing new contextual keywords without reserving them.

MM: Seems useful for code that uses `async` in an arguably legal context [e.g., as a variable name] to be able to continue doing so.

YK: There's a cost to something being legal in a top-level script but not legal in a module.

MM: `yield` and `await` are already reserved (i.e. can't be variable names) in generators and async functions, respectively

DH: think about async modules as an argument in favor of reserving `await` at the top level of modules

BE: strict mode already reserves `yield` and `async`

MM: And modules are strict!

## Conclusion/Resolution

- Reserve only `await` as a keyword in modules.
- `async` and `module` work as contextual keywords because of their position (which can't conflict with variable names).
- `yield` is reserved in strict mode, so doesn't need additional reservation.


## 4.7 Removal of Realms API from ES6 (postponement to ES7)

MM: No serious draft implementations of Realms API, even by implementors who have implemented module loaders.

MM: And it's the most security-sensitive part of the module loading spec.

MM: Can we have modules and module loaders without Realms?

DH: Yes, when I proposed I mentioned that modules can come without Realms if necessary.

DH: Let me state my point: I don't want to slow down Realms being implemented, and I worry if we remove them from the spec implementors won't have anything to go on when implementing modules or experimenting with Realms

AWB: Can we defer to July after Dave and I have had enough time to work through modules.

DH: I do want us to get them right, but I don't want to see it continually kicked down the road

AR: Want to be able to use Realms to specify (and build polyfills for) e.g. same-origin `<iframe>`s.

MM: We want to explain the existing behavior of same-origin `<iframe>`s in terms of Realms, and we can't do that until we specify the Realm API

MM: Don't defer specification until ES7 now, but let implementors start implementing the Realms API, and if we end up deferring it, no one will be surprised.

DH: Talk to Domenic about spear-heading a polyfill?

YK: Not as much interest in Realms in the Node.js community.

DH: Polyfill hard to do for the parts of the API that are the most interesting.

AR: Hixie and/or Anne VK (or Boris Z) specify these kinds of things for the HTML spec, so maybe we should have a small meeting with them.

## Conclusion/Resolution

- Postpone decision to defer Realms to ES7 until next meeting.
- This does NOT amount to postponing to ES7!
- Bear in mind that it is separable from module loading, so we can still go either way (ES6 or ES7).


## 4.8 ArrayBuffer neutering

AWB: What did we decide this morning? (MM wasn't here then)

DH: Planning to have a discussion with implementors to decide what makes the most sense (throwing an exception on property access, or making .length be 0)

MM: Feel strongly there should be an isNeutered test operation, so you don't have to use a try-catch to test neuteredness (if we go with the exception throwing behavior)

WH: Why should the length return 0 instead of throwing on a neutered object?

DH: Lets you have a fast case in element lookup that checks for a 0 length.

WH: That doesn't answer the question. You can internally have a 0 length on neutered objects for fast lookup but throw if someone calls the length method.

DH: Let's think about using a different metaphor/terminology that isn't vaguely sexual (i.e. something other than "neutered")

MM: Not just the API (e.g. isNeutered) but also the spec language

DH: Probably not super-high demand for isNeutered because you usually know that you've used up an array and thrown it away. Code that needs to check for neuteredness (because the object might not have been neutered) is probably broken/confused/unlikely.

BE: Should isNeutered be a static method on Reflect or an instance method on ArrayBuffer?

DH: ArrayBuffer instance method

AWB: Is this feature-creep, though?

## Conclusion/Resolution

- Don't add isNeutered yet, and expect clients use try-catch when accessing properties to determine status.
- Also remember to change the name. "Released"? "Vacated"?


## 6 Test-262 Status

BT: Have the CLA as a PDF document, now need to tell everyone with pull requests to go to the website, download the PDF, sign it, and send it to us.

AWB: How can we streamline that process?

BT: Continuing to have that conversation with István and Norbert.

AWB: Where do contributors send the CLA?

BT: That could be clearer.

BT: Now have support for Promises in the test harness, but it's not clear how to keep promises

BN: Couldn't the test harness call promise.done(...)?

YK: That's doable, as is having the test harness check whether the promise is resolved or rejected.

EA: Traceur uses standard mocha/chai/tdd testing library.

BT: Willing to give up purity in the tests for the sake of coverage (overlap between test suites is fine, e.g. if both Traceur and Regenerator contribute their test suites).

AWB: Should we have a notion of a test suite rating, indicating whether they are "spec-level" or less formal than that.

BT: Don't want to discourage people from submitting less formal tests.

MM: Are we running tests that should succeed in both strict and sloppy modes in both modes?

BT: I'll open an issue on https://github.com/tc39/test262 for that.

EA: Tests don't closely follow the spec, and don't tend to be written as Test262 tests from the start, just because it's easier.

JM: Not clear how to run tests against new implementations.

YK: Transpiler projects (Traceur, esnext) should make an effort to make this easier.

BT: How did test suite review work for ES5?

AWB: I did a lot of it when I was at Microsoft.

MM: Want to do commit-then-review for tests.

BT: Yes, because then it's easier to weed out tests because (correct) implementations fail them.

MM: Who would sign up to write tests for a chapter of the spec?

AWB: Brian should create twitter.com/testecmascript to evangelize the testing message.

BT: Need to reflect the depth of coverage as well as breadth, and that's hard to capture in a list.

JM: People love progress bars, gamification?

BN: What language features can be used in tests?

BT: Philosophy is to use only ES5 outside the specific ES6 features under test.

## Conclusion/Resolution

- No spec decisions to be made here, just a status report.


## Object.observe status

Want a way to express narrower interest via the listening API (for performance) rather than filtering in the callback, e.g. listening for changes to just one property, rather than all changes to the object.

DH: Is the `Object.observe` protocol extensible enough to support Map and Set modifications?

YK: `Object.observe` is meant to work out of the box for data property mutations, but you can also emit a synthetic change record for object types like Map and Set

## Conclusion/Resolution

- YK to draft proposal for changes to the spec and present it to champions.


## IO Streams

https://gist.github.com/annevk/3db3fbda2b95e5ae9427

AR: Domenic's streams repository represents a consensus among a relatively large number of people, and a small minority outside of that favors the Rx style [Observables?].

DH: Re: asynchronous iteration, we've laid the groundwork for an iteration protocol that can be both synchronous and asynchronous. Expect async/await to be very popular, building on Promises.

DH: We have single-valued synchronous functions (normal functions), multi-valued synchronous functions (generators), single-valued async functions (async/await), but no multi-valued async functions. JH thinking about this in terms of Observables, from a C# perspective/precedent.

AWB: Re: error types and detection, IO APIs tend to have web platform dependencies, like DOMError/DOMException, which we can't invoke in the ES7(?) spec.

YK: Difficult to reliably subclass ES Errors in general, regardless of whether developers will pay attention to Error type distinctions.

MM: `class MyError extends Error {}` gives a distinct new error type, right?

AWB: Have to do it right [e.g. invoke super() in constructor to record stack trace?], but not impossible.

MM: Wasn't there a proposal to introduce typed catch clauses?

BE: catch guards were implemented in SpiderMonkey a long time ago.

YK: That would help with reporting errors to the user.

BE: Really?
BE: Termination-style exception handling won out over resumption-style a long time ago, and that was probably a failure.

BE, YK, MM: Discussion about whether rejected Promises support interpreting exceptions contextually in a way that allows helpful errors to be reported to the user.

MM: Example: IndexOutOfBounds exception can bubble up from calls to a lower-level table access abstraction, but be caught by the client of a higher-level table access abstraction, and the only thing the client can conclude is that her input parameter was out of bounds, when that isn't necessarily true or helpful.

BE: requestAutocomplete example: how to Promise-ify the response (as recommended by Domenic: http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2014-April/254143.html )? Do you need distinct Error types in order to respond differently to different kinds of rejection?

MM: That distinction wouldn't tell you which stage of a .then chain produced the error, necessarily, unless you were careful about encoding that information in the value of the Error.

BE: DOMException vs. other exception types doesn't seem like a helpful distinction.

AWB: Should we try to replace WebIDL? (fourth bullet point from the gist above)

DH: Browser implementors love WebIDL, so anything that replaces it has to be as convenient as that. YK's idea: the new interface description language would prepend Legacy to existing WebIDL types, but still support them.

MM: What about a design language that compiles to WebIDL?

DH: Problem: people explicitly argue against better interface design because it's not convenient/expressible in WebIDL.

MM: Right, the path of least resistance in WebIDL is not good JavaScript.

DH, AR: TypeScript seemed like a way to define signatures of APIs, but was solving a different problem.

DH: Need a way to express what kind of implicit conversions are applied to passed-in values (something that TypeScript doesn't have).

YK: Also want to be able to express APIs in terms of function/method overloading (different behaviors for different input types), which is more like TypeScript than WebIDL.

AWB: If no work happens to build a better IDL, we'll be stuck with the status quo.

YK: Want to be able to describe `Promise<T>` result types as such, rather than `{ then: ???, catch: ??? }`

SK: Willing to start working on a new IDL design, with help.

DH: Want to capture duality between Array.isArray arrays and array-like objects, and instanceof-Promise objects vs. { then: Function } objects.

SK: Can we improve whatever was lacking about TypeScript?

AR, YK: TypeScript types don't mean quite what you think they mean (Number, String).

AR: Union types not supportable in TS today, so you can't express some important overloadings.

## Conclusion/Resolution

- As JN points out, we really have to get in contact with the W3C folks and make sure they're sympathetic, and we also really have to commit meaningfully to working on a new IDL, neither of which seems like something this committee can decide unilaterally.
- Worth exploring, but no commitment at this date.


## Web APIs that could move to ES(7+)

Proposals from AnneVK: https://gist.github.com/annevk/6bfa782752dde6acb379

MM: URL and fetch() together sort of imply that HTTP (vs html/dom/etc) is moving from browser into the lang -- and that's...

MM: Because http is being used in non-browsers, that's interesting

DH: Node isn't waiting on APIs for TC39 (it does a lot of its own things)

DH: Receptive to idea to shift some of these into "the lang", but unclear who to work with on some of these

BE: When you say "the lang", you mean separate spec

*agreement*

BE: If self-hosted, how much does it need to be anything more than code on GitHub

YK: Engines can do opts that can't be done in userland

## Conclusion/Resolution

- General openness to moving these APIs into ES7+, but no firm commitment yet on any single item.



Expanded Conclusion/Resolution for the ArrayBuffer neutering discussion:

## Conclusion/Resolution

- Don't add isNeutered yet, and expect clients use try-catch when accessing properties to determine status.
- Also remember to change the name. "Released"? "Vacated"?
- Any attempt to access (read or write) binary data elements of an ArrayBuffer that has been "neutered" will throw a TypeError exception.
- Accessing the byteLength property of an ArrayBuffer that has been "neutered" will throw TypeError exception.
- Have not yet decided what happens to the the "length", "byteOffset", and "byteLength"  properties of a TypedArray whose underlying ArrayBuffer gets neutered.
- Keep the behavior that out of bounds reads of a TypedArray (whose buffer has not been neutered) returns undefined (MM: or throws, in strict mode) and that out of bounds write are no-ops (MM: throws in strict mode).

TC39 recognizes that the above are breaking changes relative to the  Khronos spec. but we believe that the behavior of silently treating neutered buffers as 0-length buffers is seriously flawed and would set a terrible precedent for any future "transferable" data types.
