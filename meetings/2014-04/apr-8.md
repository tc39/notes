# April 8, 2014 Meeting Notes
-----

Doug Crockford (DC), Brian Terlson (BT), Luke Hoban (LH), Dmitry Lomov (DL), Waldemar Horwat (WH), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Hudson (RH), Rick Waldron (RW), Eric Ferraiuolo (EF), Jafar Husain (JH), Jeff Morrison (JM), Sung-Jae Lee (SJL), Seo-Young Hwang (SYH), Mark Honenberg (MH), Caridy Patiño (CP), Yehuda Katz (YK), Niko Matsakis (NM), Ben Newman (BN), Filip Pizlo (FP), Satish Chondra (SC), Domenic Denicola (DD), Mark S. Miller (MM)

-----

## Welcome

JN: (open remarks)

AWB: logistics


## Introductions

See attendee list


## Agenda

https://github.com/tc39/agendas/blob/master/2014/04.md

JN: Agenda approved with changes.


## Minutes

JN: Approval of minutes from Jan 2014, Ecma document 007


## 4.1 Review Latest Spec Draft
(Allen Wirfs-Brock)

Slides: [April-meeting-status-ES6-spec.pdf](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/April-meeting-status-ES6-spec.pdf)

AWB: Updates to formatting, etc.
Summary of changes: http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#august_23_2013_draft_rev_17

YK: Concerns about let bindings in function parameters
...Let's make sure that anything in ES5 that does not have a let binding doesn't produce such, to avoid interop hazards.

BT: In IE11, you can't create a let binding whose identifier is the same as a function parameter

AWB/YK: Then this is a spec bug. (AWB: not clear what this is referring to, the behavior described above for IE11 sounds correct)

BT: Even `var x; let x;` is an error

AWB: There are lexical bindings that the closure captures and then there are static semantic rules that say you cannot have a `let` in the body that are same name as a `parameter`
... We need


LH: `let` is not designed to directly replace `var`, it's a benefit that these static rules exist.

RW: Agree (`let` is not the new `var`)

AWB: Cannot `import x` and then `let x`, this would be a redeclaration.
...There is an item to discuss `catch(e)`

WH: What are the ContainsExpressions rules in the function declaration instantiation spec for? As far as I can tell, they're an optimization to take out an invisible environment. They appear to have no visible effect.
AWB: Yes, that's invisible. Went back and forth about whether to express such optimizations in the spec.

AWB: (moving on)
- Lookahead grammar restriction created, to disambiguate `new super()`  (AWB: but they aren't right yet. Stills needs some more work)
- Lookahead `let` restrictions added: IterationStatement (see notes)
- Temporary change return default for missing class constructor: Reverted.

AWB: First call to a generator (half of 4.ii on the agenda)

- Eliminate throw if argument is passed
- Argument is ignored and inaccessibe
- Differing recolltions on January discussion
- Most compelling reason: creates unnecessary difference between generator and manual implementaion of equivalent iterators.


#### 4.2 Conclusion/Resolution
- removal of the thrown exception when a value is passed to next() for a newborn generator
- further discussion to be had by Ben Newman and Dave Herman re: what to do with that value.


AWB: (continuing)

```js
Array.from({0: 0, 4:4, length: 5});
```

... didn't produce a sparse array. Changed in Rev23.

Current spec says: in no way can `Array.from` produce a sparse array.

RW: This is good and makes the behaviour consistent with the iterator path in `Array.from`

YK: Generally, sparse arrays are dead.

(no opposition)

AWB: (continuing) Corrected RegExpExec so it correcly translates the match state of full unicode RegExps back to UTF-16 cature values and endIndex

WH: If you have a composed character, is it still considered two characters?

AWB: Yes, it operates at the level of code points or  code units. Not a higher livel such as composed characters

YK: (requesting more information about the the ES5 compatibility change item added to Annex D)

RW: (note: it appears to be missing, Allen, please fill in/follow up?)

AWB: Call for Spec reviewers

BT: Need to create a "sign up" for task assignment for reviewing sections

AWB: Would like to see two TC39 members reviewing each of the sections

... September is the _end_, otherwise we risk delaying for another 6 months. The final reviewing needs to be done between now and July.

MM: Last meeting I said I was going to organize a security review. There are no draft implementations of the Realm API which will make the exploratory process of analyzing the system useless. There has to be some time to poke at a draft implementation before committing.

YK: We should wait to delve into this issue (modules) with Dave present

AWB: Agreed

MM: Putting the Realm aside, I have no concerns for the modules specification

JM: What exactly is missing, what can we work on to help make progress.

LH: What about the JS Loader projects that exist?

YK: There is no way to do the Realm API with those, however the Loader implementations

JM: Can `contextify` be used to implement Realm?

MM: There may be way to use this to discover holes. Let's take a look at it. There may be a way to expose issues in the same way.

AWB: There are changes to the Realm API, since the last meeting.

LH: Are there further expected changes?

AWB: One of the issues is the eval support is now at the Realm level. One of the change we got down from 4 methods to three methods re: eval.

YK: We should avoid discussing this without Dave present?

LH: There are API changes expected in Realms? Are there API changes in Loader?

AWB: Hopefully

LH: That's what expected

YK: Special casing class and function to create bindings at the parent level for `export default function foo` and `export default class foo`. We should special case those expression forms to behave like declaration forms

LH/BT: Yes.

AWB: If you want to treat it like an expression, put it in parens.

WH: What is `export default`?

YK: We've discussed this

AWB: (recapping the utility and specification of default exports)

WH: Can only have one default?

AWB/YK: Yes.

AWB: It's for modules that you want to export without a specific name.

YK: Compatibility with a desirable style of programming.

LH: We need to lock down API changes as soon as possible.

YK: It's possible to punt on Realm API (to ES7). Dave specifically designed this to separable.

MM: Where would you draw the line? If Realms were on the opposite side of the line, where would you draw the line?

AWB: I could draw a line: No API.

YK: Draw a line? No public Realm API, but the semeantics are still there.

LH: Our success critically relies on Loader API, this is where requirements are resolved.

...Discussion about Loader API

LH: All of the multiple phase complexity is needed


Discussion about Guy Bedford's work, es6-module-transpiler, traceur, etc.

YK: I'll open discussion with Guy to pinpoint hardships in implementation

LH: This will be helpful

EF: (to Brian) you're presenting implementation report?

BT: No, just feedback from TypeScript



### Open Issues

AWB: for of/in, initialization expression scoping?

```
{
  let x = [0, 1];
  for (let x of x) console.log(x);
}
```

WH: Wouldn't it be the same as saying `let x = x`?

AWB: should be

- Current spec: of/in expression evaluated in enclosing scope:. Log: 0 1
- Possible alternative: extra scope with uninitialized x. Throws TDZ error

LH: This example has two scopes, the alternative has three?
...for creates a scope
...Why do you want to change?

AWB: There have been arguments that say `x` isn't yet initialized in the `for` scope

WH: Is the question: creating the scope before or after?

AWB: We have to create an extra scope where `x` is dead.

(ah-ha moment.)

AWB: Need input from implementors

MM: If no one has a strong reason, I suggest going through the second approach.

YK: err on the side of being more useful to the programmer

MM/AWB: Yes

WH: There might not be a dead zone violation

MM: it would be a dead zone violation in the second bullet
... There is only no dead zone violation if you don't touch it.

AWB: We need a consistent approach
... Already have this extra scope


AWB: Need to go back, we may initialize that outer binding and maybe we shouldn't


#### Conclusion/Resolution

- Be consistent
- Look at the initialization scope and be sure to intentionally _never_ initialize the for bindings in that scope
- Solution to open issue: extra scope with uninitialized x. Throws TDZ error



### var hoisting and catch parameters


AWB:

```js
catch (x) {
  var x = 42;
}
```


Discussion about the existance of this code in real world.

BT: This exists in code found in the top 1k sites

AWB: i can remove the static semantics rule that's specifiically for catch, that says this is an error. In that case, it will be just like ES5, there will be a var and the var will be hoisted. Need to look at various place where simplifications of runtime semantics that assume this has been applied.

YK: Question about the actual binding.

WH: The same that happens inside a `with` that has captures a property with the same name as a var—the var hoists out.

YK: What is the negative effect of creating a binding that's undefined?
...Change incompatibility should have a higher bar than "it complicates the spec"

MM: Breaking changes aren't worth

WH: Keep the catch as a `let` binding, but make it not an error in Annex B, just for catch (not for let's in general)


LH/AWB: I like this

FP: It seems better to keep the existing behaviour?

MM: Is Annex B, normative? Normative optional?

YK: Confirms that Annex B is _required_ for browsers but normative/optional for non browsers

MM: Ok, no issue then.

Agreement that browser implementation will lead and others will follow for compatibility.


YK: Also need to make sure that this is not an error:

```js
catch(x) {
  function x() {
  }
}
```

AWB: This is an error

WH: Any reason for us to believe this exists in the wild?

BT: Looked for this pattern, with no findings, but absence in top 1k doesn't mean non-existence.

WH: Disallow this and see if there is any pushback.


#### Conclusion/Resolution

- Keep the catch as a `let` binding, but make it not an error in Annex B, just for `catch` (no other)
- If redeclaration with `let` or `const` is still a redeclaration error (this is no change)
- Continue to disallow function declaration in catch


MM: This could only exist in non-strict code.

YK: The same behaviour as:

```js
{
let x;
let x;
function x() {}
}
```


Confirm.


## Presentation by Samsung Representatives

Slides: [ecma-tc39-talk-v1.0.pdf](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/ecma-tc39-talk-v1.0.pdf)

Presentation focus on intent of committee participation

- JS on wearable devices
- JS on microcontrollers (small memory devices)

Interested in building a small footprint JS engine
- Wearables and IoT
- A subset?
- Possibly as an open source project


We are here to ask your opinion about approach

- multi level subset of profile of ECMAScript
- is it reasonable to define a subset
- can this be covered  can this committee


WH: 48K of RAM? That's the same as an Apple II.

WH: Just supporting Unicode takes a lot more memory than that.

MM: What about running existing code?

RW: (share experience of using JS subset in microcontroller environments)

SC: (more about goals of the platform, re: HTML/CSS)

LH: HTML and CSS are massive

RW: Platform dependencies themselves assume specification compliance

WH: One of the reasons for selecting a subset of JavaScript is that you can write applications for the device that also run in the browser.

WH: While libraries are big, a subset of the "good parts" of ECMAScript would also be useful for reducing memory usage.

?: How so?

WH: Some of the features of ECMAScript (such as peculiarities of eval) pretty much require efficient implementations to do speculative optimization and then have a mapping and a way to back out if the assumptions fail. That mapping and the extra copy of the code for deoptimization costs memory.

YK: So don't optimize. Use an interpreter.

WH: Lack of optimization would waste battery power on small devices.

RH: points about starting and reducing

LH: It's important to consider what are you willing to trade?

Mixed discussion about ES versions that might be considered subsets themselves.

AWB: There is clearly concern here, but it would be valuable to have you included and there are people here that are interested in small device platforms.




## [[SetPrototypeOf]] circularity invariant
(Allen Wirfs-Brock)

- If Proxy involved, impossible to enforce on prototype chain
- Eliminate the invariant?
- Is there some weaker invalriant we might replace with?

LH: How?

AWB: getPrototypeOf can lie while the invariant is being checked

MM: Are there any recommendations beyond dropping the invariant?

FP: (Question about requirements)

MM: Any defensible options other than dropping the invariant?

AWB: No

WH: Yes. To prevent proxy cycles, something in the proxy (perhaps the target's prototype, perhaps something else) would record what the proxy thinks the prototype is. GetPrototypeOf does not run user code and only returns the current stored value. SetPrototypeOf runs user code and can change the stored value. The circularity check occurs at the time of the store.

AWB: Possible for ordinary objects, if the prototype chain only consists of ordinary objects, there must not be circularities.

Discussion about Proxy trap handlers for `getPrototypeOf` and `setPrototypeOf`

MM: Storing state related to the target

BN: In the same way there is RangeError for call recursion, is there a way to RangeError on length of prototype walk

MM: Waldemar's rule will give you the error earlier.

WH: It's better to pay the runtime cost in the less frequent cases that change prototypes rather than having to pay it every time a prototype chain is read.

NM: The more user code we can get out of the prototype look up, the better.

AWB: Ask Tom about intervening when user sets prototype

YK/MM: Agree.

#### Conclusion/Resolution

- Prevent proxy cycles. If the target is a proxy, the proxy target prototype records what it thinks the proxy prototype is, and returns the targets protototype and setPrototype is never called
- Whenever you change a prototype, you run a circulartity check immediately.

(the following is about whether [[SetPrototypeOf]] should be allowed modify the prototype of Object.prototype)

BT: Does the proxy's handler have get trap

WH: If it does, there is an infinite loop

MM: Even without Object.prototype, you can create this same loop
- When you mess around with prototypes, you can render the entire environment inoperable.

BT: Setting Object.prototype to a Proxy?

WH: I agree with you but not worried about it.

YK: Proxy is the only way to implement exotic behaviour in user code.

MM: Too late to draw the line about what prototypes can be assigned a Proxy.

(This addressed agenda item 4.9)


## Promise then issue

```js
p.then(42, "43")
  .then(false, new Map);
```

- Error or default argument values if actual argument is not callable?
- if error throw or asynch error?

AWB: Area of disagreement that Andreas brought up:
- The arguments to then are supposed to be functions,
- If the first argument isn't provided and not explicitly `undefined` or `null`,
What do you do with non-callable arguments?

Possible solutions:
- The same thing if you provide no argument?
- Throw?

Currently throws.

LH: The current behaviour is throw

MM: Domenic wants it to not indicate an error?

AWB: Correct.
Here's an example:

```js
p.then(expr && callable);
```

If `expr` evaluates to false, this non-callable false value is passed.

AWB: The claim is that all libraries accept the non-callable and just use the default.

JH, WH: Do we unwrap eagerly or lazily?

AWB: We'll get to that issue.

LH: WinJS throws

JH: (jafar, this point was about sync and async errors, can you fill in?)

YK: (points about errors that are logged to the console)

Discussion about IDL

YK: There are two development modes, one that wants all errors logged and one that does not.

WH: Don't want some errors sync and some errors async

(Note: the point of this discussion is whether `p.then(non-callable)` should throw synchronously)

AWB reviews spec and finds other points in which then throws synchronously

LH: Where do you draw the line that differentiates what is a runtime error and a construction time error

JH: Why make a distinction?

LH: Right, it's very difficult and causes you to be very specific. Or just "give up"

AWB: Don't type check unless you need to

LH: The spec always does type checking up front, for example `[].map(null)`, this throws.

RW: (presents own position which agrees with LH)
(Present Domenic's position verbatim)

DD (via RW):
> Changing these to throws from existing promise code is a refactoring hazard. Similar to making methods non-enumerable. i'm ok with it rejecting, but not with it throwing, then you have to do .catch() AND catch { }, it's still a refactoring hazard, but at least one that doesn't screw you over by creating sync errors in code that previously only expected async ones.



AWB:

LH: Ok, so Domenic made two points:
- The Refactoring Hazard
- Making it an error means you have to decide whether it's sync or async

LH: 3 options
- Sync error
- Async error
- No Error

YK/RW: Domenic is ok with async error (ie. reject)

JM: If didn't want async error, is there a way to emulate?

No

LH:

JM: Promises exist in two stages: setup stage, execution stage. setup stage is the code that is written, the execution stage is async behaviour. setup stage errors should be sync

RW: agree

LH: it should never be required to put a try/catch around `p.then`. (restates JM)

YK: conflation of two modes

MM: Why is `.then(non-callable)` different then a malformed subclassing? (the latter is sync)

LH: let's narrow it down and take "no error" off the table.

Agreement.

2 options:
- Sync error
- Async error



LH: IDL currently does all type checks on parameters sync.

YK/LH: If you were to use `await`, always get all of your type checking inside the async flow.

YK: The way to look at this is to treat it like it's an async function.


(Domenic Denicola call in)

LH: (recap current discussion)

DD: First, strange that we are accepting null, but not false or 0. Why is null and undefined on one side, but other values on the other. Second, the refactor hazard.

MM: What does Q do?

DD: If Promise A+ does this and with the amount of code that already relies on this.

LH: Agree that accepting null and undefined is already

DD: Precendent: IgnoreNonCallable in JSON.parse and JSON.stringify, .valueOf; Array.prototype.sort throws for non-callable

MM: For sort?

DD: sort throws if you pass non-callable
(AWB: actually ES5 says that sort is implementation defined if argument is a non-callables other than undefined.)

YK: Enough evidence to leave it as is

LH: I'm convinced.

Discussion about IDL optional function vs. mandatory function

MM: Recalling that originally, no part of Promise.then executed synchronously.
Case in concern:

```js
Promise.resolve(instanceOfSubclass);
```

DD: returns a `Promise`

MM: How does `Promise.resolve()` handle `instanceOfSubclass`

DD: Treats it as an untrusted thenable

MM: Excellent

Review of `Promise.resolve`, focused on `Promise.resolve(untrustedObject).then(onFulfilled, onRejected)`

MM: Before subclassing, we had the safety property, given frozen Promise and Promise.prototype, that
Promise.resolve(untrustedObject).then(...untrustedArguments)
did not run user code synchronously during these two calls. Satisfied that we have
preserved this safety property.

YK: Enough evidence that we shouldn't error here and then all other errors are async.

AWB: Anything that's non-callable uses the default (not just null and undefined)

Discussion about precedent.

WH: Reluctant to go with no error. It's a bad idea to silently ignore things such as attempts to write read-only variables or call things that are not functions.

WH: No particular precedent here. Some places throw when you call a non-function, some don't. If the sort comparator is not undefined and not a function, the standard throws.

AWB: The presented arguments are 2/3 in JSON functions

LH: Do we want to set a precedent?
...The Loader API throws on non-callable.

MM: Crock, was there a reason you chose not to throw on non-callable?

DC: No particular criteria.

MM: Experience with the API?

DC: I'd be reluctant to do the same again.

The discussion is now:

- Async Error
- No Error


RW: Firefox Nightly doesn't throw on this

DD: Chrome doesn't throw

MM: Given the state, I don't think we should change.

LH: If making a change mattered, then we should make the change. If there are no benefits, then "do no damage" first.

LH: (discussion about the amount of time we spend on these things)
... p.then(42)? Doesn't matter. It's a minor corner case (we should go with what programmers expect)

The decision for how to handle this non-callable case could inform all cases that expect functions

MM/WH: Don't really like the silently tolerant behaviour in general. Want the general precedent to be to throw errors when calling something that can't be called, but willing to make an exception in this case due to the established library usage.

#### Conclusion/Resolution

- w/r to .then, respect libraries: no error.
- do not adopt this as a principle for non-callables passed where callables are expected, the general principal: if something is neither a callable or undefined, indicate an error.


DD: Optional callable vs. required callable. There is spec text that matches neither of the consequents.

?: Example is [].map(nonCallable). If you pre-check, this errors. If you "just call it", this does not error (since it never gets called.)

MM: Per the principle defined, you'd simply check if the argument is defined, if it is, call it.


## @@iterator for arguments object

AWB:
- Own Property?
- Or should introduce a prototype object to contain it?


RW: There is a record of an agreement for this from several years ago

BT: Not sure why we want to do this for arguments?

JH: Don't want to encourage programmers to use arguments object in ES6

RW: Agrees, but not sure that's the right way to go.

RW: We already have consensus on iterator protocol for arguments object.

MM: Any notes on own vs prototype?

RW: No.

YK: Foresee a problem

RW: agree that we should do it, purely for consistency, but practioners need to discourage the use of `arguments` in ES6 code.

AWB: 2 Cases:
- want each by name
- want to parse the arguments list

Discussion about default params pattern and `...arguments` delegation.

Back to consensus on inclusion

MM: Strong against introducing Arguments.prototype

RW: Same.

JH: Ideally the @@iterator is on a prototype to avoid the allocation costs.

YK: Implementations can optimize.



#### Conclusion/Resolution

- @@iterator on arguments object
- specified as an own property (no creation of exposed Arguments.prototype)
- Updated: https://bugs.ecmascript.org/show_bug.cgi?id=1114


## Default parameters
(Brian)

BT:
```js
function f(a = 1) {
  console.log(a, arguments[0]); // 1, undefined ?
}

f(undefined);
```

BN: That's consistent with the difference between arguments and parameters.

BT: If a default or rest param, you get non-mapped arguments.

MM: What is arguments.length?

BT: Always based on what is _passed_

RW: There is a rule that was created, which is relevant to this discussion: https://github.com/rwaldron/tc39-notes/blob/6d88efa7c4eba2d7a8b6fd5801f2415c2f29c94c/es6/2013-07/july-25.md#consensusresolution



MM: Avoidance of micromodes if possible. (Mark, can you fill this in? It was re: craziness)

#### Conclusion/Resolution

- An argument list that only has identifiers in sloppy mode has mapped arguments object. ALL other arguments objects (ie. any that contain default, destructuring, or rest, or those in strict mode)  don't map.

## Initializer in for-in

AWB:

```js
for (var x = "nothing" in foo) { ... }
```

Previously convinced that this was safe to remove. Apple implementors reported breakage caused by removing this.

MH: (confirms) Have encountered sites that have this code.

YK: I understand the desire to clean up, but if clean up causes breakage then why bother?

AWB: Need to address the let case (AWB: this was more about consistacy with the let case. let case does not have the initializer but as new syntax that doesn't introduce any compatability issues.)

YK: Nothing happens in the let case,

MM: Except for the side effects of the expression

AWB: So basically it was a matter of seeing if we can

YK: As a rule, we should err on the side of caution when faced with these minor changes that create incompatibilities once we find real-world problems.

#### Conclusion/Resolution

- Punt on a decision until May


## Function "as" Block

BT:

```js
if (true) function f() {

}
```

MM/BT: Already illegal in strict mode

BT: In all browsers, you can call `f()` after this, but doesn't hoist.

WH: That's a contradiction, you said it doesn't hoist but can be called.

(This is the problem?)

BT: On the list, Brendan was opposed to adding this to Annex B

WH: Is this hypothetical or real breakage? Where does this actually occur in the wild?

BT: ...haven't seen this anywhere in the existing code

WH: Inclined to keep the new semantics simple and ignore this.

MM: Not seeing in the wild? Back off

YK: If we can get implementors to agree to make this an error, then we'll specify it as such

AWB: note: file bug to have this tested in Firefox

#### Conclusion/Resolution

- Allen will file bug to have this tested in Firefox


## Name property of bound functions and toMethod functions

AWB:
- Currently neither have an own name property
- Should either or both get one?
- If so, what should it be?
  - "bound foo"?  (for the bound case)


YK: Why this naming?

RW: In the current ES6 specification, for the name property of function, accessors are prefixed by "get " and "set " (trailing space intended).

AWB: Don't think about these name conventions as any kind of type information, just as an a means to distinguish

MM: what about toMethod?

AWB: Suggest no qualifier

Reviewing toMethod

MM: What about function properties named "get foo"?
MM: I guess this is ok. These names are not high-integrity -- mostly intended for debugging info.

#### Conclusion/Resolution

- toMethod: no prefix qualifier
- Bound functions: "bound foo"
- Adopt uniformly:
    - "get "
    - "set "
    - "bound "
- Fix empty string property bug


AWB: Concerned about backwards injection attacks.

MM: Too late to
(AWB: I don't recall what this was about)


## new %TypedArray%(iterable)

- Currently constructor doesn't recognize iterables, but requires an array like. This is the behavior inherited from the Khronos spec.
- Need to use:
- %TypedArray%.from(iterable)
- Should constructor work like %TypedArray%.from?

#### Conclusion/Resolution

- Make all %TypedArray% constructors accept iterable


## new %TypedArray%("2")

DL: %TypedArray% actually coerces this to a number first to create a typed array with length 2. The previous consensus would have to occur _after_ the coercion step to preserve the expected behaviour.


#### Conclusion/Resolution

- Do string coercion to number before handling iterable to avoid mishandling a string argument.


## Map Constructor and Duplicate Keys

```js
let map = new Map([["x", 1], ["x", 2]]);
```

RW: Revisiting:
- https://github.com/rwaldron/tc39-notes/blob/master/es6/2013-07/july-23.md#consensusresolution-1
- https://github.com/rwaldron/tc39-notes/blob/master/es6/2013-07/july-24.md#consensusresolution-2

#### Conclusion/Resolution

- No error, last property wins, eg. map.get("x") === 2
