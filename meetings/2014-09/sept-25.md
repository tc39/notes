# September 25, 2014 Meeting Notes
-----

Brian Terlson (BT), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jeff Morrison (JM), Jonathan Turner (JT), Sebastian Markbåge (SM), Erik Arvidsson (EA), Brendan Eich (BE), Domenic Denicola (DD), Peter Jensen (PJ), Eric Toth (ET), Yehuda Katz (YK), Dave Herman (DH), Brendan Eich (BE), Simon Kaegi (SK), Boris Zbarsky (BZ), Andreas Rossberg (ARB), Caridy Patiño (CP), Niko Matsakis (NM), Mark S. Miller (MM), Matt Miller (MMR), Jaswanth Sreeram (JS)


Remote:
István Sebestyén (IS)

-----

## 5.8 Object Rest Destructuring and Spread Properties

(Sebastian Markbåge)

Spec https://github.com/sebmarkbage/ecmascript-rest-spread

Request Slides


SM: Update: own properties?
- Need to be own properties

```js
Object.prototype.hostile = 1;

let { ...o } = {};

let o = { ...{} };

o.hostile; // 1
o.hasOwnProperty("hostile"); // true
```


MM: clarifies hostile vs. accidental

MM: When does Object.assign do toMethod?

RW: Never. That was designed for Object.define/mixin

AWB: Confirm

SM: Mental model:

```js
...o

expands keys = Object.keys(o) to
o[keys[0]], o[keys[1]], o[keys[2]]
```


Security Consideration?

Syntax introduces a new way to determine "ownness" without going through (patchable) library functions:

- Object.prototype.hasOwnProperty
- Object.keys

MM: Explains that SES is capable of patching the above by replacing these APIs. Rewriting syntax is undesirable.

Discussion about ownness and enumerability

YK:

MM: If we proceed assuming weak maps are not slow, then they won't be (i.e., browsers will finally switch to the transposed representation)

YK: As a lib impl, weak maps are slow and I have no reason to believe they'll be fast in the near future, so I won't use them

AWB: Not our job to design lang around what things are slow today

ARB: concerned about proliferating the use of enumerability

AWB: Had this discussion many times. Enumerable is obselete reflection of semantics of for-in. Don't want people to use enumerable to start meaning new things.

YK: We agreed it's obselete function of for-in, but it is widely used. So can't change the way it's assumed to work

AWB: Today, in es5, enumerability used as a way to deal with copying

MM: WRT proposal on table, it is a copying API. So you're agreeing with the fact that the proposal on table is sensitive to enumerability

YK: Yes

ARB: This is only really useful for record copying

AWB: Let's talk about own again. This is an extension of obj destructuring -- which, as it exists today, does not restrict prop accesses to own properties.

AWB: However, it does restrict/ignores enumerability

AWB: Implication of this being own: You couldn't use a tree structure to represent a set of values:

```js
BaseOpts = {__proto__: null, o1: 1, o2: 2, o3: 3, ... oN: n};
ThisTime = {__proto__: BaseOpts, o7: 14};
foo(ThisTime);
```

AWB: Now, inside of Foo...

AWB: Since you're excluding non-enumerables, normally things in Object.prototype are excluded. So not worried about picking up those things

YK: You're worried about picking up someone's old prototype extensions. It's true people could do that, but in practice people don't

MM: We have several arguments that say own is what's expected

MM: In ES3, assumption is there's all sorts of gunk on Object.prototype because no way to get rid of it. Reason it was restricted to own-ness was because there was a desire to not iterate stuff on Object.prototype

YK: There's a notion of copying today that means "non-enum, own"

AWB: Notions in JS today are diff from notions 5 years ago and 5 years from now

MM: We can't accomodate legacy in this way forever. We're in a history dependent trap, we should make this (enumerable + own)?[verify]

AWB: How does this play with/needed in the context of other extensions? For example, record types vs property bags to represent options. If people use typed objects vs regular, would expectations change for this syntax?

SM: Brings up another proposal: Records (new proposal) in same realm as TypedObjects, but simpler syntactically

AWB: In the past, when focusing in on a microfeature, it makes sense. But when looking at features more broadly those proposals make sense differently. There are enough things that are coming soon that need to be considered here as well

MM: This feature is on the same "future table" as those other things, so they'll be considered together as we move forward.

SM: Record types don't have a concept of prototype chain, so not even a consideration; So this should operate consistently between those and regular objects

SM: (tries to move on to a new slide)

ARB: so ownness is clear, but are we settled on enumerability?

MM: yes

SM: I think it should be settled, and any argument against the enumerability policy here also appllies to Object.assign

YK: Object.assign is meant to be a widely-used mechanism for copying

ARB: I see your point, but am still concerned...

YK: I think the problem is that people don't like enumerability. I don't like enumerability. But enumerability is how you design copying behavior in this language.


AWB: Is this feature valuable enough to make this as syntax rather than something that lives in a library

MM: Need a functional mechanism for  updating records

AWB: This seems like a nice feature, but not sure why this should make it in over other features.

YK: Symmetrical with destructuring, so easy to understand.

MM: This seems like a smaller burden on programmer psychology

AWB: Well, it is a burden. Spread and rest used to be an enumerable list of things, and now we have ... mean something else.

MM: There is a cognitive cost, but because of the analogy it's much less than a new feature.

MM: When we previously produced large specifications (through ES6) we used to determine the complexity everything together. Possible that the yearly release will make it more difficult to budget for complexity.

DH: Also makes it harder to say no to a feature that makes sense locally and has gone through the process.

MM: We should allow for something to get rejected even after it has gotten through all the stages.

YK: It's an implicit requirement. Should make it an explicit requirement.

MM: Agree.

DH: Recognize that this feature is fitting in an existing syntactic space and is rounding out a syntax that already exists.

ARB: It's subtly different...

DH: You'll have to learn it

```
function ComponentChild({ isFoo, ...rest }) {
    var type = isFoo ? 'foo' : 'bar';
    return ComponentBase({ ... rest, type });
}
```

AWB: What happens if rest is an array?

MM/SM: It creates the enumerable array properties.

AWB: But we use iterators.

MM: It should be dependent on the syntactic thing containing the .... In an object literal, ... will enumerate properties.

SM: Stage 1?


#### Conclusion/Resolution

- Stage 1 acceptance


AWB: Be sure to mark agenda items that want to advance with some kind of notation, this will help to get pre-meeting attention.

(Confirmed by all)

RW: Use the rocketship icon

YK: I feel like the rocketship icon should be for proposals which are ready to launch

DD: If you bikeshed on the rocketship icon I will change it to a bikeshed icon.

RW: :D


## Loader pipeline

AWB: Working on module spec. Questions: Loader pipeline. Can we simplify modules for ES spec?

"A.js"
```js
export let g = 5;
import f from "B.js";
f(g);
```

"B.js"
```js
import g from "A.js";
export function f(z) {
    return z * g;
};
```

AWB: Essential in ES6 that the semantics of above example code is well defined.
 - None of it depends on how the loader is parameterized.
 - Strictly at the declarative level of the language

BE: So what goes on the ES side?

AWB: Syntax and semantics (static, linking, and runtime) of declarative modules. Linking does have to be there, but it's linking at the declarative level of the lang.

DH: So you have some small number of low-level integration hooks in ES that expose enough for browser implementors design and build loader pipeline themselves?

AWB: They're at the same level as the other host hooks that we have

AWB: The only host hook is the one that says "there's a request for a module name (from referrer), give me the source code"

DH: To clarify: I think what Allen means by "hook" is not user-visible, it's visible to an engine. It's a spec device used to factor out the pipeline. It's not available to user code, just to the internal semantics of the pipeline.

MM: And we can move the pipeline into a separate spec.

EF: "Authoring and runtime"
- Authoring: actual writing of modules
- Runtime: the loader

(Discussion about Loader polyfill)

(Discussion of how the loader spec would be a separate document)

YK: The loader pipeline will be done in a "living spec" (a la HTML5) so that Node and the browser can collaborate on shared needs.

#### Conclusion/Resolution

Loader pipeline goes into a separate spec: living document that deals with integration


AWB: Retitle? ECMAScript 2015 (6th edition), and so on



## Train Schedule

DH: Let's define the schedule

YK: ES2015 is the first train.

## Types
(Jonathan Turner)

[type_annotations.pdf](./type_annotations.pdf)

JT: Goals
- Short term
- Reserve syntax used by TypeScript, Flow, etc. for some form of annotation
- Venue for collaboration among interested committee members
- Long term
- Consensus on a shared syntax fr many varied type annotation implementations
- Consensus on

- Additionally, a shared syntax for interface definition for documening API boundaries (.d.ts files)


Examples & Demo

...


Rationale: Why Type Annotations?

- Toolability
- Closure
- TypeScript
- Flow
- JSDoc
- Performance
- Asm.js
- Hidden classes/runtime inferences
- API specification
- DefinitelyTyped/.d.ts
- WebIDL
- Runtime checks/Guarantees
- Guards
- Contracts



Rationale: Why Standardize?

copy from slides


JT: Looking for Stage 0 blessing to pursue type annotations a la TypeScript and .d.ts file definitions.

MM: You've presented annotation, what about checking?

JT: Type checking not defined
- mention of python type design

MM: I'm not familiar

JT: TS, Flow have different type checking rules that will hopefully emerge

DD: Draws comparison to divergent promise implementations that were successfully unified

ARB: the result is rather terrible

MM: The fact that `.then` came together was a miracle and shouldn't be a practice.

DH: If we want to agree on reserved syntax that currently has no legal JavaScript overlap, that is it fails, not ignored. If such a thing can be agreed on, then different groups can develop around the syntax divergently. Cannot expect to reserve _behavior_. The rationale slide is far too vague.
- Goal: TS and Flow are taking a risk where TC39 could easily standardize on a syntax that invalidates those project's uses

JM: no attempt to standardize the entire syntax
- Python: imagine similar approach
- annotations
- arbitrary expressions evaluated then attached to the function object
- language doesn't need to use them in runtime
- tooling may use them
- allows both static and runtime tooling

- (this point was about third party consumption of type information, needs to be filled in)
- no guarantee that TS or Flow won't continue extending the grammar


YK: If you give type checks anything but an error, you can't create different semantics later

DH/YK/DD: mixed discussion re: history of type design sets constraints

JM: We need to start making these things possible by putting the capability in the language

STH: underestimating the complexity (refers to DH work)
- Types seem to be doing well in their current form (compile to JS)
- what is the problem we're trying to solve here?
- RE: Python, the underspecification is already causing problems w/ competing groups

JM: to move forward we really need a space that's reserved

DD: Wouldn't have proposed this as types, it's closer to parameter types and returns

YK: decorators suffered the same syntactic space arguments.

MM: I'd propose that you enter Stage 0 with TypeScript.
- TS made a choice and proved that this choice has utility.

DH: Don't need TC39

JM: How do we know when it's time to come to TC39? We need TC39 to help with progress

JM: Various projects working toward similar goals: TypeScript, Safe TypeScript, Closure Compiler, IBM has a project, Flow. Ongoing research that should be collaborating and coordinating with TC39

BE: codify annotation grammar, build object that you can reflect on. Not ready to do that.
- Make reserved syntax, we can do that.

MM: It's just a 16.1 restriction on extensions.

BE: ECMAScript allows and always has allowed implementers to make syntax extensions.

YK: Nashorn adds "#" comment

DH: Difference between TS, Flow and Nashorn

RW: (couldn't say outloud) Nashorn changed JS syntax; TS, Flow compile to JS

JT: Just want to reserve/restrict certain basic block of syntax that projects can use

DH: Syntax reservation has value. Attempting to define some minimal semantics is a bad idea.

BE: (copy grammar from whiteboard)

JM: Would like to be able to point to document for this

AWB: Some kind of "statement of future direction" document

RW: Similar to Future Reserved Word, it's a "Future Reserved Grammar/Syntax"

(agreement)

AWB: (explanation of how this could work and documented)

SM: Concrete spec proposal and what goes into next release?

- Will need to converge eventually
- Can do it on our own
- Could do this as part of the TC39 process

RW: suggest proposal Future Reserved Grammar doc for next meeting to ask for Stage 0

(discussion about responsibility)

JM: Seems like "type systems of some kind" have interest. Start conservatively, Future Reserved Grammar/Syntax etc, and build from there.

JT: Stage -1: reserved grammar

DH: Stage 0 for this:

- Reserve syntax via Future Reserved Grammar/Syntax
- Does not compute
- Is an error
- cannot ever create an incompatible change


AWB: Make a motion that TC39 is creating an area of research in types and type annotations and all members are welcome to get involved?

DH: As long as we maintain balance and prioritize.

BE: Concern about opening the door too wide.

SK: What about work on extensions that _require_ semantics?

ARB: you can't know what type syntax you need without knowing the semantics. In particular, Python's type syntax as just expression syntax doesn't scale, you generally need different constructs on both levels

BE: for example generic brackets

DH: What is the grammar?

JM: (python expression example)

What's the conclusion?

ARB: make colon syntax reserved

RW: there's more to it!


#### Conclusion/Resolution

- Create Future Reserved Syntax (extension restrictions)
- Syntax error
- Define `a: T<U>`




## 5.10 global.asap for enqueuing a microtask

(Domenic Denicola and Brian Terlson)

DD: Want enqueue microtask, which is capable of starving the eventloop

AWB: As spec writer, I don't know what this is

YK: In JS there is a frame, it loops

MM: Is the queue, the same queue that promises queue into?

DD: Yes

YK: Want a way to queue a job that's guaranteed to run before all other tasks

AWB: There are spec mechanisms that define ways to create a job in the queue

DD: Don't care what it's called just want it to exprss the intent, which is faster than setImmediate

Discussion about the semantics and defining the order of execution. MM is objecting

YK: A non-normative note?

DD: No, if it's non-normative I don't care, I want it normative

Issues about host interference with expected run-to-completion model

AWB: present job and job queue mechanism intended to describe the two things we needed to describe and knew there would elaboration. Go ahead and develop a proposal.

YK: Concerned that explanation problems lie in using browser terminology
- Micro task is part of run to completion
- Task queue is not

AWB: jobs run to completion

MM: Job queues are always async by definition
- We have terminology, please use the correct terminology

YK: Ok, won't use "synchronous"

MM; multiple queues in a priorty mode
- You want the microtask queue to have a strictly higher priority
- We may even specify priority queues

DD: Want to specify `global.asap`
- Accepts a function
- Enqueues in a high priority queue

DH: Think this is awesome
- We need a generic model for job scheduling.

#### Conclusion/Resolution

- Stage 0 acceptance
  - Some way to publish into a queue
  - priority queueing
