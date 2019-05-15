# March 25, 2015 Meeting Notes       
-----

Brian Terlson (BT), Allen Wirfs-Brock (AWB), John Neumann (JN), Jeff Morrison (JM), Sebastian Markbåge (SM), Yehuda Katz (YK), Dave Herman (DH), Alan Schmitt (AS), Lee Byron (LB), Domenic Denicola (DD), Kevin Smith (KS), Andreas Rossberg (ARB), Brendan Eich (BE), Erik Arvidsson (EA), Adam Klein (AK), Jordan Harband (JHD), Mark S. Miller (MM), István Sebestyén (IS), Jafar Husain (JH), Rick Waldron (RW) 

-----

## 6(iv) A Declarative Alternative to toMethod (Allen Wirfs-Brock)

AWB presents https://github.com/allenwb/ESideas/blob/master/dcltomethod.md.

Object.assign with 2nd arg object literal has a `super` hazard.

`toMethod` was previous workaround, but easy to forget and hard to use with object literals.

YK notes `toMethod` still valuable addition to meta-programming API.

AWB detials further issue of deep-clone vs. shallow-, unresolved (esp. viz `.prototype`).

Discussion of whether we can avoid `toMethod` entirely, not just for this use-case.
MM hopes so, YK dashes hope by assertion -- to be continued later.

AWB observes that object literals and classes handle `super` and other contextual forms fine, by being special forms affording sound [[HomeObject]] initialization opportunity.
Therefore proposes `mixin` contextual-keyword operator to extend object literal special form for this use-case.

NB: `mixin` is postfix operator with what looks like an object literal after it -- not binary operator.

MM: I suggested to AWB that the operator should be named `mixin=`, so it resembles the assignment operators (`+=`, `*=`, etc.).

All object literal syntax on right of `mixin` is allowed, *except* for `__proto__`.

`mixin` does [[DefineOwnProperty]] based on object literal contents (unlike `Object.assign` which uses [[Set]]).

Name abstraction of object literal for later param to `Object.assign` (still permitted, a bug if `super` used) doesn't work:

```js
    let mixins = {...}; Object.assign(target, mixins); // how to do this with mixin operator?
```

Use an arrow:
    
```js
    let mixins = obj => obj mixin {...}; mixins(target);
```

Some inconveniences with classes (see URL). Solution is `mixin class {...}` extended special form.
Throws if left-hand side is not a constructor (spec `IsConstructor` test returns false).
Class body to right cannot include `constructor`.
Gets non-enumerability of methods, static methods, right.

DH: question of user expectation of what's expected "moving" method from object to object.
`this` as dynamically bound, lexically bound for arrows, understood; ditto lexically scoped upvars.
Supposes we would have preferred `super` to be implicit parameter, akin to `this`, but we didn't do that.
JS made method extraction easy, so it's common -- `super` as distinct from `this` goes against grain.
So extracting a method with rebound `super` still wants `toMethod` -- `mixin` doesn't help.

AWB: "if we had been braver, maybe we could have made `super` be dynamically bound... but we didn't."
 (supposes JITs would have optimized away unnecessary super-params)
DH: right, too late -- and who knows if it would have worked...
 but we cannot dismiss `toMethod` use-case for single-method extraction, even with cloning issues.
DD/EA: agree, cannot desugar to existing functions not expressed as method of `mixin` right-part literal forms.

MM: no matter what we do, we can't make ES5-ish method-extracting code continue to work with `super` added somewhere in the method body
DH: This is a regression of expressiveness.
MM: Old library code that does mixins the old way is ok if used only in ES5-ish way.
YK: If `toMethod` available, people will write patches to fix such library code.

Group debates exact method-extraction expressiveness/safety regression, mourns the loss.
Some general sense that we should not throw `toMethod` baby out with bath-water.

ARB: this proposal is very imperative. If we want provide high-level support for mixins, especially with suggestive syntax, then it should be declarative, e.g. like traits.
 e.g. Scala `class Foo extends Bar with Baz...` or early ES6 class proposals
DH: real problem with syntax that hides mutation, misuses `mixin`.
AWB: can bikeshed operator name.
DD: `mixin` is already variously defined by ecosystem, wrong word here.

MM: This is mid-level abstraction, should we do it or provide only high-level traits as ARB suggests?
 plus `toMethod` as low-level -- if high- and low- without mid-, would we need this mid-level proposal?
AWB: "a lot of stuff in JS happens at mid-level."
MM: if high-level needs language extension, doubts mid-level; if mid-level enables self-hosted high-level, may be ok.

DD: if `mixin` misnomer not used, then this would probably be uncontroversial.
(BE: not uncontroversial with ARB)
DH: been down design path of fake object literals (with triangle), hard to avoid kooky outcomes.
DD: really need some syntax for [[DefineOwnProperty]], must avoid connoting "assignment" that runs setters.
MM: if we used `:= value` then value would not be property descriptor, so `:=` ain't right either.

BE: beware justifying more kludges because JS is kludgey. There i said it!

MM: how do you write the trait to be mixed in? Lambda-abstracted form (obj => obj mixin {...}) pleasant.
AWB: dares to write `:={...}` instead of `mixin {...}`, DH calls it the barkeep operator. :={

DH: is this about 1. a collection of properties from which 2. to mutate the target? Need something connoting that double meaning.

YK: re: MM's lambda-abstracted point, can linearize mixins along prototype chain and get `super` chaining to work.
YK shows Ember's `Mixin.create` example (LINK NEEDED) demonstrating this.
Distinct from AWB's proposal, more about traits in JS than about define-properties-on-target mid-level.
DD: back when Chrome Canary had toMethod, I was able to use it to create these kind of mixin-proto-chain things: http://jsbin.com/fepudi/2/edit?html

YK: my Ember-based lambda-abstracted class-extends expression is a bit too much mechanism
BE: or ceremony?
YK: see https://gist.github.com/wycats/f79fe019d4bf29177b6c part-way down.
MM: I like it, what's the problem?
YK: wouldn't it be better to support high-level mixin syntax:

```js
mixin TextSupport {...}
class MyComponent extends EmberComponent with TextSupport {...}
```

MM: don't need more syntax
YK: indeed, could just have

```js
class MyComponent extends mixin(EmberComponent, TextSupport) {...}
```

YK: I'm personally ok with this.

EA/DH: want happy-path "blessed syntax".
DH: but let's not rush to design it here!

MM: with arrow-based lambda-abstraction + YK's `class extends` chaining for linearized `super`-preserving mixins, I don't want `mixin`.
Chaining multiple `super` calls is winning here.

AWB: still leaves a mid-level gap, for define-these-properties-on-this-target.
MM: is cost of plugging this hole worth the benefit, given new syntax very-high costs as noted?
AWB: we need a stage 0 proposal for at least some two of three {low,mid,high}-level ideas.

BE: did we not agree that low-level `toMethod` is needed.
Group: not in light of new news.

DH: advocates `toMethod` as analogous to `bind`
AWB: not so, clone issue
MM: not so, more important: `bind` does not allow `this` rebinding, `toMethod` allows generating new `super` bindings in new cloned methods
If you could write function with free `super` that would throw without `toMethod`, then ok -- but we don't have that
If you were constrained by new syntax to write a factory of super-bound methods, then ok too.
YK: some extra boilerplate.

AWB: want to use concise method syntax since it handles super correctly, somehow
thus the idea of `target mixin { method() {...} }`.

MM: difference between method-with-unbound-super and lamba-abstracted class-extends mixin/trait chaining: latter does not imply `toMethod`
plausible to have low- and high-level that cover the space without AWB's `mixin` mid-level.
MM: kind of want function-bearing-unbound-super to be not callable.
AWB/YK/BE: function* vs. function precedent, but don't want more sigils/function-suffix-punctuators

MM: sketch of special form that allows unbound `super`:

```js
function (super) foo (x, y) { ...super ...x ...y }
```

Factory of methods with unbound `super` uses.
Trying for low-level principled alternative to `toMethod`.

AWB: alternative I prefer would leave function with unbound `super` uncallable, add `Reflect.toMethod` API for people to build libraries.
BE: syntax for low-level is unusual, really prefer API
high-level as ARB suggested (Scala) would be new syntax
MM: lambda-abstracted class-extends relieves me of wanting anything like that high-form
BE: true, although new users and mass-market programmers still "WAT" at the boilerplate
 but it's not that bad here (vs., e.g., the module pattern)

KS: painful if unbound-`super` in functions allowed, because define-properties-on-target requires long-hand unconcise-method syntax
ARB: why not allow `function f(super, a, b) {...}` and (in concise method position) `m(super, x, y) {...}` instead?
MM: Oh!
YK: probably few can track our discussion at this point!

YK: want to avoid "harsh end of life" outcome for ES5-ish libraries.

KS: if we had not bound `super` in concise methods in object literals, then we could use concise methods without wrong-super fear.
BE: is ARB's leading `super` parameter dead?
YK: it's easy to forget and kind of weird
DH: It's like default-final, you have to opt out too much and people forget.

AWB: need some stage 0 proposals, at two of three levels.
YK: not sure we want Babel implementing this yet.
YK: Babel should not implement stage 0, wait for stage 1 or later. Actually use stage-N as flag.
EA: Babel can do whatever they want
DH: We should care, because ecosystem effects, premature de-facto standards

Agreement that Babel (and other compilers) need to flag early-stage stuff, not expose prematurely, message well.


## 6(v) Additional Meta-Properties in ES7 (Allen Wirfs-Brock)
(https://github.com/allenwb/ESideas/blob/master/ES7MetaProps.md )
 
AWB: [presents slides (link?)]

AWB: function.callee: refers to the currently-executing function

MM: What's the use case for `function.callee`?

AWB: Referring to anonymous functions, or arrow functions

MM: Just assign it a binding in the containing scope. Say, a let binding.

AWB: Lots of requests to support callee, even though there are these other ways of supporting it.

JH: New syntax should start "10000 points down"

MM: Possible use case: referring to a concise method from inside the method's body

DH: Or inline event handlers in HTML

YK: I really hope people don't use it in that case

EA: Even for addEventListener, some people want this, since it's common to just pass the function as an argument without naming it

BE: You could have concise methods bring their name into scope, but that runs afoil of the same issue with dual class bindings in ES6 (immutable in the class body, mutable in the containing scope)

DH: There seems to be a disconnect between this committee's confusion over why anyone would need this feature and emphatic requests from the community for its inclusion

YK: The biggest use-case is callback-based APIs where the function needs to use its own identity to refer to itself, say to call `removeEventListener`

DH: That sounds like the best argument so far. Maybe the problem is the name? It sounds fancy, but it's statically always _this function_

MM: How does `function.callee` interact with arrow functions? It seems like it must refer to the enclosing function, just as `this` does

DH: Agree

DD: Disagree

DH: Explaining why arrow functions are treated specially: arrow is not syntactic sugar for `function`, they are a different kind of thing, as close to TCP as possible, unlike concise methods, which are "close to" sugar over `name: function() {}`

DD: But concise methods are not just sugar: see super bindings

YK: People who have tried to replace all functions with arrow functions find that they do not behave the same

MM: The analogy for arrow functions is to blocks, not functions

JH: Is "block" really a good metaphor, given that ES5 did not have any block scoping?

MM: That's the best I've been able to come up with

YK: It's really close to blocks in Ruby

BE: "function" is much too long. Maybe there's another keyword we could use? "function" is both too long, and confusing due to arrows.

DH: Do we even want this to refer to arrow functions, syntax aside? I say no.

DD: But if the main use case is event listeners, then that doesn't help

DH: Major problem is that referring to the arrow function is a refactoring hazard (e.g., moving it inside a forEach will result in a different answer). But maybe the argument is that it's a reflection feature, and reflection features are already refactoring hazards.

YK: There are two kinds of callback-based APIs in JS: synchronous and asynchronous. In the sync case, you want TCP. But for the async case, you don't.

JM: The explanation to the average programmer can't be "because TCP"; people won't understand that

MM: Before arrow functions, programmers constantly used `this` inside a callback and expected it to refer to the `this` of the containing function. The reason I explain arrow functions as blocks is that it's just "I want to run this code as a callback", with all bindings identical.

JM: I think the problem is just that I've tried to explain TCP to people

YK: Don't try to explain it that way. Maybe the problem is that we only have fat-arrow (designed for the synchronous callback case), but people want something that also works in the async case (which could have been thin-arrow).

DD: Rethinking, due to the forEach case. Maybe I do want `function.callee` to refer to the outer function.

YK: I think we need two things: one that refers to "this function" (including arrows), and one that does not include arrows.

ARB: Where does that end? Why not add more levels of function?

YK: We already have these two levels that have different behavior (arrow and non-arrow)

DD: Is it fair to say the argument is between 0 and 2 ways of refererring to a callee?

MM: Do we have any quantification of the need for this field?

YK: It used to be a big deal for me in ES5, but I got over it

DD: My problem with having 2 ways is it adds a cognitive burden whenever I want to use this thing.

YK: I agree that it's a cognitive burden to have 2, and that that may point towards having 0

AWB: I'd make an argument for 1: it refers to the innermost function, whatever kind of function it is (including arrows)

MM: This whole discussion is the result of an anti-pattern, that there's a requirement to refer to function identity to interact with, e.g., `addEventListener`, instead of having it return a token

YK: `addEventListener` is a void function, so it could be fixed in DOM

DH: Someone would have to do that

DD: setTimeout already returns a token, and in Node it's the right thing, rather than a number like on the web

MM: Caja actually wraps setTimeout and has never run into compatibility problems (jQuery works fine)

...moving on with AWB's slides...

AWB: function.count to find out how many arguments were actually passed.

ARB: Why are we working on this now? We don't have much experience with how people are using ES6 in the wild.

DH: Now is a good time to explore this space. In strict mode, we got away from using magically-scoped variables for introspecting on certain kinds of things. `new.target` provides the blueprint for a new way to expose these things, so it seems reasonable to consider adding such things with this new syntax.

AWB: ES6 provides lots of new ways to pass arguments, but doesn't provide an easy way to answer the question "how many arguments were passed"? This is useful for overloading based on the number of arguments. Using `...args` and destructuring is a pain.

DH: Why not `function.length`?

AWB: To avoid confusion with the `length` property of Function instances

ARB: Don't we have the same issue with arrows again?

AWB: Yes.

DH: We could make each decision at a local maxima, and end up with a completely confusing set of cases. Another option would be to have `function.callee` be a record, with other properties hanging off of it to ensure consistency between the different properties.

DH: The two concepts are "nearest enclosing function" and "nearest enclosing callable thing"

AWB: next up, `function.arguments`: the actual argument values

MM: How is this different from `arguments`

AWB: You get a fresh array each time you ask for it

DH: Why?

DD: It could be a frozen array and always return the same one

MM: I still don't understand what advantage this has over `arguments`?

AWB: It's a real array

YK: Use case is to name individual arguments, and then pass `...args` to some other function

MM: But why couldn't you use `arguments` for that case?

AWB: The difference is that it's a real array. Also, we're walking the line of whether `arguments` is considered deprecated.

DD: And it works in arrow functions.

DH: I agree with AWB's vision that `arguments` is deprecated, and that's the argument that makes `function.arguments` make sense

MM: What is the evil of the strict arguments object such that we would want to deprecated that and not deprecate this?

DH: Strict arguments is TCP-violating

MM: So is `function.arguments`

DH: I admit it's not a strong argument

JH: How bad is using `...args` and having to use destructuring on the next line?

EA: You lose documentation of what the actual arguments are expected to be.

DH: Options are you use one of 3:
    1. ...args and destructuring (bad for documentation)
    2. named params and ...args (have to do math)
    3. `arguments`

AWB: But won't `arguments.length` materialize the arguments object?

BE: Not in Spidermonkey, or in V8

YK: If we're going to go with `arguments`, then we need to stop saying it's deprecated

DH: So which parts of `arguments` are still deprecated? We all agree that `arguments.callee`, `arguments.caller`, and `Function.arguments` are deprecated.

YK: Indexing `arguments` still seems like a bad practice in ES6. Spread is OK, though.

DH: That is not a coherent position.

YK: The thing that's not OK is treating `arguments` as first-class value

DH: That seems like a very fine distinction

DD: Can we pop the stack here?

AK: The question about whether we can do indexing seems separable from whether to call the array-like thing `arguments` or `function.arguments`

DH: It's important to get clear on what to say about `function.arguments`, and what to say about deprecation

BE: I think it's fair to say we don't want to spend all afternoon on this

...break...

## Initial Value Passed to first call of a Generator next function

```js
function * gen(a)  {

}

var g = gen(1); // this?
g.next(1); // this?

```

AWB: `function.next`: the current yield result

MM: Of all of these, this is the one I find compelling

AWB: These don't have to all be in a package. We can do one of these without the others

MM: I think we should do that with this proposal and move it through the process

YK: Can someone state the compelling use-case?

JH: A good usecase is a lexer. You need to get access to the first character that was passed to `next()`.

...next slide...

AWB: `function.thisGenerator`: current generator instance

MM: If you want this, you can wrap your generator function with another function, bind the generator in the function scope, and then you can refer to that from within the generator function.

YK: But what's the use case?

MM: That's a separate question, as the above suggestion allows referring to the generator if there are use cases

BE: Is this something people asked for? It doesn't seem that important.

...next slide...

AWB: `export.name`: current module identifier

DH: Do we need `export.name` if we have `import from this`?

DD: I thought it was `import from this module`

DH: Don't like compound keywords

YK: I'm still opposed to `import from this`.

AWB: Other proposals: `import.this`, `import.meta`

DH: Let's discuss separately.

...end of slide deck...

AWB: So I'd like to put all these at stage 0.

MM: I propose we make `function.next` stage 0 and leave the rest.

DD: I got the impression that we rejected the rest.

AWB: That's not my impression

MM: What does stage 0 require?

DD: Only being not categorically rejected

[discussion of how to handle organization of stage 0 proposals; how to make it clearer which stage 0 things we'll do and which we won't]

MM: So can we list these as rejected proposals and bring them back later if we change our mind?

AWB: I think that would be a mistake. That seems too strong for these.


#### Conclusion/ Resolution

- `function.next` to be split out into its own proposal
- AWB to keep the rest alive for now at stage 0 



## Report on 402
(Rick Waldron)

RW: Complete, barring any editorial bugs.

- Has been reviewed by Norbert Lindenberg and Andrée Bargul.
- Assembled a whole team to read the extensions to the spec.
- Added 402 repo to Github. With same proposal pipeline as 262.

Making a motion for acceptance/ratification/whatnot of 402 2nd edition... forward to the ecma assembly, subject to the rf opt out...

Unanimous approval to forward this to TC39 rftg.

TC39 vote 6 in favor. 1 abstains (JH, Netflix)

IS: Shall 402 be submitted for ISO fast-track? Or leave it ECMA-only like the first edition?

JN: Send it to ISO and see what they say

#### Conclusion/ Resolution

- Submit to Ecma GA
- Submit to ISO


## 6(vi) Function Bind and Private Fields Redux (Kevin Smith)

https://github.com/zenparsing/es-function-bind
https://github.com/zenparsing/es-private-fields

KS: [presents slides (link?)]

KS: Abstract references recap.

KS: Problems with combining the various use cases. Instead, provide two different syntaxes, one for function binding and one for private state.

KS: Part One: Function Bind via `::`

```js
function f() { return this.x }
let bound = ({ x: 100 })::f;
bound(); // -> 100
```

DH: This could be really nice in that you don't have to use `bind` anymore

KS: `::` doesn't take care of all of `bind`: only binds `this`, not any arguments

ARB: Syntax somewhat in conflict with `::` in C++, inverts the meaning of '::' vs '.'

AWB: Prior to ES6 there was a lot of confusion about what `this` means. With ES6 classes (and arrow functions) we made the story a lot cleaner. Maybe it is better to let this cool down a bit and see how things turn out in a few years.

MM: This is only an argument against the infix operator.

DD: Also, the example uses `function` instead of being a method in class.

KS: Unary Function Bind

```js
::console.log  // -> console.log.bind(console)
```

AWB: This seems perfectly reasonable

MM: We could do the prefix notation without the infix notation

YK: What's the pedagogy here? When should programmers use `::`?
MM: If you're calling a method, use dot. If you're extracting a method, use `::`
YK: Why didn't we fix this with classes?
MM: That's water under the bridge.


KS: Back to the infix operator. If the function is immediately called, then I'd like to be able to desugar to call:

```js
obj::f();
// -> f.call(obj);
```

DD: What about with `new`?

KS: Don't do this desugaring with `new`

AWB: [back to the unary operator] I like this because it's an operation on a reference

MM: Can you write other expressions on the right-hand-side that evaluate to a reference?

AWB: DH's prior proposal allowed it

MM: The case I can think of is a variable reference, inside a `with`, that's resolved to an object property

AWB: No, that won't work in this case because it's not [...the right kind of reference?...]. The base is an object environment record in this case.

KS: Can this be a syntax error if it's not a property lookup?

DH: Why not require it to be a member reference?

MM: I don't see any reason not to statically constrain this to property lookup, either dot or square bracket

AWB: Some concerns, will consider offline

KS: [new slide: Bind, The Big Picture] the infix operator is an alternative to the adapter pattern or extension methods.

MM: `this` should really be passed as the first argument.

KS: The implicit `this` is really the first argument.

DH: Worried about the additional overhead this syntax adds to the language [referring to the infix operator]. Having to make the decision between `.` and `::` seems problematic.

JH: And in C# you always use `.`

YK: The alternative is you use an adapter first, and then `.` the rest of the way to the right

JH: Yes, you can do this with an adapter pattern, but then you need to build an adapter layer and decide how to do it.

BE: The infix operator seems attractive for extension methods

JH: I agree that it's sensitive to add new syntax, but this has been done in other languages and people adapt to it

DH: The way forward seems to be to get large-scale feedback about using this [maybe from Babel users?]

DD: React developers using Babel are already using the existing `::` implementation, and filed bugs when KS changed the semantics

BE: Agree with DH, need more data to see how users like it

EA: What AWB said earlier about the use of `this` rings true, ES6 just changed the uses of `this` (with classes and arrows)

[lots of discussion of other tokens: `->`, `.:`, `.?`]

#### Conclusion on bind
- Get more feedback from users of Babel



## Part 2 of KS presentation: Private Fields

KS: Preface: this conflicts somewhat with decorators, in that it makes use of `@` for its syntax. Will focus on the semantics in this presentation.

KS: [slides]

JM: Is there something essential to private fields that makes it important that private fields are created at construct time and guaranteed to all be present on instances?

MM: It's important because you'd like to maintain invariants in your implementation, invariants you don't get anyway for public fields [due to them being public]

KS: Private fields should not write through the prototype chain [example from slides]

AWB: This just fails because the imposter object doesn't have the private field, nothing to do with prototypes

KS: Private fields should also not read through the prototype chain

AWB: It seems like that just falls out of the fact that the field isn't present on the receiver

JM: Trying to find common ground between private fields and initializers for instance properties

KS: Two main options around initialization: either initialize all private fields to `undefined`, then initialize them one by one, or run all initializers first, then create and write all fields at the same time. In the latter case, referring to `this` in the initializer expressions must be disallowed.

[lots of discussion about initialization, resulting in punting and moving on to discussion of how these things work after initialization]

KS: [presenting spec on github] https://github.com/zenparsing/es-private-fields

[discussion of the use of `PrivateMap` in the spec language]

MM: The PrivateMap is not reified in the spec text, which should avoid any complaints related to WeakMaps and the transposed representation

KS: Initialization: current spec text takes the "batching" approach discussed previously

AWB: Initialization of private slots involves walking through the inheritance hiearchy, gathering private field requirements at each level, and that gives us the necessary information for allocation. Then there's a staged initialization, where at each base class, the initializers end up running before super returns.

YK: Worried about return-override from super constructors. You have to add the private fields to whatever object is returned from super

ARB: Can we get away from the details of the initialization and step up to finish KS's presentation?

KS: Brand checks pass once initializers have run for a particular level of the inheritance hierarchy.

YK: Due to return override, you can't simply walk the inheritance hierarchy to gather the set of private fields.

AWB: It's important to me that the private fields are atomically allocated across the whole inheritance hierarchy.

BE: But you can't do that with return override.

BE: We could decide that return override is incompatible with these private fields.

BE: Or we could just figure out a way to let private fields be added each time super() returns

AWB: How do these things interact with proxies?

MM: You get a type error if you try to look up the the field on something that fails the brand check, and proxies fail the brand check.

MM: Another advantage to this proposal is that you can still add private fields to frozen objects.


--- MM branches off to talk about initializers, asking for them to initialize instead of assign, which would allow data-dependent const fields --

[discussion of possible constructor syntaxes for initialization]

YK: Worried that moving declaration of instance properties (private and public) into constructor would break decorators

MM: But then how do you decorate fields whose initialization is data-dependent?

YK: That's not a case that comes up very often.


DD strawman:

```js
class Point {
  constructor(x, y) {
    private @x = x;
    public y = y;
  }
  
  get x() {
    return this.@x;
  }
}
```

#### Presentation continued on [next day](mar-26.md)
