# January 27, 2016 Meeting Notes
-----

Eric Ferraiuolo (EF), Caridy Patiño (CP), Michael Ficarra (MF), Peter Jensen (PJ), Domenic Denicola (DD), Jordan Harband (JHD), Chip Morningstar (CM), Brian Terlson (BT), John Neumann (JN), Dave Herman (DH), Yehuda Katz (YK), Jeff Morrison (JM), Lee Byron (LB), Daniel Ehrenberg (DE), Lars Hansen (LHN), Nagy Hostafa (NH), Michael Saboff (MLS), John Buchanan (JB), Stefan Penner (SP), Sebastian McKenzie (SMK), Waldemar Horwat (WH), Mark S. Miller (MM), Paul Leathers (PL), Sebastian Markbåge (SM), Zibi Braniecki (ZB), Andreas Rossberg (ARB), Ian Halliday (IH), Keith Miller (KM), Tim Disney (TD), Miško Hevery (MHY), Brad Green (BG), Kevin Smith (KS), Brad Nelson (BNN), JF Bastien (JFB), Shu-yu Guo (SYG), Rick Waldron (RW), Staś Małolepszy (STM), Dean Tribble (DT)

-----

## Agenda

https://github.com/tc39/agendas/blob/master/2016/01.md


## FastTrack

AWB: slide (Ecma to ISO)

AWB: ecma fast tracks it to become an ISO standard

AWB: slide (ECMAScript 2015 and beyond)

AWB: slide (the plan)

BT: Got a bunch of excellent editorial comments from JP22.

WH: The Japanese ISO delegation has been by far the most prolific in finding technical problems during our past ISO fast track reviews, but they were by no means the only ISO member to make productive comments.

BT: It's not clear if the other delegations are commenting or not. They feed comments via GitHub but we don't necessarily know if the GitHub input we're getting is coming from folks associated with ISO delegations. JP22 is conscientious in tagging their contributions, but I don't know if the other ones do.

BT: some of the issues have been editorial some are bugs or implementing concensus. Lots of pull requests for bug fixes.

WH: What are the natures of GitHub submissions from random entities to ES? For bug reports I'm not worried, but for more significant contributions there may be IPR issues.

BT: it is a heuristic, significant contributions is what matters. Some bug fixes could be considered contribution, if the contribution is
significant they have to be a registered contributor.

AWB: it mostly comes into play for pull requests, but it is up to the editor

BT: not in theory, this is in practice, Largely contributions come from people in this room, but some substantial outside contributions have occured.

AWB: that is the general plan, addressing the ISO issue. So one final update that merely points to our documents.

AWB: slide (but still need something to fast-track as update to ISO/IEC 16262:2011)

AWB: slide, describing the content of the ecmascript suite.

BT: a downside I see, right now the fast-track process allows ISO members to provide feedback. If they do not see a document, would they provide feedback? I suspect this will result in less feedback from ISO. I don't believe that is fatal, but..

AWB: i believe that is true, but what alternative ?

DH: could we submit less frequently?

SP: seems very strange to get feedback on old versions, and not on the latest or new version

YK: does everyone agree that the standard  is "official" is year old, would we want sony to feel required to implement an obsolete spec?

* general consensus *

AWB: slide (ECMA to ISO)

AWB: should we provide a technical report for JTC1, that describes our process

WH: whats going to be in this document

AWB: the current draft is on the tc39 member area of the ecma site. (displays content on screen)

WH: is their more to this

AWB: no this is it

AWB: ISO people sent an email, that suggested we require a clause for a normative reference.

AWB: it is just a set of pointers

WH: This is just a bibliography without any paragraph that defines conformance. Once this gets an ISO standard number XYZ, what does it mean to conform to ISO standard XYZ? One can point to anything in a bibliography.

BT: do you mean, it should say must implement the entire spec

WH: Yes, the ISO pointer standard should have a short paragraph stating that conforming to the ISO standard is defined as conforming to the current ECMA standard that's referenced.

BT: we should say: If you conform to ecma-262, then you conform to the ISO spec

YK: are they ok with this?

AWB: it is actually their idea

BT: likely concerns exist, but something we can work out

YK: presumably those are one-shot things.

SP: everyone seems "in spirit"  to be on-board, we just need to deal with some of the details.

BT: for this body we don't have to care, because we just do our thing. No more ISO fast tracking.

John: how does this impact 2016 release

AWB: it is entirely decoupled, normative rules dictate if no specific version is specified, it implies the current version

#### Conclusion/Resolution

- next meeting we will vote for this.
- if concerns exist, please let us know before the next meeting

## ECMA-262/402 2016 End-Game

AWB: slide (Key dates)

BT: the way I want to do this, at the march meeting I want us to approve what is in master, or a snapshot. I don't want to make minor tech or editorial changes. I will make fixes if major issues exist, but otherwise I wish we can leave it as is. Leaving it as a tag

WH: What changes are you planning on making to the spec document between now and the April 1 deadline?

BT: Just small editorial changes and bug fixes.

WH: Which, if any, of the stage 3 or 4 proposals are you planning on adding into the document between now and then?

BT: None. As far as proposal-level features are concerned, the 2016 standard candidate spec will be what's in it today. Enjoy Array.prototype.includes (and the exponentiation operator).

AWB: have you discussed what will be in?

BT: changelogs have all the normative changes, I can go over those

AWB: we don't need to know, we should likely record exactly what are the new features.

BT: (lists features)

AWB: everything that applies here, applies to ecma 402 also. ecma 402 has to go through the process on the same dates, hopefully those editors are on top of that.

AWB: slide (draft stability)

BT: istvan wants a PDF, but will accept an HTML. Some may want a PDF, but it is merely a ctrl-p of the HTML. Those that want to use it, should be aware editorial changes may be more or less useless.

BT: I will give ecma a zip of a snapshot of the github repo.

YK: the PDF seems fine

BT: how are links

YK: people should use HTML

BT: the original PDF had links

YK: people should use HTML

WH: HTML has formatting issues.

WH: PDF needs links. It's much less useful without links.

* general agreement *

AWB: some people may want to print this thing

BT: i believe those days are done

AWB: we should provide both

BT: companies could be hired to accomplish this

SP: is this a transition period, or will be do this forever

AWB: ecma would like to have the PDF

BT: ecma wants PDF, because of ISO requiring it, now that we no longer send the full spec to ISO, this may be fine.

AWB: ecma wants a zip file, that can run on a local machine and it has the full high fedility document.

BT: yup, they can host it.

AWB: they will want to insert some analytics

BT: I'll work with them to add that.

AWB: in the past, I have just copied their boiler plate

BT: do i take the snapshot on feb 26, lets pick a date.

AWB: Feb 29

BT: ok, thats a monday

BT: how about march 1

AWB: thats fine

BT: so if you have anything you want in the document, get it to me well before march 1

WH: How many files are in the HTML spec?

BT: 6. The HTML, CSS, diagrams, Javascript

WH: Why does the archival standard spec execute Javascript? Isn't that brittle?

BT: it isn't required, it merely improves the experience

#### Conclusion/Resolution

- 30 days before the next meeting, the final draft will be provided
- next meeting we will vote to make it ES2016
- start the out-patent review process, you may need to alert your organizations

##  Ecma archiving and web hosting issues: Github, wiki.ecmascript.org, etc.

(Allen Wirfs-Brock)

AWB: slide (Ecma Archival Issues)

AWB: slide (github)

SP: We can likely include a snapshot of issues/pull/comments requests as part of the release

YK: ecma position seems correct

SP: AWB are you going to do this

AWB: yes

AWB: slide (ES6 archives)

AWB: We need a strategy, small to medium (1 -> 2 weeks) could likely be covered by ecma.

AWB: tc39 reflector -> github private repo

#### Conclusion/resolution

- BT will set up reflector
- AWB will work on archival.
- AWB wil own the wiki archival process


## TC39 Invited Experts Fund - Proposal

AWB: István Sebestyén floated this, this is actually István's deck

AWB: root problem is as follows, how to pay for AWB to come to the meeting.... I am an instance of the problem. We have in the past invited experts, we cannot assume it is reasonable for them to cover this. Is their a way for a group like TC39, which is made up of orgs. Is there a means for it to provide some level of support to unaffiliated individuals who would be important contributors and such.

YK: how does one decide who is important and who is not

AWB: yes, lots of practical points to discuss

AWB: slide (ecma: type of participants in an Ecma TC)

*concern about hard limit on guests*

MM: is there a hard limit?

DT: a hard limit of 2 observers

YK: the found would require a group, I am concerned that this group would be peers on TC39. As a person who would benefit from this, I would be concerned that I would have to use scarce political resources.

DH: this could create uncomfortable situation.

YK: the flip side, such indivudals seeking funds on their own would not have this problem.

AR: TC39 or ecma may be the wrong organization, an org may exist an external group that should cover this. An example would be the jQuery foundation (or similar)

AWB: slide (Proposal)

YK: I find this unsettling

BT: MS GA rep didn't like this

WH: Google GA rep didn't like this

AWB: Adobe's GA rep did

BT: been speaking with more people at MS

AWB: other orgs are also speaking about this, such as the W3c.

AR: I am doubt it will happen in the w3c, but i feel the best solution is something similar to the jQuery foundation sponsoring this.

YK: this poltically frought process

MM: yes, we should be careful to not erode the healthy work environment

TD: A minor variant that may work, ECMA may administer the found but allow individuals to self-found.

AWB: this sounds like a legitimate expense

... tax talk ...

#### Conclusion / Resolution

----




### Decorators
presenter: Yehuda Katz
link to slides:

YK: the champion group has grown, in good ways.

YK: Still at stage 1, it will likely become more clear as i progress. I hope to progress it to stage 2 in munich.

YK: babel/ts want to explore some ideas before we move on.

YK: slide (quick recap)

YK: slide (on classes)

AWB: if decorators move forward, any future new class items would need to describe how to work with decorators.

YK: we should discuss, but yes we should consider this,

YK: slide (On Object literals)

YK: slide (originally out of scope)

YK: slide (prototyped in babel and TypeScript)

YK: slide (Users by angular 2 and Aurelia)

YK: class decorators are mandatory partof those frameworks

YK: slide (displays examples of angular 2 and aurelia)

YK: someone uses all the features in the proposal have some real usages, which help with features

YK: ember has also experiments, using decorators in concise object literals via an addon.

YK: react also uses this, aka @injectProps: (shows screenshot of an example) a large part of the react ecosystem seem to be excited about

YK: another example is core-decorators by jay phelps, an example of generic decorators everyone can use

MM: so what you are saying, is decorators are relieving pressure from the language to add more specific features, as they can be implemented nicely in user-land with decorators

YK: TL;DR decorators are popular

YK: slide (motivating use cases)

JM: can you state the difference of class vs constructor decorator

YK: the constructor is not a member, and my proposals do no cover it. As putting a decorator on the constructor is isomorphic to putting it on the class

YK: the main use-case for constructor replacement, is to deal with the fact that the spec says 3 sings exist. unfortunately specing this is complicated and will require additional machinery

YK: slide (changes going forward)

YK: given that there is usage now, let me describe what is important. I want to maintain rough syntactic compatibility. Angular for example, should be able to provide compatible decorators, without consumers having to change.

YK: we should decide on @ vs #, this would likely be the only user-facing change. As it would be a simple transform.

YK:  slide (maintain existing capabilities for library authors)

MM: should we say rough

YK: yes, i removed 1 capability, but it appeared to not be used.

YK: slide (continuing requirements)

*discussion about when decorator expressions are evaluated*

WH: I noticed when reading your proposal that you allow decorators on methods defined inside object literals but not on plain properties inside object literals. Is that intentional?

YK: Not intentional. The proposal on github is old.

WH: In that case you'll get a syntax clash when you try to extend the object literal grammar to allow decorators on plain properties in addition to methods, regardless of whether you use @ or # to introduce decorators. The conflict will be between the tail of the decorator LHS expression and the property syntax that follows it.

... some discussion about jits ...

AR: We should collect evidence

YK: Some confusion, the world static confused the situation, stable would have been more work.

AR: I'm ready to believe that, but their are other things that could detect statically, that decorators impose

DH: an exampe would be, replacin an IF with a decorator, would reduce the ability to quickly analyse

YK: i accept that

AWB: is it any different then a normal predicate

DH: Abstractions cost

YK: I agree, I should not speculate

SP: In Ruby, metaprogramming can happen anywhere, at any time, and decorators are more stable

YK: you can express most metaprogramming in a visible way.

YK: slide (Continuing Requirements)

YK: We want decorators to be able to decorate everything that exists within a class, including a decorator which is generic across multiple of them

.. YK talks about how symmetry is hard, generic decorators working well has been a hard problem ...

MM: provide the decorator enough information to make these choices

MM: I don't recall  the concrete API, is the decorator called with sufficient information to infer ??? ?

YK: This is the intent; we have to implement it

AWB: what is the hint then?

YK: it is a short-hand method, vs property contains a function. We have removed this from the current indication, but we have removed it.

YK: a short-hand method is the same as object literal version

AWB: super

YK: i did not realize

YK: slide (Most common reported issues)

YK: one could have a reflect.defineField that  doesn't work outside of class intanstiation time.

....lots of hard to track/write up conversation, we need a stenographer....

YK continues to present read slide (Most Common reported issues)

YK: extend and decorators need to collaborate, if you could know your superclass was being subclassed a collaborating decorator would not be required.

YK: slide (Changes Max-Min)

YK: havin to feature test the object to figure this out, is unfortunate.

YK: When adding an additional descriptor, you may need access to other properties. For example, _fullName may want fullName accessor. But with private this would not work, so I proposed an abstraction that allowed reflection of the private slot. Decorating a private slot, should give access to the private slot

MM: I don't know if I agree, but we have a session later this.

YK ...diagrams something..

AWB: wouldn't it be better to have a decorator, that decorates  this specifically installing the appropriate slots

MM: the exploration in private state that unified the weakMap view on how to name the private state and the slot view, was to avoid reifing the name of the private slot. To postpone the issue

YK: i dont' think that is realted

MM: the get/set functions that we are passing to the private slot..

Yk: they don't know the name

MM: the get/set functions are in a sense the reification of the name as a WeakMap

YK: ...


YK: it takes a ths

YK: that is a tracking feature of what we postponed

YK: maybe that was urgent, but I decided it is way to speculative, we can retrofit it later.

YK: i bought it up last meeting with more examples, I think it is unlikely we wont need, as it will cause grief. But we can postpone.

YK: private slots and fields will feel very similar, things that make them not compat will be a problem

MM: i understand

YK: thats all  stuff i removed, I worked with ron and angular folks on a mirror based API. Which is the result of last meetings discussion. As it turns out, it is a hard to design API. I would like to propose a seperate mirror proposal, maybe at the next meeting I attend. Rather then passing in a target/name you get a mirror, with APIs that allow your to perform the required operations. The idea is to encapsolate the whole problem in a specific API.

YK: I think their are many cases were the thunks are not require, some still do. Static fields do, property fields dont.

JM: that would be a change in properties, back to what they were before

YK: Static fields are more like fields then they are like properties. People really wanted to model them the same as properties.

E: Why doesn't it work

YK: Abunch of issues, TL;DR you want to be able to say, class C, saying static singleton is class C.

DE: is their any case other then the self reference case?

YK: classes have this problem

E: this is a TDZ

YK: people don't want it to be TDZ

JM: I think mkaing static fields fields instead of properties, feels ok. I haven't found any issues.

E: isnt it already a problem?

DE: which TDZ don't you want to add

E: no fields, but the self referential inner binding gets wierd up at the end, instead of the beginning.

YK: you are correct, in one interpretation their can be a TDZ, but I would like to avoid that

YK: the timing is complicated

AWB: this is a general problem with these initializers, i think the last time we talked about it we assumed their were issues.

YK: instance initializers don't have this exact problem

E: these things will be wired up before they run

YK: there may be issues, the TL;DR static fields are fields not property

AWB: all a static field is a definition of a property on a constructor

YK: the definitiation is an instruction to install but not right now

AWB: static field name may be a property name, we will need to define the order

JM: prior we were going to evaluate them as we install them

JM: now we treat them as a description for installation

AWB: i don't think thats right

YK: i feel we will want class decorators to modify the constructor, if we do that the static properties will have been installed on the original constructor. But the static fields will be install on the wrong constructor

AWB: We have to define the ordering

AWB: a field is something that is part of a class definition, but when the instance is created the field is installed.

JM: At class definition time we will need to define the ordering

YK: this is basically the discussion that caused me to think it is not important for use to.... The timing for initializers and instantiation is all very observable. We need to be careful, as to not tie our hands to much. At the point we discover a field that may not be time it is installed

YK: many different factors, suggest specifiying static field imparatively

AWB: i believe static fields, and object literals should share the same rule

YK: i believe

AWB: it would be disturbing, if I had an object literal with two decorated properties, and a class with two static properties, and observed a different initialization order.

DH: most class systems have several phases,  reality is subtle

YK: decorators interleaving with the initializer expressions.

YK: all decorators run before initializers

DH: instance initialzer expression happen at instantiation time, the whole idea of top to bottom left to right doesn't work

AWB: it doesn't work for instance stuff

DH: there is only one syntactic block

DH: there has ot be some amount of interleaving of stages

MM: something factually wrong about what you said, top -> bottom, left -> right, can be made without conflict if the instance fields and properties are set in the constructor

YK: one world view, static side is an instantion of a singleton side. You execute it as a single class, Another world view, is to embed the object literal. Both are valid and we need to decide which one

WH: the problem is, in C++ it is possible to have a static property whose initialized value is an instance of the same class. This is useful but has unexpected consequences in C++. Because they let you do that, now constexpr static value initializers cannot call static constexpr functions defined earlier in the class!

YK: What i said is true

AWB: if we don't the scoping rules get complicated

YK: it is orhogonal

YK: if it is a singleton class, that is instantiated immidately,  we would run the decorators top -> bottom, followed by the initializers. Because they are seperate.

AWB: umm

YK: this should be obvious, static fields either as something as embedding an object literal in a class, or an immediate invoked class

AWB: what does it mean to embed an object literal

YK: two semantics, object assign...

AWB: we know semantically, that static fields/properties become own properties of the constructor properties

YK: both world views are consistent here

AWB: we are defining properties, so the two questions are when is the own property created on the constructor object. And when is the value computed that is the value of the property.

YK: the way classes work, there is a seperation of declaration of the class and instances

MM: we aren't talking about the instances

YK: it is impossible to explain these seperately

MM: what happen at class eval time

YK: their is a, i think many people here assume that you should not run the decorators and then the expression that is wrong. It is not my sense, and I'm trying to describe why.

YK: the only way it is observable without  decorators is self reference.

AWB: this goes back to static fields

YK: I tried that, and WH said we should disallow self reference

WH: no i said, we need to clear up the ambiguity

JM provides some diagraming.

```js
class Foo {

      static someFieldA = A; <--- 1. record this; <-- 4. intiatiate

      bar() { <-- 2. assign this
      }
} <-- 3. end

Foo;
```

MM: when does Foo get bound

YK: at the end

AWB: i don't believe the spec..

MM: from within the class, if you execute a reading of the variable Foo before you get to the end of the }, you are in a TDZ

MM: the things that are creating observable side-affects are the execution of A, but the instalation of bar is not observable

YK: this is today, but decorators/blocks/computed property names etc, make this observable

AWB: computed properties are the way to bump into the TDZ today.

YK: the partially initialized class is not observed

MM: if you are executing the get of the name Foo, you get a TDZ violation

YK: i would like to avoid this

MM: im trying for a factual understanding

YK: you are correct

WH: what scope are the initializers run in

YK: current lexical

MM: they would refer to lexical names, names of properties are not lexical

AWB: elThis is really a discussion...

YK: I believe we will need to make static fields, which is why i was initially over thunking.

YK: with mirrors you don't get the actual objects

AWB: is there a concrete API

BT: there is a must discuss topic about walking down the prototype chain

YK: i have no more slides

YK: We want to avoid viewing partially iniitialized state

....

MM: we should revisit this.

YK: i just reasoned from the use-cases

YK: slide (Property decorator, v.last)

AWB: mirrors on objects, and mirrors on function definitions are quite different

MM: function definitions are not reified objects

YK: for v0 it hasn't come up

AWB: it may be relevant to constructors, you may want to see a method definition.

WH: I have the same point, if the mirror mirrors a function it can call rather than a function creation descriptor, what is the point of the mirror, why not just use the function?

YK: the open question, is a mirror the snapeshop, or a singleton object that mirrors the entity.

WH: even a snapshot is dangerous, as it could give access to mutable state.

YK: why?

WH: Shallow snapshot or deep? A shallow snapshot can point to newly created internal mutable state that the class wasn't expecting to have gotten loose yet.

SP: i believe a shallow snapshot is being described

MM: a deep snapshot is off the table

DE: *trying to interrupt to switch to a different agenda item* can we move this to a break out?

BT: this is relevant, but lets avoid rambling

YK: a snapshot may be wrong, if someone wants a stable reference. Which enables talking about that entity.

AWB: something is bothering me, in ECMAScript, other then modules. Have two sorts of constructs, which have complex evaluation semantics, that result in the creation of one or more objects.

1. object literals (sorta complex)
2. class definitions (very complex)

It seems like fundamentally as we talk about decorators, we want to formalize those.

MM: I feel like I have learned something

AWB: i the piece I am missing, although you may have it in your head, but I would really like to 1 and 2 formalized.

YK: everything you said rings true to me, my current.. To go through the runtime semantics, I should submit this. It is reasonably clear where things go.

WH: i dont think so

YK: im not saying anyone can do this, but AWB analysis is correct

AWB: one could imagine a hook point, a processing pipeline that every class definition goes though. This could enable the extends clause aswell. This elevates the control

MM: it is a new way to think about it for me, I really like it. I have always thought about decorators as merely desugaring. But really, it is hooking the complex initialization process.

YK: yes, the motivation is to enable flexibility in the current declarative blob. I agree with the analysis. I believe it is correct to address this. We should discuss the snapshotting in a breakout. I believe having one mirror that lives the entire life.

MM: decorators thought of as multi stage programming model

YK: i think my last topic was quite long

MM: it is possible that the presentation was only understandable with this new world view.

MM: the hooking of instantiation if very distinct from multi-stage programming.

YK: yes, we should talk about this in a break out.

YK: ok, my question. I don't know how people feel about non-snapshots.

MM: Deep snapshots won't work, shallow are making a promise they can't deliver.

MM:  the classic reflection APIs I am aware of are live.

MM: decorating reified things, vs multi-stage programming. Determining what the program is vs determining the value

YK: I agree, that seems fine. Im not sure what my next steps are

WH: it would be more productive if this was less vague, nothing we can carry on productively until that.

YK: that doesn't match what I need.

MM: as TC39 this isn't quite productive

WH: By more concrete, I mean a less vague proposal that we can discuss, not start implement something right away. We're not at the stage where we should be implementing yet.

DE: can you take an idea on those proposals and write it up

MM: any one of these perspectives needs to be fleshed out.

MM: fleshing out your persective is wonderful, fleshing out mutiple is also wonderful

YK: it was roughly fleshed out...

DE: I have not seen a sufficiently detailed proposal. Can you share a link

YK: i can send links, but their may be not something sufficiently speced out

MM: What is bothing me, is that as a designer you seem to be straddling multiple perspectives.

WH: the problem is, togglilng perspectives makes discussions compleciated

YK: tell me how

WH: For example, it all depends on the ordering of initialization — the different world views conflict on this.

E: isn't that the crux of the design of the whole thing the point of this

E: he is trying to figure out

YK: i am asking how to make this more conrete

MM: their are 3 distinct perspectives

1. classic OO Design Patterns book: decoration replaces value with similar value, typically wrapper of original
2. the hooking of the instantiation process
3. mutli-stage perspective

These are very distinct, I would prefer to see one perspective fleshed out, this will help provide a more coherent model.

YK: I believe I am in the second camp, what leads you to believe I am not.

### Conclusion/Resolution

AWB + MM + YK will break out.


### Object.Prototype Security issue with Proxy
presenters: Dan Ehrenberg / Jeff Walden

JW: slide (the attack: same-origin polciy workaround)

WH: we would have more of a problem if we expanded JS syntax?

JW/DE: slide (Why not, and not earlier?)

JW: getters are more constrained, but it is slightly harder.

YK: this seems also bad

YK: can you force SW to cache the opaque thing.

JW: the browser cache is sufficient, each new script element gets invoked.

YK: throttling that seems like one way to mitigate

... some discussion to clarify the attack vectors of CSRF ...

JW: slide (The attack: Some-origin policy workdaround)

JW: Object.prototype/ Window.prototype. EventTarget.prototype

WH: Could the system say, this is not a a script?

MM: there is a header that can be used

DE: sights should use that, but that isn't sufficient.

JW: the browsers must support the flexilibty, due to far too much content depending on this.

JW: slide (...)

JHD: would [] cause the same issue wrt Array.prototype?

JW: no, not observable

JW: slide (Why not, and not earlier)

DE: i added some counters to chrome, and discovered far to many such occurances. Forcing mime-type/no-snift would break the web.

JW: slide (one solution: lock down `__proto__`)

AWB: ECMAScript requires that the global object had object.prototype in the chain.

JW: as of yesterday release FF ships with an immutable global object proto chain, with no compat issues so far.

JW: alpha 12 weeks, beta for 6 weeks. still no issues. (October)

YK: if you want to do this, we may explore the realm API.

JW: why?

DE: BT said they have an embedding object that uses this.

YK: you can imagine a realm API, that would allow a proxy wrapped global.

MM: wouldn't that cause the issue.

SP: no, the custom realm would not get script tags invoked with it in

YK: We should make sure that we also prevent the attacker from using realms for this, so being sure we can't get the script tag behavior in it.

JW: slide (but how?)

A. make object.prototype exotic
B. add a MOP operation

MM: i've wanted option B

BT: are you ok with A. now?

MM: yes, we should explore B later.

YK: is it possible to say, it can't be a proxy?

DE: The V8 team had an idea, to prevent the global trap to be a proxy

MM: it would allow the ability to discover whether an object is a proxy or not.

... discussions. some rabbit whole ...

MM: this is fairly strong, re: web compat

YK: it is not obvious to me, as we have seen IE ship for years, and only when chrome ships do we notice the web compat issue.

DE: we will have moderate evidence by march when this freezes

DE: IE has some anti phishing technique that no one is quite sure how it works.

MM: i am in-favour of accepted ??? now

DD: I second

MM: thank you Mozilla for doing this experiment.

### Conclusion/Resolution
- lets do A (merge the PR now)
- TC expresses interest in B, it requires a proposal (will be stage 0 once written)

## quick interjection: method param decorators, function expression decorators (YK, MH)

YK: stage 0 for function decorators?

AWB/MM: stage 0 is exploratory, make it part of the same proposal?

... discussion about splitting/decoupling proposals ...

... MH putting up slides ...

MH: first slide, method param decorators example: `refresh(@lastRefreshTime timeStamp) { ... }` as example

YK: additional metadata about the param they're attached to

MM: can not change meaning?

YK/MH: can change meaning. decorator gets extra info to identify that it is a function param.

MM: happy with stage 0.

MH: function param decorators: `schedule(@memoize (value) => ...)`

WH: Syntax conflict with the method param decorator example `@leg('right') rightLeg`. When used with arrow functions above, the `@memoize` decorator would swallow the arrow parameter list `(value)`, just like the `@leg` decorator swallows `('right')`.

MH: corrected function param decorators example: `schedule(@memoize function (value) { ... })`

... discussion that clarifies that they could replace the value, like all decorators ...

MM: keep as separate stage 0 proposals

MF: tl;dr about problem trying to be solved?

MH: 1) dependency injection, example shows on constructor parameters

MH: motivation: testing (@timeout), @flaky, @disabled, @slow/@expensive, @description, @async, etc

#### Conclusion/Resolution

 - Method param decorators at stage 0
  - Function expression decorators at stage 0

## Function#toString && Function#isPortable (MF)

Slides: https://docs.google.com/presentation/d/1o8jVhyVHljCFyXdxe-V4X1pUmCgx0FuFvEO0fFP4LJU/edit

MF: slides: current stage 1

MF: original goals:
   - remove forward-incompatible requirement
   - clarify "functionally equivalent"
   - standardize string representation
   - clarify "actual characteristics"

MF: revised goals:
    - define "portability" with `Function#isPortable`
    - make a guarantee about the behavior of portable functions after deserialization in an equivalent lexical context

MF: what does "portable" mean slide:
     - a function F defined in a lexical context L is portable is any function generated from the eval of Function#toString in L has a [[Call]] that's indistinguishable from F.[[Call]]

MM: closest to "no free variables" that you want is "no free vars besides standard globals". this might allow failing on the sending side instead of the receiving side.

JHD: use case of "list the free vars" might be, user deciding if they can send a function to a webworker for example and reconstitute it safely

MM: allows description of behavior to be moved

DH: perhaps isPortable shouldn't be something we encourage people to use and we should put it not on Function.prototype

WH: Why did you define the concept of portability?

AWB: when reading the agenda, i didn't know what "isPortable" meant, nor an intuitive sense

MF: that's why i've defined it on this slide

WH: *commenting on slide with definition of portability in terms of function observational indistinguishability*: What does it mean to be indistinguishable? If functions A and A' both return the current time, are they indistinguishable? If A returns 5 on big-endian machines and 7 on little-endian machines and its clone A' happens to run on a different endianness from A, are they indistinguishable?

MF: ?

MF: slide (goals);

YK: some function exist, which when calling toString may not produce an evalable function.

MM: MF is addressing that, but it doesn't answer, among functions that give you an evaluable string

MF: slide (what is the lexical context?)

MF: slide (what isn't portable)

YK: does the proposal introduce isPortable false, that is evalable?

YK: isPortable means, is evaluable then.

MF: slide (what isn't portable)

MM: isPortable is things that will evaluated without a syntax error.

MF shares spec text

ARB: indistinguishablity criterion is trying to use obsrvational equivalence, which is superhard even for much simpler languages. Moreover, this requirement is impossible.

WH: Any kind of definition of isPortable like this is not sufficient to meet the indistinguishability criterion. There are plenty of places where ECMAScript gives implementations latitude in how they implement features (sort, Unicode version, and floating point library accuracy are some examples; there are many others). A deserialized copy of a function serialized on a different engine will observationally differ from its original. Given this, I still question the use for defining the concept of a portable function or isPortable.

ARB: Much simpler counterexample to indistinguishability criterion:
```
let g = function f() { return f === g }
```
Eval'ing g.toString() cannot create an indistinguishable function.

MF: already in existing spec

ARB: then it's a bug

*parse tree discussion exploring the idea of replacing function equivalence with parse tree equivalence*

WH: What exactly is a parse tree? What about whitespace?

DH: White space and comments should be preserved.

YK: No, they shouldn't.


... discussion about parseability, errors, `new Function` to detect, toSource, etc ...

MF: "possible solutions" slide

#### Conclusion/Resolution

 - none yet, will continue tomorrow morning, first thing
