# January 27, 2015 Meeting Notes    
-----


Brian Terlson (BT), Jonathan Turner (JT), Jordan Harband (JHD), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jeff Morrison (JM), Sebastian Markbåge (SM), Erik Arvidsson (EA), Peter Jensen (PJ), Yehuda Katz (YK), Dave Herman (DH), Waldemar Horwat (WH), Alan Schmitt (AS), Michael Ficarra (MF), Lee Byron (LB), Dmitry Lomov (DL), Arnaud Le Hors (ALH), Chip Morningstar (CM), Caridy Patiño (CP), Domenic Denicola (DD), Mark S. Miller (MM), Kevin Smith (KS), Andreas Rossberg (ARB), István Sebestyén (IS), Sam Tobin-Hochstadt (STH), Brendan Eich (BE), Jafar Husain (JH)


-----

## Welcome

JN: No changes to agenda? We can change the order as we go

JN: Any objections?

JN: No objections

JN: Previous meeting minutes?

#### Conclusion/Resolution  

- Approval of agenda
- Approval of minutes


## 4.1 ES6 End-game schedule review

(Allen Wirfs-Brock)

(include link to slides)


AWB: June, Ecma GA meeting:

- Approve standards
- Meet twice a year, next in Dec


AWB: We want ES6 to approved in June this year. What does it take to achieve that?

AWB: Final editorial works needs to be done. Takes a couple of months. Needs to start April 1st.

AWB: Before that TC39 needs to approve the ES6 spec. March 24-26 meeting...

Content is in slides...

IS: Question about different dates and document versions. His problem was that the documents for opt out are not the final documents that go to the GA for approval.

AWB: Will get to it on the next slide

AWB: Everything I say here also applies to ECMA-402 (the i18n spec). Rick Waldron is responsible for that and it needs to follow the same milestones.

RW: This will not be a problem for 402

IS: The opt out period needs to be over before June 17 latest, because that is the day of the Ecma GA, when Edition 6 is up for approval. This means that theoretically we may start the opt-out on April 17 the latest. In practice of course that is too late, we should find an earlier opt-out starting date.

IS: Anticipate large changes?

AWB: No, I hope not.

DH: Had some module related issues but did not want to bother Allen since he was busy related to subclassing issues. If we don't resolve these issues then we will not be done.

AWB: Does anyone expect to have issues that will cause the spec to slip?

DH: There are issues that need to be addressed, regardless of consequence.

AWB: Need to resolve those issues at this meeting. These dates are really hard deadlines.

DH: Can try to assemble a list of these issues this week.

IS: Is the opt out going to be on revision 31 or the final spec?

AWB: Can we do that with the final? Can we start the opt out on April 1st?

IS: Why don't we start the opt out on Feb 20, and use whatever spec draft we have then?

RW: Why can't the opt out start on Apr 1st.

IS: Would also work. But earlier is better.

RW: Gived more time to wrap up more issues.

AWB: It does not really change much.

AWB: 2 things going on: 1) TC39 approving the spec.

AWB: Feb 20 gives us (TC39) 30 days before the f2f meeting to review the last spec. *Feb 20 is the day!*

AWB: We don't need multiple opt outs. So the opt out period can start on Feb 20th (instead of Feb 1st as in the presentation).


## 4.3 ES6 draft status report
(Allen Wirfs-Brock)

(Same slides as previous item)

AWB: Three drops since last meeting, changes in the slides as well as http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts

AWB: The HTML comment extensions in B.1.3 need to be reviewed against what browsers actually do.

WH: I'm validating grammar from main body of the standard (and found some minor bugs), but not going to validate browser extensions.

DD: I will try to do that, maybe.

EA: If we add the module tag (script[type=module]) do we need to keep this open?

DH: We can always remove the forbidding phrase if we see a need for it.

MM: Want to forbid in strict mode...

AWB: Not possible.

MM: Ok.

JHD: Browsers (IE vs Safari vs Chrome/Firefox) do different things in regards to HTML comments. In fact, even a single browser does different things depending on where the source code is coming from (script block, eval, console, ...)

MM: if you don't require [HTML comments] or forbid it, it's optional, [which makes it hard to fix in modules later]

WH: I'm objecting to have different behavior for browser ECMAScript vs non browser ECMAScript.

DH: The following program is valid when HTML comments are not supported
    
```js
x
<!--y-->
z
```

MM: This is enough to show that there is an XSS issue. If the defender assumes HTML comments works or not.

WH: You can't go down the combinatorial explosion of different browsers' or different contexts' parses. The only sane thing is to reject this of you are writing a validator.

MM: Waldemar do you agree with if we cannot prohibit it everywhere we have to allow it everywhere?

WH: No.

MM: Would it be more predictable if it were allowed everywhere?

WH: Not in practice because existing browsers differ in parsing the extensions. Regardless of what we enact for ES6, for security purposes you have to handle the browser diversity anyway.
    
MM: I give up.

YK: You can use CSP to prevent eval.

MM: I think the current spec is fine. It is no worse thatn the current situation.

AWB: We need some eyes on this grammar.

#### Conclusion/resoltuoin
- Use the new annex spec for html comments as in the latest draft
- Need to review the grammar




AWB: 
    
```js
let x = expr
```

gets to `x`, captures that identifier, then evaluates `expr`.

ARB: Not clear when this is observable?

DH:
    
```js
obj = {x: 'here'};
with (obj) {
  x = (delete obj.x, 42);
  // {x} = (delete obj.x, {x: 42});
}
```

https://bugs.ecmascript.org/show_bug.cgi?id=3463

AWB: New document title

YK: I recalled that we talked about not changing the name until we announced the new train model.


(still during the break) discussion between MM and YK: about Window/WindowProxy issue, discussing concerns, esp as relates to jQuery.
MM: preferred to keep invariants, add Test262 tests, wait for browsers to fix
YK: points out Object.prototype.toString.call(window) results differ (Chrome: 'global', Safari: 'window', eg)
... more discussion about configurability, differences between Window and a WindowProxy ...


## 4.4 Subclass instantiation reformation: status and open issues
(Allen Wirfs-Brock)

The presentation continues

AWB: Walks through consensus from Jan 7 ad-hoc meeting (see slides)

YK: We should opt on the side of future proofing and fewer features.

WH: Is there any cases where these uniitiallized objects can escape?

AWB: Only if the constructor calls out before it is done with the initialization.

AWB: Not having to worry about reentrancy or uninitialized objects leaking allowed AWB to eliminate 20-25 pages of spec.

WH: Where exactly does a constructor's [[Prototype]] point in the no-extends, extends null, and extends non-null cases?

AWB:
    
- extends non-null: the superclass
- extends null: Function.prototype
- No extends: Function.prototype

WH: If someone mutates prototypes, the code uses the new superclass in some cases and the old one in other cases. In particular, the extends-null case uses the old one, while replacing a non-null case with another non-null case uses the new one.

AWB: Have ideas on fixing that.

YK: Can we make returning anything but undefined or an Object throw an exception?

AWB: Then we would have different sementics between class constructors an FunctionDeclarations/FunctionExpression

WH: Why are the exceptions in points 8 and 9 of AWB's slides different? That seems weird.
8. When a function implicitly returns from a [[Construct]] invocation, if its this binding is still uninitialized a ReferenceError is thrown. 
9. When a function explicitly returns a non-object from a [[Construct]] invocation and its this binding is still uninitialized, a TypeError is thrown. 

YK, MM, WH: Thought there was agreement on the list to make class constructors non-callable.

ARB: What about arrow functions?

AWB: super (like this) needs to work inside arrow functions. And it needs to work as if the super call was done outside the arrow function. This more or less means that the lookup of NewTarget, HomeObject etc is looked up in the outer scope of the arrow function.

WH: What if super is reentrant? Stashing it away via arrow functions allows code to reenter it.

ARB: Surprised and concerned about this as well. Implications unclear when super() is allowed to leak from constructor through an arrow function.

AWB: You can call super twice but you will get an exception when you try to bind this after the second call.

ARB: Possible implementation concerns?

DL: Should work fine.

WH: Wondering about calling super twice and having it throw only after the second call completes and tries to assign to this. Not sure about all the implications yet, but ok with it — the alternatives are worse.

MM: TCP for `super.foo` is clear bt what about `super()` in a constructor?

AWB: Both works in the latest draft.

WH: What is the NewTarget in the case of `new super()`?

AWB: The NewTarget is whatever was part of the `new func` so in this case `funct`. The NewTarget gets forwarded down.

WH: OK, so if you have a chain of [[construct]] calls, it's the base of the chain. What happens when new super() gets called from a function invoked via [[call]] instead of [[construct]]?

AWB: Error. Have to verify how it is specced.

DL: We could also use the function itself. 

AWB: That is an option. [Checking spec.] -- throws a refernce error if there is no NewTarget which is the case when the function was [[Call]ed and not [[Constructed]].

AWB: My suggestion is to keep `new super()`.

YK: Wants to dissallow all forms of super outside of class bodies

AWB: The primary utility is that you can use it in cases where `super()` does not work.

DL: You cannot use `new super()` in method.

YK: Wants to do a max-min approach here.

DL: are there critical use cases for new super() in constructors? I guess no

AWB: confirms

BT: how concern are you about removing `new super`?

AWB: Should not be too bad. Pretty self contained.

BT: Anyone defending new Super()? *crickets*

AWB: Next, do we need syntax to manifest NewTarget?

YK: Early strawman was `arguments.constructor`.

MM: `<keyword>`.prop gives us new 

AWB: Sees options in the future to add things like `function.callee`

AWB: Maybe it could be `class.target` but `new.target` is more accurate. These are called MetaProperties in the spec.

MM: Thinks that we should include `new.target`. Understands the objections but it is a very useful thing to have and it reads very well.

MM: Anyone object to have `new.target` in ES6?

YK: Wants to talk about callable constructors before we make a call [no pun intended].

YK: OK with `new.target` if constructors are not callabele.

AWB: Where is `super()` allowed? Currently only allowed in class constructor bodies.

ARB: Makes sense at this point. We have had multiple threads about this?

DD: Would `new.target` work in FunctionDeclaration/FunctionExpression?

AWB: Should work.

YK: Objects. We should only allow `new.target` in places where super is allowed.

AWB: `new.target` can be used anywhere where [[Construct]] is used

DL: `new.target` gets set/bound when [[Construct]] is done. This is valid for normal functions as well constructors

ARB: There is no design issues here. It can only mean one thing.

EA: `new.target` is tied to [[Construct]], not super.

YK: OK.

WH: What happens if you do ES3 style constructor/prototype?

AWB: The NewTarget gets set as you do [[Construct]]

EA: You can pass along NewTarget if you use `Reflect.construct`

YK: A possible semantics for new.target on [[Call]] is to throw. 

MM: represents YK's point. If class constructors are not constructable and we disallow new.target in function declarations, then we don't have to answer the question of what happens with new.target on [[Call]]

AWB: ???

DD: Do we want people to refactor functions to classes. Then supporting [[Call]] and [[Construct]] is important.

AWB: Not sure if we are going to resolve these things quickly post ES6?

YK: No chance of getting concensus for ES6.

DD: If someone writes a FunctionDeclaration and wants to enforce that it is called with new, then if we don't have `new.target` people will go back to instanceof and other broken heuristics.

DL: You could also use new.target usefully in a [[Call]] context - to assert that it is not a [[Construct]] context

BE: We don't know what the future holds but we do know that functions in the past have been callable and constructable. What we do know is that `new.target` is useful.

WH: If we're going to use new.target === undefined to distinguish [[Call]] from [[Construct]] contexts: Is is possible for new.target to be undefined inside a [[Construct]] context? Even if it's called via reflection?

AWB: No, that's never possible.

MM: Reflect.construct(??, null) is a type error?

AWB: Yes, it is a TypeError


AWB: null or undefined

MM: undefined is least surprising.

EA: Because missing is often signalled with undefined.

BE: Strict functions uses undefined for missing this.

BT: Is `new.target` undefined in global scope.

AWB: It is SyntaxError in global scope, just like super and return.

MM: Is it a syntax error in concise methods? They do not have a construct.

AWB: That would include more exceptions and reduce consistency.

MM: `new.target` is also tcp through arrow functions.

#### Conclusion/resolution

- Remove `new super()`
- `new.target` is available in all functions. It is `undefined` in a non [[Construct]] call.
- `new.target` in arrow functions gets the NewTarget of the outer context (not the arrow funciton context).


## super() outside class constructor body
(Champion???)

DH: ????

YK: A constructor is both callable and constructable. If you use `super()` in call context you do not know if it is a call or construct.

BE: super-dot is orhtogonal to super-call

MM: Do we have concensus on super() is only allowed in constructor? And constructors are only [[Construct]]able, i.e. their [[Call]] trap throws?

MM: Would like to postpone toMethod post ES6?

YK: Current design is insufficient.

DD: What about if someone wants to use super in functions'

YK: They should just use classes.

BE: Deferring toMethod and making a call on a class throw seems like the most future proofing.

WH: Can you explain what toMethod is?

AWB: Explains the spec

YK: Concerned about having `toMethod(homeObject)` and then change the arity to `toMethod(homeObject, propertyName)`.

AWB: Just reserve the second argument.

DL: As a user, what do I pass?

WH: Also wants to defer toMethod.

AWB: Wants one more go and then I'll give up

AWB: People that wants to do meta programming. Polyfills, compilers. All of these people are now shut out.

DD: Without toMethod you cannot add a method that wants to call super to an existing class. E.g. for a polyfill on a DOM class; especially custom element callbacks.

MM: When we started we set out with a design that could explain classes using ES5 semantics. We've lost this with TDZ.

DD: Feels strongly that classes should desugar to smaller primitives. Since we have already lost that we can/should come up with a more consistent design post es6.

DH: We have to go from both ends. We are not abandoning, just deferring.

BE: We want kernel semantics. But we should not rush this. We will regret rushed decisions. We do not have solid design at this time so we must defer.

DL: No `super()` outside class constructors since this is already initialized.

AWB: My bottom line; `new.target` and `super.property` are the essential things.

DL: extends null?

AWB: We can drop the special dynamic case for extends null. Can have the constructor return an object it makes itself via Object.create.

EA: If you have an extends clause, the default constructor calls super. If the extends expression evaluates to null then the super() call will throw. So you have to provide your own constructor

```js
class Foo extends null {
  constructor() {
    return Object.create(new.target.prototype);
  }
}
```

AWB: If not null then the extends expression must be IsConstructable.

DL: What is the canonical way to create a class that has null as the [[Prototype]] of the instance 


MM:
    
```js
class C {
  constructor() {
    return Object.create(new.target.prototype);
  }
}
C.prototype.__proto__ = null;
```

WH: We special case the null value in the extends clause. If null we use %FunctionPrototype% as the superParent. We use null as the protoParent. Get rid of the specialized treatment of super() for null extends; instead, use the same semantics for null and non-null extends, which will make any attempt to call super() with a null extends throw.

```js
class C extends null {
  constructor() {
    return Object.create(new.target.prototype);
  }
}
```

AWB: `super.property` in object literals works in concise methods and accessors.

AWB: Do we have concensus to remove `super.property` from concise methods in object literals.

YK: I think that is unfair. We have made a lot of changes.

DL: Concise methods are not constructable. Correct?

AWB: Correct.

DD: We cannot reopen unrelated issues at this time of the process.

YK: I'm passionate about the syntactic sugar related to `super()` for `super.propertyName()`. This syntax got removed and we had to do some fairly significant changes. And this is related.

WH: Was under the impression that `super.property` was only going to be available inside class methods.

AWB: There is no distinction between class methods and object methods.

MM: When we talked about this before I was also under the assumption that this was about inside classes and outside classes.

#### Conclusion/resolution

- Dropping toMethod from ES6.
- No `super.property` in FunctionExpression/FunctionDeclaration (as well as generators).
- No `super()` outside class constructors.
- Class constructor [[Call]] always throws.
- `extends null` does not have special dynamic default constructor. The syntactic presence of extends clause causes [[ConstructorKind]] to be derived.
- No concensus on super inside concise methods of object literals. (to be revisited)


## Methods in class bodies enumerability?

AWB: Is anyone objecting to making methods in class literals non enumerable?

No objections.

#### Conclusion/resolution

- Methods in class bodies are non enumerable.
- Concise methods in object literals are still enumerable.
