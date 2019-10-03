# March 26, 2015 Meeting Notes
-----

Brian Terlson (BT), Allen Wirfs-Brock (AWB), John Neumann (JN), Jeff Morrison (JM), Sebastian Markbåge (SM), Yehuda Katz (YK), Dave Herman (DH), Alan Schmitt (AS), Lee Byron (LB), Domenic Denicola (DD), Kevin Smith (KS), Andreas Rossberg (ARB), Brendan Eich (BE), Erik Arvidsson (EA), Adam Klein (AK), Jordan Harband (JHD), Mark S. Miller (MM), István Sebestyén (IS), Jafar Husain (JH), Rick Waldron (RW)

-----

## Private state continued

KS: the "nested stuff" part of the private state implementation might be more controversial, but please note that it's separable.

KS: Modified the V8 self hosted Promise to see what it would look like with "private state"

AWB: the most interesting use of private state is in the typed array hierarchy, especially in terms of subclassing

KS: presents https://github.com/zenparsing/es-private-fields/blob/master/examples/promise-before.js

KS: After: https://github.com/zenparsing/es-private-fields/blob/master/examples/promise-after.js

ARB: The implicit `this` in `@name` is not something we have done before in JS.

BE: CoffeeScript set the precedence. Are you suggesting that you always have to write `this.@name`?

AWB: The semantics does not change.

DD: The name is in a lexical scope

AWB: We could do the same with non private. That would not be a good idea.

JM: should there be symmetry between private and public properties?

BE: it's part of our job to make the ergonomics sweet and competitive.

KS: moving on to helper functions. If the helper function itself needs access to the private state, where can I put it? I can't put it outside the class anymore (like in promise-before.js), because then it doesn't have lexical access to the private state. So that seems to want to push that function declaration of the helper function into the class body. In the example here I'm mixing my proposals (with `this::_resolve(x)`), but you could have done it just as a function.

ARB: Might be cleaner to introduce @name methods. Both static and prototype methods.

JM: three alternatives here. What you have here, a lexically confined closure. Or, a static method that is "private". A third way is a private instance method (on the prototype).

KS: so you're talking about this kind of setup

```js
class C {
  @x() {
    C.@x();
  }
  static @x() {

  }
}
```

I tried to go down this path. It seems weird that I have to do `this.constructor.@y()` (or C.@y()`) to call the `y` method from `x`.

AWB/ARB/others: no, that seems perfectly fine to me.

BE/AWB: The @x method is on the prototype.

MM: The visibility is that it is only visible inside the class body.

AK: I don't think `this.@x()` means the right thing, because we didn't want private field access to go through prototype chains.

(general acceptance that this is a deep issue)

MM: I now think they should be on the instance

DD: on the instance is bad ... memory-inefficient ...

BE: implementation doesn't have to work that way, even if semantics do

DD: I see ... so since they're private, we can lock them down enough that such an optimization is not observable

EA: These methods do not need to be properties anywhere.

MM: even in the weak map explanation, it's not like the closure pattern with separate-method-per-instance; it's a separate weak map per instance, but each of those weak maps points to the same function object.

(discussion of how this is related to vtables)

ARB: hold on, if this is private, why do you need a vtable at all... they're completely static

AWB: well ... what if you reify them ...

MM: reifying them is not what we're considering today; that'll be a much bigger fight.

ARB: it's basically a private scope.

MM: Compile time symbol table.

AWB: When you start to combine subclasses the tables makes things simpler because you can combine these tables.

ARB: not for methods ... for private methods it completely doesn't matter

BE: yes, it boils away. When we're talking about vtable it's purely about future things like interfaces

ARB: doesn't even matter for interfaces...

EA: what about call and apply? `this.@x.call(otherThis, ...)`

ARB: I think you can do that. And that's part of why I don't think we should allow a shorthand that omits `this.`

AWB: why would you ever do that?

DD: can you use super inside private methods?

MM: The home object for a `@m() {}` method needs to be the prototype (`C.prototype`) and similarly the constructor for a static at-method.

JM: Would it make more sense to think of these as functions that are set as instance properties during the instance property initialization.

MM: We want class private

ARB/MM: The --weak-- map explanation vs the private symbol is that the map case the function is associated with the object ....???

AWB: Or the vtable explanation.

EA: What if you had C.

```js
class C {
  @a;

  m() {
    let somethingElse = C;  // <--
    somethingElse.@x();

  }
  @x() {
    C.@x();
  }
  static @x() {

  }
}
```



ARB: that is a very good point; I think it means we can't have the same name as both static and instance.

MM: It would force internal polymorphism; it's not good to pay the cost of this when it's essentially accidental.

ARB: given a random object `o` and you do `o.@x` on it, you have no way of knowing which type of private that is referencing statically (i.e. instance method private or static method private or instance data private), and that defeats the point.

MM/ARB: Do not allow them to have the same name.

DD: now this is bizarre. They act too different from public methods/public static methods.

EA: Kevin's original (nested declarations) idea is seeming more attractive after this exercise.

KS: (presents original nested declarations idea)

```js
class C {
  @a;
  function xHelper(obj) {
    obj.@a;
  }

  m() {
    xHelper(this);
  }
}
```

(general admiration)

ARB: Weird about this is that it looks like a public declaration.

AWB: In this case you are not talking about dispatch.

ARB: at least it should not be function, maybe `private xHelper() { }`

KS: the concern is that if you use `private` then people would think it's a private method...

BE: `private function xHelper() { }` might help

DD: Not intuitive to programmers coming from other languages. People already use external helper functions.

KS: Feedback has not been too positive. The external helper function is used in Python for example.

ARB: fear that most programmers will want to use method syntax and will make helpers public just to get that


## Immutable Records, Tuples, Maps and Sets
(Sebastian Markbåge and Lee Byron)

https://github.com/sebmarkbage/ecmascript-immutable-data-structures

LB: ImmutableMap reutrns a new Map when you mutate them.

LB: Wants value semantics. Especially for `==` and `===`.

MM: As well as `Object.is`.

BE: "NaNomali"

LB: Wants deep equality so that a Map of Maps or vector/records works too.

LB: Wants to work across realms and shared memory for workers.

LB: Based on Typed Objects.

Wants new syntax.

```js
const xy = #{x: 1, y: 2};
const xyz = #{...xy, z: 3};

const xy = #[x, y];
const xyz = #[...xy, z];
```

LB: Record is the realm specific constructor/wrapper (like String)

BE: For value types we didn't want the wrappers.

JHD: What happens if you pass these primitives into the `Object` function? (like `Object('string')`)

LB: Works the same. It creates a wrapper of the correct type.

EA: Are the keys always sorted?

LB: Wants to allow implementations to do whatever what they want but...

MM: I think you are doing the right thing since then the comparison is cleaner.

AWB: Module namespace exports are sorted with the default comparison.

ARB: When you implement immutable maps you do not use hash tables but ordered trees.

MM: You cannot define an order for opaque object.

MM: Can an immutable map refernce a non mutable object?

ARB: You can specifiy that keys have to be deeply immutable.

LB: Would like to have same keys as in ordinary maps.

ARB: Then how would you implement this?

LB: You would use a hash function/method and a trie. The hash is optional. That is why we want it implementation dependent.

LB: Would have to define what order to use.

ARB: That means undeterministic behavior.

LB: In immutable.js the order is part of the equality.

MM: If you want you could canoninicalize the order before comparing.

LB: Most people do not depend on the order.

MM: You could do insertion order and make `===` be equal but make `Object.is` return false if the order is not the same.

ARB: Another option is to use value order where possible but use insertion order otherwise.

MM: You could use hash consing.

ARB: Does not help for ordering.

MM: Need to make sure that you do not use the real physical address, due to mutually suspicious code in the same realm. Need to be unguessable or use the hash to achieve information about code it should not know about.

YK: Maybe you want lower level primitives so that user code can implement this.

LB: No. We need to define the semantics so that VM can optimize this.

LB: A VM can use shared memory. It can use low level structs and memory to achieve.

ARB: A VM can have efficient per object hash codes.

JH: Also syntax.

AWB: Per object hash code is the big missing building block that we do not want to provide.

EA: It is not possible to make a user exposed hash code that is going to be as efficient as the internal hash code which might just be the address of the object.

MM: For ordering you might get away with a not very good pseudo random generator.

LB: It seems simpler and good enough to just stick with the insertion order for immutable maps.

MM: Implied cost. The precise equality would have to take the ordering into consideration.

LB: Batteries included philosophy.

AWB: You can still have a standard library that can be implemented in JS.

LB: Libraries can always provide more data structures.

AWB: I don't think we should provide new libraries without providing the primitives that allows these to be implemented in user code.

BE: What primitives are missing?

LB: Assuming we have typed objects and value types, value semantics

MM: Cryptographically safe pseudo-random numbers as a hash code.

DH: Sharing immutable objects across workers.

MM: Cryptographic pseudo random number generators.

MM: The number has to be large because collision is fatal

LB: Another issue is that we are creating a new value type for every record.


#### Conclusion/Resolution

- Identify the requirements.
- Progress report at a future meeting.


## Composition Functions

(Jafar presents slides)

(Lots of discussion. Notes lost to a grue.)

#### Conclusion/Resolution

- Wide agreemeent that async functions are worth generalizing
- Wide agreement that promises are the dominant use case and should be the default
- Tricky problems with hoisting semantics, need more time to woodshed that problem
- async/await is wanted/needed so we should urgently figure out if this can ever be made to work

(discussion about wtf woodshed means - behind woodshed = to kill, to/inside woodshed = to spank)

## Additional export __ from statements

(Lee Byron presents https://github.com/leebyron/ecmascript-more-export-from )

General agreement, suggestion to add Babel transpilation and fill out spec text, bring back at next committee meeting for a fast-track through stages.

## 64-bit math

(Brendan Eich presents https://gist.github.com/BrendanEich/4294d5c212a6d2254703)

Moves to stage
