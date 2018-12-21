# November 28, 2012 Meeting Notes
-----

John Neumann (JN), Norbert Lindenberg (NL), Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Brian Terlson (BT), Luke Hoban (LH), Rick Waldron (RW), Eric Ferraiuolo (EF), Doug Crockford (DC), Yehuda Katz (YK), Erik Arvidsson (EA), Mark S. Miller (MM), Dave Herman (DH), Sam Tobin-Hochstadt (STH), István Sebestyén (IS), Andreas Rossberg (ARB), Brendan Eich (BE), Alex Russell (AR)

-----

## Syntactic Support for Private Names

BE/LH: Concern that the syntax required too much declaration

LH: Can delve deeper when presenting TypeScript findings. We don't have any experience with the impact of this syntax.

AWB: This is where we left it at the last meeting and I haven't had an opportunity to respond to feedback.

Mixed discussion regarding syntactic pains and impact of @-names

LH: Before it can go forward, someone will need to go back and address the existing issues.

AWB: The concern is the double declaration and we discussed adding a private prefix for method declarations.

YK: Alternatively, module bound private names, where declaration  scopes to the module.

Discussion of Kevin Smith's modular @-names proposal...

AWB: The same logic applies to global vs. lexical namespace, and modules.

WH: If you have an @-name somewhere in a module, is it scoped to this module

YK: If you use an @-name it implies binding, and you need to explicitly export

AWB: References an implicit declaration if doesn't already have one?

YK: Yes. (draws example on whiteboard)

```js
module "view" {
  export class View {
    constructor(id) {
      this.@id = id;
    }
  }
}
```


DH: Points of clarification...

1. If we're talking about @-names explicitly scope to a module, no declaration nec. Does that make them private or unique?

- You would have to declare specifically


Reviewing Kevin Smith's gist (https://gist.github.com/3868131) on projector...

ARB: How does this avoid the use of the same name twice?

AWB: You're expected to know your module.

BE: (draw comparison to Go, Dart, CoffeeScript)

DH: The goal is simply to avoid repetitive declaration lists

LH: The notion that declaration of private names as a runtime construct is great, but the syntactic representation needs to be  intuitive to "this is a private thing". So far, this feels at odds with those intuitions

DH: Disagrees, this is a static concept and declarations within are intuitively static.

WH/AR/STH: There is no precedence in the language to scope limited binding forms.

DH: Painful if you're required to list out everything

WH/YK: Sharing private names across classes is a problem that needs to be solved.

DH: Implicit scoping is asking for trouble (gives examples)

AWB: Common case where a symbol only needs to scoped to a class,  for that case, we have a proposal on the table that covers everything except for fields without a lot of redundant declaration. Beyond the scope of a single class, it seems an explicit declaration at an appropriate level is desirable.

DH: Tied to classes implicitly? But allowed to explicitly bound to other scopes

AWB/DH: Clarification on private for classes.

ARB: Would need to hoist the thing outside the class?

AWB: Only if you're contributing to the thing outside of the class.

BE: If you want an outer scope, put a block around it.
...Kevin's proposal seems to have no support here.

LH/AWB: back to the @-names, we left it at "it's too chatty"

LH: I want syntax for privacy, something less

Discussion about import @iterator in classes...

LH: The immediate problem w/ YK's example on board is that it's unclear that @id...
Developers don't want to think about binding names as objects

AWB: (modifies whiteboard)

```js
module "view" {
  private @id; // allows declaring a private name called "id"
  export class View {
    constructor(id) {
      this.@id = id;
    }
  }
}
```
Move private @id...

```js
module "view" {
  export class View {
    private @id;
    constructor(id) {
      this.@id = id;
    }
  }
}
```

BE: This all may be developer and future hostile.

WH: (agrees)

BE: Developers want declarative form to define an instance field with a private name in one step. We separate those two.

WH: I want to preserve the option of saying one thing

BE: That's what Luke wants.

LH: Most developers don't want to think about declaring their names before use.

AWB: Then we can't address private within a class without addressing field declarations in a class.
(moves `private @id` out of example)

WH: We can't allow this to now be declarable in multiple contexts.

LH: The current behavior of @-names is not what developers expect it to be.

DH: I have contradicting experience. (ie. Racket define-local-member-name)

LH: If you had to do this for every property that you're ever going to use...?

DH: (Agrees with Yehuda's complaints)

BE: Then we need field syntax first.

LH/YK/WH: (nods of agreement)

DH: Let's punt on this for ES6. Too late

EA: How to do @iterator?

DH: We can make that work, but this is too large and too late. There are too many questionable issues w/r to declaration for the sake of scoping a name, without creating a field.

MM: Let's not discount ES7 development.

AWB: I disagree and don't think that we should defer on addressing this.

BE: If we wait and defacto standards emerge, then we're too slow.

MM: Intend to advocate:
- postpone explicit field declarations to ES7 and things that might conflict until.

BE: Agree

LH: The concern is @iterator?

standard private names and public names

WH: What is the point of contention for the existing field declaration proposal?

BE/AR: (explanation of constructor declaration and hoisting issue)

BE: (whiteboard)

// Mark's proposal from a year ago
// http://wiki.ecmascript.org/doku.php?id=harmony:classes

```js
constructor(id) {
  private id = id;
}
```
MM: (reiterates rationale)

LH: (whiteboard)
// TypeScript...

```js
private id;
constructor(id) {
  this.id = id;
}
```

AWB: What happens when there is foo.id is in the constructor?

DH: So private is to statically reject programs that appear to poke at things that are assumed private?

LH: Confirm

MM: So they foo.id will refer to the same id field?

LH: Yes.

...Unusable for ES6

DH: Proposes... Exactly the semantics as shown, but syntactically only allows field declaration position in classes and import/export.

WH: Important that you will want to _declaratively_ (not imperatively) list fields. Guaranteed to be there in instances of a class. Those who want to lock down the class further might also want extra class attributes that disallow other expando properties, etc. (not the default case, but something you might want to do).

LH: This is now a different discussion. If we introduce a form (re: whiteboard example)...

DH: A future compatible subset of what we discussed before.

Discussion about the baseline problem: Needing two lines to declare a private field.

YK: Not sure why the example that Luke approves of is different from the given syntax.

Discussion of computed object/class-literal properties, rejected due to
- Runtime duplicate checking
- Static object literal optimization

LH: Computed properties might be worth revisiting

EA: But you can't predict what the property name will be...

AWB: And you still need to go through the declaration steps...

BE/DH: Revisiting previous consensus on unique name for iterator

DH: No revisit on consideration for string name for iterator

LH: Revisit on square bracket computed properties.

AWB: Square brackets are future hostile... Explanation of the [] Reformation http://wiki.ecmascript.org/doku.php?id=strawman:object_model_reformation

BE/DH: (volley re: import iterator)

BE: If there is a standard library prelude in ES6 for @iter, that buys time to fully specify for ES7

AWB: Let me summarize... Take the @name proposal without the declaration.

DH: Understand, but the thing we do now needs a coherent story

AWB: Yes, we provide pre-declared @names and that's the end.

LH: Normal lexical bindings?

AWB: No, @name bindings

DH: max/min: only in property name position

WH: Can you stick an @name on any arbitrary object?

AWB: Just getting rid of declaration

BE: max/min

AWB: Existing @names in spec
- @hasInstance
- @iterator

DH: the whole benefit of unique names is no name clash

BE: This is why we decided that iterator should be public, because there is no way to avoid existing properties. We want new things to have no clash.

ARB: Want to use it for properties to avoid cross cut

BE: Use for stratified traps.

AWB: Any symbol is fine, doesn't need to private

DH: Why would you decide to expose something as visible...

AWB: There are cases where certain properties might want to be extended or customized.

Discussion of reorganization of Meta Object operations in order to simplify Proxy specification.

WH: The class proposals only permitted private properties on instances of the class. It was never the intent to allow you to create a private instance property @foo of instances of class C and then attach it to random objects unrelated to C.

AWB: At the root, symbols - ie. unique names are a powerful tool

MM: Always in consensus that symbols where a means of assigning and looking up a property by a unique, unforgeable name. It was never specifically tied to classes.

WH: Disagree. That's only one of the privacy proposals. Something got lost in translation in the attempts to merge the two privacy proposals. The class one would let you look up a class-private @foo on any object, but only the class could define an @foo property.

DH/AWB: (Discussion of pre-defined fields on class instances.)

AR: Similar to my constructor pre-amble...

LH: (Summarizing) No clash between the use of symbols at a lower level.

YK: Imagine a map literal...

AWB: Hypothetical Map that used [] for key, might use symbols for keys in that map, now there is an ambiguity at access time.

LH: Care about not having private names becoming lexical scopes

AWB, WH: (in response to question about why @'s are necessary) In the past we've attempted to work through several proposals that don't and it never works

ARB: Concern with meaning of @-syntax being dependent on context: sometimes denotes symbol itself, sometimes value it indexes. Might potentially be ambiguous in some circumstances, e.g. modules

MM: State a proposal:
- We don't have in ES6: a private or special declaration form.
- We allow @identifier, that is a symbol
let @foo = Unique();
- After a dot, in property name position, @foo does not refer to a new literal @foo, it refers to the value of the lexically enclosing @foo.
We address Andreas's issue with modules separately.

DH: b/c tied to variable declaration forms, no way to know upfront what one of these names is.

AWB: Clarify...

DH: (Re-explains)

AWB: (refutes)

DH: What I was hoping for was declarative syntax closing in... but realize it's totally generative.

ARB/LH: This is a hack

DH: The syntax looks static but is not at all.

MM: Is the hack a subset of all the non-hack things we want?

DH: This shows the same problems as we discussed earlier.

AWB: This what symbols are...

MM: The "@" is what makes it clear that this is not static

DH: You could say the same thing about brackets.

MM: Always knew @ was dynamic. Opaque, unforgeable and generative.

ARB: (to DH), Once this is defined in a dynamic context it becomes dynamic.

WH: (illustration of perceived hoisting and dynamic rebinding issues)


```js
class C {
  private @name;
  f() {
    for(...) {
      x.@name = 5;
    }
    var @name....
  }
}
```

DH/MM: (discussion of future additions)

BE: We already have with nested function declarations name binding and generativity. Why is it ok for function, but not symbol?

DH: Punning the syntax to make it look static, but it's not.

BE: agreed, that was the fork we took to a bad path, punning "after-the-dot identifier"

DH: People rightly complained early on about static understanding/knowable aspects of syntax. (eg. do I have to look up in scope to know what prop means in { prop: val })

AWB: Most developers will align [] with dynamic property access, vs. .@foo aligns with "static" property name access.

LH: Clarification that we're not talking about the object literal case, but in fact the non-breakable, historic language syntax of property access with []

BE: (Hypothetical future with object [] reformation)

Discussion about implications of hypothetical future with object dereference reformation with ES6 objects.

MM: (to

LH: Moving back to the conservative position to build up from

AWB: Still have symbols

LH: Yes

YK: This is the max/min problem, writ large.

MM: Reminder of workload, wherein ES7 should look like just another phase of development and it's ok to defer to ES7.

AWB: Return to where we were before @-names were introduced

MM: yes

YK: Returning to [iterator]?

Yes.

LH: Still support Mark's proposal (see above)

DH: Only strict mode you get the duplicate error?

MM: true

DH: Could do semantics of strict mode and allow the collision

MM: I don't think this introduces a strict mode runtime tax.

#### Conclusion/Resolution

STH will provide a summary.

- Symbols, unique and private are runtime concepts
- Only additional syntactic support for them in ES6 is the square brackets in literal forms.
- Strict object literals throw on collision.
(Today, duplicate checks happen at compile time, this will no longer be the case when [prop]: val is used in an objlit)

```js
const s1 new PrivateSymbol();
const s2 = s1;

var x = {
  [s1]: 33,
  [s2]: 44
};
```

In this context, within the square brackets: AssignmentExpression

(Re: Symbol constructor binding: http://wiki.ecmascript.org/doku.php?id=harmony:modules_standard)


## Experience With TypeScript

(Luke Hoban)

- [slides](http://sdrv.ms/W21q9e)

Findings...
**Classes: Statics**
  - Statics are used frequently
  - Imperative update is awkward when using an otherwise declarative construct

**Classes: Privates**
  - Frequent asks for Privacy
  - TypeScript added compile-time-only privacy
  - Not quite the same as current private names syntax proposal
    - w/o further sugar private names syntax proposal will feel awkward in practical class

**Classes: Automatic base constructor calls**
  - Missing super calls

**ArrowFunctions**
  - Want thin arrow

**Classes: Decorators**
  - w/ classes available, teams want to use them
  - Biggest block is when existing class library supported some extra "magic" associated w/ class/method declarations
  - No solution yet, not sure what this looks like.

MM: (re annotations) Note that "@" is no longer reserved for ES6...

DH: Point out that we are future proof here.

MM: Let's postpone discussion of the feedback

**Modules**
  - ES6 modules
  - compiled to JS which uses AMD/CommonJS
  ...

**Modules: Namespaces**
  - Two common patterns for large code structure
      1. On demand loaded modules
      2. Namespace objects to reduce global pollution
  - External Modules address #1
  - TypeScript allows internal module re-declaration to grow the object
    - Effectively, a declarative form for object extension with build in closure scope and syntax that matches large scale structuring use cases well.

LH: (the transition from AMD/CommonJS of today to modules a la ES6 is not going to be an easy transition)

Loading order...

LH: When you have circular references, current modules make it appear easy to ignore these issue.

**Modules: "modules.exports =" use case**

- Not addressed in TypeScript
- Critical for interop with existing CommonJS/AMD code
- Supportive of "export =" syntax proposal

```js
// something.js
export = function() {
  return "something";
};

// other.js
import something = module("something");
var s = something();
```

DH: (whiteboard)

```js
export = function() {};
---------------------------------
import "foo" as foo;
foo();
```


**Async**
- Top requested addition for TypeScript is C# "await"-style async
- Generators + task.js help, but likely not enough
  - Wrapping is still very unnatural in any real examples
- But light sugar over generators + task.js would serve
- Feeds into promises discussion - have to standardize the task objects.

(shows example for task.js and identifies "spawn" which returns a promise object)


Mixed discussion about the history of async discussion through generators, promises, Q.async


## Modules Update

(Dave Herman)

(whiteboard)
```js
// Modules looked like...
module X {
  export module Y {
  }
}

// Moved to...
// "foo" doesn't bind anything into this scope,
// just adds to the module registry
module "foo" {
  module "bar" {
    // no more exporting...
  }
}

module "foo/bar" {}

"bar" is not exposed as a property of "foo"

import "foo/bar" as m;

```

AWB: (clarification of his understanding of the original way that nested modules work)

STH: Yes, that was the way, but there was a realization that much of the earlier approach was flawed and these updates lead to revisions.

One important use case for modules is to configure module references, so that libraries can import jQuery (for example), and get the appropriate version of jQuery specified by the page. Further, it's desirable to be able to use different code for the same library name in different context. Originally, the modules proposal managed this via lexical scope, as follows:

```js
module M1 {
  module jquery = "jquery.js";
  module something = "something_that_uses_jquery.js"
}

module M2 {
  module jquery = "zepto.js";
  module something_else = "something_else_that_uses_jquery.js"
}
```

However, this has two major problems:
Inheriting scope across references to external files is potentially confusing, and disliked by a number of people
Once we decided to share instances of the same module, the "parent scope" of a module is no longer well-defined

Therefore, we abandoned the idea of inheriting scope across external references. However, this had two consequences that we did not immediately appreciate. First, we no longer had a method for managing this configuration between module names and source code. Second, scoped module names no longer had nearly as much use as originally.

Thus, Dave and I revisited the design, abandoning the use of lexical scope for managing module names, and introducing module names that could be configured on a per-Loader basis.

DH: The registry with the string names is now where the sharing mechanism occurs.

Loader...

```js
System.baseURL = "...";
System.resolve = function(...) {
  ...
};
```

Mixed discussion...
  - "global namespace" as in "per realm"
  -

ARB: This seems to create a parallel global object for modules. Giving up lexical scoping for one global namespace.

DH: There is no way to get rid of the global object

STH: Yes we tried.

DH: (explanation of registry table)
- Per loader


MM: Separate name registries?

DH: Either are fine

...Provide a minimal set of APIs to allow devs to build there own.
...Sane default behavior
...Default resolution:
    - baseURL + "Crypto/sha1" + ".js" when no config has been done, this is the base default behavior.

```js
// foo.js
export = 42;

// bar.js
export function bar() {
}

// foobar.js
module "foo" {
  export = 42;
}
module "bar" {
  export function bar() {
  }
}
```

```html
<script>
System.baseURL = "assets/";
</script>
<script async>
import "foo" as foo;
import "bar" as bar;
</script>
```

WH: What happens if...
import "foobar" as fb;
(given the above "files")

STH: Answer: fb is an empty object. You also get modules named "foobar/foo" and "foobar/bar" defined.

[WH's question was related to a claim in the discussion that there is no need to have module .js files be distinguishable at the textual level from top-level script .js files]

Mixed discussion w/r loading protocols... and resource loading (files from server, etc) seems to be out of scope?


DH: How is there anything special about JavaScript as the one asset to know about in browsers?

```html
<link rel="prefetch"...>
```

BE: Before imports, prefetch dependencies... but an out of line module import is not a hint, it's a requirement.

DH: Help the browser know in advance about its...

AR: a "prefetch" attribute for scripts? Requests script but doesn't execute.

RW: Until import?

AR: Yes

EF: Don't want to prefetch lazily loaded code later in the program. Don't want to load packages with same dependencies twice.

  Bundle A, Bundle B
  Each share common dependencies. Leads to unbounded number of combinations of pre-build bundles.

  A loader should have a way which it can be told, upfront, about the dependency graph. Allowing the system to know all dependencies in advance, so that it doesn't have to compute transitive dependencies for all, every time—to make smart choices about IO.
