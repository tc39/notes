# January 30, 2019 Meeting Notes
-----
Bradley Farias (BFS), Aki Rose (AKI), Yulia Startsev (YSV), Mariko Kosaka (MKA), Shane Carr (SFC), Richard Gibson (RGN), Brian Terlson (BT), Michael Ficarra (MF), Kevin Gibbons (KG), Kevin Smith (KS), Justin Ridgewell (JRL), Mathias Bynens (MB), Sathya Gunasekaran (SGN), Chip Morningstar (CM), Peter Hoddie (PHE), Waldemar Horwat (WH), Leo Balter (LEO), Shu-yu Guo (SYG), Michael Saboff (MLS), Mattijs Hoitink (MHK), Yehuda Katz (YK), Till Schneidereit (TST), Pieter Ouwerkerk (POK), Tom Dale (TDE), Myles Borins (MBS), Sean Larkin (SLN), Godfrey Chan (GCN), Rick Markins (RMS), Daniel Rosenwasser (DRR), Mark Miller (MM), Lin Clark (LCK)


Remote:
István Sebestyén (IS), John-David Dalton (JDD), Adam Klein (AK), Daniel Ehrenberg (DE), Jordan Harband (JHD), Domenic Denicola (DD), Ben Newman (BN), Ross Kirsling (RKG), Frank Tang (FYT), Jory Burson (JBN), Conrad Watt (CWT), Guy Bedford (GB), Justin Fagnani (JFI), Robert Pamely (RPY)
-----


## Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/01.md)

## Amending the memory model to support ARMv8 LDA/STL codegen

(Shu-yu Guo and Conrad Watt)

- [slides](https://docs.google.com/presentation/d/1qif7z-Y8C-nvJM20UNJQzAKJgLN4wmXS_5NN2Wgipb4/edit)

(SYG presents slides)

WH: (After asking to repeat an explanation on one of the slides) I wish you had posted the proposal's contents earlier than this morning. There is a lot to think about here and it's hard to do this in real time at the meeting.

(WH and SYG have a detailed discussion of the memory model on Slide 8)

WH: (In response to a question) Yes, this is allowing one-way movement of nonatomics across atomic loads and stores, like the acquire/release semantics familiar to C++.

YK: Does all this mean that current implementations of JavaScript are not spec-compliant?

SYG: Pedantically it means V8 is not spec-compliant on ARM.

(SYG continues presenting slides)

SYG: We're not presenting the proposed new memory model at this time. We'll work it out after the meeting with the interested parties. We're also waiting on a proof of sequential consistency for data-race-free programs in the proposed memory model.

CWT: We already have that proof. We're currently working to prove the correctness of the compilation of atomics in the new model to ARM's LDA/STL.

WH: So you also have a formal model of the ARM atomics?

CWT: Yes.

WH: Sounds good!

SYG: Does this sound like consensus? To the implementers in the room, does this sound good?

SGN: I need to look at what this means for V8.

SYG: V8 already has this behavior; this change makes V8 spec-compliant.

CWT: The JavaScript codegen in V8 has inefficiencies that are hard to see experimentally. It is observable through WebAssembly, and it's almost observable through pure JS. SpiderMonkey and JSC are in a similar situation.

#### Conclusion/Resolution

- Consensus on making the memory model change. Details and implementation to be worked out by SYG and CWT with WH and any other interested parties.


## Dynamic Modules Layering

(Guy Bedford and Bradley Farias)

- [PR](https://github.com/tc39/ecma262/pull/1306)

BFS: There is one specific thing where a Dynamic module can return null, which was never possible if CommonJS used a Source Text Module. This PR deals with the case of empty source-text modules. In order to understand what a commonJS module exports, we have to instantiate it, which is why we have the null. People were concerned if this could exist in pure source-text module graphs, and it does not. If you have a pure source-text graph, you will not encounter any changes in behavior. The conditionals are dealing with, if it's null, handle it later.

BFS: Some people are arguing we should not change source-text modules at all, especially not to weaken the static guarantees. We could alternatively create an additional class of modules, outside the JavaScript spec and instead into a web spec. I am advocating we do it here because it would not affect any graph that is pure source-text.

BFS: I do think it is valuable to have source text module record in the JS spec. Unlike other module records, which are based on other types of parsing, we've been evolving the syntax around these constructs, so my hope is that we can modify the source text module record (STMR) here.

GB: In the November meeting, there was a question about export*. Davis said that if we have export* support, it might provide a "spilling over" of the reduction in the guarantees of the bindings into source text on the interface where you have the two module formats interacting. So you would inherit the weaker behavior.

YK: In the last meeting we discussed the merits of the relative static weakening. I am comfortable with the outcome here.

AK: You mentioned one of the options is for Node to use something other than STMR for its modules. What is the downside of that option?

BFS: One of the problems with that, is to introduce any module type with null, STMRs would still need to account for this in the environment.

AK: I think one approach is to say, you just don't use STMR in Node.

BFS: Even if we do that—even if we don't do it by default—they still need to account for the null case.

AK: So you're talking about people using Module records directly instead of using a higher-level Node API?

BFS: They have access to the C++ APIs.

AK: There are plenty of things you can do in the V8 API that break Node or break the web if you get it into the browser. Do you think it's likely for people to use the module API directly?

BFS: I do not think. If our module record is insufficient for Node, how do people feel about removing it from the spec, since it is not satisfying a decent-sized portion of host usage.

YK: What does it mean exactly that it doesn't work for node?

GB: We have a current implementation which builds off the V8 Modules implementation. Originally, I was attempting to fully separate it as its own module record type. Because of the closeness of the code dealing with the parser and the source text module, it ended up being a very close implementation.

YK: Are you saying that if ES6 modules, ESM modules, aren't STMRs or can't be STMRs?

BFS: If we allow named imports from CommonJS, you cannot currently account for this case.

YK: I think I agree that if the only way to get modules in Node is to not use STMRs, that seems wrong.

AK: That's actually the behavior. Things will happen differently in the web environment than in Node.

BFS: To be clear Adam, are you saying that V8 won't be able to support this behavior? (?)

AK: I think this has nothing to do with the V8 implementation. There's behavior you can't get if you can load modules in a dynamic environment. There's things that cannot happen with STMRs.

YK: Would that theoretical person... I think Guy and I agree, we just want to avoid a fork from Node.

AK: I could buy some nonnormative nodes say these deal with module records that have such and such behavior. DD has some opinions on this but wasn't able to join, so I'm trying to advocate on his behalf.

AK: V8 already implements stuff that's not in the spec. Structured clone, etc., and it also implements stuff Node-specific.

YK: That isn't really the problem. Perhaps we can go to the queue since we're arguing back and forth.

TST: We had a conversation about how Node integrates its modules a while ago. To me it seems, without more explanation, the weakening of the semantics of ES modules as implemented in browsers, where we say "don't do that" in browser environments, I'm uncomfortable with that as a solution. It's possible that is the only solution for mapping these environments.

BFS: To be clear are you OK with browsers introducing new module record types that use the same branches?

TST: I'm afraid of the spec saying things that are allowed, but we won't actually do that in browsers. If we want to have differences in code environments, then it would be better to have a spec that explicitly says that.

BFS: The follow up question, if we modify abstract module records, such as things like its return types expand, would that be prohibited as well?

TST: I'm not fully up to speed on this PR, but based on what I know, (indecipherable.)

BFS: OK, so it seems like we have some people who don't want to change the semantics of source-text module records or abstract module records.

DE: I don't see why you would need to fix Abstract Module Record (AMR).

BFS: AMR can export a list, not null right now.

YK: The problem with forking the spec is that it opens the door for each side to change each side of the spec without talking to each other. We don't want Node to have a whole different version of the STMR spec.

AK: To answer that question, aren't we already talking about introducing a new record type for this?

YK: That's for CJS modules. It makes sense that they'd have to introduce something for modules that are not interoperable.

AK: Sure, but you can imagine making changes like this that have effects on CJS modules and AMR.

YK: I agree, but the real question is whether we think it's good for them to make those divergences, or whether we think they should work through the committee.

DE: Switching from talking about this layering to discussing what we think about this proposal. Node is very important in the JS community—from internet of things devices to browser tooling. What do we think of Node adopting this? Can we discuss whether they think this is a good path for Node or not?

DRR: If there is a different preference over the current approach, the people working on this want to know specifically what that is. We need to know what the limitations are and what's forbidden or not. Interop is crucial. If there is a problem with layering, what is the alternative?

DE: My motivation for asking this question, is whether putting this outside the spec, it doesn't really say whether we think this proposal is good or not.

TST: I agree that this is the much more crucial question here. And I have some concerns about it. If this is used judiciously to make the module system between browsers and Node interoperable and nothing else, that seems fine. However, it seems more likely that this could infect ES Modules and weaken ESM in the browser going forward. We might potentially admit the semantics simply aren't worth doing.

BFS: People using WebPack, Babel, etc. because these are weaker semantics that they are using, this is not likely to cause a big impact. Even if our desire is to have these strong semantics, and those are preserved in STMRs, and if the committee say they should _only_ be used in this specific interop exception, I think that is better than rejecting this proposal. So, when we're talking about adopting these semantics, is Node trying to meet the user's expectations?

YK: The existing way people achieve CJS interop is through compilation, which is really weak. The tools are extremely interested in stronger interop mode that still satisfies the needs of interop. Given source text modules in their native state it doesn't apply, so we should discuss how we interact with dynamic modules in interop mode.

DE: I'm wondering how this relates to the webspec world to make it more practical to ship native ES6 modules on the web without being compiled down. If this works in Node but not on the web without being compiled down, we need to think about the ecosystem.

BFS: People are already very tied to compilers on the web, so this is a very complex question.

TDE: If there's any chance that the browsers would have implemented a weaker system of modules, they would have simply used CommonJS. I think this adds a very small amount of complexity and it's worth it for interop.

YK: In terms of what is likely to happen on the web, peoples' compilers will compile down CJS modules into some output that works the same way as whatever Node says.

JDD: If the standards body is open to allowing the weakening of source text modules, it would be great to revisit the export* case.

GB: At the previous meeting we discussed this as well. Upon further investigation, there were other edge cases that were missed. Like multiple export* statements, we don't know which one is the one we're after. There is currently a path to solve that export* case, but there isn't actually a path forward.

JDD: There is actually a path forward.

TST: It's only the case if it doesn't weaken the module in unfortunate ways

Ben Newman: If this proposal is adopted, is there any chance Node would ship an implementation of dynamic modules that forbids `export * from "cjs"`? I would want to avoid that outcome, and have misgivings about this proposal if it implies that limitation. You could imagine a more limited interop story where CJS modules export only a `default` object, and then compilers could use the default object to support named imports. Comparing that (limited interop + compiler support) option to a "more complete" interop story where `export * from "cjs"` is missing, I'm not sure the almost-complete approach is really better, because I worry it will teach developers to avoid `export * from ...` entirely.

BST: To clarify: You are not in favor of this proposal, and would rather we take a different approach to deal with this incompleteness?

Ben Newman: I realize discussions have been happening about this in breakout groups and the Modules Working Group. I would like to bring those discussions onto the TC39 record, specifically regarding whether `export * from "cjs"` will be forbidden.

YK: I don't think TC39 is responsible for how Node designs the interop story.

BFS: We can't really determine that here.

Ben Newman: Does this become a question about the stage this proposal is at, and what sort of further research we are planning to do?

AKI: Short answer no, long answer maybe. But we should discuss this at a later time. We have to move on.

#### Conclusion/Resolution

- No conclusion could be reached.
- Further discussion to be scheduled.


## Promise.allSettled

Mathias Bynens

- [proposal](https://github.com/tc39/proposal-promise-allSettled)
- [slides](https://docs.google.com/presentation/d/1fWK9kMsvn2o66Lk6QUw3yITEfsE87yjZdTngoLTsUQ0/edit#slide=id.g41da6c5107_0_0)

(Presents slides)

WH: `Promise.allSettled` sounds good.

WH: To clarify, the proposal is to return an array whose elements are objects whose fields are either `{ status, reason }` or { status, value }`?

MB: Correct. Well, it returns a promise that resolves with an array whose elements are such objects.

WH: What are the things that can be returned by this `status` property?

MB: The strings `"fulfilled"` and `"rejected"`. It seems easier to understand and explicit to have these strings than booleans. It seems like we have consensus to move forward with this proposal?

YSV: If someone isn't very familiar with how this works, they might not have seen the error case, it would be difficult to understand without these clear error cases.

DD: I think our experience in existing promise libraries, debugging this has been hard. The idea of taking multiple promises and condensing them into one channel has not been a good debugging story.

MB: Thanks to Jason Williams & Robert Pamely for writing the initial spec text. I'd like to ask for Stage 2 now.

YK: RSVP added this feature in 2013. So I think it's a slam dunk.

RBN: If the concern was that there would be branching logic, I don't know why we'd need to have a separate property for `reason`.

DD: The key distinction is the difference between exception vs. not.

RBN: But we also have a distinction between `yield` and `return`.

DD: But that's a much less significant distinction than error and not.

TST: I think "done" is fundamental, you cannot miss it. Processing an array of "done" values for Promise.allSettled, is very easy to get wrong, so nothing forces you to check results here, but if they're encoded differently that helps a lot.

RBN: My concerns were more about polymorphism/monomorphism with respect to destructuring. My concern is really minor, it's not something that would block Stage 2 in my opinion.

RGN: I'm wondering how we think about compatibility with `Promise` subclasses.

MB: Let's discuss that in a GH issue post-stage 2.

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers:
  - DD
  - YSV
  - RGN


## Decorators for Stage 3

(Daniel Ehrenberg)

- [slides](https://docs.google.com/presentation/d/1Frdz3xTJBVGLlZeJEuM0hV_EyV97IJg-ny0DPgtuwHM/edit)
- [proposal](https://github.com/tc39/proposal-decorators/)

DE: Many people have suggested that the lack of decorators is an obstacle preventing adoption of JavaScript. (Presents slides).

WH: What's the difference between `false || true` and `true || false` on the previous slide?

DE: Nothing. We can go and clean that up later. (Continues to present slides).

BFS: MM had an object toward including private names that gave decorators the ability to overwrite a class and replace a class in toString. MM does not like giving evaluators private state.

DE: There's a lot of use cases for modification constructs. We have a lot of such constructs today, and we'd like to consider using decorator-like constructs for those.

DE: There are some finer issues, like sloppy mode tweak. (continues presentation from Slide 8.)

WH: I want to understand the resolution. If you define a class `C` and if anywhere within that class you refer to `C`, it refers to the undecorated class?

DE: Only if you have a decorator that adds a replacer, that overwrites the entire class, then you get the class before it was replaced. The problem is that the static initializer has to be before the finisher runs because static fields have to be added, etc. But inside methods, which run after the finisher, then you get the decorated class.

RBN: We are kind-of forced into this situation (refers to the issues linked in the slides).

WH: You say it's due to ordering, but in the `clone` method example the `clone` method runs well after the definition of class `C` completely finishes. How would it see the undecorated version of `C`, since it's already been replaced?

DE: There is an inner binding of `C` that shadows the outer, replaced version of `C` with an inner, unreplaced version of `C`.

(DE continues presenting from Slide 11.)

DE: Do we have support for Stage 3?

WH: For the sloppy mode tweak, why not make all decorators be strict mode, even if they're in sloppy contexts?

DE: The reason not to make all decorators in strict mode is because we may want to add class or function decorators, which shouldn't take what they own and move it into strict mode. If we wanted an object decorator to be evaluated in sloppy mode, we'd have to look ahead. The alternative would be to say class and function decorators are in strict mode.

WH: I agree we don't want strict/non-strict based on lookahead. But the question was, why not make decorators be like classes so they're always strict even when embedded in a non-strict context?

DE: I don't have particular concerns about that. My concerns were about the expectation that function decorators are in sloppy mode.

YK: In the class context, decorators are expected to be strict. It would even be possible when we get down to decorators that it could be an opt-in for strict. I basically favor WH's point.

JHD: Since we've generally tried to go with "if possible, new code should be strict", since this is new syntax, is there a reason it would be weird to have a decorator on a class, which is strict, have a decorator that is strict?

DE: I'm fine with that. Let's follow up on the issue tracker.

YK: The policy generally is to avoid micromodes a lot, and we decorators are a big enough mental switch.

DRR: For feedback that we've heard from other room proctors, one of the things you've said is that exports (?) go directly before the decorator. I think we can continue to elicit more feedback from users.

DE: Angular has been concerned about keeping compatibility in this sense. There are new people who come in and think exports shouldn't come before decorators. I'm certainly sympathetic with export being part of the decoration. Ultimately most people think getting it standardized is more important than arguing about ordering for longer amounts of time.

TDE: I like decorators before exports personally, but given the body of evidence, and since people just look at documentation, the cost of this dragging standardization on is costly.

DRR: In the interest of expediting, the users are making a concession. Keep that in mind.

WH: I don't think this is the right time to relitigate this. Blanket statements about users being on a given side are inaccurate.

DE: There are clearly people inside and outside of the committee who prefer each ordering. Ultimately it's not a situation where there's really strong consensus. Note there are additional changes to the syntax since the May 2016 Munich TC39 meeting, but export before decorator has been that way since back then.

DRR: Having spoken to authors of libraries like Angular, etc., we would have preferred it this way, we would like to understand why. People assume there's some syntax constraint.

DE: I regret it if people feel their viewpoints are not being considered. We've had a lot of discussions to consider all viewpoints.

DRR: I'm fine moving on to other topics.

MLS: I'm not in favor of moving this to Stage 3. We had an internal discussion among programmers who use decorators in their work. The consensus was that this proposal is too complex. That complexity hurts the proposal in several different ways. First, it makes the proposal too hard to use. Decorators are like a swiss army knife. I think this complexity may make this lack adoption, except among hardcore framework authors. The complexity could also make it harder to implement efficiently. I think we need to make sure the proposal is friendly to tooling, but that is not part of this proposal. The complexity goes beyond where the common use cases are for this proposal. To restate, I am in favor of decorators, but I am not in favor of this proposal because the complexity makes it hard for both programmers and implementers.

DE: Can you elaborate what people thought was too complex?

MLS: There have been features that have been added, like the whole initializer thing, that go beyond the general use cases of the people I talk to who are using decorators regularly.

DE: Initializers were important for frameworks to be able to upgrade from what they were doing before. (Gives an example about Set.)  Now that we have Define semantics, we need a way to insert an extra callback that gets run right after super returns. YK was pushing back against this for awhile, because it doesn't involve a syntactic element, but framework authors, like Polymer, MobX (?), etc., were coming back saying they needed it.

JFI: I found in practice that decorators tend to do one thing. I found using it was straightforward with this change. The decorator returning a static description is actually tooling friendly.

MLS: One more thing about complexity. You can completely replace a class and have decorators on methods and classes. When does the class get replaced or not?  Do you see the decorated or undecorated class?  Those semantic on timing seem very confusing, much more than originally.

DE: That's interesting. There are some things that run before initialization. It's been that way for a while.

TDE: You said you talked to people about decorators; who were they?

MLS: Developers within Apple who use decorators. One surprising comment was someone who uses decorators but doesn't like this proposal.

DE: I'd like to talk with that person offline.

WH: I agree this is complex. I'm just trying to understand MLS's position of wanting decorators but not with the current complexity. Is there something concrete or actionable you'd like to see changed?

MLS: We'll discuss this within Apple.

KS: I am also sympathetic with the concern on complexity. I think some people who are more closely involved with the proposal are cognisant that the complexity of the feature has continued to grow over time, even very recent history. Complexity by itself is not a problem, but it begs the question, why does this feature need so much complexity and increase in scope?  What this proposal is trying to do is trying to chase macros and a general purpose syntactic utility. That seems like a noble goal; being able to abstract over syntax is good. Many language have done it. But I wonder whether, if this is a general-purpose syntactic abstraction feature for JS, is that the macro feature that we want, and the macro feature that we want to be stuck with?  Does it work for the rest of the language, or is it just limited to classes?  We have talked about how it extends to functions or object literals, and there are potential problems with that. I fear that by the time we reach the end of the road, we won't like this macro feature we created.

DE: That's an interesting point. I have another presentation later about decorator syntax that relates to this. I think it can all fit together.

DRR: About this concern on complexity, compared with what decorators are trying to accomplish, it seems this is basically what libraries are already doing and have been doing for 3 years. This is just standardizing it.

(lunch break)

YK: I think it's hard to define what "complex" means. For example, do you mean how many knobs are there, or do you mean how hard it is to learn how to use those knobs?  The feeling from the champions group was that *using* a decorator should feel natural, and that concern supersedes whether it is possible to write poorly-written decorators. (Gives an anecdote of why one knob was added.)  I think we were pretty careful to economize when to add knobs. I think we've been asked to change a lot, and we keep trying to do it, and at the champion group, we feel that this is the minimum viable product to get people what they need. And finally, people who have ported their decorators from stage 1 to stage 2 are happy that those knobs exist, something I feel proud of.

JFI: I found that the knobs in stage 2 decorators were more usable than the "free-for-all" of stage 1 decorators.

DE: I feel the same way.

DRR: About whether tooling benefits from this proposal, I think it does. Having a static representation of the class lets us analyze the decorators in tooling.

YK: I think a general problem is that when we added private state, there were a lot of problems. We took private state and moved them to decorators.

SGN: I want to back up MLS's comments about complexity. To be more specific, about implementation complexity. I have concerns about how non-optimizable this will be. I want feedback on the concerns that I've raised about implementability. This also leads to static performance where it's hard to optimize. Maybe that's what we want, or maybe we could tweak this proposal to have fewer use cases that make it easier to optimize. I would like the champions to explore alternatives and convince us that this is the correct solution.

DE: Can you be more specific about the startup time concerns?

SGN: e.g. Initializer functions in class fields. That is something we can currently optimize away in V8, but with decorators, we need to initialize lambda functions so that optimization becomes impossible. And private state takes up extra memory on the object. (Raises a few more technical concerns.)  Maybe these are not solvable in the proposal, but I would like to see if they can be. Maybe the modules idea, etc.

DE: I don't see a way to solve this when decorators are run at runtime. We previously talked about decorators being at build time, and YK argued against that.

YK: No, I advocated for it, and the committee strongly objected to it, and I withdrew the proposal.

DE: Well, the committee got to stage 2 following that discussion. Just to clarify that this is why we are where we are.

SGN: Are you saying we can't re-litigate that?

DE: No, we can talk about this further.

YK: Do decorators slow down every class, or only classes with decorators?

SGN: Only classes with decorators.

DRR: Maybe we can say that a decorator is inlined into the constructor (?). Would that make it more optimizable?

SGN: Yeah, maybe. I'd like to talk to the champions more about it.

(DE and DRR discuss DRR's idea)

YK: Re-defining initializers abstractly seems appealing theoretically, but there are cases where that doesn't work.

(at timebox; committee discusses whether to extend timebox; the timebox is extended for 30 minutes)

YK: I want to say that the whole ecosystem moved forward assuming that we would standardize this after Stage 2.

SYG: I want to understand SGN's performance concern better. I remember discussing this in the last meeting. The argument was that people would default to user implementations, which would be difficult to optimize at all. Decorators can only be better than that alternative. On the other hand, if decorators are really really slow, that could prevent adoption.

SGN: I'm saying that we should have a discussion about whether decorators are build-time.

SYG: I see, so a completely different approach than the current decorators.

YK: I agree with that as a possible approach.

MLS: Personally, I am in favor of decorators. The complexity is the sum of the whole part. About optimization, I think it's okay if tooling optimizes decorators more than the engine can, as long as the same code runs either place. Developers will know that if they really care about performance, tooling can fix it.

RB: ...

JFI: I wanted to point out that this proposal is tooling-friendly, Stage 2 better than Stage 1. There are parts of this proposal that can be run in a transform, e.g., properties to accessors. This proposal strongly leans in MLS's direction already.

JFI: That was my reply to the version proposal, but we can get to it in a minute.

SGN: I think more of a process point... I think the spec has changed quite a bit in the last two weeks. I don't know if this is really ready to ship. Why are we going to Stage 3?

DE: There have been some changes. We tried to get in the substantial ones in advance of the 2-week deadline. We ended up having to make these changes based on feedback. My impression is that the most recent changes shouldn't have much implementation impact. Another reason for proposing for Stage 3 was to get the opinions from the committee, which isn't possible if I just say "what do you think about decorators".

SGN: I'm not convinced I should implement and ship the currently specified proposal in Chrome. What do other implementers think?

MLS: Probably not.

SGN: This will signal the community that this is concrete and stable. Is this why you want to go to Stage 3?

DE: Speaking as a member of the champion group, the impact we're imagining is stability in tooling and getting tooling ecosystem onboard. Right now there are 3 notions of decorators. We believe TC39 is the coordination point. That's the motivation for Stage 3.

TDE: We were talking about this at lunch; I refer to YK, but it seems that there's a bit of a disagreement about what exactly Stage 3 means. Browser vendors are reluctant to implement, understandably, but at the same time, TypeScript wants a signal from TC39 on what a stable decorator looks like so they can move in that direction and start using it. For Ember, based on our own rules, we're not allowed to ship features until we hit Stage 3. We are in a deadlock where we need feedback and tooling to test these things. We've been using this as "stage 3 is ready for testing" we need some stability from the committee that now is the time.

YK: In the case of inner class bindings, my perspective is that this is the best guess for our answer to this. If we want to implement it for the broad spectrum use, this was very problematic. Iterating on that further to have a logical debate, and to get this feedback.

DE: You're getting this feedback now.

YK: If we waited for Stage 3 to answer that question, we'd be deadlocked forever.

TST: I do think that all the discussions are less important if we don't answer this question.

BT: Let's defer all meta-discussions about Stage 3 until later then.


KS: I liked to read choose-your-own-adventure novels. I feel like I'm doing good, and there are 2 choices. There are some situations where you get killed by ninjas both ways—it doesn't matter. To relate that back, it seems to me to be in the realm of possibility that there's no real satisfactory solution either way. At this point we don't really know. At least I don't feel that I have a good intuition on that answer.

AK: According to the process doc, for changes during Stage 3, it says, "Limited: only those deemed critical based on implementation experience." For any proposal I'm not excited to taking this proposal with changes just a week before. The state of TypeScript is their problem and not something we can solve by ourselves. There should be a knob we can turn to help TypeScript. But going to Stage 3 should be about being ready for implementation. This proposal is still changing a lot.

YK: We believe the proposal meets the requirements of Stage 3.

AK : As we experienced in globalThis discussion, there is nothing that changes people to not change major API

BT: Proposing for Stage 3 implies that the champions are comfortable with the stability requirements.

AK: If this proposal stop changing for 2 months... this proposal changes every month and that seems to me not ready.

DE: Process point is taken, I understand your concern, we don't have to go to stage 3 at this meeting.

YK: If the only issue that's left is stability issue...


AK: My point was about stability. There may be other concerns. I think SGN's concerns about performance could cause changes. I think the complexity discussion could cause changes.

YK: Committee seems always ready to push to next meeting but that does not give champions group actionable item

BT: there is no more stability related comments in the queue so we can continue discussion

YK: There are basically 3 options.
(1) standardize somewhere else that is not TC39, which has problems with private state,
(2) we standardise as offline annex, or
(3) just include it in the spec.
I don't really care which thing we do, as long as the committee agrees. If we go with Option 1, we have to figure out who the standards body is. If answer is option 2 we need to expect that it works in web browsers.

SGN: YK, to understand the options better, can you clarify what are the differences?

DE: I think YK is jumping to a lot of conclusions. We should discuss in the next champions' meeting.

YK: I agree that I'm jumping to conclusion, but the community is waiting for us to decide what the implementation is look like.

MLS: If decorators are standardized in a different venue, implementers might never implement it.

YK: you are speculating that implementers got together....

MLS: No, I'm saying that if we take it to another venue, implementers don't have a voice. And if we keep it here and keep a proposal that implementers are happy with, that's a better end result.

YK: I just don't know what the actionable thing is there.

MLS: I think that one of the action items I'm taking away from here is that we need to get users and implementers involved with the champions group.

BT: Time box is up again.

(DE, WH, BT, and AKI discuss logistics)

DE: anyone who have comment on this I'd like you to contact me via email

BT: I propose that we come back tomorrow for 15 minutes to decide on what the key questions are. I want to make sure the champions walk out of this meeting with a clear list of questions they need to answer by March.

YK: To me it does not seem like Decorators are happening. There is no commitment or signal from people who seems to have strong opinions.

#### Conclusion/Resolution
We will revisit tomorrow according to BT's recommendation. The proposal is not advanced right now.
Discussion continued on [separate document](https://docs.google.com/document/d/1FlIp0EgVpC6l2e-gVLicrzd511WdTUBWJh7_gHU2018/edit#heading=h.5hoafvu479ok). Champion group will come back next meeting.

## Private fields and methods refresher

(Daniel Ehrenberg)
- [slides](https://docs.google.com/presentation/d/1lPEfTLk_9jjjcjJcx0IAKoaq10mv1XrTZ-pgERG5YoM/edit#slide=id.p)

(Presents slides)

YK: I think the WeakMap mental model is OK. Rather than normal properties, weak map is not a big deal. In my experience, people who know what a weak map is find this proposal very intuitive.

JRL: I am happy to answer questions about private symbols in the private symbols talk.

WH: I think the presentation was spot-on. I'm curious about the status. What is the next step?

DE: Implementations are in progress in V8, SpiderMonkey, JSC, Babel and TypeScript.

WH: Do we have a timeline?

DE: In V8, private fields, both static and instance, are complete, but there's some work to get them visible in devtools. For private methods, in Igalia, we implemented parsing, and that landed, and we're working with the V8 team on the transform. We're working on another implementation that's more efficient. On JSC, class fields is feature complete and out for review and passing test262. On SpiderMonkey, things are in progress but I don't know the exact details.

DE: Public fields are shipping in Chrome 72, so for all that splitting and merging, we didn't end up at a split that reflected shipped reality.

TST: On SpiderMonkey, we haven't really started on the implementation itself for private fields and methods, but we have done analysis of what's involved.

DE: What did you find in your analysis?

TST: We are in much the same situation as V8.

SGN: In V8, we plan to store the private method not on the object but on the context, which saves memory. I'm curious if other implementations can do the same.

DE: This specification draft was written in terms of storing the private method on the name itself, so it's written in terms of a private brand accessors of a particular class. This uses an a particular brand for a group of methods, so if you have a deep hierarchy, this has to take a brand marker, and you can measure that in theory but this can be pretty low in practice.

SGN: That's correct, though the memory overhead may be one word per class in the class hierarchy per instance. The reason I asked was that we don't have a memory overhead with Justin's private symbol proposal. I also don't think we should pick one method over the other only for memory. I think language semantics should trump that.

TST: That doesn't seem negligible to me, and there is a way to avoid it but it would require us to throw when reaching unexpected objects in the class hierarchy. I don't actually think that's a good idea, since it's a fairly bad version of encapsulation.

WH: Explain?

TST: We have an overhead. Each instance increases by one word per ancestor in the inheritance chain.

DE: For the ancestors that have private methods.

WH: OK.

DE: Should I go to my bonus slide where I explain that case?

TST: Maybe?

DE: Ok, I'll present then (shows slides starting at [slide 30](https://docs.google.com/presentation/d/1lPEfTLk_9jjjcjJcx0IAKoaq10mv1XrTZ-pgERG5YoM/edit#slide=id.g4ddf6c9436_0_5)). Does this answer the question?

TST: Not sure which question you're referring to?

BT: Maybe BFS' question in the queue?

BFS: Yes, it answered my question.

SGN: Another way to remove this overhead is to not have the brand check. What do you think?

DE: Yeah, I would be open to going back to the original private methods proposal where private methods are just a privately scoped function. We could achieve branch checking only with private fields and leave private methods as syntax candy. Deleting brand checking could go for decorators, too.

SGN: It seems odd that with this case, you could call a private method on undefined.

DE: This is going back to a slide from 2017. What private methods look like are a non-writable private field. Should we throw a TypeError or alert? We previously settled on it being a non-writable own property.

WH: I think it's a misnomer to call these brand checks. There are no user-visible brand checks in this proposal. It's just an invisible spec optimization for field accesses so an implementation doesn't need to create a private field on each instance for each private method.

SGN: This is not just an optimization—it has behavior changes.

DE: There are no visible behavior changes in the way WH is thinking about them. We check logically on the bit of the object.

SGN: OK that makes sense to me too.

DE: The term brand check has been used in the committee a lot, so I wanted to clarify the term too.

BFS: I just wanted to bring up, if we remove the brand check, I'd like the way for it to have a corollary if the private method does exist.

DE: The corollary in that case is that you have a private field and use that as your marker.

BFS: That makes sense; as long as there is some way to do the brand check.

DE: I didn't come here to propose this particular change, though I would be OK with it. I'd be happy to talk about any other suggestions for this proposal.

KS: You have a dual analogy going here—the analogy with public fields and the analogy with weak maps. These fall over in different ways: on the weak map analogy side it falls over with accessor methods (accessors are values in a weak map).

DE: Mark raised that second question in the past. The weak map analogy is mapping properties to descriptors. The question about the interaction about proxies—I feel like we could have a spectrum of design space here. Each one of these four decisions are independently motivated and can be independently considered without jeopardizing the entire thing. If we inherit slots through the prototype chain, that could add more burden because your object could have more states that it could be going through in a way the class author cannot control. I'd like to give that power and defensibility to the class author.

KG: I tend to think of accessors as access in a function call, which is consistent for weak maps, too.

KS: If I'm a user coming to this, what is stored on a weakmap? A property descriptor? But weakmaps hold ECMAScript values...

DE: We have to make tradeoffs, but that's different from being incoherent.

KS: The analogy is presented as a good thing—as though it makes it easier for them to understand—but that's not the case, mixing them is not necessarily helpful.

DE: We've discussed this a bit online. Even if we make the syntax different, people will think of private as being different from public. People will have trouble adapting to it.

YK: When you say it's not coherent, why?

KS: When I say it's not coherent, I think that depending on how I look at it, from some perspectives, it looks like an apple, and from other perspectives, it looks like an orange. It cannot be an apple and an orange at the same time.

YK: It's always a weakmap holding property descriptors.

KS: But they don't hold property descriptors, they hold EcmaScript values.

YK: I don't want to throw a monkey wrench, but there's an elephant in the room.

DE: If decorators is not acceptable to the committee, we have to think of alternatives. As an intermediate solution, there is tooling for implementing private decorator implementation in Babel. So at least people can prototype with it.

YS: I'm curious if other people think that's fine.

JRL: For the decorators use case, most of those things can be solved if we have private declarations. We don't have to allow reification, just syntax. If we can't get decorators to a stable state, we should use BFS's private proposal instead.

DE: I'd be happy to work with you on that.

BFS: Regarding decorators, there is stuff you can do to reify to an extent private fields if you mutate your source code in strange ways. We can look at that. MM was also looking at the valuators around those. They could give private power. At least for decoration, I think we might have some alternatives that are palpable. I think private declarations don't solve all the use cases.

YK: In the process of doing design of private...

DE: I intend to work towards a solution for these issues. We don't have a solution yet, if the current decorators proposal is not acceptable.

YK: If you're a person in the room who had a feature that worked that way, talk to DE offline.

KS: In my experience, friendship is an essential pattern in JS. You don't have support for helper classes.

WH: Clarify which meaning of friendship?

KS: Imagine I have a class that provides the main abstraction, and maybe there's a helper class that wants to call private members of the main class. In C#, I can use a nested class for that.

DE: I agree that friendship is important. Decorators give a way to do friendship. I'm looking forward to BFS's proposal as a complement.

JRL: On one of your slides, you said proxies can't have private state. But wrapping proxies is a valuable use case. Things like Redux starter project uses a wrapping proxy, as do Vue, etc. These can't be satisfied with a membrane pattern. The wrapping proxy should intercept get, set, etc.

DE: I got in touch with Vue and Aurelia maintainers about this issue, and I'm looking into it. I wasn't aware of the React case; sounds like I should look into that further. One pattern that could be useful is if the class being observed can opt-in to it by extending a proxy from the constructor. The other pattern is the membrane pattern. It sounds like neither of these meet all the needs of some frameworks. We should investigate the particular issue without holding back the rest of the proposal.

YK: (gives two ways to express proxies)... the fact is that this is a difference in constructor than methods is a separate problem. Once you have a constructor that runs a proxy, `this === this` in a method is false.

DE: I think you could use this in a mixin way.


#### Conclusion/Resolution

(no conclusion; the presentation was just an update.)


## Richer keys for Stage 2

(Bradley Farias)

- [proposal](https://github.com/bmeck/proposal-richer-keys)

BFS: I'm only asking to advance one part of richer keys proposal today

(presenting proposal)

BFS: I'm seeking for stage 2


KG: I feel weird about the fact that access and iteration are different after this. I understand why that's the case, but I want to make sure we are in agreement about that being the case.

BFS: We already have this incoherence where people override the built-in prototypes.

KG: Yes, it's possible to make incoherence manually, but now it's incoherent by default if you just use rekey.

BFS: I don't see it incoherent by default. This is about enforcing a normalization step.

JHD: I think this is a great approach in general. It's not complete, but we have this weird case in JS with built-ins where they have a mix of internal slots and overridable methods. It makes it hard to have a coherent subclass. I like this general approach of passing functions into the constructor that can map over internal slots such that all builtin methods "just work" with new behavior.

WH: Why specify sets as collection of values instead of keys? A value in a collection is something that is just held without any other operations applied to it. A key is something that is compared against other keys.


BFS: this is just how it is specified in 262

WH: Is it just spec language, or is there something user-visible that refers these things as "values"?

JRL: `Set.prototype.keys.name` actually equals "values"

WH: Are we expecting any web compat concerns? In particular, does anyone already pass a second argument to the constructors?

BFS: Not to my knowledge.

RBN: the issue we are trying to resolve is issue with JS subclassing anyways. Is it better for us to look at more general solution ?

BFS : you might be focusing on prototype calling, this proposal was for normalization

AK: Lack of flexibility around sets... this proposal address that. I understand why `toKey` is needed to mutate keys, but why do we need `toValue` on maps to mutate values?

BFS: ...

BFS: would you be okay if we keep this as one proposal?
AK : I don't think I have problem with that.


WH: This is another reason why the naming is unfortunate. To stick a key mutator on a map you'd need to call it `toKey`, but on a set you'd need to call it `toValue`.

AK: I'd prefer to call it `toKey` on both maps and sets.

BFS: Don't want to have both `toKey` and `toValue` on a set.


WH: Not asking for that. Asking for just `toKey` on sets.

AK: The only existing usage of `value` is by extracting the name of one of the set methods. That's a much weaker precedent than having consistency between maps and sets here.

WH: Agree.

RBN: I don't have issue with toKey or toValue If you want ...
I'm concerned this is ...

BFS: I had a fairly lengthy talk on IRC with Jordan. This is not overlooking to overtake an equality hook. This does not cover a use cases that differentiates -0 and 0. I think equality is a different thing. I think they would be a little verbose; I think if you want concrete examples, we can add them to explicitly show that this is not about serializing or normalizing to a primitive for equality.

RBN: There were some other things brought up in IRC that I  should sync with you about.

AKI: If you're worried about being too verbose, you're probably wrong. Having more information is better.

JHD: I don't like the proposed renaming from toValue to toKey. Regardless of removing toValue on maps, I think for sets it should be called toValue. Second, I think there are plenty of cases where we would want toValue on maps.

WH: Values are things you use; keys are things you compare against one another. It is weird to call `toValue` on sets or `toKey` on maps. Sets have only keys.

YK: I think we should figure out naming details before stage 3.

KG: On WH's point, I don't know about the common nomenclature.

WH: In C++, set elements are both keys and values; the names are aliased, but it's called "key" in the spec:
 `template<class Key, class Compare = std::less<Key>, class Allocator = std::allocator<Key>> class set`

DD: Please do not remove toValue on maps. I would like this proposal to move forward in its entirety. I think normalizing the values is just as important as normalizing the keys. There are plenty of examples where this is useful. I would be sad if this crucial part of the proposal is removed.

AK: We are not aware of the web platform using this. What is the point of this proposal?  If the point is normalizing things going in and out of maps, then I can understand why it is important. If the point is writing custom hash functions, then maybe not.

RBN: I don't necessarily agree that values are things you don't necessarily do anything with. In arrays, you iterate over the values; the index is just a way to find the thing. Unordered sets are sets of values. One of the things we clarified with Bradley earlier is simply providing a mapping function. Using the name toKey for something that isn't considered a key in most domains is incorrect.

WH: From the C++ world, there's a well-defined concept of keys and values. Values do not need to even have a comparison operation defined, whereas keys must be comparable with each other. C++ array elements are values. In C++, sets are a collection of keys; C++ maps are collections of key-value pairs.

BFS: It sounds like we should collect more data on other languages.

RBN: I agree; we should discuss offline whether to make the change.

SLN: According to the spec, Set() is a collection of ECMAScript Values.

MF: I think we should split the proposal. I have a hard time seeing the use case for toValue.

DD: I still think we should keep both parts. (Gives an example on why `toValue` is useful.)

#### Conclusion/Resolution

- Champions will look into naming consistency with other languages. For now, we are renaming `toValue` to `toKey` on Sets.
- Champions will continue discussing why toValue is important during stage 2. If we cannot agree then perhaps the proposal will split, but for now they both are included.
- FAQ will add example showing difference between equality and normalization
- Stage 2 acceptance (with above understanding).


## Extended numeric literals status update, and consider restoring numeric separators to stage 3

(Daniel Ehrenberg (DE))

- [Numeric Separator](https://github.com/tc39/proposal-numeric-separator)
- [Numeric Literals](https://github.com/tc39/proposal-extended-numeric-literals)
- [slides](https://docs.google.com/presentation/d/1S6fX1smQplysYwGCZHQ5kBPLmtahVEOdNF0GHjZee7k/edit)

(Daniel presents slides)

WH: I like the semantics of this. The one contentious question is the syntax. There is a large space of possible solutions. Two local minima I see are: (1) using `~` for extended numeric literals and `_` for numeric separators, or (2) using `_` for extended numeric literals and `'` for numeric separators. I personally prefer (2); it's analogous to what C++ does. The option of using no prefix for extended numeric literals is unworkable due to future compatibility problems.

DE: The numeric separator champions really don't like apostrophe and some members of the C++ committee do not like it either.

WH: ECMA is a Swiss organization and `'` is the numeric separator used in Switzerland ☺.

KG: I no longer understand the point over tag template literals.

DE: It gives you a syntax error if there's not something syntax shaped. The major goal is things people have long envisioned for BigInt and CSS. It's nice to have the number already be parsed, and this syntax looks more natural than a template literal would.

KG: That doesn't seem like justification for syntax to me.

DE: We were concerned about BigInt and Decimal because they were syntax. The agreement was that we do BigInt now and fill in extended numeric literals later. Even if we don't want to do extended numeric literals, we should think about how we might do them in the future.

RGN: Numeric preprocessing seems like a drawback because it is lossy.

KG: Both the string and the number get passed.

RGN: OK.

AK: Tilde is okay. In terms of the motivation being BigInt, I understand, but it doesn't make sense that BigInt shouldn't be the only motivation for this.

DE: Extended numeric literals has been a desire for a long time.

AK: People-wanted-to-do-this-in-the-past isn't a reason to do it now.

DE: I'm not arguing that we want to do it right now (this is a Stage 1 status update), but I want to demonstrate a path that this could eventually take, if we do want to do the feature, that would be consistent with numeric separators using _.

JRL: The numeric `__` name mangling is weird.

WH: It's just due to practical concerns. It's often convenient to use `i` in extended numeric literals to mean things like imaginary numbers, and it would be a problem if it gets shadowed just because it's common to use `i` as a loop iteration variable.

DD: We should decide what we feel about name mangling as a committee.

JHD: We've spent a lot of time on `globalThis`, and now we're talking about name mangling, and I think that could be a problem with educators. Have you sought feedback from the educator group?

DE: Not yet; I wanted to check whether it would be acceptable to the committee. I assumed name mangling would be viable based on TC39 delegates' comments on GitHub threads, but if there's concern about that, then I'll need to go back and think about alternatives. It sounds like we're not happy with name mangling.

WH: I don't mind name mangling in this context. It's the simplest solution out of this dilemma.

RGN: I dislike name mangling.

KS: DE, I think you undersold it a bit by `__`. C# has something similar for attributes. C# attributes are like annotations above your class. By convention, attributes end with an attribute suffix, but in the source code, you don't have to include the attribute suffix. So there are options that don't look so mangly.

YS: I agree we should put this question to the educators group.

SLN: I'm concerned about optimizations that are concerned with JavaScript size. Name mangling requires minifiers to avoid mangling names theirselves.

LEO: I really want to see numeric separators for Stage 3. I hope this means we can finally unblock it.

JRL: It sounds like there is C# precedent. If there is lots of precedent, let's do name mangling.

DE: It sounds like we don't have concerns with name mangling yet.

WH: I don't know if we have consensus on `~` yet.

DE: Name mangling is the core thing to answer right now; there are several symbols we can choose from (or no symbol) to set off the suffix.

YK: The natural solution is tagged template literals; just import it.

DE: Should we just drop the extended numeric literals proposal if some of you are happy with tagged template literals for this use case?

WH: No.

#### Conclusion/Resolution

- DE will follow up on concerns with name mangling.
- Neither proposal will change stage in this meeting. DE will return in March or May.
