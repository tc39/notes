# January 28, 2014 Meeting Notes
-----


John Neumann (JN), Allen Wirfs-Brock (AWB), Yehuda Katz (YK), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Rick Hudson (RH), Matt Sweeney (MS), Dmitry Soshnikov (DS), Sebastian Markbåge (SM), Ben Newman (BN), Jeff Morrison (JM), Reid Burke (RB), Waldemar Horwat (WH), Doug Crockford (DC), Mark S. Miller (MM), Brian Terlson (BT), Luke Hoban (LH), Andreas Rossberg (ARB), István Sebestyén (IS), Niko Matsakis (NM), Brendan Eich (BE), Rick Waldron (RW), Sam Tobin-Hochstadt (STH), Simon Kaegi (SK), Dave Herman (DH)

-----

## Welcome

IS: Talk about the royalty free task group

JN: Approved, 9 in favor. 0 opposed. 0 abstains.
We are now operating as a Royalty Free Task Group

JN: Netflix and Apple haven't returned the paper work.

IS: Neither from Brown University. (and a bunch of other universities that are not active any more)



## Agenda


JN: Agenda approved https://github.com/tc39/agendas/blob/master/2014/01.md

JN: Minutes from Nov meetings also approved. (https://github.com/rwaldron/tc39-notes/tree/master/es6/2013-11)

## Spec Status update

AWB: Latest draft (Rev22) is the "almost feature complete" version. (Discussion about process troubles). Spec now uses a master document and is split into multiple files.

AWB: Still some work to do on Direct Proxies.
Update spec for C-style for-let.
Loaders and Realms are integrated into the spec draft. Lots of review needed.

EA: Standard modules were deferred at last F2F

LH:  We agreed on globally reachable names for all pre-modules APIs last September. New names for module loaders APIs need similar design.

AWB: Loader and Realm are speced as %Loader% and %Realm% since we haven't talked about their public names.

DH: Where does Reflect go?

AWB: Use a global.

DH: Realm can go in Reflect since it is a very reflective thing.

DH: We can probably defer System too.

YK: We need an entry point and a global named System seems to be good.

DH: Loader can go in Reflect too.

AWB: Need to update the spec draft to match the scoping rules we agreed to before.


#### Resolution



## Aside on detecting Module vs. Script (see http://esdiscuss.org/topic/detecting-js-language-mode-for-tools)

Debate about whether it's required (partial agreement that it is since they are clearly distinct)

WH: Even though they're distinct, doesn't mean that they must be ambiguous with each other at the source text level. We could easily say that a module has to start with some syntax that designates it as a module.

AWB: Spec doesn't necessarily need to address this (why?) but we should consider setting the direction here. If we're fine with the community coming up with something here we can lean on that too.

LH: This process has to happen, there will be lots of solutions, we might not pick the best one.

Potential solutions:
  * YK: Bower uses metadata for packages that say they're ES6 module
  * DH: Possibly do nothing, we live in this world already today
  * DH: Come up with some kind of syntactical distinction
    * DH: This sucks, modules should not require additional boilerplate to be valueable
  * Possibly use file extensions...


#### Conclusion/resolution:

  - DH to do the work?


## Task and Tasks Queues

Postponed until tomorrow when Raf is here.


## Process for ratifying ES6?

LH:  We have now effectively met the "feature complete draft" requirement we were targetting. Are there any process requirements this group is placing on progressing the spec to ratifica

BE: Have nothing, same as ES5.
(Discussion about whether we can be strict)

LH: For example, do we have "multiple compatibile implementations" requirements?  Or "Test262 coverage" requirements?  Our ES7 process proposal has these, but do we want/need some limitied version of this for ES6?

AWB: We just need to ship it and get to the stricter process for ES7.

MM: We can always postpone features to ES7 if they seem to be problematic.

BE: For example, there is unlikely to be an implementation of proper tail calls before we send ES6 to the GA, then to ISO. I don't think we should defer them on that basis, but it's a fact. We should not slip ES6's schedule.

LH: If by the time we ratify ES7 and there are still ES6 features that have not yet been implemented by anyone, we should re-evaluate if we can remove them.

#### Resolution
The commitee is putting no blocking requirements of implementations or tests on standardization of ES6.


## Concise methods and Enumerability

YK: People have object literals today and use these objects with for-in loops to find the properties and if they change to non enumerable consise methods things will break.

AWB: Concise methods were initially non-enumerable. This was to match the built-in classes, like Date, Array etc. One possibility is to make methods in classes non enumerable but concise methods in object literals enumerable.

RW: The same issue happens when people use object literals as the prototype.

AWB: Should Map and Set methods be enumerable then?

RW: The spec should be consistent with itself.

WH: User-defined classes should be consistent with built-in classes. Classes are new in ES6. The question is whether it's the class that turns off enumerability or the concise method that turns off enumerability.

WH: My preference is for the consise method syntax to turn off enumerability. In the rare cases that you want an enumerable method in a prototype, you can define it the longer way.

YK: Refactoring should be simple and not have side effects like these.

RW: hasOwnProperty solves the problem of filtering out class methods inherited from the prototype, so we don't need to make them non-enumerable.

BE: people don't use hasOwnProperty

YK: enumerability is broken, we should not discuss the Platonic ideal form of enumerability

BE: According to Neo-Platonic Mystics, the material world was created by the evil Demiurge, not by Sophia (wisdom). Enumerability and 'for-in' are from the Demiurge.

BE: Enumerating options:
    * Concise methods and class methods are enumerable
        * Current es6 draft state
    * Split the difference, concise methods enumerable, class methods non-enumerable.
        * can't refactor between es5 object literal and es6 class/concise methods depending on which is non-enumerable
    * Make both non-enumerable (Waldemar supports)
        * same refactoring hazard, possibly not desirable
    * Some tilde-based or better syntax to allow developers to pick, but go with option 1

YK: Hope that we can use annotations in ES.Future that can control this kind of details.

BE: Agree, so fourth option above.

YK/LH: High bar to make a change, does this meet the bar?

#### Conclusion/Resolution

- Status quo. Keep concise methods enumerable.


## More on toMethod

AWB: Function.prototype.toMethod(superBinding, methodName = undefined)
Footgun to put this on Function.prototype.

MM: potential suprise: in the absence of toMethod, super's interpretation can't change, but now people have to account for possibility of shifting interpretation, which requires them to know about toMethod (not sure if I'm getting this right- BN)

AWB: The footgun is that we do not propagate any properties.

AWB: Suggest moving toMethod to Reflect

DH: Needs to be renamed then.

?: Suggests renaming to bindSuper.

WH: We've discussed all of this before and reached consensus. bindSuper is a bad name because it intentionally doesn't commute with bind.

WH: [reviews consensus from past meeting]

AWB: expect people to define Object.defineMethod in terms of toMethod, with copying of properties

DS: do we also need toStaticMethod?

AWB: no, you can just use toMethod with the constructor function as the superBinding / home object

BN: are static/class methods inherited?

AWB: yes

AWB: should we copy .name and/or .length to the new function object?

MM: use bind as a precedent to decide what to copy (mixed messages though: bind does copy .length, minus the number of curried arguments, and (in SpiderMonkey at least) copies the .name, though V8 gives the bound function an empty string .name)

AWB: What should happen if toMethod is called on a non ECMAScipt function object (built-in)

MM: How about just returning a clone of the function. You could even even delegate in a similar way as bind.

AWB: Only allow toMethod on unbound methods?

MM: to preserve possibility of transparent monkey-patching, either make toMethod return something that can't be toMethod-ed again, or allow built-in (non-ECMAScript Function Object) functions to be cloned, which requires an additional path in the internal CloneMethod operation (because it currently asserts that the clonee is an ESFO)


#### Conclusion/Resolution

- Allen to take it back to the lab. To get it to work with bound functions and built-ins.
  - Make it match old concensus `func.bind().toMethod(...)` should throw
  - Does not work on proxies


## Clz (count leading zeros)

WH: Don't like deliberately introducing anachronisms a la 1900-origin getYear into the language. Would prefer to have it be origin-0 instead of origin-32 (i.e. return 0 instead of 32 when called on 0) to avoid hardwiring a machine word size. However, understand that we want this to compile to an efficient low-level primitive, so it would still have the toUInt32 as part of its semantics. In that case we should call it clz32 instead of clz so that later we can do clz64 (that would call a future toUInt64) or other variants.

BE: Want it to map to one single machine instruction

BE: Mislocated, should be on Math

BE: (missed the third point)

BE:  CLZ - for cases when you're doing DSP-level hacking, and want to count  the number of populated bits. Also important for native-to-js compilers,  there is an intrinsic for this in GCC and Clang.
BE: Math.clz32 wins.

#### Conclusion/Resolution

- Rename to Math.clz32 (rename and move from Number.prototype)



## Array.from

AWB: What should happen with `Array.from(undefined)`?

EA: `Array.from` is a likely replacement for `Array.prototype.slice.call` and the array generics do `ToObject`.

AWB: Array with holes would lead to to a dense array.

YK: Want to keep the holes.

BE: "Holes are from the devil"

#### Conclusion/Resolution

Keep as spec'ed.
 - `Array.from` will throw on `undefined` and `null`
 - `Array.from` will return `[]` for `3`
 - `Array.from([0, , 2])` => `[0, undefined, 2]`


## Test262

BT: Up on GitHub. https://github.com/tc39/test262. Conversion from Mercurial done by Brandon Benvie.

BT: AttendedTest the web forward. Got a lot of PR (22).

BT: Pending contributor guidelines.

BT: Going to work on style guidelines since the PRs are inconsistent.

IS: Getting CLA working is highest prioroty.

BT: Do we need any test coverage before approving ES6?

BT: For ES7 we agreed that we need tests before final spec.

BT: Instead of using numbered section plan to use the HTML anchor names from the HTML version of the spec.


## Yield and its precendence
Code Samples: https://gist.github.com/lukehoban/8678463

LH: Presents code samples. All but "yield 1+2" seem strange. Any time you have a generator that pumps values in you want good expression semantics.

WH: Points to yield 1+2 alternatives in LH's code samples; one makes it mean (yield 1)+2, the other makes it mean yield(1+2). Strongly prefers the latter.

BE: Have to make a choice that yield should be high precedence or low precedence. yield x + y must be yield(x + y) without parens, the rest follows by the grammar.

LH: concede

:: conversation about whether implementing iterators is more common or taskjs-like scenarios are more common ::

BN: Status quo causes more errors but errors encourage parenthesization, and enables `yield 1 + 2` to yield the value 3

LH: For the async use case, important to have high precendence, but willing to concede that `yield` should remain low precenedence due to iterators use cases. Async use cases could have new "await" syntax with high precendence.

YK: task.js requires (yield a) + (yield b) paren style

BE: revenge of Lisp, you get used to it

#### Conclusion/Resolution

- Status Quo


## Newborn generator behavior 

(Ben)

See issue here: https://github.com/tc39/agendas/pull/25

DH: Intention was for generators to be composable.

BN: Proposal: generator with yield* doesn't throw when receiving a value

DH: Breaks correspondance between yield* and for-of desugaring. Also... wrappers are not equivalent unless both wrapper and wrapped are newborn.

BN: Can be fixed... but is hairy. Presents updated wrapper code... Proposal is that we remove the type error for passing in a value to an unborn generator. Then, if the first yield we encounter is a yield *, pass in the value that was passed to the unborn generator.
:: Concerns with proposal (please fill?) ::

DH: Possibly other alternatives to fix this?

WH: There are two problems here:

  1. A function* can't capture the first value passed to the 'next' that invoked it. Instead, it currently requires it to be undefined.
  2. No way to pass an initial 'next' value to `yield *`. This means that manually doing the first yield followed by a `yield *` wouldn't help because the problem would then reappear on the second yield.

WH: The proposal is proposing a hidden channel (a la Perl's $_) that ties 1 to 2 here. Would prefer mechanisms to do those separately and more explicitly.

BN: `yield` syntax that says delegate but don't care about value?

DH: Let's think about it more...

DH: Went through the mental excercise to do an implicit yield upon calling the generator. Leads to a lot of other issues.

```js
function* first() {
  return yield* push(first, delegate);
}
```

#### Concensus/Resolution

- BN: Have to go back and think more about this. Maybe a helper function can be created.


## ECMA-404 and IETF interactions

AWB: IETF is not comfortable referencing ECMA.

IS: IETF includes ECMA-404 as an informative reference (?)

AWB: Proposed doing a second edition if IETF wanted to work with ECMA.
:: Discussion about IETF participation, general dissatisfaction with the process and end result ::
See http://www.ietf.org/mail-archive/web/json/current/threads.html#02131 and look for "R S" (Rob Sayre) fighting the good fight
