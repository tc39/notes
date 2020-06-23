# March 29, 2016 Meeting Notes
-----

Dave Herman (DH), Michael Ficarra (MF), Jordan Harband (JHD), Adam Klein (AK), Mark S. Miller (MM), Brian Terlson (BT), Domenic Denicola (DD), Brad Nelson (BNN), JF Bastien (JFB), Joe Lencioni (JLI), Sebastian Markbåge (SM), Jeff Morrison (JM), Kevin Smith (KS), Jafar Husain (JH), Lars Hansen (LHN), Saam Barati (SBI), Keith Miller (KM), Michael Saboff, Eric Ferraiuolo (EF), Eric Faust (EFT), Chip Morningstar (CM), Dean Tribble (DT), Shu-yu Guo (SYG), Tim Disney (TD), Waldemar Horwat (WH), Bert Belder (BBR), Peter Jensen (PJ), Daniel Ehrenberg (DE), Caridy Patiño (CP), Diego Ferreiro Val (DFV), Jean-Francis Paradis (JFP), Shelby Hubick (SHK), Leo Balter (LEO), Miško Hevery (MHY)

-----

## Agenda

https://github.com/tc39/agendas/blob/master/2016/03.md

## Dial-in

https://public.etherpad-mozilla.org/p/tc39-dialin

Agenda approved.

## Approving minutes from last meeting

Minutes approved.

## Object.values & Object.entries 
(JHD)

BT: This should be quick.

JHD: Hoping to get into ES2016, but no need to rush. Shipping in FF47. In the next version of Edge (unflagged). In Chrome Stable behind a flag. FF Nightly since October.

DD: We should wait for two shipping browsers.

JHD: This seems different. Not on prototypes, low chance of conflict. I don't think it's right to compare to async functions. There continues to be a confusion about what implementation requirements can be.

DH: I don't agree with the notion that there needs to be two shipping implementations.

DH: I thought the focus here was on interoperability, not requiring things to be turned on. That says something about level of adoption, maybe.

MM: What are the risks we're trying to mitigate for requiring two implementations shipped in a browser?

DD: Lots of things are in nightlies. That's not a sufficient thing.

DH: My understanding is if we only got feedback once something is pref'd on there is a chicken and egg problem where browser vendors don't want to turn something on without getting developer testing, but developers won't test without real apps. The importance of the stages approach is that there are now ways for people to dial up their level of risk tolerance for the instability of features and get developer feedback earlier in the process. It has worked. We got lots of feedback on async functions. There are a lot of things we need, including implementation experience. I'm not 100% in disagreement, having implementation experience is valuable, but orthogonal to developer feedback piece. Shipping in nightly === we have the implementation experience. The feedback we get from developers is happening earlier in the process through polyfills or transpilers.

DD: I don't understand what aspect of developer feedback we've had.

AK: What more committee work is there to do?

DD: I thought our bar was that we had a requirement that we ship in two browsers.

AK: We're still paying back stuff from ES6 that didn't go through the process, but this doesn't seem like that case.

BT: We try not to ship features until they're stage 4

EFT: We don't either, generally

all: So we're deadlocked!

MM: If two browsers are shipping behind a flag and they publicly state the only reason it's still behind a flag is that it's not stage 3 yet, it should not block movement to stage 4.

JHD: Only negative feedback was performance related. Otherwise, just sadness it didn't make it in.

JHD: the only negative feedback was disappointment that it didn't make it in and...

BT/JHD/etc consensus agreed that it proceeds to stage 4.

#### Conclusion/Resolution

- Stage 4 acceptance

## System.global 
(JHD) 

JHD: I did a whole bunch of research, and found that there's a whole bunch of code that uses self, window and global which would break, as it assumes that 'global' implies Node, 'self' or 'window' imply web.

JHD: global.global won't work. System.global could be ok.

MM: System is a namespace is for things that should not be globally available. If we can use module imports, that would be better to address the same set of issues

JHD: agrees he would refactor for that once that's available..

MM: With the caveat that they woudl move to a module solution if/when available, proceeding to stage 2 with "system.global" would be fine.

DH: looking for all of system.global, global.global, etc. seems fragile.

AK: What does Stage 2 mean here?

JHD: Look for reviewers; maybe Stage 3 tomorrow

DD: Could you document your incompatibility work?

JHD: Yes

DH: Are you sure about the incompat?

JHD: self might be OK, but there were a few examples; didn't find a particular compelling one

MM: is opposed to having bare "global". They should be gathered; having that be System is fine, but it shoudl be someplace.

#### Conclusion/resolution

- Stage 2 acceptance
  - Reviewers:
    - Caridy Patiño
    - Mark Miller
    - Michael Ficarra


## String.prototype.padStart/padEnd 

(JHD)

JHD: will ship in stable behind a flag. Not currently trying to get to stage 4 today (currently at Stage 3). Just wanted to update because of recent discussion. there is not enough implementations to move it forward in stage.

MLS: It's now in WebKit Nightly

JHD: Small number of people have asked about the fill string (the second argument). If you pass anything that is not a non-empty string it defaults to a space character. Ascii space is maybe English-centric.

MM: does anyone here know the I18l to comment?

JHD: Japanese uses a different space (other agreed)

JDH: currently if the separator is an empty string or not a string, use space.

BT: the empty string is dubious. That should simply not not pad.

JDH: options for empty string: use space, don't pad, or throw error.

WH: Don't turn undefined into empty string. Turn it into a space.

MM: proposes:  undefined defaults to space, empty string returns the original string, and a non-empty string gets used it's ok.

WH: Do the empty string test after ToString.

DH: We should not distinguish between undefined and absence.

DH: English-centric is a carefully crafted troll (Romanian uses space as well). If there is lots of precedence, then it's doing the traditional thing. Combining these together means we can make this reasonable for the most use cases.

WH: If the padding string has length > 1, then it gets truncated? What if's a non-BMP character?

JHB: There was a thread on GitHub, and we discussed it at past meetings. It does, potentially break up a surrogate pair

JHB: If you wanted repetition, use Repeat.

WH: Why not always keep the last instance of the substitution string intact?

DH: POLS--disrespect Unicode. But this feels like a potential security vulnerability (injection attacks?)

DD: Substitute with that (?) character?

BT: But we don't substitute for String.prototype.slice(), property access

DD: We do this elsewhere in the web platform, though

BT: I'd really like to see a built-in module with good Unicode-aware string things

JHD: Like graphemes!

DE: Intl could be a good place for this; Intl.v8BreakIterator does it today but is not standardized

#### Conclusion/resolution

1. Absent or undefined, default to single space string.
2. ToString the thing.
3. If empty string, return the original string. Otherwise, pad using the pad string.

## Object.getOwnPropertyDescriptors

JHD: Status update, things going well, waiting for implementors and feedback

BT: You'd have to do something special to make it slow

DD: Chrome has optimized Object.getOwnPropertyDescriptor over time

DH: Do we have determinism for Object.getOwnPropertyKeys?

BT: Yes, it's just for-in that's nondeterministic. Work is in progress. If an ordinary object has no prototype, the for-in order is deterministic

MM: What if it's modified during iteration?

BT: It may be nondeterministic if it's modified during iteration and has a non-null prototype

## Error.isError

JHD: Brand checking === bad (apparently). But I forgot about error objects. There does not exist anything in the spec that throws with non-errors. Errors cannot be reliably checked for.

DH: I think it's not so much the ability to do this check that bothers me, it's the blessing of an idiom.

JHD: Array.isArray?

DH: Not the same. isArray is an important distinction that is unique to arrays. Specifically, JS has distinct literal syntax that allows you to implement something that looks like an overload... You have an API that can take an array of things or a hash of options and it's important. The canonical way to do this is to check for arrayness first. Array is a very narrow thing and is not indicative of a general pattern that should be used for object types. That doesn't mean that I don't think it should be possible, but using the same snow clone (lol) is a message that people should design their APIs like this, which is bad. The big difference is not is it possible to do this test, but is it named appropriately to reflect that this is a low-level thing that should be used rarely.

DD: Array objects are actually exotic. Error objects should not be exotic.

DD: I have a PR to remove this exoticness. Another issue: error objects are actually exotic though because they have stack. That check is legit. Error.isError is not legit. Errors per spec are normal objects.

MM: I will be proposing getStack and Error.prototype.stack.

JHD: It is in fact a canonical pattern. Instanceof error is used all over the place to detect errors. Eg. rejected promises, they want to handle actual error objects differently. What they should be doing is a slightly different than what they are doing and people are doing this. Tonic dev.com, you can try a package in the browser, and it wants to reliably check for errors.

DH: Where is the case where you're merging signals together?

JHD: Tonic dev tries to accurately as possible report what happens with the module code.

DH: I don't like paternalistic arguments. I'm not making a paternalistic argument. Language has a normative role.

DH: Depending on MM's proposal coming 3 years from now with no polyfill path isn't good.

DH: Can imagine something that is a standard way to check if an object has an associated stack.

DH: I 90% agree, but I think Error.isError is the wrong name.

MM: System.getStack, when applied to an error object, always gives something, and if not, throws, will this work?

MM: The 4 major browsers can polyfill this. Actually, only on FF and V8 is it unspoofable, and on Edge and Safari it is spoofable.

JHD: There is much urgency because a browser that has shipped Symbol.toStringTag doesn't have enough stack API to implement this.

Dh: I don't understand the harm?

JHD: This is not a people's websites will break thing. If more cross-realm things happen, there will be a lot of code that relies on this. Concern about things that make symbol toStringTag make objects look like an error.

MM: to minimize the window, JHD should collaborate with MM on the getStack API. Hopes to have a proposal in Munich.

##### Conclusion/Resolution

•JHD will work with MM on the stack proposal, and move this proposal into the "withdrawn proposals" section

### ECMA-402

DE: Compatibility fix for v1 -> v2 (call with a receiver that is created via Object.create, it would initialize the object). For V2, spec was changed to be normal JS semantics. Tried to fix V2 semantics, but couldn't ship in V8 due to breaking websites. Now have implemented a compromise semantics: if you call the NumberFormat and DateTimeFormat constructor with a receiver that is an instance of the respective constructor and it's not initialized.... (continues to describe) details here: https://github.com/tc39/ecma402/pull/84. There is a symbol that it indirects to and the fix seems to work.

MM: there is a self-hosted piece of code that illustrates the algorithm.

DE: has a pull request for the change.

MM: As he understood it, we are expecting the kludge to be temporary. If it will be temporary, then it shoudln't make it into a standards document.

CP: is there a precedent for this kind of temporary kludge

MM: will we need to live with it forever. If so it shoudl be in the spec. Otherwise it shouldn't

DE: really likes test 262 to cover this kind of thing. and for that it woudl need to be in the spec. We could mark it in the spec as a compat kludge.

...what is forever, anyway?...

BT: these semantics are required to run the web, so should be documented

MM: at least annex B because it shouldn't be required outside the Web

DE: Node has this problem too.

AK: and people want to use hte same code in Node and Web

BT: let's not open that.

MM: proposes: put the tecxt and mark it non-normative

DE: if it's relevant to performance tests, etc. then it's normative. Normative optional is plausible

MM: Annex B is irritataingly stronger than normative optional. 

DE: but we need the stronger requirement here. It's been an obstacle to being spec compliant.

MM: Inlcude a non-normative note stating we hope to retrire the kludge eventually

BT: what do you get from that?

MM: that application code shoudl not count on the continued existence.

DE: intl.js hass ben updated to not count on this.

DE: we won't be able to reliably retire it within a year. we don't have the data.

AK: and it's needed for additional web implementors

MM: I'm no suggesitn gthat we say within a year. But of all the kludges that we've wanted to pu tin the spec, this seems the most short term.

DE: I think we have consensus on inlcuding this somehow

MM: in annex B

DE: The ?? spec doesn't have a specific annex B.

BT: including a note with the history of this issue is reasonable. 

* discussion about the spec for implementors vs. developers/users.*

CP: Daniel will update the pull request. what's he process to add to spec?

DE: pull request to fix the main spec text. BT will determine as to whether it needs consensus.

BT: my bar is "can I imagine it being contentious, then it needs consensus" Ye sit can be used fo htis spec as well.

DE: Ok let's confirm that when Mark gets back.

CP: Targeting edition 4.

##### Conclusion/Resolution

PR: is ok once the editorial issues are worked out (including a non-normative note describing the back-compat requirement and other relevant information). Said note should not link to GitHub issues.

## Zones update

(DD: Presenting slides)

DD: Not going for stage 1 yet, but proposal has gotten more concrete

MM: where is the polyfill?

DD: the polyfill is in the repo

MM: DE observed that wrt the dangers of global state are not dangers after all if the zone object that is passed forward is immutable. 

MM: because within an event loop you can get stack frames from any realm, so 

DE: what security property are you trying to preserve? Would be nice to start out mutable so you can use expandos (more efficient than WeakMap, maybe)

MM: I will postpone answering to determine whether and hat the issue is

DD: simplest thing:  expando-properties on the zone, used to implement zone-local storage

....continued slides and code example...

DD: *showed error handling example

MM: if there anything concpetually different of the [[HostDefined]] vs. the dynamically scoped variable? because I'd prefer one mechanism

DD: one is accessible to host and the other to authors.

MM: if they can be treated equivalent conceptually, then reaosnaing about the model is easier.

DD: yes they are otherwise the same and so could be reasoned about similarly.

* misc people expressed approval for the changes

## Function.prototype.toString() 

Michael Ficarra (MF)

This will be to review spec text.

MF: summarized discussion from last time

MF: not discussed at last meeting is function toString for well known intrinsic objects.

BT: that doesn't include the name for intrinsics without a global name?  [BT check this please]

MF: those aren't covered here

JHD: so GenratorFunciton is not called "GeneratorFunction"

MF: 3 names that are not required: GeneratorFunction, AsyncFunction, and TypedArray

JHD: is the naming of GeneratorFunction required?

MF: no

JHD: can we require that?

MF: then global name will no longer have hte implicit meaning that you can say global.name

MM: for intrinsics, the thing between the ?? is always an identifier?

MF/DD no, doesn't work

BT: change "global name" to "friendly name" and note that it's

JHD: all these abstractions have a "name". We can specify that the initial value of hte .name property shoudl show up as the global name for all l objects.

MM: is it always fully specified?

JDH: yes [and then he added some details]

MF: showed tha they have spec text signoff fom the reviewers.

WH: raised the question of how clear it is that these tokens should not include adjacent whitespace or comments.

JHD: Yes, that's the intent.

MM: notes that this is the simplest proposal that meets all requirements

JHD: ??? getters and setters naming discussion

?? how does this work in conjunction with multiline strings

MF: explained why it is not an issue (the embedded newline is represented with a line-terminator character)

MF: has an open pull request to similarly do this for async functions (https://github.com/tc39/ecmascript-asyncawait/pull/90)

DD: you can replace the name column with "initial name" value

AK: how does the "get" name spec text work with computed properties?

MF: the expression is included in the name.

##### Conclusion/Resolution

MF: will make changes to use the initial value of the "name" property as the global name of intrinsics

MF: will make fix to clearly exclude surrounding whitespace: "the source text matched by" to mean "the text form the beginning of hte first token and the end of the last token". He will attempt to get it in section 5.2

MF: will bring those tomorrow to get final approval for stage 3

## Reference type and the implementation reality

https://github.com/tc39/ecma262/issues/467

BT: presenting a summary of the issue. further Discussion to be had Thursday

{BT presenting slides}

Implementations are evaluating references multiple times

WH: Note that side effects in LHS expressions are evaluated only once:

    a[i++]++

doesn't increment i twice.

MM: we agree that the expression is evaluated once, its the underlying reference tha tis eval'd twice.

BT: yes. 

MM: historically Firefox has broken logjams around implementations not quite meeting spec.

MM: will FireFox do the experiment

DH: bad MM. no cookie.

MM: I take it back.

DH: the risk of "break the web" is only really tested by possibly affecting large numbers of customers

BT: someone did in fact file a bug on IE

BT: proposes the the issue should be put to rest by matching the spec to implementations.

MM: he reluctantly agrees with BTs conclusion

WH: I view this as an old bug. We should fix the bug in the implementations instead of copying the bug to the spec.

BT: it would be nice to update Test262 to test the semantics eventually

#### Conclusion/resolution

We will revisit the proposed resolution with Allen Wed.

## Async Iteration

KS: presenting slide with the changes

KS: Keys changes:  promises are not unwrapped during iteration

MM: present the invariant that "interleaving points are marked with await"

KS: within the context of an async function, interleaving points are always marked with the keyword "await"

DH: clarified that when you compose promises with async iteration, there's no longer a special case.

KS: correct. there is no longer a special case for promises

JH: where before we were relying on then to do the flattening, here we are relying on the for await?

*discussion

MM: the typical consumer should see the flattened value. The principle here is that for the producer yields a value, they must not get blocked because they didn't block.

MM: the only alternative approach is if the async iterator did the collapsing.

KS: It would be in the behavior of next()

MM: next returns a promise for the iteration result. Don't resolve that value until the value is actually resolved.

DE: how would this be observable?

DH: ??

MM: what is stage 1 and stage 2?

WH: What is the controversy here?

CM: we have a clear model

DH: the basic policy question is whether sequences and promises should flatten?

WH: we have already decided promises should flatten. This is the second meeting where we have vague objections. It's hard to get past vague objections.

DH: even with good intuitions, real code examples might show us something different. So I'm reluctant to get to stage 2 without more due diligence.

WH: We can still do code examples in stage 2.

?: Example of a map that takes a sequence of values and returns a sequence of promises.

DH: Because combinators are a good use case, and we shouldn't assume everyone uses for await, maybe we should always collapse

DH: and we need code examples to understand whether they will still be well supported

DD: will work with KS to explo

KS: How should for await work on sync iterables? Initially, for/await fell back to sync iterables. However, concerns were raised, and now that's gone. But, at least, you should be able to yield* a regular iterable within an async iterable, right?

JFB: I can wait a non-boxed value. is that the reasoning for falling back to Symbol.iterator in the async iteration support.

?? if you have an async iterator of async iterators does it flatten those?

DD: what if Object.prototype.iterator that returns async.iterator [check the proposal]. This was proposed to change the refactoring considerations around the proposal to failover to synchronous iteration for async iteration.

MM: is there anything in the spec where we case-switch on whetehr something is iterable.

JHD: `Array.from` is an example.

MM: what about getting rid of Symbol.asynciterator completely, and just use Symbol.iterator. Then the iteration operations distinguish based on the type of the returned object.

DD: and KS both pointed out obstacles to that.

WH: Another option already mentioned was to have for await only look for Symbol.asynciterator and not default to Symbol.iterator. This would require explicit user conversions to convert sequences to async sequences, but those aren't necessarily a bad thing.

DH: "meh".

BT: Matt the author of ReactiveX wants to work with Matt Podwysocki

##### Conclusion/Resolution

Stage 2 acceptance

DD: and DH volunteered as reviewers.

## Shared Memory and atomics

LHN: presenting

DH: did we convince ourselves that using strings instead of integers for futex codes is not too onerous for asm.js?

LHN: they discussed this and determined that it wasn't an issue

MM: please unpack "int32 sots are always lock-free"?

WH: Lock-free is only a performance assertion on atomics. Atomics are atomic and synchronize regardless of whether they are lock-free or not. Lock-free indicates that the atomic operation won't need to wait for another thread that might hold a lock that's used to internally implement the atomic.

LHN: atomicLoad and atomicStore are atomic operations. Are you guaranteed that atomic load or store will ever need to take a lock to implement that operation

MM: is it semantically a synchronizing operations rather than a racy operation?

LHN: yes

?? describes an example with lock-free linked list

* discussion ensues but doesn't have a resolution.

Issue #54 discussion

MM: wants to verify: there's no danger of inconsistency or blocking if your counterparty if preemptively terminated.

LHN: they will come back to it.

WH: Good that rematerialization producing quantum garbage is disallowed.

WH: Would like to know whether it's a legal optimization to swap two adjacent non-atomic reads of distinct locations. Currently the memory model has too many self-contradictions to be able to tell, but would like that to be a valid optimization.

    

WH: Can get tearing on racy unaligned accesses.

LHN: Racy accesses are aligned

WH: But in the spec you allow accesses at arbitrary unaligned byte offsets in DataViews.

WH: The memory model has issues with dealing with atomic object lifetime. Suppose you're doing the asm.js thing of simulating a C++ heap in a big byte array. One object that happened to have a 1-byte atomic used to live at location X, gets (virtually) freed from the simulated C++ heap, and a new object gets (virtually) allocated with a 4-byte atomic at location X. The current memory model is not aware of the lifetime change and will turn the atomics into non-atomics. That's a flaw that needs to be fixed in the memory model.

WH: What useful processors don't have lock-free 1 or 2-byte atomics?

LHN: Maybe older ARM chips?

    

## Aynsc Functions

BT: is summarizing status. All good, no implementation concerns raised by anyone, Chakra impl passes almost all tests, firefox implementation is making progress. I would push for Stage 4 but Google has objected so I am only giving a status update.

AK: Note that we do want async functions.

AK: in progress but no notable details

EFT: the spec seems straightforward

*unrelated promise discussion happened and various morasses were narrowly avoided.

## TCO

SG, EF: Cross realm proper tail calls conflict with the SpiderMonkey security model, which needs to allocate memory (either on the stack or the heap) in order to do something on function return. You can tail call into the membrane thing, but it will take some space

BT, DE: Explicit syntax could be part of addressing this

MLS: We'll have fixed stack space anyway; we already implemented it.

SG, EF: Let's make that a separate question, and discuss it Thursday. What if we start with a pull request which encodes that cross-realm calls don't to make cross-realm tail calls not have fixed stack space, while also allowing that it *may* have fixed stack space

(General consensus on at least allowing non-tail-call behavior)

MM: What shows up in a stack trace? This becomes observable.

EF: Let's delay this larger discussion until Thursday.

#### Conclusion/resolution

SM: will write spec language for tail calls (likely involving an update to PRepareForTailCAll) that will allow implementations to do a PTC across realm boundary or not (implementation defined).

*** Scheduling ensued ****

Wednesday

weak refs

frozen realms

Thursday morning

Tail calls

Reference type
