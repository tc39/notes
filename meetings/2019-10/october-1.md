# October 1, 2019 Meeting Notes
-----

Waldemar Horwat (WH), Andrew Paprocki (API), Rob Palmer (RPR), Joe Sepi (JSI), Jordan Gensler (JGR), Jason Williams (JWS), Brian Terlson (BT), Aki Rose (AKI), Mark Cohen (MPC), Pieter Ouwerkerk (POK), Michael Ficarra (MF), Kevin Gibbons (KG), Shane Carr (SFC), Robert Pamely (RPY), Michael Saboff (MLS), Keith Miller (KM), Chip Morningstar (CM), Mattijs Hoitink (MHK), Devin Rousso (DCR), Jordan Harband (JHD), Leo Balter (LEO), Justin Ridgewell (JRL), Daniel Rosenwasser (DRR), Erica Pramer (ELP), Myles Borins (MBS), Richard Button (RBU), Robin Ricard (RRI)

Remote: Daniel Ehrenberg (DE), Ron Buckton (RBT), Caio Lima (CLA), Yulia Startsev (YSV), Jory Burson (JBN), Ben Newman (BNN), Kyle, HE Shi-Jun (HSJ), Pedram Emrouznejad (PED), Dan Ehrenberg (DE), Mathias Bynens (MB), Jonathan Keslin (JKN), Frank Yung-fong Tang (FYT), Brendan Eich (BE), Andy Fleming (AFL), Bradley Farias (BFS), Caridy Patiño (CPM)


## Report from the ECMA Secretariat


Presenter: Brian Terlson (BT)


TODO: Add slides


BT: I will be presenting in the István’s stead


BT: Most important point is that downloads of ECMAScript are proceeding at an alarming standard. Remains most popular Ecma standard ^-^


BT: The download counts are indeed very high


BT: Apparently nobody likes ES8!

JHD: it has a malformed title tag which would affect its SEO


BT: PDF versions of the standard are still problematic. People like to consume as PDF & hard copy. Since moving away from Word, PDF quality has regressed. Page numbers don’t work, tables break in awkward places, etc.


BT: Considering having a professional typesetter, but that would be problematic because it’s an ongoing document.


BT: Ecma wants to do an Ecma News thing, and our work should feature prominently in it. We need a volunteer to make us look cool: Tierney! 😎


BT: We have a new webpage! It’s an ongoing beta. There are also plans to improve the Ecma website. If you’re using it for its document storage capabilities, that will probably change soon.


BT: Archiving is a thing we have to do. It looks like we’ve gotten the archive for es-discuss, which will be preserved forever in the Ecma vault. István doesn’t know what to do with them though.


BT: [speeding through several slides]


BT: István will be joining us in the afternoon. He is driving through Europe and will join us from the road 🚗🏘


(note from MPC: sorry! I put this below the template…)


## ECMA262 Status Updates


Presenter: Jordan Harband (JHD)


https://docs.google.com/presentation/d/1Vdl98R4IypjB4H0jbyqiXjXppPnOV9T5sqnvQhvGVrE/edit#slide=id.g61f6c6f4c1_0_3


JHD: (presents slides)


## ECMA402 Status Updates


Presenter: Shane Carr (SFC)


SFC: (presents slides)


SFC: What is ECMA-402? It’s the Ecma internationalization library. Does date formatting, number formatting, plural rules, collation, and more! It’s everything under the `Intl` object and a few other scattered methods.


SFC: Specifically for PRs - the last two were already discussed in June and have consensus - but the first three need TC39 consensus.


BT: Have people taken a look at these three PRs that need consensus?


SFC: It’s possible that TC39 has seen those PRs but they weren’t in any past notes. Now they will be!


SFC: First PR: additional calendar, numbering system options via locale string


SFC: Second PR: relatedYear, yearName (improved handling of Chinese calendar); closely related to first one


SFC: One PR about style guide that has a timebox later in the meeting.


SFC: Stage 3 open proposals: Intl.RelativeTimeFormat, Intl.Locale, unified Intl.NumberFormat. All shipped in Chrome and Firefox, with varying levels of stability, planned for stage 4 in December.


SFC: dateStyle/timeStyle shipped in Chrome, close to public ship in FF, also a candidate for stage 4 in December. Spidermonkey team has been really on top of this. Very exciting!


SFC: Intl.ListFormat blocked by open ICU issues for FF, but shipped in Chrome. Has issues with inflection in languages like Spanish. Stage 3


SFC: Intl.DateTimeFormat.prototype.formatRange(): same status as above (open ICU issues for FF, shipped in Chrome). Stage 3


SFC: Stage 2: Intl.Segmenter: had lots of meetings with experts on this topic, championed by Richard, candidate for stage 3 in december. Really important API because it lets you segment a string in a locale-sensitive way for word-, sentence-, or character-breaking. Many very important use cases. Stage 3 reviewer volunteers needed!


SFC: See tc39/proposal-intl-segmenter README for context


SFC: Intl.DisplayNames is up for stage 3 this meeting! Frank Tang will present later.


SFC: Re Spanish inflection issues: there’s an issue open with a twitter link. This needs to be resolved before ListFormat goes out


SFC: Advertisement: get involved! See slides for more info on getting involved.


#### Conclusion/Resolution
- Consensus on PRs ecma402 #175, #351, #349
- Stage 3 volunteers needed for Intl segmenter - Philip Dunkel, Mark Cohen (both need mentors)
- Aki says there’s no conflict if Dan mentors


## Test262
Presenter: Leo Balter (LEO)


LEO: (presents slides)


LEO: Oddities #5 questions below


WH: How is this possible? There needs to be a newline and there isn’t one in the example, right?


LEO: I was saying we have a specific rule for do while. Can you repeat your question?


JRL: Is there a semi colon being inserted directly before x = 39?


KG: ASI applies when… (reads spec carve out for do-while, ECMA-262 section 11.9.1)


LEO: Now this is covered better in Test 262.


LEO: (back to presentation)


## Updates from the CoC Committee
BT: There is nothing to report.


WH: Is there anything we can do about the GitHub spam?


BT: What spam?


WH: Literal spam and some random issues


JHD: Just yesterday there were two spam issues on the ecma262 repository


BT: There's really nothing [we can do about it]; that's a GitHub-wide problem.  Are there specific repos that are affected?


JHD: It's always been a general github thing, it grows in scope as more people join, and more people do bad things


BT: Well if anyone has suggestions, that would be a good thing to share.


JHD: We have all the moderation tools that GitHub provides.  Users can be blocked, threads can be locked, etc.  The initial notification emails are largely unavoidable at this point though.


## Evaluate all computed names before any values in object literals needs a champion


Presenter: Jordan Harband (JHD)


PR: https://github.com/tc39/ecma262/pull/945


JHD: Discussed a few years ago in committee, received consensus on doing it.


JHD: There is at least one person who prefers the execution order not change. But Dan voices support for it.


JHD: Should we implement this? Are engines willing to implement this? Should we nullify prior consensus?


KG: This probably made sense at the time, but by this point I think the risk of breaking something is too high. There are ES6-aware minifiers now that there probably weren’t in 2017.


JHD: That's a fair point; I don't think there were users like that in 2017.  So maybe we let this slip too long.


DE: I'd like to discuss the consensus of this proposal.  We talked about this in Munich 2016.


SYG: I find it totally believable that now, after this much time, people are depending on the behavior.


JHD: That might be the case; my experience is that when these quirks are detected, there is invariably somebody who was proud of finding this quirk and wrote code that depended on it.  It would have been more of an academic exercise.


SYG: I think it comes down to, there's a weak preference to not try to find the real-world breakage.  That takes time.


JRL: Is this still necessary for decorator support in object literals, or can we just forget about decorators?


DE: I think decorators would work out fine for object literals with this thing happening differently.  There would be some differences but I have that draft, object literals are just kind of different from classes because they are evaluated once whereas classes have the fields initialized multiple times.


DE: When we talked about this in Munich 2016, we discussed the class evaluation order proposal from YK and BT.  That was a time to find a solution that met those requirements.  Class fields satisfies those requirements.  Part of the proposals was the suggestion that we change this evaluation order. What I understood was consensus that we were going in this direction, but that we would follow up with individual proposals and PRs.  So I prepared this needs-consensus PR and hoping a champion would pick that up.  But since that didn't happen and since this compatibility window is closing, we should probably close this PR.


JHD: Sounds like the overarching suggestion is to close the pull request, any disagreements?


LEO: Are there tests to update?


JHD: I'll check to make sure when I close the PR.


#### Conclusion/Resolution


- No engine reps are willing to put in the time; close the PR
- JHD will check for tests needing update on PR close


## Remove ToUint32 from array literal evaluation


Presenter: Daniel Ehrenberg (DE)
https://github.com/tc39/ecma262/pull/1124


DE: (presents the PR)


BT: Consensus?


#### Conclusion


- Consensus to merge this PR
## Prevent DFS invariants from being broken


Presenter: Jordan Harband (JHD)
https://github.com/tc39/ecma262/pull/1669


JHD: (presents the PR)


KM?: Is there a difference other than running microtasks, and does that also affect top-level tasks?


JHD: This could affect top-level await.


KM?: We would still have the microtask thing, right?


DE: This is not observable in any JS environment that I'm aware of.


JHD: I'm being very conservative here and erring on the side of getting consensus.


KM?: Oh, so the web does this in the same tick already.  So this is web-compatible.


DE: In HTML, a module is first fetched, and then it is evaluated.  It is an async read.


#### Conclusion


- Consensus on this PR.


## Redefine CatchParameter as FormalParameter


Presenter: Jordan Harband (JHD)
https://github.com/tc39/ecma262/pull/1126


JHD: (presents PR)


MF: I don't think the syntax pays for itself.  I think this is a really uncommon scenario.  Why is this justified?


LEO: (indecipherable)


JHD: If you do await a Promise.reject with no argument, you can throw undefined without an explicit `throw undefined`


MF: In those edge cases, do you really need defaulting behavior?


JHD: That's a legitimate question… when you way "worth it", there are pros and cons.


MF: Syntax is really expensive in my opinion.


JHD: In my opinion, this makes the syntax more clear.  The net change in the spec is deleting a line.


KG: I had to think when I saw the PR for the first time.  This is a new syntactic form.  If people think like me, which I don't know how many people think like me, this is a new form, not a simplification.  I agree with MF and I think we shouldn't add this to the language.


JRL: I think even stronger than not wanting it, we don't have consensus, and we actually have negative consensus.  We don't want it.


JHD: If that is the consensus, so be it.


SYG: I don't know how much I agree with the regularity thing.  It does seem that the use cases are rather strange.  Assigning to catch parameters.  There's a small datapoint that, parameter expressions are very hard to grok, in terms of scope and implementation.  Even though catch bindings re more-or-less let bindings, they have weird corner cases already.  To add parameter expressions already into that makes me uneasy.  It adds a whole layer of complexity of what happens in that area.


JHD: (discusses comment from allenwb on Mar 2, 2018 in the issue #1121)


JHD: I don't share KG's intuition; when I look at it, you can put defaults almost everywhere else, and it's weird that you can't put defaults in this one specific context.


RBT: Without having something like defaults, binding parameters … is inherently unsafe to use.  This is syntax that may not seem full in most cases.  Having the ability to be defensive would be valuable, even if that means adding a default.  So I don't know if I agree that this is a needs-consensus PR; maybe this is better as a proposal.  But I think this has value.


LEO: What is the threshold of, I don't want this syntax?  For other syntax proposals, I'm not allowed to say I don't want something, unless I bring a valid technical argument. This proposal is a missing part of the current code.  I know we're using a formal parameter.  This looks like a destructuring grammar; not only to destructure an object like catching a value, but also adding a default parameter.  I've been working on the tests.  To be fairly honest, I think this is much more valuable than some of the other sugars we've been discussing.  Syntax is expensive but I think this one is valuable, and it doesn't add much.  If you read the code, it's easy to understand, easy to consume.


WH: We've had this come up before.  After much discussion the committee decided to get rid of initializers where they didn't make sense, like in the for-in statement.  That didn't have much use and we got rid of it.  I'm surprised to see us moving back in the opposite direction.  I think this is not a positive change.


DE: It was a fun project with KG to work on revising that and reinstating it, even though it was sad.  In my opinion, I agree with LEO that this adds regularity.  I was expecting this would be supported.  But I think this isn't worth a big disagreement in the committee.  I would like to thank the community for their input here.


WH: To clarify, I'm skeptical, but I'm not strongly opposed. If you can show me a good use case, you might convince me to support this.


#### Conclusion


- No consensus on the PR. Looks like good proposal fodder, however.
- close PR for now


## Strengthening Atomics.wait and Atomics.notify (PR)


Presenter: Shu-yu Guo (SYG)
https://github.com/tc39/ecma262/pull/1127


[Slides](https://docs.google.com/presentation/d/1EwlEhNxSLs0spaKrvR44ogiKj69ZcyINjJz5sLAgpOU/edit?usp=sharing)


SYG: (presents slides)


SYG: Atomics.wait takes 3 arguments. It atomically reads the value of firstArg[secondArg]: if its not equal to the third argument, it immediately throws (not equal), if it is equal to the third argument it blocks the thread, waiting to be woken by a call to Atomics.notify.


SYG: End goal is that if we observe this B->C->A interleaving, A should throw


SYG: Currently in the spec the memory model introduces the sync events for notify wait pairs that happen if they've woken each other up. This notify did not wake this wait up, we need to add the synchronisation relation to help with this weirdness.
This idea is that anytime a wait and A notify are called, they use a mutex to lock around this list, we want to make that mutex be synchronised ….


JRL: Does notify force the memory model to flush all the writes?


SYG: It's more-or-less true; it's not specified as an explicit flush, but as ordering the mutually exclusive access to the per-location waiter list. (e.g., `A[0]` has a waiter list and `A[1]` has a different waiter list).


JRL: So it's not spec'd specifically, but that's what will happen?


SYG: That's correct.  The flush isn’t constrained by wall-clock time-before, but the happens-before relation in the model.  It flushes everything that should be visible by its agent.


WH: In this example, what would happen if `Atomics.wait` were `Atomics.wait(A, 0, 1)` and A were executed between B and C?


SYG: There's no synchronized relationship between A and B except transitively with C.  If A is before C then it could read 1 or 0.


WH: I was surprised that synchronization primitives such as wait/notify weren’t also synchronizing with the memory model.


#### Conclusion/Resolution


- Consensus to merge this PR


## Update on Optional Chaining and Nullish Coalescing


Presenter: Daniel Rosenwasser (DRR)


- [Slides](https://1drv.ms/p/s!AltPy8G9ZDJdqUDKxXPEzDwlcv3H)


DRR: (Shows Slides)


DRR: My plan is to have this progress to stage 4 by december (nullish coalescing).


LEO: Just FYI, I plan to start on the tests for nullish coalescing next week.  I know we don't have the tests but I have 1 day per week.  I am wondering how many of the implementations are unflagged?


DRR: My understanding is that they are all behind flags right now, so they are nightly versions or flagged.


HSJ: Operator precedence of nullish coalescing? It seems last meeting ask for check Swift/Kotlin way.


JRL: We had a [discussion](https://github.com/tc39/proposal-nullish-coalescing/issues/48) on GitHub about disallowing those operators (`??` and a comparison operator like `==` or `>=`) together.  We decided not to do that because we that's not the way the current short circuit operators behave.  You can freely mix `||` with comparison operators.  You just need parentheses if you want to be more specific.


DRR: I am not asking for Stage 4 at this meeting; I want to know if there are any concerns before I ask for Stage 4 at the next meeting. If there are any concerns you have, let me know before then please.  Thank you very much.


## `Object.map` for Stage 1


Presenter: Jonathan Keslin (JKN)


[Slides](https://1drv.ms/p/s!As13Waij_jkUqeV6IHXsJBMDkNIgXw)


JKN: (presents slides)


WH: What can the user function return?


JKN: `[key, value]` that can be transformed in any way


WH: Does it have to return a tuple? As opposed to nothing? (`null`, `undefined` etc?)


JKN: Do you have a preference?  I'm happy to consider either approach.


YK: If you allow mutation of the array, then it really suggests you don't have to return it.


BNN: Why `([key, value], obj)` callback parameters instead of just `(key, value, obj)`?  I'm not convinced that the convenience of returning the array in the base case is worth the weird syntax.  You could just take the two parameters and wrap them in an array.  I think we could save a bunch of array allocations.


JKN: That sounds fine.


SYG: I think it seems pretty useful to add as a new static.  Since one of your motivations is… (missed rest of comment)


MM: I'm concerned that this is setting a precedent for is a bad pattern. There's a bunch of higher order array methods like `forEach`, `reduce`, `some`, `every` etc all sorts of things you could imagine being equally applicable here. And why is `map` something special here? I think the allocation mistake is the fact that in order to use the suite of higher order array methods we turned it into an array, where as what other languages do is turning it into an iterable then streaming over it without having to allocate loads of arrays.
We should just not add special cases, if we're not willing to flesh out the special case until it’s memorably identical to the things it’s imitating.


YK: I more-or-less agree 100% with what MM said.  One thing is, `Object.fromEntries` does solve a lot of those use cases. `flatMap` is a question.  The reason I'm still in favor for Stage 1 is because I've written this code a lot of times.  I think it makes sense as a convenience, setting aside "solving the world's problems".


WH: I agree with MM.  I want to see the bigger picture.  I want to avoid getting into a situation where we have lots of `map`/collection method variants, each one being slightly different.


LEO: I've also found myself in cases where I've wrote this code, most of the time I use `Object.entries` is the same reason I would want some `Object.map` for things I've already been doing. We don't need to solve the whole work but i think this would be useful, if its consistent with `Object.entries`


JKN: I would love to see `Object.collect`.  I could look into a proposal for that in the future.  I think `Object.map` is a particularly useful utility.


LEO: I think these would be great problems to investigate at Stage 1.


LEO: I'd love to see anything we have here stick with how `Object.entries` right now for consistency. Note: please rely on `EnumerableOwnPropertyNames` for consistency w/ `Object.entries`


LEO: Web-compat: Do we know of any library setting `Object.map` today?


JHD: Iterable helpers proposal + standard Object iterator? There is tons and tons of code I could make more concise with something like this.  On the other hand, I'm sensitive to slapping every array method on Object. When I think about a world of slapping array methods on to things that may be useful. There is no easy way right now to get an iterator over an object (without writing a generator with a `for..in`-loop etc), so it does seem like there is a useful problem area to explore here which could be coupled with the iterator helpers proposal.  You could make an iterator for entries, and at the end, it would be good to have a useful way to say, I have an iterator for entries, now give me an object.  That sounds like something we can discuss at Stage 1.


YK: You mentioned collect, the version of collect that would work is one that takes an iterator parameter and creates a new things


MM: I think this discussion has aired a lot of the right concerns.  The question of Stage 1 is one I feel conflicted on.  I think it depends on what the goal is taken to be.  As the proposal is currently phrased, I would object to `Object.map` as Stage 1.  I don't want to see this thing take up committee time for one specific problem to save 10 characters of code.  Things like iteration helpers, you're paying the cost of a new proposal in order to get something that's very very highly leveraged that solves a wide variety of problems. If the goal of this were generalized to explore the larger range of issues, and not specifically the lack of `Object.map`, I would support that investigation for Stage 1.


YK: I think what I am comfortable with for stage 1 is exploring a way to make mapping an object more concise, which could include something like the collection helpers


MM: I would be OK with that.


JKN: That's acceptable


#### Conclusions


- Approved for Stage 1, not specifically for `Object.map` but for the more general problem of exploring making object mapping more concise, which could include something like collection helpers


## Records & Tuples for Stage 1


Presenters: Robin Ricard (RRI), Richard Button (RBU)


[Slides](https://button.dev/talks/records-and-tuples-tc39-october-2019.pdf)


RBU, RRI: (presents slides)


JHD: When you have a record inside a tuple it implicitly is that case, let’s say I cut and paste the value of city and put it in a variable on the outside, then put the variable in it wouldn't match and that would create confusion.


RBU: We’re not married to any particular syntax, if it would create confusion we could change it


JHD: The other Q is there a reason why if i move that to a variable it wouldn't just work? Why not just implicitly convert the object to a record?


RBU: We didn't do that for this proposal because it was implicit and we wanted to focus on the fact they don't have identified, we found it ergonomically painful to put an object


WH: [Referring to nested example `const nyOffice = #{isHQ: true, city:{city: "New York", state: "NY", country: "USA"}}`, where the inner braces don’t have a `#`] I don't understand how the implicitness works? Is it syntax based? Or is it that whenever you put an object there, it gets coerced from a regular object to a record?


RRI: This is based on my understanding of language grammar.  The idea is, as soon as you see this `#` symbol and whatever is going to be the expression behind, if you see object literal syntax it would say im


RBU: Basically, add context into the syntax.


WH: Inside an object literal, the thing after the colon is an expression.  Could I put an arbitrary expression?


RBU: Yes, but if you put another object there, it is a Type Error!


WH: I don't understand, but let's continue later.


BFS: Maybe it would be prudent to focus on just allowing that and keep the discussion on the implicit # maybe for a later stage.


RRI: Agreed; honestly, we're waiting for the committee to give feedback on these things.  If it is evident that this is a problematic thing we can actually discuss that, just comment on the existing issue for this one. I agree with WH on this one, if this was an expression it would become way more complicated.


MM: The subset of things you can express as values is similar, but not identical, to what you can write in JSON notation.  In particular everything you can write in JSON notation does have a natural decoding into those values.  So I would recommend to include a new JSON parse function.  In particular, out of the box, this would solve problems where people want to have a canonical order (e.g. certificate signing payloads).


WH: JSON allows duplicate property names, so how would that work?


MM: Do here what we do in JSON.parse() which is the last one read wins during decode. Now the thing is there's a few places where this is more expressive, there's a few things you can't directly say in JSON.  If there's going to be something like a JSON stringify, it would be nice to figure out, do you extend JSON for printing out canonical value types, or do you encode those types in JSON?  So that's the first question.


MM: Second, I dislike reusing names for mutation methods for methods that are analogues to the mutation methods but don't mutate, i think that's confusing.


MM: I think adopting naming conventions so there is a predictable relationship between mutating ones is good.  For example, instead of shift and unshift, try shifted and unshifted.


RRI: That’s a nice point, I'm glad you brought that up, would that be acceptable as a different thing to add those shifted or pushed methods to the Array prototype as well?


MM: I would be fine that once it's all worked out.  If we want to encourage people to compute with frozen arrays, I'm not sure arrays themselves are worth rescuing in that manner.  I think that's worth considering; you should definitely have that on your plate.  Altogether I think this is great, especially if you work out all the issues, that would really solve an important problem, such as for certificates.


MM: `#{...object}` ?


RBU: Good question; I don't have an answer.  Do you convert the object deeply?  Do you throw a TypeError if it has something that cannot be converted?


RRI: We could add helper methods.


WH: You're trying to gain reflexivity of `===` for records and tuples (i.e. `A===A`), but then you lose elementwise transitivity for records and tuples (i.e. records and tuples `A===B` if and only if they are elementwise `===` with each other).


RBU: Right, you do lose that. It’s kind of a footgun that I agree with because if you take the same deep-equality function that you wrote for an object and then using it on a record that has +0 and -0 on LHS and RHS, then it would fail when you might expect it to succeed. The oddities of === make this challenging.


WH: This will be a topic for a larger discussion.  We won't solve all of it here.


WH: What do `==` and the other relational operators such as `<` do on tuples?


RBU: What should they do?


WH: The canonical design in other languages (C++ etc.) is to make them do a dictionary order comparison: `<` would compare first elements; if they’re equal, it would go on to second elements and so on.


BE: `==` was what is now `===` and I changed it because the same people who wanted me to add "with" asked for it, and I regret it. It’s not just the people who roast you on twitter for this. I would fight to keep equivalence relation, ignoring NaN. I’m not in favour of losing transitivity.


WH: Can you clarify what you want?


BE: Excluding NaN, because NaN breaks reflexivity, I agree with YK on the intuitive explanation that recursive === makes the most sense. As far as syntax before semantics goes, I believe syntax is part of the package here. I’m in favor of this proposal going forward.


YK: I think there is space to add immutable data structures to the language, and I think the existing universe of libraries that are built on them are a good example of that. I think a good next step would be to add library support, and maybe then syntactic support. I'm deeply uneasy about jumping to syntactic support, it’s jumping over a lot of questions we could address in a less risky way by using a library feature.


YK: About `===`, I think the natural mental model is element-wise `===` like WH said.  NaN is a weird case.  I'm more concerned with +/- 0.  For +0 -0 we've done a lot of work to hide from the developer, including Maps and Sets. === observably have the same behaviour as +0 and -0 (they're the same). I think trying to fix the `NaN === NaN` being false is in this feature is not going to work.


WH: Prototypes can cause namespace separation issues such as `__proto__` appearing on a record. Would these inherit from `Object.prototype` to show that through?


RBU: `__proto__` is interesting, whether you can write to them. I’m not super sure what the right solution is there, the Record prototype follows the chaoi to the Object.prototype.


RRI: We didn't say anything about immutable functions.  If you're calling a method on these things, it has to be on the prototype.  You can't put a function on your record.


WH: Your definition of `pop` and some related methods is weird. In Array `pop` will return the last element. In your proposal for tuples it will return everything except the first element.


RBU: We have discussed the possibility of creating separate methods for all of those, I don't think it’s a bad idea.


WH: That would be a good solution.


RRI: I think we're going to go in that direction.


MM: If you have `”string”.__proto__`, you get String.prototype, etc.  I think Tuple prototype should be uniform with the other types.  For Record prototype, I think it should be empty for reasons WH suggested, which is weird.  For a record to not have it respond to .name for its own names for lookup that would be weird, but if you do have it respond to .names you don't want to mix namespaces.


BFS: Not all things in the spec have a prototype.  Just wanted to mention that.


BNN: I’m excited about this proposal because some code I write daily has idioms that would be solved by this. However, I would like to see a version of this proposal that does not require recursively converting child references. In JS we made a decision that `Map` keys and `Set` elements don’t have to be immutable (unusual); you only care about the references. I think the same should be possible here.


AFL: Are we suggesting supporting references in a tuple or record?


BNN: Yes, and I believe where that leads is to a version of this proposal that is shallow rather than deep. If shallow array elements (or object keys/values) are `===` to each other, it would be convenient to produce a `===` record, even if some of the child objects are not immutable.


BFS: There's an open issue on GitHub about allowing these to have prototypes.  I don't have a strong feeling one way or another.  I feel we're trying to equate immutable with stateless data structures.  I feel this proposal needs to take one of those two directions and not thread the line.


SFC: Food for thought; how do you see this fitting in with JS library APIs like String.prototype.match or Intl formatToParts: do we start returning immutable types in the future or do we keep using the old mutable types? How would you justify some libraries returning mutable types and others returning immutable types?


RBU: I would like to follow up with anyone who would like to talk about web compatibility.


CM: I was a little surprised that you said records are non-iterable


AKI: The question is “why”?


CM: Let me preface by saying I really strongly endorse this. If you have some existing JS code that is given an object or array that doesn’t mutate, you want to be able to give it a Record or Tuple and have it mean the same thing?


RBU: We should follow up after.


RRI: We just wanted to limit the scope of the proposal but we can follow up after.


DE: I just wanted to say that records are analogous to objects, so I think it makes sense to iterate over Object.entries for a record.


RRI: We do have a Record.entries and Record.keys in the proposal. We can talk about this offline.


#### Conclusion/Resolution


- Consensus for stage 1! Congratulations to RBU and RRI on their first stage 1!


## Grammar validity


Presenter: Waldemar Horwat (WH)


WH: This is a follow-up to a prior meeting discussion which I wasn’t able to attend and the agenda didn’t include the presentation ahead of the meeting, so I had no way of knowing what would be up for a decision at that meeting.


MM: Mea culpa. Sorry about that.


WH: We are trying to pull some of the features from Annex B into the main spec, and there are some issues with that.


WH: (presents slides)


MPC: What is the obvious and uncontroversial way to express if-else?


WH: We do similar things in the expression grammar - there are other places where it is not obvious and uncontroversial. A nonobvious example is that we have both `new foo` and `new foo(args)`, so if you nest `new`, you want to attach the parenthesized arguments to the closest unmatched `new`. That’s done by the expression grammar. The obvious way you’d have nested `if`-`else` attach an `else` to the closest unmatched `if` is by bifurcating the statement nonterminal using a grammar parameter (analogous to how we have yield and await parameters on some nonterminals) that indicates whether a statement ends with an unmatched `if`. That’s what I did when validating the statement grammar.


KG: (referring to "Understandability Matters" slide): Annex B.3.3 makes that very much not the case (hoisting out of blocks).


MM: The part of the grammar that is terrifying to me is HTML-like comments. That means you could write a series of characters that can be interpreted as two different programs with different meanings.


MM: This thing about a validity checker is a wonderful resource to have.  Is there something that is open to all of us such that we can feed in proposed changes to the grammar and see if it breaks anything?


WH: My thing is written in Common Lisp and is open source, but it’s very difficult to understand.


MM: Could you make it a tool online?


BT: Maybe for PRs to the spec?


KG: I feel strongly that a lot of the grammars and extensions to the main spec grammar in Annex B should be integrated into the main spec.  For example, Annex B.5.6 has the for..in initializers which were a webcompat thing.  I don't see any reason for this to be in Annex B besides that we dislike this construction.  And there are other sloppy mode only things in the main spec.


WH: I don't feel strongly about for..in.  Some other grammars would have problems.  HTML comments have problems.  There are two grammars, one with and one without HTML comments, and you’d risk jumping between them accidentally.


KG: I think it is confusing to have two specs.  The grammar is split into pieces.


WH: You can't avoid that.  In some contexts you mustn’t use the Annex B grammar, so you’d still have two specs.


JRL: For numeric literals and string literals, this is about octal escapes.  We already have errors that occur in strict mode but not sloppy mode.  We could do something like, if you are in strict mode, this is an Early Error and have just the one grammar for both strict and sloppy modes.


WH: I would not be opposed to doing that.  HTML comments are worse because they actually modify the grammar.


RBN: About tooling for grammar checking, there is a tool in ecmarkup.  On its own it supports a subset of grammar validity checking.  It catches spelling errors, etc.  I need to expose these features.  I planned to eventually expand those features to additional checks, like ambiguous parses, overlaps, etc.


SYG: MM, since what WH is against is these particular grammars, and there is reason for implementers to merge at least parts of this in.  Are you in support of splitting out specific parts of Annex B to merge?


MM: I want to fix the implied implementer freedom that allows two different implementations that claim to be conformant to parse the same sequence of characters according to two different meanings. There are a variety of ways to structure things to do that.  WH's suggestion of making the pointer to Annex B "informative" does not accomplish that goal.


SYG: Right, I’m asking if it can be partially solved by merging the non-grammar parts, would you be okay with that moving forward?


MM: That is strictly progress toward what I want.  So the answer is yes.  But, I think this double-interpretation thing was one of the most important issues.  This has resulted in actual security attacks.


SYG: In terms of understandability, and not wanting to cater to browsers, I'm surprised you said that users would refer to the spec to learn how to use features.  It's really hard to read the spec, even for implementers.  The primary audience of the spec from an understandability point of view is just the implementers.


WH: We have no understanding of what is going in in Annex B, not even in this room.  I don't want order-dependent grammars in the main spec.


MM: I want to point out a very important third audience of the spec: tool builders (transpilers, IDEs, linters, etc). It’s important that they are easily able to understand the spec. I propose that we adopt the philosophy, e.g. with HTML-like comments, that we use in the SES shim. First, we look at the source text with a regexp and if it contains something that looks like an HTML-like comment, we just reject it to err on the side of rejecting rather than allowing double interpretations. We have a split in the main spec between a program and a module; in Annex B, a module cannot contain an HTML-like comments. What I would like to see promoted to the main spec is a non-module must either honor HTML-like comments, or reject a non-module that contains an HTML-like comment.


WH: I think that would be a good solution.  I would be onboard.


MM: Great.  So are there any other ambiguities that might remain?


KG: modules already accept `a<!--b` - do you propose making that a syntax error?


MM: Just for non-modules.


KG: We already have the main spec which describes itself as normative, but which is not reality. There’s a separate annex which you have to understand if you want to understand what implementations do. It would seem to me that a better state of affairs if the main spec described what implementations do, with notes to informative sections.


WH: No, I don’t think that would be better.


KG: Why not? I feel very strongly that the main spec should be a full and complete description of what engines are required to implement.


WH: If you want to pull the pattern grammar to the main spec, you should figure out how to make it validate.


RGN: Can you clarify the order dependence when there are multiple valid productions?


[to revisit later?]


YK: I in general agree with MM’s attitude about this. I disagree with the idea that Annex B can be treated as informative. A lot of people writing tools do not have the luxury to treat it as such. On the grammar issue - even if two pieces of grammar have identical ASTs, there is a class of tools (e.g. scope analysis) that care about a bit more than just the AST. E.g. function/block has an AST that is valid without Annex B, but Annex B gives more context.


WH: YK, I don’t know what your conclusion is.


YK: There’s something to investigate here. To MM: what you were saying is you would be in favor of moving the semantics to the main spec and in sloppy mode, would refer to Annex B, and Waldemar doesn’t disagree.


MM: Yes.


WH: Semantics of functions is a tangent that is not related to my presentation.  [The timebox already got extended once] It’s an interesting topic, but if there are any grammar questions, I’d like to get through those first.


YK: The tangent is specifically moving Annex B?


(murmurs of yes)


JHD: At some time we need to talk about the non-grammar in Annex B.


MM: WH did not ask that we revisit any part of the consensus other than the syntax.


JHD: There is a property not-yet-discussed of having certain things in Annex B like regex compile or string substr, and it’s not just normative optional - that relates to implementers. From a community & code style standpoint, substr is deprecated, and a lot of people consider it that way. Those sorts of conversations are something that we should consider as we move things in, in terms of how we label things. We should label those features as being discouraged. I agree with KG that we could unify everything and leave informatives for things that we wish we should remove but can’t.


WH: I second JHD’s point.


MM: I agree with the aesthetics motivating that.  There are already things in the main spec that I don't like.  Anything that can be done to signal (even for mandatory things) that it is discouraged would be good.


#### Conclusion/Resolution


- For non-grammar, the previous consensus holds but we keep in mind JHD’s request that we clearly mark things that we want to deprecate or discourage, perhaps in prose where Annex B once stood
- For grammar issues, we adopt the principle that ambiguities cannot result in the same sequence of characters being interpreted as two different valid programs.  For numeric and string literals, we promote that into the main spec and state that there is a sloppy/non-sloppy syntax error issue.  For regex patterns, we didn't come to an agreement, but the issue is bounded because it cannot result in difference in where a regex ends.  For HTML-like comments, they continue to not be recognized in modules. For non-module code, they must either recognize HTML-like comments, or reject with a syntax error any non-module source text in which an HTML-like comment would have been recognized.


KG raises the issue of how to write one grammar that both modules and non-modules share, given their difference on HTML-like comments.


## Top-Level await: almost resolved


Presenter: Myles Borins (MBS)


MBS: (presents slides)


LEO: Please let me know if there are any normative changes to the proposal so I can keep it in sync with test262


MBS: Absolutely and there are no normative changes expected.


YK: I think that when we make the spec tell the implementer how to turn off eval, that is OK b/c it tells implementers eval is optional and users can't depend on it.  The fact that we're saying, top-level await is a thing that depends on an internal slot, it sounds like it is not great that service workers would have to add this in virtualization.


MBS: I think them turning it off… no one is shipping service worker modules anyway.  Right now there are still conversations to have.  I personally think it is a mistake to do this.


YK: I fully agree it would be better if service worker allowed top-level await.  But I think things like Moddable, service worker, etc., maybe want to disable top-level await.  My problem is that we should say that more clearly, not via a subtle internal slot.


DE: We could put this as a note - just say service workers disable this


MBS: I would like to avoid text in the spec that implies this is an optional features.


JHD: The original form of this was to my mind creating a third parsing goal.  This new approach, using the await slot is better because it's not based on grammar, but it still creates two ways you can write modules, one with and one without.  Realistically, service workers can do whatever they want.


MM: It would be possible to write normative test262 tests that service workers fail.


JHD: So to clarify, are you saying that a valid JS implementation must allow TLA in modules?


YK: That’s a choice we could make, but we have to make it.


MBS: I don’t think we can dictate what people do in their runtimes, but if they want to call themselves a valid ES module implementation, we should include text that clarifies.


MM: And test262 tests that they fail.


MBS: I don't want to turn this into a match between implementers and standards groups.  I think it's an option and should be framed that way, but based on my discussions with the W3C service worker folks, it seems their heart is in the right place.


DE: I’m not sure if there is much test automation for running test262 in different ? environments - this is something ??? was working on. Not sure it’s in anyone’s automated test runners.


YK: This keeps drifting into "competition between standards body" territory.  We shouldn't do that.  This isn't about whether we force service workers to implement TLA.  Moddable and other implementers have an ECMA-262-compliant implementation because they come here and tell us what they want.


JRL: Can you describe where TLA is banned in SWs? If I registered a SW at `google.com/sw.js`, where would it be banned in the file? Would it be banned in the files it `importScripts`?


MBS: It would be banned at `google.com/sw.js` and everything it imports.


JRL: What does banning it gain us?


MBS: It prevents slow startup of SWs, which block initial render of the page.


JRL: So this is a lint error, a bad practice, that we're trying to ban at evaluation time. Why?


MBS: This is something to continue discussing with implementers, this came back as feedback from TPAC


BFS: TLA for any transitive dependency… this escape hatch given would be required for transitive dependencies which may use TLA.  People writing service workers have scaffolding generators.  Those generators are going to be forced to assume async module at their top level because they don't know about the transitive dependencies used. The escape hatch of using dynamic `import()` just leads to always importing the top-level graph using dynamic `import()`, to be conservative.


HSJ: We had a concern that a deep TLA would block the whole app.  We want the same ability to ban TLA like service workers did.


MBS: Are you aware of changes that allow siblings to continue to evaluate even when there is a TLA?


HSJ: I'll need to double-check.  Last I read the spec this was a problem.


MBS: Let's follow up offline.


YK: Unless there is some part of the semantics that is, you must run a function during the top-level execution, you can always structure your code to do the work at the top level…


DE: There's a startup problem that HSJ was referring to.  Run-to-completion could be one issue.  In Node, people sometimes use blocking I/O if you really need to execute an operation before a module finishes evaluating. TLA helps avoid this situation. Even without TLA, you could have a dependency that is 10 MB and causes performance problems.


HSJ: No easy way to use tool to avoid the risk.  It's not easy to check through all the dependencies.  If you use webpack, you can check for TLA, but without that, you can't.  Another possible risk is, if currently you have something async, you might use an async function.  It's possible that some developers do not understand the difference between async IFE with TLE and they will…


## globalThis to stage 4


Presenter: Jordan Harband (JHD)


#### Conclusion


- Approved for Stage 4


## for-in order for stage 3


Presenter: Kevin Gibbons (KG)


[Slides](https://docs.google.com/presentation/d/1he7vS-Vfi9UH9RSpc3ZQ0tIxCyhprcvdGBNUlrw_OBY/edit)


KG: (presents slides)


YK: Does this allow you to observe proxiness?


KG: You can already observe proxiness because browsers have already chosen to have different for proxies vs regular object.


YK: I mean, if someone hands you a proxy that has no properties, and you add properties without knowing it is a proxy, and then you do the same thing to a regular object, can you now tell the difference between those two situations?


KG: I think that won't be the case in normal situations unless the proxy handlers have side effects, but in theory it could depend on what kind of mutations you do, and engines are allowed to do what they want to do.  This doesn't restrict or permit engines to expose proxiness in any way it hasn't done previously.


MM: The proxy thing still confuses me. I would think that because the proxy traps to a handler that does something, things would be more deterministic for a proxy than for other things. Is Reflect.ownKeys deterministic, even for proxies?


KG: Yes.


MM: If you do for-in on a proxy directly, do all the engines also do the same thing there?  Not a proxy up the prototype chain.


KG: No, they do wildly different things.


MF: Does there exist an implementation that is currently compliant with the spec that would not be compliant after this change?


KG: There is an open bug against Safari for an edge case which is arguably disallowed by the current spec text - it was intended to be at least.  This spec text makes it more explicit that this is forbidden.  Also there are known bugs around Reflect.ownKeys which are present for for-in as well.  If they fixed the bugs in Reflect.ownKeys, that would probably also fix it in for..in.


#### Conclusion/Resolution
- for-in order has stage 3!

