# November 29, 2012 Meeting Notes
-----

John Neumann (JN), Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Brian Terlson (BT), Luke Hoban (LH), Rick Waldron (RW), Eric Ferraiuolo (EF), Doug Crockford (DC), Yehuda Katz (YK), Erik Arvidsson (EA), Mark S. Miller (MM), Dave Herman (DH), Sam Tobin-Hochstadt (STH), István Sebestyén (IS), Andreas Rossberg (ARB), Brendan Eich (BE), Alex Russell (AR), Matt Sweeney (MS)

-----

## Approval of ECMA/TC39 Scope Declaration

(John Neumann)

JN: (presents scope document for approval)

#### Conclusion/Resolution

- Approved.

## Scoping for default arguments revisited

(Allen Wirfs-Brock)
See Slides

AWB: (Review legacy requirements)

**Two Params, Same Name allowed (non-strict)**
```js
function f(x,x) { console.log(x); }
f(1,2); // logs: 2
```

**Parameter and a Var with Same name**
```js
function g(x) {
  var x;
  console.log(x);
}
g(1); // logs: 1
```

**Function Declarations Override Parameter Bindings**
```js
function h(x) {
  function x() {return 2;}
  console.log(x());
}
h(function() { return 1; }); // logs: 2
```

### Proposal Part 1
- Simple ES<=5.1 parameter lists introduce "var bindings" in the top level scope of a function
- All ES<=5.1 rules apply
  - Duplicated parameter names
  - Parameter names may be same as var or function Declaration
  - (missed) see slides...

ARB: These are simply the requirements.

### Proposal Part 2
- If a parameter list uses ANY parameter syntax introduced in ES6, new rules apply:
  - Destructuring Parameters
  - Default value initializers
  - Rest Parameters
- New Rules:
    - Parameter lists introduce "let bindings" in the top level scope of the function
      - No duplicate param names
      - Parameter names may not be the same as any other function top-level
    - TDZ rules apply to parameter default value initializers
      - Hoisted top-level function/var declaration are initialized after parameter initialization
    - "strict" arguments object (copy of actual args, no parameter joining)


DH/YK/LH: This is problematic for extant offending code, that is updated to use ES6 syntax. One syntax change shouldn't have adverse effects on other, not directly related, syntax.

RW: If offending code exists, it would be smart to fix the issues, new syntax does new things.

YK: Sympathetic, but disagrees

New Rules Examples:

```js

function f(x, x, ...rest) {}
  Syntax Error: duplicate parameter name (Rule 1.A)

function f(x, {a:x, b:y}) {}
  Syntax Error: duplicate parameter name (Rule 1.A)

function f([x]) { let x; }
  Syntax Error: redeclaration of parameter x (Rule 1.B)

function f([x]) { var x; }
  Syntax Error: redeclaration of parameter x (Rule 1.B)

function f([x]) { {var x;} }
  Syntax Error: redeclaration of parameter x using hoisted var (Rule 1.B)

function f([x]) { {let x;} }
  Valid, redeclaration is in inner block

function f([x]) { function x(){} }
  Syntax Error: redeclaration of parameter x (Rule 1.B)

function f([x]) { class x {} }
  Syntax Error: redeclaration of parameter x (Rule 1.B)

```

WH/AWB/ARB: discussion about parenthesis on parameters

ARB: Points out that this is why 1JS becomes a problem where we introduce micro-modes to make things work

AWB: We need to have these to make these things work correctly

MM: Also nervous about these micro-modes, but want to see the rest of the proposal

New Rules Examples, Cont...

```js

function f(x, y=x) {}
  Valid, x has been initialized when y's default value expression is evaluated.

function f(x=y, y) {}
  Runtime: ReferenceError exception y not initialized (Rule 2)

const a = "A";
function f(x=a) {}
  Valid

function f(x=a) { var a;}
  Runtime: ReferenceError a not yet initialized (Rule 2.A)

function f(x=a) { const a = "A";}
  Runtime: ReferenceError a not yet initialized (Rule 2.A)

function a() {return "A";}
function f(x=a()) {}
  Valid, a is initialized in surrounding scope, at time of parameter default value initialization.

function f(x=a()) { function a() { return "A"; } }
  Runtime: ReferenceError a not yet initialized (Rule 2.A)

```

MM, WH: I want to preserve:
1. A Function, as soon as it's in scope is already initialized
2. A Var variable, as soon as it's in scope is already initialized

ARB: Agree, but these things simply should not be in scope.

DH: We're making mistakes with let all around. We should wait to continue this discussion until this afternoon when all are present.

MM: Luke, where does the let research stand?

LH: Incomplete.

AWB: If there are disagreements with these rules, then someone needs to write rules that cover all these cases.

ARB: I proposed a set of rules and posted to es-discuss. Basic idea: a function with default arguments behaves as if it was a wrapper function supplying the default arguments. So initializers cannot see any definitions from the body.

Simplest example:
```js
// scope boundaries
-------------------------------------
| var foo = function() { return 1; }
|
| function bar( a = foo() ) {
-------------------------------------
|  var foo = null; <-- not in scope until after param
|      default evaluation
| }

```
  - https://mail.mozilla.org/pipermail/es-discuss/2012-October/025657.html
  - https://mail.mozilla.org/pipermail/es-discuss/2012-October/025669.html
  - https://mail.mozilla.org/pipermail/es-discuss/2012-September/024995.html


YK: What are observable issues with the proposal?

STH: Problems where scopes aren't seen
var declarations are not seen in parameter defaults

DH/YK/STH: Multiple nested scope might work

DH: If in strict mode, get errors. Not in strict mode, no errors. Resolves the refractor surprise issue.

YK/DC/RW/AR: (Agree with Andreas' proposal)

STH: AWB proposal has Reference Errors, ARB proposal simply says  "not in scope"

(whiteboard)

(6)
```js
function f(x, y = 7) {
  ...
}

<===>

(5)
function f(x, y) {
  let x1 = x;
  let y1 = y ?? 7;

  (5)
  return (function(x, y) {
    ...
  }).call(this, x1, y1);
}
```

WH: (whiteboard)

```js
function f(x, x=7, z=x) {
  let x1 = x;
  let x2 = x ?? 7;
  let z1 = z ?? which x?;
}
```

DH/YK: Discussion re: 1JS issues w/r to strict and non-strict

AWB: Recap... There are clearly issues that exist. I invite anyone here to formally specify these.

DH: Andreas and I can work together, with all of these scenarios in mind (request for complete list above)

RW: Available in these minutes and here https://gist.github.com/4171244

Discussion about how other languages enforce default parameter values and existing precedents.

AWB: How does a user, that isn't familiar with JS semantics, come to understand that declarations in body... ?

MM:

WH: There was previously concerns with multiple scopes, which is  clear why you've gone with a single scope

YK: Noted, non issue b/c {} doesn't create a scope bucket in JS today.

DH: (whiteboard)
```js
function f(x) {
  console.log(x);
  let x = 12;
}

f(6); ?
```

DH: Imagine if this wasn't a redeclaration error, what would occur?

ARB: There are two errors here... there would still be a TDZ error.

WH: (in response to rant about scoping of let itself) This is not on the agenda

AWB/STH: This is absolutely the agenda.

Devolved.

#### Conclusion/Resolution

- Agree that Andreas will draft a proposal for next meeting.




## Cascading this returns

(Rick Waldron)

RW: returning "this" from
Map.prototype.set, Set.prototype.add, WeakMap.prototype.set

DC/AR/YK/EF/EA: Supporting agreement

MM/AWB/RW/BE/EF: (Discussion to determine a criteria for making this API specification distinction)


#### Conclusion/Resolution

- Consensus... with the criteria that these methods are not simply a set of uncoordinated side effects that happen to have a receiver in common, but a set of coordinated side effects on a specific receiver and providing access to the target object post-mutation.


## Issues With Eval

(Allen Wirfs-Brock)

AWB: Existing issues with eval w/r to new declarative forms, strict mode, etc In particular, what grammar is allowed in eval.

ARB: E.g. allowing module declarations in direct eval would introduce local modules. (Agreement that we don't want that)

BE: But would be fine in indirect eval.

DH: System.eval is a much nicer way to do indirect eval

ARB: lets promote that as the "correct" global scope eval instead of diverging direct and indirect eval more

MM: Now we have 3 evals

DH: No way around 3 (1: direct, 2: indirect, 3: explicitly tied to a loader). But we can promote loader eval as the better one: direct but without ugly (0,eval)(src) syntax.

AWB: what about deletable bindings?
... All eval bindings in ES5 are deletable.

DH/BE: in strict eval, you can't delete locals...

AWB: (whiteboard)

```js
eval("var x; delete x;"); // ?
```

MM: if this is strict, then no.

BE: let's talk about non-strict.

AWB: Change to "let":

```js
eval("let x; delete x;");
```

ARB/MM: Illegal.

#### Conclusion/Resolution

- New declaration forms, even from non-strict mode eval cannot be deleted.


## Eliminate functions returning Reference values from the specification.

AWB: Only want to remove the language from the spec, not reason to be a feature of the spec.

BE: Exists from the ES1 days, for VBScript-style DOM APIs in IE

LH: No objection.

#### Conclusion/Resolution

- Consensus.


## Revisit Nov. 27 Resolution on iterables in spread.

BE/RW: Recounting history, re: Array.from & spread delegation

BE: Changed mind about the forEach inconsistency

AWB/YK: Have to maintain consistency to enumerable methods

BE: Let's not remain slaves to legacy, Array.from, for-of and spread use only iterable.

RW: What about pre ES6 environment?

BE: Can fall back to array-like if needs.

BE/MM/RW: Both iterable and array-like fallback

Agreed.

Discussion about ES5 code running in ES6 environments

RW: Can't decorate, what then?

YK/BE: The polyfill has to work harder by wrapping the arraylike

BE: (whiteboard)

```js
Array.from: iterable -> array

Array.from(iter(oldObj));
```

RW: No.

Return to two step on Array.from and iterator protocol on for-of, spread.


#### Conclusion/Resolution

- Add iterator protocol to arguments object (should exist on all things.

Array.from:

1. Iterator protocol
2. Array-Like

for-of & spread:

1. Iterator protocol


## Collection APIs review...

AWB/BE: Mixed discussion re generalized iterator API

BE: issues with values()

AWB: Don't care what it's called

DH: Relevant for Maps and Sets, as they've used the names keys(), values()

BE: (whiteboard)

1. for ( v of a )     // a has @iterator or throw
2. for ( v of values(a) )    // this already has a meaning
3. for ( v of myValues(a) )     // more possible ...

...Change to a property called "elements" and it settles most of the argument

If we have method based dispatch for _some_ things, we should have it for everything.
Here is the reference AWB was searching for at the meeting regarding why only having function forms of keys/values/items is a problem: https://mail.mozilla.org/pipermail/es-discuss/2011-November/018332.html


MM: can we agree on... 3 methods:

1. iterable over values
2. iterable over keys
3. iterable over [ key, value ]

Naming to come...soon?

Do not have these on Object.prototype

...MM: Map is a proper stratified properties collection. Objects are not. Arrays, when used as collections, the indices are the "keys"


DH:
```
_Collections_
.keys
.values
.items
    -> Array
    -> Map
    -> Set

_Dict_
keys(o)
values(o)
items(o)

keys    - iterable of keys
values  - iterable of values
items   - iterable of pairs
```

DH: Possible? Dict constructor, where...

```js
Dict() is shorthand for Object.create(null);


Implements...

keys(o)
values(o)
items(o)
```

And still allows .property and ["property"]

BE: Ensure that I don't have to copy into a new Dict just to get keys, values, items

DH: Won't have to.

ARB: better name: 'entries', not 'items'. (agreed)

#### Conclusion/Resolution

- Dave Herman to craft an addition to module standard library for Dict with api shown above that creates proto-less objects as Dicts and has api that can be used on all collections.

Allen Wirfs-Brock to update existing spec language to reflect:
```js
.keys()
.values()
.entries()
    -> Array
    -> Map
    -> Set
```


## The syntax of let

AWB: Making let a reserved word breaks the web.
- Removing let from non-strict?
- Crafting contextual syntactic

MM: Propose that let is not a binding form in non-strict code. When we first experimented with let, we knew the consequences, but now we know the outcome.

The remaining problematic code:

```js
var let;
let[x] = 5;
```

WH: Two ways to look at it from a syntactic point of view. It's either a problem with let syntax, or it's a problem with destructuring syntax. Restricting just one of the two to strict mode would eliminate the clash with ES5; doesn't matter which one.

DH: We _could_ limit destructuring to strict mode to solve this issue and this would likely encourage more migration to strict mode.

(several nods of agreement)

BE: This leads into the reality of strict mode and the changes to runtime semantics (gives ex. of concat issues)

LH: Opposed to not restricting any new syntax to strict mode. If we just disallow this very specific example:

```js
var let;
let[x] = 5;
```

LH: I think we can get away with it.

DH: Could refine that to only apply if 'let' not in scope as a variable.

ARB: No.

DH: Doesn't change the parse.

AR: But how the AST is constructed afterward.

BE: Back to Dave's earlier proposal, I don't think this will get us buy in, strict mode has a bad rep.

LH: Just one more hack is not always bad, but in fact how progress of anything that wants to avoid breaking back compat.

STH: Can we do the Apple experiment with Luke's proposal?

Two proposals on table:
1. All things that meet the grammar for let are let declarations and we don't reserve let. (LH)
2. Like 1, but `let` is not reserved if there is a lexical (not top-level) variable named `let` in scope (DH)

Leaning towards Luke's proposal, implementors not offended.

MM: (whiteboards proposal)

EA: No, because it kills let destructuring.

BE: We're not sure how big the problem really is... We could make the change and approach addressing the breakage via evangelism.

RW: My thinking is that we have ideal resources to find the uses of "let" in existing code and evangelize before ES6 publication.

WH: That would be ideal

MM for DC: Should we defer let to ES7?

DH/BE/YK/AWB/WH/ARB: Disagree

AWB: What if we just have const?

Nope.

DH: Our sense of aesthetic shouldn't get in the way of progress.

STH: This isn't that gross.

BE: I move that Luke's proposal be drafted for ES6

LH: A search of indexed web reveals 3 uses of var let.

?: Proposal to try parsing as a let statement first and fail over to an expression statement that just happens to use let as an identifier if that fails.

WH: No, negative parsing rules like that are known to cause byzantine problems. Better to disambiguate on the first two tokens alone just like we disambiguate on the first { token alone to distinguish a block from an expression statement that happens to start with an object literal. The first two tokens would be let followed by either an identifier, [, or {.

#### Conclusion/Resolution

- In non-strict code: let, with single token lookahead (where the single token is either an Identifier, "[", or "{" ), at the start of a statement is a let declaration. (Accepted breaking change)


## Extend new let grammar restriction?

```js
let (x) = ...
let ?maybe = ...
let !must = ...
```

Continued discussion... Do we want to preemptively disallow these: (, ?, !

DH: Want to allow parentheses in or around patterns for analogy with (x) = 7.

WH: That's half of the analogy, and the parentheses in that case are actually around a subexpression. Note that var (x) = 7 is not currently allowed, and I don't see any reason to permit it. Propose to continue existing behavior:

```js
(x) = 3;       // allowed
({ y }) = 3;   // allowed

var (x) = 3;    // disallowed
var ({y}) = 3;  // disallowed
```

DH: Why are you opposed to parentheses? Not useful now, but would like to use those in the future.

WH: I'm not opposed to parentheses in the pattern language in general, but there is no point in putting them in until we have some good use for them. Prefer to omit now simply to future-proof our design options.

DH: OK

#### Conclusion/Resolution

- Agreed to the semantics presented by the allowed/disallowed example above.



## Extending Array Comprehension

(Brendan Eich on behalf of Jason Orendorff)
Begins here: https://mail.mozilla.org/pipermail/es-discuss/2012-September/025044.html

BE: Originally seen in ES4 but never made it to ES6 (brief history of comprehension and rationale)

(whiteboard)

```js
[ x for x of a ]
[ [x,y] for x of a for y of b ]
[ [x,y] for x of a for y of b  if x % y ]
```

Proposal: restricted language, paren free heads, arbitrary sequences of let and if.

Allows?
```js
[ w if w ]
[ z let w = z * z if z > 4 ]
```

Mixed discussion about necessity

Discussion about also providing while clauses. Rejected for a (flawed) technical reason (incorrect claim was that they couldn't mutate a variable), but not much interest in including while clauses anyway.

DH: Allow if anywhere makes it more expressive and allows for earlier outs. The let is necessary for nested loops (storing outer values for use in the inner loop)

WH: To clarify proposal: No semicolons? No commas?

BE: Correct.

MM: All agreed, whatever is allowed here is also allowed between parens for generator comprehensions.

BE: No cost, no loss, use case gains.

#### Conclusion/Resolution

- Consensus on Jason's proposal: for, if, let, const can be interleaved. Applies to both Array Comprehensions and Generator Comprehensions


## yield, the identifier?

AWB: yield * 5?

BE: yield is reserved inside of generators


## Function Poison Pill Methods and new Function Syntactic Forms
Reference: https://mail.mozilla.org/pipermail/es-discuss/2012-October/026030.html

AWB: Should all new function forms, in non-strict mode, all have poison-pill properties for arguments.caller, arguments.callee, Function.caller, Function.callee.

WH: These are new forms, unlikely to have the bizarre engine semantics that poisoning was designed to eradicate. Why are we bothering with poisoning them at all?

BE: notes that es-discuss preference was to uniformly poison

MM: No security problem to have the function behave the same with respect to either strict or non-strict

#### Conclusion/Resolution

- New forms are like old forms per non-strict and strict (reduce surprise factor)


## Conventions make non-standard properties configurable

http://wiki.ecmascript.org/doku.php?id=conventions:make_non-standard_properties_configurable

MM: The other non-standard bits that implementations add, should be configurable so SES can repair or remove it.

Proposal: All non-standard properties that are put on standard built-in objects by implementations must be configurable: true and actually deletable.

WH: The proposal should apply only at the surface of built-in objects. It should be perfectly fine for an implementation to create an object X with nonconfigurable properties and set b.p = X (where b is a standard built-in object) as long as b.p is configurable.

MM: Agreed.

WH: Note that this object tree scanning approach doesn't protect against language extensions. For example, consider an ES5 sanitizer applied to an ES6 script. The sanitizer wants to restrict the script to only the built-ins it whitelists. The sanitizer walks through the built-in objects, deleting ones it hasn't whitelisted but then is blissfully unaware that the script can get access to non-whitelisted generator classes by defining and running a generator function via language syntax instead of following object links.

MM: Yes, that is a hole. In fact, we've been blocking implementations that accept E4X syntax for that very reason. However, we don't currently try to parse a script to see if it uses future syntactic constructs we don't know about.

BE: Backs Mark's rationale

#### Conclusion/Resolution

- Luke and Mark will chat offline.
