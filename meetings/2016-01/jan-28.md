# January 28, 2016 Meeting Notes
-----

Eric Ferraiuolo (EF), Caridy Patiño (CP), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Chip Morningstar (CM), Brian Terlson (BT), John Neumann (JN), Dave Herman (DH), Yehuda Katz (YK), Jeff Morrison (JM), Lee Byron (LB), Daniel Ehrenberg (DE), Lars Hansen (LHN), Nagy Hostafa (NH), Michael Saboff (MLS), John Buchanan (JB), Stefan Penner (SP), Sebastian McKenzie (SMK), Waldemar Horwat (WH), Mark S. Miller (MM), Sebastian Markbåge (SM), Zibi Braniecki (ZB), Andreas Rossberg (ARB), Ian Halliday (IH), Keith Miller (KM), Tim Disney (TD), Miško Hevery (MHY), Brad Green (BG), Kevin Smith (KS), Brad Nelson (BNN), JF Bastien (JFB), Shu-yu Guo (SYG), Rick Waldron (RW), Staś Małolepszy (STM), Dean Tribble (DT)

-----

## Agenda

https://github.com/tc39/agendas/blob/master/2016/01.md


## Function#toString && Function#isPortable (MF)

Slides: https://docs.google.com/presentation/d/1o8jVhyVHljCFyXdxe-V4X1pUmCgx0FuFvEO0fFP4LJU/edit?usp=sharing
Spec text: https://raw.githubusercontent.com/michaelficarra/Function-prototype-toString-revision/fc69a0a31dc6d625736bfbb712ac782eb241ff3d/proposal.html

MF: No longer interested in "portability"

YK: Do your changes cause a method with super to produce an evaluatable function with .toString()

MF: No.

MF: < Presents new spec text >

MF: Either you are a bound function exotic object or other callable or throw an error.

WH: What case does calling toString on Math.sin fall into?

MF: The last one: [native code].

AWB: What if I want Math.sin to be self-hosted in ECMAScript?

MF: Host can control the internal slot...

AWB: Not if it's an ecmascript function object. An ECMAScript function object is an object that is created syntactically from ECMAScript code.

MF: implementation cna pretend there's a slot.

AWB: Concern is for self hosted built-ins you want them to be opaque.

MF: We can add a case for built-in functions. Is that something that we want to do?

BT: We should mandate that built-in functions show [Native Code]

YK/MF: Agree.

AWB: Are implementations allowed to hide source code for ES functions?

YK: toString is a defacto reflection mechanism. Web depends on it.

AWB: Not all code runs on the web.

AWB: Seems like a value add.

MM: It would be a value add for an implementation not to support sloppy mode... but it can't claim to be conformant.

(Discussion of how imortant toString returning source is...)

BT: Bound functions should show [Native Code]

MF: Currently an option.

(Agreement that it should be required)

MF: Ok.

*discussion about what method name to use, and what if it isn't an identifier*

MM: Don't use the current value of the name property.

WH: This won't solve the problem of it sometimes not being an identifier. You can have a computed property name for a method that doesn't evaluate to an identifier.

MM: Treat the [computedname] expression, instead of the string it evaluates to, as part of the source code of the function?

WH: That's not really part of the source code of the function. It's part of the context.

MM: It's the same situation as with class extends expressions.

YK: The fact that you can omit the extends clause is an issue.

?: Just use the original source's AST.

MM: Let them throw away comments.

?: What about calls to `new Function`?

WH: Don't want to require comments and whitespace to be preserved. And what about comments on the boundary of the function (before the first token or after the last one)? Are they part of the function or not?

*back and forth about preserving whitespace or not*

WH: Current engines are inconsistent about whitespace, even within one implementation. Firefox sometimes preserves whitespace, sometimes doesn't. Different implementations differ in many ways on this. Reiterate not mandating preservation of whitespace and comments.

MM: Agree.

*later MM changed his mind again*

No consensus on whitespace treatment.

#### Conclusion/Resolution

Keep exactly the original source text starting from the position of the first token of the production and ending at the position of the last token. Within this text, keep comments and newlines. Still no conclusion about insignificant whitespace, i.e., whitespace other than newlines.

- MF will adapt what was discussed into the spec text, advance stage 2 that is complete

- Reviewers: MM, WH, YK

## larse

LHN: slide (formal reviewers)

LHN: looking for multiple reviewers

WH: I have memory model expertise and will review that aspect. Also suggest having Hans Boehm look at it.

BT: this specification requires continent etc.

LHN: it doesn't have to be deep, but we require some framework to be in-place.

DE: any typed array designers inovled

AWB: me

DD: If he comes to us in afew months, and presents the API, we would prefer to not then have to dig in

DD: last time the TC made changes quite late, it would be great to catch those early

...

LHN: some changes to the typed array spec, to accomodate SharedArrayBuffer, should be vetted

AWB: I would be happy to discuss

#### Concluson/resolution

* DD DE AWB will be reviewers

Rundown of reviewers (from LH's notes):

- littledan will represent v8
- brian for chakra (but he will look for a delegate)
- unclear for jsc (LH will ask filip pizlo)
- waldemar for the memory model
- allen (informally possibly) for TypedArray changes
- domenic for agents/vats/whatever

LHN: Also desirable for everyone to read the spec and pitch in, the more eyeballs the better.

## 5.xix Proxy Enumerate - revisit decision to exhaust iterator

(Brian Terlson)
https://github.com/tc39/ecma262/issues/160


BT: issue with proxy enumerate trap and for-in, where implementations are prevented from pre-populating the list of keys in the object, because the iterator causes observable affects. Which means the iterate must be pulled for every iteration. Last meeting we thought it would be ok if the enumerate trap exhausts the iterator, we thought that would solve the problem. The issue was, now their is an observable difference between an object and proxy of that object, mainly due to delete.

AWB: thats wrong

AWB: if you doit as part of for-in it wont be a problem, as for-in can be specified to ignore deleted keys.

BT: right now, for-in does not do a has-check for every property. If a key is deleted, it wont be seen. That is how proxies in edge work today, deleted keys (during enumeratino) are not visited.

BT: We could say, for-in (or proxy enumerate trap) will exhaust the iterator and check on each iteration

ARB: that is what v8 does

BT: I dont want an observable difference for for-in

YK: the has check on a proxy is non-observable anyways, and often it can be skipped anyways.

AWB: the classic spec if i recall, you cannot get a duplicate key, if something is added during enumeration you may or may not see it, if it is deleted before you enumerate it you must not see it.

ARB: enumerability is also something we need to take into account, I think more issues exist, we should likely keep it vague.

YK: thats one approach, as we don't have this defined, maybe the proxy needs to reflect the implementation

AWB: proxies can do very interesting things

YK: the enumerability is already quite  hazardous, this isn't really anything new.

MM: it seems like these rules could be specified, could we just do that?

MM: v8 on normal objects does snapshot + has check, but not post-snapshot enumerability check.

YK: So far, we have spec'd this as vague, to allow divergence

MM: we should specify this,

BT: i will need to do some exploration

MM: does anyone, based on their implementation know that they would object to specifying proxy + regular objects, the semantics of snapshot + has-check

BT: I would love that

MM: let's leave this to you to investigate, and a future meeting.

YK: we want this for es7

DE: can we get consensus on GH.

WH: Are we specifying a long delay before you get the first element if you begin iterating on an array with a billion elements, even if you just want the first few?

BT: yes we are, but we all do this already

ARB: one issue with snapshotting, is how does it relate to the prototype chain

BT: yes this is under specified

YK: we should try to

AWB: the reason it was under specified was

BT: jscript?

AWB: ya sorta, minor variations among implementations. At that point in time, consensus  was dificult it seemed like we couldn't do this. If we can, we should

BT: unsure

YK: if we can, we should

AWB: the other issue is: it isn't clear to me why we have an enumerate trap

BT + ARB: me neither

AWB: for-in has enough meta operations to define what we want.

MM: we should ask tom, as he thought this stuff out in great detail

DH: isn't that question too late?

DE: it isn't a web compat issue yet.

DH: it isn't obviously a mut question, but we may not be able to.

DH: i do not know how often this is used, isn't enumerate a fundamental trap.

YK: i agree that is a thing

... discussion if enumerate is fundamental ...

YK: spidermonkey people have the strongest here

BT: We have internal users of proxies, we may have a constraint

YK: that isn't a constraint it can be deprecated,

BT: comes at as cost, but i doubt its actually used.

ARB: one reason for enumerate trap may be that the set of all properties is larger then the set of properties that are enumerable, so a performance difference is pssible.

YK: getOwnPropertyDescriptors + filter out enumerable, covers this

BT: what is the trap name for all property names ... getOwnPropertyNames

BT: should for-in just be implemented as that.

BT: we would get rid of enumerate trap

ARB: doesn't one return an iterator

AWB: i think the enumerate trap was the only MOP operation that returned the iterator

...: if we have serious performance implementations for internal, we will keep it, but wont expose it

BT: it might not be possible to... we will have to give an explicit ordering for prototype properties.

AWB: the only way to doit, is to set some requirements, vague or not

#### Conclusion/Resolution

 - provisional consensus to kill enumerate trap, contingent on running it by tom
 - for-in does [[HasProperty]]

----------------------------
Response from Tom:

A few things come to mind:

1. Faithful virtualization of the prototype chain. We decided that the Proxy should always be in control of operations involving prototype inheritance. This includes has, get, set and enumerate. For all of these operations, when executed on a normal object, they will walk the prototype chain until they hit a Proxy. After that point, full control is delegated to the Proxy. If a Proxy would only be able to override get() and set() but not enumerate(), this may lead to inconsistencies (without an enumerate() trap, the VM will have to externally walk the prototype chain of the Proxy via getPrototypeOf()).
2. When we designed Proxies originally, we made the design decision to map many built-in operations directly to specific traps, even if these operations could be expressed in terms of more fundamental operations (get, set, has, enumerate are all examples here). The design argument here was always improved performance by reducing the number of temporary allocations.
Much later in the design, others started pushing back on the number of traps, leading us to reconsider some traps, e.g. I recall the "hasOwn" trap was dropped in favor of checking whether (getOwnProperty() !== undefined), even though it is strictly less efficient. I don't have a view on the actual cost of expressing enumerate() in terms of lower-level MOP operations, but it seems obvious that there will be more allocation costs involved. The question is then: if enumerate() gets dropped on these grounds, why not get(), set() and has()?
3. As far as I recall, enumerate() is the only trap that actually returns an *iterator* over the property names, allowing efficient virtualization of objects with a large (or potentially, infinite) number of properties. The only other trap that returns a list of property keys, "ownKeys", returns a manifest array of property names.
4. enumerate() had weaker invariants than ownKeys() [just like all the traps that deal with prototype inheritance, since a frozen object can still inherit from a non-frozen object, leading to weaker observable invariants in general]. If one would express for-in in terms of repeated calls to ownKeys(), the invariant check overhead may be substantial compared to just calling enumerate().

Unless there are really good reasons to get rid of enumerate(), I think it should remain in. For me, (1) and (3) are the killer arguments: consistency with has(),get(),set() and efficient enumeration via iteration.

Feel free to forward this mail to TC39. I'm happy to engage in follow-up discussions, just ping me when needed.


----------------------------


## 5.xviii Exponentiation Operator (RW)

RW: I implemented the changes, tried to get brendan to review it (no luck). BT reviewed, and chakra implements

RW: BT and I went over it line/line, followed up with new tests, and in the last 20 minutes per domenics suggestion I duplicated the applying ** operater tests, so both map.pow and ** tests. the SM folks will be happy that they all passed (except for one, but that's expected).

RW: chakra implements, applause for OSS chakra

RW: motion to include to stage 4, inclusion for 2016

BT: thanks rick

RW: any objections

#### Conclusion/Resolution

- Stage 4 acceptance


(Lunch)

## Afternoon Agenda

1. Date and place for the next meetings

#### Conclusion/Resolution

- Meet in Munich Monday May 23-Wednesday May 25
-

## 402 needs reviewers (20min)

CP: HTML version of the second edition is now public (www.ecma-international.org/ecma-402/2.0/),  just like 262. We have done some re-orgs on the spec to make the new features easier to include. Many new features have been proposed, lots of new contributors, good momentum. At this point we need reviewers

DE: first we need to propose to stage 2.

CP: we want to move 3 things up, and get reviewers, and one small detail

AWB: before we get to stage 2 things, what is the status of 2016 402. COuld we have a summary of what is in 2016 402.

CP: it will be very small, some fixes related to locale parsing. One or two functions, that will expose existing abstract operations.

AWB: are those written up, you know the schedule, that means by the next meeting you have to be done

CP: yup

EF: we have one potential problem to discuss,

EF: slide edition 1 [[CALL]] Behavior (Considered a Spec bug)

AWB: thats basically, at the time the spec was drafted that was how the current thinking of internal slots to happen. This allowed internal state to be dynamically added to instances, that was decided inappropriate, and ultiamtely abondoned.

EF: the problem was, a library intl, format cache. using memoizing used this pattern. This pattern was introduced in sept 2014. The issues rolled in nov 2015.

EF: I fixed this in a patch release of the library

EF: slide (tl;dr of intl-format-cache dep on Edition 1 Behavior)

EF: slide (intl-format-cache@2.0.5)

EF: slide (Potential Impact? (Excluding Yahoo's Usage)

EF: slide (ative wart removal)

EF: impact is likely large.

AWB: in addition 1 of 402, it was possible for a single object to be multiply constructed, and get the private state of each constructor. Hopefully no-one has done that

EF: ya, not our problem.

AWB: it occurs me, leaving it as addition 2, their is likely a work-around. Specializing object.create for this pattern.

DE: no...

EF: slide (tl;dr of intl-format-cache dep on Editirion 1 behavior)

DE: if we can scope these changes to the intl functions, rather then O.create

AWB: you don't want this to be in the spec. So what is the smallest thing one can do to maintain the compat.

EF: we can also rollback the changes in 3, and see the impact.

EF: slide (active wart removal)

RW: the first addition was a mistake,

everyone agrees

RW: we fixed it because it was broken, the fact that library relied on the brokeness is unfortunate. The only way to fix this is to re-break it.

DE: What should implementations do

MM: i think we can fix this

RW: @MM, did you review the comment i posted?

MM: please send me the link to review.

EF: presents comments on GH issue 57

...MM explores the code...

MM: what you do, is the call behavior of Intl.Collator if its sees an object that inherits from Collator.prototype that is not a collator, it creates a new Collator and uses a unique Symbol to hang that newCollator off of that object. All the builtin Collator methods then checks whether their alleged Collator argument is a non-Collator with a property named by that Symbol. If so, it looks up the Collator state on the value of that property, i.e., it forwards all state lookup to the value of that property. A hack to deal with an emergency. No security issue here, so no problem that the Symbol can be read and used for other purposes. No accidental collisions, all the primitives must then detect the collator.

SP: this isolates the fallout

MM: it can be self hosted, after the emergency is over can be removed.

RW: (Agree)

YK: We may want to leave a note

AWB: Annex in 3rd Edition that explains the compatibility issue and how to address it.

YK: as long as its in the actual spec we are good

EF: DE could google try Mark's suggestion of restricting .call's extra behavior to just this case, on the output of Object.create for a given Intl instance type this out?

DE: yes, it seems reasonable

#### Conclusion/Resolution

- wont roll it back
- try MM suggestion in chrome to support web compat
- add note to 402 annex (third edition, references second and first)


## 5.xix (Revisit) Proxy Enumerate - revisit decision to exhaust iterator

BT: Proxy.enumerate is removed, should Reflect.enumerate be removed?

JDH: it would be unfortunate

YK: I think its worth having a bucket that is 1:1 with the MOP operations, reflect happens to do that. If we remove Proxy traps, MOP should also see a similar removal.

AWB: it seems alot harder for Reflect.enumerate then Proxy enumerate trap

BT: the usecases for Reflect.enumerate outside of proxy enumerate trap isn't very compelling. If we feel comfortable removing the proxy trap, we should feel comfortable removing Reflect.enumerate

MM: i think you are correct, but if some interleaving between enumeration + proxy traps

MM: cross browser web-pages, can't

JHD: polyfils have this

YK: they will continue to work

BT: any objection to remove Reflect.enumerate

MM: We need to check with Tom Van Cutsem first.

#### Conclusion/Resolution

- Remove Reflect.enumerate, contingent on further information from Tom

## 8 Ecma 402, Edition 3, Advance stage 2

(Zibi Braniecki)

402-related slides: https://drive.google.com/drive/u/1/folders/0B1rFz38aICo2YUpVd0VfTUdwRW8

## formatToParts

https://docs.google.com/presentation/d/1GuPC_pD84VFf4Yc8NKNDFBBmX6uY9DMA5CtKZoAdrzM/

ZB: slide (format to parts)

ZB: further customization, requires exposes of abstract operations such as format to parts.

ZB: slide (current status)

ZB: polyfill has it, gecko has it behind flag

ZB: we are looking for reviewers

AWB: how about formatParts

DE: its the output  not the input, so formatToParts

DE: I will review

RW: I will review

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers:
    - Rick Waldron
    - Daniel Ehrenberg


## Intl.PluralRules

https://docs.google.com/presentation/d/1WflzD4YMOYYmJDAmjwmG0wi5GnLZd74EwvDRKSL9vA8/

ZB: slide (usage)

ZB: we are just following CLDR conventions here

ZB: we are at stage 1, we have spec text. Current status we worked on decimal parts, which was a previous concern

WH: How do you distinguish between 1 and 1.0? These two have different plural rules in some languages but 1 === 1.0.

DE: extra fields in the input to specify number of fractional digits

EF: to mirror what number format has

ZB: reviewers?

MF: Is there a reason why we are using strings instead of other output

ZB: yes, the users will use this in a switch catch, those categories are part of the CLDR

MF: some other identifer could be used on a stable object

YK: the web has moved away from this

YK: the web has stopped to create constant that point at a number

DD: yes, absolutely

AR: Yes, anyone presenting a sepc with a number constant will be asked to re-work it

DD: userland could implement if they want.

AWB: what value would we actually deliver, in both cases they need to know the name

YK: they are both constant

SP: userland can do this

AWB: Yes, I don't know how...

ZB: reviewers?

SP: me

DE: me

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers:
    - Daniel Ehrenberg
    - Stefan Penner


...


## Abstract Locale Operations

https://docs.google.com/presentation/d/1JvUv_i7rb0UF6G-nl-Eu3pHvJsmhpfqV6qWwJ6yP2aA/

ZB: we wont provide all formatters, but we will all users to build their own.

ZB: will allow users to build language negotiations

ZB: slide (Intl.getCanoncialLocales(locales)

ZB: Intl.getParentLocales(locales)

ZB: many exceptions here,

ZB: we have all these operations, somewhat inconsistently used internally. Now we will expose them, and also use them in-consistency

ZB: there are 100 exceptions to the rules

ZB: slide (Intl.resolveLocaleInfo(locale[ ,options])

WH: What's the point of passing in {direction:true, firstDay:true, hour12:true} when retrieving the options object? Why not just return the whole object?

CP: why filter, why not just return everything

ZB: optimization? We can drop it

ZB: slide (current status)

MM: can we agree that the second argument that contains the filter, that we are getting rid of that

ZB: yes

CP: yes

WH: yes

MM: does the api return a fresh one?

MM: It needs to either return a fresh one or a deeply frozen one. Otherwise you'd have a global communications channel.

ZB: unsure

DE: yes

CP: whats in the content of the object returned, is it spec'd

SP: needs further exploration

#### Conclusion/Resolution

- Stage 2 acceptance
- reviewers
  - Stefan Penner
  - Daniel Ehrenberg


## Intl Formatter preview

ZB: this is still exploration

ZB: slide (Intl.UnitFormat)

ZB: lots of un-answered questions

ZB: slide (Intl.DurationFormat): Video player or timer in a watch. Distinct from UnitFormat

ZB: slide (Intl.ListFormat): Localize "Mary, John and Nick", including change String.prototype.toLocaleString()

ZB: slide (Intl.RelativeTimeFormat): "two seconds ago", etc.

ZB: everything is in CLDR, and we want to expose this

DH: A lot of these are solved in userland, what is the scope? Is it for things that are already there, we want to surface those? If its not in CLDR do we leave it to userland

ZB: yes

CP: also prioritize it on the amount of data and complexity

ZB: these 4 handle the most common problems we have seen.

CP: considerable existing bikeshedding, but more are invited to join.

ZB: stage 0?

#### Conclusion/Resolution

- Stage 0 acceptance


## Async generator functions
presenter: Kevin Smith
link to presentation:  https://docs.google.com/presentation/d/1OwDb4WH9pkdEFVhsY5kjaJ6MF1KrxBNQWpWc9SymweQ/edit#slide=id.p

KS: slide (overview)

KS: Async generator functions return AsyncGenerator objects, with a for-await loop

KS: Review iterator interface. Async iterators are analogous, but return a promise of the the IteratorResult, and use @@asyncIterator

DH: AsyncIterator extends AsyncIterable, right>?

KS: Yes.

KS: AsyncGenerator is what you expect, with next, throw and return. Why? Integration of existing concepts, rather than creating a new one. Pull-based, no extra backpressure protocol required, easily converted to push-based Observables. A nice feature of this, with streaming applications no backpressure is required. It can easily be converted to a push based source, by taking the async iterable and pushing it.

MM: by convert you mean adapter

KS: yes, exactly

KS: slide (The async iteration statement) – async variant of for of

KS: slide(Bikeshedding: Why for-await?)

DH: pretty strongly agree, the thing that is actually signalling, is that there are additional awaits

MM: additionally, these are interleaving points.

KS: ctrl-f for await, makes it easy to find interleaving points

YK: it is important that we are allowing two more control states to be reified through this mechanism

KS: that isn't a bikeshedding concern, rather a concern about modelling...

YK: No, I am fine with the modeling. I want to be sure break/continue control state to happen.

YK: async modifier takes a construct..

DD: it converts it into an async context, does it make it async itself.

DH: i dont think thats the intention

YK: Introducing more async functions would be good, but here we're talking about not introducing one so await makes sense

KS: we can explore other contexts, async do etc No baring on this.

KS: Slide (Details: Promise Unwrapping)

SP: so yield will unwrap any thenable (not promise)

DH: i am having a danger will robinson moment, composing two concepts, and now we merged them.

```js
async function* agf() {
    yield Promise.resolve(1);
}
```

WH: Are you proposing that the above do the same thing as replacing the yield line above by 'yield 1`?

KS: Yes

WH: We've had the discussion before about whether promises stack or they are idempotent. We decided that one after a long debate to prevent promises stacking.

DH: yield and await merging.

YK: yield and await have different precedence is pretty bad

DE: doesn't it already do this, as we recursively unwrap.

KS: But we recursively unwrap the IteratorResult, not the data slot!

DE: Oh! So you want to await that?

KS: Yes, and we await as part of yield.

KS: these are still open question, what if i swap `yield Promise.resolve` with `yield Promise.reject`

DT: in midori we had iterator of promise, the producer can run ahead, launching the subsequent async computations.

DD:  these are both handled: sync iterator for promise, async iterator for promises

DT: i think it is orthogonal

DD: there is no distinction, we can collapse them down to one level

DH: So because we don't have promise for promise, this structure wont absorb them.

DH: yield / await wanted to absorb

KS: originally i didn't have this flattening, the discussion was that well we have made choices were we dont want to have promises for promises, and that would seem to make it the same as a promise for a promise with an extra done bit

MM: I dont know what side of this I'm on yet, but let me put this into other terms. The things you can have a promise for are non-promises. Promises can only promise non-promises. The design question here, are async generators sources for a sequence of non-promises, or are they are source for a sequence of anything. Consistency cuts both ways, collapsing can be good. On the flip side, when you create a container, a container can contain any value not just non promises. A container can have more things over time. If you see a stream like this as simply a container. Then most containers can contain promises.

DD: you can swap the word "container" for promise, and the argument flips.

DD: complete abstract concepts should synergize

WH: i don't know what that means

DD: Async Iterator should have unique behavior that is the composition.

DD: I think that you are saying, that a type with a certain structure, that semantics are entirely containeed rather the surrounding semantics.

DD: there could be semantics on top of the compositional concepts.

DH: you guys agree 90%, there could be a new type Asynciterableresult, or you are saying promises could absorb this.

YK: or syntax could absorb it, but that is only half the battle

DH: absorption at all?

MM: Back when we were doing promises, one of the questions that came up regard the collapsing or not. Given collapsing, with the cooperation for both sides, can we still somehow express the functionality of a promise for promises? I have needed this. The work around is to wrap the promise in a cell, and the reciever needs to unwrap the cell. By a simple cooperative adaptation, can either functionality be layered on top of the other? I believe the answer is yes. Given that, the remaining design constraints should be "Simple things should be simple, complex things should be possible." (Famous Alan Kay quote).

DH: Are you saying async iterator can be implemented in terms of the other version?

MM: either of the two forms of async iterator we are discussing can be cooperatively represented via the other, so the main criteria should be simple should be simple, complex should be possible. The dominent use-case is delivering non promises.

MF: you are mistaken about several things, the goal isn't to deliver a promise of a promise. The goal is to deliver a promise of anything. We don't care about promise for promise, we care about a promise of anything. People see that as the simpler thing.

MM: you are correct, simple isn't the right word as simple can be used on both sides. A consumer that knows to only deal with non-promises, is the dominant kind of consumer.

MF: people write libraries that need to support this

MM: general polymorphic libraries that want to support any type of input

DE: we already have this precedent in promises, we should have this be an edge case.

DH: i think its really important to understand, some think interms of types and parametricity. The fact of the history of promises, JS types are split tino 2 universes. (promises and non-promises)

ARB: one is included in the other, which is the problem

YK: it is already the case ...

ARB: contents of promises is were the worlds "collide", otherwise unwrapping wouldn't be useful

KS: let me put a bookend on this part, clearly strong feelings on promise unwrapping.

KS: the difference would be, if you didn't do the unwrapping someone would need to do yield + await

MM: a worse issue, consumer side. Does it see iterations. Are we trying to define an abstraction to see an iteration of non-promises, or are we trying to define and abstraction to asynchronously deliver values.

WH: Collapsing is trying to remove the need to say `await` when calling a function in a `yield`. But how does this work in a regular async function?

Compare

```
async function* f() {
    yield g();
    yield h();
    yield i();
}
```

with

```
async function f() {
    g();
    h();
    i();
}
```

The latter one doesn't implicitly put awaits in front of the calls to g(), h(), and i(). Consistency would imply that the former shouldn't either.

*more discussion*

KS: It unwraps it recursively

KS: for-await falls back to Symbol.iterator when Symbol.asyncIterator is missing

DT, MF: This may be a hazard, or maybe not if you insert the right turn-taking

KS: slide (Queueing). What do you do when someone calls next repeatedly without awaiting?

DH: Unbounded queue?

KS: You could return a rejected promise, or put it into a queue and pick them up as appropriate. I've been going back and forth on the various options. It's not essential to the design yet--at some point, I switched to rejecting, but this caused some bugs in my program, but it ended up being fixable

MM: in the queueing case, it still returns the exact same thing

MM: the queueing up seems much friendlier.

SP: yes

MM: one guy calling .next (can take an argument) because the consumer is assumed to be paused on a yield, allowing it to go to the consumer without an intermediate buffer. The whole reason for this, is 2 async coupled entities, allowing one to run ahead sounds very fine.

TD: we started with "it fails" and worked around it, ultimately giving up. As soon as anything got speculative, it got complicated. Pushing it into the infrastructure, making it queue, up so that everyone had it.

MM: This can be very useful, not buggy

YK: the fact that is different that is is different from the flip side algo

KS: actually, examples exist.

KS: this is the same

YK: ...

DH:  mapping these to known analogies were i feel more confidence, falling async is JS approach to threads. The analogy from a sync threading language, I have a thread that is producing me abunch of values, I block waiting for the next value, I as the consumer should not be sensitive to if the other thread is blocked or not. It should be internal to the thread implementation details, leaking this to the cosumer isn't correct

MM: both sides block, in JS that is a promise.

KS: slide (current status)

- partially implemented in regenerator
- its in there for several months, although for await isn't
- read for review

DH: please assume good faith, this is delicate. I think the space is important, we need to figure out how these concepts work together, but there is failure of our champion model, and that is over modularization...

DD: in the last meeting, we requested this specifically for big paper.

DH: No attack here.

DH: i don't see yet, how this fits in, with the other stuff that fits in with Jafar. We have seen various variations, it is not clear to me... Maybe the intention here is to drop all that stuff (possibly implied)

YK: is JH giving up on for on

JH:  for on, wasn't in the proposal

DH: we can't do all these things

DH: we need to figure out what our are async data types, and we need to figure out the grand unified theory. KS has submitted great work, I still don't see how this all works together.

DD: we said something stronger, we wanted both AsyncIterable and Observables on stage, so we can properly view this.

DH: if we continue to advance these overlapping ideas, we need to be sure we don't defer how to ensure the grand unified theory works.

YK: stronger concern, both proposals want to arrive at syntax. We can likely only get one of the two syntaxes.

YK: we can get for on, or for await, not both.

DH: it seems far less for us to imagine the coexistance of both data-types in the languages, but with the new syntactic constructs present much overlap

KS: My opinion is this is await for in is the only syntax, and observables could use it. As I discussed above. In that direction, it should be complete fluid. The other direction, the subject of the await for is more complicated due to buffer differences. In my vision, observables would have a method that would allow observables to choose buffering strats, that returned an async iterable. Making it compatible with for await.

JH: KS and I are in alignment, for await is what i want. We can adapt an observable to an iterator via a buffering strategy. Other types can achieve this.

YK: an alternative design would be async iterable result, and we should explore

DE: these things seem like refinement process tasks. They can be explored at stage 2

AWB: this feels like stage 1

DD: does anyone have fundamental disagreement?

YK: someone needs to respond to my exploration request. I am pretty uncomfortable combining the two types.

... discussion ...

DH: let me add structure

DH: their are several work areas, that have been structured as independent. JH has been a champ in 1 direction, and KS in another. Several areas of unstability:

- work on observables + syntax
- work on API for async sequences + syntax
- it sounds like KS + JH are in aligment, observables aren't the base for syntax. And it is orthogonal

- observables championed by JH
- we want some syntax (which obviously needs a protocol)
- API for async sequences, but without full consensus. But we need to continue exploring.

YK: I totally agree, I am concerned that I must present an adequate argument but do not feel able to at this time.

DE: we should explore this explicitly

DH: we should explore for await, and async sequences. We need to shake more out.

DH: its obvious to me that those could be stage 0

DD: my opinion is this proposal is ready for stage 2, if we can agree that the changes can be resolved during stage 2.

YK: it depends how fundamental the type composition is to the proposal

KS: I think that we ought to use promises for something that will be delivered async. As it works with the rest of the

YK: it can be skinned many ways, additional protocols can be created.

MM: await does a Promise.resolve, maps a value to a promise, and I don't want to reopen this.

MM: if an AsyncIterationResult is something that is not a promise

YK: is it important that it is a nominal instance of the promise constructor?

MM: yes i believe so

YK: i am surprised

MM: if it is a thenable that it will be adapted by Promise.resolve. I am not ok with reopening await being Promise.resolve(x).then(continuation); I am not willing to change what that means

DE: can we decide stage 1 or stage 2, we have more to cover.

AWB: we cannot make it stage 2,

DE: we can say its stage 1 pending further review.

MM: (Somewhere in here I made the following unrecorded observation)

There is a third alternative. The async generator can be a generator of anything. "yield" does not imply an implicit await, so no collapsing happens on the generation side. The async iterator that is produced is an iterator of anything. No implicit collapsing within the async iterator itself. Its API remains fully parametric. Rather, the for-await construct does the collapsing, in service of the simple-dominant-use-case consumer, who wants to see an asynchronous sequence of non-promises. Each iteration of the for-await loop does a double await -- one to get the IterationResult, and one to get the promised value.

Any consumer who, instead, wishes to see an asynchronous sequence of anything, can instead write their own loop rather than using the convenient for-await sugar.

Big advantages of not collapsing at the generation side:

* yielding an unresolved promise does not prevent the generator from proceeding to generate. It is not surprising stalled at the yield point.
* yielding a rejected promise does not cause a generation-side exception. Rather it simply transmits the rejected promise. A simple for-await consumer is stopped by the rejection throwing the reason.
* (Pointed out by Dean): An implicit "await" at the "yield" violates the rule that we can find all interleaving points by looking for "await".

#### Conclusion/Resolution

- Stage 1 acceptance
- needs more exploration as per above discussion.


## Strong Mode Discussion

(Andreas Rossberg)

ARB: slide (recap)

ARB: slide (progress)

ARB: slide (strong mode)

ARB: slide (what worked well)

ARB: Disallowed implicit conversions.

WH: Even toBoolean???

ARB: toBoolean is the only one that remains

ARB: string conversion is used alot, but it wasn't a problem. In es6 we have template strings, which becomes explicit.

AWB: what about toSelector, number -> string for property

ARB: ya, it comes down to some things. This one is still allowed.

ARB: slide (what not worked well) Mutually recursive classes,

MM: what was the motivation for unbound variable ban

ARB: to make errors static and avoid runtime checks

ARB: interopt made locking down classes via seal

... discussion above strong vs non-string inheritance mixtures ...

ARB: slide (takeaway)

ARB: slide (soundscript)


## Test262 Updates

(Dan Ehrenberg)

DE: reptitive tests, lots of tests that repeat each other. There exists a proposal to generate tests precedurally, we require implementors feedback. Ask me and I will provide more information

DE: We have some changes coming into Test262, e.g., https://github.com/tc39/test262/issues/470 https://github.com/tc39/test262/issues/467. Users, please give feedback as to whether these are appropriate for you! Please reach out to me if you have any concerns.


## Progress review: Callable class constructors (Allen)

presenters: AWB / YK

AWB: slide (callable Class Constructors)

AWB: slide (refresher)

AWB: slide (refresher pt.2)

AWB: slide (refresher pt.3)

AWB: slide (refresher pt.4)

AWB: slide (interesting feedback via twitter and other channels after publicizing proposal)

YK: some feel the new fork is non compositional

AWB: slide (more feedback)

AWB: inheriting is complicated

MM: it is possible, make the default call behavior on a derived class to do a super *call* to its superclass constructor.

YK: ya

YK: another way to say, is that we install a constructor

MM: not suggesting it is a good idea

YK: not including it, caused confusing.

YK: baseclass providing default functionality was a big concern

AWB: we will remove the rocket

AWB: we do want to enable the calling constructor

YK: almost all people people want call to delegate to new

AWB: ya, 99.9% case. Two bodies is confusing, it clearly seperates it for the 0.1% case, like date function.

YK: it is a middle ground

AWB: todays proposal (slide An alternative approach)

```js
class RegExp {
   factory constructor(pattern, flags) {

    }
 }
```

MM: what about inheritance?

SP: it could now just be made to work, because its a unique function body

MM: does the factory bit inherit

AWB: i would say no, but it could.

MM: if the subclass does not say factory?

AWB: it reverts back to the default behavior to throw

WH: Almost the same as the original proposal. Can you use this to implement the Date use case as on the first slide?

AWB: yes, if you want to implement date (slide -> Use single body and new.target for date-like case)

DD: something seems bad

YK: i would expect, it installs new

AWB: we don't quite support the date case, but the 99.9% has been sorted

AWB: I will think some more about this.

YK: ES5 can still be used for the edge-cases

..: it will be hard to implement

AWB: slide (an alternative approach)

```js
class RegExp {
   factory constructor(pattern, flags) {

   }
 }
```

MM the only thing that gives me pause here, if long term we will only address this with a specified mechanism. Date case goign back to es5, then we are not gaining any value from having the default constructor throwing.

YK: incorrect... i would make a looser term.

YK: lets go back to es5, a massive hazard to forget use. This made many people not want the newless behavior.

MM: I'm not buying this

YK: the world you want to live in, they can choose new or old style, If you happen to not like new, you call without. That world only works if all the classes are es6 classes, if you encounter an es5 class you will likely encounter a hazard.

MM: what I'm saying, we don't require new, the default call constructor is to `new`

YK: i almost proposed this...

...: from an implementors perspective, we only included the new.target  in frames if we new we needed this. It is a huge pain in the neck to implement this default forwarding

BE: some wont use classes anyways, we shouldn't cater to them

MM: we should not help them

DD: their is an implementors concern.

AWB: the factory world is almost noise

... discussion ...

WH: This is unnecessary. It's creating a redundant way to create instance, for those who don't like `new`. Given the implementation concerns, we should not be doing this at all.

... (the implementors) it will be crappy

MM: could we make something shorter than "factory constructor"

AWB: maybe, but it is a factory call

MM what about

```
class RegExp {
   () {
      // ..
    }
}
```

DT: seems like syntax and implementation default are two seperate issues

WH: Again, we shouldn't be doing this at all. Drop it instead of bikeshedding syntax.

MM: I withdraw my proposal due to the implementation concerns

YK: i am on the side, that not using new is a minority opinion. We should still not lock it out

DD: we should likely not provide constructs that will allow those to shoot themselves in the foot, they can just use =>...

YK: decorators could enable this ergonomically

MM: we should drop this completely, and solve it with decorators.

#### Conclusion/Resolution

- Proposal dropped.


# Object.getOwnPropertyDescriptors to stage 3? (Jordan Harband, low priority, but super quick!)
presenter JDH:

JDH: reviewers and editors +1'd, can we move to stage 3

all: yes

#### Conclusion/Resolution

- Stage 3 acceptance


## Agenda

6. private state
7. Progress review: Callable class constructors (Allen)
8. Module loading update (Dave Herman, Caridy Patiño)
9. Introduce the continents concept to the spec? (Domenic Denicola; low priority)

Pending Topics: (un-ordered)

1. Class fields updates -- Semicolons: Required or optional? What to do with initializer-less declarations? (Jeff Morrison)
1. Async generators Proposal (Kevin Smith)
1. Private State Update (Kevin Smith, Allen Wirfs-Brock)
1. Progress review: Callable class constructors (Allen)
1. Module loading update (Dave Herman, Caridy Patiño)
1. Introduce the continents concept to the spec? (Domenic Denicola; low priority)
1. Object.getOwnPropertyDescriptors to stage 3? (Jordan Harband, low priority, but super quick!)
