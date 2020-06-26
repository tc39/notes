# July 24, 2019 Meeting Notes
-----

Daniel Rosenwasser (DRR), Andrew Paprocki (API), Adam Klein (AK), Shu-yu Guo (SYG), Michael Ficarra (MF), Jordan Harband (JHD), Alex Rattray (ARY), Pieter Ouwerkerk (POK), Michael Saboff (MLS), Keith Miller (KM), Aki Braun (AKI), Brian Terlson (BT), Ron Buckton (RBN), Till Schneidereit (TST), Yehuda Katz (YK), Aaron Davis (ADS), Sebastian Markbåge (SM), Andrew Burgess (ABS), Jonathan Keslin (JKN), Ashley Hauck (AEH), Peter Hoddie (PHE), Patrick Soquet (PST), Ben Coe (BCE), Waldemar Horwat (WH), Mark Miller (MM), Chip Morningstar (CM), Erica Pramer (EPR), Kevin Smith (KS), Adrian Hall (AHL), Caio Lima (CLA), Ben Lichtman (BLN), Tierney Cyren (TCN), Shelley Vohr (SVR), Michal Hollman (MHN), Bill Ticehurst (BTT), Dean Tribble (DT), Godfrey Chan (GCN), Guilherme Hermeto (GHO), Jordan Gensler (JGR), Leo Balter (LEO), Dale Bustad (DBD), Joffrey Richten (JRN), Shane Carr (SFC)

Remote:
Bradley Farias (BFS), Gus Caplan (GCL), Kevin Gibbons (KG), Pedram Emrouznejad (PED), Yulia Startsev (YSV), Mattijs Hoitink (MHK), Ross Kirsling (RKG), Justin Ridgewell (JRL), Caridy Patiño (CP), John-David Dalton (JDD), Paolo Severini (PSI), Benjamin Georges (BGS), Paul Leather (PLR), Mathias Bynens (MB), Aliaksander Palpko (APO), Shi-jun He (JHX), Ravi Jayaramappan (RJN), Sanket Joshi (SJI), Jose David Rodrigues Veloso (JVO), Mike Samuel (MSL), Frank Yung-Fong Tang (FYT), Rob Palmer (RPR), Diego Ferreiro Val (DFV), István Sebestyén (IS), Jason Williams (JWS), Richard Gibson (RGN), Seth Brenith (SBH), Suraj Sharma (SUS), Steve Faulkner (SFR), Chris Anderson (CAN), Michael Fig (MFG), Valerie Young (VYG)

-----

# Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/07.md)

## Promise.allSettled

Mathias Bynens, MB

- [proposal](https://github.com/tc39/proposal-promise-allSettled)
- [slides](https://docs.google.com/presentation/d/1qhYDRlsvyVUtveT2tS0mJtzG-xe9islO6-t2wMQUJso/edit)

> Seeking stage 4

MB: (Presents slides) Are we ready for Stage 4?

LEO: I have a meta question—what happens if an editor finds something (i.e. has feedback) and it’s in Stage 4?

MB: Then we change the PR and address the feedback. If the feedback is significant, in that rare case, we could bring back to Stage 3, but I think that should be rare because normally Stage 3 already has a rigorous review.

LEO: Thanks—just wanted to ask for TC39 in general, what should our plan be if there is some feedback at the late stage. Thank you for this great feature.

YK: I was noticing that the name for `Promise.allSettled` is long, which is not problematic necessarily, just strange.

MB: `Promise.race` in hindsight should have been called `Promise.anySettled`. We could add an alias.

YK: I don't want to make that have to depend on this at all.  Is there interest in that?

MB: There is interest, we happened to discuss this in a previous TC39 meeting. Domenic, myself, and a few others seemed to be in favor. But either way that should be a separate proposal or PR.

MB: Thanks to Jase Williams & Robert Pamely for their work on writing the spec text for this feature!

#### Conclusion/Resolution

- Stage 4 reached

## Promise.any

Mathias Bynens, MB

- [proposal](https://github.com/tc39/proposal-promise-any/)
- [slides](https://docs.google.com/presentation/d/1WbE3squBN76_4SIHRmOQKrzglaQAVizMQZ8MqipoM4U/edit)

> Seeking stage 2 or 3

MB: (Presents slides).

MB: I'd like to resolve if the `errors` property on the `Error` object is enumerable or not.  The `message` errors property is not enumerable, so I feel like we should follow that.

?? (on phone): Consistency seems good.

MM: Consistency gives you what answer?

MB: The message property is not enumerable, so we would make the `errors` property not-enumerable as well.

YK: Not a blocking concern, but I don’t think consistency is necessarily the overriding concern. I suppose things that generally are enumerable are iterable, which could be useful?

MB: No, if you to `Object.keys`, for example.

YK: I find it annoying as a user if I can't figure it out quickly.  I find it annoying if we don't include utilities that would otherwise be useful just for some strange historical consistency reason.

MB: I’d like to resolve this today.

MM: I didn't know about `Error.message` not being enumerable.  But in addition to that, built-in properties across the ECMAScript standard are not enumerable.  If there are enumerable properties, that's an inconsistency to that pattern.

BFS: There's a difference here I feel. When we’re talking about the enumerability of properties, most of the non-enumerable things are defined (except for symbols) in their own way.

JHD: Symbols are enumerable too, by the way, just not in the same way.

BFS: `.errors` is something I feel, if we include it, is something that is intended to be accessed.  Is there an argument for consistency either way?  Because most "own" properties appear to be enumerable.

YK: This is just talking about the foreign operator, `Object.keys`, etc.  This doesn't affect debugging tools, etc.  This doesn't reflect reflection, right?

MB: Yeah.  Tools can still detect that properties exist.

YK: So, in particular, it would mean that people who try to use sloppy copying would see it. But it wouldn’t affect more robust tools.

MB: Yes.

SLN:  So the error argument that comes from the `catch`, is that an array?

MB: It has to be an `AggregateError` instance.  Errors are always an instance of an `Error` subclass.  It would be weird to start throwing regular arrays.  So we wrap it in an `Error`. This is explained in more detail in the proposal README.

DT: Quick question on the `errors` property. Do you expect that developers to check the type of the error object (`AggregateError` or otherwise)? Does that affect enumerability?

BT: Does the question of enumerable or not affect the user's ability to detect an error?

MB: It wouldn't impact feature detection through simple property detection.  At least if you do, `if (error.errors)`, that is not affected by whether or not this is enumerable.

JHD: The only thing it affects is `for .. in`, spread operator, `Object.keys`, `Object.assign`, etc., none of which affects people trying to check for an aggregate error.

JHD: If you spread the entire `errors` instance, it would not copy the array.

MB: That same problem already exists for message.

JHD: I just tried enumerating properties of an Error instance and I found inconsistencies between browsers.  So I think anyone who would be doing this already has to use a hacky workaround to browser differences.  So I don't think it's important to make the new property enumerable.

YK: I think what JHD just said is persuasive to me. I think it’s probably not true that `...errors` is uncommon. But I think the fact that some of the properties on `Error` are not enumerable today makes it fine for it to continue to be inconsistent in the future.

MB: Any objections to Stage 2?

BT: Let’s take this one proposal at a time? Any objections to Stage 2 for `Promise.any`?

(no objections to Stage 2)

MB: I'll work for Stage 3 next, but not today.

LEO: Why aren't you asking for Stage 3 today?

MB: Not everyone has done their full review.  There have been recent changes landing to the spec.  I think it would be better to wait for the next meeting.  But I appreciate the review work you've done.

#### Conclusion/Resolution

- The `.errors` property need not be enumerable.
- Consensus reached for Stage 2.

## `String.prototype.replaceAll`

Mathias Bynens (MB)

- [proposal](https://github.com/tc39/proposal-string-replace-all)
- [slides](https://docs.google.com/presentation/d/194gQ-GRfb9r17Vva9nevePkFUfPck1o_pXHM25LlVKs/edit)

> Seeking stage 3

MB: (Presents slides). I want to resolve what happens when you pass a non-global regex to `.replaceAll()`.

WH: Can you explain the background of what's up with `matchAll` and why it behaves it does?

JHD: `matchAll` auto-g'd for the intuition that "all" means "all".  It would be weird that you have to pass the `g` flag when you already have "all".  But the committee didn't like that because, for example, you had to clone the regex.  Another intuition point is that in an IDE, if you do replace-all on a regex, there's no need to set a `g` flag.  You could argue in JS that maybe the global flag was a mistake, and it should be only up to the method names to decide.  But we're not in that world.  Regular expressions hold the state of whether it's global or not.  So, if you make your regex non-global, it means that you only match exactly one instance. You’ve explicitly made it non-global. So if you've passed that non-global expression in there, and it matches more than 1 thing, I think that would be confusing? And that's not a situation we want to be in. Effectively, this means that `matchAll` replaces the need for `match`, which I think is a good thing—it’s how `match` should have always been. If, for some reason, I don't know if my regex is global or not, I can do `.global` on it. **Summary:** It would be contrary to the design of regexps if we auto-`g`.  And if we wanted to do something different, we should also change matchAll.

WH: So you said that you don’t want `matchAll` to clone, but it looks like it does anyway.

JHD: It does not do that now. Because regex’s have a `lastIndex`, we don’t want to observably mutate the passed-in RegExp.

WH: I’m looking at RegExp.prototype [ @@matchAll ], and it clones.

JHD: Thank you for clarifying.

RBN: One of the things I noticed was with the `split` implementation that we also clone and add the `y` flag. I don’t see how, if we do this for `split`, and have since ES2015, why is this an issue for `matchAll`?

JHD: I assume that the `y` flag was added in ES2015.  I assume that was done to handle the legacy behavior of `split`

YK: I originally quoted JHD for explicitly making it non-global by not putting `g` there, but I think we need to take a close look at the plain-English meaning of these APIs, and that `matchAll` is just a new version of `match`, if you look at the plain english meaning of `match`. Maybe we are stuck because `matchAll` doesn't already auto `g`. I would think that people using this API should use a linter to check that you put the `g` in there.  I don't like option 6.

MB: Yeah, the vast majority of people seem to agree on the part (it's weird for the regex to match only one position).  JHD seems to be the only one in favor of that.

JRL: (queue topic: "all" in method name has higher precedence than `g` flag (`str.replaceAll(r)`))

MLS: Are you suggesting that we throw or auto-`g`?

JRL: I prefer we auto-`g`.  But if we throw, that's fine as well.  But accepting a non-global regex and replacing only one match is the worst option here.

YK: To the extent that `matchAll` is changeable, we should do it now.

JHD: I want to reiterate that regardless of what my intuition is about the behavior, it's very important that `matchAll` has the same behavior of `replaceAll`.

YK: If we think Option 6 is bad, then that means that we have to change `matchAll`.  Is there a compatibility difference between the `TypeError` option or the auto-`g` option?  If there is a compatibility difference, then people are relying on the behavior of `matchAll`.

MB: We would have to do an investigation.

SLN: Is there any performance impact on any of these options? If an implementer tries to implement this, which is the least costly?

MB: Not much difference between any of them.

SLN: if we went option 1 it would be the fastest path or the most performant path?

MB: I didn't say that but yeah sure.

MLS: From a JavaScriptCore perspective, I don't think there's a performance difference.  Even auto-`g`.  (We already have a utility in JavaScript for changing global?)

MB: Yeah, same for V8. Performance is not a concern when making this decision.

CM: I find this whole discussion a little odd. If we look at the function definition, it says take the string, find the occurrences of the first arg and replace with second. If the first arg is not a string, it should still be replaced everywhere. I find using the `g` flag really strange. The global flag finds every use of the pattern, but we’re already implying that here. It’s an iterative replacement. Why is this even an argument?

JHD: Most of the people in the room decided to not auto-`g` on `matchAll`.  That was not my original spec design and preference, and this room overrode me.

CM: I don't remember that discussion.  We could look up the notes.

JHD: Many of the people in this room were party to that discussion

YK: I remember the discussion being long and very "in the weeds".

(JHD will hunt for the notes while we continue)

WH: We already have `matchAll` weirdness.  If only one of `matchAll` and `replaceAll` is weird, given some time, it will be hard to remember which one is the weird one.  We should either match the weirdness, fix `matchAll`, or name `replaceAll` something else.

MB: Unless we can change both, but we won't be able to do that until we do a web-compat investigation. Unless the committee decides that Option 6 is the way to go, which would be case closed.  Also, the battle of keeping replaceAll simple was lost when we decided that we accept regex.

MLS: About this being the reflecting point that we change matchAll, I reluctantly agree that they should have the same semantics here.

GHO: If replaceAll accepts regular expressions, and it doesn't auto-`g`, then do we really need to add it to the `String` prototype?

MB: The committee did previously agree that this is a problem developers were having.  We discussed that when we went for Stage 2 or Stage 3.

GHO: For substrings, not for regular expressions.

MB: Yeah.  The main feature we are trying to add is global substring replacement. (continues discussing the history of the proposal)

YK: I think the `/g` flag is pretty esoteric in all forms, the nice thing about `replaceAll` is that it replaces an esoteric feature with a non-esoteric feature

JKN: I agree `/g` is esoteric.  But people had to learn it. So I think `TypeError` for non-globals is most direct and safe.

YK: I don't think `TypeError` is safe. Option 2 only makes sense as a solution if we also to it do `matchAll` right now.

MPT: Would using a very explicit error message help get around the 'weirdness' of the API mismatch? A very explicit error message saying "you must provide a global regular expression to use a global regular expression here", there are 2 reasons you want APIs to match, (1) Developer overhead, (2) elegance. If the APIs mismatch but you get immediate developer feedback, that gets around 90% of the developer toil, so I think it’s worth it.

WH: What happens if you run `matchAll` with a non-`g` regex?

JHD: Currently you get 1 match.

WH: So currently you get silent bad behavior...

MPT: loud bad behaviour in my opinion being preferable

YK: I agree option 2 could be fine from an intuition perspective.  But, I still don't think option 2 is forwards compatible.

MPT: If there's code running in the wild relying on `matchAll` not actually matching all right now, it ain't great code.

MB: Is that the committee's decision? We need to do a web compatibility investigation before we proceed here?

If you say "ok these are good options, but we only want to do them if we know we want to change `matchAll` without breaking the web.”

WH: I’d be interested in pursuing this to see if it’s feasible. For web-compat, the two are semi-equivalent, the only difference being you run `matchAll` and don’t care what it returns.

MB: So just get data on how often (or if ever) `matchAll` is called with a non-global regular expression in real world code?

WH: Yep. If by some miracle it’s not called with non-global regular expressions, we could fix `matchAll` and live happily ever after.

JHD: It would also be useful if `matchAll` is used with a non-global regex, how the return value is used is also important.  It could be a web-compatible change.

DD: I think picking option 1 or 2 seem great to me because they’re forward compatible; we could then do research later on whether we can change matchAll.

YK, I’d like to hear his opinions.

YK: If we want to have a good chance to fix `matchAll` in the future, we should start now. I actually don’t think that it’s mandatory—there are options if we can’t. The bulk of the room seems to think we should change the semantics if we can, but it seems difficult to do without a web-compat audit. What am I missing?

DD: I guess, maybe if you take out the "later" from my thing.

YK: Happy to do option 2 now, and fix this later. Possibly with doing a web-compat audit.

DD: Ok.

MB: So the consensus seems to be to move forward with option 2, with the suggestion to investigate.

DD: Correction, we must investigate.

AK: Any objections to moving forward with option 2 for now?

AK: I am not excited for Stage 3 to be used to determine what effect this will have.

MPT: Option 2 could become Option 1 or Option 3 later.

YK: It feels like this is ready to implement, like, you could implement this with the error and it would not be much cost to implementers to change it. I was saying that if you implement with an error thats a thing you have to fill in later.

WH: It’s not the situation I want to end up in, but I’m not going to block things. I’d like `matchAll` and `replaceAll` to match or consider renaming if they’re not.

MLS:  I’m not sure it’s ready for Stage 3 if we haven’t decided between Option 2 and 3.

JHD: It would be nice to start the clock on this, if that’s an option.

#### Conclusion/Resolution

- No consensus for stage 3
- Committee preference for option 2 (i.e. throw for non-global RegExp `searchValue`s)
- Remain at stage 2 until we can finalize regex `/g` behavior, based on [web compat investigation of changing `matchAll`](https://bugs.chromium.org/p/v8/issues/detail?id=9551)

## Reduce the amount of implementation-defined behavior in `Array.prototype.sort`

Mathias Bynens (MB)

- [PR](https://github.com/tc39/ecma262/pull/1585)
- [slides](https://docs.google.com/presentation/d/1eFvK__9kRwHnkzZfNEL9FS3d9TJSRtxlXe3NVGmVVAU/edit)

MB: (Presents slides).

MB: Currently, the `Array.prototype.sort` leaves a lot of behaviour of implementation-defined.

We want to give engines the freedom to use whatever they want so long as it aligns with the specification.

MB: (continues presenting slides)

YK: Great slides, thanks. And I agree with this change.

KG: Do you have other test cases? I’d definitely be interested in test cases that cover accessors on the array itself, non-configurable properties on the Array. I’d be interested in if the length is changed during sorting. I wouldn’t really be okay with moving forward on this proposal before we come up with all these test cases. It would be really helpful to know what agreement (if any) there is today. [Listed on GitHub now: https://github.com/tc39/ecma262/pull/1585#issuecomment-514752423]

MB: Thanks for listing these examples. It would be great if you make sure these issues are listed on GitHub or in the meeting notes.

WH: If _length_ = 1, an implementation of `sort` doesn’t have to do anything. What do the implementations currently do, and what does the proposal spec for that case?

KM: Implementations currently immediately return if _length_ < 2.

WH: And what does the proposal do?

MB: That special case is not currently in the proposal.

WH: More generally, I second KG’s point.  There may be various other special cases where implementations don’t do what you're trying to spec, and we should be aware of those are before making decisions.

SFR: Shortly after stable sort was introduced, we got a lot of end-user reports of inconsistencies. Let me register my concern.

YK: The thesis of the change is that because browsers are already incompatible and that stability is hard to rely on in such an environment it sounds like making the browsers stable caused problems, so I’m curious how that played out.

SFR: I’ve heard direct customer issues that it works in Node 8 but not 10, and we’ve had API/SDK compatibility issues which require us to special case around that. Certainly we shouldn’t be using sort in ways it shouldn’t be used, but we have to deal with legacy code.

YK: The cases where that happens are when people are trying to tailor to a certain browser engine.

MB: It sounds like this isn’t necessarily related to sort suddenly becoming stable, but rather because of the underlying sorting algorithm changing (which is observable in various ways). It doesn’t sound like that’s the fault of sort becoming stable, so much as people relying on old implementation decisions.

YK: MB, are you saying, if browsers are already free to make the decision on the sorting algorithm, and you're relying on that behavior, then it's your problem if the behavior changes? (?)

MB: If you write code that depends on unspecified implementation details, that can bite you at any time, with or without this proposal. This PR reduces the amount of unspecified behavior, making the situation SFR describes less likely to occur in the future.

#### Conclusion/Resolution

- Continue discussions offline on GitHub.

## RegExp Match Offsets Update

Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-regexp-match-offsets)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkdY-MYw52uP-lJjreA)

RBN: (presents slides)

YK: If you are trying to make a Spanned version of this, which it seems like the point of this change, … it's not absurd to add the mapping functionality.

RBN: Since it's an options object, we could add more options later to do things like that.

YK: I'm happy with this API, but I just think we should continue to go in that direction.

MB: I want to voice strong support for the non-option-bag option. We should follow the priority of constituencies: developer convenience and API simplicity is much more important than the very minimal memory overhead.

SFC: I have gotten pushback before from working with APIs in string libraries (ICU) about using "indices" rather than "indexes". I looked in ECMA-262 and ECMA-402 and it looks like this is the first time we are exposing this string in public API. I want to make clear that we’re moving forward with “indices” with the knowledge that some developers might expect the spelling to be “indexes”.

RBN: I looked at prior art.  "Indices" is frequently used for the plural of the noun "index" especially in the engineering context,  "Indexes" is more of a verb form. Onigurama uses `captureIndicies`

WH: I much prefer the simplest solution with the smallest API surface. Here it is the “indices” approach, which avoids the complexity of passing options or worrying about the order in which callbacks are called and what happens if they start mutating things.

WH: I’m curious, is the act of creating the indices observable?

RBN: Only if you mutate the `Array` prototype. We use the same information that is used with the regular expression evaluation pass. If you have mutated `Array.prototype`, you might see this during the assignment of the values in the array.

WH: Since it is observable, doing it lazily as in the spec is the right way to do it.

YK: Callback is the actual primitive. You can think about getting start, end, and value, and that seems sufficient to support everything.

RBN: If you have the callback primitive and don't have options to get the indices, then you have to use the callback function for this case, which is a common (second most common) use case.

YK: Creating a bunch of secondary arrays that you have to map separately doesn't seem ergonomic to me.  It would be good to have a conversation with someone who works on parsers.  That's not an objection.

RBN: Would anyone be opposed to the simpler implementation despite the memory overhead, or is the memory overhead a blocker?

AK: It sounds like the implement feedback was that the memory overhead was problematic?

RBN: V8 opened the issue originally, but then they asked that it be closed.

MB: Jakob Gruber and Yang Guo from the V8 team initially had concerns that there _may_ be memory issues early on, when this proposal was Stage 1. However, now we did a detailed investigation, and found that for V8 the overhead would be equivalent to having all substring matches be 8 ASCII characters longer, which is very minimal overhead that is worth it for the simpler API.

BT: It sounds like we have consensus on the simpler API.

(**Ron is happy**)

BT: Let the notes reflect that RBN is happy.

RBN: (goes back to slides)

RBN: Stage 3?

#### Conclusion/Resolution

- The simpler API reaches consensus
- Proceeds to Stage 3

## Iterator Methods Update / Stage 2

Domenic Denicola (DD)

- [proposal](https://github.com/tc39/proposal-iterator-helpers)
- [slides](https://docs.google.com/presentation/d/16Abs2Terjd2J9VJW3HZHNcp7SYdhDmpVH6DR86TxYF4/edit)

DD: (Presents slides)

JHD: Add Iterator.from()?

DD: I’m open to it. I feel like the current mechanisms are reasonable (`.values` and `.entries`). If you call `Iterator.from` you don't know if you’re getting entries/values/keys. Whereas calling `.values` and `.entries` is explicit.

JHD: What about some kind of `Iterator.from(iterable)` to start the chain?

DD: One thing to keep in mind is that changes the design, with Iterator.syncPrototype/asyncPrototype. You'd probably then want Iterator.{prototype, from}, AsyncIterator.{prototype, from}.

KM: What is `Iterator` here? Is it your own class?

DD: It’s a namespace in this proposal.

BFS: Do we have any collections that are missing symbol iterator

DD: Across 262 and the web, no. All collections have Symbol.iterator. In particular on the web anything with indexed property access + a length automatically gets it.

JHD: I use `Array.from` for this purpose.  Then I have to reify an array to use these items.

DD: It's like, change this one word and your code will be lazy instead of eager

DT: This set of features is very attractive …

DD: Emitter lands in the push quadrant.  …

DT: In some systems, push and pull are the same thing …

DD: We made a pretty clear decision to make iterator/async iterator pull.  The emitter proposal allows them to be converted to an emitter, which is push.

Shu: We want our combinator semantics across collections to be consistent. How do we spec this such that we don’t open ourselves to observable differences.

DD: I agree that treating this as a stack layering issue might be a preferred outcome.  Methods on arrays should return arrays.  Methods on sets should return sets.

Shu: Yeah.  But we have some intuitive understanding of what Map does, and we don't want to duplicate that in the spec 8 times.

DD: Agreed. We can look in to factoring the spec such that the core shared logic is shared in the spec, not just in our heads.

Shu: (Usability question re: setting prototype; refers to "Refresher" slide)

DD: I'm open to two ideas here.  We have two bad options.  The first is to create a class that you can subclass from.  That seems weird.  I don't think instanceof would work, and there wouldn't be a reasonable constructor.  The other is what we have here, calling `setPrototypeOf`.  In the 90% case, you use generators; 9%, you chain off other iterators; and this is in the 1% case, that you have to use this power tool. So requiring setPrototypeOf when using power tools seems OK to me.

Shu: In relation to DT's question earlier.  The current thinking is that they should be complementary, since they both support push and pull.  But for performance and ergonomic reasons, you don't really want to do that.

YK: Im generally a fan. No objections. One thing I want to say. I think these conveniences are a close call in terms of how often you want to use them. If the methods are ergonomic you want to use them. If the way to use the helpers is to figure out some import and change my code style from array methods to standalone functions, I would not use it and end up with my own library.  It's a hunch, but how usable this thing is, is on the edge…

DD: Let me repeat.  The methods make this possible to be useful.  Whereas if this were functional, it's more wishy-washy to be useful.

LEO: This matches the use case I had for the reverse iterator.  The same thing that got me motivated for the reverse iterator is that you could put these methods in the method chain. Basically like this, having a mapper with a map function. You're showing my use case. I support that and want it to move forward.

DD: Agreed. Reverse iterator becomes more useful when forward iterators also become more useful.

MF: While I don't think `flatMap` needs to be part of this core set, I might be interested in bringing `flatMap` as a follow-up proposal.

DD: There were some interesting design questions which is why we didn't include it here.

MF: I understand, it would be nice if it were in the same proposal, but if it's not, I'd like to see a follow-up proposal.

YK: What’s great about `flatMap` is that you get back out the thing you put in. If you have collect and a polymorphic version of `flatMap` then I think it will work

DT: You had a particular list of operations there.  What's your process for locking this down as you get toward Stage 3?

DD: The usual champion process: take a bunch of input, find something that meets the constraints, etc.  asIndexedPairs is already identified as needing more input.  Then we'll get reviewers, and we'll discuss with them the reasoning.  So this is the time; get involved on the issue tracker.

DD: Stage 2?

(silence)

#### Conclusion/Resolution

- Proceeding to Stage 2
- Stage 3 reviewers: Michael Ficarra (MF) and Dean Tribble (DT)

## Built-In Modules aka JavaScript Standard Library

Michael Saboff (MLS)

- [proposal](https://github.com/tc39/proposal-javascript-standard-library)
- [slides](https://github.com/tc39/proposal-javascript-standard-library/blob/master/slides/JSL-TC39-July-2019.pdf)

MLS: (presents slides) Focusing on the two objections to advancement from June meeting, will pause after each for responses

JHD: During the last meeting, I was remote and it was a hard time difference. I want to clarify my concerns. Script is not “legacy”, Module is not the only future. I certainly hope people write Modules, but that is my code review position only, not my language designer position. Everything new that we've added has been equally usable in Modules and Scripts, except for the specific module-related differences like `import`/`export`. So the precedent in the language is clear: new language features should be added to both. This proposal itself is not a problem, but consider Temporal: it would not be available in current Scripts in the current proposal if Built-in Modules progresses. Users could use dynamic import, but then they have to wait until the promise is resolved.  If we decided that Temporal were available both via global and modules, that would be fine - but it seems that the point of built-in modules is to stop adding globals for new API. This is existential and it is troubling and we really have to decide on it in this proposal. I don't want to look back in 5 years and think we made a mistake. The best way imo to make people migrate from one thing to another is to make the transition as easy as possible. Removing features from Scripts does not make the transition easier, it makes it harder.

So to be clear, I'm not asking necessarily to add a way to import built-in modules in Scripts. I’m asking for a similar way in both Script and Module to get similar access to the same features. I wanted to explain my motivations more. I don’t want to consign Script to a legacy bucket when that’s not how I see it, or how I believe the committee does.

YK: I agree with JHD’s general philosophy. We should not add features to the language and then arbitrarily scrub them from the language. We have `import()` in Script, which means you really need to have a blocking import in your script on your HTML page which must be resolved before the rest of your page is functional. If you want to use jQuery, you must do this async thing, I think that’s inline with things in use today. When people use import they really want it to affect the subsequent parse. Basically, `document.write` and built-in modules not being compatible, I think, is fine.

BF: I want to harken the same idea YK was talking about.  We have patterns for sync loading with script tags in HTML.  But we also have other patterns like `defer` and `async` on script tags that move loading to a different tick than when they are parsed. If people are doing things like `jQuery.ready`, or `defer`, they need to do this in the same parse, rather than wrap their scripts in an async function and then calling their async function to guarantee the parse ordering. I don’t find it compelling to have a very, very (what I consider) niche thing to do it in the same tick, which would require major alterations to the language.

JHD: The other use case, as well as polyfilling, it is critical that built-in functionality is addable and removable. This is essential for security reasons. es6-shim has to overwrite the entire `Number` and `RegExp` constructor, for example. I don't want to have to write one bootstrapping script for Modules, and one for Scripts. We have non-module browsers, module with import map browsers, and module without import map browsers.

BF: I’m not convinced this is a concern, personally. I’m not sure this warrants adding synchronous import to scripts over this.

WH: I thought I heard that the proposal was for only supporting built-in modules within scripts — general modules would not be supported within scripts. Is that right?

JHD: Yes

WH: So then how would polyfilling work?

JHD: We were thinking about an initial loading phase.  In Node, you would pass a command-line flag to set up the built-ins as you want.  In JavaScript, you could have an import map, etc.  You wouldn't want to alter (different than mutate) built-in modules in the runtime.  Import map is a mechanism, but unless we have that mandate, we don't have that guarantee, which is important to me.

SLN: Exclusion from scripts would hurt tooling/bundlers across the ecosystem.  You exclude WebPack, for example; we use script until we are able to move to WASM.  From our standpoint, we don't care what the semantics are to get a built-in module from a script tag, but the point here is, it's a hard blocker from our standpoint as a bundler.

MLS: If you don't need to polyfill the module, you could just use an async import.

SLN: We could in theory add what we think is necessary.

MLS: Even if you do some polyfilling, you still need to do some async function generation.

SLN: Exactly, and then we’re in a code-generation state…

AK: Are you saying that accessing modules via dynamic import works for your bundling case?

SLN: Whatever the syntax is, we need to generate the code.  This isn't about async.  The concern is about having access inside of a script.

MLS: What you have to do right now is dynamic import.

JHD: Yeah, you can do it today with dynamic import, I’m asking for not requiring that asynchronous step.

JHD: So, There are concerns like, for example, you lose the order if you import multiple scripts if the scripts execute asynchronously.

AK:  There’s acceptable burden, and then there’s also some technical blockers and we need to separate those

BFS: Is it a problem?

SLN: There would be concerns with sync access, but essentially, not.

MLS: Is this a Stage 1 concern, or Stage 2?

JHD: It’s a major semantic. That would make it a Stage 1.

MLS: I’m essentially asking, does that make it a blocking concern for proceeding to Stage 2.

JHD: I’m saying, yes, this needs to be resolved before Stage 2.

MM: Top-level await only exists in modules, not scripts.  Would top-level await in scripts address enough of the pain that it goes away?

AK: Browsers are really unlikely to implement a top-level await in scripts that would block other script loading.

MM: The only thing I would advocate would be equivalent to the syntactic sugar.

YK: The fundamental reason why whether it works in a non-parentheses form in their script tag is important is because, today’s bundlers expect that to work. This doesn’t mean you cannot have a script tag, I’m just still trying to understand why that is.

SM: Some of these modules are expected to be pretty large, and we want to polyfill them.  One of the semantics is that you can asynchronously load the modules as you need them.  If you allow the built-in modules to load synchronously, that seems unfortunate for polyfills.

JHD: That's the status quo.

SM: Yes, but one of the nice things about this proposal is that you no longer need to block to load polyfills.

JHD: With this proposal, and with built-in modules, it will be impossible to polyfill things outside of the browser unless the engine implements something similar to import maps.

MLS: Import maps is one way to use the chain-loading process.  We could add something to the spec to allow load …

JHD: And then you've changed the requirement that …

(MLS and JHD exchange a bit more… not recorded)

BF: We're talking about, if polyfill code runs sync at the top of the page, and if it tries to access async-only code, it could install the very first reaction handler, it could do whatever it wants before any user code runs.  I don't know how user code could act on a built-in module before the first thing to act on it.  If a polyfill can always act before user code, what's preventing it from using its job?

MLS: Assuming the built-in module is async loaded.

BF: A polyfill can be guaranteed to be the first to access the built-in module if it is at the top of the page. Therefore it can be assured that it can modify the module prior to user code.

JHD: There's no runtime mechanism to polyfill module specifiers right now.  You can mutate something but you cannot alter what modules are loaded by what specifiers…

BF: With being able to do mutation/running prior to user code is this about missing an API for replacing specifiers? I do not believe altering resolution of specifiers is in scope for this proposal. See environment specific solutions to this such as import maps.

JHD: Import maps are a browser-specific API and should not be considered a solution. A solution to this problem would be one standardized by TC39.

BF: The problem of synchronous imports is based upon browser-based concerns, therefore the usage of browser-based solutions for browser specific problems is appropriate.

JHD: The browser specific solutions are insufficient without a language-based solution that can be used across environments.

BF: Problems caused by environment-specific situations can be solved by environment-specific solutions.

JHD: If I want to polyfill a missing module like `js:temporal` there should be a universal solution rather than having different workflows in different environments.

… Continued disagreement on scope of environment responsibility vs language …

POINT OF ORDER, no longer on topic.

MLS: I would like to move on to the second part of the presentation.  (continues presentation)

YK: What exactly are the requirements that TC39 would put on namespaces, formally?

MLS: The modules in the `js` namespace would be formally standardized by TC39.

YK: If we added modules in the `js` namespace, it's not clear how we could stop a third-party from adding modules.  It seems like we'd need to put in the spec to forbid that.

MLS: It seems like other implementers wouldn't want to use the `js` namespace.  We can't stop people from adding things to the syntax language now.

YK: If we can't disallow it, what do we do?

MLS: If we could disallow it, great, but …

MM: It's important to remember what power standards body does and doesn't have.  We're writing a spec that makes normative requirements.  Being in the `js` namespace is a claim about what process it went through.  They can put things there but then they won't be compliant with our spec.

SLN: (No matter the namespace, shared or adhoc. Can there be a statically analyzable token in the specifier?) Something in the specifier, like colon, can a tool guarantee that if we see a colon, can we guarantee that it's a built-in module?  Are there more restrictions on whether people can write module names or paths with colons?

MB: No: URLs would “work”, e.g. `http:foo` normalizes to `http://foo/`. Just maintain a list of known namespaces.

(SLN and others continue discussing this topic)

DD: I'm trying to figure out SLN's constraint.  If you see js:foo, you don't know if that's built-in or mapped to a polyfill.  So I don't see how you can allow this while also enabling polyfills to work.

SLN: Tooling is interested in easy ways to tell whether something is *intended* to be a built-in module, instead of trying to resolve it.

MM: I’m glad I finally understand the question. It seems to me that the answer is in the absence of special config, in terms of what default behavior of bundler is, the default behavior should be that any import for js:whatever or whatever target platform,  - in the absence of specific config - (I fell behind in note taking… help.)

SLN: Most tools try to be as automatic as possible.  We want to be able to skip things when possible.  Because I see this specific symbol or keyword, that would be ideal.

MM: That would be what you should do in the default case.

SLN: Can there be a specific way to signify built-in module?

MM: You could check `js:`

SLN: But that only covers `js:`, not other built-in module namespaces.  We want to know, somehow, whether this is or is not a built-in module.

YK: It makes sense that `js:` means pass-through, but … I don't think it helps us a lot to say that `js:` is reserved.

DD: I tried to give clear feedback last time that a single namespace is required from our perspective.  It could be accomplished by deferring this to other proposals, but as of now, separate namespaces is something that we object to, requiring everything in the ecosystem to go through the staging process.

MLS: I understand you want one namespace for the browser, and that is a blocking concern.  This committee supports platforms besides just the browser.  We don't talk to W3C about what we put into that.

DD: We share the global object, which benefits web developers, etc.  I want to see that model for built-in modules, like we have for built-in globals.  If we can alias everything in `js:` to a shared namespace like lib:, and prevent js: from resolving in browsers, that would be OK.

MLS: Chrome is allowed to have a `chrome:` namespace that aliases everything from all the other namespaces.

DD: We should not proceed with this proposal as it is if the intention is to have a separate `js:` namespace.

YK: Generally, developers have a distinction in their heads between what’s in the browser and what’s not. I agree there are cases like URL that are not clear.  As a user, the idea that there are things that are on the web but not in Node is (not?) easy to understand.  Today, you have to look at docs.  A single namespace that includes things that are in Node versus not is confusing.

DD: Developers shouldn't have to think about where this is standardized.

YK: In Deno (?), they are already doing this.

MLS: My high-order bit for different namespaces is about functionality.  Just like every other language that has a shared library, the functionality is delivered in a broad functional grouping.  Core language, web-based, JSON-based, and so forth.  That is the same model that JS programmers would like to have.  There may be overlap.  But my high-order bit is that if the user has `js:`, they can use that anywhere, web, node, embedded, blockchain.  But if you have `dom:`, they can't use that in the other environments.

DD: Not having a unified namespace is a blocking concern for Stage 2 for us.

#### Conclusion/Resolution

- No Stage 2.

## Collection Normalization update

Bradley Farias (BFS)

- [slides](https://docs.google.com/presentation/d/1xxkHqtScIvdCBI4IZOpWHh7AKCJs6s5edQQu06wnZYc/edit)

BF: (presents slides)

JHD: I thought the naming of keys and values was in ES6.  The observable name for Sets is that they only have values, not keys.  So I strongly endorse the decision you've made here.

WH: Regardless of what we call these things in the spec, you want to be able to write generic code that works with keys consistently across sets and maps.  That's why languages that support such cross-container genericity use "keys" as the name.  I would object to anything that doesn't let you work generically across sets and maps.

BF: Can you clarify what you mean by that? I don’t understand because you _can_ use toValue on a map as well.

WH: In languages which let you work with keys and values, things in a set are keys. Keys are compared, values are not. Keys must be unique (unless you’re talking about a multimap), values need not be. Keys are hashed, values are not. You can mutate a value in-place, but not its key.

BF: Auditing documentation on other languages, this does not appear to be true.

WH: A lot of them don't support genericity across sets and maps very well.  It's not relevant to this discussion.

BF: I would rather withdraw this proposal than use the name "keys".

JHD: Which prior art language are you looking at?

WH: C++

JHD: Anything beyond C++? BFS just listed a bunch of languages that don’t do that.

WH: I might not be remembering correctly, but lisp seem to do that as well.

BF: C++ calls them lots of things: elements, items, keys, values.

JHD: Are you concerned about generic code that has to consume both sets and maps?

WH: Using sets and maps generically: instantiating, constructing, accessing, etc. This does not include subclassing them.

JHD: Given that BF's proposal here is about creating a subclass, how does that affect what BF is discussing here?

WH: Let's take it offline.

BF: Would you seek to block this proposal based on other languages?

WH: Not based on other languages. I would object if this thing is unsuitable for generic code working across maps and sets, whether you are working with map keys and set keys.

BF: Then we would remove the ability to affect sets.  Would that be ok?

WH: I don't see what the point of the proposal would be if we do that.

BF: Then you could instrument maps, and maps are a fairly sizeable use case.  If I cannot move forward with sets, I would still like to move forward for maps.

WH: I don't want to go just for maps.

BF: Then we can withdraw this proposal.  I'm very serious.  I would rather withdraw this proposal.  We did an audit of other languages, as requested by the committee.

YK: We should not split the proposal; that's shaky procedurally.

MM: WH, do you have a concrete alternative suggestion in mind?

WH: I want to use generic code across sets and maps.  If you use "keys" consistently, like in the version of this proposal that we agreed to in January, it would just work.

BF: We also had objection at the last meeting about using "keys".  That's why we did the audit.

KG: I continue to feel that it's weird that this mapping is not bidirectional.  That is to say, when you iterate the collection, then thing you get out is the result of the toKey function.  It seems like that's not how anyone else does it.  I'm aware there are these cases in the DOM that do this unidirectional normalization.  In Java, C++, Rust, Python, you get the original thing back out, not the conversion.  It's weird that we're inconsistent with every other language's type.

BF: I'm not sure if that's true.  In Java, the array mapping function doesn't allow bidirectional.

KG: Hmm?

BF: If you use compute, that's Java's way of normalizing data when it comes in.

DD: The thing to keep in mind is that there are multiple use cases.  We're not changing the notion of equality.  This is about controlling what values go into your set.  This is especially important in an untyped language.  This enables you to reject what goes into your set or map.  So there's separate value with looking at equality, but that's beyond the scope.

BF: Correct we are not seeking any sort of equality hook.

KG: It's very similar to having equality.  The only difference is (?)

DD: If you call `.get`!  If you have your normalization, and it returns a string.  It changes the values inside the map.

BF: I want to present a different example. We have two user objects that are equal in Java via identity. If you put those in the set they’d replace each other. However this is akin to having two different user objects that may be equal but with a different value for a specific field. If you have two equal user objects with different emails, you could have a set with two different emails of these users even though they were equal. That’s what goes on with these normalization sets. Overriding equality is not what I’m seeking to do.

KG: Sure.  I'm proposing that for this proposal, it's weird that iterating gives you the normalized things out.  This is very close to what other languages provide, it's just that it differs in this one way.

BF: This compute in Java doesn't apply like you're talking about.

KG: For keys and things, people are doing different methods of conversion.

JHD: If the key normalization is, take every JS value and spit out the key "foo", what would you expect the normalization you produce?

KG: The first object you put in.

DD: Do you see value in the use case of having a set that contains only one type?

BF: The DOM APIs do coercion.

DD: Every API in 262 does coercion. If you look at the keys of an array, they are coerced to a string.

KG: This is a very different kind of coercion than the 262 APIs do.

DD: The use case is normalization!  That's the title of the proposal.

KG: I don't expect most use cases are capped to a string.  It will be very surprising to people that the thing they get out is not the same as the thing they put in.

YK: (question)

BF: I don’t think this prohibits us from adding an equality hook to my knowledge.

YK: If we add this feature and later on do we have to add a hasher thing, what happens?

BF: I'll have to check.

MF: The kind of behavior KG's behavior is expecting here can be used to implement the behavior BFS is proposing.  Can't a user of the API apply the mapping function to the value of an API to get what BFS was expecting.  So isn't what KG is expecting more general?

BF: I don’t believe that one can implement the other.

MF: What was wrong with my reasoning there?

BF: Let's say we have two fundamentally equal objects (users) but with a different value for a specific field (email address).  You have a set of emails to users.  If the two objects are equal, you have a collision. (1) you have a set of users, not a set of emails, and (2) you have them keyed so that you don't get all the emails, just 1 per user.  All this proposal does is, if you put data into a collection, it maps the data prior to being put in the backing store …  So if you have String for toValue on a set, and if I put in an Object, it calls toString before putting it in the backing store of that set.


MF: It does but I’m still failing to see how it can be implemented. All I was proposing that you would then apply that same mapping function on the way out.

YK: That might not be possible. There are lossy normalizations.  That's the point.

RBN: I've spoken with BT and others in the past.  I would be interested in putting equality customization to map and set, so that you can customize how objects compare and how hashes work.  Most implementations use hash tables internally, I believe.  That is a different case than what BFS is proposing.  My only concern is that, if these two proposals move forward, there will be issues with how this object works.  In C# and .NET, they have pre-defined … my concern is with the options object being passed in.  If we wanted to include the ability to control how things are equal, it's not just an equals and hash method on those.  Maybe we need to move toKey/toValue to a property of the options object, such that you can have reusable options object along with equals and hash.

BF: Why aren’t they reusable right now?

RBN: If I have a class that uses private state.  (gives example)

BF: other languages have the ability to put your hasher in the options bag. They don’t suffer the problem you’re having so we can talk offline about how they do that.

RBN: I definitely see the use-case for this. Eventually having both equality customization and the ability to map keys and values is very useful.

#### Conclusion/Resolution

- Not seeking stage advancement
- BF: There’s an indefinite blocker, so I'm preparing to withdraw this proposal

## Update on function implementation hiding

Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-function-implementation-hiding)
- [slides](https://docs.google.com/presentation/d/1lWH97DxTLU3_1EJA-F19uIzagZQx7PZmys7WyNXw3cY/edit)

MF: (presents slides)

MF: Any clarifications on the use cases?

SYG: What does "not necessarily based on" mean?

MF: When you create a function, and it has a parameter list, the property gets set at the end for how many parameters it was.

MF: (continues presenting)

YK: I don’t know how much it matters that it doesn’t affect debugging tools, but I’d like to point out that framework debugging tools might want to show more internals, and if you want  that  you wouldn’t be able to use this feature. Imagine that Ember wants to use a directive, like add a checkbox that says show me the framework internals, you would not be able to do this.

DD: It could be something you change in the build steps.

YK: Yes, that’s satisfactory.

GHO: I'm worried about application builders that need to use logs, etc.  How does this affect core dumps?  Because we have to look at lots of logs and postmortems.  If it's not on the stack trace, it makes our life harder.

DD: Those debugging tools are not affected.  This affects the Error.prototype.stack runtime getter.  But debugging tools have much more than that.

MF: If the tool is in a less powerful position, it would be affected by this.

GHO: Did you consider adding something to the stack trace that something was skipped?

DD: It's okay to expose its existence, but not its innards.  So you have a conflict between security and debugging.  That can be solved by debugging at a higher level of privilege.

YD: My use case is similar to GHO's use case.  Sentry is popular for good reasons…

YD: For example, I'm Twitch, and people are hacking around making Chrome extensions, and I want to hide the code from them.  People are running code in the main window to figure out how they can modify my code.

WH: My preference is for the Proposal from the slide deck and not for Alternatives 1-4. In fact, I’d be even happier if we had only the “hide implementation” part of the Proposal. On the other hand, things like Alternative 4 — hiding only the functions _called_ by the function annotated with a directive — appear too weird to me.

(LEO comment missed)

(another comment missed)

MM: Does this apply to modules, classes, and scripts, in addition to functions, and does it nest?  It makes sense for a nested scope to opt back in.  An important use case of Error.prototype.toString() is to stringify functions to evaluable strings, which are sent remotely and evaluated. For this use case, we would mark only specific functions are needing to stringify to evaluable sources. If we had such a mark, everything else could omit sources without affecting this use case.

MF: Could you move those out of the scope and put them in a separate module?

MM: No, there's an important case where that's no.

WH: (answering the same question) No.

DD: This has come up in previous stages, and we were like, well, we can add it later.  We should dig in more to your use case.

MM: You can add it later.

MF: Is there anyone who feels the opposite way?

(silence)

DT: This may be more operationally.  I’m not opposed to having an attribute, but if the things exported from modules are frozen by default, having a symbol that says hide this attached to what you export, that mechanism might make sense that people have looked at for other things.

MF: Let's talk offline

DD: The README mentions using a symbol.

API: Is there anything precluding an engine from eliminating source code entirely?

DD: There’s nothing precluding it other than engineering will.

API: That implies then that would hold in the future.

MM: Modable guys: could you omit the source text and have it be useful?

PST: We (XS) always remove the source text.

#### Conclusion/Resolution

- MF: We want to follow down these two paths, follow up with MM, and go for Stage 3 at the next meeting.

## Casing Conventions

Shane Carr (SFC)

- [slides](https://docs.google.com/presentation/d/1PK01F6mkHLycz9jN8jQZrrg0Rvne4d2Sv-R-uGApYqA/edit)

SFC: (presents slides)

YK: I found DD’s argument to be mildly persuasive and “it’s camel case unless it came from a different spec body” does not result in it being consistent.

SFC: (referring to slide) Can we use option 3 (i.e. use camel case everywhere) as the recommended style for ecma 402 that have similar situations going forward? There are not a lot of identifiers that are more than one word long that triggered this edge case.

YK: I have no objections.

LEO: Would it be fine for TC39 to recommend camelCase?

YK: My expected result from this whole thing is that web specs will use kebab case and some subset of JavaScript will use camel case.

DD: I  am generally in  favor  of consistency across ecosystems,but I want more clarity about people using strings both as outputs and inputs. Is this something people actually do?


SFC: (referring to slide titled “Kebab Case Problem 1”) this is an example of a date, timezone is PST, this would be passed into intl display

DD: Would you take return value.type and feed that into the key?

SFC: That’s a place where a reasonable person could do that. An argument could be made that this case is not convincing enough and we should still use kebab.

DD: It’s really troubling that there will be inconsistencies with unicode specifiers in kebab-case. I do find the case where you feed the output of one case into another, I find that compelling enough to make an objection for those particular strings and use camel case. But otherwise sticking with kebab case across the ecosystem of web/Atomics.wait/Unicode specs seems much preferable.

SFC: Sounds like DD favors Option 2.

DD: Like YK I’m willing to let the intl committee decide here. It's just my input that this would be much better to be consistent when possible, especially if you're already going to use kebab case for Unicode locale identifiers.

SFC: In general, locale identifiers are widely used across all languages, however Unicode identifiers will probably be written as literals.

YK: I agree with DD. I agree with option two. If the string is referring to something in another part of the API, you let the ergonomics of the other API dominate. Other than that, it should follow the ecosystem style.

SFC: I want to raise one more con for opt 2. If we introduce kebab now but in the future want to use them as fields of an object literal. If we use kebab we restrict ourselves

YK: You do  expect DateTime field (??) to use a different API?

LEO: There’s one point missing here. We’ve got an extensive offline discussion in the display names proposal repo (issues 29/32) that is very valuable. My first sentiment was to follow option 2. Shane and Daniel also +1’d. At the end, though, we couldn’t recommend kebab case.

SFC: 3 concrete outcomes possible for today: 1. recommend option 3 officially, 2. Say we’re not ready to recommend across the standard. 3. Roll back and use kebab case more frequently.

SFC: We could say camelCase is our official recommendation, but [not captured] We could say that This is not what we want to recommend but the intl people ??? (can retain the decision they made?).

YK: I feel like this is going in circles. You have to decide what you’re asking, if you’re asking for feedback let’s allow  feedback.

WH: It’s been proposed here that if things are both inputs and outputs, they should be camelCase. I don’t understand that — why does something being an output justify camelCase? Lots of kebab things can also be used as inputs and outputs.

WH: Speaking more generally, I feel that I don’t have enough information to try to pick a blanket policy here. We can continue deciding these things on a case-by-case basis. We could try to make a decision on a general policy, but I’m afraid there is a significant risk we’d regret it later because we don’t know all the places in the ECMAScript language and ecosystem such a policy would impact.

DD: I think to WH’s point, we should ideally as committee not go as option three. If we do, we should figure out what that means for the rest of the language. (cites various examples of where this could be impactful) We need to do this.

This is not something that is very common. There are a handful of examples that are multiple words long. That’s a very small handful right now. In ECMA 402, we want to recommend this going forward, but we’re not in the business of retroactively changing what we’ve done and are not in the business of advising other specs we rely on.

KM: I could be missing some context – correct me if I’m wrong – but is it possible to have both cases with a canonicalization of the two?

SFC: That was an option but I did not include it in these slides. It introduces multiple ways to do the same thing and that was not necessarily a good thing when it was brought up.

SFC: Based on what I’ve heard, it doesn’t seem like TC39 is ready to make a strong stance (like Option 2) on a particular casing.

AKI: When talking about consistency, it’s what TAG recommends and what users expect. When it’s a string it’s kebab case and when it’s an identifier it’s camel case.

SFC: I think it’s hard to make that argument without more data.

YK: I can conflate both of these. Calling it TAG’s rec is a red herring. It means it’s what the web specs do. What would be decisive for me is if you go back to 402 would they learn anything from this or are we wasting their time.

SFC: If I went back to 402, and said the committee weights this [...].

YK: my preference is that you should do that.

AKI: Would you like to ask for consensus on one of these options?

SFC: Do we have consensus for  one of these options?

WH: I’m not going to support or oppose any of these options because I don’t know what the consequences of these decisions would be.

AKI: You were looking for two scenarios. Just what 402 should do and what we as TC39 and 402 should do. Let’s just focus on 402, would that make you more comfortable?

WH: I don’t have enough information to make an informed decision. I am not opposed or in favor of any of these things, I just simply don’t have enough information.

WH: When it comes up, do something reasonable. The places that seem to be causing trouble are the ones where something that’s a “type” (i.e. field name, type, kind) in one context is also used as a value in another. 402 can look for those.

SFC: Does this decision impact the possibility of advancement of the proposals this affects?

WH: To clarify: I’m not interested in making this into a gating requirement for any other proposals, my goal is to do something reasonable for things that are used as both values and types, that’s where camelCase shows up. For other proposals, if you can figure out what’s happening, that may guide a solution of the problem?

YK: Can I call for consensus?

YK: Is there consensus that 402 should weight the W3C precedent more?

WH: I don't know what “weight the W3C precedent more” means.

YK: I think there’s general consensus that 402 could have thought a bit more about the W3C precedent. The fact that we would accept whatever conclusion doesn’t mean we wouldn't want them to think about it.

LEO: Just for extra information, this immediately affects two active proposals displayNames and format.

YK: I think what im saying is that 402 can do whatever it wants here, there is a sense in the room that 402 should think about the recommendation

LEO: Yes, we’ve got a lot of wait. One of the most important motivations for kebab case was consistency in the recommendation document from the W3C. I really tried to bring that in, but one thing that’s important here—if we stick with it for 402, and as proposals are being implemented, it will be impossible to change after the fact. We cannot break the web. This is why we’ve decided not to change what’s already been implemented. We can’t go back and we can’t break the web.

YK: It sounds like there’s no possibility 402 would change their mind.

LEO: There is a possibility. We want to follow through on TC39’s recommendation. I believe 402 is asking for acceptance to follow through on this proposal.

AKI: Can we get consensus that 402 can do what they think is right and if affects anything outside of that scope, it must require consensus from this committee?

LEO: In the scope of casing [yes].

YK: I will take this offline

------- Later discussion ------

LEO: I  just had a conversation with YK offline, and I want to make sure I apologize if anyone felt bad or not included. As the editor of Ecma402, we want to be respectful for everyone. We also meet privately monthly, and I recognize that can sometimes feel not inclusive, but I want to emphasize that we are always open to anyone to attend these monthly meetings.

WH: I’m so glad that you brought the Casing Convention item here, it was _very_ interesting! You brought up a design aspect I had not thought about much before and is an important cross-cutting concern throughout the language.

LEO: Does the committee think it useful to bring changes for unified numberFormat?

(Silence)

LEO: If you have any concerns, please let me know.

#### Conclusion/Resolution

- Recommendation is not made on Option 3.
- Discussion will be taken offline.

## Web built-in module convention guidance from TC39

Domenic Denicola, DD

- [issue](https://github.com/heycam/webidl/issues/755)

DD: On  the web, as in TC39, we’re working on adding built-in modules. We thought it would  be an interesting  opportunity to work on aligning some of the conventions that are currently different and those that we wished were better. A few things that have been brought up

MLS:  I respectfully submit that this is an out of order discussion. I don’t believe this is a Stage 1 concern, or relevant for TC39.

DD: On the web we’re also working on built-in modules.

MLS: We typically don’t want to shop between multiple standards bodies. I don’t think that you brought this to the built-in module committee.

DD: [too fast, not captured]

MLS: Like I said, I think it’s out of order and it’s not a Stage 1 issue.

DD: This isn’t about the built-in module proposal that’s in this committee.

MLS: Then what’s it about?

DD: TC39 typically gives good API design advice, so we want to get that advice. The web has built in globals and TC39 has built in globals. As we move into the web having built-in modules, as with JavaScript having built-in modules, we want alignment.

KM: I think what Michael might be trying to say is that TC39 is not prepared to make a statement since TC39 has not yet made a decision on this and it is out of order to present this.

DD: OK, if that’s how the room feels, I guess individual delegates…(interrupted by YK)

YK: I do not feel that way. DD hasn't said what he intends to get formally out of this.  If DD wants to show us how another group is working on built-in modules, I would like to see that. A priori, I have not seen them. It seems very hostile to silence that discussion.

JHD: I made a presentation a year or two ago about this. The dangers of TC39 ignoring layered specs and what they’re building. I think it is delightful to see the web ask TC39 for advice on what is coming. I think that because of the Stage 1, we wouldn’t be able to make a consensus or recommendation, but hearing what DD has to say is important for informing the proposal. I’m very interested in hearing his presentation, even if we cannot give any advice.

DD: To be clear, this is contextualized by the presentation that DE gave in Berlin presenting all the work on modules, such as those in Wasm modules, JSON modules, HTML modules, WebIDL modules, etc. We think it would be good to collaborate.

MLS: I think this is disrespectful, I think this is out of bounds

DD:  I really don’t want to be disrespectful, so maybe it would be best for delegates to have such  conversations with the other standards bodies, if them coming here is not OK.

WH: I don’t understand MLS’s comment, what is disrespectful here?

MLS: As one of the champions of the built-in module proposal, I think it would have been good to discuss rules about how to build a module. I think that is a good thing to discuss. The point I’m trying to make is that it’s a little premature. Very similar to what happened in Berlin when several delegates made a proposal. I look at our CoC and I find the first point is to be respectful.

JHD: I’m terrified that DD or anyone else walks away discouraged about getting TC39 feedback.

TST: I think the elephant in the room is disagreement on DD's representation of built-in modules (missed…) I agree with the Apple position that they are not independent and that there is a need to coordinate. It is _not_ ok to pretend they are entirely separate. I do believe that you understand this position, to make it sound like this just doesn’t exist, is maybe what MLS is reacting to.

DD: I'd like to shut this down.  It seems my intentions have been misconstrued.  It seems this is not the right venue; let's establish more trust.  I agree that it has been discouraging.  I was hoping for more collaboration but that doesn’t seem to be possible.

YK: I’ll just say, though I have no idea what is going on here, (for once I’m out of the drama here!), it may be a good opportunity to use the presentation to air some of their grievances here. For people who were not in Berlin, it seems a tremendous amount was missed.

WH: I agree with YK. I’m very confused about what just happened here. I have no idea what the backstory is and now I’m afraid to ask.

MLS: I think I’m being pretty clear about what my concern is. This was not shared ahead of time with the champions of the built-in modules proposal

YK: It sounds like you think that the existence of this presentation is dangerous?

MLS: It seems like a shadow proposal—clearly we need to have guidelines about how built-in modules are written.

DD: I would rather discuss this one-on-one offline with you. We do not have a foundation of mutual trust needed for this to be a productive discussion.

#### Conclusion/Resolution

- discuss offline between DD, MLS
