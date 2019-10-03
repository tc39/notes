# September 20, 2012 Meeting Notes
-----

John Neumann (JN), Mark S. Miller (MM), Norbert Lindenberg (NL), Nebojša Ćirić (NC), Allen Wirfs-Brock (AWB), Luke Hoban (LH), Paul Leathers (PL), Sam Tobin-Hochstadt (STH), Andreas Rossberg (ARB), Brendan Eich (BE), Erik Arvidsson (EA), Dave Herman (DH), Yehuda Katz (YK), Rick Waldron (RW), Eric Ferraiuolo (EF), Matt Sweeney (MS), Doug Crockford (DC), Alex Russell (AR), Rafeal Weinstein (RWN), Waldemar Horwat (WH), Rick Hudson (RH)

-----

## Object.observe Update

(Rafael Weinstein)

REQUEST SLIDES!

Aug 18th, Released an experimental implementation, spec complete, via special Chromium Build.
https://github.com/rafaelw/v8

Updates to strawman:
- Updating [[Prototype]] qnqueues a "prototype" changeRecord

ChangeSummary.js (experimental library)
https://github.com/rafaelw/ChangeSummary


- Prototypes "diff" view of changes
- Correct observation of "paths" (eg. o.foo.bar.baz)
- Array splice projection (minimal ops to syn)
- Basis for framework usage

YK: Question about splice projections being built in. When splice happens, many records change... is pathologically slow. Fine for v1 to leave it to library code.

RWN: Opted to leave this out...
...explains n^2 issues that arise when changes to an array occur. ...explains rationale for leaving out for the foreseeable future and allow library authors to handle as they see fit for the time being.

DH: How to make a policy decision about "what" to look at in the change of an object. Agrees with this v1 decision, in favor of allowing library optimization patterns to emerge. [We can't determine the "policies" before the needs are fully understood]

AWB: Not just large scale libs, but everyday data type abstractions.

RWN: Sounds like there are specific issues?

AWB: Yes, but not to be addressed in this timeline

MM: Is the synthetic changeRecord adequate for the level of abstraction you may require

AWB: Yes, sufficient.

RW: (shared anecdotal experience writing "Fact" with Object.observe: https://github.com/rwldrn/fact )

RWN: (presenting demo)

ADD LINK

Discussion about "read" notifications and performance concerns.

YK: Willing to move Ember, despite the scale

EF: Did Angular replace all dirty checking?

YK/RWN: Not really possible to remove all dirty checking.


### Observing Computed Properties and Dependencies

RWN: Believe that it is not in scope now or ever.

### Tuning Spec, Implementation Complexity

RWN: ...Is hoping to progress the strawman to harmony. A few slides that discuss remaining issues.

LH: These represent concerns and agreements of several committee members who have been involved.

### Synchronous Delivery?
NO.

### Security Mitigations
Object.getNotifier( frozenObject ) returns null
(Out of 3 options: return null, throw, or do nothing notifier)

WH: What happens when the argument is a Proxy?

RWN: Returns the Proxy's notifier

STH: An invariant maintained internally, that if the proxy is frozen it ensures the target is frozen.

ARB: Not sure if this is true.

MM/STH: The proxy cannot say it is frozen if the target is not. Can the proxy say its NOT frozen if the target IS?

WK/MM/STH: **Proxy can say it's frozen if AND ONLY IF, the target is frozen.**

MM: If the notifier is derived, then the object is frozen, the notifier will continue to work as expected.

Creator of an object:
1. creates an object
2. gets the notifier
3. freezes the object
4. releases the object

This is an intended mechanism of the Proxy proposal


WH/AWB/MM: Discussion about notifications from frozen objects. The use of the notifier should ONLY be from the provider of the abstraction.



### oldValue
Most use cases would create copy of all observed data

WH: What about accessors?

RWN: accessors don't notify

WH: That's bad.

MM/EA/RWS/AWB: No, this is intended.

RWN: (Explains that getNotifier can be used to build synthetic events for accessors)

RW: Yes, accomplished this while experimenting with "Fact"

RWN: (Revisits demo to show example of what an abstraction over this looks like)

YK: (Supported use story in Ember)

...Mixed discussion about far future notifier patterns:

```js
// no-op, just for example...
function handler( changeRecord ) {
  console.log( changeRecord );
}

class Foo {
  private @x, @notifier;

  constructor(x) {
    this.@x = x;

    Object.observe(this, handler);

    this.@notifier = Object.getNotifier(this);
  }

  get x() {
    return this.@x;
  }

  set x(v) {
    this.@notifier.notify({
      object: this,
      name: "x",
      type: "updated",
      oldValue: this.@x
    });

    this.@x = v;
  }
}

var f = new Foo("hello");
f.x = "Hola";

// synthetic change event fired with "changeRecord"
// defined in the set x() accessor
```

Discussion regarding the feasibility of adding to ES6.

DH: Doesn't need to be in spec to prototype

BE: Worried about sheer weight of work involved in Allen's spec writing.

RH: Moving from strawman to proposal/spec is meaningful to implementor teams.

[some discussion about whether the above construction pattern has efficiency problems; needs implementation experience]

#### Conclusion/Resolution

- Push for prototype implementations (Chrome already in progress). Encourage others to do the same
- Officially Promoted to proposal for ES7.


## Grammar Validation

(Brendan Eich, Waldemar Horwat, Rick Waldron)

Overdue for grammar validation, would be ideal to re-validate.

WH: The following is ambiguous because yield is not a reserved word. It can't even be lexed:
boom = yield/area/
height;
Note that the current semantic restrictions on where yield expressions can go don't help because they apply after the program has been parsed; with this example you can't even get to the lexing and parsing stages.

Resolution on the yield issue?

#### Conclusion/Resolution

- AWB will refactor grammar so that yield can only be used within the context of a generator function and yield will not be usable as an identifier there. This will require essentially doubling the number of grammar rules in an analogous way to how the no-in rules are handled today, but on a much larger scale.
- Grammar Validation
  - Waldemar is going to try to work on this



## Formal Parameter Scope

(Brendan Eich)

With regard to default formal parameters...

Previously, all to the LEFT are in scope,
`let *`:

```js
var b = "outer";
function f(a = x, b = a * b, c = c * g() ) {
  /*
  three scopes:
    (a),
    (a and b)
    (a, b, c)
  */
}
```

Realistically, it should desugar, scope rules included:

```js
var b = "outer";
function f(a, b, c) {
  if ( a === void 0 ) a = x;
  if ( b === void 0 ) b = a * b;
  if ( c === void 0 ) c = c * ();

  function g() {} // will hoist
}
```


AWB: functions will hoist, let and const will be in the dead zone and will fail, var will hoist and initialize undefined

BE: Can we agree to get rid of `let *`?

With `let x` this is an error:

```js
function f( a = "a" ) {
  let a;
  var a;
}
```

Not `let` bindings

```js
f(a = b, b = 3)
```

let scope would break var scope: bad
let scope with magic to break var scope: bad


ARB: (whiteboard)

```js
function f(x = (y = 42), y = 41){}

f();

42, 42
```


DH: My understanding was that temporal dead zone should error all the way to actual "blessed source code" where the binding is initialized.

Remind why only "no read before write"?

BE: 2 years ago in redmond agreement.

AWB: (explains the rationale and current semantics)

DH: is this a distinction worth making, for `let`, when we're trying to say that `let` is a better `var`

MM: `let` guards were the original reasoning.

DH: `let` guards should be different from just `let`

MM/WH: No, they shouldn't be different.

STH: Need to provide an argument beyond that

WH: guarded `let` should be not be different from a `let`. One  common option for a guard must be a bottom type that lets through  anything, but that's impossible with the same behavior if a guarded  'let' differs from a plain 'let'.

DH: This is far future, hypothetical

MM/DH: related to temporal dead zone discussion.

LH: The temporal dead zone opposition is perf

WH/DH: (discussion of complexity for `let` and `const`)

DH: I dont want to alienate developers for no good reason (gives supporting argument)

MM: Better to return undefined or immediately error to show where the mistake is made

DH: Want to simplify to "no read before write". The model of `let` creates a binding and = assigns a value to it. There is no way to explain that this `=` is different from that `=`. Refers to Alex's JS is top-to-bottom.

MM: But it's not because you can forward-call functions, because JavaScript allows you to interleave function and var initializations and assignments throughout your program.

DH: (missed not about read barrier)

WH:

ARB: Trying to simulate C semantics within the constraints of a dynamic system.

AWB: Yes, this was the agreement before temporal dead zone. throw if used before init.

MM, WH: Halting further discussion. We frequently eat up time on subjects like this that have already reached consensus. Let's postpone unnec revisitings.

AWB: Ok to revisit for valid reasons...

YK: worried that if no performance issues are found then it wont be revisited.

AR: Points out that there might be real issues with developer understanding. (cites some example, ask to share?)

[[[[[[[[[[[[[[[[[[[[[[[
Temporarily, this happened:
Conclusion/Resolution
- `var` bindings and are in scope within the function
- cannot use `let` to shadow a parameter
- defaults can refer to any top level binding
]]]]]]]]]]]]]]]]]]]]]]]


#### Conclusion/Resolution

- Revisit when data is gathered, re: perf or unexpected behaviours



## Array.of Rename?

Recent post on es-discuss from user that doesn't like Array.of

Array.of has been implemented in all of the es6 shim libs (Paul Miller, Axel Rauschmayer, Andrea Giammarchi and others...)

### Array.of()

Makes sense, nice to say and explain.
When I reason about a program:

"Here we have an array of elements"
(elements, items, numbers, strings)

#### Conclusion/Resolution

- No change, no revisit.
- If we do `Foo.new()`, it must be _identical_ to `new Foo()`.


## Thin Arrow?

(Brendan Eich)

We have the fat-arrow, supported by Kevin Smith's research, it's a win. Some voices in the community don't want the unexpected behaviour of the bound lexical `this`

class, concise methods and fat-arrow are all new, powerful and composable function binding forms.

WH: Don't want two slightly different concepts with a confusingly similar syntax. It would be too difficult for casual users to remember which arrow is which [in the same way as I can never remember in C++ which variant of the ++ operator overload takes an extra dummy argument].

?: Then let's use fat-arrow with an extra 'this' parameter to stand for thin arrow.

WH: That would address the confusion, but is still unnecessary featuritis and doesn't even save much in terms of text, which was its original reason for existence. Saving a couple characters here is not worth complicating the language.

#### Conclusion/Resolution

- Consensus holds on fat-arrow


## Existential Operator (strawman discussion)

(Brendan Eich)

Significant desire include a null and undefined check in syntax/operator form (a la coffeescipt)

```js
o = {}
r = o?.p.q.r
r = o?.p?.q.r
```


Mixed discussion about the needs and use cases as they apply to coffeescript code.

ARB: This is non-compositional

        o = {}
        r = o?.p.q.r
        r = (o?.p).q.r
        r = o?.p.q.r()

Results in...

        var o, r;
        o = {};
        r = o != null ? o.p.q.r : void 0;
        r = (o != null ? o.p : void 0).q.r;
        r = o != null ? o.p.q.r() : void 0;

Non-starter.

DH: Why not an operator that needs to be explicit?

        o?.p?.q?.r

LH: Why would you ever even use it on the first?

BE: Forget all of the problems with coffeescript's impl, the need exists.

YK: In the common cases, where it works, it works well. Where it doesn't, it falls apart unexpectedly.

WH: What about other contexts such as p?[x], p?.q[x], and p?(x) ? [Note that grammar problems arise for some of those.]

General agreement.

#### Conclusion/Resolution

Seems useful, but not now. Semantics are unclear




## Generators

### thisBinding

Generator thisBinding is the thisBinding of the original generator call.

```js
class MyArray extends Array {
  *iterator() {
    let last = this.length;
    let next = 0;
    while (next < last) yield this[next++];
  }
}
```


### Generator object API?

```js
class MyArray extends Array {
  *iterator() {
    let last = this.length;
    let next = 0;
    while (next < last) yield this[next++];
  }
}

new MyArray(4, 8, 15, 16, 23, 42).iterator();
```
...returns a generator instance that will have generator methods


MM: Take a care to expose the APIs that you expect to expose.

DH: Agrees

LH: Specify the generator?

BE: Allen is worried that normative spec will require generators when it's unnec.

DH: spec a simplified generator interface, without semantics, just to define the method interface.

MM: what is the minimal method interface?

DH: send, throw, close

Discussion around specifying a generator contract.

DH: Don't specify what can't be put on generator objects.

AWB: Need something for spec

YK: If everyone implemented iterators with generators

DH: Not super worried about this...



#### Conclusion/Resolution

- The spec should not specify built in iterators to have 3 extra generator methods (ie send, throw, close)
(Currently in draft, needs to be refactored)

Notably: Significant dissent on throwing exceptions for control flow.


Continued discussion of note...

LH: Using a debugger, break on throw, exceptions. Want to catch at the point where they are thrown... on a StopIteration, do I see internals?

DH: Up to the debugger to determine whether or not it should expose

LH: (whiteboard, example misuse of iterator)

BE: Historically, not an issue.

YK: (Question about use of in-band return?)

LH: if this is not an issue, then why not specify

Discussion about protocol specifications, where precedent exists.



## Supplemental tests for Tests 262

SpiderMonkey and v8 are writing tests, can contribute back.

Need parity, it's hard.



## Goals

AWB: January, spec: feature complete.

LH: Multiple implementations?

Concerns about removal of new additions when there isn't enough evidence to support the removal.

Too soon to make cuts when we don't know what to cut.
