# January 28, 2015 Meeting Notes
-----


Brian Terlson (BT), Jonathan Turner (JT), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Jeff Morrison (JM), Erik Arvidsson (EA), Peter Jensen (PJ), Yehuda Katz (YK), Dave Herman (DH), Waldemar Horwat (WH), Dmitry Lomov (DL), Domenic Denicola (DD), Kevin Smith (KS), Andreas Rossberg (ARB), István Sebestyén (IS), Sam Tobin-Hochstadt (STH), Michael Ficarra (MF), Jordan Harband (JHD), Chip Morningstar (CM), Mark S. Miller (MM), Ben Newman (BN), Brendan Eich (BE), Adam Klein (AK), Igor Minar (IMR), Miško Hevery (MHY)

-----

## Report from the Ecma Secretariat
(István Sebestyén)

IS: Strange JSON development: The government of the Netherlands wants to get an EU recognition on IETF's JSON future standard as part of the European Commission's Multi-Stakeholder Platform. Netherlands submitted 27 IETF standards to the Multi-Stakeholder Platform, and IETF's JSON happens to be among them. Normally only long-standing in the market already proved standards should be recognized. Also no "consortium specification" should be recognized where appropriate International Standard (like of ISO, IEC, ITU) exists. JSON in ECMA-262 is already part of ISO/IEC 16262:2011. In addition TC39 has standardized in 2013 ECMA-404 (JSON). We had originally a TC39 decision to fast-track it to JTC1, but after discussion the GA in December 2013 has approved the possibility of a Postal Balot on the JTC1 fast track upon a new request  from TC39. The iisue has been reported to the last Ecma GA and was worried about the situation.

WH and IS: [Discussion about what the Multi-Stakeholder Platform is and its implication on governmental activities]

IS: Recommend resuming the fast-track of ECMA-404 (JSON).

AWB: We don't currently have an editor for the JSON spec. Who wants to do it?

CM: I volunteer!

WH: Timeline? June GA?

IS: Will discuss it with ECMA management. Might do it earlier via a letter ballot.


## ES6: Generator issues
(Allen Wirfs-Brock)

WH, DH: Ask for presentation.

AWB:

DH: Earlier presentation was careful to allow try/finally to abort the return. The point was to allow infinite iterators that refuses to return.

BN: Filed this bug. You could change the return method to return `{done: true}`.

DH: You can have wrappers that are specific for for-of loops.

AWB: THe original proposal required a falsy done value. If it wasn't falsy an error was thrown.

DH: You could change the for-of loop by wrapping the iterable to not continue the iteration of the underlying

```js
var nats = getNats();
for(x of nobreak(nats)) {
  if(cond) break;
  ...

  for(x of nobreak(nats)) {
    if(cond) break;
  }
}

function nobreak(it) {
  return {
    next(x) { return it.next(x); },
    throw(x) { return it.throw(x); },
    return(x) { return {done: true}; }
  };
}
```

YK: If someone asks to cleanup, by calling return, then you should clean up.

KS: There should be an equivalent of an iterator with a return and without a return. (?)

DL: having a nobreak is an abstraction breakage ; you have to know whether your iterator is infinite or not, or rather, has something useful to do in return

WH: Why is return(x) stubbed out but not throw(x) in DH's nobreak?

WH: What happens when there is a throw inside the for-of loop body. Does it call "throw" or "return"?

AWB: (looks up semantics)

BE: If there is a throw in the for-of, the "return" method is called, not the "throw" method.

DH:

```js
var nats = getNats();
nats.return = () => ({done: true});

for(x of nobreak(nats)) {
  if(cond) break;
  ...

  for(x of nobreak(nats)) {
    if(cond) break;
  }
}

function nobreak(it) {
  return {
    next(x) { return it.next(x); },
    throw(x) { return it.throw(x); },
    return(x) { return {done: true}; }
  };
}
```

AWB: Why can't we make that an iterator that says that it is done, that it can never return `{done: false}` again?

DH: Are you sayng that the default behavior should be `{done: false}`?

AWB: Or that there is no default.

DH: There has to be a default behavior.

AWB: If there is not return method then nothing is called.

DL: As far as I understand, the intent was to close the iterator for for-of loops.

JT: The iterator consumer should not need to know if the iterator is infinite or not.

AWB: We cannot enforce that `{done: true}` does not change to `{done: false}` in the future.

DL: The contract of an iterator is that once it is closed you cannot get any more values out of the iterator.

AWB: You cannot enforce that. It is up to the implementer of that abstraction.

DL: Normally, you create a new iterator every time (in for-of)

DL: Why is tehre a difference between finite and infinite iterators?

DH: What Jafar brought to the table was that infinite iterators are not the common case. The common case is finite, like file streams etc. You want these to close by default. We should not optimize for inifinite sequences.

DL: If you don't want to close then you should not use for-of.

DH: That is also Jafar's view.

AWB: Generators work this way. They do the right things.

YK: Was persuaded by `{done: true}` meaning that I accepted your hand shake.

AWB: Say that this is just a hand shake is a completely different thing than what we have.

DH: Pretty persuaded that we do not have to catch this bug.

DL: You could throw in the return method.

DH: If you have an infinite sequence that you don't want to be able to close, throwing in return would signal that the user is using it wrong.

BN: If we adopt the policy that {done: false} would throw, it is not very different from than throwing in return.

EA: Using throw in your return is also a clearer intent.

WH: How would AWB's original motivational example (of a reusable infinite iterator) be done?

AWB/BN: The user would have to wrap the iterator and/or use try/catch

BN: Do we need to consider generators and try/finally and make sure we are not missing an opportunity to prevent bugs?

BN: no compelling argument to throw for iterators that do not have a return method, since they can just implement .return() to throw if they really want that behavior.

#### Conclusion/resolution

- Remove the truthy check for Get(result, "done") that follows the call of "return". (The value continues to have to be an Object.)
- Relevant bug closed with the following comment: https://bugs.ecmascript.org/show_bug.cgi?id=3395#c2


## 4.5 @@toStringTag
(Jordan Harband)

MM: Do we check the natives before checking the symbol?

AWB: Step 17b, for natives we get both and then if the tag is different a tilde is added.

JHD: We could make all builtin instances have own non configurable property

MM: Or skip the override for the built ins.

JHD: Not looking for complete security. Just want to error if the user does crazy things.

MM: In es6 classes, if you extend a RegExp the instance is going to continue to be a regexp instance.

JHD: One use case is for a module that wants `new Boolean(false)` to be same as `false`. Not saying that is a good library, just explaining how it works. With ES6 and someone overrides @@toStringTag these tests no longer work.

YK: If someone sets the toStringTag to Boolean they probably did that because they want to go down the Boolean code path.

DD: If you want to do it the right way there are other ways. Allen posted this to es-discuss. https://esdiscuss.org/topic/tostringtag-spoofing-for-null-and-undefined#content-59

KS: There are builtin methods that throw if the internal slot is not present.

WH: AWB's brand checks are optimized for the true case. That's ok for error checking (I expect x to be primitive Foo and don't care how slow the code is if it's not) but not good if you just want to reliably test if x is primitive Foo.

DD: Believes that there is a method that does brand checking for all the builtins.

MM: Checked Caja for brand checks. Found 5 cases. Not clear if they would be safe with alternative brand checks. I'm convinced that Allens proposal is safe enough.

AWB: Then we can step 17 (the tilde case).

MM: Just to be clear, there is no way to change what typeof returns.

MM: Issue is ES5 libraries coexisting with ES6 clients.

JHD: What if someone claims that a String is an Array.

YK: Then they get an error which is what you would expect.

MM: Requests that browser makers wait for at least 2 months before releasing a browser that drops step 17. The integrity of Caja is at stake.

[agreed to MM's request]

#### Resolution/conclusion

- Remove step 17b in the alg (the tilde prefix requirement). 19.1.3.6 Object.prototype.toString ( )
- Agreed to wait 2 months before releasing a browser that does this


## Super revisited

YK: Happy with the outcome.

#### Conclusion/resolution

- `super.property` is available in all concise methods (including accessors) in object literals.



## Experimental new directions for JavaScript at Google
(Andreas Rossberg)

[Slides: http://www.mpi-sws.org/~rossberg/papers/JSExperimentalDirections.pdf]

ARB presenting

AWB: [On methods doing instance brand checking.] Why cant you make the methods non extractable instead?

ARB: Then you probably need [[Invoke]] which is problematic too.

WH: What about calling a funciton with too many arguments?

ARB: We discussed this. People want it for API evolution. Allowing it makes sense with subtyping.

DH: Does this mean that V8 would be slower for non sane js?

ARB: Of course not.

PJ: How is this going to make the VM code simpler.

ARB: It doesn't, but it might avoid making it yet more complicated in the future.

WM: The goal is to make performance more predictable.

WH: Trying to probe the interaction of sane and non-sane modes. I assume that the sane mode will have strings and a string generated in non-sane mode code will be usable in sane code and behave and be typed as a string.

ARB: Yes.

WH: Then what happens if in sane mode I take strings s and t and call s.concat(t). Does sane mode statically determine that the result is a string (which would cause issues if String.prototype.concat is monkey-patched), or does it do the conservative thing and assume that the result of the concat call is any, in which case I can't assign it to a string variable.

ARB: Use any<string>

DH: Better-is-better vs. worse-is-better

DD: I see this as an alternative to asm.js but writable by people.

DH: I see building on asm.js as an alternative way.

ARB: We are talking to the asm.js team. Both valuable, goals are mostly orthogonal. user-facing vs compiler target.

DH: Believe we can add parts of this in one js.

WH: [In response to OneJS assertion that we should wait for us to make the entire language more optimizable instead of making high-efficiency subsets.] We've been going in the opposite direction. We are making things harder to implement and reason about in ES6. For example Proxies.

DH: would prefer implementors' time be spent optimising existing JS instead of optimising this subset

AR: False dichotomy: subsetting means that it _is_ existing JS.

BE: Think that it might be hard to pull this off but it might be informative for future JS features.

STH: You cannot go from an unsound type system to the system you have in your vm.

BE:

STH: Unsound type systems are not usable for performance. If we want types to help the VM it is not going to happen as an evolutionary type system on top of TypeScript or Flow.

BE: Concerned that it is taking resources away from other more important things.

JT: Even unsound types can be used as hints to the VM.

ARB: Yes, but not much more. You only save a warm-up cycle compared to the current state of affairs. The real perf issues we see is when the type assumptions we make are wrong and we get into deopt/opt cycles. It is very hard to reason about when this happens and it does happens when your application gets larger. Also, more aggressive optimisations require global invariants, which you cannot achieve without globally sound types.

YK: As engines gets smarter the risk of hitting the pathological cases is getting worse.

YK: We hope the engines are not changing their heuristics because we are currently targetting one heuristics.

ARB: Exactly. The smarter VMs get, the less predictable performace will be. Types are the only way out we know of.

YK: I hope that you are planning to write a transpiler.

ARB: Yes, we start prototyping in Traceur.

BE: Why was flow not consired?

ARB: Flow is going in the opposite direction. It is doing more inference. It is a non starter for doing inside a VM.

ARB: Typed racket great, but occurrence typing can potentially get expensive.

STH: That is not accurate. There are ways that you can make things slow but there is no inherent reasons it needs to be slow.

BE: If you want adoption. People will go the extra distance to get the predicable performance.

YK: Can imagine a world where a language significantly compatible with JS has usages.

JM: Flow would want to be compatible with whatever we develop.

ARB: It is complementary. Write in Flow style and have Flow insert type annotations for you.

BE: ... Java failed, ActionScript failed

STH: I would not say Java failed. People like static typed languages.

WH: If Java failed, then what succeeded? Objective C?

JM: There are several large JS code base projects and a lot of them came to the conclusion that static types helps them manage their code.

STH: The difference between Andreas' proposal is that there is a concrete plan for VM optimization.

BE: Afraid that this will be designed in some corner inside Google.

ARB: No. We just had a meeting between all parties interested in types for JS, presenting this. And we totally intend to continue those.

YK: It is important that interested parties are part of the designing this.

ARB: Someone has to make this experiment. We cannot spec a type system without a working implementation. We need to explore and validate options.

DH: Interop layer. How do these things interact? How smoothly can new and old code interop? In your part of the space you need soundness and you need to drop some of the constraints. It is not an end user target. It is either a target for compilers or for code where you really need to squeeze out maximum performance. What can you do in a type system and keep it smooth.

WH: This has different goals from asm.js. Asm.js does manual storage management instead of gc; this effort doesn't go that far.

ARB: We did talk to asm.js people to make a version of asm that would support gc etc.

STH: If someone had said 3 years ago that types would be the next big thing in js we would not have believed them. It happened (TypeScript etc)

BE: Try to make it a name that impies that it is natural progression to js. You should try to deemphasize the mode.

DD: Calling it "sane mode of Javascript" instead of "sanescript" would be much better.

BE: What about "use types"?

KS: It is not clear to me what the dependency is between the new mode and type?

ARB: Neither am I. :)

DH: What matters is how far you are diverging from the language.

ARB: Some traditional patterns you do not need any more with ES6. For example Maps makes usage of Objects as a map obsolete.

DH: You are better doing these things incrementally. One thing at a time. If one of these succeeds or fails it does not bring everything down or up.

WH: Little incremental steps cause too much complexity due to the constant arms race to fool existing code while introducing new features. Look at the evolution of ways of defining properties.

DH: We can all list flaws with JS.

WH: This proposal is one of the few that reduce entropy.

DH: Not true. It sits on top of the existing language.

YK: Makes the way the language feels very different.

DD: JS stays within the bounds. It is like a really strict linter. Don't think there are that big of a difference.

AWB: Great to do experiments. New mode. Substantial different language. Skeptical to get this rolled out in the short term.

ARB: One design goal is that a "correct" program that works in sane mode engine will work in all ES6 engines.

MM: Plausible route to success. Frozen classes can be adopted. Almost identical to const classes as previously proposed. Want to bring this up after ES6. For things that do not fit that model, the train wreck you are going towards is sharing primordials. You end up duplicating all the primordials. The realm api we are working on is an alternative way to approach this.

ARB: There is no intention to have to duplicate all the primordials.

MM: As you continue towards this goal you will continue to duplicate more and more primordial.




## 6.3 Decorators
(Yehuda Katz, Jonathan Turner)

https://github.com/jonathandturner/brainstorming/blob/master/syntax.md
https://github.com/jonathandturner/brainstorming/blob/master/README.md

JT: TypeScript wanted annotation/decorators. Talked to Yehuda and agreed to try to come up with a common proposal.

AWB: Is using @ going to cause grammar issues with using @ for private state.

EA: @ is widely used in other languages for annotations.

MM: would rather talk about semantics than focusing on the token.

YK: Want to resolve it now because wants to move forward. Wants to move to stage one

AWB: Does not matter. There is no commitment on the syntax for stage 1.

YK: We are reaching a point where people are using ES6 class syntax and run into issues where it is not expressive enough. They end up adding their own syntax.

WH: There seems to be an ambiguity with the syntax for Decorator.

```js
@x instanceof (y) ...
```

WH: is instanceof the name part of a MethodDefinition or a continuation of the decorator expression? An ambiguity like this can also cause the lexer to go off the rails if you concoct a more complex counterexample with a / inside it and you wouldn't even be able to lex to the end of it to see what follows.

WH: One option to solve this is to limit decorators to primary or simple expressions. Binary operators cause issues. If you want a complex expression as a decorator, just parenthesize it.

YK: So we can solve by restricting the grammar

BT: Or using a delimiter like colon after the annotation

YK: Basic idea of decorators is that there are 2 things that can be decorated. Classes and class methods. Give the decorator a chance to intercept. They take the same params as defineProperty and can return the descriptor that is finally installed.

```js
({
  foo: observes(function() {
  }, prop)
})
```

MM: It is really just a desugaring of wrapping the defineProperty calls.

MM: Do super work after the method has been decorated.

YK: There is one quirk with getters and setters. They are installing a single property descriptor but there are multiple instances in the syntax.

EA: We have issues with duplicates

AWB: We have tried to solve this in the past (to bind the get and set pieces together).

MM: The idea that you are decoratign a descriptor and not just the value is powerful.

DD: You could pass in a flag.

JT: Lets pop the context and get a good overview before we start diving into the details.

YK: Noted that there are quirks.

YK: @readonly is a simple example of decorators.

IMR: Annotations doc http://goo.gl/42o100 (requires permissions)
Decorators vs. Annotations: https://docs.google.com/document/d/1QchMCOhxsNVQz2zNvmzy8ibDMPT46MLf79X1QiDc_fU/edit# (requires permissions)

IMR: What do we want annotations for? Collected use cases in document. For example for documentation, ORM, DI, tooling aspects

WH: What is the syntax for annotations?

YK: At this point it is the same as decorators.

IMR: Biggest difference between deocrators and annotations is that annotations support static/ahead of time tooling because it has guarantees you can build on top of.

WH: Big issue is whether you use a separate sublanguage for static annotations or try to use the same language. Separate language using separate name scopes results in solutions and problems such as C's preprocessor. Using the same language causes severe time-of-evaluation issues, as seen in Lisp's eval-when or C++'s template and class-vs-constexpr gotchas [example: a C++11 class constexpr reference can't use static constexpr functions defined earlier in the same class]. The problem arises in doing compile-time scope lookup and variable resolution in scopes as dynamic as ECMAScripts's.

MM: Do you expect to be able to have identifier expressions in your annotations? Do you expect that to look up the value in the current scope?

EA: The original proposal used expressions. There has lately been talk about scaling this back to JSON so that there are no side effects.

MH: Using JSON only seems like it might not be suitable enough.

AWB: There is a middle ground here. Classes could expose an extensible meta-object protocol. Essentially dynamic extension points that you can hook in to. So as part of defining a new type of class definition you might add meta properties and other things. Might be quite dynamic but have a static representation in the source code.

MM: If JSON is almost expressible enough, with the exception of the scope issue, and if you add IdentifierExpression

IMR: We might be happy with that.

IMR: One other reason for having these side effect free annotations is the VM perspective. Decorators needs to be dynamically invoked.

DD: The performance impact would not be worse than calling the functions yourself.

DH: Meta programming is generally the case where you do not need to optimize for performance because you expect there to be some penalty.

MH: If you only have decorators and the common use case is annotations ????

DD: If you are in a static environment you can already treat decorators as a special form.

MH: The order of decorators matter. The order of annotations does not matter. Therefore it does not compose.

YK: No one is saying that you cannot prevent people from using decorators for anything other than attaching meta data.

MH: Looks like decorators can do anything but in practice they cannot do much without using global state.

YK: Disagree. They can use the object as the coordination point.

MH: Lets assume I'm creating a component.

YK: You can use a weak map.

MM: Can you clarify.

MH: I think it is a good property that you can bootstrap the same framework multiple times. The problem is that a decorator needs to register itself with some context.

YK: The decorator can add meta data. Then you call the register with the relevant context.

MH: Yes. But the extra power is problematic.

MH: Depends on when you are running the code. Would like to wait until the framework has enough context.

AWB: Maybe have two different proposals, both at stage 0. Then try to unify them before they can progress to stage 1.

MM: Having one mechanism that satisifes both needs is preferable to having two different mechanism.

MM: Maybe you can have a statically verified subset of decorators and if that restriction is fulfilled your tooling can treat it as an annotation. If not it falls back to a dynamic decorator.

IMR: Sounds promising.

#### Conclusion/resolution

- None?
