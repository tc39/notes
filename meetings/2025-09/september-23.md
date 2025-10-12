# 110th TC39 Meeting

Day Two—23 September 2025

**Attendees:**

| Name                | Abbreviation | Organization       |
|---------------------|--------------|--------------------|
| James Snell         | JSL          | Cloudflare         |
| Aki Braun           | AKI          | Ecma International |
| Ben Allen           | BAN          | Igalia             |
| Chengzhong Wu       | CZW          | Bloomberg          |
| Chris de Almeida    | CDA          | IBM                |
| Daniel Minor        | DLM          | Mozilla            |
| Istvan Sebestyen    | IS           | Ecma               |
| Jordan Harband      | JHD          | HeroDevs           |
| Kevin Gibbons       | KG           | F5                 |
| Mark Miller         | MM           | Agoric             |
| Michael Saboff      | MLS          | Invited Expert     |
| Nicolò Ribaudo      | NRO          | Igalia             |
| Richard Gibson      | RGN          | Open JS Foundation |
| Ron Buckton         | RBN          | F5                 |
| Ryan Cavanaugh      | RCH          | Microsoft          |
| Ashley Claymore     | ACE          | Bloomberg          |
| Waldemar Horwat     | WH           | Invited Expert     |
| Andreu Botella      | ABO          | Igalia             |
| Michael Saboff      | MLS          | Invited Expert     |
| Andreu Botella      | ABO          | Igalia             |
| Bradford Smith      | BSH          | Google             |
| Caio Lima           | CLA          | Igalia             |
| Chip Morningstar    | CM           | Consensys          |
| Dmitry Makhnev      | DJM          | JetBrains          |
| Jase Williams       | JWS          | Bloomberg          |
| Jesse Alama         | JMN          | Igalia             |
| John Hax            | JHX          | Invited Expert     |
| Justin Ridgewell    | JRL          | Google             |
| Keith Miller        | KM           | Apple              |
| Kris Kowal          | KKL          | Agoric             |
| Mathieu Hofman      | MAH          | Agoric             |
| Olivier Flückiger   | OFR          | Google             |
| Rezvan Mahdavi H.   | RMH          | Google             |
| Romulo Cintra       | RCO          | Igalia             |
| Samina Husain       | SHN          | Ecma International |
| Zbigniew Tenerowicz | ZTZ          | Consensys          |
| Linus Groh          | LGH          | Bloomberg          |
| Devin Rousso        | DRO          | Invited Expert     |
| Rob Palmer          | RPR          | Bloomberg          |
| Philip Chimento     | PFC          | Igalia             |
| Samina Husain       | SHN          | Ecma               |
| Erik Marks          | REK          | Consensys          |
| Steven Salat        | STY          | Vercel             |
| Peter Hoddie        | PHE          | Moddable           |

## Opening & Welcome

Presenter: Ujjwal Sharma (USA)

## Intl Era Month Code Stage 2.7 Update

Presenter: Ben Allen (BAN)

* [proposal](https://github.com/tc39/proposal-intl-era-monthcode)
* [slides]( https://notes.igalia.com/p/2025-09-tc39-plenary-era-monthcode-update#/)

BAN: This is a Stage 2.2 update. We will probably be asking for Stage 3 at the next plenary. The main thing, holding us back right now is finish up test 264. This is update on last plenary. And getting on the repo.

BAN: Okay. So the premise of era monthCode, is okay. Temporal supports non-ISO 68—860 calendars. And traditionally, the behavior of these calendars has been defined out of ECMAScript since would you say it’s out of our domain. Although we can’t be the one to specify that, we want to put behavior in order to avoid implication divergence

BAN: The goal with the proposal so we don’t want to overspecify behaviors for matters for which ECMAScript isn’t the correct authority. But within the constraint, we want to minimize opportunities for discrepancies.

BAN: Additions to 402 with this, we are describing supporting calendars. Valid ranges for era years and calendars.

BAN: And the thing that we have been having a lot of updates on as I can say in general is years and lunisolar calendars. Basically, the quirk with lunisolar calendars, there can be leap months, which can present problems.

BAN: All right. So editorial changes. Like I said, the big editorial changes involve a lot of stuff that previously had been described in prose, giving algorithm steps for it. And will spare the small details accept upon request, but these are the he will to reside PRs where we have done that of. We are not changing for consensus, but I want to give an update where we are. Probably going for Stage 3 next plenary

BAN: Okay. So we reverting a change that we had previously made in July involving, what happens when you use additional to go into a year with a non-existent month? So here, we are starting with a year and month that exists. This is a leap month in the year 5784 in the Hebrew calendar. But that specific month doesn’t exist in the following year. Previously, at the last plenary, we got approval for change to go forward into the non-leap month equivalent of that month.

BAN: As a result of discussion, we have decided go back the behavior for overflow reject, when adding a year. We are going back to work more or less to re-establish consistently for weekdays, just like in ISO 8601. We reject going forward from February 29 into a non-leap year. Likewise, we’re going back to throwing a RangeError, when using `overflow: “reject”`, moving forward a year from a leap month. So this is the sort of summary of what I just said. I just probably should have like flipped forward to that slide before saying it

BAN: One of the things that provokes this, first of all, I think it’s persuasive to say we are going to return to the previous behavior, this matches the behavior for leap days. One of the problems that arose is the standards for what month you should go to, when going forward from a leap month, varied calendar by calendar. And it’s stuff that is sort of outside of our purview in a lot of ways. In the Chinese and Dangi calendars, you go backwards to the previous month. And the Hebrew calendar you skip forward to the next month. Yeah. We’re at this point planning on erroring towards strictness, because if we lose that, we can go the other way.

BAN: This is something that is a summary of a very, very, very long discussion. I’ve tried to boil it down to something short. So there’s the question of reference here. In ISO 8601, it makes sense to use the year 1972 as a reference year for any date. If you have a month and a day—internally, if we have PlainMonthDay, internally we’re representing that as a ISO 8601 calendar day. But if you have February 29, what do you use for the reference date? Well, you can’t use 1970 because there is no February 29 in 1970. So instead we can use 1972 as the reference year because every day that can appear in the calendar can exist in that year.

BAN: This is straightforward for most calendars—the Gregorian calendar. But it is not straightforward for some solar calendars. For some lunisolar calendars, there’s no year that contains all month and all month—that contains every month including every leap month and every day including leap days within that leap month. And notably, some leap months are very, very rare. So in the Chinese calendar, the leap months in the winter almost never happen. And in these cases finding a reference year for arbitrary month day can involve going into deep past.

BAN: There’s lots of discussion on this. This is a snippet of a table that was generated by ABL, showing how far back you have to go to find a reference date for some combinations. If we are looking for the 29th day of the leap year after the 12th month in the Chinese calendar, you have to go back to 1404. And the problem is, with this, is that, like, our data is not actually—the calendars, we don’t assert the calendars we’re providing are reliable this far in the past. If we need to find a reference here and go back to 1404, that’s actually not a good reference year. That’s not a year we can vouch for.

BAN: Why does this matter? Practical terms you canners the month with the month code M11L, that leap month in the Chinese calendar occurs in December 2033/January 2034, but in our range of calendars it doesn’t occur before 1972. The best reference date for this particular month is going to be 2033. But this is the wording currently for finding reference dates. Which is the latest ISO 8601 date corresponding to the calendar date which is earlier than or equal to the ISO 8601 date December 31st, 1972. Well, it turns out that 2033 isn’t in that range.

BAN: So our updated wording is with these lines added. If no such date is the earliest ISO 8601 date corresponding to the calendar date of between January 1, 1973 and December 31, 2035. That’s far enough in the future for us to pick up the year in the Chinese calendar that contains that specific leap month. We are planning on concretifying with a table of reference. And we don’t currently have that. That will be done by Stage 3.

BAN: But the most meaningful thing with this update is in fact just—the next step to finish Test262, at which point we anticipate going to Stage 3. The TDLR has lots of spec clean up. Spec clean up responding to concerns by taking the steps that were written in prose and entering them into algorithm steps. We have edge cases involving reference years for certain lunisolar calendars we were dealing with and most significantly the Test262 is currently complete. That is what we will have done for next plenary

DLM: Okay. Queue is currently empty. It’s great to see the work progress with implementations starting to ship Temporal. Let’s give a minute in case anyone wants to ask questions or make any comments.

DLM: Okay. I guess we are good. Thanks, Ben.

BAN: Thanks so much.

### Speaker's Summary of Key Points

* Intl month code supports many calendars defined in CLDR + ICU4C/ICU4X
* We cannot specify arithmetic for every calendar, but we do want guardrails around implementation to avoid divergence between implementations

### Conclusion

* Just an update.. No comments from queue

## Deferred re-exports update

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/tc39/proposal-deferred-reexports)
* [slides](https://docs.google.com/presentation/d/1ok-qUnKrHK8ADWAHR071t5dglDkuKhXc0mPLCTS0meY)

NRO: This is, update about the deferred re-export proposal. I apologize for adding this way past the deadline, but the only consensus request would be something that is not actually semantics. A recap of what the proposal does. It allows marking some export declarations as deferred. For example with the components library, that’s export deferring a bunch of components from a bunch of Internet files and then we have in our case, app.js. This means that we are deferring to app.js’s decision to load and execute the app.js file only using the button, which is defined by `button.js` file.

NRO: And similar to `import defer`, when paired with namespace imports, everything but then does the lazy execution thing.

NRO: Again, recap. This syntax only works with the `export defer` list of bindings `from` syntax. It doesn’t work with `export defer * from` which is exporting everything. The reason being that, well, the goal here is that the module specifier only loaded if we use one of the bindings’ `export`. But with `export * from` we don’t know what the module name specifier exports when we actually load it. It does not support the `export *` namespace because ambiguous because we are like creating a space. Whether we are getting the [nam] says and exporting. So loading only specifier when our importer is using an S.

NRO: Then a little bit of history. This was part of the `import defer` proposal. Then when the import decision we left this behind because there was more work needed and confirmed Stage 2 as of June 2025. It might have been before.

NRO: The main updates about the proposal is that we have spec text now. You can go take a look. Well, the spec text is complete. Before there were multiple todos and a bunch of bugs. It should be complete now. You can take a look at that. Just be careful when reading. It sits on top of the import defer proposal, you need to take both into account.

NRO: There is another open question right now. A discussion between me and GB about the behavior of `export * from`. You can go look at this issue in case you have opinions. The summary for discussion is that if we are doing export stuff from some module and that module has a bunch of export defer statements, is this `export * from` causing all of them to be loaded because we are referencing all of them, or is it causing them to propagated and then our importer is actually choosing what to load. But you can take a look at the issue and give your opinion, if any.

NRO: The reason we’re actually presenting here is to get consensus and we need one more reviewer for Stage 2.7. ACE and CZW previously volunteered. The three of us work together often, so it’s good that GB actually volunteered to be a third reviewer. And so just want the committee to approve we have a list of reviewers.

NRO: And yeah. I expect the queue to be empty. Yeah. So—

DLM: Yeah. The queue is empty.

NRO: Yeah. So I think we consider the third reviewer to be approved? Okay. Perfect. Just a timeline about the proposal. `import defer` is being implemented in all the browsers right now. There are in-progress implementations—If you have not seen a patch yet, the patch is coming soon. So expect that to be done in a few months, and this proposal will be ready for 2.7 when import defer is close to being done.

NRO: Thank you. I am done here.

### Speaker's Summary of Key Points

* Export defer has complete spec text
* There is ongoing discussion for the behavior of `export * from`

### Conclusion

* Consensus on reviewers: ACE, CZW, GB

## AsyncContext yield*

Presenter: Nicolò Ribaudo (NRO)

* [proposal](https://github.com/nicolo-ribaudo/proposal-async-context/commit/32856cb7ce1aaaa9f310f8f4b6532b93b459012f)
* [slides](https://docs.google.com/presentation/d/1g7Xgf9uAxv5gZYvms23m2_hP513IRYNktz0fDiE1NmA)

NRO, you have the next topic as well, AsyncContext yield* behavior. 30 minute box.

NRO: Okay. So this is an update about AsyncContext. The last updates were about web integration. Actually, there is an update with the ECMAScript semantics. Specifically about the context that propagates through `yield*` operations.

NRO: Just a little bit of a recap about how AsyncContext currently works in generators. The proposal currently follows the principle that once you are in a given code, the context is constant and some other code cannot find their way to leak a different context into your code. This means that if you have a generator function like on the left of the slide, let’s say when this function starts running we have active context 1. Even if we yield or call the next functions in, the active context will always be context 1. Even if as on the right, we are calling the method using a different context.

NRO: And while that works in most cases, sometimes that’s not actually what you want. Some use cases we found is that you might have some ambient AbortSignal, maybe provided by your framework or by something else. And you want to be able to abort some work when any of the ambient AbortSignals are aborted. So you want to have the one active when the generator started running, but also the one active when the next started. And this is trivial to do in manually written iterators, because in manually written iterators, it just gets the context from the caller.

NRO: When it comes to generators, there is a way to make it work which is you basically create your own wrapper that creates like a iterator internally, like, a dot matrix and that in the throw. When the generator runs when the yield will be intercepted to—the snapshot from the caller. In this example, this `withNextContext` would modify the that the key of the running, to this context to, we called the `.next` method from the side relative to this yield expression. This is some problems because wrapper functions are not always easy to use. They work with class methods because there isn’t syntactically a place to put the wrapper, and it means to you have to have the function, in the stack traces.

NRO: Okay. So that was what the problem we have is and what is the current workaround. Before I go into the solution before proposing, let’s look at this, like, some that describes the spec text for all yield generator works. You can see here when we do `yield 1`, spec-wise we have this value 1 stored in this variable and then we take in Step 2, a snapshot context. Then we pause the generator body sending yieldValue to our caller and resume the caller. Then when the caller does its thing then calls next next to reassumes ourself which is value positive next and before returning the result, it’s not returned from the generator. It’s setting the result of the yield expression. Before doing that we do the context snapshot right before async. And when it comes to `yield*` we do something very similar. So we—we get the iterator, snapshot, yield* is not just one value. It’s a loop that keeps calling `.next` on the iterator. Then pauses the generator, pauses the body and sends the value iterator to our caller. And pausing, when the caller resumes, it restarts the context and continues iterating. It calls again into `.next`

MM: Nicolo, I am going to interrupt because I have a clarifying question.

NRO: Yes.

MM: AsyncContextSwap, I need to know what that does. The word swap, I generally use that when things are exchanging places. AB

NRO: Yes. Yes. So what this operation does, it sets the current async context to the one passed in the argument to do the operation. And it actually returns what was the previous async context in this case we are just not using that because we don’t need it.

MM: I see

NRO: And this AsyncContextSwap is not that it exports to user code.

MM: Thank you.

NRO: So what you might notice from here is that when we call A, it is guaranteed that the active context is always the ones started in the genContext variable. Because after resume, in step 4.c, we like always resume, restart the context before continuing the loop.

NRO: The proposed change is to stop restoring the context within the loop. And instead, just restoring it when we are done with the whole loop. What are the consequences of this? From the point of view of in the body of `fn`, nothing happens. If body continues running after that we are done with this whole `yield*` thing. After step 6. When the body of `fn` is running, we restart this genContext. However the change is feasible to `iterable.next` to the new iterator. Specifically, if our function, if our generator `fn` is currently paused on the `yield*` and the caller calls `.next`, it will basically forward the call to the new iterator, it will run step 4.a. It will forward that call in the context. The context of the caller of the outer `.next` is propagated to the inner `.next`.

NRO: Now, how does that solve the problem? Well, it means that if we consider these cases from the beginning where we want to read the ambient AbortSignal variable that was active when `.next` was called, we can—instead of wrapping the whole generator function with a wrapper, we can just use `yield*` with some if you iterator that is—and adjust so it can read the context when it was next calls and returns that context. Like here on screen. And then we can, like, use both, in this case the merging the signal with the one body and the one that is coming from the `.next` call. Note that this is still not changing in any way the context in the generator body. It just makes it impossible for the new iter star to read the context.

NRO: Another use case I didn’t mention, But it was calling a callback in that context. And again, you can just use yield* with some new iterator and it does that—reads—tracks the callback in the context.

NRO: So yeah. This is the proposed change. I also want to note that if the inner iterator is itself a generator, all of this does not actually matter because, well, the generator body of the inner iterator has a context. This change is relevant when the inner iterator is written manually. Are there any questions? Mark?

MM: Yeah. So you’re only proposing this change, and all the code things that you just showed to make use of it? Let’s call those helpers. You are not proposing any helpers?

NRO: No. That’s all user code. This is just what is making it possible to write those helpers in userland.

MM: That’s great. Let me make sure I understand. You’re not actually doing anything that enables combining context? The helpers cannot actually combine contexts.

NRO: No.

MM: What you are doing is, you are reifying the other contexts so that you have both contexts in hand, so that you can—you know, use one or the other.

NRO: Yes. The helper could, for example, just take a snapshot of the outer context and return it to the generator, and the generator has the two contexts and decide what to do with them.

MM: Okay. Thank you. I support.

NRO: Okay. Is there anything else? If not, yeah. We have consensus to making the change of the current yield* behavior for what this slide to what is in other slide, moving the AsyncContextSwap out of the loop.

NRO: We are actually Stage 2. Given it’s quite tricky things to deal with, and that the spec text is mostly stable and mostly blocked on the web integration, we are considering almost Stage 2.7. So that’s why I am just checking that everybody is fine with this.

DLM: The queue is currently empty

NRO: I assume that’s a yes.

### Speaker's Summary of Key Points

* We propose the change to how yield*propagates the AsyncContext specifically allowing to propagate the context of the caller `.next` to the inner iterator passed to yield*.

### Conclusion

* There were no concerns with the proposed change.

## Continuation: Intl Era Month Code—Normative changes

Presenter: Ben Allen (BAN)

* [proposal](https://github.com/tc39/proposal-intl-era-monthcode)
* [slides](https://notes.igalia.com/p/2025-09-tc39-plenary-era-monthcode-update)

DLM: Next up we have a brief continuation because Ben would like to continue for normative changes that he presented in the intl error month. Apologies for the process troubles.

BAN: All right. So I wanted to grab this continuation to ask for consensus on the two changes that I mentioned. Let me present my screen.

BAN: So the first is reverting the change we made last plenary. The one I talked about, we are going back to throwing to advancing a year from the leap month in a lunar solar calendar where the leap month-endize does not exist in the fooling year. This works the same way as leap days and the calendars, solar calendars. 8601. Then we are returning to the previous behavior where this code here will result in a RangeError because this month doesn’t exist in the year that follows 86—5784. I would like to ask for consensus on this change which reverts to our previous behavior.

DLM: Okay. At the moment, I am the only person in the queue. SpiderMonkey supports these normative changes. It’d be great to hear support from someone else as well.

DLM: We have + 1 from ACE. Thank you, Ashley. Fantastic.

BAN: All right. The other one that we would like to ask for consensus on is the one allowing for reference years after 1972. For this one specific case, the previous wording was—let me share. Share. All right. So previous wording, was to pick a reference date that is earlier than or equal to 1972. Our new wording allows for reference dates going up to 2035. And that’s specifically to pick up the case of this leap month in the Chinese calendar. there no in-range reference date before 1972, but there is a reference date before 2035.

DLM: Okay. SpiderMonkey team also supports this change.

BAN: All right.

DLM: Once again, it would be nice to have a second person for support. Once again, +1 from ACE. Thank you, Ashley.

BAN: Thank you very much. Thank you for the overflow for asking for consensus.

DLM: No problem.

### Speaker's Summary of Key Points

The speaker is requesting the following normative changes on Intl Era Month Code

* Normative: Revert change to month code constraining [\#82](https://github.com/tc39/proposal-intl-era-monthcode/pull/82)
  * Reverts [Don’t reject when adding years and landing on nonexistent month \#67](https://github.com/tc39/proposal-intl-era-monthcode/pull/67)
* Allow reference years after 1972 for calendars that need them
  * There’s been lots of discussion on the issue Stage 2.7 review feedback: [Provide guidance on calculating a reference year for MonthDay when not provided](https://github.com/tc39/proposal-intl-era-monthcode/issues/60).

### Conclusion

* The committee provided consensus to make the requested changes

## Update on proposal-await-dictionary

Presenter: Ashley Claymore (ACE)

* [proposal](https://github.com/tc39/proposal-await-dictionary)
* [slides](https://docs.google.com/presentation/d/1TaLCZt2jJtrVY1PjFd49jlBW-vAVil4NYsOzAyYPP7Q/)

ACE: Hi, everyone. My name is Ashley. Delegate from Bloomberg. And I am here to not ask for consensus on anything, but just give you an update, and then get the feelings from the committee on the next steps of this proposal.

ACE: So we last talked about this proposal in plenary back in July last year. That was in the context of the iterator helpers proposal. And then we talked about this proposal more properly, way, way back in 2023. It’s been a while. I will give a bit more of a reintroduction to this, to put ourselves back, back in March, lovely, sunny Spain.

ACE: So the problem that this kind of proposal is centred around is, not this code, this code is fine, but over time, the code might start at await and now in a classic waterfall situation where we’ve not started a second request until the first one is finished, even though there’s no dependency between the two, and we are doing this because this is the easiest thing to write. Someone might suggest on a PR that maybe the developer themselves rewrite it, to do `Promise.all`, now this is fantastic. We are doing the two requests in parallel and not holding one up and not introducing an unnecessarily dependency. But when the code likes that, when someone comes along and adds another action they can just keep following the pattern. There’s new logic that comes in and over time, and it starts to become, like, not very elegant or easy to reason about code.

ACE: Mostly because this is, like, an ordinary API. So the original motivation for making this error, I found code similarish to this, and I wanted to be confident that we were destructuring in the right order. And because there’s so much logic here, you know, literally counting the lines on the screen trying to make sure that the third variable down feature flag does line up with the third promise that we are passing into the array. That’s not what you want to be spending your time doing when reading code.

ACE: So what you could do today is separate those two phases. We could, like, launch all the requests, collect all the promises, and then separately, now await them. This is okay. It’s kind of a bit annoying that you have all these extra variables in your scope. Like, further down the file someone might reresolve a promise that’s already resolved. But another issue here is that we’re only attaching the `.then` on these one at a time. So if the first promise throws, and then the later one also throws, then there was never any hand or touch to the other ones. So you could get a background unhanded promise rejection, and then in some environments this would crash your application. It thinks you are not handling the code.

ACE: That goes away if you then use `Promise.all`, because it handles all of them. You still might be swallowing an error, but you’ve at least done that explicitly, you are saying, I am going to group all the promises together and handle them as a set. If one fails, it doesn’t matter if others fail.

ACE: So then with this we are back to where we were at the beginning of, having to use `Promise.all` and keep track of the list of things and we’re now writing quite a lot of stuff.

ACE: Mark has a clarifying question.

MM: Yes. Thank you. You used a phrase, probably immaterial to the point you’re making, but I couldn’t understand it in context. “We resolve a promise that’s already resolved.”

ACE: Yeah. I could have said that much clearer. So with the code like this (referencing presentation). Personally, I find it a little upsetting at the rest of them, code, that you can imagine, underneath this, there’s like both variables still in scope. We still have `sessionP` and `session`. And we can’t, like, remove `sessionP` from the scope. When typing down below, you might use `sessionP` which is unnecessary. We almost want to delete `sessionP` from the scope. There’s no reason. I wasn’t very clear about that.

MM: Thanks.

ACE: So the proposed solution for this proposal is, an alternative to `Promise.all`, which is a named API, so instead of passing in an array or more precisely an iterable, we pass in an object where we’ve named each of our promises. So now when we destructure the object, we destructure by name, and it’s much harder to mess this up. We can destructure in any order or ignore some. Just a little bit easier to kind of read and get right. Very small—very easily to implement yourself, but a nice, convenient thing to have in the language.

ACE: The naming of it, `allKeyed`, where did that come from? That was specifically what we talked about last July before last, was this shape, like ignoring the kind of domain of promises, the actual shape of the API is identical to iterator. The proposed iterator of methods, static helpers, where you have `Iterator.zip`, takes an iterable and you get back an iterator that’s also of, like, an array. And then you have `Iterator.zipKeyed`, where you give it a bag, and each item in the iterator is then an array. Not an array. So the—from a type perspective, they’re exactly the same. What we talked about, with `Iterator.zip`, should we overload? What should the name be? With that proposal we landed on `Iterator.zip` to be the ordered one and `Iterator.zipKeyed` to be the named one. And then if we do that, for that proposal, I would want to mirror that for this proposal, so that’s what we have done.

ACE: So just some general stats around what people are currently doing. This API has been around the promise libraries out there for a long time, and you can see them being used quite a lot. And you get lots of downloads. There’s definitely a thing people are reaching for.

ACE: There is spec text written for the method. So theoretically, I could ask for reviewers and ask for 2.7. But it’s been a while since we talked about this. So instead of doing that, I wanted to gauge the committee’s feelings. Like, do we think the proposal is the right shape? Is it the right name? Should we get reviews and go for 2.7? Or should we actually continue discussing this more broadly? Such as, should be there other methods in this proposal? We have `.allSettled`—should there be a keyed version of `allSettled`? I am happy to do this. Personally, I was hesitant because I haven’t come up with that particular use case a lot and in general mostly because `Promise.allSettled` is a niche API. I didn’t want to add it for completeness. But we as a committee think it’s worthwhile and we are not just kind of filling out the cross-product, then I am very happy to add that as well. So you have opinions on including that.

ACE: And a wider conversation on, should this be an API or should we be doing a syntactic approach? And we were talking about it internally at an Igalia/Bloomberg plenary preparation meeting. Even if there was syntax, you could still have the API because the syntax really works when there’s a known list of things. I am looking for code, we can use there were use cases of you having a kind dynamic object with promises in it. So I think even if we did want to pursue syntax, I would rather do that as a separate proposal, rather than in this proposal.

ACE: So that’s everything. And I can see we have people on the queue.

DLM: First up, Nicolo

NRO: Yeah. So for the problem statement of, like, having multiple promises, and you want to store them all to variables. And promise.because—I don’t think this is the best solution. It’s actually a little bit too many line to have to repeat them twice. And creating the object in line. However, I am still happy with how the proposal is. Because I would use this more frequently not in the structuring context. I write quite frequently code that does `Object.fromEntries(Promise.all(Object.toEntries()))`, something like that. To implement this method in line. So yeah. If we were focussing on the promise statement, maybe a different solution would be better, but I am very happy with what is mentioned here.

NRO: Thanks.

DLM: Next we have Kevin

KG: Yeah. I am in favour of this with the current shape. I do think we should have `Promise.allSettledKeyed`. It doesn’t come up as much. But it does come up and like exactly the same motivation for `Promise.all` applies to `allSettled`. There’s literally no difference. So we should do both. I don’t think it’s actually very much more work for implementations or anything to do both. And it’s just a weird thing to leave out.

DLM: Great. Thanks, Kevin.

ACE: Yeah. If the majority of people feel like that, I certainly can feel that way too.

DLM: Next we have JSL with “+ 1 but I think 2.7 is premature”.

DLM: And then ZB?

ZTZ: Yes. Also, +1 to having both methods. I believe `allSettled` is the more important one because it makes `Promise.all` redundant somewhat. We can have only that one, and it would suffice, not the other way around. So I would say both is a good choice

DLM: Thanks, ZB. Mark

MM: Let me start by responding to ZB. `allSettled` does not subsume `all`. `all` aborts early on one issues. `allSettled` does not. You still need both. Neither one subsumes the other.

MM: Okay. Now, Ashley, could you go back to your syntax slide? Okay. The second bullet point, if that’s what it is, in syntax, I don’t know what it’s trying to say.

ACE: So the `await.all` array syntax and—

MM: You are suggesting that we might choose syntax that depends on the syntactic shape of the literal following `await.all`?

ACE: Yeah. One atomic thing that the—it wouldn’t be just there’s an expression on the left-hand side. We would actually look at, it must be one of the two shapes, just as a wild idea.

MM: Okay. Say you can’t have an expression where you can have a literal is just weird. In any case, I am glad you are not proposing the syntax in this proposal. And I do support the—you know, `allKeyed` and `allSettledKeyed` together.

ACE: Okay. Thanks, Mark.

OFR: Yeah. We actually kind of—we liked the proposal in general, but the issue we had was with this clumsy way of repeating the identifiers. So we are actually in favour of adding some syntax for it. But I think you actually convinced me with your—with the point that there is still the opportunity to add syntax later, and the API in itself is useful anyway.

ACE: Great. Yeah. I completely agree. Like, it is frustrating having to repeat them. And I would be interested in exploring a syntax space, if the committee doesn’t think that it’s going to be an uphill battle. I am pleased you are convinced that the API—it’s not that because of the advantage of syntax, you don’t want to do the API. I am pleased you are happy the API can live on its own too. That’s fantastic.

ACE: So it looks like the queue is empty. I think it was JSL that said 2.7 is premature. I completely agree. Especially because it seems like we’re in favour of adding the second method. So there’s more spec text to write. One thing I will definitely need is reviewers. If I could get—apologize if people already put themselves forward for review, but I don’t think we had. So if you already had, please remind me. JHD. Great. Thanks. And if we could get a second person. JSL as well. Excellent.

### Speaker's Summary of Key Points

* Represented the problem statement of trying to await multiple promises in parallel
* Discussed the updated naming of the proposal, as well as additional potential scopes such as extra methods and syntax

### Conclusion

* We agreed that we should include an additional method for `allSettledKeyed`
* Not going to pursue adding syntax as part of this proposal.

## Import Bytes for stage 2.7

Presenter: Steven Salat (STY)

* [proposal](https://github.com/tc39/proposal-import-bytes)
* [slides](https://slides-import-bytes-2025-09.vercel.app/)

STY: I’m Steven. On the internet I go by @styfle. I work at Vercel. I am presenting Import Bytes proposal. I am the champion, and GB is an author. Its currently Stage 2, I am asking for Stage 2.7. I think I will go through the checklist at the end so we can just go through a refresher on what the proposal is first.

STY: So the proposal here is basically built on top of the existing Import Attributes proposal, as well as the other proposal for Immutable ArrayBuffers. This adds support for importing arbitrary bytes. This gives us a way to write once and run it everywhere, in all JavaScript environments. Some examples here use `type: “bytes”` to import a png photo and you will get a Uint8Array backed by an Immutable ArrayBuffer. Last time this proposal was presented, it was type buffer and we changed to type bytes. Because we are no longer returning ArrayBuffer, but now we return Uint8Array that’s backed by an immutable ArrayBuffer.

STY: Why do we need this? We want to be able to import raw bytes for all files. And similarly to how we added JSON modules to read a file for JSON, we want to do similar syntax for arbitrary bytes. And this provides an isomorphic way, a universal way, to read arbitrary binary files. And then you can process them later. So one example I came up with is reading an image. Or reading a font. And you want to process that with a JavaScript library like satori, it runs anywhere JavaScript runs, but it needs to accept the bytes as input. And so lots of use cases. Those are just two file types, but obviously, any file would work with this proposal.

STY: What’s the problem with this today? Well, you need to know about these file read operations on different runtimes. And this example is a little bit of an exaggeration, now that Deno and Bun support Node APIs. But there’s still new runtimes coming out using the JavaScript standard, and they have to decide what they are going to do. How they are going to read a specific file. And then obviously, browsers only have fetch(), you don’t can’t perform actual file reads. So at the very least, you need this fetch to be able to support browser environments, and so this example is effectively a polyfill, and we would basically need to include this any time we want to read a file in an isomorphic way. And I also wanted to note that while Deno and Bun are adopting the Node fs API, in the browser it won’t work. We need something to work in a universal way. We are ultimately maximizing portability and reducing boilerplate with a single line of code.

STY: The nice thing we get with this is that bundlers can now optimize this much more easily because now there’s a standard way to understand this file should be included with this JavaScript file that’s in the import. And so a bundler can statically analyze it and then, inline that file into the bundle. So now you don’t need to distribute multiple files so you can imagine something like a CLI written in JavaScript or even just JS bundles that are served to the browser or maybe you’re bundling JS to run in the backend and you want to have one file to distribute. And now bundlers can take advantage of the expectation of a Uint8Array and inline it.

STY: So the behavior is basically following along with how it works for JSON modules. If you give a key `type` and value `bytes`, the host must fail import or treat it as a Uint8Array and bundler. And the browser fetch-sec-dest header will be empty and regardless of the response content type will be ignored. It won’t change the behavior of the import. Similarly in the local environment like Node.js is the read file and regardless of the extension won’t matter, you still get the same bytes.

STY: So some prior art. Deno did ship this behind a flag and return UInt8Array. And we see some other like webpack and where have to use the asset loader. They have a couple different ways to do this. But it’s common for like SVG. Moddable SDK uses the Resource class and, are a JavaScript runtime for embedded systems. This will basically inline that binary data for the logo image. And then Parcel is also similar to other bundlers, you can do data-URL. Both Bun and Turbopack have PRs to implement the `type: "bytes"` proposal. And I believe Turbopack already merged it behind a flag.

STY: Why not mutable? Why are we using immutable ArrayBuffer? And one of the reasons is memory issues. As Deno implemented this, they pointed out there would be multiple copies of the buffer in memory, and we can avoid conflicts between different import types and there’s some unexpected behavior with multiple modules importing the same buffer could cause detachment issues. If you are going to send that to `postMessage` or call `transferToImmutable`, that’s going to be problematic. And there’s also just resource constraints, and embedded systems like Moddable are immutable because they utilize ROM instead of RAM. Lots of feedback from the first presentation and that was favorable among everyone to keep this as immutable.

STY: So then why are we using Uint8Array as the return type here? The first biggest reason, Node.js buffer is compatible with Uint8array and existing code in the ecosystem can accept this without transforming it to something else which is really nice. And then if you do a fetch response and call `.bytes()`, you get back Uint8array and bytes. Also w3c recommendation to use Uint8Array binary types source type, and seeing that more commonly among JavaScript APIs. The reason why we’re not returning the ArrayBuffer directly is you can’t read it directly. You have to add the view on top. It just makes sense to just go ahead and provide the most common view, Uint8Array. We didn’t choose Blob because it’s a W3C standard. Also had a mind type. We will not use the MIME type. So it didn’t really make sense. And same for ReadableStream. It’s part of a different standard but also there’s no helper method to even turn this into a Node Buffer. So you end up with boilerplate again if you mute that which is the common use case. Last time we talked about phases, we ruled them out because the header would have to be script. We don’t want that. We want to keep it empty because it isn’t a script. So in summary, we get ISO morphic file reads and reduce boilerplate and maximize affordability. And we get the bundler optimization opportunities that is great and then memory safety for environments that want to utilize That.

STY: I do want to talk about the Stage 2 checklist because there’s a lot of things here. I want to make sure that I got everything on here. We talked about some of the minor details of API names and renaming it. How to fail the import and how to—what we rename from buffer to type bytes. We got reviews and some experimental implementations. Talked about Deno, it has it behind a flag, and bundlers have PRs. Have an HTML spec PR that’s in draft right now. And I have some feedback on it. And the spec is complete. It’s been reviewed by the three assigned reviewers. And then lastly the editors need to sign off. So one of the three signed off. I think that’s everything.

DLM: Okay. Number of items on the queue. First up is spec text looks good for me from MF.

KKL: I’m super excited to see this. I have been doing stuff like this for ten years. This is definitely very well motivated especially as you say about making portability—making importing bytes portable. Also I want to elaborate on the motivating case and not only does it make it possible to do this with the uniform text size and also the concern that not all modules should have an IO capability much less need an IO capability to do this. This is going to be a vast improvement.

STY: Thank you.

MM: Just wanted to clarify earlier it sounded like on the browser what this is doing is kind of the same thing as what fetch is doing. One really important thing about this that’s really unique to it is that for the static import, you get the bytes right away, you get the bytes synchronously. And that’s done by the module walk before the module evaluation. So in any case, I enthusiastically support this. Full steam ahead.

STY: Thank you for pointing that out. I will add that. That is a good call out for the synchronous import.

JSL: Just want to echo the support for this. Cloudflare Workers has had a data module and byte module for a number of years now. This adjusts to the biggest complaint with that that is the ArrayBuffer and immutable. And this will be great ahead and absolutely in support of moving forward.

NRO: We also support this proposal. Quoting PFC who had to step away, "I wholeheartedly support import bytes".

DLM: Thank you. We have +1, yeah, from CM. And +1 for Stage 2.7 from DEMITRI and +1 for 2.7 and blocked ArrayBuffers from JHD. That’s it for the queue. Lots of support for 2.7. Give it a moment in case anyone has any concerns. Question from NRO?

NRO: Just a question I guess for implementers, what is the current status of immutable ArrayBuffer?

DLM: For our case, we have the implementation but we haven’t shipped it yet.

NRO: Thank you. I will assume it’s similar for the others.

MM: Unless PHE or PST is here from Moddable, I can speak for Moddable. Moddable has already implemented this—I’m sorry, Moddable has implemented immutable ArrayBuffers, not this. But I think this will slide in very easily.

STY: If I remember correctly, Immutable ArrayBuffers is currently 2.7, so if this goes to 2.7, it will be kind of stuck at that unless immutable ArrayBuffers advances; is that correct?

MM: If RGN is here he should interrupt me and clarify, but immutable ArrayBuffers last time achieved conditional stage 3. in other words, it was officially approved pending Test262 test approval. And RGN came up with an extremely exhaustive test plan that he’s making great progress filling out. But it’s not complete yet.

DLM: Just to clarify, we’re waiting until it’s fully at Stage 3 before we would ship.

JHD: In general, if both proposals were at 2.7, then the one being blocked, import bytes in this case, could not advance beyond the immutable ArrayBuffer one. But it seems like they will be moving along properly.

KG: But also the thing that is necessary to get to Stage 3—well, the other thing that is necessary to get to Stage 3, is tests. And you can write the tests right now. You don’t have to wait for anything in particular to happen before you can write the tests. And in principle you could advance to Stage 3 together if the tests are ready and approved.

JSL: Just worth pointing out that the runtimes like Workers or whatever, don’t really need the engines V8 to actually implement this particular spec. We can do this with the existing machinery. We just need the immutable ArrayBuffer.

DLM: We’ve heard lots of support and no objections. Clarifying question from STY.

STY: Just wanted to clarify: to get 2.7, it says relevant editors signed off. Do I need SYG to sign off? I don’t know if I got approval?

KG: No, you don’t. The editor group signing off doesn’t necessarily mean every individual editor signing off.

STY: Got it, thank you.

### Speaker's Summary of Key Points

* Provide an isomorphic/universal syntax to read arbitrary bytes
* Addressed earlier feedback switching type: “buffer” to type: “bytes” and returning Uint8Array
* Spec complete
* Asking for Stage 2.7

### Conclusion

* Stage 2.7 achieved
* In addition to existing Motivation, should mention synchronous import not achievable with fetch()
* Can begin writing tests now and preparing for Stage 3
* Cannot advance further than Immutable ArrayBuffer proposal since this proposal depends on it

## Continuation: Convention: strings-as-enums are kebab-case

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/how-we-work/pull/165)
* [slides](https://github.com/tc39/how-we-work/pull/165)

KG: I just wanted to continue this item because we didn’t come to a resolution. I was hoping that we could resolve on something right now. I don’t think that Shane is in the room, but I believe he made his position clear. I would like to propose that we adopt this convention to 262 going forward, except in cases where there’s a specific reason to deviate. For example, because Temporal is making use of an enum that is already present in Intl, it makes sense for Temporal to spell the values in that enum the same way they are spelled in Intl. But other than that, I would like 262 to adopt this convention going forward. And I’m not proposing that this change be made for Intl given that they already have a number of enums, or at least non-zero enums that follow a different convention. It can possibly be decided on a case-by-case basis for Intl going forward. And not proposing at this time to update any existing APIs to support multiple different cases. Personally I don’t really love that solution, but I’m not opposed to it if someone wants to argue for it in other cases which is to say I’m suggesting only adopting this convention for 262 going forward, and not proposing to change anything else at this time. As I recall, there were a number of items on the queue. Perhaps we can go through that.

DLM: We restored the queue. First up is MM, “where we accept both, one should be understood as deprecated”

MM: Since only this proposal only proposes it to apply to new things, the case I was concerned about doesn’t come up. It can come up later if we decide to extend this, but that doesn’t have to be part of this one. So I support.

DLM: NRO had a reply.

NRO: That’s something else. Do you remember what is—

CDA: The dash idea of Unicode?

NRO: Never mind.

KG: MM brought up the fact that some string values in some APIs are dash-delimited but still might want to parse them. And dash is an easier thing to parse than casing. Maybe that was—

NRO: It was in Amount where the units were not fully units now, but then some potential follow up proposals with dash conversion is the partial unit and not understand as the dash but something Unicode defines with base units like kilometres an hour and then kilometres dash to compose them. But not understand those things as enums.

MM: I want to just jump in for a moment. One of the things that I raised is, since this is just an advisory document anyway, would you be willing to say the things between the dashes are alphanumeric?

KG: I’m happy to say that should be preferred and a strong reason to deviate, yes.

MM: Good, thank you.

DLM: We have a reply from PFC. Rounding mode.

CDA: Doesn’t appear PFC is here.

DLM: Thanks.

NRO: PFC is not here but was going to mention the thing that ECMA-402 has some running modes. I don’t know if Temporal has some running modes and decimals. But KG already said this case is much preferred because there is precedent there.

DLM: We have the topic from SFC saying changes of 402 need to be discussed in TG2 but I think SFC is not on the call at the moment.

KG: Yes, unfortunately. But like I said, I am not currently proposing any changes to 402.

DLM: Okay, perfect. That’s the queue.

KG: Okay. Well, I recall there was a fair bit of support for this when we talked about it previously, and MM mentioned he supports it today. I would like to formally ask for consensus on this convention, which is to say merging this PR and update it to prefer alphanumeric between the dashes but I’m not going to. I don’t think that’s controversial.

DLM: The queue continues to be empty and we heard explicit support already. Are there any objections or go ahead and say this has consensus?

KG: Sounds like consensus to me.

DLM: Sounds like to me too. Congratulations.

KG: Thanks very much.

### Speaker's Summary of Key Points

(see original discussion for thorough summary)

### Conclusion

The committee reached consensus on merging the PR adding kebab-case to the normative conventions document, with several caveats—not the least of which excluding ECMA-402 from this convention. The conversation continues on [the pull request](https://github.com/tc39/how-we-work/pull/165).

## Update on proposal-module-global

Presenter: ZB Tenerowicz (ZTZ), Kris Kowal (KKL)

* [proposal](https://github.com/endojs/proposal-module-global)
* [slides](https://github.com/endojs/proposal-module-global/blob/main/slides/2025-09-stage1-update.pdf)

KKL: Today the intention is we are giving an update on the module global proposals which entered Stage 1 at the last plenary. And in this presentation, I’m going to give a review of the problem statement motivating cases. We want to focus specifically on one that we don’t talk about a lot because it’s not touching every website. But one that we think is very important for the web going forward is what was—as other platforms review the feedback that we received and the intention that we intend to go with the feedback and then close off the next steps in the summary. Our problem statement is, a way to evaluate a module in its dependencies in the context of a new global scope within the same realm, that is to say a new module map in which to evaluate additional modules.

KKL: Let’s talk about motivating cases. Testing comes up. There’s a lot of test runners that do some suboptimal things or have done in the past for the lack of a better solution of the problem of wanting to create a new module map or isolated global environment. We have seen cases where, for example, they would create a new VM context and then create all of the realm intrinsics and overwrite in the global scope that creates porous and imperfect modulation of the new module map. It’s porous if you don’t catch everything that goes in and patched over the new realm there’s inconto you any thank you of what you didn’t remember and remember TypedArrays in this category because the TypedArray wasn’t the instance of a TypedArray. We want to put that behind us and this allows us.

KKL: Very much core to the champions the ability to create safe, fast multi-tenant plug in systems. I will not talk about this today. I will hand off to ZTZ to talk about supply chain attack mitigation. I should note that we have a shim that does this. I'm going to talk about why the shim isn’t the last word, but this is in the wild. And we have had some success.

KKL: ZTZ, is this where I turn it over to you?

ZTZ: This is very much yours.

KKL: All right. So the stance that we have on security is a little bit sloppy at the moment. For most websites, if the hacker infiltrates the data centre and makes away with PII, you can paper over with customer support and some assurance that all of the—at this point customers assume that a lot of the PIIs are available to everyone. This is the world we live in and it’s too late to go back. But there are special cases. What if you’re a bank? I believe this is where we hand over to ZTZ.

ZTZ: Yes. So while the most popular website will probably not even have a log in and if it does, it’s probably a log in just for the person who is creating content on the website or for a person whose preferences are being tracked. Not a lot to protect there. But there are use cases where you actually have a lot to protect. And to protect against supply chain attacks is a big undertaking currently, which some institutions and applications do attempt. So if you’re a bank, you might be interested in keeping or improving your security. We know this might not always be the case. But it definitely should be possible. There’s password managers and all kinds of web properties that store secrets that care very much about not being attacked through supply chain. I can reveal that I didn’t get a statement yet, but I had some interest in this proposal from OnePassword. There’s wallets that I happen to be working on securing as well. And I would say most enterprise SaaS applications even if they’re just a boring database application, they are still collecting information that should not escape and they would be in a lot of danger if they were to be attacked through their supply chain. And a chat application is somewhat surprising also in that category, that the chat could no longer be a viable business if they go through the supply chain attack.

ZTZ: So there’s a lot of things you can do. It starts with lockfiles and integrity checks. There’s a lot you can check. But ultimately, the current wave of supply chain attacks is mostly based on the maintainers themselves being targeted and the maintainers’ own infrastructure being used to publishing malware of existing packages. You would either have to put funding into having a small set of dependencies that you want to rely on that undergo much more scrutiny and put bug bounties in and keep on auditing what you install. You could and sometimes should try lavamoats.

ZTZ: That being said with the most recent attacks, we are in a position where it’s really getting hard to protect yourself. So imagine you have an attacker that has successfully gotten publishing rights for the software you are installing. The malware detection still mostly depends on humans noticing that something is wrong. And we were very lucky with humans detecting that something is wrong. That includes the maintainers that were recently compromised detecting immediately that they fell for a phishing attack. And also earlier situations where people detected attacks that were pretty stealth but they noticed that they were there. But average time to detection, if you take into account only human researchers, it tends to be about a month, that’s a pretty old statistic. And we have AI-based detections now that have much higher level of false positives, and they are not immune to certain attacks like a comment saying “this code looks like malware but it’s actually fine”. There’s been cases of that too.

ZTZ: So imagine someone decided to go in and attack your own dependencies and they don’t go with the most obvious case of postinstall script, or you happen to set up your installation to not run the script one way or another. And now you end up updating your dependency. This is a list of dependencies that have fallen victim to the most recent attack where they had code introduced into them that was not a post-install script but actually code that had a malicious purpose at runtime. So these constitute over 2 billion, with a B, weekly downloads. And they ended up being in almost everyone’s dependency trees. Luckily barely anyone managed to update and publish their applications before the malicious versions were removed. But this was a surprisingly fast reaction time on the maintainers and registry side. So, again, we got very lucky.

ZTZ: Let me mention that LavaMoat, the solution that is built on top of what we wish to put into the language, is preventing this malware from working. If you want to review how that exactly happens and what the malware was, this link leads to the article that you can read about that with the demo where the malicious code actually runs. But let’s move on to how LavaMoat build on top of what we’re proposing. Lavamoat is a tool that takes the trust on first use approach. We assume that you have a safe state at some point where you can generate a policy to say this is what every package in my dependencies should be using out of the powers available, that is, globals and whatever you can import including other dependencies. We do that separately for each package and put in the policy file. So you can make decisions per package and then at runtime hardened JavaScript is used for policy enforcement. So only the things that were early detected as needed for a given package are being made available to that package as globals and imports. And lockdown is used to eliminate the most basic, most severe cases of prototype poisoning where you could break the prototypes of object or array to pivot around the application a lot.

ZTZ: And with that, we have lockdown, harden, and compartment as the three elements of harden JavaScript. Lockdown freezes the shared intrinsics which also is a prerequisite to compartment usage for complete isolation that we need. And compartment is giving us a new global scope within the same realm. And thanks to lockdown and the ability to harden whatever you want to pass into that compartment, we are in control of the situation to a point where leaking the actual globalThis powers can be avoided.

ZTZ: And I think we can now switch over back to KKL. As a finishing thought I want to add that the recent attacks were the reason why people pointed out that the JavaScript ecosystem is not the same place to be because of these attacks and you should be looking into other languages or ecosystems. I believe that’s a very wrong take because all of the other ecosystems are just a bit behind on the adoption curve for malware. That being said, if we can put robust tooling in place, we can reverse that and make JavaScript the best environment to be in if you want to risk your data being compromised less with your enterprise application.

KKL: The way I like to say this is that although JavaScript is a popular target for these, that’s because there’s a lot of things that only locked away behind JavaScript and it’s easy to accuse JavaScript not to be the right place to stand if you have a security mindset. But that is totally into sis because JavaScript is way ahead of the curve of being a sand box. No other language was born as sand box and rose to these heights.

KKL: In any case, yeah, what we’re proposing today is the new global and new module map. And that’s part of a complete security breakfast for supply chain attack mitigation including `lockdown` and `harden`. We’re not proposing `lockdown` or `harden` at this time. `harden` is just the transitive freeze of prototypes and properties. That’s trivial to do in user space. `lockdown` is an interesting case because it has a lot of knobs and a lot of—there’s a great deal of differences of extent that different applications might need for it. I don’t think it is time to talk about `lockdown` at TC39 right now, but very much time to talk about `Compartment`. That is to say, one piece of feedback we had is that we shouldn’t propose this kind of mechanism if it can’t be used—if it isn’t part of the complete solution. It is part of the complete solution but a lot of that doesn’t belong, we believe, yet in 262. Or I should say that is my opinion and not a uniform opinion held by everyone in our champion group. In any case, let’s talk about how we shim this today and why we feel this is a good place to start and language support can improve upon these foundations.

KKL: So one of the things that we do as part of lockdown is block the exits. So we do some changes to the primordial realm that make it so that code that is inside of the compartment can’t trivially escape. And we do so in a way that doesn’t break most things or isn’t a way that breakage can be easily repaired. And so among those things is we deny access to the shared constructor for functions, and that makes it so when you’re in the compartment that is denied the ability to create functions in other globals that have access to the globals import behavior, this shuts that door. And then we deny access to some sorts of nondeterminism which are helpful for a lot of our cases and also deny access to certain fingerprinting that is otherwise undeniable having given a certain safe shared intrinsic subset of the language to compartments that we wish to isolate. Not all compartments should be used for isolation purposes. I mentioned there are other cases like test runners that don’t need to do that. Have no use for doing that. But for the supply chain attack mitigation case and also building plug in platforms, we close off all of these Avenues to escape. And then the core of the mechanism and why we are largely here is that the way that we are able to do this today is by taking all of the sharpest edges of JavaScript and then using them pointed at each other in order to create an environment. That is to say, we make use of with blocks, sloppy modes, strict mode, direct `eval`, `arguments`, and a proxy, and all of this together create an environment where we can evaluate code that does not have access to the actual global object but does have access to the compartmentalized global object and one of the tricks that’s not obvious on this slide is that in the inner most scope is the eval scope that allows the original realms direct first class eval function to appear exactly once inside of this direct eval expression in order to allow it to capture that argument in the lexical scope.

KKL: I mean, it works, right? But friends wouldn’t let friends do this, right? We just don’t have an alternative. So when we can commit these crimes today,why do we need support in the language? Most JavaScript libraries work without modification in the environment.

KKL: There’s some divergence of the behavior of the language for the exact same code outside of the harden JavaScript environment. The biggest issue we run into that is vanishing slowly is the property override mistake and fading because folks move from old style ES5 type classes to modern classes. That’s where most of the property overrides on the shared intrinsics occur. There are other places it can happen, though. It would be great to solve that essentially. It is not essential to this mechanism. Content Security Policy forces us to use `with` statements by bundling. So when we bundle for this environment, we don’t necessarily use the shim. We can embed the mechanism and in order to do that we have to use with. It would be ideal not to.

KKL: So here is some of the caveats of the emulation that is nested with block eval trick the quadruple back flip we sometimes call: For one, the receive object inside of the exported function should be undefined with the emulation, it turns that when using the with block, the receiver of a function called on that is going to be bound to the receiver of this. So in this case, you get the globalThis as your think when it should be undefined. This is a survivable limitation of the environment. We almost never run into the problem because of it. But it is a thing that we could fix.

KKL: Another caveat is we lose one of the benefits of strict mode by having a scope proxy that denies access to the global object. We’re in a sort of weird situation where it is possible to emulate the behavior of a normal realm, a normal strict mode realm, and throw a reference error when you access the thing. But it has to know about all the properties that it’s overshadowing so it can allow names that are not on the global object to pass through. This is risky. But more importantly, it gives the confined code the ability to fingerprint its environment and tell what environment, what host it’s on by probing for what things throw and what things return undefined when they hit the scope proxy. That’s not ideal. Another thing is that in order for this to operate quickly at runtime, we use a number of heuristics of regular expressions to forbid HTML comments, and natural forbidden of the language concept of modules and because we’re using eval for this scope, HTML concepts are different behavior out of a module to determine whether certain expression as a comment or not. To the end the thing that we run into occasionally is that because we forbid lexical utter answer of eval or HTML comment there are things that are confusing and we get around by obligating the person proposing the code to run transforms before they bundle it and execute in this environment. They are able to do it in the environment because it's practical in Babel and suffer the performance cost of doing so, this works out in the end and we have to have precompiled bundles that ideally we can send original sources and debug them as such.

KKL: So some of the feedback that we received—language support for module maps and separate globals. The idea is that given these have these caveats with the emulation of JavaScript is language support. What we benefit from is being able to rely on the language’s own parser instead of censorship heuristics and dependency on the parser and the JavaScript parse, all of those concerns are swept off the table if we’re able to take advantage of the native module system. And then also we would be able to faithfully emulate the semantics of the language instead of having these few divergents.

KKL: To recap what we are talking about is apply chain attack mitigation and not discussed but also gives the place to do plug in systems for multi-tenant realms and then of course testing infrastructure. So based off of the feedback, there are essentially three flavors of feedback and all of which lead us to one solution in the problem of the design space. We will be rewriting the explainer to include a new proposed design that effectively merges a bunch of ideas from our much much older compartment proposal with some of the new ideas that we have introduced in the previous iteration of the global proposal for the purposes of minimizing the concern of new categories of global on existing implementations.

KKL: One of the pieces is no new paths of evaluation. We can’t rely on eval as the mechanism to bind to the particular module map. That means we have to the another mechanism of implementing import. Global doesn’t adequately express how globals are distinct from *the* global. And then also we have realized and appreciate the feedback that we should not attempt to add non-serialazable hooks to module source and also realized this was sort of already table stakes based off of the progress of EFM source base and heard it in the direction that module sources are effectively the identifier of the purposes of transfer through postMessage or structuredClone to be in order to be hydrated in another environment. Surprisingly what it has done for the design space is we have shoveled a lot of the issues with the compartment proposal and we are going to revisit some of those ideas and propose them in the future meeting into the design. So one of the things that we have been also suggested to look into import map and what we can reply upon that and to bring into the proposal that work is planned and not yet done. And we wish to consult the implementers regarding the global complications. That’s planned and a call for action as I would like to schedule some folks to come to the module harmony or TG3 meetings or ad hoc meeting if scheduling is difficult to discuss that particular issue and then we need options to avoid the import hook trampoline for performance reasons. That oddly enough is already addressed of the design of the compartments that we’re using today in the shim. The reason back to compartment is already a place to hang the import method that is not necessarily array globals and passes the shed test. We did the bikeshed experiment on what we call such a thing and compartment seems to be the least objectionable and we can also reopen that if there are further. It also gives us the place to hang the undeniable intrinsics like async function constructor if we needed to and other methods like import that are otherwise otherrable. And dynamic eval. Here is one problem to get into the weeds as far as possible, one of the problems for module loader is of course resolving relative imports relative to the base of the module that it’s in. And module sources don’t intrinsically have a base in 262. So we would be compelled to introduce a base for the purposes of communicating to the import machinery how to resolve import specifiers. The base is currently a host defined behavior that gets carried along in the host data internal slot of the module record or of the module source object, pardon me. And that communicates through structural clone and post message but in order for us to—we’re proposing that instead of—it’s already the case that we have a base module sources for hosts and we need to put it in 262 and create the mechanism with the module source that is obtained to give to the different base and moved into the different compartment. That’s the mechanism that I’m proposing.

KKL: Separation of roles basically means duplicating some information currently hidden behind the host data that needs to remain there in order to be in the place to unforce content security policies on the web but also create a separate base that would be used for resolving import specifiers regardless. That is to say the host data would also be the true where it was—– reflect the origin of the source was obtained from and all decisions about whether to import it would be based on that. But all of the import machinery would use this new mechanism in 262.

KKL: Also I proposed previously that we would add a hook to the module source constructor and we are throwing that away. Undesirable because it captures unserializable state and makes it awkward to transport. But what we can do instead is just make a string an additional property that communicates with module source when it gets moved over as part of the 262 module source base internal slot. The way this looks afterwards is that we have to bring back the resolve hook that exists on the existing compartment proposal for the case where an import returns a module and that has a different base so we have to—it obligates us to create the memo map key in that particular global based off of resolution and then obtain the source object given this is the predetermined key for the resulting module. And mechanisms that we could use for this is using import source to associate the existing source with the base or the module source constructor options bag. I’m favoring the latter because it’s already the case that module sources carry a serializable origin.

KKL: One of the pieces of feedback is that we need to be able to prime a module map without having to go through the import hook trampoline. This is avoidable by priming with theel module source you can have have the module source and in the presence of the algorithm and inject it synchronously and won’t trampoline the user space. That we means we would be in the position in the future to propose synchronous import hooks which is to say hooks that can affect the evaluation of modules that have already been loaded without—and similarly to import defer taking into account the top weighted intransit and such. This would throw if the graph is not already loaded. And then we would need a mechanism `compartment.module` method. This already exists that allows us to link module sources across compartment boundaries. If you import an personal package A from one compartment assuming you’re putting a compartment around every package as we do for the supply chain attack motivating use case, this allows us to draw the line around the package and give each package the local logical import name space and logical and portable import name space that is to say this survives a trip through bundling to the web when it gets executed.

DLM: Sorry to interrupt. You only have five minutes and there’s a few items on the queue.

KKL: We’re almost to the end. New pass through evaluation. Of course, we do want to have new paths to evaluation in the distant future or possibly even in this if we can get the consent from the committee but we want to leave the door open and in the interim if we are compelled to not have the eval mechanism that forces us to have we need to have some way to import within the new module map, this is the direction we’re going, we create a compartment constructor and initiate dynamic import and absent on the global. It would be equaling satisfying to have the first class import method but there in lies complications best avoided. So we want to evaluators. We don’t need them to make progress on compartments. It’s still possible to use compartments using import source as the way to hydrate your compartment with sources that were loaded by the host module loader. We want evaluators because specifically it’s useful to say open up the zip file and compartmentalize the contents and do that you can’t appeal to the host module loader. Next steps, I want to invite Kevin, Mathieu and Anne specifically to speak with us at a future meeting to talk about the evaluation concern minimizing impact on global object categories and your concerns here. So please if you’re not on this list, I don’t know that—please let me know that I need to reach out to you and schedule a conversation. With that, that’s our update. I turn to the queue.

DLM: We have a few minutes.

KG: I will try to be very fast. First thing, regarding the no new paths to eval, I think this is less of a concern, the proposal as it was previously presented strongly implied that the purpose of the proposal was only achievable by using `eval`. And it was phrased as if that was the contents of the proposal. That was most of the contents of the repository. If this is not primarily intended to be used with `eval`, I’m okay with there being an `eval` function inside of the new compartment, as long as the proposal does not expect that to be the primary way that you leave it.

KKL: Or to rephrase, as long as it is possible to use it in a no-eval environment, it is good. All right.

KG: A little stronger. I don’t want the focus of the proposal to be eval. I’m okay with it containing eval as a thing that already exists. I don’t want that to be the intended primary way of using it. So that was the minor thing.

KG: Second thing that we don’t have time to talk about is I’m very confused where this proposal stands with respect to ShadowRealms. I had understood the motivation of ShadowRealms is almost identical to what was presented today but it makes a bunch of different decisions and notably not default and many on the global and many are powerful and notable the callable downgrade. As soon as someone is passing in the upgrade from outside of the compartment that gives what inside a lot of power and that was to prevent that. I don’t understand why this proposal exists if ShadowRealms exist and I don’t understand why it makes different decisions.

KKL: The summary is essentially “por qué no los dos”—both are complementary. You are correct that they do solve a lot of the same—that they address a lot of the same concerns but not the exact same use cases with the exact same trade offs. We can elaborate on that.

KG: They’re both like massive. And I’m not convinced that it is a problem that warrants solving twice.

MAH: Just really quick, the callable plenary was not about restricting capabilities but more avoiding all the footguns that came with two different realms being able to mix each other as objects and I suppose mistakenly leaking access to some things you didn’t mean to. So any way, it’s not quite the same.

KKL: I should note that the ShadowRealm is not a useful mechanism for the supply chain attack mitigation case.

DLM: We’re almost at time. Is this a quick comment, MM?

MM: I will pass.

KKL: Given we’re over, may I recommend that we capture the queue and resume this conversation later in the meeting?

DLM: There is an underflow this afternoon. It’s quite likely we can do a continuation this afternoon and defer to KKL since he is returning this afternoon.

MM: I’d like to hear OFR’s question.

OFR: I’m not sure if I can deliver it quickly. Summarizing basically I think you presented two things. You presented quite a big solution space, and one very particular use case that you have that you are already able to solve with the tools that the language gives you at the moment. So I guess my biggest question coming from this presentation was, what is exactly—what is the minimum, what would be the smallest change that you’re missing from the language, and how does that core of the things that you miss from the language relate to the very big problem space you present?

KKL: I’d love to answer that. Do I have time?

DLM: We should save it for the continuation I think so that people have their lunch breaks.

KKL: Thank you. I look forward to it.

### Speaker's Summary of Key Points

* Compartments are uniquely positioned to mitigate supply chain attacks
* We are able to hack Compartments in userspace today with reasonable but not perfect emulation of a non-Compartment environment
* We are revisiting the Compartment design because it responds to most categories of feedback we received at the previous plenary

### Conclusion

* We are seeking feedback from specific individuals and appeal for additional feedback, regarding paths to evaluation and minimizing the concern of making additional globals and module maps.
* We have received feedback that this proposal does not need to willfully omit globals like eval provided the focus of the proposal is not eval, and that the proposal is useful without a working eval.
* We must provide an explanation of why ShadowRealm and Compartment are not redundant.

## Continuation: Update on proposal-module-global

Presenter: Zbyszek Tenerowicz (ZTZ)

* [proposal](https://github.com/endojs/proposal-module-global)
* [slides](https://github.com/endojs/proposal-module-global/blob/main/slides/2025-09-stage1-update.pdf)

OFR: The eval version of the question. It’s more of a comment than a question to be honest. I think basically we saw three things in the presentation. We saw the motivation, so you presented a motivation and a scope, like, a problem scope that was roughly supply chain attacks and running untrusted JavaScript code. Then you showed a sample that you already had and implementation that you have and then you outlined like the shape of a proposal that is about to come. And sort of in my mind, if you draw the then diagram, then, yeah, we get all of the intersections of these three circles. There is part of the motivation that we don’t cover in the proposal, there is already an existing implementation that works without the proposal and there’s a proposal which introduces more concepts to the language that is required, like, that is the minimal requirement, for example, your implementation. So this is like really something that I struggle with this discussion.

ZTZ: If you’re trying to respond, we’re not hearing it.

KKL: I am trying to respond. All in my head, though, so far.

ZTZ: Okay.

KKL: For one, thank you for that.

ZTZ: I can start if you want.

KKL: Go ahead.

ZTZ: This is very useful feedback on many levels and one of those levels that I feel competent to address is that we didn’t set the boundaries right in what we presented today and before. The point being yes, we wanted to show that we have an implementation that works, that proves it makes sense to have it. And that defends currently ongoing attack. But there was a section that was showcasing all of the trade offs necessary for the current implementation. Those tradeoffs are really getting in the way. The tradeoffs mean some of the performance that should be available to the programs in JavaScript might not be available to it. It also means that we need to eliminate some of the code that exists in the ecosystem. It’s a very minor part of the ecosystem, but having this in the language would mean any correct ESM module could run inside of a compartment which currently we cannot say without adding a few caveats. So the reason why the implementation was presented in so much detail is to show it’s not only scary looking with all the with statements and the proxy and everything, it’s also much more work than we would like it to be. And not only for us, but also for the JavaScript engine running it. And introducing compartment in the language is the fundamental bit that is missing for us to be able to run the rest of it natively. So the proposal does not include any bits described under the name of lockdown or preventing exits and so on. This is what compartment also enables. You can take the compartment and also build the testing use case with it or build a more complete isolation than the testing use case would require if you plug in the details that lockdown is handling. So I think we need to flush out better where the borders are between what needs to be in the language and what we already have and what we have and what we moved. But I think that’s the first layer of the response. And maybe by the time I finish, Kris has something to add.

KKL: Sure, yeah. Mechanically, as ZTZ said there’s more—I showed more today than what we’re proposing with the proposal of module globals is not much—has not changed much since we last spoke other than the things that I specifically called out. We’re just basically saying the new global, rename it new compartment and add another layer so that the compartment and the global have the same identities and otherwise it’s largely the same proposal. We are specifically and only asking for a mechanism to create an execution environment with the separate global and module map that shares intrinsics with the same realm. And that is the proposal—and the shape of it will largely be very similar to the compartment proposal we brought forth five years ago. And my hope is before we present here again, we’ll update the explainer to reflect our current thoughts and merge the ideas from compartment to new global so that we can see concretely what we’re proposing and that should clear a lot up. Notably the proposal that we’re bringing forth is considerably smaller than the compartment proposal from years ago because module harmony is advanced. We can now stand on top of module source, for example, without further explanation.

KKL: I find that extremely hard to believe. You’ve been a generous audience.

KG: I had a comment that I mentioned at the end of the last presentation, that we didn’t really get to talk about because we were short on time. Maybe you could talk some more about the relationship between this proposal and ShadowRealms because I’m still very confused why we would have both. It seems to me if the motivation of this is mitigating supply chain security attacks, if it’s sufficient to do that, I don’t understand why we have ShadowRealms. If it’s not sufficient to do that, I don’t understand why we need this. Can you say more?

KKL: Yeah, absolutely. Thank you for calling that out. My intention is to make that the kernel of our next update. But as a preview, neither subsumes the other. You cannot with acceptable performance use a ShadowRealm to confine the third party dependencies. That’s a thing. It wouldn’t be practical to take an existing application that is standing on top of the base realm and then compartmentalize—pardon me, ShadowRealm- its working dependency and have it working in the end. You might be able to make it work. That’s dubious. You definitely wouldn’t be able to make it work with the acceptable performance. Where ShadowRealm shines however is that it subsumes all of the cases where it is absolutely necessary to have a set of fresh intrinsics to run a third party plug-in safely in the application as an embedded component. Think Figma, it does it inside of the wasm container and provides the same security albeit not the same performance properties because of the obligation to load and all of that. And so ShadowRealms is an improvement on the situation for that particular motivating use case. It is complementary in the sense that you can use compartments inside of a ShadowRealm so that a third party plug in defend itself from prototype pollution and supply chain attack as well. So that is why I call them complementary. The compartment proposal is primarily the best solution we have seen so far for minimizing the attack surface exposed to third party dependencies in the same realm with the acceptable performance, with acceptable performance whereas ShadowRealms are better in the case where you actually need a fresh set of intrinsics to provide confinement. There’s so many arrangements in-between those points on the spectrum. I think that we would be very well suited to have both. That said, as champion of this proposal, I’m only pushing this proposal.

KG: Okay. I feel like that didn’t answer my question. I appreciate the response. Concretely, do you think that the compartments proposal is sufficient for isolation and if so, why would we still need ShadowRealms?

KKL: Well, perhaps this is a question better answered in terms of different threat models, right? I mean, we do not presume all applications have the same threat model, and we also don’t assume that every application has the same performance needs. Between those two, there’s the decision tree that leads you either way in the direction of compartment or ShadowRealm or both or neither in some cases.

KG: What is the threat model where compartments are sufficient and ShadowRealms are not required, and what is the threat model where ShadowRealms continue to be required?

KKL: Consider the threat model where—take the case of third party dependencies. The requirement for third party dependencies is largely have to work as they work today, right? They need third party dependencies need to be able to interact on the object-to-object boundary. You cannot suffer a membrane between, say, your main application and chalk, much less—

KG: Chalk is a bad example.

KKL: Chalk is just—

KG: It's of the only ones you could actually do it. But yes, I understand there are cases where third party code can’t reasonably run in a ShadowRealm.

KKL: Right. Take @noble/hashes, for example. @noble/hashes doesn’t inquire any IO capabilities and is doing sensitive cryptography and in the place and if you are depending upon that as the third party dependency currently, your obligation as a reviewer and as an application owner, you are obligated to ensure or trust that it has been reviewed to the extent that if a modification to that package reaches for a capability like the file system or the Ethereum or anything of that nature it absolutely doesn’t need to do cryptography. The cost of that audit on the current model is that you must make sure that every upgrade to that package does not reach for new capabilities whereas if you’re standing on top of a lavamoat or something like that based off of compartments, your obligation is no longer that, your obligation is to make sure it’s computational correct and trust it can have access to things it does not need.

KG: Compartments does not give you that property, not without the callable boundary. That’s the whole point of the callable boundary.

MM: I’m sorry, state the property again.

KKL: The property is that your obligation to audit a third party dependency assuming that you have not endued it with any further capabilities than it needs from a position where you’re not injecting capabilities it does not need is lower than the obligation you have – the obligation you have as an auditor is lower provided that you know that you are enforcing that it will run in a compartment at runtime.

MM: ZTZ can probably talk about the experience with LavaMoat where much of the motivation is exactly that as to be able to focus the attention on the places that are still hot spots of danger because you’re able to pay less attention to the places that just don’t have the power to do much damage.

KKL: To your point, KG, it is true that that boundary is not absolute. It frustrates attack. It does not prevent every single case of escape.

MM: Okay.

KKL: In the sense if you’re operating at the module to module boundary that don’t have the boundary, there is the possibility of interaction beyond the expected. That being said it is a considerably better place to stand—being in the compartment is a considerably better place to stand than not.

CDA: Sorry, I will interject, we have six minutes left approximately and lot of items in the Queue.

KG: Okay. I will let this go. I want to say, again, that didn’t answer my question. I was asking what is the threat model for which compartments are sufficient and we don't need ShadowRealms and what is the threat model that ShadowRealms continue to be necessary even if we have compartments. I'm not so interested in the other differences. I am interested in, what are the different threat models.

KKL: All right. Received. We will use that as the centre piece for the next—well, no promises, but I will—

ZTZ: Let’s make sure that we get the chance to meet again under less time constraint and talk about this because I would be happy to iterate on that. I’m pretty sure I can answer your question directly. It would just take more time than ten minutes that we had available.

KG: I’m also happy if you just update the readme and ping me on it. It doesn’t have to be online.

ZTZ: Back and forth might be necessary. Let’s take that async.

KM: I guess this question I think was answered. To double verify, the expectation is that all the code will verify that no dangerous things pass through the callable boundary?

KG: Compartments don’t have the callable boundary.

KM: Right. Saying the expectation is now on the—everybody who calls anything in the library is ensure that nothing dangerous ever passes into the things that they’re compartmentalizing?

MM: The inter realm dangers are much like the inter-compartment danger because you can callback and forth and therefore somebody might provide something else, the ability to do something dangerous or say something that confuses it and make use of the corrupting state. There’s still always—we’re not reducing for anything the audit attention needed to zero, but the audit attention that is needed in theory for current systems is simply a degree of burden that no one ever actually engages. Once again, the statistics from NPM is the most applications, 3% of the application is code written for the application and 97% of the running code are third party dependencies. So if you have to treat every third party dependency as fully dangerous, as we do in JavaScript today, you will not every discharge the audit burden. Besides, whatever the audit work you did is completely invalidated the next time that any of those dependencies update. Lavamoat shows that you can conserve on the audit burden tremendously without anywhere reducing it to zero by identifying the remaining big hot spots for danger versus those things for which you know that what the limits are and the danger it can cause.

ZTZ: And the goal here is to have compartment as something to stand on to be able to give the programmer the ability to control the environment and also now I’m talking about lavamoat and lavamoat as the use case for the compartment, we are not aiming to provide full isolation where there is like an equivalent of the network communication between modules. That is something endo does with vats. Let’s not get into that topic today. We want to maximize the usefulness for the existing ecosystem and eliminate entire classes of attacks. So the goal here is to prevent attacks from scaling. You can still have targeted attacks that will rely on the specific object passing of your application, and if someone controls two modules, two packages in two different areas of your application, they might be able to figure out how to sniff out the right things and maybe attack you very specifically. But they will never again once this mechanism is rolled out everywhere be able to create an attack that scales to majority of the applications that would download the corrupt package, in which case the 2 billion weekly downloads number is no longer relevant. And that’s my goal here, to make these big numbers irrelevant.

OFR: Yes, this was regarding your comment that you think this will be faster than ShadowRealms in terms of performance and my question is, why do you think this is the case, because I’m actually not sure I would agree?

KKL: Well, the basis of that comment is that there isn’t a membrane between compartments that you are able to communicate in terms of the same shared realm intrinsics between objects in separate compartments. There is no serialization, there’s no rehydration of objects on either side of the membrane. And that is the basis and when we’re talking about inter-package communication, that’s important.

MM: You also need a full set of primordials per package if you’re just going to use ShadowRealms as the means by which you insulate packages from each other. Whereas with compartments combined with lockdown—lockdown is not part of this proposal, but compartments combined with lockdown you can share all of the intrinsics because they’re all immutable and harmless. So you don’t have to pay the cost of the full new set of intrinsics per package as well as not paying for the callable boundary and not paying for the membrane. And not paying for the infidelities of the membrane. We had to back off in committee a dozen times and had to invoke the practical membrane transparency that is the most you can do over the callable boundary whereas direct object-to object contact over compartments doesn’t have any of those infidelities, it lets the linkage between packages work as it had worked.

PHE: This is Peter from Moddable. Okay to add to that?

CDA: We only have a minute left and folks are not using the queue. There’s replies on the queue and new topics on the queue. Great if folks could use that to take turns in order. That being said we only have a minute left. I know we got started a little bit late. But given this is a continuation, that’s the cat, I don’t want to shortchange the regularly scheduled topics that are meant to start in about a minute’s time. So I’m going to capture the queue at this point, and I think we will be able to schedule another continuation. I am noting we do need to call for notetakers. Thank you JSL. I’m capturing the queue and we can schedule another continuation and I’m going to try to not murder this cat. And while I’m trying to not murder the cat, can we get a volunteer to help with the notes, please?

KKL: Just want to thank everyone and hope to talk to you as well if we don’t get a continuation. Thanks again.

### Speaker's Summary of Key Points

(summary of original topic covers all continuations)

### Conclusion

(conclusion of original topic covers all continuations)

## Temporal update and normative change

Presenter: Philip Chimento (PFC)

* [proposal](https://github.com/tc39/proposal-temporal)
* [slides](https://ptomato.name/talks/tc39-2025-09/)

PFC: Hi everybody. My name is PFC. I work at Igalia, and I’m presenting this in partnership with Bloomberg, and I will be speaking about Temporal. I had a lot of these presentations, but just the one word or one sentence recap of Temporal is replacement for the JavaScript date object that brings modern date and time handling to JavaScript. Today I’m going to give a progress update and I have one normative change to propose.

PFC: So the most exciting update is that there are currently two implementations that pass 99% of the Test262 tests. I will have more to say about that in a moment. And then the normative change is a bug found by a user! Exciting that we have actually people using this in the wild, and thankful that when they find bugs, we still have a chance to address them.

PFC: All right. So this is the test conformance graph, which I’m told that people find fun. Just the usual disclaimer. 99% test conformance does not necessarily mean 99% done. The test conformance may have some gaps in it, which we will close before going to Stage 4, and often, you know, the proportion of work done does not have any relation to the proportion of tests not yet passing. So as I said in the beginning, we have two implementations passing 99% of the Test262 tests for Temporal. And then another exciting thing is that we for the first time on this graph, we have the Kiesel engine that didn’t have an implementation last time I presented and now does and I believe is using the same temporal-rs library as both V8 and Boa are doing.

PFC: So I thought it would be good to outline a path towards Stage 4 now that we have two nearly finished implementations. So one thing I think we need is for the Intl Era/Month code proposal to move to Stage 3, which you heard from BAN earlier, we are planning to do next plenary that as far as I understand seems to be the requirement for V8 to unflag the implementation. SpiderMonkey implementation is unflagged right now and shipping to the web. The V8 one is under a flag. The requirement for Stage 4 is two unflagged implementations. We will need that to happen. There’s still some Temporal tests in the `staging` folder in Test262, so much fewer than there used to be. But those remaining ones need to be moved to the main Test262 tree and updated and expanded as needed. We have a few gaps in the test coverage that we have identified that are currently listed in open issues on the proposal repo. Those will need to be filled. Not a huge amount of work. But needs to be done. And at that point, we could consider going for Stage 4. Probably a good idea to move three proposals to Stage 4 at the same time since they’re all kind of related: The Canonicalization proposal and the Era/Month code proposal. That is my current thinking for a path to Stage 4, and if anybody looks at that and say “hey, you’re mixing X”, I would love to know what X is in that case. I welcome feedback on that.

PFC: All right. Then the bug fix, certainly want to thank Patrick Hensley, a user of Temporal who noticed this was happening. There is an edge case when in `ZonedDateTime` difference arithmetic when the exact time and the wall clock time differences have opposite signs. So you take, for example, 1:01 AM on a date when daylight savings skips back. So these two `ZonedDateTime`s—because they have the UTC offset and everything they are exact times, and objectively like the first one is 59 minutes earlier than the last one. But the time on the wall clock, the first one is 1:01 and the second one is 1:00, the first one is the time that’s actually on your watch is minus one minute. This is fine. This is a weird thing that happens in daylight savings time changes. All good so far. But if you take the difference and you request a calendar largest unit that is broken, it fails the assertion in the spec text and it should be +59 minutes, because minutes is the—you can’t interrupt (? round?) 59 minutes to any unit larger than minutes. We have a fix for this. It fixes the above case as well as the similar problem in the round and total methods of Temporal duration. The fix is in the PR.

PFC: Unfortunately while I was investigating, I realized this used to work correctly and it broke. We broke with the refactors to avoid extra user code calls almost two years ago. I would certainly like to prevent this sort of regression in the future so it goes without saying, I added 262 coverage, I think Adam edited it. We had the Test262 coverage for this specific case. I’m also working on writing scripts to test date and time arithmetic with many different permutations with interesting `ZonedDateTime`s, `PlainDateTime`s, et cetera, and compare it against the snapshot so that if anything like this breaks in—the results ever change in something, some refactor where we’re not expecting them to change, then that will fail loudly. I’m also writing these so they can be run against implementations so we don’t have to go through millions of cases of subtracting `ZonedDateTime`s and figure out the expected results can be but it can be brought to the attention if two implementations disagree on what the results should be. So I’m hoping this will be useful to prevent this sort of regression if it happens again, and also surface any implementation divergence that currently exists.

PFC: So got any questions on what I presented so far before we move to the call to consensus?

CDA: Nothing on the queue as of now.

PFC: All right. Then I would like to formally request consensus for the pull request that I mentioned earlier: [“Change `ZonedDateTime` difference method and Duration round/total to handle the daylight saving time case”](https://github.com/tc39/proposal-temporal/pull/3147).

CDA: You have support for normative change from DLM

PFC: Thank you. That’s especially relevant since SpiderMonkey has the only implementation of this that’s currently shipping to the web. So that’s good.

DLM: Any other voices of support for this normative change? It’d be cool if we can get at least one additional person to support.

JSL: I support it but rather have one of the implementers speak up.

CDA: OFR supports +1. Great, thank you. JSL also expressed support. Do we have any objections? All right. You have consensus.

PFC: Thank you. I have put a summary for the notes in the slides and since we didn’t have that much of a discussion, I think I can just copy it in. And that was a lot less time than I had requested. I will give you all some time back. Thanks for your attention.

CDA: Great, thank you.

### Speaker's Summary of Key Points

* There are currently two implementations that pass 99% of the Test262 tests
* That's not the same as being 99% done, as there are gaps in the tests, but progress is steady and measurable
* There's a bugfix necessary in `ZonedDateTime` after a regression while trying to reduce amount of user code needed

### Conclusion

The committee reached consensus on the proposed normative change to `ZonedDateTime`.

## Continuation: Update on proposal-module-global (again)

Presenter: ZB Tenerowicz (ZTZ) and Kris Kowal (KKL)

* [proposal](https://github.com/endojs/proposal-module-global)
* [slides](https://github.com/endojs/proposal-module-global/blob/main/slides/2025-09-stage1-update.pdf)

CDA: Pulling the queue up and populating. If we want to get a head start, though, the current item on the queue which I’m sure if we were through is OFR on the queue talking about performance.

MM: OFR, can you restate your concerns or comments.

OFR: I’m not sure if I have much to add. I want to say I’m not sure if it would be much faster. There’s many kind of—there’s many performance cliffs that are likely to occur around—like, we already have performance cliffs around cross-realm objects, and probably very similar issues will present itself when we would have multiple global objects. But it’s all speculation at this point.

KKL: Well, to speak to this point, I invite PHE to respond. PHE at Moddable does embedded implementation of compartments.

PHE: Just wanted to provide some since the topic of compartment performance came up, I wanted to provide some feedback based on the experience Moddable implements compartments in our access engine and we use them like regularly as part of things that we deploy. And we love compartments because in fact, they’re as close to zero overhead as we can find. And on embedded systems where performance is always a challenge, you know, if they were having a significant impact, they would just go away. But in fact, in terms of performance, you know, there’s nothing more than getting the compartment created and whatever overhead we choose to add in terms of getting involved in module resolution, but there’s nothing in the mechanism that makes it expensive, it’s just what we choose to introduce. And in terms of memory… it’s sort of funny, a typical compartment in the world takes about 3 kilobytes of memory to set up that we’re disappointed it’s that big, but actually it’s quite tolerable and we hope at some point to be able to optimize that down. But, yeah, we think compartments are great. They’re very, very lightweight at run time effectively zero beyond putting them in place in whatever overhead you introduce on the module resolution. So feel really good about that aspect of the design.

MM: Let me also mention historically that the overall shape of the compartment proposal started with Moddable. You know, we were working with Moddable trying together to solve the problems that compartments ended up solving, and Moddable proposed this with the eye to all of the efficiency concerns. Granted in a different engine than the JITed engines—anticipating something on the queue.

KKL: But also to respond in the affirmative, it is that Moddable’s compartments are not web globals—don’t have web globals and don’t have the internal slots of web globals. There’s some overhead that we expect to be slightly higher than Moddable experiences, but we also expect that the tolerable overhead will be higher as well.

KM: I don’t want to claim to speak for OFR but at least for us, there are all kinds of JIT optimizations that might—it’s probably more fragile to rely on them in a multi-global system. For example, like removing iterators and all kinds of overheads of those things in the JIT, highly rely on specialized things that attach to the particular like global object and if you try to mix global objects you’re more likely to break those assumptions, and I think probably a decent amount of work that would have to go into like understanding the primordials of the global objects are the same and probably all kinds of weird bugs from the fact that we’ll try to throw exemptions and take the wrong global object because right now the global objects are tied to the primordial intrinsic. It’s free to just reload the global object from the intrinsics like one and use that to throw an exception, but then that might cause other weird problems. And then that aside from the perf issue in some respects and these things are very delicate in some respects. Ideally they would be very principled, but just within the constraints of JavaScript and trying to get something that works a lot of the time do not. Is that kind of what you’re getting at?

OFR: I mean, this was definitely part of the thing that I was thinking about. But even in the runtime starting like maybe if this global or if this compartment is not something that you can just like for example load from the snapshot because it somehow mixes an existing realm with some new things, that might be slower to start up like a new realm that is completely empty, for example. So it’s not clear to me that this would be cheap—I can well imagine that it’s simple and lightweight to implement in the runtime that doesn’t do a lot of speculative optimizations, that I can see. I’m not sure if it’s in the context of V8 that would be something that is as fast as running normal JavaScript code.

KKL: I can say those of us using compartments are tolerating a slow down of being forced onto the no-JIT path because of the nature of the—we’re using `with` blocks and a lot of the—

OFR: Okay. But I was making this comment because you were explicitly stating performance as the motivation.

ZTZ: I can respond to that just a little bit real quick? The ultimate motivation is making it possible to optimize this. If we tried isolating with multiple realms, there are some optimizations that will never be possible. This proposal puts us in the situation where over time, all that can be optimized away, and I’m hopeful of that because we had a case where TypedArrays were 50 times slower, observably, for us, and it turned out that it was because: if a TypedArray had a frozen prototype, so even freezing `Object.prototype` was enough to trigger this, there was an up count from optimizing a function in compilation and effectively functions uses TypedArrays in the loop were being treated as hard to optimize and V8 would bail out from optimizing them. But a very small fix was able to fix that. And I believe that over time we will accumulate enough of those fixes that the experience of using compartmentalized code will not be that—suffering the performance impact that’s noticeable to your application. And if we attempted to solve the supply chain motivated isolation in any other way, I don’t believe that would be ultimately a reachable goal to stop paying the performance overhead for that in years in the future.

KKL: To restate, we have heard and understand it will be tricky to implement this on a web engine.

MAH: I’m going to bring up my first comment really quick, there seems to be a lot of talk about what the global object being different might mean. I’d like to highlight this is mostly about the global scope being different. I mean, I don’t claim to know how exactly web engines do to attach to the global object, but I suspect in most cases there can remain a single global object for the realm and really what this is doing is introducing a new global scope. Which hopefully should mean a lot less scary implementation. My topic here was actually in answer to JSL, that I think his reply was actually first. So his question is, can we reconcile compartments and ShadowRealm and why can’t it be one solution? I think compartments and ShadowRealm really work at two different layers. In my opinion, it’s like asking why can’t we reconcile VM and containers? They’re just two completely different things that provide different levels of isolation and they work differently. So I don’t think there’s a way really to reconcile them. They’re just two different type of technologies and approaches.

MM: I feel like we have addressed, maybe not to everybody’s satisfaction, but addressed if you have ShadowRealms, why do you need compartments, over and over again. The other question I don’t think we have addressed well, in fact, most things that you can do with ShadowRealms, you can accomplish with compartments. And the place that ShadowRealms came from is initially we were collaborating with Salesforce on compartments, and they were planning to use compartments for their plug-in architecture, and they ran into too much existing code for which they have lots of existing third party plug-ins that wer not simply lockdown-able, maybe because they mutate primordials, probably, in the way that is not easy to separate. For whatever reason, they couldn’t be locked down but still need to be isolated from other programs and from the plug in as the whole and not isolated from the dependencies. Or rather, Salesforce didn’t feel like they needed to address that.

MM: So they invented the ShadowRealm in order to have a compartment-like mechanism for containing essentially an application as a whole, or a plug-in as a whole.

CDA: We have only a few minutes remaining. I’m going to ask that the presenters, ZTZ and KKL, can you take a look at the queue and see if there’s any topics to cherry pick, or just continue going down in order?

KKL: Nothing in particular.

MM: I want to address the Maginot line comment.

MAH: I would like to address that too.

MM: KM, we’ve been using compartments together with harden and lockdown for a very long time. In fact, you know, essentially this architecture we have been using it since 2009, if you count Google CAJA as the first implementation of hardened JavaScript and it’s not a Maginot line, it’s actually secure. We had multiple in-depth reviews, some of which we published and we have had formal analyses of sufficient subsets to talk about the principles, and the formal analyses held up. So the compartments by itself, if their purpose was security, they would be a complete failure. What they do is coupled with those other things, they do provide security. So they enable security. And the Magginot line might be useful for other things in the absence of attack, which is why it’s a separate proposal.

KM: Can I reply of my intention of the comment? I guess it ties into the related topics how do you verify that you haven’t leaked data when you have 300,000 dependencies and without a callable boundary? I mean, you have reduced your intractable problem of like mutable globals to the probably equally—I mean, I would assume equally intractable problem of validating every call between every dependency.

KKL: You are correct that the edges become interesting. You are correct that the edges become interesting. The way it does reduce things is that you go from being from the problem where the interactions are a full click of all of your thousands of dependencies upon all of your thousand dependencies, into one where the interesting edges are edges of explicit dependence. But it’s also that because compartments can’t arbitrarily reach other compartments, they are linked out of band based off of the explicitly dependency graph in the way that shared globals do not have that, shared globals have the greater degree of freedom. The thing that is interesting about it is that if you have an edge where you have failed to audit the communication edge, or failed to carefully manage a communication edge, that is—then you’re back to table stakes along that one edge and not worse off. And also those dependencies stand in a better position to defend themselves if they choose to, right? You can create hardened packages where you defend at every package line and we do in a lot of cases.

MM: Yeah. In fact all of Agoric’s software running on blockchain and elsewhere is all built. The individual components are written defensively and object to object contact with we believe understandable risk. That’s held up in the security reviews including outside security audits. I want to retreat from something that KKL has been saying, because I think we need to distinguish confidentiality and integrity. Confidentiality can leak through side channels and it takes—it’s only a very special case where we can protect against side channels, and so integrity is where we can make the strong claims without having to worry about side channels. Side channels cannot endanger integrity.

CDA: All right. We are past time. I did capture the queue before I cleared it out. We will have more time during this meeting tomorrow to continue again. So thank you everyone.

### Speaker's Summary of Key Points

(summary of original topic covers all continuations)

### Conclusion

(conclusion of original topic covers all continuations)

## How Websites are Put Together

Presenter: Kevin Gibbons (KG)

* [slides](https://docs.google.com/presentation/d/1vEYoTix5yHN3vc1cXZQCk87P8d_GqL0bYsOpoEcnjuo/edit?usp=sharing)

KG: This is an informative talk based on my own personal experience. I will not be doing much—or doing anything asking for the committee’s consensus but I will at the very end pitch an opinion that I think is relevant to the committee and the previous talk. But this is not a consensus-seeking item. I’m mostly just talking from my own experience and expressing my own preferences here. We’ll start with a little background and then talk about why I’m talking about this and then we’ll get into the meat of the thing. So first thing, general background, there’s a lot of page loads of websites. Many people are loading many Web pages. It’s back of the envelope map but I got in the order of 100 billion page loads a day that is a large number. That might be off by the order of magnitude in the direction but it’s a very large number. Almost all of those take place on the top few hundred websites. Of course many of them are specifically Google or Facebook or Instagram. Many of those are shifted to applications, to mobile apps. But in terms of websites, the top few hundred do capture almost all of like humans’ time. Very large number. And as such, our decisions about JavaScript primarily touch people’s lives through how the decisions affect those websites. Just to give a rough idea of scale if we add a feature what is used on one page load on a hundred and has the benefit to those pages of speeding up that load by one millisecond and multiple time saved by the feature. There are many other ways that decisions affect websites and other consumers, but I just want to keep in mind the sense of scale for this part of how JavaScript affects the world.

KG: I think it’s worth understanding how those websites are put together. I want to be very clear that I am not saying that these are the only consumers that we should consider. I’m only saying that these are consumers that we should always consider in how our—how the design of the language is going to affect people in the world. So it happens that I have a lot of experience with this, because my day job as it were involves building an application that is integrated into other websites and because of the amount of money that we charge is primarily integrated into the larger websites, these like relatively popular websites with major banks and retailers and airlines and that sort of thing. Because we’re directly integrating with the websites, I’m very often in the weeds poking around like how the websites are assembled and talking to teams at the sites and so on. But obviously I’m not talking to very many of the teams, that doesn’t scale. I’ve talked to a few of them when issues have arrived and I’ve looked at the process by which these sites are constructed in a large number of cases. Again, I’m only talking from my own experience. I’m not making claims this is how everything works, I’m giving colour how things are generally done in my experience. That’s the background. That’s why I think this is worth talking about.

KG: Let’s get into the meat of it. How are these sites actually built? So the biggest thing is that any of these large sites—commercial sites, I should say, doesn’t necessarily apply to Wikipedia, but these large commercial websites are assembled by multiple teams and not just multiple front end teams but back end team working at different parts of the stack and different parts of the application and also they usually not always but usually are including scripts from different companies. These can be served either as first party or third party scripts which is to say same origin or cross-origin. In a lot of cases the scripts will be provided by other companies but served as first party because the properties that you get by being a first party script that are often necessary for the functionality of scripts and it’s not just ads where this comes up. There’s core functionality that is outsourced—my own product, the product that I work on is not an advertising product in any way, but it’s providing defense against certain kinds of attacks against websites. There’s lots and lots of different kinds of functionality that gets outsourced to other companies. These pages often have scripts that are not just often like usually in my experience have scripts that are provided not just by multiple internal teams but multiple different companies. And these are not particularly coordinating. These teams are not particularly coordinating. Even the teams within the company are frequently not able to coordinate effectively because they’re in different parts of the organization or just because they’re internal processes but certainly there is almost no coordination possible externally. The scripts are provided by other companies is not possible to actually coordinate directly between the companies that are making these scripts and the companies that are executing them, the scale just isn’t there.

KG: Like, my team has half a dozen engineers working on the script that is on—I can’t name numbers, but many websites where it is simply infeasible to talk to teams at all of the websites. This is the common case. It’s just not feasible to actually coordinate between all of the people who are involved in assembling a website. And these scripts. These scripts that are on the page are written by companies with wildly different standards. Some people might be building like little jQuery snippets and other are doing defense against prototype pollution and other is heavily using eval. The standards are different. They’re included on the page in what is from the perspective of the script is random order, not literally random. People made the decisions for the outcomes and they are not on the needs of the scripts but the needs of the people assembling the web application and the parts of the stack that they operate. Sometimes it is literally random in the sense that the scripts are loaded async and evaluate in order in which they have complete loading. These scripts are quite old. Sometimes years and sometimes decades old. And on major websites and look at [Amazon.com](http://Amazon.com) or whatever, even the commercially used scripts are often years old especially on places like banks are extremely Conservative on updating scripts on the page with newer versions available. So the scripts are not exactly frozen in time in the sense that people are updating some of them. You can’t assume nothing will ever change. You can’t assume that any particular thing will be updated or updated in any particular time frame. Also these scripts are frequently patching built ins. There’s a lot of reason to do this. Polyfilling is one reason. Certainly the most common reason and far from the only one, I patch a lot in my scripts. Lots of other commercial products are patching other scripts. This is just a basically necessary part of how these scripts integrate with each other and with Web pages. And this is usually but not always refusing to patching—apart from polyfills refers to web platform stuff and fetch is popular and XMLHttpRequest and form submit and these things, it is relatively common of function toString or error stack and other stuff including intrinsics that is helpful. Notably these are through page’s lifetime.

KG: It is not the case that you can reasonably say we’re done now, scripts have loaded, because scripts will continue to be loaded throughout the page’s lifetime. Sometimes in response to user behavior, just to give an example, you know, you might have a thing where if you have you hover over a product, that will pitch not just the product information, but maybe some additional script that provides functionality for the little pop up that shows up where you wouldn’t want to pay the cost of loading that script that does like the little React UI in the picture in picture if you weren’t actually ever going to mouse over a product, so that script will be loaded dynamically in response to user behavior.

KG: Also of course the lack of coordination in general means the scripts that basically are running with no particular knowledge of their relationship to each other can never break any built in functionality and never make any assumptions about what other built in functionality is being relied on. You just don’t know where you’re running. Indeed, you can’t assume you will be the only people patching some built in. You can’t replace fetch with something backed by XMLHttpRequest and someone is previously patching fetch and now you clogged up the changes. The only thing is patch fetch so it does something else and then defer to whatever the previous implementation of fetch was so it can continue to be patched by whoever was there previously. It is very common to run into scenarios where multiple different scripts are patching the same built in especially for things like fetch. And honestly astonishing it works as well as it does. Basically only works because everyone where every has learned to more or less respect the discipline of not breaking anything. And not making assumptions about which things other people are going to rely on not being broken. And people learn this discipline often the hard way by I’ve done it I’m sure most people integrating with the websites done it broken sites because I made an assumption that I could touch something that wasn’t a valid assumption. I’ve assumed that I could use—that I could trust if someone was doing XMLHttpRequest open and call to close of the same realm of the XMLHttpRequest and that was wrong. And people reach into the iframe and call its stock close. You have to do the perfect emulation and find out the hard way if you’re breaking any built in functionality. Not necessarily you won’t necessarily find this out the hard way. But you often will. The only reason that this works is because people find out and then avoid breaking built in functionality. Okay. So that’s sort of the background or the bit I wanted to say, you know, these are things to keep in mind about how large commercial websites which again are like the majority of how JavaScript is affecting people’s lives. These are things the know how the sites are put together.

KG: But then I want to go over some things that I think are relevant to implementations for the committee. The biggest one is that you can’t really have any mechanism, shouldn’t say you can’t have. Mechanisms that rely on global coordination among scripts on the page are basically not usable on this kind of site. Just for all of the foregoing reasons, the people maintaining the scripts aren’t necessarily at the same companies, and anything which requires them to coordinate just isn’t happening. You might if you are lucky be able to do some coordination that is mediated by sales teams, but often times you won’t because the scale makes that impossible. Similarly a script can’t know its order on the page. The scripts are being put on the page by different teams working at different parts of the stack. My script is often inserted by a reverse proxy that is run just before the page is served to users and often not always assume that our script will be first on the page and no one can assume they will be first on the page even if they were at the time they were injected because they were injected by a different piece of hardware in a different data centre, or at least a different part of the stack wherever it happens to be. It is for this reason basically not feasible to have globally consistent order of scripts and can’t generally assume they are running first or last or anything like that. As the consequence there’s no point you can say polyfilling is done. This is just not knowable for any script on any of these kinds of pages.

KG: Similarly if you need coordination between front end and back end, it’s—I will not say not happening. It can happen in some cases for applications which particularly need it. But in general, these teams tend to be pretty siloed. Even within a company, setting aside the issue of third party scripts that are included on the page. Even just the people building the page, the front end team and the back end team are often pretty far apart, and if the front end team needs to make a change for the back end for something to work, odds aren’t they just aren’t going to do that thing. There are some mechanisms in the web platform that rely on this thing. CSP is a classical example. It provides a means of limiting what scripts can execute on the page among other things. But that mechanism as ideally designed relies on being able to put hashes of every script that will run in the header for the page and that’s not happening, or put a nonce on every script that is run and that is not happening. What everyone has to do in practice is rely on exceptions for running any script for the particular host. You hope this is just the first party host. That tends not to happen because these things are getting assembled by many different scripts from many different sources. And so in practice, what most sites end up doing with CSP is allow scripts to run from a large list of origins, and in practice some of those origins tend to allow anyone to upload any kind of script. This just completely bypassing the mechanism but the only thing that people do because coordination isn’t feasible. Because CSP was designed in this way and requires coordination, it doesn’t work in practice.

KG: I should say this doesn’t apply to everyone. In particular, it doesn’t apply to Google. Google and Facebook are organizations which are capable of having some teams which dictate how everyone in the org is building the script or the website, and these applications tend not to include much in the way of third party scripts. So at those two companies, you can do this kind of thing. And not much of anywhere else. I think in part this is why the web platform keeps growing these mechanisms that no one except Google can use. CSP, that sort of thing. Because they are designed by teams who assume that websites are put together like Google is put together, and that assumption is false but it looks like it’s true if you’re at Google. So I’m not saying that this is never possible. It’s possible if you’re Google, possible if you’re a small shop. Not possible if the you are one of these like large scale but not literally the biggest website in the world places. This kind of coordination is generally just not feasible or at the very least needs to be extremely limited.

KG: I want to caveat this further that is when there are strictly additive mechanisms sometimes this can happen. For example, if you need the website to be served with the additional header but the header doesn’t break anything else, you can often make it happen. The frontend team that needs it will communicate the needs to the back end and the back end will add that header and like this doesn’t break anyone and then like if the front end ever stops needing it, they won’t tell the back-end they stopped needing it. That tends to work out as long as it is the first party that needs the header. If you’re building a library, you’re not in the position to say I will talk to the backend team because the back end team is at a completely different company. Even then there are restrictions. For this reason you see low use of SharedArrayBuffer because it requires headers. It is unfortunate because it is best mechanism to make websites faster but no one can do it because it requires this.

KG: Another consequence is scripts are not going to start freezing built-ins. It won't happen. Scripts can’t know when it’s safe to freeze built in options. Like I said scripts continue to be loaded and executing polyfills and patches over the lifetime of the page. And stop optimizing for the case. This came up a few times in the past that people suggested that maybe we shouldn’t bother specifying this optimization because scripts can freeze things and scripts can freeze built-ins and engines can have a fast path for when the built-ins are broken. I don’t think that will happen because I don’t think scripts are large commercial sites that are the primary consumer in terms of like powers of human time, these sites can’t freeze built ins and so engines are probably not going to start optimizing for that case. I’m not the engine and can’t speak for them. This is my own speculation. That’s my understanding of the state of it.

KG: Similarly, one-way global “mode switch” flags are not ever going to be widely used on this kind of site. We talked some in the previous presentation about the lockdown mode that would essentially be this and freezing all of the globals. It’s conceivable that you could do some sort of lockdown within the ShadowRealm or something because that’s something that doesn’t affect other scripts on the page. But at the top level where it would affect all of the scripts on the page, it’s basically not feasible because there’s no way to coordinate among all of the scripts on the page to decide at what point it’s safe to enable this mode. The only kinds of mode switches that are safe are those which like are usable—which don’t break any functionality of any script and at that point it can just be on by default. If it just works for everyone, there’s no particular reason to make it a mode switch. So, yeah, this sort of global coordination switches I think are largely infeasible for these kinds of websites.

KG: This is I think the relevant implications for the committee. This last slide it is my own opinion, which is that I don’t think we should be spending our time on features that are not usable by this kind of website. Now, I want to be careful with what I’m claiming. I’m not claiming this is the only JavaScript that matter. I use JavaScript outside of these contacts a great deal. I’m just saying that I think if we are going to be building something and putting all of our time and the committee’s time and the engine’s time and imposing additional costs on run time for users, then it should be possible to use those things under the foregoing conditions. That is how almost all JavaScript is executed—again in terms of in context for humans are waiting for that JavaScript to execute or affected by the results immediately. And I think that we should generally be trying to do things which are usable under the conditions of no global coordination. This hasn’t been a problem historically, like, when we have built things in the past, we have generally assumed that they’re not going to require global coordination. You can use a proxy within your own script without that catching any other script. The web platform has been less good about this. An example is import maps. Import maps on the web platform provide a way of mapping module specifiers and initially specified that was only one import map on the entire page. And this basically again was unusable. That’s now been changed so that scripts can load import maps at runtime without clogging the import maps of other scripts and like I think this is basically a necessary change in order for import maps to be readily adopted. TC39 has generally not done that sort of thing. I don’t know whether this is happenstance or people tried to maintain and generally the case that the features we add are usable within one script without requiring the buy-in of over scripts on the page. Or like knowing that the script is running first or last or anything like that. And my personal reason is that I think that we should continue to spend our time on those kinds of features and not start work on different kinds of features which require global coordination, because those things will in practice based on my experience never be usable on the large commercial sites which I have been talking about through this presentation.

KG: Alright, thanks for coming to my talk. I am happy to discuss any of the foregoing points or I also want to open up if people have other questions about how these websites are put together, I can try to talk with my own experience.

CDA: First order of business is we need an additional note taker to help out with the notes as we are losing ZTZ.

RBN: I can take notes.

CDA: Thank you.

CM: I think this whole presentation is illuminating. I think you actually make a very compelling argument for things like the compartment proposal, where part of the whole point is to be able to isolate pieces from each other to minimize the amounts of coordination that is needed between the pieces. A lot of the issues that have been talked about today, things like supply chain attacks and the very idea that you have got not just this big NPM ecosystem but in fact within the context of a single website you have a whole bunch of different actors with different interests and different engineering practices, different policies and different chains of accountability, means we need better tools for helping these folks to keep from stepping on each other’s toes. And I think perhaps those of us who have been advocating for things like hardened JavaScript and compartments and all of that stuff can be making our case a bit better. But to my sensibilities all of that is really fundamentally motivated by these very concerns that you are articulating. And so I don’t know what to say beyond that, but I think you have made what I think is a very compelling argument for a lot of kinds of measures that some of us have been advocating for some time.

KG: Yeah. I think the mechanisms which will allow us to have less coordination—or perhaps easier to say, mechanisms which allow scripts to run without caring as much about what other scripts are running, are generally positive things to the language.

CDA: I’m next on the queue. I want to be very careful here because a lot of people put a lot of time and effort into proposals, but I’m wondering, are there any in particular that you would flag as having been not prudent for the committee to investigate or advance?

KG: So I guess I should say the genesis of the talk is at the previous meeting I gave a presentation where I was suggesting that the committee should consider locking down `Array.prototype[Symbol.iterator]` and `ArrayIterator` and specifying these things to be non-writable and non-configurable to enable optimization and engines. I got feedback from some people instead of doing it in the specification we should start saying scripts can do that or perhaps we can have some sort of flag that would enable all of the built ins to be frozen and engines can optimize for that case. And much of the point of this presentation is that I don’t think that that’s going to happen, and I don’t think we should be designing for a world in which that’s going to happen. And we should be instead designing things like we can at the language level freeze ArrayIterator because scripts basically can’t. That said, I think that it has occasionally come up the idea of having a function that you could call that would freeze all of the built ins has occasionally come up. I don’t want to say that isn’t worth pursuing. I want to say I don’t think that’s worth pursuing unless it comes along with some other mechanism that allows you to, for example, only doing that in the compartment because I don’t think that such a thing—or like in a ShadowRealm or something because I don’t think that a freeze all of the built ins will ever be usable in the global scope on almost any major website.

CDA: Thank you. Your slides had something about whether TC39 was the right venue for certain things. In this example, is this?—because it sounds like you’re saying this wouldn’t be good to land regardless and not just the choice of standards.

KG: No, I mean, I think if someone wants to propose that for node and node wants to do it, that’s just fine. Node has a frozen intrinsics flag which I think is a great thing for node to do. If other runtimes want to standardize on that flag, then they should feel free to do so. I think that would be a beneficial thing for servers, I just don’t think it makes sense as part of the language because it is not going to be beneficial to this like major class of consumers of the language.

CDA: Okay. I understand. Thank you.

REK: Yes, hi. Thanks for this presentation. It was very illuminating for me since I’m working at MetaMask and the kind of website that I work with is very different from the one that Kevin is describing in his presentation. I guess if I understand your point, your thesis is—and please correct me if I got it wrong—the committee shouldn’t spend its time on things that aren’t practically usable for this class of consumer, which is a stronger statement than just saying we shouldn’t harm these consumers. The latter seems like table stakes to me because obviously they’re a major class of consumer and it’s part of the backward compatibility mandate that we shouldn’t harm them. I guess this is kind of a meta question about how the committee views its work and on what time scale we operate, because it seems like this class of website is something that has emerged organically in the real world because it’s useful to build this class of websites in this particular way. But obviously these websites didn’t exist 30 years ago and I’m wondering do we expect them to exist 30 years from now? And on what time scale are we considering the implications of the things that we put into the language in committee? We often make the joke that JavaScript may outlast human civilization—which, maybe or maybe not and I guess—but either way websites and web users will have a long time to adopt anything we introduce to the language. So like, where do we draw the line there? Are we only trying to serve existing users and enshrine existing path-dependencies? Or are we at all interested in trying to dislodge the status quo and showing people new ways of doing things? How do you view that question?

KG: My expectation is that if there are websites in 30 years that this will still be how they’re put together. No matter what new functionality we add to the language. This mechanism for assembling websites arises kind of out of the business process and it isn’t so much in the way of technical decisions, it’s just like as a practical matter, you cannot coordinate all of the people who are involved in creating the content of the website and anything which assumes that like requires all of the people involved in building a website to coordinate cannot happen as the practical matter. That’s part of why I don’t think—that’s really the main reason I don’t think it’s part of the committee’s time to build something for the world because I don’t think the world is going to come to pass. I think if we are building a feature that is usable by a script on the page without the coordination of other script and improve the script on the page and sand box dependencies, that’s great, I have no problem with doing that. It is these things that would require global coordination that I don’t think are going to happen. Anything that can be incrementally adopted I would continue to consider in the scope.

REK: Okay. Are you sort of categorically opposed to proposals that are not usable but this website but doesn’t actively harm those websites or their users or more like I would rather we didn’t or I don’t personally care?

KG: I am personally fairly strongly opposed. I don’t think that’s a good use of our time. And like in practice, the primary consequence in terms of like engineering hours that are spent of the committee advancing the proposal is the main line production implementations do a lot of work to get something integrated with the systems and anything that requires deep integration for TypedArrays and proxies and these things have CVEs and performance impacts and various other effects on users. Even many of the most trivial effect and download side of the browser is what they care about. I don’t think it makes sense to ask the costs to be paid if it is not going to benefit the primary class of websites where people are spending their time. Now again this is just my opinion. I’m not asking the committee adopt this position, but it will be a hard sell for me personally to do any of these Things.

REK: Right. I see. I don’t know that I agree with your opinion, but I understand your opinion, thanks.

PFC: I was muted. I think Kevin covered my point.

JSL: Just throughout my life and career I heard a lot of people say, well, look at this new technology, it will be so great and get rid of the old one and it will go away. CJS will be here forever and HTTP 1.0 will be here for ever and cobol will probably be here forever. And HTTP websites will be here forever. If we make something good enough, then certainly the preponderance of users might migrate to it or use it for old things and the old things will never go away and humans don’t seem to have a great track record with migrating en masse from the crappy thing to the better thing. There’s also like cell networks in the U.S. versus Africa and they have better cell networks because they skipped the middle period that we migrate away from. This is not unique to software. This is for any individual I would recommend or suggest that your life will be happier if you … yourself of the notion that we can ever migrate from A to B completely.

ACE: So I’m wondering how much I should read into what you’re saying Kevin in terms of proposals and the implication on the polyfills, are you saying or advocating that we should seriously consider like compromising for want of a better word of a proposal if it makes the polyfill much like just easier to roll out on the—if it’s easier to have like ten versions of the polyfill on the page and that not be at issue even if because obviously the polyfill ideally only lives for a little period of time for people who want to early adopt, in reality lots of teams want to early adopt and use features before they’re ready and polyfill forever. Is it worth that the spec should technically live longer than the polyfill but are you saying we should compromise to make the polyfills just easier?

KG: No, I don’t think so that. Also I don’t think that’s an accurate description of polyfills. Most modern polyfills for most features don’t actually end up replacing the native thing unless they need to feature detect. You include the script unconditionally but don’t actually patch the thing unless it’s necessary. The polycode itself will continue to run in practice; polyfill won’t. I don’t think it’s important. If it were the case I would be more inclined to say we care more about polyfillability. I don’t think we should care zero about polyfillability. I know some have the opinion. We should care some amount because it does come in up practice. But I think that generally speaking what happens is that the polyfill code lives forever and the polyfill itself isn’t running. It isn’t a big deal and people upgrade.

JSL: Sorry to jump in. That is how most language polyfills work. I don’t have enough experience to know if web polyfills is the case.

ACE: The issue we had in the past is that that isn’t what code is doing in terms of, you know—

JSL: Polyfill from the previous decade and polyfills written or upgraded in the last decade match Kevin’s description. Per my earlier point, the earlier ones will still be there forever.

MAH: Kevin, would you think the committee should have spent time on something like native modules given that native modules even today are still not used at runtime by most of these large websites? I’m trying to understand basically what we should spend time on if clearly and I think even at the time we understood that native modules would not be adopted by large existing applications.

KG: That’s a good question. I guess I will leave it to browsers to speak to whether they think that the effort that they have spent in and continue to spend is worth it. I also disagree that these things are not adopted. They are not widely adopted, but because it is possible to have the module that is the native module that inter oner rates is present on the page alongside scripts that are not native modules you see the case and it is creeping up. That said, from I recall the conversations at the time, we were not pessimistic. The thing that happened is worse than the outcome I at least was anticipating back in 2015. At the time, there was excitement about HTTP 2 push and all of the other mechanisms that were expected to decrease the overhead of these things and HTTP push basically failed for other reasons. Well, related reasons. And like at the time I was not pessimistic as the current outcome. In 2015 you told me this was going to be the state going forward and that native modules were not going to see much use on the web and like they were still going to have considerably worse performance in production, I probably would have thought that our time would have been better spent elsewhere, yes.

MAH: All right. I am still distressed that we would say let’s not really invest in the future and on features that new applications might be able to use even though there might be no hope or little hope for existing large applications to adopt because as JHD also said, existing applications are not and policing implementations are not going away. But new applications are built and those might be able to benefit from those features. And it just seems really sad to just give up on investing time for these new features if they’re not immediately applicable to these large cohorts of websites that exist today.

KG: Again, I don’t think it’s just not immediately applicable. I am pretty sure in 30 years no matter what features we add to the language, websites will continue to be built in the way that I have described..

MAH: Not all, but…

WH: This is a quintessential example of “shipping the org chart”. That effect is familiar to anyone who’s been around the industry long enough or seen examples of JavaScript out to the wild. Is there anything that surprised you?

KG: So the main thing I end up being surprised is just what things people get up to, like, the amount that ??? law continues to hold. I mentioned in example briefly in more detail and my script patched HTTP exist and XHR we had certain headers for certain conditions. Fairly natural to do because of how it works and we have to patch the constructor and open and send. The initial implementation assumed that if you are calling XHR open and call XTR send with the dot send from the same realm. That assumption is false. This broke introduction because there was a fairly widely used library which under some circumstances would be like function prototype calling XHR prototype send from the iframe on the XHR different frame and we had to make it work because the website work. My main surprise is just how disciplined you need to be in making things work the way they are specified and that given this amount of discipline is required, everything ends up working as well as it does. Every day I’m shocked that this house of cards is still standing.

WH: I also have observations about how things like this can change. There are occasional phase shifts where entire languages and paradigms get replaced. For that to work, the replacement has to be able to happen incrementally where your organization can switch to something better without making everybody else switch at the same time. This often happens via subsumption if you can create, for example, something better and then just have it compile to JavaScript

KG: Or WASM now.

WH: Yes, and HTTP is now rare compared with HTTPS because people could switch to HTTPS incrementally without having everyone else switch at the same time. That is an example of a successful migration.

KG: I’m very in favor of improvements to the language that can be adopted incrementally. I think compartments are a good example of like you can have one script that has a compartment and isolates its own stuff and like to the extent that that is providing better security for the script, that is good and maybe some day that allows us to get on the path where that is just the way things are done by everyone.

WH: Now, one new way in which subsumption can happen in the next few years that wasn’t possible before is with AIs that can look at the whole massive script mess on a website and transform the process to something different.

KG: Well, the problem is like I said, the scripts are coming from different sources.

WH: Yes. Until now it was impractical. AIs might make such coordination and replacement feasible.

KG: My script is inserted by a different piece of hardware than most of the scripts on the page and I don’t know where AI could be sitting and manage coordination between my script and the other scripts.

WH: It’s an interesting question. We’ll find out the answer in a few years.

KG: Yes.

MM: So I think Kevin’s talk actually helps illustrate what the difference between realms and compartments are and when you should use either one. Kevin, what should I call these components that are not coordinated with each other or written by a different team and just kind of mashed together in the same page? Are you more comfortable with mash up or plug in.

KG: Mash up is better and plug in I think of plug in systems that this isn’t.

MM: Okay, mash up. Each mash up internally like you already established might want to internally protect itself from supply chain attacks; attacks, you can’t defend against. You can defend against many accidents using compartments by themselves. You cannot defend against attacks using compartments by themselves but if the plug in, for example, if the team—not plug in, mash up. If the team behind the mash up finds they are repeatedly being screwed by supply chain attacks and they care, they might choose to put the bulk of the mash up inside of the ShadowRealm in which they run compartments with lockdown to get actually safety against supply chain attacks.

KG: I guess I’m unclear on what role the compartment is serving in this world.

MM: The compartment is enabled within the mash up. The mash up author to give different packages, let’s say, you know, in a lavamoat and actually using lavamoat is able to arrange to give different packages different initial authority and different connectivity to each other so that it can reason about the limited potential to do damage. And I realize in saying this that our previous discussion about the audit burden is missing something that is important which is what all of these techniques are about is not isolation per se, it’s about enabling intended interaction while minimizing the risk of destructive interference. That’s minimizing and not eliminating. There’s still an audit burden everywhere like I said, but we have found over and over again looking at the supply chain attacks in the context of full harden JavaScript that harden JavaScript would have prevented many of these existing supply chain attacks. And that’s adequate. If they continue to lower the overall risk burden internal to a mash up, because the mash up using a ShadowRealm is able to give itself an internal world in which it can do a lockdown, then it can protect itself against those dependencies that it has. Without either ShadowRealm or compartment, let’s be very clear in the world you’re talking about, how bad the supply chain risk is. One dependency of any of these mash ups might be a targeted attack at any of the other mash ups.

KG: Yes, I agree things are pretty bad. I have a question which maybe you can answer offline so we can get through the queue before the end of the meeting. I still do not understand in the vision that you’re presenting if the compartments are sufficient to handle this kind of coordination between the modules within the mash up, I don’t understand what world the ShadowRealm serves and if they are not—sorry, if they are not sufficient to handle the coordination, I don’t understand what the compartments are doing. Maybe this gets into the different threat models that Kris was talking about, I would love to see an answer to that like in writing me or something.

MM: So compartments by themselves provide a measure of mitigation of accidental interference risks. They do not provide by themselves any defense against malicious interference.

KG: Okay. Interesting distinction. Let’s get through the queue.

ZTZ: Somehow this was slow. So I hear a lot of explanations why global coordination is not possible. I don’t really understand what that is a response to, because while it’s not really debatable at the scale coordination, even if someone thinks it’s possible, it’s just going to be do so or not going to work and going to be very expensive and only very few companies have the culture built from the ground up necessary to do that. It’s interesting to observe the situation from your perspective where this is—from your observations are at the scale that is at this point the ultimate scale of the mess that is happening there. I still don’t understand why the coordination would be necessary for applying protections. I think the assumption that coordination is necessary is coming from the assumption that it would have to be a full freeze to all intrinsics everywhere. And since you’re already mentioning that libraries are using a method from a different realm within the iframe on the XHR of the current realm and that has been a problem, people are already using iframes to contain some of their code. And I know I’m probably in the younger half of the meeting here, but my first job, first serious full-time job was also building scripts that people would put in their websites and I would have to run things in there. I call it hostile environments. And it was very obvious to my very inexperienced me that I needed to reach for the iframe to be safe from all the mess that the websites were shipping with back when prototype JS was still pretty common.

KG: We’ve only got two minutes. I would like to respond.

ZTZ: Okay. So what I’m saying is every piece of that whole website could go and on its own protect itself from its components because as any other software, it probably consists of only 3 to 5% of its own code. And that we can enable and benefit from. And that’s a path forward that will end up with adoption on those sides.

KG: I think you’re responding to something I didn’t say. I did not say we should pursue compartments or ShadowRealms or any of that. That is not a claim that I made. My claim, my personal position is that we should not pursue anything which relies on global coordination. If you have something in mind which doesn’t, I’m not speaking to that. I’m only saying we shouldn’t pursue things that are in global coordination. One of the things discussed several times is the lockdown mode. Sometimes discussed in the context that suggests the lockdown mode would be feasibly usable at the top level of the website. That would require global coordination and therefore ruled out by this. I’m not making any claims we shouldn’t allow people to do hardening which they can do internal to a script. Not a thing that I said.

ZTZ: All right. So what I hear is that if I recall correctly, you proposed a very limited version of hardening that would only cover the most significant areas where prototype poisoning would occur.

KG: I proposed that the language lock things down, not that we provide scripts a way of locking things down.

ZTZ: Would the provision to lock things down enough to satisfy that?

KG: No. Again—

ZTZ: I think we are limited by don’t break the web. But—

KG: I think we can freeze—the opt in is not going to be used. People are not going to use that.

ZTZ: I would agree with that. Freezing iterator is a good thing in general. I believe where this is brings us is depending on the level of coordination or the scope that you can carve out of the whole problem of impossible coordination, depending on how much you can have, there are different levels of lockdown and for the behaviors you can have. So having one that’s by default and then an opt in to more sounds very appealing to me as opposed to one of the two on its own.

KG: I think that it makes sense for the language to just enforce on everyone that certain things are frozen like array iterators if web compatibility to do so. I don’t think it makes sense to expose mechanisms that allow people to do more than that because those are just not going to be used.

CDA: I will jump in here. We are past time. Maybe we can get to rob’s comment quickly.

RPR: All right. I will try to be quick. So I kind of wanted to advocate for JavaScript beyond just the sites in particular, even beyond browsers and so on. I realize that the restriction you’re putting in here is for these sites. But outside of that domain, we’ve seen plenty of opportunity to benefit from things that do require global coordination such as the capability to freeze and lock down things. And I think in the future, if benefits were to be advertised with these things or on the case by case benefit if there was security advantages and if there were performance advantages, these are the things we want to take advantage of. We’re dealing with an internal system of Bloomberg maybe in the order of one thousand developers and found that coordinating that is feasible so if we get to 2 X performance win by freezing global object, that would be great. If these things were also available and still got the benefits of running things in the isolated container where the coordination just within that, that’s great. But if it could only be done at the global level, that would be very appealing.

KG: Yeah, there are definitely cases where this kind of thing is valuable. Just, I don’t think that it ends up being valuable on the web in general, and things which are not usable by JavaScripts like major consumer, I don’t think that it is necessarily sensible for the committee to be specifying those things.

CDA: We are now a few minutes past time. Can you be very brief, please.

KM: Just on the 2 X note, I think that’s—you probably never see anything close to that. You would see any speed up because at least in JSC, we have code that you try to change—attach called the watch point and try to change any of those things with jet son all of the code and assume those were the right values. We don’t do run time checks on the values like day. So my guess it would just be basically be the convenience and might save some memory and we don’t have to allocate the objects that watch for all of the functions that watch every property of every prototype that you touch would be the main benefit would be memory wins and not necessarily through put performance wins.

KG: Fair. Thanks for hearing me out. Wasn’t seeking consensus or anything. Just presenting some background and my own opinions. That’s all I got. Thank you.

CDA: Thank you Kevin. Thanks to all of the presenters today and to our notetakers especially. Really appreciate everyone’s help and we’ll see folks tomorrow. Have a great day.
