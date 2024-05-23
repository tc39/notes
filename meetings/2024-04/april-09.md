# 9th April 2024 101st TC39 Meeting

-----

Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

You can find Abbreviations in delegates.txt

**Attendees:**

| Name               | Abbreviation | Organization    |
|--------------------|--------------|-----------------|
| Istvan Sebestyen   | IS           | Ecma            |
| Keith Miller       | KM           | Apple           |
| Ashley Claymore    | ACE          | Bloomberg       |
| Waldemar Horwat    | WH           | Invited Expert  |
| Jesse Alama        | JMN          | Igalia          |
| Linus Groh         | LGH          | Bloomberg       |
| Ron Buckton        | RBN          | Microsoft       |
| John-David Dalton  | JDD          | OpenJS          |
| Ujjwal Sharma      | USA          | Igalia          |
| Ben Allen          | BAN          | Igalia          |
| Daniel Minor       | DLM          | Mozilla         |
| Samina Husain      | SHN          | Ecma            |
| Nicolò Ribaudo     | NRO          | Igalia          |
| Bradford Smith     | BSH          | Google          |
| Chris de Almeida   | CDA          | IBM             |
| Jordan Harband     | JHD          | HeroDevs        |
| Philip Chimento    | PFC          | Igalia          |
| Daniel Rosenwasser | DRR          | Microsoft       |
| Mathieu Hofman     | MAH          | Agoric          |
| Mark Miller        | MM           | Agoric          |
| Eemeli Aro         | EAO          | Mozilla         |
| Duncan MacGregor   | DMM          | ServiceNow      |
| Jack Works         | JWK          | Sujitech        |
| Mikhail Barash     | MBH          | Univ. of Bergen |

## Explicit Resource Management Normative Updates and Needs Consensus PRs

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-explicit-resource-management)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkqpkI6V9_w6ykvsG1w?e=ehAC64)

RBN: Good morning, everyone. I am Ron Buckton from Microsoft. This hopefully will be fairly brief plan to discuss some of the normative updates to explicit resource management and needs consensus PRs that we discussed. The first one, we have been discussing this in the pull request, but as update, there was a potential leak with the DisposableResources AO, had no indication that after a block containing using exited and all of disposables resources have been executed or been disposed, that stack will never been accessible there. Therefore, those resources can be freed. So this [PR](https://github.com/tc39/proposal-explicit-resource-management/pull/194) adds a note as well as an explicit value to disposable resource stack undivided, at this may not require based on discussions. But the basic premise is, once a stack has been disposed, it can never be used again or should be used again. Therefore, it’s free to collect the resource part of it. This is considered suggested, this is not necessarily need consensus PR, since implementers are free to free any resource that or any object that isn’t actually ever used again. But felt that the note was helpful in – to indicate to implementers that is intended or preferred behavior rather than to maintain those resources.

RBN: The second [issue](https://github.com/tc39/proposal-explicit-resource-management/pull/216#issuecomment-2015449095) under discussion and this one requires consensus, currently the disposed AO performs a return of abrupt when calling a captured disposed it. This is the same type of thing in iterator.return, et cetera, when AsyncIterator return so that a synchronous exception that is thrown such as if you are trying to actually construct on demand the AsyncIterator return method, that would throw synchronously rather than asynchronously. And while that is the expected behavior in those cases, right now the asynchronous dispose that is picked up by AsyncDispose declaration isn’t wrapped in a PromiseCapability in the same way as for async from sync iterator implementation. As a result, even though we do a await for async depose, that essentially awaits undefined, a dispose will always throw synchronously, therefore won’t be caught asynchronously the way an async would. Therefore, this PR has suggested or proposed that the exceptions thrown synchronously should not send trigger promise rejection. We don’t want to be different from how async from the sync iterator works for consistency. So PR 218 now wraps the – GetDisposeMethod that creates this wrapper function now would create a PromiseCapability. Since this one does require consensus, I would like to ask if there’s any objection or any – ask for consensus if there’s any observations to this PR. I can open it, if that would be helpful as well

USA: Yeah. There is nothing on the queue yet. Let’s give it a few seconds. Nothing on the queue yet.

RBN: Is there anyone that can provide explicit support for this change?

USA: MAH is on the queue.

MAH: This is a great. I mean, so a throw in the await using should from my understanding, this will result in in await point which is what we wanted.

RBN: Yeah. That is correct.

MAH: Support, yes

RBN: I do want to also clarify, it is still the case, both with async from sync – AsyncIterators in general, and await using that if the resource async method that happens to throw synchronously, either it’s a user implemented depose that returns a promise, or it’s a getter that returns a function and those happen to flow, those still will throw synchronously. That is the case for 408 of and ever other `AsyncIterators` how the spec is written. We are consistent with that, although that’s not likely to be often the case since most users writing in AsyncDisposable will write an async function. But this will maintain consistency with how that works.

RBN: So the [next item](https://github.com/tc39/proposal-explicit-resource-management/pull/219) to discuss that also requires consensus we have been discussing the deterministic collapse of await and the resource is `null` or `undefined`. Now, just if you have a resource available to simplify the process of conditionally accessing that resource or conditional registering that resource we allow `null` and `undefined` as valued values in a using or AwaitUsingDeclaration. A null or undefined value means we don’t need to actually run any type of dispose callback. It allows people to return `null` or `undefined` in a resource is not available but don’t want to throw instead of having to completely bifurcate sections of code to handle those cases.

Now, the way that we handle the async leaving point at the request of MM was that any time you see an AwaitUsingDeclaration there is an implicit await that happens barring the very small case of async throw from an async dispose. And how that is currently implemented is that whenever a null or undefined resource is added to a disposable resource stack we will run an await for the null or undefined. That means, just as an indicator we still in await using or await using exist and await needs to happen. The downside of this though if you have multiple nulls, or multiple undefined or a mix thereof, combined with other resources or all null, you await for each individual null operation, even though the requirement was that we – that code outside that block runs in a separate turn. Therefore this would return 3 turns later when we ideally want to finish this after one turn. Perform single await. So the idea with the deterministic collapse is that we would reduce all of the nulls down to a single await. The PR 219 currently only reduces contiguous runs of null or undefined to a single await. So I think NRO has a topic specifically asked about this as well, is that the way the PR is currently written, if you have null, `x = null`, `y = null`. Those are condensed down to a single await. Then you have other nulls, after that, those get condensed down to a single await. It’s been discussed in the PR that all nulls should condense down to a single await and not that as long as a non-null thing had an await occur. So that nulls become essentially transparent, as long as there is something else that triggered an await, which is the other direction we can go.

So I will take some additional questions here, since there’s a consideration to consider – or an option to consider as well.

NRO: Question. I guess my preference would be to collapse nulls as much as possible, so if there is at least one null, but I would also be fine with what the pull request is currently proposing.

RBN: I think that is also the current – the most recent suggestion on this PR was that – it might be in the issue, I think. There was a suggestion that all of the nulls become transparently ignored. I will sake Tom additional – I don’t know what NRO means. Sorry.

NRO: MF is saying he agrees with me.

RBN: All right. I see. Yeah. So unless there’s anyone that prefers the – the [PR](https://github.com/tc39/proposal-explicit-resource-management/pull/219) currently is handling this, only contiguous runs. I will make that change to collapse all null undefined down to a single await but only if there is no other await that occurs. And as a result, I would like to seek consensus for that change. So looking for either explicit support or anyone that is opposed.

USA: I see nothing on the queue so far.

KG: I just want to clarify. That sounds reasonable to me but I want to make sure I understood the proposal correctly. So this is saying that if there’s at least one null, if the – sorry. If there is any await that happens for reasons other than null, then the nulls don’t cause any awaits at all?

RBN: That is the suggested change to this PR. Yes.

KG: Okay. In the case that wasn’t any actual await, but there was at least one null, so it’s not a completely empty set of declarations. Then you perform exactly one await?

RBN: That would be correct.

KG: That sounds good to me

RBN: There is one possible thing to consider there, which is if you have a run of – let’s say you had X = non-null, you would have a run of nulls that don’t do anything. And then the last thing that you would dispose would be the first item, and ideally, you will await that result. Again, if it happen to be in the small corner case of a async dispose that throws synchronously, the question; should we still enforce an await, since had these been actual resources we might have expected one await to occur before that exception occurred, or does that end up being completely synchronous and still throws the following body is synchronous? Because this is such a narrow corner case, I am not sure it’s something we should be too concerned about. But if we want to maintain consistency, we might still force an await because something might have happened with the other resources or just go with the simpler approach, which is ignore nulls as long as some async dispose or dispose wrapper was invoked that would have triggered an await.

MM: Sorry. Could you state the corner case again. I’m sorry

RBN: Yes. The corner case – maybe I can edit the slide briefly to indicate this. The corner case would be if I had… so the corner case would have been this example here, where what will happen is, the – the first thing that would be awaited – that we would have awaited had been resources would be Z, awaited async dispose and awaited async dispose. We haven’t done await yet. Then there’s the potential that this – X is async dispose throws synchronously either because async dispose is a getter or the async dispose has synchronous code that executes outside a promise and returns a promise. Those – this can trigger a synchronous throw that bypasses all of this. And that’s purely because it matches the semantics of how AsyncIterator works. If there’s – there’s no await that will happen. So the question; would we enforce an await at that point, even though if there was only one resource, only await using X = non-null and no other nulls, a synchronous throw would not result in an await? Do we maintain that behavior, consistent with 408, or do we still enforce an await because there was something like the Y and Z that comes afterwards?

MM: Okay. My preference is clearly that we would enforce the await because the reason why we are not treating – why the nulls still cause, in general, still cause at least one await is so that you don’t have to reason about conditional and computed data values are in order to know whether there’s an await breaking up the control flow. Since the Z would happen before the non-null, and you don’t necessarily know statically that it’s null, my preference would still be to enforce the wait. Now, to argue on the other side, the reason why the synchronous throw from the dispose, although I do find it unpleasant, is something that we are willing to live with, is because the throw does force the program into a completely different control flow path. So it’s not that you’re proceeding forward even with or without an `await`, depending on data. It’s that you’re only on the throw control flow path, in the case where there’s no await. So I think I can live with it either way, but I strongly prefer that the `z = null` happening before the `x = nonNull` does force an await.

RBN: All right. I think that’s perfectly reasonable. I do think the other approach is simpler. But that’s perfectly reasonable and I think that’s perfectly feasible to do with a minor change to the PR. So if that’s the case, what I am seeking consensus is deterministic collapse of all null and undefined in await using that will trigger an await at least trigger await even if there is a synchronous throw from an async dispose for any resource in that block. So if that seems reasonable, then that’s what I will seek consensus for.

MM: Okay. Good thank you.

USA: So that was it for the queue.

RBN: So looking for explicit support. Incompetent I am not sure we got that

USA: Earlier, there was one by NRO off the queue, but there was one statement of explicit support.

RBN: Any objections?

MM: We support.

RBN: All right. Thank you. The last –

SYG: Sorry. Could you reiterate exactly what we got consensus on because of the change from the PR from the contiguous runs?

RBN: Yes. Rather than contiguous runs, the change; and I will summarize in the notes as well, we have reached – reaching consensus or seeking consensus on is that all null and undefined resources get collapses down to a single await that only happens in no other await happened in the AwaitUsingDeclaration. So even if non-null throws synchronously when you invoke the await dispose, we would still – that would not trigger an await. Therefore, we still introduce an await as a result. Does that clarify?

SYG: Yeah. Thanks.

USA: WH?

WH: Let’s consider the first example, where *x* and *y* are null and *z* is non-null. Would that now cause two awaits or one?

RBN: The suggested proposal, if *x* and *y* are null and *z* is non-null, we are seeking consensus that there is a single `await`.

WH: Okay. And in the case of *x* non-null and *y* and *z* both null, there will be two awaits?

RBN: As we are discussing, there would still be a single await. It would be like the *x* and the *y* didn’t exist, except for the case where non-null throws synchronously.

WH: I am trying to understand — I am confused about what the solution is now. When running the code, you get to *x* and *y*. Those are null. You don’t await. You get to *z*, which is non-null. What’s the order of operations? When would you do the await in the second case?

RBN: Two places to check. One is that if async dispose, if you – when this calls async dispose on non-null, if it throws synchronously, then we haven’t awaited. If it does not throw synchronously, an await has occurred. the current PR essentially does this, but it’s only – it breaks things into what comes before and what comes after.

So again it would branch based on whether we – whether getting the method and evoking it throws synchronously, that does not trigger an await. Therefore, we need an await to occur because there were other declarations. If it does not throw synchronously and you get a promise result that you can then pass to a PromiseCapability, and then you await, that mark that await does occur. Therefore, we would see – okay we have all the other things marked as null, await curse, and we no longer need to introduce an await

WH: Okay. So you catch the synchronous exception, then await because you had null. And then deal with the synchronous exception. Is that right?

RBN: Essentially, yes.

WH: Okay.

RBN: It does feel a bit strange to me, but essentially the idea; we didn’t need to introduce an await for Y and Z, to be able to execute non-null, but we need an await in general to try to ensure that the code afterwards barring the very narrow – not even then. Sorry. So the code that runs all the blocks runs in a later turn.

WH: Yeah. It seems a little weird to me too. But I don’t have a better idea.

RBN: Yeah. It seems a little weird to me. I would be fine if we ignore the Y and Z and then we would have triggered an await for non-null. If – the primary requirement is to meet MM’s specific requirement of the explicit await

USA: Next we have Nicolo.

NRO: I think I understand. Like, but like I will be comfortable with saying with the consensus, but it would be great if you could after the request, reask for consensus, because I – given that we discussed to make sure people can rate the actual text and check if it matches understanding

RBN: We do have pretty universal consensus, regardless whether the null comes before or after we should collapse the await and the big question was, whether or not we force an await in that case when async dispose throws synchronously. I can start with the first bit and come back either at the end of plenary since the change is relatively small to make that. And ask again if anyone with concerns has had time to review the change, if that is acceptable, I can do that as well.

NRO: Yeah. If there was a couple of minutes at the end of the plenary, that would be great.

RBN: All right. I will see if I can do that then.

USA: Next we have a clarifying question by John.

JDD: Hi. I am just making sure that collapsing these awaits is essentially just an optimization. So I guess my point of view is that the behavior around the edge case should be consistent with if the optimization didn’t occur, so like the case where we need to have an await with the case where you’re throwing synchronously, if that matches like the assumed behavior, that’s great, to me. Even if it – I don’t – I don’t think it is awkward. It sounds like if that’s the design, then that sounds great to me. So I am in favor of any optimization that is applied that still pre serves the expected behavior for it. So… that’s it.

RBN: Yeah. The there’s two points to the optimization. The first is that the PR as it stands right now, which does deterministic collapse of a contiguous run of null and undefined is the optimization. When the optimization falls down, it goes back to what you normally expected. As the transitions interest the optical mace, it would introduce an await as if one occurred. But that introducing excessive awaits when you have null, non-null, null as the resource – the set of resources.

RBN: The second bit about optimizations, await isn’t exactly optimization, which is in general the thing I would say an engine could do if it’s not observable to the runtime. This is observable semantic change, because it’s possible to have things that run into different turns and based on null collapse, which turn this thing runs in would be different than if we didn’t have null collapse. The main reason why the – this shouldn’t that much after concern, it’s a terrible idea to depend on the – which turn async operations resolve in, that’s one of the classic releases all go type things, you shouldn’t write code that depends on which turn something occurs unless I am writing test code for these behaviors. It’s a bad idea to depend on that. I am fine with the deterministic collapse.

RBN: And that said, if you wanted to try to apply the optimization, you have to trigger the await before the three occurred to be considered an optimization.

RBN: So I don’t know. I am not sure where I stand on considering that. I want to say this is similar to the thing with AsyncIterators, where we tried to remove some excess awaits that occurred due to the promise adoption behavior. And we kind of privileged native promises result so there’s less awaits that occur in certain cases as a result of being in a native promise versus being a promise A+. We are trying to reduce unnecessary awaits that even if you’re writing code that doesn’t care whether – what turn the code runs in, that the – what you’re looking for actually is we are not waiting multiple extra milliseconds for the – for each await that essentially does nothing which is just an artificial slow down to the code.

So in a sense, optimization, that does make sense.

JDD: Correct. Thank you. Yes. I considered – I never even considered trying to account for the – the specific cycle. An await needed to happen, that was it. As long as an await was expected, I don’t – the number of cycles really doesn’t concern me. I don’t think people should be tracking that either, so. Yeah. If this is all in aligned with that and similar to the other optimizations, done for for-of, that sounds great.

USA: Okay. Okay. We had a reply. As you – okay. Yeah. It looks like we’re heading towards time and there’s nothing on the queue.

RBN: I will move ahead. I will come back later in plenary after I made the change to the PR, NRO, and anything else I want to review.

RBN: So the other thing that potentially needs consensus here, there is a lookahead restriction we added for using that banned export using – because it doesn’t make any sense. If you export a UsingDeclaration, exporting a resource, by the time you access, it’s not available, because it’s disposed of. Therefore we banned export using. And that also was designed to cover async version of the proposal when we were still using the await syntax. When I merged, I overlooked with the changes that the switch to the await using order meant that await using was no longer banned as an export and I want to maintain that. So this PR just introduces a ban for export looking ahead not equals await or using. There is no other legal form of export await anything. Therefore, this doesn’t get in the way of any other code right now. So this – a ban for both. So quickly, I will look for consensus or opposition and I can move on to the next one.

USA: So already there’s three statements of support on the queue from NRO and JDD and WH. Perhaps let’s give it a second for others to jump in, if they would like that.

MM: Support.

RBN: The [last one](https://github.com/tc39/proposal-explicit-resource-management/pull/220), which also probably does not need consensus, since it has no actual effect on the spec, V8 working on implementation of UsingDeclarations and found that the – there is a – there is an early error introduced whenever a UsingDeclaration is used in a place that’s not a block scope. Essentially, this is banning its use this script. And the idea here is that they have to be immediately within a block scope. They don’t want to be within a script. It’s hard to write that with the way it’s organized. If a UsingDeclaration isn’t nested within one of the specific things that introduce a block scope, and one of the things that introduces scope is ClassBody. You can’t write a UsingDeclaration in ClassBody. It has to be something else that is a block scope. SYG requested I remove that. It doesn’t affect the spec text. So PR 220 removes that. That is editorial. It’s an error that can never occur. I want to make sure that that is – people are aware of the change in case there’s no other question on that

USA: That was a clarifying question you just clarified. WH supports on the queue

RBN: I was one thing for UsingDeclaration. That’s day 3. It’s a potential proposal. Cover that at that time.

USA: Great. Thank you, Ron. And yeah. Thanks, everyone else for this discussion. Given that we are over time, let’s quickly move on. But Ron, please make sure to record the conclusion. Waldemar, quickly go over your topic?

WH: Yeah. I’m listed as a reviewer on the slide and I reviewed this.

RBN: I appreciate that. Thank you. I will update the topic with the summary

### Speaker's Summary of Key Points

- PR#194 - DisposeCapability Leak in DisposeResources AO. To be solved by adding a NOTE.
- PR#218 - @@dispose in `await using` throws synchronously. To be solved by wrapping in PromiseCapability.
- PR#219 - Deterministic Collapse of Await for null/undefined.
- PR#222 - Missing lookahead restriction to ban `export await using`.
- PR#220 - Superfluous *ClassBody* restriction in Early Errors.

### Conclusion

- PR#194 - Editorial only. No consensus required.
- PR#218 - Has consensus.
- PR#219 - Consensus on collapsing **all** null/undefined, needs PR updates for consensus on sync throw from @@asyncDispose behavior. To be revisited by Day 4 of plenary.
- PR#222 - Editorial only. No consensus required.
- PR#220 - Has consensus.

## AsyncContext Stage 2 updates

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-async-context/)
- [slides](https://docs.google.com/presentation/d/1ok6fX9PN3XEv9ZwffrDzJX24uuiNrkGDZN-KgGwGkc0/edit?usp=sharing)

USA: All right. Then moving on, we have Justin with AsyncContext updates. JRL, are you ready?

JRL: AsyncContext update. It’s been a while since we talked about anything, but there’s been a lot of progress in the background while meeting

JRL: First up, `AsyncContext.wrap` is back. It’s now attached to the Snapshot class, as a static method. It is exactly the same as the old behavior. And it is exactly the same as if you were to create a new Snapshot and immediately snapshot that run to that snapshot instance and pass the function, whatever you want to do. We introduced it based on feedback, that it is more convenient if you are only passing a single callback to another library and you want to wrap it for whatever reason. It’s more convenient to use a static wrap that had to create a snapshot and – anonymous IFFE or something that will then invoke the snapshot with the correct run context. Snapshot still exists because it is the more efficient API when trying to invoke multiple callbacks in the same context. But wrap allows users who are trying to pass callbacks to another place to efficiently pass a single callback and ensure it exists within whatever scope they want. The code at the bottom, it’s exactly the same as it was before.

JRL: We fixed our `FinalizationRegistry` support. The FinalizationRegistry will snapshot when constructed. Not when you call the `.register()` method. Based on the pattern that other observers are going to be implementing, particularly MutationObserver, PerformanceObserver, all the observers that exist in the HTML side of the spec, they all batch their updates and invoke their callback a single time with all the updates that happened since the last batch. That makes it impossible for those observers to invoke the callback within multiple different contexts when you were to `.observe()` or `.listen()` or whatever they are doing. The APIs for registering. Instead, all of those observers snapshot when they are constructed and they will restore that snapshot whenever invoking all of the updates. We chose to follow that pattern. So all the observers, snapshot at construction, restore that while invoking. In this case, you will see that we created the context one, when we initialized the registry so that is what is the snapshot, the call back will be invoked within that snapshot. You register at any point later on and whatever the object is freed, we will rerun within the same context.

JRL: We have updated snapshotting of generators. If you remember, from the last time we presented, we are going to be snapshotting the init context of a generator and every time that you call .next of that generator, it will restore the init-time context. We created, invoked it at the time. When he first invoked it. It will restore. Hit the yield, it pauses and whenever you have resume the generators by calling next, it will again restore the init-time context. The only change that has happened since the last meeting is that we changed the spec text so that spec internal generators, i.e., iterators to easily implement iterators do not snapshot anymore. The only case that this was actually observable is array prototype values and only if you have a getter on your array object. We don’t want to force implementations to redo how they are doing the spec iterators because they are heavily optimized, particularly array. So we are just – the spec internal iterators don’t have to do any snapshotting. Only the user generators, the code, the actual source text that the user is writing will perform the snapshotting at init time behavior. We fixed promise unhandledrejection. We told you that the promise – unhandledrejection fires in the context of reject. So in this case, we created a context one, and then we created an unhandled promise inside of it through a foo error.

JRL: At the time, when that dot was invoked and before we hit the throw, we executed within the one context. And then once that rejection happens, we expect the unhandledrejection to capture that one context so that you can determine what the context was and what the – your values were when dealing with unhandledrejections in the event listener.

There was a bug in our spec implementation that restored the old snapshot too early. Meaning, this would have actually executed within the undefined context, the context that was immediately prior to this, making it not useful for actually determining what went wrong in your application.

JRL: We fixed this now. It is now behaving the way we have always told you it will behave. And it just allows you to do the way we have always described it. So this is the correct behavior, it’s now properly implemented in our spec text.

We have designed several implementation strategies. Currently, the spec text uses a map, and extremely useful to understand in the promise is understandable. And there’s no way to get it wrong. It works well. However, it encourages a high memory uses, when ever a best of your knowledge of nested run calls, V1.run and runs of these AsyncVariables running, you have you’re a map that is N + 1 and N + 2 entries, and it’s quickly overwhelming in these pedantic cases. This is downside of the easy strategy

JRL: The other way to approach this is with a linked list, is extremely fast to run. You don’t have this case where you’re allocating in N + 1 and + 2 and + 3.

Better for memory usage, but worse for runtime. There is a problem with the link list approach. If you have a nested run that overwrites a previous variable, we have an object and V.run another object, that object, the original object is no longer observable from inside of this context. Yet it still exists. At some point in the future you need to compact your linked list. So that object can be freed and it no longer – any FinalizationRegistry attached should be run. This is complicated. There’s only certain areas you can do this and depending on whether you use a mutable strategy, it incurs memory usage. The other implementation we have considered is the HAMT, a hash array mapped trie. It is exactly like the link ties, but you have multiple branches from the root. You have a link that has all entries, you have 32 link lists that have 132 of all entries in that particular branch. Recreating a particular branch is cheaper if you run into this case where you have a `V.run` or multiple overwriting runs happening. You can recreate a branch that has a smaller number of entries inside of that branch.

And then you don’t have to worry about compacting because you have already done it during the run.

JRL: It has the same performance benefits as link list does. You don’t have the memory usage. And `V.get` is a bit slower. But overall, it solves the exploding memory problem better and it doesn’t have the compatibility issue. That’s the three strategies we have investigated. They’re all in the design doc.

JRL: We have Test262 tests. It’s a comprehensive test suite for everything we are aware of. There are a couple of things to do after iterator helpers lands and maybe there’s a case we haven’t seen. Maybe there’s a case we’re missing. But there’s like 150 test cases in this already, and we will keep adding them. It’s up to date with the latest spec text and covers everything we know about

JRL: We are working on HTML integration. We are collecting all the methods and events that will need to change to interact with AsyncContext. We then need to determine if it’s like init-time for the observer. If it’s the registration time for the event listener. The call time for like test attribute.

JRL: So we’re trying to go through everything and determine exactly which behavior they are expected to hold. We are using task attribution and zone.js as prior art for AsyncContext, as a reference point for what it should basically be. But we’re not sticking to those as ground truth. We will decide exactly which thing is appropriate in all cases.

JRL: The spec text for this, we will have a complete – or we will have all the spec text that we are aware of open and pending on to the HTML and WHATWG PRs to make sure everyone is aware of what changes will be necessary and to get all of the implementers to agree to that. Once we have all of the PRs up to date with the current semantics, and behaviors that we want, we will be asking for Stage 2.7 at that point. This is the only thing that is stopping us right now from asking for Stage 2.7. Everything else, there’s no bugs we are aware of, no behavior we need to change or anything. We are in a pretty good state.

JRL: So our next steps, we have spec text. It’s complete. We’re at Stage 2. Asking for 2.7 once we have the HTML integration. Actively investigating the HTML integration side and opening the spec text with exact behavior we expect. And keeping it up to date with the state of our proposal.

We are investigating the implementation for V8, that’s where we are investigating the linked list versus HAMT versus map design. You can desire the design doc for what V8 is looking at. We have the Test262 test suite. It is open, we are just waiting for us to hit Stage 2.7 to officially open the PR and merge that.

We will be going for Stage 2.7 sometime this year, when we can get the HTML spec text complete. We are open to everyone getting involved in this proposal. We currently are meeting every two weeks to discuss updates and what we think should happen, any issues open on the GitHub repo. You can join the AsyncContext channel in matrix if you want to keep up with any of the chats. And we are always happy to accept PRs. All right. Is there anything on the queue?

USA: Yes. Thanks for asking. And we have a few minutes. So let’s go through the queue. But please try to make it fast. First we have ACE. I don’t think you would speak. But feel free to. But yeah, ACE says that the agenda needs a link to the slides. JRL whenever you put it there.

MM: A quick question about the unhandledrejection, in order – first of all, semantically, I like the solution if we can afford it and I do hope we can. At the time that the rejection happens of course you don’t get no in a it’s unhandled, if you never need to track the context through promises. It always control flow. Like with the registration. Would this be the one thing to track the context associated with a promise?

JRL: There is a spec hook called handled, unhandledrejection, that HTML implements, and allows it the tracking for unhandledrejection. We invoke that hook during the promises rejection phase. After the throw this is the handle of the completion value, we determine that it is an abrupt completion for a throw and immediately call unhandledrejection hook. That hook needs to have the current context view whatever the hook – the context of the promise’s execution. Before we restored the previous hook, the previous context before invoking the hook. Now we do it immediately after invoking the hook. The hook is able to get the promise, the current promise that the promise is invoking within and take a snapshot of the state and restore it later on, whenever it’s invoking the unhandled rejection handler

MM: If everyone thinks there’s no implementation problem, since I like the semantics, I am fine.

USA: Great. Next on the queue, SYG says, the champion for the data structure exploration. And that’s it.

JRL: Okay. So I will add the slides to the agenda. Sorry, I was travelling yesterday, so I didn’t add it. That’s it for updates.

MM: Question. I thought that there was – sorry. I thought there was a controversy about some kind of synchronous finalization or deterministic finalization, not depending on garbage collection when a context is done. What was the status of that?

JRL: We had previously talked about task – context determination. We are not pursuing that in this proposal. It was never actually a part of the proposal. It was something we could thought could happen as a follow-up

MM: Okay. Great. Great. I prefer it not to happen. So that’s wonderful

JRL: I think we have agreed at this point, we are not going to pursue it. There’s an update yesterday, I think, DE or someone commented on the PR. Not on the PR, on the issue. If anyone – I wasn’t prepared to answer this question. I’m sorry. If anyone has a definitive answer for this

DE: Nobody is working on that feature now, on task termination, as far as I know. It would be interesting, but there is nothing to fight against because it’s just literally not happening.

JRL: Great. Thanks.

USA: All right. That – Justin, are you finished?

JRL: Yeah. That was it from the updates, as long as there’s no more questions, that’s it.

USA: There was a summary – well, put a conclusion, I implore you to do that and a summary in the notes

## Deferred import evaluation for Stage 2.7 (without "tree-shakeable" exports)

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-defer-import-eval/)
- [slides](https://docs.google.com/presentation/d/1oPEF8nA9Iq5cAqjN-FqMigNNfz6lWCUbNfIsEjRXf4Y/)

NRO: So hi, everybody. Deferred import evaluation for hopefully Stage 2.7.

So for this proposal, it gives you an easy way to import modules while deferring their evaluation when it’s actually needed. And the module will be – only some large bases, as part of the start up cost is – but that is not always needed and so given an easy way to avoid that gives the start up time of the applications. There is a big elephant in the room here that is top-level await. Because deferred modules need to be evaluated synchronously. Otherwise, if you can defer an await, just use dynamic import – it doesn’t play well with this. It’s obviously asynchronous. So the proposal – the decision we made was that async models are still eager evaluated. When deferred, it will look for synchronous dependencies. This is not like – it doesn’t parse the module for being completely. It’s the best for optimization.

NRO: So to clarify what I mean, we have this model structure, where the dashed arrows represent deferred imports and a module that uses await.

So when we run our, the initial executed on graph, it includes the non-deferred depend circumstances on the left. And include the asynchronously. First we evaluate all this part. And then when later at some point, for some reason, we trigger evaluation of the deferred module. It will evaluate the remaining parts. And this is if we were looking to have to redesign the way to the semantics is equivalent to moving the ImportDeclaration from the async module into the module that’s doing the deferred import. So if the entry point here has the top, this import deferred declaration is – and ImportDeclaration. And then the namespace is the of the module. So why this? Not use dynamic import given it is already in the language to delay code execution?

Dynamic import is going ahead for improving this type of start up performance cases. But it forces you to use await. And this means that you need to change all your callers in the dynamic import is changing in a call but asks somebody else, to a library or some host function, that needs to be able to handle async callbacks. It has a very high friction when you introduce it.

We are willing for something that is maybe not as good as dynamic import but match at large scale.

What performance improvements are we talking about? We have like a few cases to this.

First exactly what all this is escaping. So when we have import defer, it keeps most evaluation and synchronous. But it forces us to full model graphs. While import, dynamic import, it keeps – however it’s asynchronous. There’s a third case here that’s not – doesn’t directly come from the proposal, but a way the proposal can be implemented in the environment. Import defer is the general way of defining import defer. I will specify how to be implemented in a way that works everywhere. But in platforms, models, you actually get more benefits because you don’t need eager loading anymore. You already know if this is await or not. It be loaded very fast. What are these environments? Some of them are React Native where you have a bundled set that would go together. But for the purposes like where you have to preload the code and code executed when there are requests. Or browser cache. And maybe it’s already compiled. But the code is there and it can be pre analyzed

NRO: Some concrete case studies, react native. BlueSky uses React Native. As I mentioned, they are available. And it doesn’t run. It uses lazy ESM to CJS. They basically run with the import defer semantics. And they know there is no await because compiling doesn’t support. So they mark everything as lazy. Start up time improves by roughly 30%. You can go check the numbers in the pull request.

NRO: And another case study is the Element web app. It's a very big app bundled with Webpack. Everything is on the web. Everything instead to be loaded. And only deferred execution. This is the general case. And the way I approached trying to introduce import defer was to start from the entry points. Look for all the declarations where they are obviously not needed at startup. If import and mark it as defer. And I did this for like a few things… maybe half of the incompetent porting was as lazy as the third.

And something is I could not blindly do it because some modules did rely on the relation order And the results were that we were – this was on the Web page. We were able to skip roughly 50% of the startup time before the page and maybe interact with it. These results could also be obtained by moving part and the modules and loading them. But it was easy to add import defer compared how hard it is to add dynamic import on the right places which makes some code asynchronous.

NRO: So what changed since last I presented this proposal? We added import of defer syntax that dynamic pre-loads the model. This is for symmetry. This is the same for other phase.

We change whenever evaluation happens. Rather on non-exports, it would now happen on access of any stream property on the object. This is so that you can – even in the dep model doesn’t have access, it triggers relation. You can trigger relation from modules with and more tool-friendly because your string property access will trigger the relation as you need to know the spores of the model not related yet.

So, for example, this is how the webpack implementation works.

NRO: Another update this is probably the most significant one, the Wasm integration doesn’t use await anymore. The reason the Wasm integration used the await was due to some constraints presented through the null implementation of WebKit. In the meantime, it’s rewritten and now has – doing WebAssembly instantiate too expensive and that doesn’t use that anymore. This means that the Wasm model has capability with import defer in which they can properly be deferred.

NRO: There are other cases in which you would use defer await. Now the main resource types on the Web can be loaded without top-level await. They are capability with import defer. Even the most important one is WebAssembly because it has dependencies in mind.

NRO: So there are some open questions to – that came after the Stage 2.7 reviews. Unfortunately, they were presented after the deadline, so this section of the slides is after the deadline.

NRO: One is that it can set models on any string access on the namespace. It might be better to just throw. When trying to import with exports. Like, the model with exports only useful for the side effects. Without deferring it. I would love to know your opinion about this.

NRO: And the other one is that what should happen when accessing properties on a namespace to a module that didn’t finish. Right now you can get access to namespace that is fully related to cycles. And some of the properties in namespace present, other properties will throw a TDZ error if they’re not been – for letting constant variables they are not initialized yet. And this proposal doesn’t change that. However, the proposal makes it easier to get reference to namespaces of module that didn’t finish awaiting. Because we are doing I am export defer model and defer that we access a property, somebody imports module, it drives it to completion and the model throws. At this point, the namespace of the model already, in a non-finished way. So should we – if there – like, is it okay if we just follow the existing namespace semantics where accessing namespace would work but not like throw a TDZ error to the module being fully awaited or change the proposal to make it – mark consistently throw the model relation error in this case?

NRO: Yeah. So what about re-exports? In September, November, I presented an extension of the proposal about having deferred exports. Loading. Like I called it tree-shakable exports because it’s a name I used in the system for removing branches from the module graph when they’re not used.

NRO: While the spec text, we realized like a very different proposal from this import defer, because it actually affects loading and it has – it doesn’t have the same constraints.

So I think the import defer proposal is ready for 2.7. However, the export tree-shakable or whatever the key word is, needs more work. If it runs to 2.7, I propose that it be a separate proposal and remain as stage 2.

NRO: So I have worked on Stage 2.7 requirements. We have the complete spec text. Reviewers. I pinged the editors too late. So we don’t have reviews yet. 2.7 is conditional on editorial views. And that’s it. Let’s go to the queue.

USA: Okay. So first in the queue we have KG.

KG: Yeah. This isn't necessarily a concern, but I want to run it by you. So you don't defer network requests, unless I have misunderstood. You still do the fetching, but not evaluation. The benefits accrue only in the cases you have your import modules and the modules have side effects. If you are importing modules that have only a bunch of function declarations, as is best practice, then you don’t get any benefit because evaluation of a module that contains only function declarations is essentially free

The benefits only accrue if there are side effects, but these are the cases that are most likely to be problematic to refactor in this ways because if you are depending on side effects reordering things to the side effects are triggered instead of a deterministic point is like most likely to mess something up.

Sure, it doesn’t matter if you have just function declarations being evaluated at one point or another. But if you’re actually having side effects then it does matter. And this proposal only matters at all if you have side effects. Is that understanding correctly? And how do we feel about this, if so?

NRO: There are many cases in which you have local side effects. So not just function declaration beings but also global side effects. Some examples are initialization of objects or you might have classes with decorators. The local side effects. But yes, there are – if you look at, you find they are not exploring, but local states. And that state is – has some cost to initialize.

KG: So we are worried about not getting initialization, but it doesn’t matter the order in which the initialization happens.

NRO: It’s mostly local initialization, it doesn’t affect global state. But it’s still local.

KG: I guess I – I am curious what fraction of cases this would actually apply to, because it has been my experience that most people either maintain the discipline of not having any side effects on imports, global or otherwise, or extremely minimal side effects, maybe setting up an array of constants or whatever. Or people don’t care at all, and they have global side effects on import. But perhaps that’s not an accurate understanding of the ecosystem.

ACE: Yes. Repeat of what NRO said. So we have implemented this at Bloomberg and have been rolling it out across projects. And we are definitely seeing a benefit, when there are lots of modules, even if all they are doing is exporting declarations, it adds up because maybe if it’s just exporting `export const = PI`, that’s cheap. But like NRO said, it’s common for people to build up large configuration objects because it’s easier to create them programmatically rather than literally, if there is a literal, it comes as a cost when the project scales, like maybe each one is cheap. But when you have like tens of thousands of these, it adds up and we are seeing a good performance increase. And we definitely advise people to not have side effects in their module loading. And if they do, we treat that effectively like a bug – when we detect this as we rolled it out, we are working with the teams to refactor the code so they don’t have side effects.

KG: So I guess one of the things that affects my thinking about this is that the case I care most about is the Web, and on the Web, there’s a lower bound cost to any import which is the network round trip. And so I would expect that - and perhaps I am wrong, but I would expect the cost to dominate the cost of building up a configuration object, for example. Not, you know, if you’re doing something more expensive, if you’re synchronously instantiating WebAssembly, that takes more noticeable time. But if you're just building up a configuration object, I would expect the network request to dominate that time. It wouldn’t if you were doing something locally, as I believe Bloomberg is. So while I believe your experience, I am not sure that it’s necessarily applicable to the case where we’re loading modules from the web. And I wouldn’t want this if it only provides benefits to features outside of the web.

ACE: On the web, as NRO said, you get the benefit, the second time around, when the module is cached. The first load on a slow connection, that will dominate the overall loading time. But on the cached case, even the web, you get that cache on the second visit of the site. If the cache is still valid of course.

KG: Yeah. That’s true.

DE: There’s also a first load benefit on the web. The thing is native module loading on the web can only be used for bigger chunks of modules of the pattern, you pull together a bunch the modules and then make those into HTTP level resources and use a CJS or EMD loader or compiled away loader instead within that. Import defer is useful within those chunks. Code splitting in terms of HTTP resources – with import for and dynamic for the outer part. Import defer for the inner part. So I think the time when this will have the most benefit on the web is once we solve the problem of native ES module loading, which module declaration should help us solve. Right now, in practice, modules are this tool level feature. So yeah. It could help import defer, when things are in cache and that’s an important case, but it’s probably not a good idea to deploy modules too aggressively regardless...

KG: I may have misunderstood the first thing you said. It sounded like you were saying this is beneficial if you are using a bundler? Because –

DE: Yeah.

KG: The bundler will have semantics.

DE: Yeah. This is a benchmark using bundler. And code splitting and thanks to JWK and NRO, we have web apps supporting import defer. And this is how it will initially provide performance benefits to the web. Besides the case where it is cached which does matter. Today, you have to use bundlers enough such that you’re not shipping way too many individual resources. That’s just sort of the baseline. You are currently not using ES modules except for a limited number of them, regardless of whether you use this proposal.

KG: Yeah. Okay. I guess I am not strictly opposed to putting features into the language if they benefit bundlers, I am a little bit weary of it.

DE: We will recover from this weird state once we have module declarations. Then we will have a kind of more direct usage of this from native ES modules, once they become a responsible thing to ship.

CDA: Sorry. We have less than 5 minutes and we have got some other items in the queue.

KG: I worry about shipping features that we expect to become useful in the future. Instead of just waiting for the point at which they become useful.

CDA: SYG, did you want to respond?

SYG: I will skip what was – what I originally put in the queue. For KG’s concern, I agree with, like you’re asking browsers to ship something that will not get direct use, that might get direct use contingent on a future thing which means we have to be predictive enough in the design that comes the time for native adoption that we made the right design today. I am not confident we can do that correctly in general. I think we have plenty of prior examples where we predicted incorrectly. I share the similar wariness that if this is mainly for bundlers, for the foreseeable future, I don’t really understand why the standardization. The best argument I can back form for why we have to standardize this, because it’s not semantics preserving. Because it reorders evaluation order, you need the programmer to signal intent to opt-in that I am okay with evaluation order being reordered. And that you would need some way to convey that in the language and that’s why you want to standardize. If the implementation and the experience which we get from browsers is completely divorced from reality because nobody is using it directly, that doesn’t make me feel good.

SYG: And as a segue into the next point, the big design question for me is still like I don’t understand why it’s okay for the top level for the presence of top level in a subgraph to basically silently completely custom the behavior order of the feature when you use import defer. Like, what is the benefit of silently eagerly evaluating instead of throwing?

NRO: It’s not completely disabling import defer. Just disabling for the minimum async graph. So you can import defer from the different parts and unless the module starts using await, most of the parts will be deferred. If we were to throw, it would just be completely incapable.

SYG: In my opinion, this is not making is work with top-level await. This is making it work – this is making it composed with top-level await in a surprising way that may be not non-local. Like you have to figure out in your dependency graph, where the top-level await showed up, for example. If somebody changed one of the dependencies top level down, now the evaluation order and the timing of your import defer were up stream like completely changes. That seems wild to me. That seems undesirable in every case I can imagine.

NRO: Are you suggesting we should throw instead?

SYG: Yeah. I am suggesting that it behave as deterministically as possible with local information at the import site. Like, because this is non-local, because await can happen somewhere in a module subgraph, to have that does something silently completely different, I think it’s very surprising, but if you make a throw, then at least the importer gets told that, like, a surprising thing would have happened and you should fix that. Like I don’t know if there’s another solution other than throwing

NRO: I’m worried about throwing because it doesn’t give an actionable way. If the dependency using the top-level await, your only option is to completely remove import defer… or go deep in the model graph to all the other branches to make sure everything else is still deferred.

SYG: Right. Isn’t that the point? If you want to defer evaluation and a big bunch of the subgraph becomes non-deferred because of something that was non-local and non-obvious to the importer don’t want to do a deeper dive] into the module graph? It’s not a best effort optimization. It’s a semantic changing thing. It’s not a semantics-preserving optimization.

NRO: There’s code that you might not control. You might have like multiple external dependencies that have dependencies, there is no way for you to go and change all the dependencies in the chain to that.

CDA: Okay. We are past time.

NRO: Okay.

CDA: There is a long queue of items.

ACE: Could we use the next slot – considering the next item is the second half of this proposal?

CDA Yeah. This is a – Nicolo, you have the next topic. So basically, you have all the time between now and –

NRO: The next topic is 30 minutes, right?

CDA: Yes. Correct.

NRO: Let’s give at most 15 minutes for this. I would present – could you please make sure that we don’t use more time than 15 minutes to continue with this discussion? Thank you

CD: Yes. DE took it off, but was it relevant to jump the queue? It’s fine if it is, if it’s relevant for ACE to talk about it now.

DE: Please. That would be good because I think Nicolo was giving theoretical arguments and Ashley has practical experience for why.

ACE: Thanks, DE.

So I can see where you’re coming from Shu and the natural reaction to the proposal. In practice the concern doesn’t hold at least from our experience of using this for over a year, one introducing top-level await to is already kind of – it’s a big change to things, it’s going to change the order of execution to the app. Even before this proposal, I would hope developers are somewhat conscious of the impact of adding top-level await. And in the future an extra thought of that is, that it cuts off this particular optimization and I think maybe some of the reaction is maybe the word defer, when someone is saying, import defer, that actually we are not deferring everything, the loading of the file, the parsing of the file or evaluation of top-level await. But we are doing our best effort to defer. It’s not just that we can leave the synchronous execution by remaining and by definition we can’t defer asynchronous discussion to a synchronous point. If people think that is import as optimally as you can it kind of makes sense. Why this is important for us at Bloomberg, really what we see is top-level await used quite low down in the network graph, in the module graph. It's like setting up low level things. It’s rare that people need top-level await. Module initialization, apart from interacting with foreign function interfaces to set something up that they want to provide synchronously later on, rather than make everything they export an async function because of the one in initialization. The amount of the module graph cuts off from the optimization to be very, very small. And also, it’s very low down, as NRO was saying. The person doing import defer at the top of the graph, they may not have a natural way of referring to that top-level await module. Like, it’s so far removed from them. And really, what they are saying is, I want this particular dependency, which is many, many levels away from the top-level await, please defer that and the fact that we then defer all the way down until we hit the low level thing and they not aware of and but we can initialize the low level thing because someone looks like they need – but only if someone looks like they need it is a big win. If that helps.

SYG: If I can respond real quickly to that. I think the – one argument I heard was that top-level await already changes ordering. My understanding is that this changes – import defer changes ordering in a more intrusive way, in you introduce top-level await, the ordering that changes is like in the import phase. Sorry. Phase is the wrong word. A different phase of the application. Import defer interleaves top level module evaluation with arbitrary other code evaluation. It defers it much longer. And that kind of interleaving and the thing that is interleaved, being dependent on non-local top-level await deep down in the module graph, like that’s the thing that worries me. TLA, yes, it changes ordering, but it’s localized to still the startup phase of the application.

Yeah. Let’s take the rest of the queue. That’s my only response to that.

NRO: Can we finish discussing it and go back to your point?

JRL: We’re still sticking on the same queue item?

NRO: Yes. I would go to JWK now.

JWK: Replying to SYG’s concerns about non-local information, you don’t want the deeper module in the graph will affect the execution ordering of the current module. So in the Webpack implementation we have an option called “require sync asserts”, which means if you want to use defer, you have to assert this module is synchronous. But to emit the synchronous linking error, you also need to traverse the whole graph to find the top-level await module. But by this way, if a module suddenly becomes async, you are not change the execution order, but have a fatal linking error to prevent foot guns. And I have another thing to comment. You don’t want to ship anything in the browser because it might be used in the future (not now), natively in the browser. If the browser is not doing that, and it’s not in the language, then the toolings will have its own conventions for this. For example, Webpack, we are doing magic comments which basically you have a comment, /*webpackDefer: true */. And this comment is inside the import statement (import * as mod /* webpackDefer: true*/) then it becomes a deferred module import. And imagine if this feature is widely adopted and people write webpackDefer, viteDefer, etc, I don’t think this will be good for the community.

SYG: There is value in standardizing this. That is a different value than having all the runtime implementations support it. It happens we cannot separate the two today, but that is not set in stone. I agree there is very well in standardizing this for the take for the tools

NRO: This is not only the tools, but web implementations.

SYG: Sure. There is value in standardizationing this. But there is – it’s like two coupled – we have a single lever today, which is we change the language. When we do that all implementations, including the browsers have to do the thing. But the value of the impact of the feature has to be different from space to space and we should probably decouple that in the future.

NRO: MAH?

MAH: Yeah. I mean, I want to to say, I wanted to get back to what with KG and SYG how this feature ends not being directly useful on the web only because the deployment model of the web is not to use directly modules but rely on bundlers that do basically the work, the sort of shim work of the engine in handling modules. So I think this means it’s useful in the language. It just happens it’s not the JS engine in the web platform – in the web environment that implements this, but the bundler that implements this for the web because that’s the deployment model for the web today.

SYG: Yes. I agree with that.

KG: Yeah. To be clear, when I say "not useful on the web", I don’t mean it doesn’t provide benefits to websites. I mean that implementing in browsers specifically doesn’t provide benefits to the web.

JWK: Can you only ship this to nodeJS without shipping them through the browser

SYG: I think that is a bigger thing. A future that is certainly possible. But it breaks with norms that the community, and TC39 itself has, like how compliant implementations, what that means. I think that deserves its own discussion, but it’s possible.

NRO: Yeah. Thanks. I think we should keep the discussion whether we want to like – to some other time. Can we go back to finishing the topic in the queue? I think John.

JDD: Yeah. I just wanted to raise awareness of like node’s TLA handling, they have experimental support for synchronous ESM and debug features around root causing TLA. So that is something to be aware of.

JDD: The other thing I wanted to mention was that top-level await is kind of a wart for those scenarios already. So this is kind of nothing new. When this concern came up, I wonder if calling this instead of defer is like maybe a hint, hey if this can’t be done, do this. The other thing to note was, I am big-tent JavaScript. I don’t like gate keeping for browser only functionality. I find that trying to cram browser-only functionality into like node creates conflicts and less optimal ways of doing things. So I like keeping an open mind and figure ways to adopt things that aren’t necessarily browner specific. This is an appendix or the fancy language or the wiggly language of implementation dependent things like before, I am up for. I recognize that bundlers are doing the work for browsers because it’s not feasible to ship ESM. For browsers to stand up to say we do this but rely on tooling to do this seems disingenuous and I don’t like it. I am open to the possibility of figuring this out.

KG: You raised the question of what to do about importing modules that don’t have any exports. I do not like throwing at import time in this case. Because there is a sort of obvious optimization that involves stripping out dead code. And stripping out the very last thing in a module shouldn’t suddenly cause importing that module to throw. Throwing at the time you try to access it, or just like never throwing, these are all better.

NRO: Okay. Thank you.

KG: Concretely, think about importing an empty module. That doesn’t throw, even if it’s deferred.

NRO: This is a change. But yes, it creates nice symmetry between everything.

JRL: Okay. It looks like the queue is cleared up.

We can move on to the next topic. I am not sure the split between this and your next topic also discussing deferred imports.

NRO: Yeah. Let’s go to my next presentation about the export part

### Speaker's Summary of Key Points

- The proposal was re-presented with the following differences from the previous update:
  - `import.defer(...)` dynamic import syntax
  - Evaluation happens on any string property access on the namespace
  - The Wasm-ESM integration doesn't use TLA anymore, making it compatible with the proposal
- There were some doubts about the value of this proposal in browsers, given that most people bundle their code and don't use the browser's native ESM implementation
- The committee doesn't agree yet on how we should handle top-level await in deferred imports

### Conclusion

The presenter didn't ask for stage advancement due to the feedback received during the discussion

## Treeshakeable/deferred re-exports status update

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-defer-import-eval/pull/30)
- [slides](https://docs.google.com/presentation/d/1iM5cRgdRXLWLq_GxgRvzYmUTXEK6gzH_8QNgLKMmv7o/)

JRL: In the timebox, you only have 12 minutes left.

NRO: I will just present – I will try to present in 10 minutes.

JRL: All right. Perfect.

NRO Okay. So yeah. This was the other proposal about exports that can be tree-shaken away built into the language. Why is this? There are many libraries like that exports many functions to a single entry point. And so that users don’t have to manually put every single internal file. Like the example, import all of the functions from a single import. And like this DX about. However, this is done like basically exporting everything from the entry point.

NRO: However, this has a problem. Maybe you want to import 2 or 3 functions from the library. And so it makes it very difficult to use the libraries without a bundler or some tool optimizing code.

To solve this problem, tree-shaking, where they remove all the unused branches from your module graph. This is in general not – there might be side effects. So they want to correct – Webpack expects libraries to be explicit marked on whether they can be tree-shaken or not. Or try to analyze the code to understand if there are side effects or not. Always treat the dependencies that are – that could have effects. The problem with this is the JavaScript is a very dynamic language. It’s very difficult to detect when there are side effects or not. So like either removing too much or removing too little.

NRO: There is another solution for this outside of the web in NodeJS because even if you are not doing this in environments, in importing a module graph, some common JS lines reports all of the functions through getters that only with the export value when needed. So in this example here on the screen, it would only require the module and the dependencies and ignores the others.

So we have solutions and tools, but can we use language that is usable when you are directly using this in the browser?

NRO: So what I proposed this time was to – I now think `optional` could be a good keyword, to mean only load this module if the binding export is being used. So I like the keyword optional. And I am using it, but it’s very much up for debate.

NRO: So in practice this means you have these two models on the left. And marking this and dependencies as optional. The import to add will be respected and will be like did if you are going to transpile them, import to add in the main file. And the other ignored because it’s not being imported in main.

NRO: So how does this interact with the other modifiers? Source phase imports. Well, you could just take the optional key word in front of your key word export statement. And does it mean only add the module and extracted source of the importer… so if foo binds is not I am ford for my module, don’t use the JS file. With deferred proposal, we can – namespace, with the can he word there, we are logging in the module if the foo binding is being imported by the importer and we are calling this by the deferred imports. However we integrate it in a way that preserves the benefits of having every single export, re export – that is only when accessing the one property. When I have later access to the two properties, I will execute the module that is value 2.

NRO: So this example shown basically has a long list of key word. Maybe we should consider reducing that. Both optional and defer are in general safe to use with pure modules with models like, and about in quotes, but modules that don’t have global effects. And both try to reduce startup time by skipping logging and execution. There is some difference. Loading execution. Maybe it’s not meaningful enough difference to have two different key words. We are deferring execution of the module. We are deferring the decision to have the module.

So in practice, it would look like this. Instead of having export optional and then a list of names from, we use export defer a list of names from and instead of having to mark defer on and optional on each single through re-exports, we mark as defer and about when it’s imparted in a namespace, it gives semantics. And the same for the namespace. There is only one problem that is maybe it’s weird when it comes to integrating export source from. Because if I will describe source and defer as different phases. But here we mix them to present loading rather than execution.

NRO: So where is this proposal? Originally, presented as part of the import defer proposal. As I said before, I wasn’t sure it should be the same proposal. It’s currently living in pull request, two different requests: one using two different key words. One using one key word.

But the question here was, do we think this should be a different proposal or not?

You can ignore the middle line. But yeah. If we think we should go with two different key words and keep them separate, if we think it’s better to just introduce a single concept in the language that it actually has – then they can stay in the same proposal. Anything else about whether these two proposals are actually the same or not?

JRL: There’s no one on the queue.

NRO: Okay. Yeah. I would love to get some feedback about what you think about the optional key word or whether it should be defer. We’ve heard from developers that optional might not be the best key word because it seems to say try loading this module, but it’s optional, so don’t worry if it fails. If you have any idea about keyword, please, reach out to me. I see a comment in the queue.

JDD: It’s non-verbal. I find proposals work best when they are small. And easily to accept in. And when they get complicated, it – they fall apart.

NRO: Do you have an opinion about using key order or not?

JDD: I will need to dig in more on that.

NRO: Okay. Well, thanks, everybody. I see Mark in the queue.

MM: Yeah. I just – I prefer the `defer` keyword just because it – by using the same key word, it sort of puts in the same psychological space. It seems like there’s one set of related concepts to learn as opposed to just yet another concept to learn.

NRO: Okay. Thank you. Okay. Yeah. Thanks, everybody.

JRL: Yeah. Actually, you’re early. We have 7 minutes until lunch. I guess we can either come back 7 minutes early or extend lunch by an extra 7 minutes.

NRO: Let’s finish the discussion of whether the language – we should have different conditions for browser and tools or I feel that’s a longer discussion.

SYG: I would strongly recommend not do that in these 7 minutes.

NRO: Okay.

DE: I do think it’s urgent we get back to this because this is sort of a kind of new category of objections that apparently blocked Stage 2.7 for the proposal. I hope next meeting we can get to that topic.

JRL: I think GB now put a queue item that’s explicitly talking about this. I don’t think we can address all this within 7 minutes. And I don’t think we have time at this meeting to give an overflow.

GB Wait this. This is about determinism.

JRL: Is that the same – go ahead.

GB: Yeah. This is not the same as the correspondence between bundlers and the web and the point SYG brought up. So maybe we can just – I can mention briefly on that topic as I was going on earlier. SYG’s argument sounds like he was saying between the existing TLA ordering and the import defer ordering, that there’s this kind of longer deferral happening that’s occurring along with the TLA ordering. And was concerned about introducing this new kind of earlier phase. I think like defer is definitely interesting from an evaluation point of view because it does introduce, you know, a new evaluation phase.

GB: And it’s sort of – the fact that it’s able to be, you know, triggered within the evaluation of another module. The way that TLA is designed, though, as soon as you add a TLA dependency, your top level execution will complete, but the TLA execution will continue. Other executions can happen in the meantime. So I guess the argument I am trying to make is that TLA already has multiple orderings because of the fact that you can race it while the TLA is completing.

GB: So there’s this kind of sense that when something is part of the TLA graph it can’t always be erased that the TLA will be raised separately to the well defined singular graph that you can analyze and what executes to the post-ordering. That non-determinism is a TLA property and it already exists for TLA graphs. And it’s only the TLA graph that is going to be finished eagerly. That’s going to be integrated into that earlier phase for the defer. The synchronous, the parent synchronous subgraph remains the determinism. The non-determinism is a condition constrained to the TLA leads. I don’t feel that’s an extension of any non-determinism outside of any determinism that already existed in TLA. Just to try and answer SYG’s technical question on that, I know people want to get to lunch, so we don’t need to keep digging into that one

SYG: I want to understand the TLA determinism thing. The point; today TLA is already non-deterministic in that top levels of modules with TLA can race with top levels of other modules with TLA. Is that correct?

GB: Right. Because while that TLA is completing something else, another top level execution operation could begin and beat certain earlier dependencies in that graph. So TLA ordering is not fully deterministic.

SYG: Right. So the point I was trying to make about the different phases was that today, the set of things that are racing with each other is constrained to module top levels. With import defer now you are interleaving module top levels with other user code that is possibly not in module top level, like event handler or something. And the fact that TLA changes what code interleaves with the user code because some parts of the graph become non-deferrable. That’s the nature of my discomfort.

GB: So just to understand, if you are referring to the interleaving when there’s a top level deferred access? Or –

SYG: The point of the deferral is that you don’t evaluate the module top level until you touch the namespace object in some way. And where you touch this namespace object could now be anywhere. Right? You can pass that namespace object around your normal code and the point when you need it, it will evaluate the module top level just in time.

JRL: Sorry. We have now hit the timebox for lunch. I am officially starting lunch now. SYG, if you want to continue discussing…

SYG: Maybe this is just between you and me. Do you want to stay 5 minutes to hash this out?

GB: I don’t want to keep anyone from lunch. Maybe we can continue the discussion off-line or – yeah. I don’t feel it’s a reason to stay over…

SYG: I am not asking anyone else to stay. I am asking you to stay. If you can’t stay, that’s also fine.

GB: Okay. I should probably drop myself.

NRO: Sorry. I don’t want to interrupt you. I think it’s good to – if you are going to talk about this, other people can follow. I am sure we will bring up this proposal again at a future meeting.

JRL: Either GitHub issue or in the matrix chat sound appropriate for this? I don’t think we have overflow time to continue discussion.

JRL: So that officially lunch will end on the hour. So you have 59 minutes.

### Speaker's Summary of Key Points

- `export optional { … } from "x"` or `export defer { … } from "x"` introduces support for built-in tree-shaking, by avoid loading re-exports that are not used.
- This could be either the same "feature" as `import defer`, or orthogonal. The chosen direction affects integration with the other modules proposals
- There has been a slight preference for reusing the same keyword rather than introducing a new one

### Conclusion

- export defer is no longer part of the import defer proposal, and will be a separate Stage 2 proposal.List

## Iterator.range for stage 2.7

Presenter: Jack Works (JWK)

- [proposal](https://github.com/tc39/proposal-iterator.range)
- no slides were presented

JWK: Hello, everyone. I’m bring back iterator.range for Stage 2.7, I hope. Let me do a quick recap of what this proposal does. This proposal adds a range function to the language, which can generate numbers. That’s very simple, and it has an API shape like this. It adds a range method on the `Iterator` global. It has a start and an end option and returns an iterator. Then the option -- in option, we have step or inclusive, and inclusive is if the end number should be omitted, and this is a very simple proposal, although it went through a tough discussion about the semantics of iterator or iterable. And the final solution to rename this proposal to `Iterator.range`. And I want to bring this proposal to Stage 2.7 because this proposal has been no activity for one year, and the iterator helper proposal is shipping in Chrome, and I think it might get to Stage 3 or 4 recently, so I hope this proposal can advance to have implementer feedbacks.

JHD: Yeah, I just want to confirm that I’m understanding things right. So this creates a one-use iterator, that then you can use all the helpers on, and it can take numbers or BigInts but not a mix of the two, and it will similarly produce only one, but not a mix of the two, and that’s it, right? Pretty straightforward?

JWK: Yeah.

JHD: Awesome. Thank you.

MM: Hi. Last time I paid attention to this proposal, the big controversy that I certainly have opinions on was about fractions. Some people wanted to be able to, you know, have fractions and increment by fractions, and others, including myself, object that the roundoff issues in allowing fractions are just unsolvable and necessarily will confuse people, and that all the functionality desired from fractions can be gotten by doing a divide of the iteration variable. So in look at the slides, I couldn’t quite tell, where does this -- where does the proposal currently land on fractions?

JWK: It’s using algorithm like this to prevent the floating point number problem.

MM: I’m sorry, how does that prevent the floating point number problem?

JWK: If you add a floating point number, it might accumulate the inaccuracy, but if you use multiplication, then --

MM: I see.

JWK: You can control the inaccuracy in a very small range (when using multiplication).

MM: I see. I see. That certainly is less bad than what I was worried about. I’m not -- I’m not at all convinced this is harmless.

KG: MM, you do still have that problem that if you do, like -- if you have -- if you start at zero and your step size is `0.3`, then you end up with four steps, because in floating point three times `0.3` is less than `0.9`.

MM: Yeah.

KG: So, like, the issue with floating point is still possible.

MM: Okay. So I -- I really don’t like putting users in situations where they can be confused by the difference between, you know, floating point and real numbers unnecessarily in cases like that. And everything that they would want from that they can achieve by doing division of an integral iteration variable.

JWK: So do you mean we should disallowing floating point numbers, and only allowing integers?

MM: No. No. I think we should disallow fractions. I think that numbers already support is safe integer, as well as is integer, but I think for this case, we want safe integers. And I think as long as the operands are safe integers, we should accept them as numbers.

JWK: Sorry, can you repeat again

MM: Yeah, so big nums of course have no problem at all, but I think that -- I think that we should allow numbers which have non-problematic integral value, and those numbers are exactly what we’ve already support with the test `IsSafeInteger`. So I think that the operands -- if the operands to `Iterator.range` are safe integers, then I think that they’re fine. There’s no need to prohibit numbers altogether.

JWK: What if they are not safe integers?

MM: I think it should throw.

JWK: Okay. I understand, but can you open an issue, so maybe if we need to talk offline.

MM: Okay. I can open an issue.

JWK: Thank you.

KG: Yeah. Actually I have two responses. So the first is to the question of non-integral arguments. And I agree, Mark, that theoretically this seems like it would be confusing. But we have these -- like, this function exists across, like, probably more than a dozen language, including some very commonly used languages. And just empirically, it doesn’t end up being any more confusing than, like, of course people get confused by the fact that .1..2 is not .3, but the issues around the floating point math here are not, like, actually a problem in practice. Like, we just know this. It’s perfectly reasonable to say here to ethically this seems like it would be confusing, but, like, we have literally decades of experience with this in other languages, and it’s fine. Like, it’s fine. We know this. So I would really prefer it to just do the simple thing and, like, yes, sometimes people are going to be confused, but that’s inevitable when you’re doing floating point numbers, and there’s an explanation that’s not any more confusing than any other place you’re using floating point numbers, like, we should just let you write the thing that you can write in every other language.

The second thing is I really don’t want to rule out `Infinity` as a valid upper bound, and if you constrain the range to safe integers, then that’s a problem.

MM: I agree with that. I agree that infinity should be allowed, and I agree that that’s irregular when starting with safe integers, and I agree that `Infinity` should be allowed.

JWK: If infinity is not allowed, then developers might have to write a randomly big number just to --

KG: Mark said it should be allowed. So I think we all agree it should be allowed.

WH: I agree with KG for the same reasons that KG listed. I would be strongly opposed to disallowing fractions.

SYG: Could you please remind me of the motivation for BigInt ranges.

JWK: It’s for the completeness, because it might be weird that a kind of number can do this, but the other cannot. If the decimal proposal may have primitive form, it will also have support. Developer might be upset if they want to use BigInt, but this function only provides for floating point numbers.

SYG: I would like to hear more concrete use case that BigInts are used for counting. I’m not opposed to the idea. I just generally find completeness is a fairly weak argument. I can readily believe the use case if I just see one, basically.

JWK: Okay. So, actually, I don’t have really strong motivation for BigInt other than completeness, if that’s a strong requirement, I can remove it.

SYG: I think my preference here is that if we are going with -- I apologize for not having reviewed the spec ahead of time – if this new API is following the stop coercing things default guideline and we don’t coerce BigInts -- well, I guess in any case, we shouldn’t try to coerce if you pass a BigInt into numbers -- if we start without BigInts, then it is a backwards compatible that would include BigInts in the future if it starts with throwing BigInts.

JWK: Yes, it does not coerce things.

SYG: Excellent. If anyone demonstrates a need for BigInt ranges, I’m happy to back them.

WH: I have a preference for including BigInts. The API keeps Numbers and BigInts separate, which is good, and I think it would be a mistake to omit BigInts.

WH: The other issue I have is that there are some bugs in the algorithms as written due to type confusion. It confuses mathematical spec numbers with BigInts and floating-point Numbers. It does an “is” test on floating-point numbers to check if something is mathematically zero, which will do the wrong thing. So the intent is good, but the wording could use some cleanup.

JWK: I may need some help about this, because I’m not very clear about the numbers stuff. Yeah.

WH: Sure, I can help you with that.

JWK: Thank you.

MM: So I see you put issue https://github.com/tc39/proposal-iterator.range/issues/64 on the screen. So, yeah, I want to add an issue when I saw one. I was part of this discussion and I think this is covering the right ground and it is still open. And I’ll just answer Shu, I strongly prefer that this thing does support BigInts. I think it’s -- you know, I would be willing to give up numbers before I would be willing to give up BigInters, because for BigInt, this is all very well defined.

SYG: But the bar I’m looking for is not that it is well defined, but that it is useful. I’ll looking for some kind of indication that it is useful on BigInts, and one example was possibly give on the me on the Matrix.

MM: We use BigInts in our code, a lot of places where before BigInts were used, we might have just used integral numbers. But we do use a lot of BigInts. Once you’re doing a lot of stuff with BigInts, it’s very natural to want to be able to mix in ranges of BigInts. That’s a very abstract argument, but I think it’s true.

JWK: Yeah, I can be satisfied with that.

MAH: More specifically, we use BigInts also for indexing, which means sometimes you need to be able to iterate, and range is a good iteration.

JWK: You mean indexing arrays?

MAH: No, indexing other serialized data. So we also serialize BigInts manually. In general, we use BigInts as a way of incrementing a number that will not overflow. And as such, we need to be able to iterate over those entries.

JRL: Okay, we have another reply to Waldemar, plus one to Waldemar worrying about zeroes. I think that’s the different topic, though, the previous topic.

WH: Yeah, the specific issue I identified is that this spec contains conditionals like “if *x* is zero” or “if *x* is *y*” on floating-point numbers, and if *x* happens to be +0 and *y* happens to be -0, what does that mean? Technically it will be false, but you want it to be true. So I’ll help with the details for that.

JRL: Okay. So moving on, then, we have PFC.

PFC: Hi. I want to support this proposal going forward, because I think it completes a gap in the language that I find myself reaching for, with reasonable frequency. And I prefer that something goes forward, even if it’s just number integers or safe integers. If there’s skepticism about fractions or BigInts, I’d really prefer that we at least move the core of the proposal forward during this meeting, which is number integers.

JWK: Thank you. So looks like we are empty on the queue. And I wonder if anyone has strong concern -- if anyone has strong concern with any runtime semantics with this proposal, please raise an issue on GitHub or maybe now, and I hope there is none, so can we -- I want to ask for Stage 2.7, and I hope I can get some implementation feedback.

KG: It sounds like MM was still concerned about the issue of non-integral floats.

MM: I am, yes. I understand the form of evidence that you’re presenting, but that kind of experience-based evidence, I’d like to understand better what the underlying phenomena is to -- in order to know how to interpret that evidence. I’m not directly familiar with that evidence. I don’t have that experience.

KG: Sure, I mean, the evidence is just, like, the range operator exists in many languages, as far as I can tell. In all of them that are generic that, like -- in all of them that have a floating point type that accepts floats and does basically exactly the thing that it does here.

MM: That’s -- so I accept that it’s widespread and that we don’t see a lot of complaints about it. But I don’t -- I think that’s very weak evidence that people -- that it’s not a foot gun, that people aren’t stumbling into the trap and occasionally their programs go wrong unnecessarily and we could have saved them that pain. I don’t think the evidence speaks the that question one way or the other. Or it provides weak -- sorry, it provides weak evidence that it’s not a problem, but it doesn’t provide strong evidence.

KG: I agree that it does not provide strong evidence. I don’t feel like this is a place where we ought to be trying to save programmers from themselves. Like, normally I am in favor of that, but, like, this is just so clearly how it works that while it is certainly true that you can trip and fall over it, that’s true for floating point everywhere. And, like, yes, sometimes when you are using floating point numbers, you will have something happen that you didn’t expect to happen. But, like, I think that is just -- like, that cost is sunk, that cost is built in. We have committed to floating point numbers in our programs, and so if you trip over it, like, that’s kind of sad, but it’s fine.

JRL: I quick point of order. Jack, you are still sharing your screen.

JWK: Thank you. I know that.

JRL: Okay. All right.

KG: I’ll stop rambling, sorry.

MM: My bottom line is I’m not willing to go the 2.7 verbally right now in this meeting without more discussion about this question.

WH: In response to MM’s point, if we are going to ban fractions, I’d like to see some evidence that that would be okay. So far I haven’t seen any. So I’m worried about the fallout from trying to ban fractions and unsafe integers.

MM: Okay. I accept that the evidence on all sides of this is weak and that --

WH: I wouldn’t say it’s weak. I think that the evidence on the side of fractions being fine is quite strong given the evidence that has been presented so far with experience in other languages.

MM: I would like to understand better how to interpret that evidence. Right now I take that to be weak evidence, that it’s not actually a problem.

SYG: Also, NRO points out that I was mistaken, that in fact Python does distinguish between integers and non-integers in a way which is relevant, and their range does not take non-integral numbers. I apologize for making too strong a claim.

MM: In that case, that’s evidence for answering WH's question, that it’s some evidence that it’s okay to ban non-integral numbers.

KG: Okay.

CDA: Just be mindful we have less than four minutes left. There’s like five items in the queue.

KG: For what it’s worth, having just checked, Python also bans integral floats, which a distinction that they make. You know, you can’t have a range from 0 to, you know, 2.0. You have to leave off the point zero.

SYG: I am just for clarity, I am happy with BigInts. I was provided a use case by BSH in the Matrix, and I withdraw my weak concern about BigInts.

CDA: JHD is in the queue,+1 for number with BigInts. DLM supports Stage 2.7.

DE: Yeah, I’m little concerned about how we’re going to conclude on the back and forth here. We understand what the design space is. It’s laid out in front of us. Can we commit to next meeting drawing to a conclusion, if we’re not doing 2.7 this meeting? Because, you know, this just between MM and WH. You’re the only two people who expressed really strong opinions. You two have worked together for many years. Can you work this out?

MM: I don’t know -- I mean, I’m fine coming to the next meeting with a conclusion of our discussion. The conclusion might be that WH and I just are in a -- conclude that we disagree, in which case we’re stuck. But that is a conclusion.

DE: Yeah, I’m not sure if we should just accept we’re stuck and JavaScript programmers can't use this feature. And I hope you can talk this out and come back with this and figure out recommended next steps.

WH: I disagree with the characterization that this is just between me and MM and the two of us are the only ones with an opinion on this subject. I think that’s unfair.

DE: Okay, great. So maybe all the people who have opinions can get together and try to find a proposal by next meeting.

CDA: Okay. MAH?

MAH: Yeah, I mean, I was just wondering if there was a way to express the step in another way that so that the algorithm itself would be able to avoid the rounding that may be a problem. So, for example, if you want to increase -- like, you would be able to express like you want to increase by one-third, and say, like, multiply by one and divide by three.

JWK: I think that might be overcomplicated. I never seen a programming language has that kind of API.

MAH: : Yeah, just suggesting ways of potentially solving this dilemma here.

JWK: Okay. Can we have Stage 2.7?

MM: No, I’m sorry, we can’t.

JWK: Oh, okay.

WH: I support Stage 2.7.

JWK: So we can resolve MM's concern and we can bring back this next meeting. Thank you, everyone.

MM: I should also make clear that this is my only concern. Aside from this issue, I’m completely happy with this proposal going forward.

JWK: Okay, thank you.

KG: And we haven’t heard any other issues expressed except SYG's concern about BigInts, which has been resolved, and some editorial issues with the spec, which can be resolved by next meeting. So I just want to make sure that everyone is on board with every aspect of this proposal as currently written except for the question of whether or not to accept non-integral number arguments and potentially a question of what to do with numbers past the range of max safe integer, since we didn’t talk about that very much. And no other concerns, such that if everyone -- if we come to a conclusion on the issue and next meeting everyone is going to be like, yes, we support this as is, right?

MM: Yes.

KG: I want to give everyone a chance to object to that.

CDA: We will consider KG's analysis there to be agreed upon, unless anybody speaks up in the next, I don’t know, 10 seconds.

DE: I want to suggest that the people who have thoughts here and are willing to engage between this meeting and next meeting, identify themselves so that people can, you know, get together and discuss it.

MM: Is there any reason not to have the primary discussion just be on issue 64?

DE: Yeah, if everyone who has opinions can commit to, like, engaging on issue 64, which, you know, presumably you could have come to a conclusion there before the meeting, but now is still a good time, you know, that sounds like a good way to do it.

MM: Okay, good.

JWK: Thank you, everyone.

### Speaker's Summary of Key Points

- No changes for 1 year, ready for the next stage since Iterator helpers has been shipped in Chrome.

### Conclusion

- Wait for the discussion about floating point numbers, and come back next time

## `Math.sumExact` for stage 2.7

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-math-sum)
- [slides](https://docs.google.com/presentation/d/1QallvKcuIL2UHALEYnP4AdT8nX_iZ6QHDgpVISUXHMg)

KG: I’d like to present `Math.sumExact` for Stage 2.7. The repository is up there if you need the link. And just reminder of what this is, my fundamental thesis is that there should be a built-in mechanism for summing a list of values, and if we are doing this, it should be more precise than just naive summation, which hopefully as we are all aware has a problem of accumulating floating point errors and being non-commutative and various other issues. It is in fact practical to be maximally precise, which is to say to specify that the answer is what you would get if you took the floating point numbers, converted them to real numbers, did the arithmetic on real numbers and converted the result to double-precision floats. And so we can be as precise as it is possible to be. The API that I am proposing takes as its only argument an iterable of numbers. And it’s spelled `Math.sumExact`. Each of these slides we will go over in more detail, so I’m not going to get into questions around that right now. So I think the most interesting and kind of scariest aspect of this is the question of specifying full precision. And this turns out to be a surprisingly active, I suppose not surprisingly, but an active area of research. When this was discussed either one or two meetings ago, WH pointed out that full precision updation was practical, and since then I implemented it in JavaScript, and proved to my own satisfaction that it is indeed practical. And Python uses the algorithm that WH linked at the time. That algorithm is from Shewchuk 96. And there’s been newer and shinier things since then. I have a link to one here called xsum by its author, building on work called Algorithm 908 if you want to look either of those up. The claim, which I haven’t verified it myself, but the claim is that for reasonably sized lists, which is to say, like, at least ten or 100 elements is where the comparison starts being meaningful, it’s on the order of two to four times slower than naive summation at the cost of about 500 bytes of memory. For very large lists you can get even closer to naive summation you but need 32K of memory and I’m not assuming people are going to be optimizing for that case. For straightforward case where you use the small accumulator and use 500 bytes of memory and get perhaps four times slower than naive summation, given the overhead of working in JavaScript in the first place and working with numbers and so on, that seems to me to be an acceptable overhead, and the library I linked is open source and I’m not going to name the license off the top of my head because I don’t remember it, but it is open source and I suspect it could be used directly instead of re-implementing if you don't want to bother reimplementing. So, yeah, the thesis here is just that full precision is not only practical, but also not that slow.

KG: So more questions about the design space. You kind of have to take an iterable. We talked about this a while ago. Taking a var-args to match, for example, Math.max just doesn’t work because if you have a large array, it’s going to blow the stack. The precise size at which you get a range error varies across engines and that’s super annoying. You just can’t do var-args. So precedent from `Math.max` is insufficiently compelling, I think, and I think "sumExact" is a sufficiently different name so it is hopefully not that surprising.

KG: Also it does not do any coercion. Not going to go into this. If any of the inputs are not numbers, then it’s a TypeError. Also, I did say numbers, this doesn’t take BigInts.

KG: The question of naming, `sumExact` might confuse people in that they might expect this to be like decimal arithmetic, but it’s not. I don’t think there’s anything to be done about that. We need some name that conveys this is higher precision and therefore slower. I think `sumExact` is a fine name, except possibly you might like to suggest more clearly that it takes an iterable, and so `sumExactFrom`, for example, `From` is a suffix that we often use on methods to indicate that they are iterable-taking. We could spell this `sumExactFrom` if we wanted to. I leave that to the committee. Currently it’s specified as `sumExact` and will default to that unless people would like to change it.

KG: Then there’s this question of what do you do with an empty list. I think that minus zero is the right answer. We talked about this at our last meeting. Some people said plus zero would be nice just so that you don’t have to think about minus zero as much, and I thought about this and I still think that’s wrong. It’s not fatal either way in my opinion. But minus zero really is the floating point addition identity. And it’s so rare that this causes problems. People might be a little surprised, but then they can learn an interesting fact about floating point numbers, and their programs won’t be buggy because minus zero and zero are almost indistinguishable. So I think minus zero is the right answer here.

KG: Last open question is do you stop when you encounter a `NaN` or drain the rest of the iterator? My inclination is to drain the rest of the iterator just for consistency. It also preserves the property that this thing has the same behavior regardless of the order of your inputs, which is a really nice property. I don’t want, like, `NaN` and then a string to give you a different result than a string and then `NaN`. It’s really nice to be commutative. My inclination to drain the entire iterator and at first you have a `NaN` and then a billion other things, you have to consume all billion of those things. I don’t think it’s worth optimizing for that case, especially at the cost of giving up commutativity. If you disagree, get on the queue.

KG: And then this slide is just to mention I’m not going to write down one of the various full precision algorithms. It’s not practical and this is an editorial question. We’re going to specify it doing the arithmetic in real space, and that’s what I have done here. And this is the full spec text. It’s relatively straightforward. The bulk of it is handling what do if you get negative infinity or positive or `NaN` or zero and minus zero, and then it says do did the arithmetic in real space and points you to do a couple algorithms that allow you to do that without doing real number arithmetic. Okay, I expect there’s a queue, but after that, I am hoping to ask for Stage 2.7.

MM: Yeah. Two issues. One of which I put in the title. The term exact actually does bother me in that it promises more than it is possible for it to deliver. And I’m always concerned about, you know, nasty surprises on the more naive programmers. What about `sumPrecise`? Do you have a reaction to that?

KG: Sounds fine.

MM: Okay. I would certainly prefer it. I think it’s more clear about what -- about what it’s actually providing. The other thing is when you say specified in terms of doing real arithmetic and then converting the result back to float, is it -- does the algorithm in question actually determine -- actually deliver, you know, the closest floating point number to the correct real number? That seems impossible.

KG: No, it’s totally possible. I mean, there’s a bunch of ways you can do it, and it just does it.

MM: Really? Okay.

KG: It's not that hard. Like, just by way of illustration, a way that you could do this - in fact, I have implemented this - is to take your numbers and convert them to, like, 2,000 bit integers, just the full range of doubles -

MM: Yeah, yeah. No, I understand that. But given that you’re using a double precision floating point ALU to do the -- in the algorithm, which I’m sure you do, I’m just surprised this is possible. If you assert that it’s possible, and, you know, I believe it, and if so, that’s great. That addresses something that would have been a big concern.

KG: Yes, it’s possible. The trick is generally that you keep a bunch of different floats around to handle different parts of the precision and you do the arithmetic carefully in a way that allows you to handle not just the addition, but the error term in the addition.

MM: Well, I’m very impressed.

WH: Yes, to MM's point, I actually worked out the algorithms of how to do this.

WH: There are two aspects to doing this. One is that you can represent exact mathematical numbers as sums of multiple doubles and preserve the invariant throughout the algorithm that your exact mathematical real number is equal to the sum of one or more doubles. And that works fine. The other fun aspect we worked out is how to deal with intermediate overflows past the double range, and there are very good solutions to that too. So neither of these is an issue. The whole thing is efficient! I’ve reviewed this extensively. I certainly support this for Stage 2.7.

CDA: JDD?

JDD: Just matching the other people that are replying.

CDA: Non-speaking, I’m sorry.+1 for 2.7. Plus 1, precise

MF: Yeah, support 2.7. I slightly prefer including "from" in the name because there are a lot of APIs that use "from" which all take iterators or iterables, and I think it would be slightly helpful here because we had -- this may be just a problem that affects us because we've waffled about it -- but because we've had this discussion about whether to take var args or an iterable, this helps you remember what it does. I know not everything that takes an iterable is named "from", but I think everything named "from" takes an iterable. So that implication would be there. So I slightly prefer that.

KG: I would like to hear if anyone else has a opinions on the question of "from", because I slightly prefer to omit it now that we talked about it, but I’m fine just going with Michael’s choice of naming if everyone else is neutral.

MG: I’m like you. I would like to hear other people support it too. I don’t want to be the only one that supports from here.

CDA: NRO, we cannot hear you. I see you are unmuted, but we cannot hear you. We can still cannot hear you, but prefer without from. We’ll come back to you if you get your audio working. DRR?

DRR: I guess I think that the "from" suffix is typically more useful when there’s so much more ambiguity. I get that there is some ambiguity that you can take two args, or var args, or whatever. I think here if you just kind of say this is what the API looks like, you may find it just redundant to have the from suffix. So we can use it in other places, but, you know, I I have a very slight preference for not using it here. It’s not a very strong one.

CDA: EAO says prefer no from.

WH: I have a very weak preference for omitting "from".

CDA: All right. Ron? Ron, we cannot hear you. I will keep going in the queue, but we cannot hear you, Ron, so I’ll go to the next. Please rejoin the queue.

CDA: JHD says omit from the others or producing a new type. This isn’t. NRO is back. NRO, I cannot hear you.

KG: Given that we only have a few minutes left in the time box, I’m just going to take – the conclusion is we don’t do "From", and get the rest of the queue.

JDA: What do we have, we have 15 minutes left in the time box.

KG: Oh, for some reason I thought this ended at the top of the hour. In any case --

CDA: We didn’t start on time.

KG: I think we can conclude on "from". I’d like to get from the rest of the queue.

CDA: JDD, plus one for omitting from. Daniel Minor -- Dan Minor.

DLM: Sure. I just wanted to say the SpiderMonkey team continues to be in favor of this proposal, and although I never thought I’d participate in a naming discussion, I do prefer `sumPrecise` to `sumExact`. Thank you.

MF: This one I have a slightly stronger preference than the preference I had for "from". Still support 2.7. But I prefer the early exit for NaNs. I know that there’s this inconsistency with whether something would throw or not when we’ve reached a NaN either before it or after it. And I don’t really care about that. I would -- you know, once we see our first NaN, we can know that the operation will only ever throw or produce NaN, so if I have a very long iterable that yields a lot of values and the first value it yields is NaN, I’d rather just not do that additional work just to see if it can throw. Especially if I know things never would throw. So, yeah, I have a stronger preference about early exiting on NaN here.

KG: I’d also like to solicit opinions from the committee on that question.

WH: Just a clarifying question: Does your early exit preference include the case where there is no NaN in the input, but the input contains somewhere a positive infinity and somewhere else a negative infinity?

MF: How do you know there’s no NaN?

WH: Okay, the situation is this: You’re scanning down the iterable. You’ve already seen a positive infinity, now you see a negative infinity. Do you do the early exit right away or do you continue?

MF: When you see a positive infinity, you see a negative infinity, remind me the sum up to that point.

WH: At that point the sum is going to be NaN, regardless of what else you see.

MF: Okay, we’ve phrased this -- KG has not phrased this the way I phrased it in the issue. The way I phrase it in the issue, when we have reached the NaN state, the sum up that point becomes NaN. We cannot leave the NaN state again. I say any time we enter that NaN state we just exit.

WH: Okay, I understand your position. What I suggest is we do a poll to see how people feel about this.

KG: I’d be okay with that.

??: Yeah, although I would like to hear, I think SYG at least has something to say.

SYG: Yeah, I found the commutativity thing compelling, because this is going -- this is an API you opt into for precision explicitly over speed. So the -- so the -- yeah, okay, so now that I’m thinking through this, KG, can you motivate the commutativity argument a bit more with a practical example where lack of commutativity -- lack of observable commutativity would bite you somehow, make the code more complicated somehow?

KG: Yeah, so the -- the reason commutativity is nice in general is it allows you to split up the work and then not worry about how you’re splitting it up. You can imagine you’re adding items to a queue and summing the result at the end, and if the items are produced by workers that are async, the results come in async, and being communicative in general is a useful property because it means you don't have to care about the order that the results came in. Now if all of your workers are producing numbers, including NaN, then this issue isn't an issue. But if one of your workers messes up somehow and produces a non-integer [sic] value, and a separate worker produces NaN, let's say, then at the end, when you sum up the results, you will get either an error or NaN, depending on the exact order in which the workers added their items to the queue. And that seems undesirable to me, especially because in all other cases, it doesn't matter. You get precisely the same answer.

WH: KG, you said there’s an issue when somebody “produces a non-integer value”. I think you meant “non-number value”?

KG: I did. I did mean “non-number”. Sorry.

KM: Yeah, I think it’s possible that even if, you know, you don’t exit early for NaNs, that probably wouldn’t – there’s optimization to write in the engines in the common case that wouldn't affect the performance. Like in at least JavaScriptCore, I believe, all of the engines, there’s like a special array backing mode for floating point numbers. And most likely, if you are calling the function you are passing an array of floating point numbers. You hit NaN you could exit early because there’s no like TypeError type things to hit. So I think it would be fine from my perspective, to do either semantic choice. And it wouldn’t make a difference to most people’s performance.

KG: That’s a very good point. This is an optimization only for if you are not doing a double backed array.

CDA: PFC?

KG: Sorry. It looks like PFC's question is on naming and I want to try to settle this question of handling of NaN. Could we get a quick temperature check? I would like to open the – the question should be, do you favor early exit for a NaN? If you are supporting this, then you are giving up commutativity in the –

CDA: I am going to restart this. There were prepopulated information in the temperature check for some reason. Okay.

KG: Question is, do you favor an early exit for NaN?

KG: And we will give people just a minute or so to vote.

SYG: Can I say a thing that is material to this while people vote

KG: Yes

SYG: There’s `Math.hypot`, it takes var args, but the behavior is that coerces all the args first, and then does an early exit on `Infinity`s and `NaN`s inside the computation loop. That drain the – more matching drain the iterator, even if in the iterator there is NaN or infinity.

KG: Okay. It looks like people are done voting. EAO doesn’t see the poll, prefer no early error. EAO, can you speak in sorry. I don’t know which early error you mean.

EAO: I meant not erroring and draining the queue.

KG: NaN isn’t an error. It’s just stopping. It’s an early exit, not an early error.

EAO: Sorry. That’s what I meant. Yes.

KG: Okay. Okay. All right. Well, it looks like people are no longer voting and 8 people unconvinced of the change, five in favor. As champions, since I need to make a decision, I am going to stick with the current semantics of draining the entire iterator so we can be done with it. MF, unless you really object or anyone else really objects to going forward with this proposal, with the draining iterator behavior, I will consider this question closed and move on.

MF: No. I do not object to it.

KG: great. And then PFC was next in the queue

CDA: A couple minutes left

PFC: My assumption is that most developers don’t care about floating point numbers arithmetic and don’t understand it very well. And I don’t think that’s something that when it comes to the naming we can necessarily just sort of shrug and say, ‘what can you do?’ Because if the name is `sumExact`, then I am pretty sure that people will say, ‘well if it’s exact, why didn’t they solve the 0.1 + 0.2 = 0.3 problem?’ I like MM's suggestion of `sumPrecise` better than `sumExact`. I can’t exactly explain why that feels different to me. But I would like to suggest that you consider other names that don’t imply to developers who don’t care about floating point, that this is somehow not floating point. Maybe `fsum`, like Python, I don’t have a good suggestion. But I think `sumExact` is going to cause confusion.

KG: Yeah. So SYG actually suggested `sumSlow`. I spent a while thinking about the names. And the conclusion that I came to is that I really want the same to suggest not just performance, but something about the behavior. If we are not doing math.sum, and there's good arguments not to, I want a name that suggests that this isn’t just summation. And tells you something about how it sums. "fsum" is just like, this is a sum but different somehow. I want it to be informative, and if it is about the precision, we run into this problem. We are going to necessarily be conveying that this is more precise than summation. And yeah, so I won’t see a way to avoid this problem. Or at least with a name I considered acceptable. sumPrecise is totally fine by me.

PFC: It’s a fundamental mismatch of viewpoints and context. The way we’re considering it in this room is ‘more precise than naive summation’ and the way I think most developers in the world consider it is, ‘less precise than I expect because I don’t care about floating point.’

CDA: We are at time

KG: I would like to ask for Stage 2.7 with the name sumPrecise with otherwise the semantics that I have presented. I don’t think I am going to come up with a better name. We have heard a number of comments of explicit support.

MF: Is it okay if you repeat each of the decision points that you presented? Which side of the decision they are on.

KG: Sticking with full precision. We are still taking iterables. Not coercing anything. The name will be `sumPrecise` rather than `sumExact`. No "from" suffix. Empty list will be negative 0. We will not early exit on NaN but drain the entire iterator. And we will have the text spec as written.

CDA: In the queue we have + 1 from JDD,. + 1 from HAX. 1 + from MM. EAO. DE. MF with a fractional repeating support. +1 WH. Sounds like you have 2.7.

### Conclusion

- Stage 2.7 under the name "sumPrecise"
- other items remain as presented: takes an iterable, does not coerce, gives -0 on empty list, drains the whole iterator even in the case of an early `NaN`, spec text given using real-number arithmetic

## Discussing new directions for R&T

Presenter: Ashley Claymore (ACE)

- [proposal](https://github.com/tc39/proposal-record-tuple)
- [slides](https://docs.google.com/presentation/d/1JfChmW8tQ2_mrFDynosNqa1tjJ2j-qX6WoKm8vc_tkY/)
- [related repo](https://github.com/acutmore/proposal-keyby)

ACE: All right. Records & Tuples is a proposal going on since Stage 1 in 2019. And we spent a lot of time getting into a lot of details, and I last presented at the end of 2022. And that was kind of the last – it was like a last-ditch attempt at trying to see if we can proceed with the semantics that we had, with the proposal. And we got some feedback on the fundamental parts of the design. So we got some feedback on core parts of the proposal, which it was hard to hear at the time, because we had been going deep into the niche parts of the proposal using plenary time to talk about things like `Symbol.toStringTag` and things like this when there was really fundamental things that we should have been actually focussing our attention on and got sidetracked by more niche things.

ACE: But what I want to do today is to just kind of step back to the beginning, like is this still a problem we want to solve as a committee? I assume yes. Do we agree on the core things before I deep dive back into energy into the proposal and back into the small details. That’s the intention of today.

ACE: So some of the push back we got which is, you know, it was mentioned at the beginning of the proposal and one was the fact that record & tuple were permitted, and really this was one – implementation complexity for adding primitives to language. It’s not on the – it’s difficult, on the hard side. It wasn’t just about that, but also the ergonomics for using these things as a developer. And that’s because these things create a very hard split. Even though they look like object literals, they were different. They cooperate reference objects. Reference of primitives. And the – these things like object literals didn’t have an object – didn’t extend from the object prototype records couldn’t have single keys. Tuples were not arrays. They were all the things when you started to look at them, you realize these things are very different, not objects and arrays.

ACE: The other thing was closely related to primitives, but separable, was the `===` equality – and again, like, this is more to do with the implementation side. This is complex. But also, the performance developers would get from this. And the two kind of strategies that could be used to implement. One is defer all the work until an equality opportunity is performed. And that’s kind of out of spec for it. And we go to the same value in the spec and say these things are equal. Whereas in reality, that – when you implement that isn’t isn’t one lane of code in the engine that says equality, maybe there is, the equality isn’t defined in one place, but in lots of places. And hot paths for things. For some engines, this could make things slower, for all comparisons, because whenever comparing objects, they need to load the object, like to an indirect load of that address, to work out what type of operation they are going to do. Whereas, that current engine, I will skip that. And there’s the – even though we had developers to expect linear time comparison of these things, they kept saying back to us like, sure you’re saying that. "But really, it’s O(1), right? This is optimized." "No, no. This is probably always going to be a linear time operation." So it does seem like for `===` developers have an expectation of a lot of performance and the engines weren’t comfortable with that expectation. The other strategy is to do this at creation time. When you create these things, look them up in a global interning table if one exists, match, use the existing one. The downsides here are the other benefit of record & tuple is they are immutable. And there is a convenient way to do this. People might use them purely for those semantics but paying the cost for looking them up and not utilizing these equality semantics. Or, as we know, the hypothesis is that most objects that young, maybe they are just creating these things, doing a one time look up in the map and dropping it. So putting in a global table and just immediately drop them. The other issue is negative 0. Which just kept coming up a lot. If you are interning to make `===` work, either `-0` is not equal to `0` or they are equal but you have to normalize, replacing the `-0` with `0`.

ACE: So that was the push back. Even if you take those things kind of out of the proposal as it were, there’s a lot of value there and potentially things we could still find, design on them in the committee, like adding value and solving a problem. So one is, these things we are adding, very ergonomic way to create immutable data structures. And I think that is still of value, and perhaps the previous proposal went as – enforced deep immutability, maybe that was going too far because it can limit what you can put in the data structures. And enough value add, if it’s only kind of adding a shallow immutability like an Object.freeze. If you are adding these immutable thing, it’s perfect to also introduce equality semantics. If you have got the immutable things in an immutable language, they are so useful. If things are immutable the equality can’t change and we will talk about that later.

ACE: This is kind of not the exact case, but when you ask people how they wanted to use this proposal or what they were excited about, one of the use cases that kept coming up was this composite set key. They just kind of worked perfectly there. I can create a Set, put these things in it. Test them. Loop over them. And it does what you would expect from other languages that have this as a feature So if we try to build that example using some other proposals in space, also from 2019, one of them was collection normalization from Bradley. So that you could change, construct that, or maps, and apply this normalization function whenever data came in. So perhaps where edge’s example, we can take the kind of array of edges and just join them to create this string. This would now create letters due to the middle, but add a value in and I could ask if the value is there and get true. The downside of this normalization is, I now have a set of strings. When I iterate over them, I am iterating over strings. I dropped down a layer of abstraction. I have lost data that was there.

ACE: So I do like the normalization proposal. A variation I prefer is thing like MF’s iterator proposal, where you provide a function, which is telling us how we should normalize the thing, but to determine if it’s unique. It doesn’t change the resulting value. Iterator unique proposal, I am not filtering than I am mapping.

ACE: So instead, you could have a `Set`, where you instead give a `uniqueBy` function. So now, the `add` and `has` work as expected. Those I can iterate over the `Set`. And I still have the original unflattened value.

ACE: So this one was – this is good until the point in – we are still limited in how to determine if things are unique. And that’s to produce things that are currently the same value, zero. So perhaps I would like flatten these things into the string and make sure that I am handling edge cases here, and dash to join, but now there’s edge cases where I can get results I wouldn’t want to be equal. so the thing that I tend to see code doing today when trying to normalize, they stringify things. It works and is very easy to reach and it works for a lot of cases. But as we all know, `JSON.stringify` is not perfect because JSON can’t represent everything. There's issues with key ordering and cycles. Also, it’s not the most efficient thing to be doing if you have got a large structure, taking all the data in the structure and all the strings and concatenating them and getting them into one massive string isn’t the most efficient thing to be doing. So the proposal back in 2019 were aware of this. And they had a kind of API for creating composite value in a more structured way and the value-preserving way. So here I can create a key with objects and BigInts and strings. If I created the same key, which is like a vector, then they would be triple equal to each other.

So this would solve that problem. I could now put my kind of edge identifiers in. And I am going to get that composite key. Now there’s a new error. They only have primitive values in them. Non-bearing clarifies time values. And the reason is, the way the things are implemented is with a trie. Where you have a trie of maps, and then all the objects you use a WeakMap, until the primitives you use a regular map. And this allows the key to not just leak forever: if one of the objects gets collected, then that allows them to be collected and then all maps downstream get collected and that lets us clean up this data structure. There is an alternative design of this, where, instead you do the same thing, but you also don’t hold on to the key strongly as well. Because one issue of the previous design is, say, one of the objects is a long object, it might be never collected, but maybe this is some different module that will live the lifetime of the application. Yes, we have given the key a lifetime, but that effectively the own application in its perspective.

So optimization of this is a variation, I guess, if you hold on to the key weakly and then you can use a finalization registry, you can use that to work back up through the maps. And kind of clean up from that direction.

This is not effective either because finalization call backs don’t necessarily come as frequently as you like. You have to yield, you might have to wait for a full like the [inaudible] collection.

And that means that the key is being held weakly by the table. If they use keys, holding it weakly, then it can drop, if they are trying to put it in a WeakMap or a WeakRef, then now no one is holding on to it strongly. And so really, that doesn’t have the kind of consistent semantics that people are expecting of the keys. Because they can recreate them in the future, WeakMaps and WeakRefs should be holding them. You almost need to do the opposite, intercept the weak keys, into a weak collection and hold them to them strongly.

But – so when it comes to the keys, you need the object part of them. Where someone is going to use them, they are not sure which object they should use. Nothing object, about the values they are creating. So maybe they decide to use the set that they are contained in, they think the keys don’t need the set and this now kind of works except this composite key is used in the first design, that finalization registry, the keys, lifetime is tied to the lifetime of this set. So now effectively leaking tons of memory.

ACE: All these things work in the language and user land, to do this, it’s – the keys are annoying that you you have put an object in there. One is not optimize, the keys are short lived, a lot of global data, potentially a big pay back. And I feel like it’s easy to have memory leaks. And this is perhaps one of the hardest things there is to do in JavaScript applications. And these things are happening on someone’s website. You can’t phone them up and tell them "give me a heap snapshot". So anything to avoid snapshots is always my preferred design.

ACE: I am wondering if this perhaps disadvantages this approach: triple equal same value semantics of what the language has, and JavaScript already has 4 different equality semantics so it’s nice to use one of them. I don’t think it’s in user-land. In composite, maybe the engines can correct me, but I feel they could do a better job than user-land, merging some of the maps together because they have more access to the hash values, but I think they will hit some of the garbage collection complexity even with that lower-level access that they have.

ACE: So I am wondering how people feel about a different approach? Where we have records & tuples, but this time they are objects, and maybe tuples can be arrays this time. Instead, they are just unique objects created. And there is an operation to request if they are equal. I imagine something like this: two empty ones (`#{}`) are equal. 0 and negative zero could be equal. It doesn’t matter if they are in order, but they can be deeply called with tuples inside records and vice versa.

ACE: And essentially, we still allow like other things, object literals like custom prototypes. As long as the custom prototype is the same, maybe that’s fine. That’s whatever getting into the weeds, but imagining… but we now do – there was a reason tuples were primitives that enforced equality before, was to avoid this kind of thing. But the downside in terms of the limitations in what you could support, so maybe and this is a lot of how the other languages will work, if you use a value that can’t be compared, then you drop back to differential equality. So this would be false.

ACE: So this has advantages. Like, these values, like objects and arrays, you can use these in your application. You don’t need to drop over to a composite key to create them when you need them. You can use these things and they just happen to also have this equality semantics. You don’t have any life of the 0 issue. You can just – you can have negative zero. We don’t normalize it, but it is equal. You don’t have to worry about the key order. Nothing primitives. We don’t have to worry, being triple equal or symbol keys. You can allow symbol keys and it’s defined by the values, there isn’t a usable hookable thing. The equality never changes and no user hook. You don’t have to worry about running. And they have like usual match properties that you would want, reflexive. So if these are true, I think it would be really cool if these worked and it might seem like no, no, this is all wrong. The same set is zero. Objects are by difference. That is shocking to us, I think people theoretically JavaScript will be around for a long time, and there’s more JavaScript that don’t exist that, than exist. I think people coming new to this language, or from other languages, even existing, myself included, after coming out of the initial shock of changing something from the mental to the language, this works really nicely.

ACE: We can just use the existing Set, but now these are the new values that are primitives, objects. They have a much more practical and usable equality semantics. So perhaps that’s too much and we don’t want to change part of the language, since we need to introduce like a new global constructor. Maybe there’s a new type of Set. I would like – I can see the point in doing this. I don’t love it, but I can see the point. Or maybe there’s a different way of going about it. Personally, I didn’t want to opt-in, but I can imagine. My guess is, I would much prefer an opt-in approach.

ACE: I can also imagine if you didn’t delve into these things, maybe there’s still a like of a new place where they just work out of the box, where you don’t have to say something different. But if you had the uniqueBy hook, they work and have the semantics you expect, the R&T and the like are unique. One thing about this is, it would seem like or find all the places that currently have the same values and replace them with this new thing. And I think that may not work. Because that would suggest we also change our array includes to use this. And about maybe we do to be consistent with all the same values zero things. But then that pulls apart array index of and array includes. Already a little bit different from each other. But this would make them more different from each other. And I don’t think we have the appetite for changing array index of to make this also use these things. So array should stay as it is, would be my gut feeling.

ACE: So I guess what I am asking the committee is, how do you feel about this? Is this silly? Too extreme? Not enough? I would love to hear. People have been attending the record & tuple at a monthly call and chatting on matrix. But I would love to hear from those people and also other people on the subject, and I have been thinking about it for a few years. And I kind of have no idea how we feel about it. I’ve been dreaming about potential possibilities.

ACE: And the elephant in the room here is "hash and equals" because surely this is what every other language does. And I think that’s completely fair and correct. And I think hash/equals is great. But this is what happens under the hood, an optimal way of doing this. This is a separate question. Either way, it’s about doing something like a new form of equality. It’s not triple equal. This is I guess like… a subpart of the question. Maybe the new R&T things do actually use the hash code and they build in things when you define them, you get the kind of hash and equal symbol protocols, but then that still suggests you need a new constructor and a new set, but a new world where those things work. It’s possible to get these things working and a default set and iterator method, pretty much more excited by that. But I am interested in this tuple world. I also feel like there’s value in – I can see the value in exposing the APIs. But I think they’re slightly more niched. But like the performance cases where you really need this lower access and I have a feeling that whatever direction we go in, the main thing about it, I am not going to initially want to do is, be writing themselves, but wanting to work on a higher up abstraction layer. So I would be curious what people think. There’s stuff in the queue.

KG: Yeah. I put this in and I didn’t understand what was proposed, but that was halfway through, and now I understand better now. There’s one corner I am not really clear on. So you put one of the objects in a set. And then you make another object that is distinct from the first one and you say, does the set have this? The answer is yes. And then you mutate your original one. And then you look up a second one again. You say, does the set have this? And the answer is no. No, that is correct?

ACE: How do you mutate them? They are immutable.

KG: Okay. Yeah. Immutable, so that’s not a problem. Okay.

ACE: It is a big part of this proposal. – if these things were not immutable, none of this makes sense. Like, the fact they are immutable is why I think they have good equality semantics.

KG: Okay. I think I understand. I have opinions, but I will get on the queue to have those.

WH: Could these things support order comparison or less-than semantics?

ACE: Yeah. yes, is the short answer - in the previous primitive proposal and we left it as kind of a `valueOf` on tuples would throw to leave that space open. There are certain use cases when people want to sort an array by like 2 orders of sorting. Sort first by this property and sort by this property. And this would be leaving out the most optimized way of surprising that. But a very clean way of expressing that. So I think yes, they did, but previously we decided to not open that can of worms to keep the proposal smaller.

WH: Okay.

JHD: As I have expressed in the record & tuple meetings, I don’t think that the proposal the current/previous version carries its weight at all without ===, which implies it should be a primitive. So I think that it’s – it is a good thing you’re looking for other ways to solve some of the prosecutors because this method, I don’t think has ended up being viable because of the implementor concerns that prevent new primitives or loafer loading triple semantics. I like the idea of hooking into collections. There’s an existing proposal that tries to do this and there’s – I think it is a very – it sidesteps a lot of the issues that tend to have with customization and subclassing when you make an instance of something, provide a few hooks to make it behave differently. And then everything else just works. So I really like that direction.

ACE: Yeah. I do like the idea of hooks. The thing with hooks as the only way to do this -- I think hooks get – they do – they slightly complicate things when you use the new `Set` methods. Like what happens if I intersect a Set with another Set? But I have different hooks. I guess the preference would be the left-hand side, the receiver. So we can define what should happen. But it might be surprising to people and may not be taking those things into account when they are using these things. Is I don’t think the hook are like a perfect answer.

JHD: Yeah. You’re completely right. The new set methods that take an argument and the receiver and operate on both of them, we have to come up with an answer and not a silver bullet but almost a solution for everything else I heard of. So I think that’s a solvable problem if we go that direction.

ACE: Thanks

ACE: And RBN. I do feel bad as I know you wanted to talk with hash equals and I have forced your hand and I apologize.

RBN: Hash equals is something I have been thinking about for a number of years. I have brought it up in multiple conversations, and in discussions in the past. I think the only reason I haven’t presented it in proposal is that my current workload related to TC39 proposals is over limit. However, a lot of things we've been talking about in the matrix, especially, have been around like the different a equals+hash type approach versus something like composite key. And there are specific things that composite key enables, but a number of things that it doesn’t really – it’s not the most efficient mechanism for handling things like running case and variant collections or trying to compose things that require – sorry. Like, building custom hash table, I have had recently the need to do such a thing, especially working with experiments with the structs proposal, any lack of concurrent hash table or concurrent map as part of the proposal, and likely not part of that proposal in the future, sometimes it’s necessary to actually be able to generate a hash table to get the calculations and there are libraries and packages that do that out in the ecosystem. A lot aren’t as efficient in the browser because they require using a WeakMap to assign some identity to an object to use it as a pseudo-hash. But having the ability to generate a hash and do comparisons is much more efficient than something like a composite key right off the bat. Composite keys requires allocations, every time you do a get or set, you wrap a [value?] just to represent the key. Where if you had equals/hash, you can do that in one place. You don’t have the overhead for every single `get()` or `set()`. So there’s a lot more efficiency, I think you can find something like equals/hash and it’s consistent throughout other languages. And even the native implementations of JavaScript in most cases, at least every one that I looked at so far, uses equals hash natively. So it’s already doing these things. So there’s value in giving that power to the users because it’s not a terribly complicated feature to be able to leverage.

ACE: Yeah. As I said, I 100% view hash and equals to be useful. Effectively, it’s hash equals is still there. But these – it’s still below the line. You create these things internally, the engines knows the hashcode and compares them to decide if they are equal. But that’s – as I am presenting it, I am not making that something where the user can say, this is hash a just code for this value. I can agree. I can see – especially with the shared structs proposal, those things are mutable, so they wouldn’t have the built in hash equals, but that’s where perhaps you want your thing, you want the drop downlevel, and what I am saying is, I think a case of equal, wanting to be writing hash equals themselves, a less common case. And the more common case, especially for languages – a lot of languages have these things because it’s traditional to have them. But they also tend to provide data types where you get these for free. You can write a data or record class and it automatically implements a.hashcode and equals operator, but I don’t have to write myself and remember to update as I add new fills to the object.

RBN: Yeah. I do agree that most code doesn’t need to write this themselves. And places like .NET framework, most comparison and equality objects that you would use like a comparator, IComparator or the like – already implement it. You will use case insensitive string comparator. But you have the level of flexibility you need to get in and write the hashing algorithm or write how you want to take various properties on an object and hash them and get shift temperature together to create a valid… and that level of flexibility is something valuable in those cases.

ACE: Yeah. I agree. I want to get through the queue. Thanks, RBN.

WH: RBN, I'm trying to understand your position. Are you suggesting that ECMAScript implementations expose hash values for all the objects?

RBN: The proposal I have not presented that I have considered would be that the ECMAScript language have something like an `Object.hash` static method to pass anything in, you get a hashcode back or integer, integer value. Whatever it is, it produces a 32-bit integer. For objects, you could use identity hash that doesn’t correlate to its actual physical memory address, just to guarantee there is a unique identity for each one. For something like strings, it’s possible that you could implement or use a specific string hashing algorithm like xxHash32 or xxHash64. The built in hash cold function is useful for getting hash colds for native values. If you are building a structured object like if I am building a point class or a – even a composite key class, I might have a comparator that says, well if this value is a composite key, I can get the.hashcode of the first and second element and I know how to do the bit math and do bit shift to get good avalanche properties and that’s the value that I return and control what things get returned and how the equality is compared. It’s a combination of like APIs provided by the runtime and the ability to hook equals and hash on something like map and set

WH: Are those hashcodes portable across implementations or implementation-specific?

RBN: Not portable. They are not designed to be serialized. Even in languages like – something like the .NET Framework. They use randomized comparators that are unique to the specific thread, so you’re guaranteed to get the same hashcode within that thread. Maybe not just in the same thread – maybe the same AppDomain. So all threads within the application. But it will not produce the same values every time you start the application. And it’s not designed to be serializable or guaranteed from one app restart to the next.

WH: Okay. Thank you.

CDA: Noting, we have limited time left and a fairly long queue. SYG is next.

SYG: This is a narrower thing about the – using the composite objects inside WeakMaps. I am not sure I caught the position that you were – that you favor. Is – I heard something like, when they are put into WeakMaps, then you – they would need to counterintuitively hold these things strongly instead of weakly. Isn’t this exactly analogous to why we – what why we have this canBeHeldWeakly predicate for things? Is your – is the argument we can break from – allow these things in WeakMaps because they are not triple equals, but they have this like separate notion?

ACE: I guess my – the main thing I am trying to solve for is, like, GC complexity. That’s the feedback we got for R&T.

SYG: Okay.

ACE: But then – to answer your question, there are lots of different ways we can define how these – these work in WeakMaps. Like either – like, either we start to – either way say that – in like when we talked about these with tuples, it would be that if the key, like the key itself doesn’t have a lifetime. Like its lifetime is just – it’s the kind of the shortest lifetime inside it. When one of the objects, one of the lifetime aspects of it, sets, ignore symbols. Easier when you say objects. It assumes one of the objects in the key isn’t reachable. And that means the key can’t be forged. And then now the WeakMap would be free to drop that. So all we say, these things are just objects. Like, the value – they behave no differently to any other object. They don’t exist when it was triple equal, in the composite key case, when triple equal, you don’t want to do that because these things can be recreated. That’s the thing I am trying to –

DE: We might want to ask: what should be in a basic version of record & tuples? The basic version, record & tuple cannot be WeakMap keys or WeakSet keys. The basic version for simplicity would be without this. Is that right?

ACE: That is my preferred option. JHD is against any objects. You can’t put objects in these things. But I think the best option would be not to allow them to begin with. I do think using those things is an advanced collection and changing semantics doesn’t have that risk. Changing the string constructor would scare every developer using weak collections is more advanced. We should be more comfortable with making changes that more experienced developers could understand is my personal reference.

MAH: I will get to the changing semantics later, if we get to it. But I have use cases that would really benefit from being able to use composite WeakMap keys. So I would really like this out of this proposal.

ACE: Okay. The thing though; the – I like that you have use cases for it. But the thing about it is, it doesn’t need the engine support. It’s only more as an optimization. Like we both created things where you can implement this in user-land by doing this – you read out the values and put them in the weak, trie WeakMaps.

MAH: Tries are just a pain to implement. Sure.

ACE: The use cases are, if the engine does it, it’s because it’s more efficient than a capability thing.

EAO: We at Mozilla generally like this direction for the proposal. But we do have the sense that was being proposed or talked about here is not quite the solution to be accepted for Stage 2. We are noting that this sounds like a really really good stage 1 conversation and development.

ACE: Yeah. I feel really great. I wouldn’t just take assumption and just pick up from Stage 2. But… I complete agree.

CDA: We are technically at the end of plenary for the day. However, this is a discussion item, so I can stay on for a bit, if folks would like to continue going through the queue.

KG: Sure. I just wanted to express that the "composite key" that you presented, I prefer that over changing the behavior of collections or having a new kind of collection. It just plays nicer with other things like `Array.prototype.includes` or just comparing it against a bunch of values or whatever. It’s not an extremely strong preference, but a mild preference. And separately, if these are producing objects - and they are, no matter what we do here - I would kind of prefer not to use any syntax for it. It doesn’t seem necessary. And it’s a lot of syntactic space to use for a somewhat more obscure thing.

ACE: Thanks, KG.

DMM: This feels like it’s a lot of the side of the records [inaudible] and more widely value side have in all the [inaudible]. I do change semantics. I think one of the important things is to ensure that things like set prototype and array prototype includes should behave the seam way. Because that is what we already – that is what uses already [inaudible] change. If we start changing the semantics of collections, you have to do array methods to match. I very much think that, you know, RBN was – I very much agree with RBN on the equals and hash being a good way forward for this. And I think we can preserve the semantics through existing objects. And then it only be affecting things for the new record-type things, which automatically declare equality and a hash, numbers, and that sort of thing. But that is a useful way for the language to resolve and open up a lot of [inaudible].

ACE: Okay. As I said, like, I don’t like the idea of `includes()` and `has()` not matching. But it does – the reason was, if they match `includes()` now becomes even more unlike `indexOf()`. Which I think a lot of JavaScript developers aren’t aware of today. You think it surprises them when you show them that `indexOf()` and `includes()` give a different result. We can avoid this problem by not having the ergonomics of using, changing existing `Map` and `Set` and introducing new map and set to people. So I think either way, developers have more things to learn, either they learn that’s things, behave differently, or learn there’s a whole new collection type they need to use if they want to use these semantics. The advantage of these – these are the same value, then you have all the garage collection issues.

ACE: MAH?

MAH: Yeah. I really like the idea of basically using record & tuple as a structured composite keys. I think that makes them directly usable. My concern with the direction right now is more about the suggestion to change the semantics of existing collections without explicit opt-in. I think it might have an unintended consequences. Like, and I probably would much prefer an options bag or a separate constructor. I think option in the constructor might be sufficient. But changing – and I think if you do that, at that point, there is less of a problem with `includes()` not matching because at that point, you are explicitly opting into your `Set` having different semantics.

CDA: Thanks, MAH. That’s it for the queue.

ACE: Thanks, everyone. I will go read all the other conversations in matrix that I couldn’t read.

CDA: Okay. That brings us to the end of Day 2. We will see you all tomorrow.

### Speaker's Summary of Key Points

- We covered the feedback received on the 2022 design of the proposal
- A new design that does not include new primitives or overloading `===` semantics was presented
- We talked about how this compares to a 'hash+equals' pattern

### Conclusion

- Lots of good feedback was received, with contrasting views in the committee.
- No conclusions were drawn.
