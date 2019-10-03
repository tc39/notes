# July 25, 2012 Meeting Notes
-----

Mark S. Miller (MM), Brendan Eich (BE), Yehuda Katz (YK), Luke Hoban (LH), Andreas Rossberg (ARB), Rick Waldron (RW), Alex Russell (AR), Tom Van-Cutsem (TVC), Bill Ticehurst (BTT), Rafeal Weinstein (RWN), Sam Tobin-Hochstadt (STH), Allen Wirfs-Brock (AWB), Doug Crockford (DC), John Neumann (JN), Erik Arvidsson (EA), Dave Herman (DH), Norbert Lindenberg (NL), Oliver Hunt (OH)

-----

## Scoping Rules for Global Lexical Declaration

AWB:

1. Global scoping var vs. let and const declarations
var and function need to go on global object

2. What do we do with new binding forms?
(class, module, imports, let, const)
Q. Should these become properties of the global object?

DH: Not sure a restriction is needed, the global scope is the global object
in JavaScript. With modules, globals are less of a problem.

YK: (clarification)

AWB, DH, BE: (providing background, e.g. on temporal dead zone for
 let/const/classs

BE: Agree there needs to be some form of additional  info not in property
descriptor

ARB: Need additional static scope information e.g. for modules. Need
additional dynamic information for temporal deadzone.

DH: If you drop the idea that let is always let everywhere. Questions
whether let should be more like var at global scope.

ARB: Does not work for modules.

AR: Reasonable to say that the global scope is never finished and that
properties can continue to be defined

AWB: An example.

A const declaration; it creates a property on the global object; it's not
defined yet; Before it's initialized another piece of code sets the value -
what happens?



DH: (board notes)

1) 2 Contours, Nested "REPL"

------------------
- var, function go in global
- let, const, module, class... all get modeled lexically as usual in inner
contour
- each script's inner contour is embedded in previous script's inner contour

2) 2 Contours, Not Nested "Uniform Let"

------------------
- var, function, go in global
- let, const, module, class... all get modeled lexically as usual in inner
contour
- each script's inner contour is "private" to that script

3) 1 Contour, Global "Traditional"

------------------
- var, function, let, const, module, class... everything is a property of the
global object.
- Additional scope refs in a side table of global, shared across scripts
- each script updates the side table



4) 2 Contours, Not Nested - Merged "Expando"

------------------
- var, function, go in global
- let, const, module, class... all lexical
- each script updates lexical contour of previous scripts



AWB: "Expando" was previously agreed upon, where the additional layer of
lexical scope is available but shared. (Notes that Andreas did not buy into
this)

DH: Agrees. Explains where "Expando" fixes the problems of "Traditional".

```
|---------|
|  get x  |
|  set x  |
|      |---------|
|      | x: let  |
|-----|---------|
```

This would identify that "x" was declared with "let" and so forth.

STH:

-------------------------------------------
A.
```html
<s>
let x;
</s>
<s>
var x;
</s>
```
"Expando" (#4) Makes this an error

-------------------------------------------
B.
```html
<s>
let x = 1;
window.x;
</s>
```
-------------------------------------------
C.
```html
<s>
let x = 1;
</s>
<s>
x;
</s>
```
"Contour"/"Expando" both result in 1

-------------------------------------------
D.
```html
<s>
const x = 1;
</s>
<s>
if (null) {
  x = 2;
}
</s>
```

"Contour"/"Expando" both result in no error


STH: Final debate that remains is reification on the window object. Allen
is not in favor.

ARB: In favor of reification; but would like to get rid of the global
object someday.

DH: Points out that non-reification will result in "WAT" from community (I
agree).

Discussion about module unloading...

BE: Let's talk about unloading as a seperate, secondary conversation.

DH: Keep the global garbage dump as is - maintain consistency

AWB: No objection to a global garbage dump.

DH: If we add complexity to to the global mess, there is no win.

DC: Global is mess, we can't change it. Arguments are that consistency win,
but we have an opportunity to clean this up. var can remain the same, but
let is a new thing and we can afford it new behaviours.

RW: I agree, but we need to stop claiming "let is the new var" because
general population will take that literally. If let has different
behaviour, then "let is the new let".


DH: If you consider each script to be a "block" ie. { block }

YK/DC: Agree

DH: I have a crazy alternative... We could special case unconditional brace
blocks in ... scope. If you write a pair of block braces at the global scope
and a let inside it, it will exist in that scope, but not global.
functions, var hoisted out of the block brace.


#2 and #3, most coherent options.


DH: function prevents us from having a coherent story about implicit scope.

STH: Might want to do something other than reification

BE: Disagree with imputing curlies as way of illustrating a script's top
level scope.

DH: Need some way to explain where that scope lives.

OH: If you explain that let identifiers only exist in one script tag,
developers will understand that.

RW: Agree.

AR: Agree, but they will say it's wrong

YK, BE: Agree with AR

AR: (Explanation of strawman developer concept of lexical ownership)

ARB: Also, want to be able to access e.g. modules from HTML event attributes

YK: The concat reality.

DH, BE: Agree on opposing concat hazards

#### Consensus/Resolution

- #3 is the path. Champions spec this out and present for next
in-person. (AWB, ARB, DH, RW)

**UPDATE**
[Global Scope was revisited in September](https://github.com/rwldrn/tc39-notes/blob/master/es6/2012-09/sept-19.md#global-scope-revisit)



## Object.observe
(Presented By Rafeal Weinstein)
http://wiki.ecmascript.org/doku.php?id=strawman:observe

```js
obj
{}[[Notifier]]
---->
        {}N
        [[ChangeObservers]]
        [[Target]]
<----
obj

 Object.observe
Object.getNotifier(obj).notify(changeRecord);


{}Function
[[PendingChangeRecords]]

```

When a data property is mutated on an object, change records are delivered.

[[ObserverCallbacks]] Used to order delivery

```js
Object.deliverChangeRecords(callback);
```

...mitigates side-channel communication by preventing change records from
escaping.


Explanation of specification history and roots in newer DOM mutation
mechanism.

AWB: Is this sufficient for implementing DOM mutation event mechanisms?

RWN: Yes, those could be built on top of Object.observe

AWB/AR: Good, that should be a goal as well.

TVC: [If you're in the finalization phase and another observation is
triggered, what happens]?

MM: FIFO event queue, deliveries run to completion

DH: Consider a two level, nested event queue

RWN: Very close to internal event queue, but is not. A single observer is
being delivered changes, but not necessarily in the order that they
occurred.

YK/RWN: Agree on delivery of script data mutation first, in any context.

RWN: Explanation of how mutation is handled and data binding as a whole.

DH: Concerned that it's too complicated and may conflict with expectation
of run-to-completion.

RWN: Agree, but feel as though it is unavoidably complex, but this is for
library authors to build better data binding abstractions.

YK: Can confirm that this proposal addresses web reality pain points.


DH: Not sure there is a good policy for knowing when to process what and
when on a queue.

(stepped out, missed too much, need fill in)

TVC and RWS discussion of how Proxy can benefit from Object.observe
Unless/until we have an actual use case for virtualizing the observation
system, don't let proxies virtualize observation: proxies have their own
internal notifier like normal objects. Object.observe(proxy, callback)
registers callback on the proxy. Proxy handler needs to actively observe
target and re-notify its own observers for observation to work
transparently across a proxy.



AWB: Concerns about whether the overall complexity is something that
belongs in a general purpose language spec

LH: The complexities are such that they meet half way between policy that
allows for too much, and for not enough.

DH: Agrees, the conversation has been helpful and agree that the complexity
is on the right track for the right reason. Need to ensure that the right
middle ground is met. Maybe current state is too high level, but closer
than original too low level state.

BE: agree with DH, want to avoid premature/overlarge spec, do want
implementation and user-testing. Let other impls know when spec is ready
for trial impl.

#### Consensus/Resolution

Summary of next steps:

DH: Coordinate with YK colleague, to do real world work. Update TVCs
prototype? Implementation prototypes.
(How to leverage developers to work on mini projects with prototype
implementations)

RW: Would like to get access to a build that I can bring back to devs at
Bocoup, where we can put dev resources towards developing projects with
Object.observe; for example converting existing Backbone applications, etc.

RWN: Agree and will arrange.



## Weak References

DH: The GC issue.

MM: A security concern, how to determine what is adequately privileged.
WeakMap does not have this issue, WeakRef does

YK: WeakMap doesn't meet the use case

DH: WeakMap meets its own use case really well. WeakRef portability issue:
non-determinism. If the web relies on un specified behaviour, you get
defacto "worst case scenario".
Safer: only null between turns, as the web does today? If we go with
traditional WeakRef, it's conceivable that the non-determinism is not an
issue. Again, safe if in event turns.


Discussion about determinism/non-determinism.

Discussion about finalization, and whether it is a necessary part of the
proposal. MM considers it important, AWB, ARB think it's too much of a
hazard. Agreement at least that weak refs are useful without.

Only considering post-mortem finalization (finalizer does not have access
to the collected object; it's already been collected), so no "zombie
revival" issues.

BE: programmers will expect some sort of promptness to finalization,
whereas it's not possible to provide any such guarantees; not testable

YK: frameworks will have to periodically eagerly collect empty WeakRefs
myself, which they can live with, but it's definitely less convenient;
anyway, setTimeout FTW


## Script Concat Issue

DH: remember that the purpose of ES6 modules is to do sync-style loading
without runtime blocking on I/O; this means that if you want to do
configuration before loading, you have to *run* one script before
*compiling* another:

```html
<script defer>
System.set("@widget", patch(System.get("@widget")));
</script>
<script defer>
import widget from "@widget";
</script>
```

not the same as...

```html
<script defer>
System.set("@widget", patch(System.get("@widget")));

import widget from "@widget";
</script>
```

Not possible for people to concat scripts for deployment and have the
configuration happen before the loading

Submitting for discussion: the shebang as "a concat seperator" that...

- Fixes the concat ASI hazard
- Allows for artificial parsing boundary
- Note that this will change semantics of var hoisting

EA: concatenation of modules will require non-trivial compilation anyway;
there will be ways to do this kind of thing with translation, without
needing built-in support

DH: and loaders also make it possible to deploy multi-file formats

Discussion about the reality of concatenation hazards of modules

Defer, but still open for future discussion.


## Fix "override mistake", aka. The can put check
(http://wiki.ecmascript.org/doku.php?id=strawman:fixing_override_mistake)

```js
var p = Object.create(null, {x: {writable:false, value:42}, y: {{get:
function(){return 42}}})

var o = Object.create(p);

o.x = 99;
o.y = 100;

```

Property in a prototype object that is read-only cannot be shadowed.

Just the same as get-only accessor.

Causes SES/Caja grief on impls that follow spec. Must replace proto-props
in prototype object to be frozen with accessors where the set function
manually shadows.

#### Consensus/Resolution

There is no change for now, needs to be looked at when subclassing
is addressed.
