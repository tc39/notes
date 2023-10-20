# June 01, 2020 Meeting Notes

-----

**In-person attendees:** (none)

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Yulia Startsev       | YSV            | Mozilla            |
| Rob Palmer           | RPR            | Bloomberg          |
| Aki                  | AKI            | Paypal             |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Marja Hölttä         | MHA            | Google             |
| Waldemar Horwat      | WH             | Google             |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Rick Button          | RBU            | Bloomberg          |
| Chip Morningstar     | CM             | Agoric             |
| Myles Borins         | MBS            | Google             |
| Robin Ricard         | RRD            | Bloomberg          |
| Jason Williams       | JWS            | Bloomberg          |
| Mathias Bynens       | MB             | Google             |
| Shane F. Carr        | SFC            | Google             |
| Ujjwal Sharma        | USA            | Igalia             |
| Bradford C. Smith    | BSH            | Google             |
| Mark Cohen           | MPC            | PayPal             |
| Kris Kowal           | KKL            | Agoric             |
| István Sebestyén     | IS             | Ecma International |
| Philip Chimento      | PFC            | Igalia             |
| Kevin Gibbons        | KG             | F5 Networks        |
| Michael Ficarra      | MF             | F5 Networks        |
| Frank Yung-Fong Tang | FYT            | Google             |
| Devin Rousso         | DRO            | Apple              |
| Justin Ridgewell     | JRL            | Google             |
| Leo Balter           | LEO            | Salesforce         |
| Ilias Tsangaris      | IT             | Evernote           |
| Michael Saboff       | MLS            | Apple              |
| Ron Buckton          | RBN            | Microsoft          |
| Ross Kirsling        | RKG            | Sony               |
| Mathieu Hofman       | MAH            | Stripe             |
| Mary Marchini        | MAR            | Netflix            |
| Chengzhong Wu        | CZW            | Alibaba            |
| Jordan Harband       | JHD            | Invited Expert     |
| Ukyo Pu              | PSY            | Alibaba            |
| Tab Atkins-Bittner   | TAB            | Google             |
| Keith Miller         | KM             | Apple              |
| Mattijs Hoitink      | MHK            | Apple              |
| Shu-yu Guo           | SYG            | Google             |
| Dave Poole           | DMP            | Apple              |
| Jason Orendorff      | JTO            | Mozilla            |
| Thomas Levy          | TLY            | Evernote           |
| Jack Works           | JWK            | Sujitech           |
| Gus Caplan           | GCL            | Invited Expert     |
| Robert Pamely        | RPY            | Bloomberg          |
| Ben Newman           | BBN            |                    |
| Brian Terlson        | BT             | Microsoft          |
| Rick Waldron         | RW             | Bocoup             |
| Daniel Ehrenberg     | DE             | Igalia             |

## Housekeeping

### Adoption of the agenda

Adopted

### Approval of minutes

Approved

### Volunteers for note taking

* Robin Ricard (RRD)
* Mark Cohen (MPC)
* Shane Carr (SFC)
* Ujjwal Sharma (USA)
* Ilias Tsangaris (IT)

## Next meeting host and logistics

[Slides](https://docs.google.com/presentation/d/1NyD7mS7qFXUPVWtUhCsR7gPGEZJKCRwznx4a6efz9yU)

RPR: (presents slides)

RPR: no questions at the moment, please give feedback to the chair group via reflector or individual feedback, ideally in the form of a constructive proposal

RPR: chair group will have final say

## Secretary’s report

Presenter: Istvan Sebestyen (IS)

* [slides](https://github.com/tc39/agendas/blob/master/2020/06.tc39-2020-06-slides_Istvan.pdf)

IS: (presents slides) It is published as TC39/2020/026. In general very quiet since the April TC39 meeting, which is a good sign at this phase of the year. The two drafts (ECMA-262 and ECMA-402 2020 editions) have been published within Ecma. The RF “Opt-out” has been launched on April 2, 2020 and closes tomorrow on June 2, 2020. So far we have received nothing, which is good. I think the ES2020 on June 16-17 by the Ecma GA will go without problems. Thanks for the hard work.

## ECMA404 Status Update

CM: No news is good news.

## ECMA262 Status Update

[Slides](https://docs.google.com/presentation/d/1PxrkXXrtgnTgE14k8WnuKtjjyNDJ9ce15ZL_uvl-P9U/)

JHD and KG: (present slides)

SYG: agenda item later - we’d like to settle how we layer with other specs - like terms like layer and hosts - will go later in the agenda

BSH: BigInt spec issues - any effect expected on JS engine behavior? Are they inconsistent as a result?

KG: mostly editorial - assuming I have the right idea, it’s just the arithmetic in the spec that is badly defined but everyone is already the right thing. In some cases the thing the spec says not even defined. In other cases there are arguably wrong things that show up with arbitrarily large numbers in counters, etc.

BSH: But you’re not expecting your work to result in engine teams having to go change things?

JHD: No, but the things in 262’s release candidate are worth paying attention to, though test262 should’ve caught you.

BSH: So the tests tested the correct thing, even though the spec said the wrong thing?

MF: The spec was updated to the wrong thing about a year ago - engines have been doing the shift op correctly for many years

WH: Regarding your last point. There were lots of spec bugs that were introduced involving abstract numbers. Those are being addressed.

WH: On the topic of Syntax-Directed Operations, whichever way you gather them, I’d like there to be links to them from the other place. If you gather all the productions for an SDO in one place, I’d like there to be a link from the grammar production to the SDOs that they affect. It would make it much easier to read the spec.

KG: I can make that happen automatically in ecmarkup probably so thank you for the suggestion

WH: If you're reading a production and you want to know everything about what a grammar production does, this will help. Thank you.

MF: please leave a comment on the issue

## ECMA402 Status Update

* [slides](https://docs.google.com/presentation/d/1leorSs4oYKFh7WYxoR5H2YtYANM8YgYpGQuEW1jMFBc)

SFC: (presents slides)

Items seeking consensus:

* ecma402#430: https://github.com/tc39/ecma402/pull/430
* ecma402#438: https://github.com/tc39/ecma402/pull/438
* ecma402#444: https://github.com/tc39/ecma402/pull/444 - not had the chance to discuss that PR yet

SFC: No one on the queue - if there are no comments by end of presentation, we can record a tc39 consensus on those PRs

LEO: A note about the new Editorship. Thank you for this work. SFC hugely facilitated that work. Very thankful and will help Richard Gibson. Thanks to everyone in ECMA402!

AKI: Clapping!

RG: Thanks to Leo for assistance!

### Conclusion

Consensus on:

* ecma402#430: https://github.com/tc39/ecma402/pull/430
* ecma402#438: https://github.com/tc39/ecma402/pull/438
* ecma402#444: https://github.com/tc39/ecma402/pull/444

## Test262

Presenter: Leo Balter (LEO)

LEO: (presents active proposals in stage 3) everything is good so far. I ask the champions to frequently review the Stage 3 proposals table at the tc39/proposals repo as it guides us on what needs to be tested.

## Updates from CoC committee

Presenter: Aki (AKI)

* [CoC](https://tc39.es/code-of-conduct)

AKI: the coc committee met twice since the last meeting, fortnightly meeting, we did get 1 report in the past 2 months, was discussed it, all parties involved are satisfied. Importantly, reminding that the code of conduct exists, I should remind better but please review and understand what it asks of you and be prepared to bring that sense of respect to each others to every meeting… It has been a bit of a distracting world in the last few days. Each of us is trying to find ways to communicate better. We had a budget for training but couldn’t use it due to situation but are going to look for a communication training online. That requires time though so please stay in timeboxes. If you have been optimistic about them, please tell the chairs. Now requiring more note takers

Additional notetakers:

* Kris Kowal (KKL)
* Mark Cohen (MPC)
* Robin Ricard
* Shane Carr (SFC)
* Ujjwal Sharma (USA)
* Ilias Tsangaris (IT)

## Promise.{all,allSettled,race} should check "resolve" before iterating

https://github.com/tc39/ecma262/pull/1912

KM: (discusses PR)

This change makes it possible to implement `Promise.all`, `.allSettled`, and `.race` in ECMAScript using a `for of` loop.

KM: Any comments or concerns on this?

RPR: There is no-one on the queue.

KM: I will take that no-body has joined the queue and that there are no objections.

LEO: We need to coordinate someone to write a test for it. We have tests for the behavior you want to change.

KM: yea we need but I did not bother doing that without consensus but I will do that

BT: Is there any web compatibility risk here?

KM: If you are checking whether you got the resolve function off the prototype. You would have to capture this with a getter and check.

BT: I do this all the time. Just kidding.

BT: no concerns, this can proceed if tests are added anyway

## Ergonomic brand checks for private fields for stage 2

[Proposal](https://github.com/tc39/proposal-private-fields-in-in)

JHD: (presents proposal)

JHD: The primary hesitation from the previous meeting before stage 2 was that it would kill the original form of our shorthand. Asked Yehuda, who was the original advocate of the previous iteration, and he was okay with this proposal. I’ve had no feedback apart from general questions, such as is this proposal reifying the private field in any way? Stage 2 - I already have Spec text

WH: I’m just curious what’s changed since your last presentation, if anything?

JHD: only increased confidence this is the direction to go in and that Yehuda is comfortable with it and that leaving the shorthand syntax behind is ok. Nothing has changed from a technical perspective.

WH: Are you going with the alternative of using the `in` keyword?

JHD: yes the `in` keyword

DE: I just wanted to mention we discussed this in the frameworks outreach group, and a few people mentioned it would be useful in the context of weak sets usages. So I was happy to hear this had some more practical use cases.

JHD: Any issues with it going to Stage 2? If so, I’ll need some reviewers.

RPR: Congratulations on Stage 2

### Conclusion

Stage 2 Reviewers: WH, KG, and SYG.

## Logical assignment status update

Presenter: Justin Ridgewell (JRL)

* [proposal](https://github.com/tc39/proposal-logical-assignment)
* slides

* [issue for impl status traking](https://github.com/tc39/proposal-logical-assignment/issues/25)
* [main issue today](https://github.com/tc39/proposal-logical-assignment/issues/23)

JRL: Currently spidermonkey has this behind a flag, JSC has a flag, V8 has a flag. Spidermonkey is waiting for resolution before they unflag. We have implementations in Engine262 … Babel has had this forever. We are just waiting for unflagged implementations to move on to stage 4.Onto [the main topic](https://github.com/tc39/proposal-logical-assignment/issues/23) We realized a gotcha during implementation in Babel around the transform. When we assign foo with a logical assignment to an anonymous function, what do we expect the name after assignment?

The transform that all of the implementations Babel and TS do is transform foo to a logical operator and on the RHS foo = anonymous function actually assigns a name to the function. After this the foo function will have the name foo. The easy workaround is to use a sequence expression (0, fn) to skip the named evaluation of the function. The topic is whether we should use named evaluation for this case. It would make named evaluation easier. Asking the committee to help decide.

WH: Does somebody know under which conditions an anonymous function gets its name? Especially related to parentheses, comma expressions, and the like?

JRL: If you put it inside parentheses it still gets a name, because the parentheses are unwrapped due to ??? evaluation. If you put it inside a comma expression, it does not get a name, which is what I was referring to as a sequence expression.

WH: OK, thank you.

SYG: V8 is shipping this in Canary, stable in M85, unflagged

DE: wanted to agree with named eval for this, it would be weird otherwise

JRL: So that’s myself and DE are positive on named evaluation.

WH: What does named evaluation do in `foo = function() {} || …`?

JRL: In this case I do not believe it will receive a name.

DE: The reason named evaluation works is because it works consistently every time you have an equals and an expression that is directly a function. But it works every time after - if you have a colon for an object literal, or something similar, this really seems like it’s in one of those sets.

DE: is that a tradeoff would be making

WH: The analogous code for `??=` would be `foo = foo ?? someFunction()`. What happens in that case?

Named evaluation does not carry through to the function in that case.

```js
foo = function(){} || true
foo = foo ?? function() {}
assert(foo.name === “”)
```

DE: Named evaluation happens if you have multiple comma-separated expressions; I don’t buy the analogy you’re drawing.

WH: I’m aware that the real desugaring of `??=` is different from `foo = foo ?? someFunction()`.

DE: Maybe we should follow up on the issue tracker:

Perhaps we should discuss this with code samples.

KG: I have a response for that: we decided... The desugaring suggests named evaluation.

JRL: (writing on issue) https://github.com/tc39/proposal-logical-assignment/issues/23

WH: I haven’t had time to think about this.

JRL: using the desugaring example, that would mean that in order to have a faithful desugaring, you would always need to have `(0, function(){})`, which just complicates the output a little bit, but it’s not a huge win or loss either way. I don’t think it hurts anyone to doing a named evaluation in this case, it just makes the spec text a little larger.

WH: I’m ok with naming the function.

RKG: I don’t have a strong opinion one way or another, but I wanted to put out that the reason it’s so hard to decide on a desugaring is that the way it’s desugared isn’t the way you write code right now, so if you switch from something that doesn’t use logical assignment to one that does, you’d end up with a function name that wasn’t inferred before.

RKG: I was surprised that you were waiting for impl since all impls are shipping without a flag but are just in experimental releases

JRL: I think it was behind a flag in SpiderMonkey and V8. I think SM requires a flag.

SYG: V8 does not requires a flag

YSV: We have it behind a flag on nightly.

JRL: Queue empty now. I’d like consensus on named evaluation, if there are objections then I will just propose for stage 4 as-is next time.

(silence)

SYG: Need a stronger signal from other implementers, that we are implementing named evaluation before it’s shipping in stable channels. As long as I have that commitment then that’s good.

JRG: would jsc or sm want to say anything?

MLS: Those of us on JSC would need to talk about it internally to make sure it’s not too complicated.

JTO : SM will implement

### Conclusion/Resolution

* Tentatively ok to go forward w/ named evaluation

## Iterator Helpers

Presenter: Jason Orendorff [Mozilla] (JTO)

* [proposal](https://github.com/tc39/proposal-iterator-helpers)
* [slides](https://docs.google.com/presentation/d/1QVW_d4lpiFQ5X5czGWq0VMRN9cMLIGpt888TQoyFWpg)

JTO: (presents slides)

JHD: regarding opt 1, those iterators should not be generators in any way. They need to all be consistent incl. Strings iterator methods, don’t know if the existing onex could be iterator methods

JTO: it would be a change

RPR: Point of order, note taking is lagging...

JHD: will fill in my own comments later

JHD: so there are two consistency questions here, one is the functions themselves, the other is the iterators they produce.
Option 1 is endangering the consistency of the functions.
Although you’re right that the objects that they produce are different - the current methods inherit from iterator prototype, and so on. That seems a useful consistency to maintain.

KM: JHD, do you feel the same about opt3?

JHD: Option 3 seems viable in the sense that it allows the functions themselves to be consistent with the iterator producers.
But it does raise the question, if it’s producing iterator objects that are observably different - it’s fine if some of the iterators have a throw method and others don’t - I don’t think the shape needs to be identical, I just think we should either get rid of the existing hierarchy or make it consistent.

KM: that’s fine, was curious about your opinion

BSH: Have the champions considered the possibility of just having the objects returned to not have return and throw and then that just dodges the problem?

JTO: It does not dodge the problem because return is an optional method. If we don’t have that method then what will happen is if you break out of a loop over that iterator, it will silently not call .return() on anything, so cleanup will be skipped—so it does not dodge this issue.

BSH: ok

JHD: would we want `return` and/or `throw` to only be present on the iterator object when they’re present on the iterator object?

BSH the object always call through the iterator

GCL: return and throw is more than just passing but ensuring it is used correctly, if you are in a loop it is not just about calling but about the life-cycles, so the path of directly mimicking them. So for example, option 3, if you call .return on the map wrapper, it doesn’t directly call .return on the iterator that is mapped, but .return is called because of the way generators work. So it’s a balance.

KM: if we did opt 3, what about polyfilling? Are you able to make it semantically look the same as a generator in the presence of engine generators, or do you have to replace generators everywhere to polyfill it?

JTO: polyfill the other 2 are polyfillable, opt 3 is polyfillable but opt 2 you just write methods, opt 2 is longer than opt3, no big deal, I have a gist I can share...

https://gist.github.com/jorendorff/35504c2553170be98fc2810ccf60c608

JTO: This is untested code, just a sketch really.

YSV: I do have a working version of this if anyone wants to play around with it.

JTO: It may be surprising that option 3 is about 68loc but that is the result of the spec just having a little bit more control over looking at completion values and seeing what they are, and being able to separate them out into algorithms as needed, it’s a little bit harder to do that in JavaScript the language.

WH: Similar Q: If you were writing Option 3 in user code what would that look like?

JTO: The gist is not pretty, it's a consequence of generators turning out to be more complex than anticipated when first specified. I don’t think there’s a cleaner way to do it. I don’t want to claim that my code is as clean as it could possibly be, but there’s not an overall clean approach.

WH: I’m asking it from the angle of whether this is a user need that extends farther than writing a few spec methods. I’m also curious what’s inside `StartIteratorMethod` you call on the slide? How big is that and what’s in there?

JTO: that effectively calls the built-in gen to create the gen object and then calls on next and that’s all

WH: Okay, so that was simple.

JTO: But the previous question, the farther-reaching one, could you repeat that question?

WH: I was wondering if this is a more widespread user need than just for defining a few spec methods. Is this something a user will want to do in terms of forwarding an iteration protocol in general? This seems difficult to do from within a generator because the generator doesn’t get control before the first yield point, so you can’t get the required `return` and `throw` behavior at that time.

JTO: right, I don’t have the answer to that

JWK: I’m supporting option 3. I also need to write a generator in the spec, and I’ve found having a built-in spec version of generators can help me clarify the spec text. About the previously-mentioned identity problem of the iterator objects, we can force every method that uses the spec version of the yield step to have a unique object. That’s just a one-line mention so it won’t make the spec longer, and then we can still use the yield option to make the spec cleaner.

KG: regarding "one of the downsides of option 2 is loads of spec text"": not necessarily true, we could decide to not require copying every section every time, especially since we have abstract closures in the spec

But I’m also fine with option 3, I guess I don’t feel strongly.

BSH: One of the advantages of option 2 was that you could have more flexibility with having things handled differently for return and others; so with option 3 is the idea that you have all 12 helpers behave enough alike you don't need that flexibility?

JTO: That’s not quite what we’re saying - since the specification language has completion records in it, it ends up being nicer for specifying this sort of thing than actual generator code in JavaScript.

JTO: flexibility is there it’s more an issue of spec language, option 2 or option 3, whether the methods are generators.

JTO: I’d like to try to reach a conclusion here. I’d like to address the objection JHD made that all existing iterators inherit from Iterator.prototype; I’m not sure what was meant there, but all generators also inherit from the same prototype. So I don’t think that distinguishes option 2 and option 3.

JHD: I meant that the iterator that a generator produces is different. Same goes for arrays and string iterators. As opposed to them all being the same kind of object. And it seems like option 3 would make them all be the same kind of iterator, roughly indistinguishable from the others, and I think that’s worth looking at.

JTO: I think the whole point of the Iterator interface is that you don’t *have* to look through it. To the other point of a need for consistency, those were, … I think TC39 has a history of allowing some amount of inconsistencies when there’s a better way of doing things.

DE: I want to agree with that last point that Jason was making. Just cause we’ve done a bunch of one offs doesn’t mean we can’t co with a more consistent option now. It’s good to go with option three, but good to consider others. But I don’t know if that needs to be weighed the highest in this case.

KG: would we expect that we would use this pattern in the future for a new collection type? I would be opposed to that—I’m fine with iterators being their own little things, but I don’t want values to start observably being generators in the future.

JTO: thank you for your time

### Conclusion/Resolution

Feedback given; no approach has consensus yet. Please see this [issue](https://github.com/tc39/proposal-iterator-helpers/issues/97)

## Do expressions for stage 2

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-do-expressions/)

* [slides](https://docs.google.com/presentation/d/14UYf30NeOd5TFZ4QJFigwBLZVotOwuQq3E-BCMIhGgk/edit?usp=sharing)

KG: PSA, these are my opinions, not Dave Herman (DH)’s (original champion)
KG: (presents slides)

Nicer syntax for IIFE-like situations (Immediately invoked function expression)

SYG: Is the var-declaration in do-expressions in parameter position any different than var-declaration in sloppy mode direct evaluation in parameter position? ???? Is that a real issue?

KG: We changed the semantics for this recently - the change that we made was that the parameter declaration list was a single scope, rather than each parameter getting its own scope, and I think that’s surprising enough to warrant not allowing it - I think there’s no problem with this one.

SYG: So is the current proposal banning it?

KG: Yes, even though you can get something very similar through sloppy direct eval.

WH: I don’t see any spec text on the slides or the proposal. Can you point me to it?

KG: The spec text is in the proposal, it is… I haven’t updated it with my proposed semantics because they just consist of adding a bunch of early errors. It’s specs.emu in the repo.

WH: I have not seen any link to it.

KG: It’s linked at the top of the repository.

DE: That document is empty.

KG: So it is. I am sorry about that, there is spec text, it is just not linked anywhere. The current spec text consists of "return the result of evaluating block". I would need to make at least one change of that to make an empty do-expression have a completion value of undefined instead of empty.

WH: I’m not comfortable with this advancing to stage 2 because there was no link to the spec text that I could review before the meeting.

KG: I apologize, that was an oversight. I will not ask for stage 2 then, but I will ask for reviewers in case we make progress in the future.

WH: As far as the content, there are a few red flags. I am uncomfortable with two different notions of completion values. If we have two, it becomes very hard for folks to remember which is which. I am also uncomfortable with special casing return/break/continue. Instead, return/break/continue should do the same thing they do anywhere else: return exits the function, etc. Some of you might not like that, but I see it as the only reasonable way of handling those.

KG: Two comments. On the first one, I don’t think anyone needs to particularly remember the completion value semantics for eval. I don’t think that is a part of the language that people need to learn, but I see the value of consistency there. The second one, I don’t see having an early error as being the same kind of behavior—it’s just that one of these things is possible to write and one is not. I see why you would want to write these forms, I just wouldn’t want you to write these forms.
I think it is surprising to start allowing expressions to do something that they were previously not allowed to do.
There are open issues about these, so we can continue discussion on GitHub.

MPC: We have been meeting to resurrect the pattern matching proposal, we have been discussing do expressions as a potential side-by-side thing. I am happy that this is being brought up and hopefully advanced.

JHD: Agree, it would address a lot of questions about completion values.

MPC: Would it be possible to add some sort of keyword, effectively a return for do expressions, some way to explicitly return from a do expression, either as a requirement or as an optional thing.

KG: In principle, but I would prefer not to do that. It makes do expressions less like current statements. Main advantage is that the body is like any other collection of statements. If there is this new statement specifically for do expressions there is less value in them, so yes it would be possible but my preference is to not do that.

SYG: Strongly agree that we should not apply any Annex B hoisting behavior to do expressions.

WH: I agree with SYG.

DE: I really agree with all of the decisions you’ve made in this proposal. I like following the completion value semantics and subsetting it. I would be really interested in spec text, it’s just adding early errors, Those are the things I am interested in. Also, if these were in a readme describing the decisions made and the motivation, as you did in this talk, it’d be good. <joke>Also as a Stage 2 requirement, I want you to add an arrow function that follows Tennent’s Correspondence Principle.</joke>

KG: Uhhh… no.

DE: Yeah that was a joke (winks)

KG: But yes I will write down all of these decisions before coming back to ask for stage 2.

KKL: Mark couldn’t attend today but asked us to pass along that he likes banning some of the strange completion values via some of the syntactic restrictions. However, he is in favor of allowing return/break/continue in do expressions (i.e. have them return out of the function or do the standard break/continue behavior).

KG: I continue to be opposed to these. I don’t think that letting expressions have new kinds of control flow semantics that propagate out of the expression is a bad idea. So I don’t really want to champion this proposal if it includes that. My preference would be to ban these as an early error, and advance this still very useful proposal without allowing those syntactic constructs, and if someone really feels strongly about allowing them, they could bring a separate proposal to relax those requirements and work out all the edge cases (for example if you continue in a loop test).

DRO: I don’t see how this provides a benefit over an anonymous IIFE. I think it’s going to create a lot of footguns and require people to understand a lot more about the language. For example ??? is something developers will definitely run into.

KG: They won’t be able to write that.

DRO: Right, they’re going to try that and it won’t work, and they’ll be confused.

DRO: I just don’t think that this provides much benefit over an IIFE. I think it introduces a huge amount of complexity and foreknowledge to be useful.

KG: FWIW, a number of people said they would find this useful. IIFEs are awkward for a number of reasons, they're both syntactically heavy, and a more important concern, as more code becomes async, putting an async IIFE does not do the thing you want it to do - this do-expression [slides link needed], there is a tick for the fetch and for the blob, but you don’t introduce a new micro-task item to enter the do-expression, whereas with an async IIFE you do. And that's never the semantics I want. If I put an async IIFE there, I want a do expression, code that's lexically scoped off. I'm not looking to introduce a new micro task queue, but if I use an async IIFE I have to. Even without the example of await/yield, I think do expressions are useful enough, a lot of people have expressed that opinion. But I think with await in do-expressions, it is pretty overwhelmingly - like this isn’t something you can do with an IIFE.

DRO: You can’t do it with an IIFE, but it is possible to avoid the situation by creating another variable and a block. I think that yes, I don't disagree that the IIFE introduces a new microtask. But it now introduces the entire concept of completions as required knowledge in order for this to be useful.

KG: Having to know about completion values… I don't think that will actually come up. I think people will be surprised when one of these cases which is prohibited gives them a syntax error, but I don’t think they need to know that ahead of time in order for this to be useful. Writing it, getting an error that says you can't put a function declaration at the end of a `do`, put parens, will be fine.

DRO: While talking to colleagues internally, I have noticed that people don’t expect the behavior you’re talking about.

KG: This [slides link needed] was surprising to people?

DRO: Yes. The idea of completions is not very common in the developer community.

KG: I agree with you that we are introducing completions where they weren’t known previously.

MPC: I want to concur that I think it's extremely useful on its own. It solves something very cleanly with regard to pattern matching.

SYG: I do think that this is useful as presented, I do not like the alternative of using IIFEs, closures are cheap but not free. In addition to ergonomic issues, I am not comfortable with saying that closures are a perfectly sufficient way to do what do-expressions seek to do by simply creating more closures.

SYG: Since there's been a few voices in favor of nominal co-exits, I'd like to suggest we forbid them, because of code review, etc. I agree with what KG said, that it's possible to expect control flow in expressions. I don't want to work on that right now. For folks who do feel very strongly, I think the question is how strongly do you feel that this proposal have this feature initially? As far as I see, I don’t see any reason that we would be precluded from adding them in the future.

WH: I strongly feel that this proposal doesn't carry its own weight without those features. The main thing that you cannot do with an IIFE is return out of a closing function, and this proposal currently does not solve that case. So the ability to do return, break, and continue is the main improvement over IIFEs that this would have. You can already do non-local exits with exceptions. So there’s no user-visible reason why banning them makes any sense; the rationale is mainly our own spec complexity.

MPC: In favor of banning these, agree with SYG. WH if you think it is a useful case, I don’t see why it can’t be included in a future proposal, not this one.

WH: I said why. We’re short on time so let’s go to the remaining queue entries.

JHD: I’m very much in favor of banning it. I think the proposal already has massive weight without it, and I think the vast majority of users would not be using that. GCL in IRC said it should be banned by linters, but I suspect the vast majority of users would immediately turn on a linter rule to ban this.

LEO: I tend to have a preference for not banning. I believe this would be a natural… I want to see how this goes, and I agree with the next comment from RBN.

RBN: Want to make sure that throw is still allowed. If we are still focused on `do` expressions, I want to make sure that `throw` is still there. There are also languages that allow non-local exits from expression position. I think there is some value, but there is nothing wrong with banning them now and adding them at a later date.

KG: Throw statements would definitely be allowed. I agree with your motivations—it’s useful. Particularly the ability to throw in error position is not new, but the other ones would be new.

BSH: I would like this best if it worked like an inline function, so you have to `return` to be explicit about what is being returned from the expression, I understand that people would like to be able to control the flow outside of the enclosing function, but I think it leads to too much confusion.

### Conclusion/Resolution

* Not advancing yet to Stage 2
* KG will draft the spec before advancing
* Pattern Matching group will include discussions on the interactions with do expressions

## Record & Tuple (status update)

Robin Ricard (RRD) (Bloomberg)

* [proposal](https://github.com/tc39/proposal-record-tuple)
* [slides](https://button.dev/talks/record-and-tuple-tc39-june-2020.pdf)

RRD: (presents slides)

JHD: Equality to me feels like possibly a major semantic, and I’m not confident that this is something that can be decided during stage 2, rather than being decided before stage 2.

RBU: I agree with the need for us to find a good solution to this, but for the stage 2 requirement of agreement on major semantics, I think this works - the only equality semantics in question are -0 and NaN, and we already have solution spaces. There must be a sharp edge, we just need to decide which way we point.

JHD: And that’s why I phrased it as “confident”, because if all the solutions are enumerated and it’s something that we just need to reach consensus on one of them, then that can wait and be decided in stage 2. But it does make me uncomfortable.

DE: Can I clarify about the stage thing? This does fall into that scenario that Jordan was enumerating [that we have enumerated solutions and are confident that we can choose one]. Not sure if that’s clear but with prototype record wrapper, we have options that fit the basic constraints [another well-understood multiple choice decision https://github.com/tc39/proposal-record-tuple/issues/71]. From a user perspective, Records and Tuples should have deep structural equality. Three options: normalizing -0 to 0, a deep === check, or checking if they are exactly the same value without normalizing. My preference is the third one. MM pointed this out - I think it’s a category error to think of === comparing records and tuples to be comparing them numerically, because === applies to the type of the outermost thing. When you compare objects, you’re comparing identity; when you compare records and tuples, you’re comparing them to have the exact same contents; and for numbers, you’re comparing them numerically. So, that's one preference. But the solution space is enumerated. So for Stage 2, we'd have this champion group preference, which is the default way forward, but we could reconsider. Another topic like this is the prototype of record wrappers. Current idea is that they would have a null prototype which achieves the user-facing goal of having integrity [string-keyed property access reliably just returns what’s in the Record]. But there are other options we’re open to, to reach this goal, and within stage 2, we’re open to reconsider a different one. One thing we were thinking of doing within stage 2 was to do a sample implementation to investigate some of these issues. If it stays at stage 1, that doesn’t give us a signal of confidence from the committee in moving forward with the proposal at all. So I think it would be useful to get that confidence based on the solution space that the champion group is proposing.

RRD: We started splitting up what we want to decide for Stage 2 versus what we want to decide for Stage 3. We have milestones in the proposal repo. Things like Issue 65, for example, goes into that bucket. We've been interacting in there to validate this. The two outstanding issues outside the spec text are those issues. So if you’d like to move something out of the stage 3 milestone because you’d like it to be decided before stage 2, please go comment on an issue.

RBU: JHD, it looked like you were going to reply to DE, were you satisfied by his answer?

JHD: I’m not confident to take an opinion either way, I just wanted to register my discomfort but not in a way that would be a blocker.

WH: If something goes into Stage 2, the expectation is that it goes into the standard. Some of the alternatives listed are okay. But if we normalize -0 to +0, I would be opposed to that going into the standard. I do not want this to silently mutate Number values. There are cases where that’s very important. If you want to do complex numbers or small vectors, it’s very important that those values not be modified. If mutating primitives is the preferred alternative for some of us, I would not be comfortable with advancing this proposal to Stage 2.

RBU: It’s sad that Mark Miller was not at plenary today because he was the one originally advocating for normalization. I am not in favour of normalization either, but we listed it as a consideration.

DE: RRD mentioned this thing about symbols being banned as record keys. That was sort of a big long thread - I was wondering if people had any concerns about that.

JHD: MM isn’t here, so that’s probably worth asking when he’s in the room. The current semantics of record and tuple are like WeakRef?

DE: It’s kind of the opposite - WeakRefs can only reference objects, whereas these things can only take primitives. The issue at hand here is disallowing symbols as record *keys*.

JHD: The only question it opens for me is if I want to create a record and have it participate in a protocol, how do I do that?

DE: Records cannot have methods, so you cannot do that.

JHD: toString can take a string instead of a method, so that could work.

DE: I suppose for a protocol that wasn't methods but instead data properties, that would work, but it’s hard for me to picture concretely what a Symbol-based data protocol would look like.

JHD: Is there value for allowing Records to participate in protocols, with Symbol-keyed properties containing methods? Or would that break equality semantics?

DE: [Records cannot have objects (e.g., functions) as Symbol-keyed properties of Records because it wouldn’t interact with membranes well. A membrane typically wraps an object such that property accesses have their results themselves membrane-wrapped. Primitives, such as Records, cannot be wrapped this way, so there would be no way to membrane-wrap the function reached from it.] We can't pierce membranes. We have this split between primitives and objects. It gets complicated with proxies. I don't think it would make sense to have objects hanging off of records via symbol keys.

DE: The champion group presented a preference for strict equality semantics, where we don't recurse deeply. A tuple containing -0 wouldn't be equal to a tuple containing +0. Do people have concerns with this semantic direction? In terms of, would people be okay with going for this as the initial direction for stage 2?

WH: There is an issue on GitHub about this. It's long and interesting. I don't think we have the time to discuss it here.

RBU: I would reiterate that DE is not asking for consensus to land this in the language, but whether it is fleshed out enough to be sufficient for Stage 2.

WH: Which alternative?

RBU: The one that uses same-value equality semantics, the equivalent of passing two arguments to Object.is().

DE: And == would have those semantics, not just === equals.

WH: There are counterexamples on the issue tracker.

RBU: There are counterexamples of both sides on the issue tracker.

RBU: I think the question here is does anyone have any issues with same-value equality semantics as a first pass, not for the sake of consensus and stage advancement?

DE: I’m interested in all concerns especially people who haven’t chimed into the issue tracker.

WH: Semantically it’s fine. From a usability standpoint people will be surprised because -0 is not equal to 0.

RBU: WH, what’s your opinion when NaN goes into a record or tuple in that case? If a tuple with NaN isn’t equal to itself, is that expected

WH: If you want my position, here it is: From a language purity point of view, same value equality makes sense; from a usability point of view it doesn't. Folks will do things like multiply a zero vector by -3 and get a zero vector which isn't equal to the original zero vector. This behavior makes sense logically but it’s not very usable.
The other alternative is to have === be structural. That solves the usability problem; it’s also fine from language purity but it’s harder to implement. Because then if you want to know if a record is the same as another record, you’d have to use Object.is.

JRL: Did you just say `==` would use Object.is?

DE: Yes.

JRL: It would be extremely surprising, but we can discuss it later.
