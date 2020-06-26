# September 29, 2016 Meeting Notes
-----

Brian Terlson (BT), Michael Ficarra (MF), Jordan Harband (JHD), Waldemar Horwat (WH), Tim Disney (TD), Michael Saboff (MLS), Eric Faust (EFT), Chip Morningstar (CM), Daniel Ehrenberg (DE), Leo Balter (LEO), Yehuda Katz (YK), Jafar Husain (JH), Domenic Denicola (DD), Rick Waldron (RW), John Buchanan (JB), Kevin Gibbons (KG), Peter Jensen (PJ), Tom Care (TC), Dave Herman (DH), Bradley Farias (BFS), Dean Tribble (DT), Jeff Morrison (JM), Sebastian Markbåge (SM), Saam Barati (SBI), Kris Gray (KGY), John-David Dalton (JDD), Daniel Rosenwasser (DRR), Jean-Francis Paradis (JFP), Sathya Gunasekasan (SGN), Juan Dopazo (JDO), Bert Belder (BBR), Shu-yu Guo (SYG), Eric Ferraiuolo (EF), Caridy Patiño (CP), Allen Wirfs-Brock (AWB), Jacob Groundwater (JBG), Adam Klein (AK), István Sebestyén (IS), Tom Van-Cutsem (TVC), Claude Pache (CPE), James Kyle (JK)

Remote:
István Sebestyén (IS)

-----

## Secretariat's Report

István Sebestyén: The audio is very bad, unfortunately. ... Maybe I better write....
Regarding the 2017 European meeting tell me when should it be. In March it would probably be cheaper. Also still skiing would be possible after or before the meeting if someone cares for that.
May will be more expensive. Meeting place suggestion: Montreux - Royal Plaza Hotel.

Something else: Status of Fast Track to ISO/IEC: The ECMA-414 needs a 2nd Edition before we can move ahead. I think this has been discussed already. On ECMA-404 JSON Fast track, the DIS voting is going on, and will end in Decmber (I think December 8, 2016). Nothing to be done right now.

No European meeting in 2017, but East coast meeting instead. Host: we find it out....later. The new idea is, just to have every 2 years European meeting. We should rather have also East Coust meetings. Possible hosts: Google, Bocoup....

In order not to spend too much time in the face to face meetings please address any issues on GitHub where the Secretariats issues are discussed.

Have a good continuation of the meeting.

Need new Chairman. Please consider.
This is so not true. We need to look how the Chair question develops. Currently not clear.







## 11.iv.c Consolidating Proxy integrity checks,


(Tom Van Cutsem, Claude Pache)

https://github.com/claudepache/es-invariants

AWB: Background: There was a missing Proxy check, and in response, Tom and Claude have come up with a fix and a nice formalism. This is of interest to a few people, so let's not all talk about this for an hour.
- Propose delegating Tom, Mark and Claude to work on this
- Present summary

MM: I am confident that


YK: Q...

- An example of the bug?
- What is the fix?
- Any incompatible changes?


TVC: https://github.com/tc39/ecma262/pull/666 . Proxies are designed to not circumvent invariants of objects, namely non-configurability and non-extensibility. The Proxy will check that the handler returns a value consistent with the target.

https://github.com/tc39/ecma262/pull/666#issuecomment-239512646

- If you have a non-configurable property on the target, and the Proxy says it's configurable, it's a violation.

- If \<invariant\>

Claude went through and found a few missing invariant checks based on writing these things out exhaustively:

- A proxy is allowed to say a prop is non config, non write, even if only marked non config

Bug shown:
https://github.com/tc39/ecma262/pull/666#issuecomment-239512646

A client of the object can assume x always 2 (non-writable, non-configurable), call defineProp on value, set to 3. The proxy was allowed to change the meta property settings:

```js
var target = Object.seal({x: 2})
var proxy = new Proxy(target, {
  getOwnPropertyDescriptor(o, p) {
    var desc = Reflect.getOwnPropertyDescriptor(o, p)
    if (desc && 'writable' in desc)
      desc.writable = false
    return desc
  }
})

Object.getOwnPropertyDescriptor(proxy, 'x') // !!! should throw
// { value: 2, configurable: false, writable: false }
Object.defineProperty(proxy, 'x', { value: 3 })
Object.getOwnPropertyDescriptor(proxy, 'x') // { value: 3 }
```


MM: Are the other two bugs analogous?

TVC: The second is the same (the DefineProperty case). The third is a little different--[[Delete]] for a Proxy of a non-extensible object, which will return true without deleting it from the target. You could then see some kind of adding properties on a non-extensible object, putting them back.

```js
var target = Object.preventExtensions({ x: 1 })
var proxy = new Proxy(target, {
  deleteProperty() { return true }
})

Object.isExtensible(proxy) // false
delete proxy.x // true !!! should throw
proxy.hasOwnProperty('x') // true
```


MM: If the object is non-extensible, a deletion of a property should succeed if the trap deletes the property from the target, right?

TVC: Yes

MM: Consensus?

- As a bug fix that should happen
- Work with implementors to avoid problems
- Identify further constraints

DE: This should be doable in V8

YK: Should this break any users?

MM: I don't know, but it shouldn't break my patterns--all of my code which uses Proxies is for security and is insecure due to these violated invariants, and would benefit from these changes.

YK: Only way this affects a proxy is author is concerned with extensibility, specifically configurability and writability. If you're trying to virtualize the invariants, then broken.

Agree that's probably "malware"

DE: I'd expect that non-security-related code using Proxies is unlikely to care much about extensibility and configurability, so it is similarly unlikely to break.

AWB: is there a PR with fixes?

TVC: Yes.

RW: Confirm? PR for implementation or spec?

AWB: Spec.

Yes

DE: Tests for Test262?
- Will help TVC proceed, getting oriented in Test262.

AWB: Claude's methodology for describing invariants is something we could incorporate into the spec, but this is more than the bug fix.

MM: likely a separate effort, but completely agree.

DD: Sounds like a good non-normative change that could be done in collaboration with the editor in a PR, appendix, etc.

#### Conclusion/Resolution

- Two parts for TVC/CP as next steps:
- Treat PR 666 as spec bug fix, which needs Test262 tests to land
- Treat Claude's new formalism as new content via PR to incorporate into spec


## 10.ii.b Rest/Spread Properties

(Sebastian Markbåge)

http://sebmarkbage.github.io/ecmascript-rest-spread/

SM: Related new proposal: getters and setters are expected to work more like fields than methods. However, they are defined on the prototype, as well as non-enumerable. Confusing when trying to deprecate a field, make it lazy, etc. However, own enumerable checks required for analogy to existing patterns.

```js
// getters are non-own

class Foo {
  bar = 123;
}

let data = {
  ...new Foo()
}

data.bar // 123
```

Options:
    - Leave things as is, and use Object.defineProperty to make own getters/setters
    - New syntax for own getters/setters
    - Breaking: Change getters/setters in class syntax to be own properties (murmurs from room: No chance!)
    - New `field` flag in property descriptors



Generally held rejection of changing getters/setters to be own properties

RW: Implementors have rejected new fields in property descriptors many times before

DH: Objects as a dictionary are an anti-pattern, but rest/spread are like FP OO record operations.

SM: I'd like to figure out how to solve this issue

WH: The field flag (from Plausible Solutions slide) would be per-property or per-object?

SM: Proposal can be structured either way

SM: (did he say going up the prototype chain?)

JHD: If it's not restricted to own properties, wouldn't it get the getters all the way up the prototype chain? We don't have anything in the language (post-Reflect.enumerate) which goes up the prototype chain like that.

YK: This sort of issue comes up if you evolve code between bare objects and classes. Getters don't interact well with adding new things in a backwards-compatible way as they don't have enumerability.

DD: Some getters are fields, treat as such; some aren't and shouldn't be treated as such. (Examples: vector.length; person.fullName) don't think we should have generic mechanism to apply to all getters/setters
- The idea "what are fields of an object"?
- What are the iterated values of an object?
- Should there be a protocol to determine keys and values for spread?

WH: We have a protocol: enumerable, but it doesn't quite match the concept of a field.

DD: need a more general protocol where you can run arbitrary code

MM: clarify: the details of no-change position?
- Things considered a field: enumerable own, a data, an accessor?

JHD: Exactly as object.assign works now

MM: Adding a field to prop descriptors is an extremely heavy weight thing and needs an earth shattering reason to consider. "world needs to end" importance. This is not that.

- Most compelling precedent for "no change": JSON and Object.assign. We got it right when we said "enumerable own"

JM: Did you discuss making getters not own and making enumerable spread--

SM: I don't think that's a good idea

AWB: I don't think there's an easy fix here. Objects have two roles:

- as tuples (value oriented abstraction, named values)
- instances of things you can think of as some kind of classes (behavioral)

- getters are *mostly* on behavorial side; you could put a getter on an instance, but atypical

Normal usage is one of those two worlds. Proposal: Remove the own restriction

EFT: Some getters you want to be shared, some not.
- Augment definition syntax?

DD: Decorators will address this

YK: Enumerable own is important because

- in ES3, common to override prototype properties
- ES3 ad-hoc mixin object chains were note commonly used as record abstractions; for-in was used in these patterns, hence enumerability

...That has changed.

-  Now, class patterns increasingly used to express record abstractions
- important that the cowpath does not break
- enumerable-own, historically a hack
- important that hack doesn't break
- in this case, that hack predates getters (RW: not sure this is true)

MM: Given this precedent, anything nearby that can benefit is an argument for doing something analogous

YK: To clarify, from jquery's perspective, this stuff is more of a feature for dictionaries, with arbitrary keys. The mismatch is that ... wants to feel like a record feature.


MM: (@YK) can you write a decorator to make own?

YK: Anytime you make a prototype thing, you add cost.

MM: cases where you want g/s to show up as own property: make it own. The overhead of per-instance g/s to have it be own, seems like fair cost

EFT: I might disagree, depending how common the pattern is. There is real memory overhead.

AWB: proposing to possibly eliminate own restriction, but only for inherited enumerable getters

Rest/spread would grab both:
- own properties
- inherited, enumerable accessor properties that have a `get`

AK: Wouldn't work well with the DOM; everything in WebIDL is an enumerable getter.

SM: Syntax?

AWB: No, use Object.defineProperty or a decorator

MM: Theory that there is no overhead for the pattern of using own getters — can reuse same getter function objects on multiple instances

EFT: It seems like there would be some overhead still

- SM proposal stay at no change
- given sharing of g/s is minimal enough to use as a way to work around book keeping


JHD: This feature is syntax for a pattern that's been used for years across code bases: Object.assign. Because of this weight, we should strongly consider the no change option. APIs/ecosystem patterns haven't proven out in the ecosystem before codifying it in the language.

DD: We should make sure that new syntax solves something new and important. If we're not serving the record programming model, we shouldn't bother with new syntax and just go back to using Object.assign.

SM: I agree that the record use case is a different mental model than the dictionary use case. But we do have a solution, which is for library authors to define own getters.

SM: So, I'd like to go to Stage 3 with the current "no change" proposal.

DD: Suggestion: We could add a protocol later, and make this feature retroactively tie into that.

YK: the reason this is coming up is that if we ship this with the specced semantics, we close the door on something like Allen's proposal of changing to enumerable not-own. I would like to know whether per-instance getters introduce new performance problems.

Implementers: There will be measurable overhead, but it might not be all that expensive

DH: This proposal always creates Object instances; for record programming, we may want to, in the future, add a protocol for making instances of other superclasses. Not blocking, but good to look into in the future.

SM: We could also do that for Arrays.

#### Conclusion/Resolution

- Stage 3 acceptance
  - currently with the "no change" option from the Plausible Solutions slide
- We could add a new feature in the future that overrides the default behavior, but that does not block this in any way



## 10.v.b Date.UTC when called with one argument

(Brian Terlson)

https://github.com/tc39/ecma262/pull/642

BT: Date.UTC with one argument

Last meeting:

- Date.UTC() => nan
- Date.UTC(_) => Implementation-defined; Chakra had different behavior

AWB: The only two reasonable results would be to give the first instant of the year (Chakra behavior) or NaN (other implementations)

Proposing: defaulting all subsequent arguments to 0 when called with only one argument

MM: What's the bug we'd be fixing here by returning an error?

AWB: Trying to parallel Date constructor (historic)

BT: Let's go for the functionality and make it work with just a year

#### Conclusion/Resolution

- Date.UTC(year) defaults all the other parameters to 1 or 0 (i.e. returns 00:00:00 on January 1st of that year)



## 12.i.a Remove arguments.caller

https://github.com/tc39/ecma262/pull/689

BT: The poisoning is pointless now, we won, let's remove it

#### Conclusion/Resolution

- Consensus!





## Revisit ECMA414, 2nd Edition


AWB: (recapping ECMA414 2nd Edition)

Motion to approve ECMA414, 2nd Edition

(Requires formal vote)

Bocoup: Yes
jQuery: yes
Apple: Yes
Microsoft: Yes
PayPal: Yes
Mozilla: Yes
Google: Yes
Yahoo: Yes
Salesforce: Yes
Shape Security: Yes
Facebook: Yes
Godaddy: Yes
IBM: Yes
Netflix: Yes
Tilde: Yes
Airbnb: Yes

Next: ok to delegate TR104 updating to AWB and LEO?

YES


#### Conclusion/Resolution

- ECMA414, 2nd Edition approved, send to Ecma/GA
- TR104 updates to be forwarded to Ecma/GA








## 11.iv.b Cancelable Promises

(Domenic Denicola)

https://github.com/tc39/proposal-cancelable-promises

Status: issues.


DD: I don't like mics

MLS: What's wrong with Mikes?

DD: The feedback made it in the new spec:


- had await.cancelToken idea. now fully specified. Allows the 'race' convenience semantics
- method: Promise.withCancelToken as a convenience method for adapting old APIs (changed from Promise.cancelable => Promise.withCancelToken) -- was this the same thing?
- https://github.com/tc39/proposal-cancelable-promises/blob/master/Cancel%20Tokens.md
- try/else is the new try/catch which doesn't catch cancellations. For future compatibility with catch guards, we can't use a new contextual keyword
- https://github.com/tc39/proposal-cancelable-promises/blob/master/Why%20Else.md


WH: explain issues with catch guard?

DD:

```js
try {
  f();
} except (e match SyntaxError) {
  b();
}
except(e);

{
  c();
}
```

WH: Still ambiguous with `else` and unbraced `if`, multi-else changes existing behaviour after you introduce the one-else variant

DD: This is the same as the existing unbraced `if`/`else` ambiguity, and doesn't extend it further.

KG: An `if` whose body is a `try` followed by an `else`?

DD: Cannot do that


MM: Problem: going into a similar area of `then`, but with different meaning? When you see `then/else`...
- Believe `then/else` is damaging


AWB: These are all failure conditions? Why not `fail`?

DD: Ambiguity with `match`

YK: `else` makes sense semantically

DD: Last time, no stage 2 because

- want to use cancel tokens as a general cancellation system, including Observables, which otherwise have an `unsubscribe` method and `closed` property
- A polyfill implementation exposed issues

https://github.com/tc39/proposal-cancelable-promises/issues/57

Propagation is asynchronous, but needs to be synchronous for Observables.

Proposed way forward: CancelToken.race has their arguments refer to their return value, so they can push the results out, rather than waiting for the Promise.

When using CancelTokens more manually than race:
    - Naive solution: subscribe, and then check and bail out based on flag. May be inefficient
    - Add unsubscribe method to Promises-- .unThen()

JHN: Tradeoff between complexity of CancelTokens and usability in more things such as Observables

YK: Cancelation tokens have large scope than Promise?

DD: Yes: streams, observables, promises (and so on)

MM: Notification only delivered as `then` callbacks are, in a later turn?

BBR: So the cancelation is more an "intent"?

- `.reason` much be synchronously updated
- Complexity comes from dependency between Observables and Cancellation


MM: the requirement that the notification be async isn't fatal to your design goals?

No.

DT: motivation for the token specified by promise underneath?

DD: Public api is a `.promise` getter

DT: Any reason why should be? or `.then` on a cancel token?

DD: Then creating an ad hoc api for tokens? No, we have something for that: Promises

DE: Some in Web standards are considering ad-hoc thenables as more ergonomic

DD: This is bad, and just for web-compat reasons

DT: Is it the right thing to do unThen?

JH: Avoiding closures is important for some userspace Observables libraries

JHD: What happens to the Promise when you unThen them?

MM: Maybe cancellable registration should not be based on `.then`? `done` does not have an output Promise

DD: No, don't want new unsubscription type.

JH: Lots of paths seem to end up back at this

MM: Could we make this work, if it's simple?

DD: It'd be bad to add two things

AK: Wouldn't unThen be another way to unsubscribe (aside from CancelTokens)?

DD: Yes, we do have this circular dependency

MM: `.done()`?

DD: That has other problems, e.g., what if you throw?

WH: `else` and `except` have the same issue: can have an `else` in an `if, try, else, else`

WH: The current proposal claims that `else` works better than `except` because supposedly `else` allows for future extensibility to multiple `else` clauses. This is incorrect.

WH: The current proposal allows at most one else-type clause after a try. That works. It works regardless of whether the keyword is `else` or `except`.

However, the proposal claims that `else` is better because it then allows for a future v2 proposal to introduce multiple else-type clauses after a try. That's not the case because v2 would incompatibly change the meaning of

```js
if (...)
try
{...}
else (e)
{...}
else (e)
{...}
```

DD: Let's follow up on GitHub with details


#### Conclusion/Resolution

- Not proposed for Stage 2 at this point; too many unsolved problems.



## 11.iii.c Observables

(Jafar Husain)

https://docs.google.com/presentation/d/18KkpDm0Z-lGnUFxcK_ZJwSKCSalnBqjhGN8W--PyT88/edit#slide=id.p

JH: Previously, `.subscribe()` would get set up using a `.start()` method which starts delivering values with the Observable once it's already set up.

Having the consumer pass in the CancelToken is better because the consumer doesn't need to wait for the producer to wait to deliver the subscription.

DT/MM: Ability to observe the cancelation

JH:
- not designed to be dist system safe, just a primitive to design other useful classes on (EventTarget, EventEmitter)
- Schedules some things synchronously when it makes sense, just like EventTarget, though other times things are asynchronous ("releasing zalgo"). There's no real benefit to waiting asynchronously for a map, etc.
- observable



```js

// Calling
function zalgo(callback) {
  if (someConditionIsSatifiedNow) {
    callback();
  } else {
    doTheTask();
    process.nextTick(_ => callback());
  }
}

zalgo(_ => console.log("not clear if this will be invoked asynchronously or synchronously"));
```


DD: Observables, Promises and CancelTokens compose well--Observables can have APIs that return Promises, as I presented at TPAC in this example

DE: Is there a code sample which takes advantage of the synchronicity of observables here?

JH: The performance benefits implicitly come up in this code

DE: Well, if it were OK, then Promises could also be made faster by "releasing Zalgo" and not delegating everything to the microtask queue

JH: Observables encourage a more functional programming style, and Promises encourage a more imperative programming style, so it's OK to be synchronous to observables.

DD: if Observables are going to cover EventTarget, then must be sync

MM: Do you need anything else from cancel tokens for Observables?

JH: We only need the 'race' change to make the cancellations synchronous

DD: Then I don't need unThen and could go to Stage 2 for CancelTokens!

MM: Would this paint us into a corner, if we want to add unThen later?

(Discussion about polyfills, staging, getting people to use it, etc)

#### Conclusion/Resolution

- Not advancing, pushing the pause button for now






## 11.ii.d Sigil swap: decorators <-> private fields

(Jordan Harband)


JHD: More sense to...

Propose:

- @ for private
- # for decorator


BBR: Node.js looks for `#` on first line. A decorator could be at top level, but private could not

(Should key on `#!` anyway)

```js
# IdentifierName
```

EFT: All other languages use @ for annotation/decorator?

Generally, this is not the only cultural motivation for design decisions.

DE: As private field champion, I am neutral.

Kevin is strongly in favor of the sigil swap.
- `@` is a very intuitive way to signify private state.


DRR: Unclear why `@` for private is more preferrable to `#`?

RW: Allen's `@names` effectively reserved this years ago, because we always wanted to revisit. Evolved into privates today

...Moving to discussion about code that exists

- Angular
- TypeScript

JHD: There will be code that requires no modification and code that requires _some_.

AWB: There is no code that doesn't go through _SOME_ kind of transpiler. Its not like web code that cannot be broken. Transpilers can handle the code generation.

RW: (example where we changed exponentiation operator syntax and it was just a version bump)

JHD: codemods could be used to swap the sigils; the community is new to this

JK: Decorators are not part of a preset, they are part of a legacy-labeled third party preset. We have explicitly told Babel users that they will need to install something new when this comes up. We will not actually have to do a a major version change when this comes up. Specifically for changes that might occur

YK: Our changes for Stage 2 were intended to allow just decorator authors to have to upgrade, and not decorator users. These things can be considered stable. Downstream consumers will not break

JHD: Plugin option? Legacy sigil or not?

BT: Angular and TypeScript add that option? It's not a solution.

JK/YK: (discussion re: paths forward)

Updrade as they write, without change.

DRR: Code that wont go through transition phase. Concerns about docs and blogs with old syntax.

RW: We have lived through many things changing in the ES6 process, for example generator expressions being removed

JHD: And don't you have compat issues between TypeScript and CommonJS and Babel?

DRR: Yes, but that's really painful and you want to avoid it

JHD: If you're using a non-standard syntax, you shouldn't have expectations that it shouldn't change.

YK: Generally, we should be able to make changes, but we should also be able to weigh existing users vs rational arguments

BFS: JSDoc, etc use the @sigil to document something about the following declaration. If it also represents private state, I would find it confusing personally.

JHD: But doc comments are entirely different from runtime decorator semantics

RW: JSDoc is outside of our committee; we can't let them set the rules

DRR: But there is motivation to look at what exists in programming culture

DT: It'd actually be great to have a different syntax separating the comment and code syntaxes

EFT: Confusion about what appears in comments vs what appears in code?

No. But some think it matters what exists in the ecosystem.


AWB: As a sigil for identifying special kinds of variables, like private state, @ is much more common in terms of number of languages. # as hashtag is a cultural reference, but it's completely separate from @--each of these sigils have context where they evoke something in people.

JHD: This will be there for a long time; appeal to the long tail of future programmers, where "hash tag" is something of a "categorization", decorators deal with a "category" of things.

DH: Early adopters through transpilers give us very strong feedback and are great allies in our committee who it is important to value. This raises the bar for backwards-incompatible changes.

JHD: Next versions of Babel, TypeScript could easily produce a code-mod to upgrade.

DE: decorators will have to be updated between stage 1 and stage 2, but to represent the Angular team, their interest is that users of decorators don't have to change, with the expectation that most programs will not implement their own decorators but rather use decorators from the framework, which will be the only one who has to do the transition. It's not hard to imagine that it will be difficult for some build environments to update themselves.

Discussion/debate of detriment of the swap. Claim: Users call all sorts of different things '.js' and don't document which build flags they need.

JK: If Babel or other transpilers are blocking TC39 from work that it wants to do, then that's not what we're going for, and we should change the ecosystem on our end.

AWB: If we can't make changes like this, it calls the stage process into question.


YK: We can make this change, the question is: should we make this change?

KG: Rough estimate of the number of people who would have to do non-trivial change?

BT: Tens of thousands?

KG: Compared to tens of millions later?

DH: Fails to account for the trust relationship

BT: On the one hand: real cost for developers today.

AWB/JHD: Real cost for teaching for the next 50 years

WH: # as Twitter hash-tag is not going to be around for the next 50 years

JHD: multiple networks have adopted the syntax, so i think it will mean "hashtag" for far longer than that

RW: We're setting a bad precedent in allowing Babel and TypeScript code to determine the course of ES evolution

DRR: This is not the intention of TypeScript,


#### Conclusion/Resolution

- No sigil swap at this time; seems difficult to achieve consensus on such a swap in the future.
- Could revisit later, but it would require a strong argument beyond this.
- Features that are not stabilized are subject to change in general and should not be expected to be stable at all, especially if they are at Stage 1.





## 11.iii.b Async Iteration

(Domenic Denicola)

https://github.com/tc39/proposal-async-iteration

DD: I took this over from Kevin Smith and resolved a number of issues in PRs. Main issue: where does unwrapping happen?

DD: Conclusion: The contract is for .next() to return a Promise of an IterationResult, not a Promise of an IterationResult of a Promise, by:
- The @@asyncIterator's .next() .value is not a Promise
- So, for example, %IteratorPrototype%[Symbol.asyncIterator] will do the unwrapping
- Previously, yield Promise.resolve(1) from within an async iterator, creates the badly behaved iterator
- Now, the async generator object's .next() method does the unwrapping for you. Observable case:

```js
var asyncGen = async function* () {
    yield delay(100);
    console.log(1);
}
```
Then the print would happen right after asyncGen.next(), rather than waiting for delay to end, but the Promise that next returns would only be fulfilled when the delay is done.


MM: Harm in having the `for await loop` do the double await?
- I know the benefit, but what is the harm?

DE: From performance perspective: becomes a triple await. Expect most to use built in either async iterator or an async generator, both of which will follow the contract anyway.

DD: Sync iterators have a contract which is not enforced either

MM: If write something that acts like a badly behaved iterator, what ways can I "surprise" your for loop

DD: You could keep returning values after you return a `done: true`

DE: fail to clean up in your return method

YK: Hard to write correct, manual version of this.

MM: other than performance argument, don't see another correctness downside?

YK: The more you clean up after people who get manually written iterators wrong, the more likely they are to get them wrong and not notice.

MM: Good point.

DE: small changes after my review, havent looked at them yet.

BT: Nothing missing, no major concerns


#### Conclusion/Resolution

- Stage 3 acceptance




## 11.ii.c Set, Map, WeakSet, and WeakMap: of and from methods

(Leo Balter)

https://github.com/leobalter/proposal-setmap-offrom


LEO: Adding `of` and `from` to `Map`, `Set`, `WeakMap` & `WeakSet`

- Provide collection creation symmetry with Array

MM: What value does it add over just constructor

AWB: The constructor for these all take a single argument: iterable. if you what you want to do is create, eg. a singleton set and want to be able to accommodate any value passed to you, eg. a string to set. Only safe way is to put it into square brackets.

DD: Versus the constructor, I think `of` saves square brackets, and `from` is completely redundant.


AWB: it's not about saving characters, it's about following a convention that's consistent with Arrays.

DE: TypedArrays have `of` and `from`

AWB: And we added that to make a general convention

YK: We have to teach people something about the idiom of the constructor. Given that we already have new Set, it would seem to make sense to use here.

EFT: What is the cost of adding consistent APIs across all collection classes?

DD: Not deprecating the constructor

EFT: don't need to deprecate

KG: insane not to provide a way to make the collection without forcing the brackets

AK: Other evidence from the wild about demand? Is there a widely used library for this?

LEO: When working on Test262 tests, we needed many tests for the constructor taking iterables of iterables.

JH: Any polymorphism involved?

AWB: Subclassing or .call'ing this on other constructors would encounter this issue, yes; you'd need to call `.add()` or something.

- Inconsistencies between which collection classes have this API and which do not


MM: A clean API surface is not necessarily a larger API surface.

EFT: Without these, I would think that this would result in user "wat"

YK: A lot of this could be avoided by giving better error messages in our implementations.

DH: I don't like having brackets, but I also want to have new, which is nice, which overrides it.

AWB: Our API taking an iterable for the constructors is actually a good choice for a clean, general constructor.

JH: of and from can be used to create polymorphic apis

[More raucous debate]

MM: Don't want this in the language, but don't object to stage 1.

#### Conclusion/Resolution

- Stage 1 acceptance



## Arrow Generator Revisit

(Domenic Denicola for Brendan Eich)

?
```js
let f = () => * {}
```


DH: Argument against: We're probably not going to make `class *`, so why do need to make arrow *?

- We don't say that any two things that have syntax have to have matching syntax

WH: What would `class *` even mean?

widest class of strong idioms to support?

DD: Need to go back and get more evidence.



#### Conclusion/Resolution

- Stage 1 acceptance
- Please look into use cases
- Discuss syntax details and analogies further.




## 11.iv.c Built-in Modules - Let's Pick a Syntax

(Brian Terlson)

```js
import DateTime from "_?_DateTime";
```

BT: There has been desire for inclusion of built-in modules since dawn of modules. Safe place to introduce new things.

- Working with moment.js to fix date things. ~10 new types.
- Things like DateTime

BT: Asking... do we want built-in modules?

DD: We should not move to world where features added after 2018 are in modules. Leave modules to user space.

DH: Strong point, not specifically in agreement.

EFT: We could make duplicate modules for existing built-in things, and maybe eventually we'll take things out of the global namespace in 10 years
- Long term cleanup? (Probably not)

DH: One view of the future is that we wont have an enormous library, expanded without bound. Maybe individual ecosystems will introduce standard built-ins

AWB: explicitly in the charter to explore standard libraries

DH: Limit to how fast and how much

MM: Very strongly in favor of built-in modules. Issues to be aware of and address:

- global namespaces pollution way past breaking point
- any built-in module needs:
- Polyfilling must be "what becomes" the standard set of modules
- Primordials all have the property that you can freeze and make immutable
- Need polyfills for built-in modules to be able to do this

BT: Polyfills are just the start--testing hooks, etc

DRR: Feature testing--you can use import() and see what kind of Promise you got out of that?

DH: must have a registry API to reflect on modules

WH: Underscoring polyfillability requirement

WH: Also, you'd fall off a cliff when trying to use one of these built-ins from a traditional, non-module, imperative script. You'd need to convert everything for modules, since import() is asynchronous and harder to use from scripts

JHD: You need to patch it in a polyfill before anyone can use it, not necessarily synchronously

WH: And you'd have to await before anyone can use the thing from an async module load. It would be annoying if, for example, Date or Math had been modules that worked that way.

YK: It's useful to be able to see what's already present, as you can with properties of the global object

DT: We need to do this in a structured way with respect to naming, so people don't fall on landmines, to avoid colliding with user code.

CP: Some Node users like to have things in modules, even when just wrapping existing globals.

DD: What is the motivation?

BBR: This is a matter of consistency. It's fine if TC39 adds some things to the global object, so will it get "full"? It would be nice to have a system way of loading libraries.

JHD: Polyfillability is important, and it leads to the same collision issue with the same bad global namespace.

DD:

- Fundamental tension between polyfilling/collisions vs reserving/no-polyfills.
- Anyway, will we do a bad job organizing the new namespace (of things like whether Foo goes into module A or module B), and regret it, so no point in changing anything.
- modules can be loaded asynchronously
- good example: SIMD
- globals cannot

AK: As to breaking users by adding things to the global object: I didn't remember Set breaking anything, anyway. And modules for user code make this nicer, with the lexical tier making it even nicer and less risk of an overlap. So this does not seem to be a very strong piece of motivation for built-in modules.

BFS: We have to do the global/local cache for exactly this reason, for polyfillability, namely punching something out locally so it can be replaced. This is a huge topic.

MM: As a counterpoint to AK, Adding JSON broke Facebook, Facebook changed

MM: They were shipping a stringifier and parser, but not to spec because it pre-dated the proposal

(RW, sidenote: ironic ^^^ considering the conversation earlier)

DE: We had compat issues shipping ES2015 due to polyfills as well.

DH: Introducing a new namespace makes it clear that we are talking about candidate standards, rather than user code.

BBR: Why polyfill?

JHD: Fix browser bugs

AK: Testing, replacement with different functionality

DH: Maybe there should be a way to ask for the builtin thing

MM: For SES, being able to get to the outer original thing would subvert the security model.

JHD: I'd also like to replace things for my polyfills and not give access to the original one

----

BT: And let's bikeshed on the syntax! "std:..."

DH: Shouldn't it be / to meet the JS ecosystem where they are?

BBR: That would already have a semantic

BT: Another option: `import DateTime;`

DE: Seems a little confusing with the analog to `import "DateTime"` doing something completely differen

#### Conclusion/Resolution

- Stage 1 acceptance
- Need to craft a plan in accordance with committee concerns
- Polyfillability, including Mark's concern about ensuring you can disallow access to the original
- Domenic's concerns about bifurcating the world between pre-2019 APIs and post-2019 APIs
- Eric Faust's concerns about polyfills leading to a tension with the possibility of namespace collision
