# November 19, 2014 Meeting Notes
-----

Brian Terlson (BT), Taylor Woll (TW), Jordan Harband (JHD), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jeff Morrison (JM), Sebastian Markbåge (SM), Erik Arvidsson (EA), Peter Jensen (PJ), Eric Toth (ET), Yehuda Katz (YK), Dave Herman (DH), Brendan Eich (BE), Ben Newman (BN), Forrest Norvell (FN), Waldemar Horwat (WH), Alan Schmitt (AS), Michael Ficarra (MF), Jafar Husain (JH), Lee Byron (LB), Dmitry Lomov (DL), Arnaud Le Hors (ALH), Chip Morningstar (CM), Caridy Patiño (CP), Domenic Denicola (DD), Mark S. Miller (MM), Yehuda Katz (YK), Dmitry Soshnikov (DS), Kevin Smith (KS)

-----

## 6. Test262 Status
(Brian Terlson)

BT:
- Lots of activity happening on Github
- Harness improvements ongoing, unblocking usage by polyfill authors is a top priority
- Missing collateral for ES6 features
- Move all tests to folders based on feature name
- Improves use and navigation
- Problem is that 15k tests need to be assigned to folders
- 10k are categorized so far


AWB: How will we know when we have enough tests that cover a reasonably minimal amount 

BT: Existance tests?

DD: When all implementors submit their suites

AWB: Focus on edge cases?

...


## 4.11 Performance issue: `Object.defineProperties`, `Object.create`, `Object.assign`.
(revisit)


AWB: (Recap)

MM: After consideration of the issue at hand, and in keeping with principle of least surprise: there is no other place where the spec defines similar behaviour. All other speced action before propagating a throw, such as the "return" from for-of loops, is cleanup action rather than continuation of the original operation. Given that the order in which the properties are tried is deterministic and with the balance of the other arguments, I agree that the first error should throw at the point of exception. 

#### Conclusion/Resolution

- Remove pendingException semantics
- Error throws at point of exception 


## 4.12 Should WeakMap/WeakSet have a .clear method? (MarkM)
(Mark Miller)

MM: In the absense of clear, we have a security property: the mapping from weakmap/key pair value can only be observed or affected by someone who has both the weakmap and the key. With clear(), someone with _only_ the WeakMap would've been able to affect the WeakMap-and-key-to-value mapping.

#### Conclusion/Resolution

- Remove `clear` from WeakMap and WeakSet


## 4.7 Clarify the syntax reserved?
(Allen Wirfs-Brock)

AWB: What did we reserve?

WH: Like this but curious about how it's done.

WH, BE: (discussion re: specifics of BindingIdentifier grammar)

WH: Will validate the grammar by January

AWB: The colon-less form of object literal

Various: Discussion of the annoying ambiguities in using colons to add types to destructuring patterns.

#### Conclusion/Resolution

- No colon after BindingIdentifier 
- Jeff Morrison and Brian Terlson to chamption refinements


## 5.8 Map.prototype.map and Map.prototype.filter (spec) + Set 
(Dmitry Soshnikov)

[Map.prototype-extensions.pdf](./Map.prototype-extensions.pdf)

DS: Map.prototype extensions
- map
- filter
- more...

These exist on Arrays, hopefully this is straight forward

Proposed spec: https://gist.github.com/DmitrySoshnikov/a218700746b2d7a7d2c8

MM: Similar to parallel js, lets keep an eye on the higher order operations to ensure that operations remain parallelizable

Design Choices

- Directly on Map.prototype
- On generic "map-like"? %CollectionPrototype%
- Binding `::` operator on iter tools?

User-level API

1. Simple value map: 

```js    
new Map([["x", 10], ["y", 20]]).map((v, k, m) => {
  return v * 2;
});
=> [["x", 20], ["y", 40]]
```

2. Entries map: 
    
```js    
new Map([["x", 10], ["y", 20]]).map((v, k, m) => {
  if (k == "x") return ["z", v];
  return [k, v * 2];
});

=> [["z", 10], ["y", 10]]
```

WH: Common Lisp has a menagerie of map-like functions. One of the most useful ones is one that allows the per-element function to decide to skip an element instead of always producing one.

YK/DD: (discussion re: Ruby style map operations)

MM: If you want to get the default, without being verbose 

DD: Put a symbol on the map this[@@collectionConstructor] to find the right constructor

AWB: Smalltalk uses an abstract above that has a species property to determine what to create. 

Discussion of lazy mode

YK: Lazy: do not accumulate intermediaries. Non-lazy: accumulate

YK/DD: Not important to determine this right now. 

WH: How would you directly turn a map into an array, i.e. provide a mapping function that takes a (key, value, m) and produces array values?

?: Array.from(m.entries.map(...)) instead of new Map(m.entries.map(...))

WH: But that wouldn't work if, as was just being discussed, we got rid of the outer new Map by making it implicit.


- Prototcol design choices


Re: %CollectionProtocol% https://esdiscuss.org/topic/map-filter-map-and-more#content-33


AWB: Want to avoid intermediary collection creation


Possibly?
```js
import { map } from "itertools";

var nmap = omap::map((k, v) => [k + 1, v + 1]);
```


DD: we have the IteratorPrototype


- Overall
- To correlate with `map.forEach` better to be `map.map` and `map.filter`, not `map::map`
- Direct `Map.prototype` or `%CollectionPrototype%` - to be discussed 


YK/DD/DS: (discussion of need for additions to Map.prototype)
Concern about forEach as stopgap for transition to for-of
DH/others: transition still ongoing
BE: transition means "stopgap" code on web endures
BE: anyway we want high-order "interior" iteration forever
BE: JS is a TIMTOWtDI language

    
RW: These can be made generic enough for both Map and Set if `map` defaults to the thing that `mapEntries` is doing. Then works the same for both. 

YK: No consensus on a map-specific solution. 

DD: Don't think we should put anything else on `Map.prototype`, it should be on `map.entries()`?
- Not consistent in each case

DH: Disagree. Most common case gets the position of being default. Methods on class get to be the domininant, default case. 
- We have keys, values, entries and need iterator

DD: This example seems to have values as the default

DH/YK/RW: Which is wrong. 

MM: map vs mapEntries is differentiating in what it does with the callback's return value. These do not differ on the arguments they provide to the callback.

DD: Entries is the default

YK/DH/RW: Agree. 

DS: Remove forEach?

WH: Why? I don't see anything wrong with it, and it's analogous to the other mappers.

BE: forEach is not just transitional. We need it.

RW: This isn't a trade. 

DH/YK: (discussion re: adding a new CollectionPrototype to the chain?)

BE: Someone needs to do the work to see if this can be done. We want batteries included interators, higher order operations etc. 

DH: Might be that we have several inheritance heirarchies? Similar or same methods? 

YK: Can have a higher class that gets delegated to. 

WH: (itemizes each of the cases: map, filter and forEach) 
- How do you turn on type into another?

YK: This is what we were discussing re: the symbol

[several discussions at once]



AWB: An iterator that wraps another that says "iterate, but of a specific type". 

BE: Need slides, DD doing that. 

```js
Map.prototype.entries = function () {
  return new MapIterator({ collectAs: this.constructor[Symbol.species] });
};

class MapIterator extends Iterator {
  constructor({ collectAs }) {
    super();
    this[Symbol.collectAs] = collectAs;
  }
}

Iterator.prototype.collect = function () {
  return this[Symbol.collectAs].from(...);
};

myMap.entries()                      // proposal: you can remove .entries()
  .filter(([k, v]) => k % 2 === 0)
  .map(([k, v]) => [k * 2, v])
  .forEach(...);
  // or .reduce(...) also forces
  // or for-of
  // or .collectAs(Array)
  // or .collect(), which uses [Symbol.collectAs] as a default
```

(mixed discussion)

MM/DH: classic lazyness, "force" means done building up the lazy stuff and want to actually force it to execute and get a result now


WH: Not convinced, what goes in the ... on line 13? (i.e. does the collectAs constructor get passed values or [key, value] pairs? This makes the difference between getting the result ['x', 'y', 'z'] and [[0: 'x'], [1: 'y'], [2: 'z']].)

DH: collectAs is the the way to go from one final thing to another final thing. 

Confirmed.

DD: call keys, you get keys, call values, you get values, call entries, get entries.

WH: Very confusing. In for loops "entries" means the format of your input, not what you'll eventually output.

DH: That's just our established terminology for items in Map or Set

WH: Yes, but it's used *on the input* to specify the kind of the output instead of the kind of the input.

Domenic adds to example: "Proposal: you can remove `entries()`"

```js
myMap.entries()
  .filter(([k, v]) => k % 2 === 0)
  .map(([k, v]) => [k * 2, v])
  .map(([k, v]) => v)
  .collectAs(Array)   
```

To generate example that collects just the values (not the pairs) into an array.

WH: To clarify, this doesn't collapse the intermediate results into any maps, so there would be no issues with .map(([k, v]) => v) duplicates getting undesirably coalesced?

DD: Right.

KS: Want to transform one interator into another, but dont want to use the defined function, want to use my own. How does this propagate this through?

DH: Syntax doesn't give you a nice way to do this, generator is just a function that takes an argument

KS: Yes. 

DH: No `collectAs`?

YK: Provide a default

DH: But as Kevin says, this couldn't be implemented with Generators

AWB: Need to explore this, but the subclassability of generators comes into play here. Need to work through it . 

DH: Can't instantiate a subclass of generator as a generator

... 

MM: Agree that lack of map and filter is a point of confusion. 

YK/DH: We all agree with this. 

YK: If all in agreement, then we're in consensus to at least do _something_, but not sure what that is. 
- Also needs to be subclassable

MF: have a reservation about the entire premise. What about the 
- Non-empty list in? Guarantee out? 

DH: If input type of filter is 

MF: Two functor laws: 

1. If map the id function over a functor, the functor that we get back should be the same as the original functor.
2. Composing two functions and then mapping the resulting function over a functor should be the same as first mapping one function over the functor and then mapping the other one.


(break)



#### Conclusion/Resolution

- Needs work.
- Sufficient issues
- Iterator prototype first
- How does that translate to the collection api proposal itself. 







## 5.9 Revisit Set API (possible exclusion of entries and keys) 
(Dmitry Soshnikov)

DS: (proposes removal of second arg to set.forEach)

RW: The matching arguments in map.forEach and set.forEach were designed to match array.forEach for consistency. 

JM: Is there any code that would rely on this?

AWB: If set only has value iterator, how do you create a map without keys or entries?
- If you remove this from ES6, how do we create a map from a set?

JM: Not pleasant. 

AWB: Correct. 

RW: What is the actual value of removal?

AWB/LB: There is value in consistency


#### Conclusion/Resolution

- No removal of argument to `set.forEach`



## Abstract references as a solution to LTR composition and private state
(Kevin Smith)

KS: Abstract referemces, gives a way to provide an abstraction for the records base component, for that record. Antoher way to think about it is virtual properties. 

*Using the IteratorPrototype Problem to illustrate*
- We want iterator methods!
- Left to Right composition
- Userland FTw


*Conflicting goals*
- Don't want users to extend built-in prototypes
- Don't want to wait for TC39

*A General Problem?*

The user has an object.
The user has a function
But...

There's no convenient way to all the function as a method of the object.
Have to use right-to-left. All chains to the left. 

*A (More) General Problem?*

The user has an object L
The user has a function R


*A General Solution*

L :: R

base = L
referenced name = R

AWB: Are you evaluating R?

MM: R is an expression. Only the value it evaluates to is significant. In this regard, it is more similar to square bracket indexing than it is to dot.


*Dereferencing behaviour is delegated to the _referenced_ _name_ object.*

- `Symbol.referenceGet`
- `Symbol.referenceSet`
- `Symbol.referenceDelete`

*Examples*

```
/* gets evaluated approximately like */
L::R
R[Symbol.referenceGet](L)

L::R = expr 
  R[Symbol.referenceSet](L)
  
L::R()
R[Symbol.referenceGet](L).call(L)
```

WH: Asks clarifying question about what goes into the base, name, and strict slots of the generated Reference object.

[KS flips to the semantics slide]

WH: Does this mean that the call fails whenever L === undefined?

MM/KS: Yes.

WH: Which is the base?

MM/KS: The base is L

WH: In your examples above, it's R

MM: In the desugaring, the references 

MM: The value L is the reference's base. The value of R is the reference's "name"

MM: The semantics is normative in the proposal, not the desuraring.

WH: The desugaring is not helpful because it misleads to wrong conclusions about the proposal, such as the base and the behavior when L === undefined.


*Built-In Support: Maps*

Maps have inherent virtual property semantics: 
(need to copy from slides)


*Private State*

```js
// Because the Map has "get", "set", and "delete"
const X = new PrivateMap();
const Y = new PrivateMap();

class Point {
  constructor(x, y) {
    this::X = x;
    this::Y = y;          
  }
}

// Private State + Sugar
private X, Y;

class Point {
  constructor(x, y) {
    this::X = x;
    this::Y = y;          
  }
}
```

YK: (question about inheritance, Yehuda can fill that in?)

MM: If you want protected state (visible through inheritance), you can define that. 

MM: Think of `::` as more like "base["

YK: FWIW, some explicit private state syntax is desirable. 

*Weaknessess*

The user must bring the virtual property object into scope as a variable. Fortunately, we now have better tools to manage scope: 
- Modules
- Lexical Declarations
- Destructuring


*More Information*

- https://github.com/zenparsing/es-abstract-refs


Examples: 
- https://gist.github.com/zenparsing/611b8788ff8ffcfcc20e



DD: This doesn't work outside of certain cases, the symbols are added 

BE: T

DD: Wouldn't unreified private state, by analogy to spec-internal properties, have the same non-transparency across proxies that spec-internal properties do?

MM: The only non-transparency in both cases is over non-membrane uses of proxies, whose ad hoc nature cause many necessary non-transparencies. For example, applying Date.prototype.getYear to a proxy for a Date. But in a full membrane scenario, you'd apply a proxy for getYear to a proxy for Date, which turns into applying the real getYear to the real Date on the other side of the membrane. Non-reified private state would avoid the membrane tranparency issues in the same way. These issues only arise once you reify the designator into something first class which enables access to that private state.


YK: The only real disagreement is whether the mental model is private state or the model that [Mark just described]


MM: Lead to Relationships: impossible to each "private state designator.get state bearing object" (meta-mm: Rick, I don't understand what you recorded here and it doesn't ring any bells. If no one else remembers, please delete it as uninformative noise. Thanks.)


YK: everybody agrees on the private state semantics, but the argument is whether we need a special-case syntax for private state, or a general-purpose extraction that everyone will need to learn

AWB: Generalization that :: can have use on both sides.

JM: When you see the call example it makes more sense. 

DD: But you're not "calling", you're "symbol.referenceGet"ing
- Ill serving private state
- Ill serving the bind 

MM: Non reifable private state, such as in Java, pure textual. No transparency across membrange problem. The issue cannot arise becase theure is no ability to reify the designator of that slot. 
- Nice conservative starting point because it directly reflects internal slots. 


YK: There's a curse of expert knowledge in the room, need to step back and think of it in simpler / easier terms

MM: Given reification of the designator, we're only transparent across membranes if the access invokes the reified state designator with the state bearing object as argument, rather than vice versa.

DD: would work just as well, if this :: only worked with private maps. The generalization that :: can intercept an object with get, set, 

MM: (Added after discussion) Only transparent across membranes if :: also works with proxies for these maps. There's no need to make a special rule for proxies to these maps vs other proxies, so we shouldn't. If we don't then it also doesn't make sense to impose a private-map-only restriction in the first place.

WH: Main objection is to choice of the particular syntax used. :: would be more naturally used for either type annotations (due to the existing usage of : in object literals and destructuring) or namespace-like qualifiers (like in C++).

WH: (other than choice of syntax): interesting, but not fully investigated. fear of locking ourselves into using weak-maps-like mechanism for private state. This of course lets you stick "X" onto anything with `::`, not just objects of your own class. 

AWB: But weakmaps have essentially grown into a thing that provides a separate set of "private slots", keyed on whatever object. 

RW: Yes. We're using this pattern significantly in hardware abstractions, where the key is the instance respresnting some device and the "private state" contains the raw readings from the physical device. Keeps this data at hand, but away from user muddling. 

CM: In practice, there will be a profusion of extended objects and people won't realize that they're using this `::` vs. ?

DD: 
    
```js
class Point {
  private X, Y; // desugars to 
  // new PrivateMap(Point) ?
  
  constructor(x, y) {
    this::X = x;
    this::Y = y;    
    
  X.set(foo, bar);
  }
  method(o) {
    o::X = "foo"; // X.set(o, "foo");   
  }        
}

```

WH's objection, as presented by MM: method(o) can be called on any o, not just Points, and can be used to pollute other objects. This leads to issues via various confused deputy integrity bugs.

?: May want to attach private properties to any object.

MM/WH: Sure, fine to allow that case too, but it should require an affirmative step by the programmer. The path of least resistance should be simple private.

DD: What if `private` means that the map will only accept an instance of Point?

MM: In the 

DH: There is a lot we want to achieve with "private" and I don't think we even have consensus on what we want to "private" to be. There is a lot machinery in this proposal. Missing a natural correspondance ot an existing mental model 

YK: Or another language

MM: ? re: non-reified private state
    
    
DD: (updates)

```js
class Point {
  private X, Y; // causes constructor to do
  // X.set(this, undefined); Y.set(this, undefined);
  
  constructor(x, y) {
    this::X = x;
    this::Y = y;    
    
  X.set(foo, bar);
  }
  method(o) {
    o::X = "foo";
    // if (!X.has(o)) {
    //   throw new TypeError();
    // }
    // X.set(o, "foo");    
  }        
}
```

DH: Hypothetically: if `::` was only usable for private. No generalization. Throwing this extra baggage nto class private is doubling down on private being only usable with class. I 

Should be a requirement: usable outside of classes. 

MM: accessor not be reified AND be usable outside of classes?

DH: Hypothetically, not reified. 

MM: Non reified privacy indicator outside of classes?

DH: 
    
MM: Doesn't reify? It should work

AWB: not class specific, you can put private in object literal.

DH: Not confident we have agreement of what private outside of class should do or look like.
examples: 

(whiteboard image)

DH: If we decide second class, then additional set of concerns

MM: In the absense of reifying, we can faithfully explain what's going on in terms of static semantics. 

DH: if first class, allows use as a general mechanism

MM: Proposes that private sugar (for declaring private properties) be defined only within classes. The language already has plenty of mechanisms to define it ad hoc in other contexts. On the other hand, the :: usage sugar would be usable throughout the language.


It's basically impossible to follow (rapid topic-hopping, analogous to frequency-hopping radios :) )

When members review the contents of this discussion, they will have to fill in their own summaries. 

BE: for this proposal, take the @ vs :: objection to heart, separate "privacy" from the L-to-R order. 


#### Conclusion/Resolution

- Resolve the existing issues
- Separate "privacy" from left to right

Meta MM: Rick -- These conclusions do not reflect anything I remember being concluded from the discussion. As far as I remember, we all came to a much better joint understanding, but there was no attempt to articulate an agreed overall conclusion from the discussion.



## 5.7 Can security monitors reliably detect monkey-patching of primordials? 
(Brendan, Michael Ficarra [invited expert])

MF: The problem space: "How can the developer be more confident in how their code will evaluate in any arbitrary environment"
- "First Class Realms"

DH: Sorry to interrupt, that work is done. It's part of ES7: Realms. 
- Allows to execute a string of code. 
- Completely isolated
- Creator can setup it's environment as they like

Can think of it similar to a DOM-less iframe or Worker. 

(Questions about the analogy)

Synchronous, unmediated. Owner can reach in, etc.

DH: We should take this offline and compare notes.

MF: Envisioned as a function that has a directive, can cast values from the outside. Cannot reuse. Intended to run as an IIB

DH: What happens if there lexical references? 

MF: Any lexical references are resolved. 

DD: What if you have `[[Global]]Array === [[Realm]]Array`, which Array?

MM: Concern, if an adversary's code has run first. No code that runs after can know that it didn't run first. 

DH: 
    

MF: you can't rely on the trusted version of a built-in

MM: Code hosted on a server in a different domain, served in response to HTTP GET, not carrying the header `ACCESS-CONTROL-ALLOW-ORIGIN` 
(does not allow cross-origin get). Script tag can still read the results of a cross origin get, without access-control header, but xhrs cannot.

MF: Hoping that the security benefits are better for spec analysis. Developer sanity, alleviate working around issues. Performance _may_ be a benefit, but I won't go into that. 

MF: The benefit of this proposal over Dave's is that you're not doing string programming and have access to things around you. 

DH: Operating under two assumptions: 
Mine: assume cannot operate under an "pwned" environment
Other: assume can operate under an "pwned" environment

Only accident you have worry about is someone trashing `Reflect.Realm`. At that point, its game over anyway. If malice is the concern, then there is nothing you can do and we can't design that way.

MM: I agree in practice. There is a very narrow threat model in which the advesary can run first, but in which it cannot rewrite the defender's code. If the defender's code is hosted on a server in a different domain, and served -- in response to an HTTP GET -- without the ACCESS-CONTROL-ALLOW-ORIGIN, and if the adversay *has no other server of its own on the network* that can issue the HTTP GET to the defender's server. However, this is such a narrow and impractical threat model that we should not add any mechanism that support only it.

DH: Can't comment, it's out of my wheelhouse
- Dislike the proposal in that it creates a false security.

MM: Relies on assumption with no malicious server.

MF: Our motivation is to protect our customer's users. 

MM: Assuming adversary code is already running in a browser that your bank software is about to load, the adversary can reach out from an adversary server, which fetches the code from the defender, and sends that code, via xhr say, to the adversary code running in the browser. It doesn't matter whether the adversary rewrites it on the server or the browser. The point is, the adversary will still succeed in the rewriting attack, and the defender will not know it is running in the matrix. 

(Discussion re: threat models, tit for tat.)

YK: ServiceWorker: any HTTP request can be intercepted and pwned. 

- Discussion that lead to GreaseMonkey
- extensions are more dangerous

BE: Should talk about this more. 

MM: The APIs in the Realm must be set by the creator of the Realm

DH: Need to determine what things appear in a Realm when you ask for the default 

MM: The convenience of "give me the host provided stuff" is to great, the rule should come from us. 

DH: Could also maintain a document that specifies what things are in the default 

MM: Can say that the default is "at least populated by the built-ins" and anything the host wants to include

DH: Unclear what things should not be included. 

DH: Need to provide the list of what should be there and what should not be there. 

#### Conclusion/Resolution

- Use the Realm API
- The idea that we can hang something on the Realm API to help protect against possibly-malicious extensions. 
- The Realm initialization API probably should be enhanced to take a whitelist as argument, so it can include only the subset of the initial primordials enumerated by that whitelist.


## 5.2 Pure Functions

Casual discussion, not sure we've actually started this...

?: Why not define pure functions as passing function source code and then eval'ing it in an empty environment?

MM: It's similar, but defining pure function abstractions allows for better implementation optimization opportunities.

WH: What does structured cloning do with proxies?

Various simultaneously: It's a mess, implementation-defined, not expressible in ECMAScript, and/or breaks proxies.

DH: Separate out design problem of what a frozen environment is.

WH: The implementations discussed so far sound heavy-weight: structured cloning of parameters, possibly eval'ing function body. My impression was that pure function would be used to customize parallel code by mapping a function over a data structure in parallel, etc. These functions are often tiny such as (x, y) -> (x > y) and we'd want a very lightweight pure function model.

WH: In addition, a lot of the pure functions we'd want to map over data structures in parallel are actually pure closures. The closed-over state would be cloned.

MM: [presents write barrier model of thinking about pure functions. Mark all state allocated before the fork; any attempt by a pure function to modify that state would throw.]

WH: This brings up the library issue of what happens when a pure function calls a library method. C++11 faced the same issue when they added concurrency to the language. Multiple threads are allowed to read the same data unsynchronized, but if at least one thread does a write (and they aren't all synchronized) then the behavior is undefined. For simple accesses such as reading an int, that's clear. But what about calling methods on library functions? What do they do internally? Can readers keep and update caches? The C++ committee decided to stick with the prevailing practice and declare that any library functions that look like they're readers (in C++ indicated by declaring them const) shall not mutate any internals (at least not unless they use special language features to achieve proper synchronization). In ECMAScript we'd want to do something similar.

WH: However, the above makes proxies break pure functions and vice versa. Consider an otherwise transparent proxy of an object O that behaves the same as O but also counts the number of times each method is invoked. That proxy breaks all usage of O in a pure function.

DH: [Skeptical about parallel ECMAScript.]

MM: ES6 specifies that Function.prototype.toString(call) of a normal JS-written function results in an evaluable expression that, if evaled in an adequately similar environment, results in a function object with the same [[Call]] behavior as the original. Thus, given the original (SES-like) assumption that the primordials of the receiving environment are frozen, you can use the same trick as used by the old proposed "there" function http://wiki.ecmascript.org/doku.php?id=strawman:concurrency#there -- stringify the function on the sending side, and then safely eval it on the receiving side. For this eval (or call to Function constructor) to be safe, the receiving environment must be so much like SES that it may as well be SES.

MM: (In response to something by DH) If the primordials are naively frozen, you'll face the same usability issue we faced with SES -- the override mistake http://wiki.ecmascript.org/doku.php?id=strawman:fixing_override_mistake , resulting in innocent code like "Point.prototype.toString = ..." failing. To fix this, you'll need to tamper proof the primorials instead, replacing each data property with an accessor whose setter emulates how assignment would have worked in the absence of the override mistake.
