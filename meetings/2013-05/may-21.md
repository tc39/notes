# May 21, 2013 Meeting Notes
-----

John Neumann (JN), Allen Wirfs-Brock (AWB), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Luke Hoban (LH), Doug Crockford (DC), Yehuda Katz (YK),
Brendan Eich (BE), Sam Tobin-Hochstadt (STH), Alex Russell (AR), Dave Herman (DH), Bernd Mathiske (BM), Andreas Rossberg (ARB), Mark S. Miller (MM), Tom Van-Cutsem (TVC), Jasvir Naga (JNA), István Sebestyén (IS)

-----

## Agenda 

JN: Going through the agenda
Adding __proto__
Unifying iterator/generator APIs
Talking about getting user stats for test-262...
YK: Prioritize ES6 items. So that we don't get do ES7+ items before

Minutes approved unanimously

## 4.1 Object.freeze

DC: Today Object.freeze throws when primitives are passed in. Suggesting
not throwing when a value type is passed in.

MM: Object.isExtensible would return false for primitives

EA: This would give an inconstint view for primitives.

AWB/YK: (In strict mode) numbers and strings lazily box so the assignment
never fails.

MM: Proxies are allowed to be non extensible and throw away.

ARB: Is the suggestion to lazily wrap primitives?

MM: No, then `Object.isExtensible(7)` would return true because the wrapper is
extensible.

AWB: In most of the new changes we are not doing unnecessary coercion.

YK: The Chrome dev tools, `console.dir(7)`, says "no properties" which
supports treating these as empty objects.

MM: The only observable wrapper is the `this` wrapper in non strict mode.

AWB: In the new spec, `Object.setPrototypeOf(7)` throws.

MM: Agrees violently!

#### Conclusion/Resolution

- DC+AWB to work out the details


## 4.2 WeakSet

Do we need them?

MM: Trivial shim around WeakMap.

YK: Often wanted it

AWB: Adds no new capabilities.

AR: We should not limit ourselves to what is a new primitive capabilities

AI(AWB): add to spec

#### Consensus/Resolution:

- Add WeakSet in ES6


## 4.4 Proxies

TVC's presentation on Notification Proxies:
https://docs.google.com/file/d/0B9iYRsLxmdqUd1RsdHZtazliWmc/edit?usp=sharing

Arguments against:

- shifts the burden from spec writers/implementors to users (need to use shadow target even for non-frozen objects)
- implementors will deal with spec bugs related to invariant violations as they come up

#### Consensus/Resolution:

- Notification proxies are not approved.
- MM & TVC are still happy with direct proxies.


## Proxy Invoke Trap and wrong |this|-binding on built-in methods

AWB: with current default behavior of "get", "Caretaker" will break on built-ins such as Date, because the |this| binding is by default set to the proxy, so the Date built-in method will not find the correct private state.

ARB: Same issue with binary methods

STH: We should add invoke trap but not change the object model

MM: Pleasant to have. Separate from private state.

AWB: used to think this was an issue with proxies, but convinced that it's an API issue: we need to provide default handlers that do the right thing, and which users can subclass. In particular, want a handler that, on forwarding, rebinds |this| to the target.

STH: If you want to proxy a Date method the underlying `this` needs to be a non wrapped Date object.

TVC: previously proposed a Handler API that defines derived traps and fundamental traps, allows you to subclass and inherit correct behavior for derived traps. Can be used as the basis.

AWB/TVC: invoke trap would make it easier to control |this|-binding

DH: Never liked breaking the semantics of [[Get]] + [[Call]]

TVC: there already exist invoke-only properties on platforms with `__noSuchMethod__`

AWB: For a [[Call]] it might be important to control `this` but by the time the [[Call]] is happening you do not know what `this` to use.

DH: ActionScript has a proxy and they do have an invoke trap.

BM: The most common action is to invoke a method.

? : we already gave up on the |this| invariant for accessors: in ES5, if obj.x is a getter, |this| will always be bound to obj in the getter. With proxies this is no longer true.

AI(AWB, TVC): Add spec for invoke. Tom and Allen to work out details of a Handler API that accommodates both "caretaker" (aka forwarding) and "virtual object" use cases.

#### Consensus/Resolution:

- Add invoke trap.


## 4.11

MM: Everybody in this room wants classes and want to post pone private state to after ES6

ARB: Disagrees.

ARB: Based on feedback, people do not want unique symbols, only private symbols.

MM: Private symbols do not work with proxies.

TVC: can still use WeakMap for private state.

DH: The most common cases where true information hiding is self hosting. The stakes are too high for the browser engines.

YK: If "iterator" would be a private symbol, you cannot create a proxy that will work with for-of loops.

ARB: Symbols (unique and private) and relations overlap.

BE: If we add symbols now we are stuck with them.

LH: Future users will be confused. They will not know what to use

BE: Unique symbol is very different from class private syntax.

AWB/MM: If we first did relationships we might not need symbols.

MM: Relationship published but not reflective.

MM: Difference between relationships and symbols: where is the mutability? This forces us to have both relationships and unique symbols.

#### Consensus/Resolution:

- ?


## 4.13 Endianness of Typed array

ARB: Remember it as if we should specify this.

BE: Endianness in Typed Arrays is unspecified.

DH: Keep it open for now... Same system to same system. Using data view, which is explicit, there is no problem.

STH: We don't know what WiiU will do?

AWB: Or they decide not to comply to the spec

DH: WebGL is endian agnostic.


#### Consensus/Resolution:

- Leaving it unspecified in ES6.

## 4.18 __proto__

STH: Recollection, first as data property, then as an accessor. Then discussed the power of that setter. Set the [[Prototype]] in the [[Realm]]. Then Allen wrote the spec. Realized that there were some problems with that design. Roughly the same power as `Object.setPrototypeOf`.

MM: Existence of a setter... as long as we have the extensibility restriction, that is sufficient.

AWB: Why restrict `__proto__` and not other

DH: Objects belonging to a realm is a bad idea.

MM: No more reason to restrict the setter.

STH: Bind `__proto__` setter to the object upon extraction

MM: In SES objects that are non extensible. Not going to remove `__proto__` going forward.

ARB: If `Object.prototype.__proto__` is a data property, making it non writable prevents other objects to use assign to set `__proto__`.

AWB: If `Object.prototype.__proto__` is an accessor that just calls `Object.{set,get}PrototypeOf`.

AR: Best practice on the web is important even in the future.

TVC: If we have `Object.prototype.__proto__` do we want `Object.setPrototypeOf` or just
`Reflect.setPrototypeOf`?

AWB: Makes sense to have `Object.setPrototypeOf` for consistency.

EA: Where do we draw the line (`Object.x` or `Reflect.x`)?

DH: People will need to be able to get this before we have a reflect module.

TVC: We need both because they have different return value (`Reflect.setPrototypeOf` returns boolean success value).

#### Consensus/Resolution:

- `__proto__` is an accessor on `Object.prototype`.
  - The setter mutates [[Prototype]].
  - There is no "poison pill".
- Add `Object.setPrototypeOf` and `std:reflect setPrototypeOf`.


## Naming of @@iterator

AWB: Suffix with $

STH: Opposed to special naming. People don't do this kind of naming convention. Why do we want to introduce this concept?

```js
class Foo {
  *[iterator]() {
    yield ...
  }
}
```

#### Consensus/Resolution:

- No special naming


## Generators and iterators

AWB: `send` is gone in favor of `next(arg)` (only first arg is passed through in `yield*`)

YK: Whether generators return a frozen object or not?

BE: `close` is gone

#### Consensus/Resolution:

- Removed: `send` and `close`
