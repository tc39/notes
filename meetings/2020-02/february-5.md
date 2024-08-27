# February 5, 2020 Meeting Notes

-----

**In-person attendees:** Aki Braun (AKI), Andrew Paprocki (API), Rob Palmer (RPR), Waldemar Horwat (WH), Chip Morningstar (CM), Shane F Carr (SFC), Shu-yu Guo (SYG), Jordan Harband (JHD), Michael Saboff (MLS), Keith Miller (KM), Michael Ficarra (MF), Jonathan Keslin (JKN), Kevin Gibbons (KG), Richard Gibson (RGN), Justin Ridgewell (JRL), Zibi Braniecki (ZB), Myles Borins (MBS), Bradford C. Smith (BCS) Rick Button (RBU), Mary Marchini (MAR), Guilherme Hermeto (GHO)

**Remote attendees:** Dan Ehrenberg (DE), Brian Terlson (BT), David Rudin (DRN), Jason Nutter (JAN), Ron Buckton (RBN), Pieter Ouwerkerk (POK), István Sebestyén (IS), Min Qi Wu (WMQ), Leo Balter (LEO), Valerie Young (VYG), Jack Works (JWK), Mathieu Hofman (MAH), John Hax (JHX), Caridy Patiño (CP), Sergey Rubanov (SRV), Rajiv Batra (!!!), Yulia Startsev (YSV), Bradley Farias (BFS), Gus Caplan (GCL), Caio Lima (CLA)

## Preserve Host Virtualizability (Continue from Day 1)

Presenter: Mark Miller

- [slides](https://github.com/tc39/agendas/blob/master/2020/02_talk_preserve-virtualizability.pdf)

JHD: How does this help in practice? Basically, every time a feature is proposed that harms virtualizability, it’s usually unintentional. The only way it is protected is if people with concerns are in the room, discover it is an issue early enough to fix it. We have to relitigate this every time. If we are able to come to some form of consensus that some aspects of virtualizanility are sacrosanct, we will have to debate it. It would be really helpful to document and enshrine these sorts of implicit considerations that have guided the evolution of the language for a while. The spec language helps in practice start out realizing what things people have to be concerned with.

MM: Thanks JHD, that was very well put.

SYG: I’ve done a little more research. When I first put it yesterday, I was expressing a general worry that...I fully support the research. I have some worries about when you do propose something concrete and what it forces on Hosts. How does this impact WebIDL unforgables? Are you going to allow that still?

MM: There has been some change since I first heard that proposed. Could you define it?

SYG: Unforgeable is an extended attribute, non-static regular property that is non-writable/non-configurable. This is used in legacy stuff and in the trusted types proposal, making some things unforgeable. This is something I would like to retain.

CP: Trusted types was actually the thing that triggered us to look into this problem.

MM: Mike Samuel is a champion of trusted types. We went over this issue in detail with him, and he ended up very happy with the position we ended up with, which is that trusted types are in fact virtualizable. Controlling code sets up an environment that replaces them. Provide a JSDom that recognizes the illusory trusted types. I don’t want to re-litigate this, but I’ve had extensive conversations with Mike Samuel and he was happy with it.

SYG: I would need to understand better use cases. I would like to understand that better as a thing for Stage 2.

MM: So I support understanding it better, and the issue about forgeability is a central debate we want to highlight when moving forward. The notion of naive unforgeables has been killed, and would be damaging.

WH: Are you assuming that the script being virtualized is cooperating with virtualization?

MM: No, I'm not.

WH: So you want to support the cases of scripts hostile to virtualization? There is quite a bit of an industry of people who write scripts that don’t want to run virtualized, and I’m sure you can think of reasons why you might want to do that. So I’m curious how this proposal deals with that use case.

MM: I don't understand that use case, and I'm not familiar with it. I'll say that there are 2 aspects, that we are unlikely to get to perfect virtualizability in JS on the web platform in any case. We're holding pure virtualizability as a goal to approach as close as we can get. If a script can detect that it is not on the host we don't consider that a violation of the goals. The core goals are around controlling access to the outside world, and in general control of integrity. And furthermore, for scripts that are not actively trying to subvert virtualizability, there's a nice part about testing. Being able to create a test harness and run the tests on another host. So there are a variety of benefits of virtualizability that does not achieve perfection.

WH: OK

MM: Does anyone object to stage 1?

(silence)

### Conclusion

Consensus reached for stage 1

## Update on Realms

Presenter: Caridy Patiño (CP)

- [Proposal](https://github.com/tc39/proposal-realms)
- [Slides](https://github.com/tc39/proposal-realms/#presentations)

CP: (presents slides)

CP: Questions?

SYG: Contour means the top level lexical scope?

CP: Yes

KG: The `Realm.prototype.evaluate`, is the intention that be disabled if you have the script source set without unsafe eval?

CP: Yes

SYG: Good job pairing down the parts of the proposal. I like the current proposal without the hooks and with the lightweight creation. And I would like to review it for stage 3.

GHO: I would like to see some examples about error handling. How would error handling happen across realms?

CP: there was an issue open a while ago about error handling. The error handling would happen at the agent level rather than the realm. There was another issue for completion record access. The compartment’s evaluator is really an API that allows you to control everything. We still don’t have that formalized. In terms of errors I don’t think the Realms will provide this.

GHO: OK, as long as the agent provides a way.

DE: Second SYG’s comment. I wanted to mention that we've discussed this with the framework outreach group, and people were interested with this around testing and server-side rendering.

RPR: I’m really pleased by this. Our in house platform, our module system works on the client and server. We use private V8 APIs to give us this. This gives us a standardized API to achieve this.

MF: I want to volunteer as a reviewer

JWK: we’re using realms-shim for now to polyfilling the XRay vision in Firefox extension (in iOS), I found that hooks is needed so I can execute extra code transform to make things work. I do like to see a Realm proposal with hooks.

CP: What we are proposing is that hooks will exist, but they will be in a different proposal. It is not formalized yet, but we have enough people and enough information to make that a formal proposal.

CP: I plan in the next couple of weeks to resolve the open issues and then go for advancement at the next meeting.

DE: Are you going to make a mechanism for CSP style environments before advancement?

CP: We are not changing the mechanism in the spec for CSP rules. In future we will have a hook to control that.

DE: Let’s follow up offline. I think it’s important to have a method for environments that can’t evaluate strings.

RPR: Are you asking for reviewers now?

CP: yes, I was hoping to.

SYG: Why is it a problem?

DE: It’s fine. And I can help a review.

SYG: Is it a precedent that editors cannot review?

MF: When we go for stage 3, we like to have reviewers that are not editors as well.

MM: CP was vague on compartments, my presentation on SES will be on the compartment API. To answer DE’s question, part of the renaming of evaluator to compartment, it is designed to be used in situations where there are no runtime evaluators.

GCL: On the first slide you mentioned ES module support, and I couldn't find any info on that in the repo. Is that a follow-on proposal?

CP: We do have some work that was done by Dave Herman around the APIs, maybe 3 years ago, but we don’t have a champion for that proposal. That is something you would be able to use via the compartment api, using the hooks via the API you can control the modules.

GCL: Ok, thank you

### Conclusion

Not seeking stage advancement this meeting.

Stage 3 reviewers:

- MF (@michaelficarra on GitHub, @smooshMap on Twitter)
- SYG (@_shu on Twitter)
- DE (littledan@igalia.com, @littledan on GitHub and Twitter)

## Housekeeping on Stage 3 Reviewer contact info

AKI: We need to make sure that contact information has been shared between reviewers and the proposal champion(s) since, as MF has said, having reviews but no way to get ahold of them is useless.

SYG: The availability directions should be bidirectional. The champions and reviewers should be highly available.

## Unified Number Format for stage 4

Presenter: Shane F. Carr (SFC)

- [Proposal](https://github.com/tc39/proposal-unified-intl-numberformat)
- [Slides](https://docs.google.com/presentation/d/1vk9MnkMzglGo9jqHLueAJwatp06Ro8Fo0PUUMu32cns/edit#slide=id.p)

SFC: (presents slides)

SFC: Stage 4?

(thumbs-up and silence)

### Conclusion

Approved for Stage 4

## `Intl.Segmenter` Stage 2 update

(Richard Gibson) RGN

- [Proposal](https://github.com/tc39/proposal-intl-segmenter)
- [Slides](https://docs.google.com/presentation/d/1Pe9eVhgK93cgB3KCufTQvzqCjIYj3RRxJaOeNIbWN_A/edit?usp=sharing)

RGN: (presents slides)

RGN: This in many ways was an update and I fully expect to come back at the next meeting seeking advancement for Stage 3.

MF: Are you aware of use-cases for segmenting by grapheme cluster or sentence? Those aren’t obvious to me.

RGN: Grapheme cluster is easier. If you want to move between characters with a cursor. For sentence, I don’t have a concrete use case. It’s part of UAX 29, so we’d like to include it for completeness sake, but it’s technically droppable.

MF: Are sentences a universal concept?

RGN: The concept of a sentence is as universal as any concept can be in language. As a sequence of words that forms a semantic structure does exist. Most locales have a representation in the default algorithms.

KG: Do you intend to resolve the open issues before stage 3?

RGN: I was prepared to ask for Stage 3 with these issues. Now that we have the extra time, I expect them to all be resolved.

RPR: Queue is empty.

### Conclusion

Update done, no stage advancement requested. Likely being requested at next meeting

## `Intl.Locale` for Stage 4

(Zibi Braniecki) ZB

- [Proposal](https://github.com/tc39/proposal-intl-locale/)
- [Slides](https://docs.google.com/presentation/d/1hB6OJiikOkNH9aUIrB6jrq_OvL08tGnsJxveryuFI34/edit?usp=sharing)

ZB: (presents slides)

ZB: I would like to request Stage 4.

(thumbs-up and silence)

### Conclusion

Consensus reached for Stage 4

## Legacy reflection features for functions in JavaScript for Stage 1

(Mark Miller) MM

- [Proposal](https://github.com/claudepache/es-legacy-function-reflection)
- [Slides](https://github.com/tc39/agendas/blob/master/2020/02_talk_codiy-dot-caller.pdf)

MM: (presents slides)

WH: Can you explain what was going on, on the first slide? In particular, what in the spec made the browsers reach different conclusions about what should happen?

MM: The logic is that the spec is clear that `.caller` on a sloppy function cannot reveal a strict function. The spec is vague and unclear and subject to interpretation as to whether .caller on a sloppy function can reveal a builtin function. And the intention is that it definitely cannot reveal a built-in function, and as shown with the output from Edge here on this test case, this was misread in a way that one can rationalize from the spec text, which shows that the spec text needs to be tightened.

MM: (continues to present slides)

MM: Questions?

WH: A few slides back, you had a table with a generator/async row. You’re proposing to change the behavior to make it different from what every implementation is doing in that row. What’s going on there?

MM: Safari currently throws on generator async. On the sloppy target, everyone agrees. On sloppy caller, Safari throws. That should be adequate to establish that code that doesn’t count on this succeeding is web compatible.

WH: Why are you proposing something different for generator/async functions?

MM: I don’t know. Claude or JWK?

MM: Claude is the original author. I’m fine with the proposal censoring, but I’d be fine either way.

KM: This is the callee is sloppy? I guess it’s always sloppy. And you’re calling...

MM: Yeah, so if the target, the thing that when you say `f.caller`, `f` is the target, the code is the last call frame on the stack, the most recent call to `f`... if that caller is sloppy, and if `f` is also sloppy, then the old behavior was that the identity of the caller would be revealed.

KM: I see, ok. Can we go back to the chart again? Ok, I understand now.

JWK: In your last slide, builtin functions not distinguishable from strict functions?

MM: Yes, in terms of the terminology of the spec, an ECMAScript function is a function written in ECMAScript. What I mean here is a function that is not written in ECMAScript.

JWK: For non-ES functions there are some cases that it should be non-strict. When you bind a sloppy function, the bound function should also be sloppy.

MM: That’s very interesting. Do you know what the current behavior is? We don’t call that out on the matrix here. Do you know what the current behavior is on bound functions that are bound to sloppy functions?

JWK: I haven’t tried it.

MM: Okay, that's an interesting case that we need to pin down.

JRL: So what is the getOwnPropertyDescriptor that is being logged here? Is it Reflect.getOwnPropertyDescriptor?

MM: That’s right, it’s the one from `Reflect`

YSV: We reviewed Claude’s version of this, overall we support this. We have some questions around `.arguments` is going to impact the spec. It would be really nice to see this merging as a proposal text. We had specifically reviewed Claude’s version.

MM: Ok, yes, that’s the intention

MM: Do we have any objections to Stage 1?

(silence and thumbs-up)

### Conclusion

Consensus reached for stage 1

## Updates on Explicit Resource Management

(Ron Buckton) RBN

- [Proposal](https://github.com/tc39/proposal-explicit-resource-management)
- [Slides](https://1drv.ms/p/s!AjgWTO11Fk-TkeB6DLlm_TQxuD-sPQ?e=SwMLMY)

RBN: (presents slides)

WH: [on the `using value expr` and other proposed syntax slide] `using` is not a reserved word, so you will need a lot of NoLineTerminators there to avoid grammar conflicts with existing semantics. Is this future proposed syntax added to the expression, statement, or declaration context?

RBN: It is a declaration. So there can be only local declarations. We are aware that there would need to be a NLT, so we’re considering something like “using value to exist” In the example of using const, it’s unfortunate that we would need 3 keywords to indicate a using declaration that supports async dispose. It’s been indicated that we don’t want this to look like magic, we think we need an await keyword. I don’t think that is necessary. We have special cases today where we have magic awaits. We have a couple cases where we don’t have a specific keyword that says this must be treated as an async value. The use of the await keyword was necessary to reach stage 2 consensus. We do feel that having the NLT is necessary. Async is not a reserved word. This is a modifier that must appear on the same line as the declaration.

WH: I would need to think about how this interacts with cover grammars to avoid the `async of` problem

RBN: Because this only happens in a statement context I’m hoping we can use a lookahead.

WH: It cannot appear in the header of a `for` statement?

RBN: Right now it cannot, whether we want to consider allowing that I’m uncertain if we want to investigate that.

KM: For the using value expr syntax, what happens with exceptional control flow?

RBN: You’re talking about `using value` and an expression closes before the end of the block?

KM: Yes

RBN: It guarantees that the value is disposed at the end of the block. There isn’t any additional block scope that is added. That would cause issues with scoping. Essentially yes, the dispose will be called when the block exits.

KM: I see. Ok, I have thoughts, but I’ll let you continue and we can discuss at the end.

KG: If this proposal ends up including both forms, that’s a huge amount of syntax.

RBN: I agree. Again, ideally I’d support one or another. Ideally just the `try..using` or the `using const` syntax. Where I stand now is depending on how warm the committee is to the using const syntax determines whether I’d move fully to the block scope syntax and drop the `try..using` syntax. Again, C# 8 has the using block, what we have proposed. They don’t have a using value form, but it may not be necessary. If we concur that `using value` and `using const` is the right way forward, I will likely abandon `try..using`. If we can’t agree on `using value`, or some other mech to use a bindingless form, I’m open to other suggestions.

RBN: Any other questions on proposed syntax?

(No questions)

RBN: (continues to present slides)

CM: This is not specific with respect to destructuring. Are you talking about expression or the value it evaluated to at the top? You had a try...using expression where it wasn’t bound to a value. I just want to make sure expr isn’t being evaluated twice.

RBN: expression wouldn’t be evaluated twice -- it just captures the result of the expression and then disposes at block exit

CM: And then dispose at the bottom. That’s what I hoped for.

MM: If `using value expr` form were itself an expression, is there a reason not to do that, if we did do that, does that subsume all of the other use cases? It removes the ambiguity with regard to the destructuring.

RBN: I hadn’t considered that point. I do think it’s useful to have the declaration itself indicate that it’s a thing to be disposed. Having this in expression form kind of buries the things that are happening. MM, you have been specifically concerned in the past with hiding things from the user. My concern is that the expression form further hides things that are going to happen at the end of the block. Again, it goes a little bit towards being able to reassign a declaration, even though I’ve been explicit about the fact that it is an expression that I wanted to trap, it can be confusing to a user if they reassign x and it isn’t what is disposed. I wouldn’t consider it for an expression form at this point. If I were able to do this in a way that didn’t require a key phrase, then I might be more willing to consider it. If I wanted to have a using declaration in the current proposal, the bindings would be disposed in reverse order at the end of the block. I am concerned that it would be verbose. Even if we made using value an expression form, I would still want the declaration form for const. To reduce the amount of boilerplate and excess lengthy code just to make this work.

MM: I like that answer. I think that the issue of burying that operation so it’s easy to miss is a good point. Thank you.

RBN: It can get even more confusing if you have await in the mix. Now you have an `await` in the mix that might look like I’m awaiting some value. So I'm a little bit concerned about the expression form.

MM: Yeah, that one kills it for me. Now that you pointed it out, it would exactly lead to that misreading.

JHD: Could it be `using async value`?

MM: I think I would object to that.

RBN: async today is a marker keyword. If you look like something like `for await..of` … There is an implicit `await` that happens. `async` itself doesn’t explicitly say that I’m awaiting something, it just indicates that the function will have a promise result.

MM: I agree. Right now we’ve succeeded in saying that all interleaving points, except some esoteric cases, are marked with `await` or `yield`.

WH: To MM's suggestion, `using value expr`, I can think of a lot of havoc this could cause. Did you mean this to dispose locally within the subexpression …

MM: That is not what I would expect it to mean.

WH: … or the end of the block containing the expression?

MM: Yes.

WH: Unless you mean to scope it specifically to the sub-expression, this causes havoc. You have to answer things like, what if I am using this in a function argument initializer? Or a class that has a `using value expr` subexpression in its `extends` clause?

RBN: There is a lot of complexity there that I would like to avoid.

MM: I think my suggestion has been killed, I would like to retract.

WH: How do these relate to the concept of things in the tail position?

RBN: Are you specifically talking about tail call optimizations? I'd have to think about that more. The idea with TCO is that you can re-use the stack. The values can’t be replaced on the stack, they must still exist when the function exits. It's as if there are more statements that happen that have to return. I'd have to look at how TCO handles `try..finally`. I think these are calls that can't be tail-optimized.

WH: That’s the answer I would expect. Syntactically, `try..finally` wraps around whatever it is. Meanwhile you can stick `using value` in the middle of some block somewhere, it doesn’t wrap around the sequel. It is a TCO defeating mechanism that’s not syntactically apparent.

RBN: One of the reasons I became more interested in pursuing the possibility of the `using` declaration form was Dean Tribble (DT) who originally pioneered this work at Microsoft. He said that there were concerns from some developers about the using block form that there were certain cases that weren't meeting the needs of developers. It introduced block scope in areas where they didn't want to introduce block scope. And the using block form was a long request from the C# language. The motivation for `using value` was that, if we could abandon the `try using` block form in favor of this, it would introduce benefits such as `try using`, it would allow you to have a catch or finally block when those are released. By making these block scoped, it is very explicit when they are released.

WH: I agree with the ergonomics of `using value` and friends. C++ does this everywhere with the RAII idiom. Ergonomically, it does work quite nicely, though there are some corner cases.

SYG: For generators and async functions, when you `await` or `yield`, it's not disposed. If you didn’t make an extra block scope, it wouldn’t let go.

RBN: Yes, it would keep holding onto it until the finally is evaluated. C++ today has this feature, the declaration is held onto until the function completes or it exits the block. And similarly the same thing happens in a C# enumerator, which has the opportunity to suspend execution on a break, and the finally block is then executed.

SYG: Ok thanks.

JRL: What happens if the dispose method throws an error?

RBN: If the dispose throws an error? This is defined in the proposal spec text today. If there’s an error thrown during disposal, it would be held onto and then re-thrown as an `AggregateError`. If you terminate the process early, it won't execute disposes, but that's how most languages handle it currently.

JRL: IF you are using async expose, does it create a rejected AggregateError?

RBN: If you are in an async function and use are using `try using await`, or `using const` declaration form, `AggregateError` would be thrown after all promises are evaluated. There are cases where if you have a Promise that never completes, there are concerns of what that means. Does it suspend the execution of other disposes that are pending? But that's no different than if you tried to do this manually with try..finally.

JRL: Ok

RBN: I’m not looking for stage advancement. Just an update. Looking to get feedback on the using value syntax in general, and whether we should consider moving specifically to this form and abandoning the try using form.

MM: I like the using forms, I’m fine with using value. The destructuring issue is best dealt with by prohibiting it. With those things in, the try syntax should be out. We should have only the using syntax.

RBN: Are there any other questions?

GHO: I agree with MM. The `using value` syntax is preferred for us as well.

RBN: I don’t have anything else for this proposal

### Conclusion

Update complete without asking for stage advancement.

## Object iteration for Stage 2

Presenter: Jonathan Keslin (JKN)

- [proposal](https://github.com/tc39/proposal-object-iteration)
- [slides](https://1drv.ms/p/s!As13Waij_jkUqe0X3QmI7R9FfKahkw)

JKN: (presents slides)

KG: This is only useful with iterator helpers. I would not want this to go past stage 2 without iterator helpers getting to stage 3 or 4.

JKN: I would claim that the two items mentioned before, using this in a for..of, and also being able to pass these directly into collection constructors help.

KG: I think most people use `Object.keys`. I'm not convinced that this is a necessary addition to the language without iterator helpers.

JKN: Yeah, but I think it's still rational for stage advancement.

KG: If it’s on the hot path engines can optimize away the array create.

MM: What happens if the object is modified during iteration?

JKN: It will match other collection types. For example, in an array [modifying the collection during iteration] will mess with things. For example, deleting an array item will cause it to get skipped.

MM: The spec text you were showing used `getEnumerableOwnProperties` or something. Those spec operations take snapshots. I would prefer those semantics to having iteration be disrupted by mutation. Were we to have it be sensitive to object mutation, it would have to be precisely and deterministically specified, such that we don't re-create the `for..in` nightmare. If it were a snapshot, there would be no memory benefit at all. I’m in the same camp as KG, the only case where you get a memory benefit is the more problematic semantics.

JKN: You have a good point that these two spec versions are different: one takes a snapshot at the beginning, and the other takes a new snapshot at every iteration. I prefer the second. It is a fraught concern, but it is consistent.

MM: It means that something that currently refactoring keys to `iterateKeys` introduces a semantic change that might surprise people.

JKN: That's true. I think that if you're looking at MDN that says, here's `iterateKeys` and this is how it’s different, and I think it's pretty clear what the difference is, and that if you take a snapshot at every iteration, things could change from under you.

ZB: We evaluated the proposal, we are concerned with the proposal. We are worried that it would not be achievable to make it lazy.

MF: I want to prefix this with the fact that I like the solution presented here, assuming we agree that there's a problem. I’m skeptical of the lack of ability to optimize the current patterns where an Array is realized. I do think that that is the most compelling reason to accept this proposal. Have you spoken with implementers about the amount of work required? I would like to see that before the proposal is moved too far forward. I’m not 100% convinced that this is a problem.

BFS: I’m fine asking VMs about optimizing things. I don’t want to limit this to things advanced VMs optimize. I want to ensure we get feedback from implementers of all sizes.

SYG: For these looping things, for a while, if it is fast eventually, it is ok. The lesson in the last couple of years, everything is hot. There are tight loops, but it isn’t super common. I don’t think we should lean too heavily on it being a sufficiently long running program.

BFS: That seems fine to me.

JKN: The proposal makes it very clear for developer intent to work on the live object and not a copy. The more developer intent is clear, the easier it is for an engine to optimize it.

WH: I'm confused by what you just said. Since this thing does a snapshot of the object at the beginning, how does this express intent to work on the live object?

JKN: The first alternative in the proposal snapshots at the beginning, but the second alternative in the proposal expresses intent at the spec level because it snapshots at every iteration. It's almost pulled from what we currently do with `Map` iterator.

WH: So if you delete a property you haven't seen it, then you won't see it?

JKN: Right.

KG: This is now quadratic for iterating over proxies. You need to get the full list of properties for each operation. If you iterate the iterator, it is quadratic. It is not acceptable for this to be quadratic.

MM: Ooh.

JKN: So then would you prefer that it is a snapshot before iteration begins and then differs from other collections?

KG: I would prefer anything over quadratic. It might be that there is a way to implement this without quadratic overhead. So doesn't necessarily mean that I prefer some semantics over another; it just means that if non-quadratic behavior is not achievable, then that disqualifies those semantics.

KM: Can’t the proxy can’t also maintain a list of the things?

JHD: When you say other collections, they take a snapshot at the beginning?

JKN: I’m referring to arrays.

JHD: Sure, but iterating over objects does not.

JKN: This differs from what you can currently do when iterating over objects today. Objects are treated as a collection type very frequently.

YSV: We did a review of both spec texts. The second one is one we wouldn’t advise, the first makes more sense. It simply creates an array iterator. We don’t think this will achieve the goal you have. It is unclear how much benefit there will be for developers. There is not enough information for us to justify this going to stage 2.

JKN: I hear the concerns over the first set of spec text. I spent time chatting with BFS about this. Our thought was that since the array was not observable, then it didn't really need to be an array. Obviously deeper spec text concerns like what KG mentioned is a Stage 3 concern. When we're looking at Stage 2 advancement, we're looking at whether this is a valuable thing. I believe it is helpful to make objects more consistent [with other collections]. Seems like the next step is to work with implementers to find where the value lies.

YSV: I wonder if perhaps this would encourage anti-patterns, where if another data structure would be better than an object.

JKN: When we went into the October presentation, we said “wouldn’t Map be better”, but Map isn’t used because JSON gives you objects.

MM: There is an easy way to do that with a reviver function. It is expensive but it is easy to express.

ZB: Stage 2 requires precisely described semantics, which we do not have.

Kumavis?: Yulia stated what I wanted to say. Adding these utilities encourages using objects as collections. Should we do that?

JKN: Whether it's appropriate or not, it's done very commonly today. If you're going to represent key-value data in JSON, it's an object.

Kumavis?: Do we want to make it easier to use collections?

DE: We’ve crossed the bridge of objects as things you can iterate over. I do think I share YSV’s concern. I haven’t seen any particular evidence that this is a performance problem or that it is not optimizable. I don’t see a problem with `Object.keys` or `Object.entries` and using the interators proposal. For things like the temporal proposal, there are these primitives you can compose, but there is effort to keep things iterable and orthogonal.

KM: On a similar point, this seems optimizable. It sounds like a chicken and egg problem. Then again a lot of developers don’t notice this way. I don’t know that it is totally necessary to have something like this. The current method is less text as well. The performance things here. I’m not super sold on them.

YSV: You mentioned JSON here, and someone mentioned that revivers are hard to use. Maybe we should focus on revivers being easy to use.

JKN: If you claim that Maps are better collections, things can be expressed in maps. It fits within the spirit of the stage 1 proposal.

JKN: we still stick at stage 1 and investigate further.

### Conclusion

Not requested for stage advancement.

## Logical Assignment for Stage 2

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-logical-assignment)
- [slides](https://docs.google.com/presentation/d/1XbYMm7IkHef6hpvwQlLSxb_b5gSkf1g6iuNL9WM0DQ8/edit?usp=sharing)

JRL: (presents slides)

JRL: I know we’re going to bikeshed this. Let’s bring it on.

KG: I had previously said I disliked short circuiting, but I'm now convinced short circuiting is fine.

JRL: Awesome

SYG: I like the short-circuiting. I’d go as far as to say that this proposal is not worth doing without the short-circuiting

DRR: Why not? There are specific patterns in the presentation that we ourselves use in our compiler. Do you feel that the use-cases that were brought in, the innerHtml case, do you feel like those need to be solved scenarios? I feel the motivating use cases work with simple or short circuiting. Either semantics would be useful for a lot of people.

SYG: I think the value of short-circuiting, given the additional use cases that it covers, is compelling enough to me that the value of the proposal is significantly diminished if we don't choose the short-circuiting semantics. I'm not saying I would block it without it, just that the value is significantly diminished without it.

YSV: So, we support this overall. But we also feel that the nullish coalescing operator is more useful than the other two.

JRL: That was brought up in March 2018. The additional complexity is that if we only have some operators, but not others, that's confusing to users. The nullish version (`??=`) is most useful, but I have also used the `&&=` and `||=` forms with booleans in for loops.

DRR: I think there were two things brought up here and on GitHub. The first, people have a mental model of the compound assignment operators having consistent semantics. I was pointed out that it was a lie because you never re-eval the LHS. It’s a “yes sure, technically” detail, but it doesn’t correspond to how I as a user think about things. Either way, I don’t think that is a sufficient reason to weigh us one way or the other. I also wanted to mention that some of the use cases seem like they're optimizations but they also potentially hide bugs at a later stage when you do perform the assignment. E.g. if you were conditionally triggering a set, and that can do something destructive like changing focus, that might be undesirable behavior that you would want to know about ahead of time. So personally I would think you would always want the effect to happen, to avoid these sort optimizations that might lead to unpredictable code.

JRL: I think that these stem from the fact that whether or not we should do short circuiting. The destructive nature of setters is important. I think people would be surprised if `innerHTML ||=` is a huge performance penalty just because they didn't understand they would be getting a re-render.

I think that the large majority of code that I have ever written, I don’t use setters. The fact that this internally has an optimization, it won’t affect 99% of the code I write. Whether it uses a simple or short-circuit set, the users won’t care one way or another. But in cases where it does matter I think people would want short-circuiting.

DRR: Still irks me a little bit but ok.

JRL: I think that the logical operator should do a logical operation before the set.

DRR: Ok, but that’s not what plus does. It’s not a good enough analogue to me. I don’t know if that is a blocker.

WH: I’m glad to see this. I've been trying to get it in since about 2001. Yes, we should do it with the semantics you describe.

MM: I do support the semantics you are proposing. I would not support it without short-circuiting. The observation, “if you are only programming with properties, it makes no difference.” That is wrong, because of frozen properties. If the property is non-writable, in the case where you short circuit and not assign, there is no error. It is an important non-transparency to be aware of.

JHD: I assume that your preferred alternative would be an unconditional assignment. In the Airbnb Style Guide, unconditional assignment is banned. From a conceptual viewpoint, it is unclean to do an assignment when you don’t need one. In every codebase I touch, it becomes `if (!a) { a = xxxx }`. I am only setting if it is falsy. I find it messy to not have this as the output. I find this highly desirable because this is the actual semantic I always want: only do the assignment if there is a change to make.

DRR: Not really bought into it, I would expect many style guides differ. Again, subjective, so I get you. Understood.

SYG: Daniel, do you have an example of a setter where the side effect is desirable every time?

DRR: I think that my main concern is really, you are getting a behavior that works some of the time, and then some of the time gives you a surprise. Maybe that is not great, or potentially cause an error. It seems potentially sketchy if you use one of these operators in an incorrect way, where you do have an error or some undesirable effect, it would mask the affect 50% of the time. It is kind of nice to catch it every time. Maybe that is not compelling enough.

SYG: It sounds like you're saying branches are bad.

DRR: Sometimes, depending on when the branch occurs.

SYG: If there is a concrete example here where the side effect is desirable, that may be more compelling.

DRR: I should find more use cases where the simple set is more desirable. I don't think it is about branching is bad.

SYG: In this thing, you see both, a branch (`&&`) and a set `=`. Your intuition is that the set should always happen?

DRR: Yes.

JRL: SYG asked for a specific example where triggering the set would be desirable. I think that would be helpful.

KG: I agree with the idea of trying to avoid surprises in edge cases, but you have a similar issue with the non-short-circuiting semantics. `a.b ||= c` would throw if `b` is non-writable even though you aren't trying to write to it, which, since most of the time properties are non-writable, you wouldn't notice.

DRR: I think we need to use some of the use cases. Without a concrete example, it is hard to argue one way or the other.

SFC: How does this proposal relate to optional chaining? It seems reasonable that you would want to be able to do `a?.b ??= c`.

JRL: Optional chaining is not a valid LHS. It is left for a future proposal.

SFC: It seems like these are two operators that want to be compatible. I’m ok with that being out of scope for this proposal.

JRL: I’m asking for stage 2.

(silence, thumbs up)

### Conclusion

- Consensus reached for Stage 2
- Reviewers (assigned next day): KG and DRR

- DRR (@DanielRosenwasser on GitHub, @​drosenwasser on Twitter)

## Status update on Array Filtering

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39-transfer/proposal-array-filtering/)
- [slides](https://docs.google.com/presentation/d/11l0A39d62XnCvUVj_K1ODHAmxm8MzfyRSYbs1zSpocg/edit?usp=sharing)

JRL: (presents slides)

AKI: I’m not trying to bikeshed what it should be, but filterOut has got to go. I agree it is the sensible term. Based on our conversation in SF in Dec about how we define "filtration" it is clear our mental models are all over the place.

JRL: In the issue thread, it was mentioned that maybe filter out was an English specific phrase. Maybe something filterXYZ might be more beneficial.

YSV: I'm not sure I see the case for this. You made the case that when reject is present from the beginning, the filter that we currently have is still much more commonly used. I'm not sure naming is going to address the confusion as well as userspace can. And I'm not sure that there's anything better than putting the `!` inside of the filter - it's very terse and clear.

JRL: When you do provide reject as a first class feature, it is used about 30% of the time, a pretty good frequency for this. There was a discussion on GitHub whether this should be a userland feature. If it is not on the Array prototype, people are not going to use it. Or people are going to patch it onto Array.prototype, which is bad.

YSV: You gave two different examples, I don’t find it particularly compelling to say that it will be used by 30% of users, because your example is from another language, which might not translate over. I would guess it would still be closer to 12%. That’s why I don’t think this is particularly useful to me.

MLS: Filters remove stuff but filter in the thing you want

JRL: That’s why I’m arguing that whatever name we chose indicates that the return item will remove it.

MLS: I think you are confused by calling it filter something. You have two action words at once.

JRL: I need to find motivating use cases and need to find a name that doesn’t use filter.

MM: In terms of the take-away, I think having better motivation that this whole proposal is worth doing at all is a take-away.

JRL: I had several delegates thank me for doing this proposal. I think that even in highly technica circles having a filter method with a clearer name is useful.

SFC: I agree with what MM said, but if we were to go forward with this proposal, I think that going with `filterOut` is not a bad idea, because it is a self documenting name which also documents the existing function. I think that there is some value there.

ZB: My concern is that looking at iteration operations in rust, there are operations like filter map. It seems like a negation of a logical operation is not hard.

JRL: All the feedback was that the name matches the meaning of filter in my head, which is that it removes items, not keeps them. In a room of about 40 people, 5 came up to me and agreed with it.

ZB: Is there precedence of a language that uses `filter` in the other manner (i.e. removing items that match the filter predicate)?

JRL: Ruby.

YSV: Is there an example of a language that uses `filter` differently from JavaScript?

JRL: Ruby's `filter` is the same as our `filter`.

MLS: So you aren't aware of any programming language that uses `filter` to talk about excluding things?

JRL: No

DRR: I recall that `filterOut` was moved towards in the last meeting because it gave a distinction that filter does the opposite of what filter does today, but reject would not give you that intuition.

AKI: I do not believe that is what happened at the last meeting

DRR: Ok. On the whole, I agree with YSV, I don’t know that people would accept `filter`/`filterOut` in general. If we are moving towards something like a `filterOut` or `reject`, that’s something we should be mindful of. We need to guide people to use them correctly, and you might lose some of that based on the naming. So, I know that is at odds with what was just mentioned.

### Conclusion

Update finished without requesting stage advancement

## `JSON.parse` source text access for Stage 2

Presenter: Richard Gibson (RGN)

- [proposal](https://github.com/tc39/proposal-json-parse-with-source)
- [slides](https://docs.google.com/presentation/d/1icQdwhaSubCmNyUAAJBhGYnvTnGi9qW8EsFOIvHrtso/edit?usp=sharing)

RGN: (presents slides)

KG: Excited about this proposal, but strongly suspect that you can’t get away with in-prose spec text, and will need to specify a parsing algorithm in ECMA-262. I also wanted to mention that I am excited for serialization as well as parsing. It is possible that these things are related, for example if you pass a flag to stringify, you would want the same flag to parse (especially if we are concerned about web compatibility).

RGN: On web-compat, if we do this, it would be the first time we provide a new argument to a user defined function. Some of the DOM methods have done that before. Is it your opinion that this proposal is the place to extend serialization?

KG: Not necessarily

MM: No. Extending serialization is much trickier than what you are proposing. The structure of the reviver guarantees that you cannot produce anything but correct JSON in a balanced manner - you can't have part do the left parenthesis and another do the right.

Anything that tried to extend this to serialization, as long as it was constrained to only emit syntactically correct JSON, we should consider that. Where would you not be able to emit non-syntactically valid JSON.

RBG: If we do extend serialization, it would be a requirement that that is maintained, maybe by having it be parsed after. If you wanted to have syntax characters, maybe not so much.

MM: What is the thing you want to emit that you can't right now?

MM: I would be in favor of just changing BigInt.

YSV: I think there's a lot of good ideas. Revivers need some help to be more useful for JavaScript developers. But because the spec text was not available on time, I can't support stage advancement right now.

MF: I don’t think that we should have the parse index included, because we should not treat the thing we're parsing differently in different positions: e.g. that could allow a deserializer to change behaviour based on whitespace. I also don't think serialization should be a part of this proposal. I'm also generally against supporting serialization at all. So if you would raise that proposal, I have reasons I wouldn't want to do that. We don't need to be able to generate all valid JSON, just parse all valid JSON. We only need to be able to generate things we want to accept as input to JSON.stringify. That may or may not include BigInts.

RGN: The noteworthy aspect of BigInt is that there is no language ability to emit lossless representations of BigInts. You cannot emit a sequence of digits that is a BigInt.

MF: I agree, and I don't think we need to be able to create all valid JSON.

RBN: About parse indices: I think it's less useful to look at the index as how to parse something, but I think it is more useful to be able to indicate where in the input an error occurs. Some implementations will tell you, but a custom reviver might not. If you are writing a custom reviver, and want to be able to state that this representation you are converting to BigInt or Decimal has an error, you can provide more context. If you throw an error, you won't have the context of where in the source the error occurred.

MF: I think if that's the case we're considering we need the information of where you're already parsing it. I think there's more discussion to be had.

API: Because BigInt's toJson throw by default, keep in mind if one piece of code attached a function to toJSON, and then fromJSON has a different function written by a different author, what happens? That could be a problem.

RGN: THat's one of the reasons serialization doesn't currently appear. I personally think it's worth pursuing but not worth pursuing together. It sounds like there's loose agreement to that.

API: I would agree that it is useful. It is a concern, we try to avoid introducing ways that people can make their runtime code have different behavior than we intend for them. For example we would not want to introduce an "is my code minified" predicate or that sort of thing.

MF: We’ve seen people attempting to use side channels in JSON to communicate. What is seen as insignificant to some is seen as significant to others, such as whitespace, unnecessary escaping, duplicate keys, etc. I want to reduce that capability.

WH: I agree with Yulia, I would have liked to see the spec on time before asking for stage advancement. But I like the general idea. There are some problems with the spec text that I could find in the brief time since you posted it.

You parse according to the JSON parser and then look for assignment expressions. There are no assignment expressions in a JSON parse.

RGN: It's parsing subject to ECMAScript minus Annex B.

WH: In the spec you are saying you are parsing it with respect to ECMA-404.

CM: Putting on my hat as the guardian of the perpetual immutability of JSON, one of the frustrations with BigInt is why can't you just serialize a BigInt as a BigInt, and you're starting to address that on the read side. … I think what you're doing is the right flavor of approach to dealing with the issue of the immutability of JSON. I'm not sure I buy your particular mechanism but I'm not sure I have a better one. I've always found the reviver/replacer mechanism awkward. I don't know if you want to sign up for more than you've signed up for but I think it would be worth investigating, could this entire parsing pathway be made better with the right dimensions of control and flexibility with some of the context sensitive things you’ve flagged as use cases. But I'm also a little concerned that we risk ending up with something clunky and complicated in its own way that is a nightmare. So it really calls for a tour-de-force of integrated thinking. In summary, I’m not sure I buy this particular proposal, but I buy the direction of this proposal. I don’t think I’m prepared to support stage 2, I’m not sure if I like the specific mechanism but totally buy the goal.

MLS: I don't want to take serialization off the table. I don't like that we can't round-trip the JSON that we can parse. Since we can’t serialize it, how do we expect to generate JSON that we can parse with these constructs? My concern is that we're talking about half the problem, not the whole problem.

RGN: On where does it come from, the answer is elsewhere. Not every language has this problem. JSON is primarily an interchange format. You can get JSON that is not necessarily valid in ECMAScript.

API: We have a cross language/cross env situation, with a lowest common denominator. We have to be vigilant that we don’t … It’s a real problem. There is no kind of versioning or capability flags. We’ve run into this with C++ code trying to emit Decimals where there was nothing you could do in other environments.

KG: To reply to MLS: There are lots of other ways we can parse JSON that can't be produced: weird escaping, whitespace, etc. The parser is already more liberal than the serializer.

RGN: I’m hearing objections. I will not push for advancement. There is enough positive reception that I will continue pursuing this.

### Conclusion

Given the objections, not requesting stage advancement. But will pursue further

## `ArrayBuffer.fillRandom` for Stage 1

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/rbuckton/proposal-arraybuffer-fillrandom)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkeB85XK3cCAu49gunA?e=Ksabft)

RBN: (presents slides)

MM: I like a lot of things about this and am in favor of Stage 1. I especially like that it is not added to the prototypes but added to the side. But it needs to be yet more separate: the `ArrayBuffer` constructor is part of the set of APIs which are purely computational. Virtually all of the primordials have no hidden state, with the exception of `Date.now` and `Math.random`, and those are perpetual pains. New proposals like error stacks are proposing new globals so we can distinguish globals which are per-compartment and globals which are shared. ArrayBuffer would be shared, and something that is inherently mutable is not that. This is why we were proposing a separate namespace for things that are not pure. Whether we put it on the `System` namespace or put it on a global or add it to a built-in module, I don't care, but we need to do one of those rather than putting it on `ArrayBuffer`.

RBN: I did investigate the possibility of creating a global for this. The most obvious namespace is `Crypto`, I had a concern that this would conflict with the WebCrypto API, but could have conflicts with the Node REPL. I was concerned about introducing a new global that would conflict with or compete with the WebCrypto API existing definitions. I felt `ArrayBuffer` was a satisfactory place for it because it deals with mutating `ArrayBuffers`. Please open an issue on the tracker. I wouldn't want to tie this to something like builtin modules - I am concerned with having to many things tied together.

MM: Ok. I agree that this shouldn't go on Crypto. I detest adding new global variables. I’m very concerned that we keep polluting the global namespace because we haven’t advanced builtin modules.

KG: You may not have noticed that this is a CSPRNG, which is a lot like not having state.

MM: I agree that it does not become a communication channel. Math.random, were it cryptographically strong would not be a communication channel. But it is still problematic. For example, it is not deterministic reproducible.

KG: I am also concerned with making something reproducible. This is not a side channel but you do have to mock it to get reproducibility, but because it's not a security issue it is less of a concern. It is worth the convenience of putting it in the place that it makes sense to go.

MM: I agree that it's substantially less of a concern.

KG: But you still feel ??

MM: I do.

KG: I disagree with that.

MM: Let's talk offline.

SYG: I am in general very uncomfortable with the redundancy with WebCrypto. It is a capability that the Web has, that Node has. I don’t think it is correct to copy what we need. I would much rather we find a way to use WebCrypto. We can always make the argument for this one case. We are setting a precedent that there are lots of capabilities that we may want to expand the languages capabilities. To make another thing, that by copying, even though we are doing what WebCrypto does at this moment, we are signing ourselves up to match in perpetuity or diverge. This is a practical question as to how to work with other standards bodies, and we don’t want to do that, so we copy. I don't think that is the right approach.

RBN: I do have a couple comments on the repo about not trying to collide with WebCrypto. We might be able to layer it such that WebCrypto can provide this instead, but we can discuss this on the issue tracker as well.

SYG: What do you think you are seeking in Stage 1? I don’t want ArrayBuffer.fillRandom, or Crypto.getTrueRandomValues. If Stage 1 has a possibility that we work with WebCrypto, that sounds good to me. If Stage 1 means that we try to work with a new API, just in 262, that hopefully is a both effort and aligns with WebCrypto, I am not OK with that.

RBN: My goal is to provide a mechanism for CSPRNG, single location to be mocked, which are blocking concerns for the UUID proposal. Whether that means implementing that as a method on arraybuffer, from an ease of use case seemed a good fit. Or bringing WebCrypto to the platform, I don’t have a specific path, the important part is that it is something that is needed. The main issue is that the WebCrypto exists in the web, crypto in node differ. The goal is to provide a cross platform CSPRNG.

SYG: I would be more comfortable if the proposal was rebranded as that instead of ArrayBuffer.fillRandom

SFC: On the UUID proposal, there is a thread or two on that proposal's repo about ways of possibly upstreaming the web crypto API into 262, I think we had that discussion in plenary. Ben has been the champion of that. My question is how closely have you been engaged with Ben and the other UUID champions in reaching out to the web crypto group to see if upstreaming that spec is a viable path forward? What drove you to make a new proposal?

RBN: I wasn't aware that discussion was taking place. This did start as a discussion on the UUID proposal and IRC. I haven't talked to anyone from WebCrypto, the initial design for this was based on some of the feedback in the issue thread on the UUID proposal. I'm not aware of any more specific effort.

SFC: In general I agree with what SYG said, this proposal should be rebranded as investigating the space of getting secure random values into 262, separating it away from the UUID proposal. I think we should make that clear when we go to stage 1.

KG: To clarify the boundaries of what you are comfortable with, you are worried about copying things. There isn’t that much stuff in the web platform to depend on, getRandomValues is a special case. But anyway, would you be ok with an outcome where we talk to WebCrypto and decide that we are mutually going to agree to move crypto.getRandomValues into 262, and the WebCrypto spec would normatively depend on it?

SYG: Yeah, I would be ok with that. As long as it is layered correctly and it doesn’t step on anyone’s toes. We have an unfortunate tendency to work within our own space.

DE: WebCrypto is not under active development. We can contact people who work on it, but I don’t think there are regular meetings where they are considering changing things right now. So it is a little bit different from what people might be picturing.

DE: If we are talking about moving WebCrypto into 262, I suggested that we use an IDL. For the JS stdlib I was suggesting that we use an IDL, possibly using WebIDL. It differs a bit from TC39 conventions, and would take a lot of work to get something that we would agree on. So these are things to consider.

MBS: There is active work in Node.js core to add support for Web Crypto to Node, that's hooking into the platform tests. If there are questions about what we're doing, we can reach out. With regard to duplicating APIs, with Node adopting these APIs, they are becoming more reliable cross-platform. So that probably plays to SYG's point about not introducing more redundancy. One thing we've done when making things that might be redundant is trying to make an API which is slightly lower level, though I don't know if that works for crypto in particular. I wonder if there is a space that we could explore where we bring something into our spec that serves as building blocks. But I do know that we run a risk of "standards poaching", where if something is happening that we like, then we pull it in, so I don't know if we can reference some other spec.

RBN: There are different ways you would reach the API, in WebCrypto it is a global. In node it would be a module. We would need to make sure we have a consistent mechanism to address that.

MBS: Built-ins seems like a really interesting way to approach that, especially if it's in a namespace, because Node could use the same mechanism.

SYG: What I am asking does not require that the specific capabilities required … maybe that is sufficient for this one. I don’t think it is a hard requirement that WebCrypto be available via some identifier or module. Which I hope is easier than providing scriptable access.

SFC: In ECMA-402 we reference the Unicode spec, some ISO specs, temporal is built on 8601, however that's not in the context of calling a function that's also in JavaScript. Are those two concepts fundamentally different? Is there a reason we can't say to look at another specification to see how to get random numbers, instead of just when talking about the format of dates or whatever?

SYG: Were you asking me?

SFC: Posing an open question to think about.

WH: The links to spec text are broken. Is that intentional?

RBN: Links in the repo or slides?

WH: Proposal.

RBN: I just clicked the link, it worked fine.

WH: I get 404s on those: https://rbuckton.github.io/proposal-arraybuffer-fillrandom

RBN: On the proposal repo, the links are correct. I just clicked on them all, they worked, it might be a networking issue.

WH: I’m going to strongly disagree with SYG here. A cryptographically secure random number generator is basic functionality, this should be accessible within the core ES language. Referring people to other specs to implement this is a little like not having subtraction because some other web spec defines it. We don’t need to coordinate with Node or whatever to define subtraction in the language. The definition of a secure pseudorandom number is something we need in the language. It needs to go in before UUID to keep folks from parsing UUIDs to get random numbers. In addition, relative to some of the other options for where to put the random number generating functionality, I think ArrayBuffer is a fine fit; I can’t think o a better one at the moment. I really like this proposal as-is.

KG: It sounded like SYG would be ok with the outcome that we define it in this spec, so that they reference us.

WH: Random numbers as used here are a simple thing.

KG: I agree that it is simple, but if browsers require that we coordinate, then we must coordinate.

KM: I don’t buy the subtraction argument. This is an API.

WH: The API is not parameterized in any meaningful way. Just request a bunch of cryptographically secure pseudorandom numbers, get them. The API is as simple as it gets.

KM: I’m not arguing one way or another, subtraction is tenuous.

SYG: The argument is not the simplicity, but the API surface.

WH: How so?

SYG: There exists via the web platform a way to get random numbers, that node may get. And if our working mode is that we don’t cooperate, I don’t think that is a good precedent.

WH: Why? Other things have strings, so we can’t have strings?

SYG: Because there are now multiple ways to get the random numbers?

WH: What is bad about that?

SYG: In isolation, you can argue that any thing we duplicate is ok, but it does not set a good precedent for the platform. Is your argument specifically for CSPRNGs.

WH: Yes, this is specifically for CSPRNGs. This would be very different if it had a larger API surface like crypto or Intl or something.

SYG: what is the harm in then a possible path of getting WebCrypto layered with ours?

WH: Adding dependencies adds unnecessary complexity.

SYG: Why does it add unnecessary complexity?

WH: You are introducing dependencies you shouldn’t.

RBN: Much of the web platform has a dependency on ECMA-262.

SYG: I don’t understand the extra dependency. It is a new layering, the existing dependencies will suffice.

RBN: ???

RPR: 8 minutes over, is this an important discussion to finish before stage 1?

SYG: what do you think about rebranding?

RBN: …

WH: I don’t want to expand this proposal to include much of WebCrypto.

SYG: I’m not saying expand this proposal. If random numbers are so basic for the language…

WH: I’m not sure what you mean.

RBN: The WebCrypto algorithm is intentionally vague. It is mostly host defined. There is a certain amount of entropy, but it doesn’t specify where the entropy comes from.

So it's not even well-defined in the web platform. It's more of a host implementation, where when you call this function, you expect the results to have a certain amount of entropy. So the reason this is proposed as a function on this object is ???.

KG: I have opened WebCrypto repo, there is an issue opened by the current maintainer saying, “If getRandomValues is upstreamed in ECMA-262, we should update the Web Crypto API to reference their definition (assuming it's compatible).”, so we should upstream it.

SYG: Given my concern is an API question, I am much more comfortable with this proposal if it tries to arrive at a unified API space with whatever exists today.

SFC: There are still open questions about WebCrypto. I don’t think we should promote the concept of ArrayBuffer.fillRandom without addressing these open questions. It could be that we maybe want to move forward, but I don’t think this specific function should be pushed.

SYG: If the proposal name is changed, I am OK with that.

SFC: I am also OK with that.

RBN: I can change the title to something about providing a CSPRNG to ES. We can discuss the broad strokes and figure it out by Stage 2.

WH: I don’t think we should stall for vague explorations. `fillRandom` is where it is. I don’t think we should turn it into an investigation about whether we should bring a large WebCrypto API into the language. I am very much in favor of keeping this simple as it is now.

WH: If renaming the proposal is what it takes to get to stage 1, that is fine, but I don’t want to expand the scope.

SYG: I don’t want to expand the scope. I was talking about layering with WebCrypto in such a way that they use us, or some way of interop, such that the amount of capability we need is provided. I want this to be a unified story between the API surface and the spec.

WH and MM: Thank you. That clarifies your position.

RPR: Is there anyone opposed to stage 1?

(silence)

### Conclusion

Advancement to stage 1 assuming changes:
proposal is renamed to clarify that it is just exploring the space of making crypto random numbers available to users

## ArrayBuffer view stride argument for Stage 1

Presenter: Shu-yu Guo (SYG)

- [Proposal](https://github.com/surma/arraybufferview-stride-proposal)
- [Slides](https://docs.google.com/presentation/d/1vRbrCpX8KoCTUtI5b4DC0kK8Oj5GhiSzjtUp5RedSM0/edit?usp=sharing)

SYG: (presents slides)

SYG: Questions?

KG: Wanted to express support for this. It is very useful for matrix math.

KM: Couldn’t this be done with a Proxy?

SYG: It’s possible in the way that many other ways are possible with a proxy?

KM: Fair enough. I wonder if this is worth the feature.

MBS: In my experience, where we try to use proxies, proxies are very slow. I like the idea of making proxies fast.

KM: If I were going to implement this I'd rather just spend the time to make proxies fast for this case.

MBS: We had proxies setup to do this originally, that we had to pull all the proxies, and introduce new APIs so that we can synchronize everything manually. From my conversations with the v8 team it did not seem likely.

SYG: Of course as VM developer I would also like to make proxies fast. And as a web developer I would probably just do the math to index correctly. But strides are common and important for packed data. The API is small enough to learn and easy enough to implement in engines. It's just a question of expressibility.

KM: You can always have a function that returns a proxy for a strided view. It feels like we are adding something to the language that can be expressed for performance when we can make proxies fast.

SYG: You are asking us to make proxies fast? I don’t understand.

KM: It is a usability argument because proxies are not performant.

SYG: I’m not sure about that. It is a far cry from usable to say that to do strides, you should write a proxy, instead of the views supporting strides. The stride seems more usable - do you think it's reasonable to ask your web developers to make a proxy for this common operation?

KM: It depends on what you define common as. Sure, I can come up with anything where it is argued as common.

SYG: Prior art for strided views on arrays point to be common. Proxies are advanced features that in addition to performance, they themselves are more advanced features. You now have to learn the proxy API surface.

KM: Would you suggest this if proxies were equally fast?

SYG: Yes. It's a very common thing when you're making a new view of a buffer: in addition to the offset you also want a stride. To say that for that case you must also make a Proxy is not as usable to me.

KM: All it is the point of allocation.

SYG: Someone has to write the proxy code.

KM: Someone has to write the code to do all the things

SYG: Your contention is that given that it is expressible…

KM: Maybe this isn’t worth fighting now.

MM: Proxies can be made a lot faster. Despite that, I agree with SYG. Once you have a view with an offset, you’ve bought into views. For array data, strides are natural. The issue is not how common it is. The issue is, when you need it, how important is it for it to be fast? It would never be fast enough to use in an inner loop.

MM: One of the things that is nice about the shimability of JS is that shimmable proposals give us the ability to get a feeling for the API. Even though this should not be implemented for real with a proxy, it should be shimmed with a proxy so that we can start using it experimentally.

JRL: I don’t think proxies can ever be fast enough to justify not having a stride parameter. Can you explain the proposed API slide? I'm confused by bytes.

SYG: On BYTES_PER_ELEMENT: This is also kinda wrong.

JRL: I was super confused by BYTES_PER_ELEMENT.

SYG: This is a good point. One thing we could discuss is that the offset is in terms of bytes. Should the stride also be in terms of bytes, and check for alignment?

JRL: I can at least understand offset being bytes. Stride I would want to be as you are presenting here, just number of elements.

API: This is similar to C/C++ offset argument. In my mind this is very similar to an intrinsic operation when working with repetitive data.

MLS: They should be in terms of elements.

SYG: Offset is in terms of number of bytes. I think stride should be in terms of elements.

SYG: For what it is worth, the offset has already has this check. If it is unaligned it throws.

MLS: It seems crazy to use number of elements when offset is number of bytes but must be aligned.

RPR: In graphics you have two kinds of stride. You have pixel stride, and line stride. It does not meet a multiple of pixels. You are trying to achieve some kind of unalignment.

SYG: It is difficult to handle unaligned access. If it is an important use case, it is worth thinking about more. This proposal doesn’t support that use case.

KM: If proxies can’t be fast, getters can’t be fast. I dispute that proxies can’t be fast given that.

JHD: A known function is different to a proxy that can call any user function.

SYG: I want to reiterate my motivation is eliminating the boilerplate, not necessarily just speed.

KM: I don’t buy that proxies can’t be fast enough, because getters can be fast.

KM: I had to change length to a getter.

JRL: Getters are simple because it is a native getter to begin with. Proxies can have any dynamic behavior. Personally I don’t see how this can be in any way as fast as getters. You are saying this should be a user library proxy?

JRL: We should take this offline.

SYG: Any objections to stage 1?

(silence)

### Conclusion

Consensus reached for stage 1

## Update on Weakrefs

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-weakrefs)
- [slides](https://docs.google.com/presentation/d/1a4hrdlEcpyKmBj6VtAVYDkokeW_HLFXcg11xIxhwlWM/edit#slide=id.p)

DE: (presents slides)

SYG: I would like to ask the room what they would expect to happen?

SYG: FinalizationGroup, the API currently, you pass it a function, then you register objects. When the registered objects are collected, the callback is called. If the group is collected before the objects are collected. If the objects are then collected does the callback run?

(silence)

KM: Does anyone understand the question?

WH: What is a weakref-oblivious execution on the slide?

SYG: Shorthand for a possible execution where you fix a particular WeakRef’s deref call to return null.

JHD: When I put something in a finally clause, or .finally, I want it to be final. Unless the program terminates, I want it to happen eventually. My intuition is that a finalizer shouldn’t just vanish. The program shouldn’t discard the thing I told it to do.

WH: I would expect that if the group dies it doesn’t run. I wouldn’t expect it to be strongly held by the registered objects. It would break static scoping. If you associate a group with a scope, and you care about things dying while the scope is active. Once you exit the scope, you want it to be over.

KM: To be clear you still may be called.

WH: Yeah.

Mathieu: This came up from someone that was playing around with the Chrome impl, and were surprised by the behavior. Some other APIs on the HTML side do behave this way even if there is no longer a reference to the thing.

SYG: Thank you for the context.

RPR: 10 minute warning.

SYG: I want to propose that FinalizationGroups have independent lifetime to the things registered in it. When we aggregate the finalizers into groups this became blurred. So long as the groups have identity, it would be odd to have an invisible back reference. I am proposing that they have independent lifetimes. If there are disagreements we can discuss more.

DE: This makes plenty of sense. Often these are used to track a resource that also may die. If a WebAssembly instance dies, you don’t want the finalizer to cause a bunch of cleanup thrashing. After talking more with Till and SYG I understand it better.

DE: (continues to present slides)

JRL: I understand the argument for why the group dies before the object dies the callback isn't fired. But I'd side stronger on the other side of the argument. FinalizationGroups are just an observer, and observers all behave this way, where the callback is invoked whether or not the observer is "live". There is a backreference from the thing being observed to the observer.

SYG: You don’t get the guarantee that it will be called. The then functions of promises are strongly held by other things as well, the reactions.

JHD: Ok.

KM: If we want to have a dependent lifetime, the people who work the most with the web platform find it the most confusing.

SYG: You don’t have the guarantee.

KM: …… I could weakref the function callback, and observe that the callback will never be called because it is dead.

SYG: Is that an argument for dependen?

KM: Now I can prove I can’t be called.

SYG: Why is that an argument for lifetime?

KM: You can’t guarantee that yo will get called.

SYG: what confuses web devs is that they expect it to get called.

KM: There is a difference between called and called in all practical use cases. Chrome could never call finalizers, but that would be a group. At a practical level, the spec says you can do that, but practically it will get called.

MM: The line of reasoning KM used is wrong, and is an example of what is so tricky about observability. Executing the function does not observe the function’s identity. It can expose it, but the particular example does not constitute an observation of the finalizer function identity. I am pointing this out because it is a great example.

KG: I think MM’s point is that you are correct in that you can do this, but not the way you described.

### Revisited as the first agenda item TOMORROW

1 New Topic: Think about what references your finalization group Daniel Ehrenberg (Igalia)
2 New Topic: Weakref-oblivious execution Waldemar Horwat
