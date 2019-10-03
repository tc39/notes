# September 19, 2012 Meeting Notes
-----

John Neumann (JN), Mark S. Miller (MM), Norbert Lindenberg (NL), Nebojša Ćirić (NC), Allen Wirfs-Brock (AWB), István Sebestyén (IS), Luke Hoban (LH), Paul Leathers (PL), Sam Tobin-Hochstadt (STH), Andreas Rossberg (ARB), Brendan Eich (BE), Erik Arvidsson (EA), Dave Herman (DH), Yehuda Katz (YK), Rick Waldron (RW), Eric Ferraiuolo (EF), Matt Sweeney (MS), Doug Crockford (DC), Alex Russell (AR), Rafeal Weinstein (RWN), Waldemar Horwat (WH), Tom Van-Cutsem (TVC)

-----

## Agenda

Recap of Sept 18th notes.

## Proxy

(Tom Van Cutsem, Free University of Brussels)

## Enumerate Traps Return Types

TVC: change return type of enumerate() trap from array-of-string to iterator. Requires waiving the check for duplicate property names

#### Conclusion/Resolution

- Drop the duplicate property check. enumerate() trap returns iterator.

## Revokable Proxies

TVC: The Problem

In a nutshell: with direct proxies, one can no longer write a caretaker proxy that nulls out a pointer to its target once revoked. This means that the target can no longer be garbage-collected separately from its proxy.

As pointed out by David Bruant, caretakers are often useful precisely for memory management, where one uses revocation of the caretaker to release the underlying resources, as described here.

Such caretakers were easy to define in the old Proxy design, since the link between a proxy and its target was fully under the control of the handler (i.e. fully virtual). However, with direct proxies, the proxy has a built-in, immutable reference directly to its target. This reference can't be modified or nulled out.


Proposed Solution

Provide an extension to the Proxy API that allows scripts to null out the proxy-target reference. Of course, the API must be designed with care so that this link can't be nulled out by any old client of the proxy. Only the creator of the proxy should have the right to revoke it.

Because revokable proxies appear to be a niche abstraction, we propose to introduce a separate Proxy constructor dedicated to creating revokable proxies. Proxies created with the regular Proxy constructor would remain unrevokable.

Proposal:

- Introduce a new constructor function RevokableProxy, next to Proxy.
- RevokableProxy(target, handler) returns an object {proxy: proxy, revoke: revoke}.
- revoke is a zero-argument function that, when called, revokes its associated proxy.
- A revoked proxy becomes unusable in the sense that any operation that would trap to the handler instead throws a TypeError.
- Revoking an already revoked proxy has no effect.
- Once a proxy is revoked, it remains forever revoked.
- A revoked proxy drops its target and handler, making both available for garbage collection.


MM: We missed this in the change to Direct Proxies, thanks to David Bruant for identifying

...Bikeshedding the spelling of "Revokable"

MM, WH: Should be "revocable"
?: "Revokable" would seem like a typo to many folks, as it's an unusual spelling of the word.

LH: This is bringing another constructor...? Do we want to duplicate all of the functionality?

RW/DH: Agree this is an issue.

MM: static on the Proxy object?

Yes.

... Discussion about the naming.

Proposal: Proxy.revocable

DH: perhaps too academic? Consider alternative names: nullable, ...?
MM: We can decide later.

Should Proxy.revokable return the tuple as an array or an object?
MM: object: non-positional + Javascript has sufficiently lightweight notation for objects.
STH: then the name "revoke" is part of the API

Question as to whether we really need two kinds of proxies.
BE: yes, non-revokable proxies have less trap overhead (no null-check)

Discussion about whether revokable proxies introduce new ways for interceptable operations to behave.

WH: Not sure about this as a feature, w/r to future hostility...
-  eg. if "===" would trap to the handler how does this work with that?

MM: trapping "===" would be a significant change on its own, independent of revokable proxies

TVC: The only type test that is affected is typeof: once the proxy is revoked, it drops references to its target and its handler, so it can no longer forward the typeof test to its target

BE: It remembers "function" or "object"
TVC: right

DH:

RWN: Does this problem exist...

STH: revokable proxies don't add any new semantics b/c you can already write a direct proxy that throws the same error on every operation (it just uses more memory)

WH: Direct proxy, not allowed to muck with


MM: Are


TVC: Equivalent to a handler that implements all its traps to unconditionally throw

STH: RevocableProxy adds no new semantics to the language. except for allowing the proxy to be nullable

WH: I'm not sure about it

DH: He jsut gave proof.

MM: The semantics change to the handlers always throwing on all traps.

WH: Are there other traps affected by this?

TVC: New traps added last meeting will not be affected.

WH: So, a frozen object can "unfreeze" itself?

MM: No

WH: An object that is frozen can later refuse that its frozen
Concern about trapping isFrozen etc.: these tests are no longer stable.
MM: but are still fail-stop. The integrity guarantee (i.e. that it always returns a correct answer) is more important than the availability guarantee (i.e. that it always returns an answer)

Alternative to trapping isFrozen etc.: cache stable outcome of certain operations in the proxy, and afterwards no longer trap.

STH: After the first time isfrozen is true, mark to no longer call.

AWB: would preclude valid use cases that e.g. want to log all requested isFrozen operations.

Is there a situation where revoking allows an operation to throw where it previously couldn't with non-revocable proxies?
TVC: should not be the case

MM: Specify that...

**The revoke action is observably equivalent to changing the state of the handler to always throw on all traps.**

WH: An uneasy feeling about what else is hiding

BE: Mark and Tom have significant work on this issue.

MM: The ability to evict a subgraph is important
once frozen, stop trapping. once non-configurable, non-writable data, the value continues to be accessible. this loses the garbage collectability of membranes

...

DH: Question of clarification re: two constructors, are they necessary because there is no way to return two things from a constructor.

BE/MM: They create things that are just too different

BE: There is no mutable state within the proxy that is actually "mutated"?

TVC: not currently. If we want to pursue the above idea where a trap is disabled once its stable outcome is observed, then the proxy would need to be mutated.

MM: If you could falsly claim to be not-frozen after being frozen, then there would be issues with reliability, but doesn't exist.
...

MM/AR: (discussion about execution points in ES5)

AR: If you have a file name object, hand it into some API, it might throw, it might not throw... how is this different that what happened before?

WH: Again, still not sure about effects throughout proxy

MM/AR: (discussion about frozen object stability)

AR: Why do we care about the stability of frozen object w/r to revocability?

WH: (summary) Not clear what the security consequences of revoking a frozen object, either via a revocable proxy or via traps, are; this hasn't been thought about.

MM: This has been thought about and discussed off-line.


#### Conclusion/Resolution

- we want revocable proxies
- further discussion is needed on revoking frozen objects, either via revocable proxies or via traps

## Proxy and Private Names

TVC: We don't want Proxy to inadvertently leak private name properties.

In Redmond, we discussed that we would seperate string properties and private name properties into separate traps.

Later determined that this would become cumbersome.

Proposing to add a third argument to the Proxy constructor: a "whitelist" of private name properties that are allowed to be trapped.

WH: unique vs private names?
STH: The primary purpose of Names is to avoid name clash and non-forgeable. Uniques should be reflected, private: not.

WH: What makes them non-forgeable

STH: They are objects

DH: And are as non-forgeable as objects,

WH: Why do we need both? Unique, Private?

AWB: They are both useful

STH: Unique names give you actual unforgeability

MM: as opposed to the "unguessability" of randomly chosen strings

DH: About the whitelist, instead of _requiring_ a WeakSet,  can it be anything that can be passed to a WeakSet, like an Array?

MM: Should probably use a WeakMap...

EA: An object that has a method that takes the public name string and returns the private name object, if you have access to that, you can extract the private data.

STH: Erik is right, but it a

MM: if we don't drop the .public property, don't need the whitelist but instead just the resolvePrivateName trap. If we stick with the whitelist, don't pass the .public property to the resolvePrivateName trap

TVC: Why is it a WeakSet? Because we dont want someone to provide their own collection that can extract the private data.

TVC: Why is there a resolvePrivateName trap? Say an operation is performed on a proxy involving a private name, and the proxy doesn't know this private name. Two reasonable options: 1) forward to target, i dont see results, I dont care. OR 2) throw exception. A policy decision to be made by the handler: when working on a private name that we dont know about, forward or throw?

DH: Should champions take this offline?

STH: It's pretty important and could mean a significant simplification.

WH: Would like to get rid of the public/private property flags

DH: for notational convenience, would be great if one could pass an array literal as 3rd arg
TVC: could specify that if 3rd arg is an array-like, we copy its elements into a built-in WeakSet
WH: that would be confusing: names later added to the array-like won't get added to the internal WeakSet


AWB: Not clear how using a built-in WeakSet will protect, what if it's been redefined? Are WeakSet methods non-writable?
TVC: we need to specify that the proxy calls the original/intrinsic WeakSet.prototype.get method.

STH/LH/RW: Will need to spec WeakSet

#### Conclusion/Resolution

Yes to third arg for whitelist, pending details to be worked out by Proxy champions.

Expect to remove the "public" part of private names.


## WeakSet

DH: Clear that we need WeakSet to match WeakMap (Set and Map)

AWB: Need to assure that WeakMap and WeakSet are not redefined?

RW: Use cases in node programs where I'm using WeakMap made it apparent that it _is_ possible to leak via redefinition.


#### Conclusion/Resolution

Needs to be designed, as part of the whitelist feature's needs.

SpiderMonkey tracking bug: https://bugzilla.mozilla.org/show_bug.cgi?id=792439


## Syntactic Support for Private Names

(Allen Wirfs-Brock, Mozilla)

Slides: https://members.ecma-international.org/get.php?group=TC39&file=2012_sub_tc39-2012-066.pdf


## Private Names & @Names

### Unique/Private Names

- Unique and private names (aka symbols) are ES6's solution for objects that need to expose props that have limited or controlled acccessibility.

- Currently no syntactic support for definition of use

- Imperative code patterns for using names dont mesh well with declaratinve object/class definitional forms.

eg.

```js
const secret = Name();
let o = { secret: 42 }; // does not define a "Name" prop

class MyClass extends Yours {
  secret() {
    this.mine();
    super[secret]();
  }
}

// Not allowed:
MyClass.prototype[secret] = function() {
  super[secret]();
};
//... Because super is banned outside of class
```


### Computed Property Names for Object Literals Were Abandoned...

```js
const secret = 42;
let o = { [secret]: 42 };

class MyClass extends Yours {
  [secret]() {
    this.mine();
    super[secret]();
  }
}
```

Issues:
- Allowed arbitrary expr in prop name def position
- Allowed aliasing of string valued prop keys
- Permitted same key to duplicate
- Future hostile: ties prop def to indexing (See: object model reformation)


### Proposal At-Names

- [slides](https://members.ecma-international.org/get.php?group=TC39&file=2012_sub_tc39-2012-066.pdf)

- An At-Names is an IdentifierName that is lexically prefixed with @
- At-Names are const bound to Name values by new declaration forms

```js
name @x, @y;
priv @secret;
```

- Such declarations implicitly create Name Objects
-
... Missed slides

### At-Name References

- At-Name can appear in any context where an IdentifierName would be interpreted as a literal property name.
  - As a prop name in object literals/class defs
  - After . in MemberExpressions
- Lexical scoping rules resolve such At-Name references to a Name object value.

```js
private secret;
let o = { @secret: 42 };

class MyClass extends Yours {
  @secret() {
    this.mine();
  }
}
```

### At-Names in Primary Expressions

- When used as Primary expression, an At-Name... (see slides)

```js
obj.@secret
obj[@secret]
// same thing
```


### Name Declarations with Initializers

- In a name/private declaration, each At-Name may have an initialization expression.

```js
private @secret = NameBroker.provideName(secretcode);
```

- The initializer must evaluate to a name object
- Primary use case is initializing an At-Name to a name provided via a function call or other computed value (the provided name or computed value is "secretcode").


DH: Concern about keyword naming, "private" (worried about contextual keywords)

AWB: naming can be bikeshedded, but whatever it is, there is no ambiguity because:

```js
foo @IdentifierName
```

Is always: "keyword [space] '@'"

DH: You've won me over

LH: Not sure this goes "far enough" to warrant the addition.

MM/AWB/YK: (discussion about simplification)

DH: (whiteboard)

```js
let o =  {
  private @foo: 42,
  m() {
    return this.@foo;
  }
}

o.m(); // 42

// As seen via inspection (REPL, console)
{ m() {} }
```

...Discussion about varying semantics lacking in previous proposals.

MM: Cannot avoid runtime collision?

DH: We can

MM: Should throw?

DH: Not strictly, but a possibility.

AWB: function vs. cost

ARB: strongly recommend making runtime duplicate check and throwing. (LH seems to agree? Or just acknowledge?)

## Optional Feature: Class-scoped name declarations

- Allow name/private declarations to occur as a class body element
- Any such declared At-Name are scoped to the class body.

```js
class Point {
  private @x, @y; // <=== scoped to class body
  constructor(x, y) {
    this.@x = x;
    this.@y = y;
  }
  get x() { return this.@x; }
  get y() { return this.@y; }
}
```


DH/RW: Makes sense for declaration to see it at once.

LH: Want to be cautious about what we commit to forever.

RW: Fully support this.

LH: Let's work towards understanding the entire commitment

...Discussion about path forward and whether it's too late.

DH: This does resolve an issue that stands out about max min classes: private name props cannot be added declaratively

WH: classes are not worth it without this

BE/LH/RW: Disagree. Classes already support themselves.

YK: Saying that it's too late is not a valuable argument.

DH: Just the API won't be _worse_. Allen's biggest point is that you cannot use Symbol in declarative forms with super().

DH: (rebuked)

AWB: There is a big hole in classes where super() is allowed only within class, means that name/symbol _cannot_ be used with super()

DH: imperative API is safe to start, At-Names are good, but we don't need them now.

WH: You could say the same about super() in class

DH: No. We have solid, reasonable semantics for where to allow super() and where to error.

LH: I don't think we're ready to design this syntax.

AR: Are we converging on this as an idea that needs solving? Just not now?

MM: If we decided that we had consensus today, we could improve it over the next year.

RW: (agrees)

MM: However, it _is_ late and the agreement of max min was to commit to something light weight that can be built on.

BE: I agree, but I dont think we should disallow exceptions to that cut off date.

LH: syntax was not on the table at the cut off

BE: Firm disagreement.

RW: This is actually a good example of why max min classes is a good idea. It's already an identified addition that creates a massive improvement.

WH: This actually adds the missing piece for me to support classes.

LH: I want something more minimal.

BE: Can we accept it for work, bet on it until at least the next meaning?

EA: Nice that it allows class private as well as instance private

LH: Agrees. If we're going to do this, we have to do all of it. The part that is listed as "optional" actually needs to be included.

AWB: Essential functionality is base declarations at the block level.

I have an ES.next (not 6) solution for "protected".

LH/DH: The baseline is private declaration in statement, classes, object literals. Build from there. As well as whatever the "public" version. BOTH are part of the baseline. NO PROTECTED.

AWB/WH/BE: Yes, I agree.

DH/BE: Move protected to a new strawman.



#### Conclusion/Resolution

Consensus on:
- Need private binding, including: statement form, import and export.
- Need private prefix form on class methods on object literal props and methods
- "public" in addition to private, but need to choose keyword
- dot notation, expression form

Deferred to separate proposal:
- "Protected"



## Renaming Name to Symbol

(Dave Herman, Mozilla)

YK: A little nervous that not identical to Lisp

DH: Gave blessing ;)  the only diff is that you can't go from string -> symbol, whereas in lisp you can

YK: ok with that.

#### Conclusion/Resolution

- we agree that names are now called symbols (Name => Symbol)
- new alternatives for syntax to bind a "Unique Symbol" will be a keyword, one of: public, unique, or symbol
ie. `public @foo;` vs `symbol @foo;` vs `unique @foo;`



## Early Errors That Possibly Should Not Be

(Luke Hoban, Microsoft)

LH: Concerns about detecting assignment to constants. Want to just parse, not build name environments, parse trees, etc.

WH: What about detecting a continue to a nonexistent label? That requires name environments.

LH: It's rare enough that it doesn't matter.

WH: Just what are we talking about? Should the assignment 3 = 1 no longer be an early error?

[Debate, without resolution]

[Discussion about whether the ES5.1 early errors should no longer be early errors.]
Consensus: No.

[Discussion about when these kinds of errors should be detected. One option mentioned was at function call time at the granularity of a function.]

WH: That's not useful. With arrow functions we'll have many lightweight functions, so the hybrid of early and late checking at function granularity does not do a good job of either early error detection or fully dynamic binding (late error detection).

DH: Not detecting typo'd free variables would be a big loss for one of the motivations for modules.

[Discussions about alternative of having early error detection of things like typo'd variables only in development tools]

WH: Concerned that these will diverge into a mess of incompatible "even-stricter" modes.

DH: macros need to expand at compile-time; we'd essentially be making static features like macros impossible

[Macros require compile time expansion]

BE: we can do the delayed errors now, and modules that use macros could be eagerly compiled; IOW we can make this decision now without necessarily closing that door

LH: need for delaying compilation of cold code is huge; large portions of web workloads consist of cold code

BE: (explains that interns and researchers at Mozilla are working on parsers that can support macros)

DH: Explains sweet.js (similar to coffeescript transcompilation)

DH/BE: Continue research of macros, offline.

MM: List all early errors and discuss the merits

AWB: Are we ok with a class of errors that are reported on each function entry? Static function analysis will simplify certain runtime semantics.

...Will allay performance issues discovered through Chakra and v8 prototyping.

Discussion of label analysis

Strict mode implementation


#### Conclusion/Resolution

- es-discuss will get a list of all early errors that should not be



## Performance Costs of Temporal Dead Zone

(Luke Hoban, Microsoft)

https://mail.mozilla.org/pipermail/es-discuss/2012-September/024993.html

LH: (introduces discussion)

ARB: Have you tested with let and no temporal dead zone

BE: early-boyer is likely not an accurate test for let. There are closures that capture deep chains of activations. If let is top level, why would it have changed?

LH: We suspect that a majority of the overhead was caused by the read barrier created by temporal dead zones.

...Will continue with testing and gather evidence.

MM/STH/BE: early-boyer is probably innappropriate.

LH: Believe that the motivation of temporal dead zones is not actually a common enough issue in real world code

BE: (proxy for Oliver Hunt) says the whole JSC team is against temporal dead zones on let, support it on const

LH: meta concern is that cases are adding up against let. If the perceived cost is real, measurable performance cost, there will be less buy in from developers.

WH: [as previously mentioned by Brendan], having a lot more scopes to close over (i.e. creating a new one for each loop iteration, etc.) is likely to be the main performance cost of let. What if let is slower merely due to having many more scopes?

BE: (history of let in SpiderMonkey...) No outcry that performance is an issue

MM: (countering the "not common enough" argument) Presented personal experiences where dead zones were essential in detecting problems.

#### Conclusion/Resolution

- No change to temporal dead zone (yet)
- Get more data, report back


## Global Scope Revisit

YK: Still not in agreement with discussion yesterday, but not blocking the

BE: Recap the problem that revealed the issue.

LH: Can we talk about let/var at the top level?

Current proposal... let would shadow var

ARB: Why?

BE: Global contour in which let binds

AWB: The rule in functions is that you cannot have a var and function of the same name.

MM: is the interaction with the global the same as a "with" scope object.

LH:

YK: class followed by class with the same name: error
var followed by let with same identifier name: error

BE: It happens all the time...

        for (var i = 0; ...) {}

        for (var i = 0; ...) {}

...Not the issue, but this:

        var i;
        for (i = 0; ...) {}

        var i;
        for (i = 0; ...) {}

...is a problem if `let` throws when name collision occurs.


DH: A serious issue exists... the single global object. It's beginning to feel like we're adding to the issue.

WH: The complexity is not on the number of scopes, but what they do. I'm concerned about the complexity of reflecting let, const, @names, etc. onto a global object.

WH: Also don't want random HTML attributes elsewhere on the page to knock out global let/const/etc. bindings.

AWB: No one has discussed... Any script tag, whose order can be determined... bring deferred scripts to the last script

BE:


```
A <script>
B <script> document.write("D <script>")
C <script>

( G )  <
  ^    ( D )
( A )
  ^
( B ) <-?
  ^
( C ) <-?
```

Hell.


DH: Note that multiple globals is not the problem. The problem is that the one global scope is the "window"

ARB: Implemented global lexical scope, give the impression of one, but is a scope chain.

DH: Why is it any different then having a global that isn't the window?

LH: It has to be.

BE: Points out in chart above that a function in A that refers to a `let x = 1;` in C, will create an error.

DH: Users make recursive dependencies that they don't realize.

ARB: The way I understood `let`... we resolve every variable at compile time, (I missed the next part, ARB: Can you fill this in?)

YK: (whiteboard)


```html
<script>
  function animate() {
    requestAnimationFrame();
  }
</script>
<script>
  let requestAnimationFrame;
  if ( typeof requestAnimationFrame === "undefined" ) {
    requestAnimationFrame = ...polyfill.
  }
  animate();
</script>
```

BE: Recapping the Window.prototype issue

RW: There is no reason to put _everything_ on the Window.prototype. Object APIs should be own properties of the Global object ("window" in the browser case). This doesn't mean that the needs of EventTarget specification cannot be met by using the Window.prototype. The WebIDL change to move all APIs to a different semantic "space" without understanding the consequences is the worst negligence.

...More discussion...

BE: If we make let, const, class, module, function, var (all binding forms, now and in the future) are global—will this be blocked?

...Discussion...

DH: Hard to decide if a dead zone exists for `let` on the global object.

ARB:

LH: What are the mechanics of `let` accessors on the global?

...Discussion about the

Two models to consider:

Andreas:
        When you have a `let` binding, it reflected observably as a getter/setter pair with some form of identification as a `let` binding.

Luke:
        I can't figure out what the semantics you're describing is

DH: I think it's simple: every let binding is simply stored in a getter/setter pair

ARB: better to think of as a separate scope contour, where the getter/setter accesses it

DH: no difference

ARB: No, it is the difference between being stored inside the object vs inside the separate scope contour

DH: I still don't see the difference

WH: How are the proposed hidden attributes (such as the aforementioned identification of a binding as a 'let' binding) reflected if the global object is a Proxy?

DH: Tom has spec'ed these to "pass through"


BE: Object to the idea that there is an observable getter/setter on `let` bindings.

ARB: If you don't do it this way, you can't have a temporal dead zone in the global scope.

DH: (to BE) Can you recap your objection to getter/setter pairs on `let` bindings? Optimization doesn't seem like a long term motivation if we're moving to `module`

BE/DH/ARB...

Like modules, need to have global getter/setter pairs on let/const bindings

Unless there is a lexical scope or hidden data store...

LH: Observability?

ARB: It would be actually observable if the global object was a Proxy. Think of this in terms of a lexical contour


LH (recapping one of the alternative models)

There are two scopes:
        Global Object and Global Lexical Scope... when a `let` binding occurs, there are two things created, one on the Global Object and Global Lexical Scope.

[people generally felt it was easier to comprehend the data living in the scope contour]

#### Conclusion/Resolution

Agreed on the AWB/MM/WH alternative model
(new binding forms)
- Allen's 1 extra global scope contourc
- Redeclaration is an error
- Shadows all properties on the Global object
- Does not create a Global property







## Test262

(István Sebestyén, ECMA)

IS: Someone needs to update the site with the latest version of the test suite in zip file format.

LH/RW/AWB: Needs to be an automated process, if that's possible within the scope of ECMA's policies.

IS: Needs archival snapshots. The standards body is still a classic style standards organization that needs to abide its rules and policies.

#### Conclusion/Resolution

- Bill Ticehurst to produce recommendation for the automated archival of test 262 at arbitrary states, as needed.
Rick Waldron volunteers to assist as necessary.


## Create Archival Utility for ECMA Wiki

2012-10-31: `wget -r -l 0 http://wiki.ecmascript.org/`

#### Conclusion/Resolution
Rick Waldron will champion this
