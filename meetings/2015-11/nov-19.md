# November 19, 2015 Meeting Notes
-----

Jafar Husain (JH), Eric Ferraiuolo (EF), Caridy Patiño (CP), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Chip Morningstar (CM), Brian Terlson (BT), John Neumann (JN), Dave Herman (DH), Brendan Eich (BE), Yehuda Katz (YK), Jeff Morrison (JM), Lee Byron (LB), Daniel Ehrenberg (DE), Lars Hansen (LHN), Nagy Hostafa (NH), Michael Saboff (MLS), John Buchanan (JB), Stefan Penner (SP), Sebastian McKenzie (SMK), Waldemar Horwat (WH), Mark S. Miller (MM), Paul Leathers (PL), Georg Neis (GN), Sebastian Markbåge (SM), Zibi Braniecki (ZB)

-----

## Agenda

YK: i wont be giving my full presentation this time, I will provide a short update.

YK: i plan to work with somepeople like dan, and evolve it

YK: There was some concerns with adding free floating APIs for decorators, what we are going with (right now) is a mirror that decorators have access to, during the time that they are run.

YK: this based on input from several different parties, type checkers implementors etc.

DE: KS on private state

YK: KS has been working on, private methods/functions

## Observables (JH)

JH: proposals are at a reasonable mature state now, lots of iteration and evolution.

BT hand delivers coffee to JH

JH: current state of the proposal, is largely unchained since last time

JH: we have moved away from the generator interface, partly do to ergonomics

JH: return /complete confusion

JH: composing generators + observables leads to some issues, so we took an adaptive path

JH: a similar APi, with some changes

JH: sync subscribe and sync unsubscribe, to prevent

DD: Symbol.observable that does return this, caught me off

YK: is the start method related to priming, or is unrelated

JH: unrelated, start method drives the subscription

JH: DD

DD: there is no more Symbol.observe

JH: oh, thank you

WH: What are the question marks for after some of the methods in the Observer interface?

JH: Those are optional

WH: But the ones without question marks are optional too.

JH: [Removes question marks from slide]

WH: After an Observer receives an error or complete call, can it receive any other call?

JH: No

WH: What can happen while Observable.subscribe is running? Can the observation run and complete?

JH: Yes

MF: doesn't a subscription unsubscribe need to take some...

DD: no it doesn't atleast not in the readonme

MF: what if it wasn't successful

JH: we will talk about that shortly

JH: ...

JH: reviews existing behavior (if anyone caught that, jump in)

...

WH: What is Observable.forEach?

DD: what is forEach, it is an attempt to make it ergonomimc

SP: is forEach being async, a hazard

DD: I think, this is a change we will be seeing more.

DD: an async taxonomy would be unfortunate

DH: same name, doesn't mean its the same interface.

SP: so this is the start

YK: start with promises, API evolves. This becomes async loops, which is natural.

DD: its not really clear cut

DD: one thing that catches me, where is the second thisArg to forEach.

YK: its bad in async situations, thisArg entangles the lifetime

DD: other constructs do already

... it returns a promise

JH: yes

WH: Is it possible for a next to be called re-entrantly (i.e. an Observer receive a next call from within a next callback)?

JH: We don't want to allow that, but I don't believe the spec currently guards against this

JH: wk you brought this up yesterday with kevin

YK: yes, a loop re-entering during iteration, seems fatal

YK: in the middle of a block, jumping to the top of the block is unexpected

DD: yes in a for loop, run to completion invariant should not be broken

YK: if the observable has no buffering, this will just happen

YK goes to write out an example.

YK: i'll assume some async for of syntax.


```js
let { producer, consumer } = ...;

async for  (let item of consumer) {
    producer.next(value)
}
```

YK: there is a producer side "call next" on the consumer you subscribe and receive values. This is a generic statement of async loop constructs.

YK: in the observable model, consumer is an observable. Producer is an observer.

JH provides some quick context for some confused about producer/consumer.

YK: when someone calls next on the producer, without buffering the consumer then producers, and the loop is re-entered.

MM: is the producer something that calls next? Or something that gets next get called one. Lets be careful to prevent confusion

YK: there is code that calls next, and code that receives next.

MM: is the object

YK: lets reframe

```js
async for  (let item of observable) {
    observable.next(value)
}
```

...

JH: this is the classic re-entering problem, buffering is one possible solution

YK: the problem now, is the observer has no buffer, next is sync. So calling next in the loop will either be dropped, or re-entrant

MM: this is exactly synchronous plan interference problems

YK: this is likely worse

JH: if we had syntax, we would need to schedule

WH: What do you mean by the synchronous plan interference problem?

MM: See chapter 13 of http://erights.org/talks/thesis/markm-thesis.pdf for explanation of plan interference

...

MM: any sync notification will have the plan interference issue

YK: this is more specific issue

MM: it is up to the observable, how it deals with the re-entrancy problem.

YK: unfortunately, it does not realize it is mid for of.

DH: one obvious know case, is making this an error condition.

YK: it could also be buffered

DD: I think making this an AsyncIterable solves the issue

MM: i believe it is up to the observable to make this choice

DH: doesn't there have to be an API for that then?

YK: you are correct, that is a way the observable can make the differences

YK: ...

WH: going too fast to track multiple people, lets slow down.

MM: i don't believe there is a problem the language needs to solve. It is the responsibility of the observable to deal with this case.

YK: what happens if the notification does re-enter.

JH: observables should not be re-entrent, we should schedule and the problem goes away

YK: is this better solved by AsyncIterable

DD: no-one has proposed this syntax

WH: DD, what you're saying is that this should not be used with async for?

DE: there is a larger issue, it seems that this is an interlocking issue. We must consider these units has part of a single package.

YK: DE, i agree with you

YK: MM, i think you can agree there is design needed here

MM: when you changed the syntax, I realized i had a confusion. When this is async, the problem goes away

SP: yes, then the run to completion semantics we expect remain

YK: i think DE was write, we likely want to add syntax in the future. If we get these primitives wrong, we may block that.

DD: sorry, i mistated before. I agree

DE: I agree

DE: lets have JH continue, and we can continue

JH: look, we want to look at how this works with AsyncIterator

JH: i don't want to propose syntax for this future (now or ever)

JH: there are issues, there is no natural backpressure. Unsubscribe is the only option, but Unsub and and Sub are no the same as pause.

JH: previous iterations of the proposal had some support for this.

JH: we adjusted, because Observable feels like a much better event Target then we have today.

WH: what happes in this example?

```js
async for (let item of mousemoves) {
    await somePromise;
    mousemoves:next(new MouseMove());
}
```

JH: It's bad.

WH: I can see that it's bad. But which particular bad thing happens if someone does this?

AsyncIterable has a natural way to handle this, as they are more "pull" based. Observable can't really do this.

JH: I see Observable as a better event target, no syntax and this problem isn't an issue.

YK: should this be a DOM proposal

DD: it is unclear, it isn't unclear

DH: a test, does it make sense in node?

DD: promises are needed for modules

YK: promises for modules tiped it this way.

DD: it is ok if this is the venue.

WH: So Observable should not be usable in an async for loop?

JH: Should use this instead:

```js
    async function() {
        await observable.forEach(x => {console.log(x);});
    }
```

SP: forEach has the same issue as syntax for of, it is re-entrant.

JH: there are solutions, buffers.

WH: What happens if someone ignores our advice and uses Obserable in an async for loop?

JH: It wouldn't work.

WH: What about it wouldn't work? What would be different about the interfaces that would make them not fit?

JH: example code:

```js
interface AsyncIterator {
    next(): Promise<IterationResult>
    throw(): Promise<IterationResult>
    return(): Promise<IterationResult>
}
```

The Promises prevent reentrancy.

WH: Good. That explains it.

...

DH: You're saying, Observable needs to be synchronous to meet most general needs, but then that causes the re-entrancy issue, inherment to synchrnous callback mechanisms. So it won't be connected to `for await`. However, it'd be possible for individual Observables to be connected to async iterators which are connected to syntax.

... [Discussion of many generic combinators to convert Observables to async iterators]

YK: Stef raised an issue with forEach EIC protocal, blessed the behaviors.

YK: there is code in the wild that does the

DE: it would be great to capture this in the spec

DH: we have traditionally avoided rationale

JH: other methods aswell? map/filter/etc

YK: no, EIC is focused on forEach (i believe)

YK: I am also disappointed in the abstract, but we actually did this.

DD: this means we cant used forEach on iterables

YK: give me a compelling reason

DD: this wont break

YK: this will break

SP: This could retain object graphs, cause different DOM code to be executed

DD: Some npm packages do use foreach in an async way already. You're only robust against types that conform to the protocol that you're implementing

YK: Using a library together with something could cause it to break

DD: Making types into observables could be a bad interaction

YK: Let's think more carefully about it

YK: we may want to consider abondoning the EIC protocal

YK: Every collection has a forEach method, which has the same signature that it gets, so that you can write code which is generic over multiple forEach implementors

WH: Define EIC.

DD: forEach((element, index, collection) => {})

DD: Why should asynchronicity be considered part of this? The index and collection can be passed in too.

CM, JM: Why not just use a different name?

DD: It would be bad for generic code if we had to use a different name.

JH: Generic code should use the iteration protocol, not .forEach, when feature-testing and doing synchronous iteration

DD: We're making a gradual transition towards iteration, so we should be OK breaking the uniformity of forEach. There's a small window for code to use generic forEach and expect it to be synchronous.

YK: How could we help figure this out?

DD: We could market it somehow and get people to switch to the iteration protocol

YK: I think Domenic's transitional story is good

JH: So, should we advance to stage 2?

YK: Dan had an objection that I agree to. We are nervous about advancing before the syntax is worked out

DD: We want to have a full story with async iterators and have a single story to present to the web before pushing this forward

YK: And maybe things won't fit together if we do it piecewise

WH: I share that concern

JH: I think this is well-thought and we do have this all figured out. Kevin has some good drafts

DD: two seperate proposal is ok, but it seems like they should be combined, advancing together as an async plural proposal

YK: async loops

DD: async plural includes the broader idea.

YK: we should be sure the picture looks cohesive

BT: what about promises + async Function

YK: they were presented much earlier

DE: the process has changed

YK: expressions are simpler

BT: likely true, im not saying we shouldn't advance them as a group

YK: DD JH and I have been working on this for some time, and it is complex. We feel without maping it out, there may be problems

YK: Several champion groups, should coalesce into 1

JH: who is working on these people

DE: KS is working on it, and it is making progress

JH: I am concered coupling this proposal

JH: so we are looking at 6 to 8 months?

YK: we haven't..

BT: We don't need async Iterable to be at stage 2, to advance observables...

DD: we are saying, they should be one proposal

WH: I want to be able to convince myself that the two will play nice together. I don't care as much how we go about doing that.

JH: i can provide an adaptation

YK: the devil is in the defaults

MF: prior art to refer to

JH: .net etc. has these two separate protocols that work well together

YK: devil is in the details, JS !== C#

DD: I believe they feel as a package, and should be presented together.

YK: coalesce into 1 champion group, members must be convinced.

DE: i don't believe they need to be 1 champion group, they concepts must be cohesive.

YK: In practice, it sounds like a similar

M: not advancing, is blocking implementation investigation.

M: we should likely advance, and block at a later time.

YK: I think you are misreading the politeness. I believe some feel the observable may need dramatic changes.

DE: I don't see why we cant move to stage 1.

M: its a draft

YK: we do not have consensus on stage 2 entrance

M: i think it will langish.

...

JH: i believe observation as a pattern is a thing, and has a space in the spec.

MF: you care only that they overlap

YK: i believe we should avoid overlap

MF: so one should not entirely overlap

YK: I lean in the direction that it is useful

DD: i also lean in that direction, but have consumes

JH: I agree with that conclusion


#### Resolution

No stage 2 for now; let's see how async iterables turn out


### JHD Error.isError

JHD: ... brand checking, regardless of toStrings output. Error (and associated subclasses) lacks any internal way. Current done via Object.prototype.toString.

JHD: Chrome/V8 may have shipped toStringTag

JHD: Cross realm errors are not currently brand checkable

DD: This is not useful. We shouldn't be encouraging brand-check programming

WH: What about proxies? Is there any way for a proxy to proxy an Error and make it look like an Error?

YK: internal slots are cannot be trapped by a proxy so this ok.

MM: This breaks the parallelism with Array.isArray, which recursively looks underneath proxies

JHD: I'm fine with adding support for the paralleism with Array.isArray

JHD: motivating reason, determining if a given value should be wrapped or not (to promise rejection)

YK: ES5 error subclasses wont pass this.

YK: Array.isArray has motivating code

DD: We should use instanceof Error

JHD: But that doesn't work cross-realm

DD: A cross-realm Error won't work. Why do you want to check whether it's a real error?

JHD: what motivated Array.isArray

DD: it shouldn't have

YK: Cross realm is not the only issue, node ecosystem (duping in npm) has the same issue

DE: What does error give you?

JHD: Stack traces, message property, name property, and people tend to stick other properties for additional payloads

JHD: seems like there are two objections:
1. proxy support (I will make it work)
2. "I don't believe that programming model should be encouraged"

DH: really really critical use-case for Arrays.isArray, overloading function arguments and array vs non array type requires a very clear case. I don't believe that use-case comes up for errors.

YK: JHD did provide this

JHD: User uses an `Error` sentinel value, which is similar to the function overloading use case.

DD: Rejections should be for same realm errors

DH: i suspect this may be hazardous, because of "security" and you can throw anything.

YK: strings are also errors in JS...

DH: Error is not a hard predicate for cleanly divide the universe. Because plenty of usecases where non errors are used as errors

JHD: The same is with array, objects can mimic arrays often.

DD: those in favour of brand checking where, those not did not

DD: brand checking was not intentional

MM: In ES5 brand checking was very intentional, maybe not in ES6. SES depends on on this.

YK: what about error

MM: SES does not use this

DD: it is a bad precedent to make every new type exotic, to allow brand checking. Error should not be exotic.

MM: general issue is, is there some guarantee that something is given a following brand

DD: Spec has a note, saying this was a mistake.

YK: why does this exist

DD: toString fallback

DD: We should remove it

DH: i think i have not articulated the invariants from this usecass. Array.isArray was not intended for this, but it fit an important usecase. Specifically the overloading scenarios want a strong invariant here.

DH: two array types in JS, branded arrays, and objects the obey the array interface.

JHD: and methods that rely on that interface

DH: I don't believe there is a reasonable programming model that uses overloading with error. Particularly the error wrapping case for promise rejection. I feel this is going down a poor bad.

DH: Possibly an alternative approach could exist

YK: The problem is forgibility, but if someone forges an error is doesn't seem important.

JHD: why do we have the internal slot

DD: we should not have the internal slots. Errors should not be exotic

DD: map + set make use of internal slots for unobservable

BT: slots don't make an object exotic

DD: You are correct, exotic is the wrong word.

DH: With a well motivated programming model, i could be convinced.

SB: An example would be a debugging tool. I want to be sure I do not loose this information because currently we cannot detect.

SB: it is interesting for what this means in general. Observable land may not care, but does the entity may carry information for the system. Without brand checking that may be lost

JM: ...

DD: you cannot...

JHD: passing additional information between realms may not be good, but it is done.

JHD: if i find further examples, would that be sufficient?

DH: no, but it would help advance the conversation

DH: I believe a programming model could be extracted from this. We should likely not bless emergent programming models, merely because they exist.

DH: we should excercise our critical thinking, is this programming model worth standardizing.

JHD: I want to gauge if this is worth engaging further

DD: We should assume, error internal slot was a mistake.

YK: we should avoid encouraging brand checking as a pattern.

MM: SES uses instanceof Error, but not used in any security critical areas. Basically, inservice of implementing a getStack API. Case splitting between browsers, if it is an error fetch its getStack. On FF, if it is an error apply the dot stack getter property. When accessed it is wrapped in an try/catch

DD: we should standardize what exists cross platform

MM: it does not, a stack property exists, but the content of the stack is widly different, and could not be standardize without breaking

MM: Some api should exist, which extracts a spec'd stack from an error object. non errros wont carry stacks. Which implies that an error is unique.

DD: Ember.isError does not seem like the right tool

MM: Maybe System.getStack could use it.

YK: ...

JHD: Regexp is the only one?

...

SM: can you explain more

SM: isn't stack an anti pattern as it is branding

DD: If it does not have internal structure (private data) branding should not be encouraged

YK: public interfaces should be truthful

SM: what about strings

DD: strings, arrays, math have internal (private state)

YK: Private state should not be taken in account when and outsider inspects.

SM: ...

YK: this is daves point about overloading

SM: There appears to be missing mechanism to detect tag/branding. instanceof doesn't work across realm

DH: value types should be branded, userland data-types that have unambigious testable distinctions, and pattern matching those attributes is correct. I don't believe DD is saying that, but we need to think about how to distinguish the two.

SM: ad-hoc tagging seems like a common problem

DD: stringTag sounds like the feature here.

DH: does flow have ad-hoc union types.

SM: yes

DH: so similar to typed Racket

JM: yes

DH: that seems like a very natural fit for JS for this programming model. Deferring this problem to the type system.

DH: What is the flaw in that way

SM: ad-hoc and security issue. There was an issue in react. If there was internal branding this could have been avoided

SM: this is more general yes

DH: should there be a more general tagging/branding mechanism.

SP: WeakMap and proposed private state can do this.

YK: !@#$!@#$!@#%$%^& (discussing actual JS syntax)

SM: toStringTag doesn't pass between JSON,

...

JHD: I want to make sure doing more research isn't a waste of time

MM: there must be a motivating use-case, if there is no such use-case it is a waste of time.

YK: we should be sure the motivating cases are good

JHD: the risk grows the longer we wait.

DD: it sounds like more information is needed.

#### Conclusion/Resolution

- More research

DE: can i propose I18n?

... [everyone yes]

## INTL

CP: todays meeting update:
    1. html version of  ECMA-402
    2. just sent to istvan
CP: same workflow for 262

CP: same tools, same flow. getting the HTML version similar (hopefully same) as 262

CP: asside from that, we fixed the tutorials, and ? syntax in the spec instead of returnIfAbropt

CP: new features

EF: first thing usage experience:
    402 1.0 afew years ago, and has made its way into browsers. It is being used in many ways.
    Node is getting it
    Gecko's UI is using itself
    Chromes UI is using itself
    Library level: jQuery globalize, formatjs (suite of libs) l20n from mozilla l10ns an int.js polyfil and more
    We have experience at libs, and all the new web stuff at Yahoo is using this under the hood. (For safari which doesn't support it yet)

?: Firefox OS is using intl js for all the platform level stuff.

EF: any users of the intl library all have similar requests
1. plurals
2. relative Time
3. duration
4. unit
5. list
6. ...

We support in polyfills, but we need more.

EF: cross implementation lack of specification for data, is tricky.

CP: we are not using es discuss for this, we are using the github repo for issues.

YK: seems good to me

BT: we are still reading ESdiscuss, but issues seem good

CP: when we want to take one of these features into consideration, we can go through esdiscuss

EF: v3 clearly wants more, but we lack information. More experimenation is good. We would like to allow userland to explore further.

EF: our abstract algorithims are commonly required for users to experiment. This also includes the corresponding data.

EF: to encouratge experimentation (to acquire more info) we want to expose some more primitives

EF: formatToParts just strings is unsufficient, order/context is hard to encode.

...: Some formats are meanlingless, but important to take into account. The construction of the datetime string is very cultural

EF: essentially it is lossy

EF: formatToParts aims to explain how format even works. It aims to provide an array of objects, with the relevant context. Allowing userland code to do its thing

YK: changing formatToParts should change format

...

EF: unfortunately .format doesn't need to be bound.

ZB: lets open issues and see if we can improve this thing.

YK: regardless it seems like it should still work.

DD: it is unclear

YK: it would be nice

DD: but we understand if the previous choice may prevent this

ZB: implementing the gecko patch, the formatToParts is much slower.

YK: sounds like the same shape as the RegExp Problem. If its overriden, take a slow path.

BT: why an array of objects

EF: order would be lost.

BT: it seems when I care about the subset, it is more complex

CP: I actually believe, it would likely be more complicated.

ZB: LTR RTL languages alsopresented some issues, this pattern worked well

EF: unless it is too expensive, having abstract operations available.

BT: in essense the abstract operations are likely just spec refactorings.

BT: in Windows this would not be straightforward, but is probably doable, using a Windows 10 API... I'll follow up to make sure.

ZB: Windows 10 certainly does things similar to this.

CP: Edge does not use the algorithm we have, just delegates to Windows for best effort?

BT: yes

BT: I agree this should be doable, and in general I'm not concerned. I don't think it constraints implementations too much. Edge might need to ask Windows for a better API.

EF: (next slide) "How: Adding to ECMA-402"

DD: is it possible to move away from the bound method pattern?

BT: no; not web compatible

EF: (next slide) "Current Status"

(Discussion of IE not using CLDR vs. everyone else using it.)

EF: we would like to advance to stage 1, we dont have spec test. But we have draft impl + gecko imp.

BT: I have to get the windows guys to sign-off to on the new API, so something concrete (spec text) would be best.


#### Conclusion/Resolution

- Stage 1 acceptance
  - for exposing abstract operations


### PluralRules

EF: apps must solves this, if they want to use I18n in the UI. This is heavily requested, we have implemented it.

ZB: it is hard to implement correctly, CLDR gives the required information

(some visual examples)

ZB: Without this, the shear amount of complexity required blocks good localized sites.

ZB: two plural forms in the same sentance explodes the complexity.

ZB: this nicely supports the simple case, and the complex case.

EF: also good for relative times "1 hour ago" "2 hours ago"

BT: is there precedent for something like this

ZB: gettext for 30 years

EF: Java's plural format is built on a lower level class that is uses for plural rules and categories (I believe)

EF: we would prefer this to be non optional

ZB: if you cannot afford to store all the data, keep one language

YK: 402 should be take it or leave it, partially support would be unfortunate

YK: all features should be implemented, languages should be based on available data.

M: What about an implementation that supports currency but not plural, since message formatting handles it

EF: It seems like it would be cheap to then provide the real thing.

M: paying for the data would be unfortunate

EF: loading it for all of english, is 800bytes or so. All languages ...

SP: wouldn't this be better solved by partial locale data. Implementating a subset of features seems fatal.

BT: would like you all intl or none (or partial subset)

YK: it is possible to imagine scenarios where it is an extreme trade-off, but that isn't how the web works

BT: the thing that is concerning me is. We need to support JS on IoT devices.

YK: and your guessing what so support?

BT: we need to make a choice, based on budget avilable

ZB: I would like to point out, you cant support everything. There is always an edgecase, so we designed 402 APIs, by using fallbacks. By the end of the day, you will get currency. It may not be in chinese, but it will be A currency.

SP: does that deal with the concer?

BT: Yes it should, there is a concern though. If a platform wants to implement parts of i18n in a seperate namespace.

YK: is seems like portable code has been thought about. By allowing all data

M: but what if a given platform provides an alternative

YK: what about eval/toString. It seems like they can provide the alternative and carry on.

BT: if intl is all or nothing, some may take nothing.

ZB: like SIMD, intl should always be there.

DD: either 402 or not

YK: i don't believe 402 should allow piecemill.

MM: what about partial data sets

EF: the APIs are built for this, as they are built to fallback.

WH: CLDR's cross product of locales refering to other locales' names, time zones, their currencies (including various plural inflections), etc. is enormous

ZB: we don't ship those, in-fact we designed the API for support this.

EF: CP has written up spec text

EF: we need to deal with decimals, the spec test needs to be updated

CP: we need to figure it out yet


### resolutions stage 1

## Abstract Locale Operations

EF: aspects of each of the components currently go through some abstract operations, we would like to expose them

ZB: Intl.getCanonicalLocales(locales)

ZB: naming suggestions are open.

ZB: This is useful any time we do language negotiation, this allows us to verify. Implementing this in userland is like 4000 loc, exposing it instead has a clear advantage.

DD: what are the input types

EF: same as the numberFormat

DD: eh. i guess consistency over design

EF: We should about it yesterday, but we felt that it would be simpler this way.

DD: consistency wins it for me

EF: next is a Intl.getParentLocales(locale), the naive implementation would fall short as many exceptions exist. Userland implementation would likely be non-obvious

ZB: for example serbian cyrillic and serbian latin don't have obvious fallbacks

ZB: We don't just provide the final solution, the proposed the higharchy of locale inheritance

ZB: We wanted to implement some userland custom code at mozilla, unfortunately we where forced to important several thousand lines of code from the internals.

BT: does this require a giant table

ZB: No, just as the rest of the model, additional data improves the results.

YK: is there any part of the spec that requires explicit data to be loaded

ZB: no

ZB: the goal is, to allow (if data available) the best possible information.

EF: you are allowed to do better

EF: Intl.resolveLocaleInfo

EF: this is an API that has a very similar signature. It will provide the best possible (based on data) resolved language.

EF: the results provides a summary of available information, this will grow.

MF: why not have in seperate functions

EF: the number of data points grows, adding 1 method per data is unfortunate.

DD: what about "current system preferences"

(discussion about user settings/preferences)

DD: This same API, could be used to get the users preferences

EF: maybe, leave out the locale argument, so the default provides this.

CP: user fingerprinting is a potential concern

ZB: this will be happening

EF: We propose stage 1

... [consensus]

ZB: our next step spec proposals and get feedback

BT: outline is good, full spec text isn't needed right away

DD: spec text for 2

BT: i would love to give feedback before to much investment in spec test.

CP: it shouldn't be to bad, largely this is extract existing abstract algs


#### trailing , in functions arguments

JM: fixes from yesterday (cover grammar support), MF BT looked at them.

shows spec text

DH: looks good!

### resolution: advance to stage 3

#### Test262 updated

BT: not many new tests recently, except for SIMD.

BT: many open issues, but nothing worth mentioning.

BT: we dont have tests for some things, like tail calls.

YK: is it possible

BT: open question

BT: destructing needs to be done

DD: some work to share tests between destructing binding and assignment

BT: Async functions have some more tests, and we'll discuss it more in two months. Async functions will remain stage 3 in January.

#### System.global (JHD)

JHD: no reliable way to get the global cross platform.

JHD: shims need it, but required using many tricks.

DD: rationale is good, more bikeshedding on the details.

SP: node-webkit is gnarly here, it belives its both node and web... many existing feature detections failed.

DH: MM has many ideas here, we should be careful to involve him

JHD: I spoke with MM, and tried to get his input

JHD: Were can we put it. MM felt on System as along it was configurable.

JHD: arguments against reifing self, may break existing code

DD: the ideal way is to reuse something exist, whoever feature detection is the tricky one.

DD: global.self maybe ww, global.global maybe node?

JM: whats wrong with with System.global

DD: its long

DD: existing names are accessors, configurable with no setters ony getters, changing that sounds dubious

JM: self is a common idiom.

YK: self is an existing trap

DD: global is my preference

JM: what about System.global

DD: I would not use it

JHD: let me continue, we can bikeshed more

JHD: it can be a windows proxy, it should be the thing new Function("this") would return.

(discussion about windows observability)

JHD: The goal is to use the existing spec to frame what is returned.

DH: CSP concerns, for example eval is prevented.

YK: sloppy CSP already gives access to the gobal

DH: are they guarding from access to the global.

MF: not really https://github.com/w3c/webappsec-csp/issues/2

JHD: in all reasonable platforms, the global is accessible. This merely provides a consistent solution.

YK: SES is ok with this, even though they provide no global access.

#### Conclusion/Resolution

 - Stage 1


# Wrap-up

JN: thanks to paypal, for hosting the meeting lunches and breakfasts. Excellent thank you

JN: Thank you to paypal and ecma for dinner

JN: next meeting is January 25, 26, 27 in SF at salesforce

JN: In january meeting, we must wrap up the june 2016 release.
