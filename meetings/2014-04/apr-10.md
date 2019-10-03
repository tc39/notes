# April 10, 2014 Meeting Notes
-----

Doug Crockford (DC), Brian Terlson (BT), Luke Hoban (LH), Dmitry Lomov (DL), Waldemar Horwat (WH), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Hudson (RH), Rick Waldron (RW), Eric Ferraiuolo (EF), Jafar Husain (JH), Jeff Morrison (JM), Seo-Young Hwang (SYH), Mark Honenberg (MH), Caridy Patiño (CP), Yehuda Katz (YK), Niko Matsakis (NM), Ben Newman (BN), Sebastian Markbåge (SM), Mathias Bynens (MB), Rafeal Weinstein (RWN), Mark S. Miller (MM),

-----

## Process Discussion

YK: Revisit new TC39 process. Phase 2?

LH: Phase 2 is experimental

YK: Yesterday, was told Phase 2 is too late for feedback

LH: My sense was that the issue is communication


## 4.10 Modules Feedback
(Brian Terlson)

https://gist.github.com/bterlson/e68d34b691254a640841

(need slides)

BT: This is feedback, not necessarily requests for change.


**Key Points**

- Module + Import Syntax
- Hard to remember which does what?
- Having two import syntax forms seems undesirable

- Conceptual model is a departure from what folks are used to
- Reason for departure is not immediately clear (cycles?)


YK: When I teach modules, I don't teach the `module ...` form at all
...Doesn't

BT: The only way to get a binding to the module itself

LH: Can be used almost as a first-class object reference

YK: Cutting at this stage is not bad, I can champion researching the possibility

CP: This may break the ability to statically verify the module?

LH: If you did:

```js
module foo from "bar";

foo.whatever
```

If `foo.whatever` didn't exist, would be an error

Question about this being in the spec?

YK: The solution is to go back and determine whether or not `module foo from "..."` is necessary or can be cut.

(This does not affect default imports)

AWB/LH: "module" was for the `Math` case?

JM/RW: `Math` case could very well be defined as a default export.

YK: Can use the following to bring in a module solely for side effects:

```js
import "foo";
System.get("foo");
```


WH: How is work divided between the import and the System.get?

YK: `import "foo"` is just the mechanism to ensure the import of a module without specific bindings. For side-effecting modules.

WH: So the System.get is not neeed to bring in a module solely for side effects.

YK: It's there if you want to get a handle to the module.

LH: This is very close to the semantics of the `module` keyword, unless missing something

Discussion re: is the issue superficial syntax?

LH: Maybe (recommended by AWB) `import module Foo from "..."` to replace `module Foo from "..."`?

YK: May not be trivial
... The feedback is that the default export being the main module _and_ a property is confusing.

LH: (confirm)

YK: (walks through explanation)

BT: (continuing)

- Lots of ways to import and export
- As many as 3 different ways you would consume jQuery depending on what jQuery exports
- See: https://gist.github.com/bterlson/e68d34b691254a640841#possible-confusion


```js
import $ from "jQuery";
var get = $.get;

// vs.

import { get } from "jQuery";
```

RW: The first two serve different purposes

```js
var Foo = require("foo");

// and

var Foo = require("foo").Foo;

// The latter is the same as:
var f = require("foo");
var Foo = f.Foo;
```

Discussion about general understanding of node module design

YK: The important point is that if the first is used where the second is needed, user will get an error immediately and will change to the correct form.

LH: As much as I think this may be confusing, I don't want to change it because it I don't want to risk breaking cycle support.

YK: Cycles are not and should not be a thing that the user has to think about.

RW: (prompting to move on)

BT: (continuing)

- Lack of support for dynamic scenarios

BT: want write a function that took a module name as a param, import that module , mutate it and re-export. it would look like importing the original module, but actually getting the modified.

AWB: Can do this at the Loader level

BT: Confirms.

CP: We've been able to prove that this works quite well.


#### Conclusion/Resolution

- Revisit `module foo from "..."` (YK)


## Reviewer sign up



## Revisiting: Initializer in for-in

AWB: New information:

OH: To clarify JSC encountered breakage in the syntax. Only case we've seen is (presumably) author changing their mind about type of loop, so we _no-op_ the expression. No execution at all.
...Unclear about what we're saying about the let case. I would be opposed to leaking the redundant initialiser into for (let blah of/in ...)
... Would be great to eventually nuke it.

AWB: Likely won't have any new information in May?

OH: All internal builds have this change, so we'll have users reporting.

AWB: Do we move forward nuking it, or as a syntax with no semantics? In main body or an annex?

WH: If we retain the syntax, it should do what it has always done. Why should we have it do something different?

MM: If we leave it in, we have to accept the side effects it causes.

YK: Why does JSC want to ignore evaluation?

OH: To discourage its use.

WH: If we wish to discourage its use, we should move the initializer syntax to Annex B (and have the Annex B semantics reflect its historical behavior, not new behavior).

RW: Any code that has been run through JSLint/JShint will not have this syntax, rejected outright.

AWB: Continue to have it removed, allow the syntactic form in Annex B

MM: Another observable thing... no properties, the var decl is visible after the loop
... The only reason to leave it is concern about breaking something bizarre?

WH: Isn't the var always visible? It's hoisted

MM: Yes, but the initialization value being assigned is only visible if there are no properties

WH: What's the impetus to keep the initializer syntax but change the semantics of the syntax to something different in Annex B?

AWB: Easier to put in the syntax with no semantics

MM: Either flush it, or put it in with the old semantics

AWB: Flush it and let implementations do what they do

BT: If implementors aren't getting rid of this, new runtimes will implement to match the web

MM: If we expect all browsers to implement, we should codify. If we expect not to implement, then don't codify. Cross browser content

Discussion, re: comparison to `__proto__`

MM: Other than JSC, any other impl?

BT: If JSC doesn't feel comfortable, unlikely that IE will

AWB: There has only been discussion at Mozilla

OH: We have evangelized, no one heeds

MM: Mozilla evangelized successfully

OH: Performance punishment (log messages for features that need to be discouraged)

BT: Willing to wait for Mozilla to guide

WH: Does Test262 cover this?

BT: Probably, the test will have to be removed.
...Spec should reflect reality.

WH: In favor of taking it out and seeing if we can get away with it. We can put it back in Annex B. The work to take it out is not wasted.


BT: If all three browsers continue supporting, we agree to put it in the spec, at least in Annex B

#### Conclusion/Resolution

- Mozilla willing to ship a patch in nightly for experimentation



## Revisiting: Generator Issues
(Jafar Husain)

Slides: [Allowing-Generators-to-Compose-over-IO.pdf](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/Allowing-Generators-to-Compose-over-IO.pdf)

JH: Generators can't abstract over sync or async IO.

**Two Ways to Iterate**

```js
var nums = function*() {
  yield 1;
  yield 2;
}
```

**Iterable**

```js
function Iterable(generatorFunction) {
  this[@@iterator] = generatorFunction;
}
```

**Creating Iterables**

```js
let nums = new Iterable(function*() {
  yield 1;
  yield 2;
  yield 3;
});
```

**Iterating Iterables**

```js
for(let x of nums()) {
  console.log(x);
}

//...becomes...

let iterator = nums()[@@iterator],
  pair;

while(!(pair = iterator.next()).done) {
  console.log(pair.value);
}
```

**IO Streams as Iterables**


```js
function getLines(fileName) {
  return new Iterable(function*() {
    let reader = new SyncReader(fileName);
    try {
      while(!reader.eof) {
        yield reader.readLine();
      }
    }
    finally {
      reader.close();
    }
  })
}
```

**Iterable Composition**

```js
Iterable.prototype.map = function(projection) {
   let self = this;
  return new Iterable(function*() {
    for(let x of self) {
      yield projection(x);
    }
  });
};

Iterable.prototype.takeWhile = function(predicate) {
  let self = this;
  return new Iterable(function*() {
    for(let x of self) {
      if (!predicate(x)) {
        break;
      }
      yield x;
    }
  });
};
```


YK: Need to address Brendan's objections from yesterday


JH: The crucial problem: the iterator claims to be an iterable and it's not.
...If async generators return Iterables, not Iterators.

WH: How

JH: If I accept an iterable and invoke `@@iterator`, I would expect to get a fresh iterator from each call

MM: everythime you for-of you expect to see "the stuff"

JH: Iterators are claiming to Iterables, which is a lie.

NM: An Iterable creates Iterators, Ite

AWB: An iterator that itself has an @@iterator is an iterable

WH: The distinciton is similar to C++'s distinction between input iterators and forward iterators. Input iterators are not replayable.

JH: This is a leaky abstraction. Two calls to @@iterator on the same iterator type will cause the same iterator to be shared unexpectedly in two different code paths.

Discussion re: the process for handling this.

YK: This should've been presented to the feature champions first.

MM: If these are issues that we're going to address, they need to be addressed in ES6

AWB: If we address it in ES6, the only way is to drop Generators from ES6

YK: The best approach is to first discuss with champions of feature

MM: Let's first hear the issues

YK: Disagree with first hearing of the issue in this forum. Jafar could've been more effective by bringing this to Dave and Brendan first.

WH: I want to understand the issues. This is the best forum we have at this moment.

AWB: This is a long resolved and accepted feature, may have non-optimal characteristics, but agreed on. We're long past changes like this.

LH: Let's focus on the problem, not the solution

(New example. copy from slide when available)

OH: you need `self` to finish somehow after the `break`

JH: you need the `return` semantic
...not a problem in Python, because they have StopIteration. This impl had StopIteration and close and both removed.

LH: (Luke please fill in the comments made re: StopIteration and finally clauses)

WH: Please explain what you're arguing for:

JH: Add a `return()` to generators

LH: return would trigger the `finally` clauses

WH: why in addtion to `throw`?

LH: throw hits `catch` blocks

WH: for-of would call that if you break?

LH: Yes, but that's a separate level of the proposal

AWB: No way to run only the `finally` blocks and not the `catch` blocks

WH: Is there some other aspect?
...Iterator is a once through, cannot go back

JH: Make function * to return Iterable

YK: The most salient use case: break but want to continue to use the generator


AWB: Let's just talk about return, no way to force the finally to run
...Specific issues that Andy brought up need to be addressed. Additionally need to convince why the agreement to those issues was incorrect.

YK: The break is ambiguous

JH: As long as you never use the for-of syntax, you're fine


Proposal:

    - for...of always assume generator creation
    - for...of alwayss terminates generator function


Lost in cross talk...

NM: If you know that iterable creates a fresh iterator, it's very reasonable to close it every time. If you don't know that, then Andy's argument holds.

JH: The value proposition of for-of is that you don't need to work with iterators

AWB: We _could_ add a `return()` method.
... It's a bigger change, but we could make for-of invoke `return()` on exit or completion


YK: doubt we can come to a conclusion on this

AWB: We _must_ come to a tentative conclusion

JH: Confirm, let's try.

MM: Agree with Allen


#### Plausible Solution:

MM:
- continue to have iterators have an @@iterator, classified as iterables
- continue to have generators return an  iterator+
- continue to for-of on an iterator
- we change:
- generator instances have a `return` that when invoked, caused the yield point to take the return path, returning the argument that was provided to the return method. [AWB: actually, needs to return a IteratorResult object:   {done: true, value: returnMethodArgument} ]
- the for-of behaviour is extended with an equivalent of a finally cause that feature tests for presence of return, if present, call it on any abnormal exit from the loop, normal or abnormal. [AWB:no change is necessary for normal loop complextion because the return from the generator body that sets the completion object to {done: true} will run any finally code in the generator body]
- AWB: a 'return' call that  interrupts a yield* needs to be propagate to the inner iterator, just like a 'throw' call.

YK: Recalling Brendan's opposition

MM: The new information: if you want to partially consume an iterator, don't use for-of.

Discussion about process.

RW: (interupt) We can't have a discussion with the champions without considering the issue an dhaving a meaningful record of the discussion. (consider a process note)

LH: Notable, C# does what we're proposing. C# also doesn't allow `yield` in `finally`. No guarantee that we'll run to resource completion.

AWB: No guarantee

MM: No asking for consensus?

AWB: I am. This room needs consensus before we bother including champions

MM: Not a TC39 consensus, a provisional consensus until the champions have been involved.

Discussion about process.

AWB: If we dont decide something, this will float to next meeting.

YK: Proposal: Jafar, Allen, Ben, Dave and Brendan need to work this out offline.

MM: Any dissent from the proposal stated being presented to the champions and allow a decision to be made without further discussion.

WH: Objects to this problem *not* being solved. Object to the status quo of doing nothing. Some solution (such as MM's above) must be found.


#### Conclusion/Resolution

- Unanimous agreement to allow the champions, Allen Wirfs-Brock, Brendan Eich, Dave Herman, Andy Wingo, Jafar Husain, Ben Newman to solve this problem.
- Allen Wirfs-Brock to originate the email for discussion.
- Reference material: https://mail.mozilla.org/pipermail/es-discuss/2013-May/030683.html



## Decorators for ES7
(Yehuda Katz)

- [slides](https://github.com/rwaldron/tc39-notes/raw/master/es6/2014-04/Decorators.pdf)

YK: Presenting aspects of common use cases not yet covered by ES6 `class`.

Knockout.js example (compute the value of a property)

WH: Do you want to use functors to produce functions that are per-class (i.e. on the prototype) or per-instance?

AWB: Per instance wants to be handled in the constructor

YUI example (a readonly property)

LH/YK: Sometimes you want to say a method is readOnly

AWB: No declarative way to describe the per instance state

Angular example

LH: (explanation) when I declare a class, I also want to register it with some other system

ES6 Experiments: Angular

```js
@NgDirective('[ng-bind]')
class NgBind {
  @Inject([Element])
  constructor(element) {
    this.element = element;
  }
}
```

AWB: The "@" used to define an annotation

JH: Point out that this is inert meta data

Userland Classes: Ember

```js
App.Person = Ember.Object.create({
  firstName: null,
  lastName: null,
  fullName: Em.computed(function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }, 'firstName', 'lastName')
});
```


ES6 Experiments: Ember

```js
class Person extends Ember.Object {
  - dependsOn('firstName', 'lastName')
  get fullName() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }

  - on('init')
  - observes('fullName')
  fullNameChanged() {
    // ...deal with the change
  }
}
```

YK: Goals:

- Decoration of methods and accessors
- Decoration of future declarattive property syntax
- modifcation of the property descriptor in addition to its value
- can wr
...need slide.


Property Decorators

```js
function readonly(prototype, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class PostComment extends HTMLElement {
  - readonly
  - on('click')
  clicked() {

  }

  - observes('value')
  valueChanged() {

  }
}
```

Close desugaring...

```js
// after PostComment declared

Object.defineProperty(PostComment.prototype, {
  clicked: {
    value: function() { ... },
    writable: false
  }
});

```

MM: What order?

YK: Bottom up

Memoize

```js
function memoize(...dependencies) {
  return function(prototype, name, descriptor) {
 // ... see slide for specifics
  };
}

class {
  - memoize('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

NM: This is very similar to Python and there is a large history of people doing amazing and terrifying things

MM: The descriptor provided is the descriptor that, in the absense of the annotation, would've been installed on the property?

YK: Yes, only providing the descriptor

MM: Only the descriptor returned by the final annotation is used to install on the property.

AWB: Example:

```js
class {
  - dynamic(function() { ... })
  boringMethod() {}
}
```

YK: Yes, but there is another class annotation proposal better suited

Metadata

(extensive slides)

MM: Order of accessor case?

YK: Statically


Static Semantics
- `MathodDefinition` and `static MethodDefinition` have a list of `DecoratorExpressions` (AssignmentExpression)

WH: How does the decorator know whether you're decorating a getter or a setter from a get/set pair? It's reasonable to request different decorations for the two — decorate the getter as public and setter as private.

YK: It can't. Right now the proposal merges the get/set descriptors into an aggregated descriptors.

AWB: This assumes that the property is created with an aggregated descriptor, but DefineOwnProperty knows to only set the properties provided and doesn't set the other properties to undefined if they're not present.

MM: If you want the accessor to be non-configurable, you have to set them at once.

YK: If you don't aggregate, using a single decorator for a get/set pair is impossible.

WH: If you do aggregate, using a decorator for just a get or a set is impossible. That's a necessary thing to do and more closely matches the syntax.

MM: The getter for "foo" is non-configurable non-enumerable, and the setter for "foo" is non-configurable enumerable, it's impossible

YK: Need to find a solution to disallow creating contradictory descriptors

AWB: Overriding ClassMethodDefinition?
MM: Overriding MemberOfLiteral definition?

(Note: ClassMethodDefinition and MemberOfLiteral don't exist)

More Custom Syntax

```js
class Article {
  + hasMany('comment')
  + belongsTo('user')
  + attr('title')
  + attr('author')
  + attr('body')

  constructor() {

  }

  - dependsOn('title', 'author')
  get byline() {
    return `${this.title} by ${this.author}`;
  }
}
```

MM: The reason not using "@" was for two mechanisms?

YK: Yes

LH: Don't want to put a method decorator on a class level annotation.
... May not be the best solution to this problem. What you want is something declarative.

WH: How do you create prototype properties out of thin air?

YK: Use the + form.

WH: Then you could do this, right?

```js
class Article {
  + hasMany('comment')
  + belongsTo('user')
  + attr('title')
  + attr('author')
  + attr('body')

  - dependsOn('title', 'author')
  + generateMeAMethod

  - dependsOn('title', 'author')
  get byline() {
    return `${this.title} by ${this.author}`;
  }
}
```

YK: No, it's passed the class

AWB: The + form, does it involve the descriptor?

YK: No. The + form takes a class object, not a property descriptor.

WH: The cool thing is that - is composable. It would be weird to not be able to apply it to prototype properties that happen to be created out of thin air

Discussion about the problem faced across instance and prototype properties.

WH: Want declarative properties too.

MM: Use method decorators on computed declarative properties.

YK: Yes

WH: Concerned about syntax ambiguities

WH, AWB: Need to coordinate this with declarative properties proposals


AWB: Careful abt not using this to do things that we may do in language. This is targetted at library designers

MM: Creating this whole "module" thing, but pre-populating it with system modules. Could pre-populate with system decorators.

RW: There is long precedent, appropriate, etc.

RW/NM: Decorators made available in a decorators modules, avoids restricting user code

AWB: We should try to follow the same guidelines that we define with regard to defining library code in the language vs. library code in user space.

MM: All basic descriptor manipulation could easily be pre-populated.

YK/RW: configurable (sets configurable: true), nonconfigurable (sets configurable: false)

LH: Encourage the Angular designers to bring forward their proposal as well.

#### Conclusion/Resolution

- Start a strawman
- work together with others that have class syntax extension proposals
- consider other proposals


## Ecma 402 Updates

AWB: updates need to be made to Ecma 402, but I dont have the time/bandwidth

#### Conclusion/Resolution

- RW volunteers to attempt
- AWB will provide basic summary information


## Preview of asnyc/await
(Luke Hoban)

https://github.com/lukehoban/ecmascript-asyncawait/

A few updates since last time:

1. Ben Newman has implemented async/await in regenerator
2. Async arrows feedback
3. await at top level
4. Is await* needed?
5. Ordering of static + async: static async foo() { }

Discussion of async arrows from https://github.com/lukehoban/ecmascript-asyncawait/issues/13

LH: If we cared about being forward compatible with eliding () in arrows, we could be conservative with [no line terminator] : https://github.com/lukehoban/ecmascript-asyncawait/issues/13#issuecomment-40124678

Several: async(foo, bar) => ... looks too much like a function call.

LH:  If 'async' were 'function', you likely wouldn't say that. Once editors colorize, this will be less of a concern.

WH: you're not proposing to make "async" a keyword?

LH: Contextual keyword

[Discussion of syntax and no-line-terminator-here]

LH: Questions about whether 'await' should be allowed at top level. We could add to the module top level grammar, not the script grammar

WH: If it's usable in modules outside async functions, would await be a contextual keyword inside modules? It isn't right now.

MM: That would be a breaking change from ES6.

?: We could disambiguate in grammar.

WH: No. Is x = await(foo) a legacy ES6 function call or an await call?

LH: Good point, we'd need to reserve "await" in modules in ES6.

LH: Original proposal included an optional "await*" syntax that was sugar over "await Promise.all(...)". It was unrelated to "yield*" which has no meaning in async context.

MM: Using await * that is not analogous to yield * is bad, let's take it off the table.

LH: Agreed - we'll remove that from the proposal.

LH: Current proposal requires "static async" to be ordered that way for async methods.

Several:  Sounds okay.


#### Conclusion/Resolution

- "await" needs to be reserved in module context
- Keep async arrows, and keep the conservative grammar with [no line terminator] annotations
- Tentatively believe await at top level in modules should be okay.


## Closing

JN: Want to thank Mozilla for hosting us and appreciation to Ecma for dinner last night.

#### Conclusion/Resolution

- Unanimous agreement :)
