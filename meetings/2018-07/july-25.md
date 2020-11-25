# July 25, 2018 Meeting Notes
-----
Waldemar Horwat (WH), Mark Miller (MM), Till Schneidereit (TST), Michael Ficarra (MF), Michael Saboff (MLS), James Burke (JRB), Maxim Aleksa (MAA),  Brian Terlson (BT), Shu-yu Guo (SYG), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Chip Morningstar (CM), Mariko Kosaka (MKA), Jordan Harband (JHD), Patrick Soquet (PST), Sam Goto (SGO), Dave Herman (DH), Brendan Eich (BE), Pieter Ouwerkerk (POK), Leo Balter (LEO), Limin Zhu (LZU), Aki Rose (AKI), Ross Kirsling (RKG), Shane Carr (SFC), Kevin Smith (KS), Ron Buckton (RBN), Jean-Francois Paradis (JFP), Peter Hoddie (PHE), Godfrey Chan (GCN), Domenic Denicola (DD), István Sebestyén (IS), Bradley Farias (BFS), Adam Klein (AK), Gus Caplan (GCL), Felipe Balbontín (FBN), Daniel Rosenwasser (DRR), Jonathan Keslin (JKN), Christopher Blappert (CBT), Dean Tribble (DT), Richard Gibson (RGN), Lin Clark (LCK), Allen Wirfs-Brock (AWB), Maggie Pint (MPT), Timothy Gu (TGU), Sebastian Markbåge (SM), Dustin Savery(DSY), Mike Murry (MMY), Alex Vincent(AVT), John-David Dalton (JDD)

Remote:
Rick Waldron (RW), Daniel Ehrenberg (DE), Caridy Patiño (CP), Justin Ridgewell (JRL), Brian Warner (BWR), Yulia Startsev (YSV), Jason Williams (JWS), Ron Buckton (RBN), Ross Kirsling (RKG), Ben Newman (BN), Edd Yerburgh (EYH)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/07.md)

## Dynamic Modules

(Bradley Farias BFS)

- [proposal](https://github.com/guybedford/proposal-dynamic-modules)
- [slides](https://docs.google.com/presentation/d/1sqlvsiIOO0MgU6bW4TjB4RXZkjMAlEzuING_qMF1fYo/view?usp=sharing)


BFS: Presented background of CommonJS modules and transpiling of modules. Proposing a Dynamic Module Record. Mains goals are:
Verify linking during Evaluate instead of Instantiate
Allow concrete API for Hosts to update bindings in this record type
Determine appropriate behavior for partially evaluated Module Records
Only allow Dynamic Module Records as leaf nodes
Non-goals:
Changes in Module Record shape post evaluation
Non-identifier members on the Module Record
Traps on member accesses

Preliminary spec text is in progress.

DD: Don't think that we should add new Module Record types to ECMA-262. Don't think we should be a gate-keeper for say WASM to have to come to TC39 to add a new module record type.

BFS: We think that we need to have this for dynamic modules.

DD: Would prefer a small spec change in ECMA-262 and more spec text in Node.js.

BFS:  Think that we require a much larger change in ECMA-262 than you believe.

DH: I have the same goals as DD, but not sure if they match this proposal. We have an Abstract Module Record for abstractly representing multiple kinds of modules. We should make sure it subsumes the needs of Node modules. We should also discuss the contours of the reflective API's needs. We should avoid scenario solving if we can come up with the right fundamental abstract primitive.

DD: ??

DH: What you're saying is that before we bake anything in, Node.js can experiment what that looks like and then bring that to as a 262 proposal.

DH: Does this include a public API, or is it purely internal spec language?

BFS: Just spec language.

DH: This is our best example of how Node.js needs to interface with ECMA-262, and we should figure out what that means as part of stage 1.

MM: How shimmable is this? We don't need to trust the transformer, we can just protect against the script. Love the fact you're proposing an overall semantics for how a mix of modules get linked together. Is it possible for a tool to turn a bunch of linked-together mixtures of modules into a single script that something else can load as a Script?

BFS: I don't think in an isolated sense, you can properly shim it (we're talking about timing differences with the parent model). I suggest you take a look at @std/esm by John-David Dalton (JDD), which implements some of the things you're discussing.

YK: I want to say to MM, there's a lot of different levels of semantic preserving. If you're willing to compile your module to things that are synchronously available—if you only have static imports, then all the existing tools (there may be bugs) are intending to be spec compliant. This of course, doesn't apply to WASM.

YK: Specifically about CJS, the reason CJS transpilers today are not semantics-preserving is that there's no semantics to preserve. I think transpiler maintainers will be excited to implement anything we specify, as long as there's a specification to speak of.

SL: Webpack is using getters, Object.defineProperty, etc. Some dirty tricks involved, but basically spec compliant.

JDD: (Responding to earlier questions) My ESM loader is compatible with Webpack, Rollup, all the tools. Preserves semantics for the needs of the ecosystem today.

WH: I'm curious how this relates to the other dynamic module efforts (WASM, etc) that support cycles.

BFS: This only aims to be a leaf node. Part of DD's concern is that if this only applies to leaf nodes, it may make more sense for this to be its own record type. For CommonJS, the leaf node requirement is not a problem, though it may be more of a problem for WASM, if cycles are involved.

WH: If we get cycles, would we need to do this all over again?

BFS: This doesn't intend to ever add cycles. That is a separate design-space that does not overlap with this one. With WASM, the desire for cycles allows you to pass bindings from JS to WASM back to JS, or WASM to JS to WASM. Whenever we export from CommonJS, stuff like these transpiled modules, we're changing it in a way where it's no longer delegating to a binding, but to what a dynamic module has defined its value to be. This is an important distinction, because they can never delegate to a WASM or an ES module; they are all strictly defined to the module itself. There are limitations to this, but everything already works within these design constraints, so I think it's OK.

TST: WASM module system to the extent possible was designed to fit into the ESM system. There's no reason to assume that they would be best served by this, also to DD's point. Lin's work is preparing support for multiple different module types, which could be used here.

DH: To make sure we don't drop this: in the future when thinking about the reflection level (such as user-land loaders), would people need the ability to dynamically reflect ESM modules, which would then need to be able to participate in cycles? From the general philosophy, are all the base-level semantics reflectable? If cycles are allowed at the base level, at some point cycles will also be needed at the reflection level, unless we can convince ourselves we won't need it for some specific reason.

WH: Anticipating DD's reply on the queue, I'm just trying to understand why we should standardize different implementations of the Abstract Module Record class rather than doing one general one.

DD: This is all working as intended. We have different ecosystems with different needs and slightly different module systems. We use ECMA-262 as the meeting point, to make them play well together. Node.js needs tweaks to play well. WASM will need tweaks (in ECMA-262) to support its use cases. No conflict, all collaboration.

DH: Node.js can do its instantiation, but that's not part of ECMAScript, but part of Node.js. If we have a dynamic reflection API, then we have to spec it out, but that's not what's happening. We're not actually exposing Node.js's implementation through a reflection API, so maybe we don't have to worry about a new subclass in the ECMA-262 spec.

MM: I want to agree with what DD was saying. We shouldn't let these collaborative efforts get stuck because of jurisdictional issues. `SharedArrayBuffer`s between JS and WASM are very closely tracking each other in order to have the same shared semantics. Here's where I want to strongly disagree with the jurisdictional stance (but let's not get stuck on that). On the jurisdictional issue, part of the point of this committee is to recognize what is pervasive de facto standard host-independent JS in the world, and make decisions about what to codify. We did that with things we all hated, like `__proto__`.

MM: When I look at the world of JS today, there's a tremendous number of modules on npm that are not specific to the host, run just as well in the browser as Node.js. Many things are applicable to all hosts, we've done a lot of work in this committee, as reflected in BFS' talk, to ensure ES6 modules and CommonJS modules play well together. And this work should in fact graduate to a spec from this committee.

BFS: To clarify, should there be a separate integration spec, or should it be in ECMA-262?

MM: I'm fine with it either in ECMA-262 or in the way that `Intl` is separate, for example. As issues relating to modules going forward (like writing loaders in JavaScript), I suspect there's a tight-enough coupling that we should synchronize specs.

TST: Everything runs as a Source Text Module Record? Sounds like you're (MM) suggesting we standardize CommonJS in this committee?

MM: I am making the stronger assertion. To JS programmers in the wild, they think about writing code using CommonJS modules as one of the standard ways, and publish code to npm using these assumptions. I'm starting with the common assumptions of JS programmers about how to write host-independent JS, often by writing CommonJS, that are supported pervasively on all the platforms, even if they're not supported directly _by_ the platforms.

DE: I think it would be great if we come to a conclusion about what we want to tell the Node.js community about this. It sounds like we're layering. Are we OK with letting Node.js do what they want without us spec'ing it out?

BFS: I have a suggestion here, we're trying for stage 1 right now and layering is important.
We have this proposal we can alter it in a variety of ways, I don't think we're proposing for any JS APIs to be added to the spec here. We can move forward on this, go back to Node.js and propose this without adding a new module record type, and come back at some point to discuss cycles. I'm not confident that cycles are well-suited in this design space, and also not confident that in the designs we're proposing, that cycles will work as they do in Source Text Module Record. There's an issue on the issue tracker about order of evaluation and partial namespace objects, so there's a lot to work on here.

DH: One thought about cycles: it may be the case that you don't need to express cycles in an explicit way. If you use the dynamic module record as the point of reflection, (imagine a user-land self hosting of ESMs, the evaluation is something you can control when that happens, and the module graph cycles are really about a relationship between source code, not a relationship between module records. Cycles are about who's closed over what. This cycleless model actually may be sufficient to express cycles. I think you guys are doing work that _can_ end up serving as the foundation for the dynamic reflection API. This work will be leverageable for future module work.

DD: To DE's point, as a committee should be supportive to Node.js that we support the abstract module record.

DE: Consensus on Domenic's statement to "go for it" aka "TC39 is supportive of the work to make Node.js integrate with Abstract Module Record to the best of its ability"?

#### Conclusion/Resolution

- Stage 1 acceptance
- TC39 is supportive of the work to make Node.js integrate with Abstract Module Record to the best of its ability


## Website and Documentation project update

(Yulia Startsev, YSV)

- [slides](https://docs.google.com/presentation/d/1z5fZ-a3s5xS6-BMt7FTIq1dM0CRp_PJJy_vQ8bqPgak/edit)

YSV: We haven't made that many changes to the website. We're currently taking a break to accommodate several people on vacation. We also reached out to Ecma International to make clear that we are a part of the organization. We did let some people know at JSConf EU that a website is in beta, and we started collecting feedback from them.


That brings us to today. What is a successful website for us? Came from a survey we did in March.

- Developers should understand the stage advancement process.
- Developers should have a path to contributing. Can take many forms: documentation, blog posts, and also specs.
- Better line of communication to the public. E.g., CSSWG, and W3C in general.
- Website as a cornerstone for the documentation for TC39, which was one of the things that spurred the creation for the website.

So far the website only does one of these things: TC39 has a better communication channel to the public. We now list our GitHub discussions, which some people didn't even know about, so people can participate more easily.

### Next steps

- A crawler to get information automatically, allows us to keep the website up to date.
- Getting documentation online.
- Final user interviews (Nov. – Dec.) and revisions.

**Crawler**: The crawler project is in two parts, to add missing information where possible—it will run through GitHub issues to find this info.

**Documentation**: in progress (e.g., stage 3 review document, etc.) as well as planned (e.g., how to be a host, how to be an editor). No priority but if you are knowledgeable in this area a skeleton or partial document would be helpful. No need for complete documents! We can use any help we can get. Is there privileged information that we should not publish, both privileged documents or information in other documents that we need to redact? We should discuss.

**Interviews**: Working with User Researcher Chris Adams; focus group interviews. We will gain high level, summary view of how external people looks at TC39. Also will have a process available for future ventures in similar media.

### Questions

AWB: I've been working on a project chronicling the history of ECMAScript. My general question is, what are you thinking about archivability for this content. I've discovered that it's very useful to see the history of proposals, discussions, etc.

YSV: This is a great question. We've thought about this concept of a timeline, so people can see how proposals move and shift. One way we could archive it is using the Internet Archive and request they archive it on a two-month basis when we hold our meetings.

AWB: I've found the Internet Archive to be invaluable but incomplete. There's definitely a lot of intermediate things that are lost forever. My second point is that you should make archivability one of your requirements. My third point is that a timeline is very important. When there are different but related proposals, seeing them together on a timeline would be very valuable, as a way to capture and document that parallelism.

DE: About archiving, I present yesterday some infrastructure tasks that we need to do. All of the branches in all of the GitHub repositories need to be archived. We used to do this, but it's broken now. KC has propose some ways to address this, but that's currently not actively being done. If someone is interested in making sure these archives are preserved, I encourage them to volunteer to do this work.

AWB: From a historian's perspective, it's not reasonable to expect someone to restore 20 years from now the exact state of the website from a moment in time.

DE: Sure, I'm not saying that though. If the HTML stays around, that will be sufficient. I'm saying our archiving hasn't been perfect and we may not want to rely on the Internet Archive when this can be simple for us to do ourselves.

WH: Most ECMA committees use a document repository. Years ago we did that too, and those documents are well-preserved. More recently we switched to a wiki and that has vanished, other than scattered Internet Archive snapshots. GitHub will not be around forever either; we do need to archive things _in a readable form_.

YK: I agree with the sentiment of needing archives. It's easy to look at the past and say we need to record this information, but as its created it's a much harder task. There are certain kinds of information that we collect because we have an open setup, but the potential problem with this is that since it is so open, people may think it may not be important to archive just because it's freely available today.

### Groups

(Yulia Startsev, YSV; Daniel Ehrenberg, DE)

- [slides](https://docs.google.com/presentation/d/1x2t8ggcpFlZ2zl1RjVgO5fmGjqXRxlkoqcGDKY5ksVg/edit#slide=id.p)
- [Reflector post](https://github.com/tc39/Reflector/issues/158)

YSV: We are currently having a lot of online calls (`Intl`, `Date` features, website, etc.). It is working quite well, as it spares the entire committee with the nitty-gritty details. Everyone is invited, and final decisions are made by the committee. It gives us an opportunity to hammer out some details. It has been productive but it could work better, especially better information transfer (notes, agendas, and presentation of outcomes to the committee). The plenary is a big meeting and it can be difficult to discuss details. Let's reserve it for higher-stakes discussions. The focus here is getting higher-quality information to the plenary.

YSV: Concept of Groups: Proposals are still owned by the plenary. They work on the proposal but they bring the most fruitful topics to the plenary. Each Group would publish minutes and make sure people who would like to participate may do so. They also need meeting facilitators and make sure action items get done. YSV proposed meeting structure and templates for agendas and plenary presentations.

YSV: Open questions: **Notes**: How should we do notes? **Participation**: TC39-wide calendar for discoverability? Open Groups to non-members?

DE: **Group formalization**: How should we formalize the Groups? Ecma Task Group? ad-hoc group (preferred)? TC39 Code of Conduct is enforced in these spaces. **Intellectual property**: Rules are the same as GitHub/plenary, including TC39 IPR form. Alternatively, presume that IP is not developed in Group.

YSV: **Waves**: bundling thematic related proposals together and discuss collectively. **Community involvement**: Some existing Groups already have outreach, but could formalize this. Possibly a regular "office hours" call open to public?

DH: a) Some things come down to norms rather than policies. b) We _have_ to make sure stakeholders are included in these conversations.

AWB: You (YSV) tried to make the point that no decisions are made. But that's not really true. There are lots of details that were already decided in Groups. Maybe we don't really want to see all of the details in committee, but it feels a bit wrong to have things outside the committee.

YSV: Key here is that Groups don't have control over proposals. They essentially only have the ability to look at the proposal and discuss, but they cannot take over.

AWB: I certainly think Groups should exist. But I want to have detailed minutes/notes rather than have handwavy decisions presented to committee.

WH: Some Groups, such as Intl, have well-defined separation and work well. However, I don't want too many Groups. I worry about cross-cutting concerns and don't want to have to attend fifteen different meetings every week for fifteen Groups just to make sure that I don't miss anything and get lock-in. That would not be a good use of time. I want the Groups to be more ad-hoc rather than falling into the more regular meetings that some Groups have started having. I don't want to see Groups become permanent.

AK: (To WH) Groups should only give _recommendations_, just like champions (who are like Groups of one).

WH: I'm concerned about lock-ins. There's a lot of scientific research that shows that splitting into Groups before doing a plenary leads to decision lock-ins that are hard to dislodge by other stakeholders.

YSV: Everything is very much up to discussion.

AWB: Publication of minutes to the committee is essential. The committee itself _needs_ to have visibility of how Groups are functioning. The calendar would go a long way in accomplishing that.

YSV: Do we have agreement on publishing notes in a uniform/regulated fashion?

WH: Also need to publish agendas.

WH: About non-member participation, it's a can of worms. If we don't call it a TC39 Group then there should be no problems. If it is a TC39 group, are we following the current ECMA rules about invited expert participation? Some of the proposed Groups appear to be wide-open. Also, we say the Code of Conduct applies, but how would we enforce it against the public, as proposed for some of the groups?

DE: Ecma International GA and ExeCom think that these Groups sound very useful. They encourage formalization.

YK: Delegate of a company ≠ employee of a company.

BT: We are following the rules. There's no question.

YSV: Are people okay with calendar, notes, and agenda?

No objections.

LEO: There was a question on how the CoC applies to non-members. Feel free to talk to me or anyone from the CoC committee if you have any questions about CoC.

AK: Working in Groups has worked very well for `Intl`. So I think more of us splitting out into Groups will be effective for TC39.

YK: For those people floating around who are looking to contribute but find it hard in this large TC39 structure, small groups are really great for people to contribute. Let's be careful not to create groups gratuitously when you splinter existing functionality of TC39 into many groups, but groups work well for small and tightly-scoped things with very motivated people behind them.

#### Conclusion/Resolution

- The committee has no objections towards setting up calendar, notes, and agenda for Group meetings.
- Further discussion will happen over IRC and other channels.


## Reduce the number of ticks in async/await

(Kevin Smith, KS)

- [slides](https://github.com/tc39/agendas/blob/master/2018/await-change.pdf)

KS: The current state of `await` is we always create a new `Promise`, which enqueues more jobs than necessary. The proposed change is to use `Promise.resolve()`, which may or may not create a new tick. A current `await 1;` statement requires one tick to complete, but `let p = Promise.resolve(1); await p;` requires three ticks to complete as `await` creates a new promise, attaching the async function resumer to the new promise.

Under the proposed semantics, an async function resumer is attached directly to `p`. The implication is fewer interleaving points for native promises, but native promises with a monkey-patched `then` method would no longer be called. ChakraCore already (mostly) implements the proposed behavior and implementing current spec behavior will lead to performance regression. But because of that, we anticipate very few web compatibility implications. However, we do consider `Promise.prototype.then` monkey-patching and maybe reliance on three-tick behavior (tests?) to be in scope of discussion.

MM: I want to point out something with the history. The `await` semantics that achieved consensus was the `Promise.resolve()` semantics (through the PromiseResolve abstract operation), which is the current proposed behavior. I was surprised to find that the current spec does not already do that.

JHD: Maybe it was human error.

MM: With regards to the `then` monkey-patchability issue, I want to affect the promise that's returned before it's returned, perhaps to freeze it. One way is to monkey-patch `then`, or I could change the `Promise.prototype.constructor` property to point at a freezing wrapper around the constructor. Does that still work after this proposal? Let's discuss offline.

AWB: Is this optimization already allowed? The queue scheduling is already implementation-defined. Maybe the host can bundle two jobs into a single job?

TST: No implementation does that.

DD: Even in the existing spec, you can observe ticks through promises. I don't believe it is optimizable.

JHD: Would some implementation guard for monkey-patching `Promise.prototype.then` be spec'able and also optimizable? Something like "If Get(promise, "get") == %PromiseProto_Then%: new semantics"

MM: The spec only deals with observable differences. If you're talking about an optimization that doesn't deal with observable differences, you're still following the spec.

JHD: If we're talking about a get or not, that is an observable difference.

MM: The issue of calling the `then` in order to continue, then it's not an observable difference.

DT: It's not just ticks. The number of roundtrips through the scheduler is the issue, since there could be many jobs already on the queue, and another tick means that the current job is put at the end of that queue. Any place where we put in ticks, any unnecessary round-trips through the scheduler can get very amplified in a very useful scenarios. And worse still, the programmer cannot surmount them. So any place where we can avoid these extra round-trips, we should absolutely take advantage of them.

YK: When we spend time in this room arguing about whether the Spec allows for something, we should remember the Spec is a living/breathing document, so we can always modify the Spec to make it clearer.

DE: I want to respond to AWB's point that optimization may be possible. It may be, but for most implementations it is impractical. Specifically, with Maya's CL we see actual substantial performance increases.

TST: This is a real-world concern.

#### Conclusion/Resolution

- We need to follow up on some concerns
- The Promise.resolve component is uncontroversial


## Decorators towards Stage 3

(Dan Ehrenberg, DE)

- [slides](https://docs.google.com/presentation/d/1issTHgP5bf_FsbCSDfKAHjjoNnFa9nI0bEeCZtbh1oM/edit#slide=id.p)

DE: Why decorators? The idea is to make classes more expressive. It encourages transformations to happen upfront as opposed to during execution. They enable metaprogramming. It has the downside of being another language feature and hard to optimize. Some concerns remain, like can decorators be written in a way that leak private names. (Presents slides)

AWB: If we have do expressions, how do they affect thunking of initializer expressions? Assuming you have do expressions, in the initializer in the class, and you have a return in the do expression, what does it do?

DH: Things that implicitly "thunk", we should not allow the indefinite suspension of those control.

WH: Why are we discussing this? What do initialization expressions have to do with decorators?

DE: Let's table this discussion.

YK: For people who were on the fence about decorators with private, you really do want to mutate a private name, without exposing it to the public. This is why it's good for decorators to be allowed to wrap private stuff, so I'm enthusiastic about the @reader situation.

AWB: I'm uncomfortable with allowing private names that allows them to escape from a decorator.

DE: This is actually a design goal, so I want to allow it. Also, it doesn't give any more power than WeakMaps for escaping.

RB: There was a comment that we should avoid those use cases of private names, I think we should not at all avoid that discussion, since there are plenty of rationales for those use cases.

MM: Where have you operationally found the need to test a private name?

DE: This is a very concrete use case. I actually originally worked around this with duck typing, but I've changed my mind. We often need to overload something from those objects and other things. You could want a function to be overloaded between a descriptor and a function. The other important case is in the transition from legacy decorators.

MM: We have a spec technique that we use to indicate invariants we want in the standard: spec assertions. This way if an assertion fails, we know the spec has a bug rather than undesired behavior. We should use those to ensure that decorators don't leak private.

WH: I don't see how we could use assertions to ensure that decorators don't leak access to a private name unless the user wanted them to. I also share AWB's concern and don't think we should make decorator authors run through huge hoops to avoid having decorators leak access to private names.

WH: I am listed as having signed off on the decorators spec for stage 3, but that's for the version of the spec in which class decorators come after `export`. Moving class decorators before `export` would be a mistake.

WH: The `export` is exporting a complete class definition, which includes its decorators. When decorating a class, `@decorator export class ...` makes no more sense than `@decorator return class ...`. The correct forms are `export @decorator class ...` and `return @decorator class ...`. This is the opposite situation from decorating a static member, where the `static` is part of the member and decorators should precede it: `@decorator static foo ...`. Having class decorators before `export` would also preclude in the future allowing exporting-related decorators on `export` statements.

RB: To WH's point, one thing to point out is if you're returning a class, you're returning a class expression. We've been having some discussions about the placement of export in decorators: it feels inconsistent to have decorators follow export on the class, but not static. It would seem strange to say `static` then decorators then `async function`.

JRL: The difference between decorators before static and decorators before export is that static can be changed by the decorator, but export can't.

RB: The decorator can change what is exported, however.

JRL: But it can't change that something must be exported.

MM: Every declaration we have for functions, syntactically, can be evaluated as an expression, which gives a function object. I can imagine we might eventually want to decorate a exporting, which needs unambiguous syntax.

DE: Thank you for bringing up this consideration. JRL has also been talking about this, and it's nice to have confirmation from others about these particular cases that you care about. If there are others, please let me know.

MM: If you want to toString a class with decorators, That text surrounded with parens must be evaluable as an expression statement producing an equivalently decorated class. However, if "export" in included with the source text of the class, it would not be evaluable as an expression.

RB: I would never think it's safe to serialize a class with decorators to a string, with the sole exception of the entire class definition being inside a function, and the function itself is serialized.

DE: For the toString tagging branding, are we OK with this or would we like to revisit it?

(No concerns)

AK: I think this is one of those places where the group thing isn't working.

YK: For things where we can't reach an agreement as a group and get stuck, using the broader committee is helpful.

DD: I really want the committee to weigh-in on private name integrity.

DE: Does anyone have any concerns with the group review process, where we propose the only remaining concerns or discussion points here? (None). We have a standard weekly meeting to discuss the private name integrity details.

YK: I would like to see this proposal advance in the next meeting. If people have objections, can the mention them in our weekly meetings.

DD: I think this is a big ask if people object to your proposal to have to spend an hour a week.

YK: That's not what I'm proposing.

DD: I think it's ok to not advance a feature because not all the things are worked out.

YK: But I think this feature is being held up by a non-issue.

DE: We seem to have a high level understanding of the basic features. There are a lot of lightweight ways to give feedback that don't require going to an hour long meeting.

#### Conclusion/Resolution

- Not advancing yet, follow ups identified


## RegExp Match Offsets

(Ron Buckton)

- [proposal](https://github.com/tc39/proposal-regexp-match-offsets)
- [slides](https://docs.google.com/presentation/d/1Hu0mqUWQAVexts1YeOQEnBmOxc1yN3_6KNeKNnWmiTQ/edit?usp=sharing)

RNB: (presenting slides)

(...much discussion unrecorded...)

WH: I reviewed this extensively for stage 2. Reported bugs; thank you for fixing those.

WH: A question I have for the room: Currently the proposal calls the user function on failed captured substring matches, giving a start and end of -1. Should we do that, or should we just use `undefined` without calling anything for failed matches? Calling the function on those doesn't give much flexibility, and using those indices to substring would be inconsistent with existing behavior — exec returns `undefined` for failed matches, while this would replace them with empty strings.

RNB: `exec` currently returns empty strings for failed captured substring matches.

WH: That's incorrect. It returns `undefined`.

AWB: Some folks will count how many time this function is called and do different things based on that.

WH: Discouraging that pattern would be a nice side effect.

(... much more discussion unrecorded ...)

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers:
  - WH
  - JHD
  - MLS

## Cancellation Update

(Ron Buckton)

- [proposal](https://github.com/tc39/proposal-cancellation)
- [slides](https://docs.google.com/presentation/d/19M7OkW8fr-HBYzgQRDSX77Pn4WmGh_5gPnBV38N3x08/edit#slide=id.p)


RBN: Want a consistent approach to cancellation across platforms. There is concern that an ECMAScript proposal overlaps that the WHATWG has done with AbortSignal. However, what they did can be easily adopted by ECMAScript.

We are considering to define a cancellation protocol and not a cancellation primitive. In user space today we have various promise library that allows the promises by one library can be digested by and interoperate with other libraries. This allows the community to continue to innovate and work together between libraries. Allows ECMAScript to support cancellation without a specific primitive.

Propose that the WHATWG adopt the cancellation protocol within the AbortSignal feature.

Proposed semantics are to add a @@cancelSignal built-in signal that is defined, that method is called when the promise is cancelled.

Next steps are to draft ECMAScript spec text and draft WHATWG spec text.

JHD: This has come up often. The term "cancel" seems to be an overloaded term. It might be helpful to rename things.

RBN: That is why this is named a "signal" and not a primitive. That signal means that the cancellation has been requested and not any specific mean for the signal.

JHD: I appreciate that disambiguation, but would like "cancel" removed from the name.

RBN: I still like "cancelSignal" to be the name to describe what is is doing.

MM: I agree with your high level goals and support what your are trying to do. I'd like to see some sample code that shows what you have in mind.

RBN: I don't want to break that. It was in the original proposal

MM: Do you have sample code that explains the API you're described?

RBN: [Goes to online whiteboard and writes...]
  promise.then(onfullfilled, onrejected, controller.signal)

A promise produce can't cancel an entire chain, only the promise that signal is being called on. We aren't defining a primitive, we are defining a signal that can be called on that platform to cancel that promise.

MM: Thanks for the example I get it.

BFS: Are we talking about adding this to all promises?

RBN: This doesn't give you the capability to cancel any operation, it only gives you the chance to cancel the operation for the promise with the signal.

MM: Once the `then` is cancelled, what happens to the promise it returned?

RBN: The promise would be rejected.

YK: Not with the particular intent to block. What usually happens is that people come up with various primitives that are good. But to add an extra parameter to with a signal to handle is it is cancelled. Basically we may end up creating a "house-of-cards" where everyone creates async functions to handle the various possible outcomes.

RBN: This is already a defacto pattern that other libraries are using to handle cancellations of promises. I don't see how this precludes other methods for handling cancellations. I believe that we we add to this over time.

DD: Nobody has done the work.

YK: I have done some of the work.

RBN: Maybe we can discuss this offline.

YK: Maybe I should put this [my thoughts] on the agenda.

DD: ??

YK: ??

RBN: I'm not asking for stage advancement. I can

MM: Is this already stage 1?

RBN: At a meeting last year we put forth a similar and more restrictive proposal.

MM: I don't want this proposal to ride on the back of that restrictive proposal.

JHD: This achieved stage 1 at the July 2017 meeting.

AWB: Everywhere else we add one of these proposals, we have a concrete use of it in the spec.

RBN: That's why I'm not looking for stage 2 yet. Need to work on motivating use cases in the spec.

RE: I'm not hearing objection to this direction.

#### Conclusion/Resolution

- Keep exploring this
- Will develop the spec text for ECMAScript and WHATWG
- Need motivating use cases for the spec


## Partial Application

(Ron Buckton)

- [proposal](https://github.com/tc39/proposal-partial-application)
- [slides](https://docs.google.com/presentation/d/1XBZOJFHuy8Ig9hdUiqKfVleAHMVYs_8KT5G4bwGh0XM/edit#slide=id.p)

RBN: Provides syntactic alternative to Function.p.bind. Allows you to fix any argument to any position. Fixes the context reference of the method.

This proposal is to fix arguments in and position as well as fix the "this" receiver. Explicit non-fixed arguments are passed as extra arguments. The proposal as it stands is to use the `?` token as argument placeholders, which indicates a new argument in the resulting function.

This results in a "partially applied functions" with arguments for each of these placeholders. Are considering ellipses "..." for rest/spread placeholders. Also positions placeholders, e.g. `?0`, `?1?`, ...

Changes since from the previous proposal, eager evaluation for all arguments with the placeholders filled in when the actually function is called. The `?` token is NOT a function. Dropped support for ellipses (`...`), but will likely reintroduce. Also disallow use with `new`, but may reopen later.

JHD: Does this allow for method extraction? If I reference something on Array.prototype, is that "fixed" at the time of partial application?

RBN: No; that would require a new reference type, which I'm hesitant to introduce.

JHD: That means that this proposal does not support method extraction.

RBN:

JHD: One of my objections with pipeline operator is that it might kill the bind operator. I hope we have some plan for method extraction.

RBN:

DRR: Question about the template example...that's not a tagged template, right? Does that require double-parsing?

RBN: No, but it would work the same with a tagged template too. The idea is that it returns a function, not another template.

TST: Not sure if you answered this... if you call button.onclick, it's called with the original receiver. Wouldn't that be the method extraction case?

RBN: No, because the lookup of `onClick` happens when the returned function is evaluated.

TST: It seems like if you have a function like ???

RBN: This is based currently on the spec, which uses the reference type in both cases. this.b is a value; the method evaluation case is a reference.

TST: My concern is that in one case, it's capturing the implicit `this` argument, and in the other case it's capturing the argument, and you need to scan forward and backward to understand which case it is.

RBN: In the spec, for a call expression, we evaluate the expression and return a reference type. It has a this value in it. When we do the call, we evaluate the reference to get the value. The __ that gets created most likely has a slot that keeps track of what the __ is.

AWB: What exactly are you capturing when you capture the "this"?  Is this a function reference or a function value?

RBN: This is a stage 1 proposal. We still have to determine the semantics for handling whether or not we capture a reference.

RBN: Let me finish presenting these slides. (presents slides, continuing with "Garden Path" slide)

RBN: There are concerns for using `?` for the token given that other proposals like optional chaining and null coalesce are considering the same token. After review, I still feel that this is the best token and other precedents seem to support the use of the same token in multiple uses.

RBN: not looking for advancement; it has to do with pipelines. As we discussed, pipelines are easily explained. (gives example for why pipelines are easy to explain)  I think this is a useful and power feature on its own.

DH: We have in some sense the core disagreement that I have is from your Garden Path slide. In that the motivation for this feature justifies the complexity for this feature. We already have a concise lambda syntax. The level of improvement provided by this feature isn't clear to me. I just look at your example slide and I am just confused. It is hard for me to believe that there aren't hard pedological cost for this, and similarly for pipelines. That for me is the thing to get past. It seems to me that all these syntax proposals that they add significant cognitive load with little apparent benefit.

DH: One more thing: with syntax proposals with this, please provide A/B comparisons when showing example code.

RBN: On the proposal repo there are A/B comparisons, just not in the slides. This provides significant expressiveness gains, especially when combined with pipelines. This would enhance JS's suitability for functional programming. We've been expanding the expressiveness of the OO programming model; partial application and pipelines bring similarly powerful expressivity. In particular, to the point of arrow functions as an alternative, arrow functions do not work well with pipelines: lots of extra parentheses, other corner cases.

DH: I think for me, maybe I should spend time on your repro. I agree, this is a multiparadigm language (both functional and OO). I think there is room for more syntax, like I proposed yesterday. But I think we want to pick syntaxes that have a "good cognitive/pedagogical cost" to benefit ratio. Is this general enough, or is it syntactic sugar?  Not every functional language is super operator happy.

RBN: I'll eventually be able to have some more compelling examples. I'm working on a branch of the TypeScript compiler where I've made use of these features to improve the readability of some code involving lots of nested functions.

BE: I agree, separating from pipeline is a good approach, but we should be careful about "horse before the cart". We should be super careful about adding new syntax. It doesn't say we shouldn't do pipelines; it seems to me that we should just make this a dependency on pipelines.

DRR: I've enjoyed using this feature in other languages. It may be helpful to come up with more examples where this feature is useful; we can take that offline.

WH: I'm kinda on the fence about this. When the other arguments were delayed, the garden path problem was overwhelming. With eager evaluation, this is better than what the proposal used to be. However, I haven't convinced myself that the syntax is workable due to unwelcome interactions with the async arrow function cover grammar.

WH: As the proposal currently stands, templates can have only one `?` placeholder and it must be in the second position.

RBN: This is still very early, the spec should not be read as complete. The idea is that for any placeholder position in the template, you can put a `?`.

WH: What does it do for tags/templates?

RBN: It becomes the remaining arguments, made optional via the placeholder.

WH: I find `?` rather unwelcome in templates. I can see the argument for having this in function calls, but in templates it seems like an unnecessary burden on the language.

RBN: I added templates because I found some use-cases for it, and because templates are another kind of call, and not having partial application supported seemed to be an odd omission.

WH: In a long template it will be hard to see the `?`, so you have much more of a "garden path" problem. I would not support `?` there.

RBN: If there are strong objections I can reconsider.

MM:  We need to remember that JavaScript is pretty unique as languages go. In that the wide variety of experience that people approach the language. It's a lot of people's first language. The more code looks like "punctuation soup", the less likely people are going to be able to learn the language by reading code. This exceeds proposal exceeds complexity budget of the language. This blows the learnability of the language... I can't imagine seeing this proposal go to stage 2, so I recommend that we drop it.

KS: I'm in agreement with what BE, WH and MM have said. Maybe this is an issue with pieplines. We need to talk about that in conjunction with pipelines.

YK: I guess I'm repeating a lot of what other people have said. So I think, GCN made this point before, the second-to-last example is just an object literal (??)  So what I want to say is, these disallowed syntax don't need to be disallowed (outside of?) pipelines, so we probably want to restrict this disallowment to pipelines if we do it at all.

RBN: The only thing I'll say to that is that if you have a concern with the mental model for spread, then you have an issue with spread in arrays.

SYG: I feel that this does not stand alone outside of pipelines. I have strong reservations about adding closures all over the place for memory use. I don't think it's good for performance.

RBN: I don;t think this will have any performance implications compared to arrow functions.

SYG: Right, but it's the ease with which you can allocate many many closures.

JRL: So underscore and lodash added this; _.bind, _.partial, etc. The usecases we found frequently were passing these bound functions to _.map or _.forEach. So it just lasts as long as the iteration happens. But it makes it much easier to pass a parameter into an individual slot. So if you need to set the first parameter of _.map to the function, it makes it a lot easier than writing the arrow function itself.

RBN: In an earlier presentation, when I originally proposed this, with [].forEach(console.log), you get lots of things you don't want. With this, you can pass in only the argument you want. Yes, you can do it with arrow functions, but pipeline motivates the addition since arrows do not play well with pipeline. We originally split this off from pipeline, but there's been discussion of bringing them together.

#### Conclusion/Resolution

- Not advancing


## Updates on First-class Protocols

(Michael Ficarra)

- [proposal](https://github.com/michaelficarra/proposal-first-class-protocols)
- [slides](https://docs.google.com/presentation/d/1HnxJl4Iodf3I23e-ZDkw4F1LEkMRGUBFq6xxR0a9a_k/edit?usp=sharing)


MF: First thing: don't bikeshed syntax. The syntax in these slides is purposefully verbose, it is not final.

MF: (presenting slides)

WH: How are the protocols named?

MF: They're symbols, they can be referred to by ProtocolName.fieldName. (continues presenting)

JHD: Since this was a recap, and since you mentioned a simple thing, it seems like even though you were using string names in all the examples, that's sugar for Symbols with those names?

MF: That's right.

DRR: You were using an `implements` operator, why does this need its own operator, could you use `Symbol.hasInstance` to configure the use of `instanceof` instead?

MF: That's definitely a possibility, though it might be confusing.

JHD: `Protocol.implement` requires that the first argument has all the right fields?

MF: That's right. And it uses Get, not GetOwnProperty. (continues presenting)

MF: Previous committee feedback was that you might have two instances of a protocol with, e.g., very different performance characteristics. The response to this is to add "implementation for" in a protocol definition, or "implements protocol" in a class definition, which encourages instances to be consistent. If one sticks to these two forms, instance coherence is guaranteed.

MF: More committee feedback: string-named required fields aren't supported. The response is to allow string literals in protocol definitions to represent string-named required fields. (slides)

DH: You said the string literal makes it a required string, whereas the normal case is a symbol?

MF: Yes

MF: More committee feedback: relationship to the Mixins proposal. Mixins, in my opinion, is very simple syntax sugar (see slides). They seem to be antithetical to composition, since two mixins which use the same method names collide, whereas protocols' use of symbols allows protocols to use the same "name" (which are symbols) and be used together (see slide).

MF: Relationship to decorators (slide). Questions?

DRR: If you're familiar with protocols in Haskell, there's a problem where you can have two implementations of a protocol for the same type. Example: applicative. Sometimes you want them to zip, and sometimes you want the cartesian product. It seems in this proposal, the protocols are inherited.

MF: Protocols here have the same problems. To work around this, newtype it.

DRR: Haskell newtypes have zero overhead.

MF: Yes, in JS they would have to be lightweight wrappers. You'd have to wrap in something like Product or Sum. I'll look into what can be done about that.

BFS: We didn't talk about this now, but how about cross-realm protocols. I think it's partially solved by the constructor where you can dynamically construct a protocol and shared the symbols. Sometimes you get to a situation where you have some level of isolation, such as being in a different worker thread, and you want to be sure protocol uses the same symbol in two threads. You can use Symbol.for in different realms and share these keys. It doesn't seem readily apparent how you can do that with the syntactic form of this. I just wanted to express appreciation for this constructor (see "Protocol Constructor" slide).

MF: Great. Yeah, the Protocol constructor allows you to pass in the Symbol to use for each field.

JHD: So all that I've seen is that I can enforce the presence of a property. It doesn't appear that I can enforce that something is a getter, a function or a string. So how do I do that?

MF: There's an open issue on the proposal. Someone wanted to do a much more in-depth type-checking on the field. Right now it just checks for existence in the prototype chain. They wanted to check that it's a function, that the function has a certain `length`, etc. I'm not sure how that would work, but it's something I'd like to explore.

JHD: I would like to be able to represent array-likes

MF: List all of your use cases and issues in the issue tracker.

YK: Earlier you talked about Mixins, but I couldn't tell if you meant "there's no conflict with Mixins" or "we shouldn't do Mixins".

MF: So I looked at it and I don't think that the overlap is significant. They are string based and are not conflicting. They don't compose very well and I see them as a distinct feature.

YK: I think what you're saying is we could have both this and the mixin feature.

MF: Yes, I think I'm saying that.

YK: I think what you're saying when you say "don't compose well" is that they need to be created with knowledge of each other.

MF: Yes, they need to know about the context in which they are going to be used. It constrains the available names.

YK: That doesn't mean they don't compose, just that there are restrictions about when they compose well.

MF: Agreed.

DRR: Other languages that have features like this (traits, type classes) usually have some static type information.

MF: The static information is usually used for resolution. So you'll see examples like [referred to slide]. In languages without type systems, either you have to manually carry records around or disambiguate at call sites.

DRR: I think what I'm saying is that in other languages that resolution is carried around implicitly. But here you need to name the protocol everywhere. That's one of the concerns.

MF: If you look at my previous presentation, I did lay out that this is a downside of this proposal. I also suggested some remedies, such as making a scoped symbol to refer to things, like creating a local "map" function that passes its arguments to the "ProtocolName.map" method.

DRR: So is that like destructuring the protocol or something like that.

MF: Yeah that is another one of the examples listed.

DRR: This proposal seems to address that some of the things that enums could do, that is, unique values on a single record that are known and that you can access. A set of well-known unique variables in a single place (I think Ron Buckton is working on it). This is just some feedback, we can chat afterwards.

DH: This is related to what you guys were talking about. This is a good exploration so far. One piece of feedback is on the heaviness of the references. Along the lines of your trick of using a local scope, I played with this years ago during the earliest work on Symbols. I looked at whether there was some way to scope a symbol so that there was a short way to refer to it locally, e.g., saying `symbol foo` then if you said `x.foo` you were referring to the symbol. It didn't really fly due to spooky action at a distance, but it was an interesting thought experiment. What I liked about it is that it didn't feel like you were adding to the syntax budget; it deals with a thing everyone already understands ("scope") and then changes the behavior of a certain name within a scope.

MF: It's like the bind operator. But I really do hope to avoid adding any new calling pattern. And I do hope that this is a feature not everyone has to learn.

JRL: So I'm just thinking of hypotheticals. At some future point we might have methods or data that I don't want to expose to everyone who implements my protocol. So maybe I could slap private methods on the protocols. But then we hit issues with copying data over to implementers. So have you thought about adding a way to make the protocols have members that don't get copied?

MF: Are you talking about the protocol having its own private state/private methods? Or are you talking about the protocol accessing the private state of the class that's implementing it?

JRL: The protocol having its own private state.

MF: I would like to look into the use cases. I'm a bit skeptical but I'm happy to look at examples.

DD: I opened an issue on this, and you closed it already.

MF: Oh, good, I will take a look.

WH: A question for the room: Are we planning on putting both this and mixins together in the language?

AWB: I don't think there's budget for both.

WH: Yeah, that's my concern. I think there's room for at most one of those. Having both in the language will lead to hierarchy wars. Since the intersection of their use cases is large, half of the developers will use one, the other half will use the other, and it will create a lot of friction at the boundaries, using protocols from mixins and using mixins from protocols. We need to ask ourselves, between protocols and mixins, which do we prefer, if any?

YK: That was basically the context of my question earlier. I don't really want to ask, "should we do both?" because I know someone will object. So what is the process for figuring out if we can do both? And if we can't, how do we choose one?

MF: I don't know if they are actually mutually exclusive.

YK: I'm asking this question, but we keep on shutting it down. I believe that we have to.

BFS: I want to make a stronger claim, that this and mixins can interoperate in a good way. So the idea of mixins is a factory for abstract classes of sorts. I don't think protocols are built for inheritance. So I don't think these overlap. I think mixins could in theory support symbol-based fields. I would rather see this and mixins cross-pollinate rather than hit each other head-to-head.

DD: One take on this proposal is that it is proposing three separate things:

1. It is a partial class feature.
2. Symbol based properties in a simple way.
3. It has a shallow type checking feature.


I think that this should be split into 3 separate proposals and maybe add some of these components into the Mixins proposal.

MF: I would think that the parts of this proposal, together, create a complete feature. I don't think I would want to pursue them separately.

BFS: I agree with MF that these are not separate feature, they are interleaved. I see this as complementary with mixins.

AWB: I had several things under the title "costs & benefits". There was a question a few minutes ago, "how do you reconcile these proposals?" My suggestion would be to tell the champions "these have too much overlap, go work that out", and that might result in a proposal that incorporates parts of both.

AWB: Now, cost and benefits. If we take mixins out of the picture, it seems like what we're left is a lot of syntax that determines whether a class has a certain set of methods. It seems like a lot of cost for that ability. There are certainly situations... and that's a poor man's dynamic type system, and good for people who like duck typing... there are situations where that might be useful, but it's not clear that there are *lots* of situations. You agree you shouldn't be doing this (a protocol check) on every argument being passed to a function. Just like you wouldn't do an instanceof check. Cumulatively it's very expensive. There are interface boundaries where you might want to do that. You're repeatedly checking things over and over again. Anyone who's ever worked with dynamic languages, this is what they've discovered. Some people do it everywhere.

BFS: Can I get clarification, when are you doing that `implements` check?

MF: You would want this at interface boundaries where you don't know what you're getting. You should normally know the thing you're getting.

AWB: But you have to consider how folks will use this, not just the intended use.

SFC: I don't have too much to add over what's been said, but I like how you've created a way to get a string name for a Symbol. I agree that there are nice ways for the two proposals (mixins and protocols) to interoperate, and I encourage you to work closely together offline.

AK: I think that the fact that mixins are mostly syntactic sugar speaks well for the mixins proposal. Whereas protocols adds both a bunch of syntax and a bunch of behavior. So I'm weighing that when thinking about whether to have one, the other, or both of these features in the language.

YK: AWB is talking about the performance. Do you think that it is very important that someone who doesn't say "implements" that we should still do a protocol check?

MF: Yeah, I think that you want to have the ability to verify that the object is of the same brand. I expect that we can optimize this. Not that we have to do a brand check but we could.

TST: This is not so much an argument for protocols vs. mixins (I'm neutral on that). I do think it should be possible to optimize the implementation to the point that you could use it frequently. At the point you call implements, you mark that this has all the functions implemented. So it should allow you to pretty efficiently implement these checks.

JRL: Some people in IRC are claiming that mixins seems to be following a cowpath and protocols seems to be trying to encourage greater usage of a less common pattern. I think they're similar enough that we can't say one is following a cowpath and one is not.

MF: I think they're both following slightly different cowpaths. The reason we don't see as much adoption of Symbol-based protocols outside of spec internals is probably due to symbols being a relatively new feature. Additionally, we don't have a convenient pattern-enforcing mechanism in the language like protocols.


#### Conclusion/Resolution

- Not advancing
- MF will work with the champion of the mixins proposal to synergize



## Revisit `global` name

(Jordan Harband)

JHD: MM has withdrawn his objections, so I'd like to ask again about getting consensus on the name I proposed yesterday. Okay, seems like no objections. I'd ask that some browser push forward with this.

#### Conclusion/Resolution

- Stage 3 holds
- Redacted name presented yesterday is the new name in the `global` proposal
- Request for implementers to ship quickly, tacit agreement
