# May 23, 2018 Meeting Notes
-----
Waldemar Horwat (WH), Mark Miller (MM), Till Schneidereit (TST), Michael Ficarra (MF), Michael Saboff (MLS), Mattijs Hoitink (MHK), Kyle Verrier (KVR),  Brian Terlson (BT), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Chip Morningstar (CM), Kevin Gibbons (KG), Mariko Kosaka (MKA), Myles Borins (MBS), Jordan Harband (JHD), Daniel Ehrenberg (DE), Keith Cirkel (KCL), Justin Ridgewell (JRL), Patrick Soquet (PST), Sathya Gunasekaran (SGN), Sam Goto (SGO), Gabriel Isenberg (GI), Dave Herman (DH), Brendan Eich (BE), Rob Palmer (RPR), Mathias Bynens (MB), Pieter Ouwerkerk (POK), Kat Z. Marchán (KZM), Yulia Startsev (YSV), Leo Balter (LEO), Caridy Patiño (CP), Jory Burson (JBN), Limin Zhu (LZU), Aki Rose (AKI), Valerie Young (VYG), Henry Zhu (HZU), Ross Kirsling (RKG), Shane Carr (SFC), Mike Samuel (MSL), Tab Atkins-Bittner (TAB), Kevin Smith (KS), Ron Buckton (RBN), Eric Faust (EFT), Jean-Francois Paradis (JFP), Peter Hoddie (PHE), Patrick Soquet (PST), Till Schneidereit (TST), Diego Ferreiro Val (DFV), Godfrey Chan (GCN), Domenic Denicola (DD), Rick Waldron (RW), Tom Dale (TDE), István Sebestyén (IS), Lin Clark (LCK)

Remote:
Valerie Young (VYG), Maggie Pint (MPT), Ben Newman (BN), Brendan Eich (BE), Dean Tribble (DT), Robert Pamely (RPY), David Turissini (DTI), Felipe Balbontín (FBN), Pedram Emrouznejad (PED), Tim McClure (TME), Bradley Farias (BFS), Jason Williams (JWS), Trevor Bliss (TBS), Robin Ricard (RRD)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/05.md)


## Stopping exfiltration: Massive privacy violations vs boundaries

(Mark Miller)

- [Massive privacy violations](https://freedom-to-tinker.com/2018/01/12/website-operators-are-in-the-dark-about-privacy-violations-by-third-party-scripts/)
- [boundaries](https://freedom-to-tinker.com/2018/01/12/website-operators-are-in-the-dark-about-privacy-violations-by-third-party-scripts/)
- [slides](https://github.com/tc39/agendas/raw/master/2018/stopping-exfiltration.pdf)



MM: There's been recent attacks taking advantage of Exfiltration that remind us of this threat. Exfiltration is when Information that should have been private gets leaked to an adversary. Two channels 1) Covert and side channels (normal cache timing attacks, covert and side channels) and 2) over theft (Electron shock, "vetted" libraries are included on websites like Walgreens without understanding the dangers of these libraries). Researchers have found important information leaking out of these libraries, for example.

MM: The advice of only "origin boundaries are security boundaries" is unworkable. Use only 3rd party libraries you've fully vetted—this is impractical advice.

MM: Drive-by key extraction code attacks—previously thought to be constant time algorithms are vulnerable in side-channel attacks. In 2017, the idea was presented that if you cannot sense the duration of time, even though information may be leaking over covert/side channels, computation restricted from measuring time cannot leak. In light of Meltdown/Spectre this 2017 observation surprisingly remains true.

MM: Electron shock—vulnerabilities in Electron are impacting Skype, and Slack, among others, including a critical remote code execution vulnerability.

MM: It's even possible to pwn using Function.prototype.apply overrides. Without principle of least authority (POLA) and sandboxing, this is very hard to fix, and the Win10 app store has even threatened to remove Electron apps from their store (which would be catastrophic to the Electron framework).

MM: In the Princeton "No Boundary" series, research has indicated that website operators are in the dark about privacy violations in 3rd party scripts. Their canonical advice is impractical because web maintainers cannot possible read all the 3rd party libraries they use. They found 8,000 prominent websites vulnerable via session-replay scripts recording user data, including Walgreens effectively violating HIPAA by leaking customer medical information via one of these scripts. In violation of FERPA, student data was leaked via a library from FullStory. (Ironically even the researchers' Princeton itself was subject to this exfiltrating). TC39 should stand up to solve the attack vectors exfiltration uses.

MM: Anatomy: leaky secrets plus an internal channel and a spy in the machine that reads the internal channel, typically by sensing durations of time. Any time you make available nondeterminism you potentially enable a side channel. (??). Specific forms in coarse boundaries: leaky secrets (variable timing, cache effects, speculative execution), internal channel (sid/covert channels), spy in the machine (bad page, origin), timers (essential for this form) external channels, lair (origin, elsewhere).

MM: Coarse Mitigations: the obvious leaky secrets mitigation is to review libraries you use, but this is impractical—instead use constant time algorithms (but these don't work). Internal channels can be mitigated via anti-speculation techniques (but has high cost vs relatively low benefit). For spy in the machine: site isolation (but we'll see if this reliably works). For timers: after Meltdown/Spectre we withdrew our timing buffers (No SABs, JS Zero) but this is a temporary/ineffective solution. For external channels: always provided (but only limited response) and Lair can sometimes be foiled (but we can't reliably know when the attacker was foiled)—We can make things safer but we're never really sure _when_ we're safe.

MM: Fine Mitigations: Leaky secrets can be mitigated using realms/compartment scope. For internal channels: we can mitigate attacks using frozen realms and protecting primordials like replacing Function.prototype.find and proving restrictions on what modules can import (limiting dangerous access). For mitigating spies in the machine: we can use module keys and POLA linkage. For timers, external channels and lair we can deny, but once again, we don't know for sure that we're safe.

MM: POLA would deny transformational libraries things like XHR, DOM access, Sockets, Math.random(), new WeakRef() etc. Let's clean up our mess! Our civilization rests on this infrastructure, so we need to minimize this risk. We even know how to do it, we just need to know how to proceed.

DH: While I've never felt qualified to weigh in on security aspects of this conversation, when we talk about this model for JS security for the web, it's a difficult question... It's important we don't lose sight of the fact that when we talk about Realms we're not just talking about a security model, it has other purposes. So we need to not miss other reasons on this committee why it makes sense to use Realms. There's a lot of use cases not about malice, (like IDEs, for example) where it may be useful to have the isolation about Realms.

MM: I agree for almost everything. There's a danger of the audience confusing "or"s and "and"s, that an additional case can't make the argument any weaker. ... What we should care about is building frameworks for that maximize the benefits of composition when things go right, while minimizing the hazards of destructive interference. When the interference is accidental, we label them "bugs" and turn to "software engineering". When intentional, we label them "attacks" and turn to computer security. But this is largely a false dichotomy; why should we care whether the interference is accidental or intentional? Techniques effective against intentional interference should also be effective against accidental interference. Adding purposes that they [Realms] also serve should just add to the use case.

MSL: There are many non-security reasons for Realms. +1 to DH.

YK: I want to agree and provide an anecdote: Ember uses this API in FastBoot library, not for security (imperfect isolation/sandboxing) but for encapsulation in the browser, it prevents access to Node apis.

DD: If you have one reason, and another reason for Realms, they're not necessarily additive. It would be a case for the Realm API as having these different contexts. We would need entirely different solutions to protect against different threat models (example of private state vs process isolation)

MM: I disagree completely. Lots of work disagrees.

DD: I am representing decades of work (within a popular browser), so we should respect that in this committee.

MM: I'm not sure how productive it would be to have this argument right now. Work on language based security, though, goes back decades. For private state, we all came down on hard private.

DD: It's not hard—I can get all your private state with Spectre.

MM: You can get information with spectre if and only if you can sense the duration of time.

DD: We're getting into [Google] NDA territory, but I would not claim that that is impossible.

MM: I'm not within Google's NDA information anymore. But I was until recently and there was no such contrary information then. It's impossible to argue about things that we cannot talk about. It's like the national security stance of "If you knew what I know, then you'd agree with me."

WH: How important is security to us? Looking around the room, most people here tuned out during the presentation. I find that disappointing. Separately, what is the takeaway from this? Are you proposing something concrete?

MM: The concrete thing is that we create a system where we can link in transformational libraries, where the libraries can be restricted from I/O, corrupting builtins, etc. We've known how to mitigate these for a long time, and one of the benefits of the proposals we'll examine later.

MSL: Spectre is a major concern for confidentiality. Programming languages that attempt to improve integrity or ?? but we shouldn't try to ... For mechanisms whose goal is to improve confidentiality, I don't think you can make that argument.

DD: The history of sandboxing, the things that sandboxing prevents.

MSL: Can you give an example where a process boundary intends to solve?

DD: There are plenty of write vulnerabilities that are mitigated by sandboxing.

MSL: For the Node security model, (for the client, we say if you throw data on the client, you can assume that data will go out there) that client model is not acceptable. Most Node executions are not siloed—you don't have separate instances or user spaces for each Node execution, generally.

DD: Distinguishing between different types of attacks is obvious security here.

BE: We should be able to distinguish threats. (The remote connection sucks)

#### Conclusion/Resolution

- We'll revisit this later


## Module Keys Strawman for Stage 1

(Mike Samuel)

- [proposal](https://github.com/mikesamuel/tc39-module-keys)

MSL: Users have a lot of modules, from many sources, we suspect that they're written in good faith, but there's dissymmetry of information between module authors and module users (in terms of the security context). Modules written in good faith should be able to communicate. We want to be able to make global statements about the security of our systems based on the tools we use and global properties like inputs/outputs. No security team can do a line-by-line security review of even a relatively small project (Guy Fieri joke).

MSL: Google has put in a lot of work into static languages on top of JS, but that doesn't help JS at large. We cannot rely on unsound linters to check code that was written without static analyzability in mind.

MSL: (showing frenemies example): this evaluates in such a context that it will only be called on a private key, and allows that a public key can attest to the fact that the module is from who it says its from. Effectively, this works by putting a value into a box, specifying who may open it, and then allowing one to retrieve a value from this box if the retriever's public key passes this predicate. Public/Private keys give you better identification. If you wanted to create a value to prevent accidental leakage. For example you don't want to log a new user's password or a user's Geolocation. You could create a box and say only a specific module can unbox it. This is confidentiality within bounds. On the flip side, you can also write code that says I only want a value if it comes from a trusted box.



YK: Is this proposing the sealer/unsealer mechanism?

MSL: This is proposing the frenemies mechanism enabling access control.

YK: Why are not WeakMaps and private state sufficient for implementing this? It seems this isn't necessarily offering something new.

MSL: Boxes are implemented using WeakMaps, but I don't think that answers your question.

YK: How big is this library on top of the existing implementation?

DD: I have questions in the Stage 1 timeframe. Why was this tied to modules? Can this be a library (rather than put it in the language)?

MSL: (Shows the code for the polyfill): Why not do this as a library? In ISE we often have to migrate from a project where it has no privileged state mechanisms to an environment where it does.

DD: This adds a public key to _every_ module?

MSL: Yes.

DD: If it's a public key, why can't you just use the URL?

MSL: The keypair prevents masquerading.

#### Conclusion/Resolution

- Stage 1, but there's a lot of work to reach 2




## Realms

(Caridy Patiño)

- [proposal](https://github.com/tc39/proposal-realms)
- [slides](https://docs.google.com/presentation/d/1blHLQuB3B2eBpt_FbtLgqhT6Zdwi8YAv6xhxPNA_j0A/)

DH: The Realms spec has been long in the making, it's a reflection API for letting you parameterize over the evaluation. This allows you to create an isolation boundary, like in Node's VM module. You can think of it as a DOM-free or a pure JS IFrame.


CP: Today we're asking for Stage 2. We've simplified since Stage 1 was presented. There are 3 foundational parts: 1) the Realm Object, 2) Parametrized Evaluator, 3) Module Reflection API. The parametrized evaluator allows us to control all the evaluation within the Realm. The Realm object hasn't really changed since Stage 1 proposal (except the name eval => evaluate). This is, at the moment, equivalent to an HTML Script tag. Builtins are defined just like the spec inside the Realm, the VM has everything you need to execute code. When you create a new Realm object, you get access to the standard lib. Subclassing the Realm allows you to define what builtins the evaluation gets access to on the global object. The biggest simplification we've made since Stage 1 was in the Global object. Every time you create a new Realm, you create a new Global object. `this` value by default is the global object, but you can pass the `this` when creating the realm. Globally written variables (ie, var variables) can be read from the outside the Realm through the Contour.

WH: You showed simple access to globals defined by `var`, but how do you get access to globals defined by `let`, `const`, or `class`?

CP: You do not get access to them. We do not provide reflection ?? at the moment.

DH: We can add it later, there's nothing preventing us.

CP: Intrinsics are also available from the outside of the realm.

WH: I don't understand—are compartments the same as Realms in regards to identities?

CP: I'm explaining terminology and what people are using today in the absence of Realms. If you try to check the identity using `instanceof` you have identity issues, which we aim to solve via this concept of Components. We can inherit intrinsics between Realms. This is new in this version of the Spec, but it's OK because we believe it's safe to do. We provide 4 hooks (like Proxies) that allow controlling of execution of eval, dynamic import, etc.

CP: Direct Eval vs. Indirect Eval: when you define a new Realm, you will get a new global state (or inherit one), as you know. [?? hard to follow.] Ultimately, you can control indirect eval, but not direct eval.

CP: We settled on the idea that we only care about the top-level dependency graph. You are responsible for resolving the dependency graph, and therefore the evaluator does not trap import statements.

CP: We don't force strict mode. You can do a transform to add a strict mode to any code you want to use in strict mode, however.

DD: This is great, but I am not OK with changing module like import.meta and dynamic import semantics, without further discussion.

DH: I think it's critical that we have something there. When you write code in a dynamic context, you need to make sure that it satisfies all the constraints of the module system design.

DD: There's a default behavior defined by the user agent.

DH: The goal here is to have something isolated by default. Inheriting the outer context behaviour just runs counter to the goal of the feature.

DD: I can understand wanting to create an iframe. And forcing authors to learn the APIs of both of these specs. Turning off user agent features, that's uncomfortable.

CP: Today, by default, if you don't provide the trap it throws. It's an opt-in option to let the host do it's work.

DH: I want to run this code that thinks of itself as running in the browser, but it emulates the behavior of being in Node.

DD: You'd also need to change static imports in this case.

DH: Static imports are handled by the transform. We may be able to cut that piece of it out and move forward.

DH: There are some issues to work out before going to stage 2.

DE: We could discuss this for another hour, but we don't really have time. Let's continue to discuss this over lunch.

DH: Can we snapshot the data in the queue?

Queue:
1. New Topic: Lack of control over global proxy / global makes this unsuitable for jsdom compared to vm - Domenic Denicola (Google)
2. New Topic: Controlling the global object, allows sharing object instances across realm? - Justin Ridgewell (Google)
3. New Topic: Is the intention to keep the Realm contour 1-1 semantically with the global lexical scope - Shu-yu Guo (Bloomberg LP)
4. New Topic: Could this be extended now, or latest, to support execution limits/control? - Kat Marchán (@npm)
5. New Topic: Can we extend the Realm api to `r.completion` to capture a completion record model? Aka not throw on abrupt completions. Maybe in a follow up proposal. - Leo Balter (Bocoup)
6. New Topic: Not comfortable with stage 2 including modifications to import behavior without further discussion with stakeholders - Domenic Denicola (Google)
7. New Topic: String evaluation is the only way of running code in a realm? - Waldemar Horwat
8. New Topic: How do realms interact with turns? - Waldemar Horwat

CP: We're retracting the import trap, so dynamic imports will throw.

DH: Contour means the thing that's one step down from the global object.

WH: Is there some way of running code in the Realm other than parsing and evalating strings?

CP: Just `evaluate`

WH: How do Realms relate to WebWorkers, events, turns, etc?

DH: They're very similar.

DE: They're orthogonal. They share the same event loop.

MM: The precedent is same-origin iframes and vms in node.

#### Conclusion/Resolution

- Stage 2 acceptance


## ECMA Secretariat Update

(István Sebestyén)

IS: TC39 dominates downloads of ECMA standards. Even for PDF downloads. We need a solution for converting the HTML to proper PDF. Need solution to archive Github data into TC39 depository. We're working to improve the TC39 webpages. ISO has been fast-tracked. We would like more TC39 delegates to be part of the ECMA GA and ExeCom bodies. We're standardizing "ECMA Fellows" recognition awards for a select few, pending approval by the GA.

TST: Do we know the referrers for these old version downloads? So we can update them?

IS: We use Google Analytics, so we've tracked a few back to China, US.

#### Conclusion/Resolution

- Updated


## Expanding Group of Editors

(Brian Terlson)

BT: Expanding editors group to include Brandan and Bradley. Internal process for proposals is simply consensus among the editors: but that means you need all three editors to sign off on a review, (one is not sufficient).

MB: How often are the stand up meetings?

BT: Weekly. People could attend if interested, but they're very tactical. Message me if you'd like to attend the Editor Standup.

DE: This Editor Group will continue meeting through 2019? (Yes). Should we get a vote on this? (Yes)

#### Conclusion/Resolution

- New editor organization (as of 2 months ago) is confirmed


## Supporting other languages in ES module graphs updates

(Lin Clark)

- [proposal](https://github.com/tc39/ecma262/pull/1199)
- [slides](https://linclark.github.io/wasm-es-modules/slides/2018-05-23/#/0)


LCK: This is a followup to the presentation at the last meeting. The ESM system was meant to allow modules from other languages. The graph is as follows: the abstract module record and the subclass, the source text module record.

LCK: Let's walk through the things we've encountered in implementing ESM:

LCK: The spec has the abstract module record, which encompases the concrete class for a language. The limitation in the spec is that other languages cannot participate in the ESM graph, making non-JS modules second class citizens. For other languages, there is no direct cyclic dependency like you have in JS modules. Why?  Because of the algorithm that's needed to support cycles, we added this limitation. (this is called [Tarjan's Algorithm](https://www.youtube.com/watch?v=TyWtx7q2D7Y))
This algorithm lives in the Source Text Module Record class. Without another subclass to motivate the work, there was no need to extract that into a spec. By introducing the cyclic module record class, we can subclass it to provide a Source Text module and a Lang X module record. The cyclic module record will contain the fields associated with that module. The algorithm for cycle handling are in module instantiation (which means they'll have to be moved up to the parent). That's the spec modification that we knew we would have to make. But there's another that we didn't expect.
Live bindings are great for JS (most of the time) but not for all languages. In JS, if you have a cycle, (explains slides), you can have a TDZ violation when you try to use the import, because the module isn't yet initialized. There are cases when you can import without being in the TDZ, so the error won't always be thrown. JS allows you to get around this by late throwing the error only. When you do that the use doesn't happen until the entire module graph has been evaluated. Languages that require the type information of imports, this causes errors. These languages run checks on the import, so there's no way to defer the use of the import. Languages with static type checks need to just know the value when the import is made. So live bindings become a problem because we need to know at instantiation time and we only know at evaluation time. Functions are initialized during init, there's no issue using functions in these static languages. While this means imports from other languages will be restricted, we can still allow getters and setters.
WASM might be able to get around this by adding an "any" type. You may have a cycle with a JS module higher in the tree and another language lower in the tree—this causes problems because the JS module hasn't been finished instantiating and will be undefined in the lower non-JS module. There are other options than a subphase—you can defer the instantiation of the other language module until the evaluation phase, but then we have the reverse problem where non-JS modules cannot be referenced until evaluation time in JS modules. So we advocate using the subphase rather than the deferred external module loading phase.

CP: (something...)

LCK: You need to be able to know the type of what you're importing. The name alone is not sufficient.

TST: The binding exists because you know the name, but it's not bound to anything yet because it's not initialized. There aren't any scenarios where you can have enough information before the first phase is done.

CP: If you know upfront the things that you're importing, we still don't know the exact execution of the JS module—you'd have to wait to a later stage.

LCK: This would delay when we could instantiate within WASM, so JS couldn't take advantage of those modules, which would be an issue.

DH: I'm confused with the setup, with usecases of other languages interacting with the module graph that aren't WASM.

LCK: WASM would be included in this—any language like WASM, statically-typed languages.

DH: What are we aiming for here? If the only usecase now is WASM. I don't know of any other platforms that are headed in this direction to interact with ESM.

LCK: We want to think about not making it specific to WASM, but designed with WASM's needs in mind. In case there are future languages like WASM.

MBS: The instantiate subphase, are you imaging this will help with interop with commonjs too?

LCK: That came up in the discussions, I don't think it will. But we should discuss offline if it could...

MBS: Named exports for common is something that's on the table, I'm still on the fence about supporting everything in ESM.

LCK: I know that I figured out it didn't work for CommonJS, but I don't recall what it was specifically. I'll get back to you.

YK: We already have hoisted functions which helps with cyclic module dependencies. In what way are WASM functions different, why couldn't we use that same phase?

LCK: Not a separate phase—that hoisting happens at the end of instantiation. It doesn't work for WASM because when you're importing, you need to know the type. In JS, that happens as you're going up the tree—you may be pointing to a module that hasn't been imported yet. When you have a cyclic module tree that are both importing functions from each other, the function binding may not be bound yet. Maybe we should take this offline?

MM: For other languages, you talk about snapshotting functions. For JS, you're not actually exporting the fn, but the cell/slot/location holding the export. We ended up there because it was easy, not because it added value. Would it be more uniform if JS exported the function as a non-mutable binding? And can we collapse the subclass hierarchy? Can we just have the cyclic module record be the base class without it extending something else?

LCK: You could potentially still have modules written in languages that don't support cycles. I think we should keep that open, but that's open to discussion. For a non-mutable function binding, I don't think that gets around this problem.

MM: JS doesn't match other languages, because the binding is mutable.

LCK: I don't know if this is the pain point. WASM would just use the initial value, you can't override it.

MM: export function declaration could always export a constant binding.

(various objections to exporting a const function declaration)

DD: I like the work being done with this proposal. LCK's factorings are really elegant, and doesn't change JS' semantics.

DH: From my experience on modules, I agree you're solving an important problem, I just find it hard to follow. I have some vague concerns, but I want to make sure I understand better before I express my concerns. Let's talk offline.

KS: I also support this refactoring. What if you have another language that depends on the language X's initialization?

LCK: In WASM, we'll be instantiating all the variables during the first phase of instantiating. It has to do this because there's a chance that a variable will not be initialized.

#### Conclusion/Resolution

- LCK & DH will continue to work offline


## Class fields status update

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-class-fields)
- [slides](https://docs.google.com/presentation/d/1oDQOS9b8wnuP5-o8zInsEO9lpRbhduawAmvfRzbxkOs/)

DE: We changed a funny TDZ thing with class field initializers, making `this` binding initialization a little bit earlier. We have Test262 tests for the change.

WH: Can you explain the "Tweak in `this` TDZ" slide again?

DE:  We're explicitly enabling access to `this` in the initializer, and for other functions that close over `this` that are called from the initializer.

KG: The initializer expression for the prop has two expression, a `this`, and a `f` that closes over the same `this`. The two were not equivalent before, because the first worked and the second throw, and they are now.

MM: Does this mean this can be dereferenced before super is called, for example in `super(this)`?

DE: This doesn't change TDZ of any other code.

DE: Back to slides: Implemented in Chrome and Safari! Private fields landed in Babel. Typescript support is planned. We'll continue proceeding with implementations and engines. Need help documenting and beginner guides. E

WH: I like this, but I'm getting increasingly terrified about semicolon insertion inside classes. We didn't have that before. It'll create a nightmare for future extensions in classes.

DE: We discussed whether we should allow ASI in previous TC39 meetings. Our decision was that we were ok with these no line-break restrictions.

WH: I'm hearing differently from people here about being ok with no-line-break restrictions.

WH: Suppose we didn't have static productions and we wanted to add them later. We would have to have no line-break restrictions for these kinds of extensions.

KG: We've done this for async. No one really tries to break these 'async' or 'static' modifiers from their declaration.

WH: There is an important difference between classes and the rest of the language. Inside classes, there are no reserved words. Everything is valid as a name. That makes it much harder to extend classes later.

DE: Let's continue this offline. Do we have consensus with the TDZ tweak?

#### Conclusion/Resolution

- DE and WH can follow up
- Consensus for TDZ


## Static class features for Stage 3

(Shu-yu Guo)

- [proposal](https://github.com/tc39/proposal-static-class-features/)
- [slides](https://docs.google.com/presentation/d/1YzFr7EIGiX2YagfFMjkI-lVR6ouoRfPbTNLY--NGbC4/)

SYG: Last meeting we tried to move forward without static private. Public static fields are properties on the constructor: you declare them as static, and they are writeable, and configurable. The controversial part is private static fields and methods: we are adding back private static fields and methods because there are feelings of filling out the features grid, for better organization of code. The main sticking point has been the subclassing hazard. My conclusion is that it's not that bad. Private combines lexical scoping with a restriction of what the receiver can be—both these things are important. Private is a strict subset of the behavior of public things. It has to be lexically scoped, and there's a provenance restriction on the receiver. We care about where the receiver came from, if it's not from the right place, it throws. For instances, the provenance is "created by the class". Everyone seems to agree on that. If it's not the right instance, it'll throw. There is no prototype lookup for this. It has to be directly constructed. For static, the provenance is _just_ the class constructor. We feel that private static is well motivated for factory pattern and extracting code.

MM: Clarifying: I find "provenance" confusing. Does this mean WeakMap? Where the registration with the weakmap is separate from the get/set on the weakmap.

SYG: Yes.

SYG: It all comes down to: In static private, you can access private instance. It's the most natural way to me, even if it can be done other ways. (Explains subclass hazard).

YK: Is this the only variant on static you plan on presenting?

SYG: Yes. The failure behind this is because it's the wrong provenance. JS has always had object-resolved receiver calls. In other languages, that's not an issue for static typing. WH has brought up before that public fields have the same hazard. The behavior here is because of the way public static works, you silently shadow.

(discussing error on slides)

SYG: I'm not sure that the subclass is suitable replacement for their super class. In C++, there isn't a `this` in static. I don't think we should extend this into private semantics. If it's not often done, it shouldn't be an issue. There are upcoming proposals for a class meta property to use instead of dynamic this receiver. We can rely on linting to fix this for users. We've tried exploring a TON of other semantics, and it just doesn't work well or it's too complicated.

SYG: So we're asking for Stage 3 with the original semantics.

CM: I concur that the hazard isn't that bad.


KG: We imagine static private methods will be used to hold de-duplicated logic, that should have access to private instance fields. But now all the callers have to use the right receiver, or it throws. Now suddenly `this` stops working for subclass. Example: https://gist.github.com/bakkot/7fa48f8d20382d53fa1582b92dae9692

YK: It's baffling to me what the semantics to be. (some point I don't understand...)

SYG: To me it's not just lexical, it's something else. If you think of it just as lexical, you won't have issues until you use `this`. It's better to think of this as almost lexical and something else.

YK: I think we should advocate for linting, but keep the hazard. I don't think it's really a hazard.

DH: What would the linting rule be?

JHD: I could be don't use `this` in static.

DE: (discussing linting...)

SYG: We've rejected statically (pun) disallowing this in static.

MM: The obvious design principle is to find the best fit with the least surprise. Sometimes there's enough conflicting intuitions that we know some people will be surprised no matter what we decide. With that, you'd like the nature of the surprise to be fail safe instead of silent.

DH: I'm not confident that's the case. I think you can leave out static private entirely.

MM: I think this is the least surprising of the alternatives with private static.

WH: It's been a long journey. Thank you for addressing the concerns from the last meeting. I'm happy.

WH: I'm not concerned about the private static hazard because if you get it wrong by using `this`, you'll just get an exception. The public static hazard is the much more dangerous one, because it fails silently. However, it's intentional for some use cases and it's considerably simpler than the other alternatives for public static, so I think it's the right choice.

JHD: I think this is good, it's too much of a change to try any other semantic.

BT: I like the direction. I'm worried about Stage 4 for private class features for 2019. There's enough signal that there may be some concern from users. I think we should give users time before putting it in the standard. We have thousands of lines of code written with classes, and I think that's what people want. I don't know if we're certain the users want private. That kind of feedback is important, and 6 months time is too short for it.

DE: I don't want all devs to think they have to use it everywhere. But library authors seem to really want it.

BT: I think we should continue pursuing it. I just think 2019 is really soon. We have a hypothesis that class private is more important than private declaration, etc. They seem right as far as we know, but let's talk to users once they have a chance to live in this code. I think public static has that data. I don't think private features does yet.

#### Conclusion/Resolution

- Stage 3 acceptance


## Decorators towards Stage 3

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-decorators)
- [slides](https://docs.google.com/presentation/d/1sQJunzPUqaD-fbyGCRHJI1Sn5w2mo5F8hXFXfJOFTxY/)

DE: Decorators allow metaprogramming in classes. Transforms also support old decorators. Comes up in several cases where you want to have additional behavior on methods and classes. Decorators are invoked with a descriptor that represents the class or a method/property, and it returns a modified decorator. A few tweaks for duplicate keys, disallowing duplicate decorated methods, an ergonomics improvement if the finisher returns undefined it doesn't change the descriptor. Rejected early error for doubly decorated accessors. PrivateName as an ordinary object. We've gone back and forth between a primitive. Implementers are concerned by that. So it's an object. We removed auto-inserting parentheses (like new expressions). So there's no factory function necessary anymore. To overcome the issue that motivated the auto-inserting, we made toStringTag return "Descriptor". It doesn't have to be secure, it just needs an easy duck-typing. Auto-inserting had some issues. I think it's simpler without it. We also the order of export decorators. Decorators now go before the export keyword.

RBN: Typescript has a bunch of keyword modifiers. Splitting where the decorators where in a list of modifiers makes it feel weird. Think of export as a modifier, not a syntax thing.

DE: I like the change. We allow decorating class expressions now. At stage 2. We have babel implementation in progress. Not going for stage advancement. I love that we got review already of the spec text.

JHD: I hear the precedent from typescript. The issue is that the decorator before the export keyword feels like it's decorating the export. With the decorators after, it makes it obvious that the decorators decorate the class literal.
For example, I'd expect to replace class A with `const foo = <object literal>`—I get that that wouldn't work because it doesn't match the spec. But if I delete the object literal, ??.

DE: For me, export modifies the export the binding of the class, but not the class. The decorators flow through the export modifier.

JHD: When I'm scanning a file, the thing I'm looking for is the exports—that's the heavy lifting thing. The return result of those decorators is what's exported. The issue to me is the export keyword (just like the import keyword) everywhere—that's far more critical to me. Decorators are part of the implementation detail and thus far less significant when scanning a file. The thing that is changing is the _value_, so the decorators should correspond to that value.

RBN: If you had decorators of class a and you wanted to switch that to const a, it doesn't really matter where that decorator is because ?? you're changing the declaration. Yes you are decorating class, but by having decorators in either position, you're restricting the production of that class. From a semantics perspective, you're left with the same thing, Where I always look at is, if for any reason, any thing adds a keyword before class, it makes it obvious where it goes. Whether that becomes async constructor or async class—it doesn't really matter, but from a refactoring perspective, it becomes more complex. If I determine that I need to add a decorator to a class (for friendship, etc.) I have to now remember that it comes before export and that class decoration—but people will just copy the example from the website and they're done. That's far easier to do than the alternative.

JHD: You're focusing on the adding or removeing modifiers. What happens in react is that you usually remove the export itself.

DE: Let's continue this discussion offline. JHDJHD, Ron, (I'm injecting myself) Justin, would you like to join a call to discuss this? Anyone else interested should contact DE to be added to the call.

YK: I like the new placement of the decorators in export.

DE: I agree.

WH: Should `toString` include `export` and the declarators of a class?

DE: Could you clarify?

WH: `Function.prototype.toString` called on a class

MM: What's the first token of the source?

DE: I'll have to get in contact with Michael about that.

WH: Right now, it includes a class's decorators if it's not exported. If the class is exported, it doesn't include the decorators.

DE: That sounds like an error, I think it should include the decorators.

WH: I think it should not include `export`. We can quibble whether it should include the decorators or not. If it does, that strongly argues for putting the decorators after `export`.

(people agreeing with WH).

DE: Does that mean we have to include the export first? It doesn't sound like the end of the world to discuss it.

(we should remove decorators from the toString)

DE: I invite you to attend whatever discussion we have.

BN: How should an AST represent the `.loc.{start,end}` positions for an exported class with decorators? This seems related to what WH asked. Let's talk offline.

SGO: Do you have comment on auto-insertion of parens?

WH: I'm OK with a non-insertion of parentheses.

DE: Possible attacks with monkey patching that. This is why we made an ordinary object that's mutable.

JRL: Isn't there a security risk with overriding the built-ins?

DE: We discussed this and determined that there is no security risk. On one hand, freezing that in a one-off way will not defend against certain attacks. I am against making a single class defensible in a one-off way. There was some thought that ES classes would be like that by default. I'd rather do this in a more general way (in the standard library) and not just here.

CP: There's no mechanism to create brand new private names?

DE: Private name is not a global. You can `new` the private name constructor to reuse the private name.

WH: I'm amused that you allow `yield` and `await` expressions in decorators, but this is analogous to how these work in any other expressions. I couldn't find a way to break things with those in decorators, so let's keep things as they are.

DE: André Bargull found many ways to use `yield` to break implementations by putting it into the `extends` clause of a class.

DE: Private name includes only get/set methods, no add or remove methods. It's a deliberate omission. We're encoring the good path only. Only through declarations. You have to create a private field declaration to get it.
Using the super return field you can add private methods to an existing object. The purpose is to give objects a stable shape/class, which encourages better programming practices.

MM: I do want to understand this before we go to Stage 3.

DE: Happy to follow up with you.

CP: We've had an issue with proxies in the past. Does the private name object have similar problems that we want to avoid?

DE: I'm not sure what you mean.

CP: this proxy handler can change over time.

DE: There's no similar mutable private handler.

DE: Do people like the direction this is going in? Any other things we should follow up on?

#### Conclusion/Resolution

- Discussion on export or declarations first
- Discussion on PrivateName ordinary object


## Decorators towards Stage 3, Additional Notes

(Daniel Ehrenberg)

JHD: discussion on export decorator ordering: export @d class ...

- Wants export first so that the decorator attaches to the decorated.

RBN:

- Switching `export const class` to `const A = ` it doesn't matter where the export is.
- By having the decorators in either position, you're restricting what comes next.

Discussion taken offline. Not seeking stage advancement.

Yehuda went from JHD to Ron's position, but happy either way.

DE: me too.

WH: should toString on the class include export on the decorator?
The export shouldn't be included in the SourceString, while the decorators may or may not. This strongly argues for the bottom alternative on the slide.

??: Waldemar is right. Export goes first.

DE: It doesn't sound like the end of the world to cut `export` out of the toString output.

BN: how would an AST represent the character range of the node representing
the class?  Probably same answer as to Waldemar's question.

WH: ok with non-insertion of parentheses.

PrivateName as ordinary object. PrivateName stealing may not be a problem in practice.

JRL: wasn't this identified as a security risk?

DE: Not a security risk. Mark, Ron, and Dan discussed and could not
identify a risk that freezing would addressed. We don't have any
defensible classes. Why freeze this one?  Only introduce defensible
classes as part of a larger, separate change.

CP: There's no way to create brand new PrivateNames.

DE: Yes there is. You could do this in an @observed decorator.

??: Or memoized decorator.

WH: couldn't find a way to break things via `yield` and `await` inside decorators.

DE: We should treat them the same way as in `extends` clause.

WH: agree no change needed.

DE: Mark brought up this point. PrivateName only includes get/set methods not add.
This is a deliberate omission. With private fields/methods we want to encourage adding
private fields via a `private` declaration.
Not a strong restriction: super return trick.
Objects should have a stable shape.

MM: I want to understand this before stage 3 but I don't anticipate problems.

CP: We've had issues with proxies in the past. Does PrivateName have similar problems?
Implementors cannot optimize proxies because the handler can change over time.

DE: No similar mutable object. PrivateObjects not accessed on every use.

DE: Are there more things to resolve for stage 3?  Besides `export` positioning.

#### Conclusion/Resolution

- We agreed on not-autoinserting parentheses, seem to on unfrozen PrivateObjects.



## Class Static Block

(Ron Buckton)

- [proposal](https://github.com/rbuckton/proposal-class-static-block)
- [slides](https://docs.google.com/presentation/d/1TLFrhKMW2UHlHIcjKN02cEJsSq4HL7odS6TE6M-OGYg/)

RBN: Part of the previous discussion on this was about the Class fields, but the basic idea here is to provide a declaration allowing you to do multi-step evaluation. Private static state or private instance state—to grant them privileged access, I need to be able to (...) Without some time up static block, you have to rely on first time a static method is run or first time constructed. The concept is just a block prefixed by static keyword. Only one static block allowed per class. Writing a second static block would throw an error. With the fields proposals, this gives you the opportunity to perform multi-step initialization. Should we allow return statement in static block? You can return inside the constructor, but I don't think we should allow return from a static block. It's not a function. Ambiguous: returning from the function or returning from the class? At the top-level of the script or module and state that return is not allowed. Static blocks are a new closure environment. A new block scope. It aligns with how instance constructors operate. This aligns with how an instance constructor would work. Keeping with the discussion with decorators: it would not be allowed in a static block; for that you would need a static class. If you use `this` it would be used in the constructor C itself (referring to example).

MM: For `this` and that position, there's no conceivable way to have this not bound to C?

RBN: That's the proposal. Looking for Stage 1 after discussion.

EFT: We talked about the return in a static block, but what about yield inside a generator? Yielding inside an error function?

JRL: Why are we creating this weird variable thing instead of a static block?

RBN: On of the issues is dealing with function declarations. It becomes inconsistent with var inside a class that shadows an outer variable. Not a problem if someone only uses let and const, but that's not always the case. From a consistency standpoint, it makes sense that it would only work within this block. (I have more examples in the explainer). All those variables become scoped to that static block anyway, matching the intuition that developers have and that other languages leverage.

JHD: Can you explain the reasoning for why `C.y` does not match there?

RBN: The class fields proposal, when the constructor runs, all the instance fields get set before running constructor code. If the mental model is similar to constructor, it should follow the precedent.

WH: What can happen inside the static block? Just like any other inner lexical scope?

RBN: Yes.

WH: Excluding things like return, await, yield, or break or continue to an outer scope?

RBN: Effectively yes. Even if we allowed return as an early exit condition, that would make sense, but there's no mechanism for that. Stage 1?

LEO: I would like to see the static block just be declarative for static fields. It does so much more than the simple thing.

RBN: Some languages allow this pattern. It's just statements. And there's a need to extract helper functions to access private state.

RBN: We'd like to have a place to do declarations of fields, and a place to do imperative code. This is the imperative place.

KG: Previously we thought allowed private declarations. That would solve this issue. We never pursued it. It would be good to explore that before we hit Stage 2.


RBN: Two motivations for this proposal. One is extracting private helpers. I still feel the multi-step init is a good motivation even if extracting can be handled by other proposals.

#### Conclusion/Resolution

- Stage 1 acceptance


## Class Access Expressions

(Ron Buckton)
- [proposal](https://github.com/rbuckton/proposal-class-access-expressions)
- [slides](https://docs.google.com/presentation/d/1VXqGgxq_a0byLuc9yl4jSLR6GlopjvhU_Z0OpZnk6l0/)

RBN: This has also been brought up a few times. Originally talked about with the private static subclass hazard. There are other motivating factors for this. ClassProperty expression meta thing that allows object-resolution on the class itself. It's a replacement for using the ClassName everywhere. Like how SuperProperty threads a `this` through. This allows you to use a shorthand name eliminates the issues with `this` in subclasses. It's always the class. This is being looked up on the lexical class declaration. The receiver doesn't change in subclasses. Similar to super, you can't access the outer class when inside a nested class declaration. The solution to that is an arrow function, so you can capture the lexical scope.

WH: Isn't a simpler solution just to use the name of the outer class that you can reference?

RBN: Yes.

RW: Conversely, and this might satisfy LEO's concern about order of initialization and availability of the class binding in the previous proposal for static blocks: could `class.` stand in for the `C.` name in static blocks?

RBN: Yup. Both of these were born out of the private field issues. Static fields has already set precedent that the binding exists by the time this runs.

JHD: Repeating things sucks. I like this.

BN: What's the difference between class.foo and this.constructor.foo in non-static methods? Doesn't this.constructor avoid repetition and work for anonymous classes, which are the reasons JHD cited for liking class.foo? If they are similar enough, then introducing class.foo may be needlessly counting against our very limited cognitive budget for new syntax.

MLS: I'm not sure what feature should be used. Might be too much, too many ways to do some things.

TST: Which receiver is used for property access/sets and method calls? For sets you use lexical? For method calls? What's going on here?

RBN: That's true. There are two differences with super. Super calls with the subclass as the receiver. This is the same. For property sets, it sets on the `this`.

TST: I understand, but I think it's too confusing.

WH: This kind of a feature is needed to solve the static hazard in classes. I'm confused why model it on super, introducing the complexity of yet another kind of references. It should just be equivalent to ClassName.foo (assuming no shadowing) and just use a regular reference. To teach it, it should be that class.foo is just ClassName.foo (without shadowing).

RBN: (explains what it's doing)

WH: If it requires an explanation this long, it's going to be an uphill battle to get anyone to understand what it's doing. We should keep it simple.

MM: I strongly agree with WH. The thing about super, it is quite complicated and confusing. Super is compelling when using inheritance; it's worth the pain there. Class side inheritance (static) is rarely used for overriding. Nothing about class keyword that suggest SuperProperty behavior.

YK: People should learn when to use this vs ClassProperty.

RBN: I understand. It's just unfortunate for the static private call.

EFT: Isn't this just sugar for something we already have, either this.constructor or naming the anonymous class and using the name?

RBN: nameless classes can't access static methods safely. this.constructor isn't safe.

EFT: I agree, but I'm skeptical that we need syntax to reference a nameless class. You can just give the class a name if you want to refer to it.

RBN: Others want DRY.

DH: Without a uniform way to suggest class properties, it becomes harder for proper usage to avoid the footgun. This makes it one simple rule, just use class.foo. I think this is much more streamlined.

JHD: Statically referring to ClassName is fine. But constructor prop is just not an option. Having shorthand syntax is valuable. I'm in favor of this proposal. It's nice sugar. It's DRY. It makes things clear and consistent.

EFT: (...something about super)

#### Conclusion/Resolution

- Stage 1 acceptance
