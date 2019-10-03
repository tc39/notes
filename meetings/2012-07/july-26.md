# July 26, 2012 Meeting Notes
-----

Mark S. Miller (MM), Brendan Eich (BE), Yehuda Katz (YK), Luke Hoban (LH), Rick Waldron (RW), Alex Russell (AR), Tom Van-Cutsem (TVC), Bill Ticehurst (BTT), Sam Tobin-Hochstadt (STH), Allen Wirfs-Brock (AWB), Doug Crockford (DC), John Neumann (JN), Erik Arvidsson (EA), Dave Herman (DH), Norbert Lindenberg (NL), Oliver Hunt (OH)

-----

## Maxmin class semantics

YK: namespacing pattern: class that goes inside existing object; like
Ember.View

DH: `Ember.View = class ...`

AWB: or `Ember = { View: class ... }`

AWB: early error list
- naming class eval/arguments
- duplicate class element names
- extends expression contains a `yield`
- method name constructor used on get, set, or generator

MM: `yield` should not be an error!

DH: definitely not! burden of proof is on the rejector; there's no reason
to reject here

YK: why can't we do a getter?

DH: there's no way to declaratively figure out what the actual function for
the class is, because the getter *returns* the function

AWB: class declarations create const bindings

AR: can you justify?

AWB: why would you want to overwrite it?

RW: what about builtins needing to be patched?

DH: those are independently specified to be writable; the relevant question
is whether user programs will want to patch up local class bindings

AWB: whether this is a good idea probably depends on whether you're a
library writer or application writer; if you aren't exporting class
definitions

AR: you could still say `const x = class`

YK: that distinction isn't useful; every app has stuff like libraries

AR: restriction needs justification

DC: my preference is only for the expression form so there's no confusion

RW: surveyed ~200 developers, majority did not want const bindings by
default

MM: I like crock's suggestion, just don't do the declarative one

EA: what?

LH: that's just putting cost on everyone else rather than us

MM: no, I'm talking about saving the cognitive cost to user

YK: if we went with const by default, I'd agree we shouldn't do declarative

AR: goal is most value for shortest syntax, without footguns; the analogy
with const seems tenuous

AWB: this is subtle, and most people won't even notice

DH: I don't buy that there are significant errors being caught, there's no
benefit to engines, there's not enough benefit to users, and it's clear
there are costs. so I don't see any reason to do const binding by default

*general agreement*

MM: I'm opposed to declarative form. but if it is going to be declarative,
should pick a declarative form and say it's the same as that, and let is
the only clear candidate

DH: I'm not convinced function is impossible

MM: the expression extends is the killer. makes it impossible

LH: I'm convinced it can't hoist

DH: why not a more restricted syntax for declarative form in order to get
hoisting?

```js
{
    class Sup extends Object { ... }
    class Sub extends Sup { ... }
}
```

LH: surprising that you can't compute the parent

DH: there are surprises in each alternative we've talked about here; but I
claim it's surprising to lose hoisting

OH: relevant analogy here is the fact that other languages with declarative
classes don't care about order

LH: CoffeeScript does; it translates to `var x = ...`

AR: pulse?

DH: I think we all acknowledge this is tricky; I feel strongest that
leaving out the declarative is failing in our duty

MM: if we leave out the declarative, then people will simply learn that the
language is let c = class

BE: why are we debating this?

STH: Mark and Doug are arguing it

BE: over-minimizing and failing at usability

YK: `let x = class extends Bar { }` is just crazy

DH: that's laughable as the common case

AWB: this came from the hoisting debate

BE: I thought we agreed to dead zone. if we get stuck on this we'll never
finish classes

LH: agreed; we need a separate proposal for hoisting

DH: happy to revisit later if I can come up with better alternatives

MM: we have adequate consensus that declarative desugars to let

AWB: classes are strict?

STH: I thought class did *not* imply strict mode

AR: does *anyone* want that?

*no*

AWB: default constructor has empty body? we'll get back to this

AWB: local class name scoping? similar to named function expression, but
const bound?

DH: const bound?

AWB: just like NFE

DH: I actually didn't know NFE's had a const binding!

AWB: is this a bug? should we reconsider?

MM: avoids refactoring hazard

MM: my first choice would be to fix function: within function body its name
is const; second choice is for class to be consistent

BE: not sure why we're talking about this, can't be changed

MM: in that case the class expression form should follow NFE

*general agreement*

DC: I disagree with the scoping decision about class declarations

DH: confused what we're talking about

STH: in body of class declaration, should there be a fresh scope contour

OH: it's not uncommon to overwrite the class

MM: example:

```js
class Foo {
    self() { return Foo }
}
...
new Foo().self() === Foo // can fail
```

this is very confusing for this to fail

DH: why would you ever want the extra scope contour?

STH: Rick gave a good example:

```js
class C {
    m(x) { return x instanceof C }
}
var y = new C;
C = 17
y.m(y)
```


DH: not compelling; you mutated C! if you need the earlier value, you
should save it; the confusion would only arise if you expected C to be a
static class like in Java, but that's not how JavaScript bindings work

RW: the common pattern being the defensive-constructor pattern:

```js
function C() {
    if (!(this instanceof C)) {
        return new C();
     }
     ...
}
```

DH: now I'm that much more confident that there should not be another scope
contour; I don't see any compelling argument

AWB: let me throw up another justification: class declarations often appear
at global scope, not uncommon for somebody to write class body where there
are references to the class; at global scope, anybody could have assigned
to that value

DH: I don't want to poison non-global cases just to protect against one
hazard of global code, when global code is hazardous anyway

AWB: I would put protecting global code at a higher priority than a
subtlety of inner bindings, but I'll go with the flow if I can't convince
you

DC: I don't want to hold this up

MM: are you willing to go with the function parallel?

DC: yes; I don't prefer it but I won't hold this up

AWB: missing extends, what's the default? intrinsics

*agreement*

AWB: extends null: prototype is null, Foo.[[Prototype]] extends intrinsic
Function.prototype

*agreement*

AWB: extends a constructor:

```js

class Foo extends Object { }
Foo.[[Prototype]]: (Object)
Foo.prototype.[[Prototype]]: (Object).prototype

```
IOW, class-side inheritance

MM: I disagree, the history of JS does not have it

BE: I disagree with that claim, history shows some examples on both sides

EA: people do refer to `this` in static functions; they have the freedom to
use the class name or `this`, and they do both

LH: CoffeeScript does class-side inheritance, but they don't do it like
this -- they copy

BE: but they will avoid the copy once you implement dunder-proto

MM: you can't depend on it

BE: this gives programmers more flexibility to do it however they want

MM: but then people can't use a this-sensitive function!

BE: not true, the contract of a JS function includes its this-sensitivity

Arv, AR: *nod visibly*

LH: at end of day, plenty of static functions in JS that are this-sensitive

YK: that's the style of program that I write

EA: some style guides say don't do it

LH: backbone does this

MM: so Foo will inherit `Object.create`, `Object.getOwnPropertyDescriptor`, etc?

DH: that does mean we'll be more and more hampered from adding methods to
Object

EA: but now we have modules

BE: true, that's the right answer

MM: polluting of statics with everything in Object is fatal; those are just
not relevant to most of the class abstractions people write; when I write

```js
class Point { }
```

I don't want `Point.getOwnPropertyDescriptor`

AWB: you only opt into that with `class Point extends Object`; with `class
Point { }` you don't get any of that stuff

DH: *feels giddy and sees the clouds part and sun shining through, with
angels singing from on high*

YK: also, there are override hazards of pollution: if someone freezes
Object, then you wouldn't be able to override sweet class method names like
keys(), so the ability to avoid that pollution is important

MM: valid point. thing is, we don't have static form b/c you can supposedly
use imperative assignment, but that won't work for frozen classes

BE: that's just an argument for statics in the future

AWB: minimality ftw

AWB: `class Foo extends Object.prototype`?

LH: this surprised me when I saw it in the spec

AWB: older version of class proposal had a "prototype" contextual keyword
for this case

DH: what happens if you're defining a meta-class? you can't tell whether
it's a prototype or a constructor

BE: that's a smell

AWB: constructor trumps object

BE: YAGNI, cut it

AWB: so what do we do if it's not a constructor?

DH: throw

BE: that's more future-proof

*general agreement*

AWB: extends neither an object nor null: type error

DH: actual type errors in JS, yay!

RW: curious: what if Foo extends { ... }

DH: non-constructable, so error; but could use a function literal

AWB: extends value is constructor but its prototype value is neither an
object nor null: type error (existing semantics of new: silently uses
Object.prototype)

*agreement*

AWB: `Foo.prototype` is an immutable binding? builtin constructors are
immutable, user function(){} mutable

*some surprise*

MM: make `.constructor` mutable but `.prototype` immutable

YK: why? (I want mutable)

MM: nice for classes for instanceof to be a reliable test

YK: why?

AWB: classes are higher integrity; association between constructor and
prototype actually means something now

BE: I'm moved by higher-integrity, self-hosting with minimal work

STH: not compelling to make self-hosting *easy*, just possible;
defineProperty is just fine for that

DH: most everyone seems to agree that .prototype is immutable, .constructor
is mutable. Arv and AR, thoughts?

EA: that's fine

AR: yup, that's fine

AWB: method attributes: sealed? (`{ writeable: true, configurable: false,
enumerable: false}`)
- configurable: false -- you've established a specific shape

YK: you don't want to switch from a data property to an accessor?

AWB: non-configurable but writable is reasonable

MM: this depends crucially on our stance on override mistake; this prevents
me from making an accessor

AR: I don't see why we're considering making this anything other than
writeable: true, configurable: true

BE: Allen feels having the shape be fixed is useful

*discussion*

BE: so consensus is writable: true, configurable: true

*agreement*

AWB: methods are not constructable?

DH: what?

MM: biggest benefit: this further aligns classes with builtins

MM: three reasons for this:
1. precedent in builtins
2. using a method as a constructor is generally nonsense
3. to freeze a class, I have to freeze the .prototype of the methods on the
prototype!!

LH: compelling for me: never seen a class-like abstraction on a prototype
of a class-like abstraction

MM: I have, but you still can; just do it in a way that's obvious, don't do
it with method syntax

BE: hard cases make bad law! (agreeing with MM -- use a longhand)

YK: so you can say classes really only existed as builtins, now they're
expressible

AWB: get/set accessors *are* constructors? that's just the way they are in
ES5

BE: is there precedent in builtins?

AWB: nothing explicit

YK: I'd prefer consistency between these last two cases

AWB: accessor properties on prototype are enumerable

BE: what about DOM/WebIDL? accessors on prototype?

LH: they're enumerable, yes

AWB: suggestion: concise methods should be the same for both classes and
object literals
- strictness
- enumerability
- constructability
- attributes

AWB: breaking change from ES5: get/set functions non-constructable

AWB: class accessor properties:
- enumerable: false, configurable: false

AR: no

EA: no

YK: when you use an accessor you're trying to act like a data property

BE: so compelling argument is: accessors are enumerable, configurable, and
writable

AWB: Luke suggests that default constructor should do a super-constructor
call with same arguments `constructor(...args) {super(...args)}`

BE: default constructor in CoffeeScript, Ruby

AWB: perhaps needs to test for Object constructor and not call it

DH: no observable difference!

MM: if there's no observable difference, go with simplest spec

AWB: other places where we do implicit super call? I say no

DH: I say no.

LH: I agree, I think there's no clear way for us to do it, but I also think
there will be many, many bugs

BE: irreducible complexity  here, caveat refactorer


## getPrototypeOf trap

TVC: (introduction)

`__proto__` writable destroys invariant that [[Prototype]] link is stable

Frozen objects should continue to have stable prototype chain

getPrototypeOf trap result should be consistent wth target object's proto


MM: if the proto can be changed, the proxy should...?

TVC: spec interceptable [[Prototype]]

[[Prototype]] is currently an internal prop

Would need to become internal accessor prop or split into [[GetProto]] /
[[SetProto]]

[[GetProto]] / [[SetProto]] would trigger traps for proxies



AWB/BE: This is good


YK: Do we want an analogous setPrototypeOf trap?

TVC: Yes

AWB: If you have capability to set prototype ?


TVC: `proxy.__proto__` should just trigger the proxy's get trap

```js
var p = Proxy(target, handler)

p.__proto__ // => handler.get(target, "__proto__", p)
p.__proto__ = x // => handler.set(target, "__proto__", x, p)
```
...

Trapping instanceof

Function [[HasInstance]]

x instanceof Global answering true if x and Global live in separate
frames/windows

```js
var fp = Proxy(targetFunction, handler);

x instanceof fp // handler.hasInstance(targetFunction, x)
```


MM: Explains concerns originally raised on es-discuss list by David Bruant,
but shows the cap-leak is tolerable
...

DH: if hasInstance private name on instanceof RHS...

MM: What `Object.prototype` does private name inherit from?

AWB: Probably null

BE: the E4X any (*) name had null proto in SpiderMonkey, was true singleton
in VM

AWB: functions have home context, but no reason for objects to

DH: this is a new idea of value that is not really any object

OH: if it has no properties and no prototype

BE: cannot be forged.

Discussion about unforgeability.

DH: Trapping instanceof use case


Trapping Object.isExtensible

Currently Object.isExtensible doesnt trap same for isSealed isFrozen

```js
var p = Proxy(target, handler)

Object.isExtensible( p ) => Object.isExtensible
```


Direct Proxies: "internal" properties

Issue raised by Jason Orendorff; auto unwrapping is dangerous if built-in
methods return non-primitive values

Case:

```js
var arr = [o1, o2, o3];
var it = arr.iterator();

var membraneP = wrap(it);

it.next.call(membraneP)
```

Solution (?)

Instead of auto-unwrapping, delegate to a nativeCall trap (which
auto-unwraps by default)

[[PrimitiveValue]]

BE: nativeCall trap is back door between built-in this-type-specific method
impls and proxies. Not good for standardization. Better to make such
built-ins generic via Name object internal property identifiers, a la AWB's
subclassing built-ins strawman

Discussion moved to Subclassing...

MM: re: what you want syntax wise

AWB: one way to address, not use instance that is automattically created,
create new array and patch the proto

... BE: (back to nativeCall trap)


AWB: Let's continue the issue of subclassability on es-discuss

TVC: defaultValue slide

See slide?

BE/AWB: defer this to reflect spec handling, non-observable way.

## Proxies and private names

TVC: getName(target, name.public) instead of get(target, name.public) --
this way get trap that doesn't expect name objects won't break on
unexpected inputs

DH: has, delete, ...? bigger surface area

TVC: you'd still have to branch in the code, so this is cleaner for user

YK: debugging tool will want to be able to see these things

OH: a built-in debugger will have hooks into the VM

YK: many debuggers use reflection

BE: so it's just a matter of having a bunch of XXXName traps. in for a
penny, in for a pound

STH: this is simple and straightforward, we know how to do it

BE: when in doubt use brute force (K. Thompson)

STH: when brute force doesn't work, you're not using enough of it

TVC: if getName returns undefined, forwards to target; so default behavior
is transparent proxying

TVC: otherwise, getName takes public name and returns [privateName, value]
to show that you know the private name and produce the value

STH: what about set?

TVC: returns name and success value

DH: what about unique names?

TVC: same mechanism

DH: so name.public === name?

MM: I like that

MM: are unique names in?

DH: I think so

BE: are they actually distinguishable?

MM: have to be if name.public === name or name.public !== name distinction

DH: (named) boolean flag to Name constructor

DH: do we have some way of reflecting unique names?

TVC: Object.getNames() ?

DH: ugh...

AWB: maybe a flag to Object.getOwnPropertyNames({ unique: true })

BE (editing notes): flags to methods are an API design anti-pattern

TVC: VirtualHandler fundamental traps throw, should they forward instead?

*agreement*

TVC: and rename to Handler?

*agreement*

MM: next issue: freeze, seal, defineOwnProperties each modify configuration
of bunches of separate properties, and can fail partway through; we tried &
failed in ES5 to make it atomic

MM: current unspecified order means could break

MM: tom did something in his code that's beautiful: order-independent. just
keep going, remember you failed, do as many as you can, and then throw at
the end

STH: if target is proxy, weird unpredictably stuff can happen

DH: no worse than anything that does for-in loops, right?

TVC: well, it's getOwnPropertyNames

MM: that's specified to for-in order, right?

DH: but what does for-in order say about non-enumerable properties? *evil
grin*

MM: *cracks up*

AWB: sounds like an ES5 bug!




## VirtualHandler

VirtualHandler
Rename VirtualHandler to just Handler?


Tom Van-Cutsem's Proxy presentation slides:

http://soft.vub.ac.be/~tvcutsem/invokedynamic/presentations/TC39-Proxies-July2012.pdf


## Template strings
(http://wiki.ecmascript.org/doku.php?id=harmony:quasis)

AWB: first order of business, to ban the term "quasis"

*applause*

AWB: proposing "string templates" (note: settled on *Template Strings* ^RW)

DH: a lot of people say "string interpolation" in other languages

AWB: *must use ${identifier}, don't allow $identifier*

EA: uncomfortable with that

BE: troublesome to identify right end of identifier

EA: withdraw my objection

AWB: untagged quasi is PrimaryExpression, tagged quasi is CallExpression

AWB: at runtime, tag must evaluate to a function

DH: well, you just do a call and *that* does the check

AWB: lexing treated similarly to regexp; add a new context called "lexical
goal" so lexer can tell what a curly means (like a flex(1) mode)

AWB: default escaping should be equivalent to normal strings

BE: we should canonicalize line separators to \n

AWB: for both cooked and raw?

BE: raw should be raw!

AWB: raw tag is a property of the String constructor:

```js
String.raw`In Javascript '\n' is a line-feed.`
```

DH: that's pretty badass

BE: too long a name; wanna import a small name from a module

AWB: well, importing takes more characters than renaming with a var
declaration

BE: let's put off the bikeshed in the interest of time

AWB: simplify call site object (first arg to prefix-tag function): it's
just an array of the cooked elements since that's the common case, with a
.raw expando holding array of the raw elements, both arrays frozen

BE: is there a grawlix problem with ` syntax?

DH: I've tried polling and opinions are utterly mutually incompatible

BE: what about mandated prefix but with existing e.g. ' or " quotes

LH: that's just wrong, the most common case will be unprefixed

MM: proposal for object literals inside ${...} context, based on object
literal shorthand {foo} meaning not {foo:foo} but rather {get foo() foo,
set foo(bar) {foo=bar}} to sync variable foo with property (!)

STH: that is going to be utterly unexpected

MM: ok, not gonna argue for it


AWB: what's left on the agenda?

RW: Erik is gonna take another whack at the error stack proposal


## Map and Set methods: conclusion


BE: forEach on maps and sets -- how about common signature, set passes e as
index:

```js
array    a.forEach((e, i, a) => ~~~)
map    m.forEach((v, k, m) => ~~~)
set    s.forEach((e, e, s) => ~~~)
```

FILED: https://bugs.ecmascript.org/show_bug.cgi?id=591
FILED: https://bugs.ecmascript.org/show_bug.cgi?id=592

## Wiki

DH: I'd love help with a documentation hack day for the wiki

## Scoping for C-style loops

<!--
NL: the wiki page for `` makes it sounds like they solve problems for
internationalization/localization, and they don't

-->



LH: another agenda item we skipped: for (let ; ; ) binding semantics

DH: I thought we came to agreement on that at the Yahoo! meeting?

AWB: we had a long discussion and consensus was to make for (let ; ;) bind
on each iteration

AWB: subsequent to that, considerable discussion on es-discuss about that,
issues associated with closure capture occurring in the initialization
expressions; couple different semantics to work around that, with more
complex copying at each iteration; another approach is a new kind of
Reference value, got really complex

AWB: working on the specs, I took easy way out for now; defined it a la C#
(per-loop lexical binding); just for now b/c it's simple, understandable,
and there's still controversy

AWB: another option is not to have a let for of C-style loops

STH, DH, OH: no!!!

DH: this needs another trip around the block but no time today

MM: my opinion is it doesn't matter what happens with closure capture in
the head, b/c it's an esoteric case that will be extremely rare

BE: I think the January semantics is still probably the right answer:

```js
var g;
for (let f = () => f; ; ) {
    g = f;
    break;
}
g(); // returns () => f
```

OH: it logically makes sense
