# 27 September, 2023 Meeting Notes

-----

**Remote and in person attendees:**

| Name                 | Abbreviation | Organization      |
| -------------------- | ------------ | ----------------- |
| Ujjwal Sharma        | USA          | Igalia            |
| Waldemar Horwat      | WH           | Google            |
| Michael Saboff       | MLS          | Apple             |
| Chengzhong Wu        | CZW          | Alibaba           |
| Daniel Ehrenberg     | DE           | Bloomberg         |
| Richard Gibson       | RGN          | Agoric            |
| Chris de Almeida     | CDA          | IBM               |
| Willian Martins      | WMS          | Netflix           |
| Pablo Gorostiaga     | PGO          | Bloomberg         |
| Daniel Minor         | DLM          | Mozilla           |
| Eemeli Aro           | EAO          | Mozilla           |
| Christian Ulbrich    | CHU          | Zalari            |
| Bradford C. Smith    | BSH          | Google            |
| Nicolò Ribaudo       | NRO          | Igalia            |
| Jesse Alama          | JMN          | Igalia            |
| Andreu Botella       | ABO          | Igalia            |
| Luca Casonato        | LCA          | Deno              |
| Guy Bedford          | GB           | OpenJS Foundation |
| Devin Rousso         | DRO          | Invited Expert    |
| Daniel Rosenwasser   | DRR          | Microsoft         |
| Jack Works           | JWK          | Sujitech          |
| Ross Kirsling        | RKG          | Sony              |
| Romulo Cintra        | RCA          | Igalia            |
| Istvan Sebestyen     | IS           | Ecma              |
| Chip Morningstar     | CM           | Agoric            |
| Samina Husain        | SHN          | Ecma              |
| Shane F. Carr        | SFC          | Google            |
| Ron Buckton          | RBN          | Microsoft         |
| Philip Chimento      | PFC          | Igalia            |

## ShadowRealm: Implementer Feedback and Demotion to Stage 2

Presenter: Daniel Minor (DLM)
[proposal](https://github.com/tc39/proposal-shadowrealm)
[slides](https://docs.google.com/presentation/d/1WJd9g3df_ibVHK3LdoKX2FboDwYQBUBJNxuRAWOYYbM/edit#slide=id.p)

DLM: Okay, perfect, thank you. Great, so, yes, today I’d like to talk about ShadowRealms, provide some implementer feedback and talk about demotion to Stage 2. ShadowRealms provide a mechanism to execute JavaScript code in the context of a global built-in and the goal is integrity, trying to isolate code in the separate realms and isolate interaction and this advanced to Stage 3 at the July 21, meeting. So we talked about the current status in Firefox and we landed our initial implementation in Firefox 104 which is just over a year ago. It’s currently turned off and what’s been implemented so far is basically JavaScript parts, SpiderMonkey specific parts and is ShadowRealm also, but in this case, the work on the HTML integration is stalled and it’s our opinion that there’s insufficient tests available and there’s potentially large impact on the DOM side of the code base. So talking a little more about HTML integration. We suspect it will be a substantial amount of work because, at least in Firefox’s case, I’m not sure about other implementations, we need to audit any DOM API that is going to be exposed to ShadowRealm that documents are a [INAUDIBLE] or work. So that’s all over the place in our code base and going to require some closed cooperation and coordination between DOM and the JavaScript engine team because a lot of this work might end up on the DOM side of the thing. Those are perhaps Firefox-specific problems, but I wouldn’t be surprised if that’s the case for other implementations as well. So in our position is that this proposal isn’t implementable as it currently stands. What we really need the is review of which DOM APIs that should be exposed to ShadowRealms. And we also are looking for sufficient tests to ensure the correct behavior of these APIs in ShadowRealms, my understanding is up until recently, the only tests available basically just instantiate the API inside of ShadowRealm, but there was no test of functionality. And so that, at least in our case, would not be enough to uncover bugs in the integration. So in terms of next steps, I see three ways ahead. One is to just remove the HTML integration completely and make this a JavaScript only proposal. In that case, it would be acceptable to SpiderMonkey to keep this at Stage 3 and the V8 team has already communicated to me this is not an acceptable way ahead for them. The other option is demotion to Stage 2, pending more work on HTML integration and testing. I understand that this kind of work is already underway or 3 would be to drop the proposal completely. I don’t think we should leave this at Stage 3. I think that’s going to send a wrong message to the community about how ready this proposal is. I have heard efforts have begun to write more tests, but SpiderMonkey team’s position is that we should demote this to Stage 2 until the tests have been completed and we have had a chance to review them. To be honest, we probably would have not allowed this to go to Stage 3 if we had understood the state of the testing at the time that it advanced. And that’s it for my presentation. So I guess I’d like to open it up for the queue.

DE: I’m in agreement with demoting this agreement to Stage 2. I worked on the HTML integration for the proposal and we worked on an attempt to figure out which API would work with HTML integration. That was more from a design perspective and it lacked sufficient implementation participation, and yes, we are insufficient on tests. So I have been hoping that someone would pick this up. It’s been a couple years and hasn’t been picked up. I’m really glad that Mozilla is bringing this to agenda because it continues to not be a shippable state. So, yeah, I just want to note that there is some integration and the problem is it’s just not in a good enough state yet. Thank you.

SYG: V8 agrees with the reasoning that DLM put forth. So I also support demotion to Stage 2 because it’s not in an implementable and shippable state and I want to reiterate what DLM has already said, which is that option 1 on the screen right now we consider -- V8 objects to taking path 1 and I want to take that off the table. I think it is important that the ShadowRealm’s feature remain integratable into the host and should get a subset of host APIs that make sense on the ShadowRealm instead of only shipping the ones that are in 262, because we don’t want to ship our org chart and all that. That’s all.

NRO: Yes, so, like, depending on work on HTML integration, like, how -- do we have a way to tell when this work is done? Because the problem with this proposal is that for every API, we need to choose whether to expose it or not. That’s the biggest HTML problem. So, like, is there a way to somehow verify that the proposal is now ready for Stage 3, or do we just keep rechecking all the APIs hoping that we didn’t miss something?

LEO: First of all, I am in favor of the demotion. We have a plan to tackle this problem. Unfortunately, Salesforce had to cut our earlier contract with Igalia, but it is now restarted. Now, Igalia will focus on HTML integration, including testing, with the goal to complete it to the point where the HTML PR can be accepted. I believe the ECMAScript parts are good, and our intention is to keep them as they stand in terms of the ECMAScript parts, unless something comes up in the course of HTML integration. And I’m glad to be working back with Igalia. This will put us back on track again and accelerate this work.

DLM: I think we’re in agreement, but, you know, when this comes back to Stage 3, I would just go through the normal review and consensus process then, and I’m sure the implementation will be happy to have a look at tests before that if you want to make sure that we will be happy with the level of testing prior to bringing this back to the committee.

LEO: Yes, I assume the HTML integration will require the tests to be complete. So I’m fine going, again, with the consensus process, but I am best faith here assuming if we have integration, we can have tests in good shape. We are following up. So this is even, like, tests are not a requirement to enter Stage 3, but my hope is actually to have a good implementation status when we come back to request Stage 3. But hopefully we should not go back to the ECMAScript aspects of the API when we ask for Stage 3 again, but I can only hope.

DLM: Yes, I’m in agreement with that. Our only concern is can with the level of testing and making sure that we have chosen the right set of DOM APIs to expose the ShadowRealms.

LEO: Yes, and I fully understand, and I agree with the sentiment, like, this doesn’t feel ready for implementation. As, like, it’s -- like, anything on the web, we can get this ready for on the ECMAScript side and it works in some implementations, but it doesn’t work on the web, so I think it’s fine bringing this back to Stage 2 until we complete this. Hopefully we can work things out and run the tests again.

CP: Yeah, I want to add to that, hopefully I’m audible now, I want to add to that that obviously these particular proposals is in the sense that it requires a significant amount of work on HTML. I haven’t seen a lot of proposals that have that level of integration with HTML and we lost some funding with Igalia to get it to the finish line for over a year, so now we’re back on the horse. So hopefully we can push through and get this in. We have already start getting some tests in. Rick (?) has been working on that for a couple of weeks now. And so we continue to do that, and we’ll continue to engage with Igalia and see if we can get all the pieces ready. But, yeah, so that’s the current situation of that proposal.

DE: For next steps: HTML integration generally goes through WHATWG, and WHATWG processes need support from two browsers, and no objections from any browsers. We will need active review and approval by at least two of the browser engine maintainers, in addition to no objections. Reviewers will be looking for these tests and at the choice of which APIs are provided. Is that correct?

DLM: Yes, that’s correct.

PFC: Just wanted to respond to DE. Could we get those list of things in the conclusions for this item so that we don’t end up having a similar discussion the next time we bring this proposal back to plenary.

DLM: I’ll make sure that’s captured in the conclusion.

JHD: I support the demotion. I think in general, we -- as I’ve said a few times in the past, we should be comfortably moving things through stages up and down so it accurately reflects where the proposal is and we should all -- this should be under a clearer scope, just as we’ve done with previous items. This is not an opportunity to be opportunist and relitigate things that have been decided. It’s to accurately signal to the community and to implementers where the proposal is. So +1.

MLS: I support the demotion to Stage 2. And there have been a lot of comments since then, but I also don’t want option 1, so option 2 as we move forward.

RGN: Agoric are willing to accept the demotion on this, but really do hope that it comes back, and if someone wants to pick it up, we’re willing to volunteer support, but don’t have anyone to champion it directly.

CP: Certainly, if anyone is available for helping on this, please reach out.

DLM: So if the queue is empty, I’d like to ask for consensus on the demotion to Stage 2.

### Summary of Key Points

* ShadowRealms is a proposal at Stage 3 offering somewhat isolated contexts for JavaScript code to run in. ShadowRealms let JS execute in a fresh global context, including all of the ECMA-262 built-ins, as well as, optionally, APIs that the embedder provides. Prior to reaching Stage 3, the champions made a concrete proposal for which web APIs would be provided for ShadowRealms, and although this integration received high-level signoff from browsers, it did not come backed with thorough-enough web-platform-tests or a thorough audit of the implications of all of the APIs which it proposed adding. Mozilla has found this gap to mean that the proposal is not yet implementable, and the proposal has been at a stalemate for years since it reached this point, with the champions not yet filling in the gaps.
* V8 and JSC agree that ShadowRealms should provide certain web APIs inside of ShadowRealms, so the host hook/html integration is a precondition for shipping. This implies that keeping the proposal at Stage 3 is not a viable solution.
* For advancement back to Stage 3 we’ll look for explicit support from at least two implementations that the testing and list of APIs to be exposed to ShadowRealms are sufficient.
* This will not be an opportunity to relitigate design decisions made already, made about the ShadowRealm API, advancement will focus solely on having a list of suitable APIs to be exposed to ShadowRealms along with sufficient tests.

### Conclusion

* Consensus for demotion to Stage 2, with advancement to Stage 3 dependent upon having a list of suitable APIs to be exposed to ShadowRealms, along with sufficient tests to ensure correct behaviour in implementations.

## Stage 3 Reviewers for RegExp.escape

JHD: Volunteers requested.

* JRL
* MF
* RGN

JHD: Anyone else, please feel free to review, but I’ll stick with those three as the list.

## AsyncContext update

Presenter: Chengzhong Wang Slides: https://docs.google.com/presentation/d/12A3LYlqgzmqRqE0mJ47GRWB6uKlqoFXiWE9gsxpRje4/edit#slide=id.g27aef1f6697_0_74 Repository: https://github.com/tc39/proposal-async-context

CZW: Hi. I’m CZW from Alibaba and I’m going to present the Stage 2 for AsyncContext update. We will have a quick recap, what is AsyncContext. It connects the async boundaries between different jobs. In this example, it is broken when multiple click events are being proposed at the same time, so AsyncContext addresses the problems here. In JS community today, we have several approaches like monkey-patching and various ad hoc approaches available to those problems, however, the monkey-patching problem, it is broken by the async/await syntax, and APIs like AsyncLocalStorage are specific to Node.js and not available on the web platform. The proposal defines a formal model based on AsyncContext with the APIs AsyncContext.Variable and AsyncContext.Snapshot. It addresses the issue with Promise and async at a specification level, so it would not be broken by, for example, whether monkey-patching can control `await`’s behavior.

CZW: The normative changes we are going to update is the context of unhandled rejections. Like we mentioned before, AsyncContext captures the async context when a deferred job is created and it will restore the async context when the deferred job is being invoked at a later point. As well, the event of unhandledrejection, it is a deferred job created when HostPromiseRejectionChecker is being called and which is being triggered with, when a promise executor caused the rejection function. The async context captures whenever a deferred job is created, like a microtask rather than a promise rejection itself, so for unhandledrejection event, the async context should be captured at a time when the rejection function is being called, so in this example, the value of the async variable should be called at a time of unhandledrejection event.

CZW: The second normative change is AsyncContext in generators. We defined that generators are capturing async contexts when they are initialized, regardless of when the next function of a generator object is being called in different async context value scopes. So in the example of this slide, the value of async variable will be consistent throughout the generator function bodies, and it will always be the value of when the generator is initialized.

CZW: Our next steps will be determining the full list of events that need the code handling that is similar to the unhandledrejection event. We had a discussion in TPAC with people from the browser engines, and we find that for all the events that the default behavior would be logged at registration time, seeing as the unhandled rejection event is different from IO events.

CZW: We have been prototyping the implementation to verify the performance regression, and we found out that the performance regression is sadly observable since it has already propagated a host set of values across promise continuations, but the -- host continuations, but the current prototype, we identified the current prototype has performance regression on the chromium’s task attribution since the web APIs use run under the hood, so we have to consider optimizations on this part. And we also are exploring the compatibility between Node.js’s AsyncLocalStorage, since it is the widely used alternative of the proposal, and it will need changes in the promise hooks to be able to describe the call time of the promise executors like we just mentioned in the earlier slides. And we have to evaluate the performance impact of the change. That’s all the updates we have in today’s present. And we -- we can go to the queue.

DE: In those last couple slides, I think both of the concerns are a little bit oversold in this presentation. We don’t currently see a regression with V8 because V8 already stores a single pointer which is propagated across promise reactions (the “continuation local storage”). This has been on by default since 2020 in Chrome. When this was introduced, there was a lot of careful work done to make sure that it wasn’t a significant regression, and this proposal can be implemented in a way which builds off of that mechanism. Hopefully it can be applied similarly in other browsers. About PromiseHooks, I don’t think we’re asking for any particular change to be made to PromiseHooks. SYG can comment best about the future of the V8 API, but our goal is to expose an API at the V8 level analogous to AsynContext.Variable and AsyncContext.Snapshot rather than asking for a particular change to be made in PromiseHooks. Bloomberg is supporting Igalia’s work (e.g., from ABO) to do this prototyping and improve specification, etc. because we see this proposal as strong and very useful.

ABO: To clarify, in V8 there was no regression in Promise performance because, as DE already explained, V8 is already propagating the relevant pointer. The AsyncContext.Variable.prototype.run function may have cost, but even with its use in Task Attribution, I don’t see much of a regression on benchmarks that I’ve been doing–Speedometer is just a little bit slower. It is promising that the slowdown is only slight, but I’m not sure how much faith to put in those results–they are very preliminary.

DE: Yeah, I agree that we shouldn’t put much in these results, because the optimizations just haven’t been done yet, so I think it’s way too early to conclude that run will have additional overhead. [Note, the AsyncContext champion group is adopting a goal of producing an implementation which does avoids significant regressions in any relevant benchmark, and would be happy to receive recommendations for relevant benchmarks to test against.]

CZW: Yeah, it’s just early prototyping to evaluate the performance consideration that SYG has mentioned earlier.

JRL: The slide at the very bottom, here it says prototyping Chromium task attribution effort. Events in other web API use run under the hood, snapshot run under the hood, not async variable prototype run events, and other APIs will capture a snapshot at some agreed upon time based on which a you’re using, usually registration time. There are a couple exceptions that we use call time. They will capture a snapshot at that time, and then when they invoke your handler, they will restore that snapshot, called snapshot that run and invoke your handler so that the global async context state is restored back to whatever that snapshot was. So it’s a different run method. Which run method had the slowdown? Is it async variable run or is it async snapshot run?

ABO: I have not measured the effects of the variable run. But I suspect snapshot to have the exact same effective -- like, effective no for 01 behavior as that.

JRL: Perfect, that’s what I expect as well.

ABO: However, task attribution, the work that is currently done in Chromium to propagate the attribution of tasks does need `AsyncContext.Variable.prototype.run`, because it needs to change the value of an Chromium-internal AsyncContext.Variable which stores the task attribution tree.

DE: Right. It’s all about making a new node in the attribution tree for event. So `AsyncContext.Snapshot.prototype.run` should still be almost free, but `AsyncContext.Variable.prototype.run` has some costs that will be optimized.

DLM: We’ve started evaluating this in terms of implementability in SpiderMonkey, and unfortunately that’s not ready for this meeting, but I hope the next time this comes up, we can provide our feedback in more detail.

### Summary

* AsyncContext is an API enabling propagating variables across asynchronous control flows, almost like thread-local storage for JavaScript. It is useful for cases like tracking the current OpenTelemetry span ID, which would be impractical to pass around as a parameter everywhere.
* The development of AsyncContext continues, working out details of the specification, prototyping in V8, developing tests and benchmarking.
* The context of unhandled rejection events is defined as the context of the time when the rejection function is called.
* Generators capture the context when they are initialized and restore it in the generator function body to ensure that the values of async context variables are consistent.
* No concern raised from the committee regarding the normative changes.
* The V8 SetContinuationPreservedEmbedderData API can change, and its existence should not be taken to mean that there is zero performance overhead for the mechanism underlying AsyncContext (there is some constant memory usage).
* The champion group continues to investigate the appropriate AsyncContext inheritance for running HTML events and other callbacks.
* Firefox is going to evaluate the implementability of AsyncContext.

### Conclusion

AsyncContext remains at Stage 2; development will continue

## Get Intrinsics for stage 2, with two possible shapes/paths?

JHD: Okay, so for get intrinsics, the current status of the proposal is that it’s two functions on reflect, since the last time we discussed this, we all agreed that reflect no longer needed to be exclusively for things that matched proxy traps. So there’s Reflect.getIntrinsic singular and Reflect.getIntrinsics plural. The plural returns a set of strings and the singular takes a set of strings and gives you the respective intrinsic. The only open question is should this list of intrinsics that is provided in the enumeration and perhaps also -- yeah, provided in the enumeration be all intrinsics or just the hidden ones, the ones that you can not discover from traversing global lists? That question is still not completely answered or at least not -- I have nothing new to bring to the table at the moment. However, the shape of the API will be the same regardless of the answer to that question and the spec text will be largely the same, just slightly more complex to only describe the hidden intrinsics instead of all of them. So to me, that doesn’t feel like a major semantic, so I’m here to ask for Stage 2, with one of the options, all intrinsics or hidden intrinsics, and all other things staying the same. And obviously that question must be answered before Stage 3.

JWK: If you’re only including hidden intrinsics, then what if we expose, for example, iterator helper, expose iterator prototype? You cannot remove it, so it brings inconsistency in the future that some intrinsics exposed by this is not hidden?

JHD: So that’s a good question. I think that the explicit contract of this would be that something can only disappear from this list is it, thus -- like, in the same -- like, from version A to version B of any given implementation, it can only disappear in the list if version B also exposes it in such a way that it’s accessible from global lists, so I think it that it would be okay to remove iterator in that case from the list, and then add it as the global. Certainly there’s non-zero come pat risk for that, and actually a really helpful argument for exposing all intrinsics, but I don’t think it would be fatal if we did the hidden intrinsics.

JWK: But if you remove intrinsics, the old code will break.

JHD: In what way? You could still call the singular method and get it regardless. It’s just the enumeration regard. That’s my understanding, at any rate. Is that it’s -- it would disappear from the iterator, but not stop being accessible from the singular method. All intrinsics would still be accessible that way. But that’s my understanding.

SYG: Just clarifying, I didn’t understand the distinction. The distinction is there’s the enumerator -- sorry, the iterator that enumerates all the hidden intrinsics or some set of intrinsics. There’s also a different set of keys that remains stable for all intrinsics that -- for the get method -- that the get method accepts?

JHD: Yeah, maybe that’s a point of misunderstanding here.

SYG: That was not clear to me.

JHD: SYG, your concern before was about all versus hidden. Does that extend to the singular method, then?

SYG: Yes.

JHD: In that case, this certainly isn’t ready for Stage 2, but it’s still worth getting people’s thoughts back was the -- in that case, JWK’s question is actually very relevant, because you would never be able to remove anything from the hidden list even if you then subsequently exposed it.

SYG: That’s right. Well, I mean, like you said, it’s non-zero compat risk. But the -- I think the two worlds that make sense is as, speak narrowly towards implementation, although I understand which is not a directly consumed API anyway, not speaking towards DX, we heavily favour hidden intrinsics only, and that -- by hidden, I mean the set of string names that are returned or accepted if all intrinsics are reachable via the getter function via string key, that has the same issue with consumption and stuff that -- memory consumption that we had before. It’s not just the enumeration.

JHD: So basically everything with the hidden half, everything that was hidden at the time this proposal landed and everything that was added in the future hidden would forever be in the list, even it later became unhidden?

SYG: The mental model would be that these that are not unreachable at this point in time, just that here is a different way to reach some of them, and some of it was unreachable at some point, and that’s why it’s in this list.

JHD: Okay, I think that is definitely a different mental model that impacts, so, yeah, I’m no longer asking for Stage 2, then, based on that understanding.

SYG: But I want to make sure that we have an understanding of what V8’s memory usage concern is, is that if all intrinsics were accessible in some way, via programmatic API, then we would need to keep an extra, like, slot basically for every intrinsic, and for every context, there will be, like, a list of slots. That is something we would like to avoid if possible, because on memory constraint environments like cheap phones and watches or whatever, we would like the context to be as small as possible, so limiting the enumeration doesn’t necessarily solve that if everything is still otherwise accessible.

JHD: That is understood. Thank you.

KG: So just to be clear, this would be the first time we would be reifying a distinction between the things in the list or not?

JHD: There’s a distinction in the host hooks, so a distinction would only be present if it decided not to expose any intrinsics. I think the expectation would be that a host would add its own intrinsics to this host method.

KG: Given the ShadowRealms discussion, I would like to ensure that before Stage 3, that is completely worked out.

JHD: Yeah, that’s a reasonable pre-Stage 3 requirement for this proposal.

DE: I was a little confused when reviewing the proposal. First, the README explained that there shouldn’t be memory overhead from this feature, but I hadn’t seen any explanation to the concern that SYG previously raised. For this possibility of two possible paths, I didn’t see any sort of document for that that I could have reviewed beforehand. It would be easier to review a proposal, especially when it’s proposed for advancement, if you provide a slide deck, or gist, or some other written form which explains what it is you’re asking to be advanced. I was confused about what I should be reviewing.

JHD: Yeah, thanks, that’s good feedback. The spec texts plus the open issue, which is an open question, which is why there’s nothing in the read-me addressing those concerns, because it’s still an open question. But the -- you’re right that I didn’t write anything out anywhere that conveys what I said in my intro to this item, so that’s good feedback from the future, thank you.

DE: I’m a little unsure about some of the use cases. I think we might want to consider handling writing code with integrity at some higher level. As a use case, JHD cited polyfill libraries, but these cause startup costs to be imposed. I’m not really sure if that’s what we should be encouraging people to ship such polyfill code as a committee.

JHD: Okay. That’s sort of a more foundational thing, but it’s being shipped regardless, so it’s a question of whether we want to make it, you know, more ergonomic and more reliable and potentially faster, but it certainly wouldn’t be slower than what myself and a few others are doing. I would have preferred to have that discussion the last time we discussed. But that’s certainly something we can still discuss.

DLM: I take it that you’re no longer asking for Stage 2, but I wanted to echo DE’s point. We had a very difficult time reviewing this proposal in our internal review meeting because, you know, it wasn’t clear exactly what the two shapes or paths would be. And the README itself was a little bit difficult for us to follow in terms of motivation and that kind of thing, so I’d encourage you next time you bring in to committee to prepare a little presentation with that kind of information. Not trying to complain, but we review many proposals prior to a TC39, so making that job easier for us would be appreciated. Thank you.

JHD: Thank you for the feedback.

### Summary of Key Points

* A new Reflect.getIntrinsic API is proposed which returns the original value of a built-in operation, before polyfilling. This proposal is motivated by enabling the authoring of high-integrity code.
* To control the memory overhead, JHD presented an alternative, which includes *only* the APIs which are not reachable via properties from the global object.
* This proposal is likely to have significant memory overhead for V8, making that team skeptical of it, possibly even with the “only hidden” mitigation.
* The motivation of the proposal and the variants under consideration were not clear to some committee members before this presentation; documenting these better would help TC39 participants prepare.

### Conclusion

* The proposal remains at Stage 1

## iterator sequencing for Stage 1

MF: Iterator sequencing. What we’re talking about when I say that is taking two or more iterators and combining them into a single one. Additionally, I consider in scope for this proposal interleaving values that are not iterators among the iterators. So as an example of what you have to do today to accomplish sequencing of iterators, say we have two iterators here, called lows and high, you can see they’re low digits and high digits, if we want to create an iterator of all ten digits, we can use a generator and then yield star the iterators you're sequencing, and yield is the feature for interleaving additional values among them. So this is about the best you can do today, having this immediately-invoked generator for composing iterators. I think this use case is deserving of something, you know, more ergonomic than this.

MF: This is another strategy you can take. Probably a little bit less likely for your average programmer to be writing. This composes the values you want together in sequence in an array and gets the array iterator out of that, and then `flatMap`s with the identity function. Not the most elegant, but it also gets the job done. One possible way we can improve this is introducing an `Iterator.of` and `Iterator.prototype.flat`. So `Iterator.of` is possibly a slightly nicer way to get your original iterator of iterators than putting things in array and doing
`.values()` to get the array iterator out. Similarly, `.flat()` is a possibly somewhat nicer way to flatten an iterator of iterators than `flatMap`-ing the identity function. For both of these, on the array constructor, we’ve already made the decision that it is worth it to make those improvements, because basically there’s analogues to both of them on Array. Another possible solution here is making `Iterator.from` variatic, so `Iterator.from` has already been introduced as part of iterator helpers and it only takes one iterable-or-iterator thing. If we allow it to accept more than one, it can, you know, produce the elements of those iterators in sequence.

MF: A third possible solution in this space is having an iterator prototype method that kind of concats or appends iterators. We see this in some libraries and it would look like one of these things either if we allow it only to accept one additional iterator, you can call it multiple times and chain them together like in the top line. The line following that, you can see if we allow concat to take multiple arguments, you can pass them in and not have to do that chaining. Possible downsides of this approach, if you are not starting with an iterator already, you have to make one. So, for instance, if the interleaved values are at the beginning -- you know, if we had iterator.of, that might be an easy way to do that, but we don’t really have that. Another thing is that concat as a name is problematic within JavaScript because of the whole IsConcatSpreadable, and how iterator.prototype -- the microphone is going out.

MF: `Array.prototype.concat` takes, like, non-array things, so I think calling it concat would be possibly problematic, but there are other names in use, like chain, that also might be problematic -- but append is possibly a workable name for such a thing. So this is also a solution, though not my favorite one. Now, analysis of prior art. On the left I have usages of, like, similar concepts of sequencing iterators in other languages. On the right, I have JavaScript libraries that work with iterators that allow you to sequence iterators. And takeaways from this are that most of these cases, they allow you to sequence more than one thing at a time. So just having an append that only supports one is probably an anti-pattern. The ones that do have it, mostly all have also a version that takes an arbitrary number of iterators.

MF: But that’s about all I’ve learned from analyzing the prior art here. That and some of the common naming stuff that I used to influence the prior slides. So what are my thoughts on it? I think that it is worthwhile to try to solve this ergonomics issue. I think Iterator.from being made variadic is probably the most elegant solution if we’re just considering iterator sequencing, but if we’re considering the larger context of all of this, like, how we might expand things in the future, I think Iterator.of and Iterator.prototype.flat also have other uses not related to iterator sequencing that, you know, make them pay for themselves anyway. So this would be kind of like solving two problems at once if we went this route, because of the side benefits. So those are probably both good solutions in my opinion. I don’t oppose the prototype method for appending but, it does have those design issues around it. So it’s probably my least favorite of the solutions.

MF: Anyway, that explains what I’m trying to accomplish here with iterator sequencing, and I’d like to ask for Stage 1.

GCL: Hello. Yeah. Hi, yeah, I’m a big fan. This is a thing that I use a lot, and I see used a lot in other languages. So I think it will be -- it makes a lot of sense to bring into JavaScript here. I definitely prefer the chain prototype method but, you know, don’t have to figure that out for Stage 1, so, yeah, I’m -- yeah, very in favor of Stage 1.

KG: Yeah, just for the naming, lots of things have concat and no one really gets confused about whether concat spreadable should apply. Like, string concat and observable concat, etc. And as far as I’m aware, this never causes problems. I’m not saying that we have to name it concat, I’m saying that I don’t see a reason to rule out that name.

MF: My reservation was less about the IsConcatSpreadable and non-iterators being spread. If I pass a number it to, there are some people, maybe even in this room, who would expect like a number passed to it to work as if it was passed to iterator.of first.

KG: As long as that throws, I’m not super worried.

MF: I don’t know if we can get agreement on that throwing, so that’s why I -- yeah.

JHD: Yeah, I’m definitely one of those people. Certainly if the doesn’t accept it, it should throw, but I very much think it should accept it. And I think that it would be kind of pedantry that would make it solely to use if we just force to the wrap in an array, for example. I really do hope that we can find something that takes both.

KG: I think if you would like to argue for that, it would help if you could demonstrate a single example of another method with that shape in any other language or library.

JHD: Besides array concat?

KG: Yes, besides array concat itself.

JHD: Everything that takes a promise takes a non-promise.

KG: I’m talking about concat specifically.

JHD: Something that is meant to join two things together.

KG: Yes, join two lists together.

RBN: Yeah, actually, this is a bit of a comment in response to what JHD had just said, that, A, I do agree if we don’t accept, it should throw, and B, I believe we shouldn’t accept things that aren’t iterable purely because accepting things that aren’t it iterable can be confusing when you start looking at string, because some folks might expect string to be included in the list, especially if they’re concatting and a iterable or iterator that produces strings and they add a string, and the next item, they might expect that to produce a string, whereas someone else might be producing an iterable that produces individual code points and then put -- or characters and then produces the string and expect that to concat that way. And it’s less about we don’t -- that iterable or the iterator helpers are specific to object iterables, but that this becomes the odd case out where we might allow a non-object iterable thing and then have confusion as to what that is supposed to mean. I think it’s just a bad expectation.

JHD: Yeah, I mean, I think that just pretending that strings aren’t iterable by only allowing object iterables is -- as iterator helpers is done is the best because the odd thing out is strippings are iterable and they never should have been, but we’re here, so new APIs should just not treat primitives as iterable.

CDA: The next on the queue is EAO.

EAO: Could you go back in the presentation to I think about the third slide, about showing a state-of-the-art for this. My issue with this proposal is I don’t understand why this is not good enough. Why are we considering the ergonomics of this for this solution to be so bad that we need to do something about this? Could you speak a little bit to that.

MF: Yes, the iterator sequencing is a very common need. I also think that this particular shape of solution is not something that your average programmer will reach for immediately. They might arrive at this after a lot of experience. But the thing that they will write will probably look more like this, what we saw earlier, which is far less ergonomic, far less readable. Also, once you have, like, methods for doing this, they’re a first-class value, you can pass them around, you know, unlike this construction here, which you’d have to make a function out of. So my argument is mostly on frequency of use of this kind of thing should be -- even if it’s only a little bit unergonomic, it still justifies it.

KG: Just to second what MF said, I -- I really don’t think anyone who is not a functional programmer is going to reach for this. Like, I would love to move to a world in which everyone thinks this is intuitive, but it’s not happening.

EAO: So the problem with the current approach, is it that the create an array and then call dot values on it, that that’s complicated or that the flatmap part of it is complicated or that overall the issue is complicated?

KG: My opinion is I don’t think anyone is going to reach for flatMap to do concatenation.

DE: I agree this is unintuitive. I could understand the code but it wouldn’t’ve occurred to me so quickly. I think what we’re competing with isn’t even this thing with yield star, which was more verbose, but people just converting the iterators into arrays. Oftentimes iterators are not being used as a correctness thing because it’s incorrect to iterate through, but as a performance thing because you’re trying to pipeline the calculation. So anyway, this feature seems worth it to add to the standard library.

WH: I concur with everybody else who said that this is a non-intuitive pattern. I would add the additional point that, in this pattern, there’s nothing to search for that indicates that you’re concatenating iterators. You’re getting `values` and `flatMap`, which don’t seem to have much to do with iterators.

KG: All right, I guess I’m next on the queue. So of the option you mentioned, I want to speak against using iterator.from. Specifically because using iterator.from means if you have a collection of iterators, you have to splat them all onto the stack, which means that if you have an iterator of iterators, it just does nothing for you. I would like a solution ideally that works if you have an iterator of iterators and does not require you to potentially unboundedly many things onto the stack. There’s just no reason to require a full traversal of your whole list.

WH: I’d like to understand the preference for `Iterator.of`, and what exactly does
`Iterator.of` do?

MF: If you see the first bullet point there, those would be equivalent.

WH: Okay, but I still don’t understand what `Iterator.of` is supposed to do.

MF: So let’s say I have two numbers, 5 and 6 and I pass them to iterator.of. That would be the same as creating an array of 5 and 6 and then getting the array iterator out of that. So it would produce an iterator that yields 5 and then yields 6 and then is done.

WH: And if one of those numbers were an iterator instead, what would it do?

MF: Yield an iterator. This is not promises.

MF: Given the feedback, it sounds like it’s possible that we could ask for Stage 1. I would like to ask for Stage 1.

+1 from WH, KG, DE, GCL, CHU; no objections

### Summary of Key Points

* Iterator sequencing refers to the “concatenation” of multiple iterators
* Iterator sequencing is common and should be convenient and ergonomic
* A survey of iterator sequencing possibilities shows a few patterns around naming and semantics in prior art which we can choose between

### Conclusion

* Iterator sequencing reached stage 1

## Structs and shared structs update

SYG: This is the second update about the shared structs and the structs proposal, but focusing on the shared part. That’s where a lot of the interesting design decisions in implementation work is being done. A lot will be – not a lot, the first little bit will be reiterating what the update was. The mission here is to raise the performance ceiling of advanced web apps by giving access and task primitives. Advanced is the key word for apps. Recognize that this is going to require some care to use and to leverage. But where it is needed there’s not really a substitute is my take. The reason it’s needed, there’s not a substitute is that currently, boundary costs kill your performance. There are multiple boundaries in the web app world. The biggest one for scaling your application to multiple workers is that there are post-message boundaries because the only way to communicate is by posting messages. And currently that goes through in a – in the HTML host that goes through the serialize – the API is called structured clone. Which means you have to copy, including all the primitives. Like strings and that kind of copy really kills your performance because it now necessarily means that the amount of work that you need to do scales with the number of threads. If you want to make your application faster, hopefully I do less – you can do work in power level. The work you do increases with the number of threads; that is not a good thing. So why didn’t SharedArrayBuffer solve the issue? The problem is, that moves the boundary somewhere else. SharedArrayBuffers are low level byte buffers. If you have high level data that you would like to coordinate between your threads, as you probably do because this is a JS application, if you have something in C++, that you are compiling to Wasm, sure. You have basically bytes and you can share them. If that is not what you are working in, that means you have to choose your object layout and how to serialize data in a byte buffer, and copy them in and out. Into a usable state and that also is a boundary cost that will kill you. We are to scale our advanced web apps. Things on the order of, like, Google Sheets, but also things like, you know, advanced video conferencing, applications on the web. All right. So on to the new stuff. Where we left off last time was, I gave an experienced report by engine to support sharing object zeros, which sounds scary. Hopefully that was proof it is possible to do without requiring derearchitecture. What I want to focus on this time is some feedback from early partners, feedback of people playing with the Dev trial, namely, that the top feedback we have gotten is that the thing that is shared in shared structs is data. What is not shared is behaviour. So functions, code that is not shared because as I will show later in the slides, JS functions are deeply not sharable. So this update talks about what we can do to recover the ability to attach behaviour, which turns out to be very important for DX to incrementally adopt shared structs. Okay. So I will go through what the problem is with sharing – trying to share functions and why they can’t be shared and present the current best solution that we have, which is a combination of using thread locale prototype and how we correlate different types across workers. And then also lay out the next steps. The number of JS functions are deeply not sharable. And comes down to, they are JS functions mutable first class values with identity. This is a JS thing. Most languages do not unless you pass around functions and add properties to them. Which is kind of weird. JS functions are always closures, even when you don’t close over program user bindings. When I brought this up years ago, there is a path here to make a new kind of exotic callable function that is somehow truly sharable. Maybe not closure, but restricted. Pure for some definition of pure we can argue about. The decision is to punt on that, which is a much bigger problem, in my opinion. I think we can punt on making truly shared functions later. And then the solution here, I think does stop you haves of thinking about new functions To go through the issues, the functions are to first, class in JS. So ignore the actual code part of functions. Look at functions code container. Functions are objects. Mutable objects and mutable objects with identity. We can’t share them because they are mutable. Unsafe. We add properties that make everything too slow, including singling threaded code. They have a prototype chain that is [db] goes to a prototype realms, deeply already single threaded. Today, if you load the same modular script multiple times, where you evaluate some function that returns another function or returns a class, a constructor or something, you get different copies of the same code. You get different function container objects, they might point to the same code underneath. First class right now. You can hold them. You can mutate them. This is much unlike say, code in C++ or java or something. For functions qua code, they are always closures and tied to the creation realm. You can always ask a function object where you were created. And this has implications for determining stuff in HTML, for example. So they are deeply closed over some single threaded state. We can’t share those things The upshot here is the functions as we have them today are unshareable. I don’t want to introduce an entirely new thing on how to make them sharable. Because I think that is a bigger problem and we can punt on that. And first I want to share data. Before I tackled the bigger problem, how to share code. So how do we think of solving of problem of attaching behaviour to shared structs when you can’t share functions? The current best idea is to let each do their own thing with thread local prototype. What is the idea here? Currently, we attach behaviour to objects to ordinary observes and the problem is JS functions are not sharable things we cannot assign them into shared structs. What if we make the prototypes for shareholder structs thread local? Such that each thread had its own copy of a prototype object, much like if you worked in a system with multiple threaded shared memory before, there is a thread local storage. So because these are thread local, they are not actually shared things. So they do not have the restrictions that shared things must have. These can be ordinary objects, reference anything in the thread. So each thread can set up their own prototype for types and if you squint, this is basically how primitive prototypes work today. If you call a method on a string, you manifest this string prototype in your current realm. This exists in the language. You have the same string because they don’t have an identifier as a primitive. Yet, if you call methods on it, it gets this magical context dependent wrapper, depending where you called it. So I am using the word thread here for ease of discussion. It is an open question whether the right granularity for JavaScript is an agent, or if it’s a realm. Which is a subthread thing. The snippet showing it. The syntax is definitely – it’s workshopped with RBN. I haven’t thought too much about it. If you have opinions, hold them. The idea here is that when you declare a shared struct, you have some way to mark it and say my prototype is in fact, not shared. My prototype is a thread local here. And then you can set it to be ordinary objects. In a snippet, I create a SharedPoint and then I attach – assign an ordinary object to its prototype. That ordinary object is only visible on P in – whatever granularity we choose. Agent-local, only visible in the realm where you set it. Realm local, only in the realm that you’re currently executing in Such that, when we – sorry. Go back here. Such that when we share this SharedPoint with another worker thread, I can reset it and then call it, but I cannot just call it because it’s thread local, this thread doesn’t have a prototype object for P yet. It can’t find it. It can set up its own. But until then, from the point of view of the other thread, it doesn’t have a prototype yet. The worker has no effect on the thread local field in main because it’s thread local. Hopefully that is all clear. What is the challenge for this? We can – incidentally do a side bar for the implementers in the room. Thread local is not just straightforward to implement. I want to give you a sidebar on how it’s done. What does it look like under the hood? Last time I proposed that this, the design must be implementable incrementally. I don’t want to require engines rewrite. They have different heaps per workers basically. Because what JavaScript is, single threaded. Why would you intermingle stuff? This has a property that different workers heaps are independently collected. Because they are separate things. So how would you implement the TLS incrementally in such implementations? Going back to the example, I have that SharedPoint thing with XY and a nonshared prototype thread local. What happens under the hood? Is that the prototype slot instead gets a TLS key, the thread local key, I don’t have the value in the instance. You have to look up in a side, I believe. X and Y are instance shared data properties. And this key is matched to some tables in each thread or realm, wherever it might be that matches – that has a value. That is thread local. The representation looks like this under the hood Yes. Okay. This is what I basically said The lifetime of these things is that, if you notice that . . . the TLS key, as long – intuitively, as long as the TLS key is alive, this is alive. It might be able to reference in some thread, its thread local value. So this entry in the side table is a ephemerons, and they are enters in weak maps. It means you have a pair of things where the life – the liveness of the key, the first thing in the pair, I am employs the liveness of the value, the second thing in the pair. The key is weakly held, but if it’s found out to be live, it implies that its value is also live. So these are – the thread local tables are in fact exactly just JS WeakMaps. The challenge this presents is, well, how do we collect them? Ephemeron collection is hard to implement. What are the required iterator to a fixed point? Because of this implication property. Suppose in the beginning, that is my WeakMap. I have A mapping to B. B mapping to C. And C mapping to D. So some values are also keys. In the beginning, we don’t know the full live object closure of a heap. We have to keep iterating every time we mark an ephemeron entry. A, live. Which means B is live. Now, because B is live, B is in the same WeakMap. Now C is also live. It turns out the whole thing is live. Once you finish to fixed point of This kind of fixed point is easy enough to do in a single heap. But the problem is, if you have WeakMaps that span multiple heaps, how do you do this fixed point? At first, I thought you could do this in some special phased way. Where you collect each heap independently, but publish some kind of coordinated weak list of things that we collect. But I think in the interest of time, you can reach out independently. I can explain the issue, if you’re an interested implementer. The upshot here, I don’t think it’s possible to independently collect heaps and collect cycles if there are cycles that involve ephemerons cross-heap. So yeah. I will skip this. This is too into the weeds for folks not implementers. The upshot, it’s hard to collect cycles with weakness across heaps. However, it’s – you can work around this easily enough by having a special marking phase that has visibility into all heaps. You can still retain the nice property that each heap is independently collected, so long as you never try to collect other heaps’ memory. You don’t try to unmap them or sweep them. You have a shared GC that is able to mark across all heaps, then you are able to collect these ephemeron cycles across the heaps. So all of this is to say that, I thought it was a hard problem, but there is a way to work around it and it’s not bad and implementable and the lifetime’s work as you expect. For details, reach out to me and I can share some docs. It might be interesting. Okay. So going back to the semantics of things. In the beginning, it is an open question whether these prototype are out to be agent-local or realm local. If it is agent-local, then we don’t need to reset up prototypes per realm. The values don’t differ. If you are arc cease being objects, you are not – don’t want to per realm view of a shared struct. So you might reuse the same object, even inside ShadowRealm. The conhere is that would need special censorship. If we don’t have realm grand later, remember that ShadowRealm have the callable boundaries, a hard constraint where we don’t commingle object graphs from different realms. But if you have this per thread, per agent key, on a shared struct, if you access it from it is a ShadowRealm, you might get a different realm and that’s annoying That problem goes away if you choose the granularity to be realm local, which has the nice – how primitive prototypes work today. You might have to reset up the [dled] local prototype – the realm prototype per realm which might be annoying. This an open question that is not yet decided I am going to move on to the next bit here, which is certain local prototype itself, it turns out, is not good enough to really solve the DX problem of not being able to attach behaviour There’s also something that we have been calling the correlation problem. So I will explain what the correlation problem is. Which goes back to functions being to first class. Suppose I have a struct.JS that contains my struct definition. It has a SharedPoint. I have highlighted relevant details. It has a thread local prototype. This struct that JS sets it up. I evaluate structs.JS in worker A and worker B. I try to share them. And then worker B calls foo and it doesn’t work. Because I evaluated the SharedPoint declaration twice. Just like class declarations today, when you evaluate it, you get a new instance, a if you function. So the programming – the JS and the VM doesn’t know that worker A’s evaluation of Sharepoint should be correlated with worker’s B evaluation of shared point. So this is kind of annoying. Basically, you have to correlate them somehow so things work as you expect. If you don’t correlate them, you would have to set up thread local prototypes for every copy – you end up have N copies of the same type in workers. And you have to correlate them all or you have to ensure that as you use them. Conceptually, you are using a shared thing. If you don’t correlate them, you have to set up different copies of the shared local prototype and that’s really anyway annoying I evaluated it twice. There’s two SharedPoint shapes with two different TLS keys. I only set up one TLS key in the other in worker B. There’s no way to know they are the same. Because this is just somehow naturally the language works. This is, I think, analogous to names, a private names multiple times, you have different copies of the private names, such that they’re not like automatic friends with each other. You can’t get a private name via another method that uses the private name. You have to get the name evaluation. So this is the correlation problem. We want to correlate shared struct types. I think ideally correlation means we shared the TLS key for prototype. VM can deduplicate shapes. This is monomeric. As you scale to the number of threads, you scale the number of types to the number of threads and everything is megamorphic. The types are already correlated. I think it’s surprising that if you – the private name thing, it’s surprising. So the design constraints for when chatting with Mathieu and Ron but this, we have for solverring this correlation problem, however we choose to correlate is not a new global correlation channel. Better DX than about manually correlating them and there’s a performance constraint that you don’t want your inline caches to be megamorphic We have a global register industry like so The idea is you have some way to say that this shared struct declaration is registered. It’s auto correlated. Marked as registered, then when you import the thing from multiple threads and share an instance, somehow things would just work. So what does that mean? If it’s registered, there would be a single shape under the hood. And that single – there’s one key and when you evaluate the declaration and multiple threads, because it’s deduplicated under the hood, you use the same TLS key and things work as you expect. The semantics that we are currently thinking of is there is an agent cluster wide registry. Across every thread. The key is the source location. It’s not the name. It’s not something that is forgeable by scripts and programs. It is literally the source location of where the declaration occurs. On registry miss, i.e., the first evaluation of a registered shared struct declaration, we insert that shape into the registry. In different threads, you will get a registry hit. Of the same source location. That’s the key. This is all predicated on, for example, that we expect you to kind of put your struct definitions in a single file. You are not duplicating source text. So on registry hit, with the same source location, there needs to be a check that shapes match exactly. And the shape here means the order and name of the fields and the thread localness of the prototype. If it matches, we deduplicate it in the registry. In the example, the shape exactly matches. And it’s deduplicated to have a single key. Otherwise, if there is a mismatch, I think there’s an open question on what to do. Either you can silently do nothing. Meaning that you just do not get – get a new shape or you can throw. And the open question is important for the communication channel. So is this a communication channel? My current thinking; in practice, no. Because the source location is unforgeable. That’s the key. If registry hits do nothing on layout mismatch, as unobservable as well. If we care about the DX and wanted to throw, even if that were the semantics, to attack that it seems like you would need to trigger reevaluation of scripts with different mutated script content. I am not sure like if that is your attack model, you can directly exploit things and leak things by this registry as a communication channel So this doesn’t seem like a communication channel in practice, but we are iterating on the design here. Ron raised the issue that this basically means that the source location is meaningful for registered shared struct declarations. Which means it bundlers cannot just duplicate them in a semantics preserving way. A different bundle for A and B, the register shared structs cannot be duplicated across different bundles because the source location is what we used to duplicate. So free shaking bunnedders would be aware. That is not a deal breaker to give guidance to give bundler here. I am sure how to duplicate things, but to have these special declarations to be nonduplicatible to me. That’s the current idea of how to share – attach behaviour without sharing methods. To have [dled] local prototype that then are somehow correlated to be the same shape under the hood across different workers so that things work as you might intuitive expect The next steps here are, we will try to implement this idea, or I will do, this and have continued exploration with partners to see how usable it is currently. Type description, to Ron Buckton, played with the Dev trials early days. The multiple threaded parsing is slower. So that’s not good. So maybe there will be – Figure something out why it’s slowing and iterate on the design to actually get the scaling that we like to see. Babylon.js will use this to get down to the post-message boundary cost. If you have opinions on the methods sharing thing, we have laid out here, please engage on the matrix channel. There’s lively discussion there. And the current road map is trying to prototype something in Q4 see how well it works. We want to ask for Stage 2 this year. With the data sharing and witness this is iterated this gives a complete picture of what the MVP for sharing data in adaptable way in JavaScript and plan to ask for Stage 2 with actually spelled out semantics not just these pictures at the end of the year. If you have interested in the space, join the matrix channel. And there’s also a regular working call on the TC39 calendar that you can join if interested. Thanks Ron and Mathieu.

WH: The examples you gave contain `with nonshared prototype`. What happens if you don’t include that phrase?

SYG: That’s a good question. I did not include that in the slides. Apologies. In the Dev trials, all have a null prototype. It is – I think there’s 3 possibilities. You can have a thread local prototype. A null prototype. Or a shared struct prototype. The prototype, if it’s not thread local, it cannot point to a thread local thing, that’s unsafe. Only point to shared things. So it would have to point to another shared struct. But normally, I would expect it would be either null or thread local. It’s just either a data thing or the behaviour has to be local.

WH: If you have a shared struct prototype, that can’t have methods. I am not clear what the use case would be.

SYG: There’s not too much use case. We might disallow that. I don’t have any concrete use cases for allowing that.

JWK: Can you explain again what is the registered part? What problem does this solve?

SYG: The problem is this: you have the beginnings of the shared – the declaration of the SharedPoint shared struct. I have two workers. Importing the same file from two different workers. Without some kind of magical duplication, what happens under the hood is this: there are two evaluations that create two different shapes. Even if the prototype were thread local, that’s keyed by a TLK key, you get two different keys. So worker A has one evaluation. Set up its thread local type for its evaluation. Worker B has a different evaluation. Setting up for its evaluation. Conceptually, they are supposed to be the same. Worker A wants to use instances of its SharedPoint, interchangeably with instances, the workers B SharedPoint. They are supposed to be shared things. Does that make sense?

JWK: But if it is not deduplicated, when SharedPoints sent to another worker, another worker can still assess properties right?

SYG: Can access data properties on it. In this case, I left out non relevant details. Suppose it has X and Y. They can access that. What can't be is the thread local prototype because it wasn’t set up. The data is accessible, some methods are unavailable and that’s a DX problem. We are trying to solve a DX problem.

JWK: For example, in the slides, 31, you said the prototype of the SharePoint, but the prototype is a plain object. How can you share that?

SYG: The key is deduplicated. The same key is shared so that in the TLS table for each individual worker, you can use the same key to get a TLS local object.

JWK: Still confused, but I think I can leave it off-line.

SYG: Okay. Happy to explain more off-line.

WH: In the materials submitted for this presentation, you list examples such as, if you have two unrelated scopes in the same worker both of which declare shared structs which happen to be named the same `SharedThing` but different contents, the second one will throw. Can you explain that?

SYG: So you are talking about … This possible thing? Probably throwing in there’s a layout mismatch? Is that what you are asking about?

WH: The same worker.

SYG: I think you might – either explainer is out of date or I don’t – I need the specific thing you’re thinking of. But there was a previous iteration of this, a programmatic API for the registry that lets you register with different keys, forgeable. In the current iteration, because the key is the source location, it’s not possible to have a mismatch in the same thread, if you have two different source locations in the same declaration. If you somehow manage to trigger a reevaluation of the same file or script or module with a changed content, then you can get a mismatch, in which case it might throw. It seems unlikely for that to happen naturally

WH: The confusion stems from, the talk seems to imply that these things are based on source — lexical scoping. The materials presented for this talk imply this is dynamically scoped: if two variables named `SharedThing` appear in different scopes in the program, they refer to the same struct if it’s registered. I’m confused about which is the intended behavior.

SYG: Okay. Apologies. This is not the – the compact semantics are not spelled out in any prepared material. The intention here is that what is deduplicated is the shape. When you evaluate this thing, even though it is the same – even if it’s in the same file, when you – every time you evaluate it, still get a different constructor function. What is the same is kind of under the hood. The shape, that the constructor function points to, for the instances it creates, including – usually this shape unobservable. Where it is observable is via the TLS key for the thread local prototypes.

WH: Okay. Let me see if I can phrase my question better. The example given is that if you have two unrelated registered shared structs in two different places in the program, which happen to use the same name, that throws.

SYG: Okay. That example no longer applies. That’s from a previous iteration using the struct and string name as the key into the registry. That is forgeable and that idea was being scrapped after late discussion actually

WH: Thank you. That clarifies things.

JWK: You just mentioned you need to check the shape. But I thought it’s just like duck type – it does not have something like private fields which you need to check if the object is owned by this struct.

SYG: You check the shape on the deduplication. If you want this registered behaviour to have the autocorrelation, you only want to auto correlate straight structs that in fact have the same shape and the same shape here means order and names of fields and thread localness of the prototype.

JWK: What if let’s say what if the shared struct instance is not registered and sent across different workers. For example, in slide 13, you received a shared object from another worker. And you set the prototype, is this page registered?

SYG: This P is not registered. No.

JWK: So I see. It also works if you manually set the prototype.

SYG: Correct. For F you manually set the prototype. The feedback, this solves a DX problem. If you need to have a – manually set up the prototypes of all your shared struct definitions ahead of time –

JWK: Okay. I understand what the problem-solving is. Thank you.

SYG: Thank you. Registry – registered behaviour is an opt in thing. You are still currently the proposal is such that you don’t have to use it at the point. You could choose to not do that, manually set up all the prototypes.

NRO: So you are not trying to explore sharing code. That’s what we are trying to do, module expression proposal. The proposal right now has only models and the older version had some shorthand for other dependencies that don’t have a different function. And that function doesn’t capture any scope because it’s liken closing the models and impossible to share that. So this share ends up working with my work together and see if –

SYG: I think we should work together regardless. I want to add to the punting of the code things. Functions in JS, are both code and code containers. And we can't share the code containers. Module expressions as far as I understand, chips away at sharing a qua code. We don’t have a go ahead idea of how to share code containers. Having sharable code is having a prerequisite for sharing contains.

NRO: What is a code container

SYG: It is abstract thing where it is first class thing you can hold that referencing code. JS functions refer to some ECMAScript code under the hood. But it’s like object. Compared to, say, an assembly, you jump to an instruction. There is no code container you can hold.

NRO: Shared buffer – have the shared memory –

SYG: Like that. Yes. Different instances object in different thread, but the backing store is the same memory.

JWK: As I understand the register semantics, if we want to use module blocks, or module expressions to share the code, it’s just share the source text and if we want to make them have the same identity across different agents or realms, we still need to have something on the module expression, or module block, to let it join the registry. Is that right?

SYG: I don’t have enough of the module expression stuff paged in to say

DE: I am happy that you’ve been thinking through how to have these thread-local prototypes. Per-agent code is a good model for methods on shared struct instances. I like your idea of deduplicating by source position. While I had proposed previously that this work via module expressions, your design here should work better given the subsequent evolution of module expressions. You wouldn’t want to require that the module be postMessage’d around to workers to get the right identities for such shared struct classes.

DE: Note that the V8 team was previously skeptical of using source positions in the case of tagged template literals. Anyway, I am happy if we end up going to source position. An alternative would be to require these things have to be at the top level of module and exported with a particular name. Then the key in the cache would be the module specifier plus the exported name. I think that could work. And it could compose with module expressions as well, because the specifier is the expression. It gets worse with module expression identity being based on – which time it’s instantiated, if we are okay going by source position, then we could go back module positions by source. I agree with your finding, that anchoring on source positions is important and we will have to use at some point or other.

SYG: Do you have something to think about for the . . . module name plus the thing is – the struct name is the key. Only the top level. Yeah. I am not 100% sure on what constituted like in practice exploitable global communication channel. Source location makes it enclosed, that seems it’s not possible. But your thing also sounds okay. I don’t know

DE: Thanks. Also, I wanted to comment. Some of the early discussion was about what would happen if you didn’t do the two kinds of opt-ins. Maybe we should say, shared means those two opt-ins are included. I was also wondering about whether methods could be declared in the shared structs class body.

SYG: Yes. So if – yes. That’s – the first part yes is open whether that’s a default. That should be the behaviour. If so, you can allow methods in line, I think there is a counter argument for pre-scheduling in the future, where we have truly shared function objects and how do you opt into that world. But I don’t want to necessarily design things to be so speculative and to be honest, I am not that – nobody last time I talked to was excited about adding a new exotic callable

DE: I’m skeptical of directly sharing function objects between JS threads. If you wanted shared structs and plain old data, that’s something I would understand.

MLS: More and more browsers certainly and probably other engines are going for a process per – in the question process per worker is common. You didn’t address how it works. And I see there’s a lot of issues with that. Especially, you’re talking about distributing garbage collection. So my concern is, if this requires a – in the same process, thread then some of the security benefits of going per process are turned off by requiring this to be in the same process.

SYG: Good question. Security trumps everything here. So I think I have an easy answer for, which is this will be the exact same compatibility as SharedArrayBuffers. So currently, SharedArrayBuffers require cross-origin isolation. I don’t know any browser that does a process per realm. I don’t think that is a possible because realms with be synchronously accessible – there’s out of process iframes, but this is different. But this will be exactly lined up with SharedArrayBuffers as a capability. So today, to opt in to use SharedArrayBuffers across different workers, you must be cross-origin isolated and agents – cannot be done in – ates in the spec, ES spec E sense cannot be put in different processes if they need to share a SharedArrayBuffers, because they need to be in the same VM space.

MLS: You’re just saying that this is building on a SharedArrayBuffer.

SYG: From the lens as a capability to be denied via like headers or the lack of headers, yes. But like –

MLS: Yeah. Obviously implementation-wising, but in the same class?

SYG: Yeah. If we introduce some kind of super isolated mode in the web, that precludes all shared memory communication between workers, SharedArrayBuffers is out the window and so is this

LCA: Yeah. I have – this is the first time I am hearing about this source location thing and it’s very interesting. This ties very much into the module work we are doing. And I would love to talk to you more about this. I have at an initial look at this, a couple concerns about this keying on source location. Namely, around the complexities that this will bring whether combined with bundlers and tooling because it’s unlikely that most tools do not support any way to mark a module – mark a shared struct to – for different entry points not be duplicated in the entry points but explicitly emitted as a model that is shared between those entry points, especially if they live on separate like – yeah. Like one is a worker and one is a main thread. The – this is particularly concerning because there’s a lot of – this is not easy to see for developers, especially if it happens deep within their import. If they have modules wanting to use shared structs and this tool maybe has minified, and depending on the entry point, it’s determined to be one or the other, the source location will differ. The user will have insight into what is happening here. And I think this is not an objection to key source location. But we have to be very, very careful about keying things on source location in a way that there is no way to override. If a bundler, for example, had a way to override the key, and make it explicit between two entry points, it may solve the problem.

SYG: Yeah. RBN has concerns on overriding the registry key. There are competing constraints about folks not having a communication channel, you can observe, collusions which makes it a communication channel. But I am not opposed to being overridable. We need to resolve the competing constraints somehow. Yeah

LCA: I also want to mention the comment about this being the same, I don’t think it is. The evaluation is not shared between two workers.

SYG: There’s a template object thing that is supposed to be deduplicated corresponding to source location

LCA: You wouldn’t run into this, the same worker would not load two versions of the same module.

SYG: Fair enough. I see other topics I would like to get to. So can I ask the folks in the queue, if you have – bundler semantics preserving duplication transform concerns, let’s talk about that off-line. It is a nonproblem. Otherwise, let’s go on with the queue of RGN

RGN: One thing I didn’t see in the slides is, what happens to an existing instance when a registered struct is evaluated?

SYG: The registration is syntactic. You can’t register it after the fact. By the time you evaluate a shared struct evaluation, you have the constructor, which is the thing that is either registered or not registered. You can't make a constructor, make some non registered shared struct instances, and ask them to register the [cuk]er. That’s not expressible

RGN: You have loose things that happen to have the same shape, but don’t get the data attached because they were sent over before evaluation?

SYG: No. By the time you are able to create instances, you already know whether those instances – have a shape that is registered or not. You cannot express a program that has already created some non registered – instances with non registered heap and register their shape after the fact because there is no programmatic API to register a shape. It is a syntax thing Syntax itself can be deferred by things like dynamic import eval. It is in the declaration that creates the constructor. How do you get instances to the same constructor. Instance that is created if it had been evaluated. How did it get evaluated, if you triggered the same script with different contents? No. You had it coming over a post message. So the same shape.

SYG: The source location thing. Those would just be uncorrelated. You can’t correlate them anymore.

RGN: Great. Okay. All right. We’re skeptical in general and the slides content on GitHub looked like it had action at a distance. In which case we would be strongly opposed. As for communication channel, that’s best taken off-line. But it is a concern and thing we look at as well

SYG: We recognize it as a constraint. We would like to work with you to ensure you don’t oppose it. We need to strike the balance between D and non nonglobal communication channel and bundler concerns. Those are all known constraints going into here. I would like there to be a possible solution. But we recognize your concerns

RGN: All right.

MAH: I have a clarification question. With RGN’s question and your explanation SYG. Did you say that a struct would be – struct instance received from another thread, before which the definition has not been locally evaluated, from what I understand, you can access the shared properties, but that wouldn’t have behaviour. But you should still be able to evaluate the definition by, for example, by dynamic imports

SYG: Yes, I misunderstood RGN’s example to begin with. What you say is correct.

JWK: I can see the benefit of the registered version. So in which case you need an unregistered version to be the default or the only option?

SYG: Yeah. Dan raised that earlier. I see a compelling argument for it. Yeah. That’s likely. But I haven’t nailed it down yet for Stage 2.

WH: I am also confused about SYG’s answer to the prior question: if a thread receives a shared struct via a message, but hasn’t evaluated that shared struct’s declaration yet, and later evaluates that declaration, can the shared struct’s prototype change dynamically?

SYG: Correct. Because what – it isn’t acquired per se, but when you evaluate the shared struct definition, that would assign the thread locally prototype. If the definition you evaluate is registered, it would do that and then like that evaluation with the assignment, into the thread local prototype and look like it would get a new method because someone assigned to its prototype.

WH: Okay. Also, I’m curious how the source location interacts with eval — it seems that this cannot be used with eval code. What is the intent here?

SYG: We may be able to say – if there are concerns, I am not going to lose sleep on making eval work.

DE: We already have eval defined for template literals which are defined per source position. It ends up a mess. To WH’s question, “what happens about acquiring the prototype?”: The idea is that GetPrototypeOf throws if the source position (or defining module) hasn’t run yet. This means that you don’t observe a mutation-like change. You observe – if you access something that is not a data property and you don’t have the – local prototype, then it’s an error. I hope this won't be too expensive.

SYG: You would love to see my TDZ talk later and see how things throw before they initialize.

DE: It seems different, since it’s a property access rather than a variable read.

SYG: Thank you for your time

### Summary of Key Points

* Shared structs is a proposal for a limited form of JavaScript objects which can be shared between multiple JavaScript agents
* Identified ability to attach behavior a crucial requirement for adoption of proposal, based on dev trial feedback from multiple partners
* Presented solution to use thread-local prototypes + auto-correlation global registry by source position + syntax for defining shared struct classes
* Champions plan to ask for Stage 2 by end of year

### Conclusion

* More work needed to iterate on the global registry for solving the correlation problem
* Folks seem generally happy with the thread-local prototype mechanism
* Shared structs remain at Stage 1

## Type Annotations: Stage 1 update and discussion

Presenter: Daniel Ehrenberg (DE), Nicolo Ribaudo (NRO) and Daniel Rosenwasser (DRR)

* [proposal](https://github.com/tc39/proposal-type-annotations)
* [slides](https://docs.google.com/presentation/d/1rwrWQkYityiK1pf5UpkgRYMKL8euqtDrrrbngMKJusY/edit#slide=id.p)

DE: I want to thank Asuma Takikawa for leading the work on this proposal in general, doing the majority over the past several months, but he is on vacation this week. He prepared most of this presentation.

DE: This proposal is in an early state. We have a tentative grammar, and it gives some flexibility, while also having a high level of compatibility with existing type systems. This is still a very early draft, and shouldn’t be taken too literally. But I’m glad we have it out there so that it can be iterated on with feedback from the community.

DE: For example, we’ve received more feedback from Flow and Typescript about certain omissions to be corrected. One very core goal is a high level of compatibility with types used in the current JavaScript ecosystem, for example, TypeScript. This informs a lot of the grammar design decisions.

DE: We held a community call on September 20th and got a bunch of interesting feedback, so the notes will be posted on the -- in the repository, but we went through a number of interesting conceptual questions and I’m looking forward to having more community calls in the future.

DE: The ongoing technical work is around the grammar: there is nothing to do with runtime semantics because it’s type erasure! It’s just as if they were comments. We’re studying the implications of the flexible grammar. WH gave some feedback about the "token soup" approach, where in the context of a type (e.g. after a `:` sometimes) you could just have any “soup of tokens” within those parentheses/brackets, matching the nesting, and that would be treated as part of the type. We’ve been identifying and fixing technical problems with the grammar. There are some ambiguities raised previously, some more ambiguities that we found later. And we’re making progress on a more concrete grammar variant.

NRO: Some major things were, for example, type parameters in function calls, because TS uses this `f<T>()` operator that, like, just is very much ambiguous with the javascript syntax due of comparison operators. And a solution to the proposal is probably going to use `f::<T>()`. This is not necessary in every case, such as in function declarations, but it’s necessary in some cases in function calls, in some cases like arrow function expressions it might be needed. We’re still going through all the possible cases to see where we can avoid changing the operator when it’s not necessary. That was an example of a solution for an ambiguity. There are other examples where we might likely need to change the syntax going on or introduce more cover grammars. We know that cover grammars are not ideal, so one goal is to try to keep the grammar as simple as possible.

NRO: Some examples in which we will actually have to restrict syntax and this a case of type syntax that could be parsed in different ways is when you have arrow parentheses in different times mixed with ternary operators, because, well, they both use colons, so it’s, like, impossible to tell which colon is for a type and which is for the operator. Typescript tries to be as (?) as possible and changes the latest choice to, like, different option if it fails the first time. But, like, we cannot and do not want to incur this behavior in the JavaScript grammar. So, like, the solution for this problem will be to restrict what you can have in the return of an arrow function, like, after the arrow, in practice, requiring you to use parentheses or braces with return if the arrow function is going to return another function that has types or, like, if the -- if the function and arrow function with types. And the grammar details are in progress. You can follow what’s happening in the proposal repo. And regarding concrete grammar alternative, like, if possible, the main goals of the proposal is to go ahead with token soup. While keeping the grammar as LR(1), which is what it currently is, at least as far as we know, and trying to solve all the ambiguities in the space. Even if that ends up being possible, if the result might be too bad, there still might be reasons to, in the end, decide to not go ahead with token soup. My colleague is working on comparing the two possible grammars to see which one ends up fitting the language better.

DE: To summarize, we’ve investigated the token soup issues or the issues raised previously. We don’t yet see any technical issues with token soup. But are willing to entertain different alternatives, and we’ll probably be coming back to the committee in the future with more details to share.

DE: In March, we discussed the type erasure semantics. We heard significant downsides around types with runtime semantics, especially from engines about what this would mean at runtime. Runtime type behavior would have costs that wouldn’t come with commensurate benefits. On the other hand, it would also reduce the possibility of compatibility with existing type systems. There was an idea of having reflection on types, but some feedback I’ve heard from the Python community is that their reflection on types is broadly considered a mistake. Reflection on types requires unconditionally holding around all this metadata related to types. And that’s often not the right thing to do. So we would like to proceed with erasure only semantics. Does anybody in the committee have further concerns with that?

KG: I agree we should do only erasure semantics. There is no viable path to runtime types here.

DE: WH, what do you think about this topic?

WH: It’s the wrong question to ask.

DE: In what sense?

WH: Why are you asking me?

DE: Because you previously expressed interest in guards, and we previously made the case that pattern matching and/or extractors are where guard-style semantics should be pursued. I was wondering if you still have the concern that you previously expressed?

WH: It’s still the wrong question to ask.

DE: Okay, what question should we be asking?

WH: The more basic question is why are we trying to create something which is different from both ECMAScript and TypeScript.

DE: By definition, this would be ECMAScript. That wouldn’t be a separate mode. We’re not proposing a different top level syntactic goal. Maybe DRR can clarify the relationship between the results of this proposal and TypeScript.

WH: Well, not quite — this would not be ECMAScript because ECMAScript does not define any semantics of this.

DE: Yes, just like ECMAScript doesn’t define the semantics of comments. We’re allowed to add more syntax that doesn’t have runtime semantics. This is to not to add a new top level goal. Do you think that’s a bad idea, and if so, why?

WH: I am uncomfortable with being put on the spot here. I hadn’t added myself to the queue.

MLS: I’m trying to figure out what the use case is, we’re going to delete them away, we’re going to erase them. If tooling is going to use it, can’t the tooling delete the type annotations before -- just like what we’re doing, but what Flow and TypeScript and other things do right now? I just don’t see why we want to parse this. We’re going to increase the payload size and the parsing time. And I don’t understand that the devs or engines get out of it.

DE: The idea is in a typical case, tools would remove the types, just like minifiers remove comments today.

DRR: Yeah, I think, Michael, your perspective and question here is very legitimate. But the core idea is trying to lower the barrier of entry and make it easier to just iterate with JavaScript in something that’s very user friendly for very casual development. You know, anecdotal pain points that people bring up are I can’t take my TypeScript and paste it into the console and try that out and I can’t just run that off the bat. You always do need some sort of preprocessing step. The work around that TypeScript has done is to actually parse and understand and give error messages in violation of types in jsdoc comments. We try to do a good job there, but it’s not as ergonomic and it’s kind of a pain in a lot of cases, and it sure would be nice if there were more first class syntaxes to express some of the things that you might want to do, right, to express the types that you have, to express that something not-null, things along those lines. So it becomes very cumbersome. Now, the question of "can’t the tools just do this?" is a valid perspective.

MLS: They’re doing it now, right?

DRR: Yeah, they are, they are, right? But, you know, like I said, there is a gap in certain runtimes. Node doesn’t have that built in. You could say Node could build it in, but then the browsers don’t have it built in and then you could say a dev tool built into the browser could do, that but there’s still always this lit extra little gap, right? So if there are ways to alleviate this more and further, then we can also talk about that as alternatives. But as a whole, we’ve also seen that being able to have design-time syntax is extremely valuable and could just make the overall barrier entry for new jobs for developers a lot lower, a lot more approachable. So that’s what we’re trying to explore. And then whenever we bring this to committee, we are interested in hearing, you know, about that, you know, perspective, if it’s valid, if the tools currently serve the needs correctly, things like that. But we also do want to be conscious of the fact that tooling has grown quite a bit in the last few years. Maybe we’re seeing consolidation and you have a linter and type checker and that and that, can we simplify it a little bit. That’s one of things that we’re hoping to see here.

MLS: But let’s suppose somebody uses a console or they -- you know, they have a local development environment where they’re -- they have a type annotation. They’ll get no benefit because they’re not passing it to a tool, so, okay, so they don’t have to, you know, preprocess it before they pass it on to an engine, but if they’re doing that, then they get the benefit, and I just don’t see that they’re going to want to keep the type annotated, you know, TypeScript flow, whatever source and use that directly as they’re developing straight to an engine, you know, a JavaScript engine, because the engine does nothing with it.

DE: But the things that DRR is describing is current feedback from current JavaScript developers, where they face this as existing pain points. Another thing you could think of is JSON, why do people complain about how JSON does not have comments? It shouldn’t be a problem because comments don’t do anything at run time, but it clearly causes real problems at many different levels to not allow comments in JSON. Not that we can fix that, but that’s another example of pain point that doesn’t relate to something happening at runtime.

MLS: But then it gets to, like, my other concern, is that in a sense, aren’t we picking the winning syntax that will be an ECMAScript? Even if it’s not comments -- the exact syntax of TypeScript or flow or whatever, we’re picking the -- a winner of a particular tool, aren’t we?

DE: So I’m actually comfortable with that.

MLS: Okay.

DE: Yeah, because we do have the world moving in a particular direction, TypeScript is very, very widely used. We are working to accommodate Flow syntax as well. But the goal is to align with the actual ecosystem that exists. This has been a design goal of TC39 in the past, e.g., in the design of class fields and decorators. The designs related to us working with the actual JavaScript ecosystem that exists to meet their expectations because they have learned that certain things are useful.

MLS: But being an open standard, I think we need to have not just TypeScript, but Flow and others at the table.

DE: That’s right, we do have Flow at the table. Flow attended the community call, and we’re working through more details of the gaps with flow in the grammar in the repository. So I agree.

MLS: I registered my concerns.

TAB: Just wanted to say my support for runtime valid syntax. Being able to run the code locally without requiring the build step cycle is extremely valuable for just usability. It’s no different than when you’re going to ship a minified version and you’re going to write your code with nice white space. This is essentially the same deal there. It would be very annoying if it was required that you executed only minified JavaScript. So no comment on the exact syntax we’re doing, but on the idea of runtime valid type stuff, it’s very, very convenient for authoring.

MLS: But minification is a transformation from an ECMAScript compliant code to an ECMAScript compliant code. So I don’t think that’s a valid argument.

TAB: That’s exactly what’s going on here with purely erasure semantics for the types. You start from valid code to exactly identical runtime behavior valid code. It’s just shorter.

DE: The idea of the proposal is that we would define type syntax as part of the ECMAScript-compliant standard. We’re not defining a new TypeScript or something like that. I want to mention something that TAB and I had discussed recently. JS and CSS are having this parallel evolution. As of five years ago, ten years ago, they had to do so much via tooling. Tooling is still very useful for both languages but not essential as far as the authoring experience goes. Increasingly it’s not essential. It’s still essential for CSS for scopes, for JavaScript for types, but now we’re working on this. Instead, tooling can be more about optimization, more about checking, and less about adding tons of syntax.

DRR: it’s interesting to hear a lot of different perspectives on ECMAScript. We’re trying to bring things into ECMAScript. I don’t quite understand where a lot of the conversation is around, like, the standard thing versus the non-standard thing. This is a Stage 1 proposal, right, and we’re trying to see whether we can bring something into ECMAScript and make it part of the standard. Let’s all keep that in mind.

NRO: Yes, as we mentioned multiple times, that this could keep being just lent into tools and tools just keep stripping the types as even with this proposal in production. I wonder how that suggestion affects all the other syntaxes and proposals we’re working on. We discussed Throw Expressions yesterday, and it’s a proposal I personally like, but it’s also possible to just implement it in Babel and TypeScript and not have this in browsers. Does this suggestion of using just tools also apply to other proposals? That’s a question to the committee, then -- not to any specific person.

KG: This is a meaningfully different situation from all of the others because TypeScript types are not useful without tools. That is the whole point of this proposal: it is built on the assumption that you are already using another tool. You would like to skip a step of your build process, I guess. But, like, the whole foundation of this proposal is built on the assumption that you are using a tool already, so it’s not really the same as other proposals where we talk about the use of tools.

DE: A major similarity is around having a global view of the grammar. If throw expressions were only implemented in tools, then TC39 would not have this global view. Similarly, for types, this proposal attempts to model most of the type grammar as actually used in practice in the ecosystem. The benefit for both is that, when we are evolving the grammar in TC39, we can be evolving the actual language that programmers are writing in for the most part, as opposed to evolving this thing that’s a compiler target. This gives TC39 more of a position to engage in the actual grammar that programmers are using, for the significant subset, that program in TypeScript.

KG: I think if the goal is that we would like to restrict and shape the grammar that TypeScript programmers use, we would not have constraints at all.

DE: That’s not what I meant. when TC39 edits the grammar, we have to keep this extra shadow grammar into account of possible extensions, e.g., TypeScript.

KG: Right, and keeping those things in mind is very different from, like, specifying it in full in a way that makes sense for shipping at runtime. Like, those are just different problems.

SYG: So I get the sense that we don’t, as a committee, I don’t think we have consensus on what the primary goals or the set of goals for the proposal is? I have heard multiple ones. I have heard it’s to ease kind of development time DX pains for which there are other solutions than to standardize a subset of TS syntaxes. I have heard kind of unforking TS syntax as goal, for which there are also other constraints and -- or other solutions and constraints than the dev tool thing. I’d like to better understand what is the primary goal of the champions for this proposal?

DE: This presentation was light on motivation because we’ve discussed it in previous meetings; I’ll bring up previous meeting slides.

WH: My question is very similar to Shu’s, that I heard that a goal of this was to allow programmers to skip some tooling and just execute TypeScript directly, so are we proposing including all of the TypeScript syntax as erasable ECMAScript annotations?

DRR: I want us to not take such a statement so literally. Maybe I’ll rephrase that as a way to get most of the benefits of TypeScript, still being checked by TypeScript or some other static analysis, of being able to skip some tooling intermediate thereof., so for example, you have a question about whether this is sort of like hinting at whether or month this is the full TypeScript grammar or not, and anecdotally, the thing that a lot of TypeScript users are often drawn towards is sticking to a version of plain ECMAScript, plain JavaScript with simply erasable types and type annotation, type declarations and type annotations, a little bit of extra syntax maybe for type assertions or like casts, basically. So there is a set of TypeScript syntaxes that probably could be foregone, right, or proposed separately within TC39, and so basically, it is something like getting TypeScript with all the tooling benefits without having to go through all of the tooling itself in some cases, right? Does it that mean it’s not just a drop-in replacement? Possibly, yes. But does that mean that many users would benefit in such a way where they would be happy to translate their existing code into that sort of subset or whatever it is? I’d say that that’s very likely for a very large group of users, maybe the majority of users. So I don’t want to get into a whole discussion about what, you know, what this is, whether it is a subset, a super set, the full syntax, something like that. Is the pretty much not going to be the full syntax of TypeScript. That’s what I would easily be able to tell you. And it’s probably not going to be the full syntax of necessarily any -- well, anyway, I don’t want to make a definitive statement there.

DE: I understand that people are concerned about these differences making it unadoptable, but I want to give a recent example in history where adoption was low-cost. There was some part TypeScript syntax around casting that just didn’t work with respect to JSX, another extension, and so they made a new version, which is TSX, which has different casting syntax. DRR can confirm this, but I don’t think TypeScript users are upset about the missing old cast syntax. As long as they have ways to do the things they’re trying to do, and as long as the transition isn’t that arduous, as long as there’s mostly compatibility, then these things can be worked through. With respect to TSX, there are no long-term plans that I know of to drop TS. But when people use .TSX, they don’t really miss any TS construct. The hope is with type annotations people would be at the points where they can adopt it if they want to and they wouldn’t miss too much the missing TypeScript features. That’s the goal in designing the grammar.

WH: So the answer to my question in the short term would clearly be no. I am still unclear on what the answer in the long term would be. And I’d like to know the answer.

DRR: Sorry, what was the question?

WH: Is the long-term goal to allow all of the TypeScript syntax as ECMAScripts erasable types?

DRR: We’re trying to find the set of syntax of type annotations and declarations that would bring many, if not most of the benefits of using TypeScript today into ECMAScript.

WH: But that’s not really addressing my question.

DRR: The goal of this proposal was not to bring all of TypeScript into ECMAScript.

DE: There are pretty few omissions. One omission is namespaces, which I think we have a clear alternative, to which is objects literals, which doesn’t do things the same way, but gets a lot of the same things done. Another one is enums, which, you know, also debatably could be largely served by object literals as well. Interfaces are included–they’re erased.

DRR: Parameter properties.

DE: Parameter properties. This is something I want to get to committee, TypeScript has a shorthand for when you have a constructor, you could declare a parameter public or private, which makes it a field. This is something that we’ve talked about over years, and in TC39 back when we were adding fields, it would be great to have a way that your constructor initializes a field by a parameter more tersely.

RPR: I was going to say, Waldemar, to your question, this subset that is possible with just purely, you know, JavaScript plus a few erased type, at Bloomberg, we’ve been using that kind of subset, which is basically TypeScript minus the three features that DE just listed, and we’ve found that we’ve been able to build, you know, a code base with millions of lines of code, fully functional, getting, you know, 99.9% of the value of TypeScript without using those extra parts. So even if it’s not the 100% TypeScript that you have today, it is something that I think a huge number of people could use it and be happy about it.

WH: Are you using the same syntax as TypeScript?

RPR: Yes, it’s the TypeScript syntax minus the syntax for these three features that are going to have some kind of runtime effect.

WH: Given some of the examples in the presentation, I can’t see how that could be true.

DE: Could you elaborate on that?

WH: Examples given in the presentation where the same syntax means something different in TypeScript and ECMAScript.

DRR: There are cases in which TypeScript preference to parse a certain way that ECMA does today. The easiest example is in the example we were talking about with type arguments, in which you provide a less than a set of types and then a less than operator and a token and a greater than operator. Those are places in which there would be a divergent because we could not break existing ECMAScript code. In those cases, we can do the same thing can certain syntaxes, certain tokens, and in those cases, when ECMAScript itself adds those tokens to that syntax, TypeScript itself would adapt to that as well. So we would add, for example, this ::<` operator that has been presented in this presentation, if that were to be added to JavaScript and to ECMAScript, TypeScript would also adopt that syntax. So that’s one example in which if ECMAScript says it’s going to add these certain syntaxes, if it doesn’t conflict -- basically, it doesn’t conflict with TypeScript, it will just work in TypeScript and in other cases, yes, there is a divergence, but for all intents and purposes, nobody will write in that way because typically it’s a type checking error or something like that. So no one really misses the ability to have like a less than followed by a greater than operator.

JWK: Yeah, I’m also thinking we should try to do it with something like console dev tools or a developer mode instead of directly shipping this into the language.

EAO: I voiced this also on the proposal’s community call, but looking at TypeScript, Flow, Hegel, and other type systems, these are very clearly communicating that developers have a need and want to have type information available when they’re writing JavaScript. Flow and TypeScript are some of the biggest solutions for this that we currently have, and as on this slide you have up here now, “we are evolving the syntax based on the needs of multiple type systems to ease migration and unify JavaScript.” The current approach that this proposal seems to be taking is that, okay, we have these existing decent solutions like TypeScript in particular with a large user base, how can we account for the specific needs that they have and incorporate those into ECMAScript?

EAO: This seems like only one possible solution to the motivation and to the question that we’ve previously accepted here for Stage 1. Another way of approaching this could be to identify that, yes, we recognize that there is a potential need for no-runtime-impact typing in JavaScript. Could we solve this problem not necessarily by giving space to specific current solutions, but by identifying what we could add to the ECMAScript syntax that could be parsed easily as comments? This way we wouldn’t end up, for example, with token soup, but we could create the potential for the world that we want to exist rather than the world where we currently are? So my question is, is there any interest among the people that are championing this proposal to investigate this sort of a possibility or is it strictly about finding a way of making sure that what is currently available in TypeScript and what is currently available in Flow or a subset of these are made parsable directly as ECMAScript?

DE: Sorry, can you restate the question?

EAO: When you are looking for a potential syntax to propose for this proposal, are you considering at all the possibility of finding a minimal minimal syntax that would quite probably be incompatible with current existing type systems, but which would be much, much easier for a parser to parse as a comment and ignore?

DE: To check if I understand your question, you’re asking: “if we take the proposal to be motivated in general, then could we make the syntax much simpler, reducing implementation burden?”. That’s something interesting to consider. I don’t think it’s been entirely ruled out. The tradeoff is adoption: how adoptable will it be in practice. You know, we’re guiding a living ecosystem. We’re not designing something in a vacuum. That’s a general thing for TC39, not specific to this proposal. So we’re still discussing this kind of thing and issues about whether the grammar should be much more minimal, but I am a little skeptical that this will be possible -- DRR, do you have any thoughts?

DRR: I mean, the initial question, is there a limited syntax. We’re trying to keep it as reasonable as possible without, like, having everything. That said, everything we’ve added to TypeScript was added for a reason. If you ask me, can we come up with something that is much more minimal that doesn’t have all these parser gotchas, it’s sort of hard to say, right? One of the reasons that we’re coming here with this proposal is because jsdoc is a bit cumbersome to write and we would prefer to not have users need to use that syntax. But, you know, I think any feedback that could keep it much more scoped and reasonable without tradeoff developer experience, we’d like to hear as part of this proposal too. It’s hard for me to say we would want to give up so much.

WH: I just wanted to say that I’m also interested in much more minimal syntaxes which leverage the ECMAScript grammar rather than trying to define a totally separate type syntax.

DE: I was a little surprised when I saw how large the syntax was, that the TypeScript team had proposed. But when they showed me example cases of exactly why certain keywords had to be in grammar, it really did seem well-motivated to me. For example, there are certain kinds of type operators that take arguments and then others that don’t, and they just end up needing to be in the grammar, unless we make a sort of radical change. Maybe we should be considering such radical changes. My initial hope was that we could reach both of these goals at the same time as keeping the grammar minimal and simultaneously largely compatible with existing type systems, but now, I’m pretty convinced that they don’t quite match up. The grammar is not *infinitely* huge.

KG: Yeah. This is mostly a response to something DE said earlier about CSS and JavaScript moving to not needing tools to author, but, like, the whole point of this proposal is that you still need a tool. I appreciate the goal of wanting to copy/paste stuff from your editor into the console and run it. The goal of not wanting to have a tool seems like it’s obviously out. So the question is just, like, given that you already have TypeScript running somewhere, how much additional burden is it to have to specifically run a tool to strip types before loading it into the browser as a file, because we could solve the console separately, and given the amount of benefit that brings for the costs of not actually doing all of TypeScript because there will be these edge cases, the empirical prediction that we will end up in a world where you don’t have to do that step I don’t know, I’m not convinced of that prediction. Given the tradeoffs here.

DE: I mean, there’s lots of different scenarios. Your type checking can often take place in an IDE. Your build step may be just when you’re moving to production and not when you’re debugging. But there are just many different places where JavaScript code gets used, and assembling the build pipeline for every single one of those becomes not always the easiest.

KG: Like, there’s two. Either you’re copy/pasting stuff out of you your editor or you’re running files. I’m not aware of another way of running JavaScript. If you’re copy/pasting stuff.

DE: There’s a lot of ways of running files.

KG: Yes, but a tool which just strips types is effectively instantaneous and produces files, so if you’re running files anyway, you can still run files. The cost of not having to do esbuild --watch - If it was the only tool you had to use, I could see the argument. But the whole point of this proposal is you already have to be using tools. Maybe they’re built into your IDE. And given that you are already using tools, having one that is stripping types is not that bad. It’s not as nice for copying and pasting stuff into the console, but, like, copy/pasting stuff into the console could be solved in other ways.

DE: I’ll kind of wonder if people have seen all the blog posts that are saying, “Why I dropped TypeScript and went to “JavaScript” (often with jsdoc comments) instead”.

KG: I have read the Svelte blog post, yes.

DE: Okay, but there is more than just that.

KG: Like, it did not -- I agree that some people experience this as a pain point.

MAH: Yeah, I just wanted to say really quickly, it was just mentioned right now, an IDE is a tool, yes. But it’s a different tool than a compiler that changes what you’re running. I just want to be able to run the code that I authored without having to run a compilation step. And the web is not the only platform running JavaScript. Not all environments need to have a compilation step to run code. I just want to be able to pull dependencies and run them, and whatever -- whatever type system they are, like, I don’t want to have to run compilation step before publishing my dependencies. Basically wants to be able to run what I write.

KG: Okay. The point of my topic was just this does not move us to a world where you don’t have tools. It moves us to a world maybe where you have an IDE, but you don’t want to use it as a compiler for some reason and you now don’t have to. I agree that is a change from the current world, it’s just not at all a world where there’s no tools.

LCA: So yeah, I can comment on this too. I don’t think the intention of this, like, I’m not one of champions, but from the outside, it’s not too move to a world that has no tools but to move to a world where you need less tools in the majority of cases, and I think, like, yes, it is true that your IDE will still type check, and, like, for production, whether you run a compiler over this code that will strip out types that will do bundling and all this type of stuff. But it is not as easy as, say, running `esbuild --watch` and everything works. This outputs things into a different directory and you now, from your HTML don’t reference your -- the JS source code you write, but a different JavaScript source code that is generated somewhere, if you want to publish this onto some Web server, whatever, it becomes more complicated. There’s -- there’s like many layers of abstractions between you strip out the types and you then being able to actually use that code. Like, yeah, it’s not non-trivial to do this. And like we see this because there’s very significant efforts in many, many places to get rid of this, like, problem. Like, Deno runs TypeScript out of the box but performing this type stripping thing beforehand, and this is a way you can do this. But this is also not ideal because this means that, like, you can’t write some code for dino and expect it to just work in node without having to use some other compilation stuff and you can’t run this in the browser directly. And while this really nice experience for Deno and nice experience if you’re using tsnode, it’s still not a great experience if you’re developing for the browser. I think what this propose seasonal getting at is getting that experience that you get when you’re using tsnode or deno ore or something like that to have developers that write things for the web also have that experience.

KG: Part of what I wanted to say was - I guess this was my next topic, but I will sort of combine them. The grammar is not proposed to be just TypeScript. Like, it cannot be current TypeScript for reasons we’ve discussed. It also can’t be JSX for other reasons. So this does benefit you in some cases if you’re doing something sufficiently simple. But if you’re doing something sufficiently simple, the experience is already simple. If you’re doing a more complicated project you are not going to be saved by this, because you are doing something more complicated anyway.

KG: Like, if you’re using JSX, this gives you no benefit, so you’re going to want another tool anyway. If you’re doing something that is complicated enough to -- that this would be of significant benefit, it’s unlikely to be able to be something that you can make use of.

LCA: So you’ve used simple twice in that thing, and I think those are two different simple and I want to respond to each of them individually. The simple in this is, like, only useful for simple projects I strongly disagree with. There’s very complicated projects that do not use JSX and do not use emit-driven TypeScript syntax. For example, as RPR mentioned earlier, a significant amounts of code written inside Bloomberg, and like -- yeah, I think that is just not true. And then simple as in it is simple to set this up to do type stripping or compilation, it may be simple for you, but there’s a very -- like, there’s a very significant hurdle to A, newcomers of JS and also people who don’t have very advanced build systems set up within their company that will, like, automate this for them or do this in some very easy way. There’s very significant hurdles to do this for many people.

KG: I didn’t mean to claim it was unambiguously simple to make use of TypeScript right now. But you have to be making use of TypeScript to get any value from this proposal, and if you are going through the process of getting TypeScript set up, also having it do emit doesn’t add that much complexity unless you are doing something more complicated.

DE: I would love to hear more about the experiences of Deno, because I think that provides motivation in itself.

JWK: In my experience, when I want to demo something in the console, I will not write TypeScript syntax at the first time, so this is very easy, but the hard part is JSX, you need a way more template code for this, so I think maybe JSX is more valuable.

EAO: Yeah, I want to echo what Kevin said. A lot of what he stated, he stated, better than I think I could have. On exactly the concerns I also have on this front, in that if you are doing something more than a toy problem with something like TypeScript, you’re going to be using features that will need a build step of some sort. So the utility here will be much less.

KG: To be clear, I don’t want make the claim that every significant project is complicated in a way that they wouldn’t get any benefit from this. Just that many of them are complicated in a way that they wouldn't benefit from this. The set of people that we are helping gets pretty small when you consider all of the people that it doesn’t work for or doesn’t provide significant benefit to.

MAH: I think that’s not true. I think any library author, and, like, there are a lot of large projects that would benefit from this. Agoric is large and complex and would definitely benefit from this.

MAH: We want the code that is authored to be the code that executes. We don’t want to have a compilation step. We do not want to have to audit what the compiler does exactly. And audit two set of file on what was authored and lose the context of the typing by auditing the generated files.

LCA: EAO, did you say this was for toy problems?

EAO: That was a term I used, yes.

LCA: Okay, because I think that is, like -- like, you can call the Bloomberg terminal a toy problem, sure, but it’s not true. I want to give some other context, the Deno standard uses no JSX and is written entirely in TypeScript that would be supportable using this syntax. And, like, we are not the only big standard library that does this. Node’s internal code surely could use, like -- like, could be -- yeah, TypeScript there would be good. And, like, a lot of server side code does not rely on JSX and does not need to rely on emit driven syntax and there’s a lot of benefit there. Saying because this does not solve is JSX problem this is not useful I think is, like, a total oversimplification and just, like is detached from reality and I don’t think we should be making that statement.

RPR: So I think what’s interesting here, just to reply to EAO and to KG, along the same lines as LCA, is that a lot of the folk that have opted into this kind of mode at the moment of having the types just as comments and to have this transparency between source and generated is -- it’s not actually the beginners. It’s not the toy projects. It’s actually the really large ones. So, for example, I mentioned Bloomberg. MAH’’s talked about his company. But also Svelte and webpack, these are actually some of the most advanced JS projects that have the most advanced build set-ups. They’re the ones that are preferring this easier to understand code. The value isn’t about being build-free or tool-free; that’s a red herring and not really realistic for the majority. It’s more about the incremental win, the marginal value that you get from this transparency and bringing source and JavaScript source and generated closer together.

DE: My intention wasn’t to say that we wanted to be tool-free. There’s benefit for the input to tools to be JavaScript. There’s benefit from us as TC39 participating in the design of what many programmers use, and having that be an open process, rather than only participating in the design of the build output.

JWK: If your code is for browsers, you won’t ship thousands of files, then you must use bundlers. If you are on the server, you have Deno or ts-node. I don’t think running the code unmodified is really a problem.

### Summary

* The champion group presented some more details about the progress of the type annotations proposal.
* The committee had significant concerns around the complexity of the grammar, and wondered whether it could be simpler.
* Committee members asked for more information about the motivation of the proposal, especially in understanding how this benefits developers given that separate type checking tools will still be needed.

### Conclusion

* The proposal remains at Stage 1 and is expected to be discussed in future committee meetings, as well as in open community calls.
* Future investigation by the champion group will be around possible syntax simplifications.
* The champion group will think about the motivation and come back to the committee with potentially more information there

## Decimal: Stage 1 update and discussion

Presenter: Jesse Alama

* [proposal](https://github.com/tc39/proposal-decimal)
* [slides](https://docs.google.com/presentation/d/1xOvWslwKi6evMWMYk1PQv9H0IEIhsifHbEBh2BOqHa0/)

JMN: Thanks, this is about the decimal proposal. Early stage proposal. I am Jesse. I am working on this with Bloomberg. I presented this in March and then in July. This is still Stage 1. Just to recap about the motivation for decimals. The main use case is dealing with quantities that require an exact representation, and typically use cases, money. And things like that. The difficulty today, if you want to work with money in JS, you can do some hack and represent your data in a different way. So instead, you drop the idea that there is a decimal point there and you multiply everything by 100. And you pretend they are integers. But that’s not necessarily the best thing because not every currency works with cents. And there’s no real good way to deal with binary floats (in this way) unless you use BigInt. So you can still run into difficulties then.

JMN: There’s a number of decimal libraries out there. Not necessarily dozens, but high, single digits. 8 to 10 out there. I would say.

JMN: Some programmers maybe don’t know about the issues about binary floating point numbers and their lossy nature. So maybe they have no other alternative (but to use JS Numbers). Maybe they can’t use one of the libraries. They work with the JS Numbers and hope for the best. But you can get rounding errors and other issues when you use numbers in this way. The same goes with human-readable (units, such as) weight and distance and temperature. Things we work with in an everyday sense, binary representing point numbers are not the best representation.

JMN: The use cases for these things I have hinted at. Any kind of computations with human consumable numeric quantities generally require some kind of decimal representation. Data exchange, you imagine that a JavaScript engine is in the middle of two systems. Let’s say one of them or both can handle decimal numbers natively, but JS does not. This is an awkward situation to be in for sure.

JMN As you might imagine, there are front and back end scenarios. In the browser, you deal with JSON and it gets handled in a weird way or HTML has decimal in it. But it gets warped. Or maybe the backend is the node server and handles data coming from SQL database or something like that.

JMN: I will give a kind of overview in terms of code. That’s all we speak about here. It gives us a sense of where things might go with decimal.

JMN: Let’s get the total for a bill. We are all going for dinner tonight and probably, these days, all of us are tourists here. Except for a couple people. Right? Calculating a bill. We have some items (with a price). Look at the bottom of this. We have some price and quantity. We have some kind of tax. Notice there’s a string representation there. Not a JS number. I made up these numbers. These aren’t coming from some real world data. I am making things up. We just have to iterate over these things. We have to do multiple additions. Start with a 0 and we have to calculate this exactly. Very straightforward example.

JMN: This (code sample) is a bit bulky and ugly. The time value of money, you have been to a bank and looked at a calculation for your home importing or something like that, you might have seen these formulas yourself. This involves some exponentiation: there's a `pow` down at the bottom, take a base number and raise to a power. Lots of divisions. Here, multiple applications and so on. We are getting into stuff using basic math here. Additions, multiplication. There’s advanced exponentiation. Wow. That’s fine.

JMN: I am going to try to make the case that raising things to exponents (is something we need for decimal).

JMN: (third code sample now) We have been running a survey for JavaScript for decimal. Use cases for their cases, in their apps. And one of the things we found is that some developers want to have a stepping up or down functionality in some kind of web app. They don’t want a step up or down functionality using binary floats, but exact representation here. Another example, we say step up a value. We want to start with 1.23. And we want to raise that up to some other slightly greater value. And so this is just some kind of imaginary thing that you might do here. You would add a certain power of 10, to a number or maybe subtract a certain power of 10. And you get something that starts with 1.23 and you say, go up to 1.2305. Or something like that. The main point here is that this is exact data and not approximation (with binary floats). A good approximation is sometimes not good enough with binary floats.

JMN: SQL has been ahead of the curve for 50 years—maybe not 50, let’s say 40—with the DECIMAL datatype. And any of those of you who have made some kind of web app that uses a connection to a database, where you have to plug-in and handle the DECIMAL type in SQL, you know about this. Imagine if we were to have decimals in JavaScript, we could improve our database connections by saying that the SQL DECIMAL type would move to decimals instead of strings or even worse, JS Numbers. Right? So then we could run some queries on – using the database connector here. Fetch things natively from the database where it is handling things with, and JavaScript we work with the confidence we are getting this right.

JMN: Those are some – a handful of examples to make up. You can imagine a number of other ones. I thought I would present some of the current thinking about the proposal in the format of keep, drop and add.

JMN: As I mentioned, this is Stage 1. Not ready for Stage 2, there are a couple of other questions and I would like to take the time, if we have time, to discuss some of these things. There are issues that are generally open to me. I can see them going in different directions. I am curious to hear what you have to say.

JMN: So as I have mentioned both in March and in July, we are learning towards having a data model here where decimal numbers are represented by IEEE754 Decimal128. This is a format that uses 128 bits for all values. Which means there’s a certain backing there; numbers don’t grow arbitrarily large. There’s always a maximum amount of space that can be used for any number value.

JMN: There was a discussion a long time ago—actually when this proposal was first discussed years ago— about what do we do with Decimal128? Because Decimal128, if you are informed about these things, takes the stance that it works with, say, 1.2 and 1.20 as distinct values. But we decided a long time ago that this is not going to be – a bit odd for many JavaScript developers. So we would work with normal JS values. Internally, implementation of this could use the full Decimal128. The only thing that would be emitted would be serialization, like `toString`. Behind the screens, you could have 1.20 but you would actually emit 1.2 if someone wanted a string representation.

JMN: The idea would have basic math only. Things like that are inherently inexact and probably won’t be there. So logarithms, single argument logarithms. Exponentiation, a single argument thing. Trig functions. These might be useful. And we have had some discussion here. But we are leaninging toward not including these. The difficulty is that Decimal would not likely be much better than the Math version of these things except yielding more digits. But do you really need, say, you the 25th digit of a logarithm?

JMN: The third bullet point here. What to do about things like not-a-number (NaN)? We would like to propose to keep the idea that if NaN, whatever the as a result of an operation, then just throw. This is not a value in our universe here.

JMN: There are things that are being dropped based on feedback received from implementers since the July presentation.

JMN: In earlier versions of this proposal, we were following the model of BigInt. So that was the initial thinking behind decimal. The idea is that decimal would be kind of another version of BigInt or like BigInt 2.0 you might think. But based on discussions, we have received feedback, operator overloading which are part of BigInt would be difficult and slow things down. And I think we should accept that reality. So the current proposal drops operator overloading. So, in other words, addition, multiple applications, less than, you might want to use when working with decimals, we propose would throw if any of the arguments was a decimal.

JMN: Following up this BigInt thinking, the initial version of the proposal was there is new literal syntax here. There’s some discussion that you can find in GitHub about this stuff and I myself have presented this earlier. But again based on strong implementer feedback we decided to drop this. There’s more reasoning here. So the thinking is that if literal syntax were available, but operator overloading is not, this is an awkward situation. We could write these numbers, but not really keep using them in an ergonomic way. Following the BigInt thinking, the initial thinking that we had was that there is a new primitive type here for decimals. But this – we have decided to drop this too based on strong implementer feedback. And one difficulty here is again following from the decision to not do operator overloading, if it doesn’t happen, having a new primitive type doesn’t have much added value there.

JMN: What have we decided to add since last time? Based on some discussion with various stakeholders and people who are interested in these things, and also internally at Igalia, we decided to add more rounding modes. This is something that goes beyond IEEE 754. Previously, in early versions, you have seen me say, “let’s do it like `Math`”. And we used banker’s rounding only. And there’s no way to do any rounding. I was trying to keep it simple, but some developers pushed back on that and said, we need different ways of rounding. So we decided to try to align with Temporal and I NumberFormat and support that as well, which is something that IEEE 754 says we should support, but we’re going beyond that.

JMN: We start to get to some of the meat of what he would like to talk about today. And not just me, but I would like to hear from you about some of the issues. In the July proposal, there was some discussion about what to do about positive and negative infinity and minus 0. My tendency and both the March and July updates was to drop these things, namely, if these things were to arise as the result after computation, then just throw. But what is interesting is that, in earlier plenary discussions, the support for the values received negative feedback. Again, the thinking is, or the mental model is, decimal just represents a finite value. So + and - infinity aren’t really there and -0 is just 0. So why are we talking about these things?

JMN: But I received the valid fedback, if we’re aiming for IEEE 754, then why are we dropping these things? Positive and negative infinity should be there, and minus 0 and NaN be there. If you want to really go all in. And I think that’s a valid point. Calculations would just work. No exceptions should be thrown. No nothing would get thrown. Weird values, sure, but nothing thrown. Closer to IEEE754. Also a valid point.

JMN: One con, here, the question here, for me, is that important part of a conformance? Does decimal even claim to be conformant or claim to be IEEE754 Decimal128 or are we being misled by that?

JMN: And here’s another thing that I would invite us to think about. I wonder whether developers would expect decimal to handle these weird values. The use cases for decimal, the ones motivating us and the ones we have seen in our developer survey, I think it’s fine to actually throw, if positive and negative infinity when they come up and minus 0 is 0. Think about it going to a cash register and you get a receipt that says NaN or negative infinity. You would ask for them a different receipt! That doesn’t quite match what your expectations would be then.

JMN: Anyway, so that’s, again, my own tendency there, but I am trying to get feedback from you, the committee here, about these things. I don’t want to take some kind of single-sided stance here.

JMN: And another one is about some more, let’s say, advanced or “nonexact” mathematical operators. I am – I said I was leaning towards not including these things. The thinking being that math is already good enough (for the majority of use cases we have in mind). But actually, when I was doing some work here to get some code samples, I realized two argument exponentials—`pow`— is a good candidate. That comes up naturally in a lot of financial calculations.

JMN: Put then that also – I doubt my assessment, maybe there are other applications which maybe we need some kind of laws or something like. I am leaning towards not, but curious to hear some feedback about these things.

JMN: So just to wrap up, let me give you the current shape of the proposal. Anything underlined (in the slide) is something new. The decimal or the data model is Decimal128 from IEEE. The thinking here, again, is that there is just a standardly library (object) with a sort of class-based interface. NaN is not a value here. So if we do some calculation, and it produces NaN, throw. We do basic arithmetic only. Rounding, we support all the fancy rounding modes from Temporal and Intl.NumberFormat, and the mathematical operators would throw.

JMN: (That’s a bit after typo in the triple equals. Because that would have standard object semantics. So it wouldn’t throw. I meant double equals)

JMN: If you want to track the current thinking with implementation, I have an NPM package that implements this. You can take a look at that.

JMN: Just to be clear, I don’t want to close the door on a future in which, perhaps, some version of the initial thinking (behind decimal) could be implemented. So this slide does not represent our current proposal. It represents something like version 2 or version 3. That requires a lot of work, and a lot of feedback from implementers. So in an ideal world, a V2 or V3 would work with some kind of plus and times and the math comparisons would work. I suppose that’s possible. But that would take a lot of support from implementers and needs work. It ties into some of the work that DE will tell us about later, about support from overloading and literals. Maybe in some future world, decimal literals might make sense. I don’t know.

JMN: And adding some advanced functions could be in the cards. There’s one version thinking about decimals which is like math 2.0. I like that idea. But I think we don’t yet have the documented developer node for these things at the moment.

JMN: So that’s all. That’s all from me. I am curious to hear if there any thoughts about some of these issues that I myself still are unclear about, ideas I still struggle with because I can see different ways of going forward. The floor is yours.
. CDA: Lots on the queue. DE is first.
. DE: Yeah. I see that a lot of things on the queue are about operator overloading or primitives. Let’s cover topics not related and then give my presentation about withdrawing operator overloading which I was hoping to leave for another meeting to give Time for other preparations. But I could cover it briefly within the timebox. And then go throw the queue on operator overloading. So JHD says, no. I would like to speak now. Go for it.
. JHD: Thank you. So we don’t need to get into the details. But without those things, which my intuition tells me, if we can’t have these things, we don’t have the proposal. The only thing without those things, now it’s a coordination point. But otherwise, it’s just putting a library into the spec. So, can you help me understand? Is there additional value beyond that as objects?

DE: We put libraries into the spec. We were talking about adding chains into the spec.

JHD: Sure.

DE: What do you mean?

JHD: I am trying, numbers are such a fundamental thing. That we shouldn’t be putting them in the language unless they can be maximally ergonomic and usable. In this form, I fail to see, I hope, what the benefit would be without ergonomics. Without being primitives and having operator overloading, I don’t see any ergonomic usage.

JMN: Admittedly, these are less than ideal. Those (code samples) could be trimmed down quite a bit if these were literals and the operators there. You’re right. You would, I think it’s a bit of a negative way to put it to say that it embeds a standard library into the language. And I take DE’s point that itself is not invalid. Right?

JHD: And I don’t mean to imply negative stuff there. Many of my proposals are like (that). Numbers are a fundamental thing in all of our minds, like I feel like this is a different case.

DE: I am really having trouble understanding how your argument fits together. I mean, I understand the argument. It would be nice, because numbers are so fundamental and come up for them to have good ergonomics. The part I don’t understand where you say, it would not be worth adding to the language without this. Could you elaborate on that part of it? You have restated this statement.

JHD: Is there something about the existing, typically when we add existing libraries it’s because the ergonomics of doing it, in user land, are worse or the performance is worse or there’s coordination problems around like we need everyone to be using the same format or the same symbol or whatever it is. So, when I hear about Decimals, the thing that immediately dominates my brain and gets me excited is canceled out by the lack of being a primitive and operating overloading. I am left wondering, what is the kind of iterative value-add compared to using an npm library.

DE: I don’t understand your criteria for library. Which does iterator chain fit?

JHD: Because we don’t have a pipeline or anything, it’s unergonomic to have a chain of things. That isn't an instance to throws.

DE: No. I mean the iterator chain proposal that was concatenating iterators. That didn’t fit the three things you said.

JHD: You have to do the generator garbage that Michael showed on the slide

DE: it’s hard to implement decimal from scratch.

JHD: You don’t have to implement that. You are saying because you could –

DE: Yeah. That’s the alternative that you’re proposing. Isn’t it?

JHD: Sure. I think that if – that in general, if the operation is very common, that – in the case of concatenating iterators, if you need to do it a lot, either don’t – find an alternative way not using iterators or pull in a library that abstracts over it. In this case, because it’s so hard to implement it yourself, they will pull in a library and since all the people who need the feature the decimal are using a library because there’s in way to implement this themselves, then what is the incremental difference between that and using this once it lands in the object –

DE: It’s the thing you might write yourself. But not Temporal because you’re going to pull in a library for that.

JHD: Like Temporal or this, it’s impractical to write it yourself.

DE: Why does Temporal meet your requirements?

JHD: There are significant benefits – I don’t think they need to be benefits, but around coordination and with internalization data that don’t apply here. Again like –

DE: Hold on a second.

JHD: Can we please stop. It sounds like you are trying to pull in unrelated proposals in order to attack my argumentation style here. Because you find it inconsistent with my other ones. I am talking about this proposal and my position on other ones should not be relevant in this particular case. My argument –

CDA: I am going to interrupt. We have a super large queue. I would like to move on to the next person.

JHD: Yeah. I mean, I would love an explanation. If we need to move on. Go ahead.

CDA: Thanks. SFC?

SFC: I will be quick. In that, I had an issue open for a little while asking what is the performance improvement to get from this to web implementation. I have not seen this data yet. If we could have that data, it might really help a lot regarding JHD’s point on another point about the value add.

JMN: I still owe you that. I am fairly confident that an implementation of this will be quite a bit faster than userland. Mine (my NPM library) is working with strings, and there’s no way that some kind of – out of the box C or C++ library will be slower than that. But exact data is still missing. And you’re right. If we had the data that would support the argument. I mean, would that help, JHD, to say that using my decimal128 NPM packages is 1,000 times slower than just using some library?

JHD: Yeah. I mean – I think a concrete performance argument is a valued answer to my question, but I didn’t know if one existed, which is part of why I asked.

JMN: Right. And so SFC is referring to an outstanding TODO on my part. I need to get to this.

WH: And in regards to JHD’s point about coordination, this library would be anti-coordination. I do quite a bit of stuff with math and if I were doing IEEE 754 math I could not use the library. This does not play well with NaNs. I’d also use things like trig functions and this does not support this. I would have to have two decimal libraries.

JMN: Good question. I did hear that those kinds of use cases though would be atypical. I mean, in the survey data we have been gathering for a few years now, there’s been only a handful of people who have said, yes, I need to do trig or these kinds of things. I suppose the use cases exist.

API: I can speak to that a little bit.

JMN: Okay. Yeah. Go ahead.

API: I would say to Waldemar, I strongly believe it should be IEEE 754, that is what makes sense and one main reason for supporting everything like NaN and infinity and everything in this spec is that one of the main motivators for this and use cases is interplay with other languages. If you have a C++ library, wrapped into JavaScript, you’re getting these values from C++ or a language, you need to represent them as you get them in JavaScript. It’s not the result of an operation in JavaScript. It’s just crossing the language boundary. The same that double is taken from C++ in JavaScript. This needs to also be supported when crossing that boundary. At a similar point to what JHD was saying, you can’t easily take – use npm library while you’re writing native code. Bringing the values from pre-existing native code datatypes into JavaScript, you know, it’s – like if you have double in C++, would you represent that in JavaScript when you’re crossing the boundary?

DE: It sounds like arguing the point that we should include NaN?

API: That’s what he’s arguing. Creating an anticoordination point if you don’t support –

DE: You’re agreeing with that point. We should add that?

API: And the third thing performance-ways, I mean more work on that, but anecdotally, when evaluating C++, the decimal types versus double, they are – on – the same order of magnitude as double. We were seeing times roughly 3X slower than double. Right? So there’s no chance I believe that a user land library would approach that. It’s slower than double because it isn’t running directly on the CPU –

JMN: I appreciate the point. The whole purpose of this discussion today is to try to get reasons for including things like NaN and whatnot. And I take the point, if it’s important to be able to slurp up values as is and handle them appropriately, we should support them at the time. That’s good.

SFC: Yeah. Just to list out some of the others: when we evaluate the 402 proposal, we put them against a list to consider whether they are motivated and in addition to the performance you mentioned, binary size and correctness are two more that could be motivators here. Use WebAssembly and I suspect a fast one in WebAssembly. Not – I don’t know what the delta is there, but pretty fast. But like it’s still too big or large. That’s something you could argue. And then correctness is like, well, userland library with the decimal have bugs and that’s another argument that could be made and a lot of these are Temporal arguments. For why we motivate Temporal. It would be nice to see the laid out more clearly. I do agree generally with the sentiment, it seems like the coordination point of a standard decimal is one of the main motivations right now, and it’s better to have more clarity on the other axis. But there’s more topics in the queue.

CHU: So to reply to JHD. So what remains there, so I have the feeling that sometimes this gets framed as just needed for financial – for Bloomberg. This is not the case. So working with decimals, you need all in projects and I had the last meeting, I said, we need something, a thing with a slider. To calculate for this. So there is a clear demand for it. And it’s been stated. Batteries included. We don’t want to look for a library that obviously could do that, but it should come with the ecosystem. And performance, I don’t think that performance – I see there is potential, this the language for performance as well. This is not the driving factor for us. Actually, developing applications. So why do I want to choose? I don’t want to have to be in the choice of choosing a library. And then making potentially the wrong choice. So I just want to view something this I encounter every day.

DE: Again, I am next in the queue. Performance is usually not the main factor. We care about performance of decimal operations but for a slider any time you are entering in a human-readable value int, your UI that might have a decimal point, decimal is the right datatype. Maybe some sliders are more like a ratio. But some sliders, if you have human-readable percentage, then that’s probably the right thing, to be a decimal.

DE: I want to speak to the IEEE 754 issue. To the NaN question, if you have an arithmetic that will be an exception rather than returning NaN, you can implement your own thing around it that will probably get NaN. And that does have a mode for everything where NaN causes throwing. I don’t see any nonconformance here. This has much lower uptake than IEEE 754 binary floats. If you look at different language programs, nobody except for C uses IEEE 754 binary. Every programming language uses a random decimal format. And users don’t complain about this. They are all different. The people like having a decimal format and they don’t run into the edge cases. The important thing; having a way that you can write decimals that doesn’t error for the kinds of qualities that people typically run into, which typically fit within this 20 or 30 something significant digits.

DE: So yeah. On the queue, no way to resume from exemption. If you want to do arithmetic, with NaNs, you wrap at the point of arithmetic. So you can build a NaN on top if you are using a wrapper. I don’t think that conforming with a whole ecosystem where the entire world is using IEEE 754 decimal is the thing that’s going on in the world. We conform where people use decimal of a number of digits and this is a model of that. It’s a worked-out model. It’s conformant to have NaN throw. And yeah.

WH: A lot of this is incorrect. It’s nonconformant to have all NaN throw. This comes up in various places, including intermediate results. For example, in evaluation of polynomials. You can raise NaN to the zeroth power to get a constant term of a polynomial. I suggest reading up on the how and why the IEEE spec is defined this way. We should not make changes like that.

SFC: Are we ready to move on to mine? Okay. Yes. TCQ, it died again. But yeah. Once trailing zeros, I wasn’t a part of this conversation that said we decided a long time ago not to have trailing zero zeros, but that’s something I feel strongly about. That we want that. So I would certainly hope that the door is not closed on having that be a part of the proposal because that’s, you know, definitely one of things that motivates from the Intl side.

WH: My reply to that: exposing cohort member choice would not give you trailing zeros the way you want. You wouldn’t get the effect you want from this.

JMN: He says the set of values that have the same mathematical value but with trailing zeros.

WH: And other very problematic side effects if we expose the cohort members.

MLS: In the slides you said that an operation has decimal, it would throw. Would you propose that it is implemented and we had a valueOf throwing or that the code in an engine would need to check if a decimal object it's dealing with?

JMN: I was probably thinking the second, but maybe it could work.

DE: I was thinking, the first. Checking in the upper ends would be expensive and unnecessary. I believe that’s what the semantics should be.

MF: We have had discussion that assumed that we – a lot of discussion that it is assumed that we have primitives off the table. As I understand, this was motivated by some requests from implementers previously. Can you reaffirm that stance and clarify motivation and we can reevaluate that and try to introduce primitives here? Is there anyone willing to speak to that?

SYG: Yeah. TCQ is not working right now. V8 reaffirms the stance in particular towards decimal. I think the quick recap is that for V8, our perception, BigInt has been poor, that we don’t want to do the same thing again and BigInt on paper has a bigger target audience who use it than decimal. We discussed it internally, and it failed for that, in terms of operator, and rolling a new primitive, we don’t want that for decimal. It does not clear the bar for adding a new primitive. And a new – and a new. We don’t want this separately from primitive because of the `===` hazard. So as it stands, the kind of complexity it incurs and the performance (cost) it incurs to all JavaScript programs, it means it is – we declare a very high bar to convince V8 that we want to operate at operator overflowing and decimal does not clear that, in our opinion.

MF: Can you clarify about the ROI of BigInt? What measurement are you using?

SYG: The amount of work that went into implementation, the cost that, performance cost on all JavaScript programs. The performance optimization work was not paid off in adoption. The main use of BigInt in the wild is scripts that try to hijack the CPU to mine crypto.

MLS: We have similar consensus. We did a lot for BigInt. And optimization and things like that. It affects the operators with numbers.

DLM: Yeah. In SpiderMonkey it is more or less the same story. It was very costly for us to implement BigInt. And we feel like there’s a very, very high bar for future new primitives. And I am not sure, I actually am now convinced having decimal is pretty useful. But we don’t feel it meets the bar for primitive. It has the potential to slow down every JavaScript program which is a pretty big thing to ask.

CDA: We have less than 10 minutes left. JMN:, can you see the queue or as it was, I don’t know, 5 minutes ago. 10 minutes ago.

JMN: Yes.

CDA: You want to prioritize any of the remaining topics or go to the next one?

JMN: Yes. Give me a moment to catch up.

CDA: The queue just came back.

JMN: I am looking at number 4.

SFC (on queue): Disagree with the mental model that decimal represents "a finite value". They represent "a list of decimal digits"

SFC: Yeah. That's a lower priority. I can talk to you about that later.

CDA: Okay. Next would be Waldemar?

WH: I already talked about the first point — we should conform to the IEEE standard and not produce results different from what that standard specifies. And the other point is, I am concerned that in the long term this will result in more than one decimal library in the ECMAScript spec. Looking at the code examples, the user ergonomics are poor. In the longer term, if we adopt this and then choose to improve ergonomics because of user studies or whatever, we will need to have two decimal libraries in the language and that would be rather problematic, the main problem being reference versus value semantics of decimal values.

JMN: Yeah. That’s right. But it seems that there needs to be a compromise here. We are getting strong signals from the implementers that adding these things with new values semantics is just – not going to work.

WH: Keep it as an external library. There are other aspects, such as if you want to compute sine and cosine to higher than double precision. There are valid reasons to do such things. Most decimal libraries do that. And they’re part of the IEEE spec.

JMN: Yeah. That’s true. But there are parts of the optional part of the spec. So there’s a must-implement and optional implement part of the spec. And anything that has to do with trigonometry is in the optional part of the spec.

WH: Which then creates a need for a second decimal library, which is a place I don’t want to end up in.

DE: Yeah. So about IEEE 754, when I tried to research other programming languages, I found that the great majority did not use IEEE 754, such as SQL databases. I mean, I found little uptake probably because it was standardized so late. I am wondering where that claim comes from, that most things, libraries use this and in particular, if that’s true, we should be able to find examples of, many other languages having these multiple libraries.

WH: SQL predates IEEE 754. Modern languages use this.

DE: I found C using IEEE 754 for decimal. Do you have another idea of a language that uses IEEE 754 decimal?

WH: This is not a productive discussion given that we have five minutes left.

DE: Next thing. Yeah. I would really like to learn the background of this. I think it’s – I mean, JWK raised the point before, about how it would be nice if we could future proof the decimal object —future proof in quotes— to adding a primitive later potentially. And he pointed out it wouldn’t be complicated. Make sure that the valueOf and to primitive throw as we already should do for the exact reasons that MLS raised. These are wrappers for the primitive. All the operators will throw. So you will – it will be part of our broader pattern of taking something, throwing and not throwing, hoping that it works.

CDA: SFC You’re the last one in the queue.

SFC: [on queue: String.prototype.decimalAdd] Okay. Sure. So decimal – yeah. I think it’s something I had mentioned and it sounds like a joke, but not really that much because like, you know, the thing that I want and there’s discussion about this in the matrix, is like, it’s important to have a representation – a representation for how we express decimal values including with trailing zeros in ECMAScript and there isn’t that standard. Now, strings have triple equals that work. There are a lot of semantics that are nice. And if we were to say that, like, if you have a decimal and JavaScript, it is represented as a string that satisfies that regular expression? Right? And then we could still encode like, you know, operations that operate on the strings. And what this does is, they take the strings, turn them into whatever internal representation is the fastest, perform the math and turn them back. Right? It’s not super fast, but kind of solves the problems. We could even make special syntax. Like, not saying it’s great. But I am also not saying that it’s – if we are looking at the best of several bad options on the table, I don’t think it’s an option to take off the table necessarily.

DE: Reply to that on the queue. Yeah. I think that would be a pretty bad option. The reason, decimal is designed to will he, if you use in math operations, except for triple equals. And that’s critically important. If you have a decimal – something that represents a decimal, you would use + and - on it. If you use - on two strings, they'll be cast to numbers and get the wrong answer. If you use +, then you will get a different wrong answer. Maybe with two decimal points. Maybe not. If one doesn’t have a decimal part. Wrong answer. As tempting as it is, it uses operators. But this is the thing we should have type safety and making an instanceof a class would give us that runtime type safety.

CDA: There is nothing else in the queue. We have 1 minute left. Any final thoughts?

JMN: Yeah. We – I will give a summary.

### Summary of Key Points

* The champion gave an update about the current status of the proposal.
  * Decimal is based on IEEE 754 Decimal128 semantics, with an API based on a class and object instances, with no literal syntax.
  * This design is based on feedback from V8 and SpiderMonkey that they strongly disprefer operator support for decimals, which was reaffirmed during the meeting.
* The committee discussed the issue of IEEE 754 compliance or noncompliance and whether that’s a goal.
* The committee also discussed whether we want some kind of more advanced math operators, like sine and cosine.
* There is still some discussions that need to be had about this. There is no total consensus on these things yet. But there has been some progress in shared understanding.

### Conclusion

* Decimal remains at Stage 1

## Joint iteration for Stage 1

Presenter: Michael Ficarra (MF)

* [proposal](https://github.com/michaelficarra/proposal-joint-iteration)
* [slides](https://docs.google.com/presentation/d/18Xnd--QmYV8c-qw3tGe4zvlIfF5A-CdXr-qW1tW6j4o)

MF: This is joint iteration. Joint iteration is when we have 2 or more iterators that have values positionally aligned and we want to process those values that correspond to each other together. So that’s the problem we are trying to solve here. The best way to do this today is unfortunate. This is basically the simplest thing, write a helper, it takes them and yields pairs of them. And makes sure that they end at the same time. And this is about the best you can do. This is solved in most languages and frameworks with a function called `zip()`. So the most likely shape that we could have is something also called `zip()`. Like this. There are options. A simple zip of two iterators or like var-arity zip, that’s all within our design space. Also, it’s common to parameterize the function that zip uses. In the examples before, you take the corresponding values and tuple them. But you could pass a different function to possibly do something else. So like, Math.max, will be called on them for you. This sometimes exists only on its own. zipWith being given Array.of is the same as zip. It’s possible that we have only zipWith and not zip. If you want to do something else then pass something else. I mentioned this, but some other open question design space is, do we want to support an arbitrary number of iterators? And an iterable of iterators is possibly another option. If we support an arbitrary number of them, what do we do on 0 or 1? Permit those? Those are some questions we will have to answer. A notable downside of having a varargs version in the middle, if we want to have an options bag for some potential options, I will talk about in the future, it’s not a great API because your options bag is at the end. It’s not great. Something that I had not seen when doing a review of other languages or libraries, but thought of during that review, is that if we have many different iterators, it can be confusing to have the inputs and outputs just positionally aligned. So if we pass them as named, we could also yield each element under that same name. There’s – this is risky in that there’s no prior art for this, but I think it is an improvement and somewhat related to problems we discussed in the past with Promise.all.

MF: Other considerations in this design space: what do we do with iterators that yield a different number of values? Some prior art has a "longest" version, most defaults to stopping when the first one has stopped, or "shortest". But it has options to stop when the last one has stopped. Yielding undefined or something like that for the values of the shorter ones. Some of them have an option to pass a filler item. So instead of just yielding undefined, it yields the filter item or sometimes they allow passing multiple filters so that if you care about the type safety, you can have a filler for each iterator that matches that iterator's parameter type. There’s also strict variants which will throw if they don’t all end at the same time. Those are possibilities we could consider.

MF: So here is a table I have created. This is prior art. Only with other programming languages. I will explain the columns first. So language column here. Shortest, longest and privileged. This is like, you know, the function that does the "shortest" behaviour. This is the function that does the "longest" behaviour. "Privileged" is unique to Ruby, which is the only one that does this. This is the left one. Ruby zip has a left and right one. Whatever the length of the left, that’s when it ends.
"Strict" we explained earlier: it ensures they must end at the same time.
"With" allows the program to parameterise the combining function. All of these are assumed to support two sources, but only some support 3 or more. Some of them support 1 source and one supports zero sources. I made the same table with the JavaScript libraries Interesting thing I noticed is that in an area of the – in a particular functional programming niche, the zip operation is just considered to be a special variadic version of map. So when we think of map, typically we think of a single iterator with a function of A to B. We could have a map operation on 2 iterators then it’s a function from A and B to C and so on. So the typed versions of those, they have map2, map3, etc. In the untyped version, they make it variadic. It’s interesting, but it’s probably not a route we want to go with trying to unify those concepts in JavaScript. But it’s worth noting in the presentation.

MF: here is the same table for a bunch of JS libraries that work on iterators. Notable things here, again, zip is the correct name here. I was also surprised to see that there was only one strict variant available. I was surprised to see that for the programming languages only one strict variant is available in Python. That’s probably not very popular or needed. And I guess a thing I learned here is that when a library supports 0 sources, I guess there’s two possible things that it could produce: it could produce an empty iterator or an infinite iterator of 0-tuples. But it seems they all choose the former. So if we support 0 sources, we should probably follow that. I went through the thoughts as I presented this. So that’s all I have to present. I would love to hear what is on the queue and possibly ask for Stage 1.

USA: Well, there is no queue. We can give it a minute. Okay. There is Dan Minor.

DLM: Sure. Thank you. That was a great presentation. I appreciate the time you put into that and evaluating different options. And yeah. This seems like a really great idea. We are positive about that in the SpiderMonkey team and yeah. I guess that's what I had to say. Thanks.

USA: Next we have Kevin.

KG: I also support. I want to mention that the Promise.all proposal that we had a few months ago that did something similar, switching on iterable vs bag, I love that idea. I would love to do that as well. That suggests the shape for the design where the first is iterable and then the overload where you can pass a bag. Of course that’s to be worked out later. But I really like that idea

MF: That would mean you support what is on this slide as well as the third option on this slide?

KG: Yes, exactly.

USA: Next, we have TAB who says they support and use zip in Python and agree with the analyst of the use cases. Danel Ehrenberg would support and then LCA.

LCA: I also support this. I support both the named and the positional options. I think the positional one, that is the default because that is what most languages use. I also prefer the iter of iters in the first argument. So the third one here. And then possibly with the options black that you specify the map first and don’t have to have the separate zip and zip width and also have options such as strict or – whether you want to have longest and shortest and support all within the options bag. That seems nice to me.

DE: How does overloading of various zip forms work? I mean, how do you differentiate a call of the named vs positional forms?

LCA: The named form would be a different function.

USA: Next we have JHD

JHD: (on queue) support; prefer just variadic "zip" with "shortest" semantics (or an object) <EOM>

That’s it. That’s all the queue. Like to add for Stage 1.

MF: Do we have consensus on Stage 1?

USA: I think so. We only heard support.

(several thumbs-ups in the room)

### Summary of Key Points

* Joint iteration is the ability to “zip” two iterators, possibly mapping over them at the same time.
* This need comes up all the time, and is proposed as a quick follow-on to iterator helpers, based on a detailed cross-language comparison.

### Conclusion

* Consensus on Stage 1 for joint iteration

## TDZ, what is it good for

Presenter: Shu-yu Guo (SYG)

* [slides](https://docs.google.com/presentation/d/1c-rhSUTQVNWD4DWgkNiC9tt50BruWDi7yRPllPHnff8/edit)

SYG: This topic just to kind of head off some things, I expect this to be controversial. I’m not proposing an actual change here. I’m kind of going through some motivation for why it might be proposing a change in the future. But it’s maybe to elicit some responses and to get a temperature check and to get the discussion started on see how open we are to this kind of thing. So the topic is TDZ, what is it good for? Reference to the original title of war and peace. So recap for what the temporal dead zone is, it’s the matrix channel where we have off topic discussions. Also to describe throwing semantics for uninitialized lexical bindings. This is semantics introduced in ES6 about the second part. What it is is basically when I say TDZ checks, I mean run time checks that throw when getting or setting an uninitialized lexical binding. Where be lexical bind and I mean a let or const than a bar. I have a let and a const binding in this. Until initialize the let or the const binding by evaluating its declaration so until evaluation reaches the point of let X or const Y, the name introduced by the binding is set to be in TDZ and if I touch it at all to get it or try to assign to it, I get a reference error at run time. In this example, if I touch X, by getting it or assigning to it, it throws. After let X is evaluated, then I can assign to it. Similarly for Y, I can’t assign to Y any way as a const, but if I get Y, before const Y is evaluated, then it throws. So the binding is in a temporal dead zone until – I don’t want to call it temporal. I wasn’t in the room but until evaluation reaches the declaration itself. So why does this exist? For DX reasons catches uses before defs and bad form for you to use something before you define it. This was something that vars allowed and are initialized undefined because it used the name before you used the var and evaluated the var and universally agreed to be bad style and we shouldn’t allow that. Lets const bindings to be const in the way that you can’t observe them to have more than a single value. So const binding either throws when you access it or has the value it will always have. So those are nice properties that we get by having TDZ semantics. So this talk I will talk about the performance const of TDZ and adoption problems that we have – that we are now seeing with the TDZ aspect of lexical bindings and the idea that I have to maybe remove TDZ but we’ll see. So the performance const is fairly simple.

The performance cost – the TDZ have a performance Congress const because you have to check and for CVAR undefined and that’s it. No specialized uninitialized value that you have to check they’re in and throw if they’re uninitialized. And of the TDZ checks there are two classes I think. There are the ones easily statically eliminate and those that are track tickly hard to eliminate. For the easy stuff the intraprocedural uses are easy to analyze cheaply and eliminate the ones not necessary. You can use any kind of like use def or use chain analysis to figure out if the uses are dominated by a def or another use and trigger TDZ and eliminate the ones dominated. The very simple example X used here is dominated by let X dominated meaning there is no control flow path that can reach the use of X without also going through the definition in which case if evaluation reaches X, then L must be already initiated and don’t need to emit run time to see if it is in fact initialized. There is gotcha that is because switches are weird because you can jump into a switch case that has a let binding in it but then falls through to another case. But the other case is still jumpable directly there. You have the weird case and sometimes you don’t know until run time if a let binding is in in fact initialized. Those are fairly rare. People don’t do weird things like that. But that’s just to say not all intraprocedural user are easy to eliminate. Some can’t be. By and large we can do this cheaply and not worry about this. The checks that are hard to eliminate are the uses inside hoisted inner functions. So remember that function declarations themselves hoist. So in the following example, you have a let X. In the source text, function – the function declaration of foo is after let X but the function declaration hoist definition and all to the top of the block. So the binding foo refers to the function and is usable before the definition of let X. If foo escapes, you would have – we just have no idea if the use of X inside foo will be called before or after let X is evaluated. This kind of use is in general very difficult to analyze and eliminate because it requires full intraprocedural analysis. We have to know what is ally I can’t say to foo and where it flows to and how it gets called, we just don’t know. Optimizations in the web browser engines must play for themselves because JavaScript is downloaded and executed end to end if we have an expensive analysis that is able to figure it out, it is not worth it because it is way more expense civil than the actual TDZ checks they eliminate. As a result we don’t try to eliminate this at all outside of the optimizing tier. And we always take the damage for the performance cost of those TDZ checks up slot of web implementation cannot achieve performance parity with VARS and let and const binding fully require more work. Each check itself is not too bad. This is a death by a thousand cuts kind of thing. My claim is that it cannot achieve performance parity with var in practice for the reasons I’ve been describing and eliminate easy checks up front and eliminate more in optimizing tiers and a lot of code runs one and not hot hot and don’t reach the tiers and full analysis is intraprocedural and too expensive to pay for itself. I have heard from GitHub posters that JSC doesn’t have this problem. I would like to understand more. In reading the web source code I see that JSC has TDZ checks and similar cheap elision analysis in the front end. It seems like they just do more work.

RKG: Would you –

SYG: What? If you know, Ross, like to hear.

RKG: If you wanted a quick comment there.

SYG: Sure.

RKG: So I can’t give a full answer. I can say one thing that’s very interesting to me which is we exclusively use var in self-hoisted JSC to avoid the performance concerns.

SYG: Good to know.

SYG: That’s the performance cost. Now moving on to adoption woes. So most JS features are adopted and sprains transpiled and then untranspiled. It is long on the order of five plus years because web properties products want to work everywhere. They want to reach the maximum amount of customers and user and work on older browsers. They want – if they want to use new features they generally transport them away and code can work on older browsers and general availability of the features available natively take a long time to roll out. So depending on the risk appetite as – of your web app you might want to wait until you there’s a pretty small% percentage of people not on old Safari and Chrome and we are now after how many many years since ES6 and 7 or 8, I think we are now at an inflection point and more and more people are trying to adopt ES6 features on, on transpiled especially large apps who are the most risk-averse in reaching the largest amount of users with older browsers.

We learn new things at the inflection point. What are we learning here? Adoption via transpilers of let and const three policy transpilers is Babel and transcript and it does more and transpile after ship. Only talking in that capacity there and closure that is the Google thing that we use internally. They all implement lexical scoping statically for let and const but not the run time TDZ checks that is the seem theme. For Babel the only one that can emit TDZ checks but off by default only in strict mode. And perhaps someone who is familiar with Babel can speak to why it’s off by default. But I heard it’s for performance reasons because it’s not fast to emit not just for code size but run time checks and more on the code side, it’s bad to emit so many checks. TypeScript compiler does statically check on the intra-easy cases. If you have an obvious before def will complain and it should because you shouldn’t write the code. It doesn’t emit run time TDZ checks and closure case and function does not emit the TDZ checks and doesn’t emit TDZ checks for the intraprocedural cases. Closure compiler also checks the easy intraprocedural cases and also does not emit run time TDZ checks. And in private communication with the closure folks internally at Google if let performance consts remain they are likely to transform down to viar of ES6 and we want native adoption of modern features. The adopters of let and const bindings via transpilers have not been getting TDZ semantics in the wild. They are runtime and not static. They are shipping code that don’t have the semantics. The transpilers have and will remain did adventured from the spec. All things equal it will be good that tooling authors and tools stop being diversion from the spec. Moving on to adoption of untranspiled stuff. There are cases of large applications being unable to ship let and const on transpired due to performance transgression and let script got my attention on this and had an experiment a while back where they found that I guess it’s part of trying to ship modules. They wanted to ship let and const on transpired and found parsing performance regressions in the parsing performance of TypeScript compiler ranging from single digit to double digit regressions. So they switched back to using vars for a few choice variables. This prompted some V8 opttyizations. I don’t believe we can achieve performance parity with VAR and make it faster but still slower than VA R. You can follow the links there to see the bugs and to see the performance analysis of the TypeScript did. I don’t have public things I can share in the following one. But there there are large Google from ES5 to ES6 and cannot due to performance regressions. Not all of the regressions are due to let const, some due to classes. I’m not proposing anything to do with classes here. Let and const do contribute. I also talk with some other folks in the industry. It’s small survey of what are the large properties shipping. AirBNB ships ES6 but performance regressions were known to them at the time when they decided toe stop shipping ES5 and ship ES6 and told that the decision was made based on reduced bundle size and removing the shims was worth the performance regressions. So it was made in combination of tool chain simplification of not having to include shims and bet that over time the ES6 path would get faster in browsers. Made a lane to simplify complexity. I don’t think that assumption that ES6 will get faster over time will be born out for let and const. Hopefully not universally true for ES6 features and for let and const I’m skeptical. Twitter ships ES6 and I don’t know the rationale. Facebook continues to ship ES5.

TDZ what is it good for? To me the complete picture likely the weapon developers on transpilers have not been getting TDZ semantics and stackover flow has very few questions. I don’t know if that’s indicative of anything. But people haven’t been getting the errors and wonder what they mean. And apps that care about performance cannot migrate. They’re sticking with VAR S and VARS have no run time but have artificially prolonged lifetimes and function scope and not box scope. Large products in general are not going to sacrifice user experience in favour of shipping on transpired modern JS, that is a product choice they make. So from where I’m standing if developers can adopt it where it matters what is this feature good for? My goals are twofold: Primary gold is enable everyone including those with performance regression suites to ship modern unsprains spieled JS and I don’t want people between rock and hard place between choosing between fast and modern. The browser Chrome I participate in this committee in large part because I want both to be possible. I don’t want to evolve the language but I don’t want performance to be an afterthought. And I certainly don’t want it to preclude adoption of new features. My secondary goal here because mainly it’s not my main constituency but would like to see reduced semantic diversions between transpired and negative. The TDZ gap is one I understand that is not closed. TypeScript is not going to transpile checks and Babel not turn on by default and closure not going to do anything. So the radical idea here that I’m not officially proposing here but might bring back later is what if we just remove the runtime checks, my proposed semantics are of course let and const are still lexical scope and everyone loves lexical scope. Nobody arguing otherwise. They hoist the top of the block scope as they already do today. But they are initialized undefined like VARS. So what does this look like if there’s some before stuff and after stuff. Let X equals initializer and equivalent to let X and same before stuff and it is kept in C 2 before it was two. And used to throw developers get undefined. Same for const. The difference is that the const initializer is actually not just the equals, it’s going to be some special initialization byte code. The biggest argument that I feel is that const change feels pretty weird. Const are now initialized twice. They no longer feel const. There’s really no around that. But I guess pragmatically my question is does it matter? Will it be something that the practitioners care about or language care about? It would only notice it when you’re doing use before def that you shouldn’t do and the last point is not that point but I think def may be confused what const actually means. I don’t know if that counts towards anything. But, yeah, I think the – out of the three bullet points there, I think would – they would only notice when using use before def they should do that is the strongest one I have for pragmatically. That’s the conversation of can we talk about what TDZ is good for? That’s all the material there is. I’ll now go to queue for discussion.

USA: First we have Luca.

LCA: My first question is, like, do you have data on how frequently you can eliminate TDZ checks? How frequently do you encounter easy cases for TDZ cases versus cases that are not statically analyzable or not quickly statically analyzable?

SYG: Not for data that is representative of the whole web. That analysis was done when we’re optimizing the TypeScript use case. In TypeScript’s particular code base, I think when we try to eliminate more easy to eliminate cases we were – I think we couldn’t eliminate at least 50% of TDZ checks. We could eliminate 50 and the other 50 are in closures or whatever. I think the particular pattern and someone from TypeScript can correct me if I’m wrong and much more knowledgeable is something that you have – it’s a compiler and you have a global const that’s a lexer and then a bunch of functions that close over the lexer that all use it and those are not going to be easy to I eliminate.

LCA: Okay. And – makes sense, thanks. On the 50%, is that 50% of the time that there’s an access to, for example, the lexer that access has a TDZ check or 50% of the cases in source code where you see that binding you are not able to statically remove that?

SYG: Specifically it was I counted the special TDZ check byte code we emit without the optimization and counted it with the optimization. Each byte code corresponds to the assignment or get.

LCA: That would also have to be weighed by how frequently those code paths are actually hit.

SYG: Correct. It’s a static check and not dynamic check. We don’t have dynamic counters because that is not something we can ship.

LCA: Okay, thank you.

USA: Next we have JHD.

JHD: Yeah, I was just curious when you mentioned in your slide the escape foo slide, the second one, the – you basically said once the variable value escapes its exceedingly difficult to figure out what’s going on with it. So I was wondering the proposal for defer import a eval and I think the original form is trying to essentially make a variable where the first reference of the variable triggers the import, that’s my rough understanding, would something like that have the same performance cliff that you’re describing here?

SYG: I’m not sure I understand the question. What is the –

JHD: I guess it’s fine if the answer is let’s talk about it in relation to the other proposal some other time. But like it sounds like you’re saying that having to do checks that happen the first time you touch a variable can be performance prohibitive when it’s – like, when it can be passed somewhere else.

SYG: No. I’m saying – so the thing that is prohibitive is relative – accessing a binding is very frequent and should be a very fast operation: The thing that is slow is having to do a check on every access of the binding slot cuts into like the budget for it is already very small. So if a large percentage of it is checking if it’s – should throw or not. That is not acceptable. The first access thing is not – I think it’s not a relevant thing here. I think import — so in particular module bindings are like weird live bindings. They just do not have the same performance requirements as locals. So module bindings if they have like an initialized on first touch thing that like might pull in something... Module bindings I think the performance is dominated because they’re slow.

JHD: This won’t apply, is what you’re saying.

SYG: don’t think so.

NRO: That proposal doesn’t have a relation and property access.

JHD: I was curious from the implementation perspective. Thank you.

USA: Nicolo you’re next.

NRO: From the perspective, we have the implementation of the checks and the reason not enabled by default.

One is that – well, we have to run time checks and they slow down code the same happens in engines for little added value for the users. The second reason is that those checks also significantly increase code size because it’s a helper that needs to be called in many places where bindings are used. And the third reason is that it’s incredibly slow to like emit the code for the checks. We are in a different situation from engines because we have completion and we can afford spending as much as possible while compiling to generate the best possible output.

But enable TDZ option makes like our let and const basically twice as low. It’s really quite slow because of compiling lexical scoping and loops is incredibly complex, this is just not worth it. And it being disabled by default never cause users to complain. The only reports we get about the implementation is from the education of language and find cases that are static analysis is wrong and assumes the binding is not in TDZ and might be in TDZ. We never got users asking to enable this option by default. We would like to be as much spec complaint as possible. We – one of the goals is to be the most spec complaint too. But like this is one of the only two cases whereon purpose we deviate from the spec.

SYG: Thank you for the details.

USA: Next we have JHD.

JHD: So I was just curious if it sounds like the easy stuff is when it’s like in line in the same scope and the hard stuff is when things escape like you were mentioning. So would it be possible instead of just removing all of the checks completely, to keep the ones that are easy and then just not worry about the ones that are hard?

SYG: The ones that are easy as – specifically you said as earlier. We can –

JHD: Maybe not earlier but just find another way so that the user will be told that you’re doing a bad thing, don’t do this thing in as many cases as possible even if not all of them as currently spec'd.

SYG: My concerns with that is I’m not sure if it will be compatible. We had issues where we changed runtime behavior to early error behavior. Specifically like the call expressions on the left hand side. That we couldn’t ship. That practical certain. The other concern is that we will be – the easy cases by easy I mean, they’re cheaply analyzable by the engine. I’m not sure they are easy to spec. That will be like speccing a specific variant of some static analysis and that’s – there’s some – that’s a technical problem that might be worked around. Not something that we have – we have earliers but not to the simplification of data flow analysis. That would be new ground that we would tread.

JHD: The motivation behind my question just for clarification is I prefer to see as few correctness checks as possible punted out to the ecosystem and prefer to see them in the language when it’s feasible. That’s what is driving this question.

SYG: And but I’m skeptical we can basically. It’s the easy cases – I think the easy cases are the ones that would precisely be least valuable to surface in the engine. I think the easy cases are statically analyzable and all are doing admiral job against those already. And the hard ones are, I don’t know. That’s where you get the tricky bugs. In the intraprocedural and get undefined and get another run time error and undefined is not a function. I think that’s not to debug. I’m not very very optimistic on being able to spec a different kind of check to keep a run time. I haven’t tried it. I don’t know.

JHD: Thank you.

USA: Reply from Jack Works.

JWK: I remember it was an early error when ES6 was in the early days and the engine feedback was that it doesn't work well.

LCA: I have another question. If anybody wants to –

LCA: Okay. So what is the amount of TDZ analysis that an engine does versus what Babel or TypeScript do that is reasonable, is it the case that like most of the things that V8 can easily analyze up front is also something that tools analyze upfront right now? Or are there or do tools generally cover more cases or does V8 cover more cases? Do you have data on this?

SYG; I don’t.

LCA: Okay.

SYG: No, I haven’t looked too deeply. I just played around and seen very simple use cases and def are reported and I don’t know if I’ve seen warnings around some kind of path sensitivity that warrants that, I just don’t know.

LCA: My background, it would be interesting to know this because it can help inform whether like if the run time stops doing this whether the static analysis tools would be able to cover the majority of these cases any way. And I assume it would not be able to do this. Like I see a reply from Daniel that TypeScript doesn’t do data flow analysis and assume it wouldn’t do it in the final cases anyway. Maybe V8 would be able to do them?

SYG: I don’t know.

NRO: I would expect Babel to perform more static analysis than V8 because we can do more ahead of time. The analysis we do is all within the single file. We track for each usage of the variable, we check if the variable is in the same scope or after or if they’re two different functions we check whether those functions are only called within the module. And if so, like if the function that uses the banding is called either after the definition of the binding. And I would expect V8 to do less than this given the high cost.

SYG: The exception is when you reach the optimizing tier and you do deep inlining you do more visibility what can be eliminated. Like I said so much, not hot code that doesn’t make a dent in the performance overhead of TDZ checks.

BSH: [on queue: closure-compiler probably has equivalent coverage] Just to clarify on what I wrote in, we (closure compiler) has similar coverage to what the engines do. We can probably – we can might be better and could be better because we can take more time. We do data flow analysis.

DRR: I don’t necessarily if data flow analysis is – I’m pulling that out as one example we don’t do. We don’t do any sort of like – we do basic control flow analysis. We don’t go beyond the current procedure. Really we don’t do interprocedural analysis at all. It doesn’t depend on any of that. And so that is a bigger task for us as well. We probably wouldn’t want to go down that path. But I would think we had a broader discussion about that. I think from our side the bigger thing is really in some sense our type checking actually, you know, assumes as well, you know, for the things that we don’t catch at least the run time will catch it, right? We are able to, a little bit, wash our hands of the problem. But that’s not a hundred percent obviously.

USA: Next we have WH.

WH: I would like to know whether this problem could be addressed by better coordination between engines and transpilers. I fully see the point that engines have precious little time to do any kind of flow analysis because they need to compile things really fast. Transpilers have a bit more leeway in doing this kind of analysis and thinking what code they emit. If they turn `let` and `const` into `var`, they must do some analysis; otherwise they would produce buggy code if variables overlap. I think there might be some low-hanging fruit opportunities for transpilers to let engines know that TDZ checks can be elided, for example by turning function statements which hoist into `const` definitions of function expressions which don’t hoist and are therefore entirely dominated by prior `let` and `const` definitions.

NRO: One easy way to help with this instead of full let const transform we could have some way to transform let and const only in cases where we can prove they’re not easy checks needed and that would mean that the engines could only meet the run time checks and would need to have the first static analysis pass because the only remaining cases are the cases that can be statically proved. I’m not sure if it will want to have this very high coordination between tools and engines because so far in JavaScript we kind of always act independently by relying on the language.

MM: First of all I need some clarification. I’m confused about something. A lot of the questions we just went through weed into the talk we just heard that the purpose is primarily about the performance of transpiled code but the transpiled code but it doesn’t do the TDZ checks. If the proposal is to remove TDZ checks, we transpiled code doesn’t get safer than it is right now not doing the TDZ checks and it doesn’t get any faster since it’s not doing the TDZ check. The other thing that makes more sense to me about what the purpose of Shu’s proposal is so that the code that had been transpiled could run without a transpiler directly on the language and not suffer performance regression when you avoid the transpiler. So Shu, can you first clarify between those two goals.

SYG: If I understand you correctly, your understanding is correct. The transpiled code today if they are targeting – if they are transpiling let and const away, they are transpiling them away into `var`s without TDZ checks so precisely in that case there is no performance overhead but it diverges from the spec’d behavior and as you say it doesn’t have any of the added run time checks. My goal as I had on the slide there that I want people to ship let const untranspiled without the –

MM: Untranspiled.

SYG: That’s the primary goal.

MM: Great. Now, can you return to the slides where you show the transform of let by hoisting the let and then the const by hosting the const. [slides 22] Great. So first of all, the is equivalent to, the code below the "is equivalent to", if you had just wrote let instead of const below the is equivalent to, you wouldn’t have anything unutterable, correct?

SYG: Exactly right.

MM: Since it’s – since you’re presuming what the user wrote is stuff above is equivalent to, there’s nothing by having the is equivalent to?

SYG: I’m not sure what you’re getting at quite yet. This is the idea that of the – of what the equivalent – the equivalent to is not for transpilers. Equivalent to I’m trying to illustrate the equivalent semantics of what removing TDZ means.

MM: Go back to the last slide. For the code for the second block of code, the code below is equivalent to, it’s clear to all human eyes here that the let X dominates all uses of X is it clear to all engines for code written exactly like that that the definition of X dominates all uses?

SYG: Yes to V8, I hope yes to the others.

MM: So let’s just assume – let’s just stipulate that for the moment and assume that’s true. The alternative I want to suggest for untranspiled code is a lint fix rule. That one can have these the most Conservative domination rules that Conservative estimate of what actual engines do, could be linked – linter could check for it, and then when it doesn’t find that it knows that engines will be as fast as the code that you’ve written below the line, then it can suggest moving the let to the beginning of the block as a lint fix rule for a human being to look at and either approve or not check.depending on what the semantics they want and if they accept the linting rewrite, it’s clear to readers of the code what the semantics of the code are, that what the rewrite does is it corrects the code to properly have the semantics that the current transpilers are giving it without a TDZ That may or may not be the desired for the application and lint fix rules for optional lint rules are to be turned on and off and human inspected and for const especially, the rewrite that the lintier could suggest as a potential performance improvement would rewrite it to let rather than keeping a const keyword where the variable has two different observer values. I will just say right up front that the idea of removing the decide check for const where the same const variable name can be observed with two different values, I can’t imagine myself agreeing to that. But I want to propose that I think the lint fix rule fits with the actual software engineering process and give mostly out mated way and if people are just willing to accept what you’re proposing without inspection, then by the same token people should be willing to apply the lint fix rule I just talked about without inspection.

SYG: That doesn't work, because those are the easy cases which I don’t care to eliminate that much anyway. The true cost comes from these intractably hard to eliminate cases that hosting does not fix because function definitions do not hoist.

MM: The function definition hoist but the function has to escape and in this slide, if you put let X at the top of the block, then it’s still the case that foo hoists above let X. But the call to escape doesn’t happen until after let X.

SYG: How do you want me to lint against that? How would you like the engines to lint against that?

MM: I’m saying that the engines don’t just do what they’re doing now, which is cheap. I should ask, if you have let X at the top of this block, followed by escape foo followed by the function definition, would the current engines understand that foo cannot escape until after X is initialized?

SYG: No. We do not perform any kind of alias or escape analysis in the front where like that’s just too much work. We just don’t. Something escapes –

MM: Okay. I’m puzzled by this and it seems like any variable that is declared at the very top of the block in which it is, it can – it can be in scope cannot be one that needs a runtime TDZ check and I think that’s a trivial static condition. I can’t see how that’s violated.

SYG: It’s violated with function declarations in the same scope that close the binding. Once that happens, to know that if those functions because of their hoisting behavior, to know if they can or cannot be called before the declaration itself is evaluated require intraprocedural and escape analysis that is too expensive to do in the front end. It is not done. So conservatively a TDZ check byte code is always inserted for closed over – for access of closed over lexical bindings inside inner functions.

MM: I think that – I think you can do better. I think I could do better. I think that the – when the variables at the very top of the block then if the function definition is hoisted but the function – there’s no use of the function name until after – you know, until after that variable is declared at the top of the block, I don’t see how it can escape before the variable is initialized.

SYG: Yes, there is, there are sub cases here where we can do better. I don’t think that precludes that.

SYG: That cannot be – go ahead.

MM: If I think if you did better in those cases that a linting tool with a lint fix rule that offered to do that rewrite of moving lexical variables to the very top of the block and then that almost always resulting in the engines now having enough static information to not need a TDZ check would effectively solve the problem while changing the program text being maintained into one that properly reflects the semantics of what the program now means.

SYG: Yes. If we could get people to change out their programs, we would not have a problem.

MM: The people who want to – the people that are holding off on going untranspiled because of this regression, if you have an automated lint fix rule that they can one over their source code, doing it blindly without review, which is certainly not what I would do on my code, but doing it blindly without review is no less safe than they would be if the language itself adopted your proposal.

SYG: Can you repeat that? I didn’t quite parse it.

MM: Okay. Let’s say there was a lint fix rule and source to course transformation not in the sense of a transpiler and source fix up and the output is the artifact to be maintained from there on, if somebody has a large program that’s currently being transpiled and they want to run it untranspiled with no performance regression, then that kind of source fix up automated source fix up is something that they should be willing to do without having to look at each individual changes and approve them. Because first of all since they’re coming from a transpiler that’s not doing TDZ checks, they’re no less safe after this source – after this source rewrite, and second of all, even for code that’s not coming from a transpiler, applying the source rewrite blind doesn’t make them any less safe than they would be without the source rewrite if the language got rid of TDZ checks. So there’s real – so for all of the cases you’re concerned about, there’s no reason why the software shops should not be willing to run this source fix up pass blindly.

SYG: The reason is they have an easy alternative that is just to transpile it. Like, they don’t have a goal to ship modern JS, it is my goal as a browser engine to try to get people to ship modern JS and I don’t want them to choose between fast and modern. For the shops the goal is a working product and they don’t care what they ship. They have heard maybe it be good to ship ES6 and try it and they hit some hurdles and decide we will just keep shipping ES5.

USA: Just a quick comment. There’s around ten minutes left.

MM: We can proceed. I think Shu and I have – understand our impasse.

USA: There’s a couple of replies to that. First we have Nicolo.

NRO: Just suggest works like, inside block inside the function, it doesn’t work in modules because even if you have like let X with the module, some function exported can still be called before the module is being run.

MM: Okay. If I heard correctly, Shu is not concerned about the performance of exported live bindings, did I hear that correctly.

SYG: No no, I think what Nicolo is saying if the function is exported. I’m not concerned about the performance of live bindings but that means the lexical bindings that the exporter function closes over are not analyzable. Not that the binding name for the function matters.

MM: So we’re talking only, with regard to this issue, talking about the top level of the module because only top level things can be exported. I haven’t thought about that case. That’s an interesting case.

SYG: Something like that. I don’t think they export it. But the TypeScript slow down comes from the type level that closed down by many functions. I don’t think there’s that much use in functional blocks at all.

USA: Then we have two replies that I believe are related. First we have Shane.

SFC: You said that you’re talking with one of the websites that ships ES6 and said maybe TDZ will get faster at some point. What MM is describing seems like an example of something that could actually be done to make the code a little bit faster. Especially if the TypeScript compiler and so forth emitted code that obeyed the invariant that Mark described, that could be a way without making any spec change to improve the performance of existing code. Just an observation.

SYG: I think my response to that I would like there to be a transparent optimization. Anything that requires humans in the loop to make a transform because it is unsound and can’t be automatically applied has dramatically diminished success of skilling and I think MM’s idea is a good one and disagree to be implemented in engines. If the tooling wants to implement lint and suggest.

MM: I’m not suggesting that the engine implement the lint. I’m suggesting only tools implement this lint, and additionally, the only requirement here on the engines is that in cases that the lint tool emits that code, it can eliminate the unnecessary TDZ checks.

SYG: Let’s talk about that in the same vein as closing decoupling idea that waled mother brought up. Let’s be in touch. I’m not closed to the idea. My goal is not semantics change for itself. s.it is just that I want people to ship on transpiled stuff without performance aggressions. I want to cherry pick some topics we haven’t discussed. I would like to listen to that. And I don’t think we have time from that. I would like to hear from CM about priority of expending CPU cycle.

CM: This is a philosophical consideration: over time our computers get faster. It’s not inevitable, but that’s the way it has gone. And so we choose to devote some fraction of that performance gain to things that give us greater degrees of safety and bug resistance and greater reliability. And I think the TDZ check is an example of that kind of thing. I think you said the cost of the TDZ checks that you can’t statically eliminate is something on the order of one to possibly 10% in extreme cases. Certainly I think that since the time ES6 shipped, computers have gotten more than 1 to 10% faster, so the cost of the checks has been paid for already. Of course, you’re always open to the argument that it doesn’t matter how fast the computer is, if you get rid of this check, your code is still going to run 1 to 10% faster. But you can use the same argument to say if I want it to run really fast I might as well write in C++. I don’t do that because I want the safety and reliability benefits of working in a higher level language. And what has in fact happened is the same people who are concerned about performance have expended a lot of those additional performance improvements in the hardware on making their applications larger and more complicated with more features and all of that. And I’m a little cranky about having the correctness of my code being held hostage to the Cult of Fast. It just seems like, yeah, I can see the performance point, but on the other hand, the only reason it’s not lost in the noise is because we’re really good at measuring it. And I understand there’s probably not much you can do to force the people who are unwilling to sacrifice that little bit of performance to work in a modern language, but I am having a harder time having sympathy with those people than I guess you are.

SYG: Well, I don’t fetishize my tools, I want people to ship products and can’t ship the compelling product and have to choose between modern features and slow.

CM: They’re telling you they can’t ship a compelling product, and my assertion is they’re just wrong about that. That’s just a belief that they have. This is certainly a world where belief is reality in the sense that their belief does affect what they actually do. But at some point you have to draw the line and say we don’t want to tolerate the sorts of semantic black holes that could possibly be the source of serious errors in code, and we’ll pay the negligible cost of avoiding those problems.

SYG: I thought I showed some counter-arguments. The alternative is not that they see the light and become correct. The alternative is that they just don’t use the feature.

CM: To the extent that not using the feature gets them into trouble, they will experience the cost of that trouble. I’m fine having them make that tradeoff for themselves because it’s their own product quality that’s taking the hit. But I don’t love them feeling the need to make the tradeoff causing me to have to operate in a world where I’m subjected to the otherwise avoidable risk myself.

SYG: Yeah, I don’t know what to tell you.

USA: You’re basically on time by the way.

CM: That’s all. That’s all I’ve got.

SYG: Thanks for your time. There’s no official thing I’m asking for here. There’s some new ideas that were raised by a closer coupling with tooling and engines here that might be worthying through. Though I’m skeptical about this and the skill activation aspect of it. If you’re interested, reach out to me and other engines specifically and TypeScript to see where you currently stand. I see some other questions to address and maybe talk after the meeting.

[To be continued later in this meeting]

### Summary

* Years after ES6, let and const still commonly cause performance regressions vs var, and transpilers do not implement TDZ. The result is that let and const are avoided in shipped JS code.
* Generally, if the committee cares about its features being adoptable, these sorts of 5+-year retrospectives will be important.
* SYG proposes treating some or all cases of TDZ as simply evaluating to undefined, as var does.
* Most of the committee agreed with the goal of ensuring that features like this are adoptable in practice, but there was no consensus on whether semantics changes to support that are needed.

### Conclusion

A proposal may be formed on this topic in the future

## Stable Formatting for Stage 1

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/eemeli/proposal-stable-formatting)
* [slides](https://docs.google.com/presentation/d/1p1Xgywv1qfY54gnfHUM6PXQafqgf7wY98znxbolmP2c/edit?usp=sharing)

EAO: This is ECMA-402-ish proposal I’m bringing to you and I’m bringing to you a problem that’s kind of coming from ECMA-402 but hopefully you’ll understand why I’m being a bit cagey about this. Fundamentally the issue here is that through the formatters and other functionality you have in Intl you can do a lot of useful things. Almost all of this – no, absolutely all of it is focused on providing something for humans in a locale dependent manner such as formatting numbers, dates, all that and other things. But fundamentally sometimes the things we can do in the scope of ECMA-402 are users who need to use it for programmatic purposes or who are targeting an audience for what they just don’t know the locale effectively. We are in the situation where we have APIs that are being misused in some ways or used in ways that the use cases we have for 402 aren’t really accounting for and are in fact counter to it. This is effectively setting up a situation where we are telling that users really should not be using the localized output that they get out of 402 functionality because that might break at any time. On the other side, we can’t change the localized shape of the output that we are providing because that might break user code. And this is unfortunate and we’re not going to get rid of this immediately. But we could, you know, do better. So some examples roughly of the sorts of things that I’m talking about here is one if you want to format currently with JavaScript a date using the common YYYY-month-date format, probably before temporal arrives, the easiest and best way to do it is to create a date time formatter in Swedish and use that for this purpose. This is shall we say a bit questionable. Then in another dimension there are capabilities like we have – we are capable of formatting compact notation numbers with NumberFormat. But none of the locales that we are providing provide a way of using the SI suffixes in fact, there’s a typo there for numbers. That would be like 99 K for – and K is a thousand. That specifically works. If you go into the higher exponents, the English ones don’t match and none of the other ones don’t match either. It would be nice for the functionality to be provided for nonlocale-based use. And then there are also the APIs like collation, collator that are working, we effectively not really working, providing a localized output but working with localized input. And on that, we have weird things like if you want to use emoji collation, then you need to pick a – use a U flag sub text on a locale that happens not to customize the root locale and ends up on the root locate and do it on English it works. If I remember right, if you do it on Swedish or Finnish, it won’t because those are a little bit specialized in some certain cases. And then there are places where we have explicit references to default algorithms like for segmenter and recommending implementation should do something better than this and no current way of user land from accessing something that a user can be certain is implementing the specified default algorithm there which if I remember right this is what actually ICU 4 X is using in the implementation correctly rather than custom missing it for each locale.

This is roughly the problem space we have. And what I’m kind of happy to be coming to you with is the fact that there are two entirely different sorts of directions to go in solving and improving the direction. One is keep on going what we’re doing now and to identify not just the examples I happen to cherry pick for the previous slides but all the sorts of places where we are providing functionality that users are using for programmatic and other purposes even though they shouldn’t and we match those one by one by methods that are appropriate for that data shape and that usage. So, for example, for dates, obviously temporal is providing all or almost all of the solutions that are needed. In this space for numbers we could imagine big have Int as well extending the toString method or adding a new method on the prototype for allowing some custom mazable of the formatting. There are the functionalities that we session meanter and 402 in the separates and couldn’t come with the immediate response and how could they be provided locale independent solutions for. That was a long sentence. But ultimately one really strong benefit of this shape of a solution is that going this route we could keep ECMA-402 explicitly only serving localized use cases as opposed to what is a different sort of solution that’s possible which is to provide a general solution for all the capabilities that are on the Intl to be available in the non locale local. So this would be, for example, the – we could accept where we currently accept string identifies for locale we could accept null and we could notice that internally to zxx that is a valid one technically. But it’s just I haven’t actually found anyone in JavaScript or other places that actually does useful things with it at least. And it stands for Nolin guess tick content, not applicable. And then go on from there and define the behaviour for this that would be nonlocale and would be producing no locale dependent behavior. This is as far as I got with my presentation and what I’m asking for is recognition that this motivation is sufficient that we ought to do something here and I would very much welcome input on which kind of way we ought to be going with all of this.

DLM: I think this is a good idea. Definitely worth investigating. We have definitely seen web compatibility problems in the past where people have been parsing localized output. I do think there might be a little bit of developer education problem here and we failed people not to do dumb things in the past. That’s not a reason to not try to improve things in the future.

JHD: Support that. I mean, it would be nice to find something that’s clearer than ZZX or enough or something. But that’s a later stage concern. I like the problem this is solving.

SFC: One of the motivating examples here is the CLDR non break space that broke a number of websites. We had a discussion about that in the TG2 meeting a couple of months ago. Exactly the use case. Now, that particular use case could have been avoided with Temporal. So if Temporal had existed the developer who wrote the code that word with space may not have broken it and could have used temporal. On the other hand temporal is – – if we can make this something that is accessible for developers, easier for developers to learn and figure out. We can sort of help developers avoid some of these foot guns. I think anything we can do to do that is fine. If a developer uses, for example, no locale solution possibility Number 2, their code is correct if it’s not the best code they could have written, it’s still correct. I think that most that we can do to help developers avoid doing the wrong thing like using EN when they need to do, you know, processing on the string output and anything we can do to make sure that developers don’t do that is a step in the right direction and definitely is a (inaudible) problem.

DE: As SFC was saying, some of these usages have possible alternative APIs to more directly access the information. If we don’t want to define all of those explicit API to access this data, I wonder if these algorithms for stable formatting should be defined at the CLDR level. The Unicode consortium makes all sorts of stability guarantees for various purposes. This would let us avoid being in the business of defining stable format output.

EAO: That is one possibility.

DE: Would be interested to investigate that and also the converse of that. The benefits that we might gain from explicitly defining this behaviour in ECMA-402 where we would not be relying on any other external body for the stable behavior of these formatting calls if going this sort of route. I’m not sure at this time which solution would be best. I am very interested in exploring this case and talking about it.

DE: I don’t think avoiding relying on external bodies for stability should be a goal of ours. If we are working with another body with stability guarantees, if those guarantees make sense, that should be enough. I’m happy with this to go to Stage 1 but I hope before Stage 2 we have kind of a story worked out jointly with the Unicode consortium. I don’t know what zxx means exactly–does Unicode want us to use it this way?

EAO: We can definitely explore that as well. One point to make for the exact behaviour of the formatters even though I think practically all implementations that currently exist ultimately rely on CLDR data one way or the other, by explicitly saying that zxx would depend on CLDR data we would be adding a sort of dependency that I don’t think we currently have from 402 onwards.

DE: That’s right. Everything is still implementation-defined right now. This would be well-defined. Might be a reference to specific Unicode-defined algorithms, for example.

SFC: Even if we normatively refer to CLDR for this which I think is a perfectly, you know, reasonable thing to consider, it’s still a proposal in ECMA-402 if we want to say if you use locales zxx as an example that you get, you know, a certain type of behavior. That is still a change that we make that we proposal. I think that like the degree to which behavior lives in the CLDR specification in normative reference versus the degree to which we actually put the text into 402 or to 262 is, you know, something that we can explore. But ultimately the problem that we’re solving is the same and it’s just a mechanism of which standards body holds which sections of the algorithms.

DLM: Thank you. I was just wondering if you could elaborate or explain more on what the stability guarantees are in CLDR go at that because the web compatibility problem was a switch of spaces to narrow spaces in local.

DE: I don’t think stability guarantees on the value of the data, but for example, the fields and the schema have certain guarantees and character classes in unicode have some things about them guaranteed to be stable, and not other things are not guaranteed to be stable. So the question is just if we can make sure that we’re keeping the Unicode in the loop as we evolve this. I don’t have strong opinions which place things get defined in as long as we’re working on both sides of that.

MF: So I understand that there is a problem that inspired this research. But I am quite uncomfortable with the solution. It seems to be further encouraging the exact kinds of things that caused this problem although in a way that would avoid it. I don’t see – my understanding is that all of the – like, that there’s a string used as an intermediate representation that’s unnecessary. That all of the content of the string would be available elsewhere as property access without having to go through this intermediate string and parse it out. That path is the problematic thing. I’d rather just see this not exist and have people not parse strings.

EAO: If I may reply, I agree it would be great not to have people parsing strings. The issue that we are solving now is that people are parsing strings.

MF: This doesn’t stop people passing the Swedish locale to toString. They can still do that. This is giving them a different locale to use. Why parse the month out of the date representation instead of just accessing the month property on the date? This doesn’t seem like something we should be encouraging.

USA: Shane has a response to that.

SFC: Solution Number 1 is the approach that anything that developers could reasonably want out of402 we have somewhere else in the specification that they can use. That is solution possibility Number 1. If we want to have a discussion of pros and cons of Number 1 versus Number 2 that are different versions to solve the problem we can have the discussion.

MF: I think I just don't fully understand solution 1 and I feel like I oppose solution 2.

RGN: I mean, it’s also worth noting – if you look on the slide here, not all of this is about parsing formatted strings. You know, segmentation and collation, these are also domains where you might want stability but it doesn’t involve taking in a formatted string and outputting something that reads the parts of it.

MF: For those ones I don’t understand how it is done in a language independent way. Maybe that needs to be explained. Can you clarify how that’s language independent?

EAO: So, for example, I’m not deeply familiar myself with collator and segmenter, but what I understand indeed for segmentation in particular, the edge cases that are locale dependent are very, very, very specific. For the vast majority of cases and uses of tear segmenter you can apply an algorithm that will give you a good result without knowing the locale of the content that you’re processing.

???: The algorithm is actually published in UAX29.

EAO: But the APIs we are currently providing give no way for a user code to stably be able to access this and know they are accessing this and that future later changes of info formatters without change this fact to give them different results that they’re currently getting.

RGN: Just want to express support for some kind of solution here and recognition of the problem having a reference to stable locale independent algorithms would be really nice. No matter where the solution takes place. Obviously this is spanning a few organizational boundaries but I think that’s fine.

KG: Seconding what MF said. To the extent any part of this is motivated by "I want to output something, I don’t care what the format is, I just need it to be a nice stable format because I’m going to write a parser against that format". I’m opposed to that. Things motivated by something else, like I want to use this particular well defined algorithm and there’s nothing that exposes that currently, I’m happy to expose such an algorithm. For example with using the Swedish locale to get ISO formatted dates, I’m fine with exposing something to give you ISO formatted dates. When there is some particular format that you want to achieve, and we’re adding a way to achieve that particular format and the format is independently motivated as something people would want, I'm fine with all of that. I'm not fine with the feature request, "I just want anything arbitrary that is stable so I can parse it". I don’t think we should be motivating anything by parsing strings even though I know that’s a thing that people do.

USA: I support this proposal. Thank you for bringing it. And I prefer the second solution that you proposed. We went through a lengthy process of sort of the pros and cons within the design of Temporal and in the end sort of ended up with this solution of having this null value TimeZone in calendar, UTC and ISO and 861 respectively and we could repeat sort of this analysis but I feel that the zxx solution is the most optimal one.

LCA: Okay. This is short. I have motivation for like – first of all I think the second solution here is very reasonable and I have a motivation which is snapshot testing and would like a way to serialize objects arbitrary, object to stable strings to have cross versions for Snapshot testing. Don’t have a good way of doing that right now. This would help with that. I like this as such.

EAO: I would like to ask for Stage 1.

USA: I believe you have heard a number of statements of support, nothing strong enough to block consensus.

DE: There have been concerns about the motivation of exposing things as strings. Does that rise to the level of –

KG: Definitely don’t mean to block consensus. That is fine.

MF: Same. I would say the motivation is fine for sure. Just I would say when going for Stage 2, I – those considerations about stable strings, you know, I don’t – not a formatting thing to say. It’s fine.

USA: All right. Congratulations, you have Stage 1. Shane has a follow on.

SFC: Yeah, this is great. I think obviously for Stage 2, we should make a decision about exactly whether we go more towards Number 1 or Number 2 or maybe a Number 3 that hasn’t surfaced yet, and I think incubator call would be a great way – a great place to have that conversation.

EAO: Indeed. Sounds like I need to set up two different incubator calls now.

USA: That is perfect. Exactly on time. Thank you everyone. We made a lot of time as well as great progress today. I believe you might have a bunch of stuff to talk about in person for all of those that were there. That’s it for the meeting. See you tomorrow. Bye.

### Summary

* Many JS programs rely on Intl algorithms maintaining stable output, but data in CLDR which backs these algorithms is not typically updated with such requirements in mind. This proposal adds a particular API which is guaranteed to give stable output.
* We do not consider any use case where this stable output is later processed into its components by a machine to be valid.

### Conclusion

* The proposal advances to Stage 1
