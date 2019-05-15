# January 31, 2013 Meeting Notes
-----

John Neumann (JN), Allen Wirfs-Brock (AWB), Rick Waldron (RW), Waldemar Horwat (WH), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Luke Hoban (LH), Matt Sweeney (MS), Doug Crockford (DC), Yehuda Katz (YK), Andreas Rossberg (ARB), Sam Tobin-Hochstadt (STH), Brendan Eich (BE)

-----

## 4.14 Module Update


(Sam Tobin-Hochstadt)
TODO: Request Slides

STH: (Slide 1)

**Recap from November**

- Modules no longer named by Identifiers.

```js
module "m" {
  import "x/y" as y;
  export y;
}
```

DC: Are they strings?

STH: They are string literals, but may have an internal structure. We should allow characters that don't have to be escaped in URLs.

LH: This is something we will definitely have to specify.

STH: Confirms that they are string literals.

DC: Why strings and not Identifiers?

STH: The string indicates a different scoping behavior

MM: Nesting example?


STH: (Slide 2)

**Nested Modules**

```js
module "outer" {
  let y = 1; // not exported
  module "inner" {
    let z = y + 1;
    export z;
  }
}
import {z} from "outer/inner";
```

MM: Why isn't "inner" exported?

YK: All modules are visible/available.

MM: Why are all modules visible?

Concern about export visibility.

STH: You're both actually in agreement

LH: There was a change from a more complex system, now when you write something inline, it's loaded into the internal loader registry. This simplifies the proposal, removing the "hybrid" behavior of an Identifier.

STH: Believe this is a better design.

ARB: Disagree.

MM: Q. Where the "inner" string appears, there is no way to change the nesting path.

ARB: ...

MM:

AWB: When you do an import, is that passed through the Loader?

STH: Yes.

AWB: So you could write a Loader that blocked "inner"?

STH: You could enforce any arbitrary rules in the Loader.

ARB: What happens if inside "outer", I have "import from inner"?

STH: Won't work. There is a ...

EA: What happens if you do "import {a} from outer"?

STH: Don't understand.

STH: Important both have a mechanism for top level and relative,

ARB: Appears to be reinventing half of lexical scoping in an ad-hoc way, super-imposed on strings.
When somebody thinks to have a better system than lexical scoping, they usually turn out to be wrong.

STH: Trying to avoid this being like lexical scoping. The goal is to be explicitly different, closer to Node... refers to require()

YK: There is a large data set supporting

LH:

YK: Mentions concatenation argument, determined as not strong enough.

STH: ...gave an example of a module that may want nested modules...?

YK: Predict it to be multiple files, not sub modules within a module

STH/YK: If you have a top level...

AWB: clarify? you can't take two top level modules, concatenate them and put them in a script tag?

STH: Yes, but you can't import from them.

LH: Clarifies.

AWB: There isn't a transformation that would take all of the modules and concat into a single file and it would mean the same thing?

STH: You could certainly write a transformation, but you would have to put that result into something that

ARB: What if I import inner, but outer hasn't been imported yet?

STH: Outer is implicitly loaded.

...

YK: I previously understood the module system (STH: I thought it was EA who said this)

LH: I thought... There is a loader that has a table of things. Two ways to get them in there:
1. Filesystem, where keys are the path
2. Load a script

Are you saying that the file name is now unnecessary?

STH: Yes

LH: I don't see how you could make this work

YK: I think it's not good. You can't dictate that file A must be _here_ for file B to work.

AWB: You don't want to mix physical identifiers with logical identifiers

ARB: Exactly

STH: One of the other ideas is that the Loader has setters, so that we can replace them... allowing you to change the default Loader. We are going to provide the basic programmatic layer, not design the declarative loader mapping mechanism.

YK: The requirement, based on the example:
"jquery-ui" needs "jquery"
...will be problematic when a developer cannot control where the files go.

MM: Will inner be executed?

STH: inner is not executed unless imported.

MM: is the identifier after the module keyword required?

STH: the semantics would likely involve immediate import of that module.

LH: I don't understand why we want nested modules like this. There is no existing system that supports the need.

YK: Agree.

STH: (whiteboard)

```js
import {$} from "jquery"
```

What does "jquery.js" look like?

YK: Top level $ with no "module {}"

STH: What if that file wants to use some other module? I think people will get that very wrong.

AWB: (Concern about the physical file and the import) Not operating logically at the same level as modules

EF: Agrees.

...Discussion regarding "loading" the physical and "importing" the  logical.

LH: What Sam is saying... "why can't it just be the import syntax"

MM: Given a fully qualified path and module name, that uniquely identifies a module?

STH: Yes.

MM: What does TypeScript do?

LH: TypeScript has two notions of modules. "declarative object",  similar to the earlier module proposal.
Also has "file modules" that is a file with "module" that becomes an AMD define.

ARB/LH: Discussion of the semantics of the TypeScript type system.

STH: It assumes that all of the bindings are there for all time.

LH: Yes.

STH: I will avoid "possible futures". To re-answer, module sources are contiguous.

...

STH: Originally, Dave and I punted on nested modules, until we ran into a case that needs nested modules.

ARB: The result is a reinvention of lexical scoping of sorts.

...

AWB: Imagine you had a module named "." and you had a module in the same file named "./util" and so on...
Then you take that and put it in a file named "jquery" and try to import from "."...

STH: What that suggests is that naming something "." will give strange behavior.

AWB: It represents an example of the problem you're against.

EA: If you import a file, called "jquery" and that has a nested module named "util", should work the same if "util" is just in the same directory.

Mixed discussion, re: what _could_ be solutions of

STH: Recapping... Yehuda and Erik brought up a concern about defining multiple top level modules and how to indicate that they are belong at the top level.

YK: another example, Ember relies on Handlebars...

STH: (whiteboard)

Solution?
```js
module "/jquery" {
}
.
.
```

LH: One of the things the module system needs, to move forward, there should be 5-10 real world scenarios. Each scenario needs to be met and _recorded_, each time a change is made, it needs to be applied to each scenario to ensure that we're covering the needs.

AWB/YK/RW: Strongly agree.

STH: Scenarios

1. Script tag, local file
2. Script tag, cdn
2. Inline

AWB: An over simplification

EF: Will always need to provide some kind of configuration, because in reality, files and libs have relevant version numbers.

YK: ...gives example for RSVP, Ember, Metamorph

EF: It should be clear how you link this name to a resource.

STH: Should be able to set up a loader initially and then "import" just works.

YK/STH: But we're not going to define the mechanism, because it's out of scope.

STH: Do you all understand why I don't think this committee should design a complete API for Loader?

EF: But it results in magic and Allen is talking about removing the magic.

STH: But that's configurable

EF: Configuring is not pleasant.

STH: `System.fetch(...url)`?

EF: Imagine if jQuery home page said: `System.fetch(jquery); import {$} from jquery`.

YK: We want a programmatic hook, but I want to say "import jquery" and I want to tell you where it is.

STH: This is easy to add, but I'm not sold. I will discuss this with Dave

YK: Is because you don't see the burden?

...The current proposal won't work when you want to use a CDN url and also have jQuery at the top level.

The primary issue:

```js
import { jQuery } from "jquery";
```

Needs to have some mechanism by which we can configure WHERE "jquery" is, via URL.

STH: A possible solution?
```js
Loader.configure([
  [ "jquery", "file.js" ]
]);
```

EF: The original proposal, where the file is inferred by the name doesn't get us close to meeting the need.

BE: This is not design by committee, we _really_ need user testing.

AWB: Are there people that are going to provide the specific scenarios that need to be met?

YK/EF/RW: (agree to work with Same and Dave)

STH: (slide 3)

**Dropped Features**
- export =
- export get/set


LH: Reminder to include the node use case in the scenario write ups.


STH: (slide 4)

**Loader Semantics**

- import foo/bar => fetches "foo/bar.js"
- import ./foo => relative to the file
- WIP, specifying the details of loading
    - Ordering
    - Error
    - Hooks
- New "rewrite" hook

EA: Q. re #1, relative to what?

STH/YK: document, document base

ARB: Are you sure about "relative to file" on the second?

YK: This would break concatenation

STH: Important for self-containment

YK: The Loader has to know enough about the system to find the correct thing

Mixed discussion.

LH: We need to drive this through with concrete examples and use those steer the development here. I don't think we're going to get anywhere here today.

STH: (returning to the slide) Specified the "rewrite" hook to see that you want jQuery, it will fetch the source, eval it and then rewrite into jQuery.

DC: ...Recalling the original discussion around modules and the agreement he made with Dave to withhold objection on the grounds that we'd agree with syntax later. That agreement hasn't been met. The discussion we had this morning indicates that it has failed to meet the requirements and should not hold up the rest of the specification. Suggest to remove from ES6

LH: As much as it would be great to deliver this, it's simply not ready and not nearly developed or concrete enough to continue forward with. We'd need a year to user test to get the best results from the feature. Need to understand and meet the needs.

BE: Library code can't dictate and may have to change, but that shouldn't block the feature.

STH: It's unfair to drop the feature when other features have behaved the same way and are still incomplete.

MM: To be fair, changes coming to proxy

STH: There is a great deal of completed work for this and with valuable feedback, we can still deliver. It's not fair to say "We're providing you with feedback, therefore you're not done".

BE: Yes, we need algorithms in the spec and user testing in time.

EA: Modules are the most important feature that we have to ship, but I agree with Doug that it might not be in time.

BE: One option is to move it to ES7

EA: From implementation, modules is the highest priority, but there is nothing to implement.

AWB: And much of the spec will rely on modules.

MM: Comparisons of the lexical scoped modules and the new string name modules

BE: ...Recalls the argument from 3 years ago. Notes that IIFE is NOT what `module {}` is and cannot be compared.

DC: I've spent years promoting this, but I can't see how it will make it.

AWB: We should aim for a "maximally minimal modules" proposal, that we can then move forward with to be successful.

WH: I like modules but also share Doug's skepticism about them being ready for ES6

ARB: I've been working on implementing modules for a year now and the changes you made in November invalidated most of that work, and they were not changes that I could agree with.

STH: To Clarify, we should not do a design along these lines AND you're concerned about the schedule.

ARB/AWB: Don't want to go back to ground zero.

LH: Start with a more robust design exercise, instead of trying to patch.

YK: To address the notion that the need has eroded, the systems that have been developed have actually put us in a worse position.

EA: Can we get champions of an alternate proposal? Andreas?

AWB: If we're going to defer or decouple modules from ES6, we need to know sooner, by the next meeting.

STH: I believe strongly that the state of the module system is being mis-perceived.

EA: I'm really confused by the current system and I feel like i used to understand the old module proposal well.

ARB: Same here.

LH: I don't think the current system is grounded or addresses the real problems that it needs to address.
...What we need to accomplish is much deeper.
...Prior art and experience dictates how the experience will be received and this doesn't seem to come up.

YK: I see modules as largely "desugaring" to two things that can be done with defining and loading in AMD, YUI etc.

LH: I'm not seeing all of the needs being met. My intuition is to say "this is a sugar for AMD", I think that could be a solid guiding principle.

YK: I agree that it's easier to see a path forward if it's largely the same thing as something that is already in use.

STH: re: possibly maximally minimal? There are too many details and requirements that are closer to surface, syntactically. It's harder to jettison the complicated parts to reduce the work, but also gives me confidence that the fundamental design is not changing as much as those in the room may belief.
...It aligned the programming model with the semantics of the Loader
...Believe it would be a big mistake not to do modules in ES6.
...Problematic that we're having this discussion without Dave present.

RW: We should break and table this until Dave can be present.

LH/DC/STH: Agree.

AWB: Concerned that we're on a path that won't include modules. If we're going to ship within a year of our target, modules won't make it.

STH: If we characterize it that way, then not many features are ready.

AWB: Agree.

RW: We should table this until the next meeting, where we are scheduled to actually discuss which features move forward and which don't. Additionally, Dave will be present.

STH: Of course over the next two months, Dave and I will be working with Allen to move modules into the spec.

EA: That could be the best thing.

RW: Likely to restore confidence if this can be achieved.

LH: Not convinced we have a design that is ready for the spec.

...Seeing this in spec may reify the unknown parts.


YK: If we don't have modules in ES6, certain parts will have to be respec'ed

AWB: I also believe a maximally minimal specification that can be used internally could happen.

LH: Of course, there is a status quo: Creating global names that define built ins

...Discussion re: Map, Set and WeakMap already in browsers.


JN: Steering to break. The point of record...


#### Conclusion/Resolution

- Cannot continue this discussion without Dave Herman
- Continue work, the understanding the next meeting is decision time.
- Work with committee members and community to develop concrete scenarios that must be met and addressed.




## New Scope of the Royalty-Free Task Group (TC39TG1)

...Discussion...

WH: Motion

MM: Seconded

DC: Seconded

#### Conclusion/Resolution

We approve the new scope for RFTG Unanimously.


**There was no specific agenda item here**


ATTENTION: Mark, Waldemar, Allen... Please review these notes. I tried to keep up, but I'm not confident in the record.


MM: Want to maintain the option to defer Notification Proxies and Private Symbols—Defer to March?

...Mixed discussion about feature deferment.

WH: I agreed to classes based on private names inclusion, if there are no private names, then I can't agree to classes.

AWB: The objections have all been based on their interaction with Proxies

MM: I disagree, but don't want to deep dive.

WH: This is a bug in Proxy

AWB: Agree.

MM: I'd like to postpone a larger discussion until March.

AWB: (whiteboard)

```js
var p = Proxy(target, handler);
```

Any operation you do on "p" is forwarded onto "target"...

```js
var target = {
  foo() {
    if (someLookup(this)) {
    }
  }
};

target.foo();
p.foo();

// "this" in foo() is bound to the object
// SHOULD always be "target"
// EF: Could be multiple bindings for the same "target",
// so "this" should be "target"
```

AWB: Outlines issues with the MOP...

```js
target.[[Get]]("foo");
P?
self.[[Get]]()
```

See image.

target has a method named foo, uses the "this" value,

(WH's summary) The point that Allen was demonstrating on the whiteboard was that, given:
```js
var target = {foo() {if (someLookup(this)) {...}}};
var p = Proxy(target, {});
```

then:
target.foo and p.foo are the same function object.
target.foo() and p.foo() get different this values (target and p respectively).


Use cases:

1. Virtual Object
- The target is not really the target, just a book keeping mechanism.
- Wouldn't need the target, despite need for invariant checks
- Nearly all functionality in the handler

2. Membranes (also, "nosuch...")

3. Caretaker
- Allows all through until revoked
- Nearly all functionality in target


AWB: A virtual object case... the target object is a captive object of each proxy, part of the implementation. Providing most of the functionality. The target never escapes.
...The case that doesn't cover that: the a proxy is being over laid on a pre-existing object.

YK/AWB: The case of defining an array-behaving-length object via a proxy on DefineOwnProperty works well.
WH: Is the pseudo-array example a virtual object or caretaker pattern?
AWB: Virtual object
WH: Why did you classify it that way? It's implemented almost entirely in the target, with but one method in the handler.

MM: target.foo() and p.foo() by themselves mean the same? Yes.
Are these still being spec'ed as a Reference Type? (base and a value).

AWB: When you evaluate p.foo(),
The [[Get]] operation returns ?
The [[Invoke]] operation returns ?

(TODO: Ask Allen to revisit)

MM:
[[Get]] value
[[Get]] base


AWB: In the spec, it's handled as a single operation...
A property access and then an invocation... we can separate

YK: This matches my misunderstanding.

AWB: We can trace this to Notification Proxies

MM: Recounts issues

Bookkeeping with invariant enforcement lead to exposure of the target.

YK: I want create a virtual object and you want to create a caretaker, might not be able to do both.

MM: Have to do both.

Issues with the current list of traps that can be resolved with the addition of a new trap that addresses... ?

AWB: Recommends a "call method" trap to resolve

WH: Still  not sure what the motivation is. The behavior of target.foo() and  p.foo() getting different this values (target and p respectively) seems  correct. Turning function dispatch into a fundamental operation rather  than a composite of a property lookup and call won't accomplish much. It  would affect p.foo(), but wouldn't affect p.foo.call(p, ...), and I very much don't want to introduce another gratuitous asymmetry between the two.

MM: In the same way that [[Get]] was designed to make a decision, "Call Method"... (Mark, need clarification  )

WH: Not specific to Call Method, but any case where you have self-referential object (i.e. any place where you do p.foo(..., p, ...)).

AWB: Anything that involves implicit "this"

AWB: If want to control what's passed through, you'd use a p.foo.call, otherwise you'd use a wrapped function.

MM: The default probably should be the proxy and not the target

```js
var q = Object.create( p );
q.foo();
```

MM: When you're inheriting from the Proxy, q is a normal object, does it have the property foo? it does not, recursive get on p and will get the proxy, q is the receiver.

WH: Call Method becomes useless...

MM: [q.foo] does the right [[Get]], `q.foo();` the value of "this" is q

...On the target, a getter for "foo", the handler trap is empty, uses the default, the getter function for "foo". What?

AWB: Unsure,

MM: The handler is given the ability to make a decision, same for Call Method. In the absence of a trap, what does the default do? The default case, "this" should be "q".

...The default, the getter should be invoked for "q.foo" case

AWB: ...Recalls discussion with Tom, re: [[Put]] creating properties on wrong objects.

STH: Resteer the discussion...

#### Conclusion/Resolution

Continue discussion offline.

MM: What we did with hasInstance, we should audit all of the traps and determine if we can replace with @@methods.

AWB: Applied similar approach in the spec.


## Class extends: Throw on non-constructor?

In July, we discussed what would happen when:

```js
class Foo extends Object.prototype {

}
```

The decision of record is: Throw on non-constructor.

AWB: You may have class who's instances inherit on the instance side, not the class side.

LH: classes just simplify the Constructor pattern, and we should keep it that way.

RW: Can't you get the same semantics by omitting the super() call?

LH: No, you'll still get class-side.

...Discussion comes back around to throwing on non-constructor. It will also allow for future extension points by relaxing the RHS of extends.

LH/EA/RW/WH: In agreement.

#### Conclusion/Resolution

Class extends throws on non-constructor (extends null is still valid)


## Map/Set comparator

(Allen Wirfs-Brock)

Issue: Allow Map or Set to have a custom comparator for set, get, has, delete

- Current constructor signature
  - Map(iterator=undefined)
  - Set(iterator=undefined)

- Proposed Signatures:
  - Map(iterator=undefined, comparator="default")
  - Set(iterator=undefined, comparator="default")


**The Comparator Selector**
- comparator must be one of the following values
    - "default" // The default comparator is used
    - "=="      // == is used
    - "==="      // === is used
    - "is"      // Object.is is used
- The default comparator is the same as "Object.is" except that +0/-0 are considered equivalent and all NaN values are equivalent.
- Other values produce a range error. In the future we might allow a user provided object or function.
- Note that all the above comparators do object identity comparisons so map/set hash tables would identity based hashing (for objects) and as long as only the built-in   map/set/weakmap hash tables are available ther is no need to expose the interlay maintained per object hash value
- A future user defined comparator could be used for situations where there is a need to do nonidentity based comparison and ES code-level defined hash functions. Typically such comparisons/hasing would be based upon the values of the object properties. Such a comparator would probably have to expose both a comparison method and a hash method.

LH: Require a string value and throw on invalid

MM: happy with this proposal, any dissent?

WH: The comparators must be equivalence relations. Neither == nor === is an equivalence relation, with == breaking particularly badly. It's neither transitive, symmetric, nor reflexive.
AWB: You'd simply have unfindable elements.
WH: That might work for a multiset but not for something that claims to be a set. You could iterate through the keys and not be able to look up the corresponding elements. If you stick a NaN into such a map, you then couldn't delete it.
AWB: Reduce the set of comparators to "is" and "default".
WH: Rename "default" to "===" but keep its semantics (NaN's are equal, ±0 are not).
AWB, most: Yes.
YK: No. Maps should throw on NaN's.
WH: Why? Why not throw on undefineds?


> Conclusion/Resolution
> Consensus w/ comparators: "===" (currently default) and "is"

> Signatures:
>  - Map(iterator=undefined, comparator="===")
>  - Set(iterator=undefined, comparator="===")
>
> **(Conversation continued, this resolution was discarded)**


ARB: if we have a forth form of equality as "default", we should be honest, name it, and make it available separately

YK: Can we use "===" and disallow NaN as a key?

WH: No.

AWB: Why not?

Comparison of the "===" vs Object.is case, w/r to NaN, +0/-0

MM: Move `Object.is` to `Math.is`?

WH: No, it accepts non-numbers

WH: The longer we debate this, the more I want to just go with current implementations [that don't have a comparator parameter and always do the "is" semantics].

RW: +1

AWB: We should use this unnamed function as default, "default" is a fine name for it. If there is a demand, we can add it in the future.

EA: We can skip the name...

ARB: You might have circumstances where you do your comparison outside of the map.

MM: General comparator argument, are we happy with this considering a hypothetical future that allows arbitrary equivalence class?

WH: As long as it's an equivalence class, if you allow anything else, you run into trouble.


#### Conclusion/Resolution

- `Map( iterator = undefined, comparator = undefined )`
- `Set( iterator = undefined, comparator = undefined )`

- If the second argument is "is", use "Object.is"
- Otherwise, use "==="

```js
Map.defaultComparator( a, b )
Set.defaultComparator( a, b )
```


## Comprehensions/Generator Syntax

(Sam Tobin-Hochstadt)

Dave Herman's proposal: https://gist.github.com/b250d1fad15dbb5f77a5

Existing:
```js
  let array = [x for x of itr if x > 0];
```

switch to
```js
  let array = [for (x of itr) if (x>0) x]
```

BE: ...Recalling that the draft proposal is right-to-left, this proposal is left-to-right.

...Mixed discussion with reminders of current specification.

LH: Would like to also have a keyword identifier to start the expression, maybe yield

BE: no, that must mean the outer function, not comprehension in it, is a generator, and would yield a directly enclosing function* or throw a SyntaxError otherwise.

BE: also, comprehensions must be lightweight syntactically or there' s no point.

WH: Expresses surprise at existence of parenthesized comprehension syntax: `(for (x of itr) if (x>0) x)`. This one returns an iterator? Somewhat unhappy that the base case doesn't work:
[x] returns a one-element array, but
(x) returns x, not a one-element iterator.

STH: This is only a syntactic change. We're not altering previously agreed semantics in any way.

#### Conclusion/Resolution

All agree on RTL -> LTR change.

[WH: Noted a moment after meeting adjourned that this is not merely a syntactic change. We had let clauses to create intermediate temporaries in the old syntax but not in the new syntax — you can't do `[for (x of y) let (z = ...) for (z of q) ...].]`
