# November 18, 2015 Meeting Notes
-----

Jafar Husain (JH), Eric Ferraiuolo (EF), Caridy Patiño (CP), Adam Klein (AK), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Chip Morningstar (CM), Brian Terlson (BT), John Neumann (JN), Dave Herman (DH), Brendan Eich (BE), Yehuda Katz (YK), Jeff Morrison (JM), Lee Byron (LB), Daniel Ehrenberg (DE), Lars Hansen (LHN), Nagy Hostafa (NH), Michael Saboff (MLS), John Buchanan (JB), Stefan Penner (SP), Waldemar Horwat (WH), Mark S. Miller (MM), Paul Leathers (PL), Georg Neis (GN), Sebastian Markbåge (SM)

-----

## RegExp Buffet

(Brian Terlson)

something about composed RegExp

YK: composing regexp does not have a algebraic decomposition

DD: composing multiple interpolated strings for RegExp

WH: What?

YK: composing regexp fragments on the fly

WH: That's only useful for structured composition. Unstructured composition (string concatenation) is too hard to reason about

YK: not wanting this, seems like we are saying creating RegExp on the fly

DH: this is just abstraction and composition, historically RegExp have been poor at this.

WH: Whats YK's point, why is that useful?

YK: imagine a complex RegExp where deriving char classes was complex, splitting this into multiple functions and composing makes sense.

WH: We are talking past each other

WH: two questions:
    1. Do we want RegExp templates?
    2. Do we want to do it structured, or completely freeform?

WH: I believe the freeform way is not useful or needed

WH: Composition should work via the structured way

YK: I may want to do this via template strings

WH: The structured way already handle this

M: provides example, RegExp for different locale phone numbers. Interpolation would nicely do the trick.

YK: i don't understand how Mike Samuals solution

WH: Provides structured example: `a${foo}*`
- In structured substitution this refers to zero or more foo sub-regexps.
- In unstructured substitution this repeats the last atom inside foo, or possibly the 'a' if foo is empty, or possibly the * is a literal if foo ends with a backslash. Very nasty. Too difficult to compose or reason about.

YK: ok, it seems like these are two worlds.

SP: M's example would be a good example of interpolation

WH: Structured handles this

YK: at what ergomic cost

WH: Example of how to do this is already on the github.

BT: Should we defer free-spacing for further library exploration?

YK: what are people expect from interpolation is not structured.

SP: it seems like we want both, structured and interpolated. It seems like we need to further explore this, before free spacing is explored

WH: We do not want unstructured. If for some bizarre reason you want to do unstructured regexp concatenation, just use + string concatenation and pass the result to the RegExp constructor. Done. We don't need a new and different way of doing that niche case.

BT: yes, we will need to explore

M: what about minifiers

DD: today, minifiers will not touch template strings today

BT: they could become smarter

BT: someone should write this

... istvan's update ...

WH: So ISO would make a tiny "pointer standard" that points to whatever the latest ECMA ECMAScript standard is?

IS: Yes.

WH: What would the ISO rules be on the references we can make from ECMA-262?

[confusion; no answer after repeated questions]
WH: What would happen to ISO 16262? Would the new ISO pointer spec replace it?

IS: The pointer spec would be a new ISO standard. ISO 16262 would then be withdrawn.

WH: What about the internationalization library (ECMA-402)? Would it have its own ISO pointer spec?

IS: Just one ISO standard would refer to both the latest ECMA-262 and the latest ECMA-402.

WH: How would contributions of ISO members interact with ECMA patent policies?

BT: They'd sign the contributor agreement for any nontrivial contributions.

WH: Are ISO members representing companies? Themselves as individuals? Entire countries?

IS: Countries.

WH: So how does the country of Japan sign an ECMA royalty-free patent agreement?

BT: They'd sign the agreements as individuals or companies per normal process.

JN: It will be hard to get the country representatives to sign anything like an ECMA patent policy.

BT: It would be the individual or company who owns the intellectual property

...............

BT: mode modifiers - syntax & semantics

BT: related to have local case insensitivity.

YK: multiline may be useful, one can imagine several such scenarios ... heredoc

BT: pearl regexp, has (?=m...) which limits what can be put inside.

WH: I'd prefer that this be lexically scoped as well.

WH: I'm ok with it for the i and m flags. I'm definitely not ok with it for the x and u flags.

YK: what about U

BT: likely can't do, as it changes the lexer.

DE: what does G mean for a range

YK: Some flags don't work contextually, and because of this should we invent something new? That would seem unfortunate

BT: interpolation + regexp helpers with ...

YK: this clears up my composition/algebra question from earlier

DD: this is compelling to me, it enables further composition

WH: Scoping: If mode switches are block scoped, template substitutions work ok. If mode switches take effect until they're turned off, then you get trouble with mode switches leaking out of inner substitutions:
    `abc${foo}*def`
    where foo is /xy(?i)z/
    would then turn on the i flag for the def in the outer pattern, which is bad.

WH: But the block scoped one wouldn't be an issue.

?: What if foo is /xyz/i ?

WH: That would turn on the i flag for just the xyz and none of the abcdef in the outer pattern. Works as expected.

SP: it seems like the structured composition of regexp should handle this, Sub RegExp get there modifiers they need.

YK: ruby has support for this

BT: ruby has good RegExp

Yk: yes oniguruma is itself a substantial project

...

BT: without this feature it becomes difficult to substitute

WH: A more fun question is what if the template is `abc${foo}*def` (without a g modifier) and foo is /xyz/g ? Such a flag juxtaposition would be meaningless.

MF: we only want I M X

YK: this is what ruby does

M:..

BT: It sounds like we want this, it may also help us figure out interpolation/composition

WH: Definitely don't want switchable x flags. Can construct all kinds of lexical trouble with it.

BT: composing with X is unknown, we may need to defer it.

BT: mode modifier makes it easier to compose

WH: so only the M and I flags for now

BT: yes

YK: sounds like an open question if we work on X

## Unicode++ - Syntax & Semantics (BT)

BT: unicode spec defines, many things (block scripts...)

BT: an example of a block is latin/arabic etc.

BT: \u allows for more ergonomic RegExp when dealing with unicode chars..

YK: unicode adding stuff, will cause enumerated charsets in  RegExp to break

BT: when naming a block, perl allows InArabic and IsArabic, C# does IsGreek, C# seems better

MF: blocks and scripts can conflict

YK: ruby has is "arabic"

YK: ruby \p === script \P is negated

DE: its possible ruby doesn't support blocks

YK: its possible

BT: implementation concern, loading block/scripts may cause excess memory pressure.

BT: i dont have a sense for how much.

SP: is the memory pressure fatal, is it impossible to pay it pay as you go?

BT: we would love to implement it that way, but that is work that must be done.

BT: I don't think this is fatal, but we should consider it

WH: how many?

BT: ~20 scripts, ~30 blocks, ~60Catogories

MF: could we use FooScript, instead if IsFoo in InFoo

BT: there is both a arabic script and arabic block

DE: yes

BT: we should avoid was C# does

DE: unicode would in theory prevent a naming collision here (script/arabic)

YK: ... ruby only has scripts

SP: can we clarify category

DD: editorial information

BT: category data is in all the unicode data tables

DE: sounds like a quirk of the written spec, likely "Weak language"

BT: should we choose script vs blocks

BT: blocks contain slots of future usage

BT: script has no future slots

DE: its cheaper to check if a char is in a block, then in a script

YK: we should likely investigate

DD: deciding factor is, will implementors carry the burdon

BT: so you would like to have both, assuming implementers accept the burdon

DD: yes

DE: the Intl Object already brings this along. Can we take that into account?

YK: what is the usability with only blocks

BT: You can't write a RegExp in a future proof way

YK: are there strings that contain things in them, and now they cannot be matched against

BT: if my design is to match only arabic  characters, without blocks is tricky

BT: e.g. does a user, writing a unicode aware RegExp do we want future characters to be taken into account

YK: in what case would this be highly important

DE: what doesC# do

BT: it has arabic === script, inArabic == block

DE: this seems most appropriate

DE: expose expert feature of blocks, but encourage scripts

DD: there are things in scripts that aren't in blocks

DD: seems to be missing symbols

BT: category + script should cover this

AK: it sounds like for stage 0, we should defer to C#, and gain more context over time,

DD: We should consider being a subset of C#

YK: It is not obvious that the C# choice appropriate for us, our startup constraints are pretty high.

BT: In reality, there should not be startup cost (for chakra), unless such a RegExp is used.

BT: the first time we load Intl, it startup time takes a hit

YK: I am happy with stage 0, i think there are design choices that are not just implementation

WH: Given how few scripts there are and given that a script is mostly a small number of consecutive ranges, estimate that script tables are a few kilobytes. Doesn't seem like a lot to obsess over trying to optimize.

WH: A different issue not raised yet: Some unicode characters have the "inherited" script setting, which means that they're chameleons: their script is inherited from the script of nearby characters in whatever string they're embedded in. How would regular expressions deal with those?

DE: from combing marks

YK: seems reasonable

BT: how will that handle the

... missed some stuff

BT: how do other RegExp engines handle this

MF: should this be allowed inside char classes

BT: I would like to, it seems handy


MK: small syntax suggestion \p matches a p according to spec. Implementations agree on that, we are not aware of usage... \u does not have this, can we change \p to \u.

DD: it does mean literal u in non-unicode RegExp

... music from next door disrupts flow ...

BT: precedence wins, unless \p is not compatible with the web.

YK: both are fine, \u is extremely nice. \u flag already means unicode

BT: so you hope for a compat issue

YK: confirm

Wasn't there another proposal is `\uUNICODE_CODE`

WH: Are the \p category or block names case-sensitive?

BT: Yes.

WH: What about multiword script names? Spaces between words?

BT: No

YK: in general RegExp has lots of divergent, would people expect foriegn RegExp work

BT: C# has a Ecma mode

DD: we should be careful to not be trolled

AK: stage 0 likely doesn't need this level of detail yet

MF: we should make sure its possible

BT: I would like to write this up, so more context is better

WH: We are talking about the substance.

WH: The place this discussion loses value is when we start debating things in the abstract, such as should we be doing the same thing as Python/Ruby, etc., without that debate being informed by what those languages are actually doing, their advantages/disadvantages/lessons, etc.

BT: ok, i guess in-order to break the deadlock. It would be useful regardless, what the compat story with escapes is.

BT: im going to proceed with \p, and see how the compat story shakes out

BT: this does not mean we can't change

BT: we have much data, that can be analized.

BT: we should do the Other RegExp item, because Alan will call in. With slides

... stepped out
... ambient music from next door

## AWB: Summarizes some OO Concepts

BT: we accept the shared vocabulary

AWB: RegExp has an abstract base and a concerete base

AWB: the public interface that it exposes, exec/split etc... essentially all the methods on the interface. No methods to provide a subclass interface, it is important \w match & replace that any class that provides those methods be a subclass of a RegExp Object. The String object was restructed in es6, so it works with any object with that implement. RegExp has a subclass interface, and it is exec. This is very intentional, 1 kernel method is required and a subclass works. By implementing this one concrete method, the abstract algos will work.

AWB: exec shows up in many places, public interface, key kernel method for subclass interface, and depends on the internal matcher algorithim.

WH: How does an implementation, that does boyer moore searching work in this case.

AWB: Let me rephrase, what if a subclass (or baseclass) wants to change or refine its search algorithim

WH: or what if the built-in wants to change/mature the algorithim

AWB: Whatever algorithim an implementation wants to use, the algo must confirm to the observable behavior defined in the spec.

WH: the spec may be over constraining this, which is what we are looking at

AWB: we should then look at the search algorithim and see where that is

AWB: the actual algo defined, are essentially the same algo in ES5 spec

DE: While that true, before ES6 I believe it was not observable to skip indexes. Unfortunately, now it is observable.

AK: I believe there are some changes we could make, that would loosen this, and likely improve some performance. There is a bug in the spec that causes multiple lookups of exec in a loop; those should be factored outside the loop.

YK: Can I ask a question about observability

YK: Are your worried that subclass should be able to participate in boyer moor algo

DE: Lets here AWB full summary

AWB: Extension strategy, someone could implement a total replacement of the public interface using whatever algo they want. As long as the public interface is implemented correctly, it should work. This is possible, but likely more work then its worth. What is likely common, is a subclass that provides some minor extensions, and defers the vast complexity to the ancetors. For example, an exec method that logs. Or a scheme for memoization Relatively simple things, some construction time modifications. Etc... Which all should utilize the built-in matcher algo, calling super to exec. All the abstract algorithims should work correctly, and all the abstract algorithims and concrete interfaces should work.

AWB: Another subclass, a more ambitious one which extends the built in algorithim. LIkely requiring exec and constructor overriding. You __may__ need to override some of the other public interface.

AWB: These where extension styles that we took into account when designed, any questions?

WH: lets go back to the boyer moor algo example, if an implementation wants to use boyer moor it would be observable

AWB: in earlier additions of ES, the algos where concrete(not abstract) and they called specific internal algorithims. In ES6, this was exposed as exec. In the past, you have exploited the knowledge to accomplish an optimization.

AWB: Is that right?

WH: yes, my comment is exec is too small of a kernal

AWB: You can still do that. (explains an possible solution)

WH: You will end up falling off a performance cliff, when following the second extension strategy on your slides

AWB: Thats fine, i don't expect such subclasses to have the same performance characteristics. If they want the performance, they can re-implement

DE: that sounds like a big task for a subclass

AWB: that is unfortunate, that subclasses cannot benefit from existing platform optimizations

DE: to give more context. JHD is working on the ES6 shim and ran into some issues

DD: multi inheritance

YK: decorators etc..

DE: RegExp > RegExpShim > UserLandRegExp subclass

AWB: let me move, on i speak to something related

AWB: I had heard there was misunderstanding of the original design. I want to be sure we have a common design

AWB: The boyer moor example doesn't invalidate my current thinking.

AWB: Lets talk about what is an extension point, search/replace/match/split  i dont consider those extension points. They are just methods that _may_ have alt implementatinos, they are just refinements of the kernel

AWB: I suspect no-one is expecting those.

AWB: @@ infront of the name, is abit distracting to me they are just public interfaces.

DE: should i explain why i wrote the slide that way

AWB: yes

DE: another way the spec could habe been written

AWB: it wasn't written another way

DE: well, another can currently implement the. `String.prototype.replace` could have provided this.

AWB: i intentionally did not follow that design path, to leave open the design to allow subclasses to extend and optimize (how we spoke about here)

AWB: if the entire abstract algorithim is in strings, we have coupled it to the class hierarchy rather then the interace. Which is just bad design

DE: i see you point

AWB: bug but easy to fix, the internal slots that are used to store the flag are part of the concrete built-in implementations The actual matcher algo, is only intended to access the internal slots. Part of what is going on here, in previous spec, these flags where readOnly nonconfigurable own instance property. Unfortunately, the annex B compile method specifying them the way it did violated this. As compile could change them...

AWB: we had to add the accessor methods, to RegExp to explain the observable semantics across compile calls. Another way to look at it, was accessors are part of the public interface... I believe i classified them as part of the public interface. So those can be overriden by subclasses for there own purposes. When you get down to matches they should use the internal slot. So simple bug, we can fix that.

DE: if we where to make a tweak with flags, `RegExp.prototype[@@split]` uses the flags accessor, instead of looking at individual flags, which is not great...

AWB: we can look at that later

AWB: when I look a the code, i can see the source of the the bug, The ES5 code did a get, and it wasn't changed. So faulty refactoring. Not a big deal.

AWB: calling RegExpBuiltinExec directly would require too much work from subclassers

DE: I see your point

AWB: regardless of what you did, your saying that the methodof the regex is not extensible. You might be able to provide an alternative implementation that is more extensive, but the object we are used to is not.

WH: I withdraw my concerns because the @@ algorithms are basically thin wrappers over exec. Modifying exec is sufficient to do Boyer-Moore.

DE: there are additional performance considerations

AWB: I know a better way, we can talk about it.

AWB: it is very important, we didn't intend to make change to the existing algorithims. My assertion is with some relatively simple guards, you can't continue to use the existing implementations. The guards should be similar or the same to existing guards. e.g. is the prototype a built-in or subclass, these seems reasonable. If there are unintentional spec changes that prevent this, we should correct.

DE: you could imagine, users mutating the builtin RegExp (Adding props etc), for these use-cases more detailed guards are required. Cross platform guards may differ, making it hard for users to get good performance

BE: DE is saying, there "may" be issues, i want to know what concrete is hard for V8 to do. I would like to hear from other implementors aswell

AWB: exactly my question, it doesn't sounds dissimilar to other tricks

DE: we have tricks similar to this in Arrays, we could potentially do them here, or something similar to that.

DE: this wouldn't be an absolute blocker, it wouldn't make it extremely bad

BE: what about apple

M: ya

DE: concerns with overall system complexity

M: another engineer has implemented this in JSC, he had to put some checks in to see or not if these are overriden. 1 guard upfront. The above flag issue would be good. He couldn't find any big issues, other then extremely targetted benchmarks (single character matches etc) where it was demonstratably slower.


BE: any chakra experience

BT: I spoke to [a developer] about it. We were concerned that the exec function may make us recompile patterns in some cases. It could be addressed by making a new kernel method exec (maybe symbol) that takes lastIndex and flags as a param. split has to make a copy of the regexp to work around that.

BT: we haven't really dug in yet.

AWB: when looking at it from kernal method extensiblity. It didn't really add any additional flexibilty. It seemed to add more complexity and an additional level of indirection.

AWB: I am still inclined to prefer the latest design.

JHD: doing what you suggested (lastIndex related global), would help the matchAll proposal.

...

AWB: (couldn't understand)

DE: I wanted to say something else, although others can v8 will likely have to rely on the more brittle guard.

AWB: (couldn't understand)

DE: it would be nice to cleanup.

further changes on slide deck

AWB: my bias is that, this complexity should be absorbed by the runtime. It shouldn't be pushed to ES consumers

AWB: I don't know the details of your framework. This ES6 feature has been described using OO best practices, the runtimes should be able to reasonably implement.

YK: I wanted to provide some histroical context from ruby. I also believe Smalltalk is similar, subclassing built-ins. Most people in ruby feel this was a mistake, kernel methods would have been more handy.

YK: For example Rails re-implements Hash to support string/symbol interopt, this ended up with 200 loc etc.

YK: it is true, userland can do the work, but system + userland get out of sync, and it is unfortunate

YK: rubinious even added a hook hash.store to deal with the issue.

AWB: the original small talk implementations were the result of people not yet being aware of these problems. Lots of coupling

AWB: ...there is a right way, and a wrong way.

AWB: my conclusion, I don't think we need a re-design. There are some small fixes and tweaks.

JHD: Symbol.exec, i would gladly work on it with you AWB

BE: A functionally pure kernel would be great.

AWB: one reason i didn't go that way, is due to some hesitation do to adding additional @@ methods.

#### Conclusion/Resolution

  - no major change
  - DE/AWB will make minor changes + tweaks
  - AWB/JHD to investigate Symbol.exec + a pure functional exec kernel

DE: TypedArray proxy issue (from Andreas Rossberg)

AWB: What if we just made an internal algorithm to do the construction, and call it from each TypedArray constructor directly, rather than having a super constructor and proto chain walk?

DE, AK, BT, MM: Perfect!

Resolution: Rephrase spec, a pull request for this is welcome

AK: while we have you, im curious re: typedArrays and stuff that changed during ES6

AK: imagine Reflect.constructor on a built-in like number, passing your own new target. There is this problem, that some of the built-in constructors have side-affects before they pull the prototype off the new topic. This yields to some wierdness

AK: Will file a separate issue for this concern


BT: other issues for AWB while we have him?

KS:

#### Conclusion/Resolution

- %TypedArray% constructor is directly called rather than having a super constructor and a proto chain walk


## Improving consistency of @@species

(Kevin Smith)

KS: on map and set, they are not used in the spec themselves, But subclasses should be able to override

KS: usage patterns, instance methods, that want to return related subclass.

KS: Promise.all and Promise.race are the only ones that use this

YK: race/all are combinators Array.from is a custom constructors:

KS: it would be good to define what the usage patterns are

AWB: ..

DD: I disagree, resolve/all/race is more "casting" and species should not be used.

AWB: I agree the return value should be using species, as the user is specifying.

DD: the argument values can be anything, and they are to be cast to the RacePromise

AWB: but why

DD: an example ...Could be... CancellablePromise.race(arrayOfMiscPromises) likely wants cast its input.

YK: those examples are dubious

SP: lets us InstrumentedPromise as an example

DD: ok lets use that one, InstrumentedPromise.all(mixOfPromises) casts all inputs to InstrumentPromises

DD: auto-casting is the intent.

AWB: that works great for the case, where you want to cast

AWB: but it breaks the case where you don't.

DD: I believe it was a mistake, likely my own mis-understanding. I don't believe it makes sense.

DE: zepto took a literal array that and swaped out its constructor. If that was new'd it wouldn't work. `Array['@@species']` create, has two checks. this.constructor if thats not an object, it goes back to the default `ArrayCreate['@@species']` of fallback. The critical original issues (based on the notes) was WebCompat

YK: @@species has another precednt

DD: A solution was needed, this pattern appealed to others. I believe it was misused, and misunderstood.

DD: it expressed a use-case for arrays, that are hypothetically use-full.

AWB: avoid nodelist instead get an array out of it.

KS: I would prefer, i would not want to argue removing it. I would like understand how it ought to be used.

YK: why is it on map/set

AWB: someone argued it should be for the future, for example adding filter/map

AWB: if we wanted to provide filter to math, a subclass to math. This would allow them to change species

YK: we should add it on-demand.

DD: we should move away from @@species on the promise constructor

DD: we should discover a future strategy. `Function.prototype['@@species'] = this`

AWB: not sure why we didn't think about this sooner

DH: whats the best next step for a change like that

YK/DD: PR

DH: should I file a bug if i don't have time

DD/KS: bug

YK: should we remove it from map

DD: lets remove it from everything, and put it on `Function.prototype['@@species'] = this;`

AWB: it was added for array instance extensibility.

DD: that would break zepto

DE: `Object.__proto__` is `Function.prototype`, which have a species returning this, which breaks the web.

KS: it seems like the cascade of missing species will break things.

DE: we could erase species create, is the species of the constructor object, if it is fallback. Then species does what I wants to do.

YK: I believe `Function.prototype` behind right about `Object.__proto__` is unfortunate.

DD: i see two paths forward,

1. investigate `Function.prototype['@@species']`
2. Map and Set shouldn't have it, we should add it on-demand.

DD: we can work out the details offline

AWB: I know from email threads, we should factor in the DOM design.

DD: many scenarios to flesh out.

AWB: API level support would be interesting

everyone: himm?

AWB: for example, filter some collection, give the power to the caller.

DD: shifting the burden on the user seems unfortunate.

YK: filter species feels good, map feels back. mapping a nodelist, getting back a nodelist is funky

DD: ya for this DOM api, it doesn't seem good

DD: it feels good for like, OrderedCollection from small talk

DE: this pattern works in several scenarios

BT: summarize?

DD: i see two paths forward,
1. investigate `Function.prototype['@@species']`
2. Map and Set shouldn't have it, we should add it on-demand, and do no carry it forward.

#### Conclusion/Resolution

- remove `@@species` handing from `Promise.all`/`Promise.race`
- no decisions made on other `@@species` handling
- investigate `Function.prototype[Symbol.species]`


## Promise Rejection Hooks

BT: discussion on various GH threads, this should be easy.

BT: the problem is that, proxy enumerate trap iterator is allowed to return w/e it wants.

YK: symbols are can be enumerable but not as for in key

BT: currently it can return anything

BT: first proposal
1. error for non string return
2. coerce to string

BT: proposes errata thrown error if non-strings are returned

MM: is there a precedent  for this?

BT: Other places where invariants are violated, we throw

DD: can non descriptors be returned from the descriptor

MM: no, we fixed that.

DD: promise rejection handlers

...

MM: there is another defactor standard for JS (both node and browser) and sort fits in the same general area of purpose is console

MM: console is interesting, the writing to console is exposed to JS, but the visibility is platform specific.

MM: the kind of diagnostics seem to related

DD: this is also meant as a way for programmers to report back to the server (for example)

MM: the console can show the traceback

MM: this feature is used as a programmer to find bugs, it is diagnostic. And should be gather only by code that has authority.

DD: a good debugging/diagnostics proposal sounds reasonable in the future

BT: improving the layering of HTML + ecma, to improve the boundaries are (internal slots, and abstract algorithims)

BT: how much scrutiney should this sort of work get?

DD: these sorts of changes already exist

MM: I would prefer such things brought to the group.

YK: it seems like we need some healthy interop between the various groups, so if webcrypto wants to add some concepts. It should be part of some inter group discussion

MM: should it go through the group before it can advance outside

MM: clearly the web will advance without

MM: being notified early is important

YK: I agree

BT: should likely be an editor discretion. With github, changes are public and watchable.

YK: a small process may solve, for example. The editor of a given group tags changes as potentially relevant.

BT: bi-weekly changelog, with highlights called out. Grouped sections, to draw attention to various interested parties.

#### Conclusion/Resolution

- promise rejection hooks are in
- editor may apply own discretion on further "implementation hook" proposals
-

## Proposal Repos, and where they live + editor update

BT: for people not watching the spec, let me show you what we have.

BT: we have a permanently bleeding edge spec at http://tc39.github.io/ECMA-262/

BT: more people using it the more bugs we can fix

BT: we have a nice fuzzy searching table of contents

BT: find all references (when clicking on various identifiers)

BT: ...

SP: We can tweet every release

DD: who controls @tc39

JHD: I believe i gave that to DH

DH: I believe i have it

MM: what happened to the wiki, we should get it back

YK: finding historical references etc.

DH: I will try to convince mozilla ops to get it back up

BT: I tried once

DH: I will ask them

...

BT: I will provide the bi-weekly callouts, but wont come to each meeting with the delta

YK: It is reasonable for others to keep up to date online, and be prepared for the next release

BT: it would be nice if everything under the tc39 org is going to be archived in some way that ecma likes

BT: stage 1 approval (entry critera) that the repo be on the ecma

BT: but stage 0 is lost

SP: we can move the repo

BT: great, but moving the GH pages redirection seems to fail post move

JHD: creating a new repo on the old location allows a manual gh-pages redirect, but breaks the automatic repo redirect, so please don't do that

YK: I will ask if there is a good reason for that.

BT: many have stage 1+ that are not on tc39 org yet

BT: it seems like there are several steps, may be labourious.

BT: lets talk to istvan and see if we can give everyone owners

BT: stage 1+ email me, and we will work on the repo transfer.

SP: editor doing this, acts as a good filter.

DE: Proxy Implementation for in issues

#### Conclusion/Resolution

- any stage 1 or above proposal repos must be transferred to the TC39 org, as a stage 1 entry requirement


## Trailing commas in function parameter lists

(Jeff Morrison)

JM: stage 3?

AK: does this cause problems with arrow functions

BT: it may increase the complexity of parsing

BT: i believe the spider monkey folks had thoughts, but I don't know why

DH: does you spec include handling of sequence expression grammar

JM: no

DH: then it doesn't seem good

JM: spec doesn't have trailing commas in arrow function

...

JM: ok I will add arrows (pending stage 3)

DD: stage 3 tomorrow?

JM: yes

#### Conclusion/Resolution

- hopefully stage 3 tomorrow after arrows are added


## Proxy [[Enumerate]] ocerconstrains implementations (AK)

https://github.com/tc39/ecma262/issues/161

AK: proxies have an enumerate trap, the worry is (from us implementors) must call next at specific times. Which causes some concerns, it seems like something is underspecified...

DH:

AK: we want to leave it up to the implementation to eagerly fetch the keys, regardless of proxy

BT: To summarize: if i am enumerating a proxy, we cannot pre-collect the keys because the call to the next is observable.

BT: spreading before the loop, may have issues

JHD: proxies with infinite enumeration wouldn't work then?

JHD: something like an iterator that iterators for 5 minutes and stops. (laziness)

BT: ...

YK: Can we move from loosening, to changing to the usage to what the implementations want.

YK: for example, changing the spec ahead of time

YK: proxies can observe, IE has some behavior, people get used to it. If collect seems like the right thing, we should move that way.

DE: lots of cross platform differences are already observable here, because for in is under specified.

BT: YK I believe that will be safe from a compat standpoint

BT: I would be surprised if the enumerate trap is being used

YK: i believe a delegating exotic will want it.

BT: only the for in code

DD: for app code, unlikely

YK: agree

YK: its the copying protocol

BT: it seems unlikely that is is an issue, we can safely make the change

BT: If not, maybe we can leave it under specified?

YK: I feel MM should care we shouldn't under specify

MM: we should have deterministic specs, remember our target audience is many web programmers for many websites. Reproducible behavior is important for this environment

#### Conclusion/Resolution

- specify that [[Enumerate]] spreads before entering the loop https://github.com/tc39/ecma262/issues/161#issuecomment-157910543
- the committee would not agree to underspecified behavior
- there is a compat risk for Chakra but the assumption is that it's not a problem until there's data saying so



## Function.sent (BT)

BT: its in babel

DE: did you add internal slots

#### Conclusion/Resolution

- deferred till tomorrow...


### Async Await


BT: I did not finish the tests, but noticed some troubling things. IE ships AsyncFunction, I believe we should actually not do this

SP: im curious why

BT: unsure, MM?

MM: these is no reason to give it a global name

DD: TC39 believes the global isn't a mess already

MM: well, because of this, we should take extra care. We should not contribute to the problem

MM: we discussed that modules will be a mechanism for us to prevent additional pollution.

YK: yes its a risk, modules are a way out of this.

MM: GeneratorFunction is not shipped, SES also wants to splice it out. Lets stay with the precedent

MM: ES5 added a new global called JSON, this causes grief. Facebook had such a global,

DD: Ok

BT: does the fact that Edge not ship `%AsyncFunction.prototype%` at all (that `Object.getPrototypeOf(async function () {}) === Function.prototype` and should not) mean we need to wait on stage 4?

(lots of discussion about whether global topology should block stage 4)

...

MM: for in order is different we might revert

AK: is this demonstrating a problem with that staging process

YK: yes

AK: im talking on behave a process

YK: there is a well known process, feature flags. They have a cost, but the benefit improves the integration process

MM: what is it

YK: isolate chunks of code (markup) that is isolated, interim work can take advantage of this.

AK: the spec is too big

YK: what will happen in practice, if AsyncFunction is present. Related work will be able to take into account. There is cost associated for sure.

MM: there is an existing cost today, FF has an additional cost.

AK: ...

BT: I asked the question, because I want to decide how to allocate my time tonight. I didn't want to allocate the time, if the already presented issues blocked anyways.

AK: I'll take your word the "cost" is trivial

BT: As an implementor, I need to frontload the work that the group feels appropriate

DE: it would be optimal to have high quality tests, if there are issues / failing tests we can and judge the risk associated.

... deciding core semantics ...

BT: 95% confidence interval on "core concepts" or tests related to non-trivial changes. Or issues unrelated to performance/stability.

MM: populate visible primordials must be populated

BT: this is a hard conversion to have

BT: i will report back after tonights

DE: various contextual s keywords in edge cases, may have unforeseen complexity. I would like to have this considered a core semantics.

SP: risk of shipping, with bugs vs risk of lacking feedback from shipping

BT: its a risk forsure

AK: That is a good reason why multiple implementations are good, as it they will hope to have overlapping bugs

#### Conclusion/Resolution

- do not add GeneratorFunction or AsyncFunction constructors to the global object
