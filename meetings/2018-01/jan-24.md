# January 24, 2018 Meeting Notes
-----

Sebastian Markbåge (SM), Lin Clark (LCK), Waldemar Horwat (WH), Dean Tribble (DT), Chip Morningstar (CM), Brian Warner (BWR), Mark S. Miller (MM), Till Schneidereit (TST), Michael Saboff (MLS), JF Bastien (JFB), Mattijs Hoitink (MHK) , Kyle Verrier (KVR), Brian Terlson (BT), Shu-yu Guo (SYG), Ron Buckton (RBN), Michael Ficarra (MF), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Tab Atkins-Bittner (TAB), Kevin Gibbons (KG), Domenic Denicola (DD), Mariko Kosaka (MKA), Myles Borins (MBS), Peter Hoddie (PHE), Jordan Harband (JHD), Justin Fagnani (JFI), Caridy Patiño (CP), Zibi Braniecki (ZB), Daniel Ehrenberg (DE), Keith Cirkel (KCL), Justin Ridgewell (JRL), Mathias Bynens (MB), Patrick Soquet (PST), Nathan Hammond (NHD), Stephen Murphy (SMY), Adam Klein (AK), Sathya Gunasekaran (SGN), Gabriel Isenberg (GI), Dave Herman (DH), Brendan Eich (BE), John Lenz (JLZ), Diego Ferreiro Val (DFV), Maggie Pint (MPT), Thomas Nattestad (TND), Isabelle Valet-Harper (IVH), Peter Jensen (PJ), Brad Nelson (BNN), Godfrey Chan (GCN), Sri Pillalamarri (SPI), Eric Holk (EHK), Reefath Rajali (RRI), Rebecca Turner (RTR), Natalie Silvanovich (NSH), Sam Mussell (SML), Sebastian McKenzie (SMK), Daniel Rosenwasser (DRR), Joyee Cheung (JCG), Rob Palmer (RPR), Sean Larkin (SLN)

Remote:
Bradley Farias (BFS), Thomas Wood (TWD), Ben Newman (BN), Rick Waldron (RW), Valerie Young (VYG), David Turissini (DTI)

-----

## Agenda

Agenda: https://github.com/tc39/agendas/blob/master/2018/01.md

## 13.ii.j RegExp lookbehind assertions for Stage 4

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-regexp-lookbehind)

MB: With the updates, any objections to Stage 4?

(No Objections)

#### Conclusion/Resolution

- Stage4 acceptance


## 13.ii.k RegExp Unicode property escapes for Stage 4

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-regexp-unicode-property-escapes)

MB: We've fixed the bugs Waldemar found in this. Any objections for Stage 4?

WH: I'm now happy with it.

(No Objections)

#### Conclusion/Resolution

- Stage4 acceptance


## 13.iii.a Promise.prototype.finally for stage 4

(Jordan Harband)

- [proposal](https://github.com/tc39/proposal-promise-finally/)

JHD: We have tests, editor-reviewed spec PR. Asking for Stage 4. Any objections?

(No Objections)

#### Conclusion/Resolution

- Stage4 acceptance


## 13.iii.n Optional Chaining update

(Gabriel Isenberg)

- [proposal](https://github.com/tc39/proposal-optional-chaining)
- [slides](https://docs.google.com/presentation/d/1tAxG8y-lfMty2-qdiCAtQjD9rS8xzBe9Y4b_ti9DIMQ/edit?usp=sharing)

GI: proposing: obj??.prop obj??[expr] func??(...args) and some day someValue ??: defaultValue

`a??.b` equivalent to `(a == null ? undefined : a.b)`

desugared output is the standard output.

`a??.b.c.d` equivalent to `(a == null ? undefined : a.b.c.d)`

short circuiting:

`a??.b.c(++x)` equivalent to `(a == null ? undefined : a.b.c(++x))`

optional method invocation: `a??.b()` equiv to `(a == null ? undefined : a.b())`
This is the 93% use case in CoffeeScript today. Throws if b is `42`. TypeError if {}.

GI: Not looking for stage advancement today, instead looking for feedback on operator change.

Optional Call: `callback??(null, {status: "ok"})` maps to ...

Bracket Access: `console.log(a??.b)` is like `a??['b']`
Included for symmetry.

CoffeeScript: member access `(X?.y)` is 82%, function invocation `(x?(y))` is 12%, bracket access `(x?[y])` is 5%.

CoffeeScript short-circuiting 93% of use cases in the codebase is covered.

MF:  coffeescript checks whether something is in scope first, some of those uses might just be trying to avoid the reference error

GI: I'll check the coffeescript usage and come back with more info

WH: Why would you write code which references variables that are not in scope?

MF: Well, for e.g. `Math` is not known statically to be in scope but people use it.

GI: devs twice as likely to write a?.b?.c than a?.b.c

GI: asks for committee:

1. Is there a preference for a proposal that only includes member access? (With the ideal syntax.)
2. Are optional method invocation and bracket access controversial enough to move into their own proposal?
3. Should be have short-circuiting with the current scope?

WH: I can say that the answer to point 1 is no. We've gone around that block once already and don't need to go around it a second time. The problem with a proposal which only includes member access is that it still (indirectly) allows optional member calls and bracket access via expressions such as `a?.b.c()` or `a?.b.c.d[e]`. Given that, we might as well just support optional calls and bracket access directly.

GI: (Summarizing WH's opinion from last meeting.) "You're going to have to do all of it, so we may as well do it all as part of one proposal."

GI: current status is stage 1, have babylon parser and transform support for ?. syntax, and a spec draft. Will work on spec and ask for stage 2 at next meeting.

YK: I'm much happier with the scope now, I would like to extract the more controversial parts into their own proposal if that doesn't make it incoherent.

YK: Two other active proposals that use the ? ascii char.

YK: I want to decide all of the things about question marks mean new things all at the same time. Concerned that the syntax will become inscrutable with all of these changes happening at the same time.

DE: the scope of short circuiting was the same as the previous proposal, a chain of property accesses or method calls. does anyone have remaining concerns?

YK: One thing that this changes is that it allows us to move bracket access into a separate proposal.

DE: it wasn't clear, we heard WH say it shouldn't be moved into a separate proposal, but you (YK) said it should .. were there other controversial aspects?

YK: my concern in general is .. a lot of people have the correct intuition that it will mostly be used for x?.y or x?.y?.z, and I think that's the dominant use case, a good use case. I buy WH's argument that this is a minimal proposal as it stands. People can use linters to avoid more complicated things that are not ideal patterns.

YK: what is not strictly necessary to accomplish the member access features

WH: this is a really minimal proposal, trying to shrink it down further makes it really complicated

YK: Things that become too complicated can be linted against. So it's okay to implement all of the use cases for consistency.

DE: when you look at the coffeescript analysis, these three features are the ones that are most used, the proposal used to have a lot more, so we've already reduced it

YK: I don't buy the analysis because coffeescript because they have also changed the falsiness semantics.

The more clever you get with this feature, the harder it is to read.

DE: to maybe draw a conclusion, does anyone want to recommend that this be split into a separate proposal?

YK: I want to circle back with WH to make sure that we can make a recommendation for what we should do it.

DE: we'll follow up offline to figure out a recommendation for gabriel

MPT: For the record I also think this breaks intuition to omit some of these operators.

DE: we're talking about using "?" in the pipeline partial-application proposal, I agree with YK that it could be confusing to use "?" for both of these when they're unrelated

YK: we should address question mark syntax tokens before stage 2

DE: I think we should address that earlier

RBN: I understand the rational for more consistent tokens, but since the majority use case is dot property access, and the majority .. requires more syntax to handle the less-common use cases. I'm more supportive of the original syntax than the current syntax changes, for anyone coming from another language, having the larger ?? syntax may trip them up. I'm opposed to the current syntax changes.

WH: I also (weakly) prefer the original syntax (`?.` instead of `??.`), just as a personal preference. However, I have no objections to either choice of syntax that we may make here.

RBN: I wonder if we're only weakly preferring a consistent syntax, maybe we could move forward with the original syntax

JRL: we had a very long discussion about trying to unify all three approaches including null coalescing .. one case a.b?.(c) looks like a property access and not a function call, looks very strange. With this new syntax, when you remove the dot from the optional function call syntax, it looks considerably better (a.b??(c))

RBN: ok, but coming from C# with a null-coalesce operator ("??") It's more common to call a method on an object that might not exist, over calling a function that might not exist. That's less valuable when you're optionally calling a non-existent method, but it's a small price to pay

JHD: I was one of the ones who raised consistency issues with the original syntax. Within the chaining operator I think that it's paramount that if it is property access it use a bracket and that functions use a paren. If one of the syntaxes is particularly ugly then maybe we don't include that approach. The important thing is developer intuition. when I see += I know that's plus and assignment. when I see ??. I know it's coalesce and member access. I think it would be super-weird and hard to teach if the operators compose in that way some times but not always.

WH: That is a good point. To clarify, I don't mind either syntax

RBN: your example of +=, it's also your intuition if you're coming from java or C or pretty much any other language. If you're coming from a language with a null-coalesce, you think ?? means that, not something else

JHD: I'm not specifically attached to this syntax, but developers should be able to learn it. Still prefer alternative syntax so that things remain consistent. The teaching story is important.

#### Conclusion/Resolution

- did not ask for advancement, so not moving to stage 2
- YK, WH, and GI to converse and get back to GI about possibly splitting the proposals.
- No conclusion about whether the syntax change, continue discussion


## 13.iii.m Getting last item from Array for stage 2

(Keith Cirkel)

- [proposal](https://github.com/keithamus/proposal-array-last)

KCL: common footguns around array lengths: myArray[myArray.length] always gets undefined, overcooking index (idx=arr.length - 1; arr[idx-1] returns next-to-last, not last

KCL: one solution: myArray[-1] === myArray[myArray.length - 1]

WH: you can't do that, please present solutions that work :)

KCL: Agreed. Wanted to illustrate proposed solutions from community. Next. myArray[:-1] , request range access. Ruby has range access somewhat like this. Would be new syntax, might be hard to spec, and hard to polyfill. Could be "ponyfilled".

WH: What's "ponyfilling"?

JHD: a "ponyfill" is an unintuitive and made-up term for a shim that does not self-install into the environment, also known as a "polyfill"

(Litigating terminology ensues)

DD: we're not debating new jargon now

KCL: Next is myArray.last() . very simple to spec, hard to do it accidentally (vs negative index), behaves like normal property access. Cons: slippery slope (a.first(), a.second(), etc), slippery slope for adding arguments (last(n)), highly likely to cause webcompat iissues, no intuitive way to set the last property (a.last(valueToSet) is weird)

KCL: questions?

DD: Why a function and not a property access? Also allows setting. I tend towards the last one, unless the committee is excited about ranges. Why not a getter/setter? (myArray.last = 3 ??)

KCL: Last time this was proposed, it stalled on the question of method vs getter, so I was hoping to avoid the stall this time

DD: you can't avoid this issue

JRL: a getter avoids the hazard that you accidentally tear off the last item (?)

KM: The one downside of using a getter/setter is that I imagine that frameworks that set 'last' on the prototype do so as an assignment and you would then end up assigning a function to the the last item in the array. As a property there's no way that's going to be web compatible.

KCL: I share that intuition

DD: we could hack around that, if the receiver is Array.prototype ..

all: groans

TST: I'd bet against that hack being web compatible

?: a lot of libraries work with arrays or iterables to query over values to use .last to mean tear off the last number of elements on the array, so having something on Array that's different from what most libraries do would be confusing. you could use array.slice(-1), you could have a method called ".item(0)" or ".item(-1)"

KCL: that's a possibility, the concern is the same as with overcooking your indexes, you have to do math to get the property

RBN: a .peek() could look at the last element as well

KCL: so essentially rename .last to .peek? I'm ameneable to that

JFI: if you use literals like "-1" it wouldn't be overcooked, right?

KCL: yeah, but, same is true for doing it currently, question is whether you put it in the right place or do it too much. the point of the last proposal was to diverge from ever having to write "-1", it's hard to read, why are we using negative numbers here

KCL: Prefers generally more expressive naming.

GCN: Prefers a .peek as an option. No way to easily get a range using slice. If you slice(-1) you still need to a mental backflip to get the right elements. Likes the idea of a last N function.

KG: is there *any* chance that a new Array method would be web compatible? I'd be surprised if we could do that.

TST: I think this is different from "includes" because I can't imagine any different semantics for "last". Or rather, I'm confident we can find semantics that are web compatible.

WH: why are you taking the absolute value of the length in the polyfill?

KCL: No real reason, I can discuss afterwards

WH: There are bugs in your polyfill. It always returns undefined.

YK: I just wanted to voice support for proposals like that this which improve things in libraries, vs syntax changes, I end up needing things like this all the time and periodically make these kinds of mistakes. We need to figure out the webcompat issues, but I think this has a lot of value

WH: I don't want to extend the syntax for things that can be done with existing syntax functionality. And getting just the last element isn't worth syntax changes. It might be worth it for a more general proposal

ZB: I agree with ZH, it's a great intro proposal for array slices if that's something we could aspire to

DD: I am interested in the committee's feeling about the more general array slicing syntax. I don't think a one-off for just the last element is a good idea, but the range syntax as a whole might be good.

AK: Arrays aren't special; what does it do on non-arrays? Does it desugar to a property accessing?

?: is this just slicing, or is it general support for negative array indexes?

AK: This proposal isn't fleshed out enough for me to have comments at this time.

WH: negative indexes already exist in the language, we can't change their behavior

MF: This committee has a history of adopting some coffeescript features. CS had slicing and splicing, the feature worked somewhat like this, it was also allowed in assignment position. It might be worth investigating how CS did it.

CM: This talk about slices is interesting and if someone wants to propose it they should, but this is getting in the way of solving the problem this proposal sets out to solve: the common use case (last element) where people are constantly making mistakes. It's fun to think about cool things but we should focus on the immediate need.

KCL: many languages have both these styles, don't see why you can't have both. We could have just .last, even if you change the name to .peek

DT: maybe getLast() to make it obviously a function rather than a property/getter/setter/assignable-property

KCL: I'm happy to bikeshed on the name, maybe as a stage 2 question

DE: ES6 doubled down on square brackets meaning property access instead of being overloaded, the committee ended up going a different direction with proxies exposing the meta-object protocol and with computed property names. I think it would be odd to go a different direction now for that syntax.

ZB: Chip, you said you find the 'last' problem separately solvable. I think of them as being the same problem as slices.

CM: I think slices are a completely different abstraction space

ZB: not sure I agree, not sure I disagree, but it's shortsighted to .. ?

CM: nobody is talking about [-1], that's incompatible

MM: [-1] already has a behavior, [:-1] takes you into slices

CM: this is just "give me a function that gets me the last element of the array", that's all it is

KCL: Slices may have been over-proposing, can we ignore them for now and focus on .last? Stage 2 for .last?

MM: you're asking for stage 2 but postponing the name? Can someone remind me what the definition of stage 2 is?

JHD: First a clarifying question: you are proposing taking 0 args as a function?

KCL: Yes.

JHD: Stage 2 is [cites process doc]

MM: then I'm ok with that

JHD: Seems appropriate to have the name open.

MM: And property vs method?

JHD: No, not appropriate to leave that open while getting stage 2.

DD: There's precedent with "replaceable" in the web platform: a getter and a setter that does DefineOwnProperty to replace itself. I don't think it's worth it here, it would be confusing.

JFI: Isn't this only a problem if the name collides?

DD: That's right, if we choose an obscure name we could use a getter/setter.

YK: people have strong intuitions on what is webcompat here, but why are we so confident that we can't use .last as a getter, but can use it as a function. I think there's a webcompat research to do here

KCL: I agree

KG: Prototype.JS does Array.prototype.last = stuff

KCL: Stage 2 with name open for bikeshedding?

YK: No, champions should investigate and pick a name.

AK: the stage 2 proposal should have a name, so I don't want this to go to stage 2 without one

YK: This is like A.p.includes

DD: We just had no idea that wouldn't work. It was the first thing.

AK: I agree with Chip that this is a nice thing. 'global' is the most recent thing suggesting this is a problem which needs solving early.

YK: find a name, make sure it works

AK: I'm ok with objecting to stage 2, not because I don't want the feature, but because I want a clear name

KCL: OK, any objections to stage 1 with me coming back with a name?

(No Objections)

#### Conclusion/Resolution

- Stage 1 acceptance
- champion will investigate web compat and other possible names


## 6.i Chair group in 2018

RJE: There's a proposal for me as chair + Leo and Dan as vice chairs. Anyone willing to move?

YK: Move

MF: Second

RJE: Any need for further discussion?

MF: You should probably leave the room just in case.

(notes suspended while they're out of the room)

#### Conclusion/Resolution

- Approved: Rex as chair, Leo and Dan as vice chairs by unanimous consent


## 6.ii Editor Group

editing group: over lunch yesterday we met about forming an editing group

JHD: Current plan is that Brian will continue to maintain tooling like Ecmarkup. Bradley and I and Brian Terlson will be editors.

YK: What does that mean for things that require editor signoff?

JHD: We'd have to work that out. Either one editor is sufficient or all three have to either review or defer.

YK: I'm comfortable leaving you to work that out, as long as you tell us what it is.

BT: I think in practice editor actions will have internal consensus among the editor group. I suspect we'll end up specializing to different areas of expertise. I think having multiple editor eyes will be a really nice thing. I won't go so far as saying that all decisions will require internal consensus for simple editor PRs and similar.

YK: I'd expect mostly one person to do it, but occasionally say "this is too much for me" and bring in the whole group

BT: If I had to guess where we'll end up, editorial changes require any one editor, normative changes require agreement.

YK: sounds good

DE: I like that structure, if this can be clarified and agreed upon by the time we decide on editors, that'd be great

JHD: We'll think about it and discuss among ourselves and give a plan.

BT: keep in mind that march is in London, so attendance will probably be light

JHD: We can also reconfirm in May. Another advantage of multiple editors is that if one editor needs to rotate off it's OK.

DD: Sounds like a good plan but I encourage you to start trying it ASAP. I know it involves talking to your managers. Make sure it's manageable, get the relationship flowing as soon as possible.

BT: You could start spending your time allotment on open issues.

#### Conclusion/Resolution

 - Brian Terlson, Jordan Harband, and Bradley Farias will present in March, tentatively planning for the three of them to be joint editors.


## 13.iii.o Intl proposals for stage 3: Intl.ListFormat, Intl.RelativeTimeFormat

(Zibi Braniecki)

- [slides](https://docs.google.com/presentation/d/1JlVOkn21jyF4YlsxBeisfvyYKzf5AZYNUzrUeZD12CQ/edit#slide=id.g2e1d914bb7_0_62)

ZB: two intl will be presented tomorrow, when we have more time, two willl be presented now, less controversial

ZB: Intl.Segmenter: already stage 3, got approval from ECMA-402? during last call.

DE: in the call we discusesd adding another option

ZB: We talked about more options including specifying the break algorithm, decided against that because (?). Any questions?

ZB: just wanted to give you an update, not asking for advancement

ZB: Intl.ListFormat, currently at stage 2, at the last call we only changed the name of the type, added support for "or" lists, now we have three types of list (unit, conjunction, disjunction) which reflect a list of units or phrases, "anna mary and john", "anna mary or john".

ZB: We believe this is ready for stage 3.

DE: Reviewers were Fabio R???, who isn't at the meeting but confirms by email, and Matias.

MB: I reviewed it after the last meeting and submitted some PRs incorporating my feedback. They got merged, and I think it's good now.

ZB: any objections to stage 3?

(No Objections)

#### Conclusion/Resolution

- Stage 3 acceptance


## 13.iii.i throw expressions for stage 3

(Ron Buckton)

- [proposal](https://github.com/tc39/proposal-throw-expressions)


RBN: for the past couple of meetings we've been discussing throw expressions, relatively small change to the spec, but pretty interesting, moving some statements over to expression forms. Allow the use of "throw" in an expression context. For required parameters, arrow function bodies, conditionals, logical, nullish coalesce

RBN: `() => throw new Error()`

RBN: open issues: should "throw throw x" be disallowed? (#9). We don't disallow "void void x" etc, so disallowing "throw throw x" would seem weird. Maybe "throw (throw x)"? From a runtime perspective, none of these are issues

WH: don't special-case `throw throw`.

JHD: I'm the one who raised the issue. I don't think this is a blocker.

RBN: any other concerns on this? nope.

RBN: currently at stage 2, requesting stage 3. RBN is champion. Till and Keith Cirkel are reviewers, BT is editor reviewer. We're having a discussion about "Statements as expressions" tomorrow.

WH: I reviewed it, I'm fine with it

RBN: should we move to stage 3, or wait for tomorrow's discussion?

KG: I don't want to move this to stage 3 without having that discussion, I'm not yet convinced this is worth adding to the language if we had "do" expressions. Looking forward to the discussion later.

RBN: ok, I'm fine on holding off on promotion until after that discussion

YK: I think it's too bad I don't see Dave here, he's championing the do-expression, I don't think he thinks the do-expressions obviate shorter syntax like this. And people exprect this to work already, I don't think this opens up a pandora's box. We already have the expression/statement duality, moving things from one column to the other doesn't seem like it increase the complexity too much.

RBN: I've had converstaions about this with Dave, this is mostly collaborative work with Dave, with me championing this and dave championing do-expressions

?: what was the result of that discussion?

RBN: throw-expressions and do-expressions are complementary, with somewhat different areas of focus, some overlap. Error functions was a slightly differnet way to express this, but .. ?

RBN: Dave and I don't think either one must obviate the other

#### Conclusion/Resolution

 - no promotion
 - will have a related discussion tomorrow, then re-raise stage 3 question


 ## 13.iii.l Top-level await for stage 0

 (Myles Borins)

- [slides](https://docs.google.com/presentation/d/1B0csbsot4HTrk30ueYMDqd1S-nRkCiIcVXaWgtSU_0Q/edit?usp=sharing)

MBS: I wantd to get a pulse from the committee if this feature has a future at all, and get a feel for the different implementations we could explore, which are more interesting to the committee

MBS: history: async/await was brought to TC39 in jan-2014, in april-2014 the 'await' keyword was reserved. july-2015 async/await was advanced to stage 2 and top-level await was deferred to avoid blocking async/await. From the notes of that time, nobody seemed to object in general, but it was tied into the loader, so separating them seemed best. Since then, top-level await has come up a couple of times, mostly to make sure new feature proposals wouldn't block it.

MBS: motivations: top-level main: import blah; `async function main() {...}, main(); export ...`

MBS: also IIAFEs (immdiately-invoked): `(async () => {...} ) ()`

MBS: this is a drag, if this pattern becomes common, makes the execution graph nondeterministic

MBS: another pattern: completely dynamic modules: `const import1 = await (await import(..)).default()`

MBS: potential solution A: top-level await blocks tree execution, this is what most people think about: module execution is blocked until the await finishes. Doesn't block entire thread (things could continue to run in background)

MBS: B: top-level await does not block sibling execution: if module A requires B/C/D, and B calls top-level await, then C and D execute in the expected order. Do not traverse child imports of B until the await resolves.

MBS: C: top-level await can only be used in modules without exports.. Talks to concerns about deadlocks in the graph. One edge case: modules imported with intention of only side effects. But addresses most use cases. Could be an interesting incremental approach

DD: fetching the slow thing is never blocked

MBS: (addressed it)

MM: what does the IIFE code look like in these variants

MBS: (see slides)

JHD: what if a module without exports is imported (in case C)?

MBS: (had answer), also can maybe do static analysis ..

JHD: I like variant C in that it resolves the CLI use case, but still raises the question of what happens if you import a file that has a top-level await (that may have top-level import statements after it, or not)

...

JHD: maybe top-level await can only be used in the top-most module of the graph?

MBS: from a teachability point, it's easier to explain that top-level await works when you don't have exports than when it's the top-level module ???

DD: there's no way in browser environments to say a module is the top-level of the graph (maybe in Node there is)

YK: I want to propose variant D. Before that, one thing that bothers me about all the compromises, in Node there's a sync-vs-async distinction, people just use the sync because ot blocks. One thing I like about A is that it lets you move from .. to ..async . A has problems but unifies the initialization step

YK: "D" is like no exports can appear after the top-level await. I don't like it any better than B or C, but it allows you to use more use cases (where await happens to be the last thing). Also more use cases...
TODO(yehuda): please fill in

MBS: great, let's talk more offline

BFS: errors after await in variant B?

BFS: we're essentially branching in B after the first await is encountered? if it errors after that point, we can't roll back the completion

DD: I don't think we would complete module evaluation, it'd become async. For A and B, parents are not evaluated until their children are evaluated.

YK: isn't that an objection for all variants?

DD: your D seem very exotic

MBS: use cases: dynamic dependency pathing: ``const strings = await import(`/i18n/${navigator.language}`);``

MBS: resource initialization: `const connection = await dbConnector();` Lets modules represent resources and produce errors, instead of putting all of your code inside the on()

MBS: dependency fallbacks: `try { jquery = await import (cdnB); ... import(cdnB) }`

MBS: constraint: halting progress: A would halt in the graph until resolved, B doesn't block sibling execution, as long as there are no cycles, everything else gets executed. I like the idea of being able to statically analyze the graph and identify which nodes are dirty.

DD: this is way better than SyncXHR

MBS: C limits progress halting to the root node. Most problems with halting are resolved in C

MBS: existing ways to halt progress: infinite loops, Atomics.wait, infinite recursion, all lock the thread in various ways. We can teach best practices to get people to not do these, and also how to use top-level await properly

MBS: another potential halt is to export a function called "then", you can now await it, just works. We can avoid this pattern if we have top-level await

MBS: deadlocks, we want to design our await to aid detecting forms of deadlock

BFS: there are a lot of ways to approach this, I'm not dedicated to any of them. Temporal dead zone to detect this.

MBS: I removed the slide for that, I can find it

BFS: basically the exported "then" rejects until you reach the end of your source text

DD: this is a weird implementation detail based on current technology, the higher-level bit is that we have tools for this, we could add them to the language

DD: right, if we move forward with C or something which limits exports then we can avoid dealing with the deadlock problem

BN: isn't variable C compatible with A and B?

MBS: right, nothing in C would preclude implementing A or B later

DD: not sure C is compatible with those, I think you have to pick A or B

BN: could you explain that? A and B are mutually exclusive, but we could add the C restriction with either

DD: ah, yes

DD: deadlock problems already exists in async functions. I'd love to hear more from people who think deadlocks are a problem. It's just like a call graph, but it's a module graph, and if it happens you'll notice quickly. I'm hopeful that deadlocks aren't a big problem.

JLZ: does variant B break downstream modules that exist only for side effects?

MBS: I think it changes the way you think about it, which is one of the problems with B, but not a reason to not do it. We have determinisitc order, if you .. can't depend on side effects..

DD: execution order is determinisitc up until the first await. IF your side-effects happen before then, they're deterministic

Justin1?: trying to install polyfills before anything else happens, if any part of it has await, we can't depend upon it. That's probably the largest issue.

DD: just don't use await

DD: why is the polyfill importing a dependency it doesn't control?

YK: what if the polyfill depends upon another polyfill..

DD/JRL/YK: (discussion about polyfills that aren't sync) Polyfills that are imported as the first line of an entry point are no longer guaranteed to be executed before later imports (the main code).

MBS: let's take it to a whiteboard offline

WH: (Asking DD about his comment about execution being deterministic up until the first await): Yes, you can do side effects before the first await, but if you also have an import in the module, doesn't the import introduce an await as well?

DD: It does in the desugaring but shouldn't actually work that way.

CP: circular dependencies with more than just a->b->a, I'd like to see more details about how this would be a spec

MBS: yes, if this proposals move fowards, we definitely need that

JFI: with B, as soon as you lose the deterministic/blocking order of siblings, is having an async module viral up the dependency graph?

MBS: it stops the execution of the parent, so not viral in that way

MBS: there are no prior decisions to point to. past discussion has guarded the standard to allow it ot exist. Multiple ways to do it, variety of use cases, genuine concerns. Is there a future for top-level await? Does anyone object to this moving forward in any fashion

YK: what stage are you proposing?

MBS: stage 0, but there's a proposal document that covers all the requirements for stage 1.

MBS: any objects to moving to stage 1?

(No Objections)

DD: who wants to be involved? (several hands)

MBS: I'll start a thread to connect everybody

#### Conclusion/Resolution

- Stage 1 acceptance
- no commitment to any particular variant


## 13.v.d Operator Overloading for Stage 1

(Keith Cirkel)

- [slides](http://keithcirkel.co.uk/proposal-operator-overloading )

KCL: why have it at all? useful for new proposed datatypes: BigInt, Decimal. Provides semantics that methods don't, operators are a first-class language feature, so new types that use them look more like first-class features. It's in many languages already.

KCL: e.g. `const a = 2n; const b= 8n; a + b - c vs a.plus(b).minus(c)`

KCL: why give userland overloading? Allows community to define what's useful in the stdlib.

KCL: this is a dark path, antipattern. Complaints: slow in runtime (but we already have Proxy and Symbol.toPrimitive), could lead to operator overloading overload.

KCL: maybe: `Number.prototype['operator+'] = () .. throw`

KCL: we can already do some of that, defending .toString

KCL: good practices always prevail: never modify prototypes, aways use ===

KCL: need to support multiple types, handle operator ordering (and commutativity)

KCL: `new Celsius(60) > new Fahrenheit(60) === True`

KCL: ordering. In "c > f", is it c.greaterThan(f) or f.lessThan(c) ? Could use double-dispatch: call both and && them together. But not every operator is comparative. In "a + b", do we use a.plus(b) or b.plus(a), or how to somehow combine the two

KCL: samevalue: maybe do single dispatch, and pick an arbitrary side?

KCL: have to change libraries to handle types they can't access

KCL: could add types, but that's a huge change

KCL: could use: `get [Symbol.operator('+')]() { return addPointOrVector ..}` . All instances share the same operator. Use sameValue() on the overloading functions.

?: so two types must explicitly agree to be added together?

KCL: right, both opt-in to the operator overloading

KCL: Symbol.operator() is like Symbol.for(), throws for unknown operators, lets us start small, introduce more operators later

KCL: another sketch, with types. `class Vector() { ..., +Point(point) { return addPointOrVector(this, point) }, +Vector(point) ...` . This is a very rough sketch.

KCL: `[operator][constructor]()`

WH: I don't understand how this works. An example: two libraries, one defines complex numbers and wants to define multiplication of Complex*Number. Library B defines multiplication of Vector*Number. They both install their operators. Does one of them win? When you ask about Number's multiplication operator, what do you get?

BE: do they collide?

KCL: there would be no modification of Number.prototype with this

WH: In the sketch you had you looked up the operator on both operands and required the operator to have the same value. So how does this work without modifying Number's prototype?

(discussion)

BE: we went through a lot in the ES4 era, looking at something like "+Point(point)", but involved sets of function to avoid the pigeonhole problem. Don't want to recap it here, but there's a history around this. None of them got very far in committee

WH: yeah, I first proposed operator overloading circa 2000. The infrastructure hadn't been there at the time. It's a hard problem but I think worth solving.

BE: what's important here? modularity/composition (so two libraries don't need to coordinate)?

WH: yes, that's a requirement, those libraries must be able to coexist, at the very least in cases such as the Complex/Vector/Number example I gave where they don't directly interact. And if they want to interact, does one need to know about the other? I'm ok if the answer is yes, but it's a controversial question.

JHD: anything that's based on reference denies two things interacting without coordination, and also denies cross-realm usage.

TAB: web platform has a use case waiting for 3 years, CSS object model is all strings right now, new accessibility features have TypedOm mount (units of pixels/etc?), very awkward to use x.plus(). Small clusters of numeric types, they all know about each other already. https://drafts.css-houdini.org/css-typed-om/#numeric-objects

YK: I'm in favor of some kind of operator overloading. The slide implies that a.plus(b.minus(c)).equals(4n) is worse, but it does make the order of execution very clear. In cases where the order is not so important, ..? . Ruby has string*number which just replicates the string, doesn't seem very weird. One extra use for ">"/"<" that isn't math is to e.g. build SQL statements (some languages use this). Not necessarily good examples, but let's avoid overly focussing on the math examples, we should let them work for non-mathy cases.


JHD: enforcing relationships between operators. In the Proxy design, something that was overlooked: what if the proxy handler returns inconsistent results. Can we enforce consistency? Prohibit an operator from claiming greaterThan and lessThan at the same time.

WH: you can't do that, the built-in operators break the usual mathematical identities.

MM: I need to fix the historical record. We went through three generations of Proxy proposal. But at no time was there a Proxy proposal that broke the invariants, even before the invariants were written down.

BE: you could overload just certain operators but not all. Not overloading toBoolean (`!!`), destroys performance as JITs assume infallbile.

WH: the `|0` used by asm.js?

BE: Yes, that one also affects performance.

BE: fine to have spitball syntax and think about composability, but gathering the old requirements seems pretty important, to avoid going in a circle and not making progress

TAB: the number of algebraic guarantees that you *can* guarantee is limited. e.g. the natural definition of "a > b" for sets/subsets allows both a>b and b>a

JLZ: what about short-circuiting operators? in other languages there's confusion, does short-circuiting disappear? let's avoid that confusion

MF?: my work on PRotocol, DD on single-comparison(?) operators, ties in

TAB: if we find a nice cache-friendly resoltuion mechanism, that's be great. Python does both op and right-op, if you throw NotImplementedError in one it automatically tries the opposite one in the other type

BE: committee rejected that before

WH: consider what `+` might do with a Number operand. It knows how to add itself to anything by converting itself and the other operand to a string and concatenating, why would it throw?

BE: legacy exception

NSH: security concerns! greatly changes the rules, we need to be very cautious, there needs to be a way to turn this off entirely, if someone extends Array to modify +, it could break every internal function

DE: in designing bigint, it does overloading, designed to be compatible with future overloading proposals. Went single-dispatch, so you have to have the same type. Maybe allow overloading only for value types. If we go down any of these paths, I like that Natalie said, ..

YK: was your concern changing built-in behavior of existing objects?

NSH: there are lots of host functions where either argument must be a type of a subclass of a type, and .. . Array, Numbers, especially if a host function is expecting to accept a number and it adds a number to it, and then gets back an object instead of a number.

DE: .. ? use .valueOf() to coerce to a number ??

BE: was toPrimitive observable?

DE: now there's an extra hook you can write to. There's a Symbol.toPrimitive

YK: what about subclasses of Array.+

NSH: exactly, especially with browser internal code

BE: +∞ on Natalie's concern. Related to the JIT problem, every interception point hurts security+performance. One othe requirements we should gather is integrity ..

WH: we went through some of this with the BigInt proposal. We couldn't define some of the operators (unary plus is one example) on BigInts because implementations are assuming the results are Numbers for optimization purposes.

DE: unary plus was driven by asm.js

WH: Yes. Consider what happens with asm.js if you let folks override `|0`. Implementations currently assume that the result of `|0` is a Number containing a 32-bit integer.

DE: if we say numbers always have certain semantics, and you can't allow operators between numbers and .. . .maybe we can retire asm.js in the future..

JHD: lookup an operator for a pair of types, and cache that?

DE: advantage of using propery gets is that we aren't adding a whole new system for dispatch

NHD: is creation of new operators in scope? example of building an EBNF parser out of operators, would need new operators for that.

KM: that sounds really hard

MLS: we should know what is and is not in scope

KCL: not in scope, but doesn't close the door on it

MF: this proposal is very interesting to me, my main reason for introducing Protocols. I'd like to see it built on standard Protocols. Maybe don't limit this to operators, especially binary ops. Delegate things to protocols, we already do this for many pieces of syntax already: spread delegates to iterable protocol. Where is your interest in exploring how far we can go with ? syntax

KCL: sounds super interesting, would like to explore that

MF: as part of this proposal?

KCL: yes

BE: we avoid multiplying proposals's odds ratios where proposals can be independent (at least initially). also prefer a phased approach, as future-proof as possible, and not try to do everything all at once. Don't want a completely rebindable syntax, but we can get there by steps, starting with the popular operators. Not depending on protocols is better

MF: agreed, if we want to get to operator overloading any time soon. But I'd like to see it compatible with binding to a protocol later.

DD: let's introduce "<=>" (the "spaceship operator", returns -1/0/1), great for sort operations and you get all the other ops (>,<,>=,<=,!=) for free.

KM: how does that work for non-totally-ordered?

DD: I think you shouldn't overload those operators if you don't have a total order, but people disagree with me

?: in C++ this works on the return type

DD: I don't think we need to do everything the builtin Number type does, especially NaNs. Don't need all that power for user-defined types

WH: the folks who do IEEE Decimal might disagree

MM: we've been around this issue for a long time, I felt we had a good breakthrough with BigInt, it got many things right without being too general (but preparing for future). It avoids the cross-type issues by, basically, only doing self-recognition (with a few exceptions). Even more important, BigInt introduced the overloadable data type as a value type, not as an object type. Value types are immutable, identity free, and open (not hiding any state), so the === is defined as a deep value comparison. Bigint does that. There's a natural engineering coincidence, Point/Complex/etc (which we want to do overloading on) are also things we want to pass by value, rather than forcing them onto the heap. The big pitfall if you allow overloading on object type: there's existing behavior (especially + for string concatenation), which is used a lot. Trying to extend the behavior of things that already have a behavior is hazardous. Thus, operator overloading must be coupled with a large (and frequently postponed) issue: value types.

YK: I agree with especially the last part, starting or finishing with value types is a good idea. I'm worried, a lot of people are motivated by the mathy overloads, it's easy to act like the other cases don't matter. But in the other languages I've used with overloads, there are lots of non-sloppy semantically-meaningful cases of combining distinct types.

MM: The thing that surprised me in bigint was the self-recognizabllity, I never believed we could impose that constraint, other cases are painful if you impose only self-recog.

YK: I think BigInt turned out ot be ok with just self-recog because it's a mathy type

MM: I disagree, I think the opposite, it's surprising that's it's ok with just self-recog because it's painful to compare/interact with other number types

YK: let's just not back ourselves into a corner by preemptively rejecting/preventing mixed-type overloading

MM: ok. I don't curerntly know any proposal for mixed-type overloading

YK: for the use cases I'm thinking about, single-dispatch works fine. We might need a more complex system for mathy types, but a more canonical system for mixed types.

BE: combining both approaches is tough, have to explain why it behaves differently

MM: leftshift/rightshift is tough, you have to have the bigint on the left, but it is weird that we require a bigint on the right.

WH: I'll strongly disagree with Mark, history of BigInt is different, it does self-recog for binary plus not because heterogenous is difficult for the BigInt case but because there's no sensible result type. When adding a BigInt to a Number, you'll get problems regardless of whether you decide the result is BigInt or a Number. We chose not to do coercions because the result type doesn't make sense for any result type you might choose.

WH: There are a lot of mathy cases that don't use value types (array, matrix). I can't think of a compelling reason to require the operator overloading and value types proposals to be tied together. The hard part of operator overloading is the double dispatch, not whether the operand types are values or references.

BE: we should separate concerns enough so you can specify operators for mutable matricies. The dispatch mechanism is the real bone of contention

TAB: my CSS OM case is satisifed with numerics

M?: maybe write the use cases on post-it notes during the next break, maybe we can split the proposal

KCL: ok, thanks. I'm not going to try to advance this to a stage at this time.

MB: if we want to spend more time on this, we should advance it to stage 1

MM: let's advance to stage (1+1i) :)

MF: what's the scope

KCL: not sure if I can answer, it seems we dont have consensus for scope; maybe for just value types, maybe not

MM: we should confine it to value types. No reason that immutable vectors/arrays couldn't be value types and overload operators. But trying to do both overload operators and have mutable objects, I'd be happy to never see that.

BE: for stage 1, I'd like to see: gather requirements (use cases, algebraic identities), write down the list and argue about it, try for more strongly stated (not informal). What really helps is to clarify the priors.

KCL: should we avoid moving to stage 1 without that?

BE: I'd prefer to see the reqs stated first

KCL: yeah, I don't think we'll get answers to those questions today

#### Conclusion/Resolution

- not moving to stage 1, will collect requirements


## 15.iii.a TC39 should endorse use of a (one-of-several, not one specific recommended) parsing linter or actual compiler, not any particular semicolon style

(Brendan Eich)

BE: I wasn't here in November when we talked about semicolons.

- recommending a style over parsing linter (or better) substance seems like a disservice to the community
- what I'd rather see happen is: not recommend styles, let's recommend substantial tool adoption, not necessarily a single tool, but a set of tools which parses the grammar and makes judgements based on newlines that have as safe or safer semicolon style on outcomes
- we could recommend nothing, we could walk back the recommendation. I wasn't here, I don't know what the thinking is
- style is a "third-rail" topic,

BFS: PR is very specific about when a semicolon is recommended, doesn't make a blanket statement, are you assuming we're recommending always using semicolons?

BE: no, if we're only recommending a specific style, we're doing it wrong (relying on manual best effort when that breaks down at scale). The question is not how minimal of a style recommendation to make, but whether any style recommendation is useful.

YK: it literally says "semicolons are recommended", it's a style recommendation

BE: let's do the thing that would help programmers catch errors, which is based on something that actually parses a dialect of the language

MB: The consensus at the last meeting was that while we'll try to continue supporting ASI where feasible, we won't let it prevent us from extending the language in the future. The goal of this PR was to communicate that resolution.

?: e.g. make sure e.g. class syntax doesn't require or prevent ASI

JHD: there are a few pieces that came out of the discussion. not-controversial: document the current ASI hazards, list the places where a no-semicolon style would cause problems, the spec should document them so the tools can get them right. Second : there was a general sentiment, shared by both sides, that no guidance is still guidance, and some guidance is important. ..

BE: three concerns. I understand the class issue, we could go either way (november proposal, or carveout from ASI within class bodies), but there's no third way where our guidance will help us avoid ASI in the future. Guidance is relatively new, we don't have a lot of experience, we aren't dev-rels. If you're merely teaching people or nagging them, you can't rely on any definite outcome. So I'm skeptical of guidance, and reaction on twitter seems to support this. For class fields, I think that's it's own agenda item. eslint/tools are important

ZB: for me the storm on twitter/github doesn't prove that we shouldn't try to find guidance. do you feel hazard identification and style guidance are both not valuable?

BE: I think we should avoid style, we should provide guidance by identifying hazards (might just recaptiulate engineering that went into eslint, room for bugs on both spec and tool)

DE: there's confusion in the community about what exactly the ASI hazards are, and more hazards may be added in the future. We could put the clarification in the 2018 spec.

YK: on twitter, a persuasive point is that we defined ASI hazards as all places where adding a semicolon was the righ thting to do, but we didn't list the places where not adding one is the right thing to do (?)

WH: The latter are trivial to find. Just search for no-line-break productions in the grammar. Not sure it's worth listing them.

DE: I'm not sure we'll come to consensus now, at the last meeting I thought we had consensus on recommending semicolons, but now I think we don't. Maybe the reflector thread isn't sufficiently visible. Maybe develop the statement in the reflector, then work on it at the next meeting.

YK: I didn't think I could jump into the conversation. I agree we should come back to the next meeting with the

BE: should we do a fast PR to remove the recommendation

DE: we could include the list of hazards and a note that says we don't know what to recommend

BE: my main concern is to not recommend style, then not putting too much energy into pedagogy in the spec (there's plenty of room for books for that)

YK: we want people to know that there might be more ASI hazards in the future, don't just remember a small set of rules

BE: does the committee want to spend more time on this today?

(no)

JHD: Dan and my suggestion is to do a quick PR that omits the recommendation and includes the list, merge it, then rebase the open PR with all the comments on it, then add a statement to the effect of "tc39 is listening to community feedback and working on this PR", and then come back to it later.

MBS: maybe spin up an interest group to discuss this in a face-to-face forum rather than text-only on github (not so good for contentous issues)

BFS: minor objection to calling them hazards at all if we aren't going to make a recommendation

everybody: but it is a hazard

DE: we can iterate on the wording on github

#### Conclusion/Resolution

- don't yet land the "recommendation", start by landing the description of ASI hazards (possibly with a word less judgmental-sounding than "hazard") and NoLineTerminator here hazards
- continue to discuss the recommendation later


## 13.iii.j Decorators use cases

(Diego Ferreiro Val, Yehuda Katz and Carido Patino)

- [slides](https://docs.google.com/presentation/d/178WoBNhXBBB1M_LlSqnKEic4SD4CFYtO9Fkr9rvsHaA/view)

YK: purpose is to share use cases, not to propose anything for advancement

DFV: want to provide concrete examples of how people are using decorators today

DFV: salesforce is a platform, devlopers get components, range of developers (no code, lots of code), want to help experts be proficient, but beginners too.

YK: ember-decorators repo, had an ES5 object model for a long time, would like to migrate to ES classes, this repo allows devs to migrate their code to ES classes, decorators are necessary.

YK: Polymer also has a separate repo for decorators because they're in flux

DFV: patterns we've found useful: improve ergonomics, hook into internals

DFV: to build a web component with the same semantics as a DOM object, today must write a lot of boilerplate, to make e1.setAttribute work, as well as getters and .getAttribute("address"). Must define getters/setters and attributeChangedCallback(), and a getter for observedAttributes

DFV: with decorators, much simpler

(slides)

DFV: another use case: tracking mutations, rerender DOM after attirbutes are changed. Mark a field as when it changes, need to change the real DOM

DFV: Glimmer is like Ember.next (less stable, new development happens there). component decorator to mark a subfield for tracking

DFV: data wiring for static analysis, mark the object for connection to data providers, can be read by static tools. In ember, "@service clock" makes a property named clock which gets populated at runtime. Given a particular framework, you can do static analysis even without a sound language that supports it. Easy to scan for "@service clock", not so easy to scan for that it would expand to (especially with intermediate variables)

DFV: web components accessibility, hide in-development APIs from customer's code. Hide implementation details while retaining the ability to move forward whenthe APIs improve.

YK: not that different from using any form of abstraction, but in class bodies it's particulary hard to use the usual abstractions, decorators make it a lot easier

MM: "static analysis" data is not actually injected into the runtime for use from within the program, right?

YK: right, it's just used at "build" time to make decisions about the program (whether to reject, figure out what components are needed)

JFI: but remember that lots of other cases really do depend on runtime availability of decorator information

DE: can you explain the benefit to your customers of using the ES class syntax?

YK: for us, the dominant benefit is that a lot of people in the ecosystem want to use it. Easier to read and understand, syntax is clearer (esp pattern where you accidentally create a shared mutable objet on the prototype). Meta answer is "all the same reasons we created classes as a committee".

JFI: with class fields coming up, we can't actually use them without decorators.

YK: people complain that decorators make classes harder to statically analyze, but in fact they're mostly used in ways that can be, would be hard to do without decoratoes

SLN: how do you plan to leverage decorators for bundling.

YK: not sure if we'll do this, but there's no actual import of clock, but "@service clock" .. dependency injection, whole point is that you don't know what you're importing, someone else decides that for you,

DE: could you explain the cost of the current transpiler solution?

YK: you're basically forced to transpile way more of the class. Ideally you'd like to give the class directly to the browser, but with transpile you have to decompose it back into the ES5 pieces, losing information that engines could use to optimize. ...

KML: has anyone discussed the complexity of decorators to new programmers? it hides the details of the object model from the new programmer, which is kinda nice but if you don't understand what's going on, it migh tbe bad. It obscures the complexity, then people might wonder why their web page is super slow, can't see the complexity they've accidentally added

CP: we control most of the decorators, most customers don't create their own, those ones will need to learn how they work

YK: well-behaved decorators don't do things that customers would find confusing

Justin: decorator would help us avoid complexity, there's a locality-of-effect to the decorator

#### Conclusion/Resolution

- none


## 13.iv.a Discussion of cache timing attack (Meltdown and Spectre being just the latest examples) consequences

(Waldemar Horwat)

(notes suspended)


## Revisiting mixins-vs-protocols proposal

JFI: would the comittee be ok with two proposals, or one proposal with two links

YK: I want to have one place for the discussion

JFI: hopefully the situation won't last long

JFI: I propose two stage 1 proposals, with a cross link

(general agreement)

YK: within a few meetings, I'd like to see just one repo where people can discuss it

?: we have to keep reminding the committee that stage 1 is just an idea, we're not committing to a single implementation. we could create some clarification around stage 1. The community could use help understanding the distinction between stage 1 and stage 2, maybe point out that you can have competing proposals at stage 1 but not at stage 2.

MF: I think the process document already covers this clearly.. but ok maybe the room doesn't agree.

?: people don't read the process document, empirically they don't understand it

Michael: so changing the process document won't help

#### Conclusion/Resolution

- two separate proposals, both stage 1
