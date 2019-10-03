# March 13, 2013 Meeting Notes
-----

John Neumann (JN), Norbert Lindenberg (NL), Allen Wirfs-Brock (AWB), Rick Waldron (RW), Waldemar Horwat (WH), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Luke Hoban (LH), Matt Sweeney (MS), Doug Crockford (DC), Yehuda Katz (YK), Brendan Eich (BE), Sam Tobin-Hochstadt (STH), Alex Russell (AR), Dave Herman (DH), Adam Klein (AK), Bernd Mathiske (BM), John Pampuch (JP), Avik Chaudhuri (AVC), Theresa O'Connor (TOC), Rick Hudson (RH), Andreas Rossberg (ARB), Rafeal Weinstein (RWN), Mark S. Miller (MM), Reid Burke (RB), Edward Yang (EY), Dan Stefan (DAS)

-----

## 4.14 Make new Date(dateObj)

(Allen Wirfs-Brock)

See: https://bugs.ecmascript.org/show_bug.cgi?id=1257

AWB: Propose to fix this by spec'ing the Date constructor to special case date object arguments and produce an accurate copy of the date object.

DC: Produces a clone?

AWB: Yes.

DC: a Issues with toString?

AWB: No

NL: Bug mixes ES5/ES6 spec language: DefaultValue/DateValue?

AWB: Not an issue


#### Conclusion/Resolution

- When date object is passed to the Date constructor, it makes an accurate copy of the date object.


## 4.4 Spec Update

(Allen Wirfs-Brock)

http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts

### RegExp global, ignoreCase, multiline, source, sticky are now prototype accessor properties rather than instance own data properties.


AWB: WH's question, "why are the flags now accessor properties?" (re: RegExp global, ignoreCase, multiline, source, sticky) is necessary to support a web compatible "compile" method. The web reality takes an existing instance and reinitializes a new instance.

MM: SES doesn't whitelist "compile", but could we specify "compile" to be SES whitelistable. Freeze, no longer modifiable by compile

Example:

```js
var re = /abc/;

re.compile("changed");
console.log(re);
// > /changed/

Object.freeze(re);

re.compile("again");
console.log(re);
// > /again/

// oops
```

DC: What is the history of "compile"?

AWB: Not sure, but I believe it was JScript


### ArrayBuffer and TypedArray object length no longer restricted to 2^32 limit

DH: We should talk offline about making sure this is future proof

MM: is the new length 2^53? If it goes over, there will be a length that can't be represented

...Mixed discussion about the length limitations of existing arrays.

AWB: Isn't really an issue, just allows the length of arrays to be sufficiently large. I believe this is the future proof solution

ARB: Is it inconceivable that you might want to create a TypedArray backed by a large mapped memory?

DH: Not inconceivable.
...Regardless of whether you want something 2^53 or above

YK: Agree with Allen that this is probably sufficient.

DH/AR: (brief discussion about ownership of TypedArray spec)



AWB: Can't use the same methods as Array, because they use 2^32 length.

MM: And are all generic, so really work on "array likes"

AWB: It's not clear that they _should_ work and it may not make sense to have these methods. There are possible solutions

WH: An example of non backwards compatible?

MM: Sparse array that's not populated up to the limit and push on it? What happens?

WH: Calls ToUint32 on it?

AWB: Yes

WH: Doesn't consider those array like?

AWB: Array spec, gets and sets, does its own Uint32
...Need to look at each of these methods and see what can be done to make these compatible.

BE/AWB: (mixed discussion about historic compatibility issues)

BE: We can try it and the first sign of trouble, back off.

MM/AWB/BE: (agreement)

WH: The main use I see of ToUint32 is to call it on the existing length. Indices passed in as arguments are generally processed via ToInteger. As such, getting rid of the ToUint32 in generic Array methods applied to non-Array objects shouldn't present much difficulty (when they're applied to Array objects the change would be invisible because Array length can't reach 2^32).

AWB: But it doesn't have to be an array
...We should move on.



## 4.5 Private Symbols, WeakMaps, and Relationships

(Mark Miller)

Slides (PDF, will prompt download): http://wiki.ecmascript.org/lib/exe/fetch.php?id=meetings%3Ameeting_mar_12_2013&cache=cache&media=meetings:relationships.pdf

MM: Concerned about the overlap in functionality between WeakMaps and private Symbols.

...WeakMap named with the word "Map" inverts the thinking.

...Allen noted that WeakMaps are about a Relationship, between two objects.

Legend:

**base** is **key**
**field** is **map**


(Slide 2)
___
**"Map" inverts thinking**
(the use of ">>" signifies the that the item on the LEFT is usually better for most purposes then the RIGHT)

Syntax: base@field >> map.get(key)
...Describes the relationship more accurately

GC: impl(base)[field] >> impl(map)[key]
...A better implementation on the LEFT, despite most implementing the RIGHT

Lookup: Inherited props >> own props

Intuition: Relationship >> Symbol >> Map

Unique Symbols ok.
___

STH: Weak hash tables are found in programming languages and people want them in JS, but they historically fall in the RIGHT. Why can't we declare victory and go home?

MM: I feel like we can declare victory, but more work to do.

WH: Let's avoid a meta discussion.


(Slide 3)
___
**ES6 Encapsulation Mechanisms**

Closures hide lexical state (ES5)

Modules hide non-exports

Direct Proxies hide handler and target

WeakMaps hide keys, do rights-amplification

Private Symbols
___



(Slide 4)
___
**GC: base@field = value**
...Not discoverable given "base". Have to have both "base" and "field" to get value.

Abstract heap maps(base, field) => value
base _and_ field reachable -> value reachable

...Introduces an "and" into the previously only "or" GC map

Obvious representations:

1. impl(base)[field] => value
better when field lives longer
...When base dies early, it will take the association with it,
by regular GC and without needing ephemeral

2. impl(field)[base] => value
better when base lives longer
...When field dies earlier, it will take the association with it, by regular GC and without needing ephemeral
___


(Slide 5)
___
**GC by use case**

When base is known to live longer
_Just use a map_ (per Yehuda)

oo private field **is known** to live longer.
Just use representation #1

Most remaining WeakMap use cases
would do better with representation #1 (untested claim)

(From a GC perspective)
___

MM: The GC cost is significant. If you chose the wrong implementation, every object that gets trademarked is retained by the WeakMap until you invoke the ephemeron collection algorithm.

ARB: It's worse in v8 because it has an incremental GC that currently can only run that on full collections

MM: w/r to normal access, I believe it's a wash

AWB: I don't think it's a wash, case 1 requires an index, case 2 requires a hash code


(Slide 6)
___
**GC by use case**

Only need ephemeron collection when
 - you guessed wrong relative longevity
 - you care about the memory pressure

Felix's O(N) algorithm is affordable
with inverted representation

Examples: Membranes
___

MM: Membranes are an example where you still need the ephemeron collection algorithm


**b** is base object
**f** is field

**L** is left side
**R** is right side

**T** is target
**P** is proxy

(Slide 7)
___
**Transparency vs Privacy**
...Membrane:

Test:
bL@fL = vL    bR@fR === vR


...see slide

___

[Whiteboard Example, get image from Sam]

MM: Propose changing the name of WeakMap and changing the way we specify and describe them for implementors to think about.

AWB: Last meeting, we discussed cases... eg. when you invoke a method whose this object expects access to the private state, but it receives a proxy, it will break. I believe the solution might solve the problem

YK: |this| binding issues are orthogonal to this issue

BE: (Agree)

MM: (refutes)

WH: I challenge on this, there is a claim that we don't need private symbols and that they're broken, but we need to do things that private symbols are for. So why can't private symbols work the same way?

MM: This accomplishes things that we needed private symbols to accomplish, if you want to propose changing the name of w

WH: I want to see common uses of private symbols and how you would replace them.

MM: I haven't shown the broken solutions...

STH: I think that would've been much more helpful then showing what works today and that you wouldn't change.

MM: I believe this is an acid test to prove the transparency

WH: Implement private symbols in terms of whatever you're proposing.

MM: `fT` is a private symbol

WH: ...

MM: I'm trying to answer your question

WH: What would I need to do differently and why, using your glorified new approach.

MM: In the expansion of a class that uses a private symbol, for each declared private instance variable, there will be a private  symbol per instance variable.

WH: I think you'll need to write it down.

MM: (describes semantics, based on Slide 8)

WH: You're saying private symbols work if they adopt this semantics

WH/STH: What are the changes?

STH:
1. There is no trapping on writes and reads of proxies, passes through
2. proxy a private symbol and write sets and gets, trapped to the handler that has that private symbol.

...In Mark's defense, this is a substantial change to how we think about private symbols

AWB: It's a new type of access on an object, with a new type of state. A new, different operation with separate behaviors

YK: Will the vast majority of JavaScript programmers have to understand this? This is the most important question for me

ARB: ...?

TVC: Don't need to change proxies in anyway

YK: Not actually my concern

STH: Need to think of these as something more then properties

MM: Thinking of them as properties is what caused me to gravitate towards addressing


(Slide 9)
___
**Desugaring Private Relationships**

```js

base@field              base@field = value
field.get(base)         field.set(base, value)

```
___

(Slide 10)
___
**What about symbols and strings?**

```js

base@field              base@field = value
-field.get(base)-       -field.set(base, value)-
field[@geti](base)      field[@seti](base, value)


String.prototype[@geti] = function(base) {
  return base[this];
};

String.prototype[@seti] = function(base, value) {
  base[this] = value;
};

```
___

MM: Don't want to use string name "get" and "set" for the invocation, I want to use a symbol

WH: What is the implementation of @geti?

MM: The semantics of WeakMap's get, with exception that if the key isn't found, it tries the object the key inherits from (i.e., follows the prototype chain) until it finds a key or fails. In other words, it implements the inheritance semantics we expect of accessing properties. Given the use of representation #1, this can reuse the existing optimizations for inherited property lookup.

...?

MM: Private symbols, not discoverable

AWB: You've transformed it into a alternate MOP level operation, but you could've transformed it into a new MOP level operation... (missed this before Waldemar interrupted)

WH: This was my proposal 3 years ago...

MM: Explanation...

WH: Not allowing these things to have normal descriptor rules is a bug.

STH: Exactly, the existing proposal reuses the mental model of JavaScript programmers that we should continue to use. Same is true for encapsulation at the property level and GC mappings.

AWB: If you want true privacy

WH: ... You need

AWB: You can't proxy anything that has private state. Cant proxy any built-ins, or anything with private symbols.

BE: Asking TVC to address Waldemar's concern

WH: When the issue of membranes vs private symbols first came up, I showed an inversion approach, instead of asking the object's proxy to look up, you'd ask the private symbol's proxy. This had been intended to solve the proxy privacy leak problem (don't want object proxies to see the objects' private state), but it's essentially the same issue and solution.

TVC: Having property access by the private symbol

STH: Mark is proposing something that has similar semantics, without a new meta operation, but pays for that by making it less like true properties

WH: So which is it?

MM: If the definition of WeakMaps is something you "stick things into", then the answer is private symbols.

WH: Please show an example how we'd actually use this and how it would interact with a proxy

(break for lunch)

MM:

**private** is a pseudo-syntax mechanism

```js
class Point {
  constructor(private x, private y) {}

  toString() {
    return `<${this@x}, ${this@y}>`;
  }
  add(point) {
    return Point(this@x + point@x, this@y + point@y);
  }
}
```

Desugars to...

```js
let Point = (function() {
  const x = Rel();
  const y = Rel();

  function Point(x, y) {
    this@x = x;
    this@y = y;
  }

  Point.prototype = {
    toString() {
      return `<${this@x}, ${this@y}>`;
    }
    add(point) {
      return Point(this@x + point@x, this@y + point@y);
    }
  };
})();
```




YK: If you're calling add through a proxy?

MM: If you're calling one Point proxy from another Point proxy,
the

YK: Use case, I want the |this| binding to be the proxy

MM: Call add() method on a proxy of a Point
If the right operand is a proxy,

BM: a proxy to a point doesn't have an x

AWB: Specifically, a proxy to a point isn't registered in x

...Concern: if you had done toString simply as a get access

YK/STH: If Proxies are going to fit into the language, with any sort of concept of private state, then we need to solve the problem, and this doesn't solve the problem.

MM: Use membranes.

WH: If you come up against this problem many times and each time the answer is membranes, then we need to add membranes, not proxies.

General Agreement.

STH: Until we decide which side of the solution we want: either transparently proxying objects with private state should work, or private state can indicate that something is a genuine not-a-proxy instance of an abstraction (such as Date), then we can't possible have a solution.

YK: Hiding implementation details that manage private state that can't be proxies.

AWB: Virtual object vs Caretaker

BE: Not going to make unstratified traps

YK: only need a small amount of traps: get and set

...Can't go down this road.

(going in circles now)

BM: Notes that the next logical step is interfaces, where you define an interface and proxies implement against this.

BE: Can't apply an interface to already born objects.

BM: if you pre-plan that the object is inline with the interface then security is under control

BE: We should defer private symbols

AWB: If we do that, then there is no private branding _on_ the object

STH: Doesn't solve the problem for "what does proxy for dates do"?

More discussion about the general flaw of proxies wherein... objects that have some form of internally implemented "private" state cannot be observed and therefore not subject to trapping.


MM: Can we agree that transparency through membranes is a requirement?

AWB/STH/YK: Agree its important, but there are a lot of requirements.

MM: A champion group should go and solve these problems. Retaining WeakMaps, deferring private symbols very closely matches the proposal.

STH: ...

MM: Just want to consolidate the issues

STH: Bad idea to postpone WeakMaps, which useful and are already shipping in browsers. Bad idea to postpone anything based on a particular issue with Proxies. A separate issue with regard to the design of private symbols. None of these are solved by adding "@" to represent a WeakMap.

WH: It seems like @ for WeakMap makes sense

BE: Too much for ES6

MM: Regardless of the syntax/API, the slides show that we should encourage implementers to hang the state off the key, not the base.

AWB: The WeakMap abstraction we have is fine as is. If an implementation wants to invert its handling of keys and the map, then that's fine too.

WH: (some comment about private state?)

STH: That's not related

AWB: (re-iterates)

MM: The inverted representation is the better one.

YK: So, what is your proposal?

MM:
- **My proposal is the private symbols get postponed to ES7**
- **WeakMap gets renamed to reflect the inverted thinking**
- If we adopt the @ syntax in ES6, I want to be able to use a WeakMap on the right side

...Don't care so much about the renaming, but feel that it could add clarity to the feature

RW: (Disagree based on experience teaching the concept)

WH: no consensus on class without private symbols

MM: Rick, can you find the history of this?

RW: (recounts two meetings where Waldemar was not present, but a general consensus existing with the understanding that Waldemar would still have something to say. At Northeasten, Allen presented @-names, in which Waldemar found to sufficiently meet his privacy requirement for classes)


...Discussion around class private state as a whole.

BE: We need to synthesize what's going into ES6. Waldemar claims this must include some way of adding class private state.

STH: I would like to stop this conversation and allow myself time to think about this.

BE: Done.

#### Conclusion/Resolution

- Sam, Mark and Allen to work on "relationships" and varied representation in ES6.


## 4.3 Proxy

BE: We've had prototype implementations for some time, we made it through the change of API. We use them extensively.


## 4.16 Current Status of ES6

(Luke Hoban)


Spreadsheet: http://sdrv.ms/Z9pQxs

<iframe width="700" height="900" frameborder="0" scrolling="no" src="https://skydrive.live.com/embed?cid=704A682DC00D8AAD&resid=704A682DC00D8AAD%2159602&authkey=AHfDYaQdL8Sz2wM&em=2&wdAllowInteractivity=False&Item=Table1&wdHideGridlines=True&wdDownloadButton=True"></iframe>


AWB: Based on this review, we should shoot for December 2014

Discussion of time tables for completed spec reviews

NL: Also need to look at progress on implementations.

NL: Concerned about impact on Internationalization API 2.0 – need to evaluate whether to base on ES5 or slip to December 2014.


#### Conclusion/Resolution

- November 2013, Final review draft
- June 2014, Editorially complete
(STH: we said June in the meeting, but July makes more sense, since we don't have to submit to the GA until September, IIUC)
- December 2014, ECMA approval


## 4.7 Runtime costs of the override mistake

(Mark Miller)

Override Mistake
http://wiki.ecmascript.org/doku.php?id=strawman:fixing_override_mistake

(Request spreadsheet)

RW: Would like to see the most minimal piece of code required to illustrate the operation, measured by executing the operation in several rounds with MAX number of executions calculated to a mean value. Also, there is use of an `in` operation which will skew the results between Firefox (a bit faster) and Chrome (slow)

WH: I'd like to see comparisons of non-frozen vs. frozen to see whether the two order of magnitude Chrome slowdown is caused by freezing or inherent slowness of push and pop.

Varying, lengthy discussions around SES techniques and the implications of the override mistake.

Non-issue for code that doesn't freeze.


#### Conclusion/Resolution

- Investigate instrumentation when silently fails non-writable prototype properties.
